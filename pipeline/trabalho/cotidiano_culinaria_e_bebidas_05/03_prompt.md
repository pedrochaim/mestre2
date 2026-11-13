Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Culinária e Bebidas** (tema **Cotidiano**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Panetone",
      "descricao": "Pão doce italiano de massa fermentada com frutas cristalizadas e passas, tradicional no Natal."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Segundo uma lenda de Milão, o nome panetone viria de pan del Toni, o pão do Toni. Quem seria esse Toni?",
    "resposta": "Um ajudante de cozinha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Panettone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Panettone",
        "situacao": "ok",
        "texto": "Panettone is an Italian sweet bread and fruitcake that is associated with the city of Milan, Lombardy. It is usually prepared for Christmas and New Year in Western, Southern, and Southeastern Europe, as well as in South America, Eritrea, Australia, and North America. Panettone is tall, with the appearance and texture of bread. Despite such an appearance, panettone is understood in Italy to be a de\n[…]\nIn these countries, panettone takes on different names; in Peru, panetón, and in Argentina, pan dulce.\n[…]\nAs of 2007, efforts were underway to obtain protected designation of origin (PDO) and denominazione di origine controllata (DOC) status for panettone.\n[…]\nPanettone prepared from a commercial yeast, typically Kazachstania exigua, contains several lactic acid bacteria.\n[…]\nPanettone is cooked in a range of sizes, from individually portioned cakes to large cakes that are cut at service. Among the Milanese, panettone is eaten with various courses, including breakfast, afternoon tea, and dinner. Alongside, the Italian dessert wine Vin Santo or a sweet white wine are often drunk. Panettone is sometimes served in its baking paper, which often features decorative designs.\n[…]\nMost panettone eaten in Italy is sourced from industrial producers, shrink-wrapped and distributed in cardboard boxes. As of 2007, Italian food manufacturing companies and bakeries produced 117 million panettone and pandoro cakes each Christmas, collectively worth €579 million. As of 2011, Bauli dominated the panettone market after its acquisition of its two largest competitors two years prior.\n[…]\nPrices for panettone varied starkly by source. In 2011, a panettone purchased from an Italian supermarket could cost less than €10 (US$13.92), compared to the few produced by artisans which often could cost €50. Outside of supermarkets, industrially-produced panettone are sold in some bakeries.\n[…]\nPanettone World Champioship"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Panetone",
        "situacao": "ok",
        "texto": "O panetone é um alimento tradicional da época de Natal, de origem milanesa, região a noroeste da Itália. O pão doce ou bolo de natal possui fragrância discreta de baunilha e recheio de frutas secas, tais como damasco, mamão, laranja, limão, maçã, cidra e a uva passa.\n[…]\nO produto final é rico em carboidrato e possui grande quantidade de calorias: uma fatia de 80 gramas do panetone da marca Nestlé, por exemplo, possui cerca de 280 Kcal (ou 1171,52 kJ).\n[…]\nA palavra panetone (do italiano panettone) tem sua origem no vocábulo milanês panatón ou panattón, de origem e significados controversos. Por outro lado, pode-se deduzir que a origem do termo panettone se deva à contração entre o diminutivo da palavra \"pão\" (do italiano panetto) com o superlativo da mesma palavra (do italiano panone), isto é, panetto + panone = panettone, o que em português se assemelharia ao neologismo \"pãozinhão\".\n[…]\nOutra lenda conta que ele teria sido criado na cidade de Milão, na Idade Média, por um confeiteiro chamado Tony, o qual teria dedicado seu invento à mulher amada, de \"Pão de Tony\", ele teria evoluído para panetone. Mas essa lenda não tem o menor fundamento, pois não há nenhuma evidência histórica que respalde essa versão.\n[…]\nNo Brasil, existem mais de 100 marcas que produzem o bolinho italiano em diversas versões, e levantamentos apontam que, no período das festas de fim de ano, essa quantidade de produtores pode triplicar, por conta das padarias e confeitarias de pequeno porte e de empreendedores sazonais, que produzem o panetone para ter uma renda extra.\n[…]\n«Panetone e sua história, Shirley de Campos»\n[…]\n«A história do Panetone: Da Itália para o mundo, Olga Defavari» (em inglês)\n[…]\n«Il Panettone Milanese, Italian food, About.com, a part of The New York Times Company» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Fondue",
      "descricao": "Prato suíço de queijo e vinho derretidos numa panela comum, no qual se mergulham pão e outros alimentos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em francês, o que quer dizer fondue, nome do prato suíço em que se mergulham pedaços de pão numa panela de queijo?",
    "resposta": "Derretido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fondue"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fondue",
        "situacao": "ok",
        "texto": "Fondue (UK:  FON-dew, US:  fon-DEW, French: [fɔ̃dy], Swiss Standard German: [fɔ̃ːˈdyː] ; Italian: fonduta) is a Swiss dish of melted cheese and wine served in a communal pot (caquelon or fondue pot) over a portable stove (réchaud) heated with a candle or spirit lamp, and eaten by dipping bread and sometimes vegetables or other foods into the cheese using long-stemmed forks.\n[…]\nThe cornstarch or other starch stabilizes and thickens the mixture. Additional wine may be added if the fondue is too thick; its acid and ethanol decrease the fondue's viscosity. A fondue can curdle if the protein separates from the fat, which is usually the result of not enough liquid in the mixture and an insufficiently acid mixture, so lemon juice is sometimes added.\n[…]\nFondue is eaten by spearing a piece of bread on a fork, swirling it in the pot, and putting it into the mouth. Some writers recommend that the dipping fork be used only to transport the food from the pot to one's plate, not to eat from.\n[…]\nOther fondue etiquette rules include 'always stirring in a figure of 8', 'not scratching the bottom of the caquelon with a fork that has no side on it' and 'adding an egg and kirsch schnapps to the caquelon when the cheese is almost finished'.\n[…]\nThe delayed, strong feeling of fullness after eating fondue may be caused by phase separation in the stomach, the cheese fat initially floating in the stomach not being released into the duodenum, delaying fat sensing and satiation.\n[…]\nList of fondues – other dishes inspired from fondue\n[…]\nFondue as a social event (Archived 2015-02-03 at the Wayback Machine)\n[…]\nIsabelle Raboud-Schüle, \"Comment la fondue vint aux Suisses\", Annales fribourgeoises 72:101–112 (2010)\n[…]\nSwiss Fondue - The fine art of fondue in 52 tasty recipes\n[…]\nFondue with dried meat crumble, Haute Fondue, Helvetiq, Valais/Wallis Promotion, also on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fondue",
        "situacao": "ok",
        "texto": "Fondue (fundida) é um prato de origem suíça, originalmente à base de queijo aquecido sobre uma lamparina, também conhecida como espiriteira ou rechaud, ou outra fonte de calor pouco intenso.\n[…]\nConsiste basicamente em uma mistura de queijos (normalmente Gruyère e Emmental) fundidos com vinho (ou, como na receita original, a Kirschwasser alemã), que vai à mesa acompanhada de pedaços de pão, batatas noisettes e legumes cozidos, ou com a guarnição de sua preferência. Esses acompanhamentos devem ser mergulhados na fondue com um garfo comprido para ficarem cobertos com o queijo fundido.\n[…]\nDentro da região Jura/Savoie fica a cidade de La Chaux-de-Fonds que diz ser o berço do fondue de queijo. Esta cidade é conhecida essencialmente pela manufatura de relógios.\n[…]\nAlém da fondue de queijo, existem algumas outras variações, como a fondue de chocolate e carne, a fondue chinesa (fondue chinoise), feita à base de carnes, peixes e legumes, fervidos num caldo de carne com diversas especiarias, a japonesa (sukiyaki) e a vietnamita.\n[…]\nFondue vietnamita ou “bỏ nhúng dấm” (literalmente “carne-de-vaca-em-vinagre”) é uma preparação em que se coloca na mesa uma panela com um caldo sobre uma fonte de calor, onde os comensais vão cozinhando os ingredientes colocados à parte, incluindo carne de vaca finamente cortada, camarões, lulas e pequenos polvos, e servindo-se com ananás, massa de arroz já cozida, “papel-de-arroz”, ervas aromáticas e molhos, como “mắm nêm” (pasta de peixe fermentado), “nước mắm chấm” (molho de peixe) ou molho de soja (nước tương chấm).\n[…]\n«Receitas de fondue»\n[…]\n«Fondue Mania»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Sushi",
      "descricao": "Prato japonês de arroz temperado com vinagre combinado a frutos do mar, vegetais ou ovas."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na origem, a palavra japonesa sushi descrevia o sabor do arroz que acompanhava o peixe. Que sabor era esse?",
    "resposta": "Azedo",
    "distratores": [
      "Salgado",
      "Doce",
      "Amargo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sushi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sushi",
        "situacao": "ok",
        "texto": "Sushi (すし, 寿司, 鮨, 鮓; pronounced [sɯɕiꜜ] or [sɯꜜɕi] ) is a traditional Japanese dish made with vinegared rice (鮨飯, sushi-meshi), typically seasoned with sugar and salt, and combined with a variety of ingredients (ねた, neta), such as seafood, vegetables, or meat; raw seafood is the most common, although some may be cooked. While sushi has numerous styles and presentations, the current defining compon\n[…]\nMost nigiri sushi will have completely raw toppings, called neta.\n[…]\nGari: Sweet, pickled and sliced ginger, or sushi ginger (gari). Shōga (生姜) in standard Japanese.\n[…]\nOaiso: \"Compliment\". Bill or check. Oaiso may be used in not only sushi bars but also izakaya. Okanjō (お勘定) or chekku (チェック) in standard Japanese.\n[…]\nUnlike sashimi, which is almost always eaten with chopsticks, nigirizushi is traditionally eaten with the fingers, even in formal settings. Although sushi is commonly served on a small platter with a side dish for dipping, sushi can also be served in a bento, a box with small compartments that hold the various dishes of the meal.\n[…]\nSoy sauce is the usual condiment, and sushi is normally served with a small sauce dish or with soy sauce in a separate bento compartment. Traditional etiquette suggests that the sushi be turned over so that only the topping is dipped for flavor; the rice—which has already been seasoned with rice wine vinegar, sugar, salt, mirin, and kombu—would otherwise absorb too much soy sauce and would fall apart.\n[…]\nTraditionally, the sushi chef adds an appropriate amount of wasabi to the sushi while preparing it, and the diner should not add more. Today, wasabi is more a matter of personal taste, and even restaurants in Japan may serve wasabi on the side for customers to use at their discretion, even when wasabi has already been added to the dish.\n[…]\nList of sushi and sashimi ingredients\n[…]\nList of sushi restaurants\n[…]\nSushi machine\n[…]\nWikiHow page on making sushi rice"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sushi",
        "situacao": "ok",
        "texto": "Sushi (すし, 寿司, 鮨; pronunciado [sɯꜜɕi] ou [sɯɕiꜜ]) é um prato da culinária japonesa que possui origem numa antiga técnica de conservação da carne de peixe em arroz avinagrado. O sushi, na forma em que é conhecido atualmente, tem cerca de 200 anos; inicialmente, era vendido em barracas, como comida de rua, numa espécie de fast food.\n[…]\nO sushi, tradicionalmente, é feito com arroz temperado com molho de vinagre, açúcar e sal, combinado com algum tipo de peixe ou fruto do mar, vegetais ou ovo. A tradição japonesa é de servi-lo acompanhado de wasabi (pasta de raiz forte).\n[…]\nO termo sushi vem de uma forma gramatical arcaica, com significado de \"Risoto Japonês\", não usada mais em outros contextos e significa, literalmente, \"é azedo\", num reflexo das suas raízes históricas de alimento fermentado.\n[…]\nA ciência por trás da fermentação do peixe embalado no arroz é que o vinagre produzido a partir da fermentação do arroz quebra a proteína do peixe em aminoácidos. Isso resulta em um dos cinco paladares básicos, chamado umami em japonês. A forma mais antiga de sushi no Japão, narezushi, ainda se assemelha muito com esse processo. No Japão, o narezushi evoluiu para oshizushi e, por último, para edomae nigirizushi, que é o alimento conhecido mundialmente apenas como \"sushi\".\n[…]\nAtualmente, o sushi japonês preserva poucas semelhanças com o tradicional prato de arroz lactofermentado. Originalmente, quando o peixe fermentado era tirado do arroz, apenas o peixe era consumido e o arroz fermentado era descartado. O funazushi de gosto e cheiro fortes, um tipo de narezushi feito próximo ao lago Biwa, no Japão, é o que mais lembra a forma tradicional de preparação do sushi fermentado.\n[…]\nGomokuzushi (sushi no estilo cansai). 五目寿司. Ingredientes cozidos ou crus misturados no meio do arroz na tigela.\n[…]\nHistória do sushi\n[…]\nHanami Web - Sushi (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Café",
      "descricao": "Bebida preparada com os grãos torrados e moídos do cafeeiro, originário da Etiópia."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra café chegou às línguas europeias pelo turco kahve. E a palavra turca, por sua vez, vem de qual língua?",
    "resposta": "Árabe",
    "distratores": [
      "Persa",
      "Grego",
      "Hebraico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coffee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coffee",
        "situacao": "ok",
        "texto": "Coffee is a beverage brewed from roasted, ground coffee beans. Dark-colored and bitter, coffee has a stimulating effect on humans due to its caffeine content; however decaffeinated coffee is also commercially available. There are also various coffee substitutes.\n[…]\nCoffee had spread to Italy by 1600 and then to the rest of Europe, Indonesia, and the Americas. The first European coffeehouse outside of the Ottoman Empire opened in Venice in 1647.\n[…]\nMany studies are skeptical about fair trade, reporting that it often worsens the bargaining power of those who are not part of it. The first fair-trade coffee was an effort to import Guatemalan coffee into Europe as \"Indio Solidarity Coffee\".\n[…]\nSince the founding of organizations such as the European Fair Trade Association (1987), the production and consumption of fair trade coffee has grown as some local and national coffee chains started to offer fair trade alternatives. For example, in April 2000, after a year-long campaign by the human rights organization Global Exchange, Starbucks decided to carry fair-trade coffee in its stores.\n[…]\nA 2005 study in Belgium concluded that consumers' buying behavior is not consistent with their positive attitude toward ethical products. On average 46% of European consumers claimed to be willing to pay substantially more for ethical products, including fair-trade products such as coffee. The study found that the majority of respondents were unwilling to pay the actual price premium of 27% for fair trade coffee.\n[…]\nA contemporary term for a person who makes coffee beverages, often a coffeehouse employee, is a barista. The Specialty Coffee Association of Europe and the Specialty Coffee Association of America have been influential in setting standards and providing training."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caf%C3%A9",
        "situacao": "ok",
        "texto": "O café é uma bebida preparada a partir dos grãos torrados do fruto do cafeeiro. Tradicionalmente consumido quente, também pode ser servido gelado. A bebida contém cafeína, substância com efeito estimulante, cuja concentração varia conforme o método de preparo, situando-se geralmente entre 80 e 140 mg por cerca de 207 ml.\n[…]\nO café é originário das terras altas da Etiópia, em um local chamado Kaffa. Porém, a palavra \"café\" não é originária de Kaffa, e sim da palavra árabe qahwa, que significa \"vinho\" (قهوة). Por esse motivo, o café era conhecido como \"vinho da Arábia\" quando chegou à Europa no Século XIV.\n[…]\nO conhecimento dos efeitos do café disseminaram-se e no século XVI o café foi levado a península Arábica, sendo torrado para se transformar em bebida pela primeira vez na Pérsia. Na Arábia, a infusão do café recebeu o nome de kahwah ou cahue (ou ainda qah'wa, do original em árabe: قهوة). Enquanto na língua turco otomana era conhecido como kahve, cujo significado original também era \"vinho\". A classificação Coffea arabica foi dada pelo naturalista Lineu.\n[…]\nNa sua peregrinação pelo mundo o café chegou a Java, alcançando posteriormente os Países Baixos e, graças ao dinamismo do comércio marítimo holandês executado pela Companhia das Índias Ocidentais, o café foi introduzido no Novo Mundo, espalhando-se nas Guianas, Martinica, São Domingos, Porto Rico e Cuba. Gabriel Mathien de Clieu, oficial francês, foi quem trouxe para a América os primeiros grãos.[carece de fontes]?\n[…]\nIngleses e portugueses tentaram a sua sorte nas zonas tropicais da Ásia e da África,[carece de fontes]? tendo Portugal alcançado especial sucesso em Angola, onde a produção de café chegou a atingir mais de 200 mil toneladas anuais, tornando a província ultramarina no terceiro maior produtor do mundo.\n[…]\n«Café contra Cacau Infográfico»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Tempurá",
      "descricao": "Técnica japonesa de fritura de legumes e frutos do mar envoltos em massa leve"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Uma explicação para o nome tempurá o liga aos dias de jejum que os missionários portugueses guardavam no Japão. Como se chamavam esses dias?",
    "resposta": "Têmporas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tempura"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tempura",
        "situacao": "ok",
        "texto": "Tempura (天（てん）ぷら or 天（てん）麩（ぷ）羅（ら）; [tempɯɾa]) is a Japanese dish that usually consists of seafood and vegetables that have been coated in a thin batter and deep-fried. Tempura originated in the 16th century, when Portuguese Jesuits brought the Western-style cooking method of coating foods with flour and frying, via Nanban trade.\n[…]\nTypes of seafood used in tempura include:\n[…]\nThe word \"tempura\" originates from the Latin word tempora, a term referring to these fasting times (Spanish: Témporas). In those days, the ingredients were covered in thick batter containing flour, sugar and sake, and then fried in lard. As the batter already contained seasoning, it was eaten without dipping sauce.\n[…]\nThe word \"tempura\", or the technique of dipping fish and vegetables into a batter and frying them, comes from the word tempora, a Latin word meaning \"times\", \"time period\" used by Portuguese missionaries to refer to the Lenten period or Ember Days (ad tempora quadragesima), Fridays, and other Christian holy days. Ember Days, or quatuor anni tempora in Latin, refer to holy days when Catholics avoid meat and eat fish or vegetables instead.\n[…]\nThe idea that the word \"tempura\" may have been derived from the Portuguese noun tempero, meaning a condiment or seasoning of any kind, or from the verb temperar, meaning \"to season\" is also possible as the Japanese language could easily have assumed the word tempero as is, without changing any vowels as the Portuguese pronunciation, in this case, is similar to the Japanese.\n[…]\nThere is still today a dish in Portugal very similar to tempura called peixinhos da horta, \"garden fishes\", which consists of green beans dipped in a batter and fried.\n[…]\nGlossary of Japanese words of Portuguese origin\n[…]\nPakora: a South Asian food resembling tempura."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tempura",
        "situacao": "ok",
        "texto": "Tempura (português europeu) ou tempurá (português brasileiro) (em japonês 天ぷら ou 天麩羅, tenpura) é um prato clássico da culinária japonesa. Consiste de pedaços fritos de vegetais ou mariscos envoltos num polme fino. A fritura é realizada em óleo muito quente, durante apenas cerca de dois ou três minutos.\n[…]\nA receita do tempura foi introduzida no Japão por missionários portugueses ativos particularmente na cidade de Nagasaki fundada igualmente por portugueses, durante o século XVI. A origem mais aceita hoje da palavra tempura  baseia-se no fato que os Jesuítas não comiam carne vermelha durante a Quaresma, em latim \"ad tempora quadragesimae\", preferindo o consumo de vegetais e frutos do mar. Outras hipóteses da origem incluem a palavra tempero e o verbo temperar.\n[…]\nHoje em dia ainda existe um prato em Portugal muito semelhante à tempura, denominado peixinhos da horta, que consiste de pedaços de feijão-verde fritos envoltos num polme geralmente mais espesso que o da tempura. Existem ainda algumas variações sobre este prato, usando tipos diferentes de legumes, tais como a abóbora.\n[…]\nPortal do Japão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Cachorro-quente",
      "descricao": "Lanche de salsicha grelhada, cozida ou fervida, servida num pão alongado aberto ao meio."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome cachorro-quente traduz o inglês hot dog, que nasceu de uma piada: as salsichas alemãs lembravam qual raça de cão?",
    "resposta": "Bassê",
    "distratores": [
      "Buldogue",
      "Pug",
      "Poodle"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hot_dog"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hot_dog",
        "situacao": "ok",
        "texto": "A hot dog is a grilled, steamed, or boiled sausage served in the slit of a partially sliced bun. The term hot dog can also refer to the sausage itself. The sausage used is a wiener (Vienna sausage) or a frankfurter (Frankfurter Würstchen, also just called frank). The names of these sausages commonly refer to their assembled dish. Hot dog preparation and condiments vary worldwide. Common condiments"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cachorro-quente",
        "situacao": "ok",
        "texto": "Um cachorro-quente (também conhecido pelo anglicismo hot dog) é uma comida típica dos Estados Unidos em que se coloca salsicha dentro de um pão sovado.\n[…]\nNos Estados Unidos, o preparo típico do cachorro-quente é colocando a salsicha com o molho agridoce, picles à base de pepino, mostarda e ketchup. Também são muito utilizados o chucrute (repolho azedo) e o chili, espécie de massa de feijão com carne moída picante. No Brasil, a forma de se fazer o cachorro-quente depende da região do país.\n[…]\nNo estado de São Paulo, o preparo do prato utiliza purê de batata, enquanto que, no Rio de Janeiro, usa-se ovo de codorna. Já em Minas Gerais e Goiás, é servido com milho verde e batata palha e na Paraíba, é feito com carne moída e/ou frango desfiado, com carne moída e verdura picada por cima da salsicha. Em Pernambuco, o recheio do pão de cachorro-quente é uma mistura a base de carne moída e salsicha, ou apenas uma delas.\n[…]\nA mais conhecida é a de um açougueiro de Frankfurt, na Alemanha. Em 1852, ele resolveu batizar as salsichas que fabricava com o nome da raça de seu cachorro: Dachshund.\n[…]\nO maior cachorro-quente do mundo, no entanto, foi fabricado nos Estados Unidos pela empresa Juicy’s Outlaw Grill em 2014: tinha 57 quilogramas, dos quais 23 quilogramas só de salsicha; foi colocado à venda ao preço de mil dólares estadunidenses; e entrou na lista da publicação Guinness World Records.\n[…]\nNo Brasil, o dia do cachorro-quente é comemorado em 9 de setembro.\n[…]\nCachorro-quente vegetariano\n[…]\nCachorro-quente de Coney Island",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Baguete",
      "descricao": "Pão longo e fino de massa simples e casca crocante, típico da França."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que objeto a palavra francesa baguette, nome do pão comprido e fino, designa originalmente?",
    "resposta": "Varinha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Baguette"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Baguette",
        "situacao": "ok",
        "texto": "A baguette (; French: [baɡɛt] ) is a long, thin type of bread commonly made from basic lean dough. The dough of the traditional baguette is defined by French law. It is distinguishable by its length and crisp crust.\n[…]\nBaguettes are closely connected to France, though they are made worldwide. In France, not all long loaves are baguettes; for example, a short, almost rugby ball-shaped loaf is a bâtard (literally, bastard); its origin is variously explained but undocumented. Another tubular-shaped loaf is known as a flûte, also known in the United States as a parisienne. Flûtes closely resemble baguettes but are about twice the size.\n[…]\nAs part of the traditional continental breakfast in France, slices of baguette, known as tartines, are spread with butter and jam and sometimes dunked in bowls of coffee or hot chocolate.\n[…]\nAs of the 2000s, there is increasing customer demand in France for only partially baked baguettes. In 2004, the bakery chain Marie Blachère introduced the option to select three varieties of baguettes distinguished by baking time: bien cuite (well done), dorée (golden) and blanche (white).\n[…]\nOutside France, baguettes are also made with other doughs. For example, the Vietnamese bánh mì uses a high proportion of rice flour, while many North American bakeries make whole wheat, multigrain, and sourdough baguettes alongside French-style loaves. In Cambodia, it is found in the form of a hot sandwich filled called num pang.\n[…]\nAlgeria consumes about 49 million baguettes per day, and France consumes about 30 million.\n[…]\nMedia related to Baguettes at Wikimedia Commons\n[…]\nAbout the Baguette – an investigation into the origin of the baguette"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baguete",
        "situacao": "ok",
        "texto": "A baguete (do francês baguette) é uma variedade de pão francês característico por sua forma alongada e casca crocante.\n[…]\nO hábito de consumir pães pequenos parece ser relativamente recente, pois no século XVIII na França era muito consumido o pão escuro - chamado de “pão do povo” - pois o alimento feito com farinha branca era consumido principalmente pela nobreza/burguesia devido ao alto preço. No século XIX a farinha branca popularizou-se e foi criado a baguete, com uma casca externa dourada e crocante e miolo interior macio. E nesse período, a elite brasileira ao viajar à França impressionou-se com a baguete.\n[…]\nDurante a Exposição Universal de 2015, realizada em Milão, padeiros italianos e franceses prepararam uma baguete de 122,4 metros e assim, entraram para o Guiness Book. Após a marca estabelecida, o pão foi coberto com o creme Nutella, fatiada em 2.400 partes e distribuídas aos visitantes da feira. A marca anterior do recorde era de um supermercado vietnamita, que preparou uma baguette de 111 metros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Abacaxi",
      "descricao": "Fruta tropical da planta Ananas comosus, nativa da América do Sul"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "De origem tupi, o nome abacaxi descreve a fruta por qual característica?",
    "resposta": "Cheirosa",
    "distratores": [
      "Espinhosa",
      "Dourada",
      "Azeda"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Abacaxi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Abacaxi",
        "situacao": "ok",
        "texto": "Ananás (português europeu) ou abacaxi (português brasileiro) (Ananas comosus) é uma infrutescência tropical produzida pela planta de mesmo nome, caracterizada como uma planta monocotiledônea da família das bromeliáceas da subfamília Bromelioideae. É um símbolo das regiões tropicais e subtropicais. Os abacaxizeiros cultivados pertencem à espécie Ananas comosus, que compreende muitas variedades frut\n[…]\nApesar do que dita o senso comum, o abacaxi não é uma fruta cítrica.\n[…]\nDe acordo com o escritor e linguista Clóvis Chiaradia, o termo \"abacaxi\" (em português brasileiro) apresenta duas possíveis etimologias, ambas provenientes da família Tupi-Guarani, elas são: a) da junção dos termos \"I'bá\" (fruto) e \"cati\" ou \"caxi\" (cheiroso), ou seja, \"fruto que recende\"; b) da junção dos termos \"I'bá\" (fruto), \"caá\" (folha) e \"ti\" ou \"xi\" (fruto de ponta aguda).\n[…]\nAlém da mudança não explicada de ⟨i⟩ em ⟨a⟩ de \"I'bá\", todas as menções à palavra \"abacaxi\" até meados do século XVIII são em referência ao Rio Abacaxis e ao povo indígena hoje extinto que habitava o interior da Amazônia, região que historicamente não possuía falantes de tupi antigo — registros do uso daquela palavra para a fruta só surgiriam no século seguinte, não parecendo correto supor que a etimologia final seja \"fruto que recende\".\n[…]\nEm Portugal, o termo \"abacaxi\" é usado para distinguir a fruta importada da América do Sul e Central da fruta cultivada localmente, normeadamente nos Açores.\n[…]\nAs espécies selvagens de abacaxis e suas variedades principais são: Ananas ananassoides, var. nanus (ananaí-da-amazônia) e var. typicus (ananás-do-campo); A. bracteatus, var. albus (ananás-branco-do-mato), var. rudis (ananás-vermelho-do-mato), e var. tricolor; A. fritzmuelleri e A. lucidus (curauá-da-amazônia). Todos têm as margens das folhas armadas de espinhos, exceto a última, nas quais, praticamente, só existe um acúleo terminal.\n[…]\nToda Fruta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Pimenta-do-reino",
      "descricao": "Especiaria feita dos frutos secos da trepadeira Piper nigrum, nativa da Índia, em grãos pretos ou brancos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nativa da Índia, por que a pimenta-do-reino recebeu esse nome no Brasil colonial?",
    "resposta": "Chegava de Portugal, o Reino",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pimenta-do-reino"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pimenta-do-reino",
        "situacao": "ok",
        "texto": "A pimenta-preta (Piper nigrum, também conhecida como pimenta-redonda, ou pimenta-do-reino), é uma das mais antigas e conhecidas especiarias. É o produto agrícola de maior influência em eventos históricos podendo ser traçado um paralelo com a importância do petróleo nos tempos modernos. Os seus grãos, secos e moídos, são muito usados na culinária de diversos países. Tem um sabor forte, levemente pi\n[…]\nPimenta verde\n[…]\nPimenta branca\n[…]\nA pimenta produzida por esse processo apresenta a coloração branca e o odor característico de pimenta do reino. Após maceração e lavagem, a pimenta é seca ao sol, classificada e embalada em sacos duplos de polipropileno com capacidade de 50 kg. Não é recomendada a secagem da pimenta branca em secadores.\n[…]\nPimenta vermelha\n[…]\nPimenta preta\n[…]\nO comércio da pimenta era bastante ativo no subcontinente indiano, de onde era trazida por mercadores muçulmanos para o Ocidente, onde era distribuída por genoveses e venezianos. Historicamente o seu valor chegava a ser tão alto que ela foi utilizada como moeda: conta-se que Alarico I, o Visigodo exigiu de Roma um resgate de ouro, prata e pimenta.\n[…]\nA busca por essa especiaria, utilizada e valorizada desde tempos imemoriais, foi uma das principais causas da expansão — e apogeu — do império português no Oriente. Um quintal de grãos de pimenta (60 kg) chegou a valer, à época, 52 gramas de ouro.\n[…]\nOs maiores importadores atuais da pimenta brasileira são os Estados Unidos, Holanda, Argentina, Alemanha, Espanha, México e França. Enquanto a Índia, maior produtor mundial de pimenta do reino consome 50% do total produzido, o Brasil consome apenas 12% na forma de grãos inteiros, grãos moídos, em misturas com outros condimentos principalmente cominho, patês, molhos, maionese e embutidos (salame, salsicha, mortadela, presunto).\n[…]\nAssociação Brasileira de Exportadores e Produtores de Pimenta do Reino"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Kiwi",
      "descricao": "Fruto comestível de trepadeiras do gênero Actinidia, nativo da China"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes chamada de groselha-chinesa, a fruta passou a ser vendida como kiwi pelos exportadores neozelandeses. Em homenagem a quê?",
    "resposta": "À ave símbolo da Nova Zelândia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kiwifruit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kiwifruit",
        "situacao": "ok",
        "texto": "Kiwifruit (often shortened to kiwi), or Chinese gooseberry (traditional Chinese: 獼猴桃; simplified Chinese: 猕猴桃; pinyin: míhóutáo), is the edible fruit (botanically, a berry) of several species of woody vines in the genus Actinidia. The most common cultivar group of kiwifruit (Actinidia chinensis var. deliciosa 'Hayward') is oval, about the size of a large hen's egg: 5–8 centimetres (2–3 inches) in \n[…]\nIn 1959, Turners & Growers, a major New Zealand exporter, began using the name \"kiwifruit\" after being advised by a United States client, Norman Sondag, that products with the name Chinese gooseberry may have been having difficulty passing through quarantine.\n[…]\nThe name kiwifruit was coined by Jack Turner of Turners & Growers, referencing kiwi, an informal name used to describe New Zealanders, which Turner felt that American servicemen stationed in the Pacific during World War II would prefer. The name was first registered by Turners & Growers on 15 June 1959, and by 1970, all exports from New Zealand used the name kiwifruit.\n[…]\nNumerous myths are associated with the naming of kiwifruit, including that it is a reference to New Zealand's furry, brown, national bird – the kiwi, or that the name Chinese gooseberry was replaced in response to anti-Chinese sentiment in the United States. In New Zealand and Australia, the word kiwi alone either refers to the bird or is used as a nickname for New Zealanders.\n[…]\nCultivation of Chinese gooseberries spread from China in the early 20th century to New Zealand, where the first commercial plantings occurred. After the Hayward variety was developed, the fruit was consumed by British and American servicemen stationed in New Zealand during World War II. Kiwifruits were exported to Great Britain and Australia from 1953, and then to California from 1959.\n[…]\nMedia related to Kiwifruit at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Actinidia_deliciosa",
        "situacao": "ok",
        "texto": "Actinidia deliciosa, conhecido como quiuí, quivi ou kiwi é uma espécie de planta frutífera, originária do sul da China, cujo fruto é botanicamente classificado como uma baga. São plantas típicas de locais com clima temperado ou subtropical de montanha. As variedades de fruto mais amplamente comercializadas são produzidas por diversos cultivares da espécie Actinidia deliciosa e, em muito menor quan\n[…]\nO cultivar mais comum, o Actinidia deliciosa 'Hayward', foi produzido por Hayward Wright em Avondale, Nova Zelândia, por volta de 1924. Era inicialmente cultivado apenas em pomares domésticos, mas a plantação comercial começou na década de 1940, sendo vendido com o nome de groselha chinesa (Chinese gooseberry).\n[…]\nHoje, na Europa e na América, o produto é comercializado com o nome de kiwi, originalmente uma palavra maori que designa uma ave terrestre endémica na Nova Zelândia, usada como símbolo daquele país. A partir do nome \"groselha chinesa\", em meados do século XX o fruto foi rebatizado na Nova Zelândia, o primeiro país onde foi produzido comercialmente em larga escala, passando a designar-se por kiwi.\n[…]\nA Itália é, hoje, o maior produtor mundial do fruto, seguida pela Nova Zelândia, Chile, França, Grécia, Japão e Estados Unidos. O kiwi é também produzido na China, a sua terra de origem, mas aquele país nunca conseguiu integrar a lista dos 10 maiores produtores mundiais. Na China, é cultivado principalmente na região montanhosa em torno do rio Iangtzé. Outra região produtora é a província de Sichuan.\n[…]\nEm 2015 decorreu também o III Congresso Nacional do Kiwi, na cidade de Felgueiras. O concelho produziu 600 toneladas de kiwis em 2014.\n[…]\nKiwi: 7 Benefícios Para Saúde, Propriedades e Para Que Serve\n[…]\nKiwi\n[…]\nComo cultivar kiwi e dados nutricionais do fruto\n[…]\nKiwifruits na Austrália\n[…]\nPágina oficial da Seeka Kiwifruit Industries",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Açaí",
      "descricao": "Fruto roxo-escuro da palmeira amazônica Euterpe oleracea, base do açaí na tigela e de pratos do Pará."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Vindo do tupi, o nome açaí costuma ser traduzido como fruta que faz o quê?",
    "resposta": "Que chora",
    "fonte": [
      "https://en.wikipedia.org/wiki/A%C3%A7a%C3%AD_palm"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/A%C3%A7a%C3%AD_palm",
        "situacao": "ok",
        "texto": "The açaí palm ( ə-SY-ee, Brazilian Portuguese: [asaˈi] ; from Nheengatu asai), Euterpe oleracea, is a species of palm tree (Arecaceae) cultivated for its fruit (açaí berries, or simply açaí), hearts of palm (a vegetable), leaves, and trunk wood. Global demand for the fruit has expanded rapidly in the 21st century, and the tree is cultivated for that purpose primarily.\n[…]\nIn the binomial nomenclature, the genus Euterpe refers to the tree’s growth habit. Its specific epithet oleracea means \"vegetable\" in Latin, referring to the fruit as edible.\n[…]\nThe oil compartments in açaí fruit contain polyphenols such as procyanidin oligomers and vanillic acid, syringic acid, p-hydroxybenzoic acid, protocatechuic acid, and ferulic acid, which were shown to degrade substantially during storage or exposure to heat. Although these compounds are under study for potential health effects, there remains no substantial evidence that açaí polyphenols have any effect in humans.\n[…]\nAçaí oil is green in color, has a bland aroma, and is high in oleic and palmitic fatty acids.\n[…]\nComprising 80% of the fruit mass, açaí seeds may be ground for livestock food or as a component of organic soil for plants. Planted seeds are used for new palm tree stock, which, under the right growing conditions, can require months to form seedlings. Seeds may become waste in landfills or used as fuel for producing bricks.\n[…]\nOrally administered açaí has been tested as a contrast agent for magnetic resonance imaging (MRI) of the gastrointestinal system. Its anthocyanins have also been characterized for stability as a natural food coloring agent.\n[…]\nEuterpe edulis\n[…]\nEuterpe precatoria\n[…]\nFeira do Açaí\n[…]\nNicholas Gill. \"How Açaí Helped Save Amazonian Forests\". NewWorlder.\n[…]\nPictures of açaí palms trees and fruit from an article by The Nature Conservancy.\n[…]\n\"Acai 'super-fruit' not so great\". The World, Public Radio International"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A%C3%A7a%C3%AD",
        "situacao": "ok",
        "texto": "O açaí (nome científico: Euterpe oleracea) é uma palmeira muito comum na região da Amazônia que produz um fruto bacáceo de cor roxa (a parede do órgão ovário amadurece e forma a camada externa comestível), muito utilizado na confecção de alimentos e bebidas. A palmeira do açaí é por vezes confundida, no estado do Pará, com a palmeira juçara, que embora seja outro tipo de palmeira, dá palmito de ex\n[…]\nCom o reconhecimento do açaí como um fruto com elevado poder energético e vitamínico os mercados nacional e internacional despertaram seu interesse pela fruta, promovendo assim um aumento da demanda, que segundo o plano estratégico Pará 2030 a exportação tem tido um crescimento médio de 13% ao ano. Tendo em vista a defasagem natural da oferta uma consequência clara desse aumento do consumo do açaí é sua elevação de preço.\n[…]\nNo mercado a polpa da fruta é o líder de exportação sendo responsável por 97%, porém outro produto que vem ganhando destaque é o mix, uma mistura de açaí com banana e guaraná, que em 2014 representava 0,2% e passou a 3% do volume comercializado.[carece de fontes]?\n[…]\nCom a verticalização da produção do açaí temos a expansão do consumo do açaí, sob as mais diversas formas, sendo criadas diversas linhas de produtos tendo em sua composição está fruta que ganha o titulo de \"mainstream\" . Diante desse cenário várias combinações do açaí são desenvolvidas na indústria de cosméticos, alimentação e farmacêutica. Abaixo elencaremos os principais produtos que tem como base o açaí.\n[…]\nAlém do uso da fruta o no processo de verticalização da produção temos também o potencial gerado pelos subprodutos do açaí que tem como base os caroços que são descartados na obtenção da polpa do açaí.\n[…]\nEm 2018, pesquisadores do curso de Bacharelado em Design, da Uepa, apresentaram a tecnologia que transforma as fibras do caroço de Açaí em um tecido não tecido.\n[…]\nÓleo de açaí\n[…]\nFeira do Açaí",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Abacate",
      "descricao": "Fruto da Persea americana, de casca escura e polpa cremosa com um grande caroço."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na língua náuatle, dos astecas, a palavra que deu origem a abacate também designava qual parte do corpo?",
    "resposta": "Testículo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Avocado"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Avocado",
        "situacao": "ok",
        "texto": "The avocado, alligator pear or avocado pear (Persea americana) is an evergreen tree in the laurel family (Lauraceae). It is native to the Americas, with archaeological evidence of early human avocado use dating back thousands of years across various regions of Central and South America. It was prized for its large and unusually oily fruit.\n[…]\nThe word avocado comes from the Spanish aguacate, which derives from the Nahuatl (Mexican) word āhuacatl [aːˈwakat͡ɬ], which goes back to the proto-Aztecan *pa:wa. In Molina's Nahuatl dictionary \"auacatl\" is given also as the translation for compañón \"testicle\", and this has been taken up in popular culture where a frequent claim is that testicle was the word's original meaning.\n[…]\nThis is not the case, as the original meaning can be reconstructed as \"avocado\" – rather the word seems to have been used in Nahuatl as a euphemism for \"testicle\".\n[…]\nIn Central American, Caribbean Spanish-speaking countries, and Spain, it is known by the Spanish name aguacate, while Argentina, Chile, Perú and Uruguay use a Quechua-derived word palta. In Portuguese, it is abacate. The Nahuatl āhuacatl can be compounded with other words, as in ahuacamolli, meaning avocado soup or sauce, from which the Spanish word guacamole derives.\n[…]\nAvocados have diverse fats:\n[…]\nIn addition to the fruit, the leaves of Mexican avocados (Persea americana var. drymifolia) are used in some cuisines as a spice, with a flavor somewhat reminiscent of anise. They are sold both dried and fresh, toasted before use, and either crumbled or used whole, commonly in bean dishes.\n[…]\nAvocado plants can be used to make tea from either the leaves or seeds.\n[…]\nBruce Shaffer, B. Nigel Wolstenhome, Anthony W. Whiley, eds. (2012). The Avocado: Botany, Production and Uses. CABI. ISBN 978-1-84593-701-0."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Persea_americana",
        "situacao": "ok",
        "texto": "O abacateiro, cujo fruto é o abacate, também designado como abacado, abacate, loiro-abacate e louro-abacate, é uma espécie da família Lauraceae, de nome científico Persea americana.\n[…]\nNervura principal proeminente na face abaxial, com nervuras secundárias oblíquas, também proeminentes, dando origem às nervuras terciárias que se anastomosam em fina trama.\n[…]\nO abacateiro cresce mais facilmente em solos leves, profundos, drenados e ligeiramente ácidos. As melhores condições climáticas são encontradas em regiões com chuvas em torno de 1200 milímetros anuais.\n[…]\nSão conhecidas mais de 500 variedades, de três origens diferentes: a guatemalteca, a antilhana e a mexicana. A parte comestível é a polpa verde-amarelada, de consistência mole, que envolve a grande semente.\n[…]\nO cultivo de abacates é criticado pelo seu impacto ambiental, uma vez que este necessita de enormes quantidades de água, o que pode causar problemas em zonas com pouca água. Para a produção de um quilo de abacates são necessários (em média) 1000 litros de água (um quilo de tomates necessita de 180 litros de água). Dependendo da variedade de abacate são necessários entre 70 a 300 litros de água para sustentar um abacate.\n[…]\nA importação de abacates também aumenta o impacto ambiental do abacate, uma vez que este é acondicionado usando muito plástico e tem de ser transportado a uma temperatura constante de 6 °C, o que consome muita energia.\n[…]\nEm Portugal, por causa do impacto ambiental deste fruto, a Agência Portuguesa do Ambiente deu um parecer desfavorável à exploração de mais de 120 hectares de abacates no Algarve.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Sanduíche",
      "descricao": "Lanche de recheio, como carne, queijo ou frios, colocado entre fatias de pão."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda, por que o quarto conde de Sandwich, nobre inglês do século dezoito, pedia carne entre duas fatias de pão?",
    "resposta": "Para não largar o jogo de cartas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sandwich",
      "https://en.wikipedia.org/wiki/John_Montagu,_4th_Earl_of_Sandwich"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sandwich",
        "situacao": "ok",
        "texto": "A sandwich is a dish typically consisting variously of meat, cheese, sauces, and vegetables used as a filling between slices of bread, or placed atop a slice of bread (known as an open sandwich); or, more generally, any dish in which bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient food in the Western world, and over time it has become prev\n[…]\nSimilarly, Oreos and Custard creams are described as sandwich biscuits (UK/Commonwealth) or sandwich cookies (US) because they consist of a soft filling between the baked layers. In corporate finance, Dutch Sandwich and Double Irish with a Dutch sandwich refer to schemes for tax evasion.\n[…]\nThe colloquial Scottish word piece may refer either to a sandwich or to a light meal, especially one that includes a sandwich. For example, the phrase jeely piece refers to a jam sandwich.\n[…]\nSandwiches have been widely sold in cafes, railway stations, pubs and diners since the invention of sliced bread in the 1920s. Sandwiches kept unwrapped, drying up and edges curling, until they were sold, were widely found in Britain until the 1970s. Cafes and buffets in railway stations and on trains were notorious, and the term \"British Rail sandwich\" was often used satirically.\n[…]\nIn 1979 the British store chain Marks & Spencer introduced a small range of chilled, pre-made sandwiches sold in wedge-shaped boxes, sealed to keep them fresh. As they proved popular, a small experiment involving five stores rapidly grew to cover more than one hundred stores. Within a year, the store was looking for ways to manufacture sandwiches at an industrial scale. By the end of the decade, the British sandwich industry had become worth £1 billion.\n[…]\nIn 2017, the British sandwich industry made and sold £8 billion worth of sandwiches.\n[…]\nThe British Sandwich Association"
      },
      {
        "url": "https://en.wikipedia.org/wiki/John_Montagu,_4th_Earl_of_Sandwich",
        "situacao": "ok",
        "texto": "John Montagu, 4th Earl of Sandwich, PC, FRS (13 November 1718 – 30 April 1792) was a British statesman who succeeded his grandfather Edward Montagu, 3rd Earl of Sandwich, as the Earl of Sandwich in 1729, at the age of ten. He held various military and political offices during his life, including Postmaster General, First Lord of the Admiralty, and Secretary of State for the Northern Department. He\n[…]\n1729: Succeeds his grandfather, Edward Montagu, 3rd Earl of Sandwich, in the earldom\n[…]\nA plate of Sir Peter Lely's 1666 portrait of the 1st Earl appeared in Fisher's Drawing Room Scrap Book, 1837, together with a facsimile signature and a poetical illustration  The Earl of Sandwich. by Letitia Elizabeth Landon, which actually relates to the 4th Earl (the islands being so-called in his honour).\n[…]\nThe comedian Woody Allen wrote a short, satirical biography of the Earl, detailing his struggles to create the perfect sandwich, which was published as an article in The New Yorker on 8 October 1966.\n[…]\nActor Bill Nighy was cast as Lord Sandwich in the TV series, Longitude in 2000.\n[…]\nLevy, Martin (January 2005). Love & Madness: The Murder of Martha Ray, Mistress of the Fourth Earl of Sandwich Paperback. Harper Perennial. pp. 240 pages. ISBN 0-06-055975-6.\n[…]\nRodger, N. A. M (1993). The Insatiable Earl: A Life of John Montagu, Fourth Earl of Sandwich 1718-1792. London: HarperCollins. pp. 425 pages. ISBN 978-0-002-15784-1.\n[…]\nRodger, N. A. M. \"Montagu, John, fourth earl of Sandwich (1718–1792)\". Oxford Dictionary of National Biography (online ed.). Oxford University Press. doi:10.1093/ref:odnb/19026. (Subscription, Wikipedia Library access or UK public library membership required.)\n[…]\n\"Montagu, John, 4th Earl of Sandwich (MNTG735J)\". A Cambridge Alumni Database. University of Cambridge.\n[…]\nGuide to the papers of Lord Sandwich, 1718–1792 held and digitised by the National Library of Australia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sandu%C3%ADche",
        "situacao": "ok",
        "texto": "Um sanduíche (plural sanduíches; também chamado sandes em Portugal, chandula em Angola e, coloquialmente no Brasil, sanduba ou lanche) é um prato que consiste tipicamente em carne, queijo, molhos ou vegetais usados como recheio entre fatias de pão, ou colocados sobre uma fatia; ou, de forma mais geral, qualquer prato em que o pão serve como recipiente ou envoltório para outro alimento.\n[…]\nO nome moderno surgiu em 1762 com John Montagu, 4.º Conde de Sandwich, aristocrata inglês que, para não interromper jogos de cartas, pedia rosbife entre duas fatias de pão torrado. A moda espalhou-se rapidamente pela aristocracia londrina e, no século XIX, com a Revolução Industrial, tornou-se essencial para trabalhadores urbanos.\n[…]\nJames Cook baptizou as atuais ilhas do Havaí como «Ilhas Sandwich» em homenagem ao conde. Existem ainda as Ilhas Sandwich do Sul no Atlântico Sul.\n[…]\nHá debate jurídico e cultural sobre o que constitui um sanduíche:\n[…]\nUSDA (EUA): sanduíche fechado ≥ 35 % carne cozida e ≤ 50 % pão; aberto ≥ 50 % carne cozida.\n[…]\nTribunal de Boston (2006): burrito, taco e quesadilla não são sanduíches.\n[…]\nTribunal de Indiana (2024): tacos e burritos são sanduíches de estilo mexicano.\n[…]\nBritish Sandwich Association: “qualquer forma de pão com recheio, geralmente montado frio” – inclui wraps e bagels, exclui hambúrgueres.\n[…]\nDesde a invenção do pão de forma (década de 1920), os sanduíches são vendidos em estações, cafés e pubs. Em 1979, a Marks & Spencer lançou os sanduíches triangulares refrigerados embalados, revolucionando o mercado britânico – em 2017 a indústria valia £8 mil milhões.\n[…]\nBifana (Portugal) – carne de porco marinada; associada a Vendas Novas, muito consumida em festas populares.\n[…]\nBritish Sandwich & Food to Go Association",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Cerveja",
      "descricao": "Bebida alcoólica produzida pela fermentação de cereais maltados, em geral cevada, com lúpulo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a maioria das garrafas de cerveja é feita de vidro marrom ou verde?",
    "resposta": "Para proteger a bebida da luz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beer_bottle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beer_bottle",
        "situacao": "ok",
        "texto": "A beer bottle is a bottle designed as a container for beer. Such designs vary greatly in size and shape, but the glass commonly is brown or green to reduce spoilage from light, especially ultraviolet."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Garrafa_de_cerveja",
        "situacao": "ok",
        "texto": "Uma garrafa de cerveja é uma garrafa especialmente adaptada para conter cerveja, ou seja, uma bebida altamente carbonatada, muitas vezes ainda em fermentação na garrafa, frágil quando exposta à luz e que requer vários tamanhos de capacidade para se adaptar aos perfis de consumo.\n[…]\nO formato da garrafa e a espessura do vidro são importantes, pois devem suportar a pressão do gás dissolvido. Em alguns casos, as garrafas são refermentadas (uma técnica para amadurecer e carbonatar a bebida dentro da garrafa), o que envolve pressão adicional . Dependendo das regulamentações dos países, ela geralmente contém um volume de um quinto, um quarto, um terço, meio ou um litro — nos três primeiros casos, é comumente chamada de \"garrafa pequena\" devido à sua menor capacidade.\n[…]\nEmbora existam garrafas de vidro incolores geralmente destinadas as cervejas ou alcopop de cor pronunciada, o uso usual é para vidros marrons ou mesmo verdes. Garrafas de vidro verde foram produzidas por muito tempo no leste europeu e na China, até a década de 1980.\n[…]\nPesquisas comprovam a rápida deterioração da cerveja quando exposta à luz através de vidro verde ou incolor, enquanto o vidro marrom oferece proteção suficiente. Os estudos mostram ainda a preferência do consumidor por esse tipo de cor (marrom).\n[…]\nNovos materiais estão sendo usados ​​para combater a fotossensibilidade da cerveja: copos incolores contendo um óxido metálico que protege contra a luz e os raios ultravioleta, que induzem a liberação de riboflavina e destroem a isohumulona, ​​molécula que contribui para o amargor e é derivada do lúpulo. A molécula resultante desta transformação, 3-metilbut-2-eno-1-tiol, é muito semelhante química e olfactivamente à do tiol do mefitídeos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Leite condensado",
      "descricao": "Leite de vaca do qual se retira parte da água e ao qual se adiciona açúcar, base de muitos doces brasileiros."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No século dezenove, antes das geladeiras, que problema do leite fresco o leite condensado em lata veio resolver?",
    "resposta": "O leite estragava rápido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Condensed_milk"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Condensed_milk",
        "situacao": "ok",
        "texto": "Condensed milk is cow's milk from which water has been removed (roughly 60% of it). It is most often found with sugar added, in the form of sweetened condensed milk, to the extent that the terms \"condensed milk\" and \"sweetened condensed milk\" are often used interchangeably today. Sweetened condensed milk is a very thick, sweet product, which when canned can last for years without refrigeration if \n[…]\nThe First World War regenerated interest in, and the market for, condensed milk, primarily due to its storage and transportation benefits. In the U.S. the higher price for raw milk paid by condenseries created significant problems for the cheese industry.\n[…]\nIn the Philippines, condensed milk is mixed with some evaporated milk and eggs, spooned into shallow metal containers over liquid caramelized sugar, and then steamed to make a stiffer and more filling version of crème caramel known as leche flan, also common in Brazil under the name pudim de leite.\n[…]\nIn Brazil, this is done by baking the unopened can in a bain-marie, the result being doce de leite. In Britain and Ireland, the contents of a boiled can are used as the layer between the biscuit base and the banana and cream level in banoffee. There is also a pastry-based tart that is popular in the county of Kent, England called Gypsy tart. The pastry case is then filled with a mixture of brown sugar and either condensed milk, evaporated milk, or a mixture of the two before being baked.\n[…]\nCondensed milk can be made from evaporated milk by mixing by weight, for every 100 grams of evaporated milk, 82 grams of white sugar (for a condensed milk comprising 45% added sucrose) or 85 grams of white sugar (for approx 46% content of sucrose). The homemade preparation is heated gradually until sugar is fully dissolved then it is cooled and stored in a container.\n[…]\nMedia related to Condensed milk at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Leite_condensado",
        "situacao": "ok",
        "texto": "O leite condensado é o produto resultante da remoção parcial de água do leite e frequentemente adicionado de açúcar, descoberto pelo francês Nicolas Appert em 1820, na pesquisa para esterilização e conservação de alimentos em embalagens herméticas. Em 1828, o inventor francês Malbec aplicou o método de Appert ao leite fresco de vacas para criar o leite condensado.\n[…]\nO leite condensado, com ou sem açúcar e enlatado, foi muito apreciado no século XIX e início do século XX como alimento infantil, e no período anterior à Primeira Guerra Mundial, antes do advento da geladeira elétrica doméstica, como fonte alternativa ao leite fresco. Na década de 1940, devido à escassez de açúcar in natura, o leite condensado se populariza, principalmente ao servir de ingrediente para a confecção de sobremesas.\n[…]\nEm 1888, o Jornal do Comércio do Rio de Janeiro anuncia o \"leite condensado suíço\" à venda por 600 réis a lata, na Travessa de São Francisco de Paula, 22a, centro da cidade do Rio de Janeiro.\n[…]\nAtualmente a maior fábrica de leite condensado do mundo se localiza na cidade de Montes Claros-MG, pertencente ao grupo Nestlé[carece de fontes]?.\n[…]\nNo Brasil, o leite condensado é de grande consumo e mais do que substituir o leite in natura é popularmente muito utilizado na preparação de sobremesas e coberturas de bolos e tortas e é o ingrediente principal do brigadeiro e do pudim de leite condensado.\n[…]\nO leite condensado caseiro é completamente diferente do comercial e possui uma alta adição de açúcar, e além do leite integral, pode ser preparado com a adição de leite em pó integral e lactose. Mas existem variedades como o leite evaporado e pressurizado a 120 °C que não contém açúcar ou contém pouco açúcar, que é o caso do leite condensado industrial que compramos nas latinhas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Gim-tônica",
      "descricao": "Coquetel de gim com água tônica, servido com gelo e limão, popularizado pelos britânicos na Índia colonial."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Índia colonial, a água tônica era tomada como remédio contra a malária. Por que os britânicos misturavam gim a ela?",
    "resposta": "Para disfarçar o amargor do quinino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gin_and_tonic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gin_and_tonic",
        "situacao": "ok",
        "texto": "A gin and tonic is a highball cocktail made with gin and tonic water poured over ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3. It is usually garnished with a slice or wedge of lime. To preserve effervescence, the tonic can be poured down a bar spoon.\n[…]\nIn India and other tropical regions, malaria was a persistent problem for Europeans, and during the 18th century the Scottish doctor George Cleghorn studied how quinine, a traditional cure for malaria, could be used to prevent the disease. The first mixture of tonic water began to be sold in 1858, and the British military took to procuring massive amounts of the beverage for medicinal purposes, mixing it with lime to prevent scurvy.\n[…]\nGin had been used by soldiers in battle as a calming agent as early as the Thirty Years' War. A similar gin ration had been in place for military officers in British India. These officers took to adding sugar and gin to this tonic water in order to make the cure more palatable, thus creating the cocktail. This was not the first time liquor was used with quinine to improve taste: certain surgeons in the American Civil War recommended taking the antimalarial with whisky.\n[…]\nA 2004 study found that after 12 hours, \"considerable quantities (500 to 1,000 ml) of tonic water may, for a short period of time, lead to quinine plasma levels at the lower limit of therapeutic efficacy and may, in fact, cause transitory suppression of parasites\". This method of consumption of quinine was impractical for malaria prophylaxis, as the amount of drug needed \"cannot be maintained with even large amounts of tonic\".\n[…]\nDubonnet, another drink invented to encourage European colonial soldiers in tropical climates to take quinine\n[…]\nMedia related to Gin and tonic at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gim-t%C3%B4nica",
        "situacao": "ok",
        "texto": "O gim-tônica (português brasileiro) ou gin tónico (português europeu) é uma bebida alcoólica que surgiu com a necessidade dos soldados ingleses consumirem quinino para evitar a malária. Como o tônico com quinino era muito amargo, os soldados adicionavam gim para torná-lo mais palatável.\n[…]\nAtualmente é bastante difundido no mundo, especialmente no Reino Unido e consiste na mistura de gim, agua tônica de quinino gaseificada (uma espécie de refrigerante) e lima, em variadas proporções.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Mel",
      "descricao": "Substância doce e viscosa produzida pelas abelhas a partir do néctar das flores."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Guardado fechado, o mel dura anos sem estragar. Por que bactérias e fungos não conseguem se desenvolver nele?",
    "resposta": "Tem pouca água e muito açúcar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Honey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Honey",
        "situacao": "ok",
        "texto": "Honey is a sweet and viscous foodstuff made by several species of bees, the best-known of which are honey bees. Honey is made and stored to nourish bee colonies. Bees produce honey by gathering and then refining the sugary secretions of plants (primarily floral nectar) or the secretions of other insects, like the honeydew of aphids.\n[…]\nThe long shelf life of honey is attributed to an enzyme found in the stomach of bees. The bees mix glucose oxidase with expelled nectar they previously consumed, creating two byproducts – gluconic acid and hydrogen peroxide, which are partially responsible for honey acidity and suppression of bacterial growth.\n[…]\nHoney has long been used as a topical antibiotic by practitioners of traditional and herbal medicine. Honey's antibacterial effects were first demonstrated by the Dutch scientist Bernardus Adrianus van Ketel in 1892. Since then, numerous studies have shown that honey has broad-spectrum antibacterial activity against gram-positive and gram-negative bacteria, although potency varies widely between different honeys.\n[…]\nDue to the proliferation of antibiotic-resistant bacteria in the last few decades, there has been renewed interest in researching the antibacterial properties of honey. Components of honey under preliminary research for potential antibiotic use include methylglyoxal, hydrogen peroxide, and royalisin (also called defensin-1).\n[…]\nPeople who have a weakened immune system may be at risk of bacterial or fungal infection from eating honey."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mel",
        "situacao": "ok",
        "texto": "O mel (plural: meles ou méis) é um alimento, geralmente encontrado em estado líquido viscoso e açucarado, que é produzido pelas abelhas a partir do néctar recolhido de flores e processado pelas enzimas digestivas desses insetos, sendo armazenado em favos em suas colmeias para servir-lhes de alimento.\n[…]\nApós sair da colmeia, a abelha colhe néctar rico em açúcar ou melada. O néctar da flor tem geralmente um teor de água de 70 a 80% e é muito menos viscoso do que o mel acabado, que costuma ter um teor de água em torno de 18%. O teor de água da melada de afídios e outros insetos é geralmente muito semelhante ao do sumo do qual esses insetos se alimentam e é geralmente um pouco mais diluído do que o néctar. Uma fonte descreve o teor de água da melada em torno de 89%.\n[…]\nEste mel ainda tem um teor de água muito elevado, de até 70%, dependendo da concentração do néctar colhido. Nesta etapa do seu refinamento, o teor de água do mel é suficientemente alto para que os esporos ubíquos de leveduras se possam reproduzir nele, um processo que, se não for controlado, consumiria rapidamente os açúcares do novo mel. Para combater isto, as abelhas utilizam uma habilidade pouco comum entre os insetos: a geração endógena de calor.\n[…]\nO processo de evaporação continua até que o mel atinja o seu teor final de água, entre 15,5% e 18%. Isto concentra os açúcares muito além do ponto de saturação da água, ou seja, há muito mais açúcar dissolvido na pouca água que resta no mel do que poderia ser dissolvido num volume equivalente de água. O mel, mesmo a temperaturas de colmeia, é, portanto, uma solução super-resfriada de vários açúcares em água.\n[…]\nEnquanto a sua concentração de água não ultrapassar 18%, o mel tem uma vida útil indefinida, tanto dentro da colmeia quanto depois de ser extraído por um apicultor.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Vinho",
      "descricao": "Bebida alcoólica feita da fermentação do suco de uva."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O suco da maioria das uvas tintas é claro. De onde vem, então, a cor do vinho tinto?",
    "resposta": "Da casca da uva",
    "fonte": [
      "https://en.wikipedia.org/wiki/Red_wine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Red_wine",
        "situacao": "ok",
        "texto": "Red wine is a type of wine made from dark-colored grape varieties (red grapes). The color of the wine can range from intense violet, typical of young wines, through to brick red for mature wines and brown for older red wines. The juice from most purple grapes is greenish-white, the red color coming from anthocyan pigments present in the skin of the grape. Much of the red wine production process in"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vinho_tinto",
        "situacao": "ok",
        "texto": "Vinho tinto é a bebida resultante da fermentação do suco ou mosto extraído de uvas pretas ou tintas no qual é imperativo que haja maceração das cascas no mosto com a finalidade de se atribuir cor e sabor à bebida.\n[…]\nA polpa da fruta, tanto da uva branca quanto da uva preta é clara, quando prensada esta polpa dá origem a um suco turvo considerado “branco”. A cor do vinho é obtida de acordo com a forma com que as cascas da uva são usadas. Para tornar o vinho tinto é preciso que as cascas das uvas pretas descansem no mosto, o que é chamado de maceração.\n[…]\nA intensidade da cor no vinho tinto depende de dois fatores: primeiro, do tipo de uva empregada na sua fabricação; segundo, o tempo de maceração das cascas no mosto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Sal iodado",
      "descricao": "Sal de cozinha ao qual se adiciona iodo, por exigência de saúde pública em vários países, como o Brasil."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a lei brasileira obriga os fabricantes a acrescentar iodo ao sal de cozinha?",
    "resposta": "Para prevenir o bócio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Iodised_salt",
      "https://pt.wikipedia.org/wiki/B%C3%B3cio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iodised_salt",
        "situacao": "ok",
        "texto": "Iodized salt (also spelled iodised salt) is table salt mixed with a minuscule amount of various iodine salts. The ingestion of iodine prevents iodine deficiency. Worldwide, iodine deficiency affects about two billion people and is the leading preventable cause of intellectual and developmental disabilities. Deficiency also causes thyroid gland problems, including endemic goitre.\n[…]\nStabilizers such as dextrose (typically at about 0.04%) and sodium thiosulfate, which prevent potassium iodide from oxidizing and evaporating. These ingredients are not required for potassium iodate, which is commonly used globally for its increased stability, but is not approved by the US FDA.\n[…]\nAnti-caking agents such as calcium silicate and sodium ferrocyanide, which prevent clumping.\n[…]\nWorldwide, iodine deficiency affects two billion people and is the leading preventable cause of intellectual and developmental disabilities. According to public health experts, iodization of salt may be the world's simplest and most cost-effective measure available to improve health, only costing US$0.05 per person per year. At the World Summit for Children in\n[…]\nIodized salt is not mandatory in the United States, but it is widely available.\n[…]\nSalt can also be double-fortified with iron and iodine. The iron is microencapsulated with stearin to prevent it from reacting with the iodine in the salt. Providing iron in addition to iodine in the convenient delivery vehicle of salt, it could serve as a sustainable approach to combating both iodine and iron deficiency disorders in areas where both deficiencies are prevalent.\n[…]\nIn some countries, table salt is treated with potassium fluoride to enhance dental health.\n[…]\nIn India and China, diethylcarbamazine has been added to salt to combat lymphatic filariasis.\n[…]\nEnriched flour, an analogous function to \"enriched salt\"\n[…]\nHistory of salt"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/B%C3%B3cio",
        "situacao": "ok",
        "texto": "Bócio é um aumento do volume da glândula tireoide geralmente causado pela falta de iodo. A existência de nódulos na tireoide também é considerada bócio.\n[…]\nO bócio também pode estar relacionado à carência nutricional, fazendo a glândula tireoide inchar, agindo como um mecanismo de compensação e formar o bócio carencial. O hipertireoidismo também pode gerar um aumento da glândula tireoide, formando o bócio.\n[…]\nMultinodular: geralmente por bócio multinodular tóxico.\n[…]\nConforme a liberação de tiroxina(T4), o hormônio da tireoide, o bócio pode ser:\n[…]\nAs possíveis causas de bócio incluem:\n[…]\nDeficiência nutricional de iodo, mais comum em locais secos\n[…]\nBócio multinodular tóxico familiar ou esporádico\n[…]\nPode ser causando tanto pelo hipertiroidismo como pelo hipotireoidismo. No hipotireoidismo, a deficiência de iodo no organismo faz com que a secreção de T4 (tiroxina) seja diminuída pela tireoide. A baixa concentração desse hormônio no sangue estimula a adenohipófise a produzir e liberar TSH - hormônio tireoestimulante. Esse hormônio estimula o crescimento celular e uma maior síntese de hormônios tireoidianos por esta glândula.\n[…]\nOs sintomas são muito variáveis dependendo da doença de base. No caso da falta de iodo causa apenas problema estético, com o inchaço no pescoço, mas pode eventualmente causar dificuldade de engolir e respirar.\n[…]\nSal iodado é o método mais usado no mundo para evitar a carência de iodo. Outras medidas envolvem proteger a tireoide contra radiação, tomar suplementos e não fumar.\n[…]\nA levotiroxina e o iodo radioativo são opções no tratamento de bócios pequenos ou medianos. Os de tamanho maior necessitam cirurgia.\n[…]\nBócio difuso tóxico"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Caju",
      "descricao": "Pseudofruto amarelo ou avermelhado do cajueiro (Anacardium occidentale), com a castanha presa na ponta."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a castanha de caju precisa passar pelo calor antes de ser tirada da casca, mesmo a vendida como crua?",
    "resposta": "A casca tem um óleo tóxico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cashew"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cashew",
        "situacao": "ok",
        "texto": "Cashew is the common name of a tropical evergreen tree Anacardium occidentale, in the family Anacardiaceae. It is the source of the cashew nut and the cashew apple. The tree can grow as tall as 14 meters (46 feet).\n[…]\nThe English name derives from the Portuguese name for the fruit of the cashew tree: Caju (Portuguese pronunciation: [kaˈʒu]), also known as acaju, which itself is from the Tupi word acajú, literally meaning \"nut that produces itself\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cajueiro",
        "situacao": "ok",
        "texto": "O cajueiro (nome científico Anacardium occidentale) é uma planta  da família Anacardiaceae originária da região nordeste do Brasil, com arquitetura de copa tortuosa e de diferentes portes. Na natureza existem dois tipos: o comum (ou gigante) e o anão. O tipo comum pode atingir entre 5 e 12 metros de altura, mas em condições muito propícias pode chegar a 20 metros. O tipo anão possui altura média d\n[…]\nAlém do fruto, a casca da árvore é também utilizada como adstringente e tônico.\n[…]\nAs sementes (castanhas com casca) possuem baixa germinação quando semeadas diretamente; devem ser tratadas para eliminar os inibidores de germinação; isso pode ser obtido deixando-as em repouso dentro da água durante 48 horas, porém trocando-se a água a cada 8 horas. Semeá-las em seguida diretamente em embalagens individuais contendo substrato arenoso enriquecido de matéria orgânica. A emergência demora 10 a 20 dias e a germinação geralmente é alta.\n[…]\nO suco de seu fruto é industrializado e altamente apreciado em todo o país. A casca da castanha fornece um óleo industrial. É planta indispensável nos pomares da costa litorânea brasileira. As flores são melíferas.\n[…]\nPor ser rico em fibras, o caju é indicado para aumentar a movimentação intestinal.\n[…]\nAlgumas partes do cajueiro e do próprio caju já eram muito usadas como alimento ou medicina tradicional por várias comunidades indígenas nordestinas. Atualmente, o povo Fulni-Ô ainda faz grande uso dessa planta tradicional.\n[…]\nEm 1941 as exportações indianas de amêndoas de castanha de caju já alcançavam quase 20 mil t. Hoje a castanha é um importante item no comércio mundial. O valor total de vendas, após agregação de valor, supera a soma de US$ 2 bilhões.\n[…]\nÉ muito cultivado nas regiões tropicais da América, África e Ásia. Os maiores exportadores mundiais de amêndoa de castanha de caju (ACC) são Índia, Vietnã e Brasil.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Mandioca",
      "descricao": "Raiz da planta Manihot esculenta, base alimentar indígena e ingrediente central da cozinha brasileira"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A mandioca pertence à mesma família botânica de qual árvore amazônica, famosa pelo látex usado para fazer borracha?",
    "resposta": "Seringueira",
    "fonte": [
      "https://en.wikipedia.org/wiki/Euphorbiaceae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Euphorbiaceae",
        "situacao": "ok",
        "texto": "Euphorbiaceae (), the spurge family, is a large family of flowering plants. In English, they are also commonly called euphorbias, which is also the name of the type genus of the family. Most spurges, such as Euphorbia paralias, are herbs, but some, especially in the tropics, are shrubs or trees, such as Hevea brasiliensis. Some, such as Euphorbia canariensis, are succulent and resemble cacti becau\n[…]\nA milky latex is a characteristic of the subfamilies Euphorbioideae and Crotonoideae, and the latex of the rubber tree Hevea brasiliensis is the primary source of natural rubber. The latex is poisonous in the Euphorbioideae, but innocuous in the Crotonoideae. White mangrove, also known as blind-your-eye mangrove latex (Excoecaria agallocha), causes blistering on contact and temporary blindness if it contacts the eyes, hence its name. The latex of spurge was used as a laxative.\n[…]\nEuphorbiaceae in L. Watson and M.J. Dallwitz (1992 onwards). The families of flowering plants: descriptions, illustrations, identification, information retrieval. https://web.archive.org/web/20070103200438/http://delta-intkey.com/"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Euforbi%C3%A1ceas",
        "situacao": "ok",
        "texto": "Euphorbiaceae/euforbiáceas é uma família botânica representada por 300 gêneros e cerca de 6000 espécies. Numerosos gêneros estão representados nos Estados Unidos e/ou no Canadá. No Brasil, ocorrem cerca de 70 gêneros e 1000 espécies, de habitat e hábitos diferentes, espalhadas em todos os tipos de vegetação, representando uma das principais famílias da flora brasileira e uma das mais complexas do \n[…]\nAs espécies mais conhecidas são: a seringueira (Hevea sp.), espécie nativa da Amazônia Brasileira, a mamona (Ricinus communis), espécie africana, invasora de culturas no Brasil, e a mandioca, aipim ou macaxeira (Manihot esculenta).\n[…]\nCita-se como exemplos: a mamona, que possui um caule único, ereto e lenhoso em sua base, ramificando antes do final do primeiro ano de crescimento; o cacto-candelabro (Euphorbia ingens), que possui um caule suculento, com espinhos e folhas reduzidas. E a seringueira (Hevea brasiliensis), que pode chegar a 30 metros de altura, e traz a casca como a parte principal do tronco, onde se encontram os vasos laticíferos (próximos ao câmbio) e são os responsáveis pela produção do látex.\n[…]\nOs organismos pertencentes ao gênero Manihot como a mandioca, ao gênero Ricinus como a mamona, possuem o metabolismo do tipo C3.\n[…]\nAs Euphorbiaceae incluem diversas espécies de interesse econômico, como a Seringueira (Hevea sp.), responsável por um de nossos ciclos econômicos, até que suas sementes foram levadas para a Ásia, dando origem a plantios que inviabilizaram economicamente a exploração por extrativismo que ocorria (e ainda ocorre) no Brasil. É a fonte da maior parte de borracha natural e também fornece madeira.\n[…]\nA mandioca, aipim ou macaxeira (Manihot esculenta), é utilizada na alimentação, sendo uma importante fonte de amido  e a terceira maior fonte de carboidratos nos trópicos, depois de arroz e milho.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Cenoura",
      "descricao": "Daucus carota subsp. sativus, raiz comestível, em geral alaranjada."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na botânica, qual destes temperos é parente próximo da cenoura, da mesma família?",
    "resposta": "Coentro",
    "distratores": [
      "Manjericão",
      "Alecrim",
      "Orégano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Apiaceae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Apiaceae",
        "situacao": "ok",
        "texto": "Apiaceae ( ), also called Umbelliferae, is a family of mostly aromatic flowering plants named after the type genus Apium, and commonly known as the celery, carrot, or parsley family, or as umbellifers.\n[…]\nThe family is solidly placed within the Apiales order in the APG III system. It is closely related to Araliaceae and the boundaries between these families remain unclear. Traditionally groups within the family have been delimited largely based on fruit morphology, and the results from this have not been congruent with the more recent molecular phylogenetic analyses.\n[…]\nUmbelliferae at The Families of Flowering Plants (DELTA)\n[…]\nUmbellifer Resource Centre at the Royal Botanic Garden Edinburgh"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Apiaceae",
        "situacao": "ok",
        "texto": "Apiaceae (ou Umbelliferae nom. con.) é uma família de plantas com flor, pertencente à ordem Apiales, considerada a 16.ª maior família de plantas em diversidade, pois agrupa mais de 3 780 espécies repartidas por 4 subfamílias e cerca de 446 géneros. São geralmente herbáceas aromáticas, com folhas divididas várias vezes, caules geralmente ocos na região internodal, com canais secretores contendo óle\n[…]\nA família inclui múltiplas plantas bem conhecidas e economicamente importantes, como o ajwain, a angélica, o anis, a assa-fétida, a alcaravia, a cenoura, o aipo, o cerefólio, o coentro, o cominho, o endro, a erva-doce, o levístico, a salsa, a pastinaca e os cardos-marinhos, bem como a silphium, uma planta célebre pelo seu valor na Antiguidade Clássica Europeia, mas cuja identidade exata é incerta e que pode estar extinta.\n[…]\nAs flores são geralmente perfeitas (hermafroditas) e actinomórficas, mas podem existir flores zigomórficas na periferia da umbela, como na cenoura (Daucus carota) e no coentro, com pétalas de tamanhos desiguais, sendo as que apontam para fora da umbela maiores do que as que apontam para dentro.\n[…]\nAlgumas espécies são muito venenosas. A cicuta (Conium maculatum) forneceu o veneno para a execução de Sócrates e pode ser confundida com a cenoura-silvestre, o cominho ou o coentro. Também muito venenosa é a cicuta-aquática (Cicuta virosa). Menos tóxica é a espécie Aethusa cynapium, que, no entanto, é frequentemente confundida com a salsa, o que muitas vezes causa intoxicações.\n[…]\nCoriandrum sativum - o coentro, muito utilizado na cozinha indiana e árabe. Em Portugal, é muito utilizado no Alentejo, para enriquecer pratos tais como as açordas, as tradicionais sopa de cação utilizado  e também para temperar saladas. No Brasil, o coentro é muito utilizado na culinária brasileira nordestina e também na região Norte.\n[…]\nA família das Apiaceae na DELTA. (Secção Descrição)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Abacaxi",
      "descricao": "Fruta tropical da planta Ananas comosus, nativa da América do Sul"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O abacaxi pertence à mesma família de quais plantas ornamentais, de folhas em roseta, muito comuns em jardins tropicais?",
    "resposta": "Bromélias",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bromeliaceae",
      "https://en.wikipedia.org/wiki/Pineapple"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bromeliaceae",
        "situacao": "ok",
        "texto": "Bromeliaceae, members of which are called bromeliads (), is a family of monocot flowering plants of about 80 genera and 3700 known species, native mainly to the tropical Americas, with several species found in the American subtropics and one in tropical west Africa, Pitcairnia feliciana.\n[…]\nIt is the sister group to the Typhaceae, and together this clade is sister to the remaining lineages in the Poales. Bromeliaceae is the only family within the order that has septal nectaries and inferior ovaries. These inferior ovaries characterize the Bromelioideae, a subfamily of the Bromeliaceae. The family includes both epiphytes, such as Spanish moss (Tillandsia usneoides), and terrestrial species, such as the pineapple (Ananas comosus).\n[…]\nThe long period between the origin and diversification of bromeliads, during which no extant species evolved, suggests that there was much speciation and extinction during that time, which would explain the genetic distance of the Bromeliaceae from other families within the Poales.\n[…]\nBromelioideae\n[…]\nOnly one bromeliad, the pineapple (Ananas comosus), is a commercially important food crop. Bromelain, a common ingredient in meat tenderizer, is extracted from pineapple stems. Many other bromeliads are popular ornamental plants, grown as both garden and houseplants.\n[…]\nList of foliage plant diseases (Bromeliaceae)\n[…]\nLuther, H. E. (2008) An Alphabetical List of Bromeliad Binomials, Eleventh Edition The Marie Selby Botanical Gardens, Sarasota, Florida. Published by The Bromeliad Society International.\n[…]\nBromeliad care information\n[…]\nBromeliad cultivar registry\n[…]\nBromeliads of Chile in Chileflora\n[…]\nPalm trees, small palms, Cycads, Bromeliads and tropical plants Photos of Bromeliads and associated flora, with information on habitat and cultivation."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pineapple",
        "situacao": "ok",
        "texto": "The pineapple (Ananas comosus) is a tropical plant with an edible fruit; it is the most economically significant plant in the family Bromeliaceae.\n[…]\nThe pineapple is native to South America, where it has been cultivated for many centuries. The introduction of the pineapple plant to Europe in the 17th century made it a significant cultural icon of luxury. Since the 1820s, pineapple has been commercially grown in greenhouses and many tropical plantations. The fruit, particularly its juice, has diverse uses in cuisines and desserts.\n[…]\nPresent in all parts of the pineapple plant, bromelain is a group of proteolytic enzymes present in stem, fruit, crown, core, and leaves of pineapple.\n[…]\nHaving sufficient bromelain content, raw pineapple juice may be useful as a meat marinade and tenderizer. Although pineapple enzymes can interfere with the preparation of some foods or manufactured products, such as gelatin-based desserts or gel capsules, their proteolytic activity responsible for such properties may be degraded during cooking and canning.\n[…]\nThe quantity of bromelain in a typical serving of pineapple fruit is probably not significant, but specific extraction can yield sufficient quantities for domestic and industrial processing.\n[…]\nBromelain is under preliminary research, but has not been adequately defined for its effects in the human body. It is marketed as a dietary supplement. Bromelain may be unsafe for some users, such as in pregnancy, allergies, or anticoagulation therapy.\n[…]\nSome Ananas species are grown as ornamentals for color, novel fruit size, and other aesthetic qualities."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bromeliaceae",
        "situacao": "ok",
        "texto": "Bromeliaceae Juss. é uma família de monocotiledôneas, conhecidas comummente por bromeliáceas, que segundo a classificação filogenética AGP III (2009) pertence à ordem dos Poales, com plantas terrestres, rupícolas ou, principalmente epífitas, possui 3 172 espécies, distribuídas em 58 gêneros, sendo dividida em três subfamílias: Pitcairnioideae, Tillandsioideae e Bromelioideae, no entanto, estudos r\n[…]\nAs espécies de Bromeliaceae apresentam de modo geral hábito herbáceo, porém, pode ocorrer raramente o hábito lenhoso em espécies andinas do gênero Puya. As espécies pertencentes a esse gênero como Puya raimondii, chegam a ultrapassar os 10 metros de altura. Visto que, prevalecem na família as plantas de pequeno a médio porte. Em Tillandsia usneoides existe a formação de plantas pendentes, como uma longa cortina, bastante peculiar em formações florestais, caracterizando como epífita.\n[…]\nA espécie é a única de seu gênero a se reproduzir em bromélias.\n[…]\nO parâmetro dos grãos de pólen adequam-se em três tipos polínicos de acordo com o modelo de abertura e a escultura da exina. A subfamília Bromelioideae apresentam grãos de pólen irregularmente monocolpados, monocolpados típicos e porados. Nas subfamílias Pitcairnoideae e Tillandsioideae ressaltam grãos de pólen monocolpados.\n[…]\nClassifica a família na classe Liliopsida, subclasse Zingiberidae, ordem Bromeliales com 12 gêneros.\n[…]\nSubfamília Bromelioideae, Subfamília Pitcairnioideae, Subfamília Tillandsioideae\n[…]\nSubfamília Bromelioideae com 33 gêneros e 722 espécies, distribuídas pelo México até o Sul do BrasAechmea Ruiz & Pav.\n[…]\nAnanas Mill.\n[…]\nBromelia L.\n[…]\nhttp://www.bromelia.org.br/\n[…]\nhttp://www.jardimdeflores.com.br/ECOLOGIA/bromelia1.html\n[…]\nhttp://www.biodiversidade.pgibt.ibot.sp.gov.br/web/pdf/bromelias_bianca_moreira.pdf\n[…]\nhttp://www.conservation.org.br/publicacoes/files_mega4/09_bromeliaceae_da_cadeia_do_espinhaco.pdf",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Cerveja",
      "descricao": "Bebida alcoólica produzida pela fermentação de cereais maltados, em geral cevada, com lúpulo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o pão de padaria e a cerveja têm em comum na fabricação?",
    "resposta": "A mesma espécie de levedura",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saccharomyces_cerevisiae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saccharomyces_cerevisiae",
        "situacao": "ok",
        "texto": "Saccharomyces cerevisiae (), also called brewer's yeast or baker's yeast, is a species of yeast (single-celled fungal microorganisms). The species has been instrumental in winemaking, baking, and brewing since ancient times. It is believed to have been originally isolated from the skin of grapes. It is one of the most intensively studied eukaryotic model organisms in molecular and cell biology, mu\n[…]\nIn antiquity, pure yeasts were unavailable due to a lack of understanding of microbiology necessary to produce them. Instead, mixtures of wild bacteria (especially Lactobacillus) and yeasts were used for brewing and leavening, resulting in acidic goods. However, empirical testing by beer makers around the 15th century led to the discovery that first boiling a wort containing hops gave a non acidic beverage.\n[…]\nSaccharomyces cerevisiae is the main source of nutritional yeast, which is sold commercially as a food product. It is popular with vegans and vegetarians as an ingredient in cheese substitutes, or as a general food additive as a source of vitamins and minerals, especially amino acids and B-complex vitamins."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saccharomyces_cerevisiae",
        "situacao": "ok",
        "texto": "Saccharomyces cerevisiae é um organismo eucarioto unicelular que pertence ao reino dos Fungos. É a levedura utilizada na produção do pão e também da cerveja, além de ser usada para a produção de álcool combustível. Uma cepa, modificada geneticamente, também produz bioquerosene e biodiesel.\n[…]\nNo caso das bebidas alcoólicas produzidas pelo processo de fermentação, a Saccharomyces cerevisae converte o açúcar em álcool etílico e também pode contribuir na formação de constituintes secundários responsáveis pelo sabor - é o caso da cerveja, rum e uísque.\n[…]\nHieróglifos egípcios sugerem que, há mais de 5 000 anos, a levedura é utilizada em processos fermentativos, quer na produção de pão, quer na de bebidas alcoólicas. Curiosamente, só em 1857 Louis Pasteur provou que a fermentação resulta da ação de organismos vivos.\n[…]\nLevedura",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Quinoa",
      "descricao": "Planta andina (Chenopodium quinoa) cultivada pelas sementes comestíveis."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Embora seja comida como se fosse um cereal, a quinoa é parente próxima de qual hortaliça de folhas?",
    "resposta": "Espinafre",
    "distratores": [
      "Alface",
      "Couve",
      "Rúcula"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Quinoa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quinoa",
        "situacao": "ok",
        "texto": "Quinoa (Chenopodium quinoa; , from Quechua kinwa or kinuwa) is a flowering plant in the amaranth family. It is a herbaceous annual plant grown as a crop primarily for its edible seeds. The seeds are high in protein, dietary fiber, B vitamins, and dietary minerals, especially potassium and magnesium, which are present in amounts greater than in many grains.\n[…]\nThe first occurred when the species was created, as its two diploid ancestors underwent a hybridization followed by chromosome doubling, this new species was genetically isolated from its parent species, and thus lost a great deal of genetic diversity. As stated above, these ancestors were possibly C. subglabrum (AA) and C. suecicum (BB) and therefore not the Andean diploid pseudo cereal Chenopodium pallidicaule (cañahua).\n[…]\nThe specific epithet quinoa is a borrowing from the Spanish quinua or quinoa, itself derived from Quechua kinuwa.\n[…]\nRotation is used in its Andean native range. Rotation is common with potato, cereals and legumes including Lupinus mutabilis. Traditionally, quinoa rotation happens in plots called aynoqas. These are made up of different sized plots in different zones, and each family unit would own plots in different areas. The aynoqas allowed for better crop yield, agricultural and ecological sustainability, and food security within communities.\n[…]\nIn terms of wider social consequences, research on traditional producers in Bolivia has emphasised a complex picture. The degree to which individual producers benefit from the global quinoa boom depends on its mode of production, for example through producer associations and co-operatives such as the Asociación Nacional de Productores de Quinua (founded in the 1970s), contracting through vertically integrated private firms, or wage labor.\n[…]\nList of cereals"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quinoa",
        "situacao": "ok",
        "texto": "A quinoa (/ˈkiːnwɑː/; transliteração: 'quínua'; do Quechua: kinwa) é uma espécie de planta (Chenopodium quinoa Willd.; Amaranthaceae) nativa da região andina do Peru, Bolivia, Equador e Colômbia, onde foi domesticado há cerca de 3 000 a 4 000 anos para consumo humano, embora existam registros arqueológicos de uso de sementes não domesticadas para uso pastoril há cerca de 5 200 a 7 000 anos. Produz\n[…]\nA quinoa não contém glúten.\n[…]\nA quinoa pode substituir o trigo na produção de farinha, a soja na produção de óleo, o milho para biodiesel e o arroz na alimentação.\n[…]\nChenopodium quinoa (Purdue niversity) - em inglêsGeerts S, Raes D (2009). «Deficit irrigation as an on-farm strategy to maximize crop water productivity in dry areas». Agric. Water Manage. 96: 1275–84. doi:10.1016/j.agwat.2009.04.009\n[…]\nGeerts S, Raes D, Garcia M, Vacher J, Mamani R, Mendoza J, Huanca R, Morales B, Miranda R, Cusicanqui J, Taboada C (2008). «Introducing deficit irrigation to stablize yields of quinoa (Chenopodium quinoa Willd.)». Eur. J. Agron. 28: 427–436. doi:10.1016/j.eja.2007.11.008  !CS1 manut: Nomes múltiplos: lista de autores (link)\n[…]\nGeerts S, Raes D, Garcia M, Mendoza J, Huanca R (2008). «Indicators to quantify the flexible phenology of quinoa (Chenopodium quinoa Willd.) in response to drought stress». Field Crop. Res. 108: 150–6. doi:10.1016/j.fcr.2008.04.008  !CS1 manut: Nomes múltiplos: lista de autores (link)\n[…]\nGeerts S, Raes D, Garcia M, Condori O, Mamani J, Miranda R, Cusicanqui J, Taboada C, Vacher J (2008). «Could deficit irrigation be a sustainable practice for quinoa (Chenopodium quinoa Willd.) in the Southern Bolivian Altiplano?». Agric. Water Manage. 95: 909–917. doi:10.1016/j.agwat.2008.02.012  !CS1 manut: Nomes múltiplos: lista de autores (link)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Chá",
      "descricao": "Bebida preparada com a infusão das folhas da planta Camellia sinensis, originária da China."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A planta de cujas folhas se faz o chá pertence ao mesmo gênero botânico de qual flor ornamental?",
    "resposta": "Camélia",
    "distratores": [
      "Azaleia",
      "Magnólia",
      "Gardênia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Camellia_sinensis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Camellia_sinensis",
        "situacao": "ok",
        "texto": "Camellia sinensis, commonly known as tea plant, tea shrub, and tea tree, is a species of evergreen shrub in the flowering plant family Theaceae. The leaves harvested from C. sinesis are brewed into tea.\n[…]\nThe name sinensis is a compound meaning \"from China\" in Botanical Latin. The two parts are sin from Latin meaning China and -ensis the suffix meaning place of origin.\n[…]\nCamellia sinensis is a woody shrub or tree that is typically 1 to 5 m (3.3 to 16.4 ft) tall, but can be as tall as 20 m (66 ft). It is usually trimmed to a height of about 1 m (3.3 ft) with a flat top when in commercial tea plantations. The bark on trunks is smooth and gray with a yellow or brown tone. Young branches are yellow with a gray cast to them while new twigs are red-purple with white hairs. In older trees the trunk reaches as much as 40 cm in diameter.\n[…]\nCamellia sinensis is mainly cultivated in tropical and subtropical climates, in areas with at least 127 cm (50 in) of rainfall a year. Tea plants prefer a rich and moist growing location in full to part sun, and can be grown in hardiness zones 7–9. However, the species is commercially cultivated from the equator to as far north as Scotland, with the northernmost tea plantation at 59°N latitude on Shapinsay in the Orkney Islands.\n[…]\nDarjeeling, from C. s. var. sinensis, is from the cool and wet Darjeeling highland region, tucked in the foothills of the Himalayas. Tea plantations could be at altitudes as high as 2,200 m (7,200 ft). The tea is delicately flavoured, and considered to be one of the finest teas in the world. The Darjeeling plantations have three distinct harvests, termed 'flushes', and the tea produced from each flush has a unique flavour."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Camellia_sinensis",
        "situacao": "ok",
        "texto": "Camellia sinensis é uma espécie da família Theaceae, popularmente conhecida como chá e chá-da-índia. Foi, originalmente, descrita por Lineu como Thea sinensis, mas este nome caiu em desuso quando se notou que os gêneros Thea e Camellia não apresentavam diferenças significativas entre si. É uma árvore de até 15 metros de altura, nativa das florestas do nordeste da Índia e sul da China.\n[…]\nOs frutos são cápsulas pequenas, globosas, com 1 a 3 sementes também globosas. É possível produzir óleo para o consumo humano a partir das sementes desta planta. Existem variedades, como a C. sinensis var. assamica, comum na Índia, que produz as árvores mais altas e com as maiores folhas, além de um chá preto com enorme concentração de cafeína. A variedade sinensis é a mais comumente cultivada.\n[…]\nEsta mesma espécie dá origem a milhares de chás diferentes, de acordo com as condições de cultivo, coleta, preparo e acondicionamento das folhas.\n[…]\nO chá verde (綠茶 Lǜ Chá), produzido a partir das folhas da planta Camellia sinensis, é tradicionalmente usado como medicamento na China há milhares de anos. De acordo com o trabalho clássico de Li Shizhen (李時珍 Lǐ Shí Zhēn) da dinastia Ming, “o chá é frio e diminui o fogo”. Como o fogo (inflamação) causa muitas doenças, o chá poderia ser eficaz na prevenção de muitas doenças?\n[…]\nEsta espécie tem sido estudada por farmacólogos e bioquímicos pelas propriedades observadas no chá. Descobriram-se substâncias nesta planta capazes de combater úlceras, espasmos musculares, hipertensão, apatia, certas infecções bacterianas, e bloquear a replicação do vírus Influenza Humano tipo A e do HIV-1.\n[…]\nHá uma variedade com flores rosadinhas destinada à ornamentação de jardins.\n[…]\nPlant Cultures: botânica e história da planta do chá",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Melancia",
      "descricao": "Fruta grande de casca verde e polpa vermelha e suculenta da planta Citrullus lanatus."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A melancia pertence à mesma família botânica de qual destes legumes?",
    "resposta": "Pepino",
    "distratores": [
      "Tomate",
      "Berinjela",
      "Pimentão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Watermelon",
      "https://en.wikipedia.org/wiki/Cucurbitaceae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Watermelon",
        "situacao": "ok",
        "texto": "The watermelon (Citrullus lanatus) is a species of flowering plant in the family Cucurbitaceae. It is a scrambling and trailing vine-like plant cultivated worldwide for its fruit, a large berry with a firm rind and no internal divisions, botanically termed a pepo. The sweet, juicy flesh is usually deep red to pink, with many seeds that are black when mature and white when immature.\n[…]\nMolecular data, including sequences from the original collection of Thunberg and other relevant type material, show that the sweet watermelon (Citrullus vulgaris Schrad.) and the bitter wooly melon Citrullus lanatus (Thunb.) Matsum. & Nakai are not closely related to each other. A proposal to conserve the name, Citrullus lanatus (Thunb.) Matsum. & Nakai, was accepted by the nomenclature committee and confirmed at the International Botanical Congress in 2017.\n[…]\nPrior to 2015, the wild species closest to Citrullus lanatus was assumed to be the tendril-less melon Citrullus ecirrhosus Cogn. from South African arid regions based on an erroneously identified 18th-century specimen. However, after phylogenetic analysis, the closest relative to Citrullus lanatus is now thought to be Citrullus mucosospermus (Fursa) from West Africa (from Senegal to Nigeria), which is also sometimes considered a subspecies within C. lanatus.\n[…]\nWatermelon populations from Sudan are also close to domesticated watermelons. The bitter wooly melon was formally described by Carl Peter Thunberg in 1794 and given the name Momordica lanata. It was reassigned to the genus Citrullus in 1916 by Japanese botanists Jinzō Matsumura and Takenoshin Nakai.\n[…]\nThe amino acid citrulline is produced in watermelon rind.\n[…]\nCitrullis lanatus, variety caffer, grows wild in the Kalahari Desert. The fruits are used by the San people and wild animals for both water and nourishment, allowing survival on a diet of tsamma for six weeks."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cucurbitaceae",
        "situacao": "ok",
        "texto": "The Cucurbitaceae ( kew-KUR-bih-TAY-see-ee), also called cucurbits or the gourd family, are a plant family consisting of about 965 species in 101 genera. Some commonly cultivated cucurbits include:\n[…]\nCitrullus – watermelon (C. lanatus, C. colocynthis), plus several other species.\n[…]\nThe plants in this family are grown around the tropics and in temperate areas of the world, where those with edible fruits were among the earliest cultivated plants in both the Old and New Worlds. The family Cucurbitaceae ranks among the highest of plant families for number and percentage of species used as human food.\n[…]\nCucurbitaceae in L. Watson and M.J. Dallwitz (1992 onwards). The families of flowering plants: descriptions, illustrations, identification, information retrieval."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Melancia",
        "situacao": "ok",
        "texto": "Melancia (Citrullus lanatus) é uma planta da família Cucurbitaceae e também o nome do seu fruto. Trata-se de uma trepadeira rastejante originária da África.\n[…]\nOriginária das regiões secas, tem um centro de diversificação secundário no sul da Ásia. A domesticação ocorreu na África Central, onde a melancia é cultivada há mais de 5 000 anos. No Egito e no oriente médio é cultivada há mais de 4 000 anos. Na China, a cultura foi introduzida por volta do século X; na Europa, por volta do século XIII; e na América, no século XVI. Foi trazida para o Brasil por negros de origem Banto e Sudanesa no processo de escravidão.\n[…]\nA composição das melancias varia naturalmente, dependendo tanto da variedade e das condições ambientais (solo, clima) como da técnica de cultivo (fertilização, pesticida).\n[…]\nEm 2018, o Brasil produziu 2,2 milhões de toneladas de melancia, sendo o 5º maior produtor do mundo. O estado que mais produz é o Rio Grande do Sul (283 mil toneladas), onde o município de Cacequi é conhecido como Capital da Melancia. A maior região produtora de melancia é o Nordeste, que somou 545 mil toneladas em 2016, onde os principais produtores são Bahia e Rio Grande do Norte. O Sul aparece na segunda colocação, com 458 mil toneladas.\n[…]\nPor conter o aminoácido citrulina, deve ser evitado por pessoas que apresentam alergia a esse aminoácido. Também podem ocorrer uma série de problemas gástricos e diuréticos causando a hipertensão aguda, chamada fase de feijão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Nectarina",
      "descricao": "Fruta de casca lisa, sem penugem, variedade do pessegueiro (Prunus persica var. nucipersica)."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "De casca lisa e sem penugem, a nectarina é, na verdade, uma variedade de qual fruta?",
    "resposta": "Pêssego",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nectarine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nectarine",
        "situacao": "ok",
        "texto": "The peach (Prunus persica) is a deciduous tree that bears edible juicy fruits with various characteristics. Most are simply called peaches, while the glossy-skinned, non-fuzzy varieties are called nectarines. Though from the same species, they are regarded commercially as different fruits.\n[…]\nAs with peaches, nectarines can be white or yellow, and clingstone or freestone. On average, nectarines are slightly smaller and sweeter than peaches, but with much overlap. The lack of skin fuzz can make nectarine skins appear more reddish than those of peaches, contributing to the fruit's plum-like appearance.\n[…]\nPeacherines are claimed to be a cross between a peach and a nectarine; they are sometimes marketed in Australia and New Zealand. Flat peaches, or pan-tao, have a flattened shape, in contrast to ordinary near-spherical peaches. Peach trees with small, inedible fruits are sometimes grown for ornamental value in gardens.\n[…]\nIn 2024, world production of peaches (combined with nectarines for reporting) was 28 million tonnes, led by China with 63% of the total; Spain, Turkey, and Italy were secondary producers (table).\n[…]\nA raw nectarine has a similar low nutrient content.\n[…]\nTotal polyphenols in mg per 100 g of fresh weight were 14–113 in white-flesh nectarines, 17–78 in yellow-flesh nectarines, 20–113 in white-flesh peaches, and 16–93 mg per 100 g in yellow-flesh peaches. The major phenolic compounds identified in peach are chlorogenic acid, catechins and epicatechins, with other compounds, identified by HPLC, including gallic acid and ellagic acid. Rutin and isoquercetin are the primary flavonols found in clingstone peaches.\n[…]\nNational Center for Home Food Preservation—Freezing Peaches or Nectarines"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pessegueiro",
        "situacao": "ok",
        "texto": "O pessegueiro (Prunus persica) é uma árvore decídua, nativa da China e sul da Ásia, de folhas alternas e serreadas, flores roxas e drupas pubescentes, comestíveis e com propriedades aperitivas e digestivas. Possui inúmeras variedades hortícolas. A infusão das folhas e sementes é calmante e as flores são usualmente utilizadas como laxante suave.\n[…]\nOs pessegueiros crescem bem em zonas temperadas de clima Mediterrânico quente com temperaturas entre 10 a 22 graus devendo ficar exposto em pleno Sol.O solo deve ser franco-limoso ou Sílico-argilosos, profundo,  bem drenado, arejado e fértil em profundidade maior que 50 cm.\n[…]\nAs variedades mais comuns de pêssego começam a frutificar no terceiro ano após o plantio, e tem uma longevidade aproximada de 12 anos. Muitas variedades requerem aproximadamente 600 a mil horas de temperaturas mais frias; variedades com exigência de 250 horas (10 dias) de frio ou menos tem sido desenvolvidas, possibilitando a produção da espécie em climas mais quentes. Durante o inverno, reações químicas essenciais ocorrem antes de a planta começar a crescer novamente.\n[…]\nCertas variedades são mais delicadas, e outras podem tolerar temperaturas mais baixas. Ademais, calor intenso de verão é necessário para maturar a colheita, com temperaturas médias do mês mais quente entre 20 e 30 °C. Outra questão problemática em muitas áreas de cultivo da espécie é a geada de primavera. Os pessegueiros tendem a florescer no início da primavera.\n[…]\nUm pêssego médio pesa 75g, e de maneira geral contém 30 Cal, 7 g de carboidratos (6 g de açúcares e 1 g de fibras), 1 g de proteínas, 140 mg de potássio, e 8% das necessidades diárias de vitamina C. Nectarinas fornecem o dobro de vitamina A, e ligeiramente mais vitamina C, que os pêssegos, além de serem uma fonte mais rica de potássio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Salada Caesar",
      "descricao": "Salada de alface-romana, croûtons, parmesão e molho à base de ovo, anchova e limão"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Nos anos vinte, em Tijuana, que dono de restaurante ítalo-americano criou a salada de alface-romana e croûtons que leva o seu nome?",
    "resposta": "Caesar Cardini",
    "distratores": [
      "Alfredo di Lelio",
      "Robert Cobb",
      "Oscar Tschirky"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Caesar_salad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caesar_salad",
        "situacao": "ok",
        "texto": "A Caesar salad (also spelled Cesar, César and Cesare), also known as Caesar's salad, is a green salad of romaine lettuce and croutons commonly dressed with lemon juice (or lime juice), olive oil, eggs, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan and black pepper.\n[…]\nThe salad was created on July 4, 1924, by Caesar Cardini at Caesar's in Tijuana, Mexico, when the kitchen was overwhelmed and short on ingredients. It was originally prepared tableside, and it is still prepared tableside at the original venue.\n[…]\nThe salad's creation is generally attributed to the restaurateur Caesar Cardini, an Italian immigrant who operated restaurants in Mexico and the United States. Cardini lived in San Diego, but ran one of his restaurants, Caesar's, in Tijuana, Mexico, to attract American customers seeking to circumvent the restrictions of Prohibition. His daughter, Rosa, recounted that her father invented the salad at the Tijuana restaurant when a Fourth of July rush in 1924 depleted the kitchen's supplies.\n[…]\nA 2024 book confirmed the claim that Caesar Cardini originated the recipe. Livio Santini's son, Aldo, countered that his father provided the recipe while working as a cook in Cardini's restaurant.\n[…]\nThe American chef and writer Julia Child said that she had eaten a Caesar salad at Cardini's restaurant in her youth during the 1920s, made with whole romaine lettuce leaves, which were meant to be lifted by the stem and eaten with the fingers, tossed with olive oil, salt, pepper, lemon juice, Worcestershire sauce, coddled eggs, Parmesan, and croutons made with garlic-infused oil.\n[…]\nIn 1946, the newspaper columnist Dorothy Kilgallen wrote of a Caesar containing anchovies, differing from Cardini's version:\n[…]\ncroutons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caesar_salad",
        "situacao": "ok",
        "texto": "Caesar salad, salada Caesar ou salada César é uma salada preparada com alface-romana e molho Caesar. Os temperos usados mais habitualmente para compor este molho são azeite de oliva, suco de limão, anchovas, queijo parmesão, molho inglês, sal, açúcar e pimenta-preta. A salada geralmente é servida com croutons e queijo parmesão fresco ralado. Atribui-se ao chef ítalo-americano Cesare Cardini, em Ti\n[…]\nExistem muitas versões sobre a origem da Caesar salad. A mais conhecida é que a salada teria sido criada por um chef italiano chamado Cesare Cardini. Cardini, cujo sobrenome está relacionado com a culinária do famoso Hotel Peñafiel de Tehuacán,  a\n[…]\nOutra versão é que foi criada em uma das cidades de Tijuana ou Ensenada (México) pelo chef Livio Santini de origem italiana no final da década de 1930, na cozinha do restaurante do Hotel Caesar's, propriedade de Cesare Cardini.\n[…]\nConta-se que pilotos norte-americanos chegavam ao hotel e pediam uma simples salada. Na falta de tomates ou outros ingredientes típicos, o chef Santini seguiu uma velha receita familiar, do sul da Itália, que sua mãe os alimentava em tempos difíceis: uma salada romana, ovos, pequenos pedaços de pão fritos com azeite, queijo seco, azeite de oliva, umas gotas de molho inglês e suco de limão.\n[…]\nA salada, tendo agradado aos pilotos, foi denominada inicialmente como \"salada dos aviadores\"; com o tempo, César Cardini registrou-a como sua criação e a divulgou.\n[…]\n«Receita de Caesar salad» (em espanhol)\n[…]\n«Receitas de Caesar salad no Wikilivros» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "A Fisiologia do Gosto",
      "descricao": "Livro de gastronomia do francês Jean Anthelme Brillat-Savarin, publicado em 1825, cheio de aforismos sobre a mesa."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que gastrônomo francês do século dezenove escreveu a famosa frase: diga-me o que comes, e te direi quem és?",
    "resposta": "Brillat-Savarin",
    "distratores": [
      "Auguste Escoffier",
      "Alexandre Dumas",
      "Antonin Carême"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jean_Anthelme_Brillat-Savarin",
      "https://en.wikipedia.org/wiki/The_Physiology_of_Taste"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jean_Anthelme_Brillat-Savarin",
        "situacao": "ok",
        "texto": "Jean Anthelme Brillat-Savarin (French pronunciation: [ʒɑ̃ ɑ̃tɛlm bʁija savaʁɛ̃]; 2 April 1755 – 2 February 1826) was a French lawyer and politician, who, as the author of Physiologie du goût (The Physiology of Taste), became celebrated for his culinary reminiscences and reflections on the craft and science of cookery and the art of eating.\n[…]\nFor years Brillat-Savarin worked intermittently on his Physiologie du goût, adding, revising and polishing. Its contents were well known to his friends, and he finally yielded to their calls for him to publish it. He did so anonymously, although the author's name was soon widely known. It was published in December 1825, two months before his death.\n[…]\nThe full title of the work for which Brillat-Savarin is known is Physiologie du goût, ou méditations de gastronomie transcendante; ouvrage théorique, historique et à l'ordre du jour, dédié aux gastronomes parisiens, par un professeur, membre de plusieurs sociétés littéraires et savantes. The book has been in print in France continuously since it first appeared in 1825.\n[…]\nAlong with Grimod de La Reynière, Brillat-Savarin is credited with founding the genre of the gastronomic essay. Anthony Lane writes of him, \"To say that The Physiology of Taste is a cookbook is like saying that Turgenev's Sportsman's Sketches is a guide to hunting.\"\n[…]\nThirteen years after his death, Brillat-Savarin's title was repurposed by an anonymous author or authors for Néo-physiologie du goût.\n[…]\nBrillat-Savarin, Jean Anthelme (1852). Physiologie du goût (in French). Paris: Alphonse Pigoreau. OCLC 1040260000.\n[…]\nWorks by Jean Anthelme Brillat-Savarin Archived 1 April 2018 at the Wayback Machine at Bibliothèque nationale de France\n[…]\nWorks by Jean Anthelme Brillat-Savarin at Project Gutenberg\n[…]\nWorks by or about Jean Anthelme Brillat-Savarin at the Internet Archive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Physiology_of_Taste",
        "situacao": "ok",
        "texto": "Jean Anthelme Brillat-Savarin (French pronunciation: [ʒɑ̃ ɑ̃tɛlm bʁija savaʁɛ̃]; 2 April 1755 – 2 February 1826) was a French lawyer and politician, who, as the author of Physiologie du goût (The Physiology of Taste), became celebrated for his culinary reminiscences and reflections on the craft and science of cookery and the art of eating.\n[…]\nFor years Brillat-Savarin worked intermittently on his Physiologie du goût, adding, revising and polishing. Its contents were well known to his friends, and he finally yielded to their calls for him to publish it. He did so anonymously, although the author's name was soon widely known. It was published in December 1825, two months before his death.\n[…]\nThe full title of the work for which Brillat-Savarin is known is Physiologie du goût, ou méditations de gastronomie transcendante; ouvrage théorique, historique et à l'ordre du jour, dédié aux gastronomes parisiens, par un professeur, membre de plusieurs sociétés littéraires et savantes. The book has been in print in France continuously since it first appeared in 1825.\n[…]\nAlong with Grimod de La Reynière, Brillat-Savarin is credited with founding the genre of the gastronomic essay. Anthony Lane writes of him, \"To say that The Physiology of Taste is a cookbook is like saying that Turgenev's Sportsman's Sketches is a guide to hunting.\"\n[…]\nThirteen years after his death, Brillat-Savarin's title was repurposed by an anonymous author or authors for Néo-physiologie du goût.\n[…]\nBrillat-Savarin, Jean Anthelme (1852). Physiologie du goût (in French). Paris: Alphonse Pigoreau. OCLC 1040260000.\n[…]\nWorks by Jean Anthelme Brillat-Savarin Archived 1 April 2018 at the Wayback Machine at Bibliothèque nationale de France\n[…]\nWorks by Jean Anthelme Brillat-Savarin at Project Gutenberg\n[…]\nWorks by or about Jean Anthelme Brillat-Savarin at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jean_Anthelme_Brillat-Savarin",
        "situacao": "ok",
        "texto": "Jean Anthelme Brillat-Savarin (1 de abril de 1755, Belley, França - 2 de fevereiro de 1826, Paris), era um advogado, político e cozinheiro francês. Foi um dos mais famosos epicuristas e gastrónomos franceses de todos os tempos.\n[…]\nNuma fase posterior da Revolução, a sua cabeça ficou a prémio, e Brillat-Savarin procurou asilo político na Suíça. Mais tarde, mudou-se para a Holanda, e depois para os Estados Unidos, onde permaneceu durante três anos, dando aulas de francês e de violino.\n[…]\nConsiderado por muitos como “o pai da dieta baixa em carboidratos”, Brillat-Savarin é o autor de frases famosas como “Diz-me o que comes, dir-te-ei quem és” e “a descoberta de uma nova receita faz mais pela felicidade do género humano do que a descoberta de uma estrela”.\n[…]\nMais do que uma técnica, Brillat Savarin vê na Gastronomia uma ciência potencial, um conhecimento racional, uma reflexão filosófica (diríamos hoje antropológica, psicológica ou sociológica) sobre a nutrição humana. O século XVIII e o início do século XIX são considerados por Brillat Savarin um período extremamente rico para o desenvolvimento desse conhecimento racional.\n[…]\n\"Diga-me o que você come: eu direi o que você é.\"\n[…]\nFisiologia do Gosto (1825)\n[…]\nLa Physiologie du goût Texto original em francês da edição ilustrada de 1848 de The Physiology of Taste; uma cópia licenciada gratuitamente hospedada na biblioteca digital da Bibliothèque nationale Gallica.\n[…]\nWorks by Jean Anthelme Brillat-Savarin Arquivado em 2018-04-01 no Wayback Machine at Bibliothèque nationale de France\n[…]\nObras de Jean Anthelme Brillat-Savarin (em inglês) no Projeto Gutenberg\n[…]\nObras de ou sobre Jean Anthelme Brillat-Savarin no Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Que comam brioches",
      "descricao": "Frase sobre o povo sem pão tradicionalmente atribuída à rainha Maria Antonieta, mas registrada antes por Rousseau."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A frase que comam brioches, atribuída a Maria Antonieta, já aparece nas Confissões, escritas quando ela ainda era criança. Quem escreveu esse livro?",
    "resposta": "Jean-Jacques Rousseau",
    "distratores": [
      "Voltaire",
      "Montesquieu",
      "Denis Diderot"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Let_them_eat_cake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Let_them_eat_cake",
        "situacao": "ok",
        "texto": "\"Let them eat cake\" is the traditional translation of the French phrase \"Qu'ils mangent de la brioche\", said to have been spoken in the 18th century by \"a great princess\" upon being told that the peasants had no bread. The French phrase mentions brioche, a bread enriched with butter and eggs, considered a luxury food. The quote is taken to reflect either the princess's frivolous disregard for the \n[…]\nAlthough the phrase is conventionally attributed to Marie Antoinette, there is no evidence that she ever uttered it, and it is now generally regarded as a journalistic cliché. The phrase can actually be traced back to Jean-Jacques Rousseau's Confessions in 1765, 24 years prior to the French Revolution, and when Antoinette was nine years old and had never been to France. The phrase was not attributed to Antoinette until decades after her death.\n[…]\nRousseau's first six books were written in 1765, when Antoinette was nine years of age, and published when she was 26, eight years after she became queen.\n[…]\nAccording to Antonia Fraser, the notorious story of the ignorant princess was first said 100 years before Antoinette in relation to Maria Theresa, the wife of Louis XIV, citing the memoirs of Louis XVIII, who was only fourteen when Rousseau's Confessions were written and whose own memoirs were published much later. Louis XVIII does not mention Antoinette in his account, but says that the story was an old legend and that the family always believed that Maria Theresa had originated the phrase.\n[…]\nAnother problem with the dates surrounding the attribution is that when the phrase first appeared, Antoinette was not only too young to have said it, but living outside France as well. Although published in 1782, Rousseau's Confessions were finished thirteen years prior in 1769. Antoinette, only fourteen years old at the time, would not arrive at Versailles from Austria until 1770."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Que_comam_brioche",
        "situacao": "ok",
        "texto": "\"Que comam brioche\" (em francês: Qu'ils mangent de la brioche), por vezes traduzida como \"Que comam bolo\", é uma frase supostamente dita por \"uma grande princesa\" ao saber que os camponeses não tinham pão.\n[…]\nEmbora comumente atribuída à rainha de França, Maria Antonieta, não existem registros confiáveis de que essa frase tenha sido dita por ela. Ela aparece pela primeira vez na obra Confissões, autobiografia de Jean-Jacques Rousseau, cujos seis primeiros livros, embora publicados em 1782, foram escritos em 1765, quando Maria Antonieta tinha nove anos de idade.\n[…]\nNo entanto, não existem evidências de que a rainha Maria Antonieta tenha proferido esta frase, que lhe foi atribuída pela primeira vez em março de 1843, na obra Les Guêpes de Alphonse Karr. Outras objeções à lenda de Maria Antonieta e do comentário sobre o brioche têm como base argumentos sobre a personalidade da rainha, evidências internas de membros da família real francesa e a data do dito. Por exemplo, a biógrafa de Maria Antonieta, Antonia Fraser, escreveu em 2002 que:\n[…]\nFraser cita, como justificativa para a atribuição alternativa dessa frase à esposa de Luís XIV, as memórias de Luís XVIII, que tinha apenas catorze anos quando as Confissões de Rousseau foram escritas, e que foram publicadas bem mais tarde. Ele não menciona Maria Antonieta em sua história, e afirma que a frase constituía uma antiga lenda em sua família, que sempre a acreditou como tendo sido proferida pela princesa espanhola que se casou com Luís XIV na década de 1660.\n[…]\nCartas de Maria Antonieta para sua família, na Áustria, neste momento revelam uma atitude totalmente diferente daquela expressa pela frase \"que comam brioche\":",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Batata",
      "descricao": "Tubérculo comestível da planta Solanum tuberosum, nativa dos Andes"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que século a batata, nativa dos Andes, chegou à Europa levada pelos espanhóis?",
    "resposta": "Século dezesseis",
    "distratores": [
      "Século quinze",
      "Século dezessete",
      "Século dezoito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/History_of_the_potato"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/History_of_the_potato",
        "situacao": "ok",
        "texto": "The potato was the first domesticated root vegetable in the region of modern-day southern Peru and extreme northwestern Bolivia between 8000 and 5000 BC. Cultivation of potatoes in South America may go back 10,000 years, but tubers do not preserve well in the archaeological record, making identification difficult. The earliest archaeologically verified potato tuber remains have been found at the c\n[…]\nArcheological evidence also shows that throughout the formative period from 1500 BC to 500 BC and Tiwanaku period in the Andes, potatoes and tubers became increasingly popular as a crop and food. Boiled and steamed potatoes and tubers replaced soups throughout the formative period.\n[…]\nSailors returning from the Andes to Spain with silver presumably brought maize and potatoes for their own food on the trip. Historians speculate that leftover tubers (and maize) were carried ashore and planted: \"We think that the potato arrived some years before the end of the 16th century, by two different ports of entry: the first, logically, in Spain around 1570, and the second via the British Isles between 1588 and 1593 ..."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_da_batata",
        "situacao": "ok",
        "texto": "A história da batata começa quando este tubérculo foi cultivado pela primeira vez nos Andes, na América do Sul. É impreciso quando o primeiro cultivo ocorreu, pois os vestígios orgânicos são mal preservados no registro arqueológico. Os vestígios mais antigos conhecidos datam de 8 000 a.C. e são oriundos do Peru, mas é provável que já tivesse sido cultivada antes disso. Seu cultivo abarcou vasta ár\n[…]\nOs historiadores especulam que sobras de tubérculos (e milho) foram levadas para terra e plantadas: \"Achamos que a batata chegou alguns anos antes do final do século XVI, por dois portos de entrada diferentes: o primeiro, logicamente, na Espanha por volta de 1570; o segundo, através das Ilhas Britânicas entre 1588 e 1593… encontramos vestígios do transporte de batatas que viajam das Canárias para Antuérpia em 1567… podemos dizer que a batata foi introduzida lá (nas Ilhas Canárias) a partir da América do Sul por volta de 1562… a primeira menção escrita da batata [é]… um recibo de entrega datado de 28 de novembro de 1567 entre Las Palmas na Grande Canária e Antuérpia.\"\n[…]\nOs espanhóis tinham um império em toda a Europa e trouxeram batatas para os seus exércitos. Os camponeses ao longo do caminho iam adotando a cultura, que era menos frequentemente pilhada por exércitos de saqueadores do que os armazéns de grãos.\n[…]\nA falta de diversidade genética do baixo número de variedades deixou a cultura vulnerável a doenças. No início da década de 1800, uma variedade de praga da batata (Phytophthora infestans, um oomiceto) conhecida como HERB-1 começou a espalhar-se nas Américas, especialmente na América Central e do Norte, destruindo muitas culturas. A praga chegou à Europa na década de 1840, onde, devido à extrema falta de diversidade genética, as plantações de batata eram ainda mais suscetíveis.\n[…]\n«Centro Internacional da Batata» (em inglês)\n[…]\n«Atlas Mundial da Batata» (em inglês e espanhol)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Tiramisù",
      "descricao": "Sobremesa italiana em camadas de biscoito embebido em café e creme de mascarpone, polvilhada com cacau"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Muita gente acha que é uma receita antiga, mas em que século o tiramisù surgiu na região do Vêneto?",
    "resposta": "Século vinte",
    "distratores": [
      "Século dezenove",
      "Século dezoito",
      "Século dezessete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tiramisu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tiramisu",
        "situacao": "ok",
        "texto": "Tiramisu is an Italian dessert made with coffee-soaked ladyfingers (savoiardi) covered with a cream of egg yolks, sugar, mascarpone, and cocoa powder. It originated in northeastern Italy, and modern versions were popularized in restaurants from the 1970s. Tiramisu has become one of the most internationally recognised Italian desserts and has inspired many variations in home and professional cookin\n[…]\nThe modern tiramisu recipe is not found in cookbooks before the 1960s. It is mentioned in a Sydney Morning Herald restaurant column published in 1978. It is not mentioned in encyclopaedias and dictionaries of the 1970s, first appearing in an Italian dictionary in 1980, and in English in 1982. It is mentioned in a 1983 cookbook devoted to cooking of the Veneto region.\n[…]\nOn 29 July 2017, tiramisu was entered by the Ministry of Agricultural, Food and Forestry Policies on the list of traditional Friulian and Giulian agri-food products in the Friuli-Venezia Giulia region. In 2013, Luca Zaia, President of Veneto, sought European Union protected status certification, based on the ingredients used in 1970, so substitute ingredients, such as strawberries, could not be used in a dish called tiramisu.\n[…]\nThe original tiramisu served at Le Beccherie was round. Modern versions are often made in a rectangular or square pan, making it easier to arrange the biscuits.\n[…]\nNumerous variations of tiramisu exist. Many replace the coffee with other ingredients such as chocolate, amaretto, lemon, strawberry, pineapple, yoghurt, banana, raspberry, and coconut. Some cooks use other cakes or sweet, yeasted bread, such as panettone, in place of the ladyfingers. Bakers living in different Italian regions often debate the use and structural qualities of utilising other types of cookies, such as pavesini for instance, in the recipe.\n[…]\nMedia related to Tiramisu at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tiramis%C3%B9",
        "situacao": "ok",
        "texto": "O tiramisu (do italiano: tiramisù; pronúncia em italiano: [tiramiˈsu]) é uma sobremesa tipicamente italiana, possivelmente originária da cidade de Treviso, na região do Vêneto, e que consiste em camadas de biscoitos de champagne, também chamados de biscoitos tipo inglês ou palitos a la reine (item este que pode ser substituído por pão de ló), embebidas em café expresso (confeiteiros/as profissiona\n[…]\nMas a receita original comporta muitas variações.\n[…]\n\"Tiramisu\" procede do vêneto tirame-sú  e do italiano tirami su, de tira + mi + su: \"levanta-me\" ou \"puxa-me para cima\", chamado assim por ser muito energético.\n[…]\nHá diversas hipóteses sobre a origem do tiramisù:\n[…]\nUns a localizam no século XX, após a Segunda Guerra Mundial, em Treviso, Vêneto, no restaurante \"Da Alfredo\", a primeira casa do grupo \"Torlá\". O nome viria da sobremesa energética \"che ti tira su\" (que te faz levantar) usada para revigorar boêmios, em especial nas noitadas dos bordéis (case chiuse) do  Vêneto. Todavia, o próprio restaurante não reivindica sua criação.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Café expresso",
      "descricao": "Café concentrado preparado forçando água quente sob alta pressão através do pó fino, de origem italiana."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que século foi patenteada, em Turim, a primeira máquina de café expresso?",
    "resposta": "Século dezenove",
    "distratores": [
      "Século vinte",
      "Século dezoito",
      "Século dezessete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Espresso_machine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Espresso_machine",
        "situacao": "ok",
        "texto": "An espresso machine is a device that brews coffee by rapidly forcing heated, pressurized water through a small, compressed cake (commonly called a puck) of finely ground coffee and a coffee filter to produce a thick, concentrated coffee called espresso.\n[…]\nAngelo Moriondo, from Turin, patented a steam-driven \"instantaneous\" coffee beverage making device in 1884 (No. 33/256). The device is \"almost certainly the first Italian bar machine that controlled the supply of steam and water separately through the coffee\" and Moriondo is \"certainly one of the earliest discoverers of the expresso  [sic] machine, if not the earliest\". He was granted patent no.\n[…]\nSeventeen years later, in 1901, Luigi Bezzera, from Milan, devised and patented several improvements to the espresso machine, the first of which was applied for on 19 December 1901. Titled \"Innovations in the machinery to prepare and immediately serve coffee beverage\"; Patent No. 153/94, 61707, was granted on 5 June 1902.\n[…]\nLever-driven espresso machines are sometimes called manual espresso machines because of this.\n[…]\nThis results in the crema, a hallmark of an espresso, being of lower quality.\n[…]\nAfter-market retailers also sell bottomless portafilters that minimize the espresso's contact with any metal. A bottomless portafilter is one tool baristas use to analyze the quality of the coffee grind and the evenness of the extraction and allows for a visual check of \"channeling\" or the condition in which water is able to pierce a hole in the espresso puck during the brew process leading to poor extraction.\n[…]\nOften, baristas use knockboxes to store their spent espresso grounds after they have pulled a shot.\n[…]\nThe Long History of the Espresso Machine\n[…]\nHow Espresso Machines Work"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Cachaça",
      "descricao": "Aguardente brasileira destilada do caldo de cana-de-açúcar fermentado"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A cachaça começou a ser destilada nos engenhos de açúcar do Brasil colonial em qual século?",
    "resposta": "Século dezesseis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cacha%C3%A7a"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cacha%C3%A7a",
        "situacao": "ok",
        "texto": "Cachaça ( kə-SHAH-sə; Brazilian Portuguese pronunciation: [kaˈʃasɐ]) is a distilled spirit made from fermented sugarcane juice. Also known as pinga, caninha, and other names, it is the most popular spirit in Brazil, and the most popular cane spirit in the world (though almost entirely due to domestic consumption). Outside Brazil, cachaça is used almost exclusively as an ingredient in tropical drin\n[…]\nSugar production was mostly switched from the Madeira islands to Brazil by the Portuguese in the 16th century. In Madeira, aguardente de cana is made by distilling fermented sugar cane juice into liquor, and the pot stills from Madeira were brought to Brazil to make what today is also called cachaça. The process dates from 1532, when one of the Portuguese colonists brought the first cuttings of sugar cane to Brazil from Madeira.\n[…]\nThe resulting beverage was known by several names: in British colonies, it was named rum; in France, tafia; in Spain, aguardiente de caña; and in Portugal (Brazil), aguardente da terra, aguardente de cana and later cachaça (locals also call it \"Pinga\", which translates to drip).\n[…]\nThroughout its history, cachaça was instrumental to the Atlantic slave trade, where Portuguese colonies sent cachaça to Europe, which sent money to Africa, which sent slaves to the colonies.\n[…]\nBy the turn of the millennium, the Brazilian government began efforts to support the cachaça industry. In 1992, Pró-Cachaça, a program to encourage the expansion of cachaça production, was passed by the Brazilian government, and the following year, the government officially defined cachaça, caninha, and aguardente de cana. Later, in 2005, the government defined the technical specifications of what qualifies as cachaça, and in 2007, the geographical indication for cachaça was created.\n[…]\nList of cachaça brands\n[…]\nCachaça HUB - Initiative in Europe about cachaça\n[…]\nKnow more ABOUT cachaça"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cacha%C3%A7a",
        "situacao": "ok",
        "texto": "Cachaça, pinga, cana ou caninha é a aguardente de cana-de-açúcar produzida no Brasil. É usada no preparo do coquetel paulista mundialmente conhecido \"caipirinha\".\n[…]\nA geração inicial de colonizadores portugueses no Brasil apreciava a bagaceira portuguesa e o vinho do porto. Assim como a alimentação, grande parte da bebida era importada da metrópole portuguesa. Sob tal conjuntura, foi descoberto, em algum engenho de açúcar, o vinho de cana-de-açúcar, que é o resultado do caldo de cana fermentado, como também dos subprodutos da produção do açúcar, como as espumas e o melaço misturados à água.\n[…]\nOs primeiros registros históricos da cachaça coincidem com o rum nas possessões inglesas nas Américas, da aguardiente de caña nas espanholas e da tafia nas francesas. Ou seja, a cachaça, o rum, a aguardiente de caña e a tafia foram todas criadas a partir dos mesmos subprodutos da produção de açúcar: o melaço e as espumas. A cachaça torna-se moeda corrente para compra de escravos na África. Alguns engenhos passam a dividir a produção entre o açúcar e a cachaça.\n[…]\nIncomodada com a queda do comércio da bagaceira e do vinho portugueses na colônia e alegando que a bebida brasileira prejudica a retirada do ouro das minas, a Corte proíbe, a partir de 1635, por várias vezes, a produção, comercialização e até o consumo da cachaça. Sem resultados, a Metrópole portuguesa resolve taxar o destilado. Em 1756, a aguardente de cana-de-açúcar foi um dos gêneros que mais contribuíram com impostos voltados para a reconstrução de Lisboa, destruída no grande sismo de 1755.\n[…]\nCachacier\n[…]\nWeimann, Erwin. Cachaça - A bebida brasileira. São Paulo, Editora Terceiro Nome, 2006. 151p.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Vinho",
      "descricao": "Bebida alcoólica feita da fermentação do suco de uva."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os vestígios mais antigos de produção de vinho de uva, com cerca de oito mil anos, foram encontrados em qual país?",
    "resposta": "Geórgia",
    "distratores": [
      "Grécia",
      "Egito",
      "Itália"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/History_of_wine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/History_of_wine",
        "situacao": "ok",
        "texto": "The earliest known traces of wine were found near Tbilisi, Georgia (c. 6000 BCE). The earliest known winery, from c. 4100 BCE, is the Areni-1 winery in Armenia. The subsequent spread of wine culture around the Mediterranean was probably due to the influence of the Phoenicians (from c. 1000 BCE) and Greeks (from c. 600 BCE). The Phoenicians exported the wines of Byblos, which were known for their q\n[…]\nThe earliest archaeological evidence of wine fermentation found has been at sites in Georgia (c. 6000 BC), Hajj Firuz, West Azerbaijan province of Iran (c. 5000 BC), Greece (c. 4500 BC), and Sicily (c. 4000 BC). The earliest evidence of steady production of wine has been found in Armenia (c. 4100 BC) while the earliest evidence of a grape and rice mixed-based fermented drink was found in ancient China (c. 7000 BC).\n[…]\nMexico became the most important wine producer starting in the 16th century, to the extent that its output began to affect Spanish commercial production. In this competitive climate, the Spanish king sent an executive order to halt Mexico's production of wines and the planting of vineyards.\n[…]\nUntil quite late in the 20th century, the product of these countries was not well known outside their small export markets. For example, Australia exported mainly to the United Kingdom; New Zealand retained most of its wine for domestic consumption, and South Africa exported to the Kings of Europe. However, with the increase in mechanization and scientific advances in winemaking, these countries became known for high-quality wine.\n[…]\nIn East Asia, the first modern wine industry was Japanese wine, developed in 1874 after grapevines were brought back from Europe. The earliest wine producing companies in Japan are Mercian (established in 1877) and Suntory (established in 1909).\n[…]\nBarisashvili, Giorgi (2022). Georgian Culture of Winemaking. Artanuji Publishing. ISBN 978-9941-494-63-5."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_vinho",
        "situacao": "ok",
        "texto": "A história do vinho tem grande importância histórica, pois o seu surgimento em tempos remotos tornou-o um produto que acompanhou grande parte da evolução econômica e sociocultural de várias civilizações ocidentais e orientais.\n[…]\nExistem referências que indicam a Geórgia como o local onde provavelmente se produziu vinho pela primeira vez, sendo que foram encontradas neste local graínhas datadas entre 8000 a.c. e 5000 a.c.\n[…]\nA predileção da época era pelo vinho doce. Os romanos colhiam as uvas o mais tardar possível, ou adotavam um antigo método, colhendo-as imaturas e deixando-as no Sol para secar e concentrar o açúcar.\n[…]\nSucedendo a queda romana, uma grande crise abateu a Europa. Províncias foram reduzidas a reinos de futuro impreciso que se relacionavam mal, causando grande instabilidade econômica. A produção do vinho sofreu então um retrocesso neste continente. Já não envelhecia mais em barris de boa madeira, o que implica o aumento do tempo de oxidação da bebida. Como conseqüência, seu consumo tinha que ser imediato, perdendo a áurea de fineza dos vinhos antigos.\n[…]\nA história do vinho em Portugal vai para além da fundação da nacionalidade. Considera-se que a primeira vinha foi plantada na Península Ibérica (no vale do Tejo e no vale do Sado) cerca de 2000 AC, pelos Tartessos. Mais tarde, os Fenícios introduziram novas castas e tomaram conta do comércio do vinho.\n[…]\nA produção de uvas e de vinho é tradicionalmente dispersa, com elevado número de produtores de uvas e um elevado número de pequenas adegas. Nas décadas de 50 e 60 do século XX, houve um esforço de concentração da oferta de vinho, com a criação de mais de uma centena de adegas cooperativas distribuídas por todo o país.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Chocolate",
      "descricao": "Alimento feito das sementes fermentadas e torradas do cacau, consumido originalmente como bebida na Mesoamérica."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Apesar de o chocolate ter sido popularizado pelos astecas, o cacaueiro é nativo de qual floresta da América do Sul?",
    "resposta": "Floresta Amazônica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Theobroma_cacao"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Theobroma_cacao",
        "situacao": "ok",
        "texto": "Theobroma cacao (cacao tree or cocoa tree) is a small (6–12 m (20–39 ft) tall) evergreen tree in the Malvaceae family. Its seeds—cocoa beans when dried and fermented—are used to make chocolate liquor, cocoa powder, cocoa butter and chocolate. Although the tree is native to the tropics of the Americas, the largest producer of cocoa beans in 2022 was Côte d'Ivoire.\n[…]\nT. cacao is widely distributed from southeastern Mexico to the Amazon basin. There were originally two hypotheses about its domestication; one said that there were two foci for domestication, one in the Lacandon Jungle area of Mexico and another in lowland South America. More recent studies of patterns of DNA diversity, however, suggest that this is not the case. One study sampled 1241 trees and classified them into 10 distinct genetic clusters.\n[…]\nCarmenta theobromae - C. & S. America\n[…]\nThe cacao tree, native of the Amazon rainforest, was first domesticated at least 5,300 years ago, in equatorial South America from the Santa Ana-La Florida (SALF) site in what is present-day southeast Ecuador (Zamora-Chinchipe Province) by the Mayo-Chinchipe culture before being introduced in Mesoamerica.\n[…]\nAs cacao is the only known commodity from Mesoamerica containing both of these alkaloid compounds, it seems likely these vessels were used as containers for cacao drinks. In addition, cacao is named in a hieroglyphic text on one of the Rio Azul vessels. Cacao is also believed to have been ground by the Aztecs and mixed with tobacco for smoking purposes. Cocoa was being domesticated by the Mayo Chinchipe of the upper Amazon around 3,000 BC.\n[…]\nCoe, Sophie D.; Coe, Michael D. (1996). The True History of Chocolate. London: Thames & Hudson. ISBN 0-500-01693-3.\n[…]\nMcNeil, Cameron, ed. (2006). Chocolate in Mesoamerica: A Cultural History of Cacao. Gainesville: University of Florida Press. ISBN 0-8130-2953-8."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cacau",
        "situacao": "ok",
        "texto": "O cacaueiro (nome científico: Theobroma cacao) é a árvore perenifólia que dá origem ao fruto chamado cacau.\n[…]\nPertencente à família Malvaceae, o cacaueiro tem seu centro de origem nas cabeceiras da chuvosa Bacia do rio Amazonas, localizada na América do Sul. Em ambientes sombreados de floresta e sem poda humana, sua altura pode chegar a 20 metros. Em condições de cultivo, no entanto, recomenda-se manter sua altura entre 3 a 5 metros.\n[…]\nO cacau é originário da bacia hidrográfica do rio Amazonas, tendo sido posteriormente dispersado para as regiões tropicais da América Central e do Norte.\n[…]\nNo Brasil, ele foi cultivado primeiramente na Amazônia, onde já existia em estado natural. Depois, pelo rio Amazonas, passou para o Pará e pelo mar chegou finalmente à Bahia, onde melhor se adaptou ao solo e ao ambiente marinho, e causou o chamado \"boom\" da década de 1930, durante o Ciclo do cacau (ver: História da alimentação no Brasil e História da agricultura no Brasil).\n[…]\nPor ser plantado por mais de 200 anos no Estado da Bahia, à sombra da floresta, o cultivo do cacaueiro foi responsável pela conservação de grandes corredores de Mata Atlântica. Este sistema de cultivo é conhecido como \"cacau cabruca\", corruptela do termo \"brocar\" (ralear). Nele, o sub-bosque da mata é \"brocado\" (removido) e substituído por mudas de cacaueiro, tradicionalmente plantadas aleatoriamente.\n[…]\nPosteriormente, as mesmas são transportadas até as indústrias produtoras de chocolate, onde vão ser processadas e dar origem aos alimentos derivados do cacau.\n[…]\n«Gráficos sobre a produção mundial de cacau» (em inglês) [ligação inativa]",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Arroz",
      "descricao": "Grão da gramínea Oryza sativa, alimento básico de grande parte da população mundial."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Há milhares de anos, o arroz asiático foi domesticado pela primeira vez em qual país?",
    "resposta": "China",
    "distratores": [
      "Índia",
      "Japão",
      "Tailândia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rice",
      "https://en.wikipedia.org/wiki/History_of_rice_cultivation"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rice",
        "situacao": "ok",
        "texto": "Rice is a cereal grain and, in its domesticated form, is the staple food of over half of the world's population, particularly in Africa and Asia. Rice is the seed of the grass species Oryza sativa (Asian rice)—or, less commonly, Oryza glaberrima (African rice). Asian rice was domesticated approximately 13,500 to 8,200 years ago in what is now China; African rice was domesticated independently in W\n[…]\nOryza sativa rice was first domesticated in China 9,000 years ago, by people of Neolithic cultures in the Upper and Lower Yangtze, associated with Hmong–Mien speakers and pre-Austronesians, respectively. The functional allele for nonshattering, the critical indicator of domestication in grains, as well as five other single-nucleotide polymorphisms, is identical in both indica and japonica. This implies a single domestication event for O. sativa.\n[…]\nBoth indica and japonica forms of Asian rice sprang from a single domestication event in China from the wild rice Oryza rufipogon. Despite this evidence, it appears that indica rice arose when japonica arrived in India about 4,500 years ago and hybridised with another rice, whether an undomesticated proto-indica or wild O. nivara.\n[…]\nWorld trade figures are much smaller than those for production, as less than 8% of rice produced is traded internationally. China, an exporter of rice in the early 2000s, had become the world's largest importer of rice by 2013. Developing countries are the main players in the world rice trade; by 2012, India was the largest exporter of rice, with Thailand and Vietnam the other largest exporters.\n[…]\nFarmers in China, Indonesia and the Philippines have traditionally managed weeds and pests by the polycultural practice of raising ducks and sometimes fish in their rice paddies. These produce valuable additional crops, eat small pest animals, manure the rice, and in the case of ducks also control weeds."
      },
      {
        "url": "https://en.wikipedia.org/wiki/History_of_rice_cultivation",
        "situacao": "ok",
        "texto": "The history of rice cultivation is an interdisciplinary subject that studies archaeological and documentary evidence to explain how rice was first domesticated and cultivated by humans, the spread of cultivation to different regions of the planet, and the technological changes that have impacted cultivation over time.\n[…]\nGenomic studies suggests that indica rice was later introduced back to China from India between 2,000 and 1,400 years ago.\n[…]\nA 2012 study, through genome sequencing and mapping of hundreds of rice varieties and that of wild rice populations, indicated that the domestication of rice occurred around the central Pearl River valley region of southern China, in contradiction to archaeological evidence. The study is based on modern distribution maps of wild rice populations which may be potentially inconclusive due to drastic climatic changes that happened during the end of the last glacial period, ca. 12,000 years ago.\n[…]\nAn older theory, based on one chloroplast and two nuclear gene regions, Londo et al. (2006) had proposed that O. sativa rice was domesticated at least twice—indica in eastern India, Myanmar, and Thailand; and japonica in southern China and Vietnam—though they concede that archaeological and genetic evidence exist for a single domestication of rice in the lowlands of southern China.\n[…]\nIn 2003, Korean archaeologists announced they discovered rice husks in Soro-ri, Korea, which dated to 13,000 BC, that they claimed show signs of having been cut by stone tools. These antedates the oldest grains found in China, which were dated to 10,000 BC, and potentially challenge the explanation that domesticated rice originated in the Yangtze River basin of China. The findings were received by academia with strong skepticism and the claim remains dubious."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arroz",
        "situacao": "ok",
        "texto": "O arroz  é uma planta da família das gramíneas e gênero Oryza, que alimenta mais de metade da população humana do mundo. É a terceira maior cultura cerealífera do mundo, apenas ultrapassada pelas de milho e trigo. É rico em hidratos de carbono. A maior parte do arroz provém da espécie Oryza sativa (por vezes chamado arroz asiático), mas o chamado arroz africano provém da espécie Oryza glaberrima.\n[…]\nA visão comumente aceita é que o arroz foi cultivado primeiramente na região do vale do Rio Yangtzé na China. Estudos morfológicos de fitólitos de arroz no sítio arqueológico Diaotonghuan mostram claramente a transição da coleta de arroz selvagem para o cultivo de arroz plantado. O grande número de fitólitos de arroz silvestre no nível de Diaotonghuan que data de 12 000−11 000 AP indica que a coleta de arroz selvagem fazia parte dos meios locais de subsistência.\n[…]\nMudanças na morfologia de fitólitos de Diaotonghuan datados de 10 000−8 000 AP mostram que o arroz existente por este tempo era cultivado. Logo depois, as duas principais variedades de arroz asiático e arroz japonês foram sendo cultivadas na China Central. No final do 3,º milênio a.C., houve uma rápida expansão do cultivo de arroz no território continental do sudeste da Ásia e em direção oeste para a Índia e Nepal.\n[…]\nEm 2011, um trabalho conjunto da Universidade de Stanford, da Universidade de Nova York, da Universidade Washington em St. Louis e da Purdue University forneceu a evidência mais forte de que existe apenas uma única origem de arroz cultivado, no Vale do Yangtzé, na China.\n[…]\nA produção mundial de arroz concentra-se, quase exclusivamente, na Ásia, com cerca de 90 % da produção nesta área, essencialmente na China e na Índia.\n[…]\nO arroz dourado é uma variedade do Oryza sativa produzida por engenharia genética para que biossintetizasse o betacaroteno.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Café",
      "descricao": "Bebida preparada com os grãos torrados e moídos do cafeeiro, originário da Etiópia."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Cada frutinho vermelho do cafeeiro, chamado de cereja, costuma guardar quantos grãos de café?",
    "resposta": "Dois",
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
    "indice": 40,
    "ancora": {
      "nome": "Doze uvas da sorte",
      "descricao": "Tradição espanhola de comer uma uva a cada badalada da meia-noite na virada do ano."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na Espanha, à meia-noite da virada do ano, come-se uma uva a cada badalada do relógio. Quantas uvas ao todo?",
    "resposta": "Doze",
    "distratores": [
      "Sete",
      "Dez",
      "Treze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Twelve_Grapes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Twelve_Grapes",
        "situacao": "ok",
        "texto": "The Twelve Grapes (Spanish: las doce uvas (de la suerte), lit. 'the twelve grapes (of luck)') is a Spanish tradition that consists of eating a grape with each of the twelve clock bell strikes at midnight of 31 December to welcome the New Year. Each grape and clock bell strike represents each of the coming twelve months.\n[…]\nThis tradition dates back from at least 1895, but was greatly popularized in 1909. In December of that year, some Alicantese vine growers spread this custom to encourage grape sales due to overproduction during an excellent harvest. According to the tradition, eating the Twelve Grapes leads to a year of good luck and prosperity.\n[…]\nThere are two types of places where people gather to eat the grapes: at home with family members after Nochevieja dinner, or in the main squares around the country. The most famous is where the tradition started, the Puerta del Sol in Madrid.\n[…]\nThe Twelve Grapes are closely related to the time ball and clock of the Royal House of the Post Office in Puerta del Sol, from where the change of year is broadcast on all major national television networks and radio stations, with television broadcasting beginning in 1962 on Televisión Española.\n[…]\nThe Twelve Grapes have also been adopted in places with a broad cultural relation with Spain, such as the Philippines, Latin American and Caribbean countries, as well as Hispanic communities in countries such as the United States. This tradition is part of the Hispanic Christmas festivities. It is also done by some Jamaican locals.\n[…]\nMedia related to Twelve Grapes at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Chocolate",
      "descricao": "Alimento feito das sementes fermentadas e torradas do cacau, consumido originalmente como bebida na Mesoamérica."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que substância do cacau, que o corpo dos cães elimina muito devagar, torna o chocolate perigoso para eles?",
    "resposta": "Teobromina",
    "distratores": [
      "Capsaicina",
      "Quinino",
      "Tanino"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Theobromine_poisoning"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Theobromine_poisoning",
        "situacao": "ok",
        "texto": "Theobromine poisoning is an overdosage reaction to the xanthine alkaloid theobromine, found in coffee, chocolate, tea, cola beverages, and some other foods.\n[…]\nIn general, the amount of theobromine found in chocolate is small enough that chocolate can be safely consumed by humans with a negligible risk of poisoning.\n[…]\nTheobromine is also suspected to induce right atrial cardiomyopathy after long term exposure at levels equivalent to approximately 15 g/kg (0.24 oz/lb) of dark chocolate per day. According to the Merck Veterinary Manual, baker's chocolate of approximately 1.3 g/kg (0.021 oz/lb) of a dog's body weight is sufficient to cause symptoms of toxicity.\n[…]\nFor example, 0.4 oz (11 g) of baker's chocolate would be enough to produce mild symptoms in a 20 lb (9.1 kg) dog, while a 25% cacao chocolate bar (like milk chocolate) would be only 25% as toxic as the same dose of baker's chocolate. One ounce of milk chocolate per pound of body weight (63 g/kg) is a potentially lethal dose in dogs.\n[…]\nIn 2014, four American black bears were found dead at a bait site in New Hampshire. A necropsy and toxicology report performed at the University of New Hampshire in 2015 confirmed they died of heart failure caused by theobromine after they consumed 41 kg (90 lb) of chocolate and doughnuts placed at the site as bait. A similar incident killed a black bear cub in Michigan in 2011.\n[…]\nMerck Veterinary Manual (Toxicology/Food Hazards section), Merck & Co., Inc., Chocolate Poisoning. (June 16, 2005)\n[…]\nA Pet Owner's Guide to Poisons: Chocolate at the Wayback Machine (archived August 5, 2009)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Intoxica%C3%A7%C3%A3o_por_teobromina",
        "situacao": "ok",
        "texto": "Envenenamento por teobromina é uma reação de sobredosagem ao alcaloide xantínico teobromina, encontrado no café, chocolate, chá, refrigerantes de cola e alguns outros alimentos.\n[…]\nA dose letal mediana (LD50) da teobromina foi publicada apenas para gatos, cães, ratos e camundongos; estas diferem por um fator de 6 entre as espécies.\n[…]\nO envenenamento grave ocorre com mais frequência em animais, que metabolizam a teobromina muito mais lentamente do que os humanos e podem facilmente consumir chocolate suficiente para causar envenenamento. As vítimas mais comuns do envenenamento por teobromina são os cães para os quais pode ser fatal. A dose tóxica para gatos é ainda menor do que para cães. No entanto, os gatos são menos propensos a comer chocolate, uma vez que não conseguem sentir o sabor doce.\n[…]\nSuspeita-se também que a teobromina induza cardiomiopatia atrial direita após exposição prolongada a níveis equivalentes a aproximadamente 15 g/kg () dL. de chocolate amargo por dia. De acordo com o Manual Veterinário Merck, o chocolate para culinária tem aproximadamente 1,3 g/kg () do peso corporal de um cão é suficiente para causar sintomas de toxicidade.\n[…]\nEm 2014, quatro ursos-negros americanos foram encontrados mortos em um local de isca em New Hampshire. Uma necropsia e um relatório toxicológico realizados na Universidade de New Hampshire em 2015 confirmaram que eles morreram de insuficiência cardíaca causada por teobromina após consumirem 90 lb (41 kg) substância. de chocolate e donuts colocados no local como isca. Um incidente semelhante matou um filhote de urso preto em Michigan em 2011.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Vinho do Porto",
      "descricao": "Vinho licoroso português produzido no vale do Douro e envelhecido em Vila Nova de Gaia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O vinho do Porto fica doce e mais forte porque sua fermentação é interrompida com o acréscimo de qual bebida?",
    "resposta": "Aguardente vínica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Port_wine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Port_wine",
        "situacao": "ok",
        "texto": "Port wine (Portuguese: vinho do Porto, Portuguese: [ˈviɲu ðu ˈpoɾtu]; lit. 'wine of Porto'), or simply port, is a Portuguese fortified wine produced in the Douro Valley of northern Portugal. It is typically a sweet red wine, often served with dessert, although it also comes in dry, semi-dry, and white varieties.\n[…]\nPort wine is different from other wines because of its distinctive winemaking method: the early interruption of the wine's fermentation process via the introduction of a neutral grape spirit. This process gives Port unique characteristics including an intense taste and aroma, rich fruit flavors, typically elevated sweetness and a relatively high alcohol content, usually between 19% and 22% by volume.\n[…]\nPort is produced from grapes grown and processed in the demarcated Douro region. The wine produced is then fortified by the addition of a neutral grape spirit known as aguardente to stop the fermentation, leaving residual sugar in the wine, and to boost the alcohol content. The fortification spirit is sometimes referred to as brandy, but it bears little resemblance to commercial brandies.\n[…]\nGrapes grown for port are generally characterized by their small, dense fruit which produces concentrated and long-lasting flavours, suitable for long aging. While the grapes used to produce port made in Portugal are strictly regulated by the Instituto do Vinho do Porto, wines from outside this region that describe themselves as port may be made from other varieties.\n[…]\nThe Port and Douro Wines Institute is an official body belonging to the Ministry of Agriculture of Portugal and is a key institution in promoting the industry and knowledge of making port wine. It was previously known as the Instituto do Vinho do Porto."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vinho_do_Porto",
        "situacao": "ok",
        "texto": "O Vinho do Porto é um vinho licoroso, produzido na Região Demarcada do Douro, sob condições peculiares derivadas de fatores naturais e humanos. O processo de fabrico, baseado na tradição, inclui a paragem da fermentação do mosto pela adição de aguardente vínica (benefício ou aguardentação), a lotação de vinhos e o envelhecimento.\n[…]\nA quantidade de aguardente de origem vitícola destinada a interromper a fermentação, de acordo com o grau de doçura desejado, é fixada anualmente no comunicado de vindima.\n[…]\nA conhecida \"Lei do Terço\" define, de uma forma genérica, que cada agente económico inscrito no IVDP como comerciante ou produtor-engarrafador de vinho do Porto só poderá comercializar, em cada ano, “um terço dos vinhos com mais de um ano”, quantidade que poderá ser acrescida ainda de “30% dos vinhos adquiridos ou elaborados, na última vindima”.\n[…]\nO que torna o vinho do Porto diferente dos restantes vinhos, além do clima único, é o facto de a fermentação do vinho não ser completa, sendo parada numa fase inicial (dois ou três dias depois do início), através da adição de uma aguardente vínica neutra (com cerca de 77% de álcool). Assim o vinho do Porto é um vinho naturalmente doce (visto o açúcar natural das uvas não se transforma completamente em álcool) e mais forte do que os restantes vinhos (entre 19 e 22% vol. alc.).\n[…]\nO vinho do Porto que envelhece até três anos é considerado standard. Todos os outros vinhos que fiquem mais tempo a envelhecer na madeira pertencem a categorias especiais, quer porque as uvas que lhe deram origem são de melhor qualidade, quer por terem sido produzidos num ano excepcionalmente bom em termos atmosféricos. Assim, entre as categorias especiais, é comum encontrar os Reserva, os LBV, os Tawnies envelhecidos e os Vintage, e, menos regularmente, os Colheita.\n[…]\nDouro Valley — Vinho do Porto",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Vatapá",
      "descricao": "Creme baiano de origem afro-brasileira feito com pão, camarão seco, amendoim, castanha, leite de coco e dendê."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Além de camarão seco, amendoim e dendê, que ingrediente, muitas vezes amanhecido e molhado no leite de coco, engrossa o vatapá baiano?",
    "resposta": "Pão",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vatap%C3%A1",
      "https://en.wikipedia.org/wiki/Vatap%C3%A1"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vatap%C3%A1",
        "situacao": "ok",
        "texto": "O vatapá é um prato típico da culinária afro-brasileira. O seu preparo pode incluir pão molhado, farinha de rosca, farinha de trigo, fubá, gengibre, pimenta-malagueta, amendoim, cravo, castanha de caju, leite desnatado, azeite de oliva, azeite de dendê, cebola, alho e tomate. Pode ser preparado com camarões frescos inteiros, ou secos e moídos, com peixe, com bacalhau, com charque ou com carne de f\n[…]\n\"Vatapá\" é oriundo do termo iorubá vata'pa. Então, de origem africana, chegou ao Brasil por intermédio dos africanos iorubás com o nome de ehba-tápa.\n[…]\nÉ um prato típico das cozinhas nordestina e nortista e é marca da influência da população negra nessas regiões. É muito divulgado pela Bahia onde em seu feitio acrescentam o azeite de dendê, e serve como um acompanhamento do acarajé. É igualmente popular no Amazonas, no Amapá, no Pará, no Maranhão e em Rondônia, onde a receita sofre variações como a ausência de amendoim (ingrediente original das Américas) e outros ingredientes comuns na versão tradicional.\n[…]\nO vatapá é influência da culinária africana trazida pelos africanos escravizados nos navios negreiros, a partir do século XVI. Com os ingredientes encontrados nesta nova terra e a necessidade de suplementar sua dieta alimentar, desenvolveram outros pratos, que passaram a ser típicos da culinária brasileira. É exemplo disso o angu, entre outros."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vatap%C3%A1",
        "situacao": "ok",
        "texto": "Vatapá (Yoruba: Ẹ̀bà Tápà), [vɐtɐˈpa] is an Afro-Brazilian dish made from bread, shrimp, coconut milk, finely ground peanuts and palm oil mashed into a creamy paste. It is a typical food of Salvador, Bahia, and it is also common to the North and Northeast regions of Brazil. In the northeastern state of Bahia it is commonly eaten with acarajé, and as a ritual offering in Candomblé, with acaçá or ac\n[…]\n\"Vatapá\" is derived from the term Yoruba words: Ẹ̀bà Tápà.\n[…]\nVatapá is of West African origin and arrived in Brazil through the Yoruba people under the name of  ehba-tápa.\n[…]\nIt is a typical dish of the northeastern cuisine and very traditional in the state of Bahia, where dendê (unrefined red palm oil) is a key ingredient and the dish is frequently served with caruru.\n[…]\nThe 1957 song \"Vatapá\" by Brazilian songwriter Dorival Caymmi is named for the dish. The lyrics contain the recipe for the dish, listing the key ingredients and providing basic instructions for its preparation. The song was later covered by Gal Costa, appearing on her tribute album of Caymmi's songs, Gal Canta Caymmi (1976).\n[…]\nVatapá is also mentioned in the 1941 song \"Você Já Foi à Bahia?\" (English: \"Have You Been to Bahia?\"), written by Dorival Caymmi, where it is named, alongside caruru and munguzá, as a specialty of Bahia. A partially-translated version of this song appeared in the 1944 live-action and animated film The Three Caballeros, produced by Walt Disney, in which it is sung by José Carioca in an attempt to convince Donald Duck to visit Bahia."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Paella",
      "descricao": "Prato espanhol de arroz com açafrão, originário da região de Valência"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A paella valenciana tradicional não leva frutos do mar. Além do frango, que carne vai nela?",
    "resposta": "Coelho",
    "distratores": [
      "Lula",
      "Porco",
      "Cordeiro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Paella"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paella",
        "situacao": "ok",
        "texto": "Paella ( py-EL-ə,  pah-AY-yə; Valencian: [paˈeʎa]; Spanish: [paˈeʎa] or [paˈeʝa]) is a rice dish originally from the Valencian Community. Paella is regarded as one of the community's identifying symbols.\n[…]\nArroz a la valenciana (Spanish) or Arroz à valenciana (Portuguese) is considered a part of Philippine cuisine and is regarded as the Philippine version of paella.\n[…]\nAfter cooking paella, a layer of scorched rice may be at the bottom of the pan, called socarrat in Valencià. The layer develops on its own if the paella is cooked over a burner or open fire. This is traditionally considered positive (as long as it is not burnt), and Valencia natives enjoy eating it.\n[…]\nPaella has become a custom at mass gatherings in the Valencian Community (festivals, political campaigns, protests, etc.) to prepare enormous paellas, sometimes to win a place in the Guinness World Records book. Chefs use gargantuan paelleras for these events.\n[…]\nValencia restaurateur Juan Galbis claims to have made the world's largest paella with help from a team of workers on 2 October 2001. This paella fed about 110,000 people, according to Galbis' former website. Galbis says this paella was even larger than his earlier world-record paella made on 8 March 1992, which fed about 100,000 people. Galbis' record-breaking 1992 paella is listed in Guinness World Records.\n[…]\nTraditional Valencian cuisine offers recipes similar to paella valenciana and paella de marisco such as arròs negre, arròs al forn, arròs a banda and arròs amb fesols i naps since rice is the base of much of the local cuisine.\n[…]\nFideuà is a Valencian pasta noodle dish variation cooked similarly in a paella. It may be served with allioli sauce.\n[…]\nValencian cuisine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paelha",
        "situacao": "ok",
        "texto": "A paelha, é um prato à base de arroz, típico da gastronomia valenciana — daí que em Portugal seja comumente conhecido como arroz à valenciana e no Brasil como paelha valenciana — e popularizado por toda a Espanha (com uma grande quantidade de variações adaptadas ao ingredientes das diversas regiões da cozinha espanhola) e noutros países, convertendo-se numa referência da gastronomia espanhola.\n[…]\nO prato era inicialmente uma refeição simples confeccionada com os ingredientes disponíveis para além do arroz: carne de coelho, frango ou até pato; verduras (diferentes tipos de feijão — bajoques, fesols ou garrofons — e tomate), azeite, água, açafrão, caracóis e sal. Ao longo do tempo foi modernizando-se e entrou nas ementas dos restaurantes, onde é cozinhada com diferentes tipos de marisco, incluindo bogavantes, camarões ou lagostas.\n[…]\nNo Brasil, normalmente é feita com frutos do mar.\n[…]\nOutro tipo de paelha é a conhecida como mista, já que mistura a paelha de carne (frango e coelho) com a paelha de mariscos de origem relativamente recente. Esta é pouco consumida em Valencia visto ser de recente invenção noutras regiões espanholas. Apesar do desvio da receita original, a paelha mista tem ganho muita aceitação fora da Comunidade Valenciana; é o prato que se encontra em grande parte dos restaurantes não valencianos de Espanha e do estrangeiro.\n[…]\nPredomina nos folhetos turísticos e coleções gastronómicas sobre Espanha onde é o único tipo de paelha mencionado. Outras variações da paelha, caso sejam cozinhadas fora de Valência, para além de misturar carne com marisco, incluem ingredientes tais como ervilha, cebola, chouriço ou salsicha.\n[…]\nResulta da elaboração de um caldo de peixe (choco, gambas e imperador) e carne (frango ou coelho). A elaboração desta paelha originou-se no sul da Comunidade Valenciana (sobretudo nas comarcas de l'Alacantí-Alcoià ou da foia de Castalla).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Mortadela",
      "descricao": "Embutido cozido italiano de carne de porco moída, originário de Bolonha, com cubos de gordura visíveis na fatia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Os quadradinhos brancos espalhados pela fatia de mortadela são pedaços de quê?",
    "resposta": "Toucinho, gordura de porco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mortadella"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mortadella",
        "situacao": "ok",
        "texto": "Mortadella (Italian: [mortaˈdɛlla]) is a large salume made of finely hashed or ground cured pork, which incorporates at least 15% small cubes of pork fat (principally the hard fat from the neck of the pig). It is traditionally flavoured with peppercorns, but modern versions can also contain pistachios or less commonly, myrtle berries. The sausage is then cooked.\n[…]\nIn Poland, mortadela slices are sometimes dipped in batter, fried, and served with potatoes and salads as a quicker (and cheaper) alternative to traditional pork cutlets.\n[…]\nInstead, it is flavoured with just cardamom, sometimes coriander and nutmeg, and also traditionally contains eggs and milk, which are usually absent in traditional mortadella. Unlike mortadella, doktorskaya kolbasa contains lower amounts of fat and is high in proteins.\n[…]\nMortadella was banned from import into the United States from 1967 to 2000 due to an outbreak of African swine fever in Italy. The ban in the United States was lifted due to a veterinary equivalency agreement that allowed countries to export products that had been shown to be disease-free as part of an overall agreement that would allow products deemed safe in the United States to be exported to the European Union.\n[…]\nThe plot of the 1971 comedy film Lady Liberty, starring Sophia Loren, is based on the United States ban on mortadella.\n[…]\nIn the 2020s, mortadella experienced a surge of interest, with numerous restaurants in New York and Los Angeles featuring mortadella dishes.\n[…]\nChả lụa or Vietnamese mortadella is sometimes used as an accompaniment to the Vietnamese dish bánh cuốn.\n[…]\nMortadella di Campotosto\n[…]\nConsorzio Mortadella Bologna (in Italian)\n[…]\nIstituto Valorizzazione Salumi Italiani (IVSI): Mortadella\n[…]\nCarlo Cantoni and Patrizia Cattaneo, \"La mortadella: aspetti attuali tecnici della sua produzione\" (in Italian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mortadela",
        "situacao": "ok",
        "texto": "Mortadela (em italiano, mortadella) é um enchido (português europeu) ou embutido (português brasileiro) feito de carne de bovinos, suínos, de aves e de cubos de gordura. Os temperos geralmente usados incluem pimenta preta (inteira ou moída), murta, noz moscada e coentro.\n[…]\nExistem duas teorias sobre a origem da palavra mortadela. A primeira indica que o recheio de porco que este enchido contém era, no passado, moído finamente, de forma tradicional, até chegar a uma consistência de goma, sendo usado para este efeito um almofariz, conhecido em Italiano como mortaio, do latim mortarum. O nome poderia, assim, ser proveniente da utilização deste instrumento.\n[…]\nA segunda teoria sugere que o nome mortadela pode ser derivado de uma salsicha romana temperada com murta, em vez de pimenta, designada pelos romanos como farcimen mirtatum.\n[…]\nUm relato de uma linguiça similar à mortadela datado de 1376 pode ser a referência escrita mais antiga da iguaria.\n[…]\nA designação Mortadella Bologna é uma Indicação Geográfica Protegida, de acordo com as normas da União Europeia\n[…]\nA mortadela é também popular no Irão, onde é produzida com carne de bovino ou borrego e conhecida como martadela ou colboss. Em Portugal e na Espanha são consumidas variedades recheadas com azeitonas e pimentos vermelhos. Na Itália e nos Estados Unidos da América, são comercializadas mortadelas recheadas com pedaços de pistáchio. No Brasil, mortadelas de qualidade são compostas de 50% de carnes, 10% de miúdos, 25 a 30% de gordura.\n[…]\nO sanduíche de mortadela é um prato tradicional do Mercado Municipal de São Paulo, que é muito frequentado por turistas em busca do famoso lanche. O sanduíche é feito com pão francês e cerca de 300 gramas de mortadela fatiada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Banana",
      "descricao": "Fruto comestível das plantas do gênero Musa"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A banana é levemente radioativa por causa de qual mineral, presente nela em grande quantidade?",
    "resposta": "Potássio",
    "distratores": [
      "Ferro",
      "Cálcio",
      "Magnésio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Banana_equivalent_dose"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Banana_equivalent_dose",
        "situacao": "ok",
        "texto": "Banana equivalent dose (BED) is an informal unit of measurement of ionizing radiation exposure, intended as a general educational example to compare a dose of radioactivity to the dose one is exposed to by eating one average-sized banana. Bananas contain naturally occurring radioactive isotopes, particularly potassium-40 (40K), one of several naturally occurring isotopes of potassium.\n[…]\nPlants naturally contain radioactive carbon-14 (14C), but in a banana containing 15 grams of carbon this would give off only about 3 to 5 low-energy beta rays per second. Since a typical banana contains about half a gram of potassium, it will have an activity of roughly 15 Bq.\n[…]\nSeveral sources point out that the banana equivalent dose is a flawed concept because consuming a banana does not increase one's exposure to radioactive potassium.\n[…]\nThe committed dose in the human body due to bananas is not cumulative because the amount of potassium (and therefore of 40K) in the human body is fairly constant due to homeostasis, so that any excess absorbed from food is quickly compensated by the elimination of an equal amount.\n[…]\nIt follows that the additional radiation exposure due to eating a banana lasts only for a few hours after ingestion, i.e. the time it takes for the normal potassium content of the body to be restored by the kidneys. The EPA conversion factor, on the other hand, is based on the mean time needed for the isotopic mix of potassium isotopes in the body to return to the natural ratio after being disturbed by the ingestion of pure 40K, which was assumed by EPA to be 30 days.\n[…]\nThese amounts may be compared to the exposure due to the normal potassium content of the human body of 2.5 grams per kilogram,  or 175 grams in a 70 kg adult. This potassium will naturally generate 175 g × 31 Bq/g ≈ 5400 Bq of radioactive decays, constantly through the person's adult lifetime."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dose_equivalente_a_uma_banana",
        "situacao": "ok",
        "texto": "A dose equivalente a uma banana (em inglês:  banana equivalent dose, comummente abreviada como BED) é uma unidade de medida informal que mede a exposição a radiação ionizante. A unidade é utilizada como exemplo educativo para comparar uma dose de radioatividade qualquer com a dose à qual alguém é exposto ao ingerir uma banana de tamanho médio.\n[…]\nAs bananas contêm naturalmente radioisótopos, em particular potássio-40 (40K), numa quantidade que não é cumulativa e não representa riscos ambientais e médicos, pois o principal componente radioativo é excretado para que seja mantido o equilíbrio metabólico.\n[…]\nA origem do conceito é incerta. Uma das menções mais antigas pode ser encontrada numa lista de discussão sobre segurança nuclear em 1995, na qual um físico do Laboratório Nacional de Lawrence Livermore menciona que o uso da \"dose equivalente a uma banana é bastante útil para explicar o conceito de doses infinitesimais (e os riscos infinitesimais correspondentes) ao público geral\".\n[…]\nBatatas, nozes e sementes de girassol são alguns alimentos também ricos em potássio, e por conseguinte em 40K. Castanhas-do-pará em particular não são apenas ricas em 40K, como também podem conter uma quantidade significativa de rádio, com valores até 44 Bq/kg (12 nCi/kg). Alguns tipos de sal de cozinha também podem conter vestígios de rádio, enquanto tabaco contém vestígios de tório, polônio e urânio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Roquefort",
      "descricao": "Queijo azul francês de leite de ovelha, maturado nas cavernas de Roquefort-sur-Soulzon."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes queijos famosos é feito com leite de ovelha?",
    "resposta": "Roquefort",
    "distratores": [
      "Brie",
      "Camembert",
      "Emmental"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Roquefort"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roquefort",
        "situacao": "ok",
        "texto": "Roquefort (French pronunciation: [ʁɔkfɔʁ] ; Languedocien: Ròcafòrt) is a  sheep-milk blue cheese from southern France. EU law dictates that only those cheeses aged in the natural Combalou caves of Roquefort-sur-Soulzon (in the Occitania region) may bear the name \"Roquefort\", as it is a recognised geographical indication and has a protected designation of origin.\n[…]\nBy 1820, Roquefort was producing 300 tonnes a year, a figure that steadily increased throughout the next century so that by 1914 it was 9,250.\n[…]\nAround three million cheese wheels are made annually (10,000 tonnes) making it, after Comté, France's second-most-popular cheese. Roquefort has a high content of free glutamate, 1,280 mg per 100 g of cheese.\n[…]\nThe regional cuisine in and around Aveyron includes many Roquefort-based recipes for main-course meat sauces, savory tarts and quiches, pies, and fillings.\n[…]\nThe Appellation d'origine contrôlée regulations that govern the production of Roquefort have been laid down over a number of decrees by the INAO. These include:\n[…]\nThe Penicillium roqueforti used in the production must be produced in France from the natural caves of Roquefort-sur-Soulzon.\n[…]\nThe whole process of maturation, cutting, packaging and refrigeration of the cheese must take place in the commune of Roquefort-sur-Soulzon.\n[…]\nPenicillium roqueforti does not produce penicillin. However, due to the presence of other anti-inflammatory proteins, it was common in country districts for shepherds to apply this cheese to wounds to avoid gangrene.\n[…]\nThe presence of anti-inflammatory compounds was confirmed by a 2012 study. A study from 2013 found that proteins from Roquefort cheese inhibit chlamydia propagation and lipopolysaccharide (LPS) leukocyte migration."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roquefort_%28queijo%29",
        "situacao": "ok",
        "texto": "Roquefort ou roquefor é uma variedade de queijo francesa produzida com leite de ovelhas. Deve o seu nome à sua localidade de origem: Roquefort-sur-Soulzon, em Aveyron, no Midi-Pirenéus, na França.\n[…]\nEsta variedade apresenta massa de consistência cremosa e esfarelada, com casca úmida e sabor acentuado e picante. No seu fabrico, assim como no das variedades de queijo Gorgonzola e Camembert, são injetados fungos (bolores) na massa: neste caso, os do género Penicillium. A seguir, a massa passa por um processo de maturação de três meses. São estes fungos que desenvolvem, no Roquefort, a aparência característica com veios verde-azulados que lhe dão o sabor especial.\n[…]\nDe acordo com o estudo Penicillium roqueforti Final Risk Assessment publicado no sítio da Agência de Proteção Ambiental dos Estados Unidos, o uso do fungo Penicillium roqueforti na fabricação do queijo Roquefort é seguro e, historicamente, não apresenta efeitos relevantes nocivos à saúde.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Abacate",
      "descricao": "Fruto da Persea americana, de casca escura e polpa cremosa com um grande caroço."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas frutas tem, de longe, mais gordura na polpa?",
    "resposta": "Abacate",
    "distratores": [
      "Banana",
      "Manga",
      "Mamão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Avocado"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Avocado",
        "situacao": "ok",
        "texto": "The avocado, alligator pear or avocado pear (Persea americana) is an evergreen tree in the laurel family (Lauraceae). It is native to the Americas, with archaeological evidence of early human avocado use dating back thousands of years across various regions of Central and South America. It was prized for its large and unusually oily fruit.\n[…]\nIn Central American, Caribbean Spanish-speaking countries, and Spain, it is known by the Spanish name aguacate, while Argentina, Chile, Perú and Uruguay use a Quechua-derived word palta. In Portuguese, it is abacate. The Nahuatl āhuacatl can be compounded with other words, as in ahuacamolli, meaning avocado soup or sauce, from which the Spanish word guacamole derives."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Persea_americana",
        "situacao": "ok",
        "texto": "O abacateiro, cujo fruto é o abacate, também designado como abacado, abacate, loiro-abacate e louro-abacate, é uma espécie da família Lauraceae, de nome científico Persea americana.\n[…]\nUma árvore adulta pode produzir mais de uma centena de abacates em uma estação, e há sempre o incômodo dos frutos não colhidos que caem no chão, causando grande sujeira e odor ruim. Assim, não é uma árvore recomendada para locais de grande circulação ou arborização de ruas. Os frutos, apesar de nutritivos para os humanos, podem ser tóxicos para alguns animais.\n[…]\nO abacateiro cresce mais facilmente em solos leves, profundos, drenados e ligeiramente ácidos. As melhores condições climáticas são encontradas em regiões com chuvas em torno de 1200 milímetros anuais.\n[…]\nO cultivo de abacates é criticado pelo seu impacto ambiental, uma vez que este necessita de enormes quantidades de água, o que pode causar problemas em zonas com pouca água. Para a produção de um quilo de abacates são necessários (em média) 1000 litros de água (um quilo de tomates necessita de 180 litros de água). Dependendo da variedade de abacate são necessários entre 70 a 300 litros de água para sustentar um abacate.\n[…]\nA importação de abacates também aumenta o impacto ambiental do abacate, uma vez que este é acondicionado usando muito plástico e tem de ser transportado a uma temperatura constante de 6 °C, o que consome muita energia.\n[…]\nEm Portugal, por causa do impacto ambiental deste fruto, a Agência Portuguesa do Ambiente deu um parecer desfavorável à exploração de mais de 120 hectares de abacates no Algarve.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Pequi",
      "descricao": "Fruto do cerrado de polpa amarela e aroma forte, típico da culinária de Goiás"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Quem come pequi aprende a roer a polpa com cuidado, sem morder o caroço. O que o caroço esconde por dentro?",
    "resposta": "Espinhos finos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pequi",
      "https://en.wikipedia.org/wiki/Caryocar_brasiliense"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pequi",
        "situacao": "ok",
        "texto": "Pequi (Caryocar brasiliense), também chamado de pequizeiro, piqui, pequiá, piquiá, piquiá-bravo, amêndoa-de-espinho, grão-de-cavalo, pequiá-pedra, pequerim e suari, é uma árvore da família das cariocaráceas nativa do cerrado brasileiro. Seu fruto é muito utilizado na culinária de algumas regiões do país, principalmente no norte de Minas Gerais, estado maior produtor do fruto. Do pequi, é extraído \n[…]\nSeus frutos são, também, consumidos cozidos, puros ou juntamente com arroz e frango. Seu caroço (endocarpo) é dotado de muitos espinhos (acúleos), e há necessidade de muito cuidado ao se roer o fruto, evitando-se nele cravar os dentes, o que pode causar sérios ferimentos nas gengivas e no palato. No entanto, foram observados na natureza genótipos que produzem frutos sem espinhos no endocarpo . O sabor e o aroma dos frutos são muito marcantes e peculiares.\n[…]\nSua polpa macia e saborosa deve ser comida com bastante cuidado, uma vez que a mesma recobre uma camada de finos espinhos que, se mordidos, fincam-se na língua e no céu da boca, provocando dores intensas, risco este que deixa de existir, uma vez assimilada a técnica de degustação, que é de fácil aprendizado. Deve ser comido apenas com as mãos, jamais com talheres.\n[…]\nA polpa contém quantidades moderadas de vitamina C, com valores entre 12 e 17 mg por 100 g . O pequi é rico em compostos fenólicos, especialmente na polpa, com maiores concentrações observadas em frutos com espinhos no endocarpo. Esses compostos estão associados à atividade antioxidante do fruto .\n[…]\nOs melhoramentos genéticos têm fins diversos objetivando melhorar características como cor, sabor, espessura da parte comestível, quantidade de frutos, tamanho da árvore (variedade anã), quantidade de óleo, precocidade na produção de frutos, etc. Mas um melhoramento em especial tem atraído boa parte dos pesquisadores: a possibilidade de se ter pequi sem espinhos."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Caryocar_brasiliense",
        "situacao": "ok",
        "texto": "Caryocar brasiliense, known as pequi (Portuguese pronunciation: [peˈki]) or souari nut, is an edible fruit popular in some areas of Brazil, especially in central-west Brazil.\n[…]\n\"The pequi is the main symbol of this de-structuring of the economy. The pequi is habitually consumed by the population in the Cerrado zone and is deeply rooted in the regional culture and cooking. For the Mineiros, the Cerrado inhabitants of Minas Gerais, the pequi does not belong to anyone, because it belongs to all.\n[…]\nTherefore, they maintain their ancestral right to take it wherever it is, in public or private land, fenced in land or unfenced land, etc., wherever it is, the pequi was always \"accessible\" to the regional society.\"\n[…]\nGiven the importance of bats and perhaps birds for pollination, removal of native woodland is liable to have long-term negative impacts on fruit yield even if no C. brasiliense trees are physically harmed. This is true for other native pollinators, such as Melipona quadrifasciata and Scaptotrigona postica, because they nest in pequi trees, commonly building nests in the hollows of the trees.\n[…]\nMelo, C. (2001): Diurnal bird visiting of Caryocar brasiliense Camb. in Central Brazil. Revista Brasileira de Biologia 61(2): 311–316. doi:10.1590/S0034-71082001000200014 PDF fulltext\n[…]\nOlmos, Fábio; Pacheco, José Fernando & Silveira, Luís Fábio (2006): Notas sobre aves de rapina (Cathartidae, Acciptridae e Falconidae) brasileiras [Notes on Brazilian birds of prey]. Revista Brasileira de Ornitologia 14(4): 401-404 [Portuguese with English abstract]. PDF fulltext\n[…]\nMedia related to Caryocar brasiliense at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Abará",
      "descricao": "Bolinho baiano de massa de feijão-fradinho com dendê, cozido no vapor embrulhado em folha de bananeira."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que quitute baiano usa a mesma massa de feijão-fradinho do acarajé, mas é cozido no vapor, embrulhado em folha de bananeira?",
    "resposta": "Abará",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Abar%C3%A1"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Abar%C3%A1",
        "situacao": "ok",
        "texto": "Abará é um bolinho de feijão-fradinho moído cozido em banho-maria embrulhado em folha de bananeira. É um prato típico da culinária africana e da cozinha baiana. Também faz parte da rituais do candomblé. É feito com a mesma massa que o acarajé; a única diferença é que o abará é cozido e leva temperos e azeite de dendê em sua massa, enquanto o acarajé é frito.\n[…]\n\"Abará\" é oriundo do termo iorubá aba'ra.\n[…]\nO preparo da massa é feito com feijão-fradinho, que deve ser quebrado em um moinho em pedaços grandes e colocado de molho na água para soltar a casca. Após retirada toda a casca, passa-se novamente no moinho e, desta vez, deverá ficar uma massa bem fina. A essa massa, acrescentam-se cebola ralada, sal, camarão seco e azeite de dendê.\n[…]\nQuando for comida de ritual, coloca-se um pouco de pó de camarão e, na culinária baiana, coloca-se camarões secos, previamente escaldados para extrair o sal. Os camarões secos podem ser moídos junto com o feijão, preservando-se alguns deles inteiros.\n[…]\nEsta massa deve ser envolvida em pequenos pedaços de folha de bananeira, análogamente ao processo usado para se fazer o acaçá, e deve ser cozido no vapor em banho-maria."
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
