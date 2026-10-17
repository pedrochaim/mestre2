Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Jogos Eletrônicos** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Ninetales",
      "descricao": "Pokémon raposa do tipo Fogo da primeira geração, de nove caudas, evolução de Vulpix."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Com nove caudas e fama de viver mil anos, Ninetales lembra qual raposa mágica do folclore japonês?",
    "resposta": "Kitsune",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ninetales_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Kitsune"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ninetales_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kitsune",
        "situacao": "ok",
        "texto": "The kitsune (狐, きつね; IPA: [kʲi̥t͡sɨne̞] ), in popular Japanese folklore, is a fox or fox spirit which possesses the supernatural ability to shapeshift or bewitch other life forms.\n[…]\nKitsune, though literally a 'fox', becomes in folklore a 'fox spirit', and a type of yōkai. They are ascribed intelligence and magical or supernatural powers, especially with long-living foxes.\n[…]\nTales distinguish kitsune gifts from kitsune payments. If a kitsune offers a payment or reward that includes money or material wealth, part or all of the sum will consist of old paper, leaves, twigs, stones, or similar valueless items under a magical illusion. True kitsune gifts are usually intangibles, such as protection, knowledge, or long life.\n[…]\nAs aforementioned, the fox wife in the Nihon ryōiki tale gave rise to the ancestral line of the Kitsune-no-atae clan, and a woman of great strength named \"Mino kitsune\" belonged to that heritage.\n[…]\nIt is held that the fox jewel is necessary for the fox to change shape, or use its magical power. Another tradition is that the pearl represents the kitsune's soul; the kitsune will die if separated from it for too long.\n[…]\nIn the popular manga and anime series Naruto, the protagonist Naruto Uzumaki has a nine-tailed fox, also called kyubi or Kurama, sealed inside him, which he uses in combat. Beginning in Super Mario 3D Land (2011), the playable character Luigi can collect a power-up known as the Super Leaf to transform into Kitsune Luigi.\n[…]\nJapanese metal idol band Babymetal refer to the kitsune myth in their lyrics and include the use of fox masks, hand signs, and animation interludes during live shows.\n[…]\nMedia related to Kitsune at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kitsune",
        "situacao": "ok",
        "texto": "Kitsune (AFI: [kitsɯne]) japonês: 狐;  é a palavra japonesa para raposa. Raposas são um tema recorrente no folclore japonês; kitsune refere-se geralmente a isso neste contexto. As histórias as descrevem como seres inteligentes e dotados de capacidades mágicas que aumentam com a sua idade e sabedoria. Entre esses poderes mágicos, destaca-se a habilidade de assumir a forma humana — geralmente a de um\n[…]\nKitsune é uma palavra arcaica; no japonês moderno, o som emitido por uma raposa é transcrito como kon kon ou gon gon.\n[…]\nFisicamente, as kitsune são reconhecidas por possuírem nove caudas. Em geral, um maior número de caudas indica uma raposa mais velha e mais poderosa; segundo os folclores, uma nova cauda crescerá a cada 100 anos de vida. Um, cinco, sete e nove caudas são os números mais comuns nas histórias. Quando uma kitsune recebe sua nona cauda, sua pelagem torna-se prateada ou dourada.\n[…]\nEssas Kyūbi no Kitsune (九尾の狐; raposas de nove caudas) ganham a capacidade de ver e ouvir qualquer coisa em qualquer parte do mundo, adquirindo também sabedoria infinita (onisciência).\n[…]\nKitsunetsuki (em japonês: 狐憑き, 狐付き?), também escrito kitsune-tsuki, significa, literalmente, \"o estado de ser possuído por uma raposa\". A vítima geralmente é uma jovem mulher, em quem a raposa adentra por meio de seus seios. Em alguns casos, o rosto da vítima pode se transformar de tal modo que se assemelhe ao de uma raposa. Embora as raposas no folclore possuam suas vítimas por livre e espontânea vontade, também podem fazê-lo em decorrência de encantamentos lançados contra a vítima.\n[…]\nEm Tales of Symphonia, Corine, o espírito que deveria ter sido criado pelo homem que acompanha Sheena Fujibayashi, tem aparência de raposa com três caudas. Após sua morte causada pelo espírito do relâmpago, Volt, Corine torna-se Vérius, o espírito do coração, com aparência de uma kitsune adulta de nove caudas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Meowth",
      "descricao": "Pokémon gato do tipo Normal da primeira geração, com uma moeda dourada na testa."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A moeda dourada na testa de Meowth remete a qual estatueta japonesa de gato, colocada nas lojas para atrair dinheiro?",
    "resposta": "Maneki-neko",
    "fonte": [
      "https://en.wikipedia.org/wiki/Meowth",
      "https://en.wikipedia.org/wiki/Maneki-neko"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Meowth",
        "situacao": "ok",
        "texto": "Meowth (, mee-OW-th), known in Japanese as Nyarth (Japanese: ニャース), is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise, and the first stage of its evolved form, Persian. First introduced in the video games Pokémon Red and Blue, it has received multiple new forms, including regional variants called Alolan Meowth and Galarian Meowth in Pokémon Sun and Moon and Pokémon Sword an\n[…]\nIt has appeared in multiple games including Pokémon Go and the Pokémon Trading Card Game, as well as various merchandise. Meowth has multiple voice actors, including by Inuko Inuyama, Matthew Sussman, Maddie Blaustein, and James Carter Cathcart. The original Meowth is based on the Maneki-neko, being bipedal with white fur and a gold koban coin on its forehead. Meanwhile, Alolan Meowth has blueish grey fur, while Galarian Meowth has greyish-brown fur and a bushy beard.\n[…]\nMeowth is a Normal-type Pokémon which can evolve into Persian via training. Its Japanese name, Nyarth, comes from a Japanese proverb about a cat unknowingly having money on its head, which is meant to impart the importance of money. Series creator Satoshi Tajiri stated that there was no similar concept to this in the United States, and thus its name was changed to Meowth.\n[…]\nMeowth is a sand-colored bipedal cat with a gold koban coin on its head. It is based on the Japanese good luck charm maneki-neko. The Alolan form of Meowth has a similar design, except it has bigger ears, blue/grey fur, and a more relaxed disposition. Its disposition came from being a favorite Pokémon of royalty before becoming a wild Pokémon after the destruction of the royalty. The Galarian form of Meowth, meanwhile, has grey iron fur, a beard, and sharp teeth.\n[…]\nMeowth has also been made into several different toys, including figures and plush toys.\n[…]\nMeowth on Pokemon.com\n[…]\nMeowth  at Bulbapedia, a Pokémon wiki"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maneki-neko",
        "situacao": "ok",
        "texto": "The maneki-neko (招き猫, lit. 'beckoning cat') is a common Japanese figurine which is often believed to bring good luck to the owner. In modern times, they are usually made of ceramic or plastic. The figurine depicts a cat, traditionally a calico Japanese Bobtail, with a paw raised in a beckoning gesture.\n[…]\nIn honour of the cat that brought prosperity to the temple, maneki-neko was created in later generations.\n[…]\nBecause of its popularity in Chinese communities (including Chinatowns in the United States), the maneki-neko is frequently mistaken for being Chinese in origin rather than Japanese, and is therefore sometimes referred to as a \"Chinese lucky cat\" or jīnmāo (\"golden cat\"). This cat is also prevalent in China domestically, and is usually referred to as simplified Chinese: 招财猫; traditional Chinese: 招財貓; pinyin: zhāocáimāo; Jyutping: ziu1 coi4 maau1.\n[…]\nHikone City's mascot, Hikonyan, a famous mascot in Japan, was created based on the folklore of Ii Naotaka and the maneki-neko of Gōtoku-ji Temple. Hikone City is home to Hikone Castle, a National Treasure that was the base of the Ii clan for generations.\n[…]\nFor the 2015 Trinidad and Tobago general election, won by the then opposition People's National Movement (PNM), a maneki-neko was utilized by the PNM in its campaign advertising days before election day, featuring a maneki-neko waving goodbye to then Prime Minister Kamla Persad-Bissessar alongside headlines of scandals linked to her People's Partnership administration taken from the front page of local newspapers.\n[…]\nThe maneki-neko has appeared or been used as an inspiration in Japanese and international media, such as the Pokémon Meowth, Dandadan character Turbo Granny, and as a Joker in the roguelike deck-building game Balatro.\n[…]\nMeowth\n[…]\nMedia related to Maneki neko at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Drowzee",
      "descricao": "Pokémon do tipo Psíquico da primeira geração, que se alimenta de sonhos e evolui para Hypno."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Drowzee, que come os sonhos de quem dorme, se baseia em qual criatura do folclore japonês, de focinho de anta, que devora pesadelos?",
    "resposta": "Baku",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Drowzee_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Drowzee_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA primeira geração (Geração I) da franquia Pokémon apresentou 151 criaturas fictícias introduzidas em 1996 no jogo de Game Boy, Pocket Monsters Red, Green e Blue (conhecidos como Pokémon Red, Green e Blue fora do Japão). Posteriormente, Pokémon Yellow e Blue foram lançados no Japão.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.\n[…]\nA maioria dos Pokémon desta geração tinha designs relativamente simples e eram altamente análogos às criaturas da vida real, incluindo, entre outros: Pidgey (um pombo), Krabby (um caranguejo), Rattata (um rato), Ekans (uma cobra), e Seel (uma foca). Muitos Pokémon nos jogos originais serviram como base para repetir conceitos mais adiante na série. Alguns Pokémon, como Squirtle, Bulbasaur e Charmander, foram projetados com base em suas evoluções finais, trabalhando-se de trás para frente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Oddish",
      "descricao": "Pokémon dos tipos Planta e Venenoso da primeira geração, uma raiz azul com folhas que evolui para Gloom."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Oddish passa o dia enterrado e anda à noite. Sua forma de raiz com folhas lembra qual planta lendária, que grita quando arrancada do chão?",
    "resposta": "Mandrágora",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Oddish_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Mandrake"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Oddish_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mandrake",
        "situacao": "ok",
        "texto": "A mandrake is one of several toxic plant species with \"man-shaped\" roots and some uses in folk remedies. The roots by themselves may also be referred to as \"mandrakes\". The term primarily refers to nightshades of the genus Mandragora (in the family Solanaceae) found in the Mediterranean region.\n[…]\nTheophrastus (d. c. 287 BC), in Historia Plantarum, wrote that the mandragora needed to be harvested by following a prescribed ritual, namely, \"draw three circles around [the root] with a sword, and cut it facing west\"; Then in order to obtain a second piece, the harvester must dance around it while speaking as much lewd talk about sex as he possibly can. The ritual given in Pliny probably relies on Theophrastus.\n[…]\nRomani people use mandrake as a love-amulet.\n[…]\nIn France, there is also the tradition that the man-de-gloire (mandrake) is harvested from under a gibbet.\n[…]\nOthers, who regarded humanity as the synthesis of animals, despaired about vitalising the mandragore, but they crossed monstrous pairs and projected human seed into animal earth, only for the production of shameful crimes and barren deformities.\n[…]\nThe following is taken from Jean-Baptiste Pitois's The History and Practice of Magic (1870), and explains a ritual for creating a mandrake:\n[…]\nWould you like to make a Mandragora, as powerful as the homunculus (little man in a bottle) so praised by Paracelsus? Then find a root of the plant called bryony. Take it out of the ground on a Monday (the day of the moon), a little time after the vernal equinox. Cut off the ends of the root and bury it at night in some country churchyard in a dead man's grave. For 30 days, water it with cow's milk in which three bats have been drowned.\n[…]\nChisholm, Hugh, ed. (1911). \"Mandrake\" . Encyclopædia Britannica (11th ed.). Cambridge University Press."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Vileplume",
      "descricao": "Pokémon dos tipos Planta e Venenoso da primeira geração, de pétalas enormes, evolução de Gloom."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Japão, Vileplume tem o nome da flor gigante e malcheirosa que inspirou suas pétalas enormes. Que flor é essa?",
    "resposta": "Rafflésia",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Vileplume_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Rafflesia"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Vileplume_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rafflesia",
        "situacao": "ok",
        "texto": "Rafflesia (), or stinking corpse lily, is a genus of parasitic flowering plants in the family Rafflesiaceae. The species have enormous flowers, the buds rising from the ground or directly from the lower stems of their host plants; one species has the largest flower in the world. Plants of the World Online lists up to 41 species from this genus; all of them are found in Southeast Asia.\n[…]\nRafflesia can be found along the area of Peninsular Malaysia and Thailand in the Malay Peninsula.\n[…]\nIn Thailand, Rafflesia can be observed in Khao Sok National Park where the flowers are numbered and monitored by the park rangers.\n[…]\nOf the 57 known species of Tetrastigma, only ten are known to be host plants. Of the 30 odd species of Rafflesia, the host plants are only known from about half of the species. A certain species of Tetrastigma is very popular among Rafflesia: T. tuberculatum is a host plant for at least 15 species, and only two Philippine species are not known to infect it. T. papillosum and T. diepenhorstii both host at least two species. The flowers may bud from different locations; R.\n[…]\nIn Rafflesia arnoldii, the flowers are visited by the flies Drosophila colorata, Chrysomya megacephala and Sarcophaga haemorrhoidalis. Black ants of the genus Euprenolepis may feed on the developing flower buds, perhaps killing them. Mammals which are known to eat the flowers are the Javan treeshrew Tupaia javanica and the porcupine Hystrix javanica.\n[…]\nSofiyanti, Nery; Yen, Choong (December 2012). \"Morphology of Ovule, Seed, and Pollen Grain of Rafflesia R. Br. (Rafflesiaceae)\". Bangladesh Journal of Plant Taxonomy. 19 (2): 109–117. Bibcode:2012BJPT...19..109S. doi:10.3329/bjpt.v19i2.13124.\n[…]\nMedia related to Rafflesia at Wikimedia Commons\n[…]\nRafflesia flower and threats\n[…]\nParasitic Plant Connection: Rafflesia Gallery\n[…]\nARKive: images and movies of the rafflesia (Rafflesia spp)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rafl%C3%A9sia",
        "situacao": "ok",
        "texto": "Raflésia é o nome comum dado às plantas parasitas do género Rafflesia, da família das rafflesiáceas, que ocorrem nas selvas do Bornéu, Sumatra, Kalimantan e outras regiões da Indonésia, e ainda na Malásia, Tailândia e Filipinas. O género Rafflesia foi descrito pela primeira vez em 1819 por Robert Brown e contém de 15 a 19 espécies, incluindo quatro espécies cuja taxinomia é mal conhecida e algumas\n[…]\nAs raflésias são compostas quase totalmente pela sua flor, considerada a maior do mundo, já que não têm folhas e o seu caule está reduzido a um curto segmento não ramificado, uma simples cúpula basal, que suporta directamente a flor. A flor é gigantesca, podendo esse órgão medir numa planta adulta entre 60 cm (Rafflesia hasselti) e 106 cm (Rafflesia arnoldii) de diâmetro, pesando entre 7 kg e 10 kg.\n[…]\nA maior rafflésia (Rafflesia tuan-mudae) do Mundo foi atualmente descoberta na ilha de Sumatra, Indonésia, e tem um diâmetro de 111 cm. Mesmo a espécie que produz a flor mais pequena do género, a R. manillana, produz flores com mais de 20 cm de diâmetro. As flores têm formato circular, com cinco pétalas. A cor das pétalas varia do rosado ao vermelho vivo, salpicada de manchas brancas.\n[…]\nRafflesia arnoldii\n[…]\nRafflesia aurantia\n[…]\nRafflesia azlanii\n[…]\nRafflesia baletei\n[…]\nRafflesia banaoana\n[…]\nRafflesia bengkuluensis\n[…]\nRafflesia cantleyi\n[…]\nRafflesia gadutensis\n[…]\nRafflesia hasseltii\n[…]\nRafflesia keithii\n[…]\nRafflesia kerrii\n[…]\nRafflesia leonardi\n[…]\nRafflesia lobata\n[…]\nRafflesia manillana\n[…]\nRafflesia micropylora\n[…]\nRafflesia mira\n[…]\nRafflesia patma\n[…]\nRafflesia philippensis\n[…]\nRafflesia pricei\n[…]\nRafflesia rochussenii\n[…]\nRafflesia schadenbergiana\n[…]\nRafflesia speciosa\n[…]\nRafflesia tengku-adlinii\n[…]\nRafflesia tuan-mudae\n[…]\nRafflesia borneensis\n[…]\nRafflesia ciliata\n[…]\nRafflesia titan\n[…]\nRafflesia witkampii\n[…]\nVileplume - Um Pokémon com aparência baseada na flor da raflésia.\n[…]\nImagens de plantas do género Rafflesia\n[…]\nPlantas parasitas: Rafflesia\n[…]\nPágina dedicada ao género Rafflesia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Poliwag",
      "descricao": "Pokémon girino do tipo Água da primeira geração, com uma espiral na barriga, que evolui para Poliwhirl."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A espiral na barriga de Poliwag imita algo que se vê através da pele transparente de alguns girinos de verdade. O que é?",
    "resposta": "O intestino",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Poliwag_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Poliwag_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nEmbora alguns Pokémon tenham sido atribuídos a certos desenvolvedores ao longo dos anos, como Atsuko Nishida para Pikachu e Motofumi Fujiwara para Eevee e suas evoluções, a Game Freak evitou atribuir muitos Pokémon a indivíduos específicos para manter a sensação de que todos os desenvolvedores estiveram envolvidos em sua criação.\n[…]\nA maioria dos Pokémon desta geração tinha designs relativamente simples e eram altamente análogos às criaturas da vida real, incluindo, entre outros: Pidgey (um pombo), Krabby (um caranguejo), Rattata (um rato), Ekans (uma cobra), e Seel (uma foca). Muitos Pokémon nos jogos originais serviram como base para repetir conceitos mais adiante na série. Alguns Pokémon, como Squirtle, Bulbasaur e Charmander, foram projetados com base em suas evoluções finais, trabalhando-se de trás para frente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Kabuto",
      "descricao": "Pokémon fóssil dos tipos Pedra e Água da primeira geração, revivido a partir do Fóssil Domo, que evolui para Kabutops."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Kabuto quer dizer capacete em japonês. O fóssil de Kanto com esse nome se inspira em qual animal marinho, um fóssil vivo de carapaça arredondada?",
    "resposta": "Límulo (caranguejo-ferradura)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kabuto_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Horseshoe_crab"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kabuto_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Horseshoe_crab",
        "situacao": "ok",
        "texto": "Horseshoe crabs are arthropods of the family Limulidae and the only surviving xiphosurans. Despite their name, they are not crabs or even crustaceans; they are chelicerates, more closely related to arachnids like spiders, ticks, and scorpions. The body of a horseshoe crab is divided into three main parts: the cephalothorax, abdomen, and telson. The largest of these, the cephalothorax, houses most \n[…]\nIt is also where the animal gets its name, as its shape somewhat resembles that of a horseshoe. Horseshoe crabs have been described as \"living fossils\", having changed little since they first appeared in the Triassic around 250 million years ago, and similar-looking fossil xiphosurans extend back to the Ordovician around 445 million years ago.\n[…]\nHorseshoe crabs are chelicerates, meaning their bodies are composed of two main parts (tagmata): the cephalothorax and the opisthosoma. The first tagma, the cephalothorax or prosoma, is a fusion of the head and thorax. This tagma is also covered by a large, semicircular carapace that acts as a shield around the animal's body. It is shaped like the hoof of a horse, giving this animal its common name.\n[…]\nHorseshoe crabs have a variety of ways to right or flip themselves over. The most common method involves the animal arching its opisthosoma towards the carapace and balancing its telson on the substrate. The animal then moves the telson while beating its legs and gills. This causes the animal to tilt and eventually flip over. Furthermore, horseshoe crabs can right themselves while swimming.\n[…]\nAs the larvae molt into juveniles, their telson gets longer and they gain their missing book gills. Juveniles can attain a carapace width of around 4 cm (1+1⁄2 in) in their first year. For each molt, the juvenile will grow about 33% larger. This process continues until the animal reaches its adult size."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Limul%C3%ADdeos",
        "situacao": "ok",
        "texto": "Limulídeos (Limulidae) são uma família de artrópodes da ordem Xiphosura, classe Merostomata, que inclui quatro espécies de caranguejos-ferradura, entre as quais Limulus polyphemus.\n[…]\nA família Limulidae inclui animais semelhantes a caranguejos, conhecidos pelo nome comum de \"caranguejos-ferradura\" por apresentarem carapaças cujo contorno se assemelha à ferradura de um cavalo e que recobrem todo o corpo, exceto a cauda.\n[…]\nAs espécies extantes apresentam coloração castanho-acinzentada e podem atingir os 60 cm de comprimento. O abdómen é unido ao cefalotórax e apresenta sobre o lado inferior brânquias em forma de folha. O télson, em forma de espinho, estende-se para trás e é utilizada pelo animal para se posicionar, incluindo quando fica assente sobre a face dorsal.\n[…]\nOs límulos assemelham-se às espécies do género Triops, que são igualmente consideradas formas pancrónicas datando de mais de 200 milhões de anos atrás, porém menores e habitando águas doces.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Farfetch'd",
      "descricao": "Pokémon pato dos tipos Normal e Voador da primeira geração, que carrega sempre um talo de planta."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Por causa de um ditado japonês sobre o pato que chega trazendo o próprio tempero, Farfetch'd sempre carrega um talo de qual planta?",
    "resposta": "Alho-poró (negi)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Farfetch%27d_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Farfetch%27d_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Tyranitar",
      "descricao": "Pokémon dos tipos Pedra e Sombrio da segunda geração, um monstro verde de costas espinhosas, evolução final de Larvitar."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Que pokémon de pedra verde, de costas espinhosas e cauda grossa, foi inspirado nos monstros gigantes do cinema japonês, como Godzilla?",
    "resposta": "Tyranitar",
    "distratores": [
      "Aggron",
      "Rhydon",
      "Nidoking"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Tyranitar_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Tyranitar_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The second generation (generation II) of the Pokémon franchise features 100 fictional species of creatures introduced to the core video game series in the Game Boy Color games Pokémon Gold and Silver. The generation was unveiled at the beginning of the Nintendo Space World '97 event. Gold and Silver were first released on November 21, 1999, in Japan.\n[…]\nUnlike the prior generation, however, the second generation more clearly defined what a Pokémon species design would look like, with many in the second generation having their designs rooted in some form of real-world origin, such as in the form of plants, animals, and mythological inspirations. Designs for the generation took a more \"rural\" approach, in contrast to the prior generation, where Pokémon such as Porygon and Muk illustrated more \"urban\" influences.\n[…]\nThe water starter was initially filled by the Kurusu (Cruz in English), a seal-like Pokémon that bears a resemblance to the seventh generation starter Popplio. Kurusu eventually evolves into Akua (Aqua in English) and Akueria (Aquaria in English).\n[…]\nCian Maher, writing for TheGamer, considered the generation's Pokédex to have the strongest selection of Pokémon, noting its particularly memorable designs. In a later article co-written with Dave Aubrey for USA Today, he elaborated on the opinion, stating Pokémon such as Tyranitar, Heracross, Scizor, Houndoom and Typhlosion were why the second generation had the best line-up of Pokémon out of any given Pokémon generation.\n[…]\nIn a 2016 poll held by The Pokémon Company, Umbreon, Tyranitar, and Lugia were voted to be among the top thirty most popular Pokémon among voters. A later poll determined the three aforementioned Pokémon, alongside Typhlosion, Scizor, and Ampharos, to be among the six most popular Pokémon of the generation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_II",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para o Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar Pokémon e usar suas habilidades especiais para combater outros Pokémon.\n[…]\nAo contrário da geração anterior, a segunda geração definiu mais claramente a aparência do design de uma espécie Pokémon, com muitos Pokémon da segunda geração tendo seus designs enraizados em alguma forma de origem do mundo real, como plantas, animais e inspirações mitológicas. Os designs da geração adotaram uma abordagem mais \"rural\", em contraste com a geração anterior, onde Pokémon como Porygon e Muk ilustravam influências mais \"urbanas\".\n[…]\nMuitos designs totalmente únicos, sem associação com outras espécies, também foram descobertos, como uma foca flamejante, uma boneca empalada com um prego que evolui para um ser semelhante a um panda, uma linha evolutiva de gato do tipo Noturno e um Pokémon concha (chamado Taaban) que apresenta semelhanças com conchas na cauda e na cabeça das espécies de Pokémon Slowbro e Slowking, respectivamente.\n[…]\nDevido ao seu design fofo, muitos fãs de Pokémon ficaram desapontados com o descarte da linha evolutiva de Kotora e esperavam seu retorno em um futuro jogo Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Xatu",
      "descricao": "Pokémon ave dos tipos Psíquico e Voador da segunda geração, evolução de Natu, que fica parado olhando o sol."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Natu e sua evolução, Xatu, aves psíquicas de Johto de desenho colorido e geométrico, lembram quais esculturas de madeira dos povos nativos norte-americanos?",
    "resposta": "Totens",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Xatu_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Totem_pole"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Xatu_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Totem_pole",
        "situacao": "ok",
        "texto": "Totem poles (Haida: gyáaʼaang) are monumental carvings found in western Canada and the northwestern United States. They are a type of Indigenous Northwest Coast art, consisting of poles, posts or pillars, carved with symbols or figures.\n[…]\nAlthough the remains of the original pole at Golden Hill no longer exist, a replica was raised on April 13, 1996, on the front lawn of The Eiteljorg Museum of American Indians and Western Art in Indianapolis. Approximately two years later, the replica was moved inside the museum, and in 2005, it was installed in a new atrium after completion of a museum expansion project.\n[…]\nThe title of \"The World's Tallest Totem Pole\" is or has at one time been claimed by several coastal towns of North America's Pacific Northwest. Disputes over which is genuinely the tallest depends on factors such the number of logs used in construction or the affiliation of the carver. Competitions to make the tallest pole remain prevalent, although it is becoming more difficult to procure trees of sufficient height. The tallest poles include those in:\n[…]\nAmerican Museum of Natural History, New York City, New York\n[…]\nFeldman, Richard D. (2012). Home Before the Raven Caws: The Mystery of a Totem Pole (Rev. 2012 ed.). Indianapolis: Indiana Historical Society in association with The Eiteljorg Museum of American Indians and Western Art. ISBN 978-0-87195-306-3.\n[…]\nJonaitis,  Aldona. (1990) \"Totem Poles And The Indian New Deal,\" European Contributions to American Studies  Vol. 18, pp 267–277.\n[…]\nReed, Ishmael (ed.) (2003) From Totems to Hip-Hop: A Multicultural Anthology of Poetry across the Americas, 1900-2002. ISBN 1-56025-458-0."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Poste_tot%C3%AAmico",
        "situacao": "ok",
        "texto": "Os postes totêmicos (Haida: gyáaʼaang) são esculturas monumentais encontradas no oeste do Canadá e no noroeste dos Estados Unidos. Eles são um tipo de arte da costa noroeste, consistindo em postes, colunas ou pilares esculpidos com símbolos ou figuras.\n[…]\nEddie Malin propôs que os totens passaram de postes de casas, recipientes funerários e marcadores de memória a símbolos de riqueza e prestígio de clãs e famílias. Ele argumenta que o povo Haida das ilhas de Haida Gwaii originou a escultura dos postes e que a prática se espalhou para os Tsimshian e Tlingit e, depois, pela costa até os povos indígenas da Colúmbia Britânica e do norte de Washington.\n[…]\nNo século XIX, o comércio e a colonização americana e europeia levaram inicialmente ao crescimento da escultura de totens, mas as políticas e práticas de aculturação e assimilação dos Estados Unidos e do Canadá causaram um declínio no desenvolvimento das culturas dos nativos do Alasca e das Primeiras Nações e de seus artesanatos, reduzindo drasticamente a produção de totens no final do século.\n[…]\nQuase toda a fabricação de totens havia cessado em 1901. A escultura de postes monumentais e mortuários continuou em algumas aldeias mais remotas até 1905; no entanto, como os locais originais foram abandonados, os postes e as casas de madeira foram deixados à deterioração e ao vandalismo.\n[…]\nOs significados dos desenhos nos totens são tão variados quanto as culturas que os criam. Alguns postes celebram crenças culturais que podem relatar lendas familiares, linhagens de clãs ou eventos notáveis, enquanto outros são principalmente artísticos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Dunsparce",
      "descricao": "Pokémon serpente do tipo Normal da segunda geração, de corpo gordo e asas minúsculas."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Que pokémon de Johto, de corpo gordo de serpente e asinhas minúsculas, foi inspirado na tsuchinoko, uma cobra lendária do Japão?",
    "resposta": "Dunsparce",
    "distratores": [
      "Seviper",
      "Dratini",
      "Ekans"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Dunsparce_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Tsuchinoko"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Dunsparce_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tsuchinoko",
        "situacao": "ok",
        "texto": "In Japanese folklore, the tsuchinoko (ツチノコ or 槌の子), literally translating to \"child of hammer\", is a snake-like cryptid. The name tsuchinoko is prevalent in Western Japan, including Kansai and Shikoku; the creature is known as bachi hebi (バチヘビ) in Northeastern Japan.\n[…]\nIn the late 1980s, the tsuchinoko stopped being a yokai and transitioned into a cryptid as a wave of purported sightings of the tsuchinoko was reported across Japan, primarily in the village of Shimokitayama in Nara Prefecture. In 1988, Kazuo Nozaki, a member of Shimokitayama's village council, launched a \"Tsuchinoko Expedition\" to find the creature, which offered 1 million yen ($7,800 at the time) for its live capture and 300,000 yen for a sample of its skin.\n[…]\nThe expedition was joined by around 200 people from across the country and lasted until the beginning of the Japanese asset price bubble collapse in 1990. No evidence of its existence was uncovered. To commemorate the event, the Shimokitayama Tsuchinoko Park was established in 2023.\n[…]\nIn a mountain close to Lake Towada, a sighting of a 30-centimetre (1 ft) creature of a similar shape to the Tsuchinoko was reported. On 4 April 2007, a Tsuchinoko-shaped dead body of a snake was allegedly discovered inside imported hay on a farm located in Ōkura, although it reportedly went missing.\n[…]\nThis is a list of municipalities and companies offering rewards for capturing Tsuchinoko, including those who ended the bounties.\n[…]\nA model of the tsuchinoko by Hajime Emoto (English introduction)"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Ho-Oh",
      "descricao": "Pokémon lendário dos tipos Fogo e Voador da segunda geração, mascote de Pokémon Gold."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do lendário Ho-Oh vem de hōō, a forma japonesa de qual ave mitológica da China?",
    "resposta": "Fenghuang (fênix chinesa)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Fenghuang"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fenghuang",
        "situacao": "ok",
        "texto": "Fenghuang ( fung-HWAHNG) are mythological birds featuring in traditions throughout the Sinosphere. Fenghuang are understood to reign over all other birds: males and females were originally termed feng and huang respectively, but a gender distinction is typically no longer made, and fenghuang are generally considered a feminine entity to be paired with the traditionally masculine Chinese dragon.\n[…]\nThe earliest known form of a dragon-fenghuang design, on the other hand, dates back to the Yangshao culture (c. 5000 – c. 3000 BC) and was found at an archeological site near Xi'an in Shaanxi Province. The ancient usage of fenghuang and dragon designs are all evidence of an ancient form of totemism in China.\n[…]\nIn ancient and modern Chinese culture, fenghuang can often be found in the decorations for weddings or royalty, along with dragons. This is because the Chinese considered the dragon-and-fenghuang design symbolic of blissful relations between husband and wife, another common yang and yin metaphor. In some traditions, it appears in good times but hides during times of trouble, while in other traditions it appeared only to mark the beginning of a new era.\n[…]\nFèng or Fènghuáng is a common element in given names of Chinese women (likewise, \"Dragon\" is used for men's names).\n[…]\n\"Dragon-and-fenghuang infants\" (龍鳳胎; 龙凤胎) is a Chinese term for a set of male and female fraternal twins.\n[…]\nFenghuang is a common place name throughout China. The best known is Fenghuang County in western Hunan, southern China, formerly a sub-prefecture. Its name is written with the same Chinese characters as the mythological bird.\n[…]\nThe Vermilion Bird, (Suzaku in Japanese) one of the Four Symbols of Chinese myth, sometimes equated with the fenghuang.\n[…]\nBirds in Chinese mythology\n[…]\nZhuque - Chinese mythical bird, often mistaken for Fenghuang\n[…]\nFour Holy Beasts – Four sacred animals in Chinese mythology"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fenghuang",
        "situacao": "ok",
        "texto": "Fenghuang (chinês: 鳳凰; pinyin: fènghuáng, chinês: 凤凰) são pássaros chineses mitológicos que reinam sobre todos os outros pássaros. Os machos são chamados de Feng e as fêmeas de Huang; Em tempos modernos, entretanto, tal distinção de gênero não é feita mais e Feng e Huang são unidos em uma entidade feminina única para que o pássaro possa ser comparado com o dragão chinês, que tem conotações masculi\n[…]\nO Fenghuang também é chamado de \" Galo de Agosto\" (chinês tradicional: 鶤雞; pinyin: o kūnjī) já que ele às vezes toma o lugar do Galo no zodíaco chinês. No mundo ocidental, é comumente tratado como a fênix chinesa.\n[…]\nSão conhecidos em japonês como hoo.\n[…]\nO Fenghuang parece não ter nenhuma conexão com a fênix do mundo ocidental, que deriva da mitologia egípcia. Peculiarmente, a fênix  \"ocidental\" (de fato: do egípcio antigo) também pode ser parte de uma referência a um pássaro pré-histórico, a garça benu.\n[…]\nNa China antiga, elas muitas vezes podem ser encontradas nas decorações de casamentos ou realeza, junto com dragões. Isto é porque os chineses consideravam o dragão e a fênix um símbolo de relações felizes entre marido e esposa, outro yin comum e metáfora yang.\n[…]\n\"Garra de Fèng\" (鳳爪) é um prato chinês de pés de frango cozidos em um molho de feijão preto.\n[…]\n\"Fènghuáng\" é um elemento comum nos nomes de meninas chinesas (de mesmo modo, \"dragão\" para nomes de meninos).\n[…]\nA Fenghuang é também um condado na província Hunan ocidental da China, outrora uma subprefeitura. Seu nome é escrito com os mesmos caracteres chineses que o pássaro mitológico.\n[…]\nO Pássaro Cinabrino do Sul, um dos quatro símbolos (Ssu Ling) do mito chinês, é às vezes confundido pelo Fenghuang, quando na verdade, eles são duas entidades separadas.\n[…]\nDragão chinês\n[…]\nMitologia chinesa\n[…]\nFênix\n[…]\nByōdō-in (\"Salão da Fênix\" em Uji,Japão)\n[…]\nPrograma fênix",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Hitmontop",
      "descricao": "Pokémon do tipo Lutador da segunda geração, evolução de Tyrogue, que luta girando de cabeça para baixo."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Que pokémon lutador de Johto, evolução de Tyrogue, luta girando de cabeça para baixo, como num passo de breakdance?",
    "resposta": "Hitmontop",
    "distratores": [
      "Hitmonlee",
      "Hitmonchan",
      "Machop"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Hitmontop_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Hitmontop_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The second generation (generation II) of the Pokémon franchise features 100 fictional species of creatures introduced to the core video game series in the Game Boy Color games Pokémon Gold and Silver. The generation was unveiled at the beginning of the Nintendo Space World '97 event. Gold and Silver were first released on November 21, 1999, in Japan.\n[…]\nThe games are set in the Johto region, which is based on the real-world Kansai region of Japan. Due to the games acting as a sequel to the first generation of the franchise, the Pokémon designs of the second generation share a strong association with those from the first. Some Pokémon in this generation were introduced in animated adaptations of the franchise before Gold and Silver were released.\n[…]\nThe second generation of Pokémon is set primarily in the region of Johto, which is based on the real-world region of Kansai in Japan. The second generation of Pokémon, unlike other subsequent generations in the series, was primarily designed as a \"sequel\" to the prior generation, which was focused around the games Pokémon Red and Blue. This resulted in many second-generation species being related to earlier ones, or reviving designs scrapped from Red and Blue.\n[…]\nDue to its cute design, many Pokémon fans were disappointed about the Kotora line being scrapped and hoped for its return in a future Pokémon game.\n[…]\nKayleigh Partleton, in an article for Pocket Tactics, found several of the designs from the generation, including Furret, Scizor, Wobbuffet, Miltank, Snubbull, Entei, and Togepi, as highly favorable and well-crafted. Hayes Madsen, in a retrospective for Pokémon Gold and Silver, regarded the games' designs as among the most creative, citing Smeargle, Hitmontop, Wooper, and Unown as examples of designs that did not feel \"formulaic\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_II",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns dos novos Pokémon introduzidos em Gold e Silver são pré-evoluções de Pokémon da primeira geração, como Pichu e Igglybuff. Chamados de \"Baby Pokémon\", eles geralmente só podem ser obtidos através do cruzamento de suas formas evoluídas. A geração também introduziu uma nova variação de Pokémon chamada Shiny Pokémon, que são versões raras de Pokémon com paletas de cores alternativas em relação à versão padrão da espécie.\n[…]\nEsses designs incluíam pré-evoluções descartadas para Pokémon da primeira geração, como Paras, Meowth e Doduo, e evoluções descartadas para Farfetch'd, Qwilfish, Pinsir, Weepinbell e Ditto. Acredita-se que alguns designs descartados foram posteriormente reutilizados em jogos futuros, como Tangrowth, Sharpedo, Leafeon e Lickilicky; no entanto, isso não foi oficialmente confirmado.\n[…]\nMuitos designs totalmente únicos, sem associação com outras espécies, também foram descobertos, como uma foca flamejante, uma boneca empalada com um prego que evolui para um ser semelhante a um panda, uma linha evolutiva de gato do tipo Noturno e um Pokémon concha (chamado Taaban) que apresenta semelhanças com conchas na cauda e na cabeça das espécies de Pokémon Slowbro e Slowking, respectivamente.\n[…]\nO inicial de Água era inicialmente Kurusu (Cruz em inglês), um Pokémon semelhante a uma foca que lembra o inicial da sétima geração, Popplio. Kurusu eventualmente evolui para Akua (Aqua em inglês) e Akueria (Aquaria em inglês).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Castform",
      "descricao": "Pokémon do tipo Normal da terceira geração, que muda de forma e de tipo conforme o clima."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Para pedir tempo bom, crianças japonesas penduram na janela um bonequinho de pano branco. Que pokémon de Hoenn, que muda com o clima, se inspira nele?",
    "resposta": "Castform",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Teru_teru_b%C5%8Dzu"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Teru_teru_b%C5%8Dzu",
        "situacao": "ok",
        "texto": "A teru teru bōzu (Japanese: てるてる坊主 or 照る照る坊主; lit. 'shine, shine monk') is a small traditional handmade doll hung outside doors and windows in Japan in hope of sunny weather. Made from tissue paper or cloth, teru teru bōzu charms are usually white, ghost-like figures with strings tied around their necks."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teru_teru_bozu",
        "situacao": "ok",
        "texto": "Teru Teru Bozu (em japonês: てるてる坊主, lit. \"brilha, brilha monge\") são bonecos de papel ou pano feitos a mão. Os fazendeiros do Japão começaram a prende-los na janela como amuleto. O amuleto supostamente tem poderes mágicos para trazer bom tempo e prevenir ou parar os dias de chuva. Teru Teru Bozu ficaram populares durante o Período Edo pelas camadas urbanas, em que as crianças faziam um dia antes d\n[…]\nHoje em dia, crianças fazem teru-teru-bozo com papel para não chover nos dias de excursão escolar ou de piquenique. Pendura-lo de cabeça para baixo significa que estão pedindo para por chuva. Os Teru teru bozos invertidos ainda são comuns.\n[…]\nExiste uma famosa warabe uta, ou cantiga de roda japonesa, associada ao teru teru bozu:\n[…]\nComo muitas outras cantigas de roda, essa música tem uma história mais sombria de como ela apareceu. Geralmente é associada com a história de um monge que prometeu aos fazendeiros parar a chuva e trazer tempo ensolarado em um tempo em que a chuva estava destruindo a plantação de arroz. Quando o monge não conseguiu trazer o dia ensolarado foi executado, tendo sua cabeça decepada. Vários historiadores japoneses discordam com essa versão da história.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Whiscash",
      "descricao": "Pokémon bagre dos tipos Água e Terrestre da terceira geração, evolução de Barboach."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Whiscash se inspira no namazu, bagre gigante do folclore japonês. Segundo a lenda, o que esse peixe provoca quando se debate?",
    "resposta": "Terremotos",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Whiscash_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Namazu"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Whiscash_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Namazu",
        "situacao": "ok",
        "texto": "In Japanese mythology, the Namazu (鯰) or Ōnamazu (大鯰) is a giant underground catfish that causes earthquakes.\n[…]\nThe legend or myth in Japan is that a gigantic namazu (catfish) lives inside or beneath the earth (or in the mud) which causes earthquakes.\n[…]\nThe Pokémon Whiscash, named \"Namazun\" in Japan, resembles a catfish and has \"Earthquake\" as its signature move. An episode of the Pokémon anime featuring Whiscash was scheduled to air on November 4, 2004, but was skipped over after the 2004 Chūetsu earthquake.\n[…]\nThe Namazu was featured in the episode of River Monsters, \"Cold-Blooded Horror\".\n[…]\nNamazu appears in a crossover comic book featuring Stan Sakai's Usagi Yojimbo and IDW's Teenage Mutant Ninja Turtles.\n[…]\nThe Namazu are a race that resemble short, chubby, bipedal catfish in Final Fantasy XIV: Stormblood. The player can undertake crafting and gathering quests for them, or fight Namazu that have forsaken \"civilized\" garments and have taken up banditry.\n[…]\nIn S1:E7 of Dragon Ball GT, the character Zoonama appears as a giant catfish that wiggles his whiskers when detecting earthquakes, and repeats the word \"Namazu\" in his speech.\n[…]\nThe myth of Namazu and a scroll of namazu-e is referenced throughout the 2022 Japanese animated fantasy film of Makoto Shinkai, Suzume.\n[…]\nNamazu-e: Earthquake catfish prints from the period after the Great Ansei Earthquake struck the city of Edo (now Tokyo) in November 1855."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Shiftry",
      "descricao": "Pokémon dos tipos Planta e Sombrio da terceira geração, evolução final de Seedot, de nariz comprido e leques de folha."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O nariz comprido e os leques de folha nas mãos de Shiftry vêm de qual criatura das montanhas do folclore japonês?",
    "resposta": "Tengu",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Shiftry_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Tengu"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Shiftry_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tengu",
        "situacao": "ok",
        "texto": "Tengu ( TENG-goo; Japanese: 天狗, pronounced [teŋɡɯ], lit. 'Heavenly Dog') are a type of legendary creature found in Shinto belief. They are considered a type of yōkai (supernatural being) or kami (god or spirit). The Tengu were originally thought to take the forms of birds of prey and a monkey deity, and they were traditionally depicted with human, monkey, and avian characteristics.\n[…]\nSoon a young samurai appears to whom the tengu has appeared in a dream, and the possessed girl instructs him as an expert swordsman.\n[…]\nTengu continue to be popular subjects in modern fiction, both in Japan and other countries. They often appear among the many characters and creatures featured in Japanese cinema, animation, comics, role-playing games, and video games.\n[…]\nThe Dead or Alive fighting games features a tengu fighter known as Bankotsubo who represents the final boss in Dead or Alive 2. Additionally, a female human-like tengu named Nyotengu appears in Dead or Alive 5 Ultimate.\n[…]\nThe Unicode emoji character U+1F47A (👺) represents a tengu, under the name \"Japanese Goblin\".\n[…]\nThe Touhou Project series prominently features tengu as a species of youkai within the setting. No less than five named characters are tengu, three of which are recurring characters, and one of which is a major character.\n[…]\nNuzleaf and Shiftry from the Pokémon franchise are based on the tengu.\n[…]\nThe tengu are featured in the 2013 movie 47 Ronin, with their lord played by Togo Igawa.\n[…]\nTactics features a shinto onmyoji who spends his life searching for a tengu, whom he names Haruka and another tengu named Sugino. Each tengu represents a different type: Haruka is a \"black\" tengu who was born as such and is more powerful than \"white\" Sugino, who is noted to be a former human priest who grew too arrogant and is worshipped as a mountain god. They primarily appear as humans with wings.\n[…]\nMatsuyama tengu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tengu",
        "situacao": "ok",
        "texto": "Tengu (天狗) são criaturas fantásticas do folclore japonês, uma espécie de goblin cujas lendas possuem traços tanto da religião budista quanto xintoísta. Habitam florestas e montanhas. O traço físico mais marcante dos tengus é o nariz comprido. A maioria deles também tem barba. Alguns tengus têm cabeça de pássaro — esses eram tidos como grandes artistas marciais.\n[…]\nAs lendas que contam a história do guerreiro Minamoto no Yoshitsune relatam que ele foi aluno do Rei dos Tengus, que teria lhe ensinado habilidades mágicas de esgrima. Existem histórias que descrevem encontros entre os tengus e personagens históricos verídicos como o daimyo Kobayakawa Takakage, que teria conversado com um outro rei dos tengu ao pé do Monte Hiko. Séculos depois, os tengus começaram a ser considerados formas das divindades xintoístas que guardavam as montanhas.\n[…]\nAya Shameimaru é uma tengu fotógrafa em forma de garota na série de jogos Touhou Project. Algumas vezes representada com asas de corvo, Aya vive numa montanha e carrega um leque capaz de criar poderosas rajadas de vento. Assume-se que Momiji Inubashiri, outra garota da série, também seja uma tengu.\n[…]\nEm Pokémon, o Pokémon Shiftry é baseado no Tengu.\n[…]\nNo mangá One Piece, um dos personagens chamado Ussop é comparado com um Tengu pelo seu nariz grande.\n[…]\nNo mangá e anime Naruto, diversas formas da habilidade Susanoo tem aparência semelhante a os Tengu.\n[…]\nNa novel e anime Uchouten Kazoku, Kyoto é habitada por grupos de tanuki e tengu há anos, vivendo ao lado de humanos que são inconscientes da existência dessas criaturas.\n[…]\nNo segundo episódio do anime Kimetsu no Yaiba, aparece um caçador de demônios com uma máscara Tengu.\n[…]\n(em inglês) Tengu\n[…]\nNa série de games TOUHOU,as personagens Shameimaru Aya e Himekaidou Hatate são KARASU TENGU;enquanto que Inubashiri Momiji é uma \"SHIROOKAMI\"(lobo branco)Tengu.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Mawile",
      "descricao": "Pokémon da terceira geração, hoje dos tipos Aço e Fada, com uma enorme mandíbula atrás da cabeça."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Que pokémon de Hoenn esconde na nuca uma enorme mandíbula, como a mulher de duas bocas do folclore japonês?",
    "resposta": "Mawile",
    "distratores": [
      "Sableye",
      "Aron",
      "Kecleon"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Mawile_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Futakuchi-onna"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mawile_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Futakuchi-onna",
        "situacao": "ok",
        "texto": "Futakuchi-onna (ふたくちおんな - 二口女; \"two-mouthed woman\") is a type of yōkai or Japanese monster. She is characterized by her two mouths – a normal one located on her face and a second one on the back of the head beneath the hair. There, the woman's skull splits apart, forming lips, teeth and a tongue, creating an entirely functional second mouth."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Futa-kuchi-onna",
        "situacao": "ok",
        "texto": "Futa-kuchi-onna (japonês: 二口女) é um tipo yokai. O nome origina-se da junção de três kanjis 二 ([futa, lit. \"dois\"] Erro: {{japonês}}: o texto tem marcação itálica (ajuda)), 口 ([kuchi, lit. \"boca\"] Erro: {{japonês}}: o texto tem marcação itálica (ajuda)) e 女 ([onna, lit. \"mulher\"] Erro: {{japonês}}: o texto tem marcação itálica (ajuda)).\n[…]\nCaracterizam-se por ter duas bocas, uma normal e uma outra na nuca, por debaixo do cabelo, onde o crânio da mulher se divide, formando lábios, dentes e língua, criando uma segunda boca.\n[…]\nNa mitologia japonesa e no folclore, a futa-kuchi-onna pertence à mesma classe de histórias que a rokurokubi, kuchisake-onna e a yama-uba, mulheres amaldiçoadas ou com doenças sobrenaturais que as transforma em yokai. A natureza sobrenatural das mulheres nestas histórias é geralmente mantida em segredo até o último minuto, quando o sua forma verdadeira é revelada.\n[…]\nComo se não fosse ruim o bastante, a boca exige comida e se não for alimentada, grita e causa grande dor à mulher. Finalmente o cabelo da mulher começa a mover-se à semelhança de serpente, permitindo que a boca se alimente.\n[…]\nOutra versão ainda diz que a futa-kuchi-onna é uma mulher que nunca come, procurada como esposa por um homem avarento. Enquanto nenhum alimento passa através de seus lábios normais, a boca na sua nuca consome duas vezes o que outra consumiria.\n[…]\nUm dia o homem fingiu sair para o trabalho, mas permaneceu escondido para espionar sua esposa e viu horrorizado seus cabelos levarem o arroz até a boca na nuca dela como tentáculos.\n[…]\nE depois viu que ela só estava juntando dinheiro secretamente para as duas. Ela se sentiu assombrada com extrema culpa tendo a aparência de uma segunda boca na nuca dela, era a boca de sua irmã, que constantemente rugia por comida e se não comesse, a mais velha iria ter uma extrema dor de cabeça.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Claydol",
      "descricao": "Pokémon dos tipos Terrestre e Psíquico da terceira geração, uma figura de barro cheia de olhos, evolução de Baltoy."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Claydol, de Hoenn, se parece com quais estatuetas de barro de olhos enormes, feitas no Japão pré-histórico, na era Jōmon?",
    "resposta": "Dogū",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Claydol_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Dog%C5%AB"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Claydol_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dog%C5%AB",
        "situacao": "ok",
        "texto": "Dogū (Japanese: 土偶; IPA: [do̞ɡɯ̟ː]; literally \"earthen figure\") are small humanoid and animal figurines made during the later part of the Jōmon period (14,000–400 BCE) of prehistoric Japan. Dogū come exclusively from the Jōmon period, and were no longer made by the following Yayoi period. There are various styles of dogū, depending on the exhumation area and time period.\n[…]\nThe National Museum of Japanese History estimates that the total number of dogū is approximately 15,000, while The Japan Times places the figure at approximately 18,000. Dogū were made across all of Japan, except Okinawa. Most of the dogū have been found in eastern Japan and it is rare to find one in western Japan. The purpose of the dogū remains unknown and should not be confused with the clay haniwa funerary objects of the Kofun period (250 – 538 CE).\n[…]\nDogū are made of clay and are small, typically 10 to 30 cm high. Most of the figurines appear to be modeled as female, and have big eyes, small waists, and wide hips. They are considered by many to be representative of goddesses. Many have large abdomens associated with pregnancy, suggesting that the Jomon considered them mother goddesses. According to the Metropolitan Museum of Art, these figurines \"suggest an association with fertility and shamanistic rites\".\n[…]\nThe Shakōkidogū (遮光器土偶), or \"goggle-eyed dogū\", were created in the Jōmon era, and are so well known that when most Japanese hear the term dogū, this is the image that comes to mind. The name shakōki (literally \"light-blocking device\") comes from the resemblance of the figures' eyes to traditional Inuit snow goggles. Another distinguishing feature of the objects are the exaggerated female buttocks, chest and thighs.\n[…]\nBaltoy and Claydol, Pokémon that are based on Dogū.\n[…]\nDogū from the Jōmon period, a photographic imagery database—Tokyo University, Japan (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dog%C5%AB",
        "situacao": "ok",
        "texto": "Dogū (土偶; doɡɯ; literalmente \"estatueta de barro\") são estatuetas de pequenos humanoides e animais feitas no final do período Jōmon (14,000–400 a.C.), durante a pré-história do Japão. Dogū provém do período Jōmon, porém deixaram de ser feitas posteriormente após o período Yayoi. Existem vários estilos de dogū, dependendo da área de exumação e da época. De acordo com o Museu Nacional de História Ja\n[…]\nOs Dogū eram feitos em quase todo o Japão, com exceção de Oquinaua. A maioria dos dogū foi encontrada na região leste do Japão e é raro encontrar na região oeste do país. O propósito do dogū permanece desconhecido e não deve ser confundido com as figuras de barro haniwa, os objetos funerários do período Kofun (250 – 538 E.C.). Os artigos de cerâmica do quotidiano são chamados de cerâmica Jōmon.\n[…]\nOs Dogū eram pequenos e feitos com argila, com cerca de dez a trinta centímetros de altura. A maioria das estatuetas parece ser representada com modelos femininos de olhos grandes, cinturas pequenas e quadris largos. Elas são consideradas por muitos como representantes das deusas. Muitas têm ventres grandes associados à gravidez, tendo como sugestão que na era Jomon elas fossem consideradas deusas-mães.\n[…]\nEstatueta \"em forma de mocho-orelhudo\"\n[…]\nEstatueta \"com olhos esbugalhados\" (shakōki-dogū)\n[…]\nEstatueta \"de mulher gestante\"\n[…]\nOs Shakōki-dogū (遮光器土偶), ou \"dogū de olhos arregalados\", foram criados na era Jōmon. O nome shakōki (literalmente \"dispositivo opaco\") provém da semelhança das estatuetas com os tradicionais óculos de neve. No entanto, o ventre é coberto por padrões, muitos dos quais parecem ter sido pintados com vermelhão. As figuras maiores são ocas.\n[…]\nTambém existem disparidades nas variedades dos dogū, tendo apenas uma parte das figuras com os olhos semelhantes a óculos característicos que são mais citados por teóricos sobre a teoria dos astronautas antigos.\n[…]\nTesouro Nacional do Japão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Lileep",
      "descricao": "Pokémon fóssil dos tipos Pedra e Planta da terceira geração, revivido do Fóssil Raiz, que evolui para Cradily."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Apesar do jeito de planta, o fóssil Lileep, de Hoenn, se baseia num animal marinho pré-histórico preso ao fundo do mar. Que animal é esse?",
    "resposta": "Lírio-do-mar (crinoide)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lileep_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Crinoid"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lileep_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Crinoid",
        "situacao": "ok",
        "texto": "Crinoids are marine invertebrates that make up the class Crinoidea. Crinoids that remain attached to the sea floor by a stalk in their adult form are commonly called sea lilies, while the unstalked forms, called feather stars or comatulids, are members of the largest crinoid order, Comatulida. Crinoids are echinoderms in the phylum Echinodermata, which also includes the starfish, brittle stars, se\n[…]\nEchinoderms with mineralized skeletons entered the fossil record in the early Cambrian (540 Mya), and during the next 100 million years, the crinoids and blastoids (also stalked filter-feeders) were dominant. At that time, the Echinodermata included 20 taxa of class rank, only five of which survived the mass extinction events that followed. The long and varied geological history of the crinoids demonstrates how well the echinoderms had adapted to filter-feeding.\n[…]\nCrinoid fossils, and in particular disarticulated crinoid columnals, can be so abundant that they at times serve as the primary supporting clasts in sedimentary rocks. Rocks of this nature are called encrinites.\n[…]\nThe phylogeny, geologic history, and classification of the Crinoidea was discussed by Wright et al. (2017), where the authors present a summary tree of results of recent phylogenetic analyses, shown below.\n[…]\nFossilised crinoid columnal segments extracted from limestone quarried on Lindisfarne, or found washed up along the foreshore, were threaded into necklaces or rosaries, and became known as St. Cuthbert's beads in the Middle Ages. Similarly, in the Midwestern United States, fossilized segments of the columns of crinoids are sometimes known as Indian beads. A species of crinoid, Eperisocrinus missouriensis, is the state fossil of Missouri.\n[…]\nThe aliens in the movie franchise Alien were inspired by crinoids.\n[…]\nMessing, Charles. \"Sea Star on a Stick: Introducing Crinoids\". Vimeo.\n[…]\nCharles Messing's Crinoid Pages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Crinoidea",
        "situacao": "ok",
        "texto": "Crinoidea (do grego krinon, lírio + eidos, forma + ea, caracterizado por) é uma classe de equinodermos que inclui os organismos conhecidos como crinoides, lírios-do-mar e comatulídeos. Os Crinóides recentemente foram denominados os ancestrais comum da classe dos Echinodermata. Os crinóides são animais exclusivamente marinhos que ocupam todas as profundezas até aos 6000 metros.\n[…]\nOs crinóides são organismos que se alimentam por filtração semelhante a uma planta mais do que um animal, lírios do mar são alguns dos animais mais atraentes, porém menos conhecidas dos oceanos profundos.\n[…]\nOs cirros aborais são estruturas com função primária de fixação temporária e para retornar o corpo do animal para à posição normal quando este se encontrar virado para baixo. Quando estes animais rastejam seus braços são curvados para baixo e elevam o corpo do crinoidea acima do substrato, então o animal se locomove lentamente sobre as pontas dos braços. A natação no lírios-do-mar é realizada ação dos braços que batem lentamente e suavemente para cima e para baixo.\n[…]\nNas espécies que possuem braços, esses cordões nervosos se estendem ao longo dos braços até o podia. Este sistema não é altamente desenvolvido em crinóides. O sistema hiponeural (oral profundo) responsável exclusivamente por funções motoras. É constituído também de um nervo circular com cinco nervos associados e distribuídos radialmente, porém encontram-se mais profundos nos tecidos do animal.\n[…]\nA maior parte dos equinodermos é capaz de regenerar partes perdidas. Os Crinoidea constantemente autotomizam (desprendem, soltam) partes deles ou até mesmo braços inteiros como meio de defesa ou quando se sentem perturbados.\n[…]\nEm 2012, um grupo de investigadores descobriu a mais de 500 metros de profundidade, ao largo do Algarve, um campo de crinoides.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Relicanth",
      "descricao": "Pokémon peixe dos tipos Água e Pedra da terceira geração, da região de Hoenn."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Que pokémon de Hoenn, de água e pedra, se inspira no celacanto, o peixe que se julgava extinto havia milhões de anos?",
    "resposta": "Relicanth",
    "distratores": [
      "Barboach",
      "Huntail",
      "Gorebyss"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Relicanth_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Coelacanth"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Relicanth_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Coelacanth",
        "situacao": "ok",
        "texto": "Coelacanths (  SEE-lə-kanth) are an ancient group of lobe-finned fish (Sarcopterygii) in the class Actinistia. As sarcopterygians, they are more closely related to lungfish and tetrapods (the terrestrial vertebrates including living amphibians, reptiles, birds and mammals) than to ray-finned fish. There is only a single living genus, Latimeria, with two described species."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Actinistia",
        "situacao": "ok",
        "texto": "Os Actinistia são uma classe antiga de peixes de nadadeiras lobadas (Sarcopterygii) tambem conhecido como Celacantos. Como osSarcopterygii, eles são mais intimamente relacionados aos peixes pulmonados e tetrápodes (os vertebrados terrestres, incluindo anfíbios, répteis, aves e mamíferos vivos) do que aos peixes de nadadeiras raiadas. Existe apenas um único gênero vivo, Latimeria, com duas espécies\n[…]\nO nome celacanto tem origem no gênero do Permiano Coelacanthus, que foi o primeiro gênero de celacantos nomeado cientificamente em 1839, tornando-se o gênero-tipo de Coelacanthiformes à medida que outras espécies foram descobertas e nomeadas. Bem representados em depósitos de água doce e marinhos desde o período Devoniano (há mais de 410 milhões de anos), acreditava-se que eles haviam sido extintos no Cretáceo Superior, há cerca de 66 milhões de anos.\n[…]\nCourtenay-Latimer contatou um ictiólogo da Universidade de Rhodes, James Leonard Brierley Smith, enviando-lhe desenhos do peixe, e ele confirmou a importância do peixe com um famoso telegrama: \"Esqueleto e brânquias mais importantes preservados = Peixe descrito.\" Sua descoberta mais de 60 milhões de anos após sua suposta extinção faz do celacanto o exemplo mais conhecido de um táxon Lázaro, um táxon ou linha evolutiva que parece ter desaparecido do registro fóssil apenas para reaparecer muito tempo depois.\n[…]\nO tecido mole dos celacantos é conhecido principalmente a partir de Latimeria, o gênero relicto ainda existente.\n[…]\nA maioria dos celacantos do Mesozoico pertence à subordem Latimerioidei, que contém duas subdivisões principais: a família marinha Latimeriidae, que inclui os celacantos modernos, e a família extinta Mawsoniidae, nativa de ambientes salobros, de água doce e marinhos.\n[…]\nCladograma mostrando as relações dos gêneros de celacanto segundo Torino, Soto e Perea, 2021.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Trapinch",
      "descricao": "Pokémon do tipo Terrestre da terceira geração, que cava funis na areia e evolui para Vibrava e Flygon."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Trapinch cava funis na areia para prender as presas e, adulto, vira o dragão alado Flygon. Esse ciclo imita a vida de qual inseto real?",
    "resposta": "Formiga-leão",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Trapinch_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Antlion"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Trapinch_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Antlion",
        "situacao": "ok",
        "texto": "The antlions are a group of about 2,000 species of insect in the neuropteran family Myrmeleontidae. They are known for the predatory habits of their larvae, which mostly dig pits to trap passing ants or other prey. In North America, the larvae are sometimes referred to as doodlebugs because of the marks they leave in the sand. The adult insects are less well known due to their relatively short lif\n[…]\nAntlions appear as antagonists in the 1991 life simulation video game, SimAnt, and (in a giant form) in the Final Fantasy series, Grounded, Terraria, Don't Starve Together, Monster Rancher 2, Mother 3 and in the Half-Life 2 video game series as an unrelated alien insect species sharing sand burrowing traits with the real antlion larvae. The Trapinch, Vibrava, and Flygon Pokémon evolution line is based on an antlion.\n[…]\nThe fictional sarlacc from the Star Wars franchise is often compared to the real-life antlion. It also appears as a predator in the film Enemy Mine."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Formiga-le%C3%A3o",
        "situacao": "ok",
        "texto": "O termo formiga-leão é a designação comum aos insetos neurópteros da família dos Myrmeleontidae (Mirmeleonídeos), cujas larvas de quem o nome vulgar deriva, são providas de longas mandíbulas e se enterram no fundo de um funil cônico por elas construído na areia para capturar presas.\n[…]\nTambém são conhecidos pelos nomes de formigão, furão, joão-torrão, mirmeleão, piolho-de-urubu e tatuzinho.\n[…]\nApesar do nome vulgar, estes insetos não pertencem ao grupo das formigas.\n[…]\nMede 4 cm de comprimento 8 cm de envergadura, possuem antenas filiformes. O adulto possui dois pares de asas, que quando paradas, cobrem o corpo como um abrigo. Voa apenas ao anoitecer ou à noite. A larva da formiga-leão pode jejuar durante oito meses, e a ninfa se torna adulta em um mês. A vida de um formiga-leão adulta é muito curta: vai da primavera ao outono.\n[…]\nO nome formiga-leão deriva da larva do inseto.\n[…]\nAs larvas da formiga-leão tem por principal característica a construção de uma armadilha em terrenos arenosos, no formato de funil, que servem para capturar o alimento; influem principalmente na escolha do solo para a construção dos funis, além do solo arenoso, o tamanho das partículas, a possibilidade de perturbação do meio, a disponibilidade de presas, a temperatura do solo e a \"densidade coespecífica\", e é comum que construam os funis sob plantas, pedras ou troncos onde ficam protegidas da chuva, sol ou pisoteio - embora não raro possam ser encontrados longe de qualquer desses meios de proteção.\n[…]\nA distribuição das armadilhas revela a competição entre as larvas e podem apresentar equidistância entre elas, e o aumento no tamanho da armadilha parece aumentar também sua eficácia, uma vez que a possibilidade pegar mais presas e de maior tamanho aumenta.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Jirachi",
      "descricao": "Pokémon mítico dos tipos Aço e Psíquico da terceira geração, que realiza desejos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "As três tiras penduradas na cabeça de Jirachi, onde se escrevem desejos, lembram as tiras de papel de qual festival japonês das estrelas?",
    "resposta": "Tanabata",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Jirachi_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Tanabata"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jirachi_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tanabata",
        "situacao": "ok",
        "texto": "Tanabata (Japanese: たなばた or 七夕; meaning \"Evening of the Seventh\"), also known as the Star Festival (星祭り, Hoshimatsuri), is a Japanese festival originating from the Chinese Qixi Festival. It celebrates the meeting of the deities Orihime and Hikoboshi (represented by the stars Vega and Altair respectively). According to legend, the Milky Way separates these lovers, and they are allowed to meet only \n[…]\nThe Festival of Tanabata is also known by various names:\n[…]\nThe Sendai Tanabata Festival is the most famous in Japan. Tanabata has been celebrated in the region since the time of Date Masamune (1567–1636) who was the first warlord in the Sendai area. The festival began shortly after the city was founded in the early Edo Period. The Tanabata festival gradually developed and became larger over the years.\n[…]\nAt the Sendai Tanabata Festival, people traditionally use seven different kinds of decorations, which each represent different meanings. The seven decorations and their symbolic meanings are:\n[…]\nIn 2008, the 34th G8 summit in Tōyako, Hokkaidō coincided with Tanabata. As host, Japanese Prime Minister Yasuo Fukuda invited the G8 leaders to participate in the spirit of the festival. They were each asked to write a wish on a piece of paper called tanzaku, to hang the tanzaku on a bamboo tree, and then to take the necessary actions to change the world for the better. As a symbolic gesture, the actual writing and the act of hanging up that note is at least a first step.\n[…]\nOutside Japan, Fukuda's timely gesture had unanticipated consequences. For example, the Indian nationally circulated newspaper, The Hindu, picked up on this festival theme by printing an editorial featuring unconventional Tanabata wishes.\n[…]\nSekidera Komachi, a famous Noh play set during the Tanabata festival\n[…]\nMobara Tanabata Festival\n[…]\nJapanese festivals\n[…]\nMedia related to Tanabata at Wikimedia Commons\n[…]\nTanabata Festival in SendaiNHK"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tanabata",
        "situacao": "ok",
        "texto": "Tanabata (japonês: たなばた ou 七夕; significando \"Sétima Noite\"), também conhecido como Festival das Estrelas (星祭り, Hoshimatsuri) é um festival japonês, derivado da tradição chinesa Qixi, que ocorre na sétima noite do sétimo mês do ano. O festival que celebra esta história de amor teve início na Corte Imperial do Japão há cerca de 1 150 anos, e lá tornou-se feriado nacional em 1603.\n[…]\nO festival ganhou grande popularidade entre o público em geral no início do período Edo, quando se misturou com várias tradições Obon ou Bon (porque o Bon era realizado no dia 15 do sétimo mês), e se desenvolveu no moderno festival Tanabata. Os costumes populares relativos ao festival variam de acordo com a região do país, mas geralmente, as meninas desejavam melhorar suas habilidades de costura e artesanato, e os meninos desejavam uma caligrafia melhor, escrevendo seus desejos em tiras de papel.\n[…]\nGradualmente esta cerimônia se fundiu com Kikkōden para se tornar Tanabata. Os caracteres chineses 七夕 e a leitura japonesa Tanabata juntaram-se para significar o mesmo festival, embora originalmente fossem duas coisas diferentes, um exemplo de jukujikun.\n[…]\nCom o nome de \"Festival das Estrelas\", o Tanabata Matsuri é realizado na cidade de São Paulo, na Praça da Liberdade, no mês de julho, desde 1979.\n[…]\nA data original do Tanabata é baseada no calendário lunissolar japonês, que é um mês atrasado que o calendário gregoriano. Com isso, alguns festivais são realizados no dia 7 de Julho e outros nos dias próximos ao dia 7 de Agosto, enquanto outros continuam comemorando no sétimo dia do sétimo mês lunar do tradicional calendário lunissolar japonês, que normalmente é em Agosto no calendário gregoriano.\n[…]\nHá uma canção tradicional de Tanabata que é ensinada praticamente a todas as crianças japonesas:\n[…]\nEu escrevi (os meus desejos)\n[…]\n«Festival Tanabata». Arquivado do original em 29 de maio de 2013",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Trio do clima de Hoenn",
      "descricao": "Trio de lendários da terceira geração formado por Groudon, Kyogre e Rayquaza, senhores da terra, do mar e do céu."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Groudon, Kyogre e Rayquaza, senhores da terra, do mar e do céu, lembram Behemoth, Leviatã e Ziz, monstros de qual tradição religiosa?",
    "resposta": "Judaica",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Weather_trio",
      "https://en.wikipedia.org/wiki/Ziz"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Weather_trio",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ziz",
        "situacao": "ok",
        "texto": "The Ziz (Hebrew: זִיז‎, romanized: zîz) is a giant griffin-like bird in Jewish mythology, said to be large enough to be able to block out the sun with its wingspan.\n[…]\nAs Leviathan is the king of fishes, so the Ziz is appointed to rule over the birds. His name comes from the variety of tastes his flesh has; it tastes like this, zeh, and like that, zeh. The Ziz is as monstrous of size as Leviathan himself. His ankles rest on the earth, and his head reaches to the very sky.\n[…]\nLike Leviathan, so Ziz is a delicacy to be served to the pious at the end of time, to compensate them for the privations which abstaining from the unclean fowls imposed upon them. [...] The creation of the fifth day, the animal world, rules over the celestial spheres. Witness the Ziz, which can darken the sun with its pinions.\n[…]\nNon-Jews also knew of the Ziz. Johannes Buxtorf's 1603 Synagoga Judaica discusses the Ziz. His text is echoed in English by Samuel Purchas in 1613:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ziz",
        "situacao": "ok",
        "texto": "Ziz (Hebraico: זיז) é, na mitologia judaica, uma ave gigante, tão grande que bloqueia a luz do sol com a envergadura das suas asas. É considerado como um arquétipo das criaturas monstruosas. Behemoth, Leviatã e Ziz são motivos tradicionais de decoração no artesanato judaico. Alguns criacionistas o identificaram como uma espécie de pterossauro, o Quetzalcoatlus, que foi o maior animal alado da hist",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Bronzor",
      "descricao": "Pokémon dos tipos Aço e Psíquico da quarta geração, de corpo achatado e redondo, que evolui para Bronzong."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O corpo achatado e redondo de Bronzor, de Sinnoh, com desenhos gravados no verso, imita qual objeto antigo encontrado em túmulos da China e do Japão?",
    "resposta": "Espelho de bronze",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Bronzor_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bronzor_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fourth generation (generation IV) of the Pokémon franchise features 107 species of pokémon introduced to the core video game series in the 2006 Nintendo DS games Pokémon Diamond and Pearl. Some Pokémon in this generation were introduced in games and animated adaptations of the franchise before Diamond and Pearl, such as Bonsly, Mime Jr., and Munchlax, which were recurring characters in the Pok"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_IV",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Bonsly",
      "descricao": "Pokémon bebê do tipo Pedra da quarta geração, que finge ser uma arvorezinha, forma anterior de Sudowoodo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome de Bonsly, o filhote de Sudowoodo que finge ser uma arvorezinha, junta sly, astuto em inglês, com qual arte japonesa?",
    "resposta": "Bonsai",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Bonsly_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Bonsai"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bonsly_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bonsai",
        "situacao": "ok",
        "texto": "Bonsai (; Japanese: 盆栽, lit. 'pot planting', pronounced [boɰ̃sai] ) is the Japanese art of growing and shaping miniature trees in containers, with a long documented history of influences and native Japanese development over a thousand years, and with unique aesthetics, cultural history, and terminology derived from its evolution in Japan. Similar arts exist in other cultures, including Korea's bun\n[…]\nSome key principles in bonsai aesthetics include:\n[…]\nBelow is a list of some notable bonsai artists.\n[…]\nA photograph of a bonsai may not give the viewer an accurate impression of the tree's real size, so printed documents may complement a photograph by naming the bonsai's size class. The size class implies the height and weight of the tree in its container.\n[…]\nAt the other end of the size spectrum, there are a number of specific techniques and styles associated solely with the smallest common sizes, mame and shito. These techniques take advantage of the bonsai's minute dimensions and compensate for the limited number of branches and leaves that can appear on a tree this small.\n[…]\nThe Japanese tradition of bonsai does not include indoor bonsai, and bonsai appearing at Japanese exhibitions or in catalogs have been grown outdoors for their entire lives. In less-traditional settings, including climates more severe than Japan's, indoor bonsai may appear in the form of potted trees cultivated for the indoor environment.\n[…]\nTraditionally, bonsai are temperate climate trees grown outdoors in containers. Kept in the artificial environment of a home, these trees weaken and die. However, a number of tropical and sub-tropical tree species will survive and grow indoors, such as the jade plant and members of the genus Ficus.\n[…]\nBonsai aesthetics\n[…]\nBonsai cultivation and care\n[…]\nBonsai Kitten\n[…]\nBonsai styles\n[…]\nChrysanthemum bonsai\n[…]\nList of species used in bonsai\n[…]\nTop 5 Bonsai Museums in the World"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bonsai",
        "situacao": "ok",
        "texto": "Bonsai (japonês: 盆栽, \"bon-sai\") é uma arte japonesa de cultivar e modelar miniaturas de árvores em vasos. Ao contrário do que muitos pensam o ideograma não contém a palavra árvore 木 (Ki).\n[…]\nO Bonsai não se trata de uma espécie vegetal específica, mas sim de uma técnica utilizada em árvores com o objetivo de “miniaturizá-la” inspirando-se em formas existentes na natureza. Não há árvore de Bonsai, mas árvores que se transformam pelo processo de Bonsai. Na prática, é a arte de selecionar e transformar árvores que tenham potencial para se assemelhar a uma réplica na natureza.\n[…]\nUm bonsai precisa ter outros atributos além de simplesmente estar plantado num vaso raso e pequeno. A planta deve ser uma réplica de uma árvore da natureza em miniatura. Deve simular os padrões de crescimento e os efeitos da gravidade sobre os galhos, além das marcas do tempo e estrutura geral dos galhos. Essencialmente é uma obra de arte reproduzida por meio de cuidados especializados.\n[…]\nAcer é um género botânico pertencente à família Aceraceae, podendo ser denominada com o nome comum de bordo. Pode ser uma árvore ou arbusto. Existem aproximadamente 128 espécies, a maioria das quais são nativas da Ásia, mas várias espécies também ocorrem na Europa. Existe muitas características especiais ao  criar o Bonsai de Acer, o Bordo Japonês.\n[…]\nO maior exemplar conhecido de Bougainvillea do mundo está localizado à beira do lago Guanabara no Município de Lambari no Sul de Minas Gerais ; de tão grande virou árvore frondosa de 18 metros de altura. Arbusto ótimo para bonsai.\n[…]\nSaikei - Arte japonesa que usa bonsai para criar paisagens, por exemplo, uma floresta.\n[…]\nO Bonsaísta\n[…]\nBonsai KAI\n[…]\nO Bonsaísta\n[…]\nBonsai Brasil\n[…]\nBonsai Dicas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Abomasnow",
      "descricao": "Pokémon dos tipos Planta e Gelo da quarta geração, um gigante coberto de neve, evolução de Snover."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome de Abomasnow, o gigante de gelo e planta de Sinnoh, alude a qual criatura lendária das montanhas do Himalaia?",
    "resposta": "Abominável homem das neves (yeti)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Abomasnow_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Yeti"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Abomasnow_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Yeti",
        "situacao": "ok",
        "texto": "The Yeti (), also commonly referred to as the Abominable Snowman in Western popular culture, is a large, hairy, mythical humanoid creature said to inhabit the Himalayan mountain range in Asia. Many dubious articles have been offered in an attempt to prove the existence of the Yeti, including anecdotal visual sightings, disputed video recordings, photographs, and plaster casts of large footprints. \n[…]\nIt included hair thought to be from the same preserved specimen as the anomalous Sykes sample, and showed it to have been a Himalayan brown bear, while other purported yeti samples were actually from the Tibetan blue bear, Asiatic black bear and a domestic dog.\n[…]\nSome speculate these reported creatures could be present-day specimens of the extinct giant ape Gigantopithecus. However, the Yeti is generally described as bipedal, and most scientists believe Gigantopithecus to have been quadrupedal, and so massive that, unless it evolved specifically as a bipedal ape (like the hominids), walking upright would have been even more difficult for the now extinct primate than it is for its extant quadrupedal relative, the orangutan.\n[…]\nIzzard, Ralph (1955) The Abominable Snowman Adventure. Hodder and Stoughton.\n[…]\nDaniel Loxton; Donald Prothero (2013). Abominable Science: Origins of the Yeti, Nessie, and Other Famous Cryptids. Chapter 3, written by Prothero. Columbia University Press. pp. 73–116. ISBN 978-0-231-15320-1.\n[…]\nReinhold Messner, My Quest for the Yeti: Confronting the Himalayas' Deepest Mystery, New York: St. Martin's Press, 2000, ISBN 0-312-20394-2\n[…]\nStonor, Charles (1955). The Sherpa and the Snowman. London: Hollis and Carter. Recounts the 1955 Daily Mail \"Abominable Snowman Expedition\" by the scientific officer of the expedition. This is a very detailed analysis of not just the \"Snowman\" but the flora and fauna of the Himalayas and its people.\n[…]\n\"Yeti Legends\"—National Geographic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/I%C3%A9ti",
        "situacao": "ok",
        "texto": "Iéti (tibetano: གཡའ་དྲེད་, yeti lit. \"urso das rochas\") ou Abominável Homem das Neves é uma criatura que supostamente vive na região dos Himalaias.\n[…]\nFrequentemente costuma ser relacionado a outra criatura que possivelmente pode existir, como o Bigfoot (Pé-grande ou sasquatch), outra criatura misteriosa, que viveria nos Estados Unidos ou no Canadá.\n[…]\nA criatura tem cerca de 2 metros de altura, assim como seu parente, Bigfoot, e também é relatado que possua o mesmo odor fétido, característicos das criaturas citadas em várias civilizações, assim como o mapinguari, na Amazônia, o sasquach, no Canadá, o Bigfoot nos Estados Unidos, Skunk Ape na Flórida e Orang Pendek, na Indonésia, todos possuem existência não confirmadas.\n[…]\nO Abominável Homem das Neves também está presente em diversas outras culturas pelo mundo, principalmente em lugares extremamente hostis e montanhosos. Pesquisadores sugerem que o Iéti tem o estranho costume de acasalar com seres de outras espécies, como os humanos, deixando descendentes por todo o mundo com características muito parecidas com as suas porém adaptadas ao clima local.\n[…]\nUm estudo em 2017 analisou os grandes fragmentos de DNA, analisando os genomas mitocondriais completos de supostos Iétis e comparando-os com os genomas mitocondriais de vários ursos, incluindo ursos polares e ursos marrons tibetanos. Oito amostras de restos, tais como pele, ossos e dentes, supostamente provenientes de Iéti, realmente provêm de três tipos diferentes de ursos que vivem no Himalaia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Mamoswine",
      "descricao": "Pokémon dos tipos Gelo e Terrestre da quarta geração, de presas enormes, evolução de Piloswine."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Que pokémon de gelo e terra, de presas enormes e corpo coberto de pelos, se inspira no mamute-lanoso da Era do Gelo?",
    "resposta": "Mamoswine",
    "distratores": [
      "Piloswine",
      "Donphan",
      "Abomasnow"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Mamoswine_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mamoswine_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fourth generation (generation IV) of the Pokémon franchise features 107 species of pokémon introduced to the core video game series in the 2006 Nintendo DS games Pokémon Diamond and Pearl. Some Pokémon in this generation were introduced in games and animated adaptations of the franchise before Diamond and Pearl, such as Bonsly, Mime Jr., and Munchlax, which were recurring characters in the Pok\n[…]\nThe following list details the 107 Pokémon of generation IV in order of their National Pokédex number. The first Pokémon, Turtwig, is number 387 and the last, Arceus, is number 493. Alternate forms that result in type changes are included for convenience. Mega Evolutions and regional forms are included on the pages for the generation in which they were introduced.\n[…]\nPokémon are a species of fictional creatures created for the Pokémon media franchise. Developed by Game Freak and published by Nintendo, the Japanese franchise began in 1996 with the video games Pokémon Red and Green for the Game Boy, which were later released in North America as Pokémon Red and Blue in 1998. In these games and their sequels, the player assumes the role of a Trainer whose goal is to capture and use the creatures' special abilities to combat other Pokémon.\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as exposure to specific items. Each Pokémon have one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading with other Trainers to obtain individuals from all Pokémon species."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_IV",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 107 Pokémon da Geração IV na ordem numérica do Pokédex Nacional. O primeiro Pokémon, Turtwig, numerado de 387 e o último, Arceus, numerado de 493. Formulários alternativos que resultam em alterações de tipo são incluídos por conveniência. Formas alternativas que resultam em mudanças de tipo estão incluídas para facilitar a consulta. Mega Evoluções e formas regionais estão incluídas nas páginas da geração em que foram introduzidas.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Garchomp",
      "descricao": "Pokémon dos tipos Dragão e Terrestre da quarta geração, evolução final de Gible, ás do time de Cynthia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A cabeça achatada e as barbatanas de Garchomp, o dragão de Cynthia, vêm de qual animal marinho?",
    "resposta": "Tubarão-martelo",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Garchomp_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Garchomp_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fourth generation (generation IV) of the Pokémon franchise features 107 species of pokémon introduced to the core video game series in the 2006 Nintendo DS games Pokémon Diamond and Pearl. Some Pokémon in this generation were introduced in games and animated adaptations of the franchise before Diamond and Pearl, such as Bonsly, Mime Jr., and Munchlax, which were recurring characters in the Pok"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_IV",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Honchkrow",
      "descricao": "Pokémon ave dos tipos Sombrio e Voador da quarta geração, evolução de Murkrow com a Pedra da Escuridão."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Com penas na cabeça em forma de chapéu e um peito branco e fofo, como uma gola, que pokémon de Sinnoh lembra um chefão da máfia?",
    "resposta": "Honchkrow",
    "distratores": [
      "Murkrow",
      "Staraptor",
      "Chatot"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Honchkrow_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Honchkrow_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fourth generation (generation IV) of the Pokémon franchise features 107 species of pokémon introduced to the core video game series in the 2006 Nintendo DS games Pokémon Diamond and Pearl. Some Pokémon in this generation were introduced in games and animated adaptations of the franchise before Diamond and Pearl, such as Bonsly, Mime Jr., and Munchlax, which were recurring characters in the Pok\n[…]\nThe following list details the 107 Pokémon of generation IV in order of their National Pokédex number. The first Pokémon, Turtwig, is number 387 and the last, Arceus, is number 493. Alternate forms that result in type changes are included for convenience. Mega Evolutions and regional forms are included on the pages for the generation in which they were introduced.\n[…]\nPokémon are a species of fictional creatures created for the Pokémon media franchise. Developed by Game Freak and published by Nintendo, the Japanese franchise began in 1996 with the video games Pokémon Red and Green for the Game Boy, which were later released in North America as Pokémon Red and Blue in 1998. In these games and their sequels, the player assumes the role of a Trainer whose goal is to capture and use the creatures' special abilities to combat other Pokémon.\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as exposure to specific items. Each Pokémon have one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading with other Trainers to obtain individuals from all Pokémon species."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_IV",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 107 Pokémon da Geração IV na ordem numérica do Pokédex Nacional. O primeiro Pokémon, Turtwig, numerado de 387 e o último, Arceus, numerado de 493. Formulários alternativos que resultam em alterações de tipo são incluídos por conveniência. Formas alternativas que resultam em mudanças de tipo estão incluídas para facilitar a consulta. Mega Evoluções e formas regionais estão incluídas nas páginas da geração em que foram introduzidas.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Froslass",
      "descricao": "Pokémon dos tipos Gelo e Fantasma da quarta geração, evolução da fêmea de Snorunt."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Que pokémon de gelo e fantasma, apresentado em Sinnoh, se inspira na yuki-onna, a mulher da neve do folclore japonês?",
    "resposta": "Froslass",
    "distratores": [
      "Glalie",
      "Jynx",
      "Mismagius"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Froslass_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Yuki-onna"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Froslass_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Yuki-onna",
        "situacao": "ok",
        "texto": "Yuki-onna (雪女; lit. 'snow woman') is a yūrei or yōkai in Japanese folklore that is often depicted in Japanese literature, films, or animation.\n[…]\nOld tales about yuki-onna are mostly stories of sorrow, and it is said that these tales started from when people who have lived gloomy lives, such as childless old couples or single men in mountain villages, would hear the sound of a blizzard knocking on their shutter door and fantasize that the thing that they longed for has come. It is said that after that, they would live in happiness with what they longed for in a fantasy as fleeting as snow.\n[…]\nFroslass of Generation IV in the Pokémon series is based on the Yuki-onna.\n[…]\nYuki-onna served as the main lyrical inspiration behind the Symphony X song \"Lady of the Snow\", from their 1998 album Twilight in Olympus.\n[…]\nThe Yuki-onna appears in the manga/anime series In/Spectre season 2 episodes 2 and 3, where a Yuki-onna saves a man from death on a mountain.\n[…]\nThe character Noel Izumi from Studio Apartment, Good Lighting, Angel Included is a Yuki-onna.\n[…]\nYuki-onna appears in the novel The Causal Angel as a representation of the character the pelligrini when the Zoku put her servant Mieli into a realm designed to emulate a ronin's battle to defeat Yuki-onna.\n[…]\nIn the manga Monster Musume, the character Yukio is a Yuki-onna and the proprietess of the Sno Ball Hot Springs Resort.\n[…]\nIn The Ice Guy and His Cool Female Colleague, siblings Yukiya and Yukimi Himuro are descendants of a Yuki-onna\n[…]\nTake no yuki\n[…]\nYuki-onna Monogatari\n[…]\nYuki Onna – The Snow Woman at hyakumonogatari.com (English).\n[…]\nAn article that references Yuki Onna in the movies Japanzine by Jon Wilks"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yuki-onna",
        "situacao": "ok",
        "texto": "Yuki-onna (雪女; mulher da neve) é um espírito ou youkai encontrado no folclore japonês. É uma figura muito comum na animação, mangá e literatura japonesas.\n[…]\nSegundo o folclore, as Yuki-Onna cantam para seduzir os homens, fazendo-os se perder nas nevascas e morrer congelados. Frequentemente elas aparecem na forma de mulheres belas e jovens, e em muitas lendas elas se apaixonam por homens e se aproximam deles, casando-se e constituindo família, tendo filhos, inclusive. Entretanto, a história de amor sempre finda com o desaparecimento dela num dia de maior bruma ou de tempestade, provavelmente quando o chamado de seu mundo se torna mais forte.\n[…]\nNo filme japonês de antologia de 1964, Kwaidan, dirigido por Masaki Kobayashi, A Mulher na Neve é o tema e título do segundo capítulo.\n[…]\nEm Pokémon, existe um Pokémon chamado Froslass que é baseado numa Yuki-Onna.\n[…]\nEm Yu-Gi-Oh!, existe uma carta chamada \"Ghostrick Yuki-Onna\"\n[…]\nNos primeiros três volumes do anime Kanokon, há uma personagem chamada Yukihana, que também é uma Yuki-Onna, e consegue controlar a neve.\n[…]\nNo capítulo 31 de Monster Musume no Iru Nichijou, uma Yuki-Onna é dona de um resort' de termas.\n[…]\nAinda em Yu-Gi-Oh! existe uma carta chamada ''Frozen Fitzgerald'' que é baseado em uma Yuki-Onna.\n[…]\nNo anime Inuyasha em um dos capítulos o personagem Miroko é encantado por uma Yuki-Onna.\n[…]\nNa série de jogos Final Fantasy, a esper Shiva é uma referencia às Yuki-Onnas. Seu nome vem do inglês Shiver (calafrio).\n[…]\nNo jogo Onmyoji Arena, Yuki Onna é um personagem jogável da classe mago\n[…]\nYuki-ona\n[…]\nYuki Onna – The Snow Woman at hyakumonogatari.com (em inglês).\n[…]\nUm artigo que dá referências da Yuki Onna nos filmes",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.71 — 2026-10-16**
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

---

# Regras de conteúdo do modo (modo_pokemon.md)

Estas são as regras de conteúdo do **modo Pokémon**, que valem para as perguntas exclusivas dele (`colecao: "pokemon"`, `exclusiva: true`). Elas partem da Parte I do MANIFESTO acima: princípios, classificação, ângulos, tipos de pergunta, redação para voz e critérios de qualidade continuam valendo. **Onde estas regras e o MANIFESTO divergirem, valem estas.**

### Público e profundidade

- **O público é quem gosta de pokémon:** já jogou alguns jogos, viu o anime e conhece pokémon de várias gerações. Isso substitui o "público informado, mas leigo" do MANIFESTO §7: termos da franquia (tipo, evolução, ginásio, insígnia, lendário, Pokédex, megaevolução, iniciais) dispensam explicação.
- **Pode ir mais fundo que no jogo original**, mas a régua da justiça continua: um fã diria "boa pergunta", e não "que detalhe arbitrário". Profundidade vem do fato, não da obscuridade (MANIFESTO, princípio 4).
- **Entram:** a origem dos nomes, a inspiração dos desenhos, as lendas dos lendários, como e em quem um pokémon evolui, as formas regionais, o enredo e os lugares dos jogos, os líderes e campeões, os bastidores da criação, o anime, os filmes, a dublagem e o Pokémon no Brasil.
- **Ficam de fora:** números da Pokédex, estatísticas, valores de dano e de atributos, probabilidades e mecânicas internas (a chance de um brilhante, taxas de captura), golpes e habilidades obscuros, falhas de programação e dados escondidos (MissingNo., itens duplicados), detalhes que só um competidor saberia, e perguntas que pedem listas. A exceção são os cartões feitos de dados, o de tipo e atributos base e o de golpe ("Qual é esse ataque?"), em que os números aparecem na figura como pista e ninguém precisa sabê-los de cor.

### Cobertura

A franquia inteira, distribuída por **todas as gerações**, e não só Kanto. Cada lote de texto tem um dos três subtemas do modo como foco e procura fatos ainda não usados.

### Variedade

- **Não há cota de ângulos nos lotes:** não valem o máximo de 25% num mesmo ângulo, o mínimo de 6 ângulos, o máximo de 30% para `identidade` + `atributo` nem o piso de 20% para `conexao` + `nome` (MANIFESTO §9). Um lote pode se concentrar no ângulo que o foco pede.
- **Continuam valendo:** no máximo 2 perguntas por âncora no mesmo lote, nunca com o mesmo ângulo; no máximo 2 perguntas com o mesmo ângulo por âncora, na coleção; e perguntas do mesmo ângulo não repetem o mesmo molde de frase (MANIFESTO §5).
- Na silhueta e no cartão de tipo e atributos **não há cota de emblemáticos: todos os pokémon entram**, famosos ou não, de todas as gerações e em todas as formas da linha evolutiva.

### Saturação e repetição

- **A conta é só na coleção.** Na saturação de uma âncora, contam as perguntas com `colecao: "pokemon"`, exclusivas ou não, e não as do jogo original. As exclusivas, por sua vez, não contam na saturação do jogo original, porque uma partida nunca sorteia os dois conjuntos.
- **No máximo 5 perguntas por âncora** na coleção, somando texto e figura, e no máximo **2 com figura**. Isso substitui o limite de 3 do MANIFESTO §4.
- **Silhueta e cartão ficam fora da saturação.** A silhueta da casa "Quem é esse pokémon?", qualquer que seja a pergunta, e o cartão de tipo e atributos não contam nos limites acima, e o mesmo pokémon pode ter os dois. Cada pokémon tem no máximo **uma silhueta** e **um cartão**.
- **Um fato, uma pergunta, na coleção inteira:** uma pergunta nova não pode perguntar um fato que outra pergunta da coleção já pergunta, **mesmo com outra âncora**. Ash e Satoshi é o mesmo fato, pela âncora Ash ou pela âncora Satoshi Tajiri; os nomes de cores das cidades de Kanto também, por Pallet ou por Viridian.

### Nomes

Os jogos ganharam tradução oficial para o português do Brasil a partir de Scarlet e Violet, e o anime sempre foi dublado. Os fãs mais antigos conhecem os nomes em inglês, e os mais novos, os brasileiros. Por isso:

- **Golpes, itens, habilidades, lugares, organizações e personagens:** quando o nome oficial brasileiro é diferente do inglês, a pergunta usa **os dois**.
  - **No enunciado:** o brasileiro primeiro, depois o inglês, ligados por "ou", sem parênteses: "Nos jogos de Kanto, quem lidera a Equipe Rocket, ou Team Rocket?".
  - **Na resposta:** o brasileiro, com o inglês entre parênteses: "Equipe Rocket (Team Rocket)". É o caso de parênteses "muito apropriado" do MANIFESTO §7.
  - **Na múltipla escolha:** as quatro alternativas seguem a mesma forma, para a resposta não se destacar. O limite de 4 palavras vale para cada nome.
  - **Nas variantes da âncora:** os dois nomes.
- **Só nome brasileiro oficial**, de que se tenha certeza: o dos jogos traduzidos, o da dublagem ou o do material oficial da The Pokémon Company no Brasil. Nada de tradução livre: na dúvida, só o nome em inglês.
- **Os nomes dos pokémon** são os mesmos no Brasil e em inglês, e vão uma vez só.
- Os **tipos** usam sempre os nomes oficiais brasileiros (Planta, Venenoso, Fantasma), como nos cartões.
- **"pokémon"**, em minúsculas, é o nome comum da criatura e não vai para o plural ("os pokémon"); **"Pokémon"**, com maiúscula, é a franquia.

### Redação para voz

Além do MANIFESTO §7:
- Nomes com símbolos ou sinais vão na forma falada: "Nidoran fêmea" e "Nidoran macho", e não com ♀ e ♂; "Porygon Z", sem hífen.
- Gerações por ordinal, por extenso: "na quarta geração", e não "na Gen 4".
- Siglas da comunidade (PP, HM, TM, IV, EV) não entram no enunciado; se o conceito importar, diga o que ele é.

### Atemporalidade

A franquia continua lançando jogos e pokémon. Nada de "o jogo mais recente", "a geração atual", "o último pokémon", "quantos pokémon existem", "quantas regiões há" nem de recordes de venda ou de audiência que ainda podem ser batidos. Contagens só de conjuntos fechados: "quantos pokémon tinha a primeira geração" vale.

### Fontes

A Bulbapedia é a referência da franquia, mas bloqueia acesso automatizado: o crítico não lê os trechos dela. Por isso, toda pergunta cita, além da Bulbapedia, uma página da **Wikipédia**, em inglês ou em português, que sustente o fato, sempre que houver uma. Uma pergunta só com a Bulbapedia depende do conhecimento do crítico e só passa com fato amplamente documentado.

### Distratores

Sempre da franquia: outros pokémon, personagens, lugares, itens ou jogos de Pokémon, de preferência da mesma geração ou de gerações vizinhas. Nunca uma alternativa de fora do universo Pokémon.
