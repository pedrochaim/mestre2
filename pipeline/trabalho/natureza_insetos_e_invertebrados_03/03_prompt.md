Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Insetos e Invertebrados** (tema **Natureza**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Abelha",
      "descricao": "Abelha-europeia (Apis mellifera), inseto social produtor de mel e polinizador."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O mel que as abelhas guardam nos favos é feito principalmente de qual líquido açucarado que elas colhem nas flores?",
    "resposta": "Néctar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Honey",
      "https://pt.wikipedia.org/wiki/Mel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Honey",
        "situacao": "ok",
        "texto": "Honey is a sweet and viscous substance made by several species of bees, the best-known of which are honey bees. Honey is made and stored to nourish bee colonies. Bees produce honey by gathering and then refining the sugary secretions of plants (primarily floral nectar) or the secretions of other insects, like the honeydew of aphids.\n[…]\nIn Apis mellifera, the honey stomach holds about 40 mg of liquid. This is about half the weight of an unladen bee. Collecting this quantity in nectar can require visits to more than one thousand flowers. When nectar is plentiful, it can take a bee more than an hour of ceaseless work to collect enough nectar to fill its honey crop. Salivary enzymes and proteins from the bee's hypopharyngeal gland are secreted into the nectar once it is in the bee's honey stomach.\n[…]\nHoney bees are not the only eusocial insects to produce honey. All non-parasitic bumblebees and stingless bees produce honey. Some wasp species, such as Brachygastra lecheguana and Brachygastra mellifica, found in South and Central America, are known to feed on nectar and produce honey. Other wasps, such as Polistes versicolor, also consume honey.\n[…]\nMonofloral honey is made primarily from the nectar of one type of flower. Monofloral honeys have distinctive flavors and colors because of differences between their principal nectar sources. To produce monofloral honey, beekeepers keep beehives in an area where the bees have access, as far as possible, to only one type of flower. In practice, a small proportion of any monofloral honey will be from other flower types.\n[…]\nHoneydew honey has a stronger and less sweet flavor than nectar-based honey, and European countries have been the primary market for honeydew honey. In Greece, pine honey, a type of honeydew honey, constitutes 60–65% of honey production."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mel",
        "situacao": "ok",
        "texto": "O mel (plural: meles ou méis) é um alimento, geralmente encontrado em estado líquido viscoso e açucarado, que é produzido pelas abelhas a partir do néctar recolhido de flores e processado pelas enzimas digestivas desses insetos, sendo armazenado em favos em suas colmeias para servir-lhes de alimento.\n[…]\nDurante a procura de alimento, as abelhas utilizam parte do néctar que colhem para alimentar os seus músculos de voo. A maior parte do néctar colhido não é utilizada para alimentar diretamente os insetos, mas sim destinada à regurgitação, à digestão enzimática e, por último, ao armazenamento a longo prazo em forma de mel.\n[…]\nQuer se alimente de néctar quer de melada, a abelha suga estes fluídos através da sua probóscide, que leva o líquido para o papo de mel, ou \"bucho de mel\", da abelha. Esta cavidade encontra-se logo acima do seu estômago alimentar, sendo este último o que digere o pólen e os açúcares consumidos por uma abelha para a sua própria alimentação.\n[…]\nNa Apis mellifera o estômago de mel contém cerca de 40 mg de líquido. Isto equivale aproximadamente a metade do peso de uma abelha sem carga. Colher essa quantidade em néctar pode exigir visitas a mais de mil flores. Quando o néctar é abundante, uma abelha pode demorar mais de uma hora de trabalho incessante a colher néctar suficiente para encher o seu estomago de mel.\n[…]\nEstas concentrações de açúcar só podem ser alcançadas perto da temperatura ambiente por evaporação de uma solução menos concentrada, neste caso o néctar. Por razões osmóticas tais concentrações elevadas de açúcar são extremamente desfavoráveis para a reprodução microbiológica e, consequentemente, toda a fermentação é interrompida. As abelhas tapam então as células do mel com cera. Isto isola-as da contaminação e evita que continuem a evaporar."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Abelha",
      "descricao": "Abelha-europeia (Apis mellifera), inseto social produtor de mel e polinizador."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Além dos dois grandes olhos compostos, a abelha tem pequenos olhos simples no alto da cabeça. Quantos olhos ela tem ao todo?",
    "resposta": "Cinco",
    "distratores": [
      "Quatro",
      "Seis",
      "Oito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Western_honey_bee",
      "https://en.wikipedia.org/wiki/Simple_eye_in_invertebrates"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Western_honey_bee",
        "situacao": "ok",
        "texto": "The western honey bee (Apis mellifera) is the most common of the 7–12 species of honey bees worldwide. The genus name Apis is Latin for 'bee', and mellifera is the Latin for 'honey-bearing' or 'honey-carrying', referring to the species' production of honey.\n[…]\nAs of October 28, 2006, the Honey Bee Genome Sequencing Consortium fully sequenced and analyzed the genome of Apis mellifera, the western honey bee. Since 2007, attention has been devoted to colony collapse disorder, a decline in western honey bee colonies in a number of regions.\n[…]\nSome subspecies of Apis mellifera show naturally varroa sensitive hygiene, for example Apis mellifera lamarckii and Apis mellifera carnica. Improved cultural practices and chemical treatments against Varroa mites saved most commercial operations; new bee breeds are beginning to reduce beekeeper dependence on acaricides.\n[…]\nHygienic behavior targeting brood cells consists of three main steps: detection, uncapping and removal. Adults are able to identify the distinct odors associated with healthy or unhealthy broods and subsequently remove the unhealthy ones from the hive. Hygienic behavior effectively responds to Varroa mites, the fungus Ascosphaera apis which causes chalkbrood diseases, and the P. larvae. Freeze-killed brood assay is a simple strategies to assess the hygienic behavior of honey bee colonies.\n[…]\nApart from Apis mellifera, there are six other species in the genus Apis. These are Apis andreniformis, Apis cerana, Apis dorsata, Apis florea, Apis koschevnikovi, and Apis nigrocincta. These species all originated in southern and southeastern Asia. Only Apis mellifera is thought to have originated in Europe, Asia, and Africa.\n[…]\nIFAS: Apis mellifera\n[…]\nSound recordings of Apis mellifera at BioAcoustica"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Simple_eye_in_invertebrates",
        "situacao": "ok",
        "texto": "A simple eye or ocellus (sometimes called a pigment pit) is a form of eye or an optical arrangement which has a single lens without the sort of elaborate retina that occurs in most vertebrates. These eyes are called \"simple\" to distinguish them from \"compound eyes\", which have multiple lenses; they are not necessarily simple in the sense of being uncomplicated or basic.\n[…]\nStemmata (singular stemma) are a class of simple eyes. Many kinds of holometabolous larvae bear no other form of eyes until they enter their final stage of growth. Adults of several orders of hexapods also have stemmata, and never develop compound eyes at all. Examples include fleas, springtails, and Thysanura.\n[…]\nAlthough stemmata are simple eyes, some kinds (such as those of the larvae of Lepidoptera and especially those of Tenthredinidae, a family of sawflies) are only \"simple\" in that they represent immature or embryonic forms of the compound eyes of the adult. They can possess a considerable degree of acuity and sensitivity, and can detect polarized light. They may be optimized for light sensitivity, as opposed to detailed image formation.\n[…]\nA number of genetic pathways are responsible for the occurrence and positioning of the ocelli. The orthodenticle gene is allelic to ocelliless, a mutation that stops ocelli from being produced. In Drosophila, the rhodopsin Rh2 is only expressed in simple eyes.\n[…]\nWhile (in Drosophila at least) the eyeless and dachshund genes are both expressed in the compound eye but not the simple eye, no reported \"developmental\" genes are uniquely expressed in the simple eye.\n[…]\nEpidermal growth factor receptor (Egfr) promotes the expression of orthodenticle and possibly eyes absent (Eya) and as such is essential for simple eye formation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abelha-europeia",
        "situacao": "ok",
        "texto": "A abelha-europeia (Apis mellifera) é uma abelha social, de origem europeia, cujas obreiras medem de 12 mm a 13 mm de comprimento e apresentam pelos do tórax mais escuros. Também é chamada abelha-alemã, abelha-comum, abelha-da-Europa, abelha-de-mel, abelha-doméstica, abelha-do-reino, abelha-escura, abelha-Europa, abelha-preta e oropa. A abelha comum ocidental é originária da Ásia e da Europa e foi \n[…]\nA abelha Apis mellifera Linnaeus, 1758 distribui-se naturalmente na África, Médio Oriente e Europa e artificialmente por outros continentes. Essa espécies divide-se em mais de 24 subespécies que estudos moleculares e morfológicos possibilitaram agrupar em 4 linhagens evolutivas (A, M, C, O). As linhagens A incluem as subespécies que ocorrem em África e O no Médio Oriente, as linhagens C e M incluem as subespécies europeias.\n[…]\nNa Península Ibérica ocorreu uma hibridação natural entre as linhagens A e M, a subespécie Apis mellifera iberiensis.\n[…]\nApis mellifera caucasia (Abelha-caucasiana)\n[…]\nApis mellifera ligustica (Abelha-italiana)\n[…]\nApis mellifera mellifera (Abelha-alemã)\n[…]\nApis mellifera carnica\n[…]\nApis mellifera remipes\n[…]\nApis mellifera iberiensis ou Apis mellifera iberica\n[…]\nApis mellifera cecropia\n[…]\nApis mellifera cypria\n[…]\nApis mellifera ruttneri\n[…]\nApis mellifera sicula\n[…]\nAbelha-africana (Apis m. scuttelata)\n[…]\nApis mellifera capensis\n[…]\nApis mellifera monticola\n[…]\nApis mellifera sahariensis\n[…]\nApis mellifera intermissa\n[…]\nApis mellifera major\n[…]\nApis mellifera adansonii\n[…]\nApis mellifera unicolor\n[…]\nApis mellifera lamarckii\n[…]\nApis mellifera litorea\n[…]\nApis mellifera nubica\n[…]\nApis mellifera jemenitica\n[…]\nApis mellifera macedonica\n[…]\nApis mellifera meda\n[…]\nApis mellifera adamii\n[…]\nApis mellifera armeniaca\n[…]\nApis mellifera anatolica\n[…]\nApis mellifera syriaca\n[…]\nApis mellifera pomonella\n[…]\nAbelha africanizada\n[…]\nApis mellifera, Animal Diversity Web. Acedido em 16 de Janeiro de 2013.\n[…]\nEuropean honey bee, BBC. Acedido em 16 de Janeiro de 2013.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Aranha",
      "descricao": "Aracnídeos da ordem Araneae, predadores de oito patas que produzem seda."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A seda das aranhas sai por pequenos órgãos na ponta do abdômen. Como se chamam esses órgãos?",
    "resposta": "Fiandeiras",
    "fonte": [
      "https://en.wikipedia.org/wiki/Spinneret",
      "https://en.wikipedia.org/wiki/Spider_silk"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Spinneret",
        "situacao": "ok",
        "texto": "A spinneret is a silk-spinning organ of a spider or the larva of an insect. Some adult insects also have spinnerets, such as those borne on the forelegs of Embioptera. Spinnerets are usually on the underside of a spider's opisthosoma, and are typically segmented. While most spiders have six spinnerets, some have two, four, or eight. They can move both independently and in concert.\n[…]\nSpinneret morphology can help arachnologists identify the taxon of a specimen and the specific morphology of a spigot can determine its use as well. For example, flagelliform spigot is unique to Araneoidea, and another kind of spigot found in sets of three, referred to as cylindrical gland spots, are found only in females and used for making egg sacs. The desert grass spider, Agelenopsis aperta, has especially prominent spinnerets that extend out of the end of their abdomen."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Spider_silk",
        "situacao": "ok",
        "texto": "Spider silk is a protein fibre or silk spun by spiders. Spiders use silk to make webs or other structures that function as adhesive traps to catch prey, to entangle and restrain prey before biting, to transmit tactile information, or as nests or cocoons to protect their offspring. They can use the silk to suspend themselves from height, to float through the air, or to glide away from predators. Mo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fieira",
        "situacao": "ok",
        "texto": "Fieira ou fiandeira é a designação dada ao órgão produtor de seda das aranhas e das larvas de insectos construtores de casulos. Embora a presença de fieiras em organismos adultos esteja essencialmente restrita às aranhas, alguns insectos adultos, entre os quais o grupo dos Embioptera, também apresentam fieiras, embora localizadas nas pernas frontais e não no abdómen.\n[…]\nA seda de aranha é produzida nas fieiras, um conjunto de apêndice que as aranhas possuem na região abdominal, cuja função é dar suporte às glândulas produtoras da seda de aranha. Estes apêndices, que nas aranhas são os únicos na região abdominal, localizam-se na parte final do opistossoma (abdómen) ou na zona central da parte ventral deste (nas aranhas primitivas).\n[…]\nNo processo de extrusão, a solução originadora da seda é forçada através de minúsculos orifícios extrusores, acção que permite enrolar as proteínas em estruturas moleculares complexas estreitamente espaçadas, as quais determinam as características mecânicas da fibra produzida. Após este procedimento, a seda de aranha é passado através da fieira para o exterior, ganhando quase de imediato as suas propriedades finais.\n[…]\nAs glândulas sericígenas são um tipo de glândula especializada das aranhas que secretam as proteínas e os compostos adjuvantes utilizados na produção da seda de aranha. Conhecem-se diferentes tipos de glândulas, cada uma delas capaz de produzir diferentes tipos de seda, com características físico-químicas que variam consoante a espécie e o objectivo a que se destina (a seda utilizada nas teias difere da utilizada nos casulos ou no suporte da aranha).\n[…]\nGlândulas tubuliformes — segregam a seda usada para revestir a parte interna dos tubos onde as aranhas se abrigam e a parte interna dos sacos ovígeros;\n[…]\nGlândulas coronadas — produzem fio de seda adesiva.\n[…]\nSeda\n[…]\nSeda de aranha\n[…]\nTeia de aranha",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Aranha",
      "descricao": "Aracnídeos da ordem Araneae, predadores de oito patas que produzem seda."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Filhotes de muitas espécies de aranha viajam longas distâncias pelo ar, mesmo sem ter asas. Como eles fazem isso?",
    "resposta": "Levados pelo vento em fios de seda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ballooning_(spider)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ballooning_(spider)",
        "situacao": "ok",
        "texto": "Ballooning, sometimes called kiting, is a process by which spiders, and some other small invertebrates, move through the air by releasing one or more gossamer threads to catch the wind, causing them to become airborne at the mercy of air currents and electric fields. A 2018 study concluded that electric fields provide enough force to lift spiders in the air, and possibly elicit ballooning behavior\n[…]\nBallooning can be dangerous due to predators and the unpredictable nature of long-distance ballooning, which may bring individuals to an unfavorable environment.\n[…]\nMany spiders use especially fine silk called gossamer to lift themselves off a surface, and silk also may be used by a windblown spider to anchor itself to stop its journey. The term \"gossamer\" is used metaphorically for any exceedingly fine thread or fabric. Biologists also apply the term \"balloon silk\" to the threads that mechanically lift and drag systems."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Formiga",
      "descricao": "Inseto social da família Formicidae, da ordem dos himenópteros."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Quando uma formiga acha comida, logo surge uma fila de companheiras seguindo o mesmo caminho. O que ela deixou marcado no trajeto?",
    "resposta": "Uma trilha de feromônio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ant",
      "https://en.wikipedia.org/wiki/Pheromone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ant",
        "situacao": "ok",
        "texto": "Ants are eusocial insects of the family Formicidae and, along with the related wasps and bees, belong to the order Hymenoptera. Ants evolved from vespoid wasp ancestors in the Cretaceous period. More than 13,800 of an estimated total of 22,000 species have been described. They are easily identified by their geniculate (elbowed) antennae and the distinctive node-like structure that forms their slen\n[…]\nThe family name Formicidae is derived from the Latin formīca (\"ant\") from which the words in other Romance languages, such as the Portuguese formiga, Italian formica, Spanish hormiga, Romanian furnică, and French fourmi are derived. The family belongs to the order Hymenoptera, which also includes sawflies, bees, and wasps. Ants evolved from a lineage within the stinging wasps, and a 2013 study suggests that they are a sister group of the Apoidea.\n[…]\n(2021) suggest that the common ancestors of ants and apoids within the Formicapoidina probably existed as early as in the end of the Jurassic period, before divergence in the Cretaceous.\n[…]\nStudies on ants have tested hypotheses in ecology and sociobiology, and have been particularly important in examining the predictions of theories of kin selection and evolutionarily stable strategies. Ant colonies may be studied by rearing or temporarily maintaining them in formicaria, specially constructed glass framed enclosures. Individuals may be tracked for study by marking them with dots of colours.\n[…]\nAnts also are quite popular inspiration for many science fiction insectoids, such as the Formics of Ender's Game, the Bugs of Starship Troopers, the giant ants in the films Them! and Empire of the Ants, Marvel Comics' super hero Ant-Man, and ants mutated into super-intelligence in Phase IV."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pheromone",
        "situacao": "ok",
        "texto": "In biology, a pheromone (from Ancient Greek  φέρω (phérō) 'to bear' and  hormone) is a chemical that is secreted or excreted by an organism, which triggers a social response in members of the same species. There are alarm pheromones, food trail pheromones, sex pheromones, and many others that affect behavior or physiology. Pheromones are used by many organisms, from basic unicellular prokaryotes t"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Formiga",
        "situacao": "ok",
        "texto": "As formigas são insetos eussociais da família Formicidae e, juntamente com as vespas e abelhas, pertencem à ordem dos Himenópteros. As formigas evoluíram de ancestrais das vespas vespóides no período Cretáceo. Mais de 13 800 de um total estimado de 22 mil espécies foram classificadas. Eles são facilmente identificados por suas antenas geniculadas (cotoveladas) e pela distinta estrutura em forma de\n[…]\nAs formigas se comunicam entre si usando feromônios, sons e toque. Como a maioria das formigas vive no solo, elas usam a superfície do solo para deixar rastros de feromônios que podem ser seguidos por outras formigas. Nas espécies que se alimentam em grupos, uma forrageira que encontra alimento marca uma trilha no caminho de volta à colônia; essa trilha é seguida por outras formigas, essas formigas então reforçam a trilha quando voltam com comida para a colônia.\n[…]\nTrilhas bem-sucedidas são seguidas por mais formigas, reforçando melhores rotas e identificando gradativamente o melhor caminho.\n[…]\nAs formigas usam feromônios para mais do que apenas fazer trilhas, uma formiga esmagada emite um feromônio de alarme que envia as formigas próximas a um frenesi de ataque e atrai mais formigas de mais longe. Várias espécies de formigas até usam \"feromônios de propaganda\" para confundir as formigas inimigas e fazê-las lutar entre si.\n[…]\nEm espécies de formigas com castas rainhas, quando a rainha dominante para de produzir um feromônio específico, as operárias começam a criar novas rainhas na colônia.\n[…]\nAs formigas forrageiras viajam distâncias de até 200 metros de seu ninho e trilhas de cheiro permitem que elas encontrem o caminho de volta mesmo no escuro. Em regiões quentes e áridas, as formigas que se alimentam durante o dia enfrentam a morte por dessecação, portanto a capacidade de encontrar o caminho mais curto de volta ao ninho reduz esse risco.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Formiga",
      "descricao": "Inseto social da família Formicidae, da ordem dos himenópteros."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na classificação científica dos insetos, as formigas pertencem à mesma ordem de quais destes?",
    "resposta": "Abelhas e vespas",
    "distratores": [
      "Cupins",
      "Baratas",
      "Besouros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hymenoptera",
      "https://en.wikipedia.org/wiki/Ant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hymenoptera",
        "situacao": "ok",
        "texto": "Hymenoptera is a large order of insects, comprising the sawflies, wasps, bees, and ants. Over 150,000 living species of Hymenoptera have been described, in addition to over 2,000 extinct ones. Many of the species are parasitic. Females typically have a special ovipositor for inserting eggs into hosts or places that are otherwise inaccessible. This ovipositor is often modified into a stinger.\n[…]\nSingle queen colonies of the narrow headed ant Formica exsecta illustrate the possible deleterious effects of increased homozygosity. Colonies of this species which have more homozygous queens will age more rapidly, resulting in reduced colony survival.\n[…]\nInsetos do Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ant",
        "situacao": "ok",
        "texto": "Ants are eusocial insects of the family Formicidae and, along with the related wasps and bees, belong to the order Hymenoptera. Ants evolved from vespoid wasp ancestors in the Cretaceous period. More than 13,800 of an estimated total of 22,000 species have been described. They are easily identified by their geniculate (elbowed) antennae and the distinctive node-like structure that forms their slen\n[…]\nThe family name Formicidae is derived from the Latin formīca (\"ant\") from which the words in other Romance languages, such as the Portuguese formiga, Italian formica, Spanish hormiga, Romanian furnică, and French fourmi are derived. The family belongs to the order Hymenoptera, which also includes sawflies, bees, and wasps. Ants evolved from a lineage within the stinging wasps, and a 2013 study suggests that they are a sister group of the Apoidea.\n[…]\n(2021) suggest that the common ancestors of ants and apoids within the Formicapoidina probably existed as early as in the end of the Jurassic period, before divergence in the Cretaceous.\n[…]\nStudies on ants have tested hypotheses in ecology and sociobiology, and have been particularly important in examining the predictions of theories of kin selection and evolutionarily stable strategies. Ant colonies may be studied by rearing or temporarily maintaining them in formicaria, specially constructed glass framed enclosures. Individuals may be tracked for study by marking them with dots of colours.\n[…]\nAnts also are quite popular inspiration for many science fiction insectoids, such as the Formics of Ender's Game, the Bugs of Starship Troopers, the giant ants in the films Them! and Empire of the Ants, Marvel Comics' super hero Ant-Man, and ants mutated into super-intelligence in Phase IV."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Himen%C3%B3pteros",
        "situacao": "ok",
        "texto": "Himenópteros (Hymenoptera) são uma das maiores ordens viventes de insetos (assim delimitando os insetos himenópteros), compreendendo os grupos de insetos entendidos pelos leigos como as vespas, as abelhas e as formigas, além de diversos outros insetos menos populares (p.ex. as inúmeras vespas parasitoides de diferentes tamanhos, bem menos comuns de serem vistos).\n[…]\nOs machos diploides são conhecidos em muitas espécies de formigas, abelhas e vespas.\n[…]\nAlguns Hymenoptera têm também importância médico-veterinária: várias vespas, abelhas e formigas possuem toxinas potentes que podem causar acidentes graves, particularmente em pessoas com hipersensibilidade (alergia). Em contrapartida, essas toxinas também podem ser utilizadas na fabricação de remédios; de fato, o veneno de várias abelhas é importante no combate ao reumatismo.\n[…]\nEm oposição às vespas-da-madeira e afins, consideradas mais basais informalmente agrupadas na antiga subordem \"Symphyta\", a maioria dos insetos himenópteros agrupam-se na autêntica subordem Apocrita, que abrange as vespas, abelhas e formigas. Neste grupo, o primeiro segmento abdominal fundiu-se indissociavelmente ao tórax, passando a ser denominado de propódeo. Este conjunto tórax + propódeo é então chamado nesta ordem de insetos de mesossoma, representando o tórax aparente.\n[…]\nDentro da subordem Apocrita, tradicionalmente separavam-se as linhagens em duas infraordens: \"Parasitica\" e Aculeata, em que a primeira compreendia as linhagens que mantinham hábitos de vida predominantemente parasitoides e eram normalmente incapazes de ferroar seres humanos, e a segunda compreendia as mais conhecidas vespas, abelhas e formigas que conseguem ferroar os seres humanos, pois nestas linhagens o ovipositor das fêmeas foi modificado em um agulhão pontudo usado principalmente como arma de defesa: o ferrão.\n[…]\nApoidea (abelhas)\n[…]\nVespidae (vespas)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Borboleta",
      "descricao": "Inseto alado da superfamília Papilionoidea, de asas grandes e coloridas."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Antes de pôr os ovos, a borboleta fêmea pousa numa folha e a tamborila para sentir o gosto da planta. Com que parte do corpo?",
    "resposta": "Com as patas",
    "distratores": [
      "Com as antenas",
      "Com a tromba",
      "Com as asas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Butterfly"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Butterfly",
        "situacao": "ok",
        "texto": "Butterflies are winged insects from the lepidopteran superfamily Papilionoidea, characterised by large, often brightly coloured wings that often fold together when at rest, and a conspicuous, fluttering flight. The oldest butterfly fossils have been dated to the Paleocene, about 56 million years ago, though molecular evidence suggests that they likely originated in the Cretaceous.\n[…]\nTraditionally, butterflies were divided into the superfamilies Papilionoidea, Hesperioidea and the moth-like Hedyloidea. Recent work has discovered that Hesperiidae and Hedylidae, the only families within \"Hesperioidea\" and \"Hedyloidea\", are nested within the Papilionoidea, meaning that Papilionoidea would be synonymous with Rhopalocera. The relationships between the 7 families are extremely well resolved, which is summarised in the below cladogram.\n[…]\nCamouflage is found in many butterflies. Some like the oakleaf butterfly and autumn leaf are remarkable imitations of leaves. As caterpillars, many defend themselves by freezing and appearing like sticks or branches. Others have deimatic behaviours, such as rearing up and waving their front ends which are marked with eyespots as if they were snakes. Some papilionid caterpillars such as the giant swallowtail (Papilio cresphontes) resemble bird droppings so as to be passed over by predators.\n[…]\nPapilionoidea on the Tree of Life Archived 11 December 2008 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Borboleta",
        "situacao": "ok",
        "texto": "Borboletas, panapanás ou panapanãs são insetos alados da superfamília lepidóptera Papilionoidea, caracterizados por asas grandes, frequentemente de cores vivas, que muitas vezes se dobram juntas quando em repouso, e por um voo conspícuo e esvoaçante. Os fósseis de borboletas mais antigos foram datados do Paleoceno, há cerca de 56 milhões de anos, embora evidências moleculares sugiram que elas prov\n[…]\nA natureza dessa cola foi pouco estudada, mas no caso de Pieris brassicae, ela começa como uma secreção granular amarelo-pálida contendo proteínas acidofílicas. É viscosa e escurece quando exposta ao ar, tornando-se um material gomoso insolúvel em água que logo endurece. Borboletas do gênero Agathymus não fixam seus ovos a uma folha; em vez disso, os ovos recém-postos caem na base da planta.\n[…]\nAlgumas borboletas de regiões temperadas, como Nymphalis antiopa, põem seus ovos na primavera e fazem-nos eclodir no verão.\n[…]\nLagartas como as do gênero Calpodes (família dos hesperiídeos) possuem um sistema traqueal especializado no 8.º segmento que funciona como um pulmão primitivo. As lagartas de borboletas possuem três pares de pernas verdadeiras nos segmentos torácicos e até seis pares de patas falsas surgindo dos segmentos abdominais. Essas falsas pernas possuem anéis de pequenos ganchos plantares, acionados hidrostaticamente, que ajudam a lagarta a agarrar-se ao substrato.\n[…]\nAlgumas, como a borboleta-folha-de-carvalho e Doleschallia bisaltide, são imitações notáveis de folhas. Como lagartas, muitas se defendem permanecendo imóveis e aparentando ser gravetos ou galhos. Outras apresentam comportamentos deimáticos, como erguer-se e balançar a extremidade anterior do corpo, marcada com manchas oculares, como se fossem serpentes. Algumas lagartas de papilionídeos, como Papilio cresphontes, assemelham-se a excrementos de aves para serem ignoradas pelos predadores.\n[…]\nBorboletas de Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Borboleta",
      "descricao": "Inseto alado da superfamília Papilionoidea, de asas grandes e coloridas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome científico da ordem das borboletas e mariposas, lepidópteros, vem do grego e significa asas cobertas de quê?",
    "resposta": "Escamas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lepidoptera"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lepidoptera",
        "situacao": "ok",
        "texto": "Lepidoptera ( LEP-ih-DOP-tər-ə) or lepidopterans are an order of winged insects which include butterflies and moths. About 180,000 species of the Lepidoptera have been described, representing 8.6% of the total described species of living organisms, making it the second largest insect order (behind Coleoptera) with 133 families and 43 superfamilies, and one of the most widespread and widely recogni\n[…]\nSexual dimorphism is the occurrence of differences between males and females. In Lepidoptera, it is widespread and almost completely set genetically. It is present in all families of the Papilionoidea and more prominent in the Lycaenidae, Pieridae, and some of the Nymphalidae. Apart from color variation, secondary sexual characteristics may be present. Different genotypes may be expressed at the same time.\n[…]\nSome species are poisonous, such as the monarch butterfly, Atrophaneura species, as well as Papilio antimachus, and the birdwings. They obtain their toxicity by sequestering chemicals from the plants they eat. Some Lepidoptera manufacture their own toxins. Predators that eat poisonous butterflies and moths may become sick and vomit violently, learning not to eat those species, and other species with similar markings.\n[…]\nLinnaeus in Systema Naturae (1758) recognized three divisions of the Lepidoptera: Papilio, Sphinx and Phalaena, with seven subgroups in Phalaena. These persist today as 9 of the superfamilies of Lepidoptera. Other works on classification followed including those by Michael Denis & Ignaz Schiffermüller (1775), Johan Christian Fabricius (1775) and Pierre André Latreille (1796).\n[…]\nThe oldest genuine butterflies of the superfamily Papilionoidea have been found in the Paleocene MoClay or Fur Formation of Denmark. Well-preserved fossil lepidopterans include the Eocene Prodryas persephone from the Florissant Fossil Beds.\n[…]\nSwedish Moths and Butterflies Lepidoptera (English)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lepid%C3%B3pteros",
        "situacao": "ok",
        "texto": "Lepidópteros (Lepidoptera) é uma ordem de insetos que inclui as borboletas e mariposas. Os lepidópteros compõem a segunda maior diversidade de insetos do planeta e são encontrados em quase todas as regiões do mundo, principalmente em locais tropicais. São estimadas 180 000 espécies de lepidópteros distribuídas em 34 superfamílias e 130 famílias. Deles, 12% são borboletas, sendo a segunda maior ord\n[…]\nO nome Lepidoptera é derivado do grego e significa “asa com escamas”. Essa é a característica mais marcante da Ordem: dois pares de asas membranosas cobertas por escamas. São as escamas, inclusive, que dão às borboletas e mariposas as cores e desenhos pelos quais são conhecidas.\n[…]\nOs indivíduos desse grupo apresentam quatro asas relativamente grandes quando comparadas com outros grupos de insetos. As asas são membranas, finas e frágeis, além de serem recobertas por escamas, que podem ser facilmente destacáveis. Contudo, as escamas são microscópicas, pequenas demais para conseguir observá-las a olho nu. Quando uma pessoa toca na asa de uma borboleta, por exemplo, uma fina poeira é depositada em seus dedos.\n[…]\nComo dito anteriormente, os indivíduos presentes na ordem Lepidoptera apresentam duas antenas. Contudo, assim como as asas, existem diferenças entre essas estruturas sensoriais quando comparadas borboletas e mariposas. Quando as antenas são filiformes e intumescidas na extremidade apical, ou seja, antenas que se assemelham a um fio com um inchaço na sua extremidade, têm-se antenas de borboletas.\n[…]\nDepois de Coleoptera, Lepidoptera é o grupo mais diverso de insetos, contando quase 200 000 espécies conhecidas, sendo a grande maioria de mariposas e apenas cerca de 15 mil espécies, de borboletas. As lepidópteras são uma ordem da classe Insecta (ou Hexapoda), no filo Arthropoda, reino Animalia e fazem parte de um grupo de animais conhecido como “invertebrados”.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Polvo",
      "descricao": "Molusco cefalópode marinho de oito braços e corpo mole, do gênero Octopus e afins."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O polvo tem sangue azul e um sistema circulatório bem diferente do nosso. Quantos corações ele tem?",
    "resposta": "Três",
    "distratores": [
      "Um",
      "Dois",
      "Oito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Octopus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Octopus",
        "situacao": "ok",
        "texto": "An octopus (pl.: octopuses or octopodes) is a soft-bodied, eight-limbed mollusc of the order Octopoda (, ok-TOP-ə-də). The order consists of some 300 species and is grouped within the class Cephalopoda with squids, cuttlefish, and nautiloids. Like other cephalopods, an octopus is bilaterally symmetric with two eyes and a beaked mouth at the centre point of the eight limbs. An octopus can radically\n[…]\nThe interior surfaces of the arms are covered with circular, adhesive suckers. The suckers allow the octopus to secure itself in place or to handle objects. Each sucker is typically circular and bowl-like and has two distinct parts: an outer disc-shaped infundibulum and an inner cup-like acetabulum, both of which are thick muscles covered in connective tissue. A chitinous cuticle lines the outer surface.\n[…]\nOctopuses have a closed circulatory system, in which the blood remains inside blood vessels. They have three hearts; a systemic or main heart that circulates blood around the body and two branchial or gill hearts that pump it through the two gills. The systemic heart becomes inactive when the animal is swimming. Thus, the octopus loses energy quickly and mostly crawls. Octopus blood contains the copper-rich protein haemocyanin to transport oxygen.\n[…]\nSome robotics research is exploring biomimicry of octopus features. Octopus arms can move and sense largely autonomously without intervention from the animal's central nervous system. In 2015 a team in Italy built soft-bodied robots able to crawl and swim, requiring only minimal computation. In 2017, a German company made an arm with a soft pneumatically controlled silicone gripper fitted with two rows of suckers.\n[…]\nMy Octopus Teacher – 2020 documentary film by Pippa Ehrlich and James Reed\n[…]\nOctopuses – Overview at the Encyclopedia of Life\n[…]\n\"Can We Really Be Friends with an Octopus?\" at Hakai Magazine, 11 January 2022"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Polvo",
        "situacao": "ok",
        "texto": "Os polvos são moluscos marinhos da classe Cephalopoda, da ordem Octopoda (oito pés), possuindo oito braços fortes e com ventosas dispostos à volta da boca. Como o resto dos cefalópodes, o polvo tem um corpo mole, sem esqueleto interno (ao contrário das lulas) nem externo, como o argonauta. Como meios de defesa, o polvo possui a capacidade de largar tinta, de mudar a sua cor (camuflagem, através do\n[…]\nPrincipalmente conhecidos pela capacidade de liberar uma tinta quando em fuga, os polvos possuem três mecanismos típicos de defesa: glândulas de tinta, camuflagem e autotomia dos braços.\n[…]\nA camuflagem dos polvos é obtida através de algumas células especializadas de sua pele, podendo alterar a cor aparente e a opacidade de sua epiderme. Cromatóforos contêm pigmentos de cores como amarelo, laranja, vermelho, marrom e preto; a maioria das espécies possui três desses pigmentos embora algumas espécies tenham dois ou quatro. Outra característica de mudança de cor é obtida através de alteração da refletividade de células iridoforas e leucoforas (branca).\n[…]\nQuando aceite pela fêmea, os espermatozoides do polvo alojados no hectocótilo vão em direção ao útero da fêmea. Dependendo da espécie, a fêmea deposita os ovos fecundados num \"ninho\" em fileiras ou isoladamente  que podem atingir até 200 000 ovos. Durante a maturação dos ovos, a fêmea cuida deles, evitando que algas e outros organismos os ataquem. Ela também facilita a circulação de correntes de água a fim de que os óvulos recebam oxigenação suficiente.\n[…]\nO polvo é em quantidade a quarta espécie mais pescada e desembarcada em Portugal. No triénio 2007 a 2009, as estimativas apontam para 9 950 toneladas por ano, em média, de desembarques. Se fizermos a análise por valor total pescado, é, ao lado da sardinha, uma das duas espécies com maior valor econômico, sendo mesmo a maior em 2008.\n[…]\nPaul, o polvo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Polvo",
      "descricao": "Molusco cefalópode marinho de oito braços e corpo mole, do gênero Octopus e afins."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No polvo, cerca de dois terços dos neurônios não ficam no cérebro. Em que parte do corpo eles estão?",
    "resposta": "Nos braços",
    "fonte": [
      "https://en.wikipedia.org/wiki/Octopus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Octopus",
        "situacao": "ok",
        "texto": "An octopus (pl.: octopuses or octopodes) is a soft-bodied, eight-limbed mollusc of the order Octopoda (, ok-TOP-ə-də). The order consists of some 300 species and is grouped within the class Cephalopoda with squids, cuttlefish, and nautiloids. Like other cephalopods, an octopus is bilaterally symmetric with two eyes and a beaked mouth at the centre point of the eight limbs. An octopus can radically\n[…]\nCirrate octopuses usually lack the ink sac.\n[…]\nOctopuses, like other coleoid cephalopods but unlike more basal cephalopods or other molluscs, are capable of greater RNA editing, changing the nucleic acid sequence of the primary transcript of RNA molecules, than any other organisms. Much editing is done in the nervous system, particularly for excitability and neuronal morphology. Coleoids rely mostly on ADAR enzymes for RNA editing, which requires large, double-stranded RNA structures.\n[…]\nThe genome of octopuses has also gone through several chromosomal fusions and rearrangements, unlike that of their closest relative the vampire squid, whose chromosomal structure is more basal and squid-like. The octopus genome is unremarkably bilaterian except for large developments of two gene families: protocadherins, which regulate the development of neurons; and the C2H2 zinc-finger transcription factors.\n[…]\nThis causes death by respiratory failure leading to cerebral anoxia. No antidote is known, but if breathing can be kept going artificially, patients recover within 24 hours. Bites have been recorded from captive octopuses of other species; they leave temporary swellings.\n[…]\nAnimal welfare groups have objected to the live consumption of octopuses on the basis that they can experience pain.\n[…]\nMy Octopus Teacher – 2020 documentary film by Pippa Ehrlich and James Reed\n[…]\nOctopuses – Overview at the Encyclopedia of Life\n[…]\n\"Can We Really Be Friends with an Octopus?\" at Hakai Magazine, 11 January 2022"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Polvo",
        "situacao": "ok",
        "texto": "Os polvos são moluscos marinhos da classe Cephalopoda, da ordem Octopoda (oito pés), possuindo oito braços fortes e com ventosas dispostos à volta da boca. Como o resto dos cefalópodes, o polvo tem um corpo mole, sem esqueleto interno (ao contrário das lulas) nem externo, como o argonauta. Como meios de defesa, o polvo possui a capacidade de largar tinta, de mudar a sua cor (camuflagem, através do\n[…]\nPolvos também têm um apurado sentido de toque físico. As suas ventosas são equipadas com quimioreceptores de forma que os polvos podem sentir o gosto do objeto que estão tocando. Seus braços contém sensores de tensão, permitindo-os saber o quanto eles estão distentidos, embora tenham pouca percepção de posicionamento espacial nesses movimentos: os receptores de tensão são insuficientes para que ele saiba corretamente a posição de seus braços.\n[…]\nPor ser um invertebrado fica pouco claro qual a capacidade cerebral necessária para permitir uma correta percepção do posicionamento de seus braços; a flexibilidade de seus braços é muito maior que a língua dos vertebrados. Como resultado os polvos tem um fraco sentido em reconhecer a forma dos objetos tocados. Ele consegue perceber as texturas dos objetos tocados mas não conseguem integrar, pelo tato, essas informações num objeto maior.\n[…]\nCerca de 1/3 dos neurônios do Polvo estão no cérebro. Teoricamente estes animais desenvolveram grande inteligência devido a necessidades de sobrevivência, por exemplo, devido à fragilidade de seu corpo (ausência de carapaça) em que a inteligência de seus ancestrais certamente aumentava as chances de fuga de ataques de predadores, além de auxiliar na captura com mais eficiência das diversas variedades de presas existentes em seu hábitat.\n[…]\nE é nesse aspecto que se assemelham aos humanos, mas com um cérebro completamente diferente.\n[…]\nPaul, o polvo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Tardígrado",
      "descricao": "Animais microscópicos de oito patas do filo Tardigrada, famosos pela resistência a condições extremas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Os tardígrados, animais microscópicos quase indestrutíveis, caminham de um jeito desajeitado sobre quantas patas?",
    "resposta": "Oito",
    "distratores": [
      "Quatro",
      "Seis",
      "Dez"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tardigrade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tardigrade",
        "situacao": "ok",
        "texto": "Tardigrades ( ), also known as water bears or moss piglets, are a phylum of eight-legged segmented micro-animals. They were first described by the German zoologist Johann August Ephraim Goeze in 1773, who called them Kleiner Wasserbär 'little water bear'. In 1776, the Italian biologist Lazzaro Spallanzani named them Tardigrada, which means \"slow walkers\".\n[…]\nTardigrades are usually about 0.5 mm (0.02 in) long when fully grown. They are short and plump, with four pairs of legs, each ending in claws (usually four to eight) or sticky pads. Tardigrades are prevalent in mosses and lichens and can readily be collected and viewed under a low-power microscope, making them accessible to students and amateur scientists.\n[…]\nA 2023 morphological analysis concluded that luolishaniids, a group of Cambrian lobopodians, might be the tardigrades' closest known relatives.\n[…]\nTardigrades are common in mosses and lichens on walls and roofs, and can readily be collected and viewed under a low-power microscope. If they are dry, they can be reanimated on a microscope slide by adding a little water, making them accessible to beginning students and amateur scientists. Current Biology attributed their popularity to \"their clumsy crawling [which] is about as adorable as can be.\" The zoologists James F. Fleming and Kazuhuru Arakawa called them \"a charismatic phylum\".\n[…]\nThey are popular enough to appear on merchandise like clothes, earrings, soft toys, and keychains, with crochet patterns for people to make their own tardigrades. The Dutch artist Arno Coenen created statues for St Eusebius' Church, Arnhem of microscopic organisms including a tardigrade and a coronavirus.\n[…]\nList of tardigrades of South Africa\n[…]\nTardigrada Register Archived 2015-03-20 at the Wayback Machine\n[…]\nNASA Astronomy Picture of the Day: Tardigrade in Moss (6 March 2013)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tardigrada",
        "situacao": "ok",
        "texto": "Tardigrada (do latim: tardus, lento + gradus, passo) é um filo de animais microscópicos segmentados, relacionados com os artrópodes. Popularmente são conhecidos como ursos-d'água ou como tardígrados, aportuguesamento derivado do nome do filo. Foram descritos pela primeira vez por J.A.E. Goeze em 1773. O nome Tardigrada foi dado por Spallanzani em 1777. São em maioria fitófagos, mas alguns são pred\n[…]\nOs tardígrados têm corpos aproximadamente cilíndricos, com quatro pares de pernas atarracadas. A maioria tem entre 0,3 e 0,5 mm de comprimento, mas a maior espécie pode alcançar 1,2 milímetros. O corpo tem quatro segmentos (sem contar a cabeça), quatro pares de pernas sem articulações, e oito patas com quatro a oito garras em cada. A carapaça contém quitina e é trocada periodicamente.\n[…]\nTardígrados são um dos poucos grupos de espécies capazes de suspender seu metabolismo de maneira reversível e entrar em um estado de criptobiose. Várias espécies sobrevivem regularmente em um estado desidratado por quase 10 anos. Dependendo do ambiente, eles podem entrar nesse estado através de anidrobiose, criobiose, osmobiose ou anoxibiose. Enquanto estão neste estado, seu metabolismo é reduzido a menos que 0,01% do normal, e a quantidade de água em seus corpos pode cair a até 1% do normal.\n[…]\nOs tardígrados são conhecidos por suportar os seguintes extremos enquanto neste estado:\n[…]\nDesidratação – tardígrados podem sobreviver quase por uma década quando em estado dessecado. Quando expostos a temperaturas extremamente baixas, a quantidade de água em seus organismos vai de 85% a apenas 3%. Como a água expande ao ser congelada, a desidratação assegura que os tardígrados não se fragmentem pela água em congelamento.\n[…]\nTardígrado sobrevive a dez dias de vácuo e radiação no espaço\n[…]\nTARDIGRADA NEWSLETTER\n[…]\nTardigrada - filmes e retratos\n[…]\ng1.globo.com/ Tardigrado: ser microscópico pode abrir caminhos no estudo de vacinas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Tardígrado",
      "descricao": "Animais microscópicos de oito patas do filo Tardigrada, famosos pela resistência a condições extremas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2007, num experimento europeu, tardígrados desidratados sobreviveram dez dias expostos a que ambiente extremo?",
    "resposta": "O vácuo do espaço",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tardigrade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tardigrade",
        "situacao": "ok",
        "texto": "Tardigrades ( ), also known as water bears or moss piglets, are a phylum of eight-legged segmented micro-animals. They were first described by the German zoologist Johann August Ephraim Goeze in 1773, who called them Kleiner Wasserbär 'little water bear'. In 1776, the Italian biologist Lazzaro Spallanzani named them Tardigrada, which means \"slow walkers\".\n[…]\nTardigrades have survived exposure to space. In 2007, samples of 30 tardigrades and 30 eggs, all dehydrated, were taken on the FOTON-M3 mission and exposed to vacuum, to both vacuum and UVA & B light, or to both vacuum and the full range of solar ultraviolet, for 10 days. Back on Earth, the samples were rehydrated to assess their activity, egg laying, and egg quality (viability).\n[…]\nThe tardigrades' traits, including their ability to survive extreme conditions, have earned them a place in science fiction and other pop culture. The musician Cosmo Sheldrake imagines himself as a robust tardigrade in his 2015 \"Tardigrade Song\". He sings \"If I were a tardigrade ... Pressure wouldn't squash me and fire couldn't burn ... I can live life in vacuums for years with no drink (A ha)\".\n[…]\nThe biologists Mark Blaxter and Arakawa Kazuharu describe tardigrades' transition to science fiction and fantasy as resulting in \"rare but entertaining walk-on parts\". They note that in the 2015 sci-fi horror film Harbinger Down, the protagonists have to deal with tardigrades that have mutated through Cold War experiments into intelligent and deadly shapeshifters.\n[…]\nThe scholar of science in popular culture Lisa Meinecke, in Fighting for the Future: Essays on Star Trek: Discovery, writes that the animal shares some of the real tardigrade's characteristics, including \"its physical resilience to extreme environmental\" stresses.\n[…]\nNASA Astronomy Picture of the Day: Tardigrade in Moss (6 March 2013)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tardigrada",
        "situacao": "ok",
        "texto": "Tardigrada (do latim: tardus, lento + gradus, passo) é um filo de animais microscópicos segmentados, relacionados com os artrópodes. Popularmente são conhecidos como ursos-d'água ou como tardígrados, aportuguesamento derivado do nome do filo. Foram descritos pela primeira vez por J.A.E. Goeze em 1773. O nome Tardigrada foi dado por Spallanzani em 1777. São em maioria fitófagos, mas alguns são pred\n[…]\nPressão – podem suportar exposição ao vácuo e também pressões altíssimas, na ordem de mais de 1200 atmosferas. Tardígrados podem sobreviver ao vácuo do espaço e radiação solar, combinados, por pelo menos 10 dias. Algumas espécies podem suportar uma pressão de até 6000 atmosferas, o que equivale a aproximadamente seis vezes a pressão da água na mais profunda fenda oceânica, a Fossa das Marianas.\n[…]\nDesidratação – tardígrados podem sobreviver quase por uma década quando em estado dessecado. Quando expostos a temperaturas extremamente baixas, a quantidade de água em seus organismos vai de 85% a apenas 3%. Como a água expande ao ser congelada, a desidratação assegura que os tardígrados não se fragmentem pela água em congelamento.\n[…]\nEm setembro de 2007, tardígrados de duas espécies foram levados até a órbita terrestre baixa na missão FOTON-M3 e foram expostos por 10 dias ao vácuo do espaço. Após serem reidratados na Terra, mais de 68% dos espécimes protegidos da radiação UV de alta-energia sobreviveram e muitos destes produziram embriões saudáveis, e alguns sobreviveram à exposição plena à radiação solar.\n[…]\nEm maio de 2011, tardígrados foram enviados ao espaço junto a outros extremófilos na missão STS-134, o último voo do ônibus espacial Endeavour. Foram expostos não apenas ao vácuo do espaço, onde é impossível respirar, mas também a níveis de radiação capazes de incinerar um ser humano.\n[…]\nTardígrado sobrevive a dez dias de vácuo e radiação no espaço\n[…]\nTardigrada - filmes e retratos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Carrapato",
      "descricao": "Aracnídeo parasita da ordem Ixodida, que se alimenta de sangue de mamíferos, aves e outros vertebrados."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No Brasil, que doença grave, causada por uma bactéria, é transmitida principalmente pela picada do carrapato-estrela?",
    "resposta": "Febre maculosa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Febre_maculosa",
      "https://en.wikipedia.org/wiki/Rocky_Mountain_spotted_fever"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Febre_maculosa",
        "situacao": "ok",
        "texto": "Febre maculosa (americana), tifo exantemático, febre do carrapato (Brasil), ou febre da carraça (Portugal), é uma doença incomum causada pela bactéria Rickettsia rickettsii e transmitida pela picada de carrapatos ou fezes de piolhos. No Brasil, a maior parte dos casos é encontrada na Região Sudeste e transmitidas por Amblyommas (carrapatos-amarelos).\n[…]\nfebre\n[…]\nSe, por acaso, se estiver numa área em que eles possam existir, tome as seguintes precauções: a) examine seu corpo cuidadosamente a cada três horas pelo menos, porque o carrapato-estrela transmite a bactéria responsável pela febre maculosa só depois de pelo menos quatro horas grudado na pele; b) use roupas claras porque facilitam enxergar melhor os carrapatos; c) coloque a barra das calças dentro das meias e calce botas de cano mais alto nas áreas que possam estar infestadas por carrapatos.\n[…]\nHoward T. Ricketts foi o primeiro a identificar o organismo infeccioso causador da doença. Ele e outros descreveram as características epidemiológicas básicas da doença, incluindo o papel dos carrapatos vetores. Seus estudos demonstraram que a febre maculosa é causada pela Rickettsia rickettsii.\n[…]\nRecentes pesquisas comprovam que a febre maculosa também pode ser causada pelas fezes do piolho  e seus principais sintomas são: estagio febril agudo e pele com vermelhidão em alguns casos a pele pode parecer uma lixa.\n[…]\nA febre maculosa, como todas as rickettsioses, é classificada como uma zoonose. As zoonoses são doenças dos animais que podem ser transmitidas aos seres humanos. Muitas doenças zoonóticas requerem um vetor (por exemplo, um mosquito, um carrapato ou um ácaro) para que possam ser transmitidas do hospedeiro animal ao hospedeiro humano. No caso da febre maculosa, os carrapatos são os hospedeiros naturais, servindo como reservatórios e vetores da R. rickettsii."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rocky_Mountain_spotted_fever",
        "situacao": "ok",
        "texto": "Rocky Mountain spotted fever (RMSF) is a bacterial disease spread by ticks. It typically begins with a fever and headache, which is followed a few days later with the development of a rash. The rash is generally made up of small spots of bleeding and starts on the wrists and ankles. Other symptoms may include muscle pains and vomiting. Long-term complications following recovery may include hearing\n[…]\nMaculopapular rash\n[…]\nTicks are the natural hosts of the disease, serving as both reservoirs and vectors of R. rickettsii. Ticks transmit the bacteria primarily through their bites. Less commonly, infections may occur following exposure to crushed tick tissues, fluids, or tick feces.\n[…]\nRickettsia rickettsii can be transmitted to human hosts through the bite of an infected tick. As with other bacteria transmitted via ticks, the process generally requires a period of attachment of 4 to 6 hours. However, in some cases, a Rickettsia rickettsii infection was contracted by contact with tick tissues or fluids. Then, the bacteria induce their internalization into host cells via a receptor-mediated invasion mechanism.\n[…]\nFollowing generation time in the cytoplasm of the host cells, the bacteria utilize actin-based motility to move through the cytosol.\n[…]\nIn 1901, Dr. A. F. Longeway was appointed to solve \"the black measles problem\" in Montana. He, in turn, enlisted his friend Dr. Earl Strain to help him. Strain suspected that the illness was from ticks. In 1906, Howard T. Ricketts, a pathologist recruited from the University of Chicago, was the first to establish the identity of the infectious organism (the organism smaller than a bacterium and larger than a virus) that causes this disease.\n[…]\nSome synonyms for Rocky Mountain spotted fever in other countries include \"tick typhus\", \"Tobia fever\" (Colombia), \"São Paulo fever\" or \"febre maculosa\" (Brazil), and \"fiebre manchada\" (Mexico)."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Gafanhoto",
      "descricao": "Inseto saltador herbívoro da subordem Caelifera, de antenas curtas."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes insetos cantores, qual costuma produzir seu som esfregando as patas traseiras contra as asas?",
    "resposta": "Gafanhoto",
    "distratores": [
      "Grilo",
      "Cigarra",
      "Esperança"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Grasshopper",
      "https://en.wikipedia.org/wiki/Stridulation"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grasshopper",
        "situacao": "ok",
        "texto": "Grasshoppers are a group of insects belonging to the suborder Caelifera. They are amongst what are possibly the most ancient living groups of chewing herbivorous insects, dating back to the early Triassic, around 250 million years ago.\n[…]\nLarger insects may need to actively ventilate their bodies by opening some spiracles while others remain closed, using abdominal muscles to expand and contract the body and pump air through the system.\n[…]\nThe extensor muscle is much stronger than the flexor muscle, but the latter is aided by specialisations in the joint, giving it a large effective mechanical advantage over the former when the tibia is fully flexed. Co-contraction can last for up to half a second, and during this period the extensor muscle shortens and stores elastic strain energy by distorting stiff cuticular structures in the leg.\n[…]\nThe extensor muscle contraction is quite slow (almost isometric), allowing it to develop high force (up to 14 N in the desert locust), but because it is slow, only low power is needed. The third stage of the jump is the trigger relaxation of the flexor muscle, releasing the tibia from the flexed position. The subsequent rapid tibial extension is driven mainly by the relaxation of the elastic structures, rather than by further shortening of the extensor muscle.\n[…]\nIn this way the stiff cuticle acts like the elastic of a catapult, or the bow of a bow-and-arrow. Energy is put into the store at low power by slow but strong muscle contraction and retrieved from the store at high power by rapid relaxation of the mechanical elastic structures.\n[…]\nMedia related to Caelifera at Wikimedia Commons\n[…]\nData related to Caelifera at Wikispecies"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Stridulation",
        "situacao": "ok",
        "texto": "Stridulation is the act of producing sound by rubbing together certain body parts. This behavior is mostly associated with insects, but other animals are known to do this as well, such as a number of species of fish, snakes and spiders."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Gafanhoto",
      "descricao": "Inseto saltador herbívoro da subordem Caelifera, de antenas curtas."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O grilo escuta pelas patas dianteiras. Já o gafanhoto tem seus tímpanos em que parte do corpo?",
    "resposta": "No abdômen",
    "distratores": [
      "Na cabeça",
      "Nas antenas",
      "Nas patas traseiras"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Grasshopper"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grasshopper",
        "situacao": "ok",
        "texto": "Grasshoppers are a group of insects belonging to the suborder Caelifera. They are amongst what are possibly the most ancient living groups of chewing herbivorous insects, dating back to the early Triassic, around 250 million years ago.\n[…]\nPneumoridae are native to Africa, particularly southern Africa, and are distinguished by the inflated abdomens of the males.\n[…]\nLike other insects, grasshoppers have an open circulatory system and their body cavities are filled with haemolymph. A heart-like structure in the upper part of the abdomen pumps the fluid to the head from where it percolates past the tissues and organs on its way back to the abdomen. This system circulates nutrients throughout the body and carries metabolic wastes to be excreted into the gut.\n[…]\nOther functions of the haemolymph include wound healing, heat transfer and the provision of hydrostatic pressure, but the circulatory system is not involved in gaseous exchange. Respiration is performed using tracheae, air-filled tubes, which open at the surfaces of the thorax and abdomen through pairs of valved spiracles.\n[…]\nThe generalised song can vary in phraseology and intensity, and is modified in the presence of a rival male, and changes again to a courtship song when a female is nearby. In male grasshoppers of the family Pneumoridae, the enlarged abdomen amplifies stridulation.\n[…]\nSome species are genuinely aposematic, having both bright warning coloration and sufficient toxicity to dissuade predators. Dictyophorus productus (Pyrgomorphidae) is a \"heavy, bloated, sluggish insect\" that makes no attempt to hide; it has a bright red abdomen. A Cercopithecus monkey that ate other grasshoppers refused to eat the species.\n[…]\nData related to Caelifera at Wikispecies"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Aranha-caranguejeira",
      "descricao": "Aranha grande e peluda da família Theraphosidae, popularmente chamada de tarântula."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Quando ameaçada, a caranguejeira das Américas esfrega as patas traseiras no abdômen e lança contra o agressor parte do próprio corpo. O quê?",
    "resposta": "Pelos urticantes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Urticating_hair",
      "https://en.wikipedia.org/wiki/Tarantula"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Urticating_hair",
        "situacao": "ok",
        "texto": "Urticating hairs or urticating bristles are one of the primary defense mechanisms used by numerous plants, almost all New World tarantulas, and various lepidopteran caterpillars. Urtica is Latin for \"nettle\" (stinging nettles are in the genus Urtica), and bristles that urticate are characteristic of this type of plant, and many other plants in several families.\n[…]\nUrticating hairs (setae) are found in about 90% of the species of tarantula (spiders of the family Theraphosidae) found in the New World. They are not found in tarantulas from other parts of the world.\n[…]\nType II is usually not kicked off by the tarantula, rather delivered by direct contact. However, there is at least one aviculariine species—Caribena versicolor—which can kick type II urticating hairs off of the abdomen, similarly to species from the subfamily Theraphosinae. Tarantulas from the genera Avicularia, Pachistopelma and Iridopelma possess Type II hairs (Hoover, 1997).\n[…]\nUnusually, Type III urticating hairs are found only on the species of Theraphosa, but these otherwise are similar to many species that also have Type I hairs.\n[…]\nType III alone is found in many \"dwarf\" New World genera, e.g. Hapalopus. Type IV is found in several South American genera, e.g. Grammostola, Euathlus etc. (exhibits types III and IV). Type V urticating hairs are typical of the species of the genus Ephebopus. They are located on the pedipalps. They are much shorter and lighter in contrast with other types of urticating hair. These are easily thrown by the spider into the air. Type VI urticating hairs are found in the genus Hemirrhagus.\n[…]\nAfter kicking urticating hairs, the tarantula will have a bald spot on its abdominal region.\n[…]\nUrticating hairs protect tarantula egg sacs (Avicularia spp. and Theraphosa blondi, respectively). This is thought to discourage fly larvae from consuming their eggs and young."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tarantula",
        "situacao": "ok",
        "texto": "Tarantulas are a group of large and often hairy spiders of the family Theraphosidae. More than a thousand species have been identified, within almost 200 genera. The term \"tarantula\" is usually used to describe members of the family Theraphosidae, although many other members of the same infraorder (Mygalomorphae) are commonly referred to as \"tarantulas\" or \"false tarantulas\". Some of the more comm\n[…]\nUrticating hairs are usually kicked off the abdomen by the tarantula, but some may simply rub the abdomen against the target, like the genus Avicularia. These fine bristles are barbed and serve to irritate. They can be lethal to small animals such as rodents. Some people are sensitive to these bristles, and develop serious itching and rashes at the site. Exposure of the eyes and respiratory system to urticating hairs should be strictly avoided.\n[…]\nIf that response fails to deter the attacker, the tarantulas of the Americas may next turn away and flick urticating hairs toward the pursuing predator. The next response may be to leave the scene entirely, but especially if no line of retreat is available, their final response may also be to whirl suddenly and bite.\n[…]\nNew-world tarantulas—those indigenous to the Americas—have bites that generally pose little threat to humans (other than causing localized pain). Most of them are equipped with urticating hairs on their abdomens, and almost always throw these barbed bristles as the first line of defense. These bristles irritate sensitive areas of the body and especially seem to target curious animals that may sniff these bristles into the mucous membranes of the nose.\n[…]\nIf a tarantula previously used its urticating hairs, the bald patch turns from a peach color to deep blue. The tarantula also stops feeding and becomes more lethargic during this time.\n[…]\nTarantula Fest\n[…]\nListing of all currently named Theraphosidae"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pelo_urticante",
        "situacao": "ok",
        "texto": "Pelos urticantes é a designação dada em biologia aos pelos (nas plantas tricomas) modificados para funcionarem como mecanismos de defesa primária utilizados por numerosas plantas, algumas tarântulas da América e várias lagartas de lepidópteros.\n[…]\nOrugas urticantessección en la United States Environmental Protection Agency y la Universidad de Florida/Institute of Food and Agricultural Sciences National Public Health Pesticide Applicator Training Manual",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Viúva-negra",
      "descricao": "Aranhas venenosas do gênero Latrodectus, de corpo negro e brilhante, muitas com uma mancha vermelha no abdômen."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na viúva-negra norte-americana, a mancha vermelha na parte de baixo do abdômen costuma ter o formato de qual objeto?",
    "resposta": "Ampulheta",
    "distratores": [
      "Estrela",
      "Cruz",
      "Coração"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Latrodectus_mactans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Latrodectus_mactans",
        "situacao": "ok",
        "texto": "Latrodectus mactans, known as southern black widow or simply black widow, and the shoe-button spider, is a venomous species of spider in the genus Latrodectus. The females are well known for their distinctive black and red coloring and because they occasionally eat their mates after reproduction. The species is native to North America. The venom can cause pain and other symptoms, but is rarely fat\n[…]\nThere are various parasites and predators of widow spiders in North America, though apparently none of these have ever been evaluated in terms of augmentation programs for improved biocontrol. Parasites of the egg sacs include the flightless scelionid wasp Baeus latrodecti, and members of the chloropid fly genus Pseudogaurax.\n[…]\nThe venom injected by the female black widow is known as alpha-latrotoxin which binds to receptors at the neuromuscular motor end plate of both sympathetic and parasympathetic nerves, resulting in increased synaptic concentration of catecholamines. The symptoms are caused by lymphatic absorption and vascular dissemination of the neurotoxin. The symptoms that result from a black widow spider bite are collectively known as latrodectism.\n[…]\nDeaths in healthy adults from Latrodectus bites are exceedingly rare, with no deaths despite two thousand bites yearly, and studies within the past several decades have been unable to confirm any fatalities from this or any of the other U.S. species of Latrodectus (e.g. zero fatalities among 23,409 documented Latrodectus bites from 2000 through 2008). On the other hand, the geographical range of the widow spiders is vast.\n[…]\nLatrodectus Mactans on Pterodattilo\n[…]\nLatrodectus mactans on the UF / IFAS Featured Creatures website."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vi%C3%BAva-negra",
        "situacao": "ok",
        "texto": "Latrodectus, conhecido pelo nome comum de aranhas-pretas ou viúvas-negras, é um género de aranhas pertencente à família Theridiidae, que inclui 32 espécies confirmadas. O nome comum viúva negra deriva da maioria das espécies deste género praticar o canibalismo sexual, sendo que a fêmea devora o macho após a cópula.\n[…]\nAs aranhas do gênero Latrodectus possuem uma expectativa de vida de 2 anos e meio a 3 anos.\n[…]\nCostumam sempre estar conectadas a uma teia, mesmo que enquanto caminhando elas sempre estão soltando um fio de teia para garantir que não caiam ou sejam arrastadas pelo vento.\n[…]\nPreferem sempre ficar de cabeça pra baixo em suas teias, sendo sempre encontradas nessa posição, com a ampulheta para cima.\n[…]\nOutro comportamento interessante que não é exclusivo do gênero Latrodectus é o ato de quando recém nascidas, soltar um fio de teia no ar, como seus corpos ainda são pequenos e leves esse fio consegue ser arrastado pelo vento, levando assim o pequeno animal para longe. Assim as aranhas conseguem se espalhar.\n[…]\nAbalos, J.W. (1962). «The egg-sac in the Identification of Species of Latrodectus (Black-Widow Spiders)» (PDF). Consultado em 15 de dezembro de 2012. Arquivado do original (PDF) em 27 de setembro de 2007\n[…]\nLevi, H.W. & McCrone, J.D (1964). «North American Widow Spiders of the Latrodectus curacaviensis Group» (PDF). Consultado em 15 de dezembro de 2012. Arquivado do original (PDF) em 25 de julho de 2008  !CS1 manut: Nomes múltiplos: lista de autores (link)\n[…]\nTree of Life: Latrodectus\n[…]\nBlack Widow Spider: Large format photographs and information\n[…]\nDescription of crossing experiments between various Latrodectus species",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Besouro",
      "descricao": "Insetos da ordem Coleoptera, com o primeiro par de asas endurecido em forma de estojo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A capa dura que cobre as costas dos besouros, formada pelos élitros, é na verdade uma modificação de que parte do corpo?",
    "resposta": "Das asas dianteiras",
    "fonte": [
      "https://en.wikipedia.org/wiki/Elytron",
      "https://en.wikipedia.org/wiki/Beetle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elytron",
        "situacao": "ok",
        "texto": "An elytron (; from Ancient Greek  ἔλυτρον (élutron) 'sheath, cover'; pl.: elytra,  ) is a modified, hardened forewing of beetles (Coleoptera), though a few of the true bugs (Hemiptera) such as the family Schizopteridae are extremely similar; in true bugs, the forewings are called hemelytra (sometimes alternatively spelled as \"hemielytra\"), and in most species only the basal half is thickened while"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Beetle",
        "situacao": "ok",
        "texto": "Beetles are insects that form the order Coleoptera (), in the superorder Holometabola. Their front pair of wings are hardened into wing-cases, elytra, distinguishing them from most other insects. The Coleoptera, with about 400,000 described species, is the largest of all orders, constituting almost 40% of described arthropods and 25% of all known animal species; new species are discovered frequent\n[…]\nAbout 90% of beetle species enter a period of adult diapause, a quiet phase with reduced metabolism to tide unfavourable environmental conditions. Adult diapause is the most common form of diapause in Coleoptera. To endure the period without food (often lasting many months) adults prepare by accumulating reserves of lipids, glycogen, proteins and other substances needed for resistance to future hazardous changes of environmental conditions.\n[…]\nAccording to the habitats, many other groups such as the rove beetles in human-modified habitats, dung beetles in savannas and saproxylic beetles in forests have been suggested as potential indicator species.\n[…]\nSeveral coleopteran adaptations have attracted interest in biomimetics with possible commercial applications. The bombardier beetle's powerful repellent spray has inspired the development of a fine mist spray technology, claimed to have a low carbon impact compared to aerosol sprays.\n[…]\nCooter, J.; M. V. L. Barclay, eds. (2006). A Coleopterist's Handbook. Amateur Entomological Society. ISBN 978-0-900054-70-9.\n[…]\nColeoptera from the Tree of Life Web Project\n[…]\nColeoptera Atlas Archived January 6, 2014, at the Wayback Machine\n[…]\nBeetles – Coleoptera"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%89litro",
        "situacao": "ok",
        "texto": "Os élitros (do grego élytron - estojo, envoltório) são as asas anteriores, modificadas por endurecimento, de certas ordens de insetos (Coleoptera). São chamados de hemiélitros quando o endurecimento não é completo. A sua parte basal ou proximal ao pronoto é espessa e endurecida, e a parte apical ou distal é membranosa, também conhecida como membrana dos hemiélitros. É típica da ordem Hemiptera. Qu\n[…]\nOs coleópteros (besouros) tem-na como conspícuo, a ponto de serem também chamados de elitrópteros - literalmente: que tem asas em forma de estojo.\n[…]\nOs élitros servem como proteção para as asas posteriores que estão logo abaixo, e que são aquelas usadas para executar o voo, quando exercem a função de auxiliar o voo, dando equilíbrio.\n[…]\nPara ser chamado de élitro o par de asas anteriores modificadas deve ser completamente enrijecida, córneo, não membranosa nem transparente. Nalguns casos os élitros estão fundidos, deixando o inseto sem capacidade de voar.\n[…]\nOs élitros variam em tamanho e textura. Existem coleópteros que possuem os élitros pequenos, como nos Brachiptera, que são braquiélitros (têm élitros curtos) e o número de segmentos expostos serve para identificar grupos distintos. Outras espécies deixam apenas o pigídio exposto.\n[…]\nOutras espécies de insetos também possuem asas anteriores modificadas, algumas de modo semelhante aos élitros - recebendo então outras denominações, como no caso dos Hemiptera (que incluem os percevejos, o barbeiro, a cigarra). Ali as asas anteriores são modificadas (parte basal espessa e apical membranosa), recebendo o nome de hemiélitro.\n[…]\nNos Blattaria e Mantodea (baratas e louva-a-deus) as asas anteriores são finas e se alongam além do corpo, recebendo a denominação de tégmina, com aspeto coriáceo ou pergaminhoso (como o couro ou pergaminho). O mesmo se dá nos Orthoptera (grilos e gafanhotos).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Vaga-lume",
      "descricao": "Besouro da família Lampyridae, conhecido por emitir luz para atrair parceiros."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A luz do vaga-lume nasce de uma reação química entre o oxigênio e qual substância produzida pelo inseto?",
    "resposta": "Luciferina",
    "distratores": [
      "Clorofila",
      "Melanina",
      "Fósforo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Firefly",
      "https://en.wikipedia.org/wiki/Luciferin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Firefly",
        "situacao": "ok",
        "texto": "The Lampyridae are a family of elateroid beetles with more than 2,400 described species, many of which are light-emitting. They are soft-bodied beetles commonly called fireflies, lightning bugs, or glowworms for their conspicuous emission of light, mainly during twilight, to attract mates. The type species is Lampyris noctiluca, the common glow-worm of Europe. Light production in the Lampyridae is\n[…]\nLight production in fireflies is due to the chemical process of bioluminescence. This occurs in specialized light-emitting organs (known as photophores), usually located on a female firefly's lower abdomen. These fireflies produce the enzyme firefly luciferase that acts on another compound produced by fireflies, firefly luciferin. In the presence of magnesium ions, ATP, and oxygen, this reaction produces light. Oxygen is supplied via an abdominal trachea or breathing tube.\n[…]\nGene coding for these substances has been inserted into many different organisms. Firefly luciferase is used in forensics, and the enzyme has medical uses – in particular, for detecting the presence of ATP or magnesium. Fireflies produce a \"cold light\", with no infrared or ultraviolet frequencies. The light may be yellow, green, or pale red, with wavelengths from 510 to 670 nanometers.\n[…]\nThe fireflies (including the lightning bugs) are a family, Lampyridae, of some 2,000 species within the Coleoptera. The family forms a single clade, a natural phylogenetic group. The term glowworm is used for both adults and larvae of firefly species such as Lampyris noctiluca, the common European glowworm, in which only the nonflying adult females glow brightly; the flying males glow weakly and intermittently.\n[…]\nThe phylogeny of the Lampyridae family, based on both phylogenetic and morphological evidence by Martin et al. 2019, is:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Luciferin",
        "situacao": "ok",
        "texto": "Luciferin (from Latin  lucifer 'light-bearer') is a generic term for the light-emitting compound found in organisms that generate bioluminescence. Luciferins typically undergo an enzyme-catalyzed reaction with molecular oxygen. The resulting transformation, which usually involves breaking off a molecular fragment, produces an excited state intermediate that emits light upon decaying to its ground \n[…]\nLuciferins and luciferases are usually specific to particular species or taxonomic groups.\n[…]\nIn the early 18th century, René Réaumur noted that powder made from dried and ground bioluminescent creatures glowed when water was added. The first experimental studies of luciferin–luciferase systems were performed by the French scientist Raphael Dubois. Utilizing glow-worms and fireflies in 1885, he discovered that a substance is consumed during the light-producing reaction.\n[…]\nFirefly luciferin is the luciferin found in many Lampyridae species, such as P. pyralis. It is the substrate of beetle luciferases (EC 1.13.12.7) responsible for the characteristic yellow light emission from fireflies, though can cross-react to produce light with related enzymes from non-luminous species. The chemistry is unusual, as adenosine triphosphate (ATP) is required for light emission, in addition to molecular oxygen.\n[…]\nLuciferin is widely used in science and medicine as a method of in vivo imaging, using living organisms to non-invasively detect images and in molecular imaging. The reaction between luciferin substrate paired with the receptor enzyme luciferase produces a catalytic reaction, generating bioluminescence. This reaction and the luminescence produced is useful for imaging—examples include detecting cancerous tumors, or measuring gene expression.\n[…]\n\"Major luciferin types\". The Bioluminescence Web Page. University of California, Santa Barbara. 2009-01-09. Retrieved 2009-03-06."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vaga-lume",
        "situacao": "ok",
        "texto": "Vaga-lume ou pirilampo são denominações comuns de insetos coleópteros das famílias Elateridae, Phengodidae ou Lampyridae, notórios por suas emissões de luz bioluminescente. As suas larvas alimentam-se principalmente de vegetais e outros insetos menores. Também há espécies com hábitos terrícolas, que roem raízes e base do caule de plantas. Uma das espécies mais amplamente distribuídas e mais comuns\n[…]\nOs órgãos bioluminescentes do pirilampo localizam-se na parte inferior dos segmentos abdominais. A luciferina é oxidada pelo oxigênio nuclear, com mediação da enzima luciferase, resultando em oxiluciferina que perde energia, fazendo assim o inseto emitir luz.[carece de fontes]? Fazem-no as fêmeas para atrair parceiros e para comunicação , mas tem uma desvantagem: a sua própria luminosidade pode também atrair predadores, como a lagartixa.\n[…]\nO nome \"pirilampo\" tem origem no grego, peri = em volta e lampein = luz, tendo sido supostamente empregado pela primeira vez na língua portuguesa por Dona Joana Josefa de Meneses, Condessa da Ericeira. \"Vaga-lume\", segundo o Dicionário da Língua Portuguesa Contemporânea, é eufemização de \"caga-lume\", sinónimo de formação popular. São também conhecidos os nomes \"lampíride\", \"lampírio\", \"lampiro', \"lumeeira\", \"lumeeiro\", \"mosca-de-fogo\", \"pirífora\", \"salta-martim\".\n[…]\nDesses sinônimos, vários são brasileiros, alguns de origem lusitana. \"Lampíride\" vem do grego lampyrís, através do latim lampyride. \"Noctiluz\" vem do latim nox, noctis (noite) e do português \"luz\". \"Pirífora\" vem da junção dos gregos pÿr, pyrós (calor, fogo) e phorós, ós, ón (\"que leva, que conduz\"). \"Uauá\" é um termo de origem tupi.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Choco",
      "descricao": "Molusco cefalópode do gênero Sepia, de concha interna e bolsa de tinta escura."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A peça branca e porosa que muita gente pendura na gaiola de calopsitas e periquitos é a concha interna de qual molusco?",
    "resposta": "Choco (siba)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cuttlebone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cuttlebone",
        "situacao": "ok",
        "texto": "Cuttlebone, also known as cuttlefish bone, is a hard, brittle internal structure (an internal shell) found in all members of the family Sepiidae, commonly known as cuttlefish, within the cephalopods. In other cephalopod families it is called a gladius."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pérola",
      "descricao": "Objeto duro e brilhante formado dentro de ostras e outros moluscos bivalves, usado como joia."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Uma pérola se forma quando a ostra envolve um grão irritante com camadas da mesma substância que reveste o interior da concha. Que substância?",
    "resposta": "Nácar (madrepérola)",
    "distratores": [
      "Âmbar",
      "Quitina",
      "Queratina"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pearl",
      "https://en.wikipedia.org/wiki/Nacre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pearl",
        "situacao": "ok",
        "texto": "A pearl is a hard, shiny object produced within the soft tissue (specifically the mantle) of a living shelled mollusk. Like the shell of a mollusk, a pearl is composed of calcium carbonate (mainly aragonite or a mixture of aragonite and calcite) in a crystalline form, which is deposited in concentric layers. More commercially valuable pearls are perfectly round and smooth, but many other shapes, k\n[…]\nA farm in the Gulf of California, Mexico, is culturing pearls from the black lipped Pinctada mazatlanica oysters and the rainbow-lipped Pteria sterna oysters. Also called Concha Nácar, the pearls from these rainbow-lipped oysters fluoresce red under ultraviolet light.\n[…]\nPearls were one of the attractions that drew Julius Caesar to Britain. They are, for the most part, freshwater pearls from mussels. Pearling was banned in the U.K. in 1998 due to the endangered status of river mussels. Discovery and publicity about the sale for a substantial sum of the Abernethy pearl in the River Tay had resulted in the heavy exploitation of mussel colonies during the 1970s and 80s by weekend warriors.\n[…]\nIf no nucleus is present, but irregular and small dark inner spots indicating a cavity are visible, combined with concentric rings of organic substance, the pearl is likely a cultured freshwater. Cultured freshwater pearls can often be confused with natural pearls, which present as homogeneous pictures that continuously darken toward the surface of the pearl. Natural pearls will often show larger cavities where organic matter has dried out and decomposed.\n[…]\nGiga Pearl, largest certified pearl\n[…]\nLa Pelegrina pearl\n[…]\nPearl of Lao Tzu\n[…]\nPearl of Kuwait\n[…]\nPearl of Puerto, largest pearl in the world\n[…]\nPearl powder, used in Traditional Chinese Medicine\n[…]\nThe Pearl (novella), a novella by John Steinbeck\n[…]\nDoes Harvesting a Pearl Kill the Oyster? Also, how to identify a fake pearl (Sam Westreich, PhD, Medium.com, August 19, 2021)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nacre",
        "situacao": "ok",
        "texto": "Nacre ( NAY-kər, also  NAK-rə), also known as mother-of-pearl, is an organic–inorganic composite material produced by some molluscs as an inner shell layer. It is also the material of which pearls are composed. It is strong, resilient, and iridescent.\n[…]\nNacre is secreted by the epithelial cells of the mantle tissue of various molluscs. The nacre is continuously deposited onto the inner surface of the shell, the iridescent nacreous layer, commonly known as mother-of-pearl. The layers of nacre smooth the shell surface and help defend the soft tissues against parasites and damaging debris by entombing them in successive layers of nacre, forming either a blister pearl attached to the interior of the shell, or a free pearl within the mantle tissues.\n[…]\nBows of stringed instruments such as the violin and cello often have mother-of-pearl inlay at the frog. It is traditionally used on saxophone keytouches, as well as the valve buttons of trumpets and other brass instruments. The Middle Eastern goblet drum (darbuka) is commonly decorated by mother-of-pearl.\n[…]\nHe is credited with portraying Tagore in various creative stances that were skillfully carved into metallic plates. His cousin Pratip Munshi was also a mother-of-pearl artist.\n[…]\nMother-of-pearl buttons are used in clothing either for functional or decorative purposes. The Pearly Kings and Queens are an elaborate example of this.\n[…]\nMother-of-pearl is sometimes used to make caviar spoons (i.e. caviar servers) so as to not spoil the taste of the caviar with metallic spoons.\n[…]\nMother-of-pearl carving in Bethlehem\n[…]\nObjects with mother-of-pearl in the Staten Island Historical Society Online Collections Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%A9rola",
        "situacao": "ok",
        "texto": "Uma pérola ou perla (também designada por margarita) [carece de fontes]? é um material orgânico duro e geralmente esférico produzido por alguns moluscos, as ostras e mexilhões, em reação a corpos estranhos que invadem os seus organismos, como vermes ou grãos de areia. É valorizada como gema e trabalhada em joalharia. A pérola é envolvida naturalmente em nácar e bicarbonato de cálcio produzidos pel\n[…]\nAs pérolas também podem ser obtidas de forma artificial, através de cultivo, para isso, insere-se no interior da ostra perlífera, entre o manto e a concha, um objeto minúsculo, causando uma pequena inflamação. É o envolver desse objeto com sucessivas camadas de madrepérola que forma a pérola.\n[…]\nAs pérolas têm que ser guardadas separadamente das outras peças, envolvidas em tecido. Limpe-as com um pano úmido e evite produtos químicos da casa, como por exemplo, produtos para os cabelos, cosméticos e perfumes, pois tiram o brilho das pérolas\n[…]\nGrupo: Pérola;\n[…]\nAs pérolas dos Mares do Sul (Pacífico) são as maiores e mais raras de todas.\n[…]\nAs pérolas negras ou Pérolas do Taiti podem ter um tom cinza claro ou um arco-íris (típico da madrepérola).\n[…]\nA pérola sempre foi muito apreciada ao longo da história da humanidade, um exemplo disso foi o facto de no apogeu do Império Romano, quando a febre das pérolas estava no auge, Júlio César, conhecido pelas suas conquistas amorosas, ofereceu a Servília Cepião, uma pérola no valor de seis milhões de sestércios. Também o general romano Vitélio, estando cheio de dívidas, roubou um brinco de pérola à sua mãe, para poder financiar o seu regresso ao exército .\n[…]\nA maior pérola do mundo tem 27,65 quilos e está avaliada em 80 milhões de euros. Foi comprada em 1959 a um pescador em Camiguin, Filipinas.\n[…]\nMadrepérola\n[…]\nHistòria da Pérola do Tahitì",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Lagarta",
      "descricao": "Fase larval de borboletas e mariposas (ordem Lepidoptera), de corpo alongado e que se alimenta de forma voraz."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Além das seis patas verdadeiras, a lagarta tem patinhas carnudas no abdômen, que desaparecem no adulto. Como elas se chamam?",
    "resposta": "Falsas patas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Caterpillar",
      "https://en.wikipedia.org/wiki/Proleg"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caterpillar",
        "situacao": "ok",
        "texto": "Caterpillars (  KAT-ər-pil-ər) are the larval stage of members of the order Lepidoptera (comprising butterflies and moths). In common speech, any caterpillar-shaped insect larva such as of a sawfly is often called a caterpillar.\n[…]\nCaterpillars have soft bodies that can grow rapidly between moults. Their size varies between species and instars (moults) from as small as 1 millimetre (0.039 in) up to 14 centimetres (5.5 in). Some larvae of the order Hymenoptera (ants, bees, and wasps) can appear like the caterpillars of the Lepidoptera. Such larvae are mainly seen in the sawfly suborder.\n[…]\nHowever while these larvae superficially resemble caterpillars, they can be distinguished by the presence of prolegs on every abdominal segment, an absence of crochets or hooks on the prolegs (these are present on lepidopteran caterpillars), one pair of prominent ocelli on the head capsule, and an absence of the upside-down Y-shaped suture on the front of the head.\n[…]\nLepidopteran caterpillars can be differentiated from sawfly larvae by:\n[…]\nsawfly larvae have an invariably smooth head capsule with no cleavage lines, while lepidopterous caterpillars bear an inverted \"Y\" or \"V\" (frontal suture).\n[…]\nBacterial toxins such as those from Bacillus thuringiensis which are evolved to affect the gut of Lepidoptera have been used in sprays of bacterial spores, toxin extracts and also by incorporating genes to produce them within the host plants. These approaches are defeated over time by the evolution of resistance mechanisms in the insects.\n[…]\nLarval food plants of Lepidoptera\n[…]\nLepidopterism - caterpillar dermatitis\n[…]\nLarva Locomotion: A Closer Look — video clips showing how monarch larvae walk"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Proleg",
        "situacao": "ok",
        "texto": "A proleg is a small, fleshy, stub structure found on the ventral surface of the abdomen of most larval forms of insects of the order Lepidoptera, though they can also be found on larvae of insects such as sawflies.\n[…]\nIn all the orders in which they appear, mainly Hymenoptera and Lepidoptera, prolegs of any form evolved independently of each other by convergent evolution. They appear to have evolved from ancient inactive genes that have since been activated again.\n[…]\nProlegs of lepidopteran larvae have a small circle of gripping hooks, called \"crochets\". The arrangement of the crochets can be helpful in identification to family level. Although the point has been debated, prolegs are not widely regarded as true legs, derived from the primitive uniramous limbs. Certainly in their morphology they are not jointed, and so lack the five segments (coxa, trochanter, femur, tibia, tarsus) of thoracic insect legs.\n[…]\nPeterson, A. 1948. Larvae Of Insects. Part I: Lepidoptera & Hymenoptera; Part II: Coleoptera, Diptera, Neuroptera, Siphonaptera, Mecoptera, Trichoptera. Columbus, OH."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lagarta",
        "situacao": "ok",
        "texto": "Na linguagem popular, lagarta é o nome para o primeiro estágio larval dos insetos da ordem dos Lepidoptera (a ordem de insetos contendo borboletas e mariposas). As lagartas da maioria das espécies são herbívoras (folívoras), mas não todas; algumas (cerca de 1%) são insectívoras, até mesmo canibais. Algumas se alimentam de produtos animais; por exemplo, as larvas das traças-das-roupas se alimentam \n[…]\nO termo lagarta vem do latim vulgar lacarta, do latim lacerta, que significa lagarto; em algum momento, a larva teria sido comparada ao lagarto. Assim como todos os nomes comuns, a aplicação da palavra \"lagarta\" é arbitrária, visto que as larvas da ordem Symphyta são eventualmente chamadas de lagartas também. Ambas as larvas de lepidópteros e de sínfitos possuem a forma corporal eruciforme.\n[…]\nCada um dos segmentos do tórax tem um par de pernas articuladas e com garras: são as verdadeiras pernas. Os segmentos abdominais geralmente têm de dois a cinco pares de patas falsas ou pseudopatas: protrusões membranosas da cutícula, geralmente semelhantes a lóbulos e apresentando, cada uma, um círculo de pequenos ganchos esclerotizados, também chamados de crochetes.\n[…]\nAs lagartas Malacosoma disstria se aglomeram durante os períodos de frio.\n[…]\nLepidopterismo da lagarta é um irritante tóxico cuja reação é desencadeada pela liberação de histamina taumetopoeína e outras quininas dos cabelos de lagartas e borboletas.10 Na Europa central, as duas principais causas de dermatite de lagarta são a lagarta processionária de carvalho e pinheiro.10 Foi observado que os pacientes podem desenvolver reações cutâneas, conjuntivite, bronquite e, em alguns casos, reações anafiláticas.10 Com exceção das alergias a veneno de abelha e vespa, as reações alérgicas do tipo imediato a mosquitos, moscas, carrapatos, percevejos, mariposas, lagartas e aranhas são raro.11",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Cupim",
      "descricao": "Inseto social da infraordem Isoptera, que se alimenta de madeira e matéria vegetal em decomposição e é aparentado às baratas."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em qual destes insetos sociais um rei vive ao lado da rainha por anos, ajudando a fundar e manter a colônia?",
    "resposta": "Cupim",
    "distratores": [
      "Abelha",
      "Formiga",
      "Vespa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Termite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Termite",
        "situacao": "ok",
        "texto": "Termites are a group of eusocial insects which consume a variety of decaying plant material, generally in the form of wood, leaf litter, and soil humus. They are distinguished by their beaded (moniliform) antennae and the soft-bodied, unpigmented worker caste for which they have been commonly termed \"white ants\"; however, they are not ants but highly derived cockroaches; they are genetically close\n[…]\nThe beetles share the same cuticle hydrocarbons as the termites and even biosynthesize them. This chemical mimicry allows the beetles to integrate themselves within the termite colonies. The developed appendages on the physogastric abdomen of Austrospirachtha mimetes allows the beetle to mimic a termite worker.\n[…]\nKrishna, Kumar; Grimaldi, David A.; Krishna, Valerie; Engel, Michael S. (25 April 2013). \"Treatise on the Isoptera of the World: VOLUME 3. NEOISOPTERA EXCLUDING TERMITIDAE\". Bulletin of the American Museum of Natural History. 377 (7): 623–973. doi:10.1206/377.3.\n[…]\nKrishna, Kumar; Grimaldi, David A.; Krishna, Valerie; Engel, Michael S. (25 April 2013). \"Treatise on the Isoptera of the World: VOLUME 4 TERMITIDAE (PART ONE)\". Bulletin of the American Museum of Natural History. 377 (7): 973–1495. doi:10.1206/377.4.\n[…]\nKrishna, Kumar; Grimaldi, David A.; Krishna, Valerie; Engel, Michael S. (25 April 2013). \"Treatise on the Isoptera of the World: VOLUME 5 TERMITIDAE (PART TWO)\". Bulletin of the American Museum of Natural History. 377 (7): 1495–1989. doi:10.1206/377.5.\n[…]\nKrishna, Kumar; Grimaldi, David A.; Krishna, Valerie; Engel, Michael S. (25 April 2013). \"Treatise on the Isoptera of the World: VOLUME 6 TERMITIDAE (PART THREE), INCERTAE SEDIS, TAXA EXCLUDED FROM ISOPTERA\". Bulletin of the American Museum of Natural History. 377 (7): 1989–2433. doi:10.1206/377.6.\n[…]\nIsoptera: termites at CSIRO Australia Entomology\n[…]\nJared Leadbetter seminar: Termites and Their Symbiotic Gut Microbes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Is%C3%B3pteros",
        "situacao": "ok",
        "texto": "Isópteros (Isoptera) é uma subordem a qual engloba os cupins, que são insetos eussociais (baratas sociais). São denominados termites ou cupins (no Brasil), térmite, térmita ou formiga-branca (em Portugal), salalé (em Angola) e muchém (em Moçambique).\n[…]\nCom cerca de 2 800 espécies catalogadas no mundo, esses insetos são notórios pelos prejuízos econômicos que causam como pragas de madeira e de outros materiais celulósicos, ou ainda como pragas agrícolas, apesar de apenas cerca de 10% das espécies conhecidas de cupim possuir estas características.\n[…]\n\"Cupim\" originou-se do termo tupi kopi'i. Outro nome usado no Brasil, \"itapicuim\", originou-se da junção dos termos tupis i'tá (\"pedra\") e piku'i (\"o tenro de dentro\"). \"Térmite\" origina-se do termo latino tarmite, \"verme\".\n[…]\nA dispersão e fundação de novas colônias geralmente ocorre num determinado período do ano, coincidindo com o início da estação chuvosa. Nessa época, ocorrem as revoadas de cupins alados (chamados popularmente de aleluias, ararás (do tupi ara'ra: 'espécie de formiga'), cupins, sililuias, siriruias ou siriris), dos quais alguns poucos conseguem se acasalar e fundar uma nova colônia.\n[…]\nOs índios Enawenê-nawê, do Mato Grosso, consumiam o cupim subterrâneo do gênero Syntermes após colocá-lo em recipiente com água e depois removendo-o e o aquecendo levemente sobre um prato de cerâmica levado ao fogo. A coleta era feita introduzindo vareta fina nas galerias e olheiros. Os insetos ferroavam a vareta e nela ficavam presos. Para coletar cupins do gênero Nasutitermes que constroem ninhos em troncos de árvores, primeiro era feita a identificação da espécie para saber se era comestível.\n[…]\nIntrodução ao estudo dos cupins. UnB.IB - Depto de Zoologia. Laboratório de Termitologia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Tesourinha",
      "descricao": "Inseto da ordem Dermaptera, com pinças no fim do abdômen."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Muitos bichinhos de jardim são chamados de insetos sem ser. Entre estes, qual é de fato um inseto?",
    "resposta": "Tesourinha",
    "distratores": [
      "Tatuzinho-de-jardim",
      "Opilião",
      "Lacraia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Earwig",
      "https://en.wikipedia.org/wiki/Woodlouse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Earwig",
        "situacao": "ok",
        "texto": "Earwigs make up the insect order Dermaptera. With about 2,000 species in 12 families, they are one of the smaller insect orders. Earwigs have characteristic cerci, a pair of forceps-like pincers on their abdomen, and membranous wings folded underneath short, rarely used forewings, hence the scientific order name, \"skin wings\". Some groups are tiny parasites on mammals and lack the typical pincers.\n[…]\nThe first epizoic species of earwig was discovered by a London taxidermist on the body of a Malaysian hairless bulldog bat in 1909, then described by Karl Jordan. By the 1950s, the two suborders Arixeniina and Hemimerina had been added to Dermaptera. These were subsequently demoted to family Arixeniidae and superfamily Hemimeroidea (with sole family Hemimeridae), respectively. They are now grouped together with the former Forficulina in the new suborder Neodermaptera.\n[…]\nDermaptera is relatively small compared to the other orders of Insecta, with only about 2,000 species, 3 suborders and 15 families, including the extinct suborders Archidermaptera and Eodermaptera with their extinct families Protodiplatyidae, Dermapteridae, Semenoviolidae, and Turanodermatidae. The phylogeny of the Dermaptera is still debated.\n[…]\nThe extant Dermaptera appear to be monophyletic and there is support for the monophyly of the families Forficulidae, Chelisochidae, Labiduridae and Anisolabididae, however evidence has supported the conclusion that the former suborder Forficulina was paraphyletic through the exclusion of Hemimerina and Arixeniina which should instead be nested within the Forficulina. Thus, these former suborders were eliminated in the most recent higher classification.\n[…]\nDermaptera Species File by Heidi Hopkins, Michael D. Maehr, Fabian Haas, and Lesley S. Deem\n[…]\nLangston RL & JA Powell (1975) The earwigs of California (Order Dermaptera). Bulletin of the California Insect Survey. 20"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Woodlouse",
        "situacao": "ok",
        "texto": "Woodlice are terrestrial isopods in the suborder Oniscidea. Their name is derived from being often found in old wood, and from louse, a parasitic insect, although woodlice are neither parasitic nor insects. Other common names include slater, sow bug, and wood pig, common names varying widely by region."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lacrainha",
        "situacao": "ok",
        "texto": "Conhecidos no Brasil como tesourinhas ou lacrainhas e em Portugal como bicha-cadela ou raspelho , os dermápteros são insetos hemimetábolos e terrestres, com corpo alongado e presença de cercos geralmente em forma de pinça. O nome da ordem Dermaptera provém do grego derma = pele e pteron = asas, referindo-se às asas anteriores grossas e coriáceas presentes nesses insetos.\n[…]\nQuando em altas densidades, tesourinhas também podem ser predadas por vespas da espécie Vespula maculifrons, que aparentemente, são estimuladas visualmente pelo corpo protuberante dos dermápteros e os capturam. Outros importantes inimigos dos dermápteros são parasitas como bactérias, nematoides e principalmente, fungos, já que esses insetos vivem em locais úmidos que favorecem a reprodução e infestação dos fungos.\n[…]\nOs traços típicos de um representante de Dermaptera atual não estão presentes nos grupos extintos, como tarso de cinco tarsômeros, longo e multi-segmentados cerco e ausência de ocelos.\n[…]\nApesar de existirem alguns relatos de dermápteros entrando no canal externo do ouvido de pessoas enquanto elas dormem, eles não põem ovos lá ou se alimentam do cérebro delas. Eles podem se abrigar em ouvidos humanos porque vivem em lugares escuros e úmidos, e um ouvido apresenta essas características. Entretanto, eles são insetos praticamente inofensivos para humanos e só entram em ouvidos muito raramente.\n[…]\nAlém disso, como as tesourinhas costumam erguer seus cercos como forma de defesa, algumas pessoas as confundem com um escorpião ou pensam que esses insetos usam o cerco para inocular veneno, oferecendo riscos à saúde humana. Apesar de existirem espécies de Dermaptera que apresentam glândulas no abdômen por onde liberam uma secreção que pesquisadores acreditam servir para defesa, ela não é letal para humanos, podendo apenas causar irritações.\n[…]\nLacrainha - Controlar Ambiental",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Tesourinha",
      "descricao": "Inseto da ordem Dermaptera, com pinças no fim do abdômen."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em inglês, a tesourinha se chama earwig por causa de uma velha crença sobre onde ela entraria nas pessoas adormecidas. Onde?",
    "resposta": "Nos ouvidos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Earwig"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Earwig",
        "situacao": "ok",
        "texto": "Earwigs make up the insect order Dermaptera. With about 2,000 species in 12 families, they are one of the smaller insect orders. Earwigs have characteristic cerci, a pair of forceps-like pincers on their abdomen, and membranous wings folded underneath short, rarely used forewings, hence the scientific order name, \"skin wings\". Some groups are tiny parasites on mammals and lack the typical pincers.\n[…]\nExtant Dermaptera belong to the suborder Neodermaptera, which first appeared during the Cretaceous. Some earwig specimen fossils are placed with extinct suborders Archidermaptera or Eodermaptera, the former dating to the Late Triassic and the latter to the Middle Jurassic.\n[…]\nThe scientific name for the order, Dermaptera, is Greek in origin, stemming from the words derma, meaning 'skin', and pteron (plural ptera), meaning 'wing'. It was coined by Charles De Geer in 1773. The common term, earwig, is derived from the Old English ēare, which means 'ear', and wicga, which means 'insect', or literally, 'beetle'.\n[…]\nThe first epizoic species of earwig was discovered by a London taxidermist on the body of a Malaysian hairless bulldog bat in 1909, then described by Karl Jordan. By the 1950s, the two suborders Arixeniina and Hemimerina had been added to Dermaptera. These were subsequently demoted to family Arixeniidae and superfamily Hemimeroidea (with sole family Hemimeridae), respectively. They are now grouped together with the former Forficulina in the new suborder Neodermaptera.\n[…]\nEarwig Research Center by Fabian Haas, Heilbronn\n[…]\nDermaptera Species File by Heidi Hopkins, Michael D. Maehr, Fabian Haas, and Lesley S. Deem\n[…]\nRinglegged earwig on the UF / IFAS Featured Creatures website\n[…]\nLangston RL & JA Powell (1975) The earwigs of California (Order Dermaptera). Bulletin of the California Insect Survey. 20\n[…]\nEarwigs Archived 15 December 2015 at the Wayback Machine from What's That Bug?"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lacrainha",
        "situacao": "ok",
        "texto": "Conhecidos no Brasil como tesourinhas ou lacrainhas e em Portugal como bicha-cadela ou raspelho , os dermápteros são insetos hemimetábolos e terrestres, com corpo alongado e presença de cercos geralmente em forma de pinça. O nome da ordem Dermaptera provém do grego derma = pele e pteron = asas, referindo-se às asas anteriores grossas e coriáceas presentes nesses insetos.\n[…]\nOs traços típicos de um representante de Dermaptera atual não estão presentes nos grupos extintos, como tarso de cinco tarsômeros, longo e multi-segmentados cerco e ausência de ocelos.\n[…]\nDe forma geral, a relação dos dermápteros com os seres humanos não é muito positiva. Provavelmente, isso é consequência de uma crença popular de que eles são prejudiciais, podendo adentrar o ouvido das pessoas para pôr os seus ovos lá e se alimentar do cérebro da vítima. Por esse motivo, o nome em inglês desses insetos é \"earwig“, que é derivado do inglês antigo ēare, que significa \"orelha\", e wicga, que significa \"inseto\" .\n[…]\nApesar de existirem alguns relatos de dermápteros entrando no canal externo do ouvido de pessoas enquanto elas dormem, eles não põem ovos lá ou se alimentam do cérebro delas. Eles podem se abrigar em ouvidos humanos porque vivem em lugares escuros e úmidos, e um ouvido apresenta essas características. Entretanto, eles são insetos praticamente inofensivos para humanos e só entram em ouvidos muito raramente.\n[…]\nAlém disso, como as tesourinhas costumam erguer seus cercos como forma de defesa, algumas pessoas as confundem com um escorpião ou pensam que esses insetos usam o cerco para inocular veneno, oferecendo riscos à saúde humana. Apesar de existirem espécies de Dermaptera que apresentam glândulas no abdômen por onde liberam uma secreção que pesquisadores acreditam servir para defesa, ela não é letal para humanos, podendo apenas causar irritações.\n[…]\nLacrainha - Controlar Ambiental",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Piolho-de-cobra",
      "descricao": "Artrópodes da classe Diplopoda, de corpo cilíndrico com dois pares de patas por segmento, que se enrolam quando ameaçados."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Lacraias, piolhos-de-cobra e outros bichos têm muitas patas. Qual deles tem dois pares de patas em cada segmento do corpo?",
    "resposta": "Piolho-de-cobra",
    "distratores": [
      "Lacraia",
      "Escutigera",
      "Tatuzinho-de-jardim"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Millipede",
      "https://en.wikipedia.org/wiki/Centipede"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Millipede",
        "situacao": "ok",
        "texto": "Millipedes (originating from the Latin mille, \"thousand\", and pes, \"foot\") are a group of arthropods that are characterised by having two pairs of jointed legs on most body segments; they are known scientifically as the class Diplopoda, the name derived from this feature. Each double-legged segment is a result of two single segments fused together.\n[…]\nClass Diplopoda de Blainville in Gervais, 1844\n[…]\nThe young hatch after a few weeks, and typically have only three pairs of legs, followed by up to four legless segments. As they grow, they continually moult, adding further segments and legs as they do so, a mode of development known as anamorphosis. Some species moult within specially prepared chambers of soil or silk, and may also shelter in these during wet weather, and most species eat the discarded exoskeleton after moulting.\n[…]\nFlat-backed millipedes in the order Polydesmida tend to insert their front end, like a wedge, into a horizontal crevice, and then widen the crack by pushing upwards with their legs, the paranota in this instance constituting the main lifting surface. Boring is used by members of the order Polyzoniida. These have smaller segments at the front and increasingly large ones further back; they propel themselves forward into a crack with their legs, the wedge-shaped body widening the gap as they go.\n[…]\nExperimental robots have had the same inspiration, in particular when heavy loads are needed to be carried in tight areas involving turns and curves. In biology, some authors have advocated millipedes as model organisms for the study of arthropod physiology and the developmental processes controlling the number and shape of body segments.\n[…]\nMilli-PEET: The Class Diplopoda – The Field Museum, Chicago\n[…]\nDiplopoda: Guide to New Zealand Soil Invertebrates – Massey University"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Centipede",
        "situacao": "ok",
        "texto": "Centipedes (from Neo-Latin centi- 'hundred' and Latin pes, pedis 'foot') are predatory arthropods belonging to the class Chilopoda of the subphylum Myriapoda, an arthropod group which includes millipedes and other multi-legged animals. Centipedes are elongated segmented (metameric) animals with one pair of legs per body segment.\n[…]\nThe final segment bears a telson, and includes the openings of the reproductive organs.\n[…]\nThe clade Epimorpha, consisting of the orders Geophilomorpha and Scolopendromorpha, is epimorphic, meaning that all pairs of legs are developed in the embryonic stages, and offspring do not develop more legs between moults. This clade contains the longest centipedes. In the Geophilomorpha, the number of thoracic segments usually varies within species, often on a geographical basis, and in most cases, females bear more legs than males.\n[…]\nThe number of leg-bearing segments varies within each order (usually 21 or 23 in the Scolopendromorpha; from 27 to 191 in the Geophilomorpha), but the total number of pairs is always odd, so there are never exactly 100 legs or 100 pairs, despite the group's common name.\n[…]\nCentipede segments are developed in two phases. Firstly, the head gives rise to a fixed but odd number of segments, driven by Hox genes as in all arthropods. Secondly, pairs of segments are added at the tail (posterior) end by the creation of a prepattern unit, a double segment, which is then always divided into two. The repeated creation of these prepattern units is driven by an oscillator clock, implemented with the Notch signalling pathway.\n[…]\nThe segments are homologous with the legs of other arthropods such as trilobites; it would be sufficient for the Notch clock to run faster, as it does in snakes, to create more legs."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dipl%C3%B3pode",
        "situacao": "ok",
        "texto": "Os diplópodes (Diplopoda) são animais artrópodes de solo, geralmente pequenos, alongados e escuros, vulgarmente conhecidos por piolhos-de-cobra, embuás, gongolos, maria-café, dentre outros nomes populares.. Ocorrem em ambientes úmidos ricos em matéria orgânica, sob pouca luminosidade, donde vivem e se alimentam por serem geralmente detritívoros de vegetação caída em decomposição.\n[…]\nTecnicamente, são uma classe de artrópodes miriápodes (Arthropoda: Myriapoda) que se caracterizam por apresentarem dois pares de pernas associados à maioria dos seus segmentos corporais (daí o nome científico da classe, diplo+poda, vide a seguir). A maioria dos diplópodes tem seu corpo cilíndrico e muito alongado, mas também existem alguns grupos com o corpo um pouco achatado, e ainda alguns milípedes (Oniscomorpha, por vezes chamados de tatuzinhos) mais curtos que podem enrolar-se numa bola.\n[…]\nVale ressaltar que os segmento com dois pares de pernas resultam da fusão, durante o desenvolvimento, de dois segmentos simples -- nisto diferenciam-se de outros grupos de miriápodes.\n[…]\nClasse Diplopoda de Blainville in Gervais, 1844\n[…]\nComo resultado da fusão, cada diplossegmento comporta dois pares de pernas, que caracterizam esta classe de miriápodes. (Note-se que os termos \"segmento\" ou \"anel corporal\" utilizam-se amiúdo indistintamente, para referir-se tanto a haplossegmentos como a diplossegmentos.)\n[…]\nOs milípedes respiram por dois pares de espiráculos localizados ventralmente em cada segmento perto da base das pernas. Cada abertura concede passagem a uma cavidade interna que pode armazenar oxigénio e conecta com um sistema traqueal. O coração estende-se por todo o comprimento do corpo, com uma aorta que se estende até à cabeça. Os órgãos excretores são dois pares de túbulos malpighianos, localizados perto da parte do meio do trato digestivo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Minhoca",
      "descricao": "Anelídeo terrestre da classe Oligochaeta que vive no solo."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes invertebrados tem sangue vermelho, com um pigmento parecido com a hemoglobina humana?",
    "resposta": "Minhoca",
    "distratores": [
      "Polvo",
      "Lagosta",
      "Escorpião"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Erythrocruorin",
      "https://en.wikipedia.org/wiki/Hemocyanin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Erythrocruorin",
        "situacao": "ok",
        "texto": "Erythrocruorin (from Greek eruthros \"red\" + Latin cruor \"blood\"), and the similar chlorocruorin (from Greek khlōros \"green\" + Latin cruor \"blood\"), are large oxygen-carrying hemeprotein complexes, which have a molecular mass greater than 3.5 million daltons. Both are sometimes called giant hemoglobin or hexagonal bilayer haemoglobin. They are found in many annelids and arthropods (including some i\n[…]\nGiant hemoglobin is composed of multiple heme-containing globin chains and linker (InterPro: IPR031639) chains. Each species have different amounts of genes for these chains. For example, while a Lamellibrachia sp. has four kinds of globin chains and two kinds of linker chains, Sabella spallanzanii has three globin chains and three linker chains. The exact stoichiometric ratios and arrangement is unknown, but is thought to resemble that of erythocrorins.\n[…]\nErythrocruorin has a weaker affinity for oxygen than that of most hemoglobins. A dichromatic compound, chlorocruorin is noted for appearing green in dilute solutions, though it appears light red when found in concentrated solutions."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hemocyanin",
        "situacao": "ok",
        "texto": "Hemocyanins (also spelled haemocyanins and abbreviated Hc) are  proteins that transport oxygen throughout the bodies of some invertebrate animals. These metalloproteins contain two copper atoms that reversibly bind a single oxygen molecule (O2). They are second only to hemoglobin in frequency of use as an oxygen transport molecule. Unlike the hemoglobin in red blood cells found in vertebrates, hem\n[…]\nMost hemocyanins bind with oxygen non-cooperatively and are roughly one-fourth as efficient as hemoglobin at transporting oxygen per amount of blood. Hemoglobin binds oxygen cooperatively due to steric conformation changes in the protein complex, which increases hemoglobin's affinity for oxygen when partially oxygenated. In some hemocyanins of horseshoe crabs and some other species of arthropods, cooperative binding is observed, with Hill coefficients of 1.6–3.0.\n[…]\nHill coefficients vary depending on species and laboratory measurement settings. Hemoglobin, for comparison, has a Hill coefficient of usually 2.8–3.0. In these cases of cooperative binding hemocyanin was arranged in protein sub-complexes of 6 subunits (hexamer) each with one oxygen binding site; binding of oxygen on one unit in the complex would increase the affinity of the neighboring units. Each hexamer complex was arranged together to form a larger complex of dozens of hexamers.\n[…]\nBecause of the large size of hemocyanin, it is usually found free-floating in the blood, unlike hemoglobin.\n[…]\nRespiratory pigment"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eritrocruorina",
        "situacao": "ok",
        "texto": "A eritrocruorina é uma grande proteína transportadora de oxigénio que se encontra no sangue de muitos anelídeos e de alguns artrópodes. As eritrocrurinas são complexos enormes, com mais de 3,5 milhões de Da, compostos por muitas subunidades de hemoglobina unidas por outras subunidades não hemoglobináticas. As eritrocruorinas flutuam livremente no plasma, uma vez que não estão no interior das célul\n[…]\nA natureza extracelular e o grande tamanho destes complexos fizeram com que fossem utilizados em alguns dos primeiros estudos de cristalização, ultracentrifugação e microscopia electrónica de proteínas.\n[…]\nNo caso da eritrocruorina de Lumbricus terrestris, é constituída por 180 subunidades, das quais 144 são hemoglobina (de quatro tipos diferentes de cadeias de hemoglobina) e 36 são outras cadeias ligantes não hemoglobinares (de quatro tipos diferentes). As subunidades de hemoglobina estão dispostas em doze estruturas dodecaméricas, e as não hemoglobinares formam doze estruturas triméricas que se projetam extensões para o centro do complexo e se interdigitam, estabilizando-o.\n[…]\nHemoglobina",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Náutilo",
      "descricao": "Cefalópode de concha externa espiralada e dividida em câmaras (Nautilus pompilius)."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre os cefalópodes que vivem hoje nos mares, qual destes mora dentro de uma concha externa em espiral?",
    "resposta": "Náutilo",
    "distratores": [
      "Lula",
      "Polvo",
      "Choco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nautilus",
      "https://en.wikipedia.org/wiki/Cephalopod"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nautilus",
        "situacao": "ok",
        "texto": "A nautilus (from Latin  nautilus 'sails like a vessel'; from Ancient Greek  ναυτίλος (nautílos) 'seaman, sailor') is any of the various species within the cephalopod family Nautilidae. This is the sole extant family of the superfamily Nautilaceae, suborder Nautilina, order Nautilida, and subclass Nautiloidea.\n[…]\nNautili are the sole living cephalopods whose bony body structure is externalized as a planispiral shell. The animal can withdraw completely into its shell and close the opening with a leathery hood formed from two specially folded tentacles. The shell is coiled, aragonitic, nacreous and pressure-resistant, thought to be imploding at a depth of about 800 m (2,600 ft).\n[…]\nGenus Nautilus\n[…]\nDespite their legal protection, these shells were reported to be openly sold at tourist areas in Bali as of 2014. The continued trade of these animals has led to a call for increased protection and in 2016 all species in the family Nautilidae were added to CITES Appendix II, regulating international trade.\n[…]\nPalauans see nautiluses (Palauan: kedarm) as a symbol of vulnerable or fragile character from a belief that they easily die even from slight bumps on ocean rocks; hence someone who gets quickly angry after being pranked is compared to one (ng ko er a kedarm, el di metirem e metord).\n[…]\nThe Nautilus, a malacological journal\n[…]\nThe Chambered Nautilus, a poem of Oliver Wendell Holmes\n[…]\nNautilus Pompilius, a Russian rock band\n[…]\nNautilus (fictional submarine) from Jules Verne's classic 1870 science-fiction novel Twenty Thousand Leagues Under the Seas, describing the voyage of Captain Nemo's Nautilus submarine.\n[…]\nNautilidae discussion forum, tonmo.com\n[…]\nWaikïkï Aquarium: Marine Life Profile: Chambered Nautilus, waguarium.org\n[…]\nA molecular and karyological approach to the taxonomy of Nautilus, utmb.edu\n[…]\nCephBase: Nautilidae"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cephalopod",
        "situacao": "ok",
        "texto": "A cephalopod (; also  in British English) is any member of the molluscan class Cephalopoda  (Greek plural κεφαλόποδες, kephalópodes; \"head-feet\") such as a squid, octopus, cuttlefish, or nautilus. These exclusively marine animals are characterized by bilateral body symmetry, a prominent head, and a set of arms or tentacles (muscular hydrostats) modified from the primitive molluscan foot. Fishers s\n[…]\nCephalopods became dominant during the Ordovician period, represented by primitive nautiloids. The class contains two, only distantly related, extant subclasses: Coleoidea, which includes octopuses, squid, and cuttlefish; and Nautiloidea, represented by Nautilus and Allonautilus. In the Coleoidea, the molluscan shell has been internalized or is absent, whereas in the Nautiloidea, the external shell remains. About 800 living species of cephalopods have been identified.\n[…]\nNautiluses are the only extant cephalopods with a true external shell. However, all molluscan shells are formed from the ectoderm (outer layer of the embryo); in cuttlefish (Sepia spp.), for example, an invagination of the ectoderm forms during the embryonic period, resulting in a shell (cuttlebone) that is internal in the adult. The same is true of the chitinous gladius of squid and octopuses.\n[…]\nExternally shelled nautilids (Nautilus and Allonautilus) have on the order of 90 finger-like appendages, termed tentacles, which lack suckers but are sticky instead, and are partly retractable.\n[…]\nOrder Nautilida\n[…]\nOrder Nautilida (410.5 Ma-Rec)\n[…]\nAnother recent system divides all cephalopods into two clades. One includes nautilus and most fossil nautiloids. The other clade (Neocephalopoda or Angusteradulata) is closer to modern coleoids, and includes belemnoids, ammonoids, and many orthocerid families. There are also stem group cephalopods of the traditional Ellesmerocerida that belong to neither clade.\n[…]\nList of nautiloids"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nautilidae",
        "situacao": "ok",
        "texto": "Nautilidae (classificada por Henri Marie Ducrotay de Blainville, em 1825, na obra Manuel de malacologie et de conchyliologie e nomeados, em inglês, pearly nautiluses; na tradução para o portuguêsː \"nautiloides perolados\"; ou simplesmente denominados nautiloides e seus indivíduos náutilo ou nautilídeo) é uma família de moluscos cefalópodes nectônicos marinhos do Indo-Pacífico caracterizada por ter \n[…]\nNautilus e Allonautilus (allo significando diferente) são os últimos gêneros vivos de cefalópodes com concha externa, cujo desenrolar forma uma espiral logarítmica perfeita, porém não atingindo a proporção áurea.\n[…]\nTodas as espécies de Nautilidae descritas para o Holoceno são caracterizadas por apresentar conchas moderadamente lisas e de coloração externa esbranquiçada, com poucos indícios de dimorfismo sexual e atingindo 18 (Allonautilus) ou pouco mais de 25 centímetros (em Nautilus pompilius), com uma série de manchas raiadas de coloração avermelhada, sendo dotadas de uma região negra próxima da abertura e cujas voltas da espiral se inserem para o seu interior (espiral convoluta).\n[…]\nAlgumas populações de Nautilus estão em declínio devido ao excesso de coleta de suas belas conchas, já que seus hábitos de comer carniça os tornam propensos a ser capturados em armadilhas. Enquanto sua exportação é proibida em alguns países (como a Indonésia, que proibiu sua coleta e exportação desde 1987), outros países continuam a permitir o seu comércio.\n[…]\nQuanto à maioria das formas extintas, não há como saber em pormenor a estrutura dos seus tecidos moles (que geralmente não se fossilizam) e os três grupos incluem formas que são mais ou menos diferentes entre si; em particular dentre os Nautiloidea, que diversificaram-se fortemente com características diversas, tanto que alguns destes diferem mais entre si, em seus formatos, do que no caso dos Ammonoidea conhecidos.\n[…]\nNautilidae discussion forum",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Joaninha",
      "descricao": "Besouros da família Coccinellidae, pequenos, arredondados e geralmente vermelhos com pintas pretas."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes insetos passa por metamorfose completa, com larva e pupa, antes de chegar à forma adulta?",
    "resposta": "Joaninha",
    "distratores": [
      "Gafanhoto",
      "Barata",
      "Louva-a-deus"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Holometabolism",
      "https://en.wikipedia.org/wiki/Coccinellidae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Holometabolism",
        "situacao": "ok",
        "texto": "Holometabolism, also called complete metamorphosis, is a form of insect development which includes four life stages: egg, larva, pupa, and imago (or adult). Holometabolism is a synapomorphic trait of all insects in the clade Holometabola. Immature stages of holometabolous insects are very different from the mature stage. In some species, a holometabolous life cycle minimizes competition between la\n[…]\nTo enter the third stage of holometabolous development, the larva undergoes metamorphosis into a pupa. The pupa is a quiescent, non-feeding developmental stage. Most pupae move very little, although the pupae of some species, such as mosquitoes, are mobile. In preparation for pupation, the larvae of many species seek protected sites or construct a protective cocoon of silk or other material, such as its own accumulated feces. Some insects undergo diapause as pupa.\n[…]\nThe origin of complete metamorphosis in insects has been the subject of a long lasting and, at times, fierce debate. One of the first theories proposed was one by William Harvey in 1651. Harvey suggested that the nutrients contained within the insect egg are so scarce that there was selection for the embryo to be forced to hatch before the completion of development.\n[…]\nThe conservation is especially high in the C2H2 Zn finger domain of the homologous transducer, which is the most complex binding site. This high degree of conservation of the C2H2 Zn finger domain in all studied species suggests that the Kr-h1 transducer function, an important part of the metamorphic process, might have been generally conserved across the entire class Insecta.\n[…]\nRolff, Jens; Johnston, Paul R.; Reynolds, Stuart (2019). \"Complete metamorphosis of insects\". Philosophical Transactions of the Royal Society B. 374 (1783) 20190063. doi:10.1098/rstb.2019.0063. PMC 6711294. PMID 31438816.\n[…]\nHow Did Insect Metamorphosis Evolve? Scientific American"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Coccinellidae",
        "situacao": "ok",
        "texto": "Coccinellidae ( ) is a widespread family of small beetles. They are commonly known as ladybugs in North America and ladybirds in the United Kingdom, Australia, New Zealand, Ireland, and other English speaking territories; \"lady\" refers to Mary, the mother of Jesus. Entomologists use the names ladybird beetles or lady beetles to avoid confusion with true bugs. The more than 6,000 described species \n[…]\nMost coccinellid species are carnivorous predators, preying on insects such as aphids and scale insects. Other species are known to consume non-animal matter, including plants and fungi. They are promiscuous breeders, reproducing in spring and summer in temperate regions and during the wet season in tropical regions. Many predatory species lay their eggs near colonies of prey, providing their larvae with a food source. Like most insects, they develop from larva to pupa to adult.\n[…]\nThis is likely a form of sperm competition. Like other insects, coccinellids develop from egg, to larva, to pupa and finally adult. Eggs tend to be bright yellow, and the females lay them close together, standing upright and near where they can access food. The number of eggs in a cluster can vary depending on the species; it is typically in the double digits but some species can lay over a thousand eggs in their lifetime.\n[…]\nThe larva eventually transitions into a pupa; which involves the development of a hunch, the fusion of the legs to the body, and the attachment of the posterior to the surface.\n[…]\nFor Adalia bipunctata, eggs hatch after four to eight days, the larva stage lasts around three weeks and the pupa lasts seven to ten days. Adult coccinellids develop much of their final colouration within hours, but may not fully darken for weeks or months. The lifespan of an adult reaches up to a year.\n[…]\nMedia related to Coccinellidae at Wikimedia Commons\n[…]\nData related to Coccinellidae at Wikispecies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Holometabolismo",
        "situacao": "ok",
        "texto": "Holometabolismo, também denominado metamorfose completa, é um termo aplicado para nomear o tipo específico de desenvolvimento observado em um grupo de insetos que inclui quatro estágios de vida – a fase de ovo ou embrionária, a fase larval, a fase de pupa e a fase de imago ou adulta. O holometabolismo é sinapomorfia do clado Endopterygota.\n[…]\nO primeiro estágio vai da fertilização dos ovos até a eclosão dos ovos. O inseto inicia seu desenvolvimento como uma única célula até eclodir na forma de larva.\n[…]\nVai da eclosão dos ovos até a formação da pupa larvar. Neste estágio, o bicho geralmente se apresenta na forma de vermes, embora haja uma grande diversidade de padrões: eruciforme (lagarta), escarabeiforme (típica dos besouros), campodeiforme, elateriforme ou vermiforme. Este estágio é geralmente caracterizado por crescimento exponencial e grande acúmulo de energia para a metamorfose na fase pupar.\n[…]\nEsta fase vai desde a formação do casulo até a eclosão do indivíduo adulto. Neste estágio o organismo do inseto se modifica drasticamente e o inseto depende apenas da energia acumulada na fase larvar.\n[…]\nO adulto holometábolo possui órgãos reprodutivos funcionais e, geralmente, asas: pode tanto ser uma fase efêmera apenas destinada à reprodução como o estágio mais longo da vida do inseto a depender do táxon.\n[…]\nBritton, Dave (9 de julho de 2009). «Metamorphosis: a remarkable change». Australian Museum. Cópia arquivada em 11 de agosto de 2011\n[…]\nRolff, Jens; Johnston, Paul R.; Reynolds, Stuart (2019). «Complete metamorphosis of insects». Philosophical Transactions of the Royal Society B. 374 (1783): 20190063. PMC 6711294. PMID 31438816. doi:10.1098/rstb.2019.0063",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Mosca-doméstica",
      "descricao": "Mosca comum Musca domestica, cosmopolita, que convive com os humanos."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Abelhas, libélulas, borboletas e moscas voam, mas só uma delas usa apenas um par de asas. Qual?",
    "resposta": "Mosca",
    "distratores": [
      "Abelha",
      "Libélula",
      "Borboleta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fly",
      "https://en.wikipedia.org/wiki/Housefly"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fly",
        "situacao": "ok",
        "texto": "A fly (pl. flies) is an insect of the order Diptera (from Ancient Greek  δι- di- 'two' and  πτερόν pteron 'wing'), named for the single pair of wings. The hindwings have evolved into halteres, organs that sense rotation, giving flies precise control of their flight. Diptera is a large order containing more than 150,000 species, including horse-flies, crane flies, hoverflies, mosquitoes and others.\n[…]\nWhile most species have restricted distributions, a few, like the housefly (Musca domestica), are cosmopolitan. Gauromydas heros (Asiloidea), with a length of up to 7 cm (2.8 in), is generally considered to be the largest fly in the world, while the smallest is Euryplatea nanaknihali which, at 0.4 mm (0.016 in), is smaller than a grain of salt.\n[…]\nMusca depicta (\"painted fly\" in Latin) is a depiction of a fly as an inconspicuous element of various paintings. This feature was widespread in 15th and 16th centuries paintings and can appear for various reasons.\n[…]\nDipterans are an important group of insects and have a considerable impact on the environment. Some leaf-miner flies (Agromyzidae), fruit flies (Tephritidae and Drosophilidae) and gall midges (Cecidomyiidae) are pests of agricultural crops; others, such as tsetse flies, screwworm and botflies (Oestridae), attack livestock, causing wounds, spreading disease, and creating significant economic harm. Others are parasites of various domestic animals. A few can cause myiasis in humans."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Housefly",
        "situacao": "ok",
        "texto": "The housefly (Musca domestica) is a species of fly in the family Muscidae. From its place of origin, possibly in the Middle East, it has spread around the world as a commensal of humans. Adults are gray to black, with four dark, longitudinal lines on the thorax, slightly hairy bodies, and a single pair of membranous wings. They have red compound eyes, set farther apart in the slightly larger femal\n[…]\nThe housefly was first described as Musca domestica in 1758 based on the common European specimens by the Swedish botanist and zoologist Carl Linnaeus in his Systema naturae and continues to be classified under that name. A more detailed description was given in 1776 by the Danish entomologist Johan Christian Fabricius in his Genera Insectorum.\n[…]\nHister beetles feed on housefly larvae in manure heaps and the predatory mite Macrocheles muscae domesticae consumes housefly eggs, each mite eating 20 eggs per day.\n[…]\nHouseflies have been used in art and artifacts in many cultures. In 16th- and 17th-century European vanitas paintings, houseflies sometimes occur as memento mori. These depictions, Musca depicta, are also used for other effects as in the Flemish painting, the Master of Frankfurt (1496). Housefly amulets were popular in ancient Egypt.\n[…]\nResistance to carbamates and organophosphates is conferred by variation in acetylcholinesterase genes. M. domestica has achieved a high degree of resistance. Resistance monitoring is vital to avoid continued use of ineffective active ingredients such as found in the notably severe example of Freeman et al 2019 in Kansas and Maryland, USA.\n[…]\nThe house-fly, Musca domestica Linn. : its structure, habits, development, relation to disease and control  by C. Gordon Hewitt (1914)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/D%C3%ADpteros",
        "situacao": "ok",
        "texto": "Os dípteros (Diptera, do grego δίπτερα: di = duas, ptera = asas) é a quarta ordem mais diversa pertencente à classe dos insectos (atrás apenas dos coleópteros, dos lepidópteros e dos himenópteros), com aproximadamente 150 mil espécies descritas em 158 famílias, sendo cerca de 8,7 mil presentes em território brasileiro. Deste grupo fazem parte moscas, mosquitos, varejeiras, pernilongos, borrachudos\n[…]\nEstes insetos são caracterizados por possuir apenas um par de asas para voo, enquanto o segundo par, comum às outras ordens de insetos, que apresentam dois pares de asas, é reduzido e modificado em halteres que auxiliam no controle de equilíbrio do voo. São insetos holometábolos, ou seja, apresentam ciclo de vida com metamorfose completa, com fase de ovo, larva, pupa e adulto.\n[…]\nOs dípteros pertencem à superordem dos neuropterídeos e estão inclusos no clado dos insetos holometábolos (os endopterigotos), ou seja, que realizam metamorfose completa ao longo do seu ciclo de vida e também os insetos que, durante a fase larval, suas asas estão internalizadas e, portanto, invisíveis ao olhar. Nestes insetos as asas se externalizam apenas na fase de pupa.\n[…]\nOs estudos genéticos envolvendo a Drosophila melanogaster foram iniciados por W. E. Castle, que foi o pesquisador que desenvolveu as técnicas de criação destas moscas em laboratório, muitas utilizadas até hoje. Thomas Hunt Morgan, em 1908, na Universidade Columbia (Columbia University, New York), adotou o mesmo organismo-modelo para seus estudos, a fim de entender padrões de hereditariedade.\n[…]\nO trabalho de Morgan inspirou diversos geneticistas pelo mundo a trabalhar com esta mosca, tornando-a um modelo de estudos não só de genética como de diversas outras áreas da biologia, como desenvolvimento, evolução, etc.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Escorpião",
      "descricao": "Aracnídeos predadores da ordem Scorpiones, com pinças e cauda terminada em ferrão venenoso."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes aracnídeos dá à luz filhotes já formados, em vez de pôr ovos?",
    "resposta": "Escorpião",
    "distratores": [
      "Aranha",
      "Carrapato",
      "Opilião"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Scorpion"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scorpion",
        "situacao": "ok",
        "texto": "Scorpions (order Scorpiones) are predatory arachnids with eight legs, a pair of grasping pincers and a narrow, segmented tail, often carried in a characteristic forward curve over the back and always ending with a stinger. The evolutionary history of scorpions goes back to the Silurian Period, approximately 430 million years ago. They mainly live in deserts but have adapted to a wide range of envi\n[…]\nThey are used in Vietnam to make a variant of snake wine (scorpion wine).\n[…]\nThe fable of The Scorpion and the Frog has been interpreted as showing that vicious people cannot resist hurting others, even when it is not in their interests. More recently, the action in John Steinbeck's 1947 novella The Pearl centers on a poor pearl fisherman's attempts to save his infant son from a scorpion sting, only to lose him to human violence.\n[…]\nScorpions have equally appeared in western artforms including film and poetry: the surrealist filmmaker Luis Buñuel made symbolic use of scorpions in his 1930 classic L'Age d'or (The Golden Age). A hand- or forearm-balancing asana in modern yoga as exercise with the back arched and one or both legs pointing forward over the head in the manner of the scorpion's tail is called Scorpion pose.\n[…]\nPolis, Gary (1990). The Biology of Scorpions. Stanford University Press. ISBN 978-0-8047-1249-1. OCLC 18991506.\n[…]\nPryke, L. M. (2016). Scorpion. Reaktion Books. ISBN 978-1-78023-625-4.\n[…]\nStockmann, Roland; Ythier, Eric (2010). Scorpions of the World. N. A. P. Editions. ISBN 978-2-913688-11-7.\n[…]\nStockmann, Roland (2015). \"Introduction to Scorpion Biology and Ecology\". In Gopalakrishnakone, P.; Possani, L.; F. Schwartz, E.; Rodríguez de la Vega, R. (eds.). Scorpion Venoms. Springer. pp. 25–59. ISBN 978-94-007-6403-3.\n[…]\nAmerican Museum of Natural History - Scorpion Systematics Research Group\n[…]\nCDC – Insects and Scorpions – NIOSH Workplace Safety and Health Topic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escorpi%C3%A3o",
        "situacao": "ok",
        "texto": "Escorpiões (da ordem Scorpiones) são aracnídeos predadores com oito patas, um par de pinças (chamadas de quela) e uma cauda segmentada e estreita, frequentemente curvada caracteristicamente sobre o dorso e sempre terminando em um ferrão. A história evolutiva dos escorpiões remonta a 435 milhões de anos. Eles vivem principalmente em desertos, mas se adaptaram a uma ampla gama de condições ambientai\n[…]\nHá espécies de escorpiões que são vivíparas (Se desenvolvem dentro do corpo da fêmea em uma placenta), mas a maioria é ovovivípara (se desenvolvem em um ovo dentro do corpo da fêmea, que eclode internamente). Podem gerar de 6 a 90 filhotes e o tempo de gestação varia com a temperatura, espécie e alimentação da mãe, podendo estar entre 2 meses e 2 anos. Os filhotes nascem completamente brancos e por meio de parto, através de uma fenda genital.\n[…]\nOs escorpiões diferem dos outros aracnídeos por terem palpos compridos, além da característica cauda longa e perigosa. Os palpos funcionam como pinças grandes e poderosas, que podem ser usadas para segurar e dominar suas presas. São muito sensíveis ao tato e ao deslocamento do ar, devido à presença de cerdas muito longas e finas. Os escorpiões também podem possuir maior número de olhos que outros aracnídeos, algumas espécies chegando a possuir até seis pares, embora não seja comum.\n[…]\nA divisão dos tagmas em Scorpiones se diferencia da maioria dos outros aracnídeos por apresentar prossoma, mesossoma e metassoma. O opistossoma é bastante segmentado, chegando a apresentar doze segmentos. O opistossoma divide-se em mesossoma, com sete segmentos, e metassoma, porção formada pelos cinco segmentos posteriores. Estes constituem a cauda, juntamente com o télson, o último segmento. A cauda termina como um aguilhão e é através deste ferrão que o escorpião inocula sua peçonha.\n[…]\nBiologia, Habitat, Nutrição e Medidas Preventivas dos Escorpiões",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Tamarutaca",
      "descricao": "Crustáceos marinhos da ordem Stomatopoda, com patas raptoriais que golpeiam a presa com enorme velocidade."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Nós enxergamos as cores com três tipos de células receptoras nos olhos. Os olhos da tamarutaca têm até quantos tipos?",
    "resposta": "Dezesseis",
    "distratores": [
      "Quatro",
      "Seis",
      "Cem"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mantis_shrimp"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mantis_shrimp",
        "situacao": "ok",
        "texto": "Mantis shrimp are carnivorous marine crustaceans of the order Stomatopoda (from Ancient Greek  στόμα (stóma) 'mouth' and  πούς (poús) 'foot'). Stomatopods branched off from other members of the class Malacostraca around 400 million years ago, with more than 520 extant species of mantis shrimp known. All living species are in the suborder Unipeltata, which arose around 250 million years ago. They a\n[…]\nStomatopod body size undergoes periodic growth which necessitates finding a new cavity or burrow that will fit the animal's new diameter. Some spearing species can modify their pre-established habitat if the burrow is made of silt or mud, which can be expanded.\n[…]\nAlthough the Devonian Eopteridae have been suggested to be early stomatopods, their fragmentary known remains make the referral uncertain. The oldest unambiguous stem-group mantis shrimp date to the Carboniferous (359–300 million years ago). Stem-group mantis shrimp are assigned to two major groups the Palaeostomatopodea and the Archaeostomatopodea, the latter of which are more closely related to modern mantis shrimp, which are assigned to the clade Unipeltata.\n[…]\nCladogram of fossil stomatopods after Smith et al. 2023:\n[…]\nA large number of mantis shrimp species were first scientifically described by one carcinologist, Raymond B. Manning; the collection of stomatopods he amassed is the largest in the world, covering 90% of the known species whilst 10% are still unknown.\n[…]\nSome saltwater aquarists keep stomatopods in captivity. The peacock mantis is especially colourful and desired in the trade.\n[…]\nWhile stomatopods do not eat coral, smashers can damage it if they try to make a home within it.\n[…]\nHoplocarida: Stomatopoda fact sheet—Guide to the marine zooplankton of south eastern Australia\n[…]\nThe Lurker's Guide to Stomatopods—mantis shrimp\n[…]\nResearch on Stomatopods at the University of Maryland Archived 2010-05-30 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stomatopoda",
        "situacao": "ok",
        "texto": "Stomatopoda (ou estomatópode), chamados popularmente de tamarutacas ou de lacraias-do-mar no Brasil, é uma ordem de crustáceos marinhos da subclasse Hoplocarida, que agrupa cerca de 400 espécies, caracterizadas principalmente pela morfologia da segunda pata torácica, que é modificada em apêndice subquelado, lembrando uma pata de louva-a-deus.\n[…]\nEsses animais possuem o mais complexo sistema de visão de cores do mundo animal, pois enxergam 12 cores primárias, correspondentes aos 12 pigmentos distintos presentes em sua retina.\n[…]\nNossos olhos possuem três tipos desses receptores - que correspondem à luz azul, verde e vermelha -, que nos permitem perceber o espectro de cores que vemos. Os cães contam com apenas dois tipos de cones (verde e azul), e é por isso que eles vêm tons de azul, verde e um pouco de amarelo. Muitos anfíbios, répteis, aves e insetos possuem quatro tipo de cones, o que significa que espécies dessas classes conseguem ver cores que o nosso cérebro é incapaz de processar.\n[…]\nAlgumas espécies específicas de borboletas e possivelmente pombos possuem cinco cones de percepção de cor, o que aumenta ainda mais a quantidade de pigmentos que eles são capazes de perceber. O sistema de visão dos estomatópodes possui doze cones sensíveis à luz e outros quatro que filtram a luz (16 cones no total), o que lhes permite ver cores polarizadas e imagens multiespectrais.\n[…]\nComo cada cone pode ver cerca de 100 cores, os estomatópodes são capazes de ver 1024 cores, ou seja, 1 septilhão de cores. Em comparação, o olho humano vê 106 cores, ou seja, 1 milhão de cores apenas. A visão dos estomatópodes é sensível à luz ultravioleta, mas ainda é desconhecido se ela pode distinguir a luz infravermelha.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Borboleta-monarca",
      "descricao": "Borboleta norte-americana (Danaus plexippus) de asas laranja, pretas e brancas, famosa pela migração anual."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "As monarcas que voam ao México no outono vivem muito mais que as das gerações de verão. Cerca de quanto tempo?",
    "resposta": "Cerca de oito meses",
    "distratores": [
      "Cerca de duas semanas",
      "Cerca de três anos",
      "Cerca de dez anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Monarch_butterfly_migration",
      "https://en.wikipedia.org/wiki/Monarch_butterfly"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monarch_butterfly_migration",
        "situacao": "ok",
        "texto": "Monarch butterfly migration is the phenomenon, mainly throughout North America, where the monarch subspecies Danaus plexippus plexippus migrates each autumn to overwintering sites near the west coast of California or mountainous sites in central Mexico. Other populations from around the world perform minor migrations or none at all. This massive movement of butterflies has been recognized as \"one \n[…]\nMigrating western populations of Danaus plexippus and their overwintering sites were known long before the Mexican winter sites were discovered by scientists in 1975. Pre-Hispanic Native Americans, the Purépecha and Otomi once occupied this area and tied the harvest of corn to the arrival of the butterflies. Monarchs appear in legends of the people that live near overwintering areas.\n[…]\nOn December 12, 2024, the United States Fish and Wildlife Service (USFWS) published in the Federal Register a proposed rule that would list the monarch butterfly (Danaus plexippus) as a threatened species and would designate the butterfly's critical habitat in accordance with the provisions of the Endangered Species Act of 1973.\n[…]\nAs of June 2025, at least 14 states (California, Connecticut, Illinois, Kentucky, Maryland, Massachusetts, Minnesota, Missouri, New Jersey, New Mexico, New York, North Carolina, Ohio, Vermont and Washington) had enacted legislation to protect, develop and restore habitat suitable for pollinators. For example, the New Jersey General Assembly considered legislation in 2014 that was intended to increase the monarch butterfly's migrating population within the state.\n[…]\nDavis, Andrew K. (2014). \"Opinion: conservation of monarch butterflies (Danaus plexippus) could be enhanced with analyses and publication of citizen science tagging data\". Insect Conservation and Diversity. 8 (2): 103–106. doi:10.1111/icad.12084. S2CID 84231577.\n[…]\nForests For Monarchs, Mexico\n[…]\nMonarch Watch"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Monarch_butterfly",
        "situacao": "ok",
        "texto": "The monarch butterfly or simply monarch (Danaus plexippus) is a milkweed butterfly (subfamily Danainae) in the family Nymphalidae. Other common names, depending on region, include milkweed, common tiger, wanderer, and black-veined brown. It is among the most familiar of North American butterflies and an iconic pollinator, although it is not an especially effective pollinator of milkweeds.\n[…]\nThe species was originally described by Carl Linnaeus in his Systema Naturae of 1758 and placed in the genus Papilio. In 1780, Jan Krzysztof Kluk used the monarch as the type species for a new genus, Danaus. However, many works published between at least 1883 and 1964 identified the species as Anosia plexippus or Anosia archippus.\n[…]\nOn August 14, 2014, the Center for Biological Diversity and the Center for Food Safety petitioned the United States Secretary of the Interior through the USFWS to protect the Danaus plexippus plexippus subspecies of the monarch butterfly as a threatened species under the Endangered Species Act.\n[…]\nOn December 12, 2024, the USFWS published in the Federal Register a proposed rule that would list the monarch butterfly (Danaus plexippus) as a threatened species and would designate the butterfly's critical habitat per the provisions of the Endangered Species Act. The USFWS estimated in the proposed rule that the probability of extinction in the foreseeable future (60 years) is 56-74 percent for the eastern monarch migratory population and 99 percent for the western migratory population.\n[…]\nMonarch Butterflies: Increase the Eastern population of the monarch butterfly to 225 million butterflies occupying an area of approximately 15 acres (6.1 hectares) in the overwintering grounds in Mexico, through domestic/international actions and public-private partnerships, by 2020.\n[…]\nMonarch Watch\n[…]\nUSGS description of monarch butterfly\n[…]\nMonarch butterfly data at NatureServe Explorer"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Aedes aegypti",
      "descricao": "Mosquito de origem africana, transmissor da dengue, da zika, da chikungunya e da febre amarela urbana."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Diferente do pernilongo comum, que ataca à noite, o mosquito da dengue costuma picar em que período?",
    "resposta": "Durante o dia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aedes_aegypti",
      "https://pt.wikipedia.org/wiki/Aedes_aegypti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aedes_aegypti",
        "situacao": "ok",
        "texto": "Aedes aegypti (; US: ; from Ancient Greek  αηδής (aēdḗs) 'unpleasant' and Latin  aegyptī 'Egyptian') – sometimes called the yellow fever mosquito – is a mosquito that spreads diseases such as dengue fever, yellow fever, and chikungunya. The mosquito can be recognized by black and white markings on its legs and a marking in the form of a lyre on the upper surface of its thorax.\n[…]\nFemale Aedes aegypti mosquitoes feed primarily on human blood and are considered highly anthropophilic, meaning that they show a strong preference for humans as hosts. This feeding preference contributes to the species' importance in the transmission of human pathogens, including dengue, Zika, chikungunya, and yellow fever viruses.\n[…]\nAlthough Aedes aegypti mosquitoes most commonly feed at dusk and dawn, indoors, in shady areas, or when the weather is cloudy, \"they can bite and spread infection all year long and at any time of day.\"\n[…]\nFungal species Erynia conica (from the family Entomophthoraceae) infects (and kills) two types of mosquitos: Aedes aegypti and Culex restuans. Studies on the fungus have been carried out on its potential use as a biological control of the mosquitos.\n[…]\nTo stabilise the nomenclature, a petition to the International Commission on Zoological Nomenclature was made by P. F. Mattingly, Alan Stone, and Kenneth L. Knight in 1962. It also transpired that, although the name Aedes aegypti was universally used for the yellow fever mosquito, Linnaeus had actually described a species now known as Aedes (Ochlerotatus) caspius.\n[…]\nAedes aegypti on the entomology Institute of Food and Agricultural Sciences Featured Creatures Web site University of Florida.\n[…]\nUnited States CDC page on dengue fever containing information on prevalence of Aedes aegypti worldwide and past efforts to eradicate it\n[…]\nAedes aegypti Community Eradication using copepods. The Monte Verde Story (Honduras)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aedes_aegypti",
        "situacao": "ok",
        "texto": "Aedes (Stegomyia) aegypti (aēdēs do grego αηδής: \"odioso\" e ægypti do latim, significando \"do Egipto\") é a nomenclatura taxonômica para o mosquito que é popularmente conhecido como mosquito-da-dengue ou pernilongo-rajado, uma espécie de mosquito da família Culicidae proveniente da África, atualmente distribuído por quase todo o mundo, especialmente em regiões tropicais e subtropicais, sendo depend\n[…]\nO Aedes aegypti é um mosquito que se encontra ativo e pica durante o dia, ao contrário do Anopheles, vector da malária, que tem atividade crepuscular. O Aedes aegypti tem, como vítima preferencial, o ser humano, e não faz praticamente som audível antes de picar. Mede menos de 1 centímetro e é preto com manchas brancas no corpo e nas pernas.\n[…]\nSão substâncias extraídas de plantas com capacidade de matar as larvas do Aedes aegypti, como exemplo da Crotalaria juncea também é utilizada, pois é uma planta que atrai as libélulas, que costumam se alimentar dos adultos e das larvas de A. aegypti. Muitas plantas produzem compostos químicos (chamados de metabólitos secundários) que as protegem de insetos e outras ameaças. Esses mesmos compostos podem ser usados para combater o mosquito da dengue.\n[…]\nMapeamento e Controle do Aedes aegypti\n[…]\nO georreferenciamento é uma ferramenta importante para o controle do Aedes aegypti, pois permite identificar com precisão as áreas de maior risco e direcionar as ações de combate. No entanto, os mapas também escancaram uma realidade incômoda: a dengue está intimamente ligada à falta de saneamento básico, à pobreza e à forma desordenada como as cidades crescem. Combater o mosquito exige, portanto, não apenas tecnologia, mas também justiça social e investimento em infraestrutura urbana.\n[…]\nEsta abordagem também pode ser aplicada para controlar o Aedes albopictus e os mosquitos Anopheles, que propagam o paludismo.\n[…]\nDengue\n[…]\n«Catálogo de mosquitos»"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Bicho-da-seda",
      "descricao": "Lagarta da mariposa domesticada Bombyx mori, que tece casulos de seda."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Depois de milênios de domesticação, a mariposa adulta do bicho-da-seda perdeu uma capacidade que suas parentes selvagens têm. Qual?",
    "resposta": "Voar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bombyx_mori"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bombyx_mori",
        "situacao": "ok",
        "texto": "Bombyx mori, commonly known as the domestic silk moth, is a domesticated moth species belonging to the family Bombycidae. It is the closest relative of Bombyx mandarina, the wild silk moth. Silkworms are the larvae of silk moths. The silkworm is of particular economic value, being a primary producer of silk. The silkworm's preferred food are the leaves of white mulberry, though they may eat other \n[…]\nThe domestic silk moth derives from Chinese rather than Japanese or Korean stock.\n[…]\nSilk moths were unlikely to have been domestically bred before the Neolithic period. Before then, the tools to manufacture quantities of silk thread had not been developed. The domesticated Bombyx mori and the wild Bombyx mandarina can still breed and sometimes produce hybrids. It is unknown if B. mori can hybridize with other Bombyx species. Compared to most members in the genus Bombyx, domestic silk moths have lost their coloration as well as their ability to fly.\n[…]\nOne useful development for the silk industry is silkworms that can feed on food other than mulberry leaves, including an artificial diet. Research on the genome also raises the possibility of genetically engineering silkworms to produce proteins, including pharmacological drugs, in the place of silk proteins. Bombyx mori females are also one of the few organisms with homologous chromosomes held together only by the synaptonemal complex (and not crossovers) during meiosis. In the oocytes of B.\n[…]\nGrasserie, also known as nuclear polyhedrosis, milky disease, or hanging disease, is caused by infection with the Bombyx mori nucleopolyhedrovirus (aka Bombyx mori nuclear polyhedrosis virus, genus Alphabaculovirus).\n[…]\nList of domesticated animals\n[…]\nYoshitake, N. (1968). \"Phylogenetic aspects on the origin of Japanese race of the silkworm, Bombyx mori L.\". Journal of Sericological Sciences of Japan. 37: 83–87."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bicho-da-seda",
        "situacao": "ok",
        "texto": "O bicho-da-seda, como conhecido, é a larva ou lagarta da mariposa doméstica Bombyx mori (latim: \"bicho-da-seda da amoreira\"). É um inseto economicamente importante, sendo um produtor primário da seda. A comida preferida do bicho-da-seda é a amoreira branca, embora comam outras espécies de amoreira e até mesmo laranja osage. Mariposas domésticas são intimamente dependentes de seres humanos para a r\n[…]\nAs selvagens são diferentes de suas primas domésticas, pois não foram criadas seletivamente; elas não são comercialmente viáveis na produção de seda.\n[…]\nÉ improvável que os bichos-da-seda tenham sido criados domesticamente antes da era neolítica. Antes disso, as ferramentas para fabricar quantidades de fio de seda não haviam sido desenvolvidas. A B. mori domesticada e a B. mandarina silvestre ainda podem se reproduzir e às vezes produzir híbridos. Mariposas domésticas são muito diferentes da maioria dos membros do gênero Bombyx; não apenas perderam a capacidade de voar, mas também perderam seus pigmentos de cor.\n[…]\nA mariposa ou traça — a fase adulta do ciclo de vida — não é capaz de voar funcionalmente, em contraste com a selvagem B. mandarina e outras espécies de Bombyx, cujos machos voam para encontrar fêmeas e evasão de predadores. Alguns podem emergir com a capacidade de decolar e permanecer no ar, mas o voo sustentado não pode ser alcançado. Isso ocorre porque seus corpos são muito grandes e pesados para suas pequenas asas. No entanto, alguns ainda podem voar.\n[…]\nA forma domesticada, comparada à forma selvagem, aumentou o tamanho do casulo, o tamanho do corpo, a taxa de crescimento e a eficiência de sua digestão. Ele ganhou tolerância à presença humana e manuseio, e também a viver em condições de superlotação. A mariposa domesticada não pode voar, por isso precisa de assistência humana para encontrar um parceiro e não tem medo de predadores em potencial.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Caranguejo-dos-coqueiros",
      "descricao": "Maior artrópode terrestre, um caranguejo-eremita gigante (Birgus latro) das ilhas do Índico e do Pacífico."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O caranguejo-dos-coqueiros passa a fase de larva no mar. Mas o que acontece com o adulto se ficar muito tempo dentro da água?",
    "resposta": "Morre afogado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Coconut_crab"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coconut_crab",
        "situacao": "ok",
        "texto": "The coconut crab (Birgus latro) is a terrestrial species of giant hermit crab, and is also known as the robber crab or palm thief. It is the largest living terrestrial arthropod, with a weight up to 4.1 kg (9.0 lb). The distance from the tip of one leg to the tip of another can be as wide as 90 cm (35 in). It is found on islands across the Indian and Pacific Oceans, as far east as the Gambier Isla\n[…]\nThe coconut crab has been known to western scientists since the voyages of Francis Drake around 1580 and William Dampier around 1688. Based on an account by Georg Eberhard Rumphius (1705), who had called the animal \"Cancer crumenatus\", Carl Linnaeus (1767) named the species Cancer latro, from the Latin latro, meaning \"robber\". The genus Birgus was erected in 1816 by William Elford Leach, containing only Linnaeus' Cancer latro, which was thus renamed Birgus latro.\n[…]\nlatro grows much larger than its relatives in the family Coenobitidae. Despite being the product of carcinization, like most true crabs B. latro bends its tail beneath its body for protection.\n[…]\nOther times, they emerge if the weather is humid or raining, since these conditions allow them to breathe more easily. They live almost exclusively on land, returning to the sea only to release their eggs; on Christmas Island, for instance, B. latro is abundant 6 km (3+1⁄2 mi) from the sea.\n[…]\nAdult coconut crabs have no known predators apart from other coconut crabs and humans. Their large size and the quality of their meat means that they are extensively hunted and are very rare on islands with a human population. The coconut crab is eaten as a delicacy – and regarded as an aphrodisiac – on various islands, and intensive hunting has threatened the species' survival in some areas. In other regions, taboos associated with the crab prohibit or limit hunting and consumption of B. latro."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caranguejo-dos-coqueiros",
        "situacao": "ok",
        "texto": "Birgus latro, comummente conhecido como caranguejo-dos-coqueiros ou caranguejo-ladrão, é um grande crustáceo anomuro, terrestre, encontrado em diversas ilhas tropicais dos oceanos Índico e Pacífico, sendo o maior artrópode terrestre do mundo. Está relacionado aos ermitãos, mas diferindo destes por apresentar o abdómen flexionado e sem a proteção de uma concha de molusco quando são adultos, embora \n[…]\nOs caranguejos-dos-coqueiros parecem-se com bernardos-eremitas normais, mas são muito maiores com cerca de 1 m de comprimento, e têm um abdómen mais duro. Embora não tenha subespécies as cores variam entre azul, roxo, vermelho, preto, e cor-de-laranja.\n[…]\nOs caranguejos-dos-coqueiros habitam geralmente junto à costa, ou em ilhas, ou em ilhotas nas cercanias de ilhas continentais, geralmente, não se apartando da proximidade com o mar muito mais do que 6 quilómetros.\n[…]\nConstroem as suas tocas entre o bugrau e substracto marinho, os quais lhe proporcionam protecção e espaço de armazenamento do alimento. Os caranguejos-dos-coqueiros amiúde enterram-se por completo, no chão, durante a fase de mudança de exosqueleto.\n[…]\nApesar de os espécimes adultos de caranguejo-dos-coqueiros serem principalmente terrestres, lançam os ovos ao mar, que é onde decorre o desenvolvimento larval desta espécie.\n[…]\nOs jovens caranguejos não conseguem nadar, e vão morrer afogados se deixados mais de uma hora em água. Também têm um corpo mole e tal como os bernardos-eremitas, utilizam conchas de outros animais para se protegerem. Quando adolescentes o seu corpo endurece, e a concha eventualmente acaba por rachar devido à falta de espaço.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Mosquito",
      "descricao": "Díptero da família Culicidae, de pernas longas, cujas fêmeas sugam sangue."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Só a fêmea do mosquito pica, porque precisa de sangue para produzir os ovos. Do que se alimenta o macho?",
    "resposta": "Néctar e seiva de plantas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mosquito"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mosquito",
        "situacao": "ok",
        "texto": "Mosquitoes, the Culicidae, are a family of small flies consisting of 3,600 species. The word mosquito (formed by mosca and diminutive -ito) is Spanish and Portuguese for little fly. Mosquitoes have a slender, segmented body, one pair of wings, three pairs of long hair-like legs, and a specialized, highly elongated set of mouthparts forming a proboscis, adapted for piercing and sucking. All mosquit\n[…]\nBoth male and female mosquitoes feed on nectar, aphid honeydew, and plant juices, but in many species the females are also hematophagous (blood-sucking) ectoparasites. In some of those species, a blood meal is essential for egg production; in others, it just enables the female to lay more eggs. Both plant materials and blood are useful sources of energy in the form of sugars.\n[…]\nSeveral flowers including members of the Asteraceae, Rosaceae and Orchidaceae are pollinated by mosquitoes, which visit to obtain sugar-rich nectar. A few plant associations are specialized for mosquito pollination, such as the Platanthera orchids which are pollinated by Aedes species. They are attracted to flowers by a range of semiochemicals such as alcohols, aldehydes, ketones, and terpenes. They may also use visual cues including UV reflectivity.\n[…]\nThe two subfamilies of mosquitoes are Anophelinae, containing three genera and approximately 430 species, and Culicinae, which contains 11 tribes, 108 genera and 3,046 species. Kyanne Reidenbach and colleagues analysed mosquito phylogenetics in 2009, using both nuclear DNA and morphology of 26 species. They note that Anophelinae is confirmed to be rather basal, but that the deeper parts of the tree are not well resolved.\n[…]\nQuotations related to Mosquitoes at Wikiquote\n[…]\nMosquito at IFAS\n[…]\nA film clip describing The Life Cycle of the Mosquito is available for viewing at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Culic%C3%ADdeos",
        "situacao": "ok",
        "texto": "Culicídeos (Culicidae) é uma família de insetos  habitualmente chamados de muriçocas, mosquitos ou pernilongos. As fêmeas em muitas regiões são designadas vulgarmente como melgas. Como os outros membros da ordem Diptera, os mosquitos têm um par de asas e um par de halteres. Em geral, apresentam dimorfismo sexual acentuado: as fêmeas apresentam antenas pilosas e são muito mais corpulentas que os ma\n[…]\nO comprimento varia, mas raramente é superior a 16 milímetros, e peso de até 2,5 mg. Um mosquito pode voar por 1 a 4 horas continuamente até 1–2 km / h viajando até 10 km em uma noite. A maioria das espécies alimenta-se no período com menos luminosidade, do entardecer ao amanhecer.\n[…]\nCarapanã  (do tupi [kaɾapaˈnã]) é um nome regional brasileiro dado aos mosquitos sugadores de sangue, principalmente na Região Norte do Brasil. São conhecidos em outras unidades federativas do Brasil como muriçoca, pernilongo, sovela ou mosquito-prego. Geralmente é um nome vulgar dado a insetos da ordem Diptera, família Culicidae, mais comumente relacionados aos gêneros Culex, Anopheles e Aedes.\n[…]\nNos chamados mosquitos a probóscide (tromba) está adaptada para a sucção de líquidos como néctar, seiva ou sangue. Ambos os sexos se alimentam de néctar, mas a fêmea também é capaz de hematofagia (beber sangue). Fêmeas não precisam de sangue para sobreviver, mas precisam de substâncias suplementares (como proteínas e ferro) para o desenvolvimento e postura dos seus ovos, menos a sub família Toxorhynchitinae que é constituída de larvas predadoras.\n[…]\nNos adultos, Toxorhynchitinae se diferencia das outras subfamília por ter a probóscide curva, normalmente para baixo, adaptada para coletar néctar, e o Culicinae e Anophelinae se diferenciam devido ao escutelo arredondado e primeiro tergito abdominal nu no Anophelinae, enquanto em Culicinae primeiro tergito abdominal com escamas e escutelo é trilobado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Abelha-rainha",
      "descricao": "Fêmea fértil e reprodutora de uma colônia de abelhas-europeias."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Rainhas e operárias nascem de ovos iguais. O que faz uma larva fêmea de abelha se desenvolver como rainha?",
    "resposta": "Ser alimentada com geleia real",
    "fonte": [
      "https://en.wikipedia.org/wiki/Royal_jelly",
      "https://en.wikipedia.org/wiki/Queen_bee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Royal_jelly",
        "situacao": "ok",
        "texto": "Royal jelly is a honey bee secretion that is used in the nutrition of larvae and adult queens. It is secreted from the glands in the hypopharynx of nurse bees, and fed to all larvae in the colony, regardless of sex or caste.\n[…]\nQueens constitute the female sexual caste and have large active ovaries, whereas female workers have only rudimentary, inactive ovaries and are functionally sterile. The queen–worker developmental divide is controlled epigenetically by differential feeding with royal jelly; this appears to be due specifically to the protein royalactin. A female larva destined to become a queen is fed large quantities of royal jelly; this triggers a cascade of molecular events resulting in development of a queen."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Queen_bee",
        "situacao": "ok",
        "texto": "A queen bee is typically an adult, mated female (gyne) that lives in a colony or hive of honey bees. With fully developed reproductive organs, the queen is usually the mother of most, if not all, of the bees in the beehive. Queens are developed from larvae selected by worker bees and specially fed in order to become sexually mature. There is normally only one adult, mated queen in a hive, in which\n[…]\nAs the young queen larva pupates with her head down, the workers cap the queen cell with beeswax. When ready to emerge, the virgin queen will chew a circular cut around the cap of her cell. Often the cap swings open when most of the cut is made, appearing like a hinged lid.\n[…]\nIf a queen suddenly dies, the workers will attempt to create an \"emergency queen\" by selecting several brood cells where a larva has just emerged which are then flooded with royal jelly. The worker bees then build larger queen cells over the normal-sized worker cells which protrude vertically from the face of the brood comb. Emergency queens are usually smaller and less prolific than normal queens."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Geleia_real",
        "situacao": "ok",
        "texto": "Geleia real é uma secreção de abelhas que é utilizada na nutrição de larvas e rainhas adultas. É secretado pelas glândulas na hipofaringe das abelhas enfermeiras e alimentado a todas as larvas da colônia, independentemente do sexo ou casta.\n[…]\nDurante o processo de criação de novas rainhas, as operárias constroem células rainhas especiais. As larvas nessas células são alimentadas com grandes quantidades de geleia real. Este tipo de alimentação desencadeia o desenvolvimento da morfologia da rainha, incluindo os ovários totalmente desenvolvidos necessários para a postura dos ovos.\n[…]\nAs rainhas constituem a casta sexual feminina e têm grandes ovários ativos, enquanto as operárias têm apenas ovários rudimentares, inativos e são funcionalmente estéreis. A divisão de desenvolvimento da rainha-operária é controlada epigeneticamente por alimentação diferencial com geleia real; isso parece ser devido especificamente à proteína roialactina.\n[…]\nUma larva fêmea destinada a tornar-se rainha é alimentada com grandes quantidades de geleia real; isso desencadeia uma cascata de eventos moleculares resultando no desenvolvimento de uma rainha. Foi demonstrado que este fenômeno é mediado por uma modificação epigenética do DNA conhecida como metilação CpG.\n[…]\nEstas são as únicas células em que grandes quantidades são depositadas; quando a geléia real é fornecida às larvas de operárias, ela é alimentada diretamente a elas, e elas a consomem à medida que é produzida, enquanto as células das larvas da rainha são \"abastecidas\" com geléia real muito mais rápido do que as larvas podem consumi-la. Portanto, apenas em células da rainha é prática a colheita de geleia real.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Zangão",
      "descricao": "Macho da abelha-europeia, cuja principal função é fecundar a rainha."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O que acontece com o zangão logo depois de acasalar com a rainha, em pleno voo?",
    "resposta": "Morre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Drone_(bee)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Drone_(bee)",
        "situacao": "ok",
        "texto": "A drone is a male honey bee. Unlike the female worker bee, a drone has no stinger. It does not gather nectar or pollen and cannot feed without assistance from worker bees. Its only role is to mate with a maiden queen in nuptial flight, and often dies after doing so."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zang%C3%A3o",
        "situacao": "ok",
        "texto": "O zangão, zângão ou abelhão é o macho das diversas espécies de abelhas sociais, especialmente da abelha-europeia. Caracteriza-se pelo porte superior às obreiras e pela ausência de ferrão. Alheio às atividades de manutenção da colmeia, não produz mel porque não possui os órgãos essenciais para tais atividades. Sua única função é a de fecundar a abelha rainha, ação que acontece durante o voo nupcial\n[…]\nO zangão nasce de ovos não fecundados: este fenômeno, que é um exemplo de partenogênese, consiste no desenvolvimento de um embrião sem necessidade de fertilização; a rainha, neste caso, não utiliza o sémen do macho (zangão) e põe ovos que contêm apenas o seu material genético. O zangão não possui órgãos de defesa nem de trabalho. Dotado de excepcional visão e olfato, é capaz de detectar rainhas virgens até dez quilômetros de distância.\n[…]\nA árvore genealógica dos zangões é um exemplo claro da Sequência de Fibonacci. Devido ao fato do zangão não possuir pai, apenas mãe, na primeira geração há um membro (o zangão), uma geração antes há um membro (a mãe), duas gerações atrás há dois membros (a mãe e o pai da mãe), tres gerações atrás há tres membros (a mãe do avô e o pai e a mãe da avó), quatro gerações atrás há cinco membros, cinco gerações atrás há oito membros.\n[…]\nAbelha-rainha",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Vespa-mandarina",
      "descricao": "Maior vespa do mundo, nativa do leste da Ásia (Vespa mandarinia)."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Abelhas japonesas matam a vespa-mandarina formando uma bola de centenas de operárias em volta dela. Do que a vespa morre?",
    "resposta": "De calor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Japanese_honey_bee",
      "https://en.wikipedia.org/wiki/Asian_giant_hornet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Japanese_honey_bee",
        "situacao": "ok",
        "texto": "Apis cerana japonica is a subspecies of the eastern honeybee in Japan. It is commonly known as the Japanese honeybee (Japanese: ニホンミツバチ, Hepburn: Nihon mitsubachi).\n[…]\nThe ISY relationship is supported by the observation that Japanese honeybee wingbeats become louder and increase in intensity as a bee-hawking wasp (such as the Asian hornet (Vespa velutina), lesser banded hornet (Vespa affinis), Japanese yellow hornet (Vespa simillima xanthoptera), or Asian giant hornet (Vespa mandarinia)) moves closer to the entrance of the hive and that, in most cases, the hornet may retreat when it hears the sound."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Asian_giant_hornet",
        "situacao": "ok",
        "texto": "The Asian giant hornet (Vespa mandarinia), also known as the northern giant hornet, is the world's largest hornet. It is native to temperate and tropical East Asia, South Asia, mainland Southeast Asia, and parts of the Russian Far East. It was also briefly found in the Pacific Northwest of North America from late 2019 but was eradicated by December 2024.\n[…]\nmandarinia travels up to 8 kilometres (5.0 mi) away from the nest.\n[…]\nAbe, Takashi; Kawai, Nobufumi; Niwa, Akiko (30 March 1982). \"Purification and properties of a presynaptically acting neurotoxin, mandaratoxin, from hornet (Vespa mandarinia)\". Biochemistry. 21 (7). American Chemical Society (ACS): 1693–1697. doi:10.1021/bi00536a034. ISSN 0006-2960. PMID 6282316.\n[…]\nAlaniz, Alberto J; Carvajal, Mario A; Vergara, Pablo M (14 September 2020). \"Giants are coming? Predicting the potential spread and impacts of the giant Asian hornet (Vespa mandarinia, Hymenoptera:Vespidae) in the USA\". Pest Management Science. 77 (1). Wiley Publishing: 104–112. doi:10.1002/ps.6063. ISSN 1526-498X. PMID 32841491. S2CID 221327689. (AJA ORCID: 0000-0003-4878-8848). (MAC ORCID: 0000-0003-0783-0333).\n[…]\nWilson, Telissa M; Takahashi, Junichi; Spichiger, Sven-Erik; Kim, Iksoo; van Westendorp, Paul (7 September 2020). Szalanski, Allen (ed.). \"First Reports of Vespa mandarinia (Hymenoptera: Vespidae) in North America Represent Two Separate Maternal Lineages in Washington State, United States, and British Columbia, Canada\". Annals of the Entomological Society of America saaa024. Entomological Society of America (OUP). doi:10.1093/aesa/saaa024. ISSN 0013-8746. S2CID 225315909.\n[…]\nSpecies Profile – Asian Giant Hornet (Vespa mandarinia), National Invasive Species Information Center, United States National Agricultural Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abelha-japonesa",
        "situacao": "ok",
        "texto": "Apis cerana japonica é uma subespécie da  Apis cerana  uma abelha nativa do Japão, é comumente conhecida como a abelha japonesa (ニホンミツバチ, Nihon mitsubachi). Esta subespécie foi determinada através de uma análise do DNA mitocondrial, sua origem vem da península da Coreia. Elas foram observados movendo-se em áreas urbanas, na ausência de predadores naturais.\n[…]\nApicultores no Japão tentaram introduzir as abelhas europeias (Apis mellifera) por causa de sua alta produtividade. No entanto, as abelhas europeias não têm defesa inata contra a vespa gigante japonesa (vespa mandarina), que pode rapidamente destruir suas colônias.\n[…]\nAlém disso, os esforços das abelhas também aumentam o nível de dióxido de carbono (CO2) nesta bola, até uma concentração de CO2 que as abelhas poderiam tolerar até 50 °C, mas a vespa mandarina  não pode sobreviver à combinação de uma temperatura de 46 °C e um nível de dióxido de carbono  alto.\n[…]\nEmbora seja uma teoria comumente aceita que a vespa gigante japonesa pode ser autorizada a entrar na colmeia de abelhas japonesa, estudos recentes sugerem que a abelha japonesa e as grandes vespas realmente ter uma relação de predador-presa \"Eu vejo você\"  do inglês \"I see you\" (ISY).\n[…]\nA relação ISY é suportada pela observação de que o bater da asas das abelhas japonesas se tornam mais altos e aumentam em intensidade se uma abelha vê uma vespa (como Vespa velutina, Vespa simillima xanthoptera ou Vespa mandarinia) que se aproxima da entrada da colmeia e que na maioria dos casos, a vespa pode recuar quando ela ouve o som. Se a vespa se aproxima da colmeia das abelhas japonesas,  estas movem suas asas mais rapidamente para intensificar o alerta para a vespa.\n[…]\nSe a vespa entra no ninho das abelhas elas irão aumentar o seu movimento da asa, formar uma bola, e aumentar a sua temperatura do corpo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Aranha-saltadora",
      "descricao": "Aranha da família Salticidae, de grandes olhos frontais e visão aguçada."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As aranhas-saltadoras dão saltos longos sem ter músculos fortes para esticar as patas. O que faz as patas se estenderem no salto?",
    "resposta": "Um aumento súbito da pressão do sangue",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jumping_spider"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jumping_spider",
        "situacao": "ok",
        "texto": "Jumping spiders are spiders in the family Salticidae, with almost 700 genera and around 7,000 described species, making it the largest family of spiders – comprising 13% of spider species. Jumping spiders have some of the best vision among arthropods — being capable of stereoptic color vision — and use sight in courtship, hunting, and navigation.\n[…]\nSome of the most surprising hunting behaviours occur among the araneophagous Salticidae, and vary greatly in method. Many of the spider-hunting species quite commonly attack other spiders, whether fellow salticids or not, in the same way as any other prey, but some kinds resort to web invasion.\n[…]\nHaving made contact with the prey, hunting Salticidae administer a bite to inject rapid-acting venom that gives the victim little time to react. In this respect, they resemble the Mimetidae and Thomisidae, families that ambush prey that often are larger than the predator, and they do so without securing the victim with silk. Consequently they must immobilise it immediately and their venom is adapted accordingly.\n[…]\nThe monophyly of the family Salticidae is well established through both phylogenetic and morphological analyses. The sister group to Salticidae is the family Philodromidae. Synapomorphies of the two families include loss of cylindrical gland spigots and loss of tapeta in the indirect eyes.\n[…]\nA 2015 revision of the Salticidae family divided it into seven subfamilies:\n[…]\nSalticinae Blackwall, 1841 – about 540 extant genera in 27 tribes\n[…]\nComprehensive resource on the morphology and taxonomy of jumping spiders (Salticidae): www.jumping-spiders.com\n[…]\nGlobal Species Database of Salticidae\n[…]\nAmerican Jumping Spiders – 100 Species Videos (includes introduction to salticids, predation, mating, and other behaviors)\n[…]\nThe Australian Faunal Directory taxonomic classification of Australian salticids"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saltic%C3%ADdeos",
        "situacao": "ok",
        "texto": "Aranha-saltadora, aranha de parede ou papa-moscas é a família mais numerosa de aranhas, contando com mais de 500 gêneros e cerca de 5 000 espécies (cerca de 13% das espécies conhecidas de aranhas), conhecidas popularmente como aranhas-saltadoras ou aranhas papa-moscas, com distribuição quase mundial. Estas aranhas não fazem teia para caçar, mas ficam à espera, saltando rapidamente sobre a presa. A\n[…]\nElas podem saltar também para se movimentarem ou para fugir dos predadores. Possuem uma teia mais resistente e são o tipo de aranhas mais rápida e ágil do reino dos aracnídeos. Tendo uma resistência muito melhor do que a de outros aracnídeos, é um tipo de aranha muito resistente. As aranhas-saltadoras ou aranhas papa-moscas têm um veneno mais poderoso que o de outras aranhas (dependendo da espécie).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Lagosta",
      "descricao": "Crustáceo decápode da família Nephropidae, de corpo longo e primeiro par de patas com grandes pinças."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Viva, a lagosta costuma ser escura, azul-esverdeada. Por que ela fica vermelha quando é cozida?",
    "resposta": "O calor libera o pigmento astaxantina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Astaxanthin",
      "https://en.wikipedia.org/wiki/Lobster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Astaxanthin",
        "situacao": "ok",
        "texto": "Astaxanthin  is a keto-carotenoid within a group of chemical compounds known as carotenoids, a subclass of the broad group of phytochemicals known as terpenes. Astaxanthin is a metabolite of zeaxanthin and canthaxanthin, containing both hydroxyl and ketone functional groups.\n[…]\nAnimals who feed on the algae, such as salmon, red trout, red sea bream, flamingos, and crustaceans (shrimp, krill, crab, lobster, and crayfish), subsequently reflect the red-orange astaxanthin pigmentation.\n[…]\nIn shellfish, astaxanthin is almost exclusively concentrated in the shells, with only low amounts in the flesh itself, and most of it only becomes visible during cooking as the pigment separates from the denatured proteins that otherwise bind it. Astaxanthin is extracted from Euphausia superba (Antarctic krill) and from shrimp processing waste.\n[…]\nThe primary use of synthetic astaxanthin today is as an animal feed additive to impart coloration, including farm-raised salmon and chicken egg yolks. Synthetic carotenoid pigments colored yellow, red or orange represent about 15–25% of the cost of production of commercial salmon feed. In the 21st century, most commercial astaxanthin for aquaculture is produced synthetically.\n[…]\nAstaxanthin is a pigment that moves from algae to consumers, giving pink and red colors to animals like salmon, shrimp, and flamingos. Lobsters, shrimp, and some crabs turn red when cooked because the astaxanthin, which was bound to the protein in the shell, becomes free as the protein denatures and unwinds. The freed pigment is thus available to absorb light and produce the red color.\n[…]\nIn each case, these applications have been simplified or substantial equivalence applications, because astaxanthin is recognised as a food component in the EU diet."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lobster",
        "situacao": "ok",
        "texto": "Lobsters are malacostracan decapod crustaceans of the family Nephropidae or its synonym Homaridae. They have long bodies with muscular tails and live in crevices or burrows on the sea floor. Three of their five pairs of legs have claws, including the first pair, which are usually much larger than the others. Highly prized as seafood, lobsters are economically important and are often one of the mos\n[…]\nLobsters of the family Nephropidae are similar in overall form to several other related groups. They differ from freshwater crayfish in lacking the joint between the last two segments of the thorax, and they differ from the reef lobsters of the family Enoplometopidae in having full claws on the first three pairs of legs, rather than just one. The distinctions from fossil families such as the Chilenophoberidae are based on the pattern of grooves on the carapace.\n[…]\nSymbiotic animals of the genus Symbion, the only known member of the phylum Cycliophora, live exclusively on lobster gills and mouthparts. Different species of Symbion have been found on the three commercially important lobsters of the North Atlantic Ocean: Nephrops norvegicus, Homarus gammarus, and Homarus americanus.\n[…]\nCooks primarily boil or steam live lobsters. When a lobster is cooked, its shell's color changes from brown to orange because the heat from cooking breaks down a protein called crustacyanin, which suppresses the orange hue of the chemical astaxanthin, which is also found in the shell.\n[…]\nThe fossil record of clawed lobsters extends back at least to the Valanginian age of the Cretaceous (140 million years ago). This list contains all 54 extant species in the family Nephropidae:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Astaxantina",
        "situacao": "ok",
        "texto": "A Astaxantina é um ceto-carotenóide, dentro de um grupo de compostos químicos conhecidos como carotenonas ou terpenos.\n[…]\nAo contrário de outros carotenóides, não se converte em Vitamina A no corpo humano. O excesso de Vitamina A pode ser tóxico ao corpo humano, mas a Astaxantina não. Para além da função antioxidante, cerca de 10 vezes mais eficaz que outros carotenóides, apresenta propriedades anti-inflamatórias e proteção contra raios ultra-violeta.\n[…]\nComparada com outras formas de vitamina A, a astaxantina é um forte antioxidante, capaz de chegar “ao interior do olho”, onde pode exercer diretamente a sua ação.\n[…]\nSendo um componente nutricional natural, a astaxantina pode também ser encontrado em suplementos alimentares. Como complemento, poderá ser usado para consumo humano e animal, sendo utilizado na aquacultura. A produção de astaxantina para suplementos alimentares poderá ser tanto de fonte natural, como sintética.\n[…]\nAs seguintes fontes são utilizadas na produção de astaxantina para fins comerciais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Vespa-de-papel",
      "descricao": "Vespas sociais, como as do gênero Polistes, que constroem ninhos de material parecido com papel."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A abelha operária perde o ferrão quando pica, mas as vespas conseguem ferroar várias vezes seguidas. Por quê?",
    "resposta": "O ferrão delas é liso, sem farpas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stinger",
      "https://en.wikipedia.org/wiki/Wasp"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stinger",
        "situacao": "ok",
        "texto": "A stinger (or sting) is a sharp organ found in various animals (typically insects and other arthropods) capable of injecting venom, usually by piercing the epidermis of another animal.\n[…]\nThe stings of some wasps, such as those of the Polistes versicolor, contain relatively large amounts of 5-hydroxytryptamine (5-HT) in its venoms. The 5-HT in these venoms has been found to play at least two roles: one as a pain-producing agent and the other in the distribution and penetration of the paralyzing components to vulnerable sites in the offender. This helps in the rapid immobilization of the animal or of the body parts receiving the venom."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wasp",
        "situacao": "ok",
        "texto": "A wasp is any insect of the narrow-waisted suborder Apocrita of the order Hymenoptera which is neither a bee nor an ant; this excludes the broad-waisted sawflies (Symphyta), which look somewhat like wasps, but are in a separate suborder. The wasps do not constitute a clade, a complete natural group with a single ancestor, as  bees and ants are deeply nested within the wasps, having evolved from wa\n[…]\nThe term wasp is sometimes used more narrowly for members of the Vespidae, which includes several eusocial wasp lineages, such as yellowjackets (the genera Vespula and Dolichovespula), hornets (genus Vespa), and members of the subfamily Polistinae.\n[…]\nSome social wasps are omnivorous, feeding on fallen fruit, nectar, and carrion such as dead insects. Adult male wasps sometimes visit flowers to obtain nectar. Some wasps, such as Polistes fuscatus, commonly return to locations where they previously found prey to forage. In many social species, the larvae exude copious amounts of salivary secretions that are avidly consumed by the adults.\n[…]\nAn example of a true brood parasite is the paper wasp Polistes sulcifer, which lays its eggs in the nests of other paper wasps (specifically Polistes dominula), and whose larvae are then fed directly by the host.\n[…]\nWhile wasp stings deter many potential predators, bee-eaters (in the bird family Meropidae) specialise in eating stinging insects, making aerial sallies from a perch to catch them, and removing the venom from the stinger by repeatedly brushing the prey firmly against a hard object, such as a twig. The honey buzzard attacks the nests of social hymenopterans, eating wasp larvae; it is the only known predator of the dangerous Asian giant hornet or \"yak-killer\" (Vespa mandarinia)."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Pulga",
      "descricao": "Inseto sem asas da ordem Siphonaptera, parasita externo de mamíferos e aves que se alimenta de sangue."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome científico da ordem das pulgas, sifonápteros, junta em grego a ideia de tubo e qual característica do inseto?",
    "resposta": "Sem asas",
    "distratores": [
      "Sem olhos",
      "Pernas saltadoras",
      "Corpo achatado"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Flea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flea",
        "situacao": "ok",
        "texto": "Flea, the common name for the order Siphonaptera, includes 2,500 species of small flightless insects that live as external parasites of mammals and birds. Fleas live by ingesting the blood of their hosts. Adult fleas grow to about 3 millimetres (1⁄8 inch) long, are usually dark in color, and have bodies that are \"flattened\" sideways or narrow, enabling them to move through their hosts' fur or feat\n[…]\nRelationships of Siphonaptera per Tihelka et al. 2020.\n[…]\nAs of 2023, there are 21 recognized families within the order Siphonaptera, 3 of which are extinct. In addition, some researchers have suggested that the subfamily Stenoponiinae should be elevated to its own family (Stenoponiidae).\n[…]\nThe comic poem Siphonaptera, published in 1872 by the mathematician Augustus De Morgan, describes an infinite chain of parasitism made of ever larger and ever smaller fleas.\n[…]\nIn recent decades, 'flea' has become a term synonymous with small, fast, and dexterous. For this reason Argentinian football player Lionel Messi (also known as Fleonel Messi) was given the nickname 'La Pulga' or 'The Flea.' As he grew and turned professional and expanded his career, the media turned to calling him 'La Pulga Atómica' or 'The Atomic Flea.' Because of Lionel 'The Flea' Messi, fleas are associated now in pop culture with football.\n[…]\nUsing what was probably the world's most complete collection of fleas of about 260,000 specimens (representing some 73% of the 2,587 species and subspecies so far described), he described around 500 species and subspecies of Siphonaptera. He was followed in this interest by his daughter Miriam Rothschild, who helped to catalogue his enormous collection of the insects in seven volumes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sifon%C3%A1pteros",
        "situacao": "ok",
        "texto": "A ordem dos sifonápteros (Siphonaptera; siphos= sifão ou tubo, aptera= sem asas) é representada pelas pulgas, pequenos insetos de coloração escura que não voam. São parasitas externos (ectoparasitas), que na fase adulta se alimentam majoritariamente do sangue de mamíferos, embora algumas espécies tenham aves como hospedeiro.\n[…]\nOs animais da ordem Siphonaptera são desprovidos de asas e apresentam peças bucais adaptadas para perfurar a pele e sugar o sangue do hospedeiro.\n[…]\nPulgas são animais bem pequenos que, em geral, variam de tamanho entre 2 a 4 milímetros de comprimento nos adultos e tem seu corpo comprimido lateralmente - o que facilita andar entre os pelos do hospedeiro - e abdômen muito desenvolvido. São insetos que não possuem asas, e que possuem em seu corpo diversas cerdas grossas e curtas, além de  espinhos voltados para trás formando uma espécie de pente, características que também facilitam a locomoção no hospedeiro.\n[…]\nOs olhos nesses insetos são reduzidos a uma “mancha ocular” ou são ausentes. A parte inferior da cabeça, conhecida como gena, pode carregar uma estrutura chamada de ctenídeo genal. Seu aparato bucal é do tipo Picador-Sugador (a ordem recebe o nome Siphonaptera pela maneira que se alimentam com o “sifão” ou tubo, e pela ausência de asas) e é constituído aos pares por maxilas, lacínias (simples ou serrilhadas), palpos labiais e maxilares, e por um único labro-epifaringe.\n[…]\nDurante muitos anos a ordem Siphonaptera foi um enigma para os taxonomistas. Por esses insetos serem adaptados quase que única e exclusivamente à vida parasitária dificulta-se muito a definição de táxons, já que as espécies dessa ordem possuem uma ecologia e morfologia muito semelhante.\n[…]\nEm Siphonaptera, usam-se as seguintes características para classificação:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Saúva",
      "descricao": "Formigas cortadeiras do gênero Atta, que cortam folhas e as levam para o formigueiro."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No interior de São Paulo e de Minas, as rainhas aladas da saúva, que saem em revoada e são comidas torradas, são chamadas de quê?",
    "resposta": "Içá (tanajura)",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tanajura"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tanajura",
        "situacao": "ok",
        "texto": "Chamam-se saúvas as formigas-cortadeiras no Brasil, especialmente as rainhas do gênero Atta, insetos da família dos formicídeos. Conta atualmente com cerca de duzentas espécies, todas nativas do Novo Mundo e mais abundantes na Região Neotropical. No Brasil, as saúvas constam como uma das mais importantes pragas agrícolas, sendo tão abundantes e ativas nas lavouras que os primeiros colonizadores as\n[…]\nSão chamadas ainda, entre outros nomes, de saúba, formiga-cortadeira, formiga-carregadeira, formiga-de-mandioca, formiga-cabeçuda, formiga-de-roça, roceira, cabeçuda, caçapó, maniuara, caiapó, carregadeira, cortadeira, formiga-caiapó, formiga-da-roça, formiga-de-nós, formiga-saúva, lavradeira, manhuara, tanajura, picadeira e formiga-de-taboca.\n[…]\nAssim como as demais formigas, a rainha (chamada nas saúvas de Tanajura) precisam voar para acasalar com os machos (içás), a fim de escavar o solo ao cair, e fundar um novo formigueiro. São estes insetos de metamorfose completa, cujo desenvolvimento inclui desde o ovo, passando por algumas mudas larvais , e finalmente uma fase de pupa até a fase adulta. Três anos depois do início do formigueiro, o formigueiro começa a produzir içás e tanajuras que compõem o voo nupcial no início do verão.\n[…]\nCerca de 99% das tanajuras não chega a formar sauveiros maduros.\n[…]\nAtta capiguara Gonçalves, 1944 - saúva-dos-pastos ou saúva-parda\n[…]\nAs tanajuras e os içás de diversas espécies são apreciadas no Brasil como comida, sendo principalmente consumidas por nativos do interior dos estados de São Paulo e Minas Gerais, em algumas tribos de índios brasileiros e também em Pernambuco. Geralmente são preparadas fritas, em salmoura e misturadas com farofa, ou às vezes doces como paçocas produzindo assim a farofa de içá. Em cidades do interior ou em áreas rurais, elas são servidas fritas na manteiga em bares e restaurantes populares.\n[…]\nFolha Online - Comida [3]"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Louva-a-deus",
      "descricao": "Inseto predador da ordem Mantodea, com patas dianteiras adaptadas para capturar presas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome científico do louva-a-deus, Mantis, vem de uma palavra grega que significa o quê?",
    "resposta": "Profeta (adivinho)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mantis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mantis",
        "situacao": "ok",
        "texto": "Mantises are an order (Mantodea) of insects that contains over 2,400 species in about 460 genera in 33 families. The largest family is the Mantidae (\"mantids\"). Mantises are distributed worldwide in temperate and tropical habitats. They have triangular heads with bulging eyes supported on flexible necks.\n[…]\nTheir elongated bodies may or may not have wings, but all mantodeans have forelegs that are greatly enlarged and adapted for catching and gripping prey; their upright posture, while remaining stationary with forearms folded, resembling a praying posture, has led to the common name praying mantis.\n[…]\nThe name mantodea is formed from the Ancient Greek words μάντις (mántis) meaning \"prophet\", and εἶδος (eîdos) meaning \"form\" or \"type\". It was coined in 1838 by the German entomologist Hermann Burmeister. The name \"mantid\" properly refers only to members of the family Mantidae, which was, historically, the only family in the order.\n[…]\nOver 2,400 species of mantises in about 430 genera are recognized. They are predominantly found in tropical regions, but some live in temperate areas. The systematics of mantises have long been disputed. Mantises, along with stick insects (Phasmatodea), were once placed in the order Orthoptera with the cockroaches (now Blattodea) and ice crawlers (now Grylloblattodea). Kristensen (1991) combined the Mantodea with the cockroaches and termites into the order Dictyoptera, suborder Mantodea.\n[…]\nTwo species, the Chinese mantis and the European mantis, were deliberately introduced to North America in the hope that they would serve as pest controls for agriculture; they have spread widely in both the United States and Canada.\n[…]\nMantis Study Group – Information on mantises, phylogenetics and evolution.\n[…]\nMantodea Species File"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Louva-a-deus",
        "situacao": "ok",
        "texto": "Os louva-a-deus, louva-deus ou cavalinho-de-deus são insetos pertencentes à Ordem Mantodea (do grego mantis = profeta; eidos = aparência). Possuem corpo geralmente alongado e estreito (baciliforme) que varia de 0,8 a 17 cm. Há grande variedade de formas e cores dentro do grupo, geralmente associados à estratégias de camuflagem e mimetismo. Existem cerca de 2 400 espécies, 430 gêneros e 15 famílias\n[…]\nSeu nome popular decorre do fato de que, quando está pousado, as pernas anteriores remetem à posição das mãos em oração. São animais venerados na China, existindo, inclusive, estilos de Kung-Fu inspirados em seus movimentos. Há também registros de civilizações antigas, como a Grécia, o Egito e a Assíria, que consideravam o louva-a-deus um animal com poderes proféticos e sobrenaturais, capaz de identificar a localização de objetos, animais ou pessoas perdidas em florestas.\n[…]\nApesar da extensa variação morfológica presente entre os louva-a-deus, eles fazem parte do mesmo grupo, que é sustentado pela presença de pernas dianteiras raptoriais, adaptadas para a captura de presas. Atualmente também tem se certeza de que a ordem Mantodea está mais estreitamente relacionada com as ordens Blattodea (baratas) e Isoptera (cupins), formando um grupo geralmente chamado de Dictyoptera.\n[…]\nOutro estudo em 2009, mais abrangente, sugeriu o mesmo que o estudo anterior sobre a ancestralidade das famílias de louva-a-deus. Apesar desse indicativo, devido a falta de estudos que concordem com os anteriores e também pela falta de novas propostas de relações entre as famílias de louva-deus. Devido a esses estudos recentes, mais os impedimentos taxonômicos que dificultam novos estudos, pouco se sabe sobre as relações entre as famílias de Mantodea.\n[…]\nArquivo de Espécies, Louva-a-deus\n[…]\nGrupo de Estudo do Louva-a-deus – Informações sobre mantises, filogenética e evolução.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Louva-a-deus",
      "descricao": "Inseto predador da ordem Mantodea, com patas dianteiras adaptadas para capturar presas."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na árvore genealógica dos insetos, o louva-a-deus divide um mesmo ramo com os cupins e com quais destes?",
    "resposta": "Baratas",
    "distratores": [
      "Gafanhotos",
      "Bichos-pau",
      "Libélulas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dictyoptera",
      "https://en.wikipedia.org/wiki/Mantis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dictyoptera",
        "situacao": "ok",
        "texto": "Dictyoptera (from Greek δίκτυον diktyon \"net\" and πτερόν pteron \"wing\") is an insect superorder that includes two extant orders of polyneopterous insects: the order Blattodea (termites and cockroaches together) and the order Mantodea (mantises). All modern Dictyoptera have short ovipositors and typically lay oothecae. The oldest fossils of Dictyoptera from the Late Carboniferous, referred to as \"r\n[…]\nThe use of the term Dictyoptera has changed over the years, and while largely out of use for much of the last century, it is becoming more widely used. It has usually been considered a superorder, with Isoptera, Blattodea and Mantodea being its three orders. In some classifications, however, Dictyoptera is shifted to order status and in others the order Isoptera has been subsumed under Blattodea while retaining Dictyoptera as a superorder.\n[…]\nThe cladogram also shows the family Alienopteridae (originally assigned to its own order \"Alienoptera\") as sister to Mantodea, but it was subsequently reassigned to the extinct Blattodea superfamily Umenocoleoidea by Vršanský et al.."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mantis",
        "situacao": "ok",
        "texto": "Mantises are an order (Mantodea) of insects that contains over 2,400 species in about 460 genera in 33 families. The largest family is the Mantidae (\"mantids\"). Mantises are distributed worldwide in temperate and tropical habitats. They have triangular heads with bulging eyes supported on flexible necks.\n[…]\nTheir elongated bodies may or may not have wings, but all mantodeans have forelegs that are greatly enlarged and adapted for catching and gripping prey; their upright posture, while remaining stationary with forearms folded, resembling a praying posture, has led to the common name praying mantis.\n[…]\nThe name mantodea is formed from the Ancient Greek words μάντις (mántis) meaning \"prophet\", and εἶδος (eîdos) meaning \"form\" or \"type\". It was coined in 1838 by the German entomologist Hermann Burmeister. The name \"mantid\" properly refers only to members of the family Mantidae, which was, historically, the only family in the order.\n[…]\nOver 2,400 species of mantises in about 430 genera are recognized. They are predominantly found in tropical regions, but some live in temperate areas. The systematics of mantises have long been disputed. Mantises, along with stick insects (Phasmatodea), were once placed in the order Orthoptera with the cockroaches (now Blattodea) and ice crawlers (now Grylloblattodea). Kristensen (1991) combined the Mantodea with the cockroaches and termites into the order Dictyoptera, suborder Mantodea.\n[…]\nTwo species, the Chinese mantis and the European mantis, were deliberately introduced to North America in the hope that they would serve as pest controls for agriculture; they have spread widely in both the United States and Canada.\n[…]\nMantis Study Group – Information on mantises, phylogenetics and evolution.\n[…]\nMantodea Species File"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dicti%C3%B3pteros",
        "situacao": "ok",
        "texto": "Dictiópteros (Dictyoptera; do grego antigo diktuon \"rede\" + pteron \"asa\") é uma superordem de insetos que inclui duas ordens de insetos polyneópteros - os cupins e as baratas na ordem Blattodea, juntamente com os louva-a-deus na ordem Mantodea. Enquanto todos os Dictyoptera modernos têm ovipositores curtos, os fósseis de dictiópteros apontam que os representantes mais antigos pussuíam ovipositores\n[…]\nO uso do termo Dictyoptera mudou ao longo dos anos, e embora tenha ficado fora de uso durante grande parte do século passado, está sendo mais frequentemente utilizado. Geralmente esse clado tem sido considerado uma superordem, com Blattodea e Mantodea sendo suas duas ordens. Em algumas classificações, no entanto, Dictyoptera é deslocado para o estado de ordem e, em outros o grupo Isoptera foi incluído dentro de Blattodea mantendo Dictyoptera como um superordem.\n[…]\nIndependentemente disso, em todas as classificações os grupos constituintes são os mesmos, apenas as ordens são ranqueadas de maneira diferente. Cupins e baratas estão intimamente relacionados, com dados ecológicos e moleculares que apontam para uma relação com o gênero barata Cryptocercus.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Rola-bosta",
      "descricao": "Besouros escarabeídeos que se alimentam de fezes e as moldam em bolas para rolar e enterrar."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No Egito Antigo, o besouro rola-bosta empurrando sua bola inspirou a imagem de qual deus, que rolava o Sol pelo céu?",
    "resposta": "Khepri (Quepri)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Khepri",
      "https://en.wikipedia.org/wiki/Scarab_(artifact)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Khepri",
        "situacao": "ok",
        "texto": "Khepri (Egyptian: ḫprj, also transliterated Khepera, Kheper, Khepra, Chepri) is a scarab-faced god in ancient Egyptian religion who represents the rising or morning sun. By extension, he can also represent creation and the renewal of life.\n[…]\nKhepri's corpse is reached in both texts in the sixth hour of the night, and he leads the solar barque out of the Underworld in both stories as well.\n[…]\nKhepri is not explicitly mentioned again within the Amduat until hour twelve, the last hour as the sun begins its ascent back into the sky. In this hour, Khepri is at the helm of the solar barque, leading the vessel out of the underworld and, with the help of Shu, the god of air and winds, back into the sky, so that sun may once again bathe the world in its light.\n[…]\nKhepri plays a vital role in this journey, as he is the one that guides the sun through the last leg of its voyage through the underworld and ushers in the dawn of a new day as the god of the morning sun.\n[…]\nKhepri was depicted as either a scarab holding aloft the sun disk or as a human male with a scarab for a head. The scarab amulets that the Egyptians used as jewelry and as seals allude to Khepri and the newborn sun. The beetle carvings became so common that excavators have found them throughout the Mediterranean.\n[…]\nMinas-Nerpel, Martina (2006). Der Gott Chepri. Untersuchungen zu Schriftzeugnissen und ikonographischen Quellen vom Alten Reich bis in die griechisch-römische Zeit [The God Khepri: Studies on Textual Evidence and Iconographic Sources from the Old Kingdom to the Greco-Roman Period]. Orientalia Lovaniensia analecta, vol. 154. Leuven: Peeters, ISBN 90-429-1824-1.\n[…]\nMedia related to Khepri at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Scarab_(artifact)",
        "situacao": "ok",
        "texto": "Scarabs are amulets and impression seals shaped according to the eponymous beetles, which were widely popular throughout ancient Egypt. They survive in large numbers today, and through their inscriptions and typology, these artifacts prove to be an important source of information for archaeologists and historians of ancient Egypt, representing a significant body of its art.\n[…]\nLikely due to their connections to the Egyptian god Khepri, amulets in the form of scarab beetles became enormously popular in Ancient Egypt by the early Middle Kingdom (approx. 2000 BC) and remained popular for the rest of the pharaonic period and beyond.\n[…]\nIn ancient Egypt, the Scarab Beetle was a highly significant symbolic representation of the divine manifestation of the morning sun. The Egyptian god Khepri was believed to roll the sun across the sky each day at daybreak. In a similar fashion, some beetles of the family Scarabaeidae use their legs to roll dung into balls. Ancient Egyptians believed this action was symbolic of the sun's east to west journey across the sky.\n[…]\nFrom the Twenty-fifth Dynasty onwards, large (typically 3–8 cm long), relatively flat uninscribed pectoral scarabs were sewn together with a pair of separately made outstretched wings, onto the chests of mummies via holes formed at the edge of the scarab. Pectoral scarabs appear to be associated with the god Khepri, who is often depicted in the same form."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quepri",
        "situacao": "ok",
        "texto": "Na mitologia egípcia, Quepri (também Kheper, Khepera, Khepra, Khepre, Khepere) é uma divindade principal. Quepri é associado com a imagem do escaravelho, cujo comportamento de ficar carregando bolas de estrume é comparado às forças que fazem mover o Sol.\n[…]\nComo o escaravelho rola-bosta deixa os ovos nos corpos mortos de vários animais, incluindo outros escaravelhos, e no esterco, daí emergindo para o nascimento, os antigos egípcios acreditavam que os escaravelhos estavam carregados da substância da morte. Por isso, associavam ainda Quepri ao renascimento (ou reencarnação), renovação e ressurreição. De facto, o símbolo do escaravelho Quepri em egípcio antigo significa tornar-se.\n[…]\nConsequentemente, quando Rá Amon se tornou a identidade de um mesmo deus (Amon-Rá),  determinou-se que Quepri era a forma de Rá quando jovem, em conflito com Nefertum, que era o Atum jovem. Isto tudo gerou uma cosmogonia onde Rá, como Quepri, foi resultado da actividade da Ogdóade e emergiu de uma flor de lótus azul apenas para ser imediatamente transformado em Nefertum que, depois de crescer, gerou a Enéade.\n[…]\nQuepri foi principalmente esculpido e pintado como um escaravelho, não obstante em alguns papiros funerários ser representado como um homem com a cabeça de escaravelho. Ele também foi representado como um escaravelho numa barca solar segurada por Num. Quando representado como um escaravelho, ele era normalmente posto a empurrar o sol através do céu durante o dia, bem como a empurrá-lo em segurança durante a noite, na passagem do Sol pelo submundo.\n[…]\nEm Trono de Fogo, o segundo livro da série As Crônicas dos Kane, de Rick Riordan, Quepri, na forma de um escaravelho, é uma das três formas em que Rá se dividiu, quando se retirou para dormir.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Polvo-de-anéis-azuis",
      "descricao": "Pequeno polvo do gênero Hapalochlaena, do Indo-Pacífico, com anéis azuis brilhantes e veneno mortal."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O veneno do polvo-de-anéis-azuis é a tetrodotoxina, a mesma toxina de qual peixe, servido como iguaria arriscada no Japão?",
    "resposta": "Baiacu (fugu)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Blue-ringed_octopus",
      "https://en.wikipedia.org/wiki/Tetrodotoxin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blue-ringed_octopus",
        "situacao": "ok",
        "texto": "Blue-ringed octopuses, comprising the genus Hapalochlaena, are four extremely venomous species of octopus that can be found in shells between rocks and crevices in tide pools and also coral reefs in the Pacific and Indian Oceans, from Japan to Australia. They can be identified by their yellowish skin and characteristic blue and black rings that can change color dramatically when the animals are th\n[…]\nThe octopus's own sodium channels are adapted to be resistant to tetrodotoxin.\n[…]\nThe octopus generates the toxin in its muscles and skin, when it needs it for defense. One specific species (Hapalochlaena cf. fasciata) does not require physical contact to secrete the tetrodotoxin, it recognizes predator threats through sight and smell.\n[…]\nCurrently, the blue-ringed octopus population information is listed as least concern according to the International Union for Conservation of Nature. Threats such as bioprospecting, habitat fragmentation, degradation, overfishing, and human disturbance, as well as species collections for aquarium trade, may be threats to blue-ringed octopus population numbers. Hapalochlaena may contribute to a variety of advantages to marine conservation.\n[…]\nThis genus of octopus provides stability of habitat biodiversity, as well as expanding the balance of marine food webs. Various species of blue-ringed octopuses may help control populations of Asian date mussels. Additionally, future research on tetrodotoxins produced by the blue-ringed octopus may produce new medicinal discoveries.\n[…]\nBlue Ring octopuses (Hapalochlaena spec.)\n[…]\nGibbs, P.J.; Greenaway, P. (January 1978). \"Histological structure of the posterior salivary glands in the blue ringed octopus Hapalochlaena maculosa Hoyle\". Toxicon. 16 (1): 59–70. Bibcode:1978Txcn...16...59G. doi:10.1016/0041-0101(78)90061-2. PMID 622727."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tetrodotoxin",
        "situacao": "ok",
        "texto": "Tetrodotoxin (TTX) is a potent neurotoxin. Its name derives from Tetraodontiformes, an order that includes pufferfish, porcupinefish, ocean sunfish, and triggerfish; several of these species carry the toxin. Although tetrodotoxin was discovered in these fish, it is found in several other animals (e.g., in blue-ringed octopuses, rough-skinned newts, and moon snails).\n[…]\nStatistics from the Tokyo Bureau of Social Welfare and Public Health indicate 20–44 incidents of fugu poisoning per year between 1996 and 2006 in the entire country, leading to 34–64 hospitalizations and 0–6 deaths per year, for an average fatality rate of 6.8%. Of the 23 incidents recorded within Tokyo between 1993 and 2006, only one took place in a restaurant, while the others all involved fishermen eating their catch.\n[…]\nPoisoning from tetrodotoxin is of particular public health concern in Japan, where fugu is a traditional delicacy. It is prepared and sold in special restaurants where trained and licensed chefs carefully remove the viscera to reduce the danger of poisoning. There is potential for misidentification and mislabelling, particularly of prepared, frozen fish products.\n[…]\nIn Law Abiding Citizen (2009), Alex Cross (2012), and Send Help (2026), paralysis is presented as a method of assisting torture. The toxin was also referenced in \"synthetic form\" in season 1, episode 2, of the series \"FBI\". The toxin is used as a weapon in both the second season of Archer, in Covert Affairs and in the Inside No. 9 episode \"The Riddle of the Sphinx\". In Columbo, episode 2 of season 7, fugu is used to kill the antagonist's victim.\n[…]\nIn The Apothecary Diaries light novel, as well as the respective manga and anime adaptations, fugu toxin is encountered across multiple mystery arcs.\n[…]\nU.S. National Library of Medicine: Hazardous Substances Databank – Tetrodotoxin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hapalochlaena",
        "situacao": "ok",
        "texto": "Hapalochlaena é um género de moluscos cefalópodes da subfamília Octopodinae.\n[…]\nEste género é composto pelas seguintes espécies de polvos-de-anéis-azuis:\n[…]\nHapalochlaena fasciata (Hoyle, 1886)\n[…]\nHapalochlaena lunulata (Quoy & Gaimard, 1832)\n[…]\nHapalochlaena maculosa (Hoyle, 1883)\n[…]\nHapalochlaena nierstraszi (Adam, 1938)\n[…]\nSeu veneno não possui,antídoto",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Aranha-marrom",
      "descricao": "Aranhas do gênero Loxosceles, de veneno que causa necrose na pele, com uma mancha escura no dorso."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Que capital do Sul do Brasil ficou conhecida pela grande infestação de aranhas-marrons escondidas dentro das casas?",
    "resposta": "Curitiba",
    "distratores": [
      "Porto Alegre",
      "Florianópolis",
      "São Paulo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Loxosceles_intermedia",
      "https://pt.wikipedia.org/wiki/Loxosceles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Loxosceles_intermedia",
        "situacao": "ok",
        "texto": "Loxosceles intermedia, the Brazilian brown recluse spider, is a highly venomous spider species in the family Sicariidae native to Brazil and Argentina.\n[…]\nAs well as the Chilean recluse spider, the venom of Loxosceles intermedia has a high concentration of the enzyme sphingomyelinase D. responsible for local and systemic effects, and is one of the main species attributed to deaths in South America, since the systemic effects of the bite occur frequently. The symptoms are not immediate, which leads the victim to believe that the bite was mild.\n[…]\nThey usually take hours to manifest, and begins with severe pain, redness, inflammation and blisters, in more severe cases evolving to tissue necrosis. Systemic effects, include hemolysis, cardiac problems, vascular collapse and kidney failure. Loxosceles intermedia bite is also capable of inducing severe thrombocytopenia, increased fibrinogen, reduced clotting factor VII, disseminated intravascular coagulation and severe bleeding.\n[…]\nThe venom is also capable of inducing myofibril necrosis and leukocyte infiltration causing damage to skeletal muscle. Thrombocytopenia is an important clinical sign for diagnosing L. intermedia bites. Moderate symptoms such as nausea, vomiting, fever and muscle pain are common with Loxosceles bites, especially from this species. The minimum necrotic dose is 2.4 μg / kg."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Loxosceles",
        "situacao": "ok",
        "texto": "Loxosceles Heineken & Lowe, 1832 é um gênero de aracnídeos peçonhentos pertencentes à família Sicariidae, conhecidos pelos casos onde sua picada tem efeito necrosante, apesar de a grande maioria das picadas não chegar nessa gravidade. Os membros destes gêneros são conhecidos pelos nomes comuns de aranhas-marrom (Brasil) ou aranhas-violino (Portugal).\n[…]\nLoxosceles gaucho (Gertsch, 1967) — encontrada na Tunísia e no Brasil (São Paulo, Minas Gerais, Paraná, Santa Catarina e Rio Grande do Sul);\n[…]\nLoxosceles intermedia (Mello-Leitão, 1964) — encontrada na Argentina e no Brasil (região Sudeste, Sul e no estado de Goiás). Conhecida também por L. ornatus (Mello-Leitão, 1938) e L. ornata (Mello-Leitão, 1941);\n[…]\nLoxosceles laeta (Nicolet, 1849) — encontrada na América do Sul (No Brasil na região Sul, Sudeste e no estado da Paraíba), Finlândia e Austrália. Conhecida também por L. bicolor (Holmberg, 1876), L. longipalpis (Banks, 1902),  L. nesophila (Chamberlin, 1920) e L. yura (Chamberlin & Ivie, 1942);\n[…]\nLoxosceles hirsuta (Mello-Leitão, 1961) — encontrada no Brasil (São Paulo, Paraná, Rio Grande do Sul e Minas Gerais), Paraguai, Argentina e Bolívia.\n[…]\nA picada de uma aranha Loxosceles geralmente pode ser categorizada em um dos seguintes grupos:\n[…]\nA região sul do Brasil (Paraná principalmente) tem sofrido com o ataque destas aranhas, cerca de 3.000 acidentes somente em 2004. Um relatório de um Instituto de Saúde de Minas Gerais, mostra que foram encontradas aranhas-marrons do gênero Loxosceles em algumas casas da Grande Belo Horizonte, onde esta aranha estaria extinta desde 1917, e teoricamente somente existiria em cavernas.\n[…]\nÀ noite, a aranha-marrom costuma ficar alguns centímetros à frente de seu esconderijo (comumente em cantos e frestas próximos ao chão de habitações humanas) para onde corre ao sentir perigo. Não é agressiva."
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
