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
      "nome": "Squirtle",
      "descricao": "Pokémon tartaruga do tipo Água da primeira geração, inicial de Kanto, que evolui para Wartortle e Blastoise."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Squirtle tem o nome formado por turtle, tartaruga em inglês, e squirt, verbo que descreve qual ação desse inicial de água?",
    "resposta": "Esguichar",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Squirtle"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Squirtle",
        "situacao": "ok",
        "texto": "Squirtle ( ), known as Zenigame (Japanese: ゼニガメ) in Japan, is a Pokémon species in Nintendo and Game Freak's Pokémon franchise. It was designed by Atsuko Nishida. Its name was changed from Zenigame to Squirtle during the English localization of the series in order to make it \"clever and descriptive.\" In animated appearances, Squirtle is voiced in Japanese by Rikako Aikawa and in English localizati\n[…]\nSquirtle was designed as one of the starter Pokémon of Pocket Monsters Red and Green by Atsuko Nishida, who based its design on its final form, a turtle-esque Pokémon called Blastoise. Squirtle, in the games, can evolve into Wartortle and then into Blastoise.\n[…]\nAsh's second female companion, May, also owned a Squirtle. Green, the original female protagonist in Pokémon Adventures, stole a Squirtle from Professor Oak's laboratory. It was not seen until Chapter fifteen, \"Wartortle Wars\", by which point it had evolved into a Wartortle, nicknamed Turtley, which she used as a major member of her team. Squirtle later appeared as background elements in the live action movie Detective Pikachu.\n[…]\nSquirtle was among eleven Pokémon chosen as Japan's mascots in the 2014 FIFA World Cup.\n[…]\nRyan Gilliam of Polygon claimed that Squirtle was the best starter Pokémon, stating that \"Squirtle isn't adorable or fierce like the Charmander line, it doesn't breed eternal sympathy like Bulbasaur. Instead, Squirtle, Blastoise and even Wartortle are just cool dudes. They're cool turtles that are just cool together.\" He highlighted its design in comparison to Bulbasaur and Charmander, praising its simplicity and personality.\n[…]\nPocket Gamer listed and criticized Squirtle as the worst Pokémon ever, stating that Squirtle is \"just a turtle\". It has been cited as more \"boring\" than other Pokémon due to its similarities to other Pokémon of the same type as it.\n[…]\nSquirtle  at Bulbapedia, a Pokémon wiki\n[…]\nSquirtle on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Squirtle",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nOs designs de cada Pokémon começaram como sprites em pixel art criados pela equipe de desenvolvimento, com uma identidade de cor única escolhida para se adequar às limitações de hardware do Super Game Boy. Com a equipe inicial de desenvolvimento composta por três homens, o designer de personagens Ken Sugimori trouxe desenvolvedoras para o projeto, acreditando que elas seriam mais capazes de criar designs \"fofos\".\n[…]\nA maioria dos Pokémon desta geração tinha designs relativamente simples e eram altamente análogos às criaturas da vida real, incluindo, entre outros: Pidgey (um pombo), Krabby (um caranguejo), Rattata (um rato), Ekans (uma cobra), e Seel (uma foca). Muitos Pokémon nos jogos originais serviram como base para repetir conceitos mais adiante na série. Alguns Pokémon, como Squirtle, Bulbasaur e Charmander, foram projetados com base em suas evoluções finais, trabalhando-se de trás para frente.\n[…]\nQuando os jogos foram localizados para o público de língua inglesa como Red e Blue, a Nintendo of America deu às várias espécies de Pokémon \"nomes inteligentes e descritivos\" relacionados à sua aparência ou características, como forma de torná-los mais identificáveis ​​para as crianças americanas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Jigglypuff",
      "descricao": "Pokémon dos tipos Normal e Fada, número 39 da Pokédex Nacional."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Japão, o redondo e macio Jigglypuff se chama Purin. Esse nome vem de qual doce?",
    "resposta": "Pudim",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Jigglypuff"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jigglypuff",
        "situacao": "ok",
        "texto": "Jigglypuff (  JIG-lee-puf), known in Japan as Purin (Japanese: プリン), is a Pokémon species. Jigglypuff first appeared in the video games Pokémon Red and Blue and subsequent sequels, later appearing in various merchandise, spinoff titles and animated and printed adaptations of the franchise. Jigglypuff's English voice was originally provided by Rachael Lillis, later being replaced by Michele Knotz, \n[…]\nJigglypuff was one of one hundred and fifty one different generation I Pokémon designs conceived by Game Freak's character development team and finalized by Ken Sugimori for the first-generation of Pocket Monsters games Red and Green, which were localized outside Japan as Pokémon Red and Blue. Its Japanese name \"Purin\", derives from the Japanese loanword for custard or pudding.\n[…]\nJigglypuff has proven to be a popular character since its introduction. Jigglypuff has been noted as one of the series' most popular characters and one of Nintendo's mascots.\n[…]\nThe Australian Journal of Language and Literacy cited Jigglypuff as a tool to use for introducing children to drama, citing its mannerisms in the anime.\n[…]\nplayer Hungrybox relies heavily on a defensive, counterattack-centric playstyle revolving around avoiding his opponent until he finds an opportunity to attack and capitalize on their mistakes. It is considered a \"high risk high reward\" playstyle, as Hungrybox's usual goal is to eventually hit his opponent with Rest, a move unique to Jigglypuff which inflicts instant high knockback on opponents, but leaves Jigglypuff open to attack.\n[…]\nIn 2018, Jigglypuff's singing habits became an Internet meme, and a Twitter account known as @jigglysinging was created to overlay popular songs over a clip of Jigglypuff singing. A Las Vegas street was also named after Jigglypuff.\n[…]\nJigglypuff  at Bulbapedia, a Pokémon wiki\n[…]\nJigglypuff on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jigglypuff",
        "situacao": "ok",
        "texto": "Jigglypuff, conhecido no Japão como Purin (プリン), é uma espécie de Pokémon da franquia Pokémon que pertence a Nintendo e Game Freak. Criada por Ken Sugimori, Jigglypuff fez sua primeira aparição nos jogos eletrônicos Pokémon Red e Blue e, depois, apareceu nas sequências dos jogos que se seguiram. Mais tarde, apareceu em diversas mercadorias, títulos em spin-off e adaptações impressas da franquia. J\n[…]\nNo mangá As Aventuras Elétricas de Pikachu, uma garota chamada Mimi possui um Jigglypuff, que ajuda a defender um rebanho de Clefairy selvagem de Jessie e James da Equipe Rocket. O mangá Magical Pokémon Journey tem um Jigglypuff feminino como um dos principais personagens, parodiando Hello Kitty, e é introduzido para a série em um volume chamado Cooking With Jigglypuff.\n[…]\nA Jigglypuff de Magical Pokémon Journey é mimada e rica, e vive em uma mansão com um Wigglytuff e Squirtle, sendo o primeiro a irmã e o último seu mordomo.\n[…]\nNo mangá Pokémon Adventures Special, um dos principais personagens, Green, tem um Jigglypuff que é capaz de inchar até várias vezes o seu tamanho. Isso permite Green a flutuar com ele, como um balão de ar quente, bem como bloquear passagens-a estreitas tática fundamental para ajudar a Silver e sua fuga do Masked Man. Ele evolui em um Wigglytuff ao lado de dois outros Pokémons de Green com o poder de suas Pedras da Lua.\n[…]\nJigglypuff é muitas vezes caracterizado em produtos onde a cena de vários Pokémons são mostrados. Um exemplo disto é no Boeing Pokémon 747. Jigglypuff foi feito em várias formas diferentes de brinquedos de pelúcia, bem como outros artigos. O autor Harry Schlesinger escreveu que Jigglypuff era popular entre as meninas. Jigglypuff provou ser um personagem popular desde a sua introdução se tornando o preferido pelo público feminino em maior parte e um pouco pelo masculino.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Clefairy",
      "descricao": "Pokémon do tipo Fada da primeira geração, ligado à lua, evolução de Cleffa que evolui para Clefable com a Pedra da Lua."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Clefairy tem no nome fairy, fada em inglês, e clef, palavra inglesa para qual símbolo do início da partitura?",
    "resposta": "Clave",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Clefairy_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Clefairy_(Pok%C3%A9mon)",
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
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nQuando os jogos foram localizados para o público de língua inglesa como Red e Blue, a Nintendo of America deu às várias espécies de Pokémon \"nomes inteligentes e descritivos\" relacionados à sua aparência ou características, como forma de torná-los mais identificáveis ​​para as crianças americanas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Kangaskhan",
      "descricao": "Pokémon do tipo Normal da primeira geração, inspirado no canguru, que carrega o filhote numa bolsa na barriga."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Kangaskhan, que carrega o filhote numa bolsa na barriga, tem um nome que mistura canguru com qual conquistador mongol?",
    "resposta": "Gengis Khan",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kangaskhan_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kangaskhan_(Pok%C3%A9mon)",
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
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Feraligatr",
      "descricao": "Pokémon crocodilo do tipo Água da segunda geração, evolução final de Totodile, inicial de Johto."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Feraligatr, o crocodilo inicial de Johto, junta feral e alligator, mas sem a letra o no fim. Por que ela foi cortada?",
    "resposta": "Limite de dez letras nos nomes",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Feraligatr_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Feraligatr_(Pok%C3%A9mon)",
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
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nOs jogos se passam na região de Johto, que é baseada na região real de Kansai, no Japão. Por serem uma sequência da primeira geração da franquia, os designs dos Pokémon da segunda geração compartilham uma forte semelhança com os da primeira. Alguns Pokémon desta geração foram apresentados em adaptações animadas da franquia antes do lançamento de Gold e Silver.\n[…]\nUma grande mudança em relação à demo foram os iniciais. Além de Chikorita, os iniciais de Fogo e Água eram espécies diferentes, em vez das linhas evolutivas de Cyndaquil e Totodile escolhidas no jogo final. O inicial de Fogo era inicialmente Honōguma (traduzido como Flambear na versão em inglês), um Pokémon semelhante a um urso que lembra um pouco Pikachu. Honōguma eventualmente evoluiria para Borubeaa (Volbear em inglês) e Dainabea (Dynabear em inglês).\n[…]\nO inicial de Água era inicialmente Kurusu (Cruz em inglês), um Pokémon semelhante a uma foca que lembra o inicial da sétima geração, Popplio. Kurusu eventualmente evolui para Akua (Aqua em inglês) e Akueria (Aquaria em inglês).\n[…]\nEste último vazamento, apelidado de Índice Coreano por ter sido descoberto em um arquivo de backup coreano, apresentava designs descartados nunca antes vistos, como Pokémon baseados em um coala, coelhos da neve[ja] (雪うさぎ), um navio viking, bem como designs que lembravam versões iniciais de espécies de gerações posteriores, como Chimecho e Burmy.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Ampharos",
      "descricao": "Pokémon do tipo Elétrico da segunda geração, número 181 da Pokédex Nacional, de pescoço longo e esfera na cauda."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Ampharos, que guia os navios de Johto com a luz da cauda, tem no nome Pharos, nome grego de qual Maravilha do Mundo Antigo?",
    "resposta": "Farol de Alexandria",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ampharos_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Lighthouse_of_Alexandria"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ampharos_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lighthouse_of_Alexandria",
        "situacao": "ok",
        "texto": "The Pharos of Alexandria was a lighthouse built by the Ptolemaic Kingdom of Ancient Egypt, during the reign of Ptolemy II Philadelphus (280–247 BC). It has been estimated to have been at least 100 metres (330 ft) in overall height. One of the Seven Wonders of the Ancient World, for many centuries it was one of the world's tallest man-made structures.\n[…]\nA well-preserved ancient tomb in the town of Abusir, 48 kilometres (30 mi) southwest of Alexandria, is thought to be a scaled-down model of the Alexandria Pharos. Known colloquially under various names – the Pharos of Abusir, the Abusir funerary monument and Burg al-Arab (Arab's Tower) – it consists of a 3-storey tower, approximately 20 metres (66 ft) in height, with a square base, an octagonal midsection and cylindrical upper section, like the building upon which it was apparently modelled.\n[…]\nIt dates to the reign of Ptolemy II (285–246 BC), and is therefore likely to have been built at about the same time as the Alexandria Pharos.\n[…]\nIn classical antiquity, an annual Jewish festival was held on the island of Pharos to honour the translation of the Jewish Scriptures into Greek, traditionally believed to have been completed there under Ptolemy II. On this occasion, a large Jewish crowd, along with some non-Jewish visitors, would gather on the beach for a grand picnic. Jewish philosopher Philo of Alexandria (c. 20 BCE – c.\n[…]\nChugg, Andrew Michael (2024). The Pharos Lighthouse In Alexandria – Second Sun and Seventh Wonder of Antiquity. Routledge.\n[…]\nClarie, Thomas C. (2009). Pharos – A Lighthouse For Alexandria. Back Channel. ISBN 978-1-934-58212-1.\n[…]\nHiggins, Michael Denis (2023). \"A Reverse History of the Pharos Lighthouse of Alexandria: From the Underwater Remains to the First Structure\". The Ancient Near East Today. 11 (10).\n[…]\nDescription of Alexandria and the Pharos in the Zhu fan zhi"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Farol_de_Alexandria",
        "situacao": "ok",
        "texto": "Farol de Alexandria (em grego:  ὁ Φάρος της Ἀλεξανδρείας) foi um farol construído pelo Reino Ptolomaico entre 280 e 247 a.C. na cidade de Alexandria. Ele tinha entre 120 e 137 metros de altura e era uma das sete maravilhas do mundo antigo, sendo que por muitos séculos foi uma das estruturas mais altas no mundo. Danificado por três terremotos entre os anos de 956 e 1323, tornou-se uma ruína abandon\n[…]\nAté 1480, era a terceira maravilha antiga sobrevivente (depois do Mausoléu de Halicarnasso e da Grande Pirâmide de Gizé), quando então a última de suas pedras remanescentes foi usada para construir a Cidadela de Qaitbay no mesmo local. Em 1994, os arqueólogos franceses descobriram parte dos restos do farol no Porto Oriental de Alexandria.\n[…]\nO farol foi construído no século III a.C. Depois que Alexandre, o Grande morreu de uma febre aos 32 anos, o primeiro Ptolomeu (Ptolemeu I Sóter) anunciou-se rei em 305 a.C. e comissionou a sua construção pouco depois. O edifício foi terminado durante o reinado de seu filho, o segundo Ptolomeu (Ptolemeu II Filadelfo). Levou doze anos para completar, com um custo total de 800 talentos e serviu como um protótipo para todos os faróis posteriores no mundo.\n[…]\nNo final de 1994, arqueólogos gregos liderados por Jean-Yves Empereur redescobriram os restos físicos do farol no piso do Porto Oriental de Alexandria. Alguns destes restos foram trazidos acima e ficaram em exposição pública até o fim de 1995. Subsequentes imagens de satélite revelaram mais vestígios. É possível mergulhar e ver as ruínas.\n[…]\nO Secretariado da Convenção da UNESCO para a Proteção do Patrimônio Cultural Subaquático está trabalhando atualmente com o Governo do Egito em uma iniciativa para adicionar a Baía de Alexandria (incluindo os restos do farol) em uma lista do Patrimônio Mundial de locais culturais submersos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Umbreon",
      "descricao": "Pokémon do tipo Sombrio, número 197 da Pokédex Nacional."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Umbreon, a evolução noturna de Eevee, tem o nome derivado de umbra, palavra latina para quê?",
    "resposta": "Sombra",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The second generation (generation II) of the Pokémon franchise features 100 fictional species of creatures introduced to the core video game series in the Game Boy Color games Pokémon Gold and Silver. The generation was unveiled at the beginning of the Nintendo Space World '97 event. Gold and Silver were first released on November 21, 1999, in Japan.\n[…]\nLowell Bell, in a ranking of each generation's Pokémon for Nintendo Life, stated that the second generation's Pokédex was the weakest out of all generations. He stated that while several designs, such as the final evolutions of the Starter Pokémon, Scizor, Espeon, and Umbreon were popular and well-designed, many of the generation's Pokémon, such as Ledian, Stantler, Pineco, and Sunflora, were forgettable, deeming a large majority of the generation \"disappointing\" as a result.\n[…]\nIn a 2016 poll held by The Pokémon Company, Umbreon, Tyranitar, and Lugia were voted to be among the top thirty most popular Pokémon among voters. A later poll determined the three aforementioned Pokémon, alongside Typhlosion, Scizor, and Ampharos, to be among the six most popular Pokémon of the generation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_II",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, que ocorre por diversos meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nEsses designs incluíam pré-evoluções descartadas para Pokémon da primeira geração, como Paras, Meowth e Doduo, e evoluções descartadas para Farfetch'd, Qwilfish, Pinsir, Weepinbell e Ditto. Acredita-se que alguns designs descartados foram posteriormente reutilizados em jogos futuros, como Tangrowth, Sharpedo, Leafeon e Lickilicky; no entanto, isso não foi oficialmente confirmado.\n[…]\nMuitos designs totalmente únicos, sem associação com outras espécies, também foram descobertos, como uma foca flamejante, uma boneca empalada com um prego que evolui para um ser semelhante a um panda, uma linha evolutiva de gato do tipo Noturno e um Pokémon concha (chamado Taaban) que apresenta semelhanças com conchas na cauda e na cabeça das espécies de Pokémon Slowbro e Slowking, respectivamente.\n[…]\nUm dos designs mais populares descobertos na versão beta foi a linha evolutiva de Kotora, composta por Kotora, Raitora e uma terceira evolução sem nome. Essa linha recebeu o tipo Elétrico e foi baseada em tigres, com o nome de Kotora significando \"filhote de tigre\" e o de Raitora, \"tigre do trovão\". Descobriu-se que a linha evolutiva de Kotora havia sido descartada tanto na primeira quanto na segunda geração.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Entei",
      "descricao": "Pokémon lendário do tipo Fogo da segunda geração, uma das três feras lendárias de Johto ressuscitadas por Ho-Oh."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome de Entei, a fera lendária de Johto ligada aos vulcões, junta en, chama em japonês, com tei, que significa qual título?",
    "resposta": "Imperador",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Entei_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Entei_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The second generation (generation II) of the Pokémon franchise features 100 fictional species of creatures introduced to the core video game series in the Game Boy Color games Pokémon Gold and Silver. The generation was unveiled at the beginning of the Nintendo Space World '97 event. Gold and Silver were first released on November 21, 1999, in Japan.\n[…]\nThe second generation of Pokémon is set primarily in the region of Johto, which is based on the real-world region of Kansai in Japan. The second generation of Pokémon, unlike other subsequent generations in the series, was primarily designed as a \"sequel\" to the prior generation, which was focused around the games Pokémon Red and Blue. This resulted in many second-generation species being related to earlier ones, or reviving designs scrapped from Red and Blue.\n[…]\nPokémon Gold and Silver were first revealed at Nintendo Space World, a live trade show event, in 1997. A demo was showcased at Space World, which was not made publicly available again until it was later leaked online in 2018. At this point in the games' development, they had a significantly larger world map than the final game and featured around 41 Pokémon designs that were either removed or replaced when the games were released in 1999.\n[…]\nKayleigh Partleton, in an article for Pocket Tactics, found several of the designs from the generation, including Furret, Scizor, Wobbuffet, Miltank, Snubbull, Entei, and Togepi, as highly favorable and well-crafted. Hayes Madsen, in a retrospective for Pokémon Gold and Silver, regarded the games' designs as among the most creative, citing Smeargle, Hitmontop, Wooper, and Unown as examples of designs that did not feel \"formulaic\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_II",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA segunda geração de Pokémon se passa principalmente na região de Johto, que é baseada na região real de Kansai, no Japão. A segunda geração de Pokémon, diferentemente das gerações subsequentes da série, foi concebida principalmente como uma \"sequência\" da geração anterior, que se concentrava nos jogos Pokémon Red e Pokémon Blue. Isso resultou em muitas espécies da segunda geração relacionadas a espécies anteriores ou na retomada de designs descartados de Red e Blue.\n[…]\nPokémon Gold e Silver foram revelados pela primeira vez no Nintendo Space World, um evento comercial ao vivo, em 1997. Uma demonstração foi exibida no Space World, que não foi disponibilizada publicamente novamente até ser vazada online em 2018. Neste ponto do desenvolvimento dos jogos, eles tinham um mapa-múndi significativamente maior do que o jogo final e apresentavam cerca de 41 designs de Pokémon que foram removidos e substituídos quando os jogos foram lançados em 1999.\n[…]\nUm dos designs mais populares descobertos na versão beta foi a linha evolutiva de Kotora, composta por Kotora, Raitora e uma terceira evolução sem nome. Essa linha recebeu o tipo Elétrico e foi baseada em tigres, com o nome de Kotora significando \"filhote de tigre\" e o de Raitora, \"tigre do trovão\". Descobriu-se que a linha evolutiva de Kotora havia sido descartada tanto na primeira quanto na segunda geração.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Sharpedo",
      "descricao": "Pokémon tubarão dos tipos Água e Sombrio da terceira geração, evolução de Carvanha."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Sharpedo, o tubarão de Hoenn que nada a toda velocidade, junta sharp, afiado, com qual arma naval?",
    "resposta": "Torpedo",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sharpedo_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sharpedo_(Pok%C3%A9mon)",
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
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Camerupt",
      "descricao": "Pokémon dos tipos Fogo e Terrestre da terceira geração, com dois vulcões nas costas, evolução de Numel."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Camerupt carrega dois vulcões nas costas. Além de erupt, entrar em erupção, que animal de corcovas forma o nome dele?",
    "resposta": "Camelo",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Camerupt_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Camerupt_(Pok%C3%A9mon)",
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
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nA Nintendo Life observou em uma retrospectiva que a terceira geração de Pokémon tem uma \"sensação\" muito diferente das duas gerações anteriores, porque quase todos os seus 135 novos Pokémon – exceto Azurill e Wynaut – não têm relação com as das gerações anteriores. Diferente das duas primeiras gerações, dois dos \"Pokémon iniciais\" de Ruby e Sapphire ganham uma digitação secundária em sua forma final, dando a eles uma gama mais ampla de habilidades.\n[…]\nRuby e Sapphire apresentam dois \"Pokémon míticos\" – Jirachi e Deoxys – ambos ficaram disponíveis para coincidir com seus respectivos filmes de anime.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Wynaut",
      "descricao": "Pokémon bebê do tipo Psíquico da terceira geração, forma anterior de Wobbuffet."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Que pokémon bebê, sempre sorridente, apresentado em Hoenn, tem um nome que soa em inglês como a pergunta por que não?",
    "resposta": "Wynaut",
    "distratores": [
      "Azurill",
      "Whismur",
      "Wobbuffet"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Wynaut_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Wynaut_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The third generation (generation III) of the Pokémon franchise features 386 fictional species of creatures and 135 Pokémon introduced to the core video game series in the 2002 Game Boy Advance games Pokémon Ruby and Sapphire, and later in the 2004 game Pokémon Emerald. These games were accompanied by the television series Pokémon Advanced, which aired from November 21, 2002, until August 28, 2003,\n[…]\nNintendo Life noted in a retrospective that the third generation of Pokémon has a very different \"feel\" from the two generations that came before it because almost all of its 135 new Pokémon – save for Azurill and Wynaut – have no relation to those of the previous generations. Ruby and Sapphire features two \"Mythical Pokémon\" – Jirachi and Deoxys – both of which became available to coincide with their respective anime movies.\n[…]\nContrastingly, some designs, including Breloom, Aggron, and the aforementioned Castform were praised for their coolness, with the large variety of unique legendary Pokémon also helping the third generation feel fresh and new. While Ruby and Sapphire were recognized for introducing less memorable designs than their predecessors, designs like Milotic, Salamence, Metagross, Rayquaza, and Blaziken made the overall generation a satisfying supplement to the existing Pokédex.\n[…]\nThe third generation has had its share of well-loved designs. Eighteen years after the release of Ruby and Sapphire, Rayquaza and Gardevoir finished eighth and ninth in 2020's Pokémon of the Year vote, with Flygon, Sceptile, and Blaziken also among the top 30. Rayquaza also finished eighth in a 2016 Japanese poll, with Jirachi and Kyogre among the top 25. A popularity vote on the Pokémon subreddit featured Blaziken at 5th, joined in the top 25 by Gardevoir, Absol, Flygon, and Mudkip."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_III",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA Nintendo Life observou em uma retrospectiva que a terceira geração de Pokémon tem uma \"sensação\" muito diferente das duas gerações anteriores, porque quase todos os seus 135 novos Pokémon – exceto Azurill e Wynaut – não têm relação com as das gerações anteriores. Diferente das duas primeiras gerações, dois dos \"Pokémon iniciais\" de Ruby e Sapphire ganham uma digitação secundária em sua forma final, dando a eles uma gama mais ampla de habilidades.\n[…]\nRuby e Sapphire apresentam dois \"Pokémon míticos\" – Jirachi e Deoxys – ambos ficaram disponíveis para coincidir com seus respectivos filmes de anime.\n[…]\nA recepção aos Pokémon da terceira geração tem sido polarizada. Alex Carlson de Hardcore Gamer escreveram em 2014 que a terceira geração de jogos de Pokémon não foi bem recebida pelos fãs da série, com algumas pessoas chamando a geração de \"a pior da história da série\".\n[…]\nA terceira geração teve sua parcela de designs populares e duradouros. Dezoito anos após o lançamento de Ruby e Sapphire, Rayquaza e Gardevoir terminaram em oitavo e nono lugar na votação de Pokémon do Ano de 2020, com Flygon, Sceptile e Blaziken também entre os 30 melhores. Rayquaza também terminou em oitavo lugar em uma pesquisa japonesa de 2016, com Jirachi e Kyogre entre os 25 melhores.\n[…]\nUma votação de popularidade no subreddit de Pokémon colocou Blaziken em 5º lugar, acompanhado no top 25 por Gardevoir, Absol, Flygon e Mudkip.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Mamoswine",
      "descricao": "Pokémon peludo dos tipos Gelo e Terrestre da quarta geração, evolução de Piloswine."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Mamoswine, o gigante peludo de gelo de Sinnoh, junta swine, porco em inglês, com qual animal pré-histórico?",
    "resposta": "Mamute",
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
    "indice": 13,
    "ancora": {
      "nome": "Rotom",
      "descricao": "Pokémon dos tipos Elétrico e Fantasma da quarta geração, que entra em aparelhos e muda de forma."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Rotom, o fantasma que se enfia em eletrodomésticos, tem um nome que é qual palavra escrita ao contrário?",
    "resposta": "Motor",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pok%C3%A9mon)",
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
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Empoleon",
      "descricao": "Pokémon pinguim dos tipos Água e Aço da quarta geração, evolução final de Piplup, inicial de Sinnoh."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Qual destes pokémon tem no nome uma referência ao imperador francês Napoleão Bonaparte?",
    "resposta": "Empoleon",
    "distratores": [
      "Prinplup",
      "Kingambit",
      "Slowking"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Empoleon_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Empoleon_(Pok%C3%A9mon)",
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
    "indice": 15,
    "ancora": {
      "nome": "Purrloin",
      "descricao": "Pokémon gato do tipo Sombrio da quinta geração, que evolui para Liepard."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O gato Purrloin, de Unova, junta purr, ronronar, com purloin, verbo inglês que significa o quê?",
    "resposta": "Roubar",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Purrloin_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_V_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Purrloin_(Pok%C3%A9mon)",
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
      "nome": "Elgyem",
      "descricao": "Pokémon do tipo Psíquico da quinta geração, número 605 da Pokédex Nacional, de cabeça grande inspirada em alienígenas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Elgyem, de cabeça enorme, tem um nome que soa como LGM, sigla inglesa de little green men. Que seres essa expressão designa?",
    "resposta": "Alienígenas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Elgyem_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Little_green_men"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Elgyem_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Little_green_men",
        "situacao": "ok",
        "texto": "Little green men are stereotypical portrayals of extraterrestrials as little humanoids with green skin and sometimes antennae on their heads.\n[…]\nThe article opens with the comment, \"If there really are 'little green men' out there in space, there are probably also little green women–and sex.\" A cartoon was attached showing two amorous centaur-like male and female aliens with antennae sticking out of their heads. The article also enigmatically states, \"The 'little green men' designation came from Dr. Otto Struve, director of the national radio astronomy observatory, Green Bank, W. Va.\n[…]\nA green-skinned little green man had even appeared in The Flintstones as a recurring character. The Great Gazoo (introduced in Episode 145) typified the representation of a little green man with his short, green stature and helmet with antennae. However, the 1960s also marked a transition in the way people imagined a stereotypical alien. In alien abduction stories they are often small but grey beings and in Arthur C. Clarke's 2001: A Space Odyssey (1968) they are unseen.\n[…]\nThe pro-Russian uniformed \"local self-defence\" forces with camouflage and modern Russian weaponry but no identifying badges or insignia, operating in 2014 during the Russo-Ukrainian War were also called \"Martians\" or \"little green men\" by the locals and the media.\n[…]\nIn 1967, Jocelyn Bell Burnell and Antony Hewish of the University of Cambridge, UK dubbed the first discovered pulsar LGM-1 for \"little green men\" because the regular oscillations of its signal suggested a possible intelligent origin. Its designation was later changed to CP 1919, and is now known as PSR B1919+21."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Zweilous",
      "descricao": "Pokémon dragão de duas cabeças dos tipos Sombrio e Dragão da quinta geração, evolução de Deino e forma anterior de Hydreigon."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Deino tem uma cabeça, Zweilous tem duas e Hydreigon tem três. O nome Zweilous começa com zwei, dois em qual idioma?",
    "resposta": "Alemão",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Zweilous_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_V_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Zweilous_(Pok%C3%A9mon)",
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
    "indice": 18,
    "ancora": {
      "nome": "Greninja",
      "descricao": "Pokémon dos tipos Água e Sombrio, número 658 da Pokédex Nacional."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Greninja, a evolução final do inicial de água de Kalos, junta ninja com grenouille. O que significa essa palavra francesa?",
    "resposta": "Rã",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Greninja_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Greninja"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Greninja_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Greninja",
        "situacao": "ok",
        "texto": "The sixth generation (Generation VI) of the Pokémon franchise features 72 fictional species of creatures introduced to the core video game series in the 2013 Nintendo 3DS games Pokémon X and Y. Some Pokémon in this generation were introduced in animated adaptations of the franchise before X and Y. This generation featured the series' largest graphical overhaul: a shift from two-dimensional sprites\n[…]\nA new type (Fairy) was introduced for the first time since Gold and Silver in 1999, bringing the total to 18. Greater emphasis was placed on making Pokémon species more unique and in-tune with the culture and fauna of Europe, namely France.\n[…]\nDevelopment of Pokémon X and Y began in 2010 and the games were released worldwide on October 12, 2013. Director Junichi Masuda stated the three main themes of the games to be beauty, bonds and evolution. Beauty was the core focus and Masuda felt France to be a prime example of such; he brought a team to the country for study in 2011. With the games taking place in a region based on France (called Kalos), design inspiration stemmed more from European culture (e.g.\n[…]\nIt is speculated by fans that the designs for the Chespin, Fennekin and Froakie evolutionary lines stem from typical role-playing game character classes, such as those in Final Fantasy. Chespin represents the knight, paladin and fighter classes; Fennekin represents the witch, mage and magician classes; and Froakie represents the ninja, thief and rogue classes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VI",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nDesenvolvido de Pokémon X e Y começou em 2010 e os jogos foram lançados em todo o mundo em 12 de outubro de 2013. Diretor Junichi Masuda revelou que os três principais temas de Pokémon X e Y se beleza, vínculos e evolução. A beleza era o foco principal e Masuda considerava a França um excelente exemplo disso; ele trouxe uma equipe para o país para estudar em 2011 Com os jogos ocorrendo em uma região baseada na França (chamada Kalos), a inspiração do design surgiu mais da cultura européia.\n[…]\nEles foram feitos temporariamente para manter o equilíbrio nas batalhas e somente são possíveis quando um Pokémon está segurando sua respectiva Mega Pedra para impedir que os jogadores lhes dêem um item de espera vantajoso diferente. O único Pokémon da Geração VI capaz de Mega Evolução é Diancie. Uma variante do Mega Evolução chamada \"Reversão Primitiva\" foi introduzida em Omega Ruby e Alpha Sapphire; esse mecânico é exclusivo do lendário Pokémon Groudon e Kyogre.\n[…]\nA finalização de seus projetos levou cerca de 18 meses, 3 vezes mais que o normal. O artista de mangá Hitoshi Ariga foi solicitado a ajudar na criação de Pokémon para X e Y; Ariga finalmente projetou dez espécies para os jogos. Especula-se pelos fãs que os designers para o Chespin, Fennekin e Froakie linhas evolutivas derivam de típico classes de personagens de RPG, como aqueles em Final Fantasy.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Flabébé",
      "descricao": "Pokémon do tipo Fada da sexta geração, uma fadinha minúscula que segura uma flor, forma inicial de Floette e Florges."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em Kalos, uma fadinha que segura uma flor tem um nome formado pelas palavras francesas para flor e bebê. Que pokémon é esse?",
    "resposta": "Flabébé",
    "distratores": [
      "Floette",
      "Florges",
      "Comfey"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Flab%C3%A9b%C3%A9_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Flab%C3%A9b%C3%A9_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The sixth generation (Generation VI) of the Pokémon franchise features 72 fictional species of creatures introduced to the core video game series in the 2013 Nintendo 3DS games Pokémon X and Y. Some Pokémon in this generation were introduced in animated adaptations of the franchise before X and Y. This generation featured the series' largest graphical overhaul: a shift from two-dimensional sprites\n[…]\nA new type (Fairy) was introduced for the first time since Gold and Silver in 1999, bringing the total to 18. Greater emphasis was placed on making Pokémon species more unique and in-tune with the culture and fauna of Europe, namely France.\n[…]\nDevelopment of Pokémon X and Y began in 2010 and the games were released worldwide on October 12, 2013. Director Junichi Masuda stated the three main themes of the games to be beauty, bonds and evolution. Beauty was the core focus and Masuda felt France to be a prime example of such; he brought a team to the country for study in 2011. With the games taking place in a region based on France (called Kalos), design inspiration stemmed more from European culture (e.g.\n[…]\nthe legendary trio of Xerneas, Yveltal and Zygarde have their roots in Norse mythology). More focus than usual was placed on giving new Pokémon unique elements for this generation.\n[…]\nAt the request of Masuda, the shapes \"X\" and \"Y\" were used as the framework for the boxart legendary Pokémon: Xerneas and Yveltal. Normally, Sugimori designs the legendary Pokémon by himself; however, he required assistance from designer Atsuko Nishida to create Xerneas and Yveltal. Finalization of their designs took about 18 months, 3 times longer than normal. Manga artist Hitoshi Ariga was requested to assist in creating Pokémon for X and Y; Ariga ultimately designed ten species for the games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VI",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nMaior ênfase foi colocada em tornar as espécies de Pokémon mais únicas e sintonizadas com a cultura e a fauna da Europa, ou seja, a França.\n[…]\nDesenvolvido de Pokémon X e Y começou em 2010 e os jogos foram lançados em todo o mundo em 12 de outubro de 2013. Diretor Junichi Masuda revelou que os três principais temas de Pokémon X e Y se beleza, vínculos e evolução. A beleza era o foco principal e Masuda considerava a França um excelente exemplo disso; ele trouxe uma equipe para o país para estudar em 2011 Com os jogos ocorrendo em uma região baseada na França (chamada Kalos), a inspiração do design surgiu mais da cultura européia.\n[…]\nEles foram feitos temporariamente para manter o equilíbrio nas batalhas e somente são possíveis quando um Pokémon está segurando sua respectiva Mega Pedra para impedir que os jogadores lhes dêem um item de espera vantajoso diferente. O único Pokémon da Geração VI capaz de Mega Evolução é Diancie. Uma variante do Mega Evolução chamada \"Reversão Primitiva\" foi introduzida em Omega Ruby e Alpha Sapphire; esse mecânico é exclusivo do lendário Pokémon Groudon e Kyogre.\n[…]\nA finalização de seus projetos levou cerca de 18 meses, 3 vezes mais que o normal. O artista de mangá Hitoshi Ariga foi solicitado a ajudar na criação de Pokémon para X e Y; Ariga finalmente projetou dez espécies para os jogos. Especula-se pelos fãs que os designers para o Chespin, Fennekin e Froakie linhas evolutivas derivam de típico classes de personagens de RPG, como aqueles em Final Fantasy.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Malamar",
      "descricao": "Pokémon lula dos tipos Sombrio e Psíquico da sexta geração, evolução de Inkay."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome de Malamar, o pokémon de Kalos que hipnotiza as presas, junta mal com qual palavra espanhola, que nomeia o animal que o inspirou?",
    "resposta": "Calamar",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Malamar_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Malamar_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The sixth generation (Generation VI) of the Pokémon franchise features 72 fictional species of creatures introduced to the core video game series in the 2013 Nintendo 3DS games Pokémon X and Y. Some Pokémon in this generation were introduced in animated adaptations of the franchise before X and Y. This generation featured the series' largest graphical overhaul: a shift from two-dimensional sprites\n[…]\nDevelopment of Pokémon X and Y began in 2010 and the games were released worldwide on October 12, 2013. Director Junichi Masuda stated the three main themes of the games to be beauty, bonds and evolution. Beauty was the core focus and Masuda felt France to be a prime example of such; he brought a team to the country for study in 2011. With the games taking place in a region based on France (called Kalos), design inspiration stemmed more from European culture (e.g.\n[…]\nThe titles X and Y, representing the x-axis and y-axis—also reflecting different forms of thinking—were chosen early in development. The simplicity of the names was also related to the simultaneous worldwide release of the games. Designers additionally sought to make the Pokémon names the same in every country whenever possible. Masuda expressed that this effort proved exceptionally difficult as the names have to feel fitting to their physical appearance and not infringe upon any rights.\n[…]\nAt the request of Masuda, the shapes \"X\" and \"Y\" were used as the framework for the boxart legendary Pokémon: Xerneas and Yveltal. Normally, Sugimori designs the legendary Pokémon by himself; however, he required assistance from designer Atsuko Nishida to create Xerneas and Yveltal. Finalization of their designs took about 18 months, 3 times longer than normal. Manga artist Hitoshi Ariga was requested to assist in creating Pokémon for X and Y; Ariga ultimately designed ten species for the games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VI",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nMaior ênfase foi colocada em tornar as espécies de Pokémon mais únicas e sintonizadas com a cultura e a fauna da Europa, ou seja, a França.\n[…]\nDesenvolvido de Pokémon X e Y começou em 2010 e os jogos foram lançados em todo o mundo em 12 de outubro de 2013. Diretor Junichi Masuda revelou que os três principais temas de Pokémon X e Y se beleza, vínculos e evolução. A beleza era o foco principal e Masuda considerava a França um excelente exemplo disso; ele trouxe uma equipe para o país para estudar em 2011 Com os jogos ocorrendo em uma região baseada na França (chamada Kalos), a inspiração do design surgiu mais da cultura européia.\n[…]\nMasuda expressou que esse esforço se mostrou excepcionalmente difícil, pois os nomes devem parecer adequados à aparência física e não infringir nenhum direito. O pedido de Masuda, as formas \"X\" e \"Y\" foram usadas como estrutura para os Pokémon lendários da arte em caixas: Xerneas e Yveltal. Normalmente, Sugimori cria o Pokémon lendário sozinho; no entanto, ele precisou da assistência do designer Atsuko Nishida para criar Xerneas e Yveltal.\n[…]\nA finalização de seus projetos levou cerca de 18 meses, 3 vezes mais que o normal. O artista de mangá Hitoshi Ariga foi solicitado a ajudar na criação de Pokémon para X e Y; Ariga finalmente projetou dez espécies para os jogos. Especula-se pelos fãs que os designers para o Chespin, Fennekin e Froakie linhas evolutivas derivam de típico classes de personagens de RPG, como aqueles em Final Fantasy.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Primarina",
      "descricao": "Pokémon dos tipos Água e Fada, número 730 da Pokédex Nacional."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Primarina, a sereia cantora de Alola, tem um nome que lembra qual expressão italiana para a cantora principal de uma ópera?",
    "resposta": "Prima-dona",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Primarina_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Primarina_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The seventh generation (Generation VII) of the Pokémon franchise features 86 fictional species of collectible creatures called \"Pokémon\" introduced to the core video game series in the 2016 Nintendo 3DS games Pokémon Sun and Moon and the 2017 3DS games Pokémon Ultra Sun and Ultra Moon. Two further species were introduced in a 2018 update to the spin-off mobile game Pokémon Go, as well as the 2018 \n[…]\nFollowing Pokémon X and Y, all Pokémon have been designed by a team of roughly 20 artists, led by Ken Sugimori and Hironobu Yoshida. The events of Sun and Moon take place in the fictional region of Alola, composed entirely of tropical islands. Let's Go, Pikachu! and Let's Go, Eevee! are set in the Kanto region, the same setting as generation one.\n[…]\nPokémon Sun and Moon introduced \"Alolan Forms\" of various generation I Pokémon. These versions are to represent the different microclimates in the Alola region. The Alolan versions of Pokémon like Vulpix and Exeggutor have different appearances and types and were introduced alongside generation VII Pokémon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor, consulte wiki sobre o assunto.\n[…]\nDesde Pokémon X e Y, todos os Pokémon são projetados por uma equipe de todos 20 artistas comandadas por Ken Sugimori e Hironobu Yoshida. Sun e Moon ocorrem na região tropical de Alola, composta inteiramente de ilhas. Let's Go, Pikachu! e Let's Go, Eevee! são definidas na região de Kanto, a mesma configuração da primeira geração.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nPokémon Sun e Moon introduzem \"Formas de Alola\" de vários Pokémon da primeira geração. Essas versões devem representar \"os diferentes microclimas da região de Alola\". As versões de Pokémon em Alola como Vulpix e Exeggutor têm aparências e tipos diferentes e foram introduzidas juntamente com os Pokémon da sétima geração.\n[…]\nDiversas \"Formas de Alola\" de Pokémon da geração I foram introduzidas em Pokémon Sun e Pokémon Moon.",
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
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os guardiões de Alola, como Tapu Koko, levam no nome tapu, palavra polinésia para sagrado ou proibido. Que palavra portuguesa tem a mesma origem?",
    "resposta": "Tabu",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Tapu_Koko_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Tapu_(Polynesian_culture)",
      "https://en.wikipedia.org/wiki/Taboo"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Tapu_Koko_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tapu_(Polynesian_culture)",
        "situacao": "ok",
        "texto": "Tapu is a Polynesian traditional concept denoting something holy or sacred, with \"spiritual restriction\" or \"implied prohibition\"; it involves rules and prohibitions. The English word taboo derives from the latter meaning and dates from Captain James Cook's visit to Tonga in 1777.\n[…]\nThe concept exists in many Polynesian societies, including traditional Māori, Samoan, Kiribati, Rapanui, Tahitian, Hawaiian, and Tongan cultures, in most cases using a recognisably similar word (from Proto-Polynesian *tapu). In Hawaii, a similar concept is known as kapu; /t/ and /k/ are standard allophonic variations in Hawaiian phonology.\n[…]\nThe root also exists outside Polynesian languages, in the broader Austronesian family: e.g. Fijian tabu, Hiw (Vanuatu) toq [tɔkʷ] 'holy, sacred', Mwotlap ne-teq [nɛ-tɛk​͡pʷ] 'cemetery', and others.\n[…]\nWhether Polynesian or not, all modern forms go back to a Proto-Oceanic etymon reconstructed as *tabu [taᵐbu], and whose meaning was “forbidden, off limits; sacred, due to a sentiment of awe before spiritual forces”.\n[…]\nManuhiri/manuwhiri guests or visitors at a Marae are considered tapu until food has touched or passed through their mouths.\n[…]\nNoa, on the other hand, lifts the tapu from the person or the object. Noa is similar to a blessing. Tapu and noa remain part of Māori culture today, although persons today are not subject to the same tapu as that of previous times. A new house today, for example, may have a noa ceremony to remove the tapu, in order to make the home safe before the family moves in.\n[…]\nFrançois, Alexandre (2022). \"Awesome forces and warning signs: Charting the semantic history of *tabu words in Vanuatu\" (PDF). Oceanic Linguistics. 61 (1): 212–255. doi:10.1353/ol.2022.0017. ISSN 1527-9421. S2CID 240387414. Retrieved 2022-07-11."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Taboo",
        "situacao": "ok",
        "texto": "A taboo is a social group's ban, prohibition or avoidance of something (usually an utterance or behavior) based on the group's sense that it is excessively repulsive, offensive, sacred or allowed only for certain people. Such prohibitions are present in virtually all societies. Taboos may be prohibited explicitly, for example within a legal system or religion, or implicitly, for example by social \n[…]\nThe English term taboo comes from tapu in Oceanic languages, particularly Polynesian languages, with such meanings as \"prohibited\" or \"forbidden\". That root tapu is reflected, among others, by Tongan or Māori tapu, and by Hawaiian kapu. Its English use dates to 1777 when the British explorer James Cook visited Tonga, and referred to the Tongans' use of the term taboo for \"any thing that is forbidden to be eaten, or made use of\".\n[…]\nThe term was translated to him as \"consecrated, inviolable, forbidden, unclean or cursed\". Tapu is usually treated as a unitary, non-compound word inherited from Proto-Polynesian *tapu. It also exists in other Oceanic languages outside Polynesian, such as Fijian tabu, or Hiw (Vanuatu) toq.\n[…]\nThose words descend from an etymon *tabu in the ancestral Proto-Oceanic language, whose meaning was reconstructed as \"forbidden, off limits; sacred, due to a sentiment of awe before spiritual forces\".\n[…]\nIn its current use in Tongan, the word tapu means \"sacred\" or \"holy\", often in the sense of being restricted or protected by custom or law. On the main island, the word is often appended to the end of \"Tonga\" as Tongatapu, here meaning \"Sacred South\" rather than \"Forbidden South\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tapu",
        "situacao": "ok",
        "texto": "Tapu, tabu ou kapu é um conceito tradicional polinésio que denota que algo é santo ou sagrado, com \"restrição espiritual\" ou \"proibição implícita\"; que envolve regras e proibições. O palavra em português \"tabu\" deriva deste significado, trazido à Europa após a visita do capitão James Cook, em 1777, a Tonga.\n[…]\nO conceito existe em muitas sociedades, incluindo a de Fiji, Maori, Samoa, Rapanui, Taitiana, havaiana, e as culturas de Tonga, na maioria dos casos, utilizando uma palavra reconhecidamente semelhante.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Bruxish",
      "descricao": "Pokémon peixe dos tipos Água e Psíquico da sétima geração, de dentes à mostra e cores vivas, da região de Alola."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O peixe Bruxish, de Alola, tem o nome derivado de bruxism, um termo médico. Que mania esse termo designa?",
    "resposta": "Ranger os dentes",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Bruxish_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Bruxism"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bruxish_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bruxism",
        "situacao": "ok",
        "texto": "Bruxism is excessive teeth grinding or jaw clenching. It is an oral parafunctional activity; i.e., it is unrelated to normal function such as eating or talking. Bruxism is a common behavior; the global prevalence of bruxism (both sleep and awake) is approximately 22%. Several symptoms are commonly associated with bruxism, including aching jaw muscles, headaches, hypersensitive teeth, tooth wear, a\n[…]\nMost modern sources state that there is no relationship, or at most a minimal relationship, between bruxism and occlusal factors. The findings of one study, which used self-reported tooth grinding rather than clinical examination to detect bruxism, suggested that there may be more of a relationship between occlusal factors and bruxism in children. However, the role of occlusal factors in bruxism cannot be completely discounted due to insufficient evidence and problems with the design of studies.\n[…]\nMacedo, et al.) found \"insufficient evidence on the effectiveness of pharmacotherapy for the treatment of sleep bruxism.\"\n[…]\nIn David Lynch's 1977 film Eraserhead, Henry Spencer's partner (\"Mary X\") is shown tossing and turning in her sleep, and snapping her jaws together violently and noisily, depicting sleep bruxism. In Stephen King's 1988 novel The Tommyknockers, the sister of central character Bobbi Anderson also had bruxism. In the 2000 film Requiem for a Dream, the character of Sara Goldfarb (Ellen Burstyn) begins taking an amphetamine-based diet pill and develops bruxism.\n[…]\nIn rave culture, recreational use of ecstasy is often reported to cause bruxism. Among people who have taken ecstasy, while dancing it is common to use pacifiers, lollipops or chewing gum in an attempt to reduce the damage to the teeth and to prevent jaw pain. Bruxism is thought to be one of the contributing factors in \"meth mouth\", a condition potentially associated with long term methamphetamine use."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bruxismo",
        "situacao": "ok",
        "texto": "O bruxismo ou briquismo (do grego βρυγμός [brýkhmós], \"ranger os dentes\", pronúncia brucsismo) é um hábito parafuncional que leva o paciente a ranger os dentes de forma rítmica durante o sono ou, menos prejudicialmente, durante o dia. A prevalência global do bruxismo (do sono e em vigília) é de 22,22%. A prevalência global do bruxismo do sono é de 21% e do bruxismo em vigília é de 23%. A ocorrênci\n[…]\nRanger os dentes à noite e apertá-los durante o dia formam um problema progressivo que o paciente frequentemente não nota e só é percebido se prestar atenção na própria tensão muscular ou se o rangido noturno é escutado por outros, normalmente parentes próximos como pais, irmãos e esposos.\n[…]\nO bruxismo diurno, que é caracterizado por uma atividade semivoluntária da mandíbula de apertar os dentes enquanto o indivíduo se encontra acordado, onde geralmente o ranger dos dentes está ligado a algum hábito ou tique, diferente do bruxismo noturno que é um ato inconsciente, enquanto o indivíduo dorme.\n[…]\nOs especialistas definiram o bruxismo como uma atividade repetitiva dos músculos da mandíbula, caracterizada pelo apertar ou ranger dos dentes e/ou pela tensão ou protrusão mandibular. O bruxismo ocorre em dois períodos distintos do dia: durante o sono (bruxismo do sono) e durante o estado de vigília (bruxismo de vigília).\n[…]\nCêntrico — Ato de apertar os dentes.\n[…]\nQuanto ao bruxismo em vigília, o paciente deve ser aconselhado a criar o hábito de desencostar os dentes.\n[…]\nPara Inês Horie, é importante unir o trabalho do dentista com outros profissionais, como psicólogos e terapeutas. Porém, existem outros meios para tratar os primeiros sintomas do bruxismo. “O mais conhecido é a placa oclusal, um aparelho para estabilizar e melhorar a função das articulações da boca; reabilitação dos dentes prejudicados; aparelhos ortodônticos; entre outros”, completa.\n[…]\nRanger de dentes\n[…]\nInfográfico sobre Bruxismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Tsareena",
      "descricao": "Pokémon do tipo Planta da sétima geração, de pernas longas e coroa de folhas, evolução final de Bounsweet."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Czarina, o título das imperatrizes da Rússia, inspirou o nome de qual pokémon de Alola, de pernas longas e coroa de folhas?",
    "resposta": "Tsareena",
    "distratores": [
      "Steenee",
      "Lurantis",
      "Comfey"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Tsareena_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Tsareena_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The seventh generation (Generation VII) of the Pokémon franchise features 86 fictional species of collectible creatures called \"Pokémon\" introduced to the core video game series in the 2016 Nintendo 3DS games Pokémon Sun and Moon and the 2017 3DS games Pokémon Ultra Sun and Ultra Moon. Two further species were introduced in a 2018 update to the spin-off mobile game Pokémon Go, as well as the 2018 \n[…]\nFollowing Pokémon X and Y, all Pokémon have been designed by a team of roughly 20 artists, led by Ken Sugimori and Hironobu Yoshida. The events of Sun and Moon take place in the fictional region of Alola, composed entirely of tropical islands. Let's Go, Pikachu! and Let's Go, Eevee! are set in the Kanto region, the same setting as generation one.\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as exposure to specific items. Each Pokémon have one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading with other Trainers to obtain individuals from all Pokémon species.\n[…]\nPokémon Sun and Moon introduced \"Alolan Forms\" of various generation I Pokémon. These versions are to represent the different microclimates in the Alola region. The Alolan versions of Pokémon like Vulpix and Exeggutor have different appearances and types and were introduced alongside generation VII Pokémon.\n[…]\nAlex Hern of The Guardian suggested that the developers likely decided to redesign various generation I Pokémon because, according to him, \"fan connection with the original 150 Pokémon is as strong as it ever was, the number of people who can tell a Pancham from a Swirlix is much smaller\".\n[…]\nVarious \"Alolan Forms\" of generation I Pokémon were introduced in Pokémon Sun and Moon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor, consulte wiki sobre o assunto.\n[…]\nDesde Pokémon X e Y, todos os Pokémon são projetados por uma equipe de todos 20 artistas comandadas por Ken Sugimori e Hironobu Yoshida. Sun e Moon ocorrem na região tropical de Alola, composta inteiramente de ilhas. Let's Go, Pikachu! e Let's Go, Eevee! são definidas na região de Kanto, a mesma configuração da primeira geração.\n[…]\nPokémon Go é um jogo móvel de realidade aumentada que usa o GPS e as funções da câmera no smartphone do jogador para exibir Pokémon selvagens no ambiente ao redor do jogador.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nPokémon Sun e Moon introduzem \"Formas de Alola\" de vários Pokémon da primeira geração. Essas versões devem representar \"os diferentes microclimas da região de Alola\". As versões de Pokémon em Alola como Vulpix e Exeggutor têm aparências e tipos diferentes e foram introduzidas juntamente com os Pokémon da sétima geração.\n[…]\nAlex Hern de The Guardian sugeriram que os desenvolvedores provavelmente decidiram redesenhar vários Pokémons da primeira geração porque, segundo ele, \"a conexão dos fãs com os 150 Pokémon originais é tão forte, quanto sempre foi [enquanto] o número de pessoas que podem dizer a um Pancham para Swirlix é muito menor.\"\n[…]\nDiversas \"Formas de Alola\" de Pokémon da geração I foram introduzidas em Pokémon Sun e Pokémon Moon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Golisopod",
      "descricao": "Pokémon crustáceo dos tipos Inseto e Água da sétima geração, evolução de Wimpod."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Qual pokémon de Alola, um crustáceo guerreiro de garras enormes, tem o nome inspirado no gigante bíblico Golias?",
    "resposta": "Golisopod",
    "distratores": [
      "Wimpod",
      "Kingler",
      "Crabominable"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Golisopod_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Golisopod_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The seventh generation (Generation VII) of the Pokémon franchise features 86 fictional species of collectible creatures called \"Pokémon\" introduced to the core video game series in the 2016 Nintendo 3DS games Pokémon Sun and Moon and the 2017 3DS games Pokémon Ultra Sun and Ultra Moon. Two further species were introduced in a 2018 update to the spin-off mobile game Pokémon Go, as well as the 2018 \n[…]\nFollowing Pokémon X and Y, all Pokémon have been designed by a team of roughly 20 artists, led by Ken Sugimori and Hironobu Yoshida. The events of Sun and Moon take place in the fictional region of Alola, composed entirely of tropical islands. Let's Go, Pikachu! and Let's Go, Eevee! are set in the Kanto region, the same setting as generation one.\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as exposure to specific items. Each Pokémon have one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading with other Trainers to obtain individuals from all Pokémon species.\n[…]\nPokémon Sun and Moon introduced \"Alolan Forms\" of various generation I Pokémon. These versions are to represent the different microclimates in the Alola region. The Alolan versions of Pokémon like Vulpix and Exeggutor have different appearances and types and were introduced alongside generation VII Pokémon.\n[…]\nAlex Hern of The Guardian suggested that the developers likely decided to redesign various generation I Pokémon because, according to him, \"fan connection with the original 150 Pokémon is as strong as it ever was, the number of people who can tell a Pancham from a Swirlix is much smaller\".\n[…]\nVarious \"Alolan Forms\" of generation I Pokémon were introduced in Pokémon Sun and Moon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor, consulte wiki sobre o assunto.\n[…]\nDesde Pokémon X e Y, todos os Pokémon são projetados por uma equipe de todos 20 artistas comandadas por Ken Sugimori e Hironobu Yoshida. Sun e Moon ocorrem na região tropical de Alola, composta inteiramente de ilhas. Let's Go, Pikachu! e Let's Go, Eevee! são definidas na região de Kanto, a mesma configuração da primeira geração.\n[…]\nPokémon Go é um jogo móvel de realidade aumentada que usa o GPS e as funções da câmera no smartphone do jogador para exibir Pokémon selvagens no ambiente ao redor do jogador.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nPokémon Sun e Moon introduzem \"Formas de Alola\" de vários Pokémon da primeira geração. Essas versões devem representar \"os diferentes microclimas da região de Alola\". As versões de Pokémon em Alola como Vulpix e Exeggutor têm aparências e tipos diferentes e foram introduzidas juntamente com os Pokémon da sétima geração.\n[…]\nAlex Hern de The Guardian sugeriram que os desenvolvedores provavelmente decidiram redesenhar vários Pokémons da primeira geração porque, segundo ele, \"a conexão dos fãs com os 150 Pokémon originais é tão forte, quanto sempre foi [enquanto] o número de pessoas que podem dizer a um Pancham para Swirlix é muito menor.\"\n[…]\nDiversas \"Formas de Alola\" de Pokémon da geração I foram introduzidas em Pokémon Sun e Pokémon Moon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Copperajah",
      "descricao": "Pokémon elefante do tipo Aço da oitava geração, de pele cor de cobre, evolução de Cufant."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O elefante de cobre Copperajah, de Galar, traz no nome qual título dos antigos príncipes da Índia?",
    "resposta": "Marajá",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Copperajah_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Copperajah_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The eighth generation (Generation VIII) of the Pokémon franchise features 96 titular species of creatures introduced to the core video game series, including 89 in the 2019 Nintendo Switch games Pokémon Sword and Shield as of version 1.3.0 and 7 further species introduced in the 2022 Nintendo Switch game Pokémon Legends: Arceus. The temporary Dynamax and Gigantamax transformations were also introd\n[…]\nThe development of Pokémon Sword and Shield began in 2016, immediately following the development period of Pokémon Sun and Moon. The conceptual phase lasted approximately a year, and the debugging process continued into 2019. With the Galar region based in Great Britain, some of the native Pokémon draw inspiration from British fauna, folklore, and mythology."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VIII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nDesenvolvimento de Pokémon Sword e Shield começou em 2016, imediatamente após o período de desenvolvimento de Pokémon Sun e Moon. A fase conceitual durou aproximadamente um ano e o processo de depuração continuou em 2019. Com a região de Galar, baseada na Grã-Bretanha, os Pokémon nativos inspiram-se na fauna, folclore e mitologia britânico. Os Pokémon lendários Zacian e Zamazenta são criaturas parecidas com lobos, inspirando-se em lobos que frequentemente aparecem na mitologia britânica.\n[…]\nComo na geração anterior, versões redesenhadas de Pokémon lançados anteriormente (\"Formas de Galar\" e \"Formas de Hisui\") foram incluídas ao lado de novas criaturas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Drednaw",
      "descricao": "Pokémon tartaruga mordedora dos tipos Água e Pedra da oitava geração, evolução de Chewtle."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Os encouraçados britânicos chamados dreadnought deram nome a qual tartaruga mordedora de Galar?",
    "resposta": "Drednaw",
    "distratores": [
      "Chewtle",
      "Carracosta",
      "Torkoal"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Drednaw_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Drednaw_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The eighth generation (Generation VIII) of the Pokémon franchise features 96 titular species of creatures introduced to the core video game series, including 89 in the 2019 Nintendo Switch games Pokémon Sword and Shield as of version 1.3.0 and 7 further species introduced in the 2022 Nintendo Switch game Pokémon Legends: Arceus. The temporary Dynamax and Gigantamax transformations were also introd\n[…]\nThe development of Pokémon Sword and Shield began in 2016, immediately following the development period of Pokémon Sun and Moon. The conceptual phase lasted approximately a year, and the debugging process continued into 2019. With the Galar region based in Great Britain, some of the native Pokémon draw inspiration from British fauna, folklore, and mythology."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VIII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nDesenvolvimento de Pokémon Sword e Shield começou em 2016, imediatamente após o período de desenvolvimento de Pokémon Sun e Moon. A fase conceitual durou aproximadamente um ano e o processo de depuração continuou em 2019. Com a região de Galar, baseada na Grã-Bretanha, os Pokémon nativos inspiram-se na fauna, folclore e mitologia britânico. Os Pokémon lendários Zacian e Zamazenta são criaturas parecidas com lobos, inspirando-se em lobos que frequentemente aparecem na mitologia britânica.\n[…]\nComo na geração anterior, versões redesenhadas de Pokémon lançados anteriormente (\"Formas de Galar\" e \"Formas de Hisui\") foram incluídas ao lado de novas criaturas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Fuecoco",
      "descricao": "Pokémon crocodilo do tipo Fogo da nona geração, inicial de fogo de Paldea."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Fuecoco, do inicial crocodilo de Paldea, junta coco, de cocodrilo, com qual palavra espanhola?",
    "resposta": "Fuego (fogo)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Fuecoco_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IX_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Fuecoco_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IX_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The ninth generation (Generation IX) of the Pokémon franchise features 120 titular species of creatures introduced to the core video game series in the Nintendo Switch games Pokémon Scarlet and Violet. The first Pokémon of the generation were revealed on 27 February 2022 in a Pokémon Presents livestream presentation. Scarlet and Violet were released on 18 November 2022.\n[…]\nPokémon Scarlet and Violet take place in Paldea, which is heavily based on Spain, as well as other areas in the Iberian Peninsula, with the game's DLC expansions The Teal Mask and The Indigo Disk taking place in the Kitakami region and the Blueberry Academy, respectively. Kitakami is based on Japan, while the Blueberry Academy is a school environment set in the Unova region, the main location of the 2010 games Pokémon Black and White.\n[…]\nHe described the individuality of the designs and how each of the designs helped build Paldea's culture, stating that it was \"the most holistic approach to Pokémon design we've seen in decades.\" In a discussion among Nintendo Life staff about the best designs in the generation, the group highlighted many Pokémon, including Glimmora, Tandemaus, and Charcadet."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_IX",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nPokémon Scarlet e Violet se passa em Paldea, que é fortemente inspirada na Espanha, assim como em outras áreas da Península Ibérica, com as expansões DLC do jogo The Teal Mask e The Indigo Disk se passando na região de Kitakami. and the Blueberry Academy, respectivamente. Kitakami é baseado no Japão, enquanto o Blueberry Academy é um ambiente escolar situado na região de Unova, o principal local dos jogos de 2010 Pokémon Black e White.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Lechonk",
      "descricao": "Pokémon porquinho do tipo Normal da nona geração, da região de Paldea, que evolui para Oinkologne."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em Paldea, um porquinho tem o nome tirado de lechón, palavra espanhola para leitão. Que pokémon é esse?",
    "resposta": "Lechonk",
    "distratores": [
      "Oinkologne",
      "Grumpig",
      "Spoink"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lechonk_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IX_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lechonk_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IX_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The ninth generation (Generation IX) of the Pokémon franchise features 120 titular species of creatures introduced to the core video game series in the Nintendo Switch games Pokémon Scarlet and Violet. The first Pokémon of the generation were revealed on 27 February 2022 in a Pokémon Presents livestream presentation. Scarlet and Violet were released on 18 November 2022.\n[…]\nPokémon Scarlet and Violet take place in Paldea, which is heavily based on Spain, as well as other areas in the Iberian Peninsula, with the game's DLC expansions The Teal Mask and The Indigo Disk taking place in the Kitakami region and the Blueberry Academy, respectively. Kitakami is based on Japan, while the Blueberry Academy is a school environment set in the Unova region, the main location of the 2010 games Pokémon Black and White.\n[…]\nJoe Parlock of TheGamer praised the sleek designs of the starters and the designs of several other Pokémon, including Smoliv, Fidough, Koraidon, and Miraidon.\n[…]\nHe described the individuality of the designs and how each of the designs helped build Paldea's culture, stating that it was \"the most holistic approach to Pokémon design we've seen in decades.\" In a discussion among Nintendo Life staff about the best designs in the generation, the group highlighted many Pokémon, including Glimmora, Tandemaus, and Charcadet.\n[…]\nWriter Kate Gray praised the \"weirder\" designs of generation IX, including Tandemaus and several species based around the concept of convergent evolution, while writer Alan Hagues thought that many of the middle and final evolutions had appealing designs, and that the generation overall had simple yet strong art design. Numerous individual designs have had their designs positively highlighted by critics, such as Grafaiai, Greavard, Quaquaval, Fidough, and Lechonk."
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
    "indice": 30,
    "ancora": {
      "nome": "Scovillain",
      "descricao": "Pokémon pimenta dos tipos Planta e Fogo da nona geração, evolução de Capsakid."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Que pokémon de Paldea junta villain, vilão em inglês, com o nome da escala que mede a ardência das pimentas?",
    "resposta": "Scovillain",
    "distratores": [
      "Capsakid",
      "Grimmsnarl",
      "Brambleghast"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Scovillain_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IX_Pok%C3%A9mon",
      "https://en.wikipedia.org/wiki/Scoville_scale"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Scovillain_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IX_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The ninth generation (Generation IX) of the Pokémon franchise features 120 titular species of creatures introduced to the core video game series in the Nintendo Switch games Pokémon Scarlet and Violet. The first Pokémon of the generation were revealed on 27 February 2022 in a Pokémon Presents livestream presentation. Scarlet and Violet were released on 18 November 2022.\n[…]\nPokémon Scarlet and Violet take place in Paldea, which is heavily based on Spain, as well as other areas in the Iberian Peninsula, with the game's DLC expansions The Teal Mask and The Indigo Disk taking place in the Kitakami region and the Blueberry Academy, respectively. Kitakami is based on Japan, while the Blueberry Academy is a school environment set in the Unova region, the main location of the 2010 games Pokémon Black and White.\n[…]\nJoe Parlock of TheGamer praised the sleek designs of the starters and the designs of several other Pokémon, including Smoliv, Fidough, Koraidon, and Miraidon.\n[…]\nHe described the individuality of the designs and how each of the designs helped build Paldea's culture, stating that it was \"the most holistic approach to Pokémon design we've seen in decades.\" In a discussion among Nintendo Life staff about the best designs in the generation, the group highlighted many Pokémon, including Glimmora, Tandemaus, and Charcadet.\n[…]\nAna Diaz, writing for Polygon, believed that many species, most notably Flamigo, Palafin, and Maushold, had unique and powerful traits in gameplay. She hoped that they would allow for a more fun competitive environment for players. Several Pokémon, such as Annihilape, Palafin, Flutter Mane, Iron Bundle, and Houndstone, ended up being particularly powerful in popular fan-run competitive formats."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Scoville_scale",
        "situacao": "ok",
        "texto": "The Scoville scale is a measurement of spiciness of chili peppers and other substances, recorded in Scoville heat units (SHU). It is based on the concentration of capsaicinoids, among which capsaicin is the predominant component.\n[…]\nThis problem can be overcome by stating the water content along with the Scoville value. One way to do so is the \"D-value\", defined as total mass divided by dry mass.\n[…]\nThe class of compounds causing pungency in plants such as chili peppers is called capsaicinoids, which display a linear correlation between concentration and Scoville scale, and may vary in content during ripening. Capsaicin is the major capsaicinoid in chili peppers.\n[…]\nThe Scoville Heat Unit may be used to express the approximate pungency of other, unrelated TRPV1 agonists, sometimes with extrapolation for much hotter compounds. One such substance is resiniferatoxin, an alkaloid present in the sap of some species of Euphorbia plants (spurges). Since it is 1,000 times as hot as capsaicin, it would have a Scoville scale rating of 16 billion. In the table below, non-capsaicinoid compounds are italicized.\n[…]\nThe ratings for piperine (150,000 SHU) and gingerol (60,000 SHU) for example are comparative estimates and are not official Scoville ratings. While the ratings are expressed in Scoville Heat Units (SHU), they do not technically belong on the official Scoville scale because the scale is scientifically designed and defined exclusively for capsaicinoids found in chili peppers."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_IX",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nPokémon Scarlet e Violet se passa em Paldea, que é fortemente inspirada na Espanha, assim como em outras áreas da Península Ibérica, com as expansões DLC do jogo The Teal Mask e The Indigo Disk se passando na região de Kitakami. and the Blueberry Academy, respectivamente. Kitakami é baseado no Japão, enquanto o Blueberry Academy é um ambiente escolar situado na região de Unova, o principal local dos jogos de 2010 Pokémon Black e White.\n[…]\nScarlet e Violet também apresentam um mecanismo especial conhecido como \"Terastallização\" que permitem que o Pokémon do jogador mude de tipo durante a batalha. O jogo Pokémon Legends: Z-A se passa na região de Kalos, o cenário principal dos jogos de 2013 Pokémon X e Y. Ele também marcou o retorno da mecânica de \"Mega Evolução\", que foi introduzida pela primeira vez nesses jogos; Mega Evoluções são formas poderosas de Pokémon que podem ser usadas durante as batalhas Pokémon.",
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
