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
      "nome": "Lugia",
      "descricao": "Pokémon lendário dos tipos Psíquico e Voador da segunda geração, guardião dos mares e mascote de Pokémon Silver."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Aeroblast, um jato de ar do tipo Voador com grande chance de acerto crítico, é o golpe exclusivo de qual lendário de Johto?",
    "resposta": "Lugia",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Aeroblast_(move)",
      "https://en.wikipedia.org/wiki/Lugia"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Aeroblast_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lugia",
        "situacao": "ok",
        "texto": "The second generation (generation II) of the Pokémon franchise features 100 fictional species of creatures introduced to the core video game series in the Game Boy Color games Pokémon Gold and Silver. The generation was unveiled at the beginning of the Nintendo Space World '97 event. Gold and Silver were first released on November 21, 1999, in Japan.\n[…]\nThe games are set in the Johto region, which is based on the real-world Kansai region of Japan. Due to the games acting as a sequel to the first generation of the franchise, the Pokémon designs of the second generation share a strong association with those from the first. Some Pokémon in this generation were introduced in animated adaptations of the franchise before Gold and Silver were released.\n[…]\nThe second generation of Pokémon is set primarily in the region of Johto, which is based on the real-world region of Kansai in Japan. The second generation of Pokémon, unlike other subsequent generations in the series, was primarily designed as a \"sequel\" to the prior generation, which was focused around the games Pokémon Red and Blue. This resulted in many second-generation species being related to earlier ones, or reviving designs scrapped from Red and Blue.\n[…]\nIn a 2016 poll held by The Pokémon Company, Umbreon, Tyranitar, and Lugia were voted to be among the top thirty most popular Pokémon among voters. A later poll determined the three aforementioned Pokémon, alongside Typhlosion, Scizor, and Ampharos, to be among the six most popular Pokémon of the generation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_II",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nMuitos designs totalmente únicos, sem associação com outras espécies, também foram descobertos, como uma foca flamejante, uma boneca empalada com um prego que evolui para um ser semelhante a um panda, uma linha evolutiva de gato do tipo Noturno e um Pokémon concha (chamado Taaban) que apresenta semelhanças com conchas na cauda e na cabeça das espécies de Pokémon Slowbro e Slowking, respectivamente.\n[…]\nUm dos designs mais populares descobertos na versão beta foi a linha evolutiva de Kotora, composta por Kotora, Raitora e uma terceira evolução sem nome. Essa linha recebeu o tipo Elétrico e foi baseada em tigres, com o nome de Kotora significando \"filhote de tigre\" e o de Raitora, \"tigre do trovão\". Descobriu-se que a linha evolutiva de Kotora havia sido descartada tanto na primeira quanto na segunda geração.\n[…]\nUma grande mudança em relação à demo foram os iniciais. Além de Chikorita, os iniciais de Fogo e Água eram espécies diferentes, em vez das linhas evolutivas de Cyndaquil e Totodile escolhidas no jogo final. O inicial de Fogo era inicialmente Honōguma (traduzido como Flambear na versão em inglês), um Pokémon semelhante a um urso que lembra um pouco Pikachu. Honōguma eventualmente evoluiria para Borubeaa (Volbear em inglês) e Dainabea (Dynabear em inglês).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Ho-Oh",
      "descricao": "Pokémon lendário dos tipos Fogo e Voador da segunda geração, mascote de Pokémon Gold."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Sacred Fire, o golpe exclusivo de Ho-Oh, envolve o alvo em chamas místicas. Que condição ele tem grande chance de causar?",
    "resposta": "Queimadura",
    "distratores": [
      "Congelamento",
      "Paralisia",
      "Confusão"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sacred_Fire_(move)",
      "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sacred_Fire_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The second generation (generation II) of the Pokémon franchise features 100 fictional species of creatures introduced to the core video game series in the Game Boy Color games Pokémon Gold and Silver. The generation was unveiled at the beginning of the Nintendo Space World '97 event. Gold and Silver were first released on November 21, 1999, in Japan.\n[…]\nEach Pokémon game starts by giving the player a choice between one of three Pokémon to become their starter Pokémon. Typically, the options are Grass-type, Fire-type, or Water-type Pokémon. In the second generation, the player can choose between Chikorita, Cyndaquil and Totodile as their starter.\n[…]\nA big change from the demo were the starter Pokémon. Aside from Chikorita, both the Fire-type and Water-type starters were different species instead of the Cyndaquil and Totodile lines chosen in the final game. The Fire starter was initially filled by Honōguma (translated into Flambear for the English version), a bear-like Pokémon that slightly resembles Pikachu. Honōguma would eventually evolve into Borubeaa (Volbear in English) and Dainabea (Dynabear in English)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_II",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nUma grande mudança em relação à demo foram os iniciais. Além de Chikorita, os iniciais de Fogo e Água eram espécies diferentes, em vez das linhas evolutivas de Cyndaquil e Totodile escolhidas no jogo final. O inicial de Fogo era inicialmente Honōguma (traduzido como Flambear na versão em inglês), um Pokémon semelhante a um urso que lembra um pouco Pikachu. Honōguma eventualmente evoluiria para Borubeaa (Volbear em inglês) e Dainabea (Dynabear em inglês).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Mewtwo",
      "descricao": "Pokémon lendário do tipo Psíquico da primeira geração, criado por cientistas a partir do material genético de Mew."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Na quinta geração, qual pokémon nascido de uma experiência genética ganhou o golpe exclusivo Psystrike, uma onda de energia psíquica?",
    "resposta": "Mewtwo",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Psystrike_(move)",
      "https://en.wikipedia.org/wiki/Mewtwo"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Psystrike_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mewtwo",
        "situacao": "ok",
        "texto": "Mewtwo ( ; Japanese: ミュウツー, Hepburn: Myūtsū) is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise. It was first introduced in the video games Pokémon Red and Blue, and later appeared in subsequent sequels and spin-off titles. In the video games, the player can fight and capture Mewtwo in order to subsequently pit it against other Pokémon.\n[…]\nAfter escaping Giovanni, Mewtwo questions the reason for its existence and declares revenge on its creators. To this end, it lures several Pokémon trainers, among them is the anime series's main protagonist Ash Ketchum, to its island in order to clone their Pokémon. Once it does so, Mewtwo forces the originals to battle their clones in an effort to determine which set is superior, while Mewtwo faces its own genetic relative, Mew.\n[…]\nIn the manga series Pokémon Adventures, Team Rocket created Mewtwo, but due to the insufficient amount of genetic material at hand (being just a couple of Mew's eyelashes), Gym Leader Blaine - Team Rocket's head of research at the time - had to supplement the experiment with human DNA taken from his own right arm to fill in the gaps, which led to some of Mewtwo's DNA to enter his body as well.\n[…]\nHowever, Animerica praised Mewtwo as a character with \"philosophical depth\" as well as for serving as \"an adversary of almost infinite power and genuine malice\" that the anime series had been lacking. Ken Hollings of Sight & Sound described Mewtwo as \"brooding, articulate and vengeful where the other Pokémon remain bright blobs of wordless energy\", and \"Like a troubled elder brother, Mewtwo represents an older order of experience.\"\n[…]\n1.^ The Japanese texts of the Pokémon Mansion Journals as well as various Pokédex entries state that an individual scientist created Mewtwo, as opposed to a team of researchers like in the anime.\n[…]\nMewtwo on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mewtwo",
        "situacao": "ok",
        "texto": "Mewtwo (ミュウツー, Myūtsū) é uma criatura oficial da franquia Pokémon, criada pela Nintendo e pela Game Freak. Criado por Ken Sugimori, apareceu pela primeira vez nos jogos de videogame Pokémon Red e Blue e suas seqüencias, e mais tarde apareceu em vários produtos, títulos de spin-off, assim como adaptações de animação da franquia.\n[…]\nO designer de videogames japonês Ken Sugimori criou Mewtwo para a primeira geração de jogos do Pokémon, Red e Green, conhecido fora do Japão como Pokémon Red e Blue. Seu nome, que significa \"o segundo Mew\", advém da sua história de origem, como uma duplicata geneticamente modificada do Mew original. Até o primeiro filme do Pokémon lançado nos Estados Unidos, Mewtwo raramente era referido como um \"clone\" em fontes japonesas.\n[…]\nNa série de mangá Pokémon Adventures, a Equipe Rocket cria Mewtwo, mas parte de seu código genético é inserido no líder Ginásio Blaine. Devido ao DNA compartilhado, os dois são incapazes de ser separados por muito tempo sem se tornarem doentes. Mais tarde, outro Pokémon, Entei, é capaz de quebrar a ligação entre os dois, removendo o DNA no braço de Blaine, ao ponto de Mewtwo deixar o local.\n[…]\nNo entanto, Animerica elogiou Mewtwo como um personagem com \"profundidade filosófica\", bem como por servir como \"um adversário de poder quase infinito e malícia genuína\" que faltava na série de animação. Ken Hollings da Sight & Sound descreveu Mewtwo como \"pensativo, articulador e vingativo, onde outros Pokémon permanecem como bolhas de energia brilhantes sem palavras\", e \"Como um irmão mais velho conturbado, Mewtwo representa uma experiência mais madura\".\n[…]\nA imagem de Mewtwo é utilizada para a mercadoria relacionada com a franquia Pokémon, que inclui brinquedos, escovas de dentes para crianças e uma peça de jogo para uma versão de Monopoly do Pokémon.\n[…]\nMewtwo no Bulbapedia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Rayquaza",
      "descricao": "Pokémon lendário dos tipos Dragão e Voador da terceira geração, mascote de Pokémon Emerald."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Omega Ruby e Alpha Sapphire, Rayquaza megaevolui sem segurar nenhuma Mega Pedra. Para isso, basta que ele conheça qual golpe exclusivo?",
    "resposta": "Dragon Ascent",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Dragon_Ascent_(move)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Omega_Ruby_and_Alpha_Sapphire"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Dragon_Ascent_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Omega_Ruby_and_Alpha_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Omega Ruby and Pokémon Alpha Sapphire are 2014 remakes of the 2002 Game Boy Advance role-playing video games Pokémon Ruby and Sapphire, also including some features from Pokémon Emerald. The games are part of the sixth generation of the Pokémon video game series, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS.\n[…]\nOmega Ruby and Alpha Sapphire received generally positive reviews from critics. As of 30 September 2024, a combined total of 14.63 million copies have been sold worldwide, ranking them as the fourth-best-selling Nintendo 3DS titles of all time.\n[…]\nThough Pokémon Omega Ruby and Alpha Sapphire are remakes of games from the third generation, they retain changes made in later generations, such as the type split from the fourth generation and unlimited TM usage and triple battles from the fifth generation. They also retain gameplay features introduced in Pokémon X and Y, such as Mega Evolution, Pokémon Amie, Super Training and the Player Search System.\n[…]\nA new side quest is featured in Omega Ruby and Alpha Sapphire, called the \"Delta Episode\". The player must work with the new character, Zinnia, as well as Steven and Professor Cozmo, to find a way to stop a meteor from crashing into the planet. This also requires capturing the Legendary Pokémon Rayquaza in order to stop the meteor that holds the Mythical Pokémon Deoxys.\n[…]\nThe games sold 3,040,000 copies in their first three days of sale. Of the total sales, 1,534,593 copies were sold in Japan, the rest were sold in North America and Australia. Omega Ruby and Alpha Sapphire had the biggest launch in the series history in the United Kingdom, beating the previous record held by Pokémon Black and White. By the end of 2014, the games had sold 2.4 million copies in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Omega_Ruby_e_Alpha_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Omega Ruby e Alpha Sapphire (ポケットモンスター オメガルビー&アルファサファイア, Poketto Monsutā Omega Rubī & Arufa Safaia; Monstros de Bolso Ômega Rubi & Alfa Safira) são dois videogames lançados para Nintendo 3DS. Eles são remakes dos jogos de 2002, Pokémon Ruby e Sapphire, do Game Boy Advance. Foram anunciados em 7 de maio de 2014, através de um trailer divulgado pela Nintendo.\n[…]\nPokémon Omega Ruby e Alpha Sapphire são classificados como um role-playing game com elementos de aventura, apresentado em terceira pessoa e com perspectiva de cima. É o segundo jogo de Pokémon a ter funções em 3D. O jogador controla um jovem treinador que vai em busca e a captura de criaturas conhecidas como Pokémon e tem como objetivo ganhar batalhas contra outros treinadores.\n[…]\nDurante o vídeo ao vivo da Nintendo na Electronic Entertainment Expo 2014 em 10 de junho de 2014 (que mais tarde foi produzido em uma versão impressa na CoroCoro Comic do Japão), um trailer para Omega Ruby e Alpha Sapphire foi divulgado, exibindo novas cenas dos jogos, incluindo o novo design dos personagens e as novas Mega Evoluções para Sceptile e Swampert, que não foram mostradas em X e Y, como no caso de Blaziken.\n[…]\nUm comunicado de imprensa da Nintendo deu a entender que as outras pedras Megas (itens do jogo necessários para a Mega Evolução) só poderiam ser encontrado na região de Hoenn em Omega Ruby e Alpha Sapphire. Também foi divulgado no site oficial as novas formas de Groudon e Kyogre, que são destaques na arte da capa dos jogos, e essas mudanças supostamente estariam relacionadas a Mega Evolução.\n[…]\nPlaylist Pokémon Omega Ruby e Alpha Sapphire no YouTube  Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Kyogre",
      "descricao": "Pokémon lendário do tipo Água da terceira geração, mascote de Pokémon Sapphire."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Omega Ruby e Alpha Sapphire, Kyogre ganhou um golpe exclusivo que dispara raios de luz azul contra todos os adversários. Como ele se chama?",
    "resposta": "Origin Pulse",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Origin_Pulse_(move)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Omega_Ruby_and_Alpha_Sapphire"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Origin_Pulse_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Omega_Ruby_and_Alpha_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Omega Ruby and Pokémon Alpha Sapphire are 2014 remakes of the 2002 Game Boy Advance role-playing video games Pokémon Ruby and Sapphire, also including some features from Pokémon Emerald. The games are part of the sixth generation of the Pokémon video game series, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS.\n[…]\nThe setting and story of Omega Ruby and Alpha Sapphire are largely the same as the original Ruby and Sapphire games. It begins with the player character riding in the back of a moving truck, who is relocating to the Hoenn Region from the Johto Region with their mother, as their father Norman has been hired as the Petalburg City Gym Leader. The player arrives with their parents at the family's new home in the village of Littleroot Town, on the southern edge of the main island.\n[…]\nAlong the way, the player character encounters the antagonist group Team Magma in Omega Ruby or Team Aqua in Alpha Sapphire who wish to use the power of the Legendary Pokémon, Primal Groudon in Omega Ruby, and Primal Kyogre in Alpha Sapphire, to change the world to suit their desires. Team Magma wants to use Groudon to dry up the oceans and expand the landmass, thereby allowing humanity to progress further.\n[…]\nPokémon Omega Ruby and Alpha Sapphire were released in Japan, North America and Australia on 21 November 2014, exactly twelve years after the original release date of Ruby and Sapphire, while the European release was the following week. They are the third remake pairs in the franchise following Pokémon FireRed and LeafGreen for the Game Boy Advance in 2004 and Pokémon HeartGold and SoulSilver for the Nintendo DS in 2009."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Omega_Ruby_e_Alpha_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Omega Ruby e Alpha Sapphire (ポケットモンスター オメガルビー&アルファサファイア, Poketto Monsutā Omega Rubī & Arufa Safaia; Monstros de Bolso Ômega Rubi & Alfa Safira) são dois videogames lançados para Nintendo 3DS. Eles são remakes dos jogos de 2002, Pokémon Ruby e Sapphire, do Game Boy Advance. Foram anunciados em 7 de maio de 2014, através de um trailer divulgado pela Nintendo.\n[…]\nTambém é possível batalhar e fazer trocas de Pokémon com outros jogadores usando os recursos de conectividade do Nintendo 3DS. Assim como nos jogos anteriores da série, alguns Pokémon só podem ser obtidos em Omega Ruby ou Alpha Sapphire, ou só podem ser encontrados em edições anteriores da série Pokémon, incentivado, dessa forma, os jogadores a negociar com outros jogadores a fim de obter todos os Pokémon de ambas as versões.\n[…]\nEspeculações sobre os remakes de Ruby e Sapphire já aconteciam há anos, principalmente devido as referências aos jogos e a região de Hoenn nos predecessores Pokémon X e Y. Nessa época, surgiu o meme de Internet \"Hoenn Confirmed\".\n[…]\nUm comunicado de imprensa da Nintendo deu a entender que as outras pedras Megas (itens do jogo necessários para a Mega Evolução) só poderiam ser encontrado na região de Hoenn em Omega Ruby e Alpha Sapphire. Também foi divulgado no site oficial as novas formas de Groudon e Kyogre, que são destaques na arte da capa dos jogos, e essas mudanças supostamente estariam relacionadas a Mega Evolução.\n[…]\nPlagge criticou o grande número de HMs necessários para jogar bem como o favorecimento de Pokémon tipo água (ela jogou Alpha Sapphire no qual possui o Team Aqua como vilões) e a dependência de rotas aquáticas. Ela observou que, embora o recurso Dive tenha sido uma novidade na versão original, ele acabou se tornando tedioso.\n[…]\nPlaylist Pokémon Omega Ruby e Alpha Sapphire no YouTube  Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Groudon",
      "descricao": "Pokémon lendário do tipo Terrestre da terceira geração, mascote de Pokémon Ruby e rival de Kyogre."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Groudon ganhou um golpe exclusivo nos remakes de Hoenn, Omega Ruby e Alpha Sapphire. Qual destes golpes é o dele?",
    "resposta": "Precipice Blades",
    "distratores": [
      "Thousand Arrows",
      "Roar of Time",
      "Spacial Rend"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Precipice_Blades_(move)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Omega_Ruby_and_Alpha_Sapphire"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Precipice_Blades_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Omega_Ruby_and_Alpha_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Omega Ruby and Pokémon Alpha Sapphire are 2014 remakes of the 2002 Game Boy Advance role-playing video games Pokémon Ruby and Sapphire, also including some features from Pokémon Emerald. The games are part of the sixth generation of the Pokémon video game series, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS.\n[…]\nAlong the way, the player character encounters the antagonist group Team Magma in Omega Ruby or Team Aqua in Alpha Sapphire who wish to use the power of the Legendary Pokémon, Primal Groudon in Omega Ruby, and Primal Kyogre in Alpha Sapphire, to change the world to suit their desires. Team Magma wants to use Groudon to dry up the oceans and expand the landmass, thereby allowing humanity to progress further.\n[…]\nPokémon Omega Ruby and Alpha Sapphire were released in Japan, North America and Australia on 21 November 2014, exactly twelve years after the original release date of Ruby and Sapphire, while the European release was the following week. They are the third remake pairs in the franchise following Pokémon FireRed and LeafGreen for the Game Boy Advance in 2004 and Pokémon HeartGold and SoulSilver for the Nintendo DS in 2009.\n[…]\nPokémon Omega Ruby and Alpha Sapphire received generally positive reviews from critics. Review aggregator OpenCritic assessed that the games received strong approval, being recommended by 89% of critics. GameSpot's Peter Brown praised the 3D visuals and the super training mechanic, but believed the game failed to fully resolve general issues in the game formula. IGN's  Kallie Plagge also praised the game's 3D reinvention of Hoenn and online functionality."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Omega_Ruby_e_Alpha_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Omega Ruby e Alpha Sapphire (ポケットモンスター オメガルビー&アルファサファイア, Poketto Monsutā Omega Rubī & Arufa Safaia; Monstros de Bolso Ômega Rubi & Alfa Safira) são dois videogames lançados para Nintendo 3DS. Eles são remakes dos jogos de 2002, Pokémon Ruby e Sapphire, do Game Boy Advance. Foram anunciados em 7 de maio de 2014, através de um trailer divulgado pela Nintendo.\n[…]\nApós o anúncio, não ficou claro se Omega Ruby e Alpha Sapphire seriam realmente remakes ou novos jogos, devido a descrição do comunicado de imprensa. Então, em uma nova coletiva, o presidente da Nintendo, Satoru Iwata, confirmou que os novos jogos são remakes completos das versões anteriores de 2002.\n[…]\nUm comunicado de imprensa da Nintendo deu a entender que as outras pedras Megas (itens do jogo necessários para a Mega Evolução) só poderiam ser encontrado na região de Hoenn em Omega Ruby e Alpha Sapphire. Também foi divulgado no site oficial as novas formas de Groudon e Kyogre, que são destaques na arte da capa dos jogos, e essas mudanças supostamente estariam relacionadas a Mega Evolução.\n[…]\nOmega Ruby e Alpha Sapphire receberam avaliações positivas de críticos de videogame. Peter Brown do GameSpot elogiou o visual 3D, mas acha que o jogo não conseguiu resolver totalmente as questões gerais na fórmula do jogo. Kallie Plagge do IGN também elogiou a reinvenção de Hoenn em 3D e a funcionalidade online.\n[…]\nOs jogos venderam 3,040,000 cópias nos seus primeiros três dias de venda. Ao total, 1,534,593 cópias foram vendidas no Japão, e o restante na América do Norte e Austrália. Omega Ruby e Alpha Sapphire tiveram o maior lançamento na história da série no Reino Unido, batendo o recorde que pertencia anteriormente a Pokémon Black e White.\n[…]\nPlaylist Pokémon Omega Ruby e Alpha Sapphire no YouTube  Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Deoxys",
      "descricao": "Pokémon mítico do tipo Psíquico da terceira geração, um alienígena que muda de forma."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Psycho Boost, ataque psíquico fortíssimo que deixa o próprio usuário mais fraco depois de cada uso, é o golpe exclusivo de qual mítico da terceira geração?",
    "resposta": "Deoxys",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Psycho_Boost_(move)",
      "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Psycho_Boost_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The third generation (generation III) of the Pokémon franchise features 386 fictional species of creatures and 135 Pokémon introduced to the core video game series in the 2002 Game Boy Advance games Pokémon Ruby and Sapphire, and later in the 2004 game Pokémon Emerald. These games were accompanied by the television series Pokémon Advanced, which aired from November 21, 2002, until August 28, 2003,\n[…]\nThe following list details the 135 Pokémon of generation III in order of their National Pokédex number. The first Pokémon, Treecko, is number 252 and the last, Deoxys, is number 386. Alternate forms that result in type changes are included for convenience. Mega Evolutions and regional forms are included on the pages for the generation in which they were introduced.\n[…]\nNintendo Life noted in a retrospective that the third generation of Pokémon has a very different \"feel\" from the two generations that came before it because almost all of its 135 new Pokémon – save for Azurill and Wynaut – have no relation to those of the previous generations. Ruby and Sapphire features two \"Mythical Pokémon\" – Jirachi and Deoxys – both of which became available to coincide with their respective anime movies."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_III",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 135 Pokémon da Geração III na ordem numérica do Pokédex Nacional. O primeiro Pokémon, Treecko, numerado de 252 e o último, Deoxys, numerado de 386.\n[…]\nA Nintendo Life observou em uma retrospectiva que a terceira geração de Pokémon tem uma \"sensação\" muito diferente das duas gerações anteriores, porque quase todos os seus 135 novos Pokémon – exceto Azurill e Wynaut – não têm relação com as das gerações anteriores. Diferente das duas primeiras gerações, dois dos \"Pokémon iniciais\" de Ruby e Sapphire ganham uma digitação secundária em sua forma final, dando a eles uma gama mais ampla de habilidades.\n[…]\nRuby e Sapphire apresentam dois \"Pokémon míticos\" – Jirachi e Deoxys – ambos ficaram disponíveis para coincidir com seus respectivos filmes de anime.\n[…]\nA recepção aos Pokémon da terceira geração tem sido polarizada. Alex Carlson de Hardcore Gamer escreveram em 2014 que a terceira geração de jogos de Pokémon não foi bem recebida pelos fãs da série, com algumas pessoas chamando a geração de \"a pior da história da série\".\n[…]\nA terceira geração teve sua parcela de designs populares e duradouros. Dezoito anos após o lançamento de Ruby e Sapphire, Rayquaza e Gardevoir terminaram em oitavo e nono lugar na votação de Pokémon do Ano de 2020, com Flygon, Sceptile e Blaziken também entre os 30 melhores. Rayquaza também terminou em oitavo lugar em uma pesquisa japonesa de 2016, com Jirachi e Kyogre entre os 25 melhores.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Jirachi",
      "descricao": "Pokémon mítico dos tipos Aço e Psíquico da terceira geração, que realiza desejos."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Doom Desire, golpe exclusivo do mítico Jirachi, não acerta o alvo no turno em que é usado. Quando o ataque chega?",
    "resposta": "Dois turnos depois",
    "distratores": [
      "No turno seguinte",
      "Três turnos depois",
      "Quando Jirachi desmaia"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Doom_Desire_(move)",
      "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Doom_Desire_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The third generation (generation III) of the Pokémon franchise features 386 fictional species of creatures and 135 Pokémon introduced to the core video game series in the 2002 Game Boy Advance games Pokémon Ruby and Sapphire, and later in the 2004 game Pokémon Emerald. These games were accompanied by the television series Pokémon Advanced, which aired from November 21, 2002, until August 28, 2003,\n[…]\nNintendo Life noted in a retrospective that the third generation of Pokémon has a very different \"feel\" from the two generations that came before it because almost all of its 135 new Pokémon – save for Azurill and Wynaut – have no relation to those of the previous generations. Ruby and Sapphire features two \"Mythical Pokémon\" – Jirachi and Deoxys – both of which became available to coincide with their respective anime movies.\n[…]\nThe third generation has had its share of well-loved designs. Eighteen years after the release of Ruby and Sapphire, Rayquaza and Gardevoir finished eighth and ninth in 2020's Pokémon of the Year vote, with Flygon, Sceptile, and Blaziken also among the top 30. Rayquaza also finished eighth in a 2016 Japanese poll, with Jirachi and Kyogre among the top 25. A popularity vote on the Pokémon subreddit featured Blaziken at 5th, joined in the top 25 by Gardevoir, Absol, Flygon, and Mudkip."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_III",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nA Nintendo Life observou em uma retrospectiva que a terceira geração de Pokémon tem uma \"sensação\" muito diferente das duas gerações anteriores, porque quase todos os seus 135 novos Pokémon – exceto Azurill e Wynaut – não têm relação com as das gerações anteriores. Diferente das duas primeiras gerações, dois dos \"Pokémon iniciais\" de Ruby e Sapphire ganham uma digitação secundária em sua forma final, dando a eles uma gama mais ampla de habilidades.\n[…]\nRuby e Sapphire apresentam dois \"Pokémon míticos\" – Jirachi e Deoxys – ambos ficaram disponíveis para coincidir com seus respectivos filmes de anime.\n[…]\nA terceira geração teve sua parcela de designs populares e duradouros. Dezoito anos após o lançamento de Ruby e Sapphire, Rayquaza e Gardevoir terminaram em oitavo e nono lugar na votação de Pokémon do Ano de 2020, com Flygon, Sceptile e Blaziken também entre os 30 melhores. Rayquaza também terminou em oitavo lugar em uma pesquisa japonesa de 2016, com Jirachi e Kyogre entre os 25 melhores.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Latias",
      "descricao": "Pokémon lendário dos tipos Dragão e Psíquico da terceira geração, irmã de Latios, de cores vermelha e branca."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O lendário Latios tem como golpe exclusivo o Luster Purge, uma explosão de luz. Qual é o golpe exclusivo da irmã dele, Latias?",
    "resposta": "Mist Ball",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Mist_Ball_(move)",
      "https://bulbapedia.bulbagarden.net/wiki/Luster_Purge_(move)",
      "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mist_Ball_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Luster_Purge_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The third generation (generation III) of the Pokémon franchise features 386 fictional species of creatures and 135 Pokémon introduced to the core video game series in the 2002 Game Boy Advance games Pokémon Ruby and Sapphire, and later in the 2004 game Pokémon Emerald. These games were accompanied by the television series Pokémon Advanced, which aired from November 21, 2002, until August 28, 2003,"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_III",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nEm contraste, alguns designs, incluindo Breloom, Aggron e o já mencionado Castform, foram elogiados por seu estilo, com a grande variedade de Pokémon lendários únicos também ajudando a terceira geração a parecer nova e original. Embora Ruby e Sapphire tenham sido reconhecidos por introduzir designs menos memoráveis ​​do que seus antecessores, designs como Milotic, Salamence, Metagross, Rayquaza e Blaziken fizeram da geração como um todo um complemento satisfatório à Pokédex existente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Hitmontop",
      "descricao": "Pokémon do tipo Lutador da segunda geração, evolução de Tyrogue, que luta girando de cabeça para baixo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Hitmontop, o lutador que gira de cabeça para baixo, tem como golpe característico o Triple Kick. O que acontece a cada um dos três chutes?",
    "resposta": "Cada chute fica mais forte",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Triple_Kick_(move)",
      "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Triple_Kick_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The second generation (generation II) of the Pokémon franchise features 100 fictional species of creatures introduced to the core video game series in the Game Boy Color games Pokémon Gold and Silver. The generation was unveiled at the beginning of the Nintendo Space World '97 event. Gold and Silver were first released on November 21, 1999, in Japan.\n[…]\nKayleigh Partleton, in an article for Pocket Tactics, found several of the designs from the generation, including Furret, Scizor, Wobbuffet, Miltank, Snubbull, Entei, and Togepi, as highly favorable and well-crafted. Hayes Madsen, in a retrospective for Pokémon Gold and Silver, regarded the games' designs as among the most creative, citing Smeargle, Hitmontop, Wooper, and Unown as examples of designs that did not feel \"formulaic\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_II",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, que ocorre por diversos meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando Pokémon com outros Treinadores para obter indivíduos de todas as espécies. Em cada jogo Pokémon, o jogador começa escolhendo um entre três Pokémon para ser seu Pokémon inicial. Normalmente, as opções são Pokémon do tipo Planta, do tipo Fogo ou do tipo Água. Na segunda geração, o jogador pode escolher entre Chikorita, Cyndaquil e Totodile como seu inicial.\n[…]\nUm dos designs mais populares descobertos na versão beta foi a linha evolutiva de Kotora, composta por Kotora, Raitora e uma terceira evolução sem nome. Essa linha recebeu o tipo Elétrico e foi baseada em tigres, com o nome de Kotora significando \"filhote de tigre\" e o de Raitora, \"tigre do trovão\". Descobriu-se que a linha evolutiva de Kotora havia sido descartada tanto na primeira quanto na segunda geração.\n[…]\nEm abril de 2020, mais dois vazamentos foram documentados online, um de uma demo da Space World 1999 e o outro de uma versão anterior à Space World 1997 de Gold e Silver.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Delibird",
      "descricao": "Pokémon pinguim dos tipos Gelo e Voador da segunda geração, que carrega comida no rabo e distribui presentes."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Delibird, o pinguim que carrega comida no rabo, ataca com o golpe exclusivo Present. Que surpresa esse presente pode reservar ao adversário?",
    "resposta": "Curar o adversário",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Present_(move)",
      "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Present_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The second generation (generation II) of the Pokémon franchise features 100 fictional species of creatures introduced to the core video game series in the Game Boy Color games Pokémon Gold and Silver. The generation was unveiled at the beginning of the Nintendo Space World '97 event. Gold and Silver were first released on November 21, 1999, in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_II",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando Pokémon com outros Treinadores para obter indivíduos de todas as espécies. Em cada jogo Pokémon, o jogador começa escolhendo um entre três Pokémon para ser seu Pokémon inicial. Normalmente, as opções são Pokémon do tipo Planta, do tipo Fogo ou do tipo Água. Na segunda geração, o jogador pode escolher entre Chikorita, Cyndaquil e Totodile como seu inicial.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Porygon",
      "descricao": "Pokémon artificial do tipo Normal da primeira geração, feito de dados de computador."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Conversion, golpe da linha evolutiva de Porygon, mexe numa característica do próprio usuário durante a batalha. Que característica é essa?",
    "resposta": "O tipo do pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Conversion_(move)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Conversion_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan.\n[…]\nThe following list details the 151 Pokémon of generation I in order of their National Pokédex number. The first Pokémon, Bulbasaur, is number 0001 and the last, Mew, is number 0151. Alternate forms that result in type changes are included for convenience. Mega evolutions and regional forms are included on the pages for the generation in which they were introduced. MissingNo., a glitch, is also on this list.\n[…]\nWhile some Pokémon have been attributed to certain developers over the years, such as Atsuko Nishida for Pikachu and Motofumi Fujiwara for Eevee and its evolutions, Game Freak has avoided attributing many Pokémon to particular individuals to keep a sense of all the developers being involved in their creation.\n[…]\nThe majority of Pokémon in generation I had relatively simple designs and were similar to real-life creatures including Pidgey (a pigeon), Krabby (a crab), Rattata (a rat), and Ekans (a snake). Many Pokémon in the original games served as the base for repeating concepts later in the series. Some Pokémon, such as Squirtle, Bulbasaur and Charmander were designed based on their final evolutions and working backwards.\n[…]\nDuring development they ran into issues with digital cartridge space, and many Pokémon were removed. Specifically, several Pokémon that had a three-stage evolution line were instead changed to evolve only once, resulting in a planned final evolution for Pikachu called \"Gorochu\" being removed from the final game."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 151 Pokémon da Geração I em sua sequência do Pokédex Nacional - uma enciclopédia eletrônica no jogo, que fornece várias informações sobre números de Pokémon. O primeiro Pokémon, Bulbassauro, numerado de 001 e o último de Mew, numerado de 151. Formas alternativas que resultam em mudanças de tipo são incluídas por conveniência. Mega evoluções e formas regionais são incluídas nas páginas da geração em que foram introduzidas. MissingNo., uma falha, também está nesta lista.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nDurante o desenvolvimento, surgiram problemas com o espaço nos cartuchos digitais, e muitos Pokémon foram removidos. Especificamente, vários Pokémon que possuíam uma linha evolutiva de três estágios foram alterados para evoluir apenas uma vez, resultando na remoção da evolução final planejada para Pikachu, chamada \"Gorochu\", do jogo final.\n[…]\nQuando os jogos foram localizados para o público de língua inglesa como Red e Blue, a Nintendo of America deu às várias espécies de Pokémon \"nomes inteligentes e descritivos\" relacionados à sua aparência ou características, como forma de torná-los mais identificáveis ​​para as crianças americanas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Slowking",
      "descricao": "Pokémon dos tipos Água e Psíquico da segunda geração, evolução de Slowpoke mordido na cabeça por um Shellder."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Scarlet e Violet, Slowking ganhou o golpe exclusivo Chilly Reception, que chama a neve antes de ele sair de campo. O que Slowking faz nesse golpe?",
    "resposta": "Conta uma piada sem graça",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Chilly_Reception_(move)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Chilly_Reception_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet and Pokémon Violet are 2022 role-playing video games developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. They are the first installments in the ninth generation of the Pokémon video game series. They were announced in February 2022 and released on 18 November 2022. The games later received a downloadable content (DLC) expansion pass st\n[…]\nScarlet and Violet take place in the Paldea Region, which is based on the Iberian Peninsula. Unlike previous Pokémon installments, the games feature an open world. There are three separate stories the player can complete. Scarlet and Violet introduce 120 new Pokémon, along with two new regional forms and time-displaced creatures known as Paradox Pokémon. It also introduces the Terastal phenomenon, which allows a Pokémon to transform into its exclusive \"Tera Type\".\n[…]\n\"Celestial\" was later remixed by Fox for the end credits of the Scarlet and Violet's DLC expansions. Unlike other songs in the games, \"Celestial\" is not included in the official soundtrack release for Scarlet and Violet.\n[…]\nScarlet and Violet received \"mixed or average reviews\" according to review aggregator website Metacritic, making them the lowest-rated mainline series Pokémon games. Fellow review aggregator OpenCritic assessed that the games received fair approval, being recommended by 48% of critics.\n[…]\nAccording to The Pokémon Company, Scarlet and Violet are the most pre-ordered titles in the series' history. Within three days of its release, the games had sold over 10 million copies worldwide, including 4.05 million in Japan alone. The sales figure was the highest of any software on any Nintendo platform within three days, and the best launch of any console-exclusive game in history. The games were the best-selling video game titles of 2022 in Japan.\n[…]\nMedia related to Pokémon Scarlet and Violet at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_e_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet (ポケットモンスター スカーレット, Poketto Monsutā Sukāretto, Monstros de Bolso Escarlate) e Pokémon Violet (ポケットモンスター バイオレット, Poketto Monsutā Baioretto, Monstros de Bolso Violeta) são dois jogos eletrônicos de RPG desenvolvidos pela Game Freak e publicados pela Nintendo e The Pokémon Company para Nintendo Switch. Eles são os primeiros parcelas da nona geração da série de jogos eletrônicos Pokémon\n[…]\nIsso permite que os jogadores em GO encontrem uma forma especial de Gimmighoul, enquanto os jogadores em Scarlet e Violet podem encontrar formas especiais do Pokémon Vivillon. Vídeos promocionais especiais, mostrando personagens de ambos os jogos discutindo Gimmighoul e sua história, foram lançados antes do anúncio oficial da compatibilidade.\n[…]\nProduzida pelo Wit Studio, ela é baseada na região de Paldea como uma conexão com Scarlet e Violet, embora não faça parte da série principal de anime. Cada episódio se concentra em um aluno diferente da Academia, com cada um superando um problema ao longo do episódio.\n[…]\nScarlet e Violet receberam \"críticas mistas ou médias\", de acordo com o agregador de críticas Metacritic, tornando-os os jogos Pokémon da série principal com classificação mais baixa. O agregador de críticas OpenCritic avaliou os jogos como tendo recebido uma aprovação razoável, sendo recomendados por 48% dos críticos.\n[…]\nDe acordo com a The Pokémon Company, Scarlet e Violet são os títulos mais pré-encomendados da história da série. Três dias após seu lançamento, os jogos venderam mais de 10 milhões de cópias em todo o mundo, incluindo 4,05 milhões apenas no Japão. O número de vendas foi o mais alto de qualquer software em qualquer plataforma Nintendo em três dias, e o melhor lançamento de qualquer jogo exclusivo de console na história. Os jogos foram os títulos de jogos eletrônicos mais vendidos de 2022 no Japão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Primeape",
      "descricao": "Pokémon macaco do tipo Lutador da primeira geração, evolução de Mankey, que evolui para Annihilape em Scarlet e Violet."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em Scarlet e Violet, Primeape evolui para Annihilape depois de usar vinte vezes qual golpe, que fica mais forte a cada pancada recebida?",
    "resposta": "Rage Fist",
    "distratores": [
      "Close Combat",
      "Thrash",
      "Cross Chop"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Rage_Fist_(move)",
      "https://en.wikipedia.org/wiki/List_of_generation_IX_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rage_Fist_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IX_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The ninth generation (Generation IX) of the Pokémon franchise features 120 titular species of creatures introduced to the core video game series in the Nintendo Switch games Pokémon Scarlet and Violet. The first Pokémon of the generation were revealed on 27 February 2022 in a Pokémon Presents livestream presentation. Scarlet and Violet were released on 18 November 2022.\n[…]\nPokémon Scarlet and Violet take place in Paldea, which is heavily based on Spain, as well as other areas in the Iberian Peninsula, with the game's DLC expansions The Teal Mask and The Indigo Disk taking place in the Kitakami region and the Blueberry Academy, respectively. Kitakami is based on Japan, while the Blueberry Academy is a school environment set in the Unova region, the main location of the 2010 games Pokémon Black and White.\n[…]\nScarlet and Violet also feature a special mechanic known as \"Terastallization\" which allow the player's Pokémon to change their types in battle. The game Pokémon Legends: Z-A is set in the Kalos region, the main location of 2013 games Pokémon X and Y. It also saw the return of the \"Mega Evolution\" mechanic which was first introduced in those games; Mega Evolutions are powerful forms of Pokémon that can be used during Pokémon battles.\n[…]\nThe designs of many of the Pokémon have received criticism since Scarlet and Violet's release. Some fans of the series responded negatively to many designs from the games when the games were leaked prior to release. Stacey Henley, writing for TheGamer, criticized the designs of the Pokémon in the game."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_IX",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nPokémon Scarlet e Violet se passa em Paldea, que é fortemente inspirada na Espanha, assim como em outras áreas da Península Ibérica, com as expansões DLC do jogo The Teal Mask e The Indigo Disk se passando na região de Kitakami. and the Blueberry Academy, respectivamente. Kitakami é baseado no Japão, enquanto o Blueberry Academy é um ambiente escolar situado na região de Unova, o principal local dos jogos de 2010 Pokémon Black e White.\n[…]\nScarlet e Violet também apresentam um mecanismo especial conhecido como \"Terastallização\" que permitem que o Pokémon do jogador mude de tipo durante a batalha. O jogo Pokémon Legends: Z-A se passa na região de Kalos, o cenário principal dos jogos de 2013 Pokémon X e Y. Ele também marcou o retorno da mecânica de \"Mega Evolução\", que foi introduzida pela primeira vez nesses jogos; Mega Evoluções são formas poderosas de Pokémon que podem ser usadas durante as batalhas Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Stantler",
      "descricao": "Pokémon cervo do tipo Normal da segunda geração, de chifres hipnóticos, que evolui para Wyrdeer em Pokémon Legends: Arceus."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Legends: Arceus, Stantler vira Wyrdeer, e o Qwilfish de Hisui vira Overqwil, cumprindo o mesmo tipo de desafio. Que desafio é esse?",
    "resposta": "Usar certo golpe vinte vezes",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Psyshield_Bash_(move)",
      "https://bulbapedia.bulbagarden.net/wiki/Barb_Barrage_(move)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Psyshield_Bash_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Barb_Barrage_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus is a 2022 action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. It is part of the eighth generation of the Pokémon video game series and serves as a prequel to the fourth-generation titles Pokémon Diamond and Pearl (2006). The game was first announced as part of the Pokémon 25th Anniversary event in Febru\n[…]\nThe game follows the protagonist, who is sent back in time and travels through the Hisui region, which is based on the island of Hokkaido during early Japanese colonization. The game is centered around exploration of the region's several open areas populated with Pokémon, with its main objective being to complete the Pokédex by catching all Pokémon. Pokémon Legends: Arceus was a commercial success, having sold over 14.83 million copies by 31 March 2023.\n[…]\nAfter the player proves themselves in battle, Arceus bestows upon them a part of itself so that it can explore the world that it created by their side.\n[…]\nJordan Middler of Nintendo Life praised Pokémon Legends: Arceus for its \"rewarding\" exploration, \"addictive\" catching mechanics, quality of the Pokémon roster, and its \"genuine sense of scale\", while stating that \"Pokémon Legends: Arceus is quite simply one of the greatest Pokémon games ever made\".\n[…]\nPokémon Legends: Arceus was nominated for several end of the year awards; it was nominated for Best RPG at The Game Awards, as well as nominated for Game of the Year by GamesRadar, GamingBolt, The Washington Post, Empire, VGC, GamesHub, and Polygon.\n[…]\nIn the United States, Legends: Arceus was the best-selling video game in January 2022 (excluding digital downloads). It was the second best-selling game the following month and sixth in March, making it the second best-selling game during the first quarter of 2022 (second only to Elden Ring)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Legends%3A_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus (Pokémon LEGENDS アルセウス, Pokemon Rejenzu: Aruseusu; tradução: Pokémon Lendas: Arceus) é um jogo eletrônico de RPG de ação desenvolvido pela Game Freak e publicado pela The Pokémon Company e Nintendo. Faz parte da oitava geração da série de jogos eletrônicos Pokémon e serve como uma prequela para os jogos eletrônicos de RPG do Nintendo DS, Pokémon Diamond e Pearl, de 2006. Fo\n[…]\nPokémon Legends: Arceus está sendo desenvolvido pela Game Freak. É o primeiro projeto conhecido no subgênero de RPG de ação realizado pelo estúdio. Foi revelado pela primeira vez em uma apresentação em 26 de fevereiro de 2021, como parte do evento Pokémon 25th Anniversary ao lado de Pokémon Brilliant Diamond e Shining Pearl. Ele servirá como uma prequela de Diamond e Pearl. Foi lançado mundialmente em 28 de janeiro de 2022.\n[…]\nApós o lançamento do trailer de revelação, vários sites de notícias como Polygon, assim como fãs da série, fizeram comparações entre Pokémon Legends: Arceus e The Legend of Zelda: Breath of the Wild, observando aparentes semelhanças com este último em jogabilidade de mundo aberto e estilo de arte mostrados no trailer. Outros criticaram o jogo por uma percepção de falta de profundidade e qualidade visual inconsistente e levantaram preocupações sobre aparentes problemas de desempenho.\n[…]\nPokémon Legends: Arceus recebeu \"críticas geralmente favoráveis\" de acordo com o agregador de resenhas Metacritic.\n[…]\nA Nintendo informou que o jogo vendeu 6,5 milhões de cópias em todo o mundo dentro de uma semana de seu lançamento, superando outros títulos da série Pokémon lançados para Nintendo Switch, como Sword e Shield e Brilliant Diamond e Shining Pearl. No Japão, vendeu 1,43 milhão de unidades em três dias. Nos Estados Unidos, apenas as vendas físicas de Legends: Arceus (excluindo downloads digitais) fizeram dele o jogo eletrônico mais vendido de janeiro de 2022.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Moltres",
      "descricao": "Pokémon lendário ave de fogo da primeira geração, que tem uma forma de Galar do tipo Sombrio."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Fiery Wrath, golpe exclusivo do tipo Sombrio que transforma a fúria do usuário numa aura de fogo, pertence a qual pokémon de Galar?",
    "resposta": "Moltres de Galar",
    "distratores": [
      "Zapdos de Galar",
      "Articuno de Galar",
      "Weezing de Galar"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Fiery_Wrath_(move)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Fiery_Wrath_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword and Pokémon Shield are 2019 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo Switch console. They are the first instalments in the 8th generation of the Pokémon video game series. First teased at E3 2017 and announced in February 2019, the games were released on 15 November 2019.\n[…]\nOther new mechanics include \"Poké Jobs,\" which tasks the player's Pokémon with completing requests around Galar to gain experience or rare items. Regional variants, variations of Pokémon from past games in the series that have different appearances due to regional adaptation, return after being introduced in Pokémon Sun and Moon, which featured regional variants exclusive to the game's main location of Alola.\n[…]\nThe next day, before the final battle between the player and Leon can commence, Rose awakens the Legendary Pokémon Eternatus in an attempt to harness its power to provide unlimited energy to Galar, purposefully triggering the second Darkest Day. The player and Hop secure the aid of the two Legendary Pokémon, Zacian and Zamazenta. The four defeat Rose and Eternatus, after which the player catches Eternatus and Rose hands himself over to the authorities.\n[…]\nUnlike previous core series games, many pre-existing Pokémon are not available in Sword and Shield, and only Pokémon that appear in the Galar region can be transferred from previous titles via Pokémon Home.\n[…]\nThe decision to exclude many pre-existing Pokémon in the games drew outrage from many fans, who referred to it as \"Dexit\", a portmanteau of \"Pokédex\" and \"Brexit\" (tying in with the Galar region's British theme), and created the hashtag \"#BringBackNationalDex\" on social media. with some fans calling for the games to be delayed until all of the Pokémon could be added."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sword_e_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword e Pokémon Shield (ポケットモンスター ソード・シールド, Poketto Monsutā Sōdo・Shīrudo; Monstros de Bolso Sword・Shield, que traduzidos do inglês para o português significa Espada e Escudo, Espada e Escudo em japonês é respectivamente 剣 Ken e 盾 Tate) são dois jogos eletrônicos de RPG, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo. Fazem parte da oitava geração da série Po\n[…]\nO planejamento do conceito de Sword e Shield começou imediatamente após a conclusão de Pokémon Sun e Moon em 2016, enquanto a produção total começou um ano depois, em setembro de 2017. Como nos títulos anteriores, eles narram a jornada de um jovem treinador Pokémon com o objetivo de se tornar o Pokémon Campeão, desta vez na nova região de Galar, que fica no Reino Unido.\n[…]\nComo tal, apenas Pokémon que aparecem na região Galar podem ser transferidos de títulos anteriores através da página inicial do Pokémon Home. Além disso, de acordo com os desenvolvedores, os modelos de maior fidelidade, que foram projetados para serem mais \"expressivos\", tiveram que ser construídos do zero, pois simplesmente transferir os existentes produzidos para a plataforma 3DS não era possível.\n[…]\nA decisão de não incluir todos os Pokémon preexistentes nos jogos atraiu críticas de muitos fãs, que se referiram a ele como \"Dexit\", uma amálgama de Pokédex e Brexit (vinculado ao tema britânico da região de Galar), e usado a hashtag \"#BringBackNationalDex\" para discutir o assunto nas redes sociais.\n[…]\nEscrevendo para GameSpot, Kallie Plagge também elogiou a dupla pelos sistemas de jogo fáceis de entender e uma sensação de liberdade, afirmando: \"você não é impedido por sistemas de processo interno excessivamente complicados ou obstáculos para pular; desde o início, você pode começar a vagar a região de Galar, vendo seu novo Pokémon e testando suas novas estratégias de batalha com muito pouco em seu caminho.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Zapdos",
      "descricao": "Pokémon lendário ave dos tipos Elétrico e Voador da primeira geração, que tem uma forma de Galar dos tipos Lutador e Voador."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Galar, Zapdos troca o voo pela corrida e ganha o golpe exclusivo Thunderous Kick. De que tipo é esse chute?",
    "resposta": "Lutador",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Thunderous_Kick_(move)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Thunderous_Kick_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword and Pokémon Shield are 2019 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo Switch console. They are the first instalments in the 8th generation of the Pokémon video game series. First teased at E3 2017 and announced in February 2019, the games were released on 15 November 2019.\n[…]\nOther new mechanics include \"Poké Jobs,\" which tasks the player's Pokémon with completing requests around Galar to gain experience or rare items. Regional variants, variations of Pokémon from past games in the series that have different appearances due to regional adaptation, return after being introduced in Pokémon Sun and Moon, which featured regional variants exclusive to the game's main location of Alola.\n[…]\nAs their quest continues, the player assists Sonia in her research on two Legendary Pokémon who saved Galar from an ancient crisis called the Darkest Day and deduces that they are the same Pokémon previously encountered in the Slumbering Weald. After beating the eight Gym Leaders, the player makes their way to Wyndon where they win the Champion's Cup, earning an opportunity to battle Leon.\n[…]\nThree days later, the player faces and defeats Leon in the final battle and becomes the new Galar League Champion.\n[…]\nUnlike previous core series games, many pre-existing Pokémon are not available in Sword and Shield, and only Pokémon that appear in the Galar region can be transferred from previous titles via Pokémon Home.\n[…]\nThe decision to exclude many pre-existing Pokémon in the games drew outrage from many fans, who referred to it as \"Dexit\", a portmanteau of \"Pokédex\" and \"Brexit\" (tying in with the Galar region's British theme), and created the hashtag \"#BringBackNationalDex\" on social media. with some fans calling for the games to be delayed until all of the Pokémon could be added."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sword_e_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword e Pokémon Shield (ポケットモンスター ソード・シールド, Poketto Monsutā Sōdo・Shīrudo; Monstros de Bolso Sword・Shield, que traduzidos do inglês para o português significa Espada e Escudo, Espada e Escudo em japonês é respectivamente 剣 Ken e 盾 Tate) são dois jogos eletrônicos de RPG, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo. Fazem parte da oitava geração da série Po\n[…]\nEnquanto sua busca continua, o jogador auxilia Sonia em sua pesquisa sobre dois Pokémon Lendários que salvaram Galar de uma crise antiga chamada de Darkest Day e deduz que eles são os mesmos Pokémon encontrados anteriormente em Slumbering Weald. Depois de derrotar os oito Líderes de Ginásio, incluindo Piers, o irmão mais velho de Marnie e o líder da Equipe Yell, o jogador segue para Wyndon, onde ganha a Copa dos Campeões, ganhando a oportunidade de lutar contra Leon.\n[…]\nO jogador então enfrenta e derrota Leon em uma batalha e se torna o novo campeão da região de Galar.\n[…]\nA decisão de não incluir todos os Pokémon preexistentes nos jogos atraiu críticas de muitos fãs, que se referiram a ele como \"Dexit\", uma amálgama de Pokédex e Brexit (vinculado ao tema britânico da região de Galar), e usado a hashtag \"#BringBackNationalDex\" para discutir o assunto nas redes sociais.\n[…]\nEscrevendo para GameSpot, Kallie Plagge também elogiou a dupla pelos sistemas de jogo fáceis de entender e uma sensação de liberdade, afirmando: \"você não é impedido por sistemas de processo interno excessivamente complicados ou obstáculos para pular; desde o início, você pode começar a vagar a região de Galar, vendo seu novo Pokémon e testando suas novas estratégias de batalha com muito pouco em seu caminho.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Snorlax",
      "descricao": "Pokémon gigante e dorminhoco do tipo Normal da primeira geração."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Sun e Moon, qual pokémon tem o Movimento Z exclusivo Pulverizing Pancake, em que salta e esmaga o adversário com seu corpo enorme?",
    "resposta": "Snorlax",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pulverizing_Pancake_(move)",
      "https://en.wikipedia.org/wiki/Snorlax"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pulverizing_Pancake_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Snorlax",
        "situacao": "ok",
        "texto": "Snorlax ( ), known in Japan as Kabigon (Japanese: カビゴン), is a Pokémon species in Nintendo and Game Freak's Pokémon franchise. Created by Ken Sugimori, Snorlax first appeared in the Game Boy video game Pokémon Red and Blue, and subsequent sequels, later appearing in various merchandise, spin-off titles, and animated and printed adaptations of the franchise, as well as the mascot of mobile game Poké\n[…]\nSnorlax is voiced by Michael Haigney and Eric Stuart in English, and Katsuyuki Konishi in Japanese.\n[…]\nAlthough there is only one Snorlax available to catch, another is used by Red, the protagonist of Red and Blue who acts as these games' final boss. In Pokémon XD: Gale of Darkness, a pre-evolution of Snorlax named Munchlax was introduced; however, Munchlax remained unobtainable until the release of Pokémon Diamond and Pearl. In Pokémon Sun, Moon and their \"upper versions\", Snorlax is among the handful of Pokémon to possess a unique Z-Move, a powerful one-time use attack.\n[…]\nIt can use the move \"Pulverizing Pancake\" when holding a special \"Snorlium Z\" item. In Pokémon Sword and Shield, Snorlax gained a \"Gigantamax form,\" which could be used in battle.\n[…]\nA Snorlax also appeared in the film Pokémon Detective Pikachu, sleeping on a road in Ryme City.\n[…]\nFollowing earthquakes in Japan, Niantic boosted the spawn rates of Snorlax in Pokémon Go in affected prefectures in order to boost tourism in the area.\n[…]\nElijah Watson of Complex stated that while Snorlax was extremely lazy, they were also extremely powerful, despite their slow speed. He further added \"We should all strive to be Snorlax: lazy as hell but surprisingly awesome.\" A video released for Project Snorlax, depicting Cubone and Snorlax—two normally solitary Pokémon—bonding received positive reviews from critics, with many highlighting it as heartwarming.\n[…]\nSnorlax  at Bulbapedia, a Pokémon wiki\n[…]\nSnorlax on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Snorlax",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA maioria dos Pokémon desta geração tinha designs relativamente simples e eram altamente análogos às criaturas da vida real, incluindo, entre outros: Pidgey (um pombo), Krabby (um caranguejo), Rattata (um rato), Ekans (uma cobra), e Seel (uma foca). Muitos Pokémon nos jogos originais serviram como base para repetir conceitos mais adiante na série. Alguns Pokémon, como Squirtle, Bulbasaur e Charmander, foram projetados com base em suas evoluções finais, trabalhando-se de trás para frente.\n[…]\nDurante o desenvolvimento, surgiram problemas com o espaço nos cartuchos digitais, e muitos Pokémon foram removidos. Especificamente, vários Pokémon que possuíam uma linha evolutiva de três estágios foram alterados para evoluir apenas uma vez, resultando na remoção da evolução final planejada para Pikachu, chamada \"Gorochu\", do jogo final.\n[…]\nQuando os jogos foram localizados para o público de língua inglesa como Red e Blue, a Nintendo of America deu às várias espécies de Pokémon \"nomes inteligentes e descritivos\" relacionados à sua aparência ou características, como forma de torná-los mais identificáveis ​​para as crianças americanas.\n[…]\nOgasawara queria evitar nomes binários e com gênero definido para as espécies de Pokémon, caso gêneros fossem introduzidos para eles em títulos posteriores, uma preocupação que se provou válida com os títulos subsequentes Pokémon Gold e Silver.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Eevee",
      "descricao": "Pokémon do tipo Normal da primeira geração, famoso por evoluir em vários pokémon diferentes."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No Extreme Evoboost, Movimento Z exclusivo de Eevee, quem aparece em cena para emprestar força ao pokémon?",
    "resposta": "As evoluções de Eevee",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Extreme_Evoboost_(move)",
      "https://en.wikipedia.org/wiki/Eevee"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Extreme_Evoboost_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Eevee",
        "situacao": "ok",
        "texto": "Eevee ( ), known in Japan as Eievui (Japanese: イーブイ, Hepburn: Ībui), is a Pokémon species in the Pokémon franchise. Created by Satoshi Tajiri and designed by Motofumi Fujiwara, it first appeared in the video games Pokémon Red and Blue. It later appeared in a variety of merchandise, spin-off titles, and both animated and printed adaptations of the franchise. It is also the game mascot and starter P\n[…]\nEevee is one of the most popular Pokémon among fans, due to its character design and ability to evolve into many forms with different Pokémon types.\n[…]\nIn Pokémon Sun and Moon, Eevee gained the ability to use a special \"Z-Crystal\" item known as Eevium Z. This allowed it to use a special \"Z-Move,\" a one time use powerful attack, known as Extreme Evoboost. In Pokémon Sword and Shield, Eevee gained the ability to use a unique \"Gigantamax Form,\" which could be used when Eevee utilized the game's \"Dynamax\" mechanic, which exponentially increased the Pokémon's size and changed its appearance.\n[…]\nEevee Day has since been officially adopted by the Pokémon Company, and was later made an official anniversary by the Japan Anniversary Association. Eevee has been cited as a \"fan favorite\" Pokémon and a franchise staple due to its popularity.\n[…]\nEevee's appearance in Pokémon: Let's Go, Pikachu! and Pokémon: Let's Go, Eevee! received positive reviews. Hope Corrigan, writing for GameRevolution, commented on Eevee's appearance in the game. She highlighted the scene where Eevee interrupts the player's first Pokémon selection as immediately making her nostalgic for the days of her childhood when she used Eevee.\n[…]\nShe also praised the interactions and smaller moments that the player could have with Eevee, citing them as making the player grow easily attached to the Pokémon.\n[…]\nEevee  at Bulbapedia, a Pokémon wiki\n[…]\nEevee on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eevee",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nEmbora alguns Pokémon tenham sido atribuídos a certos desenvolvedores ao longo dos anos, como Atsuko Nishida para Pikachu e Motofumi Fujiwara para Eevee e suas evoluções, a Game Freak evitou atribuir muitos Pokémon a indivíduos específicos para manter a sensação de que todos os desenvolvedores estiveram envolvidos em sua criação.\n[…]\nA maioria dos Pokémon desta geração tinha designs relativamente simples e eram altamente análogos às criaturas da vida real, incluindo, entre outros: Pidgey (um pombo), Krabby (um caranguejo), Rattata (um rato), Ekans (uma cobra), e Seel (uma foca). Muitos Pokémon nos jogos originais serviram como base para repetir conceitos mais adiante na série. Alguns Pokémon, como Squirtle, Bulbasaur e Charmander, foram projetados com base em suas evoluções finais, trabalhando-se de trás para frente.\n[…]\nDurante o desenvolvimento, surgiram problemas com o espaço nos cartuchos digitais, e muitos Pokémon foram removidos. Especificamente, vários Pokémon que possuíam uma linha evolutiva de três estágios foram alterados para evoluir apenas uma vez, resultando na remoção da evolução final planejada para Pikachu, chamada \"Gorochu\", do jogo final.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Mew",
      "descricao": "Pokémon mítico do tipo Psíquico da primeira geração, que traz o material genético de todos os pokémon."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Genesis Supernova, Movimento Z que enche o campo de energia psíquica, é exclusivo de qual pokémon mítico?",
    "resposta": "Mew",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Genesis_Supernova_(move)",
      "https://en.wikipedia.org/wiki/Mew_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Genesis_Supernova_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mew_(Pok%C3%A9mon)",
        "situacao": "ok",
        "texto": "Mew ( ; Japanese: ミュウ, Hepburn: Myū) is one of the many fictional species in the Pokémon franchise. It is a small, pink, Psychic-type Mythical Pokémon, which is an incredibly rare and powerful Pokémon typically available only via special events. It was added to the Pokémon Red and Blue games by Game Freak programmer Shigeki Morimoto, at the tail end of the games' development.\n[…]\nMorimoto would later aid in the development of a later Mew event that appeared in Pokémon Emerald.\n[…]\nMew is mentioned in a journal entry in Cinnabar Mansion, referencing an encounter with it in Guyana. At the time of its introduction, Mew could only be obtained in the Pokémon video games via Nintendo promotional event distributions. This period of event exclusivity ended with the release of My Pokémon Ranch, where Mew was accessible through normal game play without an event distribution. Mew has subsequently been made available in many games in the series.\n[…]\nPlayers can obtain it by buying a Poké Ball Plus, which contains a Mew inside of it that can be sent into Pokémon: Let's Go, Pikachu! and Let's Go, Eevee! or Pokémon Sword and Shield. Mew is also obtainable in Pokémon Brilliant Diamond and Shining Pearl if save data exists on the console for one of the Let's Go games. In Pokémon Sun and Moon, a special \"Z-Crystal\" item was created for Mew, which allowed it to use a powerful attack only it could use, known as \"Genesis Supernova\".\n[…]\nIn 2021, Oreos depicting Pokémon characters were released, with those depicting Mew being particularly rare and sought after by fans of the series, leading to bids on sales of the cookie jumping up to prices as high as several thousand dollars. In 2024, the Oreo Pokémon cookies were rolled out in Southeast Asia; its accompanying promo encouraged participants to send a photo of them holding a Mew cookie.\n[…]\nMew  at Bulbapedia, a Pokémon wiki\n[…]\nMew on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mew_%28Pok%C3%A9mon%29",
        "situacao": "ok",
        "texto": "Mew (ミュウ, Myū) é uma espécie de Pokémon, pertencente à franquia de mídia Pokémon da Nintendo. Ele apareceu pela primeira vez incluído na versão japonesa de Pokémon Red e Blue, como um personagem secreto. Como tal, ele foi o tema de muitos mitos e rumores, que contribuíram para o sucesso da franquia Pokémon. Então ele foi adicionado em versões estrangeiras de Pokémon Red e Blue, ele também foi o pr\n[…]\nNos jogos eletrônicos, Mew pode aprender qualquer movimento que pode ser ensinado. Diferente de Ditto, que é o único Pokémon que pode ser transformado num outro Pokémon com a técnica de \"Transformação\". No anime, ele é capaz de voar, teletransportar, ficar invisível, e criar grandes bolhas de energia rosa psíquicas.\n[…]\nUm pôster promocional de Mew também foi incluído no DVD do filme Pokémon: Lucario and the Mystery of Mew.\n[…]\nDevido às suas altas estatísticas e o fato de que ele pode aprender qualquer movimento, Mew é considerado um dos melhores Pokémons de Pokémon Red e Blue. Vários estudos sobre a influência de personagens fictícios em crianças foram feitos, como o livro Pikachu's Global Adventure: The Rise and Fall of Pokémon, que destacou o fato de que Mew era popular com as meninas que tendem a ser atraídas por personagens \"kawaii\".\n[…]\nReciprocamente, Mewtwo é descrito como sendo popular com os meninos um pouco mais velhos geralmente atraídos por personagens \"ferozes ou assustadores\". O livro Media and the Make-believe Worlds of Children também descreveu Mew nesse sentido o retratadando como \"infantil e doce, combinando as características de poder e bondade\"; o livro também enfatiza a importância para as crianças do contraste entre ele e Mewtwo. O portal IGN classificou Mew como um dos melhores Pokémons do tipo psíquico.\n[…]\nPokémon\n[…]\nLista de Pokémon",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pikachu de Ash",
      "descricao": "Pikachu parceiro de Ash Ketchum no anime Pokémon, recebido do Professor Carvalho no primeiro episódio."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na série Sol e Lua do anime, o Pikachu de Ash ganha um Movimento Z só dele, um raio de potência colossal. Que nome em inglês tem esse golpe?",
    "resposta": "10,000,000 Volt Thunderbolt",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/10,000,000_Volt_Thunderbolt_(move)",
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Pikachu"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/10,000,000_Volt_Thunderbolt_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Pikachu",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Raichu",
      "descricao": "Pokémon do tipo Elétrico da primeira geração, evolução de Pikachu, que tem uma forma de Alola dos tipos Elétrico e Psíquico."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Qual destes Movimentos Z exclusivos pertence ao Raichu de Alola, que surfa sobre a própria cauda?",
    "resposta": "Stoked Sparksurfer",
    "distratores": [
      "Catastropika",
      "Splintered Stormshards",
      "Sinister Arrow Raid"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Stoked_Sparksurfer_(move)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Stoked_Sparksurfer_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun and Pokémon Moon are 2016 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2016, Sun and Moon were released worldwide on 18 November 2016, commemorating the franchise's 20th anniversary.\n[…]\nThis causes Nebby to evolve into a cocoon-like form while Ultra Beasts are unleashed onto Alola's islands, forcing the island Kahunas and guardian deities to fight them.\n[…]\nAccording to composer Junichi Masuda, who co-produced the game, the soundtracks used in Sun and Moon were based on traditional Hawaiian music styles. However, while it utilizes their core rhythms, Alola's music employs \"completely different\" melodies while still invoking a tropical island feel. On 30 November 2016 the Nintendo 3DS Pokémon Sun and Moon Super Music Complete, a four-disk soundtrack containing 169 songs, 160 from the games and 9 special tracks, was released in Japan.\n[…]\nEarly purchasers of the games received a special Munchlax holding Snorlium Z, enabling it to use an exclusive Z-Move unique to Snorlax, Munchlax's evolution, via a wireless distribution event. A Japanese trailer was unveiled on 8 September 2016. A Pokémon Sun and Moon-themed New Nintendo 3DS XL was released on 28 October 2016.\n[…]\nAlex Olney of Nintendo Life said that \"the plot in Sun & Moon is the deepest and most ambitious Game Freak has dared attempt\", he also called them the best Pokémon games ever produced, commenting that Alola's design felt natural and organic, praising Game Freak for successfully balancing additional mechanics without alienating existing fans. Chris Tapsell of Eurogamer said the games were \"the best generation in more than a decade\". They earned an \"essential\" ranking from the site."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sun_e_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun (ポケットモンスター　サン, Poketto Monsutā San; \"Monstros de Bolso Sun\", que traduzido do inglês para o português significa Sol, Sol em japonês é 太陽 Taiyō) e Pokémon Moon (ポケットモンスター　ムーン, Poketto Monsutā Mūn; \"Monstros de Bolso Moon\"\", que traduzido do inglês para o português significa Lua, Lua em japonês é 月 Tsuki) são dois jogos eletrônicos de RPG de 2016, faz parte da sétima geração da série Pok\n[…]\nSun e Moon introduziram 81 novas espécies Pokémon e novos recursos, como formas de Alola de Pokémon da geração anterior, movimentos poderosos conhecidos como Movimento-Z, criaturas alienígenas conhecidas como Ultra Bestas, batalha atualizada e mecânica de treinamento e gráficos 3D poligonais aprimorados.\n[…]\nSandshrew e Sandslash de Alola, que são tipos Solo em outras regiões, são do tipo Gelo e Metal. Meowth e Persa de Alola, que são tipos normais em outras regiões, são tipos Escuros. Algumas evoluções de Pokémon também ganharam tipificações duplas, como Marowak de Alola que agora é do tipo Fogo e Fantasma e Raichu de Alola, do tipo Elétrico e Psíquico.\n[…]\nDe acordo com o compositor Junichi Masuda, que co-produziu o jogo, as trilhas sonoras usadas em Sun e Moon foram baseadas em estilos musicais tradicionais havaianos. No entanto, embora utilize seus ritmos básicos, a música de Alola emprega melodias \"completamente diferentes\", ao mesmo tempo que invoca uma sensação de ilha tropical.\n[…]\nOs primeiros compradores dos jogos receberam um Munchlax especial segurando Snorlium Z, permitindo-lhe usar um Movimento-Z exclusivo para Snorlax, a evolução de Munchlax, por meio de um evento de distribuição sem fio. Um trailer japonês foi revelado em 8 de setembro de 2016. Um Pokémon Sun e Moon com o tema New Nintendo 3DS XL foi lançado em 28 de outubro de 2016.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Meowth",
      "descricao": "Pokémon gato do tipo Normal da primeira geração, com uma moeda na testa, que tem forma Gigantamax em Sword e Shield."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Sword e Shield, o Meowth Gigantamax ataca com G-Max Gold Rush, que confunde os adversários. O que mais esse golpe rende ao treinador?",
    "resposta": "Dinheiro extra",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/G-Max_Gold_Rush_(move)",
      "https://en.wikipedia.org/wiki/Meowth"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/G-Max_Gold_Rush_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Meowth",
        "situacao": "ok",
        "texto": "Meowth (, mee-OW-th), known in Japanese as Nyarth (Japanese: ニャース), is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise, and the first stage of its evolved form, Persian. First introduced in the video games Pokémon Red and Blue, it has received multiple new forms, including regional variants called Alolan Meowth and Galarian Meowth in Pokémon Sun and Moon and Pokémon Sword an\n[…]\nSword and Shield also introduced a giant-sized Meowth transformation that causes it to become very long, called Gigantamax Meowth.\n[…]\nDuring the development of sequel titles Pokémon Sun and Moon, \"Alolan form\" variants of several existing Pokémon were introduced, meant to be tied thematically to the game's region, which was modeled after Hawaii. Both Meowth and Persian received Alolan forms, which give them a new Dark type instead of its Normal type. Like Meowth, it also evolves into Persian, which is also newly Dark type. In Pokémon Sword and Shield, Meowth is given two new forms.\n[…]\nIn Pokémon Sword and Shield, Galarian Meowth can be found in the wild, while the regular Meowth form can be obtained by trading a Galarian Meowth for it. Regular Meowth is capable of transforming into Gigantamax Meowth in these games as well.\n[…]\nMeowth has been generally well received, described by GameSpot staff as among the most popular Pokémon. Destructoid writer Marcel Hoang considered Galarian Meowth his favorite Pokémon in Sword and Shield, calling regular Meowth a \"baseline\" and considering Alolan Meowth a good demonstration of how regional forms can be interesting. He felt that Meowth's \"street cat flavor\" was enhanced significantly to the point of making Galarian Meowth almost feral.\n[…]\nThe baby form that was cut from Gold and Silver was a popular design with fans. Multiple critics drew a comparison between Meowth's Gigantamax form and the Longcat meme.\n[…]\nMeowth  at Bulbapedia, a Pokémon wiki"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Pikachu parceiro",
      "descricao": "Pikachu especial que acompanha o jogador em Pokémon Let's Go, Pikachu!, com golpes exclusivos e roupas personalizáveis."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Let's Go, Pikachu!, o Pikachu parceiro aprende Floaty Fall, em que flutua no ar e despenca sobre o alvo. De que tipo é esse golpe?",
    "resposta": "Voador",
    "distratores": [
      "Elétrico",
      "Normal",
      "Fada"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Floaty_Fall_(move)",
      "https://bulbapedia.bulbagarden.net/wiki/Partner_Pikachu"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Floaty_Fall_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Partner_Pikachu",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Eevee parceiro",
      "descricao": "Eevee especial que acompanha o jogador em Pokémon Let's Go, Eevee!, que não evolui e aprende golpes exclusivos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Let's Go, Eevee!, o Eevee parceiro aprende golpes exclusivos como Sizzly Slide, Bouncy Bubble e Buzzy Buzz. Que relação eles têm com as evoluções de Eevee?",
    "resposta": "Cada um tem o tipo de uma evolução",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Partner_Eevee",
      "https://bulbapedia.bulbagarden.net/wiki/Sizzly_Slide_(move)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Partner_Eevee",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sizzly_Slide_(move)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Volt Tackle",
      "descricao": "Golpe elétrico exclusivo da linha evolutiva de Pikachu, introduzido na terceira geração e famoso no anime com o Pikachu de Ash."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Volt Tackle, a investida elétrica exclusiva da linha de Pikachu, tem um preço para quem a usa. Qual é esse preço?",
    "resposta": "O usuário também sofre dano",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Volt_Tackle_(move)",
      "https://en.wikipedia.org/wiki/Pikachu"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Volt_Tackle_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pikachu",
        "situacao": "ok",
        "texto": "Pikachu ( ; Japanese: ピカチュウ, Hepburn: Pikachū) is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise, and the franchise's mascot. First introduced in the video games Pokémon Red and Blue, it was created by Atsuko Nishida at the request of lead designer Ken Sugimori, with the design finalized by Sugimori. Since Pikachu's debut, it has appeared in multiple games including Pokémon\n[…]\nPokémon Omega Ruby and Alpha Sapphire introduced five new forms of Pikachu, labelled \"Cosplay Pikachu\" which wore different outfits and could be used in in-game competitions known as \"Pokémon Contests.\" Pokémon Sun and Moon games also introduced two Z-Crystals exclusive to Pikachu, which allow Pikachu to use special, one-time use attacks that are more powerful than standard attacks.\n[…]\nOn February 27, 2024, La Poste (France) issued a stamp commemorating Pikachu.\n[…]\nFor the franchise's 25th anniversary, The Pokémon Company announced special trading cards in 2021, each featuring 25 Pikachu drawn by 25 artists. A promotion at the Van Gogh Museum in Amsterdam featured exclusive Pokémon Cards of Pikachu wearing Van Gogh's grey felt hat. It was pulled from the exhibition due to safety concerns after scalpers mobbed the store when it came out. Several employees at the museum were suspended due to reported embezzlement of a large number of the cards.\n[…]\nPikachu's rarity in the games has been cited as part of the reason for its popularity.\n[…]\nIt stated that it allowed them to become more familiar with Pikachu's character and grow more attached to it, allowing the audience to become properly invested with the franchise and the narrative. Meanwhile, TIME Magazine's Lisa Eadicicco felt its cute appearance coupled with the baby-like pronunciations of its own name led to it becoming an appealing design.\n[…]\nPikachu on Pokemon.com\n[…]\nPikachu  at Bulbapedia, a Pokémon wiki\n[…]\nPikachu on Serebii"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pikachu",
        "situacao": "ok",
        "texto": "Pikachu (ピカチュウ, Pikachū) é uma espécie fictícia pertencente à franquia de mídia Pokémon da Nintendo. Ele apareceu pela primeira vez no Japão em 1996, nos jogos eletrônicos Pokémon Red e Pokémon Green, sendo lançados fora do Japão em 1998 como Pokémon Red and Blue, e foi criado por Atsuko Nishida a pedidos do designer principal  Ken Sugimori.\n[…]\nGeralmente descrito como um rato elétrico, Pikachu foi criado pelo estúdio Game Freak e desenhado por Atsuko Nishida. Ele foi criado juntamente com a sua evolução, Raichu; a partir da segunda geração, ele também passou a ter uma pré-evolução, o Pichu. Pikachu é do tipo elétrico e ocupa a 25ª posição na Pokédex nacional, a enciclopédia que lista as diferentes espécies de Pokémon.\n[…]\nDe acordo com as Pokédexes, as enciclopédias fictícias Pokémon, os Pikachus são um Pokémon frugívoro que vivem em grupos florestais às escondidas, e são desconfiados, e podem monitorar a área ao seu arredor através de sua cauda. Pikachu é um tipo de Pokémon elétrico: os bolsos em suas bochechas, identificado por discos vermelhos que decoram, são capazes de gerar choques elétricos de intensidade variável, chegando até o nível de poder de um raio. Eles também o usam para se defender.\n[…]\nUm item específico, LightBall, permite duplicar suas estatísticas de ataque e de ataque especial (desde Pokémon Diamond e Pearl), bem como para transmitir para os futuros ovos das fêmeas Pikachu a capacidade de usar o golpe: \"Volt Tackle\", que também está entre um dos ataques mais poderosos que Pikachu pode usar em combate.\n[…]\nCards colecionáveis de Pikachu já existem desde o lançamento do jogo de cartas Pokémon Trading Card Game em 1996, incluindo cards em edições limitadas. O personagem também já foi usado em campanhas promocionais de redes de fast-food como McDonald's, Wendy's e Burger King. Também é alvo de diversas paródias.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Pikachu Cosplay",
      "descricao": "Pikachu fêmea fantasiada de Pokémon Omega Ruby e Alpha Sapphire, que troca de roupa e de golpe exclusivo nos concursos."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Omega Ruby e Alpha Sapphire, a Pikachu Cosplay aprende um golpe diferente conforme a fantasia. Com qual fantasia ela aprende Flying Press?",
    "resposta": "Lutadora mascarada",
    "distratores": [
      "Estrela do rock",
      "Dama elegante",
      "Estrela pop"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Cosplay_Pikachu",
      "https://bulbapedia.bulbagarden.net/wiki/Flying_Press_(move)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cosplay_Pikachu",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Flying_Press_(move)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Unown",
      "descricao": "Pokémon psíquico da segunda geração em forma de letra, com uma forma para cada símbolo do alfabeto."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que Unown, o pokémon em forma de letra, e Ditto, o que se transforma em outros, têm em comum na lista de golpes?",
    "resposta": "Só aprendem um golpe",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Hidden_Power_(move)",
      "https://bulbapedia.bulbagarden.net/wiki/Transform_(move)",
      "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Hidden_Power_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Transform_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The second generation (generation II) of the Pokémon franchise features 100 fictional species of creatures introduced to the core video game series in the Game Boy Color games Pokémon Gold and Silver. The generation was unveiled at the beginning of the Nintendo Space World '97 event. Gold and Silver were first released on November 21, 1999, in Japan.\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as battling or exposure to specific items. Each Pokémon has one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing Pokémon, evolving them, and trading with other Trainers to obtain individuals from all Pokémon species.\n[…]\nThese designs included scrapped pre-evolutions for Pokémon from the first generation, such as Paras, Meowth, and Doduo, and scrapped evolutions for Farfetch'd, Qwilfish, Pinsir, Weepinbell and Ditto. Some scrapped designs are believed to have later been reused for future games such as Tangrowth, Sharpedo, Leafeon and Lickilicky; however this has not been officially confirmed.\n[…]\nDue to its cute design, many Pokémon fans were disappointed about the Kotora line being scrapped and hoped for its return in a future Pokémon game.\n[…]\nKayleigh Partleton, in an article for Pocket Tactics, found several of the designs from the generation, including Furret, Scizor, Wobbuffet, Miltank, Snubbull, Entei, and Togepi, as highly favorable and well-crafted. Hayes Madsen, in a retrospective for Pokémon Gold and Silver, regarded the games' designs as among the most creative, citing Smeargle, Hitmontop, Wooper, and Unown as examples of designs that did not feel \"formulaic\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_II",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir detalha os 100 Pokémon da segunda geração na ordem em que aparecem no índice da \"Pokédex\" do jogo. Formas alternativas introduzidas em jogos subsequentes da série, como Mega Evoluções e variantes regionais, estão incluídas nas páginas da geração em que a forma específica foi introduzida.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, que ocorre por diversos meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nAo contrário da geração anterior, a segunda geração definiu mais claramente a aparência do design de uma espécie Pokémon, com muitos Pokémon da segunda geração tendo seus designs enraizados em alguma forma de origem do mundo real, como plantas, animais e inspirações mitológicas. Os designs da geração adotaram uma abordagem mais \"rural\", em contraste com a geração anterior, onde Pokémon como Porygon e Muk ilustravam influências mais \"urbanas\".\n[…]\nEsses designs incluíam pré-evoluções descartadas para Pokémon da primeira geração, como Paras, Meowth e Doduo, e evoluções descartadas para Farfetch'd, Qwilfish, Pinsir, Weepinbell e Ditto. Acredita-se que alguns designs descartados foram posteriormente reutilizados em jogos futuros, como Tangrowth, Sharpedo, Leafeon e Lickilicky; no entanto, isso não foi oficialmente confirmado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Jynx",
      "descricao": "Pokémon humanoide dos tipos Gelo e Psíquico da primeira geração, evolução de Smoochum."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Lovely Kiss, o beijo exclusivo da linha evolutiva de Smoochum e Jynx, tem que efeito sobre o alvo?",
    "resposta": "Faz o alvo dormir",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lovely_Kiss_(move)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lovely_Kiss_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan.\n[…]\nThe following list details the 151 Pokémon of generation I in order of their National Pokédex number. The first Pokémon, Bulbasaur, is number 0001 and the last, Mew, is number 0151. Alternate forms that result in type changes are included for convenience. Mega evolutions and regional forms are included on the pages for the generation in which they were introduced. MissingNo., a glitch, is also on this list.\n[…]\nWhile some Pokémon have been attributed to certain developers over the years, such as Atsuko Nishida for Pikachu and Motofumi Fujiwara for Eevee and its evolutions, Game Freak has avoided attributing many Pokémon to particular individuals to keep a sense of all the developers being involved in their creation.\n[…]\nThe majority of Pokémon in generation I had relatively simple designs and were similar to real-life creatures including Pidgey (a pigeon), Krabby (a crab), Rattata (a rat), and Ekans (a snake). Many Pokémon in the original games served as the base for repeating concepts later in the series. Some Pokémon, such as Squirtle, Bulbasaur and Charmander were designed based on their final evolutions and working backwards.\n[…]\nDuring development they ran into issues with digital cartridge space, and many Pokémon were removed. Specifically, several Pokémon that had a three-stage evolution line were instead changed to evolve only once, resulting in a planned final evolution for Pikachu called \"Gorochu\" being removed from the final game."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nDurante o desenvolvimento, surgiram problemas com o espaço nos cartuchos digitais, e muitos Pokémon foram removidos. Especificamente, vários Pokémon que possuíam uma linha evolutiva de três estágios foram alterados para evoluir apenas uma vez, resultando na remoção da evolução final planejada para Pikachu, chamada \"Gorochu\", do jogo final.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Octillery",
      "descricao": "Pokémon polvo do tipo Água da segunda geração, que evolui do peixe Remoraid."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Octillery, o polvo que evolui de um peixe chamado Remoraid, tem o golpe exclusivo Octazooka. O que ele dispara no rosto do alvo?",
    "resposta": "Tinta",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Octazooka_(move)",
      "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Octazooka_(move)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The second generation (generation II) of the Pokémon franchise features 100 fictional species of creatures introduced to the core video game series in the Game Boy Color games Pokémon Gold and Silver. The generation was unveiled at the beginning of the Nintendo Space World '97 event. Gold and Silver were first released on November 21, 1999, in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_II",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, que ocorre por diversos meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nAlguns dos novos Pokémon introduzidos em Gold e Silver são pré-evoluções de Pokémon da primeira geração, como Pichu e Igglybuff. Chamados de \"Baby Pokémon\", eles geralmente só podem ser obtidos através do cruzamento de suas formas evoluídas. A geração também introduziu uma nova variação de Pokémon chamada Shiny Pokémon, que são versões raras de Pokémon com paletas de cores alternativas em relação à versão padrão da espécie.\n[…]\nMuitos designs totalmente únicos, sem associação com outras espécies, também foram descobertos, como uma foca flamejante, uma boneca empalada com um prego que evolui para um ser semelhante a um panda, uma linha evolutiva de gato do tipo Noturno e um Pokémon concha (chamado Taaban) que apresenta semelhanças com conchas na cauda e na cabeça das espécies de Pokémon Slowbro e Slowking, respectivamente.\n[…]\nO inicial de Água era inicialmente Kurusu (Cruz em inglês), um Pokémon semelhante a uma foca que lembra o inicial da sétima geração, Popplio. Kurusu eventualmente evolui para Akua (Aqua em inglês) e Akueria (Aquaria em inglês).",
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
