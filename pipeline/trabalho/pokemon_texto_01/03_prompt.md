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
      "nome": "Hitmonlee",
      "descricao": "Pokémon lutador da primeira geração, número 106 da Pokédex Nacional, conhecido pelos chutes, evolução do Tyrogue."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Hitmonlee, o pokémon lutador famoso pelos chutes, tem o nome inspirado em qual astro dos filmes de artes marciais?",
    "resposta": "Bruce Lee",
    "distratores": [
      "Jackie Chan",
      "Jet Li",
      "Chuck Norris"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Hitmonlee_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Hitmonlee_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan.\n[…]\nWhile some Pokémon have been attributed to certain developers over the years, such as Atsuko Nishida for Pikachu and Motofumi Fujiwara for Eevee and its evolutions, Game Freak has avoided attributing many Pokémon to particular individuals to keep a sense of all the developers being involved in their creation.\n[…]\nDuring development they ran into issues with digital cartridge space, and many Pokémon were removed. Specifically, several Pokémon that had a three-stage evolution line were instead changed to evolve only once, resulting in a planned final evolution for Pikachu called \"Gorochu\" being removed from the final game.\n[…]\nWhen the games were localized for English-speaking audiences as Red and Blue, Nintendo of America gave the various Pokémon species \"clever and descriptive names\" related to their appearance or features as a means to make them more relatable to American children. This resulted in several pop-culture references being worked into the character's names, such as Hitmonchan and Hitmonlee, who are references to martial arts actors Jackie Chan and Bruce Lee respectively.\n[…]\nOverseen by translator Nob Ogasawara, he voiced concern over some of the choices presented, specifically \"Barrierd\", which was renamed to \"Mr. Mime\" based on its masculine appearance. Ogasawara wanted to avoid gendered, binary names for the Pokémon species in the event genders were introduced for them in later titles, a concern proven valid with the sequel titles Pokémon Gold and Silver."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nEmbora concebido como um esforço conjunto de vários desenvolvedores da Game Freak, os designs e artes finais foram feitos por Sugimori.\n[…]\nDurante o desenvolvimento, surgiram problemas com o espaço nos cartuchos digitais, e muitos Pokémon foram removidos. Especificamente, vários Pokémon que possuíam uma linha evolutiva de três estágios foram alterados para evoluir apenas uma vez, resultando na remoção da evolução final planejada para Pikachu, chamada \"Gorochu\", do jogo final.\n[…]\nQuando os jogos foram localizados para o público de língua inglesa como Red e Blue, a Nintendo of America deu às várias espécies de Pokémon \"nomes inteligentes e descritivos\" relacionados à sua aparência ou características, como forma de torná-los mais identificáveis ​​para as crianças americanas.\n[…]\nIsso resultou em diversas referências à cultura pop incorporadas aos nomes dos personagens, como Hitmonchan e Hitmonlee, que são referências aos atores de artes marciais Jackie Chan e Bruce Lee, respectivamente. Supervisionado pelo tradutor Nob Ogasawara, ele expressou preocupação com algumas das escolhas apresentadas, especificamente \"Barrierd\", que foi renomeado para \"Mr. Mime\" com base em sua aparência masculina.\n[…]\nOgasawara queria evitar nomes binários e com gênero definido para as espécies de Pokémon, caso gêneros fossem introduzidos para eles em títulos posteriores, uma preocupação que se provou válida com os títulos subsequentes Pokémon Gold e Silver.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Ditto",
      "descricao": "Pokémon do tipo Normal da primeira geração, uma massa roxa capaz de se transformar em qualquer outro pokémon."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Ditto, o pokémon que se transforma em qualquer outro, tem um nome que é uma palavra inglesa. O que ela significa?",
    "resposta": "O mesmo (idem)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ditto_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Ditto_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ditto_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ditto_(Pok%C3%A9mon)",
        "situacao": "ok",
        "texto": "Ditto ( ), known in Japan as Metamon (Japanese: メタモン), is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise. First introduced in the video games Pokémon Red and Blue, it was created by the design team as a tribute to the pop culture yellow smiley face ideogram, and its design finalized by Ken Sugimori.\n[…]\nWhile in a 2011 interview with Andy Eddy for @Gamer magazine, Game Freak's staff described Ditto as \"the weirdest Pokémon\" in the franchise, the character has also seen significant popularity among the developers. Franchise creator Satoshi Tajiri revealed in a 1997 interview with Famimaga 64 that he played a customized version of Blue featuring stickered art of Ditto attempting to transform into fellow Pokémon Bulbasaur, Squirtle and Charmander simultaneously, illustrated by Sugimori.\n[…]\nSince its introduction, Ditto has been featured on multiple bits of merchandise, ranging from capsule toys to bean bag chairs. In 2016, The Pokémon Company started selling stuffed toys based on Ditto transformed as other Pokémon but retaining Ditto's eyes and mouth. In 2022, The Pokémon Company released peel-able cards for the trading card game that showcased Ditto transformed as another Pokémon, with a sticker that could be peeled off to reveal the actual Ditto card underneath.\n[…]\nHowever, James Stephanie Sterling in an article for Destructoid criticized Ditto's design as \"totally forgettable, not worth mentioning\".\n[…]\nEarly on, a popular fan theory arose that Ditto was a \"failed clone\" of another Pokémon, Mew. Originating on social media platform Reddit in 2010, the theory was proposed due to their similar traits, such as both learning the move Transform, and Mew's history of being cloned in the franchise's lore.\n[…]\nDitto  at Bulbapedia, a Pokémon wiki\n[…]\nDitto on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ditto",
        "situacao": "ok",
        "texto": "A franquia Pokémon gira em torno de 1028 espécies fictícias de monstros colecionáveis, cada um com designs e habilidades únicas. Concebido por Satoshi Tajiri no início de 1989, os Pokémon são criaturas que habitam o mundo fictício Pokémon. Os projetos para a multiplicidade de espécies podem inspirar-se em qualquer coisa como animais, plantas, criaturas mitológicas e até objetos inanimados.\n[…]\nO conceito do universo Pokémon, tanto nos jogos eletrônicos quanto no mundo ficcional geral dos Pokémon, decorre principalmente do passatempo infantil de Tajiri na coleta de insetos. Outras influências no conceito incluem Ultraman, anime e jogando jogos eletrônicos em geral. Ao longo de sua infância, Tajiri viu sua cidade rural, cheia de natureza (Machida, Tóquio), se transformar em um centro urbano.\n[…]\nDiferentemente da evolução normal, Mega Evolução e Reversão Primitiva duram apenas a duração de uma batalha, com o Pokémon retornando à sua forma normal no final. Quarenta e oito Pokémon são capazes de sofrer Mega Evolução ou Reversão Primitiva a partir do lançamento de Sun e Moon. Por outro lado, algumas espécies como Castform, Rotom, Unown e Lycanroc sofrem alterações de forma que podem fornecer lustres estatísticos ou alterar e alterações de tipo, mas não são consideradas novas espécies.\n[…]\nOs designs de Pokémon são frequentemente muito análogos às criaturas da vida real, mas também abrangem objetos inanimados e inspirações folclóricas. Diretor Junichi Masuda e designer gráfico Takao Unno afirmaram que a inspiração para os designs de Pokémon pode vir de qualquer coisa. A variedade de animais e cultura em todo o mundo fornece a base para inúmeras ideias a serem incorporadas à franquia. O ambiente em que um Pokémon viveria é levado em consideração quando eles são projetados.\n[…]\n«Serebii Net» (em inglês)\n[…]\n«Pokédex oficial de Pokémon» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Gengar",
      "descricao": "Pokémon dos tipos Fantasma e Veneno, número 94 da Pokédex Nacional."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do fantasma Gengar vem de uma palavra alemã que designa o duplo sombrio de uma pessoa. Que palavra é essa?",
    "resposta": "Doppelgänger",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Gengar"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gengar",
        "situacao": "ok",
        "texto": "Gengar ( ; Japanese: ゲンガー, Hepburn: Gengā) is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise. First introduced in the video games Pokémon Red and Blue, it was created by Ken Sugimori, and has appeared in multiple games including Pokémon GO and the Pokémon Trading Card Game, as well as various merchandise related to the franchise.\n[…]\nStanding 4 feet 11 inches (150 cm) tall, Gengar has a round purple body, short arms and legs, two red eyes, and a perpetual toothy grin. Along its back are multiple spikes, ending in a small tail. Gengar's design went through multiple iterations, with its body changed to a solid color, while its teeth were changed from singular fangs to a long solid row of teeth.\n[…]\nCreated by then-lead Pokémon designer James Turner, while it retains elements similar to is original design its enlarged body is now partially submerged into the ground with its open mouth having a swirling vortex instead. Meanwhile, its arms are lengthened, and extend from the ground on both sides of it. The shiny variants of both are completely different from the base Gengar's design, making their bodies appear mostly white while their eyes become black.\n[…]\nRobert Grosso of TechRaptor praised their \"sinister\" design as one of the best of the original Pokémon games, feeling its Cheshire Cat-like grin and red eyes embodied the series more \"malign nature\". He further called it \"simple done right\", noting a resemblance to a human shadow and an iconic face, which he felt helped fit what he saw as a doppelgänger design philosophy. He also found that Gengar was \"well-designed from every facet of its being\".\n[…]\nZack Zwiezen of Kotaku described Gengar as a great design, elaborating \"It's simple, yet not boring or generic. Gengar is one of my favorite gen 1 designs\".\n[…]\nGengar  at Bulbapedia, a Pokémon wiki\n[…]\nGengar on Pokemon.com"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Kanto",
      "descricao": "Região fictícia dos primeiros jogos Pokémon, Red, Green e Blue, onde começa a jornada de Ash no anime."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Kanto, as cidades chamadas em inglês Pallet, Viridian, Cerulean e Vermilion seguem um padrão nos nomes. Elas se referem a quê?",
    "resposta": "Cores",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kanto",
      "https://bulbapedia.bulbagarden.net/wiki/Pallet_Town"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kanto",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pallet_Town",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Professor Carvalho",
      "descricao": "Pesquisador pokémon de Kanto, que entrega o primeiro pokémon ao jogador nos jogos Red e Blue e a Ash no anime."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No original em inglês, os professores pokémon se chamam Oak, Elm, Birch e Rowan. De onde vêm esses nomes?",
    "resposta": "De árvores",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Professor",
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Oak"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Professor",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Oak",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Equipe Rocket",
      "descricao": "Organização criminosa da franquia Pokémon, representada no anime pela dupla Jessie e James e pelo Meowth falante."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No anime, a dupla de vilões da Equipe Rocket tem nomes que, juntos, homenageiam qual fora da lei do Velho Oeste americano?",
    "resposta": "Jesse James",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Jessie",
      "https://en.wikipedia.org/wiki/Team_Rocket"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jessie",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Team_Rocket",
        "situacao": "ok",
        "texto": "Team Rocket (Japanese: ロケット団, Hepburn: Roketto-dan; Japanese: [ɾo̞ke̞t̚to̞ dã̠ɴ]) is a fictional crime syndicate in the Pokémon franchise. Team Rocket is the primary antagonist in the original Pokémon video games Red, Green, and Blue, as well as in the long-running Pokémon anime TV-series. In the latter, Team Rocket is primarily represented through the trio of characters Jessie, James, and Meowth,\n[…]\nIn the long-running Pokémon anime series, a trio of Team Rocket grunts Jessie (ムサシ, Musashi), James (コジロウ, Kojirō), and Meowth (ニャース, Nyarth) are major secondary characters. The three were the primary antagonists of the anime series, where each episode they attempt to kidnap Ash Ketchum's Pikachu.\n[…]\nThe names Jessie and James reference famous American outlaw Jesse James; their Japanese names Musashi and Kojirō refer to the samurai Miyamoto Musashi and Sasaki Kojiro.\n[…]\nTeam Rocket appear as the main antagonists in several arcs of the Pokémon Adventures manga, including the Red, Green, and Blue, Yellow, and Gold and Silver arcs. The Team Rocket trio from the anime appear in the Alternative Universe manga adaptation Electric Tale of Pikachu loosely inspired by some episodes of the Indigo Ligue and created in 1999, where Jessie and James are shown at the end to be married and expecting a child.\n[…]\nChris Carter of Destructoid called the English voice team for Jessie, James, and Meowth (Lillis, Stuart, and Blaustein) \"some of the show's finest work.\" Their role in Pokémon the Series: Black & White was cited by Polygon to be one of the biggest missed opportunities with their characters, due to the sudden cancellation of several episodes leading to Team Rocket's character changes in the series being for \"nothing.\"\n[…]\nTeam Rocket has been referenced in music by various rappers, with American rapper Lil Uzi Vert naming a song on his 2016 mixtape, Lil Uzi Vert vs. the World, after the group."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Equipe_Rocket",
        "situacao": "ok",
        "texto": "A Equipe Rocket, conhecido em inglês como Team Rocket (japonês: ロケット団, Hepburn: Roketto-dan; [ɾo̞ke̞t̚to̞ dã̠ɴ]), é uma organização criminosa fictícia da franquia Pokémon. Ela é a principal antagonista nos jogos originais de Pokémon Red, Green e Blue, bem como na longa série de anime Pokémon. Nesta última, a Equipe Rocket é representada principalmente pelo trio de personagens Jessie, James e Meowt\n[…]\nOs nomes Jessie e James fazem referência ao famoso fora da lei americano Jesse James; seus nomes japoneses, Musashi e Kojirō, referem-se aos samurais Miyamoto Musashi e Sasaki Kojiro.\n[…]\nA Equipe Rocket aparece como os principais antagonistas em vários arcos do mangá Pokémon Adventures, incluindo os arcos Red, Green e Blue, Yellow e Gold e Silver. O trio da Equipe Rocket do anime aparece na adaptação para mangá do universo alternativo de Electric Tale of Pikachu, vagamente inspirada em alguns episódios da Liga Índigo e criada em 1999, onde Jessie e James são mostrados no final casados ​​e esperando um filho.\n[…]\nTanto nos jogos quanto no anime, a Equipe Rocket é considerada uma das melhores vilãs da franquia Pokémon. Chris Carter, do Destructoid, chamou a equipe de dublagem inglesa de Jessie, James e Meowth (Lillis, Stuart e Blaustein) de \"um dos melhores trabalhos da série\".\n[…]\nO livro Anime Classics Zettai!: 100 Must-See Japanese Animation Masterpieces analisa a Equipe Rocket como os antagonistas do anime, que na verdade proporcionam alívio cômico através dos personagens Jessie e James, com Meowth retratado como um \"gato esperto\" que se destaca entre os outros Meowth. O livro também menciona Jessie, que possui um charme irresistível, como a líder acima de James.\n[…]\nO Fandom Post disse que Jessie e James eram o \"Melhor Casal de Vilões\" devido ao seu trabalho árduo contínuo, bem como interações ao longo de vários episódios.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Ekans",
      "descricao": "Pokémon cobra do tipo veneno, número 23 da Pokédex Nacional."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Ekans e sua evolução, Arbok, têm nomes que são palavras inglesas lidas de trás para frente. Que palavras são essas?",
    "resposta": "Snake e Kobra",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Arbok_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Arbok_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Mew",
      "descricao": "Pokémon do tipo Psíquico, número 151 da Pokédex Nacional."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nos jogos e no anime, o pokémon mais poderoso já criado pela ciência foi feito a partir do material genético de qual pokémon mítico?",
    "resposta": "Mew",
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
        "texto": "Mewtwo ( ; Japanese: ミュウツー, Hepburn: Myūtsū) is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise. It was first introduced in the video games Pokémon Red and Blue, and later appeared in subsequent sequels and spin-off titles. In the video games, the player can fight and capture Mewtwo in order to subsequently pit it against other Pokémon.\n[…]\nIn the original games, Mewtwo is intended to be \"the strongest Pokémon ever.\" Due to genetic engineering being applied to a sample of Mew's DNA in order to fully create Mewtwo's genome, Mewtwo is an extremely powerful psychic, with its abilities surpassing Mew's due to intentional alterations to the genetic source material. As such, it can use telekinesis for flight, to shield itself and to powerfully throw opponents aside.\n[…]\nAfter escaping Giovanni, Mewtwo questions the reason for its existence and declares revenge on its creators. To this end, it lures several Pokémon trainers, among them is the anime series's main protagonist Ash Ketchum, to its island in order to clone their Pokémon. Once it does so, Mewtwo forces the originals to battle their clones in an effort to determine which set is superior, while Mewtwo faces its own genetic relative, Mew.\n[…]\nIn the manga series Pokémon Adventures, Team Rocket created Mewtwo, but due to the insufficient amount of genetic material at hand (being just a couple of Mew's eyelashes), Gym Leader Blaine - Team Rocket's head of research at the time - had to supplement the experiment with human DNA taken from his own right arm to fill in the gaps, which led to some of Mewtwo's DNA to enter his body as well.\n[…]\n1.^ The Japanese texts of the Pokémon Mansion Journals as well as various Pokédex entries state that an individual scientist created Mewtwo, as opposed to a team of researchers like in the anime.\n[…]\nMewtwo on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mewtwo",
        "situacao": "ok",
        "texto": "Mewtwo (ミュウツー, Myūtsū) é uma criatura oficial da franquia Pokémon, criada pela Nintendo e pela Game Freak. Criado por Ken Sugimori, apareceu pela primeira vez nos jogos de videogame Pokémon Red e Blue e suas seqüencias, e mais tarde apareceu em vários produtos, títulos de spin-off, assim como adaptações de animação da franquia.\n[…]\nNos jogos de vídeogame, o jogador pode lutar e capturar Mewtwo para batalhar contra outros Pokémon. O jogador descobre mais informações de Mewtwo em Pokémon Red e Blue pela leitura de um diário de pesquisa em um laboratório totalmente arruinado em Cinnabar Island. Os documentos revelam que um cientista solitário passou anos estudando a engenharia genética do descendente de todos os Pokémon, Mew.\n[…]\nA Pokédex do jogo diz que Mewtwo foi \"criado por um cientista após anos de experimentos terríveis com manipulação genética e engenharia de DNA\". Mewtwo revelou-se extremamente poderoso para ser controlado, e destrói o laboratório durante sua fuga. É depois dada ao jogador a oportunidade de capturar Mewtwo na Cerulean Cave (chamado de \"Unknown Dungeon\" nos jogos originais), que é acessível apenas depois de derrotar os chefes finais do jogo, a Elite Four, e seu líder, Blue.\n[…]\nEm maio de 2001, a Viz lançou um segundo livro infantil, Mewtwo's Watching You!, que retrata um Mewtwo tímido assiste com interesse outros Pokémons brincando.\n[…]\nDale Bishir da IBN classificou Mewtwo como o Pokémon que mais impactou a franquia, com sua proiminência sendo visto em todas as partes, como suas duas mega-evolução, seu protagonismo no filme Detective Pikachu, como sendo personagem jogável no Super Smash Bros. e por protagonizar em dois filmes de animação. Steven Bogos do The Scapist classificou Mewtwo como sendo seu Pokémon predileto, sendo sem dúvidas o mais forte dos jogos originais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Slowpoke",
      "descricao": "Pokémon da Água/Psíquico de primeira geração, número 79 da Pokédex Nacional, rosado e de cauda longa."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O preguiçoso Slowpoke evolui para Slowbro quando qual pokémon, uma concha, morde a ponta da sua cauda?",
    "resposta": "Shellder",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Slowpoke_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Slowpoke_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Umbreon",
      "descricao": "Pokémon do tipo Sombrio, número 197 da Pokédex Nacional."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Com muita amizade, Eevee evolui para Espeon durante o dia. Nas mesmas condições, mas à noite, ele vira qual pokémon?",
    "resposta": "Umbreon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Espeon_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Espeon_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pokémon Estampas Ilustradas",
      "descricao": "Card game colecionável oficial da franquia Pokémon, lançado no Japão em 1996."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Até 2003, o card game Pokémon foi publicado no Ocidente pela mesma empresa que criou Magic. Que empresa é essa?",
    "resposta": "Wizards of the Coast",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nThe Pokémon Trading Card Game was developed in Japan, based on the 1996 Pokémon Red, Blue, and Yellow Game Boy video game by Nintendo. It was first published in October 1996 by Media Factory in Japan. In the US, it was first published by Wizards of the Coast, towards the end of 1998 to capitalize on the US popularity of Pokémon.\n[…]\nOver the next five years, Wizards of the Coast published more than a dozen expansion sets for the game, allowing the company to sell millions of cards and earn more revenue from Pokémon than they had from Magic: The Gathering in its first 10 years. Hasbro bought Wizards of the Coast in September 1999 for $325 million based on the strength of the Pokémon license. In 2001, Nintendo created its affiliate Pokémon USA, Inc., so that it could recover the US licensing rights to the game.\n[…]\nTherefore, we state that you are an Officially Authorized Pokémon Card Illustrator and admire your skill.\"\n[…]\nThe reviewer from the online second volume of Pyramid in 1999 stated that \"Pokémon is the second most popular CCG in Japan (behind Magic: The Gathering), and it's no fluke. The game plays like a kinder, gentler version of Magic, with easier rules and graphics geared to the younger crowd.\" In the United States, Wizards of the Coast reported in early 1999 that it had sold 400,000 packs of Pokémon trading cards in less than six weeks of its release.\n[…]\nVenters, Jillian (January 1999). \"Is that a monster in your pocket?\". The Duelist. No. 33. Wizards of the Coast. pp. 88–89."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nVocê pode também \"Mega Evoluir\" um Pokémon, mas você passa seu turno, a não ser que tenha ligado ao seu Pokémon o item Elo Espiritual de (Nome do Pokémon), para não passar o turno.\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\nColocar um Pokémon Básico no banco.\n[…]\nUsar uma carta Ferramenta Pokémon. (Apenas uma vez)\n[…]\nLigar uma carta Energy a um de seus Pokémon. (Apenas uma vez)\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial de Pokémon» (em inglês)\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Pokémon Legends: Arceus",
      "descricao": "Jogo Pokémon de 2022 para o Nintendo Switch, ambientado na antiga região de Hisui."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Pokémon Legends: Arceus, de 2022, se passa na antiga região de Hisui, que séculos depois se tornará qual região dos jogos?",
    "resposta": "Sinnoh",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus is a 2022 action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. It is part of the eighth generation of the Pokémon video game series and serves as a prequel to the fourth-generation titles Pokémon Diamond and Pearl (2006). The game was first announced as part of the Pokémon 25th Anniversary event in Febru\n[…]\nThe game is set in the Sinnoh region centuries before the events of Pokémon Diamond and Pearl and their remakes, at a time when the region was known as Hisui.\n[…]\nIn the post-game, the player teams up with Volo, a member of the Ginkgo Guild merchant group who assisted them, to find the Plates associated with Arceus. As they do, the player encounters several legendary Pokémon, each one holding a Plate. Upon arriving at the Temple of Sinnoh for the last Plate, Volo betrays the player and attempts to steal the Plates from them to draw out Arceus and subjugate it to create a new world using its powers.\n[…]\nHe also reveals he allied with Giratina to open the spacetime rift in a failed attempt to drive out Arceus, sending the caught legendary mad. The player defeats both Volo and Giratina, securing the final Plate and transforming the Celestica Flute into the Azure Flute. Once all other Pokémon (excluding promotional Pokémon which require outside games to acquire) have been captured, the player can play the Azure Flute at the Temple of Sinnoh to encounter Arceus.\n[…]\nPokémon Legends: Arceus was first revealed in the Pokémon Presents on 26 February 2021 alongside Pokémon Brilliant Diamond and Shining Pearl as part of the Pokémon 25th Anniversary celebration. It was referred to as a \"pre-remake\" (a portmanteau of prequel and remake) of previous Sinnoh games (Diamond, Pearl, and Platinum) by the official Pokémon Twitter account."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Legends%3A_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus (Pokémon LEGENDS アルセウス, Pokemon Rejenzu: Aruseusu; tradução: Pokémon Lendas: Arceus) é um jogo eletrônico de RPG de ação desenvolvido pela Game Freak e publicado pela The Pokémon Company e Nintendo. Faz parte da oitava geração da série de jogos eletrônicos Pokémon e serve como uma prequela para os jogos eletrônicos de RPG do Nintendo DS, Pokémon Diamond e Pearl, de 2006. Fo\n[…]\nPokémon Legends: Arceus é um RPG de ação, uma estreia na série principal de jogos Pokémon. Apesar desta distinção e das mudanças que vêm com ela, Legends: Arceus é dito para homenagear a jogabilidade principal de entradas anteriores na série. Ele apresenta um cenário de mundo aberto na área selvagem introduzido no Pokémon Sword e Shield. O jogo se passa em uma era passada da história da região de Sinnoh, muito antes dos eventos de Pokémon Diamond e Pearl acontecerem.\n[…]\nFoi declarado que o objetivo do jogo seria criar a primeira Pokédex de Sinnoh. O mítico Pokémon Arceus terá um papel importante na história.\n[…]\nPokémon Legends: Arceus está sendo desenvolvido pela Game Freak. É o primeiro projeto conhecido no subgênero de RPG de ação realizado pelo estúdio. Foi revelado pela primeira vez em uma apresentação em 26 de fevereiro de 2021, como parte do evento Pokémon 25th Anniversary ao lado de Pokémon Brilliant Diamond e Shining Pearl. Ele servirá como uma prequela de Diamond e Pearl. Foi lançado mundialmente em 28 de janeiro de 2022.\n[…]\nA Nintendo informou que o jogo vendeu 6,5 milhões de cópias em todo o mundo dentro de uma semana de seu lançamento, superando outros títulos da série Pokémon lançados para Nintendo Switch, como Sword e Shield e Brilliant Diamond e Shining Pearl. No Japão, vendeu 1,43 milhão de unidades em três dias. Nos Estados Unidos, apenas as vendas físicas de Legends: Arceus (excluindo downloads digitais) fizeram dele o jogo eletrônico mais vendido de janeiro de 2022.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Ho-Oh",
      "descricao": "Pokémon dos tipos Fogo e Voador, número 250 da Pokédex Nacional."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os lendários Ho-Oh e Lugia estampam as capas de qual par de jogos da segunda geração?",
    "resposta": "Pokémon Gold e Silver",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version and Pokémon Silver Version are 1999 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy Color. They are the first installments in the second generation of the Pokémon video game series. They were released in Japan on November 21st, 1999, Australia and North America on October 15th, 2000, and Europe on April 6th, 2001.\n[…]\nTrainers will call for a rematch and others will call about rare Pokémon that can be caught in a certain area.\n[…]\nAs a precursor to the North American release, Gold and Silver were displayed for audiences to interact with at the 2000 American International Toy Fair in New York City. To further promote the games, Nintendo modified five Chrysler PT Cruisers to resemble the new Pokémon Lugia and had them driven around the United States. The vehicles had fins and tails attached to them and were painted with logos and images of the Pokémon franchise.\n[…]\nNintendo Power listed Gold and Silver combined as the sixth best Game Boy / Game Boy Color games, praising them for the new Pokémon, features, and full-color graphics.\n[…]\nSo far in 2000 the best-selling game in America for any home console is Pokémon Stadium for Nintendo 64, and the best-selling game for any handheld video game system is Pokémon Yellow for Game Boy Color, but Pokémon Gold and Silver will eclipse even those impressive sales totals. We project sales of 10 million units total of these two games in less than six months time\". The game sold 2.9 million copies in the U.S. within a few weeks.\n[…]\nPokémon HeartGold Version and Pokémon SoulSilver Version are enhanced remakes of Pokémon Gold and Silver, developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. First released in Japan on September 12, 2009, the games were later released in North America, Australia, and Europe during March 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Gold_%26_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version e Pokémon Silver Version (ポケットモンスター 金・銀, Poketto Monsutā Kin・Gin; tradução: Monstros de Bolso Ouro・Prata) são jogos eletrônicos de RPG de 1999, desenvolvidos pela Game Freak e publicadas pela Nintendo para o Game Boy Color. Esses dois jogos iniciaram a segunda geração da série Pokémon. Eles foram lançados no Japão em 1999, na Austrália e América do Norte em 2000 e Europa em 20\n[…]\nPokémon Gold e Silver foram aclamados pela crítica após o lançamento. Eles são considerados por alguns os melhores jogos de toda a série, bem como alguns dos jogos mais importantes da quinta geração de consoles de jogo eletrônico. Eles continuaram o enorme sucesso de Pokémon Red e Blue conforme Pokémon começou a se formar em uma franquia de bilhões de dólares.\n[…]\nPokémon do tipo Metal são imunes a golpes do tipo Veneno e são comumente mais resistentes quando comparado a outros tipos, enquanto os Pokémon do tipo Sombrio possuem vantagem contra o tipo Psíquico, que na geração de jogos anteriores não tinha nenhuma fraqueza viável. Em Gold e Silver, novos movimentos foram adicionados, mas Pokémon sabendo esses movimentos não podem ser trocados com os jogos da primeira geração.\n[…]\nComo um precursor do lançamento na América do Norte, Gold e Silver foram exibidos para o público interagir na American International Toy Fair de 2000 na cidade de Nova Iorque. Para promover ainda mais os jogos, a Nintendo modificou cinco Chrysler PT Cruisers para se parecerem com o novo Pokémon Lugia e os fez circular pelos Estados Unidos. Os veículos tinham barbatanas e caudas presos a eles e foram pintados com logotipos e imagens da franquia Pokémon.\n[…]\nPokémon Crystal foi bem recebido pelos críticos, embora muitos comentassem que não havia novas adições e recursos suficientes para diferenciá-lo significativamente do Pokémon Gold e Silver. Pokémon Crystal vendeu quase 6,4 milhões de unidades em todo o mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Ash Ketchum",
      "descricao": "Treinador protagonista do anime Pokémon, chamado Satoshi no Japão."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No primeiro episódio do anime, por que Ash fica com um Pikachu, e não com Bulbasaur, Charmander ou Squirtle?",
    "resposta": "Acordou tarde e chegou atrasado",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/EP001",
      "https://en.wikipedia.org/wiki/Ash_Ketchum"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP001",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum, known as Satoshi (サトシ) in Japan, is a character in the Pokémon franchise owned by Nintendo, Game Freak, and Creatures. He was the protagonist of the Pokémon anime for the first 25 seasons, as well as the protagonist of several manga series. In Japanese, the character is voiced by Rica Matsumoto. In the English dub, he was voiced by Veronica Taylor in the first eight seasons and Sarah \n[…]\nAsh first appears in the anime's first episode, \"Pokémon, I Choose You!\". The episode takes place on Ash's tenth birthday as he wakes up late to receive his first Pokémon, resulting in the Professor, Oak, giving Ash a rebellious Pikachu. Ash and Pikachu bond after Pikachu saves Ash from an angry Spearow flock, and the pair become close friends. Ash acts as the main character of every series of the anime up until Pokémon Horizons: The Series.\n[…]\nAsh appeared in the manga series The Electric Tale of Pikachu and Ash & Pikachu, which follow similar plots to the main anime. Manga author Toshihiro Ono cited Ash as one of his favorite characters to draw for the series, stating, \"I want to go on a trip with Misty just like him! (And forget about job, rent, etc.)\".\n[…]\nPikachu saving Ash from the Spearow flock in the first episode helped to establish \"a level of equality\" between the two characters, highlighting the idea of how a reciprocal friendship helped ensure further success. Their \"symbiotic\" relationship was described as a reason for the \"personal flourishing\" of Ash as a character. His interactions with his friends and companions have also been described as having helped build the dramatic core of the series as a whole.\n[…]\nCryer, Hirun (March 12, 2024). \"Having moved on after 26 years, Ash and Pikachu could one day make their way back to the Pokemon anime: \"Anything is possible\"\". GamesRadar+. Retrieved April 2, 2024.\n[…]\nAsh Ketchum on Bulbapedia\n[…]\nAsh Ketchum on Serebii"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum (サトシ, Satoshi) é um personagem fictício da franquia Pokémon, propriedade das empresas Nintendo, Game Freak e Creatures.\n[…]\nAsh Ketchum foi mencionado pela primeira vez em um jogo eletrônico no diálogo de Pokémon Play It!, e sua primeira aparição em um jogo foi em Pokémon Puzzle League. Satoshi Tajiri, o criador de Pokémon, com quem Ash compartilha seu nome japonês, afirmou que Ash representa o 'aspecto humano' da série, e que Ash reflete como ele era quando criança.\n[…]\nAsh foi criticado por estar preso em uma 'linha do tempo flutuante', bem como por sua incapacidade de vencer qualquer liga de Pokémon importante até a 22ª temporada do anime. No entanto, sua longevidade e persistência também foram recebidas positivamente pelos principais meios de comunicação, como CNN e BBC, pois representam que nunca é tarde demais para alcançar os sonhos.\n[…]\nAsh nasceu em Kanto na cidade de Pallet. Quando completou 10 anos, foi ao laboratório do Professor Carvalho buscar seu primeiro Pokémon. Ele de início escolhe um Squirtle, porém este já fora levado por seu rival Gary Carvalho; depois tenta escolher Bulbasaur e Charmander, porém também tinham sido levados, lhe restando apenas um Pikachu, tornando-se também protagonista do anime junto com Ash.\n[…]\nDesde a primeira temporada, é protagonista do anime de Pokémon, exceto nos spin-offs.\n[…]\nDentre os protagonistas, Ash é o que mais captura e armazena Pokémon durante as temporadas. Seu principal Pokémon é o Pikachu (desde o primeiro episódio) que o acompanha fora da PokéBola, estando sempre presente em todas as formações de equipe usadas pelo treinador.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Misty",
      "descricao": "Líder de ginásio do tipo Água de Cerulean, nos jogos, e companheira de viagem de Ash no início do anime Pokémon."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Logo no começo do anime, por que Misty passa a seguir Ash em sua jornada?",
    "resposta": "Para cobrar a bicicleta destruída",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Misty",
      "https://en.wikipedia.org/wiki/Misty_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Misty",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Misty_(Pok%C3%A9mon)",
        "situacao": "ok",
        "texto": "Misty, known as Kasumi (Japanese: カスミ) in Japan, is a fictional character in the Pokémon franchise owned by Nintendo and created by Satoshi Tajiri. She has appeared as a Gym Leader in the Pokémon video games Pokémon Red and Blue, Pokémon Gold and Silver and their respective remakes.\n[…]\nThe disc differs from the other Japanese disc, as Misty's (Kasumi) voice actor is the narrator. Misty, as well as most of the gym leaders in Pokémon history, reappear in Pokémon Black 2 and White 2 as part of the Pokémon World Tournament.\n[…]\nThe Misty character that appears in the Electric Tale of Pikachu manga series, which is loosely based on the anime, is similar to the Misty in the anime, while the Misty in Pokémon Adventures is similar to the Misty in the video games. She appears throughout Electric Tale of Pikachu, traveling on occasion with Ash.\n[…]\nThe book The Japanification of Children's Popular Culture described Misty's portrayal in the anime as a mother figure, calling her a \"nurturing component\" for the original trio of herself, Ash and Brock. It further described her as an \"unusually 'complete' girl of the anime world\", noting both her feminine sentimentality and her \"explosive rage\".\n[…]\nAnime Classics Zettai!: 100 Must-See Japanese Animation Masterpieces praised the character as being \"particularly nuanced\" and described her as contributing heavily to the series' appeal. Pikachu's Global Adventure: The Rise and Fall of Pokémon stated that though the anime focused on Ash, Misty was a distinctly significant character especially to young female consumers, neither \"butch\" nor \"dizzily feminine\", seemingly \"carefully constructed to appeal to preadolescent girls\".\n[…]\nMisty (anime) on Bulbapedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Misty",
        "situacao": "desambiguacao",
        "texto": "Misty pode referir-se a:\n\nMisty (Pokémon)\nMisty (satélite)\n\n\n== Ver também ==\nTodas as páginas cujo título começa por \"Misty\"\nTodas as páginas que tenham \"Misty\" no título\nBusca por \"misty\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Psyduck",
      "descricao": "Pokémon do tipo Água, número 54 da Pokédex Nacional."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O pato amarelo Psyduck sofre de dores de cabeça constantes. Segundo os jogos, o que acontece quando a dor fica forte demais?",
    "resposta": "Ele libera poderes psíquicos",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Psyduck_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Psyduck"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Psyduck_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Psyduck",
        "situacao": "ok",
        "texto": "Psyduck ( ), known as Koduck (コダック, Kodakku) in Japan, is a Pokémon species in Nintendo and Game Freak's Pokémon franchise. Created by Ken Sugimori, Psyduck first appeared in the video games Pokémon Red and Blue and later in sequels. It has later appeared in various merchandise, spinoff titles and animated and printed adaptations of the franchise. A Psyduck also appears as part of the main cast in\n[…]\nA duck-like Pokémon, Psyduck is constantly stunned by its headache, and usually just stands vacantly, trying to calm itself. In the anime series, Psyduck's appearances became a running gag; Misty, a major supporting character, would often release Psyduck by accident instead of the Pokémon she wanted to use. Psyduck has been met with a primarily positive response since its debut, primarily in its role in the Pokémon Concierge television series.\n[…]\nPsyduck is constantly stunned by its headache, and usually just stands there vacantly, trying to calm its headache. When the headache gets too bad, its brain cells awaken, allowing it to use strong psychic powers. Psyduck is classified in-game as a Water-type Pokémon. When a Psyduck receives enough experience from battles, it evolves into Golduck.\n[…]\nIn the Pokémon anime, Misty, a major supporting character in the series, has a Psyduck that she accidentally caught, serving as a constant source of frustration for her, as it frequently emerges to attempt to battle the opponent in substitution of the Pokémon she intends to use, and in instances where she does intend to use it, it often does not act. When its headache gets bad enough, it has been shown to use phenomenally powerful Psychic-type moves which far exceed its perceived potential.\n[…]\nA life-sized Psyduck plush was released by The Pokemon Company in 2020, later being rereleased in 2023.\n[…]\nPsyduck  at Bulbapedia, a Pokémon wiki\n[…]\nPsyduck on Pokemon.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Psyduck",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nOriginalmente encarregado de desenhar os personagens para ilustrar um guia de estratégia planejado pela Game Freak para o lançamento dos jogos, Sugimori desenhou todos os sprites do jogo em seu estilo, não apenas para unificar visualmente os designs, mas também para modificar quaisquer elementos de design que ele considerasse inadequados, enquanto tentava preservar o estilo único do artista original dos sprites.\n[…]\nA maioria dos Pokémon desta geração tinha designs relativamente simples e eram altamente análogos às criaturas da vida real, incluindo, entre outros: Pidgey (um pombo), Krabby (um caranguejo), Rattata (um rato), Ekans (uma cobra), e Seel (uma foca). Muitos Pokémon nos jogos originais serviram como base para repetir conceitos mais adiante na série. Alguns Pokémon, como Squirtle, Bulbasaur e Charmander, foram projetados com base em suas evoluções finais, trabalhando-se de trás para frente.\n[…]\nQuando os jogos foram localizados para o público de língua inglesa como Red e Blue, a Nintendo of America deu às várias espécies de Pokémon \"nomes inteligentes e descritivos\" relacionados à sua aparência ou características, como forma de torná-los mais identificáveis ​​para as crianças americanas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Tipo Fada",
      "descricao": "Tipo elemental de pokémon e golpes introduzido na sexta geração, em Pokémon X e Y."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O tipo Fada surgiu em Pokémon X e Y para equilibrar as batalhas. Que tipo, até então poderoso demais, ele veio conter?",
    "resposta": "Dragão",
    "distratores": [
      "Psíquico",
      "Elétrico",
      "Água"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Fairy_(type)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Fairy_(type)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Enfermeira Joy",
      "descricao": "Personagem do anime Pokémon que cuida dos Centros Pokémon, com uma versão quase idêntica em cada cidade."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No anime, por que as Enfermeiras Joy dos Centros Pokémon de cada cidade são praticamente idênticas?",
    "resposta": "São todas parentes",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Nurse_Joy"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Nurse_Joy",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Jigglypuff",
      "descricao": "Pokémon balão cor-de-rosa da primeira geração, cuja canção faz todos dormirem."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No anime, por que Jigglypuff rabisca com sua caneta o rosto de quem ouve sua canção?",
    "resposta": "Fica irritado porque todos dormem",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jigglypuff",
      "https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(anime)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jigglypuff",
        "situacao": "ok",
        "texto": "Jigglypuff (  JIG-lee-puf), known in Japan as Purin (Japanese: プリン), is a Pokémon species. Jigglypuff first appeared in the video games Pokémon Red and Blue and subsequent sequels, later appearing in various merchandise, spinoff titles and animated and printed adaptations of the franchise. Jigglypuff's English voice was originally provided by Rachael Lillis, later being replaced by Michele Knotz, \n[…]\nJigglypuff made a cameo appearance in a season six episode of Last Week Tonight with John Oliver, in which the host accidentally kills one while playing Pokémon GO. Jigglypuff is one of the Pokémon that appear in the Pokémon: Detective Pikachu film, voiced using archived recordings of Rachael Lillis from the anime. The character briefly appears at a coffee bar after it accidentally put its trainer to sleep with its song.\n[…]\nThe journal Sex Roles noted that while Jigglypuff's gender in the anime was never explicitly stated, it was identified by a majority of people as a female character in the series. Additionally, it was the most often named \"female\" Pokémon by children when asked to recall one, which the study attributed to its pink color and ability to sing its opponents to sleep.\n[…]\nThe Australian Journal of Language and Literacy cited Jigglypuff as a tool to use for introducing children to drama, citing its mannerisms in the anime.\n[…]\nAndrew Tei of Mania.com complained that Jigglypuff's portrayal in the anime quickly becomes irritating. Carolyn Gudmundson of GamesRadar+ disagreed, calling Jigglypuff's anime appearances \"totally badass\" while also criticizing its unoriginal, overused design. She later described it as falling into the \"huggable pink blob\" archetype Pokémon, which she believed to be one of the more overused Pokémon designs.\n[…]\nJigglypuff  at Bulbapedia, a Pokémon wiki\n[…]\nJigglypuff on Pokemon.com"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jigglypuff",
        "situacao": "ok",
        "texto": "Jigglypuff, conhecido no Japão como Purin (プリン), é uma espécie de Pokémon da franquia Pokémon que pertence a Nintendo e Game Freak. Criada por Ken Sugimori, Jigglypuff fez sua primeira aparição nos jogos eletrônicos Pokémon Red e Blue e, depois, apareceu nas sequências dos jogos que se seguiram. Mais tarde, apareceu em diversas mercadorias, títulos em spin-off e adaptações impressas da franquia. J\n[…]\nFora da série principal, Jigglypuff apareceu em Pokémon Pinball, Pokémon Snap, e os jogos das séries Pokémon Mystery Dungeon e Pokémon Ranger. Jigglypuff é um personagem jogável em todos os quatro jogos da série Super Smash Bros. Apesar de não ser a personagem principal da franquia Pokémon, o diretor do jogo Masahiro Sakurai o selecionou para aparecer, devido às suas semelhanças com Kirby, o que permitiu à equipe para reutilizar o modelo e muitas animações como uma base para Jigglypuff.\n[…]\nNa série de anime, Jigglypuff é um personagem recorrente que aspira a ser um grande cantor, após a inspiração de Ash e companhia. Infelizmente, a maioria de seus feitos fazem o público dormir antes mesmo dele terminar de cantar. Cantando o Jigglypuff muitas vezes se mostra um problema para os protagonistas da série, pois ele faz com que todos ao redor adormeçam. Ele carrega uma caneta marcadora, que ele usa como um microfone, devido à sua semelhança quando é tampado.\n[…]\nEm sua primeira aparição de Jigglypuff (\"A Canção do Jigglypuff\"), Misty tentou capturá-lo com a ajuda de seu Staryu, mas desistiu, eles logo perceberam que Jigglypuff estava chateado porque não podia cantar e Brock deu-lhe um pedaço de fruta que acalmou sua garganta e só depois ele consegui cantar. A equipe Rocket aproveitando isso decidiu usar sua canção para fazer uma cidade dormir e eles poderem roubar seus Pokémons, mas mesmo de tapa-ouvidos eles dormiram.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Alola",
      "descricao": "Região tropical formada por ilhas, cenário dos jogos Pokémon Sun e Moon, da sétima geração."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A região de Alola, cenário de Pokémon Sun e Moon, é inspirada em qual arquipélago americano?",
    "resposta": "Havaí",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
      "https://bulbapedia.bulbagarden.net/wiki/Alola"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun and Pokémon Moon are 2016 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2016, Sun and Moon were released worldwide on 18 November 2016, commemorating the franchise's 20th anniversary.\n[…]\nPokémon may also be traded in from other games just like in previous installments.\n[…]\nThe international release, known as Pokémon Sun & Pokémon Moon: Super Music Collection, was released on iTunes on the same date.\n[…]\nOn 10 May, more information on the games was released through a new trailer, including new Pokémon, box art, and release dates. Pokémon Sun and Moon released in Japan, North America, and Australia on 18 November 2016, and in Europe on 23 November 2016. A comic based on Pokémon Sun and Moon launched alongside an edition of CoroCoro Comic on 15 September 2016.\n[…]\nAlex Olney of Nintendo Life said that \"the plot in Sun & Moon is the deepest and most ambitious Game Freak has dared attempt\", he also called them the best Pokémon games ever produced, commenting that Alola's design felt natural and organic, praising Game Freak for successfully balancing additional mechanics without alienating existing fans. Chris Tapsell of Eurogamer said the games were \"the best generation in more than a decade\". They earned an \"essential\" ranking from the site.\n[…]\nAccording to Nintendo of America, Sun and Moon were the fastest-selling titles in Nintendo's history at the time. As of 31 March 2023, Sun and Moon have sold 16.30 million copies, ranking them as the third-best-selling Nintendo 3DS titles behind both Mario Kart 7 and Pokémon X and Y. During a GameStop Q3 earnings conference call, Pokémon Sun and Moon were said to have had the most pre-orders for any video game in the last five years."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Alola",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sun_e_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun (ポケットモンスター　サン, Poketto Monsutā San; \"Monstros de Bolso Sun\", que traduzido do inglês para o português significa Sol, Sol em japonês é 太陽 Taiyō) e Pokémon Moon (ポケットモンスター　ムーン, Poketto Monsutā Mūn; \"Monstros de Bolso Moon\"\", que traduzido do inglês para o português significa Lua, Lua em japonês é 月 Tsuki) são dois jogos eletrônicos de RPG de 2016, faz parte da sétima geração da série Pok\n[…]\nSun e Moon introduziram 81 novas espécies Pokémon e novos recursos, como formas de Alola de Pokémon da geração anterior, movimentos poderosos conhecidos como Movimento-Z, criaturas alienígenas conhecidas como Ultra Bestas, batalha atualizada e mecânica de treinamento e gráficos 3D poligonais aprimorados.\n[…]\nPokémon Sun e Moon são jogos de RPG com aventura elementos, estabelecidos na região ficcional de Alola (vagamente baseado no Havaí), apresentados em uma terceira pessoa, perspectiva de cima. O jogador controla um jovem treinador que parte em uma missão para capturar e treinar criaturas conhecidas como Pokémon e vencer batalhas contra outros treinadores.\n[…]\nOs jogos acontecem em um arquipélago tropical, um grupo de ilhas conhecido como região de Alola. Joe Skrebels da IGN descreve-o como \"Pokémon\" takes no Havaí\". Durante uma entrevista na E3 2016, Shigeru Ohmori observou que a equipe da Game Freak fez viagens ao Havaí para realizar pesquisas para Sun e Moon.\n[…]\nO diretor do jogo Shigeru Ohmori afirmou que a escolha de Sun e Moon como título foi inspirada na representação metafórica dos dois corpos celestes das relações humanas. O Havaí foi escolhido como base para a região do jogo após a determinação do título, devido às suas noites claras e sol abundante. O desenvolvimento começou imediatamente após Pokémon Omega Ruby e Alpha Sapphire ser concluído e Ohmori manter sua posição de diretor de jogo.\n[…]\nPlaylist Pokémon Sun e Moon no YouTube  Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Kalos",
      "descricao": "Região fictícia dos jogos Pokémon X e Y, da sexta geração, cuja capital é a cidade de Lumiose."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Com castelos, palácios e uma grande capital cheia de cafés, a região de Kalos, de Pokémon X e Y, é inspirada em qual país?",
    "resposta": "França",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y",
      "https://bulbapedia.bulbagarden.net/wiki/Kalos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y",
        "situacao": "ok",
        "texto": "Pokémon X and Pokémon Y are 2013 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the sixth generation of the main Pokémon game series. First announced in January 2013 by Nintendo president Satoru Iwata through a Nintendo Direct, Pokémon X and Pokémon Y were released worldwide in October 2013\n[…]\nA sequel, Pokémon Legends: Z-A, features the redevelopment of Lumiose City (the largest city in Kalos, inspired by Paris, France) and was released for the Nintendo Switch and Nintendo Switch 2 on October 16, 2025. It takes place five years after the events of Pokémon X and Y.\n[…]\nThe games take place in the star-shaped Kalos Region, one of many such regions across the fictional Pokémon world. Centered around beauty, the region is heavily inspired by Metropolitan France and, to a lesser extent, Europe as a whole. Many locations and landmarks across Kalos have real-world inspirations, including Prism Tower (Eiffel Tower), the Lumiose Art Museum (the Louvre) and the stones outside Geosenge Town (Carnac stones).\n[…]\nWild Pokémon inhabit every corner of the Kalos region, many of which are only known to appear in this area.\n[…]\nThey also considered some of the games' puzzles to be clumsy. The layout of the Kalos region itself was described as disappointingly straightforward for players who enjoy exploring but inviting to new players in the franchise. This ease of access was exemplified through subtle additions and changes to gaining experience. More readily available experience allowed players to use more Pokémon throughout the campaign and rotate through a team greater than six.\n[…]\nAs of 31 March 2023, the games have sold 16.68 million units worldwide, making them the second best-selling games for the Nintendo 3DS behind Mario Kart 7 and just ahead of Pokémon Sun and Moon."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kalos",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_X_e_Y",
        "situacao": "ok",
        "texto": "Pokémon X e Y (ポケットモンスター X・Y, Poketto Monsutā Ekkusu & Wai; Monstros de Bolso Xis & Ípsilon) são dois jogos eletrônicos de RPG de 2013, produzidos pela Game Freak e publicados pela The Pokémon Company e Nintendo para o Nintendo 3DS, sendo os jogos mais vendidos do console, com 27 milhões de cópias vendidas. São os primeiros títulos da sexta geração da série Pokémon.\n[…]\nTal como acontece com as parcelas anteriores, ambos os jogos seguem a jornada de um jovem treinador Pokémon e amigos, enquanto treinam Pokémon. Desta vez, os jogos acontecem na região de Kalos — baseada na França — com o objetivo de frustrar os esquemas da nefasta organização criminosa Equipe Flare, enquanto tenta desafiar o campeão da Liga Pokémon.\n[…]\nOs jogos acontecem na forma de estrela da região de Kalos (カロス地方, Karosu-chihō), uma das muitas dessas regiões no mundo fictício de Pokémon. Centrada na beleza, a região é fortemente inspirada na França e em menor medida, na Europa como um todo. Muitos locais e pontos de referência em Kalos têm inspirações do mundo real, incluindo a Torre do Prisma (Torre Eiffel), o Museu de Arte Lumiose (o Louvre) e as pedras fora da Geosenge City (pedras Carnac).\n[…]\nPokémon selvagens habitam todos os cantos da região de Kalos, muitos dos quais só aparecem nesta área.\n[…]\nCom os jogos ocorrendo em uma região baseada na França, a inspiração do design veio mais da cultura europeia. O lendário trio de Xerneas, Yveltal e Zygarde tem suas raízes na mitologia nórdica, por exemplo. Mais foco do que o normal foi colocado em dar aos novos Pokémon elementos únicos para esta geração. Os títulos X e Y, representando os eixos x e y — também refletindo diferentes formas de pensamento — foram escolhidos no início do desenvolvimento.\n[…]\n\"Pokémon Direct\" Oficial anunciado da Nintendo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Unova",
      "descricao": "Região fictícia dos jogos Pokémon Black e White, da quinta geração."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Black e White, a região de Unova e sua metrópole de arranha-céus, Castelia, se inspiram em qual cidade americana?",
    "resposta": "Nova York",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White",
      "https://bulbapedia.bulbagarden.net/wiki/Unova"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version and Pokémon White Version are 2010 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. They are the first installments in the fifth generation of the Pokémon video game series. First released in Japan on 18 September 2010, they were later released in Europe, North America and Australia in March 2011. Sequels \n[…]\nPokémon Black and White takes place in the Unova region, based on New York City. As with all regions, Unova consists of a number of cities and towns connected by \"Routes\". Random encounters may take place in tall grass along routes or in bodies of water. The player occasionally battles Trainers in cities and towns, as well as along routes.\n[…]\nBlack and White are set in the Unova Region, part of a continental mass located far away from the previous regions, Kanto, Johto, Hoenn, and Sinnoh. Unlike the previous regions which were based on real locations in Japan, Unova is modeled after New York City, an idea developed by game director Junichi Masuda when he visited the city for the launch of Diamond and Pearl.\n[…]\nThe player also gains access to the eastern portion of Unova, which contains Pokémon from the previous games in the series, as well as access to an area unique to each game version: the ultra-metropolitan Black City, home to powerful Pokémon Trainers; and the White Forest, home to humans and Pokémon living in harmony. Cynthia, the former Sinnoh League Champion, is also found in this area of the game and can be challenged.\n[…]\nPokémon Black and White were released in Japan on 18 September 2010. They were later released in Europe on 4 March 2011, in North America on 6 March 2011, and in Australia on 10 March 2011.\n[…]\nSequels to Black and White, Pokémon Black 2 and Pokémon White 2, were released for the Nintendo DS in 2012."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Unova",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Black_e_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version e White Version (ポケットモンスターブラック・ホワイト, Poketto Monsutā Burakku・Howaito; Monstros de Bolso Black・White, Black e White significam Preto e Branco quando traduzidos do inglês para o português, Preto e Branco em japonês seria 黒・白, Kuro・Shiro) são jogos eletrônicos de RPG lançados em 2010, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo lançados para o \n[…]\nPokémon Black e White se passam na região de Unova, inspirada na cidade de Nova Iorque e seus arredores. Como em outras regiões da franquia, Unova é composta por diversas cidades e vilarejos interligados por rotas. Nessas áreas, os jogadores podem encontrar Pokémon selvagens por meio de encontros aleatórios, geralmente ao atravessar trechos de grama alta ou ao explorar corpos d’água.\n[…]\nBlack e White está situado na região de Unova, uma massa continental localizada longe das regiões anteriores, Kanto, Johto, Hoenn e Sinnoh. Ao contrário das regiões anteriores que eram baseadas em locais reais no Japão, Unova é modelado após a cidade de Nova Iorque, Pokémon Pia (ポケモンぴあ) é uma ideia desenvolvida pelo diretor do jogo Junichi Masuda quando ele visitou a cidade para o lançamento de Diamond e Pearl.\n[…]\nUm exemplo particular disso é Castelia City, que serve como a metrópole central da região e teve inspirações como sua \"ponte suspensa no estilo da Ponte do Brooklyn\" e seus \"enormes arranha-céus\". Masuda também queria transmitir um \"sentimento de comunidade\" nas ruas de Castelia. Unova abriga grandes áreas urbanas, um porto, um aeroporto, um parque de diversões, várias pontes e várias cadeias de montanhas.\n[…]\nPokémon Black e White foram lançados no Japão em 18 de setembro de 2010. Eles foram lançados posteriormente na Europa em 4 de março de 2011, na América do Norte em 6 de março de 2011 e na Austrália em 10 de março de 2011.\n[…]\nPokemon Black and White",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Giovanni",
      "descricao": "Chefe da Equipe Rocket nos jogos e no anime Pokémon."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Red e Blue, Giovanni, o chefe da Equipe Rocket, é também o líder de ginásio de qual cidade de Kanto?",
    "resposta": "Viridian",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Giovanni"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Giovanni",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Pokémon Estampas Ilustradas",
      "descricao": "Card game colecionável oficial da franquia Pokémon, lançado no Japão em 1996."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O card game de Pokémon, com suas cartas colecionáveis, chegou às lojas do Japão em que ano?",
    "resposta": "1996",
    "distratores": [
      "1995",
      "1997",
      "1998"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nThe Pokémon Trading Card Game was developed in Japan, based on the 1996 Pokémon Red, Blue, and Yellow Game Boy video game by Nintendo. It was first published in October 1996 by Media Factory in Japan. In the US, it was first published by Wizards of the Coast, towards the end of 1998 to capitalize on the US popularity of Pokémon.\n[…]\n\"1996 Pokémon Japanese Base Set No Rarity Symbol Holo Venusaur\"\n[…]\n\"Black Star Ishihara Signed GX Promo Card\"\n[…]\nEuropean countries can qualify for positions at the Pokémon Trading Card Game World Championships each year, through National Championships and European Rankings.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems.\n[…]\nScrye Pokemon Price and Players Guide 2000"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nExistem 4 tipos de cartas Trainer: Normais; Estádio; Ferramentas Pokémon; e Suporte.\n[…]\nAs cartas estádio causam diversos efeitos, como impedir mais de cinco Pokémon no campo (como Ginásio Narrow), dar a chance de puxar várias cartas (como Speed Stadium) e muitos outros mais. O fato curioso dessas cartas é que quando essas deixaram de ser Trainer, não receberam mais tradução, ficando, somente, Stage.\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Pokémon (anime)",
      "descricao": "Série de animação japonesa baseada na franquia Pokémon, protagonizada por Ash e Pikachu até 2023."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A série animada de Pokémon, com Ash e Pikachu, estreou na televisão japonesa em que ano?",
    "resposta": "1997",
    "distratores": [
      "1996",
      "1998",
      "1999"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_(TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_(TV_series)",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nThe anime series is accompanied by spin-off programming, including Pokémon Chronicles, a series of side stories, and live-action variety and Pokémon-related news shows, such as Pocket Monsters Encore, Weekly Pokémon Broadcasting Station, Pokémon Sunday, Pokémon Smash!, Pokémon Get TV, Meet Up at the Pokémon House? and Where Are We Going with Pokémon!?\n[…]\nPokémon premiered in Japan on TV Tokyo on April 1, 1997. The series is broadcast on the TX Network family of stations first on Thursday evenings; it is then syndicated throughout the rest of Japan's major broadcasters (All-Nippon News Network, Fuji Network System, Nippon Television Network System) on their local affiliates as well as on private satellite and cable networks on various delays.\n[…]\nIn a 2018 interview, the creators of Detective Pikachu, which features a talking Pikachu, revealed that the original intention for the anime was to have the Pokémon talk, but OLM, Inc. was unable to come up with a concept that Game Freak, developer of the mainline games, were accepting of.\n[…]\nThe series has had several episodes removed from rotation in Japan or the rest of the world for various reasons. The most infamous of these episodes was \"Dennō Senshi Porygon\", aired in Japan on December 16, 1997. The episode made headlines worldwide when it caused 685 children to experience seizures and seizure-like symptoms caused by a repetitive flash of light in the episode.\n[…]\nPokémon seasons\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nA série de anime é acompanhada por programação spin-off; incluindo Pokémon Chronicles, uma série de histórias secundárias; e a variedade de ação ao vivo e programas de notícias relacionados a Pokémon; como Pocket Monsters Encore, Weekly Pokémon Broadcasting Station, Pokémon☆Sunday, Pokémon Smash!, Pokémon Get☆TV, Meet Up at the Pokémon House? e Where are we going with Pokémon!?.\n[…]\nPokémon, a Série\n[…]\nO anime possui duas animações principais, que são Pokémon, a Série de 1997 a 2023, narra as jornadas de Ash Ketchum e Pikachu, e Pokémon Horizontes, a Série, a partir de 2023, narra as jornadas de Liko e Roy ou Rain atualmente.\n[…]\nPokémon Chronicles é um spin-off que conta histórias envolvendo os personagens secundários do anime. A maioria dos episódios de Chronicles foram chamados de Pocket Monsters Side Stories (ポケットモンスターサイドストーリー, Poketto Monsutā Saido Sutōrī; lit. \"Histórias Paralelas de Pokémon\"), sendo transmitidos na Weekly Pokémon Broadcasting Station. As demais partes da série são compostas pelo especial de TV Pocket Monsters Crystal e pela série de OVA Férias de Inverno do Pikachu.\n[…]\nPokémon estreou no Japão na TV Tokyo em 1 de abril de 1997. A série é transmitida pela família de estações da TX Network primeiro nas noites de quinta-feira; em seguida, é distribuída para o resto das principais emissoras do Japão (All-Nippon News Network, Fuji Network System, Nippon Television Network System) em suas afiliadas locais, bem como em redes privadas de satélite e cabo com vários atrasos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Pokémon Go",
      "descricao": "Jogo de realidade aumentada para celular da Niantic, em que o jogador captura pokémon andando pelas ruas."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que empresa americana, nascida como um projeto dentro do Google, desenvolveu o Pokémon Go?",
    "resposta": "Niantic",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go",
      "https://en.wikipedia.org/wiki/Niantic,_Inc."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go",
        "situacao": "ok",
        "texto": "Pokémon Go (stylized as Pokémon GO) is a 2016 augmented reality (AR) mobile game originally developed and published by Niantic and since 2025 by Scopely Explore, in partnership with Nintendo and the Pokémon Company, for iOS and Android devices. The game uses GPS to locate, capture, train, and battle Pokémon. It is free-to-play, featuring a freemium model that includes in-app purchases for addition\n[…]\nIn mainland China, Google services are inaccessible due to the Great Firewall, and the GPS feature in Pokémon Go is blocked by Niantic. Players in China must install the game using App Store IDs from different regions and use VPNs to access Google services required to load the game. Some players resort to GPS spoofing apps to bypass the GPS restrictions. Some have turned to a clone app called City Spirit Go, which appeared shortly after Pokémon Go's beta test in Japan.\n[…]\nSome early iOS installs of Pokémon Go required users to provide the app with full access to their Google accounts, allowing the app to \"access players' Gmail-based email, Google Drive-based files, photos and videos stored in Google Photos, and any other content within their Google accounts\". The Pokémon Company and Niantic responded to the concerns, recognizing that the iOS app \"... erroneously requests full access permission for the user's Google account ...\".\n[…]\nThe game's distribution of PokéStops and Gyms (derived from the portals in Ingress, Niantic's science fiction-themed AR game) was noted to be sparser in many minority neighborhoods in a reflection of American demographics. Players in rural areas also complained about the lack of Pokémon spawns, PokéStops, and Gyms in their area. Pokémon Go was criticized for game accessibility issues by players with physical disabilities.\n[…]\nstates, Niantic is firm on not keeping the pandemic bonuses. Players began boycotting Pokémon Go since the first week of August 2021."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Niantic,_Inc.",
        "situacao": "ok",
        "texto": "Niantic, Inc. ( ny-AN-tik) was an American software development company and video game developer based in San Francisco that developed augmented reality mobile games Ingress, Pokémon Go, Harry Potter: Wizards Unite, Pikmin Bloom, and Monster Hunter Now. The company was formed as Niantic Labs in 2010 as an internal startup within Google. The company became an independent entity in October 2015 when\n[…]\nThe company spun out of Google in October 2015, soon after Google's announcement of its restructuring as Alphabet Inc. Niantic also announced that Google, Nintendo, and The Pokémon Company would invest up to $30 million in Series-A funding, $20 million upfront and the remaining $10 million in financing conditioned upon the company achieving certain milestones to support the growth of the company and its products.\n[…]\nIn September 2015, it was announced that Niantic had been developing Pokémon Go in partnership with Nintendo and The Pokémon Company for iOS and Android devices. Tatsuo Nomura, who joined Niantic in 2015 after developing the Google Maps: Pokémon Challenge, acted as director and product manager for the game.\n[…]\nThe lawsuit was settled for $5 million following a decision on January 12, 2021, and Niantic was granted a permanent injunction.\n[…]\nIn August 2021, Niantic faced criticism from the Pokémon Go playerbase due to reverting safety measures implemented during the COVID-19 pandemic, in which gym and PokéStop interaction distances were increased from 40 to 80 meters (130 to 260 ft). New Zealand and the United States were the first countries to have the pandemic bonuses revert on August 1. The Delta variant of COVID-19 in the U.S. became dominant in July 2021, along with outbreaks.\n[…]\nPlayers began boycotting Pokémon Go in the first week of August 2021. Niantic responded to the community on August 26 by permanently changing the interaction distance to 80 meters."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_GO",
        "situacao": "ok",
        "texto": "Pokémon GO é um jogo eletrônico free-to-play de realidade aumentada voltado para smartphones. O jogo é desenvolvido e publicado pela Niantic, Inc., em colaboração com a Nintendo e a The Pokémon Company para as plataformas iOS e Android. O jogo foi inicialmente lançado em julho de 2016 para alguns países, eventualmente foi expandindo para o resto do mundo.\n[…]\nO conceito para o jogo foi concebido em 2014 por Satoru Iwata da Nintendo e Tsunekazu Ishihara da The Pokémon Company como uma brincadeira de 1 de abril em colaboração com Google, chamado Pokémon Challenge. Ishihara tinha sido um desenvolvedor fã do jogo de realidade aumentada anterior da Niantic, Ingress, e viu o conceito do jogo como um jogo perfeito para série Pokémon. A Niantic eventualmente iria utilizar dados de Ingress para preencher locais com PokéStops e ginásios dentro de Pokémon GO.\n[…]\nNo entanto, a Niantic não anunciou oficialmente o lançamento. Pokémon Go, em breve, deverá funcionar em 200 países e regiões, e aumentar ainda mais o facturamento da Nintendo.\n[…]\nNo início da instalação de Pokémon Go no sistema iOS, o aplicativo exigia que os usuários fornecessem suas contas do Google, permitindo o acesso ao aplicativo para \"jogadores que utilizam Gmail, Google Drive e qualquer outro conteúdo dentro de suas contas do Google\". The Pokémon Company e Niantic respondeu às preocupações, reconhecendo que o iOS, no momento, \"...\n[…]\nNo entanto, nas redes sociais e fóruns de discussão da Internet, como o Reddit, continuaram a circular suspeitas de que o Pokémon GO possa ser usado por agências governamentais de inteligência. Tais suspeitas parecem ter sido reforçadas pelo fato de John Hanke, CEO da Niantic, ser um recetor indireto de fundos da Agência Central de Inteligência: a sua empresa, Keyhole, Inc, foi financiada pelo fundo In-Q-Tel – o braço de investimentos tecnológicos da CIA.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Pokémon Red e Blue",
      "descricao": "Primeiros jogos Pokémon lançados no Ocidente, para o Game Boy, versões internacionais de Red e Green."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que compositor da Game Freak criou as músicas dos primeiros jogos Pokémon e depois se tornou um dos produtores da série?",
    "resposta": "Junichi Masuda",
    "distratores": [
      "Ken Sugimori",
      "Satoshi Tajiri",
      "Koji Kondo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Junichi_Masuda",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red,_Blue,_and_Yellow"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Junichi_Masuda",
        "situacao": "ok",
        "texto": "Junichi Masuda (増田 順一, Masuda Jun'ichi; born January 12, 1968) is a Japanese video game composer, director, designer, producer, singer, programmer and trombonist, best known for his work in the Pokémon franchise. He was a member of Game Freak where he was an employee and executive at the company since 1989 after Satoshi Tajiri and Ken Sugimori founded it, starting as a music composer. In 2022, Mas\n[…]\nMasuda has worked at Game Freak since the company's inception in 1989, and has been involved in nearly every title that Game Freak has produced. Masuda was one of the original developers of the Pokémon series, beginning with Pokémon Red and Green. He was first hired to compose video game music, where his first game at Game Freak was Mendel Palace, a 1989 puzzle game for the Nintendo Entertainment System. After Mendel Palace, he worked on Yoshi, the company's first collaboration with Nintendo.\n[…]\nHe has stated that one of the hardest aspects of design is making sure that a Pokémon's name and attributes will appeal to a global audience. Since Pokémon Ruby and Sapphire, Masuda has been one of the main employees who approve or reject designs for new Pokémon. He served as a member of the Game Freak board of directors.\n[…]\nJune, 2014, Masuda was present for the opening of The Pokémon Center Paris the first Pokémon store in Europe\n[…]\nMasuda produced the Japanese ending themes \"Pokémon Shiritori\" and \"Batsugun Type\" for Pokémon Journeys with Japanese electronic group Pasocom Music Club.\n[…]\nOn June 1, 2022, Masuda left Game Freak to The Pokémon Company, acting as Chief Creative Fellow.\n[…]\nMasuda's musical style draws from a number of sources, particularly classical music and the works of Igor Stravinsky and Dmitri Shostakovich. His favorite musical genre is techno, and he has looked to the music of the Super Mario series as an example of video game music that works well."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red,_Blue,_and_Yellow",
        "situacao": "ok",
        "texto": "Pokémon Red Version and Pokémon Blue Version are popular 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.\n[…]\nThe game's music was composed by Junichi Masuda, who used the four sound channels of the Game Boy to create both the melodies and the sound effects and Pokémon \"cries\" heard upon encountering them. He composed the opening theme, with battle scenes in mind, using white noise to sound like marching music and imitate a snare drum. Masuda wrote the music at his home on a Commodore Amiga computer, which only features PCM sample playback and converted to the Game Boy with a program he had written.\n[…]\nPokémon Yellow was developed by Game Freak and entered development after the completion of the Japanese version of Pokémon Blue. Nintendo may have been considering a \"Pokémon Pink\" version to accompany Yellow, based on source code leaked from Nintendo.\n[…]\nIn 2017, The Strong National Museum of Play inducted Pokémon Red and Green to its World Video Game Hall of Fame. In October 2021, the Japan Sumo Association formed a partnership with The Pokémon Company to celebrate the 25th anniversary of Pokémon Red and Blue and gyōji (professional sumo referee) were seen wearing Poké Ball-themed kimono during the January 2022 tournament.\n[…]\nPokémon FireRed Version and Pokémon LeafGreen Version are enhanced remakes of Pokémon Red and Blue. The new games were developed by Game Freak and published by Nintendo for the Game Boy Advance and have compatibility with the Game Boy Advance Wireless Adapter, which originally came bundled with the games.\n[…]\nOfficial website for Pokémon Blue (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Junichi_Masuda",
        "situacao": "ok",
        "texto": "Junichi Masuda (増田 順一, Masuda Jun'ichi; Yokohama, 12 de janeiro de 1968) é um compositor de jogos eletrônicos, diretor, designer, produtor e programador japonês, mais conhecido pelo seu trabalho na franquia Pokémon. Masuda trabalha na Game Freak desde 1989, sendo membro do conselho administrativo da empresa.\n[…]\nSua música foi inspirada da obra celebres compositores modernos como Dmitri Shostakovich, apesar de ter apontando a série Super Mario como exemplo de uma composição modelo para um jogo eletrônico\n[…]\nMasuda nasceu em 12 de janeiro de 1968 em Yokohama, Kanagawa, Japão. Quando era criança, costumava passar as férias com sua família em Kyūshū, onde muitos dos seus parentes ainda vivem. Ele costumava passar seu tempo caçando peixes e insetos, uma brincadeira que mais tarde influenciou no seu design de videogame. Masuda modelou a região de Hoenn da série Pokémon se baseando em Kyūshū, numa tentativa de recuperar suas memórias de verão.\n[…]\nNo colegial, Masuda tocava trombone; logo descobriu a música clássica e se atraiu pelas obras como Le Sacre du Printemps e Symphony No. 5 de Shostakovich.\n[…]\nMasuda frequentou a Japan Electronics College, uma escola técnica em Shinjuku, onde estudou computação gráfica e a linguagem de programação C usando um DEC Professional.\n[…]\nPokémon Red e Blue (1996)  — Compositor, programador\n[…]\nPokémon Crystal (2000)  — Compositor\n[…]\nPokémon Ruby e Sapphire (2002) — Diretor, compositor, projetista\n[…]\nPokémon FireRed e LeafGreen (2004) — Diretor, compositor, projetista\n[…]\nPokémon Diamond e Pearl (2006) — Diretor, compositor\n[…]\nPokémon HeartGold e SoulSilver (2009) — Produtor, compositor\n[…]\nPokémon Black e White (2010) — Diretor, produtor, compositor\n[…]\nPokémon Black e White 2 (2012) — Produtor\n[…]\nPokémon X e Y (2013) — Diretor, produtor, compositor\n[…]\nColuna de Masuda na Game Freak\n[…]\nJunichi Masuda no X",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Rhydon",
      "descricao": "Pokémon dos tipos Terra e Pedra da primeira geração, com um chifre em forma de broca, evolução de Rhyhorn."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Durante a criação de Pokémon Red e Green, qual foi o primeiro pokémon a ser desenhado pela Game Freak?",
    "resposta": "Rhydon",
    "distratores": [
      "Bulbasaur",
      "Clefairy",
      "Pikachu"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Rhydon_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rhydon_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Aves lendárias de Kanto",
      "descricao": "Trio de pokémon lendários da primeira geração formado por Articuno, Zapdos e Moltres."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "As três aves lendárias de Kanto são Articuno, de gelo, Zapdos, elétrica, e qual outra, de fogo?",
    "resposta": "Moltres",
    "distratores": [
      "Ho-Oh",
      "Entei",
      "Talonflame"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Legendary_birds",
      "https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Legendary_birds",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Game Freak",
      "descricao": "Estúdio japonês fundado por Satoshi Tajiri, responsável pelos jogos principais da série Pokémon."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Antes de se tornar o estúdio que criou Pokémon, a Game Freak, de Satoshi Tajiri, era o quê?",
    "resposta": "Uma revista sobre videogames",
    "distratores": [
      "Uma loja de fliperamas",
      "Um estúdio de animação",
      "Uma fábrica de brinquedos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Game_Freak"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Game_Freak",
        "situacao": "ok",
        "texto": "Game Freak Inc. is a Japanese video game developer, best known as the primary developer and co-owners of the Pokémon series of role-playing video games alongside Nintendo and Creatures who also founded and co-own the joint venture The Pokémon Company.\n[…]\nPredating the video game company, Game Freak was a doujin video game magazine created by Satoshi Tajiri in 1983. Ken Sugimori joined the circle at a later date as an illustrator after finding the magazine in a shop and liking it. Tajiri also used \"Game Freak\" as his pen name when he wrote as a freelance writer to publications such as Family Computer Magazine and Famicom Tsūshin.\n[…]\nOn April 26, 1989, Tajiri and Sugimori started a video game development company with the same name. One of Game Freak's first games was the Nintendo Entertainment System action and puzzle game Quinty, which was released in North America as Mendel Palace. Its most popular series, Pokémon—the romanized portmanteau of the Japanese brand Pocket Monsters (ポケットモンスター, Poketto Monsutā)—is published and distributed respectively by The Pokémon Company and Nintendo worldwide.\n[…]\nIn October 2015, Game Freak acquired Koa Games, a mobile development company. The company was subsequently merged into Game Freak on December 1, 2015.\n[…]\nIn October 2024, nearly a terabyte of data from Game Freak's servers was stolen. Development builds, source code, and test sprites either planned or released for past Pokémon games were found, as well as code names for upcoming Pokémon games, and prototypes of unreleased remakes of Quinty and Yoshi. Shortly afterwards, Game Freak addressed the incident, stating that the leak was due to \"unauthorized access to our servers by a third party\", which had taken place in August 2024.\n[…]\nGame Freak at IGN"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Game_Freak",
        "situacao": "ok",
        "texto": "Game Freak Inc. (株式会社ゲームフリーク, Kabushiki gaisha Gēmu Furīku) é uma desenvolvedora de jogos eletrônicos japonesa e principal desenvolvedor de jogos de RPG da série Pokémon. Foi fundada por Satoshi Tajiri em 26 de abril de 1989. Os jogos são publicados pela Nintendo e pela The Pokémon Company.\n[…]\nGame Freak foi originalmente uma publicadora sobre jogos eletrónicos criada por Satoshi Tajiri e Ken Sugimori na década de 1980. Tajiri escrevia e editava o texto, e Sugimori ilustrava. Em 26 de Abril de 1989, Tajiri e Sugimori iniciaram uma companhia de criação de jogos com o mesmo nome. Um dos primeiros jogos foi Quinty para o NES, que foi relançado na América do Norte como Mendel Palace.\n[…]\nSua série mais popular, Pokémon (ポケモン, Pokemon) é publicada pela Nintendo no Japão, América do Norte e Europa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.61 — 2026-10-13**
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
- **Dificuldade percebida** (2026-10-12): no app, quem lê pode avaliar a pergunta em cinco níveis, de muito fácil a muito difícil (§16, "Avaliação"). Essa avaliação poderá mudar o campo `dificuldade`, como **informação adicional à popularidade**, e não no lugar dela. **Por enquanto só é registrada:** não altera o campo, e a dificuldade, estimada ou percebida, **não orienta a criação de perguntas**. A ideia é coletar dados antes de decidir como usá-los.
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

Uma **coleção** é um conjunto de perguntas sobre um mesmo universo, com um modo de jogo próprio (decidido em 2026-10-13). A primeira é a de **pokémon**, do **modo Pokémon** (§15).

- A pergunta da coleção tem o campo `colecao` (`"pokemon"`). O modo da coleção sorteia só as perguntas dela, de qualquer tema.
- **Exclusiva** (campo `exclusiva`): a pergunta sai **só no modo da coleção**, nunca no jogo original (Master, Trilha da Vida, Linear). As perguntas de pokémon feitas antes de 2026-10-13 continuam também no jogo original; as feitas depois são exclusivas do modo Pokémon.
- As perguntas da coleção seguem todas as regras desta Parte I: tema e subtema (os pokémon ficam em Entretenimento › Jogos Eletrônicos), âncora, saturação e fontes. Podem ser com ou sem figura.
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
