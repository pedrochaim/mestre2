Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Corpo Humano e Medicina** (tema **Ciências**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Tendão de Aquiles",
      "descricao": "Tendão que liga os músculos da panturrilha ao osso do calcanhar."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O tendão que liga a panturrilha ao calcanhar leva o nome de qual herói grego, vulnerável apenas nessa parte do corpo?",
    "resposta": "Aquiles",
    "fonte": [
      "https://en.wikipedia.org/wiki/Achilles_tendon",
      "https://en.wikipedia.org/wiki/Achilles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Achilles_tendon",
        "situacao": "ok",
        "texto": "The Achilles tendon, or the heel cord, also known as the calcaneal tendon, is a tendon at the back of the lower leg, and is the thickest in the human body. It serves to attach the plantaris, gastrocnemius (calf) and soleus muscles to the calcaneus (heel) bone. These muscles, acting via the tendon, cause plantar flexion of the foot at the ankle joint, and (except the soleus) flexion at the knee.\n[…]\nThe Achilles tendon is also known as the \"tendo calcaneus\" (Latin for \"calcaneal tendon\"). Because eponyms (names relating to people) have no relationship to the subject matter, most anatomical eponyms also have scientifically descriptive terms. The term calcaneal comes from the Latin calcaneum, meaning heel.\n[…]\nThe Achilles tendon connects muscle to bone, like other tendons, and is located at the back of the lower leg. The Achilles tendon connects the gastrocnemius and soleus muscles to the calcaneal tuberosity on the calcaneus (heel bone). The tendon begins near the middle of the calf, and receives muscle fibers on its inner surface, particularly from the soleus muscle, almost to its lower end. Gradually thinning below, it inserts into the middle part of the back of the calcaneus bone.\n[…]\nThe tendon is covered by the fascia and skin, and stands out prominently behind the bone; the gap is filled up with areolar and adipose tissue. A bursa (Achilles bursa) lies between the tendon and the upper part of the calcaneus. It is about 15 centimetres (6 in) long.\n[…]\nTendon xanthomas are cholesterol deposits that commonly develop in the Achilles tendon of people with lipid metabolism disorders such as familial hypercholesterolemia.\n[…]\nIt has been suggested that the \"absence of a well-developed Achilles tendon in the nonhuman African apes would preclude them from effective running, both at high speeds and over extended distances.\"\n[…]\nMedia related to Achilles tendon at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Achilles",
        "situacao": "ok",
        "texto": "In Greek mythology, Achilles (  ə-KIL-eez) or Achilleus (Ancient Greek: Ἀχιλλεύς, romanized: Achilleús) was a hero of the Trojan War who was known as being the greatest of all the Greek warriors. The central character in Homer's Iliad, he was the son of the Nereid Thetis and Peleus, king of Phthia and famous Argonaut. Achilles was raised in Phthia along with his childhood companion Patroclus and r\n[…]\nAlluding to these legends, the term Achilles' heel has come to mean a point of weakness which can lead to downfall, especially in someone or something with an otherwise strong constitution. The Achilles tendon is named after him following the same legend.\n[…]\nAccording to the Achilleid, written by Statius in the first century AD, and to non-surviving previous sources, when Achilles was born Thetis tried to make him immortal by dipping him in the river Styx; however, he was left vulnerable at the part of the body by which she held him: his left heel (see Achilles' heel, Achilles tendon). It is not clear if this version of events was known earlier.\n[…]\nNicolae Densuşianu recognized a connection to Achilles in the names of Aquileia and of the northern arm of the Danube delta, called Chilia (presumably from an older Achileii), although his conclusion, that Leuce had sovereign rights over the Black Sea, evokes modern rather than archaic sea-law.\n[…]\nDorothea Sigel; Anne Ley; Bruno Bleckmann. \"Achilles\". In Hubert Cancik; et al. (eds.). Achilles. Brill's New Pauly. Brill Reference Online. doi:10.1163/1574-9347_bnp_e102220.\n[…]\nDale S. Sinos (1991), The Entry of Achilles into Greek Epic, PhD thesis, Johns Hopkins University. Ann Arbor, Michigan: University Microfilms International.\n[…]\nJonathan S. Burgess (2009), The Death and Afterlife of Achilles. Baltimore: Johns Hopkins University Press.\n[…]\nGallery of the Ancient Art: Achilles\n[…]\nAchilles  – via Wikisource. Poem by Florence Earle Coates"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tend%C3%A3o_calc%C3%A2neo",
        "situacao": "ok",
        "texto": "Tendão calcâneo ou como é popularmente chamado tendão de Aquiles é um tendão da perna posterior.\n[…]\nSegundo a mitologia grega, o herói Aquiles tinha um único ponto vulnerável no seu corpo. Um ponto fraco herdado pela humanidade ao batizar o tendão de Aquiles. Tendão é um tecido fibroso, composto primeiramente por colágeno, que conecta o músculo ao osso, sendo responsável pela transferência de força entre os dois gerando o movimento da articulação. O tendão de Aquiles é o mais resistente do corpo humano, e o mais suscetível que cruza duas articulações: o joelho e o tornozelo.\n[…]\nÉ importante diferenciar 4 lesões diferentes, que podem ser vistas como 4 estágios evolutivos da mesma patologia. A tendinite (estágio inicial) é um processo inflamatório que leva a dor na face posterior do tornozelo. Essa inflamação, cronicamente, leva ao enfraquecimento do tendão, tornando-o suscetível a lesões parciais. As causas mais comuns da tendinite aquileana são:\n[…]\nTrauma, secundário a contração vigorosa da musculatura da panturrilha;\n[…]\nEncurtamento do tendão de aquiles;\n[…]\nPara finalizar, seguem seis medidas que devem diminuir a incidência da tendinite calcânea nos seus treinos:\n[…]\nEscolha seu tênis com cuidado, dando especial atenção a absorção de impacto no calcâneo.\n[…]\nFaça um programa de fortalecimento para panturrilha e face anterior da perna.\n[…]\nReflexo aquileu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Músculo",
      "descricao": "Tecido do corpo capaz de se contrair e produzir movimento."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra músculo vem de um diminutivo latino, talvez pelo jeito como os músculos se mexem sob a pele. Ela significa pequeno o quê?",
    "resposta": "Rato",
    "fonte": [
      "https://en.wikipedia.org/wiki/Muscle",
      "https://www.etymonline.com/word/muscle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Muscle",
        "situacao": "ok",
        "texto": "Muscle is a specialised soft tissue, one of the four basic types of animal tissues. There are three types of muscle tissues in vertebrates: skeletal muscle tissue, cardiac muscle tissue, and smooth muscle tissue. Muscle tissue gives skeletal muscles the ability to contract and relax. Muscle tissue contains special contractile proteins called actin and myosin which interact to cause movement. Among\n[…]\nThe word muscle comes from Latin musculus, diminutive of mus meaning mouse, because the appearance of the flexed biceps resembles the back of a mouse.\n[…]\nThe primary function of muscle tissue is contraction. The three types of muscle tissue (skeletal, cardiac and smooth) have significant differences. However, all three use the movement of actin against myosin to create contraction.\n[…]\nIn skeletal muscle, contraction is stimulated by electrical impulses transmitted by the motor nerves. Cardiac and smooth muscle contractions are stimulated by internal pacemaker cells which regularly contract, and propagate contractions to other muscle cells they are in contact with. All skeletal muscle and many smooth muscle contractions are facilitated by the neurotransmitter acetylcholine.\n[…]\nSmooth muscle cells contract more slowly than skeletal muscle cells, but they are stronger, more sustained and require less energy. Smooth muscle is also involuntary, unlike skeletal muscle, which requires a stimulus.\n[…]\nCardiac muscle is the muscle of the heart. It is self-contracting, autonomically regulated and must continue to contract in a rhythmic fashion for the whole life of the organism. Hence it has special features.\n[…]\nThere are three types of muscle tissue in invertebrates that are based on their pattern of striation: transversely striated, obliquely striated, and smooth muscle. In arthropods there is no smooth muscle. The transversely striated type is the most similar to the skeletal muscle in vertebrates."
      },
      {
        "url": "https://www.etymonline.com/word/muscle",
        "situacao": "ok",
        "texto": "Muscle - Etymology, Origin & Meaning Advertisement Remove Ads\n[…]\n\"contractible animal tissue consisting of bundles of fibers,\" late 14c., \"a muscle of the body,\" from Latin musculus \"a muscle,\" literally \"a little mouse,\" diminutive of mus \"mouse\" (see mouse (n.)).\n[…]\nHence muscular and mousy are relatives, and a Middle English word for \"muscular\" was lacertous , \"lizardy.\" Figurative sense of \"muscle, strength, brawn\" is by 1850; that of \"force, violence, threat of violence\" is 1930, American English. Muscle car \"hot rod\" is from 1969.\n[…]\n1680s, \"pertaining to muscles,\" from Latin musculus (see muscle (n.)) + -ar. Earlier in same sense was musculous (early 15c., from Latin musculosus). Meaning \"brawny, strong, having well-developed muscles\" is from 1736. Muscular Christianity (1857) is originally in reference to p\n[…]\n\"edible bivalve mollusk,\" Middle English muscle, from Old English muscle, musscel, from Late Latin muscula (source of Old..., Dutch mossel, Old High German muscula, German Muschel), from Latin musculus \"mussel,\" literally \"little mouse,\" also \"muscle...;\" like muscle, derived from mus \"mouse\" on the perceived similarity of size and shape (see mouse (n.))....The modern spelling, distinguishing the word from muscle, is recorded from c. 1600 but was not fully established until 1870s...\n[…]\n<a href=\"https://www.etymonline.com/word/muscle\">Etymology of muscle by etymonline</a> Copy\n[…]\nD. Harper. \"Etymology of muscle.\" Online Etymology Dictionary. https://www.etymonline.com/word/muscle (accessed September 30, 2026). Copy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%BAsculo",
        "situacao": "ok",
        "texto": "O músculo é o tecido responsável pelo movimento de um ser vivo, tanto em movimentos voluntários, com os quais interage com o meio ambiente, como movimentos dos seus órgãos internos, o coração ou o intestino.\n[…]\nNossos músculos possuem duas funções comuns: (1) gerar movimento e (2) gerar força. Mas também, além dessas, podem geram calor e contribuem significativamente para a homeostase da temperatura do corpo.\n[…]\nOs músculos esqueléticos possuem uma coloração mais avermelhada. São também chamados de músculos estriados, já que apresentam estriações em suas fibras (fibrocélulas estriadas). São os responsáveis pelos movimentos voluntários; estes músculos se inserem sobre os ossos e sobre as cartilagens e contribuem, com a pele e o esqueleto, para formar o invólucro exterior do corpo.\n[…]\nUsamos aproximadamente 200 músculos para andar.\n[…]\nDiversas doenças causam uma diminuição da massa muscular, conhecida como atrofia muscular. Alguns exemplos incluem o câncer e a AIDS, que podem induzir uma síndrome chamada caquexia.\n[…]\nExistem dois tipos de contrações musculares: contração isotônica e contração isométrica.\n[…]\nA produção de energia mecânica de uma contração cíclica pode depender de muitos fatores, incluindo tempo de ativação, a trajetória de tensão muscular, e as taxas de aumento e diminuição da força. Estes podem ser sintetizados experimentalmente usando análise do loop do trabalho.\n[…]\nFisiculturismo é o esporte cujo objetivo é buscar, por meio da musculação, a melhor formação muscular, através de treinamento com pesos, alimentação e descanso adequados.\n[…]\nLista de músculos do corpo humano\n[…]\nMusculação\n[…]\n«Animação sobre os músculos» (em inglês)\n[…]\n«Vídeo sobre distensão muscular»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pupila",
      "descricao": "Abertura escura no centro da íris, por onde a luz entra no olho."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A pupila tem nome latino inspirado no reflexo minúsculo que vemos nos olhos de outra pessoa. O nome significa pequena o quê?",
    "resposta": "Boneca",
    "distratores": [
      "Estrela",
      "Janela",
      "Pérola"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pupil",
      "https://www.etymonline.com/word/pupil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pupil",
        "situacao": "ok",
        "texto": "The pupil is a hole located in the center of the iris of the eye that allows light to strike the retina. It appears black because light rays entering the pupil are either absorbed by the tissues inside the eye directly, or absorbed after diffuse reflections within the eye that mostly miss exiting the narrow pupil. The size of the pupil is controlled by the iris, and varies depending on many factor\n[…]\nWhen bright light is shone on the eye, light-sensitive cells in the retina, including rod and cone photoreceptors and melanopsin ganglion cells, will send signals to the oculomotor nerve, specifically the parasympathetic part coming from the Edinger-Westphal nucleus, which terminates on the circular iris sphincter muscle. When this muscle contracts, it reduces the size of the pupil. This is the pupillary light reflex, which is an important test of brainstem function.\n[…]\nFurthermore, the pupil will dilate if a person sees an object of interest.\n[…]\nThe W-shape of the cuttlefish reduces light from the dorsal visual field significantly more than it reduces light from the horizontal band. This is hypothesized to benefit cuttlefish in its natural habitat, where the scene is brighter near the sea surface. Also, it preserves more of the frontal and caudal visual acuity compared to a circular pupil.\n[…]\n(The double meaning in Latin is preserved in English, where pupil means both \"schoolchild\" and \"dark central portion of the eye within the iris\".) This may be because the reflection of one's image in the pupil is a minuscule version of one's self. In the Old Babylonian period (c. 1800-1600 BC) in ancient Mesopotamia, the expression \"protective spirit of the eye\" is attested, perhaps arising from the same phenomenon.\n[…]\nPupil function\n[…]\nAdie's pupil\n[…]\nArgyll Robertson pupil\n[…]\nMarcus Gunn Pupil\n[…]\nA pupil examination simulator, demonstrating the changes in pupil reactions for various nerve lesions."
      },
      {
        "url": "https://www.etymonline.com/word/pupil",
        "situacao": "ok",
        "texto": "Pupil - Etymology, Origin & Meaning Advertisement Remove Ads\n[…]\n.; Modern French auditeur), from Latin auditor \"a hearer, a pupil, scholar, disciple,\" in Medieval Latin \"a judge, examiner...\n[…]\nAmerica, 1804, named 1791 by Spanish botanist Antonio José Cavanilles for Anders Dahl (1751-1789), Swedish botanist and pupil...\n[…]\n1570s, \"inferior in rank\" (1540s as a noun, \"junior pupil, freshman\"), senses now obsolete, from French puisné (Modern French...\n[…]\nThe meaning \"administrative head of the Paris police\" is from 1800; the sense of \"senior pupil designated to keep order in...\n[…]\nMiddle English scolere, from Old English scolere \"student, one who receives instruction in a school, one who learns from a teacher,\" from Medieval Latin scholaris, \"a pupil, scholar,\" noun use of Late Latin scholaris \"of a school,\" from Latin schola (see school (n.1), and compare\n[…]\nhttps://www.etymonline.com/word/pupil Copy\n[…]\n<a href=\"https://www.etymonline.com/word/pupil\">Etymology of pupil by etymonline</a> Copy\n[…]\nHarper, D. (n.d.). Etymology of pupil. Online Etymology Dictionary. Retrieved September 30, 2026, from https://www.etymonline.com/word/pupil Copy\n[…]\nHarper Douglas, \"Etymology of pupil,\" Online Etymology Dictionary, accessed September 30, 2026, https://www.etymonline.com/word/pupil. Copy\n[…]\nHarper, Douglas. \"Etymology of pupil.\" Online Etymology Dictionary, https://www.etymonline.com/word/pupil. Accessed 30 September, 2026. Copy\n[…]\nD. Harper. \"Etymology of pupil.\" Online Etymology Dictionary. https://www.etymonline.com/word/pupil (accessed September 30, 2026). Copy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pupila",
        "situacao": "ok",
        "texto": "Pupila (termo oriundo do latim, pupilla - menininha), ou Menina dos olhos, é a parte do olho, como um orifício de diâmetro regulável, que está situada entre a córnea e o cristalino, e no centro da íris, responsável pela passagem da luz do meio exterior até os órgãos sensoriais da retina. Localiza-se na parte média do olho, ou úvea e tem por função regular a quantidade de luz que passa para a retin\n[…]\nNos humanos e em muitos outros animais (inclusive alguns poucos peixes), o tamanho da pupila é controlada pela constrição e dilatação involuntária da íris, para controlar a intensidade da passagem de luz, por reflexo. No homem numa claridade normal, a pupila tem um diâmetro de 3 a 5 milímetros; em grande luminosidade o diâmetro chega a medir 1,5 mm.; no escuro, pode atingir o diâmetro de 8 mm. O estreitamento da pupila resulta numa maior gama focal.\n[…]\nO formato mais comum é o circular ou esféricos. Nas espécies aquáticas são encontrados outros formatos, que variam de acordo com as características ópticas da lente, forma e sensibilidade da retina e, ainda, com as exigências visuais das espécies. Os formatos elipsoidais são encontrados nas espécies que são ativas numa variação grande de níveis luminosos; quando há bastante claridade, a pupila é semelhante a um pequeno traço, embora permita lançar luz sobre grande parte da retina.\n[…]\nMuitas cobras, como jibóias, pítons e outras, têm pupilas verticais, ovais, que as ajudam a caçar suas presas sob uma gama extensa de claridade. Gatos e raposas também possuem pupilas neste formato, ao passo em que leões e lobos têm-nas redondas, embora sejam, respectivamente, das mesmas famílias dos gatos e raposas. Algumas hipóteses para isso é que alguns formatos de pupilas favorecem a perseguição de presas pequenas, enquanto outras a caça de animais maiores.\n[…]\nMidríase: dilatação da pupila\n[…]\nMiose: contração da pupila",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Trypanosoma cruzi",
      "descricao": "Protozoário causador da doença de Chagas, descrito por Carlos Chagas em 1909."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Carlos Chagas batizou o protozoário causador da doença de Chagas em homenagem a qual cientista brasileiro, seu mestre?",
    "resposta": "Oswaldo Cruz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trypanosoma_cruzi",
      "https://pt.wikipedia.org/wiki/Trypanosoma_cruzi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trypanosoma_cruzi",
        "situacao": "ok",
        "texto": "Trypanosoma cruzi is a species of parasitic kinetoplastid which causes Chagas disease. Among the protozoa, the trypanosomes characteristically bore tissue in another organism and feed on blood (primarily) and also lymph. This behaviour causes disease or the likelihood of disease that varies with the organism: Chagas disease and sleeping sickness in humans, dourine and surra in horses, and a brucel\n[…]\nThe specific name \"cruzi\" is an honor to Brazilian scientist Oswaldo Cruz, who was the teacher of the discoverer: Carlos Chagas.\n[…]\nTrypanosoma cruzi exhibits three major morphological forms during its complex life cycle: epimastigote, trypomastigote, and amastigote stages.\n[…]\nConduction abnormalities are also associated with T. cruzi. At the base of these conduction abnormalities is a depopulation of parasympathetic neuronal endings on the heart. Without proper parasympathetic innervations, one could expect to find not only chronotropic but also inotropic abnormalities. It is true that all inflammatory and non-inflammatory heart disease may display forms of parasympathetic denervation; this denervation presents in a descriptive fashion in Chagas disease.\n[…]\nNew data in 2024 suggests the prevalence of Trypanosoma cruzi infection among solid organ transplant recipients in the U.S. is on the rise, highlighting the need for enhanced screening protocols. The research revealed that lung transplant recipients had the highest prevalence of positive serology at 21%, followed by heart recipients at 14%, compared to lower rates in liver (6%) and kidney (5%) transplant recipients.\n[…]\n\"American Trypanosomiasis (Trypanosoma cruzi)\". DPDx—Laboratory Identification of Parasitic Diseases of Public Health Concern. Centers for Disease Control and Prevention. 29 November 2013.\n[…]\n\"Trypanosoma cruzi\". NCBI Taxonomy Browser. 5693."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trypanosoma_cruzi",
        "situacao": "ok",
        "texto": "Trypanosoma cruzi é um protozoário flagelado unicelular da família Trypanosomatidae. É o agente etiológico da doença de Chagas.\n[…]\nA espécie foi descrita em 1909 pelo médico brasileiro Carlos Ribeiro Justiniano Chagas, como Trypanosoma cruzi. O epíteto específico homenageia o médico epidemiologista Oswaldo Gonçalves Cruz . No mesmo ano, Chagas recombinou-a em um novo gênero, o Schizotrypanum, após reconhecer particularidades biológicas no ciclo reprodutivo que a diferenciava das demais espécies do gênero Trypanosoma.\n[…]\nDentro do gênero Trypanosoma, a espécie está classificada na seção Stercoraria e no subgênero Schizotrypanum. T. cruzi é politípico, com duas subespécies reconhecidas: Trypanosoma cruzi cruzi, agente da doença de Chagas, e o Trypanosoma cruzi marinkellei, encontrado apenas em morcegos no Continente americano.\n[…]\nEspecificamente, cinco espécies são consideradas as mais notórias na transmissão da doença de Chagas, pela capacidade de colonizar e adaptar-se às habitações humanas, são elas: Triatoma infestans, Triatoma brasiliensis, Triatoma dimidiata, Panstrongylus megistus e Rhodnius prolixus.\n[…]\nT. cruzi está dividido em dois grandes grupos: T. cruzi I e T. cruzi II. Este último por sua vez se divide em cinco grupos menores: T. cruzi IIa, IIb, IIc, IId e IIe. T. cruzi II está mais associado aos casos crônicos a doença de Chagas, especialmente no cone sul da América do Sul. O consenso mais recente divide intraespecificamente em seis grupos gerais:  TcI, TcII, TcIII, TcIV, TcV e TcVI.\n[…]\n«Biblioteca Virtual Carlos Chagas. A doença de Chagas - O causador da doença de Chagas»"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Malária",
      "descricao": "Doença infecciosa causada por parasitas do gênero Plasmodium e transmitida por mosquitos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome malária vem do italiano medieval e reflete uma antiga crença sobre a origem da doença. O que ele significa?",
    "resposta": "Mau ar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Malaria"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Malaria",
        "situacao": "ok",
        "texto": "Malaria is a mosquito-borne infectious disease that is transmitted by the bite of Anopheles mosquitoes. The symptoms of human malaria typically include fever, fatigue, vomiting and headaches. In severe cases, the disease can cause jaundice, seizures, coma, or death. Symptoms usually begin 10 to 15 days after being bitten by an infected Anopheles mosquito. If not properly treated, people may have r\n[…]\nThe word malaria originates from Medieval Italian: mala aria, 'bad air', a part of miasma theory; the disease was formerly called ague, paludism or marsh fever due to its association with swamps and marshland. The word appeared in English at least as early as 1768. The scientific study of malaria is malariology.\n[…]\nThere have been two major global malaria eradication efforts: the first, led by the World Health Organization between 1955 and 1969, and the second, initiated by the United Nations in the 21st century through the Millennium and Sustainable Development Goals. As of 2025, malaria has been eliminated or significantly reduced in many regions of the world, but remains widespread in others.\n[…]\nCerebral malaria is one of the leading causes of neurological disabilities in African children. Studies comparing cognitive functions before and after treatment for severe malarial illness continued to show significantly impaired school performance and cognitive abilities even after recovery. Consequently, severe and cerebral malaria have far-reaching socioeconomic consequences that extend beyond the immediate effects of the disease.\n[…]\nMalaria was the most significant health hazard encountered by U.S. troops in the South Pacific during World War II, where about 500,000 men were infected. According to Joseph Patrick Byrne, \"Sixty thousand American soldiers died of malaria during the African and South Pacific campaigns.\" Malaria was a contributing factor to the U.S. surrender at Bataan in 1942."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mal%C3%A1ria",
        "situacao": "ok",
        "texto": "Malária é uma doença infecciosa transmitida por mosquitos e causada por protozoários parasitários do género Plasmodium. Os sintomas mais comuns são febre, fadiga, vómitos e dores de cabeça. Em casos graves pode causar icterícia, convulsões, coma ou morte. Os sintomas começam-se a manifestar entre 10 e 15 dias após a picada. Quando não é tratada, a doença pode recorrer meses mais tarde. Uma nova in\n[…]\nA presença de doenças hepáticas em pacientes de malária aumenta a probabilidade de complicações ou morte.\n[…]\nO termo malária tem origem no italiano medieval mala aria, ou \"maus ares\"; a doença era anteriormente denominada \"ague\" ou \"febre dos pântanos\" devido à sua associação com os terrenos alagados. A malária era comum em grande parte da Europa e da América do Norte, onde já não é endémica, embora continuem a ser registados casos importados.\n[…]\nO primeiro progresso significativo na investigação científica da malária deu-se em 1880, data em que Charles Louis Alphonse Laveran, um médico francês que trabalhava no hospital militar de Constantina na Argélia, observou pela primeira vez os parasitas no interior dos glóbulos vermelhos de pessoas infectadas. Laveran propôs que este organismo seria a causa da malária, sendo também a primeira vez que um protista foi identificado como causa de uma doença.\n[…]\nA malária não é apenas uma doença associada à pobreza; algumas conclusões sugerem que a própria doença seja uma das causas de pobreza e um entrave significativo ao desenvolvimento económico. Embora as regiões mais afetadas sejam as tropicais, a malária atinge também regiões temperadas com alterações sazonais profundas. A doença tem vindo a ser associada a efeitos nefastos muito significativos na economia das regiões onde está disseminada.\n[…]\nMalária - As indesejáveis visitas nocturnas - uma radionovela da Deutsche Welle sobre a prevenção da doença do projecto Learning by Ear - Aprender de Ouvido",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Gripe",
      "descricao": "Doença respiratória contagiosa causada pelos vírus influenza."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em inglês e em italiano, a gripe se chama influenza, palavra que atribuía a doença à influência de quê?",
    "resposta": "Dos astros",
    "fonte": [
      "https://en.wikipedia.org/wiki/Influenza",
      "https://www.etymonline.com/word/influenza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Influenza",
        "situacao": "ok",
        "texto": "Influenza, commonly known as the flu, is an infectious disease caused by influenza viruses. Symptoms range from mild to severe and often include fever, runny nose, sore throat, muscle pain, headache, coughing, and fatigue. These symptoms begin one to four (typically two) days after exposure to the virus and last for about two to eight days. Diarrhea and vomiting can occur, particularly in children\n[…]\n\"A\" stands for the genus of influenza (A, B, C or D).\n[…]\nThese are the main ways that influenza spreads\n[…]\nThe microbial agent responsible for influenza was incorrectly identified in 1892 by R. F. J. Pfeiffer as the bacteria species Haemophilus influenzae, which retains \"influenza\" in its name. From 1901 to 1903, Italian and Austrian researchers were able to show that avian influenza, then called \"fowl plague\", was caused by a microscopic agent smaller than bacteria by using filters with pores too small for bacteria to pass through.\n[…]\nThe word influenza comes from the Italian word influenza, from medieval Latin influentia, originally meaning 'visitation' or 'influence'. Terms such as influenza di freddo, meaning 'influence of the cold', and influenza di stelle, meaning 'influence of the stars' are attested from the 14th century. The latter referred to the disease's cause, which at the time was ascribed by some to unfavorable astrological conditions.\n[…]\nA notable example of this was the reassortment of a swine, avian, and human influenza virus that caused the 2009 flu pandemic. Spillover events from humans to pigs appear to be more common than from pigs to humans.\n[…]\nBrown J (2018). Influenza: The Hundred Year Hunt to Cure the Deadliest Disease in History. New York: Atria. ISBN 978-1501181245.\n[…]\nSt Mouritz AA (1921). The Flu: A Brief History of Influenza in U.S. America, Europe, Hawaii. Honolulu, Hawaii, U.S. America: Advertiser Publishing Co. Archived from the original on 16 July 2020."
      },
      {
        "url": "https://www.etymonline.com/word/influenza",
        "situacao": "ok",
        "texto": "Influenza - Etymology, Origin & Meaning Advertisement Remove Ads\n[…]\ntype of infectious disease, now known to be caused by a virus, usually occurring as an epidemic, with symptoms similar to a severe cold along with high fever and rapid prostration, 1743, borrowed (during an outbreak of the disease in Europe), from Italian influenza \"influenza, epidemic,\" originally \"visitation, influence (of the stars),\" from Medieval Latin influentia in the astrological sense (see influence ).\n[…]\nUsed in Italian for diseases at least since 1504 (as in influenza di febbre scarlattina \"scarlet fever\") on notion of astral, occult, or atmospheric influence. The 1743 outbreak began in Italy. Often applied since mid-19c. to severe colds. For the sense development, compare Latin sideratio \"blast, blight, palsy,\" from siderari \"to be planet-struck, afflicted as if by an evil star.\"\n[…]\n\"epidemic influenza,\" 1776, probably from French grippe \"influenza,\" originally \"seizure,\" verbal noun from gripper \"to grasp, hook,\" from Frankish or another Germanic source, from Proto-Germanic *gripanan (see grip (v.), gripe (v.)). Supposedly in reference to constriction of th\n[…]\n<a href=\"https://www.etymonline.com/word/influenza\">Etymology of influenza by etymonline</a> Copy\n[…]\nHarper, Douglas. \"Etymology of influenza.\" Online Etymology Dictionary, https://www.etymonline.com/word/influenza. Accessed 30 September, 2026. Copy\n[…]\nD. Harper. \"Etymology of influenza.\" Online Etymology Dictionary. https://www.etymonline.com/word/influenza (accessed September 30, 2026). Copy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gripe",
        "situacao": "ok",
        "texto": "Influenza, comumente conhecida como Gripe, é uma doença infecciosa causada por diversos vírus ARN da família Orthomyxoviridae e que afeta aves e mamíferos. Os sintomas mais comuns são calafrios, febre, rinorreia, dores de garganta, dores musculares, dores de cabeça, tosse, fadiga e sensação geral de desconforto. Em crianças pode ainda provocar diarreia e dores abdominais.\n[…]\nInfluenzavirus A\n[…]\nInfluenzavirus B\n[…]\nInfluenzavirus C\n[…]\nEste género tem apenas uma espécie, o Influenzavirus A. As aves aquáticas selvagens são o hospedeiro natural de uma grande diversidade de vírus de gripe A. Ocasionalmente, estes vírus são transmitidos para outras espécies e podem dar origem a surtos devastadores em aves de criação ou desencadear pandemias de gripe humana. Os vírus do tipo A correspondem aos patógenos mais virulentos entre os três tipos de vírus da gripe e estão na origem das formas mais graves da doença.\n[…]\nEste género tem também apenas uma espécie, o Influenzavirus C, o qual infeta seres humanos, cães e porcos, provocando por vezes formas graves da doença e epidemias locais. No entanto, a gripe C é menos comum do que os outros tipos e geralmente provoca apenas casos moderados em crianças.\n[…]\nO termo influenza, ou \"influência\", tem origem no termo homónimo italiano e faz alusão à causa da doença, já que inicialmente se pensava que a gripe era devida a influências astrológicas. A evolução da medicina levaria mais tarde a uma uma alteração de significado para \"influência do frio\", ou influenza del freddo. O termo \"gripe\" tem origem no francês grippe, usado pela primeira vez em 1694.\n[…]\nA doença pode ter sido levada da Europa para a América durante a colonização do continente, já que em 1493, pouco depois da chegada de Cristóvão Colombo, praticamente toda a população indígena das Antilhas foi dizimada por uma epidemia semelhante à gripe.\n[…]\nMinistério da Saúde de Portugal - Gripe",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Atlas (vértebra)",
      "descricao": "Primeira vértebra cervical, que sustenta o crânio."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A primeira vértebra do pescoço, que sustenta o crânio, tem o nome de qual titã grego condenado a carregar o céu?",
    "resposta": "Atlas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atlas_(anatomy)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atlas_(anatomy)",
        "situacao": "ok",
        "texto": "In anatomy, the atlas (C1) is the most superior (first) cervical vertebra of the spine and is located in the neck.\n[…]\nAncient depictions of Atlas show the globe of the heavens resting at the base of his neck, on C7. Sometime around 1522, anatomists decided to call the first cervical vertebra the atlas. Scholars believe that by switching the designation atlas from the seventh to the first cervical vertebra Renaissance anatomists were commenting that the point of man's burden had shifted from his shoulders to his head—that man's true burden was not a physical load, but rather, his mind.\n[…]\nThe atlanto-occipital joint allows the head to nod up and down on the vertebral column. The dens acts as a pivot that allows the atlas and attached head to rotate on the axis, side to side.\n[…]\nJust below the medial margin of each superior facet is a small tubercle, for the attachment of the transverse atlantal ligament which stretches across the ring of the atlas and divides the vertebral foramen into two unequal parts:\n[…]\nForamen arcuale or a bony bridge above the vertebral artery on the posterior arch of the atlas may be present. This foramen has an overall prevalence of 9.1%. Arch defects refer to the condition where a gap or cleft exists at the anterior arch or posterior arch of the atlas. The prevalence of the posterior arch defect and anterior arch defect was 0.95% and 0.087%, respectively.\n[…]\nThere are 5 types of C1 fractures referred to as the Levine Classification of Atlas Fractures\n[…]\nNetter, Frank. Atlas of Human Anatomy Archived 2017-11-20 at the Wayback Machine, \"High Cervical Spine: C1–C2\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atlas_%28anatomia%29",
        "situacao": "ok",
        "texto": "O atlas (C1) é a primeira vértebra cervical e também a primeira das 32 vértebras da coluna vertebral, contando com o sacro e o cóccix com vertebras fundidas.\n[…]\nO nome atlas refere-se a um titã grego que carregava o mundo/céu/globo nas costas: no caso da vértebra (atlas), o mundo é representado pelo crânio ou a cabeça. É uma vértebra cervical atípica, pois além de não possuir processo espinhoso, não há corpo vertebral. É também a mais larga vértebra cervical e, além disso, possui tubérculos anterior e posterior, o que nenhuma outra vértebra tem.\n[…]\nO movimento de rotação do atlas com o dente é limitado pelos ligamentos alares, que ligam o dente a borda do forame magno. A articulação superior do atlas é com os côndilos occiptais, que ajuda na flexão/extensão.\n[…]\nÉ constituído por duas massas laterais (as apófises articulares, que possuem uma face articular superior que se articula com o côndilo occipital) que possuem um prolongamento lateral (apófises transversas), que se unem entre si através dos arcos anterior e posterior. A face articular inferior das apófises articulares, articula-se com a 2ª vértebra cervical (C2).\n[…]\nAs apófises transversas são mais desenvolvidas no atlas do que em qualquer outra vértebra, possuindo um buraco transversal considerável, que se encontra dividido em dois pelo ligamento transverso. A porção anterior deste buraco esta ocupada pelo dente do áxis, e a porção posterior pela medula espinhal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Glândula tireoide",
      "descricao": "Glândula endócrina localizada na parte da frente do pescoço."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome tireoide vem do grego e quer dizer em forma de quê?",
    "resposta": "Escudo",
    "distratores": [
      "Borboleta",
      "Coroa",
      "Gravata"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Thyroid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thyroid",
        "situacao": "ok",
        "texto": "The thyroid, or thyroid gland, is an endocrine gland in vertebrates. In humans, it is a butterfly-shaped or H-shaped gland located in the neck below the Adam's apple. It consists of two connected lobes. The lower two thirds of the lobes are connected by a thin band of tissue called the isthmus (pl.: isthmi).\n[…]\nIn 1500 polymath Leonardo da Vinci provided the first illustration of the thyroid. In 1543 anatomist Andreas Vesalius gave the first anatomic description and illustration of the gland. In 1656 the thyroid received its modern name, by the anatomist Thomas Wharton. The gland was named thyroid, meaning shield, as its shape resembled the shields commonly used in Ancient Greece. The English name thyroid gland is derived from the medical Latin used by Wharton – glandula thyreoidea.\n[…]\nGlandula means 'gland' in Latin, and thyreoidea can be traced back to the Ancient Greek word θυρεοειδής, meaning 'shield-like/shield-shaped'.\n[…]\nIn larval lampreys, the thyroid originates as an exocrine gland, secreting its hormones into the gut, and associated with the larva's filter-feeding apparatus. In the adult lamprey, the gland separates from the gut, and becomes endocrine, but this path of development may reflect the evolutionary origin of the thyroid.\n[…]\nA similar phenomenon happens in the neotenic amphibian salamanders, which, without introducing iodine, do not transform into land-dwelling adults, and live and reproduce in the larval form of aquatic axolotl. Among amphibians, administering a thyroid-blocking agent such as propylthiouracil (PTU) can prevent tadpoles from metamorphosing into frogs; in contrast, administering thyroxine will trigger metamorphosis.\n[…]\nDesiccated thyroid\n[…]\nThyroid disease in pregnancy\n[…]\nEndocrine Web: Thyroid"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tiroide",
        "situacao": "ok",
        "texto": "A tiroide (português europeu) ou tireoide (português brasileiro) AO 1990 (do grego θυρεός thyreos \"escudo\", devido ao seu formato) é uma glândula endócrina dos vertebrados. Em humanos, fica no pescoço e consiste em dois lobos conectados. Os dois terços inferiores dos lobos são conectados por uma fina faixa de tecido chamada istmo da tireoide. A tireóide está localizada na parte frontal do pescoço,\n[…]\nExistem muitas variantes no tamanho e na forma da glândula tireoide e na posição das glândulas paratireoides embutidas.\n[…]\nA glândula tireóide recebeu seu nome moderno em 1600, quando o anatomista Thomas Wharton comparou sua forma à de um escudo grego antigo ou thyos. No entanto, a existência da glândula e das doenças a ela associadas já era conhecida muito antes disso.\n[…]\nEm 1500 o polímata Leonardo da Vinci forneceu a primeira ilustração da tireóide. Em 1543, o anatomista Andreas Vesalius deu a primeira descrição e ilustração anatômica da glândula. Em 1656 a tireoide recebeu seu nome moderno, do anatomista Thomas Wharton. A glândula foi chamada de tireóide, que significa escudo, pois seu formato se assemelhava aos escudos comumente usados ​​na Grécia Antiga. O nome em inglês de glândula tireóide é derivado do latim médico usado por Wharton - glandula thyreoídea.\n[…]\nGlandula significa glândula em latim, e thyreoídea pode ser rastreada até a palavra grega antiga θυρεοειδής, que significa em forma de escudo.\n[…]\nNos tetrápodes, a tireoide sempre se encontra em algum lugar na região do pescoço. Na maioria das espécies de tetrápodes, existem duas glândulas tireoides emparelhadas - ou seja, os lobos direito e esquerdo não estão unidos. No entanto, existe apenas uma única glândula tireóide na maioria dos mamíferos, e a forma encontrada nos humanos é comum a muitas outras espécies.\n[…]\nEndocrine Web: Thyroid",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Hipocampo",
      "descricao": "Estrutura do cérebro ligada à formação de memórias."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Uma região do cérebro essencial para a memória ganhou seu nome no século dezesseis porque lembrava qual animal?",
    "resposta": "Cavalo-marinho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hippocampus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hippocampus",
        "situacao": "ok",
        "texto": "The hippocampus (pl.: hippocampi), also hippocampus proper,  is a major component of the brain of humans and many other vertebrates. In the human brain the hippocampus, the dentate gyrus, and the subiculum are components of the hippocampal formation located in the limbic system.\n[…]\nDue to bilateral symmetry the brain has a hippocampus in each cerebral hemisphere. If damage to the hippocampus occurs in only one hemisphere, leaving the structure intact in the other hemisphere, the brain can retain near-normal memory functioning. Severe damage to the hippocampi in both hemispheres results in profound difficulties in forming new memories (anterograde amnesia) and often also affects memories formed before the damage occurred (retrograde amnesia).\n[…]\nHyperactivity in the hippocampus has consistently been linked to schizophrenia using blood-oxygenation-level–dependent imaging in functional MRI, and in cerebral blood volume studies. The CA1 subfield is mostly indicated to be affected, and hyperactivity almost exclusively found in the anterior hippocampus. Hippocampal hyperactivity has been suggested to be a result of dysfunctional GABAergic inhibition.\n[…]\nNon-mammalian vertebrates lack a brain structure that looks like the mammalian hippocampus, but they have one that is considered homologous to it. The hippocampus is in essence part of the allocortex. Only mammals have a fully developed cortex, but the structure it evolved from, called the pallium, is present in all vertebrates, even the most primitive ones such as the lamprey or hagfish. The pallium is usually divided into three zones: medial, lateral and dorsal.\n[…]\nHippocampus – Cell Centered Database\n[…]\n\"Search Hippocampus on BrainNavigator\". via BrainNavigator. Archived from the original on 2012-03-09."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hipocampo",
        "situacao": "ok",
        "texto": "Hipocampo é uma estrutura localizada nos lobos temporais do cérebro humano, considerada a principal sede da memória e importante componente do sistema límbico. Além disso é relacionado com a navegação espacial.\n[…]\nSeu nome deriva de seu formato curvado apresentado em secções coronais do cérebro, se assemelhando a um cavalo-marinho (Grego: hippos = cavalo, kampos = monstro marinho).\n[…]\nEsta estrutura parece ser muito importante para converter a memória a curto prazo em memória a longo prazo. O hipocampo atua em interação com a amígdala e está mais envolvida no registro e decifração dos padrões perceptuais do que nas reações emocionais.\n[…]\nLesões no hipocampo impedem a pessoa de construir novas memórias e a pessoa tem a sensação de viver num lugar estranho onde tudo o que experimenta simplesmente se dissipa, mesmo que as memórias mais antigas anteriores à lesão permaneçam intactas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Câncer",
      "descricao": "Grupo de doenças marcadas pelo crescimento descontrolado de células."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Hipócrates comparou certos tumores, com veias espalhadas ao redor, a um animal. Que animal deu origem à palavra câncer?",
    "resposta": "Caranguejo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cancer",
      "https://www.etymonline.com/word/cancer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cancer",
        "situacao": "ok",
        "texto": "Cancer is a group of diseases involving uncontrolled cell growth typically resulting in tumors with the potential to invade or spread to other parts of the body. These malignant tumors contrast with benign tumors, which do not spread. Over 100 types of cancers affect humans.\n[…]\nThe progression from normal cells to cells that can form a detectable mass to cancer involves multiple steps known as malignant progression.\n[…]\nThis name comes from the appearance of the cut surface of a solid malignant tumor, with \"the veins stretched on all sides as the animal the crab has its feet, whence it derives its name\". Galen stated that \"cancer of the breast is so called because of the fancied resemblance to a crab given by the lateral prolongations of the tumor and the adjacent distended veins\". Celsus (c. 25 BC – 50 AD) translated karkinos into Latin as cancer, also meaning crab and recommended surgery as treatment.\n[…]\nAcross wild animals, there is still limited data on cancer. Nonetheless, a study published in 2022, explored cancer risk in (non-domesticated) zoo mammals, belonging to 191 species for a total of 110,148 individuals, demonstrated that cancer is a ubiquitous disease of mammals and can emerge anywhere along the mammalian phylogeny. This research also highlighted that cancer risk is not uniformly distributed along mammals.\n[…]\nIn non-humans, a few types of transmissible cancer have also been described, wherein the cancer spreads between animals by transmission of the tumor cells themselves. This phenomenon is seen in dogs with Sticker's sarcoma (also known as canine transmissible venereal tumor), and in Tasmanian devils with devil facial tumour disease (DFTD).\n[…]\nOccupational cancer\n[…]\nMetabolic theory of cancer\n[…]\nWHO fact sheet on cancer\n[…]\nOccupational Cancer, NIOSH."
      },
      {
        "url": "https://www.etymonline.com/word/cancer",
        "situacao": "ok",
        "texto": "Cancer - Etymology, Origin & Meaning Advertisement Remove Ads\n[…]\nOld English cancer \"spreading sore, malignant tumor\" (also canceradl ), from Latin cancer \"a crab,\" later, \"malignant tumor,\" from Greek karkinos , which, like the Modern English word, has three meanings: a crab, a tumor, and the zodiac constellation represented by a crab. This is from PIE *karkro- , a reduplicated form of the root *kar- \"hard.\"\n[…]\nlate Old English cancer \"spreading ulcer, cancerous tumor,\" from Latin cancer \"malignant tumor,\" literally \"crab\" (see cancer , which is its doublet). The form was influenced in Middle English by Old North French cancre \"canker, sore, abscess\" (Old French chancre , Modern French chancre ).\n[…]\nloose (\"open\") star cluster (M44) in Cancer, 1650s, from Latin praesaepe the Roman name for the grouping, literally \"enclosure...\n[…]\nhttps://www.etymonline.com/word/cancer Copy\n[…]\n<a href=\"https://www.etymonline.com/word/cancer\">Etymology of cancer by etymonline</a> Copy\n[…]\nHarper, D. (n.d.). Etymology of cancer. Online Etymology Dictionary. Retrieved September 30, 2026, from https://www.etymonline.com/word/cancer Copy\n[…]\nHarper Douglas, \"Etymology of cancer,\" Online Etymology Dictionary, accessed September 30, 2026, https://www.etymonline.com/word/cancer. Copy\n[…]\nHarper, Douglas. \"Etymology of cancer.\" Online Etymology Dictionary, https://www.etymonline.com/word/cancer. Accessed 30 September, 2026. Copy\n[…]\nD. Harper. \"Etymology of cancer.\" Online Etymology Dictionary. https://www.etymonline.com/word/cancer (accessed September 30, 2026). Copy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A2ncer",
        "situacao": "ok",
        "texto": "Câncer (português brasileiro) ou cancro (português europeu), também conhecido como neoplasia maligna é um grupo de doenças que envolvem o crescimento celular anormal, com potencial para invadir e espalhar-se para outras partes do corpo, além do local original. Há mais de cem diferentes cânceres conhecidos que afetam os seres humanos, mas nem todos os tumores são cancerosos (malignos); tumores beni\n[…]\nTanto a palavra \"Câncer\", em português brasileiro, como \"Cancro\", em português europeu, são oriundas do latim cancer/camcrum, em português:  caranguejo, em referência à proliferação de células cancerosas no organismo (metástase), que se espalham pelo corpo de forma semelhante às patas e pinças do caranguejo que irradiam do seu cefalotórax.\n[…]\nO câncer tem existido por toda a história da humanidade. O mais antigo registro escrito sobre o câncer é de cerca de 1600 a.C., no Papiro de Edwin Smith do Egito Antigo e que descreve o câncer de mama. Hipócrates (cerca de (460–370 a.C.)) descreveu vários tipos de câncer, referindo-se a eles com a palavra grega καρκίνος karkinos (caranguejo ou lagostas).\n[…]\nEste nome vem da aparência da superfície de corte de um tumor maligno sólido, com \"as veias esticadas por todos os lados como o animal caranguejo tem seus pés, de onde deriva seu nome\". Cláudio Galeno afirmou que \"o câncer da mama é assim chamado por causa da semelhança imaginária de um caranguejo, em vista dos prolongamentos laterais do tumor e as veias dilatadas adjacentes.\".\n[…]\nAulo Cornélio Celso (cerca de (25 a.C.–50 d.C.)) traduziu karkinos para o latim cancer, que também significa caranguejo, e recomendou a cirurgia como tratamento. Galeno (século II d.C.) discordava do uso de cirurgia e recomendava purgantes. Estas recomendações em grande parte permaneceram por mil anos.\n[…]\nEsta noção é particularmente forte na cultura do câncer de mama.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Síndrome de Down",
      "descricao": "Condição genética causada por uma cópia extra do cromossomo 21."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Ao contrário do que muitos pensam, a palavra Down no nome dessa síndrome não significa para baixo. A que ela se refere?",
    "resposta": "Ao médico John Langdon Down",
    "fonte": [
      "https://en.wikipedia.org/wiki/Down_syndrome",
      "https://en.wikipedia.org/wiki/John_Langdon_Down"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Down_syndrome",
        "situacao": "ok",
        "texto": "Down syndrome or Down's syndrome, also known as trisomy 21, is a genetic disorder caused by the presence of all or part of a third copy of chromosome 21. It is usually associated with developmental delays, mild to moderate intellectual disability, and characteristic physical features.\n[…]\nDown syndrome is the most common chromosomal abnormality, occurring in about 1 in 1,000 babies born worldwide, and one in 700 in the US. In 2015, there were 5.4 million people with Down syndrome globally, of whom 27,000 died, down from 43,000 deaths in 1990. The syndrome is named after British physician John Langdon Down, who dedicated his medical practice to the cause.\n[…]\nTrisomy 21: 94% of the time Down syndrome is caused by an extra copy of chromosome 21 in all cells,\n[…]\nThe English physician John Langdon Down first described Down syndrome in 1862, recognizing it as a distinct type of mental disability, and again in a more widely published report in 1866. Édouard Séguin described it as separate from cretinism in 1844. By the 20th century, Down syndrome had become the most recognizable form of mental disability.\n[…]\nDue to his perception that children with Down syndrome shared facial similarities with those of Blumenbach's Mongoloid race, John Langdon Down used the term \"Mongoloid\". Down felt that the symptoms of Down syndrome in Europeans provided evidence that all peoples were genetically related:\n[…]\nDown syndrome is named after John Langdon Down. He was the first person to provide an accurate description of the syndrome. His research that was published in 1866 earned him the recognition as the Father of the syndrome. While others had previously recognized components of the condition, John Langdon Down described the syndrome as a distinct, unique medical condition.\n[…]\nList of syndromes"
      },
      {
        "url": "https://en.wikipedia.org/wiki/John_Langdon_Down",
        "situacao": "ok",
        "texto": "John Langdon Haydon Down (18 November 1828 – 7 October 1896) was a British physician best known for his description of the genetic condition Down's syndrome (also known as Down syndrome), which he originally classified in 1862. He is also noted for his work in social medicine and as a pioneer in the care of mentally disabled patients.\n[…]\nDown entered the Royal London Hospital as a student in 1853. One of his teachers was William John Little (of Little's disease). There he had a career distinguished by honours and gold medals and he qualified in 1856 at the Apothecaries Hall and the Royal College of Surgeons. In order to save money while in medical school, he stayed with his sister and her husband. While living with his sister, he met her sister-in-law, Mary Crellin, whom he later married in 1860.\n[…]\nDown's institution was later absorbed into the National Health Service in 1952.\n[…]\nThe building at Normansfield is grade II* listed and is now known as the Langdon Down Centre. It accommodates the headquarters of the Down's Syndrome Association.\n[…]\nThe newest part of his hometown, Torpoint, had a street named in his honour: Langdon Down Way.\n[…]\nDown, J Langdon (1887). On some of the mental affections of childhood and youth. J & A Churchill. OCLC 14771059.\n[…]\nDown, J. Langdon (1990). On Some of the Mental Affections of Childhood and Youth. London : Philadelphia: Mac Keith Press; J.B. Lippincott. ISBN 0-397-48017-2.\n[…]\nDown, J. Langdon (1866): Observations on an Ethnic Classification of Idiots. In: London Hospital Reports, 3: 1866, 259-262\n[…]\nGEW Wolstenholme; R Porter (1967). Mongolism: in commemoration of Dr. John Langdon Haydon Down. J & A Churchill. OCLC 32437930.\n[…]\nOC Ward (1998). John Langdon Down, 1828–1896. Royal Society of Medicine Press. ISBN 1-85315-374-5.\n[…]\nLangdon Down Centre, Normansfield, Middlesex"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADndrome_de_Down",
        "situacao": "ok",
        "texto": "Síndrome de Down, também denominada trissomia 21 ou trissomia do cromossomo 21, é uma alteração genética causada pela presença integral ou parcial de uma terceira cópia do cromossoma 21. A condição está geralmente associada a atraso no desenvolvimento infantil, feições faciais características e deficiência intelectual leve a moderada.\n[…]\nA síndrome de Down é uma das alterações cromossómicas mais comuns nos seres humanos, ocorrendo em cerca de um entre cada 1 000 bebés nascidos em cada ano. Em 2015, cerca de 5,4 milhões de pessoas em todo o mundo tinham síndrome de Down. Em 2013, a condição foi a causa de 27 000 mortes, uma diminuição em relação às 43 000 em 1990. A síndrome é assim denominada em memória de John Langdon Down, o médico britânico que descreveu integralmente essa condição em 1866.\n[…]\nDevido aos avanços da medicina, que hoje trata os problemas médicos associados à síndrome com relativa facilidade, a expectativa de vida das pessoas com síndrome de Down vem aumentando incrivelmente nos últimos anos. Para se ter uma ideia, enquanto em 1947 a expectativa de vida era entre 12 e 15 anos, em 1989, subiu para 50 anos. Atualmente, é cada vez mais comum pessoas com síndrome de Down chegarem aos 60, 70 anos, ou seja, uma expectativa de vida muito parecida com a da população em geral.\n[…]\nEm 1862, o médico britânico John Langdon Down descreve a síndrome; baseado nas teorias racistas da época, ele atribui a causa a uma degeneração, que fazia com que filhos de europeus se parecessem com mongóis, e sugere que a causa da degeneração seria a tuberculose nos pais. Apesar do tom racista de Down, ele recomenda que as pessoas com a síndrome sejam treinadas, e que a resposta ao treinamento é sempre positiva.\n[…]\nSíndrome de Down (trissomia do 21), Manual MSD\n[…]\nPortal Síndrome de Down (Brasil)\n[…]\nFundação Síndrome de Down (Brasil)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Umami",
      "descricao": "Quinto gosto básico, associado ao glutamato, identificado por Kikunae Ikeda em 1908."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O umami, quinto gosto básico ao lado de doce, salgado, azedo e amargo, recebeu um nome japonês que significa o quê?",
    "resposta": "Gosto delicioso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Umami"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Umami",
        "situacao": "ok",
        "texto": "Umami ( from Japanese: うま味, pronounced [ɯmami]), or savoriness, is one of the five basic tastes. It is characteristic of broths and cooked meats.\n[…]\nA loanword from Japanese, umami can be translated as \"pleasant savory taste\". The original word has various orthographies: うまみ, うま味, 旨味, meaning \"deliciousness\". However, in its original sense, it is normally used in its adjectival form umai (うまい, 旨い).\n[…]\nCats have mutations in Tas1r1 and Tas1r3 that cause their receptor to not perceive glutamate and aspartate as umami. However, their receptor responds to nucleotide, and some L-amino acids enhance the response to nucleotides. Cats probably perceive tuna as very umami due to it being rich in inosine monophosphate and L-histine.\n[…]\nUmami is used as a flavor by food manufacturers trying to improve the taste of low sodium offerings. Incorporating umami into foods can reduce the reliance on salt, as umami enhances the perception of saltiness without diminishing overall flavor. Umami may account for the long-term formulation and popularity of ketchup.\n[…]\nThe United States Food and Drug Administration has designated the umami enhancer monosodium glutamate (MSG) as a safe ingredient. While some people identify themselves as sensitive to MSG, a study commissioned by the FDA was only able to identify transient, mild symptoms in a few of the subjects, and only when the MSG was consumed in unrealistically large quantities. There is also no apparent difference in sensitivity to umami when comparing Japanese and Americans.\n[…]\nUmami Information Center, Tokyo, 2016"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Umami",
        "situacao": "ok",
        "texto": "Umâmi (旨味, Umami; umami) é um dos cinco gostos básicos do paladar humano, como o ácido, doce, amargo e salgado, e é uma palavra de origem japonesa (うま味?), que significa \"gosto saboroso e agradável\". Essa escrita, em particular, foi escolhida a partir da palavra umai (うまい) \"delicioso\" e mi (味) \"gosto\". Os caracteres 旨味 são usados com um significado generalizado, quando um alimento é considerado del\n[…]\nO umâmi não tinha sido propriamente identificado até 1908. Quando o cientista e professor da Universidade Imperial de Tóquio, Kikunae Ikeda, verificou que o glutamato era responsável pela palatabilidade do caldo feito com a alga marinha kombu, chamado de kombu dashi, percebeu que havia algo distinto dos sabores básicos conhecidos até então (doce, azedo, amargo e salgado), e o chamou de umami.\n[…]\nSozinho, o umâmi não é necessariamente saboroso, mas torna agradável uma grande variedade de alimentos, especialmente na presença de aromas correspondentes. Como outros gostos básicos, com a exceção da sacarose, o umâmi deve estar dentro de uma faixa de concentração relativamente estreita. O gosto Umami ideal depende também da quantidade de sal.\n[…]\nExistem algumas diferenças entre caldos de diferentes países. O dashi japonês dá uma sensação de gosto umâmi bastante puro,  porque não é baseado em carnes. No dashi, o L-glutamato vem da alga marinha kombu (Laminaria japonica) e o inosinato vem de flocos de bonito seco (katsuobushi) ou sardinhas secas pequenas (niboshi). Em contraste, caldos ocidentais ou chineses têm um gosto mais complexo, por causa de uma mistura maior de aminoácidos provenientes de ossos, carnes e legumes.\n[…]\nTodas as papilas gustativas na língua e outras regiões da boca podem detectar o gosto umâmi independentemente de sua localização.\n[…]\nDescoberta dos receptores Umami\n[…]\nSociety for Research on Umami Taste\n[…]\n\"Doce, Azedo, Salgado, Amargo... e Umami\"  NPR, 1 de novembro de 2007",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Escorbuto",
      "descricao": "Doença causada pela deficiência de vitamina C, comum entre marinheiros em longas viagens."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Marinheiros em longas viagens sofriam de escorbuto, com gengivas sangrando, por falta de qual vitamina?",
    "resposta": "Vitamina C",
    "distratores": [
      "Vitamina A",
      "Vitamina D",
      "Vitamina B12"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Scurvy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scurvy",
        "situacao": "ok",
        "texto": "Scurvy or scorbutus is a deficiency disease (state of malnutrition) resulting from a lack of vitamin C (ascorbic acid). Early symptoms of deficiency include weakness, fatigue, and sore arms and legs. Without treatment, decreased red blood cells, gum disease, changes to hair, and bleeding from the skin may occur. As scurvy worsens, there can be poor wound healing, personality changes, and finally d\n[…]\nIn contact with air, the copper formed compounds that prevented the absorption of vitamins by the intestines.\n[…]\nIn 1915, New Zealand troops in the Gallipoli Campaign had a lack of vitamin C in their diet which caused many of the soldiers to contract scurvy.\n[…]\nMen in the prison study developed the first signs of scurvy about four weeks after starting the vitamin C-free diet, whereas in the British study, six to eight months were required, possibly because the subjects were pre-loaded with a 70 mg/day supplement for six weeks before the scorbutic diet was fed.\n[…]\nMen in both studies, on a diet devoid or nearly devoid of vitamin C, had blood levels of vitamin C too low to be accurately measured when they developed signs of scurvy, and in the Iowa study, at this time were estimated (by labeled vitamin C dilution) to have a body pool of less than 300 mg, with daily turnover of only 2.5 mg/day.\n[…]\nAscorbic acid is also not synthesized by at least two species of caviidae, the capybara and the guinea pig. Certain birds and fish do not synthesize their vitamin C. All species that do not synthesize ascorbate require it in the diet. Deficiency causes scurvy in humans, and somewhat similar symptoms in other animals.\n[…]\nAnimals that can contract scurvy all lack the L-gulonolactone oxidase (GULO) enzyme, which is required in the last step of vitamin C synthesis. The genomes of these species contain GULO as pseudogenes, which serve as insight into the evolutionary past of the species."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escorbuto",
        "situacao": "ok",
        "texto": "Escorbuto é uma doença causada pela falta de vitamina C (ácido ascórbico). Os sintomas iniciais mais comuns são fraqueza, cansaço e pernas e braços doridos. Se a doença não for tratada na fase inicial, podem-se começar a manifestar sintomas como diminuição do número de glóbulos vermelhos, inflamação das gengivas, alterações no cabelo e hemorragias na pele.\n[…]\nCerca de quatro quintos da tripulação de Fernão de Magalhães foi mortalmente vitimada pelo escorbuto. O explorador francês Jacques Cartier quase falhou a sua missão de exploração do rio São Lourenço quando a sua comitiva adoeceu, tendo esta sido salva pelos ensinamentos médicos dos povos ameríndios; estes usavam uma infusão de cedro, rica em vitamina C, para curar o escorbuto. Foi estimado que cerca de um milhão de marinheiros sucumbiram ao escorbuto nos séculos XVII e XVIII.\n[…]\nPorém, hoje sabe-se que este sumo não passaria um xarope com pouco valor nutricional e medicinal, devido à fervura que destrói a vitamina C.\n[…]\nUm dos mais importantes trabalhos sobre o escorbuto foi desenvolvido durante o século XX, especificamente em 1907, por Axel Holst e Theodor Frolich. Durante os anos seguintes, fizeram-se investigações relacionadas com a descoberta do ácido ascórbico, nomeadamente por Albert Szent-Györgyie (1932). A sua possível relação com a doença foi estabelecida, mais tarde, em estudos britânicos e norte-americanos que calcularam as necessidades alimentares dos adultos como um mínimo de 45mg de vitamina C/dia.\n[…]\nNa atualidade o escorbuto tende a ser uma doença praticamente esquecida, casos raros podem ainda acontecer, especialmente em pessoas submetidas a dietas extremas, idosos negligenciados ou crianças com dietas pobres. Embora a vitamina C seja considerada um nutriente essencial, vários aspetos do seu uso continuam incógnitos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Peste negra",
      "descricao": "Pandemia de peste bubônica que devastou a Europa e a Ásia no século catorze."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No século quatorze, a bactéria da peste negra chegava aos humanos principalmente pela picada de qual inseto, parasita dos ratos?",
    "resposta": "Pulga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Death"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Death",
        "situacao": "ok",
        "texto": "The Black Death was a plague pandemic that occurred in Europe from 1346 to 1353. It was one of the most fatal pandemics in human history, leading to the death of up to 50 million people, around 30% to 60% of the European population and approximately 33% of the Middle Eastern population.\n[…]\nThe origin of the Black Death is disputed. Genetic analysis suggests Yersinia pestis bacteria evolved approximately 7,000 years ago, at the beginning of the Neolithic, with flea-mediated strains emerging around 3,800 years ago during the late Bronze Age. The immediate territorial origins of the Black Death and its outbreak remain unclear, with some evidence pointing towards China, Central Asia, West Asia, and Europe.\n[…]\nThe trade disruptions in the Mongol Empire caused by the Black Death was one of the reasons for its collapse.\n[…]\nIt has also been argued that the Black Death prompted a new wave of piety, manifested in the sponsorship of religious works of art.\n[…]\nPrior to the emergence of the Black Death, the continent was considered a feudalistic society, composed of fiefs and city-states frequently managed by the Catholic Church. The pandemic completely restructured both religion and political forces; survivors began to turn to other forms of spirituality and the power dynamics of the fiefs and city-states crumbled.\n[…]\nThe Black Death ravaged much of the Islamic world. Plague could be found in the Islamic world almost every year between 1500 and 1850. Sometimes the outbreaks affected small areas, while other outbreaks affected multiple regions. Plague repeatedly struck the cities of North Africa. Algiers lost 30,000–50,000 inhabitants to it in 1620–1621, and again in 1654–1657, 1665, 1691, and 1740–1742.\n[…]\nBlack Death on In Our Time at the BBC\n[…]\nBlack Death at BBC History"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peste_Negra",
        "situacao": "ok",
        "texto": "Peste Negra (também conhecida como Grande Peste, Peste ou Praga) foi uma das pandemias mais devastadoras registadas na história humana, tendo resultado na morte de 25 a 75 milhões de pessoas na Eurásia, atingindo o pico na Europa entre os anos de 1347 e 1351. Acredita-se que a bactéria Yersinia pestis, que resulta em várias formas de peste (septicémica, pneumónica e, a mais comum, bubónica), tenha\n[…]\nO historiador Francis Aidan Gasquet escreveu sobre a Grande Peste em 1893, sugerindo que \"parecia ser alguma forma da praga oriental ou bubónica comum\". Ele conseguiu adoptar a epidemiologia da peste bubónica pela peste negra para a segunda edição em 1908, implicando ratos e pulgas no processo, e sua interpretação foi amplamente aceite para outras epidemias antigas e medievais, como a peste de Justiniano, que ocorreu no Império Bizantino de 541 a 700 d.C.\n[…]\nOs surtos mais gerais na Inglaterra de Tudor e Stuart parecem ter começado em 1498, 1535, 1543, 1563, 1589, 1603, 1625 e 1636, finalizando com a Grande Peste de Londres em 1665.\n[…]\nDoze surtos de peste na Austrália entre 1900 e 1925 resultaram em mais de mil mortes, principalmente em Sydney. Isso levou ao estabelecimento de um Departamento de Saúde Pública no país, que realizou algumas pesquisas de ponta sobre a transmissão da peste de pulgas de ratos a humanos através do bacilo Yersinia pestis. A primeira epidemia de peste na América do Norte foi a praga de São Francisco de 1900 a 1904, seguida por outro surto em 1907 a 1908.\n[…]\nOs métodos modernos de tratamento incluem inseticidas, uso de antibióticos e uma vacina contra a peste. Teme-se que a bactéria da peste possa desenvolver resistência a medicamentos e novamente voltar a ser uma grande ameaça à saúde. Um caso de uma forma resistente à droga da bactéria foi encontrado em Madagascar em 1995. Um novo surto em Madagascar foi relatado em novembro de 2014.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Febre amarela",
      "descricao": "Doença viral transmitida por mosquitos, que causa icterícia e hemorragias."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No início do século vinte, Oswaldo Cruz combateu a febre amarela no Rio de Janeiro eliminando qual transmissor da doença?",
    "resposta": "Mosquito Aedes aegypti",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yellow_fever",
      "https://pt.wikipedia.org/wiki/Oswaldo_Cruz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yellow_fever",
        "situacao": "ok",
        "texto": "Yellow fever is a viral disease of typically short duration. In most cases, symptoms include fever, chills, loss of appetite, nausea, muscle pains—particularly in the back—and headaches. Symptoms typically improve within five days. In about 15% of people, within a day of improving the fever recurs, abdominal pain occurs and liver damage begins, causing yellow skin. If this occurs, the risk of blee\n[…]\nThe disease is caused by the yellow fever virus and is spread by the bite of an infected mosquito. It infects humans, other primates, and several types of mosquitoes. In cities, it is spread primarily by Aedes aegypti, a type of mosquito found throughout the tropics and subtropics. The virus is an RNA virus of the genus Orthoflavivirus (full scientific name Orthoflavivirus flavi). The disease may be difficult to tell apart from other illnesses, especially in the early stages.\n[…]\nYellow fever virus is mainly transmitted through the bite of the yellow fever mosquito Aedes aegypti, but other mostly Aedes mosquitoes such as the tiger mosquito (Aedes albopictus) can also serve as a vector for this virus. Like other arboviruses, which are transmitted by mosquitoes, Yellow fever virus is taken up by a female mosquito when it ingests the blood of an infected human or another primate.\n[…]\nConcern exists about yellow fever spreading to southeast Asia, where its vector A. aegypti already occurs.\n[…]\nNo cases had been transmitted between humans by the A. aegypti mosquito, which can sustain urban outbreaks that can spread rapidly. In April 2017, the sylvatic outbreak continued moving toward the Brazilian coast, where most people were unvaccinated. By the end of May the outbreak appeared to be declining after more than 3,000 suspected cases, 758 confirmed and 264 deaths confirmed to be yellow fever.\n[…]\nThat the strains of the mosquito in the east are less able to transmit Yellow fever virus."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Oswaldo_Cruz",
        "situacao": "ok",
        "texto": "Oswaldo Gonçalves Cruz (São Luiz do Paraitinga, 5 de agosto de 1872 — Petrópolis, 11 de fevereiro de 1917) foi um médico, bacteriologista, epidemiologista e sanitarista brasileiro. Pioneiro no estudo das moléstias tropicais e da microbiologia no Brasil, foi uma figura central na história da saúde pública nacional, conhecido por seu trabalho no combate a epidemias e na promoção da vacinação. Ele é \n[…]\nO Brasil era assolado por diversas moléstias infecciosas na época. Oswaldo Cruz decidiu empreender campanhas sanitárias para enfrentar as principais doenças que assolavam a capital federal, como febre amarela, peste bubônica e varíola. Para isso, adotou métodos tidos como drásticos por outros médicos, como o isolamento dos doentes, a notificação compulsória dos casos positivos, a captura dos vetores, como mosquitos e ratos, e a desinfecção das moradias em áreas endêmicas.\n[…]\nO combate à febre amarela foi difícil, já que grande parte dos médicos e da população acreditava que a doença se transmitia pelo contato com as roupas, suor, sangue e secreções de doentes. Oswaldo Cruz, porém, acreditava que o transmissor da febre amarela era um mosquito. O método tradicional de combate à febre amarela na época era através da desinfecção, suspensa por Oswaldo Cruz, onde ele implantou no lugar medidas sanitárias com brigadas que percorriam as casas, eliminando focos de insetos.\n[…]\nEm seu retorno ao Brasil, em 1908, Oswaldo foi recebido como um herói nacional e em 1909, o Instituto Soroterápico Federal levaria seu nome, passando a se chamar Instituto Oswaldo Cruz. Em 1910 combateu a malária durante a construção da Estrada de Ferro Madeira-Mamoré (viajou a Rondônia com Belisário Penna), e a febre amarela, a convite do governo do Pará.\n[…]\nCasa de Oswaldo Cruz\n[…]\nStepan, Nancy. Gênese evolução da ciência brasileira: Oswaldo Cruz e a política de investigação científica e médica. Rio de Janeiro, Artenova, 1976."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Revolta da Vacina",
      "descricao": "Revolta popular ocorrida no Rio de Janeiro em novembro de 1904 contra a vacinação obrigatória."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1904, no Rio de Janeiro, a vacinação obrigatória contra qual doença provocou uma revolta popular?",
    "resposta": "Varíola",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Revolta_da_Vacina",
      "https://en.wikipedia.org/wiki/Vaccine_Revolt"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Revolta_da_Vacina",
        "situacao": "ok",
        "texto": "A Revolta da Vacina foi um motim popular ocorrido entre 10 e 16 de novembro de 1904 na cidade do Rio de Janeiro, então capital do Brasil. Seu pretexto imediato foi uma lei que determinava a obrigatoriedade da vacinação contra a varíola, mas também é associada a causas mais profundas, como as reformas urbanas que estavam sendo realizadas pelo prefeito Pereira Passos e as campanhas de saneamento lid\n[…]\nAs condições sanitárias precárias favoreciam a proliferação de doenças como a peste bubônica, varíola e febre amarela, endêmicas no Rio de Janeiro, especialmente nas regiões mais pobres. As epidemias deram ao Rio de Janeiro a fama de cidade empesteada e mortífera, afastando os estrangeiros, receosos de contrair doenças, e o planejamento urbano herdado do período colonial e do império não condizia mais com a condição de capital e centro das atividades econômicas do Brasil daquele período.\n[…]\nNo início da década de 1900, o Rio de Janeiro era um foco endêmico de diversas doenças, entre elas, febre amarela, febre tifoide, impaludismo, varíola, peste bubônica e tuberculose. Destas, a febre amarela e a varíola causavam o maior número de vítimas na capital. As tripulações e passageiros que chegavam ao porto muitas vezes sequer desciam dos navios para não contrair tais doenças.\n[…]\nO combate à varíola, por sua vez, dependia da vacinação. Um projeto de lei que tornava a vacina contra a varíola obrigatória em todo o território nacional foi apresentado no dia 29 junho de 1904 pelo senador alagoano Manuel José Duarte. O projeto foi aprovado com 11 votos contrários, em 20 de julho, dando entrada na Câmara em 18 de agosto e sendo aprovado por larga maioria no final de outubro, tornando-se lei em 31 desse mês. O projeto gerou um debate exaltado entre os legisladores e a população.\n[…]\nMedia relacionados com Revolta da Vacina no Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vaccine_Revolt",
        "situacao": "ok",
        "texto": "The Vaccine Revolt (Portuguese: Revolta da Vacina) was a popular riot that took place between 10 and 16 November 1904 in the city of Rio de Janeiro, then the capital of Brazil. Its immediate pretext was a law that made vaccination against smallpox compulsory, but it is also associated with deeper causes, such as the urban reforms being carried out by mayor Pereira Passos and the sanitation campaig\n[…]\nOn 9 November 1904, the newspaper A Notícia (Rio de Janeiro) published a plan to regulate the application of the mandatory vaccine. The project offered the option of vaccination by a private physician, but the certificate would have to be notarized.\n[…]\nThe authorities lost control of the central region and peripheral neighborhoods. In Saúde and Gamboa, the repressive forces were summarily expelled by the residents. At that moment, the speeches and slogans against the vaccine, as well as the attacks on government action  symbols in the area of public health, were disappearing. The popular revolt began to be directed towards public services and government representatives, especially against repressive forces.\n[…]\nIn addition to the fierce repression launched by the government, the population of Rio de Janeiro would have to endure a smallpox epidemic in 1908, in which almost 6,400 people died.\n[…]\nArretche, M.T.S. (2007). Políticas públicas no Brasil (in Portuguese). Rio de Janeiro: Editora Fiocruz.\n[…]\nBenchimol, Jaime (2003). \"Reforma urbana e Revolta da Vacina na cidade do Rio de Janeiro\". Brasil Republicano (in Portuguese). Vol. 1. Rio de Janeiro: Civilização Brasileira.\n[…]\nNeedel, Jeffrey D. (1987). \"The Revolta Contra Vacina of 1904: The Revolt against \"Modernization\" in Belle-Époque Rio de Janeiro\". The Hispanic American Historical Review. 67 (2): 244–58. doi:10.2307/2515023. JSTOR 2515023. PMID 11619656.\n[…]\nSevcenko, Nicolau (1999). A Revolta da Vacina (in Portuguese). Porto Alegre: Scipione."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Soluço",
      "descricao": "Contração involuntária e repetida que produz um som característico na garganta."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O soluço é causado por contrações repentinas e involuntárias de qual músculo, que fica logo abaixo dos pulmões?",
    "resposta": "Diafragma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hiccup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hiccup",
        "situacao": "ok",
        "texto": "A hiccup (scientific name singultus, from Latin for 'sob, hiccup'; also spelled hiccough) is an involuntary contraction (myoclonic jerk) of the diaphragm that may repeat several times per minute. The hiccup is an involuntary action involving a reflex arc. Once triggered, the reflex causes a contraction of the diaphragm followed by the closure of the glottis, the space between the vocal cords, in a\n[…]\nThe hypothesis suggests that the presence of an air bubble in the stomach stimulates the sensory (afferent) part of the reflex in the through receptors in the stomach, esophagus, and along the underside of the diaphragm. This triggers the active (efferent) part of the hiccup reflex process in the 'hiccup center' part of the brain, sharply contracting the muscles of breathing and relaxing the muscles of the esophagus, then closing the vocal cords to prevent air from entering the lungs.\n[…]\nThis study supports the use of FISST as an option to stop transient hiccups, with more than 90% of participants reporting better results than home remedies. A non-commercial resource describing a similar suction-based technique using a regular straw and water bottle has also been published online. HiccAway stops hiccups by forceful suction that is being generated by diaphragm contraction (phrenic nerve activity), followed by swallowing the water, which requires epiglottis closure.\n[…]\nMr. Hiccup\n[…]\nThumps, a more serious form of hiccups found in equines\n[…]\nVocal hiccup\n[…]\nBBC News: Why we hiccup\n[…]\n\"Wired: The Best Cure for Hiccups: Remind Your Brain You're Not a Fish\". Wired. 25 February 2008. Archived from the original on 22 July 2014.\n[…]\nCymet TC (June 2002). \"Retrospective analysis of hiccups in patients at a community hospital from 1995–2000\". J Natl Med Assoc. 94 (6): 480–3. PMC 2594386. PMID 12078929.\n[…]\nWebMD: Hiccups\n[…]\nDunning, Brian (12 December 2023). \"Skeptoid #914: Stopping Hiccups with Science\". Skeptoid."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Solu%C3%A7o",
        "situacao": "ok",
        "texto": "O soluço, salouco[carece de fontes]? ou singulto (em latim: Singultus) é um fenômeno reflexo que se manifesta por contração espasmódica e involuntária do diafragma, prosseguida de movimento de distensão e de relaxamento, através do qual o pouco ar que a contração forçara a entrar no estômago é expulso com um ruído característico. Costuma ocorrer geralmente após a ingestão de líquido ou sólido.\n[…]\nO soluço benigno do qual geralmente sofremos pode ser resolvido com uma curta interrupção do ciclo respiratório, ou seja, pelo ato de prender por alguns segundos a respiração. Fazendo isto, o diafragma será forçado a voltar a funcionar juntamente com a respiração e o soluço tende a passar, mesmo podendo persistir em alguns casos.\n[…]\nUma das causas mais frequentes para a ocorrência de soluços prende-se com sintomas hipotérmicos por parte do paciente.\n[…]\nAlém da contração do diafragma, um soluço envolve vários músculos da parede corporal, pescoço e garganta. Uma rápida inspiração é seguida, 35 ms depois, pelo fecho da glote, o que produz o som do soluço. Girinos usam tanto guelras como pulmões para respirar e possuem um conjunto de nervos que produzem o mesmo padrão de contrações musculares quando respiram pela guelras. Nessa altura, a entrada de água nos pulmões é impedida pelo fecho da glote, logo após uma inspiração.\n[…]\nOs soluços podem ser causados por muitas disfunções dos sistemas nervosos central e periférico. Soluços geralmente ocorrem após a ingestão de bebidas alcoólicas ou carbonadas (i.e.: gaseificadas). Soluços persistentes ou incessantes podem ser causados por qualquer condição que irrite ou afete os nervos relevantes. Há suspeitas de que a quimioterapia — que utiliza uma grande quantidade de drogas diferentes — cause soluços, apesar de certos estudos não encontrarem relação entre as duas coisas.\n[…]\nPossíveis causas para o soluço\n[…]\nArtigo sobre soluços",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Sangue",
      "descricao": "Fluido que circula pelo corpo humano transportando oxigênio e nutrientes."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A cor vermelha do sangue vem de uma proteína que contém ferro e transporta oxigênio. Qual é essa proteína?",
    "resposta": "Hemoglobina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Blood",
      "https://en.wikipedia.org/wiki/Hemoglobin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blood",
        "situacao": "ok",
        "texto": "Blood is a specialized form of connective tissue  and body fluid in the circulatory system of humans and other vertebrates that delivers necessary substances such as nutrients and oxygen to the cells of the body, and transports metabolic waste products away from those same cells.\n[…]\nBlood is composed of blood cells suspended in plasma. Plasma, which constitutes 55% of blood fluid, is mostly water (92% by volume), and contains proteins, glucose, mineral ions, and hormones. The blood cells are mainly red blood cells (erythrocytes), white blood cells (leukocytes), and (in mammals) platelets (thrombocytes). The most abundant cells are red blood cells. These contain hemoglobin, which facilitates oxygen transport by reversibly binding to it, increasing its solubility.\n[…]\nSupply of oxygen to tissues (bound to hemoglobin, which is carried in red cells)\n[…]\nBlood in carbon monoxide poisoning is bright red, because carbon monoxide causes the formation of carboxyhemoglobin. In cyanide poisoning, the body cannot use oxygen, so the venous blood remains oxygenated, increasing the redness. There are some conditions affecting the heme groups present in hemoglobin that can make the skin appear blue – a symptom called cyanosis. If the heme is oxidized, methemoglobin, which is more brownish and cannot transport oxygen, is formed.\n[…]\nSubstances other than oxygen can bind to hemoglobin; in some cases, this can cause irreversible damage to the body. Carbon monoxide, for example, is extremely dangerous when carried to the blood via the lungs by inhalation, because carbon monoxide irreversibly binds to hemoglobin to form carboxyhemoglobin, so that less hemoglobin is free to bind oxygen, and fewer oxygen molecules can be transported throughout the blood. This can cause suffocation."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hemoglobin",
        "situacao": "ok",
        "texto": "Hemoglobin (haemoglobin, Hb or Hgb) is a protein containing iron that facilitates the transportation of oxygen in red blood cells. Almost all vertebrates contain hemoglobin, with the sole exception of the fish family Channichthyidae. Hemoglobin in the blood carries oxygen from the respiratory organs (lungs or gills) to the other tissues of the body, where it releases the oxygen to enable aerobic r\n[…]\nHemoglobin also transports other gases. It carries off some of the body's respiratory carbon dioxide (about 20–25% of the total) as carbaminohemoglobin, in which CO2 binds to the heme protein. The molecule also carries the important regulatory molecule nitric oxide bound to a thiol group in the globin protein, releasing it at the same time as oxygen.\n[…]\nWhen red blood cells reach the end of their life due to aging or defects, they are removed from the circulation by the phagocytic activity of macrophages in the spleen or the liver or hemolyze within the circulation. Free hemoglobin is then cleared from the circulation via the hemoglobin transporter CD163, which is exclusively expressed on monocytes or macrophages. Within these cells the hemoglobin molecule is broken up, and the iron gets recycled.\n[…]\nThe other major final product of heme degradation is bilirubin. Increased levels of this chemical are detected in the blood if red blood cells are being destroyed more rapidly than usual. Improperly degraded hemoglobin protein or hemoglobin that has been released from the blood cells too rapidly can clog small blood vessels, especially the delicate blood filtering vessels of the kidneys, causing kidney damage.\n[…]\nA variety of oxygen-transport and -binding proteins exist in organisms throughout the animal and plant kingdoms. Organisms including bacteria, protozoans, and fungi all have hemoglobin-like proteins whose known and predicted roles include the reversible binding of gaseous ligands."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sangue",
        "situacao": "ok",
        "texto": "O sangue é um fluido corporal que percorre o sistema circulatório em animais vertebrados; formado por uma porção celular de natureza diversificada - pelos \"elementos figurados\" do sangue - que circula em suspensão em meio fluido, o plasma.\n[…]\nOs glóbulos vermelhos contêm a proteína hemoglobina, que contém ferro, e à qual se liga (reversivelmente) o oxigénio transportado pelo sangue, o que aumenta a capacidade do sangue para dissolver o oxigénio. Por outro lado, o dióxido de carbono é transportado extracelularmente, sendo dissolvido principalmente no plasma sob a forma de ião bicarbonato.\n[…]\nO sangue dos vertebrados é vermelho vivo quando a sua hemoglobina é oxigenada e vermelho escuro quando é desoxigenada. Alguns animais invertebrados possuem outras proteínas respiratórias para além da hemoglobina, que transportam o oxigénio e dão uma cor diferente ao sangue. Os insetos e alguns moluscos possuem um fluido chamado hemolinfa em vez de sangue; a hemolinfa não está contida num sistema circulatório fechado. Na maioria dos insetos, este \"sangue\" não transporta oxigénio.\n[…]\nEnquanto os vertebrados possuem sangue rico em hemoglobina,  proteína rica em ferro, elemento responsável pela cor vermelha, alguns invertebrados como crustáceos, moluscos e aracnídeos possuem hemocianina, a qual é rica em cobre. Esta proteína, quando oxigenada, adquire tonalidades azuladas ou esverdeadas.\n[…]\nA presença de hemocianina em alguns animais e hemoglobina em outros é resultado da evolução e adaptação a diferentes ambientes. Em ambientes com baixa temperatura, elevada pressão e redução nos níveis de oxigênio dissolvido, como o fundo do mar, a hemocianina é mais eficiente no transporte de oxigênio do que a hemoglobina.\n[…]\nSangue e células sanguíneas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Doença de Chagas",
      "descricao": "Doença parasitária causada pelo Trypanosoma cruzi, descrita por Carlos Chagas em 1909."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A doença de Chagas é transmitida por um inseto que costuma picar o rosto de quem está dormindo. Como ele é chamado no Brasil?",
    "resposta": "Barbeiro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Doen%C3%A7a_de_Chagas",
      "https://en.wikipedia.org/wiki/Chagas_disease"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Doen%C3%A7a_de_Chagas",
        "situacao": "ok",
        "texto": "Doença de Chagas ou Tripanossomíase americana é uma doença tropical parasitária causada pelo protozoário Trypanosoma cruzi e transmitida principalmente por insetos da subfamília Triatominae. Os sintomas mudam ao longo do curso da infecção. Na fase inicial, eles podem não estar presentes ou podem ser: febre, gânglios linfáticos aumentados, dor de cabeça e inchaço no local da mordida. Após 8-12 sema\n[…]\nT. cruzi é transmitido para humanos e outros mamíferos principalmente pela via vetorial, geralmente através do contagio com as fezes de insetos hematófagos da subfamília Triatominae, popularmente denominados de \"barbeiros\" (p. ex.: Triatoma infestans). A doença pode também ser transmitida através de transfusão de sangue, transplante de órgãos, ingestão de alimentos contaminados com o parasita e da mãe para o feto.\n[…]\nA fase aguda ocorre durante as primeiras semanas ou meses desde a infecção. Geralmente, ela não é notada por ser assintomática ou por exibir apenas sintomas moderados que não são únicos da doença de Chagas. Os sintomas podem incluir febre, fadiga, dor no corpo, dor de cabeça, exantema, perda de apetite, diarreia e vômitos. Os sinais no exame físico podem incluir aumento moderado do fígado, do baço e de linfonodos, e inchaço no local da picada do barbeiro (o chagoma).\n[…]\nO marcador mais conhecido da fase aguda da doença de Chagas é chamado sinal de Romaña. O sinal é caracterizado pelo edema das pálpebras do mesmo lado do rosto em que se localiza a ferida produzida pela picada do barbeiro, onde as fezes foram depositadas pelo inseto ou mesmo quando acidentalmente esfregadas para dentro do olho.\n[…]\nA doença de Chagas crônica permanece um importante problema de saúde pública em muitos países da América Latina, apesar das medidas efetivas de higiene e prevenção, como a eliminação dos insetos transmissores.\n[…]\n«UOL: Doença de Chagas é tão antiga nas Américas quanto a presença humana»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chagas_disease",
        "situacao": "ok",
        "texto": "Chagas disease, also known as American trypanosomiasis, is a tropical parasitic disease caused by Trypanosoma cruzi. It is spread mostly by insects in the subfamily Triatominae, known as \"kissing bugs\". The symptoms change throughout the infection. In the early stage, symptoms are typically either not present or mild and may include fever, swollen lymph nodes, headaches, or swelling at the site of\n[…]\nThese insects are known by a number of local names, including vinchuca in Argentina, Bolivia, Chile and Paraguay, barbeiro (the barber) in Brazil, pito in Colombia, chinche in Central America, and chipo in Venezuela. The bugs tend to feed at night, preferring moist surfaces near the eyes or mouth. A triatomine bug can become infected with T. cruzi when it feeds on an infected host. T. cruzi replicates in the insect's intestinal tract and is shed in the bug's feces.\n[…]\nOther modes of transmission have been targeted by Chagas disease prevention programs. Treating T. cruzi-infected mothers during pregnancy reduces the risk of congenital transmission of the infection. To this end, many countries in Latin America have implemented routine screening of pregnant women and infants for T. cruzi infection, and the World Health Organization recommends screening all children born to infected mothers to prevent congenital infection from developing into chronic disease.\n[…]\nWhile the rate of vector-transmitted Chagas disease has declined throughout most of Latin America, the rate of orally transmitted disease has risen, possibly due to increasing urbanization and deforestation bringing people into closer contact with triatomines and altering the distribution of triatomine species. Orally transmitted Chagas disease is of particular concern in Venezuela, where 16 outbreaks have been recorded between 2007 and 2018.\n[…]\nChagas information from the Drugs for Neglected Diseases initiative"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Bócio",
      "descricao": "Aumento de volume da glândula tireoide, visível no pescoço."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A falta de qual elemento químico na alimentação causa o bócio, razão pela qual ele é acrescentado ao sal de cozinha?",
    "resposta": "Iodo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Goitre",
      "https://en.wikipedia.org/wiki/Iodised_salt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Goitre",
        "situacao": "ok",
        "texto": "A goitre (British English, spelled goiter in American English) is a swelling in the neck resulting from an enlarged thyroid gland. A goitre can be associated with a thyroid that is not functioning properly.\n[…]\nParacelsus (1493–1541) was the first person to propose a relationship between goitre and minerals (particularly lead) in drinking water. Iodine was later discovered by Bernard Courtois in 1811 from seaweed ash.\n[…]\nIn the 1920s wearing bottles of iodine around the neck was believed to prevent goitre.\n[…]\nThe coat of arms and crest of Die Kröpfner, of Tyrol, showed a man \"afflicted with a large goitre\", an apparent pun on the German for the word (\"Kropf\").\n[…]\nIn some historical contexts, goitres were so prevalent that they became normalized within the culture. For instance, in certain Alpine regions, large goitres were sometimes considered a sign of beauty. Conversely, in other areas, individuals with goitres faced social stigma, which could lead to marginalisation and discrimination.\n[…]\nGoitres have been discussed in art-historical and medical-historical literature as recurring features in painting and religious portraiture. A review by Accorona et al. described thyroid swelling as a phenomenon represented across multiple artistic periods, while other authors have examined its appearance in Renaissance art more specifically. A review by Joselv Albano and Janelle Lara Mirhan specifically focused on the representation of goitre in the depictions of Susanna and the Elders.\n[…]\nDavid Marine conducted substantial research on the treatment of goitre with iodine.\n[…]\nEndemic goitre\n[…]\nThe dictionary definition of goitre at Wiktionary\n[…]\nMedia related to Goiters at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Iodised_salt",
        "situacao": "ok",
        "texto": "Iodized salt (also spelled iodised salt) is table salt mixed with a minuscule amount of various iodine salts. The ingestion of iodine prevents iodine deficiency. Worldwide, iodine deficiency affects about two billion people and is the leading preventable cause of intellectual and developmental disabilities. Deficiency also causes thyroid gland problems, including endemic goitre.\n[…]\nThe 3rd national survey in 2001 showed that the total goiter rate is 9.8%. In 2007, the 4th national survey was conducted 17 years after iodized salt consumption by Iranian households. In this study, the total goiter rate was 5.7%.\n[…]\nLearning of Hunziker's theory, Bayard conducted experiments with iodized salt containing only tiny amounts of iodine in villages badly affected by goitre. The success of these led, starting in 1922, to the adoption of iodized salt throughout the Swiss cantons.\n[…]\nSubsequent dairy promotion programs increased the population's milk consumption, creating an \"accidental public health triumph\" by increasing the population's iodine consumption and nearly eliminating goitre. However, several factors threaten this triumph: 2005 limits on iodine content of animal feed, organic milk (which contains lower amounts of iodine because of restrictions on mineral additions), and an overall reduction in milk intake.\n[…]\nIn the early 20th century, goiters were especially prevalent in the region around the Great Lakes and the Pacific Northwest. David Murray Cowie, a professor of paediatrics at the University of Michigan, led the United States to adopt the Swiss practice of adding sodium iodide or potassium iodide to table and cooking salt. On May 1, 1924, iodized salt was sold commercially in Michigan. By the fall of 1924, Morton Salt Company began distributing iodized salt nationally."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/B%C3%B3cio",
        "situacao": "ok",
        "texto": "Bócio é um aumento do volume da glândula tireoide geralmente causado pela falta de iodo. A existência de nódulos na tireoide também é considerada bócio.\n[…]\nO bócio também pode estar relacionado à carência nutricional, fazendo a glândula tireoide inchar, agindo como um mecanismo de compensação e formar o bócio carencial. O hipertireoidismo também pode gerar um aumento da glândula tireoide, formando o bócio.\n[…]\nMultinodular: geralmente por bócio multinodular tóxico.\n[…]\nConforme a liberação de tiroxina(T4), o hormônio da tireoide, o bócio pode ser:\n[…]\nAs possíveis causas de bócio incluem:\n[…]\nDeficiência nutricional de iodo, mais comum em locais secos\n[…]\nBócio multinodular tóxico familiar ou esporádico\n[…]\nPode ser causando tanto pelo hipertiroidismo como pelo hipotireoidismo. No hipotireoidismo, a deficiência de iodo no organismo faz com que a secreção de T4 (tiroxina) seja diminuída pela tireoide. A baixa concentração desse hormônio no sangue estimula a adenohipófise a produzir e liberar TSH - hormônio tireoestimulante. Esse hormônio estimula o crescimento celular e uma maior síntese de hormônios tireoidianos por esta glândula.\n[…]\nOs sintomas são muito variáveis dependendo da doença de base. No caso da falta de iodo causa apenas problema estético, com o inchaço no pescoço, mas pode eventualmente causar dificuldade de engolir e respirar.\n[…]\nSal iodado é o método mais usado no mundo para evitar a carência de iodo. Outras medidas envolvem proteger a tireoide contra radiação, tomar suplementos e não fumar.\n[…]\nA levotiroxina e o iodo radioativo são opções no tratamento de bócios pequenos ou medianos. Os de tamanho maior necessitam cirurgia.\n[…]\nBócio difuso tóxico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Daltonismo",
      "descricao": "Deficiência na percepção de cores, em geral hereditária."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Por que o tipo mais comum de daltonismo é muito mais frequente em homens do que em mulheres?",
    "resposta": "Gene no cromossomo X",
    "distratores": [
      "Gene no cromossomo Y",
      "Excesso de testosterona",
      "Retina mais fina"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Color_blindness"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Color_blindness",
        "situacao": "ok",
        "texto": "Color blindness or color vision deficiency (CVD) is the decreased ability to see color, differences in color, or distinguish shades of color. The severity of color blindness ranges from mostly unnoticeable to full absence of color perception.\n[…]\nBy far the most common form of color blindness is congenital red–green color blindness (Daltonism), which includes protanopia/protanomaly and deuteranopia/deuteranomaly. These conditions are mediated by the OPN1LW and OPN1MW genes, respectively, both on the X chromosome. An 'affected' gene is either missing (as in Protanopia and Deuteranopia - Dichromacy) or is a chimeric gene (as in Protanomaly and Deuteranomaly).\n[…]\nCongenital blue–yellow color blindness is a much rarer form of color blindness including tritanopia/tritanomaly. These conditions are mediated by the OPN1SW gene on Chromosome 7 which encodes the S-opsin protein and follows autosomal dominant inheritance. The cause of blue–yellow color blindness is not analogous to the cause of red–green color blindness, i.e. the peak sensitivity of the S-opsin does not shift to longer wavelengths.\n[…]\nDespite much recent improvement in gene therapy for color blindness, there is currently no FDA approved treatment for any form of CVD, and otherwise no cure for CVD currently exists. Management of the condition by using lenses to alleviate symptoms or smartphone apps to aid with daily tasks is possible.\n[…]\nColor blindness affects a large number of individuals, with protans and deutans being the most common types. In individuals with Northern European ancestry, as many as 8 percent of men and 0.4 percent of women experience congenital color deficiency. Interestingly, even Dalton's first paper already arrived upon this 8% number:\n[…]\nMotion blindness"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Daltonismo",
        "situacao": "ok",
        "texto": "Daltonismo, também conhecido como discromatopsia ou discromopsia, é uma perturbação da percepção visual caracterizada pela incapacidade de diferenciar todas ou algumas cores, manifestando-se muitas vezes pela dificuldade em distinguir o verde do vermelho. Esta perturbação tem normalmente origem genética, mas pode também resultar de lesão nos olhos, ou de lesão de origem neurológica.\n[…]\nA causa mais comum do daltonismo é a falha no desenvolvimento de um ou mais dos três conjuntos de cones que reconhecem cores. Uma vez que esse problema está geneticamente ligado ao cromossomo X, ele ocorre com maior frequência entre os homens, que possuem apenas um desses cromossomos. Como as mulheres têm dois cromossomos X, existe a possibilidade da anomalia em um deles ser compensada pelo outro, o que explica a baixa incidência desse distúrbio no sexo feminino.\n[…]\nIndivíduos com problemas na percepção das cores vermelha e verde são o tipo mais comum de daltônicos, seguidos por aqueles com problemas na percepção das cores azul e amarelo e pelos portadores de cegueira das cores. Estima-se que 8% dos homens e 0,5% das mulheres com ascendência na Europa Setentrional integram o primeiro grupo. A capacidade de distinguir cores também diminui na velhice.\n[…]\ntritanomalia, presença de uma mutação do pigmento sensível às frequências maiores (\"cones azuis\"). Forma mais rara, que impossibilita a discriminação de cores na faixa do azul-amarelo. O gene afectado situa-se no cromossoma 7 ao contrário das outras tricromacias anómalas, em que a mutação genética atinge o cromossoma X.\n[…]\nComo o daltonismo é provocado por genes recessivos localizados no cromossomo X (sem alelos no Y), o problema ocorre muito mais frequentemente nos homens que nas mulheres. Estima-se que 8% da população masculina seja portadora do distúrbio, embora apenas 1 % das mulheres sejam atingidas.\n[…]\nTeoria das cores\n[…]\nLista de cores",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Hemofilia na realeza europeia",
      "descricao": "Disseminação da hemofilia entre famílias reais da Europa nos séculos dezenove e vinte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que rainha britânica do século dezenove transmitiu a hemofilia, pelos casamentos de seus descendentes, a várias famílias reais da Europa?",
    "resposta": "Rainha Vitória",
    "fonte": [
      "https://en.wikipedia.org/wiki/Haemophilia_in_European_royalty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Haemophilia_in_European_royalty",
        "situacao": "ok",
        "texto": "Haemophilia figured prominently in the history of European royalty in the 19th and 20th centuries. Queen Victoria and her husband, Prince Albert of the United Kingdom, through two of their five daughters – Princess Alice and Princess Beatrice – passed the mutation to various royal houses across the continent, including the royal families of Spain, Germany and Russia. Victoria's youngest son, Princ\n[…]\nTests on the remains of the Romanov imperial family show that the specific form of haemophilia passed down by Queen Victoria was probably the relatively rare haemophilia B. The presence of haemophilia B within the European royal families was well known, with the condition once popularly termed the 'royal disease.'\n[…]\nAlice's younger son Prince Maurice of Teck died in infancy, so it is not known if he was a carrier of the gene. Her daughter Lady May Abel Smith (1906–1994), Leopold's granddaughter, has living descendants none of whom has been known to have or to transmit haemophilia.\n[…]\nVictoria Eugenie's two daughters, Infantas Beatriz (1909–2002) and Maria Cristina of Spain (1911–1996), both have living descendants none of whom has been known to have or to transmit haemophilia.\n[…]\nNo living member of the present or past reigning dynasties of Europe is known to have symptoms of haemophilia or is believed to carry the gene for it. The last descendant of Victoria known to have the disease was Infante Gonzalo, born in 1914, although hundreds of descendants of Queen Victoria's (including males descended only through females) have been born since 1914.\n[…]\nHowever, because the haemophilia gene usually remains hidden in females who only inherit the gene from one parent, and female descendants of Victoria have left many descendants in royal and noble families, there remains a small chance that the disease could appear again.\n[…]\nFamily tree of Queen Victoria and her descendants"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Síndrome de Down",
      "descricao": "Condição genética causada por uma cópia extra do cromossomo 21."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A síndrome de Down é causada pela presença de uma cópia extra de qual cromossomo?",
    "resposta": "Cromossomo 21",
    "fonte": [
      "https://en.wikipedia.org/wiki/Down_syndrome"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Down_syndrome",
        "situacao": "ok",
        "texto": "Down syndrome or Down's syndrome, also known as trisomy 21, is a genetic disorder caused by the presence of all or part of a third copy of chromosome 21. It is usually associated with developmental delays, mild to moderate intellectual disability, and characteristic physical features.\n[…]\nTrisomy 21: 94% of the time Down syndrome is caused by an extra copy of chromosome 21 in all cells,\n[…]\nMosaic: 2% of cases involve mixtures of cells, only some of which have extra chromosome 21.\n[…]\nThe extra chromosome 21 material may also occur due to a Robertsonian translocation in 2–4% of cases. In this translocation Down syndrome, the long arm of chromosome 21 is attached to another chromosome, often chromosome 14. In a male affected with Down syndrome, it results in a karyotype of 46XY,t(14q21q). This may be a new mutation or previously present in one of the parents.\n[…]\nThe extra genetic material present in Down syndrome results in overexpression of a portion of the 310 genes located on chromosome 21. This overexpression has been estimated at 50%, due to the third copy of the chromosome present. Some research has suggested the Down syndrome critical region is located at bands 21q22.1–q22.3, with this area including genes for the amyloid precursor protein, superoxide dismutase, and likely the ETS2 proto oncogene.\n[…]\nThe dementia that occurs in Down syndrome is due to an excess of amyloid beta peptide produced in the brain and is similar to Alzheimer's disease, which also involves amyloid beta build-up. Amyloid beta is processed from amyloid precursor protein, the gene for which is located on chromosome 21. Senile plaques and neurofibrillary tangles are present in nearly all by 35 years of age, though dementia may not be present.\n[…]\nDown's syndrome by the UK National Health Service"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADndrome_de_Down",
        "situacao": "ok",
        "texto": "Síndrome de Down, também denominada trissomia 21 ou trissomia do cromossomo 21, é uma alteração genética causada pela presença integral ou parcial de uma terceira cópia do cromossoma 21. A condição está geralmente associada a atraso no desenvolvimento infantil, feições faciais características e deficiência intelectual leve a moderada.\n[…]\nA trissomia do cromossomo 21 é a causa genética para a síndrome de Down. Trata-se da causa genética mais comum de deficiência intelectual (formalmente definida por um quociente de inteligência (QI) inferior a 70. O QI de um jovem adulto com síndrome de Down é, em média, de 50, embora isto possa variar significativamente.\n[…]\nDas alterações genéticas que levam a deficiência intelectual, a síndrome de Down é a mais prevalente e mais bem estudada. A síndrome de Down pode ter três alterações genéticas possíveis das quais a trissomia livre do cromossomo 21 é a mais frequente (95% dos casos). A trissomia 21 é a presença de uma terceira cópia do cromossomo 21 nas células do indivíduo. Outras desordens desta síndrome incluem a duplicação do mesmo conjunto de genes, p.e., translações do cromossomo 21.\n[…]\nPor disjunção normal na meiose os gâmetas são produzidos uma cópia extra do braço longo do Cromossoma 21. Esta é a causa de 2 - 3% das síndromes de Down observadas. É também conhecida como \"síndrome de Down familiar\".\n[…]\num zigoto ou embrião com síndrome de Down sofrer uma igual mutação, revertendo assim as células para um estado de euploidia, isto é, correto número de cromossomas, que não possuem trissomia 21.\n[…]\nA literatura médica reporta casos em que uma região do cromossoma 21 sofre um fenómeno de duplicação. Isto levaria a uma quantidade extra de genes deste cromossoma, mas não de todos, podendo assim haver manifestações da Síndrome de Down, indetectável pelo cariótipo.\n[…]\nSíndrome de West",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Pele",
      "descricao": "Órgão que recobre todo o corpo humano e o protege do ambiente."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Pesando alguns quilos num adulto, qual é o maior órgão do corpo humano?",
    "resposta": "Pele",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pele",
      "https://en.wikipedia.org/wiki/Human_skin"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pele",
        "situacao": "ok",
        "texto": "A pele é a camada de tecido externo geralmente macio e flexível que cobre o corpo de um animal vertebrado, com três funções principais: proteção, regulação e sensação.\n[…]\nA pele gravemente danificada pode se curar com a formação de cicatrizes. Às vezes, esse tecido é descolorido e despigmentado. A espessura da pele também varia de um local para outro em um organismo. Nos seres humanos, por exemplo, a pele localizada sob os olhos e ao redor das pálpebras é a mais fina do corpo, com 0,5 mm de espessura, e é uma das primeiras áreas a apresentar sinais de envelhecimento, como \"pés de galinha\" e rugas.\n[…]\nControle da evaporação: A pele fornece uma barreira relativamente seca e semipermeável para reduzir a perda de fluidos.\n[…]\nAbsorção pela pele: oxigênio, nitrogênio e dióxido de carbono podem se difundir na epiderme em pequenas quantidades; alguns animais usam a pele como único órgão respiratório (em humanos, as células que compreendem os 0,25-0,40 mm mais externos da pele são \"quase exclusivamente supridas por oxigênio externo\", embora a \"contribuição para a respiração total seja insignificante\"). Alguns medicamentos são absorvidos pela pele.\n[…]\nA pele é um tecido mole e apresenta os principais comportamentos mecânicos desses tecidos. A característica mais pronunciada é a resposta de tensão e deformação da curva em J, na qual existe uma região de grande deformação e tensão mínima, que corresponde ao endireitamento microestrutural e à reorientação das fibrilas de colágeno. Em alguns casos, a pele intacta é pré-alongada, como nos trajes de mergulho ao redor do corpo do mergulhador, e em outros casos a pele intacta está sob compressão."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Human_skin",
        "situacao": "ok",
        "texto": "The human skin is the outer covering of the body and is the largest organ of the integumentary system. The skin has up to seven layers of ectodermal tissue guarding muscles, bones, ligaments and internal organs. Human skin is similar to most of the other mammals' skin, and it is very similar to pig skin. Though nearly all human skin is covered with hair follicles, it can appear hairless. There are\n[…]\nThe adjective cutaneous literally means \"of the skin\" (from Latin cutis, skin).\n[…]\nThe subcutaneous tissue (also hypodermis and subcutis) is not part of the skin, but lies below the dermis of the cutis. Its purpose is to attach the skin to underlying bone and muscle as well as supplying it with blood vessels and nerves. It consists of loose connective tissue, adipose tissue and elastin. The main cell types are fibroblasts, macrophages and adipocytes (subcutaneous tissue contains 50% of body fat). Fat serves as padding and insulation for the body.\n[…]\nThough most human skin is covered with hair follicles, some parts can be hairless. There are two general types of skin, hairy and glabrous skin (hairless). The adjective cutaneous means \"of the skin\" (from Latin cutis, skin).\n[…]\nSkin performs the following functions:\n[…]\nVitamin A, also known as retinoids, benefits the skin by normalizing keratinization, downregulating sebum production, which contributes to acne, and reversing and treating photodamage, striae, and cellulite.\n[…]\nVitamin E is a membrane antioxidant that protects against oxidative damage caused most commonly in skin by UV rays.\n[…]\nSeveral scientific studies confirmed that changes in baseline nutritional status affect skin condition.\n[…]\nThe Mayo Clinic lists foods they state help the skin: fruits and vegetables, whole grains, dark leafy greens, nuts, and seeds.\n[…]\n\"Skin Conditions\". MedlinePlus. U.S. National Library of Medicine. Retrieved 12 November 2013."
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Fêmur",
      "descricao": "Osso da coxa, que liga o quadril ao joelho."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "O osso da coxa supera todos os outros do corpo em comprimento e força. Como ele se chama?",
    "resposta": "Fêmur",
    "fonte": [
      "https://en.wikipedia.org/wiki/Femur"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Femur",
        "situacao": "ok",
        "texto": "The femur (; pl.: femurs or femora ), or thigh bone is the only bone in the thigh — the region of the lower limb between the hip and the knee. In many four-legged animals, the femur is the upper bone of the hindleg.\n[…]\nThe head of the femur, which articulates with the acetabulum of the pelvic bone, comprises two-thirds of a sphere. It has a small groove, or fovea, connected through the round ligament to the sides of the acetabular notch. The head of the femur is connected to the shaft through the neck or collum. The neck is 4–5 cm. long and the diameter is smallest front to back and compressed at its middle. The collum forms an angle with the shaft in about 130 degrees. This angle is highly variant.\n[…]\nIn the infant, it is about 150 degrees and in old age reduced to 120 degrees on average. An abnormal increase in the angle is known as coxa valga and an abnormal reduction is called coxa vara. Both the head and neck of the femur is vastly embedded in the hip musculature and can not be directly palpated. In skinny people with the thigh laterally rotated, the head of the femur can be felt deep as a resistance profound (deep) for the femoral artery.\n[…]\nIn invertebrate zoology the name femur appears in arthropodology. The usage is not homologous with that of vertebrate anatomy; the term \"femur\" simply has been adopted by analogy and refers, where applicable, to the most proximal of (usually) the two longest jointed segments of the legs of the Arthropoda. The two basal segments preceding the femur are the coxa and trochanter. This convention is not followed in carcinology but it applies in arachnology and entomology.\n[…]\nThe dictionary definition of Femur at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/F%C3%AAmur",
        "situacao": "ok",
        "texto": "O fêmur (português brasileiro) ou fémur (português europeu) é o osso mais longo e mais volumoso do corpo humano, e localiza-se na coxa.\n[…]\nTambém é o osso mais resistente, suportando uma pressão de 1 230 Kg por centímetro quadrado sem se ferir. O fêmur consiste da diáfise, da epífise proximal que se prolonga, através de um pescoço, até uma cabeça (esférica) - que o articula com o osso do quadril ou osso coxal - e da epífise distal que se divide em dois côndilos, que se ligam à tíbia e à patela.\n[…]\nUma pessoa de 1,80 m tem um fêmur de aproximadamente 50 cm. Geralmente, o fêmur direito é ligeiramente menor do que o esquerdo.\n[…]\nO fêmur divide-se basicamente em cabeça do fêmur, colo do fêmur, trocanter maior e trocanter menor, linha áspera e côndilos femorais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Estribo",
      "descricao": "Ossículo do ouvido médio que transmite vibrações à orelha interna."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Dentro do ouvido fica o menor osso do corpo humano, com formato de uma peça de montaria. Qual é o nome dele?",
    "resposta": "Estribo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stapes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stapes",
        "situacao": "ok",
        "texto": "The stapes or stirrup is a bone in the middle ear of humans and other tetrapods which is involved in the conduction of sound vibrations to the inner ear. This bone is connected to the oval window by its annular ligament, which allows the footplate (or base) to transmit sound energy through the oval window into the inner ear. The stapes is the smallest and lightest bone in the human body, and is so\n[…]\nSituated between the incus and the inner ear, the stapes transmits sound vibrations from the incus to the oval window, a membrane-covered opening to the inner ear. The stapes is also stabilized by the stapedius muscle, which is innervated by the facial nerve.\n[…]\nTwo common treatments are stapedectomy, the surgical removal of the stapes and replacement with an artificial prosthesis, and stapedotomy, the creation of a small hole in the base of the stapes followed by the insertion of an artificial prosthesis into that hole. Surgery may be complicated by a persistent stapedial artery, fibrosis-related damage to the base of the bone, or obliterative otosclerosis, resulting in obliteration of the base.\n[…]\nThe stapes is commonly described as having been discovered by the professor Giovanni Filippo Ingrassia in 1546 at the University of Naples,  although this remains the nature of some controversy, as Ingrassia's description was published posthumously in his 1603 anatomical commentary In Galeni librum de ossibus doctissima et expectatissima commentaria. Spanish anatomist Pedro Jimeno is first to have been credited with a published description, in Dialogus de re medica (1549).\n[…]\nThe word stapes means \"stirrup\" in Medieval Latin. Classical Latin lacked an equivalent word, since stirrups did not exist in the ancient world."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Estribo_%28osso%29",
        "situacao": "ok",
        "texto": "Estribo (nome que substituiu o termo estapédio) é o menor osso que faz parte do conjunto de ossos que formam a cadeia auditiva primária, a qual é responsável pela recepção auditiva dos mamíferos.\n[…]\nO estribo é ligado à bigorna pela menor articulação do corpo humano, a articulação incudo-estapedial.\n[…]\nTemos na sequência o estribo, que tem esse nome por parecer-se com um estribo. A seguir vêm a bigorna  e  o martelo, que, em conjunto, recebem as vibrações do tímpano e as encaminha para o cérebro via o nervo auditivo.\n[…]\nEssa área aonde estão localizados os três ossículos é denominada ouvido médio; a área posterior ao trio é a ouvido interno e a anterior ao tímpano é o ouvido externo.\n[…]\nO estribo é o menor e o mais leve osso do corpo humano, medindo apenas 0,25 cm e, uma vez rompido, não é possível sua reconstituição natural, pois cria-se no local um tipo de calosidade que dificulta a audição da pessoa.\n[…]\nDaí que sua perda faz necessária uma delicada operação cirúrgica para recolocar o estribo ou mesmo colocar-se uma prótese à base de policarbonato, por este ser um material neutro para o organismo.\n[…]\nNo ouvido interno localiza-se uma área onde fica uma estrutura em forma de caracol denominada cóclea e, dentro dessa, um líquido.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Glúteo máximo",
      "descricao": "Músculo principal das nádegas, que estende o quadril."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Considerando o volume, qual é o maior músculo do corpo humano?",
    "resposta": "Glúteo máximo",
    "distratores": [
      "Peitoral maior",
      "Deltoide",
      "Grande dorsal"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gluteus_maximus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gluteus_maximus",
        "situacao": "ok",
        "texto": "The gluteus maximus is the main extensor muscle of the hip in humans. It is the largest and outermost of the three gluteal muscles and makes up a large part of the shape and appearance of each side of the hips. It is the single largest muscle in the human body. Its thick fleshy mass, in a quadrilateral shape, forms the prominence of the buttocks. The other gluteal muscles are the medius and minimu\n[…]\nThe gluteus maximus ends in two main areas:\n[…]\nFunctional assessment can be useful in assessing injuries to the gluteus maximus and surrounding muscles.\n[…]\nThe gluteus maximus is larger in size and thicker in humans than in other primates. Specifically, it is approximately 1.6 times larger relative to body mass compared to chimpanzees and comprises about 18.3% of total hip musculature mass versus 11.7% in chimpanzees. Its large size is one of the most characteristic features of the muscular system in humans, connected as it is with the power of maintaining the trunk in the erect posture.\n[…]\nIn other primates, the correlate to the human gluteus maximus consists of the ischiofemoralis, a small muscle that corresponds to the human gluteus maximus and originates from the ilium and the ligaments of the sacroiliac, and the gluteus maximus proprius, a large muscle that extends from the ischial tuberosity to a relatively more distant insertion on the femur. In adapting to bipedal gait, reorganization of the attachment of the muscle as well as the moment arm was required.\n[…]\nThe human gluteus maximus plays multiple important functional roles, particularly in running rather than walking. During running, it helps control trunk flexion, aids in decelerating the swing leg, and contributes to hip extension. During level walking, the muscle shows minimal activity, suggesting its enlargement was not primarily adapted for walking."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%BAsculo_gl%C3%BAteo_m%C3%A1ximo",
        "situacao": "ok",
        "texto": "O músculo glúteo máximo é um músculo da região glútea. O glúteo máximo é um músculo largo, nomeado assim por causa do seu tamanho. Ele tem a sua inserção proximal na crista ilíaca no osso ílio, osso sacro e cóccix e a sua inserção distal na tuberosidade glútea no osso fêmur. Ele também insere junto com o músculo tensor da fáscia lata no trato iliotibial e por tanto tem uma outra inserção distal no\n[…]\nA ação principal do músculo glúteo máximo é extenso da articulação do quadril. Também faz rotação externa além de abdução e adução na articulação do quadril. Ele é um dos músculos no corpo que é classificado como convergente, que significa que ele tem fibras musculares que não são paralelas mas formam um espécie de leque. Músculos convergentes podem ser antagonistas deles mesmos em certos movimentos. No caso do músculo glúteo máximo isto acontece na abdução/adução da articulação do quadril.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Fígado",
      "descricao": "Órgão do abdome que processa nutrientes, produz bile e filtra substâncias do sangue."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Capaz de se regenerar mesmo depois de perder boa parte de si, qual é a maior glândula do corpo humano?",
    "resposta": "Fígado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Liver"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Liver",
        "situacao": "ok",
        "texto": "The liver is a major metabolic organ exclusively found in vertebrates which performs many essential biological functions, such as detoxification of the organism and the synthesis of various proteins and other biochemicals necessary for digestion and growth. In humans, it is located in the right upper quadrant of the abdomen, below the diaphragm and mostly shielded by the lower right rib cage.\n[…]\nIn some other species, such as zebrafish, the liver undergoes true regeneration by restoring both shape and size of the organ. In the liver, large areas of the tissues are formed but for the formation of new cells there must be sufficient amount of material so the circulation of the blood becomes more active.\n[…]\nScientific and medical works about liver regeneration often refer to the Greek Titan Prometheus who was chained to a rock in the Caucasus where, each day, his liver was devoured by an eagle, only to grow back each night. The myth suggests the ancient Greeks may have known about the liver's remarkable capacity for self-repair.\n[…]\nMore recently, adult-to-adult liver transplantation has been done using the donor's right hepatic lobe, which amounts to 60 percent of the liver. Due to the ability of the liver to regenerate, both the donor and recipient end up with normal liver function if all goes well. This procedure is more controversial, as it entails performing a much larger operation on the donor, and indeed there were at least two donor deaths out of the first several hundred cases.\n[…]\nSome cultures regard the liver as the seat of the soul. In Greek mythology, the gods punished Prometheus for revealing fire to humans by chaining him to a rock where a vulture (or an eagle) would peck out his liver, which would regenerate overnight (the liver is the only human internal organ that actually can regenerate itself to a significant extent).\n[…]\nLiver at the Human Protein Atlas\n[…]\nLiver enzymes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/F%C3%ADgado",
        "situacao": "ok",
        "texto": "Fígado (do latim ficatu) é a maior glândula e o maior órgão maciço do corpo humano. Funciona tanto como glândula exócrina, liberando secreções num sistema de canais que se abrem numa superfície externa, como glândula endócrina, uma vez que também libera substâncias no sangue ou nos vasos linfáticos.\n[…]\nNos humanos, o fígado tem um formato que lembra o de um trapézio, com ângulos arredondados, dando-lhe aparência ovalizada. Sua coloração é vermelho-escuro, tendendo ao marrom arroxeado, os tecidos que o compõem são de natureza muito frágil, sua aparência e consistência seguem o padrão de outros animais. Sua localização é na parte mais alta da cavidade abdominal, embaixo do diafragma no hipocôndrio direito.\n[…]\nO fígado tem grande parte da superfície externa revestida pelo peritônio, que forma os ligamentos que o conectam ao abdômen e às vísceras vizinhas. Envolvendo-o, há um invólucro especial, formado pela chamada cápsula de Glisson, esta, reveste todo o órgão, sem interrupção, como uma capa, que na parte mais próxima do hilo envolve a artéria hepática, a veia porta e a via biliar. estes três elementos formam a tríade portal.\n[…]\nO componente básico histológico do fígado é a célula hepática, ou hepatócito, estas são células epiteliais organizadas em placas. A unidade estrutural hepática chama-se lóbulo hepático. Em seres humanos estes lóbulos estão juntos em parte de seu comprimento. Os hepatócitos estão dispostos nos lóbulos hepáticos formando como se fossem pequenos tijolos, e entre eles vasos chamados sinusoides hepáticos, e estes são circundados por uma bainha de fibras reticulares.\n[…]\nSe em caso de acidente grave, e consequente lesão, a pessoa sobreviver, o fígado geralmente demonstrará alto e rápido poder de regeneração.\n[…]\n«Fígado no atlas de anatomia de Henry Gray» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Óvulo",
      "descricao": "Célula reprodutiva feminina."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre todas as células humanas, qual é a maior em volume, a ponto de ser quase visível sem microscópio?",
    "resposta": "Óvulo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/%C3%93vulo",
      "https://en.wikipedia.org/wiki/Egg_cell"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93vulo",
        "situacao": "ok",
        "texto": "O óvulo é a célula reprodutiva feminina, ou gameta, na maioria dos organismos anisogâmicos (organismos que se reproduzem sexualmente com um gameta feminino maior e um masculino menor). O termo é usado quando o gameta feminino não é capaz de se mover (não é móvel). Se o gameta masculino (esperma) for capaz de se movimentar, o tipo de reprodução sexuada também é classificado como oogâmico. Um gameta\n[…]\nQuase todas as plantas terrestres têm gerações diploides e haploides alternadas. Os gametas são produzidos pelo gametófito, que é a geração haploide. O gametófito feminino produz estruturas chamadas arquegônios, e os óvulos se formam dentro deles por meio de mitose. O típico arquegônio de briófita consiste em um pescoço longo com uma base mais larga contendo o óvulo. Após a maturação, o pescoço se abre para permitir que os espermatozóides nadem no arquegônio e fertilizem o óvulo.\n[…]\nO zigoto resultante então dá origem a um embrião, que se transformará em um novo indivíduo diploide (esporófito). Nas plantas com sementes, uma estrutura chamada óvulo contém o gametófito feminino. O gametófito produz uma célula-ovo. Após a fertilização, o óvulo se desenvolve em uma semente contendo o embrião.\n[…]\nNas plantas com flores, o gametófito feminino (às vezes chamado de saco embrionário) foi reduzido a apenas oito células dentro do óvulo. A célula gametófita mais próxima da abertura da micrópila do óvulo se desenvolve na célula-ovo. Após a polinização, um tubo polínico entrega o esperma ao gametófito e um núcleo espermático se funde com o núcleo do óvulo. O zigoto resultante se desenvolve em um embrião dentro do óvulo.\n[…]\nO óvulo, por sua vez, se desenvolve em semente e, em muitos casos, o ovário da planta se desenvolve em fruto para facilitar a dispersão das sementes. Após a germinação, o embrião cresce em mudas."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Egg_cell",
        "situacao": "ok",
        "texto": "The egg cell or ovum (pl.: ova) is the female reproductive cell, or gamete, in most anisogamous organisms (organisms that reproduce sexually with a larger, female gamete and a smaller, male one). The term is used when the female gamete is not capable of movement (non-motile). If the male gamete (sperm) is capable of movement, the type of sexual reproduction is also classified as oogamous.\n[…]\nThe egg cell's cytoplasm and mitochondria are the sole means the egg can reproduce by mitosis and eventually form a blastocyst after fertilization.\n[…]\nIn flowering plants, the female gametophyte (sometimes referred to as the embryo sac) has been reduced to just eight cells inside the ovule. The gametophyte cell closest to the micropyle opening of the ovule develops into the egg cell. Upon pollination, a pollen tube delivers sperm into the gametophyte and one sperm nucleus fuses with the egg nucleus. The resulting zygote develops into an embryo inside the ovule.\n[…]\nIn the moss Physcomitrella patens, the Polycomb protein FIE is expressed in the unfertilised egg cell (Figure, right) as the blue colour after GUS staining reveals. Soon after fertilisation the FIE gene is inactivated (the blue colour is no longer visible, left) in the young embryo.\n[…]\nIn algae, the egg cell is often called oosphere. Drosophila oocytes develop in individual egg chambers that are supported by nurse cells and surrounded by somatic follicle cells. The nurse cells are large polyploid cells that synthesize and transfer RNA, proteins, and organelles to the oocytes. This transfer is followed by the programmed cell death (apoptosis) of the nurse cells. During oogenesis, 15 nurse cells die for every oocyte that is produced.\n[…]\nIn addition to this developmentally regulated cell death, egg cells may also undergo apoptosis in response to starvation and other insults."
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Esmalte dentário",
      "descricao": "Camada externa que reveste a coroa dos dentes."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Mais duro que qualquer osso, qual é o tecido mais resistente produzido pelo corpo humano?",
    "resposta": "Esmalte dos dentes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tooth_enamel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tooth_enamel",
        "situacao": "ok",
        "texto": "Tooth enamel is one of the four major tissues that make up the tooth in humans and many animals, including some species of fish. It makes up the normally visible part of the tooth, covering the crown. The other major tissues are dentin, cementum, and dental pulp. It is a very hard, white to off-white, highly mineralised substance that acts as a barrier to protect the tooth but can become susceptib\n[…]\nFurthermore, normal tooth contact is compensated physiologically by the periodontal ligaments and the arrangement of dental occlusion. The truly destructive forces are the parafunctional movements, as found in bruxism, which can cause irreversible damage to the enamel.\n[…]\nDogs are less likely than humans to have tooth decay due to the high pH of dog saliva, which prevents an acidic environment from forming and the subsequent demineralization of enamel which would occur. If tooth decay does occur (usually from trauma), dogs can receive dental fillings just as humans do. Similar to human teeth, the enamel of dogs is vulnerable to tetracycline staining. Consequently, this risk must be accounted for when tetracycline antibiotic therapy is administered to young dogs.\n[…]\nEnamel hypoplasia may also occur in dogs.\n[…]\nThe mineral distribution in rodent enamel is different from that of monkeys, dogs, pigs, and humans. In horse teeth, the enamel and dentin layers are intertwined with each other, which increases the strength and wear resistance of those teeth.\n[…]\nThe mechanical properties of enamel not only are anisotropic due to the structure of the rods and interrods. They are also varying across the length of enamel from the enamel at the surface of the tooth, the outer enamel, to the junction between the dentin and enamel, DEJ. The elastic modulus increases as the distance between the dentin-enamel junction (DEJ) increases within enamel. The fracture toughness is also anisotropic.\n[…]\nTooth development"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Esmalte_dent%C3%A1rio",
        "situacao": "ok",
        "texto": "O Esmalte dentário é o tecido mais resistente e o mais mineralizado do corpo. Juntamente com a dentina e a polpa dentária, forma os dentes. É o componente dos dentes que é normalmente visto (em situações normais) e é suportado pela dentina. Aproximadamente 97% do esmalte é composto de minerais, o restante é composto de água e materiais orgânicos.\n[…]\nO segundo, chamado de estágio de maturação, completa a mineralização do tecido.\n[…]\nO elevado conteúdo mineral do esmalte faz deste o mais duro dos tecidos do corpo humano, mas também o torna suscetível a um processo de desmineralização, que ocorre muitas vezes como cárie dentária, também conhecidas como cavidades . A desmineralização ocorre por diversas razões, mas a mais importante causa da cárie dentária é a ingestão de açúcares. Dente cavidades são causadas quando ácidos dissolvem esmalte dental:\n[…]\nAlém disso, morfologia dentária dita que o local mais comum para o início de cárie dentária e nas profundezas dos sulcos, poços, e fissuras do esmalte. Isto é esperado porque esses lugares são impossíveis de alcançar com uma escova de dentes e as bactérias conseguem residir lá. Quando ocorre desmineralização do esmalte dos dentes, um dentista pode utilizar um instrumento afiado, tais como um explorador odontológico, e \"sentir um stick\" no local da cavidade.\n[…]\nConseqüentemente, este risco deve ser esclarecido quando a terapia antibiótica da tetraciclina é administrada aos cães novos. A hipoplasia do esmalte pode igualmente ocorrer nos cães. [48] A distribuição mineral no esmalte do roedor é diferente daquela dos macacos, dos cães, dos porcos, e dos seres humanos. Nos dentes do cavalo, as camadas do esmalte e da dentina são entrelaçadas um com o outro, que aumenta a força e diminui a taxa do desgaste daqueles dentes.\n[…]\n«Artigo sobre o esmalte dentário» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Aorta",
      "descricao": "Artéria principal do corpo, que sai do ventrículo esquerdo do coração."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Saindo diretamente do coração e levando sangue para todo o corpo, qual é a maior artéria humana?",
    "resposta": "Aorta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aorta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aorta",
        "situacao": "ok",
        "texto": "The aorta ( ay-OR-tə; pl.: aortas or aortae) is the main and largest artery in the human body, originating from the left ventricle of the heart, branching upwards immediately after, and extending down to the abdomen, where it splits at the aortic bifurcation into two smaller arteries (the common iliac arteries). The aorta distributes oxygenated blood to all parts of the body through the systemic c\n[…]\nWith age, the aorta stiffens such that the pulse wave is propagated faster and reflected waves return to the heart faster before the semilunar valve closes, which raises the blood pressure. The stiffness of the aorta is associated with a number of diseases and pathologies, and noninvasive measures of the pulse wave velocity are an independent indicator of hypertension. Measuring the pulse wave velocity (invasively and non-invasively) is a means of determining arterial stiffness.\n[…]\nMean arterial pressure (MAP) is highest in the aorta, and the MAP decreases across the circulation from aorta to arteries to arterioles to capillaries to veins back to atrium. The difference between aortic and right atrial pressure accounts for blood flow in the circulation. When the left ventricle contracts to force blood into the aorta, the aorta expands.\n[…]\nThis stretching gives the potential energy that will help maintain blood pressure during diastole, as during this time the aorta contracts passively. This Windkessel effect of the great elastic arteries has important biomechanical implications. The elastic recoil helps conserve the energy from the pumping heart and smooth out the pulsatile nature created by the heart.\n[…]\nAortic pressure is highest at the aorta and becomes less pulsatile and lower pressure as blood vessels divide into arteries, arterioles, and capillaries such that flow is slow and smooth for gases and nutrient exchange.\n[…]\nMedia related to Aorta at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aorta",
        "situacao": "ok",
        "texto": "Aorta é a maior e mais importante artéria de todo o sistema circulatório do corpo humano. Dela se derivam todas as outras artérias do organismo, com exceção da artéria pulmonar. A aorta se inicia no coração, na base do ventrículo esquerdo, e termina à altura da quarta vértebra lombar, onde se divide nas artérias ilíacas comuns. Ela leva sangue oxigenado para todas partes do corpo através da circul\n[…]\nA artéria aorta pode ser dividida em 5 partes:\n[…]\nAorta ascendente: É uma pequena porção desta artéria, que se inicia com a raiz da aorta (esta por sua vez comunica-se com o ventrículo esquerdo do coração), e segue até a altura do ângulo esternal, onde se inicia o arco da aorta. São ramos da aorta ascendente as artérias coronárias direita e esquerda.\n[…]\nArco da aorta (ou arco aórtico): É o trecho da aorta no qual seu trajeto muda de ascendente para descendente. Neste trecho. o tronco braquiocefálico, a artéria carótida comum esquerda e a artéria subclávia esquerda se originam.\n[…]\nAorta descendente: A porção terminal da aorta, vai do arco da aorta até seu final.\n[…]\nAorta abdominal: inicia-se no nível da 12ª vértebra torácica e termina à altura da quarta vértebra lombar, quando se divide nas artérias ilíacas comuns direita e esquerda. Durante seu trajeto, possui várias ramificações, que também podem ser divididas em ramos parietais (artérias frênicas inferiores, lombares, ilíacas comuns e sacral mediana) e viscerais (artérias suprarrenais, renais, gonadais e tronco celíaco, artérias mesentéricas superior e inferior).\n[…]\nA aorta é uma artéria bastante elástica. Quando o ventrículo esquerdo se contrai para forçar a saída do sangue em direção à aorta, ela se expande. Essa distensão proporciona energia potencial que irá ajudar a manter a pressão sanguínea durante a diástole, já que durante este tempo a aorta se contrai passivamente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Nervo ciático",
      "descricao": "Nervo que desce da região lombar pela parte de trás de cada perna."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Descendo da base da coluna até os pés, qual é o nervo mais longo e mais grosso do corpo humano?",
    "resposta": "Nervo ciático",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sciatic_nerve"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sciatic_nerve",
        "situacao": "ok",
        "texto": "The sciatic nerve, also called the ischiadic nerve, is a large nerve in humans and other vertebrate animals. It is the largest branch of the sacral plexus and runs alongside the hip joint and down the lower limb. It is the longest and widest single nerve in the human body, going from the top of the leg to the foot on the posterior aspect. The sciatic nerve has no cutaneous branches for the thigh.\n[…]\nIn humans, the sciatic nerve is formed from the L4 to S3 segments of the sacral plexus, a collection of nerve fibres that emerge from the sacral part of the spinal cord. The lumbosacral trunk from the L4 and L5 roots descends between the sacral promontory and ala, and the S1 to S3 roots emerge from the ventral sacral foramina. These nerve roots unite to form a single nerve in front of the piriformis muscle.\n[…]\nThe sciatic nerve also innervates muscles. In particular:\n[…]\nA sciatic nerve injury may also occur from improperly performed injections into the buttock, and may result in sensory loss.\n[…]\nSciatic nerve exploration can be done by endoscopy in a minimally invasive procedure to assess lesions of the nerve. Endoscopic treatment for sciatic nerve entrapment has been investigated in deep gluteal syndrome. Patients were treated with sciatic nerve decompression by resection of fibrovascular scar bands, piriformis tendon release, obturator internus, or quadratus femoris, or by hamstring tendon scarring.\n[…]\nSignals from the sciatic nerve and its branches can be blocked, in order to interrupt the transmission of pain signals from the innervation area, by performing a regional nerve blockade called a sciatic nerve block.\n[…]\nAccording to Jewish law, the sciatic nerve (Hebrew: Gid hanasheh) may not be eaten by Jews to commemorate Jacob's  injury in his struggle with an angel.\n[…]\nTibial nerve\n[…]\nSciatica\n[…]\nSciatic nerve at the Duke University Health System's Orthopedics program\n[…]\nSciatica and the Sciatic Nerve"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nervo_ci%C3%A1tico",
        "situacao": "ok",
        "texto": "O nervo ciático ou nervo isquiático é o principal nervo dos membros inferiores. Ele controla as articulações do quadril, joelho e tornozelo, e também os músculos posteriores da coxa e os músculos da perna. Além disso, o mesmo têm a função de conduzir as sensações das pernas.\n[…]\nO nervo ciático é o mais espesso de todos os nervos do corpo humano – liga o hálux à região lombar –, mas a fama não vem de seu comprimento, e sim da dor causada por ele, a ciatalgia, que atinge cerca de 15% da população e pode causar muito desconforto. Como o ciático é responsável pela inervação dos membros inferiores, a dor pode ocorrer em vários lugares; os mais comuns, no entanto, são a região glútea posterior, o dedão do pé e a face lateral da coxa e da perna.\n[…]\nA dor causada por compressão ou irritação do nervo ciático por causa de um problema nas costas é chamada de ciática. As causas mais comuns de ciática incluem os problemas na região lombar: hérnia de disco/hérnia discal, doença discal degenerativa, estenose espinhal e espondilolistese.\n[…]\nCiática",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Penicilina",
      "descricao": "Primeiro antibiótico amplamente usado, obtido de fungos do gênero Penicillium."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Um bolor que contaminou placas de bactérias esquecidas levou qual cientista escocês, em 1928, à descoberta da penicilina?",
    "resposta": "Alexander Fleming",
    "fonte": [
      "https://en.wikipedia.org/wiki/Penicillin",
      "https://en.wikipedia.org/wiki/Alexander_Fleming"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Penicillin",
        "situacao": "ok",
        "texto": "Penicillins (P, PCN or PEN) are a group of β-lactam antibiotics originally obtained from Penicillium moulds, principally P. chrysogenum and P. rubens. Eight species of Penicillium, in the section Chrysogena, produce penicillins. Most penicillins in clinical use are synthesised by P. chrysogenum using deep tank fermentation and then purified.\n[…]\nPenicillin was discovered in 1928 by the Scottish physician Alexander Fleming as a crude extract of P. rubens. Fleming's student Cecil George Paine was the first to successfully use penicillin to treat eye infection (neonatal conjunctivitis) in 1930. The purified compound (penicillin F) was isolated in 1940 by a research team led by Howard Florey and Ernst Boris Chain at the University of Oxford. Fleming first used the purified penicillin to treat streptococcal meningitis in 1942.\n[…]\nWhen Alexander Fleming discovered the crude penicillin in 1928, one important observation he made was that many bacteria were not affected by penicillin. This phenomenon was realised by Ernst Chain and Edward Abraham while trying to identify the exact mechanism of penicillin. In 1940, they discovered that unsusceptible bacteria like Escherichia coli produced specific enzymes that can break down penicillin molecules, thus making them resistant to the antibiotic.\n[…]\nThe importance of his work has been recognised by the placement of an International Historic Chemical Landmark at the Alexander Fleming Laboratory Museum in London on 19 November 1999.\n[…]\nFleming, Florey and Chain shared the 1945 Nobel Prize in Physiology or Medicine for the development of penicillin.\n[…]\nThe Discovery of Penicillin, A government-produced film about the discovery of Penicillin by Sir Alexander Fleming, and the continuing development of its use as an antibiotic by Howard Florey and Ernst Boris Chain on YouTube."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alexander_Fleming",
        "situacao": "ok",
        "texto": "Sir Alexander Fleming (6 August 1881 – 11 March 1955) was a Scottish physician and microbiologist. He shared the 1945 Nobel Prize in Physiology or Medicine with Howard Florey and Ernst Chain \"for the discovery of penicillin and its curative effect in various infectious diseases\".\n[…]\nThe laboratory in which Fleming discovered and tested penicillin is preserved as the Alexander Fleming Laboratory Museum in St. Mary's Hospital, Paddington. The source of the fungal contaminant was established in 1966 as coming from La Touche's room, which was directly below Fleming's.\n[…]\nThe laboratory at St Mary's Hospital where Fleming discovered penicillin is home to the Fleming Museum, a popular London attraction. His alma mater, St Mary's Hospital Medical School, merged with Imperial College London in 1988. The Sir Alexander Fleming Building on the South Kensington campus was opened in 1998, where his son Robert and his great-granddaughter Claire were presented to the Queen; it is now one of the main preclinical teaching sites of the Imperial College School of Medicine.\n[…]\nThe popular story of Winston Churchill's father paying for Fleming's education after Fleming's father saved young Winston from death is false. According to the biography, Penicillin Man: Alexander Fleming and the Antibiotic Revolution by Kevin Brown, Alexander Fleming, in a letter to his friend and colleague André Gratia, described this as \"A wondrous fable.\" Nor did he save Winston Churchill during World War II.\n[…]\nPenicillin Man: Alexander Fleming and the Antibiotic Revolution, Stroud, Sutton, 2004. Brown, Kevin.\n[…]\nThe Penicillin Man: the Story of Sir Alexander Fleming, Lutterworth Press, 1957, Rowland, John.\n[…]\nAlexander Fleming on Nobelprize.org  including the Nobel Lecture, 11 December 1945 Penicillin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Penicilina",
        "situacao": "ok",
        "texto": "As penicilinas são antibióticos do grupo dos betalactâmicos profusamente utilizados no tratamento de infecções causadas por bactérias sensíveis. A maioria das penicilinas são derivadas do ácido 6-aminopenicilânico, diferenciando-se umas das outras conforme a substituição na cadeia lateral do seu grupo amino.\n[…]\nA benzilpenicilina, ou penicilina G, foi o primeiro antibiótico amplamente utilizado na medicina; a sua descoberta foi atribuída ao médico e bacteriologista escocês Alexander Fleming em 1928, que juntamente com os cientistas Ernst Boris Chain e Howard Walter Florey — que criaram um método para produzir em massa o medicamento — ganhou o Prêmio Nobel de Medicina em 1945. O fármaco está disponível desde 1941, sendo o primeiro antibiótico a ser utilizado com sucesso.\n[…]\nO surgimento dos antibióticos ocorreu no final dos anos 1920, ou seja, a penicilina como conhecemos foi descoberta em 1928 por Alexander Fleming quando saiu de férias e esqueceu algumas placas com culturas de micro-organismos em seu laboratório no Hospital St. Mary em Londres. Quando voltou, reparou que uma das suas culturas de Staphylococcus tinha sido contaminada por um  bolor, e em volta das colônias deste não havia mais bactérias. Então, Fleming e seu colega, Dr.\n[…]\nPenicilinas resistentes às penicilinases;\n[…]\nNão passa de um boato a história de que a família de Alexander Fleming teria salvo a vida de Winston Churchill duas vezes: a primeira vez, quando o menino Winston teria sido salvo de afogamento (por Alexander ou seu pai), o que teria feito com que o pai de Winston, como agradecimento, tivesse pago os estudos do jovem Alexander, e, na segunda vez, quando a penicilina (descoberta por Fleming) foi usada para curar Churchill de pneumonia.\n[…]\nAs penicilinas são eliminadas por secreção tubular nos rins.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Vacina",
      "descricao": "Preparação que estimula o sistema imunológico a proteger contra uma doença."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1796, qual médico inglês testou a primeira vacina, usando material das feridas de uma ordenhadora de vacas?",
    "resposta": "Edward Jenner",
    "fonte": [
      "https://en.wikipedia.org/wiki/Edward_Jenner",
      "https://en.wikipedia.org/wiki/Vaccine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Edward_Jenner",
        "situacao": "ok",
        "texto": "Edward Jenner (17 May 1749 – 26 January 1823) was an English physician and scientist who pioneered the concept of vaccines and created the smallpox vaccine, the world's first vaccine. The terms vaccine and vaccination are derived from Variolae vaccinae (\"pustules of the cow\"), the term devised by Jenner to denote cowpox. He used it in 1798 in the title of his Inquiry into the Variolae vaccinae kno\n[…]\nEdward Jenner was born on 17 May 1749 in Berkeley, Gloucestershire, England, as the eighth of nine children. His father, the Reverend Stephen Jenner, was the vicar of Berkeley, so Jenner received a strong basic education.\n[…]\nJenner married Catherine Kingscote in March 1788 (she died of tuberculosis in 1815). He might have met her while he and other fellows were experimenting with balloons. Jenner's trial balloon descended into Kingscote Park, Gloucestershire, owned by Catherine's father, Anthony Kingscote. They had three children together: Edward Robert (1789–1810), Catherine Fitzhardinge (1794–1833), and Robert Fitzhardinge (1797–1854), who was 11 months old when Edward Jenner inoculated him with his cowpox vaccine.\n[…]\nPhipps was the 17th case described in Jenner's first paper on vaccination.\n[…]\nThe Edward Jenner Institute for Vaccine Research is an infectious disease vaccine research centre, also the Jenner Institute part of the University of Oxford.\n[…]\nA section at Gloucestershire Royal Hospital is known as the Edward Jenner Unit; it is where blood is drawn.\n[…]\nA statue of Jenner was erected at the Tokyo National Museum in 1896 to commemorate the centenary of Jenner's discovery of vaccination.\n[…]\nKoyama Shisei, Japanese vaccinologist (1807–1862) who improved upon the Jennerian smallpox vaccine\n[…]\nWorks by Edward Jenner at Project Gutenberg\n[…]\nWorks by Edward Jenner at LibriVox (public domain audiobooks)\n[…]\nWorks by or about Edward Jenner at the Internet Archive\n[…]\nDr Jenner's House, Museum and Garden, Berkeley"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vaccine",
        "situacao": "ok",
        "texto": "A vaccine is a biological preparation that provides active acquired immunity to a particular infectious or malignant disease. The safety and effectiveness of vaccines has been widely studied and verified. A vaccine typically contains an agent that resembles a disease-causing microorganism and is often made from weakened or killed forms of the microbe, its toxins, or one of its surface proteins.\n[…]\nThe terms vaccine and vaccination are derived from Variolae vaccinae (smallpox of the cow), the term devised by Edward Jenner (who both developed the concept of vaccines and created the first vaccine) to denote cowpox. He used the phrase in 1798 for the long title of his Inquiry into the Variolae vaccinae Known as the Cow Pox, in which he described the protective effect of cowpox against smallpox.\n[…]\nIn 1796, the physician Edward Jenner took pus from the hand of a milkmaid with cowpox, scratched it into the arm of an 8-year-old boy, James Phipps, and six weeks later variolated the boy with smallpox, afterwards observing that he did not catch smallpox. Jenner extended his studies and, in 1798, reported that his vaccine was safe in children and adults, and could be transferred from arm-to-arm, which reduced reliance on uncertain supplies from infected cows.\n[…]\nFollowing on from Jenner's work, the second generation of vaccines was introduced in the 1880s by Louis Pasteur who developed vaccines for chicken cholera and anthrax, and from the late nineteenth century vaccines were considered a matter of national prestige. National vaccination policies were adopted and compulsory vaccination laws were passed. In 1931 Alice Miles Woodruff and Ernest Goodpasture documented that the fowlpox virus could be grown in embryonated chicken egg.\n[…]\nWHO Vaccine Position Papers World Health Organization\n[…]\nThe History of Vaccines, from the College of Physicians of Philadelphia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Edward_Jenner",
        "situacao": "ok",
        "texto": "Edward Jenner FRS (Berkeley, 17 de maio de 1749 – 26 de janeiro de 1823) foi um naturalista e médico franco-inglês pioneiro no conceito de vacinas incluindo a invenção da vacina contra a varíola, em 1796.\n[…]\nOs termos vacina e vacinação são derivados de Variolae vaccinae (varíola das vacas), termo usado por Jenner para descrever a varíola. Ele usou o termo pela primeira vez em 1798, no título de seu trabalho Inquiry into the Variolae vaccinae known as the Cow Pox, no qual descreve o efeito protetor da varíola bovina quando comparada com a varíola humana.\n[…]\nDepois que o menino se recuperou, Jenner injetou-lhe material da varíola humana, no processo de variolização comum da época e nenhuma doença se desenvolveu. O menino foi testado com vários materiais contendo varíola humana vindas de outras pessoas e nunca desenvolveu a doença. O caso de James Phipps foi o 17.º caso descrito no primeiro artigo de Jenner sobre a vacinação.\n[…]\nA banda de Heavy metal Jenner, de Belgrado, capital da Sérvia, foi assim batizada em homenagem a Edward Jenner.\n[…]\nNo episódio “TS-19”, a série de televisão The Walking Dead é mostrado um personagem de nome Edwin Jenner, em homenagem a Edward Jenner.\n[…]\nA casa de Jenner, em Berkeley, Gloucestershire, transformada no Edward Jenner Museum.\n[…]\nO Instituto Edward Jenner Para Pesquisa de Vacinas é um centro de pesquisas de doenças infecciosas, parte da Universidade de Oxford.\n[…]\nUma seção do Gloucestershire Royal Hospital foi batizada como Edward Jenner Unit.\n[…]\nO nome de Edward Jenner é apresentado na sacada da Escola de Higiene e Medicina Tropical de Londres.\n[…]\nObras de Edward Jenner (em inglês) no Projeto Gutenberg\n[…]\nObras de ou sobre Edward Jenner no Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Raio X",
      "descricao": "Radiação eletromagnética de alta energia usada em radiografias."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1895, uma das primeiras radiografias da história mostrou a mão, com aliança, da esposa de qual físico alemão?",
    "resposta": "Wilhelm Röntgen",
    "fonte": [
      "https://en.wikipedia.org/wiki/X-ray",
      "https://en.wikipedia.org/wiki/Wilhelm_R%C3%B6ntgen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/X-ray",
        "situacao": "ok",
        "texto": "An X-ray is a form of high-energy electromagnetic radiation with a wavelength shorter than those of ultraviolet rays and longer than those of gamma rays. Roughly, X-rays have a wavelength ranging from 10 nanometers to 10 picometers, corresponding to frequencies in the range of 30 petahertz to 30 exahertz (3×1016 Hz to 3×1019 Hz) and photon energies in the range of 100 eV to 100 keV, respectively.\n[…]\nX-rays were discovered in 1895 by the German scientist Wilhelm Conrad Röntgen, who named it X-radiation to signify an unknown type of radiation.\n[…]\nAlso in 1890, Röntgen's assistant Ludwig Zehnder noticed a flash of light from a fluorescent screen immediately before the covered tube he was switching on punctured.\n[…]\nOn 8 November 1895, German physics professor Wilhelm Röntgen discovered X-rays while experimenting with Lenard tubes and Crookes tubes and began studying them. He wrote an initial report \"On a new kind of ray: A preliminary communication\" and on 28 December 1895, submitted it to Würzburg's Physical-Medical Society journal. This was the first paper written on X-rays. Röntgen referred to the radiation as \"X\", to indicate that it was an unknown type of radiation.\n[…]\nRöntgen received the inaugural Nobel Prize in Physics for his discovery.\n[…]\nWhile they fall outside of the wavelengths that compose the visible light spectrum, in special circumstances X-rays can be detected by eye. Brandes, in an experiment a short time after Röntgen's landmark 1895 paper, reported after dark adaptation and placing his eye close to an X-ray tube, seeing a faint \"blue-gray\" glow which seemed to originate within the eye itself. Upon hearing this, Röntgen reviewed his record books and found he too had seen the effect.\n[…]\nSamuel JJ (20 October 2013). \"La découverte des rayons X par Röntgen\". Bibnum Education (in French). Röntgen's discovery of X-rays (PDF; English translation)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wilhelm_R%C3%B6ntgen",
        "situacao": "ok",
        "texto": "Wilhelm Conrad Röntgen (27 March 1845 – 10 February 1923) was a German experimental physicist who produced and detected electromagnetic radiation in a wavelength range known as X-rays (known as Röntgen rays in many languages). In 1901, Röntgen became the first recipient of the Nobel Prize in Physics \"in recognition of the extraordinary services he has rendered by the discovery of the remarkable ra\n[…]\nWilhelm Conrad Röntgen was born on 27 March 1845 in Lennep (now part of Remscheid), Prussia, the only child of Charlotte Constanze (née Frowein) and Friedrich Conrad Röntgen, a merchant and cloth manufacturer. In 1848, he moved with his parents to the Netherlands—where his mother's family lived—rendering him stateless.\n[…]\nRöntgen was married to Anna Bertha Ludwig for 47 years until her death in 1919 at the age of 80. In 1866, they met in Zurich at Anna's father's café, Zum Grünen Glas. They became engaged in 1869 and wed in Apeldoorn, Netherlands, on 7 July 1872; the delay was due to Anna being six years Wilhelm's senior and his father disapproving of her age or humble background. Their marriage began with financial difficulties as family support from Röntgen had ceased.\n[…]\nRöntgen Peak in Antarctica is named after Wilhelm Röntgen.\n[…]\nWilhelm Röntgen on Nobelprize.org\n[…]\nAnnotated bibliography for Wilhelm Röntgen from the Alsos Digital Library Archived 3 August 2017 at the Wayback Machine\n[…]\nWilhelm Conrad Röntgen Biography\n[…]\nWorks by or about Wilhelm Röntgen at the Internet Archive\n[…]\nWorks by Wilhelm Conrad Röntgen at LibriVox (public domain audiobooks)\n[…]\nRöntgen Rays: Memoirs by Röntgen, Stokes, and J.J. Thomson (circa 1899)\n[…]\nRöntgen's 1895 article, on line and analyzed on BibNum Archived 9 May 2016 at the Wayback Machine [click 'à télécharger' for English analysis]\n[…]\nWorks by Wilhelm Röntgen at Open Library\n[…]\nNewspaper clippings about Wilhelm Röntgen in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Raios_X",
        "situacao": "ok",
        "texto": "A radiação X (composta por raios X) é uma forma de radiação eletromagnética indiretamente ionizante de natureza semelhante à luz. A maioria dos raios X possuem comprimentos de onda entre 0,01 e 10 nanómetros, correspondendo a frequências na faixa de 30 petahertz a 30 exahertz (3×1016 Hz a 3×1019 Hz) e energias entre 100 eV até 100 keV. Os comprimentos de onda dos raios X são menores do que os raio\n[…]\nOs raios X foram descobertos em 8 de novembro de 1895 pelo físico alemão Wilhelm Conrad Röntgen.\n[…]\nFoi o físico alemão Wilhelm Conrad Röntgen (1845-1923) quem detectou pela primeira vez os raios X, que foram assim chamados devido ao desconhecimento, por parte da comunidade científica da época, a respeito da natureza dessa radiação. A descoberta ocorreu quando Röentgen estudava o fenômeno da luminescência produzida por raios catódicos num tubo de Crookes. Todo o aparato foi envolvido por uma caixa com um filme negro em seu interior e guardado numa câmara escura.\n[…]\nApós exaustivas experiências com objetos inanimados, Röntgen pediu à sua esposa que posicionasse sua mão entre o dispositivo e o papel fotográfico.\n[…]\nO título de descobridor do raios X é dado ao físico alemão Wilhelm Conrad Röntgen (1845-1923) em 1895, apesar de não ter sido o primeiro a observar os efeitos das ondas de raios X, ele recebe esse título pois foi o primeiro a estudar sistematicamente os raios X. Röntgen é quem dá o nome de raios X para essas ondas eletromagnéticas, que significa uma quantidade desconhecida.\n[…]\nA tolerância do organismo humano à exposição aos raios X é de 0,1 röntgen por dia no máximo em toda a superfície corpórea. A radiação de um röntgen produz em\n[…]\nOutros usos de Raios X incluem:\n[…]\nCristalografia de raios X\n[…]\nAstronomia de raios-X\n[…]\nSamuel JJ (20 de outubro de 2013). «La découverte des rayons X par Röntgen». Bibnum Education (em francês)  Röntgen's discovery of X-rays (PDF; English translation)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Doença de Chagas",
      "descricao": "Doença parasitária causada pelo Trypanosoma cruzi, descrita por Carlos Chagas em 1909."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1909, qual médico brasileiro descreveu sozinho uma doença inteira, com seu agente causador, seu inseto transmissor e seus sintomas?",
    "resposta": "Carlos Chagas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Carlos_Chagas",
      "https://en.wikipedia.org/wiki/Chagas_disease"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carlos_Chagas",
        "situacao": "ok",
        "texto": "Carlos Justiniano Ribeiro Chagas (Portuguese: [ˈkaʁluz ʒustʃĩniˈɐ̃nu ʁiˈbejɾu ˈʃaɡɐs]; 9 July 1879 – 8 November 1934), was a Brazilian sanitary physician, scientist, and microbiologist who worked as a clinician and researcher. Best known for the discovery of an eponymous protozoal infection called Chagas disease, also called American trypanosomiasis, he also discovered the causative fungi of the p\n[…]\nOne of his sons, Carlos Chagas Filho (1910–2000), became an eminent and internationally recognized scientist in the field of neurophysiology and president of the Pontifical Academy of Sciences. Another son, Evandro Chagas (1905–1940), was also a physician and researcher in tropical medicine, who died in a plane crash at 35 years of age. His name is honoured by the important biomedical institution Instituto Evandro Chagas, in Belém, state of Pará.\n[…]\nSince 2020, The World Chagas Disease Day is observed by the World Health Organization every year on 14 April, commemorating the day Chagas discovered T. cruzi from Berenice.\n[…]\nIn 1921, 42 scientists were nominated for the award, the top four nominees having received 11, nine, seven, and seven nominations, respectively. A hundred years after the discovery of the disease, speculation still remains regarding the two official nominations of Carlos Chagas for the Nobel Prize.\n[…]\nThe connections of the members of the Nobel Committee with the international scientific community, almost exclusively centered in European and North American scientists, also influenced their choices. The nonrecognition of Carlos Chagas' discoveries by the Nobel Committee appears to be more correctly explained by these factors than by the negative impact of the local opposition.\n[…]\nCarlos Justiniano Ribeiro Chagas. WhoNamedIt.\n[…]\nDr. Carlos Chagas\n[…]\nHistorical aspects of Chagas disease Archived 2005-06-19 at the Wayback Machine. Instituto Oswaldo Cruz."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chagas_disease",
        "situacao": "ok",
        "texto": "Chagas disease, also known as American trypanosomiasis, is a tropical parasitic disease caused by Trypanosoma cruzi. It is spread mostly by insects in the subfamily Triatominae, known as \"kissing bugs\". The symptoms change throughout the infection. In the early stage, symptoms are typically either not present or mild and may include fever, swollen lymph nodes, headaches, or swelling at the site of\n[…]\nThe disease was first described in 1909 by Brazilian physician Carlos Chagas, after whom it is named. Chagas disease is classified as a neglected tropical disease.\n[…]\nThe formal description of Chagas disease was made by Carlos Chagas in 1909 after examining a two-year-old girl with fever, swollen lymph nodes, and an enlarged spleen and liver. Upon examination of her blood, Chagas saw trypanosomes identical to those he had recently identified from the hindgut of triatomine bugs and named Trypanosoma cruzi in honor of his mentor, Brazilian physician Oswaldo Cruz.\n[…]\nHe sent infected triatomine bugs to Cruz in Rio de Janeiro, who showed the bite of the infected triatomine could transmit T. cruzi to marmoset monkeys as well. In just two years, 1908 and 1909, Chagas published descriptions of the disease, the organism that caused it, and the insect vector required for infection. Almost immediately thereafter, at the suggestion of Miguel Couto, then professor of the Faculdade de Medicina do Rio de Janeiro, the disease was widely referred to as \"Chagas disease\".\n[…]\nRegional bodies dedicated to controlling Chagas disease arose through support of the Pan American Health Organization, with the Initiative of the Southern Cone for the Elimination of Chagas Diseases launching in 1991, followed by the Initiative of the Andean countries (1997), Initiative of the Central American countries (1997), and the Initiative of the Amazon countries (2004).\n[…]\nChagas information at the U.S. Centers for Disease Control"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_Chagas",
        "situacao": "ok",
        "texto": "Carlos Ribeiro Justiniano das Chagas (Oliveira, 9 de julho de 1878 – Rio de Janeiro, 8 de novembro de 1934) foi um  cientista, médico sanitarista, infectologista e bacteriologista brasileiro, que trabalhou como clínico, professor e pesquisador. Atuante na saúde pública do Brasil, iniciou sua carreira no combate à malária. Destacou-se ao descobrir o protozoário Trypanosoma cruzi (cujo nome foi uma \n[…]\nMiguel Couto, presidente da comissão, sugeriu que a nova doença se chamasse doença de Chagas, mas o próprio Carlos Chagas preferia chamar a doença como tripanossomíase americana.\n[…]\nA partir de 1915, pesquisas realizadas pelo austríaco Rudolf Kraus na Argentina levantou questões sobre a doença que foram logo levantadas no Brasil, envolvendo até a autoria da descoberta ou a importância social em território nacional, questões que foram decididas em favor do pesquisador nas décadas seguintes ao seu falecimento. Carlos Chagas chegou a rebater as críticas de Rudolf Kraus em conferência em Buenos Aires.\n[…]\nEm 1921, 42 cientistas foram indicados para o prêmio, os quatro primeiros indicados receberam 11, nove, sete e sete indicações, respectivamente. Cem anos após a descoberta da doença, ainda persistem as especulações sobre as duas indicações oficiais de Carlos Chagas ao Prêmio Nobel. O motivo pelo qual o prêmio não foi concedido ao cientista pode ter sido a forte oposição que ele enfrentou no Brasil de alguns médicos e pesquisadores da época.\n[…]\nSCLIAR, Moacyr.Oswaldo Cruz & Carlos Chagas: o nascimento de ciência no Brasil. São Paulo: Odysseus, 2002. ISBN 8588023245.\n[…]\nLEÓN, Luis A., coord. Carlos Chagas (1879-1934) e a tripanossomíase americana. Quito: Edit. Casa de la Cultura Ecuatoriana, 1980.\n[…]\nLEWINSOHN, R. Carlos Chagas (1879-1934): a descoberta do tripanossoma cruzi e da tripanossomíase americana (notas da história da doença de Chagas). 1979.\n[…]\n«Dr. Carlos Chagas»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Soro antiofídico",
      "descricao": "Soro usado para neutralizar o veneno de picadas de cobra."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que cientista brasileiro descobriu que cada tipo de veneno de cobra exige um soro específico para ser neutralizado?",
    "resposta": "Vital Brazil",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vital_Brazil",
      "https://pt.wikipedia.org/wiki/Vital_Brazil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vital_Brazil",
        "situacao": "ok",
        "texto": "Vital Brazil Mineiro da Campanha (April 28, 1865 – May 8, 1950), was a Brazilian physician, biomedical scientist and immunologist, known for the discovery of the polyvalent anti-ophidic serum used to treat bites of venomous snakes of the Crotalus,  Bothrops and Elaps genera. He went on to be also the first to develop anti-scorpion and anti-spider serums.\n[…]\nApplying the same techniques (which involved gradual immunization of horses and sheep by administering small doses of venoms, and then extracting, purifying and freeze-drying the antibody portion from the blood of injected animals), Vital Brazil and his coworkers were able to discover the first sera against two species of scorpions' (1908) and spiders' (1925) venoms.\n[…]\nIn the USA, Vital Brazil's name made the headlines when he used his serum to save the life of a worker in the Bronx Zoo in New York City who was bitten by a rattlesnake.\n[…]\nAccording to Bernardo Houssay, who wrote a well-cited biography of Vital Brazil in 1966, his contributions went further than herpetology:\"Vital Brazil and his collaborators have studied several actions of the venoms, (such as) coagulant, anticoagulant, hemolytic, agglutinant, cytotoxic, proteolytic, etc.\n[…]\n(...) The (animal) poisons contain numerous enzymes which have been isolated and studied with interest in all parts since they explain many of the symptoms and constitute interesting biochemical reagents, Vital Brazil studied also the ophiophagous serpents, such as the mussurana, the ophiophagous mammals, such as the skunk-like Conepatus chilensis and others, the ophiophagous birds and certain spiders.\n[…]\nVital Brazil is commemorated in the scientific names of four species of South American snakes:\n[…]\nChironius brazili Hamdan & Fernandes, 2015\n[…]\nScience and Technology in Brazil\n[…]\nInstituto Vital Brazil Website.\n[…]\nBiblioteca Virtual Vital Brazil (In Portuguese)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vital_Brazil",
        "situacao": "ok",
        "texto": "Vital Brazil Mineiro da Campanha (Campanha, 28 de abril de 1865 – Rio de Janeiro, 8 de maio de 1950) foi um médico cientista, filantropo, imunologista e pesquisador biomédico brasileiro de renome internacional.\n[…]\nVital Brazil tornar-se-ia mundialmente conhecido pela descoberta da especificidade do soro antiofídico, do soro contra picadas de aranha, do soro antitetânico e antidiftérico e do tratamento para picada de escorpião.\n[…]\nA descoberta de Vital Brazil sobre a especificidade dos soros antipeçonhentos estabeleceu um novo conceito na imunologia, e seu trabalho sobre a dosagem dos soros antiofídicos gerou tecnologia inédita. A criação dos soros antipeçonhentos específicos e o antiofídico polivalente ofereceu à Medicina, pela primeira vez, um produto realmente eficaz no tratamento do acidente ofídico que, sem substituto, permanece salvando centenas de vidas nos últimos cem anos.\n[…]\nA Casa da Moeda do Brasil expediu uma cédula no valor de Cr$ 10 000,00 (dez mil cruzeiros) cujo anverso era a efígie do cientista Vital Brazil, tendo a esquerda, gravura que representa cena clássica de extração do veneno, tarefa básica para a produção de soros, e o reverso um painel calcográfico mostrando um antigo serpentário, com destaque para a cena de cobra muçurana devorando uma jararaca;\n[…]\nLivro Escolar - Lançado pela Duna Dueto Editora (www.dunadueto.com.br), o livro Vital Brazil, de Nereide Schilaro Santa Rosa, é a primeira biografia para crianças sobre um cientista brasileiro;\n[…]\nO nome científico da aranha Caranguejeira, Vitalius sorocabae, foi criado como uma homenagem a Vital Brazil\n[…]\nBrazil, Lael Vital \"Vital Brazil Mineiro da Campanha – uma genealogia brasileira\".\n[…]\nVital Brazil\n[…]\nMuseu Vital Brazil, Campanha MG"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "DNA",
      "descricao": "Molécula que carrega as informações genéticas dos seres vivos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1953, com base em imagens obtidas por Rosalind Franklin, que dupla de cientistas propôs a estrutura em dupla hélice do DNA?",
    "resposta": "James Watson e Francis Crick",
    "fonte": [
      "https://en.wikipedia.org/wiki/Molecular_Structure_of_Nucleic_Acids",
      "https://en.wikipedia.org/wiki/DNA"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Molecular_Structure_of_Nucleic_Acids",
        "situacao": "ok",
        "texto": "\"Molecular Structure of Nucleic Acids: A Structure for Deoxyribose Nucleic Acid\" was the first article published to describe the discovery of the double helix structure of DNA, using X-ray diffraction and the mathematics of a helix transform. It was published by Francis Crick and James D. Watson in the scientific journal Nature on pages 737–738 of its 171st volume (dated 25 April 1953).\n[…]\nHowever the discovery of the DNA double helix also used a considerable amount of material from the unpublished work of Rosalind Franklin, A.R. Stokes, Maurice Wilkins, and H.R. Wilson at King's College London. Key data from Wilkins, Stokes, and Wilson, and, separately, by Franklin and Gosling, were published in two separate additional articles in the same issue of Nature with the article by Watson and Crick.\n[…]\nWatson and Crick also worked in the MRC-supported Cavendish Laboratory in Cambridge whereas Wilkins and Franklin were in the MRC-supported laboratory at King's in London. Such MRC reports were not usually widely circulated, but Crick read a copy of Franklin's research summary in early 1953.\n[…]\nCrick and Watson then sought permission from Cavendish Laboratory head William Lawrence Bragg, to publish their double-helix molecular model of DNA based on data from Franklin and Wilkins.\n[…]\nFranklin, on the other hand, rejected the first molecular model building approach proposed by Crick and Watson: the first DNA model, which in 1952 Watson presented to her and to Wilkins in London, had an obviously incorrect structure with hydrated charged groups on the inside of the model, rather than on the outside. Watson explicitly admitted this in his book The Double Helix.\n[…]\nMiles from Tomorrowland, a TV series (2015–2018) with twin admirals named Watson and Crick\n[…]\nNational Library of Medicine's PDF copy in the Francis Crick Documents Collection."
      },
      {
        "url": "https://en.wikipedia.org/wiki/DNA",
        "situacao": "ok",
        "texto": "Deoxyribonucleic acid (; DNA) is a polymer composed of two polynucleotide chains that coil around each other to form a double helix. The polymer carries genetic instructions for the development, functioning, growth and reproduction of all known organisms and many viruses. DNA and ribonucleic acid (RNA) are nucleic acids.\n[…]\nBase J\n[…]\nOne proposal is that antisense RNAs are involved in regulating gene expression through RNA-RNA base pairing.\n[…]\nIn the same journal, James Watson and Francis Crick presented their molecular modeling analysis of the DNA X-ray diffraction patterns to suggest that the structure was a double helix.\n[…]\nLate in 1951, Francis Crick started working with James Watson at the Cavendish Laboratory within the University of Cambridge. DNA's role in heredity was confirmed in 1952 when Alfred Hershey and Martha Chase in the Hershey–Chase experiment showed that DNA is the genetic material of the enterobacteria phage T2.\n[…]\nBefore then, Linus Pauling, and Watson and Crick, had erroneous models with the chains inside and the bases pointing outwards. Franklin's identification of the space group for DNA crystals proved her correct. In February 1953, Linus Pauling and Robert Corey proposed a model for nucleic acids containing three intertwined chains, with the phosphates near the axis, and the bases on the outside.\n[…]\nIn April 2023, scientists, based on new evidence, concluded that Rosalind Franklin was a contributor and \"equal player\" in the discovery process of DNA, rather than otherwise, as may have been presented subsequently after the time of the discovery. In 1962, after Franklin's death, Watson, Crick, and Wilkins jointly received the Nobel Prize in Physiology or Medicine. Nobel Prizes are awarded only to living recipients. A debate continues about who should receive credit for the discovery."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Sistema ABO",
      "descricao": "Classificação dos grupos sanguíneos humanos em A, B, AB e O."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1901, que médico austríaco descobriu os grupos sanguíneos A, B e O, abrindo caminho para transfusões seguras?",
    "resposta": "Karl Landsteiner",
    "distratores": [
      "Robert Koch",
      "Paul Ehrlich",
      "Sigmund Freud"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Karl_Landsteiner",
      "https://en.wikipedia.org/wiki/ABO_blood_group_system"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Karl_Landsteiner",
        "situacao": "ok",
        "texto": "Karl Landsteiner  (German: [kaʁl ˈlantˌʃtaɪnɐ]; 14 June 1868 – 26 June 1943) was an Austrian-American biologist, physician, and immunologist. He emigrated with his family to New York in 1923 at the age of 55 for professional opportunities, working for the Rockefeller Institute.\n[…]\nHe was born into a Jewish family. His father Leopold Landsteiner (1818–1875), a renowned Viennese journalist and editor-in-chief of Die Presse, died at age 56, when Karl was 6. The boy became very close to his mother Fanny (née Hess; 1837–1908). After graduating with the Matura exam from a Vienna secondary school, he took up the study of medicine at the University of Vienna. Landsteiner wrote his doctoral thesis in 1891.\n[…]\nIn 1900 Landsteiner found out that the blood of two people under contact agglutinates, and in 1901 he found that this effect was due to contact of blood with blood serum. As a result, he succeeded in identifying the three blood groups A, B and O, which he labelled C, of human blood. Landsteiner also found out that blood transfusion between persons with the same blood group did not lead to the destruction of blood cells, whereas this occurred between persons of different blood groups.\n[…]\nBased on his findings, the first successful blood transfusion was performed by Reuben Ottenberg at Mount Sinai Hospital in New York in 1907.\n[…]\nSince 2005, World Blood Donor Day is celebrated on Landsteiner's birthday anniversary.\n[…]\nKarl Landsteiner on Nobelprize.org  including the Nobel Lecture, 11 December 1930 On Individual Differences in Human Blood\n[…]\nKarl Landsteiner. Pathology SNT\n[…]\nKarl Landsteiner 1868—1943 A Biographical Memoir by Michael Heidelberger\n[…]\nKey Participants: Karl Landsteiner – It's in the Blood! A Documentary History of Linus Pauling, Hemoglobin, and Sickle Cell Anemia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/ABO_blood_group_system",
        "situacao": "ok",
        "texto": "The ABO blood group system is used to denote the presence of one, both, or neither of the A and B antigens on erythrocytes (red blood cells). For human blood transfusions, it is the most important of the 48 different blood type (or group) classification systems currently recognized by the International Society of Blood Transfusions (ISBT) as of\n[…]\nThe ABO blood types were discovered by Karl Landsteiner in 1901; he received the Nobel Prize in Physiology or Medicine in 1930 for this discovery. ABO blood types are also present in other primates such as apes, monkeys and Old World monkeys.\n[…]\nThe ABO blood types were first discovered by an Austrian physician, Karl Landsteiner, working at the Pathological-Anatomical Institute of the University of Vienna (now Medical University of Vienna). In 1900, he found that red blood cells would clump together (agglutinate) when mixed in test tubes with sera from different persons, and that some human blood also agglutinated with animal blood. He wrote a two-sentence footnote:\n[…]\nThis was the discovery of blood groups for which Landsteiner was awarded the Nobel Prize in Physiology or Medicine in 1930. In his paper, he referred to the specific blood group interactions as isoagglutination, and also introduced the concept of agglutinins (antibodies), which is the actual basis of antigen-antibody reaction in the ABO system. He asserted:\n[…]\nIn 1927, Landsteiner had moved to the Rockefeller Institute for Medical Research in New York. As a member of a committee of the National Research Council concerned with blood grouping, he suggested to substitute Janský's and Moss's systems with the letters O, A, B, and AB.\n[…]\nABO at BGMUT Blood Group Antigen Gene Mutation Database at NCBI, NIH\n[…]\nEncyclopædia Britannica, ABO blood group system\n[…]\nNational Blood Transfusion Service"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Karl_Landsteiner",
        "situacao": "ok",
        "texto": "Karl Landsteiner (Baden, Baixa Áustria, 14 de junho de 1868 — Nova Iorque, 26 de junho de 1943) foi um médico e biólogo austríaco naturalizado estadunidense. Foi agraciado com o Nobel de Fisiologia ou Medicina de 1930, pela classificação dos grupos sanguíneos, sistema ABO, e foi descobridor do fator RH.\n[…]\nEm 1900, Karl Landsteiner descobriu que o sangue de duas pessoas sob contato aglutina-se, e em 1901 ele descobriu que esse efeito era devido ao contato do sangue com o soro sanguíneo. Como resultado, ele conseguiu identificar os três grupos sanguíneos A, B e O, que rotulou de C, do sangue humano.\n[…]\nLandsteiner também descobriu que a transfusão de sangue entre pessoas com o mesmo grupo sanguíneo não levou à destruição das células sanguíneas, ao passo que isso ocorreu entre pessoas de grupos sanguíneos diferentes. Com base em suas descobertas, a primeira transfusão de sangue bem-sucedida foi realizada por Reuben Ottenberg no Hospital Mount Sinai em Nova York em 1907.\n[…]\nAssim, Landsteiner aceitou o convite que lhe chegou de Nova York, iniciado por Simon Flexner, que conhecia a obra de Landsteiner, para trabalhar no Rockefeller Institute. Ele chegou lá com sua família na primavera de 1923. Ao longo da década de 1920, Landsteiner trabalhou nos problemas de imunidade e alergia. Em 1927, ele descobriu novos grupos sanguíneos: M, N e P, refinando o trabalho que havia começado 20 anos antes.\n[…]\nÜber die Verwertbarkeit individueller Blutdifferenzen für die forensische Praxis. - Diário para oficiais médicos, 1903\n[…]\nOn Individual Differences in Human Blood, 1928\n[…]\nKarl Landsteiner. Pathology SNT\n[…]\nKarl Landsteiner 1868—1943 Uma memória biográfica de Michael Heidelberger\n[…]\nKey Participants: Karl Landsteiner – It's in the Blood! A Documentary History of Linus Pauling, Hemoglobin, and Sickle Cell Anemia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Circulação sanguínea",
      "descricao": "Movimento contínuo do sangue pelo corpo, bombeado pelo coração."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "No século dezessete, qual médico inglês demonstrou que o sangue circula continuamente pelo corpo, bombeado pelo coração?",
    "resposta": "William Harvey",
    "distratores": [
      "Andreas Vesálio",
      "Joseph Lister",
      "Edward Jenner"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/William_Harvey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/William_Harvey",
        "situacao": "ok",
        "texto": "William Harvey (1 April 1578 – 3 June 1657) was an English physician who made influential contributions to anatomy and physiology. He was the first known physician to describe completely, and in detail, pulmonary and systemic circulation as well as the specific process of blood being pumped to the brain and the rest of the body by the heart (though earlier writers, such as Realdo Colombo, Michael \n[…]\nThe body of William Harvey lapt in lead, simply soldered, was laid without shell or enclosure of any kind in the Harvey vault of this Church of Hempstead, Essex, in June 1657. In the course of time the lead enclosing the remains was, from expose and natural decay, so seriously damaged as to endanger its preservation, rendering some repair of it the duty of those interested in the memory of the illustrious discoverer of the circulation of the Blood.\n[…]\nHarvey, William (1993). The Circulation of the Blood and Other Writings. Translated by Franklin, Kenneth J. London: Everyman: Orion Publishing Group. ISBN 0-460-87362-8.{{cite book}}:  CS1 maint: publisher location (link)\n[…]\nMitchell, Silas Weir (1907). Some Memoranda in Regard to William Harvey, M.D.\n[…]\nPye-Smith, Philip (1880). \"Harvey, William\" . Encyclopædia Britannica. Vol. XI (9th ed.). pp. 502–506.\n[…]\nWright, Thomas (2012). Circulation: William Harvey's Revolutionary Idea. London: Chatto.\n[…]\nRoyal Society of Medicine (Great Britain) (1913). Portraits of Dr. William Harvey. London: Humphrey Milford, Oxford University Press.\n[…]\nWorks by William Harvey at Faded Page (Canada)\n[…]\nWilliam Harvey info from the (US) National Health Museum\n[…]\nThe Harvey Genealogist: The Harvey Book: PART ONE (mentions William Harvey and various ancestors and relatives)\n[…]\nWilliam Harvey: \"On The Motion Of The Heart And Blood In Animals\", 1628\n[…]\nHutchinson, John (1892). \"William Harvey\" . Men of Kent and Kentishmen (Subscription ed.). Canterbury: Cross & Jackman. pp. 63–64."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/William_Harvey",
        "situacao": "ok",
        "texto": "William Harvey (Folkestone, 1 de abril de 1578 — Roehampton, 3 de junho de 1657) foi um médico britânico que, pela primeira vez, descreveu corretamente os detalhes do sistema circulatório do sangue ao ser bombeado, por todo o corpo, pelo coração.\n[…]\nHarvey foi um dos primeiros cientistas a descrever o funcionamento do sistema circulatório, mais especificamente o movimento do sangue pelo interior dos vasos sanguíneos. Interessou-se pelos movimentos do coração de tal forma que não os coordenou com os movimentos respiratórios , deixando assim de lado o velho conceito segundo o qual, desde Cláudio Galeno, se atribuía uma importância excessiva à mistura no coração das moléculas de ar com as substâncias nutritivas.\n[…]\nAssim, Harvey por meio de estudos com animais vivos, nos quais ele observava o interior da cavidade torácica de um animal enquanto ainda vivo, constatou que o coração é um músculo que se contrai e enrijece, da mesma maneira que o bíceps quando se flexiona o cotovelo.\n[…]\nPublicado em 1628 na cidade de Frankfurt, este livro de 72 páginas contém a primeira explicação acurada sobre a circulação sanguínea. Inicia-se com uma dedicatória clara e simples ao Rei Charles I, e divide-se em 17 capítulos descrevendo a anatomia e movimentação do coração e a consequente circulação do sangue pelo corpo.\n[…]\nHarvey, William (1889). On the Motion of the Heart and Blood in Animals. Londres: George Bell and Sons. william harvey.\n[…]\nHarvey, William (1993). The Circulation of the Blood and Other Writings. Traduzido por Franklin, Kenneth J. Londres: Everyman: Orion Publishing Group. ISBN 0-460-87362-8\n[…]\nThe Works of William Harvey. Robert Willis (translator). Londres: Sydenham Society. 1847  Inclui:\n[…]\nExame anatômico do corpo de Thomas Parr",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Esqueleto humano",
      "descricao": "Conjunto de ossos que sustenta e protege o corpo humano."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Um bebê nasce com cerca de trezentos ossos, mas muitos se fundem com o tempo. Quantos ossos tem o esqueleto adulto típico?",
    "resposta": "206",
    "fonte": [
      "https://en.wikipedia.org/wiki/Human_skeleton"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Human_skeleton",
        "situacao": "ok",
        "texto": "The human skeleton is the internal framework of the human body. It is composed of around 270 bones at birth – this total decreases to around 206 bones by adulthood after some bones fuse together, not counting accessory bones. The bone mass in the skeleton makes up about 14% of the total body weight (ca. 10–11 kg for an average person) and reaches maximum mass between the ages of 25 and 30. The hum\n[…]\nThe human skeleton performs six major functions: support, movement, protection, production of blood cells, storage of minerals, and endocrine regulation.\n[…]\nThe skeleton helps to protect many vital internal organs from being damaged.\n[…]\nAnatomical differences between human males and females are highly pronounced in some soft tissue areas, but tend to be limited in the skeleton. The human skeleton is not as sexually dimorphic as that of many other primate species, but subtle differences between sexes in the morphology of the skull, dentition, long bones, and pelvis are exhibited across human populations.\n[…]\nThe human pelvis exhibits greater sexual dimorphism than other bones, specifically in the size and shape of the pelvic cavity, ilia, greater sciatic notches, and the sub-pubic angle. The Phenice method is commonly used to determine the sex of an unidentified human skeleton by anthropologists with 96% to 100% accuracy in some populations.\n[…]\nArthritis is a disorder of the joints. It involves inflammation of one or more joints. When affected by arthritis, the joint or joints affected may be painful to move, may move in unusual directions or may be immobile completely. The symptoms of arthritis will vary differently between types of arthritis. The most common form of arthritis, osteoarthritis, can affect both the larger and smaller joints of the human skeleton. The cartilage in the affected joints will degrade, soften and wear away.\n[…]\nList of bones of the human skeleton"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Esqueleto_humano",
        "situacao": "ok",
        "texto": "O esqueleto humano é uma das estruturas internas do corpo humano. É formado pelos ossos e tem como função principal proteger determinados órgãos vitais como o encéfalo, que é protegido pelo crânio, e também os pulmões e o coração, que são protegidos pelas costelas e pelo esterno, e servem também para armazenar gordura e minerais, ajudar com os movimentos do corpo e sustentar o organismo. Os ossos \n[…]\nEle constitui-se de peças ósseas (ao todo 206 ossos no indivíduo adulto) e cartilaginosas articuladas, que formam um sistema de alavancas movimentadas pelos músculos em conjunto com os tendões.\n[…]\nOs ossos do corpo humano variam de formato e tamanho, sendo o maior deles o fémur, que fica na coxa, e o menor o estribo que fica dentro do ouvido médio.\n[…]\nFazem parte também do esqueleto humano, além dos ossos, os tendões, ligamentos e as cartilagens. Os ossos começam a se formar a partir do segundo mês da vida intra-uterina. Ao nascer, a criança já apresenta um esqueleto bastante ossificado, mas as extremidades de diversos ossos ainda mantêm regiões cartilaginosas que permitem o crescimento. Entre os 18 e 20 anos, essas regiões cartilaginosas se ossificam e o crescimento cessa.\n[…]\nO esqueleto axial consiste de 80 ossos na cabeça e tronco do corpo humano. Ele é composto por três partes: a coluna vertebral, a caixa torácica e a caixa craniana. O esqueleto axial também é caracterizado pela função de sustentação do corpo.\n[…]\nO esqueleto de um bebê tem cerca de 270 ossos, os quais diminuem para 206 quando o indivíduo atinge a idade adulta, uma vez que alguns ossos se fundem. Os bebês nascem com estruturas entre alguns ossos do crânio, chamadas fontanelas, popularmente chamadas \"moleiras\". São estruturas frágeis que com o passar dos anos tendem a desaparecer. Existem para permitir a passagem do bebê pelo canal vaginal no parto e crescimento do encéfalo.\n[…]\nLista de ossos do esqueleto humano",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Cromossomos humanos",
      "descricao": "Estruturas do núcleo celular que organizam o DNA humano."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Uma célula humana comum, sem contar as reprodutivas, guarda quantos cromossomos no total?",
    "resposta": "46 (23 pares)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Human_genome",
      "https://en.wikipedia.org/wiki/Chromosome"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Human_genome",
        "situacao": "ok",
        "texto": "The human genome is a complete set of DNA sequences for each of the 22 autosomes and the two distinct sex chromosomes (X and Y). A small DNA molecule is found within individual mitochondria. These are usually treated separately as the nuclear genome and the mitochondrial genome.\n[…]\nThe total length of the human reference genome does not represent the sequence of any specific individual, nor does it represent the sequence of all of the DNA found within a cell. The human reference genome only includes one copy of each of the paired, homologous autosomes plus one copy of each of the two sex chromosomes (X and Y). The total amount of DNA in this reference genome is 3.1 billion base pairs.\n[…]\nBy 2018, the total number of genes had been raised to at least 46,831, plus another 2300 micro-RNA genes. A 2018 population survey found another 300 million bases of human genome that was not in the reference sequence. Prior to the acquisition of the full genome sequence, estimates of the number of human genes ranged from 50,000 to 140,000 (with occasional vagueness about whether these estimates included non-protein coding genes).\n[…]\nComparative genomics studies of mammalian genomes suggest that approximately 5% of the human genome has been conserved by evolution since the divergence of extant lineages approximately 200 million years ago, containing the vast majority of genes. The published chimpanzee genome differs from that of the human genome by 1.23% in direct sequence comparisons.\n[…]\nA major difference between the two genomes is human chromosome 2, which is equivalent to a fusion product of chimpanzee chromosomes 12 and 13. (later renamed to chromosomes 2A and 2B, respectively).\n[…]\nHuman Genome Project\n[…]\nThe National Human Genome Research Institute\n[…]\nSimple Human Genome viewer"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chromosome",
        "situacao": "ok",
        "texto": "A chromosome is a package of DNA containing part of or all of the genetic material of an organism. In most chromosomes, the very long thin DNA fibers are coated with nucleosome-forming packaging proteins; in eukaryotic cells, the most important of these proteins are the histones. Aided by chaperone proteins, the histones bind to and condense the DNA molecule to maintain its integrity.\n[…]\nThe number of human chromosomes was published by Painter in 1923. By inspection through a microscope, he counted 24 pairs of chromosomes, giving 48 in total. His error was copied by others, and it was not until 1956 that the true number (46) was determined by Indonesian-born cytogeneticist Joe Hin Tjio.\n[…]\nHuman cells have 23 pairs of chromosomes (22 pairs of autosomes and one pair of sex chromosomes), giving a total of 46 per cell. In addition to these, human cells have many hundreds of copies of the mitochondrial genome. Sequencing of the human genome has provided a great deal of information about each of the chromosomes. Below is a table compiling statistics for the chromosomes, based on the Sanger Institute's human genome information in the Vertebrate Genome Annotation (VEGA) database.\n[…]\nIt took until 1954 before the human diploid number was confirmed as 46. Considering the techniques of Winiwarter and Painter, their results were quite remarkable. Chimpanzees, the closest living relatives to modern humans, have 48 chromosomes as do the other great apes: in humans two chromosomes fused to form chromosome 2.\n[…]\nSexually reproducing species have somatic cells (body cells) that are diploid [2n], having two sets of chromosomes (23 pairs in humans), one set from the mother and one from the father. Gametes (reproductive cells) are haploid [n], having one set of chromosomes.\n[…]\nChromosome News from Genome News Network\n[…]\nVisualisation of human chromosomes and comparison to other species"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Genoma_humano",
        "situacao": "ok",
        "texto": "O genoma humano é o conjunto completo de sequências de ácido nucleico codificado como DNA dentro dos 23 pares de cromossomos nos núcleos das células e em uma pequena molécula de DNA encontrada nas mitocôndrias individuais. Usualmente, o genoma mitocondrial é tratado separadamente do genoma nuclear.\n[…]\nOs genomas humanos haplóides estão contidos nas células germinativas (óvulos e espermatozóides) e são constituídos por três bilhões de pares de bases de DNA, enquanto os genomas diplóides (encontrados em células somáticas) tem o dobro do conteúdo de DNA.\n[…]\nO comprimento total do genoma humano é superior a 3 bilhões de pares de bases. O genoma é organizado em 22 cromossomos pareados, mais o cromossomo X pareado com outro cromossomo X em fêmeas, e, em machos, com um cromossomo Y.\n[…]\nOs comprimentos cromossômicos foram estimados pela multiplicação do número de pares de bases por 0,34 nanômetros - a distância entre pares de bases em uma dupla hélice do DNA.\n[…]\nO genoma humano haplóide (23 cromossomos) tem cerca de 3 bilhões de pares de bases e contém cerca de 30 000 genes. Como cada par de bases pode ser codificado por 2 bits, isso significa aproximadamente 750 megabytes de dados. Uma célula somática individual (diploide) contém o dobro dessa quantidade, isto é, cerca de 6 bilhões de pares de bases.\n[…]\nOs homens têm menos que as mulheres porque o cromossomo Y tem cerca de 57 milhões de pares de bases, enquanto o X é cerca de 156 milhões, mas em termos de informação os homens têm mais porque o segundo X contém quase as mesmas informações que o primeiro. Como os genomas individuais variam em sequência em menos de 1% um do outro, as variações do genoma de um dado humano a partir de uma referência comum podem ser compactadas sem perda para aproximadamente 4 megabytes.\n[…]\nProjeto Genoma Humano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Vértebras cervicais",
      "descricao": "Vértebras que formam a coluna do pescoço."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Apesar da enorme diferença de tamanho, o pescoço de uma girafa e o de um ser humano têm o mesmo número de vértebras. Quantas?",
    "resposta": "Sete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cervical_vertebrae",
      "https://en.wikipedia.org/wiki/Giraffe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cervical_vertebrae",
        "situacao": "ok",
        "texto": "In tetrapods, cervical vertebrae (sing.: vertebra) are the vertebrae of the neck, immediately below the skull. Truncal vertebrae (divided into thoracic and lumbar vertebrae in mammals) lie caudal (toward the tail) of cervical vertebrae. In sauropsid species, the cervical vertebrae bear cervical ribs. In lizards and saurischian dinosaurs, the cervical ribs are large; in birds, they are small and co\n[…]\nThe cervical spinal nerves emerge from above the cervical vertebrae. For example, the cervical spinal nerve 3 (C3) passes above C3.\n[…]\nThe vertebra prominens, or C7, has a distinctive long and prominent spinous process, which is palpable from the skin surface. Sometimes, the seventh cervical vertebra is associated with an abnormal extra rib, known as a cervical rib, which develops from the anterior root of the transverse process.\n[…]\nThe transverse foramen may be as large as that in the other cervical vertebrae, but it is generally smaller on one or both sides; occasionally, it is double, and sometimes it is absent.\n[…]\nThe movement of nodding the head takes place predominantly through flexion and extension at the atlanto-occipital joint between the atlas and the occipital bone. However, the cervical spine is comparatively mobile, and some component of this movement is due to flexion and extension of the vertebral column itself. This movement between the atlas and occipital bone is often referred to as the \"yes joint\", owing to its nature of being able to move the head in an up-and-down fashion.\n[…]\nInjuries to the cervical spine are common at the level of the second cervical vertebrae, but neurological injury is uncommon. C4 and C5 are the areas that see the highest amount of cervical spine trauma.\n[…]\nVertebral column\n[…]\nCervical fracture\n[…]\nCervical Spine Anatomy\n[…]\nCervical vertebra quiz\n[…]\nCervical vertebrae - BlueLink Anatomy - University of Michigan Medical School"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Giraffe",
        "situacao": "ok",
        "texto": "Giraffes (genus Giraffa) are large African hoofed mammals. They are the tallest living terrestrial animals and the largest ruminants on Earth. They are classified under the family Giraffidae, along with their closest extant relative, the okapi. Traditionally, giraffes have been thought of as one species, Giraffa camelopardalis, with nine subspecies.\n[…]\nGiraffes have an extremely elongated neck, which can be up to 2.4 m (7.9 ft) in length. Along the neck is a mane made of short, erect hairs. The neck typically rests at an angle of 50–60 degrees, though juveniles are closer to 70 degrees. The long neck results from a disproportionate lengthening of the cervical vertebrae, not from the addition of more vertebrae. Each cervical vertebra is over 28 cm (11 in) long.\n[…]\nThe giraffe's neck vertebrae have ball and socket joints. The point of articulation between the cervical and thoracic vertebrae of giraffes is shifted to lie between the first and second thoracic vertebrae (T1 and T2), unlike in most other ruminants, where the articulation is between the seventh cervical vertebra (C7) and T1.\n[…]\nThis allows C7 to contribute directly to increased neck length and has given rise to the suggestion that T1 is actually C8, and that giraffes have added an extra cervical vertebra. However, this proposition is not generally accepted, as T1 has other morphological features, such as an articulating rib, deemed diagnostic of thoracic vertebrae, and because exceptions to the mammalian limit of seven cervical vertebrae are generally characterised by increased neurological anomalies and maladies.\n[…]\nZarafa, another famous giraffe, was brought from Egypt to Paris in the early 19th century as a gift for Charles X of France. A sensation, the giraffe was the subject of numerous memorabilia or \"giraffanalia\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/V%C3%A9rtebra_cervical",
        "situacao": "ok",
        "texto": "No corpo humano existem sete vértebras cervicais. O conjunto dessas vértebras forma a coluna vertebral cervical. A primeira vértebra cervical, o atlas, liga-se ao osso occipital e é responsável pela sustentação do crânio; a última vértebra cervical, chamada \"C7\", está acima da primeira vértebra torácica, \"T1\". Normalmente as vértebras cervicais arranjam-se de modo a formar uma suave curvatura na c\n[…]\nAs sete vértebras têm em comum um formato algo anelar, sendo que as cinco últimas têm a sua parte anterior mais desenvolvida, maior, a qual é formada pelo corpo vertebral.\n[…]\nNessa região anterior de cada vértebra, iniciando-se abaixo de C2, entre os corpos vertebrais, até a parte móvel inferior da coluna vertebral (região lombo-sacra), existe em cada intervalo um disco intervertebral coluna vertebral cervical que acompanham a medula espinhal ao longo do pescoço.\n[…]\nA principal diferença entre as vértebras cervicais das torácicas e lombares é que, além do menor tamanho, possuem de cada lado o forame transverso, através do qual passa a artéria vertebral - excepto na C7, sendo que essa pode ou não possuir o forame (e, mesmo se o possuir, através dele passam somente veias acessórias). O forame transverso localiza-se no processo transverso.\n[…]\nAs vértebras cervicais que são visualizadas na radiografias laterais da cabeça, são utilizadas na odontologia, mais especificamente na ortodontia e ortopedia funcional dos maxilares para estimar a idade óssea. Existe vários métodos que utilizam as vértebras para estimar a idade óssea, são eles: Hassel & Farman (1995), Baccetti et al (2005), Mito et al (2002). Existem muitos aplicativos para smartphone para estimar a idade óssea pelos métodos cervicais, como o Easy Age",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Ossículos do ouvido médio",
      "descricao": "Três pequenos ossos do ouvido médio que transmitem o som ao ouvido interno."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O ouvido médio tem três ossinhos com nomes de objetos. Um deles é a bigorna. Qual outro também é ferramenta de ferreiro?",
    "resposta": "Martelo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ossicles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ossicles",
        "situacao": "ok",
        "texto": "The ossicles (also called auditory ossicles) are irregular bones in the middle ear of humans and other animals, and are among the smallest bones in the human body. Although the term \"ossicle\" literally means \"tiny bone\" (from Latin: ossiculum) and may refer to any small bone throughout the body, it typically refers specifically to the malleus, incus and stapes (\"hammer, anvil, and stirrup\") of the\n[…]\nThe increased pressure will compress the fluid found in the cochlea and transmit the stimulus. Thus, the lever action of the ossicles changes the vibrations so as to improve the transfer and reception of sound, and is a form of impedance matching.\n[…]\nOccasionally the joints between the ossicles become rigid. One condition, otosclerosis, results in the fusing of the stapes to the oval window. This reduces hearing and may be treated surgically using a passive middle ear implant.\n[…]\nSome doubt exists as to the discoverers of the auditory ossicles, and several anatomists from the early 16th century have the discovery attributed to them with the two earliest being Alessandro Achillini and Jacopo Berengario da Carpi. Several sources, including Eustachi and Casseri, attribute the discovery of the malleus and incus to the anatomist and philosopher Achillini.\n[…]\nA much more detailed description of the first two ossicles followed in Andreas Vesalius' De humani corporis fabrica in which he devoted a chapter to them. Vesalius was the first to compare the second element of the ossicles to an anvil although he offered the molar as an alternative comparison for its shape.\n[…]\nThe term ossicle derives from ossiculum, a diminutive of \"bone\" (Latin: os; genitive ossis).\n[…]\nThe middle ear and the ossicles Archived 2005-12-27 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "DNA",
      "descricao": "Molécula que carrega as informações genéticas dos seres vivos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O código genético do DNA é escrito com quatro bases: adenina, timina, citosina e qual outra?",
    "resposta": "Guanina",
    "fonte": [
      "https://en.wikipedia.org/wiki/DNA",
      "https://en.wikipedia.org/wiki/Nucleobase"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/DNA",
        "situacao": "ok",
        "texto": "Deoxyribonucleic acid (; DNA) is a polymer composed of two polynucleotide chains that coil around each other to form a double helix. The polymer carries genetic instructions for the development, functioning, growth and reproduction of all known organisms and many viruses. DNA and ribonucleic acid (RNA) are nucleic acids.\n[…]\nThe complementary nitrogenous bases are divided into two groups, the single-ringed pyrimidines and the double-ringed purines. In DNA, the pyrimidines are thymine and cytosine; the purines are adenine and guanine.\n[…]\nThe DNA double helix is stabilized primarily by two forces: hydrogen bonds between nucleotides and base-stacking interactions among aromatic nucleobases. The four bases found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T). These four bases are attached to the sugar-phosphate to form the complete nucleotide, as shown for adenosine monophosphate. Adenine pairs with thymine and guanine pairs with cytosine, forming A-T and G-C base pairs.\n[…]\nModified Guanine\n[…]\nBuilding blocks of DNA (adenine, guanine, and related organic molecules) may have been formed extraterrestrially in outer space. Complex DNA and RNA organic compounds of life, including uracil, cytosine, and thymine, have also been formed in the laboratory under conditions mimicking those found in outer space, using starting chemicals, such as pyrimidine, found in meteorites.\n[…]\nIn 1943, Oswald Avery, along with co-workers Colin MacLeod and Maclyn McCarty, identified DNA as the transforming principle, supporting Griffith's suggestion (Avery–MacLeod–McCarty experiment). Erwin Chargaff developed and published observations now known as Chargaff's rules, stating that in DNA from any species of any organism, the amount of guanine should be equal to cytosine and the amount of adenine should be equal to thymine."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nucleobase",
        "situacao": "ok",
        "texto": "Nucleotide bases (also nucleobases, nitrogenous bases) are nitrogen-containing biological compounds that form nucleosides, which, in turn, are components of nucleotides, with all of these monomers constituting the basic building blocks of nucleic acids. The ability of nucleobases to form base pairs and to stack one upon another leads directly to long-chain helical structures such as deoxyribonucle\n[…]\nFive nucleobases—adenine (A), cytosine (C), guanine (G), thymine (T), and uracil (U)—are called primary or canonical. They function as the fundamental units of the genetic code, with the bases A, C, G and T being found in DNA while A, C, G and U are found in RNA. Thymine and uracil are distinguished by merely the presence or absence of a methyl group on the fifth carbon (C5) of these heterocyclic six-membered rings.\n[…]\nAdenine and guanine have a fused-ring skeletal structure derived of purine, hence they are called purine bases. The purine nitrogenous bases are characterized by their single amino group (−NH2), at the C6 carbon in adenine and C2 in guanine. Similarly, the simple-ring structure of cytosine, uracil, and thymine is derived of pyrimidine, so those three bases are called the pyrimidine bases.\n[…]\nIn both cases, the hydrogen bonds are between the amine and carbonyl groups on the complementary bases.\n[…]\nNucleobases such as adenine, guanine, xanthine, hypoxanthine, purine, 2,6-diaminopurine, and 6,8-diaminopurine may have formed in outer space as well as on earth.\n[…]\nHypoxanthine and xanthine are two of the many bases created through mutagen presence, both of them through deamination (replacement of the amine-group with a carbonyl-group). Hypoxanthine is produced from adenine, xanthine from guanine, and uracil results from deamination of cytosine.\n[…]\nA list of modified bases and their symbols can be found in the many nucleic acid modification databases and as part of tRNAdb."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81cido_desoxirribonucleico",
        "situacao": "ok",
        "texto": "Ácido desoxirribonucleico (ADN, em português: ácido desoxirribonucleico; ou DNA, em inglês: deoxyribonucleic acid) é um polímero composto por duas cadeias polinucleotídicas que se enrolam umas sobre as outras para formar uma dupla hélice. O polímero carrega instruções genéticas para o desenvolvimento, funcionamento, crescimento e reprodução de todos os organismos conhecidos e muitos vírus. O ADN e\n[…]\nA dupla hélice do ADN é estabilizada por pontes de hidrogênio entre as bases presas às duas cadeias. As quatro bases encontradas no ADN são a adenina (A), citosina (C), guanina (G) e timina (T). Estas quatro bases ligam-se ao açúcar/fosfato para formar o nucleotídeo completo.\n[…]\nEstas bases são classificadas em dois tipos; a adenina e guanina são compostos heterocíclicos chamados purinas, enquanto a citosina e timina são pirimidinas. Uma quinta base (uma pirimidina) chamada uracila (U) aparece no ARN e substitui a timina, a uracila difere da timina pela falta de um grupo de metila no seu anel. A uracila normalmente não está presente no ADN, só ocorrendo como um produto da decomposição da citosina.\n[…]\nOutras modificações de bases incluem metilação de adeninas em bactérias e glicosilação do uracilo para produzir a \"base-J\" em organismos da classe Kinetoplastida.\n[…]\nO código genético consiste de 'palavras' de três letras chamadas codões formadas por uma sequência de três nucleótidos (p.e. ACU, CAG, UUU).\n[…]\nOutro pesquisador pioneiro na descoberta foi Albrecht Kossel (1853-1927). Em 1877, ele juntou-se ao grupo de pesquisa de Hoppe-Seyler, então trabalhando na Universidade de Estrasburgo (França), e começou a estudar a composição química das nucleínas. Kossel detectou dois tipos de bases nitrogenadas já conhecidas, a adenina e a guanina. Em 1893, identificou uma nova base nitrogenada, que era liberada pela degradação de nucleína das células do timo; por isso denominou-a timina.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Primeira demonstração pública de anestesia",
      "descricao": "Cirurgia realizada em 1846 no Hospital Geral de Massachusetts, em Boston, com o paciente anestesiado por William Morton."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em 1846, em Boston, qual substância foi usada na primeira demonstração pública bem-sucedida de anestesia numa cirurgia?",
    "resposta": "Éter",
    "distratores": [
      "Clorofórmio",
      "Gás hilariante",
      "Morfina"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/William_T._G._Morton",
      "https://en.wikipedia.org/wiki/Ether_Dome"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/William_T._G._Morton",
        "situacao": "ok",
        "texto": "William Thomas Green Morton (August 9, 1819 – July 15, 1868) was an American dentist who first publicly demonstrated the use of inhaled ether as a surgical anesthetic in 1846. He is credited with gaining the medical world’s acceptance of surgical anesthesia.\n[…]\nOn September 30, 1846, Morton performed a painless tooth extraction after administering ether to Ebenezer Hopkins Frost (1824–1866). Upon reading a favorable newspaper account of this event, Boston surgeon Henry Jacob Bigelow arranged for a now-famous demonstration of ether on October 16, 1846, at the operating theatre of the Massachusetts General Hospital, or MGH. At this demonstration John Collins Warren painlessly removed a tumour from the neck of a Mr. Edward Gilbert Abbott.\n[…]\nFollowing the demonstration, Morton tried to hide the identity of the substance Abbott had inhaled, by referring to it as \"Letheon\", but it soon was found to be ether.\n[…]\nMorton's own efforts to obtain patents overseas also undermined his assertions of philanthropic intent. Consequently, no effort was made to enforce the patent, and ether soon came into general use.\n[…]\nThe first use of ether as an anesthetic is commemorated in the Ether Monument in the Boston Public Garden, but the designers were careful not to choose sides in the debate over the person who deserved credit for the discovery. Instead, the statue depicts a doctor in medieval Moorish robes and turban.\n[…]\nMorton's first successful public demonstration of ether as an inhalation anesthetic was such a historic and widely publicised event that many consider him to be the \"inventor and revealer\" of anesthesia. However, Morton's work was preceded by that of Georgia surgeon Crawford Williamson Long, who employed ether as an anesthetic on March 30, 1842."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ether_Dome",
        "situacao": "ok",
        "texto": "The Ether Dome is a surgical operating amphitheater in the Bulfinch Building at Massachusetts General Hospital in Boston, Massachusetts, United States. It served as the hospital's operating room from its opening in 1821 until 1867. It was the site of the first public demonstration of the use of inhaled ether as a surgical anesthetic on October 16, 1846, otherwise known as Ether Day.\n[…]\nThe Ether Dome has not always served the purpose of an operating room. From 1821 to 1868, operations were performed, it was then a storage area from 1868 to 1873, a dormitory from 1873 to 1889, a dining room for the nurses employed at MGH from 1889 to 1892, and now it is a teaching space. The hospital commemorated the historical significance of the space in 1896 on the 50th anniversary of the first public demonstration of surgical anesthesia.\n[…]\nThe Ether Dome was designated a National Historic Site in 1965.\n[…]\nAs the 150th anniversary of the first public demonstration of the use of ether anesthesia on October 16, 1846, approached and preparations for the celebration at the Massachusetts General Hospital (MGH) began, it was recognized that a proper commemorative painting was needed. The famous Hinckley image, reproduced many times, was painted 27 years after the event.\n[…]\nUpon his return, he was placed in the Ether Dome where he subsequently witnessed more than 6,000 surgeries, including the famous first successful demonstration of surgery under anesthesia on October 16, 1846.\n[…]\nThe plaster statue of Apollo in the Ether Dome was given to the M by statesman and orator, Honorable Edward Everett in March 1845. In exchange, the hospital trustees presented to him \"their grateful acknowledgments for his beautiful gift, valuable as a memorial, that, amidst his arduous public duties in a foreign country, Mr.\n[…]\nList of National Historic Landmarks in Boston\n[…]\nThe Ether Dome: The restoration of an icon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/William_Thomas_Green_Morton",
        "situacao": "ok",
        "texto": "William Thomas Green Morton (Charlton, 9 de agosto de 1819 – Nova Iorque, 15 de julho de 1868) foi um dentista americano responsável pela primeira demonstração pública com sucesso, de uma droga anestésica por inalação.\n[…]\nEm 1840, Morton entrou para a primeira escola de dentistas do mundo, a Baltimore College of Dental Surgery. Ele a abandonou sem se graduar. Ao invés disso, em 1842 Morton se tornou pupilo e depois sócio de Horace Wells, o cirurgião dentista de Hartford. Essa parceria não foi de grande sucesso e se dissolveu seis meses depois.\n[…]\nEntretanto, Morton compareceu à apresentação de Wells no Hospital Geral de Massachusetts e foi influenciado pelo insucesso do antigo mestre. No dia 16 de outubro de 1846 Morton voltou ao hospital e dessa vez mudou para sempre a cirurgia no mundo. Esse dia é o oficialmente aceito como aquele em que se realizou a primeira intervenção cirúrgica com anestesia geral.\n[…]\nMorton falou com muita determinação e confiança e apresentou um instrumento, um globo de vidro com duas cânulas que direcionava os vapores à boca do paciente, sendo que dentro havia éter no lugar do antes utilizado protóxido de azoto. O cirurgião presente, o renomado John Collins Warren, extraiu do paciente submetido ao experimento de Morton, um tumor que lhe tomava a glândula submandibular e uma parte da língua.\n[…]\nAo não se ouvir nenhuma manifestação de sofrimento por parte do doente e de outro conseguinte que por dores na medula espinhal foi submetido a ferro em brasa, foi constatado que daquela vez sim havia se descoberto e provado perante inúmeros médicos e demais presentes um meio de anestesiar um ser humano, a ponto de permitir qualquer procedimento cirúrgico, por mais doloroso que fosse.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Vírus zika",
      "descricao": "Vírus transmitido por mosquitos Aedes, identificado pela primeira vez em 1947."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O vírus zika foi identificado pela primeira vez em 1947, num macaco de uma floresta de qual país africano?",
    "resposta": "Uganda",
    "distratores": [
      "Quênia",
      "Tanzânia",
      "Nigéria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Zika_virus",
      "https://en.wikipedia.org/wiki/Zika_Forest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zika_virus",
        "situacao": "ok",
        "texto": "Zika virus (ZIKV; pronounced  or ) is an arbovirus which is a member of the virus family Flaviviridae. It is spread by daytime-active Aedes mosquitoes, such as A. aegypti and A. albopictus. Its name comes from the Ziika Forest of Uganda, where the virus was first isolated in 1947. Zika virus shares a genus with the dengue, yellow fever, Japanese encephalitis, and West Nile viruses. Since the 1950s\n[…]\nThe virus was first isolated in April 1947 from a rhesus macaque monkey placed in a cage in the Ziika Forest of Uganda, near Lake Victoria, by the scientists of the Yellow Fever Research Institute. A second isolation from the mosquito A. africanus followed at the same site in January 1948. When the monkey developed a fever, researchers isolated from its serum a \"filterable transmissible agent\" which was named Zika in 1948.\n[…]\nZika was first known to infect humans from the results of a serological survey in Uganda, published in 1952. Of 99 human blood samples tested, 6.1% had neutralizing antibodies. As part of a 1954 outbreak investigation of jaundice suspected to be yellow fever, researchers reported isolation of the virus from a patient, but the pathogen was later shown to be the closely related Spondweni virus.\n[…]\nSubsequent serological studies in several African and Asian countries indicated the virus had been widespread within human populations in these regions. The first true case of human infection was identified by Simpson in 1964, who was himself infected while isolating the virus from mosquitoes. From then until 2007, there were only 13 further confirmed human cases of Zika infection from Africa and Southeast Asia.\n[…]\nA study published in 2017 showed that the Zika virus, despite only a few cases were reported, has been silently circulated in West Africa for the last two decades when blood samples collected between 1992 and 2016 were tested for the ZIKV IgM antibodies."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Zika_Forest",
        "situacao": "ok",
        "texto": "The Zika (or Ziika) Forest ( ) is a tropical forest near Entebbe in Uganda. Ziika means 'overgrown' in the Luganda language. As the property of the Uganda Virus Research Institute (UVRI) of Entebbe, it is protected and restricted to scientific research.\n[…]\nThe Zika virus as well as the moths Sidisca zika and Milocera zika are named after the forest.\n[…]\nThe Zika Forest is where the infected Aedes mosquito first spread Zika to rhesus monkeys, then spreading further to humans.\n[…]\nInvestigations of mosquitoes at Zika started in 1946 as part of the study of human yellow fever at the Yellow Fever Research Institute (renamed East African Virus Research Institute in 1950, and then Uganda Virus Research Institute in 1977), established in Entebbe, Uganda in 1936 by the Rockefeller Foundation. In 1947, the Zika virus was isolated from a rhesus monkey stationed at Zika.\n[…]\nIn 1960, a 36.6-metre (120-ft) steel tower was moved from Mpanga Forest to Zika to study the vertical distribution of mosquitoes, allowing for a comprehensive study of the mosquito population in 1964. In that same year, the Zika virus was identified from a collected Aedes africanus sample. No routine mosquito collections were performed for about the next four decades, while human activities encroached on the forest. An updated mosquito collection finally took place in 2009 and 2010.\n[…]\nThe name Zika has been made notorious by the Zika virus, involved in a growing number of outbreaks around the globe from 2007 onwards.\n[…]\nZika Forest in Entebbe, Uganda\n[…]\nCNN – Zika virus origin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/V%C3%ADrus_da_zica",
        "situacao": "ok",
        "texto": "O vírus da zica ou vírus da zika ou, ainda,  vírus de Zika (em inglês, Zika virus; abreviatura: ZIKV) é um vírus do gênero Flavivirus. Em humanos, transmitido através da picada do mosquito Aedes aegypti, causa a doença também conhecida como zika — que embora raramente acarrete complicações para seu portador, pode causar microcefalia congênita (quando adquirido por gestante, podendo prejudicar o fe\n[…]\nO nome Zika tem sua origem na floresta de Zika, perto de Entebbe, capital da República de Uganda, onde o vírus foi isolado pela primeira vez em 1947. É relacionado aos vírus da dengue, da febre amarela e do Nilo Ocidental, os quais igualmente fazem parte da família Flaviviridae.\n[…]\nO vírus foi isolado pela primeira vez em 1947 de um macaco reso (Macaca mulatta), capturado na floresta de Zika,  em  Entebbe, Uganda por cientistas do Uganda Virus Research Institute. e foi isolado pela primeira vez em humanos em 1968, na Nigéria.\n[…]\nO vírus foi isolado pela primeira vez em 1947 por cientistas que, pesquisando a febre amarela, capturaram um macaco reso  na floresta de Zika (zika significando, na língua Luganda, \"invadido\", no sentido de \"vegetação que cresceu demais e tomou conta do lugar\"), próximo ao Instituto de Pesquisa Virológica do leste africano, em Entebbe, capital da República de Uganda.\n[…]\nA febre se desenvolveu no macaco e os pesquisadores isolaram de seu soro um agente transmissível que foi descrito como Vírus Zika pela primeira vez em 1952. Junto com a descrição do vírus, os cientistas financiados pela Fundação Rockefeller (Dr. Jordi Casals) forneceram o vírus para uma organização que mantém culturas de organismos para laboratórios. O vírus não foi patenteado pela Fundação. Foi subsequentemente isolado num humano na Nigéria em 1954.\n[…]\nHistória social dos vírus\n[…]\nSurto de vírus Zika nas ilhas Yap em 2007\n[…]\nSurto de vírus Zika no Brasil em 2015\n[…]\nPerguntas e respostas sobre o vírus Zika",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Primeiro transplante de coração",
      "descricao": "Primeiro transplante de coração entre seres humanos, feito por Christiaan Barnard em dezembro de 1967."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1967, o cirurgião Christiaan Barnard realizou o primeiro transplante de coração entre seres humanos em qual país?",
    "resposta": "África do Sul",
    "fonte": [
      "https://en.wikipedia.org/wiki/Christiaan_Barnard",
      "https://en.wikipedia.org/wiki/Heart_transplantation"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christiaan_Barnard",
        "situacao": "ok",
        "texto": "Christiaan Neethling Barnard (8 November 1922 – 2 September 2001) was a South African cardiac surgeon who performed the world's first human-to-human heart transplant operation.\n[…]\nFollowing the first-ever successful kidney transplant in 1953, in the United States, Barnard performed South Africa's second kidney transplant in October 1967, the first having been done in Johannesburg the previous year.\n[…]\nBarnard performed the world's first human-to-human heart transplant operation in the early morning hours of Sunday 3 December 1967. Louis Washkansky, a 54-year-old grocer who was suffering from diabetes and incurable heart disease, was the patient. Barnard was assisted by his brother Marius Barnard, as well as a team of thirty staff members. The operation lasted approximately five hours.\n[…]\nBarnard's second transplant operation was conducted on 2 January 1968, and the patient, Philip Blaiberg, survived for 19 months. Blaiberg's heart was donated by Clive Haupt, a 24-year-old black man who suffered a stroke, inciting controversy (especially in the African-American press) during the time of South African apartheid. Dirk van Zyl, who received a new heart in 1971, was the longest-lived recipient, surviving over 23 years.\n[…]\nBetween December 1967 and November 1974 at Groote Schuur Hospital in Cape Town, South Africa, ten heart transplants were performed, as well as a heart and lung transplant in 1971. Of these ten patients, four lived longer than 18 months, with two of these four becoming long-term survivors. One patient, Dorothy Fischer, lived for over thirteen years and another for over twenty-four years.\n[…]\nYour Healthy Heart\n[…]\n40th anniversary of first human heart transplant"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Heart_transplantation",
        "situacao": "ok",
        "texto": "A heart transplant, or a cardiac transplant, is a surgical transplant procedure performed on patients with end-stage heart failure when other medical or surgical treatments have failed. As of 2018, the most common procedure is to take a functioning heart from a recently deceased organ donor (brain death is the most common) and implant it into the patient.\n[…]\nThe world's first human-to-human heart transplant was performed by South African cardiac surgeon Christiaan Barnard utilizing the techniques developed by American surgeons Norman Shumway and Richard Lower. A recent study suggests that Denise Darvall, the 25 years old donor was not \"brain-dead\" in today's term, and, moreover, her heart was arrested artificially, similarly to a non-voluntary active euthanasia.\n[…]\nPatient Louis Washkansky received this transplant on December 3, 1967, at the Groote Schuur Hospital in Cape Town, South Africa. Washkansky, however, died 18 days later from pneumonia. There were no images documenting this historic moment.\n[…]\nOn December 6, 1967, at Maimonides Hospital in Brooklyn, New York, Adrian Kantrowitz performed the world's first pediatric heart transplant. The infant's new heart stopped beating after 7 hours and could not be restarted. At a following press conference, Kantrowitz emphasized that he did not consider the operation a success.\n[…]\nOn January 7, 2022, David Bennett, aged 57, of Maryland became the first person to receive a gene-edited pig heart in a transplant at the University of Maryland Medical Center. Before the transplant, David was unable to receive a human heart due to the patient's past conditions with heart failure and an irregular heartbeat, causing surgeons to use the pig heart that was genetically modified. Bennett died two months later at University of Maryland Medical Center on March 8, 2022.\n[…]\nArtificial heart"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Christiaan_Barnard",
        "situacao": "ok",
        "texto": "Christiaan Neethling Barnard (Beaufort West, província de Cabo Ocidental, região do Grande Karoo, distrito de Karoo Central, África do Sul, 8 de novembro de 1922 - Pafos, Chipre, 2 de setembro de 2001), foi um cirurgião cardíaco sul-africano que realizou a primeira operação de transplante de coração de pessoa para pessoa do mundo.\n[…]\nO segundo paciente de transplante de Barnard, Philip Blaiberg, cuja operação foi realizada no início de 1968, viveu por um ano e meio e pôde voltar para casa depois do hospital.\n[…]\nBarnard realizou o primeiro transplante de coração de pessoa para pessoa do mundo nas primeiras horas da manhã de domingo, 3 de dezembro de 1967. Louis Washkansky, um dono de mercearia de 54 anos que sofria de diabetes e doença incurável doença cardíaca, era o paciente. Barnard foi assistido por seu irmão Marius Barnard, bem como por uma equipe de trinta membros da equipe. A operação durou aproximadamente cinco horas.\n[…]\nA segunda operação de transplante de Barnard foi realizada em 2 de janeiro de 1968, e o paciente, Philip Blaiberg, sobreviveu por 19 meses. O coração de Blaiberg foi doado por Clive Haupt, um homem negro de 24 anos que sofreu um derrame, gerando polêmica (especialmente na imprensa afro-americana) durante a época do apartheid sul-africano. Dirk van Zyl, que recebeu um novo coração em 1971, foi o destinatário de vida mais longa, sobrevivendo por mais de 23 anos.\n[…]\nEntre dezembro de 1967 e novembro de 1974 no Hospital Groote Schuur na Cidade do Cabo, África do Sul, foram realizados dez transplantes de coração, bem como um transplante de coração e pulmão em 1971. Destes dez pacientes, quatro viveram mais de 18 meses, sendo dois deles quatro se tornando sobreviventes de longo prazo. Um paciente viveu por mais de treze anos e outro por mais de vinte e quatro anos.\n[…]\nSouth Africa: Sharp Dissection",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Varíola",
      "descricao": "Doença infecciosa causada pelo vírus variola, erradicada após campanha mundial de vacinação."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Depois de uma campanha mundial de vacinação, em que ano a Organização Mundial da Saúde declarou a varíola erradicada do planeta?",
    "resposta": "1980",
    "distratores": [
      "1967",
      "1975",
      "1991"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Smallpox"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Smallpox",
        "situacao": "ok",
        "texto": "Smallpox was an infectious disease caused by the variola virus, which belongs to the genus Orthopoxvirus. The last naturally occurring case was diagnosed in October 1977, and the World Health Organization certified the global eradication of the disease in 1980, making smallpox the only human disease to have been eradicated.\n[…]\nThe case-fatality rate for variola minor is 1% or less. There is no evidence of chronic or recurrent infection with variola virus. In cases of flat smallpox in vaccinated people, the condition was extremely rare but less lethal, with one case series showing a 67% death rate.\n[…]\nBlindness results in approximately 35–40% of eyes affected with keratitis and corneal ulcer. Hemorrhagic smallpox can cause subconjunctival and retinal hemorrhages. In 2–5% of young children with smallpox, virions reach the joints and bone, causing osteomyelitis variolosa. Bony lesions are symmetrical, most common in the elbows, legs, and characteristically cause separation of the epiphysis and marked periosteal reactions.\n[…]\nDuring the 20th century, it is estimated that smallpox was responsible for 250–500 million deaths. In the early 1950s, an estimated 50 million cases of smallpox occurred in the world each year. As recently as 1967, the World Health Organization estimated that 15 million people contracted the disease and that two million died in that year. After successful vaccination campaigns throughout the 19th and 20th centuries, the WHO certified the global eradication of smallpox in May 1980.\n[…]\nSmallpox is one of two infectious diseases to have been eradicated, the other being rinderpest, which was declared eradicated in 2011. The final known fatal case occurred in 1978 in a laboratory in Birmingham, England.\n[…]\nSmallpox Images and Diagnosis Synopsis Archived 29 July 2008 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Var%C3%ADola",
        "situacao": "ok",
        "texto": "Varíola, conhecida popularmente como bexiga ou bexigas, foi uma doença infecciosa causada por uma de duas estirpes do vírus da varíola —variola major e variola minor. O último caso natural da doença foi diagnosticado em outubro de 1977, o que levou a Organização Mundial de Saúde a certificar a erradicação da doença em 1980. O risco de morte após contrair a doença era de cerca de 30%, sendo superio\n[…]\nEm 1798, Edward Jenner descobriu que a vacinação era capaz de prevenir a varíola. Em 1967, a Organização Mundial de Saúde intensificou as medidas para erradicar a doença. A varíola é uma das duas doenças infecciosas erradicadas até à data, a par da peste bovina, erradicada em 2011.\n[…]\ne diferentemente de outras localidades do planeta, a ilha de Foula ficou com a população estável desde 1700 e, ao contrário dos seres humanos, os pôneis de Foula conseguiram se reproduzir normalmente e manter a população de pôneis viva. Com isso, a varíola, fez com que Foula se tornasse o local do planeta com a maior quantidade de pôneis por habitante.\n[…]\nEm 26 de outubro de 1977, registrou-se na Somália o último caso de varíola transmitida naturalmente. Em 11 de agosto de 1978 mais um caso seria registrado, curiosamente em Birmingham: na Europa, a varíola já se encontrava erradicada há décadas.\n[…]\nSó foi possível eliminar a varíola porque os seres humanos são os únicos hospedeiros, só há um serótipo (logo a imunização protege contra 100% dos casos), e a vaccinia é eficaz e como vírus vivo que invade ainda que debilmente células, provoca resposta imunitária vigorosa. Além disso a vacina é barata e estável.[carece de fontes]?\n[…]\nEm 2022, a procura pela vacina no Brasil aumentou novamente durante o surto de varíola dos macacos em 2022. No entanto, a vacina não está disponível nem na rede pública nem na rede privada no Brasil.\n[…]\nMedia relacionados com Varíola no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Pasteurização",
      "descricao": "Processo de aquecimento de alimentos, como o leite, para eliminar micro-organismos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O processo que aquece o leite para matar micróbios e a primeira vacina contra a raiva aplicada num ser humano têm em comum qual cientista francês?",
    "resposta": "Louis Pasteur",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pasteurization",
      "https://en.wikipedia.org/wiki/Louis_Pasteur"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pasteurization",
        "situacao": "ok",
        "texto": "In food processing, pasteurization (-isation) is a process of food preservation in which packaged foods (e.g., milk and fruit juices) are treated with mild heat, usually to less than 100 °C (212 °F), to eliminate pathogens and extend shelf life. Pasteurization either destroys or deactivates microorganisms and enzymes that contribute to food spoilage or the risk of disease, including vegetative bac\n[…]\nPasteurization is named after French microbiologist Louis Pasteur, whose research in the 1860s demonstrated that thermal processing would deactivate unwanted microorganisms in wine. Spoilage enzymes are also inactivated during pasteurization. Today, pasteurization is used widely in the dairy industry and other food processing industries for food preservation and food safety.\n[…]\nA less aggressive method was developed by French chemist Louis Pasteur during an 1864 summer holiday in Arbois. To remedy the frequent acidity of the local aged wines, he found out experimentally that it is sufficient to heat a young wine to only about 50–60 °C (122–140 °F) for a short time to kill the microbes, and that the wine could subsequently be aged without sacrificing the final quality. In honor of Pasteur, this process is known as pasteurization.\n[…]\nGreater flexibility with regard to the products that can be pasteurized\n[…]\nPasteurization is not sterilization and does not kill spores. \"Double\" pasteurization, which involves a secondary heating process, can extend shelf life by killing spores that have germinated.\n[…]\nMore broadly, pasteurizing is any method that reduces microbes by an amount (log reduction) equivalent to Pasteur's process. Novel processes, thermal and non-thermal, have been developed to pasteurize foods as a way of reducing the effects on nutritional and sensory characteristics of foods and preventing the degradation of heat-labile nutrients.\n[…]\nFlash pasteurization\n[…]\nPasteurized eggs\n[…]\nFood microbiology"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Louis_Pasteur",
        "situacao": "ok",
        "texto": "Louis Pasteur (; French: [lwi pastœʁ] ; 27 December 1822 – 28 September 1895) was a French chemist, pharmacist, and microbiologist renowned for his discoveries of the principles of vaccination, microbial fermentation, and pasteurization, the last of which was named after him. His research in chemistry led to remarkable breakthroughs in the understanding of the causes and prevention of diseases, wh\n[…]\nLouis Pasteur was born on 27 December 1822, in Dole, Jura, France, to a Catholic family of a poor tanner. He was the third child of Jean-Joseph Pasteur and Jeanne-Etiennette Roqui. The family moved to Marnoz in 1826 and then to Arbois in 1827. Pasteur entered primary school in 1831. He was dyslexic and dysgraphic.\n[…]\nIn 1882, Pasteur sent his assistant Louis Thuillier to southern France because of an epizootic of swine erysipelas. Thuillier identified the bacillus that caused the disease in March 1883. Pasteur and Thuillier increased the bacillus's virulence after passing it through pigeons. Then they passed the bacillus through rabbits, weakening it and obtaining a vaccine. Pasteur and Thuillier incorrectly described the bacterium as a figure-eight shape. Roux described the bacterium as stick-shaped in 1884.\n[…]\nBoth the Institut Pasteur and Université Louis Pasteur were named after Pasteur. The schools Lycée Pasteur in Neuilly-sur-Seine, France, and Lycée Louis Pasteur in Calgary, Alberta, Canada, are named after him. In South Africa, the Louis Pasteur Private Hospital in Pretoria, and Life Louis Pasteur Private Hospital, Bloemfontein, are named after him. Louis Pasteur University Hospital in Košice, Slovakia is also named after Pasteur.\n[…]\nStatue of Louis Pasteur, Mexico City\n[…]\nWorks by or about Louis Pasteur at the Internet Archive\n[…]\nWorks by Louis Pasteur at LibriVox (public domain audiobooks)\n[…]\nNewspaper clippings about Louis Pasteur in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pasteuriza%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "Pasteurização é o processo utilizado em alimentos para destruir microrganismos patogênicos ali existentes. Foi criado em 1862, tendo esse nome em homenagem ao químico francês que o criou, Louis Pasteur.\n[…]\nEste processo consiste, basicamente, no aquecimento do alimento a uma determinada temperatura, por determinado tempo, e depois o alimento é resfriado a uma temperatura inferior à de antes, de forma a eliminar os micro-organismos ali presentes. Posteriormente, tais alimentos são selados hermeticamente por questões de segurança, evitando assim uma nova contaminação.\n[…]\nO avanço científico de Pasteur melhorou a qualidade de vida dos humanos permitindo que produtos, como por exemplo o leite, pudessem ser transportados sem sofrerem decomposição.\n[…]\nLouis Pasteur (1822-1895), descobriu em 1864 que ao aquecer certos alimentos e bebidas acima de 60°C por um determinado tempo (chamado de binômio tempo x temperatura), e depois baixar bruscamente a temperatura do alimento evitando a sua deterioração, reduzia de maneira significativa o número de micro-organismos presentes na sua composição.\n[…]\nNo final do século XIX, Franz von Soxhlet propôs a aplicação do procedimento da pasteurização para o leite in natura, comprovando que o processo era eficaz para a destruição das bactérias existentes neste produto.\n[…]\nExistem dois tipos de pasteurização:\n[…]\nPasteurização lenta, em que se aplicam temperaturas mais baixas durante maior tempo. A temperatura utilizada é da ordem de 65°C durante trinta minutos.\n[…]\nPasteurização rápida, quando se aplicam temperaturas mais altas, da ordem dos 72 a 75˚C, durante 3 a 15 segundos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.30 — 2026-09-30**
>
> Este documento define **o que é uma boa pergunta** no Mestre2 e **como o banco de perguntas é organizado e produzido**. Vale para qualquer pessoa ou modelo que crie, revise ou processe perguntas.
>
> Ele tem duas partes:
> - **Parte I — Regras de conteúdo (§1 a §9):** o que uma pergunta deve ser. É a parte que o gerador e o crítico automáticos recebem.
> - **Parte II — Organização e processo (§10 a §17):** esquemas, fluxo de produção, decisões, pendências, o jogo e o app. É a referência de quem mantém o projeto.
>
> Arquivos relacionados:
> - [`pergunta.schema.json`](pergunta.schema.json) e [`ancora.schema.json`](ancora.schema.json): esquemas
> - [`temas_subtemas.json`](temas_subtemas.json): lista canônica de temas e subtemas
> - [`exemplos_perguntas.json`](exemplos_perguntas.json) · [`exemplos_ancoras.json`](exemplos_ancoras.json)
> - [`proposta_temas_subtemas.md`](proposta_temas_subtemas.md): histórico da revisão da lista canônica
> - [`../pipeline/README.md`](../pipeline/README.md): o pipeline que produz as perguntas
> - [`../app/`](../app/): o app que usa as perguntas numa partida (§16)

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

A lista canônica tem **8 temas e 69 subtemas** e fica em [`temas_subtemas.json`](temas_subtemas.json):

| Tema | Subtemas |
|---|---|
| Geografia | Países e Capitais · Cidades e Monumentos · Relevo e Maravilhas Naturais · Rios e Lagos · Oceanos, Mares e Ilhas · Clima e Biomas · Povos e Idiomas · Bandeiras e Símbolos |
| História | Pré-História e Idade do Bronze · Egito Antigo · Grécia Antiga · Roma Antiga · Antigas Civilizações do Oriente · Américas Pré-Colombianas · Idade Média · Idade Moderna · Idade Contemporânea · Primeira Guerra Mundial · Segunda Guerra Mundial · História do Brasil |
| Natureza | Mamíferos · Aves, Répteis e Anfíbios · Vida Marinha · Insetos e Invertebrados · Plantas e Fungos · Dinossauros e Fósseis · Evolução Humana · Ecossistemas e Ambientes Extremos · Geologia e História da Terra |
| Ciências | Astronomia e Espaço · Física · Química · Matemática · Corpo Humano e Medicina · Tecnologia e Computação · Invenções e História da Ciência |
| Artes e Pensamento | Literatura Brasileira · Literatura Mundial · Pintura · Escultura e Arquitetura · Música Clássica · Teatro e Ópera · Mitologia · Religiões · Filosofia |
| Entretenimento | Cinema · Séries e TV · Música Brasileira · Música Internacional · Jogos Eletrônicos · Anime e Mangá · Quadrinhos · Jogos de Tabuleiro e Cartas |
| Esportes | Futebol · Vôlei · Basquete · Tênis · Automobilismo · Olimpíadas · Lutas e Artes Marciais · Outras Modalidades |
| Cotidiano | Culinária e Bebidas · Língua Portuguesa e Expressões · Marcas e Produtos · Folclore e Tradições Brasileiras · Costumes pelo Mundo · Objetos do Dia a Dia · Moda e Vestuário · Transportes |

- Cada pergunta tem **um tema e um subtema**, escritos **exatamente** como na lista, com acentos e maiúsculas.
- Uma **pequena sobreposição** entre subtemas é tolerada.
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
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro.

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

> **Por enquanto, o gerador automático não cria perguntas com figura.** Elas só são escritas por quem tem a imagem em mãos e a examinou. Uma pergunta sem o campo `imagem` nunca se refere a uma foto ou figura.

- **A figura é a pergunta.** A resposta sai de **reconhecer o que a imagem mostra**: "Que cidade é esta?", "Que animal é este?", "Qual é este pokémon?", "Quem pintou este quadro?", "Em que museu fica este quadro?". Teste: se trocar "este animal" pelo nome dele deixasse a pergunta igualmente boa, a figura é só enfeite, e a pergunta está errada.
- **O enunciado é curto** e diz o que se deve reconhecer (cidade, animal, monumento). Pode trazer uma pista que ajude, desde que não entregue a resposta.
- **Âncora e ângulo:** a âncora é o que aparece na figura. Perguntar o que ela é dá o ângulo `identidade`; perguntar algo que só se sabe depois de reconhecê-la usa o ângulo correspondente (`autoria` para o pintor, `lugar` para o museu). As regras de variedade (§9), que limitam `identidade`, valem para os lotes do gerador e não para as perguntas com figura.
- **Tipos de figura:** lugares (cidades, monumentos, paisagens), animais, plantas, objetos e artesanato, festas populares, contornos de mapa, personagens de lendas e obras de arte em domínio público (pinturas, gravuras). Obras com direitos autorais, como as de Tarsila do Amaral, Portinari ou Dalí, ficam de fora.
- **Um único assunto por imagem:** nada de montagens nem pranchas com várias espécies. Vale foto; ilustração ou escultura só para o que não pode ser fotografado, como os personagens de lendas (Saci, Mula sem cabeça).
- **Pessoas:** figuras públicas, ou brincantes e participantes de festas públicas (Parintins, bumba meu boi, cavalhadas). Fotos de pessoas comuns em outros contextos continuam proibidas.
- **Recorte permitido:** uma placa ou legenda que entregue a resposta pode ser cortada da imagem, já que as licenças livres permitem obras derivadas.
- **Só imagens do Wikimedia Commons**, com licença livre (CC BY, CC BY-SA ou domínio público). Autor e licença são sempre registrados.
- **Exceção, Pokémon:** a arte oficial, com o crédito "© Nintendo / Creatures / GAME FREAK", e a Bulbapedia como fonte da âncora e da pergunta. A imagem vem do Bulbagarden Archives ou, como a Bulbapedia bloqueia acesso automatizado, da mesma arte oficial no repositório público do PokéAPI (`raw.githubusercontent.com/PokeAPI/sprites`), que fica registrado em `origem`. É uso privado, num jogo entre amigos, e não licença livre.
- **Proibido:** capas de álbuns, pôsteres, logotipos e fotos de imprensa.

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
