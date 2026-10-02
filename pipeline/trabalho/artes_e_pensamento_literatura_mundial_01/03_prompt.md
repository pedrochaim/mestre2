Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Literatura Mundial** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Utopia",
      "descricao": "Livro de Thomas More, publicado em 1516, que descreve uma ilha com uma sociedade ideal."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O título do livro Utopia, de Thomas More, junta duas palavras gregas. O que ele significa literalmente?",
    "resposta": "Lugar nenhum",
    "fonte": [
      "https://en.wikipedia.org/wiki/Utopia_(book)",
      "https://en.wikipedia.org/wiki/Utopia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Utopia_(book)",
        "situacao": "ok",
        "texto": "Utopia (Latin: Libellus vere aureus, nec minus salutaris quam festivus, de optimo rei publicae statu deque nova insula Utopia, \"A truly golden little book, not less beneficial than enjoyable, about how things should be in a state and about the new island Utopia\") is a work of fiction and socio-political satire by Thomas More (1478–1535), written in Latin and published in 1516 and revised in 1518.\n[…]\nAccording to Burlinson, More interprets that decadent expression of animal cruelty as a causal antecedent for the cruel intercourse present within the world of Utopia and More's own. Burlinson does not argue that More explicitly equates animal and human subjectivities, but is interested in More's treatment of human-animal relations as significant ethical concerns intertwined with religious ideas of salvation and the divine qualities of souls.\n[…]\nChristopher Warner argues in the article \"Sir Thomas More, Utopia, and the Representation of Henry VIII\" that it \"reflects very well on Henry that the author of such a persuasive case against entering a king's service would agree to enter into his.\" As Lord Chancellor, More certainly encountered the very issues that Raphael raises, facing pressure from Henry VIII to support annulling his marriage to Catherine of Aragon and assuming the role of supreme head of the Church of England.\n[…]\nMore, Thomas (1516/1967), \"Utopia\", trans. John P. Dolan, in James J. Greene and John P. Dolan, edd., The Essential Thomas More, New York:  New American Library.\n[…]\nSullivan, E.D.S. (editor) (1983) The Utopian Vision: Seven Essays on the Quincentennial of Sir Thomas More  San Diego State University Press, San Diego, California, ISBN 0-916304-51-5\n[…]\nThomas More and his Utopia by Karl Kautsky\n[…]\nAndre Schuchardt: Freiheit und Knechtschaft. Die dystopische Utopia des Thomas Morus. Eine Kritik am besten Staat\n[…]\n\"Utopia\" . The American Cyclopædia. 1879."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Utopia",
        "situacao": "ok",
        "texto": "A utopia (  yoo-TOH-pee-ə) is an imagined community or society that possesses highly desirable or near-perfect qualities for its residents. The term was coined by Sir Thomas More for his 1516 book Utopia, which describes a fictional island society in the New World, but some utopian visions predate it.\n[…]\nThe word utopia was coined in 1516 from Ancient Greek by the Englishman Sir Thomas More for his Latin text Utopia. It literally translates as \"no place\", coming from the Greek: οὐ (\"not\") and τόπος (\"place\"), and meant any non-existent society, when 'described in considerable detail'. However, in standard usage, the word's meaning has shifted and now usually describes a non-existent society that is intended to be viewed as considerably better than contemporary society.\n[…]\nthe underlying motives on which utopian literature is built are as old as the entire historical epoch of human history.\n[…]\nDuring the 16th century, Thomas More's book Utopia proposed an ideal society of the same name. More's utopia is inspired by Plato's Republic and Aristotle's Politics, and its seriocomic style from the dialogues of Lucian. Utopian socialists and other readers accept this imaginary society as the realistic blueprint for a working nation, while others have postulated that Thomas More intended nothing of the sort.\n[…]\nCritical utopia is a theory conceptualised by literary theorist Tom Moylan. In contrast with utopianism, critical utopia rejects utopia. The idea is highly self-referential, and uses the idea of utopia to advance society while simultaneously critiquing it. A limitation of utopianism is defined: the imagined utopia is significantly distant from current society. Utopia also fails to acknowledge the differences between people that result in differences in experience.\n[…]\nList of utopian literature"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Utopia_%28livro%29",
        "situacao": "ok",
        "texto": "Libellus vere aureus, nec minus salutaris quam festivus, de optimo rei publicae statu deque nova insula Utopia (título original em latim: significa \"Um pequeno livro verdadeiramente dourado, não menos benéfico que entretedor, do melhor estado de uma república e da nova ilha Utopia\"), mais conhecido simplesmente como Utopia, é um livro de 1516 escrito por  Thomas Morus (1478-1535). Escrito em latim\n[…]\nO nome da obra, se originou da composição dos termos gregos \"ou\" (advérbio de negação), \"tópos, ou\" (lugar) e \"ía\" (qualidade, estado).\n[…]\nPortanto, refere-se a um \"não lugar\", um lugar inexistente. Foi esse o modo irônico como o pensador batizou sua sociedade 'perfeita'. A partir dessa obra, a palavra \"utopia\" tornou-se sinônimo de uma sociedade ideal, embora de existência impossível, ou uma ideia generosa, porém, impraticável. Considera-se que muitas das características da ilha descrita por Morus se baseiam na vida em mosteiros.\n[…]\nEsses problemas não existiriam na \"República de Utopia\", lugar onde:\n[…]\nThomas More tenta, ainda, convencer Rafael Hitlodeu a encontrar trabalho na corte como Conselheiro. Apesar de portador de grande sabedoria, Rafael recusa, referindo que a sua visão é demasiado radical e não seria ouvido. Rafael cita Platão, ao afirmar que os reis só admitiriam filósofos em suas cortes se eles mesmos estudassem filosofia. Ao contrário disso, no entanto, os reis cedo costumam ser infectados com corrupção e más opiniões.\n[…]\n... duas milhas longa na parte média, que é a parte mais larga, e em nenhuma parte é mais estreita exceto nas suas duas extremidades, onde se afunila. Essas extremidades, que são curvadas formando como que um círculo de cinco milhas de circunferência, fazem com que a ilha tenha o formato de uma lua crescente.\n[…]\nUtopia  livro completo em português em domínio público.\n[…]\nUtopia\n[…]\nUtopia and Utopianism  é uma revista acadêmica especializada na utopia e utopismo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "R.U.R.",
      "descricao": "Peça de teatro do escritor tcheco Karel Čapek, de 1920, sobre trabalhadores artificiais."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra robô surgiu numa peça do tcheco Karel Čapek, de 1920. O termo tcheco que a originou significa o quê?",
    "resposta": "Trabalho forçado",
    "fonte": [
      "https://en.wikipedia.org/wiki/R.U.R.",
      "https://en.wikipedia.org/wiki/Robot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/R.U.R.",
        "situacao": "ok",
        "texto": "R.U.R. is a 1920 science fiction play by the Czech writer Karel Čapek. \"R.U.R.\" stands for Rossumovi Univerzální Roboti (Rossum's Universal Robots, a phrase that has been used as a subtitle in English versions).\n[…]\nParentheses indicate names which vary according to translation. On the meaning of the names, see Ivan Klíma: Karel Čapek: Life and Work (2002).\n[…]\nHelena, the daughter of the president of a major industrial power, arrives at the island factory of Rossum's Universal Robots. Here, she meets Domin, the General Manager of R.U.R., who relates to her the history of the company. Rossum had come to the island in 1920 to study marine biology. In 1932, Rossum had invented a substance like organic matter, though with a different chemical composition. He argued with his nephew about their motivations for creating artificial life.\n[…]\nIn 2024, MIT Press published the book R.U.R. and the Vision of Artificial Life, which offered a new translation of the original 1920 edition by Štěpán Šimek. The book also contained a collection of essays reflecting on the play's legacy from scientists and scholars who work in artificial life and robotics.\n[…]\nIn the rebooted science fiction series The Outer Limits (1995), in the remake of the \"I, Robot\" episode from the original 1964 series, the business where the robot Adam Link is built is named \"Rossum Hall Robotics\".\n[…]\nIn Howard Chaykin's Time² graphic novels, Rossum's Universal Robots is a powerful corporation and maker of robots.\n[…]\nIn the film Mother/Android (2021), the play R.U.R. of Karel Čapek comes up. In the movie, Arthur, an AI programmer, turns out to be an android.\n[…]\nR.U.R. (Rossum's Universal Robots) at Project Gutenberg\n[…]\nKarel Čapek bio."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Robot",
        "situacao": "ok",
        "texto": "A robot is a machine, especially one programmable via a computer, capable of automatically carrying out a complex series of actions. A robot can be guided by an external or internal control device. Robots may be humanoid, but most are task-performing machines prioritizing functionality over aesthetics.\n[…]\nThe term robot came from the Czech language in 1923. The word was coined by Czech author Karel Capek, first used in his play R.U.R. (translated as Rossum's Universal Robots). The term comes from the Czech word robotník ('forced worker'), from robota 'forced labor, compulsory service, drudgery,' from robotiti 'to work, drudge', from an Old Czech source akin to Old Church Slavonic rabota (работа) 'servitude,' from rabu 'slave'.\n[…]\nThe word robot was introduced to the public by the Czech interwar writer Karel Čapek in his play R.U.R. (Rossum's Universal Robots), published in 1920. The play begins in a factory that uses a chemical substitute for protoplasm to manufacture living, simplified people called robots. The play does not focus in detail on the technology behind the creation of these living creatures, but in their appearance they prefigure modern ideas of androids, creatures who can be mistaken for humans.\n[…]\nThey looked like real women and could not only speak and use their limbs but were endowed with intelligence and trained in handwork by the immortal gods.\" The words \"robot\" or \"android\" are not used to describe them, but they are nevertheless mechanical devices human in appearance. \"The first use of the word Robot was in Karel Čapek's play R.U.R. (Rossum's Universal Robots) (written in 1920)\". Writer Karel Čapek was born in Czechoslovakia (Czech Republic).\n[…]\nThe Star Wars universe for example has several instances of droid revolts.\n[…]\nČapek, Karel (1920). R.U.R. , Aventinum, Prague."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/R.U.R.",
        "situacao": "ok",
        "texto": "R. U. R. é uma peça teatral de ficção científica de 1920 escrita pelo tcheco Karel Čapek. R. U. R. significa Rossumovi Univerzální Roboti (Robôs Universais de Rossum). A frase em inglês \"Rossum's Universal Robots\" foi usada como legenda na versão checa original. A peça estreou no dia 25 de janeiro de 1921, e introduziu a palavra \"robô\" em variados idiomas e na ficção científica como um todo.\n[…]\nA peça começa em uma fábrica que faz pessoas artificiais, chamadas de roboti (robôs), a partir de matéria orgânica sintética. Elas não são exatamente robôs na definição atual do termo: elas são criaturas de carne e osso que estão mais próximas do conceito moderno de clones do que de máquinas. Elas podem ser confundidas com humanos e podem pensar por si mesmas. Elas parecem felizes em trabalhar para os seres humanos inicialmente, mas uma rebelião de robôs leva à extinção da raça humana.\n[…]\nRobôs\n[…]\nA peça introduziu a palavra robô, que deslocou palavras mais antigas como \"automaton\" ou \"android\" em idiomas de todo o mundo. Em um artigo na Lidové noviny, Karel Capek nomeou seu irmão Josef Čapek (1887-1945) como o verdadeiro inventor da palavra. Em checo, robota significa trabalho forçado do tipo que os servos tinham que executar nas terras de seus mestres e é derivado de rab, que significa \"escravo\".\n[…]\nEm 2021, por meio de um financiamento coletivo, a editora Madrepérola lançou o livro RUR: Robôs Universais de Rossum, traduzido pelo autor de ficção científica Rogério Pietro. Nesta obra, além da tradução da peça de teatro, o autor escreveu a adaptação de RUR em forma de romance, sendo esta a primeira vez no mundo que a peça foi adaptada para o gênero narrativo. A tradução foi feita diretamente a partir do manuscrito original em tcheco.\n[…]\nNo romance gráfico de Howard Chaykin, Time2 (1987), a Rossum's Universal Robots é uma poderosa corporação criadora de robôs.\n[…]\nKarel Capek bio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Lolita",
      "descricao": "Romance de Vladimir Nabokov, publicado em 1955."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No romance de Vladimir Nabokov, Lolita é só um apelido carinhoso. Qual é o primeiro nome verdadeiro da personagem?",
    "resposta": "Dolores",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lolita"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lolita",
        "situacao": "ok",
        "texto": "Lolita is a 1955 novel written by the Russian and American novelist Vladimir Nabokov. The protagonist and unreliable narrator is a French literature professor who moves to New England and writes under the pseudonym Humbert Humbert. He details his obsession with and victimization of a 12-year-old girl, Dolores Haze, whom he describes as a \"nymphet\". Humbert becomes sexually obsessed with Dolores af\n[…]\nPrivately, he calls her \"Lolita\", the Spanish diminutive for Dolores. The novel was written in English, but fear of censorship in the U.S. (where Nabokov lived) and Britain led to it being first published in Paris, France, in 1955 by Olympia Press.\n[…]\nHumbert sees in Dolores, whom he calls Lolita, the perfect nymphet and the embodiment of his first love Annabel, and quickly decides to move in.\n[…]\nTo transform Dolores into Lolita, to seal this sad adolescent within his musky self, Humbert must deny her her humanity.\n[…]\nScreenplay: Nabokov's own re-edited and condensed version of the screenplay (revised December 1973) he originally submitted for Kubrick's film (before its extensive rewrite by Kubrick and Harris) was published by McGraw-Hill in 1974. One new element is that Quilty's play The Hunted Enchanter, staged at Dolores' high school, contains a scene that is an exact duplicate of a painting in the front lobby of the hotel, The Enchanted Hunters, at which Humbert begins a sexual relationship with Lolita.\n[…]\nMy Dark Vanessa is Kate Elizabeth Russell's 2020 debut novel. The protagonist in the novel, Vanessa, receives a copy of Lolita from her English teacher, who then sexually abuses her. The dedication page of My Dark Vanessa reads: \"To the real-life Dolores Hazes and Vanessa Wyes whose stories have not yet been heard, believed, or understood\", citing the victim of Lolita. My Dark Vanessa has been compared to Lolita, but as told from the victim's perspective.\n[…]\nLolita Syndrome\n[…]\nLolita Express"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lolita",
        "situacao": "ok",
        "texto": "Lolita é um romance de 1955 escrito pelo romancista russo-americano Vladimir Nabokov que aborda o controverso tema da hebefilia: o protagonista Humbert Humbert, narrador não confiável da história, é um professor de literatura francesa que sente atração sexual por crianças. No decorrer do romance, ele descreve sua obsessão por Dolores Haze, uma menina de 12 anos que ele sequestra e abusa sexualment\n[…]\nEle se refere a ela como uma \"ninfeta\" e passa a chamá-la de \"Lolita\", diminutivo espanhol do nome Dolores. O romance foi originalmente escrito em inglês, mas receio de que ele fosse censurado nos EUA (onde Nabokov vivia) e na Inglaterra o levou a ser publicado primeiro em Paris, em 15 de setembro de 1955, pela Olympia Press. Mais tarde foi traduzido para russo pelo próprio Nabokov, e publicado em Nova Iorque em 18 de Agosto de 1958.\n[…]\nA própria reeditada e condensada versão do roteiro de Nabokov (revisada em dezembro de 1973) que ele originalmente submeteu para o filme de Kubrick (antes de sua extensiva reescrita por Kubrick e Harris) foi publicada por McGraw-Hill em 1974. Um novo elemento é que a peça de Quilty, The Hunted Enchanter, encenada no colégio de Dolores, contém uma cena que é uma exata duplicata de uma pintura na frente do lobby do hotel, The Enchanted Hunter, em qual Humbert permite Lolita seduzir ele.\n[…]\nEmily Prager afirma no prefácio para seu romance Roger Fishbite que ela escreveu isso principalmente como uma paródia literária de Lolita de Vladimir Nabokov, parcialmente como uma \"resposta tanto para o livro e para o ícone que a personagem Lolita tem se tornado\". Romance de Prager, ambientado nos anos 1990, é narrado pela personagem Lolita, de treze anos de idade Lucky Lady Linderhoff.\n[…]\nIAMX – Lolita\n[…]\nNabokov, Vladimir (1955). Lolita. Nova Iorque: Vintage International. ISBN 978-0-679-72316-5  O romance original.\n[…]\nFotos da primeira edição de Lolita",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "George Orwell",
      "descricao": "Escritor britânico (1903–1950), autor de 1984 e A Revolução dos Bichos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Qual era o nome de batismo do escritor britânico que assinava George Orwell, autor de A Revolução dos Bichos?",
    "resposta": "Eric Arthur Blair",
    "fonte": [
      "https://en.wikipedia.org/wiki/George_Orwell"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/George_Orwell",
        "situacao": "ok",
        "texto": "Eric Arthur Blair (25 June 1903 – 21 January 1950) was an English novelist, poet, essayist, journalist, and critic who wrote under the pen name of George Orwell. His work is characterised by lucid prose, social criticism, opposition to all totalitarianism (both authoritarian communism and fascism), and support of democratic socialism.\n[…]\nEric Arthur Blair was born on 25 June 1903 in Motihari, Bengal Presidency (now Bihar), British India, into what he described as a \"lower-upper-middle class\" family. His paternal great-great-grandfather, Charles Blair, was a wealthy slave-owning country gentleman and an absentee owner of two Jamaican plantations; hailing from Dorset, he married Lady Mary Fane, daughter of Thomas Fane, 8th Earl of Westmorland. His grandfather, Thomas Richard Arthur Blair, was an Anglican clergyman.\n[…]\nAfterwards, he lodged in the Tooley Street kip, but could not stand it for long, and with financial help from his parents moved to Windsor Street, where he stayed until Christmas. \"Hop Picking\", by Eric Blair, appeared in the October 1931 issue of New Statesman, whose editorial staff included his old friend Cyril Connolly. Mabel Fierz put him in contact with Leonard Moore, who became his literary agent in April 1932.\n[…]\nHis contradictory and sometimes ambiguous views about the social benefits of religious affiliation mirrored the dichotomies between his public and private lives: Stephen Ingle wrote that it was as if the writer George Orwell \"vaunted\" his unbelief while Eric Blair the individual retained \"a deeply ingrained religiosity\".\n[…]\nFyvel wrote about Orwell:\n[…]\nThe young Eric Blair is the main character in Paul Theroux's 2024 novel Burma Sahib, a fictional narrative of Blair's five years in the country.\n[…]\nBlair, Eric Arthur (George Orwell) (1903–1950) at the Oxford Dictionary of National Biography"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/George_Orwell",
        "situacao": "ok",
        "texto": "Eric Arthur Blair (Motihari, 25 de junho de 1903 – Camden, 21 de janeiro de 1950) foi um romancista, poeta, ensaísta, jornalista e crítico inglês que escreveu sob o pseudônimo de George Orwell. Sua obra caracteriza-se pela prosa lúcida, pela crítica social, pela oposição a todas as formas de totalitarismo (tanto ao comunismo autoritário quanto ao fascismo) e pelo apoio ao socialismo democrático.\n[…]\nEric Arthur Blair nasceu em 25 de junho de 1903 em Motihari, na Presidência de Bengala (atual Biar), na Índia britânica, em uma família que ele descreveu como pertencente à \"faixa inferior da alta classe média\". Seu trisavô paterno, Charles Blair, era um rico proprietário de escravos pertencente à nobreza rural e dono ausente de duas plantations jamaicanas; natural de Dorset, casou-se com lady Mary Fane, filha de Thomas Fane, 8.º Conde de Westmorland.\n[…]\nSeu avô, Thomas Richard Arthur Blair, era um clérigo anglicano.\n[…]\nO relato de Jacintha Buddicom, Eric & Us, oferece uma visão da infância de Blair. Ela citou Avril, irmã dele, segundo a qual \"era essencialmente uma pessoa reservada, pouco demonstrativa\", e afirmou sobre a amizade com os Buddicom: \"Não creio que precisasse de outros amigos além do colega de escola a quem ocasionalmente se referia, com apreço, como 'CC'.\" Não se recordava de que ele recebesse colegas de escola ou trocasse visitas com eles, como seu irmão Prosper frequentemente fazia nas férias.\n[…]\nSuas opiniões contraditórias e por vezes ambíguas sobre os benefícios sociais da filiação religiosa espelhavam as dicotomias entre sua vida pública e privada: Stephen Ingle escreveu que era como se o escritor George Orwell \"ostentasse\" a descrença, enquanto Eric Blair, o indivíduo, conservava \"uma religiosidade profundamente arraigada\".\n[…]\nO jovem Eric Blair é o personagem principal do romance Burma Sahib (2024), de Paul Theroux, narrativa ficcional dos cinco anos de Blair no país.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Mark Twain",
      "descricao": "Escritor americano (1835–1910), autor de As Aventuras de Tom Sawyer e Huckleberry Finn."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O pseudônimo Mark Twain vem de um grito dos barqueiros do rio Mississippi. O que essa expressão indicava?",
    "resposta": "Profundidade de duas braças",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mark_Twain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mark_Twain",
        "situacao": "ok",
        "texto": "Samuel Langhorne Clemens (November 30, 1835 – April 21, 1910), known by the pen name Mark Twain, was an American writer, humorist, and essayist. He has been praised as the \"greatest humorist the United States has produced\", with William Faulkner calling him \"the father of American literature\". Twain's novels include The Adventures of Tom Sawyer (1876) and its sequel, Adventures of Huckleberry Finn\n[…]\nTwain's funeral was at the Brick Presbyterian Church on Fifth Avenue, New York. He is buried in his wife's family plot at Woodlawn Cemetery in Elmira, New York. The Langdon family plot is marked by a 12-foot (3.7 m) monument (two fathoms, or \"mark twain\") placed there by Twain's surviving daughter Clara. There is also a smaller headstone. He expressed a preference for cremation (for example, in Life on the Mississippi), but he acknowledged that his surviving family would have the last word.\n[…]\nNear the completion of Huckleberry Finn, Twain wrote Life on the Mississippi, which is said to have heavily influenced the novel. The travel work recounts Twain's memories and new experiences after a 22-year absence from the Mississippi River. In it, he also explains that \"Mark Twain\" was the call made when the boat was in safe water, indicating a depth of two (or twain) fathoms (12 feet or 3.7 metres).\n[…]\nTwain's story about his pen name has been questioned by some, with the suggestion that \"mark twain\" refers to a running bar tab that Twain would regularly incur while drinking at John Piper's saloon in Virginia City, Nevada. Samuel Clemens himself responded to this suggestion by saying, \"Mark Twain was the nom de plume of one Captain Isaiah Sellers, who used to write river news over it for the New Orleans Picayune.\n[…]\nMark Twain's Mississippi at Northern Illinois University Libraries\n[…]\nWorks by Mark Twain at Faded Page (Canada)\n[…]\nWorks by or about Samuel Langhorne Clemens at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mark_Twain",
        "situacao": "ok",
        "texto": "Samuel Langhorne Clemens (Florida, Missouri, 30 de novembro de 1835 - Redding, Connecticut, 21 de abril de 1910), mais conhecido pelo pseudônimo Mark Twain, foi um escritor e humorista estadunidense crítico do racismo. É mais conhecido pelos romances As Aventuras de Tom Sawyer (1876) e sua sequência Aventuras de Huckleberry Finn (1885), este último frequentemente chamado de \"O Maior Romance Americ\n[…]\nEm 1861, Orion Clemens foi nomeado secretária de James W. Nye, governador do Território de Nevada. Twain juntou-se a seu irmão, e ambos seguiram para o oeste. A dupla viajou por mais de duas semanas em uma diligência pelas Grandes Planícies e Montanhas Rochosas, visitando no caminho a comunidade mórmom de Salt Lake City. A jornada de Twain terminou na cidade mineira de Virginia City (Nevada), onde ele próprio tornou-se mineiro.\n[…]\nTwain passou por um período de depressão profunda, que teve início em 1896 quando sua filha Susy morreu de meningite. A morte de Olivia em 1904 e a de Jean em 24 de dezembro de 1909 apenas aprofundaram a melancolia.\n[…]\n\"Este livro é o registro de um passeio. Se fosse o registro de uma solene expedição científica expressaria a gravidade, aquela profundidade, e aquela impressionante incompreensibilidade tão apropriadas a obras do tipo, mesmo assim tão atrativas. Apesar da limitação de ser apenas o registro de um piquenique, tem um propósito, que é sugerir ao leitor como ele veria a Europa e o Oriente se olhasse para eles com seus próprios olhos ao invés dos olhos dos que visitaram aqueles países antes dele.\n[…]\nAs duas obras seguintes de Twain foram inspiradas em suas experiências no Rio Mississipi. Old Times on the Mississippi, uma série de rascunhos publicados na Atlantic Monthly em 1875, apresentavam a desilusão do autor com o romantismo, e tornou-se posteriormente o ponto de partida para o livro Life on the Mississippi.\n[…]\nObras de Mark Twain na Open Library",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pantagruel",
      "descricao": "Gigante comilão, filho de Gargântua, personagem dos livros do escritor francês François Rabelais."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que adjetivo usado para banquetes exagerados vem do nome do filho de Gargântua, gigante criado por Rabelais?",
    "resposta": "Pantagruélico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel",
        "situacao": "ok",
        "texto": "The Five Books of the Lives and Deeds of Gargantua and Pantagruel (French: Les Cinq livres des faits et dits de Gargantua et Pantagruel), often shortened to Gargantua and Pantagruel or the Cinq Livres (Five Books), is a pentalogy of novels written in the 16th century by François Rabelais. It tells the adventures of two giants, Gargantua ( gar-GAN-tew-ə; French: [ɡaʁɡɑ̃tɥa]) and his son Pantagruel \n[…]\nThe five books of Gargantua and Pantagruel often open with Gargantua, which itself opens with Socrates, in The Symposium, being likened to Sileni. Sileni, as Rabelais informs the reader, were little boxes \"painted on the outside with merry frivolous pictures\" but used to store items of high value. In Socrates, and particularly in The Symposium, Rabelais found a person who exemplified many paradoxes, and provided a precedent for his \"own brand of serious play\".\n[…]\nRabelais has \"frequently been named as the world's greatest comic genius\"; and Gargantua and Pantagruel covers \"the entire satirical spectrum\". Its \"combination of diverse satirical traditions\" challenges \"the readers' capacity for critical independent thinking\"; which latter, according to Bernd Renner, is \"the main concern\". It also promotes \"the advancement of humanist learning, the evangelical reform of the Church, [and] the need for humanity and brotherhood in politics\", among other things.\n[…]\nThere is evidence of deliberate and avowed imitation of Rabelais' style, in English, as early as 1534. The full extent of Rabelais' influence is complicated by the known existence of a chapbook, probably called The History of Gargantua, translated around 1567; and the Songes drolatiques Pantagruel (1565), ascribed to Rabelais, and used by Inigo Jones.\n[…]\nGargantua and Pantagruel public domain audiobook at LibriVox\n[…]\nGargantua and Pantagruel (in French) at Association de Bibliophiles Universels"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Garg%C3%A2ntua_e_Pantagruel",
        "situacao": "ok",
        "texto": "A vida de Gargântua e de Pantagruel (original em francês: La vie de Gargantua et de Pantagruel) é uma pentalogia de romances escrita no século XVI por François Rabelais, que fala das aventuras de dois gigantes, Gargântua (pronúncia em português: [garˈgɐ̃.twɐ]; francês: [ɡaʁ.ɡɑ̃.ty.a]) e seu filho Pantagruel (pronúncia em português: [pɐ̃ˌtɑ.gruˈɛl]; francês: [pɑ̃.ta.ɡʁy.ɛl]).\n[…]\nNo começo do livro, a esposa de Gargântua morre durante o parto de Pantagruel, que acaba por se tornar tão gigante e erudito quanto seu pai. Rabelais disponibiliza um catálogo dos seus itens de leitura, que consiste em sua maioria de livros com títulos engraçados e decisões proferidas em processos judiciais absurdos.\n[…]\nSeu navio está bem provido da erva fálica conhecida como Pantagruelião, à qual Rabelais dá uma história natural irreverente.\n[…]\nPantagruel e Gargântua não são ogros cruéis, mas sim gigantes bondosos e glutões. Este gigantismo lhes permite descrever cenas de festas burlescas. A infinita gula dos gigantes abre as portas a numerosos episódios cômicos. Assim, por exemplo, o primeiro grito de Gargântua ao nascer é: \"A beber, a beber!\". O recurso aos gigantes permite também alterar a percepção normal da realidade; sob esta ótica, a obra de Rabelais se escreve no estilo grotesco, que pertence à cultura popular e carnavalesca.\n[…]\nMikhail Bakhtin, em seu livro Rabelais e seu mundo, explora Gargântua e Pantagruel e é considerado um clássico dos estudos renascentistas. Bakhtin dizia que, por séculos, o livro de Rabelais fora mal-interpretado.\n[…]\nO adjetivo \"pantagruélico\" deriva-se de Pantagruel, relativo a refeições fartas em alegre companhia; típica é a expressão \"banquete pantagruélico\" ou \"almoço pantagruélico\". Similarmente de Gargântua deriva \"gargantuano\", que significa enorme, insaciável, e que por sua vez deriva do substantivo garganta.\n[…]\nPantagruel de Rabelais (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Tarzan",
      "descricao": "Personagem criado por Edgar Rice Burroughs em 1912, menino inglês criado por macacos na África."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na língua dos macacos inventada por Edgar Rice Burroughs, o que significa o nome Tarzan?",
    "resposta": "Pele branca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tarzan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tarzan",
        "situacao": "ok",
        "texto": "Tarzan (John Clayton, Viscount Greystoke) is a fictional character, a feral child raised in one of the Congolian rainforests by the Mangani great apes; he later experiences civilization, only to reject it and return to the wild as a heroic adventurer.\n[…]\nCreated by Edgar Rice Burroughs, Tarzan first appeared in the novel Tarzan of the Apes (magazine publication 1912, book publication 1914), and subsequently in 23 sequels, several books by Burroughs and other authors, and innumerable works in other media, both authorized and unauthorized.\n[…]\nAfter Burroughs's death, a number of writers produced new Tarzan stories. In some instances, the estate managed to prevent publication of such works. The most notable example in the United States was a series of five novels by the pseudonymous \"Barton Werper\" that appeared 1964–65 by Gold Star Books (part of Charlton Comics). As a result of legal action by Edgar Rice Burroughs, Inc., they were taken off the market.\n[…]\nSince Greystoke, two additional live-action Tarzan films have been released, 1998's Tarzan and the Lost City and 2016's The Legend of Tarzan, both period pieces that drew inspiration from Edgar Rice Burroughs's writings.\n[…]\nA computer game with the title Tarzan, licensed from Edgar Rice Burroughs Inc., was produced by Martech in 1986 for the Acorn Electron, Amstrad CPC, BBC Micro, Commodore 64, MSX, and ZX Spectrum.\n[…]\nPublisher Faber and Faber, with the backing of the Edgar Rice Burroughs, Inc., have updated the series through author Andy Briggs. In 2011, Briggs published the first of the books Tarzan: The Greystoke Legacy. In 2012 he published the second book Tarzan: The Jungle Warrior, and in 2013, he has published the third book Tarzan: The Savage Lands.\n[…]\nEdgar Rice Burroughs tribute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tarzan",
        "situacao": "ok",
        "texto": "Tarzan ou Tarzã é um personagem de ficção criada pelo escritor estadunidense Edgar Rice Burroughs na revista pulp All-Story Magazine em 1912 e publicado em formato de livro em 1914. O personagem apareceu em mais vinte e cinco livros e em diversos contos avulsos, vários livros autorizados por outros autores e inúmeros trabalhos em outras mídias, autorizadas e não autorizadas. Outros escritores que \n[…]\nTarzan é filho de aristocratas ingleses que desembarcam em uma selva africana após um motim. Com a morte de seus pais, Tarzan é criado por macacos (\"manganis\", na linguagem dos símios, criada por Burroughs) na África; seu verdadeiro nome é John Clayton III, Lorde Greystoke. Tarzan é o nome dado a ele pelos macacos e significa \"Pele Branca\". É uma adaptação moderna da tradição mitológico-literária de heróis criados por animais.\n[…]\nO Mowgli de Rudyard Kiplin foi citado como uma grande influência na criação de Tarzan por Edgar Rice Burroughs. Mowgli também foi uma influência para vários outros personagens descritos como \"garotos selvagens\".\n[…]\nA editora Faber e a Faber com o apoio da Edgar Rice Burroughs, Incorporated, atualizaram a série através do autor Andy Briggs. Em 2011, Briggs publicou o primeiro dos livros Tarzan: The Greystoke Legacy. Em 2012 publicou o segundo livro Tarzan: The Jungle Warrior, e em 2013, publicou o terceiro livro Tarzan: The Savage Lands.\n[…]\n1975 - Coleção Tarzan/Russ Manning, em cinco volumes, com as páginas dominicais de 1968 a 1972\n[…]\nEdgar Rice Burroughs inventou toda uma língua para os mangani, isto é, os grandes macacos que criaram Tarzan. Esses termos estão espalhados, não só por seus livros, mas também pelos quadrinhos e outras mídias. Essa língua é entendia por todos os primatas—macacos, babuínos e gorilas—e também pelos primitivos sagoths de Pellucidar. Os Ho-don e os Waz-don de Pal-ul-Don entendem algumas palavras, apesar de terem linguagem própria.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Os Lusíadas",
      "descricao": "Poema épico de Luís de Camões, publicado em 1572, sobre a viagem de Vasco da Gama à Índia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O título do poema épico Os Lusíadas, de Camões, se refere a que povo?",
    "resposta": "Os portugueses",
    "fonte": [
      "https://en.wikipedia.org/wiki/Os_Lus%C3%ADadas",
      "https://pt.wikipedia.org/wiki/Os_Lus%C3%ADadas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Os_Lus%C3%ADadas",
        "situacao": "ok",
        "texto": "Os Lusíadas (Portuguese pronunciation: [uʒ luˈzi.ɐðɐʃ]), usually translated as The Lusiads, is a Portuguese epic poem written by Luís Vaz de Camões (c. 1524/5 – 1580) and first published in 1572. It is widely regarded as the most important work of Portuguese-language literature and is frequently compared to Virgil's Aeneid (1st c. BC). The work celebrates the discovery of a sea route to India by t\n[…]\nWritten in Homeric fashion, the poem focuses mainly on a fantastic interpretation of the Portuguese voyages of discovery during the 15th and 16th centuries. Os Lusíadas is often regarded as Portugal's national epic, much as Virgil's Aeneid was for the Ancient Romans, or Homer's Iliad and Odyssey for the Ancient Greeks. It was written when Camões was an exile in Macau and was first printed in 1572, three years after the author returned from the Indies.\n[…]\nThe heroes of the epic are the Lusiads (Lusíadas), the sons of Lusus—in other words, the Portuguese. The initial strophes of Jupiter's speech in the Concílio dos Deuses Olímpicos (Council of the Olympian Gods), which open the narrative part, highlight the laudatory orientation of the author.\n[…]\nThe extraordinary Portuguese discoveries and the \"new kingdom that they exalted so much\" (\"novo reino que tanto sublimaram\") in the East, and certainly the recent and extraordinary deeds of the \"strong Castro\" (\"Castro forte\", the viceroy Dom João de Castro), who had died some years before the poet's arrival in Indian lands, were the decisive factors in Camões' completion of the Portuguese epic. Camões dedicated his masterpiece to King Sebastian of Portugal.\n[…]\nDigital sources in Portuguese\n[…]\nOs Lusíadas (in Portuguese), online edition stanza by stanza\n[…]\nOs Lusíadas (in Portuguese), full text provided by Project Gutenberg\n[…]\nStrophes 70 to 79 of Canto VI, surviving a hurricane or the Portuguese defeating Neptune, as a tile masterpiece"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Lus%C3%ADadas",
        "situacao": "ok",
        "texto": "Os Lusíadas é uma obra de poesia épica do escritor português Luís Vaz de Camões, a primeira epopeia portuguesa publicada em versão impressa. Provavelmente iniciada em 1556 e concluída em 1571, foi publicada em Lisboa a 12 de março de 1572, no período literário do Classicismo, ou Renascimento tardio, três anos após o regresso do autor do Oriente, via Moçambique.\n[…]\nPlano das considerações do Poeta - Camões refere-se a si mesmo enquanto poeta admirador do povo e dos heróis portugueses;\n[…]\nA Emulação de Eneida em Os Lusíadas\n[…]\nDepois de saciados os primeiros apetites, os marinheiros chegam ao palácio de Tétis, onde lhes é servido um farto banquete. Neste, a Sirena profetiza os feitos dos portugueses no Oriente (estrofes 10 a 73). Mais uma vez Camões usa o artifício da profecia para contar o que se passou entre 1498, o ano da descoberta do caminho marítimo para a Índia, e o tempo em que o poema foi escrito.\n[…]\nIncluídas neste episódio ainda vão estar mais \"profecias\" sobre os portugueses; a história dos milagres de S. Tomé, evangelizador da Índia (estrofes 108 a 118), com uma breve, mas arriscada crítica aos jesuítas na estrofe 119; na estrofe 128 uma referência ao naufrágio de Camões, em que se salvou a nado com Os Lusíadas, e uma curiosa previsão de que a sua «Lira sonorosa Será mais afamada que ditosa» (a sua obra seria mais famosa do que a sua vida afortunada).\n[…]\nEm 1984, foi publicada em Portugal pela Editorial Notícias uma reedição d'Os Lusíadas em banda desenhada, criada por José Ruy. (ISBN 972-46-1144-2)\n[…]\nAmbos Os Lusíadas de Camões e a banda desenhada de José Ruy foram traduzidos para o mirandês, língua minoritária do nordeste de Portugal, por Amadeu Ferreira e Fracisco Niebro, respetivamente.\n[…]\nCamões e Os Lusíadas, Português - Camões e Os Lusíadas - 10.º ano- aula 1, Secretaria Regional de Educação da Madeira, 2020"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Conde Drácula",
      "descricao": "Vampiro protagonista do romance Drácula, de Bram Stoker, publicado em 1897."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O vampiro de Bram Stoker herdou o nome de Vlad, o Empalador, cujo pai pertencia a uma ordem de cavaleiros simbolizada por que criatura?",
    "resposta": "Dragão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Count_Dracula",
      "https://en.wikipedia.org/wiki/Order_of_the_Dragon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Count_Dracula",
        "situacao": "ok",
        "texto": "Count Dracula () is a fictional character and title antagonist of Bram Stoker's gothic horror novel Dracula (1897). He is considered the prototypical and archetypal vampire in subsequent works of fiction. Some aspects of the character have been suggested to have been inspired by the 15th-century Wallachian prince Vlad III Dracula, although the identification of Stoker's Dracula with Vlad the Impal\n[…]\nBram Stoker's novel takes the form of an epistolary tale, in which Count Dracula's characteristics, powers, abilities, and weaknesses are narrated by multiple narrators, from different perspectives.\n[…]\nAlready in 1958, Cecil Kirtly proposed that Count Dracula shared his personal past with the historical Transylvanian-born Voivode Vlad III Dracula of Wallachia, also known as Vlad the Impaler or Vlad Țepeș. Following the publication of In Search of Dracula by Radu Florescu and Raymond McNally in 1972, this supposed connection attracted much popular attention. This work argued that Bram Stoker based his Dracula on Vlad the Impaler.\n[…]\nCorneel de Roos suggests that this encourages the reader to identify the Count with the Voivode Dracula first mentioned by him in Chapter 3, the one betrayed by his brother. Although Stoker does not mention any given names, his description, according to Corneel de Roos, points to Vlad III Dracula, betrayed by his brother Radu the Handsome, who had chosen the side of the Turks.\n[…]\nThis expression is crossed out and replaced by \"Hungarian yoke\" (as appearing in the printed version), which matches the historical perspective of the Wallachians. Some take this to mean that Stoker opted for the Wallachian, not the Szekler interpretation, thus lending more consistency to his count's Romanian identity. Although not identical to Vlad III, the vampire is portrayed as one of the \"Dracula race\".\n[…]\nBram Stoker Online – full text, PDF and audio versions of Dracula."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Order_of_the_Dragon",
        "situacao": "ok",
        "texto": "The Order of the Dragon (Latin: Societas Draconistarum, literally \"Society of the Dragonists\") was a monarchical chivalric order only for selected higher aristocracy and monarchs, founded in 1408 by Sigismund of Luxembourg, who was then King of Hungary and Croatia (r. 1387–1437) and later also Holy Roman Emperor (r. 1433–1437).\n[…]\nThe Order flourished during the first half of the 15th century, primarily in Germany and Italy. After Sigismund's death in 1437, its importance declined in Western Europe. However, after the Fall of Constantinople in 1453, it continued to play a role in Hungary,  Serbia and Romania, which bore the brunt of the Ottoman incursions. The Prince of Wallachia Vlad II Dracul, the father of Vlad the Impaler, took his name from the Order of the Dragon, also known as Ordinul Dragonului.\n[…]\nFrederick II (1379–1454), Count of Celje, son of Hermann II.\n[…]\nJohn, Count of Krbava, Croatian nobleman, Master of the stewards (1406–1419).\n[…]\nMichael Nádasdi, Hungarian nobleman, Count of the Székelys (1405–1422).\n[…]\nPeter Perényi, Hungarian nobleman, Count of the Székelys (1397–1401), Ban of Macsó (1397, 1400–1401), Judge royal (1415–1423), also ispán of Ung (1398–1423), Máramaros (1404–1412), Szatmár and Ugocsa (1406–1419) Counties.\n[…]\nVlad II Dracul (d. 1447), then Prince of Wallachia\n[…]\nVlad III Dracul (d.1477) then prince of Wallachia\n[…]\nFlorescu, Radu and Raymond McNally, Dracula: Prince of Many Faces. His Life and His Times. Boston: Little Brown, 1989. ISBN 0-316-28656-7.\n[…]\nRezachevici, Constantin. \"From the Order of the Dragon to Dracula\". Journal of Dracula Studies 1 (1999): pp 3–7. Transcriptions available online: (RTF-document), Barcelona-Esoterismo-Esoterisme-Magia.\n[…]\nMcNally, Raymond T. \"In Search of the Lesbian Vampire: Barbara von Cilli, Le Fanu's 'Carmilla' and the Dragon Order\". Journal of Dracula Studies 3 (2001)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Conde_Dr%C3%A1cula",
        "situacao": "ok",
        "texto": "Conde Drácula, ou simplesmente Drácula, é um personagem fictício que dá título ao romance de terror gótico homônimo escrito por Bram Stoker em 1897. O personagem é o arquétipo mais famoso do vampiro na ficção, e segundo o Guiness Book, o monstro e vilão fictício com maior número de aparições na mídia, diretas ou indiretas. O personagem também é creditado no romance como um dos precursores da orige\n[…]\nO pai de Vlad III, Vlad II, era membro de uma sociedade cristã romana (de Roma) chamada Ordem do Dragão, criada por nobres da região para defender o território da invasão dos turcos otomanos. Por causa disso, Vlad II era chamado Dracul (dragão), e, por consequência, seu filho passou a ser chamado Draculea (filho do dragão) — a terminação \"ea\" significa filho.\n[…]\nMuitos desses feitos levam a crer que Vlad III é a principal inspiração para o personagem. A crença de que conde Drácula é um morto-vivo veio de um fato que em uma de suas muitas batalhas ele levou um forte golpe na cabeça, que o deixou em coma.\n[…]\nO romance de Bram Stoker assume a forma de um conto epistolar, no qual as características, poderes, habilidades e fraquezas do Conde Drácula são descritos por narradores, de diferentes perspectivas.\n[…]\nO Conde Drácula é um vampiro morto-vivo, centenário, e um nobre da Transilvânia que afirma ser um Székely descendente de Átila, o Huno. Ele habita um castelo decadente nas Montanhas dos Cárpatos, perto do Passo de Borgo. Ao contrário dos vampiros do folclore da Europa Oriental, que são retratados como criaturas repulsivas, semelhantes a cadáveres, Drácula é bonito e carismático, com um verniz de charme aristocrático.\n[…]\nVer Drácula\n[…]\nNa série Chica Vampiro, Ana McLaren era filha do Conde Drácula.\n[…]\nO Beijo do Vampiro\n[…]\nDracula, um tipo de orquídea\n[…]\nDrácula (obra literária de Bram Stoker que deu origem ao personagem)\n[…]\nConde Drácula na cultura popular\n[…]\nConde Drácula na Internet Movie Database",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Dulcineia del Toboso",
      "descricao": "Dama idealizada por Dom Quixote no romance de Miguel de Cervantes."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Dom Quixote chama de Dulcineia del Toboso a camponesa que idealiza como sua dama. Como ela se chama de verdade?",
    "resposta": "Aldonza Lorenzo",
    "distratores": [
      "Teresa Panza",
      "Luscinda",
      "Dorotea"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dulcinea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dulcinea",
        "situacao": "ok",
        "texto": "Dulcinea del Toboso is a fictional character who is unseen in Miguel de Cervantes's novel Don Quixote. Don Quixote believes he must have a lady to whom to direct his courtly love and homage, according to his understanding, nurtured by chivalric literature, that the knightly life requires it.\n[…]\nDulcinea is based on the Spanish word dulce (sweet), and suggests an overly elegant \"sweetness\". To this day, a reference to someone as one's \"Dulcinea\" implies idealistic devotion and love for her.\n[…]\nAlthough support for Avellaneda's view of Dulcinea is found in Part I of Don Quixote, he has little interest in the glorious, imaginary Dulcinea. Scholars commonly say that because of this and many similar misreadings by Avellaneda, which Cervantes found offensive, he was motivated to complete his own unfinished Part II, which was published the following year.\n[…]\nA prostitute named Aldonza is the female lead and identified as \"Dulcinea\" in Man of La Mancha, an adaptation of the Quixote story, and its subsequent movie adaptation.\n[…]\nDulcinea appears in the Japanese series Zukkoke Knight – Don De La Mancha. Her real name is Fedora (in the English dub). She is the daughter of the bandit king Poormouth. Her role is to help her bankrupt father by stealing, but she fails almost every time. She fools Don Quixote into helping her. She is voiced by Mami Koyama.\n[…]\n\"Dulcinea\" is the title of the first episode of the Syfy television show The Expanse.\n[…]\n\"Dulcinea\" is the title of a song by post-metal band Isis on their 2006 album In the Absence of Truth.\n[…]\nList of Don Quixote characters\n[…]\nMancing, Howard (March 2005). \"Dulcinea Del Toboso: On the Occasion of Her Four-Hundredth Birthday\". Hispania. 88 (1): 53–63. doi:10.2307/20063075. JSTOR 20063075."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dulcineia_de_Toboso",
        "situacao": "ok",
        "texto": "Dulcinea del Toboso é uma personagem fictícia do romance Dom Quixote, escrito por Miguel de Cervantes. Mulher imaginária e perfeita, corporizada noutras personagens e inspirada na camponesa Aldonza Lorenzo, encarnação da «Beleza e da Virtude», nunca aparece \"em pessoa\" no romance, no entanto, o seu nome é mencionado tantas vezes na obra e é tão evocada, que pode ser considerada uma personagem prin\n[…]\n«Chamava-se Aldonza Lorenzo, e a esta lhe pareceu ele por bem dar-lhe o epíteto de senhora dos seus pensamentos; e, procurando nome que não desdissesse muito do seu e que se aproximasse e encaminhasse ao de uma princesa e grande senhora, veio a chamar-lhe \"Dulcinea del Toboso\" porque era natural de Toboso: nome, que lhe parecia, musical, peregrino e significativo, como todos os demais que a ele e às suas coisas havia posto.»\n[…]\nIsto é, Aldonza Lorenzo é uma personagem real dentro do mundo fictício do romance, mas Dulcinea del Toboso é uma mulher imaginária, nascida das leituras e obsessões do protagonista, e vagamente baseada na mulher «histórica».\n[…]\nNada mais distante da Dulcinea idealizada, que Dom Quixote imagina como uma jovem «virtuosa, imperatriz da Mancha, de beleza ímpar e sem igual». No entanto, quando fala dela com Sancho Pança, o seu escudeiro, identifica-a com a filha de Lorenzo Corchuelo e Aldonza Nogales, que no enredo da obra cervantina nunca chegam a aparecer.\n[…]\nA lavradora Aldonza, pelo contrário, surge nalgumas das continuações francesas do Dom Quixote e na obra de José Camón Aznar, El pastor Quijótiz.\n[…]\nNo cinema e na televisão, a personagem de Dulcineia de Toboso foi interpretada por Sophia Loren (no filme italo-americana de 1972, Man of La Mancha), Ana Mariscal (1946), Susana Campos (1963), Lupita Ferrer (1969) e Vanessa Williams na série de TV, Don Quixote (2000), entre outras.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pinóquio",
      "descricao": "Boneco de madeira cujo nariz cresce quando mente, criado pelo italiano Carlo Collodi em 1883."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No dialeto da Toscana, terra de Carlo Collodi, o que significa a palavra Pinocchio?",
    "resposta": "Pinhão",
    "distratores": [
      "Boneco de madeira",
      "Nariz comprido",
      "Pequeno mentiroso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pinocchio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pinocchio",
        "situacao": "ok",
        "texto": "Pinocchio (  pin-OH-kee-oh, Italian: [piˈnɔkkjo]) is a fictional character and the protagonist of the children's novel The Adventures of Pinocchio (1881) by Italian writer Carlo Collodi of Florence, Tuscany. Pinocchio was carved by a poor man named Geppetto in a Tuscan village. He is created as a wooden puppet, but he dreams of becoming a real boy. He is known for his long nose, which grows when h\n[…]\nCollodi describes him as a “rascal,” “imp,” “scapegrace,” “disgrace,” “ragamuffin,” and “confirmed rogue.” “Wretched boy!” laments Pinocchio’s loving father, the carpenter Geppetto. The very first thing the puppet does upon being born is laugh derisively in Geppetto’s face. Then Pinocchio steals the sad old man’s wig.\n[…]\nBefore writing Pinocchio, Collodi wrote a number of didactic children's stories for the then-recently unified Italy, including a series about an unruly boy who undergoes humiliating experiences while traveling the country, titled Viaggio per l'Italia di Giannettino (\"Little Johnny's voyage through Italy\"). Throughout Pinocchio, Collodi chastises Pinocchio for his lack of moral fiber and his persistent rejection of responsibility and desire for fun.\n[…]\nThe children's novel The Golden Key, or The Adventures of Buratino (1936) is a free retelling of the story of Pinocchio by Russian writer Aleksey Nikolayevich Tolstoy. Some of the adventures are derived from Collodi, but many are either omitted or added. Pinocchio (Buratino) does not reform himself nor become a real human. For Tolstoy, Pinocchio as a puppet is a positive model of creative and non-conformist behavior;\n[…]\nIn the 1959 Italian television series The Adventures of Pinocchio (Le avventure di Pinocchio), directed by Enrico D'Alessandro and Cesare Emilio Gaslini, Pinocchio is portrayed by Carlo Chamby;\n[…]\nPinocchio. Storia di un burattino di Carlo Collodi by Massimiliano Finazzer Flory (2012);\n[…]\nPinocchio paradox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pin%C3%B3quio",
        "situacao": "ok",
        "texto": "Pinóquio (em italiano Pinocchio) é uma personagem de ficção cuja primeira aparição se deu em 1883, no romance As Aventuras de Pinóquio escrito por Carlo Collodi, e que desde então teve muitas adaptações. Esculpido a partir do tronco de uma árvore por um entalhador chamado Geppetto numa pequena aldeia italiana, Pinóquio nasceu como um boneco de madeira, mas que sonhava em ser um menino de verdade.\n[…]\nO nome Pinocchio é uma palavra típica do italiano falado na Toscana e significa pinhão (em italiano padrão seria pinolo).\n[…]\nNo romance, Geppetto explica que se chama Pinóquio porque é um nome muito conhecido:\n[…]\nA origem do nome não é clara: se é verdade que pinóquio significa pinhão, existem muitos outros nomes similares com pin, que derivam de Pino, alcunha diminutiva de Giuseppino (diminutivo de Giuseppe - José em italiano) como o próprio Geppetto ou também de Filipino (de Filipe) e Iacopino (de Iacopo - Jacó). Por outro lado, Pinóquia indicava, no dialeto toscano antigo, uma galinha ou uma mulher pequena e um pouco gorducha, mas bem proporcionada.\n[…]\nNo sentido de pinhão, pode-se resumir simbolicamente as características do personagem, como evidenciou também Gérard Génot: A \"semente\" como valor \"filial, infantil\", no seu próprio ser \"de madeira\", enfim \"a carne na madeira, a germinação na dureza\".\n[…]\nOutros preferem reclamar algum topônimo toscano que poderia ter sugerido o nome a Collodi. Em Colle di Val d'Elsa, onde foi aluno do seminário episcopal local havia uma fonte chamada \"Fonte do Pinóquio\". Segundo alguns poderia ter tomado também do moderno San Miniato Basso, que se chamava na época \"Pinóquio\", que é também o nome do rio que corre no meio da vila.\n[…]\nEra uma localidade que Collodi conhecia bem: o pai de Carlo Lorenzini, Domenico, tinha morado por muitos anos na zona de Pinóquio trabalhando como cozinheiro em casa de uma rica família do lugar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Irmãs Brontë",
      "descricao": "Charlotte, Emily e Anne Brontë, escritoras inglesas do século dezenove, autoras de Jane Eyre e O Morro dos Ventos Uivantes."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Charlotte, Emily e Anne Brontë estrearam com pseudônimos masculinos. Que sobrenome os três pseudônimos compartilhavam?",
    "resposta": "Bell",
    "distratores": [
      "Eyre",
      "Grey",
      "Brown"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bront%C3%AB_family"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bront%C3%AB_family",
        "situacao": "ok",
        "texto": "The Brontës () were a 19th-century literary family, born in the village of Thornton and later associated with the village of Haworth in the West Riding of Yorkshire, England. Born to Patrick Brontë, a curate, and his wife, Maria, the sisters Charlotte (1816–1855), Emily (1818–1848) and Anne (1820–1849) were all poets and novelists who published their work under male pseudonyms: Currer, Ellis, and \n[…]\nIt is thought, although no documents exist to support the claim, that they advised the sisters to contact Aylott & Jones, a small publishing house at 8, Paternoster Row, London, who accepted, but at the authors' own risk since they felt the commercial risk to the company was too great. The work thus appeared in 1846, published using the male pseudonyms of Currer (Charlotte), Ellis (Emily) and Acton (Anne) Bell.\n[…]\nThe pseudonymous (Currer Bell) publication in 1847 of Jane Eyre, An Autobiography established a dazzling reputation for Charlotte. In July 1848, Charlotte and Anne (Emily had refused to go along with them) travelled by train to London to prove to Smith, Elder & Co.\n[…]\nEmily Brontë's Wuthering Heights was published in 1847 under the masculine pseudonym Ellis Bell, by Thomas Cautley Newby, in two companion volumes to that of Anne's (Acton Bell), Agnes Grey. Controversial from the start of its release, its originality, its subject, narrative style and troubled action raised intrigue. Certain critics condemned it, but sales were nevertheless considerable for an unknown author of a novel that defied all conventions.\n[…]\nThe Brontë sisters were highly amused by the behaviour of the curates they met. Arthur Bell Nicholls (1818–1906) had been curate of Haworth for seven and a half years, when contrary to all expectations, and to the fury of Patrick Brontë (their father), he proposed to Charlotte.\n[…]\nBrontë Society\n[…]\nThe Brontës"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fam%C3%ADlia_Bront%C3%AB",
        "situacao": "ok",
        "texto": "Os Brontë foram uma família literária do século XIX associada à aldeia de Thorton, localizada no West Riding of Yorkshire, Inglaterra. As irmãs Charlotte (1816-1855), Emily (1818-1848) e Anne (1820-1849) são escritoras e poetisas bem conhecidas do grande público. À semelhança de muitas escritoras da sua época, inicialmente elas publicaram os seus poemas e romances sob pseudónimos masculinos: Curre\n[…]\nPensa-se, embora não existam documentos que provem esta afirmação, que os Chamber aconselharam as irmãs a entrarem em contacto com a Aylott & Jones, uma pequena editora de Londres, que aceitou publicar o livro, mas as irmãs seriam responsáveis pelas perdas financeiras. Assim, o trabalho foi publicado sob os pseudónimos masculinos Currer (Charlotte), Ellis (Emily) e Acton (Anne) Bell. Estes nomes não eram nada comuns, mas as iniciais das irmãs foram mantidas.\n[…]\nWuthering Heights de Emily Brontë foi publicado em 1847 sob o pseudónimo masculino de Ellis Bell, dividido em dois volumes e vendido em conjunto com Agnes Grey. No início, o livro causou alguma polémica devido aos seus temas, estilo narrativo e ações problemáticas. Alguns críticos condenaram a obra, mas as vendas foram consideráveis para um romance de um autor desconhecido que desafiava as convenções.\n[…]\nAs irmãs Brontë divertiam-se muito com o comportamento dos sacerdotes que conheciam. Arthur Bell Nicholls (1818-1906) já era sacerdote em Haworth há sete anos e meio quando, contra todas as expectativas e a fúria de Patrick Brontë, pediu Charlotte em casamento. Apesar de gostar da sua dignidade e da sua voz grave e de quase ter tido um esgotamento emocional quando o rejeitou, Charlotte achava-o demasiado rígido, convencional e retrógrado \"como todos os sacerdotes\".\n[…]\nConsidera-se que esta decisão é a principal razão pela qual Anne é a menos reconhecida das irmãs.\n[…]\nBrontë Parsonage, museu em Yorkshire dedicado à família",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Fiódor Dostoiévski",
      "descricao": "Escritor russo (1821–1881), autor de Crime e Castigo e Os Irmãos Karamázov."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1849, Dostoiévski já estava diante do pelotão de fuzilamento quando a execução foi interrompida. Por quê?",
    "resposta": "O czar comutou a pena",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fyodor_Dostoevsky"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fyodor_Dostoevsky",
        "situacao": "ok",
        "texto": "Fyodor Mikhailovich Dostoevsky (11 November [O.S. 30 October] 1821 – 9 February [O.S. 28 January] 1881) was a Russian philosopher, novelist, short-story writer, essayist, and journalist. He is regarded as one of the greatest novelists in both Russian and world literature, and many of his works are considered highly influential masterpieces.\n[…]\nDostoevsky responded to these charges by declaring that he had read the essays only \"as a literary monument, neither more nor less\"; he spoke of \"personality and human egoism\" rather than of politics. Even so, he and his fellow \"conspirators\" were arrested on 23 April 1849 at the request of Count Alexey Fyodorovich Orlov and Tsar Nicholas I, who feared a revolution like the Decembrist revolt of 1825 in Russia and the Revolutions of 1848 in Europe.\n[…]\nBloom, Harold (2004). Fyodor Dostoevsky. Infobase. ISBN 978-0-7910-8117-4.\n[…]\nFrank, Joseph (1979) [1976]. Dostoevsky: The Seeds of Revolt, 1821–1849. Princeton University Press. ISBN 978-0-691-01355-8.\n[…]\nWorks by Fyodor Dostoevsky in eBook form at Standard Ebooks\n[…]\nWorks by or about Fyodor Dostoevsky at the Internet Archive\n[…]\nWorks by Fyodor Dostoevsky at LibriVox (public domain audiobooks)\n[…]\nFyodor Dostoyevsky collection at One More Library\n[…]\nInternational Dostoevsky Society – a network of scholars dedicated to studying the life and works of Fyodor Dostoevsky\n[…]\nFyodor Dostoevsky at the Internet Book List\n[…]\nDostoevsky, Fyodor (8 June 2016). A Novel in Nine Letters. Translated by Garnett, Constance Clara. Also available in the original Russian Archived 15 April 2018 at the Wayback Machine.\n[…]\nDostoevsky, Fyodor (4 March 2017). The Dream of a Ridiculous Man. Translated by Garnett, Constance. Archived from the original on 15 April 2018. Retrieved 15 April 2018.\n[…]\nNewspaper clippings about Fyodor Dostoevsky in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fi%C3%B3dor_Dostoi%C3%A9vski",
        "situacao": "ok",
        "texto": "Fiódor Mikhailovitch Dostoiévski (em russo: Фёдор Миха́йлович Достое́вский; nascido em Moscou, 11 de novembro de 1821 — falecido em São Petersburgo, 9 de fevereiro de 1881) foi um escritor, filósofo e jornalista russo. É considerado por muitos um dos maiores romancistas e pensadores da história, bem como um dos maiores «psicólogos» que já existiu, ao considerar a designação e etimologia mais ampla\n[…]\nDostoiévski foi detido na noite de 22-23 de abril de 1849 por participar do Círculo Petrashevski sob acusação de conspirar contra o czar Nicolau I. O czar mostrou-se, depois das revoluções de 1848 na Europa, vigoroso contra qualquer organização clandestina que pudesse pôr em risco seu reinado.\n[…]\nNestes oito meses continuaram as investigações do Círculo Petrashevski, as quais foram finalizadas apenas em 17 de setembro de 1849, quando foram enviadas ao czar, o qual ordenou a abertura de um tribunal misto (civil e militar) para julgar, sob leis militares, 28 acusados. Destes, 15, incluindo Dostoiévski, foram condenados no dia 16 de novembro à pena de morte por fuzilamento.\n[…]\nAntes do comando para o fuzilamento, entretanto, chegou uma ordem do czar para que a pena fosse comutada para prisão com trabalhos forçados. Soube-se, depois, que a ordem havia sido assinada dias antes, mas que o czar exigira a falsa execução - através do Príncipe Michkin de O Idiota, Dostoiévski oferece uma descrição desta experiência de quase morte. Dostoiévski, então, recebeu os grilhões e partiu para a Sibéria poucos dias depois.\n[…]\nDostoiévski acreditava no povo russo. Era nacionalista uma vez que, para ele, a palavra nova adviria da Rússia para o mundo. Neste sentido, era contra os defensores da independência cultural da Ucrânia), em outras palavras, era imperialista e apoiava o czar (apesar de sempre ter sido a favor da liberação dos servos, v. seção acima Detenção, julgamento e falsa execução).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Frankenstein",
      "descricao": "Romance de Mary Shelley, publicado em 1818, sobre um cientista que dá vida a uma criatura."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1816, numa casa à beira do lago de Genebra, Mary Shelley começou a escrever Frankenstein. O que motivou a história?",
    "resposta": "Desafio de histórias de fantasmas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Frankenstein"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Frankenstein",
        "situacao": "ok",
        "texto": "Frankenstein; or, The Modern Prometheus is an 1818 Gothic novel written by English author Mary Shelley. It tells the story of Victor Frankenstein, a young scientist who creates a sapient creature from different body parts in an unorthodox scientific experiment. Shelley started writing the story when she was 18 and staying in Bath, and the first edition was published anonymously in London on 1 Janu\n[…]\nMary Shelley read The Empire of the Nairs (1811), James Henry Lawrence's utopian romance abolishing marriage and paternity, in late September 1814. David S. Neff has read Frankenstein as a reply to that utopia, its bachelor scientist a \"Lawrentian motherson\" whose flight from fatherhood destroys those around him, and has connected the novel's De Lacey family to Lawrence's character Lacy; the historian Anne Verjus, while confirming the 1814 reading, considers the influence unproven.\n[…]\nSitting around a log fire at Byron's villa, the company amused themselves by reading German ghost stories translated into French from the book Fantasmagoriana. Byron proposed that they \"each write a ghost story.\" Unable to think of a story, Mary Shelley became anxious.\n[…]\nA French translation (Frankenstein: ou le Prométhée Moderne, translated by Jules Saladin) appeared as early as 1821. The second English edition of Frankenstein was published on 11 August 1823 in two volumes (by G. and W. B. Whittaker) following the success of the stage play Presumption; or, the Fate of Frankenstein by Richard Brinsley Peake. This edition credited Mary Shelley as the book's author on its title page.\n[…]\nMary Shelley, Frankenstein, Or, The Modern Prometheus: Annotated for Scientists, Engineers, and Creators of All Kinds, edited by David H. Guston, Ed Finn, and Jason Scott Robert, MIT Press, 277 pp.\n[…]\nFrankenstein at Standard Ebooks\n[…]\nOn Frankenstein; or, The Modern Prometheus, a review by Percy Bysshe Shelley"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Frankenstein",
        "situacao": "ok",
        "texto": "Frankenstein; ou, O Prometeu Moderno (Frankenstein; or, The Modern Prometheus, no original em inglês), mais conhecido simplesmente por Frankenstein, é um romance de terror gótico com inspirações do movimento romântico, de autoria de Mary Shelley, escritora britânica nascida em Londres. O livro é frequentemente considerado a primeira obra de ficção científica da história, embora este ainda seja um \n[…]\nO romance relata a história de Victor Frankenstein, um estudante de ciências naturais que constrói um monstro. Mary Shelley escreveu a história quando tinha apenas 19 anos, entre 1816 e 1817, e a obra foi primeiramente publicada em 1818, sem crédito para a autora na primeira edição. Atualmente costuma-se considerar a versão revisada da terceira edição do livro, publicada em 1831, como a definitiva.\n[…]\nEm 1816, Mary, Percy, John Polidori e Lord Byron participaram de uma competição para ver quem escreveria a melhor história de terror. Após alguns dias de reflexão, Shelley foi inspirada a escrever Frankenstein ao imaginar um cientista que cria a vida e se horroriza com aquilo que criou.\n[…]\nEventualmente, Lord Byron propôs que os quatro escrevessem, cada um, uma história de fantasmas. Byron escreveu um conto que posteriormente comporia a conclusão de seu poema \"Mazzepa\". Inspirado por outro fragmento de história de Byron desta época, Polidori mais tarde escreveria o romance O Vampiro, que seria a primeira história ocidental contendo o vampiro como conhecemos hoje, e que décadas depois inspiraria Bram Stoker no seu Drácula.\n[…]\nPorém, passados vários dias, Mary Shelley ainda não conseguira criar uma história. Eventualmente ela veio a ter uma visão sobre um estudante dando vida à uma criatura. Essa visão tornou-se a base da história de Frankenstein, a qual Mary Shelley veio a desenvolver em um romance, encorajada pelo seu futuro marido.\n[…]\nFrankenstein e o Espectro do Desejo - Richard Miskolci",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Franz Kafka",
      "descricao": "Escritor de língua alemã (1883–1924), autor de A Metamorfose e O Processo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Kafka pediu que seus manuscritos fossem queimados depois de sua morte. Por que O Processo acabou publicado mesmo assim?",
    "resposta": "Max Brod desobedeceu ao pedido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Franz_Kafka",
      "https://en.wikipedia.org/wiki/Max_Brod"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Franz_Kafka",
        "situacao": "ok",
        "texto": "Franz Kafka (3 July 1883 – 3 June 1924) was a German-language Jewish  writer and novelist from Prague. Widely regarded as a major figure of 20th-century literature, his works fuse elements of realism and the fantastique, and typically feature isolated protagonists facing bizarre or surreal predicaments and incomprehensible bureaucratic powers. The term Kafkaesque has entered the lexicon to describ\n[…]\nThe first mention of Kafka's work was in an article by Max Brod on 9 February 1907 in the Berlin weekly Die Gegenwart, two years prior to his first publication. Brod would write about his friend again in 1921 in an essay entitled \"Der Dichter Franz Kafka\".\n[…]\nin the way of diaries, manuscripts, letters (my own and others'), sketches, and so on, [is] to be burned unread.\" Brod ignored this request and published the novels and collected works between 1925 and 1935. Brod defended his action by claiming that he had told Kafka, \"I shall not carry out your wishes\", and that \"Franz should have appointed another executor if he had been absolutely determined that his instructions should stand\".\n[…]\nAfter Kafka's death, Rudolf Kayser wrote an article titled \"Anmerkungen zu Franz Kafka\" for the Neue Rundschau, and Manfred Sturmann wrote a biographical essay titled \"Erinnerungen an Kafka\" for the Allgemeine Zeitung. In 1935, Brod wrote a biography. \"Since this work was written in German, however, it was not available to the majority of English critics\".\n[…]\nFrom 1924 to 1927, Brod arranged for the publication of Kafka's three unfinished novels and otherwise promoted Kafka's works. During this period, many analytical essays were written about his work. In the late 1920s, 55 articles were written about Kafka's work, most of them reviews and references. Examples include Heinrich Jacob's \"Kafka oder die Wahrhaftigkeit\" for Der Feuerreiter in 1924 and Brod's \"Infantilismus Kleist und Kafka\" in 1927."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Max_Brod",
        "situacao": "ok",
        "texto": "Max Brod (Hebrew: מקס ברוד; 27 May 1884 – 20 December 1968) was an Israeli author, music critic, composer, and journalist, born as a German-speaking Czech. He is notable for promoting the work of writer Franz Kafka and composer Leoš Janáček.\n[…]\nAlthough he was a prolific writer in his own right, he is best remembered as the friend and biographer of Franz Kafka. Kafka named Brod as his literary executor, instructing Brod to burn his unpublished work upon his death. Brod refused and had Kafka's works published instead.\n[…]\nOn Kafka's death in 1924, Brod was the administrator of the estate. Although Kafka stipulated that all of his unpublished works were to be burned, Brod refused.\n[…]\nHe justified this move by stating that when Kafka personally told him to burn his unpublished work, Brod replied that he would outright refuse, and that \"Franz should have appointed another executor if he had been absolutely and finally determined that his instructions should stand.\" Before even a line of Kafka's most celebrated works had been made public, Brod had already praised him as \"the greatest poet of our time\", ranking with Goethe or Tolstoy.\n[…]\nOn one side was the National Library of Israel, which argued that Brod passed his literary estate (and Kafka's papers) to Esther as an executor of his actual intent to have the papers donated to the institution. On the other side were Esther's daughters, who claimed that Brod passed the papers to their mother as a pure inheritance which should be theirs.\n[…]\nSönmez, Burhan. Lovers of Franz K., translated from Kurdish by Sami Hêzil. Other Press, 2025. A novella about Brod's \"betrayal\" of Kafka by not destroying his manuscripts. Review by Benjamin Balint. The Wall Street Journal, 1 August 2025."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Franz_Kafka",
        "situacao": "ok",
        "texto": "František \"Franz\" Kafka (Praga, Império Austro-Húngaro, atual República Tcheca, 3 de julho de 1883 — Klosterneuburg, República Austríaca, atual Áustria, 3 de junho de 1924) foi um escritor boêmio de língua alemã, autor de romances e contos, considerado pelos críticos como um dos escritores mais influentes do século XX.\n[…]\nApenas algumas das obras de Kafka foram publicadas durante sua vida: as coleções de contos \"Considerações\", \"Um Médico Rural\", e alguns contos, como \"A Metamorfose\", em revistas literárias. Preparou a coleção \"Um Artista da Fome\" para impressão, mas só foi publicada postumamente. Os trabalhos inacabados de Kafka, como os romances \"O Processo'', \"O Castelo\" e \"O Desaparecido\", foram publicados postumamente por seu amigo Max Brod, que ignorou o desejo de Kafka de ter seus manuscritos destruídos.\n[…]\nKafka deixou os direitos de sua obra, tanto a publicada quanto a não publicada, para seu amigo e testamenteiro literário Max Brod, com instruções explícitas de que ela deveria ser destruída após a morte de Kafka. Kafka escreveu: \"Querido Max, meu último pedido: Tudo que eu deixo para trás... na forma de diários, manuscritos, cartas (minhas e de outras pessoas), esboços, e assim por diante, deve ser queimado sem ser lido\".\n[…]\nBrod decidiu ignorar este pedido e publicar os romances e a obra completa entre 1925 e 1935. Levou consigo muitos papéis, que permaneceram sem ser publicados, nas suas malas quando fugiu para a Palestina em 1939. A última amante de Kafka, Dora Diamant (mais tarde chamada de Dymant-Lask), também ignorou seus pedidos, mantendo secretamente 20 cadernos e 35 cartas. Eles foram confiscados pela Gestapo em 1933, mas pesquisadores continuam a procurá-los.\n[…]\nKafka, Franz; Brod, Max (1988). The Diaries, 1910–1923. Nova Iorque: Schocken Books. ISBN 0-8052-0906-9\n[…]\nFundação Franz Kafka",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Oscar Wilde",
      "descricao": "Escritor irlandês (1854–1900), autor de O Retrato de Dorian Gray."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1895, no auge da fama, Oscar Wilde foi condenado a dois anos de trabalhos forçados. Por qual motivo?",
    "resposta": "Relações homossexuais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Oscar_Wilde"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oscar_Wilde",
        "situacao": "ok",
        "texto": "Oscar Fingal O'Fflahertie Wills Wilde (16 October 1854 – 30 November 1900) was an Irish author, poet and playwright. After writing in different literary styles throughout the 1880s, he became one of the most popular and influential dramatists in London in the early 1890s. He was a key figure in the emerging Aestheticism movement of the late 19th century and is widely regarded as the greatest playw\n[…]\nOn 18 February 1895, the Marquess of Queensberry left his calling card at Wilde's club, the Albemarle, inscribed: \"For Oscar Wilde, posing somdomite [sic]\". Wilde, encouraged by Douglas and against the advice of his friends, initiated a private prosecution against Queensberry for defamatory libel, since the note amounted to a public accusation that Wilde had committed the crime of sodomy.\n[…]\nThe final trial was presided over by Mr Justice Wills. On 25 May 1895, Wilde and Alfred Taylor were convicted of gross indecency and sentenced to two years' hard labour. The judge described the sentence, the maximum allowed, as \"totally inadequate for a case such as this\", and that the case was \"the worst case I have ever tried\". Wilde's response of \"And I? May I say nothing, my Lord?\" was drowned out in cries of \"Shame\" in the courtroom.\n[…]\nChisholm, Hugh (1911). \"Wilde, Oscar O'Flahertie Wills\" . Encyclopædia Britannica. Vol. 28 (11th ed.). pp. 632–633.\n[…]\nBeauty, Morals and Voluptuousness in the England of Oscar Wilde 2011–2012 exhibit at the Musée d'Orsay\n[…]\nEverything is Going on Brilliantly: Oscar Wilde and Philadelphia 2015 exhibit at The Rosenbach of the Free Library of Philadelphia\n[…]\nOscar Wilde: Insolence Incarnate 2016–2017 exhibit at the Petit Palais\n[…]\nOscar Wilde and Classical antiquity 2024 exhibit by the Combined Library of the Institute of Classical Studies and the Hellenic and Roman Societies\n[…]\nOscar Wilde: From Decadence to Despair 2024 exhibit at Library of Trinity College Dublin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Oscar_Wilde",
        "situacao": "ok",
        "texto": "Oscar Fingal O'Flahertie Wills Wilde, ou simplesmente Oscar Wilde (Dublin, Irlanda, 16 de outubro de 1854 – Paris, 30 de novembro de 1900), foi um influente escritor, poeta e dramaturgo irlandês.\n[…]\nNo apogeu de sua fama e sucesso, enquanto sua peça A Importância de Ser Honesto (1895) estava em cartaz, Wilde processou o pai de seu amante Alfred Douglas por difamação após ser acusado por ele de \"sodomia\", mas acabou sendo condenado de \"atentado ao pudor\" por relações com outros homens jovens.\n[…]\nEles se separaram, ainda que sem divórcio formal, com o resultado do escândalo do julgamento e condenação de Wilde por suas atividades homossexuais em 1895 (ler a seção Julgamentos). Após a prisão de Wilde, Constance mudou seu sobrenome e o de seus filhos para Holland a fim de se dissociar do escândalo e livrá-los da arruinada reputação social de Wilde, que foi obrigado a renunciar aos direitos parentais sobre os filhos.\n[…]\nEm 25 de maio de 1895, após três julgamentos, Oscar Wilde e Alfred Taylor foram condenados no Tribunal de Old Bailey a dois anos de prisão, com trabalhos forçados, pelo juiz Alfred Wills, que sentenciou Wilde por ter, em suas palavras na sentença, \"sido o centro de extensa corrupção da mais horrenda espécie entre jovens\" e Taylor por manter \"uma espécie de bordel masculino\".\n[…]\nMontgomery Hyde, barrister, biógrafo, autor, político, foi parlamentar e chegou a perdeu uma cadeira no parlamento britânico em 1959 por lutar contra a descriminalização da homossexualidade em seu país), inclui uma transcrição original do julgamento por difamação (que veio à tona em 2000), sugerindo que ele teve relações com adolescentes.\n[…]\nRetratos de Oscar Wilde na National Portrait Gallery",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Federico García Lorca",
      "descricao": "Poeta e dramaturgo espanhol (1898–1936), autor de Bodas de Sangue."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em agosto de 1936, o poeta Federico García Lorca foi fuzilado perto de Granada, logo no início de que guerra?",
    "resposta": "Guerra Civil Espanhola",
    "fonte": [
      "https://en.wikipedia.org/wiki/Federico_Garc%C3%ADa_Lorca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Federico_Garc%C3%ADa_Lorca",
        "situacao": "ok",
        "texto": "Federico del Sagrado Corazón de Jesús García Lorca (5 June 1898 – 19 August 1936) was a Spanish poet, playwright, and theatre director. García Lorca achieved international recognition as an emblematic member of the Generation of '27, a group consisting mostly of poets who introduced the tenets of European movements (such as symbolism, futurism, and surrealism) into Spanish literature.\n[…]\nGarcía Lorca was assassinated by Nationalist forces at the beginning of the Spanish Civil War. His remains have never been found, and the motive remains in dispute; some theorize he was targeted for being gay, a socialist, or both, while others view a personal dispute as the more likely cause.\n[…]\nMany anti-communists were sympathetic to García Lorca or assisted him. In the days before his arrest, he found shelter in the house of the artist and leading Falange member, Luis Rosales. Evidence suggests that Rosales was very nearly shot as well by the Civil Governor Valdés for helping García Lorca. Poet Gabriel Celaya wrote in his memoirs that he once found García Lorca in the company of Falangist José Maria Aizpurúa.\n[…]\nSouth African Roman Catholic poet Roy Campbell, who enthusiastically supported the Nationalists both during and after the Civil War, later produced acclaimed translations of Lorca's work. In his poem \"The Martyrdom of F. Garcia Lorca\", Campbell wrote,\n[…]\nThe Parque Federico García Lorca, in Alfacar, is near Fuente Grande; in 2009, excavations in it failed to locate Lorca's body. Close to the olive tree indicated by some as marking the location of the grave, there is a stone memorial to Federico García Lorca and all other victims of the Civil War, 1936–1939.\n[…]\nLGB biography of García Lorca\n[…]\nWorks by Federico García Lorca at LibriVox (public domain audiobooks)\n[…]\nFederico Garcia Lorca Poems\n[…]\nFederico García Lorca was killed on official orders, say 1960s police files—The Guardian"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Federico_Garc%C3%ADa_Lorca",
        "situacao": "ok",
        "texto": "Federico García Lorca (Fuente Vaqueros, 5 de junho de 1898 – Granada, 18 de agosto de 1936) foi um poeta e dramaturgo espanhol. Pertencente à geração do 27, foi o poeta de maior influência e popularidade da literatura espanhola do século XX e como dramaturgo é considerado uma sumidade do teatro espanhol do século XX . Conviveu com artistas como Salvador Dalí, Luis Buñuel e Manuel de Falla.\n[…]\nFoi uma das primeiras vítimas da Guerra Civil Espanhola. Os motivos do seu assassínio são repletos de incertezas, mas acredita-se que foi fuzilado e enterrado em vala comum.\n[…]\nCom a Segunda República espanhola em abril de 1931, retornou à Espanha. Junto a Eduardo Ugarte, o escritor criou um movimento de teatro chamado A Barraca, com formato de grupo de teatro universitário. Representaram obras teatrais do Século de Ouro (Calderón da Barca, Lope de Vega, Miguel de Cervantes) por cidades e povos de Espanha. O início da guerra civil espanhola frustraria os planos para o grupo. Voltando à Espanha, criou um movimento de teatro chamado La Barraca.\n[…]\nEm 16 de agosto de 1936, García Lorca foi retirado à força da casa de amigos, em Granada, em uma grande operação do Governo Civil que cercou todo o quarteirão. Acompanhavam aos guardas Juan Luis Trescastro Medina, Luis García-Alix Fernández e Ramón Ruiz Alonso, que tinha denunciado a Lorca ante o governador civil de Granada José Valdés Guzmán.\n[…]\nA obra poética de García Lorca fecha-se com Seis poemas galegos e a série de onze poemas amorosos titulada Sonetos do amor escuro. Lorca sempre tem contado com o respeito e admiração incondicional dos poetas de gerações posteriores à Guerra Civil. Considerado um poeta maldito, sua influência deixou-se sentir entre os poetas espanhóis do Os Poetas Malditos.\n[…]\nCasa-Museu Federico García Lorca, instalado na casa de veraneio da sua família em Granada.\n[…]\nProjeto Releituras - Garcia Lorca",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Liev Tolstói",
      "descricao": "Escritor russo (1828–1910), autor de Guerra e Paz e Anna Kariênina."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1910, aos oitenta e dois anos, Tolstói morreu de pneumonia numa pequena estação de trem. O que ele estava fazendo ao adoecer?",
    "resposta": "Fugindo de casa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Leo_Tolstoy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leo_Tolstoy",
        "situacao": "ok",
        "texto": "Count Lev Nikolayevich Tolstoy (; Russian: Лев Николаевич Толстой, IPA: [ˈlʲef nʲɪkɐˈla(j)ɪvʲɪtɕ tɐlˈstoj] ; 9 September [O.S. 28 August] 1828 – 20 November [O.S. 7 November] 1910), usually referred to in English as Leo Tolstoy, was a Russian writer. He is regarded as one of the greatest and most influential authors of all time.\n[…]\nTolstoy's The Kingdom of God Is Within You also helped to convince Gandhi of nonviolent resistance, a debt Gandhi acknowledged in his autobiography, calling Tolstoy \"the greatest apostle of non-violence that the present age has produced\". Their correspondence lasted only a year, from October 1909 until Tolstoy's death in November 1910, but led Gandhi to give the name Tolstoy Colony to his second ashram in South Africa.\n[…]\nTolstoy died on 20 November 1910 at the age of 82 of pneumonia, at Astapovo railway station, after a day's train journey south. According to some sources, Tolstoy spent the last hours of his life preaching love, non-violence, and Georgism to fellow passengers on the train.\n[…]\nLeo Tolstoy and Theosophy\n[…]\nTolstovka\n[…]\nNickell, William S. (2011). The Death of Tolstoy: Russia on the Eve, Astapovo Station, 1910. Cornell University Press. ISBN 978-0-8014-6254-2.\n[…]\nWorks by Leo Tolstoy in eBook form at Standard Ebooks\n[…]\nWorks by Leo Tolstoy at Project Gutenberg\n[…]\nWorks by or about Leo Tolstoy at the Internet Archive\n[…]\nWorks by Leo Tolstoy at LibriVox (public domain audiobooks)\n[…]\nLeo Tolstoy at the Internet Book List\n[…]\nTolstoy by Romain Rolland\n[…]\nNewspaper clippings about Leo Tolstoy in the 20th Century Press Archives of the ZBW\n[…]\nWright, Charles Theodore Hagberg (1911). \"Tolstoy, Leo\" . In Chisholm, Hugh (ed.). Encyclopædia Britannica. Vol. 26 (11th ed.). Cambridge University Press. pp. 1053–1061.\n[…]\nWaltz in F major (Page on Russian Wikipedia), Tolstoy's only known musical composition."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Liev_Tolst%C3%B3i",
        "situacao": "ok",
        "texto": "Lev Nikoláievitch Tolstói, também conhecido em português como Liev, Leão, Leo ou Leon Tolstói (em russo:  Лев Николаевич Толстой; [lʲef nʲɪkɐˈlaɪvʲɪtɕ tɐlˈstoj] (); Iasnaia Poliana, Governorado de Tula, 9 de setembro de 1828 – Astapovo, 20 de novembro de 1910) foi um escritor russo, amplamente reconhecido como um dos maiores e mais influentes autores de todos os tempos.\n[…]\nConde Piotr Lvovitch Tolstói (1872-1873), morreu na infância\n[…]\nConde Nikolai Lvovitch Tolstói (1874-1875), morreu na infância\n[…]\nGandhi apelidou Tolstói de \"o maior apóstolo da não-violência que a modernidade produziu\". A correspondência entre os dois durou apenas um ano, de outubro de 1909 até a morte de Tolstói, em novembro de 1910. Esse fato levou Gandhi a batizar sua fazenda na África do Sul de “Tolstoy”. Além da resistência não-violenta, Gandhi e Tolstói compartilharam outra crença: o vegetarianismo.\n[…]\nTolstói morreu em 1910, aos 82 anos de idade. Antes de morrer, sua família dedicava-se a cuidar de sua saúde diariamente. Nos últimos dias, conversou e escreveu sobre a experiência da morte. Renunciando ao estilo de vida aristocrático, deixou sua casa no meio do inverno daquele ano, às escondidas. Sua partida deu-se por conta das crises de ciúmes de sua esposa Sophia.\n[…]\nTolstói morreu de pneumonia, na estação de trem de Astapovo, depois de um dia inteiro de viagem. O mestre da estação acolheu-o em seu apartamento, e seus médicos pessoais foram chamados para socorrê-lo. Tolstói recebeu injeções de morfina e cânfora. A polícia tentou limitar o acesso a sua procissão de funeral, mas milhares de camponeses reuniram-se nas redondezas, pois pensaram que “algum nobre havia morrido”.\n[…]\nSegundo algumas fontes, Tolstói passou as últimas horas de sua vida pregando o amor, a não-violência e o georgismo aos passageiros do trem.\n[…]\nTolstoísmo\n[…]\nObras de ou sobre Liev Tolstói no Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Decamerão",
      "descricao": "Coletânea de contos de Giovanni Boccaccio, escrita no século quatorze."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No Decamerão, de Boccaccio, por que dez jovens se refugiam numa casa de campo fora de Florença?",
    "resposta": "Para fugir da peste negra",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Decameron"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Decameron",
        "situacao": "ok",
        "texto": "The Decameron ( dih-KAM-ər-ən; Italian: Decameron [deˈkaːmeron, dekameˈrɔn, -ˈron] or Decamerone [dekameˈroːne]), subtitled Prince Galehaut (Old Italian: Prencipe Galeotto [ˈprentʃipe ɡaleˈɔtto, ˈprɛn-]), is a collection of short stories by the 14th-century Italian author Giovanni Boccaccio (1313–1375). It is sometimes nicknamed l'Umana commedia (\"The Human Comedy\"), as it was Boccaccio that dubbe\n[…]\nThe book is structured as a frame story containing 100 tales told by a group of seven young women and three young men; they shelter in a secluded villa just outside Florence in order to escape the Black Death, which was afflicting the city. The epidemic is likely what Boccaccio used for the basis of the book which  was thought to be written between 1348 and 1353. The various tales of love in The Decameron range from the erotic to the tragic.\n[…]\nIt can be generally said that Petrarch's version in Rerum senilium libri XVII, 3, included in a letter he wrote to his friend Boccaccio, was to serve as a source for all the many versions that circulated around Europe, including the translations of the very Decameron into Catalan (first recorded translation into a foreign language, anonymously hand-written in Sant Cugat in 1429; later retranslated by Bernat Metge), French and Spanish.\n[…]\nDecameron Nights (1953) was based on three of the tales and starred Louis Jourdan as Boccaccio.\n[…]\nBecause the Decameron was very popular among contemporaries, especially merchants, many manuscripts of it survive. A comprehensive survey of extant manuscripts by Italian philologist Vittore Branca identified a few copied under Boccaccio's supervision; some have notes written in Boccaccio's hand. Two in particular have elaborate drawings, probably done by Boccaccio himself. Since these manuscripts were widely circulated, Branca thought that they influenced all subsequent illustrations.\n[…]\nThe Decameron at Standard Ebooks"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Decamer%C3%A3o",
        "situacao": "ok",
        "texto": "Decameron (Brasil: Decamerão ou Decameron: ou Príncipe Galeotto / Portugal: Decameron ou Decâmeron (vocábulo com origem no grego antigo: deca, \"dez\", hemeron, \"dias\", \"jornadas\") é uma coleção de cem novelas escritas por Giovanni Boccaccio entre 1348 e 1353.\n[…]\nO livro é estruturado como uma história que contêm 100 contos contados por um grupo de sete moças e três rapazes que se abrigam em um castelo próximo de Florença para fugir da peste negra, que afligia a cidade. Boccaccio provavelmente iniciou Decamerão após a epidemia de 1348 e o concluiu em 1353. Os vários contos de amor em Decamerão vão do erótico ao trágico; contos de sagacidade, piadas e lições de vida. Além do seu valor literário e ampla influência, ele fornece um documento da vida na época.\n[…]\nCom subtítulo de Príncipe Galeotto, o Decamerão marca com certa nitidez o período de transição vivido na Europa com o fim da Idade Média, após o advento da Peste Negra — aliás é neste período de terror que a narrativa se passa.\n[…]\nA narrativa oferecida por Boccaccio sobre o flagelo da peste negra que dizimara a Europa constitui um verdadeiro documento acerca desta praga que devastara o continente. Seu relato ilustra a doença (suas manifestações, evolução, sintomas, etc.), bem como a reação das pessoas diante da perspectiva de uma morte horrenda, a ineficácia da religião católica dominante até aquele momento e de uma medicina quase ou totalmente ineficaz.\n[…]\nComo exemplo, temos o quinto conto da segunda jornada, que fala de Andreuccio, remonta aos contos efésios, de Xenofonte de Éfeso. Até mesmo a sua descrição da Peste Negra não é original: baseia-se na História gentis Langobardorum, de Paulo, o Diácono, que viveu no oitavo século.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Moby Dick",
      "descricao": "Romance de Herman Melville, de 1851, sobre a caça do capitão Ahab a uma baleia branca."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O naufrágio do baleeiro americano Essex, em 1820, inspirou o romance Moby Dick. O que afundou o navio?",
    "resposta": "Um cachalote",
    "fonte": [
      "https://en.wikipedia.org/wiki/Essex_(whaleship)",
      "https://en.wikipedia.org/wiki/Moby-Dick"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Essex_(whaleship)",
        "situacao": "ok",
        "texto": "Essex was an American whaling ship from Nantucket, Massachusetts, which was launched in 1799. On November 20, 1820, while at sea in the southern Pacific Ocean under the command of Captain George Pollard Jr., the ship was attacked and sunk by a sperm whale. About 2,000 nautical miles (3,700 km) from the coast of South America, the 20-man crew was forced to make for land in three whaleboats with wha\n[…]\nFirst mate Owen Chase and cabin boy Thomas Nickerson later wrote accounts of the ordeal. The tragedy attracted international attention, and inspired Herman Melville to write his 1851 novel, Moby-Dick.\n[…]\nEssex sank approximately 2,000 nautical miles (3,700 km) west of South America. The officers debated which route to take towards land. Pollard favored sailing west with the prevailing winds and current. The nearest islands to the west were Marquesas Islands, about 1,200 miles (1,900 km) away, but Pollard was afraid they would encounter cannibals there and concluded that it would be better to sail to the Society Islands, about 2,000 miles (3,200 km).\n[…]\nChase returned to Nantucket on June 11, 1821, to find he had a 14-month-old daughter he had never met. Four months later he had completed an account of the disaster, the Narrative of the Most Extraordinary and Distressing Shipwreck of the Whale-Ship Essex; Herman Melville used it as one of the inspirations for his 1851 novel Moby-Dick. Chase then sailed as first mate on the whaleship Florida, returning to Nantucket in 1823.\n[…]\nAs well as inspiring much of American author Herman Melville's classic 1851 novel Moby-Dick, the story of the Essex tragedy has been dramatized in film, television, music, and poetry:\n[…]\nAmanda Gorman's poetry collection Call Us What We Carry includes a visual poem about the sinking of the Essex.\n[…]\nKarp, Walter (April 1983). \"The Essex Disaster\". American Heritage. 34: 3.\n[…]\nWorks about the Essex at Open Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Moby-Dick",
        "situacao": "ok",
        "texto": "Moby-Dick; or, The Whale is an 1851 epic novel by American writer Herman Melville. The book centers on the sailor Ishmael's narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick, the giant white sperm whale that bit off his leg on the ship's previous voyage.\n[…]\nMelville began writing Moby-Dick in February 1850 and finished 18 months later, a year after he had anticipated. Melville drew on his experience as a common sailor from 1841 to 1844, including on whalers, and on wide reading in whaling literature. The white whale is modeled on a notoriously hard-to-catch albino whale Mocha Dick, and the book's ending is based on the sinking of the whaleship Essex in 1820.\n[…]\nThis encounter may have inspired him to revise and deepen Moby-Dick, which is dedicated to Hawthorne, \"in token of my admiration for his genius\".\n[…]\nThe earliest American review, in the Boston Post for November 20, quoted the London Athenaeum's scornful review, not realizing that some of the criticism of The Whale did not pertain to Moby-Dick. This last point, and the authority and influence of British criticism in American reviewing, is clear from the review's opening: \"We have read nearly one half of this book, and are satisfied that the London Athenaeum is right in calling it 'an ill-compounded mixture of romance and matter-of-fact'\".\n[…]\nMilder, Robert (1977). The Composition of Moby-Dick: A Review and a Prospect.\" ESQ: A Journal of the American Renaissance.\n[…]\nSide-by-side versions of the British and American 1851 first editions of Moby-Dick at the Melville Electronic Library, with differences highlighted\n[…]\nPower Moby Dick\n[…]\nAmerican Icons: Moby-Dick, a Peabody Award–winning episode of Studio 360 that examines the influence of Moby-Dick on contemporary American culture"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Essex_%28baleeiro%29",
        "situacao": "ok",
        "texto": "Essex era um baleeiro americano de Nantucket , Massachusetts , lançado em 1799. Em 1820, enquanto no mar, sob o comando do capitão George Pollard Jr. , um cachalote atacou e afundou-a no sul do Oceano Pacífico. Encalhada a milhares de quilômetros da costa da América do Sul, com pouca comida e água, a tripulação de 20 homens foi forçada a navegar até a costa nas baleeiras sobreviventes do navio.\n[…]\nA história deste naufrágio foi contada por Nathaniel Philbrick no livro No Coração do Mar na única visão e versão do ser humano e também serviu de inspiração para que Herman Melville escrevesse a famosa obra Moby Dick.\n[…]\nMoby Dick\n[…]\nChase, Owen (1965). Iola Haverstick; Betty Shepard, eds. The Wreck of the Whaleship Essex. New York: Harcourt, Brace & World, Inc. p. 124.\n[…]\nPhilbrick, Nathaniel (2001). In the Heart of the Sea: The Tragedy of the Whaleship Essex. New York: Penguin Books. ISBN 0-14-100182-8. OCLC 46949818.\n[…]\nChase, Owen (1821). Narrative of the Most Extraordinary and Distressing Shipwreck of the Whale-Ship Essex. New York: WB Gilley. OCLC 12217894.\n[…]\nKarp, Walter (April 1983). \"The Essex Disaster\". American Heritage. 34: 3.\n[…]\nNickerson, Thomas (1984) [1876]. The Loss of the Ship Essex Sunk by a Whale and the Ordeal of the Crew in Open Boats. Nantucket: Nantucket Historical Society. OCLC 11613950.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Victor Hugo",
      "descricao": "Escritor romântico francês (1802–1885), autor de Os Miseráveis e O Corcunda de Notre-Dame."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que Victor Hugo passou quase vinte anos exilado nas ilhas do Canal da Mancha, onde terminou Os Miseráveis?",
    "resposta": "Oposição a Napoleão Terceiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Victor_Hugo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Victor_Hugo",
        "situacao": "ok",
        "texto": "Victor-Marie Hugo, vicomte Hugo (French: [viktɔʁ maʁi yɡo] ; 26 February 1802 – 22 May 1885) was a French Romantic author, poet, essayist, playwright, journalist, human rights activist and politician.\n[…]\nVictor-Marie Hugo was born on 26 February 1802 (7 Ventôse, year X of the Republic) in Besançon in Eastern France. He was the youngest son of Joseph Léopold Sigisbert Hugo, a general in the Napoleonic army, and Sophie Trébuchet. The couple had two other sons: Abel Joseph and Eugène. The Hugo family came from Nancy in Lorraine, where Hugo's grandfather was a wood merchant. Léopold enlisted in the army of Revolutionary France at fourteen. He was an atheist and an ardent supporter of the Republic.\n[…]\nWhen Louis Napoleon (Napoleon III) seized complete power in 1851, establishing an anti-parliamentary constitution, Hugo openly declared him a traitor to France. He moved to Brussels, then Jersey, from which he was expelled for supporting L'Homme, a local newspaper that had published a letter to Queen Victoria by a French republican deemed treasonous.\n[…]\nWhile in self-exile, Hugo published his famous political pamphlets against Napoleon III, Napoléon le Petit and Histoire d'un crime. The pamphlets were banned in France but nonetheless had a strong impact there. He also composed or published some of his best work during his period in Guernsey, including Les Misérables and three widely praised collections of poetry (Les Châtiments, 1853; Les Contemplations, 1856; and La Légende des siècles, 1859).\n[…]\nState Library of Victoria (2014). \"Victor Hugo: Les Misérables – From Page to Stage\". Website: Retrieved July 2014.\n[…]\nThe Century Was Two Years Old : Victor Hugo The Lilly Library, Bloomington IN"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Victor_Hugo",
        "situacao": "ok",
        "texto": "Victor-Marie Hugo (Besançon, 26 de fevereiro de 1802 – Paris, 22 de maio de 1885) foi um romancista, poeta, dramaturgo, ensaísta, artista, estadista e ativista pelos direitos humanos francês de grande atuação política em seu país. É autor de Les Misérables e de Notre-Dame de Paris, entre diversas outras obras clássicas de fama e renome mundial.\n[…]\nNascido em 26 de fevereiro de 1802 na commune de Besançon, no Doubs, leste da então prestes a ser dissolvida Primeira República Francesa, Victor Hugo foi o terceiro filho de Sophie Trébuchet (1772-1821) e Joseph Léopold Sigisbert Hugo (1774-1828), Conde de Siguença, um major que, mais tarde, se tornaria um general do exército napoleônico.\n[…]\nVictor Hugo passou a infância entre Paris, onde foi educado por muitos tutores e também em escolas privadas, Nápoles e Madrid. Considerado um menino precoce, ainda jovem tornou-se escritor, tendo em 1817, aos 15 anos, sido premiado pela Academia Francesa por um de seus poemas.\n[…]\nVictor Hugo, 27 de junho 1837\".\n[…]\nDurante o Segundo Império, em oposição a Napoléon III, vive em exílio em Jersey, Guernsey e Bruxelas. É um dos únicos proscritos a recusar a anistia decidida algum tempo depois: « Et s'il n'en reste qu'un, je serai celui-là » (\"e se sobra apenas um, serei eu\").\n[…]\nVictor Hugo afastou-se de temas políticos e sociais em seu próximo romance, Les Travailleurs de la Mer (Os Trabalhadores do Mar), publicado em 1866. Ainda assim, o livro foi bem recebido, talvez devido ao sucesso prévio de Os Miseráveis. Dedicado à ilha de Guernsey, localizada no Canal da Mancha e na qual o escritor passou 15 anos de exílio. A descrição de Hugo da batalha do homem contra o mar e as criaturas que nele habitam tornou conhecido um prato incomum em Paris: Lulas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Dia Mundial do Livro",
      "descricao": "Data comemorativa instituída pela Unesco, celebrada em 23 de abril."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a Unesco escolheu o dia vinte e três de abril para celebrar o Dia Mundial do Livro?",
    "resposta": "Datas de morte de Shakespeare e Cervantes",
    "fonte": [
      "https://en.wikipedia.org/wiki/World_Book_Day",
      "https://pt.wikipedia.org/wiki/Dia_Mundial_do_Livro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/World_Book_Day",
        "situacao": "ok",
        "texto": "World Book Day, also known as World Book and Copyright Day or International Day of the Book, is an annual event organized by UNESCO (United Nations Educational, Scientific and Cultural Organization) to promote reading, publishing, and copyright. The first World Book Day was celebrated on 23 April in 1995, and continues to be recognized on that day. A related event in the United Kingdom and Ireland\n[…]\nThe original idea was conceived in 1922 by Vicente Clavel, director of Cervantes publishing house in Barcelona, as a way to honour the author Miguel de Cervantes and boost the sales of books. It was first celebrated in Spain on 7 October 1926, Cervantes' birthday, before being moved to his death date, 23 April, in 1930.\n[…]\nIn 1995, UNESCO decided that the World Book and Copyright Day would be celebrated on 23 April, as the date is also the anniversary of the death of William Shakespeare and Inca Garcilaso de la Vega, as well as that of the birth or death of several other prominent authors.\n[…]\n(In a historical coincidence, Shakespeare and Cervantes died on the same date—23 April 1616—but not on the same day, as at the time, Spain used the Gregorian calendar and England used the Julian calendar; Shakespeare actually died 11 days after Cervantes died, on 3 May of the Gregorian calendar, and Cervantes died on 22 April but was buried a day after, on 23 April.)\n[…]\nIn Spain, Book Day began in 1926, being celebrated annually on 7 October, the date that Miguel de Cervantes was believed to have been born. But it was considered more appropriate to celebrate this day in a more pleasant season for walking and browsing the books in the open-air, spring was much better than autumn. So in 1930 King Alfonso XIII approved the change in celebration of Book Day to 23 April, the supposed date of the death of Cervantes.\n[…]\nWorld Storytelling Day\n[…]\nInternational Day of the Book celebration in Kensington, Maryland, US"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_Mundial_do_Livro",
        "situacao": "ok",
        "texto": "O Dia Mundial do Livro e do Direito de Autor (também chamado de Dia Mundial do Livro) é um evento comemorado todos os anos no dia 23 de Abril, e organizado pela UNESCO para promover a o prazer da leitura, a publicação de livros e a protecção dos direitos autorais. O dia foi criado na XXVIII Conferência Geral da UNESCO que ocorreu entre 25 de outubro e 16 de novembro de 1995.\n[…]\nA data de 23 de abril foi escolhida porque nesta data do ano de 1616 morreram Miguel de Cervantes, William Shakespeare e Inca Garcilaso de la Vega. Para além disto, nesta data, em outros anos, também nasceram ou morreram outros escritores importantes como Maurice Druon, Vladimir Nabokov, Josep Pla e Manuel Mejía Vallejo.\n[…]\nTodos os anos são organizados uma série de eventos ao redor do mundo para celebrar o dia.\n[…]\nDia Internacional do Livro\n[…]\nDia Mundial da Poesia\n[…]\n«World Book and Copyright Day» (em inglês)\n[…]\n«UNESCO and Libraries» (em inglês)\n[…]\n«UNESCO Chairs in Intellectual Property Rights» (em inglês)"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Grande Irmão",
      "descricao": "Líder onipresente e vigilante do regime totalitário no romance 1984, de George Orwell."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O reality show Big Brother, em que os participantes são vigiados o tempo todo, tirou seu nome de um personagem de que romance?",
    "resposta": "1984, de George Orwell",
    "fonte": [
      "https://en.wikipedia.org/wiki/Big_Brother_(Nineteen_Eighty-Four)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Big_Brother_(Nineteen_Eighty-Four)",
        "situacao": "ok",
        "texto": "Big Brother is a character and symbol in George Orwell's 1949 dystopian novel Nineteen Eighty-Four. He is ostensibly the leader of Oceania, a totalitarian superstate wherein the ruling party, Ingsoc, wields total power for its own sake over the inhabitants. His image appears everywhere on posters within Oceanian society as a metaphor for the Party's complete control of the population.\n[…]\nThe concepts of Big Brother and the totalitarian regime of Oceania in George Orwell's dystopian novel Nineteen Eighty-Four lie in his experiences in the Spanish Civil War. Orwell had volunteered to fight for the POUM and spent months on the Aragon front. In Barcelona he personally witnessed an atmosphere of terror when, in May 1937, the communists revolted against their allies resulting in five days of violence. Orwell and his wife, Eileen Blair, were forced to flee Spain.\n[…]\nShe commented that his existence is unimportant as his power comes from his superiority: \"He is never wrong, has no idiosyncrasies that can be exploited, no personality that can be manipulated, no desire that can be leveraged against him.\" American author Stephen King ranked Big Brother as one of the ten greatest fictional villains in books for Entertainment Weekly due to him \"watching you from every telescreen in George Orwell’s more-relevant-than-ever novel of a nightmare dictatorship\".\n[…]\nOn New Year's Day, 1984, an international satellite installation by Nam June Paik titled Good Morning, Mr. Orwell was televised as a celebration of television and a rebuttal to Orwell's dystopian vision. The show featured American rock band Oingo Boingo performing the song \"Wake Up, (It's 1984)\", which includes the lyrics, \"Big Brother's screaming but we don't care, cause he's got nothing to say\". Paik admitted to The New York Times that he had not read the novel, describing it as \"boring\".\n[…]\nLittle Brother (Doctorow novel)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Irm%C3%A3o",
        "situacao": "ok",
        "texto": "\"Big Brother\" (em português, literalmente \"Irmão Mais Velho\" ou coloquialmente \"Grande Irmão\"), é um personagem fictício no romance 1984 de George Orwell.\n[…]\nNa sociedade descrita por Orwell, todas as pessoas estão sob constante vigilância das autoridades, principalmente por teletelas (do original \"telescreen\"), sendo constantemente lembradas pelas frases propaganda do Partido Interno, partido governante da Oceania: \"o Grande Irmão zela por ti\"; \"o Grande Irmão está te observando\" (do original \"Big Brother is watching you\").\n[…]\nA descrição física do \"Grande Irmão\" assemelha-se a ditadores, como o socialista Joseph Stalin, nazista Adolf Hitler ou Herbert Kitchener[carece de fontes]?.\n[…]\nDesde a publicação de 1984, as expressões \"Big Brother\" ou \"Grande Irmão\" são usadas geralmente para descrever qualquer excesso de controle ou autoridade por uma figura, ou tentativas por parte do governo de aumentar a vigilância, ou iniciativas (sejam de governos, órgãos de governo ou empresas) que culminam em violação e invasão de privacidade.\n[…]\nO reality show Big Brother é baseado no conceito de pessoas com constante vigilância e proveio deste personagem. Em 2000, após o \"Big Brother\" estrear nos Estados Unidos pela Columbia Broadcasting System, uma empresa chamada \"Orwell Productions, Inc.\" entrou com um processo no tribunal federal de Chicago, por violação dos direitos de autor e de marca. Na véspera do julgamento, o caso foi resolvido para todas as partes com \"satisfação mútua\". O dinheiro que a CBS pagou nunca foi divulgado.\n[…]\nPorém, o romance 1984 permanecerá sob proteção autoral até 2044.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Luas de Urano",
      "descricao": "Satélites naturais do planeta Urano, batizados com nomes de personagens literários."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Titânia, Oberon e Miranda, luas do planeta Urano, receberam nomes de personagens de que escritor?",
    "resposta": "William Shakespeare",
    "distratores": [
      "Homero",
      "Dante Alighieri",
      "Goethe"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Moons_of_Uranus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moons_of_Uranus",
        "situacao": "ok",
        "texto": "There are currently 29 known moons of the planet Uranus. The 27 with names are named after characters that appear in, or are mentioned in, William Shakespeare's plays and Alexander Pope's poem The Rape of the Lock. Uranus's moons are divided into three groups: fourteen inner moons, five major moons, and ten irregular moons. The inner and major moons all have prograde orbits and are cumulatively cl\n[…]\nThe first two moons to be discovered were Titania and Oberon, which were spotted by Sir William Herschel on January 11, 1787, six years after he had discovered the planet itself. Later, Herschel thought he had discovered up to six moons (see below) and perhaps even a ring. For nearly 50 years, Herschel's instrument was the only one with which the moons had been seen.\n[…]\nIn the 1840s, better instruments and a more favorable position of Uranus in the sky led to sporadic indications of satellites additional to Titania and Oberon. Eventually, the next two moons, Ariel and Umbriel, were discovered by William Lassell in 1851.\n[…]\nThe Roman numbering scheme of Uranus's moons was in a state of flux for a considerable time, and publications hesitated between Herschel's designations (where Titania and Oberon are Uranus II and IV) and William Lassell's (where they are sometimes I and II). With the confirmation of Ariel and Umbriel, Lassell numbered the moons I through IV from Uranus outward, and this finally stuck. In 1852, Herschel's son John Herschel gave the four then-known moons their names.\n[…]\nHerschel, instead of assigning names from Greek mythology, named the moons after magical spirits in English literature: the fairies Oberon and Titania from William Shakespeare's A Midsummer Night's Dream, and the sylph Ariel and gnome Umbriel from Alexander Pope's The Rape of the Lock (Ariel is also a spirit in Shakespeare's The Tempest).\n[…]\nGazetteer of Planetary Nomenclature—Uranus (USGS)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sat%C3%A9lites_de_Urano",
        "situacao": "ok",
        "texto": "Urano, o sétimo planeta do Sistema Solar, possui 29 satélites naturais conhecidos. Todos receberam nomes de personagens das obras de William Shakespeare e Alexander Pope. O astrônomo William Herschel descobriu as duas primeiras luas do planeta, Titânia e Oberon, em 1787. As outras luas esféricas foram descobertas em 1851 por William Lassell (Ariel e Umbriel) e em 1948 por Gerard Kuiper (Miranda).\n[…]\nAs duas primeiras luas de Urano conhecidas, Titânia e Oberon, foram descobertas pelo astrônomo alemão-britânico William Herschel em 11 de janeiro de 1787, seis anos após ele ter descoberto o planeta em si. Mais tarde, Herschel acreditou ter observado pelo menos seis luas e até um anel ao redor do planeta (veja abaixo). Por cerca de cinquenta anos, os instrumentos de Herschel eram os únicos com os quais as luas haviam sido vistas.\n[…]\nDepois da descoberta de Titânia e Oberon por William Herschel em 1787, ele acreditou ter descoberto outras quatro luas; duas em 18 de janeiro e 9 de fevereiro de 1790, e mais duas em 28 de fevereiro e 26 de março de 1794. Assim, pelos próximos anos acreditava-se que Urano tinha um sistema de seis satélites, embora as outras quatro luas nunca haviam sido confirmadas por outro astrônomo.\n[…]\nAo invés de escolher nomes da mitologia grega como era tradição na época, Herschel nomeou as luas a partir de entidades mágicas da literatura inglesa: as fadas Oberon e Titânia de Sonho de uma Noite de Verão, de William Shakespeare, e os silfos Ariel e Umbriel de O Rapto da Madeixa, de Alexander Pope (Ariel também é um espírito em A Tempestade de Shakespeare). A razão mais provável para essa escolha é que Urano, como deus do céu e do ar, seria atendido por espíritos do ar.\n[…]\nA lua descoberta mais recentemente, S/2023 U 1, ainda não possui um nome permanente, mas eventualmente receberá um nome das obras de Shakespeare, seguindo a tradição.\n[…]\nObras de William Shakespeare:\n[…]\nUrano",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Starbuck",
      "descricao": "Primeiro imediato do baleeiro Pequod no romance Moby Dick, de Herman Melville."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A rede de cafés Starbucks tirou seu nome do primeiro imediato de um navio baleeiro de que romance?",
    "resposta": "Moby Dick",
    "fonte": [
      "https://en.wikipedia.org/wiki/Starbucks",
      "https://en.wikipedia.org/wiki/Starbuck_(Moby-Dick)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Starbucks",
        "situacao": "ok",
        "texto": "Starbucks Corporation is an American multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington. It was founded in 1971 by Jerry Baldwin, Zev Siegl, and Gordon Bowker at Seattle's Pike Place Market initially as a coffee bean wholesaler.\n[…]\nBowker recalls that a business partner of his, Terry Heckler, thought words beginning with the letters \"st\" were powerful, leading the founders to create a list of words beginning with \"st\", hoping to find a brand name. They chose \"Starbo\", a misreading of the mining town Storbo in the Cascade Range named after Peter Storbo, founder and president of the Mount Rainier Mining Company. From there, the group remembered \"Starbuck\", the name of the chief mate in the book Moby-Dick.\n[…]\nBowker said, \"Moby-Dick didn't have anything to do with Starbucks directly; it was only coincidental that the sound seemed to make sense.\"\n[…]\nOn April 29, 2024, Starbucks announced its official entry to Ecuador and Honduras in mid-year and late 2024, respectively. On August 14, 2024, Starbucks commenced operations in Ecuador, with its first location in the country at Scala Shopping Mall in Quito. The company announced the plans of opening four more cafes in the capital city until the end of 2025. In July 2026, Starbucks opened its first location in Guayaquil, and now has 10 stores across the country.\n[…]\nIndividual Starbucks cafes have faced criticism over incidents of racial bias, leading the company to close 8,000 cafes for a day in 2018 for racial bias training. In 2014, a Milwaukee Starbucks employee called the police when they noticed a black man sleeping in a park, which resulted in the police officer killing the man by shooting him 14 times, prompting protests.\n[…]\nBusiness data for Starbucks:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Starbuck_(Moby-Dick)",
        "situacao": "ok",
        "texto": "Moby-Dick (1851) is a novel by Herman Melville. While some characters only appear in the shore-based chapters at the beginning of the book, and others are captains and crewmembers of other ships, the majority of the characters are officers or crewmembers of the whaling ship Pequod.\n[…]\nThe young chief mate. A thoughtful and intellectual Quaker from Nantucket. He is married and has a son. Such is his desire to return to them that, when nearly reaching the last leg of their quest for Moby Dick, he considers arresting or even killing Ahab with a loaded musket, and turning the ship back for home. Starbuck is alone among the crew in objecting to Ahab's quest, declaring it madness to want revenge on an animal, which lacks reason; such a desire is blasphemous to his Quaker religion.\n[…]\nWhile Boomer also anthropomorphizes Moby Dick, describing the \"boiling rage\" the whale seemed to be in when Boomer attempted to capture him, he has easily come to terms with losing his arm, and harbors no ill-will against Moby Dick, advising Ahab to abandon the pursuit.\n[…]\nBachelor: his ship fully laden after a successful cruise, the captain angers Ahab by refusing to believe in Moby Dick's existence, reinforcing the ambiguity between the whale's real and mythical characteristics.\n[…]\nRachel: Captain Gardiner wishes Ahab to help him seek a missing whaleboat in which his son was a crew member (described, Biblically, as \"seeking her children\"). Ahab refuses. After Moby Dick sinks the Pequod, the Rachel rescues Ishmael, the sole survivor.\n[…]\nDelight: the captain has attempted to capture Moby Dick, resulting in the destruction of one of its whaleboats and the deaths of five crewmen. This misfortune serves as a harbinger of the doom that is about to befall the Pequod."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Starbucks",
        "situacao": "ok",
        "texto": "Starbucks é uma empresa multinacional norte-americana, com a maior cadeia de cafeterias do mundo. Tem sua sede na cidade de Seattle, estado de Washington. A companhia criou seu nome inspirada em parte pelo personagem Starbuck, do livro Moby Dick, e seu logotipo é um entalhe escandinavo do século XVI de uma sereia com duas caudas.\n[…]\nA primeira loja Starbucks foi aberta em 1971 por três sócios - os professores Jerry Baldwin e Zev Siegel, e o escritor Gordon Bowker.\n[…]\nO nome da empresa foi inspirado pela personagem Starbuck do livro Moby Dick, assim como um campo de mineração no Monte Rainier, Starbo ou Storbo. Seu logotipo apresenta uma sereia com duas caudas. A empresa quase foi batizada \"Cargo House\", Terry Heckler, sócio e amigo de Gordon Bowker, comentou informalmente que palavras iniciadas com \"st\" tinham um certo poder. Bowker então começou uma lista de palavras começadas com estas letras.\n[…]\nOutra pessoa então apareceu com um mapa das minas do Monte Rainier, onde havia uma cidade mineira chamada Starbo, o que fez Bowker lembrar do personagem Starbuck de Moby-Dick, livro de Herman Melville.\n[…]\nDe acordo com o livro Dedique-se de coração: Como a Starbucks se tornou uma grande empresa de xícara em xícara (Pour Your Heart Into It: How Starbucks Built a Company One Cup at a Time) de Howard Schultz, o nome da empresa tem origem em Moby Dick, no entanto não da forma direta como se pode presumir.\n[…]\nEm 2018, a SouthRock, um fundo de private equity, assume a operação brasileira por 20 anos, iniciando a terceira fase da Starbucks no Brasil, que marca também o início da expansão para fora do eixo Rio-São Paulo. Em 2019, são inauguradas as primeiras lojas em Florianópolis, as primeiras no Sul do Brasil. Também foi confirmada a chegada da rede na capital, Brasília, em 2020.\n[…]\nStarbucks Brasil\n[…]\nStarbucks Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "O Ano da Morte de Ricardo Reis",
      "descricao": "Romance de José Saramago, publicado em 1984, ambientado em Lisboa em 1936."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que heterônimo de Fernando Pessoa virou protagonista de um romance de José Saramago, publicado nos anos oitenta?",
    "resposta": "Ricardo Reis",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Year_of_the_Death_of_Ricardo_Reis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Year_of_the_Death_of_Ricardo_Reis",
        "situacao": "ok",
        "texto": "The Year of the Death of Ricardo Reis (Portuguese: O Ano da Morte de Ricardo Reis) is a 1984 novel by the Portuguese novelist José Saramago, who was awarded the 1998 Nobel Prize in Literature. The book chronicles the final year in the life of the title character, Ricardo Reis, one of the many heteronyms used by the Portuguese writer Fernando Pessoa.\n[…]\nIn the novel, Ricardo Reis returns to Lisbon from Brazil, upon catching wind of Pessoa's death. While there, he chooses not to resume practicing medicine, but rather takes up residence in a hotel, where he wastes his days reading newspapers and wandering the streets of Lisbon.\n[…]\nReis also carries on a lackluster love affair, but even in what seems to be his most intimate relationships, he is continually and voluntarily alienated from society.\n[…]\nThe most revealing glimpse of Reis is through a series of conversations with the spirit of Fernando Pessoa, over the course of which Reis loses a clear concept of the nature of life and death and the difference between the two.\n[…]\nThe book is also an exercise in meta-literature. Fernando Pessoa had created the character of Ricardo Reis fifty years or so prior to its release, giving him a biography and writing many poems under that name. That Saramago would place the two characters side by side underscores a deliberate blurring of the boundaries between fantasy and reality, a common theme in Saramago's work, and a rejection of traditional limitations on narrative practices.\n[…]\nThe Year of the Death of Ricardo Reis is written in Saramago's distinctive style, which disregards the traditional use of punctuation, except for commas and periods, and which denotes dialogue and changes in the speaker using only capital letters. Saramago uses long, flowing sentences and paragraphs often several pages in length."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Ano_da_Morte_de_Ricardo_Reis",
        "situacao": "ok",
        "texto": "O Ano da Morte de Ricardo Reis é um romance escrito em 1984 por José Saramago cujo protagonista é o heterónimo Ricardo Reis de Fernando Pessoa. Nesta obra Saramago dá continuidade à biografia de Ricardo Reis depois da morte do seu criador, Fernando Pessoa.\n[…]\nRicardo Reis - personagem principal, heterónimo de Fernando Pessoa. Médico de profissão, monárquico exilado no Brasil desde 1919;\n[…]\nFernando Pessoa - aparece em fantasma e fora o \"criador\" de Ricardo Reis;\n[…]\nLídia - Empregada de limpeza do Hotel em que o Dr. Ricardo Reis se encontra hospedado e interessada nos últimos acontecimentos de Portugal e no resto da Europa;\n[…]\nNa biografia de Ricardo Reis e de Álvaro de Campos, ao contrário da biografia de Alberto Caeiro, não constam as suas mortes. Por isso, após a morte de Pessoa, José Saramago aventurou-se a terminar a história de um deles, o que acha que \"sábio é aquele que se contenta com o espectáculo do mundo\".\n[…]\nSaramago aproveita-se do fato de Fernando Pessoa não ter determinado a data da morte do protagonista do romance para fazê-lo testemunhar o período em que o fascismo aos poucos se instalava na sociedade portuguesa. O plano da imaginação cruza-se então com o da história: Reis vai morrer no mesmo período em que começaria a longa agonia de Portugal.\n[…]\nEm 2016 esta obra foi adaptada por Hélder Costa para teatro pel'A Barraca com a interpretação de Adérito Lopes em Ricardo Reis e Ruben Garcia em Fernando Pessoa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Hamlet",
      "descricao": "Tragédia de William Shakespeare sobre o príncipe da Dinamarca que vinga a morte do pai."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que tragédia de Shakespeare, em que um tio mata o rei e toma o trono do sobrinho, inspirou a animação O Rei Leão?",
    "resposta": "Hamlet",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Lion_King"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Lion_King",
        "situacao": "ok",
        "texto": "The Lion King is a 1994 American animated musical drama film directed by Roger Allers and Rob Minkoff and written by Irene Mecchi, Jonathan Roberts, and Linda Woolverton. Produced by Walt Disney Feature Animation, it features an ensemble voice cast consisting of Matthew Broderick, James Earl Jones, Jeremy Irons, Jonathan Taylor Thomas, Moira Kelly, Niketa Calame, Madge Sinclair, Nathan Lane, Ernie\n[…]\nThe Lion King's plot draws inspiration from several sources, notably William Shakespeare's play Hamlet, as well as the Bible. Woolverton, screenwriter for Disney's Beauty and the Beast (1991), drafted early versions of The Lion King's script, which Mecchi and Roberts were hired to revise once Woolverton left to prioritize other projects.\n[…]\nAllers and Minkoff pitched the revised story to Katzenberg and Michael Eisner, to which Eisner felt the story \"could be more Shakespearean\"; he suggested modeling the story on King Lear. Maureen Donley, an associate producer, countered, stating that the story resembled Hamlet. Continuing on the idea, Allers recalled Katzenberg asking them to \"put in as much Hamlet as you can\".\n[…]\nRoger Ebert of the Chicago Sun-Times gave the film three and a half stars out of a possible four and called it \"a superbly drawn animated feature\". He further wrote in his print review, \"The saga of Simba, which in its deeply buried origins owes something to Greek tragedy and certainly to Hamlet, is a learning experience as well as an entertainment.\" On the television program Siskel & Ebert, the film was praised but received a mixed reaction when compared to previous Disney films.\n[…]\nThe Lion King inspired two attractions retelling the story of the film at Walt Disney Parks and Resorts. The first, \"The Legend of the Lion King\", featured a recreation of the film through life-size puppets of its characters, and ran from 1994 to 2002 at Magic Kingdom in Walt Disney World."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Rei_Le%C3%A3o",
        "situacao": "ok",
        "texto": "The Lion King (bra/prt: O Rei Leão) é o 32.º longa-metragem animado produzido pela Walt Disney Feature Animation e pela Walt Disney Pictures e distribuído pela Buena Vista Pictures. Foi dirigido por Roger Allers e Rob Minkoff, com roteiro creditado a Linda Woolverton, Irene Mecchi e Jonathan Roberts, e música de Elton John com letras de Tim Rice.\n[…]\nNas Terras do Reino, na África, um leão comanda os animais como seu rei. O nascimento de Simba, filho do Rei Mufasa e da rainha Sarabi, cria inveja e ressentimento no irmão mais novo de Mufasa, Scar, porque o seu sobrinho irá substituí-lo como herdeiro do trono. Depois de já ter crescido e se tornado um filhote, Simba é levado por Mufasa para um passeio pelas Terras do Reino, ensinando-lhe sobre as responsabilidades de ser um rei e o ciclo da vida.\n[…]\nO Rei Leão foi o primeiro longa-metragem de animação da Disney criado a partir de uma história original, em oposição as obras anteriores que eram baseados em trabalhos já existente. Os cineastas disseram que a história de O Rei Leão foi inspirado pelas de José e Moisés da Bíblia, Hamlet de Shakespeare, e Bambi. Durante o verão de 1992, o roteirista Irene Mecchi entrou para equipe, e  Jonathan Roberts juntou-se poucos meses depois.\n[…]\nO Rei Leão também inspirou o álbum de 1995, Rhythm of Pride Lands, com oito canções de Zimmer, Mancina e Lebo M.\n[…]\nRoger Ebert deu-lhe 3.5 de 4 estrelas e o chamou de \"um filme de animação soberbamente desenhado\" e, em sua crítica, escreveu: \"A saga de Simba, que em suas origens profundamente enterradas deve algo a tragédia grega e certamente a Hamlet, é uma experiência de aprendizagem, bem como um entretenimento.\" No programa de televisão Siskel & Ebert, o filme foi elogiado, mas recebeu uma recepção mista em relação aos filmes anteriores da Disney.\n[…]\nHamlet\n[…]\nSite Brasileiro do Rei Leão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Jorge Luis Borges",
      "descricao": "Escritor argentino (1899–1986), autor de Ficções e O Aleph."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que condição física, atribuída pela tradição a Homero, o argentino Jorge Luis Borges também teve a partir da maturidade?",
    "resposta": "Cegueira",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jorge_Luis_Borges"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jorge_Luis_Borges",
        "situacao": "ok",
        "texto": "Jorge Francisco Isidoro Luis Borges ( BOR-hess; Spanish: [ˈxoɾxe ˈlwis ˈboɾxes] ; 24 August 1899 – 14 June 1986) was an Argentine short-story writer, essayist, poet and translator regarded as a key figure in Spanish-language and international literature. His best-known works, Ficciones (transl. Fictions) and El Aleph (transl.\n[…]\nJorge Francisco Isidoro Luis Borges was born into an educated middle-class family on 24 August 1899. They lived in Palermo, a then-poor area of Buenos Aires. Borges's mother, Leonor Acevedo Suárez, worked as a translator and came from a family of criollo (Spanish) origin. Her family had been much involved in the European settling of South America and the Argentine War of Independence, and she spoke often of their heroic actions.\n[…]\nHis 1929 book Cuaderno San Martín includes the poem \"Isidoro Acevedo\", commemorating his grandfather, Isidoro de Acevedo Laprida, a soldier of the Buenos Aires Army. A descendant of the Argentine lawyer and politician Francisco Narciso de Laprida, Acevedo Laprida fought in the battles of Cepeda in 1859, Pavón in 1861, and Los Corrales in 1880. Acevedo Laprida died of pulmonary congestion in the house where his grandson Jorge Luis Borges was born.\n[…]\nAccording to a study by Antonio Andrade, Jorge Luis Borges had Portuguese ancestry: Borges's great-grandfather, Francisco, was born in Portugal in 1770, and lived in Torre de Moncorvo, in the north of the country, before he emigrated to Argentina, where he married Carmen Lafinur.\n[…]\nJorge Luis Borges (1968)\n[…]\nWorks by Jorge Luis Borges at Open Library\n[…]\nBorges Center, University of Pittsburgh.\n[…]\nThe Friends of Jorge Luis Borges Worldwide Society & Associates\n[…]\nInternational Foundation Jorge Luis Borges\n[…]\nJorge Luis Borges recorded at the Library of Congress for the Hispanic Division's audio literary archive on 23 April 1976."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jorge_Luis_Borges",
        "situacao": "ok",
        "texto": "Jorge Francisco Isidoro Luis Borges Acevedo (Espanhol: [ˈxoɾxe ˈlwis ˈβoɾxes] (); Buenos Aires, 24 de agosto de 1899 – Genebra, 14 de junho de 1986) foi um escritor, poeta, tradutor, crítico literário e ensaísta argentino, considerado um dos maiores escritores do século XX. Sua obra, que dialogava com o surrealismo e a literatura fantástica, exerceu grande influência sobre o boom latino-americano \n[…]\nEstudiosos notaram que a progressiva cegueira de Borges ajudou-o a criar novos símbolos literários através da imaginação, já que \"os poetas, como os cegos, podem ver no escuro\". Os poemas do seu último período dialogam com vultos culturais como Spinoza, Luís de Camões e Virgílio.\n[…]\nUm descendente do advogado e político argentino Francisco Narciso de Laprida, Acevedo lutou nas batalhas de Cepeda em 1859, Pavón em 1861 e Los Corrales em 1880. Isidoro de Acevedo Laprida morreu de congestão pulmonar na casa onde o seu neto Jorge Luis Borges nasceu.\n[…]\nA partir da década de 50, afetado pela progressiva cegueira, Borges passou a dedicar-se à poesia, produzindo obras notáveis como \"A cifra\" (1981), \"Atlas\" (um esboço de geografia fantástica, 1984) e \"Os conjurados\" (1985), a sua última obra. Também produziu prosa (\"Outras inquisições\", ensaios, 1952; \"O livro de areia\", contos, 1975), notando-se o claro influxo da cegueira.\n[…]\nEm 1999, o governo argentino emitiu uma série de moedas comemorativas pelo centenário do nascimento de Borges. O governo da Cidade de Buenos Aires organiza visitas guiadas gratuitas a pontos da cidade relacionados a Borges e um trecho da Calle Serrano, no bairro de Palermo, foi rebatizado de Jorge Luis Borges em homenagem ao escritor.\n[…]\n«Internetaleph.com» (em inglês e espanhol). Jorge Luis Borges\n[…]\n«Poema de Jorge Luis Borges en Buenos Aires» (em inglês). , Argentina, 'Fundación mítica de Buenos Aires'\n[…]\n«Poemas de Jorge Luis Borges» (em espanhol). www.los-poetas.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "O Corvo",
      "descricao": "Poema narrativo de Edgar Allan Poe, publicado em 1845."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O time de futebol americano Baltimore Ravens tem o nome inspirado em qual poema de Edgar Allan Poe?",
    "resposta": "O Corvo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Baltimore_Ravens",
      "https://en.wikipedia.org/wiki/The_Raven"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Baltimore_Ravens",
        "situacao": "ok",
        "texto": "The Baltimore Ravens are a professional American football team based in Baltimore. The Ravens compete in the National Football League (NFL) as a member of the American Football Conference (AFC) North division. The team plays its home games at M&T Bank Stadium and is headquartered in Owings Mills, Maryland.\n[…]\nThe name \"Ravens\" was inspired by Edgar Allan Poe's poem The Raven. Chosen in a fan contest that drew 33,288 voters, the allusion honors Poe who spent the early part of his career in Baltimore and is buried there. Other names polled included \"Marauders\", \"Americans\", and \"Bombers\", among others. As The Baltimore Sun reported at the time, fans also \"liked the tie-in with the other birds in town, the Orioles, and found it easy to visualize a tough, menacing black bird\".\n[…]\nBefore the football team, there was the Baltimore Ravens wheelchair basketball team — the original Baltimore Ravens. In 1972, the Ravens wheelchair basketball team was founded by Ralph Smith, long-time resident of Baltimore, second Vice President of the National Wheelchair Basketball Association (NWBA) and Member of the NWBA Hall of Fame. The name \"Ravens\" was inspired by Bob Ardinger, a member of the Ravens wheelchair basketball team.\n[…]\nThe Baltimore Sun ran a poll showing three designs for new helmet logos. Fans participating in the poll expressed a preference for a raven's head in profile over other designs. Art Modell announced that he would honor this preference but still wanted a letter B to appear somewhere in the design. The new Ravens logo, introduced in 1999, featured a raven's head in profile with the letter B superimposed. The secondary logo is a shield that honors Baltimore's history of heraldry.\n[…]\nBaltimore Ravens at the National Football League official website"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Raven",
        "situacao": "ok",
        "texto": "\"The Raven\" is a narrative poem by American writer Edgar Allan Poe. First published in January 1845, the poem is often noted for its musicality, stylized language and supernatural atmosphere. It tells of a distraught lover who is paid a visit by a mysterious raven that repeatedly speaks a single word: \"nevermore\". The lover, often identified as a student, is lamenting the loss of his love, Lenore.\n[…]\nLater publications of \"The Raven\" included artwork by well-known illustrators. Notably, in 1858 \"The Raven\" appeared in a British Poe anthology with illustrations by John Tenniel, the Alice in Wonderland illustrator (The Poetical Works of Edgar Allan Poe: With Original Memoir, London: Sampson Low). \"The Raven\" was published independently with lavish woodcuts by Gustave Doré in 1884 (New York: Harper & Brothers). Doré died before its publication.\n[…]\nIn part due to its dual printing, \"The Raven\" made Edgar Allan Poe a household name almost immediately, and turned Poe into a national celebrity. Readers began to identify poem with poet, earning Poe the nickname \"The Raven\". The poem was soon widely reprinted, imitated, and parodied. Though it made Poe popular in his day, it did not bring him significant financial success. As he later lamented, \"I have made no money.\n[…]\nIt has been suggested Outis was really Cornelius Conway Felton, if not Poe himself. After Poe's death, his friend Thomas Holley Chivers said \"The Raven\" was plagiarized from one of his poems. In particular, he claimed to have been the inspiration for the meter of the poem as well as the refrain \"nevermore\".\n[…]\nThe name of the Baltimore Ravens, a professional American football team, was inspired by the poem. Chosen in a fan contest that drew 33,288 voters, the allusion honors Poe, who spent the early part of his career in Baltimore and is buried there.\n[…]\n\"The Raven\" – Full text of the first printing, from the American Review, 1845"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baltimore_Ravens",
        "situacao": "ok",
        "texto": "O Baltimore Ravens é um time profissional de futebol americano baseado em Baltimore, Maryland. Os Ravens competem na National Football League (NFL) como um clube membro da divisão norte da American Football Conference (AFC). A equipe joga seus jogos em casa no M&T Bank Stadium e está sediada em Owings Mills.\n[…]\nO nome \"Ravens\" foi inspirado no poema de Edgar Allan Poe, The Raven que passou a primeira parte de sua carreira em Baltimore e está enterrado lá. O nome foi escolhida em uma competição de fãs que atraiu 33.288 eleitores. Como o Baltimore Sun relatou na época, os fãs também \"gostaram da ligação com os outros pássaros da cidade, os Orioles, e acharam fácil visualizar um pássaro preto duro e ameaçador\".\n[…]\nO primeiro logo no capacete do time, usado de 1996 a 1998, apresentava asas de corvo estendidas exibindo uma letra B emoldurada pela palavra Ravens e uma cruz por baixo. O Tribunal de Apelações do 4º Circuito dos Estados Unidos confirmou a sentença do júri de que o logotipo infringia direitos autorais mantidos por Frederick E. Bouchat, um artista amador de Maryland.\n[…]\nO Baltimore Sun fez uma pesquisa mostrando três projetos de novos logo no capacete. Os fãs que participaram da pesquisa expressaram uma preferência por uma cabeça de corvo no perfil sobre outros projetos. Art Modell anunciou que ele honraria essa preferência, mas ainda queria que uma letra B aparecesse em algum lugar do design.\n[…]\nO novo logotipo da Ravens, lançado em 1999, apresentava uma cabeça de corvo de perfil com a carta sobreposta. O logotipo secundário é um escudo que honra a história heráldica de Baltimore. Emblemas alternados de Calvert e Crossland (vistos também na bandeira de Maryland e na bandeira de Baltimore) são interligados com letras estilizadas B e R.\n[…]\n«Site do Baltimore Ravens». www.baltimoreravens.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Mary Wollstonecraft",
      "descricao": "Escritora e filósofa inglesa (1759–1797), autora de Reivindicação dos Direitos da Mulher."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A pioneira feminista Mary Wollstonecraft, autora de Reivindicação dos Direitos da Mulher, era o que da autora de Frankenstein?",
    "resposta": "Mãe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mary_Wollstonecraft",
      "https://en.wikipedia.org/wiki/Mary_Shelley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mary_Wollstonecraft",
        "situacao": "ok",
        "texto": "Mary Wollstonecraft (, also UK: ; 27 April 1759 – 10 September 1797) was an English writer and philosopher best known for her advocacy of women's rights. Until the late twentieth century, Wollstonecraft's life, which encompassed several unconventional (at the time) personal relationships, received more attention than her writing. Wollstonecraft is regarded as one of the founding feminist philosoph\n[…]\nMaria: or, The Wrongs of Woman (1798), an unfinished novel published posthumously and often considered Wollstonecraft's most radical feminist work, revolves around the story of a woman imprisoned in an insane asylum by her husband; like Mary, Maria also finds fulfilment outside of marriage, in an affair with a fellow inmate and a friendship with one of her keepers. Neither of Wollstonecraft's novels depict successful marriages, although she posits such relationships in the Rights of Woman.\n[…]\nWollstonecraft, Mary (2005). \"On the pernicious effects which arise from the unnatural distinctions established in society\". In Cudd, Ann E.; Andreasen, Robin O. (eds.). Feminist theory: a philosophical anthology. Oxford: Blackwell. pp. 11–16. ISBN 978-1-4051-1661-9.\n[…]\nFalco, Maria J., ed. Feminist Interpretations of Mary Wollstonecraft. University Park: Penn State Press, 1996. ISBN 978-0-271-01493-7.\n[…]\nHalldenius, Lena. Mary Wollstonecraft and Feminist Republicanism: Independence, Rights and the Experience of Unfreedom, London: Pickering & Chatto, 2015. ISBN 978-1-84893-536-5.\n[…]\nKelly, Gary. Revolutionary Feminism: The Mind and Career of Mary Wollstonecraft. New York: St. Martin's, 1992. ISBN 978-0-312-12904-0.\n[…]\nTaylor, Barbara. Mary Wollstonecraft and the Feminist Imagination. Cambridge University Press, 2003. ISBN 978-0-521-66144-7.\n[…]\nWorks by Mary Wollstonecraft at Project Gutenberg\n[…]\n\"Mary Wollstonecraft, The French Revolution and the Tyranny of Men\" by Susan J. Wolfson at KPFA, 20 April 2023."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mary_Shelley",
        "situacao": "ok",
        "texto": "Mary Wollstonecraft Shelley (née Godwin; 30 August 1797 – 1 February 1851) was an English novelist who wrote the Gothic novel Frankenstein; or, The Modern Prometheus (1818), which is considered an early example of science fiction. She also edited and promoted the works of her husband, the Romantic poet and philosopher Percy Bysshe Shelley. Her father was the political philosopher William Godwin an\n[…]\nMary Shelley was born Mary Wollstonecraft Godwin in Somers Town, London, in 1797. She was the second child of the feminist philosopher, educator, and writer Mary Wollstonecraft and the first child of the philosopher, novelist, and journalist William Godwin. Wollstonecraft died of puerperal fever shortly after Mary was born. Godwin was left to bring up Mary, along with her older half-sister, Fanny Imlay, Wollstonecraft's child by the American speculator Gilbert Imlay.\n[…]\nWith the rise of feminist literary criticism in the 1970s, Mary Shelley's works, particularly Frankenstein, began to attract much more attention from scholars. Feminist and psychoanalytic critics were largely responsible for the recovery from neglect of Shelley as a writer. Ellen Moers was one of the first to claim that Shelley's loss of a baby was a crucial influence on the writing of Frankenstein.\n[…]\nMary Poovey reads the first edition of Frankenstein as part of a larger pattern in Shelley's writing, which begins with literary self-assertion and ends with conventional femininity. Poovey suggests that Frankenstein's multiple narratives enable Shelley to split her artistic persona: she can \"express and efface herself at the same time\". Shelley's fear of self-assertion is reflected in the fate of Frankenstein, who is punished for his egotism by losing all his domestic ties.\n[…]\nGordon, Charlotte (2016). Romantic Outlaws: The Extraordinary Lives of Mary Wollstonecraft & Mary Shelley, Random House.\n[…]\nMary Shelley at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mary_Wollstonecraft",
        "situacao": "ok",
        "texto": "Mary Wollstonecraft (AFI: [ˈwʊlstən.krɑːft]; Londres, 27 de abril de 1759 – Londres, 10 de setembro de 1797) foi escritora, filósofa, e defensora dos direitos da mulher inglesa. Até finais do século XX, a vida de Wollstonecraft e suas várias relações pessoais não convencionais àquela altura, receberam mais atenção do que a sua escrita.\n[…]\nMary foi sepultada na Velha Igreja de St Pancras; no seu túmulo pode ler-se \"Mary Wollstonecraft Godwin, Author of A Vindication of the Rights of Woman: Born 27 April 1759: Died 10 September 1797.\" (\"Mary Wollstonecraft Godwin, Autora de Uma Reivindicação pelos Direitos da Mulher: Nasceu a 27 de abril de 1759: Morreu a 10 de setembro de 1797\") (Em 1851, os seus restos mortais foram trasladados pelo seu neto Percy Florence Shelley para o túmulo familiar em Bournemouth.)\n[…]\nOutro dos legados que Mary Wollstonecraft deixa está, o que a autora Celia Amorós chama de, o dilema Wollstonecraft, que é a adversidade que se apresenta também no movimento feminista: “a demanda de igualdade e de reconhecimento da diferença”. Ou seja, a presença do desejo pelos mesmos direitos e participação masculinos no momento da Revolução, e que depois foi adotado pelo feminismo, se contrapõe a necessidade de afirmar a diferença entre os dois grupos.\n[…]\nAs reivindicações e escritos de Mary Wollstonecraft durante a Revolução Francesa abrem o espaço para pensar “os lugares assinalados pelo costume” a partir dos critérios abstratos de igualdades instaurados nos momentos. Dessa maneira a autora deixou diversas heranças que podem e devem ser analisadas, mas em primeiro lugar, ela abre a possibilidade de questionar os modelos instaurados há muito tempo em seu país, a começar pela educação feminina.\n[…]\nDetre, Jean. A most extraordinary pair: Mary Wollstonecraft and William Godwin, Garden City : Doubleday, 1975",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "A Dama das Camélias",
      "descricao": "Romance de Alexandre Dumas Filho, publicado em 1848, sobre a cortesã Marguerite Gautier."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O romance A Dama das Camélias, de Alexandre Dumas Filho, inspirou que ópera de Giuseppe Verdi?",
    "resposta": "La Traviata",
    "fonte": [
      "https://en.wikipedia.org/wiki/La_Dame_aux_Cam%C3%A9lias",
      "https://en.wikipedia.org/wiki/La_traviata"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/La_Dame_aux_Cam%C3%A9lias",
        "situacao": "ok",
        "texto": "The Lady of the Camellias (French: La Dame aux Camélias) is a novel by Alexandre Dumas fils. First published in 1848 and subsequently adapted by Dumas for the stage, the play premiered at the Théâtre du Vaudeville in Paris, France, on February 2, 1852. It was an instant success. Shortly thereafter, Italian composer Giuseppe Verdi set about putting the story to music in the 1853 opera La traviata, \n[…]\nWritten by Alexandre Dumas fils (1824–1895) when he was 23 years old, and first published in 1848, La Dame aux Camélias is a semi-autobiographical novel based on the author's brief love affair with a courtesan, Marie Duplessis. Set in mid-19th-century France, the novel tells the tragic love story between fictional characters Marguerite Gautier, a demimondaine or courtesan suffering from consumption, and Armand Duval, a young bourgeois.\n[…]\nThe success of the play inspired Giuseppe Verdi to put the story to music. His work became the opera La traviata, set to an Italian libretto by Francesco Maria Piave. On March 6, 1853, La traviata opened in Venice, Italy at the La Fenice opera house. The female protagonist, Marguerite Gautier, is renamed Violetta Valéry, and the male protagonist, Armand Duval, is renamed Alfredo Germont.\n[…]\nThere have been at least nine adaptations of La Dame aux Camélias entitled Camille.\n[…]\nDama Kameliowa, a 1994 Polish-language film\n[…]\n\"La Traviata\" is a ballet created by Maria Eugenia Barrios for the Caracas Contemporary Ballet in 1996 to music by Giuseppe Verdi. The ballet included the Tenor, Baritone and Soprano arias from Verdi's opera. The role of Marguerite Gautier was interpreted by Maria Barrios who danced and also sang the Soprano arias. It was staged many times in Caracas Teresa Carreno theatre and other cities .\n[…]\nLa Dame aux Camélias public domain audiobook at LibriVox (in French), Camille (in English), and La Dama de las Camilias (in Spanish)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/La_traviata",
        "situacao": "ok",
        "texto": "La traviata (Italian: [la traviˈaːta, -aˈvjaː-]; The Wayward Woman) is an opera in three acts by Giuseppe Verdi set to an Italian libretto by Francesco Maria Piave. It is based on La Dame aux camélias (1852), a play by Alexandre Dumas fils, which he adapted from his own 1848 novel. The opera was originally titled Violetta, after the main character. It was first performed on 6 March 1853 at La Feni\n[…]\nPiave and Verdi wanted to follow Dumas in giving the opera a contemporary setting, but the authorities at La Fenice insisted that it be set in the past, \"c. 1700\". It was not until the 1880s that the composer's and librettist's original wishes were carried out and \"realistic\" productions were staged. La traviata has become immensely popular and is among the most frequently performed of all operas.\n[…]\nVerdi and Giuseppina Strepponi visited Paris from late 1851 and into March 1852. In February the couple attended a performance of Alexander Dumas fils'  The Lady of the Camellias. As a result of this, Verdi's biographer Mary Jane Phillips-Matz reports, the composer immediately began to compose music for what would later become La traviata.\n[…]\nOne subject was chosen, Piave set to work, and then Verdi threw in another idea, which may have been La traviata. Within a short time, a synopsis was dispatched to Venice under the title of Amore e morte (Love and Death). However, Verdi wrote to his friend De Sanctis telling him that \"for Venice I'm doing La Dame aux camélias which will probably be called La traviata.\n[…]\nDonato Lovreglio (1841–1907), an Italian flautist and composer, wrote the \"Concert Fantasy on themes from Verdi's La traviata\", Op. 45, for clarinet and orchestra (published Ricordi, 1865); in it, Lovreglio used the overture and several arias from the opera.\n[…]\nPiave, Francesco Maria (1865). Violetta, la Traviata, opéra en 4 actes, musique de G. Verdi.\n[…]\n\"La traviata films\", AllMovie"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Dama_das_Cam%C3%A9lias",
        "situacao": "ok",
        "texto": "A Dama das Camélias (título original em francês: La dame aux camélias), é um romance do escritor francês Alexandre Dumas, filho, publicado pela primeira vez em 1848.\n[…]\nA Dama das Camélias tem cunho autobiográfico. Dumas Filho inspirou-se em suas próprias relações com a cortesã Marie Duplessis, e ainda no fato de ser ele próprio filho ilegítimo de Alexandre Dumas. Experimentando a rejeição, encontrou ao lado da amante a estabilidade que necessitava, e que veio a ser-lhe o mote para o romance.\n[…]\nA obra é ambientada na revolução de 1848, em França. Retrata o romance entre Margarita Gautier, a mais cobiçada cortesã parisiense, e Armando Duval, um jovem estudante de direito.\n[…]\nAdaptado para palco pelo próprio escritor, A Dama das Camélias teve sua primeira apresentação no Theatre de Vaudeville, em Paris, a 2 de fevereiro de 1852, obtendo imediato sucesso, o que levou o compositor Giuseppe Verdi a compor a música sobre a peça, estreando em o ano seguinte (1853) a ópera La traviata, mudando o nome da protagonista de \"Marguerite Gautier\" para \"Violetta Valéry\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Alexander Selkirk",
      "descricao": "Marinheiro escocês (1676–1721) que viveu mais de quatro anos sozinho numa ilha do Pacífico."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1966, o Chile deu à ilha onde o marinheiro Alexander Selkirk viveu isolado o nome de que personagem literário?",
    "resposta": "Robinson Crusoé",
    "fonte": [
      "https://en.wikipedia.org/wiki/Robinson_Crusoe_Island",
      "https://en.wikipedia.org/wiki/Alexander_Selkirk"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Robinson_Crusoe_Island",
        "situacao": "ok",
        "texto": "Robinson Crusoe Island (Spanish: Isla Robinson Crusoe, pronounced [ˈisla ˈroβinsoŋ kɾuˈso]) is the second largest of the Juan Fernández Islands,  situated 670 km (362 nmi; 416 mi) west of San Antonio, Chile, in the South Pacific Ocean. It is the more populous of the inhabited islands in the archipelago (the other being Alejandro Selkirk Island), with most of that in the town of San Juan Bautista a\n[…]\nFrom 1704 to 1709, the island was home to the marooned Scottish sailor Alexander Selkirk, who at least partially inspired novelist Daniel Defoe's fictional Robinson Crusoe in his 1719 novel, although the novel is explicitly set in the Caribbean. This was just one of several survival stories from the period of which Defoe would have been aware. To reflect the literary lore associated with the island and attract tourists, the Chilean government renamed it Robinson Crusoe Island in 1966.\n[…]\nRobinson Crusoe Island has one endemic plant family, Lactoridaceae. The Magellanic penguin is also found there. The Juan Fernández firecrown is an endemic and critically endangered red hummingbird, which is best known for its needle-fine black beak and silken feather coverage. The Masatierra petrel is named after the island's former name.\n[…]\nA History Channel documentary was filmed on Robinson Crusoe Island. It aired on 3 January 2010 and showed two rock formations that Canadian explorer Jim Turner claimed were badly degraded Mayan statues. With no other sign of any pre-Columbian human presence on the island, however, the program has been criticized as lacking in scientific credibility.\n[…]\nRobinson Crusoe Island satellite map with anchorages and other ocean-related information\n[…]\n\"Robinson Crusoe, Moai Statues and the Rapa Nui: the Stories of Chile’s Far-Off Islands\" Archived 30 September 2013 at the Wayback Machine from Sounds and Colours\n[…]\nA digital field trip to Robinson Crusoe Island by Goat Island Images"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alexander_Selkirk",
        "situacao": "ok",
        "texto": "Alexander Selkirk (1676 – 13 December 1721) was a Scottish privateer and Royal Navy officer who spent four years and four months as a castaway (1704–1709) after being marooned by his captain, initially at his request, on an uninhabited island in the South Pacific Ocean.\n[…]\nWhen Daniel Defoe published The Life and Surprising Adventures of Robinson Crusoe (1719), few readers could have missed the resemblance to Selkirk. An illustration on the first page of the novel shows \"a rather melancholy-looking man standing on the shore of an island, gazing inland\", in the words of the modern explorer Tim Severin. He is dressed in the familiar hirsute goatskins, his feet and shins bare.\n[…]\nSelkirk, the Real Robinson Crusoe is a stop motion film by Walter Tournier based on Selkirk's life. It premièred simultaneously in Argentina, Chile, and Uruguay on 2 February 2012, distributed by The Walt Disney Company. It was the first full-length animated feature to be produced in Uruguay.\n[…]\nThe Scotsman is also remembered in his former island home. In 1869 the crew of HMS Topaze placed a bronze tablet at a spot called Selkirk's Lookout on a mountain of Más a Tierra, Juan Fernández Islands, to mark his stay. On 1 January 1966 Chilean president Eduardo Frei Montalva renamed Más a Tierra Robinson Crusoe Island after Defoe's fictional character to attract tourists.\n[…]\nWilson, Rick (2009). The Man Who Was Robinson Crusoe: A Personal View of Alexander Selkirk. Glasgow: Neil Wilson Publishing. ISBN 978-19-064-7602-1.\n[…]\n\"The Real Robinson Crusoe\" by Bruce Selcraig (July 2005) in Smithsonian\n[…]\nHowell, John [1841]. The life and adventures of Alexander Selkirk, the real Robinson Crusoe (in en). New York, New York: M. Day & Co. at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ilha_Robinson_Crusoe",
        "situacao": "ok",
        "texto": "A ilha Robinson Crusoe é a maior ilha do arquipélago Juan Fernández, com 96,4 km² de área, situado ao largo da costa chilena do Oceano Pacífico.\n[…]\nTambém existe uma pequena ilha com o mesmo nome em Fiji.\n[…]\nA ilha foi primeiramente nomeada Santa Cecilia pelo seu descobridor, o capitão espanhol que ali chegou, oficialmente a 22 de novembro de 1574. Numa época desconhecida, foi também conhecida pelo nome do seu descobridor e, mais recentemente, por Más a Tierra (ou “Mais Próxima de Terra”)\n[…]\nFoi nesta ilha que o marinheiro escocês Alexander Selkirk permaneceu solitário por mais de quatro anos. Os relatos do navegante teriam dado vida a Robinson Crusoe, famoso personagem do livro homónimo de Daniel Defoe. A ilha tornou-se famosa por causa dessa história e, em 1966, o governo chileno deu-lhe o nome deste personagem.\n[…]\nDepois do desastre de Rancagua, em 1814, durante as lutas pela Independência do Chile, a ilha serviu de prisão para os patriotas (Juan Egaña e outros), na chamada “Cueva de los Patriotas” (monumento histórico desde 1979, localizada em San Juan Bautista). Com iguais propósitos foi novamente usada durante o primeiro governo de Carlos Ibáñez del Campo (1927-1931).\n[…]\nA ilha Robinson Crusoe é a única do arquipélago que tem uma população permanente, de cerca de 500 a 600 habitantes (eram 630 em 2002), vivendo principalmente na vila de San Juan Bautista e seus arredores. A economia local está baseada na pesca da lagosta. A sua população está a diminuir, principalmente porque muitos jovens emigram para o continente (Chile) para obter melhores oportunidades e uma vida menos isolada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Ode à Alegria",
      "descricao": "Poema de Friedrich Schiller, de 1785, usado no movimento final da Nona Sinfonia de Beethoven."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O texto cantado no final da Nona Sinfonia de Beethoven vem de um poema de que escritor alemão?",
    "resposta": "Friedrich Schiller",
    "distratores": [
      "Johann Wolfgang von Goethe",
      "Heinrich Heine",
      "Friedrich Hölderlin"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ode_to_Joy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ode_to_Joy",
        "situacao": "ok",
        "texto": "\"Ode to Joy\" (German: \"An die Freude\" [an diː ˈfʁɔʏdə]) is an ode written in the summer of 1785 by the German poet, playwright, and historian Friedrich Schiller. It was published the following year in the German magazine Thalia. In 1808, a slightly revised version changed two lines of the first stanza and omitted the last stanza.\n[…]\n\"Ode to Joy\" is best known for its use by Ludwig van Beethoven in the final (fourth) movement of his Ninth Symphony, completed in 1824. Beethoven's text is not based entirely on Schiller's poem, and it introduces a few new sections. Beethoven's melody, but not Schiller's text, was adopted as the \"Anthem of Europe\" by the Council of Europe in 1972 and later by the European Union. Rhodesia's national anthem from 1974 until 1979, \"Rise, O Voices of Rhodesia\", also used Beethoven's melody.\n[…]\nSchiller wrote the first version of the poem when he was staying in Gohlis, Leipzig. In 1785, from the beginning of May until mid-September, he stayed with his publisher, Georg Joachim Göschen, in Leipzig and wrote \"An die Freude\" along with his play Don Carlos.\n[…]\nSchiller later made some revisions to the poem, which was then republished posthumously in 1808, and it was this latter version that forms the basis for Beethoven's setting.\n[…]\nAcademic speculation remains as to whether Schiller originally wrote an \"Ode to Freedom\" (An die Freiheit) and changed it to \"To Joy\". The American journalist Alexander Wheelock Thayer wrote in his biography of Beethoven, \"the thought lies near that it was the early form of the poem, when it was still an 'Ode to Freedom' (not 'to Joy'), which first aroused enthusiastic admiration for it in Beethoven's mind\".\n[…]\nGerman Wikisource has original text related to this article: An die Freude (Schiller) (1786)\n[…]\nGerman and English text, Schiller Institute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_%C3%A0_Alegria",
        "situacao": "ok",
        "texto": "O Hino da Alegria, ou Ode à Alegria (em alemão Ode an die Freude), é um poema escrito por Friedrich Schiller em 1785 e tocado no quarto movimento da 9.ª sinfonia de Ludwig van Beethoven.\n[…]\nNeste poema Schiller expressa uma visão idealista da raça humana como irmandade, uma visão que tanto este como Beethoven partilhavam.\n[…]\nA tradução acima, de João Pimentel Ferreira, é uma tentativa de ser fidedigna ao espírito do poema original de Schiller, respeitando também a rima e a métrica do poema.\n[…]\nEm 19 de janeiro de 1972 o hino de Beethoven foi oficialmente adotado pelo Conselho da Europa. Geralmente é tocado sem letra, pois a música é uma linguagem universal e per se obtém o mesmo efeito de como se fosse cantada. O hino expressa os ideais de liberdade, paz e solidariedade, ambicionados pelo continente europeu e suas instituições como um todo. Na altura, Herbert von Karajan compôs os três arranjos oficiais: um para piano, um para instrumentos de sopro e outro para orquestra.\n[…]\nEste hino não substitui os hinos nacionais dos países-membros, mas funciona como uma forma de celebração do lema da União Europeia na sua plenitude e exalta os valores que todos os países se comprometem ao aderir a esta União.\n[…]\nEm muitos países como na Alemanha e no Japão a Nona Sinfonia é executada em Concertos no Reveillon.\n[…]\nSinfonia n.º 9 (Beethoven)\n[…]\nHino Europeu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Hercule Poirot",
      "descricao": "Detetive belga, personagem de dezenas de romances policiais de Agatha Christie."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O detetive belga Hercule Poirot, famoso pelo bigode impecável e pelas suas células cinzentas, foi criado por que escritora?",
    "resposta": "Agatha Christie",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hercule_Poirot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hercule_Poirot",
        "situacao": "ok",
        "texto": "Hercule Poirot (UK:  , US:  , French: [ɛʁkyl pwaʁo]) is a recurring fictional Belgian detective created by the English writer Agatha Christie. Poirot is Christie's most famous and longest-running character, appearing in 33 novels (starting with The Mysterious Affair at Styles), two plays (Black Coffee and Alibi) and 51 short stories published between 1920 and 1975.\n[…]\nChristie, Agatha (1975). Curtain: Poirot's Last Case. HarperCollins. ISBN 978-0-00-712112-0.\n[…]\nChristie, Agatha (1 September 2011b). The Dream: A Hercule Poirot Short Story. HarperCollins Publishers. ISBN 978-0-00-745198-2.\n[…]\nChristie, Agatha (14 June 2011c) [1966]. Third Girl: A Hercule Poirot Mystery. HarperCollins. ISBN 978-0-06-207376-1.\n[…]\nChristie, Agatha (12 April 2012). The Kidnapped Prime Minister: A Hercule Poirot Short Story (ebook ed.). HarperCollins Publishers. ISBN 978-0-00-748658-8.\n[…]\nChristie, Agatha (2013) [1999]. Hercule Poirot: The Complete Short Stories: A Hercule Poirot Collection with Foreword by Charles Todd. HarperCollins. ISBN 978-0-06-225165-7.\n[…]\nChristie, Agatha (9 July 2013a). The Lost Mine: A Hercule Poirot Story. HarperCollins. ISBN 978-0-06-229818-8.\n[…]\nChristie, Agatha (23 July 2013b). Double Sin: A Hercule Poirot Story. HarperCollins. ISBN 978-0-06-229845-4.\n[…]\nHart, Anne (2004). Agatha Christie's Poirot: The Life and Times of Hercule Poirot. London: Harper and Collins.\n[…]\nKretzschmar, Judith; Stoppe, Sebastian; Vollberg, Susanne, eds. (2016). Hercule Poirot trifft Miss Marple. Agatha Christie intermedial [Hercule Poirot meets Miss Marple] (in German). Darmstadt: Büchner. ISBN 978-3-941310-48-3.\n[…]\nVermandere, Martine (2016). \"Case closed? De speurtocht naar de inspiratie voor Agatha Christie's Hercule Poirot\" [Case closed? The search for the inspiration for Agatha Christie's Hercule Poirot]. Brood & Rozen (in Dutch). 21 (1). doi:10.21825/br.v21i1.9945. hdl:1854/LU-8041744."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hercule_Poirot",
        "situacao": "ok",
        "texto": "Hercule Poirot ou simplesmente Poirot é um grande detetive fictício e protagonista da maioria dos livros de Agatha Christie , um dos mais famosos detetives da ficção policial. Um grande número das obras onde Poirot aparece se tornaram filmes, séries de televisão, rádio e teatro. Foi vivido no cinema por Albert Finney, por Sir Peter Ustinov e por Kenneth Branagh e na série televisiva por David Such\n[…]\nO detetive aparece em mais de 40 romances de Agatha Christie e protagoniza desde 1989 a série britânica Agatha Christie's Poirot onde é interpretado por David Suchet.\n[…]\nDe nacionalidade belga (embora muitos o julguem francês), Poirot é uma personagem extremamente extravagante, não é nada modesto, e está sempre se gabando da forma como usa as suas células cinzentas. Possui um grande e belo bigode que é o que melhor o identifica, e tem sempre uma aparência elegante e impecável. O seu nome é deliberadamente absurdo, pois Hercule relembra o herói Hércules da mitologia grega, porém o detetive é um homem pequeno.\n[…]\nNos livros de Agatha Christie, Poirot vive na Farraway Street, 14, onde está localizado o Florin Court, mais conhecido como Whitehaven Mansions.\n[…]\nPara evitar que continuassem a explorar seu personagem depois de sua morte, Agatha Christie decidiu matar Poirot em um romance escrito na década de 1940, mas que, segundo ordens expressas suas, só deveria ser publicado após sua morte.\n[…]\nPorém Sophie Hannah, fez um livro (Os Crimes do Monograma) com a autorização da família de Agatha Christie para colocar Poirot nesse livro. Em 2016 publicou um segundo livro Closed Casket com Poirot.\n[…]\nHercule Poirot's Christmas (1938)\n[…]\nThe Adventure of the Christmas Pudding (1960)\n[…]\nAgatha Christie's Poirot, Exibida pela ITV, produzida na Inglaterra no formato de Série\n[…]\nAgatha Christie no Meitantei Poirot to Marple, exibida pela NHK, produzida no Japão em estilo de série Animê\n[…]\nAgatha Christie",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Mogli",
      "descricao": "Menino criado por lobos nas selvas da Índia, protagonista de histórias de O Livro da Selva."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O menino Mogli, criado por lobos nas selvas da Índia, nasceu nas páginas de que escritor britânico?",
    "resposta": "Rudyard Kipling",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mowgli",
      "https://en.wikipedia.org/wiki/The_Jungle_Book"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mowgli",
        "situacao": "ok",
        "texto": "Mowgli (, MOW-glee) is a fictional character and the protagonist of the Mowgli stories featured among Rudyard Kipling's The Jungle Book stories.\n[…]\nIn the stories, the name Mowgli is said to mean \"frog\", describing his lack of fur. Kipling later said \"Mowgli is a name I made up. It does not mean 'frog' in any language that I know of.\"\n[…]\nPart of Kipling's inspiration for the story of Mowgli is believed to have been William Henry Sleeman's account of six cases in India in which wild children had been raised by wolves. That account was first published in the first volume of Sleeman's Journey Through the Kingdom of Oude in 1848-1850 (1858) and reprinted in 1852 as An Account of Wolves Nurturing Children in Their Dens, by an Indian Official and in The Zoologist (1888 12 (135): 87-98).\n[…]\nThe Mowgli stories, including \"In the Rukh\", were first collected in chronological order in one volume as The Works of Rudyard Kipling Volume VII: The Jungle Book (1907) (Volume VIII of this series contained the non-Mowgli stories from the Jungle Books), and subsequently in All the Mowgli Stories (1933).\n[…]\nRudyard Kipling adapted the Mowgli stories for The Jungle Play in 1899, but the play was never produced on stage. The manuscript was lost for almost a century. It was published in book form in 2000.\n[…]\nA 1994 live-action adaptation by MDP Worldwide, titled Rudyard Kipling's The Jungle Book, directed by Stephen Sommers, which starred Jason Scott Lee as Mowgli. He was also played by Sean Naegeli as a young child at the beginning of the story.\n[…]\nMi Hermano Lobo (Short 2024) at IMDb\n[…]\nIn the Rukh: Mowgli's first appearance from Kipling's Many Inventions"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Jungle_Book",
        "situacao": "ok",
        "texto": "The Jungle Book is an 1894 collection of stories by the English author Rudyard Kipling. Most of the characters are animals such as Shere Khan the tiger and Baloo the bear, though a principal character is the boy or \"man-cub\" Mowgli, who is raised in the jungle by wolves. Most stories are set in a dry forest in India; one place mentioned repeatedly is \"Seeonee\" (Seoni), in the central state of Madh\n[…]\nRudyard Kipling's stories were first printed in magazines in 1893 and 1894; the original publications also contained hand-sketched illustrations, with some from John Lockwood Kipling, his father. Rudyard himself was born in Mumbai—then referred to as Bombay—in the western coastal Indian state of Maharashtra, where he spent his first six years of life. After around 10 years back in England, and having completed his schooling, Kipling went back to India to work for nearly 6½ years.\n[…]\nKipling lived in India as a child, and most of the stories are evidently set there, though it is not entirely clear where. The Kipling Society notes that \"Seeonee\" (Seoni, in the central Indian state of Madhya Pradesh) is mentioned several times; that the \"cold lairs\" must be in the jungled hills of Chittorgarh; and that the first Mowgli story, \"In the Rukh\", is set in a forest reserve somewhere in North India, south of Simla.\n[…]\nThe early editions were illustrated with drawings in the text by John Lockwood Kipling (Rudyard's father), and the American artists W. H. Drake and Paul Frenzeny.\n[…]\nMany films have been based on one or another of Kipling's stories, including Elephant Boy (1937), Chuck Jones's made for-TV cartoons Rikki-Tikki-Tavi (1975), The White Seal (1975), and Mowgli's Brothers (1976). Many films, too, have been made of the book as a whole, such as Zoltán Korda's 1942 film, Disney's 1967 animated film and its 2016 remake."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mogli",
        "situacao": "ok",
        "texto": "O Livro da Selva (no original: The Jungle Book) é o título de um livro publicado em 1894, constituído de uma coleção de sete contos do escritor Rudyard Kipling, inicialmente publicados em revistas de 1894. As publicações originais contêm ilustrações, algumas do pai de Rudyard, John Lockwood Kipling. O livro foi escrito quando Rudyard morava em Vermont. Dos sete contos, os três primeiros relatam a \n[…]\nO livro é mais conhecido por ter sido adaptado em um filme animado produzido pela Walt Disney Company e lançado em 1967. No Brasil, o livro foi publicado pela primeira vez em 1933 pela Companhia Editora Nacional como parte da Coleção Terramarear, e foi traduzido pelo escritor Monteiro Lobato como Mowgli, o Menino Lobo. Logo depois, a editora publicou contos da série traduzidos por Lobato nos livros Jacala, o Crocodilo (1934) e  O Livro da Jângal (1941).\n[…]\nMowgli: Legend of the Jungle",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "O Conto de Genji",
      "descricao": "Clássico da literatura japonesa escrito no início do século onze por uma dama da corte de Heian."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O Conto de Genji, clássico japonês do século onze, foi escrito por uma dama da corte imperial. Quem foi ela?",
    "resposta": "Murasaki Shikibu",
    "distratores": [
      "Sei Shōnagon",
      "Ono no Komachi",
      "Izumi Shikibu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Tale_of_Genji"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Tale_of_Genji",
        "situacao": "ok",
        "texto": "The Tale of Genji (源氏物語, Genji Monogatari) is a classic work of Japanese literature said to have been written by the noblewoman, poet, and lady-in-waiting Murasaki Shikibu around the peak of the Heian period, in the early 11th century. It is the first novel written by a woman to have won global recognition. In Japan, The Tale of Genji has a stature similar to that of Shakespeare's works in English\n[…]\nMurasaki is said to have written the character of Genji based on the Minister on the Left at the time she was at court. Other translators, such as Tyler, believe the character Murasaki no Ue, whom Genji marries, is based on Murasaki Shikibu herself.\n[…]\nEdward Seidensticker, who made the second translation of the Genji, believed that Murasaki Shikibu had not had a planned story structure with an ending as such but would simply have continued writing as long as she could.\n[…]\nHerberth E. Herlitschka: Die Geschichte vom Prinzen Genji, wie sie geschrieben wurde um das Jahr Eintausend unserer Zeitrechnung von Murasaki, genannt Shikibu, Hofdame der Kaiserin von Japan. 2 volumes. Insel-Verlag, Leipzig 1937. (numerous new editions). Translated from Waley.\n[…]\nBowring, Richard John (1988). Murasaki shikibu, The Tale of Genji. Cambridge; New York: Cambridge University Press.\n[…]\nHenitiuk, Valerie (2008). \"Going to Bed with Waley: How Murasaki Shikibu Does and Does Not Become World Literature\". Comparative Literature Studies. 45 (1): 40–61. doi:10.1353/cls.0.0010. JSTOR 25659632. S2CID 161786027.\n[…]\nKamens, Edward B (1993). Approaches to Teaching Murasaki Shikibu's The Tale of Genji. New York: Modern Language Association of America.\n[…]\nKnapp, Bettina L (Spring 1992). \"Lady Murasaki Shikibu's the Tale of Genji: Search for the Mother\". Symposium. 46 (1): 34–48. doi:10.1080/00397709.1992.10733759.\n[…]\nPuette, William J (1983). Guide to the Tale of Genji by Murasaki Shikibu. Rutland, VT: C.E. Tuttle. ISBN 9780804814546."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Genji_Monogatari",
        "situacao": "ok",
        "texto": "Genji Monogatari (源氏物語, lit. O Conto de Genji) é um livro de literatura clássica japonesa escrito durante o Período Heian da história do Japão. Com um total de 54 capítulos, a obra foi finalizada em 1008 e posteriormente ilustrada no emakimono \"O Conto de Genji Emaki\", no final do período Heian. O Conto de Genji é atribuído à poetisa e dama de companhia da corte Murasaki Shikibu. É considerado o p\n[…]\nO debate sobre quanto do Genji foi realmente escrito por Murasaki Shikibu já dura séculos e é provável que jamais será resolvido, a menos que alguma grande descoberta arquivística seja feita. É geralmente aceito que o conto foi concluído em sua forma atual de 1021, quando a autora do Sarashina Nikki escreveu um diário famoso sobre sua alegria em adquirir uma cópia completa do conto.\n[…]\nEla escreve que existem mais de cinqüenta capítulos e menciona uma personagem introduzida perto do fim dos trabalhos, por isso, se outros autores além de Murasaki Shikibu trabalharam no conto, o trabalho foi feito muito próximo da época de sua escrita. O próprio diário de Murasaki Shikibu inclui uma referência ao conto: o apelido para ela própria de 'Murasaki', em alusão ao personagem principal do sexo feminino.\n[…]\nYosano Akiko, o primeiro autor a fazer uma tradução moderna do Genji Monogatari, acreditava que Murasaki Shikibu tinha apenas escrito os capítulos 1 a 33, e que os capítulos 35-54 foram escritos por sua filha Daini no Sanmi.Outros estudiosos também duvidaram da autoria de capítulos 42 a 54 (particularmente o 44, que contém raros exemplos de erros de continuidade).\n[…]\nBowring, Richard John (1988). Murasaki shikibu, The Tale of Genji (em inglês). Cambridge, Nova Iorque: Cambridge University Press\n[…]\nThe Tale of Genji de Murasaki Shikibu(Mount Mercy College: 1330 Elmhurst Drive, Cedar Rapids, Iowa, EUA) . Versão deste e outros clássicos da literatura disponíveis em linha gratuitamente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "O Mundo se Despedaça",
      "descricao": "Romance nigeriano de 1958 sobre a chegada da colonização britânica ao povo igbo."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O Mundo se Despedaça, romance de 1958 sobre o choque da colonização britânica entre os igbos, foi escrito por que nigeriano?",
    "resposta": "Chinua Achebe",
    "distratores": [
      "Wole Soyinka",
      "Chimamanda Ngozi Adichie",
      "Ben Okri"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Things_Fall_Apart"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
        "situacao": "ok",
        "texto": "Things Fall Apart is the 1958 debut novel by Nigerian author Chinua Achebe. Set in Colonial Nigeria, it portrays the story of Okonkwo, a traditional and influential leader of the fictional Igbo clan of Umuofia, who opposes colonialism and early Christianity. Written when Achebe was working at the Nigerian Broadcasting Corporation, it was first published in London by Heinemann on 17 June 1958.\n[…]\nThings Fall Apart depicts the Igbo culture as a way to revive the lost dignity of the Igbo people during colonisation. In talking about race, Achebe said: Africans are people in the same way that Americans, Europeans, Asians, and others are people. Although the action of Things Fall Apart takes place in a setting with which most Americans are unfamiliar, the characters are normal people who undergo real life experiences.\n[…]\nThings Fall Apart is regarded as a milestone in Anglophone African literature, and for the perception of African literature in the West. It has been translated into over 50 languages. While not the first major African novelist, Achebe self-consciously defined the political role of African writers and established a model for the continent's postcolonial literature.\n[…]\nAchebe's fiction and criticism continue to inspire and influence writers around the world. Hilary Mantel, the Booker Prize-winning novelist in a 7 May 2012 article in Newsweek lists Things Fall Apart as one of her five favourite novels in this genre. Caine Prize winners Binyavanga Wainaina and Helon Habila, Uzodinma Iweala, and Okey Ndibe have cited Achebe as an influence.\n[…]\nThings Fall Apart has influenced subsequent African authors' style, language, and themes, as Chimamanda Ngozi Adichie observes in a CNN interview. Simon Gikandi describes Things Fall Apart as seminal, recognizing Achebe as \"one of Africa's most important and influential writers.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Things_Fall_Apart",
        "situacao": "ok",
        "texto": "Things Fall Apart (Brasil: O mundo se despedaça / Portugal: Quando tudo se desmorona) é um romance de Chinua Achebe, publicado em 1958 no Reino Unido.\n[…]\nPrimeiro romance de Achebe, a obra foi lançada dois anos antes da independência da Nigéria e seria considerado um dos livros mais importantes da literatura africana do século XX e tido como fundador da moderna literatura nigeriana. Foi traduzido em mais de quarenta línguas e vendeu milhões de cópias mundialmente.\n[…]\nDurante séculos, o continente africano teve obscurecida a sua história e saqueados os seus recursos naturais. Em Things Fall Apart — o primeiro de uma série de romances sobre a vida nigeriana a partir de meados do século XIX — Achebe iniciou, em ficção, a sua versão dessa história.\n[…]\nNesta trilogia, Achebe explora três períodos que ocorreram num século de encontros Anglo-Ibos: a chegada dos britânicos em Things Fall Apart; o período de estabelecimentos de regras coloniais, por volta da altura do nascimento do escritor, em Arrow of God; e os últimos dias do império em No Longer at Ease. Em todas estas obras, trata-se da perspectiva do protagonista Ibo.\n[…]\nEscrito em inglês, floreado com padrões de fala e provérbios nigerianos, o romance, cujo título imita um verso do poema The Second Coming, de William Butler Yeats.\n[…]\nA obra reconta a história de Okonkwo, um homem da tribo ibo (sudeste da Nigéria), cujo vilarejo desintegra-se sob a influência britânica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Os Lusíadas",
      "descricao": "Poema épico de Luís de Camões, publicado em 1572, sobre a viagem de Vasco da Gama à Índia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição, Camões salvou o manuscrito de Os Lusíadas a nado, num naufrágio na foz de que rio asiático?",
    "resposta": "Rio Mekong",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lu%C3%ADs_de_Cam%C3%B5es"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lu%C3%ADs_de_Cam%C3%B5es",
        "situacao": "ok",
        "texto": "Luís Vaz de Camões (European Portuguese: [luˈiʒ ˈvaʒ ðɨ kaˈmõjʃ]; c. 1524 or 1525 – 10 June 1580), sometimes rendered in English as Camoens or Camoëns ( KAM-oh-ənz), was a Portuguese poet, considered Portugal's and the Portuguese language's greatest poet. His mastery of verse has been compared to that of Shakespeare, Milton, Vondel, Homer, Virgil and Dante. He wrote a considerable amount of lyrica\n[…]\nOn the trip back to Goa, he was shipwrecked, as tradition says, near the mouth of the Mekong River, managing to save only himself and the manuscript of Os Lusíadas, an event that inspired the famous redondilha \"Sôbolos rios que vão\", considered by António Sérgio the \"backbone\" of the Camonian lyric, as is repeatedly cited in the critical literature.\n[…]\nIn Os Lusíadas, Camões strikes a balance between classical scholarship and practical experience, developed with consummate technical skill, describing Portuguese adventures with moments of serious thought mixed with those of delicate sensitivity and humanism.\n[…]\nCamões' fame began to spread across Spain, where he had several admirers since the 16th century, with two translations of Os Lusíadas appearing in 1580, the year of the poet's death, possibly printed at the behest of Philip II of Spain, who at the time was also the king of Portugal. In Luis Gómez de Tápia's edition, Camões is already mentioned as \"famous\", and in Benito Caldera's he was compared to Virgil.\n[…]\nSoon his fame would reach Italy; Tasso called his work \"cult and good\" and by 1658 Os Lusíadas would be translated twice, by Oliveira and Paggi. Later, associated with Tasso, it became an important paradigm in Italian Romanticism. By this time in Portugal, a body of exegetes and commentators had already been formed, giving the study of Camões great depth.\n[…]\nThe Lusiads\n[…]\nThe Lusiadas of Luiz de Camões. Leonard Bacon. 1950.\n[…]\nLuis Vaz de Camões – Catholic Encyclopedia article"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lu%C3%ADs_de_Cam%C3%B5es",
        "situacao": "ok",
        "texto": "Luís Vaz de Camões (Lisboa?, c. 1524 – Lisboa, 10 de junho de 1579 ou 1580) foi um poeta e soldado português, considerado o poeta nacional de Portugal, o maior representante do renascimento português, o escritor mais importante da língua portuguesa e um dos grandes expoentes da literatura ocidental, famoso por sua epopeia Os Lusíadas (1572) e por seus sonetos (editados, postumamente, com outros po\n[…]\nSebastião, levando Portugal a perder sua independência para Espanha, adoeceu, segundo se pensou tradicionalmente, da peste que grassou em Lisboa em 1580. Baseando-se numa carta do próprio Camões e em alusões de Faria e Sousa, Felipe de Saavedra considerou estabelecido que Camões morreu de sífilis.\n[…]\nDe acordo com Monteiro, dos grandes poetas épicos da tradição ocidental Camões permanece o menos conhecido fora de sua terra natal e a sua obra-prima, Os Lusíadas, é a menos conhecida dos grandes poemas dessa tradição. Entretanto, desde o tempo em que viveu e ao longo dos séculos Camões foi louvado por diversos luminares não-lusófonos da cultura ocidental.\n[…]\nNa interpretação de Chaves, a recuperação romântica de Camões constituiu um mito com base tanto na sua biografia como na sua lenda, e cuja obra fundia elementos do \"belo imaginoso\" da tradição italiana com o \"sublime patriótico\" da tradição clássica, veiculando a partir do início do século XIX \"uma mensagem liberal de grande dimensão humana, [...] um recriador e um instrumento de uma importante tradição literária antiga, um herói nacional de imutável destino em que no seu mítico percurso existencial tal como na sua obra se projetaram sonhos, esperanças, sentimentos e paixões humanas\".Durante longo tempo, a maior parte da sua fama repousou apenas sobre Os Lusíadas mas, nas últimas décadas, a sua obra lírica vem recuperando a alta estima que lhe foi dedicada até ao século XVII.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Franz Kafka",
      "descricao": "Escritor de língua alemã (1883–1924), autor de A Metamorfose e O Processo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Franz Kafka escreveu toda a sua obra em alemão, mas nasceu e passou quase a vida inteira em que cidade?",
    "resposta": "Praga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Franz_Kafka"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Franz_Kafka",
        "situacao": "ok",
        "texto": "Franz Kafka (3 July 1883 – 3 June 1924) was a German-language Jewish  writer and novelist from Prague. Widely regarded as a major figure of 20th-century literature, his works fuse elements of realism and the fantastique, and typically feature isolated protagonists facing bizarre or surreal predicaments and incomprehensible bureaucratic powers. The term Kafkaesque has entered the lexicon to describ\n[…]\nThe Franz Kafka Prize, established in 2001, is an annual literary award of the Franz Kafka Society and the City of Prague. It recognizes the merits of literature as \"humanistic character and contribution to cultural, national, language and religious tolerance, its existential, timeless character, its generally human validity, and its ability to hand over a testimony about our times\".\n[…]\nWorks by Franz Kafka in eBook form at Standard Ebooks\n[…]\nWorks by Franz Kafka at Project Gutenberg\n[…]\nWorks by Franz Kafka at LibriVox (public domain audiobooks)\n[…]\nWorks by or about Franz Kafka at the Internet Archive\n[…]\nFranz Kafka's papers and the Bodleian Libraries\n[…]\nFranz Kafka: Manuscripts, drawings and personal letters BBC\n[…]\n\"Franz Kafka\", exhibit at the Morgan Library & Museum in Manhattan from 22 November 2024 through 13 April 2025\n[…]\nReview: Williams, James, \"The endless mystique of Franz Kafka\", Apollo, July/August 2024\n[…]\nLiterature by and about Franz Kafka in the German National Library catalogue\n[…]\nFranz Kafka at the Internet Speculative Fiction Database\n[…]\nFranz Kafka at IMDb\n[…]\nSpolečnost Franze Kafky a nakladatelství Franze Kafky Archived 30 June 2017 at the Wayback Machine Franz Kafka Society and Publishing House in Prague\n[…]\nWhat makes something \"Kafkaesque\"? A Ted talk on Kafka, his works and his legacy, by Noah Tavlin\n[…]\nThe Album of Franz Kafka, Franz Kafka receives a tribute in this album of \"recomposed photographs\".\n[…]\nJourneys of Franz Kafka Photographs of places where Kafka lived and worked"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Franz_Kafka",
        "situacao": "ok",
        "texto": "František \"Franz\" Kafka (Praga, Império Austro-Húngaro, atual República Tcheca, 3 de julho de 1883 — Klosterneuburg, República Austríaca, atual Áustria, 3 de junho de 1924) foi um escritor boêmio de língua alemã, autor de romances e contos, considerado pelos críticos como um dos escritores mais influentes do século XX.\n[…]\nKafka nasceu em uma família judaica de classe média e falante de alemão em Praga, à época pertencente ao Império Austro-Húngaro. Durante sua vida, a maior parte da população de Praga falava tcheco e a divisão entre os falantes de tcheco e alemão era visível, visto que ambos os grupos estavam tentando fortalecer sua identidade nacional. A comunidade judaica muitas vezes viu-se dividida entre esses dois grupos, levantando, naturalmente, questões sobre as origens de uma pessoa.\n[…]\nToda a obra publicada de Kafka, com exceção de algumas cartas que escreveu em tcheco para Milena Jesenská, foi escrita em alemão. O pouco que foi publicado em sua vida atraiu pouca atenção pública.\n[…]\nFoi fundado em Praga o Museu de Franz Kafka, dedicado à vida e obra do escritor. Um dos destaques do museu é a exposição Město K. Franz Kafka a Praha (A Cidade de K. Franz Kafka e Praga, em tradução literal), que foi primeiro mostrada ao público em Barcelona, em 1999, depois mudada para o Museu Judeu em Nova Iorque e afinal colocada em 2005 em Praga, no distrito de Malá Strana, ao lado do Rio Moldava.\n[…]\nO Prêmio Franz Kafka é um prêmio literário anual patrocinado pela Sociedade de Franz Kafka e pela Cidade Praga, fundado em 2001. Sua função, de acordo com a premiação, é promover a literatura como \"uma contribuição humanística à tolerância cultural, nacional, linguística e religiosa, com seus personagens eternos, sua validade humana e sua capacidade de deixar um testemunho sobre nosso tempo\".\n[…]\nMuseu Kafka em Praga",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Fernando Pessoa",
      "descricao": "Poeta português (1888–1935), criador de heterônimos como Alberto Caeiro, Álvaro de Campos e Ricardo Reis."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Fernando Pessoa passou boa parte da infância numa cidade da África do Sul, onde estudou em inglês. Que cidade é essa?",
    "resposta": "Durban",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fernando_Pessoa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fernando_Pessoa",
        "situacao": "ok",
        "texto": "Fernando António Nogueira de Seabra Pessoa (; Portuguese: [fɨɾˈnɐ̃du pɨˈsoɐ]; 13 June 1888 – 30 November 1935) was a Portuguese poet, writer, literary critic, translator, and publisher. He has been described as one of the most significant literary figures of the 20th century and one of the greatest poets in the Portuguese literature. He also wrote in and translated from English and French.\n[…]\nAfter the second marriage of his mother, Maria Magdalena Pinheiro Nogueira, by a proxy wedding to João Miguel dos Santos Rosa, Fernando sailed with his mother for South Africa in early 1896 to join his stepfather, a military officer appointed Portuguese consul in Durban, capital of the former British Colony of Natal.\n[…]\nReturn – left Durban in the afternoon of 1st. August 1901.\n[…]\nReturn – left Durban about 20th. August 1905.\n[…]\nThe young Pessoa received his early education at St. Joseph Convent School, a Roman Catholic grammar school run by Irish and French nuns. He moved to the Durban High School in April 1899, becoming fluent in English and developing an appreciation for English literature.\n[…]\nMeanwhile, Pessoa started writing short stories in English, some under the name of David Merrick, many of which he left unfinished. At the age of sixteen, The Natal Mercury (edition of 6 July 1904) published his satirical poem \"Hillier did first usurp the realms of rhyme ...\", under the name of C. R. Anon (anonymous), along with a brief introductory text: \"I read with great amusement...\". In December, The Durban High School Magazine published his essay \"Macaulay\".\n[…]\nBunyan, D, \"The South-African Pessoa: Fernando 20th Century Portuguese Poet\", English in Africa 14 (1), May 1987, pp. 67–105.\n[…]\nJennings, Hubert D., \"In Search of Fernando Pessoa\" Contrast 47 – South African Quarterly, vol. 12 no. 3 (June 1979).\n[…]\nPessoa Plural: Revista de Estudos Pessoanos – A Journal of Fernando Pessoa Studies\n[…]\nArquivo Pessoa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fernando_Pessoa",
        "situacao": "ok",
        "texto": "Fernando António Nogueira Pessoa (Lisboa, 13 de junho de 1888 – Lisboa, 30 de novembro de 1935) foi um poeta português identificado com o modernismo, amplamente reconhecido como um dos principais autores da língua portuguesa e o maior poeta lusófono do século XX. Atuou também como dramaturgo, ensaísta, tradutor, publicitário, astrólogo, inventor, empresário, correspondente comercial, crítico liter\n[…]\nPor ter sido educado na África do Sul, numa escola católica irlandesa de Durban, chegou a ter maior familiaridade com o idioma inglês do que com o português ao escrever as suas primeiras composições líricas nesse idioma. O crítico literário Harold Bloom considerou Pessoa como o \"Whitman renascido\", incluíndo-se entre os 26 melhores escritores da civilização ocidental, não apenas da literatura portuguesa mas também da inglesa.\n[…]\nFernando Pessoa permaneceu em Lisboa, enquanto todos seus familiares — mãe, padrasto, irmãos e criada Paciência, que vieram com ele — regressaram a Durban. Voltou sozinho para a África no vapor Herzog. Matriculou-se na Durban Commercial School, escola comercial de ensino nocturno, enquanto de dia estuda as disciplinas humanísticas para entrar na universidade. Nesse período, tenta escrever contos em inglês, alguns dos quais com o pseudónimo de David Merrick, que deixou inacabados.\n[…]\n1894: Em janeiro, morre o irmão Jorge. Pessoa cria o seu primeiro heterónimo. O futuro padrasto, João Miguel Rosa, é nomeado cônsul interino em Durban, na África do Sul.\n[…]\n1895: Em Julho, Fernando escreve o seu primeiro poema e João Miguel Rosa parte para Durban. Em Dezembro, João Miguel Rosa casa-se com a mãe de Fernando, por procuração.\n[…]\n1907: A família retorna uma vez mais a Durban. Pessoa passa a morar com a avó. Desiste do Curso Superior de Letras. Em Agosto, a avó morre. Durante um curto período, Pessoa estabelece uma tipografia.\n[…]\n«Aplicações Android Fernando Pessoa»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "J. R. R. Tolkien",
      "descricao": "Escritor e filólogo britânico (1892–1973), autor de O Hobbit e O Senhor dos Anéis."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que cidade nasceu, em 1892, o escritor Tolkien, autor de O Senhor dos Anéis?",
    "resposta": "Bloemfontein",
    "distratores": [
      "Birmingham",
      "Joanesburgo",
      "Cidade do Cabo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/J._R._R._Tolkien"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/J._R._R._Tolkien",
        "situacao": "ok",
        "texto": "John Ronald Reuel Tolkien (; 3 January 1892 – 2 September 1973) was an English writer and academic philologist. He was the author of the high fantasy works The Hobbit (1937) and The Lord of the Rings (1954–1955).\n[…]\nJohn Ronald Reuel Tolkien was born on 3 January 1892 in Bloemfontein in the Orange Free State (later annexed by the British Empire; now Free State Province in the Republic of South Africa), to Arthur Reuel Tolkien, an English bank manager, and his wife Mabel, née Suffield. The couple had left England when Arthur was promoted to head the Bloemfontein office of the British bank for which he worked.\n[…]\nTolkien had one sibling, his younger brother, Hilary Arthur Reuel Tolkien, who was born on 17 February 1894.\n[…]\nThroughout 1917 and 1918 his illness kept recurring, but he had recovered enough to do home service at various camps. It was at this time that Edith bore their first child, John Francis Reuel Tolkien. In a 1941 letter, Tolkien described his son John as \"(conceived and carried during the starvation-year of 1917 and the great U-boat campaign) round about the Battle of Cambrai, when the end of the war seemed as far off as it does now\".\n[…]\nThe Tolkiens had four children: John Francis Reuel Tolkien (17 November 1917 – 22 January 2003), Michael Hilary Reuel Tolkien (22 October 1920 – 27 February 1984), Christopher John Reuel Tolkien (21 November 1924 – 16 January 2020) and Priscilla Mary Anne Reuel Tolkien (18 June 1929 – 28 February 2022). Tolkien was very devoted to his children and sent them illustrated letters from Father Christmas when they were young.\n[…]\nThe Tolkien Estate Website\n[…]\nWorks by J. R. R. Tolkien at Project Gutenberg\n[…]\nWorks by or about J. R. R. Tolkien at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/J._R._R._Tolkien",
        "situacao": "ok",
        "texto": "John Ronald Reuel Tolkien, CBE, FRSL, conhecido mundialmente como J. R. R. Tolkien (Bloemfontein, 3 de janeiro de 1892 – Bournemouth, 2 de setembro de 1973), foi um escritor, professor universitário e filólogo britânico, nascido na atual África do Sul, que recebeu o título de doutor em Letras e Filologia pela Universidade de Liège e Dublin, em 1954. É autor das obras como O Hobbit, O Senhor dos An\n[…]\nTolkien nasceu em Bloemfontein, na República do Estado Livre de Orange, na atual África do Sul, e, aos três anos de idade, com a sua mãe e irmão, passou a viver na Inglaterra, terra natal de seus pais. Desde pequeno fascinado pela linguística, fez a licenciatura na faculdade de Letras em Exeter.\n[…]\nMesmo depois da recusa, Tolkien concordou em continuar a saga dos hobbits e começa a dar forma a uma nova obra, que lhe consumiu doze anos de trabalho desde os primeiros rascunhos até a sua conclusão, mas que o tornaria um dos mais conceituados escritores de todos os tempos: O Senhor dos Anéis.\n[…]\nO mundo artístico também foi muito influenciado por Tolkien. O cinema (principalmente a trilogia \"O Senhor dos Anéis\"), a música, o RPG (liderado pelo D&D), os desenhos animados, a literatura, as histórias em quadrinhos, os jogos de computador e até mesmo a Internet, com milhares de websites dedicados a sua obra sofreram inúmeras influências do escritor frequentemente aclamado como o maior autor do século XX em pesquisas de opinião.\n[…]\nJohn Ronald Reuel Tolkien foi membro da direção do New English Dictionary (1918-1920), professor de Língua Inglesa na Universidade de Leeds, na cátedra Rawlinson & Bosworth, posto ligado à Faculdade Pembroke (em Oxford) (1920-1925), professor de anglo-saxão (inglês arcaico) em Oxford (1925-1945) e professor de Língua e Literatura Inglesa em Merton (1945-1959), o que caracteriza um jeito próprio de lidar com os livros e a mitologia sempre presente em seus livros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Sherlock Holmes",
      "descricao": "Detetive londrino criado pelo escritor escocês Arthur Conan Doyle em 1887."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Sherlock Holmes morava no número duzentos e vinte e um B de que rua de Londres?",
    "resposta": "Baker Street",
    "fonte": [
      "https://en.wikipedia.org/wiki/221B_Baker_Street"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/221B_Baker_Street",
        "situacao": "ok",
        "texto": "221B Baker Street is the London address of the fictional detective Sherlock Holmes, created by author Sir Arthur Conan Doyle. In the United Kingdom, postal addresses with a number followed by a letter may indicate a separate address within a larger, often residential building. Baker Street in the late 19th century was a high-class residential district, and Holmes's apartment would probably have be\n[…]\nWhen the Sherlock Holmes stories were first published, street numbers in Baker Street did not go as high as 221.\n[…]\nIn 1999, Abbey National sponsored a bronze statue of Sherlock Holmes at the entrance to Baker Street tube station.\n[…]\nDanger Mouse, in the cartoon show of the same name, lives in a pillar box near 221b Baker Street. However, Danger Mouse is a loose parody of Danger Man and James Bond, rather than Sherlock Holmes. The pillar box is a stone's throw away from 221B Baker Street and Dr. Watson throws stones at them in apparent jealousy that he only works for the world's greatest detective, not the world's greatest secret agent in the episode \"Where There's a Well, There's a Way\".\n[…]\nIn the 2013 Season 2, Episode 1 of Elementary, Sherlock Holmes and Joan Watson visit London and stay in a second floor residence numbered 221B. Sherlock indicates he had happily resided there before his move to New York City. In season 7, Episode 1, Holmes, by then a wanted fugitive in the USA, is revealed to have relocated back to 221B Baker Street, whilst Watson occupied 221A.\n[…]\nThe BBC Television series Sherlock has used 187 North Gower Street to represent 221B Baker Street for shooting the exterior scenes of Sherlock Holmes's flat. The location is near Euston railway station, and roughly a mile away from the real Baker Street.\n[…]\nThe Sherlock Holmes, a Victorian era themed public house in Northumberland Street, London, with another recreation of the 221B Baker Street interior\n[…]\nThe Sherlock Holmes Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/221B_Baker_Street",
        "situacao": "ok",
        "texto": "221B Baker Street é uma das moradas mais famosas da literatura. É a residência londrina fictícia do detetive Sherlock Holmes, criado pelo escritor Sir Arthur Conan Doyle.\n[…]\nO endereço poderia indicar um apartamento no primeiro andar (daí o B) de uma residência no que era originalmente um terraço Georgiano. O B pode, no entanto, se referir a toda a casa. Está situado no norte de Baker Street, perto do Regent's Park. A rua é muito mais estreita do que representada em alguns filmes das aventuras de Holmes, sendo uma artéria importante no tráfego norte-sul da cidade e era tão congestionada na época de Holmes quanto o é hoje.\n[…]\nNa verdade, 221B Baker Street nunca existiu, e presume-se que Conan Doyle escolheu aleatoriamente este número fictício. A rua corria de Norte para Sul iniciando a numeração desde o número 1 e terminando no 85. Quando os edifícios foram renumerados, em 1930, tornando a rua muito mais extensa, uma grande parte do bloco 200 foi atribuída a um edifício Art Deco conhecido como Abbey House, construído em 1932 para a Abbey Road Building Society (mais tarde, Abbey National).\n[…]\nEm 1999, Abbey National patrocinou a criação de uma estátua de bronze, de quase três metros, de Sherlock Holmes, que agora pode ser vista na entrada da estação de metrô Baker Street.\n[…]\nNós nos encontramos no dia seguinte, como combinado, e inspecionamos o apartamento da Baker Street 221B, sobre o qual ele me falara durante nosso encontro. Ele era composto de dois quartos confortáveis e uma grande e confortável sala de estar, cuidadosamente mobiliada, e iluminada através de duas grandes janelas.\n[…]\nSherlock Holmes\n[…]\nLivros de Sherlock Holmes - leitura fácil em formato HTML.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Ulisses",
      "descricao": "Romance do irlandês James Joyce, publicado em 1922, que acompanha um dia de Leopold Bloom em Dublin."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O romance Ulisses, de James Joyce, se passa num único dia de 1904, hoje festejado em Dublin como Bloomsday. Que dia é esse?",
    "resposta": "Dezesseis de junho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bloomsday"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bloomsday",
        "situacao": "ok",
        "texto": "Bloomsday\n[…]\n(Irish, Lá Bloom), is a commemoration and celebration of the life of Irish writer James Joyce, observed annually in Dublin and elsewhere on 16 June. The day is named after Leopold Bloom, the protagonist of Joyce's 1922 novel Ulysses, the events of which take place on Thursday, 16 June 1904. Joyce chose to set his novel on this date as it was the date of his first sexual encounter with his wife-to-be, Nora Barnacle.\n[…]\nThere have been many Bloomsday events in Trieste, where the first part of Ulysses was written. The Joyce Museum Trieste, opened on 16 June 2004, collects works by and about James Joyce, including secondary sources, with a special emphasis on his period in Trieste.\n[…]\nGibraltar celebrated its 1st Bloomsday in 2025. Gibraltar has a very special connection with Ulysses as Molly Bloom is a Gibraltarian (a ‘Llanita’ in local dialect). She was born Marion Tweedy in Gibraltar in 1870, the daughter of an Irish officer, Major Brian Cooper Tweedy, and Lunita Laredo a Gibraltarian Jewess of Spanish origin. Molly grew up in Gibraltar and there are constant references to it in Ulysses. James Joyce never visited Gibraltar, but his characters describe it in accurate detail.\n[…]\nIn 2004, Vintage Publishers issued Yes I said yes I will yes: A Celebration of James Joyce, Ulysses, and 100 Years of Bloomsday. It is one of the few monographs that details the increasing popularity of Bloomsday. The book's title is the last line of the novel.\n[…]\nJames Joyce Centre, Dublin, Ireland\n[…]\nJoyce Museum Trieste"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bloomsday",
        "situacao": "ok",
        "texto": "Bloomsday, comemorado em 16 de junho, é o dia instituído  na Irlanda para homenagear o personagem Leopold Bloom, protagonista de Ulisses, de James Joyce. Em todo o mundo, é o único dia dedicado ao personagem de um livro.\n[…]\nUlisses narra os acontecimentos vividos pelo personagem Leopold Bloom durante 19 horas do dia 16 de junho de 1904. Joyce estabelece uma série de correspondências com a Odisseia de Homero, seja entre os personagens (Leopold Bloom e Ulisses; Molly Bloom e Penélope; Stephen Dedalus e Telêmaco) seja com referência aos acontecimentos narrados. A obra é considerada um dos marcos da literatura ocidental contemporânea.\n[…]\nHoje o Bloomsday é uma efeméride inserida no calendário cultural de vários países e não se restringe ao círculo de leitores da obra (de aproximadamente 900 páginas).\n[…]\nJoyce escolheu o dia 16 de junho para ser imortalizado em sua obra porque este foi o dia em que teve a primeira relação sexual com sua futura companheira, Nora Barnacle (apesar de a imprensa irlandesa publicar que, nesse dia, eles \"caminharam juntos\" pela primeira vez[carece de fontes]?), que, à época, era uma jovem virgem de vinte anos. Na verdade, Nora teve medo de completar o coito e o masturbou \"com os olhos de uma santa\", como Joyce relatou em uma carta.\n[…]\nJames Joyce experimentou vários gêneros literários. Publicou uma peça de teatro, Exiles; um livro de contos, \"Dublinenses\"; duas séries de poemas, coletados em Chamber Music e em Pomes Penyeach; uma novela autobiográfica, Giacomo Joyce; e três romances densos e seminais: Retrato do artista quando jovem, Ulisses e Finnegans Wake.\n[…]\nBBC: Fans descend on Joyce's Dublin\n[…]\n«Bloomsday in New York City» (em inglês)\n[…]\n«Bloomsday 2012 celebrado em Dublin» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Divina Comédia",
      "descricao": "Poema épico de Dante Alighieri, do início do século quatorze, dividido em Inferno, Purgatório e Paraíso."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Divina Comédia, que poeta da Roma Antiga guia Dante pelo Inferno e pelo Purgatório?",
    "resposta": "Virgílio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Divine_Comedy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Divine_Comedy",
        "situacao": "ok",
        "texto": "The Divine Comedy (Italian: Divina Commedia) is an Italian narrative poem by Dante Alighieri, begun c. 1308 and completed c. 1321, shortly before the author's death. It is widely considered the pre-eminent work in Italian literature and one of the greatest works of Western literature. The poem's imaginative vision of the afterlife is representative of the medieval worldview as it existed in the La\n[…]\nIn the poem, the pilgrim Dante is accompanied by three guides: Virgil, who represents human reason and who guides him for all of Inferno and most of Purgatorio; Beatrice, who represents divine revelation, in addition to theology, grace, and faith, and who guides him from the end of Purgatorio onwards; and Saint Bernard of Clairvaux, who represents contemplative mysticism and devotion to Mary the Mother, guiding him in the final cantos of Paradiso.\n[…]\nOvid is given less explicit praise in the poem, but besides Virgil, Dante uses Ovid as a source more than any other poet, mostly through metaphors and fantastical episodes based on those in the Metamorphoses. Less influential than either of the two are Statius and Lucan, the latter of whom has only been given proper recognition as a source in the Divine Comedy in the twentieth century.\n[…]\nIn 1919, Miguel Asín Palacios, a Spanish scholar and a Catholic priest, published La Escatología musulmana en la Divina Comedia (Islamic Eschatology in the Divine Comedy), an account of parallels between early Islamic philosophy and the Divine Comedy. Palacios argued that Dante derived many features of and episodes about the hereafter from the spiritual writings of Ibn Arabi and from the Isra and Mi'raj, or night journey of Muhammad to heaven.\n[…]\nDivine Comedy at Standard Ebooks\n[…]\nDivine Comedy public domain audiobook at LibriVox (in English and Italian)\n[…]\nGoing Through Hell: The Divine Dante: exhibition at the National Gallery of Art, 9 April – 16 July 2023"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Divina_Com%C3%A9dia",
        "situacao": "ok",
        "texto": "A Divina Comédia (em italiano:  La Divina Commedia, originalmente Comedìa e, mais tarde, denominada Divina Comédia por Giovanni Boccaccio) é um poema alegórico-didático, e escatológico, de viés épico e teológico da literatura italiana e mundial, sobre os fundamentos da fé cristã, escrito por Dante Alighieri no século XIV e dividido em três partes: o Inferno, o Purgatório e o Paraíso.\n[…]\nCada uma das três partes do poema (Inferno, Purgatório e Paraíso) está dividida em 33 cantos, com mais um a título de introdução, a obra soma 100 cantos, número que significaria a perfeição da perfeição. Além do próprio Dante, três são os personagens principais: Virgílio, guia no inferno e purgatório, Beatriz guia no paraíso terrestre e São Bernardo, guia nas esferas celestes. A obra soma também 14 233 versos em, a partir de então chamados, \"tercetos dantescos\".\n[…]\nVirgílio descreve a Dante a estrutura dos círculos do inferno.\n[…]\nNo fim do Purgatório, Dante se despede de Virgílio, pois este, por ter sido pagão, não pode ter acesso ao Paraíso. Lá encontra Beatriz, sua amada quando estava na Terra. Esta o leva até o rio Lete. Quando Dante bebe a água do Lete, esta apaga a sua memória e seus pecados, como se tivesse renascido. Existe uma lenda que diz que o Paraíso fica entre o rio Tigre e o Eufrates. Quando Dante vê o rio, ele julga ser o Tigre, no atual Iraque. Finalmente, Dante chega ao Paraíso.\n[…]\nAlgumas \"semelhanças superficiais\" da Divina Comédia ao Resalat Al-Ghufran ou Epístola do Perdão de Al-Ma'arri também foram mencionadas neste debate. O Resalat Al-Ghufran descreve a jornada do poeta nos reinos da vida após a morte e inclui o diálogo com as pessoas no Céu e Inferno, embora, ao contrário do Kitab al Miraj, haja pouca descrição desses locais, e é improvável que Dante fez empréstimo deste trabalho.\n[…]\nA Divina Comédia (em PDF) no site Biblioteca Mundial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Divina Comédia",
      "descricao": "Poema épico de Dante Alighieri, do início do século quatorze, dividido em Inferno, Purgatório e Paraíso."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Somando Inferno, Purgatório e Paraíso, quantos cantos tem a Divina Comédia, de Dante?",
    "resposta": "Cem",
    "fonte": [
      "https://en.wikipedia.org/wiki/Divine_Comedy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Divine_Comedy",
        "situacao": "ok",
        "texto": "The Divine Comedy (Italian: Divina Commedia) is an Italian narrative poem by Dante Alighieri, begun c. 1308 and completed c. 1321, shortly before the author's death. It is widely considered the pre-eminent work in Italian literature and one of the greatest works of Western literature. The poem's imaginative vision of the afterlife is representative of the medieval worldview as it existed in the La\n[…]\nThe work was originally simply titled Comedìa (pronounced [komeˈdiːa], Tuscan for \"Comedy\") – so also in the first printed edition, published in 1472 – later adjusted to the modern Italian Commedia. The earliest known use of the adjective Divina appears in Giovanni Boccaccio's biographical work Trattatello in laude di Dante (\"Treatise in Praise of Dante\"), which was written between 1351 and 1355 – the adjective likely referring to the poem's profound subject matter and elevated style.\n[…]\nThe Divine Comedy is composed of 14,233 lines that are divided into three cantiche (singular cantica) – Inferno (Hell), Purgatorio (Purgatory), and Paradiso (Paradise) – each consisting of 33 cantos (Italian plural canti). An initial canto, serving as an introduction to the poem and generally considered to be part of the first cantica, brings the total number of cantos to 100.\n[…]\nIn 1919, Miguel Asín Palacios, a Spanish scholar and a Catholic priest, published La Escatología musulmana en la Divina Comedia (Islamic Eschatology in the Divine Comedy), an account of parallels between early Islamic philosophy and the Divine Comedy. Palacios argued that Dante derived many features of and episodes about the hereafter from the spiritual writings of Ibn Arabi and from the Isra and Mi'raj, or night journey of Muhammad to heaven.\n[…]\nDivine Comedy public domain audiobook at LibriVox (in English and Italian)\n[…]\nGoing Through Hell: The Divine Dante: exhibition at the National Gallery of Art, 9 April – 16 July 2023"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Divina_Com%C3%A9dia",
        "situacao": "ok",
        "texto": "A Divina Comédia (em italiano:  La Divina Commedia, originalmente Comedìa e, mais tarde, denominada Divina Comédia por Giovanni Boccaccio) é um poema alegórico-didático, e escatológico, de viés épico e teológico da literatura italiana e mundial, sobre os fundamentos da fé cristã, escrito por Dante Alighieri no século XIV e dividido em três partes: o Inferno, o Purgatório e o Paraíso.\n[…]\nCada uma das três partes do poema (Inferno, Purgatório e Paraíso) está dividida em 33 cantos, com mais um a título de introdução, a obra soma 100 cantos, número que significaria a perfeição da perfeição. Além do próprio Dante, três são os personagens principais: Virgílio, guia no inferno e purgatório, Beatriz guia no paraíso terrestre e São Bernardo, guia nas esferas celestes. A obra soma também 14 233 versos em, a partir de então chamados, \"tercetos dantescos\".\n[…]\nSegundo Dante, o Purgatório é um espaço intermediário entre o Paraíso e o Inferno, que se encontra na porção austral do planeta, onde existe uma única ilha. Dante encontra nesta ilha uma montanha composta por círculos ascendentes, reservada àqueles que se arrependeram em vida de seus pecados e estão em processo de expiação dos mesmos. No Purgatório as almas assistem às punições das outras almas que, por não se arrependerem, foram para o Inferno.\n[…]\nAlgumas \"semelhanças superficiais\" da Divina Comédia ao Resalat Al-Ghufran ou Epístola do Perdão de Al-Ma'arri também foram mencionadas neste debate. O Resalat Al-Ghufran descreve a jornada do poeta nos reinos da vida após a morte e inclui o diálogo com as pessoas no Céu e Inferno, embora, ao contrário do Kitab al Miraj, haja pouca descrição desses locais, e é improvável que Dante fez empréstimo deste trabalho.\n[…]\nDante's Inferno jogo inspirado no livro.\n[…]\nULTRAKILL é inspirado no Inferno de Dante, se passando nos círculos do Inferno.\n[…]\nA Divina Comédia (em PDF) no site Biblioteca Mundial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Os Três Mosqueteiros",
      "descricao": "Romance de Alexandre Dumas, publicado em 1844, ambientado na França do século dezessete."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Athos, Porthos e Aramis são os três mosqueteiros de Alexandre Dumas. Que jovem gascão se junta a eles?",
    "resposta": "D'Artagnan",
    "distratores": [
      "Conde de Rochefort",
      "Planchet",
      "Edmond Dantès"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Three_Musketeers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Three_Musketeers",
        "situacao": "ok",
        "texto": "The Three Musketeers (French: Les Trois Mousquetaires) is a French historical adventure novel written and published in 1844 by French author Alexandre Dumas. It is the first of the author's three d'Artagnan Romances. As with some of his other works, he wrote it in collaboration with ghostwriter Auguste Maquet. It is in the swashbuckler genre, which has heroic, chivalrous swordsmen who fight for ju\n[…]\nAthos – Comte de la Fère: he has never recovered from his marriage to Milady and seeks solace in wine. As the oldest of the friend group, he becomes a father figure to d'Artagnan.\n[…]\nFeaturing contemporary music, it starred Canadian pop singer Olivier Dion as d'Artagnan, French pop singer and stage actor Damien Sargue as Aramis, French dancer and choreographer Brahim Zaibat as Athos (also part of the artistic direction), and French actor David Bàn as Porthos.\n[…]\nAn adaptation in twelve parts by Patrick Riddell was broadcast on the BBC Light Programme 4 April-20 June 1946. The cast included Marius Goring as d'Artagnan, Philip Cunningham as Athos, Howard Marion-Crawford as Porthos, Allan McClelland as Aramis, Lucille Lisle as Milady de Winter, Leon Quartermaine as Cardinal Richelieu and Valentine Dyall as the Narrator.\n[…]\nIn May 2022, Radio Mirchi Kolkata station aired The Three Musketeers in Bangla version, translated by Rajarshee Gupta for Mirchi's Sunday Suspense Programme. It was narrated by Deepanjan Ghosh. D'Artagnan was voiced by actor Rwitobroto Mukherjee. Athos was voiced by Gaurav Chakrabarty, Porthos by Agni, Aramis by Somak, King Louis XIII by Sayak Aman and Cardinal Richelieu by Mir Afsar Ali.\n[…]\nIn Pokémon Black and White, the Pokémon Cobalion, Terrakion and Virizion, known as the Swords of Justice, are based on the Three Musketeers. Cobalion represents Athos, Terrakion represents Porthos and Virizion represents Aramis. The fourth Sword of Justice, Keldeo, represents d'Artagnan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Tr%C3%AAs_Mosqueteiros",
        "situacao": "ok",
        "texto": "Os Três Mosqueteiros é um romance histórico escrito pelo francês Alexandre Dumas. Inicialmente publicado como folhetim no jornal Le Siècle de março a julho de 1844, foi posteriormente lançado como livro, ainda em 1844, pelas Edições Baudry, e reeditado em 1846 por J. B. Fellens e L. P. Dufour com ilustrações de Vivant Beaucé.\n[…]\nEste livro conta a história de um jovem de 20  anos, proveniente da Gasconha, D'Artagnan, que vai a Paris buscando se tornar membro do corpo de elite dos guardas do rei, os mosqueteiros do Rei. Chegando lá, após acontecimentos similares, ele conhece três mosqueteiros chamados \"os inseparáveis\": Athos, Porthos e Aramis. Juntos, os quatro enfrentaram grandes aventuras a serviço do rei da França, Luís XIII, e principalmente, da rainha, Ana de Áustria.\n[…]\nAramis: Henri d’Aramitz;\n[…]\nKetty: criada de Milady e apaixonada por d'Artagnan;\n[…]\nA mania pelos \"Três Mosqueteiros\" continua, mais de um século e meio após a aparição do romance de Dumas, com, por exemplo, o \"D'Artagnan amoureux\" (\"D'Artagnan apaixonado\") de Roger Nimier, adaptado en 1970 para a televisão por Yannick Andrei,  ou \"Le Retour des trois mousquetaires\" (\"O Retorno dos Três Mosqueteiros\") de um certo Nicolas Harin em 1997. Recentemente ainda, Martin Winckler escreveu um romance, \"Les Trois Médecins\" (2006), em que a trama está calcada na do romance de Dumas.\n[…]\nCriou um novo herói positivo, o gascão sem dinheiro, ainda próximo do pícaro, porém nobre e heroico, exímio espadachim e cavalheiro mas ainda humano com suas fraquezas: a irrascividade de d'Artagnan, a vaidade de Porthos, a ambivalência de Aramis (dividido entre Eros e São Pedro), a melancolia e o alcoolismo de Athos impedem que os mosqueteiros sejam heróis perfeitos (como o será no futuro Raul de Bragelonne, filho de Athos) mas torna essas fraquezas sua força literária.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Cem Anos de Solidão",
      "descricao": "Romance de Gabriel García Márquez, publicado em 1967, ambientado na cidade fictícia de Macondo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Cem Anos de Solidão, de García Márquez, qual é o sobrenome da família acompanhada ao longo de sete gerações?",
    "resposta": "Buendía",
    "fonte": [
      "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude",
        "situacao": "ok",
        "texto": "One Hundred Years of Solitude (Spanish: Cien años de soledad, Latin American Spanish: [sjen ˈaɲos ðe soleˈðað]) is a 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the fictitious town of Macondo. The novel is often cited as one of the supreme achievements in world literature.\n[…]\nBell writes that \"The emergence of love in the novel to displace the traditional egoism of the Buendías reflects the emergence of socialist values as a political force in Latin America, a force that will sweep away the Buendías and the order they represent.\" The book's ending could be a wishful prediction by García Márquez, a socialist, regarding the future of Latin America.\n[…]\nA theme throughout the book is the elitism of the Buendía family. Gabriel García Márquez shows his criticism of the Latin American elite through the stories of the members of a high-status family who are essentially in love with themselves, to the point of being unable to understand the mistakes of their past and learn from them.\n[…]\nThe continual references to the sprawling Buendía house call to mind the idea of a Big House, or hacienda, a large land holding in which elite families lived and managed their lands and laborers. In Colombia, where the novel takes place, a Big House was known for being a grand one-story dwelling with many bedrooms, parlors, a kitchen, a pantry and a veranda, all areas of the Buendía household mentioned throughout the book.\n[…]\nThe cast includes Claudio Cataño (Colonel Aureliano Buendía), Jerónimo Barón (young Aureliano Buendía), Marco González (Jose Arcadio Buendía), Leonardo Soto (José Arcadio), Susana Morales (Úrsula Iguarán), Ella Becerra (Petronila Iguarán), Carlos Suaréz (Aureliano Iguarán), Moreno Borja (Melquiades), and Santiago Vásquez (teenage Aureliano Buendía)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cem_Anos_de_Solid%C3%A3o",
        "situacao": "ok",
        "texto": "Cem Anos de Solidão (em espanhol, Cien Años de Soledad) é um romance do escritor colombiano Gabriel García Márquez, Prêmio Nobel da Literatura em 1982. É considerada uma das obras mais importantes da literatura colombiana e sul-americana e umas das mais lidas e traduzidas de todo o mundo.\n[…]\nPatriarca da família Buendía e fundador da cidade de Macondo, casou-se com sua prima Úrsula Iguarán aos 19 anos. Homem empreendedor, de caráter forte, alimentado por sonhos extravagantes, interessava-se por física, alquimia e mecânica. O cigano Melquíades o colocava a par das novidades que descobria ao longo das suas viagens pelo mundo. Após ter enlouquecido, foi amarrado a uma árvore à qual permaneceu preso, mesmo após ter sido libertado das cordas que o amarravam.\n[…]\nMelquiades é um dos ciganos que visita Macondo, trazendo inventos e mercadorias de diversos lugares do mundo. Escreve os pergaminhos que preveem a história da família Buendía, os quais são traduzidos por Aureliano Babilônia.\n[…]\nNasceu em uma cidade distante de Macondo, filha de uma família nobre, mas empobrecida. Na infância e adolescência, se dedicou aos estudos em um convento, onde foi preparada para ser rainha. Casa-se com Aureliano Segundo, todavia este continua vivendo com a amante. A sua chegada na casa dos Buendía marca o princípio da decadência em Macondo. É muito perfeccionista e neurótica, sendo uma religiosa quase fanática.\n[…]\nSanta Sofía de la Piedad dá à luz Remédios, a Bela, e aos gêmeos José Arcadio Segundo e Aureliano Segundo. Personagem que segue a família Buendía, porém sem grandes feitos, sendo inclusive considerada como uma serviçal por sua nora Fernanda del Carpio. Vai embora para morrer em sua cidade após a morte de seus três filhos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Odisseia",
      "descricao": "Poema épico grego atribuído a Homero, sobre o retorno de Ulisses a Ítaca."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na Odisseia, depois do fim da Guerra de Troia, quantos anos Ulisses leva para voltar para casa, em Ítaca?",
    "resposta": "Dez anos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Odyssey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Odyssey",
        "situacao": "ok",
        "texto": "The Odyssey (, ODD-iss-ee; Ancient Greek: Ὀδύσσεια, romanized: Odýsseia [odyˈsːeːˌja]) is one of two major epics of ancient Greek literature attributed to Homer. It is one of the oldest surviving works of literature and remains popular with modern audiences. Like the Iliad, the Odyssey is divided into 24 books. It follows the heroic king of Ithaca, Odysseus, also known by the Latin variant Ulysses\n[…]\nIl ritorno d'Ulisse in patria, first performed in 1640, is an opera by Claudio Monteverdi based on the second half of the Odyssey.\n[…]\nJean-Claude Gallota's ballet Ulysse, based on both the Odyssey and James Joyce's Ulysses.\n[…]\nPsychiatrist Jonathan Shay wrote two books, Achilles in Vietnam: Combat Trauma and the Undoing of Character (1994) and Odysseus in America: Combat Trauma and the Trials of Homecoming (2002), which relate the Iliad and the Odyssey to posttraumatic stress disorder and moral injury as seen in the rehabilitation histories of combat veteran patients.\n[…]\nThe Odyssey (in Ancient Greek) on Perseus Project\n[…]\nOdyssey: the Greek text presented with the translation by Butler and vocabulary, notes, and analysis of difficult grammatical forms\n[…]\nThe Odyssey, translated by William Cullen Bryant at Standard Ebooks\n[…]\nThe Odysseys of Homer, together with the shorter poems by Homer, trans. by George Chapman at Project Gutenberg\n[…]\nThe Odyssey, trans. by Alexander Pope at Project Gutenberg\n[…]\nThe Odyssey, trans. by William Cowper at Project Gutenberg\n[…]\nThe Odyssey, trans. by Samuel H. Butcher and Andrew Lang at Project Gutenberg\n[…]\nThe Odyssey, trans. by Samuel Butler at Project Gutenberg\n[…]\nThe Odyssey public domain audiobook at LibriVox\n[…]\nThe Odyssey Comix—A detailed retelling and explanation of Homer's Odyssey in comic-strip format by Greek Myth Comix\n[…]\nThe Odyssey—Annotated text and analyses aligned to Common Core Standards\n[…]\n\"Homer's Odyssey: A Commentary\" by Denton Jaques Snider on Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Odisseia",
        "situacao": "ok",
        "texto": "A Odisseia (em grego clássico: Οδύσσεια; romaniz.: Odýsseia) é uma das duas principais epopeias da literatura grega antiga atribuídas a Homero. É uma das obras literárias mais antigas que sobreviveram e continua popular entre o público moderno. Como a Ilíada, a Odisseia é dividida em 24 livros. Ela segue o rei herói de Ítaca, Odisseu, também conhecido pela variante latina Ulisses, e sua jornada de\n[…]\nDez anos depois de os Aqueus (gregos) terem vencido a Guerra de Troia, Odisseu, rei de Ítaca, ainda não voltou para casa de Troia. Em sua ausência, 108 pretendentes grosseiros cortejam sua esposa Penélope. Penélope diz a eles que se casará novamente quando terminar de tecer uma mortalha para o pai idoso de Odisseu, Laertes; no entanto, ela secretamente desfaz o tecido todas as noites.\n[…]\nAtena implora a Zeus que resgate Odisseu, e Zeus envia Hermes para negociar sua libertação. Quando Odisseu deixa a ilha de Calipso, Poseidon destrói sua jangada com uma tempestade. A ninfa do mar Ino protege Odisseu enquanto ele nada até Esquéria, terra dos feácios, e Atena leva a princesa feácia Nausícaa para encontrá-lo. Na corte dos pais de Nausícaa, Arete e Alcínoo, Odisseu se destaca nos jogos atléticos e fica emocionado quando o bardo Demódoco canta sobre a Guerra de Troia.\n[…]\nOdisseu revela sua identidade e relata suas aventuras após a guerra.\n[…]\nA Guerra de Troia e seus protagonistas constituíam referências mitológicas e históricas importantes para os romanos, que incorporaram amplamente Homero em sua cultura. Durante o período romano, a circulação e o ensino das epopeias contribuíram para a continuidade de sua transmissão tanto no Mediterrâneo oriental quanto no ocidental.\n[…]\nO trabalho cantado de Jorge Rivera-Herrans, Épico: O Musical, conta a história da Odisseia ao longo de nove \"sagas\", começando com o fim da Guerra de Troia e seguindo até o regresso de Odisseu a Ítaca.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Penélope",
      "descricao": "Esposa de Ulisses na Odisseia, que espera o marido por vinte anos em Ítaca."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na Odisseia, Penélope adia um novo casamento desfazendo à noite o que tecia de dia. O que ela dizia estar tecendo?",
    "resposta": "A mortalha de Laertes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Penelope"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Penelope",
        "situacao": "ok",
        "texto": "Penelope ( pə-NEL-ə-pee; Ancient Greek: Πηνελόπη, IPA: [pɛː.ne.ló.pɛː]) is the legendary wife of Odysseus and queen of Ithaca in Homer's Odyssey. She is the daughter of Spartan king Icarius, and the mother of Telemachus. Different sources describe her as the mother of figures such as Poliporthes, Arcesilaus, Italus, Mamilia, and the god Pan.\n[…]\nWhen Helen, daughter of Zeus, came of age to marry, she was sought after by princes and kings from across the world, all converging on Sparta at the court of her adoptive father, Tyndareus. Among the suitors was Odysseus, son of Laertes, who hailed from the island kingdom of Ithaca.\n[…]\nOn Odysseus's return, disguised as an old beggar, he finds that Penelope has remained faithful. She has devised cunning tricks to delay the suitors, one of which is to pretend to be weaving a burial shroud for Odysseus's elderly father Laertes and claiming that she will choose a suitor when she has finished. Every night for three years, she undoes part of the shroud, until Melantho, a slave, discovers her subterfuge and reveals it to the suitors.\n[…]\nAs so often, it is Athena who takes the initiative in giving the story a new direction ... Usually the motives of mortal and god coincide, here they do not: Athena wants Penelope to fan the Suitors' desire for her and (thereby) make her more esteemed by her husband and son; Penelope has no real motive ... she simply feels an unprecedented impulse to meet the men she so loathes ... adding that she might take this opportunity to talk to Telemachus (which she will indeed do).\n[…]\nPenelope Unravelling Her Web – a painting of Penelope by Joseph Wright of Derby (from the Getty Museum)\n[…]\nPenelope and the Suitors, a painting by John William Waterhouse; explore other paintings depicting Penelope"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pen%C3%A9lope",
        "situacao": "ok",
        "texto": "Penélope (em grego antigo: Πηνελόπεια, Pēnelópeia ou Πηνελόπη, Pēnelópē), é uma personagem da Odisseia de Homero. Ela era a rainha de Ítaca e filha do rei espartano Icário e de Asterodia. A Penélope mitológica é conhecida por sua fidelidade ao marido Ulisses, apesar da atenção de mais de cem pretendentes durante sua ausência. Em outras fontes, Penélope também é designada como Arnacia ou Arnaea.\n[…]\nPor vinte anos, Penélope esperou a volta de seu marido Ulisses, da Guerra de Troia. A longa viagem de retorno de Ulisses é o tema da Odisseia, de Homero.\n[…]\nIcário, seu pai, era um corredor campeão e não iria permitir que ninguém se casasse com sua filha, a menos que pudesse vencê-lo em uma corrida. Ulisses o fez e casou-se com Penélope. Após o casamento, Icário tentou convencer Ulisses a permanecer em Esparta, porém este foi embora com Penélope. Icário seguiu-os, implorando a sua filha para ficar. Ulisses disse que ela devia escolher se desejava ficar com o pai ou com o marido. Penélope não respondeu, mas modestamente cobriu o rosto com um véu.\n[…]\nPenélope teve apenas um filho com Ulisses, Telêmaco, que nasceu pouco antes de seu marido ser chamado para lutar na Guerra de Troia.\n[…]\nDiante da insistência do pai e para não desagradá-lo, ela resolveu aceitar a corte dos pretendentes à sua mão, estabelecendo a condição de que o novo casamento somente aconteceria depois que terminasse de tecer um sudário para Laerte, pai de Ulisses. Com esse estratagema, ela esperava adiar o evento o máximo possível.\n[…]\nDurante o dia, aos olhos de todos, Penélope tecia, e à noite, secretamente, ela desmanchava todo o trabalho. E foi assim até uma de suas servas descobrir o ardil e contar toda a verdade.\n[…]\nPenélope então propôs outra condição ao seu pai para casar. Conhecendo a dureza do arco de Ulisses, ela afirmou que se casaria com o homem que o conseguisse encordoar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Esperando Godot",
      "descricao": "Peça do escritor irlandês Samuel Beckett, estreada em Paris em 1953."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "A peça Esperando Godot, do irlandês Samuel Beckett, foi escrita originalmente em que língua?",
    "resposta": "Francês",
    "distratores": [
      "Inglês",
      "Irlandês",
      "Alemão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Waiting_for_Godot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Waiting_for_Godot",
        "situacao": "ok",
        "texto": "Waiting for Godot is a play by Irish playwright and author Samuel Beckett. It was written (1948–1949), first published (1952), and first performed (1953) in French as En attendant Godot. The play is Beckett's own English-language adaptation of the original. Subtitled \"tragicomedy in two acts\", it is his best-known literary work and is regarded by critics as \"one of the most enigmatic plays of mode\n[…]\nThe second story, according to Bair, is that Beckett once encountered a group of spectators at the French Tour de France bicycle race, who told him \"Nous attendons Godot\" – they were waiting for a competitor whose name was Godot.\n[…]\nThese experiences would have likely had a severe impact on both Beckett's personal politics, as well as his views on the prevailing policies that informed the period in which he found himself. Some academics have theorized that Godot is set during World War II, with Estragon and Vladimir being two Jews waiting for Godot to smuggle them out of occupied France.\n[…]\nA web series adaptation titled While Waiting for Godot was also produced at New York University in 2013, setting the story among the modern-day New York homeless. Directed by Rudi Azank, the English script was based on Beckett's original French manuscript of En attendant Godot (the new title being an alternate translation of the French) prior to censorship from British publishing houses in the 1950s, as well as adaptation to the stage.\n[…]\nA radical transformation was written by Bernard Pautrat, performed at Théâtre National de Strasbourg in 1979–1980: Ils allaient obscurs sous la nuit solitaire (d'après 'En attendant Godot' de Samuel Beckett) (They Went Dark Under the Lonely Night (based on 'Waiting for Godot' by Samuel Beckett)). It features not four actors and the brief appearance of a fifth one (as in Beckett's play), but ten actors. Four of them bore the names of Gogo, Didi, Lucky and Pozzo."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/En_attendant_Godot",
        "situacao": "ok",
        "texto": "En attendant Godot (no original em francês) ou Waiting for Godot, em inglês (À Espera de Godot em Portugal; Esperando Godot no Brasil), é uma peça de teatro escrita pelo dramaturgo irlandês Samuel Beckett (1906-1989). Escrita originalmente em francês, foi publicada pela primeira vez em 1952 e apresentada no pequeno Théâtre Babylone  em Paris, com direção de Roger Blin (1907-1984). É considerado um\n[…]\nBeckett escreveu a peça em 1949 e só veio a publicá-la no ano de 1952, em francês. Em 1955, Beckett recriou sua obra em língua inglesa. A peça é dividida em dois atos. Nos dois atos, inicialmente contracenam dois personagens: Vladimir (Didi) e Estragon (Gogo). Durante cada um dos atos, que são bem semelhantes, surgem dois novos personagens: Pozzo e Lucky. Além destes, entra em cena no final de cada ato um garoto.\n[…]\nO cenário é o mesmo, apenas a árvore está um pouco diferente, agora com algumas folhas. Estragon e Vladimir iniciam sua jornada na espera de Godot. Surgem novamente Pozzo e Lucky. Pozzo está cego e Lucky mudo. Após a partida destes, aparece novamente um garoto anunciando novamente que Godot não virá, talvez amanhã. O diálogo final, que encerra o ato e a peça  é o seguinte:[carece de fontes]?\n[…]\nNo Brasil, as duas primeiras montagens de \"Esperando Godot\" foram amadoras: uma pela Escola de Arte Dramática - EAD, em 1955, com direção de Alfredo Mesquita e a  outra, com direção de Luiz Carlos Maciel, em Porto Alegre, no ano de 1959.[carece de fontes]?\n[…]\nTexto em inglês de \"Waiting for Godot\" - ato 01\n[…]\nTexto em inglês de \"Waiting for Godot\" - ato 02\n[…]\nArtigo em inglês do The Guardian em comemoração aos cinqüenta anos do lançamento de \"Esperando Godot\"\n[…]\nDeutsche Welle - 1953: Estreia a peça \"Esperando Godot\", de Samuel Beckett\n[…]\nMatéria na revista do SESC, sobre o I Centenário de Samuel Beckett, em 2006[ligação inativa]",
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
