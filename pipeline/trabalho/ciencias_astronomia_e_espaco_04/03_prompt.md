Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Astronomia e Espaço** (tema **Ciências**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Galáxia",
      "descricao": "Sistema enorme de estrelas, gás, poeira e matéria escura mantido unido pela gravidade, como a Via Láctea ou Andrômeda."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra galáxia vem do grego e lembra a faixa esbranquiçada que cruza o céu noturno. O que significa a sua raiz grega?",
    "resposta": "Leite",
    "fonte": [
      "https://en.wikipedia.org/wiki/Galaxy",
      "https://pt.wikipedia.org/wiki/Gal%C3%A1xia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Galaxy",
        "situacao": "ok",
        "texto": "A galaxy is a physical system of stars, planetary systems, stellar remnants, substellar objects, interstellar gas, dust, and dark matter bound together by gravity. The word is derived from the Greek galaxias (γαλαξίας), meaning 'milky', a reference to the Milky Way galaxy that contains the Solar System.\n[…]\nAt the extreme of interactions are galactic mergers, where the galaxies' relative momentums are insufficient to allow them to pass through each other. Instead, they gradually merge to form a single, larger galaxy. Mergers can result in significant changes to the galaxies' original morphology. If one of the galaxies is much more massive than the other, the result is known as cannibalism, where the more massive larger galaxy remains relatively undisturbed, and the smaller one is torn apart.\n[…]\nSome observable galaxies are classified as \"active\" if they contain an active galactic nucleus (AGN). A significant portion of the galaxy's total energy output is emitted by the active nucleus instead of its stars, dust and interstellar medium. There are multiple classification and naming schemes for AGNs, but those in the lower ranges of luminosity are called Seyfert galaxies, while those with luminosities much greater than that of the host galaxy are known as quasi-stellar objects or quasars.\n[…]\nThe Milky Way galaxy and the nearby Andromeda Galaxy are moving toward each other at about 130 km/s, and—depending upon the lateral movements—the two might collide in about five to six billion years. Although the Milky Way has never collided with a galaxy as large as Andromeda before, it has collided and merged with other galaxies in the past. Cosmological simulations indicate that, 11 billion years ago, it merged with a particularly large galaxy that has been labeled the Kraken."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gal%C3%A1xia",
        "situacao": "ok",
        "texto": "Na cosmologia, uma galáxia (do grego \"γαλαξίας\", transli. galaxias ou galaktikos: \"leitoso\", e kyklos: \"círculo\") é um grande sistema, gravitacionalmente ligado, que consiste de estrelas, remanescentes de estrelas, um meio interestelar de gás e poeira, e um, importante mas insuficientemente conhecido, componente apelidado de matéria escura. O termo deriva do grego ‘’galaxias’’, literalmente \"leito\n[…]\nA palavra galáxia deriva do termo grego para a nossa galáxia, galaxias (γαλαξίας, \"leitoso\") ou kyklos (\"círculo\") galaktikos (leitoso)’’, pela sua aparência no céu. Na mitologia grega, Zeus coloca o filho que havia gerado com uma mulher mortal, o pequeno Hércules, no seio de Hera enquanto ela dorme de modo que o bebê, ao tomar o leite divino, também se torne imortal.\n[…]\nHera acorda durante a amamentação e percebe que está alimentando um bebê desconhecido; ela empurra o bebê e um jato do seu leite espirra no céu noturno, produzindo a tênue faixa de luz conhecida como Via Láctea.\n[…]\nO filósofo grego Demócrito de Abdera (450 – 370 a.C.) propôs que a faixa brilhante no céu noturno, conhecida como a Via Láctea, deveria consistir de estrelas distantes.\n[…]\nEm 1920, teve lugar o chamado Grande Debate entre Harlow Shapley e Heber Curtis, a respeito da natureza da Via Láctea, as nebulosas espirais e as dimensões do Universo. Para apoiar sua tese de que a Grande Nebulosa de Andrômeda era uma galáxia externa, Curtis apontou a aparição de faixas escuras lembrando as nuvens de poeira da Via Láctea, além do significativo desvio Doppler.\n[…]\nO primeiro estudo não-visual de galáxias, particularmente de galáxias ativas, foi feito usando frequências de rádio. A atmosfera é quase transparente ao rádio entre 5 MHz e 30 GHz (a ionosfera bloqueia sinais abaixo desta faixa). Grandes interferômetros de rádio foram usados para mapear os jatos ativos emitidos pelos núcleos ativos.\n[…]\nGaláxias\n[…]\nA Galáxia Via-Láctea"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Hélio",
      "descricao": "Elemento químico de número atômico dois, gás nobre leve, identificado primeiro no espectro do Sol em 1868."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O hélio foi identificado primeiro na luz de um astro, durante um eclipse em 1868, e não aqui na Terra. De que palavra grega vem o seu nome?",
    "resposta": "Hélios, o Sol",
    "fonte": [
      "https://en.wikipedia.org/wiki/Helium",
      "https://pt.wikipedia.org/wiki/H%C3%A9lio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Helium",
        "situacao": "ok",
        "texto": "Helium (from Ancient Greek: ἥλιος, romanized: helios, lit. 'sun') is a chemical element; it has symbol He and atomic number 2. It is a colorless, odorless, non-toxic, inert, monatomic gas and the first in the noble gas group in the periodic table. Its boiling point is the lowest among all the elements, and it does not have a melting point at standard pressures. It is the second-lightest and second\n[…]\nHelium was first detected as an unknown, yellow spectral line signature in sunlight during a solar eclipse in 1868 by Georges Rayet, Captain C. T. Haig, Norman R. Pogson, and Lieutenant John Herschel, and was subsequently confirmed by French astronomer Jules Janssen. Janssen is often jointly credited with detecting the element, along with Norman Lockyer. Janssen recorded the helium spectral line during the solar eclipse of 1868, while Lockyer observed it from Britain.\n[…]\nThe first evidence of helium was observed on August 18, 1868, as a bright yellow line with a wavelength of 587.49 nanometers in the spectrum of the chromosphere of the Sun. The line was detected by French astronomer Jules Janssen during a total solar eclipse in Guntur, India. This line was initially assumed to be sodium.\n[…]\nOn October 20 of the same year, English astronomer Norman Lockyer observed a yellow line in the solar spectrum, which he named the D3 because it was near the known D1 and D2 Fraunhofer lines of sodium. He concluded that it was caused by an element in the Sun unknown on Earth. Lockyer named the element helium, from the Greek word for the Sun, ἥλιος (helios).\n[…]\nThe Bureau of Land Management (BLM) has proposed an October 2024 plan for managing natural resources in western Colorado. The plan involves closing 543,000 acres to oil and gas leasing while keeping 692,300 acres open. Among the open areas, 165,700 acres have been identified as suitable for helium recovery."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/H%C3%A9lio",
        "situacao": "ok",
        "texto": "O hélio (em grego: Ήλιος; romaniz.: Helios; lit. \"\"Sol\"\") é um elemento químico de símbolo He e que possui massa atómica igual a 4 u, apresentando número atômico 2 (2 prótons e 2 elétrons). Em temperatura ambiente o hélio encontra-se no estado gasoso.\n[…]\nAlém das citadas o hélio tem outras aplicações, como:\n[…]\nO hélio foi descoberto de forma independente pelo francês Pierre Janssen e pelo inglês Norman Lockyer, em 18 de agosto de 1868, ao analisarem o cromosfera solar durante um eclipse solar ocorrido naquele ano, encontrando uma linha de emissão de um elemento desconhecido. Edward Frankland confirmou os resultados de Janssen e propôs o nome helium para o novo elemento, em honra ao deus grego do sol (Hélio) com o sufixo -ium.\n[…]\nEm 1908 o físico holandês Heike Kamerlingh Onnes produziu hélio líquido esfriando o gás até 0,9 K, o que lhe rendeu o prêmio Nobel. Em 1926 seu discípulo Willem Hendrik Keesom conseguiu pela primeira vez solidificar o hélio.\n[…]\nHélio 3\n[…]\nÉ um isótopo de hélio pouco comum na Terra. Ele é muito abundante na Lua, devido aos ventos solares que acumularam hélio 3 por milhares de anos.\n[…]\nHélio 4\n[…]\nÉ o isótopo mais encontrado na Terra, sendo o mais estável entre todos os isótopos de hélio.\n[…]\nO hélio líquido (hélio-4) se encontra em duas formas distintas: hélio-4 I e hélio-4 II, entre os quais ocorre uma brusca transição a 2,1768 K (ponto lambda). O He-I, acima dessa temperatura é um líquido normal, porém o He-II abaixo dessa temperatura, não se parece a nenhuma outra substância, converte-se num superfluido cujas  características incomuns se devem a efeitos quânticos, um dos primeiros casos que  se tem observado em escala macroscópica.\n[…]\n«WebElements.com - Helium» (em inglês)\n[…]\n«Hélio - vídeos e imagens»"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Plêiades",
      "descricao": "Aglomerado aberto de estrelas na constelação de Touro, conhecido no Brasil como Sete-Estrelo."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na mitologia grega, as Plêiades eram sete irmãs. Elas eram filhas de qual titã, condenado a sustentar o céu nos ombros?",
    "resposta": "Atlas",
    "distratores": [
      "Prometeu",
      "Cronos",
      "Hipérion"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pleiades_(Greek_mythology)",
      "https://en.wikipedia.org/wiki/Pleiades"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pleiades_(Greek_mythology)",
        "situacao": "ok",
        "texto": "The Pleiades (Ancient Greek: Πλειάδες, pronounced [pleːádes], , PLEE-uh-deez, PLAY-, PLY-) were the seven sister-nymphs, companions of Artemis, the goddess of the hunt. Together with their sisters, the Hyades, they were sometimes called the Atlantides, Dodonides, or Nysiades, nursemaids and teachers of the infant Dionysus. The Pleiades were thought to have been translated to the night sky as a clu\n[…]\nThe Pleiades' parents were the Titan Atlas and the Oceanid Pleione born on Mount Cyllene. In some accounts, their mother was called Aethra, another Oceanid. Aside from the above-mentioned sisters (the Hyades), the Pleiades' other siblings were Hyas and the nymph Calypso who was famous in the tale of Odysseus. Sometimes they were related as half-sisters to the Hesperides, nymphs of the evening and sunset.\n[…]\nAfter Atlas was forced to carry the heavens on his shoulders, Orion began to pursue all of the Pleiades, and Zeus transformed them first into doves, and then into stars to comfort their father. The constellation of Orion is said to still pursue them across the night sky.\n[…]\nOne of the most memorable myths involving the Pleiades is the story of how these sisters literally became stars, their catasterism. According to some versions of the tale, all seven sisters killed themselves because they were so saddened by either the fate of their father, Atlas, or the loss of their siblings, the Hyades. In turn, Zeus, the ruler of the Greek gods, immortalized the sisters by placing them in the sky.\n[…]\nThere these seven stars formed the star cluster known thereafter as the Pleiades.\n[…]\nAlexandrian Pleiad\n[…]\nChisholm, Hugh, ed. (1911). \"Pleiades\" . Encyclopædia Britannica. Vol. 21 (11th ed.). Cambridge University Press. p. 835.\n[…]\nKohn, Rachael (October 10, 2004). \"The Seven Stars of the Pleiades\". Australian Broadcasting Corporation. Retrieved 2007-05-01."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pleiades",
        "situacao": "ok",
        "texto": "The Pleiades ( PLEE-ə-deez, PLAY-, PLY-), also known as the Seven Sisters and Messier 45 (M45), is an asterism of an open star cluster containing young B-type stars in the northwest of the constellation Taurus. At a distance of about 444 light-years, it is among the star clusters nearest to Earth and is the Messier object nearest to Earth, being the star cluster most obvious to the naked eye in th\n[…]\nLater work consistently argued that the Hipparcos distance measurement for the Pleiades was erroneous: In particular, distances derived to the cluster via the Hubble Space Telescope and infrared color–magnitude diagram fitting (so-called \"spectroscopic parallax\") favor a distance between 135 and 140 pc; a dynamical distance from optical interferometric observations of the inner pair of stars within Atlas (a bright triple star in the Pleiades) favors a distance of 133 to 137 pc.\n[…]\nThe brightest stars of the cluster are named after the Seven Sisters in Greek mythology: Asterope, Merope, Electra, Maia, Taygeta, Celaeno, and Alcyone; as well as their parents, Pleione and Atlas. As daughters of Atlas, the Hyades were sisters of the Pleiades. The stars were not individually named by the ancient Greeks, but only in post-telescopic times once they could be clearly distinguished.\n[…]\nThe first recorded use of their current names was by Giovanni Battista Riccioli in his 1665 book Astronomia Reformata, which credited Vicente Mut Armengol for naming the seven main stars and Michael van Langren for naming Atlas and Pleione. These names did not become widely used until the 19th century, after which they became established and are now officially recognized by the IAU.\n[…]\nBibliothèque de la Pléiade\n[…]\nThe Pleiades on WikiSky: DSS2, SDSS, GALEX, IRAS, Hydrogen α, X-Ray, Astrophoto, Sky Map, Articles and images\n[…]\nInformation on the Pleiades from SEDS\n[…]\nPleiades at the Astrophysics Data System"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pl%C3%AAiades_%28mitologia%29",
        "situacao": "ok",
        "texto": "Na mitologia grega, as plêiades eram filhas de Atlas e Pleione, filha do Oceano. Quando Pleione estava passeando pela Beócia com suas sete filhas, foi perseguida pelo caçador Órion, por sete anos. Zeus, com pena delas, apontou um caminho até as estrelas, e elas formaram a cauda da constelação do Touro.\n[…]\nAs plêiades são: Electra, Maia, Taigete, Alcíone, Celeno, Asterope e Mérope.\n[…]\nSeis das plêiades tiveram filhos com deuses, mas Mérope casou-se com um mortal, por isso esta estrela não pode ser vista. A existência de estrelas que não podiam ser vistas pelo olho nu só foi demonstrada cientificamente quando Galileu apontou o telescópio para o céu.</ref>\n[…]\nMérope, por ter casado com um mortal, é uma estrela muito fraca; outras versões do mito dizem que Electra é a estrela que sumiu, após a captura de Troia e derrubada dos descendentes de Dardano, de tristeza, ela se mudou para o círculo ártico, e aparece algumas vezes com seus cabelos soltos, na forma de um cometa.\n[…]\nPlêiades",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Ceres",
      "descricao": "Planeta anão do cinturão de asteroides entre Marte e Júpiter, com manchas brilhantes na cratera Occator."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O planeta anão Ceres e a palavra cereal devem o nome à mesma deusa romana. Ela protegia o quê?",
    "resposta": "A agricultura e as colheitas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ceres_(mythology)",
      "https://en.wikipedia.org/wiki/Ceres_(dwarf_planet)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ceres_(mythology)",
        "situacao": "ok",
        "texto": "In ancient Roman religion, Ceres ( SEER-eez, Latin: [ˈkɛreːs]) was a goddess of agriculture, grain crops, fertility, and motherly relationships. She was originally the central deity in Rome's so-called plebeian or Aventine Triad, then was paired with her daughter Proserpina in what Romans described as \"the Greek rites of Ceres\". Her seven-day April festival of Cerealia included the popular Ludi Ce\n[…]\nWithin the Agnone tablet, numerous other gods are mentioned with the accompanying adjective Kerríi (\"of Ceres\"). These deities are themselves often linked with agriculture or fertility, such as \"fluusaí kerríiaí\" (\"She who flowers of Ceres\") or \"fuutreí kerríiaí\" (\"daughter of Ceres\").\n[…]\nOtherwise, in Paelignian culture, Ceres was possibly connected with agriculture, as another inscription mentions a \"Cerfum sacracirix semunu,\" which perhaps means \"priestess of the Cereres and the divinities of sowing.\" It is unclear whether the plural form Cereres consists of both Ceres and her daughter Proserpina or perhaps Venus and Ceres, who are known from another inscription to have been worshipped together by another Paelignian priesthood.\n[…]\nThe relationship between the reigning emperor, empress and Ceres was formalised in titles such as Augusta mater agrorum (\"The august mother of the fields\") and Ceres Augusta. On coinage, various emperors and empresses wear her corona spicea, showing that the goddess, the emperor and his spouse are conjointly responsible for agricultural prosperity and the all-important provision of grain.\n[…]\nIn the United States, Ceres is one of the three \"goddess offices\" held in The National Grange of the Order of Patrons of Husbandry. She is depicted on the Seal of New Jersey. Statues of her top the Missouri State Capitol, the Vermont State House, and the Chicago Board of Trade Building, all of which have historical links with agriculture and agricultural trade."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ceres_(dwarf_planet)",
        "situacao": "ok",
        "texto": "Ceres (minor-planet number 1) is a dwarf planet in the main asteroid belt between the orbits of Mars and Jupiter. It was the first object identified in the asteroid belt, discovered on 1 January 1801 by Giuseppe Piazzi at Palermo Astronomical Observatory in Sicily, and announced as a new planet. Ceres was later classified as an asteroid, and then more recently as the only confirmed dwarf planet wi\n[…]\nPiazzi's proposed name for his discovery was Ceres Ferdinandea: Ceres after the Roman goddess of agriculture, whose earthly home, and oldest temple, lay in Sicily; and Ferdinandea in honour of Piazzi's monarch and patron, King Ferdinand III of Sicily. The latter was not acceptable to other nations and was dropped. Before von Zach's recovery of Ceres in December 1801, von Zach referred to the planet as Hera, and Bode referred to it as Juno.\n[…]\nIn 1852 Johann Franz Encke, in the Berliner Astronomisches Jahrbuch, declared the traditional system of granting planetary symbols too cumbersome for these new objects and introduced a new method of placing numbers before their names in order of discovery. The numbering system initially began with the fifth asteroid, 5 Astraea, as number 1, but in 1867, Ceres was adopted into the new system under the name 1 Ceres.\n[…]\nThe active geology of Ceres is driven by ice and brines. Water leached from rock is estimated to possess a salinity of around 5%. Altogether, Ceres is approximately 50% water by volume (compared to 0.1% for Earth) and 73% rock by mass.\n[…]\nFrom June to October 2018, Dawn orbited Ceres from as close as 35 km (22 mi) to as far away as 4,000 km (2,500 mi). The Dawn mission ended on 1 November 2018 after the spacecraft ran out of fuel.\n[…]\nCeres Trek – An integrated map browser of datasets and maps for 1 Ceres\n[…]\nCeres 3D Model – NASA\n[…]\nGoogle Ceres 3D, interactive map of the dwarf planet\n[…]\nCeres (dwarf planet) at AstDyS-2, Asteroids—Dynamic Site"
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
    "indice": 5,
    "ancora": {
      "nome": "Valentina Tereshkova",
      "descricao": "Cosmonauta soviética, primeira mulher no espaço, na missão Vostok 6 em 1963."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Durante o voo de 1963, Valentina Tereshkova falava com a Terra usando um codinome de rádio. Que ave esse codinome significa em russo?",
    "resposta": "Gaivota",
    "distratores": [
      "Andorinha",
      "Pomba",
      "Águia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Valentina_Tereshkova"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Valentina_Tereshkova",
        "situacao": "ok",
        "texto": "Valentina Vladimirovna Tereshkova (born 6 March 1937) is a Russian engineer, politician, and former Soviet cosmonaut. She was the first woman in space, having flown a solo mission on Vostok 6 on 16 June 1963. She orbited the Earth 48 times, spent almost three days in space, and is the only woman to have been on a solo space mission. She is the last surviving Vostok programme cosmonaut.\n[…]\nGold Space Medal (FAI, 1963)\n[…]\nNumerous objects and places were named after Tereshkova in the USSR and Russia. Novopromyshna Square in Tver was renamed Tereshkova Square in 1963.\n[…]\nFashion designer Pierre Cardin was inspired to create his Space Age styles after visiting the Soviet Union in 1963 and seeing photos of Tereshkova in her spacesuit and helmet.\n[…]\nIn 1997, London-based electronic pop group Komputer released a song entitled \"Valentina\" which describes her career as a cosmonaut. It was released as a single and appears on their album The World of Tomorrow. The 2000 album Vostok 6 by Kurt Swinghammer is a concept album about Tereshkova. The 2015 album The Race for Space by Public Service Broadcasting (feat. Smoke Fairies) included a track entitled \"Valentina\".\n[…]\nIn the same year, Findlay Napier's album VIP: Very Interesting Persons included a song \"Valentina\", written in her honour by Napier and Boo Hewerdine. In 2015, a short film entitled Valentina's Dream was released by Meat Bingo Productions. The film stars Rebecca Front as Tereshkova and is based on an interview by the former cosmonaut where she expressed a desire to journey to Mars.\n[…]\nGauthier, Daniel (July–August 1991). \"Valentina Vladimirovna Tereshkova\". Ad Astra. Vol. 3, no. 6. p. 29.\n[…]\nO'Neil, Bill (14 August 1993). \"Whatever Became of Valentina Tereshkova?\". New Scientist. Vol. 139, no. 1886. p. 21.\n[…]\nSharpe, Mitchell R. (1975). \"It Is I, Sea Gull\": Valentina Tereshkova, First Woman in Space. Crowell. ISBN 978-0-690-00646-9."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Valentina_Tereshkova",
        "situacao": "ok",
        "texto": "Valentina Vladimirovna Tereshkova (em russo:  Валентина Владимировна Терешкова; Bolshoye Maslennikovo, 6 de março de 1937) é uma engenheira russa, membro da Duma Estatal e ex-cosmonauta da União Soviética. Ela foi a primeira mulher no espaço, tendo voado em uma missão solo na Vostok 6 em 16 de junho de 1963. Ela orbitou a Terra 48 vezes, passou quase três dias no espaço, é a única mulher a ter est\n[…]\nNikolai Kamanin, piloto herói de guerra soviético e então chefe do departamento de treinamento de cosmonautas do programa espacial soviético, depois chamaria Tereshkova de \"Gagarin de saias\".\n[…]\nEla completou 48 órbitas ao redor da Terra, no total de 71 horas, quase três dias, apesar das náuseas, vômitos – segundo ela pela qualidade da comida a bordo – de dores fortes na canela direita a partir do segundo dia e do desconforto psicológico que sentiu. Após chegarem a permanecer em órbita a uma distância de 5 km uma da outra, com Bykovsky e Tereshkova trocando impressões e saudações por rádio entre si e com o controle de terra, ambas as naves aterrissaram no dia 19 de junho.\n[…]\nNo local onde Valentina pousou, existe hoje um pequeno parque com uma estátua de prata retratando a cosmonauta com os braços abertos, vestida em traje espacial e sem capacete. Seu sinal de chamada na Vostok VI, \"Chaika\" (gaivota), tornou-se seu apelido entre o povo soviético. Uma cratera na Lua, Tereshkova e um asteróide, 1671 Chaika, foram batizados em sua homenagem.\n[…]\nAo realizar o primeiro voo espacial feminino, Valentina recebeu as duas principais condecorações do país, Herói da União Soviética e a Ordem de Lenin, além de outras comendas e homenagens importantes. Em 2013, durante as comemorações do 50º aniversário de seu voo, recebeu a Ordem de Alexandre Nevsky das mãos de Vladimir Putin.\n[…]\nBiografia de Valentina Tereshkova no site Energia (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Laika",
      "descricao": "Cadela soviética lançada ao espaço a bordo do Sputnik 2, em 1957."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome russo da cadela Laika, lançada no Sputnik 2, descreve um hábito comum dos cães. O que ele significa?",
    "resposta": "Latidora",
    "fonte": [
      "https://en.wikipedia.org/wiki/Laika"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Laika",
        "situacao": "ok",
        "texto": "Laika ( LY-kə; Russian: Лайка, IPA: [ˈlajkə]; c. 1954 – 3 November 1957) was a Soviet space dog who was one of the first animals in space and the first to orbit the Earth. A stray mongrel from the streets of Moscow, she flew aboard the Sputnik 2 spacecraft, launched into low orbit on 3 November 1957. As the technology to re-enter the atmosphere had not yet been developed, Laika's survival was neve\n[…]\nAt peak acceleration, Laika's respiration increased to between three and four times the pre-launch rate. The sensors showed her heart rate was 103 beats/min before launch and increased to 240 beats/min during the early acceleration. After reaching orbit, Sputnik 2's nose cone was jettisoned successfully; however, the \"Block A\" core did not separate as planned, preventing the thermal control system from operating correctly.\n[…]\nIn October 2002, Dimitri Malashenkov, one of the scientists behind the Sputnik 2 mission, revealed that Laika had died by the fourth circuit of flight from overheating. According to a paper he presented to the World Space Congress in Houston, Texas, \"It turned out that it was practically impossible to create a reliable temperature control system in such limited time constraints.\"\n[…]\nOver five months later, after 2,570 orbits, Sputnik 2 disintegrated during re-entry on 14 April 1958.\n[…]\nSputnik 2 was not designed to be retrievable, and it had always been accepted that Laika would die. The mission sparked a debate across the globe on the mistreatment of animals and animal testing in general to advance science.\n[…]\nIn the periodical's section dedicated to astronautics, Krzysztof Boruń described the Sputnik 2 mission as \"regrettable\" and criticised not bringing Laika back to Earth alive as \"undoubtedly a great loss for science\".\n[…]\nMedia related to Laika at Wikimedia Commons\n[…]\nQuotations related to Laika at Wikiquote\n[…]\nHistory of Sputnik Missions\n[…]\nSputnik 2 at Astronautix"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Laika",
        "situacao": "ok",
        "texto": "Laika (em russo:  Ла́йка; c. 1954 – 3 de novembro de 1957) foi uma cadela espacial soviética que se tornou um dos primeiros animais a serem lançados no espaço e o primeiro deles a orbitar a Terra. Laika era uma cadela que vagava pelas ruas de Moscou e acabou sendo selecionada para ser a ocupante da nave espacial soviética Sputnik 2, que foi lançada ao espaço sideral em 3 de novembro de 1957.\n[…]\nA NASA se refere a Laika como um \"terrier parcialmente samoieda\". Uma revista russa descreveu seu temperamento como fleumático, dizendo que ela não brigava com outros cães.\n[…]\nA União Soviética e os Estados Unidos já haviam enviado animais vivos em voos suborbitais. Três cães foram treinados para embarcar no Sputnik 2: Albina, Mushka e Laika. Os cientistas soviéticos Vladimir Yazdovsky e Oleg Gazenko, especializados em vida no espaço, treinaram os cães. Para adaptar os cães à pequena cabine do Sputnik 2 eles foram mantidos em gaiolas progressivamente menores por períodos de até vinte dias.\n[…]\nMais de cinco meses depois, após 2,57 mil órbitas, o Sputnik 2, incluindo os restos de Laika, se desintegrou durante sua reentrada na atmosfera, em 14 de abril de 1958.\n[…]\nO Sputnik 2 não foi projetado para ser recuperável e sempre se teve o conhecimento de que Laika morreria. A missão desencadeou um debate internacional sobre abuso e testes com animais em geral para promover a ciência. No Reino Unido a Liga Nacional de Defesa Canina pediu a todos os donos de cães que observassem um minuto de silêncio, enquanto a Sociedade Real para a Prevenção da Crueldade contra Animais (RSPCA) recebeu protestos antes mesmo da Rádio Moscou terminar de anunciar o lançamento.\n[…]\nNa seção do periódico dedicada à astronáutica, Krzysztof Boruń descreveu a missão do Sputnik 2 como \"lamentável\" e criticou não trazer Laika de volta à Terra como \"indubitavelmente uma grande perda para a ciência\".\n[…]\nSputnik 2 na Astronautix",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Apollo 11",
      "descricao": "Missão da Nasa que levou os primeiros seres humanos à superfície da Lua."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na Apollo 11, o módulo lunar se chamava Eagle, ou Águia. Que nome tinha o módulo de comando, que ficou na órbita da Lua?",
    "resposta": "Columbia",
    "distratores": [
      "Odyssey",
      "America",
      "Yankee Clipper"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Apollo_11"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Apollo_11",
        "situacao": "ok",
        "texto": "Apollo 11 (July 16–24, 1969) was the American spaceflight that first landed humans on the Moon, and the fifth crewed mission of NASA's Apollo program. The mission was crewed by Commander Neil Armstrong, Command Module Pilot Michael Collins, and Lunar Module Pilot Edwin \"Buzz\" Aldrin, all of whom were on their second and final spaceflight.\n[…]\nThe astronauts had personal preference kits (PPKs), small bags containing personal items of significance they wanted to take with them on the mission. Five 0.5-pound (0.23 kg) PPKs were carried on Apollo 11: three (one for each astronaut) were stowed on Columbia before launch, and two on Eagle.\n[…]\nRoughly two hours later, at 17:54:00 UTC, the Apollo 11 crew on the surface safely lifted off in Eagle's ascent stage to rejoin Collins aboard Columbia in lunar orbit. Film taken from the LM ascent stage upon liftoff from the Moon reveals the American flag, planted some 25 feet (8 m) from the descent stage, whipping violently in the exhaust of the ascent stage engine. Aldrin looked up in time to witness the flag topple: \"The ascent stage of the LM separated ...\n[…]\nEagle rendezvoused with Columbia at 21:24 UTC on July 21, and the two docked at 21:35. Eagle's ascent stage was jettisoned into lunar orbit at 23:41. Just before the Apollo 12 flight, it was noted that Eagle was still likely to be orbiting the Moon. Later NASA reports mentioned that Eagle's orbit had decayed, resulting in it impacting in an \"uncertain location\" on the lunar surface. In 2021, however, some calculations show that the lander may still be in orbit.\n[…]\nColumbia was moved in 2017 to the NASM Mary Baker Engen Restoration Hangar at the Steven F. Udvar-Hazy Center in Chantilly, Virginia, to be readied for a four-city tour titled Destination Moon: The Apollo 11 Mission.\n[…]\nApollo 11 Restored EVA Part 1 (1 hour of restored footage)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Apollo_11",
        "situacao": "ok",
        "texto": "Apollo 11 foi um voo espacial tripulado norte-americano responsável pelo primeiro pouso na Lua. Os astronautas Neil Armstrong e Buzz Aldrin alunissaram o módulo lunar Eagle em 20 de julho de 1969 às 20h17min UTC. Armstrong tornou-se o primeiro humano a pisar na superfície lunar seis horas depois já no dia 21, seguido por Aldrin vinte minutos depois. Os dois passaram por volta de duas horas e quinz\n[…]\nOs nomes Snowcone para o Módulo de Comando e Haystack para o Módulo Lunar foram usados em comunicações internas e externas durante os estágios iniciais de planejamento. O Módulo Lunar foi oficialmente nomeado de Eagle seguindo o tema de águia muito presente no emblema. Scheer sugeriu que o Módulo de Comando fosse nomeado Columbia devido o Columbiad, o canhão gigante que lançou a nave espacial do romance De la Terre à la Lune de Júlio Verne.\n[…]\nOs astronautas possuíam um kit de preferências pessoais (PPKs): uma pequena sacola que continha itens pessoais de importância que eles queriam levar consigo na missão. Cinco PPKs de 23 gramas cada foram levados pela Apollo 11: três (um para cada astronauta) foram guardados no Columbia antes do lançamento, enquanto os outros dois foram colocados no Eagle.\n[…]\nO plano de voo tinha o Eagle indo reencontrar o Columbia, porém Collins se preparou para certas contingências em que precisaria voar o Módulo de Comando e Serviço até o Módulo Lunar.\n[…]\nO Eagle reencontrou com o Columbia às 21h24min UTC do dia 21 de julho, com os dois acoplando onze minutos depois. O estágio de subida foi descartado na órbita lunar às 23h41min UTC. Foi comentado pouco antes do voo da Apollo 12 em novembro que o Eagle provavelmente ainda estava orbitando a Lua. Relatórios posteriores da NASA mencionaram que a órbita do Módulo Lunar tinha decaído e que ele tinha caído em um \"local desconhecido\" na superfície lunar.\n[…]\n«Diário de Voo da Apollo 11» (em inglês). Divisão Histórica da NASA",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Galáxia de Andrômeda",
      "descricao": "Galáxia espiral do Grupo Local, a cerca de dois milhões e meio de anos-luz da Terra."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A galáxia de Andrômeda leva o nome de uma princesa mitológica acorrentada a uma rocha. Que herói grego a salvou de um monstro marinho?",
    "resposta": "Perseu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Andromeda_(mythology)",
      "https://en.wikipedia.org/wiki/Andromeda_Galaxy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Andromeda_(mythology)",
        "situacao": "ok",
        "texto": "In Greek mythology, Andromeda (; Ancient Greek: Ἀνδρομέδα, romanized: Androméda or Ἀνδρομέδη, Andromédē) is the daughter of Cepheus, the king of Aethiopia, and his wife, Cassiopeia. When Cassiopeia boasts that she (or Andromeda) is more beautiful than the Nereids, Poseidon sends the sea monster Cetus to ravage the coast of Aethiopia as divine punishment. Queen Cassiopeia understands that chaining \n[…]\nIn the 1851 novel Moby-Dick, Herman Melville's narrator Ishmael discusses the Perseus and Andromeda myth in two chapters. Chapter 55, \"Of the Monstrous Pictures of Whales,\" mentions depictions of Perseus rescuing Andromeda from Cetus in artwork by Guido Reni and William Hogarth. In Chapter 82, \"The Honor and Glory of Whaling,\" Ishmael recounts the myth and says that the Romans found a giant whale skeleton in Joppa that they believed to be the skeleton of Cetus.\n[…]\nThe legend of Saint George and the Dragon, in which a courageous knight rescues a princess from a monster (with clear parallels to the Andromeda myth), became a popular subject for art in the Late Middle Ages, and artists drew from both traditions. One result is that Perseus is often shown with the flying horse Pegasus when fighting the sea monster, even though classical sources consistently state that he flew using winged sandals.\n[…]\nShe is depicted naturalistically, exemplifying the painter's rejection of idealized beauty. Frederic, Lord Leighton's Gothic style 1891 Perseus and Andromeda painting presents the white body of Andromeda in pure and untouched innocence, indicating an unfair sacrifice for a divine punishment that was not directed towards her, but to her mother. Pegasus and Perseus are surrounded by a halo of light that connects them visually to the white body of the princess.\n[…]\nWhether we are to assume that this is also how Andromeda came to be born pale in the first place is unclear."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Andromeda_Galaxy",
        "situacao": "ok",
        "texto": "The Andromeda Galaxy is a barred spiral galaxy and is the nearest major galaxy to the Milky Way. It was originally named the Andromeda Nebula and is cataloged as Messier 31, M31, and NGC 224. Andromeda has a D25 isophotal diameter of about 46.56 kiloparsecs (152,000 light-years) and is approximately 765 kpc (2.5 million light-years) from Earth.\n[…]\nThe galaxy's name stems from the area of Earth's sky in which it appears, the constellation of Andromeda, which itself is named after the princess who was the wife of Perseus in Greek mythology.\n[…]\nAndromeda Galaxy's tangential or sideways velocity concerning the Milky Way is uncertain, but estimated to be smaller than the approaching velocity. After the sideways velocity was first measured, Andromeda was predicted to collide directly with the Milky Way in about 4 billion years. However, later calculations, including a higher sideways velocity measurement from the Gaia spacecraft and the effect of other Local Group galaxies found a much lower probability of a merger.\n[…]\nA likely outcome of the collision would be that the galaxies will merge to form a giant elliptical galaxy or possibly large disc galaxy. Such events are frequent among the galaxies in galaxy groups. The fate of Earth and the Solar System in the event of a collision is currently unknown. Before the galaxies merge, there is a small chance that the Solar System could be ejected from the Milky Way or join the Andromeda Galaxy.\n[…]\nFrom the Southern Hemisphere the Andromeda Galaxy is visible between October and December, best viewed from as far north as possible. Binoculars can reveal some larger structures of the galaxy and its two brightest satellite galaxies, M32 and M110.\n[…]\nList of galaxies\n[…]\nMessier 31, SEDS Messier pages\n[…]\nThan, Ker (23 January 2006). \"Strange Setup: Andromeda's Satellite Galaxies All Lined Up\". Space.com."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Andr%C3%B4meda_%28mitologia%29",
        "situacao": "ok",
        "texto": "Andrômeda (português brasileiro) ou Andrómeda (português europeu), na mitologia grega, foi uma princesa da Etiópia, oferecida como sacrifício a um monstro marinho. Foi salva por Perseu, que a tomou como esposa.\n[…]\nAndrômeda era filha de Cefeu, rei da Etiópia, e de Cassiopeia.\n[…]\nSeu marido, Perseu, era filho de Dânae e Zeus (ou de Preto, tio de Dânae).\n[…]\nA mãe de Andrômeda disse que a sua beleza excedia a beleza das nereidas, e Poseidon exigiu que ela fosse sacrificada a Ceto (mitologia), um monstro marinho. Perseu, porém, voando com sandálias aladas de Hermes, libertou-a do perigo. Quando Perseu quis se casar com Andrômeda, Cefeu e Agenor, noivo da princesa, tiveram um plano para matá-lo, mas Perseu usou a cabeça da Medusa para transformá-los em pedra.\n[…]\nFênix aproveitou a chance dada pelo futuro sogro e levou Andrômeda em seu navio decorado com uma baleia, chamado de Cetus. Andrômeda, acreditando estar sendo raptada, gritou por socorro, o que chamou a atenção de Perseu. O herói pulou para o barco com tal fúria que deixou os marinheiros petrificados e levou Andrômeda consigo para Argos.\n[…]\nDepois que Perseu voltou com Andrômeda, Polidecto, vendo a coragem de Perseu, tentou matá-lo a traição, porém também foi transformado em pedra.\n[…]\nPerseu e Andrômeda tiveram vários filhos: Perses, que nasceu antes de Perseu chegar à Grécia, foi deixado com Cefeu, e se tornou o antepassado dos persas, e, em Micenas, nasceram Alceu, Estênelo, Heleu, Mestor, Electrião e a filha Gorgófona, que se casou com Perieres.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Mercúrio",
      "descricao": "Planeta mais próximo do Sol e o menor do Sistema Solar."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O planeta que gira mais depressa em volta do Sol recebeu o nome de um deus romano de sandálias aladas. Que função esse deus tinha?",
    "resposta": "Mensageiro dos deuses",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mercury_(planet)",
      "https://en.wikipedia.org/wiki/Mercury_(mythology)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mercury_(planet)",
        "situacao": "ok",
        "texto": "Mercury is the first planet from the Sun and the smallest in the Solar System. It is a rocky planet with a trace atmosphere and a surface gravity slightly lower than that of Mars. The surface of Mercury is similar to Earth's Moon, being cratered, with an expansive rupes system generated from thrust faults, and bright ray systems, formed by ejecta. Its largest crater, Caloris Planitia, has a diamet\n[…]\nNames for features on Mercury come from a variety of sources and are set according to the IAU planetary nomenclature system. Names coming from people are limited to the deceased. Craters are named for artists, musicians, painters, and authors who have made outstanding or fundamental contributions to their field. Ridges, or dorsa, are named for scientists who have contributed to the study of Mercury. Depressions or fossae are named for works of architecture.\n[…]\nThe European Space Agency and the Japanese Space Agency developed and launched a joint mission called BepiColombo, which will orbit Mercury with two probes: one to map the planet and the other to study its magnetosphere. BepiColombo was launched on October 20, 2018. It will release a magnetometer probe into an elliptical orbit, then chemical rockets will fire to deposit the mapper probe into a circular orbit. Both probes will operate for one terrestrial year.\n[…]\nThe mapper probe carries an array of spectrometers similar to those on MESSENGER, and will study the planet at many different wavelengths including infrared, ultraviolet, X-ray and gamma ray. BepiColombo conducted the first of its six planned Mercury flybys on October 1, 2021, and the sixth was completed on January 9, 2025. The spacecraft will enter the planet's orbit in 2026.\n[…]\nMercury nomenclature and map with feature names from the USGS/IAU Gazetteer of Planetary Nomenclature\n[…]\n3D globe of Mercury by Google\n[…]\nMercury at Solarviews.com\n[…]\nMercury by Astronomy Cast"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mercury_(mythology)",
        "situacao": "ok",
        "texto": "Mercury (; Latin: Mercurius [mɛrˈkʊrijʊs] ) is a major god in Roman religion and mythology, being one of the 12 Dii Consentes within the ancient Roman pantheon. He is the god of boundaries, commerce, communication (including divination), eloquence, financial gain, languages, luck, thieves, travelers, and trickery; he is also the guide of souls to the underworld.\n[…]\nMercurius Gebrinius, a syncretism of Mercury with the Celtic or Germanic Gebrinius, known from an inscription on an altar in Bonn, Germany.\n[…]\nMercurius Sobrius (\"Mercury the Teetotaler\"), a syncretism of Mercury with a Carthaginian god of commerce.\n[…]\nMercury's temple in Rome was situated in the Circus Maximus, between the Aventine and Palatine Hills, and was built in 495 BC.\n[…]\nThe temple was regarded as a fitting place to worship a swift god of trade and travel, since it was a major center of commerce as well as a racetrack. Since it stood between the plebeian stronghold on the Aventine and the patrician center on the Palatine, it also emphasized the role of Mercury as a mediator.\n[…]\nBecause Mercury was not one of the early deities surviving from the Roman Kingdom, he was not assigned a flamen (priest), but he did have his own major festival, on 15 May, the Mercuralia. During the Mercuralia, merchants sprinkled water from his sacred well near the Porta Capena on their heads .\n[…]\nMercury features in the first published comic book story of Jack Kirby, Mercury in the 20th Century, published in Red Raven Comics 1, 1940.\n[…]\nThe United States' so-called Mercury dime, issued from 1916 to 1945, actually features a Winged Liberty and not the god Mercury, but despite wearing a Phrygian cap instead of a winged helm, the coin bears his name due to resemblance.\n[…]\nThe Warburg Institute Iconographic Database (images of Mercury)\n[…]\nMedia related to Mercurius (deus) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Merc%C3%BArio_%28planeta%29",
        "situacao": "ok",
        "texto": "Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas.\n[…]\nAs mais antigas observações registradas de Mercúrio são das tabelas de Mul.Apin. Estas observações foram provavelmente feitas por um astrônomo assírio por volta do século XIV a.C. A escrita cuneiforme utilizada para designar o planeta na tabela é transcrita como UDU.IDIM.GU4.UD (“O planeta que pula”) Registros babilônicos de Mercúrio datam do primeiro milênio a.C., quando o planeta era chamado de Nabu, o mensageiro dos deuses em sua mitologia.\n[…]\nOs romanos batizaram o planeta com o nome do seu deus mensageiro com asas nos pés, Mercúrio (em latim, Mercurius), equivalente ao grego Hermes, em virtude de o astro cruzar o firmamento mais rápido que qualquer outro planeta. O símbolo astronômico para Mercúrio é uma versão estilizada do caduceu de Hermes.\n[…]\nEm junho de 1962, cientistas soviéticos do Instituto de Rádio-engenharia e Eletrônica da Academia de Ciências da União Soviética, liderados por Vladimir Kotelnikov, tornaram-se os primeiros a enviar sinais de radar para Mercúrio e receber respostas, iniciando as observações por radar do planeta. Três anos mais tarde, observações de radar dos estadunidenses Gordon Pettengill e R.\n[…]\nA origem do nome provém do deus Mercúrio, mensageiro dos deuses da mitologia romana, devido ao movimento rápido do planeta no céu em relação a outros planetas. Higino disse que sua dedicação ao deus se devia ao fato de que ele havia sido o primeiro a estabelecer os meses e a perceber o curso das constelações.\n[…]\nMercúrio Retrógrado\n[…]\nSimulação de um dia de Mercúrio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Vênus",
      "descricao": "Segundo planeta a partir do Sol, coberto por uma atmosfera densa de gás carbônico."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por brilhar forte no céu pouco antes do amanhecer, o planeta Vênus ganhou no Brasil um apelido popular de estrela. Qual?",
    "resposta": "Estrela-d'alva (ou estrela da manhã)",
    "fonte": [
      "https://pt.wikipedia.org/wiki/V%C3%AAnus_(planeta)",
      "https://en.wikipedia.org/wiki/Venus"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/V%C3%AAnus_(planeta)",
        "situacao": "ok",
        "texto": "Vénus (português europeu) ou Vênus (português brasileiro) é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras.\n[…]\nA distância média da Terra a Vênus é de 0,28 AU, sendo esta a menor distância entre qualquer par de planetas. Como Vénus se encontra mais próximo do Sol do que a Terra, ele pode ser visto aproximadamente na mesma direção do Sol (sua maior elongação é de 47,8°). Vénus atinge seu brilho máximo algumas horas antes da alvorada ou depois do ocaso, sendo por isso conhecido como a estrela da manhã (estrela-d′alva) ou estrela da tarde (Vésper); também é chamado estrela do pastor.\n[…]\nVénus era conhecido nas civilizações antigas como a \"estrela matutina\" ou a \"estrela vespertina\". Diversas culturas historicamente tomaram as aparições como estrela da manhã ou da tarde como de dois corpos celestes diferentes. Credita-se ao filósofo grego Pitágoras o reconhecimento de que as estrelas eram um único corpo, no século VI a.C., embora ele pensasse que Vénus orbitava a Terra.\n[…]\nOs antigos egípcios acreditavam que o planeta Vénus se tratava de dois corpos separados e conheciam a estrela da manhã como Tioumoutiri e a da noite como Ouaiti. Da mesma forma, os gregos antigos chamavam a estrela matutina de Fósforo (Φωσφόρος [Phosphóros]; em latim Phosphorus), “o que traz a luz”, ou Eósforo ([Ἐωσφόρος [Eosphóros]; em latim Eosphorus), “o que traz o amanhecer”. A estrela da noite era chamada Ἓσπερος, Hésperos (latinizada como Hesperus), a “estrela da noite”.\n[…]\nAs modernas culturas chinesa, coreana, japonesa e vietnamita referem-se ao planeta literalmente como a “estrela de metal”, baseada nos cinco elementos."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Venus",
        "situacao": "ok",
        "texto": "Venus is the second planet from the Sun. Similar in size and mass to Earth, Venus has no liquid water, and its atmosphere is far thicker and denser than that of any other rocky body in the Solar System. The atmosphere is composed mostly of carbon dioxide and has a thick cloud layer of sulfuric acid that spans the whole planet.\n[…]\nAerostats for crewed exploration and possibly for permanent \"floating cities\" in the Venusian atmosphere have been proposed as an alternative to the popular idea of living on planetary surfaces such as Mars. NASA's High Altitude Venus Operational Concept was a training concept to study a crewed aerostat design.\n[…]\nDue to the harsh surface environment of Venus, Venus has been under the planetary protection category two, the second lowest. This gives it only a remote chance that spacecraft-borne interplanetary contamination could compromise investigations.\n[…]\nThe Maya considered Venus to be the most important celestial body after the Sun and Moon. They called it Chac ek, or Noh Ek', 'the Great Star'. The cycles of Venus were important to their calendar and were described in some of their books, such as the Maya Codex of Mexico and Dresden Codex. The flag of Chile (Estrella Solitaria, 'Lone Star') depicts Venus.\n[…]\nThis gendered association of Venus and Mars has been used to pair them heteronormatively, describing women and men stereotypically as being so different that they can be understood as coming from different planets, an understanding popularized in 1992 by the book titled Men Are from Mars, Women Are from Venus.\n[…]\nVenus zone\n[…]\nVenus page at The Nine Planets\n[…]\nMap-a-Planet: Venus by the U.S. Geological Survey\n[…]\nGazetteer of Planetary Nomenclature: Venus by the International Astronomical Union\n[…]\nVenus crater database by the Lunar and Planetary Institute\n[…]\nGoogle Venus 3D, interactive map of the planet"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Programa Apollo",
      "descricao": "Programa espacial tripulado da NASA que levou astronautas à Lua entre 1969 e 1972."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Somando todas as missões do programa Apollo, quantas pessoas caminharam na superfície da Lua?",
    "resposta": "Doze",
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_Apollo_astronauts",
      "https://en.wikipedia.org/wiki/Apollo_program"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Apollo_astronauts",
        "situacao": "ok",
        "texto": "As part of the Apollo program by NASA, 24 astronauts flew nine lunar missions between December 1968 and December 1972. During six successful two-man landing missions, twelve men walked on the lunar surface, six of whom drove Lunar Roving Vehicles as part of the last three missions. Three men have reached the Moon twice, one on both an orbital mission and a circumlunar flight, while the other two l\n[…]\nJames A. McDivitt – Commander of Gemini 4, selected in late 1966 to command the first Earth orbital flight test of the Apollo Lunar Module with the CSM. This mission flew in March 1969 as Apollo 9. After his flight, McDivitt was promoted to Manager of Lunar Landing Operations, and in August 1969 was promoted to Manager of the Apollo Spacecraft Program.\n[…]\nWhen program cutbacks canceled missions 18 through 20, NASA's lunar geological community insisted on having a geologist on the Moon, so Slayton reassigned Schmitt to Apollo 17.\n[…]\nVance D. Brand – from Group 5; was on the support crew for Apollo 8 and Apollo 13; was named as Apollo 15 backup Command Module Pilot. Flew on the 1975 Apollo–Soyuz Test Project (not a flight of the Apollo program). He also flew as commander of STS-5, STS-41-B and STS-35.\n[…]\nTwelve men walked on the Moon during six Moon landings of the Apollo program between July 1969 and December 1972. All landed on the surface only once, and five missions consisted of two or more surface extravehicular activities (EVAs). Four of them are alive as of February 2026 with an average age of 93.4\n[…]\nIn addition to the nine lunar missions, there were two crewed flights in the Apollo program that remained in Earth orbit to test fly the spacecraft. Apollo 7 was a crewed test flight of the CSM, and Apollo 9 was a crewed flight test of the CSM and LEM. Of the six astronauts who participated in these missions, five were never rotated to a lunar mission."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Apollo_program",
        "situacao": "ok",
        "texto": "The Apollo program, also known as Project Apollo, was the United States human spaceflight program led by NASA, which landed the first humans on the Moon in 1969. The Apollo program was conceived in 1960 in the Dwight D. Eisenhower presidency during Project Mercury and executed after Project Gemini. The Apollo program was later dedicated to President John F.\n[…]\nAccording to The Economist, Apollo succeeded in accomplishing President Kennedy's goal of taking on the Soviet Union in the Space Race by accomplishing a singular and significant achievement, to demonstrate the superiority of the free-market system. The publication noted the irony that in order to achieve the goal, the program required the organization of tremendous public resources within a vast, centralized government bureaucracy.\n[…]\nNumerous documentary films cover the Apollo program and the Space Race, including:\n[…]\nThe Apollo program has been the focus of several works of fiction, including:\n[…]\nTransformers: Dark of the Moon (2011), science fiction/action movie. The film depicts the Apollo Program as having been created to study and explore a Cybertronian spacecraft known as \"The Ark,\" which crash-landed on the dark side of the Moon in the early 1960s.\n[…]\nIndiana Jones and the Dial of Destiny (2023), fifth Indiana Jones film, in which Jürgen Voller, a NASA member and ex-Nazi involved with the Apollo program, wants to travel in time. The New York City parade for the Apollo 11 crew is portrayed as a plot point.\n[…]\nApollo program history at NASA's Human Space Flight (HSF) website\n[…]\nThe Apollo Program at the NASA History Program Office\n[…]\nThe Apollo Program at the National Air and Space Museum\n[…]\nApollo Program Summary Report (PDF), NASA, JSC-09423, April 1975\n[…]\nProject Apollo Drawings and Technical Diagrams at the NASA History Program Office\n[…]\nNASA Apollo Program images and videos"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Bandeira do Brasil",
      "descricao": "Bandeira nacional brasileira, adotada em 1889, com um céu estrelado no círculo azul."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Cada estrela da bandeira do Brasil representa um estado ou o Distrito Federal. Quantas estrelas ela tem ao todo?",
    "resposta": "Vinte e sete",
    "distratores": [
      "Vinte e seis",
      "Vinte e quatro",
      "Vinte e uma"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bandeira_do_Brasil",
      "https://en.wikipedia.org/wiki/Flag_of_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Brasil",
        "situacao": "ok",
        "texto": "Bandeira do Brasil constitui a bandeira nacional da República Federativa do Brasil. É composta por uma base verde em forma de retângulo, sobreposta por um losango amarelo e um círculo azul, no meio do qual está atravessada uma faixa branca com o lema \"Ordem e Progresso\", em letras maiúsculas verdes. O Brasil adotou oficialmente este projeto para sua bandeira nacional em 19 de novembro de 1889, sub\n[…]\nAs estrelas, cuja posição na bandeira deveria refletir o céu visto na capital Rio de Janeiro em 15 de novembro de 1889, representam as unidades federativas — cada estrela representa um estado específico, além do Distrito Federal.\n[…]\nNo decreto n.º 4 da República, que instituiu, em 1889, a bandeira nacional, determinava-se que a bandeira seria \"ponteada por vinte e uma estrelas, entre as quais as da constelação do Cruzeiro, dispostas da sua situação astronômica, quanto à distância e o tamanho relativos, representando os vinte Estados da República e o Município Neutro\".\n[…]\nAs posições precisas das 27 estrelas no globo fazem da bandeira brasileira uma das mais complicadas de reproduzir. O projeto oficial é definida pela lei n.º 8 421, de 11 de de maio de 1992. Para cálculo das dimensões, tomar-se-á por base a largura desejada, dividindo-se esta em 14 partes iguais. Cada uma das partes será considerada uma medida ou módulo (M). O comprimento será de vinte módulos (20 M).\n[…]\nUm dos primeiros projetos de reforma da bandeira brasileira foi o proposto do almirante Rodrigo Pinto Guedes, futuro barão do Rio da Prata, cujo objetivo era alterar o pavilhão imperial por outro que seria formado por cinco listas alternadas, sendo três azuis e duas vermelhas. A primeira delas, em azul, teria seis estrelas brancas; a segunda a coroa imperial ao centro; a terceira, com sete estrelas brancas; a quarta traria o escudo do Império e a quinta apresentaria mais seis estrelas.\n[…]\nA Estrela de Cabral"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Brazil",
        "situacao": "ok",
        "texto": "The national flag of Brazil is a blue disc depicting a starry sky (which includes the Southern Cross) spanned by a curved band inscribed with the national motto Ordem e Progresso (Brazilian Portuguese pronunciation: [ˈɔʁdẽj i pɾoˈɡɾɛsu]) ('Order and Progress'), within a yellow rhombus on a green field. It was officially adopted on 19 November 1889, four days after the Proclamation of the Republic,\n[…]\nThe number of stars was increased from 21 to 22 on 21 April 1960, upon the creation of the state of Guanabara. Decree No. 48,124 of 16 April 1960 ordered the incorporation of a new star representing Guanabara and provided that the decree would enter into force on 21 April, the date on which Brasília became the national capital and the former Federal District became the state of Guanabara. A 23rd star was added on 30 May 1968, following the elevation of Acre to statehood in 1962.\n[…]\nThe flag of Brazil contains 27 stars, representing the Brazilian states and the Federal District. The constellation of the Southern Cross is on the meridian (indicated by the number 6 in the diagram). To the south of it is Polaris Australis (Sigma Octantis, numbered 7), representing the Federal District.\n[…]\nSigma Octantis, the south pole star, is small, but all the other stars turn around it; its unique position in the sky of the southern hemisphere represents the stability of the Federal District in the Brazilian union. The star Spica is the only one which is located above the white band with its motto; it symbolises the state of Pará and the part of Brazilian territory in the northern hemisphere.\n[…]\nThe Brazilian Flag Anthem (Hino à Bandeira Nacional) is a song dedicated to the country's flag. It is performed on 19 November (Flag Day). The Portuguese lyrics were written by poet Olavo Bilac, and the music composed by Francisco Braga.\n[…]\nBandeira Nacional at the Brazilian Government"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Júpiter",
      "descricao": "Quinto planeta a partir do Sol, o maior do Sistema Solar."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em volume, Júpiter é gigantesco. Aproximadamente quantos planetas do tamanho da Terra caberiam dentro dele?",
    "resposta": "Cerca de 1.300",
    "distratores": [
      "Cerca de 100",
      "Cerca de 318",
      "Cerca de 10 mil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jupiter"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jupiter",
        "situacao": "ok",
        "texto": "Jupiter is the fifth planet from the Sun, and the largest in the Solar System. It is a gas giant with a mass nearly 2.5 times that of all the other planets in the Solar System combined and slightly less than one-thousandth the mass of the Sun. The diameter of Jupiter is 11 times that of Earth and a tenth that of the Sun. It orbits the Sun at a distance of 5.20 AU (778.5 Gm), with an orbital period\n[…]\nJupiter is a gas giant, meaning its chemical composition is primarily hydrogen and helium. These materials are classified as gasses in planetary geology, a term that does not denote the state of matter. It is the largest planet in the Solar System, with a diameter of 142,976 km (88,841 mi) at its equator, giving it a volume 1,321 times that of the Earth. Its average density, 1.326 g/cm3, is lower than those of the four terrestrial planets.\n[…]\nJupiter is the only planet whose barycentre with the Sun lies outside the volume of the Sun, though by 7% of the Sun's radius. The average distance between Jupiter and the Sun is 778 million km (5.20 AU) and it completes an orbit every 11.86 years. This is approximately two-fifths the orbital period of Saturn, forming a near orbital resonance. The orbital plane of Jupiter is inclined 1.30° compared to Earth.\n[…]\nIn Vedic astrology, Hindu astrologers named the planet after Brihaspati, the religious teacher of the gods, and called it \"Guru\", which means the \"Teacher\". In Central Asian Turkic myths, Jupiter is called Erendiz or Erentüz, from eren (of uncertain meaning) and yultuz (\"star\"). The Turks calculated the period of the orbit of Jupiter as 11 years and 300 days. They believed that some social and natural events connected to Erentüz's movements in the sky.\n[…]\nLohninger, Hans; et al. (November 2, 2005). \"Jupiter, As Seen By Voyager 1\". A Trip into Space. Virtual Institute of Applied Science.\n[…]\n\"Jupiter\" – In Our Time, BBC Radio 4"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/J%C3%BApiter_%28planeta%29",
        "situacao": "ok",
        "texto": "Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno. Estes quatro planetas são por vezes chamados planetas jupiterianos ou planetas jovianos, e são os quatro gigantes ga\n[…]\nA atmosfera de Júpiter é composta de 88 a 92% de hidrogênio e 8 a 12% de hélio, considerando a percentagem em volume de moléculas. Esta composição muda quando descrita em termos de massa, uma vez que uma molécula de hélio é cerca de quatro vezes mais massiva que uma de hidrogênio; com isso, a atmosfera de Júpiter é composta por aproximadamente 75% de hidrogênio e 24% de hélio em massa, sendo o 1% remanescente composto por outros elementos.\n[…]\nJúpiter possui a maior atmosfera planetária do Sistema Solar, com mais de 5 000 km de altitude. Ela é cerca de três vezes maior que o nosso planeta, ou 1 por cento da inteira massa de Júpiter. Como o planeta não tem superfície, a base de sua atmosfera é considerada o ponto em que sua pressão atmosférica é igual a 100 kPa (1,0 bar). Abaixo da atmosfera, Júpiter é fluido. Mas ao contrário da maioria dos fluidos, o planeta gira como se fosse uma massa sólida.\n[…]\nModelos matemáticos, em 2007, sugeriram que a tempestade era estável e poderia ser uma característica permanente do planeta; entretanto a tempestade diminuiu até 17 graus desde os anos 1800, quando ela poderia ter alcançado 5 600 ou quatro vezes o diâmetro da Terra. Atualmente, ela é cerca de 1,3 vezes o tamanho da Terra. Ela pode desaparecer completamente nos próximos 20 anos.\n[…]\nEstima-se que o número de asteroides troianos com mais de 1 km de diâmetro seja de cerca de um milhão.\n[…]\nUma bola de fogo foi fotografada pela Voyager 1 durante seu encontro com Júpiter em 1979;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Urano",
      "descricao": "Sétimo planeta a partir do Sol, um gigante gelado."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Urano gira praticamente deitado em relação à própria órbita. Seu eixo de rotação é inclinado em cerca de quantos graus?",
    "resposta": "Cerca de 98 graus",
    "distratores": [
      "Cerca de 23 graus",
      "Cerca de 45 graus",
      "Cerca de 60 graus"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Uranus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uranus",
        "situacao": "ok",
        "texto": "Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which astronomers call \"ice\" or \"volatiles\". The planet's atmosphere has a complex layered cloud structure, and has the lowest minimum temperature (49 K (−224 °C; −371 °F)) of all of the Solar System's planets. It has a ma\n[…]\nThe orbital elements of Uranus were first calculated in 1783 by Pierre-Simon Laplace. With time, discrepancies began to appear between predicted and observed orbits, and in 1841, John Couch Adams first proposed that the differences might be due to the gravitational tug of an unseen planet. In 1845, Urbain Le Verrier began his own independent research into Uranus's orbit.\n[…]\nUranus's unusual axis of rotation had been surmised by astronomers since Herschel's discovery of Titania and Oberon, with Laplace calculating the inclination of the moons' orbits to the planet's equatorial plane in 1805.\n[…]\nUranus has at least one horseshoe orbiter occupying the Sun–Uranus L3 Lagrangian point—a gravitationally unstable region at 180° in its orbit, 83982 Crantor. Crantor moves inside Uranus's co-orbital region on a complex, temporary horseshoe orbit. 2010 EU65 is also a promising Uranus horseshoe librator candidate.\n[…]\nAlexander, Arthur Francis O'Donel (1965). The Planet Uranus: A History of Observation, Theory and Discovery. New York: American Elsevier Publ. Comp.\n[…]\nUranus at European Space Agency\n[…]\nUranus at NASA's Solar System Exploration site\n[…]\nUranus at Jet Propulsion Laboratory's planetary photojournal (photos)\n[…]\nVoyager at Uranus Archived 4 January 2015 at the Wayback Machine (photos)\n[…]\nGray, Meghan; Merrifield, Michael (2010). \"Uranus\". Sixty Symbols. Brady Haran for the University of Nottingham.\n[…]\n\"Uranus Rings photos\", James Webb Space Telescope, NASA, 18 December 2023, retrieved 19 December 2023"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Urano_%28planeta%29",
        "situacao": "ok",
        "texto": "Urano (português brasileiro) ou Úrano (português europeu) é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano. Embora seja visível a olho nu em boas condições de visualização, não foi reconhecido pelos astrônomos antigos como um planeta devido a seu pequeno brilho e lenta órbita.\n[…]\nUrano completa uma volta ao redor do Sol a cada aproximadamente 84 anos terrestres. Sua distância média ao Sol é de aproximadamente 3 bilhões de quilômetros (20 UA). A intensidade da luz solar é de cerca de 1/400 da terrestre. Os elementos orbitais do planeta foram calculados pela primeira vez em 1783 por Pierre-Simon Laplace.\n[…]\nUrano tem uma inclinação axial de 97,77 graus, ou seja, seu eixo de rotação é aproximadamente paralelo ao plano do Sistema Solar, o que faz o planeta girar de lado, como se fosse uma bola rolando numa superfície. Isto provoca mudanças sazonais completamente diferentes das observadas nos outros planetas. Próximo ao solstício uraniano, um dos polos é iluminado continuamente pelo Sol enquanto o outro está em escuridão.\n[…]\nA possibilidade de enviar a sonda Cassini a Urano foi avaliada em 2009 num plano de prolongar a missão da sonda. Ela levaria cerca de 20 anos para chegar ao sistema uraniano após deixar Saturno. Uma sonda e satélite uranianos foram recomendados pelo projeto Planetary Science Decadal Survey de 2013-2022 publicado em 2011; a proposta inclui o lançamento entre 2020-2023 e uma viagem de 13 anos até o planeta. A Agência Espacial Europeia avaliou uma missão de \"classe-média\" chamada Uranus Pathfinder.\n[…]\nUrano na Agência Espacial Europeia (em inglês)\n[…]\nDados de Urano pela NASA (em inglês)\n[…]\nPerfil de Urano no site de exploração do Sistema Solar da NASA (em inglês)\n[…]\nUrano no fotojornal planetário do Jet Propulsion Laboratory (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Terra",
      "descricao": "Terceiro planeta a partir do Sol, o planeta onde vivemos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Medido em relação às estrelas distantes, o giro da Terra em torno de si é um pouco mais curto que vinte e quatro horas. Mais curto em quanto?",
    "resposta": "Cerca de quatro minutos",
    "distratores": [
      "Cerca de um minuto",
      "Cerca de dez minutos",
      "Cerca de meia hora"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sidereal_time",
      "https://en.wikipedia.org/wiki/Earth%27s_rotation"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sidereal_time",
        "situacao": "ok",
        "texto": "Sidereal time (\"sidereal\" pronounced  sy-DEER-ee-əl, sə-) is a system of timekeeping used especially by astronomers. Using sidereal time and the celestial coordinate system, it is easy to locate the positions of celestial objects in the night sky. Sidereal time is a \"time scale that is based on Earth's rate of rotation measured relative to the fixed stars\". A sidereal day (also known as the sidere\n[…]\nAn increase of 360° in the ERA is a full rotation of the Earth.\n[…]\nEarth makes one rotation around its axis each sidereal day; during that time it moves a short distance (about 1°) along its orbit around the Sun. So after a sidereal day has passed, Earth still needs to rotate slightly more before the Sun reaches local noon according to solar time. A mean solar day is, therefore, nearly 4 minutes longer than a sidereal day.\n[…]\n(The conventional reference frame, for purposes of star catalogues, was replaced in 1998 with the International Celestial Reference Frame, which is fixed with respect to extra-galactic radio sources. Because of the great distances, these sources have no appreciable proper motion.) In this frame of reference, Earth's rotation is close to constant, but the stars appear to rotate slowly with a period of about 25,800 years.\n[…]\nThe linear coefficient represents the Earth's rotation speed around its own axis.\n[…]\nAll the solar planets more distant from the Sun than Earth are similar to Earth in that, since they experience many rotations per revolution around the Sun, there is only a small difference between the length of the sidereal day and that of the solar day – the ratio of the former to the latter never being less than Earth's ratio of 0.997. But the situation is quite different for Mercury and Venus.\n[…]\nEarth's rotation\n[…]\n\"Earth Rotation Angle\". International Earth Rotation and Reference System Service. 2013. Retrieved 20 March 2018."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Earth%27s_rotation",
        "situacao": "ok",
        "texto": "Earth's rotation or Earth's spin is the rotation of planet Earth around its own axis, as well as changes in the orientation of the rotation axis in space. Earth rotates eastward, in prograde motion. As viewed from the northern polar star Polaris, Earth turns counterclockwise.\n[…]\nEarth rotates once in about 24 hours with respect to the Sun, but once every 23 hours, 56 minutes, and 4 seconds with respect to other distant stars (see below). Earth's rotation is slowing slightly with time; thus, a day was shorter in the past. This is due to the tidal effects the Moon has on Earth's rotation. Atomic clocks show that the modern day is longer by about 1.7 milliseconds per century compared to several centuries ago, slowly increasing the rate at which UTC diverges from UT1.\n[…]\nAt the equator, the speed is about 1,674.7 km/h (1,040.6 mph), calculated by dividing Earth's equatorial circumference (c. 40,075 km (24,901 mi)) by the length of a sidereal day (c. 23.93 hours). At middle latitudes, the speed decreases; for example, at 45° latitude, the speed is roughly 1,184.2 km/h (735.8 mph) (1674.7  ×  cos (45°)). At the poles, the speed is effectively zero, as no distance there covers in a full rotation.\n[…]\nA change in day length of milliseconds per century shows up as a change of hours and thousands of kilometers in eclipse observations. The ancient data are consistent with a shorter day, meaning Earth was turning faster throughout the past.\n[…]\nUSNO Earth Orientation Archived 14 May 2011 at the Wayback Machine new site, being populated\n[…]\nIERS Earth Orientation Center: Earth rotation data and interactive analysis\n[…]\nInternational Earth Rotation and Reference Systems Service (IERS)\n[…]\nIf the Earth's rotation period is less than 24 hours, why don't our clocks fall out of sync with the Sun?"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tempo_sideral",
        "situacao": "ok",
        "texto": "O tempo sideral é definido como o ângulo horário, medido em horas, do ponto vernal, para determinado observador. É diferente do tempo solar que é definido segundo o ângulo horário do Sol Médio, subtraídas 12h, devido ao movimento aparente do Sol.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Lua",
      "descricao": "Único satélite natural da Terra."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Lua está se afastando lentamente da Terra. Aproximadamente quanto ela se distancia de nós a cada ano?",
    "resposta": "Cerca de 3,8 centímetros",
    "distratores": [
      "Cerca de 3,8 milímetros",
      "Cerca de 38 centímetros",
      "Cerca de 3,8 metros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tidal_acceleration",
      "https://en.wikipedia.org/wiki/Moon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tidal_acceleration",
        "situacao": "ok",
        "texto": "Tidal acceleration is an effect of the tidal forces between an orbiting natural satellite (e.g. the Moon) and the primary planet that it orbits (e.g. Earth). The acceleration causes a gradual recession of a satellite in a prograde orbit (satellite moving to a higher orbit, away from the primary body, with a lower orbital speed and hence a longer orbital period), and a corresponding slowdown of the\n[…]\nEffectively, energy and angular momentum are transferred from the rotation of Earth to the orbital motion of the Moon (however, most of the energy lost by Earth (−3.78 TW) is converted to heat by frictional losses in the oceans and their interaction with the solid Earth, and only about 1/30th (+0.121 TW) is transferred to the Moon). The Moon moves farther away from Earth (+38.30±0.08 mm/yr), so its potential energy, which is still negative (in Earth's gravity well), increases, i. e.\n[…]\nThe dissipation of energy by tidal friction averages about 3.64 terawatts of the 3.78 terawatts extracted, of which 2.5 terawatts are from the principal M2 lunar component and the remainder from other components, both lunar and solar.\n[…]\nThe motion of the Moon can be followed with an accuracy of a few centimeters by lunar laser ranging (LLR). Laser pulses are bounced off corner-cube prism retroreflectors on the surface of the Moon, emplaced during the Apollo missions of 1969 to 1972 and by Lunokhod 1 in 1970 and Lunokhod 2 in 1973. Measuring the return time of the pulse yields a very accurate measure of the distance. These measurements are fitted to the equations of motion.\n[…]\n+38.30 ± 0.08 mm/yr in the mean Earth–Moon distance\n[…]\nFrom the observed change in the Moon's orbit, the corresponding change in the length of the day can be computed (where \"cy\" means \"century\", d day, s second, ms millisecond, 10−3 s, and ns nanosecond, 10−9 s):\n[…]\nThe Recession of the Moon and the Age of the Earth-Moon System"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Moon",
        "situacao": "ok",
        "texto": "The Moon is the only natural satellite of Earth. It orbits Earth in an elliptical path, at a distance  that varies over the year, averaging around 378,000 kilometers (235,000 mi). It completes an orbit (lunar month) in relation to Earth and the Sun (synodically) every 29.5 days. The Moon and Earth are bound by gravitational attraction, which is stronger on the sides facing each other.\n[…]\nThe radiometric ages of impact-melted rocks collected during the Apollo missions cluster between 3.8 and 4.1 billion years old: this has been used to propose a Late Heavy Bombardment period of increased impacts.\n[…]\nThe Moon has an atmosphere consisting of only an exosphere, which is so tenuous as to be nearly vacuum, with a total mass of less than 10 tonnes (9.8 long tons; 11 short tons). The surface pressure of this small mass is around 3 × 10−15 atm (0.3 nPa); it varies with the lunar day. Its sources include outgassing and sputtering, a product of the bombardment of lunar soil by solar wind ions.\n[…]\nThe semi-major axis of the geocentric lunar orbit, called the lunar distance, is approximately 385,000 km (239,000 mi), or 1.3 light-seconds, comparable to going around Earth approximately 9.6 times. The Moon's orbit is not perfectly circular but rather slightly elliptical, with an orbital eccentricity of 0.055.\n[…]\nAt the North and South Poles the Moon is 24 hours above the horizon for two weeks every tropical month (about 27.3 days), comparable to the polar day of the tropical year. Zooplankton in the Arctic use moonlight when the Sun is below the horizon for months on end.\n[…]\nFor the representation of the Moon, especially its lunar phases, the crescent (🌙) has been a recurring symbol in a range of cultures since at least 3,000 BCE or possibly earlier with bull horns dating to the earliest cave paintings at 40,000 BP.\n[…]\nThe Moon on Google Maps, a 3-D rendition of the Moon akin to Google Earth"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Acelera%C3%A7%C3%A3o_de_mar%C3%A9",
        "situacao": "ok",
        "texto": "Aceleração de maré é um efeito das forças de maré entre um satélite natural (a Lua, por exemplo) e o planeta primário que ele orbita (por exemplo, a Terra). A aceleração provoca uma recessão gradual de um satélite que orbite no mesmo sentido do seu planeta, e uma correspondente redução da velocidade de rotação do primário. O processo leva inicialmente à sincronização da rotação do objeto menor e, \n[…]\nEntretanto, em 1854, John Couch Adams fez com que a questão fosse reaberta ao encontrar um erro nos cálculos de Laplace: verificou-se que somente cerca de metade da aceleração aparente da Lua poderia ser considerada nas bases de Laplace pela mudança na excentricidade orbital da Terra.\n[…]\nEfetivamente, a energia e o momento angular são transferidos da rotação da Terra para o movimento orbital da Lua, entretanto a maior parte da energia perdida pela Terra (-3,321 TW) é convertida em calor nas perdas por fricção nos oceanos e suas interações com a Terra sólida, e somente cerca de 1/30 (+0,121 TW) é transferida para a Lua. A Lua se move para mais longe da Terra (+38,247±0,004 mm/ano),  logo sua energia potencial (no poço gravitacional da Terra) aumenta.\n[…]\nA dissipação de energia por fricção de maré é em média de 3,75 terawatts, dos quais 2,5 terawatts se referem ao componente lunar principal M2 e o restante a outros componentes, tanto lunares quanto solares.\n[…]\n+38,08±0,04 mm/ano na distância média Terra-Lua.\n[…]\n+2.3 ms/século\n[…]\nA massa de gelo começou a desaparecer há mais de 10 mil anos, mas a crosta da Terra ainda não está em equilíbrio hidrostático e está ainda se recuperando (o tempo de relaxamento é estimado em cerca de 4 mil anos). Como consequência, o diâmetro polar da Terra aumenta, e como a massa e densidade continuam as mesmas, o volume é o mesmo; portanto, o diâmetro equatorial está decrescendo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Via Láctea",
      "descricao": "A galáxia espiral onde fica o Sistema Solar."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O Sol carrega todo o Sistema Solar numa volta em torno do centro da Via Láctea. Quanto tempo dura, aproximadamente, uma volta completa?",
    "resposta": "230 milhões de anos",
    "distratores": [
      "2 milhões de anos",
      "23 milhões de anos",
      "2 bilhões de anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Galactic_year",
      "https://en.wikipedia.org/wiki/Milky_Way"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Galactic_year",
        "situacao": "ok",
        "texto": "The galactic year, also known as a cosmic year, is the duration of time required for the Sun to orbit once around the center of the Milky Way Galaxy. One galactic year is approximately 225 million Earth years.\n[…]\nThe Solar System is traveling at an average speed of 230 km/s (828,000 km/h) or 143 mi/s (514,000 mph) within its trajectory around the Galactic Center, a speed at which an object could circumnavigate the Earth's equator in 2 minutes and 54 seconds; that speed corresponds to approximately 1/1300 of the speed of light."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Milky_Way",
        "situacao": "ok",
        "texto": "The Milky Way or Milky Way Galaxy, or simply the Galaxy, is the galaxy that includes the Solar System, with the name describing the galaxy's appearance from Earth: a hazy band of light seen in the night sky formed by stars in other arms of the galaxy, which are so far away that they cannot be individually distinguished by the naked eye.\n[…]\n(2016) found a smaller value of 25.64 ± 0.46 kly (7.86 ± 0.14 kpc), also using a star orbit analysis. The Sun is currently 5–30 parsecs (16–98 ly) above, or north of, the central plane of the Galactic disk. The distance between the local arm and the next arm out, the Perseus Arm, is about 2,000 parsecs (6,500 ly). The Solar System is located in the Milky Way's galactic habitable zone.\n[…]\nThe apex of the Sun's way, or the solar apex, is the direction that the Sun travels through the local standard of rest in the Milky Way. The general direction of the Sun's galactic motion is towards the star Deneb near the constellation of Cygnus, at an angle of roughly 90 sky degrees to the direction of the Galactic Center. The Sun's orbit about the Milky Way is expected to be roughly elliptical, with perturbations from the Galactic spiral arms and non-uniform mass distributions.\n[…]\nIt takes the Solar System about 240 million years to complete one orbit of the Milky Way (a galactic year), so the Sun is thought to have completed 18–20 orbits during its lifetime and 1/1250 of a revolution since the origin of humans. The orbital speed of the Solar System about the center of the Milky Way is approximately 220 km/s (490,000 mph) or 0.073% of the speed of light. The Sun moves through the heliosphere at 84,000 km/h (52,000 mph).\n[…]\nMilky Way – H-Alpha survey – wikisky.org\n[…]\nMilky Way – SEDS Messier website\n[…]\nMilky Way – Infrared Images\n[…]\nMilky Way – Mosaic of galactic plane (March 19, 2021)\n[…]\nThe clickable Milky Way"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ano_gal%C3%A1ctico",
        "situacao": "ok",
        "texto": "O ano galáctico, também conhecida como ano cósmico, é o período orbital do Sistema Solar em torno do centro da Via Láctea. Estimativas do período orbital do Sistema Solar varia entre 225 a 250 milhões de anos terrestres.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Eclipse solar",
      "descricao": "Fenômeno em que a Lua passa entre a Terra e o Sol e encobre o Sol total ou parcialmente."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Num eclipse solar total, a fase em que o Sol fica completamente escondido pela Lua dura, no máximo, quanto tempo?",
    "resposta": "Sete minutos e meio",
    "distratores": [
      "Trinta segundos",
      "Vinte minutos",
      "Uma hora e meia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Solar_eclipse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Solar_eclipse",
        "situacao": "ok",
        "texto": "A solar eclipse occurs when the Moon passes between Earth and the Sun, thereby obscuring the view of the Sun from a small part of Earth, totally or partially. Such an alignment occurs approximately every six months, during the eclipse season in its new moon phase, when the Moon's orbital plane is closest to the plane of Earth's orbit. In a total eclipse, the disk of the Sun is fully obscured by th\n[…]\nThe diagrams to the right show the alignment of the Sun, Moon, and Earth during a solar eclipse. The dark gray region between the Moon and Earth is the umbra, where the Sun is completely obscured by the Moon. The small area where the umbra touches Earth's surface is where a total eclipse can be seen. The larger light gray area is the penumbra, in which a partial eclipse can be seen. An observer in the antumbra, the area of shadow beyond the umbra, will see an annular eclipse.\n[…]\nA total eclipse occurs on average every 18 months when the dark silhouette of the Moon completely obscures the bright light of the Sun, allowing the much fainter solar corona to be visible. During an eclipse, totality occurs only along a narrow track on the surface of Earth. This narrow track is called the path of totality.\n[…]\nIt is safe to observe the total phase of a solar eclipse directly only when the Sun's photosphere is completely covered by the Moon, and not before or after totality. During this period, the Sun is too dim to be seen through filters. The Sun's faint corona will be visible, and the chromosphere, solar prominences, coronal streamers and possibly even a solar flare may be seen. At the end of totality, the same effects will occur in reverse order, and on the opposite side of the Moon.\n[…]\nLists of solar eclipses\n[…]\nVideo with Total Solar Eclipse March 09 2016 (from the beginning to the total phase) on YouTube\n[…]\nTotal Solar Eclipse Shadow on Earth March 09 2016 CIMSSSatelite\n[…]\nList of all solar eclipses"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eclipse_solar",
        "situacao": "ok",
        "texto": "Um eclipse solar é um fenômeno que ocorre quando a Lua passa entre a Terra e o Sol, ocultando total ou parcialmente a luz solar numa estreita faixa na superfície terrestre, cuja largura não ultrapassa 270 quilômetros. Esse alinhamento entre esses astros celestes dura um período de 35 dias e acontece a cada seis meses aproximadamente.\n[…]\nO eclipse solar parcial: somente uma parte do Sol é ocultada pelo disco lunar;\n[…]\nO eclipse solar total: toda a luminosidade do Sol é escondida pela Lua;\n[…]\nDesde o instante do primeiro contacto da Lua com o disco solar até o princípio da totalidade (chamado \"o segundo contacto\") serão necessários cerca de noventa minutos. Durante as fases parciais, na sombra de uma árvore, pode-se observar uma multitude de imagens do crescente do Sol no chão: as folhas entrecruzadas comportam-se como minúsculos buracos que deixam passar a luz de tal modo que as imagens do Sol se formam sobre o solo, como numa \"câmara escura\".\n[…]\nEclipses totais do Sol são eventos relativamente raros. Apesar deles ocorrerem em algum lugar da Terra a cada dezoito meses, é estimado que eles recaem (isto é, duas vezes) em um dado lugar apenas a cada trezentos ou quatrocentos anos. Após um longo tempo esperando, o eclipse total do Sol dura apenas alguns minutos, dado que a umbra da Lua move-se para leste a mais de 1 700 km/h. Escuridão total não dura mais que 7 minutos e 40 segundos.\n[…]\nApenas cinco horas após um trânsito Vênus em 4 de junho de 1769 houve um eclipse total do Sol que foi visível na América do Norte, Europa e o norte da Ásia. O tempo entre os dois eclipses é o menor já registrado, entre dois eclipses causados um pela Lua e outro por um planeta.\n[…]\nEclipse lunar\n[…]\nPágina sobre eclipses da NASA (em inglês)\n[…]\nAPOD 8/30/99 - Eclipse solar visto da base espacial Mir (em inglês)\n[…]\nWorld Atlas of Solar Eclipse Paths por Fred Espenak",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Telescópio Espacial James Webb",
      "descricao": "Telescópio espacial infravermelho da NASA, ESA e CSA, lançado em 2021, com espelho primário de segmentos hexagonais dourados."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O espelho principal do telescópio James Webb é montado com peças hexagonais encaixadas como um favo de mel. Quantas peças são?",
    "resposta": "Dezoito",
    "fonte": [
      "https://en.wikipedia.org/wiki/James_Webb_Space_Telescope"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/James_Webb_Space_Telescope",
        "situacao": "ok",
        "texto": "The James Webb Space Telescope (JWST) is a space telescope designed to conduct infrared astronomy. It is the largest telescope in space, and is equipped with high-resolution and high-sensitivity instruments, allowing it to view objects too old, distant, or faint for the Hubble Space Telescope.\n[…]\nThe mass of the James Webb Space Telescope (JWST) is about half that of the Hubble Space Telescope. Webb has a 6.5-meter-diameter (21-foot) gold-coated beryllium primary mirror made up of 18 separate hexagonal mirrors. The mirror has a polished area of 26.3 m2 (283 ft2), of which 0.9 m2 (9.7 ft2) is obscured by the secondary support struts, giving a total collecting area of 25.4 m2 (273 ft2).\n[…]\nThe James Webb Space Telescope has four key goals:\n[…]\nGardner, Jonathan P.; et al. (November 2006). \"The James Webb Space Telescope\". Space Science Reviews. 123 (4): 484–606. arXiv:astro-ph/0606175. Bibcode:2006SSRv..123..485G. doi:10.1007/s11214-006-8315-7. S2CID 118865272. The formal case for JWST science presented in 2006.\n[…]\nKalirai, Jason (April 2018). \"Scientific discovery with the James Webb Space Telescope\". Contemporary Physics. 59 (3): 259–290. arXiv:1805.06941. Bibcode:2018ConPh..59..251K. doi:10.1080/00107514.2018.1467648. S2CID 85539627. A review of JWST capabilities and scientific opportunities.\n[…]\nJWST Video (003:00): 2nd Month − Mirror Alignment details (2/11/2022)\n[…]\nLAUNCH (005:07; 25 Dec 2021) ⇒ SEPARATION (003:14; 25 Dec 2021) (mirror) ⇒ James Webb Space Telescope: Sunshield Deployment – Mission Control Live SUNSHIELD (152:45; 4 Jan 2022) ⇒\n[…]\nMedia Briefing: What's Next for the James Webb Space Telescope ARRIVAL AT L2 (077:14; 24 Jan 2022) ⇒ JAMES WEBB TELESCOPE First Photos, Data & Calibrations Explained TESTINGS & CALIBRATIONS ⇒ The First Thing That James Webb Will See FIRST LIGHT"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Telesc%C3%B3pio_Espacial_James_Webb",
        "situacao": "ok",
        "texto": "O Telescópio Espacial James Webb (em inglês James Webb Space Telescope, JWST) é um telescópio espacial desenvolvido em conjunto pela NASA, a ESA e a CSA, com a finalidade de colocar no espaço um observatório para captar a radiação infravermelha. O telescópio pode observar a formação das primeiras galáxias e estrelas, estudar a evolução das galáxias e ver os processos de formação das estrelas e dos\n[…]\nO Telescópio Espacial James Webb tem quatro objetivos principais:\n[…]\nO Telescópio Espacial James Webb é o sucessor formal do Telescópio espacial Hubble, e como seu foco primário é na astronomia infravermelha, ele também é um sucessor do Telescópio espacial Spitzer. O James Webb ultrapassa as capacidades de ambos os predecessores, sendo capaz de ver estrelas e galáxias mais velhas e em maior quantidade.\n[…]\nOs três principais módulos de instrumentos do telescópio são:\n[…]\nA correção da ótica defeituosa do Telescópio Espacial Hubble em seus primeiros anos desempenhou um papel significativo no nascimento do JWST. Em 1993, a NASA preparou o STS-61, a missão do ônibus espacial que levaria um substituto para a câmera do HST e um adaptador para seu espectrógrafo de imagem para compensar a aberração esférica em seu espelho primário.\n[…]\nEm 2002, o projeto foi renomeado em homenagem ao segundo administrador da NASA (1961–1968) James E. Webb. Webb liderou a agência durante o programa Apollo e estabeleceu a pesquisa científica como uma atividade central da NASA. Em 2003, a NASA concedeu à TRW o contrato principal de US$ 824,8 milhões para o JWST.\n[…]\nNo dia 11 de julho de 2022 a NASA apresentou a primeira imagem de campo profundo tirada pelo James Webb. O presidente americano Joe Biden revelou a imagem por meio de uma transmissão conjunta entre a Casa Branca a Agência Espacial Americana.\n[…]\nGrandes Observatórios Espaciais\n[…]\nTelescópio espacial Hubble\n[…]\n«Site da NASA sobre a sonda James Webb Space Telescope» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Big Bang",
      "descricao": "Teoria cosmológica segundo a qual o universo se expande a partir de um estado inicial muito quente e denso."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Segundo as medições mais aceitas da cosmologia, há quanto tempo o universo começou a se expandir no Big Bang?",
    "resposta": "Cerca de 13,8 bilhões de anos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Age_of_the_universe",
      "https://en.wikipedia.org/wiki/Big_Bang"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Age_of_the_universe",
        "situacao": "ok",
        "texto": "In Big Bang models of physical cosmology, the age of the universe is the cosmological time back to the point when the scale factor of the universe extrapolates to zero. Using the latest models and the data from the Planck project, the age of the universe is 13.8 billion years. Astronomers have two different approaches to determine the age of the universe.\n[…]\nThe Lambda-CDM concordance model describes the expansion of the universe from a very uniform, hot, dense primordial state to its existing state over a span of about 13.8 billion years of cosmological time. This model is well understood theoretically and strongly supported by recent high-precision astronomical observations such as WMAP.\n[…]\nNASA's Wilkinson Microwave Anisotropy Probe (WMAP) project's nine-year data release in 2012 estimated the age of the universe to be (13.772±0.059)×109 years (13.772 billion years, with an uncertainty of plus or minus 59 million years).\n[…]\nIn 2015, the Planck Collaboration estimated the age of the universe to be 13.813±0.038 billion years, slightly higher but within the uncertainties of the earlier number derived from the WMAP data. In 2018, the Planck Collaboration updated its estimate for the age of the universe to 13.8 billion years.\n[…]\nThe age of the universe based on the best fit to Planck 2018 data alone is 13.8 billion years. A component to the analysis of data used to determine the age of the universe (e.g. from Planck) is to use a Bayesian statistical analysis, which normalizes the results based upon the priors (i.e. the model). This quantifies any uncertainty in the accuracy of a measurement due to a particular model used.\n[…]\nMultiverse – Hypothetical group of multiple universes\n[…]\nObservational cosmology – Study of the origin of the universe (structure and evolution)\n[…]\nStatic universe – Cosmological model in which the universe does not expand"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Big_Bang",
        "situacao": "ok",
        "texto": "The Big Bang is a physical theory that describes how the universe expanded from an early state of high density and temperature. Various cosmological models based on the Big Bang concept explain a broad range of phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, the redshift of galaxies and the large-scale structure of the universe.\n[…]\nThe observed uniformity of the universe, which leads to the horizon and flatness problems, is explained through cosmic inflation: a phase of accelerated expansion during the earliest stages. Detailed measurements of the expansion rate of the universe place the cosmic inflation at an estimated 13.787±0.02 billion years ago, which is considered the age of the universe. A wide range of empirical evidence strongly favors the Big Bang model, which is now widely accepted.\n[…]\nAnother misconception is to think of the Big Bang as an explosion of a single point into its surroundings. The expansion of the universe occurs everywhere, not at any single point. For this reason an alternative name Everywhere Stretch has been suggested to emphasize that every point in the universe expands as a consequence of general relativity.\n[…]\nEternal inflation, in which universal inflation ends locally here and there in a random fashion, each end-point leading to a bubble universe, expanding from its own big bang. This is sometimes referred to as pre-big bang inflation.\n[…]\nAlpher, Ralph A.; Herman, Robert (August 1988). \"Reflections on Early Work on 'Big Bang' Cosmology\". Physics Today. 41 (8): 24–34. Bibcode:1988PhT....41h..24A. doi:10.1063/1.881126.\n[…]\nd'Inverno, Ray (1992). Introducing Einstein's Relativity. Oxford, UK; New York: Clarendon Press; Oxford University Press. ISBN 978-0-19-859686-8. LCCN 91024894. OCLC 554124256.\n[…]\n\"Big Bang Cosmology\" – NASA/WMAP Science Team\n[…]\n\"The Big Bang\" – NASA Science"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Idade_do_Universo",
        "situacao": "ok",
        "texto": "A idade do Universo compreende o tempo decorrido entre o Big Bang até o presente momento. Há alguns anos, a sonda WMAP coletou dados que permitiram estimar a idade do Universo em 13,787 ± 0,020 bilhões de anos. Entretanto, a partir de dados coletados pelo satélite Planck, da Agência Espacial Europeia (ESA), que mapeou o céu entre 2009 e 2013 em busca de pequenas variações na radiação cósmica de fu\n[…]\ntem quase 100 milhões de anos a mais. Interpretações de observações astronômicas em 2014 indicaram que a idade do Universo é de 13,82 bilhões de anos.\n[…]\nExistem outros elementos que também são usados para fazer esse cálculo, como o urânio-238 (U238), com meia-vida de 4,468 bilhões de anos, e o tório-232 (Th232), com meia-vida de 14,05 bilhões de anos. A análise desses dois elementos fornece outra expectativa da idade do Universo, que é 14,5+2.8-2.2.\n[…]\né utilizado para estrelas na sequência principal. Dado que o tempo\n[…]\nNo entanto, esta fórmula só é aplicada a aglomerados estelares com milhares de membros, com a idade do aglomerado sendo aproximadamente igual à fórmula acima. Usando esse método nos aglomerados globulares, Chaboyer, Demarque, Kernan e Krauss calcularam uma idade de 12,07 bilhões de anos com 95% de certeza da idade mínima do Universo. Gratton et al. calcularam idades entre 8,5 e 13,3 bilhões de anos, sendo o valor mais provável 12,1 bilhões.\n[…]\nReid obteve a estimativa entre 11 e 13 bilhões de anos e Chaboyer et al. estabeleceram 11,5 ± 1,3 bilhões de anos para a idade média do mais velho dos aglomerados.\n[…]\napuraram a idade de 12,1 ± 0,9 bilhões de anos para a M4 e consequentemente, considerando o tempo entre o Big Bang e a formação da M4, estimaram a idade do Universo em 12,8 ± 1,1 bilhões de anos.\n[…]\nComparando, então, esses resultados com a constante de Hubble (valor atual do parâmetro de Hubble), é possível estimar a idade do Universo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Órion (constelação)",
      "descricao": "Constelação equatorial que representa o caçador da mitologia grega, com as Três Marias no cinturão e as estrelas Betelgeuse e Rigel."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Num mito grego, o caçador Órion morreu picado por um animal, e os dois foram postos em lados opostos do céu. Que animal era esse?",
    "resposta": "Escorpião",
    "fonte": [
      "https://en.wikipedia.org/wiki/Orion_(mythology)",
      "https://en.wikipedia.org/wiki/Orion_(constellation)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Orion_(mythology)",
        "situacao": "ok",
        "texto": "In Greek mythology, Orion (; : Ancient Greek: Ὠρίων or Ὠαρίων, romanized: Ōríōn) was a giant huntsman whom Zeus or Artemis placed among the stars as a constellation. He was venerated as a hero in the region of Boeotia, and there is one etiological passage which says that Orion was responsible for the present shape of the Strait of Sicily.\n[…]\nOrion is mentioned in the oldest surviving works of Greek literature. In Homer's Iliad he is described as a constellation, and the star Sirius is mentioned as his dog. In the Odyssey, Odysseus sees him hunting in the underworld with a bronze club, a great slayer of animals. He is also mentioned as a constellation, as the lover of Eos, as slain by Artemis, and as the most handsome of the earthborn.\n[…]\nOrion is used by Horace, who tells of his death at the hands of Diana/Artemis, and by Ovid, in his Fasti for May 11, the middle day of the Lemuria, when (in Ovid's time) the constellation Orion set with the sun. Ovid's episode tells the story of Hyrieus and two gods, Jupiter and Neptune, although Ovid is bashful about the climax; Ovid makes Hyrieus a poor man, which means the sacrifice of an entire ox is more generous.\n[…]\nStatius mentions Orion four times in his Thebaïd; twice as the constellation, a personification of storm, but twice as the ancestor of Dryas of Tanagra, one of the defenders of Thebes. The very late Greek epic poet Nonnus mentions the oxhide story in brief, while listing the Hyrians in his Catalogue of the Boeotian army of Dionysius.\n[…]\nPhilip Glass has also written a shorter work on Orion, as have Tōru Takemitsu, Kaija Saariaho, and John Casken. David Bedford's late-twentieth-century works are about the constellation rather than the mythical figure; he was an amateur astronomer.\n[…]\nOrion (sculpture)\n[…]\nStar Tales – Orion Constellation mythology."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Orion_(constellation)",
        "situacao": "ok",
        "texto": "Orion is a prominent set of stars visible during winter in the Northern Hemisphere. It is one of the 88 modern constellations; it was among the 48 constellations listed by the 2nd-century AD astronomer Ptolemy. It is named after a hunter in Greek mythology.\n[…]\nIn Greek mythology, Orion was a gigantic, supernaturally strong hunter, born to Euryale, a Gorgon, and Poseidon (Neptune), god of the sea. One myth recounts Gaia's rage at Orion, who dared to say that he would kill every animal on Earth. The angry goddess tried to dispatch Orion with a scorpion. This is given as the reason that the constellations of Scorpius and Orion are never in the sky at the same time. However, Ophiuchus, the Serpent Bearer, revived Orion with an antidote.\n[…]\nIn artistic renderings, the surrounding constellations are sometimes related to Orion: he is depicted standing next to the river Eridanus with his two hunting dogs Canis Major and Canis Minor, fighting Taurus. He is sometimes depicted hunting Lepus the hare. He sometimes is depicted to have a lion's hide in his hand.\n[…]\nFurther in the future, Orion's stars will gradually move away from the constellation due to proper motion. However, Orion's brightest stars all lie at a large distance from Earth on an astronomical scale—much farther away than Sirius, for example.\n[…]\nOrion will still be recognizable long after most of the other constellations—composed of relatively nearby stars—have distorted into new configurations, with the exception of a few of its stars eventually exploding as supernovae, for example Betelgeuse, which is predicted to explode sometime in the next million years.\n[…]\nThe Deep Photographic Guide to the Constellations: Orion\n[…]\nIan Ridpath's Star Tales – Orion\n[…]\nBeautiful Astrophoto: Zoom Into Orion"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93rion_%28mitologia%29",
        "situacao": "ok",
        "texto": "Órion, Orião ou Orionte (em grego:  Ὠρίων, transl.: Óríōn), na mitologia grega, foi um gigante caçador, um dos melhores a serviço de Artemísia. Ele foi colocado por Zeus entre as estrelas na forma da constelação de Orion.\n[…]\nApós ser morto por um escorpião foi colocado como constelação no céu, a conhecida constelação de Orion que fica perto da constelação do seu amigo Sirius conhecida como a estrela Sirius.\n[…]\nOutra versão é a de que Órion tentou violentar a deusa Ártemis. A fim de castigá-lo, Ártemis mandou um escorpião gigantesco morder-lhe o calcanhar, matando-o. Pelo serviço prestado à deusa, o escorpião foi transformado em constelação, simbolizando a raiva de Ártemis por ter sido ameaçada de estupro ou, segundo algumas versões, por ter tido sua oferta afetiva e sexual rejeitada.\n[…]\nAinda há outra versão em que Órion era apenas um caçador, descendente dos deuses, mas ainda sim um homem normal. Nessa versão, ele se apaixona por Ártemis, que corresponde ao amor, mas Apolo enciumado põe um escorpião gigante para perseguir e matar o rapaz. Na praia com sua irmã, ele a desafia a acertar um ponto negro no oceano dizendo que ela não é tão boa quanto ele. Ártemis, orgulhosamente, diz que ser até melhor e retesando seu arco e flecha prepara o tiro, que acerta o alvo.\n[…]\nEm outra versão, Apolo em um acesso de ciúmes com a aproximação dos dois, levou no caçador à loucura despertando nele uma extrema sede de sangue, até que ele foi morto por um escorpião gigante. Triste, Ártemis transformou seu adorado caçador em constelação, para honrar sua memória.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Urano",
      "descricao": "Sétimo planeta a partir do Sol, um gigante gelado."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Muitas luas de Urano, como Miranda, Titânia e Oberon, têm nomes de personagens de qual dramaturgo?",
    "resposta": "William Shakespeare",
    "fonte": [
      "https://en.wikipedia.org/wiki/Moons_of_Uranus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moons_of_Uranus",
        "situacao": "ok",
        "texto": "There are currently 29 known moons of the planet Uranus. The 27 with names are named after characters that appear in, or are mentioned in, William Shakespeare's plays and Alexander Pope's poem The Rape of the Lock. Uranus's moons are divided into three groups: fourteen inner moons, five major moons, and ten irregular moons. The inner and major moons all have prograde orbits and are cumulatively cl\n[…]\nWilliam Herschel discovered the first two moons, Titania and Oberon, in 1787. The other three ellipsoidal moons were discovered in 1851 by William Lassell (Ariel and Umbriel) and in 1948 by Gerard Kuiper (Miranda). These five may be in hydrostatic equilibrium. The remaining moons were discovered after 1985, either during the Voyager 2 flyby mission or with the aid of advanced Earth-based telescopes.\n[…]\nIn the 1840s, better instruments and a more favorable position of Uranus in the sky led to sporadic indications of satellites additional to Titania and Oberon. Eventually, the next two moons, Ariel and Umbriel, were discovered by William Lassell in 1851.\n[…]\nThe Roman numbering scheme of Uranus's moons was in a state of flux for a considerable time, and publications hesitated between Herschel's designations (where Titania and Oberon are Uranus II and IV) and William Lassell's (where they are sometimes I and II). With the confirmation of Ariel and Umbriel, Lassell numbered the moons I through IV from Uranus outward, and this finally stuck. In 1852, Herschel's son John Herschel gave the four then-known moons their names.\n[…]\nHerschel, instead of assigning names from Greek mythology, named the moons after magical spirits in English literature: the fairies Oberon and Titania from William Shakespeare's A Midsummer Night's Dream, and the sylph Ariel and gnome Umbriel from Alexander Pope's The Rape of the Lock (Ariel is also a spirit in Shakespeare's The Tempest).\n[…]\nScott S. Sheppard: Uranus Moons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sat%C3%A9lites_de_Urano",
        "situacao": "ok",
        "texto": "Urano, o sétimo planeta do Sistema Solar, possui 29 satélites naturais conhecidos. Todos receberam nomes de personagens das obras de William Shakespeare e Alexander Pope. O astrônomo William Herschel descobriu as duas primeiras luas do planeta, Titânia e Oberon, em 1787. As outras luas esféricas foram descobertas em 1851 por William Lassell (Ariel e Umbriel) e em 1948 por Gerard Kuiper (Miranda).\n[…]\nNessa época, não havia consenso sobre a designação com números romanos das luas de Urano, e publicações hesitavam entre as designações de Herschel (onde Titânia e Oberon são Urano II e IV) e de William Lassell (onde eles são I e II). Com a confirmação de Ariel e Umbriel, Lassell numerou as luas de I a IV em ordem de distância crescente a Urano, e essas designações foram adotadas permanentemente. Em 1852, o filho de Herschel, John Herschel, nomeou as luas conhecidas na época.\n[…]\nDepois da descoberta de Titânia e Oberon por William Herschel em 1787, ele acreditou ter descoberto outras quatro luas; duas em 18 de janeiro e 9 de fevereiro de 1790, e mais duas em 28 de fevereiro e 26 de março de 1794. Assim, pelos próximos anos acreditava-se que Urano tinha um sistema de seis satélites, embora as outras quatro luas nunca haviam sido confirmadas por outro astrônomo.\n[…]\nAo invés de escolher nomes da mitologia grega como era tradição na época, Herschel nomeou as luas a partir de entidades mágicas da literatura inglesa: as fadas Oberon e Titânia de Sonho de uma Noite de Verão, de William Shakespeare, e os silfos Ariel e Umbriel de O Rapto da Madeixa, de Alexander Pope (Ariel também é um espírito em A Tempestade de Shakespeare). A razão mais provável para essa escolha é que Urano, como deus do céu e do ar, seria atendido por espíritos do ar.\n[…]\nObras de William Shakespeare:\n[…]\nSonho de uma Noite de Verão: Titânia, Oberon, Puck\n[…]\nAnéis de Urano\n[…]\nLuas de Urano no Solar System Exploration da NASA (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Neil Armstrong",
      "descricao": "Astronauta americano, comandante da Apollo 11 e primeiro ser humano a pisar na Lua, em 1969."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na Apollo 11, Neil Armstrong levou até a Lua pedacinhos de madeira e de tecido do avião pioneiro de quais inventores?",
    "resposta": "Irmãos Wright",
    "distratores": [
      "Irmãos Lumière",
      "Irmãos Montgolfier",
      "Irmãos Voisin"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wright_Flyer",
      "https://en.wikipedia.org/wiki/Neil_Armstrong"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "The Wright Flyer (also known as the Kitty Hawk, Flyer I or the 1903 Flyer) made the first sustained flight by a manned heavier-than-air powered and controlled aircraft on December 17, 1903. Invented and flown by brothers Orville and Wilbur Wright, it marked the beginning of the pioneer era of aviation.\n[…]\nSince 2003 it has resided in a special exhibit in the museum titled \"The Wright Brothers and the Invention of the Aerial Age,\" in recognition of the 100th anniversary of their first flight.\n[…]\nIn 1969, portions of the original fabric and wood from the Wright Flyer traveled to the Moon and its surface in Neil Armstrong's personal preference kit aboard the Apollo 11 Lunar Module Eagle, and then back to Earth in the Command module Columbia.\n[…]\nThis artifact is on display at the visitors center at the Wright Brothers National Memorial in Kitty Hawk, North Carolina.\n[…]\nAnother piece of fabric from the Wright Flyer was contributed by the Ohio state government to the official time capsule for the United States Semiquincentennial in Philadelphia. It was buried in 2026, and set to be opened in 2276.\n[…]\nPowerplant: 1 × Wright straight-4 water-cooled 201.1 cu in (3,295 cc) piston engine., 12 hp (8.9 kW)\n[…]\nPropellers: 2-bladed Wright \"Elliptical\" props, 8 ft 6 in (2.59 m) diameter\n[…]\nThe Wright Brothers and their airplane have been commemorated on a U.S. Quarter and on several U. S. Postage stamps.\n[…]\nThe Wrights' unpowered gliders\n[…]\nWright Model A\n[…]\nWright Model B\n[…]\nWrightflyer.org Archived February 27, 2021, at the Wayback Machine\n[…]\nWrightexperience.com\n[…]\n\"Under The Hood of A Wright Flyer\" Air & Space Magazine\n[…]\n1942 Smithsonian Annual Report acknowledging primacy of the Wright Flyer\n[…]\nHistory of the Wright Flyer Wright State University Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Neil_Armstrong",
        "situacao": "ok",
        "texto": "Neil Alden Armstrong (August 5, 1930 – August 25, 2012) was an American astronaut and aeronautical engineer who, as the commander of the 1969 Apollo 11 mission, became the first person to walk on the Moon. He was also a naval aviator, test pilot and university professor.\n[…]\nHe was then sent to Naval Air Station Corpus Christi in Texas for training on the Grumman F8F Bearcat, culminating in a carrier landing on USS Wright. On August 16, 1950, Armstrong was informed by letter that he was a fully qualified naval aviator. His mother and sister attended his graduation ceremony on August 23, 1950.\n[…]\nArmstrong's authorized biography, First Man: The Life of Neil A. Armstrong, was published in 2005. For many years, he turned down biography offers from authors such as Stephen Ambrose and James A. Michener but agreed to work with James R. Hansen after reading one of Hansen's other biographies. He recalled his initial concerns about the Apollo 11 mission, when he had believed there was only a 50% chance of landing on the Moon.\n[…]\nTwo fragments of wood from the propeller and four pieces of fabric from the wing of the 1903 Wright Flyer that Armstrong took to the Moon fetched between $112,500 and $275,000 each, as well as his Apollo 11 flown gold medal, which fetched $2.06 million in a separate Heritage sale. Armstrong's wife, Carol, has not put any of his memorabilia up for sale.\n[…]\nArmstrong donated his papers to Purdue. Along with posthumous donations by his widow Carol, the collection consists of over 450 boxes of material. In May 2019, she donated two 25-by-24-inch (640 by 610 mm) pieces of fabric from the Wright Flyer, along with his correspondence related to them.\n[…]\nNeil Armstrong Commemorative Website\n[…]\nNeil Armstrong collected news and commentary at The Guardian"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "O Wright Flyer (também frequentemente referenciado como Flyer I ou 1903 Flyer) foi a primeira aeronave construída pelos Irmãos Wright. Eles voaram com ele por quatro vezes em 17 de Dezembro de 1903, próximo à Kill Devil Hills, Carolina do Norte, cerca de 6,4 km ao Sul de Kitty Hawk, Estados Unidos. Hoje a aeronave está em exibição no Museu do Ar e Espaço em Washington, D.C.\n[…]\nEm rodízio, os irmãos Wright fizeram quatro voos curtos em baixa altitude naquele dia. A rota dos voos foi essencialmente reta; curvas não foram tentadas. Cada voo terminou num \"pouso\" em forma de queda não intencional. O último voo, conduzido por Wilbur percorreu 260 m em 59 segundos, bem mais que os três primeiros de 36, 53 e 61 m respectivamente. O \"pouso\" do último voo quebrou o profundor frontal, que os irmãos Wright esperavam consertar para um possível voo de 6 km até a vila de Kitty Hawk.\n[…]\nEnquanto o Flyer de 1903 é um veículo de teste de grande importância histórica, o seu status de promoção no imaginário do público obscureceu o papel dos seus dois sucessores no desenvolvimento contínuo que levou os Wright a dominar a ciência do voo controlado em 1905.\n[…]\nDepois dos voos do Flyer, os irmãos Wright retornaram ao lar em Dayton para o Natal de 1903. Enquanto eles abandonaram os planadores, eles perceberam o significado histórico do Flyer. Eles o empacotaram e enviaram para Dayton, onde ele permaneceu embalado por nove anos. ele ficou submerso na Grande enchente de Dayton em Março de 1913.\n[…]\nO então secretário da Smithsonian Institution, Charles Walcott, se recusava a dar o crédito desse primeiro voo aos irmãos Wright. Em vez disso, ele concedeu a honra ao secretário anterior (seu amigo) Samuel Langley, que em 1903 testou o seu Langley Aerodrome no rio Potomac sem sucesso.\n[…]\nIrmãos Wright\n[…]\nWrightflyer.org\n[…]\nWrightexperience.com\n[…]\nUnder The Hood of A Wright Flyer  Air & Space Magazine",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Buzz Aldrin",
      "descricao": "Astronauta americano da Apollo 11, segundo ser humano a pisar na Lua, nascido Edwin Aldrin."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que personagem da animação Toy Story recebeu o nome em homenagem ao astronauta Edwin Aldrin, o segundo homem a pisar na Lua?",
    "resposta": "Buzz Lightyear",
    "fonte": [
      "https://en.wikipedia.org/wiki/Buzz_Lightyear",
      "https://en.wikipedia.org/wiki/Buzz_Aldrin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Buzz_Lightyear",
        "situacao": "ok",
        "texto": "Buzz Lightyear is a fictional character in the Disney–Pixar Toy Story franchise. He is a superhero action figure from an in-universe media franchise. Buzz is recognizable by his lime green, purple, and white space suit. Originally intended as a one-man band toy named Tinny, he evolved into a space ranger action figure during the development of Toy Story, a decision made by director John Lasseter. \n[…]\nBuzz Lightyear was named in honor of Apollo 11 astronaut Buzz Aldrin, the second person to walk on the Moon. The film producers thought that Aldrin had \"the coolest astronaut name\". Aldrin acknowledged the tribute when he pulled a Buzz Lightyear toy out during a speech at NASA. Aldrin did not receive any endorsement fees for the use of his nickname. In 2009, he admitted to being exasperated by Disney using his name for the character: \"You don't want to tangle with Disney, the friend of children.\n[…]\nBuzz, Jessie and the others take over the controls of the RV and force Bonnie's dad to drive it back to the carnival.\n[…]\nIt returned after 15 months on September 11, 2009, aboard mission STS-128, as it carried the Multi-Purpose Logistics Module Leonardo as its primary payload. Its return was celebrated in a parade led by Buzz Aldrin at Magic Kingdom in Walt Disney World. The Buzz Lightyear figure was named by NASA as the \"longest-serving astronaut in space\". In 2012, it was donated to the Smithsonian's National Air and Space Museum in Washington, D.C.\n[…]\nHe described Allen's voice as \"sweet doltishness\" and commented that his \"tinny\" tone worked well in conveying an emptiness inside Buzz's head. Emily St. James writing for Vox found a moment in Toy Story 2 particularly funny when Buzz faces up to his previous delusion by coming face to face with another Buzz Lightyear that does not realize he is a toy and described it as a subtle way to illustrate the character's personal growth."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Buzz_Aldrin",
        "situacao": "ok",
        "texto": "Buzz Aldrin ( AWL-drin; born Edwin Eugene Aldrin Jr., January 20, 1930) is an American former astronaut, aeronautical engineer, and fighter pilot. He was the second person to walk on the Moon after mission commander Neil Armstrong. He made three spacewalks as pilot of NASA’s 1966 Gemini 12 mission, and was the Lunar Module Eagle pilot on the 1969 Apollo 11 mission.\n[…]\nThe Toy Story character Buzz Lightyear was named in honor of Buzz Aldrin.\n[…]\nAldrin was a consultant on the video game Buzz Aldrin's Race Into Space (1993).\n[…]\nAldrin, Buzz and John Barnes. 1996. Encounter with Tiber. London: Hodder & Stoughton. ISBN 9780340624500.\n[…]\nAldrin, Buzz and John Barnes. 2000. The Return. New York: Forge. ISBN 9780312874247.\n[…]\nAldrin, Buzz and Wendell Minor. 2005. Reaching for the Moon. New York: HarperCollins Publishers. ISBN 9780060554453.\n[…]\nAldrin, Buzz and Ken Abraham. 2009. Magnificent Desolation: The Long Journey Home from the Moon. New York: Harmony Books. ISBN 9780307463456.\n[…]\nAldrin, Buzz and Wendell Minor. 2009. Look to the Stars. Camberwell, Vic.: Puffin Books. ISBN 9780143503804.\n[…]\nAldrin, Buzz and Leonard David. 2013. Mission to Mars: My Vision for Space Exploration. Washington, D.C.: National Geographic Books. ISBN 9781426210174.\n[…]\nAldrin, Buzz and Marianne Dyson. 2015. Welcome to Mars: Making a Home on the Red Planet. Washington, D.C.: National Geographic Children's Books. ISBN 9781426322068.\n[…]\nAldrin, Buzz and Ken Abraham. 2016. No Dream Is Too High: Life Lessons from a Man Who Walked on the Moon. Washington, D.C.: National Geographic Books. ISBN 9781426216503.\n[…]\nInterview with Buzz Aldrin for NOVA series: To the Moon WGBH Educational Foundation, raw footage, 1998\n[…]\n\"Satellite of solitude\" by Buzz Aldrin: an article in which Aldrin describes what it was like to walk on the Moon, Cosmos science magazine, July 2005\n[…]\nBuzz Aldrin at IMDb\n[…]\nBuzz Aldrin discography at Discogs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Buzz_Lightyear",
        "situacao": "ok",
        "texto": "Esta é uma lista contendo todos os personagens dos filmes Toy Story, Toy Story 2, Toy Story 3, Toy Story 4 e Toy Story 5.\n[…]\nEle também apareceu no filme Buzz Lightyear de Star Command: The Adventure Begins e na série de TV spin-off Buzz Lightyear de Star Command, que mostram Buzz como um verdadeiro patrulheiro espacial. Buzz é um personagem jogável nos jogos Toy Story Racer, Toy Story 2: Buzz Lightyear to the Rescue e Toy Story 3: The Game.\n[…]\nEm 10 de dezembro de 2020, a Disney & Pixar anunciaram seu próximo filme Lightyear, que servirá como um prequel para o primeiro Toy Story e uma história de origem para o humano em que a linha de brinquedos foi baseada. Buzz foi confirmado tendo voz original por Chris Evans, o filme foi lançado 17 de junho de 2022.\n[…]\nÉ dublado por Andrew Stanton no filme e Wayne Knight na série Buzz Lightyear do Comando Estelar, e por Renato Rabello no Brasil.\n[…]\nBuzz e os outros brinquedos, que ele trata com uma grande quantidade do amor. Em Toy Story, Andy recebe um Buzz Lightyear em seu aniversário, que provoca tensão entre Woody e Buzz, que sempre se orgulha de ser o brinquedo favorito de Andy.\n[…]\nNo curta Toy Story Toons: Small Fry, Bonnie leva Buzz e Woody para o Palácio do Frango, um restaurante fast food especializado em frango onde em uma promoção equivalente ao McLanche Feliz brinquedo são dados em um kit infantil. Um mini-Buzz Lightyear (dublado por Alexandre Moreno) fica irritado com sua situação de ser só para mostruário (em contraste ao mini-Zurg satisfeito em ficar lá) e toma o lugar do Buzz de Bonnie na piscina de bolinhas.\n[…]\nToy Story 5\n[…]\nToy Story 2: Buzz Lightyear to the Rescue",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Isaac Newton",
      "descricao": "Polímata inglês, autor dos Principia e formulador da gravitação universal e da mecânica clássica."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que astrônomo inglês, amigo de Isaac Newton, pagou do próprio bolso a publicação dos Principia, em 1687?",
    "resposta": "Edmond Halley",
    "fonte": [
      "https://en.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica",
      "https://en.wikipedia.org/wiki/Edmond_Halley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica",
        "situacao": "ok",
        "texto": "Philosophiæ Naturalis Principia Mathematica (English: The Mathematical Principles of Natural Philosophy), often called simply the Principia (), is a book by Sir Isaac Newton that expounds Newton's laws of motion and his law of universal gravitation.\n[…]\nThe first of the three constituent books was sent to Halley for the printer in spring 1686, and the other two books somewhat later. The complete work, published by Halley at his own financial risk, appeared in July 1687. Newton had also communicated De motu to Flamsteed, and during the period of composition, he exchanged a few letters with Flamsteed about observational data on the planets, eventually acknowledging Flamsteed's contributions in the published version of the Principia of 1687.\n[…]\nThe text of the first of the three books of the Principia was presented to the Royal Society at the close of April 1686. Hooke made some priority claims (but failed to substantiate them), causing some delay. When Hooke's claim was made known to Newton, who hated disputes, Newton threatened to withdraw and suppress Book 3 altogether, but Halley, showing considerable diplomatic skills, tactfully persuaded Newton to withdraw his threat and let it go forward to publication.\n[…]\nIn 1686, when the first book of Newton's Principia was presented to the Royal Society, Hooke claimed that Newton had obtained from him the \"notion\" of \"the rule of the decrease of Gravity, being reciprocally as the squares of the distances from the Center\". At the same time (according to Edmond Halley's contemporary report) Hooke agreed that \"the Demonstration of the Curves generated therby\" was wholly Newton's.\n[…]\nIsaac Newton's occult studies\n[…]\nFirst edition (1687)\n[…]\n1687: Newton's Principia, first edition (1687, in Latin)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Edmond_Halley",
        "situacao": "ok",
        "texto": "Edmond (or Edmund) Halley  (; 8 November [O.S. 29 October] 1656 – 25 January 1742 [O.S. 14 January 1741]) was an English astronomer, mathematician and physicist. He was the second astronomer royal in Britain, succeeding John Flamsteed in 1720.\n[…]\nHalley encouraged and helped fund the publication of Isaac Newton's influential Philosophiæ Naturalis Principia Mathematica (1687). From observations Halley made in September 1682, he used Newton's law of universal gravitation to compute the periodicity of Halley's Comet in his 1705 Synopsis of the Astronomy of Comets. It was named after him upon its predicted return in 1758, which he did not live to see.\n[…]\nHalley asked to see the calculations and was told by Newton that he could not find them, but promised to redo them and send them on later, which he eventually did, in a short treatise titled On the motion of bodies in an orbit. Halley recognised the importance of the work and returned to Cambridge to arrange its publication with Newton, who instead went on to expand it into his Philosophiæ Naturalis Principia Mathematica published at Halley's expense in 1687.\n[…]\nHalley (lunar crater)\n[…]\nHughes, David W. (August 1985). \"Edmond Halley, Scientist\". Journal of the British Astronomical Association. 95 (5). London, UK: British Astronomical Association: 193. Bibcode:1985JBAA...95..193H.\n[…]\nEdmond Halley Biography (SEDS)\n[…]\nA Halley Odyssey\n[…]\nHalley, Edmond, Some Considerations about the Cause of the Universal Deluge (1694)\n[…]\nMaterial on Halley's life table for Breslau on the Life & Work of Statisticians site: Halley, Edmond\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Edmond Halley\", MacTutor History of Mathematics Archive, University of St Andrews\n[…]\nWorks by Edmond Halley at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Princ%C3%ADpios_Matem%C3%A1ticos_da_Filosofia_Natural",
        "situacao": "ok",
        "texto": "Princípios Matemáticos da Filosofia Natural (em latim: Philosophiae naturalis principia mathematica, também referido como Principia Mathematica ou simplesmente, Principia) é uma obra de três volumes escrita por Isaac Newton, publicada em 5 de julho de 1687. Newton publicou outras duas edições, em 1713 e 1726.\n[…]\nHooke já havia tornado essa lei de força responsável pelo movimento planetário em cartas (publicadas) a Newton em 1674, como uma força de equilíbrio para a força centrífuga e Halley também havia chegado a essa conclusão, mas não conseguia derivar as leis Kepler a partir dela. Newton respondeu a Halley em Cambridge em 1684 que já havia conseguido fazer isso, mas que não conseguia encontrar os documentos.\n[…]\nEm novembro de 1685, ele enviou a Halley a derivação em um tratado \"De motu corporum in gyrum\" (Sobre o movimento dos corpos em uma órbita). Lá ele não apenas derivou as leis de Kepler (trajetória elíptica), mas também trajetórias em outras seções cônicas (hipérboles, parábolas) e tratou o movimento de um corpo em um meio com resistência. Halley relatou isso à Royal Society em dezembro de 1685 e instou Newton a publicar seus resultados.\n[…]\nDurante este tempo, Newton também teve contatos com o Astrônomo Real John Flamsteed que lhe forneceu dados de observação dos planetas. Em abril de 1686, o manuscrito final dos Principia foi apresentado à Royal Society, que (após disputas sobre a prioridade com Hooke) concordou com a publicação em 30 de junho.\n[…]\nNewton, Isaac (1687). Philosophiae Naturalis Principia Mathematica (em latim). Londres: [s.n.] Consultado em 2 de dezembro de 2014\n[…]\nPhilosophiae naturalis principia mathematica, por Isaac Newton, terceira edição ampliada e corrigida, Londres, no Guil. & Ioh. Innys, MDCCXXVI (a terceira e última edição editada pelo próprio autor). (1726)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Sonda Giotto",
      "descricao": "Sonda da Agência Espacial Europeia que passou perto do núcleo do cometa Halley em 1986."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1986, a sonda europeia que se aproximou do cometa Halley recebeu o nome de qual pintor italiano, que retratou um cometa num afresco?",
    "resposta": "Giotto di Bondone",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giotto_(spacecraft)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giotto_(spacecraft)",
        "situacao": "ok",
        "texto": "Giotto is a European robotic spacecraft mission from the European Space Agency. The spacecraft flew by and studied Halley's Comet and in doing so became the first spacecraft to make close up observations of a comet. On 13 March 1986, the spacecraft succeeded in approaching Halley's nucleus at a distance of 596 kilometers. It was named after the Early Italian Renaissance painter Giotto di Bondone.\n[…]\nThe Soviet Vega 1 started returning images of Halley on 4 March 1986, and the first ever of its nucleus, and made its flyby on 6 March, followed by Vega 2 making its flyby on 9 March. 4 March was also the date when Giotto took its first distant photo of the comet from a range of 59 million kilometres. A final course correction took place on 12 March aiming to put the probe 540 km from nucleus.\n[…]\nGiotto passed Halley successfully on 14 March 1986 at 596 km distance, and surprisingly survived despite being hit by some small particles. One impact 7.6 seconds before closest approach sent it spinning off its stabilized spin axis so that its antenna no longer always pointed at the Earth, and its dust shield no longer protected some of its instruments. After 32 minutes Giotto re-stabilized itself and continued full radio contact with earth.\n[…]\nGiotto's trajectory was adjusted for an Earth flyby and its science instruments were turned off on 15 March 1986 at 02:00 UTC.\n[…]\nGiotto was commanded to wake up on 2 July 1990 when it flew by Earth in order to sling shot to its next cometary encounter.\n[…]\nGiotto found Halley's nucleus was dark, which suggested a thick covering of dust.\n[…]\nGiotto made the closest approach to Halley's Comet and provided the best data for this comet.\n[…]\nGiotto was the first spacecraft:\n[…]\nNature 1986 about Giotto mission\n[…]\nGiotto di Bondone's Adoration of the Magi painting that includes his rendition of Halley's Comet\n[…]\nImage of Halley in 1986 by Giotto spacecraft"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Giotto_%28sonda_espacial%29",
        "situacao": "ok",
        "texto": "A sonda espacial Giotto foi uma missão não tripulada da Agência Espacial Europeia - ESA com a finalidade de pesquisar o cometa Halley de perto. Foi lançada pelo foguete Ariane 1 voo V 14, em 2 de julho de 1985. Não se esperava que a sonda viesse a sobreviver ao passar pela cauda do cometa, mas apesar do impacto de algumas partículas, a maioria dos equipamentos continuou a funcionar normalmente.\n[…]\nEm 13 de março de 1986 a sonda Giotto conseguiu se aproximar bastante do cometa, ficando a uma distância de apenas 596 km do seu núcleo. Quando do encontro, a distância da sonda ao Sol era de 0,89 UA e de 0,98 UA a distância da sonda para a Terra.\n[…]\nA sonda Giotto recebeu este nome em homenagem ao pintor Giotto di Bondone. Ele havia observado o cometa em 1301 e isso inspirou-o a pintar a estrela de Belém na sua pintura sobre a história do Natal. Pintura sobre os três reis Magos\n[…]\nTodas essas informações seriam enviadas para a sonda Giotto, para ela mais precisamente aproximar do seu núcleo. Este grupo de sondas exploradoras do cometa Halley ficou denominada de Armada Halley.\n[…]\nCom 14 segundos antes de seu ponto de maior aproximação, a sonda Giotto foi atingida por uma \"grande\" partícula de poeira do cometa, que lhe provocou uma rotação de 0,9 graus. Neste ponto os instrumentos científicos passaram a funcionar de forma intermitente, pelos próximos 32 minutos.\n[…]\nGRE - Giotto Radio Experiment\n[…]\nLançada em julho de 1985, a sonda Giotto foi enviada a executar uma órbita circular junto com a órbita da Terra e ela levou 10 meses para dar a volta no Sol. Oito meses foram gastos na sua primeira órbita para atingir Halley a uma distância inferior a 600 km.\n[…]\nA sonda Giotto fez parte do que se denominou chamar de Armada Halley, um conjunto de quatro missões espaciais, que visaram entre outras funções, a de pesquisar o Cometa Halley. As outras missões foram a Vega 1 e 2, Sakigake, ISEE-3/ICE, e Suisei.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Meteorito do Bendegó",
      "descricao": "Grande meteorito de ferro encontrado no sertão da Bahia em 1784 e exposto no Museu Nacional, no Rio de Janeiro."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No fim do século dezenove, que governante patrocinou o transporte do meteorito do Bendegó do sertão até o Rio de Janeiro?",
    "resposta": "Dom Pedro II",
    "distratores": [
      "Dom Pedro I",
      "Dom João VI",
      "Marechal Deodoro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bendeg%C3%B3_meteorite",
      "https://pt.wikipedia.org/wiki/Meteorito_do_Bendeg%C3%B3"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bendeg%C3%B3_meteorite",
        "situacao": "ok",
        "texto": "The Bendegó Meteorite (also known as Pedra do Bendegó or simply Bendengó) is a meteorite found in the interior of the state of Bahia, Brazil. It is the largest iron meteorite ever found on Brazilian soil, weighing 5,360 kilograms (11,820 lb), measuring over 2 m (6.6 ft) in length. It has been on display at the National Museum of Brazil, in Rio de Janeiro, since 1888.\n[…]\nThe Bendegó meteorite was found in 1784 by the boy Domingos da Motta Botelho, who grazed cattle on a farm near the present town of Monte Santo, Bahia. At the time of its finding, it was the second largest meteorite in the world. Judging from the four-inch layer of oxidation upon which it rested, and the lost part of its lower portion, it is estimated that it had been in place for thousands of years.\n[…]\nNews of the finding quickly spread. In 1785, governor D. Rodrigues Menezes arranged for it to be transported to Salvador, however, the meteorite's excessive weight made transportation difficult. The cart it was on ran out of control down a hill and the meteorite fell into a dry stream bed, 180 meters away from the spot where it was originally found. It remained there until 1888, when it was recovered and brought to the National Museum.\n[…]\nIt is a metallic meteorite, consisting basically of iron, with the following elements: 6.6% Ni, 0.47% Co, 0.22% P, and traces of S and C in much smaller quantities, only measured in parts per million.\n[…]\nThe meteorite has characteristic Widmanstätten pattern iron/nickel crystals as will as inclusions containing phosphorus and sulfur.\n[…]\nCollection of meteorites in the National Museum of Brazil\n[…]\nGlossary of meteoritics\n[…]\nList of largest meteorites on Earth\n[…]\nBendegó meteorite (report)\n[…]\nOs 10 maiores meteoritos encontrados no Brasil (in Portuguese)\n[…]\nBendego Meteorite Archived 2017-08-13 at the Wayback Machine (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Meteorito_do_Bendeg%C3%B3",
        "situacao": "ok",
        "texto": "O meteorito do Bendegó, também conhecido como Pedra do Bendegó ou simplesmente Bendegó, é um meteorito que foi encontrado em 1784 no sertão do estado da Bahia, região da atual cidade de Monte Santo.\n[…]\nDepois disso, a operação foi abandonada e só seria retomada 104 anos depois, a pedido do imperador D. Pedro II, que havia tomado conhecimento do meteorito através da Academia de Ciências de Paris, durante uma visita à França. Assim que retornou ao Brasil, tomou as medidas para que fosse feito o transporte de peça para o Rio de Janeiro.\n[…]\nA Revista da Sociedade Brasileira de Geographia transcreve telegrama que avisa que a Comissão chegou à localidade onde estava o meteorito em 6 de setembro de 1887, iniciando os trabalhos no dia seguinte (dia da Independência do Brasil):Chegamos a Bendegó no dia 06: inauguramos os trabalhos no dia 7. Assistiram as autoridades de Monte Santo. Assentámos a primeira pedra para marco do lugar onde cahio o meteorolitho, e denominamos este marco Pedro II, lavrando o competente termo.\n[…]\nNo ponto de sua queda se construiu um monumento de pedra em forma de agulha piramidal, conhecido como Obelisco de Dom Pedro II. O marco continha inscrições homenageando a princesa Isabel, o imperador Pedro II, o ministro da agricultura Rodrigo Silva, o Visconde de Paranaguá e os membros da Comissão de Transporte do Bendegó. Poucos anos depois este marco foi destruído por moradores da região, por crerem que a seca era um castigo do céu pela remoção da pedra.\n[…]\nMeteorito Bendegó, documentário dedicado à história da pedra;\n[…]\nObelisco de Dom Pedro II\n[…]\nMeteorito de Bendegó (relatório da expedição)\n[…]\nPesquisadores procuram vestígios de meteoritos em São Francisco do Sul\n[…]\nMeteorito Bendegó"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Cruzeiro do Sul",
      "descricao": "Constelação do céu austral, presente na bandeira do Brasil."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1942, o Brasil trocou o mil-réis por uma nova moeda, batizada em homenagem a uma constelação do céu do sul. Que moeda era essa?",
    "resposta": "Cruzeiro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cruzeiro_(moeda)",
      "https://en.wikipedia.org/wiki/Brazilian_cruzeiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cruzeiro_(moeda)",
        "situacao": "ok",
        "texto": "O Cruzeiro (Cr$ ou ₢$) foi o padrão monetário do Brasil de 1942 a 1967, de 1970 a 1986 e de 1990 a 1993. Sua adoção deu-se pela primeira vez em 1942, durante o Estado Novo, na primeira mudança de padrão monetário no país, com o propósito de uniformizar o dinheiro em circulação. Um cruzeiro equivalia a mil réis. O Cruzeiro passou por uma reforma monetária no governo Castelo Branco, sendo temporaria\n[…]\nTem a Inglaterra a sua libra, a França o seu franco, os Estados Unidos o seu dólar, por que não teríamos nós nossa moeda batizada? Em vez de designá-la por um número, e por um número ideal — vinte mil-réis — Por que lhe não poremos um nome — cruzeiro — por exemplo? Cruzeiro não é pior que outros, e tem a vantagem de ser nome e de ser nosso. Imagino até o desenho da moeda; e de um lado a efígie imperial, do outro a constelação... Um cruzeiro, cinco cruzeiros, vinte cruzeiros.\n[…]\nA primeira sugestão direta e documentada de \"cruzeiro\" como nome de moeda foi feita pelo senador Américo Lobo Leite Pereira, quando apresentou um projeto de reforma monetária para o Brasil, durante seu mandato entre 1890 e 1893.\n[…]\n(...) se substituir a unidade mil-réis pela de Cruzeiro, se este for o nome escolhido (…)\n[…]\nA escolha de tal denominação se baseava na constelação do Cruzeiro do Sul, escolhida como símbolo da pátria.\n[…]\nO cruzeiro novo equivalia a mil cruzeiros \"antigos\", como ficou denominada esta moeda.\n[…]\nTransitoriamente foram colocadas cédulas carimbadas da primeira edição do cruzeiro com carimbos da equivalência na nova moeda, que viriam a ser substituídas paulatinamente a partir do dia 15 de maio de 1970, quando foram colocadas as novas cédulas do padrão em circulação.\n[…]\nA partir daí, houve a supressão da palavra \"novo\" e do N constante no símbolo da moeda então circulante, que voltou a se denominar apenas \"cruzeiro\".\n[…]\nO código ISO 4217 dessa moeda era BRB.\n[…]\nO código ISO 4217 dessa moeda era BRE."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_cruzeiro",
        "situacao": "ok",
        "texto": "Brazilian cruzeiro refers to any of four distinct Brazilian currencies:\n[…]\nBrazilian cruzeiro (1942–1967), worth 1000 Brazilian réis.\n[…]\nBrazilian cruzeiro (1967–1986), denominated cruzeiro novo between 1967 and 1970 in the transition from the previous standard banknotes to the new banknotes issued by Casa da Moeda do Brasil to avoid confusion between the old and the new currency, worth 1000 old cruzeiros.\n[…]\nBrazilian cruzeiro (1990–1993), redenomination of cruzado novo stemming from the Plano Collor.\n[…]\nBrazilian cruzeiro real (1993–1994), currency with a view to facilitating accounting transactions in the transition between the 1990–1993 cruzeiro and real, necessary due to the difficulties of accounting values at the time due to inflation.\n[…]\nO Cruzeiro (Brazilian weekly, 1928–1975)"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Sírius",
      "descricao": "Estrela da constelação do Cão Maior, a mais brilhante do céu noturno."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No Egito antigo, a volta de Sírius ao céu da madrugada, depois de semanas sumida, anunciava qual acontecimento anual?",
    "resposta": "A cheia do rio Nilo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sirius"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sirius",
        "situacao": "ok",
        "texto": "Sirius is the brightest star in the night sky, located in the southern constellation of Canis Major. Its name is derived from the Ancient Greek word Σείριος (Latin script: Seirios; lit. 'glowing' or 'scorching'). The star is designated α Canis Majoris, Romanized to Alpha Canis Majoris, and abbreviated α CMa or Alpha CMa. With a visual apparent magnitude of −1.46, Sirius is almost twice as bright a\n[…]\nWhile it passed through the red giant stage, Sirius B may have enriched the metallicity of its companion, explaining the very high metallicity of Sirius A.\n[…]\nوَأَنَّهُۥ هُوَ رَبُّ ٱلشِّعْرَىٰAnd He alone is the Lord of Sirius.\n[…]\nSirius is also the name of the titular character of Olaf Stapledon's 1944 novel Sirius which examines what it would be like to be the only intelligent dog in the world. Stars in Orion are used on the original cover to form the body of a dog with his nose sniffing Alpha Canis Majoris.\n[…]\nThroughout the 1990s, several members of the occult group the Order of the Solar Temple committed mass murder-suicide with the goal of leaving their bodies and spiritually \"transiting\" to Sirius. In total, 74 people died in all of the suicides and murders.\n[…]\nBrosch, Noah (2008). \"Sirius revealed – a synthesis of the information\". Sirius matters. Astrophysics and space science library. Vol. 354. Dordrecht: Springer Netherlands. pp. 185–202. doi:10.1007/978-1-4020-8319-8_10. ISBN 978-1-4020-8318-1. OCLC 214308374.\n[…]\nHolberg, Jay Brian (2007). Sirius: Brightest Diamond in the Night Sky. Springer Praxis Books in Popular Astronomy. Berlin: Springer. ISBN 978-0-387-48941-4.\n[…]\nNASA Astronomy Picture of the Day: Sirius B in x-ray (6 October 2000)\n[…]\n\"Sirius Matters: Alien Contact\". Chandra X-ray Center. 28 November 2000. Retrieved 21 March 2021.\n[…]\nSankey, John. \"Getting Sirius About Time\". www.johnsankey.ca. Archived from the original on 21 February 2020. Retrieved 21 March 2021."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sirius",
        "situacao": "ok",
        "texto": "Sírio, também chamada de Sirius, Regina Caelia (latim: Rainha dos Céus, pelo fato de ser a mais brilhante do céu noturno), α CMa, α Canis Majoris ou alpha Canis Majoris (latim: Alfa do Cão Maior) é a estrela mais brilhante do céu noturno visível a olho nu, com uma magnitude aparente de −1,46. Localizada na constelação do Cão Maior, pode ser vista a partir de qualquer ponto na Terra, sendo que, no \n[…]\nDo ponto de vista histórico, Sírio sempre foi muito importante no céu noturno e fruto de um significado muito especial dado pelas mais diversas culturas. Recebeu cultos astrólatras sob a alcunha de Sótis no Vale do Nilo do antigo Egito, muito antes de Roma ter sido fundada. Diversos templos em sua honra foram erguidos de forma a permitir que a luz de Sírio penetrasse por um óculo até as aras internas.\n[…]\nCrê-se que o calendário egípcio seria baseado na ascensão helíaca de Sírio, a qual ocorre um pouco antes das cheias anuais do rio Nilo e do solstício de verão.[carece de fontes]?\n[…]\nSírio era conhecida no antigo Egito como Sopdet (do grego: Sothis, português: Sótis), e está registrada nos anais astronômicos mais antigos dos egípcios. Durante o Médio Império, a base do calendário egípcio foi a ascensão helíaca de Sírio, ou seja, o dia em que ela tornava-se visível a olho nu pouco antes do alvorecer e estando suficientemente afastada do brilho do sol. Este evento ocorria antes da inundação anual do rio Nilo e do solstício de verão, após um hiato de setenta dias no céu.\n[…]\nOs gregos da antiguidade observaram que a aparência de Sírius poderia anunciar um verão quente e seco, e temeram que isso fizesse as plantas murcharem, enfraquecesse os homens e estimulasse o desejo nas mulheres. Por causa de seu brilho, foi observado que Sírius cintila mais nas condições meteorológicas instáveis do início do verão.\n[…]\nDetailed information on Sirius\n[…]\nGetting Sirius about time",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Stephen Hawking",
      "descricao": "Físico teórico e cosmólogo inglês, professor lucasiano em Cambridge, conhecido por estudos sobre buracos negros."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Stephen Hawking nasceu em janeiro de 1942, exatamente trezentos anos depois da morte de qual cientista italiano?",
    "resposta": "Galileu Galilei",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stephen_Hawking"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stephen_Hawking",
        "situacao": "ok",
        "texto": "Stephen William Hawking (8 January 1942 – 14 March 2018) was an English theoretical astrophysicist, cosmologist, and author who was director of research at the Centre for Theoretical Cosmology at the University of Cambridge. Between 1979 and 2009, he was the Lucasian Professor of Mathematics at Cambridge, widely viewed as one of the most prestigious academic posts in the world.\n[…]\nStephen William Hawking was born on 8 January 1942 in Oxford to Frank and Isobel Eileen Hawking (née Walker). Hawking's mother was born into a family of doctors in Glasgow, Scotland. His wealthy paternal great-grandfather, from Yorkshire, over-extended himself buying farm land and then went bankrupt in the great agricultural depression during the early 20th century. His paternal great-grandmother saved the family from financial ruin by opening a school in their home.\n[…]\nHawking, Stephen William (1974). \"Black hole explosions?\". Nature. 248 (5443): 30–31. Bibcode:1974Natur.248...30H. doi:10.1038/248030a0. S2CID 4290107. Zbl 1370.83053. Wikidata Q54017915.\n[…]\nHawking, Stephen William (1982). \"The development of irregularities in a single bubble inflationary universe\". Physics Letters B. 115 (4): 295–297. Bibcode:1982PhLB..115..295H. doi:10.1016/0370-2693(82)90373-2. Wikidata Q29398982.\n[…]\nHawking, Stephen William; C J Hunter (1996). \"The gravitational Hamiltonian in the presence of non-orthogonal boundaries\". Classical and Quantum Gravity. 13 (10): 2735–2752. arXiv:gr-qc/9603050. Bibcode:1996CQGra..13.2735H. doi:10.1088/0264-9381/13/10/012. S2CID 10715740. Zbl 0859.58038. Wikidata Q56551504.\n[…]\nHawking, Stephen William; Hertog, Thomas (2018). \"A smooth exit from eternal inflation?\". Journal of High Energy Physics. 2018 (4). arXiv:1707.07702. Bibcode:2018JHEP...04..147H. doi:10.1007/jhep04(2018)147. S2CID 13745992. Zbl 1390.83455. Wikidata Q55878494.\n[…]\nStephen Hawking at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stephen_Hawking",
        "situacao": "ok",
        "texto": "Stephen William Hawking  (Oxford, 8 de janeiro de 1942 – Cambridge, 14 de março de 2018) foi um físico teórico, cosmólogo e autor britânico, reconhecido por sua contribuição à ciência, sendo um dos mais renomados cientistas do século XX. Doutor em cosmologia, foi professor lucasiano emérito na Universidade de Cambridge, um posto que foi ocupado por Isaac Newton, Paul Dirac e Charles Babbage.\n[…]\nStephen Hawking (*AFI: ['stivən 'hɔkɪŋ]) nasceu exatamente no aniversário de 300 anos da morte de Galileu Galilei. Seus pais eram Frank Hawking, um biólogo pesquisador que trabalhava como parasitólogo no Instituto Nacional de Pesquisa Médica de Londres, e Isabel Hawking. Teve duas irmãs mais novas, Philippa e Mary, e um irmão adotivo, Edward. Hawking sempre foi interessado por ciência.\n[…]\nHawking nasceu no ano do aniversário de 300 anos da morte de Galileo Galilei e morreu no dia do 139º aniversário do nascimento de Albert Einstein. Seu funeral privado ocorreu as 14 horas da tarde de 31 de março de 2018, na Great St Mary's Church, Cambridge. Dentre os convidados para o funeral estavam Eddie Redmayne, Felicity Jones e o guitarrista do Queen e astrofísico Brian May.\n[…]\nOs documentários foram A Brief History of Time(1991), em que Errol Morris usou o livro homônimo como base para relatar a vida do cientista, e Stephen Hawking: Minha Breve História (2013), narrado pelo próprio Hawking.\n[…]\nOutra biografia mais abrangente foi lançada nos cinemas em 2014, The Theory of Everything (No Brasil e em Portugal A Teoria de Tudo), baseado no livro de memórias de Jane Hawking, Travelling to Infinity: My Life with Stephen.\n[…]\nEm 15 de janeiro de 2020, foi publicado um artigo científico descrevendo uma nova espécie da planta carnívora chamada Genlisea hawkingii S.R.Silva, B.J.Płachno & V.Miranda em sua homenagem.\n[…]\nRadiação Hawking\n[…]\n«Participações de Stephen Hawking em Filmes e Séries, pelo IMDB» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Yuri Gagarin",
      "descricao": "Cosmonauta soviético, primeiro ser humano a viajar ao espaço, em 1961."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Sete anos depois do seu voo histórico, Iuri Gagarin morreu num acidente, em 1968. Como foi esse acidente?",
    "resposta": "Queda de um caça em treino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yuri_Gagarin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yuri_Gagarin",
        "situacao": "ok",
        "texto": "Yuri Alekseyevich Gagarin (9 March 1934 – 27 March 1968) was a Soviet pilot and cosmonaut who became the first person to journey into outer space during the first successful crewed spaceflight. He was launched from the Baikonur Cosmodrome in the Kazakh SSR. Travelling on Vostok 1, Gagarin completed one orbit of Earth on 12 April 1961. The flight took 108 minutes.\n[…]\nKennedy barred Gagarin from visiting the United States.\n[…]\nValentina and Yuri had two daughters. Yelena Yurievna Gagarina, born 1959, is an art historian who has worked as the director general of the Moscow Kremlin Museums since 2001; and Galina Yurievna Gagarina, born 1961, is a professor of economics and the department chair at Plekhanov Russian University of Economics in Moscow. In September 1961 he was seen with an injury on his eyebrow that has been the source of many rumours.\n[…]\nA number of buildings and locations have been named for Gagarin, mostly in Russia but also in other Soviet republics. The Yuri Gagarin Cosmonaut Training Center in Star City was named on 30 April 1968. The launch pad at Baikonur Cosmodrome from which Sputnik 1 and Vostok 1 were launched is now known as Gagarin's Start. Gagarin Raion in Sevastopol was named after him during the period of the Soviet Union. The Russian Air Force Academy was renamed the Gagarin Air Force Academy in 1968.\n[…]\nThe town of Gzhatsk where he lived in Smolensk Oblast was renamed Gagarin after he died in 1968, and has since become home to numerous museums and monuments to him. A street in Warsaw, Poland, is called Yuri Gagarin Street. The town of Gagarin, Armenia was renamed in his honour in 1961.\n[…]\n\"Gagarin, Yuri Alekseyevich\". Astronautix.com. Retrieved 2 January 2023.\n[…]\nNewsreel footage of Yuri Gagarin at Net-Film Newsreels and Documentary Films Archive\n[…]\nFirst Man in Space: Yuri Gagarin, short film on YouTube by Roscosmos"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Iuri_Gagarin",
        "situacao": "ok",
        "texto": "Iuri Alexeievitch Gagarin (Klushino, 9 de março de 1934 – Novosiolovo, 27 de março de 1968) foi um piloto e cosmonauta soviético. Tornou-se a primeira pessoa a viajar pelo espaço sideral no primeiro voo espacial tripulado bem-sucedido. Partiu do Cosmódromo de Baikonur, na RSS Cazaque, a bordo da Vostok 1 e completou uma órbita da Terra em 12 de abril de 1961. A duração oficial foi registrada como \n[…]\nDois anos depois, foi reeleito deputado, dessa vez para o Soviete das Nacionalidades, a câmara alta do Legislativo soviético. No ano seguinte, começou a recuperar a qualificação de piloto de caça. Kamanin se opôs ao retorno de Gagarin ao treinamento de cosmonautas, pois o piloto havia ganhado peso e suas habilidades de voo tinham piorado. Em janeiro de 1966, Gagarin ainda integrava a tripulação titular planejada para o primeiro voo Soyuz.\n[…]\nNa juventude, Gagarin praticava esportes com entusiasmo e jogava como goleiro de hóquei no gelo. Também gostava de basquete, treinou a equipe da Escola Técnica Industrial de Saratov e tornou-se árbitro de primeira categoria. Mais tarde praticou esqui aquático, ajudou a divulgar a modalidade na União Soviética e presidiu sua federação nacional.\n[…]\nLeonov afirmou que o primeiro estrondo fora produzido pelo jato ao romper a barreira do som e o segundo, pela queda do avião de Gagarin. A hipótese, contudo, não tem confirmação documental e foi contestada com argumentos técnicos por Arsenii Mironov, outro integrante da comissão investigadora.\n[…]\nA Academia da Força Aérea Russa passou a se chamar Academia da Força Aérea Gagarin em 1968. A cidade de Gzhatsk, no Oblast de Smolensk, onde ele viveu, foi rebatizada como Gagarin após sua morte, em 1968, e desde então abriga vários museus e monumentos dedicados ao cosmonauta. Uma via de Varsóvia, na Polônia, chama-se Rua Iuri Gagarin. A localidade de Gagarin, na Armênia, foi renomeada em sua homenagem em 1961.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Anéis de Saturno",
      "descricao": "Sistema de anéis planetários que circunda Saturno, o mais extenso do Sistema Solar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Mais ou menos a cada quinze anos, os anéis de Saturno quase desaparecem quando vistos daqui. Por que isso acontece?",
    "resposta": "Ficam de perfil para a Terra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rings_of_Saturn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rings_of_Saturn",
        "situacao": "ok",
        "texto": "Saturn has the most extensive and complex ring system of any planet in the Solar System. The rings consist of particles in orbit around the planet, ranging from micrometers to meters in size, and are made almost entirely of water ice, with a trace component of rocky material.\n[…]\nSchaer independently observed \"a new dusky ring...surrounding the bright rings of Saturn\" at the Geneva Observatory. Following up on Schaer's discovery, W. Boyer, T. Lewis, and Arthur Eddington found signs of a discontinuous ring matching Schaer's description, but described their observations as \"uncertain.\" After Edward Barnard, using the what was at the time the world's best telescope, failed to find signs of a ring. E. M.\n[…]\nPhoebe orbits the planet at a distance ranging from 180 to 250 radii. The ring has a thickness of about 40 radii. Because the ring's particles are presumed to have originated from impacts (micrometeoroid and larger) on Phoebe, they should share its retrograde orbit, which is opposite to the orbital motion of the next inner moon, Iapetus. This ring lies in the plane of Saturn's orbit, or roughly the ecliptic, and thus is tilted 27 degrees from Saturn's equatorial plane and the other rings.\n[…]\nGalileo Galilei – the first person to observe Saturn's rings, in 1610\n[…]\nÉdouard Roche – French astronomer who described how a satellite that comes within the Roche limit of Saturn could break up and form the rings\n[…]\nPlanetary Rings Node: Saturn's Ring System\n[…]\nSaturn's Rings by NASA's Solar System Exploration\n[…]\nRings of Saturn nomenclature from the USGS planetary nomenclature page\n[…]\nHigh-resolution animation by Nick Stevens of Saturn and its rings from an equatorial and a polar orbit, and from a dive below the rings; see listing for more."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/An%C3%A9is_de_Saturno",
        "situacao": "ok",
        "texto": "Os anéis de Saturno são o mais extenso sistema de anéis de todos os planetas do Sistema Solar. Eles consistem em incontáveis pequenas partículas, cujo tamanho varia de micrômetros a metros, em órbita ao redor de Saturno. As partículas dos anéis são compostas quase totalmente de gelo de água, com um componente residual de material rochoso. Ainda não há um consenso quanto ao mecanismo da sua formaçã\n[…]\nA inclinação axial de Saturno é de 26,7°, significando que as vistas dos anéis obtidas a partir da Terra são largamente variáveis em épocas diferentes, nas quais os anéis visíveis ocupam o plano equatorial. A Terra faz passagens pelo plano dos anéis a cada 13 a 15 anos, aproximadamente a cada meio ano de Saturno, e há chances aproximadamente iguais de um ou três cruzamentos ocorrerem em cada ocasião dessas.\n[…]\nOs equinócios de Saturno, quando o Sol passa pelo plano dos anéis, não são espaçados por igual: em cada órbita o Sol está ao sul do plano de anéis por 13,7 anos, depois ao norte do plano por 15,7 anos. A excentricidade orbital de Saturno, de 0,0565, é a maior dos planetas gigantes do Sistema Solar, e cerca de três vezes a da Terra. A sua apside é atingida próximo do solstício de verão do seu hemisfério norte.\n[…]\nA Divisão Cassini é uma região com 4 800 km de largura entre os Anéis A e B de Saturno. Ela foi descoberta em 1675 por Giovanni Cassini no Observatório de Paris, usando um telescópio de refração que tinha objetiva de 2,5 polegadas, distância focal de 20 pés e ampliação de 90x. Da Terra, ela aparece como uma fina lacuna negra nos anéis. Entretanto, a Voyager descobriu que a lacuna é populada por material de anel muito similar ao do Anel C.\n[…]\nComo Prometeu orbita Saturno mais rapidamente que o material no Anel F, cada novo canal é escavado cerca de 3,2 graus à frente do anterior.\n[…]\nMedia relacionados com Anéis de Saturno no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Lua",
      "descricao": "Único satélite natural da Terra."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a hipótese mais aceita pelos cientistas, como a Lua se formou, há cerca de quatro bilhões e meio de anos?",
    "resposta": "Colisão de um astro com a Terra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giant-impact_hypothesis",
      "https://en.wikipedia.org/wiki/Moon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giant-impact_hypothesis",
        "situacao": "ok",
        "texto": "The giant-impact hypothesis, sometimes called the Theia Impact, is an astrogeology hypothesis for the formation of the Moon first proposed in 1946 by Canadian geologist Reginald Daly.\n[…]\nAnother hypothesis attributes the formation of the Moon to the impact of a large asteroid with Earth much later than previously thought, creating the satellite primarily from debris from Earth. In this hypothesis, the formation of the Moon occurs 60–140 million years after the formation of the Solar System (as compared to hypothesized Theia impact at 4.527 ± 0.010 billion years).\n[…]\nThe asteroid impact in this scenario would have created a magma ocean on Earth and the proto-Moon with both bodies sharing a common plasma metal vapor atmosphere. The shared metal vapor bridge would have allowed material from Earth and the proto-Moon to exchange and equilibrate into a more common composition.\n[…]\nYet another hypothesis proposes that the Moon and Earth formed together, not from the collision of once-distant bodies. This model, published in 2012 by Robin M. Canup, suggests that the Moon and Earth formed from a massive collision of two planetary bodies, each larger than Mars, which then re-collided to form what is now called Earth. After the re-collision, Earth was surrounded by a disk of material which accreted to form the Moon.\n[…]\nOrigin of the Moon by Prof. AGW Cameron\n[…]\nOrigin of the Moon – computer model of accretion\n[…]\nMoon Archive – Including articles about the giant impact hypothesis\n[…]\nHow common are Earth–Moon planetary systems? arXiv:1105.4616: 23 May 2011\n[…]\nThe Surprising State of the Earth after the Moon-Forming Giant Impact – Sarah Stewart (SETI Talks), Jan 28, 2015"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Moon",
        "situacao": "ok",
        "texto": "The Moon is the only natural satellite of Earth. It orbits Earth in an elliptical path, at a distance  that varies over the year, averaging around 378,000 kilometers (235,000 mi). It completes an orbit (lunar month) in relation to Earth and the Sun (synodically) every 29.5 days. The Moon and Earth are bound by gravitational attraction, which is stronger on the sides facing each other.\n[…]\nIn 2021 the 20 July became the International Moon Day, the date of the first crewed Moon landing.\n[…]\nThe Moon has long been associated with insanity and irrationality; the words lunacy and lunatic are derived from the Latin name for the Moon, Luna. Philosophers Aristotle and Pliny the Elder argued that the full moon induced insanity in susceptible individuals, believing that the brain, which is mostly water, must be affected by the Moon and its power over the tides, but the Moon's gravity is too slight to affect any single person.\n[…]\nIn modern society lunar effects have been claimed to be responsible for supposed increased admissions to psychiatric hospitals, traffic accidents, homicides or suicides during a full moon, but these claims have been invalidated by at least 37 studies.\n[…]\nSelenography – Study of the surface and shape of the Moon\n[…]\nTimekeeping on the Moon\n[…]\nNASA images and videos about the Moon Archived July 13, 2023, at the Wayback Machine\n[…]\nVideo (04:56) – The Moon in 4K (NASA, April 2018) on YouTube\n[…]\nFind moonrise, moonset and moon phase for a location\n[…]\nUnified Geologic Map of the Moon at the Wayback Machine (archived 2020-04-21) – United States Geological Survey\n[…]\nMoon Trek – An integrated map browser of datasets and maps for the Moon\n[…]\nThe Moon on Google Maps, a 3-D rendition of the Moon akin to Google Earth\n[…]\nWorld Wind Central on Moon Archived May 15, 2007, at the Wayback Machine\n[…]\nLarge image of the Moon's north pole area at the Wayback Machine (archived 2016-08-18)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hip%C3%B3tese_do_grande_impacto",
        "situacao": "ok",
        "texto": "A Hipótese do grande impacto (em inglês Giant impact hypothesis ou Big Splash) é uma hipótese astronómica que postula a formação da Lua através do impacto de um planeta com aproximadamente o tamanho de Marte, conhecido como Theia, com a Terra. A teoria foi proposta pela primeira vez em 1975 por investigadores do Instituto de Ciências Planetárias de Tucson e do Instituto Harvard-Smithsonian de Astr\n[…]\nL4 e L5, situados a 1,5 milhão de quilómetros da Terra (cerca de 4 vezes a distância da Terra à Lua), são, portanto, zonas com potencial para permitir acrecção planetária em competição com a Terra. Foi em L4 que se pensa que Theia se terá começado a formar há 4,5 bilhões de anos atrás, no Hadeano.\n[…]\nQuando Theia cresceu o suficiente para escapar do ponto lagrangiano entrou numa órbita instável e a colisão com a Terra tornou-se inevitável, visto que ambos os planetas ocupavam a mesma órbita. Os investigadores acreditam que o impacto – o Big Splash – possa ter acontecido escassas centenas de anos após o escape definitivo. A colisão não foi frontal, mas sim de lado, e ocorreu a uma velocidade de 40 mil quilómetros por hora.\n[…]\nParte substancial do núcleo de Theia afundou-se na Terra e o seu material incorporou o núcleo terrestre. O resto do planeta e parte da zona superficial da Terra foram projetados para o espaço. O que sobrava do núcleo estabilizou a cerca de 22.000 km da Terra apenas 27 horas depois do impacto, segundo a modelação utilizada pelos cientistas, num precursor do que seria a Lua.\n[…]\nO Big Splash explica as duas características da Lua que mais têm intrigado os cientistas: a Lua tem a mesma composição isotópica das rochas da Terra porque o seu precursor (Theia) se desenvolveu na mesma distância relativa do Sol; tem uma proporção de núcleo ferroso bastante inferior porque a parte principal do núcleo de Theia afundou na Terra na altura da colisão.\n[…]\nWhere did the moon come from?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Sol",
      "descricao": "Estrela no centro do Sistema Solar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No núcleo do Sol, que processo transforma hidrogênio em hélio e produz a energia que chega até nós?",
    "resposta": "Fusão nuclear",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sun"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sun",
        "situacao": "ok",
        "texto": "The Sun is the star located at the centre of the Solar System. It is a massive sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation, with 10% at ultraviolet energies. It is the main source of energy for life on Earth. The Sun has been an object of veneration in many cultures and a\n[…]\nThe interior composition of the Sun is not known. Estimates based on models of stellar nuclear reactions give different values than estimates based on observations of solar seismology.\n[…]\nThrough most of the Sun's life, energy has been produced by nuclear fusion in the core region through the proton–proton chain; this process converts hydrogen into helium. Currently, 0.8% of the energy generated in the Sun comes from another sequence of fusion reactions called the CNO cycle; the proportion coming from the CNO cycle is expected to increase as the Sun becomes older and more luminous.\n[…]\nIn 1920, Sir Arthur Eddington proposed that the pressures and temperatures at the core of the Sun could produce a nuclear fusion reaction that merged hydrogen (protons) into helium nuclei, resulting in a production of energy from the net change in mass. The preponderance of hydrogen in the Sun was confirmed in 1925 by Cecilia Payne using the ionisation theory developed by Meghnad Saha.\n[…]\nThe theoretical concept of fusion was developed in the 1930s by the astrophysicists Subrahmanyan Chandrasekhar and Hans Bethe. Bethe calculated the details of the two main energy-producing nuclear reactions that power the Sun. In 1957, Margaret Burbidge, Geoffrey Burbidge, William Fowler and Fred Hoyle showed that most of the elements in the universe have been synthesised by nuclear reactions inside stars, some like the Sun."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sol",
        "situacao": "ok",
        "texto": "Sol (do latim sol, solis) é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar, como planetas, planetas anões, asteroides, cometas e poeira, bem como todos os satélites associados a estes corpos, giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do p\n[…]\nAtualmente, e durante grande tempo da vida solar, a maior parte da energia produzida pelo Sol é gerada por fusão nuclear via cadeia próton-próton, convertendo hidrogênio em hélio. Menos de 2% do hélio gerado no Sol provém do ciclo CNO. O núcleo solar é a única parte do Sol que produz energia em quantidade significativa via fusão. O restante do Sol é aquecido pela energia transferida do núcleo para as regiões externas.\n[…]\nFusão nuclear no núcleo do Sol modificou a composição química do interior solar. Atualmente, o núcleo do Sol é composto em 60% por hélio, com a abundância de metais não modificados. Visto que o interior do Sol é radiativo e não convectivo, o hélio e outros produtos gerados pela fusão nuclear não subiram para camadas superiores.\n[…]\nEm cerca de 5 bilhões (5 mil milhões) de anos, o hidrogênio no núcleo solar esgotará. Quando isto ocorrer, o Sol entrará em contração devido à sua própria gravidade, elevando a temperatura do núcleo solar até 100 milhões de kelvins, suficiente para iniciar a fusão nuclear do hélio, produzindo carbono, entrando na fase do ramo gigante assimptótico.\n[…]\nEm 1920, Arthur Eddington propôs que a pressão e a temperatura do núcleo solar poderiam produzir uma reação de fusão nuclear, em que átomos de hidrogênio (prótons) são fundidos entre si formando núcleos de hélio, resultando na produção de energia, e da perda de massa solar. A preponderância de hidrogênio no Sol foi confirmada em 1925 por Cecilia Payne-Gaposchkin.\n[…]\nEnergia solar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Sputnik 1",
      "descricao": "Primeiro satélite artificial da Terra, lançado pela União Soviética em 1957."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1958, abalado pelo lançamento do Sputnik soviético, o governo dos Estados Unidos criou qual agência espacial?",
    "resposta": "Nasa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sputnik_crisis",
      "https://en.wikipedia.org/wiki/NASA"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sputnik_crisis",
        "situacao": "ok",
        "texto": "The  Sputnik crisis  was a period of public fear and anxiety in Western nations about the perceived technological gap between the United States and Soviet Union caused by the Soviets' launch of Sputnik 1, the world's first artificial satellite, on October 4, 1957. The crisis was a significant event in the Cold War that triggered the creation of NASA and the Space Race between the two superpowers.\n[…]\nThen decide for yourselves whether they meet the stern demands of the era we are entering.\" His ability to project confidence about the situation was limited because his confidence was based on clandestine reconnaissance, so he failed to quell the fears that there was a shift in power between the Americans and Soviets. The launch of Sputnik 1 also impacted Eisenhower's ratings in his polls, but he eventually recovered.\n[…]\nIn February 1958, Eisenhower authorized formation of the Advanced Research Projects Agency, which was later renamed to the Defense Advanced Research Projects Agency (DARPA), within the Department of Defense (DoD) to develop emerging technologies for the US military. On July 29, 1958, he signed the National Aeronautics and Space Act, the creation of NASA.\n[…]\nPoliticians used the event to bolster their ratings in polls. Research and development was used as a propaganda tool, and Congress spent large sums of money on the perceived problem of US technological deficiency. After the launch of Sputnik 1 national security advisers overestimated the Soviets' current and potential rocket strength, which alarmed portions of Congress and the executive branch.\n[…]\nCampaigning in 1960 on closing the \"missile gap\", Eisenhower's successor, John F. Kennedy, promised to deploy 1,000 Minuteman missiles. That was many more ICBMs than the Soviets had at the time.\n[…]\nBy the mid-1960s, NASA was providing almost 10% of the federal funds for academic research."
      },
      {
        "url": "https://en.wikipedia.org/wiki/NASA",
        "situacao": "ok",
        "texto": "The National Aeronautics and Space Administration (NASA; ) is an independent agency of the U.S. federal government responsible for the United States' civil space program, as well as research in aeronautics and space. Headquartered in Washington, D.C., NASA operates ten field centers across the US and is organized into three mission directorates: Human Spaceflight, Research and Technology, and Scie\n[…]\nThe Eisenhower Administration decided to separate the nation's military and civil spaceflight programs, which had been previously organized together under the Department of Defense's Advanced Research Projects Agency. NASA was established on July 29, 1958, with the signing of the National Aeronautics and Space Act, and began operations on October 1, 1958.\n[…]\nThe Fermi Gamma-ray Space Telescope (FGST) is another gamma-ray focused space observatory that was launched to low Earth orbit in June 2008 and is being used to perform gamma-ray astronomy observations. In addition to NASA, the mission involves the US Department of Energy, and government agencies in France, Germany, Italy, Japan, and Sweden.\n[…]\nNASA and the Space Force also partner on matters such as defending Earth from asteroids. Space Force members can be NASA astronauts, with Colonel Michael S. Hopkins, the commander of SpaceX Crew-1, commissioned into the Space Force from the International Space Station on December 18, 2020. In September 2020, the Space Force and NASA signed a memorandum of understanding formally acknowledging the joint role of both agencies.\n[…]\nMarshall Shepherd countered that Earth science study was built into NASA's mission at its creation in the 1958 National Aeronautics and Space Act. NASA won the 2020 Webby People's Voice Award for Green in the category Web.\n[…]\nNASA Art Program\n[…]\nLaunius, Roger D. \"Eisenhower, Sputnik, and the Creation of NASA.\" Prologue-Quarterly of the National Archives 28.2 (1996): 127–143"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Crise_do_Sputnik",
        "situacao": "ok",
        "texto": "O termo Crise do Sputnik foi cunhado pelo presidente dos Estados Unidos Dwight D. Eisenhower, no final da década de 1950, para enfatizar a insatisfação com os resultados inicias dos primeiros passos estadunidenses na corrida espacial, que então, se mostrava totalmente favorável à União Soviética, e também o conjunto de medidas tomadas visando reverter essa situação.\n[…]\nA Crise do Sputnik foi um evento chave na Corrida espacial. Apesar de o Sputnik, por si só, não representar nenhum perigo iminente, a sua órbita contínua acentuava a ameaça velada que a União Soviética exercia sobre os Estados Unidos desde o início da Guerra fria, logo após a Segunda Guerra Mundial.\n[…]\nMenos de um ano depois do lançamento do Sputnik, o congresso americano aprovou uma lei implementando um programa de científico quatro anos que injetou bilhões de dólares no sistema educacional estadunidense. De 1959 para 1960, graças a essa lei, o total do orçamento nessa área cresceu aproximadamente seis vezes.\n[…]\nDepois do choque inicial da opinião pública, a corrida espacial prosseguiu, levando ao primeiro homem no espaço e ao primeiro pouso na Lua, em 1969.\n[…]\nEssas foram as iniciativas tomadas pelo governo dos Estados Unidos em consequência da Crise do Sputnik:\n[…]\nEm fevereiro de 1958, setores políticos e de defesa, reconheceram a necessidade de uma organização de alto nível para executar projetos de Pesquisa e Desenvolvimento, e criou a Advanced Research Projects Agency (ARPA), que mais tarde se tornou a Defense Advanced Research Projects Agency (DARPA).\n[…]\nEm 29 de julho de 1958, o presidente Eisenhower, assinou o National Aeronautics and Space Act, lei que criava a NASA.\n[…]\nA decisão do Presidente John F. Kennedy, que se elegeu em 1960 em diminuir o \"gap de mísseis\", disponibilizando 1 000 mísseis Minuteman, uma quantidade de ICBMs muito maior do que a União Soviética possuía naquela época.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Eclipse solar de 29 de maio de 1919",
      "descricao": "Eclipse total do Sol observado em Sobral e na ilha do Príncipe, que ajudou a confirmar a relatividade geral."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O eclipse de 1919 que ajudou a confirmar a teoria de Einstein foi observado em Sobral e numa ilha africana. Em que estado fica Sobral?",
    "resposta": "Ceará",
    "distratores": [
      "Piauí",
      "Rio Grande do Norte",
      "Pernambuco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Eddington_experiment",
      "https://pt.wikipedia.org/wiki/Sobral_(Cear%C3%A1)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eddington_experiment",
        "situacao": "ok",
        "texto": "The Eddington experiment was an observational test of general relativity, organised by the British astronomers Frank Watson Dyson and Arthur Stanley Eddington in 1919. Observations of the total solar eclipse of 29 May 1919 were carried out by two expeditions, one to the West African island of Príncipe, and the other to the Brazilian town of Sobral. The aim of the expeditions was to measure the gra\n[…]\nIn mid-1918, researchers from the Brazilian National Observatory, determined that the city of Sobral, Ceará, was the best geographical position to observe the Solar Eclipse. Its director, Henrique Charles Morize, sent a report to worldwide scientific institutions on the subject, including the Royal Astronomical Society, London.\n[…]\nThe equipment used for the expedition to Príncipe, an island in the Gulf of Guinea off the coast of West Africa, was an astrographic lens borrowed from the Radcliffe Observatory in Oxford. Eddington sailed from England in March 1919. By mid-May he had his equipment set up on Príncipe near what was then Spanish Guinea. The eclipse was due to take place in the early afternoon of 29 May, at 2 pm, but that morning there was a storm with heavy rain.\n[…]\nThe light deflection measurements were repeated by expeditions that observed the total solar eclipse of 21 September 1922 in Australia. An important role in this was played by the Lick Observatory and the Mount Wilson Observatory, both in California, US. On 12 April 1923, William Wallace Campbell announced that the preliminary new results confirmed Einstein's theory of relativity and prediction of the amount of light deflection with measurements from over 200 stars.\n[…]\n\"How the 1919 Solar Eclipse Made Einstein the World's Most Famous Scientist\" (Discover magazine, May 2019)\n[…]\nSmall memorial in honour of the experiments carried out here in 1919 to find empirical evidence for the theory of relativity during a solar eclipse"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sobral_(Cear%C3%A1)",
        "situacao": "ok",
        "texto": "Sobral é um município brasileiro situado no interior do estado do Ceará. Com uma população de 203 023 habitantes conforme o censo de 2022, é o quinto município mais povoado do estado e o segundo maior do interior. Com uma taxa de urbanização de 88,35%.\n[…]\nA cidade foi o local dos Experimentos de Eddington, que contribuíram para a confirmação da teoria da relatividade geral de Albert Einstein e ocorreram durante o eclipse solar de 29 de maio de 1919.\n[…]\nEm 1919, Sobral, juntamente com a Ilha do Príncipe em São Tomé e Príncipe, foi palco de experimentos astronômicos liderados pelo cientista britânico Arthur Stanley Eddington durante o eclipse solar total de 29 de maio. A expedição foi dividida e deslocou-se para esses dois locais com o objetivo de testar as previsões feitas por Albert Einstein, com base na Teoria Geral da Relatividade, expostas em um artigo de 1915.\n[…]\nSobral conta com um dos maiores polos universitários do Estado do Ceará e oferta educação à municipalidade e às cidades circunvizinhas. A rede educacional é composta pelas seguintes principais instituições de ensino superior:\n[…]\nO VLT de Sobral é um sistema de transporte público em formato de VLT (Veículo Leve sobre Trilhos), movido a diesel, que corta as ruas da cidade. O sistema é operado pela Companhia Cearense de Transportes Metropolitanos, uma empresa de economia mista com controle majoritário do Governo do Estado do Ceará. Fundada em 2 de maio de 1997, a empresa é responsável pela administração, construção e planejamento metroviário no estado do Ceará.\n[…]\nMuseu Dom José: fundado em 1951, é uma instituição museológica da Diocese de Sobral, guarda um dos maiores acervos de arte sacra do Brasil e o segundo maior acervo paleontológico do estado do Ceará.\n[…]\n«Página do Ceará»"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Galileu Galilei",
      "descricao": "Astrônomo, físico e engenheiro italiano (1564–1642), pai da astronomia observacional."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1564, em qual cidade italiana nasceu Galileu Galilei?",
    "resposta": "Pisa",
    "distratores": [
      "Florença",
      "Pádua",
      "Veneza"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Galileo_Galilei"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Galileo_Galilei",
        "situacao": "ok",
        "texto": "Galileo di Vincenzo Bonaiuti de' Galilei (15 February 1564 – 8 January 1642), commonly referred to as Galileo Galilei or mononymously as Galileo, was an Italian astronomer, physicist, engineer and  polymath. He was born in Pisa, then part of the Duchy of Florence. Galileo has been called the father of observational astronomy, classical physics, the scientific method, and modern science.\n[…]\nGalileo was born in an ancient noble family in Pisa (then part of the Duchy of Florence) on 15 February 1564, the first of six children of Vincenzo Galilei, a leading lutenist, composer, and music theorist, and Giulia Ammannati, the daughter of a prominent merchant, who had married two years earlier in 1562, when he was 42 and she was 24. Vincenzo was part of the Florentine Camerata, which laid the groundwork for the new genre of opera. Galileo became an accomplished lutenist himself.\n[…]\nStevin was forced to rely on audio feedback (caused by the spheres impacting a wooden platform below) to deduce that the balls had fallen at the same speed. The experiment was given less credence than the more substantive work of Galileo Galilei and his famous Leaning Tower of Pisa thought experiment of 1589.\n[…]\nA biography by Galileo's pupil Vincenzo Viviani stated that Galileo had dropped balls of the same material, but different masses, from the Leaning Tower of Pisa to demonstrate that their time of descent was independent of their mass. This was contrary to what Aristotle had taught: that heavy objects fall faster than lighter ones, in direct proportion to weight.\n[…]\nSteven Weinberg writes that \"Galileo not only disobeyed the orders of the Roman Inquisition when he argued in his Dialogo that it is the Sun and not the Earth that is at rest, he wrote the Dialogo in Italian rather than in the Latin of scholars, using little mathematics, so that it could be read and understood by any literate Italian."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Galileu_Galilei",
        "situacao": "ok",
        "texto": "Galileo di Vincenzo Bonaulti de Galilei (Pisa, 15 de fevereiro de 1564 – Arcetri, 8 de janeiro de 1642), mais conhecido como Galileu Galilei, foi um astrônomo, físico e engenheiro florentino, às vezes descrito como polímata. Frequentemente é referenciado como \"pai da astronomia observacional\", \"pai da física moderna\", \"pai do método científico\" e \"pai da ciência moderna\".\n[…]\nGalileu nasceu em Pisa, então parte do Ducado de Florença, na Península Itálica, em 15 de fevereiro de 1564, como o primeiro dos seis filhos de Vincenzo Galilei, um lutenista, compositor e teórico musical, e Giulia (née Ammannati), que se haviam casado em 1562. Galileu tornou-se um lutenista talentoso e, desde cedo, teria aprendido com o pai um ceticismo em relação às autoridades estabelecidas.\n[…]\nO nome italiano masculino \"Galileu\" (daí o sobrenome \"Galilei\") deriva do latim \"Galilæus\", que significa \"Galiléia\", uma região biblicamente significativa no norte de Israel.\n[…]\nO trabalho teórico e experimental de Galileu sobre os movimentos dos corpos, juntamente com o trabalho amplamente independente de Kepler e René Descartes, foi um precursor da mecânica clássica desenvolvida por Sir Isaac Newton. Galileu conduziu várias experiências com pêndulos. Acredita-se popularmente (graças à biografia de Vincenzo Viviani) que eles começaram assistindo os balanços do candelabro de bronze na catedral de Pisa, usando seu pulso como um temporizador.\n[…]\nUma biografia de Galileu feita por seu aluno, Vincenzo Viviani, afirmou que ele havia jogado bolas do mesmo material, mas de massas diferentes, da Torre Inclinada de Pisa para demonstrar que o tempo de descida era independente da massa. Isto era contrário ao que Aristóteles havia ensinado: que objetos pesados caem mais rápido que objetos mais leves, em proporção direta ao peso.\n[…]\nas luas galileanas;\n[…]\nObras de ou sobre Galileu Galilei no Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Netuno",
      "descricao": "Oitavo planeta a partir do Sol, um gigante gelado."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1846, guiado por cálculos, um astrônomo identificou Netuno como planeta pela primeira vez. Em que cidade ficava o observatório?",
    "resposta": "Berlim",
    "distratores": [
      "Paris",
      "Londres",
      "Viena"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Discovery_of_Neptune"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Discovery_of_Neptune",
        "situacao": "ok",
        "texto": "The planet Neptune was mathematically predicted before it was directly observed. With a prediction by Urbain Le Verrier, telescopic observations confirming the existence of a major planet were made on the night of September 23–24, autumnal equinox of 1846, at the Berlin Observatory, by astronomer Johann Gottfried Galle (assisted by Heinrich Louis d'Arrest), working from Le Verrier's calculations.\n[…]\nIn retrospect, after it was discovered, it turned out it had been observed many times before but not recognized, and there were others who made calculations about its location which did not lead to its observation. By 1846, the planet Uranus had completed nearly one full orbit since its discovery by William Herschel in 1781, and astronomers had detected a series of irregularities in its path that could not be entirely explained by Newton's law of universal gravitation.\n[…]\nIn 1848, Jacques Babinet raised an objection to Le Verrier's calculations, claiming that Neptune's observed mass was smaller and its orbit larger than Le Verrier had initially predicted. He postulated, based largely on simple subtraction from Le Verrier's calculations, that another planet of roughly 12 Earth masses, which he named \"Hyperion\", must exist beyond Neptune.\n[…]\nAs of 2026, no large planet has been found beyond Neptune that would explain any alleged discrepancy, despite the discovery of trans-Neptunian objects (most notably, Pluto). While the astronomical community widely agrees that \"Planet X\", as originally envisioned, does not exist, the concept of an as-yet-unobserved planet has been revived by a number of astronomers to explain other anomalies observed in the outer Solar System.\n[…]\nNichol, J.P. (1855). The Planet Neptune: An Exposition and History. Edinburgh: James Nichol.\n[…]\nSmart, W.M. (1947). \"John Couch Adams and the discovery of Neptune\". Occasional Notes of the Royal Astronomical Society. 2: 33–88."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Voyager 1",
      "descricao": "Sonda espacial da NASA lançada em 1977, objeto humano mais distante da Terra; gêmea da Voyager 2."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2012, a Voyager 1 se tornou o primeiro objeto feito por humanos a deixar a bolha formada pelo vento solar. Em que região ela entrou?",
    "resposta": "Espaço interestelar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Voyager_1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Voyager_1",
        "situacao": "ok",
        "texto": "Voyager 1 is a space probe launched by NASA on September 5, 1977, as part of the Voyager program, to study the outer Solar System and the interstellar space beyond the Sun's heliosphere. It was launched 16 days after its twin, Voyager 2. It communicates through the NASA Deep Space Network (DSN) to receive routine commands and to transmit data to Earth. Real-time distance and velocity data are prov\n[…]\nVoyager 1's mission included a flyby of Titan, Saturn's largest moon, which had long been known to have an atmosphere. Images taken by Pioneer 11 in 1979 had indicated the atmosphere was substantial and complex, further increasing interest. The Titan flyby occurred as the spacecraft entered the system to avoid any possibility of damage closer to Saturn compromising observations, and approached to within 6,400 km (4,000 mi), passing behind Titan as seen from Earth and the Sun.\n[…]\nNASA announced in June 2012 that the probe was detecting changes in the environment that were suspected to correlate with arrival at the heliopause. Voyager 1 had reported a marked increase in its detection of charged particles from interstellar space, which are normally deflected by the solar winds within the heliosphere from the Sun. The craft thus began to enter the interstellar medium at the edge of the Solar System.\n[…]\nIn March 2013, it was announced that Voyager 1 might have become the first spacecraft to enter interstellar space, having detected a marked change in the plasma environment on August 25, 2012. However, until September 12, 2013, it was still an open question as to whether the new region was interstellar space or an unknown region of the Solar System. At that time, the former alternative was officially confirmed.\n[…]\nVoyager 1 Mission Profile by NASA's Solar System Exploration\n[…]\nPosition of Voyager 1 (Live-Counter)\n[…]\nJPL Voyager Telecom Manual\n[…]\nVoyager 1 Has Outdistanced the Solar Wind"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voyager_1",
        "situacao": "ok",
        "texto": "Voyager 1 é uma sonda espacial norte-americana lançada ao espaço em 5 de setembro de 1977 para estudar Júpiter e Saturno, prosseguindo posteriormente para o espaço interestelar. Em 5 de novembro de 2026, a sonda somou 49 anos e 2 meses em operação, recebendo comandos de rotina e transmitindo dados para a Terra. A sonda foi a primeira a entrar no espaço interestelar, informação oficialmente confirm\n[…]\nAtualmente, a Voyager 1 é o mais distante objeto feito pelo homem a partir da Terra, viajando fora do planeta e do Sol a uma velocidade relativamente mais rápida que a de qualquer outra sonda.\n[…]\nNo dia 3 de dezembro de 2012 a NASA anunciou que a Voyager 1 atingiu uma região do sistema solar que pode ser a última a ser cruzada antes de chegar ao meio interestelar. Em 20 de março de 2013, foi anunciado que a Voyager 1 pode ter sido o primeiro objeto feito pelo homem a deixar o sistema solar. No entanto, a sonda ainda estava em uma região do espaço interestelar ou uma região desconhecida do sistema solar.\n[…]\nA NASA anunciou em 26 de junho de 2013 que a Voyager 1 entrou em uma zona desconhecida do sistema solar, com uma bolha magnética dominada por partículas solares que representam os limites para o espaço interestelar, que não é o mesmo que o limite do sistema solar, pois este pode se estender por 50 000 unidades astronômicas na Nuvem de Oort, muito além da distância percorrida pela missão Voyager 1, pouco mais de 120 unidades astronômicas.\n[…]\nEm setembro a NASA informou que a Voyager 1 havia captado sons do espaço interestelar através de vibrações das ondas de plasma. As ondas detectadas foram amplificadas e reproduzidas para que tivessem uma frequência que pudesse ser ouvida pelos humanos. Os cientistas chegaram à conclusão de que as ocorrências tinham uma densidade continuamente crescente.\n[…]\nVoyager 1 Catálogo (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Meteorito do Bendegó",
      "descricao": "Grande meteorito de ferro encontrado no sertão da Bahia em 1784 e exposto no Museu Nacional, no Rio de Janeiro."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O meteorito do Bendegó, que resistiu ao incêndio do Museu Nacional em 2018, foi encontrado no sertão de qual estado?",
    "resposta": "Bahia",
    "distratores": [
      "Minas Gerais",
      "Pernambuco",
      "Goiás"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bendeg%C3%B3_meteorite",
      "https://pt.wikipedia.org/wiki/Meteorito_do_Bendeg%C3%B3"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bendeg%C3%B3_meteorite",
        "situacao": "ok",
        "texto": "The Bendegó Meteorite (also known as Pedra do Bendegó or simply Bendengó) is a meteorite found in the interior of the state of Bahia, Brazil. It is the largest iron meteorite ever found on Brazilian soil, weighing 5,360 kilograms (11,820 lb), measuring over 2 m (6.6 ft) in length. It has been on display at the National Museum of Brazil, in Rio de Janeiro, since 1888.\n[…]\nThe Bendegó meteorite was found in 1784 by the boy Domingos da Motta Botelho, who grazed cattle on a farm near the present town of Monte Santo, Bahia. At the time of its finding, it was the second largest meteorite in the world. Judging from the four-inch layer of oxidation upon which it rested, and the lost part of its lower portion, it is estimated that it had been in place for thousands of years.\n[…]\nThe meteorite is an irregular mass, 2.20 m × 1.45 m × 0.58 m (7.2 ft × 4.8 ft × 1.9 ft) reminding, in appearance, an asteroid. It has numerous depressions on the surface and cylindrical holes oriented parallel to its greater length. These holes were formed by the burning of the troilite, during the transatmospheric passage of the meteorite, since the sulfide has a lower melting point than the rest of the meteorite, consuming more quickly.\n[…]\nIt is a metallic meteorite, consisting basically of iron, with the following elements: 6.6% Ni, 0.47% Co, 0.22% P, and traces of S and C in much smaller quantities, only measured in parts per million.\n[…]\nThe meteorite has characteristic Widmanstätten pattern iron/nickel crystals as will as inclusions containing phosphorus and sulfur.\n[…]\nCollection of meteorites in the National Museum of Brazil\n[…]\nGlossary of meteoritics\n[…]\nList of largest meteorites on Earth\n[…]\nBendegó meteorite (report)\n[…]\nOs 10 maiores meteoritos encontrados no Brasil (in Portuguese)\n[…]\nBendego Meteorite Archived 2017-08-13 at the Wayback Machine (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Meteorito_do_Bendeg%C3%B3",
        "situacao": "ok",
        "texto": "O meteorito do Bendegó, também conhecido como Pedra do Bendegó ou simplesmente Bendegó, é um meteorito que foi encontrado em 1784 no sertão do estado da Bahia, região da atual cidade de Monte Santo.\n[…]\nCom 5 360 quilos, é o maior siderito já achado em solo brasileiro. Pouco mais de cem anos desde a sua descoberta, foi transportado em 1888 para a cidade do Rio de Janeiro, passando a integrar o acervo do Museu Nacional da Quinta da Boa Vista. Em 2018, o meteorito resistiu ao grande incêndio que destruiu o Museu Nacional.\n[…]\nO meteorito do Bendegó foi encontrado em 1784 pelo menino Domingos da Motta Botelho, que pastoreava o gado em uma fazenda próxima à atual cidade de Monte Santo, no sertão da Bahia. É provável que essa descoberta tenha sido no mês de junho daquele ano, conforme ofício enviado pelo governador da Bahia, D. Rodrigo José de Menezes, ao Secretário de Estado Martinho de Mello e Castro, determinando a remoção do meteorito.\n[…]\nEncontra-se no Museu Nacional na Quinta da Boa Vista, tendo resistido ao incêndio ocorrido no museu em 2 de setembro de 2018.\n[…]\nForam construídas quatro réplicas da pedra, em tamanho real. A primeira foi confeccionada em madeira para figurar na Exposição Universal de Paris em 1889, e está no Palais de la Découverte em Paris. A segunda, em gesso, foi feita na década de 1970 e está no Museu do Sertão em Monte Santo, próximo ao lugar onde o meteorito foi originalmente encontrado. Outras se encontram no Museu Geológico da Bahia, em Salvador, e no Museu Antares de Ciência e Tecnologia, em Feira de Santana.\n[…]\nObelisco Bendegó\n[…]\nMeteorito de Bendegó (relatório da expedição)\n[…]\nOs 10 maiores meteoritos já encontrados no Brasil\n[…]\nMeteorito Bendegó"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Anéis de Saturno",
      "descricao": "Sistema de anéis planetários que circunda Saturno, o mais extenso do Sistema Solar."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Galileu viu formas estranhas dos dois lados de Saturno, sem entender o que eram. Que astrônomo explicou, em meados do século dezessete, que eram um anel?",
    "resposta": "Christiaan Huygens",
    "distratores": [
      "Giovanni Cassini",
      "Johannes Kepler",
      "Edmond Halley"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rings_of_Saturn",
      "https://en.wikipedia.org/wiki/Christiaan_Huygens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rings_of_Saturn",
        "situacao": "ok",
        "texto": "Saturn has the most extensive and complex ring system of any planet in the Solar System. The rings consist of particles in orbit around the planet, ranging from micrometers to meters in size, and are made almost entirely of water ice, with a trace component of rocky material.\n[…]\nThough light reflected from the rings increases Saturn's apparent brightness, they are not themselves visible from Earth with the naked eye. In 1610, the year after his first observations with a telescope, Galileo Galilei became the first person to observe Saturn's rings, though he could not see them well enough to discern their true nature. In 1655, Christiaan Huygens was the first person to describe them as a disk surrounding Saturn.\n[…]\nBefore Wren's hypothesis was published Christiaan Huygens presented his hypothesis of the rings of Saturn. Immediately Wren recognised this as a better hypothesis than his own and De corpore saturni was never published. Robert Hooke was another early observer of the rings of Saturn, and noted the casting of shadows on the rings.\n[…]\nChristiaan Huygens began grinding lenses with his father Constantijn Huygens in 1655 and was able to observe Saturn with greater detail using a 43× power refracting telescope that he designed himself. He was the first to suggest that Saturn was surrounded by a ring detached from the planet, and published his findings in obfuscated form as the letter string \"aaaaaaa­ccccc­deeeeeg­hiiiiiii­llllmm­nnnnnnnnn­oooopp­qrrs­tttttuuuuu\".\n[…]\nChristiaan Huygens – the first to propose that there was a ring surrounding Saturn, in 1655\n[…]\nÉdouard Roche – French astronomer who described how a satellite that comes within the Roche limit of Saturn could break up and form the rings\n[…]\nSaturn's Rings by NASA's Solar System Exploration"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Christiaan_Huygens",
        "situacao": "ok",
        "texto": "Christiaan Huygens, Lord of Zeelhem (14 April 1629 – 8 July 1695) was a Dutch mathematician, physicist, engineer, astronomer, and inventor who is regarded as a key figure in the Scientific Revolution. In physics, Huygens made seminal contributions to optics and mechanics, while as an astronomer he studied the rings of Saturn and discovered its largest moon, Titan.\n[…]\nConstantijn Huygens was a diplomat and advisor to the House of Orange, in addition to being a poet and a musician. He corresponded widely with intellectuals across Europe, including Galileo Galilei, Marin Mersenne, and René Descartes. Christiaan was educated at home until the age of sixteen, and from a young age liked to play with miniatures of mills and other machines.\n[…]\nHuygens's principle\n[…]\nHuygens's lemniscate\n[…]\nBell, A. E. (1947). Christian Huygens and the Development of Science in the Seventeenth Century\n[…]\nWorks by Christiaan Huygens at Project Gutenberg:\n[…]\nWorks by or about Christiaan Huygens at the Internet Archive\n[…]\nWorks by Christiaan Huygens at LibriVox (public domain audiobooks)\n[…]\nClerke, Agnes Mary (1911). \"Huygens, Christiaan\" . Encyclopædia Britannica. Vol. 14 (11th ed.). pp. 21–22.\n[…]\nCorrespondence of Christiaan Huygens at Early Modern Letters Online\n[…]\nDe Ratiociniis in Ludo Aleae or The Value of all Chances in Games of Fortune, 1657 Christiaan Huygens's book on probability theory. An English translation published in 1714. Text pdf file.\n[…]\nThe Correspondence of Christiaan Huygens in EMLO\n[…]\nChristiaan Huygens biography and achievements\n[…]\nPortraits of Christiaan Huygens\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Christiaan Huygens\", MacTutor History of Mathematics Archive, University of St Andrews\n[…]\nChristiaan Huygens on the 25 Dutch Guilder banknote of the 1950s. Archived 13 December 2011 at the Wayback Machine\n[…]\nChristiaan Huygens at the Mathematics Genealogy Project\n[…]\nHow to pronounce \"Huygens\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/An%C3%A9is_de_Saturno",
        "situacao": "ok",
        "texto": "Os anéis de Saturno são o mais extenso sistema de anéis de todos os planetas do Sistema Solar. Eles consistem em incontáveis pequenas partículas, cujo tamanho varia de micrômetros a metros, em órbita ao redor de Saturno. As partículas dos anéis são compostas quase totalmente de gelo de água, com um componente residual de material rochoso. Ainda não há um consenso quanto ao mecanismo da sua formaçã\n[…]\nEmbora a reflexão pelos anéis aumente o brilho de Saturno, eles não são visíveis da Terra a olho nu. Em 1610, um ano depois que Galileu Galilei virou um telescópio para o céu, ele se tornou a primeira pessoa a observar os anéis de Saturno, embora ele não os pudesse ver suficientemente bem para discernir sua verdadeira natureza. Em 1655, Christiaan Huygens foi a primeira pessoa a descrevê-los como um disco em torno de Saturno.\n[…]\nEm 1657, Christopher Wren se tornou professor de Astronomia no Gresham College, em Londres. Ele vinha fazendo observações de Saturno desde 1652 com o objetivo de explicar sua aparência. Sua hipótese foi escrita em De corpori saturni, em que ele chegou perto de sugerir que o planeta tinha um anel. Entretanto, Wren não estava certo sobre se o anel era independente do planeta ou fisicamente ligado a ele.\n[…]\nAntes que a teoria de Wren fosse publicada, Christiaan Huygens apresentou sua teoria dos anéis de Saturno. Wren imediatamente reconheceu que esta hipótese era melhor que a sua, e De corpore saturni nunca foi publicada.\n[…]\nHuygens foi o primeiro a sugerir que Saturno era circundado por um anel destacado do planeta. Usando um telescópio de refração de 50x que ele mesmo havia projetado, muito superior aos disponíveis para Galileu, Huygens observou Saturno e, em 1656, como Galileu, publicou o anagrama aaaaaaacccccdeeeeeghiiiiiiillllmmnnnnnnnnnooooppqrrstttttuuuuu.\n[…]\nMedia relacionados com Anéis de Saturno no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Observatório Nacional",
      "descricao": "Instituição brasileira de pesquisa em astronomia, geofísica e metrologia do tempo, criada em 1827 no Rio de Janeiro."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O Observatório Nacional, no Rio de Janeiro, é uma das instituições científicas mais antigas do Brasil. Que governante o criou, em 1827?",
    "resposta": "Dom Pedro I",
    "distratores": [
      "Dom Pedro II",
      "Dom João VI",
      "José Bonifácio"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Observat%C3%B3rio_Nacional"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Observat%C3%B3rio_Nacional",
        "situacao": "ok",
        "texto": "O Observatório Nacional (ON) é uma instituição científica localizada na cidade do Rio de Janeiro, no estado do Rio de Janeiro, no Brasil. O ON foi criado em 1827, sendo, assim, uma das instituições científicas mais antigas do país, também tendo sua história ligada ao Colégio dos Jesuítas, fundado em 1567. A sua finalidade inicial foi a de orientar os estudos geográficos do território brasileiro e \n[…]\nCriou, entre outros institutos, a meteorologia (1909), o Laboratório Nacional de Astrofísica (1980), anteriormente Observatório Astrofísico Brasileiro e o Museu de Astronomia e Ciências Afins (1985).\n[…]\nCoordenou a expedição científica, então como \"Imperial Observatório do Rio de Janeiro\", que foi observar a passagem do planeta Vênus pelo disco do Sol em 6 de dezembro de 1882, na região subantártica do Estreito de Magalhães, e calcular a distância da Terra ao Sol, uma das medidas da astronomia. Equipamento e pessoal foram embarcados no cruzador misto Pharnayba, \"Gazela do Mar\", da Marinha Imperial do Brasil.\n[…]\nEm 27 de setembro de 1827, a Assembleia Geral Legislativa do Império, autorizou o governo a criar um Observatório Astronômico no âmbito do Ministério do Império e, em 15 de outubro de 1827, o imperador dom Pedro I baixou o decreto que o criou. Ele foi instalado no torreão da Escola Militar, tendo sido dirigido, inicialmente, pelo professor de matemática Pedro de Alcântara Bellegarde.\n[…]\nAs atividades em Metrologia em Tempo e Frequência, que estão a cargo da Divisão Serviço da Hora do Observatório Nacional, remontam à criação do Imperial Observatório Nacional do Rio de Janeiro, em 1827. Há mais de 180 anos, o ON gera, conserva e dissemina a Hora Legal Brasileira (HLB), para todo o território nacional. Desde 1913, através da Lei Nº 2 784, que instituiu o sistema de fuso horário no Brasil, esta atividade passou a ser uma atribuição dada por lei.\n[…]\nObservatório Nacional/MCT"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Via Láctea",
      "descricao": "A galáxia espiral onde fica o Sistema Solar."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No coração da Via Láctea há um buraco negro com milhões de vezes a massa do Sol. Como ele se chama?",
    "resposta": "Sagitário A estrela",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sagittarius_A*",
      "https://en.wikipedia.org/wiki/Milky_Way"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sagittarius_A*",
        "situacao": "ok",
        "texto": "Sagittarius A*, abbreviated as Sgr A* ( SADGE-AY-star), is the supermassive black hole at the Galactic Center of the Milky Way. Viewed from Earth, it is located near the border of the constellations Sagittarius and Scorpius, about 5.6° south of the ecliptic, visually close to the Butterfly Cluster (M6) and Lambda Scorpii. Sagittarius A* is a bright and very compact astronomical radio source.\n[…]\nThe comparatively small mass of this supermassive black hole, along with the low luminosity of the radio and infrared emission lines, implies that the Milky Way is not a Seyfert galaxy.\n[…]\nIn 2011 this conclusion was supported by Japanese astronomers observing the Milky Way's center with the Suzaku satellite.\n[…]\nIn July 2019, astronomers reported finding a star, S5-HVS1, traveling 1,755 km/s (3.93 million mph) or 0.006 c. The star is in the southern constellation of Grus, the crane, and about 29,000 light-years from Earth; it may have been propelled out of the Milky Way galaxy after interacting with Sagittarius A*.\n[…]\nFirst noticed as something unusual in images of the center of the Milky Way in 2002, the gas cloud G2, which has a mass about three times that of Earth, was confirmed to be likely on a course taking it into the accretion zone of Sgr A* in a paper published in Nature in 2012.\n[…]\nIn addition to the tidal effects on the cloud itself, it was proposed in May 2013 that, prior to its perinigricon, G2 might experience multiple close encounters with members of the black-hole and neutron-star populations thought to orbit near the Galactic Center, offering some insight to the region surrounding the supermassive black hole at the center of the Milky Way.\n[…]\nIs there a Supermassive Black Hole at the Center of the Milky Way? (arXiv preprint)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Milky_Way",
        "situacao": "ok",
        "texto": "The Milky Way or Milky Way Galaxy, or simply the Galaxy, is the galaxy that includes the Solar System, with the name describing the galaxy's appearance from Earth: a hazy band of light seen in the night sky formed by stars in other arms of the galaxy, which are so far away that they cannot be individually distinguished by the naked eye.\n[…]\nIn Western culture, the name \"Milky Way\" derives from its appearance as a dim, unresolved, \"milky\" glowing band arching across the night sky. The term is a translation of the Classical Latin via lactea, in turn derived from the Hellenistic Greek γαλαξίας, short for γαλαξίας κύκλος (galaxías kýklos), meaning \"milky circle\".\n[…]\nBelkora, Leila (2021). Minding the Heavens: The Story of Our Discovery of the Milky Way. Milton: Taylor & Francis Group. ISBN 978-0-367-41722-2.\n[…]\nDambeck, Thorsten (March 2008). \"Gaia's Mission to the Milky Way\". Sky & Telescope. 115 (3): 36–39. Bibcode:2008S&T...115c..36D.\n[…]\nHarris, William E. (February 2003). \"Catalog of Parameters for Milky Way Globular Clusters: The Database\" (text). SEDS. Archived from the original on March 9, 2012. Retrieved May 10, 2007.\n[…]\nMcTier, Moiya (August 16, 2022). The Milky Way. Grand Central Publishing. ISBN 978-1-5387-5415-3.\n[…]\nPlait, Phil (November 2023), \"The Milky Way's Secrets: Our Galaxy's Night-Sky Spectacle Sparked Scientific Revolutions\", Scientific American, vol. 329, no. 4, pp. 86–87. Online: \"How Seeing the Milky Way Helped Us Discover the Whole Universe\".\n[…]\nMilky Way – IRAS (infrared) survey – wikisky.org\n[…]\nMilky Way – H-Alpha survey – wikisky.org\n[…]\nMultiwavelength Milky Way – Images and VRML models (NASA)\n[…]\nMilky Way – Panorama (9 billion pixels) Archived August 6, 2017, at the Wayback Machine.\n[…]\nMilky Way – SEDS Messier website\n[…]\nMilky Way – Infrared Images\n[…]\nMilky Way – Mosaic of galactic plane (March 19, 2021)\n[…]\nThe clickable Milky Way"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sagittarius_A%2A",
        "situacao": "ok",
        "texto": "Sagittarius A* ([ˈeɪ stɑːr] AY-_-star), abreviado para Sgr A* ([ˈsædʒ ˈeɪ stɑːr] SAJ-_-AY-_-star), é um buraco negro supermassivo localizado no centro galáctico da Via Láctea. Visto da Terra, está localizado próximo à fronteira das constelações de Sagittarius e Scorpius, cerca de 5,6° ao sul da eclíptica, visualmente perto do Aglomerado da Borboleta (M6) e Lambda Scorpii.\n[…]\nAs observações de várias estrelas orbitando Sagittarius A*, particularmente a estrela S2, foram usadas para determinar a massa e os limites superiores do raio do objeto. Com base na massa e nos limites de raio cada vez mais precisos, os astrônomos concluíram que Sagittarius A* deve ser o buraco negro supermassivo central da galáxia Via Láctea. O valor atual de sua massa é de 4.297±0.012 milhões de massas solares.\n[…]\nEm 16 de outubro de 2002, uma equipe internacional liderada por Rainer Schödel do Instituto Max Planck de Física Extraterrestre relatou a observação do movimento da estrela S2 perto de Sagitário A * durante um período de dez anos. De acordo com a análise da equipe, os dados descartam a possibilidade de que Sgr A * contenha um conjunto de objetos estelares escuros ou uma massa de férmions degenerados, reforçando a evidência de um buraco negro supermaciço.\n[…]\nObservações posteriores da estrela S14 mostraram que a massa do objeto era cerca de 4,1 milhões de massas solares dentro de um volume com raio não maior do que 6,25 horas-luz (45 UA) ou cerca de 6,7 bilhões de quilômetros.\n[…]\nA emissão de elétrons altamente energéticos muito próximos do buraco negro era visível como três chamas brilhantes proeminentes. Estes correspondem exatamente às previsões teóricas de pontos quentes que orbitam perto de um buraco negro de quatro milhões de massas solares. Acredita-se que as erupções tenham origem em interações magnéticas no gás muito quente que orbita muito próximo a Sagitário A *.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Bandeira do Brasil",
      "descricao": "Bandeira nacional brasileira, adotada em 1889, com um céu estrelado no círculo azul."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na bandeira do Brasil, o Distrito Federal é representado por uma estrela discreta, bem perto do polo sul celeste. Que estrela é essa?",
    "resposta": "Sigma Octantis",
    "distratores": [
      "Acrux",
      "Canopus",
      "Antares"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bandeira_do_Brasil",
      "https://en.wikipedia.org/wiki/Sigma_Octantis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Brasil",
        "situacao": "ok",
        "texto": "Bandeira do Brasil constitui a bandeira nacional da República Federativa do Brasil. É composta por uma base verde em forma de retângulo, sobreposta por um losango amarelo e um círculo azul, no meio do qual está atravessada uma faixa branca com o lema \"Ordem e Progresso\", em letras maiúsculas verdes. O Brasil adotou oficialmente este projeto para sua bandeira nacional em 19 de novembro de 1889, sub\n[…]\nAs estrelas, cuja posição na bandeira deveria refletir o céu visto na capital Rio de Janeiro em 15 de novembro de 1889, representam as unidades federativas — cada estrela representa um estado específico, além do Distrito Federal.\n[…]\nAs estrelas, que representam os estados e o Distrito Federal, e a faixa branca estão de acordo, respectivamente, com os astros e o azimute no céu carioca na manhã de 15 de novembro de 1889, às 8h30 (doze horas siderais), e devem ser consideradas como vistas por um observador situado fora da esfera celeste.\n[…]\nO Distrito Federal sempre foi representado pela estrela sigma da constelação do Oitante, também chamada de Polaris Australis ou Estrela Polar do Sul, por situar-se junto ao polo sul celeste (em contrapartida à estrela Polaris, situada nas vizinhanças do polo norte celeste). Apesar de estar próxima do limite de visibilidade a olho nu, Sigma Octantis tem uma posição única no céu do hemisfério sul, pois os demais astros parecem girar a seu redor.\n[…]\nHasteia-se a bandeira:\n[…]\nEm 1933, Eurico de Góes propôs colocar ao centro da bandeira a figura da cruz da Ordem de Cristo sob uma esfera azul, tendo em sua borda 21 estrelas brancas e ao centro seria representada a constelação do Cruzeiro do Sul. Outros projetos conhecidos aparecem no livro \"Brazões e bandeiras do Brasil\", publicado em 1933 por Clóvis Ribeiro e o José Wasth Rodrigues, que propuseram uma série de modelos para uma nova bandeira brasileira.\n[…]\n«Brasil» (em inglês). no Flags of the World\n[…]\nA Estrela de Cabral"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sigma_Octantis",
        "situacao": "ok",
        "texto": "Sigma Octantis is a solitary star in the constellation of Octans that forms the pole star of the Southern Hemisphere. Its name is also written as σ Octantis, abbreviated as Sigma Oct or σ Oct, and it is officially named Polaris Australis (). The star is positioned one degree away from the southern celestial pole of the Southern Hemisphere, lying in a nearly opposite direction to the North Star on \n[…]\nSigma Octantis is a Delta Scuti variable, varying by about 0.03 magnitudes every 2.33 hours. It is thought to pulsate only in the fundamental mode.\n[…]\nSigma Octantis is the current southern pole star, whose counterpart is Polaris, the current North Star. To an observer in the southern hemisphere, Sigma Octantis appears almost motionless and all the other stars in the Southern sky appear to rotate around it. It is part of a small \"half hexagon\" shape. It is slightly more than a degree away from the true south pole, and the south celestial pole is moving away from it due to precession of the equinoxes.\n[…]\nOnce Sigma Octantis' approximate position has been determined, either by the major stars in Octans or using the Southern Cross (Crux) method, it can be positively verified using an asterism: Sigma, Chi, Tau, and Upsilon Octantis are all stars of around magnitude 5.6, and form the distinctive shape of a trapezoid.\n[…]\nSigma Octantis was used as a reference to measure the magnitudes of stars in the southern hemisphere for the 1908 Revised Harvard Photometry catalogue. The Pole Star and Lambda Ursae Minoris were used for the northern hemisphere. It was then noted that \"Neither of these stars appears to vary perceptibly\" but that, due to the procedures used \"if they did, the variation would have no effect on the final measures.\"\n[…]\nSigma Octantis is the dimmest star to be represented on a national flag. It appears on the flag of Brazil, symbolising the Brazilian Federal District."
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Cruzeiro do Sul",
      "descricao": "Constelação do céu austral, presente na bandeira do Brasil."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Além das quatro estrelas que formam a cruz, o Cruzeiro do Sul tem uma quinta, menor e fora do desenho. Que apelido ela tem no Brasil?",
    "resposta": "Intrometida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Epsilon_Crucis",
      "https://pt.wikipedia.org/wiki/Cruzeiro_do_Sul"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Epsilon_Crucis",
        "situacao": "ok",
        "texto": "Epsilon Crucis is a single, orange-hued star in the southern constellation of Crux. It has the proper name Ginan, pronounced ; Epsilon Crucis is its Bayer designation. Measurements made by the Gaia spacecraft showed an annual parallax shift of 14.20 mas, which provides a distance estimate of about 230 light-years (70.4 pc). The star can be seen with the naked eye, having an apparent visual magnitu\n[…]\nIt is also sometimes called Intrometida or Intrusa (intrusive) in Portuguese."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cruzeiro_do_Sul",
        "situacao": "desambiguacao",
        "texto": "Cruzeiro do Sul é uma constelação vista no hemisfério sul. Também  pode referir-se a:\n\nCruzeiro do Sul (Acre) — município do estado do Acre, Brasil\nCruzeiro do Sul (Paraná) — município  do estado do Paraná, Brasil\nCruzeiro do Sul (Rio Grande do Sul) — município  do estado do Rio Grande do Sul, Brasil\nCruzeiro do Sul (Mesquita) — bairro do município de Mesquita, estado do Rio de Janeiro, Brasil\nOrd"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Telescópio Espacial James Webb",
      "descricao": "Telescópio espacial infravermelho da NASA, ESA e CSA, lançado em 2021, com espelho primário de segmentos hexagonais dourados."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Os espelhos do telescópio James Webb são cobertos por uma camada finíssima de um metal que reflete muito bem o infravermelho. Que metal é esse?",
    "resposta": "Ouro",
    "fonte": [
      "https://en.wikipedia.org/wiki/James_Webb_Space_Telescope"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/James_Webb_Space_Telescope",
        "situacao": "ok",
        "texto": "The James Webb Space Telescope (JWST) is a space telescope designed to conduct infrared astronomy. It is the largest telescope in space, and is equipped with high-resolution and high-sensitivity instruments, allowing it to view objects too old, distant, or faint for the Hubble Space Telescope.\n[…]\nThe mass of the James Webb Space Telescope (JWST) is about half that of the Hubble Space Telescope. Webb has a 6.5-meter-diameter (21-foot) gold-coated beryllium primary mirror made up of 18 separate hexagonal mirrors. The mirror has a polished area of 26.3 m2 (283 ft2), of which 0.9 m2 (9.7 ft2) is obscured by the secondary support struts, giving a total collecting area of 25.4 m2 (273 ft2).\n[…]\nThe James Webb Space Telescope has four key goals:\n[…]\nGardner, Jonathan P.; et al. (November 2006). \"The James Webb Space Telescope\". Space Science Reviews. 123 (4): 484–606. arXiv:astro-ph/0606175. Bibcode:2006SSRv..123..485G. doi:10.1007/s11214-006-8315-7. S2CID 118865272. The formal case for JWST science presented in 2006.\n[…]\nKalirai, Jason (April 2018). \"Scientific discovery with the James Webb Space Telescope\". Contemporary Physics. 59 (3): 259–290. arXiv:1805.06941. Bibcode:2018ConPh..59..251K. doi:10.1080/00107514.2018.1467648. S2CID 85539627. A review of JWST capabilities and scientific opportunities.\n[…]\nJWST Video (003:00): 2nd Month − Mirror Alignment details (2/11/2022)\n[…]\nLAUNCH (005:07; 25 Dec 2021) ⇒ SEPARATION (003:14; 25 Dec 2021) (mirror) ⇒ James Webb Space Telescope: Sunshield Deployment – Mission Control Live SUNSHIELD (152:45; 4 Jan 2022) ⇒\n[…]\nMedia Briefing: What's Next for the James Webb Space Telescope ARRIVAL AT L2 (077:14; 24 Jan 2022) ⇒ JAMES WEBB TELESCOPE First Photos, Data & Calibrations Explained TESTINGS & CALIBRATIONS ⇒ The First Thing That James Webb Will See FIRST LIGHT"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Telesc%C3%B3pio_Espacial_James_Webb",
        "situacao": "ok",
        "texto": "O Telescópio Espacial James Webb (em inglês James Webb Space Telescope, JWST) é um telescópio espacial desenvolvido em conjunto pela NASA, a ESA e a CSA, com a finalidade de colocar no espaço um observatório para captar a radiação infravermelha. O telescópio pode observar a formação das primeiras galáxias e estrelas, estudar a evolução das galáxias e ver os processos de formação das estrelas e dos\n[…]\nO termo \"Next Generation\" refere-se ao fato que se pretende que ele venha a substituir o Telescópio espacial Hubble, pois após o seu lançamento, novas tecnologias foram desenvolvidas, permitindo construir o novo telescópio sob uma nova concepção. Posteriormente o telescópio infravermelho foi renomeado em 2002, em honra a um antigo administrador da agência espacial americana, James Edwin Webb, que liderou o programa Apollo, além de uma série de outras importantes missões espaciais.\n[…]\nEste telescópio tem a intenção de substituir parcialmente as funções do telescópio espacial Hubble. Sua massa equivale a aproximadamente metade do Hubble, porém seu espelho primário possui um diâmetro 2,5 vezes maior e uma área de espelho seis vezes maior que a do Hubble, permitindo captar muito mais luz. O telescópio também tem um melhor equipamento para captar a radiação infravermelha. Ele também operara bem mais distante da Terra, orbitando no halo que constitui o segundo ponto de Lagrange L2.\n[…]\nO Telescópio Espacial James Webb tem quatro objetivos principais:\n[…]\nO Telescópio Espacial James Webb é o sucessor formal do Telescópio espacial Hubble, e como seu foco primário é na astronomia infravermelha, ele também é um sucessor do Telescópio espacial Spitzer. O James Webb ultrapassa as capacidades de ambos os predecessores, sendo capaz de ver estrelas e galáxias mais velhas e em maior quantidade.\n[…]\nTelescópio espacial Hubble\n[…]\n«Site da NASA sobre a sonda James Webb Space Telescope» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Plutão",
      "descricao": "Planeta anão do Cinturão de Kuiper, descoberto em 1930 e considerado o nono planeta até 2006."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Plutão foi chamado de planeta por mais de setenta anos. Em tamanho, quem é maior: Plutão ou a nossa Lua?",
    "resposta": "A Lua",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pluto",
      "https://en.wikipedia.org/wiki/Moon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pluto",
        "situacao": "ok",
        "texto": "Pluto (minor-planet number 134340) is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume by a small margin, but is less massive than Eris, which is denser. Like other Kuiper belt objects, Pluto is made primarily of ice and roc\n[…]\nIn September 2006, the IAU included Pluto, and Eris and its moon Dysnomia, in their Minor Planet Catalogue, giving them the official minor-planet designations \"(134340) Pluto\", \"(136199) Eris\", and \"(136199) Eris I Dysnomia\". Had Pluto been included upon its discovery in 1930, it would have likely been designated 1164, following 1163 Saga, which was discovered a month earlier.\n[…]\nIn June 2008, the IAU had announced in a press release that the term \"plutoid\" would henceforth be used to refer to Pluto and other planetary-mass objects that have an orbital semi-major axis greater than that of Neptune, though the term has not seen significant use.\n[…]\nLike other members of the Kuiper belt, Pluto is thought to be a residual planetesimal; a component of the original protoplanetary disc around the Sun that failed to fully coalesce into a full-fledged planet. Most astronomers agree that Pluto owes its position to a sudden migration undergone by Neptune early in the Solar System's formation.\n[…]\nThe resultant expulsion of objects from the proto-Kuiper belt could also explain the Late Heavy Bombardment 600 million years after the Solar System's formation and the origin of the Jupiter trojans. It is possible that Pluto had a near-circular orbit about 33 AU from the Sun before Neptune's migration perturbed it into a resonant capture. The Nice model requires that there were about a thousand Pluto-sized bodies in the original planetesimal disk, which included Triton and Eris."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Moon",
        "situacao": "ok",
        "texto": "The Moon is the only natural satellite of Earth. It orbits Earth in an elliptical path, at a distance  that varies over the year, averaging around 378,000 kilometers (235,000 mi). It completes an orbit (lunar month) in relation to Earth and the Sun (synodically) every 29.5 days. The Moon and Earth are bound by gravitational attraction, which is stronger on the sides facing each other.\n[…]\nThe International Astronomical Union (IAU) calls Earth's satellite \"the Moon\", with a capital \"M\". Other natural satellites of planets are called 'moons', with a lower-case \"m\".\n[…]\nThe Moon is the fifth largest (by size and mass) natural satellite of the Solar System. It is categorizable as a planetary-mass moon, making it a satellite planet under the geophysical definitions of the term. It is smaller than Mercury but considerably larger than the largest dwarf planet of the Solar System, Pluto. The Moon is the second-densest satellite in the Solar System, after Io.\n[…]\nThis is the coldest temperature in the Solar System ever measured by a spacecraft, colder even than the surface of Pluto.\n[…]\nThe so-called \"Tardigrade affair\" of the 2019 crashed Beresheet lander and its carrying of tardigrades has been discussed as an example for lacking measures and lacking international regulation for planetary protection.\n[…]\nIconographically the crescent was used in Mesopotamia as the primary symbol of Nanna/Sîn, the ancient Sumerian lunar deity, who was the father of Inanna/Ishtar, the goddess of the planet Venus (symbolized as the eight pointed Star of Ishtar), and Utu/Shamash, the god of the Sun (symbolized as a disc, optionally with eight rays), all three often depicted next to each other.\n[…]\nThe particular arrangement of the crescent with a star known as the star and crescent (☪️) goes back to the Bronze Age, representing either the Sun and Moon, or the Moon and the planet Venus, in combination."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
        "situacao": "ok",
        "texto": "Plutão (designação de planeta menor: 134340 Plutão) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper, uma região de corpos além da órbita de Netuno.\n[…]\nEntre os objetos do Sistema Solar, Plutão é menor que os planetas telúricos, e com menos 0,2 vezes a massa lunar é menos massivo que sete satélites naturais: Ganimedes, Titã, Calisto, Io, a Lua, Europa e Tritão. Plutão tem mais do dobro do diâmetro do planeta anão Ceres, o maior asteroide do cinturão de asteroides, e doze vezes sua massa. No entanto, ele é menos massivo que o planeta anão Éris, um objeto transneptuniano descoberto em 2006.\n[…]\nO sistema Plutão-Caronte é notável por ser o maior dos poucos planetas binários do Sistema Solar, definidos assim quando o baricentro se localiza acima da superfície do corpo primário (617 Patroclus é um exemplo menor). Isso e o grande tamanho de Caronte em relação a Plutão levou alguns astrônomos a chamá-lo de um planeta anão duplo. O sistema também é incomum pelo fato de haver acoplamento de marés nele, ou seja, o lado de Plutão virado para Caronte é sempre o mesmo e vice-versa.\n[…]\nEm 29 de julho de 2005, foi anunciada a descoberta de Éris, pela equipe liderada pelo astrônomo Michael E. Brown, do Instituto de Tecnologia da Califórnia. Éris, que tem aproximadamente o mesmo tamanho de Plutão, foi o maior objeto do Sistema Solar descoberto desde a descoberta de Tritão em 1846. Os descobridores de Éris e a imprensa chamavam-no inicialmente de \"o décimo planeta\", embora não tenha havido nenhum consenso na época de forma a considerá-lo um planeta oficial.\n[…]\n«O interior de Plutão» (em inglês)\n[…]\n«Imagens e diagramas de Plutão e Caronte» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Voyager 2",
      "descricao": "Sonda espacial da NASA lançada em 1977, única a visitar Urano e Netuno; ilustração da sonda do programa Voyager."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Apesar da numeração, uma das sondas Voyager partiu cerca de duas semanas antes da outra, em 1977. Qual delas foi lançada primeiro?",
    "resposta": "Voyager 2",
    "fonte": [
      "https://en.wikipedia.org/wiki/Voyager_2",
      "https://en.wikipedia.org/wiki/Voyager_1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Voyager_2",
        "situacao": "ok",
        "texto": "Voyager 2 is a space probe launched by NASA on August 20, 1977, as a part of the Voyager program. It was launched on a trajectory towards the gas giants (Jupiter and Saturn) and enabled further encounters with the ice giants (Uranus and Neptune). The only spacecraft to have visited either of the ice giant planets, it was the third of five spacecraft to achieve Solar escape velocity, which allowed \n[…]\nThe Voyager 2 probe was launched on August 20, 1977, by NASA from Space Launch Complex 41 at Cape Canaveral, Florida, aboard a Titan IIIE/Centaur launch vehicle. Two weeks later, the twin Voyager 1 probe was launched on September 5, 1977. However, Voyager 1 reached both Jupiter and Saturn sooner, as Voyager 2 had been launched into a longer, more circular trajectory.\n[…]\nFinally, in December 2018, Stone announced that Voyager 2 reached interstellar space on November 5, 2018.\n[…]\nNASA has decided to patch the computer software in order to modify the functioning of the remaining thrusters to slow the clogging of the small diameter hydrazine injector jets. Before uploading the software update on the Voyager 1 computer, NASA will first try the procedure with Voyager 2, which is closer to Earth.\n[…]\nVoyager 2 is not headed toward any particular star. The nearest star is 4.2 light-years away, and at 15.341 km/s, the spacecraft travels one light-year in about 19,541 years – during which time the nearby stars will also move substantially. In roughly 42,000 years, Voyager 2 will pass the star Ross 248 (10.30 light-years away from Earth) at a distance of 1.7 light-years.\n[…]\nIf undisturbed for 296,000 years, Voyager 2 should pass by the star Sirius (8.6 light-years from Earth) at a distance of 4.3 light-years.\n[…]\nVoyager 1\n[…]\nJPL Voyager Telecom Manual\n[…]\nNASA Voyager website\n[…]\nVoyager 2 Mission Profile by NASA's Solar System Exploration\n[…]\nVoyager 2 (NSSDC Master Catalog) Archived January 31, 2017, at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Voyager_1",
        "situacao": "ok",
        "texto": "Voyager 1 is a space probe launched by NASA on September 5, 1977, as part of the Voyager program, to study the outer Solar System and the interstellar space beyond the Sun's heliosphere. It was launched 16 days after its twin, Voyager 2. It communicates through the NASA Deep Space Network (DSN) to receive routine commands and to transmit data to Earth. Real-time distance and velocity data are prov\n[…]\nThe Voyager 1 probe was launched on September 5, 1977, from Launch Complex 41 at the Cape Canaveral Air Force Station, aboard a Titan IIIE launch vehicle. The Voyager 2 probe had been launched two weeks earlier, on August 20, 1977. Despite being launched later, Voyager 1 reached both Jupiter and Saturn sooner, following a shorter trajectory.\n[…]\nIn October 2020, astronomers reported a significant unexpected increase in density in the space beyond the Solar System as detected by the Voyager 1 and Voyager 2 space probes. According to the researchers, this implies that \"the density gradient is a large-scale feature of the VLISM (very local interstellar medium) in the general direction of the heliospheric nose\".\n[…]\nNASA has accordingly decided to modify the spacecraft's computer software in order to reduce the rate at which the hydrazine lines clog. NASA will first deploy the modified software on Voyager 2, which is less distant from Earth, before deploying it on Voyager 1.\n[…]\nBetween May 2025 and February 2026, Deep Space Station 43 in Canberra, Australia—the only antenna capable of sending commands to Voyager 1 and 2—was offline for major upgrades, with only limited operational windows in August and December 2025. This created a critical deadline for engineers to revive backup roll thrusters before full loss of communication.\n[…]\nNASA Voyager website\n[…]\nJPL Voyager Telecom Manual\n[…]\nVoyager 1 Has Outdistanced the Solar Wind\n[…]\nGray, Meghan. \"Voyager and Interstellar Space\". Deep Space Videos. Brady Haran."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voyager_2",
        "situacao": "ok",
        "texto": "Voyager 2 é uma sonda espacial lançada pela NASA (a agência espacial dos Estados Unidos) em 20 de agosto de 1977, para estudar planetas exteriores e espaço interestelar além da heliosfera do Sol. Como parte do Programa Voyager, foi lançado dezesseis dias antes da Voyager 1, em uma trajetória que demorou mais para chegar nos gigantes gasosos Júpiter e Saturno mas possibilitou novos encontros com os\n[…]\nVoyager 2 continua a ser a única espaçonave a ter visitado todos os planetas gigantes de gelo. Foi a terceira de cinco espaçonaves a atingir a velocidade de escape solar, o que lhe permitiu deixar o Sistema Solar.\n[…]\nA sonda entrou no espaço interestelar em 5 de novembro de 2018, a uma distância de 119,7 AU (17,9 bilhões de km) (cerca de 16,58 horas-luz) do Sol e movendo-se a uma velocidade de 15,341 km/s em relação ao Sol. Voyager 2 deixou a heliosfera do Sol e atualmente está viajando pelo meio interestelar, uma região do Espaço sideral além da influência do Sistema Solar, se juntando a Voyager 1, que havia atingido o meio interestelar em 2012.\n[…]\nVoyager 2 começou a fornecer as primeiras medições diretas da densidade e temperatura do plasma interestelar.\n[…]\nVoyager 2 permanece em contato com a Terra através do Rede de Espaço Profundo da NASA. Em 2020, a manutenção da Rede de Espaço Profundo cortou o contato externo com a sonda por oito meses. O contato foi restabelecido em 2 de novembro de 2020, quando uma série de instruções foram transmitidas, posteriormente executadas e retransmitidas com uma mensagem de comunicação bem-sucedida.\n[…]\nEm julho de 2023, comunicações com a Voyager 2 foi perdida quando o controle de voo apontou sua antena para longe da Terra, movendo-a dois graus para longe da Terra. Em 1 de agosto, o sinal da portadora da espaçonave foi detectado usando várias antenas da Rede de Espaço Profundo.\n[…]\nRetrato de família (Voyager)\n[…]\nVoyager 1\n[…]\nVoyager Golden Record\n[…]\nNASA Voyager website",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Nicolau Copérnico",
      "descricao": "Astrônomo polonês do Renascimento que propôs o modelo heliocêntrico."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O livro em que Copérnico defendeu que a Terra gira em torno do Sol saiu no mesmo ano da morte dele. Em que século foi isso?",
    "resposta": "Século dezesseis",
    "distratores": [
      "Século quatorze",
      "Século quinze",
      "Século dezessete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/De_revolutionibus_orbium_coelestium",
      "https://en.wikipedia.org/wiki/Nicolaus_Copernicus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/De_revolutionibus_orbium_coelestium",
        "situacao": "ok",
        "texto": "De revolutionibus orbium coelestium (On the Revolutions of the Heavenly Spheres) is the seminal work on the heliocentric theory of the astronomer Nicolaus Copernicus (1473–1543 CE). The book, first printed in 1543 CE in Nuremberg, Holy Roman Empire, offered an alternative model of the universe to Ptolemy's geocentric system, which had been widely accepted since ancient times.\n[…]\nTherefore, in order that this opinion may not creep any further to the prejudice of Catholic truth, the Congregation has decided that the books by Nicolaus Copernicus [De revolutionibus] and Diego de Zúñiga [In Job] be suspended until corrected.\n[…]\nGingerich showed that nearly all the leading mathematicians and astronomers of the time owned and read the book; however, his analysis of the marginalia shows that almost all of them ignored the cosmology at the beginning of the book and were only interested in Copernicus' new equant-free models of planetary motion in the later chapters. Also, Nicolaus Reimers in 1587 translated the book into German.\n[…]\nCopernicus, Nicolaus (1543) De Revolutionibus Orbium Coelestium; online from Source Library.\n[…]\nWittenberg interpretation of Copernicus\n[…]\nCopernicus, Nicolaus (1952), On the Revolutions of the Heavenly Spheres, Great Books of the Western World, vol. 16, translated by Charles Glenn Wallis, Chicago: William Benton, pp. 497–838\n[…]\nGingerich, Owen (2004). The Book Nobody Read : Chasing the Revolutions of Nicolaus Copernicus. New York : Walker. ISBN 0-8027-1415-3.{{cite book}}:  CS1 maint: publisher location (link)\n[…]\nManuscript of De Revolutionibus by Nicolaus Copernicus, from Jagiellonian Library, Poland.\n[…]\nDe Revolutionibus Orbium Coelestium (1566) Previously owned by Owen Gingerich. Includes the third printing (previous editions 1540 and 1541) of De libris revolutionum Nicolai Copernici narratio prima. From the University of Sydney Library."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nicolaus_Copernicus",
        "situacao": "ok",
        "texto": "Nicolaus Copernicus (19 February 1473 – 24 May 1543) was a Renaissance polymath who formulated a model of the universe that placed the Sun rather than Earth at its center. The publication of Copernicus's model in his book De revolutionibus orbium coelestium (On the Revolutions of the Celestial Spheres), just before his death in 1543, was a major event in the history of science, triggering the Cope\n[…]\nThe surname Kopernik, Copernik, Koppernigk, in various spellings, is recorded in Kraków from c. 1350, apparently given to people from the village of Koperniki (prior to 1845 rendered Kopernik, Copernik, Copirnik, and Koppirnik) in the Duchy of Nysa, 10 km south of Nysa, and now 10 km north of the Polish-Czech border. Nicolaus Copernicus's great-grandfather is recorded as having received citizenship in Kraków in 1386.\n[…]\nNamed for Copernicus are Nicolaus Copernicus University in Toruń; Warsaw's Copernicus Science Centre, the Centrum Astronomiczne im. Mikołaja Kopernika (a principal Polish research institution in astrophysics), Copernicus Hospital in Poland's fourth largest city, Łódź, and the Wrocław Airport, Port lotniczy Wrocław im. Mikołaja Kopernika or in English: Nicolaus Copernicus Wrocław Airport.\n[…]\nCopernicus Science Centre\n[…]\nNicolaus Copernicus Astronomical Center of the Polish Academy of Sciences\n[…]\nWorks by Nicolaus Copernicus at Project Gutenberg\n[…]\nWorks by or about Nicolaus Copernicus at the Internet Archive\n[…]\nWorks by Nicolaus Copernicus at LibriVox (public domain audiobooks)\n[…]\nWorks by Nicolaus Copernicus in digital library Polona\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Nicolaus Copernicus\", MacTutor History of Mathematics Archive, University of St Andrews\n[…]\nNicolaus Copernicus at the Mathematics Genealogy Project\n[…]\nCopernicus in Torun\n[…]\nNicolaus Copernicus Thorunensis\n[…]\nClerke, Agnes Mary (1911). \"Copernicus, Nicolaus\" . Encyclopædia Britannica. Vol. 7 (11th ed.). pp. 100–101.\n[…]\nCopernican Model"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/De_revolutionibus_orbium_coelestium",
        "situacao": "ok",
        "texto": "De revolutionibus orbium coelestium  é o nome original em latim do livro Das revoluções das esferas celestes, do astrônomo polonês  Mikołaja Kopernika (1473 — 1543), mais conhecido pelo nome latinizado Nicolau Copérnico, publicado em 24 de maio de 1543 em Nuremberga. É uma das obras mais importantes do período do Renascimento e um marco da Revolução Científica.\n[…]\nO livro marcou o começo de uma mudança de um universo geocêntrico, ou antropocêntrico, com a Terra em seu centro. Copérnico acreditava que a Terra era apenas mais um planeta que concluía uma órbita em torno de um sol fixo todo ano e que girava em torno de seu eixo todo dia. Ele chegou a essa correta explicação do conhecimento de outros planetas e explicou a origem dos equinócios corretamente, através da vagarosa mudança da posição do eixo rotacional da Terra.\n[…]\nDa sua publicação, até aproximadamente 1700, poucos astrônomos foram convencidos pelo sistema de Copérnico, apesar da grande circulação de seu livro (aproximadamente 500 cópias da primeira e segunda edições, o que é uma quantidade grande para os padrões científicos da época).\n[…]\nSe essas proposições eram revolucionárias ou conservadoras era um tópico muito discutido atualmente. O físico norte-americano Thomas Kuhn argumentou que Copérnico apenas transferiu algumas propriedades, antes atribuídas a Terra, para as funções astronômicas do Sol.\n[…]\nRealmente a teoria revolucionava a astronomia. Porém a inquietação de Lutero referia-se ao fato de, por esta teoria, o homem não estar mais situado no centro de todas as coisas, como uma imagem de Deus, mas num mero planeta como tantos outros. Mas na Inglaterra, a recepção foi melhor: Robert Recorde em seu livro \"Castelo do Conhecimento\", de 1556 demonstra simpatia pela teoria, o mesmo acontecendo com John Dee.\n[…]\n1854, Varsóvia, com tradução ao polonês e o autêntico prefácio por Copérnico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cometa Halley",
      "descricao": "Cometa periódico visível a olho nu que volta às proximidades da Terra em intervalos regulares."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O cometa Halley passou perto do Sol pela última vez em 1986. Em que ano está previsto o seu próximo retorno?",
    "resposta": "2061",
    "distratores": [
      "2056",
      "2066",
      "2076"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Halley%27s_Comet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Halley%27s_Comet",
        "situacao": "ok",
        "texto": "Halley's Comet is the only known short-period comet that is consistently visible to the naked eye from Earth, appearing roughly every 74–79 years. It last appeared in the inner parts of the Solar System in 1986 and will next appear in mid-2061. Officially designated 1P/Halley, it is also commonly called Comet Halley, or sometimes simply Halley.\n[…]\nUltimately it was Newton's friend, editor and publisher, Edmond Halley, who, in his 1705 Synopsis of the Astronomy of Comets, used Newton's new laws to calculate the gravitational effects of Jupiter and Saturn on cometary orbits. Having compiled a list of 24 comet observations, he calculated that the orbital elements of a second comet that had appeared in 1682 were nearly the same as those of two comets that had appeared in 1531 (observed by Petrus Apianus) and 1607 (observed by Johannes Kepler).\n[…]\nHalley's apparition of 1456 was also witnessed in Kashmir and depicted in great detail by Śrīvara, a Sanskrit poet and biographer to the Sultans of Kashmir. He read the apparition as a cometary portent of doom foreshadowing the imminent fall of Sultan Zayn al-Abidin (AD 1418/1420–1470).\n[…]\nICE flew through the tail of Halley's Comet, coming within about 40.2 million km (25.0 million mi) of the nucleus on 28 March 1986.\n[…]\nThe next perihelion of Halley's Comet is predicted for 28 July 2061, when it will be better positioned for observation than during the 1985–1986 apparition, as it will be on the same side of the Sun as Earth. The closest approach to Earth will be one day after perihelion. It is expected to have an apparent magnitude of −0.3, compared with only +2.1 for the 1986 apparition.\n[…]\nOn 9 September 2060, Halley will pass within 0.98 au (147,000,000 km) of Jupiter, and then on 20 August 2061, will pass within 0.0543 au (8,120,000 km) of Venus.\n[…]\n1P/Halley at the Minor Planet Center database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cometa_Halley",
        "situacao": "ok",
        "texto": "Cometa Halley, oficialmente designado 1P/Halley, é um cometa periódico, visível na Terra a cada 75–76 anos. É o único cometa de curto período que é regularmente visível a olho nu da Terra, e o único cometa a olho nu a aparecer nos céus duas vezes durante uma só geração humana. A última aparição dele foi em 1986, e seu retorno está marcado para 2061.\n[…]\nEmbora a órbita retrógrada e a alta inclinação do cometa Halley dificultem o envio de uma sonda espacial, a aparição de 1986 deu aos cientistas a oportunidade de estudar de perto o cometa, e várias sondas foram lançadas para isso. O Vega 1 soviético começou a enviar imagens de Halley em 4 de março de 1986, e o primeiro de seu núcleo, e fez o seu sobrevoo em 6 de março, seguido pelo Vega 2 que fez o sobrevoo em 9 de março.\n[…]\nEm 14 de março, a sonda espacial Giotto, lançada pela Agência Espacial Européia, fez a passagem mais próxima do núcleo do cometa. Houve também duas sondas japonesas, Suisei e Sakigake. Esse conjunto de sondas foram oficialmente conhecidas como a Armada Halley.\n[…]\nOriginalmente chamado de International Sun-Earth Explorer 3, a sonda foi renomeada e liberada de sua localização no ponto Lagrangiano L1 na órbita da Terra para interceptar os cometas 21P/Giacobini-Zinner e o Halley. A ICE fez sua abordagem mais próxima em 28 de março de 1986.\n[…]\nO próximo periélio do cometa Halley será em 28 de julho de 2061, quando estará mais bem posicionado para observação do que durante a aparição de 1985-1986, pois estará do mesmo lado da Terra em relação ao Sol. Espera-se que tenha uma magnitude aparente de -0,3, em comparação com apenas +2,1 na aparição de 1986.\n[…]\nFoi calculado que em 9 de setembro de 2060, o Halley passará a aproximadamente 0,98 UA (147 000 000 km) de Júpiter e, em 20 de agosto de 2061, passará a aproximadamente 0,0543 UA (8 120 000 km) de Vênus.\n[…]\n1P/Halley na CometBase",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.94 — 2026-11-02**
>
> Este documento define **o que é uma boa pergunta** no Mestre2 e **como o banco de perguntas é organizado e produzido**. Vale para qualquer pessoa ou modelo que crie, revise ou processe perguntas.
>
> Ele tem duas partes:
> - **Parte I — Regras de conteúdo (§1 a §9):** o que uma pergunta deve ser. É a parte que o gerador e o crítico automáticos recebem.
> - **Parte II — Organização e processo (§10 a §18):** esquemas, fluxo de produção, decisões, pendências, o jogo, o app e a programação até 10 000 e até 20 000 perguntas. É a referência de quem mantém o projeto.
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
- no máximo **3 perguntas por âncora** em cada lote (2 até 2026-10-27), nunca com o mesmo ângulo;
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro;
- no máximo **8 perguntas por âncora** no banco inteiro (3 até 2026-10-23, 5 até 2026-10-27), somando texto e figura, e no máximo **3 com figura** (2 até 2026-10-27). As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas. Essas perguntas têm um teto no jogo original (§9).
- **Metade aberta, metade múltipla escolha** (desde 2026-10-27). O jogo original busca as duas formas na mesma proporção, em cada tema, para que um modo só de múltipla escolha tenha perguntas de todos os temas. Vale para texto e figura. Cada lote recebe a quantidade de `multipla` que aproxima o seu tema dessa meta (§17), e a pergunta segue a quantidade pedida, salvo quando a outra forma for claramente melhor.

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
- no máximo **três perguntas com figura por âncora**, de famílias diferentes e com imagens diferentes (a obra inteira e um detalhe, a fachada e uma vista aérea).

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
- **Exclusiva** (campo `exclusiva`): a pergunta sai **só no modo da coleção**, nunca no jogo original (Master e Linear).
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
- **Saturação:** o áudio conta no limite de 8 perguntas por âncora, e cada âncora tem no máximo 1 pergunta com áudio.
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
- **Respostas que são um ano específico** ("1969", "800 a.C."), somando abertas e múltiplas: no máximo **9%** das perguntas do lote, e no máximo **uma** num lote de figuras, que tem 12 itens (desde 2026-10-30, só no jogo original). Para pedir a época, prefira o século, a década ou a ordem entre dois fatos. O registro descarta o que passar do teto; as perguntas que já estavam no banco ficam.
- No máximo **3 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras centrais e conhecidas**, mesmo que já tenham perguntas, a âncoras novas e obscuras (desde 2026-10-27; antes, "prefira âncoras novas"). O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para aprofundá-las com fatos e ângulos novos, sem repetir fatos.
- **Tentar incluir uma âncora nova a cada 50 perguntas**, tão conhecida quanto as centrais, para manter alguma variedade. Se for difícil achar uma assim, o lote fica sem: uma âncora nova obscura não vale a troca.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
