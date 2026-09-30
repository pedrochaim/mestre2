Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Mamíferos** (tema **Natureza**). Avalie **cada uma**, independentemente, e decida:

- **aprovar:** passa em todos os critérios.
- **reescrever:** tem um problema corrigível. Devolva em `reescrita` a versão corrigida **completa** (`angulo`, `tipo`, `pergunta`, `resposta`, `fonte` e, se o tipo for `multipla`, exatamente 3 `distratores`). **Toda decisão `reescrever` precisa vir com `reescrita` preenchida**, mesmo quando a correção é pequena, como trocar um distrator ou encurtar a resposta: sem ela, a pergunta se perde. Nas decisões `aprovar` e `descartar`, `reescrita` é `null`.
- **descartar:** o problema não tem conserto, ou o fato é fraco demais para valer uma pergunta.

Em `motivo`, explique a decisão em uma frase curta. Na dúvida entre reescrever e descartar, descarte: o MANIFESTO diz "menos e melhor".

# O que verificar

1. **Precisão literal (obrigatório):** leia o enunciado palavra por palavra. Cada verbo, adjetivo e afirmação precisa ser **literalmente** verdadeiro, e não só a resposta. Desconfie especialmente de verbos como *batizou*, *inventou*, *descobriu*, *fundou*, *criou*, e de palavras como *único*, *primeiro*, *maior*, *sempre*, *nunca*. Exemplo: dizer que Colombo *batizou* a Colômbia é falso, porque o país recebeu o nome *em homenagem* a ele. Se houver qualquer imprecisão, reescreva.
2. **Fato e fonte (obrigatório):** você não tem acesso à internet. Cada pergunta traz em `trechos` o que o pipeline baixou das URLs de `fonte`: a abertura de cada página e as passagens mais ligadas à pergunta, separadas por `[…]`. Confira o fato nesses trechos e informe em `apoio`:
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
      "nome": "Capivara",
      "descricao": "Roedor semiaquático sul-americano, espécie Hydrochoerus hydrochaeris."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome capivara vem do tupi. O que ele significa, aproximadamente?",
    "resposta": "Comedora de capim",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capivara",
      "https://en.wikipedia.org/wiki/Capybara"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capivara",
        "situacao": "ok",
        "texto": "Capivara ou carpincho (nome científico: Hydrochoerus hydrochaeris) é uma espécie de mamífero roedor da família Caviidae e subfamília Hydrochoerinae. Alguns autores consideram que deva ser classificada em uma família própria. Está incluída no mesmo grupo de roedores ao qual se classificam as pacas, cutias, os preás e o porquinho-da-índia. Ocorre por toda a América do Sul ao leste dos Andes em habit\n[…]\nA capivara também é chamada de carpincho, capincho, beque, trombudo, caixa, cachapu, porco-capivara, cunum e cubu. O nome capivara procede do termo tupi kapi'wara, que significa \"comedor de capim\". Trata-se de uma composição de kapi'i, capim, com o sufixo -guara, que significa alguém que come, comedor. Tal nome é o mais comum e conhecido por todo o Brasil.\n[…]\nOs registros mais antigos de capivaras datam do Mioceno, entre 7 e 9 milhões de anos atrás, da Argentina central. De fato, a superfamília Cavioidea começou a se diversificar na Patagônia. Inicialmente, foram descritas quatro subfamílias de Hydrochoeridae, com um grande número de espécies e gêneros de capivaras pré-históricas  descritas, mas atualmente, representada apenas por duas espécies.\n[…]\nA mais antiga espécie relacionada à capivara atual é Cardiatherium chasioense, que ocorreu onde hoje é a província de Buenos Aires, Argentina. No Plioceno, entre 5,3 e 2,5 milhões de anos atrás, existiu o gênero Phugatherium, também próximo da atual capivara. O gênero Hydrochoerus surgiu no fim do Plioceno na América do Sul, mas a mais antiga espécie conhecida é Hydrochoerus gaylordi, das Antilhas.\n[…]\nNo geral, porém, as capivaras são comuns e amplamente disseminadas, e, portanto, não se encontram entre as espécies ameaçadas de extinção.\n[…]\nARKive – «imagens e vídeos da capivara.» (em inglês)\n[…]\nAnimal Diversity Web  – «Hydrochoerus hydrochaeris Capybara - Perfil da espécie» (em inglês)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Capybara",
        "situacao": "ok",
        "texto": "The capybara (  kap-ih-BAR-uh) or greater capybara (Hydrochoerus hydrochaeris) is the largest living rodent, native to all countries in South America except Chile. It is a semiaquatic herbivore that inhabits savannas and dense forests, living near and in bodies of freshwater and feeding mainly on grasses and aquatic plants.\n[…]\nAmong fossil species, the term \"capybara\" can refer to the many species of Hydrochoerinae that are more closely related to the modern Hydrochoerus than they are to the \"cardiomyine\" rodents like Cardiomys. The fossil genera Cardiatherium, Phugatherium, Hydrochoeropsis, and Neochoerus are all capybaras under that definition.\n[…]\nPaleontological classifications previously used Hydrochoeridae for all capybaras, while using Hydrochoerinae for the living genus and its closest fossil relatives, such as Neochoerus, but more recently have adopted the classification of Hydrochoerinae within Caviidae. The taxonomy of fossil hydrochoerines is also in a state of flux. In recent years, the diversity of fossil hydrochoerines has been substantially reduced.\n[…]\nThese escaped populations occur in areas where prehistoric capybaras inhabited; late Pleistocene capybaras inhabited Florida and Hydrochoerus hesperotiganites in California and Hydrochoerus gaylordi in Grenada, and feral capybaras in North America may actually fill the ecological niche of the Pleistocene species.\n[…]\nThe larger the group, the harder it is for the male to watch all the females. Dominant males secure significantly more matings than each subordinate, but subordinate males, as a class, are responsible for more matings than each dominant male. The lifespan of the capybara's sperm is longer than that of other rodents.\n[…]\nCapybara Walking, a historical animal locomotion film by Eadweard Muybridge\n[…]\nMedia related to Capybaras at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Capivara",
      "descricao": "Roedor semiaquático sul-americano, espécie Hydrochoerus hydrochaeris."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual é o maior roedor vivo do mundo?",
    "resposta": "Capivara",
    "fonte": [
      "https://en.wikipedia.org/wiki/Capybara"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Capybara",
        "situacao": "ok",
        "texto": "The capybara (  kap-ih-BAR-uh) or greater capybara (Hydrochoerus hydrochaeris) is the largest living rodent, native to all countries in South America except Chile. It is a semiaquatic herbivore that inhabits savannas and dense forests, living near and in bodies of freshwater and feeding mainly on grasses and aquatic plants.\n[…]\nTogether with the lesser capybara, it constitutes the genus Hydrochoerus. Its other close relatives include guinea pigs and rock cavies, and it is more distantly related to the agouti, the chinchilla, and the nutria.\n[…]\nThe presence of the greater capybara, Hydrochoerus hydrochaeris, in the fossil record ranges from the late Pleistocene to the present day.\n[…]\nAmong fossil species, the term \"capybara\" can refer to the many species of Hydrochoerinae that are more closely related to the modern Hydrochoerus than they are to the \"cardiomyine\" rodents like Cardiomys. The fossil genera Cardiatherium, Phugatherium, Hydrochoeropsis, and Neochoerus are all capybaras under that definition.\n[…]\nPaleontological classifications previously used Hydrochoeridae for all capybaras, while using Hydrochoerinae for the living genus and its closest fossil relatives, such as Neochoerus, but more recently have adopted the classification of Hydrochoerinae within Caviidae. The taxonomy of fossil hydrochoerines is also in a state of flux. In recent years, the diversity of fossil hydrochoerines has been substantially reduced.\n[…]\nThese escaped populations occur in areas where prehistoric capybaras inhabited; late Pleistocene capybaras inhabited Florida and Hydrochoerus hesperotiganites in California and Hydrochoerus gaylordi in Grenada, and feral capybaras in North America may actually fill the ecological niche of the Pleistocene species.\n[…]\nMedia related to Capybaras at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Onça-pintada",
      "descricao": "Grande felino das Américas, espécie Panthera onca."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No continente americano, nenhum felino supera em tamanho qual espécie?",
    "resposta": "Onça-pintada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jaguar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jaguar",
        "situacao": "ok",
        "texto": "The jaguar (Panthera onca) is a large cat species and the only living member of the genus Panthera that is native to the Americas. Its coat features pale yellow to tan colored fur covered with spots that transition to rosettes on the sides; some individuals have a melanistic spotted coat. With a body length of up to 1.85 m (6 ft 1 in) and a weight of up to 158 kg (348 lb), it is the biggest cat sp\n[…]\nDNA analysis of 84 jaguar samples from South America revealed that the gene flow between jaguar populations in Colombia was high in the past. Since 2017, the jaguar is considered to be a monotypic taxon, though the modern Panthera onca onca is still distinguished from two fossil subspecies, Panthera onca augusta and Panthera onca mesembrina. However, the 2024 study suggested that the validity of subspecific assignments on both P. o. augusta and P. o.\n[…]\nThe lineage of the jaguar appears to have originated in Africa and spread to Eurasia 1.95–1.77 mya. The living jaguar species is often suggested to have descended from the Eurasian Panthera gombaszogensis. The ancestor of the jaguar entered the American continent via Beringia, the land bridge that once spanned the Bering Strait, Some authors have disputed the close relationship between P. gombaszogensis (which is primarily known from Eurasia) and the modern jaguar.\n[…]\nThe oldest fossils of modern jaguars (P. onca) have been found in North America dating between 850,000-820,000 years ago. Results of mitochondrial DNA analysis of 37 jaguars indicate that current populations evolved between 510,000 and 280,000 years ago in northern South America and subsequently recolonized North and Central America after the extinction of jaguars there during the Late Pleistocene.\n[…]\n\"Jaguar Panthera onca\". IUCN Cat Specialist Group. Archived from the original on 7 March 2015. Retrieved 15 December 2014.\n[…]\n\"Jaguar\" . Encyclopedia Americana. 1920."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Onça-pintada",
      "descricao": "Grande felino das Américas, espécie Panthera onca."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Algumas onças-pintadas nascem quase totalmente pretas, embora as manchas ainda apareçam sob certa luz. Que fenômeno causa essa cor?",
    "resposta": "Melanismo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jaguar",
      "https://en.wikipedia.org/wiki/Melanism"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jaguar",
        "situacao": "ok",
        "texto": "The jaguar (Panthera onca) is a large cat species and the only living member of the genus Panthera that is native to the Americas. Its coat features pale yellow to tan colored fur covered with spots that transition to rosettes on the sides; some individuals have a melanistic spotted coat. With a body length of up to 1.85 m (6 ft 1 in) and a weight of up to 158 kg (348 lb), it is the biggest cat sp\n[…]\nDNA analysis of 84 jaguar samples from South America revealed that the gene flow between jaguar populations in Colombia was high in the past. Since 2017, the jaguar is considered to be a monotypic taxon, though the modern Panthera onca onca is still distinguished from two fossil subspecies, Panthera onca augusta and Panthera onca mesembrina. However, the 2024 study suggested that the validity of subspecific assignments on both P. o. augusta and P. o.\n[…]\nThe oldest fossils of modern jaguars (P. onca) have been found in North America dating between 850,000-820,000 years ago. Results of mitochondrial DNA analysis of 37 jaguars indicate that current populations evolved between 510,000 and 280,000 years ago in northern South America and subsequently recolonized North and Central America after the extinction of jaguars there during the Late Pleistocene.\n[…]\nMelanistic jaguars are also known as black panthers. The black morph is less common than the spotted one.\n[…]\nBlack jaguars have been documented in Central and South America. Melanism in the jaguar is caused by deletions in the melanocortin 1 receptor gene and inherited through a dominant allele. Black jaguars occur at higher densities in tropical rainforest and are more active during the daytime. This suggests that melanism provides camouflage in the deep shadows of dense vegetation with high illumination.\n[…]\n\"Jaguar Panthera onca\". IUCN Cat Specialist Group. Archived from the original on 7 March 2015. Retrieved 15 December 2014."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Melanism",
        "situacao": "ok",
        "texto": "Melanism is a congenital high level of melanin in an organism resulting in dark pigmentation. In contrast with albinism, which is generally caused by a mutation which is harmful to overall survival, melanistic morphs coexist stably with others in many species, such as squirrels and leopards.\n[…]\nMany species of the cat family exhibit melanistic morphs, particularly those in which the coat is usually spotted. Melanistic leopards and jaguars are referred to as black panthers.\n[…]\nIn 2003, the dominant mode of inheritance of melanism in jaguars was confirmed by performing phenotype-transmission analysis in a 116-individual captive pedigree. Melanistic animals were found to carry at least one copy of a mutant MC1R sequence allele, bearing a 15-base pair inframe deletion. Ten unrelated melanistic jaguars were either homozygous or heterozygous for this allele. A 24-base pair deletion causes the incompletely dominant allele for melanism in the jaguarundi.\n[…]\nMelanism, meaning a mutation that results in completely dark skin, does not exist in humans. In humans, the amount of melanin is determined by three dominant alleles (AABBCC), and different ethnicities have varying amounts.\n[…]\nAmelanism, lack of melanin\n[…]\nIsabellinism, lowered melanin\n[…]\nMelanosis, hyperpigmentation via increased melanin\n[…]\nPiebaldism, patchy absence of melanin-producing cells\n[…]\nZelandoperla fenestrata, a stonefly exhibiting a Batesian mimicry melanic polymorphism\n[…]\nKettlewell, Bernard (1973). The Evolution of Melanism. Clarendon Press. ISBN 0-19-857370-7.\n[…]\nMajerus, Michael (1998). Melanism: Evolution in Action. Oxford University Press. ISBN 0-19-854982-2.\n[…]\nMelanism and disease resistance in insects\n[…]\nFryer, G. 2013. How should the history of industrial melanism in moths be interpreted? The Linnean. 29 (2): 15 - 22."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Bicho-preguiça",
      "descricao": "Mamífero arborícola lento das Américas Central e do Sul, da subordem Folivora."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que o pelo do bicho-preguiça costuma ter um tom esverdeado?",
    "resposta": "Algas crescem no pelo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sloth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sloth",
        "situacao": "ok",
        "texto": "Sloths are a Neotropical group of xenarthran mammals constituting the suborder Folivora, including the extant arboreal tree sloths and extinct terrestrial ground sloths. Noted for their slowness of movement, tree sloths spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America. Sloths are considered to be most closely related to ant\n[…]\nSloths are so named because of their very low metabolism and deliberate movements. Sloth, related to slow, literally means \"laziness\", and their common names in several other languages (e.g. German: Faultier, French: paresseux, Spanish: perezoso, Portuguese: preguiça, Romanian: leneș, Finnish: laiskiainen) also mean \"lazy\" or similar. Their slowness permits their low-energy diet of leaves and avoids detection by predatory hawks and cats that hunt by sight.\n[…]\nThe following sloth family phylogenetic tree is based on collagen and mitochondrial DNA sequence data.\n[…]\nFour of the six living species are currently rated \"least concern\"; the maned three-toed sloth (Bradypus torquatus), which inhabits Brazil's dwindling Atlantic Forest, is classified as \"vulnerable\", while the island-dwelling pygmy three-toed sloth (B. pygmaeus) is critically endangered. Sloths' lower metabolism confines them to the tropics, and they adopt thermoregulation behaviors of cold-blooded animals such as sunning themselves.\n[…]\nThe majority of recorded sloth deaths in Costa Rica are due to contact with electrical lines and poachers. Their claws also provide another, unexpected deterrent to human hunters; when hanging upside-down in a tree, they are held in place by the claws themselves and often do not fall down even if shot from below.\n[…]\nRauch, Alan. Sloth (Reaktion Books,  2023) Online review of this book.\n[…]\nThe dictionary definition of sloth at Wiktionary"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Bicho-preguiça",
      "descricao": "Mamífero arborícola lento das Américas Central e do Sul, da subordem Folivora."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em média, quantas vezes por semana o bicho-preguiça desce da árvore para defecar?",
    "resposta": "Uma vez",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sloth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sloth",
        "situacao": "ok",
        "texto": "Sloths are a Neotropical group of xenarthran mammals constituting the suborder Folivora, including the extant arboreal tree sloths and extinct terrestrial ground sloths. Noted for their slowness of movement, tree sloths spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America. Sloths are considered to be most closely related to ant\n[…]\nSloths are so named because of their very low metabolism and deliberate movements. Sloth, related to slow, literally means \"laziness\", and their common names in several other languages (e.g. German: Faultier, French: paresseux, Spanish: perezoso, Portuguese: preguiça, Romanian: leneș, Finnish: laiskiainen) also mean \"lazy\" or similar. Their slowness permits their low-energy diet of leaves and avoids detection by predatory hawks and cats that hunt by sight.\n[…]\nThe following sloth family phylogenetic tree is based on collagen and mitochondrial DNA sequence data.\n[…]\nThree-toed sloths go to the ground to urinate and defecate about once a week, digging a hole and covering it afterwards. They go to the same spot each time and are vulnerable to predation while doing so. Considering the large energy expenditure and dangers involved in the journey to the ground, this behaviour has been described as a mystery. Recent research shows that moths, which live in the sloth's fur, lay eggs in the sloth's feces.\n[…]\nThe majority of recorded sloth deaths in Costa Rica are due to contact with electrical lines and poachers. Their claws also provide another, unexpected deterrent to human hunters; when hanging upside-down in a tree, they are held in place by the claws themselves and often do not fall down even if shot from below.\n[…]\nRauch, Alan. Sloth (Reaktion Books,  2023) Online review of this book.\n[…]\nThe dictionary definition of sloth at Wiktionary"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Tamanduá-bandeira",
      "descricao": "Grande mamífero comedor de formigas e cupins da América do Sul e Central, espécie Myrmecophaga tridactyla."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O tamanduá-bandeira ganhou esse nome por causa de que parte do corpo, longa e muito peluda?",
    "resposta": "Cauda",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tamandu%C3%A1-bandeira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tamandu%C3%A1-bandeira",
        "situacao": "ok",
        "texto": "O tamanduá-bandeira (nome científico: Myrmecophaga tridactyla), também chamado bandeira, bandurra, iurumi, jurumi, jurumim, tamanduá-açu, tamanduá-cavalo, papa-formigas-gigante e urso-formigueiro-gigante, é uma espécie de mamífero xenartro da família dos mirmecofagídeos, encontrado na América Central e na América do Sul. É a maior das quatro espécies de tamanduás e, junto com as preguiças, está in\n[…]\nComo todo mamífero, os tamanduás também adoram água.\n[…]\n\"Tamanduá\" origina-se do termo tupi tamãdu'á. \"Tamanduá-açu\" significa, traduzido do tupi, \"tamanduá grande\".[carece de fontes]? \"Iurumi\" e \"jurumim\" vêm do termo tupi yuru'mi, que significa \"boca pequena\". O nome popular de \"tamanduá-bandeira\" faz alusão à enorme cauda repleta de inúmeros pêlos compridos, associando-se portanto sua semelhança a uma \"bandeira\". Essa característica da cauda é uma das que mais chamam a atenção em comunidades tradicionais do Brasil.\n[…]\nEm inglês, recebeu o nome de \"giant anteater\".\n[…]\nO registro fóssil dos tamanduás é esparso. O gênero do Mioceno, Neotamandua, é o mais aparentado ao tamanduá-bandeira, e é difícil diferenciar morfologicamente o crânio de Neotamandua e Myrmecophaga. Neotamandua era grande, maior que Tamandua, mas menor que Mymercophaga, e não possuía uma cauda preênsil, mas parecia ter patas intermediárias entre o tamanduá-bandeira e o tamanduá-mirim.\n[…]\nAs fêmeas são mais tolerantes entre si, e por isso seus territórios acabam se sobrepondo sobre o de outras. Ao contrário, os machos se envolvem em comportamentos agonísticos com muito mais frequência. Ao reconhecer outro tamanduá como oponente, os dois animais iniciam exibições, andando em círculos com a cauda levantada. Esses comportamentos são acompanhados pela emissão de sons parecidos com rugidos.\n[…]\nARKive – «imagens e vídeos do tamanduá-bandeira.» (em inglês)\n[…]\nAnimal Diversity Web  –  «Myrmecophaga tridactyla Giant anteater» (em inglês)"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Tamanduá-bandeira",
      "descricao": "Grande mamífero comedor de formigas e cupins da América do Sul e Central, espécie Myrmecophaga tridactyla."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Apesar de comer milhares de formigas por dia, quantos dentes tem o tamanduá-bandeira?",
    "resposta": "Nenhum",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giant_anteater"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giant_anteater",
        "situacao": "ok",
        "texto": "The giant anteater (Myrmecophaga tridactyla) is an insectivorous mammal native to Central and South America. It is the largest of the four living species of anteaters, which are classified with sloths in the order Pilosa. The only extant member of the genus Myrmecophaga, the giant anteater is mostly terrestrial, in contrast to other living anteaters and sloths, which are arboreal or semiarboreal. \n[…]\nThe giant anteater got its binomial name from Carl Linnaeus in 1758. Its generic name, Myrmecophaga, and specific name, tridactyla, are both Greek, meaning \"anteater\" and \"three fingers\", respectively. Myrmecophaga jubata was used as a synonym. Three subspecies have been suggested: M. t. tridactyla (Venezuela and the Guianas south to northern Argentina), M. t. centralis (Central America to northwestern Colombia and northern Ecuador), and M. t.\n[…]\nartata (northeastern Colombia and northwestern Venezuela). The giant anteater is grouped with the semiarboreal northern and southern tamanduas in the family Myrmecophagidae. Together with the family Cyclopedidae, whose only extant member is the arboreal silky anteater, the two families comprise the suborder Vermilingua.\n[…]\nThe fossil record for anteaters is generally sparse. Known fossils include the Pliocene genus Palaeomyrmidon, a close relative to the silky anteater, Protamandua, which is closer to the giant anteater and the tamanduas from the Miocene, and Neotamandua, which is believed to have close affinities to Myrmecophaga. Protamandua was larger than the silky anteater but smaller than a tamandua, while Neotamandua was larger, falling somewhere between a tamandua and a giant anteater.\n[…]\nBoth the giant anteater and the southern tamandua are well represented in the fossil record of the late Pleistocene and early Holocene.\n[…]\nARKive – images and movies of the giant anteater.\n[…]\nAnimal Diversity Web  –  Myrmecophaga tridactyla Giant anteater"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Mico-leão-dourado",
      "descricao": "Pequeno primata alaranjado da Mata Atlântica brasileira, espécie Leontopithecus rosalia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O mico-leão-dourado deve a palavra leão do seu nome a qual característica do corpo?",
    "resposta": "A juba ao redor do rosto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Golden_lion_tamarin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golden_lion_tamarin",
        "situacao": "ok",
        "texto": "The golden lion tamarin (Leontopithecus rosalia; Portuguese: mico-leão-dourado [ˈmiku leˈɐ̃w do(w)ˈɾadu, - liˈɐ̃w -]), less commonly known as the golden lion marmoset, is a small New World monkey of the family Callitrichidae. Endemic to the Atlantic coastal forests of Brazil, the golden lion tamarin is an endangered species. Its geographic range is entirely within the state of Rio de Janeiro.\n[…]\n2016: The Associação Mico-Leão-Dourado adopted an overall 2025 goal of 2,000 wild golden lion tamarins living in 25,000 ha (61,766 acres; 250 km2, 97 miles2) of connected and protected habitat, which computer modeling suggested would achieve 100% probability of species survival for the next 100 years, with retention of 98% of (then current) genetic diversity during that period.\n[…]\nFrom 1984 to 2000, as part of the Golden Lion Tamarin Conservation Program (and later the Associação Mico Leão Dourado), 146 captive-born and seven confiscated wild-born golden lion tamarins were released into the wild; 17 of these were released in the Poço das Antas Biological Reserve, early in the program, and the remainder on 20 privately owned ranches and farms in the species' historic area of occurrence .\n[…]\nBetween 1994 and 1997, under the administration of the Associação Mico-Leão-Dourado (Golden Lion Tamarin Association), 43 individuals from some of these forest remnants, in Cabo Frio, Búzios, and Saquarema (si family groups and one single individual), were rescued and translocated to the location of what would become (in 1998) the União Biological Reserve). The reserve lies within the species' historic area of occurrence but had no resident golden lion tamarins at the time.\n[…]\nImages and movies of the golden lion tamarin (Leontopithecus rosalia) ARKive\n[…]\nAssociação Mico-Leão Dourado (Golden Lion Tamarin Association) Brazilian NGO focused on golden lion tamarin conservation."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Mico-leão-dourado",
      "descricao": "Pequeno primata alaranjado da Mata Atlântica brasileira, espécie Leontopithecus rosalia."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Hoje, o mico-leão-dourado vive na natureza apenas na Mata Atlântica de qual estado brasileiro?",
    "resposta": "Rio de Janeiro",
    "distratores": [
      "São Paulo",
      "Bahia",
      "Minas Gerais"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Golden_lion_tamarin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golden_lion_tamarin",
        "situacao": "ok",
        "texto": "The golden lion tamarin (Leontopithecus rosalia; Portuguese: mico-leão-dourado [ˈmiku leˈɐ̃w do(w)ˈɾadu, - liˈɐ̃w -]), less commonly known as the golden lion marmoset, is a small New World monkey of the family Callitrichidae. Endemic to the Atlantic coastal forests of Brazil, the golden lion tamarin is an endangered species. Its geographic range is entirely within the state of Rio de Janeiro.\n[…]\nAfter the Rio de Janeiro Primate Center tested the vaccine's efficacy and safety on lion tamarins housed there, Associação Mico-Leão-Dourado biologists begin vaccinating wild tamarins in 2021, apparently the first such program for wild individuals of an endangered primate. As of the end of 2024, 489 individuals had been vaccinated.\n[…]\nIn the early 1980s, the Smithsonian National Zoological Park and the Rio de Janeiro Primate Center initiated a program to reintroduce captive-born golden lion tamarins to bolster the existing wild population, thought to be no more than 600 individuals at the time.\n[…]\nDuring a 1990-1992 survey, a number of golden lion tamarin groups were identified in very small and/or immediately imperiled forest fragments in the Rio de Janeiro State municipalities of Cabo Frio, Búzios, Saquarema, and Araruama.\n[…]\nBetween 1994 and 1997, under the administration of the Associação Mico-Leão-Dourado (Golden Lion Tamarin Association), 43 individuals from some of these forest remnants, in Cabo Frio, Búzios, and Saquarema (si family groups and one single individual), were rescued and translocated to the location of what would become (in 1998) the União Biological Reserve). The reserve lies within the species' historic area of occurrence but had no resident golden lion tamarins at the time.\n[…]\nLeontopithecus rosalia Factsheet Primate Info Net\n[…]\nAssociação Mico-Leão Dourado (Golden Lion Tamarin Association) Brazilian NGO focused on golden lion tamarin conservation."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Lobo-guará",
      "descricao": "Canídeo de pernas longas e pelagem alaranjada do Cerrado e de campos sul-americanos, espécie Chrysocyon brachyurus."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Com pernas longas e pelagem alaranjada, qual é o maior canídeo da América do Sul?",
    "resposta": "Lobo-guará",
    "fonte": [
      "https://en.wikipedia.org/wiki/Maned_wolf"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maned_wolf",
        "situacao": "ok",
        "texto": "The maned wolf  (Chrysocyon brachyurus) is a large canine of South America. It is found in Argentina, Brazil, Bolivia, Peru, and Paraguay, and is almost locally extinct in Uruguay. Its markings resemble those of a red fox but it is neither a fox nor a wolf. It is the only species in the genus Chrysocyon (from Greek χρῡσο-κύων [chrúso-kúōn], \"golden dog\"). The maned wolf's young pups appear to have\n[…]\nThe term maned wolf is an allusion to the mane of the nape. It is known locally as aguara guasu (meaning \"large fox\") in the Guarani language, or kalak in the Toba Qom language, lobo-guará in Portuguese, and lobo de crín, lobo de los esteros, aguará guazú, or lobo colorado in Spanish. The term lobo, \"wolf\", originates from the Latin lupus. Guará and aguará originated from Tupi-Guarani agoa'rá, \"by the fuzz\". It also is called borochi in Bolivia.\n[…]\nThe maned wolf (Chrysocyon brachyurus) has a distinctive body plan among living canids. It has a slender body, exceptionally long legs, large ears, and a relatively small head in proportion to its body. These characteristics are associated with its adaptation to open environments, particularly grasslands and savannas.\n[…]\nA detailed anatomical study of the phrenic nerve in the maned wolf (Chrysocyon brachyurus) demonstrated that this nerve originates predominantly from the ventral branches of the cervical spinal nerves C5, C6 and C7, showing uni- or plurisegmental patterns of formation. After its formation in the cervical region, the contributing branches converge near the level of the first rib.\n[…]\nGarcia, D., Estrela, G. C., Soares, R. T. G., Paulino, D., Jorge, A. T., Rodrigues, M. A., Sasahara, T. H., & Honsho, C. (2020). \"A study on the morphoquantitative and cytological characteristics of the bulbar conjunctiva of the maned wolf (Chrysocyon brachyurus; Illiger, 1815)\". Anatomia Histologia Embryologia, 1. doi:10.1111/ahe.12647."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Lobo-guará",
      "descricao": "Canídeo de pernas longas e pelagem alaranjada do Cerrado e de campos sul-americanos, espécie Chrysocyon brachyurus."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Lançada em 2020, a cédula de duzentos reais traz a imagem de qual animal?",
    "resposta": "Lobo-guará",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazilian_real",
      "https://en.wikipedia.org/wiki/Maned_wolf"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_real",
        "situacao": "ok",
        "texto": "The Brazilian real (pl. reais;  sign: R$; code: BRL) is the official currency of Brazil. It is subdivided into 100 centavos. The Central Bank of Brazil is the central bank and the issuing authority. The real replaced the cruzeiro real in 1994.\n[…]\nThe current real was introduced in 1994 at 1 real = 2,750 cruzeiros reais.\n[…]\nSince 2020, 3 types of non-circulating commemorative coins were released:\n[…]\nIn 1994, banknotes print \"A\" were issued by Casa da Moeda do Brasil in denominations of 1, 5, 10, 50 and 100 reais, in addition to supplementary issues of banknotes ordered abroad in the values of 5, 10 and 50 reais of the print \"B\" produced abroad by the companies Giesecke+Devrient, Thomas de la Rue and François-Charles Oberthur Fiduciaire respectively.\n[…]\nIn 1997, modified banknotes of 1 real (print \"B\"), 5 and 10 reais (print \"C\") were launched, bearing the national flag as a watermark instead of the effigy of the republic in order to reduce the risk of such banknotes being used for counterfeiting banknotes at higher denominations. In 2000, the 10 reais commemorative banknote (print \"D\") was launched, and this banknote was the first polymer banknote to be issued in the country.\n[…]\nIn 2001 and 2002, the 2 and 20 reais banknotes were launched, respectively, using the sea turtle and the golden lion tamarin in the watermark and theme, and the 20 reais banknote was the first to make use of holographic elements on the Brazilian banknotes.\n[…]\nThe new banknotes began to enter circulation in December 2010, coexisting with the older ones. On 29 July 2020, the Central Bank of Brazil announced the release of the 200 reais banknote. It was released into circulation on 2 September 2020."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maned_wolf",
        "situacao": "ok",
        "texto": "The maned wolf  (Chrysocyon brachyurus) is a large canine of South America. It is found in Argentina, Brazil, Bolivia, Peru, and Paraguay, and is almost locally extinct in Uruguay. Its markings resemble those of a red fox but it is neither a fox nor a wolf. It is the only species in the genus Chrysocyon (from Greek χρῡσο-κύων [chrúso-kúōn], \"golden dog\"). The maned wolf's young pups appear to have\n[…]\nThe term maned wolf is an allusion to the mane of the nape. It is known locally as aguara guasu (meaning \"large fox\") in the Guarani language, or kalak in the Toba Qom language, lobo-guará in Portuguese, and lobo de crín, lobo de los esteros, aguará guazú, or lobo colorado in Spanish. The term lobo, \"wolf\", originates from the Latin lupus. Guará and aguará originated from Tupi-Guarani agoa'rá, \"by the fuzz\". It also is called borochi in Bolivia.\n[…]\nThe maned wolf (Chrysocyon brachyurus) has a distinctive body plan among living canids. It has a slender body, exceptionally long legs, large ears, and a relatively small head in proportion to its body. These characteristics are associated with its adaptation to open environments, particularly grasslands and savannas.\n[…]\nA detailed anatomical study of the phrenic nerve in the maned wolf (Chrysocyon brachyurus) demonstrated that this nerve originates predominantly from the ventral branches of the cervical spinal nerves C5, C6 and C7, showing uni- or plurisegmental patterns of formation. After its formation in the cervical region, the contributing branches converge near the level of the first rib.\n[…]\nGarcia, D., Estrela, G. C., Soares, R. T. G., Paulino, D., Jorge, A. T., Rodrigues, M. A., Sasahara, T. H., & Honsho, C. (2020). \"A study on the morphoquantitative and cytological characteristics of the bulbar conjunctiva of the maned wolf (Chrysocyon brachyurus; Illiger, 1815)\". Anatomia Histologia Embryologia, 1. doi:10.1111/ahe.12647."
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Boto-cor-de-rosa",
      "descricao": "Golfinho de água doce das bacias do Amazonas e do Orinoco, espécie Inia geoffrensis."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre todos os golfinhos de rio do planeta, qual espécie amazônica é a maior?",
    "resposta": "Boto-cor-de-rosa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Amazon_river_dolphin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amazon_river_dolphin",
        "situacao": "ok",
        "texto": "The Amazon river dolphin (Inia geoffrensis), also known as the boto, bufeo or pink river dolphin, is a species of toothed whale endemic to South America and is classified in the family Iniidae. Three subspecies are currently recognized: I. g. geoffrensis (Amazon river dolphin), I. g. boliviensis (Bolivian river dolphin) and I. g. humboldtiana (Orinoco river dolphin). The position of the Araguaian \n[…]\nThe species Inia geoffrensis was described by Henri Marie Ducrotay de Blainville in 1817. Originally, the Amazon river dolphin belonged to the superfamily Platanistoidea, which constituted all river dolphins, making them a paraphyletic group. Today, however, the Amazon river dolphin has been reclassified into the superfamily Inioidea.\n[…]\nInia geoffrensis geoffrensis inhabits most of the Amazon River, including rivers Tocantins, Araguaia, low Xingu and Tapajos, the Madeira to the rapids of Porto Velho, and rivers Purus, Yurua, Ica, Caqueta, Branco, and the Rio Negro through the channel of Casiquiare to San Fernando de Atabapo in the Orinoco river, including its tributary: the Guaviare.\n[…]\nOthers believe the myth served (and still serves) as a way of hiding the incestuous relations which are quite common in some small, isolated communities along the river. In the area, tales relate it is bad luck to kill a dolphin. Legend also states that if a person makes eye contact with an Amazon river dolphin, they will have lifelong nightmares.\n[…]\nAssociated with these legends is the use of various fetishes, such as dried eyeballs and genitalia. These may or may not be accompanied by the intervention of a shaman. A recent study has shown, despite the claim of the seller and the belief of the buyers, none of these fetishes is derived from the boto. They are derived from Sotalia guianensis, are most likely harvested along the coast and the Amazon River delta, and then are traded up the Amazon River."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Ariranha",
      "descricao": "Lontra gigante dos rios da América do Sul, espécie Pteronura brasiliensis."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Vivendo em rios da Amazônia e do Pantanal, qual é a mais comprida de todas as lontras do mundo?",
    "resposta": "Ariranha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giant_otter"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giant_otter",
        "situacao": "ok",
        "texto": "The giant otter or giant river otter (Pteronura brasiliensis) is a South American carnivorous mammal. It is the longest member of the weasel family, Mustelidae, reaching up to 1.8 m (5 ft 11 in). Atypical of mustelids, the giant otter is a social species, with family groups typically supporting three to eight members. The groups are centered on a dominant breeding pair and are extremely cohesive a\n[…]\nThe giant otter has a handful of other names. In Brazil it is known as ariranha, from the Tupi word arerãîa, or onça-d'água, meaning water jaguar. In Spanish, river wolf (Spanish: lobo de río) and water dog (Spanish: perro de agua) are used occasionally (though the latter also refers to several different animals) and may have been more common in the reports of explorers in the 19th and early 20th centuries. All four names are in use in South America, with a number of regional variations.\n[…]\n\"Giant otter\" translates literally as nutria gigante and lontra-gigante in Spanish and Portuguese, respectively. Among the Achuar people, they are known as wankanim, among the Sanumá as hadami, and among the Makushi as turara. The genus name, Pteronura, is derived from the Ancient Greek words πτερόν (pteron, feather or wing) and οὐρά (oura, tail), a reference to its distinctive, wing-like tail.\n[…]\nLater gene sequencing research on the mustelids, from 2004, places the divergence of the giant otter somewhat later, between five and 11 million years ago; the corresponding phylogenetic tree locates the Lontra divergence first among otter genera, and Pteronura second, although divergence ranges overlap.\n[…]\nThe giant otter's hearing is acute and its sense of smell is excellent.\n[…]\nMedia related to Pteronura brasiliensis at Wikimedia Commons\n[…]\nARKive – images and movies of the giant otter (Pteronura brasiliensis)"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Anta",
      "descricao": "Grande mamífero herbívoro de focinho em forma de pequena tromba da América do Sul, espécie Tapirus terrestris."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual é o maior mamífero terrestre nativo do Brasil?",
    "resposta": "Anta",
    "distratores": [
      "Onça-pintada",
      "Capivara",
      "Tamanduá-bandeira"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/South_American_tapir"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/South_American_tapir",
        "situacao": "ok",
        "texto": "The South American tapir (Tapirus terrestris), also commonly called the Brazilian tapir (from the Tupi tapi'ira), the Amazonian tapir, the maned tapir, the lowland tapir, anta (Brazilian Portuguese), and sachavaca (literally \"bushcow\", in mixed Quechua and Spanish), is one of the four recognized species in the tapir family (of the order Perissodactyla, with the mountain tapir, the Malayan tapir, a\n[…]\nMost classifications also include Tapirus kabomani (also known as the dwarf black tapir or the kabomani tapir) as also belonging to the species Tapirus terrestris (Brazilian tapir), despite its questionable existence and the overall lack of information on its habits and distribution. The specific epithet derives from arabo kabomani, the word for tapir in the local Paumarí language. The formal description of this tapir did not suggest a common name for the species.\n[…]\nkabomani has not been officially recognized by the Tapir Specialist Group as a distinct species; recent genetic evidence further suggests it is likely a subspecies of T. terrestris. In 2024, the International Commission on Zoological Nomenclature (ICZN) has officially ruled that the binomen Tapirus pygmaeus has priority over Tapirus kabomani given that they are synonyms after a 2014 petition.\n[…]\nFurther genetic evidence invalidating T. kabomani as a new species was published by Ruiz-Garcia et al. (2016). Ruiz-Garcia et al. found and sampled tapirs that fit the morphological description provided by Cozzuol et al. (2013) for T. kabomani but they only showed haplotypes of other T. terrestris haplogroups. In addition, the morphological evidence for T. kabomani has been contradicted by further research. Dumbá et al. reevaluated skull shape variation among tapir species and found that T.\n[…]\nARKive - images and movies of the lowland tapir (Tapirus terrestris)\n[…]\nTapir Specialist Group - Lowland Tapir"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Muriqui",
      "descricao": "Primata do gênero Brachyteles, endêmico da Mata Atlântica brasileira."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Endêmico da Mata Atlântica, qual primata é o maior macaco das Américas?",
    "resposta": "Muriqui",
    "distratores": [
      "Bugio",
      "Macaco-aranha",
      "Macaco-prego"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Muriqui"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Muriqui",
        "situacao": "ok",
        "texto": "The muriquis, also known as woolly spider monkeys, are the monkeys of the genus Brachyteles. They are closely related to both the spider monkeys and the woolly monkeys.\n[…]\nThey are the two largest species of New World monkeys, and the northern species is one of the most endangered of all the world's monkeys.\n[…]\nThe muriqui lives primarily in coffee estates in southeastern Brazil. Males are the same size and weight as females.\n[…]\nRussell A. Mittermeier, \"Monkey in Peril\". National Geographic, March 1987, pages 387–395. Volume 171, No. 3. ISSN 0027-9358. OCLC 643483454\n[…]\nConservation of the Muriqui from Brazil\n[…]\nPrimate Info Net Brachyteles Factsheet\n[…]\nSouthern Muriqui Home Page - Pró- Muriqui Association"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Baleia-azul",
      "descricao": "Cetáceo gigante da espécie Balaenoptera musculus."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Até onde a ciência sabe, que animal é o maior que já viveu na Terra?",
    "resposta": "Baleia-azul",
    "fonte": [
      "https://en.wikipedia.org/wiki/Blue_whale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blue_whale",
        "situacao": "ok",
        "texto": "The blue whale (Balaenoptera musculus) is a species of baleen whale and the largest marine mammal in the rorqual family Balaenopteridae. Reaching a maximum confirmed length of 29.9–30.5 m (98–100 ft) and weighing up to 190–200 t (190–200 long tons; 210–220 short tons), it is the largest animal known to have ever existed. The blue whale's long and slender body can be of various shades of greyish-bl\n[…]\nThe genus name, Balaenoptera, means winged whale, while the species name, musculus, could mean \"muscle\" or a diminutive form of \"mouse\", possibly a pun by Carl Linnaeus when he named the species in Systema Naturae. One of the first published descriptions of a blue whale comes from Robert Sibbald's Phalainologia Nova, after Sibbald found a stranded whale in the estuary of the Firth of Forth, Scotland, in 1692.\n[…]\nBlue whales are rorquals in the family Balaenopteridae. A 2018 analysis estimates that the Balaenopteridae family diverged from other families in between 10.48 and 4.98 million years ago during the late Miocene. The earliest discovered anatomically modern blue whale is a partial skull fossil from southern Italy identified as B. cf. musculus, dating to the Early Pleistocene, roughly 1.5–1.25 million years ago. The Australian pygmy blue whale diverged during the Last Glacial Maximum.\n[…]\nThe male blue whale has the largest penis in the animal kingdom, at around 3 m (9.8 ft) long and 12 in (30 cm) wide.\n[…]\nBlue whales were initially difficult to hunt because of their size and speed. This began to change in the mid-19th century with the development of harpoons that can be shot as projectiles. Blue whale whaling peaked between 1930 and 1931 with 30,000 animals taken. Harvesting of the species was particularly high in the Antarctic, with 350,000–360,000 whales taken in the first half of the 20th century.\n[…]\nBlue whale penis\n[…]\nVoices in the Sea – Sounds of the Blue Whale"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Lontra-marinha",
      "descricao": "Mamífero marinho do Pacífico Norte, espécie Enhydra lutris."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual mamífero do Pacífico Norte, que boia de costas para comer, tem a pelagem mais densa do reino animal?",
    "resposta": "Lontra-marinha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sea_otter"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sea_otter",
        "situacao": "ok",
        "texto": "The sea otter (Enhydra lutris) is a marine mammal native to the coasts of the northern and eastern North Pacific Ocean. Adult sea otters typically weigh between 14 and 45 kg (30–100 lb), making them the heaviest members of the weasel family, but among the smallest marine mammals. Unlike most marine mammals, the sea otter's primary form of insulation is an exceptionally thick coat of fur, the dense\n[…]\nFossil evidence indicates the Enhydra lineage became isolated in the North Pacific approximately 2 million years ago, giving rise to the now-extinct Enhydra macrodonta and the modern sea otter, Enhydra lutris. One related species has been described, Enhydra reevei, from the Pleistocene of East Anglia. The modern sea otter evolved initially in northern Hokkaidō and Russia, and then spread east to the Aleutian Islands, mainland Alaska, and down the North American coast.\n[…]\nThe generic name, Enhydra, derives from the Ancient Greek εν, en, 'in'; and ύδρα, hydra, 'water', meaning 'in the water', and the specific name derives from the Latin word lutris, meaning 'otter'. It was formerly sometimes referred to as the \"sea beaver\".\n[…]\nThree subspecies of the sea otter are recognized with distinct geographical distributions. Enhydra lutris lutris (nominate), the Asian sea otter, ranges across Russia's Kuril Islands northeast of Japan, and the Commander Islands in the northwestern Pacific Ocean. In the eastern Pacific Ocean, E. l. kenyoni, the northern sea otter, is found from Alaska's Aleutian Islands to Oregon and E. l. nereis, the southern sea otter, is native to central and southern California.\n[…]\nMcLeish, Todd (2018). Return of the Sea Otter: The Story of the Animal That Evaded Extinction on the Pacific Coast. Seattle: Sasquatch Books. ISBN 978-1-63217-137-5.\n[…]\nEnhydra lutris (Linnaeus, 1758) at the World Register of Marine Species"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Morcego",
      "descricao": "Mamífero voador da ordem Chiroptera."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Ao contrário dos esquilos-voadores, que apenas planam, que grupo de mamíferos é o único capaz de voar batendo asas?",
    "resposta": "Morcegos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bat",
        "situacao": "ok",
        "texto": "Bats (order Chiroptera ) are winged mammals, the only mammals capable of true and sustained flight. Bats are more agile in flight than most birds, using long, spread-out digits covered with a thin membrane or patagium. The smallest bat, and one of the smallest extant mammals, is Kitti's hog-nosed bat, which is 29–33 mm (1.1–1.3 in) in length, 150 mm (5.9 in) across the forearm and 2 g (0.071 oz) i\n[…]\nThe order name Chiroptera derives from the Ancient Greek χείρ (kheír), meaning \"hand\", and πτερόν (pterón), meaning \"wing\".\n[…]\nThis is in contrast to birds, where both muscle types are at the chest. Nectar- and pollen-eating bats can hover in a similar way to hummingbirds. The sharp leading edges of the wings can create vortices, which provide lift. The vortex may be stabilised by the animal changing its wing curvature.\n[…]\nBats have an efficient circulatory system. They seem to make use of particularly strong venomotion, a rhythmic contraction of venous wall muscles. In most mammals, the walls of the veins provide mainly passive resistance, maintaining their shape as deoxygenated blood flows through them, but in bats, they appear to actively support blood flow back to the heart with this pumping action. Because of their small, lightweight bodies, bats are not at risk of blood rushing to their heads when roosting.\n[…]\nBats are subject to predation from birds of prey, such as owls, hawks, and falcons. J. Rydell and J. R. Speakman argue that bats evolved nocturnality during the early Eocene period to avoid predators. Other zoologists find the evidence to be unclear and contradictory. Twenty-two (maybe twenty-three or twenty-four) species of tropical New World snakes are known to eat bats; they may wait for them at the entrances of their refuges or attack them inside."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Rena",
      "descricao": "Cervídeo das regiões árticas e subárticas, espécie Rangifer tarandus."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Durante o escuro inverno ártico, os olhos da rena mudam de dourado para azul. Que vantagem isso traz?",
    "resposta": "Enxergar melhor com pouca luz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Reindeer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Reindeer",
        "situacao": "ok",
        "texto": "The reindeer or caribou (Rangifer tarandus) is a species of deer with circumpolar distribution, native to Arctic, subarctic, tundra, boreal, and mountainous regions of Northern Europe, Siberia, and North America. It is the only representative of the genus Rangifer. More recent studies suggest the splitting of reindeer and caribou (North American terminology). \"All caribou and reindeer throughout t\n[…]\nThe scientific name Tarandus rangifer buskensis Millais, 1915 (the Busk Mountains reindeer) was selected as the senior synonym to R. t. valentinae Flerov, 1933, in Mammal Species of the World but Russian authors do not recognize Millais and Millais' articles in a hunting travelogue, The Gun at Home and Abroad, seem short of a taxonomic authority.\n[…]\nBorowski disagreed (and again changed the spelling), saying Cervus grönlandicus was morphologically distinct from Eurasian tundra reindeer. Baird placed it under the genus Rangifer as R. grœnlandicus. It went back and forth as a full species or subspecies of the barren-ground caribou (R. arcticus) or a subspecies of the tundra reindeer (R. tarandus), but always as the Greenland reindeer / caribou.\n[…]\nThe Sakhalin reindeer (R. t. setoni), endemic to Sakhalin, was described as Rangifer tarandus setoni Flerov, 1933, but Banfield (1961) brought it under R. t. fennicus as a junior synonym. The wild reindeer on the island are apparently extinct, having been replaced by domestic reindeer.\n[…]\nAccording to the IUCN, Rangifer tarandus, as a species, is not endangered because of its overall large population and its widespread range, but, as of 2015, the IUCN has classified the reindeer as Vulnerable due to an observed population decline of 40% over the last +25 years. Some reindeer species and subspecies are rare and three subspecies have already become extinct.\n[…]\nRangifer (journal)\n[…]\nThe Sami and their Reindeer, University of Texas, Austin"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Morcego-vampiro",
      "descricao": "Morcegos da subfamília Desmodontinae, que se alimentam de sangue."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que o sangue da presa demora a coagular enquanto o morcego-vampiro se alimenta?",
    "resposta": "Anticoagulante na saliva",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vampire_bat",
      "https://en.wikipedia.org/wiki/Draculin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vampire_bat",
        "situacao": "ok",
        "texto": "Vampire bats, members of the subfamily Desmodontinae, are leaf-nosed bats currently found in Central and South America. Their food source is the blood of other animals, a dietary trait called hematophagy. Three extant bat species feed solely on blood: the common vampire bat (Desmodus rotundus), the hairy-legged vampire bat (Diphylla ecaudata), and the white-winged vampire bat (Diaemus youngi). Two\n[…]\ngenus Desmodus\n[…]\nDesmodus rotundus,\n[…]\nThe common vampire bat, Desmodus rotundus, has specialized thermoreceptors on its nose, which aid the animal in locating areas of its prey where the blood flows close to the skin. A nucleus has been found in the brain of vampire bats that has a similar position and similar histology to the infrared receptor of infrared-sensing snakes, which are the only other known vertebrates capable of detecting infrared radiation (namely boas, pythons and pit vipers).\n[…]\nThe bat's saliva, left in the victim's resulting bite wound, has a key function in feeding from the wound. The saliva contains several compounds that prolong bleeding, such as anticoagulants that inhibit blood clotting, and compounds that prevent the constriction of blood vessels near the wound.\n[…]\nThe unique properties of vampire bat saliva have found some positive use in medicine.\n[…]\nVarious studies published in Stroke: Journal of the American Heart Association on a genetically engineered drug called desmoteplase which uses the anticoagulant properties of the saliva of Desmodus rotundus found that it increased blood flow in stroke patients.\n[…]\nVampire\n[…]\nGreenhall, A., G. Joermann, U. Schmidt, M. Seidel. 1983. Mammalian Species: Desmodus rotundus. American Society of Mammalogists, 202: 1–6.\n[…]\n\"Humboldt Penguins Fight off Vampire Bats | BBC Earth\". YouTube. BBC Earth. December 15, 2018.\n[…]\n\"Vampire Bats feeding on Sea Lions | The Dark: Nature's Nighttime World | BBC Earth\". YouTube. BBC Earth. September 28, 2020."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Draculin",
        "situacao": "ok",
        "texto": "Draculin (named after Count Dracula) is a glycoprotein found in the saliva of vampire bats, Desmodus rotundus. It is a member of the lactotransferrin protein family. It is a single-chain polypeptide protein composed of 708 amino acids, weighing about 88.5 kDa when reduced and 83 kDa when non-reduced, and selectively inhibits FIXa and FXa.\n[…]\nDaily salivation of vampire bats yields a saliva that progressively decreases in anticoagulant activity. However, there is no significant change in overall protein content during this time. After a 4-day period of rest, anticoagulant activity of the saliva is restored. In addition, purified native Draculin, obtained from high- and low-activity saliva, shows significant differences in composition of the carbohydrate moiety, and glycosylation pattern.\n[…]\nThe molecular evolution of vampire bat venom highlights the dominant contributions of Draculin and DSPA to its anticoagulant and proteolytic functions. Transcriptomic and proteomic data from the submaxillary glands of Desmodus rotundus show active expression of Draculin at both the RNA level and the corresponding protein production level.\n[…]\nVenom secretion, containing Draculin and the desmoteplase salivary plasminogen activator DSPA, enables vampire bats to sustain a hawmatophagous lifestyle by disrupting the prey's normal physiological and biochemical responses during feeding.\n[…]\nVampire bats frequently revisit the same host for repeated feedings, and typically relick the wound for approximately 30 minutes per fe feeding, prolonging exposure of host tissues to salivary components. The parasitic nature of vampire bat feeding, coupled with the extensive application of saliva to the wound and the antigenic properties of the anticoagulants, can trigger an acquired immune response in the bat's prey.\n[…]\nTick Anticoagulant Peptide (TAP)\n[…]\nVampire Bats"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Morcego-vampiro",
      "descricao": "Morcegos da subfamília Desmodontinae, que se alimentam de sangue."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Apesar da associação com o Drácula, os morcegos-vampiros vivem naturalmente apenas em que parte do mundo?",
    "resposta": "Nas Américas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vampire_bat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vampire_bat",
        "situacao": "ok",
        "texto": "Vampire bats, members of the subfamily Desmodontinae, are leaf-nosed bats currently found in Central and South America. Their food source is the blood of other animals, a dietary trait called hematophagy. Three extant bat species feed solely on blood: the common vampire bat (Desmodus rotundus), the hairy-legged vampire bat (Diphylla ecaudata), and the white-winged vampire bat (Diaemus youngi). Two\n[…]\nDesmodus draculae, extinct,\n[…]\nDesmodus rotundus,\n[…]\nVampire bats tend to live in colonies in almost completely dark places, such as caves, old wells, hollow trees, and buildings. They range in Central to South America and live in arid to humid, tropical and subtropical areas. Vampire bat colony numbers can range from single digits to hundreds in roosting sites.\n[…]\nVampire bats on average live about nine years when they are in their natural environment in the wild.\n[…]\nVampire bats also engage in social grooming. It usually occurs between females and their offspring, but it is also significant between adult females. Social grooming is mostly associated with food sharing.\n[…]\nRabies can be transmitted to humans and other animals by vampire bat bites. Since dogs are now widely immunized against rabies, the number of human rabies transmissions by vampire bats exceeds those by dogs in Latin America, with 55 documented cases in 2005. The risk of infection to the human population is less than to livestock exposed to bat bites.\n[…]\nVarious studies published in Stroke: Journal of the American Heart Association on a genetically engineered drug called desmoteplase which uses the anticoagulant properties of the saliva of Desmodus rotundus found that it increased blood flow in stroke patients.\n[…]\nVampire\n[…]\nGreenhall, A., G. Joermann, U. Schmidt, M. Seidel. 1983. Mammalian Species: Desmodus rotundus. American Society of Mammalogists, 202: 1–6.\n[…]\n\"Vampire Bats | World's Weirdest\". YouTube. Nat Geo WILD. June 7, 2012."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Elefante-africano",
      "descricao": "Elefantes do gênero Loxodonta, nativos da África."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em dias quentes, por que o elefante-africano abana suas enormes orelhas?",
    "resposta": "Para resfriar o corpo",
    "fonte": [
      "https://en.wikipedia.org/wiki/African_elephant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/African_elephant",
        "situacao": "ok",
        "texto": "African elephants are members of the genus Loxodonta comprising two living elephant species, the African bush elephant (L. africana) and the smaller African forest elephant (L. cyclotis). Both are social herbivores with grey skin. However, they differ in the size and colour of their tusks as well as the shape and size of their ears and skulls.\n[…]\nLoxodonta is one of two extant genera in the family Elephantidae. The name refers to the lozenge-shaped enamel of their molar teeth. Fossil remains of Loxodonta species have been found in Africa, spanning from the Late Miocene (from around 7–6 million years ago) onwards.\n[…]\nLoxodonte was proposed as a generic name for the African elephant by Frédéric Cuvier in 1825.\n[…]\nElephas (Loxodonta) cyclotis was proposed by Paul Matschie in 1900, who described three African elephant zoological specimens from Cameroon whose skulls differed in shape from those of elephant skulls collected elsewhere in Africa. In 1936, Glover Morrill Allen considered this elephant to be a distinct species and called it the  'forest elephant'; later authors considered it to be a subspecies.\n[…]\nNorth African elephant († Loxodonta africana pharaohensis) proposed by Paulus Edward Pieris Deraniyagala in 1948 was a specimen from Fayum in Egypt.\n[…]\nAt around 40 to 60 years of age, the elephant loses the last of its molars and will likely die of starvation which is a common cause of death. African elephants have 24 teeth in total, six on each quadrant of the jaw. The enamel plates of the molars are fewer in number than in Asian elephants. The enamel of the molar teeth wears into a distinctive lozenge/loxodont (<>) shape characteristic to all members of the genus Loxodonta.\n[…]\nAfrica's Elephant Kingdom\n[…]\n\"Loxodonta africana\". Convention on the Conservation of Migratory Species of Wild Animals. 2020.\n[…]\nInternational Elephant Foundation"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Coala",
      "descricao": "Marsupial arborícola australiano, espécie Phascolarctos cinereus."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O coala passa quase o dia inteiro dormindo ou descansando. Isso se deve principalmente a quê?",
    "resposta": "Dieta de eucalipto pobre em energia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Koala"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Koala",
        "situacao": "ok",
        "texto": "The koala (Phascolarctos cinereus), sometimes inaccurately called the koala bear, is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae. Its closest living relatives are the wombats. The koala is found in coastal areas of the continent's eastern and southern regions, inhabiting Queensland, New South Wales, Victoria, and South A\n[…]\nThe koala's generic name, Phascolarctos, is derived from the Greek words φάσκωλος (phaskolos) 'pouch' and ἄρκτος (arktos) 'bear'. The specific name, cinereus, is Latin for 'ash coloured'.\n[…]\nThe generic name Phascolarctos was given in 1816 by French zoologist Henri Marie Ducrotay de Blainville, who did not give it a specific name until further review. In 1819, German zoologist Georg August Goldfuss gave it the binomial Lipurus cinereus. Because Phascolarctos was published first, according to the International Code of Zoological Nomenclature, it has priority as the official genus name.\n[…]\nFrench naturalist Anselme Gaëtan Desmarest coined the name Phascolarctos fuscus in 1820, suggesting that the brown-coloured versions were a different species than the grey ones. Other names suggested by European authors included Marodactylus cinereus by Goldfuss in 1820, P. flindersii by René Primevère Lesson in 1827, and P. koala by John Edward Gray in 1827.\n[…]\nThree subspecies have been described: the Queensland koala (Phascolarctos cinereus adustus, Thomas 1923), the New South Wales koala (Phascolarctos cinereus cinereus, Goldfuss 1817), and the Victorian koala (Phascolarctos cinereus victor, Troughton 1935). These forms are distinguished by pelage colour and thickness, body size, and skull shape. The Queensland koala is the smallest, with silver or grey short hairs and a shorter skull.\n[…]\nArchive – images and movies of the koala Phascolarctos cinereus\n[…]\nAnimal Diversity Web – Phascolarctos cinereus"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Golfinho",
      "descricao": "Cetáceos com dentes da família Delphinidae, como o golfinho-nariz-de-garrafa."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que os golfinhos dormem com apenas metade do cérebro de cada vez?",
    "resposta": "Para continuar respirando",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dolphin",
      "https://en.wikipedia.org/wiki/Unihemispheric_slow-wave_sleep"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dolphin",
        "situacao": "ok",
        "texto": "A dolphin is any one of the 40 extant species of aquatic mammal from the cetacean families Delphinidae (the oceanic dolphins), Platanistidae (the Indian river dolphins), Iniidae (the New World river dolphins), Pontoporiidae (the brackish dolphins), and the probably extinct Lipotidae (baiji or Chinese river dolphin).\n[…]\nThe Indus river dolphin has a sleep method that is different from that of other dolphin species. Living in water with strong currents and potentially dangerous floating debris, it must swim continuously to avoid injury. As a result, this species sleeps in very short bursts which last between 4 and 60 seconds.\n[…]\nBottlenose dolphins have been found to have signature whistles, a whistle that is unique to a specific individual. These whistles are used in order for dolphins to communicate with one another by identifying an individual. It can be seen as the dolphin equivalent of a name for humans. These signature whistles are developed during a dolphin's first year; it continues to maintain the same sound throughout its lifetime.\n[…]\nAfter being returned to the Port River, she continued to perform this trick, and another dolphin, Wave, copied her. Wave, a very active tail-walker, passed on the skill to her daughters, Ripple and Tallula.\n[…]\nThere have been human health concerns associated with the consumption of dolphin meat in Japan after tests showed that dolphin meat contained high levels of mercury. There are no known cases of mercury poisoning as a result of consuming dolphin meat, though the government continues to monitor people in areas where dolphin meat consumption is high. The Japanese government recommends that children and pregnant women avoid eating dolphin meat on a regular basis.\n[…]\nPBS NOVA: Dolphins: Close Encounters Archived October 30, 2008, at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Unihemispheric_slow-wave_sleep",
        "situacao": "ok",
        "texto": "Unihemispheric slow-wave sleep (USWS) is sleep where one half of the brain rests while the other half remains alert. This is in contrast to normal sleep where both eyes are shut and both halves of the brain show unconsciousness. In USWS, also known as asymmetric slow-wave sleep, one half of the brain is in deep sleep, a form of non-rapid eye movement sleep and the eye corresponding to this half is\n[…]\nA promising method of identifying the neuroanatomical structures responsible for USWS is continuing comparisons of brains that exhibit USWS with those that do not. Some studies have shown induced asynchronous SWS in non-USWS-exhibiting animals as a result of sagittal transactions of subcortical regions, including the lower brainstem, while leaving the corpus callosum intact.\n[…]\nDuring USWS the proportion of noradrenergic secretion is asymmetric. It is indeed high in the awaken hemisphere and low in the sleeping one. The continuous discharge of noradrenergic neurons stimulates heat production: the awake hemisphere of dolphins shows a higher, but stable, temperature. On the contrary, the sleeping hemisphere reports a slightly lower temperature compared to the other hemisphere.\n[…]\nMany species of birds and marine mammals have advantages due to their unihemispheric slow-wave sleep capability, including, but not limited to, increased ability to evade potential predators and the ability to sleep during migration. Unihemispheric sleep allows visual vigilance of the environment, preservation of movement, and in cetaceans, control of the respiratory system.\n[…]\nAmazon river dolphin (Inia geoffrensis)\n[…]\nBeluga whale (Delphinapterus leucus)\n[…]\nBottlenose dolphin (Tursiops truncatus)\n[…]\nPacific white-sided dolphin (Sagmatias obliquidens)"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Panda-gigante",
      "descricao": "Urso preto e branco da China, espécie Ailuropoda melanoleuca."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que o panda-gigante precisa passar grande parte do dia comendo?",
    "resposta": "O bambu é pouco nutritivo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giant_panda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giant_panda",
        "situacao": "ok",
        "texto": "The giant panda (Ailuropoda melanoleuca), also known as the panda bear or simply panda, is a bear species endemic to China. It is characterised by its white coat with black patches around the eyes, ears, legs and shoulders. Its body is rotund; adult individuals weigh 100 to 115 kg (220 to 254 lb) and are typically 1.2 to 1.9 m (3 ft 11 in to 6 ft 3 in) long. It is sexually dimorphic, with males be\n[…]\nProteins make up 50% of the macronutrients absorbed, similar to proportion of carnivorous mammals at 52–54%; the nutritional contribution of protein from bamboo is 61% when only the leaves and shoots are considered, and 48% when the digestible parts of cellulose and hemicellulose are included. This indicates that the transition to herbivory was not as extreme in this species as it might appear.\n[…]\nPandas were thought to fall into the crepuscular category, those who are active twice a day, at dawn and dusk; however, pandas may belong to a category all of their own, with activity peaks in the morning, afternoon and midnight. The low nutrition quality of bamboo means pandas need to eat more frequently, and due to their lack of major predators they can be active at any time of the day.\n[…]\nPanda tea\n[…]\nPygmy giant panda\n[…]\nWan, Qiu-Hong; Wu, Hua; Fang, Sheng-Guo (2005). \"A New Subspecies of Giant Panda (Ailuropoda melanoleuca) from Shaanxi, China\". Journal of Mammalogy. 86 (2): 397–402. Bibcode:2005JMamm..86..397W. doi:10.1644/BRB-226.1. JSTOR 4094359.\n[…]\nZhang, Jindong; Hull, Vanessa; Huang, Jinyan; Zhou, Shiqiang; Xu, Weihua; Yang, Hongbo; McConnell, William J.; Li, Rengui; Liu, Dian; Huang, Yan; Ouyang, Zhiyun; Zhang, Hemin; Liu, Jianguo (2015). \"Activity patterns of the giant panda ( Ailuropoda melanoleuca )\". Journal of Mammalogy. 96 (6): 1116–1127. doi:10.1093/jmammal/gyv118.\n[…]\nBBC Nature: Giant panda news, and video clips from BBC programmes past and present.\n[…]\nView the panda genome on Ensembl."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Panda-gigante",
      "descricao": "Urso preto e branco da China, espécie Ailuropoda melanoleuca."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O falso polegar que o panda-gigante usa para segurar o bambu é, na verdade, um osso alongado de que parte do corpo?",
    "resposta": "Pulso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giant_panda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giant_panda",
        "situacao": "ok",
        "texto": "The giant panda (Ailuropoda melanoleuca), also known as the panda bear or simply panda, is a bear species endemic to China. It is characterised by its white coat with black patches around the eyes, ears, legs and shoulders. Its body is rotund; adult individuals weigh 100 to 115 kg (220 to 254 lb) and are typically 1.2 to 1.9 m (3 ft 11 in to 6 ft 3 in) long. It is sexually dimorphic, with males be\n[…]\nThe nominate subspecies, A. m. melanoleuca, consists of most extant populations of the giant panda. These animals are principally found in Sichuan and display the typical stark black and white contrasting colours.\n[…]\nIn 2020, the giant panda population of the new national park was already above 1,800 individuals, which is roughly 80 percent of the entire panda population in China. Establishing the new protected area in the Sichuan Province also gives various other endangered or threatened species, like the Siberian tiger, the possibility to improve their living conditions by offering them a habitat.\n[…]\nAs of November 26, 2024, the global captive giant panda population had reached 757 individuals, while about 1,900 were estimated to live in the wild, bringing the total to approximately 2,657.\n[…]\nPygmy giant panda\n[…]\nWan, Qiu-Hong; Wu, Hua; Fang, Sheng-Guo (2005). \"A New Subspecies of Giant Panda (Ailuropoda melanoleuca) from Shaanxi, China\". Journal of Mammalogy. 86 (2): 397–402. Bibcode:2005JMamm..86..397W. doi:10.1644/BRB-226.1. JSTOR 4094359.\n[…]\nZhang, Jindong; Hull, Vanessa; Huang, Jinyan; Zhou, Shiqiang; Xu, Weihua; Yang, Hongbo; McConnell, William J.; Li, Rengui; Liu, Dian; Huang, Yan; Ouyang, Zhiyun; Zhang, Hemin; Liu, Jianguo (2015). \"Activity patterns of the giant panda ( Ailuropoda melanoleuca )\". Journal of Mammalogy. 96 (6): 1116–1127. doi:10.1093/jmammal/gyv118.\n[…]\nBBC Nature: Giant panda news, and video clips from BBC programmes past and present.\n[…]\nView the panda genome on Ensembl."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Cutia",
      "descricao": "Roedor do gênero Dasyprocta, comum nas florestas das Américas Central e do Sul."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Ao enterrar sementes e esquecer algumas, a cutia ajuda a espalhar qual árvore amazônica de ouriço duríssimo?",
    "resposta": "Castanheira-do-pará",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_nut",
      "https://en.wikipedia.org/wiki/Agouti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_nut",
        "situacao": "ok",
        "texto": "Brazil nut (Bertholletia excelsa) refers to a South American tree of the monotypic genus Bertholletia in the family Lecythidaceae as well as the tree's commercially-harvested edible seeds. It is one of the largest and longest-lived trees in the Amazon rainforest. The fruit and its nutshell – containing the edible nut – are relatively large and weigh as much as 2 kg (4.4 lb) in total. As food, Braz\n[…]\nIn Portuguese-speaking countries, like Brazil, they are variously called \"castanha-do-brasil\" (meaning \"chestnut from Brazil\" in Portuguese), \"castanha-do-pará\" (meaning \"chestnut from Pará\" in Portuguese), castanha-da-amazônia, castanha-do-acre, \"noz amazônica\" (meaning \"Amazonian nut\" in Portuguese), noz boliviana, tocari (probably of Carib origin), and tururi (from Tupi turu'ri).\n[…]\nIn various Spanish-speaking countries of South America, Brazil nuts are called castañas de Brasil, nuez de Brasil, or castañas de Pará (or Para), and also nuez amazónica or castaña amazónica (\"Amazon nut\").\n[…]\nIn 2024, world production of Brazil nuts (in shells) was 79,736 tonnes, most of which derived from tropical Amazon forest regions of Brazil and Bolivia, which together produced 87% of the total (table).\n[…]\nSince most of the production for international trade is harvested in the wild, the business arrangement has been advanced as a model for generating income from a tropical forest without destroying it. The nuts are most often gathered by migrant workers known as castañeros (in Spanish) or castanheiros (in Portuguese). Logging is a significant threat to the sustainability of the Brazil nut–harvesting industry."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Agouti",
        "situacao": "ok",
        "texto": "The agouti ( , ə-GOO-tee) or common agouti is any of several rodent species of the genus Dasyprocta, from Ancient Greek δασύς (dasús), meaning \"hair\", and πρωκτός (prōktós), meaning \"anus\". They are native to Central America, northern and central South America, and the southern Lesser Antilles. Some species have also been introduced elsewhere in the West Indies and in west Africa (Bénin). They are\n[…]\nThe Spanish term is agutí. In Mexico, the agouti is called the sereque. In Panama, it is known as the ñeque and in eastern Ecuador, as the guatusa.\n[…]\nThe name agouti is derived from either Guarani or Tupi, both South American indigenous languages, in which the name is written as akuti. The Portuguese term for these animals, cutia, is derived from this original naming.\n[…]\nAgoutis give birth to litters of two to four young (pups) after a gestation period of three months. Some species have two litters a year in May and October, while others breed year round. The pups are born in burrows lined with leaves, roots and hair. They are well developed at birth and may be up and eating within an hour. Fathers are barred from the nest while the young are very small, but the parents pair bond for the rest of their lives.\n[…]\nAzara's agouti, Dasyprocta azarae\n[…]\nCoiban agouti, Dasyprocta coibae\n[…]\nOrange agouti, Dasyprocta croconota\n[…]\nBlack agouti, Dasyprocta fuliginosa\n[…]\nOrinoco agouti, Dasyprocta guamara\n[…]\nIack's agouti, Dasyprocta iacki\n[…]\nKalinowski's agouti, Dasyprocta kalinowskii\n[…]\nRed-rumped agouti, Dasyprocta leporina\n[…]\nMexican agouti, Dasyprocta mexicana\n[…]\nBlack-rumped agouti, Dasyprocta prymnolopha\n[…]\nCentral American agouti, Dasyprocta punctata\n[…]\nRuatan Island agouti, Dasyprocta ruatanica\n[…]\nBrown agouti, Dasyprocta variegata\n[…]\nVideo, photos and information of Azara's agouti at theanimalfiles.com\n[…]\n\"Agouti\" . Encyclopædia Britannica (11th ed.). 1911.\n[…]\n\"Dasyprocta\" . Encyclopedia Americana. 1920."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Castor",
      "descricao": "Roedor semiaquático do gênero Castor, conhecido por construir diques."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Os dentes da frente do castor têm cor alaranjada por causa de qual metal no esmalte?",
    "resposta": "Ferro",
    "distratores": [
      "Cobre",
      "Zinco",
      "Magnésio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Beaver"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beaver",
        "situacao": "ok",
        "texto": "Beavers (genus Castor) are large semiaquatic rodents of the Northern Hemisphere. There are two extant species: the North American beaver (Castor canadensis) and the Eurasian beaver (C. fiber). Beavers are the second-largest living rodents, after capybaras, weighing up to 50 kg (110 lb). They have stout bodies with large heads, long chisel-like incisors, brown or gray fur, hand-like front feet, web\n[…]\nThe genus name Castor has its origin in the Greek word κάστωρ kastōr and translates as 'beaver'.\n[…]\nBeavers have been hunted, trapped, and exploited for their fur, meat, and castoreum. Since the animals typically stayed in one place, trappers could easily find them and could kill entire families in a lodge. Many pre-modern people mistakenly thought that castoreum was produced by the testicles or that the castor sacs of the beaver were its testicles, and females were hermaphrodites.\n[…]\nAesop's Fables describes beavers chewing off their testicles to preserve themselves from hunters, which is impossible because a beaver's testicles are internal. This myth persisted for centuries, and was corrected by French physician Guillaume Rondelet in the 1500s. Beavers have historically been hunted and captured using deadfalls, snares, nets, bows and arrows, spears, clubs, firearms, and leg-hold traps. Castoreum was used to lure the animals.\n[…]\nCastoreum's properties have been credited to the accumulation of salicylic acid from willow and aspen trees in the beaver's diet, and has a physiological effect comparable to aspirin. Today, the medical use of castoreum has declined and is limited mainly to homeopathy. The substance is also used as an ingredient in perfumes and tinctures, and as a flavouring in food and drinks.\n[…]\nBeaver drop\n[…]\nBeaver Institute Charity that supports beavers\n[…]\nBeaver Tracks: How to identify beaver tracks in the wild"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Urso-polar",
      "descricao": "Urso das regiões árticas, espécie Ursus maritimus."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Por baixo do pelo que parece branco, qual é a cor da pele do urso-polar?",
    "resposta": "Preta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Polar_bear"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Polar_bear",
        "situacao": "ok",
        "texto": "The polar bear (Ursus maritimus) is a large bear native to the Arctic and nearby areas. It is closely related to the brown bear, and the two species can interbreed. The polar bear is the largest extant species of bear and land carnivore by body mass, with adult males weighing 300–800 kg (660–1,760 lb). The species is sexually dimorphic, as adult females are much smaller. The polar bear is white or\n[…]\nCarl Linnaeus classified the polar bear as a type of brown bear (Ursus arctos), labelling it as Ursus maritimus albus-major, arcticus ('mostly-white sea bear, arctic') in the 1758 edition of his work Systema Naturae. Constantine John Phipps formally described the polar bear as a distinct species, Ursus maritimus in 1774, following his 1773 voyage towards the North Pole.\n[…]\nBecause of its adaptations to a marine environment, some taxonomists, such as Theodore Knottnerus-Meyer, have placed the polar bear in its own genus, Thalarctos. However Ursus is widely considered to be the valid genus for the species on the basis of the fossil record and the fact that it can breed with the brown bear.\n[…]\nDifferent subspecies have been proposed including Ursus maritimus maritimus and U. m. marinus. However, these are not supported, and the polar bear is considered to be monotypic. One possible fossil subspecies, U. m. tyrannus, was posited in 1964 by Björn Kurtén, who reconstructed the subspecies from a single fragment of an ulna which was approximately 20 percent larger than expected for a polar bear.\n[…]\nTo make a statement about global warming, in 2009 a Copenhagen ice statue of a polar bear with a bronze skeleton was purposely left to melt in the sun.\n[…]\n2011 Svalbard polar bear attack\n[…]\nInternational Polar Bear Day\n[…]\nPolar Bear Shores – an exhibit featuring polar bears at Sea World in Australia\n[…]\nPolar Bears International website\n[…]\nARKive—images and movies of the polar bear (Ursus maritimus)"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Vombate",
      "descricao": "Marsupial escavador australiano da família Vombatidae."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O vombate, um marsupial australiano, é famoso por produzir fezes com que formato?",
    "resposta": "Cúbico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wombat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wombat",
        "situacao": "ok",
        "texto": "Wombats are short-legged, muscular quadrupedal marsupials of the family Vombatidae that are native to Australia. Living species are about one metre (40 in) in length with small, stubby tails and weigh between 20 and 35 kg (44 and 77 lb).\n[…]\nThough genetic studies of the Vombatidae have been undertaken, evolution of the family is not well understood. Wombats are estimated to have diverged from other Australian marsupials relatively early, as long as 40 million years ago, while some estimates place divergence at around 25 million years. Some prehistoric wombat genera greatly exceeded modern wombats in size.\n[…]\nIn 2020, biologists discovered that wombats, like many other Australian marsupials, display bio-fluorescence under ultraviolet light.\n[…]\nCommon wombat (Vombatus ursinus), which has three subspecies:\n[…]\nVombatus ursinus hirsutus, found on the Australian mainland\n[…]\nAustralian literature contains many references to the wombat. Examples are Mr. Walter Wombat from the adventures of Blinky Bill and one of the main antagonists in The Magic Pudding by Norman Lindsay.\n[…]\nAll species of wombats are protected in every Australian state.\n[…]\nWomSAT, a citizen science project, was established in 2016 to record sightings of wombats across the country. The website and mobile phone app can be used to log sightings of live or deceased wombats and wombat burrows. Since its establishment the project has recorded over 23,000 sightings across New South Wales, Victoria, Tasmania and South Australia. More recently, the citizen science project has published findings on wombat roadkill and sarcoptic mange incidence across Australia.\n[…]\nSecret sex life of wombat\n[…]\nVideo of Christmas Wombat\n[…]\nWe need to have a conversation about wombats (The Oatmeal)"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Girafa",
      "descricao": "Mamífero africano de pescoço longo do gênero Giraffa."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Apesar do pescoço enorme, quantas vértebras no pescoço tem a girafa, o mesmo número que os humanos?",
    "resposta": "Sete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giraffe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giraffe",
        "situacao": "ok",
        "texto": "Giraffes (genus Giraffa) are large African hoofed mammals. They are the tallest living terrestrial animals and the largest ruminants on Earth. They are classified under the family Giraffidae, along with their closest extant relative, the okapi. Traditionally, giraffes have been thought of as one species, Giraffa camelopardalis, with nine subspecies.\n[…]\nThe giraffe's neck vertebrae have ball and socket joints. The point of articulation between the cervical and thoracic vertebrae of giraffes is shifted to lie between the first and second thoracic vertebrae (T1 and T2), unlike in most other ruminants, where the articulation is between the seventh cervical vertebra (C7) and T1.\n[…]\nThis allows C7 to contribute directly to increased neck length and has given rise to the suggestion that T1 is actually C8, and that giraffes have added an extra cervical vertebra. However, this proposition is not generally accepted, as T1 has other morphological features, such as an articulating rib, deemed diagnostic of thoracic vertebrae, and because exceptions to the mammalian limit of seven cervical vertebrae are generally characterised by increased neurological anomalies and maladies.\n[…]\nSome parasites feed on giraffes. They are often hosts for ticks, especially in the area around the genitals, which have thinner skin than other areas. Tick species that commonly feed on giraffes are those of genera Hyalomma, Amblyomma and Rhipicephalus. Red-billed and yellow-billed oxpeckers clean giraffes of ticks and alert them to danger. Giraffes host numerous species of internal parasites and are susceptible to various diseases.\n[…]\nZarafa, another famous giraffe, was brought from Egypt to Paris in the early 19th century as a gift for Charles X of France. A sensation, the giraffe was the subject of numerous memorabilia or \"giraffanalia\".\n[…]\nGiraffe Centre"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Tatu-galinha",
      "descricao": "Tatu das Américas, espécie Dasypus novemcinctus."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O tatu-galinha costuma parir filhotes idênticos, todos vindos de um único óvulo. Quantos, normalmente?",
    "resposta": "Quatro",
    "distratores": [
      "Dois",
      "Três",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nine-banded_armadillo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nine-banded_armadillo",
        "situacao": "ok",
        "texto": "The nine-banded armadillo (Dasypus novemcinctus), also called the nine-banded long-nosed armadillo or common armadillo, is a species of armadillo native to South America. The Mexican long-nosed armadillo of North America was formerly treated as a subspecies of the nine-banded armadillo.\n[…]\nThe nine-banded armadillo ranges through most of South America except for the Guiana Shield area where the Guianan long-nosed armadillo Dasypus guianensis, a new species of armadillo officially described in June 2024, exists.\n[…]\nNine-banded armadillos reach sexual maturity at the age of one year, and reproduce every year for the rest of their 12-to-15-year lifespans. A single female can produce up to 56 young over the course of her life. This high reproductive rate is a major cause of the species' rapid expansion.\n[…]\nThe foraging of nine-banded armadillo can cause mild damage to the root systems of certain plants. Skunks, cotton rats, burrowing owls, and rattlesnakes can be found living in abandoned armadillo burrows.\n[…]\nThey are typically hunted for their meat, which is said to taste like pork, but are more frequently killed as a result of their tendency to steal the eggs of poultry and game birds. This has caused certain populations of the nine-banded armadillo to become threatened, although the species as a whole is under no immediate threat. They are also valuable for use in medical research, as they are among the few mammals other than humans susceptible to leprosy.\n[…]\nMexican long-nosed armadillo, recently elevated from a subspecies of the nine-banded armadillo.\n[…]\nNixon, Joshua. Armadillo Expansion, September 14, 2006, retrieved December 3, 2006.\n[…]\nTrapping the nine-banded armadillo Archived April 23, 2011, at the Wayback Machine\n[…]\nView the nine-banded armadillo genome in Ensembl"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Baleia-jubarte",
      "descricao": "Grande baleia migratória da espécie Megaptera novaeangliae."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Qual arquipélago do sul da Bahia é um dos principais berçários das baleias-jubarte no Brasil?",
    "resposta": "Abrolhos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abrolhos_Archipelago",
      "https://en.wikipedia.org/wiki/Humpback_whale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abrolhos_Archipelago",
        "situacao": "ok",
        "texto": "The Abrolhos Archipelago (Portuguese: Arquipélago de Abrolhos) are a group of 5 small islands with coral reefs off the southern coast of Bahia state in the northeast of Brazil, between 17º25’—18º09’ S and 38º33’—39º05’ W. Caravelas is the nearest town. Their name comes from the Portuguese: abrolho (\"Abre Olhos\" meaning: Open your eyes), a rock awash or submerged sandbank that is a danger to ships.\n[…]\nThese islets were surveyed by  Baron Roussin. As part of the instructions for the second survey voyage of HMS Beagle, the Admiralty noted \"the great importance of knowing the true position of the Abrolhos Banks, and the certainty that they extend much further out than the limits assigned to them by Baron Roussin\", and asked Captain Robert FitzRoy to take soundings and establish the position of the reefs.\n[…]\nKnown to the Royal Navy in the First World War as the Abrolhos Rocks, the area was used as a refuelling point (coal) during Doveton Sturdee's operations against the German cruisers of Admiral Von Spee in late 1914. This operation ended with the Battle of the Falklands and the subsequent sinking of the only survivor, SMS Dresden.\n[…]\nParcel dos Abrolhos, a large submerged reef extending from north to south east of the archipelago. Located 5 kilometres (3.1 miles) to the east of Santa Barbara Island, its limits are not well defined.\n[…]\nParcel das Paredes, located to the northwest of the archipelago and the largest feature of the wider Abrolhos.\n[…]\nThe Abrolhos Marine National Park (Portuguese: Parque Nacional Marinho dos Abrolhos) is a Marine Park located in the Abrolhos Archipelago since 1983. It is strictly forbidden to disembark on Ilha Guarita and Ilha Suest.\n[…]\nAbrolhos Isle Portal\n[…]\nAbrolhos - The South Atlantic Largest Coral Reef Complex\n[…]\nABROLHOS (en espanhol)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Humpback_whale",
        "situacao": "ok",
        "texto": "The humpback whale (Megaptera novaeangliae) is a species of baleen whale. It is a rorqual (a member of the family Balaenopteridae) and is the only species in the genus Megaptera. Adults range in length from 14–17 m (46–56 ft) and weigh up to 40 metric tons (44 short tons). The humpback has a distinctive body shape, with long pectoral fins and tubercles on its head. It is known for breaching and ot\n[…]\nIn 1846, John Edward Gray created the genus Megaptera, classifying the humpback as Megaptera longipinna, but in 1932, Remington Kellogg reverted the species name to use Borowski's novaeangliae. The common name is derived from the curving of the whales' backs when diving. The genus name, Megaptera, from the Ancient Greek mega- μεγα (\"giant\") and ptera πτερα (\"wing\"), refer to their large front flippers.\n[…]\nModern humpback whale populations originated in the southern hemisphere around 880,000 years ago and colonized the northern hemisphere 200,000 to 50,000 years ago. A 2014 genetic study suggested that the separate populations in the North Atlantic, North Pacific, and Southern Oceans have had limited gene flow and are distinct enough to be subspecies, with the scientific names of M. n. novaeangliae, M. n. kuzira, and M. n. australis, respectively.\n[…]\nStock B breeds on the west coast of Africa and is further divided into Bl and B2 subpopulations, the former ranging from the Gulf of Guinea to Angola and the latter ranging from Angola to western South Africa. Stock B whales have been recorded foraging in waters to the southwest of the continent, mainly around Bouvet Island. Comparison of songs between those at Cape Lopez and the Abrolhos Archipelago indicate that trans-Atlantic mixings between stock A and stock B whales occur.\n[…]\nARKive – images and movies of the humpback whale (Megaptera novaeangliae).\n[…]\nHumpback whale songs\n[…]\nHumpback Whale Mother Fights Off Males to Protect Calf | BBC Earth"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Baleia-jubarte",
      "descricao": "Grande baleia migratória da espécie Megaptera novaeangliae."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Entre as baleias-jubarte, quem produz os longos e complexos cantos que tornaram a espécie famosa?",
    "resposta": "Os machos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Humpback_whale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Humpback_whale",
        "situacao": "ok",
        "texto": "The humpback whale (Megaptera novaeangliae) is a species of baleen whale. It is a rorqual (a member of the family Balaenopteridae) and is the only species in the genus Megaptera. Adults range in length from 14–17 m (46–56 ft) and weigh up to 40 metric tons (44 short tons). The humpback has a distinctive body shape, with long pectoral fins and tubercles on its head. It is known for breaching and ot\n[…]\nIn 1846, John Edward Gray created the genus Megaptera, classifying the humpback as Megaptera longipinna, but in 1932, Remington Kellogg reverted the species name to use Borowski's novaeangliae. The common name is derived from the curving of the whales' backs when diving. The genus name, Megaptera, from the Ancient Greek mega- μεγα (\"giant\") and ptera πτερα (\"wing\"), refer to their large front flippers.\n[…]\nModern humpback whale populations originated in the southern hemisphere around 880,000 years ago and colonized the northern hemisphere 200,000 to 50,000 years ago. A 2014 genetic study suggested that the separate populations in the North Atlantic, North Pacific, and Southern Oceans have had limited gene flow and are distinct enough to be subspecies, with the scientific names of M. n. novaeangliae, M. n. kuzira, and M. n. australis, respectively.\n[…]\nIn one study, a humpback whale brain measured 22.4 cm (8.8 in) long and 18 cm (7.1 in) wide at the tips of the temporal lobes, and weighed around 4.6 kg (10 lb). The humpback's brain has a complexity similar to that of the brains of smaller whales and dolphins. Studies on the brains of humpback whales revealed spindle cells, which, in humans, control theory of mind.\n[…]\nARKive – images and movies of the humpback whale (Megaptera novaeangliae).\n[…]\nThe Oceania Project, Humpback Whale Research, Hervey Bay\n[…]\nHumpback whales defend Gray whale against Killer whales (YouTube)\n[…]\nHumpback Whale Mother Fights Off Males to Protect Calf | BBC Earth"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Leão",
      "descricao": "Grande felino social da África e da Índia, espécie Panthera leo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Num grupo de leões, quem realiza a maior parte das caçadas?",
    "resposta": "As fêmeas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lion"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lion",
        "situacao": "ok",
        "texto": "The lion (Panthera leo) is a large cat of the genus Panthera, currently ranging only in Sub-Saharan Africa and India. It has a muscular, broad-chested body; a short, rounded head; round ears; and a dark, hairy tuft at the tip of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane that extends from the head to the shoulders and chest.\n[…]\nThe generic name Panthera is traceable to the classical Latin word 'panthēra' and the ancient Greek word πάνθηρ 'panther'. The English word lion is derived via Anglo-Norman liun from Latin leōnem (nominative: leō), which in turn was a borrowing from ancient Greek λέων léōn. The Hebrew word לָבִיא lavi may also be related.\n[…]\nFelis leo was the scientific name used by Carl Linnaeus in 1758, who described the lion in his work Systema Naturae. The genus name Panthera was coined by Lorenz Oken in 1816. Between the mid-18th and mid-20th centuries, 26 lion specimens were described and proposed as subspecies, of which 11 were recognised as valid in 2005. They were distinguished mostly by the size and colour of their manes and skins.\n[…]\nOther lion subspecies or sister species to the modern lion existed in prehistoric times:\n[…]\nThe Panthera lineage is estimated to have genetically diverged from the common ancestor of the Felidae around 10.8 million years ago. Hybridisation between lion and snow leopard ancestors possibly continued until about 2.1 million years ago. The lion-leopard clade was distributed in the Asian and African Palearctic since at least the early Pliocene. The earliest fossils recognisable as lions were found at Olduvai Gorge in Tanzania and are estimated to be up to 2 million years old.\n[…]\nIUCN/SSC Cat Specialist Group. \"Lion Panthera leo\". Archived from the original on 27 March 2019. Retrieved 16 December 2014.\n[…]\n\"Lion Conservation Fund\".\n[…]\n\"Lion\" . Collier's New Encyclopedia. 1921."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Lêmure",
      "descricao": "Primatas da infraordem Lemuriformes, nativos de Madagascar."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os lêmures são primatas nativos de qual ilha?",
    "resposta": "Madagascar",
    "distratores": [
      "Bornéu",
      "Sumatra",
      "Sri Lanka"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lemur"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lemur",
        "situacao": "ok",
        "texto": "Lemurs (  LEE-mərz; from Latin  lemurēs 'ghosts, spirits of the dead') are wet-nosed primates of the superfamily Lemuroidea ( LEM-yuu-ROY-dee-ə), divided into eight families and consisting of 15 genera and around 100 extant species. They are endemic to the island of Madagascar. Most existing lemurs are small, with a pointed snout, large eyes, and a long tail. They usually live in trees and are act\n[…]\nLemur research during the 18th and 19th centuries focused on taxonomy and specimen collection. Modern studies of lemur ecology and behavior did not begin in earnest until the 1950s and 1960s. Initially hindered by political issues on Madagascar during the mid-1970s, field studies resumed in the 1980s. Lemurs are important for research because their mix of ancestral characteristics and traits shared with anthropoid primates can yield insights on primate and human evolution.\n[…]\nNot only were they unlike the living lemurs in both size and appearance, they also filled ecological niches that either no longer exist or are now left unoccupied. Large parts of Madagascar, which are now devoid of forests and lemurs, once hosted diverse primate communities that included more than 20 lemur species covering the full range of lemur sizes.\n[…]\nRelationships among lemur families have also proven to be problematic and have yet to be definitively resolved. To further complicate the issue, several Paleogene fossil primates from outside Madagascar, such as Bugtilemur, have been classified as lemurs. However, scientific consensus does not accept these assignments based on genetic evidence, and therefore it is generally accepted that the Malagasy primates are monophyletic.\n[…]\nLemurs of Madagascar Info about lemurs and the national parks they can be found in\n[…]\nBBC Nature Lemurs: from the planet's smallest primate, the mouse lemur, to ring-tailed lemurs and indris. News, sounds and video."
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Hipopótamo",
      "descricao": "Grande mamífero semiaquático africano, espécie Hippopotamus amphibius."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Vindo do grego, o nome hipopótamo quer dizer o quê?",
    "resposta": "Cavalo do rio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hippopotamus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hippopotamus",
        "situacao": "ok",
        "texto": "The hippopotamus (Hippopotamus amphibius; ; pl.: hippopotamuses or hippopotami), often shortened to hippo (pl.: hippos), further qualified as the common hippopotamus, Nile hippopotamus and river hippopotamus, is a large semiaquatic mammal native to sub-Saharan Africa. It is one of only two extant species in the family Hippopotamidae, the other being the pygmy hippopotamus (Choeropsis liberiensis o\n[…]\nHippopotamus gorgops from the Early Pleistocene to the early Middle Pleistocene of Africa and West Asia grew considerably larger than the living hippopotamus, with an estimated body mass of over 4,000 kg (8,800 lb). Hippopotamus antiquus ranged throughout Europe, extending as far north as Britain during the Early and Middle Pleistocene epochs, before being replaced by the modern H. amphibius in Europe during the latter part of the Middle Pleistocene.\n[…]\nHippopotamus amphibius arrived in Europe around 560–460,000 years ago, during the Middle Pleistocene.\n[…]\nThe distribution of Hippopotamus amphibius in Europe during the Pleistocene was largely confined to Southern Europe, including the Iberian Peninsula, Italy (southwards to Sicily), Greece, and probably Herzegovina, but extended into northwestern Europe, including northern France, Great Britain (as far north as Stockton-on-Tees), Belgium, the Netherlands, and western Germany during interglacial periods, such as the Last Interglacial (130–115,000 years ago).\n[…]\nCut marks on bones of H. amphibius found at Bolomor Cave, a site in Spain preserving fossils dating from 230,000 to 120,000 years ago, provides evidence for Neanderthal butchery of hippopotamuses. The earliest evidence of modern human interaction with hippos comes from butchery cut marks on hippo bones found at the Bouri Formation and dated to around 160,000 years ago.\n[…]\nAccording to the Ptolemaic historian Manetho, the pharaoh Menes was carried off and then killed by a hippopotamus."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Hipopótamo",
      "descricao": "Grande mamífero semiaquático africano, espécie Hippopotamus amphibius."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo estudos genéticos, quais animais marinhos são os parentes vivos mais próximos do hipopótamo?",
    "resposta": "Baleias e golfinhos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hippopotamus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hippopotamus",
        "situacao": "ok",
        "texto": "The hippopotamus (Hippopotamus amphibius; ; pl.: hippopotamuses or hippopotami), often shortened to hippo (pl.: hippos), further qualified as the common hippopotamus, Nile hippopotamus and river hippopotamus, is a large semiaquatic mammal native to sub-Saharan Africa. It is one of only two extant species in the family Hippopotamidae, the other being the pygmy hippopotamus (Choeropsis liberiensis o\n[…]\nHippopotamus amphibius arrived in Europe around 560–460,000 years ago, during the Middle Pleistocene.\n[…]\nThe distribution of Hippopotamus amphibius in Europe during the Pleistocene was largely confined to Southern Europe, including the Iberian Peninsula, Italy (southwards to Sicily), Greece, and probably Herzegovina, but extended into northwestern Europe, including northern France, Great Britain (as far north as Stockton-on-Tees), Belgium, the Netherlands, and western Germany during interglacial periods, such as the Last Interglacial (130–115,000 years ago).\n[…]\nAnalysis of ancient DNA indicates that Late Pleistocene European hippopotamuses are closely related to and nested within the genetic diversity of living African hippopotamuses. The youngest records of the species in Europe are from the Late Pleistocene of Greece, and the Rhine Graben of southwest Germany, dating to around 40–30,000 years ago.\n[…]\nCut marks on bones of H. amphibius found at Bolomor Cave, a site in Spain preserving fossils dating from 230,000 to 120,000 years ago, provides evidence for Neanderthal butchery of hippopotamuses. The earliest evidence of modern human interaction with hippos comes from butchery cut marks on hippo bones found at the Bouri Formation and dated to around 160,000 years ago.\n[…]\n\"11 Things You May Not Know About Ancient Egypt: King Tut may have been killed by a hippopotamus\". History. 12 November 2012. Archived from the original on 17 December 2014."
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Gambá",
      "descricao": "Marsupial americano do gênero Didelphis, comum no Brasil."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na forma de criar os filhotes, o que o gambá brasileiro e o canguru têm em comum?",
    "resposta": "São marsupiais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Didelphis",
      "https://en.wikipedia.org/wiki/Marsupial"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Didelphis",
        "situacao": "ok",
        "texto": "Didelphis is a genus of New World marsupials. The six species in the genus Didelphis, commonly known as Large American opossums, are members of the opossum order, Didelphimorphia.\n[…]\nThe genus Didelphis is composed of cat-sized omnivorous species, which can be recognized by their prehensile tails and their tendency to feign death when cornered. The largest species, the Virginia opossum (Didelphis virginiana), is the only marsupial to be found north of Mexico.\n[…]\nThe Virginia opossum has opposable toes on their two back feet.\n[…]\nDue to frequent interaction between human populations, Didelphis have potential risks and benefits. Disease is commonly carried amongst the species which poses threats to humans, pets, and livestock who come in contact with didelphis. A study argues otherwise however as in various regions of Brazil Didelphis marsupialis is commonly consumed for protein and its medicinal benefits used to treat disease.\n[…]\nCladogram of living large American opossums, the genus Didelphis:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Marsupial",
        "situacao": "ok",
        "texto": "Marsupials are a diverse group of mammals belonging to the infraclass Marsupialia. They are natively found in Australasia, Wallacea, and the Americas. One of marsupials' unique features is their reproductive strategy: the young are born in a relatively undeveloped state and then nurtured within a pouch on their mother's abdomen. Extant marsupials encompass many species, including kangaroos, koalas\n[…]\nIn the Americas, marsupials are found throughout South America, excluding the central/southern Andes and parts of Patagonia; and through Central America and south-central Mexico, with a single species (the Virginia opossum Didelphis virginiana) widespread in the eastern United States and along the Pacific coast.\n[…]\nIn 2022, a study provided strong evidence that the earliest known marsupial was Deltatheridium known from specimens from the Campanian age of the Late Cretaceous in Mongolia. This study placed both Deltatheridium and Pucadelphys as sister taxa to the modern large American opossums.\n[…]\nIn South America, the opossums evolved and developed a strong presence, and the Paleogene also saw the evolution of shrew opossums (Paucituberculata) alongside non-marsupial metatherian predators such as the borhyaenids and the saber-toothed Thylacosmilus. South American niches for mammalian carnivores were dominated by these marsupial and sparassodont metatherians, which seem to have competitively excluded South American placentals from evolving carnivory.\n[…]\nThe branching sequence of marsupial orders indicated by the study puts Didelphimorphia in the most basal position, followed by Paucituberculata, then Microbiotheria, and ending with the radiation of Australian marsupials. This indicates that Australidelphia arose in South America, and reached Australia after Microbiotheria split off.\n[…]\nMarsupial lawn\n[…]\n\"Researchers Publish First Marsupial Genome Sequence\". Genome.gov. Retrieved 28 June 2021."
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Equidna",
      "descricao": "Mamífero monotremado coberto de espinhos da família Tachyglossidae, da Austrália e Nova Guiné."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que a equidna e o ornitorrinco têm em comum que os torna raríssimos entre os mamíferos?",
    "resposta": "Botam ovos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Echidna",
      "https://en.wikipedia.org/wiki/Monotreme"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Echidna",
        "situacao": "ok",
        "texto": "Echidnas (), sometimes known as spiny anteaters, are quill-covered monotremes (egg-laying mammals) belonging to the family Tachyglossidae , living in Australia and New Guinea. The four extant species of echidnas and the platypus are the only living mammals that lay eggs and the only surviving members of the order Monotremata. The diet of some species consists of ants and termites, but they are not\n[…]\nEchidnas are a small clade with two extant genera and four species. The genus Zaglossus includes three extant and two fossil species, with only one extant species from the genus Tachyglossus.\n[…]\nThe short-beaked echidna (Tachyglossus aculeatus) is found in southern, southeast and northeast New Guinea, and also occurs in almost all Australian environments, from the snow-clad Australian Alps to the deep deserts of the Outback, essentially anywhere ants and termites are available. It is smaller than the Zaglossus species, and it has longer hair.\n[…]\nDespite the similar dietary habits and methods of consumption to those of an anteater, there is no evidence supporting the idea that echidna-like monotremes have been myrmecophagous (ant or termite-eating) since the Cretaceous. The fossil evidence of invertebrate-feeding bandicoots and rat-kangaroos, from around the time of the platypus–echidna divergence and pre-dating Tachyglossus, shows evidence that echidnas expanded into new ecospace despite competition from marsupials.\n[…]\nStewart, Doug (April 2003). \"The Enigma of the Echidna\". National Wildlife. Retrieved 3 February 2017.\n[…]\nParker, J. (1 June 2000). \"Echidna Love Trains\". ABC Science. Australian Broadcasting Corporation.\n[…]\nRismiller, Peggy (2005). \"Echidna research, Kangaroo island\". Pelican Lagoon Research & Wildlife Centre. Archived from the original on 21 February 2015. Retrieved 15 July 2012.\n[…]\n\"Tachyglossidae\". NCBI Taxonomy Browser. 9259."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Monotreme",
        "situacao": "ok",
        "texto": "Monotremes () are mammals of the order Monotremata. They are the only mammals still in existence which lay eggs, rather than bearing live young. The five extant monotreme species are the platypus and the four species of echidnas. Monotremes are typified by structural differences in their brains, jaws, digestive tracts, reproductive tracts, and other body parts, compared to the more common mammalia\n[…]\nMolecular clock and fossil dating give a wide range of dates for the split between echidnas and platypuses, with one survey putting the split at 19–48 million years ago, but another putting it at 17–89 million years ago. It has been suggested that both the short-beaked and long-beaked echidna species are derived from a platypus-like ancestor.\n[…]\nFamily Tachyglossidae: echidnas\n[…]\nGenus Tachyglossus\n[…]\nShort-beaked echidna, T. aculeatus\n[…]\nT. a. aculeatus (Common short-beaked echidna)\n[…]\nT. a. acanthion (Northern short-beaked echidna)\n[…]\nT. a. lawesii (New Guinea short-beaked echidna)\n[…]\nT. a. multiaculeatus (Kangaroo Island short-beaked echidna)\n[…]\nT. a. setosus (Tasmanian short-beaked echidna)\n[…]\nSir David's long-beaked echidna, Z. attenboroughi\n[…]\nEastern long-beaked echidna, Z. bartoni\n[…]\nWestern long-beaked echidna, Z. bruijni\n[…]\nOligo-Miocene fossils of the toothed platypus Obdurodon have also been recovered from Australia, and fossils of a 63 million-year old platypus relative occur in southern Argentina (Monotrematum), see fossil monotremes below. The extant platypus genus Ornithorhynchus in also known from Pliocene deposits, and the oldest fossil tachyglossids are Pleistocene (1.7 Ma) in age.\n[…]\nFamily Tachyglossidae"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Ornitorrinco",
      "descricao": "Mamífero monotremado semiaquático australiano, espécie Ornithorhynchus anatinus."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por causa do bico achatado, o ornitorrinco recebeu um nome grego que significa focinho de que tipo de animal?",
    "resposta": "Ave",
    "fonte": [
      "https://en.wikipedia.org/wiki/Platypus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Platypus",
        "situacao": "ok",
        "texto": "The platypus (Ornithorhynchus anatinus), sometimes referred to as the duck-billed platypus, is a semiaquatic, egg-laying mammal endemic to eastern Australia, including Tasmania. The platypus is the sole living representative of the family Ornithorhynchidae and genus Ornithorhynchus, though a number of related species appear in the fossil record.\n[…]\nThe scientific name Ornithorhynchus anatinus literally means 'duck-like bird-snout', deriving its genus name from the Greek root ornith- (όρνιθ ornith or ὄρνις órnīs 'bird') and the word rhúnkhos (ῥύγχος 'snout', 'beak'). Its species name is derived from Latin anatinus ('duck-like') from anas 'duck'. The platypus is the sole living representative or monotypic taxon of its family (Ornithorhynchidae).\n[…]\nThe fossil jaw of Teinolophos is elongated but unlike the modern platypus (and echidnas), lacks a beak.\n[…]\nIn another story from the upper Darling, the major animal groups, the land animals, water animals and birds, all competed for the platypus to join their respective groups, but the platypus ultimately decided to not join any of them, feeling that he did not need to be part of a group to be special, and wished to remain friends with all of those groups.\n[…]\nThe platypus is also featured as a totem for some Aboriginal peoples, which is to them \"a natural object, plant or animal that is inherited by members of a clan or family as their spiritual emblem\", and the animal holds special meaning for the Wadi Wadi people at the Murray River. Because of their cultural significance and importance in connection to country, the platypus is protected and conserved by these Indigenous peoples.\n[…]\nBiodiversity Heritage Library bibliography for Ornithorhynchus anatinus\n[…]\nPlatypus facts (archived 10 September 2019)\n[…]\nView the platypus genome in Ensembl\n[…]\nPBS Nature \"The Platypus Guardian\""
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Morsa",
      "descricao": "Grande mamífero marinho do Ártico com presas longas, espécie Odobenus rosmarus."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A morsa usa as presas para se arrastar para fora da água. Seu nome científico, Odobenus, significa aquele que caminha com o quê?",
    "resposta": "Dentes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Walrus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Walrus",
        "situacao": "ok",
        "texto": "The walrus (Odobenus rosmarus; plural walrus or walruses) is a large pinniped marine mammal with  discontinuous distribution about the North Pole in the Arctic Ocean and subarctic seas of the Northern Hemisphere. It is the only extant species in the family Odobenidae and genus Odobenus. This species is subdivided into two subspecies: the Atlantic walrus (O. r. rosmarus), which lives in the Atlanti\n[…]\nSeal tissue has been observed in a fairly significant proportion of walrus stomachs in the Pacific, but the importance of seals in the walrus diet is under debate. There have been isolated observations of walruses preying on seals up to the size of a 200 kg (440 lb) bearded seal. Rarely, incidents of walruses preying on seabirds, particularly the Brünnich's guillemot (Uria lomvia), have been documented.\n[…]\nDue to its great size and tusks, the walrus has only two natural predators: the orca and the polar bear. The walrus does not, however, comprise a significant component of either of these predators' diets. Both the orca and the polar bear are also most likely to prey on walrus calves. Polar bears often hunt walrus by rushing at beached aggregations and consuming the individuals crushed or wounded in the sudden exodus, typically younger or infirm animals.\n[…]\nWalrus hunts are regulated by resource managers in Russia, the United States, Canada, and Greenland, and by representatives of the respective hunting communities. An estimated 4000–7000 Pacific walruses are harvested in Alaska and in Russia, including a significant portion (about 42%) of struck and lost animals. Several hundred are removed annually around Greenland.\n[…]\nData related to Odobenus rosmarus at Wikispecies\n[…]\nMedia related to Odobenus rosmarus at Wikimedia Commons\n[…]\nBiologist Tracks Walruses Forced Ashore As Ice Melts – audio report by NPR\n[…]\nVoices in the Sea – Sounds of the Walrus. Archived 9 July 2014 at the Wayback Machine."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Sirênios",
      "descricao": "Ordem de mamíferos aquáticos herbívoros que inclui peixes-bois e dugongos."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A ordem que reúne peixes-bois e dugongos tem nome inspirado em qual criatura mitológica?",
    "resposta": "Sereias",
    "distratores": [
      "Tritões",
      "Ninfas",
      "Hidras"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sirenia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sirenia",
        "situacao": "ok",
        "texto": "The Sirenia ( sy-REE-nee-ə), commonly referred to as sea cows or sirenians, are an order of fully aquatic, herbivorous mammals that inhabit swamps, rivers, estuaries, marine wetlands, and coastal marine waters. The extant Sirenia comprise two distinct families:\n[…]\nDugongidae (the dugong and the now extinct Steller's sea cow) and\n[…]\nFamily Dugongidae:\n[…]\nSirenians are referred to as \"sea cows\" because their diet consists mainly of seagrass. Dugongs sift through the seafloor in search of seagrasses, using their sense of smell because their eyesight is poor. They ingest the whole plant, including the roots, although they will feed on just the leaves if this is not possible.\n[…]\nDespite being mostly solitary, sirenians congregate in groups while females are in estrus. These groups usually include one female with multiple males. Sirenians are K-selectors; despite their longevity, females give birth only a few times during their lives and invest considerable parental care in their young. Dugongs generally gather in groups of less than a dozen individuals for one to two days. Since they congregate in turbid waters, little is known about their reproductive behavior.\n[…]\nAll sirenians are protected by the US Marine Mammal Protection Act of 1972, the US Endangered Species Act of 1973, and the Convention on the International Trade in Endangered Species of Wild Fauna and Flora (CITES). In addition to this, the four species are further protected by various specialty organizations. The dugong is listed in the Convention on Biological Diversity, the Convention on Migratory Species, and the Coral Triangle Initiative.\n[…]\nDaryl P. Domning. \"Bibliography and Index of the Sirenia and Desmostylia\". Archived from the original on 2013-11-03."
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Rinoceronte",
      "descricao": "Grandes mamíferos herbívoros com chifre no focinho, da família Rhinocerotidae."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome rinoceronte junta duas palavras gregas. Uma é nariz. Qual é a outra?",
    "resposta": "Chifre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rhinoceros"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rhinoceros",
        "situacao": "ok",
        "texto": "A rhinoceros ( ry-NOSS-ə-rəss; from Ancient Greek  ῥινόκερως (rhinókerōs) 'nose-horned'; from  ῥίς (rhis) 'nose' and  κέρας (kéras) 'horn'; pl.: rhinoceros or rhinoceroses), commonly abbreviated to rhino, is a member of any of the five extant species (or numerous extinct species) of odd-toed ungulates (perissodactyls) in the family Rhinocerotidae.\n[…]\nIn Khmer art, the Hindu god Agni is depicted with a rhinoceros as his vahana. Similarly in medieval era Thai literature, Agni also called Phra Phloeng is sometimes described as riding a rhinoceros.\n[…]\nIn 1974, a lavender rhinoceros symbol began to be used as a symbol of the gay community in Boston, United States.\n[…]\nRhinoceros, 1959 play\n[…]\nRhinoceroses in ancient China\n[…]\nWhite Rhinoceros, White Rhinoceros Profile, Facts, Information, Photos, Pictures, Sounds, Habitats, Reports, News – National Geographic\n[…]\nLaufer, Berthold. 1914. \"History of the Rhinoceros\". In: Chinese Clay Figures, Part I: Prolegomena on the History of Defence Armour. Field Museum of Natural History, Chicago, pp. 73–173.\n[…]\nCerdeño, Esperanza (1995). \"Cladistic Analysis of the Family Rhinocerotidae (Perissodactyla)\" (PDF). Novitates (3143). ISSN 0003-0082. Archived from the original (PDF) on 27 March 2009. Retrieved 24 October 2007.\n[…]\nChapman, January (1999). The Art of Rhinoceros Horn Carving in China. Christies Books, London. ISBN 0-903432-57-9.\n[…]\nHieronymus, Tobin L.; Lawrence M. Witmer; Ryan C. Ridgely (2006). \"Structure of White Rhinoceros (Ceratotherium simum) Horn Investigated by X-ray Computed Tomography and Histology With Implications for Growth and External Form\" (PDF). Journal of Morphology. 267 (10): 1172–1176. Bibcode:2006JMorp.267.1172H. doi:10.1002/jmor.10465. PMID 16823809. S2CID 15699528.\n[…]\nRhinoceros entry on World Wide Fund for Nature website.\n[…]\nRhinoceros Resources & Photos on African Wildlife Foundation website"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Rinoceronte",
      "descricao": "Grandes mamíferos herbívoros com chifre no focinho, da família Rhinocerotidae."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O chifre do rinoceronte é formado principalmente por qual substância?",
    "resposta": "Queratina",
    "distratores": [
      "Marfim",
      "Osso",
      "Cartilagem"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rhinoceros"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rhinoceros",
        "situacao": "ok",
        "texto": "A rhinoceros ( ry-NOSS-ə-rəss; from Ancient Greek  ῥινόκερως (rhinókerōs) 'nose-horned'; from  ῥίς (rhis) 'nose' and  κέρας (kéras) 'horn'; pl.: rhinoceros or rhinoceroses), commonly abbreviated to rhino, is a member of any of the five extant species (or numerous extinct species) of odd-toed ungulates (perissodactyls) in the family Rhinocerotidae.\n[…]\nIn Khmer art, the Hindu god Agni is depicted with a rhinoceros as his vahana. Similarly in medieval era Thai literature, Agni also called Phra Phloeng is sometimes described as riding a rhinoceros.\n[…]\nIn 1974, a lavender rhinoceros symbol began to be used as a symbol of the gay community in Boston, United States.\n[…]\nRhinoceros, 1959 play\n[…]\nRhinoceroses in ancient China\n[…]\nWhite Rhinoceros, White Rhinoceros Profile, Facts, Information, Photos, Pictures, Sounds, Habitats, Reports, News – National Geographic\n[…]\nLaufer, Berthold. 1914. \"History of the Rhinoceros\". In: Chinese Clay Figures, Part I: Prolegomena on the History of Defence Armour. Field Museum of Natural History, Chicago, pp. 73–173.\n[…]\nCerdeño, Esperanza (1995). \"Cladistic Analysis of the Family Rhinocerotidae (Perissodactyla)\" (PDF). Novitates (3143). ISSN 0003-0082. Archived from the original (PDF) on 27 March 2009. Retrieved 24 October 2007.\n[…]\nChapman, January (1999). The Art of Rhinoceros Horn Carving in China. Christies Books, London. ISBN 0-903432-57-9.\n[…]\nHieronymus, Tobin L.; Lawrence M. Witmer; Ryan C. Ridgely (2006). \"Structure of White Rhinoceros (Ceratotherium simum) Horn Investigated by X-ray Computed Tomography and Histology With Implications for Growth and External Form\" (PDF). Journal of Morphology. 267 (10): 1172–1176. Bibcode:2006JMorp.267.1172H. doi:10.1002/jmor.10465. PMID 16823809. S2CID 15699528.\n[…]\nRhinoceros entry on World Wide Fund for Nature website.\n[…]\nRhinoceros Resources & Photos on African Wildlife Foundation website"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Orangotango",
      "descricao": "Grandes primatas de pelagem avermelhada do gênero Pongo, nativos de Bornéu e Sumatra."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na língua malaia, o que significa o nome orangotango?",
    "resposta": "Homem da floresta",
    "distratores": [
      "Macaco vermelho",
      "Velho da montanha",
      "Rei das árvores"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Orangutan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Orangutan",
        "situacao": "ok",
        "texto": "Orangutans are great apes native to the rainforests of Indonesia and Malaysia. They are now found only in parts of Borneo and Sumatra, but during the Pleistocene they ranged throughout Southeast Asia and South China. Classified in the genus Pongo, orangutans were originally considered to be one species. In 1996, they were divided into two species: the Bornean orangutan (P. pygmaeus, with three sub\n[…]\npygmaeus or P. abelii or, in fact, represent distinct species. In 2025, two other distinct species from Pleistocene deposists in the Làng Tráng and Kéo Lèng caves in Vietnam were described as P. grovesei and P. nguyenbinheri. During the Pleistocene, Pongo had a far more extensive range than at present, extending throughout Sundaland and mainland Southeast Asia and South China. Teeth of orangutans are known from Peninsular Malaysia that date to 60,000 years ago.\n[…]\nThe youngest remains from South China, which are teeth assigned to P. weidenreichi, date to between 66 and 57,000 years ago. The range of orangutans had contracted significantly by the end of the Pleistocene, most likely because of the reduction of forest habitat during the Last Glacial Maximum. They may have nevertheless survived into the Holocene in Cambodia and Vietnam.\n[…]\nOrangutans display significant sexual dimorphism; females typically stand 115 cm (45 in) tall and weigh around 37 kg (82 lb), while adult males stand 137 cm (54 in) tall and weigh 75 kg (165 lb). The tallest orangutan recorded was a 180 cm (71 in). Compared to humans, they have proportionally long arms, a male orangutan having an arm span of about 2 m (6 ft 7 in), and short legs.\n[…]\nThere are even stories of hunters being captured by female orangutans.\n[…]\nOrangutan Island\n[…]\nOrangutan Foundation International\n[…]\nAZA's Orangutan Conservation Education Center\n[…]\nOrangutan Language Project\n[…]\nThe Orangutan Foundation\n[…]\nOrangutan Land Trust"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Camelo",
      "descricao": "Mamíferos do gênero Camelus, adaptados a desertos e com corcovas nas costas."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Ao contrário do que muita gente pensa, a corcova do camelo armazena principalmente o quê?",
    "resposta": "Gordura",
    "distratores": [
      "Água",
      "Músculo",
      "Sangue"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Camel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Camel",
        "situacao": "ok",
        "texto": "A camel (from Latin: camelus and Ancient Greek: κάμηλος (kamēlos) from Ancient Semitic: gāmāl) is an even-toed ungulate in the genus Camelus that bears distinctive fatty deposits known as \"humps\" on its back. Camels have long been domesticated and, as livestock, they provide food (camel milk and meat) and textiles (fiber and felt from camel hair). Camels are working animals especially suited to th\n[…]\nThe last camel native to North America was Camelops hesternus, which vanished along with horses, short-faced bears, mammoths and mastodons, ground sloths, sabertooth cats, and many other megafauna as part of the Quaternary extinction event, coinciding with the migration of humans from Asia at the end of the Pleistocene, around 13–11,000 years ago.\n[…]\nAn extinct giant camel species, Camelus knoblochi, roamed Asia during the Late Pleistocene, before becoming extinct around 20,000 years ago.\n[…]\nThe introduction of the dromedary camel (Camelus dromedarius) as a pack animal to the southern Levant ... substantially facilitated trade across the vast deserts of Arabia, promoting both economic and social change (e.g., Kohler 1984; Borowski 1998: 112–116; Jasmin 2005). This ...\n[…]\nCamel milk can also be made into ice cream.\n[…]\nRamet, J. P. (2011). The Technology of Making Cheese from Camel Milk (Camelus Dromedarius). FAO Animal Production and Health Paper. Rome: Food and Agriculture Organization of the United Nations. ISBN 978-92-5-103154-4. ISSN 0254-6019. OCLC 476039542. Retrieved 6 December 2012.\n[…]\nGilchrist, W. (1851). A Practical Treatise on the Treatment of the Diseases of the Elephant, Camel & Horned Cattle: With Instructions for Improving Their Efficiency; also, a Description of the Medicines Used in the Treatment of Their Diseases; and a General Outline of Their Anatomy. Calcutta, India: Military Orphan Press. OCLC 1569822810.\n[…]\nSix Green Reasons to Drink Camel's Milk\n[…]\nThe Camel as a pet"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Bugio",
      "descricao": "Macacos do gênero Alouatta, das Américas, famosos pelos uivos altíssimos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O uivo do bugio, ouvido a quilômetros de distância, é amplificado por qual osso da garganta, muito aumentado?",
    "resposta": "Osso hioide",
    "fonte": [
      "https://en.wikipedia.org/wiki/Howler_monkey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Howler_monkey",
        "situacao": "ok",
        "texto": "Howler monkeys  (genus Alouatta, monotypic in subfamily Alouattinae) are the most widespread primate genus in the Neotropics and are among the largest of the platyrrhines along with the muriquis (Brachyteles), the spider monkeys (Ateles) and woolly monkeys (Lagotrix). The monkeys are native to South and Central American forests. They are famous for their  howls, which can be heard from a distance \n[…]\nLike many New World monkeys, they have prehensile tails, which they use while picking fruit and nuts from trees. Unlike other New World monkeys, both male and female howler monkeys have trichromatic color vision. This has evolved independently from other New World monkeys due to gene duplication. They have lifespans of 15 to 20 years. Howler species are dimorphic and can also be dichromatic (i.e. Alouatta caraya). Males are typically 1.5 to 2.0 kg heavier than females.\n[…]\nMales experience an evolutionary trade off between investments in precopulatory traits, larger hyoids but smaller testes, or post-copulatory traits, larger testes and smaller hyoids. The hyoid of Alouatta is pneumatized, one of the few cases of postcranial pneumaticity outside the Saurischia. The volume of the hyoid of male howler monkeys is negatively correlated with the dimensions of their testes, and with the number of males per group.\n[…]\nWhile they are not usually aggressive, brown howler monkeys do not take well to captivity and are of bad-tempered and unfriendly disposition. However, the black howler monkey (Alouatta caraya) is a relatively common pet in contemporary Argentina due to its gentle nature (in comparison to the capuchin monkey's aggressive tendencies), in spite of its lesser intelligence, as well as the liabilities of the size of it and the monkey's vocalizations.\n[…]\nPrimate Info Net Alouatta Factsheets\n[…]\nInformation about howler monkeys from Belize Zoo (photos, video and audio included)"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Narval",
      "descricao": "Cetáceo do Ártico com uma longa presa em espiral, espécie Monodon monoceros."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A longa presa em espiral do narval é, na verdade, que tipo de estrutura do corpo?",
    "resposta": "Um dente canino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Narwhal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Narwhal",
        "situacao": "ok",
        "texto": "The narwhal (Monodon monoceros) is a species of toothed whale native to the Arctic. It is the only member of the genus Monodon and one of two living representatives of the family Monodontidae. The narwhal is a stocky cetacean with a relatively blunt snout, a large melon, and a shallow ridge in place of a dorsal fin.\n[…]\nThe narwhal was scientifically described by Carl Linnaeus in his 1758 publication Systema Naturae. The word \"narwhal\" comes from the Old Norse nárhval, meaning 'corpse-whale', which possibly refers to the animal's grey, mottled skin and its habit of remaining motionless when at the water's surface, a behaviour known as \"logging\" that usually happens in the summer. The scientific name, Monodon monoceros, is derived from Ancient Greek, meaning 'single-tooth single-horn'.\n[…]\nThe fossil species Casatia thermophila of early Pliocene central Italy was described as a possible narwhal ancestor when it was discovered in 2019. Bohaskaia, Denebola and Haborodelphis are other extinct genera known from the Pliocene of the United States. Fossil evidence shows that prehistoric monodontids lived in tropical waters. They may have migrated to Arctic and subarctic waters in response to changes in the marine food chain.\n[…]\nResearchers found bacteria of the Brucella genus in the bloodstreams of numerous narwhals throughout the course of a 19-year study. They were also recorded with whale lice species such as Cyamus monodontis and Cyamus nodosus. Other pathogens that affect narwhals include Toxoplasma gondii, morbillivirus, and papillomavirus. In 2018, a female narwhal was recorded with an alphaherpesvirus in her system.\n[…]\nAfter the unicorn notion was scientifically refuted, narwhal tusks were rarely employed for magical purposes."
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.20 — 2026-09-30**
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

- **O enunciado aponta para a figura e é curto:** "Que cidade aparece nesta foto?", "Esta igreja fica em qual capital?". Ele pode trazer um fato que ajude, desde que não entregue a resposta.
- **O ângulo segue a regra de sempre (§5).** Foto de um monumento e pergunta pela cidade: a âncora é o monumento, e o ângulo é `lugar`.
- **Tipos de figura, por ordem de prioridade:** lugares (cidades, monumentos, paisagens) e contornos de mapa. Obras de arte, animais e plantas ficam para depois.
- **Só imagens do Wikimedia Commons**, com licença livre (CC BY, CC BY-SA ou domínio público). Autor e licença são sempre registrados.
- **Proibido:** capas de álbuns, pôsteres, logotipos, fotos de imprensa e fotos de pessoas que não sejam figuras públicas.

**Critérios da figura**, além dos de §8:
- [ ] **Nada na imagem entrega a resposta:** placas, legendas, letreiros, marcas d'água, bandeiras.
- [ ] **Resposta única diante da imagem:** atenção a réplicas, paisagens parecidas e monumentos que ficam entre duas cidades. A Ponte Luís I liga o Porto a Vila Nova de Gaia, por isso a pergunta é pela cidade "do outro lado da ponte".
- [ ] **Legível num celular** a um braço de distância.
- [ ] **O enunciado é verdadeiro para esta foto específica**, e não só para o assunto: o ponto de vista, o lado e o que aparece nela.
- [ ] **Não é óbvia demais:** a Torre Eiffel de frente não ensina nada. Prefira um ângulo menos visto, um detalhe ou um fato no enunciado que torne a pergunta interessante (princípio 4).

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
