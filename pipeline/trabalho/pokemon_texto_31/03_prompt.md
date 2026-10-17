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
      "nome": "Azelf",
      "descricao": "Pokémon lendário do tipo Psíquico da quarta geração, um dos três lendários dos lagos de Sinnoh, guardião do Lago Valor."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Cada um dos três lendários dos lagos de Sinnoh encarna uma qualidade da mente. Azelf é conhecido como o ser de quê?",
    "resposta": "Força de vontade",
    "distratores": [
      "Conhecimento",
      "Emoção",
      "Memória"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Azelf_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Lake_guardians",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Azelf_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lake_guardians",
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
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Trio da criação",
      "descricao": "Trio de pokémon lendários de Sinnoh formado por Dialga, Palkia e Giratina, ligados ao tempo, ao espaço e ao mundo paralelo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo a mitologia de Sinnoh, o que Dialga, senhor do tempo, Palkia, senhor do espaço, e Giratina têm em comum na sua origem?",
    "resposta": "Foram criados por Arceus",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Creation_trio",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Creation_trio",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fourth generation (generation IV) of the Pokémon franchise features 107 species of pokémon introduced to the core video game series in the 2006 Nintendo DS games Pokémon Diamond and Pearl. Some Pokémon in this generation were introduced in games and animated adaptations of the franchise before Diamond and Pearl, such as Bonsly, Mime Jr., and Munchlax, which were recurring characters in the Pok\n[…]\nThe following list details the 107 Pokémon of generation IV in order of their National Pokédex number. The first Pokémon, Turtwig, is number 387 and the last, Arceus, is number 493. Alternate forms that result in type changes are included for convenience. Mega Evolutions and regional forms are included on the pages for the generation in which they were introduced."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_IV",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 107 Pokémon da Geração IV na ordem numérica do Pokédex Nacional. O primeiro Pokémon, Turtwig, numerado de 387 e o último, Arceus, numerado de 493. Formulários alternativos que resultam em alterações de tipo são incluídos por conveniência. Formas alternativas que resultam em mudanças de tipo estão incluídas para facilitar a consulta. Mega Evoluções e formas regionais estão incluídas nas páginas da geração em que foram introduzidas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Lugia",
      "descricao": "Pokémon lendário dos tipos Psíquico e Voador da segunda geração, guardião dos mares, mascote de Pokémon Silver."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a Pokédex, por que o lendário Lugia passa o tempo quieto, escondido no fundo do mar?",
    "resposta": "Seus poderes são fortes demais",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lugia_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Lugia"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lugia_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lugia",
        "situacao": "ok",
        "texto": "The second generation (generation II) of the Pokémon franchise features 100 fictional species of creatures introduced to the core video game series in the Game Boy Color games Pokémon Gold and Silver. The generation was unveiled at the beginning of the Nintendo Space World '97 event. Gold and Silver were first released on November 21, 1999, in Japan.\n[…]\nCian Maher, writing for TheGamer, considered the generation's Pokédex to have the strongest selection of Pokémon, noting its particularly memorable designs. In a later article co-written with Dave Aubrey for USA Today, he elaborated on the opinion, stating Pokémon such as Tyranitar, Heracross, Scizor, Houndoom and Typhlosion were why the second generation had the best line-up of Pokémon out of any given Pokémon generation.\n[…]\nLowell Bell, in a ranking of each generation's Pokémon for Nintendo Life, stated that the second generation's Pokédex was the weakest out of all generations. He stated that while several designs, such as the final evolutions of the Starter Pokémon, Scizor, Espeon, and Umbreon were popular and well-designed, many of the generation's Pokémon, such as Ledian, Stantler, Pineco, and Sunflora, were forgettable, deeming a large majority of the generation \"disappointing\" as a result.\n[…]\nIn a 2016 poll held by The Pokémon Company, Umbreon, Tyranitar, and Lugia were voted to be among the top thirty most popular Pokémon among voters. A later poll determined the three aforementioned Pokémon, alongside Typhlosion, Scizor, and Ampharos, to be among the six most popular Pokémon of the generation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_II",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, que ocorre por diversos meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando Pokémon com outros Treinadores para obter indivíduos de todas as espécies. Em cada jogo Pokémon, o jogador começa escolhendo um entre três Pokémon para ser seu Pokémon inicial. Normalmente, as opções são Pokémon do tipo Planta, do tipo Fogo ou do tipo Água. Na segunda geração, o jogador pode escolher entre Chikorita, Cyndaquil e Totodile como seu inicial.\n[…]\nA segunda geração de Pokémon se passa principalmente na região de Johto, que é baseada na região real de Kansai, no Japão. A segunda geração de Pokémon, diferentemente das gerações subsequentes da série, foi concebida principalmente como uma \"sequência\" da geração anterior, que se concentrava nos jogos Pokémon Red e Pokémon Blue. Isso resultou em muitas espécies da segunda geração relacionadas a espécies anteriores ou na retomada de designs descartados de Red e Blue.\n[…]\nMuitos Pokémon introduzidos na segunda geração também apresentavam diferenças de design em relação às suas encarnações finais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Ho-Oh",
      "descricao": "Pokémon lendário dos tipos Fogo e Voador da segunda geração, ave de penas de sete cores, mascote de Pokémon Gold."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo as lendas, o que ganha a pessoa que tem a sorte de ver Ho-Oh, a ave lendária de penas de sete cores?",
    "resposta": "Felicidade eterna",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pok%C3%A9mon)",
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
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nOs jogos também introduziram diversos novos tipos de Pokémon, incluindo os tipos elementais Noturno e Metálico, um subconjunto de Pokémon chamado \"Baby Pokémon\" e versões de Pokémon com cores diferentes, chamadas Shiny Pokémon.\n[…]\nO lançamento de Pokémon Gold e Silver para o Game Boy Color permitiu ainda mais liberdade na criação das cores das espécies em comparação com a geração anterior, que tendia a ter esquemas de cores mais simples do que os da segunda geração.\n[…]\nAlguns dos novos Pokémon introduzidos em Gold e Silver são pré-evoluções de Pokémon da primeira geração, como Pichu e Igglybuff. Chamados de \"Baby Pokémon\", eles geralmente só podem ser obtidos através do cruzamento de suas formas evoluídas. A geração também introduziu uma nova variação de Pokémon chamada Shiny Pokémon, que são versões raras de Pokémon com paletas de cores alternativas em relação à versão padrão da espécie.\n[…]\nMuitos Pokémon introduzidos na segunda geração também apresentavam diferenças de design em relação às suas encarnações finais.\n[…]\nUm dos designs mais populares descobertos na versão beta foi a linha evolutiva de Kotora, composta por Kotora, Raitora e uma terceira evolução sem nome. Essa linha recebeu o tipo Elétrico e foi baseada em tigres, com o nome de Kotora significando \"filhote de tigre\" e o de Raitora, \"tigre do trovão\". Descobriu-se que a linha evolutiva de Kotora havia sido descartada tanto na primeira quanto na segunda geração.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Suicune",
      "descricao": "Pokémon lendário do tipo Água da segunda geração, uma das três feras lendárias de Johto, destaque de Pokémon Crystal."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que fera lendária de Johto, tida como a reencarnação dos ventos do norte, é capaz de purificar na hora qualquer água suja?",
    "resposta": "Suicune",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Suicune_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Suicune_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The second generation (generation II) of the Pokémon franchise features 100 fictional species of creatures introduced to the core video game series in the Game Boy Color games Pokémon Gold and Silver. The generation was unveiled at the beginning of the Nintendo Space World '97 event. Gold and Silver were first released on November 21, 1999, in Japan.\n[…]\nThe games are set in the Johto region, which is based on the real-world Kansai region of Japan. Due to the games acting as a sequel to the first generation of the franchise, the Pokémon designs of the second generation share a strong association with those from the first. Some Pokémon in this generation were introduced in animated adaptations of the franchise before Gold and Silver were released.\n[…]\nThe second generation of Pokémon is set primarily in the region of Johto, which is based on the real-world region of Kansai in Japan. The second generation of Pokémon, unlike other subsequent generations in the series, was primarily designed as a \"sequel\" to the prior generation, which was focused around the games Pokémon Red and Blue. This resulted in many second-generation species being related to earlier ones, or reviving designs scrapped from Red and Blue."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_II",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA segunda geração de Pokémon se passa principalmente na região de Johto, que é baseada na região real de Kansai, no Japão. A segunda geração de Pokémon, diferentemente das gerações subsequentes da série, foi concebida principalmente como uma \"sequência\" da geração anterior, que se concentrava nos jogos Pokémon Red e Pokémon Blue. Isso resultou em muitas espécies da segunda geração relacionadas a espécies anteriores ou na retomada de designs descartados de Red e Blue.\n[…]\nUma grande mudança em relação à demo foram os iniciais. Além de Chikorita, os iniciais de Fogo e Água eram espécies diferentes, em vez das linhas evolutivas de Cyndaquil e Totodile escolhidas no jogo final. O inicial de Fogo era inicialmente Honōguma (traduzido como Flambear na versão em inglês), um Pokémon semelhante a um urso que lembra um pouco Pikachu. Honōguma eventualmente evoluiria para Borubeaa (Volbear em inglês) e Dainabea (Dynabear em inglês).\n[…]\nO inicial de Água era inicialmente Kurusu (Cruz em inglês), um Pokémon semelhante a uma foca que lembra o inicial da sétima geração, Popplio. Kurusu eventualmente evolui para Akua (Aqua em inglês) e Akueria (Aquaria em inglês).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Suicune",
      "descricao": "Pokémon lendário do tipo Água da segunda geração, uma das três feras lendárias de Johto, destaque de Pokémon Crystal."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Crystal, que místico de capa, amigo do líder Morty, passa anos perseguindo Suicune e desafia o jogador por causa dele?",
    "resposta": "Eusine",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Eusine",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Crystal"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Eusine",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Crystal",
        "situacao": "ok",
        "texto": "Pokémon Crystal Version is a role-playing video game developed by Game Freak and published by Nintendo for the Game Boy Color, released in Japan in December 2000 and internationally throughout 2001. Serving as an enhanced edition of the 1999 titles Pokémon Gold and Silver, it is the final entry in the second generation of the Pokémon game series.\n[…]\nThe setting and story of Crystal remains largely the same as in Gold and Silver, with the player seeking to raise and battle Pokémon to defeat the Johto Gym Leaders and Elite Four to be the Johto League Champion. However, several encounters and additional characters are introduced to the overarching narrative. Crystal features a greater role for Legendary Pokémon, with the player awakening Suicune, Entei, and Raikou, and encountering them at various stages of the game.\n[…]\nThe plotline features a new character, Eusine, who has been searching for Suicune, providing the player with a more direct and narrative pathway to battling and capturing Suicune and the remainder of the game's Legendary Pokémon. Crystal also includes minor changes to how the player encounters the Gym Leader Clair, and additions to the role of the Pokémon Unown in the Ruins of Alph, with players able to complete additional puzzles to receive rewards and messages from the Unown.\n[…]\nCrystal has received retrospective praise for the inclusive impact of a player character with a selectable gender.\n[…]\nThe stream experienced criticism due to the involvement of players attempting to imitate high-stakes moments in the first stream, such as the release of Pokémon using the PC, as well as the temporary introduction of features that were abandoned, including changes to the \"Democracy\" and \"Anarchy\" modes. The stream of Crystal was completed in 13 days and 2 hours."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Crystal",
        "situacao": "ok",
        "texto": "Pokémon Crystal Version (ポケットモンスター クリスタル, Poketto Monsutā Kurisutaru; tradução: Monstros de Bolso Crystal, Cristal quando traduzida da grafia inglesa para a portuguesa, Cristal em japonês é 結晶 Kesshō) é um jogo eletrônico de RPG de 2000, desenvolvido pela Game Freak e publicado pela Nintendo para o Game Boy Color. É a versão aprimorada de Pokémon Gold e Silver e é o último jogo da segunda geração \n[…]\nPokémon Crystal foi lançado mundialmente no Virtual Console do Nintendo 3DS em 26 de janeiro de 2018.\n[…]\nEste recurso estava ausente no Pokémon Ruby e Sapphire e no Pokémon FireRed e LeafGreen, antes de reaparecer no Pokémon Emerald e todos os jogos subsequentes. Além disso, alguns subenredos foram adicionados, um envolvendo o lendário Pokémon Suicune, apresentado na capa do jogo, e o outro envolvendo o Unown. A adição mais significativa do jogo é a Battle Tower, um novo edifício que permite aos jogadores participarem de lutas semelhantes a Pokémon Stadium.\n[…]\nO cenário e a história permanecem basicamente os mesmos de Pokémon Gold e Silver. A lendária fera Suicune agora tem um papel mais proeminente no enredo do jogo do que em Pokémon Gold e Silver. Despertar o lendário trio de bestas (Suicune, Entei e Raikou) agora é necessário para desafiar Ecruteak Gym Leader Morty. Suicune é encontrado em vários locais em Johto. Após receber o Clear Bell (Rainbow Wing no Pokémon Gold ou Silver Wing no Pokémon Silver), Suicune aparecerá estacionário na Tin Tower.\n[…]\nMythicalman Eusine é apresentado; seu objetivo de vida é procurar Suicune e ele vai lutar contra o jogador em Cianwood City para ganhar o respeito de Suicune.\n[…]\nUm lançamento pirata do Pokémon Crystal chamado Pokémon Vietnamese Crystal, frequentemente abreviado para Vietnamese Crystal, é famoso por seu texto em inglês mal traduzido e por esquisitices de jogo, como palavrões e chamar Pokémon de \"elfos\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Mew",
      "descricao": "Pokémon mítico do tipo Psíquico da primeira geração, de cujo material genético nasceu Mewtwo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Segundo os diários achados na mansão em ruínas da ilha Cinnabar, Mew foi descoberto nas selvas de qual país da América do Sul?",
    "resposta": "Guiana",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mansion",
      "https://en.wikipedia.org/wiki/Mew_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mansion",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mew_(Pok%C3%A9mon)",
        "situacao": "ok",
        "texto": "Mew ( ; Japanese: ミュウ, Hepburn: Myū) is one of the many fictional species in the Pokémon franchise. It is a small, pink, Psychic-type Mythical Pokémon, which is an incredibly rare and powerful Pokémon typically available only via special events. It was added to the Pokémon Red and Blue games by Game Freak programmer Shigeki Morimoto, at the tail end of the games' development.\n[…]\nMew is a species of fictional creatures called Pokémon created for the Pokémon media franchise. Developed by Game Freak and published by Nintendo, the Japanese franchise began in 1996 with the video games Pokémon Red and Green for the Game Boy, which were later released in North America as Pokémon Red and Blue in 1998. In these games and their sequels, the player assumes the role of a Trainer whose goal is to capture and use the creatures' special abilities to combat other Pokémon.\n[…]\nIn Red, Blue, Yellow, and their remakes, the player can find journal entries in the Pokémon Mansion on Cinnabar Island stating that Mew was discovered deep in the jungles of Guyana, South America, on July 5 of an unspecified year, named on July 10, and that it \"gave birth\" to Mewtwo on February 6. In the video games, it is possible for Mew to learn any move that can be taught to it via several in-game mechanics, such as tutoring and \"Technical Machine\" items.\n[…]\nMew is mentioned in a journal entry in Cinnabar Mansion, referencing an encounter with it in Guyana. At the time of its introduction, Mew could only be obtained in the Pokémon video games via Nintendo promotional event distributions. This period of event exclusivity ended with the release of My Pokémon Ranch, where Mew was accessible through normal game play without an event distribution. Mew has subsequently been made available in many games in the series."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mew_%28Pok%C3%A9mon%29",
        "situacao": "ok",
        "texto": "Mew (ミュウ, Myū) é uma espécie de Pokémon, pertencente à franquia de mídia Pokémon da Nintendo. Ele apareceu pela primeira vez incluído na versão japonesa de Pokémon Red e Blue, como um personagem secreto. Como tal, ele foi o tema de muitos mitos e rumores, que contribuíram para o sucesso da franquia Pokémon. Então ele foi adicionado em versões estrangeiras de Pokémon Red e Blue, ele também foi o pr\n[…]\nE ele é um dos cinco Pokémons Lendários da primeira geração, junto com Articuno, Zapdos, Moltres e Mewtwo. O número de Mew na Pokédex Nacional é o 151, o último da primeira geração. Pode-se descobrir em Pokémon FireRed e LeafGreen que Mew foi descoberto nas selvas profundas de Guiana em 5 de julho (o ano não é especificado), sendo nomeado em 10 de julho e ele \"deu à luz\" Mewtwo em 6 de fevereiro. O nome Mew foi baseado na onomatopeia de um miado de gato, meow.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Mewtwo",
      "descricao": "Pokémon lendário do tipo Psíquico da primeira geração, criado pela ciência a partir do material genético de Mew."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Mewtwo tem duas megaevoluções. A Mega Mewtwo Y continua só do tipo Psíquico. Que segundo tipo ganha a Mega Mewtwo X?",
    "resposta": "Lutador",
    "distratores": [
      "Sombrio",
      "Fantasma",
      "Dragão"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Mewtwo_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Mewtwo"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mewtwo_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mewtwo",
        "situacao": "ok",
        "texto": "Mewtwo ( ; Japanese: ミュウツー, Hepburn: Myūtsū) is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise. It was first introduced in the video games Pokémon Red and Blue, and later appeared in subsequent sequels and spin-off titles. In the video games, the player can fight and capture Mewtwo in order to subsequently pit it against other Pokémon.\n[…]\nA new form of Mewtwo, Shadow Mewtwo, appears as a boss character in Pokkén Tournament and has a special attack that involves it Mega Evolving into Mega Mewtwo X. Shadow Mewtwo can also be unlocked as a playable character. In addition, its normal form appears as a playable character.\n[…]\nDuring the first part of the Villain Arc story with Team Rocket, \"Looming Shadow of Kanto\", the player could obtain Giovanni Legendary Spirit to raise the rarity of Giovanni to 6-Star EX if the player also used all 20 Power-Ups for Giovanni, which gives it a power boost and makes his Sync Move target all opponents instead of one, and then in the second part of the arc, \"Spreading Shadow\", the player could obtain Mewtwo Crystals to allow Giovanni's Mewtwo to evolve into Mega Mewtwo Y, which makes it even stronger and replaces the move Confusion with Psystrike until the end of the battle.\n[…]\nUnlike the original Mewtwo, this one is able to Mega Evolve into Mega Mewtwo Y; due to Mega Evolution not being fully introduced at the time, it is referred to in the film as Mewtwo's \"Awakened Form\" (覚醒した姿, Kakusei-shita Sugata).\n[…]\nA Mewtwo, which was created by Mr. Fuji, appears in the anime miniseries Pokémon Origins, which is generally based on the plot of the video games Pokémon FireRed and LeafGreen. As such, Red goes to Cerulean Cave, and uses the Mega Evolution mechanic introduced in Pokémon X and Y to Mega Evolve his Charizard for the fight with Mewtwo, whom Red captures.\n[…]\nMewtwo on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mewtwo",
        "situacao": "ok",
        "texto": "Mewtwo (ミュウツー, Myūtsū) é uma criatura oficial da franquia Pokémon, criada pela Nintendo e pela Game Freak. Criado por Ken Sugimori, apareceu pela primeira vez nos jogos de videogame Pokémon Red e Blue e suas seqüencias, e mais tarde apareceu em vários produtos, títulos de spin-off, assim como adaptações de animação da franquia.\n[…]\nUma forma alternativa sua, Shadow Mewtwo, aparece em Pokeén Tournament, cujo ataque especial envolve megaevoluir para Mega Mewtwo X. Sua versão original também é jogável. No jogo de realidade aumentada Pokémon Go,  uma versão de Mewtwo usando a armadura vista em Pokémon: O Primeiro Filme foi disponível em Raids Tier 5 em julho de 2019. Também é jogável em Pokémon Masters como parceiro de Giovanni, que foi introduzido no primeiro Evento Lendário, “Lurking Shadow”.\n[…]\nJá na segunda parte do arco, “Spreading Shadow”, o jogador pode obter cristais Mewtwo, capazes de fazer o Mewtwo de Giovanni evoluir para Mega Mewtwo Y, que o torna ainda mais forte e substitui o ataque Confusion com Psystrike até o final da batalha. Foi disponibilizado novamente entre 16 de setembro e 15 de outubro de 2021.\n[…]\nEm maio de 2001, a Viz lançou um segundo livro infantil, Mewtwo's Watching You!, que retrata um Mewtwo tímido assiste com interesse outros Pokémons brincando.\n[…]\nDale Bishir da IBN classificou Mewtwo como o Pokémon que mais impactou a franquia, com sua proiminência sendo visto em todas as partes, como suas duas mega-evolução, seu protagonismo no filme Detective Pikachu, como sendo personagem jogável no Super Smash Bros. e por protagonizar em dois filmes de animação. Steven Bogos do The Scapist classificou Mewtwo como sendo seu Pokémon predileto, sendo sem dúvidas o mais forte dos jogos originais.\n[…]\nMewtwo no Bulbapedia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Registeel",
      "descricao": "Pokémon lendário do tipo Aço da terceira geração, um dos três golens lendários de Hoenn, ao lado de Regirock e Regice."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Segundo a lenda, Regigigas moldou Regirock com argila e Regice com gelo. De que matéria ele teria feito Registeel?",
    "resposta": "Magma",
    "distratores": [
      "Areia",
      "Cristal",
      "Carvão"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Legendary_titans",
      "https://bulbapedia.bulbagarden.net/wiki/Regigigas_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Legendary_titans",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Regigigas_(Pok%C3%A9mon)",
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
    "indice": 10,
    "ancora": {
      "nome": "Regigigas",
      "descricao": "Pokémon lendário do tipo Normal da quarta geração, colosso que dorme no Templo de Snowpoint, em Sinnoh."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Uma lenda antiga conta que o colosso Regigigas, o mestre de Regirock, Regice e Registeel, arrastou algo gigantesco amarrado com cordas. O quê?",
    "resposta": "Os continentes",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Regigigas_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Regigigas_(Pok%C3%A9mon)",
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
    "indice": 11,
    "ancora": {
      "nome": "Victini",
      "descricao": "Pokémon mítico dos tipos Psíquico e Fogo da quinta geração, de orelhas em forma de V, conhecido como o pokémon da vitória."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Black e White, que pequeno mítico de orelhas em forma de V vive escondido no porão do farol da ilha Liberty Garden?",
    "resposta": "Victini",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Liberty_Garden",
      "https://bulbapedia.bulbagarden.net/wiki/Victini_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_V_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Liberty_Garden",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Victini_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_V_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fifth generation (Generation V) of the Pokémon franchise features 156 fictional species of creatures introduced to the core video game series in the 2010 Nintendo DS games Pokémon Black and White. Some Pokémon in this generation were introduced in animated adaptations of the franchise before Black and White.\n[…]\nThe following list details the 156 Pokémon of Generation V in order of their National Pokédex number. The first Pokémon, Victini, is #494 and the last, Genesect, is #649. In total, this generation added the most unique Pokémon of any generation. Alternate forms that result in type changes are included for convenience. Mega evolutions and regional forms are included on the pages for the generation in which they were introduced."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_V",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA quinta geração (Geração V) da franquia Pokémon apresentou 156 criaturas fictícias introduzidas em 2010 no jogo de Nintendo DS, Pokémon Black e White. Alguns Pokémon desta geração foram introduzidos em adaptações animadas da franquia, antes de Black e White.\n[…]\nA lista a seguir descreve 156 Pokémon da Geração V na ordem numérica do Pokédex Nacional. O primeiro Pokémon, Victini, numerado de 494 e o último, Genesect, numerado de 649. Formulários alternativos que resultam em alterações de tipo são incluídos por conveniência. Mega Evolução e formas regionais estão incluídas nas páginas da geração em que foram introduzidas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Latios",
      "descricao": "Pokémon lendário dos tipos Dragão e Psíquico da terceira geração, irmão de Latias, de corpo azul e branco."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em Pokémon Ruby, depois de vencer a Liga, que lendário de tipos Dragão e Psíquico passa a vagar pelas rotas de Hoenn?",
    "resposta": "Latios",
    "distratores": [
      "Latias",
      "Rayquaza",
      "Jirachi"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Latios_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_and_Sapphire"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Latios_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_and_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Ruby Version and Pokémon Sapphire Version are 2002 role-playing video games developed by Game Freak for the Game Boy Advance. Although the games were published by Nintendo internationally in 2003, The Pokémon Company published them in Japan in late 2002, making them the first mainline games to have this distinction, as well as the second games to have it overall, after Pokémon Card GB2: Gr\n[…]\nRuby and Sapphire have limited e-Reader support. Nintendo released Battle-e Cards, a set of e-Reader cards that contained trainer battles in which the player could see previously hidden Pokémon. A special e-Reader card called the Eon Ticket was also released; obtained through the Mystery Gift function, the Ticket allows the player to reach a place called Southern Island. There, the player faces either Latios or Latias, depending on which version of the game is used.\n[…]\nThe games' two main goals are defeating the eight Gym Leaders, proving oneself worthy of challenging the Elite Four and Hoenn League Champion to become the new Hoenn League Champion and completing the Pokédex by capturing, evolving, and trading to obtain all 202 Pokémon available between Ruby and Sapphire. It is possible to obtain all 386 Pokémon, but this requires trading with Pokémon FireRed and LeafGreen or Pokémon XD: Gale of Darkness and Pokémon Colosseum.\n[…]\nThe most prominent subplot involves Team Aqua and Team Magma, crime syndicates who want to use Pokémon to alter the climate of Hoenn: in Ruby, the villains, Team Magma, want to use the legendary Pokémon Groudon to dry up the oceans of Hoenn and increase the region's landmass; in Sapphire, Team Aqua are the villains and they try to use Groudon's counterpart, Kyogre, to flood the landmasses of Hoenn and increase the region's ocean."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_e_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Ruby e Pokémon Sapphire (ポケットモンスター ルビー&サファイア, Poketto Monsutā Rubī & Safaia) são dois jogos que correspondem à terceira geração da série Pokémon. Desenvolvidos pela Game Freak e publicados pela Nintendo para Game Boy Advance, foram lançados no Japão em 21 de Novembro de 2002 e lançado no resto do mundo no ano seguinte, em 2003. Pokémon Emerald, uma versão especial do jogo, foi lançada dois\n[…]\nUm remake dos dois jogos, intitulado Omega Ruby  e Alpha Sapphire, foi lançado para Nintendo 3DS em novembro de 2014.\n[…]\nRuby  e Sapphire  têm um suporte limitado e-Reader. A Nintendo lançou o Battle-e Cards, um conjuntos de cartas de e-Reader que continham dados dos jogadores. Uma carta especial de e-Reader chamada Eon Ticket também foi lançada; obtida através da função Mystery Gift, o Ticket permitia que o jogador tivesse acesso a Southern Island. Lá, o jogador enfrentaria Latios ou Latias, dependendo da versão do jogo.\n[…]\nPokémon Ruby  e Sapphire se passa na região de Hoenn, localizada a uma distância desconhecida das regiões Kanto e Johto, que são destaques dos jogos anteriores. O design de Hoenn foi baseado na ilha e região japonesa de Kyushu; no entanto, Hoenn é virada em 90º quando comparada a  Kyushu, pois Junichi Masuda sentiu que isso iria fornecer uma melhor jogabilidade.\n[…]\nEm Ruby, os vilões, Team Magma, querem o Pokémon lendário Groudon para secar os oceanos de Hoenn e aumentar a massa de terra da região; em Sapphire, o Team Aqua querem Kyogre para aumentar os níveis de água da região. O pai do jogador também o apresenta a Wally, um menino doente que ensina o protagonista a capturar um Pokémon. Wally eventualmente supera sua doença e se torna um treinador Pokémon de sucesso, desafiando o jogador antes de enfrentar a Elite Four.\n[…]\nPokémon Ruby  e Sapphire tiveram uma aprovação de 84% dos que votaram no site Game Rankings.\n[…]\nDetalhes de Pokémon Ruby  e Sapphire no Pokemon-Games.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Celebi",
      "descricao": "Pokémon mítico dos tipos Psíquico e Planta da segunda geração, que viaja no tempo e protege as florestas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a Pokédex de Ruby e Sapphire, o que se diz que nos espera sempre que Celebi, o viajante do tempo, aparece?",
    "resposta": "Um futuro brilhante",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Celebi_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Celebi_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The second generation (generation II) of the Pokémon franchise features 100 fictional species of creatures introduced to the core video game series in the Game Boy Color games Pokémon Gold and Silver. The generation was unveiled at the beginning of the Nintendo Space World '97 event. Gold and Silver were first released on November 21, 1999, in Japan.\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as battling or exposure to specific items. Each Pokémon has one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing Pokémon, evolving them, and trading with other Trainers to obtain individuals from all Pokémon species.\n[…]\nCian Maher, writing for TheGamer, considered the generation's Pokédex to have the strongest selection of Pokémon, noting its particularly memorable designs. In a later article co-written with Dave Aubrey for USA Today, he elaborated on the opinion, stating Pokémon such as Tyranitar, Heracross, Scizor, Houndoom and Typhlosion were why the second generation had the best line-up of Pokémon out of any given Pokémon generation.\n[…]\nLowell Bell, in a ranking of each generation's Pokémon for Nintendo Life, stated that the second generation's Pokédex was the weakest out of all generations. He stated that while several designs, such as the final evolutions of the Starter Pokémon, Scizor, Espeon, and Umbreon were popular and well-designed, many of the generation's Pokémon, such as Ledian, Stantler, Pineco, and Sunflora, were forgettable, deeming a large majority of the generation \"disappointing\" as a result."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_II",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir detalha os 100 Pokémon da segunda geração na ordem em que aparecem no índice da \"Pokédex\" do jogo. Formas alternativas introduzidas em jogos subsequentes da série, como Mega Evoluções e variantes regionais, estão incluídas nas páginas da geração em que a forma específica foi introduzida.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando Pokémon com outros Treinadores para obter indivíduos de todas as espécies. Em cada jogo Pokémon, o jogador começa escolhendo um entre três Pokémon para ser seu Pokémon inicial. Normalmente, as opções são Pokémon do tipo Planta, do tipo Fogo ou do tipo Água. Na segunda geração, o jogador pode escolher entre Chikorita, Cyndaquil e Totodile como seu inicial.\n[…]\nEsses designs incluíam pré-evoluções descartadas para Pokémon da primeira geração, como Paras, Meowth e Doduo, e evoluções descartadas para Farfetch'd, Qwilfish, Pinsir, Weepinbell e Ditto. Acredita-se que alguns designs descartados foram posteriormente reutilizados em jogos futuros, como Tangrowth, Sharpedo, Leafeon e Lickilicky; no entanto, isso não foi oficialmente confirmado.\n[…]\nMuitos Pokémon introduzidos na segunda geração também apresentavam diferenças de design em relação às suas encarnações finais.\n[…]\nDevido ao seu design fofo, muitos fãs de Pokémon ficaram desapontados com o descarte da linha evolutiva de Kotora e esperavam seu retorno em um futuro jogo Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Rayquaza",
      "descricao": "Pokémon lendário dos tipos Dragão e Voador da terceira geração, senhor do céu, mascote de Pokémon Emerald."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que dragão lendário de Hoenn, segundo a Pokédex, viveu centenas de milhões de anos na camada de ozônio, sem nunca descer ao chão?",
    "resposta": "Rayquaza",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The third generation (generation III) of the Pokémon franchise features 386 fictional species of creatures and 135 Pokémon introduced to the core video game series in the 2002 Game Boy Advance games Pokémon Ruby and Sapphire, and later in the 2004 game Pokémon Emerald. These games were accompanied by the television series Pokémon Advanced, which aired from November 21, 2002, until August 28, 2003,\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as exposure to specific items. Each Pokémon have one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading with other Trainers to obtain individuals from all Pokémon species.\n[…]\nContrastingly, some designs, including Breloom, Aggron, and the aforementioned Castform were praised for their coolness, with the large variety of unique legendary Pokémon also helping the third generation feel fresh and new. While Ruby and Sapphire were recognized for introducing less memorable designs than their predecessors, designs like Milotic, Salamence, Metagross, Rayquaza, and Blaziken made the overall generation a satisfying supplement to the existing Pokédex.\n[…]\nThe third generation has had its share of well-loved designs. Eighteen years after the release of Ruby and Sapphire, Rayquaza and Gardevoir finished eighth and ninth in 2020's Pokémon of the Year vote, with Flygon, Sceptile, and Blaziken also among the top 30. Rayquaza also finished eighth in a 2016 Japanese poll, with Jirachi and Kyogre among the top 25. A popularity vote on the Pokémon subreddit featured Blaziken at 5th, joined in the top 25 by Gardevoir, Absol, Flygon, and Mudkip."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_III",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 135 Pokémon da Geração III na ordem numérica do Pokédex Nacional. O primeiro Pokémon, Treecko, numerado de 252 e o último, Deoxys, numerado de 386.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nEm contraste, alguns designs, incluindo Breloom, Aggron e o já mencionado Castform, foram elogiados por seu estilo, com a grande variedade de Pokémon lendários únicos também ajudando a terceira geração a parecer nova e original. Embora Ruby e Sapphire tenham sido reconhecidos por introduzir designs menos memoráveis ​​do que seus antecessores, designs como Milotic, Salamence, Metagross, Rayquaza e Blaziken fizeram da geração como um todo um complemento satisfatório à Pokédex existente.\n[…]\nA terceira geração teve sua parcela de designs populares e duradouros. Dezoito anos após o lançamento de Ruby e Sapphire, Rayquaza e Gardevoir terminaram em oitavo e nono lugar na votação de Pokémon do Ano de 2020, com Flygon, Sceptile e Blaziken também entre os 30 melhores. Rayquaza também terminou em oitavo lugar em uma pesquisa japonesa de 2016, com Jirachi e Kyogre entre os 25 melhores.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Zekrom",
      "descricao": "Pokémon lendário dos tipos Dragão e Elétrico da quinta geração, dragão negro mascote de Pokémon White."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Na lenda de Unova, o dragão negro Zekrom só se une ao herói que persegue qual valor?",
    "resposta": "Ideais",
    "distratores": [
      "Verdade",
      "Justiça",
      "Liberdade"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Zekrom_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_V_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Zekrom_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_V_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fifth generation (Generation V) of the Pokémon franchise features 156 fictional species of creatures introduced to the core video game series in the 2010 Nintendo DS games Pokémon Black and White. Some Pokémon in this generation were introduced in animated adaptations of the franchise before Black and White."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_V",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Landorus",
      "descricao": "Pokémon lendário dos tipos Terrestre e Voador da quinta geração, uma das forças da natureza de Unova, ao lado de Tornadus e Thundurus."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que lendário de Unova, chamado de guardião dos campos, faz as colheitas brotarem fartas por onde passa e teria contido as brigas de Tornadus e Thundurus?",
    "resposta": "Landorus",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Landorus_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Forces_of_Nature",
      "https://en.wikipedia.org/wiki/List_of_generation_V_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Landorus_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Forces_of_Nature",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_V_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fifth generation (Generation V) of the Pokémon franchise features 156 fictional species of creatures introduced to the core video game series in the 2010 Nintendo DS games Pokémon Black and White. Some Pokémon in this generation were introduced in animated adaptations of the franchise before Black and White."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_V",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Enamorus",
      "descricao": "Pokémon lendário dos tipos Fada e Voador, introduzido em Pokémon Legends: Arceus, a quarta das forças da natureza."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Legends: Arceus, o trio das forças da natureza ganhou uma quarta integrante, de tipos Fada e Voador, que traz a primavera. Quem é ela?",
    "resposta": "Enamorus",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Enamorus_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Enamorus_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The eighth generation (Generation VIII) of the Pokémon franchise features 96 titular species of creatures introduced to the core video game series, including 89 in the 2019 Nintendo Switch games Pokémon Sword and Shield as of version 1.3.0 and 7 further species introduced in the 2022 Nintendo Switch game Pokémon Legends: Arceus. The temporary Dynamax and Gigantamax transformations were also introd\n[…]\nThe legendary Pokémon Zacian and Zamazenta resemble real-world wolves, drawing inspiration from wolves that frequently appear in British mythology. Shigeru Ohmori, the director for Sword and Shield, stated that the design team keeps a Pokémon's habitat in mind when coming up with its design so as to make the Pokémon believable.\n[…]\nPokémon Legends: Arceus introduces the Hisui Region, based on the real-world Japanese island of Hokkaido. The Hisui Region is a reimagining of the Generation IV games' Sinnoh Region set in the past prior to the events of those games.\n[…]\nFor the first time, many new Pokémon and regional forms were added to the generation through game patches rather than through the release of a new game. Acquiring these Pokémon requires purchasing an add-on downloadable content pass separate from the base game or utilizing the in-game trade feature. Further patches added other new species, including legendary and mythical Pokémon Kubfu, Urshifu, and Zarude in June 2020 and Regieleki, Regidrago, Glastrier, Spectrier, and Calyrex in October 2020."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VIII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nA oitava geração (Geração VIII) da franquia Pokémon apresentou 96 criaturas fictícias, incluindo 89 introduzidos nos jogos da Nintendo Switch de 2019, Pokémon Sword e Shield, a partir da versão 1.3.0 e 7 outras criaturas introduzidos no jogo da Nintendo Switch de 2022, Pokémon Legends: Arceus. Os Pokémon iniciais de Pokémon Sword e Shield foram os primeiros da geração a serem revelados em 27 de fevereiro de 2019.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nPokémon Legends: Arceus apresenta a região de Hisui, baseada na ilha japonesa de Hokkaido no mundo real. A região de Hisui é uma releitura da região de Sinnoh dos jogos da Geração IV, ambientada no passado antes dos eventos desses jogos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Espadachins da Justiça",
      "descricao": "Grupo de pokémon lendários de Unova formado por Cobalion, Terrakion e Virizion, ao qual se junta o mítico Keldeo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a Pokédex, Cobalion e seus aliados, os Espadachins da Justiça, puniram certos humanos no passado. O que esses humanos tinham feito?",
    "resposta": "Machucaram pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Cobalion_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Swords_of_Justice",
      "https://en.wikipedia.org/wiki/List_of_generation_V_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cobalion_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Swords_of_Justice",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_V_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fifth generation (Generation V) of the Pokémon franchise features 156 fictional species of creatures introduced to the core video game series in the 2010 Nintendo DS games Pokémon Black and White. Some Pokémon in this generation were introduced in animated adaptations of the franchise before Black and White.\n[…]\nThe following list details the 156 Pokémon of Generation V in order of their National Pokédex number. The first Pokémon, Victini, is #494 and the last, Genesect, is #649. In total, this generation added the most unique Pokémon of any generation. Alternate forms that result in type changes are included for convenience. Mega evolutions and regional forms are included on the pages for the generation in which they were introduced.\n[…]\nPokémon are a species of fictional creatures created for the Pokémon media franchise. Developed by Game Freak and published by Nintendo, the Japanese franchise began in 1996 with the video games Pokémon Red and Green for the Game Boy, which were later released in North America as Pokémon Red and Blue in 1998. In these games and their sequels, the player assumes the role of a Trainer whose goal is to capture and use the creatures' special abilities to combat other Pokémon.\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as exposure to specific items. Each Pokémon have one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading with other Trainers to obtain individuals from all Pokémon species."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_V",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 156 Pokémon da Geração V na ordem numérica do Pokédex Nacional. O primeiro Pokémon, Victini, numerado de 494 e o último, Genesect, numerado de 649. Formulários alternativos que resultam em alterações de tipo são incluídos por conveniência. Mega Evolução e formas regionais estão incluídas nas páginas da geração em que foram introduzidas.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Xerneas",
      "descricao": "Pokémon lendário do tipo Fada da sexta geração, um cervo de chifres coloridos, mascote de Pokémon X."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Segundo a Pokédex, o lendário Xerneas dormiu mil anos antes de despertar. Em que forma ele passou esse longo sono?",
    "resposta": "Uma árvore",
    "distratores": [
      "Um casulo",
      "Uma pedra",
      "Um cristal"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Xerneas_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Xerneas_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The sixth generation (Generation VI) of the Pokémon franchise features 72 fictional species of creatures introduced to the core video game series in the 2013 Nintendo 3DS games Pokémon X and Y. Some Pokémon in this generation were introduced in animated adaptations of the franchise before X and Y. This generation featured the series' largest graphical overhaul: a shift from two-dimensional sprites\n[…]\nThe following list details the 72 Pokémon of Generation VI in order of their National Pokédex number. The first Pokémon, Chespin, is number 650 and the last, Volcanion, is number 721. Alternate forms that result in type changes and Mega Evolutions are included for convenience.\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as exposure to specific items. Each Pokémon have one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading with other Trainers to obtain individuals from all Pokémon species.\n[…]\nthe legendary trio of Xerneas, Yveltal and Zygarde have their roots in Norse mythology). More focus than usual was placed on giving new Pokémon unique elements for this generation.\n[…]\nAt the request of Masuda, the shapes \"X\" and \"Y\" were used as the framework for the boxart legendary Pokémon: Xerneas and Yveltal. Normally, Sugimori designs the legendary Pokémon by himself; however, he required assistance from designer Atsuko Nishida to create Xerneas and Yveltal. Finalization of their designs took about 18 months, 3 times longer than normal. Manga artist Hitoshi Ariga was requested to assist in creating Pokémon for X and Y; Ariga ultimately designed ten species for the games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VI",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nTodos os Pokémon foram criados por uma equipe de aproximadamente 20 artistas, liderado por Ken Sugimori e Hironobu Yoshida. Pela primeira vez na franquia, as gerações de Pokémon Lendários—especificam Xerneas e Yveltal—não foram projetados apenas por Sugimori; ele pediu a ajuda de Atsuko Nishida para avançar seus projetos.\n[…]\nO trio lendário de Xerneas, Yveltal e Zygarde têm suas raízes na mitologia nórdica, por exemplo. Mais foco do que o habitual foi colocado em dar aos novos Pokémon elementos únicos para esta geração.\n[…]\nVários Pokémon de gerações anteriores, como Jigglypuff, Gardevoir e Marill, receberam retroativamente o novo tipo enquanto 13 novos Pokémon, mais notavelmente Sylveon, vestiu o tipo. Uma nova mecânica chamado Mega Evolução—uma forma temporária muda a forma para evolução normal—também foi adicionado para batalhas mais dinâmicas e surgiu dos conceitos de vínculos e evolução. Mega Evoluções de \"projetos refinados para um novo extremo\", segundo Yoshida, e exigiram um esforço considerável.\n[…]\nMasuda expressou que esse esforço se mostrou excepcionalmente difícil, pois os nomes devem parecer adequados à aparência física e não infringir nenhum direito. O pedido de Masuda, as formas \"X\" e \"Y\" foram usadas como estrutura para os Pokémon lendários da arte em caixas: Xerneas e Yveltal. Normalmente, Sugimori cria o Pokémon lendário sozinho; no entanto, ele precisou da assistência do designer Atsuko Nishida para criar Xerneas e Yveltal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Zygarde",
      "descricao": "Pokémon lendário dos tipos Dragão e Terrestre da sexta geração, guardião do ecossistema, com várias formas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Sun e Moon, o jogador junta pequenos pedaços de Zygarde espalhados por Alola para montar as formas do lendário. Como esses pedaços se chamam?",
    "resposta": "Células (Zygarde Cells)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Zygarde_Cell",
      "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Zygarde_Cell",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The sixth generation (Generation VI) of the Pokémon franchise features 72 fictional species of creatures introduced to the core video game series in the 2013 Nintendo 3DS games Pokémon X and Y. Some Pokémon in this generation were introduced in animated adaptations of the franchise before X and Y. This generation featured the series' largest graphical overhaul: a shift from two-dimensional sprites\n[…]\nthe legendary trio of Xerneas, Yveltal and Zygarde have their roots in Norse mythology). More focus than usual was placed on giving new Pokémon unique elements for this generation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VI",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nO trio lendário de Xerneas, Yveltal e Zygarde têm suas raízes na mitologia nórdica, por exemplo. Mais foco do que o habitual foi colocado em dar aos novos Pokémon elementos únicos para esta geração.\n[…]\nEles foram feitos temporariamente para manter o equilíbrio nas batalhas e somente são possíveis quando um Pokémon está segurando sua respectiva Mega Pedra para impedir que os jogadores lhes dêem um item de espera vantajoso diferente. O único Pokémon da Geração VI capaz de Mega Evolução é Diancie. Uma variante do Mega Evolução chamada \"Reversão Primitiva\" foi introduzida em Omega Ruby e Alpha Sapphire; esse mecânico é exclusivo do lendário Pokémon Groudon e Kyogre.\n[…]\nO título X e Y, representando o eixo x e eixo y—também refletindo diferentes formas de pensar—foram escolhidos no início do desenvolvimento. A simplicidade dos nomes também estava relacionada ao lançamento simultâneo mundial dos jogos. Além disso, os designers procuraram tornar os nomes dos Pokémon iguais em todos os países sempre que possível.\n[…]\nMasuda expressou que esse esforço se mostrou excepcionalmente difícil, pois os nomes devem parecer adequados à aparência física e não infringir nenhum direito. O pedido de Masuda, as formas \"X\" e \"Y\" foram usadas como estrutura para os Pokémon lendários da arte em caixas: Xerneas e Yveltal. Normalmente, Sugimori cria o Pokémon lendário sozinho; no entanto, ele precisou da assistência do designer Atsuko Nishida para criar Xerneas e Yveltal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Tapu Fini",
      "descricao": "Pokémon lendário dos tipos Água e Fada da sétima geração, um dos quatro guardiões das ilhas de Alola."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Cada ilha de Alola tem um guardião lendário. Tapu Fini, de tipos Água e Fada, protege qual delas?",
    "resposta": "Poni",
    "distratores": [
      "Melemele",
      "Akala",
      "Ula'ula"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Tapu_Fini_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Tapu_Fini_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The seventh generation (Generation VII) of the Pokémon franchise features 86 fictional species of collectible creatures called \"Pokémon\" introduced to the core video game series in the 2016 Nintendo 3DS games Pokémon Sun and Moon and the 2017 3DS games Pokémon Ultra Sun and Ultra Moon. Two further species were introduced in a 2018 update to the spin-off mobile game Pokémon Go, as well as the 2018 \n[…]\nFollowing Pokémon X and Y, all Pokémon have been designed by a team of roughly 20 artists, led by Ken Sugimori and Hironobu Yoshida. The events of Sun and Moon take place in the fictional region of Alola, composed entirely of tropical islands. Let's Go, Pikachu! and Let's Go, Eevee! are set in the Kanto region, the same setting as generation one.\n[…]\nPokémon Sun and Moon introduced \"Alolan Forms\" of various generation I Pokémon. These versions are to represent the different microclimates in the Alola region. The Alolan versions of Pokémon like Vulpix and Exeggutor have different appearances and types and were introduced alongside generation VII Pokémon.\n[…]\nAlex Hern of The Guardian suggested that the developers likely decided to redesign various generation I Pokémon because, according to him, \"fan connection with the original 150 Pokémon is as strong as it ever was, the number of people who can tell a Pancham from a Swirlix is much smaller\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor, consulte wiki sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nPokémon Sun e Moon introduzem \"Formas de Alola\" de vários Pokémon da primeira geração. Essas versões devem representar \"os diferentes microclimas da região de Alola\". As versões de Pokémon em Alola como Vulpix e Exeggutor têm aparências e tipos diferentes e foram introduzidas juntamente com os Pokémon da sétima geração.\n[…]\nAlex Hern de The Guardian sugeriram que os desenvolvedores provavelmente decidiram redesenhar vários Pokémons da primeira geração porque, segundo ele, \"a conexão dos fãs com os 150 Pokémon originais é tão forte, quanto sempre foi [enquanto] o número de pessoas que podem dizer a um Pancham para Swirlix é muito menor.\"\n[…]\nDiversas \"Formas de Alola\" de Pokémon da geração I foram introduzidas em Pokémon Sun e Pokémon Moon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Tapu Koko",
      "descricao": "Pokémon lendário dos tipos Elétrico e Fada da sétima geração, guardião da ilha Melemele, em Alola."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Logo no primeiro episódio de Sol e Lua, que guardião de Alola surge diante de Ash e lhe dá um Z-Ring, a pulseira dos movimentos Z?",
    "resposta": "Tapu Koko",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Tapu_Koko_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Tapu_Koko_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Series:_Sun_%26_Moon",
        "situacao": "ok",
        "texto": "Pokémon the Series: Sun & Moon is the twentieth season of the Pokémon anime series and the first and titular season of Pokémon the Series: Sun & Moon, known in Japan as Pocket Monsters: Sun & Moon (ポケットモンスター サン&ムーン, Poketto Monsutā: San & Mūn).\n[…]\nThe season follows Ash Ketchum as he attends the Pokémon School in the Alola region, befriends his classmates, Lillie, Lana, Mallow, Kiawe, Sophocles, and participates in the island challenge to master various Z-Moves.\n[…]\nThe season originally aired in Japan from November 17, 2016, to September 21, 2017, on TV Tokyo, and in the United States from May 12, 2017, to December 9, 2017, on Disney XD, making it the first Pokémon series to premiere on that channel. Prior to this, a preview of the first two episodes aired on the network on December 5, 2016.\n[…]\nThe Japanese opening songs are \"Alola!!\" (アローラ!!, Arōra!!) by Satoshi / Ash Ketchum (Rica Matsumoto) with Pikachu (Ikue Otani) for 29 episodes, and the Japanese opening theme song of Pokémon the Movie: I Choose You!, \"Aim to Be a Pokémon Master (20th Anniversary)\" (めざせポケモンマスター (20th Anniversary), Mezase Pokémon Masutā (20th Anniversary)) by Rica Matsumoto, for 14 episodes to promote the movie."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_the_Series%3A_Sun_%26_Moon_%28temporada%29",
        "situacao": "ok",
        "texto": "Pokémon the Series: Sun & Moon (Brasil: Pokémon: Sol e Lua / Portugal: Pokémon A Série Sol e Lua) é a vigésima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série: Sol e Lua (Pokémon the Series: Sun & Moon).\n[…]\nEsta temporada acompanha as aventuras de Ash Ketchum e seu parceiro Pikachu enquanto viajam para a região de Alola, frequentam a escola Pokémon com seus colegas Lillie, Lana, Mallow, Kiawe e Sophocles, participam dos desafios das ilhas e aprendem a usar o poder dos Movimentos Z.\n[…]\nA temporada foi originalmente exibida no Japão de 17 de novembro de 2016 a 21 de setembro de 2017 na TV Tokyo, e nos Estados Unidos de 12 de maio de 2017 a 9 de dezembro de 2017 no Disney XD, tornando-se a primeira série Pokémon a estrear nesse canal. Antes disso, uma prévia dos dois primeiros episódios foi exibida na emissora em 5 de dezembro de 2016.\n[…]\nAs músicas de abertura japonesas são \"Alola!!\" (アローラ!!, Arōra!!) de Satoshi/Ash Ketchum (Rica Matsumoto) com Pikachu (Ikue Otani) em 29 episódios, e a música tema de abertura japonesa de Pokémon the Movie: I Choose You!, \"Aim to Be a Pokémon Master (20th Anniversary)\" (めざせポケモンマスター (20th Anniversary), Mezase Pokémon Masutā (20th Anniversary)) de Rica Matsumoto, em 14 episódios para promover o filme. A música de encerramento é \"Pose\" (ポーズ, Pōzu) de Taiiku Okazaki.\n[…]\nA música de abertura em inglês é \"Under the Alolan Sun\" de Jannel Candrice and The Sad Truth, com o compositor Ed Goldfarb. Sua versão instrumental serve como tema de encerramento. A música de abertura no Brasil é \"Curtindo a Ilha no Sol\" de Jill Viegas. A música de abertura em Portugal é \"O Sol de Alola é assim\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Type: Null",
      "descricao": "Pokémon artificial do tipo Normal da sétima geração, de capacete de ferro, criado pela Fundação Aether, que evolui para Silvally."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a Fundação Aether, de Alola, criou Type: Null, o pokémon artificial que usa um pesado capacete de ferro?",
    "resposta": "Para combater as Ultracriaturas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Type:_Null_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Type:_Null_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The seventh generation (Generation VII) of the Pokémon franchise features 86 fictional species of collectible creatures called \"Pokémon\" introduced to the core video game series in the 2016 Nintendo 3DS games Pokémon Sun and Moon and the 2017 3DS games Pokémon Ultra Sun and Ultra Moon. Two further species were introduced in a 2018 update to the spin-off mobile game Pokémon Go, as well as the 2018 \n[…]\nPokémon Go is an augmented reality mobile game which uses the GPS and camera functions on the players' smartphones to display wild Pokémon in the player's surrounding environment.\n[…]\nor Let's Go, Eevee!, while Melmetal is only obtainable by evolving Meltan in Pokémon Go when the player collects candies. In addition to the new species of Pokémon, two new forms of Zygarde appeared in Sun and Moon—having previously appeared in the Pokémon anime: the canine \"Zygarde 10% Forme\" and mech-like \"Zygarde Complete (100%) Forme\". Alternate forms that result in type changes and regional forms are included for convenience.\n[…]\nPokémon are a species of fictional creatures created for the Pokémon media franchise. Developed by Game Freak and published by Nintendo, the Japanese franchise began in 1996 with the video games Pokémon Red and Green for the Game Boy, which were later released in North America as Pokémon Red and Blue in 1998. In these games and their sequels, the player assumes the role of a Trainer whose goal is to capture and use the creatures' special abilities to combat other Pokémon.\n[…]\nPokémon Sun and Moon introduced \"Alolan Forms\" of various generation I Pokémon. These versions are to represent the different microclimates in the Alola region. The Alolan versions of Pokémon like Vulpix and Exeggutor have different appearances and types and were introduced alongside generation VII Pokémon.\n[…]\nVarious \"Alolan Forms\" of generation I Pokémon were introduced in Pokémon Sun and Moon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor, consulte wiki sobre o assunto.\n[…]\nDesde Pokémon X e Y, todos os Pokémon são projetados por uma equipe de todos 20 artistas comandadas por Ken Sugimori e Hironobu Yoshida. Sun e Moon ocorrem na região tropical de Alola, composta inteiramente de ilhas. Let's Go, Pikachu! e Let's Go, Eevee! são definidas na região de Kanto, a mesma configuração da primeira geração.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nPokémon Sun e Moon introduzem \"Formas de Alola\" de vários Pokémon da primeira geração. Essas versões devem representar \"os diferentes microclimas da região de Alola\". As versões de Pokémon em Alola como Vulpix e Exeggutor têm aparências e tipos diferentes e foram introduzidas juntamente com os Pokémon da sétima geração.\n[…]\nDiversas \"Formas de Alola\" de Pokémon da geração I foram introduzidas em Pokémon Sun e Pokémon Moon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Necrozma",
      "descricao": "Pokémon lendário do tipo Psíquico da sétima geração, que absorve luz e pode se fundir a Solgaleo e Lunala."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Ultra Sun e Ultra Moon, a cidade de Ultra Megalópolis vive no escuro, sem luz no céu. O que provocou essa escuridão?",
    "resposta": "Necrozma absorveu a luz",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ultra_Megalopolis",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ultra_Sun_and_Ultra_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ultra_Megalopolis",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ultra_Sun_and_Ultra_Moon",
        "situacao": "ok",
        "texto": "Pokémon Ultra Sun and Pokémon Ultra Moon are 2017 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. Part of the seventh generation of the Pokémon video game series, the games are enhanced versions of Pokémon Sun and Pokémon Moon, which released the previous year. Announced in June 2017, they were released worldwide on 17 Novemb\n[…]\nDuring the climax, Lusamine uses Nebby to create a wormhole to the Ultra Megalopolis, where she and Guzma attempt to fight Necrozma for the sake of the Ultra Recon Squad. However, they fail and are thrown back into their dimension later on in the story, with Necrozma following them. Necrozma fights Nebby, now a Solgaleo or Lunala, and prevails.\n[…]\nNecrozma then absorbs the Legendary Pokémon, gaining its Dusk Mane or Dawn Wings form in the respective version, and unleashes the Ultra Beasts upon Alola before fighting the player. After the player defeats it, Necrozma escapes into the Ultra Megalopolis, taking the world's light with it while the player, with the help of the Ultra Recon Squad, travels on the opposite Legendary featured in each game—Lunala in Ultra Sun or Solgaleo in Ultra Moon—through Ultra Space to reach the Ultra Megalopolis.\n[…]\nThe player can then explore the Ultra Wormholes, the worlds of the Ultra Beasts, and catch them with the Beast Balls they have acquired. After catching Necrozma at Mount Lanakila, Colress will appear and give the player the N-Solarizer or N-Lunarizer, allowing Necrozma to fuse or separate from Solgaleo or Lunala respectively. Once the player has caught the Ultra Beasts, the Ultra Recon Squad will tell them to defeat or catch Blacephalon in Ultra Sun or Stakataka in Ultra Moon.\n[…]\nGame director Kazumasa Iwao was previously in charge of the battle systems in Sun and Moon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ultra_Sun_e_Ultra_Moon",
        "situacao": "ok",
        "texto": "Pokémon Ultra Sun e Pokémon Ultra Moon (ポケットモンスター ウルトラサン・ウルトラムーン, Poketto Monsutā Urutora San・Urutora Mūn; \"Monstros de Bolso: Ultra Sun・Ultra Moon, que traduzido do inglês para o português significa Ultra Sol e Ultra Lua, Sol e Lua em japonês é respectivamente 太陽 Taiyō e 月 Tsuki) são dois jogos eletrônicos de RPG de 2017, desenvolvidos pela Game Freak, publicados pela The Pokémon Company, e distr\n[…]\nUltra Sun e Ultra Moon apresentam novos Ultra Bestas: Stakataka, Blacephalon, Poipole e sua evolução, Naganadel. Além disso, existem novas formas para o lendário Pokémon Necrozma, apelidado de \"Dusk Mane\" e \"Dawn Wings\", que são obtidas absorvendo os lendários Pokémon Solgaleo e Lunala, respectivamente; é conceitualmente semelhante a Black e White Kyurem de Black 2 e White 2 e a forma mudada de Lusamine do Sun e Moon originais.\n[…]\nUm novo grupo, o Esquadrão Ultra Recon, é apresentado com personagens diferentes nos dois jogos. Ultra Megalopolis, uma vasta cidade onde Necrozma roubou todas as suas fontes de luz, está localizada dentro do Ultra Espaço e é acessível através dos Ultra Wormholes.\n[…]\nGrande parte da história gira em torno de vários Pokémon lendários: um Cosmog, apelidado de Nebby, Ultra Sun ou Lunala em Ultra Moon; e um Necrozma, que tenta tirar a luz de Alola.\n[…]\nNecrozma então absorve o lendário Pokémon, ganhando sua forma Dusk Mane ou Dawn Wings na respectiva versão, e libera as Ultra Bestas em Alola antes de lutar contra o jogador. Depois que o jogador o derrota, Necrozma foge para a Ultra Megalopolis, levando a luz do mundo consigo enquanto o jogador, com a ajuda do Ultra Recon Squad, viaja no lendário oposto apresentado em cada jogo - Lunala no Ultra Sun ou Solgaleo no Ultra Lua - através do Ultra Espaço para chegar à Ultra Megalopolis.\n[…]\nPlaylist Pokémon Ultra Sun e Ultra Moon no YouTube  Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Zacian",
      "descricao": "Pokémon lendário do tipo Fada da oitava geração, um lobo com espada, mascote de Pokémon Sword e herói lendário de Galar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda de Galar, Zacian e Zamazenta ajudaram a deter uma catástrofe ancestral provocada por Eternatus. Como ela é chamada?",
    "resposta": "Darkest Day",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Darkest_Day",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Darkest_Day",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword and Pokémon Shield are 2019 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo Switch console. They are the first instalments in the 8th generation of the Pokémon video game series. First teased at E3 2017 and announced in February 2019, the games were released on 15 November 2019.\n[…]\nAs their quest continues, the player assists Sonia in her research on two Legendary Pokémon who saved Galar from an ancient crisis called the Darkest Day and deduces that they are the same Pokémon previously encountered in the Slumbering Weald. After beating the eight Gym Leaders, the player makes their way to Wyndon where they win the Champion's Cup, earning an opportunity to battle Leon.\n[…]\nThe next day, before the final battle between the player and Leon can commence, Rose awakens the Legendary Pokémon Eternatus in an attempt to harness its power to provide unlimited energy to Galar, purposefully triggering the second Darkest Day. The player and Hop secure the aid of the two Legendary Pokémon, Zacian and Zamazenta. The four defeat Rose and Eternatus, after which the player catches Eternatus and Rose hands himself over to the authorities.\n[…]\nThe game's post-game has the player and Hop confront Sordward and Shielbert, two brothers who attempt to drive Zacian and Zamazenta berserk. The player and Hop capture the two Pokémon and the brothers are arrested. Hop chooses to train to be a Pokémon Professor with Sonia.\n[…]\nThe decision to exclude many pre-existing Pokémon in the games drew outrage from many fans, who referred to it as \"Dexit\", a portmanteau of \"Pokédex\" and \"Brexit\" (tying in with the Galar region's British theme), and created the hashtag \"#BringBackNationalDex\" on social media. with some fans calling for the games to be delayed until all of the Pokémon could be added."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sword_e_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword e Pokémon Shield (ポケットモンスター ソード・シールド, Poketto Monsutā Sōdo・Shīrudo; Monstros de Bolso Sword・Shield, que traduzidos do inglês para o português significa Espada e Escudo, Espada e Escudo em japonês é respectivamente 剣 Ken e 盾 Tate) são dois jogos eletrônicos de RPG, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo. Fazem parte da oitava geração da série Po\n[…]\nEnquanto sua busca continua, o jogador auxilia Sonia em sua pesquisa sobre dois Pokémon Lendários que salvaram Galar de uma crise antiga chamada de Darkest Day e deduz que eles são os mesmos Pokémon encontrados anteriormente em Slumbering Weald. Depois de derrotar os oito Líderes de Ginásio, incluindo Piers, o irmão mais velho de Marnie e o líder da Equipe Yell, o jogador segue para Wyndon, onde ganha a Copa dos Campeões, ganhando a oportunidade de lutar contra Leon.\n[…]\nNo dia seguinte, antes que a batalha entre o jogador e Leon possa começar, Chairman Rose desperta o lendário Pokémon Eternatus em uma tentativa de aproveitar seu poder para fornecer energia ilimitada a Galar, inadvertidamente desencadeando um segundo Darkest Day. O jogador e Hop retornam ao Slumbering Weald e garantem a ajuda dos lendários Pokémon, Zacian e Zamazenta, para derrotar o Presidente Rose e Eternatus, após o qual o jogador pega Eternatus.\n[…]\nUm segundo Nintendo Direct sobre os jogos foi realizado em 5 de junho de 2019, que revelou alguns de seus novos recursos, personagens e Pokémon, incluindo os lendários Pokémon Zacian e Zamazenta, que aparecem na caixa de arte. A data de lançamento, 15 de novembro de 2019, também foi anunciada como parte desta apresentação. O Game Freak limitou intencionalmente o número de novos Pokémon revelados por meio de material promocional para encorajar os jogadores a descobri-los no jogo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Calyrex",
      "descricao": "Pokémon lendário dos tipos Psíquico e Planta da oitava geração, antigo rei da Tundra Coroada, em Galar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em The Crown Tundra, Calyrex, o antigo rei das colheitas de Galar, perdeu quase todos os poderes e o seu corcel. O que provocou essa perda?",
    "resposta": "O povo se esqueceu dele",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Calyrex_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Calyrex_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The eighth generation (Generation VIII) of the Pokémon franchise features 96 titular species of creatures introduced to the core video game series, including 89 in the 2019 Nintendo Switch games Pokémon Sword and Shield as of version 1.3.0 and 7 further species introduced in the 2022 Nintendo Switch game Pokémon Legends: Arceus. The temporary Dynamax and Gigantamax transformations were also introd\n[…]\nThe development of Pokémon Sword and Shield began in 2016, immediately following the development period of Pokémon Sun and Moon. The conceptual phase lasted approximately a year, and the debugging process continued into 2019. With the Galar region based in Great Britain, some of the native Pokémon draw inspiration from British fauna, folklore, and mythology.\n[…]\nFor the first time, many new Pokémon and regional forms were added to the generation through game patches rather than through the release of a new game. Acquiring these Pokémon requires purchasing an add-on downloadable content pass separate from the base game or utilizing the in-game trade feature. Further patches added other new species, including legendary and mythical Pokémon Kubfu, Urshifu, and Zarude in June 2020 and Regieleki, Regidrago, Glastrier, Spectrier, and Calyrex in October 2020."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VIII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nDesenvolvimento de Pokémon Sword e Shield começou em 2016, imediatamente após o período de desenvolvimento de Pokémon Sun e Moon. A fase conceitual durou aproximadamente um ano e o processo de depuração continuou em 2019. Com a região de Galar, baseada na Grã-Bretanha, os Pokémon nativos inspiram-se na fauna, folclore e mitologia britânico. Os Pokémon lendários Zacian e Zamazenta são criaturas parecidas com lobos, inspirando-se em lobos que frequentemente aparecem na mitologia britânica.\n[…]\nComo na geração anterior, versões redesenhadas de Pokémon lançados anteriormente (\"Formas de Galar\" e \"Formas de Hisui\") foram incluídas ao lado de novas criaturas.\n[…]\nOutros patches adicionaram outras novas espécies, incluindo Pokémon lendários e míticos Kubfu, Urshifu e Zarude em junho de 2020 e Regieleki, Regidrago, Glastrier, Spectrier e Calyrex em outubro de 2020.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Walking Wake",
      "descricao": "Pokémon paradoxo dos tipos Água e Dragão, uma versão antiga de um lendário de Johto, introduzido na expansão de Pokémon Scarlet."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Walking Wake, pokémon paradoxo de tipos Água e Dragão vindo do passado, é uma versão antiga de qual lendário de Johto?",
    "resposta": "Suicune",
    "distratores": [
      "Raikou",
      "Entei",
      "Lugia"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Walking_Wake_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IX_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Walking_Wake_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IX_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The ninth generation (Generation IX) of the Pokémon franchise features 120 titular species of creatures introduced to the core video game series in the Nintendo Switch games Pokémon Scarlet and Violet. The first Pokémon of the generation were revealed on 27 February 2022 in a Pokémon Presents livestream presentation. Scarlet and Violet were released on 18 November 2022.\n[…]\nThough she found several of the designs to be of a high standard, such as Skeledirge, Dachsbun, Pawmot, and Finizen, she felt that the majority of the designs in the game were not up to the standard of other entries in the series. Ben Sledge, also writing for TheGamer, additionally criticized the generation's Legendary Pokémon designs as being uninspired or unappealing, stating that \"They're barely even creatures, they're just animals with weird colour palettes.\"\n[…]\nJoe Parlock of TheGamer praised the sleek designs of the starters and the designs of several other Pokémon, including Smoliv, Fidough, Koraidon, and Miraidon.\n[…]\nHe described the individuality of the designs and how each of the designs helped build Paldea's culture, stating that it was \"the most holistic approach to Pokémon design we've seen in decades.\" In a discussion among Nintendo Life staff about the best designs in the generation, the group highlighted many Pokémon, including Glimmora, Tandemaus, and Charcadet.\n[…]\nAna Diaz, writing for Polygon, believed that many species, most notably Flamigo, Palafin, and Maushold, had unique and powerful traits in gameplay. She hoped that they would allow for a more fun competitive environment for players. Several Pokémon, such as Annihilape, Palafin, Flutter Mane, Iron Bundle, and Houndstone, ended up being particularly powerful in popular fan-run competitive formats."
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
    "indice": 28,
    "ancora": {
      "nome": "Cresselia",
      "descricao": "Pokémon lendário do tipo Psíquico da quarta geração, ligado à lua crescente e aos bons sonhos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, o filho de um marinheiro de Canalave sofre com pesadelos causados por Darkrai. De qual lendário vem a pena que o cura?",
    "resposta": "Cresselia",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lunar_Wing",
      "https://bulbapedia.bulbagarden.net/wiki/Cresselia_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lunar_Wing",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cresselia_(Pok%C3%A9mon)",
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
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA quarta geração (Geração IV) da franquia Pokémon apresentou 107 criaturas fictícias introduzidas em 2006 no jogo de Nintendo DS, Pokémon Diamond e Pearl. Alguns Pokémon desta geração foram introduzidos nas adaptações animadas da franquia antes de Diamond e Pearl, como Bonsly, Mime Jr. e Munchlax, que eram personagens recorrentes da série de anime Pokémon em 2005 e 2006.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Shaymin",
      "descricao": "Pokémon mítico do tipo Planta da quarta geração, um pequeno ouriço florido que tem a Forma Terrestre e a Forma Céu."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O pequeno ouriço Shaymin troca a Forma Terrestre pela Forma Céu, de tipo Planta e Voador, quando entra em contato com qual flor?",
    "resposta": "Gracidea",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Gracidea",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gracidea",
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
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 107 Pokémon da Geração IV na ordem numérica do Pokédex Nacional. O primeiro Pokémon, Turtwig, numerado de 387 e o último, Arceus, numerado de 493. Formulários alternativos que resultam em alterações de tipo são incluídos por conveniência. Formas alternativas que resultam em mudanças de tipo estão incluídas para facilitar a consulta. Mega Evoluções e formas regionais estão incluídas nas páginas da geração em que foram introduzidas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Arceus",
      "descricao": "Pokémon mítico do tipo Normal da quarta geração, que segundo a mitologia de Sinnoh criou o universo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No jogo ambientado na antiga região de Hisui, que pokémon mítico arranca o protagonista do presente e o leva para aquele passado distante?",
    "resposta": "Arceus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Legends:_Arceus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus is a 2022 action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. It is part of the eighth generation of the Pokémon video game series and serves as a prequel to the fourth-generation titles Pokémon Diamond and Pearl (2006). The game was first announced as part of the Pokémon 25th Anniversary event in Febru\n[…]\nThe game follows the protagonist, who is sent back in time and travels through the Hisui region, which is based on the island of Hokkaido during early Japanese colonization. The game is centered around exploration of the region's several open areas populated with Pokémon, with its main objective being to complete the Pokédex by catching all Pokémon. Pokémon Legends: Arceus was a commercial success, having sold over 14.83 million copies by 31 March 2023.\n[…]\nOn 9 December 2021, the official Pokémon Twitter account teased a Poké Ball-related announcement for Legends: Arceus. The next day, a regional variant of Voltorb, a Pokémon based on Poké Balls, was announced. On 15 December 2021, a new trailer showcased several factions present in the game, as well as their leaders. On 7 January 2022, an overview trailer was released in Japanese, showcasing the world, people, and Pokémon. However, the trailer was not localized into English until 24 January 2022.\n[…]\nAnnounced in April 2022, an ONA webseries tie-in, titled Pokémon: Hisuian Snow, debuted on YouTube and Pokémon TV on 18 May 2022. The series focuses on a young boy who befriends a Hisuian Zorua in Hisui. The series received a Webby Award as the \"People's Voice Winner.\" The series A limited 4-episode ONA webseries tie-in, titled Pokémon: The Arceus Chronicles, debuted on Amazon Prime Video in Japan in January 2022 and debuted on Netflix on 23 September 2022."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Legends:_Arceus",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Legends%3A_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus (Pokémon LEGENDS アルセウス, Pokemon Rejenzu: Aruseusu; tradução: Pokémon Lendas: Arceus) é um jogo eletrônico de RPG de ação desenvolvido pela Game Freak e publicado pela The Pokémon Company e Nintendo. Faz parte da oitava geração da série de jogos eletrônicos Pokémon e serve como uma prequela para os jogos eletrônicos de RPG do Nintendo DS, Pokémon Diamond e Pearl, de 2006. Fo\n[…]\nPokémon Legends: Arceus é um RPG de ação, uma estreia na série principal de jogos Pokémon. Apesar desta distinção e das mudanças que vêm com ela, Legends: Arceus é dito para homenagear a jogabilidade principal de entradas anteriores na série. Ele apresenta um cenário de mundo aberto na área selvagem introduzido no Pokémon Sword e Shield. O jogo se passa em uma era passada da história da região de Sinnoh, muito antes dos eventos de Pokémon Diamond e Pearl acontecerem.\n[…]\nFoi declarado que o objetivo do jogo seria criar a primeira Pokédex de Sinnoh. O mítico Pokémon Arceus terá um papel importante na história.\n[…]\nNo início do jogo, três opções iniciais de Pokémon estão disponíveis: Rowlet (do Pokémon Sun e Moon), Cyndaquil (do Pokémon Gold e Silver) e Oshawott (do Pokémon Black e White), tornando-o o primeiro jogo da série principal a apresentar Pokémon iniciais de três gerações diferentes de jogos.\n[…]\nPokémon Legends: Arceus recebeu \"críticas geralmente favoráveis\" de acordo com o agregador de resenhas Metacritic.\n[…]\nA Nintendo informou que o jogo vendeu 6,5 milhões de cópias em todo o mundo dentro de uma semana de seu lançamento, superando outros títulos da série Pokémon lançados para Nintendo Switch, como Sword e Shield e Brilliant Diamond e Shining Pearl. No Japão, vendeu 1,43 milhão de unidades em três dias. Nos Estados Unidos, apenas as vendas físicas de Legends: Arceus (excluindo downloads digitais) fizeram dele o jogo eletrônico mais vendido de janeiro de 2022.",
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
