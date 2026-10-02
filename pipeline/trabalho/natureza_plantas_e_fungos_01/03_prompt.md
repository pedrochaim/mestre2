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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Pau-brasil",
      "descricao": "Árvore nativa da Mata Atlântica, Paubrasilia echinata, cuja madeira vermelha deu nome ao Brasil"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O pau-brasil, que deu nome ao país, deve o próprio nome à cor vermelha da sua madeira. Que palavra está na origem desse nome?",
    "resposta": "Brasa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pau-brasil",
      "https://en.wikipedia.org/wiki/Paubrasilia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pau-brasil",
        "situacao": "ok",
        "texto": "O pau-brasil (atual Paubrasilia echinata (Lam.) Gagnon, H.C.Lima & G.P.Lewis, antiga Caesalpinia echinata Lam.), também chamado arabutã, ibirapiranga, ibirapitá, ibirapitanga, orabutã, pau-de-tinta, pau-pernambuco, pau-de-pernambuco e pau-rosado, é uma árvore leguminosa nativa da Mata Atlântica, no Brasil.\n[…]\nO nome vernáculo \"pau-brasil\", segundo alguns estudiosos, deriva do francês brésil, que deriva do toscano verzino, nome de pelo menos um tipo de madeira utilizada na tinturaria medieval na Itália, a madeira-de-sapão (Biancaea sappan). Verzino, por sua vez, deriva do árabe wars, que designa uma planta tintória do Iêmen. Outra versão aponta que a palavra se origina do português brasa, devido à tonalidade avermelhada ou abrasada da madeira.\n[…]\nQuanto ao nome científico, Paubrasilia é o gênero da árvore. Já echinata significa \"com espinhos\", uma referência ao fato de as vagens do pau-brasil terem acúleos, que são uma especialização da epiderme que se parece com espinhos.\n[…]\nO município pernambucano de São Lourenço da Mata é considerado a capital nacional do pau-brasil: na Estação Ecológica de Tapacurá, pertencente à Universidade Federal Rural de Pernambuco, foram plantadas 50 mil mudas da espécie. Também em Pernambuco está localizado o único museu destinado ao pau-brasil no país, no município de Glória do Goitá.\n[…]\nA resina vermelha era utilizada pela indústria têxtil europeia como uma alternativa aos corantes de origem terrosa e conferia aos tecidos uma cor de qualidade superior. Isto, aliado ao aproveitamento da madeira vermelha na marcenaria, criou uma demanda enorme no mercado , o que forçou uma rápida e devastadora \"caça\" ao pau-brasil nas matas brasileiras.\n[…]\nSímbolos do Brasil\n[…]\nPaubrasilia equinata na Flora do Brasil\n[…]\nCaesalpinia echinata (Instituto de Pesquisas e Estudos Florestais)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Paubrasilia",
        "situacao": "ok",
        "texto": "Paubrasilia echinata is a species of flowering plant in the legume family, Fabaceae, that is endemic to the Atlantic Forest of Brazil. It is a Brazilian timber tree commonly known as brazilwood (pau-brasil; Tupi: ybyrapytanga) and is the national tree of Brazil. This plant has a dense, orange-red heartwood that takes a high shine, and it is the premier wood used for making bows for stringed instru\n[…]\nThe name pau-brasil was applied to certain species of the genus Caesalpinia in the medieval period, and was given its original scientific name Caesalpinia echinata in 1785 by Jean-Baptiste Lamarck. More recent taxonomic studies have suggested that it merits recognition as a separate genus, and it was thus renamed Paubrasilia echinata in 2016. The Latin specific epithet of echinata refers to hedgehog, from echinus, and describes the thorns which cover all parts of the tree (including the fruits).\n[…]\nBotanically, several tree species are involved, all in the family Fabaceae (the pulse family). The term \"brazilwood\" is most often used to refer to the species Paubrasilia echinata, but it is also applied to other species, such as Biancaea sappan and Haematoxylum brasiletto. The tree is also known by other names: such as ibirapitanga, from Tupi\n[…]\nIn describing bows for string instruments, it is usual to refer to some species other than Paubrasilia echinata as \"brazilwood\"; examples include pink ipê (Handroanthus impetiginosus), massaranduba (Manilkara bidentata) and palo brasil (Haematoxylum brasiletto). The highly prized Paubrasilia echinata is usually called \"Pernambuco wood\" in this particular context.\n[…]\nData related to Paubrasilia at Wikispecies\n[…]\nAbout Pernambuco Wood from a bowmaker's website.\n[…]\nUSDA Plants Profile: Caesalpinia echinata\n[…]\nFlora Brasiliensis:  Caesalpinia echinata (in Portuguese)\n[…]\nInstituto de Pesquisas e Estudos Florestais: Caesalpinia echinata (in Portuguese)"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pau-brasil",
      "descricao": "Árvore nativa da Mata Atlântica, Paubrasilia echinata, cuja madeira vermelha deu nome ao Brasil"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o pau-brasil tem a ver com os violinos e violoncelos de concerto?",
    "resposta": "É a madeira dos arcos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Paubrasilia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paubrasilia",
        "situacao": "ok",
        "texto": "Paubrasilia echinata is a species of flowering plant in the legume family, Fabaceae, that is endemic to the Atlantic Forest of Brazil. It is a Brazilian timber tree commonly known as brazilwood (pau-brasil; Tupi: ybyrapytanga) and is the national tree of Brazil. This plant has a dense, orange-red heartwood that takes a high shine, and it is the premier wood used for making bows for stringed instru\n[…]\nThe name pau-brasil was applied to certain species of the genus Caesalpinia in the medieval period, and was given its original scientific name Caesalpinia echinata in 1785 by Jean-Baptiste Lamarck. More recent taxonomic studies have suggested that it merits recognition as a separate genus, and it was thus renamed Paubrasilia echinata in 2016. The Latin specific epithet of echinata refers to hedgehog, from echinus, and describes the thorns which cover all parts of the tree (including the fruits).\n[…]\nBotanically, several tree species are involved, all in the family Fabaceae (the pulse family). The term \"brazilwood\" is most often used to refer to the species Paubrasilia echinata, but it is also applied to other species, such as Biancaea sappan and Haematoxylum brasiletto. The tree is also known by other names: such as ibirapitanga, from Tupi\n[…]\nIn describing bows for string instruments, it is usual to refer to some species other than Paubrasilia echinata as \"brazilwood\"; examples include pink ipê (Handroanthus impetiginosus), massaranduba (Manilkara bidentata) and palo brasil (Haematoxylum brasiletto). The highly prized Paubrasilia echinata is usually called \"Pernambuco wood\" in this particular context.\n[…]\nData related to Paubrasilia at Wikispecies\n[…]\nAbout Pernambuco Wood from a bowmaker's website.\n[…]\nUSDA Plants Profile: Caesalpinia echinata\n[…]\nFlora Brasiliensis:  Caesalpinia echinata (in Portuguese)\n[…]\nInstituto de Pesquisas e Estudos Florestais: Caesalpinia echinata (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paubrasilia_echinata",
        "situacao": "ok",
        "texto": "O pau-brasil (atual Paubrasilia echinata (Lam.) Gagnon, H.C.Lima & G.P.Lewis, antiga Caesalpinia echinata Lam.), também chamado arabutã, ibirapiranga, ibirapitá, ibirapitanga, orabutã, pau-de-tinta, pau-pernambuco, pau-de-pernambuco e pau-rosado, é uma árvore leguminosa nativa da Mata Atlântica, no Brasil.\n[…]\nAfirmam alguns historiadores que o corte do pau-brasil para a obtenção de sua madeira e sua resina (extraída para uso como tintura em manufaturas de tecidos de alto luxo) foi a primeira atividade econômica dos colonos portugueses na recém-descoberta Terra de Santa Cruz, no século XVI e que a abundância desta árvore no meio a imensidão das florestas inexploráveis teria conferido à colônia o nome de Brasil.\n[…]\nA extração de madeira tornou-se alvo de muito lucrativo comércio e contrabando, inclusive com corsários franceses atacando navios portugueses. Foi uma das expedições de corsários liderada por Nicolas Durand de Villegaignon, em 1555, que estabeleceu uma colônia que hoje se chama Rio de Janeiro (a França Antarctica). A planta foi citada em Flora Brasiliensis por Carl Friedrich Philipp von Martius.\n[…]\nA resina vermelha era utilizada pela indústria têxtil europeia como uma alternativa aos corantes de origem terrosa e conferia aos tecidos uma cor de qualidade superior. Isto, aliado ao aproveitamento da madeira vermelha na marcenaria, criou uma demanda enorme no mercado , o que forçou uma rápida e devastadora \"caça\" ao pau-brasil nas matas brasileiras.\n[…]\nEm pouco menos de um século, já não havia mais árvores suficientes para suprir a demanda, e a atividade econômica foi deixada de lado, embora espécimens continuassem a ser abatidos ocasionalmente para a utilização da madeira (até os dias de hoje, usada na confecção de arcos para violino e móveis finos).\n[…]\nSímbolos do Brasil",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Abacaxi",
      "descricao": "Fruta tropical da planta Ananas comosus, nativa da América do Sul"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Pineapple, o nome do abacaxi em inglês, compara a fruta a que coisa?",
    "resposta": "Pinha, o cone do pinheiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pineapple"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pineapple",
        "situacao": "ok",
        "texto": "The pineapple (Ananas comosus) is a tropical plant with an edible fruit; it is the most economically significant plant in the family Bromeliaceae.\n[…]\nThe word pine apple was used by English explorer John Smith referring to the tropical fruit in 1624. The word apple was given during his time for any unfamiliar tree fruit that had a firm, round shape; a pine apple first referred to the cone (fruit) of the pine tree in the 14th century. Gonzalo Hernández Oviedo described the piñas or pomme de pin (\"apple of pine\") in Hispaniola around 1540.\n[…]\nWhen it was first discovered by explorers, the Tupi-Guarani and Carib people used it as a staple food with the name, nanas. This usage was adopted in many European languages and led to the plant's scientific binomial Ananas comosus, where comosus ('tufted') refers to the stem of the plant.\n[…]\nPineapple vinegar is an ingredient found in both Honduran and Filipino cuisine, where it is produced locally. In Mexico, it is usually made with peels from the whole fruit, rather than the juice; however, in Taiwanese cuisine, it is often produced by blending pineapple juice with grain vinegar.\n[…]\nThe consumption of pineapple juice in China and India is low compared to their populations.\n[…]\nThe variety A. comosus 'Variegatus' is occasionally grown as a houseplant. It needs direct sunlight and thrives at temperatures of 18 to 24 °C (64 to 75 °F), with a minimum winter temperature of 16 °C (61 °F). It should be kept humid, but the soil should be allowed to dry out between waterings. It has almost no resting period but should be repotted each spring until the container reaches 20 cm (8 in)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anan%C3%A1s",
        "situacao": "ok",
        "texto": "Ananás (português europeu) ou abacaxi (português brasileiro) (Ananas comosus) é uma infrutescência tropical produzida pela planta de mesmo nome, caracterizada como uma planta monocotiledônea da família das bromeliáceas da subfamília Bromelioideae. É um símbolo das regiões tropicais e subtropicais. Os abacaxizeiros cultivados pertencem à espécie Ananas comosus, que compreende muitas variedades frut\n[…]\nApesar do que dita o senso comum, o abacaxi não é uma fruta cítrica.\n[…]\nEm Portugal, o termo \"abacaxi\" é usado para distinguir a fruta importada da América do Sul e Central da fruta cultivada localmente, normeadamente nos Açores.\n[…]\nQuanto a doenças, a mais grave e de de ocorrência generalizada é a fusariose ou gomose, causada pelo fungo Fusarium subglutinans\" f. sp. \"ananas e que pode provocar grandes prejuízos. Entre outras doenças importantes citam-se a murcha, causado pelo vírus PMWaV (Pineapple Mealybug Wilt-associated Virus) e a podridão-do-olho, causado pelo fungo Phytophthora nicotianae var. parasitica.\n[…]\nOutro fato típico de cultura do abacaxi brasileira é o deslocamento constante das áreas de produção, devido ao aparecimento de problemas fitossanitários. A grande maioria dos abacaxis produzidos no Brasil é destinada ao consumo interno, como fruta fresca. São Paulo e os estados do Sul absorvem grande parte das produções de abacaxi da Paraíba, Minas Gerais e Tocantins.\n[…]\nAs espécies selvagens de abacaxis e suas variedades principais são: Ananas ananassoides, var. nanus (ananaí-da-amazônia) e var. typicus (ananás-do-campo); A. bracteatus, var. albus (ananás-branco-do-mato), var. rudis (ananás-vermelho-do-mato), e var. tricolor; A. fritzmuelleri e A. lucidus (curauá-da-amazônia). Todos têm as margens das folhas armadas de espinhos, exceto a última, nas quais, praticamente, só existe um acúleo terminal.\n[…]\nOutros tipos de abacaxis\n[…]\nToda Fruta\n[…]\n«Levins» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Tulipa",
      "descricao": "Gênero de plantas bulbosas de flores vistosas, Tulipa, nativo da Ásia Central e da Turquia"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome tulipa chegou ao Ocidente pelo turco e vem de uma palavra persa que designava que peça usada na cabeça?",
    "resposta": "Turbante",
    "distratores": [
      "Véu",
      "Coroa",
      "Chapéu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tulip"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tulip",
        "situacao": "ok",
        "texto": "Tulips are spring-blooming perennial herbaceous bulbiferous geophytes in the Tulipa genus. Their flowers are usually large, showy, and brightly coloured, generally red, orange, pink, yellow, or white. They often have a different coloured blotch at the base of the tepals, internally. Because of a degree of variability within the populations and a long history of cultivation, classification has been\n[…]\nThere are about 75 species, and these are divided among four subgenera. The name \"tulip\" is thought to be derived from a Turkish word for turban, which it may have been thought to resemble by those who discovered it. Tulips were originally found in a band stretching from Southern Europe to Central Asia, but since the seventeenth century have become widely naturalised and cultivated (see map). In their natural state, they are adapted to steppes and mountainous areas with temperate climates.\n[…]\nTulipa (52 species)\n[…]\nThe word tulip, first mentioned in western Europe in or around 1554 and seemingly derived from the \"Turkish Letters\" of diplomat Ogier Ghiselin de Busbecq, first appeared in English as tulipa or tulipant, entering the language by way of French: tulipe and its obsolete form tulipan or by way of Modern Latin tulipa, from Ottoman Turkish tülbend (\"muslin\" or \"gauze\"), and may be ultimately derived from the Persian: دُلبند dulband (\"Turban\"), this name being applied because of a perceived resemblance of the shape of a tulip flower to that of a turban.\n[…]\nThis may have been due to a translation error in early times when it was fashionable in the Ottoman Empire to wear tulips on turbans. The translator possibly confused the flower for the turban.\n[…]\nPeople who handle tulip bulbs extensively can develop contact dermatitis, known as \"tulip fingers\", caused by the defensive chemical tulipalin A. The petals are edible to humans, as are the leaves, although some people are allergic."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tulipa",
        "situacao": "ok",
        "texto": "Tulipa L. é um género de plantas angiospermas (plantas com flores) da família das liláceas.\n[…]\nNo entanto, a flor é presente na cultura dos Países Baixos, principalmente por grandes campos em Keukenhof, que é onde está presente uma grande parte de tulipas.\n[…]\nEmbora as tulipas não se adaptem bem ao clima brasileiro, é possível induzir a planta a dar, pelo menos, mais uma floração, simulando as condições climáticas do seu habitat natural para estimular os bolbos a rebrotarem.\n[…]\nPara isso, ao adquirir um vaso de tulipas dê preferência aos que ainda estejam com as flores em botão, permitindo-lhe usufruir da beleza da flor por mais tempo. O vaso deverá ser conservado em um local fresco e com luminosidade, evitando-se os ventos e o sol forte. Alguns colocam algumas pedras de gelo sobre o substrato (mistura de terra) no vaso, pela manhã e ao entardecer, a fim de diminuir o excesso de calor.\n[…]\nTulipa linifolia\n[…]\nTulipa praestans\n[…]\nTulipa saxatilis\n[…]\nVírus do mosaico da tulipa\n[…]\n«Híbridos das Tulipas». (em alemão)\n[…]\n(em inglês) Referência ITIS: Tulipa\n[…]\n(em inglês) Referência NCBI Taxonomy: Tulipa\n[…]\n(em inglês) Referência GRIN gênero Tulipa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Maracujá",
      "descricao": "Fruto das trepadeiras do gênero Passiflora, cujas flores são chamadas de flor-da-paixão"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Missionários espanhóis chamaram a flor do maracujá de flor-da-paixão porque viram nela símbolos de qual episódio cristão?",
    "resposta": "A crucificação de Jesus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Passiflora"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Passiflora",
        "situacao": "ok",
        "texto": "Passiflora, known also as the passion flowers or passion vines, is a genus of about 550 species of flowering plants, and the type genus of the family Passifloraceae.\n[…]\nThe blue passionflower (Passiflora caerulea) produces bright orange fruit with numerous seeds. While the fruit is edible, it is often described as being bland in comparison to other edible passionfruit, or with a flavour vaguely similar to blackberries.\n[…]\nWild maracuja are the fruit of P. foetida, which are popular in Southeast Asia.\n[…]\nThe passion in passion flower purportedly refers to the passion of Jesus in Christian theology; the word passion comes from the Latin passio, meaning 'suffering'. In the 15th and 16th centuries, Spanish Christian missionaries adopted the unique physical structures of this plant, particularly the numbers of its various flower parts, as symbols of the last days of Jesus and especially his crucifixion:\n[…]\nThe ten petals and sepals represent the ten faithful apostles (excluding St. Peter, who denied Jesus three times, and Judas Iscariot, who betrayed him).\n[…]\nIn addition, the flower is open for three days, symbolising the three years of Jesus' ministry.\n[…]\nThe flower has been given names related to this symbolism throughout Europe since the 15th century. In Spain, it is known as espina de Cristo ('thorn of Christ'). Older Germanic names include Christus-Krone ('Christ's crown'), Christus-Strauss ('Christ's bouquet'), Dorn-Krone ('crown of thorns'), Jesus-Lijden ('Jesus' passion'), Marter ('passion') or Muttergottes-Stern ('Mother of God's star').\n[…]\nChilean Passiflora pictures\n[…]\nA list of Heliconius Butterflies and the Passiflora species their larvae consume"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Passiflora",
        "situacao": "ok",
        "texto": "A flor-da-paixão (Passiflora) é um género botânico de cerca de 500 espécies de plantas, pertencente à família  Passifloraceae. São, em sua maioria, trepadeiras; algumas são arbustos, e algumas poucas espécies são herbáceas e são mais conhecidas pelo seu fruto, o maracujá.\n[…]\nA flor da maioria das passifloras decorativas tem uma estrutura única, que requer uma abelha de grande porte para ser efetivamente polinizada. O tamanho e estrutura de flores das diferentes espécies de passiflora são variáveis. Algumas espécies podem ser polinizadas por beija-flores, outras por mamangavas e vespas (do gênero Xylocopa), e, ainda, algumas espécies são auto-polinizantes.\n[…]\nA abelha doméstica atrapalha a polinização do maracujazeiro, pois leva o pólen embora e não é suficientemente grande para polinizá-lo. As espécies de passiflora são usadas como alimento pelas larvas de mariposa, Cibyra serta e muitas borboletas Heliconiinae.\n[…]\nA Passiflora é uma planta originária da América Tropical que precisa de temperaturas elevadas e aclimata-se bem somente em Regiões Temperadas. Suas flores lembram os instrumentos utilizados na crucificação de Cristo, por esse motivo é conhecida em outros idiomas por Flor-da-paixão.\n[…]\nO extrato de maracujá (Passiflora incarnata), é indicado no tratamento de insônia, irritação, agitação e impaciência nervosa.\n[…]\nAs folhas e raízes do maracujazeiro possuem a maracujina, a passiflorina e calmofilase, e princípios farmacêuticos muito utilizados como sedativos, antiespamódicos, anti-inflamatório, depurativos e suas sementes atuam como vermífucos.\n[…]\nCervi, A.C., Milward-de-Azevedo, M.A., Bernacci, L.C., Nunes, T.S. [2011]:.Passifloraceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro.[1][ligação inativa]",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Kiwi",
      "descricao": "Fruto comestível de trepadeiras do gênero Actinidia, nativo da China"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de receber o nome de uma ave da Nova Zelândia, a fruta kiwi era vendida como groselha de qual país?",
    "resposta": "China",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kiwifruit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kiwifruit",
        "situacao": "ok",
        "texto": "Kiwifruit (often shortened to kiwi), or Chinese gooseberry (traditional Chinese: 獼猴桃; simplified Chinese: 猕猴桃; pinyin: míhóutáo), is the edible berry of several species of woody vines in the genus Actinidia. The most common cultivar group of kiwifruit (Actinidia chinensis var. deliciosa 'Hayward') is oval, about the size of a large hen's egg: 5–8 centimetres (2–3 inches) in length and 4.5–5.5 cm (\n[…]\nJintao is a variety of golden kiwifruit developed in China from wild Actinidia chinensis var. chinensis vines. Created in the 1980s by researchers at the Wuhan Botanical Garden, it was introduced to Europe for evaluation in 1998 through an EU-funded project (INCO-DC). Between 1998 and 2000, it was evaluated in collaboration with institutions such as I.N.R.A. in Bordeaux (France), the University of Thessaloniki (Greece), and the University of Udine (Italy).\n[…]\nRed kiwifruits are cultivars of Actinidia chinensis var. chinensis, distinguished by their red coloured flesh. Its origin can be traced back to China from a natural mutation of gold kiwifruit found in the wild in 1982, which became the Hongyang variety, China's first commercially viable red kiwifruit cultivar. By 2020, Hongyang became the most grown kiwifruit cultivar in China across all types and varieties.\n[…]\nIn 1978, China began developing its own kiwifruit cultivars. The Wuhan Botanical Garden, part of the Chinese Academy of Sciences (CAS), played a large role in breeding and improving domestic varieties suited to local conditions. Commercial cultivation initially began in the early 1980s on less than one hectare using the Hayward variety from New Zealand.\n[…]\nTraditionally in China, kiwifruit was not eaten for pleasure but was given as medicine to children to help them grow and to women who had given birth to help them recover.\n[…]\nMedia related to Kiwifruit at Wikimedia Commons\n[…]\nData related to Actinidia at Wikispecies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Actinidia_deliciosa",
        "situacao": "ok",
        "texto": "Actinidia deliciosa, conhecido como quiuí, quivi ou kiwi é uma espécie de planta frutífera, originária do sul da China, cujo fruto é botanicamente classificado como uma baga. São plantas típicas de locais com clima temperado ou subtropical de montanha. As variedades de fruto mais amplamente comercializadas são produzidas por diversos cultivares da espécie Actinidia deliciosa e, em muito menor quan\n[…]\nTanto a Actinidia deliciosa como a Actinidia chinensis são nativas do sul da China, tendo o Kiwi sido declarado o \"fruto nacional\" da República Popular da China.\n[…]\nOutras espécies de Actinidia são também nativas da China, com uma distribuição que se estende para leste até o Japão e para norte e noroeste até o sueste da Sibéria.\n[…]\nO cultivar mais comum, o Actinidia deliciosa 'Hayward', foi produzido por Hayward Wright em Avondale, Nova Zelândia, por volta de 1924. Era inicialmente cultivado apenas em pomares domésticos, mas a plantação comercial começou na década de 1940, sendo vendido com o nome de groselha chinesa (Chinese gooseberry).\n[…]\nHoje, na Europa e na América, o produto é comercializado com o nome de kiwi, originalmente uma palavra maori que designa uma ave terrestre endémica na Nova Zelândia, usada como símbolo daquele país. A partir do nome \"groselha chinesa\", em meados do século XX o fruto foi rebatizado na Nova Zelândia, o primeiro país onde foi produzido comercialmente em larga escala, passando a designar-se por kiwi.\n[…]\nA Itália é, hoje, o maior produtor mundial do fruto, seguida pela Nova Zelândia, Chile, França, Grécia, Japão e Estados Unidos. O kiwi é também produzido na China, a sua terra de origem, mas aquele país nunca conseguiu integrar a lista dos 10 maiores produtores mundiais. Na China, é cultivado principalmente na região montanhosa em torno do rio Iangtzé. Outra região produtora é a província de Sichuan.\n[…]\nKiwi\n[…]\nPágina oficial da Seeka Kiwifruit Industries",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Orquídea",
      "descricao": "Planta da família Orchidaceae, uma das maiores famílias de plantas com flores"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por causa do formato das raízes, o nome orquídea vem de uma palavra grega que significa o quê?",
    "resposta": "Testículo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Orchid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Orchid",
        "situacao": "ok",
        "texto": "Orchids are plants that belong to the family Orchidaceae (), a diverse and widespread group of flowering plants with blooms that are often colourful and fragrant. Orchids are cosmopolitan plants, living in diverse habitats on every continent except Antarctica. The world's richest diversity of orchid genera and species is in the tropics. Many species are epiphytes, living on trees.\n[…]\nThe type genus (i.e. the genus after which the family is named) is Orchis. The genus name comes from the Ancient Greek ὄρχις (órkhis), literally meaning \"testicle\", because of the shape of the twin tubers in some species of Orchis. The term \"orchid\" was introduced in 1845 by John Lindley in School Botany, as a shortened form of Orchidaceae. In Middle English, the name bollockwort was used for some orchids, based on \"bollock\" meaning testicle and \"wort\" meaning plant.\n[…]\nSince this subfamily occurs worldwide in tropical and subtropical regions, from tropical America to tropical Asia, New Guinea and West Africa, and the continents began to split about 100 million years ago, significant biotic exchange must have occurred after this split. Biogeographic studies indicate that the most recent common ancestor of all extant orchids probably originated 83 million years ago somewhere in the supercontinent Laurasia.\n[…]\nSome orchids, such as Neottia and Corallorhiza, lack chlorophyll, so are unable to photosynthesise. Instead, these species obtain energy and nutrients by parasitising soil fungi through the formation of orchid mycorrhizae. The fungi involved include those that form ectomycorrhizas with trees and other woody plants, parasites such as Armillaria, and saprotrophs.\n[…]\nOrchidaceae at the online Flora of Zimbabwe\n[…]\nOrchidaceae at the online Flora of New Zealand Archived 25 May 2017 at Archive-It\n[…]\nThe Global Orchid Information Network\n[…]\nOrchid Conservation Coalition"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Orqu%C3%ADdea",
        "situacao": "ok",
        "texto": "Orquídeas são todas as plantas que compõem a família Orchidaceae, pertencente à ordem Asparagales, uma das maiores famílias de plantas existentes. Apresentam muitíssimas e variadas formas, cores e tamanhos e existem em todos os continentes, exceto na Antártida, predominando nas áreas tropicais. Não são plantas parasitas, nutrindo-se apenas de material em decomposição que cai das árvores e acumula-\n[…]\nO nome orquídea vem do grego όρχις (órkhis) que significa testículo e ειδος (eidos) que significa: aspecto, forma; em referência ao formato dos dois pequenos tubérculos que as espécies do gênero Orchis apresentam. Como este gênero foi o primeiro gênero de orquídeas a ser formalmente descrito, dele derivou o nome de toda a família.\n[…]\nNa Europa existem registros do período clássico grego de Teofrasto de Lesbos, cerca de 300 AC. Em seu trabalho Historia Plantarum, volume 9, descreve uma planta com dois pequenos tubérculos subterrâneos aos quais chama orchis, que corresponde à palavra testículos, possivelmente um exemplar de Anacamptis morio.\n[…]\nAssim, o modo mais simples (e menos eficiente) de reprodução por sementes é simplesmente espalhá-las sobre e ao redor das raízes de orquídeas adultas, assegurando-se de que tenham umidade constante.\n[…]\nOutro método caseiro de se obter mudas de orquídeas a partir de sementes é através de um processo que utiliza um tomate livre de agrotóxicos, um saco plástico, uma placa de fibra de coco, água, raízes da planta e sementes da cápsula. Descasca-se o tomate, macere-o, misture algumas raízes da orquídea a ser reproduzida e as sementes que estão na cápsula macere-as junto com o tomate e em seguida espalhe sobre a placa de fibra de coco que já deverá estar umedecida com a água.\n[…]\n«Orchidstudium - Enciclopédia em português com espécies de orquídeas.»\n[…]\n«New and rare orchids (Orchidaceae) in the flora of Cambodia and Laos.» (PDF) (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Cravo-da-índia",
      "descricao": "Botão floral seco da árvore Syzygium aromaticum, usado como tempero"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O tempero cravo-da-índia tem esse nome porque o seu botão seco lembra que objeto?",
    "resposta": "Prego",
    "fonte": [
      "https://en.wikipedia.org/wiki/Clove"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Clove",
        "situacao": "ok",
        "texto": "Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum (). They are native to the Maluku Islands, or Moluccas, in Indonesia, and are commonly used as a spice, flavoring, or fragrance in consumer products, such as toothpaste, soaps, or cosmetics. Freshly harvested cloves are available throughout the year owing to different harvest seasons across various countries\n[…]\nOne review reported the efficacy of eugenol combined with zinc oxide as an analgesic for alveolar osteitis. Studies to determine its effectiveness for fever reduction, as a mosquito repellent, and to prevent premature ejaculation have been inconclusive. It remains unproven whether blood sugar levels are reduced by cloves or clove oil. The essential oil may be used in aromatherapy.\n[…]\nDuring the colonial era, cloves were traded like oil, with an enforced limit on exportation. As the Dutch East India Company consolidated its control of the spice trade in the 17th century, they sought to gain a monopoly in cloves as they had in nutmeg. However, \"unlike nutmeg and mace, which were limited to the minute Bandas, clove trees grew all over the Moluccas, and the trade in cloves was beyond the limited policing powers of the corporation\".\n[…]\nOne clove tree named Afo that experts believe is the oldest in the world on Ternate may be 350–400 years old. Seedlings from this very tree were stolen by clerk of the French India Company Provost and sailors Trémignon and d'Etchèvery under the instruction of Pierre Poivre in 1770. They were brought to the Isle de France (Mauritius) and the Seychelles, and then sent to French Guiana to protect them from war and death. Cloves then spread to Martinique and Saint-Domingue.\n[…]\n\"Syzygium aromaticum\". Plants for a Future."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cravo-da-%C3%ADndia",
        "situacao": "ok",
        "texto": "Syzygium aromaticum, comummente conhecido cravo-da-índia, é uma árvore de folha perene, da família das Mirtáceas.\n[…]\nAlém de «cravo-da-índia-», dá ainda pelos seguintes nomes comuns: cravinho-da-índia; craveiro-da-índia, cravoária, girofle  e cravo-da-índia-aromático.\n[…]\nOs cravinhos-da-índia têm sido utilizado, há mais de 2000 anos, como uma planta medicinal. Os chineses acreditavam em seu poder afrodisíaco. O óleo de cravo-da-índia é um potente antisséptico. Seus efeitos medicinais compreendem o tratamento de náuseas, flatulências, indigestão, diarreia, têm propriedades bactericidas, e são também usados como anestésico e antisséptico para o alívio de dores de dente. O Professor Gary Elmer, Ph. D.\n[…]\nO óleo essencial é utilizado na aromaterapia, quando a estimulação e o aquecimento são necessários, principalmente para problemas digestivos. A aplicação tópica sobre o estômago ou no abdómen são ditas para aquecer o aparelho digestivo. Crê-se que também ajuda a diminuir a infecção nos dentes devido às suas propriedades antissépticas. Óleo de cravo-da-índia, aplicado a uma cavidade de um dente cariado, também alivia a dor de dentes.\n[…]\nEstudos ocidentais têm apoiado o uso de dentes e óleo de cravo-da-índia para dor de dente. No entanto, estudos para determinar sua eficácia para a redução da febre, como um repelente contra mosquitos e evitar a ejaculação precoce foram inconclusivos. O cravinho pode reduzir os níveis de açúcar no sangue.\n[…]\n«JardimDeFlores.com - Cravo-daíndia»\n[…]\n«Aspectos Químicos e Biológicos do Óleo Essencial de Cravo da Índia» (PDF)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Penicillium",
      "descricao": "Gênero de fungos de bolor do qual se obteve a penicilina"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O fungo Penicillium, de onde veio a penicilina, tem nome derivado da palavra latina para que objeto?",
    "resposta": "Pincel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Penicillium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Penicillium",
        "situacao": "ok",
        "texto": "Penicillium () is a genus of  ascomycetous fungi that is part of the mycobiome of many species and is of major importance in the natural environment, in food spoilage, and in food and drug production.\n[…]\nThe ability of these Penicillium species to grow on seeds and other stored foods depends on their propensity to thrive in low humidity and to colonize rapidly by aerial dispersion while the seeds are sufficiently moist. Some species have a blue color, commonly growing on old bread and giving it a blue fuzzy texture.\n[…]\nThis finding was based, in part, on evidence for functional mating type (MAT) genes that are involved in fungal sexual compatibility, and the presence in the sequenced genome of most of the important genes known to be involved in meiosis. Penicillium chrysogenum is of major medical and historical importance as the original and present-day industrial source of the antibiotic penicillin.\n[…]\nThese findings with Penicillium species are consistent with accumulating evidence from studies of other eukaryotic species that sex was likely present in the common ancestor of all eukaryotes. Furthermore, these recent results suggest that sex can be maintained even when very little genetic variability is produced.\n[…]\nPrior to 2013, when the \"one fungus, one name\" nomenclature change came into effect, Penicillium was used as the genus for anamorph (clonal forms) of fungi and Talaromyces was used for the teleomorph (sexual forms) of fungi. After 2013 however, fungi were reclassified based on their genetic relatedness to each other and now the genera Penicillium and Talaromyces both contain some species capable of only clonal reproduction and others that can reproduce sexually."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Penicillium",
        "situacao": "ok",
        "texto": "O Penicillium é um gênero de fungos, o comum bolor do pão, que cresce em matéria orgânica especialmente no solo e outros ambientes úmidos e escuros. Por contágio, contaminam frutas e sementes e chegam a invadir habitações, sendo responsáveis pelos bolores que se instalam em alimentos para consumo humano.\n[…]\nAlém da penicilina, outras espécies de penicillium tem valor econômico, especialmente na produção de queijos e vinhos. A ingestão do seu mofo não é considerado pejorativo à saúde humana.\n[…]\nA penicilina foi descoberta por acaso pelo cientista Alexander Fleming em 1928, quando realizava pesquisas com bactérias. Ele observou que esporos de fungos Penicillium notatum haviam caído na preparação e estavam impedindo o desenvolvimento das bactérias.\n[…]\nAlgumas espécies de Penicillium causam infecções na pele e na via respiratória do homem, nomeadamente em indivíduos imunodeprimidos, como por exemplo os doentes com síndrome de imunodeficiência adquirida (SIDA ou AIDS).\n[…]\nÉ o Penicillium marneffei que causa a mais frequente peniciliose, com infecção dos pulmões (pneumonia). É um fungo comum nos solos em algumas regiões, é o único Penicillium com forma dimórfica, em hifas ou leveduras que alterna de acordo com a temperatura. A forma do solo é normalmente a hifa, e dentro dos seres vivos a levedura. É parasita normalmente do rato Rhizomis sinisensis.\n[…]\nA peniciliose é semelhante à criptococose, com febre e anemia.\n[…]\nPenicillium glaucum usado para fazer queijo Gorgonzola.\n[…]\nPenicillium candida usado para fazer queijos Brie e Camembert\n[…]\nPenicillium roqueforti usado para fazer queijo Roquefort.\n[…]\nPenicillium bilaiae\n[…]\nPenicillium camemberti usado para fazer queijos Brie e Camembert\n[…]\nO fungo Penicillium Notatum faz parte da relação ecológica desarmônica chamada Amensalismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Cacau",
      "descricao": "Árvore Theobroma cacao, cujas sementes são a matéria-prima do chocolate"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Theobroma, o nome científico do cacau, significa em grego alimento de quem?",
    "resposta": "Dos deuses",
    "fonte": [
      "https://en.wikipedia.org/wiki/Theobroma_cacao"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Theobroma_cacao",
        "situacao": "ok",
        "texto": "Theobroma cacao (cacao tree or cocoa tree) is a small (6–12 m (20–39 ft) tall) evergreen tree in the Malvaceae family. Its seeds—cocoa beans when dried and fermented—are used to make chocolate liquor, cocoa powder, cocoa butter and chocolate. Although the tree is native to the tropics of the Americas, the largest producer of cocoa beans in 2022 was Côte d'Ivoire.\n[…]\nThe cacao bean in 80% of chocolate is made using beans of the Forastero group, the main and most ubiquitous variety being the Amenolado variety, while the Arriba variety (such as the Nacional variety) are less commonly found in Forastero produce. Forastero trees are significantly hardier and more disease-resistant than Criollo trees, resulting in cheaper cacao beans.\n[…]\nPhytopathogens (parasitic organisms) cause much damage to Theobroma cacao plantations around the world. Many of those phytopathogens, which include many of the pests named below, were analyzed using mass spectrometry and allow for guiding on the correct approaches to get rid of the specific phytopathogens. This method was found to be quick, reproducible, and accurate showing promising results in the future to prevent damage to Theobroma cacao by various phytopathogens.\n[…]\nMany genes were identified as coding for flavonoids, aromatic terpenes, theobromine and many other metabolites involved in cocoa flavor and quality traits, among which a relatively high proportion code for polyphenols, which constitute up to 8% of cacao pods dry weight.\n[…]\nThe Nahuatl-derived Spanish word cacao entered scientific nomenclature in 1753 after the Swedish naturalist Linnaeus published his taxonomic binomial system and coined the genus and species Theobroma cacao. Traditional pre-Hispanic beverages made with cacao are still consumed in Mesoamerica. These include the Oaxacan beverage known as tejate.\n[…]\nTheobroma grandiflorum, the white cacao"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cacau",
        "situacao": "ok",
        "texto": "O cacaueiro (nome científico: Theobroma cacao) é a árvore perenifólia que dá origem ao fruto chamado cacau.\n[…]\nEm um levantamento realizado em cabrucas por Lobão em 2007 no sul baiano, foram encontradas integradas ao sistema cacau-cabruca espécies de árvore consideradas raras, como o jequitibá-rosa (Cariniana legalis), o pau-brasil (Caesalpinea echinata) - que é uma espécie ameaçada de extinção - e a gameleira (Ficus gomelleira), que é uma espécie de importância sócio-ecológica, já que seus ramos jovens servem de alimento à preguiças e práticas religiosas afro-brasileiras estão associadas a ela.\n[…]\nÉ digno de nota o fato de que maior jequitibá-rosa de que se tem notícia atualmente foi encontrado em um sistema cacau cabruca na região cacaueira da Bahia.\n[…]\nAs sementes do cacau são os ingredientes fundamentais para a produção da manteiga de cacau, do liquor de cacau e do chocolate, alimentos cuja qualidade depende principalmente dos fatores genéticos e ambientais do cacau, como também do pré-processamento do fruto, que compreende a colheita e abertura do mesmo, a retirada das sementes, a extração da polpa, a fermentação das sementes e a secagem e o armazenamento das amêndoas, etapas que ocorrem ainda na fazenda.\n[…]\nPosteriormente, as mesmas são transportadas até as indústrias produtoras de chocolate, onde vão ser processadas e dar origem aos alimentos derivados do cacau.\n[…]\nTecnologia de alimentos\n[…]\n«Gráficos sobre a produção mundial de cacau» (em inglês) [ligação inativa]\n[…]\n«Theobroma cacao (University of Louisiana)» (em inglês)\n[…]\n«Theobroma cacao (Purdue University)» (em inglês)\n[…]\nPreços do cacao",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Mamona",
      "descricao": "Planta Ricinus communis, de cujas sementes se extrai o óleo de rícino"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Ricinus, o nome científico da mamona, é a palavra latina para qual bicho, por causa do aspecto da semente?",
    "resposta": "Carrapato",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ricinus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ricinus",
        "situacao": "ok",
        "texto": "Ricinus communis, the castor bean or castor oil plant, is a species of perennial flowering plant in the spurge family, Euphorbiaceae. It is the sole species in the monotypic genus, Ricinus, and subtribe, Ricininae.\n[…]\nRicinus communis is the host plant of the common castor butterfly (Ariadne merione), the eri silkmoth (Samia cynthia ricini), and the castor semi-looper moth (Achaea janata). It is also used as a food plant by the larvae of some other species of Lepidoptera, including Hypercompe hambletoni and the nutmeg (Discestra trifolii). A jumping spider Evarcha culicivora has an association with R. communis. They consume the nectar for food and preferentially use these plants as a location for courtship.\n[…]\nAs an anti-microbial. The high percentage of ricinoleic acid residues in castor oil and its derivatives, inhibits many microbes, whether viral, bacterial or fungal. They accordingly are useful components of many ointments and similar preparations.\n[…]\nExtract of  Ricinus communis exhibited acaricidal and insecticidal activities against the adult of Haemaphysalis bispinosa (Acarina: Ixodidae) and hematophagous fly Hippobosca maculata (Diptera: Hippoboscidae).\n[…]\nRicinus communis  leaves are used in botanical printing (also known as ecoprinting) in Asia. When bundled with cotton or silk fabric and steamed, the leaves can produce a green-colored imprint.\n[…]\nIn traditional Nigerian cuisine, fermented castor bean paste is the spice ogiri, used to flavor soups. The preparation involves careful detoxification of the beans.\n[…]\nRicinus communis L. – at Purdue University\n[…]\nRicinus communis (castor bean) at Cornell University\n[…]\nRicinus communis Archived 8 December 2016 at the Wayback Machine in Wildflowers of Israel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mamona",
        "situacao": "ok",
        "texto": "A Ricinus communis L., conhecida popularmente como mamona, pé-de-mamona, mamoneira, carrapateira, carrapato e rícino, é uma planta da família das euforbiáceas, originária da Ásia Meridional, e sua semente é conhecida como mamona ou carrapato. Recebe outras designações: em algumas regiões da África é abelmeluco, na língua inglesa é castor bean, na língua espanhola é ricino, higuerilla, higuereta e \n[…]\nSeu principal produto derivado é o óleo de mamona, também chamado óleo de rícino. Embora seja usado na medicina popular como purgativo, este óleo possui largo emprego na indústria química devido a uma característica peculiar: possui uma hidroxila (OH) ligada na cadeia de carbono. Não existe outro óleo vegetal produzido comercialmente com esta propriedade. Há plantas do gênero Lesquerella que também produzem óleo hidroxilado, mas ainda não são cultivadas comercialmente.\n[…]\nOutra importante propriedade do óleo de mamona é ser composto entre 80 e 90 por cento por um único ácido graxo (ácido ricinoleico), o qual lhe confere alta viscosidade e solubilidade em álcool a baixa temperatura. Pode ser utilizado como matéria prima para o biodiesel, mas a quase totalidade do óleo produzido no mundo tem sido utilizado pela indústria química para produtos de maior valor agregado.\n[…]\nO Biodiesel feito a partir da mamona é considerado um dos melhores do mercado por ser o mais denso e viscoso e pela sua característica de ser o único óleo glicerídico solúvel em álcool a baixas temperaturas.\n[…]\n\"Mamona\" é um termo originário do termo quimbundo mumono, com influência da palavra \"mamão\" devido provavelmente à semelhança das folhas da mamona com as folhas do mamão.\n[…]\nEmbrapa: Mamona\n[…]\nPortal da Mamona - Tudo sobre a mamona\n[…]\nPlantas Tóxicas - Mamona\n[…]\nMamona em teto verde\n[…]\nRicinus communis Purdue University",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Mamona",
      "descricao": "Planta Ricinus communis, de cujas sementes se extrai o óleo de rícino"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que veneno potente, já usado em atentados, é extraído das sementes da mamona?",
    "resposta": "Ricina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ricin",
      "https://en.wikipedia.org/wiki/Ricinus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ricin",
        "situacao": "ok",
        "texto": "Ricin ( RY-sin) is a lectin (a carbohydrate-binding protein) and a highly potent toxin produced in the seeds of the castor plant, Ricinus communis. The median lethal dose (LD50) of ricin for mice is around 22 micrograms per kilogram of body mass via intraperitoneal injection. Oral exposure to ricin is far less toxic. An estimated lethal oral dose in humans is approximately one milligram per 2 kilo\n[…]\nThe seeds of Ricinus communis are commonly crushed to extract castor oil. As ricin is not oil-soluble, little is found in the extracted castor oil. The extracted oil is also heated to more than 80 °C (176 °F) to denature any ricin that may be present. The remaining spent crushed seeds, called variously the \"cake\", \"oil cake\", and \"press cake\", can contain up to 5% ricin.\n[…]\nWhile the oil cake from coconut, peanuts, and sometimes cotton seeds can be used as cattle feed or fertilizer, the toxic nature of castor beans precludes their oil cake from being used as feed unless the ricin is first deactivated by autoclaving. Accidental ingestion of Ricinus communis cake intended for fertilizer has been reported to be responsible for fatal ricin poisoning in animals.\n[…]\nIn spite of ricin's extreme toxicity and utility as an agent of chemical/biological warfare, production of the toxin is difficult to limit. The castor bean plant from which ricin is derived is a common ornamental and can be grown at home without any special care.\n[…]\nThey all received police protection. Czech president Miloš Zeman later described the police protection of Zdeněk Hřib as an attempt by an insignificant politician to gain attention. Zeman also confused ricin with non-poisonous laxative castor oil.\n[…]\nStudies showing lack of toxicity of castor oil from the US Public Health Service\n[…]\nCastor bean information at Purdue University"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ricinus",
        "situacao": "ok",
        "texto": "Ricinus communis, the castor bean or castor oil plant, is a species of perennial flowering plant in the spurge family, Euphorbiaceae. It is the sole species in the monotypic genus, Ricinus, and subtribe, Ricininae.\n[…]\nCastor seed is the source of castor oil, which has a wide variety of uses. The seeds contain 40–60% oil that is rich in triglycerides, mainly ricinolein. The seed also contains ricin, a highly potent water-soluble toxin.\n[…]\nRicinus communis is the host plant of the common castor butterfly (Ariadne merione), the eri silkmoth (Samia cynthia ricini), and the castor semi-looper moth (Achaea janata). It is also used as a food plant by the larvae of some other species of Lepidoptera, including Hypercompe hambletoni and the nutmeg (Discestra trifolii). A jumping spider Evarcha culicivora has an association with R. communis. They consume the nectar for food and preferentially use these plants as a location for courtship.\n[…]\nExtract of  Ricinus communis exhibited acaricidal and insecticidal activities against the adult of Haemaphysalis bispinosa (Acarina: Ixodidae) and hematophagous fly Hippobosca maculata (Diptera: Hippoboscidae).\n[…]\nRicinus communis  leaves are used in botanical printing (also known as ecoprinting) in Asia. When bundled with cotton or silk fabric and steamed, the leaves can produce a green-colored imprint.\n[…]\nIn traditional Nigerian cuisine, fermented castor bean paste is the spice ogiri, used to flavor soups. The preparation involves careful detoxification of the beans.\n[…]\nRicinus communis L. – at Purdue University\n[…]\nRicinus communis (castor bean) at Cornell University\n[…]\nRicinus communis Archived 8 December 2016 at the Wayback Machine in Wildflowers of Israel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ricina",
        "situacao": "ok",
        "texto": "A ricina é uma proteína presente nas sementes da mamona (Ricinus communis L.), considerada uma das mais potentes toxinas de origem vegetal conhecida. Essa proteína é classificada dentro de um grupo especial de proteínas denominadas  RIPs (do inglês Ribosome-Inactivating-Proteins), ou proteínas inativadoras de ribossomos. As proteínas desse grupo são capazes de entrar nas células e se ligar a ribos\n[…]\nUma semente de mamona contém ricina suficiente para levar uma criança à morte.\n[…]\nA ricina não é uma proteína encontrada exclusivamente no endosperma das sementes de mamona, sendo detectada em outras partes da planta, porém, em menores quantidades. A concentração dessa proteína na semente pode variar entre diferentes genótipos, tendo sido detectados teores de 1,5 a 9,7 mg/g em 18 acessos de um banco de germoplasma dos Estados Unidos (EUA).\n[…]\nOs sintomas de envenenamento por ricina podem aparecer de 6 a 8 horas após a exposição. A enfermidade causada por esse veneno pode durar dias ou semanas.\n[…]\nNão existe um tratamento específico, o envenenamento por ricina é tratado com cuidados médicos de apoio, tais como auxílio para respirar, administração de líquidos por via intravenosa e medicamentos para tratar o inchaço.\n[…]\nO óleo de mamona não possui ricina, pois toda a proteína da semente permanece na torta após o processo de extração, até mesmo porque essa proteína é insolúvel em óleo.\n[…]\nA atriz americana Shannon Guess Richardson, foi condenada no Texas, a 18 anos de prisão por enviar cartas envenenadas com ricina ao presidente Barack Obama, ao então prefeito de Nova York, Michael Bloomberg, e a Mark Glaze, ex-presidente da associação Prefeitos Contra as Armas Ilegais – um ativista a favor do controle das armas de fogo nos EUA. Shannon foi considerada culpada em dezembro de 2013, por posse de veneno \"para ser usado como arma\".==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Erva-mate",
      "descricao": "Árvore sul-americana Ilex paraguariensis, cujas folhas são usadas no chimarrão e no tereré"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra mate, da erva do chimarrão, vem do quíchua. O que ela designava originalmente?",
    "resposta": "A cuia, o recipiente da bebida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mate_(drink)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mate_(drink)",
        "situacao": "ok",
        "texto": "Mate ( MAH-tay; Spanish: mate [ˈmate], Brazilian Portuguese: [ˈmatʃi]) is a caffeine-rich infused herbal drink made with yerba mate (Ilex paraguariensis), a plant which originates in the Southern Cone of South America. It is especially popular in South America and the Levant. It is also known as chimarrão in Portuguese, cimarrón in Spanish, and ka'ay in Guarani.\n[…]\nAboriginal labour was originally used to harvest wild stands of yerba mate. In the mid-17th century, Jesuits managed to domesticate the plant and establish plantations in their Indian reductions in the Argentine province of Misiones, sparking severe competition with the Paraguayan harvesters of wild stands. After their expulsion in the 1770s, the Jesuit missions – along with the yerba mate plantations – fell into ruins.\n[…]\nThe beverage is traditionally prepared in a gourd vessel, also called mate in Spanish and cuia (= gourd) in Portuguese, from which it is drunk. The gourd is nearly filled with yerba and hot water, typically at 70 to 85 °C (158 to 185 °F), which may be called \"mate temperature\".\n[…]\nMate is traditionally drunk in a particular social setting, such as family gatherings or with friends. The same gourd (cuia/mate) and straw (bomba/bombilla) are used by everyone drinking. One person (known in Portuguese as the preparador, cevador, or patrão, and in Spanish as the cebador) assumes the task of server, which most of the time is the house owner in family gatherings.\n[…]\nWhen someone takes too long, others in the round (roda in Portuguese, ronda in Spanish) will likely politely warn them by saying \"bring the talking gourd\" (cuia de conversar); an Argentine equivalent, especially among young people, being no es un micrófono (\"it's not a microphone\"), an allusion to the drinker holding the mate for too long, as if they were using it as a microphone to deliver a lecture.\n[…]\nClub-Mate"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chimarr%C3%A3o",
        "situacao": "ok",
        "texto": "Chimarrão (do espanhol rioplatense: \"cimarrón\") ou mate (do quíchua: \"mati\") é uma das maneiras de tomar a infusão da erva-mate. É uma bebida característica da cultura do Cone Sul, legado da cultura indígena (caingangue, guarani, aimará e quíchua), produzido pela infusão da planta erva-mate (Ilex paraguariensis) moída e infusionada em água quente à aproximadamente 70 graus Celsius, em uma cuia com\n[…]\nO termo \"mate\", oriundo do quíchua mati, é mais utilizado nos países de língua castelhana. O termo \"chimarrão\" é o mais adotado no Brasil, sendo oriundo da palavra castelhana rioplatense cimarrón, que significa \"puro\", \"selvagem\", \"sem aditivos\". Por isso, também pode designar qualquer bebida (como café ou chá) preparada sem açúcar; o gado domesticado que retornou ao estado de vida selvagem; ou o cão sem dono e bravio, que se alimenta de animais que caça.\n[…]\nOs povos indígenas utilizavam recipientes semelhantes às cuias atuais para preparar a erva-mate, confeccionados com materiais como taquara (bambu), madeira, chifre de boi e porongo.A banda do Rio Grande do Sul, Engenheiros do Hawaii, compôs uma canção chamada \"Ilex Paraguariensis\", em homenagem ao chimarrão. No mesmo estado brasileiro, a microcervejaria Dado Bier lançou uma cerveja de mate, a \"Ilex\".\n[…]\nNa Região Centro-Oeste do Brasil há um refrigerante à base de erva-mate chamado Mate Chimarrão.\n[…]\nDurante a 43.ª edição do Acampamento Farroupilha, em Porto Alegre, foi comercializado sorvete artesanal com sabor de chimarrão, feito com erva-mate.\n[…]\nO município brasileiro de Venâncio Aires, no Rio Grande do Sul, reconhecida como a Capital Nacional do Chimarrão, está construindo um monumento em formato de cuia com 20 metros de altura total. A estrutura terá três andares internos, com exposições sobre a erva-mate e no topo da bomba de chimarrão haverá um mirante.\n[…]\nComo fazer um chimarrão\n[…]\nMuseu Paranaense: Histórico da Erva-Mate",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Mandioca",
      "descricao": "Planta Manihot esculenta, de raiz rica em amido, nativa da América do Sul"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O que torna a mandioca-brava perigosa quando comida crua?",
    "resposta": "Ela libera cianeto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cassava"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cassava",
        "situacao": "ok",
        "texto": "Manihot esculenta, commonly called cassava, manioc, or yuca (among numerous regional names), is a woody shrub of the spurge family, Euphorbiaceae, native to South America, from Brazil, Paraguay and parts of the Andes. Although a perennial plant, cassava is extensively cultivated in tropical and subtropical regions as an annual crop for its edible starchy tuberous root.\n[…]\nThe generic name Manihot and the common name \"manioc\" both derive from the Guarani (Tupi) name mandioca or manioca for the plant. The specific name esculenta is Latin for 'edible'. The common name \"cassava\" is a 16th century word from the French or Portuguese cassave, in turn from Taíno caçabi. The common name \"yuca\" or \"yucca\" is most likely also from Taíno, via Spanish yuca or juca.\n[…]\nAmong the most serious bacterial pests is Xanthomonas axonopodis pv. manihotis, which causes bacterial blight of cassava. This disease originated in South America and has followed cassava around the world. Bacterial blight has been responsible for near catastrophic losses and famine in past decades, and its mitigation requires active management practices. Several other bacteria attack cassava, including the related Xanthomonas campestris pv. cassavae, which causes bacterial angular leaf spot.\n[…]\nInsects such as stem borers and other beetles, moths including Chilomima clarkei, scale insects, fruit flies, shootflies, burrower bugs, grasshoppers, leafhoppers, gall midges, leafcutter ants, and termites contribute to losses of cassava in the field, while others contribute to serious losses, between 19% and 30%, of dried cassava in storage. In Africa, a previous issue was the cassava mealybug (Phenacoccus manihoti) and cassava green mite (Mononychellus tanajoa).\n[…]\nYellow cassava\n[…]\nCassava Pests: From Crisis to Control\n[…]\nWhy cassava? Global Cassava Development Strategy Archived 7 November 2016 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mandioca",
        "situacao": "ok",
        "texto": "Manihot esculenta, conhecida como mandioca, macaxeira, aipim, castelinha, uaipi, mandioca-doce, mandioca-mansa, maniva, maniveira, pão-de-pobre, mandioca-brava e mandioca-amarga, é uma planta da família das Euphorbiaceae. Esta planta é nativa da América do Sul, no entanto está presente em muitas regiões do mundo.\n[…]\nNo Brasil, o termo mandioca-amarga ou mandioca-brava é utilizado para as plantas com teor de ácido cianídrico (HCN) superior a 100 mg/kg; enquanto que o termo macaxeira, mandioca-mansa, mandioca de mesa ou aipim, é utilizado nas plantas que possuem menos de 50 mg de HCN por kg de raiz fresca sem casca.\n[…]\nA mandioca se difere das outras plantas produtoras de amido por seu teor de linamarina (beta-glicosídeo de acetona cianidrina), que pode gerar cianeto livre (ânion CN−) o qual, em água, forma ácido cianídrico, cianeto de hidrogênio ou cianureto de hidrogênio, (HCN),.\n[…]\nFarinha de mandioca — misturava-se a massa ralada da mandioca fresca com a da puba. Mandioca puba é a deixada por alguns dias de molho na água. A massa era espremida com a mão e depois com o auxílio do tipiti, para liberar a maior parte do seu líquido, que era aproveitado para se fazer o tucupi. A massa era torrada em recipiente circular de borda rasa e feita de barro. Algumas tribos faziam a farinha apenas com a mandioca fresca.\n[…]\nPaparuto — bolo salgado feito de macaxeira (mandioca-doce) e carne de caça dos timbiras do Maranhão, Pará e Tocantins. Sobre o centro de folhas de bananeira brava dispostas em cruz espalha-se a macaxeira ralada. Sobre esta, pedaços de carne de caça com cerca de duzentas gramas são colocados e cobertos com macaxeira ralada. Os braços da cruz são dobrados sobre a massa, formando um quadrado de um metro de lado e alguns centímetros de espessura, que é amarrado com embira.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Banana",
      "descricao": "Fruto comestível das plantas do gênero Musa"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "As bananas são levemente radioativas. Isso acontece por causa de qual elemento químico presente nelas?",
    "resposta": "Potássio",
    "distratores": [
      "Urânio",
      "Rádio",
      "Césio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Banana_equivalent_dose"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Banana_equivalent_dose",
        "situacao": "ok",
        "texto": "Banana equivalent dose (BED) is an informal unit of measurement of ionizing radiation exposure, intended as a general educational example to compare a dose of radioactivity to the dose one is exposed to by eating one average-sized banana. Bananas contain naturally occurring radioactive isotopes, particularly potassium-40 (40K), one of several naturally occurring isotopes of potassium.\n[…]\nThe major natural source of radioactivity in plant tissue is potassium: 0.0117% of the naturally occurring potassium is the unstable isotope potassium-40. This isotope decays with a half-life of about 1.25 billion years (4×1016 seconds), and therefore the radioactivity of natural potassium is about 31 becquerel/gram (Bq/g), meaning that, in one gram of the element, about 31 atoms will decay every second.\n[…]\nPlants naturally contain radioactive carbon-14 (14C), but in a banana containing 15 grams of carbon this would give off only about 3 to 5 low-energy beta rays per second. Since a typical banana contains about half a gram of potassium, it will have an activity of roughly 15 Bq.\n[…]\nSeveral sources point out that the banana equivalent dose is a flawed concept because consuming a banana does not increase one's exposure to radioactive potassium.\n[…]\nThe committed dose in the human body due to bananas is not cumulative because the amount of potassium (and therefore of 40K) in the human body is fairly constant due to homeostasis, so that any excess absorbed from food is quickly compensated by the elimination of an equal amount.\n[…]\nThese amounts may be compared to the exposure due to the normal potassium content of the human body of 2.5 grams per kilogram,  or 175 grams in a 70 kg adult. This potassium will naturally generate 175 g × 31 Bq/g ≈ 5400 Bq of radioactive decays, constantly through the person's adult lifetime.\n[…]\n\"Radioactivity in food: your questions answered\", Food Standards Agency"
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
    "indice": 16,
    "ancora": {
      "nome": "Amadurecimento dos frutos",
      "descricao": "Processo fisiológico pelo qual os frutos ficam maduros, controlado pelo hormônio vegetal etileno"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Abacates verdes guardados num saco junto com uma banana madura amadurecem mais rápido. Que gás liberado pela banana causa isso?",
    "resposta": "Etileno",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ripening",
      "https://en.wikipedia.org/wiki/Ethylene_as_a_plant_hormone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ripening",
        "situacao": "ok",
        "texto": "Ripening is a process in fruits that causes them to become more palatable. In general, fruit becomes sweeter, less green, and softer as it ripens. Even though the acidity of fruit increases as it ripens, the higher acidity level does not make the fruit seem tarter. This effect is attributed to the Brix-Acid Ratio. Climacteric fruits ripen after harvesting and so some fruits for market are picked g\n[…]\nRipening agents accelerate ripening. An important ripening agent is ethylene, a gaseous hormone produced by many plants. Many synthetic analogues of ethylene are available. They allow many fruits to be picked prior to full ripening, which is useful since ripened fruits do not ship well. For example, bananas are picked when green and artificially ripened after shipment by being exposed to ethylene.\n[…]\nDifferent fruits have different ripening stages. In tomatoes the ripening stages are:\n[…]\nThe genes they analyzed include those involved in anthocyanin accumulation, cell wall modification, and ethylene synthesis; all of which promote fruit ripening.\n[…]\nBletting, a post-ripening reaction that some fruits undergo before they are edible\n[…]\nCervical ripening, when the pregnant human cervix degrades collagen and proteins and then changes shape prior to delivery\n[…]\nKoning, Ross E. (1994). \"Fruit Ripening\". Plant Physiology Information Website. Archived from the original on 2007-09-27.{{cite web}}:  CS1 maint: bot: original URL status unknown (link)\n[…]\nOetiker, J.H.; Yang, S.F. (1995). \"The role of ethylene in fruit ripening\". Acta Horticulturae. 398 (398): 167–178. doi:10.17660/ActaHortic.1995.398.17.\n[…]\nBurg SP, Burg EA (March 1962). \"Role of Ethylene in Fruit Ripening\". Plant Physiol. 37 (2): 179–89. doi:10.1104/pp.37.2.179. PMC 549760. PMID 16655629.\n[…]\nChu, Michael. \"Fruit Ripening: Fruits which ripen after harvest\". Cooking For Engineers."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ethylene_as_a_plant_hormone",
        "situacao": "ok",
        "texto": "Ethylene (CH2=CH2) is an unsaturated hydrocarbon gas (alkene) acting as a naturally occurring plant hormone. It is the simplest alkene gas and is the first gas known to act as a hormone. It acts at trace levels throughout the life of the plant by stimulating or regulating the ripening of fruit, the opening of flowers, the abscission (or shedding) of leaves and, in aquatic and semi-aquatic species,\n[…]\nIn 1934, British biologist Richard Gane discovered that the chemical constituent in ripe bananas could cause ripening of green bananas, as well as faster growth of pea. He showed that the same growth effect could be induced by ethylene.\n[…]\nEthylene production is regulated by a variety of developmental and environmental factors. During the life of the plant, ethylene production is induced during certain stages of growth such as germination, ripening of fruits, abscission of leaves, and senescence of flowers. Ethylene production can also be induced by a variety of external aspects such as mechanical wounding, environmental stresses, and certain chemicals including auxin and other regulators.\n[…]\nStimulates fruit ripening\n[…]\nEthylene shortens the shelf life of many fruits by hastening fruit ripening and floral senescence. Ethylene will shorten the shelf life of cut flowers and potted plants by accelerating floral senescence and floral abscission. Flowers and plants which are subjected to stress during shipping, handling, or storage produce ethylene causing a significant reduction in floral display. Flowers affected by ethylene include carnation, geranium, petunia, rose, and many others.\n[…]\nCommercial growers of bromeliads, including pineapple plants, use ethylene to induce flowering. Plants can be induced to flower either by treatment with the gas in a chamber, or by placing a banana peel next to the plant in an enclosed area."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Matura%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "A maturação ou amadurecimento é um processo nos frutos que os torna mais palatáveis. Em geral, a fruta fica mais doce, menos verde e mais macia à medida que amadurece. Embora a acidez da fruta aumente à medida que amadurece, o nível mais alto de acidez não faz com que a fruta pareça mais azeda. Este efeito é atribuído à relação brix-acidez. As frutas climatéricas amadurecem após a colheita e, port\n[…]\nFrutas não maduras também são fibrosas, não tão suculentas, e têm carne externa mais dura do que frutas maduras. Comer frutas verdes pode causar dor de estômago ou cólicas estomacais, e o amadurecimento afeta a palatabilidade da fruta.\n[…]\nFrutos em desenvolvimento produzem compostos como alcalóides e taninos. Esses compostos são antialimentares, o que significa que desencorajam os animais que os comem enquanto ainda estão amadurecendo. Esse mecanismo é usado para garantir que a fruta não seja consumida antes que as sementes estejam totalmente desenvolvidas.\n[…]\nNo nível molecular, uma variedade de diferentes hormônios e proteínas vegetais são usados ​​para criar um ciclo de feedback negativo que mantém a produção de etileno em equilíbrio à medida que a fruta se desenvolve.\n[…]\nKoning, Ross E. (1994). «Fruit Ripening». Plant Physiology Information Website. Arquivado do original em 27 de setembro de 2007  !CS1 manut: BOT: estado original-url desconhecido (link)\n[…]\nOetiker, J.H.; Yang, S.F. (1995). «The role of ethylene in fruit ripening». Acta Horticulturae. 398 (398): 167–178. doi:10.17660/ActaHortic.1995.398.17\n[…]\nBurg SP, Burg EA (março de 1962). «Role of Ethylene in Fruit Ripening». Plant Physiol. 37 (2): 179–89. PMC 549760. PMID 16655629. doi:10.1104/pp.37.2.179\n[…]\nChu, Michael. «Fruit Ripening: Fruits which ripen after harvest». Cooking For Engineers",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Dioneia",
      "descricao": "Planta carnívora Dionaea muscipula, que captura insetos com folhas em forma de armadilha"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A dioneia, planta carnívora, digere insetos para obter qual nutriente que falta no solo pantanoso onde vive?",
    "resposta": "Nitrogênio",
    "distratores": [
      "Oxigênio",
      "Carbono",
      "Cálcio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Venus_flytrap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Venus_flytrap",
        "situacao": "ok",
        "texto": "The Venus flytrap (Dionaea muscipula) is a carnivorous plant native to the temperate and subtropical wetlands of North Carolina and South Carolina, on the East Coast of the United States. Although various modern hybrids have been created in cultivation, D. muscipula is the only species of the monotypic genus Dionaea. It is closely related to the waterwheel plant (Aldrovanda vesiculosa) and the cos\n[…]\nThe Venus flytrap is found in nitrogen- and phosphorus-poor environments, such as bogs, wet savannahs, and canebrakes. Small in stature and slow-growing, the Venus flytrap tolerates fire well and depends on periodic burning to suppress its competition. It survives in wet sandy and peaty soils.\n[…]\nThe nutritional poverty of the soil is the reason it relies on such elaborate traps: insect prey provide the nitrogen for protein formation that the soil cannot. They tolerate mild winters, and require a period of winter dormancy to survive freezing temperatures and low photoperiods. Most professional carnivorous plant growers recommend dormancy, and Venus fly traps grown without dormancy may require more light, water, and food to remain healthy.\n[…]\nA few hours after the capture of prey, another set of genes is activated inside the glands, the same set of genes that is active in the roots of other plants, allowing them to absorb nutrients. The use of similar biological pathways in the traps as non-carnivorous plants use for other purposes indicates that somewhere in its evolutionary history, the Venus flytrap repurposed these genes to facilitate carnivory.\n[…]\nIn 2005, the Venus flytrap was designated as the state carnivorous plant of North Carolina.\n[…]\nImages and movies of the Venus flytrap (Dionaea muscipula) at ARKive\n[…]\nThe Carnivorous Plant FAQ: Flytraps\n[…]\nVenus flytrap origins uncovered – BBC\n[…]\nThe CP Photo Finder: \"Dionaea\"\n[…]\n\"Scientists unlock secret to Venus flytrap's hair-trigger response\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dioneia",
        "situacao": "ok",
        "texto": "A dioneia, também conhecida como apanha-moscas (Dionaea muscipula), é uma planta carnívora que pega e digere a presa animal (em geral insetos e aracnídeos). A estrutura de captura é formada por dois lóbulos unidos pela base e presos na ponta de cada uma das folhas.\n[…]\nA dioneia é encontrada em pântanos pobres em nitrogênio no sudeste dos Estados Unidos, principalmente no raio de 160 quilômetros de Wilmington, Carolina do Norte.\n[…]\nCresce em solo arenoso-turfoso úmido e em tapetes de Sphagnum em beiras de estrada, taludes de valas e savanas de Pinus palustris, entre 0 e 100 m de altitude. A coleta de plantas in natura é fortemente restringida por leis estaduais e federais, devido a pequena extensão do seu habitat. O solo pobre em nutrientes é a razão pela qual a planta evoluiu para ter armadilhas tão elaboradas: os insetos fornecem o nitrogênio, papel que o solo onde a planta cresce não cumpre como deveria.\n[…]\nDesenhos animados, jogos e livros fazem uso de plantas monstruosas, cujos exemplos incluem: Inspetor Bugiganga, Darkwing Duck, Os Simpsons e Zetsu, um vilão na série de mangás Naruto. Vídeo games da série Super Mario Bros., O personagem Chomper do jogo \"Plants vs. Zombies também é uma planta carnívora. Crash Bandicoot usam criaturas similares como inimigos(geralmente imóveis). Num jogo de computador de 1990 chamado Venus the Flytrap, uma mosca robótica tenta destruir outros insetos robóticos.\n[…]\nHodick, Dieter; Sievers, Andreas. On the mechanism of closure of Venus flytrap (Dionaea muscipula Ellis). Planta (1998)\n[…]\nHodick D, Sievers A. The action potential of Dionaea muscipula Ellis. Planta (1989)\n[…]\nArtigos sobre a Dionaea\n[…]\nPlantas Carnívoras BR - Fórum\n[…]\nAssociação Portuguesa de Plantas Carnivoras\n[…]\nComunidade Portuguesa de Plantas carnívoras, Forum português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Dioneia",
      "descricao": "Planta carnívora Dionaea muscipula, que captura insetos com folhas em forma de armadilha"
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Para a dioneia fechar a armadilha, quantos toques nos seus pelos sensores precisam acontecer em poucos segundos?",
    "resposta": "Dois",
    "fonte": [
      "https://en.wikipedia.org/wiki/Venus_flytrap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Venus_flytrap",
        "situacao": "ok",
        "texto": "The Venus flytrap (Dionaea muscipula) is a carnivorous plant native to the temperate and subtropical wetlands of North Carolina and South Carolina, on the East Coast of the United States. Although various modern hybrids have been created in cultivation, D. muscipula is the only species of the monotypic genus Dionaea. It is closely related to the waterwheel plant (Aldrovanda vesiculosa) and the cos\n[…]\nThis was the first detailed recorded notice of the plant by Europeans. The description was before John Ellis's letter to The London Magazine on 1 September 1768, and his letter to Carl Linnaeus on 23 September 1768, in which he described the plant and proposed its English name Venus's Flytrap and scientific name Dionaea muscipula.\n[…]\nMost carnivorous plants selectively feed on specific prey. This selection is due to the available prey and the type of trap used by the organism. With the Venus flytrap, prey is limited to beetles, spiders and other crawling arthropods. The Dionaea diet is 33% ants, 30% spiders, 10% beetles, and 10% grasshoppers, with fewer than 5% flying insects.\n[…]\nFire suppression is another threat to the Venus flytrap. In the absence of regular fires, shrubs and trees encroach, outcompeting the species and leading to local extirpations. D. muscipula requires fire every 3–5 years, and best thrives with annual brush fires. Although flytraps and their seeds are typically killed alongside their competition in fires, seeds from flytraps adjacent to the burnt zone propagate quickly in the ash and full sun conditions that occur after a fire disturbance.\n[…]\nIn 2005, the Venus flytrap was designated as the state carnivorous plant of North Carolina.\n[…]\nImages and movies of the Venus flytrap (Dionaea muscipula) at ARKive\n[…]\nVenus Flytrap Growing Guide and Distribution Map\n[…]\nVenus flytrap origins uncovered – BBC\n[…]\n\"Scientists unlock secret to Venus flytrap's hair-trigger response\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dioneia",
        "situacao": "ok",
        "texto": "A dioneia, também conhecida como apanha-moscas (Dionaea muscipula), é uma planta carnívora que pega e digere a presa animal (em geral insetos e aracnídeos). A estrutura de captura é formada por dois lóbulos unidos pela base e presos na ponta de cada uma das folhas.\n[…]\nSe a presa escapar, a armadilha se abrirá em poucas horas.\n[…]\nCultivadores em potencial devem resistir a tentação de ativar as armadilhas manualmente, seja cutucando ou as alimentando com coisas como carne, por exemplo, que fará com que a armadilha apodreça devido ao alto conteúdo de gordura. As dioneias são capazes de caçar seu próprio alimento, não é necessário alimentá-las manualmente. A planta não precisa de insetos para se desenvolver, e pode sobreviver sem eles, se necessário.\n[…]\nDesenhos animados, jogos e livros fazem uso de plantas monstruosas, cujos exemplos incluem: Inspetor Bugiganga, Darkwing Duck, Os Simpsons e Zetsu, um vilão na série de mangás Naruto. Vídeo games da série Super Mario Bros., O personagem Chomper do jogo \"Plants vs. Zombies também é uma planta carnívora. Crash Bandicoot usam criaturas similares como inimigos(geralmente imóveis). Num jogo de computador de 1990 chamado Venus the Flytrap, uma mosca robótica tenta destruir outros insetos robóticos.\n[…]\nForterre Y, Skotheim JM, Dumais J, Mahadevan L. How the Venus flytrap snaps. Nature (2005)\n[…]\nHodick, Dieter; Sievers, Andreas. On the mechanism of closure of Venus flytrap (Dionaea muscipula Ellis). Planta (1998)\n[…]\nHodick D, Sievers A. The action potential of Dionaea muscipula Ellis. Planta (1989)\n[…]\n(em inglês) The mysterious Venus flytrap\n[…]\n(em inglês) Discovery explains how the Venus flytrap snaps.\n[…]\n(em inglês) How Venus Flytraps Work\n[…]\n(em inglês) Venus flytrap evolution\n[…]\nArtigos sobre a Dionaea",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Cafeeiro",
      "descricao": "Planta do gênero Coffea, cujas sementes torradas dão o café"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que o cafeeiro produz cafeína nas folhas e nas sementes?",
    "resposta": "Para se defender de insetos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Caffeine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caffeine",
        "situacao": "ok",
        "texto": "Caffeine is a central nervous system (CNS) stimulant of the methylxanthine class and is the most commonly consumed psychoactive drug globally. It is mainly used for its eugeroic (wakefulness promoting), ergogenic (physical performance-enhancing), or nootropic (cognitive-enhancing) properties (particularly in workplace settings); it is also used recreationally, often in social settings.\n[…]\nThe most common sources of caffeine for human consumption are the tea leaves of the Camellia sinensis plant and the coffee bean, the seed of the Coffea plant. Steeping the plant product in water—a process called infusion—extracts the caffeine and other components for various purposes. Caffeine-containing drinks, such as tea, coffee, and cola, are consumed globally in high volumes. In 2020, almost 10 million tonnes of coffee beans were consumed globally.\n[…]\nAround thirty plant species are known to contain caffeine. Common sources are the \"beans\" (seeds) of the two cultivated coffee plants, Coffea arabica and Coffea canephora (the quantity varies, but 1.3% is a typical value); and of the cocoa plant, Theobroma cacao; the leaves of the tea plant; and kola nuts. Other sources include the leaves of yaupon holly, South American holly yerba mate, and Amazonian holly guayusa; and seeds from Amazonian maple guarana berries.\n[…]\nIn general, one serving of coffee ranges from 80 to 100 milligrams, for a single shot (30 milliliters) of arabica-variety espresso, to approximately 100–125 milligrams for a cup (120 milliliters) of drip coffee. Arabica coffee typically contains half the caffeine of the robusta variety.\n[…]\nPelletier's article on caffeine was the first to use the term in print (in the French form Caféine from the French word for coffee: café). It corroborates Berzelius's account:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cafe%C3%ADna",
        "situacao": "ok",
        "texto": "A cafeína é um composto químico de fórmula C8H10N4O2 — classificado como alcaloide do grupo das xantinas e designado quimicamente como 1,3,7-trimetilxantina. É encontrado em certas plantas e usado como estimulante, principalmente por meio do consumo em bebidas, na forma de infusão.\n[…]\nA cafeína é encontrada em muitas espécies de plantas, sua função no organismo vegetal é atuar como uma espécie de pesticida natural, elevados níveis de cafeína são encontrados em mudas jovens que ainda estão desenvolvendo folhagens, mas ainda não possuem proteção mecânica; a cafeína paralisa e mata determinados insetos que se alimentam na planta. Altos níveis de cafeína também foram encontrados no solo na terra circunvizinha de mudas e grãos de café.\n[…]\nPor essa razão é que se imagina que a cafeína tem uma função natural como praguicida e inibidor de germinação de sementes de outras mudas de café nas proximidades possibilitando assim uma maior chance de sobrevivência.\n[…]\nErva-Mate: folhas e talos da Ilex paraguariensis.\n[…]\nCafé: sementes da Coffea arabica.\n[…]\nChá: folhas da Camellia sinensis.\n[…]\nInsetos herbívoros: o sabor amargo da cafeína torna as folhas e frutos menos apetitosos para alguns insetos nocivos. Estudos demonstram que lagartas, por exemplo, consomem menos folhas com maior teor de cafeína, enquanto outras pragas, como besouros, apresentam crescimento reduzido quando expostas à cafeína.\n[…]\nAdicionalmente, no caso das flores do café, a cafeína presente em seu néctar parece ter um papel na atração de polinizadores específicos. Em vez de repelir tais insetos como normalmente se esperaria, a cafeína em baixas concentrações pode servir como um sinal químico para abelhas e outros polinizadores, favorecendo a proliferação dos genes e reprodução da planta.\n[…]\nSubstitutos do café",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Cafeeiro",
      "descricao": "Planta do gênero Coffea, cujas sementes torradas dão o café"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda, um pastor notou suas cabras agitadas depois de comerem frutos de café. Em que país africano isso teria acontecido?",
    "resposta": "Etiópia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kaldi",
      "https://en.wikipedia.org/wiki/Coffea_arabica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kaldi",
        "situacao": "ok",
        "texto": "Kaldi was the name of a legendary goatherd who is credited with discovering coffee in 850 CE, according to popular legend, after which such crop entered the Islamic world and then the rest of the world.\n[…]\nThe story is probably apocryphal, as it was first related by Antoine Faustus Nairon, a Maronite Roman professor of Oriental languages and author of one of the first printed treatises devoted to coffee, De Saluberrima potione Cahue seu Cafe nuncupata Discurscus (Rome, 1671), which describes a camel or goat herder in the Kingdom of Ayaman, Arabia Felix."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Coffea_arabica",
        "situacao": "ok",
        "texto": "Coffea arabica (), also known as the Arabica coffee, is a species of flowering plant in the coffee and madder family Rubiaceae. It is believed to be the first species of coffee to have been cultivated and is the dominant cultivar, representing about 60% of global production. Coffee produced from the less acidic, more bitter, and more highly caffeinated robusta bean (C. canephora) makes up most of \n[…]\nThe natural populations of Coffea arabica are restricted to the forests of South Ethiopia, South Sudan, and Yemen.\n[…]\nThis hybridization event at the origin of Coffea arabica is estimated between 1.08 million and 543,000 years ago and is linked to changing environmental conditions in East Africa.\n[…]\nCoffea arabica accounts for 60% of the world's coffee production.\n[…]\nOne strain of Coffea arabica (called AC1, AC2 and AC3 in honour of the geneticist Alcides Carvalho) naturally contains very little caffeine. While beans of normal C. arabica plants contain 12 mg of caffeine per gram of dry mass, these mutants contain only 0.76 mg of caffeine per gram, with similar expected cup quality.\n[…]\nAdditionally, coffee leaf rust caused by the fungus Hemileia vastatrix is a major threat to the supply of Coffea arabica causing losses of up to $2 billion US dollars annually. From 2012 to 2013 Hemileia vastatrix was responsible for a 16% decrease in production of  Coffea arabica across Central America. The fungus destroys the plant by causing rapid defoliation, which hinders the plant from performing photosynthesis.\n[…]\nClimate change also serves as a threat to cultivated C. arabica due to their temperature sensitivity, and some studies estimate that by 2050, over half of the land used for cultivating coffee could be unproductive. The more heat-tolerant Coffea stenophylla may replace C. arabica as the dominant coffee species in cultivation in order to guard against this."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Requeima da batata",
      "descricao": "Doença da batata e do tomate causada pelo oomiceto Phytophthora infestans"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No século dezenove, a requeima, praga que apodrece as plantações de batata, provocou qual grande tragédia europeia?",
    "resposta": "A Grande Fome da Irlanda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Phytophthora_infestans",
      "https://en.wikipedia.org/wiki/Great_Famine_(Ireland)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Phytophthora_infestans",
        "situacao": "ok",
        "texto": "Phytophthora infestans is an oomycete or water mold, a fungus-like microorganism (oomycete) that causes the serious crop disease known as late blight or potato blight. The Early blight caused by Alternaria solani is also often called \"potato blight\".\n[…]\nHistorically, late blight was a major factor in the 1840s European, the 1845–1852 Irish, and the 1846 Highland potato famines.\n[…]\nIf infected tubers make it into a storage bin, there is a very high risk to the storage life of the entire bin. Once in storage, there is not much that can be done besides emptying the parts of the bin that contain tubers infected with Phytophthora infestans. To increase the probability of successfully storing potatoes from a field where late blight was known to occur during the growing season, some products can be applied just prior to entering storage (e.g., Phostrol).\n[…]\nHaverkort, A. J; Struik, P. C; Visser, R. G. F; Jacobsen, E (2009), \"Applied Biotechnology to Combat Late Blight in Potato Caused by Phytophthora Infestans\", Potato Research (Submitted manuscript), 52 (3): 249, doi:10.1007/s11540-009-9136-3, S2CID 2850128\n[…]\nNowicki, Marcin; et al. (17 August 2011), \"Potato and tomato late blight caused by Phytophthora infestans: An overview of pathology and resistance breeding\", Plant Disease, 96 (1): 4–17, doi:10.1094/PDIS-05-11-0458, PMID 30731850\n[…]\nBruhn, J. A.; Fry, W. E. (17 November 1980), \"Analysis of potato late blight epidemiology by simulation modeling\" (PDF), Phytopathology, 71 (6): 612–616, doi:10.1094/phyto-71-612\n[…]\nOnline Phytophtora bibliography\n[…]\nSpecies Profile – Late Blight (Phytophthora infestans), National Invasive Species Information Center, United States National Agricultural Library. Lists general information and resources for Late Blight."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Great_Famine_(Ireland)",
        "situacao": "ok",
        "texto": "The Great Famine, also known as the Great Hunger (Irish: an Gorta Mór [ənˠ ˈɡɔɾˠt̪ˠə ˈmˠoːɾˠ]), the Famine and the Irish Potato Famine, was a period of mass starvation and disease in Ireland from 1845 to 1852. It constituted a major historical social crisis and had a significant impact on Irish society and history.\n[…]\nBefore the arrival of Phytophthora infestans, commonly known as \"blight\", only two main potato plant diseases had been discovered. One was \"dry rot\" or \"taint\", and the other was a virus known popularly as \"curl\". Phytophthora infestans is an oomycete (a variety of parasitic, non-photosynthetic organism closely related to brown algae, and not a fungus).\n[…]\nOnce introduced in Ireland and Europe, blight spread rapidly. By mid-August 1845, it had reached much of northern and central Europe; Belgium, The Netherlands, northern France, and southern England had all already been affected.\n[…]\nThe potato blight would return to Ireland in 1879, though by then the rural cottier tenant farmers and labourers of Ireland had begun the \"Land War\", described as one of the largest agrarian movements to take place in nineteenth-century Europe.\n[…]\nI have called it an artificial famine: that is to say, it was a famine which desolated a rich and fertile island that produced every year abundance and superabundance to sustain all her people and many more. The English, indeed, call the famine a \"dispensation of Providence\"; and ascribe it entirely to the blight on potatoes. But potatoes failed in like manner all over Europe, yet there was no famine save in Ireland. The British account of the matter, then, is first, a fraud; second, a blasphemy.\n[…]\nThe Almighty, indeed, sent the potato blight, but the English created the famine."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Phytophthora_infestans",
        "situacao": "ok",
        "texto": "O Phytophthora infestans é um oomiceto, um microrganismo semelhante a um fungo que causa a grave doença da batata e do tomate, conhecida como requeima-do-tomateiro (português brasileiro) ou míldio-do-tomateiro (português europeu), requeima-da-batateira (português brasileiro) ou míldio-da-batateira (português europeu) ou praga-da-batata.\n[…]\nO míldio foi o grande culpado na praga europeia de 1840, e da fome irlandesa da batata. O organismo pode também infetar alguns outros membros da família Solanaceae. Em todo o mundo, a doença causa cerca de 6 bilhões $US de prejuízos em cada ano.\n[…]\nOs argumentos que militam para uma origem mexicana são a grande diversidade genética das linhagens presentes no México e a existência no México central de resistência em certas plantas do gênero Solanum, em particular as espécies Solanum demissum e Solanum stoloniferum. Estes têm sido usados para introduzir genes de resistência à requeima em batata cultivada.\n[…]\nA Grande Fome Irlandesa deve-se principalmente ao primeiro ataque de Phytophthora infestans na Irlanda entre 1845 e 1852, tendo como trágica consequência a morte por fome de um milhão de pessoas e a emigração de outros dois. As políticas do governo inglês agravaram a situação, criando uma fome artificial a partir de 1847. Todos os países produtores de batata na Europa foram afetados, mas a praga da batata atingiu mais a Irlanda que só produzia uma única variedade de batata, a Irish Lumper.\n[…]\nO míldio da batata foi um dos mais de 17 agentes que os Estados Unidos investigaram como potenciais armas biológicas antes que o programa de armas biológicas fosse suspenso. França, Canadá, Estados Unidos e União Soviética também pesquisaram Phytophthora infestans como arma biológica nas décadas de 1940 e 1950.\n[…]\nGrande fome de 1845–1849 na Irlanda",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Ferrugem-do-cafeeiro",
      "descricao": "Doença do café causada pelo fungo Hemileia vastatrix"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Nos anos 1870, um fungo arrasou os cafezais do Ceilão, atual Sri Lanka. Que cultura passou a ocupar o lugar do café por lá?",
    "resposta": "Chá",
    "distratores": [
      "Cacau",
      "Algodão",
      "Cana-de-açúcar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hemileia_vastatrix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hemileia_vastatrix",
        "situacao": "ok",
        "texto": "Hemileia vastatrix is a multicellular basidiomycete fungus of the order Pucciniales (previously also known as Uredinales) that causes coffee leaf rust (CLR), a disease affecting the coffee plant. Coffee serves as the obligate host of coffee rust, that is, the rust must have access to and come into physical contact with coffee (Coffea sp.) in order to survive.\n[…]\nRust was first reported in the major coffee growing regions of Sri Lanka (then called Ceylon) in 1867. The causal fungus was first fully described by the English mycologist Michael Joseph Berkeley and his collaborator Christopher Edmund Broome after an analysis of specimens of a \"coffee leaf disease\" collected by George H.K. Thwaites in Ceylon.\n[…]\nThe disease coffee leaf rust (CLR) was first described and named by Berkley and Broom in the November 1869 edition of the Gardeners Chronicle. They used specimens sent from Sri Lanka, where the disease was already causing enormous damage to productivity. Many coffee estates in Sri Lanka were forced to collapse or convert their crops to alternatives not affected by CLR, such as tea.\n[…]\nCoffee leaf rust (CLR) has direct and indirect economic impacts on coffee production. Direct impacts include decreased quantity and quality of yield produced by the diseased plant and the cost of inputs meant specifically to control the disease. Indirect impacts include increased costs to combat and control the disease. Methods of combating and controlling the disease include fungicide application and stumping diseased plants and replacing them with resistant breeds.\n[…]\nHemileia vastatrix description at Plantvillage.com\n[…]\nCoffee Research Institute: Coffee rust\n[…]\nUniversity of Nebraska-Lincoln: Coffee rust\n[…]\nThe University of Hawaii page on Hemileia vastatrix [1]\n[…]\nU.S.Dept.Agriculture page on Coffee Leaf Rust [2]"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ferrugem-do-caf%C3%A9",
        "situacao": "ok",
        "texto": "A ferrugem do café, ou ferrugem das folhas do café, é uma doença devastadora que ataca  os cafeeiros, levando frequentemente à perda de colheitas e de plantações inteiras. É causada pela Hemileia vastatrix, um fungo da divisão dos Basidiomycotas. Historicamente foi encontrado em áreas  da África, Índia, Ásia e Austrália. A enfermidade foi descoberta em 1970 quando se difundiu no Brasil, marcando a\n[…]\nA doença foi relatada pela primeira vez no Quénia em 1861. Em torno de 1869 já tinha se espalhado pelo Sri Lanka, e nos anos 20 alastrou-se através de uma grande parte da África e Ásia. Nas últimas décadas do século XIX a ferrugem do café já havia produzidos danos sérios às plantações de café do Sri Lanka, Java e Malásia. Esta devastação levou ao aumento de cultivos alternativos, como o chá preto de Ceilão no Sri Lanka e borracha nos três lugares citados.\n[…]\nInstituto de Pesquisa do Café: Ferrugem do café",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Vassoura-de-bruxa",
      "descricao": "Doença do cacaueiro causada pelo fungo Moniliophthora perniciosa"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A partir de 1989, o fungo vassoura-de-bruxa derrubou a produção de qual cultura no sul da Bahia?",
    "resposta": "Cacau",
    "fonte": [
      "https://en.wikipedia.org/wiki/Moniliophthora_perniciosa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moniliophthora_perniciosa",
        "situacao": "ok",
        "texto": "Moniliophthora perniciosa (previously Crinipellis perniciosa) is a fungus that causes \"witches' broom disease\" (WBD) of the cocoa tree T. cacao. This pathogen is currently limited to South America, Panama and the Caribbean, and is perhaps one of the best-known cocoa diseases, thought to have co-evolved with cocoa in its centre of origin (first recorded in the Brazilian Amazon in 1785).\n[…]\nInfection of M. perniciosa on T. cacao causes Witches’ Broom Disease (WBD), which show distinctive symptoms of hypertrophy and hyperplasia of distal tissue of the infection site, loss of apical dominance, proliferation of auxiliary shoots, and the formation of abnormal stems resulting in a broom-like structure called a green broom.\n[…]\nInfection of flower cushions results in the formation of cushion brooms and reduces the ability to produce viable pods, causing seedless pods, or in other words, parthenocarpic fruits. Parthenocarpy results in M. perniciosa targeting nutrient acquisition while altering the host physiology without causing significant necrosis. After 1–2 months post infection, necrosis of infected tissues occurs distal to the original infection site, forming a structure called a dry broom.\n[…]\nM. perniciosa infection causes young pods to become deformed (these are called chirimoyas in Spanish), whereas infection of more mature pods will cause necrosis of seeds and render the pod worthless. This largely affects cocoa production in South American countries where their cash crop is cacao beans. In 1989, WBD was introduced to the cocoa producing state of Bahia of Brazil, where output diminished from 380,000 metric tons per year to 90,000 metric tons in the late 1990s.\n[…]\nMoniliophthora perniciosa genome sequencing at Laboratory of Genomics and Expression"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Moniliophthora_perniciosa",
        "situacao": "ok",
        "texto": "Moniliophtora perniciosa é um fungo pertencentente à ordem Agaricales, conhecido anteriormente por Crinipellis perniciosa. É o causador da vassoura-de-bruxa, doença que afeta os tecidos jovens dos cacaueiros, levando à sua perda de produtividade e dando origem a elevados prejuízos económicos.\n[…]\nVárias espécies de Trichoderma foram isoladas do cacau e é um dos biofungicidas mais usados. Um dos isolados, T. stromaticum parasita o micélio saprotrófico e basidiocarpos de M. perniciosa, o que reduz a formação de basidiocarpos em 99% quando as vassouras estão em contato com o solo e 56% nas vassouras remanescentes nas árvores. Pode reduzir a infecção em 31%.\n[…]\nA infecção por M. perniciosa causa a deformação das vagens jovens (são chamadas de chirimoyas em espanhol), ao passo que a infecção de vagens mais maduras causa necrose das sementes e torna a vagem inútil. Isso afeta amplamente a produção de cacau nos países da América do Sul, onde sua cultura comercial são os grãos de cacau.\n[…]\nEm 1989, o WBD foi introduzido no estado da Bahia, Brasil, produtor de cacau, onde a produção diminuiu de 380.000 toneladas métricas por ano para 90.000 toneladas métricas no final dos anos 1990. Devido a esta doença, a Bahia passou de terceiro maior exportador de grãos de cacau a importador líquido. A falta de grãos de cacau pode aumentar o preço para os países importadores e também para todos os produtos do cacau.\n[…]\nT. cacao L. é uma planta tropical de sub-bosque, e o crescimento do cacau no sub-bosque ajuda a preservar o habitat de numerosas espécies de animais e pássaros nessas regiões. Com as perdas de produção associadas ao WBD, os proprietários de terras tropicais são forçados a converter suas terras para outros sistemas de produção que geralmente exigem a destruição da cobertura florestal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Trufa",
      "descricao": "Corpo de frutificação subterrâneo de fungos do gênero Tuber, muito valorizado na culinária"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Antigamente, porcas eram usadas para farejar trufas debaixo da terra. O que nas trufas atraía essas porcas?",
    "resposta": "Um cheiro parecido com o feromônio do macho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Truffle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Truffle",
        "situacao": "ok",
        "texto": "A truffle is the fruiting body of a subterranean ascomycete fungus, one of the species of the genus Tuber. More than one hundred other genera of fungi are classified as truffles including Geopora, Peziza, Choiromyces, and Leucangium. These genera belong to the class Pezizomycetes and the Pezizales order. Several truffle-like basidiomycetes are excluded from Pezizales, including Rhizopogon and Glom\n[…]\nMost sources agree that the term \"truffle\" is derived from the Latin term tūber by way of the Vulgar Latin tufera, meaning \"swelling\" or \"lump\". This then entered other languages through Old French dialects.\n[…]\nFor example, truffle fungi have lost their ability to degrade the cell walls of plants, limiting their capacity to decompose plant litter. Plant hosts can also depend on their associated truffle fungi. Geopora, Peziza, and Tuber spp. are vital in the establishment of oak communities.\n[…]\nTuber species prefer argillaceous or calcareous soils that are well drained and neutral or alkaline. Tuber truffles fruit throughout the year, depending on the species, and can be found buried between the leaf litter and the soil. Most fungal biomass is found in the humus and litter layers of soil.\n[…]\nThe first black truffles (Tuber melanosporum) to be produced in the Southern Hemisphere were harvested in Gisborne, New Zealand in 1993.\n[…]\nAs of 2022, the Appalachian truffle (Tuber canaliculatum) was being developed as a potential market.\n[…]\nRome and Thracia in the Classical period identified three kinds of truffles: Tuber melanosporum, T. magnificus, and T. magnatum. The Romans instead used a variety of fungus called terfez, also sometimes called a \"desert truffle\". Terfez used in Rome came from Lesbos, Carthage, and especially Libya, where the coastal climate was less dry in ancient times. Their substance is pale, tinged with rose. Unlike truffles, terfez have little inherent flavour.\n[…]\nList of Tuber species"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trufa",
        "situacao": "ok",
        "texto": "Trufa é a denominação popular dada ao ascoma (corpo frutífero) de um fungo ascomiceto subterrâneo e pertencente ao gênero Tuber, da família Tuberaceae. Mais de cem outros gêneros de fungos são classificados como trufas, incluindo Geopora, Peziza, Choiromyces e Leucangium. Esses gêneros pertencem à classe Pezizomycetes e à ordem Pezizales. Alguns fungos semelhantes a trufas mas pertencentes aos bas\n[…]\nTuber magnatum, a trufa-branca (em italiano, tartufo bianco) de alto valor, é encontrada principalmente nas áreas de Langhe e Montferrat da região do Piemonte, no norte da Itália, e, mais notavelmente, no entorno das cidades de Alba e Asti. Uma grande porcentagem das trufas-brancas da Itália também vem de Molise.\n[…]\nUma trufa menos comum é a trufa-negra-lisa (Tuber macrosporum).\n[…]\nVárias espécies e variedades de trufas são diferenciadas com base em seus conteúdos relativos ou ausência de sulfetos, éteres ou álcoois, respectivamente. O aroma almiscarado e suado das trufas é semelhante ao do feromônio androstenol, que também ocorre em humanos. Até 2010, os perfis voláteis de sete espécies de trufas negras e seis espécies de trufas brancas foram estudados.\n[…]\nComo as trufas são subterrâneas, muitas vezes são localizadas com a ajuda de um animal (às vezes chamado de \"trufeiro\") com um olfato apurado. Tradicionalmente, porcos têm sido usados para extrair trufas. A habilidade natural da porca para buscar trufas e sua intenção de comê-las eram consideradas devido a um composto nas trufas semelhante ao androstenol, o feromônio sexual presente na saliva do javali, ao qual a porca é fortemente atraída.\n[…]\nAs trufas foram raramente usadas durante a Idade Média. A caça de trufas é mencionada por Bartolomeo Platina, historiador papal, em 1481, quando ele registrou que as porcas de Notza eram inigualáveis na caça de trufas, mas deveriam ser amordaçadas para evitar que comessem o prêmio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Ginkgo",
      "descricao": "Árvore Ginkgo biloba, única espécie viva de uma linhagem muito antiga de plantas"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Muitas cidades plantam apenas ginkgos machos nas ruas. Que incômodo as árvores fêmeas causam?",
    "resposta": "Sementes com cheiro de vômito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ginkgo_biloba"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ginkgo_biloba",
        "situacao": "ok",
        "texto": "Ginkgo biloba, commonly known as ginkgo ( GINK-oh, -⁠goh), also known as the maidenhair tree, and often misspelled \"gingko\" (see Taxonomy below) is a species of gymnosperm tree native to East Asia. It is the last living species in the order Ginkgoales, which first appeared over 290 million years ago. Fossils similar to the living species, belonging to the genus Ginkgo, extend back to the Middle Ju\n[…]\nAlthough Ginkgo biloba and other species of the genus were once widespread throughout the world, its habitat had shrunk by two million years ago.\n[…]\nThe level of these allergens in standardized pharmaceutical preparations from Ginkgo biloba was restricted to 5 ppm by the Commission E of the former Federal German Health Authority. Overconsumption of seeds from Ginkgo biloba can deplete vitamin B6.\n[…]\nThe wood of Ginkgo biloba is used to make furniture, chessboards, carving, and casks for making saké; the wood is fire-resistant and slow to decay.\n[…]\nRecent research shows both leaves and seeds from Ginkgo biloba plants can be used as a natural (yellow or yellowish) dye on wool, silk or other protein fibre textiles. The plant's chemistry seems to also add anti-microbial properties to the fabric.\n[…]\nG. biloba and its extracts are not approved drugs in the United States and do not have sufficient clinical evidence for uses as a therapy, according to a 2023 review. The United States National Center for Complementary and Integrative Health concludes that, despite extensive research, ginkgo has never been conclusively proven effective for any health condition, including dementia, cognitive decline, or other disorders for which it is commonly marketed.\n[…]\nAndré Michaux, introduced the ginkgo to North America\n[…]\nGinkgoopsida, Ginkgoales, Ginkgoaceae, Ginkgo biloba (ginkgo) description, The Gymnosperm Database\n[…]\nGinkgo biloba information, Plants for a Future Plant Database\n[…]\nGinkgo biloba, PlantUse English"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ginkgo_biloba",
        "situacao": "ok",
        "texto": "Ginkgo biloba, também conhecida pelos nomes populares nogueira-do-japão, árvore-avenca ou simplesmente ginkgo, é uma árvore de origem chinesa considerada um fóssil vivo, pois existia já no tempo dos dinossauros, há mais de 200 milhões de anos. É símbolo de paz e longevidade por ter sobrevivido aos bombardeamentos atômicos no Japão.\n[…]\nSão árvores caducas, isto é, que perdem todas as folhas no inverno. Atingem uma altura de 20 a 35 metros (alguns espécimes, na China, chegam a atingir os 50 metros). Foram, durante muito tempo, consideradas extintas no meio natural, mas, posteriormente verificou-se que duas pequenas zonas na província de Zhejiang, na China, albergavam exemplares da espécie. Hoje, a planta existe em praticamente todos os continentes e no Brasil existem exemplares produzindo sementes.\n[…]\nA palavra ginkgo tem origem chinesa (ginkyo: 銀杏), significando \"damasco prateado\". A palavra biloba vem do formato bilobado das folhas.\n[…]\nO maior e mais longo teste clínico independente, conduzido pelo Periódico da Associação Médica Americana para avaliar o Ginkgo biloba, publicou o resultado em 2008 de que o suplemento não reduz a incidência de demência de quaisquer causas ou de Alzheimer em adultos, de 75 anos ou mais, que tinham cognição normal ou mínimo déficit cognitivo, quando administrado duas vezes por dia em doses de 120 mg do extrato de \"G. biloba\".\n[…]\nDesde 2016, a Agência Internacional de Pesquisa em Câncer classifica o extrato de Ginkgo biloba como possivelmente cancerígeno (grupo 2B).\n[…]\n«The Ginkgo Pages». inglês, alemão, francês, espanhol e holandês\n[…]\n«Study Indicates Ginkgo biloba Does Not Reduce the Risk of Cancer»\n[…]\n«Ginkgo Does Not Shield Seniors' Hearts, But It May Protect Their Leg Arteries»\n[…]\n«Ginkgo Ineffective Against High Blood Pressure in Large Study of Older Adults»\n[…]\n«Ginkgo biloba tem poder»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Ginkgo",
      "descricao": "Árvore Ginkgo biloba, única espécie viva de uma linhagem muito antiga de plantas"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Árvores de ginkgo ficaram famosas no Japão por voltarem a brotar depois de qual acontecimento de 1945?",
    "resposta": "A bomba atômica de Hiroshima",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ginkgo_biloba"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ginkgo_biloba",
        "situacao": "ok",
        "texto": "Ginkgo biloba, commonly known as ginkgo ( GINK-oh, -⁠goh), also known as the maidenhair tree, and often misspelled \"gingko\" (see Taxonomy below) is a species of gymnosperm tree native to East Asia. It is the last living species in the order Ginkgoales, which first appeared over 290 million years ago. Fossils similar to the living species, belonging to the genus Ginkgo, extend back to the Middle Ju\n[…]\nG. biloba, once widespread but thought extinct in the wild for centuries, is now commonly cultivated in East Asia, with some genetically diverse populations possibly representing rare wild survivors in southwestern China's mountainous regions. Some G. biloba trees have survived extreme events like the Hiroshima atomic bomb. Others show extreme longevity; G. biloba specimens have been measured in excess of 1,600 years, and the largest living trees are estimated to exceed 3,500 years.\n[…]\nExtreme examples of the ginkgo's tenacity may be seen in Hiroshima, Japan, where six trees growing between 1 and 2 kilometres (1⁄2 and 1+1⁄4 miles) from the 1945 atom bomb explosion were among the few living organisms in the area to survive the blast. Although almost all other plants (and animals) in the area were killed, the ginkgos, though charred, survived and were soon healthy again, among other hibakujumoku (trees that survived the blast).\n[…]\nRecent research shows both leaves and seeds from Ginkgo biloba plants can be used as a natural (yellow or yellowish) dye on wool, silk or other protein fibre textiles. The plant's chemistry seems to also add anti-microbial properties to the fabric.\n[…]\nAndré Michaux, introduced the ginkgo to North America\n[…]\nGinkgo Petrified Forest State Park in central Washington, United States\n[…]\nGinkgoopsida, Ginkgoales, Ginkgoaceae, Ginkgo biloba (ginkgo) description, The Gymnosperm Database\n[…]\nGinkgo biloba information, Plants for a Future Plant Database\n[…]\nGinkgo biloba, PlantUse English"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ginkgo_biloba",
        "situacao": "ok",
        "texto": "Ginkgo biloba, também conhecida pelos nomes populares nogueira-do-japão, árvore-avenca ou simplesmente ginkgo, é uma árvore de origem chinesa considerada um fóssil vivo, pois existia já no tempo dos dinossauros, há mais de 200 milhões de anos. É símbolo de paz e longevidade por ter sobrevivido aos bombardeamentos atômicos no Japão.\n[…]\nFoi descrita pela primeira vez pelo médico alemão Engelbert Kaempfer por volta de 1690, mas só despertou o interesse de pesquisadores após a Segunda Guerra Mundial (1939-1945), quando perceberam que a planta tinha sobrevivido à radiação em Hiroshima, brotando no solo da cidade devastada. Suas folhas têm sido frequentemente usadas no combate aos radicais livres e como auxiliar da oxigenação cerebral.\n[…]\nA palavra ginkgo tem origem chinesa (ginkyo: 銀杏), significando \"damasco prateado\". A palavra biloba vem do formato bilobado das folhas.\n[…]\nO maior e mais longo teste clínico independente, conduzido pelo Periódico da Associação Médica Americana para avaliar o Ginkgo biloba, publicou o resultado em 2008 de que o suplemento não reduz a incidência de demência de quaisquer causas ou de Alzheimer em adultos, de 75 anos ou mais, que tinham cognição normal ou mínimo déficit cognitivo, quando administrado duas vezes por dia em doses de 120 mg do extrato de \"G. biloba\".\n[…]\nDesde 2016, a Agência Internacional de Pesquisa em Câncer classifica o extrato de Ginkgo biloba como possivelmente cancerígeno (grupo 2B).\n[…]\n«The Ginkgo Pages». inglês, alemão, francês, espanhol e holandês\n[…]\n«Study Indicates Ginkgo biloba Does Not Reduce the Risk of Cancer»\n[…]\n«Ginkgo Does Not Shield Seniors' Hearts, But It May Protect Their Leg Arteries»\n[…]\n«Ginkgo Ineffective Against High Blood Pressure in Large Study of Older Adults»\n[…]\n«Ginkgo biloba tem poder»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Vitória-régia",
      "descricao": "Planta aquática amazônica Victoria amazonica, de folhas circulares gigantes"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que famoso prédio de ferro e vidro, erguido em Londres em 1851, teve a estrutura inspirada nas nervuras da folha da vitória-régia?",
    "resposta": "Palácio de Cristal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Victoria_amazonica",
      "https://en.wikipedia.org/wiki/The_Crystal_Palace"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Victoria_amazonica",
        "situacao": "ok",
        "texto": "Victoria amazonica (\"giant water lily\") is a species of flowering plant, the second largest in the water lily family Nymphaeaceae. It is called Vitória-Régia or Iaupê-Jaçanã (\"the jacana's waterlily\") in Brazil and Atun Sisac (\"great flower\") in Inca (Quechua). Its native region is tropical South America, specifically Guyana and the Amazon Basin.\n[…]\nThe diploid chromosome count of Victoria amazonica is 20.\n[…]\nVictoria amazonica has not yet been formally evaluated for the IUCN Red List, but a 2022 assessment proposed it as Least Concern (LC) due to its wide distribution across the Amazon basin. Potential threats include deforestation and climate change impacts on wetland ecosystems, though it is not currently considered endangered.\n[…]\nVictoria regia, as it was named, was described by Tadeáš Haenke in 1801. It was once the subject of rivalry between Victorian gardeners in England. Always on the lookout for a new species with which to impress their peers, Victorian \"gardeners\" such as the Duke of Devonshire and the Duke of Northumberland started a friendly competition to become the first to cultivate and bring to flower this large lily.\n[…]\nThe species captured the public's imagination and was the subject of several dedicated monographs. The botanical illustrations of cultivated specimens in Fitch and W.J. Hooker's 1851 work Victoria Regia received critical acclaim in the Athenaeum, \"they are accurate, and they are beautiful\". \"The Duke of Devonshire presented Queen Victoria with one of the first of these flowers and named it in her honour.\n[…]\nMedia related to Victoria amazonica at Wikimedia Commons\n[…]\nData related to Victoria amazonica at Wikispecies"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Crystal_Palace",
        "situacao": "ok",
        "texto": "The Crystal Palace was a cast iron and plate glass structure, originally built in Hyde Park, London, to house the Great Exhibition of 1851. The exhibition took place from 1 May to 15 October 1851, and more than 14,000 exhibitors from around the world gathered in its 990,000-square-foot (92,000 m2) exhibition space to display examples of technology developed in the Industrial Revolution.\n[…]\nIt thrived under his care, and in 1849 he caused a sensation in the horticultural world when he succeeded in producing the first amazonica flowers to be grown in England. His daughter Alice was drawn for the newspapers, standing on one of the leaves. The lily and its house led directly to Paxton's design for the Crystal Palace. He later cited the huge ribbed floating leaves as a key inspiration.\n[…]\nCrystal Palace is a popular Victorian-inspired, all-you-can-eat buffet restaurant located on Main Street, U.S.A. at Magic Kingdom Park, opened on October 1, 1971 and Tokyo Disneyland. The restaurant’s name and the overall World Fair vibe of optimism and progress were directly modeled after Sir Joseph Paxton's revolutionary 1851 building. Design elements from the 1853 New York exhibition hall (the U.S.\n[…]\nAberdeen Pavilion, a Victorian designed exhibition hall located in Ottawa, inspired by the Crystal Palace.\n[…]\nBriggs, Asa (1954). \"The Crystal Palace and the Men of 1851\". Victorian People. London: Odhams.\n[…]\nMcKinney, Kayla Kreuger (2017). \"Crystal Fragments: Museum Methods at the Great Exhibition of 1851, in London Labour and the London Poor and in 1851\". The Victorian. 5 (1). Archived from the original on 8 August 2019.\n[…]\nNichols, Kate; Turner, Sarah Victoria (2017). \"'What is to become of the Crystal Palace?' The Crystal Palace after 1851\". After 1851: The material and visual cultures of the Crystal Palace at Sydenham. Manchester University Press. pp. 1–23. JSTOR j.ctvnb7mhs.7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Victoria_amazonica",
        "situacao": "ok",
        "texto": "A vitória-régina ou victória-régia (Victoria amazonica) é uma planta aquática da família das Nymphaeaceae, típica da região amazônica.\n[…]\nOs ingleses deram-lhe o nome em homenagem à Rainha Vitória, quando o explorador alemão a serviço da Coroa Britânica Robert Hermann Schomburgk levou suas sementes para os jardins de um palácio inglês.\n[…]\nA espécie faz parte do gênero Victoria, colocado por vezes na família Nymphaeaceae e outras vezes na Euryalaceae. A primeira descrição publicada do gênero foi feita por John Lindley em outubro de 1837, com base em espécimes dessa planta devolvidos da Guiana Inglesa por Robert Schomburgk. Lindley deu ao gênero o nome da recém-ascendida Rainha Vitória, e da espécie Victoria regia. A grafia na descrição de Schomburgk no Athenaeum, publicada no mês anterior, foi dada como Victoria Regina .\n[…]\nA espécie capturou a imaginação do público e foi tema de várias monografias dedicadas. As ilustrações botânicas de espécimes cultivados na obra Victoria Regia de Fitch e WJ Hooker de 1851 foram aclamadas pela crítica no Athenaeum, “elas são precisas e lindas”. “O Duque de Devonshire presenteou a Rainha Vitória com uma das primeiras dessas flores e a nomeou em sua homenagem.\n[…]\nO nenúfar, com superfície inferior nervurada e folhas com veios “li” e vigas transversais e suportes agiram “como inspiração de Paxton para o Palácio de Cristal, um edifício quatro vezes maior que a Basílica de São Pedro em Roma ”.\n[…]\nVitória-régia em Jardineiro.net - foto e descrição\n[…]\nA Vitória-régia em Indaial\n[…]\nLenda da vitória-régia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Esporão-do-centeio",
      "descricao": "Fungo Claviceps purpurea, que parasita o centeio e outros cereais e causa o ergotismo"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1938, o químico suíço Albert Hofmann sintetizou qual droga a partir de compostos do esporão-do-centeio, um fungo?",
    "resposta": "LSD",
    "fonte": [
      "https://en.wikipedia.org/wiki/Claviceps_purpurea",
      "https://en.wikipedia.org/wiki/Lysergic_acid_diethylamide"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Claviceps_purpurea",
        "situacao": "ok",
        "texto": "Claviceps purpurea is an ergot fungus that grows on the ears of rye and related cereal and forage plants. Consumption of grains or seeds contaminated with the survival structure of this fungus, the ergot sclerotium, can cause ergotism in humans and other mammals. C. purpurea most commonly affects outcrossing species such as rye (its most common host), as well as triticale, wheat and barley. It aff\n[…]\nEarly scientists have observed Claviceps purpurea on other Poaceae as Secale cereale. 1855, Grandclement described ergot on Triticum aestivum. During more than a century scientists aimed to describe specialized species or specialized varieties inside the species Claviceps purpurea.\n[…]\nClaviceps purpurea var. agropyri\n[…]\nClaviceps purpurea var. purpurea\n[…]\nClaviceps purpurea var. spartinae\n[…]\nClaviceps purpurea var. wilsonii.\n[…]\nG3 (Claviceps purpurea var. spartinae)—salt marsh grasses (Spartina, Distichlis).\n[…]\nClaviceps purpurea has been known to humankind for a long time, and its appearance has been linked to extremely cold winters that were followed by rainy springs.\n[…]\nThe sclerotial stage of C. purpurea conspicuous on the heads of ryes and other such grains is known as ergot. Sclerotia germinate in spring after a period of low temperature. A temperature of 0-5 °C for at least 25 days is required. Water before the cold period is also necessary. Favorable temperatures for stroma production are in the range of 10-25 °C. Favorable temperatures for mycelial growth are in the range of 20-30 °C with an optimum at 25 °C.\n[…]\nAgricultural production of Claviceps purpurea on rye is used to produce ergot alkaloids. Biological production of ergot alkaloids is also carried out by saprophytic cultivations.\n[…]\nErgot\n[…]\nClaviceps purpurea - Ergot Alkaloid Archived 2010-09-07 at the Wayback Machine\n[…]\nPBS Secrets of the Dead: \"The Witches Curse\" (concerning the Salem trials and ergot) Archived 2014-04-19 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lysergic_acid_diethylamide",
        "situacao": "ok",
        "texto": "Lysergic acid diethylamide, commonly known as LSD (from German Lysergsäurediethylamid) and by the nicknames acid and Lucy, is a semisynthetic psychedelic drug derived from ergot, known for its potent psychological effects.\n[…]\nSwiss chemist Albert Hofmann first synthesized LSD in 1938 and discovered its potent psychedelic effects in 1943 after accidental ingestion. It became widely studied in the 1950s and 1960s. The drug was initially explored for psychiatric use due to its structural similarity to serotonin and safety profile. It was used experimentally in psychiatry for treating alcoholism and schizophrenia.\n[…]\nLSD was first synthesized on November 16, 1938 by Swiss chemist Albert Hofmann at the Sandoz Laboratories in Basel, Switzerland as part of a large research program searching for medically useful ergot alkaloid derivatives.\n[…]\nLSD was synthesised from lysergic acid, a chemical derived from the hydrolysis of the alkaloid ergotamine, which can be found in the grain-infecting fungus ergot. It was the 25th substance of various lysergamides that Hofmann synthesized from lysergic acid while trying to develop a new analeptic, hence its alternate name, LSD-25.\n[…]\nAlexander Shulgin, American chemist, told Albert Hofmann that he preferred LSD to 2C-B.\n[…]\nIn more recent years, there has been renewed clinical research on and interest in LSD for potential therapeutic uses. This has been supported by several organizations, including the Multidisciplinary Association for Psychedelic Studies (MAPS), the Beckley Foundation, the Heffter Research Institute, and the Albert Hofmann Foundation, which exist to fund, encourage, and coordinate research into the medicinal and spiritual uses of LSD and related psychedelics."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Espor%C3%A3o-do-centeio",
        "situacao": "ok",
        "texto": "O Claviceps purpurea, comummente conhecido como esporão-do-centeio, é um fungo parasita que ataca mormente o centeio, e do qual se extraem vários alcaloides e substâncias de uso medicinal. É um fungo conhecido por ser alucinógeno, e usado para fabricar LSD. Quem ingerir o fungo pode desenvolver uma doença atualmente denominada de ergotismo.\n[…]\nDá ainda pelos seguintes nomes comuns: cravagem ou cravagem-do-centeio, grão-de-corvo, dente-de-cão e cornecha (também grafada cornecho e cornicão).\n[…]\nDevido aos numerosos e tóxicos alcaloides encontrados nesta cravagem, durante a antiguidade e na Idade Média, os alcaloides produzidos por este fungo causaram uma doença denominada \"ergotismo\". Na época conhecida como Fogo de Santo António (não confundir com a erisipela, que dava pelo mesmo nome popular), esta doença surgiu por volta do ano de 1095, por consequência da ingestão de alimentos derivados de farinha misturada com o fungo, tais como pães, cervejas, vinhos e queijos.\n[…]\nNo século XVII, este fungo foi utilizado através do seu extrato juntamente com ergotamina para o tratamento de dores de cabeça fortes ou enxaquecas, e até hoje é utilizado através da extração de alcaloides e preparos utilizados na medicina, sob diversos usos.\n[…]\nTambém a partir do estudo do esporão do centeio, em 1943, foi descoberta a substância dietilamida do ácido lisérgico, popularmente conhecido como LSD que é um poderoso alucinógeno.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Penicillium roqueforti",
      "descricao": "Espécie de fungo usada para produzir os veios azuis de queijos como o roquefort"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Além do roquefort francês, que famoso queijo azul italiano também é feito com o fungo Penicillium roqueforti?",
    "resposta": "Gorgonzola",
    "fonte": [
      "https://en.wikipedia.org/wiki/Penicillium_roqueforti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Penicillium_roqueforti",
        "situacao": "ok",
        "texto": "Penicillium roqueforti is a common saprotrophic fungus in the genus Penicillium. Widespread in nature, it can be isolated from soil, decaying organic matter, and plants.\n[…]\nThe major industrial uses of this fungus are the production of blue cheeses, flavouring agents, antifungals, polysaccharides, proteases, and other enzymes. The fungus has been a constituent of Roquefort, Stilton, Danish blue, Cabrales, and other blue cheeses. A few blue cheeses, such as Gorgonzola, are made instead with Penicillium glaucum.\n[…]\nUsing genome comparison, it is shown that Penicillium roqueforti is divided into five populations: silage/spoiled food, lumber/spoiled food, Roquefort PDO, non-Roquefort, and Termignon.\n[…]\nThe clonal non-Roquefort group and the Termignon group carry two Starship elements, CheesyTer and Wallaby, that confers a growth speed advantage on cheese and improves microbial competition. They have been horizontally transferred to other Penicillium species, some of which have also been domesticated by humans for cheese-making.\n[…]\nThe chief industrial use of this species is the production of blue cheeses, such as its namesake Roquefort, Bleu de Bresse, Bleu du Vercors-Sassenage, Brebiblu, Cabrales, Cambozola (Blue Brie), Cashel Blue, Danish blue, Swedish Ädelost, Polish Rokpol made from cow's milk, blue varieties of Turkish civil cheese, Fourme d'Ambert, Fourme de Montbrison, Lanark Blue, Shropshire Blue, and Stilton, and some varieties of Bleu d'Auvergne and Gorgonzola.\n[…]\nP. roqueforti also produces the neurotoxin roquefortine C.\n[…]\nRecent research has shown significant differences in metabolite production between P. roqueforti populations.\n[…]\nList of Penicillium species"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Penicillium_roqueforti",
        "situacao": "ok",
        "texto": "Penicillium roqueforti é um vulgar fungo saprófito, que aparece na natureza e pode ser isolado do solo, degradando substâncias orgânicas e partes vegetais. A principal utilização industrial deste fungo é a produção de queijos azuis, como o Roquefort, agentes aromatizantes, antifúngicos, polissacarídeos, proteases e outras enzimas.\n[…]\nO principal uso industrial deste fungo é a produção de queijo azul, agentes aromatizantes, antifúngicos, polissacarídeos, protease e outras enzimas. O fungo tem sido um constituinte do  Roquefort, Stilton, Azul dinamarquês, Cabrales, Gorgonzola e outros queijos azuis que os seres humanos sabem ter comido desde cerca de 50 dC; O queijo azul é mencionado na literatura até o ano 79, quando Plínio, o Velho observou seu rico sabor.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Manga",
      "descricao": "Fruto da mangueira, Mangifera indica, árvore da família das anacardiáceas"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A casca da manga pode causar alergia porque contém a mesma substância irritante de qual planta americana famosa?",
    "resposta": "Hera venenosa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mango",
      "https://en.wikipedia.org/wiki/Urushiol"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mango",
        "situacao": "ok",
        "texto": "A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It originated in the northeastern part of the South Asia, in what is now Bangladesh, northeastern India and Myanmar. M. indica has been cultivated in South and Southeast Asia since ancient times, resulting in two modern mango cultivar lineages: the \"Indian\" and the \"Southeast Asian\" types.\n[…]\nHowever, the authors cautioned that the diversity in Southeast Asian mangoes might be the result of other reasons (like interspecific hybridization with other Mangifera species native to the Malesian ecoregion). Nevertheless, the existence of two distinct genetic populations identified by the study indicates that the domestication of the mango is more complex than previously assumed and would at least indicate multiple domestication events in Southeast Asia and South Asia.\n[…]\nContact with oils in mango leaves, stems, sap, and skin can cause dermatitis and anaphylaxis in susceptible individuals. Those with a history of contact dermatitis induced by urushiol (an allergen found in poison ivy, poison oak, or poison sumac) may be most at risk for mango contact dermatitis. Other mango compounds potentially responsible for dermatitis or allergic reactions include mangiferin. Cross-reactions may occur between mango allergens and urushiol.\n[…]\nWhen mango trees are flowering in spring, local people with allergies may experience breathing difficulty, itching of the eyes, or facial swelling, even before flower pollen becomes airborne. In this case, the irritant is likely to be the vaporized essential oil from flowers. During the primary ripening season of mangoes, contact with mango plant parts – primarily sap, leaves, and fruit skin – is the most common cause of plant dermatitis in Hawaii.\n[…]\nSorting Mangifera species\n[…]\nPine Island Nursery's Mango Variety viewer"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Urushiol",
        "situacao": "ok",
        "texto": "Urushiol  is an oily mixture of organic compounds with allergenic and sensitizing properties found in plants of the family Anacardiaceae, especially Toxicodendron spp. (e.g., poison oak, Chinese lacquer tree, poison ivy, poison sumac), Comocladia spp. (maidenplums), Metopium spp. (poisonwood), and also in parts of the mango tree and the fruit of the cashew tree.\n[…]\nAfter this new categorization, scientists began attempts to determine what it was that rendered plants of this genus noxious, starting with a hypothesis of a volatile oil present in the plants. While this proved incorrect, Rikou Majima from Japan was able to determine that the chemical urushiol was the irritant. Further, he determined that the substance was a type of alkyl catechol, and due to its structure it was able to penetrate the skin and survive on surfaces for months to years.\n[…]\nOnce this response starts, only a few treatments, such as cortisone or prednisone, are effective. Medications that can reduce the irritation include antihistamines (diphenhydramine (Benadryl) or cetirizine (Zyrtec)). Other treatments include applying cold water or calamine lotion to soothe the pain and stop the itching.\n[…]\nMango trees, which may cause cross-reaction allergies with urushiol.\n[…]\nGrevelink, Suzanne A.; Murrell, Dédée F.; Olsen, Elise A. (August 1992). \"Effectiveness of various barrier preparations in preventing and/or ameliorating experimentally produced Toxicodendron dermatitis\". Journal of the American Academy of Dermatology. 27 (2): 182–188. doi:10.1016/0190-9622(92)70167-e. PMID 1430354.\n[…]\nSymes, William F.; Dawson, Charles R. (June 1954). \"Poison Ivy 'Urushiol'\". Journal of the American Chemical Society. 76 (11): 2959–2963. doi:10.1021/ja01640a030."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Manga_%28fruta%29",
        "situacao": "ok",
        "texto": "A manga é o fruto da mangueira (Mangifera indica L.), árvore frutífera da família Anacardiaceae, nativa do sul e do sudeste asiático  desde o leste da Índia até as Filipinas, e introduzida com sucesso no Brasil, em Angola, em Moçambique, Portugal e Espanha.\n[…]\nGraças à alta quantidade de ferro que contém, a manga é indicada para tratamentos de anemia e é benéfica para as mulheres grávidas e em períodos de menstruação. Pessoas que sofrem de cãimbras, stress e problemas cardíacos, podem se beneficiar das altas concentrações de potássio e magnésio existentes que também auxiliam àqueles que sofrem de acidose. As mangas também suavizam o intestino, tornando mais fácil a digestão.\n[…]\nEstudos revelaram que tal substância, presente também no mel e nas folhas do cafeeiro (ver: Chá de folha de café) possui valor terapêutico, tendo ação anti-inflamatória, antidiabética, protetora das células nervosas, e auxiliar no controle dos níveis de colesterol. Na manga, a mangiferina concentra-se proncipalmente na casca.\n[…]\nPodem ser cultivadas em climas tropicais e subtropicais. Devem ser plantadas em uma área com boa drenagem e um solo ligeiramente ácido. Devem ser regadas regularmente quando jovens, porém, ao atingirem a maturidade, devem ser regadas com intervalos entre 10 e 15 dias. Cerca de 4 a 5 meses após a floração, as mangas estão maduras. Quando a manga já chegou em seu tamanho final e está pronta para ser colhida, ela se torna fácil de ser tirada do pé, com um simples puxão.\n[…]\nDiversas doenças atacam as plantações de manga. Agentes patogénicos podem provocar diversos tipos de doenças, podendo causar pesadas perdas na produção de mangahopper",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Cupuaçu",
      "descricao": "Árvore amazônica Theobroma grandiflorum, de fruto com polpa aromática"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O cupuaçu, fruta da Amazônia, é parente tão próximo de qual planta que pertence ao mesmo gênero dela?",
    "resposta": "Cacau",
    "distratores": [
      "Açaí",
      "Guaraná",
      "Cafeeiro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Theobroma_grandiflorum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Theobroma_grandiflorum",
        "situacao": "ok",
        "texto": "Theobroma grandiflorum, commonly known as cupuaçu, also spelled cupuassu, cupuazú, cupu assu, or copoazu, is a tropical rainforest tree related to cacao. Native and common throughout the Amazon basin, it is naturally cultivated in the jungles of  northern Brazil, with the largest production in Pará, Amazonas and Amapá, Colombia, Bolivia and Peru.\n[…]\nCupuaçu is most commonly propagated from seed, but grafting and rooted cuttings are also used.\n[…]\nCupuaçu trees are often incorporated in agroforestry systems throughout the Amazon due to their high tolerance of infertile soils, which are predominant in the Amazon region.\n[…]\nCupuaçu is generally harvested from the ground once they have naturally fallen from the tree. It can be difficult to determine peak ripeness because there is no noticeable external color change in the fruit. However studies have shown that in Western Colombian Amazon conditions, fruits generally reach full maturity within 117 days after fruit set. Brazilians either eat it raw or use it in making sweets.\n[…]\nCupuaçu supports the butterfly herbivore, \"lagarta verde\", Macrosoma tipulata (Hedylidae), which can be a defoliator.\n[…]\nCupuaçu flavors derive from its phytochemicals, such as tannins, glycosides, theograndins, catechins, quercetin, kaempferol and isoscutellarein. It also contains theacrine, caffeine, theobromine, and theophylline as found in cacao, although with a much lower amount of caffeine.\n[…]\nAmazonian cuisine\n[…]\nTheobroma bicolor\n[…]\nWeird Fruit Explorer (20 September 2017). \"Cupuacu Review - Ep. 210\". Archived from the original on 2021-12-22 – via YouTube.\n[…]\nScalabrini, Osvaldo (28 April 2013). \"Cupuaçu, Theobroma grandiflorum, cupuaçueiro, Flora amazônica, Endêmica do amazonas\". Archived from the original on 2021-12-22 – via YouTube."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cupua%C3%A7u",
        "situacao": "ok",
        "texto": "Theobroma grandiflorum, comumente conhecido como cupuaçu, é uma árvore da floresta tropical relacionada ao cacau. Nativo e comum em toda a bacia amazônica, é cultivado naturalmente nas selvas do norte do Brasil, com maior produção no Pará, Amazonas e Amapá, Colômbia, e também na Bolívia e Peru. A polpa do fruto do cupuaçu é consumida em toda a América Central e América do Sul, principalmente nos e\n[…]\nDe sua semente é produzido o cupulate (chocolate de cupuaçu). A alfarroba é outra substituta do cacau na fabricação de chocolate.\n[…]\nRecentemente, através de estudos genéticos se descobriu que o cupuaçu é uma planta domesticada pelos nativos da Amazônia há cerca de 8000 anos atrás e sua versão selvagem é o cupuí. A suspeita começou quando pesquisadores notaram que a árvore de cupuaçu existia em maior número próximo a assentamentos humanos, e sua presença na floresta era mais rara.\n[…]\nA polpa branca do cupuaçu tem odor descrito como uma mistura de chocolate e abacaxi e é frequentemente utilizada em sobremesas, sucos e doces. O suco tem gosto principalmente de pêra, banana, maracujá e melão. O chocolate feito de cupuaçu, muito parecido com o de cacau, é chamado de cupulate.\n[…]\nA vassoura-de-bruxa ( Moniliophthora perniciosa) é a praga mais proeminente que afeta as árvores de cupuaçu. Afeta toda a árvore e pode resultar em perda significativa de rendimentos, bem como na morte da árvore se não for tratada. A poda regular é recomendada para reduzir a severidade dessa doença nas plantações de cupuaçu.\n[…]\nOs sabores do cupuaçu derivam de seus fitoquímicos, como taninos, glicosídeos, teograndinas, catequinas, quercetina, kaempferol e isoscutelareína. Também contém teacrina, cafeína, teobromina e teofilina, encontradas no cacau, embora com uma quantidade muito menor de cafeína. Ao contrário do chocolate feito do cacau, o cupulate (\"chocolate\" de cupuaçu) é livre de teobromina e cafeína.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Baobá",
      "descricao": "Árvore do gênero Adansonia, de tronco muito largo, típica da África e de Madagascar"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em que livro francês o protagonista arranca brotos de baobá para que eles não destruam seu minúsculo asteroide?",
    "resposta": "O Pequeno Príncipe",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Little_Prince"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Little_Prince",
        "situacao": "ok",
        "texto": "The Little Prince (French: Le Petit Prince, pronounced [lə p(ə)ti pʁãs]) is a novella written and illustrated by French writer and aviator Antoine de Saint-Exupéry. It was first published in English and French in the United States by Reynal & Hitchcock in April 1943 and was published posthumously in France following liberation; Saint-Exupéry's works had been banned by the Vichy Regime.\n[…]\nThe asteroid has three minuscule volcanoes (two active, and one dormant or extinct) and various plants.\n[…]\nStacy Schiff, one of Saint-Exupéry's principal biographers, wrote of him and his most famous work, \"rarely have an author and a character been so intimately bound together as Antoine de Saint-Exupéry and his Little Prince\", and remarking of their dual fates, \"the two remain tangled together, twin innocents who fell from the sky\".\n[…]\nAfter being translated by Bonifacio del Carril, The Little Prince was first published in Spanish as El principito in September 1951 by the Argentine publisher Emecé Editores. Other Spanish editions have also been created; in 1956 the Mexican publisher Diana released its first edition of the book, El pequeño príncipe, a Spanish translation by José María Francés.\n[…]\nAnother edition of the work was produced in Spain in 1964 and, four years later, in 1968, editions were also produced in Colombia and Cuba, with translation by Luis Fernández in 1961. Chile had its first translation in 1981; Peru in February 1985; Venezuela in 1986, and Uruguay in 1990. The book is among the few books in the Castilian cant Gacería (as El pitoche engrullón) or the Madrid slang Cheli (as El chaval principeras).\n[…]\nIn southern Brazil, in the city of Florianópolis, there is the Avenida Pequeno Príncipe (Little Prince Avenue in Portuguese), whose name is a tribute to Saint-Exupéry, who passed through the city during his aviator career, an event that became part of the local culture."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Le_Petit_Prince",
        "situacao": "ok",
        "texto": "Le Petit Prince (pronúncia em francês: ​[lə.pə.tiˈpʁɛ̃s]) (prt: O Principezinho; bra: O Pequeno Príncipe) é uma novela do escritor, aviador aristocrata francês Antoine de Saint-Exupéry, originalmente publicada em inglês e francês em abril de 1943 nos Estados Unidos.\n[…]\nO Pequeno Príncipe retoma o esquema do conto filosófico criado por Voltaire. Especificamente, guarda certa semelhança com Micromégas, um gigante de Sirius que decide aventurar-se pelo Universo, visita o Sistema Solar e vem parar na Terra, discutindo filosofia com os seres humanos. Também o principezinho visita vários asteroides/planetas e discute filosofia.\n[…]\nUm filme musical intitulado The Little Prince foi feito baseado no livro e lançado em 1974.\n[…]\nEm dezembro de 2016, o Departamento de Livro, Leitura, Literatura e Bibliotecas (DLLLB) do Ministério da Cultura do Brasil (Minc) lança o primeiro livro com acessibilidade e em múltiplos formatos, O Pequeno Príncipe, com um kit seguindo os protocolos internacionais de acessibilidade, durante o seminário Autonomia e Direito para Todos em Brasília.\n[…]\nNo Japão, há um museu em Hakone dedicado ao personagem principal do livro.\n[…]\nNo Brasil, em Florianópolis, a Avenida Pequeno Príncipe leva o nome da obra, numa homenagem a Saint-Exupéry, que passou pela cidade durante sua carreira de aviador e cuja presença se tornou parte da cultura local.\n[…]\nAs Aventuras do Pequeno Príncipe\n[…]\n«O Principezinho / Pequeno Príncipe em 280 línguas»\n[…]\n«O Pequeno Principe» , tradução em Português (Brasil) por Vinna Mara Fonseca\n[…]\nO PEQUENO PRÍNCIPE: UMA NOVELA FILOSÓFICA?\n[…]\n«La Eta Princo - O Pequeno Principe, traduções em diversas línguas»\n[…]\nLivro \"O Pequeno Príncipe\" em PDF na Biblioteca Mundial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Cicuta",
      "descricao": "Planta venenosa Conium maculatum, da família da cenoura"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que filósofo grego, condenado à morte em Atenas, morreu ao beber uma infusão de cicuta?",
    "resposta": "Sócrates",
    "distratores": [
      "Platão",
      "Aristóteles",
      "Diógenes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Conium_maculatum",
      "https://en.wikipedia.org/wiki/Trial_of_Socrates"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Conium_maculatum",
        "situacao": "ok",
        "texto": "Conium maculatum, commonly known as hemlock (British English) or poison hemlock (in North America), is a highly poisonous flowering plant  and a nitrophile weed species in the carrot family Apiaceae.\n[…]\nAll parts of the plant are toxic, particularly the seeds and roots, and especially when ingested. Hemlock is well-known as the poison that killed the philosopher Socrates after his trial in Ancient Greece.\n[…]\nConium maculatum has 23 synonyms, 16 of them species, according to Plants of the World Online.\n[…]\nIn British, Australian, and New Zealand English, the most prominent vernacular name is hemlock. This name is derived from the Old English words hymlice, hymlic, or hemlic, likely referring to Conium. More certainly in the 1500s, it referred to Conium maculatum and was used in herbalist texts. It entered Middle English as hemeluc, hemlok, hemlake, hemlocke, hemloc, or hemblock. In this period, it was first spelled as hemlock by William Shakespeare in his play Henry V in 1623.\n[…]\nConium contains the piperidine alkaloids coniine, N-methylconiine, conhydrine, pseudoconhydrine, and gamma-coniceine (or g-coniceïne), which is the precursor of the other hemlock alkaloids.\n[…]\nIn ancient Greece, hemlock was used to poison condemned prisoners. Conium maculatum is the plant that killed Theramenes, Socrates, Polemarchus, and Phocion. Socrates, the most famous victim of hemlock poisoning, was sentenced to death at his trial; he took an infusion of hemlock. In Greek mythology, poisonous plants like hemlock were sacred to the goddess Hecate and her daughters Circe and Medea.\n[…]\nMedia related to Conium maculatum at Wikimedia Commons\n[…]\nConium, Flora Europaea"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Trial_of_Socrates",
        "situacao": "ok",
        "texto": "The Trial of Socrates (399 BC) was held to determine the philosopher's guilt of two charges against the city of Athens: asebeia (impiety) and corruption of the youth. The accusers cited two impious acts: \"failing to acknowledge the gods of the city\" and \"introducing new deities\".\n[…]\nIn the Phaedo the poison given to Socrates is not identified by name, but is called τὸ φάρμακον (to pharmakon), \"the drug\". Because of this and the differences in symptoms between various species called κώνειον (kōneion, hemlock in Greek) or cicūta (hemlock in Latin) the identification of poison hemlock as the plant used in the execution has been the subject of debate.\n[…]\nIn 1679 the Swiss physician Johann Jakob Wepfer published Cicutae aquaticae historia et noxae. In it he describes the symptoms of eight children who had eaten the roots of water hemlock. He expressed doubts that hemlock could have been the \"cold\" poison used in the execution of Socrates as the symptoms were of a \"hot\" poison with seizures, arched backs, and foaming at the mouth. Wepfer was unaware that the Cicuta he was studying was not the same plant used in Athenian executions.\n[…]\nHe wrote, \"The quietness, the calmness, the regularity of the effects of the penetration of the poison into Socrates's body (so different from the chaos, squalor, and collapse described by Nicander and modern toxicologies) is the quietness of a ritual, the katharmos or purification of the soul from the prison of the body.\" In the early 2000s, Enid Bloch's paper reviewing the available evidence concluded that these arguments resulted from confusion between different species commonly called hemlock.\n[…]\nApology of Socrates - Read Online at Tufts.edu\n[…]\nWelcome to Socrates On Trial · What if Socrates Returned?"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Conium_maculatum",
        "situacao": "ok",
        "texto": "Conium maculatum L., conhecida pelo nome comum de cicuta (não confundir com o género Cicuta),\n[…]\né uma espécie herbácea pertencente ao género Conium da família Apiaceae. A planta é conhecida por dela se extrair a cicuta, uma potente mistura de alcalóides, entre os quais a cicutina, utilizada na Europa desde a antiguidade clássica como veneno. Em 399 a.C. o filósofo Sócrates foi condenado à morte por ingestão de uma tisana de cicuta.\n[…]\nNa antiguidade clássica a intoxicação por cicuta foi usada pelos gregos para tirar a vida aos condenados a pena de morte. O caso mais paradigmático do uso deste método de execução foi a morte de Sócrates, consumada pela ingestão de uma infusão à base de cicuta no ano de 399 a.C. Após ingerir a cicuta, Sócrates passeou pelo quarto, como lhe haviam recomendado, até que sentiu as pernas pesadas.\n[…]\nDeitou-se de costas para que, em intervalos, lhe examinassem os pés e as pernas, até que deixou de os sentir. Sócrates começou então a ficar frio e enrijecido, até que sobreveio a morte (ver: A Morte de Sócrates).\n[…]\nOs efeitos relatados devido à ingestão de Conium maculatum foram  apenas registados em animais, apresentando uma maior gravidade em bovinos quando comparada à observada em porcos e ovinos.\n[…]\nHumanos: Não foram observados efeitos teratogénicos devido ao consumo de Conium maculatum.\n[…]\nC. maculatum no Herbário Virtual da Universitat de les Illes Balears\n[…]\nRevisión de cuidados y usos medicinales de la cicuta (Conium maculatum L.). Universidad Autónoma del Estado de Morelos\n[…]\nOcurrencias de Bombero : Cicuta",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Seringueira",
      "descricao": "Árvore amazônica Hevea brasiliensis, cujo látex é a principal fonte de borracha natural"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que empresário americano dos automóveis fundou uma cidade na Amazônia, no fim dos anos 1920, para plantar seringueiras?",
    "resposta": "Henry Ford",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fordl%C3%A2ndia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fordl%C3%A2ndia",
        "situacao": "ok",
        "texto": "Fordlândia is a district and adjacent area of 14,268 square kilometres (5,509 sq mi) in the city of Aveiro, Pará, Brazil. It is located on the east banks of the Tapajós river roughly 300 kilometres (190 mi) south of the city of Santarém.\n[…]\nIt was established by American industrialist Henry Ford in the Amazon rainforest in 1928 as a prefabricated industrial town intended to be inhabited by 10,000 people to secure a source of cultivated rubber for the automobile manufacturing operations of the Ford Motor Company in the United States.\n[…]\nGreg Grandin's book, The Rise and Fall of Henry Ford's Forgotten Jungle City, explains \"Ford had very particular understandings about what a proper diet should be … He tried to impose brown rice and whole-wheat bread and canned peaches and oatmeal — and that itself created discontent\". The unfamiliar food, American-style housing, and other limitations caused friction with the local workers.\n[…]\nBy 1945, synthetic rubber had been developed, reducing world demand for natural rubber. Ford's investment opportunity dried up overnight without producing any rubber for Ford's tires, and the second town was also abandoned. In 1945, Henry Ford's grandson Henry Ford II sold the area comprising both towns back to the Brazilian government for a loss of over US$20 million (equivalent to $358 million in 2025).\n[…]\nIn the PC game The Amazon Trail, the player travels back in time to meet Henry Ford there.\n[…]\nBraudeau, Michel (2004). \"Henry Ford vaincu par la « rouille »\". Le rêve amazonien [Henry Ford defeated by 'rust'] (in French). éditions Gallimard. ISBN 2-07-077049-4.\n[…]\nColón, Marcos (2018). Beyond Fordlândia: An Environmental Account of Henry Ford's Adventures in the Amazon. Amazônia Latitude Films."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fordl%C3%A2ndia",
        "situacao": "ok",
        "texto": "Fordlândia é um distrito brasileiro de 14 568 km² de extensão, no município paraense de Aveiro, situado às margens do Rio Tapajós, na Amazônia. Recebeu este nome porque foi uma cidade operária do projeto agroindustrial \"Fordlândia\" do empresário estadunidense Henry Ford em 1927.\n[…]\nOs termos da concessão, proposta pelo então governador Dionísio Bentes, isentavam a Companhia Ford do Brasil pagamento de qualquer taxa de exportação dos bens produzidos na gleba (borracha, látex, pele, couro, petróleo, sementes, madeira e outros). Jorge Dumont Villares, representante do governador, conduziu as negociações em visita a Henry Ford nos EUA, enquanto no Brasil \"O. Z. Ide\" e \"W. L. Reeves Blakeley\" representaram a Ford.\n[…]\nCom o falecimento de Henry Ford, seu neto Henry Ford II assumiu o comando da empresa nos Estados Unidos e decidiu encerrar o projeto de plantação de seringueiras no Brasil.\n[…]\nNa literatura, o historiador da Universidade de Nova Iorque Greg Grandin lançou o livro Fordlândia – A Ascensão e a Queda da Cidade Perdida na Selva de Henry Ford, considerado um dos cem melhores livros publicados em 2009 (no ranking do The New York Times). Além disso, um documentário sobre a cidade também foi desenvolvido pelos brasileiros Marinho Andrade e Daniel Augusto.\n[…]\nGaley, John (1979), «Industrialist in the Wilderness: Henry Ford's Amazon Venture», Journal of Interamerican Studies and World Affairs, ISSN 0022-1937, 21 (2): 261-89 .\n[…]\n«Fordlândia: A derrapada do Ford (arquivado)»\n[…]\nFordlandia: The Rise and Fall of Henry Ford’s Forgotten Jungle City, video e discussão - Democracy Now, postado em 2 de julho de 2009 (transcrição avaliada).\n[…]\nFordlandia on Flickr, imagens históricas por Benson Ford Research Center, biblioteca localizada no the Henry Ford Museum.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Seringueira",
      "descricao": "Árvore amazônica Hevea brasiliensis, cujo látex é a principal fonte de borracha natural"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1876, um inglês levou sementes de seringueira da Amazônia. Em que continente cresceram as plantações que derrubaram a borracha brasileira?",
    "resposta": "Ásia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hevea_brasiliensis",
      "https://en.wikipedia.org/wiki/Amazon_rubber_boom"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hevea_brasiliensis",
        "situacao": "ok",
        "texto": "Hevea brasiliensis, the Pará rubber tree, sharinga tree, seringueira, or, most commonly, rubber tree or rubber plant, is a flowering plant belonging to the spurge family, Euphorbiaceae. It is originally native to the Amazon basin, but is now pantropical in distribution due to introductions. It is the most economically important member of the genus Hevea, because the milky latex extracted from the \n[…]\nOne frost can cause the rubber from an entire plantation to become brittle and break once it has been refined.\n[…]\nRubber production then moved to parts of the world where it is not indigenous, and therefore not affected by local plant diseases. Today, most rubber tree plantations are in South and Southeast Asia, the top rubber producing countries in 2011 being Thailand, Indonesia, Malaysia, India and Vietnam.\n[…]\nThe toxicity of arsenic to insects, bacteria, and fungi has led to the heavy use of arsenic trioxide on rubber plantations, especially in Malaysia.\n[…]\nThe majority of the rubber trees in Southeast Asia are clones of varieties highly susceptible to the South American leaf blight—Pseudocercospora ulei. For these reasons, environmental historian Charles C. Mann, in his 2011 book, 1493: Uncovering the New World Columbus Created, predicted that the Southeast Asian rubber plantations will be ravaged by the blight in the not-too-distant future, thus creating a potential calamity for international industry.\n[…]\nHevea brasiliensis produces cyanogenic glycosides (CGs) as a defense, concentrated in the seeds. (Although effective against other attackers, cyanogenic glycosides are not very effective against fungal pathogens. In rare cases, they are even detrimental. This is the case for the rubber tree, which actually suffers worse from Pseudocercospora ulei when it produces more cyanogenic glycosides. This may be because cyanide inhibits the production of other defensive metabolites.\n[…]\nRubberwood"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Amazon_rubber_boom",
        "situacao": "ok",
        "texto": "The Amazon rubber cycle or boom (Portuguese: Ciclo da borracha, Brazilian Portuguese: [ˈsiklu da buˈʁaʃɐ]; Spanish: Fiebre del caucho, pronounced [ˈfjeβɾe ðel ˈkawtʃo]) was an important part of the socioeconomic history of Brazil and Amazonian regions of neighboring countries, contributing to the commercialization of rubber and the genocide of region's indigenous peoples.\n[…]\nNatural rubber is an elastomer, also known as tree gum, India rubber, and caoutchouc, which comes from the rubber tree in tropical regions. The South American natives first discovered rubber; sometime dating back to 1600 BC. The indigenous people of the Amazon rainforest developed ways to extract rubber from the rubber tree (Hevea brasiliensis), a member of the family Euphorbiaceae.\n[…]\nThe rubber barons rounded up all the natives and forced them to tap rubber out of the trees. One plantation started with 50,000 natives but, when discovered, only 8,000 were still alive. Slavery and systematic brutality were widespread, and in some areas, 90% of the native population was wiped out. These rubber plantations were part of the Brazilian rubber market, which declined as rubber plantations in Southeast Asia became more effective.\n[…]\nThousands of workers from various regions of Brazil were transported under force to obligatory servitude. Many suffered death by tropical diseases of the region, such as malaria and yellow fever. The northeast region sent 54,000 workers to the Amazon alone, 30,000 of which were from Ceará. These new rubber workers were called soldados da borracha (\"rubber soldiers\") in a clear allusion to the role of the latex in supplying the U.S. factories with the rubber necessary to fight the war.\n[…]\nThe 2015 film Embrace of the Serpent depicts Amazonian rubber harvesting.\n[…]\nAitchison, Mark. \"The Tree that Weeps: A History of Amazon Rubber\". Brazilmax.com, n.d. Web. 1 Jun 2011.."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Seringueira",
        "situacao": "ok",
        "texto": "Hevea brasiliensis L., conhecida pelos nomes comuns de seringueira e árvore-da-borracha, é uma árvore da família das Euphorbiaceae. Muito comum de se encontrar na floresta amazônica, apresenta folhas compostas, flores pequeninas e reunidas em amplas panículas. Sua madeira é branca e leve e, de seu látex, se fabrica a borracha. Seu fruto encontra-se em uma grande cápsula com sementes ricas em óleo,\n[…]\nO ciclo brasileiro da borracha entrou em declínio quando grandes hortos foram plantados por ingleses, para fins de exploração, no continente africano tropical, na Malásia e no Sri Lanka. Um segundo ciclo da borracha ocorreu brevemente durante a II Guerra Mundial.\n[…]\nO nome \"seringueira\" vem de \"seringa\", produto feito a partir do látex da planta pelos portugueses. \"Árvore-da-borracha\" refere-se a aplicação do látex da planta para a fabricação de borracha.\n[…]\nMas, já a partir de 1875, o botânico inglês Henry Wickham, a serviço do Império Britânico, havia coletado sementes da seringueira no vale do Tapajós, enviando-as para Sir Joseph Dalton Hooker, diretor dos Reais Jardins Botânicos de Kew, nos arredores de Londres. Posteriormente, o material foi levado para as colônias britânicas, na Ásia, iniciando-se o processo de multiplicação da Hevea brasiliensis no Sudeste Asiático, sobretudo na Malásia. Ali a produção acabou por superar a do Amazonas.\n[…]\nNos primeiros meses de 1942, no teatro de operações da Guerra do Pacífico, o Império do Japão dominou militarmente o sul do Pacífico (ver: Esfera de Coprosperidade da Grande Ásia Oriental). A Malásia foi ocupada e o controle de seus seringais passou para mãos nipônicas, resultando em queda de 97% na produção de borracha asiática. Necessitando de suprimentos de borracha, os aliados da II Guerra Mundial voltaram-se para o fornecedor então disponível, o Brasil.\n[…]\nFalsa-seringueira\n[…]\nInstituto Tecnológico da Borracha - ITeB (Selo Seringueira Ambiental)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Cordyceps",
      "descricao": "Fungos parasitas de insetos, como o Ophiocordyceps unilateralis, que manipula o comportamento de formigas"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que videogame, depois transformado em série de TV, imaginou humanos virando zumbis por causa do fungo cordyceps?",
    "resposta": "The Last of Us",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Last_of_Us",
      "https://en.wikipedia.org/wiki/Ophiocordyceps_unilateralis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Last_of_Us",
        "situacao": "ok",
        "texto": "The Last of Us is an action-adventure video game series and media franchise created by Naughty Dog and published by Sony Interactive Entertainment. The series is set in a post-apocalyptic United States ravaged by cannibalistic humans infected by a mutated fungus in the genus Cordyceps.\n[…]\nThe Last of Us was released for the PlayStation 3 on June 14, 2013. A remastered version, titled The Last of Us Remastered, was released for the PlayStation 4 in July 2014. Twenty years after losing his daughter Sarah during the outbreak of the mutant Cordyceps fungus, Joel is tasked with escorting Ellie, a teenage girl who is immune to the infection, across a post-apocalyptic United States so the revolutionary group Fireflies can potentially create a cure.\n[…]\nThe Last of Us won the Game Developers Choice Award for Best Design, for which the sequel was nominated. Both games were nominated for the British Academy Games Award for Game Design, and Part II won the inaugural Innovation in Accessibility award at The Game Awards 2020.\n[…]\nThe cast's performances received widespread acclaim, with critics singling out Pascal and Ramsey's chemistry. Critics felt the second season reinforced The Last of Us as the best video game adaptation; The deeper themes and more complex characters were praised, though some reviewers found the quicker pace detrimental and the narrative unsatisfyingly incomplete.\n[…]\nThe Last of Us is the first live-action video game adaptation to receive major awards consideration. The first season received 24 nominations at the 75th Primetime Emmy Awards, with a leading eight wins at the Creative Arts Emmy Awards, while the second season earned 17 nominations at the 77th Primetime Emmy Awards."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ophiocordyceps_unilateralis",
        "situacao": "ok",
        "texto": "Ophiocordyceps unilateralis, commonly known as zombie-ant fungus, is an insect-pathogenic fungus, discovered by the British naturalist Alfred Russel Wallace in 1859. Zombie ants, infected by the Ophiocordyceps unilateralis fungus, are predominantly found in tropical rainforests.\n[…]\nAfter years of research, the taxonomy of Ophiocordyceps unilateralis is becoming increasingly clear.\n[…]\nThe genus Cordyceps comprises over 400 species, historically classified in the family Clavicipitaceae within the order Hypocreales. The classification was based on different morphological characteristics such as filiform ascospores and cylindrical asci. sister group with Tolypocladium, into Ophiocordycipitaceae. Fungi able to parasitize ants were also included in the transfer, such as Cordyceps unilateralis which was later renamed Ophiocordyceps unilateralis.\n[…]\nA 48-million-year-old fossil of a leaf stem exhibiting dumbbell-shaped marks characteristic of those made by an ant in the death-grip of Ophiocordyceps unilateralis was discovered in the Messel pit (Germany).\n[…]\nIn the video game series The Last of Us, Ophiocordyceps unilateralis has evolved to infect humans, thus creating  zombie-like enemies in the game. Also, in episode two of the 2023 television series The Last of Us on HBO Max, Ophiocordyceps unilateralis is revealed to be the primary cause of the infected outbreak and subsequent collapse of human civilization.\n[…]\nThe video game Grounded by Obsidian Entertainment has a similar type of fungal infection, known as \"Fungal Growth\", that portrays a few of Ophiocordyceps unilateralis behaviors.\n[…]\nThe creatures in the 2021 South African horror film Gaia are also inspired by Ophiocordyceps unilateralis.\n[…]\nOphiocordyceps unilateralis at UniProt.org. Accessed on 2010-08-22."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Last_of_Us_%28franquia%29",
        "situacao": "ok",
        "texto": "The Last of Us (também conhecido como TLoU) é uma franquia de jogos eletrônicos de ação-aventura, tiro em terceira pessoa e survival horror exclusiva da Sony para os consoles da PlayStation, criada por Neil Druckmann. A franquia é situada em um mundo pós-apocalíptico, com seres humanos hostis e criaturas canibais infectadas por uma mutação do fungo cordyceps.\n[…]\nThe Last of Us foi lançado para o PlayStation 3 em 14 de junho de 2013. Uma versão remasterizada intitulada The Last of Us Remastered foi lançada para o PlayStation 4 em julho de 2014. Vinte anos após perder sua filha Sarah durante o surto do fungo mutante Cordyceps, Joel é encarregado de escoltar Ellie, uma adolescente imune à infecção, através dos pós-apocalípticos para que o grupo revolucionário Vaga-Lumes possa potencialmente criar uma cura.\n[…]\nO principal elemento do universo de The Last of Us é o fungo parasita cordyceps, que existe na vida real e geralmente parasita insetos, repondo seus tecidos e passando a controlar seus comportamentos. Na franquia, o cordyceps pode parasitar humanos, o que é considerado impossível na vida real. A história não explica em detalhes como a infecção do fungo avançou de insetos para humanos, apenas diz que houve uma “mutação” e que a infecção se espalhou rapidamente devido a plantações contaminadas.\n[…]\nApós o surto da Infecção Cerebral do Cordyceps (ICC) acontecer nos Estados Unidos em setembro de 2013, a FEDRA (Agência Federal de Resposta a Desastres) assumiu o controle das Forças Armadas e declarou lei marcial, removendo os burocratas do poder. Para conter o fungo, a FEDRA fez com que os militares transferissem todos os humanos não infectados para grandes zonas de quarentena nas principais cidades do país, com o objetivo de protegê-los dos infectados.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Amendoim",
      "descricao": "Planta leguminosa Arachis hypogaea, cujas sementes comestíveis se formam sob o solo"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Depois que a flor é polinizada, onde se formam as vagens do amendoim?",
    "resposta": "Debaixo da terra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Peanut"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peanut",
        "situacao": "ok",
        "texto": "The peanut (Arachis hypogaea), also known as the groundnut, goober (US, via Kikongo), goober pea, pindar (US, via Kikongo) or monkey nut (UK), is a legume crop grown mainly for its edible seeds, contained in underground pods. It is widely grown in the tropics and subtropics by small and large commercial producers, both as a grain legume and as an oil crop.\n[…]\nArachis hypogaea was described by Carl Linnaeus in his Species Plantarum in 1753. It is an annual herbaceous plant growing 30 to 50 centimetres (12 to 20 in) tall. It belongs to the botanical family Fabaceae, also known as Leguminosae, and commonly known as the legume, bean, or pea family. Like other legumes, peanuts harbor symbiotic nitrogen-fixing bacteria in their root nodules.\n[…]\nThe Arachis genus is native to South America, east of the Andes, around Peru, Bolivia, Argentina, and Brazil. Cultivated peanuts (A. hypogaea) arose from a hybrid between two wild species of peanut, thought to be A. duranensis and A. ipaensis. The initial hybrid would have been sterile, but spontaneous chromosome doubling restored its fertility, forming what is termed an amphidiploid or allotetraploid. Genetic analysis suggests the hybridization may have occurred only once and gave rise to A.\n[…]\nDepending on growing conditions and the cultivar of peanut, harvest is usually 90 to 130  days after planting for subspecies A. h. fastigiata types, and 120 to 150 days after planting for subspecies A. h. hypogaea types.\n[…]\nPeanuts tested to have high aflatoxin are used to make peanut oil where the mold can be removed. The ant leaves can be affected by a fungus, Alternaria arachidis.\n[…]\nA Philippine dish using peanuts is kare-kare, with meat in a spicy peanut sauce.\n[…]\nVariath, Murali T., and P. Janila (2017). \"Economic and Academic Importance of Peanut\". The Peanut Genome pp. 7–26.\n[…]\nPeanut at the Wikibooks Cookbook subproject"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Amendoim",
        "situacao": "ok",
        "texto": "O amendoim (Arachis hypogaea L.) é uma planta da família Fabaceae. A planta do amendoim é uma planta herbácea, com caule pequeno e folhas compostas e pinadas, contendo quatro folíolos de formato elíptico e com inserção alternada. Possui abundante indumento, raiz aprumada, medindo entre 30–50 cm de profundidade.\n[…]\nA espécie Arachis hypogaea conta com uma grande variedade de nomes comuns, que alternam de país para país:\n[…]\n«Alcagoita» provém do vocábulo nauatle cacahuete, que significa «cacau da terra».\n[…]\nTintas, vernizes, óleos lubrificantes, roupas de couro, polidor de móveis, inseticidas e nitroglicerina são feitos de óleo de amendoim. Alguns processos de saponificação utilizam óleo de amendoim, assim como a produção de diversos cosméticos. A porção de proteínas do óleo é usado na fabricação de algumas fibras têxteis.\n[…]\nTambém pode ser usado, como outros legumes e grãos, para fazer um leite sem lactose, como bebida, o leite de amendoim.\n[…]\nO amendoim pode ser usado para suprir as necessidades diárias de proteína que nosso organismo necessita, porém é necessário combiná-lo com outros alimentos tais como: cereais integrais (supre a deficiência de metionina), legumes (supre a deficiência de lisina e treonina) ou com levedura de cerveja (supre a deficiência de metionina e treonina) (Pamplona, p. 235). O amendoim é pobre em metionina, lisina e treonina, por isso esse cuidado (ibid.).\n[…]\nO estado de São Paulo concentra mais de 90% da produção brasileira de amendoim, sendo que o Brasil exporta cerca de 30% do amendoim que produz.\n[…]\nA produção mundial de amendoins no ano de 2018, de acordo com dados da FAOSTAT, foi de aproximadamente 45,9 milhões de toneladas. A China lidera como maior produtor mundial, com 37,7% do volume produzido no mundo. O ranking dos principais produtores mundiais está listado a baixo:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Jabuticaba",
      "descricao": "Fruto da jabuticabeira, árvore brasileira do gênero Plinia"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Ao contrário da maioria das árvores frutíferas, em que parte da jabuticabeira nascem os frutos?",
    "resposta": "No tronco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Plinia_cauliflora"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Plinia_cauliflora",
        "situacao": "ok",
        "texto": "A jaboticaba () or jabuticaba (Portuguese: [ʒabutʃiˈkabɐ]) is a round, edible fruit produced by a jaboticaba tree (Plinia cauliflora), also known as Brazilian grapetree. The purplish-black, white-pulped fruit grows directly on the trunk of the tree, making it an example of 'cauliflory'. It is eaten raw or used to make jellies, jams, juice or wine. The tree, of the family Myrtaceae, is native to th\n[…]\nThe name jaboticaba derives from the Tupi word îaboti, Lusitanized as jaboti/jabuti (tortoise) + kaba (place), meaning \"the place where tortoises are found\"; it has also been interpreted to mean 'like turtle fat', referring to the fruit's white pulp. It may also derive from ïapotï'kaba meaning \"fruits in a bud\".\n[…]\nIn Brazil, the fruit of several related species in the Plinia and Myrciaria genera share the same common name.\n[…]\nIn Brazilian politics, and less commonly in everyday speech, \"jabuticaba\" is a slang that describes a political or legal setting that is considered absurd, unusual, or needlessly complex, among others, that could only exist in Brazil. It is a reference to the popular belief that jaboticaba trees can only grow in Brazil.\n[…]\nMyrciaria glazioviana (jabuticaba amarela or yellow jaboticaba)\n[…]\nMyrciaria tenella (jabuticaba macia or soft jaboticaba)\n[…]\nPlinia coronata (jabuticaba coroada or king jaboticaba)\n[…]\nPlinia grandifolia (jabuticaba graúda or large jaboticaba)\n[…]\nPlinia martinellii (jabuticabinha da mata or little forest jaboticaba)\n[…]\nPlinia oblongata (jabuticaba azeda or sour jaboticaba)\n[…]\nPlinia peruviana (jabuticaba cabinho or small stemmed jaboticaba)\n[…]\nPlinia phitrantha (jabuticaba branca or white jaboticaba)\n[…]\nPlinia rivularis (jabuticaba de cacho or bunched jaboticaba)\n[…]\nPlinia spirito-santensis (jabuticaba peluda de cruz, hairy cross jaboticaba)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jabuticaba",
        "situacao": "ok",
        "texto": "A jabuticaba ou jaboticaba é o fruto da jaboticabeira ou jabuticabeira, uma árvore frutífera brasileira da família das mirtáceas, nativa da Mata Atlântica. Com a recente mudança na nomenclatura botânica, há divergências sobre a classificação da espécie: Myrciaria cauliflora (Mart.) O.Berg 1854, Plinia trunciflora (O.Berg) Kausel 1956 ou Plinia cauliflora (Mart.) Kausel 1956.\n[…]\nÉ planta catia, higrófila e que exige sol de moderado a pleno. A árvore, de até dez metros de altura, tem tronco claro, manchado, liso, com até quarenta centímetros de diâmetro. As folhas, simples, têm até sete centímetros de comprimento. Floresce na primavera e no verão, produzindo grande quantidade de frutos. As flores (e os frutos) crescem em aglomerados no tronco e ramos (caulifloria).\n[…]\nA cidade de Virginópolis, em Minas Gerais,  também tem a tradição anual de realizar um Festival da Jabuticaba. Sempre na época em que as árvores estão mais carregadas de frutos, o que proporciona à cidade uma produção tradicional de licores, geleias, vinhos e doces a partir das frutas colhidas.\n[…]\njabuticaba-açu-paulista: frutos grandes de sabor levemente adstringente, consumidos \"in natura\"\n[…]\njabuticaba-ponhema: muito produtiva, frutos grandes ligeiramente amargos,usada na produção de geléia\n[…]\njabuticaba-precoce: frutificação frequente, frutos pouco resistentes, com casca muito fina\n[…]\njabuticaba-vermelha: porte baixo, frutos vermelho-vinho\n[…]\nEntre safras, é necessário escovar o tronco e os galhos para retirar cascas e resíduos das frutas e/ou flores antigas. Para manter o solo úmido, uma boa dica é colocar uma garrafa cheia de água com um furo na base ao lado do tronco. Porém, regas constantes são indispensáveis para uma boa colheita. O melhor momento para colher ocorre quando os frutos estão bem maduros, pretos e brilhantes. Quanto mais maduros, mais doces eles serão.\n[…]\njabuticaba-sabará\n[…]\nlicor de jabuticaba",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Armillaria ostoyae",
      "descricao": "Espécie de fungo cujo exemplar na Floresta Nacional Malheur é um dos maiores seres vivos conhecidos"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O famoso fungo gigante da Floresta Nacional Malheur, um Armillaria que ocupa quase dez quilômetros quadrados, fica em que estado americano?",
    "resposta": "Oregon",
    "distratores": [
      "Califórnia",
      "Texas",
      "Flórida"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Armillaria_ostoyae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Armillaria_ostoyae",
        "situacao": "ok",
        "texto": "Armillaria ostoyae (synonym A. solidipes) is a pathogenic species of fungus in the family Physalacriaceae. It has decurrent gills and the stipe has a ring. The mycelium invades the sapwood of trees, and is able to disseminate over great distances under the bark or between trees in the form of black rhizomorphs (\"shoestrings\"). In most areas of North America, it can be distinguished from other Armi\n[…]\nostoyae covers only 38% of the estimated land area of the Oregon \"humongous fungus\" at 3.5 square miles (9.1 km2), (2,240 acres (910 ha) which may weigh as much as 35,000 tons. It is currently the world's largest single living organism. The species possibly covers more total geographical area than any other single living organism.\n[…]\nArmillaria ostoyae is mostly common in the cooler regions of the northern hemisphere. In North America, this fungus is found on host coniferous trees in the forests of British Columbia and the Pacific Northwest. It also grows in parts of Asia. While Armillaria ostoyae is distributed throughout the different biogeoclimatic zones of British Columbia, the root disease causes the greatest problem in the interior parts of the region in the Interior Cedar Hemlock biogeoclimatic zone.\n[…]\nA mushroom of this type in the Malheur National Forest in the Strawberry Mountains of eastern Oregon, was found to be the largest fungal colony in the world, spanning an area of 3.5 square miles (2,200 acres; 9.1 km2). This organism is estimated to be some 8,000 years old and may weigh as much as 35,000 tons.\n[…]\nAnother fungus, Hypholoma fasciculare, has been shown in early experiments to competitively exclude Armillaria ostoyae in both field and laboratory conditions; further experimentation is required to discover whether this treatment works.\n[…]\nEarly Results from Field Trials Using Hypholoma fasciculare to Reduce Armillaria ostoyae Root Disease in Canadian Journal of Botany (2004)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Armillaria_solidipes",
        "situacao": "ok",
        "texto": "O Armillaria solidipes (antes designado Armillaria ostoyae) é um fungo que pertence ao género Armillaria, também conhecidos como cogumelo-do-mel.\n[…]\nFoi encontrado em novembro de 2000 sob o solo da Floresta Nacional de Malheur, nas montanhas Blue no leste do estado chuvoso de Oregon, é atualmente considerado como a maior colônia de fungos do mundo. Através de estudos de DNA e índices de taxa de crescimento, descobriu-se que este fungo cobre uma área de 8,9 km² (equivalente a 1220 campos de futebol).\n[…]\nA sua idade é difícil de avaliar, e embora alguns estudiosos afirmem que este organismo vivo pode ter 2400 anos de idade, pesquisas recentes com base no genoma do fungo parecem indicar que pode ter 8000 anos. Estima-se que este fungo possa ter uma massa total de 605 toneladas. Ele é considerado como o maior organismo do mundo.\n[…]\nO fungo nasceu como uma partícula minúscula (esporo) impossível de ser vista, e vem estendendo seus filamentos, entre as raízes das árvores. À superfície do solo, ele possui a forma de pequenos cogumelos de aparência inocente, mas sob o solo (micélio) fixa-se nas raízes das árvores da floresta, roubando-lhes água, nutrientes, provocando putrefação e morte das mesmas. Embora existam espécies de árvores que resistam a este fungo, a taxa de crescimento fica comprometida.\n[…]\nAssim, abre caminho para que espécies vegetais floresçam no lugar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Caju",
      "descricao": "Pseudofruto do cajueiro, Anacardium occidentale, árvore nativa do Nordeste brasileiro"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No caju, a parte suculenta é um pseudofruto. Qual parte é o verdadeiro fruto da planta?",
    "resposta": "A castanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cashew"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cashew",
        "situacao": "ok",
        "texto": "Cashew is the common name of a tropical evergreen tree Anacardium occidentale, in the family Anacardiaceae. It is the source of the cashew nut and the cashew apple. The tree can grow as tall as 14 meters (46 feet).\n[…]\nThe English name derives from the Portuguese name for the fruit of the cashew tree: Caju (Portuguese pronunciation: [kaˈʒu]), also known as acaju, which itself is from the Tupi word acajú, literally meaning \"nut that produces itself\".\n[…]\nThe generic name Anacardium is composed of the Greek prefix ana- (ἀνά-, aná, 'up, upward'), the Greek cardia (καρδία, kardía, 'heart'), and the Neo-Latin suffix -ium. It possibly refers to the heart shape of the fruit, to \"the top of the fruit stem\" or to the seed. The word anacardium was earlier used to refer to Semecarpus anacardium (the marking nut tree) before Carl Linnaeus transferred it to the cashew; both plants are in the same family.\n[…]\nThe shell of the cashew nut contains oil compounds that can cause contact dermatitis similar to poison ivy, primarily resulting from the phenolic lipids, anacardic acids, and cardanol. Because it can cause dermatitis, cashews are typically not sold in the shell to consumers. Cardanol, which can be readily and inexpensively extracted from the waste shells, is under research for its potential applications in nanomaterials and biotechnology.\n[…]\nDiscarded cashew nuts are unfit for human consumption and the residues of oil extraction from cashew kernels can be fed to livestock. Animals can also eat the leaves of cashew trees.\n[…]\nSemecarpus anacardium (the Oriental Anacardium), a native of India and closely related to the cashew\n[…]\nMedia related to Anacardium occidentale at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cajueiro",
        "situacao": "ok",
        "texto": "O cajueiro (nome científico Anacardium occidentale) é uma planta  da família Anacardiaceae originária da região nordeste do Brasil, com arquitetura de copa tortuosa e de diferentes portes. Na natureza existem dois tipos: o comum (ou gigante) e o anão. O tipo comum pode atingir entre 5 e 12 metros de altura, mas em condições muito propícias pode chegar a 20 metros. O tipo anão possui altura média d\n[…]\nSeu fruto, a castanha de caju, tem uma forma semelhante a um rim humano; a amêndoa contida no interior da castanha, quando seca e torrada, é popularmente conhecida como castanha-de-caju. Prologando-se ao fruto, existe um pedúnculo (seu pseudofruto) maior, macio, piriforme, também comestível, de cor alaranjada ou avermelhada; é geralmente confundido como fruto.\n[…]\nFrutos são nozes de até 3 centímetros de cor cinza, pseudofruto vermelho ou amarelado suculento e carnoso.\n[…]\nOs frutos completos (pedúnculo e castanha) devem ser colhidos diretamente da árvore, separando-se as castanhas (verdadeiro fruto) da parte suculenta (pseudofruto). A castanha assim preparada está pronta para ser semeada. Um quilograma desse material contém 240 unidades.\n[…]\nA madeira é apropriada para construção civil, serviços de torno, carpintaria e marcenaria, confecção de cabos de ferramentas agrícolas, cepas de tamanco e caixotaria. A árvore é muito cultivada em quase todo o Brasil e no exterior para a obtenção de seu pseudofruto (caju) e de sua castanha; os frutos são muito consumidos em todo o país, e a castanha é bastante popular e exportada para quase todo o mundo. Os frutos ou pedúnculos podem ser consumidos in natura, na forma de suco e de doces caseiros.\n[…]\nO suco de seu fruto é industrializado e altamente apreciado em todo o país. A casca da castanha fornece um óleo industrial. É planta indispensável nos pomares da costa litorânea brasileira. As flores são melíferas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Morango",
      "descricao": "Fruto do morangueiro, Fragaria × ananassa, um pseudofruto com aquênios na superfície"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Botanicamente, o que são os pontinhos na superfície do morango que parecem sementes?",
    "resposta": "Os frutos verdadeiros, chamados aquênios",
    "fonte": [
      "https://en.wikipedia.org/wiki/Strawberry"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Strawberry",
        "situacao": "ok",
        "texto": "The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid plant cultivated worldwide for its fruit. The genus Fragaria, the strawberries, is in the rose family, Rosaceae. The fruit is appreciated for its aroma, bright red colour, juicy texture, and sweetness. It is eaten either fresh or in prepared foods such as jam, ice cream, and chocolates. Artificial strawberry\n[…]\nThe phylogeny of the cultivated strawberry within the genus Fragaria of the Rosaceae family was determined by chloroplast genomics in 2021. The polyploidy (number of sets of chromosomes) is shown as \"2N\" etc. by each species.\n[…]\nIn culinary terms, a strawberry is an edible fruit. From a botanical point of view, it is not a berry but an aggregate accessory fruit, because the fleshy part is derived from the receptacle. Each apparent seed on the outside of the strawberry is actually an achene, a botanical fruit with a seed inside it.\n[…]\nSome people experience an anaphylactoid reaction to eating strawberries. The most common form of this reaction is oral allergy syndrome, but symptoms may also mimic hay fever or include dermatitis or hives, and, in severe cases, may cause breathing problems. Proteomic studies indicate that the allergen may be tied to a protein for the red anthocyanin biosynthesis expressed in strawberry ripening, named Fra a1 (Fragaria allergen1).\n[…]\nStrawberry plants are subject to many diseases, especially when subjected to stress. The leaves may be infected by powdery mildew, leaf spot (caused by the fungus Sphaerella fragariae), leaf blight (caused by the fungus Phomopsis obscurans), and by a variety of slime molds. The crown and roots may fall victim to red stele, verticillium wilt, black root rot, and nematodes. The fruits are subject to damage from gray mold (Botrytis cinerea), rhizopus rot, and leather rot.\n[…]\nFragaria × ananassa data from GRIN Taxonomy Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Morango",
        "situacao": "ok",
        "texto": "Morango (Fragaria × ananassa) é considerado, na linguagem vulgar, como o fruto vermelho do morangueiro, da família das rosáceas. No entanto, em termos científicos não se pode considerar um fruto já que é constituído pelo receptáculo da flor original (composta), em volta do qual se dispõem os frutos (as sementes são visíveis sob a forma de grainhas).\n[…]\nO morango jardim foi criado pela primeira vez na Bretanha, no noroeste da França, na década de 1750 por meio de um cruzamento de Fragaria virginiana do leste da América do Norte  com a variedade  Fragaria chiloensis, que fora trazida do Chile por Amédée-François Frézier em 1714.\n[…]\nExistem várias espécies de morango, sendo a fragaria a mais comum e cultivada em várias partes do mundo.\n[…]\nFragaria vesca\n[…]\nFragaria virginiana\n[…]\nFragaria viridis\n[…]\nContudo, o Departamento de Agricultura americano indica que os níveis estão abaixo dos limites de tolerância. A situação na Europa é semelhante, sendo o morango uma das frutas mais tratadas e possuindo uma superfície rugosa.\n[…]\nEstiva, localizada no Sul de Minas Gerais, é conhecida como a “Terra do Morango”. O cultivo local teve início em 1963, com pioneiros do bairro Ribeirão das Pedras, como Osvaldinho e outros produtores que trouxeram técnicas de Atibaia e São Paulo.\n[…]\nDe acordo com dados do Levantamento Sistemático da Produção Agrícola (LSPA) realizado pelo IBGE, no ano de 2017, o estado de Minas Gerais foi o maior produtor de morango do Brasil. Minas respondeu por aproximadamente 66% da produção nacional, consolidando sua liderança tanto em área plantada quanto em volume colhido naquele ano.\n[…]\nEsse protagonismo se deve ao clima favorável, à topografia montanhosa e ao uso intensivo de tecnologia no cultivo, especialmente em regiões como Estiva, que tradicionalmente se destaca pelo pioneirismo na introdução do morango em solo mineiro desde a década de 1960.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Comigo-ninguém-pode",
      "descricao": "Planta ornamental tóxica do gênero Dieffenbachia"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Mastigar uma folha de comigo-ninguém-pode faz a boca arder e inchar por causa de cristais de qual substância?",
    "resposta": "Oxalato de cálcio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dieffenbachia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dieffenbachia",
        "situacao": "ok",
        "texto": "Dieffenbachia, commonly known as dumb cane or leopard lily, is a genus of tropical flowering plants  in the family Araceae. It is native to the New World Tropics from Mexico and the West Indies south to Argentina. Some species are widely cultivated as ornamental plants, especially as houseplants, and have become naturalized on a few tropical islands.\n[…]\nDieffenbachia is a perennial herbaceous plant with straight stem, simple and alternate leaves containing white spots and flecks, making it attractive as indoor foliage. Species in this genus are popular as houseplants because of their tolerance of shade. The English names, dumb cane and mother-in-law's tongue (also used for Sansevieria species) refer to the poisoning effect of raphides, which can cause temporary inability to speak.\n[…]\nAs Dieffenbachia seguine comes from the tropical rain forest, it prefers to have moisture at its roots, as it grows all the time, it needs constant water, but with loose well aerated soils.\n[…]\nThe cells of the Dieffenbachia plant contain needle-shaped calcium oxalate crystals called raphides. If a leaf is chewed, these crystals can cause a temporary burning sensation and erythema. In rare cases, edema of tissues exposed to the plant has been reported. Mastication and ingestion generally result in only mild symptoms.\n[…]\nSevere cases can occur if Dieffenbachia makes prolonged contact with oral mucosal tissue. In such cases, symptoms generally include severe pain which can last for several days to weeks. Hospitalization may be necessary if prolonged contact is made with the throat, in which severe swelling has the potential to affect breathing.\n[…]\nStories that Dieffenbachia is a deadly poison are urban legends.\n[…]\nMedline Plus: Dieffenbachia\n[…]\nBotanical Online: Dieffenbachia\n[…]\nSpeedup Video – Dieffenbachia growth"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dieffenbachia",
        "situacao": "ok",
        "texto": "Dieffenbachia Schott é um género de origem neotropical, pertencente à família das Araceae, englobando cerca de 51 espécies de plantas herbáceas perenes, conhecido pelas suas folhas variegadas. Várias espécies deste género são populares como plantas de decoração interior, dada a beleza das suas folhas e a sua tolerância ao ensombramento, podendo sobreviver em lugares com muito baixa luminosidade e \n[…]\nA espécie mais utilizada é a Dieffenbachia picta Schott (sinónimo de Dieffenbachia seguine (Jacq.) Schott), mais conhecida por comigo-ninguém-pode (pt-br) ou difenbáquia (pt-pt). O nome do género homenageia Ernst Dieffenbach (1811 - 1855), um naturalista alemão, tradutor da obra de Charles Darwin, com o qual se correspondia.\n[…]\nMuitas espécies deste género possuem como material ergástico nalgumas células do caule e das folhas longos feixes de cristais aciculares de oxalato de cálcio monohidratado designados por ráfides. Estas células são alongadas e funcionam como protecção contra o ataque por herbívoros.\n[…]\nOs ráfides de oxalato de cálcio presentes nas folhas de Dieffenbachia seguine, uma espécie típica do género, aparecem em duas formas: (1) pequenos ráfides com 10 a 20 μm de comprimento e cerca de 1 μm de diâmetro; e (2) ráfides com 130 a 150 μm de comprimento e cerca de 3 μm.\n[…]\nAs células do caule e folhas das plantas deste género contém cristais aciculares de oxalato de cálcio chamados ráfides. Se as partes da planta que contém ráfides forem ingeridas, os cristais perfuram as mucosas, causando ardor na boca e garganta.\n[…]\nDieffenbachia rebecca hort.\n[…]\nDieffenbachia 'Alfredo'\n[…]\nDieffenbachia 'Aurora'\n[…]\nDieffenbachia 'Bali Hai'\n[…]\nDieffenbachia 'Exotica'\n[…]\nDieffenbachia 'Star Light'\n[…]\nInformação sobre as Dieffenbachia.\n[…]\nInformação toxicológica sobre as Dieffenbachia.\n[…]\nDieffenbachia no ITIS.\n[…]\nPlantas Tóxicas - Dieffenbachia picta e Dieffenbachia Scott (comigo-ninguém-pode)\n[…]\nDie Dieffenbachie als Giftpflanze",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Araucária",
      "descricao": "Árvore Araucaria angustifolia, o pinheiro-do-paraná, típica do Sul do Brasil"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Botanicamente, o pinhão, comido nas festas juninas do Sul, é que parte da araucária?",
    "resposta": "A semente",
    "fonte": [
      "https://en.wikipedia.org/wiki/Araucaria_angustifolia",
      "https://pt.wikipedia.org/wiki/Araucaria_angustifolia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Araucaria_angustifolia",
        "situacao": "ok",
        "texto": "Araucaria angustifolia, the Paraná pine, Brazilian pine or candelabra tree, is a critically endangered species of conifer in the family Araucariaceae. Although the common names in various languages refer to the species as a pine, it does not belong in the genus Pinus.\n[…]\nIn a long term study observing the feeding behaviour throughout the year of the squirrel Guerlinguetus brasiliensis ingrami in a secondary A. angustifolia forest in the Parque Recreativo Primavera in the vicinity of the city of Curitiba, Paraná, of the ten plant species of which the squirrel ate the seeds or nuts, seeds of A. angustifolia were the most important food item in the fall, with a significant percentage of their diet in the winter consisting of the seeds as well.\n[…]\nAraucaria angustifolia is a popular garden tree in subtropical areas, planted for its unusual effect of the thick, 'reptilian' branches with a very symmetrical appearance.\n[…]\nThe seeds of A. angustifolia, similar to large pine nuts, are edible, and are extensively harvested in southern Brazil (Paraná, Santa Catarina and Rio Grande do Sul states), an occupation particularly important for the region's small population of natives (the Kaingáng and other Southern Jê). The seeds, called pinhão [piˈɲɐ̃w] are popular as a winter snack. The city of Lages, in Santa Catarina, holds a popular pinhão fair, in which mulled wine and boiled Araucaria seeds are consumed.\n[…]\nThe hybrid Araucaria angustifolia × araucana is thought to have first arisen \"in a plantation forestry environment in Argentina sometime in the late 19th or early 20th century\". It is thus not a natural hybrid as there are more than 1000 km between the natural stands of the two species."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Araucaria_angustifolia",
        "situacao": "ok",
        "texto": "Araucária (nome científico: Araucaria angustifolia) é a espécie arbórea dominante da floresta ombrófila mista, ocorrendo majoritariamente na região Sul e Sudeste do Brasil, principalmente no sul do estado de São Paulo até as serras do Rio Grande do Sul e na Serra da Mantiqueira, mas é presente também ao longo do restante do Planalto Atlântico Paulista, até o sul do estado de Minas Gerais, na Serra\n[…]\nInternacionalmente é chamado ainda paraná pine, brazilian pine ou candelabra tree. As suas sementes, ditas pinhão, foram historicamente consumidas por povos indígenas, e são hoje parte tradicional da culinária caipira e da região Sul.\n[…]\n\"A cutia (Dasyprocta azarae), como grande apreciadora que é do pinhão e pelo costume que tem de enterrar as sementes, para comê-las depois, talvez seja, graças a este comportamento, uma das disseminadoras mais importantes do pinheiro... É tradição no Sul do Brasil, principalmente no Paraná, considerar a gralha-azul (Cyanocorax caeruleus) como o principal dispersor da pinheiro-do-paraná. Porém, ela raramente desce ao solo, vivendo o tempo todo no alto das árvores, na floresta.\n[…]\nEstima-se que a floresta de araucária cobriria originalmente 200 000 km², tendo diminuído em 97% no último século. Além do corte da araucária para exploração da madeira, seu ecossistema compete em desvantagem com o avanço da fronteira agrícola, os reflorestamentos são poucos e a espécie perde 3 400 toneladas anuais de sementes para consumo alimentar humano.\n[…]\nA Portaria Normativa DC n° 20 de 27 de setembro de 1976 do Instituto Brasileiro de Desenvolvimento Florestal, definiu várias medidas para a proteção das sementes, disciplinando a colheita e comercialização do pinhão e o proibindo o abate de árvores com pinhas na época da queda de sementes. Mas até meados da década de 1980 ainda não existiam restrições importantes à exploração indiscriminada das florestas de araucária."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Tulipomania",
      "descricao": "Bolha especulativa com bulbos de tulipa ocorrida nos Países Baixos"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A febre especulativa das tulipas na Holanda, lembrada como uma das primeiras bolhas financeiras da história, aconteceu em que século?",
    "resposta": "Século dezessete",
    "distratores": [
      "Século quinze",
      "Século dezesseis",
      "Século dezoito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tulip_mania"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tulip_mania",
        "situacao": "ok",
        "texto": "Tulip mania (Dutch: tulpenmanie) was a period during the Dutch Golden Age when contract prices for some bulbs of the recently introduced and fashionable tulip reached extraordinarily high levels. The major acceleration started in 1634 and then dramatically collapsed in February 1637. It is generally considered to have been the first recorded speculative bubble or asset bubble in history.\n[…]\nThe modern discussion of tulip mania began with the book Extraordinary Popular Delusions and the Madness of Crowds, published in 1841 by the Scottish journalist Charles Mackay. He proposed that crowds of people often behave irrationally, and tulip mania was, along with the South Sea Bubble and the Mississippi Company scheme, one of his primary examples. His account was largely sourced from a 1797 work by Johann Beckmann titled A History of Inventions, Discoveries, and Origins.\n[…]\nGoldgar argues that although tulip mania may not have constituted an economic or speculative bubble, it was nonetheless traumatic to the Dutch for other reasons: \"Even though the financial crisis affected very few, the shock of tulip mania was considerable. A whole network of values was thrown into doubt.\" The bubble in 1634 shows how people can get caught up in a financial craze even when something doesn't have real value. This is an example of the phenomenon called collective illusions.\n[…]\nIn Goldgar's view, even many modern popular works about financial markets, such as Burton Malkiel's A Random Walk Down Wall Street (1973), and John Kenneth Galbraith's A Short History of Financial Euphoria (1990; written soon after the crash of 1987), used the tulip mania as a lesson in morality.\n[…]\nHooper, William R. (April 1876). \"The Tulip Mania\". Harper's New Monthly Magazine. Vol. 52, no. 340. New York. pp. 743–6. ISSN 0017-789X.\n[…]\nDebunking the Tulip Bubble, Joseph Solis-Mullen, Mises Institute, October 2021"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mania_das_tulipas",
        "situacao": "ok",
        "texto": "A mania das tulipas (em neerlandês:  tulpenmanie) foi um período durante o Século de Ouro dos Países Baixos, quando os preços contratuais de alguns bulbos da tulipa recém-introduzida e da moda atingiram níveis extraordinariamente altos. A maior aceleração começou em 1634 e então entrou em colapso dramático em fevereiro de 1637. É geralmente considerada como a primeira bolha especulativa ou bolha d\n[…]\nDe muitas maneiras, a mania das tulipas foi mais um fenômeno socioeconômico então desconhecido do que uma crise econômica significativa. Não teve nenhuma influência crítica sobre a prosperidade da República Holandesa, que foi uma das principais potências econômicas e financeiras do mundo no século XVII, com a maior renda per capita do mundo de cerca de 1600 a cerca de 1720.\n[…]\nOs mercados a termo surgiram na República Holandesa durante o século XVII. Entre os mais notáveis ​​centrou-se no mercado de tulipas, no auge da mania das tulipas. No auge da mania das tulipas, em fevereiro de 1637, alguns bulbos de tulipa eram vendidos por mais de dez vezes a renda anual de um artesão habilidoso. A pesquisa é difícil por causa dos dados econômicos limitados da década de 1630, muitos dos quais vêm de fontes tendenciosas e especulativas.\n[…]\nEm 1636, tulipas eram vendidas nas bolsas de valores de numerosas cidades holandesas. O comércio das flores era encorajado por todos os membros da sociedade; muitas pessoas vendiam ou negociavam suas posses no intuito de especular no mercado de tulipas. Alguns especuladores tiveram muito lucro, enquanto outros perderam tudo ou quase tudo o que tinham.\n[…]\nConsequentemente, milhares de holandeses, incluindo executivos e membros da alta sociedade, ruíram financeiramente.\n[…]\nPossuir tulipas no lar era um meio de impressionar e quando a riqueza rolava escada-social abaixo então, todos clamavam por tulipas. Charles Mackay conta uma história da época:\n[…]\nDoença holandesa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Jardim Botânico do Rio de Janeiro",
      "descricao": "Jardim botânico e instituto de pesquisa fundado por Dom João no bairro carioca do Jardim Botânico"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano o príncipe regente Dom João criou o Jardim Botânico do Rio de Janeiro, no mesmo ano em que a corte chegou ao Brasil?",
    "resposta": "1808",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jardim_Bot%C3%A2nico_do_Rio_de_Janeiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jardim_Bot%C3%A2nico_do_Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "O Instituto de Pesquisas Jardim Botânico do Rio de Janeiro, ou apenas Jardim Botânico do Rio de Janeiro, é um instituto de pesquisas e jardim botânico localizado no bairro do Jardim Botânico, na zona sul do município do Rio de Janeiro, no Brasil.\n[…]\nA sua origem remonta à transferência da corte portuguesa para o Brasil, entre 1808 e 1821. A corte fixou-se na cidade do Rio de Janeiro, desde 1763 sede do Estado do Brasil, uma colônia portuguesa, e agora alçada à condição de sede do império português, propiciando-lhe diversas oportunidades e melhorias.\n[…]\nDentre essas destaca-se a implantação de uma fábrica de pólvora na sede do antigo \"Engenho da Lagoa\", de propriedade de Rodrigo de Freitas, cujas ruínas dos muros atualmente integram os limites da instituição. Por decreto real de 13 de junho de 1808, o príncipe-regente Dom João (futuro rei D.\n[…]\nA primeira muda de sua espécie a chegar no Brasil foi plantada pelo príncipe-regente Dom João, em 1809. Para que o jardim botânico tivesse o monopólio dessa espécie, o então diretor Bernardo José de Serpa Brandão (1829-1851) mandava tirar e queimar todos os seus frutos. Entretanto, à noite, os escravos subiam na árvore, colhiam os frutos e vendiam, na clandestinidade. Esse primeiro exemplar viria a ser derrubado por um raio em 1972. Ascendia então a 38,70 metros de altura.\n[…]\nLAVÔR, João Conrado Niemeyer. \"Historiografia do Jardim Botânico do Rio de Janeiro, no contexto da Fazenda Real da Lagoa Rodrigo de Freitas e seus desdobramentos\". Rodriguésia, Rio de Janeiro: JBRJ, separata, ano XXXV, n. 57, 1983.\n[…]\nRODRIGUES, João Barbosa. Lembrança do 1o Centenário do Jardim Botânico do Rio de Janeiro. 1808-1908. Rio de Janeiro: Officinas da 'Renascença', E. Bevilacqua & Cia., 1908."
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Batata",
      "descricao": "Tubérculo comestível da planta Solanum tuberosum, nativa dos Andes"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A batata, nativa dos Andes, foi levada para a Europa pelos espanhóis em que século?",
    "resposta": "Século dezesseis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Potato"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Potato",
        "situacao": "ok",
        "texto": "The potato () is a starchy tuberous vegetable native to the Americas that is consumed as a staple food in many parts of the world. Potatoes are underground stem tubers of the plant Solanum tuberosum, a perennial in the nightshade family Solanaceae.\n[…]\nLike the tomato, potatoes belong to the genus Solanum, which is a member of the nightshade family, the Solanaceae. That is a diverse family of flowering plants, often poisonous, that includes the mandrake (Mandragora), deadly nightshade (Atropa), and tobacco (Nicotiana), as shown in the outline phylogenetic tree (many branches omitted). The most commonly cultivated potato is S. tuberosum; there are several other species.\n[…]\nA 2025 study by Zhang et al. examining Solanum genomes groups all species of potato under S. tuberosum. According to the study, the Petota (potato) lineage contains more than 55 diploid species, with only one being selected by humans for domestication; the study posits that all landraces branch out from a single point within Solanum candolleanum.\n[…]\nThe earliest archaeologically verified potato tuber remains have been found at the coastal site of Ancon (central Peru), dating to 2500 BC. The most widely cultivated variety, Solanum tuberosum tuberosum, is indigenous to the Chiloé Archipelago, and has been cultivated by the local indigenous people since before the Spanish conquest.\n[…]\nThe potato has been an essential crop in the Andes since the pre-Columbian era. The Moche culture from Northern Peru made ceramics from the earth, water, and fire. This pottery was a sacred substance, formed in significant shapes and used to represent important themes. Potatoes are represented anthropomorphically as well as naturally.\n[…]\nPotato battery\n[…]\nInternational Year of the Potato"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batata",
        "situacao": "ok",
        "texto": "A Solanum tuberosum, comumente conhecida como batata, é uma planta perene da família das solanáceas e pertencente ao tipo fisionómico dos terófitos. A planta adulta, conhecida como batateira, tem geralmente entre sessenta a cem centímetros de altura, possui flores e frutos e produz um tubérculo comestível rico em amido.\n[…]\n30 de Maio é o Dia Internacional da Batata.\n[…]\nOs conquistadores espanhóis foram para a região dos Andes em busca de ouro, mas o tesouro que levaram foi a Solanum tuberosum. A primeira evidência do plantio de batata fora do território sul-americano data de 1565, nas ilhas Canárias e em 1573, a batata passou a ser cultivada no território continental espanhol. Logo após, exemplares do tubérculo foram enviados por toda Europa como um presente exótico.\n[…]\nA partir dos anos 60 o cultivo de batata começou a expandir nos países em desenvolvimento. Na Índia e na China, a produção subiu de dezesseis para mais de cem milhões de toneladas em pouco mais de quarenta anos. No Bangladesh, a batata se tornou um valioso cultivo de inverno e na África Subsaariana a batata é a comida preferida em muitas áreas urbanas, além de ser um cultivo fundamental nas terras altas na África central.\n[…]\nHoje a batata é vista como uma das soluções possíveis para acabar com a fome no mundo. Na China, por exemplo, cientistas propuseram que sessenta por cento das terras aráveis do país deveriam ser ocupadas por plantações de batatas. E nos Andes, onde tudo começou, o governo peruano criou em 2008 um registro nacional das variedades nativas de batata, para ajudar a conservar o rico patrimônio genético da espécie, que ajudarão a escrever os futuros capítulos da história da Solanum tuberosum.\n[…]\n«2008 - Ano Internacional da Batata». Disponível em seis idiomas (Inglês, Mandarim, Espanhol, Francês, Árabe e Russo)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Matusalém",
      "descricao": "Pinheiro da espécie Pinus longaeva nas Montanhas Brancas da Califórnia, uma das árvores mais antigas conhecidas"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O pinheiro apelidado de Matusalém, nas montanhas da Califórnia, tem idade estimada em aproximadamente quantos anos?",
    "resposta": "Cerca de cinco mil anos",
    "distratores": [
      "Cerca de mil anos",
      "Cerca de dois mil anos",
      "Cerca de dez mil anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Methuselah_(tree)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Methuselah_(tree)",
        "situacao": "desambiguacao",
        "texto": "Methuselah, a Biblical figure, was known for living a long time.\nMethuselah may also refer to:\n\n\n== Arts, entertainment, and media ==\n\n\n=== Fictional characters and creatures ===\nMethuselah (Redwall), a character in the Redwall novels by Brian Jacques\nMethuselah (Trinity Blood), a fictional offshoot of humanity that appear in the anime Trinity Blood\nMethuselah (World of Darkness), a vampire at lea"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Girassol",
      "descricao": "Planta Helianthus annuus, de grandes inflorescências amarelas e sementes comestíveis"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Os girassóis jovens acompanham o sol durante o dia, mas os adultos, já floridos, ficam virados para que ponto cardeal?",
    "resposta": "Leste",
    "fonte": [
      "https://en.wikipedia.org/wiki/Helianthus_annuus",
      "https://en.wikipedia.org/wiki/Heliotropism"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Helianthus_annuus",
        "situacao": "ok",
        "texto": "The common sunflower (Helianthus annuus) is a large annual forb in the daisy family Asteraceae. The domesticated form of common sunflower is harvested for its edible seeds, which come in two types: oil and confectionary seeds. Oilseed sunflowers are widely grown globally and represent the fourth most used vegetable oil in the world. They also are used widely as bird food or as food for livestock. \n[…]\nThe genus name Helianthus comes from Ancient Greek ἥλιος (hḗlios), meaning \"sun\", and ἄνθος (ánthos), meaning \"flower\". The species name annuus means \"yearly\" in Latin.\n[…]\nThe Russian Empire reintroduced this oilseed cultivation process to North America in the mid-20th century; North America began their commercial era of sunflower production and breeding. New breeds of the Helianthus spp. began to become more prominent in new geographical areas.\n[…]\nHybrid, Helianthus annuus dwarf2 does not contain the hormone gibberellin and does not display heliotropic behavior. Plants treated with an external application of the hormone display a temporary restoration of elongation growth patterns. This growth pattern diminished by 35% 7–14 days after final treatment.\n[…]\nHelianthus annuus can be used in phytoremediation to extract pollutants from soil such as lead and other heavy metals, such as cadmium, zinc, cesium, strontium, and uranium. The phytoremediation process begins by absorbing the heavy metal(s) through the roots, which gradually accumulate in other areas, such as the shoots and leaves.\n[…]\nHelianthus annuus can also be used in rhizofiltration to neutralize radionuclides, such as caesium-137 and strontium-90, from contaminated water, as was done in the case of a pond after the Chernobyl disaster. A similar campaign was mounted in response to the Fukushima Daiichi nuclear disaster.\n[…]\nNational Sunflower Association\n[…]\nSunflower cultivation – New Crop Resource Online Program, Purdue University"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Heliotropism",
        "situacao": "ok",
        "texto": "Heliotropism, a form of tropism, is the diurnal or seasonal motion of plant parts (flowers or leaves) in response to the direction of the Sun.\n[…]\nIn the case of sunflowers, a common misconception is that sunflower heads track the Sun across the sky throughout the whole life cycle. The uniform alignment of the flowers does result from heliotropism in an earlier development stage, the bud stage, before the appearance of flower heads. The apical bud of the plant will track the Sun during the day from east to west, and then will quickly move west to east overnight as a result of the plant's circadian clock.\n[…]\nThe buds are heliotropic until the end of the bud stage, and finally face east. Phototropic bending can be catalyzed in the hypocotyls of juvenile sunflower seedlings while heliotropic bending in the shoot apex does not start occurring until the later developmental stages of the plant, showing a difference between these two processes. The flower of the sunflower preserves the final orientation of the bud, thus keeping the mature flower facing east."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Girassol",
        "situacao": "ok",
        "texto": "O girassol (Helianthus annuus) é uma planta anual da família das Asteraceae, gênero Heliantheae. Está situado na tribo Heliantheae, subtribo Helianthinae. É cultivada pelo seu óleo e frutos comestíveis. O nome é derivado do formato de sua inflorescência.\n[…]\nOs girassóis são plantas originárias da América do Norte cultivada pelos povos indígenas para alimentação, foram domesticadas por volta do ano 1 000 a.C. Francisco Pizarro encontrou diversos objetos incas e imagens moldadas em ouro que fazem referência aos girassóis como seu deus do Sol.\n[…]\nDos seus frutos, popularmente chamados sementes, é extraído o óleo de girassol que é comestível. A produção  mundial ultrapassa 20 milhões de toneladas anuais de grão. A semente também é usada na alimentação de pássaros em cativeiro além de ser uma das mais utilizadas na alimentação viva.\n[…]\nA semente do girassol tem sido utilizada no Brasil na produção de biodiesel.\n[…]\nUm equívoco comum é que a inflorescência do Girassol se viraria para ficar de frente para o sol a medida que ele atravessa o céu. Apesar desse comportamento estar presente na planta jovem, antes da presença da inflorescência, a planta madura tem sua direção fixa ao longo do dia.\n[…]\nEsse velho equívoco foi contestado em 1557 pelo botanista inglês John Gerard, que cultivava girassóis em seu herbário: \"[alguns] disputaram que eles giram junto do sol, o que nunca observei, apesar de meu empenho em provar a verdade disso.\"\n[…]\nO girassol é a flor nacional da Ucrânia.\n[…]\nGirassóis foram tema na série de pinturas de Van Gogh, da qual Doze Girassóis numa Jarra faz parte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Coco-do-mar",
      "descricao": "Palmeira Lodoicea maldivica, endêmica das Seicheles"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas palmeiras e árvores produz a maior semente de todo o reino vegetal, que pode passar de quinze quilos?",
    "resposta": "Coco-do-mar",
    "distratores": [
      "Coqueiro",
      "Castanheira-do-pará",
      "Jaqueira"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lodoicea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lodoicea",
        "situacao": "ok",
        "texto": "Lodoicea, commonly known as the sea coconut, coco de mer, or double coconut, is a monotypic genus in the palm family. The sole species, Lodoicea maldivica, is endemic to the islands of Praslin and Curieuse in the Seychelles, and was historically found on the neighboring small islets of St Pierre, Chauve-Souris, and Ile Ronde. The species has the largest seed in the plant kingdom.\n[…]\nA 2020 genetic-sequencing study of palm species found genetic evidence for an oceanic dispersal of the ancestors to modern Lataniieae palms, from south Asia to the Mascarene and Seychelle islands. Though modern viable coco de mer fruit are too heavy to float and thus would be unable to disperse oceanically, genetic evidence suggests that ancestors to Lataniieae palms underwent evolutionary periods of relatively rapid increases in seed size, with Lodoicea serving as the most extreme example.\n[…]\nCompetition may also be the driving factor in the evolution of the size of Lodoicea fruit. One hypothesis asserts that competition between parent tree and its progeny, as well as competition between sibling offspring, drove the large size of the coco de mer fruit.\n[…]\nThis is perhaps corroborated by the coco de mer's noted ability to quickly produce a very large first stem and leaf, perhaps suggesting that fast and robust initial growth is indeed heavily selected towards. It is also noteworthy that many of the hypotheses presented to explain the size of Lodoicea fruit are not mutually exclusive, and could act jointly.\n[…]\nThe Seychelles is a World Heritage Site, and a third of the area is now protected. The main populations of Lodoicea maldivica are found within the Praslin and Curieuse National Parks, and the trade in nuts is controlled by the Coco-de-mer (Management) Decree of 1995. Firebreaks also exist at key sites in an effort to prevent devastating fires from sweeping through populations."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Rafflesia arnoldii",
      "descricao": "Planta parasita das florestas de Sumatra e Bornéu, de flor enorme e cheiro de carne podre"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Que planta parasita das florestas de Sumatra e Bornéu tem a maior flor individual do mundo?",
    "resposta": "Rafflesia arnoldii",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rafflesia_arnoldii"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rafflesia_arnoldii",
        "situacao": "ok",
        "texto": "Rafflesia arnoldii is a species of flowering plant in the parasitic genus Rafflesia within the family Rafflesiaceae. It is native to the rainforests of Sumatra and Borneo.\n[…]\nIn 1818, the British surgeon Joseph Arnold collected a specimen of another Rafflesia species found by a Malay servant in a part of Sumatra, then a British colony called British Bencoolen (now Bengkulu), during an expedition run by the recently appointed Lieutenant-Governor of Bencoolen, Stamford Raffles. Arnold contracted a fever and died soon after the discovery, the preserved material being sent to Banks. Banks passed on the materials, and the honour to study them was given to Robert Brown.\n[…]\nThe flower of Rafflesia arnoldii grows to a diameter of around 1 m (3 ft 3 in), and weighs up to 11 kg (24 lb). According to the Mongabay institution, the single largest R. arnoldii to be measured was 1.14 m (3 ft 9 in) in width. These flowers emerge from very large, cabbage-like, maroon or dark brown buds typically about 30 cm (12 in) wide, but the largest (and the largest flower bud ever recorded) found at Mount Sago, Sumatra in May 1956 was 43 cm (17 in) in diameter.\n[…]\nRafflesia arnoldii is found in both secondary and primary rainforests.\n[…]\nRafflesia arnoldii has been found to infect hosts growing in alkaline, neutral and acidic soils. It is not found far from water. It has been found at altitudes from 490–1,024 m.\n[…]\nTED talk: Life history of Rafflesia arnoldii (Daniel L. Nickrent, February 2024)\n[…]\nMedia related to Rafflesia arnoldii at Wikimedia Commons\n[…]\nRafflesia arnoldii at Parasitic Plant Connection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rafflesia_arnoldii",
        "situacao": "ok",
        "texto": "Rafflesia arnoldii, também conhecida como raflésia-comum, é uma espécie de plantas com flor do género Rafflesia, nativa das ilhas de Sumatra e Bornéu, na Indonésia, famosa por produzir a maior flor do mundo, que pode atingir 106 cm de diâmetro e pesar até 11 kg.\n[…]\nÉ popularmente conhecida como \"flor-monstro\", devido ao seu tamanho.\n[…]\nO vegetal é um parasita que sobrevive sugando nutrientes das raízes de uma árvore chamada Tetrastigma. Portanto, não possui folhas, caule, raiz, e nem realiza fotossíntese. Exala um odor semelhante a de carne podre, que atrai moscas, sendo este o inseto responsável por sua polinização.\n[…]\nSeu nome científico é uma homenagem a Stamford Raffles e Joseph Arnold, que descreveram a planta em 1818.\n[…]\nAmorphophallus titanum (flor-cadáver)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.43 — 2026-10-02**
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
