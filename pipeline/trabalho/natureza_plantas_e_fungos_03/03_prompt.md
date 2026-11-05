Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Plantas e Fungos** (tema **Natureza**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Banana",
      "descricao": "Fruto comestível das plantas do gênero Musa"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Para a botânica, qual destas frutas é classificada como baga?",
    "resposta": "Banana",
    "distratores": [
      "Morango",
      "Framboesa",
      "Amora"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Berry_(botany)",
      "https://en.wikipedia.org/wiki/Banana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Berry_(botany)",
        "situacao": "ok",
        "texto": "In botany, a berry is a fleshy fruit produced from a single flower containing one ovary. Berries so defined include grapes, currants, and tomatoes, as well as cucumbers, eggplants (aubergines), persimmons and bananas, but exclude certain fruits that meet the culinary definition of berries, such as strawberries and raspberries. The berry is the most common type of fleshy fruit in which the entire o\n[…]\nCommon fruits that are sometimes classified as epigynous berries include bananas, coffee, members of the genus Vaccinium (e.g., cranberries and blueberries), and members of the family Cucurbitaceae (gourds, cucumbers, melons and squash).\n[…]\nAccessory fruits are not botanical berries. In accessory fruits, the edible part is not generated by the ovary. Berry-like examples include:\n[…]\nBerries in the strictest sense: including bananas and plantains, blueberries, cranberries, coffee berries, gooseberries, red-, black- and white currants, tomatoes, grapes and peppers (Capsicum fruits)\n[…]\nBananas were first domesticated in Papua New Guinea and Southeast Asia. Archaeological and palaeoenvironmental evidence at Kuk Swamp in the Western Highlands Province of Papua New Guinea suggests that banana cultivation there goes back to at least 7,000 BP, and possibly to 10,000 BP.\n[…]\nAccording to FAOSTAT data, in 2013 four of the five top fruit crops in terms of world production by weight were botanical berries. The other was a pome (apples).\n[…]\nAccording to FAOSTAT, in 2001, bananas (including plantains) and citrus comprised over 25% by value of the world's exported fruits and vegetables, citrus fruits being more valuable than bananas. Export quantities of fruit are not entirely comparable with production quantities, since slightly different categories are used. The top five fruit exports by weight in 2012 are shown in the table below. Bananas and citrus occupy the top two places."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Banana",
        "situacao": "ok",
        "texto": "A banana is an elongated, edible fruit that is botanically a berry produced by several kinds of large treelike herbaceous flowering plants in the genus Musa. In some countries, cooking bananas are called plantains, distinguishing them from dessert bananas. The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a peel, whi\n[…]\nCheesman recommended the abolition of Linnaeus's species in favor of reclassifying bananas according to three morphologically distinct groups of cultivars – those primarily exhibiting the botanical characteristics of Musa balbisiana, those primarily exhibiting the botanical characteristics of Musa acuminata, and those with characteristics of both. Researchers Norman Simmonds and Ken Shepherd proposed a genome-based nomenclature system in 1955.\n[…]\nThis system eliminated almost all the difficulties and inconsistencies of the earlier classification of bananas based on assigning scientific names to cultivated varieties. Despite this, the original names are still recognized by some authorities, leading to confusion.\n[…]\nMonocropping of Cavendish similarly leaves it susceptible to disease and so threatens both commercial cultivation and small-scale subsistence farming. Within the data gathered from the genes of hundreds of bananas, the botanist Julie Sardos has found several wild banana ancestors currently unknown to scientists, whose genes could provide a means of defense against banana crop diseases.\n[…]\nIn Malay folklore, the ghost known as Pontianak is associated with banana plants (pokok pisang), and its spirit is said to reside in them during the day.\n[…]\nBanana republic\n[…]\nBanana at the Wikibooks Cookbook subproject\n[…]\nThe Biology of Musa L. (banana) - Office of the Gene Technology Regulator, Department of Health, Disability and Ageing, Australian Government\n[…]\nKew plant profile: Musa acuminata (banana)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baga",
        "situacao": "ok",
        "texto": "Em botânica, a baga é o tipo mais comum de fruto carnudo simples, no qual a parede inteira do órgão ovário amadurece em um pericarpo comestível (a camada externa do fruto). As flores dessas plantas têm um ovário superior e, ele tem um ou vários gineceus dentro de uma cobertura fina e interiores muito carnudos. As sementes são embutidas na carne comum do ovário.\n[…]\nEm linguagem comum e culinária, o termo \"baga\" refere-se normalmente a qualquer fruto pequeno e doce. Assim, neste sentido, ao contrário do sentido botânico, um morango ou uma amora serão bagas, e uma banana ou uma laranja, não.\n[…]\nNa linguagem coloquial, a baga refere-se a qualquer pequeno fruto com múltiplas sementes. Os frutos agregados como a amora-silvestre, framboesa e o boysenberry são bagas neste sentido, mas não no sentido botânico.\n[…]\nNo que diz respeito ao seu consumo por nativos das Américas, bagas são, em linguagem comum, mas não em linguagem botânica, todo fruto pequeno e doce como amora, ameixa, morango, groselha, framboesa, mirtilo e outros.\n[…]\nA baga mais utilizada pelos índios norte-americanos era a common chockeberry (Prunus virginiana). Era comida ao natural pelos Abnaki de Montreal, pelos Apache do oeste do Arizona, pelos Lakota da Dakota do Norte e Dakota do Sul e por outros povos; os Ojibwa de Ontário misturavam o pó da baga com farinha de carne e faziam sopa e também faziam sopa com a farinha pura da baga. Outras tribos empregavam esta baga preparada de diferentes maneiras como alimento.\n[…]\nOs Iroquois do Estado de Nova York e sul de Quebec consumiam ao morangos, framboesas, amoras, cerejas, groselhas e outras bagas ao natural ou adoçadas com xarope de boldo, secas ou em forma de bebidas. Algumas tribos canadenses faziam o sorvete de índio batendo soapberries (um tipo de baga).\n[…]\nLista de frutas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Banana",
      "descricao": "Fruto comestível das plantas do gênero Musa"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A bananeira parece uma árvore, mas não tem tronco de madeira. Do que é formado o seu falso tronco?",
    "resposta": "Bainhas das folhas",
    "distratores": [
      "Raízes aéreas",
      "Cipós entrelaçados",
      "Fibras de casca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Banana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Banana",
        "situacao": "ok",
        "texto": "A banana is an elongated, edible fruit that is botanically a berry produced by several kinds of large treelike herbaceous flowering plants in the genus Musa. In some countries, cooking bananas are called plantains, distinguishing them from dessert bananas. The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a peel, whi\n[…]\nA person slipping on a banana peel has been a staple of physical comedy for generations. An American comedy recording from 1910 features a popular character of the time, \"Uncle Josh\", claiming to describe his own such incident.\n[…]\nIn India, bananas serve a prominent part in many festivals and occasions of Hindus. In South Indian weddings, particularly Tamil weddings, banana trees are tied in pairs to form an arch as a blessing to the couple for a long-lasting, useful life.\n[…]\nIn Thailand, it is believed that a certain type of banana plant may be inhabited by a spirit, Nang Tani, a type of ghost related to trees and similar plants that manifests itself as a young woman. People often tie a length of colored satin cloth around the pseudostem of the banana plants.\n[…]\nIn Malay folklore, the ghost known as Pontianak is associated with banana plants (pokok pisang), and its spirit is said to reside in them during the day.\n[…]\nIn European, British, and Australian sport, throwing a banana at a member of an opposing team has long been used as a form of racial abuse. The act, which was commonplace in England in the 1980s, is meant to taunt players of Black African ancestry by equating them to apes or monkeys.\n[…]\nCorporación Bananera Nacional\n[…]\nBanana republic\n[…]\nBanana at the Wikibooks Cookbook subproject\n[…]\nThe Biology of Musa L. (banana) - Office of the Gene Technology Regulator, Department of Health, Disability and Ageing, Australian Government\n[…]\nKew plant profile: Musa acuminata (banana)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Banana",
        "situacao": "ok",
        "texto": "Banana, pacoba ou pacova é uma pseudobaga da bananeira, uma planta herbácea vivaz acaule da família Musaceae (género Musa - além do género Ensete, que produz as chamadas \"falsas bananas\"). São cultivadas em 130 países. Originárias do sudeste da Ásia são atualmente cultivadas em praticamente todas as regiões tropicais do planeta.\n[…]\nEntre as bananas de mesa, contam-se as variedades maçã, ouro, prata e nanica (anã, baé, caturra, ou Dwarf Cavendish). Esta última deve o seu nome ao porte da bananeira sendo, na verdade, uma banana de grande dimensão. Outras variedades incluem a banana das Canárias, a banana da Madeira, a Gros Michel, a Latacan, a Nanican e a Grande Anã. A variedade Cambuta, como é designada em Cabo Verde, é resistente em climas mais frios, sendo a mais utilizada em zonas subtropicais e temperadas/quentes.\n[…]\nExistem relatos de que seria usada, esmagada com mel, como remédio contra a icterícia em determinadas regiões asiáticas (onde o rizoma da bananeira é utilizado para o mesmo fim). Apesar de parecer não utilizável, a casca da banana contém vários nutrientes, açúcares naturais como a glicose e sacarose e minerais. Com isso, pode ser aproveitada no consumo alimentício, proporcionando baixo custo sem deixar para trás o bom paladar.\n[…]\nA bananeira tem sido uma fonte de fibra para tecidos de alta qualidade. No Japão, o cultivo de banana para vestuário e uso doméstico remonta pelo menos ao século XIII. No sistema japonês, folhas e brotos são cortados a partir da planta periodicamente para garantir a suavidade. Brotos colhidos são cozidos em primeiro em soda cáustica para preparar fibras para fazer fios têxteis.\n[…]\nMANICA, I. Fruticultura Tropical 4. Banana. Cinco Continentes Editora, 485p., 1997.\n[…]\n«BibVirt da USP». Artigo especial sobre a banana.\n[…]\n«Atine50». Bananas e suas variedades.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Cacau",
      "descricao": "Árvore Theobroma cacao, cujas sementes são a matéria-prima do chocolate"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Como na jabuticabeira, as flores e os frutos do cacaueiro nascem num lugar curioso da planta. Onde?",
    "resposta": "Direto no tronco",
    "distratores": [
      "Nas pontas dos galhos",
      "Debaixo da terra",
      "Nas raízes aéreas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cauliflory",
      "https://en.wikipedia.org/wiki/Theobroma_cacao"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cauliflory",
        "situacao": "ok",
        "texto": "Cauliflory is a botanical term referring to plants that flower and fruit from their main stems or woody trunks, rather than from new growth and shoots. It is rare in temperate regions but common in tropical forests."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Theobroma_cacao",
        "situacao": "ok",
        "texto": "Theobroma cacao (cacao tree or cocoa tree) is a small (6–12 m (20–39 ft) tall) evergreen tree in the Malvaceae family. Its seeds—cocoa beans when dried and fermented—are used to make chocolate liquor, cocoa powder, cocoa butter and chocolate. Although the tree is native to the tropics of the Americas, the largest producer of cocoa beans in 2022 was Côte d'Ivoire.\n[…]\nIn 2023, cocoa beans were cultivated on roughly 11,650,000 hectares (28,800,000 acres) worldwide. Cocoa beans are grown by large agroindustrial plantations and small producers, the bulk of production coming from millions of farmers with small plots. A tree begins to bear when it is four or five years old. A mature tree may have 6,000 flowers in a year, yet only about 20 pods. About 1,200 seeds (40 pods) are required to produce 1 kg (2.2 lb) of cocoa paste.\n[…]\nPhytopathogens (parasitic organisms) cause much damage to Theobroma cacao plantations around the world. Many of those phytopathogens, which include many of the pests named below, were analyzed using mass spectrometry and allow for guiding on the correct approaches to get rid of the specific phytopathogens. This method was found to be quick, reproducible, and accurate showing promising results in the future to prevent damage to Theobroma cacao by various phytopathogens.\n[…]\nDemand for this beverage led the French to establish cacao plantations in the Caribbean, while Spain subsequently developed their cacao plantations in their Venezuelan and Philippine colonies (Bloom 1998, Coe 1996). A painting by Dutch Golden Age artist Albert Eckhout shows a wild cacao tree in mid-seventeenth century Dutch Brazil."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caulifloria",
        "situacao": "ok",
        "texto": "Caulifloria é um termo botânico que designa plantas que produzem flores e frutos diretamente em seus caules principais ou troncos lenhosos, em vez de em novos brotos ou ramos. É um fenômeno raro em regiões temperadas, mas comum em florestas tropicais.\n[…]\nUma hipótese frequentemente sugerida para a evolução da caulifloria é permitir que as árvores sejam polinizadas ou tenham suas sementes dispersas por animais, especialmente morcegos, que escalam troncos e ramos robustos para se alimentar do néctar e dos frutos. Algumas espécies podem, em vez disso, produzir frutos que caem do dossel e amadurecem apenas após chegarem ao solo, uma estratégia alternativa chamada frutos caulicárpicos não funcionais.\n[…]\nEm Ficus, não há associação entre a evolução da caulifloria como uma apomorfia e associações ecológicas mutualistas. Hipóteses alternativas focam na competição por açúcares e minerais entre flores e folhas jovens, suporte mecânico para flores e frutos maiores particularmente em Artocarpus e Durio, e na teoria evolutiva baseada na planta como uma metapopulação e taxas diferenciais de mutações em corpos vegetais grandes.\n[…]\nUma versão extrema é a flagelifloria, onde ramos longos e semelhantes a chicotes descem do tronco principal e carregam todas as inflorescências. Esses ramos crescem até o solo e até abaixo dele. Como resultado, as flores da planta ou árvore podem parecer emergir do solo. Exemplos são conhecidos principalmente nas famílias Annonaceae e Moraceae, bem como uma espécie de Desmopsisterriflora, mas também incluem Couroupita guianensis (Lecythidaceae) e o cacto Weberocereus tunilla (Cactaceae).\n[…]\nLista de algumas espécies de plantas caulifloras:\n[…]\nPlinia cauliflora (jabuticaba)\n[…]\nCaulifloria em árvores de florestas tropicais da Malásia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Cacau",
      "descricao": "Árvore Theobroma cacao, cujas sementes são a matéria-prima do chocolate"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O chocolate branco não leva o pó escuro do cacau. Que produto tirado das sementes de cacau ele usa?",
    "resposta": "Manteiga de cacau",
    "distratores": [
      "Polpa do fruto",
      "Casca torrada",
      "Mel de cacau"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/White_chocolate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/White_chocolate",
        "situacao": "ok",
        "texto": "White chocolate is chocolate made from cocoa butter, sugar, and milk solids. It is ivory in color and lacks the dark appearance of most other types of chocolate because it does not contain the non-fat solid components of cocoa (cocoa powder). Due to this omission, as well as its sweetness and the occasional use of additives, some consumers do not consider white chocolate to be real chocolate.\n[…]\nWowsomes contained sugar crystals modified to be hollow, reducing the bar's overall sugar content by almost a third. The chocolate sold poorly and was discontinued after less than two years.\n[…]\nVegan white chocolates substitute rice flour for milk powder. Another variation, blond chocolate, is made by slowly heating white chocolate, triggering Maillard reactions and creating a chocolate with a light caramel flavor. Replacing cocoa butter entirely with vegetable fat produces compound chocolate, sold as 'white chocolate coating', which is more common in the US than Europe. It has a pure white appearance.\n[…]\nWhite chocolate products are often flavored with green tea, particularly matcha, as well as coconut, strawberry, coffee, pistachio and almond.\n[…]\nWhite chocolates made by craft chocolate makers exhibit large differences from mass-produced white chocolates. Some craft chocolate makers substitute other ingredients for those typically used in white chocolate, such as goat milk for dairy milk, and non-deodorized cocoa butter instead of a deodorized product. Others add unusual ingredients, creating white chocolates with flavors including Thai shrimp curry, rosemary and sea salt and vegetables such as kale and broccoli.\n[…]\nAs of 2019, many bean-to-bar chocolate manufacturers in France and Spain produced white chocolate, in addition to the more typical milk and dark types.\n[…]\nBelgian chocolate\n[…]\nList of chocolate bar brands\n[…]\nSwiss chocolate\n[…]\nDemonstration of craft white chocolate production"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chocolate_branco",
        "situacao": "ok",
        "texto": "O chocolate branco é um confeito à base de manteiga de cacau, açúcar, essência de baunilha e outros ingredientes (conforme a receita de cada fabricante).\n[…]\nA origem exata do chocolate branco é contestada por algumas partes, pois existem relatos de que um norte-americano de New Hampshire arriscou-se a fabricar o confeito após ter observado o produto na Europa logo depois da Primeira Guerra Mundial. Por outro lado, a Walter Baker & Company (indústria norte-americana da área alimentícia) publicou uma receita de “tabletes de baunilha” em 1913. Alguns anos depois, esta receita foi rebatizada de “chocolate branco”.\n[…]\nJá a empresa Nestlé afirma ter fabricado as primeiras barras do chocolate em sua fábrica na Europa, na década de 1930.\n[…]\nChocolate ao leite\n[…]\nChocolate amargo\n[…]\nChocolate meio-amargo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Cafeeiro",
      "descricao": "Planta do gênero Coffea, cujas sementes torradas dão o café"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Por causa da cor vermelha quando maduro, o fruto do cafeeiro recebe que nome entre os produtores?",
    "resposta": "Cereja",
    "distratores": [
      "Pitanga",
      "Groselha",
      "Amora"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coffee_bean"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coffee_bean",
        "situacao": "ok",
        "texto": "A coffee bean is a seed from the Coffea plant and the source for coffee. This fruit is often referred to as a coffee cherry, but unlike the cherry, which usually contains a single pit, it most commonly contains two seeds with their flat sides together. The seeds are referred to as beans because of their appearance, though they are not true beans. A few coffee cherries, referred to as  \"peaberries\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caf%C3%A9_%28semente%29",
        "situacao": "ok",
        "texto": "Café é a fruta do cafeeiro (Coffea sp.). A semente é uma pequena esfera verde, que quando atinge o estado maduro para a colheita tem um vermelho intenso. Cada fruto costuma possuir duas pequenas sementes semi-esféricas com seus lados planos virados para si. O café é constituído majoritariamente de endosperma que contém altas quantidades da substância cafeína ( 0.8 - 2.5% ), nomeada a partir da sem\n[…]\nA semente possuiu grande importância comercial, como é usada para produzir o café (bebida) e é um produto de exportação significativo para muitos países.\n[…]\nA semente tem origem arábica e não foi utilizada para produzir bebidas amplamente até o século X, quando a bebida passou a se disseminar pelo Oriente Médio. A Europa não teve contato com a bebida em larga escala até o século XVII através do comércio no Mediterrâneo, com as cidades de Veneza e Marseille em destaque. No século XVIII cafeterias se disseminaram na Europa e o fruto ficou muito conhecido, com o café assumindo papel social.\n[…]\nCom a evolução do valor da semente, o café foi levado a diversos continentes, incluindo o Brasil no século XVIII (ver: Ciclo do café, Francisco de Melo Palheta e Produção de café no Brasil).\n[…]\nO Café é originalmente uma ferramenta de defesa contra predadores, pois seu gosto forte evita que a planta seja comida.\n[…]\nPara transformar o fruto do cafeeiro na commodity café (bebida), a semente tem a polpa removida e seca. Esse processo pode influenciar no aroma e sabor do café.\n[…]\nCafé\n[…]\nCafé (estabelecimento)\n[…]\nCafeeiro\n[…]\nChá de folha de café\n[…]\nSubstitutos do café",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Cafeeiro",
      "descricao": "Planta do gênero Coffea, cujas sementes torradas dão o café"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes tipos de café tem grãos com o maior teor de cafeína?",
    "resposta": "Robusta (conilon)",
    "distratores": [
      "Arábica",
      "Libérica",
      "Bourbon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coffea_canephora"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coffea_canephora",
        "situacao": "ok",
        "texto": "Coffea canephora (especially C. canephora subvar. robusta, syn. Coffea robusta, or commonly robusta coffee) is a species of coffee plant that has its origins in central and western sub-Saharan Africa. It is a species of flowering plant in the family Rubiaceae. Though widely known as Coffea robusta, the plant is scientifically identified as Coffea canephora, which has two main varieties, robusta an\n[…]\nIt is mostly grown in Vietnam, where French colonists introduced it in the late 19th century, though it is also grown in India, Africa, and in Brazil, where the conilon variety is widely grown. In recent years, Vietnam, which produces mostly robusta, has become the world's largest exporter of robusta coffee, accounting for over 40% of the total production. It surpasses Brazil (25% of the world's production), Indonesia (13%), India (5%), and Uganda (5%).\n[…]\nSince Robusta is easier to care for and has a greater crop yield than C. arabica, it is cheaper to produce. Roasted robusta beans produce a strong, full-bodied coffee with a distinctive earthy flavour, but usually with more bitterness than arabica due to its pyrazine content. Since arabica beans are presumed to have smoother taste with more acidity and a richer flavour, they are often considered superior, while the harsher robusta beans are mostly used as a filler in lower-grade coffee blends.\n[…]\nHowever, the powerful flavour can be desirable in a blend to give it perceived \"strength\" and \"finish\", notably in Italian coffee culture. Good-quality robusta beans are used in traditional Italian espresso blends to provide a full-bodied taste and a better foam head (known as crema).\n[…]\nComparison Chart of Robusta to Arabica (archived 24 March 2009)\n[…]\nRobusta Coffee in Vietnam\n[…]\nThe Difference Between Arabica and Robusta?"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coffea_canephora",
        "situacao": "ok",
        "texto": "Coffea canephora (Café Robusta; sin. Coffea robusta) é uma espécie de café originária da África Ocidental. É cultivado principalmente na África e no Brasil onde é chamado às vezes de Conillon que é corruptela da palavra Kouiliou. É também cultivado no Sudeste asiático onde os colonizadores franceses o introduziram no final do séc. XIX. Nos últimos anos o Vietname, que produz apenas robusta, ultrap\n[…]\nAproximadamente um terço do café produzido no mundo é robusta.\n[…]\nO Coffea canephora é de plantio fácil, quando comparado com outra das principais espécies de café, o Coffea arabica, e, por conseguinte, é mais barato de se produzir. Como os grãos de arabica são considerados superiores, o robusta fica normalmente limitado a tipos de café de escalão inferior como complemento. É no entanto incluído nos cafés instantâneo e expresso de forma a tornar o café cremoso. O robusta contém duas vezes mais cafeína do que o arabica.\n[…]\nO coffea canephora é autóctone da África central e ocidental. Não foi reconhecido como uma espécie de cafeeiro até o séc. XVIII, cerca de cem anos depois do reconhecimento da coffea arabica. A planta tem um sistema de raízes pouco profundo e cresce como uma árvore ou um arbusto robusto até cerca de 10 metros. Floresce irregularmente, demorando os bagos 10 a 11 meses a amadurecer, produzindo grãos ovais.\n[…]\nA planta robusta rende maior colheita do que a arabica e é menos susceptível a pestes e doenças.\n[…]\nUma vez torrado, o café robusta tende a apresentar um distinto paladar terroso/queimado, normalmente mais amargo do que o café arabica. Este gosto pode ser desejável num café para dar \"corpo\" e \"final\", notável na cultura de café italiana.\n[…]\nEm 2020, o Espírito Santo era o maior produtor de café conillon do Brasil, com participação de 66,3% do total (564,5 mil toneladas, ou 9,4 milhões de sacas de 60 kg).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Mandioca",
      "descricao": "Raiz da planta Manihot esculenta, base alimentar indígena e ingrediente central da cozinha brasileira"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que ingrediente, extraído da mandioca, é a base da massa do pão de queijo mineiro?",
    "resposta": "Polvilho",
    "distratores": [
      "Fubá",
      "Maisena",
      "Farinha de trigo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Polvilho",
      "https://pt.wikipedia.org/wiki/P%C3%A3o_de_queijo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Polvilho",
        "situacao": "ok",
        "texto": "O polvilho, também chamado de fécula de mandioca, carimã ou goma, é o amido da mandioca.\n[…]\nO polvilho azedo é um tipo modificado por processo de fermentação e secagem solar, apresentando características bem diversas do polvilho doce. É utilizado para diversos fins culinários, como o preparo da massa para o pão-de-queijo, bolinho típico de Minas Gerais, de Goiás, de São Paulo, do Paraná, do Mato Grosso do Sul e outras regiões, e para a pamonha de carimã. Principal produtora é a cidade de Conceição dos Ouros, sul de Minas Gerais.\n[…]\nExtração artesanal de polvilho de mandioca"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%A3o_de_queijo",
        "situacao": "ok",
        "texto": "Pão de queijo é uma iguaria oriunda de Minas Gerais, muito difundida em todo o Brasil. Embora não haja registro de local e época exata de sua criação, há consenso de que tenha se originado em Minas Gerais em meados do Século XVIII.\n[…]\nO pão de queijo, assim denominado, surgiu em Minas Gerais por volta do ano de 1750. Nesta época a agropecuária do estado começou a se especializar na produção de leite e de seus derivados. Por sua distância geográfica da costa, o estado de Minas Gerais consumia pouca farinha, que era importada,[carece de fontes]? mas tinha ampla produção de mandioca, raiz nativa do continente e matéria-prima do polvilho.\n[…]\nHá várias receitas diferentes, onde os ingredientes e o tipo do queijo variam muito - bem como o resultado final. Algumas usam polvilho doce, outras o azedo, ou mesmo ambos. Mas o que dá a sua principal característica é o fato de ser feito à base de polvilho de mandioca e algum tipo de queijo.\n[…]\nExiste também o pão de queijo escaldado, técnica de preparo que exige utilizar água fervente, às vezes misturada com óleo vegetal no polvilho. O pão de queijo escaldado tem um sabor mais próximo do natural, já que no processo de escaldamento a massa fica pré cozida.\n[…]\nAssim como o pão de queijo, o pandebono possui textura esponjosa, de baixa densidade, e que endurece em pouco tempo, características que se atribuem ao polvilho azedo, conhecido no país como almidón de yuca fermentado e que é obtido em um processo idêntico ao empregado no Brasil. No Equador, existe o \"pandeyuca [es]\", que se assemelha ao pão de queijo brasileiro, na textura, formato e sabor. Já na Bolívia se consome o cuñapé [es].\n[…]\n«Pão de queijo»\n[…]\n«Pão de queijo em Portugal»"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Milho",
      "descricao": "Gramínea alta Zea mays, domesticada no México, cultivada pelos grãos."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O milho descende do teosinto, um capim selvagem bem diferente dele, domesticado há cerca de nove mil anos em que país atual?",
    "resposta": "México",
    "distratores": [
      "Peru",
      "Guatemala",
      "Colômbia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maize",
      "https://en.wikipedia.org/wiki/Teosinte"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maize",
        "situacao": "ok",
        "texto": "Maize (US: ; Zea mays), also known as corn, is a tall stout grass that produces cereal grain. The leafy stalk of the plant gives rise to male inflorescences or tassels which produce pollen, and female inflorescences called ears. The ears yield grain, known as kernels or seeds. In modern commercial varieties, these are usually yellow or white; other varieties can be of many colors. Maize was domest\n[…]\nMaize is the domesticated variant of the four species of teosintes, which are its crop wild relatives. Teosinte was likely used by hunter-gatherers because it added security to their food supply, being that it was adaptable to changes in climate and environment.\n[…]\nIn 2004, John Doebley identified Balsas teosinte, Zea mays subsp. parviglumis, native to the Balsas River valley in Mexico's southwestern highlands, as the crop wild relative genetically most similar to modern maize. The middle part of the short Balsas River valley is the likely location of early domestication. Stone milling tools with maize residue have been found in an 8,700 year old layer of deposits in a cave not far from Iguala, Guerrero.\n[…]\nMaize requires human intervention for its propagation. The kernels of its naturally-propagating teosinte ancestor fall off the cob on their own, while those of domesticated maize do not. All maize arose from a single domestication in southern Mexico about 9,000 years ago. The oldest surviving maize types are those of the Mexican highlands. Maize spread from this region to the lowlands and over the Americas along two major paths.\n[…]\nThe centre of domestication was most likely the Balsas River valley of south-central Mexico. Maize reached highland Ecuador at least 8000 years ago. It reached lower Central America by 7,600 years ago, and the valleys of the Colombian Andes between 7,000 and 6,000 years ago."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Teosinte",
        "situacao": "ok",
        "texto": "Zea is a genus of flowering plants in the grass family. The best-known species is Z. mays (variously called maize, corn, or Indian corn), one of the most important crops for human societies throughout much of the world. The four wild species are commonly known as teosintes and are native to Mesoamerica.\n[…]\nMaize (Zea mays) is further divided into four subspecies: Z. m. huehuetenangensis, Z. m. mexicana, Z. m. parviglumis (Balsas teosinte, the ancestor of maize), and Z. m. mays. The first three subspecies are teosintes; the last is maize, or corn, the only domesticated taxon in the genus Zea.\n[…]\nTeosintes are critical components of maize domestication, but opinions vary about which taxa were involved. According to the most widely held evolutionary model, the crop was derived directly from Z. m. parviglumis by selection of key mutations; but in some varieties up to 20% of its genetic material came from Z. m. mexicana through introgression.\n[…]\nIn some areas of Mexico, teosintes are regarded by maize farmers as a noxious weed, while in a few areas, farmers regard it as a beneficial companion plant, and encourage its introgression into their maize.\n[…]\nAccording to these authors, \"The maize of the Andes Mountains with its distinctive hand grenade-shaped ears was derived from the maize of lowland South America, which in turn came from maize of the lowlands of Guatemala and southern Mexico.\"\n[…]\nGene flow from genetically modified maize to teosinte weeds has only been observed to produce a GM teosinte with the same trait but this may not always be the outcome. Teosinte with a different insertion of the transgene may result and functionally different outcomes may be produced."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Milho",
        "situacao": "ok",
        "texto": "O milho (Zea mays), também conhecido como milho-maís, maís, ou abati, é um cereal cultivado em grande parte do mundo e extensivamente utilizado como alimento humano ou para ração animal devido às suas qualidades nutricionais. Todas as evidências científicas levam a crer que seja uma planta de origem mexicana, já que a sua domesticação começou de 7 500 a 12 000 anos atrás na área central do México.\n[…]\nSegundo Mary Poll, em trabalho publicado na revista Proceedings of the National Academy of Sciences, os primeiros registros do cultivo do milho datam de há 7 300 anos, tendo sido encontrados em pequenas ilhas próximas ao litoral do México, no Golfo do México. Vestígios arqueológicos de milho encontrados na caverna Guila Naquitz no Vale de Oaxaca datam de há cerca de 6 250 anos e os mais antigos restos em cavernas de Tehuacán são de há cerca de 5 450 anos.\n[…]\nNos Estados Unidos, o uso do milho na alimentação humana direta é relativamente pequeno - embora haja grande produção de cereais matinais, como corn flakes, e xarope de milho, utilizado como adoçante. No México o seu uso é muito importante, sendo a base da alimentação da população (é o ingrediente principal das tortilhas, e outros pratos da culinária mexicana).\n[…]\nDe acordo com um estudo genético, verificou-se que o cultivo do milho foi introduzido na América do Sul a partir do México, em duas grandes ondas: a primeira, há 5 000 anos, difundida através dos Andes; a segunda, há 2 000 anos, através das terras baixas da América do Sul.\n[…]\nNo México, o milho transgênico também enfrenta séria oposição governamental: em 1998, foi proibida a experimentação, o cultivo e a importação de milho transgênico.\n[…]\n«EMBRAPA Milho e Sorgo (página oficial)»\n[…]\n«Página do Greenpeace sobre denúncia de plantio de milho transgênico no México»\n[…]\n«Página sobre milho da Singenta Portugal, sobre cultivo de milho no país»\n[…]\n«Página sobre aspectos agronômicos do Milho»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Milho",
      "descricao": "Gramínea alta Zea mays, domesticada no México, cultivada pelos grãos."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Cada fio do cabelo do milho sai de uma flor feminina da espiga. Depois de polinizado, cada fio dá origem a quê?",
    "resposta": "Um grão",
    "distratores": [
      "Uma espiga",
      "Uma folha",
      "Uma palha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maize"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maize",
        "situacao": "ok",
        "texto": "Maize (US: ; Zea mays), also known as corn, is a tall stout grass that produces cereal grain. The leafy stalk of the plant gives rise to male inflorescences or tassels which produce pollen, and female inflorescences called ears. The ears yield grain, known as kernels or seeds. In modern commercial varieties, these are usually yellow or white; other varieties can be of many colors. Maize was domest\n[…]\nIn 2004, John Doebley identified Balsas teosinte, Zea mays subsp. parviglumis, native to the Balsas River valley in Mexico's southwestern highlands, as the crop wild relative genetically most similar to modern maize. The middle part of the short Balsas River valley is the likely location of early domestication. Stone milling tools with maize residue have been found in an 8,700 year old layer of deposits in a cave not far from Iguala, Guerrero.\n[…]\nThe name maize derives from the Spanish form maíz of the Taíno mahis. The Swedish botanist Carl Linnaeus used the common name maize as the species epithet in Zea mays. The name maize is preferred in formal, scientific, and international usage as a common name because it refers specifically to this one grain, unlike corn, which has a complex variety of meanings that vary by context and geographic region. Most countries primarily use the term maize, and the name corn is used mainly in the U.S.\n[…]\n\"Zea mays\". Germplasm Resources Information Network. Agricultural Research Service, United States Department of Agriculture."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Milho",
        "situacao": "ok",
        "texto": "O milho (Zea mays), também conhecido como milho-maís, maís, ou abati, é um cereal cultivado em grande parte do mundo e extensivamente utilizado como alimento humano ou para ração animal devido às suas qualidades nutricionais. Todas as evidências científicas levam a crer que seja uma planta de origem mexicana, já que a sua domesticação começou de 7 500 a 12 000 anos atrás na área central do México.\n[…]\nNo ponto de vista da biologia, o cabelo do milho existe para a planta se reproduzir. Ou seja, eles servem para transportar os grãos de pólen que vão fecundar os óvulos da espiga, dando origem aos grãos de milho, que são os frutos do vegetal.\n[…]\nO substantivo «milho» foi dado no Velho Mundo pelos portugueses a um conjunto de plantas pertencentes à mesma família de espécies produtoras de grão que depois de farinado era utilizado no fabrico do pão e da broa.\n[…]\nPelo fato do milho ser um dos alimentos mais difundidos entre os ameríndios, estes criaram várias lendas para explicar a inclusão deste grão nas suas dietas.\n[…]\nOs Wampanoag da Nova Inglaterra, nordeste dos Estados Unidos, cultivavam uma grande variedade de milhos, o branco, o negro, o amarelo, o vermelho, o azul, o bege, o esverdeado, e outros. Utilizavam todas as partes da espiga do milho; o grão era comido; da palha faziam esteiras, cestos e bonecas; o sabugo era usado como combustível, como dardo para jogos e como chocalho em cerimônias.\n[…]\nCom seu grão, torrado e moído, prepara-se uma bebida quente substituta do café. O \"café de milho\" é livre de glúten e cafeína.\n[…]\nMilho utilizado como silagem é colhido enquanto a planta está verde, e o fruto imaturo. De outro modo, o milho é deixado no campo até o outono, de modo a secar. Às vezes, não é colhido até o inverno, ou até o início da primavera. Em outras regiões e circunstâncias, são utilizados agrotóxicos para secar o milho mais rápido, e aproveitar altas no preço do grão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Abacaxi",
      "descricao": "Fruta tropical da planta Ananas comosus, nativa da América do Sul"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O pé de abacaxi leva mais de um ano para frutificar. Cada caule da planta forma quantos abacaxis por vez?",
    "resposta": "Um só",
    "distratores": [
      "Dois",
      "Cerca de seis",
      "Cerca de doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pineapple"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pineapple",
        "situacao": "ok",
        "texto": "The pineapple (Ananas comosus) is a tropical plant with an edible fruit; it is the most economically significant plant in the family Bromeliaceae.\n[…]\nIn the US, in 1986, the Pineapple Research Institute was dissolved and its assets divided between Del Monte and Maui Land and Pineapple. Del Monte took cultivar '73–114', dubbed 'MD-2', to its plantations in Costa Rica, found it to be well-suited to growing there, and launched it publicly in 1996 as 'Gold Extra Sweet', while Del Monte also began marketing '73–50', dubbed 'CO-2', as 'Del Monte Gold'. The Maui Pineapple Company began growing variety 73-50 in 1988 and named it Maui Gold.\n[…]\nLike most modern fruit production, pineapple plantations are highly industrialized operations. In Costa Rica particularly, the pineapple industry uses large amounts of insecticides to protect the crop, which have caused health problems in many workers. These workers often receive little compensation, and are mostly poor migrants, often Nicaraguan. Workers' wages also decrease every time prices are lowered overseas.\n[…]\nAs those are protected areas and not national parks, limited and restricted sustainable activities are allowed, however pineapple plantations are industrial operations and many of these do not have the proper license to operate in the protected areas, or were started before either the designation of the area, recent regulations or the creation of the environmental regulatory agency (Setena) in 1996.\n[…]\nThe agency has registers for around 358.5 ha (1.384 sq mi) of pineapple plantations operating within protected areas, but satellite imagery from 2018 reports around 1,659 ha (6.41 sq mi)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anan%C3%A1s",
        "situacao": "ok",
        "texto": "Ananás (português europeu) ou abacaxi (português brasileiro) (Ananas comosus) é uma infrutescência tropical produzida pela planta de mesmo nome, caracterizada como uma planta monocotiledônea da família das bromeliáceas da subfamília Bromelioideae. É um símbolo das regiões tropicais e subtropicais. Os abacaxizeiros cultivados pertencem à espécie Ananas comosus, que compreende muitas variedades frut\n[…]\nA casca do abacaxi é formada pela reunião das brácteas e sépalas das flores. Logo abaixo da casca, inseridos na periferia de depressões em forma de taça, podem ser encontrados restos de pétalas e de estames, enquanto de cada uma dessas depressões aparece um vestígio de estilete. Na superfície de um fruto descascado de um modo pouco profundo, os restos de estiletes dão ideia de espinhos.\n[…]\nO abacaxizeiro é uma planta muito sensível ao frio, mas resiste bem às secas. Embora seja planta tropical, nos dias de sol muito intenso, os frutos podem sofrer queimaduras, quando não são protegidos. Pode ser cultivado em qualquer tipo de solo, desde que seja permeável, isto é, não sujeito ao encharcamento; prefere, porém, solos leves, ricos em elementos nutritivos e com pH entre 4,5 e 5,5, ainda que tolere aqueles de pH mais baixo. É bastante exigente em nutrientes.\n[…]\nModernamente, o plantio é feito pelo sistema de linhas duplas e na base de 45 a 60 mil plantas por hectare.\n[…]\nQuanto a doenças, a mais grave e de de ocorrência generalizada é a fusariose ou gomose, causada pelo fungo Fusarium subglutinans\" f. sp. \"ananas e que pode provocar grandes prejuízos. Entre outras doenças importantes citam-se a murcha, causado pelo vírus PMWaV (Pineapple Mealybug Wilt-associated Virus) e a podridão-do-olho, causado pelo fungo Phytophthora nicotianae var. parasitica.\n[…]\nO ananás-de-agulha, ananás-de-cerca e ananás-de-raposa são outras variedades também encontradas no Brasil.\n[…]\nOutros tipos de abacaxis",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Girassol",
      "descricao": "Planta Helianthus annuus, de grandes inflorescências amarelas e sementes comestíveis"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O que parece ser uma única grande flor amarela no girassol é, na verdade, formado por quê?",
    "resposta": "Centenas de florzinhas",
    "distratores": [
      "Uma flor gigante",
      "Folhas coloridas",
      "Sementes com pétalas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Helianthus_annuus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Helianthus_annuus",
        "situacao": "ok",
        "texto": "The common sunflower (Helianthus annuus) is a large annual forb in the daisy family Asteraceae. The most common varieties have large yellow orange flowers heads, that are a tall stem. The flowers produce seeds in a floret, that follows the fibonacci sequence. The domesticated form of common sunflower is harvested for its edible seeds, which come in two types: oil and confectionery seeds.\n[…]\nThe genus name Helianthus comes from Ancient Greek ἥλιος (hḗlios), meaning \"sun\", and ἄνθος (ánthos), meaning \"flower\". The species name annuus means \"yearly\" in Latin.\n[…]\nThe Russian Empire reintroduced this oilseed cultivation process to North America in the mid-20th century; North America began their commercial era of sunflower production and breeding. New breeds of the Helianthus spp. began to become more prominent in new geographical areas.\n[…]\nHybrid, Helianthus annuus dwarf2 does not contain the hormone gibberellin and does not display heliotropic behavior. Plants treated with an external application of the hormone display a temporary restoration of elongation growth patterns. This growth pattern diminished by 35% 7–14 days after final treatment.\n[…]\nHelianthus annuus can be used in phytoremediation to extract pollutants from soil such as lead and other heavy metals, such as cadmium, zinc, cesium, strontium, and uranium. The phytoremediation process begins by absorbing the heavy metal(s) through the roots, which gradually accumulate in other areas, such as the shoots and leaves.\n[…]\nHelianthus annuus can also be used in rhizofiltration to neutralize radionuclides, such as caesium-137 and strontium-90, from contaminated water, as was done in the case of a pond after the Chernobyl disaster. A similar campaign was mounted in response to the Fukushima Daiichi nuclear disaster."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Girassol",
        "situacao": "ok",
        "texto": "O girassol (Helianthus annuus) é uma planta anual da família das Asteraceae, gênero Heliantheae. Está situado na tribo Heliantheae, subtribo Helianthinae. É cultivada pelo seu óleo e frutos comestíveis. O nome é derivado do formato de sua inflorescência.\n[…]\nÉ caracterizada por possuir grandes inflorescências do tipo capítulo — com aproximadamente 30 cm de diâmetro — cujo caule pode atingir até 3 metros de altura e apresenta filotaxia do tipo oposta cruzada. O girassol mais alto já registrado chegou a 9.17 metros.\n[…]\nA sua flor é comercializada como flor de corte. Existem dois grupos de variedades importantes: uniflor com haste única e uma flor terminal; multiflor com flores menores que com ramos desde a base que são mais utilizadas na confecção de bouquet.\n[…]\nA semente do girassol tem sido utilizada no Brasil na produção de biodiesel.\n[…]\nUm equívoco comum é que a inflorescência do Girassol se viraria para ficar de frente para o sol a medida que ele atravessa o céu. Apesar desse comportamento estar presente na planta jovem, antes da presença da inflorescência, a planta madura tem sua direção fixa ao longo do dia.\n[…]\nEsse velho equívoco foi contestado em 1557 pelo botanista inglês John Gerard, que cultivava girassóis em seu herbário: \"[alguns] disputaram que eles giram junto do sol, o que nunca observei, apesar de meu empenho em provar a verdade disso.\"\n[…]\nO girassol é a flor nacional da Ucrânia.\n[…]\nA flor foi usada como símbolo do Esteticismo, que foi movimento artístico no século XIX.\n[…]\nGirassóis foram tema na série de pinturas de Van Gogh, da qual Doze Girassóis numa Jarra faz parte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Girassol",
      "descricao": "Planta Helianthus annuus, de grandes inflorescências amarelas e sementes comestíveis"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "As sementes no miolo do girassol formam espirais cujas quantidades seguem que famosa sequência da matemática?",
    "resposta": "Sequência de Fibonacci",
    "distratores": [
      "Números primos",
      "Potências de dois",
      "Números triangulares"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fibonacci_sequence",
      "https://en.wikipedia.org/wiki/Helianthus_annuus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fibonacci_sequence",
        "situacao": "ok",
        "texto": "In mathematics, the Fibonacci sequence is a sequence in which each element is the sum of the two elements that precede it. Numbers that are part of the Fibonacci sequence are known as Fibonacci numbers, commonly denoted Fn . The initial elements of the sequence are F1 = 1 and F2 = 1, though many authors also include a zeroth element F0 = 0. Starting from F0, the sequence begins\n[…]\nFibonacci coding\n[…]\nThe measured values of voltages and currents in the infinite resistor chain circuit (also called the resistor ladder or infinite series-parallel circuit) follow the Fibonacci sequence. The intermediate results of adding the alternating series and parallel resistances yields fractions composed of consecutive Fibonacci numbers. The equivalent resistance of the entire circuit equals the golden ratio.\n[…]\nBrasch et al. 2012 show how a generalized Fibonacci sequence also can be connected to the field of economics. In particular, it is shown how a generalized Fibonacci sequence enters the control function of finite-horizon dynamic optimisation problems with one state and one control variable. The procedure is illustrated in an example often referred to as the Brock–Mirman economic growth model.\n[…]\nMario Merz included the Fibonacci sequence in some of his artworks beginning in 1970.\n[…]\nFibonacci numbers in popular culture\n[…]\nFibonacci word – Binary sequence from Fibonacci recurrence\n[…]\nRandom Fibonacci sequence – Randomized mathematical sequence based upon the Fibonacci sequence\n[…]\nWythoff array – Infinite matrix of integers derived from the Fibonacci sequence\n[…]\nFibonacci Sequence and Golden Ratio: Mathematics in the Modern World - Mathuklasan with Sir Ram on YouTube - animation of sequence, spiral, golden ratio, rabbit pair growth. Examples in art, music, architecture, nature, and astronomy\n[…]\nPeriods of Fibonacci Sequences Mod m at MathPages\n[…]\nFibonacci Sequence on In Our Time at the BBC"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Helianthus_annuus",
        "situacao": "ok",
        "texto": "The common sunflower (Helianthus annuus) is a large annual forb in the daisy family Asteraceae. The most common varieties have large yellow orange flowers heads, that are a tall stem. The flowers produce seeds in a floret, that follows the fibonacci sequence. The domesticated form of common sunflower is harvested for its edible seeds, which come in two types: oil and confectionery seeds.\n[…]\nGenerally, each floret is oriented toward the next by approximately the golden angle, 137.5°, producing a pattern of interconnecting spirals, where the number of left spirals and the number of right spirals are successive Fibonacci numbers. Typically, there are 34 spirals in one direction and 55 in the other; however, in a very large sunflower head there could be 89 in one direction and 144 in the other.\n[…]\nwhere θ is the angle, r is the radius or distance from the center, and n is the index number of the floret and c is a constant scaling factor. It is a form of Fermat's spiral. The angle 137.5° is related to the golden ratio (55/144 of a circular angle, where 55 and 144 are Fibonacci numbers) and gives a close packing of florets. This model has been used to produce computer generated representations of sunflowers.\n[…]\nHelianthus annuus can be used in phytoremediation to extract pollutants from soil such as lead and other heavy metals, such as cadmium, zinc, cesium, strontium, and uranium. The phytoremediation process begins by absorbing the heavy metal(s) through the roots, which gradually accumulate in other areas, such as the shoots and leaves.\n[…]\nHelianthus annuus can also be used in rhizofiltration to neutralize radionuclides, such as caesium-137 and strontium-90, from contaminated water, as was done in the case of a pond after the Chernobyl disaster. A similar campaign was mounted in response to the Fukushima Daiichi nuclear disaster."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci",
        "situacao": "ok",
        "texto": "Na matemática, a sucessão de Fibonacci (ou sequência de Fibonacci), é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual cada termo subsequente  corresponde à soma dos dois anteriores. A sequência recebeu o nome do matemático italiano Leonardo de Pisa ou Leonardo Fibonacci, mais conhecido por apenas Fibonacci, que descreveu, no ano de 1202, o crescimento de uma população d\n[…]\nNa espiral do nautilus, por exemplo, pode ser facilmente percebida a sequência de Fibonacci. A composição de quadrados com lados de medidas proporcionais aos números da sequência mostram a existência desta sucessão numérica nesta peça natural.\n[…]\nA seqüência de Fibonacci descreve perfeitamente a reprodução das abelhas. Recentemente, uma análise matemática-histórica do contexto e da proximidade com a cidade de \"Bugia\" (que é derivado da versão francesa do nome desta cidade, ou seja\n[…]\nO filme Pi de Darren Aronofsky apresenta várias referências à sequência de Fibonacci. Seu protagonista é Maximillian \"Max\" Cohen (Sean Gullette), um matemático brilhante e atormentado que tenta decodificar o padrão numérico do mercado de ações.\n[…]\nEm uma cena, Max desenha quadrados com arestas de medidas proporcionais aos elementos da sequência de Fibonacci e os sobrepõe ao desenho do Homem Vitruviano de Leonardo da Vinci, trazendo-lhe certezas às suas convicções de que a matemática é a linguagem da natureza. Em outra cena, Max apanha uma concha em uma praia e observa a espiral nela descrita.\n[…]\nEm outro trecho do filme, Max encontra o judeu Lenny Meyer, que lhe fala da crença em que a Torah seria uma sequência de números que formam um código enviado por Deus, quando entendidas as correspondências entre as letras do alfabeto hebraico a números. Max diz que alguns dos conceitos apresentados por Lenny são similares a uma sequência de Fibonacci.\n[…]\numa sequência\n[…]\n«O número de ouro e a sequência de Fibonacci». UFF",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Castanheira-do-pará",
      "descricao": "Árvore amazônica Bertholletia excelsa, que produz a castanha-do-pará dentro de um ouriço duro"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Castanheiras-do-pará plantadas longe da floresta produzem poucas castanhas. Isso acontece porque suas flores dependem de quais polinizadores?",
    "resposta": "Abelhas grandes da mata",
    "distratores": [
      "Morcegos",
      "Beija-flores",
      "Mariposas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_nut"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_nut",
        "situacao": "ok",
        "texto": "Brazil nut (Bertholletia excelsa) refers to a South American tree of the monotypic genus Bertholletia in the family Lecythidaceae as well as the tree's commercially-harvested edible seeds. It is one of the largest and longest-lived trees in the Amazon rainforest. The fruit and its nutshell – containing the edible nut – are relatively large and weigh as much as 2 kg (4.4 lb) in total. As food, Braz\n[…]\nIn Portuguese-speaking countries, like Brazil, they are variously called \"castanha-do-brasil\" (meaning \"chestnut from Brazil\" in Portuguese), \"castanha-do-pará\" (meaning \"chestnut from Pará\" in Portuguese), castanha-da-amazônia, castanha-do-acre, \"noz amazônica\" (meaning \"Amazonian nut\" in Portuguese), noz boliviana, tocari (probably of Carib origin), and tururi (from Tupi turu'ri).\n[…]\nIn various Spanish-speaking countries of South America, Brazil nuts are called castañas de Brasil, nuez de Brasil, or castañas de Pará (or Para), and also nuez amazónica or castaña amazónica (\"Amazon nut\").\n[…]\nSince most of the production for international trade is harvested in the wild, the business arrangement has been advanced as a model for generating income from a tropical forest without destroying it. The nuts are most often gathered by migrant workers known as castañeros (in Spanish) or castanheiros (in Portuguese). Logging is a significant threat to the sustainability of the Brazil nut–harvesting industry.\n[…]\nBrazil nuts are a particularly rich source of selenium, with just 28 g (0.99 oz) – a standard serving of around 6 to 8 nuts, depending on size – has an average of 544 micrograms of selenium or 10 times the DV of 55 micrograms (nutrition table). However, the amount of selenium within batches of nuts may vary considerably."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bertholletia_excelsa",
        "situacao": "ok",
        "texto": "Bertholletia excelsa ou castanheira é uma árvore de grande porte da família Lecitidácea, originária da floresta de terra firme, muito abundante na Amazônia, cujo fruto contém a castanha, do qual se extrai o núcleo de sua semente para o consumo. A primeira menção registrada remonta a 1596, realizada por Juan Álvarez Maldonado, nas matas do território que hoje corresponde ao Peru.\n[…]\nAté então, a planta, o fruto e a semente eram conhecidas universalmente no Brasil somente como castanha ou \"castanha-mansa\".\n[…]\nAs flores amarelas da Bertholletia excelsa só podem ser polinizadas por um inseto suficientemente forte para levantar o \"capuz\" da flor e que tenha uma língua comprida o bastante para passar pela complexa espiral da flor, como é o caso das abelhas dos gêneros Bombus, Centris, Epicharis, Eulaema e Xylocopa.\n[…]\nAs orquídeas produzem um odor que atrai pequenas abelhas-da-orquídea (espécie Euglossa), de língua muito comprida, já que as abelhas-macho desta espécie precisam deste odor para atrair as fêmeas. A grande abelha-da-orquídea fêmea poliniza a Bertholletia excelsa. Sem a orquídea, as abelhas não cruzariam, e portanto a falta de abelhas significa que o fruto não é polinizado.\n[…]\nSe tanto as orquídeas como as abelhas estiverem presentes, o fruto leva 14 meses para amadurecer após a polinização das flores. O fruto em si é uma grande cápsula de 10 centímetros a 15 centímetros de diâmetro que se assemelha ao endocarpo do côco no tamanho e pesa até dois quilogramas.\n[…]\nA cápsula contém um pequeno buraco em uma das pontas, que permite a grandes roedores como a cutia e, com menos frequência, os esquilos, roerem até abrir a cápsula. Eles comem, então, algumas das castanhas que encontram ali dentro e enterram as outras para uso posterior; algumas destas que foram enterradas acabam por germinar e produzem novas Bertholletia excelsa.\n[…]\nIUCN Red List: Bertholletia excelsa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Castanheira-do-pará",
      "descricao": "Árvore amazônica Bertholletia excelsa, que produz a castanha-do-pará dentro de um ouriço duro"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "A castanha-do-pará concentra tanto de um mineral que se recomenda comer só poucas por dia. Que mineral é esse?",
    "resposta": "Selênio",
    "distratores": [
      "Ferro",
      "Zinco",
      "Magnésio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_nut"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_nut",
        "situacao": "ok",
        "texto": "Brazil nut (Bertholletia excelsa) refers to a South American tree of the monotypic genus Bertholletia in the family Lecythidaceae as well as the tree's commercially-harvested edible seeds. It is one of the largest and longest-lived trees in the Amazon rainforest. The fruit and its nutshell – containing the edible nut – are relatively large and weigh as much as 2 kg (4.4 lb) in total. As food, Braz\n[…]\nIn Portuguese-speaking countries, like Brazil, they are variously called \"castanha-do-brasil\" (meaning \"chestnut from Brazil\" in Portuguese), \"castanha-do-pará\" (meaning \"chestnut from Pará\" in Portuguese), castanha-da-amazônia, castanha-do-acre, \"noz amazônica\" (meaning \"Amazonian nut\" in Portuguese), noz boliviana, tocari (probably of Carib origin), and tururi (from Tupi turu'ri).\n[…]\nIn various Spanish-speaking countries of South America, Brazil nuts are called castañas de Brasil, nuez de Brasil, or castañas de Pará (or Para), and also nuez amazónica or castaña amazónica (\"Amazon nut\").\n[…]\nAccording to Oak Ridge Associated Universities, elevated levels of radium in the soil do not directly cause the concentration of radium, but \"the very extensive root system of the tree\" can concentrate naturally occurring radioactive material, when present in the soil. Radium can be concentrated in nuts only if it is present in the soil.\n[…]\nBrazil nuts are a particularly rich source of selenium, with just 28 g (0.99 oz) – a standard serving of around 6 to 8 nuts, depending on size – has an average of 544 micrograms of selenium or 10 times the DV of 55 micrograms (nutrition table). However, the amount of selenium within batches of nuts may vary considerably.\n[…]\nThe high selenium content is used as a biomarker in studies of selenium intake and deficiency. Consumption of just one Brazil nut per day over 8 weeks was sufficient to restore selenium blood levels and increase HDL cholesterol in obese women."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bertholletia_excelsa",
        "situacao": "ok",
        "texto": "Bertholletia excelsa ou castanheira é uma árvore de grande porte da família Lecitidácea, originária da floresta de terra firme, muito abundante na Amazônia, cujo fruto contém a castanha, do qual se extrai o núcleo de sua semente para o consumo. A primeira menção registrada remonta a 1596, realizada por Juan Álvarez Maldonado, nas matas do território que hoje corresponde ao Peru.\n[…]\nNutricionalmente, as Bertholletia excelsa são ricas em selênio, embora a quantidade de selênio varie consideravelmente. São também uma boa fonte de magnésio e tiamina.\n[…]\nExtraído da primeira prensagem, pode se obter um azeite extra-virgem podendo substituir o azeite da oliva por seu sabor suave e agradável. As proteínas encontradas na castanha-do-brasil são muito ricas em aminoácidos sulfurados como a cisteína (8%) e a metionina (18%). A presença desses aminoacidos (methionine) melhora a adsorção de seleninum e outros minerais. O óleo de Bertholletia excelsa é extraído das sementes secas, geralmente por prensagem à frio.\n[…]\nA castanha é uma rica fonte de magnésio, tiamina e possui as mais altas concentrações conhecidas de selênio (126 ppm²), com propriedades antioxidantes. A presença desses antioxidantes combateria os radicais livres. Algumas pesquisas indicaram que o consumo de selênio está relacionado com a redução do risco de câncer de próstata e recomendaram o consumo da semente como uma medida preventiva.\n[…]\nPorém, revisão por pares e estudos subsequentes sobre o efeito do selênio no câncer de próstata foram inconclusivos.\n[…]\nO efeito castanha-do-brasil, técnica empregada no estudo da físico-química, no qual itens maiores misturados em um mesmo recipiente com itens menores (por exemplo, Bertholletia excelsa misturadas com amendoins) tendem a subir ao topo, recebeu o nome desta espécie.\n[…]\nIUCN Red List: Bertholletia excelsa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Dente-de-leão",
      "descricao": "Planta do gênero Taraxacum, de capítulo amarelo que depois vira bola de sementes."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome dente-de-leão veio do francês. A que parte da planta ele se refere?",
    "resposta": "Às folhas recortadas",
    "distratores": [
      "Às sementes com pelos",
      "À flor amarela",
      "Às raízes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Taraxacum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taraxacum",
        "situacao": "ok",
        "texto": "Taraxacum () is a genus of flowering plants in the family Asteraceae which consists of species commonly known as dandelions. The scientific and hobby study of the genus is known as taraxacology. The genus has a near-cosmopolitan distribution, absent only from tropical and polar areas. Two of the most common species worldwide, T. officinale (the common dandelion) and T. erythrospermum (the red-seed\n[…]\nTaraxacum pankhurstianum, the St. Kilda dandelion\n[…]\nTaraxacum platycarpum, the Korean dandelion\n[…]\nTaraxacum pseudoroseum\n[…]\nTaraxacum rubifolium\n[…]\nTaraxacum suecicum\n[…]\nDandelions are thought to have evolved about 30 million years ago in Eurasia. Fossil seeds of Taraxacum tanaiticum have been recorded from the Pliocene of southern Belarus. Dandelions have been used by humans for food and as a herb for much of recorded history. They were well known to ancient Egyptians, Greeks and Romans, and are recorded to have been used in traditional Chinese medicine for over a thousand years. The plant was used as food and medicine by Native Americans.\n[…]\nTaraxacum seeds are an important food source for certain birds (linnets, Linaria spp.).\n[…]\nFor example, Denali National Park and Preserve in Alaska lists Taraxacum officinale as the most common invasive species in the park  and hosts an annual \"Dandelion Demolition\" event where volunteers are trained to remove the plant from the park's roadsides.\n[…]\nRaw dandelion greens contain high amounts of vitamins A, C, and K, and are moderate sources of calcium, potassium, iron, and manganese. Raw dandelion greens are 86% water, 9% carbohydrates, 3% protein, and 1% fat. A 100 gram (3+1⁄2oz) reference amount supplies 45 Calories.\n[…]\nDandelions secrete latex when the tissues are cut or broken, yet in the wild type, the latex content is low and varies greatly. Taraxacum kok-saghyz, the Russian dandelion, is a species that produced industrially useful amounts during WW2."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Taraxacum",
        "situacao": "ok",
        "texto": "Dente-de-leão é o nome vulgar de várias espécies pertencentes ao género botânico Taraxacum, das quais a mais disseminada é a Taraxacum officinale. É uma planta medicinal herbácea conhecida no Brasil também pelos nomes populares taráxaco, papai-careca, amor-de-homem, vovô-careca, amargosa, alface-de-cão ou salada-de-toupeira. No Nordeste é conhecida por esperança.\n[…]\nPlanta da família das compostas (como a serralha e muitas outras), tem inflorescências amarelo-brilhantes ou mesmo brancas. Tem um alto potencial biótico devido à facilidade com que suas sementes se disseminam: com a forma de pequenos paraquedas, são facilmente levadas pelo vento. Taraxacum officinale é um indicador de solo fértil. [carece de fontes]?\n[…]\nA utilização do látex do dente-de-leão na fabricação de borracha está a ser objecto de estudo na Alemanha, EUA, China e Japão. Ao contrário da Seringueira, o dente-de-leão não precisa de um clima quente para crescer, criando por isso a oportunidade de produzir látex a um custo inferior ao actual. [carece de fontes]?\n[…]\nDente-de-leão\n[…]\nTaraxacum ceratophorum (Ledeb.) DC.\n[…]\nTaraxacum dissectum (Ledeb.) Ledeb. - Pissenlit discret (Sibérie, Europe du Sud : Suisse, France, Italie, Espagne)\n[…]\nTaraxacum eriophorum Rydb.\n[…]\nTaraxacum glabrum DC. - Pissenlit glabre (Russie d'Europe)\n[…]\nTaraxacum japonicum Koidz.\n[…]\nTaraxacum kok-saghyz L.E.Rodin - Pissenlit de Russie (Kazakhstan, Kirghizstan, Chine)\n[…]\nTaraxacum laevigatum (Willd.) DC. - Pissenlit lisse (Europe, Russie, Kazakhstan\n[…]\nTaraxacum lecerum Greene\n[…]\nTaraxacum lyratum (Ledeb.) DC.\n[…]\nTaraxacum megalorrhizon (Forssk.) Hand.-Mazz. - Pissenlit à grosse racine, (Région méditerranéenne)\n[…]\nTaraxacum mongolicum Hand.-Mazz. - Pissenlit de Mongolie (Russie, Mongolie, Chine, Corée)\n[…]\nTaraxacum palustre (Lyons) Symons\n[…]\nTaraxacum phymatocarpum J. Vahl\n[…]\nTaraxacum spectabile Dahlst.\n[…]\nTaraxacum brachyrhynchum\n[…]\nTaraxacum recedens\n[…]\nTaraxacum torvum",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Guaraná",
      "descricao": "Planta trepadeira amazônica cujas sementes são usadas em refrigerantes, pós e xaropes"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas sementes tem a maior concentração de cafeína?",
    "resposta": "Guaraná",
    "distratores": [
      "Café arábica",
      "Cacau",
      "Cupuaçu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Guarana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guarana",
        "situacao": "ok",
        "texto": "Guaraná ( from the Portuguese guaraná [ɡʷaɾɐˈna]; Paullinia cupana, syns. P. crysan, P. sorbilis) is a climbing plant in the family Sapindaceae, native to the Amazon basin and especially common in Brazil. Guaraná has large leaves and clusters of flowers, and is best known for the seeds from its beans, which are about the size of a coffee bean.\n[…]\nGuaraná is common in soft drinks in Brazil, and is a major source of caffeine for many South Americans. Products containing guaraná can be effective stimulants: the seeds can be up to about 6% caffeine. For comparison, green coffee beans are about 1–3% caffeine. As an additive, it has gained notoriety for being used in energy drinks. As with other plants producing caffeine, the high concentration of caffeine is a defensive toxin that repels insects from the berry and seeds.\n[…]\nThe Guaranis make an herbal tea called cupana by shelling, washing and drying the seeds, followed by pounding them into a fine powder. The powder is kneaded into a dough and then shaped into cylinders. This product is known as guaraná bread, which is grated and then immersed into hot water along with sugar.\n[…]\nThe table below contains a partial listing of some of the chemicals found in guaraná seeds, although other parts of the plant also may contain them in varying quantities.\n[…]\nBrazil, the third-largest consumer of soft drinks in the world, produces several soft drink brands from the seeds of guaraná. A fermented drink is also prepared from guaraná seeds, cassava and water. Paraguay is also a producer of guaraná soft drinks with several brands operating in its market. The word guaraná is widely used in Brazil, Peru and Paraguay as a reference to soft drinks containing guaraná extract.\n[…]\nGuaraná Antarctica – guaraná flavored soft drink from Brazil\n[…]\nGuarana at USDA database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guaran%C3%A1",
        "situacao": "ok",
        "texto": "O guaraná (nome científico: Paullinia cupana), comumente chamado guaranazeiro e uaraná, é um cipó originário da Amazônia. É encontrado no Brasil, Peru, Colômbia, Guiana e Venezuela, sendo cultivado principalmente no município de Maués, estado do Amazonas, e na Bahia. Pertence a família Sapindaceae.\n[…]\nAs sementes do guaraná contêm alta concentração de compostos fenólicos, de onde vem a sua ação antioxidante. Além disso, apresentam em sua composição metilxantinas – sendo a de maior concentração a cafeína – e, em menores quantidades, outros alcaloides purínicos, tais como a teofilina e a teobromina. Também possuem saponinas, taninos (que representam cerca de 16% da sua composição), polissacarídeos, proteínas, ácidos graxos e oligoelementos, tais como rubídio, manganês, níquel e estrôncio.\n[…]\nAs sementes secas do guaraná constituem a parte mais utilizada comercialmente, uma vez que contêm alto teor de cafeína.\n[…]\nO guaraná é um estimulante: aumenta a resistência nos esforços mentais e musculares e diminui a fadiga motora e psíquica. Por meio das xantinas que possui (cafeína e teobromina), o guaraná produz maior rapidez e clareza do pensamento. Entretanto, se ingerido em excesso, provoca efeitos colaterais como insônia, irritabilidade, taquicardia, azia, distúrbios do sistema nervoso central, mioglobinúria e dependência física.\n[…]\nDevido às suas propriedades antimicrobianas e antioxidades, o extrato das sementes do guaraná pode ser utilizado como aditivo natural em cosméticos, principalmente em produtos antienvelhecimento. Também é utilizado em produtos para o tratamento da celulite, tendo em vista sua grande quantidade de alcaloides, como a cafeína.\n[…]\n«Teste comprova que guaraná precisa ser consumido com moderação». [ligação inativa] (em português)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Vitória-régia",
      "descricao": "Planta aquática amazônica Victoria amazonica, de folhas circulares gigantes"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A face de baixo da folha gigante da vitória-régia é protegida contra peixes e outros herbívoros por quê?",
    "resposta": "Espinhos",
    "distratores": [
      "Pelos urticantes",
      "Cera venenosa",
      "Escamas duras"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Victoria_amazonica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Victoria_amazonica",
        "situacao": "ok",
        "texto": "Victoria amazonica (\"giant water lily\") is a species of flowering plant, the second largest in the water lily family Nymphaeaceae. It is called Vitória-Régia or Iaupê-Jaçanã (\"the jacana's waterlily\") in Brazil and Atun Sisac (\"great flower\") in Inca (Quechua). Its native region is tropical South America, specifically Guyana and the Amazon Basin.\n[…]\nThe diploid chromosome count of Victoria amazonica is 20.\n[…]\nVictoria amazonica has not yet been formally evaluated for the IUCN Red List, but a 2022 assessment proposed it as Least Concern (LC) due to its wide distribution across the Amazon basin. Potential threats include deforestation and climate change impacts on wetland ecosystems, though it is not currently considered endangered.\n[…]\nVictoria regia, as it was named, was described by Tadeáš Haenke in 1801. It was once the subject of rivalry between Victorian gardeners in England. Always on the lookout for a new species with which to impress their peers, Victorian \"gardeners\" such as the Duke of Devonshire and the Duke of Northumberland started a friendly competition to become the first to cultivate and bring to flower this large lily.\n[…]\nThe species captured the public's imagination and was the subject of several dedicated monographs. The botanical illustrations of cultivated specimens in Fitch and W.J. Hooker's 1851 work Victoria Regia received critical acclaim in the Athenaeum, \"they are accurate, and they are beautiful\". \"The Duke of Devonshire presented Queen Victoria with one of the first of these flowers and named it in her honour.\n[…]\nMedia related to Victoria amazonica at Wikimedia Commons\n[…]\nData related to Victoria amazonica at Wikispecies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Victoria_amazonica",
        "situacao": "ok",
        "texto": "A vitória-régina ou victória-régia (Victoria amazonica) é uma planta aquática da família das Nymphaeaceae, típica da região amazônica.\n[…]\nA espécie faz parte do gênero Victoria, colocado por vezes na família Nymphaeaceae e outras vezes na Euryalaceae. A primeira descrição publicada do gênero foi feita por John Lindley em outubro de 1837, com base em espécimes dessa planta devolvidos da Guiana Inglesa por Robert Schomburgk. Lindley deu ao gênero o nome da recém-ascendida Rainha Vitória, e da espécie Victoria regia. A grafia na descrição de Schomburgk no Athenaeum, publicada no mês anterior, foi dada como Victoria Regina .\n[…]\nA espécie capturou a imaginação do público e foi tema de várias monografias dedicadas. As ilustrações botânicas de espécimes cultivados na obra Victoria Regia de Fitch e WJ Hooker de 1851 foram aclamadas pela crítica no Athenaeum, “elas são precisas e lindas”. “O Duque de Devonshire presenteou a Rainha Vitória com uma das primeiras dessas flores e a nomeou em sua homenagem.\n[…]\nO caule e a parte inferior das folhas são revestidos com muitos espinhos para se defender de peixes e outros herbívoros subaquáticos, embora também possam desempenhar um papel ofensivo ao esmagar plantas rivais nas proximidades, à medida que a vitória-régia se desenvolve agressivamente., privando outras plantas diretamente abaixo de suas folhas desse recurso vital e escurecendo significativamente as águas abaixo.\n[…]\nOs nenúfares gigantes mais jovens são conhecidos por balançar seus caules e botões espinhosos à medida que crescem para criar espaço à força para si mesmos.\n[…]\nA Vitória-régia em Indaial\n[…]\nLenda da vitória-régia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Pau-brasil",
      "descricao": "Árvore nativa da Mata Atlântica, cuja madeira avermelhada foi o primeiro produto explorado pelos portugueses no Brasil."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Por uma lei federal de 1978, o pau-brasil recebeu que título oficial?",
    "resposta": "Árvore nacional",
    "distratores": [
      "Patrimônio da humanidade",
      "Madeira imperial",
      "Flor nacional"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pau-brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pau-brasil",
        "situacao": "ok",
        "texto": "O pau-brasil (atual Paubrasilia echinata (Lam.) Gagnon, H.C.Lima & G.P.Lewis, antiga Caesalpinia echinata Lam.), também chamado arabutã, ibirapiranga, ibirapitá, ibirapitanga, orabutã, pau-de-tinta, pau-pernambuco, pau-de-pernambuco e pau-rosado, é uma árvore leguminosa nativa da Mata Atlântica, no Brasil.\n[…]\nQuanto ao nome científico, Paubrasilia é o gênero da árvore. Já echinata significa \"com espinhos\", uma referência ao fato de as vagens do pau-brasil terem acúleos, que são uma especialização da epiderme que se parece com espinhos.\n[…]\nEm alguns idiomas, como o francês e o italiano, a árvore chama-se pernambuco, pernambouc, fernambouc, devido ao fato de o Nordeste (em especial Pernambuco) ter sido o local onde se iniciou a exploração do pau-brasil.\n[…]\nO município pernambucano de São Lourenço da Mata é considerado a capital nacional do pau-brasil: na Estação Ecológica de Tapacurá, pertencente à Universidade Federal Rural de Pernambuco, foram plantadas 50 mil mudas da espécie. Também em Pernambuco está localizado o único museu destinado ao pau-brasil no país, no município de Glória do Goitá.\n[…]\nPela Lei 6.607, de 7 de dezembro de 1978, o pau-brasil foi declarado árvore nacional do Brasil.\n[…]\nO projeto de lei PL–3 380/1961 visava a declarar o pau-brasil e o ipê-amarelo, respectivamente, árvore e flor nacionais, mas este projeto não foi aprovado, conforme informa o site oficial da Câmara dos Deputados. Pelos projetos de lei PL–2 293/1974 e PL–882/1975, ambos arquivados na Câmara dos Deputados, tentou-se instituir o ipê como flor nacional do Brasil.\n[…]\nPossivelmente por confundir o projeto de 1961, que não foi aprovado, com a lei de 1978, diversas pessoas divulgam a informação incorreta de que a lei do pau-brasil teria declarado o ipê-amarelo como flor nacional do Brasil.\n[…]\nSímbolos do Brasil"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Orquídea",
      "descricao": "Planta da família Orchidaceae, uma das maiores famílias de plantas com flores"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "As sementes das orquídeas são finas como poeira e quase não têm reservas. Na natureza, para germinar, elas dependem de quê?",
    "resposta": "De fungos",
    "distratores": [
      "De fogo",
      "De passar por aves",
      "De luz intensa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Orchid_mycorrhiza",
      "https://en.wikipedia.org/wiki/Orchid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Orchid_mycorrhiza",
        "situacao": "ok",
        "texto": "Orchid mycorrhizae are endomycorrhizal fungi which develop symbiotic relationships with the roots and seeds of plants of the family Orchidaceae. Nearly all orchids are myco-heterotrophic at some point in their life cycle. Orchid mycorrhizae are critically important during orchid germination, as an orchid seed has virtually no energy reserve and obtains its carbon from the fungal symbiont.\n[…]\nHowever it has become clearer that different fungi may associate with orchids at specific stages, whether at germination, protocorm development, or throughout the orchid's life. The types of orchids and their symbiotic fungi also vary depending on the environmental niches they occupy, whether terrestrial or growing on other plants as an epiphyte.\n[…]\nAfter germination, the orchid mycorrhizal interactions will become specialized to utilize the carbon and nutrients available in the environment surrounding the interaction. These associations are often thought to be dictated by the plant.\n[…]\nIt has been indicated in past studies that orchid plant individuals which inhabit dense highly shaded forests may depend significantly more on their fungal partner for carbon, varying within and between species, demonstrating the variable and reactive nature of these interactions.\n[…]\nFungal symbioses also depend on the environment so there are many differences in fungal partners of tropical versus temperate orchids.\n[…]\nThe knowledge of species-specific fungal symbionts is crucial given the endangered status of many orchids around the world. The identification of their fungal symbionts could prove useful in the preservation and reintroduction of threatened orchids. Researchers in India have used samples from adult orchids to germinate seeds from an endangered orchid Dactylorhiza hatagirea which were found to associate closely with Ceratobasidium.\n[…]\n\"Function of Orchid Mycorrhizas\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Orchid",
        "situacao": "ok",
        "texto": "Orchids are plants that belong to the family Orchidaceae (), a diverse and widespread group of flowering plants with blooms that are often colourful and fragrant. Orchids are cosmopolitan plants, living in diverse habitats on every continent except Antarctica. The world's richest diversity of orchid genera and species is in the tropics. Many species are epiphytes, living on trees.\n[…]\nMost orchid species lack endosperm in their seed and must enter symbiotic relationships with various mycorrhizal basidiomyceteous fungi that provide them the necessary nutrients to germinate, so almost all orchid species are mycoheterotrophic during germination and reliant upon fungi to complete their lifecycles. Only a handful of orchid species have seeds that can germinate without mycorrhiza, namely the species within the genus Disa with hydrochorous seeds.\n[…]\nThese orchids are known as myco-heterotrophs, but were formerly (incorrectly) described as saprophytes as it was believed they gained their nutrition by breaking down organic matter. While only a few species are achlorophyllous holoparasites, all orchids are myco-heterotrophic during germination and seedling growth, and even photosynthetic adult plants may continue to obtain carbon from their mycorrhizal fungi.\n[…]\nThe symbiosis is typically maintained throughout the lifetime of the orchid because they depend on the fungus for nutrients, sugars and minerals.\n[…]\nAssisted migration may be a viable conservation tool for orchids endangered by climate change. In 2006 the Longtan Dam was built near the Yachang Orchid Nature Reserve. In response to the threat of inundation at lower altitudes (350–400 m), 1000 endangered orchid plants of 16 genera and 29 species were translocated to higher elevation (around 1000 m), where they survived well.\n[…]\nThe Global Orchid Information Network\n[…]\nOrchid Conservation Coalition"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Maçã",
      "descricao": "Fruto da macieira (Malus domestica), cultivado no mundo todo."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas frutas pertence à mesma família botânica da rosa?",
    "resposta": "Maçã",
    "distratores": [
      "Uva",
      "Banana",
      "Laranja"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rosaceae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rosaceae",
        "situacao": "ok",
        "texto": "Rosaceae (), the rose family, is a family of flowering plants that includes 4,828 known species in 91 genera.\n[…]\nSubfamily Amygdaloideae: Within this group remains an identified clade with a pome fruit, traditionally known as subfamily Maloideae (or Pyroideae) which included genera such as Malus (apple), Cotoneaster, and Crataegus (hawthorn). To separate it at the subfamily level would leave the remaining genera as a paraphyletic group, so it has been expanded to include the former Spiraeoideae and Amygdaloideae.\n[…]\nThe rose family is considered one of the six most economically important crop plant families, and includes apples, pears, quinces, medlars, loquats, almonds, peaches, apricots, plums, cherries, strawberries, blackberries, raspberries, sloes, and roses.\n[…]\nMany genera are also highly valued ornamental plants. These include trees and shrubs (Aronia, Cotoneaster, Chaenomeles, Crataegus, Dasiphora, Exochorda, Kerria, Photinia, Physocarpus, Prunus, Pyracantha, Rhodotypos, Rosa, Sorbus, Spiraea), herbaceous perennials (Alchemilla, Aruncus, Filipendula, Geum, Potentilla, Sanguisorba), alpine plants (Dryas, Geum, Potentilla) and climbers (Rosa).\n[…]\nIn Bulgaria and parts of western Asia, the production of rose oil from fresh flowers such as Rosa damascena, Rosa gallica, and other species is an important economic industry.\n[…]\nRosaceae at the DELTA Online Families of Flowering Plants Archived 14 May 2011 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rosaceae",
        "situacao": "ok",
        "texto": "As rosáceas (Rosaceae) são uma família de plantas com flor da ordem Rosales, que inclui pelo menos 4 828 espécies repartidas por 91 géneros. A família inclui espécies com grande diversidade de hábito, desde herbáceas a arbustos e árvores, maioritariamente espécies decíduas. A família tem distribuição cosmopolita, embora com maior diversidade no Hemisfério Norte.\n[…]\nA família Rosaceae, cujo nome deriva do género tipo Rosa, é considerada uma das mais diversificadas no clado de angiospermas, integrando cerca de 5000 espécies repartidas por 90-91 géneros, incluindo uma grande diversidade de plantas ornamentais, como as roseiras (Rosa sp.), e frutíferas, como as macieiras (Malus sp.) e as frutas de carouço.[carece de fontes]?\n[…]\nAinda assim, à medida que ficaram disponíveis dados sobre a filogenética do grupo, identificou-se que nem todos os grupos remanescentes eram monofiléticos, originando múltiplos modelos de subdivisão da família, os quais foram variando com o refinamento dos conhecimentos da biologia molecular do grupo: o botânico britânico John Hutchinson (1884-1972), em 1964, e Cornells Kalkman, em 2004, reconheceram apenas tribos (17 e 21, respectivamente).\n[…]\nNo campo do interesse alimentar, a família inclui Malus domestica (macieira), Prunus persica (pessegueiro), Eriobotrya japonica (nespereira) e Fragaria x ananassa (morangueiro). Com interesse ornamental contam-se os géneros Cotoneaster (cotoneasteres), Pyracantha (piracantas), Rosa (roseiras) e Spiraea (grinalda-de-noiva). No campo da produção de madeira, destaque-se Prunus avium, a cerejeira-brava.\n[…]\nNo Brasil, encontra-se um género endémico com 10 espécies endémicas, sendo que essa família é bem diversificada em grande parte do território brasileiro, tendo ocorrências confirmadas nas regiões:\n[…]\nA família Rosaceae inclui uma grande variedade de árvores, arbustos e herbáceas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Tulipomania",
      "descricao": "Bolha especulativa com bulbos de tulipa ocorrida nos Países Baixos"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Na tulipomania, as tulipas mais caras tinham pétalas rajadas, como chamas. O que causava essas listras?",
    "resposta": "Um vírus",
    "distratores": [
      "Enxerto de bulbos",
      "Adubo de cinzas",
      "Cruzamento com íris"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tulip_breaking_virus",
      "https://en.wikipedia.org/wiki/Tulip_mania"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tulip_breaking_virus",
        "situacao": "ok",
        "texto": "Tulip breaking virus is one of five plant viruses of the family Potyviridae that cause color-breaking of tulip flowers. These viruses infect plants in only two genera of the family Liliaceae: tulips (Tulipa) and lilies (Lilium).\n[…]\nAlso known as the tulip break virus, lily streak virus, lily mosaic virus, or simply TBV, tulip breaking virus is most famous for its dramatic effects on the color of the tulip perianth, an effect highly sought after during the 17th-century Dutch \"tulip mania\".\n[…]\nThe virus was eventually proved to be transferred in a non-persistent manner by at least four species of aphids, specifically Myzus persicae (the most efficient), Macrosiphum euphorbiae, Aphis fabae, and Aphis gossypii. McKenny-Hughes reported in 1934 that Dysaphis tulipae transmitted the virus between stored tulip bulbs, but this has not been confirmed. The transfer of the virus is non-persistent, which means it is accomplished through the insect feeding.\n[…]\nToday, tulips like Rem's Sensation displaying a \"broken\" effect are the result of artificial selection, not viral infection, although many tulip fanciers feel these \"modern\" variants are a poor substitute when compared to long-extinct cultivars like Semper Augustus. Modern tulip varieties that become infected with this virus tend to become weak and stunted.\n[…]\nBeckerman, Janna (April 18, 2011). \"Tulip Break Virus\". Purdue University: Plant and Pest Diagnostic Laboratory. Archived from the original on 18 March 2014. Retrieved 18 March 2014.\n[…]\nSe T, Kanematsu S (2002). \"First Report of Tulip band breaking virus in Mosaic Diseased Tulip in Japan\". Plant Disease. 86 (12): 1405. doi:10.1094/PDIS.2002.86.12.1405A. PMID 30818458.\n[…]\nAmsterdam Tulip Museum"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tulip_mania",
        "situacao": "ok",
        "texto": "Tulip mania (Dutch: tulpenmanie) was a period during the Dutch Golden Age when contract prices for some bulbs of the recently introduced and fashionable tulip reached extraordinarily high levels. The major acceleration started in 1634 and then dramatically collapsed in February 1637. It is generally considered to have been the first recorded speculative bubble or asset bubble in history.\n[…]\nThe multicolour effects of intricate lines and flame-like streaks on the petals were vivid and spectacular, making the bulbs that produced these even more exotic-looking plants highly sought after. It is now known that this effect is produced when the bulbs are infected with a type of tulip-specific mosaic virus known as the \"tulip breaking virus\", so called because it \"breaks\" the one petal colour into two or more.\n[…]\nLess conspicuously, the virus also progressively impairs the tulip's production of daughter bulbs.\n[…]\nThe Semper Augustus was the most expensive tulip during the tulip mania; during the peak this tulip was sold for ƒ10.000 (~€130.000 in 2024). After seeing the tulip in the garden of Dr. Adriaan Pauw, a director of the Dutch East India Company, Nicolas van Wassenaer wrote in 1624 \"The colour is white, with carmine on a blue base, and with an unbroken flame right to the top\". Semper Augustus was actually not a tulip variety but rather a tulip affected by the tulip mosaic virus.\n[…]\nAs the flowers grew in popularity, professional growers paid higher and higher prices for bulbs with the virus, and prices rose steadily. By 1634 speculators began to enter the market, partly as a result of demand from the French. The contract price of rare bulbs continued to rise throughout 1636. By November, the price of common, \"unbroken\" bulbs also began to increase, so that any tulip bulb could fetch hundreds of guilders."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/V%C3%ADrus_do_mosaico_da_tulipa",
        "situacao": "ok",
        "texto": "O vírus do mosaico da tulipa é um dos cinco fitovírus da família Potyviridae que causam um efeito de mosaico na cor das flores de tulipa. Esses vírus infectam plantas de apenas dois gêneros da família Liliaceae: tulipas (Tulipa) e lírios (Lilium).\n[…]\nTambém conhecido como TBV, o vírus do mosaico da tulipa é mais famoso por seus efeitos dramáticos na coloração do perianto da tulipa, um efeito muito valorizado durante a \"mania das tulipas\" holandesa do século XVII.\n[…]\nO vírus infecta o bulbo e faz com que o cultivar \"quebre\" sua uniformidade de cor, resultando em barras, listras, estrias, penas ou efeitos semelhantes a chamas de diferentes cores nas pétalas. Esses sintomas variam conforme a variedade da planta e a idade no momento da infecção. Os tipos de mosaico dependem da variedade da tulipa e da cepa do vírus.\n[…]\nHoje, tulipas como Rem's Sensation, que exibem um efeito de mosaico, são variantes estáveis resultantes de cruzamentos, não de infecção viral, embora muitos entusiastas de tulipas sintam que essas variantes \"modernas\" são um substituto inferior em comparação com cultivares raros e extintos como Semper Augustus. Variedades modernas de tulipas infectadas pelo vírus são frágeis e geralmente muito menores que as flores saudáveis normais, com um comprimento de caule reduzido.\n[…]\nExistem apenas algumas variedades mais antigas de tulipas verdadeiramente infectadas ainda em existência, como Zomerschoon, mas apenas porque os piores aspectos do vírus permaneceram benignos de alguma forma. Um exemplo é a rara Absalon, datada de 1780; uma variedade de cor \"bizarra\", ela exibe chamas douradas contra um fundo marrom-chocolate escuro.==Notas==\n[…]\nMuseu da Tulipa de Amsterdã (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Tulipa",
      "descricao": "Gênero de plantas bulbosas de flores vistosas, Tulipa, nativo da Ásia Central e da Turquia"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Antes de virar símbolo da Holanda, a tulipa era cultivada e admirada em que império, de onde chegou à Europa Ocidental no século dezesseis?",
    "resposta": "Império Otomano",
    "distratores": [
      "Império Russo",
      "Império Mogol",
      "Sacro Império Romano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tulip"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tulip",
        "situacao": "ok",
        "texto": "Tulips are spring-blooming perennial herbaceous bulbiferous geophytes in the Tulipa genus. Their flowers are usually large, showy, and brightly coloured, generally red, orange, pink, yellow, or white. They often have a different coloured blotch at the base of the tepals, internally. Because of a degree of variability within the populations and a long history of cultivation, classification has been\n[…]\nTulipa (52 species)\n[…]\nIn 1515, the scholar Qasim from Herat in contrast had identified both wild and garden tulips (lale) as anemones (shaqayq al-nu'man) but described the crown imperial as laleh kakli.\n[…]\nIt was supposed to have come from Alexandria and may have been Tulipa sylvestris, but the identification is not wholly secure.\n[…]\nCarolus Clusius is largely responsible for the spread of tulip bulbs in the final years of the 16th century; he planted tulips at the Vienna Imperial Botanical Gardens in 1573. He finished the first major work on tulips in 1592 and made note of the colour variations. After he was appointed the director of the Leiden University's newly established Hortus Botanicus, he planted both a teaching garden and his private garden with tulips in late 1593.\n[…]\nA number of names are based on naturalised garden tulips and are usually referred to as neo-tulipae. These are often difficult to trace back to their original cultivar, and in some cases have been occurring in the wild for many centuries. The history of naturalisation is unknown, but populations are usually associated with agricultural practices and are possibly linked to saffron cultivation. Some neo-tulipae have been brought into cultivation, and are often offered as botanical tulips.\n[…]\nPeople who handle tulip bulbs extensively can develop contact dermatitis, known as \"tulip fingers\", caused by the defensive chemical tulipalin A. The petals are edible to humans, as are the leaves, although some people are allergic."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tulipa",
        "situacao": "ok",
        "texto": "Tulipa L. é um género de plantas angiospermas (plantas com flores) da família das liláceas.\n[…]\nCom cerca de cem folhagens surge uma haste ereta, com flor solitária formada por seis pétalas. Suas cores e formas são bem variadas. Existem muitas variedades cultivadas e milhares de híbridos em diversas cores, tons matizados, pontas picotadas, etc.\n[…]\nNa Europa os bulbos são enterrados no Outono, para florirem na Primavera.\n[…]\nNo entanto, a flor é presente na cultura dos Países Baixos, principalmente por grandes campos em Keukenhof, que é onde está presente uma grande parte de tulipas.\n[…]\nEmbora as tulipas não se adaptem bem ao clima brasileiro, é possível induzir a planta a dar, pelo menos, mais uma floração, simulando as condições climáticas do seu habitat natural para estimular os bolbos a rebrotarem.\n[…]\nPara isso, ao adquirir um vaso de tulipas dê preferência aos que ainda estejam com as flores em botão, permitindo-lhe usufruir da beleza da flor por mais tempo. O vaso deverá ser conservado em um local fresco e com luminosidade, evitando-se os ventos e o sol forte. Alguns colocam algumas pedras de gelo sobre o substrato (mistura de terra) no vaso, pela manhã e ao entardecer, a fim de diminuir o excesso de calor.\n[…]\nTulipa linifolia\n[…]\nTulipa praestans\n[…]\nTulipa saxatilis\n[…]\nVírus do mosaico da tulipa\n[…]\n«Híbridos das Tulipas». (em alemão)\n[…]\n(em inglês) Referência ITIS: Tulipa\n[…]\n(em inglês) Referência NCBI Taxonomy: Tulipa\n[…]\n(em inglês) Referência GRIN gênero Tulipa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Bambu",
      "descricao": "Planta da subfamília Bambusoideae, gramínea de colmos lenhosos e articulados."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Algumas espécies de bambu estão entre as plantas que crescem mais depressa. Em um só dia, quanto elas podem crescer?",
    "resposta": "Quase um metro",
    "distratores": [
      "Um centímetro",
      "Dez centímetros",
      "Cinco metros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bamboo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bamboo",
        "situacao": "ok",
        "texto": "Bamboos are a diverse group of mostly evergreen perennial flowering plants making up the subfamily Bambusoideae of the grass family Poaceae. Giant bamboos are the largest members of the grass family, in the case of Dendrocalamus sinicus having individual stalks (culms) reaching a length of 46 meters (151 ft), up to 36 centimeters (14 in) in diameter and a weight of up to 450 kilograms (1,000 lb). \n[…]\nRecently, some attempts have been made to grow bamboo on a commercial basis in the Great Lakes region of east-central Africa, especially in Rwanda. In the United States, several companies are growing, harvesting, and distributing species such as Phyllostachys nigra (Henon) and Phyllostachys edulis (Moso).\n[…]\nDue to its flexibility, bamboo is also used to make fishing rods. The split cane rod is especially prized for fly fishing.\n[…]\nThe simple sharpened bamboo spear, known as bambu runcing (literally 'sharp bamboo' or 'pointed bamboo'), is a legendary symbol of Indonesian revolutionary spirit, embodying the will of the Indonesian people, who were often ill-equipped, to fight for independence against the Dutch occupation who held air- and naval supremacy along with Commonwealth aid.\n[…]\nBamboo is not only a symbol of a gentleman, but also plays an important role in Buddhism, which was introduced into China in the first century. As canons of Buddhism forbid cruelty to animals, flesh and egg were not allowed in the diet. The tender bamboo shoot (sǔn 筍 in Chinese) thus became a nutritious alternative. Preparation methods developed over thousands of years have come to be incorporated into Asian cuisines, especially for monks.\n[…]\nA Buddhist monk, Zan Ning, wrote a manual of the bamboo shoot called Sǔn Pǔ (筍譜) offering descriptions and recipes for many kinds of bamboo shoots. Bamboo shoots have traditionally been a dish on the Chinese dinner table, especially in southern China.\n[…]\nBambuseae"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bambuso%C3%ADdeas",
        "situacao": "ok",
        "texto": "Bambusoídeas (Bambusoideae) Luerss. é uma importante subfamília da família Poaceae (Gramineae).\n[…]\nEsta subfamília é de classificação problemática. Não é definida quase tão agudamente como outras subfamílias da família Poaceae. Inclui as plantas conhecidas como bambus com aproximadamente 1250 espécies distribuídas em todos os continentes, menos na Europa.\n[…]\nBambusaceae Burnett, Parianaceae Nakai\n[…]\n«Subfamília Bambusoideae» (em inglês). em GRIN Taxonomy for Plants USDA\n[…]\n«Subfamília Bambusoideae» (em inglês). em Taxonomy Browser NCBI\n[…]\n«Subfamília Bambusoideae» (em inglês). em DELTA: L.Watson e  M.J.Dallwitz\n[…]\n«Subfamília Bambusoideae» (em inglês). em Compleat Botanica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Bambu",
      "descricao": "Planta da subfamília Bambusoideae, gramínea de colmos lenhosos e articulados."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O que o bambu tem em comum com o arroz, o trigo e a cana-de-açúcar?",
    "resposta": "São gramíneas",
    "distratores": [
      "São palmeiras",
      "São leguminosas",
      "São trepadeiras"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bamboo",
      "https://en.wikipedia.org/wiki/Poaceae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bamboo",
        "situacao": "ok",
        "texto": "Bamboos are a diverse group of mostly evergreen perennial flowering plants making up the subfamily Bambusoideae of the grass family Poaceae. Giant bamboos are the largest members of the grass family, in the case of Dendrocalamus sinicus having individual stalks (culms) reaching a length of 46 meters (151 ft), up to 36 centimeters (14 in) in diameter and a weight of up to 450 kilograms (1,000 lb). \n[…]\nIn the United States, the National Invasive Species Information Center agency of the Department of Agriculture has golden bamboo (Phyllostachys aurea) listed as an invasive species. Other potentially invasive species include, but are not limited to, Actinocladum verticillatum, Bambusa tuldoides, Bambusa vulgaris, Guadua sarcocarpa, Guadua tagoara, Phyllostachys aurea, and Phyllostachys pubescens, all of which spread primarily through rhizomes.\n[…]\nBamboo pulps are mainly produced in China, Myanmar, Thailand, and India, and are used in printing and writing papers. Several paper industries are surviving on bamboo forests. Ballarpur Chandrapur, Maharashtra paper mills use bamboo for paper production. The most common bamboo species used for paper are Dendrocalamus asper and Bambusa blumeana. It is also possible to make dissolving pulp from bamboo.\n[…]\nThe simple sharpened bamboo spear, known as bambu runcing (literally 'sharp bamboo' or 'pointed bamboo'), is a legendary symbol of Indonesian revolutionary spirit, embodying the will of the Indonesian people, who were often ill-equipped, to fight for independence against the Dutch occupation who held air- and naval supremacy along with Commonwealth aid.\n[…]\nBambuseae"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Poaceae",
        "situacao": "ok",
        "texto": "Poaceae ( poh-AY-see-e(y)e), also called Gramineae ( grə-MIN-ee-e(y)e), is a large and nearly ubiquitous family of monocotyledonous flowering plants commonly known as true grasses. It includes the cereal grasses, bamboos, the grasses of natural grassland and species cultivated in lawns and pasture. Poaceae is the most well-known family within the informal group known as grass.\n[…]\nThe relationships among the three subfamilies Bambusoideae, Oryzoideae and Pooideae in the BOP clade have been resolved: Bambusoideae and Pooideae are more closely related to each other than to Oryzoideae. This separation occurred within the relatively short time span of about 4 million years.\n[…]\nBambusoideae, including bamboo\n[…]\nMany types of animals eat grass as their main source of food, and are called graminivores – these include cattle, sheep, horses, rabbits and many invertebrates, such as grasshoppers and the caterpillars of many brown butterflies. Grasses are also eaten by omnivorous or even occasionally by primarily carnivorous animals.\n[…]\nGramineae Archived 2007-01-03 at the Wayback Machine at The Families of Flowering Plants (DELTA) Archived 2007-01-03 at the Wayback Machine\n[…]\nGramineae Archived 2020-08-07 at the Wayback Machine at the online Flora of New Zealand Archived 2017-05-25 at Archive-It"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bambuso%C3%ADdeas",
        "situacao": "ok",
        "texto": "Bambusoídeas (Bambusoideae) Luerss. é uma importante subfamília da família Poaceae (Gramineae).\n[…]\nEsta subfamília é de classificação problemática. Não é definida quase tão agudamente como outras subfamílias da família Poaceae. Inclui as plantas conhecidas como bambus com aproximadamente 1250 espécies distribuídas em todos os continentes, menos na Europa.\n[…]\nBambusaceae Burnett, Parianaceae Nakai\n[…]\n«Família Gramineae» (em inglês). em DELTA: L.Watson e  M.J.Dallwitz\n[…]\n«Subfamília Bambusoideae» (em inglês). em GRIN Taxonomy for Plants USDA\n[…]\n«Subfamília Bambusoideae» (em inglês). em Taxonomy Browser NCBI\n[…]\n«Subfamília Bambusoideae» (em inglês). em DELTA: L.Watson e  M.J.Dallwitz\n[…]\n«Subfamília Bambusoideae» (em inglês). em Compleat Botanica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Baobá",
      "descricao": "Árvore do gênero Adansonia, de tronco muito largo, típica da África e de Madagascar"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O tronco enorme e bojudo do baobá funciona como reservatório de quê, para a árvore atravessar a estação seca?",
    "resposta": "Água",
    "distratores": [
      "Açúcar",
      "Ar",
      "Resina"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Adansonia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Adansonia",
        "situacao": "ok",
        "texto": "Adansonia is a genus of medium-to-large deciduous trees known as baobabs ( ; also UK: , US: ) or boababs. The eight species of Adansonia are native to Africa, Australia, and Madagascar but have also been introduced to other regions of the world, including Barbados, where several of the baobabs there are suspected to have originated from Africa. Other baobabs have been introduced to Asia. A genomic\n[…]\nA ninth species was described in 2012 (Adansonia kilima Pettigrew, et al.), but is no longer recognised as a distinct species.\n[…]\nThe oldest splits within Adansonia are likely no older than 15 million years. The African and Australian baobabs are closely related, and thus the Australian species represents dispersal from Africa, though there is some dispute as to whether the dispersal was human-vectored.\n[…]\nThe lineage leading to Adansonia was found to have diverged from its closest relatives in Bombacoideae like Ceiba /Chorisia at the end of the Eocene, during a time of abrupt global climate cooling and drying, while a divergence of this Adansonia+Ceiba /Chorisia clade from Pachira was found to be more ancient, dating to the middle Eocene.\n[…]\nThe Malagasy species are important components of the Madagascar dry deciduous forests. Within that biome, Adansonia madagascariensis and A. rubrostipa occur specifically in the Anjajavy Forest, sometimes growing out of the tsingy limestone itself. A. digitata has been called \"a defining icon of African bushland\". The tree also grows wild in Sudan in the regions of Darfur and the state of Kordofan.\n[…]\nThe locals call it gongolaze and use its fruit as food and medicine and use the tree trunks as reservoirs to save water.\n[…]\nMedia related to Adansonia at Wikimedia Commons\n[…]\nData related to Adansonia at Wikispecies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baob%C3%A1",
        "situacao": "ok",
        "texto": "Adansonia L é um género de plantas com flor que agrupa as espécies de árvores das regiões tropicais áridas e semiáridas conhecidas por baobás, embondeiros, imbondeiros, calabaceiras ou cabaceiras. O género agrupa oito espécies validamente descritas, das quais seis têm distribuição natural restrita à ilha de Madagascar, uma ao continente africano e Médio Oriente e outra à Austrália.\n[…]\nAs espécies do género Adansonia são árvores de copa compacta, decíduas, deixando cair a folha na estação seca, de tronco massivo, formando um paquicaule cilíndrico, com diâmetros que atingem os 7 a 11 m, embora se conheçam exemplares isolados de muito maiores dimensões, e alturas que variam de 5 a 30 m. O ritidoma é liso e a madeira fibrosa.\n[…]\nComo todas as espécies de Adansonia ocorrem em regiões sazonalmente áridas, e são decíduas, deixando cair as folhas durante a estação seca, estas árvores destacam-se pela capacidade de armazenamento de água nos tecidos do tronco, a qual pode alcançar os 100 200 litros. Esta reserva hídrica destina-se a permitir sobreviver às duras condições de seca comuns nessas regiões.\n[…]\nAlguns exemplares ficam ocos quando envelhecem, convertendo-se em grandes depósitos nos quais se podem armazenar mais de seis mil litros de água.\n[…]\nAdansonia za Baill. — baobá-za (Madagáscar).\n[…]\nAs espécies malgaxes de Adansonia são importantes componentes da associação vegetal conhecida por floresta decídua seca de Madagáscar. Naquele bioma, as espécies A. madagascariensis e A. rubrostipa ocorrem especificamente na Floresta de Anjajavy, incluindo árvores crescendo sobre os calcários da Reserva Natural Integral do Tsingy de Bemaraha.\n[…]\nEm Angola e Moçambique, esta árvore é conhecida como \"embondeiro\" ou \"imbondeiro\". Em certas regiões de Moçambique, o tronco desta árvore é escavado por carpinteiros especializados para servir como cisterna comunitária.\n[…]\nBaobá no Rio Grande do Norte",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Caju",
      "descricao": "Pseudofruto amarelo ou avermelhado do cajueiro (Anacardium occidentale), com a castanha presa na ponta."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A castanha-de-caju nunca é vendida crua dentro da casca, só depois de torrada ou processada. Por quê?",
    "resposta": "Óleo cáustico na casca",
    "distratores": [
      "Crua tem cianeto",
      "Estraga em horas",
      "Crua é amarga demais"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cashew"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cashew",
        "situacao": "ok",
        "texto": "Cashew is the common name of a tropical evergreen tree Anacardium occidentale, in the family Anacardiaceae. It is the source of the cashew nut and the cashew apple. The tree can grow as tall as 14 meters (46 feet).\n[…]\nCashew nutshell liquid (CNSL) or cashew shell oil (CAS registry number 8007-24-7) is a natural resin with a yellowish sheen found in the honeycomb structure of the cashew nutshell, and is a byproduct of processing cashew nuts. Since it is a strong irritant, it should not be confused with edible cashew nut oil. It is dangerous to handle in small-scale processing of the shells, but is itself a raw material with multiple uses.\n[…]\nIt is used in tropical folk medicine and for anti-termite treatment of timber. Its composition varies depending on how it is processed.\n[…]\nCold, solvent-extracted CNSL is mostly composed of anacardic acids (70%), cardol (18%), and cardanol (5%).\n[…]\nHeating CNSL decarboxylates the anacardic acids, producing a technical grade of CNSL that is rich in cardanol. Distillation of this material gives distilled, technical CNSL containing 78% cardanol and 8% cardol (cardol has one more hydroxyl group than cardanol). This process also reduces the degree of thermal polymerization of the unsaturated alkyl-phenols present in CNSL.\n[…]\nAnacardic acid is also used in the chemical industry for the production of cardanol, which is used for resins, coatings, and frictional materials.\n[…]\nThese substances are skin allergens, like lacquer and the oils of poison ivy, and they present a danger during manual cashew processing.\n[…]\nSemecarpus anacardium (the Oriental Anacardium), a native of India and closely related to the cashew\n[…]\nMedia related to Anacardium occidentale at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cajueiro",
        "situacao": "ok",
        "texto": "O cajueiro (nome científico Anacardium occidentale) é uma planta  da família Anacardiaceae originária da região nordeste do Brasil, com arquitetura de copa tortuosa e de diferentes portes. Na natureza existem dois tipos: o comum (ou gigante) e o anão. O tipo comum pode atingir entre 5 e 12 metros de altura, mas em condições muito propícias pode chegar a 20 metros. O tipo anão possui altura média d\n[…]\nSeu fruto, a castanha de caju, tem uma forma semelhante a um rim humano; a amêndoa contida no interior da castanha, quando seca e torrada, é popularmente conhecida como castanha-de-caju. Prologando-se ao fruto, existe um pedúnculo (seu pseudofruto) maior, macio, piriforme, também comestível, de cor alaranjada ou avermelhada; é geralmente confundido como fruto.\n[…]\nAlém do fruto, a casca da árvore é também utilizada como adstringente e tônico.\n[…]\nAs sementes (castanhas com casca) possuem baixa germinação quando semeadas diretamente; devem ser tratadas para eliminar os inibidores de germinação; isso pode ser obtido deixando-as em repouso dentro da água durante 48 horas, porém trocando-se a água a cada 8 horas. Semeá-las em seguida diretamente em embalagens individuais contendo substrato arenoso enriquecido de matéria orgânica. A emergência demora 10 a 20 dias e a germinação geralmente é alta.\n[…]\nO suco de seu fruto é industrializado e altamente apreciado em todo o país. A casca da castanha fornece um óleo industrial. É planta indispensável nos pomares da costa litorânea brasileira. As flores são melíferas.\n[…]\nAlgumas partes do cajueiro e do próprio caju já eram muito usadas como alimento ou medicina tradicional por várias comunidades indígenas nordestinas. Atualmente, o povo Fulni-Ô ainda faz grande uso dessa planta tradicional.\n[…]\nÉ muito cultivado nas regiões tropicais da América, África e Ásia. Os maiores exportadores mundiais de amêndoa de castanha de caju (ACC) são Índia, Vietnã e Brasil.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Manga",
      "descricao": "Fruta tropical da mangueira (Mangifera indica), de origem no sul da Ásia."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas frutas tropicais tem o título de fruta nacional da Índia?",
    "resposta": "Manga",
    "distratores": [
      "Banana",
      "Jaca",
      "Coco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mango"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mango",
        "situacao": "ok",
        "texto": "A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It originated in the area between the northeastern part of the Indian subcontinent and Myanmar. M. indica has been cultivated in South and Southeast Asia since ancient times, resulting in two modern mango cultivar lineages: the \"Indian\" and the \"Southeast Asian\" types. Other species in the genus Mangifera also produce\n[…]\nThe English word mango (plural mangoes or mangos) originated in the 16th century from the Malay word manga, from the Malayalam manga, and ultimately from the Tamil māṉ (மான், 'mango tree') + kāy (காய், 'unripe fruit/vegetable').\n[…]\nIt was previously believed that mangoes originated from a single domestication event in South Asia before being spread to Southeast Asia, but a 2019 study found no evidence of a center of diversity in India. Instead, it identified a higher unique genetic diversity in Southeast Asian cultivars than in Indian cultivars, indicating that mangoes may have originally been domesticated first in Southeast Asia before being introduced to South Asia.\n[…]\nHowever, the authors cautioned that the diversity in Southeast Asian mangoes might be the result of other reasons (like interspecific hybridization with other Mangifera species native to the Malesian ecoregion). Nevertheless, the existence of two distinct genetic populations identified by the study indicates that the domestication of the mango is more complex than previously assumed and would at least indicate multiple domestication events in Southeast Asia and South Asia.\n[…]\nOther species in the genus Mangifera also produce edible fruit called \"mangoes\", most of which are found in the Malesian ecoregion.\n[…]\nIn 2023, world production of mangoes, mangosteens and guavas was 61 million tonnes, led by India with 43% of the total, and Indonesia and China as secondary producers.\n[…]\nSorting Mangifera species"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Manga_%28fruta%29",
        "situacao": "ok",
        "texto": "A manga é o fruto da mangueira (Mangifera indica L.), árvore frutífera da família Anacardiaceae, nativa do sul e do sudeste asiático  desde o leste da Índia até as Filipinas, e introduzida com sucesso no Brasil, em Angola, em Moçambique, Portugal e Espanha.\n[…]\nA manga é a fruta nacional da Índia, onde há mais de 100 variedades, São encontradas menções a ela em canções do século IV em poemas escritos em sânscrito, por poetas como Kalidasa. Se acredita ter sido provada por Alexandre, o Grande (século III a.C.) e o peregrino chinês Xuanzang (século VII d.C.). Mais tarde, no século XVI, o imperador mogol Akbar plantou 100.000 árvores de manga em Darbhanga, Bihar em um lugar agora conhecido como Lakhi Bagh.\n[…]\nNa Índia, onde a manga é a fruta nacional, acredita-se que as mangas estancam hemorragia, fortalecem o coração e trazem benefícios ao cérebro. É também utilizada em afecções pulmonares (bronquite asmática, bronquite catarral e tosse), gengivas inflamadas (gengivites, feridas na boca e no canto dos lábios), úlcera de decúbito (escaras), e úlceras varicosas. A mangiferina, foi assim nomeada por ter sido identificada pela primeira vez na manga.\n[…]\nPodem ser cultivadas em climas tropicais e subtropicais. Devem ser plantadas em uma área com boa drenagem e um solo ligeiramente ácido. Devem ser regadas regularmente quando jovens, porém, ao atingirem a maturidade, devem ser regadas com intervalos entre 10 e 15 dias. Cerca de 4 a 5 meses após a floração, as mangas estão maduras. Quando a manga já chegou em seu tamanho final e está pronta para ser colhida, ela se torna fácil de ser tirada do pé, com um simples puxão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Morango",
      "descricao": "Fruto do morangueiro, Fragaria × ananassa, um pseudofruto com aquênios na superfície"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O morango cultivado hoje surgiu na França, no século dezoito, do cruzamento de uma espécie norte-americana com outra trazida de que país?",
    "resposta": "Chile",
    "distratores": [
      "Peru",
      "Argentina",
      "México"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Garden_strawberry"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Garden_strawberry",
        "situacao": "ok",
        "texto": "The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid plant cultivated worldwide for its fruit. The genus Fragaria, the strawberries, is in the rose family, Rosaceae. The fruit is appreciated for its aroma, bright red colour, juicy texture, and sweetness. It is eaten either fresh or in prepared foods such as jam, ice cream, and chocolates. Artificial strawberry\n[…]\nThe garden strawberry was first bred in Brittany, France, in the 1750s via a cross of F. virginiana from eastern North America and F. chiloensis, which was brought from Chile by Amédée-François Frézier in 1714. Cultivars of F. × ananassa have replaced the musk strawberry F. moschata in commercial production. In 2024, world production of strawberries exceeded ten million tons, led by China with 38% of the total.\n[…]\nIn Europe, until the 17th century cultivated plants were obtained by transplanting strawberries from the forests; the plants were propagated asexually by pegging down the runners, allowing them to root, and then separating the new plants. F. virginiana, the Virginia strawberry, was brought to Europe from eastern North America; F. chiloensis, the Chilean strawberry, was brought from Chile by Amédée-François Frézier in 1714.\n[…]\nStrawberry plants are subject to many diseases, especially when subjected to stress. The leaves may be infected by powdery mildew, leaf spot (caused by the fungus Sphaerella fragariae), leaf blight (caused by the fungus Phomopsis obscurans), and by a variety of slime molds. The crown and roots may fall victim to red stele, verticillium wilt, black root rot, and nematodes. The fruits are subject to damage from gray mold (Botrytis cinerea), rhizopus rot, and leather rot.\n[…]\nFragaria × ananassa data from GRIN Taxonomy Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Morango",
        "situacao": "ok",
        "texto": "Morango (Fragaria × ananassa) é considerado, na linguagem vulgar, como o fruto vermelho do morangueiro, da família das rosáceas. No entanto, em termos científicos não se pode considerar um fruto já que é constituído pelo receptáculo da flor original (composta), em volta do qual se dispõem os frutos (as sementes são visíveis sob a forma de grainhas).\n[…]\nO morango jardim foi criado pela primeira vez na Bretanha, no noroeste da França, na década de 1750 por meio de um cruzamento de Fragaria virginiana do leste da América do Norte  com a variedade  Fragaria chiloensis, que fora trazida do Chile por Amédée-François Frézier em 1714.\n[…]\nExistem várias espécies de morango, sendo a fragaria a mais comum e cultivada em várias partes do mundo.\n[…]\nFragaria daltoniana\n[…]\nFragaria moschata\n[…]\nFragaria vesca\n[…]\nFragaria virginiana\n[…]\nFragaria viridis\n[…]\nAtibaia é amplamente reconhecida como a “Capital Nacional do Morango”. O cultivo comercial da fruta tem raízes na década de 1950, introduzido por imigrantes japoneses (famílias Kikuti, Urashima e outras) e aperfeiçoado ao longo de décadas, com desenvolvimento de viveiros e seleção de cultivares como Camino Real, Camarosa e San Andreas.\n[…]\nAtibaia possui cerca de 180 famílias produtoras, cultivando aproximadamente 3 milhões de pés de morango e gerando uma produção anual estimada em 3 mil toneladas.\n[…]\nEstiva, localizada no Sul de Minas Gerais, é conhecida como a “Terra do Morango”. O cultivo local teve início em 1963, com pioneiros do bairro Ribeirão das Pedras, como Osvaldinho e outros produtores que trouxeram técnicas de Atibaia e São Paulo.\n[…]\nEsse protagonismo se deve ao clima favorável, à topografia montanhosa e ao uso intensivo de tecnologia no cultivo, especialmente em regiões como Estiva, que tradicionalmente se destaca pelo pioneirismo na introdução do morango em solo mineiro desde a década de 1960.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Tomate",
      "descricao": "Fruto do tomateiro (Solanum lycopersicum), consumido como hortaliça."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1893, numa disputa sobre impostos de importação, que instituição americana decidiu que o tomate seria tratado como hortaliça, e não como fruta?",
    "resposta": "Suprema Corte",
    "distratores": [
      "Congresso americano",
      "Casa Branca",
      "Departamento de Agricultura"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nix_v._Hedden"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nix_v._Hedden",
        "situacao": "ok",
        "texto": "Nix v. Hedden, 149 U.S. 304 (1893), is a decision by the Supreme Court of the United States in which the Court unanimously held that tomatoes should be classified as vegetables rather than fruits for purposes of tariffs, imports and customs. Justice Horace Gray delivered the opinion of the Court in holding that the Tariff Act of 1883 used the ordinary meaning of the words \"fruit\" and \"vegetable\", \n[…]\nJustice Gray, citing several Supreme Court cases (Brown v. Piper, 91 U.S. 37, 42, and Jones v. U.S., 137 U.S. 202, 216) stated that when words have acquired no special meaning in trade or commerce, the ordinary meaning must be used by the court. In this case dictionaries cannot be admitted as evidence, but only as aids to the memory and understanding of the court.\n[…]\nNix has been cited in three Supreme Court decisions as a precedent for court interpretation of common meanings, especially dictionary definitions. (Sonn v. Maggone, 159 U.S. 417 (1895); Saltonstall v. Wiebusch & Hilger, 156 U.S. 601 (1895); and Cadwalader v. Zeh, 151 U.S. 171 (1894)). Additionally, in JSG Trading Corp. v. Tray-Wrap, Inc., 917 F.2d 75 (2d Cir. 1990), a case unrelated to Nix aside from the shared focus on tomatoes, a judge wrote the following paragraph citing the case:\n[…]\nIn common parlance tomatoes are vegetables, as the Supreme Court observed long ago [see Nix v. Hedden 149 U.S. 304, 307, 13 S.Ct. 881, 882, 37 L.Ed. 745 (1893)], although botanically speaking they are actually a fruit. [26 Encyclopedia Americana 832 (Int'l. ed. 1981)]. Regardless of classification, people have been enjoying tomatoes for centuries; even Mr. Pickwick, as Dickens relates, ate his chops in \"tomata\" sauce.\n[…]\nList of United States Supreme Court cases, volume 149\n[…]\nText of Nix v. Hedden, 149 U.S. 304 (1893) is available from: Findlaw  Justia  Library of Congress"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Batata",
      "descricao": "Tubérculo comestível da planta Solanum tuberosum, nativa dos Andes"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Batatas expostas à luz ficam esverdeadas e acumulam uma substância tóxica, por isso as partes verdes devem ser descartadas. Que substância é essa?",
    "resposta": "Solanina",
    "distratores": [
      "Ricina",
      "Nicotina",
      "Capsaicina"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Solanine",
      "https://en.wikipedia.org/wiki/Potato"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Solanine",
        "situacao": "ok",
        "texto": "Solanine is a glycoalkaloid poison found in species of the nightshade family within the genus Solanum, such as the potato (Solanum tuberosum). It can occur naturally in any part of the plant, including the leaves, fruit, and tubers. Solanine has pesticidal properties, and it is one of the plant's natural defenses. Solanine was first isolated in 1820 from the berries of the European black nightshad\n[…]\nThere are several proposed mechanisms of how solanine causes toxicity in humans, but the true mechanism of action is not well understood. Solanum glycoalkaloids have been shown to inhibit cholinesterase, disrupt cell membranes, and cause birth defects. One study suggests that the toxic mechanism of solanine is caused by the chemical's interaction with mitochondrial membranes.\n[…]\nSolanine is a glycoalkaloid poison created by various plants in the genus Solanum, such as the potato plant. When the plant's stem, tubers, or leaves are exposed to sunlight, it stimulates the biosynthesis of solanine and other glycoalkaloids as a defense mechanism so it is not eaten. It is therefore considered to be a natural pesticide.\n[…]\nThe average potato has 0.075 mg solanine/g potato, which is equal to about 0.18 mg/kg based on average daily potato consumption.\n[…]\nThe United States National Institutes of Health's information on solanine strongly advises against eating potatoes that are green below the skin.\n[…]\nFatalities are also known from solanine poisoning from other plants in the nightshade family, such as the berries of Solanum dulcamara (woody nightshade).\n[…]\nDorothy L. Sayers's short story \"The Leopard Lady\", in the 1939 collection In the Teeth of the Evidence, features a child poisoned by potato berries injected with solanine to increase their toxicity.\n[…]\nInio Asano named one of his manga after the chemical: Solanin.\n[…]\nSolanidine\n[…]\na-Chaconine and a-Solanine, Review of Toxicological Literature"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Potato",
        "situacao": "ok",
        "texto": "The potato () is a starchy tuberous vegetable native to the Americas that is consumed as a staple food in many parts of the world. Potatoes are underground stem tubers of the plant Solanum tuberosum, a perennial in the nightshade family Solanaceae.\n[…]\nLike the tomato and the nightshades, the potato is in the genus Solanum. The aerial parts of the potato contain the toxin solanine. Normal potato tubers that have been grown and stored properly produce glycoalkaloids in negligible amounts, but if sprouts and potato skins are exposed to light, tubers can become toxic.\n[…]\nThe English word \"potato\" comes from Spanish patata, in turn from Taíno batata, which means \"sweet potato\", not the plant now known as simply \"potato\".\n[…]\nNew tubers may start growing at the surface of the soil. Since exposure to light leads to an undesirable greening of the skins and the development of solanine as a protection from the sun's rays, growers cover surface tubers. Commercial growers cover them by piling additional soil around the base of the plant as it grows (called \"hilling\" up, or in British English \"earthing up\").\n[…]\nRaw potatoes contain toxic glycoalkaloids, of which the most prevalent are solanine and chaconine. Solanine is found in other plants in the same family, Solanaceae, which includes such plants as deadly nightshade (Atropa belladonna), henbane (Hyoscyamus niger) and tobacco (Nicotiana spp.), as well as food plants like tomato. These compounds, which protect the potato plant from its predators, are especially concentrated in the aerial parts of the plant.\n[…]\nHowever, when these commercial varieties turn green, their solanine concentrations can go well above this limit, with higher levels in the potato's skin."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Solanina",
        "situacao": "ok",
        "texto": "A solanina é um glicoalcalcaloide, tóxico de sabor amargo que apresenta fórmula molecular  C45H73NO15. É formado por um alcaloide, a  solanidina, e por uma cadeia lateral de um carbo-hidrato. É encontrado de modo natural em  folhas, frutos e tubérculos de algumas plantas (por exemplo, a batata e o  tomate). Acredita-se que as plantas a sintetizam para protegerem-se dos predadores.\n[…]\nA intoxicação por solanina é caracterizada por alterações gastrointestinais (diarreia, vômito e dor abdominal) e neurológicas (alucinações, dor de cabeça, etc.). A dose tóxica é de 2-5 mg por quilograma de peso corporal. Os sintomas se manifestam de  8 a 12 horas após a ingestão.\n[…]\n«Solanina - Toxicologia»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Batata",
      "descricao": "Tubérculo comestível da planta Solanum tuberosum, nativa dos Andes"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Botanicamente, qual destes alimentos que crescem debaixo da terra é um caule, e não uma raiz?",
    "resposta": "Batata",
    "distratores": [
      "Cenoura",
      "Mandioca",
      "Beterraba"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tuber",
      "https://en.wikipedia.org/wiki/Potato"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tuber",
        "situacao": "ok",
        "texto": "Tubers are a type of enlarged structure that plants use as storage organs for nutrients, derived from stems or roots. Tubers help plants perennate (survive winter or dry months), provide energy and nutrients, and are a means of asexual reproduction.\n[…]\nSome stem tubers are long-lived, such as those of tuberous begonias, but many plants have tubers that survive only until the plants have fully leafed out, at which point the tuber is reduced to a shriveled-up husk.\n[…]\nEven though legumes are not commonly associated with forming stem tubers, Lathyrus tuberosus is an example native to Asia and Europe, where it was once grown as a crop.\n[…]\nA root tuber, tuberous root or storage root is a modified lateral root, enlarged to function as a storage organ. The enlarged area of the tuber can be produced at the end or middle of a root or involve the entire root. It is thus different in origin, but similar in function and appearance, to a stem tuber. Plants with tuberous roots include the sweet potato (Ipomoea batatas), cassava, dahlia, and Sagittaria (arrowhead) species.\n[…]\nTuberous roots are biennial in duration: the plant produces tubers the first year, and at the end of the growing season, the shoots often die, leaving the newly generated tubers; the next growing season, the tubers produce new shoots. As the shoots of the new plant grow, the stored reserves of the tuber are consumed in the production of new roots, stems, and reproductive organs; any remaining root tissue dies concurrently to the plant's regeneration of the next generation of tubers."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Potato",
        "situacao": "ok",
        "texto": "The potato () is a starchy tuberous vegetable native to the Americas that is consumed as a staple food in many parts of the world. Potatoes are underground stem tubers of the plant Solanum tuberosum, a perennial in the nightshade family Solanaceae.\n[…]\nThe English word \"potato\" comes from Spanish patata, in turn from Taíno batata, which means \"sweet potato\", not the plant now known as simply \"potato\".\n[…]\nLike the tomato, potatoes belong to the genus Solanum, which is a member of the nightshade family, the Solanaceae. That is a diverse family of flowering plants, often poisonous, that includes the mandrake (Mandragora), deadly nightshade (Atropa), and tobacco (Nicotiana), as shown in the outline phylogenetic tree (many branches omitted). The most commonly cultivated potato is S. tuberosum; there are several other species.\n[…]\nA 2025 study by Zhang et al. examining Solanum genomes groups all species of potato under S. tuberosum. According to the study, the Petota (potato) lineage contains more than 55 diploid species, with only one being selected by humans for domestication; the study posits that all landraces branch out from a single point within Solanum candolleanum.\n[…]\nThe earliest archaeologically verified potato tuber remains have been found at the coastal site of Ancon (central Peru), dating to 2500 BC. The most widely cultivated variety, Solanum tuberosum tuberosum, is indigenous to the Chiloé Archipelago, and has been cultivated by the local indigenous people since before the Spanish conquest.\n[…]\nIn the 2015 science fiction film The Martian, the protagonist, a stranded astronaut and botanist named Mark Watney, cultivates potatoes on Mars using Martian soil fertilized with frozen feces."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tub%C3%A9rculo",
        "situacao": "ok",
        "texto": "Em botânica, tubérculo se refere ao caule arredondado que algumas plantas verdes desenvolvem abaixo da superfície do solo como órgãos de reserva de energia (em geral amido e inulina). Os exemplos mais conhecidos são as batatas-inglesas\n[…]\nSão usados ​​pelas plantas para sobreviver ao inverno ou meses mais secos, fornecendo energia e nutrientes durante a próxima estação de crescimento. Além disso servem como um meio de reprodução assexuada. Possuem pequenas folhas escamosas e gemas minúsculas conhecidas como \"olhos\" (tecnicamente, abrolhos, isto é pequenas gemas ou gomos). Esses \"olhos\" brotam, dando origem a novos caules, que retiram seu alimento do tubérculo, até que as próprias raízes e folhas se formem.\n[…]\nBatata-inglesa;\n[…]\nBegônia tuberosa;\n[…]\nTubérculos são diferentes de raízes tuberosas como a batata-doce, a beterraba, a cenoura ou a mandioca, que armazenam seus nutrientes na própria raiz, muito mais desenvolvida que a dos tubérculos. Também se diferenciam de bulbos como cebolas e alho, que apesar de usarem parte do caule, também usam folhas modificadas, conhecidas como catáfilos para armazenar nutrientes.\n[…]\nRaiz tuberosa\n[…]\nQual a diferença entre raiz tuberosa, bulbos e tubérculos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Champignon",
      "descricao": "Cogumelo cultivado branco, Agaricus bisporus, o mais consumido no mundo."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O cogumelo portobello, grande e marrom, tem que relação com o champignon branco dos supermercados?",
    "resposta": "Mesma espécie, mais madura",
    "distratores": [
      "Parasita do champignon",
      "Híbrido com shiitake",
      "Parente venenoso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Agaricus_bisporus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Agaricus_bisporus",
        "situacao": "ok",
        "texto": "Agaricus bisporus, the cultivated mushroom, is a basidiomycete mushroom native to grasslands in Eurasia and North America. It is cultivated in more than 70 countries and is one of the most commonly and widely consumed mushrooms in the world. It has two color states while immature – white and brown – both of which have various names, with additional names for the mature state, such as chestnut, por\n[…]\nA more common and less dangerous mistake is to confuse Agaricus bisporus with A. xanthodermus, an inedible mushroom found worldwide in grassy areas. A. xanthodermus has an odor reminiscent of phenol; its flesh turns yellow when bruised. This fungus causes nausea and vomiting in some people.\n[…]\nThe common mushroom has a complicated taxonomic history. It was first described by English botanist Mordecai Cubitt Cooke in his 1871 Handbook of British Fungi, as a variety (var. hortensis) of Agaricus campestris. Danish mycologist Jakob Emanuel Lange later reviewed a cultivar specimen, and dubbed it Psalliota hortensis var. bispora in 1926. In 1938, it was promoted to species status and renamed Psalliota bispora.\n[…]\nEmil Imbach (1897–1970) imparted the current scientific name of the species, Agaricus bisporus after the genus Psalliota was renamed to Agaricus in 1946. The specific epithet bispora distinguishes the two-spored basidia from four-spored varieties.\n[…]\nchampignon (French for mushroom) de Paris\n[…]\nThis mushroom is widespread worldwide, fruiting from autumn to winter, especially in association with cypress, rich soil, compost, and manure.\n[…]\nA. bisporus mushrooms are 92% water, 3% carbohydrates, 3% protein, and contain negligible fat.\n[…]\nWhile fresh A. bisporus only contains 0.2 micrograms (8 IU) of vitamin D per 100 g, the ergocalciferol (D2) content increases substantially to 11.2 micrograms (446 IU) after exposure to UV light.\n[…]\nList of Agaricus species"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Champignon",
        "situacao": "ok",
        "texto": "O champignon, também chamado champignon de Paris, é um cogumelo comestível da família das agaricáceas, género Agaricus ou, no sentido estrito, pertencente às espécies Agaricus bisporus ou A. bitorquis, A. campestris, entre outras.\n[…]\nDentre as variantes da mesma espécie mais conhecidas no Brasil existe o cogumelo portobello que é uma versão mais madura e crescida.\n[…]\nA produção deste tipo de cogumelo é feita em composto orgânico à base de capins, bagaço de cana, palhas de arroz e/ou trigo e/ou soja e/ou milho, onde primeiramente é feita uma hidratação da mistura e a correção do pH por meio de calcário, na sequência é feita uma compostagem para transformação da celulose e lignocelulose em proteínas e outros nutrientes que serão digeridos pelo fungo e posteriormente é feita a pasteurização do composto e a “semeadura” do fungo.\n[…]\nAs condições climáticas são de suma importância em cada fase do cultivo, sendo nas fases de incubação do composto e da terra de cobertura em torno de 23 graus celsius e 92% de umidade relativa e no período de crescimento dos cogumelos (corpos de frutificação) de 16 graus celsius e 85% de umidade relativa do ar. É também necessária a circulação de ar para ocorrer a evapotranspiração nos cogumelos o que é fundamental para o crescimento destes.\n[…]\nOs cogumelos podem ser conservados por dez dias em refrigerador/frigorífico (4°C), desde que não estejam lavados. Geralmente, são embalados em bandejas de isopor/esferovite, recobertos por filme de PVC.\n[…]\nEste Cogumelo in natura é muito mais sadio, pois não leva nenhum agente de branqueamento (bissulfito de sódio) e conserva muito mais o seu sabor original, pois também dispensa conservante (ácido cítrico).\n[…]\nEspécies do gênero Agaricus",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Shiitake",
      "descricao": "Cogumelo comestível marrom do Leste Asiático, Lentinula edodes."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em japonês, shiitake quer dizer cogumelo do shii. O que é o shii?",
    "resposta": "Uma árvore",
    "distratores": [
      "Uma montanha",
      "Uma cidade",
      "Um imperador"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shiitake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shiitake",
        "situacao": "ok",
        "texto": "The shiitake (; Japanese: [ɕiꜜːtake]  Chinese mushroom, black mushroom, Lentinula edodes or sometimes Lentinus edodes) is an edible mushroom native to East Asia and mainland Southeast Asia, which is cultivated and consumed around the globe. The earliest written records of their cultivation dates to 1209, during the Song dynasty in China.\n[…]\nLentinus edodes (Berk.) Singer (1941)\n[…]\nLentinus shiitake (J.Schröt.) Singer (1936)\n[…]\nThe mushroom's Japanese name shiitake (椎茸) is a compound word composed of shii (椎, Castanopsis), for the tree Castanopsis cuspidata that provides the dead logs on which it is typically cultivated, and take (茸; \"mushroom\"). The specific epithet edodes is the Latin word for \"edible\".\n[…]\nShiitake grow in groups on the decaying wood of deciduous trees, particularly shii and other chinquapins, chestnut, oak, maple, beech, sweetgum, poplar, hornbeam, ironwood, and mulberry. Its natural distribution includes warm and moist climates in Southeast Asia.\n[…]\nThe Japanese cultivated the mushroom by cutting shii trees with axes and placing the logs by trees that were already growing shiitake or contained shiitake spores. Before 1982, the Japan Islands' variety of these mushrooms could only be grown in traditional locations using ancient methods. A 1982 report on the budding and growth of the Japanese variety revealed opportunities for commercial cultivation in the United States.\n[…]\nThis effect – presumably caused by lentinan, a polysaccharide – is more common in East Asia, but may be growing in occurrence in Europe as shiitake consumption increases. Thorough cooking may eliminate the allergenicity.\n[…]\nLike all mushrooms, shiitakes produce vitamin D2 upon exposure of their internal ergosterol to ultraviolet B (UVB) rays from sunlight or broadband UVB fluorescent tubes.\n[…]\nMedia related to Lentinula edodes at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shiitake",
        "situacao": "ok",
        "texto": "O shiitake  (Lentinula edodes) é um cogumelo comestível nativo do  leste da Ásia. A espécie é hoje em dia o segundo cogumelo comestível mais consumido no mundo, tradicionalmente incorporado nos hábitos alimentares dos povos asiáticos. Atualmente, também é produzido e consumido nos países ocidentais.\n[…]\nA palavra \"shiitake\" tem origem no japonês shii (uma árvore parecida com carvalho) e take (cogumelo). A primeira referência histórica do consumo de shiitake data de 199 AD. No Brasil começou ser cultivado no início da década de 1990.\n[…]\nNa natureza, o shiitake pode ser encontrado em florestas asiáticas, onde se desenvolve em árvores. É um fungo aeróbio, decompositor de madeira, que degrada celulose e lignina para obter energia.\n[…]\nEm outra forma de cultivo, a inoculação dos micélios é feita em toras, sendo usadas principalmente toras de eucalipto e carvalho japonês, mas também podem ser usadas outras espécies, como castanheira portuguesa, abacateiro e mangueira.\n[…]\nO shiitake pode ser conservado por 10 a 15 dias em refrigerador (4 °C). Geralmente, são embalados em bandejas de isopor (200g), recobertos por filme de PVC, ou em pequenas caixas de papelão.\n[…]\nO shiitake pode ser preparado em sopas, molhos, saladas, hambúrgueres e até empanado. Pode ser preparado de modo parecido a da carne.\n[…]\nOutros tipos: Champignon, Agaricus blazei, Auricularia erinaceus, Buna shimeji, Coprinus, Flammulina velutipes, Ganoderma lucidum, Hericum erinaceus, Maitake, Nameko, Pleurotus-salmão, Pleurotus citrinopileatus, Pleurotus cystidiosus, Pleurotus djamor, Pleurotus eryngii, Pleurotus euosmus, Pleurotus tuberregium, Stropharia rugosoannulata, Shirotomagiotake, Cardoncello, Shiitake, Shimeji-branco, Shimeji-preto, Tremella fuciformis, Volvariella volvacea",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Trufa",
      "descricao": "Corpo de frutificação subterrâneo de fungos do gênero Tuber, muito valorizado na culinária"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre as trufas, fungos subterrâneos de luxo, qual tipo costuma alcançar os preços mais altos?",
    "resposta": "Trufa-branca de Alba",
    "distratores": [
      "Trufa-negra do Périgord",
      "Trufa-de-verão",
      "Trufa-do-deserto"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tuber_magnatum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tuber_magnatum",
        "situacao": "ok",
        "texto": "Tuber magnatum, the white truffle (Italian:  tartufo bianco d'Alba), is a species of truffle in the order Pezizales and family Tuberaceae. It is mainly found in Italy, but also in other parts of Southern Europe, as well as  Thailand.\n[…]\nThe most common host plants cited in the literature are oaks, including associations with Mediterranean species (Q. pubescens, Q. cerris and Q. ilex) and temperate species (Q. robur and Q. petraea). The second most common host plant cited are poplars, mainly Populus alba (about 13%) but also P. nigra, P. tremula, P. canadensis and P. deltoides. Among willows, four species are listed: Salix caprea, S. alba, S. purpurea and S. apennina.\n[…]\nLess commonly, they are associated with five other species of host plants, each from different genera: Abies alba (conifer), Alnus cordata, Fagus sylvatica, Pyrus pyraster and Ulmus minor.\n[…]\nItalian white truffles are very highly esteemed and are the most valuable on the market. The white truffle market in Alba is busiest in the months of October and November when the Fiera del Tartufo (truffle fair) takes place. In 2001, T. magnatum truffles sold for between $2,200–$4,800 per kilogram ($1,000–$2,200 per pound); as of December 2009, they were being sold at $14,203.50/kg.\n[…]\nOn the Asti market in 2012, more than 90% of the truffles did not come from Alba and about 75% of the white truffles supposedly from Piedmont came from other Italian regions. Tuber oligospermum, that grows well in Tunisia's dry sand and not deemed of any culinary value in Italy, is sold as T. magnatum. In some cases, scent is enhanced with such petroleum-based essence as bis(methylthio)methane which is harmful to human health.\n[…]\nData related to Tuber at Wikispecies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trufa-branca",
        "situacao": "ok",
        "texto": "Tuber magnatum, comumente conhecida como trufa-branca (em italiano: tartufo bianco d'Alba), é uma espécie de trufa da ordem Pezizales e família Tuberaceae. É encontrada no sul da Europa e foi encontrada pela primeira vez na Ásia em 2017, na Tailândia.\n[…]\nAs trufas-brancas italianas são muito valorizadas e são as mais valiosas no mercado. O mercado de trufas-brancas em Alba é mais movimentado nos meses de outubro e novembro, quando ocorre a Fiera del Tartufo (feira de trufas). Em 2001, as trufas Tuber magnatum foram vendidas por entre U$2.200-4.800 por quilo.\n[…]\nEm dezembro de 2007, foi estabelecido um preço recorde pago por uma única trufa-branca quando o proprietário de um cassino em Macau, Stanley Ho, pagou $330.000 por um espécime pesando 1,5 kg. Uma das maiores trufas encontradas em décadas, ela foi desenterrada perto de Pisa, Itália, e vendida em leilão realizado simultaneamente em Macau, Hong Kong e Florença.\n[…]\nDevido ao seu alto preço e ao fato de que T. magnatum não é a única trufa de cor branca (como T. borchii ou T. asa), fraudes são frequentes. As trufas da espécie Tuber borchii [en] que são mais baratas e são vendidas como T. magnatum. Um teste em 2012 mostrou que 15% das trufas de alto preço vendidas como francesas eram um tipo mais barato de trufas provenientes da China.\n[…]\nNo mercado de Asti em 2012, mais de 90% das trufas não vinham de Alba e cerca de 75% das trufas brancas supostamente do Piemonte vinham de outras regiões italianas. Tuber oligospermum, que cresce bem na areia seca da Tunísia e não é considerada de valor culinário na Itália, é vendida como T. magnatum. Em alguns casos, o aroma é intensificado com essências à base de petróleo, como bis(metiltio)metano, que é prejudicial à saúde humana.\n[…]\nTrufa-negra-lisa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Levedura de cerveja",
      "descricao": "Fungo unicelular Saccharomyces cerevisiae, usado na fermentação do pão, do vinho e da cerveja"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Ao fermentar os açúcares da massa, a levedura libera um gás que forma bolhas e faz o pão crescer. Que gás é esse?",
    "resposta": "Gás carbônico",
    "distratores": [
      "Oxigênio",
      "Nitrogênio",
      "Metano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Saccharomyces_cerevisiae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saccharomyces_cerevisiae",
        "situacao": "ok",
        "texto": "Saccharomyces cerevisiae (), also called brewer's yeast or baker's yeast, is a species of yeast (single-celled fungal microorganisms). The species has been instrumental in winemaking, baking, and brewing since ancient times. It is believed to have been originally isolated from the skin of grapes. It is one of the most intensively studied eukaryotic model organisms in molecular and cell biology, mu\n[…]\nTop-fermenting yeast\n[…]\nSaccharomyces cerevisiae is used in brewing beer, when it is sometimes called a top-fermenting or top-cropping yeast. It is so called because during the fermentation process its hydrophobic surface causes the flocs to adhere to CO2 and rise to the top of the fermentation vessel. Top-fermenting yeasts are fermented at higher temperatures than the lager yeast Saccharomyces pastorianus, and the resulting beers have a different flavor from the same beverage fermented with a lager yeast.\n[…]\n\"Fruity esters\" may be formed if the yeast undergoes temperatures near 21 °C (70 °F), or if the fermentation temperature of the beverage fluctuates during the process. Lager yeast normally ferments at a temperature of approximately 5 °C (41 °F) or 278 k, where Saccharomyces cerevisiae becomes dormant. A variant yeast known as Saccharomyces cerevisiae var. diastaticus is a beer spoiler which can cause secondary fermentations in packaged products.\n[…]\nS. cerevisiae is used in baking; the carbon dioxide generated by the fermentation is used as a leavening agent in bread and other baked goods. Historically, this use was closely linked to the brewing industry's use of yeast, as bakers took or bought the barm or yeast-filled foam from brewing ale from the brewers (producing the barm cake); today, brewing and baking yeast strains are somewhat different.\n[…]\nSaccharomyces cerevisiae virus L-A\n[…]\nCategory:Saccharomyces cerevisiae genes\n[…]\nSaccharomyces Genome Database\n[…]\nUniProt – Saccharomyces cerevisiae"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saccharomyces_cerevisiae",
        "situacao": "ok",
        "texto": "Saccharomyces cerevisiae é um organismo eucarioto unicelular que pertence ao reino dos Fungos. É a levedura utilizada na produção do pão e também da cerveja, além de ser usada para a produção de álcool combustível. Uma cepa, modificada geneticamente, também produz bioquerosene e biodiesel.\n[…]\nEla é utilizada como base para muitas indústrias, como a de panificação e de bebidas. Esse fungo é utilizado como fermento biológico, por liberar dióxido de carbono, por exemplo, na massa de pão, fazendo-a crescer.\n[…]\nNo caso das bebidas alcoólicas produzidas pelo processo de fermentação, a Saccharomyces cerevisae converte o açúcar em álcool etílico e também pode contribuir na formação de constituintes secundários responsáveis pelo sabor - é o caso da cerveja, rum e uísque.\n[…]\nÉ um organismo utilizado como modelo no estudo da Bioquímica, Genética e Biologia Celular de eucariotas. Isto porque é de fácil manutenção em laboratório e o conhecimento biológico sobre ela é bem desenvolvido - o seu genoma já foi sequenciado.\n[…]\nHieróglifos egípcios sugerem que, há mais de 5 000 anos, a levedura é utilizada em processos fermentativos, quer na produção de pão, quer na de bebidas alcoólicas. Curiosamente, só em 1857 Louis Pasteur provou que a fermentação resulta da ação de organismos vivos.\n[…]\nSaccharomyces boulardii\n[…]\nLevedura",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Dioneia",
      "descricao": "Planta carnívora Dionaea muscipula, que captura insetos com folhas em forma de armadilha"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Na natureza, a dioneia só existe numa pequena região de pântanos e campos úmidos de que país?",
    "resposta": "Estados Unidos",
    "distratores": [
      "Brasil",
      "Austrália",
      "Indonésia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Venus_flytrap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Venus_flytrap",
        "situacao": "ok",
        "texto": "The Venus flytrap (Dionaea muscipula) is a carnivorous plant native to the temperate and subtropical wetlands of North Carolina and South Carolina, on the East Coast of the United States. Although various modern hybrids have been created in cultivation, D. muscipula is the only species of the monotypic genus Dionaea. It is closely related to the waterwheel plant (Aldrovanda vesiculosa) and the cos\n[…]\nDionaea muscipula occurs naturally only along the coastal plain of North and South Carolina in the U.S., with all known current sites within 90 km (56 mi) of Wilmington, North Carolina. A 1958 survey of herbaria specimens and old documents found 259 sites where the historical record documented the presence of D. muscipula, within 21 counties in North and South Carolina.\n[…]\nPhylogenetic studies using molecular characters place the emergence of carnivory in the ancestors of Dionaea muscipula to 85.6 million years ago, and the development of the snap-trap in the ancestors of Dionaea and its sister genus Aldrovanda to approximately 48 million years ago.\n[…]\nThe species is under Endangered Species Act review by the U.S. Fish & Wildlife Service. The current review commenced in 2018, after an initial \"90-day\" review found that action may be warranted. A previous review in 1993 resulted in a determination that the plant was a \"Potential candidate without sufficient data on vulnerability\". The IUCN Red List classifies the species as \"vulnerable\". The State of North Carolina lists Dionaea muscipula as a species of \"Special Concern–Vulnerable\".\n[…]\nThe U.S. Fish and Wildlife Service has not indicated a timeline to conclude its current review of Dionaea muscipula. The Endangered Species Act specifies a two-year timeline for a species review. However, the species listing process takes 12.1 years on average.\n[…]\nImages and movies of the Venus flytrap (Dionaea muscipula) at ARKive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dioneia",
        "situacao": "ok",
        "texto": "A dioneia, também conhecida como apanha-moscas (Dionaea muscipula), é uma planta carnívora que pega e digere a presa animal (em geral insetos e aracnídeos). A estrutura de captura é formada por dois lóbulos unidos pela base e presos na ponta de cada uma das folhas.\n[…]\nA folha é dividida em duas regiões: uma plana que se ocupa da fotossíntese, e um par de lóbulos unidos pela base, como a concha de uma ostra, preso na outra seção por uma das pontas do fulcro. A superfície interna desses lóbulos (que formam a armadilha em si) contêm um pigmento vermelho, a antocianina, e as suas bordas secretam néctar: estas iscas atraem os insetos, presas da planta.\n[…]\nO mecanismo pelo qual a armadilha dispara e envolve uma complexa interação entre elasticidade, turgidez e crescimento. Quando aberta, a armadilha é convexa, mas quando ativada, ela se torna côncava. É a rápida alternância desses estados que fecha a armadilha, embora a forma exata como isso ocorre ainda seja mal compreendida.\n[…]\nA dioneia é encontrada em pântanos pobres em nitrogênio no sudeste dos Estados Unidos, principalmente no raio de 160 quilômetros de Wilmington, Carolina do Norte.\n[…]\nPlantas semelhantes a dioneias são frequentes em trabalhos ficcionais, geralmente bem maiores e capazes de digerir seres humanos. Provavelmente a mais famosa será Audrey II em Pequena Loja dos Horrores, uma planta que precisa comer pessoas para sobreviver. Outras aparições ficcionais incluem a história em quadrinhos filipina Darna, onde a vilã Flaviana transforma dioneias em monstros como defesa.\n[…]\nHodick, Dieter; Sievers, Andreas. On the mechanism of closure of Venus flytrap (Dionaea muscipula Ellis). Planta (1998)\n[…]\nHodick D, Sievers A. The action potential of Dionaea muscipula Ellis. Planta (1989)\n[…]\nArtigos sobre a Dionaea",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Erva-mate",
      "descricao": "Árvore sul-americana Ilex paraguariensis, cujas folhas são usadas no chimarrão e no tereré"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A erva-mate do chimarrão é do mesmo gênero botânico de que arbusto de frutinhos vermelhos, usado na decoração de Natal?",
    "resposta": "Azevinho",
    "distratores": [
      "Visco",
      "Bico-de-papagaio",
      "Pinheiro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ilex",
      "https://en.wikipedia.org/wiki/Yerba_mate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ilex",
        "situacao": "ok",
        "texto": "Ilex () or holly is a genus of over 570 species of flowering plants in the family Aquifoliaceae, and the only living genus in that family. Ilex has the most species of any woody dioecious angiosperm genus. The species are evergreen or deciduous trees, shrubs, and climbers from tropics to temperate zones worldwide.\n[…]\nThe type species is Ilex aquifolium, the common European holly used in Christmas decorations and cards. Aside, other hollies are desired for other purposes, like yerba mate and yaupon for the beverage made from their leaves.\n[…]\nA species which stands out for its economic importance in Spanish-speaking countries and in Brazil is Ilex paraguariensis or Yerba mate. Having evolved numerous species that are endemic to islands and small mountain ranges, and being highly useful plants, many hollies are now becoming rare.\n[…]\nLeaves of some holly species are used by some cultures to make daily tea. These species are Yerba mate (I. paraguariensis), Ilex guayusa, Kuding (Ilex kaushue), Yaupon (I. vomitoria) and others. Leaves of other species, such as gallberry (I. glabra) are bitter and emetic. In general little is known about inter-species variation in constituents or toxicity of hollies.\n[…]\n× meserveae Blue Prince  = 'Conablu' and Blue Princess = 'Conapri' have gained the Royal Horticultural Society's Award of Garden Merit. Another hybrid is Ilex × koehneana, with the cultivar 'Chestnut Leaf'.\n[…]\nHolly – specifically the European holly, Ilex aquifolium – is commonly referenced at Christmas time, and is often referred to by the name Christ's thorn. In many Western Christian cultures, holly is used as a traditional Christmas decoration, used especially in wreaths and illustrations, for instance on Christmas cards.\n[…]\nIlex root, Gang Mei Gen\n[…]\nAquifoliaceae in BoDD – Botanical Dermatology Database"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Yerba_mate",
        "situacao": "ok",
        "texto": "Yerba mate or yerba maté ( YUR-bə MAH-tay), Ilex paraguariensis, is a plant species of the holly genus native to South America. The leaves of the plant can be steeped in hot water to make a beverage known as mate. Brewed cold, it is used to make tereré. Both the plant and the beverage contain caffeine.\n[…]\nIlex paraguariensis begins as a shrub and then matures to a tree, growing up to 15 meters (50 ft) tall. The leaves are evergreen, 7–110 millimeters (1⁄4–4+3⁄8 in) long and 30–55 millimeters (1+1⁄8–2+1⁄8 in) wide, with serrated margins. The leaves are often called yerba (Spanish) or erva (Portuguese), both of which mean \"herb\". They contain caffeine (known in some parts of the world as mateine) and related xanthine alkaloids, and are harvested commercially.\n[…]\nThe infusion, called mate in Spanish-speaking countries and chimarrão in Brazil, is prepared by filling a container, traditionally a small, hollowed-out gourd (described below), up to three-quarters full with dry leaves (and twigs) of I. paraguariensis, and filling it up with water at a temperature of 70–80 °C (160–175 °F), hot but not boiling. Sugar may or may not be added. The infusion may also be prepared with cold water, in which case it is known as tereré.\n[…]\nParaguayans have a tradition of mixing mate with crushed leaves, stems, and flowers of the plant known as flor de agosto (the flower of August, plants of the genus Senecio, particularly Senecio grisebachii), which contain pyrrolizidine alkaloids. Modifying mate in this fashion is potentially toxic, as these alkaloids can cause veno-occlusive disease, a rare condition of the liver which results in liver failure due to progressive occlusion of the small venous channels.\n[…]\nClub-Mate\n[…]\nYerba Mate Playadito\n[…]\nPlant of the Month: Yerba Mate at JSTOR Daily. January 5, 2023"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ilex",
        "situacao": "ok",
        "texto": "Ilex L. é um género botânico pertencente à família  Aquifoliaceae, ao qual pertencem plantas como o azevinho e a erva-mate (nativa da América do Sul).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Açaí",
      "descricao": "Palmeira amazônica Euterpe oleracea, o açaizeiro, e seu fruto roxo-escuro consumido em polpa."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Além do fruto roxo, o açaizeiro fornece outro alimento, tirado do miolo macio do topo do caule. Qual?",
    "resposta": "Palmito",
    "distratores": [
      "Pinhão",
      "Coco verde",
      "Polvilho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Euterpe_oleracea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Euterpe_oleracea",
        "situacao": "ok",
        "texto": "The açaí palm ( ə-SY-ee, Brazilian Portuguese: [asaˈi] ; from Nheengatu asai), Euterpe oleracea, is a species of palm tree (Arecaceae) cultivated for its fruit (açaí berries, or simply açaí), hearts of palm (a vegetable), leaves, and trunk wood. Global demand for the fruit has expanded rapidly in the 21st century, and the tree is cultivated for that purpose primarily.\n[…]\nIn the binomial nomenclature, the genus Euterpe refers to the tree’s growth habit. Its specific epithet oleracea means \"vegetable\" in Latin, referring to the fruit as edible.\n[…]\nA powdered preparation of freeze-dried açaí fruit pulp and skin was reported to contain (per 100 g of dry powder) 534 calories, 52 g carbohydrates, 8 g protein, and 33 g total fat. The carbohydrate portion included 44 g of dietary fiber with low sugar levels, and the fat portion consisted of oleic acid (56% of total fats), palmitic acid (24%), and linoleic acid (13%). The powder was also shown to contain (per 100 g) negligible vitamin C, 260 mg calcium, 4 mg iron, and 1002 IU vitamin A.\n[…]\nAs of 2008, no açaí products have been evaluated by the FDA, and their efficacy is doubtful.\n[…]\nAçaí oil is suitable for cooking or as a salad dressing, but is mainly used in cosmetics as shampoos, soaps or skin moisturizers.\n[…]\nAçaí oil is green in color, has a bland aroma, and is high in oleic and palmitic fatty acids.\n[…]\nOrally administered açaí has been tested as a contrast agent for magnetic resonance imaging (MRI) of the gastrointestinal system. Its anthocyanins have also been characterized for stability as a natural food coloring agent.\n[…]\nEuterpe edulis\n[…]\nEuterpe precatoria\n[…]\nFeira do Açaí\n[…]\nNicholas Gill. \"How Açaí Helped Save Amazonian Forests\". NewWorlder.\n[…]\nPictures of açaí palms trees and fruit from an article by The Nature Conservancy.\n[…]\n\"Acai 'super-fruit' not so great\". The World, Public Radio International"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A%C3%A7a%C3%AD",
        "situacao": "ok",
        "texto": "O açaí (nome científico: Euterpe oleracea) é uma palmeira muito comum na região da Amazônia que produz um fruto bacáceo de cor roxa (a parede do órgão ovário amadurece e forma a camada externa comestível), muito utilizado na confecção de alimentos e bebidas. A palmeira do açaí é por vezes confundida, no estado do Pará, com a palmeira juçara, que embora seja outro tipo de palmeira, dá palmito de ex\n[…]\nO fruto do açaí, em conjunto com o cupuaçu, são as frutas nacionais do Brasil.\n[…]\nO açaí é muito consumido como suco ou pirão e cujo gomo terminal constitui o palmito. Assim, pode ser consumido na forma de bebidas funcionais, doces, geleias e sorvetes. O fruto é colhido por trabalhadores que sobem nas palmeiras com auxílio de um trançado de folhas amarrado aos pés denominado peconha.\n[…]\nAlém do uso de seus frutos como alimento ou bebida, o açaizeiro tem outros usos comerciais. As folhas podem ser feitas em chapéus, esteiras, cestos, vassouras de palha e telhado para casas, e madeira do tronco, resistentes a pragas, para construção civil. Os troncos da árvore podem ser processados para produzir minerais. O palmito é amplamente explorado como uma iguaria. O óleo de açaí também possui diversas propriedades químicas que causam efeitos benéficos no corpo humano.\n[…]\nAlém do uso da fruta o no processo de verticalização da produção temos também o potencial gerado pelos subprodutos do açaí que tem como base os caroços que são descartados na obtenção da polpa do açaí.\n[…]\nO óleo do açaí é bastante usado tanto para fins culinários quanto para o uso cosmético. Enquanto condimento alimentício é bastante usado para temperar saladas. Seu uso cosmético é empregado para a produção de shampoos e cremes capilares, além de sabonetes e cremes hidratantes para o corpo. Possui alta concentração de antioxidante, 33 vezes mais do que a uva; rico em ácidos graxos essenciais.\n[…]\nÓleo de açaí\n[…]\nFeira do Açaí",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Açaí",
      "descricao": "Palmeira amazônica Euterpe oleracea, o açaizeiro, e seu fruto roxo-escuro consumido em polpa."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo a explicação mais citada, o nome açaí vem do tupi. O que ele significa?",
    "resposta": "Fruta que chora",
    "distratores": [
      "Fruta roxa",
      "Palmeira do rio",
      "Comida de guerreiro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Euterpe_oleracea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Euterpe_oleracea",
        "situacao": "ok",
        "texto": "The açaí palm ( ə-SY-ee, Brazilian Portuguese: [asaˈi] ; from Nheengatu asai), Euterpe oleracea, is a species of palm tree (Arecaceae) cultivated for its fruit (açaí berries, or simply açaí), hearts of palm (a vegetable), leaves, and trunk wood. Global demand for the fruit has expanded rapidly in the 21st century, and the tree is cultivated for that purpose primarily.\n[…]\nIn the binomial nomenclature, the genus Euterpe refers to the tree’s growth habit. Its specific epithet oleracea means \"vegetable\" in Latin, referring to the fruit as edible.\n[…]\nThe oil compartments in açaí fruit contain polyphenols such as procyanidin oligomers and vanillic acid, syringic acid, p-hydroxybenzoic acid, protocatechuic acid, and ferulic acid, which were shown to degrade substantially during storage or exposure to heat. Although these compounds are under study for potential health effects, there remains no substantial evidence that açaí polyphenols have any effect in humans.\n[…]\nAçaí oil is green in color, has a bland aroma, and is high in oleic and palmitic fatty acids.\n[…]\nComprising 80% of the fruit mass, açaí seeds may be ground for livestock food or as a component of organic soil for plants. Planted seeds are used for new palm tree stock, which, under the right growing conditions, can require months to form seedlings. Seeds may become waste in landfills or used as fuel for producing bricks.\n[…]\nOrally administered açaí has been tested as a contrast agent for magnetic resonance imaging (MRI) of the gastrointestinal system. Its anthocyanins have also been characterized for stability as a natural food coloring agent.\n[…]\nEuterpe edulis\n[…]\nEuterpe precatoria\n[…]\nFeira do Açaí\n[…]\nNicholas Gill. \"How Açaí Helped Save Amazonian Forests\". NewWorlder.\n[…]\nPictures of açaí palms trees and fruit from an article by The Nature Conservancy.\n[…]\n\"Acai 'super-fruit' not so great\". The World, Public Radio International"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A%C3%A7a%C3%AD",
        "situacao": "ok",
        "texto": "O açaí (nome científico: Euterpe oleracea) é uma palmeira muito comum na região da Amazônia que produz um fruto bacáceo de cor roxa (a parede do órgão ovário amadurece e forma a camada externa comestível), muito utilizado na confecção de alimentos e bebidas. A palmeira do açaí é por vezes confundida, no estado do Pará, com a palmeira juçara, que embora seja outro tipo de palmeira, dá palmito de ex\n[…]\nO açaí é um alimento muito importante na dieta do nortista brasileiro, onde seu consumo remonta aos tempos pré-colombianos. Hoje em dia, é cultivado não só na Região Amazônica, mas em diversos outros estados brasileiros, tendo sido introduzido no resto do mercado nacional durante os anos 1980 e 1990. Os estados do Pará, Amazonas e Maranhão, no Brasil, são os maiores produtores da fruta, sendo, juntos, responsáveis por mais de 85% da produção mundial.\n[…]\nCom o reconhecimento do açaí como um fruto com elevado poder energético e vitamínico os mercados nacional e internacional despertaram seu interesse pela fruta, promovendo assim um aumento da demanda, que segundo o plano estratégico Pará 2030 a exportação tem tido um crescimento médio de 13% ao ano. Tendo em vista a defasagem natural da oferta uma consequência clara desse aumento do consumo do açaí é sua elevação de preço.\n[…]\nCom a verticalização da produção do açaí temos a expansão do consumo do açaí, sob as mais diversas formas, sendo criadas diversas linhas de produtos tendo em sua composição está fruta que ganha o titulo de \"mainstream\" . Diante desse cenário várias combinações do açaí são desenvolvidas na indústria de cosméticos, alimentação e farmacêutica. Abaixo elencaremos os principais produtos que tem como base o açaí.\n[…]\nAlém do uso da fruta o no processo de verticalização da produção temos também o potencial gerado pelos subprodutos do açaí que tem como base os caroços que são descartados na obtenção da polpa do açaí.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Abacate",
      "descricao": "Fruto do abacateiro, Persea americana, árvore da família das lauráceas nativa do México e da América Central."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O abacate tem uma particularidade entre as frutas: ele só amadurece de verdade depois de quê?",
    "resposta": "Ser colhido",
    "distratores": [
      "Cair sozinho",
      "Pegar sol forte",
      "Passar uma geada"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Avocado"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Avocado",
        "situacao": "ok",
        "texto": "The avocado, alligator pear or avocado pear (Persea americana) is an evergreen tree in the laurel family (Lauraceae). It is native to the Americas, with archaeological evidence of early human avocado use dating back thousands of years across various regions of Central and South America. It was prized for its large and unusually oily fruit.\n[…]\nThe native range of avocado (Persea americana) extends from Mexico to Peru, encompassing much of Central America and parts of northern and western South America.\n[…]\nPersea americana is a tree that grows to 9–20 m (30–66 ft) with a trunk diameter between 0.3–0.6 m (1–2 ft). The leaves are 8–25 cm (3–10 in) long and alternately arranged.\n[…]\nThe species was scientifically named by the British botanist Philip Miller in 1768. The genus Persea to which the avocado belongs is considered to have a North American origin, with Persea suggested to have diversified in Central America during the Pleistocene epoch. The modern avocado is thought to have speciated from other Persea during the Pleistocene, estimated at around either 1.3 million or 430,000 years ago.\n[…]\nIn Central American, Caribbean Spanish-speaking countries, and Spain, it is known by the Spanish name aguacate, while Argentina, Chile, Perú and Uruguay use a Quechua-derived word palta. In Portuguese, it is abacate. The Nahuatl āhuacatl can be compounded with other words, as in ahuacamolli, meaning avocado soup or sauce, from which the Spanish word guacamole derives.\n[…]\nIn addition to the fruit, the leaves of Mexican avocados (Persea americana var. drymifolia) are used in some cuisines as a spice, with a flavor somewhat reminiscent of anise. They are sold both dried and fresh, toasted before use, and either crumbled or used whole, commonly in bean dishes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Persea_americana",
        "situacao": "ok",
        "texto": "O abacateiro, cujo fruto é o abacate, também designado como abacado, abacate, loiro-abacate e louro-abacate, é uma espécie da família Lauraceae, de nome científico Persea americana.\n[…]\nUma árvore adulta pode produzir mais de uma centena de abacates em uma estação, e há sempre o incômodo dos frutos não colhidos que caem no chão, causando grande sujeira e odor ruim. Assim, não é uma árvore recomendada para locais de grande circulação ou arborização de ruas. Os frutos, apesar de nutritivos para os humanos, podem ser tóxicos para alguns animais.\n[…]\nBarlow & Martin (2002) identificam o abacate como um fruto adaptado para uma relação ecológica com mamíferos de grande porte, hoje em dia extintos (por exemplo, os herbívoros gigantes sul americanos, como as preguiças-da-terra e gonfoterídeos). O seu fruto, com um caroço apenas levemente tóxico, terá coevoluído com esses animais já extintos, de modo a ser disperso depois de ingerido por estes e expulso, juntamente com as fezes, pronto a germinar.\n[…]\nraça mexicana: Persea americana Miller var. drymifolia: o fruto tem o menor pedúnculo e casca fina e lisa. é a mais resistente ao frio\n[…]\nraça antilhana: Persea americana Miller var. americana: o fruto tem um pedúnculo curto e casca fina e coriácea é a menos resistente ao frio\n[…]\nA importação de abacates também aumenta o impacto ambiental do abacate, uma vez que este é acondicionado usando muito plástico e tem de ser transportado a uma temperatura constante de 6 °C, o que consome muita energia.\n[…]\nEm Portugal, por causa do impacto ambiental deste fruto, a Agência Portuguesa do Ambiente deu um parecer desfavorável à exploração de mais de 120 hectares de abacates no Algarve.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Araucária",
      "descricao": "Árvore Araucaria angustifolia, o pinheiro-do-paraná, típica do Sul do Brasil"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estas árvores brasileiras, qual é uma gimnosperma, que forma sementes sem produzir frutos?",
    "resposta": "Araucária",
    "distratores": [
      "Ipê-amarelo",
      "Jabuticabeira",
      "Pau-brasil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Araucaria_angustifolia",
      "https://en.wikipedia.org/wiki/Gymnosperm"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Araucaria_angustifolia",
        "situacao": "ok",
        "texto": "Araucaria angustifolia, the Paraná pine, Brazilian pine or candelabra tree, is a critically endangered species of conifer in the family Araucariaceae. Although the common names in various languages refer to the species as a pine, it does not belong in the genus Pinus.\n[…]\nAraucaria angustifolia is a popular garden tree in subtropical areas, planted for its unusual effect of the thick, 'reptilian' branches with a very symmetrical appearance.\n[…]\nWhile A. angustifolia is a main species and dominant in South Brazil, it's also grown as an ornamental plant in parks of towns and cities of Chile, from Santiago to Valdivia. It grows better in low altitudes than the local Araucaria araucana, hence its use as a substitute in the Central Valley and coastal regions of Chile. In some places like the town of Melipeuco A. angustifolia can be seen growing side by side with A. araucana.\n[…]\nThe seeds of A. angustifolia, similar to large pine nuts, are edible, and are extensively harvested in southern Brazil (Paraná, Santa Catarina and Rio Grande do Sul states), an occupation particularly important for the region's small population of natives (the Kaingáng and other Southern Jê). The seeds, called pinhão [piˈɲɐ̃w] are popular as a winter snack. The city of Lages, in Santa Catarina, holds a popular pinhão fair, in which mulled wine and boiled Araucaria seeds are consumed.\n[…]\nThe hybrid Araucaria angustifolia × araucana is thought to have first arisen \"in a plantation forestry environment in Argentina sometime in the late 19th or early 20th century\". It is thus not a natural hybrid as there are more than 1000 km between the natural stands of the two species.\n[…]\nMedia related to Araucaria angustifolia at Wikimedia Commons\n[…]\nData related to Araucaria angustifolia at Wikispecies"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gymnosperm",
        "situacao": "ok",
        "texto": "The gymnosperms (  nə-spurmz, -⁠noh-; from Ancient Greek γυμνός, gymnós 'naked' and σπέρμα, spérma 'seed', thus 'naked seed') are a group of woody, perennial seed-producing plants, typically lacking the protective outer covering which surrounds the seeds in flowering plants, that include conifers, cycads, ginkgos, and gnetophytes, forming the clade Gymnospermae. The name is based on the unenclosed\n[…]\nOrder Araucariales\n[…]\nFamily Araucariaceae: Araucaria, Wollemia, Agathis"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arauc%C3%A1ria",
        "situacao": "ok",
        "texto": "Araucária (nome científico: Araucaria angustifolia) é a espécie arbórea dominante da floresta ombrófila mista, ocorrendo majoritariamente na região Sul e Sudeste do Brasil, principalmente no sul do estado de São Paulo até as serras do Rio Grande do Sul e na Serra da Mantiqueira, mas é presente também ao longo do restante do Planalto Atlântico Paulista, até o sul do estado de Minas Gerais, na Serra\n[…]\nApesar da crença popular de que as araucárias produzem safras abundantes de sementes de forma cíclica, com intervalos de dois a três anos entre grandes safras, nenhum ciclo de produção foi encontrado por Souza e colaboradores. Esta pesquisa utilizou dados de produção de sementes coletados durante 13 anos consecutivos em uma propriedade em Santa Catarina, além de dados comerciais da CEASA de Porto Alegre sobre a produção de municípios gaúchos durante um período de cerca de 30 anos.\n[…]\nA árvore foi eleita como símbolo do estado do Paraná, sendo sua representação extremamente comum no artesanato estadual; deu nome à cidade de Curitiba através de seu apelativo indígena curi (curii-tyba, em tupi-guarani, significa \"muito pinhão\", ou \"muito pinheiro\"); é símbolo também da Serra da Mantiqueira, está nos brasões das cidades de Araucária, São Carlos, Campos do Jordão, Taboão da Serra e Itapecerica da Serra.\n[…]\nA Portaria Normativa DC n° 20 de 27 de setembro de 1976 do Instituto Brasileiro de Desenvolvimento Florestal, definiu várias medidas para a proteção das sementes, disciplinando a colheita e comercialização do pinhão e o proibindo o abate de árvores com pinhas na época da queda de sementes. Mas até meados da década de 1980 ainda não existiam restrições importantes à exploração indiscriminada das florestas de araucária.\n[…]\nMata de Araucária\n[…]\nThe IUCN Red List of Threatened Species 2010.4: Araucaria angustifolia. International Union for Conservation of Nature and Natural Resources, 2010.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Araucária",
      "descricao": "Árvore Araucaria angustifolia, o pinheiro-do-paraná, típica do Sul do Brasil"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que ave, símbolo do Paraná, ajuda a espalhar a araucária ao enterrar pinhões e esquecer alguns deles?",
    "resposta": "Gralha-azul",
    "distratores": [
      "Sabiá-laranjeira",
      "Tucano-toco",
      "Quero-quero"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gralha-azul"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gralha-azul",
        "situacao": "ok",
        "texto": "A gralha-azul (Cyanocorax caeruleus) é uma ave passeriforme da família dos corvídeos, com aproximadamente 40 cm de comprimento, de coloração geral azul vivo, com penas pretas na cabeça, parte frontal do pescoço e no superior do peito. Machos e fêmeas tem a mesma plumagem e aparência embora as fêmeas em geral sejam menores.\n[…]\nO nome gralha-azul foi selecionado como nome vernáculo técnico para a espécie Cyanocorax caeruleus pelo Comitê Brasileiro de Registros Ornitológicos (CBRO) em 2021.\n[…]\nAs gralhas-azuis são aves muito inteligentes, só suplantadas pelos psitacídeos. Sua comunicação, bastante complexa, consta de pelo menos 14 termos vocais (gritos) bem distintos e significantes. Gregárias, as gralhas-azuis formam bandos de 4 a 15 indivíduos hierarquicamente bem organizados, inclusive com divisão de clãs, bandos estes que se mantêm estáveis por até duas gerações.\n[…]\nA gralha-azul é o principal animal disseminador da araucária uma vez que, durante outono, quando as araucárias frutificam, bandos de gralhas laboriosamente estocam os pinhões para se alimentar.\n[…]\nNeste processo, as gralhas-azuis encravam fortemente os pinhões no solo ou em troncos caídos no solo, já em processo de putrefação, ou mesmo nas partes aéreas de raízes nas mesmas condições, local propício para a formação de uma nova árvore.\n[…]\nNas artes, representa o maior prêmio teatral do Paraná: o Troféu Gralha Azul. Há até mesmo dois super-heróis de histórias em quadrinhos: o Gralha e o Capitão Gralha, criados por Gian Danton, Alessandro Dutra, José Aguiar, Antônio Éder, Luciano Lagares, Tako X, Edson Kohatsu, Augusto Freitas e Nilson Müllerr, ambos foram lançados em 1997, em uma edição especial da revista Metal Pesado lançada e homenagem aos 15 anos da Gibiteca de Curitiba.\n[…]\nGralha-azul no site WikiAves"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Lótus",
      "descricao": "Planta aquática Nelumbo nucifera, da família Nelumbonaceae, de grandes flores rosadas, sagrada no hinduísmo e no budismo."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "As folhas do lótus continuam limpas mesmo crescendo na lama, propriedade imitada em tintas e tecidos. Que característica explica isso?",
    "resposta": "Repelem água e sujeira",
    "distratores": [
      "Soltam óleo",
      "Absorvem a lama",
      "Trocam de pele"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lotus_effect"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lotus_effect",
        "situacao": "ok",
        "texto": "The lotus effect refers to self-cleaning properties that are a result of ultrahydrophobicity as exhibited by the leaves of Nelumbo, the lotus flower. Dirt particles are picked up by water droplets due to the micro- and nanoscopic architecture on the surface, which minimizes the droplet's adhesion to that surface.\n[…]\nPlants with a double structured surface like the lotus can reach a contact angle of 170°, whereby the droplet's contact area is only 0.6%. All this leads to a self-cleaning effect.\n[…]\nIn addition to chemical surface treatments, which can be removed over time, metals have been sculpted with femtosecond pulse lasers to produce the lotus effect. The materials are uniformly black at any angle, which combined with the self-cleaning properties might produce very low maintenance solar thermal energy collectors, while the high durability of the metals could be used for self-cleaning latrines to reduce disease transmission.\n[…]\nAlthough the self-cleaning phenomenon of the lotus was possibly known in Asia long before (reference to the lotus effect is found in the Bhagavad Gita), its mechanism was explained only in the late 1970s after the introduction of the scanning electron microscope. Studies were performed with leaves of Tropaeolum and lotus (Nelumbo). Similar to the lotus effect, a recent study has revealed honeycomb-like micro-structures on the taro leaf, which makes the leaf superhydrophobic.\n[…]\nMedia related to Animation of the lotus effect at Wikimedia Commons\n[…]\nVideo showing comparison between plant leaves with and without lotus effect on YouTube\n[…]\nProject Group lotus effect – Nees Institut for biodiversity of plants Friedrich-Wilhelm University of Bonn\n[…]\nScientific American article: \"Self-Cleaning Materials: Lotus Leaf-Inspired Nanotechnology\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Efeito_de_l%C3%B3tus",
        "situacao": "ok",
        "texto": "O efeito de lótus é um fenômeno de superhidrofobia causado por uma rugosidade nanométrica. O seu nome provém do lótus (Nelumbo sp), cujas folhas apresentam esta característica. O efeito de lótus confere à superfície uma repulsa da água com capacidades de limpeza, pois a água quando em contacto arrasta consigo partículas.\n[…]\nOutras plantas, como as folhas de Tropaeolum, de couve, de Phragmites, de (Colocasia esculenta) e de Verbascum thapsus, e certos animais como os patos, em particular nas suas penas, e muitos insetos têm a mesma característica. A capacidade de auto-limpeza das superfícies hidrófobas de estrutura microscópica foi descoberta na década de 1970 e a sua aplicação a produtos biomiméticos deu-se em meados da década de 1990.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Pimenta",
      "descricao": "Fruto picante das plantas do gênero Capsicum, como a malagueta e a jalapeño"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Ao contrário do que muita gente pensa, a maior parte da ardência da pimenta fica em qual parte do fruto?",
    "resposta": "Placenta (parte branca)",
    "distratores": [
      "Sementes",
      "Casca",
      "Cabinho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Capsaicin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Capsaicin",
        "situacao": "ok",
        "texto": "Capsaicin (8-methyl-N-vanillyl-6-nonenamide) (, commonly ) is a toxin that is the main active component of chili peppers and gives them their distinct pungent, \"spicy\" or \"hot\" taste. It is a potent irritant for mammals  for which it produces a sensation of burning in any tissue with which it comes into contact.\n[…]\nCapsaicin is present in large quantities in the placental tissue (which holds the seeds), the internal membranes and, to a lesser extent, the other fleshy parts of the fruits of plants in the genus Capsicum. The seeds themselves do not produce any capsaicin, although the highest concentration of capsaicin can be found in the white pith of the inner wall, where the seeds are attached.\n[…]\nare responsible for identifying leucine as another precursor to the branched-chain fatty acid pathway. It was discovered in 1999 that pungency of chili peppers is related to higher transcription levels of key enzymes of the phenylpropanoid pathway, phenylalanine ammonia lyase, cinnamate 4-hydroxylase, caffeic acid O-methyltransferase. Similar studies showed high transcription levels in the placenta of chili peppers with high pungency of genes responsible for branched-chain fatty acid pathway.\n[…]\nIts evolution over the course of centuries is due to genetic drift and natural selection, across the genus Capsicum. Despite the fact that chilies within the Capsicum genus are found in diverse environments, the capsaicin found within them all exhibits similar properties that serve as defensive and adaptive features. Capsaicin evolved to preserve the fitness of peppers against fungi infections, insects, and granivorous mammals."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Capsaicina",
        "situacao": "ok",
        "texto": "A capsaicina é um composto químico (8-metil-N-vanilil-trans-6-nonamida) e o componente ativo das pimentas conhecidas internacionalmente como pimentas chili, que são plantas que pertencem ao gênero Capsicum. É irritante para os mamíferos, incluindo os humanos, e produz uma sensação de queimadura em qualquer tecido com que entre em contato.\n[…]\nA capsaicina e diversos componentes correlatos são conhecidos como capsaicinoides e são produzidos como um metabólico secundário pelas pimentas chili, provavelmente como barreiras contra os herbívoros. A capsaicina pura é um composto hidrofóbico, incolor, inodoro, de cristalino a graxo.\n[…]\nA capsaicina está presente em grandes quantidades nas sementes e frutos carnosos das plantas do gênero Capsicum. Tais frutos evoluíram tipicamente para auxiliar na dispersão das sementes, atraindo animais que consomem as frutas e engolem as sementes, as quais passam pelo trato digestivo e são subsequentemente depositadas algures.\n[…]\nAs sementes das plantas Capsicum, entretanto, são predominantemente dispersadas por pássaros, nos quais a capsaicina age como analgésico ao invés de irritar, na maioria dos casos com algumas exceções. As sementes das pimentas chili passam através do trato digestivo dos pássaros sem sofrer danos, enquanto as consumidas por mamíferos não germinam de modo algum.\n[…]\nA escala de Scoville, desenvolvida pelo farmacêutico Wilbur Scoville, é uma medida da ardência ou picância de uma pimenta, determinando a quantidade de capsaicina presente na mesma.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Pequi",
      "descricao": "Árvore do Cerrado Caryocar brasiliense, de flores com muitos estames e fruto comestível."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Quem morde com força o caroço do pequi acaba se machucando. O que existe escondido sob a polpa?",
    "resposta": "Espinhos finos",
    "distratores": [
      "Pelos urticantes",
      "Seiva cáustica",
      "Cristais de cálcio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Caryocar_brasiliense",
      "https://pt.wikipedia.org/wiki/Pequi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caryocar_brasiliense",
        "situacao": "ok",
        "texto": "Caryocar brasiliense, known as pequi (Portuguese pronunciation: [peˈki]) or souari nut, is an edible fruit popular in some areas of Brazil, especially in central-west Brazil.\n[…]\n\"The pequi is the main symbol of this de-structuring of the economy. The pequi is habitually consumed by the population in the Cerrado zone and is deeply rooted in the regional culture and cooking. For the Mineiros, the Cerrado inhabitants of Minas Gerais, the pequi does not belong to anyone, because it belongs to all.\n[…]\nTherefore, they maintain their ancestral right to take it wherever it is, in public or private land, fenced in land or unfenced land, etc., wherever it is, the pequi was always \"accessible\" to the regional society.\"\n[…]\nGiven the importance of bats and perhaps birds for pollination, removal of native woodland is liable to have long-term negative impacts on fruit yield even if no C. brasiliense trees are physically harmed. This is true for other native pollinators, such as Melipona quadrifasciata and Scaptotrigona postica, because they nest in pequi trees, commonly building nests in the hollows of the trees.\n[…]\nMelo, C. (2001): Diurnal bird visiting of Caryocar brasiliense Camb. in Central Brazil. Revista Brasileira de Biologia 61(2): 311–316. doi:10.1590/S0034-71082001000200014 PDF fulltext\n[…]\nOlmos, Fábio; Pacheco, José Fernando & Silveira, Luís Fábio (2006): Notas sobre aves de rapina (Cathartidae, Acciptridae e Falconidae) brasileiras [Notes on Brazilian birds of prey]. Revista Brasileira de Ornitologia 14(4): 401-404 [Portuguese with English abstract]. PDF fulltext\n[…]\nMedia related to Caryocar brasiliense at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pequi",
        "situacao": "ok",
        "texto": "Pequi (Caryocar brasiliense), também chamado de pequizeiro, piqui, pequiá, piquiá, piquiá-bravo, amêndoa-de-espinho, grão-de-cavalo, pequiá-pedra, pequerim e suari, é uma árvore da família das cariocaráceas nativa do cerrado brasileiro. Seu fruto é muito utilizado na culinária de algumas regiões do país, principalmente no norte de Minas Gerais, estado maior produtor do fruto. Do pequi, é extraído \n[…]\nSua polpa macia e saborosa deve ser comida com bastante cuidado, uma vez que a mesma recobre uma camada de finos espinhos que, se mordidos, fincam-se na língua e no céu da boca, provocando dores intensas, risco este que deixa de existir, uma vez assimilada a técnica de degustação, que é de fácil aprendizado. Deve ser comido apenas com as mãos, jamais com talheres.\n[…]\nA polpa contém quantidades moderadas de vitamina C, com valores entre 12 e 17 mg por 100 g . O pequi é rico em compostos fenólicos, especialmente na polpa, com maiores concentrações observadas em frutos com espinhos no endocarpo. Esses compostos estão associados à atividade antioxidante do fruto .\n[…]\nOs melhoramentos genéticos têm fins diversos objetivando melhorar características como cor, sabor, espessura da parte comestível, quantidade de frutos, tamanho da árvore (variedade anã), quantidade de óleo, precocidade na produção de frutos, etc. Mas um melhoramento em especial tem atraído boa parte dos pesquisadores: a possibilidade de se ter pequi sem espinhos.\n[…]\nSementes e mudas foram levadas pelo pesquisador Warwick Estevam Kerr à Universidade Federal de Uberlândia para estudos e replicação. Esta variedade em estudo de pequi gigante sem espinho é mais doce, mais macio, pode ser consumido in natura e possui 35 vezes mais parte comestível que o pequi comum. Como ainda está em estudo, quase não existem locais onde possa se comprar, com segurança, mudas da espécie.\n[…]\n«A Cultura do Pequi» (PDF)\n[…]\n«O Pequi do Cerrado»"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Mamão",
      "descricao": "Fruta tropical alaranjada da Carica papaya, com muitas sementes pretas no centro."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Alguns mamoeiros florescem a vida inteira e nunca dão um único fruto. Qual é o motivo?",
    "resposta": "São plantas macho",
    "distratores": [
      "Falta de polinizadores",
      "Excesso de adubo",
      "Solo muito ácido"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Papaya"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Papaya",
        "situacao": "ok",
        "texto": "The papaya (, US: ) is the plant species Carica papaya, one of the 3 accepted species in the genus Carica of the family Caricaceae.\n[…]\nIn some regions, such as Australia, it may be called papaw or pawpaw. In Australian English,  pawpaw and papaya denote the fruit of different cultivars of Carica papaya: the former for \"larger fruits with yellow flesh\" and the latter for \"more elongated fruits with distinctively orange red flesh\".\n[…]\nCarica papaya was the first transgenic fruit tree to have its genome sequenced. In response to the papaya ringspot virus outbreak in Hawaii in 1998, genetically altered papaya were approved and brought to market (including 'SunUp' and 'Rainbow' varieties.) Varieties resistant to PRV have some DNA of this virus incorporated into the plant's DNA. As of 2010, 80% of Hawaiian papaya plants were genetically modified.\n[…]\nIn Indonesian cuisine, the unripe green fruits and young leaves are boiled for use as part of lalab salad, while the flower buds are sautéed and stir-fried with chilies and green tomatoes as Minahasan papaya flower vegetable dish.\n[…]\nIn Lao and Thai cuisine, unripe green papayas are used to make a type of spicy salad known in Laos as tam maak hoong or tam som and in Thailand as som tam. It is also used in Thai curries, such as kaeng som.\n[…]\nIn traditional medicine, papaya leaves are thought to be useful for treating malaria, as an abortifacient, purgative, smoked to relieve asthma, or as a decoction in Caribbean regions during the 20th century.\n[…]\nPapaya at the Wikibooks Cookbook subproject\n[…]\n\"Papaya\". California Rare Fruit Growers, Inc. 1997."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carica_papaya",
        "situacao": "ok",
        "texto": "Carica papaya L. é uma espécie de fruteira tropical que produz os frutos conhecidos pelos nomes comerciais de papaia ou ababaia (Brasil) (de papaya, da língua caribe via espanhol), ou mamão (Brasil, Angola). Carica papaya é, na actual circunscrição taxonómica do género Carica, a única espécie deste género monotípico, embora a família Caricaceae inclua várias espécies similares, algumas da quais pr\n[…]\nPapaia, mamão ou ababaia é o fruto da papaeira ou mamoeiro, árvores da espécie Carica papaya. Em Angola utilizam-se os termos mamão ou mamoeiro para identificar as variedades com fruto mais arredondado, designado-se por papaia ou papaeira aquelas que produzem o fruto mais alongado e mais adocicado. São bagas ovaladas, com casca macia e amarela ou esverdeada. A sua polpa é de uma cor laranja forte, doce e macia.\n[…]\nExistem diversas variedades de mamão e as mais conhecidas no Brasil são: mamão papaia, mamão formosa (um pouco maior e geralmente usado para fazer doces), mamão-da-baía, mamão-macho e mamão-da-índia.\n[…]\nA Carica papaya Linn é uma planta conhecida e utilizada mundialmente tanto para alimentação quanto para tratamento de enfermidades, haja visto que possui tanto propriedades nutricionais quanto terapêuticas. No que se refere à alimentação, o fruto é a parte mais utilizada para o preparo de alimentos ou para o seu consumo in natura.\n[…]\nExtrato da folha de Carica papaya\n[…]\nFruto da Carica papaya\n[…]\nA papaína é uma das principais enzimas encontradas no látex da fruta verde do Carica papaya e recebe uma atenção considerável devido à sua ampla distribuição e seu importante papel na manutenção de processos biológicos de plantas, tais como a ação contra insetos, além de patologias envolvendo cisteíno-peptidases de mamíferos. Em razão de suas características, a papaína tem aplicação em diversas indústrias, na medicina, na odontologia e como ferramenta de pesquisa.\n[…]\nMamão em Jardineiro.net",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Cupuaçu",
      "descricao": "Fruta amazônica de polpa branca e ácida, usada em sucos, doces e sorvetes"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O cupuaçu é do mesmo gênero botânico de qual planta, o que permite fazer com suas sementes um doce parecido com chocolate?",
    "resposta": "Cacau",
    "distratores": [
      "Guaraná",
      "Açaí",
      "Castanha-do-pará"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Theobroma_grandiflorum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Theobroma_grandiflorum",
        "situacao": "ok",
        "texto": "Theobroma grandiflorum, commonly known as cupuaçu, also spelled cupuassu, cupuazú, cupu assu, or copoazu, is a tropical rainforest tree related to cacao. Native and common throughout the Amazon basin, it is naturally cultivated in the jungles of  northern Brazil, with the largest production in Pará, Amazonas and Amapá, Colombia, Bolivia and Peru.\n[…]\nThe white pulp of the cupuaçu has an odour described as a mix of chocolate and pineapple and is frequently used in desserts, juices and sweets. The juice tastes primarily like pear, banana, passion fruit, and melon. Chocolate made from cupuaçu, very similar to that made from cocoa, is called cupulate.\n[…]\nCupuaçu is most commonly propagated from seed, but grafting and rooted cuttings are also used.\n[…]\nCupuaçu supports the butterfly herbivore, \"lagarta verde\", Macrosoma tipulata (Hedylidae), which can be a defoliator.\n[…]\nCupuaçu flavors derive from its phytochemicals, such as tannins, glycosides, theograndins, catechins, quercetin, kaempferol and isoscutellarein. It also contains theacrine, caffeine, theobromine, and theophylline as found in cacao, although with a much lower amount of caffeine.\n[…]\nCupuaçu butter is a triglyceride composed of saturated and unsaturated fatty acids, giving the butter a low melting point (approximately 30 °C) and texture of a soft solid, lending its use as a confectionery resembling white chocolate. The main fatty acid components of cupuaçu butter are stearic acid (38%), oleic acid (38%), palmitic acid (11%), and arachidic acid (7%).\n[…]\nTheobroma bicolor\n[…]\nWeird Fruit Explorer (20 September 2017). \"Cupuacu Review - Ep. 210\". Archived from the original on 2021-12-22 – via YouTube.\n[…]\nScalabrini, Osvaldo (28 April 2013). \"Cupuaçu, Theobroma grandiflorum, cupuaçueiro, Flora amazônica, Endêmica do amazonas\". Archived from the original on 2021-12-22 – via YouTube."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cupua%C3%A7u",
        "situacao": "ok",
        "texto": "Theobroma grandiflorum, comumente conhecido como cupuaçu, é uma árvore da floresta tropical relacionada ao cacau. Nativo e comum em toda a bacia amazônica, é cultivado naturalmente nas selvas do norte do Brasil, com maior produção no Pará, Amazonas e Amapá, Colômbia, e também na Bolívia e Peru. A polpa do fruto do cupuaçu é consumida em toda a América Central e América do Sul, principalmente nos e\n[…]\nDe sua semente é produzido o cupulate (chocolate de cupuaçu). A alfarroba é outra substituta do cacau na fabricação de chocolate.\n[…]\nSeu nome científico é Theobroma (lat: “manjar dos deuses”) grandiflorum (lat: “flores grandes”). As árvores de cupuaçu geralmente variam de 5–15 metros de altura, embora algumas possam atingir 20 metros. Possuem casca marrom e as folhas variam de 25–35 centímetros de comprimento, com nove ou dez pares de veias. À medida que amadurecem, as folhas mudam de rosa para verde e, eventualmente, começam a dar frutos.\n[…]\nA polpa branca do cupuaçu tem odor descrito como uma mistura de chocolate e abacaxi e é frequentemente utilizada em sobremesas, sucos e doces. O suco tem gosto principalmente de pêra, banana, maracujá e melão. O chocolate feito de cupuaçu, muito parecido com o de cacau, é chamado de cupulate.\n[…]\nO cupuaçu é mais comumente propagado a partir de sementes, mas também são usados enxertos e estacas enraizadas.\n[…]\nO cupuaçu suporta a borboleta herbívora, \"lagarta-do-cupuaçu\", Macrosoma tipulata (Hedylidae), que pode ser um desfolhador.\n[…]\nOs sabores do cupuaçu derivam de seus fitoquímicos, como taninos, glicosídeos, teograndinas, catequinas, quercetina, kaempferol e isoscutelareína. Também contém teacrina, cafeína, teobromina e teofilina, encontradas no cacau, embora com uma quantidade muito menor de cafeína. Ao contrário do chocolate feito do cacau, o cupulate (\"chocolate\" de cupuaçu) é livre de teobromina e cafeína.\n[…]\nTheobroma bicolor",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Acerola",
      "descricao": "Fruta pequena e vermelha da Malpighia emarginata, muito cultivada no Nordeste brasileiro."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Comparando o mesmo peso de polpa, qual destas frutas tem, de longe, mais vitamina C?",
    "resposta": "Acerola",
    "distratores": [
      "Laranja",
      "Goiaba",
      "Limão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Malpighia_emarginata"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Malpighia_emarginata",
        "situacao": "ok",
        "texto": "Malpighia emarginata is a tropical fruit-bearing shrub or small tree in the family Malpighiaceae native to the Neotropics. The fruit is notable for its exceptional richness in vitamin C and versatility in various food preparations.\n[…]\nMalpighia emarginata is a host plant for the caterpillars of the white-patched skipper (Chiomara asychis), Florida duskywing (Ephyriades brunneus), and brown-banded skipper (Timochares ruptifasciatus). Larvae of the acerola weevil (Anthonomus macromalus) feed on the fruits, while adults consume young leaves.\n[…]\nAcerola fruit is 91% water, 8% carbohydrates, and contains negligible protein and fat (table). In a reference amount of 100 g (3.5 oz), acerola supplies 32 calories, and is a rich source of manganese, and particularly vitamin C at some 20 times the Daily Value (DV), with other micronutrients at uniformly low levels (table).\n[…]\nAcerola cherry may be eaten raw or used as a juice or mixed with other, usually sweeter fruit juices. The fruits are used in jams, concentrates, stews, and liqueurs, possibly needing sugar to improve flavor. Cooked fruits are strained to remove the seeds, and the resulting sauce has uses on cake, pudding or ice cream.\n[…]\nAcerola cherry powder is also used in some commercially produced breads as a bread improver. Because acerola also contains pigments like anthocyanins and carotenoids, it could also be used as a food colorant.\n[…]\nAcerola is a bonsai subject because of its small leaf and fruit, and fine ramification. It is also grown as an ornamental and for hedges.\n[…]\nUniversity of Florida: Acerola"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Acerola",
        "situacao": "ok",
        "texto": "A acerola, azerola, cerejeira-do-pará, cerejeira-de-barbados ou cerejeira-das-antilhas (Malpighia emarginata) é um arbusto da família das malpighiáceas. O fruto se dá numa árvore chamada aceroleira. Tem origem nas Antilhas, América Central e norte da América do Sul.\n[…]\nA acerola pode ser propagada por semente, corte ou outros métodos. Prefere solo seco e arenoso e pleno sol, e não pode suportar temperaturas inferiores a 30 ° F / -1 ° C. Por causa de suas raízes superficiais, tem tolerância muito baixa aos ventos.\n[…]\nNos países de clima tropical, a acerola vem ganhando cada vez mais destaque em seu cultivo como bonsai de interior.\n[…]\nO cultivo de acerola teve um forte crescimento a partir do final do século XX, sendo hoje uma importante cultura da Região Nordeste do Brasil, principalmente na agroindústria de polpa de fruta congelada.\n[…]\nO teor de ácido ascórbico em 100 gramas de polpa de acerola excede mil miligramas, valor equivalente aos comprimidos efervescentes contendo um grama de vitamina C.\n[…]\nMesquita e Vigoa, no livro \"La Acerola\", de 2000, demonstraram que o alto teor de ácido ascórbico e a presença de antocianinas no fruto de acerola promovem ação antioxidante. Bsoul e Terezhalmy, em seu livro \"Vitamin C in health and disease\", de 2004 descrevem que, além da ação antioxidante sobre os radicais livres, os frutos da acerola possuem ação imunoestimulante, estimulam a formação do colágeno, importante para a mucosa oral, pois diminui a permeabilidade a endotoxinas.\n[…]\nExistem mais de 42 variedades de acerola que são cultivadas no Brasil. As principais são:\n[…]\nMESQUITA, P.C.; VIGOA, Y.G. La acerola. Fruta marginada de América con alto contenido de ácido ascórbico. Alimentaria, Madrid, v.37, n.309, p-113-126, 2000.\n[…]\nFrutopedia - Acerola: Malpighia emarginata",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Cogumelo-ostra",
      "descricao": "Cogumelo comestível Pleurotus ostreatus, em forma de concha, que cresce em troncos."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O cogumelo-ostra, comestível, também é um caçador: seus filamentos paralisam e digerem que pequenos animais?",
    "resposta": "Nematoides",
    "distratores": [
      "Formigas",
      "Minhocas",
      "Pulgões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pleurotus_ostreatus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pleurotus_ostreatus",
        "situacao": "ok",
        "texto": "Pleurotus ostreatus, commonly known as the oyster mushroom, grey oyster mushroom, oyster fungus, hiratake, or pearl oyster mushroom, is a popular edible mushroom found in temperate and subtropical forests around the world.\n[…]\nBoth the Latin and common names refer to the shape of the fruiting body. The Latin pleurotus (side-ear) refers to the sideways growth of the stem with respect to the cap, while the Latin ostreatus (and the English common name, oyster) refers to the shape of the cap which resembles the bivalve of the same name. The oyster reference may also derive from the slippery texture of the mushroom.\n[…]\nIt is related to the similarly cultivated Pleurotus eryngii (king oyster mushroom). Other similar species include P. columbinus, P. cornucopiae, Hohenbuehelia petaloides, the hairy-capped Phyllotopsis nidulans, and the smaller Pleurocybella porrigens.\n[…]\nAll major lineages of the oyster mushroom are carnivorous. The mushroom's mycelia can kill and digest nematodes, which is believed to be a way in which the mushroom obtains nitrogen. P. ostreatus is one of at least 700 known nematophagous mushrooms.\n[…]\nMost members of the species complex seem to require Pleurotus, and in some cases P.ostreatus specifically, as larval food.\n[…]\nOyster mushrooms can also be used industrially for mycoremediation purposes. Oyster mushrooms were used to treat soil that had been polluted with diesel oil. The mushroom was able to convert 95% of the oil into non-toxic compounds. P. ostreatus is also capable of growing upon and degrading oxo-biodegradable plastic bags; it can also contribute to the degradation of renewable polyethylene.\n[…]\nList of Pleurotus species\n[…]\nMedia related to Pleurotus ostreatus at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cogumelo-ostra",
        "situacao": "ok",
        "texto": "O Pleurotus ostreatus, comummente conhecido como cogumelo-ostra, é um cogumelo comestível do género Pleurotus. Esta espécie de cogumelo chegou a ser cultivada na Alemanha como medida de subsistência, durante a Primeira Guerra Mundial, assumindo-se hoje em dia como uma espécie amplamente cultivada em todo o mundo.\n[…]\nOs cogumelos-ostra são susceptíveis de se confundirem com outras 2 espécies de pleurotos comestíveis, designadamente: Pleurotus cornucopiae e Pleurotus pulmonarius.\n[…]\nO cogumelo-ostra é um sapróbio lenhícola, sendo certo que também pode actuar como parasita.\n[…]\nO pleuroto-ostra é uma espécie comestível de cogumelo, quando o espécime ainda é jovem, podendo ser preparado em sopas, molhos, saladas, refogados, marinados e até empanado. Pode ser preparado de modo parecido ao da carne.\n[…]\nO pleuroto-ostra é nutritivo, rico em proteínas, contendo em relação à matéria seca 18.7% de proteínas, com onze aminoácidos.\n[…]\nA produção do pleuroto-ostra é feita em composto orgânico à base de serragem, farelo de arroz e/ou trigo e/ou soja, onde primeiramente é feita uma hidratação da mistura e a correção do pH por meio de calcário na sequência é feita uma esterilização para eliminação de concorrentes e depois a “semeadura” do fungo. O produto fica em repouso (corrida do micélio) por um período de tempo (75 dias) em local fechado e climatizado a 15 °C até o aparecimento dos frutos e sua colheita.\n[…]\nEstes cogumelos podem ser conservados entre 10 a 15 dias no frigorífico (4 °C). Geralmente, são embalados em bandejas de poliestereno (200g), recobertos por película de PVC, ou em pequenas caixas de papelão. O cogumelo in natura é muito mais sadio, pois não leva nenhum agente de branqueamento e conserva muito mais o seu sabor original.\n[…]\nPleurotus euosmus,\n[…]\nPleurotus tuberregium,\n[…]\nShimeji-branco, pleuroto-ostra,",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Chapéu-da-morte",
      "descricao": "Cogumelo extremamente venenoso Amanita phalloides, de chapéu esverdeado, responsável pela maioria das mortes por envenenamento com cogumelos."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes cogumelos responde pela maioria das mortes por envenenamento com cogumelos no mundo?",
    "resposta": "Chapéu-da-morte",
    "distratores": [
      "Amanita-mata-moscas",
      "Cogumelo-mágico",
      "Cogumelo-ostra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Amanita_phalloides"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amanita_phalloides",
        "situacao": "ok",
        "texto": "Amanita phalloides ( AM-ə-NY-tə fə-LOY-deez), commonly known as the death cap, is a deadly poisonous basidiomycete fungus and mushroom, one of many in the genus Amanita. Originating in Europe but later introduced to other parts of the world since the late twentieth century, A. phalloides forms ectomycorrhizae with various broadleaved trees. In some cases, the death cap has been introduced to new r\n[…]\nAmanita phalloides is the most poisonous of all known mushrooms. It is estimated that as little as half a mushroom contains enough toxin to kill an adult human. It is also the deadliest mushroom worldwide, responsible for 90% of mushroom-related fatalities every year. It has been involved in the majority of human deaths from mushroom poisoning, possibly including Roman Emperor Claudius in AD 54 and Holy Roman Emperor Charles VI in 1740.\n[…]\nOther common names also listed include \"stinking amanita\" and \"deadly amanita\".\n[…]\nCalifornian specimens of A. phalloides frequently display yellowish to mustard-yellow caps, a coloration that can closely resemble the edible species Amanita velosa and Amanita calyptroderma, both of which are commonly foraged and consumed in California.\n[…]\nSeveral historical figures may have died from A. phalloides poisoning (or other similar toxic Amanita species). These were either accidental poisonings or assassination plots. Alleged victims of this kind of poisoning include Roman Emperor Claudius, Pope Clement VII, the Russian tsaritsa Natalia Naryshkina, and Holy Roman Emperor Charles VI.\n[…]\nList of Amanita species\n[…]\nAmericanMushrooms.com - The Death Cap Mushroom Amanita phalloides\n[…]\nAmanita phalloides: the death cap\n[…]\nAmanita phalloides: Invasion of the Death Cap\n[…]\nKey to species of Amanita Section Phalloideae from North and Central America - Amanita studies website\n[…]\nCalifornia Fungi—Amanita phalloides\n[…]\n\"Amanita phalloides\". The Encyclopedia of Life."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Amanita_phalloides",
        "situacao": "ok",
        "texto": "A Amanita phalloides, conhecida em português pelo nome comum de cicuta verde, chapéu-da-morte ou rebenta-bois, é uma espécie de cogumelo altamente venenosa que pode causar a morte se eventualmente consumida. A espécie é originária da Europa, mas pode também ser encontrada nas Américas, Austrália e Ásia. A A. phalloides habita florestas, normalmente junto de carvalhos, nogueiras e/ou coníferas.\n[…]\nCalcula-se que apenas 50g de Amanita phalloides sejam suficientes para provocar a morte de um ser humano adulto, e que a espécie seja responsável por 90% dos envenenamentos por cogumelos anuais.\n[…]\nAs espécies do género Amanita mais perigosas (A. verna, A. virosa e A. phalloides) representam cerca de 90% dos casos fatais de envenenamentos por cogumelos. Mas nenhum cogumelo é mais temido do que a Amanita phalloides.\n[…]\nA maioria das mortes resulta das semelhanças notáveis da Amanita phalloides com o Volvariella volvacea, um cogumelo inofensivo, comestível e muito saboroso que é apreciado como petisco gastronómico.\n[…]\nApós a ingestão de cogumelos desta espécie começam a desenvolver-se sintomas que aparecem 8 a 12 horas depois. A morte pode ocorrer em 7 a 10 dias, em 10 a 15% dos doentes. Normalmente, as vítimas sucumbem por falência hepática.\n[…]\nO dano no fígado é irreversível, sendo nos casos mais graves necessário recorrer ao transplante hepático. Nos casos fatais, a morte dá-se em 6 a 16 dias e resulta de falha hepática e/ou renal.\n[…]\nA Amanita phalloides é a espécie de cogumelos mais tóxica do mundo. Na sua constituição encontram-se imensas toxinas responsáveis por graves lesões no organismo.\n[…]\nOs problemas ocorrem, normalmente, pela confusão com outras espécies de cogumelos (comestíveis), derivada do hábito de colher cogumelos selvagens.\n[…]\nBONNET MS, BASSON PW, The Toxicology of Amanita phalloides, Homeopathy, 2002, 91: 249-254.\n[…]\nNotícia sobre envenenamento com Amanita phalloides",
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
