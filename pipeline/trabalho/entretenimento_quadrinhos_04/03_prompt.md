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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6). Uma pergunta `aberta` cuja resposta é um ano ou uma data deve ser reescrita como `multipla`, com 3 anos ou datas próximos e críveis (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Albert Uderzo",
      "descricao": "Desenhista francês, cocriador de Asterix com René Goscinny"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Albert Uderzo, o desenhista de Asterix, tinha uma curiosidade de nascença nas mãos. Com quantos dedos em cada mão ele nasceu?",
    "resposta": "Seis",
    "distratores": [
      "Quatro",
      "Sete",
      "Três"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Albert_Uderzo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Albert_Uderzo",
        "situacao": "ok",
        "texto": "Alberto Aleandro Uderzo (Italian: [alˈbɛrto aleˈandro uˈdɛrtso]; 25 April 1927 – 24 March 2020), better known as Albert Uderzo (French: [albɛʁ ydɛʁzo]), was a French comic book artist and scriptwriter. He is best known as the co-creator and illustrator of the Astérix series in collaboration with René Goscinny. He also drew other comics such as Oumpah-pah, again with Goscinny.\n[…]\nThereafter Uderzo continued to write and illustrate the books on his own, published by his own publishing house \"Albert René\", though at a significantly slower pace (averaging one edition every three to five years compared to two editions a year when working with Goscinny).\n[…]\nUderzo had previously stated in interviews that Asterix would end with his death; however, the terms of the sale to Hachette allowed the company to continue producing Asterix titles indefinitely with or without Uderzo's participation. Uderzo in 2013 sued his daughter and son-in-law for \"psychological violence\". Sylvie responded with a lawsuit claiming persons unnamed had abused her father's \"frailty\". Her case was thrown out of court in 2014 and the two reached an amicable settlement.\n[…]\nUpon Uderzo's retirement in 2011, Asterix was taken over by Jean-Yves Ferri (script) and Didier Conrad (art).\n[…]\nSylvie owned 40% of Éditions Albert René before selling her parts to Hachette. The publishing group now owns 100%, after the remaining 60%, previously owned by Uderzo and by Goscinny's daughter, were also sold to Hachette Livre.\n[…]\nUderzo's brother, Marcel, was also a cartoonist. Marcel Uderzo worked with his brother Albert for the drawing and coloring of about twelve Asterix albums.\n[…]\nMedia related to Albert Uderzo at Wikimedia Commons\n[…]\nAstérix official site\n[…]\n\"Albert Uderzo\". Lambiek Comiclopedia.\n[…]\n\"Albert Uderzo\". Asterix International. Archived from the original on 8 December 2004. Pre-1977 biography\n[…]\nAlbert Uderzo at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Albert_Uderzo",
        "situacao": "ok",
        "texto": "Albert Uderzo (Fismes, 25 de abril de 1927 – Neuilly-sur-Seine, 24 de março de 2020) foi um desenhista de história em quadrinhos e cineasta francês. Ele é mais conhecido por ter co-criado os personagens Asterix e Humpá-Pá.\n[…]\nUderzo nasceu em Fismes, Marne, filho dos imigrantes italianos Silvio (de origem vêneta) e Iria Crestini (de origem toscana).\n[…]\nAnos mais tarde, ao optar-se por uma localização adequada para a aldeia gaulesa central da série Asterix, René Goscinny deixou essa decisão a Uderzo, que prontamente optou pela Bretanha.\n[…]\nUderzo iniciou a sua carreira de artista em Paris depois da guerra, em 1945, com Flamgerge ou Clopinard, um pequeno idoso perneta que venceu todas as contrariedades.\n[…]\nEm 1959, Goscinny tornou-se um editor e Uderzo um diretor artístico da revista de banda desenhada para crianças Pilote criada em 29 de outubro. A primeira edição da revista publicou pela primeira vez a série Asterix, a qual tornou-se um êxito na França. Em 1961, após dois anos a serem publicadas na revista Pilote, as histórias da exitosa nova série foram publicadas individualmente em livro — o primeiro, chamando-se Asterix, o Gaulês.\n[…]\nMesmo depois da morte prematura de Goscinny em 1977, Uderzo seguiu a ilustrar os livros da série (a uma média de um álbum a cada três a cinco anos, comparados aos dois livros, por ano, em vida de Goscinny). A autoria dos livros ainda indica Goscinny e Uderzo.\n[…]\nParalelamente, Uderzo veio a trabalhar também com Jean-Michel Charlier na série Michel Tanguy mais tarde chamada As Aventuras de Tanguy e Laverdure.\n[…]\nColaborou também na autoria de Uderzo na revista de banda desenhada Foguetão (1961), dirigida por Adolfo Simões Müller.\n[…]\n«Albert Uderzo no Lambiek Comiclopedia» (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "René Goscinny",
      "descricao": "Roteirista francês de quadrinhos, cocriador de Asterix e roteirista de Lucky Luke"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "René Goscinny escreveu Asterix desde a estreia até sua morte, em 1977. Quantos álbuns do gaulês ele roteirizou?",
    "resposta": "Vinte e quatro",
    "distratores": [
      "Doze",
      "Dezoito",
      "Trinta e dois"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ren%C3%A9_Goscinny"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ren%C3%A9_Goscinny",
        "situacao": "ok",
        "texto": "René Goscinny (French: [ʁəne ɡɔsini]; Polish: [ɡɔɕˈt͡ɕin.nɘ̟] ; 14 August 1926 – 5 November 1977) was a French comic editor and writer, who created the Asterix comic book series with illustrator Albert Uderzo. Born in France to a Jewish family from Poland, he spent his childhood in Argentina where he attended French schools and later lived in the United States for a short period of time. There he \n[…]\nSince 1996, the René Goscinny Award is presented at the yearly Angoulême International Comics Festival in France as an encouragement for young comic writers.\n[…]\nRené Goscinny called Henri Gruel to constitute the technical and artistic teams of the Idéfix studios. The latter directed several animated short films and was responsible for the sound effects of Asterix the Gaul and Asterix and Cleopatra, as well as the two productions by Pierre Tchernia scripted by Goscinny, Le Viager and Les Gaspards.\n[…]\nTalent was lacking and, at Goscinny's request, Henri Gruel sent his friend Serge Caillet, production director on live-action films, to the Paris Chamber of Commerce and Industry to demand the opening of an animated cinema section to supply the studios with young artists, who thus offer employment to students as soon as they leave school. Eventually, they managed to produce their first feature film, The Twelve Tasks of Asterix, with Halas and Batchelor and Dargaud.\n[…]\nHowever, in 1977, during the production of their second (and final) production, Goscinny died of a sudden heart attack. So, after the release of their second feature, The Ballad of the Daltons, a Lucky Luke feature, the studio ceased operations and closed shop permanently.\n[…]\nThe Twelve Tasks of Asterix (1976)\n[…]\nGoscinny official site (in French)\n[…]\nAstérix official site\n[…]\nGoscinny biography on Asterix International!\n[…]\nGoscinny biography on Lambiek Comiclopedia\n[…]\nRené Goscinny at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ren%C3%A9_Goscinny",
        "situacao": "ok",
        "texto": "René Goscinny (Paris, 14 de agosto de 1926 — Paris, 5 de novembro de 1977) foi um escritor de história em quadrinhos e cineasta francês. Ele é mais conhecido por ser co-criador de personagens como Asterix, Lucky Luke, Iznogoud, Humpá-Pá e O Pequeno Nicolau.\n[…]\nAinda nesse ano, lançaram a revista Pilote onde começaram a mostrar as obras de vários artistas novos e talentosos. Goscinny também criou o livro para crianças Le Petit Nicolas, com Jean-Jacques Sempé e, em 1956, escreveu editoriais e histórias para a Pilote bem como argumentos para filmes.\n[…]\nEm 1962, trabalhou no Le Grand Vizir Iznogoud com o jovem artista Jean Tabary, mas foi Astérix, criado para a primeira edição da \"Pilote\", que o levou para a ribalta, passando, a partir de 1968, a dedicar-se quase exclusivamente a \"Asterix\".\n[…]\nEm 1974, juntamente com Uderzo fundou os Estúdios Idefix para fazer versões animadas de Astérix, sendo a sua primeira produção \"Os doze trabalhos de Astérix\", tendo obtido um enorme sucesso. Posteriormente, produziram uma versão cinematográfica de \"Lucky Luke\".\n[…]\nCom Uderzo, Goscinny também recebeu vários prémios e foi considerado um herói nacional em França. Infelizmente, o trabalho duro e o esforço tinham feito estragos, vindo a morrer de ataque cardíaco a 5 de novembro de 1977, aos 51 anos de idade.\n[…]\na. ↑ Como parte de uma equipe de roteiristas criando piadas.\n[…]\nb. ↑ As séries Lucky Luke, Modeste et Pompon, Asterix e Iznogoud foram continuadas por outros escritores após a morte de Goscinny.\n[…]\nGoscinny official site (em francês)\n[…]\nAstérix official site\n[…]\nGoscinny biography - Asterix International!\n[…]\nGoscinny biography - Lambiek Comiclopedia\n[…]\nRené Goscinny no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Watchmen",
      "descricao": "Série em quadrinhos de Alan Moore e Dave Gibbons, publicada pela DC entre 1986 e 1987"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Antes de ser reunida em livro, a série Watchmen, de Alan Moore e Dave Gibbons, saiu em quantas edições mensais?",
    "resposta": "Doze",
    "distratores": [
      "Seis",
      "Oito",
      "Vinte e quatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Watchmen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Watchmen",
        "situacao": "ok",
        "texto": "Watchmen is a comic book limited series created by the British creative team of writer Alan Moore, artist Dave Gibbons, and colorist John Higgins. It was published monthly by DC Comics in 1986 and 1987 before being collected in a single-volume edition in 1987. Watchmen originated from a story proposal Moore submitted to DC featuring superhero characters that the company had acquired from Charlton \n[…]\nA single preview page for Watchmen, created by writer Alan Moore and artist Dave Gibbons, first appeared in the 1985 issue of DC Spotlight, the 50th anniversary special. The title was later published as a 12-issue maxiseries from DC Comics, cover-dated September 1986 to October 1987.\n[…]\nCertainly, I don't want it back under those kinds of terms.\" DC Comics co-publishers Dan DiDio and Jim Lee responded: \"DC Comics would only revisit these iconic characters if the creative vision of any proposed new stories matched the quality set by Alan Moore and Dave Gibbons nearly 25 years ago, and our first discussion on any of this would naturally be with the creators themselves.\" Following months of rumors about a potential Watchmen follow-up project, in February 2012 DC announced it was publishing seven prequel series under the \"Before Watchmen\" banner.\n[…]\nIn Art of the Comic Book: An Aesthetic History, Robert Harvey wrote that, with Watchmen, Moore and Gibbons \"had demonstrated as never before the capacity of the [comic book] medium to tell a sophisticated story that could be engineered only in comics\".\n[…]\nIn December 2017, DC Entertainment published Watchmen: Annotated, a fully annotated black-and-white edition of the graphic novel, edited, with an introduction and notes by Leslie S. Klinger (who previously annotated Neil Gaiman's The Sandman for DC). The edition contains extensive materials from Alan Moore's original scripts and was written with the full collaboration of Dave Gibbons."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Watchmen",
        "situacao": "ok",
        "texto": "Watchmen é uma série limitada de história em quadrinhos(pt-BR) ou banda desenhada(pt-PT?) escrita por Alan Moore e ilustrada por Dave Gibbons, publicada originalmente em doze edições mensais pela editora estadunidense DC Comics entre 1986 e 1987. A série foi reimpressa mais tarde em brochura (ou trade paperback).\n[…]\nUma adaptação para o cinema foi lançada em 6 de março de 2009. Em 2012, a DC Comics publicou Before Watchmen, uma série de quadrinhos prequel para a série original, sem o envolvimento de Moore e Gibbons. Em 2017, foi anunciada a minissérie Doomsday Clock, sequência direta de Watchmen. Em 2018, a emissora HBO oficializou a produção de uma série baseada na HQ com estreia para 2019, porém anunciou que a história apresentada será diferente dos quadrinhos, apesar de estar situada no mesmo universo.\n[…]\nO desenhista Dave Gibbons, que colaborara com Moore em projetos anteriores, ficou sabendo que ele estava trabalhando em uma nova série. Ele disse que queria participar, então Moore o mandou um esboço geral da história. Após considerações de Moore e Giordano, Gibbons foi aceito, trazendo consigo o colorista John Higgins. Len Wein entrou para a equipe como editor, enquanto Giordano permaneceu como supervisor.\n[…]\nOriginalmente, Moore e Gibbons tinham roteiro o suficiente para apenas seis edições, então compensaram \"interpolando os assuntos principais com temas que proporcionariam uma espécie de retrato biográfico dos personagens principais.\" Durante o processo, Gibbons teve grande autonomia para desenvolver o estilo visual de Watchmen, inserindo detalhes que Moore admitiu só perceber mais tarde, pois Watchmen foi feito para ser lido e compreendido totalmente somente após diversas leituras.\n[…]\n«Entrevista com Alan Moore» (em inglês)\n[…]\n«Matéria 30 anos de Watchmen em Omelete» 🔗",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Vingadores",
      "descricao": "Equipe de super-heróis da Marvel criada por Stan Lee e Jack Kirby em 1963"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na primeira revista dos Vingadores, de 1963, quantos heróis formavam a equipe original?",
    "resposta": "Cinco",
    "distratores": [
      "Quatro",
      "Seis",
      "Sete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Avengers_(comics)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Avengers_(comics)",
        "situacao": "ok",
        "texto": "The Avengers are a superhero team appearing in American comic books published by Marvel Comics, created by writer-editor Stan Lee and artist/co-plotter Jack Kirby. The team made its debut in The Avengers #1 (cover-dated September 1963). Labeled \"Earth's Mightiest Heroes\", the original Avengers consisted of Iron Man, Ant-Man, Hulk, Thor, and Wasp. Captain America was discovered trapped in ice in is\n[…]\nThe team debuted in The Avengers #1 (September 1963). Much like the Justice League of DC Comics, the original line-up of the Avengers consisted of heroes who each had existing series of their own. All of the characters were created by Stan Lee and Jack Kirby. This initial series, published bi-monthly through issue #6 (July 1964) and monthly thereafter, ran through issue #402 (Sept. 1996).\n[…]\nIn 1978, Roy Thomas and Don Glut retroactively created a team of 1950s comic book characters also called the Avengers, uniting the 1950s characters Marvel Boy, Venus, the 3-D Man, Gorilla-Man, M-11, Jimmy Woo, Namora, and Jann of the Jungle. Each had been published in the 1950s by Marvel's predecessor brand, Atlas Comics, but did not meet in their original publications.\n[…]\nThe Avengers: Earth's Mightiest Heroes was based on the early adventures of the team, but also used many elements from other runs. The TV show ran for two seasons, from 2010 to 2012, and started presenting the original Avengers line-up founded by Iron Man, Thor, Ant-Man, Wasp and the Hulk, who temporarily leaves the group after battling the Enchantress and Executioner. Captain America later joins the team, replacing Hulk during his absence.\n[…]\nMDP:Avengers—Marvel Database Project (wiki)\n[…]\nAvengers Assemble!—Archives and Database\n[…]\nThe Avengers at Don Markstein's Toonopedia. Archived[link removed] from the original on April 7, 2012.\n[…]\nAvengers on Marvel Database, a Marvel Comics wiki\n[…]\nAvengers at marvelcinematicuniverse.fandom.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vingadores",
        "situacao": "ok",
        "texto": "Vingadores ou Os Vingadores (The Avengers no original em inglês) são um grupo de super-heróis de história em quadrinhos publicados nos Estados Unidos pela editora Marvel Comics. O grupo também aparece em adaptações da Marvel para cinema, desenho animado e jogos eletrônicos.\n[…]\nA primeira aparição dos Vingadores nos quadrinhos foi em sua própria revista, intitulada The Avengers, em Setembro de 1963 (no mesmo mês de estreia de X-Men). A equipe foi criada por Stan Lee, Jack Kirby e Dick Ayers, como uma resposta à Liga da Justiça, cuja revista reunia em uma história os principais heróis da DC Comics. A Liga da Justiça já inspirara uma primeira resposta da Marvel Comics, o Quarteto Fantástico, que todavia era um grupo de heróis novos, assim como o subsequente X-Men.\n[…]\nOs Vingadores, reunidos dois anos depois do Quarteto, foram os primeiros da Marvel fiéis ao conceito da equipe de super-heróis já estabelecidos.\n[…]\nA revista foi relançada três vezes nos últimos dez anos. A primeira vez, em 1996, era parte da saga Heróis Renascem. A segunda, um ano depois, retornou a equipe à sua continuidade original; e a terceira vez, em 2005, quando surgiram os New Avengers ou os Novos Vingadores, após o fim da antiga equipe, e também como uma estratégia de marketing.\n[…]\nA escalação da equipe mudou quase que instantaneamente: o Homem-Formiga se tornou o Gigante, e o Hulk, ao perceber o quanto os outros temiam sua personalidade instável, deixou-a ao final da segunda edição. A tentativa de conter o Hulk levou os Vingadores a combater Namor, O Príncipe Submarino, e isso por sua vez, levou a equipe ao primeiro marco em sua história - o retorno do Capitão América, em The Avengers #4 (Março de 1964).\n[…]\nLiga da Justiça e Vingadores\n[…]\n«Vingadores no site oficial da Marvel Comics» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Os Smurfs",
      "descricao": "Criaturinhas azuis criadas pelo quadrinista belga Peyo em 1958"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Nas histórias dos Smurfs, o sábio Papai Smurf, de barba branca e roupa vermelha, tem quantos anos de idade?",
    "resposta": "Quinhentos e quarenta e dois",
    "distratores": [
      "Cem",
      "Trezentos e trinta",
      "Mil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Papa_Smurf"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Papa_Smurf",
        "situacao": "ok",
        "texto": "Papa Smurf (French: Grand Schtroumpf) is a character from the comic strip The Smurfs. Most Smurfs are said to be about 100 years old. However, at the advanced age of 546 (553 in the 1980s series episode \"The Littlest Giant\"), Papa is the oldest Smurf and the leader of all Smurfs. Despite his age, he is still quite energetic.\n[…]\nIn the original French version, Papa Smurf's name is \"Le Grand Schtroumpf” which means \"the Great Smurf\" or \"the Big Smurf.\"\n[…]\nIn another instance, he creates an entire village full of evil doubles of the original Smurfs (\"The Smurf Menace\" issue).\n[…]\nThe Smurfs were then referred to as \"Papa Greedy\", \"Papa Clumsy\" or \"Mama Smurfette,\" depending on whose turn it was to be the village leader. While Papa did see the importance of each Smurf gaining leadership skills, his true purpose was to guide the Smurfs and help fix their problems and mistakes.\n[…]\nWhen he is not actively acting as the leader or helping other Smurfs, Papa Smurf indulges in his favorite hobby: magical chemistry, or alchemy. He often makes elixirs to help Smurfs who get into trouble. The Belgian comic portrays Papa Smurf constantly preparing magical drinks from white hellebore. The drawings that portray the effects of these alchemical brews are shown as both turbulent and amusing. Aside from his house, he also has a laboratory containing several chemical devices.\n[…]\nPapa Smurf often tries to create potions to help the Smurfs but sometimes fails; such as the time he accidentally created a substance that turned any living thing into a huge monster (see the album: The Smurfs and the Cracoucass and the cartoon episode \"The Smurfs and the Howlibird\"). He occasionally leaves the village in order to obtain the necessary ingredients for his potions.\n[…]\nFrench: Le Grand Schtroumpf\n[…]\nPortuguese: Papai / Grande Smurf\n[…]\nThe Smurfs official site"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Wolverine",
      "descricao": "Mutante canadense dos X-Men, com garras retráteis de adamantium, criado pela Marvel em 1974"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quando o mutante Wolverine põe suas garras de adamantium para fora, quantas lâminas saem de cada mão?",
    "resposta": "Três",
    "distratores": [
      "Duas",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wolverine_(character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wolverine_(character)",
        "situacao": "ok",
        "texto": "Wolverine is a superhero appearing in American comic books published by Marvel Comics. The character first appeared in the comic book The Incredible Hulk #180 (1974) and is best known as a member of the superhero team, the X-Men. Wolverine is the alias of James \"Logan\" Howlett, a mutant born in Canada in the late 19th century. He possesses a range of superpowers including highly advanced self-heal\n[…]\nWolverine gets covered in adamantium after confronting him, and dies from suffocation. Laura begins wearing a variation of Wolverine's costume and adopts his codename. Wolverine is eventually resurrected by Persephone, a mutant who can raise the dead. Wolverine is killed again, along with Nightcrawler and others.\n[…]\nWolverine was originally introduced as an antagonist of the Hulk. They have fought multiple times, but also occasionally team up against other foes. Wolverine's archenemy is Sabretooth, who shares the same basic powers and abilities with him. Sabretooth is somewhat older than Logan, and was also a participant in the Weapon X program. Wolverine has also frequently battled Lady Deathstrike, a samurai cyborg whose father invented the process of bonding adamantium to bone.\n[…]\nIn the Age of Apocalypse, Logan has the name Weapon X rather than Wolverine. In this reality, Logan still has his adamantium, but is missing a hand; he and Jean Grey are lovers. In the alternate reality of Ultimate Marvel, Wolverine is initially an agent of Magneto, and is significantly more aggressive and amoral. In X-Treme X-Men, Wolverine is the British Governor General of Canada; he and Hercules are lovers.\n[…]\nIn the future of Old Man Logan, Wolverine was tricked into killing the other X-Men and subsequently renounced violence. Old Man Logan, created by Millar in 2008, later featured in a miniseries written by Bendis that began in July 2015.\n[…]\nWolverine (Logan/James Howlett) at Marvel.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wolverine",
        "situacao": "ok",
        "texto": "Wolverine (James \"Logan\" Howlett) é um personagem fictício que aparece nas histórias em quadrinhos estadunidenses publicadas pela Marvel Comics. Criado pelo escritor Len Wein e pelo diretor de arte da Marvel, John Romita Sr., com sua primeira aparição publicada escrita por Wein e desenhada pelo artista Herb Trimpe, o personagem surgiu pela primeira vez em The Incredible Hulk #180 (outubro de 1974)\n[…]\nEnquanto eu admito que minha ideia original era que as garras de Wolverine saissem do fundo das luvas, não era intenção de faze-lo como um carcaju mutante. Eu escrevo quadrinhos sobre pessoas, sem envolver animais (me desculpo por qualquer historia que tenha escrito que envolva o Alto Evolucionario). O boato de carcaju mutante aconteceu depois que que eu já estava fora do projeto da revista.\n[…]\nCerto tempo antes de ser subjugado, Wolverine ataca Kitty Pryde, que faz as fases, então suas lâminas matam Estrela Polar. Wolverine é capturado por S.H.I.E.L.D. e submetido à reprogramação VR. A Hydra então atinge o S.H.I.E.L.D com todos os seus vilões passados por lavagem cerebral. Wolverine é desencadeado neles e consegue salvar Nick Fury de Elektra. Wolverine então segue Estrela Polar e Alvorada da Mao Branca com três sentinelas reprogramadas.\n[…]\nA mutação de Wolverine também consiste em adaptações animais de seu corpo, incluindo caninos pronunciados e afiados e três garras retráteis de 30 cm alojadas dentro de cada antebraço. Embora retratadas originalmente como implantes de metal criados pelo programa Arma X, as garras são reveladas posteriormente como uma parte natural de seu corpo. As garras não são feitas de queratina, pois as garras tendem a estar no reino animal, mas sim de osso extremamente denso.\n[…]\nRina Logan\n[…]\nWolverine será o protagonista de Marvel's Wolverine, da Insomniac Games, que compartilha o mesmo universo dos jogos do Homem-Aranha. Logan será interpretado por Liam McIntyre.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Lanterna Verde",
      "descricao": "Super-herói da DC Comics que usa um anel de poder; na versão clássica, o piloto Hal Jordan"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Nos quadrinhos da DC, a Tropa dos Lanternas Verdes divide o universo em setores, cada um com seu patrulheiro. Quantos são esses setores?",
    "resposta": "Três mil e seiscentos",
    "distratores": [
      "Cem",
      "Mil",
      "Dez mil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Green_Lantern_Corps"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Green_Lantern_Corps",
        "situacao": "ok",
        "texto": "The Green Lantern Corps is a fictional intergalactic law enforcement agency appearing in American comic books published by DC Comics. Co-created by writer John Broome and artist Gil Kane, the organization first appeared along with member Hal Jordan in Showcase #22 in 1959.\n[…]\nThe Universal Ring appears in Planet of the Apes/Green Lantern. One Universal ring was given Katerina Mar in secret.\n[…]\nThe Green Lantern Corps appear in series set in the DC Animated Universe:\n[…]\nWithin the Arrowverse, during the Crisis on Infinite Earths crossover event, footage from the Green Lantern film was used to establish the existence of the Green Lantern Corps within the universe of Earth-12.\n[…]\nThe Green Lantern Corps appear in the films set in the DC Extended Universe:\n[…]\nThe Green Lantern Corps are featured heavily in Mortal Kombat vs. DC Universe. Hal Jordan appears as a playable character and one of the game's major protagonists; the Guardians appear in the game's Oa based stage, and the rest of the Corps members are mentioned to be trying to contain the universe wide crisis taking place during Story Mode.\n[…]\nAdditionally, Sonya Blade's in-game ending depicts her becoming the Green Lantern of the Mortal Kombat universe after gaining the ring of a recently deceased Corps member.\n[…]\nIn Injustice: Gods Among Us, Kilowog makes a cameo appearance. The Corps also appear in Green Lantern's victory pose. At the end of the game, the main universe's Hal Jordan brings the parallel universe's version of himself, who had joined the Sinestro Corps during Year Two, and Sinestro to the remaining Guardians of the Universe at Oa for trial with a Green Lantern at the center of the court.\n[…]\nInterview with Keith Champagne about the Green Lantern \"Corpse\" Archived 2007-10-12 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tropa_dos_Lanternas_Verdes",
        "situacao": "ok",
        "texto": "A Tropa dos Lanternas Verdes (em inglês, Green Lantern Corps) é uma fictícia equipe de patrulheiros intergaláticos conhecido como Lanternas Verde publicadas pela editora americana DC Comics.\n[…]\nA Tropa dos Lanternas Verdes patrulha uma vasta região do espaço do Universo DC. Os Guardiões do Universo, uma raça super-inteligente e nobre, mas às vezes, fechada e arrogante, fundou e ainda administra a Tropa dos Lanternas Verdes do planeta Oa. Os Guardiões dividiram o Universo em 3600 setores, e escolheram um nativo de cada setor para servir como Lanterna Verde deste, no início da história da tropa.\n[…]\nOs Guardiões criaram a Tropa dos Lanternas Verdes há cerca de três bilhões de anos atrás, logo após o fracasso representado pela criação dos Caçadores Cósmicos, e a força sobreviveu a múltiplas rebeliões, assassinatos e colapsos dentro e fora dela.\n[…]\nNo caminho, Hal enfrentou dezenas de Lanternas Verdes, mas chegou com sucesso em Oa, onde enfrentou no último embate de todos seu arqui-inimigo e ex-Lanterna Verde, Sinestro e teve de matar um dos símbolos da tropa e treinador de inúmeros membros, incluindo o próprio Jordan, Kilowog.\n[…]\nTropa Sinestro (Amarelo) — Medo; quando foi pela primeira vez no universo de antimatéria de Qward, Sinestro adquiriu um anel amarelo abastecido ao combater um Lanterna Verde; após Sinestro ser revivido em Green Lantern: Rebirth, ele  passou um ano em Qward recrutando um exército de Lanternas Amarelos, usando aneis abastecidos pelo medo que seu usuário causa.\n[…]\nTropa dos Lanternas Azuis — Esperança; criada por Ganthet, um dos Guardiões do Universo, ao final da guerra dos Lanternas Verdes contra a Tropa Sinestro.\n[…]\nGreen Lantern: Emerald Knights",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Asterix",
      "descricao": "Guerreiro gaulês baixinho criado por René Goscinny e Albert Uderzo em 1959"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Nos álbuns de Asterix, a aldeia gaulesa vive cercada por acampamentos de soldados romanos. Quantos são esses acampamentos?",
    "resposta": "Quatro",
    "distratores": [
      "Dois",
      "Três",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Asterix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Asterix",
        "situacao": "ok",
        "texto": "Asterix (French: Astérix or Astérix le Gaulois [asteʁiks lə ɡolwa], \"Asterix the Gaul\"; also known as Asterix and Obelix in some adaptations or The Adventures of Asterix) is a French comic album series about a Gaulish village which, thanks to a magic potion that enhances strength, resists the forces of Julius Caesar's Roman Republic Army in the time after the Gallic Wars. Many adventures take the \n[…]\nAsterix: The Kingdom of Nubia, 2026.\n[…]\nIn 2019, France issued a commemorative €2 coin to celebrate the 60th anniversary of Asterix.\n[…]\nList of Asterix characters\n[…]\nEnglish translations of Asterix\n[…]\nList of Asterix games\n[…]\nList of Asterix volumes\n[…]\nGabilliet, Jean-Paul (28 March 2013). \"A Disappointing Crossing: The North American Reception of Asterix and Tintin\". In Daniel Stein; Shane Denson; Christina Meyer (eds.). Transnational Perspectives on Graphic Narratives: Comics at the Crossroads. A&C Black. ISBN 9781441185235. – This is Chapter #16, in Part III: Translations, Transformations, Migrations\n[…]\nTosina Fernández, Luis J. \"Creatividad paremiológica en las traducciones al castellano de Astérix\" Proverbium vol. 38, 2021, pp. 361–376.\n[…]\nTosina Fernández, Luis J. \"Paremiological Creativity and Visual Representation of Proverbs: An Analysis of the Use of Proverbs in the Adventures of Asterix the Gaul\". Proceedings of the Fourteenth Interdisciplinary Colloquium on Proverbs, 2 to 8 November 2020, at Tavira, Portugal, edited by Rui J.B. Soares and Outi Lauhakangas, Tavira: Tipografia Tavirense, 2021, pp. 256–277.\n[…]\nAsterix the Gaul[link removed] at Don Markstein's Toonopedia, from the original on 6 April 2012.\n[…]\nAsterix around the World – The many languages\n[…]\nAlea Jacta Est (Asterix for grown-ups) Each Asterix book is examined in detail\n[…]\nLes allusions culturelles dans Astérix – Cultural allusions (in French)\n[…]\nThe Asterix Annotations – album-by-album explanations of all the historical references and obscure in-jokes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Asterix",
        "situacao": "ok",
        "texto": "Asterix (no Brasil) ou Astérix (em Portugal e outros países lusófonos) (em francês:  Astérix), é uma série de histórias em quadrinhos criada na França por René Goscinny e  Albert Uderzo no ano de 1959, baseada no povo gaulês e em grande parte no tempo do seu grande chefe guerreiro Vercingetorix. Após o falecimento de Goscinny em 1977, Uderzo prosseguiu o trabalho.\n[…]\nEste é o prólogo de todas as edições dos livros de Asterix, o gaulês: \"Estamos no ano 50 antes de Cristo. Toda a Gália foi ocupada pelos romanos ... Toda? Não! Uma aldeia povoada por irredutíveis gauleses ainda resiste ao invasor. E a vida não é nada fácil para as guarnições de legionários romanos nos campos fortificados de Babaorum, Aquarium, Laudanum e Petibonum...\".\n[…]\nAsterix reside com seus amigos em uma pequena aldeia gaulesa situada em uma península na Armórica, ao norte da antiga Gália. Para resistir ao domínio romano, os aldeões contam com a ajuda de uma poção mágica que lhes dá uma força sobre-humana, preparada pelo druida Panoramix. O poder da poção é temporário. A exceção é Obelix, que, por acidente, caiu dentro de um caldeirão cheio da poção quando ainda era um bebê, e daí adquiriu permanentemente a superforça.\n[…]\nAsterix, o Gaulês (Astérix, le Gaulois) — 1967\n[…]\nHistória mescla os álbuns \"Asterix Legionário\" e \"Asterix Gladiador\"\n[…]\nAstérix, Obélix e Panoramix mantiveram os nomes por que já eram conhecidos em Portugal, mas grande parte da aldeia gaulesa mudou mesmo de nome, adaptando o \"jogo de palavras\" francês para o português.\n[…]\nAlém de manter Astérix, Obélix, Panoramix e Ideafix da tradução portuguesa, o chefe da aldeia virou Abracurcix, e Agecanonix, Veteranix. Os acampamentos romanos tem o mesmo nome do francês. Algumas das piadas ganharam versão regional — em Asterix e o Caldeirão, o ator Eleonoradus (piada com Eleonora Duse) virou Toniacarrerus (Tônia Carrero).\n[…]\nAstérix",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Superman",
      "descricao": "Super-herói da DC Comics vindo do planeta Krypton, criado por Jerry Siegel e Joe Shuster"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 1938, Jerry Siegel e Joe Shuster venderam à editora os direitos do Superman. Por quanto dinheiro?",
    "resposta": "Cento e trinta dólares",
    "distratores": [
      "Dez mil dólares",
      "Mil dólares",
      "Cinquenta mil dólares"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Superman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Superman",
        "situacao": "ok",
        "texto": "Superman is a superhero created by writer Jerry Siegel and artist Joe Shuster, first appearing in issue #1 of Action Comics, published in the United States on April 18, 1938. Superman has been regularly published in American comic books published by DC Comics since then, and has been adapted to other media including radio serials, novels, films, television shows, theater, and video games.\n[…]\nInitially, Jerry Siegel was allowed to write Superman more or less as he saw fit because nobody had anticipated the success and rapid expansion of the franchise. But soon Siegel and Shuster's work was put under careful oversight for fear of trouble with censors. Siegel was forced to tone down the violence and social crusading that characterized his early stories. Editor Whitney Ellsworth, hired in 1940, dictated that Superman not kill.\n[…]\nIn a contract dated March 1, 1938, Jerry Siegel and Joe Shuster gave away the copyright to Superman to their employer, DC Comics (then known as Detective Comics, Inc.) prior to Superman's first publication in April. Contrary to popular perception, the $130 that DC Comics paid them was for their first Superman story, not the copyright to the character — that, they gave away for free.\n[…]\nDC Comics rehired Jerry Siegel as a writer in 1959.\n[…]\nIn the original Siegel and Shuster stories, Superman's personality is rough and aggressive. He often uses excessive force and terror against criminals, on some occasions even killing them. This came to an end in late 1940 when new editor Whitney Ellsworth instituted a code of conduct for his characters to follow, banning Superman from ever killing. The character was softened and given a sense of humanitarianism.\n[…]\nThe Nazis also thought Superman was a Jew and in 1940 the Schutzstaffel (SS) newspaper Das Schwarze Korps denounced Superman and his creator Jerry Siegel.\n[…]\nMusic of Superman\n[…]\nSuperman on IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Superman",
        "situacao": "ok",
        "texto": "Superman ou Super-Homem é um super-herói de histórias em quadrinhos publicadas pela DC Comics. O personagem, entretanto, desde os anos 1930 já foi adaptado para diversos outros meios, como cinema, rádio, televisão, literatura e videogame. Superman foi criado pela dupla de autores de quadrinhos Joe Shuster e Jerry Siegel. Sua primeira aparição aconteceu no verão de 1938, na revista Action Comics #1\n[…]\nA propriedade sobre o personagem foi objeto de disputa, com Siegel e Shuster reclamando o retorno de sua propriedade legal. Os direitos autorais são novamente objeto de disputa, com a mudança das leis de direitos autorais permitindo à esposa e à filha de Siegel reclamarem uma parte dos direitos autorais, levando a uma disputa com a companhia Warner Bros. E é até hoje um dos três super-heróis mais populares do mundo, os outros são Batman (também da DC) e o Homem-Aranha (da Marvel Comics).\n[…]\nA cidade que é o lar e a base do Super-Homem, recebeu seu nome em homenagem a Metrópolis (de Fritz Lang, 1927) filme de ficção científica do qual Siegel e Shuster eram grandes fãs.\n[…]\nEm 1946, pouco antes do contrato de Siegel e Shuster com a DC Comics expirar, ambos processaram a editora para anular seu contrato e reter os direitos do personagem. O tribunal arguiu em favor da empresa, alegando que a DC havia comprado legalmente os direitos de Superman quando adquiriram sua primeira história em 1938. Porém os direitos de Superboy continuavam com Siegel, levando a DC a comprá-los em troca de um acordo escrito de que a editora detinha a propriedade legal de Superman.\n[…]\nSuperman apareceu no Brasil pela primeira vez em Dezembro de 1938, no suplemento chamado A Gazetinha #445, do jornal A Gazeta de propriedade do jornalista Cásper Líbero. Com os direitos adquiridos por Adolfo Aizen, as aventuras do Homem de Aço passam para a lendária revista O Lobinho.\n[…]\nImpacto cultural de Superman\n[…]\nSuperman no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Liga da Justiça",
      "descricao": "Equipe de super-heróis da DC Comics criada em 1960, com Superman, Batman e Mulher-Maravilha"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quando a Liga da Justiça estreou nos quadrinhos, em 1960, quantos heróis faziam parte da formação original?",
    "resposta": "Sete",
    "distratores": [
      "Cinco",
      "Seis",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Justice_League"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Justice_League",
        "situacao": "ok",
        "texto": "The Justice League, or Justice League of America (JLA), are a group of superheroes appearing in American comic books published by DC Comics. The team first appeared in The Brave and the Bold #28 (March 1960). Writer Gardner Fox conceived the team as a revival of the Justice Society of America, a similar team from DC Comics from the 1940s which had been pulled out of print due to a decline in sales\n[…]\nJustice League of America (vol. 1) was published from 1960 to 1987.\n[…]\nFrom the Justice League's inception in 1960 until 1984, the team's roster always included a number of A-list characters to draw in readers, such as Wonder Woman and Superman. But in Justice League of America Annual #2 (October 1984), the Justice League was revised to entirely comprise more obscure characters such as Vixen, Vibe, and the Martian Manhunter. The original A-list members would not be brought back into the cast until 1986.\n[…]\nThe Legion of Doom was created for the Challenge of the Superfriends animated TV series as a villainous counterpart to the Justice League. In that original incarnation, it consisted of established villains associated with each of the Justice League's members; e.g., Lex Luthor for Superman, Riddler for Batman, Sinestro for Green Lantern, Black Manta for Aquaman, Gorilla Grodd for the Flash, and Cheetah for Wonder Woman.\n[…]\nThe original Justice League of America series won two 1961 Alley Awards in the categories \"Best Comic Book\" and \"Best Adventure-Hero Group.\" In 1963, the series won \"Favorite Novel\" (\"Crisis on Earth-One/Crisis on Earth-Two\" in Justice League of America #21–22 by Gardner Fox and Mike Sekowsky) and \"Strip that Should Be Improved.\" There also an award specific to the series, \"Artist Preferred on Justice League of America,\" that was won by Murphy Anderson.\n[…]\nJustice League of America at Don Markstein's Toonopedia WebCitation Archive[link removed]\n[…]\nThe Justice League Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Liga_da_Justi%C3%A7a",
        "situacao": "ok",
        "texto": "A Liga da Justiça, também conhecida como Liga da Justiça da América (no original, Justice League of America) é uma fictícia equipe de super-heróis originada nas histórias em quadrinhos publicadas pela editora americana DC Comics.\n[…]\nDevido a necessidade de um novo e seguro quartel-general, em Justice League of America #78, de 1970, o grupo mudou-se para um satélite, que orbitava a Terra. Durante esse período, a formação do grupo limitou-se a sete membros, a saber: Arqueiro Verde, Eléktron, Gavião Negro, Canário Negro, Vingador Fantasma, Homem Elástico e Tornado Vermelho. Mais tarde esse limite foi estendido, permitindo assim que Mulher-Gavião, Zatanna e Nuclear entrassem para a equipe.\n[…]\nEm Fevereiro de 2016, a DC anunciou o evento \"Renascimento\" similar ao Novos 52. Em Março, eles anunciaram uma nova linha de quadrinhos, entre eles uma série da Liga da Justiça (\"Justice League\") escrita por Bryan Hitch e desenhada por Tony Daniel e Fernando Pasarin, que estreou em junho de 2016. A equipe era formada pelo Superman (versão pre-Flashpoint), Batman, Mulher-Maravilha, Flash (Barry Allen), Aquaman, Cyborg, e dois novos Lanternas Verdes, Jessica Cruz e Simon Baz.\n[…]\nDurante os eventos de Liga da Justiça vs. Esquadrão Suicida (\"Justice League vs.\n[…]\nA Liga da Justiça da América é uma organização não lucrativa incorporada aos Estados Unidos da América.\n[…]\nEm 2012, foi lançado Justice League: Doom que mostrava os heróis enfrentando a Legião do Mal, que era liderada por Vandal Savage. Ambas as formações tinham Superman, Batman, Mulher-Maravilha, Lanterna Verde, Flash e Caçador de Marte as mesmas da animação da Liga da Justiça, com aparições de Aquaman, Arqueiro Verde, Ciborgue e outros.\n[…]\nLista de personagens da Liga da Justiça",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Doutor Octopus",
      "descricao": "Otto Octavius, cientista vilão da Marvel e inimigo do Homem-Aranha, com braços mecânicos presos ao corpo"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Apesar do nome de polvo, quantos braços mecânicos o Doutor Octopus, inimigo do Homem-Aranha, tem presos ao corpo?",
    "resposta": "Quatro",
    "distratores": [
      "Seis",
      "Oito",
      "Dois"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Doctor_Octopus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Doctor_Octopus",
        "situacao": "ok",
        "texto": "Doctor Octopus (Dr. Otto Octavius), also known as Doc Ock for short, is a fictional character appearing in American comic books published by Marvel Comics. The character was created by Stan Lee and Steve Ditko and first appeared in The Amazing Spider-Man #3 (July 1963). He is a highly intelligent, myopic, and stocky mad scientist who sports four strong and durable appendages resembling an octopus'\n[…]\nCarolyn Trainor became the second Doctor Octopus following the death of Otto Octavius. When he returned from the dead, Carolyn rebranded herself as Lady Octopus.\n[…]\nIn Marvel 2099, an unidentified 2099 successor to Otto Octavius as Doctor Octopus is an Atlantean scientist who possesses octopus tentacles.\n[…]\nOtto Octavius / Doctor Octopus appears in Your Friendly Neighborhood Spider-Man, voiced by Hugh Dancy.\n[…]\nIn an early script for Cannon's aborted Spider-Man film, written by Ted Newsom and John Brancato, Otto Octavius was rewritten to become a teacher and mentor to a college-aged Peter Parker. The cyclotron accident which \"creates\" Spider-Man also deforms the scientist into Doctor Octopus and results in his mad pursuit of proof of the Fifth Force.\n[…]\nOtto Octavius / Doctor Octopus appears in the Sony film Spider-Man 2 (2004), portrayed by Alfred Molina. This version is a sympathetic, but misguided individual, and the husband and lab partner of Rosie Octavius (portrayed by Donna Murphy).\n[…]\nOtto Octavius as the Superior Spider-Man and a comic book-accurate Doctor Octopus make non-speaking cameo appearances in Spider-Man: Across the Spider-Verse as prisoners of Spider-Man 2099's Spider-Society. Additionally, Liv Octavius appears via archival footage while archival recordings of Alfred Molina are used for other versions of Octavius, who make minor appearances.\n[…]\nDoctor Octopus appears as a boss in Spider-Man (1995).\n[…]\nOtto Octavius as Doctor Octopus and the Superior Spider-Man appears in Marvel Snap."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Doutor_Octopus",
        "situacao": "ok",
        "texto": "Dr. Otto Gunther Octavius, mais conhecido como Doutor Octopus, é um personagem fictício dos quadrinhos publicados pela Marvel Comics. Criado pelo roteirista Stan Lee e pelo desenhista Steve Ditko, o personagem apareceu pela primeira vez em The Amazing Spider-Man nº 3 (julho de 1967). Ele é retratado como um cientista que utiliza quatro tentáculos mecânicos e se tornou um dos principais arqui-inimi\n[…]\nEntre os colegas, ele era apelidado pejorativamente de 'Doutor Octopus' — um trocadilho com seu nome e com o dispositivo de quatro braços mecânicos que utilizava. Otto estava ciente da zombaria, mas não se importava.\n[…]\nCom o Homem-Aranha preso em seus tentáculos, o doutor Octopus diz-lhe que ele não é um clone ou um holograma, mas o verdadeiro Otto Octavius.\n[…]\nCada um desses quatro braços são capazes de levantar três toneladas, desde que pelo menos um braço é utilizado para suportar seu corpo. O tempo de reação e agilidade dos seus apêndices mecânicos são melhorados muito além do alcance atingível da musculatura humana normal. Os braços permitem Octavius a avançar rapidamente em qualquer terreno e escalar superfícies verticais e tetos.\n[…]\nDoutor Octopus começou a usar uma armadura de corpo inteiro devido a uma doença incapacitante, com os braços normais ligado a ele e quatro tentáculos adicionais à armadura.\n[…]\nO experimento, financiado pela Oscorp — então presidida por Harry Osborn —, sai do controle e provoca uma explosão que danifica o chip neural responsável por permitir que Octavius controlasse seus quatro tentáculos mecânicos. A falha faz com que os tentáculos passem a influenciar sua mente, levando-o a adotar uma postura violenta para reconstruir a máquina e repetir o experimento, o que resulta em diversos confrontos com o Homem-Aranha.\n[…]\nLego Marvel Super Heroes e Lego Marvel Super Heroes 2 tem tanto Doutor Octopus como o Homem-Aranha Superior como personagens jogáveis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Thanos",
      "descricao": "Vilão titã roxo dos quadrinhos da Marvel"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Para dominar o universo, o titã Thanos reúne na Manopla do Infinito um conjunto de joias. Quantas são as Joias do Infinito?",
    "resposta": "Seis",
    "distratores": [
      "Quatro",
      "Cinco",
      "Sete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Infinity_Stones"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Infinity_Stones",
        "situacao": "ok",
        "texto": "The Infinity Stones are fictional items in the Marvel Cinematic Universe (MCU) media franchise, based on the Infinity Gems of the Marvel Comics. As expounded across several interwoven MCU multimedia titles, the six Infinity Stones are reputed to embody and control essential aspects of existence—Space, Mind, Reality, Power, Time, and Soul—thereby making them critical artifacts in the MCU.\n[…]\nIn Infinity War, it is revealed Thanos invaded Nidavellir and forced Eitri to create the Infinity Gauntlet by threatening to kill his people, though he did so anyway once it was completed, as well as removing Eitri's hands to prevent his making of anything else. After obtaining all six Infinity Stones, Thanos snaps his fingers in the Gauntlet and erases half of all life in the universe.\n[…]\nIn Endgame, the Gauntlet is revealed to be burnt and permanently bound to Thanos' swollen arm. After Thor kills Thanos, the charred damaged Gauntlet is left abandoned on the Garden planet. Five years later, Tony Stark, Bruce Banner, and Rocket use nanotechnology to create a right-handed Nano Gauntlet to use the alternate universe versions of the Infinity Stones.\n[…]\nThe Infinity Stones played a big role in the Marvel Cinematic Universe's Infinity Saga, but they were not the original story plan. Despite the Space Stone being introduced in Thor, and the Mind Stone and Thanos debuting in The Avengers, there were no official plans until at least 2012 to make the Stones the MacGuffins of the Saga.\n[…]\nIn the comics, Thanos is motivated to retrieve and use the Infinity Gems to impress Lady Death as she believed that the universe was overpopulated and headed for mass extinction. In the films, there is no mention of Lady Death, and Thanos wishes to reduce the population to avoid a repeat of his experience on Titan. Thanos retrieved each gem from a being who held it at the time."
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Cebolinha",
      "descricao": "Menino de cinco fios de cabelo que troca o R pelo L, rival da Mônica na Turma da Mônica"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Cebolinha é só um apelido. Qual é o verdadeiro primeiro nome do menino de cinco fios de cabelo da Turma da Mônica?",
    "resposta": "Cebolácio",
    "distratores": [
      "Cebolino",
      "Celestino",
      "Clementino"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cebolinha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cebolinha",
        "situacao": "ok",
        "texto": "Allium schoenoprasum, conhecido popularmente como cebolinha, cebolinha-francesa ou cebolinho, em Portugal, é uma planta originária da Europa.\n[…]\nA cebolinha é indicada para ser cultivada, principalmente, em plantios domésticos.[carece de fontes]?\n[…]\nAs folhas frescas têm um agradável e suave sabor parecido com o da cebola.[carece de fontes]? Usam-se como condimento, especialmente cruas em saladas, em pastas de queijo fresco e também em pratos de ovos e queijo,[carece de fontes]? sendo muito apreciadas no molho tártaro."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Obelix",
      "descricao": "Gaulês gigante, carregador de menires e melhor amigo de Asterix"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Como cabe a um entregador de menires, o nome do gaulês Obelix vem de qual tipo de monumento de pedra?",
    "resposta": "Obelisco",
    "distratores": [
      "Pirâmide",
      "Dólmen",
      "Coluna"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Obelix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Obelix",
        "situacao": "ok",
        "texto": "Obelix ( OB-əl-iks; French: Obélix [ɔbeliks]) is a cartoon character in the French comic book series Asterix. He works as a menhir sculptor and deliveryman as well as one of the primary defenders of the Gaulish village, and is Asterix's best friend. Obelix is noted for his obesity, the menhirs he carries around on his back and his superhuman strength.\n[…]\nObelix usually trades the stones away for whatever he needs, resulting in the village having a literal field of menhirs.\n[…]\nThe Roman civil war between Caesar and Pompey features in both Asterix the Legionary and Asterix and the Actress. When he witnesses a battle between Roman troops, Obelix murmurs \"What a waste!\". But this is not so much on the wasted lives as the fact that it means that he has fewer Romans to bash himself.\n[…]\nAlbert Augier voiced Obelix in a 1960 radio play. For the animated films, he has been voiced by Jacques Morel in the first three, Pierre Tornade in all films during the '80s and '90s, as well as the videogames Asterix & Obelix XXL and Asterix & Obelix XXL 2: Mission: Las Vegum, Jacques Frantz in the 2006 film Asterix and the Vikings and the videogame Asterix at the Olympic Games, and currently Guillaume Briat since the 2014 film Asterix: The Mansions of the Gods.\n[…]\nIn the live action films, Gérard Depardieu played Obelix until Gilles Lellouche took over the role for Asterix & Obelix: The Middle Kingdom. The English dubs for these films have featured Obelix's voice being provided by Terry Jones, Dominic Fumusa, and Paul Bandey.\n[…]\nObelix's name is a pun on  obélisque (obelisk), suggested by his rotund physique and his habit of casually carrying heavy stone monoliths (menhir). It might be an allusion to the obelus (obèle), a typographical mark (\"†\") often found with the asterisk, after which Asterix is named."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Obelix",
        "situacao": "ok",
        "texto": "Esta lista reúne os personagens da história em quadrinhos francesa Asterix:\n[…]\nObelix (obelisco), é o melhor amigo de Asterix. Adquiriu força sobre-humana permanente ao cair em um caldeirão cheio de poção mágica quando bebê. Adora o cãozinho Ideiafix e só pensa em comer javalis e bater nos romanos.\n[…]\nAnalgésix, (Analgésico), é um dos primeiros aldeões contratados por Obelix para sua nova empresa de venda de menires, mencionado em Obélix e Companhia.\n[…]\nBellodalix, (bela odalisca), seu papel é proteger a entrada da aldeia gaulesa. Ela aparece em Obelix e companhia.\n[…]\nChoucroutgarnix (chucrute guarnecido), é um dos aldeões, foi contratado por Obelix para caçar javalis em Obelix e Companhia.\n[…]\nGalantine, (galantina), aparece em Asterix e o Regresso dos Gauleses.\n[…]\nHarenbaltix, (arenque do báltico), é um dos aldeões contratados por Obelix em Obelix e Companhia.\n[…]\nKeskonrix, é um jovem morador da aldeia, munido de um arco e uma aljava durante uma caçada a javalis viu uma patrulha romana capturar Assurancetourix. Em Asterix e Cleópatra, ele aguarda o retorno de Asterix, Panoramix, Obelix e Idéiafix de Alexandria.\n[…]\nLa Roussette, é uma galinha de Abraracourcix, aparece na história Chanticleerix publicada em Asterix e o Regresso dos Gauleses. É a fêmea de Chanteclairix e a mãe de Noiraud.\n[…]\nLinguistix, (linguística), é um dos aldeões contratados por Obelix em Obelix e companhia.\n[…]\nMonosyllabix, (monossilábico), é um habitante da aldeia, trabalhou com Obelix na fabricação de menires.\n[…]\nPetitélégrafix, (pequeno telégrafo) é um habitante da aldeia, trabalhou com Obelix na fabricação de menires.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Superman",
      "descricao": "Super-herói da DC Comics vindo do planeta Krypton, criado por Jerry Siegel e Joe Shuster"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Antes de virar Clark Kent na Terra, que nome o Superman recebeu dos pais no planeta Krypton?",
    "resposta": "Kal-El",
    "distratores": [
      "Jor-El",
      "Zod",
      "Brainiac"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Superman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Superman",
        "situacao": "ok",
        "texto": "Superman is a superhero created by writer Jerry Siegel and artist Joe Shuster, first appearing in issue #1 of Action Comics, published in the United States on April 18, 1938. Superman has been regularly published in American comic books published by DC Comics since then, and has been adapted to other media including radio serials, novels, films, television shows, theater, and video games.\n[…]\nSuperman was born Kal-El, on the fictional planet Krypton. As a baby, his parents Jor-El and Lara sent him to Earth in a small spaceship shortly before Krypton was destroyed in an apocalyptic cataclysm. His ship landed in the American countryside near the fictional town of Smallville, Kansas, where he was found and adopted by farmers Jonathan and Martha Kent, who named him Clark Kent.\n[…]\nSiegel and Shuster reconciled and resumed developing Superman together. The character became an alien from the planet Krypton. Shuster designed the now-familiar costume: tights with an \"S\" on the chest, over-shorts, and a cape. They made Clark Kent a journalist who pretends to be timid, and conceived his colleague Lois Lane, who is attracted to the bold and mighty Superman but does not realize that he and Kent are the same person.\n[…]\nSuperman's secret identity is Clark Joseph Kent, a reporter for the Daily Planet.\n[…]\nOther supporting characters include Jimmy Olsen, a photographer at the Daily Planet, who is friends with both Superman and Clark Kent, though in most stories he does not know that Clark is Superman. Jimmy is frequently described as \"Superman's pal\", and was conceived to give young male readers a relatable character through which they could fantasize being friends with Superman.\n[…]\nIn the earliest comic book stories, Clark Kent's employer is George Taylor of The Daily Star, but the second episode of the radio serial changed this to Perry White of the Daily Planet.\n[…]\nMusic of Superman\n[…]\nSuperman on IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Superman",
        "situacao": "ok",
        "texto": "Superman ou Super-Homem é um super-herói de histórias em quadrinhos publicadas pela DC Comics. O personagem, entretanto, desde os anos 1930 já foi adaptado para diversos outros meios, como cinema, rádio, televisão, literatura e videogame. Superman foi criado pela dupla de autores de quadrinhos Joe Shuster e Jerry Siegel. Sua primeira aparição aconteceu no verão de 1938, na revista Action Comics #1\n[…]\nComo parte de sua história sempre inclui a perda de seu planeta natal Krypton, o personagem de Superman é mostrado geralmente muito super-protetor em relação a Terra, especialmente com a família e os amigos de Clark Kent. Esta mesma perda, combinado com a pressão para usar seus poderes de forma responsável,  provoca uma sensação de estar sozinho no planeta, apesar de seus amigos, esposa e pais adotivos.\n[…]\nSuperman é vulnerável a kryptonita verde, resíduos minerais de Krypton transformado em material radioactivo pelas mesmas forças que destruíram o planeta. A exposição à radiação da Kryptonita verde anula os poderes do Super-Homem e o imobiliza, sofrendo dores e náuseas; exposição prolongada pode significar morte. O único material na Terra que podem protegê-lo da Kryptonita é o chumbo, que bloqueia a radiação.\n[…]\nClark Kent, identidade secreta do Super-Homem, foi baseado parcialmente em Harold Lloyd, como seu nome veio da combinação dos nomes dos atores Clark Gable e Kent Taylor. Embora normalmente trabalhe como um repórter de jornal durante a década de 1970 o personagem deixou seu emprego no Planeta Diário para se aventurar na televisão por um tempo,  enquanto na renovação realizado por John Byrne na década de 1980, o personagem se tornou mais agressivo e ativo.\n[…]\nO kryptoniano criminoso General Zod;\n[…]\nMongul, governante do planeta de gladiadores Warworld, Mongul rivaliza com a força do Superman e sempre tentou derrotar o Homem de Aço;\n[…]\nImpacto cultural de Superman\n[…]\nSuperman no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Peanuts",
      "descricao": "Tira de jornal do americano Charles Schulz, com Charlie Brown e Snoopy"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Antes de Peanuts, Charles Schulz publicava um painel semanal com crianças num jornal de Saint Paul. Como ele se chamava?",
    "resposta": "Li'l Folks",
    "distratores": [
      "Funny Kids",
      "Little Rascals",
      "Kids Corner"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Peanuts",
      "https://en.wikipedia.org/wiki/Li%27l_Folks"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peanuts",
        "situacao": "ok",
        "texto": "Peanuts (subtitled featuring \"Good ol' Charlie Brown\" until January 1, 1987) is a syndicated daily and Sunday American comic strip written and illustrated by Charles M. Schulz, which eventually expanded into a media franchise. The strip originally ran from October 2, 1950 to February 13, 2000, continuing in reruns afterward.\n[…]\nPeanuts was originally titled Li'l Folks, a weekly panel cartoon that appeared in the St. Paul Pioneer Press (Schulz's hometown newspaper) from 1947 to 1950. Li'l Folks marked the first appearance of the name \"Charlie Brown\", also featuring a dog that looked much like the early 1950s version of Snoopy.\n[…]\nSchulz argued in a letter to Knight that the contraction of Little to Li'l was intended to avoid this conflict, but conceded that the final decision would be for his syndicate. After it was confirmed that Little Folks was a registered trademark, a different name for Schulz's strip became necessary.\n[…]\nCharles Schulz had always resisted republication of the earliest Peanuts strips, as they did not reflect the characters as he eventually developed them. However, in 1997, he began talks with Fantagraphics Books to have the entire run of the strip, which would end up with 17,897 strips in total, published chronologically in book form. In addition to the post-millennium Peanuts publications are BOOM! Studios' restyling of the comics and activity books, and the \"First Appearances\" series.\n[…]\nThe first volume (collecting strips from 1950 to 1952) was published in May 2004; the volume containing the final newspaper strips (including all the strips from 1999 and seven strips from 2000, along with the complete run of Li'l Folks) was published in May 2016, with a twenty-sixth volume containing outside-the-daily-strip Peanuts material by Schulz appeared in the fall of that year.\n[…]\nPeanuts (2014–2016)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Li%27l_Folks",
        "situacao": "ok",
        "texto": "Li'l Folks was a weekly cartoon feature by American cartoonist Charles M. Schulz and a precursor to his comic strip Peanuts. Two early installments appeared in the Minneapolis Tribune in June 1947 under the title Sparky's Li'l Folks, before the feature began its regular run in the St. Paul Pioneer Press on June 22, 1947. The final installment appeared on January 22, 1950.\n[…]\nSchulz's first regular newspaper feature, Li'l Folks consisted of single-panel cartoons rather than a continuing comic strip. Its humor often came from children speaking like adults. It anticipated elements of Peanuts, including the name Charlie Brown and a puppy resembling the early Snoopy.\n[…]\nSchulz quit two years into the strip after the editor turned down his requests for a pay increase and a move of Li'l Folks from the women's section to the comics pages.\n[…]\nLater that year, Schulz approached United Feature Syndicate (also a Scripps Company) with Li'l Folks, and the syndicate became interested. By this point, Schulz had redeveloped Li'l Folks with a four-panel strip format and a set cast of characters, rather than different nameless children for each page. The syndicate accepted the strip; however, the name Li'l Folks was too close to the names of two other comics of the time: Al Capp's Li'l Abner and a strip titled Little Folks.\n[…]\nAll of the original Li'l Folks comic strips have fallen into the public domain due to a lack of a copyright notices.\n[…]\nThe name Charlie Brown first appeared in Li'l Folks on May 30, 1948. Schulz used it for four different characters, who bore little resemblance to the later Peanuts protagonist; the name came from his fellow instructor Charles F. Brown at Art Instruction Schools. One strip also featured a dog named Rover that looked much like Snoopy. Like most of Peanuts, adult characters were not shown in the strip."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peanuts",
        "situacao": "ok",
        "texto": "Peanuts (no Brasil também conhecido como Minduim) é uma tira de jornal escrita e desenhada pelo cartunista norte-americano Charles Schulz que foi publicada de 2 de outubro de 1950 a 12 de fevereiro de 2000. A turma desenhada foi uma das mais populares e influentes da história da mídia. No seu ápice, Peanuts aparecia em mais de 2600 jornais, com um número de leitores estimado em 355 milhões em 75 p\n[…]\nEm 1947, Charles Schulz vendeu uma tira chamada Lil' Folks para um jornal de sua cidade natal, o St. Paul Pioneer Press. Lil' Folks foi publicado semanalmente por dois anos. Porém, quando Schulz pediu para que a tira fosse diária, acabou sendo despedido.\n[…]\nEm 2006 foi produzido um último longa-metragem com a Turma do Charlie Brown. Chama-se He's a Bully, Charlie Brown e foi originalmente idealizado por Charles Schulz e contava, entre os dubladores, com o ator Taylor Lautner, então criança. Foi o último filme que a equipe de Bill Melendez realizou com os personagens, sendo Melendez responsável pelas vozes de Snoopy e Woodstock. Bill faleceu em 2008.\n[…]\nEm 2011, foi lançado o especial para a televisão Happiness Is a Warm Blanket, Charlie Brown, roteirizado por Stephan Pastis (autor da tira Pearls Before Swine) e Craig Schulz (filho de Charles). Em 2014, é lançada uma série curtas produzida pela pelo estúdio Normaal Animation e a France Televisions Distribution. Em novembro de 2015, foi lançado o longa-metragem 3D The Peanuts Movie, produzido pela Blue Sky Studios.\n[…]\nEm 3 de junho de 2010, a United Media vendeu todos os seus ativos relacionados a Peanuts, incluindo as tiras e a marca, para uma nova empresa, a Peanuts Worldwide LLC, uma joint venture do Iconix Brand Group (detentor de 80%) e da Charles M. Schulz Creative Associates (20%). Além disso, a United Media vendeu seu braço United Media Licensing, responsável pelo licenciamento de suas outras propriedades, para a Peanuts Worldwide.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Robin",
      "descricao": "Identidade de parceiro mirim do Batman, usada por vários jovens ao longo das décadas nos quadrinhos da DC"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O codinome do parceiro mirim do Batman, criado em 1940, foi inspirado em qual fora da lei lendário da floresta de Sherwood?",
    "resposta": "Robin Hood",
    "distratores": [
      "Rei Artur",
      "Zorro",
      "Guilherme Tell"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Robin_(character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Robin_(character)",
        "situacao": "ok",
        "texto": "Robin is the alias of several superheroes appearing in American comic books published by DC Comics. The character was created by Bob Kane, Bill Finger, and Jerry Robinson to serve as a junior counterpart and the sidekick to the superhero Batman. As a team, Batman and Robin have commonly been referred to as the Caped Crusaders and the Dynamic Duo. The character's first incarnation, Dick Grayson, de\n[…]\nAbout a year after Batman's debut, Batman creators Bob Kane and Bill Finger introduced Robin the Boy Wonder in Detective Comics #38 (1940). The name \"Robin the Boy Wonder\" and the medieval look of the original costume were inspired by Robin Hood. Jerry Robinson noted he \"came up with Robin because the adventures of Robin Hood were boyhood favorites of mine. I had been given a Robin Hood book illustrated by N. C. Wyeth ...\n[…]\nRed Robin reappeared in promotional material for the DC Countdown to Final Crisis event. Eventually, it was revealed that this Red Robin was not Dick Grayson, but rather Jason Todd who appeared under the cape and cowl. The Red Robin costume was stated to be more symbolism, than an actual costume choice, as Jason has been both the Red Hood and Robin, being shown as Red Robin.\n[…]\nHowever, in Countdown to Final Crisis #17, Jason dons a Red Robin suit from a display case in the \"Bat Bunker\" (Earth-51's equivalent to the Bat Cave) as he and Earth-51 Batman join the fight raging on the Earth above the bunker. Jason keeps his new suit and identity for the rest of his tenure as a \"Challenger of the Unknown\", only to discard it on his return to New Earth and revert to his \"Red Hood\" street clothing.\n[…]\nHe does so using Robin Hood as an inspiration. He becomes an archer and wears a cape with a hood thus calling himself \"Hood\". Batman, upon seeing this, pulls his hood down, telling him that anyone could do simply that. Batman tells him to lose the hood and calls him Robin."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Robin_%28DC_Comics%29",
        "situacao": "ok",
        "texto": "Robin é um super-herói das histórias em quadrinhos da editora americana DC Comics. Ele é o ajudante oficial do Batman, com o qual forma uma equipe popularmente conhecida como Dupla Dinâmica, Cruzados Encapuzados ou, simplesmente, Batman e Robin.\n[…]\nCerca de um ano após a estreia do Batman, os criadores do Batman, Bob Kane e Bill Finger, apresentaram Robin the Boy Wonder em Detective Comics #38 (1940). O nome \"Robin the Boy Wonder\" e o visual medieval do traje original foram inspirados em Robin Hood. Jerry Robinson observou que \"criou Robin porque as aventuras de Robin Hood eram minhas favoritas da infância. Ganhei um livro de Robin Hood ilustrado por N. C. Wyeth ...\n[…]\ne foi isso que rapidamente esbocei quando sugeri o nome Robin Hood , que eles pareceram gostar, e então mostrou-lhes o traje. E se você olhar para ele, é o traje de Wyeth, de minha memória, porque eu não tinha o livro para olhar.: 83  Outros relatos de A origem de Robin afirma que o nome vem do pássaro chamado robin americano, não de Robin Hood, All Star Batman and Robin the Boy Wonder de Frank Miller sendo uma exceção notável. em The Untold Legend of the Batman de Len Wein.\n[…]\nDick Grayson é o mais clássico, famoso e querido dos Robins entre os fãs e o público. Como Robin, Dick foi o melhor lutador e líder, sendo muito alegre e cheio de fazer piadinhas, mesmo em momentos tensos de combate, sendo, no entanto, um parceiro razoavelmente obediente ao Batman. Após um tempo, Dick cresceu e deixou de ser o Robin, passando a se tornar um herói independente: o Asa Noturna, líder dos Jovens Titãs.\n[…]\nNa série para televisão da década de 1960 Batman e Robin, o personagem é interpretado por Burt Ward.\n[…]\nRobin (DC Comics) (em inglês) no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Thanos",
      "descricao": "Vilão titã roxo dos quadrinhos da Marvel"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Obcecado pela Morte, o vilão Thanos tem um nome derivado de qual figura da mitologia grega que personifica a morte?",
    "resposta": "Tânatos",
    "distratores": [
      "Hades",
      "Cronos",
      "Hipnos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Thanos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thanos",
        "situacao": "ok",
        "texto": "Thanos () is a fictional character appearing in American comic books published by Marvel Comics. Created by writer-artist Jim Starlin, the character first appeared in The Invincible Iron Man #55 (cover date February 1973). An Eternal–Deviant warlord from the moon Titan, Thanos is regarded as one of the most powerful beings in the Marvel Universe. Due to his genocidal tendencies, he has clashed wit\n[…]\nThanos joins Warlock as part of the Infinity Watch and helps him to defeat first his evil and then good personas, and cure Thor of \"warrior Madness\".\n[…]\nThe Thanos Quest:\n[…]\nThanos: A God Up There Listening (collects Thanos: A God Up There Listening #1–4 and Thanos Annual #1), 120 pages, hardcover, December 2014, ISBN 978-0785191582\n[…]\nThanos vs. Hulk (collects Thanos vs. Hulk #1–4, Warlock (1972) #12), 112 pages, June 2015, ISBN 978-0785197126\n[…]\nThanos: Cosmic Powers (collects Secret Defenders #12–14, Cosmic Powers #1–6), 344 pages, November 2015, ISBN 978-0785198178\n[…]\nDeadpool vs. Thanos (collects Deadpool vs. Thanos #1–4), 112 pages, December 2015, ISBN 978-0785198451\n[…]\nThe Infinity Entity (collects: The Infinity Entity #1–4, Thanos Annual #1), 116 pages, July 2016, ISBN 978-0785194217'\n[…]\nThanos The Infinity Revelation, Jim Starlin, 2014, ISBN 978-0785184706\n[…]\nThanos The Infinity Relativity, Jim Starlin, 2015, ISBN 978-0785193036\n[…]\nThanos The Infinity Finale, Jim Starlin, Ron Lim, 2016, ISBN 978-0785193050\n[…]\nThanos Returns (collects Thanos Vol 2 #1-5), 136 pages, by Jeff Lemire, 2017 ISBN 978-1302905576\n[…]\nThanos Vol. 2: The God Quarry (collects Thanos Vol 2 #7-11), Jeff Lemire 2018, ISBN 978-1302905583\n[…]\nThanos Wins (collects Thanos Vol 2 #13-18, Thanos Annual #1), Donny Cates 2018, ISBN 978-1302905590\n[…]\nThanos at Marvel.com\n[…]\nThanos at the Comic Book DB (archived from the original)\n[…]\nThanos at the Marvel Directory\n[…]\nThanos on Marvel Database, a Marvel Comics wiki\n[…]\nThanos at Marvel Cinematic Universe Wiki"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thanos",
        "situacao": "ok",
        "texto": "Thanos é um supervilão fictício das histórias em quadrinhos publicadas pela editora norte-americana Marvel Comics inspirado em Thanatos. Com primeira aparição na edição The Invincible Iron Man #55 (fevereiro de 1973) e foi criado pelo escritor-artista Jim Starlin, com visual inspirado em Darkseid. Desde então, Thanos tem sido destaque em mais de quatro décadas de continuidade do Universo Marvel e \n[…]\nAntes disso, Adam partiria para o espaço, onde viveria algumas aventuras, até se deparar com o maior desafio de sua vida, o vilão chamado Magus. Ele era, na verdade, a contraparte maligna de Warlock, o seu \"eu\" do futuro. Todavia, apesar de Magus ser um tirano que conquistara diversos mundos, ele ainda era um campeão da vida. Sendo assim, ele não tardaria a se defrontar com o campeão da morte, Thanos o Titã!\n[…]\nThanos, em um esforço para manter Deadpool longe de sua amada Morte, o amaldiçoou à imortalidade. No entanto, a personificação da morte também tinha sido sequestrada, o que significa que mais nada no universo poderia morrer também. Quando Deadpool, acreditando que Thanos era responsável, foi tentar derrotá-lo, mas o titã anulou a sua maldição, transformando Deadpool na única criatura mortal no universo, matando-o.\n[…]\nThanos é um membro mutante da raça dos super-humanos conhecidos como os Eternos Titânicos. O personagem possui habilidades comuns aos Eternos, mas ampliado em maior grau através de uma combinação de sua herança eterna mutante, amplificação biônica, misticismo e poder conferido pela entidade abstrata, Morte.\n[…]\nThanos aparece pela primeira vez fora dos quadrinhos na série animada Surfista Prateado, com a voz de Gary Krawford. Para amenizar o conteúdo relacionado à morte, Thanos é retratado como um adorador de uma personificação feminina do caos (referida como Lady Chaos), em vez da personagem Morte. Thanos conversa com uma estátua da Lady Chaos em sua nave.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Cascão",
      "descricao": "Menino sujinho, de cabelo preto e que não gosta de banho, da Turma da Mônica"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Nas versões em inglês da Turma da Mônica, o Cascão ganhou um nome que significa mancha ou borrão de sujeira. Qual?",
    "resposta": "Smudge",
    "distratores": [
      "Dusty",
      "Muddy",
      "Stinky"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Monica_and_Friends"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monica_and_Friends",
        "situacao": "ok",
        "texto": "Monica and Friends (Portuguese: Turma da Mônica), previously published as Monica's Gang in Anglophone territories and as Frizz and Friends in London, is a Brazilian comic book series and media franchise created by Mauricio de Sousa.\n[…]\nAs Novas Aventuras da Turma da Mônica (1986)\n[…]\nSe Liga na Turma da Mônica - Volume 2 (2012, direct-to-video)\n[…]\nIn 2021, Turma da Mônica: Lições was released in Brazilian cinemas on December 30. It is the sequel to Turma da Mônica: Laços, and based on the graphic novel of the same name written and drawn by siblings Victor Cafaggi and Lu Cafaggi. The film features Monica, Jimmy Five, Maggy and Smudge forget to do their homework and run away from school (6th or 7th year of elementary school). But not everything goes as expected, and Mônica is transferred to another school, triggering the group's separation.\n[…]\nIn 2012, \"Quero Ser da Turma da Mônica\", a game where the user can create a digital avatar in the style of the characters, was released for iOS. In 2013 a game was released for iOS and Android called \"Coelhadas da Mônica\" (Bunny-Bashing Monica), a puzzle game like Angry Birds. And in 2014, the game \"Jogo do Cascão\" (The Smudge Game) was released as a 2D platform running game with multiple stages.\n[…]\nBeyond self-censorship, state-imposed censorship was present as well. The story O Sequestro do Cascão (lit. The Kidnapping of Smudge) had to be renamed due to the kidnapping of Charles Burke Elbrick by the National Liberation Action and the 8th October Revolutionary Movement, and MSP was scolded for showing Jimmy Five's buttocks in a scene where he was taking a shower. Mauricio also had travelled to Brasília in person to submit the scripts of his cartoons to federal censorship."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Turma_da_M%C3%B4nica",
        "situacao": "ok",
        "texto": "Turma da Mônica é uma série de histórias em quadrinhos e uma franquia de mídia produzida pela Maurício de Sousa Produções, criada pelo cartunista e empresário Mauricio de Sousa. Foi originada em 1959 em tirinhas de jornal, na qual os personagens principais eram Bidu e Franjinha. A partir dos anos 1960, a série começou a ganhar a identidade atual, com a criação de Mônica e Cebolinha, entre 1960 e 1\n[…]\nA série Turma da Mônica tem uma extensa quantidade de personagens principais e secundários. Tem como principais protagonistas Mônica, Cebolinha, Cascão, Magali, Milena e Jeremias, sendo que quase todos têm a sua própria revista em quadrinhos, com exceção de Jeremias. Outros personagens de outras séries criadas por Maurício de Sousa também estão incluídos na Turma da Mônica, fazendo cruzamentos ou citações um sobre outro em várias histórias, entre vários outros personagens.\n[…]\nA Rede Globo ainda veicula regularmente o desenho em seu sinal internacional - disponível em países da Europa, Ásia e África. As animações também receberam dublagem em inglês para distribuição internacional, sendo veiculadas na Itália e outros países da Europa. Entre as demais famílias de personagens de Maurício Horácio, Penadinho, Astronauta, Tina e Turma da Mônica Jovem, também já estrelaram versões animadas.\n[…]\nO jogo foi anunciado na Brasil Game Show de 2018, tem visual arte pixel, está disponível em português e inglês e pode ser jogado com um a quatro jogadores, que jogam com os personagens da Turma e precisam defender um castelo da invasão do Capitão Feio e seus monstrinhos de sujeira. O jogo teve uma adaptação em quadrinhos publicada no ano seguinte.\n[…]\nEm 2014, a empresa pediu o fechamento de um perfil no Twitter com tirinhas adultas envolvendo a Turma da Mônica.\n[…]\nTurma da Mônica no Instagram\n[…]\nTurma da Mônica no Facebook\n[…]\nTurma da Mônica no Twitter\n[…]\nTurma da Mônica no TikTok\n[…]\nCanal de Turma da Mônica no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Tio Patinhas",
      "descricao": "Pato bilionário e avarento da Disney, tio do Pato Donald"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No original em inglês, o Tio Patinhas se chama Scrooge, nome de um velho avarento de qual livro de Charles Dickens?",
    "resposta": "Um Conto de Natal",
    "distratores": [
      "Oliver Twist",
      "Grandes Esperanças",
      "David Copperfield"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Scrooge_McDuck"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scrooge_McDuck",
        "situacao": "ok",
        "texto": "Scrooge McDuck (occasionally stylized as $crooge McDuck) is a cartoon character created in 1947 for The Walt Disney Company by Carl Barks. Appearing in Disney comics, Scrooge is a Scottish-born American anthropomorphic white duck. Like his nephew, Donald Duck, he has a yellow-orange bill, legs, and webbed feet. He typically wears a red or blue frock coat, a black top hat, pince-nez glasses, and sp\n[…]\nNamed after the character Ebenezer Scrooge from Charles Dickens' 1843 holiday novella A Christmas Carol, Scrooge is a business magnate and \"adventure-capitalist\" whose dominant character traits are his wealth, frugality, and tendency to seek money through adventure and treasure hunting. Scrooge founded McDuck Enterprises.\n[…]\nBarks has mentioned in interviews and correspondence that the character of Scrooge was inspired by Uncle Bim, the rich uncle from Sidney Smith’s The Gumps, as well as American industrialist John D. Rockefeller.. McDuck was initially characterized as a greedy miser and antihero (similar to Dickens' original Scrooge character). However, in later appearances, he has often been portrayed as a thrifty hero, adventurer, and explorer.\n[…]\nIn the Family Guy episode \"Lottery Fever\", Peter injures himself trying to dive into a pile of coins like Scrooge McDuck.\n[…]\nIn addition to the many original and existing characters in stories about Scrooge McDuck, authors have frequently led historical figures to meet Scrooge over the course of his life. Most notably, Scrooge has met US president Theodore Roosevelt. Roosevelt and Scrooge would meet each other at least three times: in the Dakotas in 1883, in Duckburg in 1902, and in Panama in 1906. See Historical Figures in Scrooge McDuck stories.\n[…]\nThe Life and Times of Scrooge McDuck, by Don Rosa\n[…]\nScrooge McDuck and Money (1967) – Theatrical film\n[…]\nScrooge McDuck  at Inducks\n[…]\nMarkstein, Donald D. \"Scrooge McDuck\". Toonopedia."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tio_Patinhas",
        "situacao": "ok",
        "texto": "Patinhas (Patinhas McPato ou Patinhas McPatinhas no Brasil e Scrooge McDuck na versão original dos EUA), comumente chamado de Tio Patinhas por seu sobrinho Pato Donald e seus sobrinhos-netos Huguinho, Zezinho e Luisinho, é uma personagem americana de ficção criada pelo cartunista Carl Barks, um pato antropomórfico introduzido na banda desenhada Disney em dezembro de 1947.\n[…]\nO nome original de Patinhas em inglês, Scrooge, se baseia no avarento Ebenezer Scrooge, personagem principal do Conto de Natal, de Charles Dickens. Tal como muitos outros habitantes de Patópolis, Patinhas se tornou popular no mundo inteiro, mais ainda na Europa, e tem sido expandido mais e mais desde então.\n[…]\nTio Patinhas surgiu nos quadrinhos em dezembro de 1947 em \"Natal nas Montanhas\", história escrita e desenhada por Carl Barks. Patinhas era um velho barbudo, de óculos e razoavelmente rico, que andava curvado sobre sua bengala e vivia isolado numa \"grande mansão\". Na história, Patinhas convida seu sobrinho Pato Donald e sobrinhos-netos Huguinho, Zezinho e Luisinho para sua cabana nas montanhas, planejando armar um susto e divertir-se com a desgraça dos sobrinhos.\n[…]\nBarks mais tarde relatou: \"Natal nas Montanhas foi apenas minha primeira ideia para se criar um tio velho e rico. Eu o fiz muito velho e muito fraco. Descobri mais tarde que tinha que torná-lo mais ativo. Não poderia deixar um velho comum fazer as coisas que eu queria que ele fizesse\".\n[…]\nEm 1974, a Disneyland Records lançou uma adaptação do clássico de Charles Dickens, A Christmas Carol, para o qual Alan Young foi contratado para dublar o Tio Patinhas interpretando o personagem que inspirou seu nome, Ebenezer Scrooge. Oito anos depois, a Walt Disney Animation Studios decidiu fazer uma paródia animada desta mesma história, Um Natal de Mickey Mouse (1983), e mais uma vez contratou Young para a dublagem.\n[…]\nFergus Mac Patinhas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Fumetti",
      "descricao": "Nome dado às histórias em quadrinhos na Itália"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na Itália, as histórias em quadrinhos são chamadas de fumetti, por causa dos balões de fala. O que essa palavra significa?",
    "resposta": "Fumacinhas",
    "distratores": [
      "Bolhinhas",
      "Desenhinhos",
      "Nuvenzinhas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fumetti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fumetti",
        "situacao": "ok",
        "texto": "Photo comics (also known as fumetti, photonovels or photoromances) are a form of sequential storytelling using photographs rather than illustrations for the images, along with the usual comics conventions of narrative text and word balloons containing dialogue. The photographs may be of real people in staged scenes, or posed dolls and other toys on sets.\n[…]\nThe terminology used to describe photo comics is somewhat inconsistent and idiosyncratic. Fumetti is an Italian word (literally \"little puffs of smoke\", in reference to word balloons), which refers in that language to any kind of comics. Because of the popularity of photo comics in Italy, fumetti became a loanword in English referring specifically to that technique.\n[…]\nIn Italian, a photo comic is referred to as a fotoromanzo (\"photonovel\", plural: fotoromanzi). In Spanish-speaking countries, the term fotonovela refers to several genres of photo comics, including original melodramas.\n[…]\nPhoto comics emerged in Italy in the 1940s and expanded into the 1950s. (Actress Sophia Loren worked for a time as a model.) The lurid Italian crime photo comic Killing ran from 1966 through 1969, and was reprinted in other countries; it has been reprinted and revived numerous times since then.\n[…]\nJan Baetens, The film photonovel: a cultural history of forgotten adaptations, Austin: University of Texas Press, 2019, ISBN 978-1-4773-1822-5"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fotonovela",
        "situacao": "ok",
        "texto": "Fotonovelas são novelas em quadrinhos que utilizam fotografias em vez de desenhos, de forma a contar, sequencialmente, uma história.\n[…]\nNo Brasil, as fotonovelas tiveram um mercado cativo por mais de 25 anos, entre os anos 1950 e 70, representando a ideia de uma imprensa popular feminina, com milhões de leitores de histórias publicadas em revistas com grande circulação nacional.\n[…]\nEm 1975, o Instituto Verificador de Circulação analisou a receptividade que as revistas de fotonovelas tinham em todo o país, na venda avulsa. A revista Capricho vendia quinzenalmente 273.050 exemplares, sendo que possuía, em todo o país, apenas três assinaturas. Com fotonovelas italianas, Capricho também vendia em Portugal e colônias ultramarinas, num total de 11.186, com apenas um assinante, anônimo.\n[…]\nA fotonovela apresenta uma narrativa que utiliza em conjunto a fotografia e o texto verbal. Como nas histórias em quadrinhos desenhadas, cada quadrinho da sequência corresponde a uma cena da história, no caso, corresponde a uma fotografia acompanhada da mensagem textual.\n[…]\nA característica principal das histórias é a intriga sentimental, geralmente apresentando uma heroína de origem humilde que luta por um amor difícil e complicado, alcançando seu objetivo de felicidade no final da narrativa. As personagens são pouco trabalhadas psicologicamente, com características maniqueístas e as consequências são sempre estereotipadas.\n[…]\nJOANILHO, André Luiz; JOANILHO, Mariângela Pecciolli Galli. Sombras literárias: a fotonovela e a produção cultural. Revista Brasileira de História, vol. 28, nº 56. In [2]\n[…]\nHistória do Grande Hotel (em italiano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Astérix (satélite)",
      "descricao": "Primeiro satélite artificial lançado pela França, em 1965"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1965, o primeiro satélite artificial lançado pela França ganhou o nome de qual personagem dos quadrinhos?",
    "resposta": "Asterix",
    "distratores": [
      "Tintim",
      "Obelix",
      "Lucky Luke"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ast%C3%A9rix_(satellite)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ast%C3%A9rix_(satellite)",
        "situacao": "ok",
        "texto": "Astérix or A-1 (initially conceptualized as FR.2 or FR-2) is the first French satellite. It was launched on 26 November 1965 by a Diamant A rocket from the CIEES launch site at Hammaguir, Algeria. With Astérix, France became the sixth country to have an artificial satellite and the third country to launch a satellite on its own rocket. Its main purpose was to test the Diamant launcher, though it w\n[…]\nInitial plans called for a late 1964 or early 1965 launch of FR-1, with Astérix's launch scheduled for early 1965. It appears Astérix was put into orbit prior to FR-1 because Charles de Gaulle and CNES wanted France to become the third space power by launching an independently-developed satellite on a French launcher, a propaganda coup for French exceptionalism during the Cold War.\n[…]\nFrance carried out two suborbital Astérix prototype flights on 31 May and 3 June 1965 using Rubis rockets from the CIEES launch complex Bacchus at Hammaguir, Algeria.\n[…]\nAstérix was launched on 26 November 1965 by a Diamant A rocket from the CIEES launch complex Brigitte/A at Hammaguir. The Diamant launcher measured 19 metres (62 ft) tall and weighed 18 tonnes (18 long tons; 20 short tons), and was filled with a mix of turpentine and nitric acid fuel. The payload fairing ejected from the rocket ten minutes after launch, during which the satellite's telemetry equipment was damaged.\n[…]\nWith Astérix, France became the sixth country to have an artificial satellite in orbit after the USSR (Sputnik 1, 1957), the United States (Explorer 1, 1958), the United Kingdom (Ariel 1, 1962), Canada (Alouette 1, 1962), and Italy (San Marco 1, 1964). France also became the third country after the USSR and US to launch a satellite on its own rocket: the British, Canadian, and Italian satellites were launched on American rockets.\n[…]\nTimeline of artificial satellites and space probes\n[…]\nFree paper model of Astérix satellite"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ast%C3%A9rix_%28sat%C3%A9lite%29",
        "situacao": "ok",
        "texto": "Astérix, o primeiro satélite francês, foi lançado em 26 de novembro de 1965 por um foguetão Diamant A de Hammaguir na Argélia Francesa. Foi originalmente chamado de A-1, como o primeiro satélite militar francês, mas posteriormente recebeu o nome do popular personagem de histórias em quadrinhos, Astérix. Por causa da relativamente alta altitude de sua órbita, não se esperava que ele reentrasse na a\n[…]\nCom o satélite Astérix, a França tornou-se o sexto país a colocar com sucesso um satélite artificial em órbita, depois da União Soviética, Estados Unidos, Reino Unido, Canadá e Itália (apesar dos satélites dos três últimos países citados terem sido lançados pela NASA).\n[…]\nFree paper model of Asterix satellite",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Charada",
      "descricao": "Edward Nygma, vilão do Batman obcecado por enigmas e adivinhações"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome civil do Charada, vilão do Batman, é Edward Nygma. Juntando a inicial E com o sobrenome, que palavra se forma?",
    "resposta": "Enigma",
    "distratores": [
      "Engano",
      "Energia",
      "Emblema"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Riddler"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Riddler",
        "situacao": "ok",
        "texto": "The Riddler (Edward Nygma - E. Nygma) is a supervillain appearing in American comic books published by DC Comics. He was created by Bill Finger and Dick Sprang, and debuted in Detective Comics #140 in October 1948. He is one of the most enduring enemies of the superhero Batman and belongs to the collective of adversaries that make up his rogues gallery.\n[…]\nThe Riddler is depicted as a criminal mastermind in Gotham City. He has an obsession to incorporate riddles, puzzles, and death traps in his schemes to prove his intellectual superiority over Batman and the police. His real name—Edward Nygma— is a pun itself; an \"enigma” is a person or thing that is difficult to understand. With this self-conscious use of an elaborate gimmick, the Riddler's crimes are often theatrical and ostentatious.\n[…]\nRiddler's return to villainy is cemented in \"Eye of the Beholder\". Investigating the Sensei's attack on the Jade Society, Batman (Dick Grayson) is ambushed by Riddler and a young woman introduced as Enigma, Riddler's daughter. Riddler and Enigma escape, delivering the Jade Society member list to Gilda Dent. Riddler is paid but is more interested in another reward, which Gilda promises after one more job.\n[…]\nThis occurs in \"Pieces\", where Gilda reveals herself to her estranged husband Harvey, who is now the disfigured criminal Two-Face. She hires Riddler and Enigma to help Two-Face best Mario Falcone and reclaim his coin. The plan works; Riddler and Enigma defeat Batman and reunite the Dents. The Riddler is rewarded with multiple dossiers of himself. When Enigma calls him a has-been, Riddler retorts with a new riddle: \"What's green and purple and bleeds profusely?\".\n[…]\nEnigma's response is cut short by her scream, implying that the Riddler has murdered his own daughter.\n[…]\nEnigma (DC Comics)\n[…]\nRiddler on DC Database, a DC Comics wiki"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Riddler",
        "situacao": "ok",
        "texto": "Riddler (Brasil: Charada/Portugal: Enigma) é um supervilão fictício que aparece nos quadrinhos publicados pela DC Comics, criado por Bill Finger e Dick Sprang. Ele apareceu pela primeira vez na Detective Comics #140 (outubro de 1948). O personagem é geralmente descrito como um mentor criminoso em Gotham City, que se deleita em incorporar enigmas e quebra-cabeças em seus esquemas, deixando-os como \n[…]\nRiddler é um dos inimigos mais duradouros do super-herói Batman e pertence ao coletivo de adversários que compõem sua galeria de vilões.\n[…]\nEm 2009, Riddler foi classificado como o 59º maior vilão de quadrinhos de todos os tempos pela IGN. O personagem já foi adaptado para várias formas de mídia, incluindo filmes, séries de televisão e videojogos. Ele foi dublado por John Glover no universo animado DC, Robert Englund em The Batman e Wally Wingert na série de videojogos Batman: Arkham.\n[…]\nEle foi retratado em live-action por Frank Gorshin e John Astin na série de televisão Batman no ano 1966-1968, e no filme Batman de 1966 Jim Carrey no filme Batman Forever de 1995, Cory Michael Smith na série Gotham de 2014-2019 e é interpretado por Paul Dano no filme The Batman de 2022.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Dupond e Dupont",
      "descricao": "Dupla de detetives atrapalhados da polícia nos quadrinhos As Aventuras de Tintim"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Nas edições em inglês de Tintim, os detetives Dupond e Dupont também ganharam nomes quase iguais. Quais?",
    "resposta": "Thomson e Thompson",
    "distratores": [
      "Smith e Smyth",
      "Johnson e Jonson",
      "Brown e Browne"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomson_and_Thompson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomson_and_Thompson",
        "situacao": "ok",
        "texto": "Thomson and Thompson (French: Dupont et Dupond [dypɔ̃ e dypɔ̃]) are fictional characters in the Adventures of Tintin comics series by Belgian cartoonist Hergé. They are two intelligence service detectives, identical in both appearance (apart from slightly different moustaches) and demeanor, first introduced in Tintin's fourth adventure Cigars of the Pharaoh (1932–1934), although the 1946 version o\n[…]\nIn Tintin in America there are characters similar to Thomson and Thompson: two policemen who collide with each other, and an incompetent detective called Mike MacAdam.\n[…]\nIn his 1941 play Tintin in India: The Mystery of the Blue Diamond, co-written with Jacques Van Melkebeke, Hergé named them as \"Durant and Durand\", although he later renamed them as \"Dupont and Dupond\". When King Ottokar's Sceptre was serialised in Eagle for British readers in 1951, the characters were referred to as \"Thomson and Thompson\"; these names were later adopted by translators Leslie Lonsdale-Cooper and Michael Turner in their translation of the series into English for Methuen Publishing.\n[…]\nThomson and Thompson were originally only side characters but later became more important. In the re-drawings of the earlier books, especially The Black Island, the detectives gained their now-traditional mannerisms.\n[…]\nIn the 19 books following Cigars of the Pharaoh, Thomson and Thompson appear in 17 of them, not appearing in Tintin in Tibet or Flight 714 to Sydney.\n[…]\nThe name of the pop group the Thompson Twins was based on Thomson and Thompson.\n[…]\nThe detectives are regular characters in the 1991–1992 television series The Adventures of Tintin, as well as the 2011 motion-capture film adaptation The Adventures of Tintin: The Secret of the Unicorn. In the film, Simon Pegg and Nick Frost portray Thomson and Thompson.\n[…]\nThomson and Thompson in English"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dupond_e_Dupont",
        "situacao": "ok",
        "texto": "Eis uma lista dos personagens presentes nas Aventuras de Tintim, série de histórias em quadrinhos criada pelo belga Hergé, e dos álbuns em que eles aparecem:\n[…]\nDupond et Dupont (Tintin au Congo, Les Cigares du Pharaon, Le Lotus bleu, L'Oreille cassée, L'Île Noire, Le Sceptre d'Ottokar, Le Crabe aux pinces d'or, L'Étoile mystérieuse, Le Secret de la Licorne, Le Trésor de Rackham le Rouge, Les Sept Boules de Cristal, Le Temple du Soleil, Tintin au pays de l'or noir, Objectif Lune, On a marché sur la Lune, L'Affaire Tournesol, Coke en stock, Les Bijoux de la Castafiore, Tintin et les Picaros) - detetives inspirados parcialmente no pai e tio de Hergé, gémeos idênticos que usavam chapéus de côco semelhantes e caminhavam de bengala.\n[…]\nRastapopoulos (em grego Ροβέρτος Ρασταπόπουλος) é um milionário mafioso e grande inimigo de Tintim. Desprovido de escrúpulos, organiza complôs para atingr seus objetivos. Vive rodeado de pessoas com a mesma índole, e várias vezes se associa no crime com Allan Thompson, outro personagem recorrente nas Aventuras de Tintim.\n[…]\nEle foi baseada em Zhang Chongren, um verdadeiro amigo de Hergé. Embora Tchang e Tintim tenham convivido por pouco tempo, formaram um profundo vínculo que os levava às lágrimas quando se separavam ou se reencontravam.\n[…]\nA história na qual Tchang foi introduzido, O Lótus Azul, foi a que teve o maior afeto entre Hergé e Tintim, tornando-se uma das mais populares séries de todos os tempos. Sua próxima aparição, em Tintim no Tibete, foi também em uma das mais comoventes aventuras de Tintim. As últimas notícias de Tchang aparecem em As Jóias de Castafiore, na forma de carta procedente de Londres.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Darkseid",
      "descricao": "Tirano do planeta Apokolips, vilão da DC Comics"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O criador de Thanos, Jim Starlin, admitiu que o vilão da Marvel foi inspirado em qual tirano da DC, criado por Jack Kirby?",
    "resposta": "Darkseid",
    "distratores": [
      "Brainiac",
      "Lex Luthor",
      "Sinestro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Thanos",
      "https://en.wikipedia.org/wiki/Darkseid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thanos",
        "situacao": "ok",
        "texto": "Thanos () is a fictional character appearing in American comic books published by Marvel Comics. Created by writer-artist Jim Starlin, the character first appeared in The Invincible Iron Man #55 (cover date February 1973). An Eternal–Deviant warlord from the moon Titan, Thanos is regarded as one of the most powerful beings in the Marvel Universe. Due to his genocidal tendencies, he has clashed wit\n[…]\nIn creating Thanos, Starlin drew inspiration from Jack Kirby's New Gods series for DC Comics, particularly the character of Darkseid. Thanos is usually portrayed as a villain, although many stories depict him as believing his actions to be justified.\n[…]\nStarlin has admitted the character's look was influenced by Jack Kirby's Darkseid:\n[…]\nKirby had done the New Gods, which I thought was terrific. He was over at DC at the time. I came up with some things that were inspired by that. You'd think that Thanos was inspired by Darkseid, but that was not the case when I showed up. In my first Thanos drawings, if he looked like anybody, it was Metron. I had all these different gods and things I wanted to do, which became Thanos and the Titans. Roy took one look at the guy in the Metron-like chair and said: \"Beef him up!\n[…]\nIf you're going to steal one of the New Gods, at least rip off Darkseid, the really good one!\"\n[…]\nThanoseid, a composite character based on Thanos and DC Comics character Darkseid, appears in the Amalgam Comics universe.\n[…]\nThree incarnations of Thanos appear as playable characters in Marvel Puzzle Quest. The first two, based on the comics (\"Modern\" and \"The Mad Titan\"), were added to the game in December 2016, while the third, inspired by the MCU incarnation (\"Endgame\"), was added in April 2019.\n[…]\nSilver Surfer: Rebirth of Thanos (collects Silver Surfer #34-38 and Yule Memory from Marvel Holiday Special 1992 by Jim Starlin, Ron Lim, Terry Austin), 128 pages, April 1993, ISBN 0-87135-968-5"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Darkseid",
        "situacao": "ok",
        "texto": "Darkseid () is a supervillain appearing in American comic books published by DC Comics. Created by writer-artist Jack Kirby, the character first made a cameo appearance in Superman's Pal Jimmy Olsen #134 (December 1970), before being fully introduced in Forever People #1 (February 1971). Formerly known as Uxas, Darkseid is a New God and the tyrannical ruler of the planet Apokolips.\n[…]\nDarkseid was created by writer-artist Jack Kirby to serve as the chief antagonist of his \"Fourth World\" metaseries. The character was first seen briefly in a series of cameos that started in Superman's Pal Jimmy Olsen #134 (December 1970), before making his first full appearance in Forever People #1 (February 1971). Kirby modeled Darkseid's face on actor Jack Palance and based his personality on Adolf Hitler and Richard Nixon.\n[…]\nDarkseid has had a large influence in pop culture and other comics; most notably, Kirby's creation is credited as the inspiration for Marvel Comics' high-profile villain Thanos by his creators.\n[…]\nHe also could use them to fuel other's source of powers, having used his Omega Beams to grant power to Mary Marvel and her powers afterwards were based on Anti-Life rather than magic. Darkseid has pinpoint control of this energy and can direct the beams to travel in straight lines, curve around corners and even pass through matter or other forms of energy. Some super-powered beings, such as Superman and Doomsday, can resist the Beams, although in the case of Superman, with a great deal of pain.\n[…]\nDarkseid was ranked as the 6th Greatest Comic Book Villain of All Time by IGN and the 23rd Greatest Villain of All Time by Wizard magazine.\n[…]\nThanos - A Marvel character influenced by Darkseid.\n[…]\nDarkseid at the Comic Book DB (archived from the original)\n[…]\nDarkseid on DC Database, a DC Comics wiki\n[…]\nDarkseid on the DC Animated Universe Wiki, an external wiki"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thanos",
        "situacao": "ok",
        "texto": "Thanos é um supervilão fictício das histórias em quadrinhos publicadas pela editora norte-americana Marvel Comics inspirado em Thanatos. Com primeira aparição na edição The Invincible Iron Man #55 (fevereiro de 1973) e foi criado pelo escritor-artista Jim Starlin, com visual inspirado em Darkseid. Desde então, Thanos tem sido destaque em mais de quatro décadas de continuidade do Universo Marvel e \n[…]\nThanos foi criado pelo escritor norte-americano James Patrick \"Jim\" Starlin, que admitiu ter-se inspirado no visual de Darkseid, um vilão similar da também (rival) editora norte-americana DC Comics.\n[…]\nAssim, novamente os Vingadores, a Serpente da Lua e o Capitão Marvel se uniram, junto a Warlock, para deter Thanos. O Titã já estava com as joias, exceto a de Warlock, e conseguiu construir uma gema gigante, com o poder de dizimar as estrelas. Após confrontar o vilão, Warlock acabou morto e os Vingadores, aprisionados. O \"eu\" de Warlock que acabara de derrotar Magus surgiu nesse momento, para recolher sua alma derrotada por Thanos para a joia do Infinito.\n[…]\nO Criador e Reed Richards (1610 e 616) procuravam a fonte, Thanos arquitetou um plano para que uma muralha que protegia o mundo de zumbis, ultrons e a onda da aniquilação saísse. Na batalha final entre o Profeta (Maximus), a Capitã Marvel aliada do barão Sinistro e sua força de clones, e um grupo de Thors enfrentando os Hulks do barão Maestro e Apocalipse e Holocausto, aparece o Titã pela muralha com um exército de ultrons. Ele imediatamente zomba, dizendo que Doom não era merecedor de tal poder.\n[…]\nThanos tem uma pequena aparição em Marvel: Ultimate Alliance.\n[…]\nEm 2018, pesquisadores brasileiros descobriram um novo gênero e espécie de dinossauro terópode que viveu no período Cretáceo, no atual sudeste do Brasil. O novo gênero foi nomeado de \"Thanos simonattoi\", em homenagem ao personagem fictício da Marvel.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Chico Bento",
      "descricao": "Menino caipira de chapéu de palha da Turma da Mônica, morador da Vila Abobrinha"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O caipira Chico Bento nasceu das histórias que a avó de Mauricio de Sousa contava sobre qual parente do quadrinista?",
    "resposta": "Um tio-avô",
    "distratores": [
      "O avô",
      "O pai",
      "Um irmão"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chico_Bento"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chico_Bento",
        "situacao": "ok",
        "texto": "Chico Bento é o personagem principal da Turma do Chico Bento, criada pelo cartunista brasileiro Mauricio de Sousa. Chico foi criado em 1961, inspirado em um morador da cidade de Santa Isabel, apelidado de João Galinha e amigo de Mauricio, bem como de histórias que sua avó contava sobre seus tios-avôs Chico e Bento.\n[…]\nChico é um típico caipira brasileiro. Anda descalço e usa chapéu de palha. Ele adora pescar com o pai e com os amigos. Chico mora com os seus  pais, Seu Bento e Dona Cotinha, em um sítio nas cercanias da fictícia Vila Abobrinha, no interior de São Paulo. Possui uma avó paterna, Vó Dita, contadora de \"causos\" e de histórias folclóricas, envolvendo lendas, tais como a da Mula-sem-cabeça, do Saci, do Lobisomem, do Curupira, dentre outras.\n[…]\nDiferente de outros personagens de Mauricio, Chico Bento sempre foi caracterizado em idade escolar, chegando a frequentar uma escola em suas histórias, apesar de não poder ser considerado um aluno exemplar, pois se atrasa, esquece os deveres, cria histórias de pescador (mentirosas), além de tirar notas baixas.\n[…]\nChico é filho de Nhô Bento, que trabalha com a lavoura e animais da roça onde a família vive, e Dona Cotinha, que cuida da casa. Por parte de mãe é primo de Zé Lelé, e por parte de pai de Zeca, o primo da cidade que causa sempre choques de cultura quando ele e Chico estão no ambiente um do outro. Em duas histórias especiais, foi mostrado o nascimento da irmã do Chico, Mariana; ela morreu na mesma história, tornando-se uma estrela.\n[…]\nEm 2013, começou a ser editada a revista Chico Bento Moço, uma adaptação onde Chico sai de casa para ir estudar Agronomia na cidade grande. A ideia da revista foi inspirada no sucesso da Turma da Mônica Jovem, versão adolescente da Turma da Mônica em estilo mangá."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Superman",
      "descricao": "Super-herói da DC Comics vindo do planeta Krypton, criado por Jerry Siegel e Joe Shuster"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1978, a DC lançou uma revista especial em que o Superman enfrenta num ringue qual campeão de boxe da vida real?",
    "resposta": "Muhammad Ali",
    "distratores": [
      "Mike Tyson",
      "George Foreman",
      "Joe Frazier"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Superman_vs._Muhammad_Ali"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Superman_vs._Muhammad_Ali",
        "situacao": "ok",
        "texto": "Superman vs. Muhammad Ali is an oversize celebrity comic book published by DC Comics in 1978. The 72-page book features Superman teaming up with the heavyweight boxing champion Muhammad Ali to defeat an alien invasion of Earth, a story in which they are required to compete in a boxing match (without Superman's superpowers). It was based on an original story by Dennis O'Neil which was adapted by Ne\n[…]\nSuperman vs. Muhammad Ali was part of DC's oversized series All-New Collectors' Edition, officially numbered #C-56.\n[…]\nLouis and an uninhabited Pacific island. Superman thwarts the missiles from destroying Saint Louis, albeit barely. Superman and Muhammad Ali each come forward to volunteer. However, Ali argues that Superman has an unfair advantage in his many superpowers. Ali also protests that Superman is Kryptonian, whereas he is a native of Earth. Ali, known for his florid self-promotion as \"The Greatest\", puts himself forward as the obvious choice.\n[…]\nSuperman vs. Muhammad Ali's wraparound cover shows a host of celebrities, including Frank Sinatra, Lucille Ball, Tony Orlando, Johnny Carson, the cast of Welcome Back, Kotter, and The Jackson 5; sharing close-up seating with Lois Lane as well as DC superheroes like Batman, Green Lantern and Wonder Woman, in addition to Warner and DC employees. It also showed then-President Jimmy Carter and his wife Rosalynn.\n[…]\nIn 2016, NECA released a 2-pack set of 7-inch action figures based on Muhammad Ali and Superman as they appeared in the comic.\n[…]\n\"Superman vs. Muhammad Ali\". Did You Know. Scoop. Gemstone Publishing. Feb  25, 2006. Archived from the original on 2009-05-27.\n[…]\n\"Superman vs. Muhammad Ali\". SupermanTV.net. Archived from the original on 2015-12-24.\n[…]\nOlivier, Delcroix (November 25, 2011). \"Superman contre Mohammed Ali réédité 33 après!\" [Superman against Mohammed Ali reissued 33 later!]. le Figaro (in French)."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Homem-Aranha",
      "descricao": "Super-herói da Marvel criado por Stan Lee e Steve Ditko em 1962, identidade de Peter Parker"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 2009, uma revista do Homem-Aranha esgotou nas bancas por trazer, ao lado do herói, qual presidente americano recém-empossado?",
    "resposta": "Barack Obama",
    "distratores": [
      "George W. Bush",
      "Bill Clinton",
      "Joe Biden"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Barack_Obama_in_comics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Barack_Obama_in_comics",
        "situacao": "ok",
        "texto": "Barack Obama has appeared as a character in comic books published by a number of publishing companies, sometimes appearing as a realistic fictionalized version of himself and sometimes as a spoof.\n[…]\nIn November 2008, two things led to an explosion in popularity of the Obama comic book character. One of Obama's advisers gave an interview to journalist Jon Swaine of The Daily Telegraph titled, \"Barack Obama: The 50 facts you might not know.\" In the interview, it emerged that Obama collects \"Spider-Man and Conan the Barbarian.\" Then later that month, on November 4, 2008, Obama became the first African-American to be elected President of the United States.\n[…]\nPrior to the Spider-Man story, the president-elect was featured in Secret Invasion #8; this is the first appearance of president-elect Barack Obama in a Marvel comic.\n[…]\nObama the comic book character has been put on the cover and pages of many other comics including Savage Dragon No. 145 (February 2008) by Erik Larsen and Youngblood No. 8 (February 2008) by Rob Liefeld. The Savage Dragon No. 145 had a special edition variant only offered at the WonderCon 2009 in San Francisco in March 2009 (only 1,500 were produced). On the cover, Barack Obama can be seen holding an American flag and punching Osama Bin Laden in the face.\n[…]\nPresidential Material:  Barack Obama, Publisher – IDW Publishing, Writer – Jeff Mariotte, Artists – Tom Morgan, Release – October 2008\n[…]\nPolitical Power: Barack Obama, Publisher – Bluewater Productions, Writer – Chris Ward, Artist – Azim Akberali, Release – September 2009\n[…]\nDepictions of Barack Obama\n[…]\nPREVIEW: \"Political Power: Barack Obama\" (MTV Splash Page, 5/22/09)"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Tio Patinhas",
      "descricao": "Pato bilionário e avarento da Disney, tio do Pato Donald"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Uma história do Tio Patinhas de 1954, de Carl Barks, inspirou a famosa fuga de uma bola de pedra gigante. Que herói do cinema protagoniza essa cena?",
    "resposta": "Indiana Jones",
    "distratores": [
      "Allan Quatermain",
      "Lara Croft",
      "Han Solo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Seven_Cities_of_Cibola"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Seven_Cities_of_Cibola",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Marvel Comics",
      "descricao": "Editora americana de quadrinhos, casa do Homem-Aranha, dos X-Men e do Capitão América"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Desde 2009, o Homem-Aranha e o Mickey Mouse pertencem à mesma empresa. Qual?",
    "resposta": "Disney",
    "distratores": [
      "Warner Bros.",
      "Sony",
      "Universal"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Marvel_Entertainment"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marvel_Entertainment",
        "situacao": "ok",
        "texto": "Marvel Entertainment, LLC (formerly Marvel Entertainment, Inc. and Marvel Enterprises, Inc.) was an American entertainment company and subsidiary of the Walt Disney Company, headquartered in New York City. Founded on June 2, 1998, through the merger of Marvel Entertainment Group and Toy Biz, the company operated until March 29, 2023, when its remaining businesses were absorbed into Disney's other \n[…]\nOn December 31, 2009, Disney completed its acquisition of Marvel Entertainment for approximately US$4 billion, after which Marvel operated as a limited liability company (LLC). Following the transfer of Marvel Studios to Walt Disney Studios in 2015, Marvel Entertainment's remaining operations, particularly comic book publishing, licensing, and consumer products, were primarily reported under Disney's consumer products business.\n[…]\nOn August 31, 2009, the Walt Disney Company announced a deal to acquire Marvel Entertainment for $4 billion, with Marvel shareholders to receive $30 and approximately 0.745 Disney shares for each share of Marvel they own. Shareholders from both companies approved the deal on December 31, 2009; it was finalised on the same day. The company was delisted from the New York Stock Exchange under its ticker symbol (MVL), due to the closing of the deal.\n[…]\nOn September 16, 2009, the Jack Kirby estate served notices of termination to Walt Disney Studios, 20th Century Fox, Universal Pictures, Paramount Pictures, and Sony Pictures to attempt to gain control of various Silver Age Marvel characters. Marvel sought to invalidate those claims.\n[…]\nMarvel Comics, transferred to Disney Publishing Worldwide\n[…]\nMarvel Press, imprint of Marvel Comics jointly published with Disney Books\n[…]\nMarvel's Behind the Mask (February 12, 2021), documentary special produced with Tarmac Creative for Disney+.\n[…]\nMarvel Games\n[…]\nLists of Marvel Comics characters\n[…]\nList of unproduced Marvel Comics adaptations"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Marvel_Entertainment",
        "situacao": "ok",
        "texto": "A Marvel Entertainment, Inc. foi uma companhia estadunidense de entretenimento, era subsidiária da The Walt Disney Company. Formada pela fusão entre a Marvel Entertainment Group e a Toy Biz, Inc., era a dona da Marvel Comics, Marvel Studios, Marvel Music e da Marvel Television.\n[…]\nO personagem mais antigo da empresa é Ka-zar, criado em 1936. Em 1939, a companhia começou a publicar histórias em quadrinhos, com o nome de Timely Comics. Sua primeira revista foi a Marvel Comics #1.\n[…]\nMarvel Worldwide, Inc., editora da Marvel Comics\n[…]\nIron Works Productions LLC, subsidiária que detém os direitos de filmes dos personagens da Marvel Comics\n[…]\nIncredible Productions LLC (Delaware), subsidiária que detém os direitos de filmes dos personagens da Marvel Comics\n[…]\nMarvel Characters, Inc.: subsidiária que detém os direitos gerais de todos os personagens da Marvel Comics\n[…]\nMVL Rights, LLC: subsidiária que detém os direitos de filmes dos personagens da Marvel Comics{{{j1}}}  {{{j2}}}\n[…]\nMarvel Publishing, Inc.: publicadora da Marvel Comics;\n[…]\nMarvel Comics : editora norte-americana de revistas em quadrinhos.\n[…]\nMVL Film Finance LLC: financiadora teatral dos filmes de 10 personagens da empresa, como garantia\n[…]\nSpider-Man Merchandising L.P.: a joint-venture da Marvel com a  Sony Pictures Consumer Products, Inc., que detém os direitos de licença dos produtos relacionados aos filmes do Homem-Aranha.\n[…]\nDe 1981 a 2009, essa relação incluiu a Marvel Productions. Em 2015, o Marvel Studios foi realocado como uma subsidiária do The Walt Disney Studios, deixando de responder à Marvel Entertainment.\n[…]\nNo dia 31 de Agosto de 2009, foi anunciada a compra da empresa pela The Walt Disney Company. O valor da negociação foi de quatro bilhões de dólares.\n[…]\nMarvel Entreprises, Inc\n[…]\nMarvel Entertainment Group, Inc\n[…]\nTimely Comics",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Zé Carioca",
      "descricao": "Papagaio malandro do Rio de Janeiro criado pela Disney nos anos 1940, estrela de quadrinhos publicados no Brasil"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No filme Alô, Amigos, de 1942, o papagaio Zé Carioca estreia num segmento embalado por qual canção de Ary Barroso?",
    "resposta": "Aquarela do Brasil",
    "distratores": [
      "Na Baixa do Sapateiro",
      "Tico-Tico no Fubá",
      "Carinhoso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Saludos_Amigos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saludos_Amigos",
        "situacao": "ok",
        "texto": "Saludos Amigos (Spanish for \"Greetings, Friends\") is a 1942 American live-action/animated anthology film produced by Walt Disney and released by RKO Radio Pictures. Set in Latin America, the featurette is made up of four different segments; Donald Duck stars in two of them and Goofy stars in one. It also features the first appearance of José Carioca, the malandro Brazilian parrot. Saludos Amigos p\n[…]\nAquarela do Brasil (Portuguese for \"Watercolour of Brazil\"), the finale of the film, views Disney artists creating pictures that magically turn into different pictures. One of them is a flower, which turns into Donald Duck after a bee goes into his mouth.\n[…]\nWhen the bee flies out of his mouth, Donald sees a paint brush creating a brand-new character, José Carioca from Rio de Janeiro, Brazil, who shows Donald Duck around South America, lets him have a drink of cachaça with him, which is so spicy for Donald that he starts hiccuping, and introduces him to the samba (complete with the songs \"Aquarela do Brasil\" and \"Tico-Tico no Fubá\").\n[…]\nThe film's original score was composed by Edward H. Plumb, Paul J. Smith, and Charles Wolcott. The title song, \"Saludos Amigos\", was written for the film by Charles Wolcott and Ned Washington. The film also featured the song \"Aquarela do Brasil\", written by the popular Brazilian songwriter Ary Barroso and performed by Aloísio de Oliveira, and an instrumental version of \"Tico-Tico no Fubá\", written by Zequinha de Abreu.\n[…]\n\"Aquarela do Brasil\" was written and first performed in 1939, but did not achieve much initial success. However, after appearing in this film it became an international hit, becoming the first Brazilian song to be played over a million times on American radio.\n[…]\nBerndt Morris, Elizabeth; Morris, Charles  Walt Disney and Diplomacy: The Musical Impact of Aquarela do Brasil  Latin American Music Center\n[…]\nSaludos Amigos at Disney A to Z"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saludos_Amigos",
        "situacao": "ok",
        "texto": "Saludos Amigos (bra: Alô, Amigos; prt: Olá Amigos ou Olá, Amigos!) é um filme estadunidense do gênero de animação, produzido por Walt Disney em 1942, e lançado internacionalmente pela RKO Radio Pictures. É o sexto longa-metragem de animação dos estúdios Disney, teve sua estreia no Rio de Janeiro em 24 de agosto de 1942, nos Estados Unidos o filme foi lançado em 6 de fevereiro de 1943. Situado na A\n[…]\nNo início de 1941, antes da entrada dos Estados Unidos na Segunda Guerra Mundial, Walt Disney e uma equipe de desenhistas foram ao Brasil, em 1942, enviados por Franklin D. Roosevelt, presidente dos Estados Unidos na época, como forma de manter o Brasil no grupo de aliados em guerra contra o fascismo europeu. Isso estava acontecendo, pois vários governos das Américas mantinham laços estreitos com a Alemanha Nazista e o governo dos EUA queria contrariar esses laços.\n[…]\nWatercolor of Brazil: O final do filme, traz um novo personagem, Zé Carioca, levando Donald para o Rio de Janeiro, e o ensina o samba (com as canções \"Aquarela do Brasil\" e \"Tico-tico no Fubá\").\n[…]\nNo Brasil, Pinto Colvig\n[…]\nNo Brasil, Clarence Nash\n[…]\nNo Brasil, José Oliveira\n[…]\nNo Brasil, Aloysio de Oliveira\n[…]\nA trilha sonora original do filme foi composta por Edward H. Plumb, Paul J. Smith e Charles Wolcott. A canção-título, \"Saludos Amigos\", foi escrita por Charles Wolcott e Ned Washington. O longas-metragem também contou com a canção \"Aquarela do Brasil\", escrita pelo popular compositor brasileiro Ary Barroso e interpretada por Aloysio de Oliveira, e uma versão instrumental de \"Tico-Tico no Fubá\", de Zequinha de Abreu.\n[…]\n\"Aquarela do Brasil\" foi escrita e interpretada pela primeira vez em 1939, mas não obteve muito sucesso inicial. No entanto, depois de aparecer neste filme, tornou-se um sucesso internacional, tornando-se a primeira canção brasileira a ser tocada mais de um milhão de vezes nas rádios norte-americanas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Homem de Ferro",
      "descricao": "Super-herói da Marvel, identidade do milionário Tony Stark, estreou em 1963"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Stan Lee se inspirou em qual milionário americano, inventor, aviador e produtor de cinema, para criar Tony Stark, o Homem de Ferro?",
    "resposta": "Howard Hughes",
    "distratores": [
      "Henry Ford",
      "Thomas Edison",
      "Walt Disney"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Iron_Man"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iron_Man",
        "situacao": "ok",
        "texto": "Iron Man is a superhero appearing in American comic books published by Marvel Comics. Co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby, the character first appeared in Tales of Suspense #39 in 1962 (cover dated March 1963) and received his own title with Iron Man #1 in 1968. Shortly after his creation, Iron Man became a f\n[…]\nLarry Lieber developed Iron Man's origin and wrote the first Iron Man story, while Jack Kirby and Don Heck were responsible for the initial design. Lee modeled Iron Man after businessman Howard Hughes, invoking his physical appearance, his image as a businessman, and his reputation as an arrogant playboy. Kirby and Heck then incorporated elements of the actor Errol Flynn's physical appearance in the design. When first designing the character, Lee wanted to create a modernized Arthurian knight.\n[…]\nHappy Hogan was hired as Stark's chauffeur after saving his life, and Happy later deduced Stark was Iron Man. Iron Man has other allies through his affiliation with the Avengers, including close personal relationships with Captain America, Ant-Man, and the Wasp. As Tony Stark, he is the benefactor of the Avengers, providing their headquarters at Avengers Mansion. Stark's butler, Edwin Jarvis, works for both Iron Man and the Avengers.\n[…]\nIn 2008, a film adaptation titled Iron Man was released, starring Robert Downey Jr. as Tony Stark and directed by Jon Favreau. Iron Man was met with positive reviews from film critics, grossing $318 million domestically and $585 million worldwide, and became the first in the long-running Marvel Cinematic Universe. Downey's casting was praised, as was his portrayal of the character; Downey's own recovery from substance abuse was seen as creating a personal connection with the character.\n[…]\nIron Man (Tony Stark) at the Comic Book DB (archived from the original)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homem_de_Ferro",
        "situacao": "ok",
        "texto": "Homem de Ferro (no original: Iron Man) é um super-herói que aparece nas histórias em quadrinhos estadunidenses publicadas pela Marvel Comics. Cocriado pelo escritor e editor Stan Lee, desenvolvido pelo roteirista Larry Lieber e desenhado pelos artistas Don Heck e Jack Kirby, o personagem apareceu pela primeira vez em Tales of Suspense #39 em 1962 (capa datada de março de 1963) e recebeu seu própri\n[…]\nRobert Downey Jr. interpretou Tony Stark em Iron Man (2008), o primeiro filme do Universo Cinematográfico Marvel, e continuou a interpretar o personagem até sua última aparição em Avengers: Endgame (2019). A interpretação de Downey popularizou o personagem, elevando o Homem de Ferro a um dos super-heróis mais conhecidos da Marvel. Outras adaptações do personagem aparecem em filmes de animação lançados diretamente em vídeo, séries de televisão e videogames.\n[…]\nPouco tempo depois, Tony matriculou-se na Universidade de Cambridge, na Inglaterra, onde conheceu Cassandra Gillespie. Durante seu primeiro encontro com Cassandra, Tony a protegeu de um grupo de agentes Hydra que estavam atrás da mãe de Cassandra, uma traficante de armas e rival de negócios de Howard Stark. Na sequência deste incidente, Howard trouxe Tony de volta à América e, forçadamente, ele terminou o relacionamento com Cassandra, que mal havia começado.\n[…]\nRobert Downey Jr. interpreta Tony Stark nos filmes do Universo Marvel Cinematográfico. A estreia do personagem foi em 2008 em  Homem de Ferro, a primeira produção independente do Marvel Studios. Assim como nos quadrinhos, Stark é um bilionário que fornece armas para o governo norte-americano. Após a realização de uma demonstração de suas criações, ele é sequestrado por afegãos e durante o período que passa preso, desenvolve uma armadura para conseguir escapar.\n[…]\nHomem de ferro será um personagem jogável no futuro jogo Marvel Rivals (2024)\n[…]\nHomem de Ferro em Marvel.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Lanterna Verde",
      "descricao": "Super-herói da DC Comics que usa um anel de poder; na versão clássica, o piloto Hal Jordan"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O primeiro Lanterna Verde, Alan Scott, de 1940, tinha uma lanterna mágica inspirada em qual conto das Mil e Uma Noites?",
    "resposta": "Aladim",
    "distratores": [
      "Ali Babá",
      "Simbad",
      "Sherazade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alan_Scott"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alan_Scott",
        "situacao": "ok",
        "texto": "Alan Wellington Ladd-Scott is a superhero appearing in American comic books published by DC Comics, and the first character to bear the name Green Lantern. He fights evil with the aid of his mystical ring, which grants him a variety of powers. He was created by Martin Nodell and Bill Finger, first appearing in the comic book All-American Comics #16, published on July 10, 1940.\n[…]\nAlan Scott was created after Nodell became inspired by the characters from Greek, Norse, and Middle Eastern myths and tales, including Aladdin from One Thousand and One Nights, and sought to create a popular entertainment character who fought evil with the aid of a magic ring that grants him various supernatural powers. After debuting in All-American Comics, Alan Scott soon became popular enough to sustain his own comic book, Green Lantern.\n[…]\nThe character of Alan Scott made his debut in All-American Comics #16 (July 1940), fighting crime under the masked identity of \"Green Lantern\". He also appeared as part of the superhero team Justice Society of America in All Star Comics #3 (Winter 1940). He served as the team's second chairman in #7, but departed following that issue and returned a few years later, remaining a regular character.\n[…]\nFor the second, in modern times, the lamp came into the hands of a patient of a mental institution who fashioned the lamp into a modern train lantern. The green flame restored his sanity and gave him a new life. For the third, by 1940, after having already fulfilled the first two-thirds of this prophecy, the lantern fashioned from the meteoric metal fell into the hands of Alan Scott, a young railroad engineer.\n[…]\nIn 2023, McFarlane Toys created a figure of Alan Scott for their DC Multiverse line inspired by his appearance in Day of Vengeance.\n[…]\nCrisis on Multiple Earths: The Team-Ups Vol. 2 (Green Lantern Vol. 2 #45, 52)\n[…]\nAlan Scott at Comic Vine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alan_Scott",
        "situacao": "ok",
        "texto": "Alan Scott, também chamado de Lanterna Verde da Era de Ouro, Lanterna Verde da Terra Paralela, Lanterna Verde da Terra 2 ou Sentinela, é um super-herói fictício da DC Comics, e o primeiro herói terrestre (e também dos quadrinhos) a se chamar Lanterna Verde, muitos anos antes de Hal Jordan. Alan é um conhecido membro da Sociedade da Justiça.\n[…]\nHá muito tempo, um estranho meteoro verde caiu na Terra, e seu poder manifestou uma luz verde. Transforado em lanterna. Alan Wellington Scott era engenheiro e trabalhava na empresa American Southwest, na qual projetava ferrovias. Em 1939, um homem chamado Dekker, seu rival nos negócios, sabotou uma ponte ferroviária projetada pela equipe de Alan.\n[…]\nAlan encontrou a misteriosa lanterna, momentos antes do acidente, que começou a emitir luz esverdeada e de dentro, uma entidade começou a falar com ele, explicando sobre sua missão como Lanterna Verde. Scott também foi orientado a fazer um anel com uma peça do artefato que lhe conferiu poderes. O anel só precisava ser recarregado a cada 24 horas na bateria da lanterna. Os poderes do anel não funcionavam contra madeira.\n[…]\nApesar de se chamar Lanterna Verde, Alan não faz parte da Tropa dos Lanternas Verdes.\n[…]\nMuitos anos a frente, ele descobriria que a lanterna foi feita do lendário Coração Estelar.\n[…]\nApós Zero Hora, Alan Scott desistiu por algum tempo do título de Lanterna Verde, que ele abdicou em favor de Kyle Rayner, e passou a usar a alcunha de O Sentinela.\n[…]\nEm o Reino do Amanhã, Alan Scott é ainda o Lanterna Verde. Ele forjou uma armadura que é energizada pelo Coração Estelar.\n[…]\nOs poderes do anel de Alan são parecidos aos anéis padrões da Tropa dos Lanternas Verdes. Entretanto, esses poderes são de origem mágica e não funcionam contra madeira e objetos de madeira, em vez de amarelo. Fora isso, Alan Scott é um lutador e inventor competente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Tintim",
      "descricao": "Jovem repórter belga criado por Hergé em 1929, protagonista de As Aventuras de Tintim"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Qual presidente francês teria dito que, no fundo, seu único rival internacional era o repórter Tintim?",
    "resposta": "Charles de Gaulle",
    "distratores": [
      "François Mitterrand",
      "Georges Pompidou",
      "Jacques Chirac"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Adventures_of_Tintin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Adventures_of_Tintin",
        "situacao": "ok",
        "texto": "The Adventures of Tintin (French: Les Aventures de Tintin [lez‿avɑ̃tyʁ də tɛ̃tɛ̃]) is a series of 24 comic albums written and illustrated by Belgian cartoonist Hergé (pen name of Georges Remi). One of the most popular European comics of the 20th century, Tintin had been published in more than 70 languages with sales of more than 200 million copies by 2007, with the series also having been adapted \n[…]\nThe study of Tintin, sometimes referred to as \"Tintinology\", has become the life work of some literary critics in Belgium, France and the United Kingdom. Belgian author Philippe Goddin has written Hergé et Tintin reporters: Du Petit Vingtième au Journal Tintin (1986, later republished in English as Hergé and Tintin Reporters: From \"Le Petit Vingtième\" to \"Tintin\" Magazine in 1987) and Hergé et les Bigotudos (1993) amongst other books on the series.\n[…]\nThe Adventures of Tintin (1992–93) radio series was produced by BBC Radio 5. The dramas starred Richard Pearce as Tintin and Andrew Sachs as Snowy. Captain Haddock was played by Leo McKern in Series One and Lionel Jeffries in Series Two, Professor Calculus was played by Stephen Moore and Thomson and Thompson were played by Charles Kay.\n[…]\nA musical based on The Seven Crystal Balls and Prisoners of the Sun premièred on 15 September 2001 at the Stadsschouwburg (City Theatre) in Antwerp, Belgium. It was entitled Kuifje – De Zonnetempel (De Musical) (\"Tintin – Temple of the Sun (The Musical)\") and was broadcast on Canal Plus, before moving on to Charleroi in 2002 as Tintin – Le Temple du Soleil – Le Spectacle Musical.\n[…]\nIn 2006–2012 France issued the Comic Strip Heroes commemorative coin series featuring famous Franco-Belgian comics, beginning in 2006 with Tintin.\n[…]\nIn 1966, Charles de Gaulle said: \"Basically, you know, my only international rival is Tintin! We are the little ones who don't let themselves be fooled by the big ones\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/As_Aventuras_de_Tintim",
        "situacao": "ok",
        "texto": "As Aventuras de Tintim (no original em francês, Les aventures de Tintin) é o título de uma série de histórias em quadrinhos (banda desenhada, em Portugal) criada pelo autor belga Georges Prosper Remi, mais conhecido como Hergé, em 1929.\n[…]\nO herói das séries é o personagem epônimo Tintim, um repórter e aventureiro belga. Ele é auxiliado em suas aventuras desde o início por seu fiel cão Milu (Milou, em francês). Os dois apareceram pela primeira vez em 10 de janeiro de 1929, no Le Petit Vingtième, um suplemento infantil do jornal Le Vingtième Siècle. Mais tarde, o elenco foi expandido com a adição do Capitão Haddock, entre outros personagens pitorescos.\n[…]\nEle evoluiu para se tornar genuinamente heróico e até mesmo da alta sociedade, depois de encontrar um tesouro de seu ancestral Sir Francis Haddock (François de Hadoque em francês), no episódio O Tesouro de Rackham o Terrível. A natureza rude do capitão e seu sarcasmo representam uma contradição ao freqüente e improvável heroísmo de Tintim; ele sempre rompe com um comentário seco ou satírico quando o repórter parece demasiado idealista.\n[…]\nOs personagens secundários de Hergé já foram mencionados como muito mais desenvolvidos que os principais, cada um imbuído de força de temperamento e personalidade que se comparam aos personagens de Charles Dickens. Hergé usava os personagens secundários para criar um mundo realista onde colocar os protagonistas das aventuras. Para mais realismo e continuidade, os personagens voltariam às séries.\n[…]\nPortugal foi o primeiro país a internacionalizar Tintin.\n[…]\nA primeira loja totalmente dedicada a produtos sobre Tintim, The Tintin Shop, teve início em 1984 e estava localizada no Covent Garden, em Londres.\n[…]\n«Blog Tintim por Tintim»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Turma do Pererê",
      "descricao": "Revista em quadrinhos de Ziraldo protagonizada por um saci, publicada nos anos 1960"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O que o saci Pererê, dos quadrinhos dos anos 1960, e o Menino Maluquinho, de 1980, têm em comum?",
    "resposta": "O criador, Ziraldo",
    "distratores": [
      "O criador, Mauricio",
      "O criador, Henfil",
      "O criador, Angeli"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Turma_do_Perer%C3%AA"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Turma_do_Perer%C3%AA",
        "situacao": "ok",
        "texto": "A Turma do Pererê é uma série de histórias em quadrinhos brasileira criada pelo autor e cartunista Ziraldo. Foi publicada primeiramente em cartuns em 1959 nas páginas da revista O Cruzeiro. Seus personagens foram criados em 1958. Foi a primeira revista brasileira em quadrinhos que era totalmente colorida.\n[…]\nSegundo Ziraldo em sua autobiografia, \"o Pererê, no dizer de Moacy Cirne, era um dos símbolos da época. Um tempo em que se acreditava que, pelas idéias, poderíamos mudar nossa história\". As histórias se passavam na floresta fictícia brasileira \"Mata do Fundão\".\n[…]\nJá foi citado uma vez, que Ziraldo tirou como base as histórias do Sítio do Picapau Amarelo para criação de seus personagens.[carece de fontes]?\n[…]\nDesde então os quadrinhos do Pererê passaram a ser apenas republicados em almanaques nos demais anos, com algumas poucas histórias inéditas dentro deles. Até que em 1980, Ziraldo dedicou-se às histórias do Menino Maluquinho.\n[…]\nOs quadrinhos ganharam um seriado chamado A Turma do Pererê, sendo exibida entre 2002 e 2004 na TVE Brasil. Posteriormente, passou a ser exibido na TVE Brasil, na TV Cultura e em outras TVs públicas. A série foi filmada em película de 16mm, a partir de dezembro de 1998, em 20 episódios de 20 minutos cada um, na cidade mineira de Tiradentes. O Pererê foi interpretado pelo ator Silvio Guindane, e depois por Raphael Logam.\n[…]\nOs personagens da Turma do Pererê frequentemente são referenciados em filmes e desenhos baseados nos personagens de Ziraldo. No filme Menino Maluquinho - O Filme ocorre uma cena em que Maluquinho compra uma revista do Pererê em uma banca de jornais. No desenho Chapeuzinho de Todas as Cores a cada episódio sempre aparece um pôster diferente no quarto da Chapeuzinho mostrando um personagem da Turma do Pererê.[carece de fontes]?"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Doutor Estranho",
      "descricao": "Stephen Strange, cirurgião que vira Mago Supremo nos quadrinhos da Marvel, estreou em 1963"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que desenhista, também cocriador do Homem-Aranha, criou em 1963 o mago Doutor Estranho?",
    "resposta": "Steve Ditko",
    "distratores": [
      "Jack Kirby",
      "John Romita",
      "Don Heck"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Doctor_Strange"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Doctor_Strange",
        "situacao": "ok",
        "texto": "Doctor Strange is a superhero appearing in American comic books published by Marvel Comics. Created by artist Steve Ditko with scripting by Stan Lee, the character first appeared in Strange Tales #110 (cover dated July 1963). Doctor Strange serves as the Sorcerer Supreme, the primary protector of the Earth dimension against magical and mystical threats.\n[…]\nArtist Steve Ditko and writer Stan Lee have described the character as having been originally the idea of Ditko, who wrote in 2008, \"On my own, I brought in to Lee a five-page, penciled story with a page/panel script of my idea of a new, different kind of character for variety in Marvel Comics. My character wound up being named Dr. Strange because he would appear in Strange Tales.\" In a 1963 letter to Jerry Bails, Lee called the character Ditko's idea, saying:\n[…]\nSteve Ditko contributed some of his most surrealistic work to the comic book and gave it a disorienting, hallucinogenic quality. Dr. Strange's adventures take place in bizarre worlds and twisting dimensions that resembled Salvador Dalí paintings. Inspired by the pulp fiction magicians of Stan Lee's childhood as well as by contemporary Beat culture, Dr. Strange remarkably predicted the youth counterculture's fascination with Eastern mysticism and psychedelia.\n[…]\nCreated by writer Stan Lee and artist Steve Ditko, it first appeared in \"The Origin of Dr. Strange\", an eight-page story in Strange Tales #115 (December 1963). In designing the Eye, Ditko drew inspiration from the Eyes of Buddha, a Nepali symbol meant to protect its wearer against evil.\n[…]\nDoctor Strange appears in the Spider-Man and His Amazing Friends episode \"7 Little Superheroes\", voiced by John Stephenson.\n[…]\nTwo versions of Doctor Strange, \"Stephen Strange\" and the \"Sorcerer Supreme\", appear as playable characters in Marvel Puzzle Quest.\n[…]\nDoctor Strange at Marvel.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Doutor_Estranho",
        "situacao": "ok",
        "texto": "Dr Stephen Vincent Strange, mais conhecido como Doutor Estranho (em inglês: Doctor Strange), é um super-herói fictício pertencente ao universo da Marvel Comics. Criado pelo desenhista Steve Ditko em 1963, fez sua primeira aparição na revista Strange Tales #110 (julho de 1963), apresentado como o \"Mestre da Magia Negra\" e principal protetor da Terra contra ameaças mágicas e místicas.\n[…]\nStephen Vincent Strange, o Mago Supremo ou Mestre das Artes Místicas, é um super-herói diferente do Universo Marvel, criado pelo desenhista Steve Ditko em 1963, na revista em quadrinhos de terror Strange Tales #110 em primeiro de julho deste ano.\n[…]\nO artista Steve Ditko e o escritor Stan Lee descreveram o personagem como tendo sido originalmente ideia de Ditko, que escreveu em 2008: \"Por conta própria, eu trouxe para Lee uma história desenhada a lápis de cinco páginas com um roteiro de página/painel de minha autoria sobre um tipo novo e diferente de personagem para variedade na Marvel Comics. Meu personagem acabou sendo chamado de Dr. Estranho porque ele apareceria em Strange Tales.\"\n[…]\nEm uma carta de 1963 para Jerry Bails, Stan Lee confirmou que o personagem era uma ideia de Steve Ditko: \"Bem, temos um novo personagem em desenvolvimento para Strange Tales (apenas um filler de cinco páginas chamado Dr. Estranho). Steve Ditko vai desenhá-lo. Tem uma espécie de tema de magia negra. A primeira história não é nada boa, mas talvez possamos fazer algo com ele — foi ideia de Steve e resolvi dar uma chance, embora, novamente, tivemos que apressar demais a primeira.\n[…]\nDoutor Estranho apareceu em Homem-Aranha e Seus Amigos, com voz de John Stephenson. No episódio \"7 Little Superheroes\", ele ao lado de Homem-Aranha, Homem de Gelo, Firestar, Capitão América, Namor e Shanna, são convidados para a casa do Camaleão na Ilha dos Lobos para que os heróis possam se livrar deles.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "A Saga do Tio Patinhas",
      "descricao": "Série em quadrinhos dos anos 1990 que conta a vida de Tio Patinhas, da infância na Escócia à fortuna"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Nos anos 1990, que quadrinista americano contou toda a vida do Tio Patinhas na série A Saga do Tio Patinhas?",
    "resposta": "Don Rosa",
    "distratores": [
      "Carl Barks",
      "Floyd Gottfredson",
      "Romano Scarpa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Life_and_Times_of_Scrooge_McDuck"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Life_and_Times_of_Scrooge_McDuck",
        "situacao": "ok",
        "texto": "The Life and Times of Scrooge McDuck (often stylized as The Life and Times of $CROOGE MꟲDUCK; sometimes abbreviated as Life of $crooge or Lo$) is a 12-part comic book storyline written and drawn by Don Rosa, lettered by Todd Klein (American editions), first published by the Danish publisher Egmont in the magazine Anders And & Co. from 1992 to 1994 and later in English in Uncle Scrooge #285 through\n[…]\nIt follows the life of Scrooge McDuck from 1877 to 1947, the year of his real-life debut, working in almost every event about his past referenced in stories by Carl Barks. Rosa also drew the original cover of each chapter, and every chapter is laid out with four rows of panels per page. He later wrote several companion stories that fit between the original chapters.\n[…]\nThe Finnish composer Tuomas Holopainen released a concept album based on the book, titled Music Inspired by the Life and Times of Scrooge, the cover of which was illustrated by Don Rosa.\n[…]\n1967: According to Don Rosa's unofficial timeline, Scrooge McDuck died at the age of 100 years after a life of adventure.\n[…]\n\"The Sharpie of the Culebra Cut\" was first published in 2001 in the French Picsou Magazine #349, and its first American publication was in Uncle Scrooge No. 332 (August 2004). Its Inducks story code is F PM 01201, and it runs to 26 pages. The story is set in 1906. Rosa intended it as an \"in-between\" story to accompany his anthology The Life and Times of Scrooge McDuck, happening chronologically between \"The Invader of Fort Duckburg\" and \"The Empire-Builder from Calisota\", which makes it part 10B.\n[…]\nThe series has also been collected in volumes 4 and 5 of The Don Rosa Library (published by Fantagraphics as Uncle Scrooge and Donald Duck: The Don Rosa Library), where \"The Last of the Clan McDuck\" and \"The Richest Duck in the World\" served as the title stories of volumes 4 and 5 respectively.\n[…]\nThe Last of the Clan McDuck:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Saga_do_Tio_Patinhas",
        "situacao": "ok",
        "texto": "A Saga do Tio Patinhas é uma série de histórias em quadrinhos Disney escrita e desenhada pelo cartunista americano Don Rosa, entre 1992 e 1994.\n[…]\nComposta de doze capítulos originários e 5 extras, A Saga do Tio Patinhas reconta a vida de Patinhas Mac Patinhas, \"o pato mais rico do mundo\". Para isso Don Rosa utilizou de vários elementos das histórias em quadrinhos de Carl Barks, criador do Tio Patinhas. Nas histórias de Barks o pato revelava eventos do seu passado para seu sobrinho Donald, pois em algumas aventuras que eles viviam o fazia se recordar de alguma ocorrência similar em seu passado.\n[…]\nA saga conta de Patinhas desde a difícil infância em Glasgow, na Escócia, até hoje, onde é um quaquilionário, expressão usada nos seus quadrinhos. Em seu percurso, a história também mostra fatos importantes da vida do pato, como sua relação com a família, seu amor por Dora Cintilante, a sua ida para Patópolis, como construiu sua Caixa-Forte, como conheceu seus inimigos (e o que fez essa rivalidade ser criada) dentre outros, sempre batalhando para triunfar na vida e virar um pato bem-sucedido.\n[…]\nApesar da série ter o mesmo tom humorado e leve, típico das histórias em quadrinhos da Disney, a história demonstra um visível grau filosófico, além de ser muito bem estruturada, podendo assim, ser considerado uma Graphic novel, ganhadora do Prémio Will Eisner de Melhor Série Continuada em 1995.\n[…]\nA saga serviu de inspiração para o álbum chamado Music Inspired by the Life and Times of Scrooge do finlandês Tuomas Holopainen, tecladista da banda Nightwish, lançado em 2014.\n[…]\nA Saga do Tio Patinhas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Mafalda",
      "descricao": "Menina contestadora criada pelo cartunista argentino Quino"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Uma estátua da Mafalda sentada num banco é atração turística em qual bairro boêmio de Buenos Aires, onde Quino morou?",
    "resposta": "San Telmo",
    "distratores": [
      "La Boca",
      "Palermo",
      "Recoleta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mafalda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mafalda",
        "situacao": "ok",
        "texto": "Mafalda (Spanish: [maˈfalda]) is an Argentine comic strip written and drawn by cartoonist Quino. The strip features a six-year-old girl named Mafalda, who reflects the Argentine middle class and progressive youth, is concerned about humanity and world peace, and has an innocent but serious attitude toward problems. The comic strip ran from 1964 to 1973 and was very popular in Latin America, Europe\n[…]\nIn 1993 Cuban filmmaker Juan Padrón, a close friend of Quino, directed 104 short animated Mafalda films, backed by Spanish producers.\n[…]\nMafalda has occasionally been pointed out as being influenced by Charles Schulz's Peanuts, most notably by Umberto Eco, in 1968, who contrasted the two characters. While Eco thought of Mafalda and Charlie Brown as the unheard voices of children in the northern and southern hemispheres, Quino saw Mafalda as a socio-political strip, firmly rooted on family values. This is one of the reasons adults play a starring role in the strip, while they are never seen in the Charlie Brown universe.\n[…]\nQuino does, however, acknowledge the influence of Schulz's work on his, in that Quino extensively studied Schulz's books in preparation for an advertising campaign he was working on in 1963. The advertising campaign was scrapped but he reused some of the material for the Mafalda series a year later.\n[…]\nIn 2009, a life-sized statue of Mafalda was installed in front of Quino's old home in the San Telmo neighborhood of Buenos Aires.\n[…]\nIn 2014, a life-sized statue of Mafalda was installed in Campo de San Francisco, a park located in Oviedo, Principality of Asturias' capital (northern Spain), after the Princess of Asturias Awards was conferred to Quino, for the creation of Mafalda, in the category of Communications and Humanities.\n[…]\nHistory of Mafalda in Spanish\n[…]\nMafalda Online Archived 2005-10-18 at the Wayback Machine\n[…]\nUNESCO Courier interview with Quino\n[…]\nMafalda at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mafalda",
        "situacao": "ok",
        "texto": "Mafalda foi uma tira escrita e desenhada pelo cartunista argentino Quino. As histórias, apresentando uma menina (Mafalda) preocupada com a humanidade e a paz mundial que se rebela com o estado atual do mundo, apareceram de 1964 a 1973, usufruindo de uma altíssima popularidade na América Latina e Europa.\n[…]\nUma semana mais tarde, dia 15 de março de 1965, Mafalda começou a aparecer diariamente no Mundo de Buenos Aires, permitindo ao autor cobrir eventos correntes mais detalhadamente. As personagens Manolito e Susanita foram criadas nas semanas seguintes, e a mamãe de Mafalda estava grávida quando o jornal faliu em 22 de dezembro de 1967.\n[…]\nDesde então, Quino ainda desenhou Mafalda algumas poucas vezes, principalmente para promover campanhas sobre os Direitos Humanos. Por exemplo, em 1976 ele fez um pôster para a UNICEF ilustrando a Declaração Universal dos Direitos da Criança. Em 1979 foi lançado um filme da personagem, com direção de Carlos Márquez.\n[…]\nA obra foi editada em 16 idiomas e mais de 30 países. Na cidade de Buenos Aires existe uma praça chamada Mafalda.\n[…]\nEl Mundo de Mafalda (1981) (desenho animado)\n[…]\nApesar de Quino ser contrário à ideia de uma adaptação ao cinema ou teatro, duas séries de curtas animados com Mafalda foram produzidas. A primeira, uma série de 260 filmes de 90 segundos, foi produzida por Daniel Mallo para a televisão argentina a partir de 1972. Estes foram adaptados para um longa-metragem por Carlos Márquez em 1979 e lançado em 1981. Permanece relativamente desconhecido.\n[…]\nEm 1993, o cineasta cubano Juan Padrón, um amigo próximo de Quino, dirigiu 104 curtas-metragens animados de Mafalda, apoiados por produtores espanhóis.\n[…]\nEm 2024, uma série animada de Mafalda exclusiva para a Netflix foi anunciada, será escrita pelo diretor Juan José Campanella.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Pantera Negra",
      "descricao": "T'Challa, rei do país africano fictício de Wakanda, super-herói da Marvel criado por Stan Lee e Jack Kirby em 1966"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Antes de ganhar revista própria, o Pantera Negra estreou em 1966 nas páginas de qual equipe da Marvel?",
    "resposta": "Quarteto Fantástico",
    "distratores": [
      "Vingadores",
      "X-Men",
      "Defensores"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Panther_(character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Panther_(character)",
        "situacao": "ok",
        "texto": "Black Panther is a superhero appearing in American comic books published by Marvel Comics. Created by scripter-editor Stan Lee and plotter-artist Jack Kirby, the character first appeared in Fantastic Four #52 (July 1966). Born T'Challa, son of the previous Black Panther T'Chaka, he is the king and protector of the fictional African nation of Wakanda, a technologically advanced society sustained by\n[…]\nBlack Panther first appeared in Fantastic Four #52, published in July 1966, and the following issue in August of the same year. There was some debate at Marvel, with Lee wondering how far to go with the introduction of a Black superhero, which was commercially risky in that era. In the first version of the cover for Fantastic Four #52, Kirby drew the Black Panther wearing a cowl that exposed his face. In the published version, the cowl became a full facemask.\n[…]\nT'Challa calls on an elite and secret group of superheroes to face a new threat to the universe and all alternative universes. This group, the Illuminati, includes Mister Fantastic, Doctor Strange, Iron Man, Black Bolt, Beast, and Namor. T'Challa has discovered incursions from parallel Earths that could lead to the destruction of universes. T'Challa must temporarily put his animosity toward Namor aside, though Black Panther vows to kill Namor when the crisis passes.\n[…]\nBlack Panther has \"peak human\" athletic abilities and is one of the most effective fighters in hand-to-hand combat in the Marvel Universe. In his first published appearance, he holds his own against all of the members of the Fantastic Four single-handedly. For decades after, he was represented as much less formidable, with no distinct powers. Christopher Priest believes this was one of the reasons why the character was under-utilized.\n[…]\nBlack Panther has also featured in several video games, such as Marvel: Ultimate Alliance, voiced by Phil LaMarr."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pantera_Negra_%28Marvel_Comics%29",
        "situacao": "ok",
        "texto": "Pantera Negra (em inglês: Black Panther) é um super-herói das histórias em quadrinhos publicadas pela Marvel Comics, cuja identidade  secreta é a de T'Challa, rei de Wakanda, um reino fictício na África. O personagem foi criado pelo escritor e editor Stan Lee e pelo escritor e ilustrador Jack Kirby, aparecendo pela primeira vez em Fantastic Four nº 52 (julho de 1966) na Era de Prata das histórias \n[…]\nApós sua estreia em Quarteto Fantástico nº 52-53 (julho-agosto de 1966) e a aparições subsequentes como convidado em Fantastic Four Annual nº5 (1967) e ao lado do Capitão América em Tales of Suspense nº 97-99 (janeiro-março de 1968) e Captain America #100 (janeiro – abril de 1968), o Pantera Negra viajou da nação africana fictícia de Wakanda para Nova York, a fim de se juntar à equipe de super-heróis Vingadores em The Avengers nº 52 (maio de 1968), aparecendo nesta revista nos próximos anos.\n[…]\nO soberano formou uma amizade com o Quarteto Fantástico, se tornando um aliado. Eles ajudaram T'Challa que, por sua vez, os ajudou contra o Homem Psíquico. O que o leva a ser convidado pelo próprio Capitão América. Pantera Negra viajou da nação africana fictícia de Wakanda para Nova York, para se juntar à equipe de super-heróis Vingadores, aparecendo na revista do grupo nos próximos anos.\n[…]\nNo arco de história Age of Ultron, o Pantera Negra contata o Quarteto Fantástico e os informa que Ultron invadiu a Terra com um exército de Sentinelas Ultron. Pantera Negra foi mais tarde visto com o Hulk Vermelho e o Treinador em Chicago espionando alguns Sentinelas Ultron.\n[…]\nO Pantera Negra aparece no episódio \"Prey of the Black Panther\" da série animada Fantastic Four, o personagem foi interpretado por Keith David. Ele pede ao Quarteto Fantástico para ajudá-lo salvar Wakanda da invasão do Garra Sônica. Ele também faz uma aparição no episódio \"Hopelessly Impossible\".\n[…]\nBlack Panther Marvel Universe Wiki",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Asterix",
      "descricao": "Guerreiro gaulês baixinho criado por René Goscinny e Albert Uderzo em 1959"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1959, Asterix estreou no primeiro número de qual revista francesa de quadrinhos?",
    "resposta": "Pilote",
    "distratores": [
      "Spirou",
      "Le Journal de Tintin",
      "Charlie Hebdo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pilote"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pilote",
        "situacao": "ok",
        "texto": "Pilote (French: [pilɔt]), for a while subtitled the magazine of Asterix and Obelix (French: Le Journal D’Astérix et D’Obélix ) was a French comics magazine published from 1959 to 1989. Showcasing most of the major French or Belgian comics talents of its day the magazine introduced major series such as Astérix, Barbe-Rouge, Blueberry, Achille Talon, and Valérian et Laureline.\n[…]\nPilote also published several international talents such as Hugo Pratt, Frank Bellamy and Robert Crumb.\n[…]\nFollowing the release of a teaser, issue number 0, on June 1, Pilote officially launched on October 29, 1959.\n[…]\nThe first issue of Pilote was met with overwhelming demand, selling out all 300,000 copies in a single day.\n[…]\nAttempts were made in the 1970s to update the magazine with material of more interest to adults, but many artists like Druillet and Giraud felt Pilote was no longer the appropriate vehicle for their aspirations and left to found new magazines such as Métal Hurlant (the French original that inspired Heavy Metal). Partly as a result, Dargaud reduced Pilote’s publication schedule from weekly to monthly in 1974, and René Goscinny was replaced as editor-in-chief.\n[…]\nAt this time, a new generation of artists also started publishing in Pilote, namely Caza, Lauzier, and F'Murr. Their comics reflected the new, more adult direction.\n[…]\nSales initially improved but a steady erosion took place through the 1980s as interest in the medium declined. Pilote was merged with the comics magazine Charlie Mensuel in 1986 and continued as Pilote et Charlie until 1988, when the name was changed back to Pilote. However, declining sales prompted Dargaud to suspend publication after what became the final issue on 1 October 1989.\n[…]\nSempé: Petit Nicolas (1959–1965)\n[…]\nAlbert Uderzo: Asterix (1959–1973), Tanguy et Laverdure (1959–1967)\n[…]\nLa mémoire de Pilote issue descriptions on BDoubliées (in French)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pilote",
        "situacao": "ok",
        "texto": "Pilote ( francês: [pilɔt]  ) foi uma revista de quadrinhos francesa publicada de 1959 a 1989. Contando com a maioria dos principais talentos dos quadrinhos franco-belgas da época, a revista apresentou grandes séries como Astérix, Barbe-Rouge, Blueberry, Achille Talon e Valérian et Laureline .\n[…]\nApós a publicação de uma edição teaser número 0 em 1º de junho,  a Pilote estreou em 29 de outubro de 1959. A revista foi iniciada pelos experientes escritores de quadrinhos Goscinny e Charlier e pelos artistas Albert Uderzo e Jean Hébrard. Essa equipe já havia trabalhado em vários outros projetos, criando o Le Supplément Illustré, um suplemento de cartum para jornais e fornecendo cartuns para a Radio-Télé, uma revista publicada pela Rádio-Luxemburgo.\n[…]\nA Pilote foi comercializada pela Rádio-Luxemburgo e apresentava editoriais escritos por personalidades populares da época. As 300.000 cópias da primeira edição esgotaram em um dia.\n[…]\nTentativas foram feitas na década de 1970 para atualizar a revista com material de maior interesse para os adultos, mas muitos artistas como Druillet e Giraud sentiram que a Pilote não era mais o veículo apropriado para suas aspirações e deixaram-na para fundar novas revistas como a Métal Hurlant (original francesa). que inspirou a Heavy Metal).\n[…]\nAs vendas melhoraram inicialmente, mas uma erosão constante ocorreu nos anos 80, à medida que o interesse pelo meio declinou. Pilote foi fundida com a revista de quadrinhos Charlie Mensuel em 1986 e continuou como Pilote et Charlie até 1988, quando o nome foi alterado novamente para Pilote . No entanto, o declínio nas vendas levou Dargaud a suspender a publicação após o que se tornou a edição final em 1º de outubro de 1989.\n[…]\nAlbert Uderzo: Asterix (1959–1973), Tanguy et Laverdure (1959–1967)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Kryptonita",
      "descricao": "Mineral fictício vindo do planeta Krypton, a principal fraqueza do Superman"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A kryptonita, a fraqueza do Superman, não apareceu primeiro nos gibis. Em que meio ela estreou, em 1943?",
    "resposta": "No rádio",
    "distratores": [
      "No cinema",
      "Na televisão",
      "No teatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kryptonite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kryptonite",
        "situacao": "ok",
        "texto": "Kryptonite is a fictional material that appears primarily in Superman stories published by DC Comics. In its best-known form, it is a green, crystalline material originating from Superman's home world of Krypton that emits a unique, poisonous radiation that can weaken and even kill Superman and other Kryptonians. Kryptonite radiation can be transmitted through any element except lead.\n[…]\nThe mineral kryptonite, not to be confused with the real element krypton, was officially introduced in the radio serial The Adventures of Superman, in the story \"The Meteor from Krypton\", broadcast in June 1943. An apocryphal story claims that kryptonite was introduced to incapacitate Superman, allowing Superman's voice actor Bud Collyer to take time off. This tale was recounted by Julius Schwartz in his memoir. However, historian Michael J. Hayde disputes this.\n[…]\nIn \"The Meteor from Krypton\", Superman is never exposed to kryptonite. If kryptonite allowed Collyer to take vacations, that was a fringe benefit discovered later. More likely, kryptonite was introduced as a plot device for Superman to discover his origin. Hayde may have mistaken 1943's \"The Meteor from Krypton\" for 1945's \"The Meteor of Kryptonite\", as Superman was exposed in the latter but not in the former.\n[…]\nIn the radio serial, Krypton is located in the same solar system as Earth, in the same orbit, but on the opposite side of the Sun. This provided an easy explanation for how kryptonite found its way to Earth. In the comics' Silver Age, Krypton is located in a distant solar system and much of the kryptonite that came to Earth was transported by the same \"space warp\" that baby Kal-El's rocket traversed.\n[…]\nMichael Pedler writes that \"Superman's Kryptonite remains a kind of pop-cultural shorthand\" for an \"Achilles' heel\".\n[…]\nThe Superman Homepage's section on kryptonite\n[…]\nHowstuffworks.com: \"How Kryptonite Works\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kryptonita",
        "situacao": "ok",
        "texto": "Nas histórias da DC Comics relacionadas ao Superman e a Supergirl (histórias em quadrinhos, filmes e séries de televisão), a kryptonita (português brasileiro) ou criptonite (português europeu) é um mineral que tem o efeito principal de enfraquecer o (de outro modo invulnerável) qualquer kryptoniano.\n[…]\nO primeiro encontro de Superman e da Supergirl com a kryptonita não aconteceu nos quadrinhos. Foi na verdade introduzida em 1943 na série de rádio do Superman, tanto como um elemento de roteiro como para permitir que o ator que interpretava o Superman, Bud Collyer, pudesse ocasionalmente descansar. Demorou até 1949 para que as histórias em quadrinhos incorporassem esta ideia, tanto como um perigo e fraqueza conveniente como para adicionar um elemento interessante para suas histórias.\n[…]\nA primeira ideia de Kryptonita foi criada em 1940 pelo co-criador do Superman e da Supergirl, Jerry Siegel, em uma história que envolvia um pedaço de Krypton, chamado de \"K-Metal\", que roubava a força de Superman enquanto dava aos terráqueos super-poderes.\n[…]\nCuriosamente, no filme de 2006 Superman Returns foi dada a fórmula química do mineral, que quase coincidiu com o mineral Jadarita, descoberto no mesmo ano. Lex Luthor foi o primeiro vilão que achou a kryptonita.\n[…]\nOriginalmente, o Universo DC possuía uma variedade de minerais coletivamente chamados de Kryptonita. A variedade mais comumente encontrada é verde, embora tenha sido colorida de vermelho na sua primeira aparição em Superman (1a. série) #61 (Novembro / Dezembro de 1949). Outras variedades de Kryptonita começaram a aparecer frequentemente a partir do final dos anos 50, alcançando um pico de aparições nas histórias do Superman dos anos 60.\n[…]\nA Kryptonita está presente em todos os filmes de Superman e Supergirl.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Zé Carioca",
      "descricao": "Papagaio malandro do Rio de Janeiro criado pela Disney nos anos 1940, estrela de quadrinhos publicados no Brasil"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O Zé Carioca nasceu de uma viagem de Walt Disney à América do Sul, num esforço dos Estados Unidos para ganhar aliados durante qual conflito?",
    "resposta": "Segunda Guerra Mundial",
    "distratores": [
      "Primeira Guerra Mundial",
      "Guerra Fria",
      "Guerra da Coreia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jos%C3%A9_Carioca",
      "https://en.wikipedia.org/wiki/Saludos_Amigos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jos%C3%A9_Carioca",
        "situacao": "ok",
        "texto": "José \"Zé\" Carioca ( zhoh-ZAY KARR-ee-OH-kə; Portuguese: [ʒuˈzɛ kaˈɾjɔkɐ]) is a cartoon anthropomorphic parrot created by American cartoonist and animator Walt Disney during a trip to Rio de Janeiro in 1941 as a resource to support the relations between Latin America and the US during World War II (as part of the Good Neighbor Policy). It is alleged by some journalists that Disney presented the cha\n[…]\nThe Walt Disney Company then incorporated the idea, being introduced in the 1942 film Saludos Amigos as a friend of Donald Duck, described by Time as \"a dapper Brazilian parrot, who is as superior to Donald Duck as the Duck was to Mickey Mouse.\" He speaks Portuguese. He returned in the 1944 film The Three Caballeros along with Donald and a Mexican rooster named Panchito Pistoles. José is from Rio de Janeiro, Brazil (thus the name \"Carioca\", which is a term used for a person born in Rio).\n[…]\nJosé also has a cameo appearance in the 2023 short film Once Upon a Studio, as part of the Walt Disney Animation Studios characters that take a group photo.\n[…]\nJosé and Panchito's costumes were extinct at the Disneyland Resort by 2011, but were re-Imagineered for Mickey's Soundsational Parade in May 2011. They now appear with Donald Duck and dancers with a float where Donald is trying to hit a Piñata. José and Panchito also regularly appear in the Walt Disney World Magic Kingdom parade, \"Move It! Shake It! MousekeDance It! Street Party\", which debuted in 2014 and continues through 2020.\n[…]\nIn 2002, José Carioca appears in the games of the Disney Sports series produced by Konami for Nintendo's GameCube and Game Boy Advance platforms, José is part of The TinyRockets teams alongside Huey, Dewey, and Louie, the games are Disney Sports Soccer (Association football), Disney Sports Basketball (basketball) and Disney Sports Football (American football).\n[…]\nJosé \"Joe\" Carioca in a Who's who in Duckburg"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Saludos_Amigos",
        "situacao": "ok",
        "texto": "Saludos Amigos (Spanish for \"Greetings, Friends\") is a 1942 American live-action/animated anthology film produced by Walt Disney and released by RKO Radio Pictures. Set in Latin America, the featurette is made up of four different segments; Donald Duck stars in two of them and Goofy stars in one. It also features the first appearance of José Carioca, the malandro Brazilian parrot. Saludos Amigos p\n[…]\nMickey Mouse and other Disney characters were popular in Latin America, and Walt Disney acted as ambassador. The tour, facilitated by Nelson Rockefeller, who had recently been appointed as Coordinator of Inter-American Affairs (CIAA), took Disney and a group of roughly twenty composers, artists, technicians, etc. from his studio to South America, mainly to Brazil and Argentina, but also to Chile, Bolivia and Peru.\n[…]\nWhen the bee flies out of his mouth, Donald sees a paint brush creating a brand-new character, José Carioca from Rio de Janeiro, Brazil, who shows Donald Duck around South America, lets him have a drink of cachaça with him, which is so spicy for Donald that he starts hiccuping, and introduces him to the samba (complete with the songs \"Aquarela do Brasil\" and \"Tico-Tico no Fubá\").\n[…]\nWalt Disney – himself\n[…]\nIt was later released on both VHS and DVD on May 2, 2000, under the Walt Disney Gold Classic Collection banner, and again on DVD on April 29, 2008, under the Classic Caballeros Collection banner. The film received a third DVD release on November 30, 2010, as a bonus Feature on the Walt & El Grupo DVD. A fourth release, the first on Blu-ray, was released on January 30, 2018, as Saludos Amigos and The Three Caballeros 75th Anniversary Edition 2-Movie Collection).\n[…]\nList of Walt Disney Pictures films\n[…]\nBerndt Morris, Elizabeth; Morris, Charles  Walt Disney and Diplomacy: The Musical Impact of Aquarela do Brasil  Latin American Music Center\n[…]\nSaludos Amigos at Disney A to Z"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Z%C3%A9_Carioca",
        "situacao": "ok",
        "texto": "Zé Carioca é o apelido (alcunha em português europeu) do papagaio José Carioca (nos Estados Unidos e nos Países Baixos, também chamado de Joe Carioca), personagem fictício desenvolvido no começo da década de 1940 pelos estúdios Walt Disney. Ele é retratado como o típico malandro carioca, sempre escapando dos problemas com o jeitinho característico. Sua primeira aparição foi no filme Saludos Amigos\n[…]\nO personagem brasileiro foi criado durante a Segunda Guerra Mundial, na verdade fez parte de uma estratégia chamada de política de boa vizinhança dirigida pelo governo dos Estados Unidos para melhorar as relações e obter apoio político dos países latino-americanos.\n[…]\nZé Carioca foi criado pelo próprio Walt Disney dentro do Hotel Copacabana Palace quando esteve no Brasil em 1941. Impressionado com a técnica de J. Carlos, cartunista que desenhava as versões brasileiras de personagens da empresa na revista O Tico Tico, Disney o convidou para trabalhar em Hollywood, mas o convite foi recusado por J. Carlos. Segundo alguns jornalistas, Walt Disney criou e enviou o personagem José Carioca para Carlos, dizendo esta ser uma homenagem ao cartunista.\n[…]\nAlém da revista própria, o papagaio possuía um almanaque. A primeira versão teve 21 edições, de maio de 1986 a fevereiro de 1995. Em dezembro de 2010, ganhou uma segunda versão, com periodicidade bimestral. Em maio de 2017, a revista foi cancelada para dar lugar ao retorno do Almanaque Disney.\n[…]\nAs incoerências e desatualização na composição do Zé Carioca, se explicam pelo fato de que o personagem não foi concebido com o objetivo do formato sequencial dos quadrinhos, mas sim para um breve curta homenageando a América Latina (que mais tarde tornar-se-iam dois). Não foi pensado no futuro que o personagem teria quando o próprio Walt Disney criou o personagem, que não era um favelado, sequer um caloteiro, apenas um entusiasta do Brasil.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Quarteto Fantástico",
      "descricao": "Equipe de super-heróis da Marvel criada por Stan Lee e Jack Kirby em 1961"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Numa viagem experimental ao espaço, o Quarteto Fantástico ganhou seus poderes depois de ser atingido pelo quê?",
    "resposta": "Raios cósmicos",
    "distratores": [
      "Radiação gama",
      "Um meteoro",
      "Picada radioativa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fantastic_Four"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fantastic_Four",
        "situacao": "ok",
        "texto": "The Fantastic Four, often abbreviated as FF, is a superhero team appearing in American comic books published by Marvel Comics. The team debuted in The Fantastic Four #1 (cover-dated November 1961), helping usher in a new level of realism in the medium. It was the first superhero team created by artist/co-plotter Jack Kirby and editor/writer Stan Lee, and through this title the \"Marvel method\" styl\n[…]\nThe story frequently cited as Lee and Kirby's finest achievement is the three-part \"Galactus Trilogy\" that began in Fantastic Four #48 (March 1966), chronicling the arrival of Galactus, a cosmic giant who wanted to devour the planet, and his herald, the Silver Surfer. Fantastic Four #48 was chosen as #24 in the 100 Greatest Marvels of All Time poll of Marvel's readers in 2001.\n[…]\nIn the storyline Point of Origin, the Fantastic Four entrust Alicia, H.E.R.B.I.E., Franklin and Valeria to protect Earth while they begin their mission to learn a further origin of the cosmic radiation that granted them their powers in the first place, piloting a new space ship called Marvel-2. While in the middle of a space adventure to find the origin, the Fantastic Four are attacked by a group who believed themselves to be the superheroes of Planet Spyre, the Unparalleled.\n[…]\nThe Fantastic Four is formed after four civilian astronauts are exposed to cosmic rays during an unauthorized outer space test flight in an experimental rocket ship designed by Dr. Reed Richards. Pilot Ben Grimm and crew-members Susan Storm and her brother Johnny Storm survive an emergency crash-landing in a field on Earth. Upon exiting the rocket, the four discover they have developed incredible superpowers and decide to use these powers to help others.\n[…]\nThe Fantastic Four: First Steps was released in the United States on July 25, 2025.\n[…]\nMaximum Fantastic Four\n[…]\nFantastic Four at the Comic Book DB (archived from the original)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quarteto_Fant%C3%A1stico",
        "situacao": "ok",
        "texto": "O Quarteto Fantástico é uma equipe de super-heróis de histórias em quadrinhos publicados pela Marvel Comics. O grupo estreou em The Fantastic Four #1 (data de novembro 1961), que ajudou a inaugurar um novo nível de realismo no meio. O Quarteto Fantástico foi o primeiro time de super-herói criado pelo escritor-editor Stan Lee e o ilustrador Jack Kirby, que desenvolveram uma abordagem colaborativa p\n[…]\nComo a maioria dos personagens criados pela Marvel durante a década de 1960, o Quarteto Fantástico deve os seus poderes à exposição a radiação, neste caso mais especificamente à radiação cósmica, com a qual teriam entrado em contacto durante uma viagem de exploração espacial.\n[…]\nEmbora a formação do grupo mude ocasionalmente, a equipe mantêm-se estável em volta dos quatro amigos que ganharam superpoderes ao serem atingidos pelos raios cósmicos.\n[…]\nOs super-poderes do Quarteto Fantástico foram obtidos quando um foguete espacial experimental projectado por Reed Richards atravessou uma tempestade de raios cósmicos durante seu voo experimental. Depois da aterrissagem forçada de regresso à Terra, os quatro tripulantes da nave descobriram que se tinham transformado e possuíam novas e bizarras habilidades.\n[…]\nA equipe de aventureiros, passou a proteger a humanidade, a Terra e o Universo de inúmeras ameaças. Incentivados principalmente pela curiosidade científica de Reed, a equipe explorou o espaço, a Zona Negativa, o Microverso, outras dimensões e quase cada vale escondido, nação ou civilização perdida do planeta. O Quarteto faz a ponte entre personagens mais \"cósmicos\" da Marvel, tais como o Surfista Prateado ou o Vigia e os mais \"terrestres\", Homem-Aranha e X-Men.\n[…]\nQuarteto Terrível\n[…]\nFantastic Four: Fireworks #1–3\n[…]\nFantastic Four: The End #1—6 (2006—2007)\n[…]\nFantastic Four: The World's Greatest Comics Magazine #1–12\n[…]\nFantastic Four: Unstable Molecules #1–4\n[…]\nA origem do Quarteto Fantástico nos quadrinhos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Demolidor",
      "descricao": "Super-herói cego da Marvel, identidade do advogado Matt Murdock"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Ainda menino, Matt Murdock salvou um homem de ser atropelado por um caminhão e perdeu a visão. O que o cegou?",
    "resposta": "Uma substância radioativa",
    "distratores": [
      "Um choque elétrico",
      "Uma explosão química",
      "Uma pancada na cabeça"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Daredevil_(Marvel_Comics_character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Daredevil_(Marvel_Comics_character)",
        "situacao": "ok",
        "texto": "Daredevil is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Bill Everett, with some input from Jack Kirby, the character first appeared in Daredevil #1 (April 1964).\n[…]\nJack instills in Matt the importance of education and nonviolence with the aim of seeing his son become a better man than himself. In the course of saving a blind man from the path of an oncoming truck, Matt is blinded by a radioactive substance that falls from the vehicle. The radioactive exposure heightens his remaining senses beyond normal human limits, and gives him a kind of \"radar\" sense, enabling him to detect the shape and location of objects around him.\n[…]\nAs a youth, Matt Murdock pushes an older man out of the way of a careening, out-of-control truck containing chemicals; while Matt manages to push the man out of the path of the truck, the truck crashes and spills its radioactive chemical contents onto Matt. The accident blinds him but gives him enhanced senses and powers that give him extraordinary perception of his environment. Matt is mentored by Stick, a mysterious sensei.\n[…]\nDaredevil's radioactive accident led him to develop a \"radar-sense\", mentioned along with his first appearance. This seems generally synonymous with echolocation. Frank Miller's interpretation of the character makes his abilities somewhat more toned down and realistic. For example, his radar sense is less like clear vision and more like a \"proximity\" sense Miller derived from the comments of some martial artists.\n[…]\nIn the original comics, the characters were even implied to be the pet turtles of Matt Murdock, who mutated as a result of the same accident that gave him superpowers."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Demolidor",
        "situacao": "ok",
        "texto": "O Demolidor (no original: Daredevil) é um personagem fictício que aparece nas histórias em quadrinhos estadunidenses publicadas pela Marvel Comics. Criado pelo escritor e editor Stan Lee e pelo artista Bill Everett, com algumas contribuições de Jack Kirby, o personagem apareceu pela primeira vez em Daredevil #1 (abril de 1964).\n[…]\nJack incute em Matt a importância da educação e da não violência com o objetivo de ver seu filho se tornar um homem melhor do que ele. No curso de salvar um homem cego do caminho de um caminhão que se aproxima, Matt fica cego por uma substância radioativa que cai do veículo. A exposição radioativa aumenta seus sentidos restantes além dos limites humanos normais e lhe dá uma espécie de sentido de \"radar\", permitindo-lhe detectar a forma e a localização dos objetos ao seu redor.\n[…]\nDeMatteis devolveu o Demolidor ao seu traje vermelho tradicional e à identidade de Matt Murdock.\n[…]\nA minissérie Daredevil: Yellow, de 2001, apresentou outra versão das origens do Demolidor, pretendendo ilustrar cartas escritas a Karen Page após sua morte. A série retrata a rivalidade inicial entre Matt Murdock e Foggy Nelson pela afeição de Page e incorpora muitos eventos retratados nas primeiras edições de Demolidor. Os supervilões Coruja e Homem-Púrpura aparecem como antagonistas.\n[…]\nUm dia, um idoso cego atravessava a rua, e se não fosse por Matt, teria sido atropelado por um caminhão. O caminhão bate e um tubo radioativo acaba se quebrando e cai no rosto de Matt, cegando-o por toda a sua vida. Enquanto se recuperava no hospital, Matt descobriu que seus quatro sentidos foram ampliados a níveis sobre-humanos. Ele também desenvolveu uma espécie de radar sensorial, que é similar a ecolocalização\n[…]\nCharlie Cox reprisa seu papel como Matt Murdock em uma aparição em Spider-Man: No Way Home (2021).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Hagar, o Horrível",
      "descricao": "Tira de jornal americana de Dik Browne, sobre um viking barrigudo e beberrão"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na tira de Dik Browne, como se chama a esposa mandona do viking Hagar, o Horrível?",
    "resposta": "Helga",
    "distratores": [
      "Honi",
      "Brunilda",
      "Ingrid"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/H%C3%A4gar_the_Horrible"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/H%C3%A4gar_the_Horrible",
        "situacao": "ok",
        "texto": "Hägar the Horrible is the title and main character of an American comic strip created by cartoonist Dik Browne and syndicated by King Features Syndicate. It first appeared on February 4, 1973  (in Sunday papers) and the next day in daily newspapers, and was an immediate success. Following  Browne's retirement in 1988, his son Chris Browne continued the strip until his 2017 retirement, with artwork\n[…]\nHoni: Hägar and Helga's beloved, beautiful, sweet, cheerful 16-year-old daughter—dressed as a young Valkyrie with a winged helmet, metallic breastplate and a long skirt made of chainmail. Honi takes after Hägar's side of the family, a fact that her boyfriend Lute sometimes finds intimidating. She's a Viking warrior like her father, her weapons of choice are a spear and shield. However, she's clueless about traditional \"girlish\" things, and tends to be overdramatic.\n[…]\nHägar returns from looting Paris with a present for his wife, Helga.\n[…]\nHägar blames Helga for allowing Honi to date Lute and being okay with Hamlet reading books and doing homework. Hägar breaks up Honi and Lute, and trains Hamlet in archery and other Viking venues in a single day. However, after seeing how unhappy his children have become, as well as other Vikings calling Honi and Hamlet weird, Hägar immediately takes charge and sets things right again, with Helga as his somewhat silent, but kind, supporter.\n[…]\nThe special starred the voices of Peter Cullen as Hägar, Lainie Kazan as Helga, Lydia Cornell as Honi, Josh Rodine as Hamlet, Jeff Doucette as Lucky Eddie, Don Most as Lute and Frank Welker as Snert, the Narrator, and the Viking Academy's Principal.\n[…]\nHägar the Horrible: Helga's Revenge (1983) Tempo\n[…]\nHägar the Horrible's Very Nearly Complete Viking Handbook by Dik Browne, Chris Browne (trade paperback, 1985) Workman Pub. ISBN 0-89480-937-7\n[…]\nDik Browne's Hägar the Horrible: Funny Bunnies by Chris Browne (1994) Jove"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hagar%2C_o_Horr%C3%ADvel",
        "situacao": "ok",
        "texto": "Hagar, o Horrível(BRA), Hagar, o Terrível(PRT) é uma tira em quadrinhos e uma banda desenhada, criada em 1973 por Dik Browne (Dik é apelido de Richard Arthur), distribuída a 1.900 jornais em 58 países e 13 idiomas.\n[…]\nHagar, o Horrível, o protagonista viquingue, é um guerreiro que frequentemente tenta invadir a Inglaterra e outros países. Embora respeitado profissionalmente (um dos maiores saqueadores e assassinos da Escandinávia), Hagar leva uma vida pessoal frustrada. Está sempre discutindo com a esposa Helga, que não está satisfeita com o padrão de vida que a família leva. Hagar é tanto um guerreiro feroz quanto um homem de família.\n[…]\nHelga: Esposa de Hagar, dona de casa e mandona, é a essência perfeita da figura da \"super-mãe\". Helga frequentemente discute com Hagar sobre os hábitos dele como esquecer de lavar as mãos, não limpar os pés antes de entrar ou até mesmo quando é que ele vai crescer. Ela vive tentando ensinar seus valores à moda antiga para a filha Honi, embora esta nunca entenda realmente. Sua aparência é baseada na personagem Brünnhilde, da ópera Valquíria, de Wagner.\n[…]\nKvack: É a pata alemã da família. Kvack é amiga e confidente de Helga - ela irá espionar Hagar e avisá-la quando ele faz algo que não deveria, como pedir mais uma cerveja ou demorar para voltar para casa. Obviamente, Hagar não gosta de Kvack e gostaria de se livrar dela. Sendo uma pata alemã, Kvack faz os \"quacks\" com sotaque. Mais tarde, na tira, ela trouxe para casa alguns patinhos que Helga trata como se fossem seus netos humanos.\n[…]\nA mãe de Helga, o estereótipo da sogra.\n[…]\nKoya, o Advogado, o desagradável advogado, carrasco e paranormal médium que Honi e Helga consultam regularmente.\n[…]\n«Hagar na King Features»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Zé Carioca",
      "descricao": "Papagaio malandro do Rio de Janeiro criado pela Disney nos anos 1940, estrela de quadrinhos publicados no Brasil"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No filme Você Já Foi à Bahia?, Zé Carioca e Pato Donald formam o trio dos Três Cavaleiros com qual galo mexicano?",
    "resposta": "Panchito",
    "distratores": [
      "Pancho Villa",
      "Speedy Gonzales",
      "Gastão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Three_Caballeros"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Three_Caballeros",
        "situacao": "ok",
        "texto": "The Three Caballeros is a 1944 American live-action/animated anthology film produced by Walt Disney and released by RKO Radio Pictures. The film premiered in Mexico City on December 21, 1944, and was released in the United States on February 3, 1945. It was later released in the United Kingdom in March 1945.\n[…]\nReturning to normal size, Donald meets Panchito, of Mexico. The trio take the name \"The Three Caballeros\" and meet a group of Mexican children who re-enact the journey of Mary and Joseph searching for room at the inn. When offered shelter in a stable, the festivities include the breaking of the piñata. Panchito gives Donald a piñata and tells him of the tradition behind it. José and Panchito blindfold Donald to have him break open the piñata.\n[…]\nJoaquin Garay as Panchito Pistoles\n[…]\nTrío Calaveras\n[…]\nThe first Disney product of this propaganda program was the animated film Saludos Amigos in 1942. This film introduced the character José Carioca—a Brazilian businessman taking the form of a parrot—who led Donald Duck around South America. The next major film was The Three Caballeros which brought together Donald Duck, José Carioca, and a new character from Mexico: Panchito Pistoles, a gun-toting revolutionary rooster. These Disney films were much more successful than previous propaganda efforts.\n[…]\nIn February 2001, José and Panchito performed with Donald in the House of Mouse episode \"The Three Caballeros\", voiced by Carlos Alazraqui (Pistoles) and Rob Paulsen (Carioca), appearing as recurring characters after that. In 2015, also makes an appearance in Mickey Mouse episode \"¡Feliz Cumpleaños!\" as performers at Mickey's birthday.\n[…]\nAlong with many other Disney characters, Panchito, José, and Donald appear in the updated It's a Small World ride at Disneyland during the section portraying Mexico."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Three_Caballeros",
        "situacao": "ok",
        "texto": "The Three Caballeros (prt: Caixinha de Surpresas, ou A Caixinha de Surpresas; bra: Você Já Foi à Bahia?)  é um filme estadunidense de animação produzido pela Disney em 1944. É o sétimo filme de animação dos estúdios Disney, sendo dirigido por Norm Ferguson. Clyde Geronimi, Jack Kinney e Bill Roberts atuaram como diretores de sequências.\n[…]\nUm dos apresentados é o Aracuã, ave de comportamento tresloucado que faz outras aparições aleatórias durante o resto do filme e que apareceu em quadrinhos brasileiros com o nome de \"Folião\". O segundo é um livro sobre o Brasil, entregue por Zé Carioca; e o terceiro é uma \"pinhata\", trazida por Panchito.\n[…]\nO filme possui sete segmentos com um tema central: presentes de aniversário do Pato Donald pelos seus amigos das Américas.\n[…]\nPanchito guia o giro pelo México de Donald e Zé Carioca, a bordo de um poncho voador. Muitas danças e canções são ouvidas enquanto Donald perde o controle ao sobrevoar as praias e se encantar pelas mulheres locais.\n[…]\nÉ o culminar de Donald romântico que recebe vários beijos. Donald e uma garota mexicana (Carmem Molina) dançam ao som de \"La Sandunga\", depois a mesma mulher conduz cactos que dançam \"Jesusita en Chihuahua\", canção típica revolucionária, novamente em uma cena que combina ação real ao vivo com  animação. De repente, um novo cenário se apresenta com Panchito, Zé Carioca e Donald tendo que lidar com um touro bravo.\n[…]\nEm 9 de junho de 2018, uma nova série animada de 13 episódios chamada Legend of the Three Caballeros foi produzida pela Disney Interactive com foco em aventuras e foi lançado no aplicativo DisneyLife nas Filipinas, em novembro do ano, Zé Carioca e Panchito aparecem no episódio \"The Town Where Everyone Was Nice!\" da segunda temporada do reboot de DuckTales.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Fantasma",
      "descricao": "Herói mascarado de roupa roxa criado por Lee Falk em 1936, o espírito que anda"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Qual destes heróis mascarados, todos americanos, foi o primeiro a estrear nos quadrinhos?",
    "resposta": "Fantasma",
    "distratores": [
      "Superman",
      "Batman",
      "Capitão América"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Phantom"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Phantom",
        "situacao": "ok",
        "texto": "The Phantom is an American adventure comic strip, first published by Lee Falk in February 1936. The main character, the Phantom, is a fictional costumed crime-fighter who operates from the fictional African country of Bangalla. The character has been adapted for television, film and video games.\n[…]\nComics historian Peter Coogan has described the Phantom as a \"transitional\" figure, since the Phantom has some of the characteristics of pulp magazine heroes such as The Shadow and the Spider and earlier jungle heroes such as Tarzan, as well as anticipating the features of comic book heroes such as Superman, Batman, and Captain America.\n[…]\nIn the A&E American cable TV documentary The Phantom: Comic Strip Crusader, Falk explained that Greek busts inspired him to omit the Phantom's pupils when the character was wearing his mask.\n[…]\nBrazilian publisher RGE and German publisher Bastei produced original Phantom stories for their comic books; in Brazil, the Phantom is known as o Fantasma, and wore a red costume until 1990 due to printing issues that prevented the purple from being properly reproduced.\n[…]\n\"The Phantom's Treasure\", Ray Moore, July 14, 1941, PCC\n[…]\nAs of 2026, a live action TV series of The Phantom is in production. The series will be produced and directed by Reginald Hudlin.\n[…]\nDuring World War II, soldiers received care packages containing comics. The soldiers stationed in Papua New Guinea shared these comics, and the Phantom became extremely popular among the tribes. The Papuan people who could read English would read the stories and share the images with others; by the 1970s, they were available in Tok Pisin. The character's image is often painted on ceremonial shields or alongside other tribal art. This is sometimes referred to as \"tribal pop art\".\n[…]\nThe Phantom on IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Fantasma",
        "situacao": "ok",
        "texto": "O Fantasma é uma tira de jornal do gênero aventura criada pelo roteirista Lee Falk (também criador do Mandrake) e o desenhista Ray Moore, contando as aventuras de um combatente do crime, mascarado e usando uma roupa característica. O personagem atua em um fictício país africano chamado Bangalla. A série começou a ser publicada em jornais diariamente em 17 de fevereiro de 1936, e aos domingos, como\n[…]\nO Fantasma foi o primeiro herói fictício a  vestir um traje colante que se tornou uma marca registrada dos super-heróis de histórias em quadrinhos, e foi a primeira série a mostrar uma máscara sem pupilas visíveis (outro padrão de super-heróis).\n[…]\nO historiador de histórias em quadrinhos Peter Coogan descreveu o Fantasma como uma figura \"de transição\", uma vez que o Fantasma tem algumas das características de heróis de revistas pulp como The Shadow e The Spider, bem como antecipar as características de super-heróis de quadrinhos como Superman, Batman e Capitão América.\n[…]\nO Fantasma usa uma máscara preta e um uniforme roxo.\n[…]\nEm 2006 Moonstone publicou um retcon de origem do Fantasma, Legacy, por Raab e Quinn. Três anos depois, a empresa reintroduziu a série como The Phantom: Ghost Who Walks, começando com a edição 0 (uma releitura de origem do primeiro fantasma). O objetivo era criar um personagem mais sombrio, mais corajosos e mais realista, similar à versão da década de 1930.\n[…]\nA RGE publicou duas revistas sobre os heróis da australiana Frew: Em  1950 lançou a revista do Águia Negra dedicada ao Sir Falcon e em 1960, a revista Cavaleiro Fantasma, sobre o Phantom Ranger.\n[…]\nO último lançamento da Opera Gráfica antes de encerrar as suas actividades foi o livro teórico \"Fantasma - Biografia Oficial do Primeiro Herói Fantasiado dos Quadrinhos\" escrito por Marco Aurélio Lucchetti e organizada por Franco de Rosa (um dos proprietários da editora) e lançado em junho de 2009.\n[…]\nThe Phantom",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Charles M. Schulz",
      "descricao": "Cartunista americano, criador da tira Peanuts, com Charlie Brown e Snoopy"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Charles Schulz, criador de Charlie Brown e Snoopy, morreu em fevereiro de 2000. Isso aconteceu na véspera de quê?",
    "resposta": "Da última tira de Peanuts",
    "distratores": [
      "Do aniversário de Snoopy",
      "Do seu aniversário",
      "Da estreia de um filme"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_M._Schulz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_M._Schulz",
        "situacao": "ok",
        "texto": "Charles Monroe \"Sparky\" Schulz ( SHULZ; November 26, 1922 – February 12, 2000) was an American cartoonist who created the comic strip Peanuts, featuring the characters Charlie Brown and Snoopy.\n[…]\nIn 1950, Schulz redeveloped Li'l Folks as a four-panel comic strip and submitted it to United Features Syndicate, who renamed it Peanuts and began publishing that October. Schulz relocated to Northern California with his family in 1958. Beginning with A Charlie Brown Christmas in 1965, he helped write several animated television specials and four animated films based on his characters. He continued drawing Peanuts until his death in 2000.\n[…]\nCharlie Brown, the principal character of Peanuts, was named after a co-worker at Art Instruction Inc. Schulz drew much from his own life. Some examples include:\n[…]\nSchulz's son Craig has served as president of the Charles M. Schulz Creative Associates licensing company, located at One Snoopy Place in Santa Rosa, and has had a prominent role in modern Peanuts adaptations, including The Peanuts Movie (2015). Schulz's daughter Jill starred in the 1988 live action and animation hybrid Peanuts special It's the Girl in the Red Truck, Charlie Brown.\n[…]\nPeanuts on Parade has been St. Paul, Minnesota's tribute to its favorite native cartoonist. It began in 2000 with the placing of 101 5-foot-tall (1.5 m) statues of Snoopy throughout the city of St. Paul. Every summer for the following four years, statues of a different Peanuts character were placed on the sidewalks of St. Paul: Charlie Brown Around Town (2001), Looking for Lucy (2002), Linus Blankets St. Paul (2003) and Snoopy lying on his doghouse (2004).\n[…]\nSchulz's home page\n[…]\nCharles M. Schulz at Playbill Vault"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_M._Schulz",
        "situacao": "ok",
        "texto": "Charles Monroe Schulz (Mineápolis, 26 de novembro de 1922 — Santa Rosa, 12 de fevereiro de 2000) foi um cartunista americano, criador da série Peanuts e dos personagens Charlie Brown e seu cachorro da raça beagle chamado Snoopy, entre outros.\n[…]\nIniciou a série de desenhos do Snoopy (Peanuts) em 2 de outubro de 1950 e os desenhou por mais de 50 anos, até se aposentar em virtude de sua doença, em 14 de dezembro de 1999. Schulz faleceu em 12 de fevereiro de 2000, vitimado por um ataque cardíaco às 21h45, com 77 anos. Sua última tira foi publicada dois dias depois, 14 de fevereiro, uma tira em que se despedia de seus fãs e de seus personagens queridos.\n[…]\nSchulz faleceu de infarto agudo do miocárdio às 21:45 do dia 12 de fevereiro de 2000, em Saint Rosa. Foi enterrado no Cemitério Plesant Hill, em Sebastopol.\n[…]\nA biografia \"Peanuts and Schulz: A biography\", escrita por David Michaelis e lançada pela editora Harper Collins, revela que muito das tiras de Snoopy são uma espécie de autobiografia de seu criador.\n[…]\nSeus personagens são inspirados em pessoas do cotidiano de Charles Schulz, e alguns acontecimentos são referências a fatos de sua vida.\n[…]\nA personagem Lucy van Pelt é um exemplo. Sua personalidade mandona, impaciente e sarcástica foi inspirada em Joyce, primeira mulher de Schulz. Em Peanuts, Lucy importunava Charlie Brown e adorava tirar do lugar a bola de futebol no momento em que o garoto iria chutar.\n[…]\nCharlie Brown é o próprio Schulz na infância, um menino cujo pai falava alemão em casa e tinha uma barbearia (assim como o pai de Charlie Brown). E que por ter entrado na escola um ano antes que o correto, sempre foi o menor da classe, o mais franzino, sofria rejeição dos colegas de classe e ia mal nos esportes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Maus",
      "descricao": "Romance gráfico de Art Spiegelman sobre o Holocausto, vivido por seu pai"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em 1992, Maus, de Art Spiegelman, recebeu um prêmio especial de qual premiação americana de jornalismo e literatura?",
    "resposta": "Prêmio Pulitzer",
    "distratores": [
      "Prêmio Eisner",
      "Prêmio Hugo",
      "National Book Award"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maus",
        "situacao": "ok",
        "texto": "Maus, often published as Maus: A Survivor's Tale, is a graphic novel written and illustrated by American cartoonist Art Spiegelman, serialized from 1980 to 1991. It depicts Spiegelman interviewing his father about his experiences as a Polish Jew and Holocaust survivor. The work employs postmodern techniques and represents Jews as mice, Germans as cats, and Poles as pigs. Critics have classified Ma\n[…]\nIn 1992, it became the first graphic novel to win a Pulitzer Prize.\n[…]\nMala Spiegelman\n[…]\nInitially, critics of Maus showed a reluctance to include comics in literary discourse. The New York Times intended praise when saying of the book, \"Art Spiegelman doesn't draw comic books\". After its Pulitzer Prize win, it won greater acceptance and interest among academics. The Museum of Modern Art staged an exhibition on the making of Maus in 1991–92.\n[…]\nAn editor responded, \"Let's go out to Spiegelman's house and if a giant mouse answers the door, we'll move it to the nonfiction side of the list!\" The Times eventually acquiesced. The Pulitzer committee sidestepped the issue by giving the completed Maus a Special Award in Letters in 1992.\n[…]\nLiterary critic Walter Benn Michaels found Spiegelman's racial divisions \"counterfactual\". Spiegelman depicts Europeans as different animal species based on Nazi conceptions of race, but all Americans, both black and white, as dogs—with the exception of the Jews, who remain unassimilated mice. In Michaels view,  Maus seems to gloss over the racial inequality that has plagued the history of the U.S.\n[…]\nStereotypes of Jews in literature\n[…]\n\"1992: Art Spiegelman on the CREATION of MAUS\". BBC Archive. April 1, 1992 – via YouTube.\n[…]\nGross, Terry (February 11, 2022). \"'Maus' author Art Spiegelman shares the story behind his Pulitzer-winning work\". NPR. Audio and transcript excerpt from 1987 interview\n[…]\nSpiegelman discusses Maus with Paul Gravett - a British Library sound recording"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maus",
        "situacao": "ok",
        "texto": "Maus é um graphic novel do cartunista norte-americano Art Spiegelman, serializado de 1980 a 1991. O quadrinho retrata Spiegelman entrevistando seu pai acerca das experiências deste enquanto um judeu polonês e sobrevivente do Holocausto. A obra utiliza técnicas pós-modernistas e representa judeus como ratos, alemães como gatos, e poloneses como porcos. Críticos classificaram Maus como livro de memó\n[…]\nEm 1992, tornou-se o primeiro graphic novel a ganhar o prêmio Pulitzer.\n[…]\nA princípio, críticos de Maus relutaram em incluir os quadrinhos no discurso literário. O New York Times, na intenção de elogiar, disse do livro: \"Art Spiegelman não desenha revistas em quadrinhos\". Depois de ganhar o prêmio Pulitzer, Maus recebeu maior aceitação e interesse entre acadêmicos. Em 1991–92, o Museu de Arte Moderna de Nova Iorque montou uma exibição sobre a criação de Maus.\n[…]\nUm editor respondeu: \"Vamos à casa de Spiegelman e, caso um rato gigante atenda à porta, mudaremos o livro para a seção de não-ficção da lista!\" O Times, eventualmente, consentiu. O comitê do Pulitzer evitou a questão, concedendo à edição completa de Maus um \"Prêmio Especial em Literatura\" em 1992.\n[…]\nO crítico literário Walter Ben Michaels achou que as divisões raciais de Spiegelman \"iam de encontro aos fatos\". Spiegelman retrata europeus como diferentes espécies de animais baseando-se em \"concepções nazistas de raça, mas todos os americanos, tanto negros quanto brancos, são retratados como cachorros — com exceção dos judeus, que permanecem camundongos não-assimilados. Para Michaels, Maus parece maquiar as desigualdades raciais que contaminaram a história dos Estados Unidos.\n[…]\n(vídeo) Art Spiegelman and the Making of Maus\n[…]\nArt Spiegelman's MAUS: Working Through the Trauma of the Holocaust. Em Responses to the Holocaust, Universidade de Virgínia\n[…]\nSpiegelman discute Maus com Paul Gravett - gravação da British Library (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Mjolnir",
      "descricao": "Martelo mágico do deus Thor nos quadrinhos da Marvel"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Segundo a inscrição gravada no martelo Mjolnir, de Thor, quem consegue erguê-lo e receber o poder do deus do trovão?",
    "resposta": "Quem for digno",
    "distratores": [
      "Quem for asgardiano",
      "Quem for rei",
      "Quem for filho de Odin"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mjolnir_(comics)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mjolnir_(comics)",
        "situacao": "ok",
        "texto": "Thor Odinson is a superhero appearing in American comic books published by Marvel Comics, based on the Germanic god of the same name. Created by artist Jack Kirby, writer Stan Lee, and scripter Larry Lieber, the character first appeared in Journey into Mystery #83 (1962) and first received his own title with Thor #126 (1966). Comic books featuring Thor have been published across several volumes.\n[…]\nThor wields an enchanted hammer called Mjölnir which is crafted from the fictional metal uru, making it nearly indestructible. Wielding it improves his natural control over wind, rain, thunder, and lightning and weather. He can use the hammer to fly by throwing it into the air and grabbing the leather strap to pull himself off the ground. The hammer also allows Thor to travel between dimensions, moving him between Earth and Asgard.\n[…]\nMjolnir is enchanted so that it may only be lifted by those who are worthy. Another enchantment causes it to always return to its wielder when thrown. It previously gave Thor the ability to travel through time, but it has since lost this power. When Thor transforms into a human, Mjolnir takes the guise of a walking stick that he can use to transform back into Thor. During these times, being separated from the hammer for sixty seconds reverts him back to his human form.\n[…]\nOther characters have taken the title of Thor, including Jane Foster, Beta Ray Bill, Eric Masterson, Volstagg, and Storm. The Marvel Multiverse features many variants of Thor, including Ultimate Thor in the Ultimate Universe, Thor 2099 in Marvel 2099, Throg the Frog of Thunder, and King Thor from the future. Wonder Woman of DC Comics wielded Thor's power after lifting Mjolnir in the 1996 miniseries DC vs. Marvel.\n[…]\nLydon, Pierce (2022-07-01). \"10 Best Thor stories of all time\". GamesRadar. Retrieved 2024-01-08.\n[…]\nThor (Thor Odinson) at Marvel.com\n[…]\nThor on Marvel Database, a Marvel Comics wiki"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thor_%28Marvel_Comics%29",
        "situacao": "ok",
        "texto": "Thor Odinson é um personagem fictício que aparece nas histórias em quadrinhos estadunidenses publicadas pela Marvel Comics, baseado no deus germânico de mesmo nome. Criado pelos escritores Stan Lee e Larry Lieber, e pelo artista Jack Kirby, o personagem surgiu pela primeira vez em Journey into Mystery #83 (agosto de 1962) e ganhou seu próprio título com Thor #26 (1966). Histórias em quadrinhos pro\n[…]\nThor, ao girar o martelo místico a incríveis velocidades, cria um escudo intransponível. Como se não bastasse, o martelo ainda é imbuído com diversos encantamentos misteriosos. De acordo com a magia colocada no martelo, somente aquele que fosse digno poderia erguê-lo, um subterfúgio criado por Odin, temendo que arma tão poderosa pudesse cair em mãos errôneas e perigosas.\n[…]\nO Encantamento do Digno: O encantamento do martelo faz com que somente alguém digno o suficiente possa erguê-lo, fazendo com que os inimigos de Thor, ou qualquer um com objetivos não nobres nunca consigam se apossar da arma encantada, pois não são dignos de usá-la. Além disso, não basta ter apenas a intenção heróica ou mesmo agir como tal. O coração deve ser tão puro ou mais que o do próprio Thor.\n[…]\nBem depois, e por um curto período de tempo, o martelo/cajado foi empunhado por Erik Masterson, que se transformava em Thor porque também era \"digno\". Após devolver o martelo ao dono verdadeiro (Donald Blake), Erik Masterson recebeu de Odin um 2º martelo e passou a se transformar no super-herói \"Trovejante\", com poderes bem parecidos com os do deus do trovão, porém em um nível menor. Thor também passou um bom tempo tendo como identidade secreta o paramédico e motorista de ambulância, Jake Olsen.\n[…]\nEle aparece pela primeira vez em seu filme solo, Thor (2011), onde precisa provar que é digno de seu martelo e herança após ser banido à Terra por Odin.\n[…]\n«Thor» (em inglês)  no Marvel.com\n[…]\n«Marvel Directory: Thor»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.93 — 2026-10-30**
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
