Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Filosofia** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Estoicismo",
      "descricao": "Escola filosófica fundada por Zenão de Cítio em Atenas, por volta de 300 a.C."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A escola estoica, fundada por Zenão de Cítio, deve seu nome a que tipo de construção de Atenas onde ele ensinava?",
    "resposta": "Um pórtico, a Stoa Pintada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stoicism",
      "https://en.wikipedia.org/wiki/Stoa_Poikile"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stoicism",
        "situacao": "ok",
        "texto": "Stoicism is a philosophical movement and practical guide to living, emphasizing daily self-discipline and moral improvement, which originated in the Hellenistic period of ancient Greece and continued well into the Roman Imperial period. The ancient Stoics believed that the universe operated according to reason, or logos, providing a unified account of the world, constructed from ideals of rational\n[…]\nStoicism was founded in the ancient Agora of Athens by Zeno of Citium around 300 BCE, and flourished throughout the Greco-Roman world until the 3rd century CE. Stoicism emerged from the Cynic tradition and was popularized through public teaching at the Stoa Poikile, a painted colonnade. Among its adherents was Roman Emperor Marcus Aurelius.\n[…]\nThe name Stoicism derives from the Stoa Poikile (Ancient Greek: ἡ ποικίλη στοά), or \"painted porch\", a colonnade decorated with mythic and historical battle scenes on the north side of the Agora in Athens where Zeno of Citium and his followers gathered to discuss their ideas, near the end of the fourth century BCE. Unlike the Epicureans, Zeno chose to teach his philosophy in a public space. Stoicism was originally known as Zenonism.\n[…]\nScholars usually divide the history of Stoicism into three phases: the Early Stoa, from Zeno's founding to Antipater; the Middle Stoa, including Panaetius and Posidonius; and the Late Stoa, including Musonius Rufus, Seneca, Epictetus, and Marcus Aurelius. No complete works survived from the first two phases of Stoicism. Only Roman texts from the Late Stoa survived.\n[…]\nbut the logic that made it all possible was the interconnected logic of an interconnected universe, discovered by the ancient Chrysippus, who labored long ago under an old Athenian stoa.\n[…]\nBarnes, Johnathan (1997), Logic and the Imperial Stoa, Brill, ISBN 90-04-10828-9\n[…]\nModern Stoicism Organization\n[…]\nCentre for the Study and Application of Stoicism\n[…]\nStoa Nova"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Stoa_Poikile",
        "situacao": "ok",
        "texto": "The Stoa Poikile (Ancient Greek: ἡ ποικίλη στοά, hē poikílē stoá) or Painted Portico was a Doric stoa (a covered walkway or portico) erected around 460 BC on the north side of the Ancient Agora of Athens. It was one of the most famous sites in ancient Athens, owing its fame to the paintings and war-booty displayed within it and to its association with ancient Greek philosophy, especially Stoicism.\n[…]\nFrom the fourth century BC onwards, philosophers often taught in the stoa. The homeless Cynic philosopher Crates spent his time there. His student, Zeno of Citium, was particularly closely associated with the stoa, where he taught from around 300 BC until his death c. 262 BC. The philosophical school that he founded was named Stoicism as a result. The late third-century BC comedian Theognetus refers to \"trifling arguments from the Poikile Stoa\" in a joke about philosophers.\n[…]\nThe structure was demolished before or during the construction of the Late Roman Stoa in the 5th century AD. The west pier was then  used as the base for a columnar monument; the Ionic base is still in situ on top of it.\n[…]\nTodini, Lellida (2008). \"Παλαιά τε καὶ καινά. Erodoto e il ciclo figurativo della Stoà Poikile\". Historia: Zeitschrift für Alte Geschichte. 57 (3): 255–262. doi:10.25162/historia-2008-0014. ISSN 0018-2311. JSTOR 25598434.\n[…]\nLuginbill, Robert D. (2014). \"The Battle of Oinoe, the Painting in the Stoa Poikile, and Thucydides' Silence\". Historia: Zeitschrift für Alte Geschichte. 63 (3): 278–292. doi:10.25162/historia-2014-0015. ISSN 0018-2311. JSTOR 24432809.\n[…]\nMedia related to Stoa Poikile at Wikimedia Commons\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Stoa Poikile\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658.\n[…]\nStoa Poikile on the page of the Agora Excavations, American School of Classical Studies in Athens"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Estoicismo",
        "situacao": "ok",
        "texto": "O estoicismo é uma filosofia helenística que floresceu na Grécia e Roma antigas. Os estóicos acreditavam que o universo operava de acordo com a razão, ou seja, por um Deus que está imerso na própria natureza. De todas as escolas de filosofia antiga, o estoicismo fez a maior afirmação de ser totalmente sistemático.\n[…]\nO estoicismo foi fundado na antiga Ágora de Atenas por Zenão de Cítio por volta de 300 a.C. e floresceu em todo o mundo greco-romano até o século III d.C. O estoicismo emergiu da tradição cínica e foi popularizado através do ensino público no Pórtico Pintado, uma colunata pintada. Entre seus adeptos estava o imperador romano Marco Aurélio.\n[…]\nO nome estoicismo deriva de Stoa Poikile (em grego clássico: ἡ ποικίλη στοά; romaniz.: pórtico pintado), uma colunata decorada com cenas de batalhas míticas e históricas no lado norte da Ágora de Atenas, onde Zenão de Cítio e seus seguidores se reuniam para discutir suas ideias, perto do final do século IV a.C. Ao contrário dos epicuristas, Zenão escolheu ensinar sua filosofia em um espaço público. O estoicismo era originalmente conhecido como zenonismo.\n[…]\nA tradição estoica da lógica teve origem no século IV a.C. em uma escola filosófica diferente, conhecida como escola megárica. Foram dois dialéticos dessa escola, Diodoro Crono e seu discípulo Fílon, que desenvolveram suas próprias teorias de modalidades e de proposições condicionais. O fundador do estoicismo, Zenão de Cítio, estudou com os megáricos e dizia-se que ele havia sido colega de Fílon.\n[…]\nmas a lógica que tornou tudo isso possível foi a lógica interconectada de um universo interconectado, descoberta pelo antigo Crisipo, que trabalhou há muito tempo sob uma antiga stoa ateniense.\n[…]\n«O Antigo Estoicismo, por Émile Bréhier»\n[…]\nSite O Estoico www.estoico.com.br",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Cinismo",
      "descricao": "Escola filosófica grega antiga de Antístenes e Diógenes de Sinope, que pregava uma vida simples e contrária às convenções."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome da escola cínica, de Diógenes, vem de uma palavra grega ligada a que animal?",
    "resposta": "Cão",
    "distratores": [
      "Lobo",
      "Gato",
      "Raposa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cynicism_(philosophy)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cynicism_(philosophy)",
        "situacao": "ok",
        "texto": "Cynicism (Ancient Greek: κυνισμός) is a school of thought in ancient Greek philosophy, originating in the Classical period and extending into the Hellenistic and Roman Imperial periods. According to Cynicism, people are reasoning animals, and the purpose of life and the way to gain happiness is to achieve virtue, in agreement with nature, following one's natural sense of reason by living simply an\n[…]\nLucian complained that Cynics could be found throughout the empire, standing on street corners, preaching about virtue, writing that \"every city is filled with such upstarts, particularly with those who enter the names of Diogenes, Antisthenes, and Crates as their patrons and enlist in the Army of the Dog\", and Aelius Aristides observed that \"they frequent the doorways, talking more to the doorkeepers than to the masters, making up for their lowly condition by using impudence.\" The most notable representative of Cynicism in the 1st century CE was Demetrius, whom Seneca praised as \"a man of consummate wisdom, though he himself denied it, constant to the principles which he professed, of an eloquence worthy to deal with the mightiest subjects.\" Cynicism in Rome was both the butt of the satirist and the ideal of the thinker.\n[…]\nDudley, R. (1937), A History of Cynicism from Diogenes to the 6th Century A.D., Cambridge University Press\n[…]\nEpictetus, Discourse 3.22, On Cynicism\n[…]\nIan Cutler, (2005), Cynicism from Diogenes to Dilbert. McFarland & Co. ISBN 0-7864-2093-6\n[…]\nLuis E. Navia, (1996), Classical Cynicism: A Critical Study. Greenwood Press. ISBN 0-313-30015-1\n[…]\nLousa Shea (2009), The Cynic Enlightenment: Diogenes in the Salon Johns Hopkins University Press.\n[…]\nCynicism on In Our Time at the BBC\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Cynicism (philosophy)\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658.\n[…]\n\"Cynicism\", in The Dictionary of the History of Ideas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cinismo",
        "situacao": "ok",
        "texto": "O cinismo (em grego clássico: κυνισμός kynismós, em latim cinicus) foi uma corrente filosófica fundada por Antístenes, discípulo de Sócrates e como tal praticada pelos cínicos (em grego clássico: Κυνικοί, latim: Cynici). Para os cínicos, o propósito da vida era viver na virtude, de acordo com a natureza.\n[…]\nTalvez com igual influência, os contos indianos foram conhecidos por gregos posteriores, como os gimnosofistas, que adotaram um asceticismo rigoroso juntamente com um desrespeito às leis e costumes estabelecidos. Por volta do século V a.C., os sofistas tinham começado um processo de questionamento sobre muitos aspectos da sociedade grega, como a religião, a lei e a ética. No entanto, a influência mais imediata para a escola cínica foi de Sócrates.\n[…]\nO Cinismo foi grande influenciador do estoicismo.\n[…]\nAo contrário da acepção moderna e vulgar da palavra para o cinismo, o objetivo essencial da vida era a conquista da virtude moral, que somente seria obtida eliminando-se da vontade de todo o supérfluo, tudo aquilo que fosse exterior. Defendiam um retorno à vida da natureza, errante e instintiva, como a dos cães.\n[…]\nAssim como a preocupação com o próprio sofrimento, a saúde, a morte e o sofrimento dos outros também era algo do qual os cínicos desejavam libertar-se. Por isso que a palavra cinismo adquiriu a conotação que tem hoje em dia, de indiferença e insensibilidade ao sentir e ao sofrer dos outros.\n[…]\nHá poucos registros do Cinismo nos séculos 2 ou 1 a.C.; Cícero (c. 50 a.C.), que estava muito interessado na filosofia grega, tinha pouco a dizer sobre o cinismo, exceto que \"deve ser evitado; pois se opõe à modéstia, sem a qual não pode haver direito nem honra\". No entanto, no século I d.C., o cinismo reapareceu com força total.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Academia de Platão",
      "descricao": "Escola fundada por Platão em Atenas, por volta de 387 a.C."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Academia de Platão herdou o nome do bosque de Atenas onde funcionava, dedicado a que herói lendário?",
    "resposta": "Academo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Platonic_Academy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Platonic_Academy",
        "situacao": "ok",
        "texto": "The Academy (Ancient Greek: Ἀκαδημία, romanized: Akadēmia) was founded by Plato in ca. 387 BC in Athens. Aristotle studied there for twenty years (367 BC – 347 BC) before founding his own school, the Lyceum. The academy persisted throughout the Hellenistic period as a skeptical school, until coming to an end after the death of Philo of Larissa in 83 BC.\n[…]\nMany have imagined that the Academic curriculum would have closely resembled the one canvassed in Plato's Republic. Others, however, have argued that such a picture ignores the obvious peculiar arrangements of the ideal society envisioned in that dialogue. The subjects of study almost certainly included mathematics as well as the philosophical topics with which the Platonic dialogues deal, but there is little reliable evidence.\n[…]\nThe New or Third Academy begins with Carneades, in 155 BC, the fourth scholarch in succession from Arcesilaus. It was still largely skeptical, denying the possibility of knowing an absolute truth. Carneades was followed by Clitomachus (129 – c. 110 BC) and Philo of Larissa (\"the last undisputed head of the Academy,\" c. 110–84 BC). According to Jonathan Barnes, \"It seems likely that Philo was the last Platonist geographically connected to the Academy.\"\n[…]\nPhilosophers continued to teach Platonism in Athens during the Roman era, but it was not until the early 5th century (c. 410) that a revived Academy was established by some leading Neoplatonists. The origins of Neoplatonist teaching in Athens are uncertain, but when Proclus arrived in Athens in the early 430s, he found Plutarch of Athens and his colleague Syrianus teaching in an academy there.\n[…]\nAcademy of Athens (modern)\n[…]\nPlatonism\n[…]\nReynolds, Francis J., ed. (1921). \"Academy\" . Collier's New Encyclopedia. New York: P. F. Collier & Son Company.\n[…]\nThe Academy, entry in the Internet Encyclopedia of Philosophy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Academia_de_Plat%C3%A3o",
        "situacao": "ok",
        "texto": "A Academia (em grego antigo: Ἀκαδημία), também chamada Academia de Platão, Academia Platônica (português brasileiro) ou Academia Platónica (português europeu), Academia de Atenas ou Academia Antiga, foi uma academia fundada por Platão, aproximadamente em 384/383 a.C. nos jardins localizados no subúrbio de Atenas.\n[…]\nAntes da Academia ser o que era, foi uma escola, e mesmo antes de Cimon cercá-las com muros, no seu terreno havia um bosque sagrado de oliveiras dedicados a Atena, a deusa da sabedoria, fora das muralhas da cidade antiga de Atenas. O nome arcaico do local era (em grego clássico: Ἑκαδήμεια Hekademia), que depois evoluiu para Academia, esse nome foi explicado pelo menos no início do século VI a.C., ligando-o a um herói ateniense, o lendário \"Academo\".\n[…]\nO local da Academia foi dedicado a Atena e a outros imortais, o local abrigou seu culto religioso desde a Idade do Bronze, um culto que foi, talvez, também associado aos herói-deuses Dióscuros (Castor e Pólux), o herói Academos associado ao local foi creditado por ter revelado aos gêmeos divinos onde Teseu tinha escondido Helena de Troia. Por respeito à sua longa tradição e da associação com a Dióscuros, os espartanos não devastaram o bosque quando incendiaram a Ática.\n[…]\nOs Neoplatônicos em Atenas se autodenominavam \"sucessores\" (\"diádocos\", mas de Platão) e apresentavam-se como sendo a tradição ininterrupta desde Platão, mas não há nenhuma continuidade entre estes e a Academia original, seja geográfica, institucional, econômica ou pessoal. A escola parece ter sido uma fundação privada, conduzida em uma casa grande com Proclo eventualmente havendo-a herdado de Plutarco e Siriano.\n[…]\nOs últimos filósofos \"gregos\" da Academia renovada no século VI foram tirados de diversas pares do mundo cultural\n[…]\nPlatonismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Platão",
      "descricao": "Filósofo grego de Atenas (c. 428–348 a.C.), discípulo de Sócrates e autor de A República."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo relatos antigos, Platão era um apelido, que quer dizer largo. Qual seria o verdadeiro nome do filósofo?",
    "resposta": "Arístocles",
    "distratores": [
      "Aristides",
      "Aristófanes",
      "Anaxímenes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Plato"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Plato",
        "situacao": "ok",
        "texto": "Plato ( PLAY-toh; Ancient Greek: Πλάτων, Plátōn; c. 428–347 BC) was an ancient Greek philosopher of Classical Athens who is most commonly considered the foundational thinker of the Western philosophical tradition.\n[…]\nAlong with his teacher Socrates, and his student Aristotle, Plato is a central figure in the history of Western philosophy. 2,400 years later, Plato's complete works are believed to have survived—unlike those of nearly all of his contemporaries. Although their popularity has fluctuated, they have consistently been read and studied through the ages. Through Platonism's outgrowth Neoplatonism, he also influenced Christian,  Jewish and Islamic philosophy.\n[…]\nMany of these commentaries on Plato were translated from Arabic into Latin, in which form they influenced medieval scholastics. Plato's thought is often compared with that of his most famous student, Aristotle, whose reputation during the Western Middle Ages so completely eclipsed that of Plato that the Scholastic philosophers referred to Aristotle as \"the Philosopher\".\n[…]\nThe 17th century Cambridge Platonists sought to reconcile Plato's more problematic beliefs, such as metempsychosis and polyamory, with Christianity. By the 19th century, Plato's reputation was restored, and at least on par with Aristotle's. Plato's influence has been especially strong in mathematics and the sciences.\n[…]\nPlato's resurgence inspired some of the greatest advances in logic since Aristotle, primarily through Gottlob Frege, who argued for a form of Platonism regarding abstract mathematical objects that has become prominent in the philosophy of mathematics.\n[…]\nPlato at PhilPapers\n[…]\n\"Plato and Platonism\" . Catholic Encyclopedia. 1913."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Plat%C3%A3o",
        "situacao": "ok",
        "texto": "Platão (em grego clássico: Πλάτων, Plátōn, /plá.tɔːn/, \"amplo\") nasceu em 428 ou 427 a.C. em Atenas e morreu em 348 ou 347 a.C. Foi um filósofo da Grécia Clássica, contemporâneo da democracia ateniense e dos sofistas, cujas posições frequentemente criticou. Retomou o pensamento de predecessores, sobretudo de Sócrates, de quem foi aluno, mas também de Parmênides, Heráclito e Pitágoras, para elabora\n[…]\nTal alegação nos foi preservada a partir de Diógenes Laércio, segundo o qual o filósofo teria sido nomeado Arístocles como seu avô, mas seu treinador de luta, Aristão de Argos, o apelidara posteriormente de Platon, que significa \"grande\", por conta de sua figura robusta. De acordo com as fontes mencionadas por Diógenes (todas datam do período alexandrino), Platão derivou seu nome a partir da \"amplitude\" (platytês) de sua eloquência, ou então, porque possuía a fronte (platýs) larga.\n[…]\nNa Metafísica, Aristóteles afirma que a filosofia de Platão segue de perto o ensino dos pitagóricos. Cícero retoma a ideia: Platonem ferunt didicisse Pythagorea omnia, \"Diz-se que Platão deve tudo a Pitágoras\". Em sua História da Filosofia Ocidental, Bertrand Russell afirma que o efeito do pensamento de Pitágoras sobre Platão e outros autores foi tão grande que ele pode ser chamado de o filósofo que mais influiu no Ocidente.\n[…]\nPlotino, os neoplatônicos e o estoicismo seguiram Aristóteles nesse ponto.\n[…]\nDurante a Era de Ouro Islâmica, estudiosos persas e árabes traduziram muito de Platão para o árabe e escreveram comentários e interpretações sobre Platão, Aristóteles e obras de outros filósofos platônicos (ver Alfarábi, Avicena, Averróis, Hunaine ibne Isaque). Muitos desses comentários sobre Platão foram traduzidos do árabe para o latim e, como tal, influenciaram filósofos escolásticos medievais.\n[…]\nSebastián Fox Morcillo, De naturæ philosophia seu de Platonis et Aristotelis consensione libri quinque, 1554.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Utopia (livro)",
      "descricao": "Obra de Thomas More publicada em 1516, que descreve uma sociedade ideal numa ilha imaginária."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Thomas More criou a palavra utopia juntando termos gregos. O que ela significa literalmente?",
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
    "indice": 6,
    "ancora": {
      "nome": "Tomás de Aquino",
      "descricao": "Frade dominicano e filósofo italiano do século treze, autor da Suma Teológica."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por ser grande, calado e tímido, o jovem Tomás de Aquino ganhou dos colegas de estudo que apelido?",
    "resposta": "Boi Mudo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Aquinas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Aquinas",
        "situacao": "ok",
        "texto": "Thomas Aquinas (  ə-KWY-nəs; Italian: Tommaso d'Aquino, lit. 'Thomas of Aquino'; c. 1225 – 7 March 1274) was an Italian Dominican friar and priest, theologian, and philosopher. He is considered one of the most influential thinkers in the history of Catholic theology and Western philosophy. He is the father of a school of thought (encompassing both theology and philosophy) known as Thomism.\n[…]\nThomas Aquinas was most likely born in the family castle of Roccasecca, near Aquino, controlled at that time by the Kingdom of Sicily (in present-day Lazio, Italy), c. 1225. He was born to the most powerful branch of the d'Aquino family, and his father, Landulf VI of Aquino, Lord of Roccasecca, was a miles in the service of Frederick II, Holy Roman Emperor and a man of means. Thomas's mother, Theodora Galluccio, Countess of Teano, belonged to the Rossi branch of the Neapolitan Caracciolo family.\n[…]\nSt. Thomas Aquinas's Works in English\n[…]\nFairweather, Eugene R. (1966), \"The Christian Humanism of Thomas Aquinas\" (PDF), Canadian Journal of Theology, XII (3): 194–210\n[…]\n\"Introductory Guide to Reading the Summa Theologica of Thomas Aquinas\" Archived 20 October 2017 at the Wayback Machine\n[…]\nPoetry of St. Thomas Aquinas\n[…]\nThomistic Philosophy – Inspired by the enduring thought of Saint Thomas Aquinas\n[…]\nSt. Thomas Aquinas (PDF Archived 28 December 2014 at the Wayback Machine) biography from Fr. Alban Butler's Lives of the Saints\n[…]\nSt. Thomas Aquinas biography by G. K. Chesterton\n[…]\n\"St. Thomas Aquinas\" article by Daniel Kennedy in the Catholic Encyclopedia (1912), at NewAdvent.org\n[…]\nSt. Thomas Aquinas biography by Jacques Maritain\n[…]\nThomas Aquinas Emulator Project, research into the use of generative AI to emulate Thomas Aquinas\n[…]\nObjects related to Thomas Aquinas in the Urus : Techniques and Reception of Graphic Art in Central and Eastern Europe (15th–18th centuries) database\n[…]\naquinas Thomas Aquinas at CORE"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tom%C3%A1s_de_Aquino",
        "situacao": "ok",
        "texto": "Tomás de Aquino (em italiano, Tommaso d'Aquino; Roccasecca, c. 1225 – Fossanova, 7 de março de 1274) foi um frade da Ordem dos Pregadores, sacerdote católico italiano, teólogo e filósofo venerado como santo pela Igreja Católica. Um dos pensadores mais influentes da escolástica medieval e da filosofia ocidental, deixou escritos que marcaram a teologia católica e deram origem ao tomismo, corrente es\n[…]\nAlberto respondeu que aquele \"boi mudo\", bos mutus, ainda seria ouvido pelo mundo inteiro por meio de seu ensino.\n[…]\nNo fim do século XIX, o bispo de Coimbra Manuel Correia de Bastos Pina promoveu a retomada do tomismo. A Academia de São Tomás de Aquino começou a funcionar em 1880, e a revista Instituições Christãs, iniciada em 1883, difundiu seus estudos. A Academia e a revista respondiam a críticas à religião e ao papel da Igreja feitas em nome das ciências modernas. Tomás também é padroeiro de Faro, onde sua festa é celebrada em 28 de janeiro.\n[…]\nEm Paris, a igreja de São Tomás de Aquino, antiga igreja ligada a um convento dominicano, foi classificada como monumento histórico em 1982. Em Portugal, a província dominicana criou em 1954 o Instituto São Tomás de Aquino para promover o estudo e a reflexão teológica. Seu nome também identifica uma igreja paroquial em Lisboa.\n[…]\nPaulo Faitanin, A sabedoria do amor: iniciação à filosofia de Santo Tomás de Aquino. Niterói: Instituto Aquinate, 2008.\n[…]\nPaulo Faitanin, O ofício do sábio: o modo de estudar e ensinar segundo Santo Tomás de Aquino. Niterói: Instituto Aquinate, 2008 (resenha da obra).\n[…]\n«O pensamento de Santo Tomás de Aquino sobre a vida militar, a guerra justa e as ordens militares de cavalaria», estudo de Ricardo da Costa e Armando Alexandre dos Santos (PDF em português).\n[…]\n«Lei natural e realização humana em Santo Tomás de Aquino», Revista Brasileira de Estudos Políticos (PDF em português).\n[…]\nObras e estudos em outros idiomas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Elogio da Loucura",
      "descricao": "Ensaio satírico de Erasmo de Roterdã, publicado em 1511."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O título latino de Elogio da Loucura, de Erasmo de Roterdã, faz um trocadilho com o sobrenome de que amigo inglês do autor?",
    "resposta": "Thomas More",
    "fonte": [
      "https://en.wikipedia.org/wiki/In_Praise_of_Folly"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/In_Praise_of_Folly",
        "situacao": "ok",
        "texto": "In Praise of Folly, also translated as The Praise of Folly (Latin: Stultitiae Laus or Moriae Encomium), is an oration written in Latin in 1509 by Desiderius Erasmus of Rotterdam and first printed in June 1511. Inspired by previous works of the Italian humanist Faustino Perisauli's De Triumpho Stultitiae, it is a spiralling satirical attack on all aspects of human life, not ignoring superstitions a\n[…]\nErasmus revised and extended his work, which, he claims, was originally written in the span of a week while sojourning with Sir Thomas More at More's house in Bucklersbury in the City of London. The title Moriae Encomium had a punning second meaning as In Praise of More (in Greek μωρία translates into \"folly\"). In Praise of Folly is considered one of the most notable works of the Renaissance and played an important role in the beginnings of the Protestant Reformation.\n[…]\nThe Praise of Folly begins with a satirical learned encomium, in which Folly praises herself, in the manner of the Greek satirist Lucian (2nd century AD), whose work Erasmus and Sir Thomas More had recently translated into Latin; Folly swipes at every part of society, from lovers to princes to inventors to writers to dice-players to professional liars to hermits.\n[…]\nErasmus was a good friend of More, with whom he shared a taste for dry humour and other intellectual pursuits. The title Moriae Encomium could also be read as meaning \"In praise of More\". The double or triple meanings go on throughout the text.\n[…]\nSir Thomas Chaloner (1548) The praise of folie. Moriæ encomium a booke made in latine by that great clerke Erasmus Roterodame. Englisshed by sir Thomas Chaloner knight.\n[…]\nW. Kennet (1735) Moriae Encomium, or, the Praise of Folly. Made English from the Latin of Erasmus. (May be same as Wilford.)\n[…]\nIn Praise of Folly, with portrait, life of Erasmus, and his Epistle to Sir Thomas More. Translator not stated. 1922."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Elogio_da_Loucura",
        "situacao": "ok",
        "texto": "O Elogio da Loucura, (em grego Morias Encomium, latim Laus stultitiae) é um ensaio escrito em 1509 por Erasmo de Roterdão e publicado em 1511. O Elogio da Loucura é considerado um dos mais influentes livros da civilização ocidental e um dos catalisadores da Reforma Protestante.\n[…]\nLoucura não no sentido psiquiátrico das doenças mentais como esquizofrenia ou psicose maníaco-depressiva, mas – fazendo uma brincadeira com o nome do amigo Thomas Morus, a quem dedica a obra – no sentido da palavra grega Moria (μωρἰα), que, segundo o próprio autor, corresponde ao termo latino Stultitia, ou seja, estultícia, “atributo, característica do que é ou se apresenta de modo estúpido; tolice, parvoíce, estupidez”, segundo o dicionário Houaiss.\n[…]\nQuase no final da obra, num exercício de “exegese bíblica” – algo antes do Renascimento impensável, já que então se acreditava que o livro sagrado deveria ser tomado ao pé da letra, sem interpretações – Erasmo (pela boca da deusa Loucura) procura respaldar seu “elogio da loucura” em textos bíblicos. Por exemplo, “a loucura de Deus é mais sábia que a sabedoria humana” (1 Coríntios 1:25).\n[…]\n(E aqui Erasmo é tão convincente que a gente acaba na dúvida sobre se ainda está satirizando ou acabou se convencendo da tese da superioridade da loucura.) E Erasmo encerra seu Elogio com uma digressão brilhante sobre a dicotomia entre a visão materialista (“os que se ocupam somente com o Corpo”) e a visão espiritual (“os que se entregam inteiramente à pia cultivação da alma”) da vida humana.\n[…]\nErasmo de Roterdã\n[…]\n«Elogio da loucura, no Domínio Público» (PDF)\n[…]\n«O CONCEITO DE LOUCURA NA OBRA \"ELOGIO DA LOUCURA\" DE ERASMO DE ROTTERDAM» (PDF)\n[…]\nELOGIO DA LOUCURA, DE ERASMO DE ROTERDÃ: SÁTIRA & SENSO DE HUMOR",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Ensaios (Montaigne)",
      "descricao": "Coletânea de textos de Michel de Montaigne publicada a partir de 1580, que deu nome ao gênero ensaio."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Montaigne chamou seus textos de Ensaios. Na época, a palavra francesa essais queria dizer o quê?",
    "resposta": "Tentativas",
    "distratores": [
      "Conversas",
      "Lembranças",
      "Confissões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Essays_(Montaigne)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Essays_(Montaigne)",
        "situacao": "ok",
        "texto": "The Essays (French: Essais, pronounced [esɛ]) of Michel de Montaigne are contained in three books and 107 chapters of varying length. They were originally written in Middle French and published in the Kingdom of France. Montaigne's stated design in writing, publishing and revising the Essays over the period from approximately 1570 to 1592 was to record \"some traits of my character and of my humour\n[…]\nMontaigne heavily edited the Essays at various points in his life. Sometimes he would insert just one word, while at other times he would insert whole passages. Many editions mark this with letters as follows:\n[…]\nA copy of the fifth edition of the Essais with Montaigne's own \"C\" additions in his own hand exists, preserved at the Municipal Library of Bordeaux (known to editors as the Bordeaux Copy). This edition gives modern editors a text dramatically indicative of Montaigne's final intentions (as opposed to the multitude of Renaissance works for which no autograph exists). Analyzing the differences and additions between editions show how Montaigne's thoughts evolved over time.\n[…]\nThe remarkable modernity of thought apparent in Montaigne's essays, coupled with their sustained popularity, made them arguably the most prominent work in French philosophy until the Enlightenment. Their influence over French education and culture is still strong. The official portrait of former French president François Mitterrand pictured him facing the camera, holding an open copy of the Essays in his hands.\n[…]\nScottish journalist and politician J. M. Robertson argued that Montaigne's essays had a profound influence on the plays of William Shakespeare, citing their similarities in language, themes and structures.\n[…]\nEssays of Montaigne in 10 volumes: at Online Library of Liberty Archived 2022-11-29 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ensaios",
        "situacao": "ok",
        "texto": "Ensaios (Essais em francês) é uma coletânea de obras escritas pelo francês Michel de Montaigne (1533-1592), publicada pela primeira vez em 1580. Foi pioneira no gênero literário ensaio.\n[…]\nPara muitos, Montaigne teria começado a escrever Os Ensaios, como um pretenso estoico, o francês estava endurecido após tantas guerras e perdas, para ele a filosofia não era apenas fazer livros e artigos, mas sim um “modo de vida”.\n[…]\nPor isso, uma das principais características da obra são os seus feitos diários - coisas do dia-a-dia - e por conta deste aspecto, autores modernos apelidaram os Ensaios como uma “auto escrita”: “um exercício ético para “fortalecer e esclarecer” o próprio julgamento do autor, tanto quanto o de nós leitores”. É certo dizer que podemos conhecer Michel de Montaigne através de sua obra.\n[…]\nMONTAIGNE, Michel de. Ensaios:\n[…]\nA obra de Montaigne foi muito admirada e lida em sua época, sendo elogiados por muitos dos seus contemporâneos, mas não se limitando apenas na origem autor. Nomes famosos sofreram influências vinda dos Ensaios. Francis Bacon, Voltaire e Friedrich Nietzsche são alguns desses grandes nomes que admiravam Montaigne e sua obra.\n[…]\nPierre Charron vai se destacar na difusão do ceticismo e pensamento de Montaigne, sendo apontado como um importante discípulo. Sua obra De la Sagesse (1601) rende uma acusação de plágio, apontando-o como reprodutor dos pensamentos de seu mentor. Charron torna as ideias contidas nos Ensaios mais acessíveis ao público, estabelecendo uma ligação entre o ceticismo de Montaigne e as controvérsias religiosas de sua época.\n[…]\nEdição: MONTAIGNE, Michel de (2002). Os Ensaios livros I, II e III. São Paulo: Martins Fontes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Confúcio",
      "descricao": "Pensador chinês (551–479 a.C.) cujos ensinamentos deram origem ao confucionismo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Confúcio é a forma latinizada de um título chinês dado ao pensador. O que esse título significa?",
    "resposta": "Mestre Kong",
    "fonte": [
      "https://en.wikipedia.org/wiki/Confucius"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Confucius",
        "situacao": "ok",
        "texto": "Confucius (c. 551 – c. 479 BCE), born Kong Qiu, was a Chinese philosopher of the Spring and Autumn period who is traditionally considered the paragon of Chinese sages. Much of the shared cultural heritage of the Sinosphere originates in the philosophy and teachings of Confucius. His philosophical teachings, called Confucianism, emphasized personal and governmental morality, harmonious social relat\n[…]\nThe name \"Confucius\" is a Latinized form of the Mandarin Chinese Kǒngfūzǐ (孔夫子)—roughly meaning \"Great Master Kong\" or \"Wise Teacher Kong\"—that was coined in the late 16th century by early Jesuit missionaries to China. The more common name in Mandarin Chinese today is Kǒngzǐ (孔子), simply meaning \"Master Kong\". Confucius's family name was Kong (孔, OC:*‍kʰˤoŋʔ) and his given name was Qiu (丘, OC:*‍[k]ʷʰə).\n[…]\nIn the 14th century, a Kong descendant went to Korea, where an estimated 34,000 descendants of Confucius live today. One of the main lineages fled from the Kong ancestral home in Qufu during the Chinese Civil War in the 1940s and eventually settled in Taiwan. There are also branches of the Kong family who have converted to Islam after marrying Muslim women, in Dachuan in Gansu province in the 1800s, and in 1715 in Xuanwei in Yunnan province.\n[…]\nDuring the Cultural Revolution, criticism of Confucius increased, coming to a head when Red Guard soldiers removed the body of Kong Jingyi, a 76th generation Duke Yansheng, from his grave at the Cemetery of Confucius. His body was then hung naked from a tree.\n[…]\nAnti-Confucian sentiment continued to increase in 1973, when Mao Zedong started a Criticize Lin, Criticize Confucius (simplified Chinese: 批林批孔运动; traditional Chinese: 批林批孔運動; pinyin: pī lín pī kǒng yùndòng) campaign, branding Confucius with the name \"Kong Lao'er\" 孔老二, a pun on a Mandarin word for penis. It persisted until 1976 as the Cultural Revolution subsided."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Conf%C3%BAcio",
        "situacao": "ok",
        "texto": "Confúcio (孔子, Kǒngzǐ; tradicionalmente c. 551–479 a.C.) foi um filósofo, educador e funcionário do Estado de Lu, na China do Período das Primaveras e Outonos. Em meio às disputas entre governantes e famílias nobres, ensinou que a autoridade deveria se apoiar na virtude e no exemplo, e que os ritos só tinham valor quando praticados com sinceridade.\n[…]\nO nome pelo qual é conhecido em português deriva da latinização de Kong Fuzi (孔夫子, \"Mestre Kong\"), difundida no Ocidente a partir do século XVI. Na nomenclatura tradicional, seu sobrenome ancestral era Zi, o nome do clã era Kong, seu nome pessoal era Qiu e o nome de cortesia era Zhongni. O título Kong Fuzi também era usado para se referir a ele, e sua forma abreviada em chinês é Kongzi (孔子).\n[…]\nA forma é a de diálogos e máximas curtas, sem uma sequência narrativa fixa, com exclamações e mudanças de tom. O título aparece pela primeira vez no capítulo Fangji do Livro dos Ritos, tradicionalmente ligado a Zisi. A reunião das falas também expressava a estima dos alunos pelo mestre. Manuscritos descobertos por arqueólogos ampliaram o conhecimento dos primeiros confucionistas, embora não tenham substituído o lugar dos Analectos na tradição.\n[…]\nNo Brasil, a recepção de Confúcio assumiu formas diferentes da leitura dos clássicos feita no Leste Asiático. O historiador André Bueno identifica imagens religiosas, políticas e pedagógicas do pensador no imaginário brasileiro e observa que o estudo acadêmico recente vem revendo a tendência de tratá-lo sobretudo como mestre religioso. Uma via de acesso direto aos textos é a tradução dos Analectos do chinês arcaico por Giorgio Sinedino, publicada pela Editora Unesp em 2012 e reimpressa em 2025.\n[…]\nAnalectos de Confúcio, coleção de falas e episódios atribuídos ao mestre\n[…]\nMansão da família Kong, residência dos descendentes de Confúcio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Maiêutica",
      "descricao": "Método socrático de levar o interlocutor a descobrir verdades por meio de perguntas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Sócrates comparava seu método de perguntas, a maiêutica, ao trabalho de que profissão, que era a da mãe dele?",
    "resposta": "Parteira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maiêutica",
      "https://en.wikipedia.org/wiki/Socratic_method"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maiêutica",
        "situacao": "ok",
        "texto": "A maiêutica socrática tem como significado “dar à luz”, “dar parto”, “parir” o conhecimento (em grego, μαιευτικη — maieutike — significa “arte de partejar”). É um método ou técnica que pressupõe que \"a verdade está latente em todo ser humano, podendo aflorar aos poucos na medida em que se responde a uma série de perguntas simples, quase ingênuas, porém perspicazes\".\n[…]\nSócrates conduzia este “parto” em duas etapas:\n[…]\nOu seja: a maiêutica primeiro demole, depois ajuda a reconstruir conceitos, transitando do básico ao elaborado, “parindo” noções cada vez mais complexas.\n[…]\nA autorreflexão, expressa no nosce te ipsum — \"conhece a ti mesmo\" — põe o Homem na procura das verdades universais que são o caminho para a prática do bem e da virtude. A maiêutica, criada por Sócrates no século IV a.C., tem seu nome inspirado na profissão de sua mãe, Phaenarete, que era parteira. Sócrates esclarece isso no famoso diálogo Teeteto.\n[…]\nVale ressaltar que a maiêutica é, até nossos dias, um importante componente pedagógico, ao estimular o estudante a construir o seu próprio conhecimento por meio do uso e direcionamento de perguntas e respostas formuladas pelo mestre. Há certa divergência historiográfica sobre o uso de tal método por Sócrates. Historiadores afirmam que a denominação e associação de tal método ao filósofo decorre da narração, não necessariamente fiel, da vida de Sócrates por Platão.\n[…]\nMétodo socrático\n[…]\nSócrates - Raízes Gnosiológicas do Problema do Ensino"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Socratic_method",
        "situacao": "ok",
        "texto": "The Socratic method is a form of argumentative dialogue in which an individual probes a conversation partner on a topic, using questions and clarifications, until the partner is pressed to come to a conclusion on their own, or else their reasoning breaks down and they are forced to admit ignorance. The method is also known as Socratic debate, the maieutic method, or the Socratic dialectic, and som\n[…]\nIn Plato's dialogue Theaetetus, Socrates describes his method as a form of \"midwifery\" (maieutikós; source of the English adjective maieutic) because it is employed to help his interlocutors develop their understanding and lead it out of them in a way analogous to a child developing in the womb until it is ready for birth.\n[…]\nQuestions can be created individually or in small groups. All participants are given the opportunity to take part in the discussion. Socratic circles specify three types of questions to prepare:\n[…]\nThe Socratic method has also recently inspired a new form of applied philosophy: Socratic dialogue, also called philosophical counseling. In Europe Gerd B. Achenbach is probably the best known practitioner, and Michel Weber has also proposed another variant of the practice.\n[…]\nHarkness table – a teaching method based on the Socratic method\n[…]\nThe Paper Chase – 1973 film based on a 1971 novel of the same name, dramatizing the use of the Socratic method in law school classes\n[…]\nSocrates Cafe\n[…]\nSocratic questioning\n[…]\nSocratic irony\n[…]\nPhilosopher.org – 'Tips on Starting your own Socrates Cafe', Christopher Phillips, Cecilia Phillips\n[…]\nSocraticmethod.net Socratic Method Research Portal\n[…]\nHow to Use the Socratic Method\n[…]\nUChicago.edu – 'The Socratic Method' by Elizabeth Garrett (1998)\n[…]\nProject Gutenberg: Works by Xenophon (includes some Socratic works)\n[…]\nProject Gutenberg: Works by Cicero (includes some works in the \"Socratic dialogue\" format)\n[…]\nThe Socratic Club\n[…]\nSocratic and Scientific Method"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Ubuntu (filosofia)",
      "descricao": "Conceito filosófico do sul da África que enfatiza a humanidade compartilhada e os laços comunitários."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra ubuntu, de línguas bantas do sul da África, virou conceito filosófico. Que frase costuma resumir seu significado?",
    "resposta": "Eu sou porque nós somos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ubuntu_philosophy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ubuntu_philosophy",
        "situacao": "ok",
        "texto": "Ubuntu (Zulu pronunciation: [ùɓúntʼù]; meaning 'humanity' in some Bantu languages, such as Zulu and Xhosa) describes a set of closely related Bantu African-origin value systems that emphasize the interconnectedness of individuals with their surrounding societal and physical worlds. \"Ubuntu\" is sometimes translated as \"I am because we are\".\n[…]\nRwanda (ubuntu);\n[…]\nLouw, Dirk J. (1998) \"Ubuntu: An African Assessment of the Religious Other\". Twentieth World Congress of Philosophy.\n[…]\nForster, Dion. (2006)Identity in relationship: The ethics of ubuntu as an answer to the impasse of individual consciousness Archived 3 January 2024 at the Wayback Machine. In du Toit, CW (ed.), The impact of knowledge systems on human development in Africa. Pretoria: UNISA. pp. 245–289.\n[…]\nGade, C. B. N. (2011)\"The historical development of the written discourses on ubuntu\". South African Journal of Philosophy, 30(3), 303–329.\n[…]\nKamwangamalu, Nkonko M. (2014) Ubuntu in South Africa: A sociolinguistic perspective to a pan-African concept. In Asante, Miike & Yin (eds), The global intercultural communication reader (2nd edn, pp. 226–236). New York: Routledge.\n[…]\nGade, C. B. N.(2017) A Discourse on African Philosophy: A New Perspective on Ubuntu and Transitional Justice in South Africa. New York: Lexington Books.\n[…]\nMugumbate, Jacob Rugare & Chereni, Admire (2020). Now, the Theory of Ubuntu Has Its Space in Social Work. African Journal of Social Work, 10(1), 5–17.\n[…]\nChasi, Colin.(2021) Ubuntu for Warriors. Trenton, NJ: Africa World Press.\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Hunhu/Ubuntu in the Traditional Thought of Southern Africa\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658.\n[…]\nUbuntu Planet\n[…]\nSonal Panse, Ubuntu – African Philosophy (buzzle.com)\n[…]\nA. Onomen Asikele, Ubuntu Republics of Africa Archived 14 August 2022 at the Wayback Machine (2011)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ubuntu_%28filosofia%29",
        "situacao": "ok",
        "texto": "Ubuntu é uma noção existente nas línguas Zulu e xhosa — línguas Bantu do grupo ngúni, faladas pelos povos da África Subsaariana.\n[…]\nNa tradição sul-africana, a reconciliação se exprime através do ubuntu ou humanismo, que inclui valores como a compaixão e a comunhão - valores que orientaram a Comissão Verdade e Reconciliação e serviram como base para a formulação dos objetivos nacionais de reconstrução e reconciliação. J.Y.\n[…]\nPortanto o conceito exprime a crença na comunhão que conecta toda a humanidade: \"sou o que sou graças ao que somos todos nós\".\n[…]\nLouw (1998) sugere que o conceito do Ubuntu define um indivíduo em termos de seus relacionamentos com os outros, e enfatiza a importância como um conceito religioso, assentado na máxima Zulu umuntu ngumuntu ngabantu (uma pessoa é uma pessoa através de outras pessoas), que aparentemente parece não ter conotação religiosa na sociedade ocidental. No contexto africano, isso sugere que o indivíduo se caracteriza pela humanidade com seus semelhantes e através da veneração aos seus ancestrais.\n[…]\nUbuntu é visto como um dos princípios fundamentais da nova república da África do Sul e está intimamente ligado à ideia da Renascença Africana. No Zimbabwe, Ubuntu tem sido usado como forma de resistência à opressão existente no país. Na esfera política, o conceito do Ubuntu é utilizado para enfatizar a necessidade da união e do consenso nas tomadas de decisão, assumindo-se uma ética humanista.\n[…]\n(em inglês) Ubuntu and the Law in South Africa por Y. Mokgoro\n[…]\nLouw, Dirk J. 1998. \"Ubuntu: An African Assessment of the Religious Other\". Vigésimo Congresso Mundial de Filosofia. (inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Voltaire",
      "descricao": "Escritor e filósofo iluminista francês (1694–1778), autor de Cândido."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Voltaire era um pseudônimo. Qual era o nome de batismo desse filósofo iluminista francês?",
    "resposta": "François-Marie Arouet",
    "fonte": [
      "https://en.wikipedia.org/wiki/Voltaire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Voltaire",
        "situacao": "ok",
        "texto": "François-Marie Arouet (French: [fʁɑ̃swa maʁi aʁwɛ]; 21 November 1694 – 30 May 1778), known by his pen name Voltaire (, US also ; French: [vɔltɛːʁ]), was a French Enlightenment writer, philosopher (philosophe), satirist, and historian. Famous for his wit and his criticism of Christianity (especially of the Catholic Church) and of slavery, Voltaire was an advocate of freedom of speech, freedom of re\n[…]\nFrançois-Marie Arouet was born in Paris, the youngest of the five children of François Arouet, a lawyer who was a minor treasury official, and his wife, Marie Marguerite Daumard, whose family was on the lowest rank of the French nobility. Some speculation surrounds Voltaire's date of birth, because he claimed he was born on 20 February 1694 as the illegitimate son of a nobleman, Guérin de Rochebrune or Roquebrune. Two of his older brothers—Armand-François and Robert—died in infancy.\n[…]\nNicknamed \"Zozo\" by his family, Voltaire was baptized on 22 November 1694, with François de Castagnère, abbé de Châteauneuf, and Marie Daumard, the wife of his mother's cousin, standing as godparents. He was educated by the Jesuits at the Collège Louis-le-Grand (1704–1711), where he was taught Latin, theology, and rhetoric. Later in life he became fluent in Italian, Spanish, and English.\n[…]\n\"Arouet\" was not a noble name fit for his growing reputation, especially given that name's resonance with à rouer (\"to be beaten up\") and roué (\"a profligate person\").\n[…]\nOn a slow journey back to France, Voltaire stayed at Leipzig and Gotha for a month each, and Kassel for two weeks, arriving at Frankfurt on 31 May. The following morning, he was detained at an inn by Frederick's agents, who held him in the city for over three weeks while Voltaire and Frederick argued by letter over the return of a satirical book of poetry Frederick had lent to Voltaire. Marie Louise joined him on 9 June.\n[…]\nThe Société Voltaire"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voltaire",
        "situacao": "ok",
        "texto": "Voltaire, pseudônimo de François-Marie Arouet, nasceu em Paris em 21 de novembro de 1694 e morreu na mesma cidade em 30 de maio de 1778. Foi um escritor e filósofo francês de ideias liberais. Alcançou fama internacional ainda em vida e tornou-se uma figura central do Iluminismo. Interessado em artes e ciências, amigo e colaborador dos autores da Encyclopédie, escreveu em gêneros muito diferentes e\n[…]\nFrançois-Marie Arouet nasceu oficialmente em Paris em 21 de novembro de 1694 e foi batizado no dia seguinte na igreja de Saint-André-des-Arts. Era o segundo filho de François Arouet, tabelião do Grand Châtelet desde 1675, e de Marie-Marguerite d'Aumart, filha de um escrivão criminal do Parlamento de Paris. Os dois haviam se casado em 7 de junho de 1683 na igreja de Saint-Germain-l'Auxerrois. Tiveram cinco filhos, três dos quais chegaram à idade adulta:\n[…]\nMarie Arouet (1686–1726), a única pessoa da família por quem Voltaire demonstrou afeição. Casou-se com Pierre François Mignot, revisor da Câmara de Contas. Seus filhos foram o abade Vincent Mignot, que cuidou do corpo de Voltaire após sua morte, e Marie-Louise Mignot, futura Madame Denis, que viveu por algum tempo com o escritor.\n[…]\nFrançois-Marie Arouet (1694–1778), chamado Voltaire.\n[…]\nSob o estímulo de Émilie, ele se interessou cada vez mais pelas ciências. \"Aprendi com ela a pensar\", escreveu em 1735. Ela também o aconselhava nas relações sociais e ajudava a conter seus impulsos. Viveram juntos por dez anos felizes, embora a paixão depois tenha diminuído. Houve infidelidades dos dois lados: no fim de 1745, Voltaire iniciou em segredo um relacionamento com a sobrinha Marie-Louise Mignot, Madame Denis, enquanto Émilie se apaixonou por Jean-François de Saint-Lambert em 1748.\n[…]\n2006: Jeanne Poisson, marquise de Pompadour, de Robin Davis, com Jean-François Dérec.\n[…]\nA cédula francesa de 10 francos Voltaire começou a circular em janeiro de 1964.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Sócrates",
      "descricao": "Filósofo grego de Atenas (c. 470–399 a.C.), mestre de Platão."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Condenado em Atenas por corromper a juventude, Sócrates morreu em 399 antes de Cristo ao beber que veneno?",
    "resposta": "Cicuta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Socrates",
      "https://en.wikipedia.org/wiki/Trial_of_Socrates"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Socrates",
        "situacao": "ok",
        "texto": "Socrates (; Ancient Greek: Σωκράτης, romanized: Sōkrátēs; c. 470 – 399 BC) was an ancient Greek philosopher from Classical Athens, perhaps the first Western moral philosopher, and a major inspiration on his student Plato, who largely founded the tradition of Western philosophy. An enigmatic figure, Socrates authored no texts and is known mainly through the posthumous accounts of classical writers,\n[…]\nThese accounts are written as dialogues, in which Socrates and his interlocutors examine a subject in the style of question and answer; they gave rise to the Socratic dialogue literary genre. Contradictory accounts of Socrates make a reconstruction of his philosophy nearly impossible, a situation known as the Socratic problem. Socrates was a polarizing figure in Athenian society. In 399 BC, he was accused of impiety and corrupting the youth.\n[…]\nSocrates died in Athens in 399 BC after a trial for impiety (asebeia) and the corruption of the young. He spent his last day in prison among friends and followers who offered him a route to escape, which he refused. He died the next morning, in accordance with his sentence, after drinking hemlock. According to the Phaedo, his last words were: \"Crito, we owe a rooster to Asclepius. Don't forget to pay the debt.\"\n[…]\nIn 399 BC, Socrates was formally accused of corrupting the minds of the youth of Athens, and for asebeia (impiety), i.e., worshipping false gods and failing to worship the gods of Athens. At the trial, Socrates defended himself unsuccessfully.\n[…]\nDe genio Socratis\n[…]\nList of cultural depictions of Socrates\n[…]\nTaylor, C. C. W. (1998). Socrates. Oxford University Press. ISBN 978-0-19-287601-0.\n[…]\nTaylor, C. C. W. (2019). Socrates: A Very Short Introduction. Oxford University Press. ISBN 978-0-19-883598-1.\n[…]\nVlastos, Gregory (1994). Socratic Studies. Cambridge University Press. ISBN 978-0-521-44735-5.\n[…]\nSocrates at the Indiana Philosophy Ontology Project"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Trial_of_Socrates",
        "situacao": "ok",
        "texto": "The Trial of Socrates (399 BC) was held to determine the philosopher's guilt of two charges against the city of Athens: asebeia (impiety) and corruption of the youth. The accusers cited two impious acts: \"failing to acknowledge the gods of the city\" and \"introducing new deities\".\n[…]\nIn the Phaedo the poison given to Socrates is not identified by name, but is called τὸ φάρμακον (to pharmakon), \"the drug\". Because of this and the differences in symptoms between various species called κώνειον (kōneion, hemlock in Greek) or cicūta (hemlock in Latin) the identification of poison hemlock as the plant used in the execution has been the subject of debate.\n[…]\nIn 1679 the Swiss physician Johann Jakob Wepfer published Cicutae aquaticae historia et noxae. In it he describes the symptoms of eight children who had eaten the roots of water hemlock. He expressed doubts that hemlock could have been the \"cold\" poison used in the execution of Socrates as the symptoms were of a \"hot\" poison with seizures, arched backs, and foaming at the mouth. Wepfer was unaware that the Cicuta he was studying was not the same plant used in Athenian executions.\n[…]\nIn the time of the trial of Socrates, the year 399 BC, the city-state of Athens recently had endured the trials and tribulations of Spartan hegemony and the 13-month régime of the Thirty Tyrants, which had been imposed consequently to the Athenian defeat in the Peloponnesian War (431–404 BC).\n[…]\nWaterfield, Robin (2009). Why Socrates Died: Dispelling the Myths. New York: Norton.\n[…]\nThe University of Missouri–Kansas City (UMKC) School of Law, The Trial of Socrates (alternate link)\n[…]\nSocrates – features photographs of the philosopher's haunts\n[…]\nApology of Socrates - Read Online at Tufts.edu\n[…]\nWelcome to Socrates On Trial · What if Socrates Returned?"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%B3crates",
        "situacao": "ok",
        "texto": "Sócrates (em grego:  Σωκράτης, AFI: [sɔːkrátɛːs], transl. Sōkrátēs; Alópece, c. 470 a.C. – Atenas, 399 a.C.) foi um filósofo ateniense do período clássico da Grécia Antiga. Creditado como um dos fundadores da filosofia ocidental, é até hoje uma figura enigmática, conhecida principalmente através dos relatos em obras de escritores que viveram mais tarde, especialmente dois de seus alunos, Platão e \n[…]\nO julgamento e a execução de Sócrates são eventos centrais da obra de Platão (Apologia e Críton). Sócrates admitiu que poderia ter evitado sua condenação a morte, bebendo antes o veneno chamado cicuta, se tivesse desistido da vida justa. Mesmo depois de sua condenação, ele poderia ter evitado sua morte se tivesse escapado com a ajuda de amigos. Platão considerou que Sócrates foi condenado por questões evidentemente políticas.\n[…]\n\"[…] Sócrates é culpado do crime de não reconhecer os deuses reconhecidos pelo Estado e de introduzir divindades novas; ele é ainda culpado de corromper a juventude. Castigo pedido: a morte\"\n[…]\nChegado o momento da execução, pouco antes de beber o veneno, Sócrates, de forma irônica e sarcástica (como de costume), proferiu suas últimas palavras:\n[…]\nApós essas palavras, Sócrates bebeu a cicuta (Conium maculatum) e, diante dos amigos, aos 70 anos, morreu por envenenamento.\n[…]\nNo Fédon, Sócrates dá razões para crer na imortalidade. Quando Sócrates foi condenado à morte, comentou, alegremente, que, no outro mundo, poderia fazer perguntas eternamente sem ser condenado a morrer, porque era imortal.\n[…]\nSe algo pode ser dito sobre as ideias de Sócrates, é que ele foi moralmente, intelectualmente e filosoficamente diferente de seus contemporâneos atenienses. Quando estava sendo julgado por heresia e por corromper a juventude, usou seu método de elenchos para demonstrar as crenças errôneas de seus julgadores.\n[…]\nMétodo socrático\n[…]\nDiálogo socrático\n[…]\nSocrates - Catholic Encyclopedia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "René Descartes",
      "descricao": "Filósofo e matemático francês (1596–1650), autor de Discurso do Método."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Descartes morreu em Estocolmo, em 1650. Que rainha o havia convidado a ir à Suécia para lhe dar aulas de filosofia?",
    "resposta": "Cristina da Suécia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes",
      "https://en.wikipedia.org/wiki/Christina,_Queen_of_Sweden"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes",
        "situacao": "ok",
        "texto": "René Descartes ( day-KART, also  DAY-kart; French: [ʁəne dekaʁt] ; 31 March 1596 – 11 February 1650) was a French philosopher, mathematician, and scientist whose work was foundational to mathematics and modern philosophy. He connected the previously separate fields of geometry and algebra into analytic geometry and introduced a systematic method of inquiry that became influential in early modern p\n[…]\nc. 1630. De solidorum elementis. Concerns the classification of Platonic solids and three-dimensional figurate numbers. Said by some scholars to prefigure Euler's polyhedral formula. Unpublished; discovered in Descartes's estate in Stockholm in 1650, soaked for three days in the Seine in a shipwreck while being shipped back to Paris, copied in 1676 by Leibniz, and lost. Leibniz's copy, also lost, was rediscovered circa 1860 in Hannover.\n[…]\n1648. Responsiones Renati Des Cartes... (Conversation with Burman). Notes on a Q&A session between Descartes and Frans Burman on 16 April 1648. Rediscovered in 1895 and published for the first time in 1896. An annotated bilingual edition (Latin with French translation), edited by Jean-Marie Beyssade, was published in 1981 (Paris: PUF).\n[…]\nWorks by René Descartes in eBook form at Standard Ebooks\n[…]\nWorks by René Descartes at Project Gutenberg\n[…]\nWorks by or about René Descartes at the Internet Archive\n[…]\nWorks by René Descartes at LibriVox (public domain audiobooks)\n[…]\nThe Correspondence of René Descartes in Early Modern Letters Online\n[…]\nHerbermann, Charles, ed. (1913). \"René Descartes\" . Catholic Encyclopedia. New York: Robert Appleton Company.\n[…]\nRené Descartes (1596–1650) Published in Encyclopedia of Rhetoric and Composition (1996)\n[…]\nRené Descartes at the Mathematics Genealogy Project\n[…]\nFree scores by René Descartes at the International Music Score Library Project (IMSLP)\n[…]\nVideo: Bryan Magee interviewing Bernard Williams about Descartes on Men of Ideas: Section 1, Section 2"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Christina,_Queen_of_Sweden",
        "situacao": "ok",
        "texto": "Christina (Swedish: Kristina; 18 December [O.S. 8 December] 1626 – 19 April 1689), a member of the House of Vasa, was Queen of Sweden from 1632 until her abdication in 1654. Her conversion to Catholicism and refusal to marry led her to relinquish her throne and move to Rome.\n[…]\nIn 1646, Christina's good friend, the French ambassador Pierre Chanut, met and corresponded with the philosopher René Descartes, asking him for a copy of his Meditations. Upon showing the queen some of the letters, Christina became interested in beginning a correspondence with Descartes. She invited him to Sweden, but Descartes was reluctant until she asked him to organize a scientific academy. Christina sent a ship to pick up the philosopher and 2,000 books. Descartes arrived on 4 October 1649.\n[…]\nSoon, it became clear they did not like each other; she disapproved of his mechanical view, and he did not appreciate her interest in Ancient Greek. On 15 January Descartes wrote he had seen Christina only four or five times. On 1 February 1650, Descartes caught a cold. He died ten days later, early in the morning of 11 February 1650, and according to Chanut, the cause of his death was pneumonia.\n[…]\nJacopo Foroni's 1849 opera Cristina, regina di Svezia is based on the events surrounding her abdication. Operas based on her life include Alessandro Nini's Cristina di Svezia (1840), Giuseppe Lillo's Cristina di Svezia (1841), and Sigismond Thalberg's Cristina di Svezia (1855)\n[…]\nTorrione, Margarita  (2011), Alejandro, genio ardiente. El manuscrito de Cristina de Suecia sobre la vida y hechos de Alejandro Magno, Madrid, Editorial Antonio Machado (212 p., color ill.) ISBN 978-84-7774-257-9."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ren%C3%A9_Descartes",
        "situacao": "ok",
        "texto": "René Descartes em francês, [ʁəne dekaʁt] ; La Haye en Touraine, 31 de março de 1596 – Estocolmo, 11 de fevereiro de 1650) foi um filósofo, matemático e cientista francês. Reuniu a geometria e a álgebra no desenvolvimento da geometria analítica e propôs um método sistemático de investigação que teve ampla repercussão na filosofia moderna. Seus trabalhos também trataram de epistemologia, metafísica,\n[…]\nEm 1649, a rainha Cristina da Suécia convidou Descartes para organizar uma academia científica em sua corte e conversar com ela sobre suas ideias a respeito do amor. Ele aceitou e viajou para a Suécia em 1649. O interesse da rainha também o incentivou a publicar As Paixões da Alma.\n[…]\nDescartes concordou em ensinar a rainha três vezes por semana às cinco da manhã, no castelo frio. Em carta de 15 de janeiro de 1650, relatou ter visto a rainha quatro ou cinco vezes desde 18 de dezembro. Em outubro de 1649, escrevera a Isabel do Palatinado sobre o interesse de Cristina pela língua grega antiga e pela literatura grega, mas ainda não sabia quanto tempo ela dedicaria à filosofia.\n[…]\nSeus restos mortais foram exumados na Suécia em 1666 e sepultados em Paris, em 1667, na igreja da abadia de Sainte-Geneviève. Luís XIV de França proibiu o ensino da filosofia natural de Descartes em 1671. Em 1793, a Convenção Nacional aprovou um decreto para transferir seus restos ao Panteão de Paris, mas o traslado não ocorreu. Em 1819, restos mortais atribuídos a Descartes, sem o crânio, foram sepultados na Abadia de Saint-Germain-des-Prés.\n[…]\nEm Estocolmo, a igreja Adolf Fredrik abriga um monumento em sua memória, realizado por Johan Tobias Sergel por iniciativa do rei Gustavo III da Suécia. A obra apresenta uma alegoria da Verdade, simbolizada por um globo que é libertado do véu da Falsidade. A homenagem recorda a passagem de Descartes pela corte sueca durante o reinado de Cristina.\n[…]\nDescartes (em inglês).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Francis Bacon",
      "descricao": "Filósofo e estadista inglês (1561–1626), defensor do método científico empírico."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Conta-se que Francis Bacon pegou a pneumonia que o matou ao testar se dava para conservar uma galinha usando o quê?",
    "resposta": "Neve",
    "fonte": [
      "https://en.wikipedia.org/wiki/Francis_Bacon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Francis_Bacon",
        "situacao": "ok",
        "texto": "Francis Bacon, 1st Viscount St Alban (; 22 January 1561 – 9 April 1626) was an English philosopher and statesman who served as Attorney General and Lord Chancellor of England under King James I. Bacon argued for the importance of natural philosophy, guided by the scientific method, and his works remained influential throughout the Scientific Revolution.\n[…]\nRossi, Paolo (1968). Francis Bacon: From Magic to Science. University of Chicago Press.\n[…]\nSerjeantson, Richard. \"Francis Bacon and the 'Interpretation of Nature' in the Late Renaissance,\" Isis (December 2014) 105#4 pp. 681–705.\n[…]\nKlein, Juergen. \"Francis Bacon\". In Zalta, Edward N. (ed.). Stanford Encyclopedia of Philosophy. ISSN 1095-5054. OCLC 429049174.\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Francis Bacon\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658.\n[…]\nWorks by Francis Bacon at Project Gutenberg\n[…]\nWorks by or about Francis Bacon at the Internet Archive\n[…]\nWorks by Francis Bacon at LibriVox (public domain audiobooks)\n[…]\n\"Archival material relating to Francis Bacon\". UK National Archives.\n[…]\nFrancis Bacon of Verulam. Realistic Philosophy and its Age by Kuno Fischer, translated from the German by John Oxenford London 1857\n[…]\nBacon by Thomas Fowler (1881) public domain at Internet Archive\n[…]\nThe Francis Bacon Society\n[…]\nSix Degrees of Francis Bacon\n[…]\nJournals of the Francis Bacon Society from 1886 to 1999\n[…]\nThe George Fabyan Collection at the Library of Congress is rich in the works of Francis Bacon\n[…]\nFrancis Bacon Research Trust\n[…]\nSir Francis Bacon's New Advancement of Learning\n[…]\nMontmorency, James E. G. (1913). \"Francis Bacon\". In Macdonell, John; Manson, Edward William Donoghue (eds.). Great Jurists of the World. London: John Murray. pp. 144–168. Retrieved 11 March 2019 – via Internet Archive.\n[…]\nLetterbook and correspondence by Sir Francis Bacon at Columbia University. Rare Book & Manuscript Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Francis_Bacon",
        "situacao": "ok",
        "texto": "Francis Bacon, 1.º Visconde St Alban ([ˈbeɪkən]; 22 de janeiro de 1561 – 9 de abril de 1626) foi um filósofo e estadista inglês que serviu como Procurador-Geral e Lord Chanceler da Inglaterra sob o rei Jaime I. Bacon defendeu a importância da filosofia natural, guiada pelo método científico, e suas obras permaneceram influentes ao longo da Revolução Científica.\n[…]\nEle o descreve viajando para High-gate pela neve com o médico do Rei quando é subitamente inspirado pela possibilidade de que \"a carne [carne] pudesse ser preservada na neve, como no sal\":\n[…]\nDepois de encher a galinha de neve, Bacon contraiu uma pneumonia fatal. Algumas pessoas, incluindo Aubrey, consideram esses dois eventos possivelmente coincidentes como relacionados e causadores de sua morte:\n[…]\nA Neve o gelou tanto, que ele adoeceu imediatamente tão gravemente, que não pôde voltar para sua hospedagem... mas foi para a casa do Conde de Arundell em High-gate, onde o colocaram em ... uma cama úmida que não era usada há cerca de um ano... o que lhe deu tanto frio que em dois ou três dias, pelo que me lembro, ele [Hobbes] me disse, ele morreu de Sufocação.\n[…]\nFrancis Bacon frequentemente se reunia com os homens do Gray's Inn para discutir política e filosofia, e para testar várias cenas teatrais que ele admitia ter escrito. A suposta ligação de Bacon com os Rosacruzes e os Maçons tem sido amplamente discutida por autores e estudiosos em muitos livros. No entanto, outros, incluindo Daphne du Maurier em sua biografia de Bacon, argumentaram que não há evidências substanciais para apoiar as alegações de envolvimento com os Rosacruzes.\n[…]\nRomantismo e Bacon\n[…]\nPeriódicos da Sociedade Francis Bacon de 1886 a 1999\n[…]\nFrancis Bacon Research Trust\n[…]\nSir Francis Bacon's New Advancement of Learning\n[…]\nLivro de cartas e correspondência de Sir Francis Bacon na Universidade de Columbia. Rare Book & Manuscript Library",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Sêneca",
      "descricao": "Filósofo estoico e dramaturgo romano (c. 4 a.C.–65 d.C.), tutor do imperador Nero."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 65 depois de Cristo, o filósofo estoico Sêneca foi obrigado a se matar por ordem de que imperador, seu antigo aluno?",
    "resposta": "Nero",
    "fonte": [
      "https://en.wikipedia.org/wiki/Seneca_the_Younger"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Seneca_the_Younger",
        "situacao": "ok",
        "texto": "Lucius Annaeus Seneca the Younger ( SEN-ik-ə; c. 4 BC – AD 65), usually known mononymously as Seneca, was a Stoic philosopher of Ancient Rome, a statesman, a dramatist, and in one work (Apocolocyntosis) a satirist from the post-Augustan age of Latin literature.\n[…]\nWhen Nero became emperor in 54, Seneca became his advisor and, together with the praetorian prefect Sextus Afranius Burrus, provided competent government for the first five years of Nero's reign. Seneca's influence over Nero declined with time, and in 65 Seneca was executed by forced suicide for alleged complicity in the Pisonian conspiracy to assassinate Nero, of which he may have been innocent, although there is still no consensus agreement.\n[…]\nIn AD 65, Seneca was caught up in the aftermath of the Pisonian conspiracy, a plot to kill Nero. Although it is unlikely that Seneca was part of the conspiracy, Nero ordered him to kill himself. Seneca followed tradition by severing several veins in order to bleed to death, and his wife Pompeia Paulina attempted to share his fate.\n[…]\nSeneca appears in Robert Bridges' verse drama Nero, the second part of which (published 1894) culminates in Seneca's death.\n[…]\nIn Simon Scarrow's 2020 novel 'The Emperor's Exile', the 19th book in the Eagles of Rome series, Seneca sends the hero of the books, Prefect Cato, to Sardinia to escort Nero's mistress into exile and to defeat the brigands who terrorise the island. Throughout the series of books we learn that the man who whispers in the Emperor's ear is the real power behind the throne but that power often proves fatal to the bearer.\n[…]\nCunnally, John, \"Nero, Seneca, and the Medallist of the Roman Emperors\", Art Bulletin, Vol. 68, No. 2 (June 1986), pp. 314–317.\n[…]\nWorks by Seneca the Younger at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A9neca",
        "situacao": "ok",
        "texto": "Lúcio Aneu Séneca (português europeu) ou Sêneca (português brasileiro) (em latim: Lucius Annaeus Seneca; Corduba, ca. 4 a.C. – Roma, 65) foi um filósofo estoico e um dos mais célebres advogados, oradores, escritores e pensadores do Império Romano. Conhecido também como Séneca (ou Sêneca), o Moço, o Filósofo, ou ainda, o Jovem, sua obra literária e filosófica, tida como modelo do pensador estoico d\n[…]\nQuando Nero, aos dezessete anos, tornou-se imperador, Séneca continuou a seu lado, porém não mais como pedagogo e sim como seu principal conselheiro (ajudado por Afrânio Burro, prefeito do Pretório). Sêneca procurou orientar para uma política justa e humanitária. Se, durante os primeiros sete anos, o governo de Nero lembra o de Augusto, o mérito exclusivo é desses dois homens que, na realidade, governaram ao lado do jovem príncipe. A índole de Nero foi mitigada, corrigida, freada.\n[…]\nSéneca sabia que a maior culpa por sua morte havia sido da própria Agripina, que pretendia imperar e que se tornara hostil por ambição, capricho e corrupção; sua raiva crescente só fez aumentar a vingança matricida de Nero, que não deu mais ouvidos às palavras severas de seus dois conselheiros. Séneca foi, então, muito criticado pela fraca oposição à tirania e à acumulação de riquezas de Nero, incompatíveis com as concepções estoicas.\n[…]\nNo ano 65, Séneca foi acusado de ter participado da conspiração de Pisão, na qual o assassinato de Nero teria sido planejado. Sem qualquer julgamento, foi obrigado a cometer o suicídio. Na presença dos seus amigos, cortou os pulsos com o ânimo sereno que defendia em sua filosofia. Tácito relatou a morte de Séneca e da mulher, que também cortou os pulsos.\n[…]\n(56) De Clementia (\"Da Clemência\" / \"Tratado sobre a Clemência\") escrito a Nero sobre a virtude da Clemência em um imperador.\n[…]\nHistória da filosofia ocidental\n[…]\nO Estoico\n[…]\nObras de Séneca na Biblioteca Nacional de Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Friedrich Nietzsche",
      "descricao": "Filósofo alemão (1844–1900), autor de Assim Falou Zaratustra."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo um relato famoso, Nietzsche sofreu um colapso mental em Turim, em 1889, depois de abraçar que animal maltratado na rua?",
    "resposta": "Um cavalo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Friedrich_Nietzsche"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Friedrich_Nietzsche",
        "situacao": "ok",
        "texto": "Friedrich Wilhelm Nietzsche (15 October 1844 – 25 August 1900) was a German philosopher and writer who started his career as a classical philologist and turned to philosophy early in his academic career. In 1869, at age 24, he was appointed Professor of Classical Philology at the University of Basel. Plagued by health problems for most of his life, he resigned from the university in 1879.\n[…]\nOn 3 January 1889, Nietzsche suffered a mental breakdown. Two policemen approached him after he caused a public disturbance in the streets of Turin. What happened remains unknown, but an often-repeated tale from shortly after his death states that Nietzsche witnessed the flogging of a horse at the other end of the Piazza Carlo Alberto, ran to the horse, threw his arms around its neck to protect it and then collapsed to the ground.\n[…]\nOn 6 January 1889 Burckhardt showed the letter he had received from Nietzsche to Overbeck. The following day, Overbeck received a similar letter and decided that Nietzsche's friends had to bring him back to Basel. Overbeck travelled to Turin and brought Nietzsche to a psychiatric clinic in Basel. By that time Nietzsche appeared fully in the grip of a serious mental illness, and his mother Franziska decided to transfer him to a clinic in Jena under the direction of Otto Binswanger.\n[…]\nNietzsche's brief autobiography\n[…]\nWicks, Robert (14 November 2007). \"Friedrich Nietzsche\". In Zalta, Edward N. (ed.). Stanford Encyclopedia of Philosophy. ISSN 1095-5054. OCLC 429049174.\n[…]\nFree scores by Friedrich Nietzsche at the International Music Score Library Project (IMSLP)\n[…]\nBurkhart Brückner, Robin Pape: Biography of Friedrich Wilhelm Nietzsche Archived 20 October 2016 at the Wayback Machine in: Biographical Archive of Psychiatry (BIAPSY). Archived 20 October 2016 at the Wayback Machine\n[…]\nNewspaper clippings about Friedrich Nietzsche in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Friedrich_Nietzsche",
        "situacao": "ok",
        "texto": "Friedrich Wilhelm Nietzsche (15 de outubro de 1844 – 25 de agosto de 1900) foi um filósofo e escritor alemão. Começou a carreira como filólogo clássico e logo se voltou para a filosofia. Em 1869, aos 24 anos, assumiu uma cátedra de filologia clássica na Universidade de Basileia. Problemas de saúde o acompanharam durante quase toda a vida e o levaram a deixar a universidade em 1879. Passou a viver \n[…]\nEm 1867 Nietzsche inscreveu-se para um ano de serviço voluntário em uma divisão de artilharia do Exército Prussiano em Naumburgo. Ele foi considerado um dos melhores cavaleiros entre seus colegas recrutas, e seus oficiais previram que ele logo alcançaria o posto de Capitão. Em março de 1868, enquanto montava em seu cavalo, Nietzsche bateu com o peito no pomo da sela e rompeu dois músculos no lado esquerdo, deixando-o exausto e incapaz de andar por meses.\n[…]\nNo início de janeiro de 1889, Nietzsche sofreu um colapso mental em Turim. As fontes divergem sobre a data e as circunstâncias do episódio. Uma história difundida posteriormente diz que Nietzsche abraçou um cavalo que estava sendo açoitado na Piazza Carlo Alberto e caiu no chão. Não há confirmação segura de que o encontro com o cavalo tenha ocorrido.\n[…]\nEm 6 de janeiro de 1889, Burckhardt mostrou a Overbeck a carta que recebera de Nietzsche. No dia seguinte, Overbeck recebeu uma carta semelhante e decidiu que os amigos de Nietzsche deveriam trazê-lo de volta à Basileia. Overbeck viajou para Turim e levou Nietzsche a uma clínica psiquiátrica em Basileia. Àquela altura, Nietzsche parecia totalmente assolado por uma grave doença mental, e sua mãe, Franziska, decidiu transferi-lo para uma clínica em Jena sob a direção de Otto Ludwig Binswanger.\n[…]\nLista das obras de Friedrich Nietzsche, bibliografia do autor\n[…]\nWicks, Robert. «Friedrich Nietzsche». In:  Zalta, Edward N. The Stanford Encyclopedia of Philosophy. Edição do outono de 2004",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Tales de Mileto",
      "descricao": "Filósofo grego pré-socrático (c. 624–546 a.C.), considerado pela tradição um dos Sete Sábios da Grécia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo Platão, Tales de Mileto caiu num poço e virou motivo de riso de uma criada. O que ele estava fazendo?",
    "resposta": "Olhando para as estrelas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thales_of_Miletus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thales_of_Miletus",
        "situacao": "ok",
        "texto": "Thales of Miletus ( THAY-leez; Ancient Greek: Θαλῆς; c. 626/623  – c. 548/545 BC) was a pre-Socratic Greek philosopher from Miletus in Ionia, Asia Minor. Thales was one of the Seven Sages, founding figures of Ancient Greece.\n[…]\nNicholas Molinari has recently argued that Thales was influenced by the archaic water deity Acheloios, who was equated with water and worshipped in Miletus during Thales's life. For evidence, he points to the fact that hydor meant specifically \"fresh water\", and also that Acheloios was seen as a shape-shifter in myth and art, so able to become anything.\n[…]\nThe first three philosophers in the Western tradition were all cosmologists from Miletus, and Thales was the very first, followed by Anaximander, who was followed in turn by Anaximenes. They have been dubbed the Milesian school. According to the Suda, Thales had been the \"teacher and kinsman\" of Anaximander.\n[…]\nAllman, George Johnston (1911). \"Thales of Miletus\" . In Chisholm, Hugh (ed.). Encyclopædia Britannica. Vol. 26 (11th ed.). Cambridge University Press. p. 721.\n[…]\nLloyd, G. E. R. Early Greek Science: Thales to Aristotle.\n[…]\nO'Grady, Patricia F. (2002). Thales of Miletus: The Beginnings of Western Science and Philosophy. Western Philosophy Series. Vol. 58. Ashgate. ISBN 978-0754605331.\n[…]\nWorks related to Thales of Miletus at Wikisource\n[…]\nThales of Miletus from The Internet Encyclopedia of Philosophy\n[…]\nThales of Miletus MacTutor History of Mathematics\n[…]\nThales' Theorem – Math Open Reference (with interactive animation)\n[…]\nThales biography by Charlene Douglass (with extensive bibliography)\n[…]\nThales of Miletus Life, Work and Testimonies by Giannis Stamatellos\n[…]\nThales Fragments Archived 24 April 2022 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tales_de_Mileto",
        "situacao": "ok",
        "texto": "Tales de Mileto (em grego: Θαλῆς ὁ Μιλήσιος; Mileto, c. 624 a.C. — Mileto, c. 546 a.C.) foi um filósofo pré-socrático, astrônomo, matemático, engenheiro e comerciante da Grécia Antiga, fundador da  Escola Jônica.[carece de fontes]? Considerado, por alguns, o primeiro filósofo ocidental, é apontado como um dos sete sábios da Grécia Antiga,[carece de fontes]?\n[…]\nSegundo o historiador grego Heródoto, Tales teria previsto um eclipse solar em 585 a.C. e, possívelmente seria o primeiro a explicar o eclipse solar, quando verificou que a Lua é iluminada por esse astro. Os astrônomos modernos calculam que esse fenômeno ocorrera em 28 de maio do ano mencionado por Heródoto. Para Aristóteles, esse evento marca o início da filosofia.\n[…]\nTales é de ascendência fenícia, filho dos nobres Esamio e Cleobulina, nascido aproximadamente na metade do século VII a.C. possívelmente em Mileto, antiga colônia grega, situada na Ásia Menor (atual Turquia).\n[…]\nQuando Tales disse que todas as coisas estão cheias de deuses, ou que o magnetismo se deve à existência de “almas” dentro de certos minerais, ele não estava invocando as palavras Deus e Alma, no sentido religioso como as conhecemos atualmente, mas sim adivinhando intuitivamente a presença de fenômenos naturais inerentes à própria matéria.\n[…]\nSegundo Kirk Raven, a evidência da cosmologia de Tales é muito fraca e imprecisa e, por isso, somente pode ser tomada como uma base para a especulação.\n[…]\nPlatão no diálogo Teeteto faz Sócrates relatar a Teodoro de Cirene o caso da rapariga da Trácia que zombou de Tales por este ter caído num poço ao observar o céu (174a).\n[…]\nPlutarco disse que Tales certa vez olhando para o céu, tropeçou e caiu, sendo repreendido por alguém como lunático: analisava o tempo para descobrir se haveria uma seca, o que o fez ganhar muito dinheiro. Outros dizem que tendo caído, desapareceu num buraco.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Thomas Hobbes",
      "descricao": "Filósofo político inglês (1588–1679), autor de Leviatã."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Hobbes dizia que ele e o medo nasceram gêmeos, pois sua mãe entrou em trabalho de parto com a notícia de que ameaça à Inglaterra?",
    "resposta": "A Invencível Armada espanhola",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Hobbes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Hobbes",
        "situacao": "ok",
        "texto": "Thomas Hobbes ( HOBZ; 5 April 1588 – 4 December 1679) was an English philosopher and political theorist, best known for his 1651 book Leviathan, in which he expounds an influential formulation of social contract theory. He is considered to be one of the founders of modern political philosophy.\n[…]\nThomas Hobbes was born on 5 April 1588 (Old Style), in Westport, now part of Malmesbury in Wiltshire, England. Having been born prematurely when his mother heard of the coming invasion of the Spanish Armada, Hobbes later reported that \"my mother gave birth to twins: myself and fear.\" Hobbes had a brother, Edmund, about two years older, as well as a sister, Anne.\n[…]\nHobbesian trap\n[…]\nMartinich, A. P. (1997). Thomas Hobbes, New York: St. Martin's Press.\n[…]\nParkin, Jon, (2007), Taming the Leviathan: The Reception of the Political and Religious Ideas of Thomas Hobbes in England 1640–1700, Cambridge: Cambridge University Press].\n[…]\nRogow, Arnold A. (1986). Thomas Hobbes: Radical in the Service of Reaction, New York and London: W. W. Norton & Company. ISBN 0-393-02288-9.\n[…]\nStomp, Gabriella (ed.) (2008). Thomas Hobbes, Aldershot: Ashgate.\n[…]\nWorks by Thomas Hobbes at Project Gutenberg\n[…]\nWorks by or about Thomas Hobbes at the Internet Archive\n[…]\nWorks by Thomas Hobbes at LibriVox (public domain audiobooks)\n[…]\nClarendon Edition of the Works of Thomas Hobbes\n[…]\n\"Thomas Hobbes\". Retrieved 29 March 2019 – via Online Library of Liberty.\n[…]\nPortraits of Thomas Hobbes at the National Portrait Gallery, London\n[…]\nThomas Hobbes at the Stanford Encyclopedia of Philosophy\n[…]\nThomas Hobbes on In Our Time at the BBC\n[…]\nMontmorency, James E. G. de (1913). \"Thomas Hobbes\". In Macdonell, John; Manson, Edward William Donoghue (eds.). Great Jurists of the World. London: John Murray. pp. 195–219. Retrieved 12 March 2019 – via Internet Archive."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Hobbes",
        "situacao": "ok",
        "texto": "Thomas Hobbes ([hɒbz] HOBZ; 5 de abril de 1588 – 4 de dezembro de 1679) foi um filósofo inglês, mais conhecido por seu livro de 1651 Leviatã, no qual ele expõe uma formulação influente da teoria do contrato social. Ele é considerado um dos fundadores da filosofia política moderna.\n[…]\nThomas Hobbes nasceu em 5 de abril de 1588 (Estilo Antigo) em Westport, atualmente parte de Malmesbury, em Wiltshire, Inglaterra. Tendo nascido prematuramente quando sua mãe ouviu sobre a iminente invasão da Armada Espanhola, Hobbes relatou mais tarde que “minha mãe deu à luz gêmeos: eu e o medo.” Hobbes tinha um irmão, Edmund, cerca de dois anos mais velho, e uma irmã, Anne.\n[…]\nNa universidade, Thomas Hobbes parece ter seguido seu próprio currículo, pois pouco se interessava pelo aprendizado escolástico. Deixando Oxford, Hobbes completou o B.A. degree por incorporação no St John's College, Cambridge, em 1608. Ele foi recomendado por Sir James Hussey, seu mestre em Magdalen, como tutor de William, filho de William Cavendish, Barão de Hardwick (que mais tarde se tornaria Conde de Devonshire), iniciando assim uma conexão vitalícia com essa família.\n[…]\nThomas Hobbes no Projeto Gutenberg\n[…]\nClarendon Edition of the Works of Thomas Hobbes\n[…]\n«Thomas Hobbes». Consultado em 29 de março de 2019  – via Online Library of Liberty\n[…]\nThomas Hobbes na Stanford Encyclopedia of Philosophy\n[…]\nUma Breve Vida de Thomas Hobbes, 1588–1679 por John Aubrey\n[…]\nPequena biografia de Thomas Hobbes, atheisme.free.fr\n[…]\nThomas Hobbes indicado por Steven Pinker no programa Great Lives da BBC Radio 4.\n[…]\nMontmorency, James E. G. de (1913). «Thomas Hobbes». In:  Macdonell, John; Manson, Edward William Donoghue. Great Jurists of the World. London: John Murray. pp. 195–219. Consultado em 12 de março de 2019  – via Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Cândido",
      "descricao": "Novela satírica de Voltaire, publicada em 1759, cujo subtítulo é ou o Otimismo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que catástrofe de 1755, numa capital europeia, abalou a crença no otimismo e marcou Voltaire ao escrever Cândido?",
    "resposta": "O terremoto de Lisboa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Candide",
      "https://en.wikipedia.org/wiki/1755_Lisbon_earthquake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Candide",
        "situacao": "ok",
        "texto": "Candide, ou l'Optimisme ( kon-DEED or  kahn-DEED, French: [kɑ̃did] ) is a French satire written by Voltaire, a philosopher of the Age of Enlightenment, first published in 1759. The novella has been widely translated, with English versions titled Candidus: or, All for the Best (1759); Candide: or, The Optimist (1762); and Candide: Optimism (1947). A young man, Candide, lives a sheltered life in an \n[…]\nSeveral historical events inspired Voltaire to write Candide, most notably the publication of Leibniz's \"Monadology\", the Seven Years' War, and the 1755 Lisbon earthquake. Both of the latter catastrophes are frequently referred to in Candide. The earthquake, tsunami, and resulting fires of All Saints' Day had a strong influence on theologians of the day and on Voltaire, who was himself disillusioned by them.\n[…]\nImmediately after the earthquake, unreliable rumours circulated around Europe, sometimes overestimating the severity of the event. Ira Wade, a noted expert on Voltaire and Candide, has analyzed which sources Voltaire might have referenced, speculating that Voltaire's primary source was the 1755 work Relation historique du Tremblement de Terre survenu à Lisbonne by Ange Goudar.\n[…]\nAnother element of the satire focuses on what William F. Bottiglia, author of many published works on Candide, calls the \"sentimental foibles of the age\" and Voltaire's attack on them. Flaws in European culture are highlighted as Candide parodies adventure and romance clichés, mimicking the style of a picaresque novel.\n[…]\nVoltaire. Candide  (in French) – via Wikisource.\n[…]\nCandide public domain audiobook at LibriVox\n[…]\nCandide, ou l'optimisme, Par Mr. de Voltaire. Edition revue, corrigée & augmentée par L'Auteur, vol. 1, vol. 2, aux delices, 1761–1763.\n[…]\nVoltaire's Candide, a public wiki dedicated to Candide\n[…]\nBrief Bibliography for the Study of Candide, issued by the Voltaire Society of America"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1755_Lisbon_earthquake",
        "situacao": "ok",
        "texto": "The 1755 Lisbon earthquake, also known as the Great Lisbon earthquake, occurred in the Iberian Peninsula and Northwest Africa area on the morning of Saturday, 1 November, 1755 (on the Christian Feast of All Saints); it took place at approximately 09:40 local time. In combination with subsequent fires and a tsunami, the earthquake almost completely destroyed Lisbon and adjoining areas.\n[…]\nThe earthquake and its aftermath strongly influenced the intelligentsia of the European Age of Enlightenment. The noted writer-philosopher Voltaire used the earthquake in Candide and in his Poème sur le désastre de Lisbonne (\"Poem on the Lisbon disaster\"). Voltaire's Candide attacks the notion that all is for the best in this, \"the best of all possible worlds\", a world closely supervised by a benevolent deity. The Lisbon disaster provided a counterexample for Voltaire. Theodor W.\n[…]\nVoltaire's Candide includes a depiction of the main character during the devastation of the earthquake and its aftermath.\n[…]\n1755 Cape Ann earthquake\n[…]\nBraun, Theodore E. D., and John B. Radner, eds. The Lisbon Earthquake of 1755: Representations and Reactions (SVEC 2005:02). Oxford: Voltaire Foundation, 2005. ISBN 978-0-7294-0857-8. Recent scholarly essays on the earthquake and its representations in art, with a focus on Voltaire. (In English and French.)\n[…]\nFonseca, J. D. 1755, O Terramoto de Lisboa, The Lisbon Earthquake. Argumentum, Lisbon, 2004.\n[…]\nThe Lisbon earthquake of 1755: the catastrophe and its European repercussions (published in “The Economia Global e Gestão (Global Economics and Management Review), Lisbon, volume 10 (2004))\n[…]\nImages and historical depictions of the 1755 Lisbon earthquake from the University of California\n[…]\nTsunami Forecast Model Animation: Lisbon 1755 from the Pacific Tsunami Warning Center's official YouTube channel\n[…]\nThe Lisbon Earthquake (1755) from European History Online"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A2ndido%2C_ou_O_Otimismo",
        "situacao": "ok",
        "texto": "Candide, ou l'Optimisme é um conto filosófico em tom de sátira publicado pela primeira vez em 1759 por Voltaire, filósofo do Iluminismo. A novela já foi traduzida em centenas de línguas e, em português, seu título costuma ser Cândido ou O Otimismo ou simplesmente Cândido. Foi realizado, ao que parece, em três dias, em 1758, ainda sob a impressão do terremoto de Lisboa, com assinatura de um pseudôn\n[…]\nVoltaire conclui a obra-prima com Cândido — se não rejeitando o otimismo — ao menos substituindo o mantra leibniziano de Pangloss, \"tudo vai pelo melhor no melhor dos mundos possíveis\", por um preceito enigmático: \"devemos cultivar nosso jardim.\"\n[…]\nAinda assim, os eventos discutidos no livro são muitas vezes baseados em acontecimentos históricos, como a Guerra dos Sete Anos e o já citado terremoto de Lisboa de 1755. O problema do mal, tema comum aos filósofos da época, é exposto também neste conto, de forma mais direta e ironicamente: o autor ridiculariza a religião, os teólogos, os governos, o exército, as filosofias e os filósofos por meio de alegorias; de maneira mais conspícua, chega a roubar Leibniz e seu otimismo.\n[…]\nNos dias de hoje, Cândido é reconhecido como a magnum opus de Voltaire, e considerado parte do Cânone Ocidental.\n[…]\nCândido então descobre o mundo, e vai de decepção em decepção pelos caminhos de uma longa jornada de iniciação.\n[…]\nRecrutado à força pelas tropas búlgaras, testemunha o massacre da guerra. Foge e é recolhido pelo anabatista Jacques. Reencontra Pangloss, envelhecido e vitimado pela sífilis, que o informa da suposta morte de Cunegundes, estuprada por soldados búlgaros. Embarcam com Jacques para Lisboa. Após uma tempestade em que Jacques morre afogado, chegam a Lisboa no dia do terremoto e são vítimas de um auto de fé em que Pangloss é aparentemente enforcado.\n[…]\n— Tudo isso está muito bem dito — respondeu Cândido, — mas devemos cultivar nosso jardim.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pitágoras",
      "descricao": "Filósofo e matemático grego (c. 570–495 a.C.), fundador da escola pitagórica."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo uma lenda, Pitágoras foi alcançado pelos inimigos porque se recusou a atravessar uma plantação de quê?",
    "resposta": "Favas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pythagoras"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pythagoras",
        "situacao": "ok",
        "texto": "Pythagoras of Samos (Ancient Greek: Πυθαγόρας; c. 570 – c. 495 BC) was an ancient Ionian Greek philosopher, polymath, and the eponymous founder of Pythagoreanism. His political and religious teachings were well known in Magna Graecia and influenced the philosophies of Plato, Aristotle, and, through them, Western philosophy.\n[…]\nThe poet Heraclitus of Ephesus (fl. c. 500 BC), who was born a few miles across the sea from Samos and may have lived within Pythagoras's lifetime, mocked Pythagoras as a clever charlatan, remarking that \"Pythagoras, son of Mnesarchus, practiced inquiry more than any other man, and selecting from these writings he manufactured a wisdom for himself—much learning, artful knavery.\" Alcmaeon of Croton (fl. c.\n[…]\nThe oldest known building designed according to Pythagorean teachings is the Porta Maggiore Basilica, a subterranean basilica which was built during the reign of the Roman emperor Nero as a secret place of worship for Pythagoreans. The basilica was built underground because of the Pythagorean emphasis on secrecy and also because of the legend that Pythagoras had sequestered himself in a cave on Samos. The basilica's apse is in the east and its atrium in the west out of respect for the rising sun.\n[…]\nIn his preface to his book On the Revolution of the Heavenly Spheres (1543), Nicolaus Copernicus cites various Pythagoreans as the most important influences on the development of his heliocentric model of the universe, deliberately omitting mention of Aristarchus of Samos, a non-Pythagorean astronomer who had developed a fully heliocentric model in the fourth century BC, in effort to portray his model as fundamentally Pythagorean. Johannes Kepler considered himself to be a Pythagorean.\n[…]\nPythagoras on In Our Time at the BBC\n[…]\nWorks by Pythagoras at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pit%C3%A1goras",
        "situacao": "ok",
        "texto": "Pitágoras de Samos (em grego:  Πυθαγόρας ὁ Σάμιος, ou apenas Πυθαγόρας; Πυθαγόρης em grego jônico; Samos, c. 570 – Metaponto, c. 495 a.C.) foi um filósofo e matemático grego jônico creditado como fundador do movimento chamado Pitagorismo. Na sua maioria, as informações sobre Pitágoras foram escritas séculos depois da sua morte, de modo que há pouca informação confiável sobre ele. Nasceu na ilha de\n[…]\nPitágoras conseguiu escapar, mas estava tão desanimado com a morte de seus amados alunos que ele teria cometido suicídio. Uma lenda diferente relatada por Diógenes Laércio e Jâmblico afirma que Pitágoras quase conseguiu escapar, mas que ele chegou a um campo de favas e se recusou a percorrê-lo, pois isso violaria seus ensinamentos, ele parou então e foi morto. Esta história parece ter se originado do escritor Neantes, que falou sobre os pitagóricos posteriores, não sobre o próprio Pitágoras.\n[…]\nna Música, uma descoberta notável de que os intervalos musicais se colocam de modo que admitem expressões através de proporções aritméticas. Pitágoras - assim como outros filósofos gregos pré-socráticos - também descreveu o poder do som e seus efeitos sobre a psique humana. Essa experiência musicoterápica possivelmente foi utilizada mais tarde por Aristóteles como base teórica para sua definição de música, que, segundo ele, era uma \"arte medicinal\".\n[…]\nO edifício mais antigo conhecido, projetado de acordo com os ensinamentos de Pitágoras, é a Basílica Porta Maggiore, uma basílica subterrânea que foi construída durante o reinado do imperador romano Nero como um local de culto secreto para os pitagóricos. A basílica foi construída no subsolo por causa da ênfase pitagórica no segredo e também por causa da lenda de que Pitágoras havia se isolado em uma caverna em Samos.\n[…]\nPitágoras de Samos (escultor)\n[…]\nInternational Vegetarian Union: Pythagoras\n[…]\nHoward Williams, \"The Ethics of Diet\":PYTHAGORAS",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "A Desobediência Civil",
      "descricao": "Ensaio de Henry David Thoreau, de 1849, que defende a resistência individual a leis injustas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Henry David Thoreau escreveu A Desobediência Civil depois de passar uma noite preso por se recusar a pagar o quê?",
    "resposta": "Um imposto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Civil_Disobedience_(Thoreau)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Civil_Disobedience_(Thoreau)",
        "situacao": "ok",
        "texto": "\"Resistance to Civil Government\", also called \"On the Duty of Civil Disobedience\" or \"Civil Disobedience\", is an essay by American transcendentalist Henry David Thoreau, first published in 1849. In it, Thoreau argues that individuals should prioritize their conscience over compliance with unjust laws, asserting that passive submission to government authority enables injustice.\n[…]\nAn aphorism often erroneously attributed to Thomas Jefferson, \"That government is best which governs least...\", was actually found in Thoreau's \"Civil Disobedience\". Thoreau was apparently paraphrasing the motto of The United States Magazine and Democratic Review: \"The best government is that which governs least\" which might also be inspired from the 17th verse of the Tao Te Ching by Laozi: \"The best rulers are scarcely known by their subjects.\" Thoreau expanded it significantly:\n[…]\nDuring my student days I read Henry David Thoreau's essay On Civil Disobedience for the first time. Here, in this courageous New Englander's refusal to pay his taxes and his choice of jail rather than support a war that would spread slavery's territory into Mexico, I made my first contact with the theory of nonviolent resistance. Fascinated by the idea of refusing to cooperate with an evil system, I was so deeply moved that I reread the work several times.\n[…]\nI became convinced that noncooperation with evil is as much a moral obligation as is cooperation with good. No other person has been more eloquent and passionate in getting this idea across than Henry David Thoreau. As a result of his writings and personal witness, we are the heirs of a legacy of creative protest. The teachings of Thoreau came alive in our civil rights movement; indeed, they are more alive than ever before.\n[…]\nCivil Disobedience public domain audiobook at LibriVox\n[…]\n\"Civil Disobedience\" by Thoreau – Britannica"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Desobedi%C3%AAncia_Civil",
        "situacao": "ok",
        "texto": "A Desobediência Civil (em inglês, Civil Disobedience) é um ensaio escrito por Henry David Thoreau em 1849.\n[…]\nThoreau escreveu o livro após ter sido preso por não pagar seus impostos, que ele se negou a pagar porque financiavam a guerra contra o México, que na época teve grande parte de seu território anexado pelos EUA.\n[…]\nA Desobediência Civil - Domínio Público",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Tao Te Ching",
      "descricao": "Texto clássico chinês atribuído a Lao-Tsé, base do taoísmo."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo a lenda, Lao-Tsé escreveu o Tao Te Ching quando ia deixar a China, a pedido de quem?",
    "resposta": "Um guarda da fronteira",
    "distratores": [
      "O imperador",
      "Confúcio",
      "Um discípulo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tao_Te_Ching",
      "https://en.wikipedia.org/wiki/Laozi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tao_Te_Ching",
        "situacao": "ok",
        "texto": "The Tao Te Ching or Dào Dé Jīng, (traditional Chinese: 道德經; simplified Chinese: 道德经; lit. 'Classic of the Way and its Virtue') also known simply as the Laozi, is an ancient Chinese classic text traditionally credited to the sage Laozi, regarded as the foundational Taoist text. Central to both philosophical and religious Taoism, it has been \"profoundly influential\" more broadly in Chinese culture, \n[…]\nIn English, the title is commonly rendered Tao Te Ching, following the Wade–Giles romanization, or as Daodejing, following pinyin. It has been translated under such titles as The Classic of the Way and its Power, The Book of the Tao and Its Virtue, The Book of the Way and of Virtue, The Tao and its Characteristics, The Canon of Reason and Virtue, The Classic Book of Integrity and the Way, or A Treatise on the Principle and Its Action.\n[…]\nOther Taoism scholars, such as Michael LaFargue and Jonathan Herman, argue that, while these versions do not pretend to scholarship, they meet a real spiritual need in the West; they aim to make the wisdom of the Tao Te Ching more accessible to modern English-speaking readers by, typically, employing more familiar cultural and temporal references.\n[…]\nThe Tao Te Ching is written in Classical Chinese, which poses a number of challenges for interpreters and translators. As Holmes Welch notes, the written language \"has no active or passive, no singular or plural, no case, no person, no tense, no mood\". Moreover, the received text lacks many grammatical particles which are preserved in the older Mawangdui and Beida texts, and which permit the meaning to be more precise. Lastly, many passages of the Tao Te Ching appear to be deliberately ambiguous.\n[…]\nDaodejing (in Literary Chinese and English), translated by Legge, James (Wang Bi ed.) – via Chinese Text Project\n[…]\nTao Te Ching public domain audiobook at LibriVox"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Laozi",
        "situacao": "ok",
        "texto": "Laozi (variously spelled; , low-TSUH; Chinese: 老子; pinyin: Lǎozǐ) is the name traditionally given to an ancient Chinese philosopher, also identified as Li Er or Lao Dan, who is regarded as the author or originating teacher associated with the Tao Te Ching (Pinyin: Dào Dé Jīng), one of the foundational texts of Taoism. Traditional accounts place him in the 6th century BC state of Chu during China's\n[…]\nThe Dào Dé Jīng (or \"Tao Te Ching\", according to an older romanization) is one of the most significant treatises in Chinese cosmogony. It is often called the Laozi, and has always been associated with that name. The identity of the person or people who wrote or compiled the text has been the source of considerable speculation and debate throughout history.\n[…]\nIn his principal book of poetry, the Bhogar 7000, he tells of his travels to China to spread his ideas on spirituality, specifically on the topic of sublimating the sexual energies and using said energies to become self-realised, with a spiritually-minded partner. His jeeva samadhi can be found in the southwestern corridor of the Dhandayuthapani Swamy Temple, Palani, Tamil Nadu, India."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tao_Te_Ching",
        "situacao": "ok",
        "texto": "Tao Te Ching, Dao de Jing ou Tao-te king (em chinês: , Dàodé jīng), comumente traduzido como O Livro do Caminho e da Virtude, é uma das mais conhecidas e importantes obras da literatura da China. Foi escrito entre 350 e 250 a.C.\n[…]\nAssim como a maior parte das figuras mitológicas dos fundadores de religiões, a vida do escritor de Tao Te Ching, Lao Tzi, é envolta em lendas. Segundo a tradição, Lao Tzi nasceu no sul da China por volta de 604 a.C, tendo sido superintendente judicial dos arquivos imperiais em Loyang, capital do estado de Ch'u. Desgostoso pelas intrigas da vida na corte, Lao Tzi decidiu afastar-se da sociedade, seguindo para as Terras do Oeste.\n[…]\nMontado em uma carroça guiada por um boi, seguiu viagem, mas, ao atravessar a fronteira, um dos seus amigos, o policial Yin-hsi, reconheceu-o e pediu-lhe que escrevesse os seus ensinamentos antes de partir. Lao Tzi, então, escreveu o pequeno livro conhecido posteriormente como Tao Te Ching e partiu em seguida. Segundo a história, ele morreu em 517 a.C. Lao Tzi foi canonizado pelo imperador Han entre os anos 650 a.C. e 684 a.C. (?)\n[…]\nTao Te Ching 道德經 (Cap.6)\n[…]\nI Ching\n[…]\nChinese Text Project: Daodejing\n[…]\nRainald Simon: Daodejing. Das Buch vom Weg und seiner Wirkung. Neuübersetzung. Reclam, Stuttgart 2009, ISBN 978-3-15-010718-8Rijckenborgh, Jan van (2006). Gnosis Chinesa - Comentários sobre o Tao te King. [S.l.]: Rosacruz (atual Pentagrama Publicações). 978-85-62923-00-5  - Download completo gratuito\n[…]\nLegge, James;  et al., eds. (1891), The Tao Teh King, Sacred Books of the East, Vol. XXXIX, Sacred Books of China, Vol. V, Oxford: Oxford University Press .\n[…]\nO Tao Te Ching em Rimas\n[…]\nO Tao Te Ching de Sthephen Mitchel\n[…]\n老子 Lǎozĭ 道德經 Dàodéjīng Chinese + English + German",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Arthur Schopenhauer",
      "descricao": "Filósofo alemão (1788–1860), autor de O Mundo como Vontade e Representação."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na Universidade de Berlim, Schopenhauer marcou suas aulas no mesmo horário das de que filósofo famoso, e quase ninguém apareceu?",
    "resposta": "Hegel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Arthur_Schopenhauer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arthur_Schopenhauer",
        "situacao": "ok",
        "texto": "Arthur Schopenhauer (22 February 1788 – 21 September 1860), also known as the “Philosopher of Pessimism”, was a German philosopher and writer. He is known for his 1818 work The World as Will and Representation (expanded in 1844), which characterizes the phenomenal world as the manifestation of a blind and irrational noumenal will.\n[…]\nHegel was also facing political suspicions at the time, when many progressive professors were dismissed following the Carlsbad Decrees, while Schopenhauer carefully mentioned in his application that he had no interest in politics. Despite their differences and the arrogant request to schedule lectures at the same time as his own, Hegel still voted to accept Schopenhauer to the university. Only five students turned up to Schopenhauer's lectures, and he dropped out of academia.\n[…]\nThe leading figures of post-Kantian philosophy—Johann Gottlieb Fichte, Schelling and Hegel—were not respected by Schopenhauer. He argued that they were not philosophers at all, for they lacked \"the first requirement of a philosopher, namely a seriousness and honesty of inquiry.\" Rather, they were merely sophists who, excelling in the art of beguiling the public, pursued their own selfish interests (such as professional advancement within the university system).\n[…]\nHegel, Schopenhauer wrote in the preface to his Two Fundamental Problems of Ethics, not only \"performed no service to philosophy, but he has had a detrimental influence on philosophy, and thereby on German literature in general, really a downright stupefying, or we could even say a pestilential influence, which it is therefore the duty of everyone capable of thinking for himself and judging for himself to counteract in the most express terms at every opportunity.\"\n[…]\nWorks by Arthur Schopenhauer at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arthur_Schopenhauer",
        "situacao": "ok",
        "texto": "Arthur Schopenhauer (Gdansk, 22 de fevereiro de 1788 – Frankfurt, 21 de setembro de 1860) foi um filósofo alemão. Ele é conhecido por sua obra O Mundo como Vontade e Representação, de 1818 (expandida em 1844), que caracteriza o mundo fenomenal como a manifestação de uma vontade numenal cega e irracional. Com base no idealismo transcendental de Immanuel Kant, Schopenhauer desenvolveu um sistema met\n[…]\nO título do curso devia-se, provavelmente, a Hegel (1770-1831), que na época era um dos mais reputados professores da Universidade de Berlim. Tentando competir com Hegel, Schopenhauer escolheu o mesmo horário utilizado pelo rival, mas a tentativa redundou em fracasso completo: apenas quatro ouvintes assistiam a suas aulas. Ao fim de um semestre, renunciou à universidade.\n[…]\nNa França, muitos filósofos e escritores viajaram até Frankfurt para visitá-lo. Na Alemanha, a filosofia de Hegel entrou em declínio e Schopenhauer surgiu como ídolo das novas gerações.\n[…]\nEssa vontade, para Schopenhauer, é independente da representação e, portanto, não se submete às leis da razão. Ao contrário de Hegel, para quem o real é racional, a filosofia de Schopenhauer sustenta que o real é em si mesmo cego e irracional, enquanto vontade. As formas racionais da consciência não passariam de ilusórias aparências e a essência de todas as coisas seria alheia à razão:\n[…]\n1807 - Hegel: A Fenomenologia do Espírito\n[…]\n1811 - Ingresso de Schopenhauer na Universidade de Berlim, onde estuda filosofia\n[…]\n1818 - Hegel na universidade de Berlim, onde lecionará até a sua morte\n[…]\n1825 - Nova tentativa na Universidade de Berlim. Novo fracasso. Schopenhauer renuncia à docência e passa a viver daí em diante com a herança paterna\n[…]\n1830 - Hegel: Enciclopédia das ciências filosóficas (edição definitiva)\n[…]\n1831 - Morre Hegel\n[…]\nAlém disso, o espólio manuscrito de Schopenhauer foi editado por Arthur Prettyr e Volker Spierling:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Cândido",
      "descricao": "Novela satírica de Voltaire, publicada em 1759, cujo subtítulo é ou o Otimismo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Cândido, de Voltaire, o professor Pangloss repete que vivemos no melhor dos mundos possíveis, zombando de que filósofo alemão?",
    "resposta": "Gottfried Leibniz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Candide"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Candide",
        "situacao": "ok",
        "texto": "Candide, ou l'Optimisme ( kon-DEED or  kahn-DEED, French: [kɑ̃did] ) is a French satire written by Voltaire, a philosopher of the Age of Enlightenment, first published in 1759. The novella has been widely translated, with English versions titled Candidus: or, All for the Best (1759); Candide: or, The Optimist (1762); and Candide: Optimism (1947). A young man, Candide, lives a sheltered life in an \n[…]\nVoltaire ridicules religion, theologians, governments, armies, philosophies, and philosophers. Through Candide, he assaults Leibniz and his optimism.\n[…]\nIt had an especially large effect on the contemporary doctrine of optimism, a philosophical system founded on the theodicy of Gottfried Wilhelm Leibniz, which insisted on God's benevolence in spite of such events. This concept is often put in the form, \"all is for the best in the best of all possible worlds\" (French: Tout est pour le mieux dans le meilleur des mondes possibles). Philosophers had trouble fitting the horrors of this earthquake into their optimistic world view.\n[…]\nCandide satirises various philosophical and religious theories that Voltaire had previously criticised. Primary among these is Leibnizian optimism (sometimes called Panglossianism after its fictional proponent), which Voltaire ridicules with descriptions of seemingly endless calamity. Voltaire demonstrates a variety of irredeemable evils in the world, leading many critics to contend that Voltaire's treatment of evil—specifically the theological problem of\n[…]\nFundamental to Voltaire's attack is Candide's tutor Pangloss, a self-proclaimed follower of Leibniz and a teacher of his doctrine. Ridicule of Pangloss's theories thus ridicules Leibniz himself, and Pangloss's reasoning is silly at best. For example, Pangloss's first teachings of the narrative absurdly mix up cause and effect:\n[…]\nCandide at Standard Ebooks\n[…]\nVoltaire's Candide, a public wiki dedicated to Candide"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A2ndido%2C_ou_O_Otimismo",
        "situacao": "ok",
        "texto": "Candide, ou l'Optimisme é um conto filosófico em tom de sátira publicado pela primeira vez em 1759 por Voltaire, filósofo do Iluminismo. A novela já foi traduzida em centenas de línguas e, em português, seu título costuma ser Cândido ou O Otimismo ou simplesmente Cândido. Foi realizado, ao que parece, em três dias, em 1758, ainda sob a impressão do terremoto de Lisboa, com assinatura de um pseudôn\n[…]\nNarra a história de um jovem, Cândido, vivendo num paraíso edênico e recebendo ensinamentos do otimismo de Leibniz através de seu mentor, Pangloss. A obra retrata a abrupta interrupção deste estilo de vida quando Cândido se desilude ao testemunhar e experimentar eminentes dificuldades no mundo.\n[…]\nVoltaire conclui a obra-prima com Cândido — se não rejeitando o otimismo — ao menos substituindo o mantra leibniziano de Pangloss, \"tudo vai pelo melhor no melhor dos mundos possíveis\", por um preceito enigmático: \"devemos cultivar nosso jardim.\"\n[…]\nDr. Pangloss, mestre de Cândido\n[…]\nCacambo, criado de Cândido\n[…]\nCândido é um jovem que vive no castelo do barão de Thunder-ten-Tronckh localizado na Vestfália. Seu mestre é Pangloss, filósofo que ensina a \"metafísico-teólogo-cosmolonigologia\" e que professava, como Leibniz, que vivemos no melhor dos mundos possíveis. Cândido é expulso desse melhor dos mundos possíveis como resultado de um beijo proibido trocado com Cunegundes, filha do barão, sua prima.\n[…]\n— Todos os acontecimentos — dizia às vezes Pangloss a Cândido — estão devidamente encadeados no melhor dos mundos possíveis; pois, afinal, se não tivesses sido expulso de um lindo castelo, a pontapés no traseiro, por amor da senhorita Cunegundes, se a Inquisição não te houvesse apanhado, se não tivesses percorrido a América a pé, se não tivesses mergulhado a espada no barão, se não tivesses perdido todos os teus carneiros da boa terra do Eldorado, não estarias aqui agora comendo doce de cidra e pistache.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "O Príncipe",
      "descricao": "Tratado político de Nicolau Maquiavel, escrito por volta de 1513."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em O Príncipe, Maquiavel aponta como exemplo de governante astuto e decidido que filho do papa Alexandre sexto?",
    "resposta": "César Bórgia",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Prince"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Prince",
        "situacao": "ok",
        "texto": "The Prince (Italian: Il Principe [il ˈprintʃipe]; Latin: De Principatibus) is a 16th-century political treatise written by the Italian diplomat and political philosopher Niccolò Machiavelli in the form of an instruction guide for new princes. Many commentators have viewed that one of the main themes of The Prince is that immoral acts are sometimes necessary to achieve political glory.\n[…]\nThis is not necessarily true in every case. Machiavelli cites Cesare Borgia as an example of a lucky prince who escaped this pattern. Through cunning political maneuvers, he managed to secure his power base. Cesare was made commander of the papal armies by his father, Pope Alexander VI, but was also heavily dependent on mercenary armies loyal to the Orsini brothers and the support of the French king.\n[…]\nWhen it looked as though the king of France would abandon him, Borgia sought new alliances.\n[…]\nJohn Scott and Vickie Sullivan assert that, in Machiavelli ascribing Borgia's fall to the death of his father, what Borgia should have done is eliminated the papacy.\n[…]\nThe choice of his detestable hero, Cesare Borgia, clearly enough shows his hidden aim; and the contradiction between the teaching of the Prince and that of the Discourses on Livy and the History of Florence shows that this profound political thinker has so far been studied only by superficial or corrupt readers. The Court of Rome sternly prohibited his book. I can well believe it; for it is that Court it most clearly portrays.\n[…]\nHowever, John Scott and Vickie Sullivan believe that Dietz identified \"the wrong plot\" and that her investigation is \"limited\", not taking into account that even if Machiavelli wanted to mislead the Medici, a reinvigorated republic would not have lasted long, and also Machiavelli's recommendation for princes to emulate Cesare Borgia.\n[…]\nThe Prince at Project Gutenberg\n[…]\nInterview with Quentin Skinner on The Prince"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Pr%C3%ADncipe",
        "situacao": "ok",
        "texto": "O Príncipe (em italiano, Il Principe) é um livro escrito por Nicolau Maquiavel em 1513, cuja primeira edição foi publicada postumamente, em 1532. Trata-se de uma das teorias políticas mais elaboradas pelo pensamento humano e que tem grande influência em descrever o  Estado desde a sua publicação até os dias de hoje, mesmo os sistemas de governo já serem variados.\n[…]\nDe que modo devem-se governar as cidades ou os principados que, antes da conquista, possuíam leis próprias\n[…]\nA obra “O Príncipe”, escrita por Maquiavel em 1513, e publicada postumamente em 1532, se transformou em sua obra-prima. O livro, um manual sobre a arte de governar, foi inspirado no estilo político de César Bórgia um dos mais ambiciosos comandantes italianos, que ficou conhecido por seu poder e atrocidades que cometeu para conseguir o que queria. Maquiavel viu nele o modelo para os demais governantes da época.\n[…]\nMaquiavel se distancia da tradição moralista, mas mantém a conceção de agir tendo em vista um bem, no entanto, a partir de sua nova perspetiva, o príncipe deve agir tendo em vista o bem público, i.e, tendo em vista manter firme as relações que compõe a manutenção do poder. Como, no exemplo do capítulo XVII:César Bórgia foi reputado cruel; entretanto a sua dita crueldade reconciliou internamente a Romanha, fê-la coesa, reconduzindo-a a um estado de paz e de fidelidade.\n[…]\nMaquiavel aponta ainda que Estados que surgem de maneira súbita não têm tempo para desenvolver raízes profundas, tornando-se vulneráveis e suscetíveis à ruína logo nas primeiras adversidades. Na obra, César Bórgia é apresentado como o exemplo clássico desse tipo de governante. Maquiavel descreve suas ações como exemplares, destacando sua habilidade em tentar estruturar e proteger o território dentro de tudo que estava ao seu alcance controlar.\n[…]\n«O Príncipe»\n[…]\n«O Príncipe (dominio.publico.gov.br)»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Diógenes de Sinope",
      "descricao": "Filósofo cínico grego (c. 412–323 a.C.), famoso por viver num grande jarro em Atenas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que conquistador teria dito que, se não fosse quem era, gostaria de ser Diógenes, o filósofo que vivia num jarro?",
    "resposta": "Alexandre, o Grande",
    "fonte": [
      "https://en.wikipedia.org/wiki/Diogenes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diogenes",
        "situacao": "ok",
        "texto": "Diogenes the Cynic (, dy-OJ-in-eez; c. 413/403 – c. 324/321 BC), also known as Diogenes of Sinope, was an ancient Greek philosopher during the period of Classical Greece, and one of the founders of Cynicism.\n[…]\nAt the approach of so many people, Diogenes sat up a little and fixed his eyes on Alexander. When the king greeted him and asked if there was anything he wanted, Diogenes replied, \"Yes, that you should stand a little out of my sun\".\n[…]\nIt is said that Alexander was so impressed by this—and by the arrogance and grandeur of spirit of a man who could treat him with such disdain—that he said to his courtiers, who were laughing and joking about the philosopher as they walked away, \"But I'll tell you this: if I were not Alexander, I would be Diogenes!\"\n[…]\nSome sources claim that Diogenes died on the same night as Alexander the Great (June 10–11, 323 BC), but this is likely legend. Modern scholars believe that he died in the late 320s, probably around 324/321 BC. Censorinus writes that Diogenes died at the age of 81, while Laertius holds that he lived to be about 90.\n[…]\nA damaged marble bas relief from the first century AD depicting Diogenes in a jar with a dog was discovered in 1726 during excavations at Monte Testaccio, near Rome. The fragment, part of a larger image of the legendary meeting between Diogenes and Alexander, was restored in the 18th century based on a medieval drawing, adding the figure of Alexander and a new head for Diogenes derived from a statue in the Villa Albani.\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Diogenes of Sinope\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Di%C3%B3genes_de_Sinope",
        "situacao": "ok",
        "texto": "Diógenes de Sinope (em grego antigo: Διογένης ὁ Σινωπεύς; Sinope, 404 ou 412 a.C. – Corinto, c. 323 a.C.), também conhecido como Diógenes, o Cínico, foi um filósofo da Grécia Antiga, durante o período da Grécia Clássica, e um dos fundadores do Cinismo.\n[…]\nSeus encontros memoráveis, incluindo o com Alexandre, o Grande, juntamente com vários relatos de sua morte, fizeram dele um símbolo duradouro de desafio filosófico às autoridades estabelecidas e aos valores artificiais.\n[…]\nIgualmente famosa é sua história com Alexandre, o Grande, que, ao encontrá-lo, ter-lhe-ia perguntado o que poderia fazer por ele. Acontece que devido à posição em que se encontrava, Alexandre fazia-lhe sombra. Diógenes, então, olhando para Alexandre, disse: \"Não me tires o que não me podes dar!\" (variante: \"deixa-me ao meu sol\"). Essa resposta impressionou vivamente Alexandre, que, na volta, ouvindo seus oficiais zombarem de Diógenes, disse: \"Se eu não fosse Alexandre, queria ser Diógenes\".\n[…]\nA (provável) segunda maior história e prova de admiração de Diogenes por parte de Alexandre, o Grande, é que se conta que um dia, Alexandre perguntou a Diógenes o que ele fazia em meio aos ossos e Diogenes respondeu com a frase: \"Estou procurando os ossos de seu pai, mas não consigo os diferenciar dos ossos de teus servos\".\n[…]\nDiógenes acreditava que os humanos viviam artificialmente de maneira hipócrita e poderiam ter proveito ao estudar o cão. Este animal é capaz de realizar as suas funções corporais naturais em público sem constrangimento, comerá qualquer coisa, e não fará estardalhaço sobre em que lugar dormir. Os cães, como qualquer animal, vivem o presente sem ansiedade e não possuem as pretensões da filosofia abstrata.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Demócrito",
      "descricao": "Filósofo grego pré-socrático (c. 460–370 a.C.), um dos formuladores da teoria atômica."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Heráclito ficou conhecido como o filósofo que chora. Que pensador grego, defensor da ideia do átomo, era chamado de filósofo que ri?",
    "resposta": "Demócrito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Democritus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Democritus",
        "situacao": "ok",
        "texto": "Democritus ( dih-MOK-rih-təs; Greek: Δημόκριτος, Dēmókritos; c. 460 – c. 370 BC) was a pre-Socratic Greek philosopher from Abdera, primarily remembered today for his formulation of an atomic theory of the universe. Democritus wrote extensively on a wide variety of topics.\n[…]\nAccording to Aristotle, Democritus was born in Abdera, on the coast of Thrace. He was a polymath and prolific writer, producing nearly eighty treatises on subjects such as poetry, harmony, military tactics, and Babylonian theology. Some called him a Milesian, and the name of his father too is stated differently. His birth year was fixed by Apollodorus in the first year of the 80th Olympiad, or 460 BC, while Thrasyllus had referred it to as the 3rd year of the 77th Olympiad.\n[…]\nDemocritus had called himself forty years younger than Anaxagoras. His father, Hegesistratus—or as others called him Damasippus or Athenocritus—was possessed of so large a property, that he was able to receive and treat Xerxes on his march through Abdera.\n[…]\nGuthrie, W. K. (1979) A History of Greek Philosophy – The Presocratic tradition from Parmenides to Democritus, Cambridge University Press.\n[…]\nLee, Mi-Kyoung (2005). Epistemology after Protagoras: responses to relativism in Plato, Aristotle, and Democritus. Oxford University Press. ISBN 978-01-99-26222-9. Retrieved 22 September 2016.\n[…]\nVlastos, Gregory (1945–1946). \"Ethics and Physics in Democritus\". Philosophical Review. 54–55: 53–64, 578–592.\n[…]\nQuotations related to Democritus at Wikiquote\n[…]\nWorks by or about Democritus at Wikisource\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Democritus\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658.\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Democritus\", MacTutor History of Mathematics Archive, University of St Andrews"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dem%C3%B3crito",
        "situacao": "ok",
        "texto": "Demócrito de Abdera (em grego clássico: Δημόκριτος, Dēmokritos, \"escolhido do povo\"; ca. 460 a.C. — 370 a.C.) foi um filósofo pré-socrático da Grécia Antiga. Nasceu na cidade de Mileto ou Abdera, viajou pela Babilônia, Egito e Atenas, e se estabeleceu em Abdera no final do século V a.C.. Do ponto de vista filosófico, a maior parte de suas obras (segundo a doxografia) tratou da ética e não apenas d\n[…]\nDemócrito foi discípulo e depois sucessor de Leucipo de Mileto. Sua fama decorre do fato de ele ter sido o maior expoente da teoria atômica ou do atomismo. De acordo com essa teoria, tudo o que existe é composto por elementos indivisíveis chamados átomos (do grego, \"a\", negação e \"tomo\", divisível. Átomo= indivisível). Não há certeza se a teoria foi concebida por ele ou por seu mestre Leucipo, e a ligação estreita entre ambos dificulta a identificação do que foi pensado por um ou por outro.\n[…]\nHá anedotas segundo as quais Demócrito ria e gargalhava de tudo e dizia que o riso torna sábio, o que o levou a ser conhecido, durante o renascimento, como \"o filósofo que ri\".\n[…]\nNa Grécia Antiga, Protágoras de Abdera teria sido seu discípulo direto e, posteriormente, o principal filósofo influenciado por ele foi Epicuro. No Renascimento, muitas de suas ideias foram aceitas (por, por exemplo, Giordano Bruno) e tiveram um papel importante durante o Iluminismo. Muitos consideram que Demócrito é \"o pai da ciência moderna\".\n[…]\nObservando um raio de sol que penetrou numa fresta de um recinto escuro, Demócrito viu partículas de poeira num movimento de turbilhão, levando-o à ideia de que os átomos (os indivisíveis da matéria) se comportariam da mesma maneira, colidindo aleatoriamente, alguns se aglomerando, outros se dispersando, outros ainda nunca se juntando com outro átomo.\n[…]\nDemócrito foi um escritor prolífico e Diógenes Laércio Dentre estas, destacam-se:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Ludwig Wittgenstein",
      "descricao": "Filósofo austríaco (1889–1951), autor do Tractatus Logico-Philosophicus."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Ludwig Wittgenstein estudou na mesma escola de Linz, na Áustria, e na mesma época, que que futuro ditador?",
    "resposta": "Adolf Hitler",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ludwig_Wittgenstein"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ludwig_Wittgenstein",
        "situacao": "ok",
        "texto": "Ludwig Josef Johann Wittgenstein ( VIT-gən-s(h)tyne; Austrian German: [ˈluːdvɪk ˈjoːsɛf ˈjoːhan ˈvɪtɡn̩ʃtaɪn]; 26 April 1889 – 29 April 1951) was an Austro-British philosopher who worked in logic, philosophy of mathematics, philosophy of mind, and philosophy of language.\n[…]\nAdolf Hitler was a fellow pupil and of the same age but was never in the same class, because he had been made to repeat his 1900/1901 first year. Placed two grades above Hitler, it is thought Wittgenstein was also moved forward a year. Hitler left Linz in 1904 to spend the 1904/1905 academic year at the Realschule in Steyr. As Ray Monk and Hans Sluga note, there is no evidence the two ever had anything to do with each other during the year that they overlapped, 1903–1904.\n[…]\nKarl Wittgenstein died on 20 January 1913, and after receiving his inheritance Ludwig became one of the wealthiest men in Europe. He \"made a very generous financial bequest to a group of poets and artists chosen by Ludwig von Ficker, the editor of Der Brenner, from artists in need. These included [Georg] Trakl as well as Rainer Maria Rilke and the architect Adolf Loos\", and also the painter Oskar Kokoschka.\n[…]\nIn 1939, there were 2,100 applications for Mischling status (or for \"promotions\" within such status), of which Hitler granted only 12. Anthony Gottlieb writes that the pretext was that their paternal grandfather had been the bastard son of a German prince, which allowed the Reichsbank to claim foreign currency, stocks and 1700 kg of gold held in Switzerland by a Wittgenstein family trust.\n[…]\nWorks by Ludwig Wittgenstein at Project Gutenberg\n[…]\nWorks by Ludwig Wittgenstein at The Ludwig Wittgenstein Project\n[…]\nJohn Searle on Ludwig Wittgenstein on YouTube\n[…]\nLudwig Wittgenstein at the Mathematics Genealogy Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ludwig_Wittgenstein",
        "situacao": "ok",
        "texto": "Ludwig Josef Johann Wittgenstein (Viena, 26 de abril de 1889 – Cambridge, 29 de abril de 1951) foi um filósofo austríaco, naturalizado britânico em 1939. Estudou engenharia, lecionou em escolas primárias e participou do projeto da Casa Wittgenstein. Dedicou-se à lógica, aos fundamentos da matemática, à filosofia da linguagem e à filosofia da mente.\n[…]\nMuitos comentaristas notaram a coincidência de Wittgenstein e Adolf Hitler terem frequentado a Realschule ao mesmo tempo, embora em turmas diferentes. Não há evidência de que se tenham conhecido. A fotografia de junho de 1901, por vezes relacionada à hipótese de um encontro entre ambos, precede em dois anos a entrada de Wittgenstein nessa escola.\n[…]\nDurante sua estadia, a Alemanha anexou a Áustria (o Anschluss). Pelas Leis de Nuremberg, que classificavam como judias as pessoas com três ou quatro avós judeus, Wittgenstein e seus irmãos eram considerados judeus pelo regime nazista. Em 1939, após negociações da família, receberam uma reclassificação excepcional como pessoas de ascendência mista (Mischlinge), aprovada por Hitler.\n[…]\nHá muito negligenciada (particularmente por círculos como o Círculo de Viena), a dimensão moral do Tractatus é, no entanto, para Wittgenstein, \"o significado do meu livro. De fato, meu livro traça os limites da Ética, por assim dizer, a partir de dentro.\" A obra é dirigida a artistas e intelectuais vienenses como Karl Kraus, Adolf Loos e Fritz Mauthner, e não a Frege e Russell.\n[…]\nHamann, Brigitte (2000). Hitler's Vienna. a dictator's apprenticeship (em inglês). [S.l.]: Oxford University Press. 492 páginas. ISBN 0-19-514053-2. OCLC 827937629 .\n[…]\nLudwig Wittgenstein — Internet Encyclopedia of Philosophy (em inglês).\n[…]\nThe Ludwig Wittgenstein Project — textos do filósofo (em inglês e outros idiomas).\n[…]\nLectures de Ludwig Wittgenstein (em francês).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Assim Falou Zaratustra",
      "descricao": "Livro de Friedrich Nietzsche publicado entre 1883 e 1885."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Assim Falou Zaratustra, de Nietzsche, inspirou um poema sinfônico de Richard Strauss que ficou famoso na abertura de que filme de Stanley Kubrick?",
    "resposta": "2001: Uma Odisseia no Espaço",
    "fonte": [
      "https://en.wikipedia.org/wiki/Also_sprach_Zarathustra_(Strauss)",
      "https://en.wikipedia.org/wiki/Thus_Spoke_Zarathustra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Also_sprach_Zarathustra_(Strauss)",
        "situacao": "ok",
        "texto": "Also sprach Zarathustra, Op. 30 (German: [ˈalzo ʃpʁaːx t͡saʁaˈtʊstʁa] , Thus Spoke Zarathustra or Thus Spake Zarathustra) is a tone poem by the German composer Richard Strauss, written in 1896 and inspired by Friedrich Nietzsche's 1883–1885 philosophical work of the same name. Strauss conducted its first performance on 27 November 1896 in Frankfurt. A typical performance lasts approximately 33 min\n[…]\nThe initial fanfare – titled \"Sonnenaufgang\" (\"Sunrise\") in the composer's programme notes – became well and widely known after its repeated use as the main musical theme in Stanley Kubrick's 1968 film 2001: A Space Odyssey. Thereafter, Eumir Deodato's hit jazz-funk adaptation of the piece won the 1974 Grammy Award for Best Pop Instrumental Performance.\n[…]\nThe piece is divided into nine sections played with only three definite pauses. Strauss named the sections after selected chapters of Friedrich Nietzsche's novel Thus Spoke Zarathustra:\n[…]\nThe recording of the opening fanfare used for the film 2001: A Space Odyssey was a 1959 recording performed by the Vienna Philharmonic and conducted by Herbert von Karajan.\n[…]\nBrazilian musician Eumir Deodato's jazz-funk styled arrangement of the opening fanfare Sunrise theme, titled \"Also Sprach Zarathustra (2001)\", reached No. 2 on the Billboard Hot 100 U.S. popular music sales charts in 1973, No. 3 in Canada, and No. 7 on the UK Singles Chart. Deodato's version won the 1974 Grammy Award for Best Pop Instrumental Performance.\n[…]\nIt was used twice in Greta Gerwig's 2023 film Barbie, first in an opening scene that parodies \"The Dawn of Man\" sequence from 2001: A Space Odyssey, and again as part of the score cue \"Ken Makes a Discovery.\"\n[…]\nAlso sprach Zarathustra: Scores at the International Music Score Library Project\n[…]\nAlso sprach Zarathustra score on Musopen\n[…]\n\"Also Sprach Zarathustra: Decoding Strauss' Tone Poem\" by Marin Alsop on NPR (January 14, 2012)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Thus_Spoke_Zarathustra",
        "situacao": "ok",
        "texto": "Thus Spoke Zarathustra: A Book for All and None (German: Also sprach Zarathustra: Ein Buch für Alle und Keinen), also translated as Thus Spake Zarathustra, is a work of philosophical fiction written by German philosopher Friedrich Nietzsche and published in four volumes between 1883 and 1885. The protagonist is nominally the historical Zarathustra, more commonly called Zoroaster in the West.\n[…]\nNietzsche studied extensively and was very familiar with Schopenhauer and Christianity and Buddhism, each of which he considered nihilistic and \"enemies to a healthy culture\". Thus Spoke Zarathustra can be understood as a \"polemic\" against these influences.\n[…]\nNietzsche considered Thus Spoke Zarathustra his magnum opus, writing:\n[…]\nThe style of the book, along with its ambiguity and paradoxical nature, has helped its eventual enthusiastic reception by the reading public but has frustrated academic attempts at analysis (as Nietzsche may have intended). Thus Spoke Zarathustra remained unpopular as a topic for scholars (especially those in the Anglo-American analytic tradition) until the latter half of the 20th century brought widespread interest in Nietzsche and his unconventional style.\n[…]\nThe critic Harold Bloom criticized Thus Spoke Zarathustra in The Western Canon (1994), calling it \"a gorgeous disaster\" and \"unreadable\". Other commentators have suggested that Nietzsche's style is intentionally ironic for much of the book.\n[…]\nAlso sprach Zarathustra (Richard Strauss' tone poem, inspired by Nietzsche's work)\n[…]\nNietzsche's 'Thus Spoke Zarathustra': Before Sunrise (essay collection), edited by James Luchte. London: Bloomsbury Publishing. 2008. ISBN 1-84706-221-0.\n[…]\nLampert, Laurence. 1989. Nietzsche's Teaching: An Interpretation of Thus Spoke Zarathustra. New Haven: Yale University Press.\n[…]\nSeung, T. K. 2005. Nietzsche's Epic of the Soul: Thus Spoke Zarathustra. Lanham, Maryland: Lexington Books."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Also_sprach_Zarathustra_%28Strauss%29",
        "situacao": "ok",
        "texto": "Also sprach Zarathustra, Op. 30 (em português:  Assim falou Zaratustra) é um poema sinfônico composto em 1896 por Richard Strauss, inspirado no tratado filosófico de mesmo nome escrito por Friedrich Nietzsche. O próprio compositor conduziu a primeira performance na cidade de Frankfurt am Main. A  peça tem duração aproximada de meia hora.\n[…]\nSua introdução tornou-se mundialmente conhecida por ter sido usada como tema musical no filme 2001: A Space Odyssey, criação de Arthur C. Clarke e Stanley Kubrick, de 1968.\n[…]\nA peça é dividida em nove seções executadas com apenas três intervalos claros. Richard Strauss nomeou as seções de acordo com capítulos do livro:\n[…]\nA peça inicia-se com a sustentação de um dó grave nos contrabaixos, contrafagote e órgão, ao que se segue a fanfarra de metais que introduz o \"tema do amanhecer\" (do \"Prólogo de Zaratustra\", texto que está na partitura) que permeia a estrutura de todo o trabalho. Este tema consiste de três notas em intervalos de quinta e oitava, como dó-sol-dó.\n[…]\n\"Von den Hinterweltlern\" inicia-se com violoncelos, contrabaixos e órgão antes da abertura da passagem lírica da seção. As seções seguintes, \"Von der großen Sehnsucht\" e \"Von den Freuden und Leidenschaften\", incluem temas de natureza mais cromática.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Simulacros e Simulação",
      "descricao": "Livro do filósofo francês Jean Baudrillard, publicado em 1981."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Um exemplar de Simulacros e Simulação, de Jean Baudrillard, aparece servindo de esconderijo em que filme de 1999?",
    "resposta": "Matrix",
    "fonte": [
      "https://en.wikipedia.org/wiki/Simulacra_and_Simulation"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Simulacra_and_Simulation",
        "situacao": "ok",
        "texto": "Simulacra and Simulation (French: Simulacres et Simulation) is a 1981 philosophical essay by the philosopher and cultural theorist  Jean Baudrillard, in which he seeks to examine the relationships between reality, symbols, and society, in particular the significations and symbolism of culture and media involved in constructing an understanding of shared existence.\n[…]\nPart of the three-order simulacra, the second-order simulacra, a term coined by Jean Baudrillard, are symbols of a non-faithful representation of the original. Here, signs and images do not faithfully show reality, but might hint at the existence of something real which the sign itself is incapable of encapsulating.\n[…]\nBaudrillard theorizes that the lack of distinctions between reality and simulacra originates in several phenomena:\n[…]\nThe Matrix movie, which is considered to be an \"interpretative grid\" for Baudrillard's theory. Simulacra and Simulation was issued to the cast as a required reading prior to the making of the movie, and the book appears in one scene. Baudrillard was reported to be very disappointed by the film, however.\n[…]\nBaudrillard himself noted that many read his writing on the 'three orders' of the image with excessive seriousness. In the postface of his To forget Foucault (Original: Oublier Foucault), Baudrillard's interviewer Sylvère Lotringer suggested that Baudrillard's approach to \"The Order of the Simulacra\" was \"pretty close\" to that of Michel Foucault who \"wrote the archaeology of things\", to which Baudrillard replied:\n[…]\nBacon's Essays/Of Simulation and Dissimulation by philosopher Francis Bacon\n[…]\nJean Baudrillard: Two Essays\n[…]\nN. Katherine Hayles; David Porush; Brooks Landon; Vivian Sobchack; J.G. Ballard. \"In Response To Jean Baudrillard (Hayles, Porush, Landon, Sobchack, Ballard)\". www.depauw.edu. Science Fiction Studies. Retrieved 19 February 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Simulacros_e_Simula%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "Simulacros e Simulação (em francês:  Simulacres et Simulation) é um tratado filosófico de Jean Baudrillard que discute a relação entre realidade, símbolos e sociedade.\n[…]\n...O simulacro nunca é aquilo que esconde a verdade - é a verdade que esconde o que não existe. O simulacro é verdadeiro.\n[…]\nSimulacros e Simulação aborda os símbolos e signos e o modo como estes se relacionam com a contemporaneidade (existências simultâneas). Baudrillard afirma que a sociedade atual substituiu toda a realidade e significados por símbolos e signos, tornando a experiência humana uma simulação da realidade.\n[…]\nAlém disso, esses simulacros não são meramente mediações da realidade, nem mesmo mediações enganadoras da realidade; eles simplesmente ocultam que algo como a realidade é irrelevante para nossa atual compreensão de nossas vidas.\n[…]\nSegundo Baudrillard, existem três categorias de simulacros. Na primeira, o simulacro é natural, baseado na imitação da realidade. É otimista e utópico, consciente da impossibilidade de igualar representação e realidade (como se via, no período pré-moderno, nas pinturas, por exemplo). Guarda-se, no caso, a diferenciação e se mantém o referencial, ou seja, o objeto real. Nas palavras do autor: \"é a ilha da utopia oposta ao continente do real\".\n[…]\nOs signos saturam os valores simbólicos e escondem a realidade, que se tornou uma utopia inalcançável, tal como sonhar com um objeto perdido para sempre. O simulacro de primeira ordem é \"operático\"; o de segunda, operatório; e o de terceira, operacional.\n[…]\nThe Matrix filme em parte inspirada pela obra de Baudrillard",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Ordem e Progresso",
      "descricao": "Lema inscrito na bandeira nacional do Brasil desde 1889."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O lema Ordem e Progresso, da bandeira do Brasil, foi inspirado no pensamento de que filósofo francês?",
    "resposta": "Auguste Comte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Brazil",
      "https://en.wikipedia.org/wiki/Auguste_Comte"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Brazil",
        "situacao": "ok",
        "texto": "The national flag of Brazil is a blue disc depicting a starry sky (which includes the Southern Cross) spanned by a curved band inscribed with the national motto Ordem e Progresso (Brazilian Portuguese pronunciation: [ˈɔʁdẽj i pɾoˈɡɾɛsu]) ('Order and Progress'), within a yellow rhombus on a green field. It was officially adopted on 19 November 1889, four days after the Proclamation of the Republic,\n[…]\nA blue circle with white five-pointed stars replaced the arms of the Empire of Brazil –its position in the flag reflects the sky over the city of Rio de Janeiro on 15 November 1889. The motto Ordem e Progresso is derived from Auguste Comte's motto of positivism: \"L'amour pour principe et l'ordre pour base; le progrès pour but\" (\"Love for principle and order for/as the basis; progress for/as the purpose\").\n[…]\nThe caption \"Ordem e Progresso\" is written in green letters. The letter P lies on the vertical diameter of the circle. The letters of the word \"Ordem\" and the word \"Progresso\" are a third of a module (0.33 m) tall. The width of these letters is three-tenths of a module (0.30 m). The conjunction E has a height of three-tenths of a module (0.30 m) and a width of a quarter of a module (0.25 m).\n[…]\nIn 2021, the movement \"Amor na Bandeira\" (in English, Love in the Flag) proposed to update the flag's motto from \"Ordem e Progresso\" to \"Amor, Ordem e Progresso\" (Love, Order and Progress), in allusion to the motto of positivism \"L'amour pour principe et l'ordre pour base; le progrès pour but\" (Love as a principle and order as the basis; progress as the goal), formulated by the French philosopher Auguste Comte, which inspired the original motto in the flag.\n[…]\nBandeira Nacional at the Brazilian Government\n[…]\nBandeira – Insígnia at the Brazilian Government"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Auguste_Comte",
        "situacao": "ok",
        "texto": "Isidore Auguste Marie François Xavier Comte (; French: [oɡyst(ə) kɔ̃t] ; 19 January 1798 – 5 September 1857) was a French philosopher and writer who formulated the doctrine of positivism. He is often regarded as the first philosopher of science in the modern sense of the term. Comte's ideas were fundamental to the development of sociology, as he coined the term and treated the discipline as the cr\n[…]\nAuguste Comte was born in Montpellier, Hérault, on 19 January 1798, at the time under the rule of the newly founded French First Republic. After attending the Lycée Joffre and then the University of Montpellier, Comte was admitted to École Polytechnique in Paris. The École Polytechnique was notable for its adherence to the French ideals of republicanism and progress. The École closed in 1816 for reorganization, and Comte continued his studies at the medical school at Montpellier.\n[…]\nAuguste Comte Sociology Theory Explained\n[…]\nAndrew Wernick, Auguste Comte and the Religion of Humanity, Cambridge University Press, 2001.\n[…]\nGane, Mike (2006). Auguste Comte. Oxford: Taylor & Francis. pp. 1–13. ISBN 978-0-415-38542-8.\n[…]\nWorks by Auguste Comte in eBook form at Standard Ebooks\n[…]\nWorks by Auguste Comte at Project Gutenberg\n[…]\nWorks by or about Auguste Comte at the Internet Archive\n[…]\nWorks by Auguste Comte at LibriVox (public domain audiobooks)\n[…]\nAuguste Comte: Stanford Encyclopaedia of Philosophy\n[…]\nReview materials for studying Auguste Comte\n[…]\nHenri Gouhier, \"Final Chapter – Life in the anticipation of the Grave\", from The Life of Auguste Comte (1931). In Comte's last years, practicing his own religion.\n[…]\nAuguste Comte quotes\n[…]\nThe positive philosophy, Auguste Comte / freely translated and selected by Harriet Martineau, Cornell University Library Historical Monographs Collection – downloadable version\n[…]\nAuguste Comte – High Priest of Positivism by Caspar Hewett\n[…]\nMaison d'Auguste Comte"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Brasil",
        "situacao": "ok",
        "texto": "Bandeira do Brasil constitui a bandeira nacional da República Federativa do Brasil. É composta por uma base verde em forma de retângulo, sobreposta por um losango amarelo e um círculo azul, no meio do qual está atravessada uma faixa branca com o lema \"Ordem e Progresso\", em letras maiúsculas verdes. O Brasil adotou oficialmente este projeto para sua bandeira nacional em 19 de novembro de 1889, sub\n[…]\nO conceito foi criado por Raimundo Teixeira Mendes, com a colaboração de Miguel Lemos, Manuel Pereira Reis e Décio Villares. É um dos símbolos nacionais brasileiros, ao lado do Laço Nacional, do Selo Nacional, do Brasão de Armas e do Hino Nacional. O lema \"Ordem e Progresso\" é inspirado pelo lema do positivismo de Auguste Comte: O Amor por princípio e a Ordem por base; o Progresso por fim, versão traduzida do francês.\n[…]\nA inscrição \"Ordem e Progresso\" é uma forma abreviada do lema político positivista cujo autor é o francês Auguste Comte:\n[…]\nHasteia-se a bandeira:\n[…]\nO lema \"ordem e progresso\" foi objeto de protestos por se relacionar com o positivismo. Segundo José Feliciado, que o defendeu, o lema simboliza os elementos dominantes na ocasião da proclamação da República, isto é, os positivistas. No entanto, o lema acabou por desagradar a vários brasileiros, levando, até mesmo, ao uso de outras bandeiras que não a oficial, durante os primeiros anos da República.\n[…]\nEm 2021, o movimento \"Amor na Bandeira\", encabeçado pelo designer Hans Donner, propôs a inclusão da expressão Amor, Ordem e Progresso na bandeira nacional, em alusão ao lema do positivismo, formulado pelo filósofo francês Augusto Comte: \" O Amor por princípio e a Ordem por base; o Progresso por fim\". Segundo a justificativa do movimento \"o resgate do amor, na visão dos militantes da campanha, corrigiria um erro histórico e apontaria um novo rumo para o Brasil\".\n[…]\n«Brasil» (em inglês). no Flags of the World",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Banalidade do mal",
      "descricao": "Expressão criada por Hannah Arendt no livro Eichmann em Jerusalém, de 1963."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Hannah Arendt cunhou a expressão banalidade do mal ao acompanhar, em Jerusalém, o julgamento de que oficial nazista?",
    "resposta": "Adolf Eichmann",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eichmann_in_Jerusalem"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eichmann_in_Jerusalem",
        "situacao": "ok",
        "texto": "Eichmann in Jerusalem: A Report on the Banality of Evil is a 1963 book by the philosopher and political thinker Hannah Arendt. A Jew who fled Germany during Adolf Hitler's rise to power, Arendt reported for The New Yorker on the trial of Adolf Eichmann, one of the key organizers of the Holocaust. A revised and enlarged edition was published in 1964.\n[…]\nArendt's book introduced the expression and concept of the banality of evil. Her thesis is that Eichmann was actually not a fanatic or a sociopath, but instead an average and mundane person who relied on clichéd defenses rather than thinking for himself, was motivated by professional promotion rather than ideology, and believed in success which he considered the chief standard of \"good society\".\n[…]\nHe also directly criticized her for ignoring the facts offered at the trial in stating that \"the disparity between what Miss Arendt states, and what the ascertained facts are, occurs with such a disturbing frequency in her book that it can hardly be accepted as an authoritative historical work.\" He further condemned Arendt and her work for her prejudices against Hauser and Ben-Gurion depicted in Eichmann in Jerusalem: A Report on the Banality of Evil.\n[…]\nHowever, Lipstadt glosses over the fact that the aspect of Eichmann in Jerusalem that is being criticized by her own critique of Arendt, as well as by other critiques of Arendt, is the foregrounding of the banality of evil in Eichmann in Jerusalem as opposed to the ‘Radical Evil’ which she had spoken of in her book on the Origins of Totalitarianism.\n[…]\nAccordingly, it was her critics who take the notion of the 'Banality of Evil' as a proposition which is verifiable, not Hannah Arendt herself.\n[…]\nHannah Arendt Papers: Speeches and Writings File, 1923-1975  Library of Congress, Manuscript Division. Includes manuscript copy of Eichmann in Jerusalem."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eichmann_em_Jerusal%C3%A9m",
        "situacao": "ok",
        "texto": "Eichmann em Jerusalém - Um relato sobre a banalidade do mal  (Original em inglês: Eichmann in Jerusalem: A Report on the Banality of Evil) é um livro da filósofa política alemã de origem judaica Hannah Arendt, sobre o julgamento de Adolf Eichmann, em Jerusalém, publicado em 1963. Arendt, judia alemã que havia fugido do regime nazista, cobriu o processo de Eichmann numa série de cinco artigos para \n[…]\nEm 1960, Adolf Eichmann foi capturado na cidade de Buenos Aires pelo Mossad (Instituto para Inteligência e Operações Especiais de Israel) e levado até Jerusalém, para o que deveria ser o mais midiático julgamento de um nazista desde o tribunal de Nuremberg. Segundo Arendt, durante o processo, em vez do monstro sanguinário, que todos esperavam ver, surge um funcionário, um burocrata. É justamente aí que  Hannah Arendt descobre a  banalidade do mal.\n[…]\nNuma mescla brilhante de jornalismo político e reflexão filosófica, Arendt investiga a capacidade do Estado de igualar o exercício da violência homicida ao mero cumprimento da atividade burocrática.\n[…]\nComo condenar um funcionário público, honesto e obediente, cumpridor de metas, que não fizera mais do que agir conforme a ordem legal vigente na Alemanha daquela época? A partir dessa questão, Hannah Arendt, explora as implicações do julgamento de Adolf Eichmann.\n[…]\nTítulo em português: Eichmann em Jerusalém - Um relato sobre a banalidade do mal\n[…]\nTitulo original (inglês): Eichmann in Jerusalem: A Report on the Banality of Evil\n[…]\nAutor: Hannah Arendt (1906-1975)\n[…]\nArendt, Hannah. Eichmann em Jerusalém. São Paulo: Companhia das Letras, 2000\n[…]\nEichmann in Jerusalem : os cinco artigos de Arendt , sobre o julgamento de Eichmann, publicados  em The New Yorker (1963)\n[…]\nHannah Arendt: conferências e artigos (incluindo cópia do manuscrito de Eichmann in Jerusalem ). Library of Congress.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Amor platônico",
      "descricao": "Expressão para um amor afetivo e não físico, derivada do nome de Platão."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A expressão amor platônico foi cunhada no século quinze por que humanista italiano, tradutor das obras de Platão?",
    "resposta": "Marsilio Ficino",
    "distratores": [
      "Pico della Mirandola",
      "Francesco Petrarca",
      "Lorenzo Valla"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Platonic_love"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Platonic_love",
        "situacao": "ok",
        "texto": "Platonic love is a type of love which is friendly, affectionate, or even passionate, but sexual desire is nonexistent, suppressed or sublimated.\n[…]\nIn the 15th century, a Latin term for Plato's idea of love, amor platonicus, was coined by Marsilio Ficino; \"platonic love\" then entered the English language in the 1630s, when Neoplatonism was a fad among royalty. Later, by the time of the 18th century, the term came to be used more in the modern sense to mean a sexless relationship.\n[…]\nThis concept of divine Eros was later transformed into the term \"platonic love\".\n[…]\nIn the Middle Ages, new interest in the works of Plato, his philosophy and his view of love became more popular, spurred on by Georgios Gemistos Plethon during the Councils of Ferrara and Firenze in 1438–1439. Later in 1469, Marsilio Ficino put forward a theory of neo-platonic love, in which he defined love as a personal ability of an individual, which guides their soul towards cosmic processes, lofty spiritual goals and heavenly ideas.\n[…]\nThe first use of the modern sense of platonic love is considered to be by Ficino in one of his letters.\n[…]\nDall'Orto, Giovanni (January 1989). \"'Socratic Love' as a Disguise for Same-Sex Love in the Italian Renaissance\". Journal of Homosexuality. 16 (1–2): 33–66. doi:10.1300/J082v16n01_03. PMID 3069924.\n[…]\nRojcewicz, R. (1997). \"Platonic love: dasein's urge toward being.\" Research in Phenomenology, 27 (1), 103.\n[…]\nMiller, P. A. (2013). \"Duras and platonic love: The erotics of substitution.\" Comparatist, 37 83–104.\n[…]\nTennov, Dorothy (1999). Love and Limerence: The Experience of Being in Love. Lanham, MD: Scarborough House. ISBN 978-0-8128-6286-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Amor_plat%C3%B4nico",
        "situacao": "ok",
        "texto": "Amor platônico (português brasileiro) ou Amor platónico (português europeu) na acepção vulgar, a ligação amorosa entre duas pessoas onde não há qualquer tipo de interesse envolvido; sobretudo interesse sexual.\n[…]\nO termo \"Amor platonicus\" foi, pela primeira vez, utilizado no século XV pelo filósofo neoplatônico florentino, Marsilio Ficino, como um sinônimo de \"amor socrático\"\n[…]\nMais tarde, em 1469, Marsilio Ficino apresentou uma teoria do amor neoplatônica, na qual define o amor como uma habilidade pessoal de um indivíduo que guia sua alma em direção aos processos cósmicos, aos elevados objetivos espirituais e às ideias celestiais (De Amore, Les Belles Lettres, 2012) O primeiro uso do sentido moderno do amor platônico é considerado uma invenção de Ficino em uma de suas cartas.\n[…]\nIronicamente, tanto o epônimo desta forma de amor - Platão - quanto os já referidos Sócrates e Ficino - falavam do amor como uma espécie de amizade pedagógica, mas também tinham especial atração sexual por jovens do sexo masculino. Os três possuíam este afeto puro pelos discípulos, mas nutriam interesse erótico por rapazes.\n[…]\nJohn Addington Symonds, em \"A Problem in Greek Ethics\" (\"Um problema na ética grega\"), declara que: \"...devotavam uma fervorosa admiração pela beleza dos rapazes. Ao tempo em que se declara defensor de um afeto moderado e generoso, se esforçam por utilizar o entusiasmo erótico como uma força capaz de guiar em direção à filosofia...\". Para Linda Rapp, Ficino queria definir o amor platônico como \"...uma relação que inclui a um só tempo o físico e o espiritual.\n[…]\nAssim, na ótica de Ficino aquele amor é o desejo da beleza, enquanto representação do divino\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Pensamentos (Pascal)",
      "descricao": "Coletânea póstuma de reflexões de Blaise Pascal, publicada em 1670."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que pensador francês do século dezessete escreveu que o coração tem razões que a própria razão desconhece?",
    "resposta": "Blaise Pascal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pens%C3%A9es"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pens%C3%A9es",
        "situacao": "ok",
        "texto": "The Pensées (Thoughts) is a collection of fragments written by the French 17th-century philosopher and mathematician Blaise Pascal. Pascal's religious conversion led him into a life of asceticism, and the Pensées was in many ways his life's work. It represented Pascal's defense of the Christian religion, and the concept of \"Pascal's wager\" stems from a portion of this work.\n[…]\nThe Pensées is the name given posthumously to fragments that Pascal had been preparing for an apology for Christianity, which was never completed. That envisioned work is often referred to as the Apology for the Christian Religion, although Pascal never used that title.\n[…]\nFriedrich Nietzsche's relationship to Pascal and the Pensées was ambivalent. He thought Pascal \"the most instructive victim of Christianity\" and expressed his \"love\" of him \"since he has enlightened me infinitely: the only logical Christian\". Although as an anti-Christian Nietzsche was highly critical of the Christian parts of the Pensées, he did find his psychological and social observations astute. Others have also taken an interest in Pascal's sociological and psychological observations.\n[…]\nPope Paul VI, in encyclical Populorum progressio, issued in 1967, quotes Pascal's Pensées:\n[…]\nIn June 2023, Pope Francis published an apostolic letter, Sublimitas et Miseria Hominis, on the fourth centenary of Pascal's birth which paid tribute to Pascal. He described the Pensées as \"monumental\" and praised its \"philosophical depth and literary charm\".\n[…]\nand Nicole, Pierre (1877). Pensées de Pascal (in French) – via Internet Archive.{{cite book}}:  CS1 maint: deprecated archival service (link)\n[…]\nPascal's Pensées; or, Thoughts on Religion. Translated by Burford Rawlings, Gertrude. 1900.{{cite book}}:  CS1 maint: deprecated archival service (link)\n[…]\n\"Etext version of the Pensées\". CCEL.\n[…]\nPascal's Pensées by Blaise Pascal at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pensamentos_%28Pascal%29",
        "situacao": "ok",
        "texto": "Pensamentos (em francês: Pensées) é uma obra do físico, filósofo e teólogo francês Blaise Pascal (1623-1662). Foi escrita com o intuito de defender o cristianismo, tendo o argumento da aposta em sua composição.\n[…]\nPensamentos foi o nome dado postumamente aos fragmentos que Pascal estava preparando para uma apologia do cristianismo, que nunca foi concluída. Esse trabalho costuma ser conhecido como Apologia da Religião Cristã, por mais que o autor nunca tenha usado esse título.\n[…]\nEmbora pareça consistir em ideias e anotações, algumas das quais incompletas, acredita-se que antes de sua morte em 1662 Pascal já havia planejado a ordem do livro e começado a organizá-lo. Porém, como não concluiu seu trabalho, existem discordâncias sobre a ordem correta dos escritos. A obra foi publicada originalmente em 1670 e a primeira tradução para o inglês ocorreu em 1688.\n[…]\nPensamentos no Projeto Gutenberg (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Atlântida",
      "descricao": "Ilha lendária descrita como uma potência que afundou no mar."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que filósofo grego descreveu a Atlântida, ilha poderosa que acabou engolida pelo mar, nos diálogos Timeu e Crítias?",
    "resposta": "Platão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atlantis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atlantis",
        "situacao": "ok",
        "texto": "Atlantis (Ancient Greek: Ἀτλαντὶς νῆσος, romanized: Atlantìs nêsos, lit. 'island of Atlas') is a fictional island mentioned in Plato's works Timaeus and Critias as part of an allegory on the hubris of nations. By describing Atlantis as a naval empire from the west that had conquered most of Europe and Libya, Plato purposely created a literary contrast with the Achaemenid Empire, the great land-bas\n[…]\nThe four people appearing in those two dialogues are the politicians Critias and Hermocrates as well as the philosophers Socrates and Timaeus of Locri, although only Critias speaks of Atlantis. In his works Plato makes extensive use of the Socratic method in order to discuss contrary positions within the context of a supposition.\n[…]\nKenneth Feder points out that Critias's story in the Timaeus provides a major clue. In the dialogue, Critias says, referring to Socrates' hypothetical society:\n[…]\nIn order to give his account of Atlantis verisimilitude, Plato mentions that the story was heard by Solon in Egypt, and transmitted orally over several generations through the family of Dropides, until it reached Critias, a dialogue speaker in Timaeus and Critias. Solon had supposedly tried to adapt the Atlantis oral tradition into a poem (that if published, was to be greater than the works of Hesiod and Homer). While it was never completed, Solon passed on the story to Dropides.\n[…]\nIn the new era, the third century AD Neoplatonist Zoticus wrote an epic poem based on Plato's account of Atlantis. Plato's work may already have inspired parodic imitation, however. Writing only a few decades after the Timaeus and Critias, the historian Theopompus of Chios wrote of a land beyond the ocean known as Meropis. This description was included in Book 8 of his Philippica, which contains a dialogue between Silenus and King Midas.\n[…]\nThe dictionary definition of atlantis at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atl%C3%A2ntida",
        "situacao": "ok",
        "texto": "Atlântida (em grego clássico: Ἀτλαντὶς νῆσος – trad.: “ilha de Atlas”) é uma ilha fictícia mencionada nas obras Timeu e Crítias do filósofo grego Platão como parte de uma alegoria sobre a arrogância das nações. Na história, Atlântida é descrita como um império naval que governava todas as partes ocidentais do chamado mundo conhecido, tornando-a a contra-imagem literária do Império Aquemênida.\n[…]\nAs únicas fontes primárias sobre Atlântida são os diálogos Timeu e Crítias do filósofo grego Platão; todas as outras menções à ilha são baseadas nestas referências. Os diálogos afirmam citar Sólon, que teria visitado o Egito entre 590 e 580 a.C. onde teria traduzido registros egípcios sobre Atlântida. Platão introduziu Atlântida no Timeu, escrito em 360 a.C.:\n[…]\nAlguns escritores antigos viam Atlântida como um mito fictício ou metafórico; outros acreditavam que era real. Aristóteles acreditava que Platão, seu professor, havia inventado a ilha para ensinar filosofia.\n[…]\nPara dar verossimilhança ao seu relato de Atlântida, Platão menciona que a história foi ouvida por Sólon no Egito, que teria sido transmitida oralmente ao longo de várias gerações através da família de Dropides, até chegar a Crítias, um orador de diálogo nas obras Timeu e Crítias. Sólon supostamente tentou adaptar a tradição oral da Atlântida em um poema (que, se publicado, seria maior que as obras de Hesíodo e Homero).\n[…]\nNa nova era, o neoplatônico Zótico, do século III, escreveu um poema épico baseado no relato de Platão. Contudo, a obra de Platão já pode ter inspirado paródias. Escrevendo apenas algumas décadas após Timeu e Crítias, o historiador Teopompo de Quios escreveu sobre uma terra além do oceano conhecida como Meropis. Esta descrição foi incluída no Livro 8 de sua Filípicas, que contém um diálogo entre Sileno e o rei Midas.\n[…]\n«A Atlântida ressurge»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Panóptico",
      "descricao": "Modelo de prisão circular em que um vigia central observa todos os presos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que filósofo inglês projetou o panóptico, prisão em que um único vigia pode observar todos os presos sem ser visto?",
    "resposta": "Jeremy Bentham",
    "fonte": [
      "https://en.wikipedia.org/wiki/Panopticon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Panopticon",
        "situacao": "ok",
        "texto": "The panopticon is a design of institutional building with an inbuilt system of control, originated by the English philosopher and social theorist Jeremy Bentham in the 18th century. The concept is to allow all prisoners of an institution to be observed by a single prison officer, without the inmates knowing whether or not they are being watched.\n[…]\nBentham also thought that Reveley's prison design could be used for factories, asylums, hospitals, and schools.\n[…]\nThough no panopticon was built during Bentham's lifetime, his principles prompted considerable discussion and debate. Shortly after Jeremy Bentham's death in 1832 his ideas were criticised by Augustus Pugin, who in 1841 published the second edition of his work Contrasts in which one plate shows a \"Modern Poor House\".\n[…]\nDavid John Manning published The Mind of Jeremy Bentham in 1986, in which he reasoned that Bentham's fear of instability caused him to advocate ruthless social engineering and a society in which there could be no privacy or tolerance for the deviant.\n[…]\nThe metaphor of the panopticon prison has been employed to analyse the social significance of surveillance by closed-circuit television (CCTV) cameras in public spaces. In 1990, Mike Davis reviewed the design and operation of a shopping mall, with its centralised control room, CCTV cameras and security guards, and came to the conclusion that it \"plagiarizes brazenly from Jeremy Bentham's renowned nineteenth-century design\".\n[…]\nIn 2026, UK Home Secretary Shabana Mahmood linked artificial intelligence-driven monitoring to the metaphor, stating her intent to \"achieve, by means of AI and technology, what Jeremy Bentham tried to do with his panopticon\". She further noted that this technology allows for a system where \"the eyes of the state can be on you at all times\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pan-%C3%B3ptico",
        "situacao": "ok",
        "texto": "Pan-óptico é um termo utilizado para designar uma penitenciária ideal, concebida pelo filósofo e jurista inglês Jeremy Bentham em 1785, que permite a um único vigilante observar todos os prisioneiros, sem que estes possam saber se estão ou não sendo observados. O medo e o receio de não saberem se estão a ser observados leva-os a adotar o comportamento desejado pelo vigilante.\n[…]\nBentham estudou \"racionalmente\", em suas próprias palavras, o sistema penitenciário. Criou então um projeto de prisão circular, onde um observador central poderia ver todos os locais onde houvesse presos. Era o sistema pan-óptico. O sistema seria aplicável, segundo o autor,  a prisões, escolas, hospitais ou fábricas, para tornar mais eficiente o controle daqueles estabelecimentos.\n[…]\nPara isso, Bentham não só imaginou persianas ou venezianas nas janelas da torre de observação, mas também conexões labirínticas entre as salas da torre, a fim de evitar sombras ou ruídos que pudessem delatar a posição e o olhar do observador.\n[…]\nMas o sistema inventado por  Bentham era na realidade complexo e exigia edifícios dispendiosos e com vasta área de construção, de modo que, até hoje, nenhum edifício pan-óptico seguiu exatamente o sistema desenhado por ele. Em todo o mundo existe um número muito reduzido  de edifícios que se podem considerar pan-ópticos, isto é, de implantação circular e com uma simplificada torre de vigilância situada no centro de um  espaço aberto, coberto ou não.\n[…]\nSegundo o filósofo Michel Foucault, é no século XVIII que se inicia um processo de disseminação sistemática de dispositivos disciplinares, que, a exemplo do pan-óptico, permitiam vigilância e controle social cada vez mais eficientes, embora não necessariamente com os mesmos objetivos \"racionais\" de Bentham e seus contemporâneos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "O Espírito das Leis",
      "descricao": "Tratado de teoria política publicado por Montesquieu em 1748."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que pensador francês defendeu a separação entre Executivo, Legislativo e Judiciário no livro O Espírito das Leis, de 1748?",
    "resposta": "Montesquieu",
    "distratores": [
      "Voltaire",
      "Rousseau",
      "Diderot"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Montesquieu",
      "https://en.wikipedia.org/wiki/Separation_of_powers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Montesquieu",
        "situacao": "ok",
        "texto": "Charles Louis de Secondat, baron de La Brède et de Montesquieu (18 January 1689 – 10 February 1755), generally referred to as simply Montesquieu, was a French jurist, historian, and political philosopher.\n[…]\nMontesquieu's anonymously published The Spirit of Law (De l'esprit des lois, 1748), first translated into English by Thomas Nugent in a 1750 edition, was received well in both Great Britain and the American colonies, where it influenced the Founding Fathers of the United States in drafting the U.S. Constitution.\n[…]\nAmerican founders studied Montesquieu's views on how the English achieved liberty by separating executive, legislative, and judicial powers, and when Catherine the Great wrote her Nakaz (Instruction) for the Legislative Assembly she had created to clarify the existing Russian law code, she avowed borrowing heavily from Montesquieu's Spirit of Law, although she discarded or altered portions that did not support Russia's absolutist bureaucratic monarchy.\n[…]\nIf the legislative branch appoints the executive and judicial powers, as Montesquieu indicated, there will be no separation or division of its powers, since the power to appoint carries with it the power to revoke.\n[…]\nIt is evident that a direct influence on Montesquieu was from François-Ignace d'Espiard de La Borde's (1707–1777) Essai sur le génie et le caractère des nations published in Brussels in 1743, which was republished in 1752 under the title Esprit des nations expressing the same climate theory and environmental determinism ideas. Montesquieu, far from the first to have these ideas, introduced them to a broad public during his time in De l'esprit des lois (The Spirit of the Laws).\n[…]\nMontesquieu, \"Notes on England\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Separation_of_powers",
        "situacao": "ok",
        "texto": "The separation of powers principle functionally differentiates several types of state power (usually legislation, adjudication, and execution) and requires these operations of government to be conceptually and institutionally distinct and clearly articulated, thereby maintaining the integrity of each branch. Separation of powers is closely linked to notions of checks and balances.\n[…]\nThe term \"tripartite system\" is commonly ascribed to French Enlightenment political philosopher Montesquieu, although he did not use such a term but referred to the \"distribution\" of powers. In The Spirit of Law (1748), Montesquieu described the various forms of distribution of political power among a legislature, an executive, and a judiciary.\n[…]\nSeparation of powers requires a different source of legitimization, or a different act of legitimization from the same source, for each of the separate powers. If the legislative branch appoints the executive and judicial powers, as Montesquieu indicated, there will be no separation or division of its powers, since the power to appoint carries with it the power to revoke.\n[…]\n78, Alexander Hamilton, citing Montesquieu, redefined the judiciary as a separately distinct branch of government with the legislative and the executive branches. Before Hamilton, many colonists in the American colonies had adhered to British political ideas and conceived of government as divided into executive and legislative branches (with judges operating as appendages of the executive branch).\n[…]\nSeparation of judicial powers from the executive and legislative branches is the norm in modern democracies.\n[…]\nSeparation of duties\n[…]\nIain Stewart, \"Men of Class: Aristotle, Montesquieu and Dicey on 'Separation of Powers' and 'the Rule of Law'\" 4 Macquarie Law Journal 187 (2004)\n[…]\nIain Stewart, \"Montesquieu in England: his 'Notes on England', with Commentary and Translation\" (2002)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Montesquieu",
        "situacao": "ok",
        "texto": "Charles-Louis de Secondat, barão de La Brède e de Montesquieu, conhecido como Montesquieu (castelo de La Brède, próximo a Bordéus, 18 de janeiro de 1689 – Paris, 10 de fevereiro de 1755), foi um político, filósofo e escritor francês. Ficou famoso pela sua teoria da separação dos poderes, atualmente consagrada em muitas das modernas constituições internacionais, inclusive a Constituição Brasileira.\n[…]\nMontesquieu sofreu ao mesmo tempo uma avalanche de elogios e de represálias de todos os lados, e chegou a publicar, em 1750, um livro resposta chamado \"Defesa do Espírito das Leis\" (Défense de l'esprit des lois). Faleceu em 10 de fevereiro de 1755, e encontra-se sepultado na Igreja de São Sulpício, em Paris.\n[…]\nMontesquieu elaborou uma teoria política, que apareceu na sua obra mais famosa, O Espírito das Leis (De L'Esprit des Loix, 1748), inspirada em John Locke e no seu estudo das instituições políticas inglesas. É uma obra volumosa, na qual se discute a respeito das instituições e das leis, e busca-se compreender as diversas legislações existentes em diferentes lugares e épocas.\n[…]\nMontesquieu diz claramente que:\"Não haverá também liberdade se o poder de julgar não estiver separado do poder legislativo e do executivo, não existe liberdade, pois pode-se temer que o mesmo monarca ou o mesmo senado apenas estabeleçam leis tirânicas para executá-las tiranicamente\".\n[…]\nNo terceiro capítulo do livro três d'O Espírito das Leis Montesquieu afirma que o motor do estado democrático é a virtude, \"o amor à república; é um sentimento, e não uma série de conhecimentos\". Assim, compreendendo que quem executa as leis deve sentir-se submetido às próprias leis. Por isso, diferencia a democracia da monarquia. Em um estado monárquico, aqueles que executam as leis se posicionam acima delas.\n[…]\n\"Montesquieu\", Institut d'histoire des représentations et des idées dans les modernités (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Karl Marx",
      "descricao": "Filósofo, economista e teórico político alemão (1818–1883), autor de O Capital."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Karl Marx morreu em 1883 e está enterrado em que famoso cemitério de Londres?",
    "resposta": "Cemitério de Highgate",
    "fonte": [
      "https://en.wikipedia.org/wiki/Karl_Marx",
      "https://en.wikipedia.org/wiki/Highgate_Cemetery"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Karl_Marx",
        "situacao": "ok",
        "texto": "Karl Marx (German: [ˈkaʁl ˈmaʁks]; 5 May 1818 – 14 March 1883) was a German philosopher, social and political theorist, and revolutionary socialist. He developed the theory of historical materialism, analysing societal structure and change, particularly class struggle under capitalism, and predicting the system's ultimate replacement by communism.\n[…]\nHe became a leading figure in the International Workingmen's Association (First International), in which he battled the influence of anarchists led by Mikhail Bakunin and celebrated the Paris Commune of 1871. In his late studies and his Critique of the Gotha Programme (1875), Marx theorized on the transition to a communist society. He died in 1883 and was buried in Highgate Cemetery.\n[…]\nFollowing the death of his wife Jenny in December 1881, Marx developed a catarrh that kept him in ill health for the last 15 months of his life. It eventually brought on the bronchitis and pleurisy that killed him in London on 14 March 1883, when he died a stateless person at age 64. Family and friends in London buried his body in Highgate Cemetery (East), London, on 17 March 1883 in an area reserved for agnostics and atheists.\n[…]\nWorks by Karl Marx at LibriVox (public domain audiobooks)\n[…]\nKarl Marx at the Marxists Internet Archive.\n[…]\nInstitute of Marxism-Leninism of the Communist Party of the Soviet Union (1989). Karl Marx: a Biography (4th ed.). Moscow: Progress Publishers.\n[…]\nKrader, Lawrence, ed. (1974). The Ethnological Notebooks of Karl Marx (PDF) (2nd ed.). Assen: Van Gorcum. Archived (PDF) from the original on 20 October 2017. Retrieved 3 March 2018.\n[…]\nArchive of Karl Marx / Friedrich Engels Papers Archived 8 June 2018 at the Wayback Machine at the International Institute of Social History\n[…]\nNewspaper clippings about Karl Marx in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Highgate_Cemetery",
        "situacao": "ok",
        "texto": "Highgate Cemetery is a place of burial in North London, England, designed by architect Stephen Geary. There are approximately 170,000 people buried in around 53,000 graves across the West and East sides. Highgate Cemetery is notable both for some of the people buried there either in coffins or urns as well as for its de facto status as a nature reserve. The Cemetery is designated Grade I on the Re\n[…]\nStephen Geary, architect of Highgate Cemetery\n[…]\nMany famous or prominent people are buried on this side of Highgate cemetery; the most famous of which is perhaps that of Karl Marx, whose tomb was the site of attempted bombings on 2 September 1965 and in 1970. The tomb of Karl Marx is also a Grade I listed building for reasons of historical importance. Fireman's corner is a monument erected in the East side by widows and orphans of members of the London Fire Brigade in 1934. There are 97 firemen buried here.\n[…]\nSeveral of John Galsworthy's Forsyte Saga novels refer to Highgate Cemetery as the last resting place of the Forsytes; for example, Chapter XI, \"The Last of the Forsytes\", in To Let (1921).\n[…]\nFootage of Highgate appears in numerous British horror films, including Taste the Blood of Dracula (1970), Tales from the Crypt (1972) and From Beyond the Grave (1974).\n[…]\nIn That's Your Funeral (1972), the route taken in the Hearse Drivers' Grand Prix is mentioned as going \"from Golders Green to Woking via Karl Marx's grave in Highgate\".\n[…]\nAudrey Niffenegger's book Her Fearful Symmetry (2009) is set around Highgate Cemetery; she acted as a tour guide there while researching the book.\n[…]\nTracy Chevalier's book Falling Angels (2002) was set in and around Highgate Cemetery.\n[…]\nRobert Galbraith's sixth Cormoran Strike novel The Ink Black Heart (2022) revolves around a fictional cartoon set in Highgate Cemetery.\n[…]\nMedia related to Highgate Cemetery at Wikimedia Commons\n[…]\nHighgate Cemetery at the NY Times"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Karl_Marx",
        "situacao": "ok",
        "texto": "Karl Marx RSA (AFI: [ˈkaʁl ˈmaʁks]; Tréveris, 5 de maio de 1818 – Londres, 14 de março de 1883) foi um advogado, filósofo, economista, historiador, sociólogo, teórico político, jornalista e revolucionário socialista alemão. Nascido em Tréveris, Prússia, Marx estudou direito e filosofia nas universidades de Bona e Berlim. Casou-se com a crítica de teatro e ativista política alemã Jenny von Westphal\n[…]\nDevido às suas publicações políticas, Marx tornou-se apátrida e viveu no exílio com a sua mulher e filhos em Londres durante décadas, onde continuou a desenvolver o seu pensamento em colaboração com o pensador alemão Friedrich Engels e a publicar os seus escritos, pesquisando na Sala de Leitura do Museu Britânico. Os seus títulos mais conhecidos são o panfleto Manifesto Comunista de 1848 e o triplo volume O Capital (1867–1883).\n[…]\nDo casamento de Marx com Jenny von Westphalen, nasceram sete filhos, mas devido às más condições de vida que foram forçados a viver em Londres, apenas três sobreviveram à idade adulta. As crianças eram: Jenny Caroline (1844–1883), Jenny Laura (1845–1911), Edgar (1847–1855), Henry Edward Guy (\"Guido\"; 18479–1850), Jenny Eveline Frances (\"Franziska\"; 1851–52), Jenny Julia Eleanor (1855–1898) e mais um que morreu antes de ser nomeado (Julho, 1857).\n[…]\nDeprimido pela morte de sua esposa em dezembro de 1881, Marx desenvolveu, em consequência dos problemas de saúde que suportou ao longo de toda a vida, bronquite e pleurisia, que causaram seu falecimento em 1883. Foi enterrado na condição de apátrida, no Cemitério de Highgate, em Londres.\n[…]\nKarl Marx foi um dos poucos ideólogos que acompanharam todo o percurso de instabilidade política francesa pós-Revolução Francesa, revolução industrial e globalização sendo que influenciou muito na obra do autor e contribuiu para alimentar os debates políticos dentro da esquerda.\n[…]\nCadernos de Marx sobre a história da tecnologia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Hipátia",
      "descricao": "Filósofa e matemática neoplatônica de Alexandria, morta em 415."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A filósofa e matemática Hipátia, morta por uma multidão no ano 415, ensinava em que cidade egípcia?",
    "resposta": "Alexandria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hypatia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hypatia",
        "situacao": "ok",
        "texto": "Hypatia (born c. 350–370 – March 415 AD) was a Neoplatonist philosopher, astronomer, and mathematician who lived in Alexandria, at that time in the province of Egypt and a major city of the Roman Empire. In Alexandria, Hypatia was a prominent thinker who taught subjects including philosophy and astronomy, and in her lifetime was renowned as a great teacher and a wise counselor. Not the only fourth\n[…]\nToward the end of her life, Hypatia advised Orestes, the Roman prefect of Alexandria, who was in the midst of a political feud with Cyril, the bishop of Alexandria. Rumors spread accusing her of preventing Orestes from reconciling with Cyril and, in March 415 AD, she was murdered by a mob of Christians led by a lector named Peter.\n[…]\nAccording to Socrates Scholasticus, during the Christian season of Lent in March 415, a mob of Christians under the leadership of a lector named Peter raided Hypatia's carriage as she was travelling home. They dragged her into a building known as the Kaisarion, a former pagan temple and center of the Roman imperial cult in Alexandria that had been converted into a Christian church.\n[…]\nShe (anachronistically and incorrectly) concludes that Hypatia's writings were burned in the Library of Alexandria when it was destroyed. Major works of twentieth century literature contain references to Hypatia, including Marcel Proust's volume \"Within a Budding Grove\" from In Search of Lost Time, and Iain Pears's The Dream of Scipio.\n[…]\nIn Umberto Eco's 2002 novel Baudolino, the hero's love interest is a half-satyr, half-woman descendant of a female-only community of Hypatia's disciples, collectively known as \"hypatias\". Charlotte Kramer's 2006 novel Holy Murder: the Death of Hypatia of Alexandria portrays Cyril as an archetypal villain, while Hypatia is described as brilliant, beloved, and more knowledgeable of scripture than Cyril."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hip%C3%A1tia",
        "situacao": "ok",
        "texto": "Hipátia ou Hipácia (em grego clássico: Ὑπατία; romaniz.: Hypatía; Alexandria, c. 351/370 – Alexandria, 8 de março de 415) foi uma filósofa neoplatônica do Egito Romano. Foi a primeira mulher documentada como tendo sido matemática. Como chefe da escola platônica em Alexandria, também lecionou filosofia e astronomia.\n[…]\nHipátia era filha de Téon de Alexandria, um renomado filósofo, astrônomo, matemático, autor de diversas obras e professor em Alexandria. Criada em um ambiente de ideias e filosofia, tinha uma forte ligação com o pai, que lhe transmitiu, além de conhecimentos, a forte paixão pela busca de respostas para o desconhecido. Diz-se que ela, sob tutela e orientação paternas, submetia-se a uma rigorosa disciplina física, para atingir o ideal helênico de ter a mente sã em um corpo são.\n[…]\nHipátia estudou na Academia de Alexandria, onde ela tinha muito conhecimento em matemática, astronomia, filosofia, religião, poesia e artes. A oratória e a retórica também não foram descuidadas.\n[…]\nÀ frente da escola de Alexandria, Hipátia destacou-se como professora e diretora, desempenhando um papel central na transmissão da matemática, astronomia e filosofia neoplatônica no fim da Antiguidade. Sua fama como educadora ultrapassou o Egito, atraindo alunos de todo o mundo helenístico e romano.\n[…]\nA atuação de Hipátia ocorreu em um momento de intensas disputas políticas e religiosas em Alexandria, então uma das maiores cidades do Império Romano do Oriente. O início do século V foi marcado pela tensão entre diferentes comunidades — cristãos, judeus e pagãos —, que frequentemente se confrontavam nas ruas e também nas instâncias de poder. Nesse cenário, a filósofa ocupava posição de destaque como conselheira de figuras influentes, como o prefeito Orestes, com quem mantinha diálogo próximo.\n[…]\nMulheres na filosofia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Santo Agostinho",
      "descricao": "Filósofo e bispo cristão (354–430), autor de Confissões e A Cidade de Deus."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Santo Agostinho, autor de Confissões, nasceu em Tagaste, cidade que hoje pertence a que país africano?",
    "resposta": "Argélia",
    "distratores": [
      "Tunísia",
      "Egito",
      "Marrocos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Augustine_of_Hippo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Augustine_of_Hippo",
        "situacao": "ok",
        "texto": "Augustine of Hippo ( aw-GUST-in, US also  AW-gə-steen; Latin: Aurelius Augustinus Hipponensis; 13 November 354 – 28 August 430), also well-known as Saint Augustine, was a Christian theologian and philosopher from Thagaste, Numidia Cirtensis and the Bishop of Hippo Regius. He is generally regarded as one of the most influential philosophers in the history of the Western world, and is viewed as one \n[…]\nAugustine worked tirelessly to convince the people of Hippo to convert to Christianity. Though he had left his monastery, he continued to lead a monastic life in the episcopal residence.\n[…]\nShortly before Augustine's death, the Vandals, a Germanic tribe that had converted to Arianism, invaded Roman Africa. The Vandals besieged Hippo in the spring of 430 when Augustine entered his final illness. According to Possidius, one of the few miracles attributed to Augustine, the healing of an ill man, took place during the siege.\n[…]\nMuch of Augustine's conversion is dramatized in the oratorio La conversione di Sant'Agostino (1750) composed by Johann Adolph Hasse. The libretto for this oratorio, written by Duchess Maria Antonia of Bavaria, draws upon the influence of Metastasio (the finished libretto having been edited by him) and is based on an earlier five-act play Idea perfectae conversionis dive Augustinus written by the Jesuit priest Franz Neumayr.\n[…]\nAugustine of Hippo edited by James J. O'Donnell – texts, translations, introductions, commentaries, etc.\n[…]\n\"Saint Augustine of Hippo\" at the Christian Iconography website\n[…]\nAugustine of Hippo at EarlyChurch.org.uk – extensive bibliography and on-line articles\n[…]\nWorks by Augustine of Hippo in eBook form at Standard Ebooks\n[…]\nWorks by Augustine of Hippo at LibriVox (public domain audiobooks)\n[…]\nDigitized manuscript created in France between 1275 and 1325 with extract of Augustine of Hippo works at SOMNI\n[…]\nBlessed Augustine of Hippo: His Place in the Orthodox Church"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Agostinho_de_Hipona",
        "situacao": "ok",
        "texto": "Aurélio Agostinho de Hipona (em latim: Aurelius Augustinus Hipponensis; Tagaste, 13 de novembro de 354 – Hipona, 28 de agosto de 430), conhecido universalmente como Santo Agostinho, foi um dos mais importantes teólogos e filósofos nos primeiros séculos do cristianismo, cujas obras foram muito influentes no desenvolvimento do cristianismo e filosofia ocidental. Foi bispo de Hipona, uma cidade na pr\n[…]\nGrande parte do que sabemos sobre os anos finais de Agostinho foi relatada por seu amigo Possídio, o bispo de Calama (moderna Guelma, na Argélia), em sua obra Sancti Augustini Vita. Possídio admirava Agostinho como uma pessoa intelectualmente poderosa e de retórica arrebatadora que aproveitava todas as oportunidades para defender o cristianismo contra seus detratores.\n[…]\nNo entanto, uma passagem de sua Cidade de Deus, referente ao Apocalipse, pode indicar que Agostinho acreditava em uma exceção para crianças nascidas de pais cristãos.\n[…]\nAlém destas, Agostinho é também bastante conhecido por suas \"Confissões\", que é um relato pessoal de seus primeiros anos, e pela \"Cidade de Deus\" (De Civitate Dei; em 22 livros), que ele escreveu para restaurar a confiança aos seus companheiros cristãos abalados pelo saque de Roma pelos visigodos em 410.\n[…]\nAgostinho foi interpretado por Dary Berkani no filme para televisão de 1972 \"Augustine of Hippo\". Ele foi interpretado também por Franco Nero na mini-série de 2010 \"Augustine: The Decline of the Roman Empire\" e no filme de 2012 \"Restless Heart: The Confessions of Saint Augustine\" O nome moderno está ligado à Família Agostinelli.\n[…]\nBob Dylan gravou uma música chamada \"I Dreamed I Saw St. Augustine\" em seu álbum \"John Wesley Harding\". O artista pop Sting homenageou de certa forma as lutas de Agostinho contra o desejo na música \"Saint Augustine in Hell\" (\"Santo Agostinho no Inferno\") que aparece no álbum de 1993 do cantor, \"Ten Summoner's Tales\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Jeremy Bentham",
      "descricao": "Filósofo e jurista inglês (1748–1832), fundador do utilitarismo moderno."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O esqueleto de Jeremy Bentham, vestido com suas roupas e com uma cabeça de cera, fica exposto em que universidade?",
    "resposta": "University College London",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jeremy_Bentham",
      "https://en.wikipedia.org/wiki/Auto-icon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jeremy_Bentham",
        "situacao": "ok",
        "texto": "Jeremy Bentham (; 4 February 1747/8 O.S. [15 February 1748 N.S.] – 6 June 1832) was an English philosopher, jurist, and social reformer regarded as the founder of modern utilitarianism.\n[…]\nOn his death, Bentham left manuscripts amounting to an estimated 30 million words, which are now largely held by University College London's Special Collections (c. 60,000 manuscript folios) and the British Library (c. 15,000 folios). University College London also holds a collection of c.500 books either by, about, or owned by Jeremy Bentham. Other material held by UCL includes a list of common subjects (likely by Bentham).\n[…]\nIn 1959, the Bentham Committee was established under the auspices of University College London with the aim of producing a definitive edition of Bentham's writings. It set up the Bentham Project to undertake the task, and the first volume in The Collected Works of Jeremy Bentham was published in 1968. The Collected Works are providing many unpublished works, as well as much-improved texts of works already published. To date, 38 volumes have appeared; the complete edition is projected to total 80.\n[…]\nTo assist in this task, the Bentham papers at UCL are being digitised by crowdsourcing their transcription. Transcribe Bentham is a crowdsourced manuscript transcription project, run by University College London's Bentham Project, in partnership with UCL's UCL Centre for Digital Humanities, UCL Library Services, UCL Learning and Media Services, the University of London Computer Centre, and the online community.\n[…]\nBentham Book Collection at University College London\n[…]\nBentham Papers at University College London\n[…]\nCommon Subjects List (MS ADD 10) at University College London"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Auto-icon",
        "situacao": "ok",
        "texto": "Jeremy Bentham (; 4 February 1747/8 O.S. [15 February 1748 N.S.] – 6 June 1832) was an English philosopher, jurist, and social reformer regarded as the founder of modern utilitarianism.\n[…]\nOn his death, Bentham left manuscripts amounting to an estimated 30 million words, which are now largely held by University College London's Special Collections (c. 60,000 manuscript folios) and the British Library (c. 15,000 folios). University College London also holds a collection of c.500 books either by, about, or owned by Jeremy Bentham. Other material held by UCL includes a list of common subjects (likely by Bentham).\n[…]\nIn 1959, the Bentham Committee was established under the auspices of University College London with the aim of producing a definitive edition of Bentham's writings. It set up the Bentham Project to undertake the task, and the first volume in The Collected Works of Jeremy Bentham was published in 1968. The Collected Works are providing many unpublished works, as well as much-improved texts of works already published. To date, 38 volumes have appeared; the complete edition is projected to total 80.\n[…]\nTo assist in this task, the Bentham papers at UCL are being digitised by crowdsourcing their transcription. Transcribe Bentham is a crowdsourced manuscript transcription project, run by University College London's Bentham Project, in partnership with UCL's UCL Centre for Digital Humanities, UCL Library Services, UCL Learning and Media Services, the University of London Computer Centre, and the online community.\n[…]\nBentham Book Collection at University College London\n[…]\nBentham Papers at University College London\n[…]\nCommon Subjects List (MS ADD 10) at University College London"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jeremy_Bentham",
        "situacao": "ok",
        "texto": "Jeremy Bentham ([ˈbɛnθəm]; 4 de fevereiro de 1747/8 O.S. [15 de fevereiro de 1748 O.S.] – 6 de junho de 1832) foi um filósofo, jurista e reformador social inglês, considerado o fundador do utilitarismo moderno.\n[…]\nA Faculdade de Direito do University College London ocupa a Bentham House, ao lado do campus principal da UCL.\n[…]\nCom sua morte, Bentham deixou manuscritos totalizando cerca de 30 milhões de palavras, que agora são amplamente mantidos pelo Acervo Especial do University College London (c. 60.000 fólios de manuscritos) e pela British Library (c. 15.000 fólios). O University College London também mantém uma coleção de cerca de 500 livros sobre, de ou pertencentes a Jeremy Bentham.\n[…]\nEm 1959, o Comitê Bentham foi estabelecido sob os auspícios do University College London com o objetivo de produzir uma edição definitiva dos escritos de Bentham. Ele criou o Projeto Bentham para realizar a tarefa, e o primeiro volume das Obras Coletadas de Jeremy Bentham foi publicado em 1968. As Obras Coletadas estão fornecendo muitas obras não publicadas, bem como textos muito melhorados de obras já publicadas.\n[…]\nHarte, Negley (1998). «The owner of share no. 633: Jeremy Bentham and University College London». In:  Fuller, Catherine. The Old Radical: representations of Jeremy Bentham. London: University College London\n[…]\nKelly, Paul J. (1990). Utilitarianism and distributive justice: Jeremy Bentham and the civil law. [S.l.]: Oxford University Press. ISBN 978-0198254188\n[…]\nSchofield, Philip (2006). Utility and Democracy: The Political Thought of Jeremy Bentham. Oxford: Oxford University Press. ISBN 978-0198208563\n[…]\nBentham Book Collection no University College London\n[…]\nBentham Papers no University College London",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Pedagogia do Oprimido",
      "descricao": "Livro do educador e filósofo brasileiro Paulo Freire, escrito em 1968."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Paulo Freire escreveu Pedagogia do Oprimido durante o exílio que se seguiu ao golpe de 1964. Em que país?",
    "resposta": "Chile",
    "distratores": [
      "Bolívia",
      "Uruguai",
      "Suíça"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pedagogy_of_the_Oppressed",
      "https://en.wikipedia.org/wiki/Paulo_Freire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pedagogy_of_the_Oppressed",
        "situacao": "ok",
        "texto": "Pedagogy of the Oppressed (Portuguese: Pedagogia do Oprimido) is a book by Brazilian Marxist educator Paulo Freire, written in Portuguese between 1967 and 1968, but first published in Spanish in 1968. The book is considered one of the foundational texts of critical pedagogy, and proposes a pedagogy with a new relationship between teacher, student, and society.\n[…]\nDue to the 1964 Brazilian coup d'état, where a military dictatorship was put in place with the support of the United States, Paulo Freire was exiled from his home country, an exile that lasted 16 years. After a brief stay in Bolivia, he moved to Chile in November 1964 and stayed until April 1969 when he accepted a temporary position at Harvard University.\n[…]\nHis four-and-a-half year stay in Chile impacted him intellectually, pedagogically, and ideologically, and contributed significantly to the theory and analysis he presents in Pedagogy of the Oppressed. In Freire's own words:When I wrote [Pedagogy of the Oppressed] I was already completely convinced of the problem of social classes.\n[…]\nStern also wrote in 2006 that heirs to Freire's ideas have taken them to mean that since all education is political: \"leftist math teachers who care about the oppressed have a right, indeed a duty, to use a pedagogy that, in Freire's words, 'does not conceal—in fact, which proclaims—its own political character'\".\n[…]\nA 2019 article in British internet magazine Spiked said that \"In 2016, the Open Syllabus Project catalogued the 100 most requested titles on its service by English-speaking universities: the only Brazilian on its list was Freire's Pedagogy of the Oppressed.\"\n[…]\nTheatre pedagogy\n[…]\nJames D. Kirylo, Pedagogy of the Oppressed: The Publication Process of Paulo Freire's Seminal Work, in Social Studies Research and Practice, 2012.\n[…]\nQuotations related to Pedagogy of the Oppressed at Wikiquote"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Paulo_Freire",
        "situacao": "ok",
        "texto": "Paulo Reglus Neves Freire (19 September 1921 – 2 May 1997) was a Brazilian educator and Marxist philosopher whose work has affected global thought on education. He is best known for Pedagogy of the Oppressed, in which he reimagines teaching as a political act of liberation rather than critical cultural  transmission of values.\n[…]\nThe 1964 Brazilian coup d'état put an end to Freire's literacy effort, as the ruling military junta did not endorse it. Freire was subsequently imprisoned as a traitor for 70 days. After a brief exile in Bolivia, Freire worked in Chile for five years for the Christian Democratic Agrarian Reform Movement and the United Nations Food and Agriculture Organization. In 1967, Freire published his first book, Education as the Practice of Freedom.\n[…]\nFreire's major exponents in North America are bell hooks, Henry Giroux, Peter McLaren, Donaldo Macedo, Antonia Darder, Joe L. Kincheloe, Shirley R. Steinberg, Carlos Alberto Torres, and Ira Shor. One of McLaren's edited texts, Paulo Freire: A Critical Encounter, expounds upon Freire's impact in the field of critical pedagogy. McLaren has also provided a comparative study concerning Paulo Freire and Argentinian revolutionary icon Che Guevara.\n[…]\nThe Paulo and Nita Freire Project for International Critical Pedagogy was founded at McGill University. Here Joe L. Kincheloe and Shirley R. Steinberg worked to create a dialogical forum for critical scholars around the world to promote research and re-create a Freirean pedagogy in a multinational domain. After the death of Kincheloe, the project was transformed into a virtual global resource.\n[…]\n(With Ana Maria Araújo Freire) Pedagogy of Hope: Reliving Pedagogy of the Oppressed. New York: Continuum, 1994.\n[…]\nPedagogy of the Oppressed by Paulo Freire\n[…]\nA dialogue with Paulo Freire and Ira Shor (1988)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pedagogia_do_Oprimido",
        "situacao": "ok",
        "texto": "Pedagogia do Oprimido é o mais conhecido trabalho do educador brasileiro Paulo Freire. É considerado pelo próprio autor como uma continuação do seu primeiro livro, Educação Como Prática da Liberdade.\n[…]\nEscrito durante o exílio no Chile, onde Freire assessorou o Instituto do Desenvolvimento Agropecuário e o Ministério da Educação, o livro foi originalmente publicado em espanhol em 1968. Na época, o Brasil vivia a ditadura militar. Em virtude disso, o livro foi publicado no país somente em 1974. Nessa época, já havia traduções para o inglês, italiano, francês e alemão. Em Portugal, o livro foi publicado pela primeira vez em 1972 pelas Edições Afrontamento.\n[…]\n“Ele se vincula a formas de existência mais solidárias, emancipatórias e menos consumistas, menos competitivas, menos capitalistas. Acho que essa é a sua mensagem, desde a Pedagogia do Oprimido até a Pedagogia da Indignação (...). É difícil vincular a Pedagogia do Oprimido apenas às suas experiências no nordeste. Ela também se vincula às experiências no Chile, na Bolívia, às revoltas universitárias de 1968.\n[…]\nPedagogia do Oprimido é dedicado a esses grupos e é profundamente marcado pelas condições da periferia.”, avalia a docente da Faculdade de Educação (FE) da Unicamp, Debora Mazza, que foi sua aluna no período em que Freire foi professor na mesma Faculdade.\n[…]\nAinda mais sobre a teoria antidialógica, Paulo Freire, ressalta que a referida teoria tanto traz a marca da opressão, da invasão cultural camuflada, da falsa admiração do mundo, como lança mão de mitos para manter o status quo e manter a desunião dos oprimidos, os quais divididos ficam enfraquecidos e tornam-se facilmente dirigidos e manipulados.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Manifesto Comunista",
      "descricao": "Panfleto político de Karl Marx e Friedrich Engels, publicado em Londres em 1848."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Manifesto Comunista, de Marx e Engels, foi publicado em que ano, marcado por revoluções em vários países da Europa?",
    "resposta": "1848",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Communist_Manifesto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Communist_Manifesto",
        "situacao": "ok",
        "texto": "The Communist Manifesto, originally the Manifesto of the Communist Party, is a political pamphlet written by Karl Marx and Friedrich Engels. It was commissioned by the Communist League and published in London in 1848.\n[…]\nA French translation of the Manifesto was published just before the June Days Uprising was crushed. Its influence in the Europe-wide Revolutions of 1848 was restricted to Germany, where the Cologne-based Communist League and its newspaper Neue Rheinische Zeitung, edited by Marx, played an important role. Within a year of its establishment, in May 1849, the Zeitung was suppressed; Marx was expelled from Germany and had to seek refuge in London.\n[…]\nIn 1851, members of the Communist League's central board were arrested by the Prussian Secret Police. At their trial in Cologne 18 months later in November 1852, they were sentenced to 3–6 years' imprisonment. For Engels, the revolution was \"forced into the background by the reaction that began with the defeat of the Paris workers in June 1848, and was finally excommunicated 'by law' in the conviction of the Cologne Communists in November 1852\".\n[…]\nAfter the defeat of the 1848 revolutions, the Manifesto fell into obscurity, where it remained throughout the 1850s and 1860s. Hobsbawm says that by November 1850 the Manifesto \"had become sufficiently scarce for Marx to think it worth reprinting section III [...] in the last issue\" of his short-lived London newspaper, Neue Rheinische Zeitung.\n[…]\nMarx, Karl; Engels, Friedrich (1977) [1848]. Manifesto of the Communist Party (2nd revised ed.). Moscow: Progress.\n[…]\nMarx, Karl; Engels, Friedrich (2004) [1848]. Manifesto of the Communist Party (PDF). Marxists Internet Archive. Retrieved 14 March 2015."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Manifesto_Comunista",
        "situacao": "ok",
        "texto": "O Manifesto Comunista, originalmente denominado Manifesto do Partido Comunista, é um panfleto político escrito por Karl Marx e Friedrich Engels. Foi encomendado pela Liga dos Comunistas e publicado em Londres em 1848.\n[…]\nPublicado em meio às Revoluções de 1848 na Europa, o manifesto tornou-se um dos documentos políticos mais influentes do mundo. \"Um espectro ronda a Europa — o espectro do comunismo.\" e \"Proletários de todos os países, uni-vos!\" são duas frases emblemáticas que emolduram o texto, marcando, respectivamente, sua abertura e seu encerramento; a última foi reformulada e popularizada como um célebre lema de solidariedade da classe trabalhadora.\n[…]\nUma tradução francesa do Manifesto foi publicada pouco antes de a insurreição de junho de 1848 ser esmagada. Sua influência nas Revoluções de 1848 em toda a Europa limitou-se à Alemanha, onde a Liga dos Comunistas, sediada em Colônia, e seu jornal, o Neue Rheinische Zeitung, editado por Marx, desempenharam papel importante. Menos de um ano após sua fundação, em maio de 1849, o Zeitung foi suprimido; Marx foi expulso da Alemanha e teve de refugiar-se em Londres.\n[…]\nNas quatro décadas seguintes, à medida que partidos social-democratas se difundiam pela Europa e por outras partes do mundo, a publicação do Manifesto também cresceu, alcançando centenas de edições em trinta línguas. Marx e Engels escreveram um novo prefácio para a edição russa de 1882, traduzida por Gueorgui Plekhanov em Genebra. Nele, perguntavam-se se a Rússia poderia transformar-se diretamente em uma sociedade comunista ou se primeiro se tornaria capitalista, como outros países europeus.\n[…]\nManifesto do Partido Comunista",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Marco Aurélio",
      "descricao": "Imperador romano e filósofo estoico (121–180), autor das Meditações."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Marco Aurélio, o imperador romano que praticava a filosofia estoica, governou em que século depois de Cristo?",
    "resposta": "Século dois",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marcus_Aurelius"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marcus_Aurelius",
        "situacao": "ok",
        "texto": "Marcus Aurelius Antoninus ( or-EE-lee-əs; Latin: [ˈmaːrkʊs au̯ˈreːli.us antoːˈniːnʊs]; 26 April 121 – 17 March 180) was Roman emperor from 161 to 180 and a Stoic philosopher. He was a member of the Nerva–Antonine dynasty, the last of the rulers later known as the Five Good Emperors and the last emperor of the Pax Romana, an age of relative peace, calm, and stability for the Roman Empire lasting fr\n[…]\nMarcus became, in official titulature, Imperator Caesar Marcus Aurelius Antoninus Augustus; Lucius, forgoing his name Commodus and taking Marcus's family name Verus, became Imperator Caesar Lucius Aurelius Verus Augustus. It was the first time that Rome was ruled by two emperors.\n[…]\nThe equestrian statue of Marcus Aurelius in Rome is the only Roman equestrian statue which has survived into the modern period. Crafted of bronze in c. 175, it stands 11.6 ft (3.5 m) and is now located in the Capitoline Museums of Rome. The emperor's hand is outstretched in an act of clemency offered to a bested enemy, while his weary facial expression due to the stress of leading Rome into nearly constant battles perhaps represents a break with the classical tradition of sculpture.\n[…]\nAnnia Aurelia Fadilla (born 159), married Marcus Peducaeus Plautius Quintillus, had issue\n[…]\nMarcus Annius Verus Caesar (162–169)\n[…]\nThe Thoughts of the Emperor Marcus Aurelius Antoninus\n[…]\n\"Marcus Aurelius Antoninus\". Catholic Encyclopedia. Vol. 2. 1907.\n[…]\n\"Marcus Aurelius Antoninus\". Encyclopædia Britannica. Vol. 17 (11th ed.). 1911. pp. 693–696.\n[…]\n\"Aurelius Antoninus, Marcus\". The New Student's Reference Work. 1914.\n[…]\nWorks by Marcus Aurelius in eBook form at Standard Ebooks\n[…]\nWorks by Marcus Aurelius at Project Gutenberg\n[…]\nWorks by or about Marcus Aurelius at the Internet Archive\n[…]\nWorks by Marcus Aurelius at LibriVox (public domain audiobooks)\n[…]\nMarcus Aurelius Archived 27 June 2018 at the Wayback Machine at the Internet Encyclopedia of Philosophy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Marco_Aur%C3%A9lio",
        "situacao": "ok",
        "texto": "Marco Aurélio (Roma, 26 de abril de 121 – Vindobona ou Sirmio, 17 de março de 180) foi o imperador romano de 161 até sua morte. Era filho de Domícia Lucila e do pretor Marco Ânio Vero, sobrinho do imperador Adriano. Seu pai morreu quando tinha três anos e ele foi criado por sua mãe e avô. Adriano adotou Antonino Pio, tio de Marco Aurélio, como novo herdeiro em 138. Antonino, por sua vez, adotou Ma\n[…]\nAntonino Pio morreu em 161 e Marco Aurélio ascendeu ao trono junto com Lúcio Vero, a primeira vez que o Império Romano foi governado por dois imperadores. Durante seu reinado, Roma participou de vários conflitos militares. No leste, houve uma campanha bem-sucedida contra a Pártia e Armênia, enquanto Marco Aurélio derrotou os marcomanos, quados e sármatas jáziges nas Guerras Marcomanas. Economicamente, ele modificou a pureza do denário, a moeda romana.\n[…]\nQuando Antonino faleceu, em 161, Marco Aurélio subiu ao trono em conjunto com Vero, na condição de serem ambos co-imperadores, ressalvando, no entanto, que a sua posição seria superior à de Vero. Marco Aurélio na prática governaria sozinho. Como ele já detinha poderes imperiais a transição foi pacífica. O Senado logo lhe atribuiu os títulos de imperador e augusto, e pouco depois foi formalmente eleito pontífice máximo, sacerdote-chefe dos cultos oficiais.\n[…]\nEm contrapartida, com Cômodo, passando pelos Severos, inicia-se o 'declínio e queda' do Império\". Para Igor Cardoso, a influência da narrativa de Gibbon está presente na obra de importantes historiadores contemporâneos que se dedicaram a Marco Aurélio, como Anthony Birley e Pierre Hadot, dentre outros, \"ao apresentarem o imperador Marco Aurélio como bom governante em razão da aplicação de algumas teorias estoicas em sua administração\".\n[…]\nTito Élio Aurélio (n. depois de 150, m. antes de 7 de março de 161);[carece de fontes]?\n[…]\nMedia relacionados com Marco Aurélio no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Jean-Jacques Rousseau",
      "descricao": "Filósofo genebrino (1712–1778), autor de O Contrato Social e Emílio."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Rousseau escreveu Emílio, um tratado sobre a educação das crianças. Quantos filhos ele próprio entregou a um orfanato?",
    "resposta": "Cinco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jean-Jacques_Rousseau"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jean-Jacques_Rousseau",
        "situacao": "ok",
        "texto": "Jean-Jacques Rousseau (UK: , US: ; French: [ʒɑ̃ʒak ʁuso]; 28 June 1712 – 2 July 1778) was a Genevan philosophe, writer, and composer. His political philosophy influenced the progress of the Age of Enlightenment throughout Europe, as well as aspects of the French Revolution and the development of modern political, economic, and educational thought.\n[…]\nAlso in 1772, Rousseau began writing Rousseau, Judge of Jean-Jacques, which was another attempt to reply to his critics. He completed writing it in 1776. The book is in the form of three dialogues between two characters; a \"Frenchman\" and \"Rousseau\", who argue about the merits and demerits of a third character—an author called Jean-Jacques.\n[…]\nConfessions of Jean-Jacques Rousseau (Les Confessions), 1770, published 1782\n[…]\nRousseau Judge of Jean-Jacques, published 1782 (Rousseau juge de Jean-Jacques)\n[…]\nThe Political writings of Jean-Jacques Rousseau, edited with introduction and notes by C.E.Vaughan, Blackwell, Oxford, 1962. (In French but the introduction and notes are in English).\n[…]\nPublications by and about Jean-Jacques Rousseau in the catalogue Helveticat of the Swiss National Library\n[…]\nWorks by Jean-Jacques Rousseau at the Biodiversity Heritage Library\n[…]\nWorks by Jean-Jacques Rousseau at LibriVox (public domain audiobooks)\n[…]\nWorks by Jean-Jacques Rousseau at Project Gutenberg\n[…]\nWorks by or about Jean-Jacques Rousseau at the Internet Archive\n[…]\nWorks by Jean-Jacques Rousseau in eBook form at Standard Ebooks\n[…]\nFree scores by Jean-Jacques Rousseau at the International Music Score Library Project (IMSLP)\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Jean-Jacques Rousseau\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658.\n[…]\n\"Rousseau, Jean Jacques\" . Encyclopædia Britannica. Vol. 23 (11th ed.). 1911. pp. 775–778."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jean-Jacques_Rousseau",
        "situacao": "ok",
        "texto": "Jean-Jacques Rousseau (Genebra, 28 de junho de 1712 – Ermenonville, 2 de julho de 1778) foi escritor, filósofo e músico. Sua mãe morreu poucos dias depois de seu nascimento, e ele cresceu entre a casa do pai relojoeiro e a de parentes, antes de sair de Genebra ainda adolescente. Os livros lhe deram projeção por toda a Europa, mas também o puseram em conflito com autoridades religiosas e civis na F\n[…]\nSeus adversários lhe cobraram então a decisão de entregar aos Enfants-Trouvés os cinco filhos que, segundo seu próprio relato, teve com Thérèse Levasseur, com quem conviveu por mais de trinta anos e cuja união reconheceu publicamente em 1768. Condenado pelas autoridades francesas e impedido de permanecer em Genebra e em Berna, refugiou-se na Inglaterra em 1766.\n[…]\nEm 1745, Rousseau instalou-se no hotel Saint-Quentin, na rua dos Cordiers, e iniciou uma relação com a trabalhadora de lavanderia Thérèse Levasseur, com quem realizaria uma cerimônia de união em 1768. A relação lhe trouxe a afeição que procurava, mas também o encargo de ajudar a família dela. Segundo o próprio relato de Rousseau, Thérèse teve cinco filhos, que ele entregou ao hospital dos Enfants-Trouvés logo após o nascimento.\n[…]\nA publicação de Rousseau juge de Jean-Jacques em 1780 expôs ao público suas ideias de perseguição. A primeira parte das Confissões, publicada em 1782, também recebeu críticas. Isso não impediu o crescimento do culto à sua memória nem a ampla circulação de seus retratos, comparável à dos retratos de Voltaire, morto cinco semanas antes dele.\n[…]\nAo tratar da educação patriótica, Rousseau argumenta que o amor à pátria deve apoiar-se no respeito à liberdade e à propriedade de cada cidadão, para que a defesa da comunidade também corresponda a seus interesses. Defende ainda que as crianças aprendam a amar tanto a pátria quanto as outras pessoas.\n[…]\nEmílio, ou Da Educação, tratado sobre a formação da criança.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "John Stuart Mill",
      "descricao": "Filósofo e economista britânico (1806–1873), autor de Sobre a Liberdade."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "John Stuart Mill recebeu do pai uma educação rígida em casa. Com quantos anos de idade começou a aprender grego?",
    "resposta": "Três anos",
    "fonte": [
      "https://en.wikipedia.org/wiki/John_Stuart_Mill"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/John_Stuart_Mill",
        "situacao": "ok",
        "texto": "John Stuart Mill (20 May 1806 – 7 May 1873) was an English philosopher, political economist, and politician. He was a paradigmatic philosopher of liberalism and has been described as \"the most influential English-speaking philosopher of the nineteenth century\" by the Stanford Encyclopedia of Philosophy. He conceived of liberty as justifying the freedom of the individual in opposition to unlimited \n[…]\nLópez, Rosario (2016). Contexts of John Stuart Mill's Liberalism: Politics and the Science of Society in Victorian Britain. Baden-Baden, Nomos. ISBN 978-3848736959.\n[…]\nMill, John Stuart (2011). A System of Logic, Ratiocinative and Inductive (Classic Reprint). Forgotten Books. ISBN 978-1440090820.\n[…]\nMill, John Stuart (1981). \"Autobiography\". In Robson, John (ed.). Collected Works, volume XXXI. University of Toronto Press. ISBN 978-0710007186.\n[…]\nMinto, William; Mitchell, John Malcolm (1911). \"Mill, John Stuart\" . Encyclopædia Britannica. Vol. 18 (11th ed.). pp. 454–459.\n[…]\nJohn Stuart Mill's library Archived 24 July 2016 at the Wayback Machine, Somerville College Library in Oxford holds ≈ 1700 volumes owned by John Stuart Mill and his father James Mill, many containing their marginalia\n[…]\n\"John Stuart Mill (Obituary Notice, Tuesday, November 4, 1873)\". Eminent Persons: Biographies reprinted from The Times. Vol. I (1870–1875). Macmillan & Co. 1892. pp. 195–224. hdl:2027/uc2.ark:/13960/t6n011x45 – via HathiTrust.\n[…]\nPortraits of John Stuart Mill at the National Portrait Gallery, London\n[…]\nJohn Stuart Mill Archived 17 April 2019 at the Wayback Machine on Google Scholar\n[…]\nJohn Stuart Mill, biographical profile, including quotes and further resources, at Utilitarianism.net.\n[…]\nWorks by John Stuart Mill at Project Gutenberg\n[…]\nWorks by or about John Stuart Mill at the Internet Archive\n[…]\nWorks by John Stuart Mill at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/John_Stuart_Mill",
        "situacao": "ok",
        "texto": "John Stuart Mill (Londres, 20 de maio de 1806 – Avignon, 8 de maio de 1873) foi um filósofo, lógico e economista britânico. É considerado por muitos como o filósofo de língua inglesa mais influente do século XIX.\n[…]\nJohn Stuart Mill nasceu na casa do seu pai em Pentonville, Londres, sendo o primeiro filho do filósofo escocês radicado na Inglaterra James Mill. John foi educado pelo pai, com a assistência de Jeremy Bentham e Francis Place. Foi-lhe dada uma educação rigorosa e foi deliberadamente escudado de rapazes da mesma idade.\n[…]\n1809: com apenas três anos de idade, o pequeno Mill começa a aprender grego; o pai é que instrui Mill, rejeitando o ensino institucional e apostando tudo na tentativa de criar um gênio intelectual, capaz de defender o utilitarismo do tio, Bentham; as obras que Stuart leu em tenra idade são imensas; dos oito aos doze anos Stuart lia grego e latim no original;\n[…]\nO trabalho de Mill é claramente utilitarista e ele argumenta usando três considerações: o bem maior imediato, o enriquecimento da sociedade e o desenvolvimento individual. Ele defende uma reforma na legislação do casamento, pois este é reduzido a um acordo comercial. Junto com outras propostas, apoia a mudança das leis de herança, que permitiriam às mulheres a manter suas próprias propriedades e trabalharem fora de casa, ganhando independência e estabilidade financeira.\n[…]\nA crítica de Mill sobre as tradicionais doutrinas religiosas, as instituições e sua promoção da “religião da humanidade”, também dependia, em grande medida, sobre suas preocupações sobre a cultura humana e a educação.\n[…]\n«John Stuart Mill». - Stanford Encyclopedia of Philosophy\n[…]\n«John Stuart Mill». - Utilitarianism\n[…]\n«John Stuart Mill». - Newschool",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Paradoxos de Zenão",
      "descricao": "Argumentos de Zenão de Eleia, do século cinco a.C., que questionam a possibilidade do movimento."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Num famoso paradoxo de Zenão de Eleia, o veloz Aquiles nunca consegue alcançar que adversário numa corrida?",
    "resposta": "Uma tartaruga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zeno%27s_paradoxes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zeno%27s_paradoxes",
        "situacao": "ok",
        "texto": "Zeno's paradoxes are a series of philosophical arguments presented by the ancient Greek philosopher Zeno of Elea (c. 490–430 BC), primarily known through the works of Plato, Aristotle, and later commentators like Simplicius of Cilicia. Zeno devised these paradoxes to support his teacher Parmenides's philosophy of monism, which posits that despite people's sensory experiences, reality is singular a\n[…]\nIn the arrow paradox, Zeno states that for motion to occur, an object must change the position which it occupies. He gives an example of an arrow in flight. He states that at any one (durationless) instant of time, the arrow is neither moving to where it is, nor to where it is not.\n[…]\nThe second of the Ten Theses of Hui Shi suggests knowledge of infinitesimals: That which has no thickness cannot be piled up; yet it is a thousand li in dimension. Among the many puzzles of his recorded in the Zhuangzi is one very similar to Zeno's Dichotomy:  The Mohist canon appears to propose a solution to this paradox by arguing that in moving across a measured length, the distance is not covered in successive fractions of the length, but in one stage.\n[…]\n\"What the Tortoise Said to Achilles\", written in 1895 by Lewis Carroll, describes a paradoxical infinite regress argument in the realm of pure logic. It uses Achilles and the Tortoise as characters in a clear reference to Zeno's paradox of Achilles.\n[…]\nDowden, Bradley. \"Zeno’s Paradoxes.\" Entry in the Internet Encyclopedia of Philosophy.\n[…]\nZeno's Paradox: Achilles and the Tortoise by Jon McLoone, Wolfram Demonstrations Project.\n[…]\nKevin Brown on Zeno and the Paradox of Motion[link removed]\n[…]\nThis article incorporates material from Zeno's paradox on PlanetMath, which is licensed under the Creative Commons Attribution/Share-Alike License.\n[…]\nGrime, James. \"Zeno's Paradox\". Numberphile. Brady Haran. Archived from the original on 2018-10-03. Retrieved 2013-04-13."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paradoxos_de_Zen%C3%A3o",
        "situacao": "ok",
        "texto": "Os paradoxos de Zenão, atribuídos ao filósofo pré-socrático Zenão de Eleia, são argumentos utilizados para provar a inconsistência dos conceitos de multiplicidade, divisibilidade e movimento. Através de um método dialético que antecipou Sócrates, Zenão procurava, partindo das premissas de seus oponentes, reduzi-las ao absurdo. Com isso, ele sustentava o ponto de fé dos eleáticos e de seu mestre Pa\n[…]\nAristóteles escreve na Física, 239b9 (DK29A25) que Zenão enunciou quatro argumentos contra o movimento, conhecidos como os paradoxos do estádio, de Aquiles e a tartaruga, da flecha voando e das filas em movimento.\n[…]\nAnalogamente, o paradoxo de Aquiles e da tartaruga tem sua interpretação mudada conforme a existência ou não da última, gerando o denominado Paradoxo quântico de Zenão, que em determinadas condições relacionadas à medição, Aquiles nunca alcançaria a tartaruga.\n[…]\nAo se afirmar que, por tal argumento explícito acima, Aquiles nunca alcançará a tartaruga, Zenão desconsidera qualquer reflexão sobre o que é o tempo. A conclusão de que a tartaruga sempre estará à frente se sustenta sobre o argumento de infinitos deslocamentos simultâneos, de Aquiles e da tartaruga, mas que representam sempre um décimo em relação ao deslocamento anterior. Analogamente, o tempo transcorrido para cada deslocamento irá ser de um décimo do tempo do deslocamento anterior.\n[…]\nA solução clássica para esse paradoxo envolve a utilização do conceito de limite e convergência de séries numéricas. O paradoxo surge ao supor intuitivamente que a soma de infinitos intervalos de tempo é infinita, de tal forma que seria necessário passar um tempo infinito para Aquiles alcançar a tartaruga. No entanto, os infinitos intervalos de tempo descritos no paradoxo formam uma progressão geométrica e a sua soma converge para um valor finito, em que Aquiles encontra a tartaruga.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Virtudes cardeais",
      "descricao": "Conjunto de quatro virtudes morais descrito desde Platão e adotado pela tradição cristã."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Prudência, justiça e temperança formam as quatro virtudes cardeais junto com que outra virtude?",
    "resposta": "Fortaleza",
    "distratores": [
      "Caridade",
      "Esperança",
      "Humildade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cardinal_virtues"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cardinal_virtues",
        "situacao": "ok",
        "texto": "The cardinal virtues are four virtues of mind and character in classical philosophy. They are prudence, justice, fortitude, and temperance. They form a virtue theory of ethics. The term cardinal comes from the Latin cardo (hinge); these four virtues are called \"cardinal\" because all other virtues fall under them and hinge upon them.\n[…]\nPhilo of Alexandria, a Hellenistic Jewish philosopher, also recognized the four cardinal virtues as prudence, temperance, courage, and justice. In his writings, he states:\n[…]\nVirtue may be defined as a habit of mind (animi) in harmony with reason and the order of nature. It has four parts: wisdom (prudentiam), justice, courage, temperance.\n[…]\nAnd we know that there are four cardinal virtues - temperance, justice, prudence, and fortitude.\n[…]\nFor these four virtues (would that all felt their influence in their minds as they have their names in their mouths!), I should have no hesitation in defining them: that temperance is love giving itself entirely to that which is loved; fortitude is love readily bearing all things for the sake of the loved object; justice is love serving only the loved object, and therefore ruling rightly; prudence is love distinguishing with sagacity between what hinders it and what helps it.\n[…]\nBecause of this reference, a group of seven virtues is sometimes listed by adding the four cardinal virtues (prudence, temperance, fortitude, justice) and three theological virtues (faith, hope, charity).\n[…]\nFor as much as they have thought proper to distribute virtue into four divisions - prudence, justice, fortitude, and temperance - and as each of these divisions has its own virtues, faith is among the parts of justice, and has the chief place with as many of us as know what that saying means, ‘The just shall live by faith.’\n[…]\nTemperance\n[…]\nPrudence\n[…]\nTheological virtues – Christian ethics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Virtudes_cardinais",
        "situacao": "ok",
        "texto": "A prudência, a justiça, a fortaleza e a temperança são quatro virtudes morais de conduta designadas como virtudes cardeais. Inicialmente enunciadas por Platão, no Livro IV da República, 426-435, no contexto da tradição filosófica clássica, exerceram grande influência no pensamento posterior do cristianismo.\n[…]\nO termo cardeal provém do latim cardo (dobradiça); estas quatro virtudes são chamadas \"cardeais\" porque todas as outras virtudes se enquadram nelas e dependem delas.\n[…]\nNa tradição cristã, também são referidas nos livros deuterocanónicos no Livro da Sabedoria, Capítulo 8, Versículo 7 (\"E se alguém ama a justiça, saiba que as virtudes são frutos da Sabedoria: ela ensina a temperança e a prudência, a justiça e a fortaleza, que são os bens mais úteis na vida\") e no Livro dos Macabeus 1:18–19.\n[…]\nPosteriormente, Santo Ambrósio de Milão, Santo Agostinho de Hipona e São Tomás de Aquino expuseram as suas contrapartes sobrenaturais, as três virtudes teologais da fé, esperança e caridade.\n[…]\nSegundo a Doutrina da Igreja Católica, elas \"são perfeições habituais e estáveis da inteligência e da vontade humanas, que regulam os nossos actos, ordenam as nossas paixões e guiam a nossa conduta segundo a razão e a fé. Adquiridas e reforçadas por actos moralmente bons e repetidos, são purificadas e elevadas pela graça divina\". As virtudes cardeais são quatro:\n[…]\na justiça, que é uma constante e firme vontade de dar aos outros o que lhes é devido;\n[…]\na fortaleza (ou Força) que assegura a firmeza nas dificuldades e a constância na procura do bem;\n[…]\ne a temperança (ou Moderação) que \"modera a atracção dos prazeres, assegura o domínio da vontade sobre os instintos e proporciona o equilíbrio no uso dos bens criados\", sendo por isso descrita como sendo a prudência aplicada aos prazeres.\n[…]\nVirtude",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Meditações (Marco Aurélio)",
      "descricao": "Série de anotações pessoais de filosofia estoica escritas pelo imperador Marco Aurélio."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O imperador romano Marco Aurélio escreveu suas Meditações em que língua?",
    "resposta": "Grego",
    "distratores": [
      "Latim",
      "Aramaico",
      "Persa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Meditations"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Meditations",
        "situacao": "ok",
        "texto": "Meditations (Koine Greek: Τὰ εἰς ἑαυτόν, romanized: Ta eis heauton, lit. ''Things Unto Himself'') is a collection of personal writings by Marcus Aurelius, Roman Emperor from 161–180 AD, which record his private notes to himself and his reflections on Stoic philosophy.\n[…]\nGeorge Long (1862). The Meditations of Marcus Aurelius; reprinted many times, including in Vol. 2 of the Harvard Classics.\n[…]\nA. S. L. Farquharson (1944). Marcus Aurelius Meditations. Everyman's Library reprint edition (1992) ISBN 0679412719. Oxford World's Classics revised edition (1998) ISBN 0199540594\n[…]\nClassics Club (1945). Meditations. Marcus Aurelius and his times. Walter J. Black, Inc. New York.\n[…]\nCeporina, Matteo (2012), \"The Meditations\", in Marcel van Ackeren (ed.), A Companion to Marcus Aurelius, Oxford: Wiley-Blackwell, pp. 45–61\n[…]\nHadot, Pierre (1998), The Inner Citadel: The Meditations of Marcus Aurelius, Harvard University Press, ISBN 978-0674461710\n[…]\nHadot, Pierre. 2001. The Inner Citadel: The Meditations of Marcus Aurelius. Cambridge, MA: Harvard University Press.\n[…]\nRees, D. A. 2000. \"Joseph Bryennius and Marcus Aurelius’ Meditations.\" Classical Quarterly 52.2: 584–596.\n[…]\nRutherford, R. B. 1989. The Meditations of Marcus Aurelius: A Study. Oxford: Oxford University Press.\n[…]\nSellars, J. 2025. The Cambridge Companion to Marcus Aurelius' Meditations. Cambridge: Cambridge University Press.\n[…]\nWolf, Edita. 2016. \"Others as Matter of Indifference in Marcus Aurelius’ Meditations.\" Acta Universitatis Carolinae. Graecolatina Pragensia 2:13–23.\n[…]\nMeditations at Standard Ebooks\n[…]\nThe Meditations by Marcus Aurelius at Project Gutenberg, gutenberg.org\n[…]\nMeditations of the Emperor Marcus Aurelius Antoninus, a new translation from the Greek original, with a Life, Notes, &c., by R. Graves, 1792, at Google Books"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Medita%C3%A7%C3%B5es",
        "situacao": "ok",
        "texto": "Meditações (em grego Τὰ εἰς ἑαυτόν, Ta eis heautón literalmente \"[pensamentos/escritos] endereçados a si mesmo\") é o título de uma série de escritos pessoais do imperador romano Marco Aurélio onde ele apresentou suas ideias sobre a filosofia estoica.\n[…]\nMarco Aurélio escreveu os doze livros das Meditações em grego, como uma fonte para sua própria orientação e para se melhorar como pessoa. É possível que grande parte da obra tenha sido escrita em Sírmio, onde ele passou muito tempo planejando campanhas militares entre os anos de 170 a 180.\n[…]\nNão há menção certa das Meditações até o início do século X. O historiador Heródio, escrevendo em meados do século III, faz menção ao legado literário de Marco, dizendo \"Ele se preocupava com todos os aspectos da excelência e, em seu amor pela literatura antiga, ele não se compara a nenhum homem, romano ou Grego; isso é evidente por todos os seus ditos e escritos que chegaram até nós\", uma passagem que pode se referir às Meditações.\n[…]\nPor volta de 1150, João Tzetzes, um gramático de Constantinopla, cita passagens dos Livros IV e V atribuindo-as a Marco. Cerca de 200 anos depois Nicéforo Calisto (c. 1295–1360) em sua História Eclesiástica escreve que \"Marco Antônio compôs um livro para a educação de seu filho Marco [ou seja Cômodo], cheio de toda experiência mundana (em grego:  κοσμικῆς) e instrução. \"As Meditações são depois citadas em muitas compilações gregas dos séculos XIV a XVI.\n[…]\nRetrato do Imperador Marco Aurélio - tradução bilíngue, de 1832, do primeiro capítulo no Wikisource Multilíngue.\n[…]\n«portalveritas.blogspot.com» , Meditações de Marcus Aurelius: artigo científico.\n[…]\n(gr) Τὰ εἰς ἑαυτόν, uma versão online em grego das Meditações, a partir da publicação de A.S.L. Farquharson",
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
