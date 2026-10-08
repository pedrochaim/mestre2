Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Quadrinhos** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Irmãos Dalton",
      "descricao": "Quarteto de irmãos bandidos, Joe, William, Jack e Averell, inimigos do caubói Lucky Luke nos quadrinhos franco-belgas"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Os quatro irmãos Dalton, bandidos que vivem fugindo de Lucky Luke, têm alturas bem diferentes. Qual deles é o mais baixinho e esquentado?",
    "resposta": "Joe Dalton",
    "distratores": [
      "Averell Dalton",
      "William Dalton",
      "Jack Dalton"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lucky_Luke"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lucky_Luke",
        "situacao": "ok",
        "texto": "Lucky Luke is a Western comic album series created by Belgian cartoonist, Maurice De Bevere, best known by the pen name Morris, in 1946. Morris drew the series and wrote some of the early adventures while his brother, Louis, wrote and co-wrote some other ones until 1955, after which he started collaborating with French writer René Goscinny. Their partnership lasted until Goscinny's death in 1977. \n[…]\nLucky Luke 2 (1991)\n[…]\nIn 1983, Hanna-Barbera Productions, France 3, Gaumont, Extrafilm Berlin and Morris collaborated to produce the animated TV series Lucky Luke, which ran for 26 episodes and was based on original album stories. The series' main voice actors were William Callaway as Lucky Luke, Robert Ridgely as Jolly Jumper, Paul Reubens as Bushwack, Frank Welker as Joe Dalton, Rick Dees as Jack Dalton, Fred Travalena as William Dalton, Bob Holt as Averell Dalton, and Mitzi McCall as Ma Dalton.\n[…]\nXilam produced two further animated series involving Lucky Luke: Rintindumb (2006) and The Daltons (2010).\n[…]\nIn June 2020, Dargaud Media (whom previously produced The New Adventures of Lucky Luke and The Daltons) announced a new preschool animated series that following a young version of the comic book character entitled Kid Lucky which is based on the comic strip spin-off of the same name, marking Dargaud Media's in-house Lucky Luke adaptation without the involvement of Xilam with them co-producing alongside Paris-based animation studio Ellipsanime Productions and fellow Belgian animation company Belvision.\n[…]\nLucky Luke – Infogrames, PlayStation – 1998 and Windows (Europe only) – 2000 as Lucky Luke: On the Dalton's Trail\n[…]\nIn 2000, statues of Lucky Luke, Ratanplan and Joe Dalton were erected in the Jules Van den Heuvelstraat, Middelkerke, Belgium. They were designed by Luc Madou.\n[…]\nIn 1993, French rapper MC Solaar released his song \"Nouveau Western\" with references to Lucky Luke and the Daltons."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lucky_Luke",
        "situacao": "ok",
        "texto": "Lucky Luke é uma série de banda desenhada ou história em quadrinhos, de origem franco-belga, ambientada no Velho Oeste americano e criada em 1946 por Morris.\n[…]\nDepois de Tintim e de Asterix, Lucky Luke é a série mais popular e a mais vendida entre o género na Europa.\n[…]\nLucky Luke — O cowboy que dispara mais rápido do que a própria sombra, enfrenta em todas as suas aventuras o crime e a injustiça. Um verdadeiro super herói.\n[…]\nIrmãos Dalton — Inimigos recorrentes de Lucky Luke, completamente broncos (em ordem crescente em altura e estupidez), Joe, William, Jack, e Averell. São primos dos verdadeiros irmãos Dalton, que apareceram também numa história.\n[…]\nJolly Jumper — “O cavalo mais esperto do mundo”. O cavalo de Lucky Luke.\n[…]\nBilly The Kid — Outro inimigo recorrente de Lucky Luke. Ele é um dos bandidos mais perigosos do velho oeste.\n[…]\nAs vozes principais da série foram William Callaway como Lucky Luke, Robert Ridgely como Jolly Jumper, Paul Reubens como Bushwack, Frank Welker como Joe Dalton, Rick Dees como Jack Dalton, Fred Travalena como William Dalton, Bob Holt como Averell Dalton e Mitzi McCall como Ma Dalton. Peter Cullen, Pat Fraley, Barbara Goodson e Mona Marshall também contribuíram com suas vozes.\n[…]\nA Xilam produziu mais duas séries animadas com Lucky Luke: Rintindumb (2006) e Les Dalton (fr) (2010).\n[…]\nLa Ballade des Dalton (1978)\n[…]\nLes Dalton en cavale (1983)\n[…]\nGo West! A Lucky Luke Adventure\n[…]\nLucky Luke (1991)\n[…]\nLucky Luke 2 (1991)\n[…]\nLes Dalton (2004)\n[…]\nLucky Luke (2009)\n[…]\n(em francês) Site Oficial do Lucky Luke\n[…]\n(em inglês) Edições do Lucky Luke em Inglês\n[…]\n(em português) Lucky Luke: O Cowboy mais rápido que a própria sombra![ligação inativa]",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Robin",
      "descricao": "Identidade de parceiro mirim do Batman, usada por vários jovens ao longo das décadas nos quadrinhos da DC"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Bem antes de Jason Todd, quem foi o primeiro garoto a vestir o uniforme de Robin, parceiro do Batman, estreando em 1940?",
    "resposta": "Dick Grayson",
    "fonte": [
      "https://en.wikipedia.org/wiki/Robin_(character)",
      "https://en.wikipedia.org/wiki/Dick_Grayson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Robin_(character)",
        "situacao": "ok",
        "texto": "Robin is the alias of several superheroes appearing in American comic books published by DC Comics. The character was created by Bob Kane, Bill Finger, and Jerry Robinson to serve as a junior counterpart and the sidekick to the superhero Batman. As a team, Batman and Robin have commonly been referred to as the Caped Crusaders and the Dynamic Duo. The character's first incarnation, Dick Grayson, de\n[…]\nThe current and former Robins always feature prominently in Batman's cast of supporting heroes; Dick, Jason, Tim, and Damian all regard him as a father. In current continuity as of 2025, Dick Grayson serves as Nightwing, Jason Todd is the Red Hood, Stephanie Brown is Batgirl, while Tim Drake and Damian both share the title of Robin. In recent years, Batman has also adopted new sidekicks in the form of Bluebird, whose name references Robin, and The Signal.\n[…]\nDC was initially hesitant to turn Grayson into Nightwing and to replace him with a new Robin. To minimize the change, they made the new Robin, Jason Todd, who first appeared in Batman #357 (1983), similar to a young Grayson. Like Dick Grayson, Jason Todd was the son of circus acrobats murdered by a criminal (this time the Batman adversary Killer Croc), and then adopted by Bruce Wayne.\n[…]\nDick Grayson is Robin in Young Justice, voiced by Jesse McCartney. In the second season, Grayson has become Nightwing, while Tim Drake, voiced by Cameron Bowen, is the new Robin, succeeding Jason Todd, who is already dead by the start of the season.\n[…]\nRobin is portrayed by Nick Lang in Holy Musical B@man!. His portrayal is based mainly on Burt Ward's Dick Grayson.\n[…]\nThe Dick Grayson and Jason Todd incarnations of Robin will be featured in the animated film Dynamic Duo, focused on their origin story as the \"Dynamic Duo\". The film is being produced by DC Studios, Warner Bros. Pictures Animation, and 6th & Idaho for a theatrical release.\n[…]\nRobin on IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dick_Grayson",
        "situacao": "ok",
        "texto": "Richard John \"Dick\" Grayson is a superhero appearing in American comic books published by DC Comics, commonly in association with Batman, the Teen Titans, and the Justice League. Created by writer Bill Finger and artist Bob Kane, he first appeared in Detective Comics #38 in April 1940. Dick is the original and most popular incarnation of Robin, the crime-fighting partner of Batman, with whom he fo\n[…]\nDick Grayson's character has evolved since he was introduced in 1940. In 1984, he graduated from the role of Robin to become the adult superhero Nightwing, protector of the city of Blüdhaven, an economically troubled neighbor of Gotham City. As Bruce's eldest adoptive son, Dick has become an older-brother figure to his male successors as Robin: tearaway Jason Todd, teenage prodigy Tim Drake, and Batman's biological child, trained assassin Damian Wayne.\n[…]\nThe character was first introduced in Detective Comics #38 (1940) by Batman creators Bill Finger and Bob Kane. Robin's debut was an effort to get younger readers to enjoy Batman. The name \"Robin, The Boy Wonder\" and the medieval look of the original costume are inspired by the legendary hero Robin Hood. Finger had named Dick Grayson after both the half-brother of pulp fiction character Frank Merriwell, named Dick, and book editor Charles Grayson, Jr.\n[…]\nAn elseworld in which multiple prominent heroes including Wonder Woman and Superman are turned into vampires. Dick Grayson is later revealed to be the king of the vampires and kills Batman, Red Robin, and Red Hood.\n[…]\nDick Grayson as Robin appears in The Lego Batman Movie, voiced by Michael Cera.\n[…]\nDick Grayson as Robin and Nightwing appears as a playable character in Lego Batman 3: Beyond Gotham, voiced by Josh Keaton.\n[…]\nDick Grayson as Robin and Nightwing appears as a playable character in Lego Batman: Legacy of the Dark Knight, voiced by Hyoie O'Grady as an adult and Greg Jones as a child."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Robin_%28DC_Comics%29",
        "situacao": "ok",
        "texto": "Robin é um super-herói das histórias em quadrinhos da editora americana DC Comics. Ele é o ajudante oficial do Batman, com o qual forma uma equipe popularmente conhecida como Dupla Dinâmica, Cruzados Encapuzados ou, simplesmente, Batman e Robin.\n[…]\nDick Grayson é o mais clássico, famoso e querido dos Robins entre os fãs e o público. Como Robin, Dick foi o melhor lutador e líder, sendo muito alegre e cheio de fazer piadinhas, mesmo em momentos tensos de combate, sendo, no entanto, um parceiro razoavelmente obediente ao Batman. Após um tempo, Dick cresceu e deixou de ser o Robin, passando a se tornar um herói independente: o Asa Noturna, líder dos Jovens Titãs.\n[…]\nTim Drake era um jovem garoto que acompanhou as aventuras de Batman e Robin desde o assassinato dos “Graysons Voadores”, crime do qual ele foi testemunha ocular. Tim, sozinho, deduziu as identidades de Bruce e Dick através de suas habilidades instintivas de detetive e passou a acompanhar suas carreiras com uma gradual proximidade.\n[…]\nDamian é filho de Talia Al Ghul (filha de Ra's Al Ghul), com Bruce Wayne. Por muito tempo, odiou o pai. Após a saga Batman R.I.P, ele se tornou o novo Robin, combatendo o crime em Gotham ao lado do novo Batman, Dick Grayson. Foi o mais arrojado, atrevido e desobediente de todos os Robins, sendo também o mais violento deles depois de Jason Todd.\n[…]\nDick Grayson aparece na série live-action Titans, sendo interpretado pelo ator Brenton Thwaites. Curran Walters interpreta Jason Todd, o sucessor de Dick, que foi pego roubando pneus do Batmóvel. Jay Lycurgo interpreta Tim Drake, que fez sua estreia em live-action na terceira temporada e é retratado como descendente de afro-americanos e asiáticos.\n[…]\nRobin (DC Comics) (em inglês) no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Homem de Gelo",
      "descricao": "Bobby Drake, mutante da Marvel que controla o gelo, um dos cinco X-Men originais"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Dos cinco alunos que formaram a equipe original dos X-Men, qual era o mais jovem do grupo?",
    "resposta": "Homem de Gelo (Bobby Drake)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Iceman_(Marvel_Comics)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iceman_(Marvel_Comics)",
        "situacao": "ok",
        "texto": "Iceman (Robert Louis \"Bobby\" Drake) is a superhero appearing in American comic books published by Marvel Comics and is a founding member of the X-Men. Created by writer Stan Lee and artist/co-plotter Jack Kirby, the character first appeared in The X-Men #1 (Sept. 1963). Iceman is a mutant born with superhuman abilities. He has the ability to manipulate ice and cold by freezing water vapor around h\n[…]\nMarvel has recently released Marauders Annual #1 that features a very heartwarming prom segment between Bobby Drake (Iceman) and his boyfriend, a new face to the comics, Christian Frost.\" Joshua Yehl of IGN described Iceman as \"the perfect gay boyfriend,\" saying, \"Bobby isn't out to be the biggest, baddest guy around.\n[…]\nBut it's a very well-executed story regardless, one that showcases Bobby Drake's crazy personal life while still making the most of his incredible powers. Iceman is shaping up to be a worthy addition to the ResurrXion lineup.\"\n[…]\nIceman #1 is a triumphant return for an underappreciated series. The longer Sina Grace writes Bobby Drake, the more Iceman develops into a truly compelling, relatable leading man. Grace found the perfect artistic partners in Nathan Stockman and Frederico Blee. Here's hoping Iceman gets more of the attention it deserves the second time around.\" Maite Molina of ComicsVerse gave Iceman #1 a score of 80%, asserting, \"Iceman #1 is a resolute start to a new run.\n[…]\nIn the Ultimate Marvel continuity, Bobby Drake is the youngest founding member of the X-Men. He ran away from his family at the peak of government-supported Sentinel attacks, fearing his family would be killed in such an attack. During the World Tour arc, Iceman is injured by Proteus, which results in his parents filing a lawsuit against Xavier. Bobby eventually rebels against his parents, and later returns to the X-Men.\n[…]\nIceman (Ultimate) at Marvel.com\n[…]\nIceman (Earth-58163) at Marvel.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homem_de_Gelo",
        "situacao": "ok",
        "texto": "O Homem de Gelo (Iceman) é o codinome de Robert Louis \"Bobby\" Drake, um super-herói mutante do Universo Marvel criado pelo escritor Stan Lee e pelo desenhista/co-escritor Jack Kirby em 1963. Um dos seis X-Men originais, o Homem de Gelo é um dos mutantes mais presentes no Universo Marvel, tendo feito parte de equipes como X-Factor, Defensores e Campeões.\n[…]\nNativo de Long Island, Bobby descobriu seus poderes de criação de gelo quando um bully chamado Rocky Beasely atacou ele e sua namorada, Judy Harmon. Com os moradores assustados, o xerife colocou Bobby Drake na cadeia, mas ele foi solto por Scott Summers a pedido do Professor Xavier. Na Escola para Jovens Super Dotados do Professor Xavier, Bobby aprendeu a controlar seus poderes e integrou a primeira formação dos X-Men.\n[…]\nQuando os X-Men originais foram presos em Krakoa, a ilha viva, o Professor Xavier reuniu novos mutantes para resgatar a equipe anterior. Como os outros originais, Bobby se ausentou dos X-Men para dar mais espaço para os novos. Depois disso ele integrou Os Campeões, os Novos Defensores e o X-Factor, que incluiu todos os cinco X-Men originais. Foi no X-Factor que a vida do Homem de Gelo teve uma profunda mudança, e sua personalidade começou a ser moldada até se tornar o que é hoje.\n[…]\nApós os X-Factor se reunirem aos X-Men ao enfrentarem os Rei das Sombras, Homem de Gelo ficou na equipe dourada liderada por Tempestade. Foi aí que sua vida mudou ainda mais. Primeiro ele é manipulado molecularmente por Mikhail Rasputin (irmão de Colossus), e descobre que pode transformar seu corpo inteiro em gelo.\n[…]\nEm X-Men: Evolution, Homem de Gelo é um dos Novos Mutantes que ganham mais proeminência a partir da terceira termporada.\n[…]\nBobby tem mais destaque em X-Men 2. Ele namora com Vampira e faz uma parede de gelo para proteger Wolverine.\n[…]\nHomem de Gelo em Marvel.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Garfield",
      "descricao": "Gato laranja, preguiçoso e comilão, protagonista da tira de jornal criada pelo americano Jim Davis em 1978"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Preguiçoso e comilão, o gato Garfield detesta muita coisa. Qual é o dia da semana que ele odeia mais que todos?",
    "resposta": "Segunda-feira",
    "fonte": [
      "https://en.wikipedia.org/wiki/Garfield",
      "https://en.wikipedia.org/wiki/Garfield_(character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Garfield",
        "situacao": "ok",
        "texto": "Garfield is an American comic strip and media franchise created by Jim Davis. Originally published locally as Jon in 1976 (later changed to Garfield in 1977), then in nationwide syndication from 1978, it chronicles the life of the title character Garfield, a lazy, gluttonous, and sarcastic cat, along with a dim-witted dog named Odie and their human owner, Jon Arbuckle.\n[…]\nThe title character, Garfield, was inspired by the cats Davis grew up with. He was named after Davis' grandfather, James A. Garfield Davis, whose personality also influenced the character; Davis described him as \"a large, cantankerous man\". Garfield's owner, Jon Arbuckle, was named after businessman John Arbuckle, who Davis had heard mentioned in a commercial for Yuban Instant Coffee.\n[…]\nThe strip's title character is Garfield, an obese orange tabby cat. Garfield's personality is defined by his sarcasm, laziness, and gluttony, with the character showing a particular affinity for lasagna. His owner is Jon Arbuckle, a man with an affinity for stereotypically nerdy pastimes. Jon's other pet is Odie, a dim-witted yellow dog. Most strips center around interactions among the three characters' conflicting personalities.\n[…]\nDavis, Jim (1998). 20 Years & Still Kicking!: Garfield's Twentieth Anniversary Collection. New York: Ballantine Books. ISBN 978-0-345-42126-5.\n[…]\nDavis, Jim (2004). In Dog Years I'd be Dead: Garfield at 25. Random House. ISBN 978-0-345-45204-7.\n[…]\nRogers, Katharine M. (2001). The Cat and the Human Imagination: Feline Images from Bast to Garfield. University of Michigan Press. ISBN 978-0-472-08750-1.\n[…]\nArchive of Garfield.com on its last day before conversion\n[…]\nGarfield at Don Markstein's Toonopedia. Archived[link removed] from the original on August 1, 2016.\n[…]\nThe Garfield Show"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Garfield_(character)",
        "situacao": "ok",
        "texto": "Garfield is a fictional cat and the protagonist of the comic strip of the same name, created by Jim Davis. Garfield is portrayed as a lazy, fat, cynical and self-absorbed orange tabby cat. He is noted for his love of lasagna, pizza, coffee, and sleeping, and his hatred of Mondays, Nermal, the vet, and exercise.\n[…]\nLorenzo Music (1982–2001; TV specials, Garfield and Friends, Garfield’s Mad About Cats)\n[…]\nBill Murray (2004–2006; Garfield: The Movie, Garfield: A Tail of Two Kitties)\n[…]\nJon Barnard (2004–2021; Garfield's Nightmare, Garfield, Garfield: Saving Arlene, Garfield: Lasagna World Tour, Garfield Gets Real, The Garfield Show: Threat of the Space Lasagna, singing voice in The Garfield Show (season 4), Garfield Cat Litter commercial, Garfield Pinball)\n[…]\nFrank Welker (2007–present; Garfield Gets Real, Garfield's Fun Fest, Garfield's Pet Force, The Garfield Show, Mad, Nickelodeon All-Star Brawl, Nickelodeon Extreme Tennis, Nickelodeon Kart Racers 3: Slime Speedway, Nickelodeon All-Star Brawl 2)\n[…]\nDavid Gasman (2008; The Garfield Show pilot)\n[…]\nGérard Surugue (2019–2020; Garfield Originals)\n[…]\nChris Pratt (2024–present; The Garfield Movie)\n[…]\nDamien Laquet (2025; Garfield Kart 2 - All You Can Drift)\n[…]\nDavid Coburn (2026; Garfield: Escape from Monday)\n[…]\nLamorne Morris (TBA; Garfield+)\n[…]\nGarfield has been a mascot of Kennywood, a traditional amusement park in West Mifflin, Pennsylvania, near Pittsburgh since the 1990s. A ride at Kennywood, \"Garfield's Nightmare\", was created with the exclusive input of Garfield creator, Jim Davis.\n[…]\nIn the first two Garfield films, Garfield: The Movie and Garfield: A Tail of Two Kitties, Garfield was created using computer animation, though the movies were otherwise primarily live-action. In these films, Garfield was voiced by Bill Murray.\n[…]\nGarfield.com – \"The Official Site of Garfield\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Garfield",
        "situacao": "ok",
        "texto": "O gato Garfield é estrela de uma das tirinhas mais famosas da história, sendo publicado em 2570 jornais de todo o mundo (só perdendo para Peanuts). As outras personagens principais são Odie, um cão, e Jon Arbuckle, um cartunista, dono dos dois. Garfield é criação de Jim Davis, que tirou o nome de seu\n[…]\nEm 2004, foi lançado Garfield, o Filme, que usou um Garfield criado por computação gráfica e dublado por Bill Murray (a versão brasileira é dublada pelo ator Antônio Calloni). Um segundo longa-metragem, Garfield 2, foi lançado em 2006.\n[…]\nEm 2009, foi lançada uma segunda série animada, O Show do Garfield, desta vez em computação gráfica, e um 3º filme, chamado Garfield Pet Force (Garfield - Um Super Herói Animal no Brasil).\n[…]\nGarfield - Um gato de cor caramelo listrado. Preguiçoso, guloso, viciado em café, amante de televisão e acima de tudo, sarcástico. Adora chutar Odie da mesa, arrotar, caçar pássaros e carteiros, o seu prato favorito é lasanha. Odeia segunda-feira, passas, Nermal, dietas (que vez ou outra Jon lhe impõe) e caçar ratos (\"Lábios que tocam num rato jamais tocarão os meus\"). Apesar de tudo tem um bom coração;\n[…]\nNermal - O \"gato mais lindo do mundo\", segundo ele mesmo. Frequentemente aparece, para desprezo de Garfield, já que vive enchendo sua paciência, geralmente provocando-o. No desenho, Garfield gosta de tentar mandá-lo para Abu Dhabi, mas isso também acontece em uma tira de 1983 e no episódio chamado O Terror da Escola. Porém ele e Garfield se mostram amigos em algumas situações;\n[…]\nSegunda-feira: Garfield \"nasceu\" numa segunda-feira, mas a odeia. Frequentemente as tirinhas de começo da semana mostram o gato se esborrachando (ou reclamando). Mas quando 19 de junho cai numa segunda, Garfield acaba celebrando;\n[…]\nGarfield no IMDb]\n[…]\n«Toonopedia:Garfield»\n[…]\n«Garfield na L&PM»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Gastão",
      "descricao": "Primo do Pato Donald nos quadrinhos da Disney, famoso por sua sorte absurda"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Nos quadrinhos da Disney, qual primo do Pato Donald é conhecido como o pato mais sortudo do mundo?",
    "resposta": "Gastão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gladstone_Gander"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gladstone_Gander",
        "situacao": "ok",
        "texto": "Gladstone Gander is a cartoon character created in 1948 by Carl Barks for Walt Disney's Comics and Stories. He is an anthropomorphic gander (male goose) who possesses exceptionally good luck that grants him anything he desires as well as protecting him from any harm. This is in contrast to his cousin Donald Duck, who is often characterized for having bad luck. Gladstone is also a rival of Donald f\n[…]\nGladstone Gander first appeared in \"Wintertime Wager\" in Walt Disney's Comics and Stories #88 (January 1948), written and drawn by Carl Barks. In that story he arrives at Donald Duck's house during a freezing cold Christmas Day to remind him of a wager Donald made the previous summer; that he could swim in the Frozenbear Lake during Christmas Day or forfeit his house to Gladstone.\n[…]\nAnother instance of this with his rivalry with Donald was in the \"Salmon Derby\" (Walt Disney's Comics and Stories #167, August 1954), where Gladstone catches the biggest fish and wins a new car but Donald manages to save a wealthy tycoon's daughter and is able to purchase a much bigger car.\n[…]\nIn many stories, Gladstone is also considered among the prime candidates for Scrooge McDuck's succession. In \"Some Heir Over the Rainbow\" (Walt Disney's Comics and Stories #155, August 1953) by Carl Barks, Scrooge gives $1,000 to Donald, Gladstone, and Huey, Dewey and Louie to determine how they use it in order to be the most suitable heir to his fortune.\n[…]\n(Of course, no stories denying the event were published.) In a more recent version of the family tree created by Don Rosa, with input from Barks, it was established that Daphne Duck (Donald's paternal aunt) married Goostave Gander and the two were Gladstone's parents. This is consistent with what Gladstone says in \"Race to the South Seas\": \"Scrooge McDuck is my mother's brother's brother-in-law\".\n[…]\nDuck family (Disney)\n[…]\nGladstone Publishing\n[…]\nGladstone Gander at Inducks"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gast%C3%A3o",
        "situacao": "ok",
        "texto": "Ganso Gastão (Gladstone Gander nos Estados Unidos), o primo sortudo do Pato Donald. É apresentado como \"o pato mais sortudo do mundo\". Sempre quer paquerar a Margarida e fazendo ciúmes ao Donald.\n[…]\nPorém em algumas histórias onde Donald e Gastão são retratados ainda na infância, o personagem contava com tanta sorte quanto em sua vida adulta.\n[…]\nUm personagem com essa mesma caracterização apareceu no desenho dos estúdios Disney como parte do esforço de guerra americano, chamado de \"O espírito de 1943\", era a parte \"gastadora\" da personalidade de Donald. Enquanto a outra metade em conflito com a caracterização de um pato escocês e que seria reutilizado na criação do Tio Patinhas, era a parte poupadora.\n[…]\nGastão tem como alter ego o super herói Quatro Folhas. Ele surgiu como uma das escolhas de Esquálidus para integrar o grupo conhecido como Ultra Heróis.\n[…]\nSua primeira história foi \"Wintertime Wager\", publicada em janeiro de 1948 nos Estados Unidos. Esta história só foi publicada no Brasil em 1973, na revista \"Cinqüentenário Disney 1\" com o título \"A Visita Do Primo Gastão\".\n[…]\nGastão fez duas aparições na série animada DuckTales, onde foi interpretado por Rob Paulsen. Ele aparece em um episódio de House of Mouse, porém, sem falas. Ele também aparece no reboot DuckTales, aparecendo pela primeira vez no episódio \"The House of the Lucky Gander\". Nesta série ele é interpretado por Paul F. Tompkins.\n[…]\n«Gastão» (em inglês). Inducks",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Geriatrix",
      "descricao": "Ancião da aldeia gaulesa de Asterix, casado com uma mulher muito mais jovem"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na aldeia de Asterix, quem é o morador de idade mais avançada, casado com uma moça bem mais nova?",
    "resposta": "Geriatrix",
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_Asterix_characters"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Asterix_characters",
        "situacao": "ok",
        "texto": "This is a list of characters in the Asterix comics.\n[…]\nHe then goes and hires new shield-bearers including Asterix, Geriatrix, Fulliautomatix and Obelix (in these cases the shield is horribly tilted, so he is forced to stand on a slant, and Obelix carried him with one hand like a waiter). The introduction page varies between showing the bearers straining under Vitalstatistix' not inconsiderable bulk as he looks into the distance in some of the books, while in others he looks at them in good humour as they look up to him in respect.\n[…]\nGeriatrix is the oldest inhabitant of Asterix's village: he is mentioned as 93 years old in  Asterix at the Olympic Games (while drunk, he says he feels ten years younger, to which Asterix replies, \"Well, that makes you 83, and it's time you were in bed\"). Some translations make him no more than 80.\n[…]\nIn prequels such as How Obelix Fell into the Magic Potion When he was a Little Boy, in which most of the characters are children and Vitalstatistix is a slim young man, Geriatrix, along with Getafix, is unchanged.\n[…]\nMrs. Geriatrix enjoys her husband's devotion and also her status as wife of the village's most senior inhabitant, which makes her one of the inner circle of village wives. Her youthful appearance suggests that she is less than half her husband's age; she is also a lot taller. She rules her home and marriage, and regularly tells her husband what to do even in direct contradiction of his own stated opinions. She appears to be in favour of women's rights, as shown in Asterix and the Secret Weapon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Asterix",
        "situacao": "ok",
        "texto": "Esta lista reúne os personagens da história em quadrinhos francesa Asterix:\n[…]\nAsterix, (asterisco), é um guerreiro gaulês e o herói das histórias, morador da aldeia de Armórica.\n[…]\nCétautomatix (trocadilho com C'est Automatic, \"é automático\") ou Automatix , é o ferreiro da aldeia. Brutamontes e temperamental, vive provocando Ordenalfabetix devido ao cheiro de seus peixes, sempre levando uma peixada que dá início a brigas com o envolvimento de vários outros moradores da aldeia, e espanca o bardo Chatotorix sempre que este tenta cantar alguma coisa. Sua esposa, conhecida apenas por Senhora Cétautomatix, aparece pela primeira vez em Astérix e a Zaragata.\n[…]\nChanteclairix (homenagem a Chanticleer, o galo das histórias de Roman de Renart), ou Gallinarius Minus, chamado de águia imperial, é o galo da aldeia. Ele aparece na maioria dos álbuns de Asterix, mas é claramente indicado na história Chanticleerix publicada em Asterix e o Regresso dos Gauleses.\n[…]\nDéboitemenduménix, (luxação do menisco), é um agricultor da aldeia aparecendo em O Filho de Asterix.\n[…]\nElèvedelix, é um dos habitantes da aldeia, aparece em Asterix e os Normandos.\n[…]\nGalantine, (galantina), aparece em Asterix e o Regresso dos Gauleses.\n[…]\nKeskonrix, é um jovem morador da aldeia, munido de um arco e uma aljava durante uma caçada a javalis viu uma patrulha romana capturar Assurancetourix. Em Asterix e Cleópatra, ele aguarda o retorno de Asterix, Panoramix, Obelix e Idéiafix de Alexandria.\n[…]\nLe Noiraud, é o único frango negro da aldeia de Asterix. É o filho de Roussette e Chanticleerix.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Flash",
      "descricao": "Super-herói velocista da DC Comics, identidade de Barry Allen e de outros personagens"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual herói da Liga da Justiça é chamado de o Homem Mais Rápido do Mundo?",
    "resposta": "Flash",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flash_(DC_Comics_character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flash_(DC_Comics_character)",
        "situacao": "ok",
        "texto": "The Flash is the name of several superheroes appearing in American comic books published by DC Comics. Created by writer Gardner Fox and artist Harry Lampert, the original Flash first appeared in Flash Comics #1 (cover-dated January 1940, released November 1939). Nicknamed \"the Scarlet Speedster\", all incarnations of the Flash possess \"superspeed\", which includes the ability to run, move, and thin\n[…]\nA staple of the comic book DC Universe, the Flash has been adapted to numerous DC films, video games, animated series, and live-action television shows. In live-action, Barry Allen has been portrayed by Rod Haase in the 1979 television special Legends of the Superheroes, John Wesley Shipp in the 1990 The Flash series and Grant Gustin in the 2014 The Flash series, and Ezra Miller in the DC Extended Universe series of films, beginning with Batman v Superman: Dawn of Justice (2016).\n[…]\nThe name \"John Fox\" is combined from the names of seminal comic book writers John Broome, who co-created the Barry Allen and Wally West Flashes, and Gardner Fox, who co-created the Jay Garrick Flash.\n[…]\nAn African-American teenager of Earth 12 named Danica Williams appears as the Flash in the Justice League Beyond series, acting as Wally West's successor during the 2040s (following the events of Batman Beyond). She is employed at the Flash Museum in Central City, and like Barry Allen, is chronically late. She later enters into a relationship with Billy Batson, who is the secret identity of the superhero, Captain Marvel.\n[…]\nThroughout his 70-year history, the Flash has appeared in numerous media. The Flash has been included in multiple animated features, such as Super Friends and Justice League, as well as his own live action television series and some guest star appearances on Smallville (as the Bart Allen/Impulse version). There are numerous videos that feature the character.\n[…]\nThe Flash at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Flash_%28DC_Comics%29",
        "situacao": "ok",
        "texto": "\"Flash\" é um nome compartilhado por diversos super-heróis da DC Comics. Criado pelo escritor Gardner Fox e pelo artista Harry Lampert, o Flash original estreou em Flash Comics #1 (1940).\n[…]\nTambém chamado de Velocista Escarlate, o Flash possui velocidade e reflexos sobre-humanos e viola certas leis da física, podendo ultrapassar a velocidade da luz. Até então, quatro personagens ganharam a supervelocidade de modos diferentes e assumiram a identidade de Flash: Jay Garrick (1940-1956), Barry Allen (1956-1986, 2008-presente), Wally West (1986-2006, 2007-presente) e Bart Allen (2006-2007).\n[…]\nBarry Allen é considerado o primeiro super-herói da Era de Prata dos Quadrinhos e permaneceu como um dos mais populares desde então. Cada versão do Flash foi um membro-chave ou da Sociedade da Justiça da América ou da Liga da Justiça, os principais grupos da DC.\n[…]\nInimigos de Barry Allen\n[…]\nDemônio da Velocidade (Flash McGee)\n[…]\nEm 1990 foi adaptada para a TV a história do segundo Flash, Barry Allen, interpretado por John Wesley Shipp.\n[…]\nEm Justice League Action Flash aparece como um dos protagonistas da série e age como fez em Liga da Justiça e em Liga da Justiça sem Limites e é um dos melhores amigos do Homem-Borracha.\n[…]\nFlash está presente no Universo Estendido DC, tendo breves participações nos filmes Batman v Superman: Dawn of Justice e Esquadrão Suicida, interpretado por Ezra Miller, que também reprisará o papel, dessa vez como um dos protagonistas, no filme Liga da Justiça. Além disso, um filme solo do personagem foi lançado em 2023, intitulado apenas como The Flash (filme). O filme foi inspirado na saga Ponto de Ignição dos quadrinhos e serviu como um Reboot do Universo Estendido DC.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Magali",
      "descricao": "Personagem comilona da Turma da Mônica, de Mauricio de Sousa"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre todas as comidas que a Magali devora na Turma da Mônica, qual é a sua fruta preferida?",
    "resposta": "Melancia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Magali_(personagem)",
      "https://en.wikipedia.org/wiki/Magali_(Monica%27s_Gang)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Magali_(personagem)",
        "situacao": "ok",
        "texto": "Magali é uma personagem fictícia das histórias em quadrinhos da Turma da Mônica. Mauricio de Sousa se baseou na sua filha Magali para criar a personagem. Desde janeiro de 1989, Magali tem sua própria revista em quadrinhos, onde aparecem também histórias de seu gato de estimação, chamado de Mingau. A personagem é famosa pelo apetite interminável e é responsável pela inserção do núcleo mágico nas hi\n[…]\nMagali tem sete anos de idade, e sua característica principal é seu apetite voraz. Ela come de tudo, normalmente em alta velocidade, e sente fome o tempo todo, mas apesar disso, é vista como magricela pelos amigos e nunca engorda. Sua comida favorita é melancia - um traço que também foi inspirado pela filha de Mauricio.\n[…]\nMagali é a única personagem canhota da Turma da Mônica.\n[…]\nMagali é a personagem mais meiga e delicada da turma. Tem poderes mágicos herdados de sua tia Nena.\n[…]\nNa história \"Um sonho de Natal feliz, muito feliz\", é revelado que Tia Nena é uma bruxa boa. Em Turma da Mônica Jovem, é mostrado que Magali herdou seus poderes.\n[…]\nEntretanto, outra história mostra que o gato foi dado de presente pela Mônica. Em uma história, é revelado seu nome completo: Mingau Urussanga da Silva. Em 2008, Mingau aparece em Turma da Mônica Jovem. Muitos leitores pensaram que o Mingau havia morrido, na verdade, tornou-se o pai de uma ninhada de filhotes, fruto de seu relacionamento com Aveia, já que a revista se passa no futuro, onde a Turma está na adolescência.\n[…]\nQuinzinho é um menino português, filho do padeiro do bairro. Namorado de Magali, faz diversos pães e bolos para ela. Quinzinho, às vezes, se pergunta se Magali gosta dele ou, simplesmente, de sua comida. Ele possui irmãos com nomes baseados em números (Onzinho, Dozinho, Trezinho, Quatorzinho), mas em uma história, revela que seu nome é Joaquim e Quinzinho é apenas um apelido."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Magali_(Monica%27s_Gang)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Superman",
      "descricao": "Super-herói da DC Comics vindo do planeta Krypton, criado por Jerry Siegel e Joe Shuster"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na famosa abertura dos programas de rádio e TV, o Superman é mais rápido que uma bala e mais poderoso que o quê?",
    "resposta": "Uma locomotiva",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Adventures_of_Superman_(radio_series)",
      "https://en.wikipedia.org/wiki/Superman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Adventures_of_Superman_(radio_series)",
        "situacao": "ok",
        "texto": "The Adventures of Superman is a long-running radio serial that originally aired from 1940 to 1951 featuring the DC Comics character Superman.\n[…]\nThat opening, one of the most famous in radio history, was delivered by Jackson Beck, the announcer-narrator for the program from 1943 to 1950. He also had recurring roles, voicing an occasional tough guy and also portraying Beany Martin, the Daily Planet's teenage copy boy. On Superman episodes featuring Batman, he played Bruce Wayne's butler, Alfred Pennyworth.\n[…]\nMany aspects associated with Superman, such as kryptonite, originated on radio, as did certain characters, including Daily Planet editor Perry White, copy boy Jimmy Olsen and police inspector Bill Henderson. On March 2, 1945, Superman met Batman and Robin for the first time.\n[…]\nParamount's animated Superman short films used the same voice actors as the radio series, and Columbia's Superman movie serials (1948, 1950) were \"adapted from the Superman radio program broadcast on the Mutual Network\".\n[…]\nIt returned as a mystery program targeted toward adults on Saturday, October 29, 1949, at 8:30pm over the ABC network. ABC aired this adult-themed version for 13 weeks, concluding with \"Dead Men Tell No Tales\" on January 21, 1950. This broadcast marked the final radio appearance of Bud Collyer as Clark Kent/Superman.\n[…]\nSuperman / Kal-El / Clark Kent:\n[…]\nThe Adventures of Superman at Radio Index\n[…]\n\"Superman... in the Media\", Radio Recall, February 2005\n[…]\nSuperman Radio Episode List\n[…]\nEpisodes of The Adventures of Superman  from Old Time Radio Researchers Group Library\n[…]\n\"The Adventures of Superman\". Botar's Old Time Radio. (free mp3 downloads)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Superman",
        "situacao": "ok",
        "texto": "Superman is a superhero created by writer Jerry Siegel and artist Joe Shuster, first appearing in issue #1 of Action Comics, published in the United States on April 18, 1938. Superman has been regularly published in American comic books published by DC Comics since then, and has been adapted to other media including radio serials, novels, films, television shows, theater, and video games.\n[…]\nIn later Superman radio programs the character continued to take on such issues, tackling a version of the Ku Klux Klan in a 1946 broadcast, as well as combating anti-semitism and veteran discrimination.\n[…]\nThe first adaptation of Superman beyond comic books was a radio show, The Adventures of Superman, which ran from 1940 to 1951 for 2,088 episodes, most of which were aimed at children. The episodes were initially 15 minutes long, but after 1949 they were lengthened to 30 minutes. Most episodes were done live. Bud Collyer was the voice actor for Superman in most episodes. The show was produced by Robert Maxwell and Allen Ducovny, who were employees of Superman, Inc. and Detective Comics, Inc.\n[…]\nSuperman appeared in the theatrical animated feature film DC League of Super-Pets (2022), voiced by John Krasinski.\n[…]\nAdventures of Superman, which aired from 1952 to 1958, was the first television series based on a superhero. It starred George Reeves as Superman. Whereas the radio serial was aimed at children, this television show was aimed at a general audience, although children made up the majority of viewers. Robert Maxwell, who produced the radio serial, was the producer for the first season. For the second season, Maxwell was replaced with Whitney Ellsworth.\n[…]\nStarting in 1974, Superman was one of the leading characters in the Hanna-Barbera-produced animated series Super Friends and all its sequels until 1986.\n[…]\nMusic of Superman\n[…]\nSuperman on DC Database, a DC Comics wiki\n[…]\nSuperman on IMDb"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Sandman",
      "descricao": "Série em quadrinhos da DC sobre Sonho, o senhor dos sonhos, iniciada em 1989"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Na série Sandman, de Neil Gaiman, Sonho tem seis irmãos, os Perpétuos. Qual deles é o primogênito da família?",
    "resposta": "Destino",
    "distratores": [
      "Morte",
      "Desejo",
      "Delírio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Endless_(DC_Comics)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Endless_(DC_Comics)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Liga da Justiça",
      "descricao": "Equipe de super-heróis da DC Comics criada em 1960, com Superman, Batman e Mulher-Maravilha"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Qual membro fundador da Liga da Justiça, de 1960, é um alienígena de pele verde capaz de mudar de forma e ler mentes?",
    "resposta": "Caçador de Marte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Justice_League",
      "https://en.wikipedia.org/wiki/Martian_Manhunter"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Justice_League",
        "situacao": "ok",
        "texto": "The Justice League, or Justice League of America (JLA), are a group of superheroes appearing in American comic books published by DC Comics. The team first appeared in The Brave and the Bold #28 (March 1960). Writer Gardner Fox conceived the team as a revival of the Justice Society of America, a similar team from DC Comics from the 1940s which had been pulled out of print due to a decline in sales\n[…]\nEditor Julius Schwartz asked writer Gardner Fox to reintroduce the Justice Society of America. Schwartz decided to rename it the \"Justice League of America\" because he felt \"League\" would appeal better to young readers, evoking sports organizations such as the National League. The Justice League of America debuted in The Brave and the Bold #28 (March 1960), and after two further appearances in that title, got its own series, which quickly became one of the company's best-selling titles.\n[…]\nJustice League of America (vol. 1) was published from 1960 to 1987.\n[…]\nFrom the Justice League's inception in 1960 until 1984, the team's roster always included a number of A-list characters to draw in readers, such as Wonder Woman and Superman. But in Justice League of America Annual #2 (October 1984), the Justice League was revised to entirely comprise more obscure characters such as Vixen, Vibe, and the Martian Manhunter. The original A-list members would not be brought back into the cast until 1986.\n[…]\nDue to the nature of the DC Multiverse, the Justice League has had many alternate universe depictions appear throughout its history. Some are morally-inverse supervillain teams, such as the Crime Syndicate of America from Earth-3, a team consisting of villainous versions of the mainline heroes who the League have fought frequently.\n[…]\nJustice League Queer\n[…]\nJustice League United\n[…]\nJustice Leagues\n[…]\nJustice League of America at Don Markstein's Toonopedia WebCitation Archive[link removed]\n[…]\nThe Justice League Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Martian_Manhunter",
        "situacao": "ok",
        "texto": "J'onn J'onzz, better known as the Martian Manhunter, is a superhero appearing in American comic books published by DC Comics. Created by writer Joseph Samachson and artist Joe Certa, the character first appeared in the story \"The Manhunter from Mars\" in Detective Comics #225 (November 1955). A roster member of the Justice League of America, he is one of the seven founding members and a reoccurring\n[…]\nHe also appears in Justice League; when Despero assaults the Watchtower, he is mentioned by Firestorm as having been a member of the Justice League when it initially fought with Despero. When Despero incapacitates Firestorm, Element Woman, and the Atom, Martian Manhunter appears and defeats him with a telepathic assault. Working with his JLA colleagues in Justice League of America, he investigates the activities of the Secret Society of Super Villains, led by the Outsider.\n[…]\nThe three Leagues are soundly defeated, and Martian Manhunter is trapped in the Firestorm matrix along with his colleagues by Firestorm's evil counterpart Deathstorm. While inside Firestorm, for the duration of the Forever Evil-themed issues of the Justice League of America title, Manhunter and Stargirl shared a close adventure interlinked with one another's memories as Despero assisted the Syndicate with keeping the JLA imprisoned.\n[…]\nDespero – A Justice League of America villain who murdered the parents of J'onn's protégé Gypsy and his teammate Steel. J'onn in turn is responsible for some of Despero's most humiliating defeats, leading to a strong mutual enmity between the two characters.\n[…]\nJ'onn J'onzz appears in Justice League of America, portrayed by David Ogden Stiers. This version only displays shapeshifting capabilities, which he experiences difficulty with, being able to impersonate others for a short period of time.\n[…]\nMartian Manhunter appears in Justice League: Chronicles."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Liga_da_Justi%C3%A7a",
        "situacao": "ok",
        "texto": "A Liga da Justiça, também conhecida como Liga da Justiça da América (no original, Justice League of America) é uma fictícia equipe de super-heróis originada nas histórias em quadrinhos publicadas pela editora americana DC Comics.\n[…]\nNo início, o grupo era composto por Aquaman, Caçador de Marte, Flash (Barry Allen), Lanterna Verde (Hal Jordan) e Mulher-Maravilha (Diana Prince). Os super-heróis mais conhecidos e membros honorários da SJA; Superman (Kal-El/Clark Kent) e Batman (Bruce Wayne) tiveram participações especiais por decisão editorial. Formando os sete clássicos membros fundadores.\n[…]\nO cancelamento de Justice League International levou ao lançamento do novo título Justice League of America (volume 3). A nova Liga da Justiça da América era totalmente separada da Liga da Justiça principal, a nova equipe foi formada por Amanda Waller e consistia de Steve Trevor, Caçador de Marte, Arqueiro Verde, Gavião Negro, Mulher-Gato, o novo Lanterna Verde Simon Baz, Stargirl, Katana e Vibro.\n[…]\nJ'onn J'onnz / Caçador de Marte - Membro Fundador\n[…]\nCaçadora\n[…]\nJ'onn J'onnz / Caçador de Marte\n[…]\nJ'onn J'onnz / Caçador de Marte\n[…]\nCaçadora\n[…]\nJ'onn J'onnz / Caçador de Marte\n[…]\nAtualmente, o status de membro fundador está a cargo de Bruce Wayne (Batman), Hal Jordan (Lanterna Verde), Clark Kent (Superman), Arthur Curry (Aquaman), Barry Allen (Flash), J'onn Jonzz (Caçador de Marte) e Diana Prince (Mulher Maravilha).\n[…]\nEm 2012, foi lançado Justice League: Doom que mostrava os heróis enfrentando a Legião do Mal, que era liderada por Vandal Savage. Ambas as formações tinham Superman, Batman, Mulher-Maravilha, Lanterna Verde, Flash e Caçador de Marte as mesmas da animação da Liga da Justiça, com aparições de Aquaman, Arqueiro Verde, Ciborgue e outros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "X-Men",
      "descricao": "Equipe de mutantes da Marvel criada por Stan Lee e Jack Kirby, liderada pelo Professor Xavier"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na formação original dos X-Men havia só uma mulher. Que codinome ela usava?",
    "resposta": "Garota Marvel (Jean Grey)",
    "fonte": [
      "https://en.wikipedia.org/wiki/X-Men",
      "https://en.wikipedia.org/wiki/Jean_Grey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/X-Men",
        "situacao": "ok",
        "texto": "The X-Men are a superhero team in American comic books published by Marvel Comics. Created by writer/editor Stan Lee and artist/co-plotter Jack Kirby, the team first appeared in The X-Men #1 (September 1963). Although initially cancelled in 1970 due to low sales, following its 1975 revival and subsequent direction under writer Chris Claremont, it became one of Marvel Comics's most recognizable and\n[…]\nTheir stories have frequently involved Magneto, a powerful mutant with control over magnetic fields, who is depicted as an old friend of and foil to Xavier, acting as an adversary or ally. An enormous cast of characters have joined the X-Men at various times. The original X-Men, introduced in 1963, are Cyclops, Jean Grey, Beast, Warren Worthington III, and Iceman. Well-known X-Men added to the team in 1975 include Colossus, Nightcrawler, Storm, and Wolverine.\n[…]\nComics scholar Douglas Wolk describes autumn 1985 as the \"peak of X-Men's world beating phase\", when a single month produced the double-sized Uncanny X-Men #200, the two-part miniseries X-Men/Alpha Flight, an X-Men Annual, a New Mutants Special Edition, and Heroes for Hope, a fundraiser for relief of the 1983-1985 famine in Ethiopia. The following year, a new series began, resurrecting Jean Grey and re-uniting the original X-Men under the name X-Factor.\n[…]\nIn 2010, \"Second Coming\" concluded the plot threads on Messiah Complex and Messiah War. Nightcrawler died in X-Force #26 (June 2010). In 2011, the aftermath of the \"X-Men: Schism\" storyline led to the fallout between Wolverine and Cyclops. During the \"Regenesis\" storyline, Wolverine's team was featured in a new flagship series titled Wolverine and the X-Men, Wolverine rebuilt the original X-Mansion and named it the Jean Grey School for Higher Learning.\n[…]\nRidout, Cefn, ed. (2022). Marvel Year by Year: A Visual History: New Edition. DK. ISBN 978-0-7440-5451-4.\n[…]\nX-Men at Marvel.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jean_Grey",
        "situacao": "ok",
        "texto": "Jean Elaine Grey is a superhero appearing in American comic books published by Marvel Comics, usually those featuring the X-Men, a group of superheroes of which she is a founding member. Created by writer Stan Lee and artist/co-plotter Jack Kirby, the character first appeared in The X-Men #1 (September 1963). Jean Grey is a member of a subspecies of humans known as mutants—individuals born with su\n[…]\nThat honor falls to one of his first students, Jean Grey, a powerful telepath in her own right who became part of the original five X-Men. She would later grow even more powerful though, setting up some of the X-Men's most epic moments into motion. Over the years she's undergone transformations not only in her skills and abilities but also regarding her costumes. She started out in the early days like everyone else, eventually adopting the Marvel Girl suit and persona.\n[…]\nJean Grey had a few brief appearances in animated television series from the 1960s through the 1980s. She debuted as Marvel Girl in the \"Sub-Mariner\" segment of The Marvel Super Heroes (1966), where this version was a member of the Allies for Peace. She later made another brief appearance in the Spider-Man and His Amazing Friends (1981–1983) episode \"The Origin of Iceman\" in a flashback.\n[…]\nJean Grey has been featured in several Marvel Legends action figure lines. The character appears in the novel X-Men: The Chaos Engine Trilogy, written by Steven A. Roman. This version is a member of an X-Men detachment who were inside the Starlight Citadel when Doctor Doom, Magneto, and the Red Skull separately obtained a flawed Cosmic Cube and rewrote reality to their liking. Due to the Citadel protecting them from Doom's changes, Grey and the X-Men work to restore their original reality.\n[…]\nPhoenix (Jean Grey) at Marvel.com\n[…]\nJean Grey (Age of Apocalypse) at Marvel.com\n[…]\nJean Grey (Earth-9575) at Marvel.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/X-Men",
        "situacao": "ok",
        "texto": "X-Men é uma equipe de super-heróis de histórias em quadrinhos estadunidenses publicadas pela Marvel Comics. Criados por Stan Lee e Jack Kirby, a primeira aparição da equipe foi em The X-Men #1 (setembro de 1963). Embora inicialmente cancelada em 1970 devido às baixas vendas, após seu renascimento em 1975 e a subsequente direção do escritor Chris Claremont, tornou-se uma das franquias mais reconhec\n[…]\nXavier abriga os X-Men em sua mansão, sob a fachada de uma \"Escola para Jovens Superdotados\". Seu endereço é rua Graymalkin Lane, n° 1407, em Salem Center, no condado de Westchester, Nova York. Os primeiros alunos de Charles (os \"X-Men Originais\") foram: Ciclope (Scott Summers), Garota Marvel (Jean Grey), Fera (Henry 'Hank' McCoy), Anjo (Warren Kenneth Worthington III) e Homem de Gelo (Robert 'Bobby' Drake).\n[…]\nNo penúltimo arco de Morrison, Planeta X é revelado que Xorn é na verdade Magneto, que havia se infiltrado na Mansão X. Ele subjuga todos da equipe e lança um ataque a Nova York. Seus planos são desfeitos com a chegada de Jean Grey e Wolverine. No entanto, Magneto, já totalmente louco, mata Jean invertendo o seu fluxo sanguíneo. Logan, enfurecido, decepa sua cabeça. Morrison deixou a Marvel em 2004 e X-treme X-men foi cancelada. Tem início o Reload dos títulos X.\n[…]\nWyngarde), Madelyne Pryor, Homem Múltiplo (James Madrox), Medula (Sarah), Mímico (Calvin Rankin), Mística (Raven Darkhölme), Moira MacTaggert, Noturno (Marvel Comics), Omega Sentinela, Onyxx, Petra, Fênix (Força Fênix), Polaris (Lorna Dane), Garota Marvel (Rachel Summers/Grey), Sábia (Tessa), Salva-Vidas (Heather Cameron), Stacy X (Miranda Leevald), Solaris (Shiro Yoshida), Sway (Suzanne Chan), Pássaro Trovejante (John Proudstar), Pássaro Trovejante (Neal Shaara), Tom Corsi, Xorn (Kuan-Yin Xorn), Xorn (Shen Xorn).\n[…]\nX-Men(em inglês) em Marvel.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "A Liga Extraordinária",
      "descricao": "Série em quadrinhos de Alan Moore e Kevin O'Neill que reúne personagens da literatura vitoriana"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Liga Extraordinária, de Alan Moore, qual comandante de submarino criado por Júlio Verne faz parte do grupo?",
    "resposta": "Capitão Nemo",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_League_of_Extraordinary_Gentlemen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_League_of_Extraordinary_Gentlemen",
        "situacao": "ok",
        "texto": "The League of Extraordinary Gentlemen (LoEG) is a multi-genre, crossover comic book series co-created by writer Alan Moore and artist Kevin O'Neill which began in 1999. The comic book spans four volumes, an original graphic novel, and a spin-off trilogy of graphic novellas.\n[…]\nIn a 1997 interview with Andy Diggle for the now defunct Comics World website, Alan Moore gave the title of the work as \"The League of Extraordinary Gentlefolk\". Moore changed the name to Gentlemen to better reflect the Victorian era. Simon Bisley was originally going to be the artist for the series before being replaced by Kevin O'Neill.\n[…]\nWhen no such apology was forthcoming, both Moore and O'Neill decided to withdraw future volumes of the League from DC in protest. Since the duo was still working on the Black Dossier at the time, it was agreed that it would become the last League project published by DC/WildStorm, with subsequent projects published jointly by Top Shelf Productions and Knockabout Comics in the US and UK respectively, who published both Volume III: Century, and the Nemo Trilogy, as graphic novella trilogies.\n[…]\nThe League of Extraordinary Gentlemen appear in a self-titled film, consisting of Allan Quatermain, Captain Nemo, Mina Harker, an original Invisible Man named Rodney Skinner, Dr. Jekyll and Edward Hyde, Dorian Gray, and Tom Sawyer.\n[…]\nThe DVD release of The Mindscape of Alan Moore contains an interview with the artist Kevin O'Neill that involves the collaboration with Alan Moore, League of Extraordinary Gentlemen: Century, and his involvement with censorship.\n[…]\nAnnotations to Nemo: Heart of Ice\n[…]\nAnnotations to Nemo: The Roses of Berlin\n[…]\nAnnotations to Nemo: River of Ghosts\n[…]\nThe League of Extraordinary Gentlemen series listing at the Internet Speculative Fiction Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_League_of_Extraordinary_Gentlemen_%28revista_em_quadrinhos%29",
        "situacao": "ok",
        "texto": "The League of Extraordinary Gentlemen é uma série de revista em quadrinhos co-criada pelo roteirista Alan Moore e pelo artista Kevin O'Neill que começou em 1999. A série abrange duas minisséries de seis edições, Volume I, Volume II, e uma graphic novel chamada Black Dossier lançada pelo selo America's Best Comics da DC Comics, assim como um terceiro volume e uma trilogia spin-off chamada Nemo, pub\n[…]\nO ano é 1898, e Mina Murray é recrutada por Campion Bond em nome da Inteligência Britânica para reunir uma liga de outros indivíduos extraordinários para proteger os interesses do Império: Capitão Nemo, Allan Quatermain, Dr. Jekyll, e Hawley Griffin, O Homem Invisível. Eles ajudam a parar uma guerra de gangues entre Fu Manchu e o Professor Moriarty, arqui-inimigo de Sherlock Holmes. Depois disso, eles participam dos eventos de A Guerra dos Mundos, de H. G. Wells.\n[…]\nDepois, Mina e Allan se unem com o também imortal Orlando e presenciam uma aventura que se estende por um século, de 1910 a 2009, que diz respeito a uma trama de magos do mal para criar uma Moonchild que pode vir a se tornar o Anticristo. Durante esta aventura, a filha do Capitão Nemo, Janni Dakkar, é apresentada, e algumas de suas aventuras são narradas.\n[…]\nNuma entrevista em 1997 com Andy Diggle para o site Comics World, Alan Moore disse que o título da série seria \"The League of Extraordinary Gentlefolk\". Moore mudou o nome para Gentlemen para melhor refletir a era Vitoriana. Simon Bisley seria, a princípio, o artista da série depois de ser substituído por Kevin O'Neill.\n[…]\nMoore disse:\n[…]\nWarren Ellis citou The League of Extraordinary Gentlemen como uma inspiração para seu quadrinho Ignition City.\n[…]\nAlan Moore: an extraordinary gentleman – Q&A. The Guardian, 25 de julho de 2011. (em inglês)\n[…]\nFour Micro-Essays on League of Extraordinary Gentlemen: 2009. Comics Alliance, 27 de julho de 2012. (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Mjolnir",
      "descricao": "Martelo mágico do deus Thor nos quadrinhos da Marvel"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Nos quadrinhos da Marvel, o martelo Mjolnir, do deus Thor, foi forjado com qual metal fictício?",
    "resposta": "Uru",
    "distratores": [
      "Vibranium",
      "Adamantium",
      "Carbonádio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mjolnir_(comics)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mjolnir_(comics)",
        "situacao": "ok",
        "texto": "Thor Odinson is a superhero appearing in American comic books published by Marvel Comics, based on the Germanic god of the same name. Created by artist Jack Kirby, writer Stan Lee, and scripter Larry Lieber, the character first appeared in Journey into Mystery #83 (1962) and first received his own title with Thor #126 (1966). Comic books featuring Thor have been published across several volumes.\n[…]\nThor wields an enchanted hammer called Mjölnir which is crafted from the fictional metal uru, making it nearly indestructible. Wielding it improves his natural control over wind, rain, thunder, and lightning and weather. He can use the hammer to fly by throwing it into the air and grabbing the leather strap to pull himself off the ground. The hammer also allows Thor to travel between dimensions, moving him between Earth and Asgard.\n[…]\nOther characters have taken the title of Thor, including Jane Foster, Beta Ray Bill, Eric Masterson, Volstagg, and Storm. The Marvel Multiverse features many variants of Thor, including Ultimate Thor in the Ultimate Universe, Thor 2099 in Marvel 2099, Throg the Frog of Thunder, and King Thor from the future. Wonder Woman of DC Comics wielded Thor's power after lifting Mjolnir in the 1996 miniseries DC vs. Marvel.\n[…]\nEsposito, Joey (2011-05-05). \"The Greatest Thor Comic Books\". IGN. Retrieved 2024-01-08.\n[…]\nHarn, Darby (2020-10-11). \"Marvel: Every Version Of Thor, Ranked\". Comic Book Resources. Retrieved 2024-01-08.\n[…]\nHernandez, Gab (2022-05-03). \"Marvel: The 10 Best Adaptations Of Thor In Movies & TV, Ranked\". Screen Rant. Retrieved 2024-01-06.\n[…]\nSchedeen, Jesse (2020-01-02). \"Marvel Comics Gives Thor a Massive Upgrade for 2020\". IGN. Retrieved 2024-01-09.\n[…]\nStone, Sam (2020-08-19). \"Thor Just BUTCHERED One of Marvel's Most Powerful Gods\". Comic Book Resources. Retrieved 2024-01-09.\n[…]\nThor (Thor Odinson) at Marvel.com\n[…]\nThor on Marvel Database, a Marvel Comics wiki"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thor_%28Marvel_Comics%29",
        "situacao": "ok",
        "texto": "Thor Odinson é um personagem fictício que aparece nas histórias em quadrinhos estadunidenses publicadas pela Marvel Comics, baseado no deus germânico de mesmo nome. Criado pelos escritores Stan Lee e Larry Lieber, e pelo artista Jack Kirby, o personagem surgiu pela primeira vez em Journey into Mystery #83 (agosto de 1962) e ganhou seu próprio título com Thor #26 (1966). Histórias em quadrinhos pro\n[…]\nQuando O Poderoso Thor surgiu nos quadrinhos Marvel, os artistas se inspiraram nas lendas nórdicas, com seus deuses e ameaças tão fantásticas. Mas ele só foi retratado como o verdadeiro deus nórdico e não um humano com poderes, quando Lee assumiu os roteiros do personagem, que no início ficaram a cargo de seu irmão, Larry Lieber. Assim foi criado o mais poderoso membro dos Vingadores.\n[…]\nThor é virtualmente um deus de outra realidade, possuindo vastos poderes. Desta maneira, possui uma enorme força e velocidade sobre-humanas. Também é capaz de controlar os elementos da tempestade, gerando trovões, relâmpagos, raios, furacões e geadas. Além de possuir armas poderosas, como o martelo mágico Mjölnir.\n[…]\nOdin criou para Thor a mais fiel e poderosa arma possível, o martelo Mjolnir. Feito de um minério místico especial chamado Uru e forjado no coração de uma estrela pelos Deuses ferreiros de Asgard, Brokk e Eitri, os lendários ferreiros. Essa fantástica arma, quando arremessada, sempre retorna à mão do possuidor. O Martelo mágico também é capaz de criar portais entre dimensões, desferir golpes poderosos, além absorver qualquer tipo de energia e relançá-la ampliada.\n[…]\nThor: God of Thunder, baseado no filme, foi lançado em 2011.\n[…]\nLego Marvel Super Heroes, um dos principais personagens, possui o martelo Mjölnir, tem como habilidades voar, atirar o martelo e a capacidade de invocar o poder do relâmpago.\n[…]\nThor (Marvel Comics) (em inglês) no IMDb\n[…]\n«Thor» (em inglês)  no Marvel.com\n[…]\n«Marvel Directory: Thor»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Watchmen",
      "descricao": "Série em quadrinhos de Alan Moore e Dave Gibbons, publicada pela DC entre 1986 e 1987"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Watchmen, qual personagem tem a pele azul e poderes quase divinos, ganhos num acidente em laboratório de física nuclear?",
    "resposta": "Doutor Manhattan",
    "fonte": [
      "https://en.wikipedia.org/wiki/Doctor_Manhattan",
      "https://en.wikipedia.org/wiki/Watchmen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Doctor_Manhattan",
        "situacao": "ok",
        "texto": "Doctor Manhattan (Dr. Jonathan \"Jon\" Osterman) is a fictional DC Comics character created by writer Alan Moore and artist Dave Gibbons. He debuted in the limited series graphic novel, Watchmen.\n[…]\nAfter a laboratory accident, atomic physicist Jon Osterman gains the ability to observe and manipulate matter at the subatomic level. The U.S. government dubs him Doctor Manhattan due to his immense destructive potential. As he explores the extent of his powers, Jon becomes increasingly detached from his personal life and his understanding of the human experience, which dehumanizes him.\n[…]\nJonathan Osterman is born in 1929 to a Jewish-American family of German descent. He plans to follow in his father's footsteps as a watchmaker, but when the U.S. drops the atomic bomb on Hiroshima, his father declares his profession outdated and forces Jon to work toward a career studying nuclear physics. This turning point foreshadows Doctor Manhattan's \"exterior\" perception of time as predetermined and all things within it as so determined, including Manhattan's reactions and emotions.\n[…]\nManhattan also goes back in time and changes Carver Colman's future for the better. He then goes back to the Watchmen universe, bringing Rorschach and Ozymandias with him. Manhattan saves his Earth by making all nuclear weapons disappear. Afterward, he takes Mime and Marionette's infant son with him and proceeds to raise him on his own, so he will become their planet's equivalent to Superman.\n[…]\nDoctor Manhattan appears in Watchmen (2024), voiced by Michael Cerveris.\n[…]\nDoctor Manhattan appears in Watchmen: The End Is Nigh, voiced by Crispin Freeman."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Watchmen",
        "situacao": "ok",
        "texto": "Watchmen is a comic book limited series created by the British creative team of writer Alan Moore, artist Dave Gibbons, and colorist John Higgins. It was published monthly by DC Comics in 1986 and 1987 before being collected in a single-volume edition in 1987. Watchmen originated from a story proposal Moore submitted to DC featuring superhero characters that the company had acquired from Charlton \n[…]\nOne of two government-sanctioned heroes (along with Doctor Manhattan) who remains active after the Keene Act is passed in 1977 to ban superheroes. His murder, which occurs shortly before the first chapter begins, sets the plot of Watchmen in motion. The character appears throughout the story in flashbacks and aspects of his personality are revealed by other characters.\n[…]\nDr. Jon Osterman / Doctor Manhattan\n[…]\nCaptain Atom was the only hero with actual superpowers in Dick Giordano's Action Hero line at Charlton, just like Manhattan is the only character with actual superpowers in Watchmen. However, the writer found he could do more with Manhattan as a \"kind of a quantum super-hero\" than he could have with Captain Atom. In contrast to other superheroes who lacked scientific exploration of their origins, Moore sought to delve into nuclear physics and quantum physics in constructing the character of Dr.\n[…]\nThe miniseries, taking place seven years after the events of Watchmen in November 1992, follows Ozymandias as he attempts to locate Doctor Manhattan alongside Reginald Long, the successor of Walter Kovacs as Rorschach, following the exposure and subsequent failure of his plan for peace and the subsequent impending nuclear war between the United States and Russia.\n[…]\nThis has allowed new masked crime fighters to assist the police against the supremacists. Doctor Manhattan, Adrian Veidt / Ozymandias, and Laurie Blake / Silk Spectre are central characters to the show's plot."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Doctor_Manhattan",
        "situacao": "ok",
        "texto": "Watchmen é uma série limitada de história em quadrinhos(pt-BR) ou banda desenhada(pt-PT?) escrita por Alan Moore e ilustrada por Dave Gibbons, publicada originalmente em doze edições mensais pela editora estadunidense DC Comics entre 1986 e 1987. A série foi reimpressa mais tarde em brochura (ou trade paperback).\n[…]\nEsta vitória, além de muitas outras diferenças entre o mundo verdadeiro e o retratado nos quadrinhos, como por exemplo os carros elétricos serem a realidade da indústria dos automóveis e o petróleo não ser mais a maior fonte de energia, derivaria da existência naquele cenário de um personagem conhecido como Dr. Manhattan, um indivíduo dotado de poderes especiais, os quais o levam a possuir vasto controle sobre a matéria e a energia, elevando-o ao  estado de um homem-deus.\n[…]\nManhattan, o único a possuir poderes (como explodir ou desmontar objetos, e até mesmo pessoas, pois controla os átomos), foi o primeiro da \"nova era\" de super-heróis mais sofisticados que durou do começo dos anos 1960 até a promulgação da Lei Keene em 1977, implantada em resposta à greve da polícia e a revolta da população contra os vigilantes que agiam acima da lei. À época, o grupo conhecido como Crimebusters se dispunha a combater a criminalidade na cidade de Nova York.\n[…]\nDr. Manhattan (Jonathan Osterman) — É o homem-deus, que vê a vida como apenas mais um fenômeno do cosmo, e é o único herói dotado de super-poderes. Dr. Manhatan era um cientista nuclear, acidentalmente desintegrado em uma experiência. Aos poucos sua força de vontade faz seus átomos se unirem novamente e volta à vida, mas de uma maneira diferente.\n[…]\nManhattan vai perdendo aos poucos sua humanidade, se tornando um ser menos humano e que enxerga apenas reações químicas. É adaptado do Capitão Átomo.\n[…]\nVolume 04: Antes de Watchmen: Dr. Manhattan;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Sandman",
      "descricao": "Série em quadrinhos da DC sobre Sonho, o senhor dos sonhos, iniciada em 1989"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na série Sandman, qual irmã de Sonho aparece como uma jovem gótica, simpática e bem-humorada, de cartola e ankh no pescoço?",
    "resposta": "Morte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Death_(DC_Comics)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Death_(DC_Comics)",
        "situacao": "ok",
        "texto": "Death of the Endless is a fictional character, a personification of death who appears in American comic books published by DC Comics. She first appeared in The Sandman vol. 2, #8 (August 1989) and was created by Neil Gaiman and Mike Dringenberg.\n[…]\nPhysically, Death is also opposite to the traditional western culture personification of death, the Grim Reaper. In The Sandman, Death instead appears as an attractive, pale  goth girl dressed in casual clothes — often a black top and jeans. She also wears a silver ankh on a chain around her neck, and has a marking similar to the eye of Horus around her right eye. She is pleasant, kind, down-to-earth, perky, and has been a nurturing figure for both incarnations of Dream.\n[…]\nMcKean also used a series of professional English models for representations of Death on covers of Sandman.\n[…]\nDeath appears in The Sandman (2022), portrayed by Kirby.\n[…]\nDeath has a brief animated cameo in the 2017 fan-film, Sandman: 24 Hour Diner, based on #6 of Sandman. In an original sequence to the story, she collects the nightmares of the deceased patrons of the diner and rescues her brother Dream.\n[…]\nDeath is described and discussed by American filmmaker Kevin Smith during his interview with Joe Rogan on The Joe Rogan Experience podcast #1123, in the context of how he dealt with his heart surgery. While on the operating table he thought about the Death character, and how in an issue of The Sandman, she was asked by an older man: \"That's it? I did all these things. I worked my fingers to the bone. What did I get?\", to which Death replied \"You got what everybody gets. You got a lifetime\".\n[…]\nDeath appears in the Audible adaptation of The Sandman, voiced by Kat Dennings.\n[…]\nCharacters of The Sandman"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Morte_%28Sandman%29",
        "situacao": "ok",
        "texto": "Esta é uma lista de personagens apropriados e publicados pela DC Entertainment.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Asterix",
      "descricao": "Guerreiro gaulês baixinho criado por René Goscinny e Albert Uderzo em 1959"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na aldeia de Asterix, qual bardo costuma terminar amarrado e amordaçado no banquete final, porque ninguém suporta sua cantoria?",
    "resposta": "Chatotorix",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cacofonix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cacofonix",
        "situacao": "ok",
        "texto": "This is a list of characters in the Asterix comics.\n[…]\nFirst appearance: Asterix and the Banquet (book 5 in France).\n[…]\nErix — the captain's son. Seen in Asterix and the Banquet, he is mentioned in Asterix and Cleopatra as being left as a deposit on a new ship.\n[…]\nSeniorservix – Sea captain from Gesoriacum who appears in Asterix and the Banquet and Asterix in Corsica. Seniorservix's name is a pun both on his age, and on the Senior Service tobacco traditionally popular among Royal Navy sailors.\n[…]\nGracchus Armisurplus – Centurion of Compendium for Asterix the Gladiator and Asterix and the Banquet; however his name is translated differently in each album (in Asterix and the Banquet he appears as Centurion Lotuseatus).\n[…]\nCaius Fatuus – A gladiator trainer who is a major character in Asterix the Gladiator and is mentioned in Asterix and the Banquet\n[…]\nVexatius Sinusitus is a corruption-fighting Roman quaestor, whom Getafix cures of poisoning and who partakes in the Gaulish banquet, in Asterix in Switzerland.\n[…]\nVoluptuous Arteriosclerosus – Appears in Asterix and the Soothsayer. He is the centurion of the fortified Roman camp of Compendium. At the end of Asterix and the Soothsayer, he gets demoted from centurion to legionary, and his Optio, whom he used to be in charge of, instructs him to sweep the camp. He also appears on the final 2-page spread of Asterix and Obelix's Birthday: The Golden Book.\n[…]\nPeter Ustinov – As Poisonus Fungus, the Prefect of Lugdunum in Asterix and the Banquet.\n[…]\nRaimu – As a bartender in Asterix and the Banquet."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Asterix",
        "situacao": "ok",
        "texto": "Esta lista reúne os personagens da história em quadrinhos francesa Asterix:\n[…]\nAssurancetourix (\"Assume todos os riscos\", termo comum em seguros automotivos), conhecido em português como Chatotorix (Brasil) ou Cacofonix (Portugal), é um bardo que irrita os moradores da aldeia quando começa a cantar e tocar, com a sua harpa, as suas odes, provocando reações enérgicas por parte desses e, geralmente, termina amarrado num canto das festas que costumam encerrar cada episódio da saga.\n[…]\nCétautomatix (trocadilho com C'est Automatic, \"é automático\") ou Automatix , é o ferreiro da aldeia. Brutamontes e temperamental, vive provocando Ordenalfabetix devido ao cheiro de seus peixes, sempre levando uma peixada que dá início a brigas com o envolvimento de vários outros moradores da aldeia, e espanca o bardo Chatotorix sempre que este tenta cantar alguma coisa. Sua esposa, conhecida apenas por Senhora Cétautomatix, aparece pela primeira vez em Astérix e a Zaragata.\n[…]\nElèvedelix, é um dos habitantes da aldeia, aparece em Asterix e os Normandos.\n[…]\nGalantine, (galantina), aparece em Asterix e o Regresso dos Gauleses.\n[…]\nKeskonrix, é um jovem morador da aldeia, munido de um arco e uma aljava durante uma caçada a javalis viu uma patrulha romana capturar Assurancetourix. Em Asterix e Cleópatra, ele aguarda o retorno de Asterix, Panoramix, Obelix e Idéiafix de Alexandria.\n[…]\nLe Noiraud, é o único frango negro da aldeia de Asterix. É o filho de Roussette e Chanticleerix.\n[…]\nPorquépix, (Porco-espinho), seu nome só é mencionado em Asterix e os Normandos por Abraracourcix quando zomba dos Normandos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Poção mágica (Asterix)",
      "descricao": "Bebida preparada pelo druida Panoramix que dá força sobre-humana aos gauleses nas histórias de Asterix"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que planta, colhida pelo druida Panoramix com uma foice de ouro, é ingrediente essencial da poção mágica dos gauleses?",
    "resposta": "Visco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Getafix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Getafix",
        "situacao": "ok",
        "texto": "This is a list of characters in the Asterix comics.\n[…]\nAs the only individual able to produce the \"magic potion\" upon which the villagers rely for their strength, he is the focus of many stories, ranging from the Romans attempting to put him out of commission in some manner to requesting that Asterix and Obelix help him find some missing ingredient, and the conscience of the village.\n[…]\nHe has also occasionally been taken prisoner by hostile forces to get access to the potion, only to be freed again thanks to Asterix and Obelix. The full recipe of the magic potion itself has never been revealed, but known ingredients are mistletoe (which must be cut with a golden sickle [Asterix and the Golden Sickle]), a whole lobster (an optional ingredient that improves the flavour), fresh fish, salt, and petroleum (called rock oil in the book), which is later replaced by beetroot juice.\n[…]\nReplenishing the stores of ingredients for the magic potion has led to some adventures for Asterix and Obelix, including Asterix and the Great Crossing and Asterix and the Black Gold.\n[…]\nTintin – Gastronomix the Belgian has Tintin's haircut in Asterix the Legionary.\n[…]\nTibet aka Gilbert Gascard – as the Roman Quaestor Vexatius Sinusitus in Asterix in Switzerland.\n[…]\nVarious pop stars – The Beatles appear in Asterix in Britain while the Rolling Menhirs and Elvis Preslix are mentioned in Asterix and the Normans. In addition, Cacofonix's hairstyle is based on Elvis's.\n[…]\n\"Asterix Characters\". Asterix New Zealand. Archived from the original on February 8, 2006."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Asterix",
        "situacao": "ok",
        "texto": "Esta lista reúne os personagens da história em quadrinhos francesa Asterix:\n[…]\nAsterix, (asterisco), é um guerreiro gaulês e o herói das histórias, morador da aldeia de Armórica.\n[…]\nObelix (obelisco), é o melhor amigo de Asterix. Adquiriu força sobre-humana permanente ao cair em um caldeirão cheio de poção mágica quando bebê. Adora o cãozinho Ideiafix e só pensa em comer javalis e bater nos romanos.\n[…]\nPanoramix, (panorâmico), é o druida da aldeia, responsável na preparação de uma poção mágica que dá força sobre-humana a quem a bebe.\n[…]\nCétyounix, ele participou do baile dado na presença de Caligulaminix. Ela aparece em Asterix o Gaulês.\n[…]\nChanteclairix (homenagem a Chanticleer, o galo das histórias de Roman de Renart), ou Gallinarius Minus, chamado de águia imperial, é o galo da aldeia. Ele aparece na maioria dos álbuns de Asterix, mas é claramente indicado na história Chanticleerix publicada em Asterix e o Regresso dos Gauleses.\n[…]\nGalantine, (galantina), aparece em Asterix e o Regresso dos Gauleses.\n[…]\nKeskonrix, é um jovem morador da aldeia, munido de um arco e uma aljava durante uma caçada a javalis viu uma patrulha romana capturar Assurancetourix. Em Asterix e Cleópatra, ele aguarda o retorno de Asterix, Panoramix, Obelix e Idéiafix de Alexandria.\n[…]\nLa Roussette, é uma galinha de Abraracourcix, aparece na história Chanticleerix publicada em Asterix e o Regresso dos Gauleses. É a fêmea de Chanteclairix e a mãe de Noiraud.\n[…]\nPlantaquatix, (planta aquática), é o pai de Falbala, sendo encontrado duas vezes na série, em Astérix Legionário e Asterix e Latraviata.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Mafalda",
      "descricao": "Menina contestadora criada pelo cartunista argentino Quino"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na turma da Mafalda, qual amigo ajuda no armazém do pai e só pensa em ganhar dinheiro?",
    "resposta": "Manolito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mafalda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mafalda",
        "situacao": "ok",
        "texto": "Mafalda (Spanish: [maˈfalda]) is an Argentine comic strip written and drawn by cartoonist Quino. The strip features a six-year-old girl named Mafalda, who reflects the Argentine middle class and progressive youth, is concerned about humanity and world peace, and has an innocent but serious attitude toward problems. The comic strip ran from 1964 to 1973 and was very popular in Latin America, Europe\n[…]\nJulián Delgado, senior editor of the magazine Primera Plana, proposed to publish the comic strip if Quino removed the advertisements. It was first published in the magazine on 29 September 1964. Initially, it featured only Mafalda and her parents. Felipe was introduced in January. Quino left the magazine in 1965, and the comic strip moved to the newspaper El Mundo. Quino introduced new kids: Manolito, Susanita, and Miguelito; and Mafalda's mother became pregnant.\n[…]\nManolito (Manuel Goreiro Jr., 29 March 1965): The son of a Spanish shopkeeper, he is sometimes referred to as gallego (Galician). His surname hints at such an origin, but it is common practice in Argentina to refer to all Spanish migrants as Galicians. Manolito and his father follow the Argentine stereotype of the gallego, dull and stingy.\n[…]\nHe never goes on a vacation because of his father, who owns the store they work in; both appear to enjoy making money. The quality of the products sold is often questionable, as many people have complained to him and/or his father often. Manolito is characterized by his brush-like crew cut hair.\n[…]\nI'd rather freak out at you than at a complete stranger\"). She and Manolito seem to be at odds, but tolerate each other for Mafalda's sake, although it is shown that Susanita is more often the perpetrator of their bickering; as the attacks are often one-sided, Manolito is caught off-guard most of the time, but on occasion he gains the upper hand. At times, she seems to have a crush on Felipe."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mafalda",
        "situacao": "ok",
        "texto": "Mafalda foi uma tira escrita e desenhada pelo cartunista argentino Quino. As histórias, apresentando uma menina (Mafalda) preocupada com a humanidade e a paz mundial que se rebela com o estado atual do mundo, apareceram de 1964 a 1973, usufruindo de uma altíssima popularidade na América Latina e Europa.\n[…]\nUma semana mais tarde, dia 15 de março de 1965, Mafalda começou a aparecer diariamente no Mundo de Buenos Aires, permitindo ao autor cobrir eventos correntes mais detalhadamente. As personagens Manolito e Susanita foram criadas nas semanas seguintes, e a mamãe de Mafalda estava grávida quando o jornal faliu em 22 de dezembro de 1967.\n[…]\nManolito (Manuel Goreiro \"Manelito\") (29 de Março de 1965): o filho de um comerciante, mais preocupado com os negócios e dinheiro do que com outra coisa, não gosta dos Beatles e é um estudante que tira notas baixas (menos em matemática, por causa das contas que aprende no mercado do pai). Representa o conservadorismo capitalista na obra, apenas pensando no lucro do armazém de seu pai. Também adora inflações dos preços, pois assim acha que está lucrando.\n[…]\nMiguel \"Miguelito\" Pitti: amigo de Mafalda, um pouco mais jovem do que os outros. Filho único, com uma personalidade única, mas com um coração enorme. Miguelito tem dificuldade de compreender o que Mafalda pensa, sempre entendendo os conselhos de sua amiga de maneira literal. Além disso é um personagem egocêntrico, que parece achar que o mundo gira à sua volta.\n[…]\nEl Mundo de Mafalda (1981) (desenho animado)\n[…]\nEm 1993, o cineasta cubano Juan Padrón, um amigo próximo de Quino, dirigiu 104 curtas-metragens animados de Mafalda, apoiados por produtores espanhóis.\n[…]\nEm 2024, uma série animada de Mafalda exclusiva para a Netflix foi anunciada, será escrita pelo diretor Juan José Campanella.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Sexteto Sinistro",
      "descricao": "Grupo de seis vilões reunidos para enfrentar o Homem-Aranha, criado pela Marvel em 1964"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1964, qual vilão de braços mecânicos reuniu inimigos do Homem-Aranha para formar o Sexteto Sinistro?",
    "resposta": "Doutor Octopus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sinister_Six"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sinister_Six",
        "situacao": "ok",
        "texto": "The Sinister Six are a group of supervillains in American comic books published by Marvel Comics, mainly those featuring Spider-Man. The members are drawn from the character's list of enemies, with the original members forming the team in The Amazing Spider-Man Annual #1 (October 1964).\n[…]\nThe Sinister Six first appeared in The Amazing Spider-Man Annual #1 (October 1964).\n[…]\nThe Sinister Six appear in Marvel Strike Force, consisting of Doctor Octopus, the Green Goblin, the Rhino, Mysterio, the Shocker, and the Vulture. Additionally, Electro and Swarm appear as optional members.\n[…]\nThe Sinister Six appear in Marvel Ultimate Alliance 3: The Black Order, consisting of the Green Goblin, Doctor Octopus, Sandman, Mysterio, Electro, and Venom. The Goblin freed the other members from the Raft after obtaining the Time Stone and they took over the prison. After a team of heroes, including Spider-Man, arrive at the prison to secure the inmates, Venom defects to the heroes' side at Spider-Man's behest while the remaining Sinister Six members are defeated and imprisoned once more.\n[…]\nThe Sinister Six appear in Adam-Troy Castro's trilogy of Spider-Man novels, consisting of Doctor Octopus, the Vulture, Electro, Mysterio, the Chameleon, and an original character called Pity.\n[…]\nThe Sinister Six appear in Marvel Universe Live!, consisting of the Green Goblin, Doctor Octopus, the Rhino, the Lizard, Electro, and the Black Cat. They seek to claim a fragment of the recently shattered Cosmic Cube, only to be defeated by Spider-Man and Thor.\n[…]\nThe Sinister Six appear in the \"Return of the Sinister Six\" expansion pack for the Marvel United CMON Limited board game, consisting of Doctor Octopus, Electro, Kraven the Hunter, Mysterio, the Sandman, and the Vulture.\n[…]\nThe Sinister Twelve on Marvel Appendix"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sexteto_Sinistro",
        "situacao": "ok",
        "texto": "O Sexteto Sinistro (no original, Sinister Six) é um grupo de supervilões que aparecem nos quadrinhos publicados pela Marvel Comics. Eles são escolhidos da lista de inimigos do Homem-Aranha. A encarnação original do grupo foi organizada pelo Doutor Octopus.\n[…]\nO Sexteto Sinistro apareceu pela primeira vez em The Amazing Spider-Man Annual #1 (janeiro de 1964).\n[…]\nApós escapar da prisão e querendo vingança contra o Homem-Aranha, Doutor Octopus organizou um grupo de outros vilões do aracnídeo: Electro, Kraven (Sergei Kravinoff), Mystério (Quentin Beck), Homem-Areia e Abutre; criando, assim, o Sexteto Sinistro.\n[…]\nOctavius prometeu um \"plano infalível\", mas arranjou o sequestro de Betty Brant e May Parker, o que fez com que Homem-Aranha fosse a seu encontro. Os seis vilões concordaram em atacar o herói um por um, o que levou-os à derrota.\n[…]\nDoutor Octopus (Dr. Otto Octavius / Líder)\n[…]\nDoutor Octopus (Líder)\n[…]\nHomem-Areia\n[…]\nDoutor Octopus (Líder)\n[…]\nDoutor Octopus (Líder)\n[…]\nLagarto (Doutor Curt Connors)\n[…]\nHomem-Areia (Flint Marko)\n[…]\nEra previsto para a equipe ter um filme próprio intitulado como Sinister Six, que iria estrear em 2016, seria uma sequência direta de The Amazing Spider-Man 2, porém foi cancelado após a demissão de Andrew Garfield do papel de Homem-Aranha. Também seriam o grupo de vilões principais no filme cancelado The Amazing Spider-Man 3, cancelado pelos mesmos motivos. Um grupo de vilões do Homem-Aranha no cinema apareceu pela primeira vez em Spider-Man: No Way Home (2021), embora sejam apenas cinco vilões.\n[…]\nUma menção ao Sexteto Sinistro foi feita em Spider-Man: Across the Spider-Verse (2023).\n[…]\nA equipe aparece em Homem-Aranha: A Série Animada, The Spectacular Spider-Man, Ultimate Spider-Man e Marvel's Spider-Man.\n[…]\nSinister Six em Marvel.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Lanterna Verde",
      "descricao": "Super-herói da DC Comics que usa um anel de poder; na versão clássica, o piloto Hal Jordan"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nos quadrinhos clássicos, o anel do Lanterna Verde Hal Jordan não tinha efeito sobre objetos de qual cor?",
    "resposta": "Amarelo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Green_Lantern",
      "https://en.wikipedia.org/wiki/Hal_Jordan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Green_Lantern",
        "situacao": "ok",
        "texto": "Green Lantern is the name of several superheroes appearing in American comic books published by DC Comics.\n[…]\nIn 1959, Julius Schwartz reinvented the Green Lantern character as a science fiction hero named Hal Jordan. Hal Jordan's powers were more or less the same as Alan Scott's, but otherwise this character was completely different from the Green Lantern character of the 1940s. He had a new name, a redesigned costume, and a rewritten origin story.\n[…]\nHal Jordan received his ring from a dying alien and was commissioned as an officer of the Green Lantern Corps, an interstellar law enforcement agency overseen by the Guardians of the Universe.\n[…]\nThe title saw a number of revivals and cancellations. It changed to Green Lantern Corps at one point as the popularity rose and waned. During a time there were two regular titles, each with a Green Lantern, and a third member in the Justice League. A new character, Kyle Rayner, was created to become the feature while Hal Jordan first became the villain Parallax, then died and came back as the Spectre.\n[…]\nIn the wake of The New Frontier, writer Geoff Johns returned Hal Jordan as Green Lantern in Green Lantern: Rebirth (2004–05). Johns began to lay the groundwork for \"Blackest Night\" (released July 13, 2010)), viewing it as the third part of the trilogy started by Rebirth.\n[…]\nHal Jordan made his live-action debut in the 2011 film Green Lantern, portrayed by Ryan Reynolds. The film originally intended on launching a new DC Comics cinematic franchise with a sequel and an untitled Flash film, but due to the film's failure, nothing moved forward.\n[…]\nGreen Lantern Corps"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hal_Jordan",
        "situacao": "ok",
        "texto": "Harold \"Hal\" Jordan, one of the characters known as Green Lantern, is a superhero appearing in American comic books published by DC Comics. The character was created in 1959 by writer John Broome and artist Gil Kane, and first appeared in Showcase #22 (October 1959). Hal Jordan is a reinvention of the previous Green Lantern, who appeared in 1940s comic books as the character Alan Scott.\n[…]\nHal Jordan / Green Lantern appears in Lego Batman 3: Beyond Gotham, voiced again by Josh Keaton.\n[…]\nThe Injustice incarnation of Hal Jordan / Green Lantern appears as a playable character in Injustice 2, voiced by Steve Blum. After being rehabilitated by the Guardians of the Universe and re-assuming his Green Lantern powers, he returns to Earth to aid Batman's Insurgency in thwarting Brainiac's attack on Earth despite being hunted by Atrocitus, who seeks to make him a Red Lantern.\n[…]\nHal Jordan / Green Lantern appears as a playable character in Lego DC Super-Villains, voiced again by Josh Keaton.\n[…]\nThe Injustice incarnation of Hal Jordan appears in the Injustice 2 prequel comic. While standing trial on Oa for his actions under the Regime, a guilt-ridden Jordan confesses to everything he had done and agrees to be imprisoned and undergo rehabilitation. All throughout, he is haunted by Gardner's spirit and temporarily becomes a Red Lantern to rescue the Green Lantern Corps before breaking free of his red power ring upon learning the Red Lantern Corps recruited Starro.\n[…]\nAmidst the Red Lantern Corps' attack on Oa, Jordan reassumes his Green Lantern powers to fend them off.\n[…]\nGreen Lantern (Hal Jordan) at the Comic Book DB (archived from the original)\n[…]\nOfficial Green Lantern (Hal Jordan) Website; Archived 2007-07-17 at the Wayback Machine\n[…]\nGreen Lantern's (Hal Jordan's) origin @ dccomics.com; Archived 2008-08-10 at the Wayback Machine\n[…]\nBio at the Unofficial Green Lantern Corps Webpage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lanterna_Verde",
        "situacao": "ok",
        "texto": "Lanterna Verde (em inglês:  Green Lantern) é um nome compartilhado por diversos super-heróis da DC Comics. Criado por Martin Nodell e Bill Finger, o Lanterna Verde original estreou em All-American Comics nº16 (1940). Reformulado como um novo super-herói com o mesmo nome nos anos 60, o personagem original ficou conhecido através do nome dado por seus pais, Alan Scott; enquanto Harold Jordan (vulgar\n[…]\nDiversos indivíduos já assumiram o nome de Lanterna Verde ao longo do tempo. Cada um possuiu um anel que lhes dava grande controle sobre o mundo físico. O anel foi considerado a arma mais poderosa da galáxia, criando objetos plasmados complexos de acordo com a mente de seu portador, limitado apenas por duas coisas: a força de vontade do Lanterna Verde e a cor amarela, onde o anel não surte efeito algum (problema causado por uma impureza na fonte original que gerou os anéis).\n[…]\nEm 2006, histórias em continuidade retroativa estabeleceram há muito tempo a ineficácia do anel sobre objetos amarelos, informando que o portador do Anel só precisa sentir medo, compreendê-lo e superá-lo, a fim de afetar objetos amarelos (no entanto, é uma habilidade aprendida e praticada, tornando-se uma fraqueza para alguns Lanternas Verdes), dando o crédito retroativo para a explicação da fraqueza real, mas superável do anel para o amarelo.\n[…]\nO Anel Amarelo\n[…]\nApós Sinestro se tornar renegado, ele foi banido para o universo de antimatéria de Qward pelos Guardiões de Oa. Quando voltou à nossa dimensão, ele manuseava um anel energético que usava energia amarela. Depois de muitos confrontos com o Lanterna Verde Hal Jordan, ele também foi aprisionado dentro da Bateria Central. Lá, ele foi capaz de usar seu anel – que utiliza o medo, ao invés da força de vontade, como fonte de poder – para despertar Parallax de sua hibernação.\n[…]\ndo Lanterna Verde”\n[…]\na luz, da lanterna verde\"\n[…]\n«Green Lantern Corps Web Page» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Duas-Caras",
      "descricao": "Harvey Dent, ex-promotor de Gotham com metade do rosto desfigurado, vilão do Batman"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Que objeto o vilão Duas-Caras, inimigo do Batman, joga para o alto para decidir o destino de suas vítimas?",
    "resposta": "Uma moeda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Two-Face"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Two-Face",
        "situacao": "ok",
        "texto": "Two-Face is a supervillain appearing in American comic books published by DC Comics. The character was created by Bob Kane, and first appeared in Detective Comics #66 (August 1942). He has become one of the superhero Batman's most enduring enemies belonging to the collective of adversaries that make up his rogues gallery.\n[…]\nGilda Dent in some iterations, is Harvey Dent's wife. Her character debuted in Detective Comics #66, alongside Harvey, and became a recurring character in Batman stories involving Two-Face.\n[…]\nIn Catwoman: Guardian of Gotham, Darcy Dent is a gender-flipped version of Two-Face who was scarred after a rival of hers hired a hitman to lace her facial cream with acid. Unlike the mainstream incarnation, she does not rely on coin flips and lacks a split personality. In Batgirl and Batman: Thrillkiller '62, Harvey Dent is the mayor of Gotham City.\n[…]\nIn the Tangent Comics comics imprint, where characters are completely reimagined, Harvey Dent is an African-American man with psionic powers and his world's Superman. In Flashpoint, Harvey Dent is a judge. In the Flashpoint sequel Flashpoint Beyond, Dent is killed by Scavenger, leading Batman to adopt his son Dexter. Harvey's wife Gilda Dent, driven insane after their children are kidnapped by the Joker, becomes this universe's Two-Face.\n[…]\nIn Batman: Earth One, Harvey Dent was killed by Sal Maroni, leading his sister Jessica Dent to become Two-Face and manifest a split personality based on her brother. In the Absolute Universe, Harvey Dent is a civil servant in the District Attorney's office and childhood friend of Bruce Wayne. In the Abomination arc, Harvey, Oswald, and Edward are attacked and mutilated by Bane, who cracks Harvey's skull in two and burns half his body, giving him brain damage.\n[…]\nGilda Dent\n[…]\nTwo-Face at the DC Database Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Duas-Caras",
        "situacao": "ok",
        "texto": "Duas-Caras (em inglês: Two-Face) é o codinome de Harvey Dent, um personagem fictício dos quadrinhos da DC Comics, um supervilão e um dos principais inimigos do Batman no Universo DC. Criado por Bob Kane e Bill Finger, apareceu pela primeira vez em Detective Comics #66 (agosto de 1942).\n[…]\nDepois de sua desfiguração, ele desenvolveu distúrbio de personalidade múltipla e se tornou obcecado com a dualidade. Duas-Caras faz as coisas de acordo com a oportunidade e, portanto, deixa todas as decisões que ele faz ao destino na tampa de sua moeda com duas cabeças, em um desejo quase obsessivo compulsivo.\n[…]\nEm Batman Forever (1995), Tommy Lee Jones interpreta Duas-Caras, em uma atuação focada no aspecto camp, em pelo menos uma ocasião lançou sua moeda até conseguir o resultado desejado (ao contrário da versão dos quadrinhos, que sempre aceita o destino), além de sempre se dirigir a si mesmo na primeira pessoa do plural (\"Nós vamos\", \"Nós queremos\"), agindo como se fosse duas pessoas.\n[…]\nDurante o filme, Duas-Caras é responsável pela origem de Robin, ao matar a família de Dick Grayson, e se une ao Charada (Jim Carrey) para descobrir a identidade de Batman, de quem Duas-Caras deseja se vingar desde o começo do filme, tentando de todos os meios matar o herói. No desfecho do filme, Duas-Caras está prestes a atirar na Dupla Dinâmica quando Batman lembra-o de lançar a moeda para decidir.\n[…]\nPor meio de Gordon, o enfermo conhece então o apelido dado a ele enquanto trabalhava na corregedoria da polícia de Gotham (\"Duas-Caras\") e o assimila com sua situação física e mental. Batman lhe deixa sua moeda da sorte enquanto ele ainda estava desacordado. Com a visita de Gordon, ele vê a moeda com um lado queimado e lembra da morte violenta de Rachel.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Bafo de Onça",
      "descricao": "Vilão grandalhão dos desenhos e quadrinhos da Disney, eterno inimigo do Mickey"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Apesar do nome, Bafo de Onça, eterno vilão dos quadrinhos do Mickey, é que animal?",
    "resposta": "Gato",
    "distratores": [
      "Cachorro",
      "Urso",
      "Lobo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pete_(Disney)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pete_(Disney)",
        "situacao": "ok",
        "texto": "Pete (also named Peg Leg Pete, Bad Pete, and Black Pete, among other names) is a cartoon character created by Walt Disney and Ub Iwerks of The Walt Disney Company. Pete is traditionally depicted as the villainous arch-nemesis of Mickey Mouse, and was made notorious for his repeated attempts to kidnap Minnie Mouse. Pete is the oldest continuing Disney character, having debuted in the cartoon Alice \n[…]\nPete appears as a boss in Mickey's Dangerous Chase.\n[…]\nThe original Pete (referred to as \"Big Bad Pete\") acts as a self-appointed enforcer of sorts at Mean Street and is often a source of quests for the player. The Petes return in the sequel, Epic Mickey 2: The Power of Two, initially appearing as allies to Mickey and Oswald. However, by the end of the game, they leave with the gremlin Prescott, presumably having plans for him. In the 3DS title Epic Mickey: Power of Illusion, several enemies based on Pete appear.\n[…]\nPete appears as a recurring villain within the Kingdom Hearts video game series. He was originally a steamboat captain, with Mickey Mouse as his deck hand (as they were seen in Steamboat Willie), and later the captain of the Royal Musketeers until his plans for a coup were foiled by Mickey (as they were seen in The Three Musketeers). After Disney Castle was built, Pete began causing mischief until he was defeated by Terra, Aqua, and Ventus and banished to another dimension by Queen Minnie.\n[…]\nIn Kingdom Hearts 3D: Dream Drop Distance, Pete and Maleficent take Minnie hostage and send a letter to Mickey, bringing them to a confrontation in the library of the castle. After Maleficent explains her past meeting with Xehanort, they demand that the Data Worlds be handed over to them. However, Pete loses Minnie when Lea arrives and scares him. Sora and Riku also battle another past incarnation of Pete from his time as the captain of Minnie's Royal Musketeers.\n[…]\nPete on IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bafo_de_On%C3%A7a",
        "situacao": "ok",
        "texto": "João Bafo de Onça, em Portugal: Pete (em inglês, Peg-Leg Pete) é um personagem dos quadrinhos e desenhos animados de Walt Disney. Ele é um gato antropomórfico mais conhecido como arqui-inimigo do rato Mickey, e suas frequentes incursões ao crime, geralmente como ladrão, o tornam vilão tanto de Mickey quanto de Pato Donald e Tio Patinhas. Junto com o Mancha Negra, os Irmãos Metralha e outros, compõ\n[…]\nBafo surgiu em 1925, no filme de animação feito por Walt Disney, Alice Solves the Puzzle. Em 1927, passa a vilão contracenando com o Coelho Osvaldo. No ano seguinte, já enfrentava Mickey como seu chefe maligno em Steamboat Willie. Em 1º de janeiro de 2021, primeira versão do Bafo de Onça caiu em domínio público nos Estados Unidos, porém, as versões posteriores permanecerão protegidas por direitos autorais.\n[…]\nEm A Turma do Pateta, Bafo não é vilão, mas um vizinho de Pateta dono de uma loja de carros usados, casado com Peg e tendo os filhos PJ (Pete Junior, ou BJ, que seria Bafo Junior) e Matraca.\n[…]\nFora os desenhos e histórias, Bafo foi mascote da Marinha Mercante americana durante a Segunda Guerra Mundial e foi vilão nos videogames Mickey Mousecapade, Disney's Magical Quest, Goof Troop, Mickey Mania, Quackshot, a série Kingdom Hearts, e Disney Magic Kingdoms. A série Epic Mickey tem várias encarnações de Bafo, com só o terceiro título, Epic Mickey: Power of Illusion, tendo ele apenas como adversário.\n[…]\nEm uma história em quadrinhos de 1960, o nome completo de Bafo é dado como Percy P. Percival, traduzido no Brasil como Clodovil P. Pedrosa.\n[…]\nOs primeiros quadrinhos com o Bafo de Onça foram \"Death Valley\", publicados nos EUA em 1 de abril de 1930. Esta história foi publicada no Brasil na revista \"Mestres Disney\" 3, em 2005, com o título \"O Vale Da Morte\".\n[…]\nEspanhol: Pete Patapalo, Pedro el malo\n[…]\nInglês: Peg-Leg Pete\n[…]\n«João Bafo de Onça no Inducks»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Abracurcix",
      "descricao": "Chefe da aldeia gaulesa de Asterix, carregado num escudo por seus guerreiros"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O chefe gaulês Abracurcix, da aldeia de Asterix, diz que só teme uma coisa no mundo. O que é?",
    "resposta": "Que o céu caia na sua cabeça",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vitalstatistix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vitalstatistix",
        "situacao": "ok",
        "texto": "This is a list of characters in the Asterix comics.\n[…]\nPostaldistrix – Postman. First appears in Asterix and the Normans, when he delivers a letter to Vitalstatistix. Also appears in Asterix the Legionary when he brings Tragicomix's letter to Panacea (see below), and the \"Obelix: As Simple as ABC\" short story, later included in Asterix and Obelix's Birthday: The Golden Book. Most recent appearance in Asterix and the Missing Scroll.\n[…]\nJustforkix – Nephew of Vitalstatistix and a city boy from Lutetia. He is a major character in Asterix and the Normans in which he is sent to Vitalstatix's village by his father in order to get \"toughened up\", winds up being kidnapped by the Normans, and actually overcoming his fears. He also appears in the film adaptation Asterix and the Vikings as well as several Asterix game books and video games.\n[…]\nOrthopaedix – An innkeeper from Arausio who appears in Asterix and Caesar's Gift. He and his family move to the village after buying the deeds from Tremensdelirius (who had only been given the deeds by Caesar as a punishment). His wife Angina, after a major altercation with Impedimenta, pressures him into challenging Vitalstatistix for leadership. In the film Asterix and the Vikings his daughter Influenza (Zaza for short) can be seen when the villagers dance.\n[…]\nRicky Gervais - As Centurion Extraneus in Asterix in Lusitania\n[…]\nTibet aka Gilbert Gascard – as the Roman Quaestor Vexatius Sinusitus in Asterix in Switzerland.\n[…]\n\"Asterix Characters\". Asterix New Zealand. Archived from the original on February 8, 2006."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Asterix",
        "situacao": "ok",
        "texto": "Esta lista reúne os personagens da história em quadrinhos francesa Asterix:\n[…]\nAbracurcix (Brasil) ou Matasetix e Abraracourcix (Portugal), (Abraracourcix no original francês, trocadilho com à bras raccourcis, \"de braços muito curtos\" [?], ou \"a toda força\"), ele é o chefe gaulês da pequena aldeia dos irredutíveis gauleses, como Astérix.:Apesar de ser bastante respeitado pelos seus súditos e bastante temido por seus inimigos, nem sempre consegue impor as suas ordens.\n[…]\nSó tem medo de uma coisa: que o céu caia sobre sua cabeça, mas como ele próprio afirma, quem morre de véspera é peru.\n[…]\nCétautomatix (trocadilho com C'est Automatic, \"é automático\") ou Automatix , é o ferreiro da aldeia. Brutamontes e temperamental, vive provocando Ordenalfabetix devido ao cheiro de seus peixes, sempre levando uma peixada que dá início a brigas com o envolvimento de vários outros moradores da aldeia, e espanca o bardo Chatotorix sempre que este tenta cantar alguma coisa. Sua esposa, conhecida apenas por Senhora Cétautomatix, aparece pela primeira vez em Astérix e a Zaragata.\n[…]\nChanteclairix (homenagem a Chanticleer, o galo das histórias de Roman de Renart), ou Gallinarius Minus, chamado de águia imperial, é o galo da aldeia. Ele aparece na maioria dos álbuns de Asterix, mas é claramente indicado na história Chanticleerix publicada em Asterix e o Regresso dos Gauleses.\n[…]\nLa Roussette, é uma galinha de Abraracourcix, aparece na história Chanticleerix publicada em Asterix e o Regresso dos Gauleses. É a fêmea de Chanteclairix e a mãe de Noiraud.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Floquinho",
      "descricao": "Cachorro verde e peludo do Cebolinha, na Turma da Mônica"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Floquinho, o cachorro verde e peludo do Cebolinha, tem uma característica curiosa. O que é impossível distinguir nele?",
    "resposta": "A cabeça do rabo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Floquinho",
      "https://pt.wikipedia.org/wiki/Cebolinha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Floquinho",
        "situacao": "ok",
        "texto": "Floquinho é um personagem de histórias em quadrinhos e animação criado pelo cartunista Maurício de Sousa em 1963.\n[…]\nMauricio de Sousa contou, em entrevista, que se inspirou em um esfregão que estava, segundo ele, \"encostado em um canto\". Para criar o personagem, Mauricio desenhou o esfregão e o transformou em um cão, sendo que as cerdas do objeto se tornaram os pelos do animal, então foram adicionados a cabeça e o rabo, que são bem semelhantes.\n[…]\n\"Ele é o único cachorro da turma que não nasceu canino. Ele nasceu de um esfregão. Sinto muito.\"“O esfregão estava encostado num canto e tinha aquelas cerdas. Eu olhei e vi que isso dava um bichinho.\"\n[…]\nÉ um Lhasa Apso (inicialmente, Mauricio não havia definido raça específica para o animal, o que seria feito um tempo depois após uma fã comparar o cão a um da raça Lhasa Apso), extremamente peludo e seus pelos são verdes. Tem a cabeça igual a cauda. Pelo fato de ter muito pelo, nas histórias é comum os personagens e as suas coisas ficarem \"perdidos\" no cachorro.\n[…]\nEm Turma da Mônica – Laços, foi exibido como o personagem central do filme, já que toda a história se passa quando Mônica, Cebolinha, Cascão e Magali precisam encontrá-lo. Floquinho foi representado por um cão comum, que foi colorido no tom esverdeado digitalmente, na pós-produção."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cebolinha",
        "situacao": "ok",
        "texto": "Allium schoenoprasum, conhecido popularmente como cebolinha, cebolinha-francesa ou cebolinho, em Portugal, é uma planta originária da Europa.\n[…]\nÉ uma planta vivaz, que se desenvolve em tufos muito densos. Apresenta folhas verde-escuras, roliças, que atingem no máximo 10 cm de altura. Em junho, cobrem-se de flores rosa-pálido, semelhantes a pompons.[carece de fontes]?\n[…]\nA cebolinha é indicada para ser cultivada, principalmente, em plantios domésticos.[carece de fontes]?\n[…]\nNo Brasil é uma das plantas mais utilizadas como tempero, e em conjunto com a salsinha forma um condimento conhecido como cheiro-verde.[carece de fontes]?"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Bianca Castafiore",
      "descricao": "Cantora lírica italiana das Aventuras de Tintim, de Hergé, conhecida como o Rouxinol de Milão"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Que ária de ópera a cantora Bianca Castafiore, das aventuras de Tintim, vive cantando a plenos pulmões?",
    "resposta": "Ária das Joias",
    "distratores": [
      "Nessun Dorma",
      "Habanera",
      "Casta Diva"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bianca_Castafiore"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bianca_Castafiore",
        "situacao": "ok",
        "texto": "Bianca Castafiore (Italian pronunciation: [ˈbjaŋka kastaˈfjoːre]), nicknamed the \"Milanese Nightingale\" (French: le Rossignol milanais), is a fictional character in The Adventures of Tintin, the comics series by Belgian cartoonist Hergé. She is an opera singer who frequently appears in the comics.\n[…]\nAlthough she is apparently one of the leading opera singers of her generation, the only thing that Castafiore is ever heard to sing are a few lines of her signature aria, \"The Jewel Song\" (l'air des bijoux, from Gounod's Faust), always at ear-splitting volume (and violent force—certainly enough to part the Captain's hair, shatter glasses and a breeze enough to blow back a curtain in an opera box—\"She's in fine voice tonight.\").\n[…]\nThough la Castafiore is obviously Italian, her pet aria is from a French opera (Faust was composed by Charles Gounod) rather than the Verdi, Puccini, Bellini, or Donizetti one might have expected from a star of La Scala (although in The Castafiore Emerald, she mentions that her regular repertoire includes Rossini, Puccini, Verdi, and Gounod.\n[…]\nFurthermore, the choice of this aria is intentionally comic: Hergé depicts the aging, glamorous and utterly self-absorbed opera diva as Marguerite, the picture of innocence, taking delight in her own image in the mirror, with the oft-repeated quote: Ah, I laugh to see myself so beautiful in this mirror!.\n[…]\nBianca Castafiore is portrayed by Kim Stengel in the 2011 film The Adventures of Tintin: Secret of the Unicorn, which merges plots from several books. Renée Fleming provided the singing voice. Although Sra. Castafiore invariably sings her signature aria in Hergé's books, in the film, the character presents a different aria, \"Je veux vivre...\" from Gounod's Romeo et Juliette."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Turma da Mônica Jovem",
      "descricao": "Revista de Mauricio de Sousa lançada em 2008 com versões adolescentes dos personagens da Turma da Mônica"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em 2008, Mônica e seus amigos ganharam versões adolescentes desenhadas no estilo dos quadrinhos de qual país?",
    "resposta": "Japão",
    "distratores": [
      "Estados Unidos",
      "França",
      "Coreia do Sul"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Turma_da_M%C3%B4nica_Jovem"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Turma_da_M%C3%B4nica_Jovem",
        "situacao": "ok",
        "texto": "Turma da Mônica Jovem é uma publicação mensal dos Estúdios Mauricio de Sousa lançada em agosto de 2008. Trata-se de uma releitura dos personagens da Turma da Mônica em versões adolescentes, em traços e linguagem que remetem aos mangás japoneses e histórias que buscam dialogar com o público pré-adolescente. Com edições que já chegaram a atingir tiragens superiores a 500 mil exemplares, é uma das sé\n[…]\nMônica, Cebola, Cascão e Magali ainda são os mesmos que todos conhecemos, mas como toda criança que vira adolescente, \"cresceram e estão diferentes\".\n[…]\nApós seu lançamento, a revista foi criticada pelas diferenças com os gibis da Turma da Mônica, tanto as características dos personagens quanto o estilo de história. Porém, logo em seu primeiro ano, foi um sucesso de vendas. As quatro primeiras edições venderam 1,5 milhão de exemplares, superando super-heróis americanos como Batman e Superman. Em 2011, Turma da Mônica Jovem #34 vendeu 500 mil cópias, superando a Liga da Justiça, da DC Comics, que vendeu apenas 100 mil cópias.\n[…]\nUma série animada adaptada dos quadrinhos de Turma da Mônica Jovem é cogitada desde 2009. Estudos para uma série em computação gráfica chegaram a ser realizados e divulgados em vídeos institucionais, além dos planos de criar uma banda de música digital derivada - que chegou a ser introduzida na edição 36 dos quadrinhos.\n[…]\nO desenvolvimento de um longa-metragem live-action da Turma da Mônica Jovem foi inicialmente oficializado em setembro de 2016. Com direção de Christiano Metri e lançamento previsto para o segundo semestre de 2018, o filme estava a cargo da Bossa Nova Group, que planejava uma trilogia com os personagens. O projeto seria desenvolvido em paralelo com Turma da Mônica: Laços, com elencos diferentes, e colocaria a Turma em uma \"aventura tecnológica\" à parte dos quadrinhos.\n[…]\nTurma da Mônica\n[…]\nEvento comemora sucesso da Turma da Mônica Jovem"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Cebolinha",
      "descricao": "Menino de cinco fios de cabelo que troca o R pelo L, rival da Mônica na Turma da Mônica."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Como o Cebolinha chama os planos que inventa para pegar o Sansão e virar o dono da rua?",
    "resposta": "Planos infalíveis",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cebolinha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cebolinha",
        "situacao": "ok",
        "texto": "Allium schoenoprasum, conhecido popularmente como cebolinha, cebolinha-francesa ou cebolinho, em Portugal, é uma planta originária da Europa.\n[…]\nA cebolinha é indicada para ser cultivada, principalmente, em plantios domésticos.[carece de fontes]?"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Vibranium",
      "descricao": "Metal fictício dos quadrinhos da Marvel, encontrado sobretudo no país africano de Wakanda"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nos quadrinhos da Marvel, o que o escudo do Capitão América e o país do Pantera Negra têm em comum?",
    "resposta": "O metal vibranium",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vibranium",
      "https://en.wikipedia.org/wiki/Captain_America%27s_shield"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vibranium",
        "situacao": "ok",
        "texto": "Vibranium () is a fictional metal appearing in American comic books published by Marvel Comics, noted for its extraordinary abilities to absorb, store, and release large amounts of kinetic energy. Mined only in the kingdom of Wakanda, the metal is associated with the character Black Panther, who wears a suit of vibranium, and Captain America, who bears a vibranium/steel alloy shield. An alternate \n[…]\nThe variation first introduced in Daredevil #13 eventually became known as Anti-Metal. This variation is different in that it can cut through any known metal. In the Marvel Universe, Anti-Metal can traditionally be found only in Antarctica. Later in Fantastic Four #53 (August 1966), by Stan Lee and Jack Kirby, a new variation of vibranium was introduced in the isolated nation of Wakanda. This variation had the unique attribute of being able to absorb sound.\n[…]\nIn the Marvel Universe, vibranium was first deposited on Earth by a meteorite 10,000 years ago. It was discovered during an expedition to Antarctica and named \"Anti-Metal\" due to its property of dissolving other metals.\n[…]\nBetter known as Anti-Metal, this isotope is native to the Savage Land. The variation produces vibrations of a specific wavelength that break down molecular bonds in metals, causing them to liquefy. It was first discovered by explorer Robert Plunder, the father of Kevin and Parnival Plunder. Wakandan vibranium can be transformed into Antarctic vibranium through exposure to certain kinds of radiation.\n[…]\nMuch like Wakandan vibranium, Antarctic vibranium can cause mutations. One person who donned an Anti-Metal suit for protection against Moon Knight began emitting the same radiation he had intended to weaponize.\n[…]\nVibranium appears in Iron Man: Armored Adventures. This version is a dark grey metal that emits green electricity.\n[…]\nVibranium at MarvelDatabase.com\n[…]\nVibranium at MarvelDirectory]"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Captain_America%27s_shield",
        "situacao": "ok",
        "texto": "Captain America's shield is a fictional item appearing in American comic books published by Marvel Comics. It is the primary defensive and offensive piece of equipment used by Captain America, and is intended to be an emblem of American culture.\n[…]\nDuring one of his experiments to fuse vibranium with an experimental steel alloy, MacLain falls asleep and awakens to find that his experiments have created a metal alloy. MacLain attempts to recreate the shield's metal to no avail, with his experiments instead creating adamantium.\n[…]\nHe later notices an unadorned circular shield among Howard Stark's proposed weapons, which Stark says is made of a rare metal called Vibranium that is much stronger and one-third the weight of steel. Although Stark says it is a prototype, Rogers decides to use it after it stops .45 caliber bullets shot at it by Peggy Carter. It is painted in the familiar red, white and blue pattern modeled after the colors of the American flag. Rogers uses the shield throughout the war.\n[…]\nUltimate Captain America uses a shield of pure Vibranium, although that metal may not possess the same properties in the Ultimate Marvel universe as it does in the mainstream Marvel Universe. The shield was destroyed when Gregory Stark smashed it with Thor's hammer, though Captain America would wield another later.\n[…]\nIn Ultimate Nightmare, the Ultimate Marvel version of Captain America encounters his Russian counterpart, who has been driven mad due to being trapped in an underground complex for many years. He has created a \"replica\" of the shield, which turns out to be made out of scrap metal and human remains and grafted directly onto his forearm, and which proves far less powerful than Captain America's own shield."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vibranium",
        "situacao": "ok",
        "texto": "Vibranium é um metal fictício que aparece nos quadrinhos publicados pela Marvel Comics. É mais conhecido como um dos materiais usados para construir o escudo do Capitão América, e também é conhecido por sua conexão com o Pantera Negra, pois seu uniforme é feito de vibranium e é encontrado em sua terra natal, a nação africana de Wakanda.\n[…]\nNo Universo Marvel, o Vibranium foi depositado pela primeira vez na Terra por um meteorito há 10 mil anos. Vibranium Antártico ou Anti-Metal, é criado por meios artificiais, em contraste com o natural, ou vibranium wakandano.\n[…]\nÉ usado no arsenal do supervilão Garra Sônica e pelo rei de Wakanda, o Pantera Negra. Também foi usado na fabricação do escudo do Capitão América ou na armadura Defensor que são compostos de vibranium, aço americano e um catalisador desconhecido. Ao utilizar a engenharia reversa neste composto, o metal adamantium foi obtido pela primeira vez.\n[…]\nEm Ultimate Avengers, o vibranium é mostrado como um metal usado pelo Chitauris (versão Ultimate dos Skrulls). É usado principalmente em seus cascos de naves espaciais e armaduras pessoais. Mais tarde, um de seus navios é recuperado pela S.H.I.E.L.D. e costumava fazer parte escudo do Capitão América (que também foi construído com adamantium no quadrinhos do Universo Ultimate, seu escudo é composto apenas de adamantium) e outros itens como balas e facas de ponta de vibranium.\n[…]\nNo filme Captain America: Civil War, o traje inteiro da Pantera Negra é composto de um tecido de vibranium com garras retráteis. No filme Black Panther, revela-se que Wakanda, a nação natal do Pantera Negra, foi construída no topo do local do acidente de um meteorito de vibranium há séculos e o metal foi usado para criar e impulsionar a tecnologia avançada do país.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Martha Wayne",
      "descricao": "Mãe de Bruce Wayne, o Batman, assassinada com o marido Thomas diante do filho"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Como lembrou um famoso filme de 2016, o que as mães de Bruce Wayne e de Clark Kent têm em comum?",
    "resposta": "O nome Martha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_and_Martha_Wayne",
      "https://en.wikipedia.org/wiki/Jonathan_and_Martha_Kent",
      "https://en.wikipedia.org/wiki/Batman_v_Superman:_Dawn_of_Justice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_and_Martha_Wayne",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jonathan_and_Martha_Kent",
        "situacao": "ok",
        "texto": "Jonathan Kent and Martha Kent (often referred to as \"Pa\" and \"Ma\" Kent, respectively) are fictional characters appearing in American comic books published by DC Comics. They are the adoptive parents of Superman, and live in the rural town of Smallville, Kansas. In most versions of Superman's origin story, Jonathan and Martha find him as the infant Kal-El after he crash-lands on Earth following the\n[…]\nJonathan and Martha Kent appear in Lois & Clark: The New Adventures of Superman, portrayed by Eddie Jones and K Callan respectively.\n[…]\nJonathan and Martha Kent appear in the DC Extended Universe, portrayed by Kevin Costner and Diane Lane and first appearing in the 2013 film Man of Steel. This version of Jonathan is a Vietnam War veteran who insists on Clark keeping his powers secret and opposes his desire to go out into the world, while Martha consoles Clark as his powers threaten to overwhelm him. Ultimately, Jonathan is killed in a tornado after refusing to let Clark use his powers to save him.\n[…]\nIn Justice League, Martha sells the Kent farm, as she cannot afford bank fees and no longer has an attachment to Smallville following her son's death and is always accompanied by Lois Lane. When Superman is resurrected, she joyously reunites with him, and Bruce Wayne buys the bank Martha owed money to, allowing her to keep the farm. In Zack Snyder's Justice League, Martian Manhunter disguises himself as Martha to convince Lois Lane to re-enter society.\n[…]\nJonathan and Martha Kent appear in the DC Universe film Superman (2025), portrayed by Pruitt Taylor Vince and Neva Howell respectively. In contrast to previous appearances, Jonathan never died during Clark's youth, and he remains alive well into his Superman years. In the 1990s, Jonathan and Martha found the infant Kal-El in a Kryptonian space pod and adopted him, naming him Clark Kent.\n[…]\nMartha Kent on DC Database, a DC Comics wiki"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Batman_v_Superman:_Dawn_of_Justice",
        "situacao": "ok",
        "texto": "Batman v Superman: Dawn of Justice is a 2016 American superhero film based on the DC Comics characters Batman and Superman. Directed by Zack Snyder and written by Chris Terrio and David S. Goyer, it is a follow-up to Man of Steel (2013) and the second film in the DC Extended Universe (DCEU). The film stars Ben Affleck as Batman and Henry Cavill as Superman, alongside a cast including Amy Adams, Je\n[…]\nLuthor lures Superman out by kidnapping Martha Kent, Clark's adoptive mother, and Lois. Superman saves Lois and confronts Luthor, who reveals he orchestrated Batman's paranoia. He demands that Superman kill Batman in exchange for Martha's life. Superman arrives in Gotham and tries reasoning with Batman, who attacks him using kryptonite-laced gas. They battle, but Batman proves victorious.\n[…]\nAs Batman prepares to kill him with the spear, Superman pleads with him to \"save Martha\" – the same name as Batman's mother. Batman hesitates as Lois arrives and explains Superman's pleading. Realizing he has been manipulated, and recognizing Superman's humanity, Batman rescues Martha.\n[…]\nDiane Lane as Martha Kent: Clark's adoptive mother. On her role as Superman's mother, Lane stated, \"I always said if I had a son that would be the ultimate test. Raise a good man — there's something noble about that.\" When asked on her experience working with Zack Snyder on Batman v Superman, Lane said she was impressed by Snyder's imagination and added, \"Who gets offered the opportunity to bring such things to the screen for millions of people? That's tremendous.\n[…]\nAdditionally, Jeffrey Dean Morgan portrays Thomas Wayne in an uncredited appearance and Lauren Cohan portrays Martha Wayne, Bruce Wayne's deceased parents, Patrick Wilson (who later portrayed Ocean Master in Aquaman and its sequel) portrays the President of the United States in a voice role, and Michael Cassidy portrays Jimmy Olsen, a CIA agent."
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Clarim Diário",
      "descricao": "Jornal fictício de Nova York nos quadrinhos da Marvel, onde Peter Parker trabalha como fotógrafo"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Fora do uniforme, Peter Parker e Clark Kent trabalham no mesmo tipo de empresa. Qual?",
    "resposta": "Um jornal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Daily_Bugle",
      "https://en.wikipedia.org/wiki/Daily_Planet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Daily_Bugle",
        "situacao": "ok",
        "texto": "The Daily Bugle (at one time The DB!) is a fictional New York City tabloid newspaper appearing as a plot element in American comic books published by Marvel Comics. The Daily Bugle is a regular fixture in the Marvel Universe, most prominently in Spider-Man comic titles and their derivative media. The newspaper first appeared in the Human Torch story in Marvel Mystery Comics #18 (April 1941).\n[…]\nThe adventures of the staff of the newspaper beyond Peter Parker have been depicted in two series, Daily Bugle and The Pulse.\n[…]\nAfter Jameson suffered a near-fatal heart attack, his wife sold the Bugle to rival newspaper man Dexter Bennett, who changed the name to The DB! (either standing for Dexter Bennett or Daily Bugle), and transformed it into a scandal sheet. Since after Brand New Day no one knows the secret identity of Spider-Man anymore, the animosity between Jameson and Parker is retconned as a simple financial question, with Jameson's heart attack coming right after a monetary request from Peter.\n[…]\nAn alternate universe iteration of the Daily Bugle appears in the Ultimate Universe imprint. This version is owned by Wilson Fisk. J. Jonah Jameson and Ben Parker are depicted as former employees of the Daily Bugle until they resigned upon being disgusted at nobody wanting to investigate Tony Stark's \"attack on New York City\", opting to instead start their own journalism company, The Paper.\n[…]\nThe Daily Bugle appears in Spider-Man (2002), Spider-Man 2 (2004), and Spider-Man 3 (2007), all directed by Sam Raimi. This version is housed in the Flatiron Building like in the Marvels miniseries, with J. Jonah Jameson (portrayed by J. K. Simmons) as the editor-in-chief, Robbie Robertson (portrayed by Bill Nunn) as associate editor, and Betty Brant (portrayed by Elizabeth Banks), Peter Parker (portrayed by Tobey Maguire), and Eddie Brock (portrayed by Topher Grace) as employees."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Daily_Planet",
        "situacao": "ok",
        "texto": "The Daily Planet is a fictional newspaper appearing in American comic books published by DC Comics, commonly in association with Superman. The newspaper was first mentioned in Action Comics #9 (November 13, 1939) – Underworld Politics, War on Crime. The Daily Planet building's distinguishing feature is the enormous globe that sits on top of the building.\n[…]\nDuring those times, people such as Sam Foswell and Clark Kent have looked after the paper. Franklin Stern, an old friend of White's, became the Daily Planet's publisher.\n[…]\nDuring this era, the Planet's major competitors in Metropolis include the tabloid newspaper the Daily Star, WGBS-TV (which also employed Jimmy Olsen and Cat Grant for a time), and Lex Luthor's various media operations. A contemporary publication is Newstime Magazine, where Clark Kent worked as the editor for a time. The publisher of Newstime is Colin Thornton, who is secretly the demon Satanus, an enemy of Superman.\n[…]\nIn the Superman: Birthright limited series, the Daily Planet's publisher was Quentin Galloway, an abrasive overbearing loudmouth who bullied Jimmy Olsen, and later Clark Kent, before being told off by Lois Lane, whom Galloway could not fire because of her star status. This was meant to be a new origin for Superman but one that applied to the Post-Crisis continuity, so later Planet history concerning Luthor temporarily owning it and other events still applied.\n[…]\nWith the reboot of DC's line of comics in 2011, the Daily Planet was shown in the Superman comics as being bought by Morgan Edge and merged with the Galaxy Broadcasting System, similar to the Silver/Bronze Age continuity. In Action Comics, it is revealed that in the new history/universe, Clark Kent begins his journalism career in Metropolis roughly six years before Galaxy Broadcasting merges with the Daily Planet.\n[…]\nClark Kent - Reporter"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Clarim_Di%C3%A1rio",
        "situacao": "ok",
        "texto": "O Clarim Diário (no original, Daily Bugle) é um jornal fictício do Universo Marvel, publicado pela Marvel Comics, conhecido por sua presença recorrente nas histórias do Homem-Aranha. Criado por Stan Lee e Steve Ditko, o jornal foi introduzido em The Amazing Spider-Man #1 (1963).\n[…]\nNo contexto das histórias, o Clarim Diário é dirigido por J. Jonah Jameson, editor-chefe conhecido por sua postura crítica e hostil em relação ao Homem-Aranha. O jornal exerce um papel central na narrativa ao influenciar a opinião pública sobre o herói, além de servir como local de trabalho de personagens recorrentes, como Peter Parker, Betty Brant e Robbie Robertson.\n[…]\nAlém de Jameson, o Clarim Diário serve como ambiente de trabalho para diversos personagens recorrentes das histórias do Homem-Aranha, funcionando como um elemento narrativo que conecta a vida civil de Peter Parker ao seu alter ego superheroico.\n[…]\nO Clarim Diário foi adaptado para diferentes mídias fora dos quadrinhos. Na trilogia cinematográfica dirigida por Sam Raimi, o jornal aparece com destaque e é apresentado como o principal local de trabalho de Peter Parker, com J. K. Simmons interpretando J. Jonah Jameson. Já na duologia The Amazing Spider-Man, dirigida por Marc Webb, o Clarim Diário chega a ser mencionado, mas não há uma aparição direta.\n[…]\nNo Universo Cinematográfico Marvel, o jornal foi reinterpretado como uma plataforma digital por meio da websérie TheDailyBugle.net. Apresentada pelos personagens J. Jonah Jameson (J. K. Simmons) e Betty Brant (Angourie Rice), foi exibida entre 2019 e 2022 no TikTok e no YouTube. O Clarim Diário também realiza aparições em produções do Universo Homem-Aranha da Sony Pictures, como Venom: Let There Be Carnage (2021) e Morbius (2022).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Krypton (planeta)",
      "descricao": "Planeta natal fictício do Superman, destruído logo após seu nascimento"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O planeta natal do Superman tem o mesmo nome, em inglês, de qual gás nobre da tabela periódica?",
    "resposta": "Criptônio",
    "distratores": [
      "Xenônio",
      "Neônio",
      "Argônio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Krypton_(comics)",
      "https://en.wikipedia.org/wiki/Krypton"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Krypton_(comics)",
        "situacao": "ok",
        "texto": "Krypton is a fictional planet appearing in American comic books published by DC Comics, most commonly appearing or mentioned in stories starring the superhero Superman as the world from which he came. The planet was created by Jerry Siegel and Joe Shuster, and was named after the chemical element krypton. It was first mentioned in Action Comics #1 (June 1938) and made its first appearance in Super\n[…]\nThe 2006 film Superman Returns presents a version of Krypton almost identical to Superman. In the beginning of the film, scientists discover remains of Krypton, and Superman leaves Earth for five years to look for it. His ship is seen leaving the dead planet. The planet is destroyed when the red supergiant Rao becomes a supernova.\n[…]\nThe planets destruction frees Zod and his men from the Phantom Zone, and after learning of Earth's existence, they plan to xenoform it into a new Krypton. This is thwarted by an adult Kal-El (who's now Clark Kent/Superman), who kills Zod and destroys his xenoforming machines.\n[…]\nKrypton appears in Teen Titans Go! To the Movies. In the film, the Teen Titans travel to the planet and harmonize its crystals with music, preventing its destruction and preventing Kal-El from arriving on Earth and becoming Superman. The Titans later undo their actions and allow Krypton to be destroyed to ensure Superman's existence.\n[…]\nBrainiac's abduction of Kandor, despite the resistance posed by Krypton's military, is shown in Superman: Unbound. Brainiac is infamous for destroying the planets he takes cities from, but he left Krypton intact. Jor-El correctly theorized that this was because Brainiac detected that the planet would soon explode anyway and decided not to bother wasting a missile on their sun.\n[…]\nPhaeton (hypothetical planet), whom British-born astronomer Michael Ovenden suggested be named \"Krypton\" after Superman's home world instead\n[…]\nSuperman Shield Evolution with picture"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Krypton",
        "situacao": "ok",
        "texto": "Krypton (from Ancient Greek: κρυπτός, romanized: kryptos 'the hidden one') is a chemical element; it has symbol Kr and atomic number 36. It is a colorless, odorless noble gas that occurs in trace amounts in the atmosphere and is often used with other rare gases in fluorescent lamps. Krypton is chemically inert.\n[…]\nThe metastable isotope krypton-81m is used in nuclear medicine for lung ventilation/perfusion scans, where it is inhaled and imaged with a gamma camera. Krypton-85 in the atmosphere has been used to detect clandestine nuclear fuel reprocessing facilities in North Korea and Pakistan. Those facilities were detected in the early 2000s and were believed to be producing weapons-grade plutonium. Krypton-85 is a medium lived fission product and thus escapes from spent fuel when the cladding is removed.\n[…]\nKrypton is used occasionally as an insulating gas between window panes. SpaceX Starlink uses krypton as a propellant for their electric propulsion system.\n[…]\nKrypton is considered to be a non-toxic asphyxiant.\n[…]\nBeing lipophilic, krypton has a significant anaesthetic effect (although the mechanism of this phenomenon is still not fully clear, there is good evidence that the two properties are mechanistically related), with narcotic potency seven times greater than air, and breathing an atmosphere of 50% krypton and 50% natural air (as might happen in the locality of a leak) causes narcosis in humans similar to breathing air at four times atmospheric pressure.\n[…]\nWilliam P. Kirk \"Krypton 85: a Review of the Literature and an Analysis of Radiation Hazards\", Environmental Protection Agency, Office of Research and Monitoring, Washington (1972)\n[…]\nKrypton at The Periodic Table of Videos (University of Nottingham)\n[…]\nKrypton Fluoride Lasers, Plasma Physics Division Naval Research Laboratory"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Krypton",
        "situacao": "ok",
        "texto": "Superman ou Super-Homem é um super-herói de histórias em quadrinhos publicadas pela DC Comics. O personagem, entretanto, desde os anos 1930 já foi adaptado para diversos outros meios, como cinema, rádio, televisão, literatura e videogame. Superman foi criado pela dupla de autores de quadrinhos Joe Shuster e Jerry Siegel. Sua primeira aparição aconteceu no verão de 1938, na revista Action Comics #1\n[…]\nEmbora Superman seja descrito como \"O Último Filho de Krypton\", ao longo de sua vida descobriu outros sobreviventes de seu planeta natal. Sua prima Kara Zor-El chegou à Terra em um meteoro de kryptonita e eventualmente assumiu a identidade de Supergirl. O criminoso General Zod foi aprisionado em uma dimensão-prisão, a Zona Fantasma, pouco antes da destruição de Krypton, e se tornou um dos grandes inimigos de Superman após sua libertação.\n[…]\nComo parte de sua história sempre inclui a perda de seu planeta natal Krypton, o personagem de Superman é mostrado geralmente muito super-protetor em relação a Terra, especialmente com a família e os amigos de Clark Kent. Esta mesma perda, combinado com a pressão para usar seus poderes de forma responsável,  provoca uma sensação de estar sozinho no planeta, apesar de seus amigos, esposa e pais adotivos.\n[…]\nSuperman é vulnerável a kryptonita verde, resíduos minerais de Krypton transformado em material radioactivo pelas mesmas forças que destruíram o planeta. A exposição à radiação da Kryptonita verde anula os poderes do Super-Homem e o imobiliza, sofrendo dores e náuseas; exposição prolongada pode significar morte. O único material na Terra que podem protegê-lo da Kryptonita é o chumbo, que bloqueia a radiação.\n[…]\nO kryptoniano criminoso General Zod;\n[…]\nMongul, governante do planeta de gladiadores Warworld, Mongul rivaliza com a força do Superman e sempre tentou derrotar o Homem de Aço;\n[…]\nImpacto cultural de Superman\n[…]\nSuperman no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Apollo 10",
      "descricao": "Missão tripulada da NASA de 1969, ensaio geral para o primeiro pouso na Lua"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1969, os dois módulos da missão Apollo 10, ensaio para o pouso na Lua, ganharam nomes de personagens de qual tira de jornal?",
    "resposta": "Peanuts (Charlie Brown e Snoopy)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Apollo_10"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Apollo_10",
        "situacao": "ok",
        "texto": "Apollo 10 (May 18–26, 1969) was the fourth human spaceflight in the United States' Apollo program and the second to orbit the Moon. NASA, the mission's operator, described it as a \"dress rehearsal\" for the first Moon landing (Apollo 11, two months later). It was designated an \"F\" mission, intended to test all spacecraft components and procedures short of actual descent and landing.\n[…]\nThe mission's call signs were the names of the Peanuts characters Charlie Brown for the CSM and Snoopy for the LM, who became Apollo 10's semi-official mascots. Peanuts creator Charles Schulz also drew mission-related artwork for NASA.\n[…]\nThe command module was given the call sign Charlie Brown and the lunar module the call sign Snoopy. These were taken from the characters in the comic strip, Peanuts, Charlie Brown, and Snoopy. These names were chosen by the astronauts with the approval of Charles Schulz, the strip's creator, who was uncertain it was a good idea, since Charlie Brown was always a failure.\n[…]\nAfter Stafford and Cernan checked out Snoopy, they returned to Charlie Brown for a rest. Then they re-entered Snoopy at 95:02 and undocked it from the CSM three hours later at 98:11:57. Young, who remained in the CSM, became the first person to fly solo in lunar orbit. After undocking, Stafford and Cernan deployed the LM's landing gear and inspected the LM's systems.\n[…]\nSnoopy rendezvoused with and re-docked with Charlie Brown at 106:22:02, just under eight hours after undocking. The docking was telecast live in color from the CSM. Once Cernan and Stafford had re-entered Charlie Brown, Snoopy was sealed off and separated from Charlie Brown. The rest of the LM's ascent-stage engine fuel was burned to send it on a trajectory past the Moon and into a heliocentric orbit.\n[…]\nApollo 10 Flight Journal\n[…]\nApollo 10: \"To Sort Out the Unknowns\" Official NASA/JSC documentary film, JSC-519 (1969)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Apollo_10",
        "situacao": "ok",
        "texto": "Apollo 10 foi a quarta missão tripulada do Programa Apollo e a segunda a ir à Lua, onde testou o Módulo Lunar em órbita do satélite, chegando a sobrevoar a superfície a 15 km de altura, numa preparação para o voo da Apollo 11, a missão seguinte, que pousaria na Lua pela primeira vez dois meses depois.\n[…]\nAo contrário da missão anterior para a Lua, a Apollo 8, esta missão carregava um Módulo Lunar completamente funcional (\"Snoopy\"). A missão testou os motores do ML em procedimentos de descida e subida, sem no entanto pousar no solo lunar, realizando os mesmos procedimentos, tanto no espaço quanto no controle da missão em Terra, que seriam utilizados na missão seguinte, tendo como única diferença os 15 km que separaram a Apollo 10 de uma alunissagem bem sucedida.\n[…]\nDurante seus testes lunares, a espaçonave sobrevoou o Mar da Tranquilidade, local de pouso da Apollo 11 na missão seguinte. No retorno à Terra, em 26 de maio de 1969, quebrou o recorde de velocidade no espaço por uma nave tripulada, mantido até hoje, ao atingir os 39 897 km/h, segundo o livro Guiness Book of Records. A missão também conseguiu outro feito, ao ser a primeira a ser transmitida para o mundo todo em cores e ao vivo.\n[…]\nApesar de não fazer parte da insígnia oficial, devido a seus nomes serem usados apenas como sinais de chamada do MC e do ML, os personagens da série de quadrinhos Peanuts, Charlie Brown e Snoopy, foram tidos como mascotes semi-oficiais do voo e da tripulação. O próprio criador da série,Charles Schulz, fez algum material de desenho para a NASA relacionado com a missão.\n[…]\nProjeto Apollo\n[…]\nNASA Apollo Mission Apollo-10",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Ziraldo",
      "descricao": "Cartunista e escritor mineiro, criador do Menino Maluquinho e da Turma do Pererê"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do cartunista Ziraldo, criador do Menino Maluquinho, é uma junção dos nomes de quem?",
    "resposta": "Dos pais, Zizinha e Geraldo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ziraldo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ziraldo",
        "situacao": "ok",
        "texto": "Ziraldo Alves Pinto (Caratinga, 24 de outubro de 1932 – Rio de Janeiro, 6 de abril de 2024) foi um cartunista, chargista, pintor, escritor, dramaturgo, cartazista, caricaturista, poeta, cronista, desenhista, apresentador, humorista, advogado e jornalista brasileiro.\n[…]\nFoi o criador de personagens famosos, como o Menino Maluquinho, e foi um dos mais conhecidos e aclamados escritores infantis de seu tempo. Ziraldo foi pai de três filhos, a cineasta Daniela Thomas, o compositor Antonio Pinto e a diretora de teatro Fabrízia Alves Pinto. Faleceu em sua residência no estado do Rio de Janeiro, Lagoa Rodrigo de Freitas em 6 de abril de 2024 aos 91 anos.\n[…]\nO cartunista foi casado com Vilma Gontijo Alves Pinto de 1958 até a morte dela em 2000, quando aos 66 anos ela sofreu um infarto enquanto dormia. Ziraldo casou-se novamente, dessa vez com Márcia Martins da Silva.\n[…]\nNa tarde do dia 6 de abril de 2024, em torno das 15h, aos 91 anos, Ziraldo morreu em sua casa enquanto dormia, segundo a sua família. O presidente Luiz Inácio Lula da Silva lamentou a morte de Ziraldo e afirmou que \"O Brasil perdeu neste sábado, 6/4, um de seus maiores expoentes da cultura, da imprensa, da literatura infantil e do imaginário do país\". Várias instituições prestaram homenagens ao cartunista, como os clubes de futebol Flamengo, Atlético Mineiro e Corinthians.\n[…]\nEm 31 de março de 2011, Ziraldo, seu irmão Zélio Alves Pinto e mais 9 pessoas foram condenados por improbidade administrativa na realização, em 2003, do primeiro Festival Internacional do Humor Gráfico das Cataratas do Iguaçu (Festhumor) e no \"Fantur - Iguaçu dê uma volta por aqui\", em ação movida em 2006 pelo Ministério Público Federal.\n[…]\nO Menino Maluquinho (1988-2007)\n[…]\nZiraldo on Google Cultural Institute\n[…]\nZiraldo no IMDb"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Garfield",
      "descricao": "Gato laranja, preguiçoso e comilão, protagonista da tira de jornal criada pelo americano Jim Davis em 1978"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O cartunista Jim Davis batizou o gato Garfield em homenagem a qual parente?",
    "resposta": "Ao próprio avô",
    "fonte": [
      "https://en.wikipedia.org/wiki/Garfield_(character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Garfield_(character)",
        "situacao": "ok",
        "texto": "Garfield is a fictional cat and the protagonist of the comic strip of the same name, created by Jim Davis. Garfield is portrayed as a lazy, fat, cynical and self-absorbed orange tabby cat. He is noted for his love of lasagna, pizza, coffee, and sleeping, and his hatred of Mondays, Nermal, the vet, and exercise.\n[…]\nFurther transformations came in response to shrinkage on newspaper comics pages, as Davis increased the size of Garfield's features (especially his eyes) so that the strip could be printed at smaller sizes without gags becoming too small to see.\n[…]\nIn February 2017, a dispute arose on the talk page of the character's Wikipedia page as to the character's gender. Although other characters have persistently referred to Garfield with male pronouns, owing to comments that the character's creator, Jim Davis, made in 2014 to Mental Floss, in which he said, \"Garfield is very universal. By virtue of being a cat, really, he's not really male or female or any particular race or nationality, young or old.\n[…]\nIt gives me a lot more latitude for the humor for the situations.\" Davis explained that although Garfield is neither male nor female, he does use male pronouns. However, Davis later clarified that Garfield is, in fact, male.\n[…]\nLamorne Morris (TBA; Garfield+)\n[…]\nGarfield has been a mascot of Kennywood, a traditional amusement park in West Mifflin, Pennsylvania, near Pittsburgh since the 1990s. A ride at Kennywood, \"Garfield's Nightmare\", was created with the exclusive input of Garfield creator, Jim Davis.\n[…]\nIn the first two Garfield films, Garfield: The Movie and Garfield: A Tail of Two Kitties, Garfield was created using computer animation, though the movies were otherwise primarily live-action. In these films, Garfield was voiced by Bill Murray.\n[…]\nGarfield.com – \"The Official Site of Garfield\""
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Calvin",
      "descricao": "Menino de seis anos, protagonista da tira Calvin e Haroldo, de Bill Watterson"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O menino levado da tira Calvin e Haroldo homenageia no nome um reformador protestante do século dezesseis. Qual?",
    "resposta": "João Calvino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Calvin_and_Hobbes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Calvin_and_Hobbes",
        "situacao": "ok",
        "texto": "Calvin and Hobbes is an American daily comic strip created by cartoonist Bill Watterson and syndicated from November 18, 1985, to December 31, 1995. The strip centers on Calvin, a six-year-old boy characterized by his vivid imagination and rowdy behavior, and Hobbes, his stuffed tiger, who is a sentient being to Calvin but a regular toy to everyone else.\n[…]\nWatterson, Bill (2005). The Complete Calvin and Hobbes. Kansas City, Missouri: Andrews McMeel Publishing. ISBN 0-7407-4847-5.\n[…]\nMartell, Nevin (2010). Looking for Calvin and Hobbes: The Unconventional Story of Bill Watterson and His Revolutionary Comic Strip (Revised ed.). Continuum Books. ISBN 978-1-4411-0685-8.\n[…]\nHeit, Jamey (2012). Imagination and Meaning in Calvin and Hobbes. Jefferson, North Carolina: McFarland & Company. ISBN 978-0-7864-9031-8.\n[…]\nWatterson, Bill (2015). Exploring Calvin and Hobbes: An Exhibition Catalogue. Kansas City, Missouri: Andrews McMeel Publishing. ISBN 978-1-4494-6036-5.\n[…]\nSuellentrop, Chris (November 7, 2005). \"Calvin and Hobbes: The last great newspaper comic strip\". Slate. Archived from the original on January 8, 2012.\n[…]\nMarkstein, Donald D. Calvin and Hobbes at Don Markstein's Toonopedia. Archived[link removed] from the original on April 13, 2012.\n[…]\nLew, Michele. Calvin and Hobbes, April 5, 2022 at The Encyclopedia of Cleveland History. Archived from the original August 7, 2022.\n[…]\nFisher-Cox, Adam (ed.). \"The Calvin and Hobbes Album\". AdamFisherCox.com. Archived from the original on July 7, 2011.\n[…]\n\"Radio show in which fans of the comic strip express their views about the ending of Calvin and Hobbes\". The Heart of Gold (MP3). CBC. 1995. Archived from the original on July 16, 2011 – via TheHeartOfGold.org.\n[…]\n\"Spiffy: 'The Complete Calvin and Hobbes'\". Morning Edition (Real, Windows Media). November 18, 2005. NPR. Archived from the original on July 22, 2011."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Calvin_and_Hobbes",
        "situacao": "ok",
        "texto": "Calvin and Hobbes (Calvin & Hobbes em Portugal, Calvin e Haroldo no Brasil) é uma série de tiras criada, escrita e ilustrada pelo autor norte-americano Bill Watterson e publicada em mais de 2000 jornais do mundo inteiro entre 18 de novembro de 1985 e 31 de dezembro de 1995, tendo ganho em 1986 e 1988 o Reuben Award, da Associação Nacional de Cartoonistas dos Estados Unidos.\n[…]\nO nome de Calvin foi inspirado no reformador religioso do século XVI, João Calvino, um dos pais do cristianismo protestante, que discorreu, entre outros, acerca da depravação total do homem, ou seja, que o homem está naturalmente inclinado para promover o mal a seu próximo.\n[…]\nBill Watterson, por meio da tira, faz críticas à época. Em muitas histórias, Calvin debocha sobre a vida, o amor, os estudos e a política, assuntos sobre os quais crianças da idade dele nunca deveriam falar. Outro assunto muito comentado é o aprendizado. Devem ser levados em consideração os aspectos do ambiente escolar, como a quantidade de alunos na sala de aula, os métodos de ensino que o professor utiliza e a relação do professor com o aluno.\n[…]\nHobbes (Haroldo no Brasil): o tigre de pelúcia e maior parceiro e melhor amigo de Calvin;\n[…]\n1987 - Calvin and Hobbes (pt: Calvin & Hobbes; br: Calvin & Haroldo Cedibra e Calvin & Haroldo - E Foi Assim que Tudo Começou Conrad Editora)\n[…]\n1995 - The Calvin and Hobbes Tenth Anniversary Book (pt: Os Dez Anos de Calvin & Hobbes; br: Os Dez Anos de Calvin & Haroldo [Best News])\n[…]\nA tira Calvin e Haroldo ganhou no Brasil o Troféu HQ Mix dez vezes, sendo 9 na categoria \"melhor tira estrangeira\" (1990 a 1996, 2002 e 2003) e \"melhor publicação de tiras\", e uma vez pela coletânea O mundo é mágico (baseada na original It's A Magical World), publicada pela Conrad Editora em 2007 (o prêmio foi concedido no ano seguinte).\n[…]\nCalvin and Hobbes GoComics",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Rorschach",
      "descricao": "Vigilante mascarado e implacável da série Watchmen, de Alan Moore e Dave Gibbons"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O vigilante Rorschach, de Watchmen, tem o nome de um teste psicológico em que o paciente interpreta o quê?",
    "resposta": "Manchas de tinta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rorschach_(character)",
      "https://en.wikipedia.org/wiki/Rorschach_test"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rorschach_(character)",
        "situacao": "ok",
        "texto": "Walter Joseph Kovacs, also known as Rorschach, is a fictional antihero and one of the two main protagonists (alongside Nite Owl) of the graphic novel limited series Watchmen, published by DC Comics in 1986. Rorschach was created by writer Alan Moore with artist Dave Gibbons; as with most of the main characters in the series, he was an analogue for a Charlton Comics character; in this case, Steve D\n[…]\nHe believed that it \"is not the mask talking, it's not Rorschach, it's the actual human being [Walter Kovacs] that is somewhere under there\".\n[…]\nBy 1985 and the events of Watchmen, Rorschach is the vigilante who continues to operate in defiance of the Keene Act, the rest having retired or become government operatives. He investigates the murder of a man named Edward Blake, discovering that he is the Comedian.\n[…]\nRorschach is 5'6\" tall and weighs 140 pounds, and, as Walter Kovacs (his \"disguise\"), he appears as a red-haired, expressionless man who always carries with him a sign that reads \"THE END IS NIGH\". Most people who see Kovacs consider him ugly and Rorschach himself states that he cannot bear to look upon his own human face, considering his mask (or true \"face\") to be beautiful instead.\n[…]\nDuring his childhood, Walter Kovacs was described as bright, and excelled in literature, mathematics, political science, and religious education. Kovacs continues a one-man battle against crime long after superheroes have become both detested and illegal, eventually replacing his Kovacs identity with the persona of Rorschach. Rorschach considers his mask his true \"face\" and his unmasked persona to be his \"disguise\", refusing to answer to his birth name during his trial and psychiatric sessions.\n[…]\nRorschach appears in the animated film Watchmen (2024), voiced by Titus Welliver.\n[…]\nRorschach appears as a playable character in Watchmen: The End Is Nigh, with Jackie Earle Haley reprising his role."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rorschach_test",
        "situacao": "ok",
        "texto": "The Rorschach test is a projective psychological test in which subjects' perceptions of inkblots are recorded and then analyzed using psychological interpretation, complex algorithms, or both. Some psychologists use this test to examine a person's personality characteristics and emotional functioning. It has been employed to detect underlying thought disorder, especially in cases where patients ar\n[…]\nRorschach died the following year.\n[…]\nThere is nothing in the literature to encourage reliance on Rorschach interpretations.\" In addition, major reviewer Raymond J. McCall writes (p.\n[…]\nThe accusation of \"over-pathologising\" has also been considered by Meyer et al. (2007). They presented an international collaborative study of 4704 Rorschach protocols, obtained in 21 different samples, across 17 countries, with only 2% showing significant elevations on the index of perceptual and thinking disorder, 12% elevated on indices of depression and hyper-vigilance and 13% elevated on persistent stress overload—all in line with expected frequencies among non-patient populations.\n[…]\nControversy ensued in the psychological community in 2009 when the original Rorschach plates and research results on interpretations were published in the \"Rorschach test\" article on Wikipedia. Hogrefe & Huber Publishing, a German company that sells editions of the plates, called the publication \"unbelievably reckless and even cynical of Wikipedia\" and said it was investigating the possibility of legal action.\n[…]\nThe mask of the fictional antihero of the same name in the graphic novel limited series Watchmen and its adaptations displays a constantly morphing inkblot based on the designs used in the tests. In the 1999 Sofia Coppola movie The Virgin Suicides the character of Cecilia is given the test and in David Cronenberg's Spider (2002) the Rorschach inkblots are incorporated into the opening of the film."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rorschach_%28Watchmen%29",
        "situacao": "ok",
        "texto": "Rorschach é um super-herói / anti-herói fictício apresentado na aclamada série Watchmen, publicada pela editora estadunidense DC Comics entre 1986 e 1987.\n[…]\nNas HQs o personagem Rorschach tinha dois alter-egos distintos, entre eles, o próprio Walter Kovacs e Reggie.\n[…]\nA máscara exibe uma mancha de tinta que está em constante movimento que se baseia nos desenhos ambíguos utilizados no Teste de Rorschach. Serve como intimidação contra seus inimigos.\n[…]\nWalter Kovacs, mais conhecido como Rorschach, era um vigilante mascarado ativo durante o principal período da Guerra Fria nos Estados Unidos, e um dos principais vigilantes da cidade de Nova York. Junto com o Night Owl varreu o crime organizado das ruas de Nova York. E as ações do Rorschach em particular se tornaram efetivas, porque ele decidiu matar todos os assassinos, psicopatas, estupradores, corruptos, assaltantes, sequestradores e todos que encontrava.\n[…]\nA Espectral II e o Coruja II se reúnem e libertam Rorschach, em meio a uma rebelião, onde Kovacs consegue se vingar alguns de seus inimigos.\n[…]\nNo momento seguinte, ele é transformado em nada mais do que uma \"silhueta de tinta\" na neve.\n[…]\nEm 1992, sete anos após os acontecimentos de Watchmen, um sujeito chamado apenas de \"Reggie\" (que possivelmente seja filho de Malcom Long) assume então a identidade de Rorschach, após a morte de Walter Kovacs. Nesta época os Estados Unidos da América está à beira de uma guerra com a Rússia, depois que o plano arquitetado por Ozymandias para garantir a Paz Mundial foi por água abaixo depois que os detalhes do diário do verdadeiro Rorschach foram investigados por Jack N.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Tartarugas Ninja",
      "descricao": "Quatro tartarugas mutantes treinadas em artes marciais, criadas em quadrinhos por Kevin Eastman e Peter Laird em 1984"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "As Tartarugas Ninja, criadas em quadrinhos em 1984, têm nomes de artistas de qual período da história da arte?",
    "resposta": "Renascimento",
    "distratores": [
      "Barroco",
      "Impressionismo",
      "Romantismo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Teenage_Mutant_Ninja_Turtles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Teenage_Mutant_Ninja_Turtles",
        "situacao": "ok",
        "texto": "Teenage Mutant Ninja Turtles (TMNT) is an American media franchise created by comic book artists Kevin Eastman and Peter Laird. It follows Leonardo, Donatello, Raphael and Michelangelo, four anthropomorphic turtle brothers trained in ninjutsu who fight evil in New York City. The franchise encompasses printed media, television series, feature films, video games, and merchandise.\n[…]\nEastman and Laird's Teenage Mutant Ninja Turtles premiered in May 1984, at a comic book convention held at a local Sheraton Hotel in Portsmouth, New Hampshire. It was published by their company Mirage Studios in an oversized magazine-style format using black and white artwork on cheap newsprint, limited to a print run of 3000 copies. It was initially intended as a one-shot, but due to its popularity it became an ongoing series.\n[…]\nThe Turtles have appeared in several manga series.\n[…]\nIn 2016, Activision and PlatinumGames developed Teenage Mutant Ninja Turtles: Mutants in Manhattan for the PlayStation 4, PlayStation 3, Xbox One, Xbox 360, and PC. The game is described as a third-person, team-based brawler. The campaign is playable either single-player or co-op and has an original story written by Tom Waltz, IDW comic writer and editor. The art style is based on longtime TMNT comic artist Mateus Santolouco.\n[…]\nOnce the Turtles broke into the mainstream, parodies also proliferated in other media, such as in satire magazines Cracked and Mad and numerous TV series of the period. The satirical British television series Spitting Image featured a recurring sketch \"Teenage Mutant Ninja Turds\".\n[…]\nEastman, Kevin (2002). Kevin Eastman's Teenage Mutant Ninja Turtles Artobiography. Los Angeles: Heavy Metal. ISBN 1-882931-85-8.\n[…]\nWiater, Stanley (1991). The Official Teenage Mutant Ninja Turtles Treasury. New York: Villard. ISBN 0-679-73484-8.\n[…]\nTeenage Mutant Ninja Turtles at Don Markstein's Toonopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tartarugas_Ninja",
        "situacao": "ok",
        "texto": "As Tartarugas Ninja (Teenage Mutant Ninja Turtles, abreviado como TMNT) são quatro tartarugas antropomórficas batizadas com o nome de artistas italianos do Renascimento e treinadas na arte do ninjutsu por um rato sensei antropomórfico chamado Splinter. A partir da sua casa, os esgotos de Nova Iorque, batalham contra criminosos, senhores demoníacos, criaturas mutantes e alienígenas invasores, enqua\n[…]\nCriadas por Kevin Eastman e Peter Laird, a sua primeira aparição foi em 1984 na revista Teenage Mutant Ninja Turtles #1, publicada pela Mirage Comics. Mais tarde, as Tartarugas Ninja foram para séries animadas de televisão, filmes, videojogos, brinquedos e muitos outros produtos. Durante o pico da popularidade da franquia, entre o final da década de 1980 e início de 1990, ganharam fama e sucesso a nível mundial.\n[…]\nAs Tartarugas Ninja 3 (1993), no qual as Tartarugas voltam para o Japão feudal.\n[…]\nTeenage Mutant Ninja Turtles (2014), filme no qual as Tartarugas enfrentam o Clã do Pé e descobrem que este se aliou à corporação que criou o mutagênico, e agora planejam lançar um vírus mortal na cidade de Nova Iorque.\n[…]\nBatman vs. Teenage Mutant Ninja Turtles (2019), filme de animação que apresenta um crossover entre o Batman e as Tartarugas, feito pela DC Entertainment e pela Nickelodeon.\n[…]\nTeenage Mutant Ninja Turtles: Mutant Mayhem (2023), filme de animação produzido por Seth Rogen, onde as Tartarugas enfrentam um grupo de animais mutantes que planeja se vingar dos humanos.\n[…]\nA medida que a popularidade das tartarugas baixava, a Konami lançou em 1993 Teenage Mutant Ninja Turtles: Tournament Fighters, jogo de luta baseado em Street Fighter.\n[…]\nEm 2022, a Dotemu lançou Teenage Mutant Ninja Turtles: Shredder's Revenge, um jogo inspirado nos dois arcades originais permitindo até seis jogadores simultâneos, já que além das Tartarugas tem April, Splinter e Casey como personagens jogáveis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Popeye",
      "descricao": "Marinheiro forte que come espinafre, criado por E. C. Segar numa tira de jornal americana em 1929"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do marinheiro Popeye, criado em 1929 numa tira de jornal, faz referência a qual parte do corpo dele?",
    "resposta": "O olho",
    "distratores": [
      "O braço",
      "O queixo",
      "O nariz"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Popeye"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Popeye",
        "situacao": "ok",
        "texto": "Popeye the Sailor Man is a cartoon character created by Elzie Crisler Segar, first appearing on January 17, 1929, in the daily King Features comic strip Thimble Theater. The strip was in its tenth year when Popeye made his debut, but the one-eyed sailor quickly became the lead character, and Thimble Theater became one of King Features' most popular properties during the early  1930s.\n[…]\nPopeye the Sailor (introduced January 17, 1929)\n[…]\nThe show was next broadcast Mondays, Wednesdays and Fridays from 7:15 to 7:30pm on WABC and ran from August 31, 1936, to February 26, 1937 (78 episodes). Floyd Buckley played Popeye, and Miriam Wolfe portrayed both Olive Oyl and the Sea Hag. Once again, reference to spinach was conspicuously absent. Instead, Popeye sang, \"Wheatena's me diet / I ax ya to try it / I'm Popeye the Sailor Man\".\n[…]\nThe popular fast-food chain Popeyes was founded on June 12, 1972, and is the second-largest \"quick-service chicken restaurant group\" behind Kentucky Fried Chicken. It was not named after the sailor, but some Popeye references were featured in a few commercials throughout its early years as part of a licensing deal with King Features (the chain was actually named after a fictional detective from the 1971 film The French Connection named Jimmy \"Popeye\" Doyle).\n[…]\nAccording to music historian Robert Pruter, the Popeye was even more popular than the Twist in New Orleans. The dance was associated with and/or referenced to in several songs, including Eddie Bo's \"Check Mr. Popeye\", Chris Kenner's \"Something You Got\" and \"Land of a Thousand Dances\", Chubby Checker's \"Popeye The Hitchhiker\", Frankie Ford's \"You Talk Too Much\", Ernie K-Doe's \"Popeye Joe\", Huey \"Piano\" Smith's \"Popeye\", The Sherrys \"Pop Pop Pop-Pie\", and Harvey Fuqua's \"Any Way You Wanta\".\n[…]\nPopeye (1977)\n[…]\nPopeye's Pups (September 2019)\n[…]\nPopeye the Sailor (film series)\n[…]\nPopeye at Comics Kingdom"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Popeye",
        "situacao": "ok",
        "texto": "Popeye é um personagem de histórias em quadradinhos, criado por Elzie Crisler Segar.\n[…]\nO criador de Popeye, Elzie Segar contou, anos depois, que a inspiração para o personagem, veio de um homem que ele conheceu quando criança, em Chester, Illinois, chamado Frank \"Rocky\" Fiegel. Aposentado, Frank era pago para manter limpo o bar local. Vivia com o olho direito meio fechado, fumava cachimbo e mentia muito. Não parava de contar aventuras imaginárias, gabando-se das proezas de sua força física, garantindo que nunca tinha perdido uma briga.\n[…]\nNesta época Popeye passou a usar sempre o seu uniforme branco de marinheiro, e deixou de ser um \"marinheiro caolho/zarolho\", passando a abrir de vez em quando o olho direito, que antes estava sempre fechado, e em alguns momentos ficando com os dois olhos abertos. Olívia, em alguns destes episódios, começou a usar camisetas de mangas curtas e sapatos de salto alto.\n[…]\nUm dos episódios do Marinheiro Popeye, chamado \"Melodia Misteriosa\", mostra a Bruxa do Mar se transformando em \"Rosa do Mar\" para enganar o Vovô Popeye. Na animação À Procura do Vovô (Popeye's Voyage: The Quest for Pappy) de 2004, é dito que foi a Bruxa do Mar quem arrancou o olho direito do Vovô Popeye, em uma batalha em alto mar.\n[…]\nPipeye, Pupeye, Poopeye e Peepeye - Os sobrinhos quadrigêmeos de Popeye, que estão sempre aprontando confusões. São idênticos ao tio, e também são caolhos do olho direito que nem o seu tio (ou pelo menos fingem ser, já que de vez enquanto trocam o olho fechado).\n[…]\nPopeye (em inglês) no IMDb\n[…]\nCanal de Popeye no YouTube\n[…]\n«Popeye». no site do Gloob",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Lex Luthor",
      "descricao": "Gênio do crime careca e principal inimigo do Superman nos quadrinhos da DC"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Numa história de 1960, por que o jovem cientista Lex Luthor passou a odiar o Superboy?",
    "resposta": "Culpou-o por ficar careca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lex_Luthor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lex_Luthor",
        "situacao": "ok",
        "texto": "Alexander Joseph \"Lex\" Luthor () is a supervillain appearing in American comic books published by DC Comics. Created by writer Jerry Siegel and artist Joe Shuster, the character first appeared in Action Comics #23 (April 1940). He has since endured as the archenemy of Superman. While Superman embodies hope and selflessness, Luthor symbolizes unrestrained ambition and humanity's belief in the super\n[…]\nThe Silver Age version of Luthor was introduced in Adventure Comics #271 (April 1960), now given the first name \"Lex\" (later said to be short for Alexis, eventually retconned as Alexander) and an origin story. Originally hero-worshiping Superboy, teenage Lex Luthor of Smallville is determined to prove he is Earth's greatest scientist by creating artificial life. His recklessness and inexperience causes a fire in his lab and he calls on Superboy to save him.\n[…]\nWhen Brainiac accuses him of showing paternal feelings for Conner though, Luthor denies it, saying that he only wants his property back, and has no fatherly feelings towards Superboy.\n[…]\nAfter Superboy and Luthor visit Lena, Luthor makes it clear he now sees Conner as an inherently \"failed experiment\" due to having 50% \"wrong alien DNA.\" In the alternate future timeline of Titans Tomorrow, Conner becomes an uncompromising and dictatorial successor to Superman, with Luthor becoming a father figure to him.\n[…]\nIn \"Blackest Night\", Lex Luthor's father Lionel Luthor is revealed to have died of an allergic reaction to his medicine during Clark Kent's days as Superboy. He is temporarily reanimated as a member of the Black Lantern Corps and attacks Lex. Following \"Blackest Night'\", Luthor creates a gynoid version of Lois Lane using Brainiac technology.\n[…]\nMany alternate universe versions of Lex Luthor have appeared throughout the character's publication history.\n[…]\nSuperman Homepage – Lex Luthor biography\n[…]\nLex Luthor on DC Database, a DC Comics wiki"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lex_Luthor",
        "situacao": "ok",
        "texto": "Alexander Joseph \"Lex\" Luthor é um supervilão fictício que aparece em histórias em quadrinhos publicadas pela editora americana DC Comics. Criado por Jerry Siegel e Joe Shuster, Lex Luthor apareceu pela primeira vez na Action Comics #23 (Abril de 1940) e desde então tem sido o arqui-inimigo do Superman.\n[…]\nUma hipótese é que Nowak confundiu Luthor com Ultra-Humanoide, um inimigo frequente de Superman, que, em sua encarnação da Era de Ouro, se assemelha a um homem idoso careca. Próxima aparição de Luthor ocorre em Superman #10 (maio de 1941), no qual Nowak descreveu ele como significativamente mais gordo, com papada visíveis  A perda de cabelo abrupta do personagem foi referenciada várias vezes ao longo de sua história.\n[…]\nO desejo de ter mais atenção do que o Superman estava sempre na mente de Luthor até que ele chegou a conclusão que havia somente uma coisa a fazer... tornar-se Presidente dos Estados Unidos. Lex Luthor levou a sério sua candidatura, escolheu Peter Ross como seu vice, ganhando assim o eleitorado de Kansas. Surpreso, Clark viu dia a dia o nome de Luthor ficar mais forte, mesmo acreditando que o povo não o elegeria.\n[…]\nLuthor começa a história roubando a fortuna de uma velha milionária, assinando o testamento que daria tudo para ele.\n[…]\nSpacey descreve seu Luthor como uma mistura dos vários Lexes: Tem a inteligência e a classe do Lex dos quadrinhos modernos, a explosividade e ideias maquiavélicas do Lex pré-crise, e o personagem cômico dos filmes de Donner (mas que geralmente, seu lado cômico, serve apenas para dar ênfase as suas explosões de raiva). Diferente de Hackman, este Luthor parece confortável sendo careca, ignora as muitas piadas feitas sobre sua calvície.\n[…]\n(em inglês) Lex Luthor no Supermanica Wiki\n[…]\n(em inglês) Lex Luthor no Justice League Toonzone",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Justiceiro",
      "descricao": "Frank Castle, anti-herói da Marvel que combate o crime com armas e usa uma caveira no peito"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que tragédia transformou o ex-fuzileiro Frank Castle no Justiceiro, o anti-herói da caveira no peito?",
    "resposta": "O assassinato da família pela máfia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Punisher"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Punisher",
        "situacao": "ok",
        "texto": "The Punisher is an antihero appearing in American comic books published by Marvel Comics. Created by writer Gerry Conway and artists John Romita Sr. and Ross Andru, the character first appeared in The Amazing Spider-Man #129 (cover dated February 1974) as an adversary of the superhero Spider-Man. In the Marvel Universe, the Punisher is the vigilante identity of Francis G.\n[…]\nPunisher was introduced as a solo character in a black-and-white magazine, intended for older readers. Marvel Preview #2 (1975), the fifth appearance of the character, reveals the Punisher's earlier name \"Frank Castle\" and the trauma of his family's murder by Mafia gangsters.\n[…]\nThe success of the initial title inspired an additional ongoing series, The Punisher War Journal, beginning in 1988, and a black-and-white magazine reprinting early stories, The Punisher Magazine (1989–1990). Three miniseries followed during this period (Assassin's Guild (1988), Return to Big Nothing (1989), and Intruder (1989) ) each placing Castle in standalone scenarios outside the main continuity.\n[…]\nA new 12-issue series began in 2022, written by Jason Aaron with art by Jesús Saiz and Paul Azaceta, depicting Castle as an assassin serving the ninja organization The Hand.\n[…]\nDiPaolo places the Punisher within a broader tradition of Italian American crime fighters in popular culture, comparing Castle to figures such as Columbo and the real-life undercover agent Joe Pistone. He argues the character is defined by a self-destructive relationship to his own ethnic community: Castle, born Frank Castiglione to Sicilian immigrants, wages his war primarily against the Mafia responsible for his family's deaths.\n[…]\nScott, Cord A. \"Anti-Heroes: Spider-Man and the Punisher\". In Peaslee & Weiner (2012), pp. 120-127.\n[…]\nPunisher at Marvel.com\n[…]\nThe Punisher at the Comic Book DB (archived from the original)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Punisher",
        "situacao": "ok",
        "texto": "Justiceiro (Francis \"Frank\" Castle, nascido Castiglione; no original, Punisher, Avenger, \"castigador\", \"vengador\" ) é um personagem fictício, um anti-herói que aparece nas histórias em quadrinhos publicadas pela Marvel Comics. Criado pelo escritor Gerry Conway e pelos artistas Ross Andru e John Romita (Stan Lee aprovou o nome), apareceu pela primeira vez em The Amazing Spider-Man #129 (fev. de 197\n[…]\nO Justiceiro é um vigilante ítalo-americano que usa o assassínio, a espionagem, o sequestro, a extorsão, a coerção, as ameaças violentas e a tortura na sua guerra contra o crime. Impulsionado pelas mortes da sua esposa e dos seus filhos durante um tiroteio da Máfia Americana no Central Park, Nova Iorque, o Justiceiro move-se numa guerra de um só homem contra a máfia e todos os criminosos usando todo o tipo de armamento de guerra. Os assassinos da sua família foram as suas primeiras vítimas.\n[…]\nO Justiceiro foi concebido por Gerry Conway, um roteirista de The Amazing Spider-Man. Conway foi inspirado por The Executioner, uma popular série de livros criada pelo autor Don Pendleton, na qual um veterano do Vietnã, Mack Bolan, se torna um assassino em massa de criminosos após as mortes de sua família relacionadas à máfia. Ele também afirma que foi parcialmente inspirado por The Shadow, \"um personagem que se achava acima da lei\".\n[…]\nCastle decidiu fazer justiça com suas próprias mãos e perseguiu as pessoas que assassinaram brutalmente sua família.\n[…]\nFrank Castle decidiu se tornar o Justiceiro (em inglês, Punisher) após ver sua família (esposa e dois filhos) ser assassinada por mafiosos, apenas por terem testemunhado um assassinato cometido por eles. Quando saiu do hospital (ele também havia sido baleado) esperou que a polícia fizesse justiça, prendendo a quadrilha.\n[…]\nFrank Castle é interpretado por Ray Stevenson em Justiceiro: Zona de Guerra.\n[…]\nThe Punisher (em inglês) no Marvel.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Zé Carioca",
      "descricao": "Papagaio malandro carioca criado pelos estúdios Disney em 1942, astro de quadrinhos produzidos no Brasil"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Zé Carioca surgiu depois de uma viagem de Walt Disney à América do Sul, em 1941. Essa viagem fazia parte de qual política do governo americano?",
    "resposta": "Política da Boa Vizinhança",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jos%C3%A9_Carioca",
      "https://pt.wikipedia.org/wiki/Z%C3%A9_Carioca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jos%C3%A9_Carioca",
        "situacao": "ok",
        "texto": "José \"Zé\" Carioca ( zhoh-ZAY KARR-ee-OH-kə; Portuguese: [ʒuˈzɛ kaˈɾjɔkɐ]) is a cartoon anthropomorphic parrot created by American cartoonist and animator Walt Disney during a trip to Rio de Janeiro in 1941 as a resource to support the relations between Latin America and the US during World War II (as part of the Good Neighbor Policy). It is alleged by some journalists that Disney presented the cha\n[…]\nThe Walt Disney Company then incorporated the idea, being introduced in the 1942 film Saludos Amigos as a friend of Donald Duck, described by Time as \"a dapper Brazilian parrot, who is as superior to Donald Duck as the Duck was to Mickey Mouse.\" He speaks Portuguese. He returned in the 1944 film The Three Caballeros along with Donald and a Mexican rooster named Panchito Pistoles. José is from Rio de Janeiro, Brazil (thus the name \"Carioca\", which is a term used for a person born in Rio).\n[…]\nJosé also has a cameo appearance in the 2023 short film Once Upon a Studio, as part of the Walt Disney Animation Studios characters that take a group photo.\n[…]\nIn recent years, José Carioca has been used alongside Panchito and Donald in two comics by American artist Don Rosa, The Three Caballeros Ride Again (2000) and The Magnificent Seven (Minus 4) Caballeros (2005). The creation of a Brazilian animated character during World War II was part of a strategy called \"Good Neighbor Policy\" headed by the United States government to improve relations and gather support amongst its neighbor countries.\n[…]\nIn 2002, José Carioca appears in the games of the Disney Sports series produced by Konami for Nintendo's GameCube and Game Boy Advance platforms, José is part of The TinyRockets teams alongside Huey, Dewey, and Louie, the games are Disney Sports Soccer (Association football), Disney Sports Basketball (basketball) and Disney Sports Football (American football).\n[…]\nJosé \"Joe\" Carioca in a Who's who in Duckburg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Z%C3%A9_Carioca",
        "situacao": "ok",
        "texto": "Zé Carioca é o apelido (alcunha em português europeu) do papagaio José Carioca (nos Estados Unidos e nos Países Baixos, também chamado de Joe Carioca), personagem fictício desenvolvido no começo da década de 1940 pelos estúdios Walt Disney. Ele é retratado como o típico malandro carioca, sempre escapando dos problemas com o jeitinho característico. Sua primeira aparição foi no filme Saludos Amigos\n[…]\nO personagem brasileiro foi criado durante a Segunda Guerra Mundial, na verdade fez parte de uma estratégia chamada de política de boa vizinhança dirigida pelo governo dos Estados Unidos para melhorar as relações e obter apoio político dos países latino-americanos.\n[…]\nZé Carioca foi criado pelo próprio Walt Disney dentro do Hotel Copacabana Palace quando esteve no Brasil em 1941. Impressionado com a técnica de J. Carlos, cartunista que desenhava as versões brasileiras de personagens da empresa na revista O Tico Tico, Disney o convidou para trabalhar em Hollywood, mas o convite foi recusado por J. Carlos. Segundo alguns jornalistas, Walt Disney criou e enviou o personagem José Carioca para Carlos, dizendo esta ser uma homenagem ao cartunista.\n[…]\nArte e Cor - Zé Carioca\n[…]\nAs incoerências e desatualização na composição do Zé Carioca, se explicam pelo fato de que o personagem não foi concebido com o objetivo do formato sequencial dos quadrinhos, mas sim para um breve curta homenageando a América Latina (que mais tarde tornar-se-iam dois). Não foi pensado no futuro que o personagem teria quando o próprio Walt Disney criou o personagem, que não era um favelado, sequer um caloteiro, apenas um entusiasta do Brasil.\n[…]\nMorcego Verde (1975) - Super-herói encarnado pelo papagaio, que luta contra o crime com seus métodos nada convencionais, e faz uso da morcegocleta (popularmente conhecida como “a bicicleta do vizinho”). Embora desconverse, todos sabem se tratar do Zé Carioca – paródia do Batman."
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Chico Bento",
      "descricao": "Menino caipira de chapéu de palha da Turma da Mônica, morador da Vila Abobrinha."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Vila Abobrinha, por que o Nhô Lau vive correndo atrás do Chico Bento?",
    "resposta": "Ele rouba as goiabas do pomar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chico_Bento"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chico_Bento",
        "situacao": "ok",
        "texto": "Chico Bento é o personagem principal da Turma do Chico Bento, criada pelo cartunista brasileiro Mauricio de Sousa. Chico foi criado em 1961, inspirado em um morador da cidade de Santa Isabel, apelidado de João Galinha e amigo de Mauricio, bem como de histórias que sua avó contava sobre seus tios-avôs Chico e Bento.\n[…]\nChico Bento é retratado como preguiçoso, trabalhador, aventureiro, carismático, esforçado e divertido, pois vive dormindo, vai pescar com seus amigos, rouba as goiabas do Nhô Lau, vive namorando a Rosinha, mas ajuda o pai fazendo muitas das atividades do sítio. Chico Bento tem uma inteligência  média de 50% e na maioria das vezes, tira 0 nas provas, mas algumas vezes tira 10.\n[…]\nChico é um típico caipira brasileiro. Anda descalço e usa chapéu de palha. Ele adora pescar com o pai e com os amigos. Chico mora com os seus  pais, Seu Bento e Dona Cotinha, em um sítio nas cercanias da fictícia Vila Abobrinha, no interior de São Paulo. Possui uma avó paterna, Vó Dita, contadora de \"causos\" e de histórias folclóricas, envolvendo lendas, tais como a da Mula-sem-cabeça, do Saci, do Lobisomem, do Curupira, dentre outras.\n[…]\nAlém de sua namorada, Rosinha, também aparecem em suas histórias: Zé Lelé (seu primo), Zé da Roça (originalmente Zezinho), Hiro (originalmente Hiroshi), Anjo Gabriel (o anjo da guarda do Chico), Dona Marocas (a professora), Nhô Lau (dono de uma plantação de goiabas), seu primo Zeca (que mora numa cidade grande), o Padre Lino, etc.\n[…]\nEm 2013, começou a ser editada a revista Chico Bento Moço, uma adaptação onde Chico sai de casa para ir estudar Agronomia na cidade grande. A ideia da revista foi inspirada no sucesso da Turma da Mônica Jovem, versão adolescente da Turma da Mônica em estilo mangá."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Lucy van Pelt",
      "descricao": "Menina mandona da tira Peanuts, de Charles Schulz, irmã mais velha de Linus"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na tira Peanuts, a mandona Lucy dá conselhos psiquiátricos numa barraquinha. Quanto ela cobra por consulta?",
    "resposta": "Cinco centavos",
    "distratores": [
      "Um centavo",
      "Dez centavos",
      "Vinte e cinco centavos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lucy_van_Pelt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lucy_van_Pelt",
        "situacao": "ok",
        "texto": "Lucille \"Lucy\" Van Pelt is a fictional character in the syndicated comic strip Peanuts, written and drawn by Charles Schulz. She is the older sister of Linus and Rerun. Lucy is characterized as a \"fussbudget\", crabby, bossy and opinionated girl who bullies most other characters in the strip, particularly Linus and Charlie Brown.\n[…]\nThe third new character in Peanuts after Violet and Schroeder, Lucy made her debut on March 3, 1952. Originally based on Schulz's adopted daughter Meredith, Lucy was a goggle-eyed toddler who continually annoyed her parents and the older kids. Her future irascibility was hinted at in a 1953 strip when she tells Charlie Brown that she'd just been expelled from nursery school.\n[…]\nLucy was named for Louanne Van Pelt (1929–2015), a former neighbor of Schulz in Colorado Springs, Colorado. According to David Michaelis of Time, she was modeled after Schulz's first wife, Joyce.\n[…]\nThe football strips became an annual tradition, and Schulz did one nearly every year for the rest of the strip's run, becoming a core part of Peanuts lore. The most controversial example is in the animated special It's Your First Kiss, Charlie Brown. During an actual football game with many spectators, Lucy pulls the ball away on Charlie Brown four times keeping him from making any scoring plays and causing the team to lose the Homecoming game by one point.\n[…]\nAlthough clearly innocent, he is blamed for the loss even by Lucy herself. In the Peanuts specials, this first happens in It's the Great Pumpkin, Charlie Brown. In A Charlie Brown Thanksgiving, Lucy says that \"the biggest, most important tradition of all is the kicking off of the football\", readying Charlie Brown to kick the football before she once again pulls it out from under him."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lucy_van_Pelt",
        "situacao": "ok",
        "texto": "Peanuts (no Brasil também conhecido como Minduim) é uma tira de jornal escrita e desenhada pelo cartunista norte-americano Charles Schulz que foi publicada de 2 de outubro de 1950 a 12 de fevereiro de 2000. A turma desenhada foi uma das mais populares e influentes da história da mídia. No seu ápice, Peanuts aparecia em mais de 2600 jornais, com um número de leitores estimado em 355 milhões em 75 p\n[…]\nEm 2011, foi lançado o especial para a televisão Happiness Is a Warm Blanket, Charlie Brown, roteirizado por Stephan Pastis (autor da tira Pearls Before Swine) e Craig Schulz (filho de Charles). Em 2014, é lançada uma série curtas produzida pela pelo estúdio Normaal Animation e a France Televisions Distribution. Em novembro de 2015, foi lançado o longa-metragem 3D The Peanuts Movie, produzido pela Blue Sky Studios.\n[…]\nA United Feature Syndicate continuou a distribuir a tira até 27 de fevereiro de 2011, quando a Universal Uclick assumiu a distribuição, encerrando mais de 60 anos de gestão da United Media sobre Peanuts. Em maio de 2017, a canadense DHX Media (atualmente WildBrain) anunciou que adquiriria as marcas de entretenimento da Iconix, incluindo a participação de 80% na Peanuts Worldwide e os direitos integrais da marca Strawberry Shortcake, por US$ 345 milhões.\n[…]\nDois meses após a conclusão da venda, a DHX eliminou o restante de sua dívida ao assinar um contrato de agência de cinco anos, multimilionário, com a CAA-GBG Global Brand Management Group para representar a marca Peanuts na China e no restante da Ásia, exceto o Japão.. Em 19 de dezembro de 2025, a Sony anunciou que adquiriu a marca Peanuts por US$ 457 milhões.\n[…]\nRerun: O irmão mais novo de Lucy e Linus.\n[…]\nLucy Must Be Traded, Charlie Brown\n[…]\nSnoopy presents:Lucy's school\n[…]\nPeanuts Collector Club\n[…]\nAAUGH.com Peanuts Book Collecting Guide\n[…]\nPeanuts Animation and Reprints Page\n[…]\nTiras diárias dos Peanuts em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Capitão Haddock",
      "descricao": "Capitão do mar beberrão e esbravejante, melhor amigo de Tintim"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Nas aventuras de Tintim, em que castelo o Capitão Haddock passa a morar, herança de um antepassado?",
    "resposta": "Moulinsart",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marlinspike_Hall"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marlinspike_Hall",
        "situacao": "ok",
        "texto": "Marlinspike Hall (French: Le château de Moulinsart [mu.lɛ̃.saʁ]) is Captain Haddock's country house and family estate in The Adventures of Tintin, the comics series by Belgian cartoonist Hergé.\n[…]\nThe original French name of the hall, Moulinsart, is derived from Sart-Moulin, a village near Braine-l'Alleud in Walloon Brabant, Belgium. In an allusion to the Haddock family's maritime history, the hall's English name refers to the marlinspike, a tool used in seamanship to splice ropes. The Belgian corporation managing Hergé's work (principally Tintin) is also called Moulinsart S.A., now TintinImaginatio.\n[…]\nThe hall is modelled after the central section of the Château de Cheverny, a manor in France. Hergé purposely left out the wings at the extremity of the original building, saying that it would be one thing for Captain Haddock to inherit a beautiful residence, but quite another thing for him to inherit a stately home.\n[…]\n”Indeed it seems that the château, along with the group it shelters, takes on the role of defining this fictitious geography, in a very specific way. Moulinsart, in its peaceful rural setting, figures in a sense the opposite of adventure”, commented Nathalie Aubert.\n[…]\nMoreover, it is explained in Red Rackham's Treasure that the Manor was built by an ancestor of Captain Haddock, the Chevalier François de Hadoque, a ship-of-the-line captain in the French Navy under King Louis XIV. In the Golden Press editions, the name Marlinspike Hall is Americanized to Hudson Manor, suggesting a location along the Hudson River in the State of New York."
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Noturno",
      "descricao": "Kurt Wagner, mutante azul de cauda pontuda dos X-Men, capaz de se teletransportar"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Noturno, o mutante azul de cauda pontuda que se teletransporta nos X-Men, nasceu em qual país europeu?",
    "resposta": "Alemanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nightcrawler_(character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nightcrawler_(character)",
        "situacao": "ok",
        "texto": "Nightcrawler is a superhero appearing in American comic books published by Marvel Comics, commonly in association with the X-Men. Created by artist Dave Cockrum, he debuted in the comic book Giant-Size X-Men #1 (May 1975). By the time of his creation, there was already another Marvel character with the same name, but with a hyphen (Night-Crawler), which was later changed to Dark-Crawler to avoid c\n[…]\nNightcrawler, the superhero identity of Kurt Wagner, is a member of a fictional subspecies of humanity known as mutants, who possess an X-gene that can cause possible  physical mutations and in many cases grants some form of superhuman ability. Nightcrawler possesses superhuman agility, the ability to teleport, and adhesive hands and feet.\n[…]\nAmong his more ironic character traits, Kurt Wagner is an extremely religious man. A devout Catholic, his demonic appearance obviously makes it very difficult to attend Mass. Despite this, as mutants in the Marvel Universe become more accepted, he even managed to almost become a Catholic priest, but his studies were interrupted by a villainous group known as the Neo.\n[…]\nAfter hinting for many years that Mystique was indeed Nightcrawler's biological mother, it was confirmed by writer Scott Lobdell in X-Men Unlimited #4. In 2003, it was revealed that although Mystique was married to a wealthy German, Herr Wagner, Nightcrawler's father was Azazel, a member of a race of demonic-looking mutants known as the Neyaphem which date back to Biblical times that were banished to another dimension by a race of angelic mutants.\n[…]\nA young Nightcrawler appears in X-Men: Apocalypse, portrayed by Kodi Smit-McPhee. Initially forced to compete in mutant cage fights against Angel, he is rescued by Mystique, assists the X-Men in defeating Apocalypse, and is recruited into their ranks.\n[…]\nNightcrawler appears in X-Men: Mutant Academy 2.\n[…]\nNightcrawler (Kurt Wagner) at Marvel.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Noturno_%28Marvel_Comics%29",
        "situacao": "ok",
        "texto": "Noturno (Nightcrawler no original em inglês) é um personagem fictício de quadrinhos do Universo Marvel. Ele tem sido associado a ambos,X-Men e Excalibur, originalmente aparecendo nas histórias em quadrinhos publicados pela Marvel Comics. Criado pelo escritor Len Wein e pelo artista Dave Cockrum, ele estreou no Gigante-Size X-Men # 1 (Maio 1975). Durante o enredo de \"X-Men: Second Coming\", Noturno \n[…]\nComo um mutante, Noturno possui agilidade sobre-humana, e a capacidade de teletransporte, invisibilidade em sombras profundas, e as mãos e os pés aderirem a parede. Possui a pele azul (que herdou de sua mãe), olhos amarelos e uma cauda preênsil (que herdou de seu pai). Uma mutação física que possui mas que seus pais não são os três dedos nos pés e mãos (incluindo o polegar).\n[…]\nKurt Wagner nasceu na região alemã da Baviera, filho da terrorista Mística e do mutante de aparência demoníaca Azazel. Isso aconteceu quando ela era esposa de Lorde Darkholme. Ao nascer com orelhas pontudas, rabo e apenas três dedos na mãos e nos pés, sua mãe o abandonou num rio para não ser linchada pelos aldeões de sua vila.\n[…]\nApós esse incidente, Kurt e Amanda viajaram para a Alemanha, onde sua mãe Margali fora capturada por Desespero. De volta ao Excalibur, Noturno foi dominado pelo mago Gravemoss que tentou matar Amanda.\n[…]\nNoturno foi líder da equipe até que o grupo se desfez, quando o Capitão casou-se com Meggan.\n[…]\nApós a realidade voltar ao normal, Kurt Wagner foi um dos 198 mutantes que não perderam seus poderes na Dizimação.\n[…]\nNoturno brevemente acredita que ele não tem mais um papel com os X-Men, especialmente devido à Fada e suas façanhas de teletransporte. A viagem de volta para a Alemanha renova sua convicção através de um encontro com um menino amaldiçoado por ciganos em forma demoníaca e uma aventura romântica antes de retornar á São Francisco para ajudar os X-Men contra um adversário .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Aquaman",
      "descricao": "Super-herói da DC Comics que vive no mar e se comunica com as criaturas marinhas"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Aquaman, o herói da DC que conversa com os peixes, é rei de qual reino submerso?",
    "resposta": "Atlântida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aquaman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aquaman",
        "situacao": "ok",
        "texto": "Aquaman is a superhero appearing in American comic books published by DC Comics. Created by Paul Norris and Mort Weisinger, the character debuted in More Fun Comics #73 (November 1941). Initially a backup feature in DC's anthology titles, Aquaman later starred in several volumes of a solo comic book series. During the late 1950s and 1960s superhero-revival period known as the Silver Age, he was a \n[…]\nWhen Arthur grew up, he called himself \"Aquaman\".\n[…]\nThe relaunched series cemented Aquaman's status as the half-human son of Tom Curry and Atlanna and saw him return to Amnesty Bay with Mera. Greatly distressed by the harsh treatment given to the oceans during his time as ruler of Atlantis, Aquaman decides to abdicate the Atlantean throne and return to full-time heroics. Arthur struggles, however, with his lack of reputation with the greater public, which views him as a metahuman with less impressive powers than those of his peers.\n[…]\nThe 2015 \"Convergence\" storyline gave Aquaman a new look at issue #41. In this story, he has been deposed from his throne by Mera, now Queen of Atlantis, who is now hunting him as a fugitive. Along the way, Arthur acquires some new powers and new equipment, giving him access to powerful mystical capabilities. It is later revealed that Atlantis is really being run by the Siren, identical twin sister of Mera, whom Mera had taken prisoner.\n[…]\nArthur Joseph Curry is the second DC Comics superhero to be known as Aquaman. Created by Kurt Busiek and Jackson Guice, he first appeared in Aquaman: Sword of Atlantis #40 (May 2006). As part of DC Comics's One Year Later event, Aquaman's series was renamed Aquaman: Sword of Atlantis with issue #40 (May 2006). The new developments included a new lead character, a new supporting cast, and the inclusion of sword and sorcery–type fantasy elements in the series.\n[…]\nThis Aquaman returns in Convergence: Justice League #1."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aquaman",
        "situacao": "ok",
        "texto": "Aquaman é um super-herói das histórias em quadrinhos americanas da DC Comics. Criado por Paul Norris e Mort Weisinger, o personagem estreou na revista More Fun Comics #73 (novembro de 1941, apesar de constar na capa \"novembro\", More Fun Comics #73 chegou às bancas dos EUA em 25 de setembro de 1941.). Inicialmente um herói secundário em títulos da antologia da DC, Aquaman depois estrelou em vários \n[…]\nQuando Arraia Negra e Sereia tentam matar o pai adotivo de Jackson, Aquaman chega a tempo, defendendo a família de Jackson de seus ataques. Aquaman pega Jackson e seu pai adotivo e o leva em segurança onde tudo pode ser explicado. Usando o mapa, os dois descobrem uma caixa trancada que só Jackson pode abrir. É revelado em uma conversa entre os dois que a origem do Aquaman da Era de Prata foi restabelecida e ele é mais uma vez o filho meio-humano de Tom Curry e de uma rainha atlante.\n[…]\nArthur Joseph Curry é um personagem fictício, o segundo super-herói da DC Comics a ser conhecido como Aquaman. Criado por Kurt Busiek e Jackson Guice, ele apareceu pela primeira vez em Aquaman: Espada de Atlântida #40 (maio de 2006).\n[…]\nNa Espada de Atlântida #57 (em inglês:  Sword of Atlantis), edição final da série, Aquaman é visitado pela Dama do Lago, que explica suas origens. O Aquaman original tinha dado uma amostra de sua mão de água para o Dr. Curry, a fim de ressuscitar o filho morto de Curry, Arthur, a quem ele tinha dado o nome de Orin. Quando Orin tentou ressuscitar Sub Diego, uma parte de sua alma se uniu ao corpo de Arthur Joseph Curry, enquanto Orin transformou-se no Morador.\n[…]\nEm Aquaman: Morte do Rei, Tula afirma especificamente que Aquaman tem poderes físicos muito maiores do que qualquer outro Atlante normal.\n[…]\nBarracuda: Versão do Sindicato do Crime da Amérika de Aquaman. Última vez visto liderando os exércitos de Atlântida contra o mundo da superfície, na Flórida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "X-Men",
      "descricao": "Equipe de mutantes da Marvel criada por Stan Lee e Jack Kirby, liderada pelo Professor Xavier"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A primeira revista dos X-Men chegou às bancas americanas no mesmo mês que a dos Vingadores. Em que ano?",
    "resposta": "1963",
    "fonte": [
      "https://en.wikipedia.org/wiki/X-Men",
      "https://en.wikipedia.org/wiki/Avengers_(comics)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/X-Men",
        "situacao": "ok",
        "texto": "The X-Men are a superhero team in American comic books published by Marvel Comics. Created by writer/editor Stan Lee and artist/co-plotter Jack Kirby, the team first appeared in The X-Men #1 (September 1963). Although initially cancelled in 1970 due to low sales, following its 1975 revival and subsequent direction under writer Chris Claremont, it became one of Marvel Comics's most recognizable and\n[…]\nIn 1963, following the success of the Fantastic Four, co-creator Stan Lee wanted to create another group of superheroes. Unlike Lee's earlier creations such as Spider-Man, who acquired their powers through different scientific means, Lee decided that this new group of heroes were \"mutants\", born with latent powers as he had grown weary of creating separate origins for each superhero.\n[…]\nWhile the X-Men are often assumed to have been named after Professor X, the original explanation for the name, provided by Xavier in The X-Men #1 (1963), is that mutants \"possess an extra power ... one which ordinary humans do not!! That is why I call my students ... X-Men, for EX-tra power!\"\n[…]\nThe first issue, cover-dated September 1963, introduces the original team, with Marvel Girl presented as a new pupil at Charles Xavier's school, apparently the first female student, and meeting Cyclops,  Beast, Angel, and Iceman. Cyclops, whose eyes shoot powerful beams unless they are controlled by a visor, is the central protagonist.\n[…]\nUncanny X-Men, vol. 1 (flagship) – a team of young mutants with superhuman abilities led and taught by Professor X (1963–1970); the team expanded when Xavier recruited mutants from around the world (1975–1985); a reformed Magneto became the headmaster after Xavier had left Earth (1985–1988); the team later relocated to the Outback after the events of The Fall of the Mutants (1988–1989)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Avengers_(comics)",
        "situacao": "ok",
        "texto": "The Avengers are a superhero team appearing in American comic books published by Marvel Comics, created by writer-editor Stan Lee and artist/co-plotter Jack Kirby. The team made its debut in The Avengers #1 (cover-dated September 1963). Labeled \"Earth's Mightiest Heroes\", the original Avengers consisted of Iron Man, Ant-Man, Hulk, Thor, and Wasp. Captain America was discovered trapped in ice in is\n[…]\nThe team debuted in The Avengers #1 (September 1963). Much like the Justice League of DC Comics, the original line-up of the Avengers consisted of heroes who each had existing series of their own. All of the characters were created by Stan Lee and Jack Kirby. This initial series, published bi-monthly through issue #6 (July 1964) and monthly thereafter, ran through issue #402 (Sept. 1996).\n[…]\nThe roster changed almost immediately; in the second issue (November 1963), Ant-Man assumed the new name and identity of Giant-Man, and at the end of the issue, the Hulk left once he realized how much the others feared his unstable personality.\n[…]\nA Black Ops team called the Avengers debuted sometime after the Ultimatum storyline. This version was a project headed by Nick Fury and Gregory Stark to bring Captain America back. Its known members consisted of War Machine, Hawkeye, Black Widow, Spider, Tyrone Cash, Red Wasp, and Nerd Hulk (an intelligent clone of Hulk who lacks Hulk's rage). Additional members included Punisher and Blade.\n[…]\nThe Avengers: Earth's Mightiest Heroes was based on the early adventures of the team, but also used many elements from other runs. The TV show ran for two seasons, from 2010 to 2012, and started presenting the original Avengers line-up founded by Iron Man, Thor, Ant-Man, Wasp and the Hulk, who temporarily leaves the group after battling the Enchantress and Executioner. Captain America later joins the team, replacing Hulk during his absence."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/X-Men",
        "situacao": "ok",
        "texto": "X-Men é uma equipe de super-heróis de histórias em quadrinhos estadunidenses publicadas pela Marvel Comics. Criados por Stan Lee e Jack Kirby, a primeira aparição da equipe foi em The X-Men #1 (setembro de 1963). Embora inicialmente cancelada em 1970 devido às baixas vendas, após seu renascimento em 1975 e a subsequente direção do escritor Chris Claremont, tornou-se uma das franquias mais reconhec\n[…]\nSuas histórias frequentemente envolvem Magneto, um poderoso mutante com controle sobre campos magnéticos, retratado como um velho amigo e antagonista de Xavier, atuando como adversário ou aliado. Um enorme elenco de personagens se juntou aos X-Men em diversas épocas. Os X-Men originais, apresentados em 1963, são Ciclope, Jean Grey, Fera, Anjo e Homem de Gelo. Entre os X-Men mais conhecidos que se juntaram à equipe em 1975 estão Colossus, Noturno, Tempestade e Wolverine.\n[…]\nEm 1963, com o sucesso do Quarteto Fantástico, o co-criador Stan Lee quis criar outro grupo de super-heróis. Ao contrário de suas criações anteriores, como o Homem-Aranha, que adquiriam seus poderes por meios científicos, Lee decidiu que esse novo grupo de heróis seria composto por \"mutantes\", nascidos com poderes, pois estava cansado de criar origens separadas para cada super-herói.\n[…]\nNo Universo Marvel, acredita-se amplamente que os X-Men receberam esse nome em homenagem ao Professor X. A explicação original para o nome, dada por Xavier em X-Men #1 (1963), é que os mutantes \"possuem um poder extra... um que os humanos comuns não têm!! É por isso que chamo meus alunos de... X-Men, de EX-tra power!\".\n[…]\nRecentemente voltou a ser apresentada pela Fox, por vários meses após o lançamento do primeiro filme.\n[…]\nNo primeiro, os X-men encontraram a U.S.S. Enterprise capitaneada por James T. Kirk, como na série de Jornada nas Estrelas original.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Ed Mort",
      "descricao": "Detetive particular azarado e falido, personagem de Luis Fernando Verissimo levado aos quadrinhos com desenhos de Miguel Paiva"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escritor gaúcho criou Ed Mort, o detetive particular falido que ganhou quadrinhos desenhados por Miguel Paiva?",
    "resposta": "Luis Fernando Verissimo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ed_Mort",
      "https://pt.wikipedia.org/wiki/Luis_Fernando_Verissimo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ed_Mort",
        "situacao": "ok",
        "texto": "Ed Mort é um personagem criado por Luis Fernando Verissimo em 1979 como paródia das histórias norte-americanas de detetives, principalmente as de Dashiell Hammett e Raymond Chandler. É um detetive particular trapalhão e sempre sem dinheiro, que se mete em todo o tipo de encrencas. Ele divide seu espaço - um escritório em Copacabana, que ele chama apenas de \"escri\" porque é muito pequeno - com cent\n[…]\nSuas dezessete histórias estão compiladas nos livros Ed Mort e Outras Histórias (1979) e Sexo na Cabeça (1980), publicados pela editora L&PM, e em Ed Mort: Todas as Histórias (2011), da Editora Objetiva. O personagem também foi adaptado para os quadrinhos em tiras diárias desenhadas por Miguel Paiva, peça de teatro, especial de TV e para o cinema.\n[…]\nEd Mort foi publicado em tiras de jornal nos anos 1980, com texto de Verissimo e desenhos de Miguel Paiva (criador da Radical Chic e do Gatão de Meia Idade). As tiras eram seriadas e cada história completa foi lançada em compilações pela L&PM:\n[…]\nNa história, o detetive particular — que mora em São Paulo, ao invés do Rio de Janeiro — é contratado por uma mulher misteriosa para descobrir o paradeiro do seu marido, Silva, especialista em disfarces e executivo das indústrias Delbono.\n[…]\nEm 1993, houve um especial de fim de ano da Rede Globo com Luis Fernando Guimarães no papel: Ed Mort - Nunca Houve uma Mulher como Gilda. O personagem voltou a aparecer, mais uma vez interpretado por Luís Fernando Guimarães, no Programa de Auditório, em 1994. E houve também um curta metragem produzido pelo Centro de Produção de Televisão e Bídeo: o CPTV.\n[…]\nEm 2011, o canal Multishow lançou nova série do personagem, com Fernando Caruso interpretando Ed Mort.\n[…]\nEm 1993 estreou no Rio uma adaptação de Procurando o Silva para teatro, com Nizo Neto como Ed e mais Julio Levy, Julia Miranda, Roberto Marconi, Claudia Puget e elenco. Adaptação e direção de Fernando Lyra Reis."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Luis_Fernando_Verissimo",
        "situacao": "ok",
        "texto": "Luís Fernando Veríssimo (Porto Alegre, 26 de setembro de 1936 – Porto Alegre, 30 de agosto de 2025) foi um escritor, humorista, cartunista, tradutor, roteirista, dramaturgo e romancista brasileiro. O artista também foi publicitário e revisor de jornal. Veríssimo exerceu ainda a ocupação de músico, tendo tocado saxofone em alguns conjuntos. Com mais de 80 títulos publicados, foi um dos mais popular\n[…]\nNascido em Porto Alegre, Luís Fernando Veríssimo viveu parte de sua infância e sua adolescência nos Estados Unidos, com a família, em função de compromissos profissionais assumidos por seu pai que era professor da Universidade da Califórnia em Berkeley (1943–1945) e diretor cultural da União Pan-americana em Washington, D.C. (1953–1956). Como consequência disso, cursou parte do ensino primário em San Francisco e Los Angeles, e concluiu o ensino secundário na Roosevelt High School, em Washington.\n[…]\nEm 1995, intelectuais brasileiros convidados pelo caderno \"Ideias\" do Jornal do Brasil elegeram Luís Fernando Veríssimo o Homem de Ideias do ano.\n[…]\nEm 21 de novembro de 2012, Luís Fernando foi internado em estado grave na UTI do Hospital Moinhos de Vento, em Porto Alegre, devido a um quadro grave de gripe. Ele teve alta no dia 14 de dezembro.\n[…]\nEm 2014 foi homenageado pela escola de samba de Porto Alegre Imperadores do Samba com o enredo A Imperadores do Samba faz a justa homenagem aos personagens de Luís Fernando Veríssimo.\n[…]\nLuís Fernando Veríssimo morreu em 30 de agosto de 2025, aos 88 anos, em Porto Alegre, Rio Grande do Sul. Ele estava internado havia cerca de três semanas na UTI do Hospital Moinhos de Vento com pneumonia. O escritor sofria com a doença de Parkinson e problemas cardíacos — em 2016 recebeu um marca-passo — e, em 2021, sofreu um acidente vascular cerebral (AVC) que lhe deixou sequelas motoras e de comunicação.\n[…]\nEd Mort\n[…]\nPágina de Luís Fernando Veríssimo no Extra Classe"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Um Contrato com Deus",
      "descricao": "Livro em quadrinhos de 1978 sobre a vida num cortiço do Bronx, marco na popularização do termo graphic novel"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que quadrinista americano ajudou a popularizar o termo graphic novel com o livro Um Contrato com Deus, de 1978?",
    "resposta": "Will Eisner",
    "fonte": [
      "https://en.wikipedia.org/wiki/A_Contract_with_God"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/A_Contract_with_God",
        "situacao": "ok",
        "texto": "A Contract with God and Other Tenement Stories, often referred to simply as A Contract with God, is a graphic novel written and illustrated by American cartoonist Will Eisner and published in 1978. The book's short story cycle revolves around poverty-stricken Jewish characters who live in a tenement in New York City. Eisner produced two sequels set in the same tenement: A Life Force in 1988, and D\n[…]\nWith the critical acceptance of underground comix in the 1970s, Eisner saw a potential market for his ideas. In 1978, he produced his first book-length, adult-oriented work, A Contract with God. He marketed it as a \"graphic novel\"—a term which had been in use since the 1960s, but was little known until Eisner popularized it with Contract.\n[…]\nThe trade paperback carried the term \"graphic novel\", though it is a collection of stories rather than a novel. As Baronet was not financially sound, Eisner loaned it money to ensure the book was published.\n[…]\nSales were initially poor, but demand increased over the years. Kitchen Sink Press reissued the book in 1985, as did DC Comics in 2001 as part of its Will Eisner Library; and W. W. Norton collected it in 2005 as The Contract with God Trilogy in a single volume with its sequels, A Life Force (1988) and Dropsie Avenue (1995). The Norton edition, and subsequent stand-alone editions of Contract, included extra final pages to the stories.\n[…]\nDark Horse Books published Will Eisner's A Contract with God Curator's Collection in 2018. This two-volume edition reprints the entire graphic novel at 1:1 size from the original pencil art in one volume and from the original ink art in the second volume. It was nominated for two Eisner Awards in 2019, with editor/designer John Lind winning one award for \"Best Presentation\".\n[…]\n2001 DC Comics, ISBN 978-1-56389-674-3 (Will Eisner Library)\n[…]\n2005 W. W. Norton, ISBN 978-0-393-06105-5 (The Contract with God Trilogy)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Um_Contrato_com_Deus",
        "situacao": "ok",
        "texto": "Um Contrato com Deus (A Contract with God) é uma graphic novel de autoria de Will Eisner (1917-2005). Foi publicada originalmente em 1978 pela Baronet em formato capa-dura e papel especial, limitado à 1,500 cópias. A versão atual tem 196 páginas. Embora a edição original seja creditada como a primeira obra a descrever-se como uma graphic novel, estudiosos descobriram que esse não é o caso.\n[…]\nUm Contrato com Deus consiste de quatro contos, todos situados em um cortiço no Bronx nos anos 30. Eisner utiliza seu talento de ilustrador para relatar as narrativas separadas, ligadas pelo tema comum da experiência imigratória .\n[…]\nEm sua introdução à obra, Eisner citou a influência dos livros de Lynd Ward, que produzia romances completos em xilogravura. As histórias relatadas são também auto-biográficas, com Eisner inspirado em suas lembranças de infância e nas de seus contemporâneos.\n[…]\nUm Contrato com Deus tem sido com frequência citada como a primeira graphic novel, no entanto, o cartunista Richard Kyle tinha usado o termo em 1964, em um ensaio publicado no fanzine Capa-Alpha, alem de ter aparecido na capa da The First Kingdom (1974) de Jack Katz, com quem Eisner se correspondia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.44 — 2026-10-02**
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
