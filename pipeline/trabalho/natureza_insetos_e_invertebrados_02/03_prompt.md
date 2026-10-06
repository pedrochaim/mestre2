Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Insetos e Invertebrados** (tema **Natureza**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Metamorphosis insectorum Surinamensium",
      "descricao": "Livro ilustrado de 1705 sobre a metamorfose de insetos do Suriname, obra de Maria Sibylla Merian."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1705, depois de uma viagem ao Suriname, que naturalista e ilustradora alemã publicou um livro famoso sobre a metamorfose dos insetos tropicais?",
    "resposta": "Maria Sibylla Merian",
    "fonte": [
      "https://en.wikipedia.org/wiki/Metamorphosis_insectorum_Surinamensium",
      "https://pt.wikipedia.org/wiki/Maria_Sibylla_Merian"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Metamorphosis_insectorum_Surinamensium",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Sibylla_Merian",
        "situacao": "ok",
        "texto": "Maria Sibylla Merian (Cidade Livre de Frankfurt, 2 de abril de 1647 – Amsterdam, 13 de janeiro de 1717) foi uma naturalista e ilustradora científica alemã que estudou plantas e insetos e fez pinturas detalhadas sobre eles. Maria Sibylla era descendente do ramo suíço da família Merian e foi uma das primeiras naturalistas a observar insetos diretamente.\n[…]\nSeu conhecimento científico começou com seu padrasto, Jacob Marrel, estudante e aprendiz do pintor Georg Flegel. O primeiro livro publicado de Maria Sibylla foi lançado em 1675, com várias ilustrações naturais. Na adolescência começou a colecionar insetos e aos 13 anos criava bichos da seda. Em 1679, publicou o primeiro de dois volumes sobre lagartas, com o segundo sendo publicado em 1683. Cada volume continha 50 pranchas gravadas e destacadas por Sibylla.\n[…]\nAinda que outras pintoras do período, contemporâneas de Maria, como Margaretha de Heer, incluíssem insetos em suas ilustrações de plantas e flores, apenas Maria Sibylla fazia estudos científicos dos insetos. Outras mulheres vinham colecionando borboletas, mas o naturalismo amador era um privilégio quase que exclusivamente masculino. Em 1679, publicou seu primeiro livro sobre insetos, uma edição em dois volumes que focava na metamorfose de insetos.\n[…]\nEm 1690, sua mãe morreu. No ano seguinte, ela se mudou com as filhas para Amsterdã. Em 1692, o casal Merian se divorciou. No mesmo ano, sua filha Johanna se casou com Jakob Hendrik Herolt, um bem-sucedido comerciante do Suriname. A pintora Rachel Ruysch acabou se tornando aprendiz de Maria Sibylla. A maneira que Maria encontrou para sobreviver foi vendendo suas pinturas junto de Johanna para um colecionador de arte. Em 1698, ela vivia em uma boa casa na rua Kerkstraat, no centro de Amsterdã.\n[…]\nThe Maria Sibylla Merian Society com links de trabalhos digitalizados e fontes"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "A Metamorfose",
      "descricao": "Novela de Franz Kafka, publicada em 1915, em que Gregor Samsa acorda transformado num inseto monstruoso."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escritor de Praga publicou em 1915 a novela em que o caixeiro-viajante Gregor Samsa acorda transformado num inseto monstruoso?",
    "resposta": "Franz Kafka",
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Metamorfose",
      "https://en.wikipedia.org/wiki/The_Metamorphosis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Metamorfose",
        "situacao": "ok",
        "texto": "A Metamorfose (em alemão: Die Verwandlung) é uma novela de literatura fantástica, ficção e temática existencialista escrita por Franz Kafka entre 1912 e publicada pela primeira vez em 1915. Considerada uma das obras mais importantes da literatura do século XX, a narrativa tornou-se um marco do chamado estilo “kafkiano”, caracterizado pela presença do absurdo, da alienação, da opressão psicológica \n[…]\nNesta obra, Kafka descreve um caixeiro viajante de nome Gregor Samsa, que abandona as suas vontades e desejos para sustentar a família e pagar a dívida dos pais. Numa certa manhã, Gregor acorda metamorfoseado num inseto monstruoso. Kafka descreve este inseto como algo parecido com uma barata gigante. Nos primeiros momentos, o livro descreve as dificuldades iniciais de Gregor na nova forma.\n[…]\nFranz Kafka escreveu A Metamorfose entre os dias 17 de novembro e 7 de dezembro de 1912, em um curto período de apenas três semanas. Na época, Kafka trabalhava durante o dia em uma companhia de seguros e escrevia à noite. Ele considerava esta obra especialmente importante e temia que qualquer interrupção pudesse prejudicar sua qualidade. A novela foi escrita em alemão, utilizando uma linguagem clara, precisa e com tom neutro, mesmo diante de eventos absurdos; marca registrada do estilo kafkiano.\n[…]\nA influência do conto também se refletiu em numerosas adaptações audiovisuais. Entre elas encontram-se o telefilme Die Verwandlung (1975), dirigido por Jan Němec, o curta-metragem de animação The Metamorphosis of Mr. Samsa (1977), de Caroline Leaf, a produção televisiva The Metamorphosis (1987), dirigida por Jim Goddard, e o filme The Metamorphosis of Franz Kafka (1993), realizado pelo cineasta espanhol Carlos Atanes, que aborda a obra de Kafka a partir de uma releitura cinematográfica própria.\n[…]\nA Metamorfose no Projeto Gutenberg  (em alemão)\n[…]\nA Metamorfose (em PDF, ePub e Mobi) no site Biblioteca Mundial"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Metamorphosis",
        "situacao": "ok",
        "texto": "The Metamorphosis (German: Die Verwandlung, pronounced [dɪ fɛɐ̯ˈvantlʊŋ]), also translated as The Transformation, is a novella by Franz Kafka published in 1915. One of Kafka's best-known works, The Metamorphosis tells the story of salesman Gregor Samsa, who wakes to find himself inexplicably transformed into a huge insect (German: ungeheueres Ungeziefer, lit. 'monstrous vermin') and struggles to a\n[…]\nMr. Samsa is Gregor's father. After the metamorphosis, he is forced to return to work in order to support the family financially. His attitude towards his son is harsh. He regards the transformed Gregor with disgust and possibly even fear and attacks Gregor on several occasions. Even when Gregor was human, Mr. Samsa regarded him mostly as a source of income for the family. Gregor's relationship with his father is modelled after Kafka's own relationship with his father.\n[…]\nLike much of Kafka's work, The Metamorphosis tends to be given a religious (Max Brod) or psychological interpretation. It has been particularly common to read the story as an expression of Kafka's father complex, as was first done by Charles Neider in his The Frozen Sea: A Study of Franz Kafka (1948).\n[…]\nThe Metamorphosis has been translated into English more than twenty times. In Kafka's original, the opening sentence is \"Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt\". In their 1933 translation of the story – the first into English – Willa Muir and Edwin Muir rendered it as \"As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect\".\n[…]\nAlthough M. A. Roberts titled his 2005 translation The Metamorphosis, he notes that \"Kafka's title actually translates as The Transformation\".\n[…]\nThe Metamorphosis at The Kafka project, translated by Ian Johnston released to public domain"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "A Cigarra e a Formiga",
      "descricao": "Fábula atribuída a Esopo sobre uma cigarra que canta no verão e uma formiga que trabalha, recontada em versos por La Fontaine."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A fábula da cigarra e da formiga vem da Grécia antiga, mas ficou famosa nos versos de qual fabulista francês do século dezessete?",
    "resposta": "Jean de La Fontaine",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Ant_and_the_Grasshopper",
      "https://en.wikipedia.org/wiki/Jean_de_La_Fontaine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Ant_and_the_Grasshopper",
        "situacao": "ok",
        "texto": "The Ant and the Grasshopper, alternatively titled The Grasshopper and the Ant (or Ants), is one of Aesop's Fables, numbered 373 in the Perry Index. The fable describes how a hungry grasshopper begs for food from an ant when winter comes and is refused. The situation sums up moral lessons about the virtues of hard work and planning for the future.\n[…]\nEven in Classical times, however, the advice was mistrusted by some and an alternative story represented the ant's industry as mean and self-serving. Jean de la Fontaine's delicately ironic retelling in French later widened the debate to cover the themes of compassion and charity. Since the 18th century the grasshopper has been seen as the type of the artist and the question of the place of culture in society has also been included.\n[…]\nBecause of the influence of La Fontaine's Fables, in which La cigale et la fourmi stands at the beginning, the grasshopper then became the proverbial example of improvidence in France: so much so that Jules-Joseph Lefebvre (1836–1911) could paint a picture of a female nude biting one of her nails among the falling leaves and be sure viewers would understand the point by giving it the title La Cigale.\n[…]\nMaurice Delage in Deux fables de Jean de la Fontaine (1931)\n[…]\nJean-Marie Morel (1934–), a small cantata set for children's choir and string quartet in La Fontaine en chantant (1999)\n[…]\nOther French fabulists since La Fontaine had already started the counter-attack on the self-righteous ant. In around 1800 Jean-Jacques Boisard has the cricket answering the ant's criticism of his enjoyment of life with the philosophical proposition that since we must all die in the end, Hoarding is folly, enjoyment is wise. In a Catholic educational work (Fables, 1851) Jacques-Melchior Villefranche offers a sequel in which the ant loses its stores and asks the bee for help."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jean_de_La_Fontaine",
        "situacao": "ok",
        "texto": "Jean de La Fontaine (UK: , US: ; French: [ʒɑ̃ d(ə) la fɔ̃tɛn]; 8 July 1621 – 13 April 1695) was a French fabulist and one of the most widely read French poets of the 17th century. He is known above all for his Fables, which provided a model for subsequent fabulists across Europe and numerous alternative versions in France, as well as in French regional languages.\n[…]\nLa Fontaine's Fables\n[…]\nLe Monde littéraire de La Fontaine, by Jean-Pierre Collinet. Pub. PUF, 1970\n[…]\nOeuvres complètes de Jean de La Fontaine: Fables et Contes, edited by Jean-Pierre Collinet. Pub. Gallimard (\"Bibliothèque de la Pléiade\"), 1991. The standard fully annotated edition of these works.\n[…]\nA Pact with Silence: Art and Thought in the Fables of Jean de La Fontaine, by David Lee Rubin. Pub. Ohio State U Press, 1991.\n[…]\nReading Under Cover: Audience and Authority in Jean La Fontaine, by Anne L. Birberick. Pub. Bucknell University Press, 1998.\n[…]\nPoet and the King: Jean de La Fontaine and His Century, by Marc Fumaroli; Jean Marie Todd (transl.). Pub. University of Notre Dame, 2002.\n[…]\nThe Complete Fables of Jean de La Fontaine, Norman Shapiro (transl.). Pub. University of Illinois Press, 2007.\n[…]\nThe Fables, by Jean de La Fontaine, Jupiter Books, London, 1975, [In French and English]....ISBN 0 904041 26 3...\n[…]\nWorks by Jean de La Fontaine at Project Gutenberg\n[…]\nWorks by or about Jean de La Fontaine at the Internet Archive\n[…]\nWorks by Jean de La Fontaine at LibriVox (public domain audiobooks)\n[…]\nJean de La Fontaine museum Archived 12 October 2007 at the Wayback Machine in Château-Thierry, France\n[…]\nJean de La Fontaine at Waddesdon Manor Archived 26 August 2019 at the Wayback Machine\n[…]\n\"La Fontaine, Jean de\". New International Encyclopedia. 1905.\n[…]\n\"Lafontaine, Jean de\". The Nuttall Encyclopædia. 1907.\n[…]\n\"La Fontaine, Jean de\". Encyclopedia Americana. 1920.\n[…]\n\"La Fontaine, Jean de\". Collier's New Encyclopedia. 1921."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Cigarra_e_a_Formiga",
        "situacao": "ok",
        "texto": "A Cigarra e a Formiga é uma das fábulas atribuídas a Esopo e recontada por Jean de La Fontaine em francês.\n[…]\nNos países francófonos, as fábulas de La Fontaine são ensinadas às crianças desde a mais nova idade e todos as conhecem de cor, e sua versão da fábula da cigarra e da formiga é a mais conhecida delas, no Ocidente.\n[…]\nA mesma história foi então recontada por Jean de La Fontaine, procurando atualizar as fábulas de Esopo e ainda criando as suas próprias; em sua versão ele acentua que a formiga consegue acumular porque \"nunca empresta nada a ninguém\".\n[…]\nO poeta Bocage traduziu para o idioma português a versão escrita por La Fontaine (em domínio público):\n[…]\nEm sua obra Fábulas de 1922, o escritor brasileiro Monteiro Lobato coloca na boca de sua personagem Dona Benta a narrativa da história e, embora com o mesmo triste desfecho para o destino da cigarra, promove uma crítica ao papel da formiga, levando o leitor a refletir sobre a conduta desta última e a tomar uma posição favorável ao inseto cantor.\n[…]\nComo não soubesse cantar, tinha ódio à cigarra por vê-la querida de todos os seres\".\n[…]\nNo Brasil, esta história e as demais histórias de Esopo e La Fontaine foram recontadas, no contexto do Sítio do Picapau Amarelo, pelo escritor Monteiro Lobato, emprestando-lhes um contexto mais afeito à realidade do país, em sua obra Fábulas. O espanhol Félix María Samaniego também incluiu uma versão da história em suas Fábulas morales, de 1784. A história foi também uma das adaptadas por  Radamés Gnatalli para a Coleção Disquinho, na década de 1940.\n[…]\nA CIGARRA E A FORMIGA (2009), paródia de Millôr Fernandes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "O Voo do Besouro",
      "descricao": "Interlúdio orquestral da ópera O Conto do Czar Saltan, que imita o zumbido frenético de uma mamangava."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A peça O Voo do Besouro, que imita o zumbido frenético de um inseto, foi composta para uma ópera de qual compositor russo?",
    "resposta": "Nikolai Rimsky-Korsakov",
    "distratores": [
      "Piotr Tchaikovsky",
      "Modest Mussorgsky",
      "Igor Stravinsky"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Flight_of_the_Bumblebee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flight_of_the_Bumblebee",
        "situacao": "ok",
        "texto": "\"Flight of the Bumblebee\" (Russian: Полёт шмеля) is an orchestral interlude written by Nikolai Rimsky-Korsakov for his opera The Tale of Tsar Saltan, composed in 1899–1900. This perpetuum mobile is intended to musically evoke the seemingly chaotic and rapidly changing flying pattern of a bumblebee. Despite the piece's being a rather incidental part of the opera, it is today one of the more familia\n[…]\nThe piece is recognizable for its frantic pace when played up to tempo, with nearly uninterrupted runs of chromatic sixteenth notes. This rapidity, measured at 144 beats per minute, evokes the skittish and frenetic activity of a bumblebee.\n[…]\n\"Flight of the Bumblebee\" (act 3): Scores at the International Music Score Library Project\n[…]\nRobert Cummings. The Flight of the Bumble Bee, musical picture for orchestra (from The Tale of Tsar Saltan) at AllMusic"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Recordações Entomológicas",
      "descricao": "Série de livros do naturalista francês Jean-Henri Fabre sobre o comportamento dos insetos, publicada entre 1879 e 1907."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que naturalista francês passou décadas observando vespas, besouros e outros insetos e reuniu tudo na obra Recordações Entomológicas?",
    "resposta": "Jean-Henri Fabre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jean-Henri_Fabre",
      "https://pt.wikipedia.org/wiki/Jean-Henri_Fabre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jean-Henri_Fabre",
        "situacao": "ok",
        "texto": "Jean-Henri Casimir Fabre (French pronunciation: [ʒɑ̃ ɑ̃ʁi kazimiʁ fabʁ]; 21 December 1823 – 11 October 1915) was a French naturalist, entomologist, and author known for the lively style of his popular books on the lives of insects.\n[…]\nHis Souvenirs Entomologiques is a series of texts on insects and arachnids. He influenced the later writings of Charles Darwin, who called Fabre \"an inimitable observer\". Fabre, however, was a Christian who remained sceptical about Darwin's theory of evolution, as he always held back from all theories and systems. His special force was exact and detailed observation, field research, always avoiding general conclusions from his observations, which he considered premature.\n[…]\nOubreto Provençalo dou Felibre di Tavan (1909) Text on Jean-Henri Fabre, e-museum\n[…]\nThe Insect World of J. Henri Fabre. Introduction and Interpretive Comments by Edwin Way Teale; foreword to 1991 edition by Gerald Durrell. Published by Dodd, Mead in 1949; Reprinted by Beacon Press in 1991; ISBN 0-8070-8513-8\n[…]\nAugustin Fabre, The Life of Jean Henri Fabre. Dodd, Mead, 1921. Scanned version on the Internet Archive\n[…]\nStephan Krall, Vom Leben und Sterben der Insekten. Die Welt des Jean-Henri Fabre, Hirzel, Stuttgart, 2023.\n[…]\nWorks by or about Jean-Henri Fabre at Wikisource\n[…]\nQuotations related to Jean-Henri Fabre at Wikiquote\n[…]\nData related to Jean-Henri Fabre at Wikispecies\n[…]\nMedia related to Jean-Henri Fabre at Wikimedia Commons\n[…]\nWorks by Jean-Henri Fabre at Project Gutenberg\n[…]\nWorks by or about Jean-Henri Fabre at the Internet Archive\n[…]\nWorks by Jean-Henri Fabre at LibriVox (public domain audiobooks)\n[…]\nJean-Henri Fabre: e-museum\n[…]\nThe Amazing World of the Insects of Jean-Henri Fabre\n[…]\nThe museum and birth house of Jean-Henri Fabre In French"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jean-Henri_Fabre",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Anopheles",
      "descricao": "Gênero de mosquitos cujas fêmeas transmitem os parasitas da malária."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que médico britânico ganhou o Nobel de 1902 por estudos que mostraram o papel do mosquito na transmissão da malária?",
    "resposta": "Ronald Ross",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ronald_Ross",
      "https://pt.wikipedia.org/wiki/Ronald_Ross"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ronald_Ross",
        "situacao": "ok",
        "texto": "Sir Ronald Ross  (13 May 1857 – 16 September 1932) was a British medical doctor. He received the 1902 Nobel Prize for Physiology or Medicine \"for his work on malaria, by which he has shown how it enters the organism and thereby has laid the foundation for successful research on this disease and methods of combating it\".\n[…]\nRonald Ross was awarded a Nobel Prize for his discovery of the life cycle of the malarial parasite in birds. He did not build his concept of malarial transmission in humans, but in birds. Ross was the first to show that malarial parasite was transmitted by the bite of infected mosquitoes, in his case the avian Plasmodium relictum.\n[…]\nSir Ronald Ross Institute of Parasitology is the building in Begumpet where Ross made the discovery that malaria was transmitted by the female anopheles mosquito on 20 August. 20 August later came to known as the World Mosquito Day. The lab has been transformed into a small museum exhibiting photos of Ross and his family. Various charts and diagrams explain Ross' work on malaria and its transmission.\n[…]\nRonald Ross was awarded the Nobel Prize for Physiology or Medicine in 1902 \"for his work on malaria, by which he has shown how it enters the organism and thereby has laid the foundation for successful research on this disease and methods of combating it\".\n[…]\nRoss, Ronald (2011) [1923]. Memoirs, with a full account of the great malaria problem and its solution. South Carolina: Nabu Press (originally John Murray, London). ISBN 978-1179199481.\n[…]\nNye, Edwin R.; Gibson, Mary E. (1997). Ronald Ross : Malariologist and Polymath : a Biography. New York: St. Martin's Press, Inc. ISBN 0-312-16296-0.\n[…]\nBynum, William F.; Overy, Caroline (1998). The Beast in the Mosquito: the Correspondence of Ronald Ross and Patrick Manson. Amsterdam: Rodopi. ISBN 978-9-0420-0731-4."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ronald_Ross",
        "situacao": "ok",
        "texto": "Ronald Ross KCB FRS (Almora, 13 de maio de 1857 — Londres, 16 de setembro de 1932) foi um médico britânico.\n[…]\nFoi agraciado com o Nobel de Fisiologia ou Medicina de 1902, pela descoberta do processo de contaminação do organismo humano pela malária. Sua descoberta do parasita da malária no trato gastrointestinal do mosquito Anopheles levou à percepção de que a malária foi transmitido por Anopheles, e lançou as bases para o combate à doença.\n[…]\nEm 1901, Ross foi eleito membro da Real Colégio de Cirurgiões e também um companheiro da Royal Society, de que ele se tornou vice-presidente de 1911-1913. Em 1926, foi homenageado pelo governo inglês com a construção do Instituto e Hospital Ross de Doenças Tropicais.\n[…]\nFilho de um general do exército inglês, Ross se formou em medicina em Londres, na escola de Saint Bartholomew. Em seguida entrou para o serviço médico na Índia. Em 1892 iniciou seus estudos sobre a malária e, dois anos depois, começou a pesquisar a hipóteses de Charles Louis Alphonse Laveran e Patrick Manson de que os mosquitos são responsáveis pela propagação da doença. Na África Ocidental descobriu as espécies de mosquitos que transmitem a malária.\n[…]\nRoss também pesquisou as formas de prevenção à malária na região do Canal de Suez, Grécia e Chipre e nas áreas atingidas pela Primeira Guerra Mundial (1914 a 1918). Morreu em Londres em 16 de dezembro de 1932.\n[…]\nFirst Progress Report of the Campaign Against Mosquitoes in Sierra Leone (com Charles Wilberforce Daniels) (1902)\n[…]\nMosquitoes and Malaria in Britain (1918)\n[…]\n«Biografia no sítio oficial do Nobel de Fisiologia ou Medicina 1902» (em inglês)"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Barbeiro",
      "descricao": "Insetos hematófagos da subfamília Triatominae, transmissores do protozoário causador da doença de Chagas."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1909, que médico brasileiro descobriu o parasita transmitido pelo inseto barbeiro e descreveu a doença que hoje leva seu nome?",
    "resposta": "Carlos Chagas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carlos_Chagas",
      "https://pt.wikipedia.org/wiki/Doença_de_Chagas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_Chagas",
        "situacao": "ok",
        "texto": "Carlos Ribeiro Justiniano Chagas (Oliveira, 9 de julho de 1878 – Rio de Janeiro, 8 de novembro de 1934) foi um  cientista, médico sanitarista, infectologista e bacteriologista brasileiro que trabalhou como clínico, professor e pesquisador. Atuante na saúde pública do Brasil, iniciou sua carreira no combate à malária. Destacou-se ao descobrir o protozoário Trypanosoma cruzi (cujo nome foi uma homen\n[…]\nA partir de 1915 pesquisas realizadas pelo austríaco Rudolf Kraus na Argentina levantou questões sobre a doença que foram logo levantadas no Brasil, envolvendo até a autoria da descoberta ou a importância social em território nacional, questões que foram decididas em favor do cientista nas décadas seguintes ao seu falecimento. Carlos Chagas chegou a rebater as críticas de Rudolf Kraus em conferência em Buenos Aires.\n[…]\nEm 1921, 42 cientistas foram indicados para o prêmio, os quatro primeiros indicados receberam 11, nove, sete e sete indicações, respectivamente. Cem anos após a descoberta da doença, ainda persistem as especulações sobre as duas indicações oficiais de Carlos Chagas ao Prêmio Nobel. O motivo pelo qual o prêmio não foi concedido ao cientista pode ter sido a forte oposição que ele enfrentou no Brasil de alguns médicos e pesquisadores da época.\n[…]\nAs conexões dos membros do Comitê do Nobel com a comunidade científica internacional, quase exclusivamente centrada em cientistas europeus e estadunidenses, também influenciaram suas escolhas. O não-reconhecimento das descobertas de Carlos Chagas pelo Comitê do Nobel parece ser mais corretamente explicado por esses fatores do que pelo impacto negativo da oposição no Brasil.\n[…]\nLEWINSOHN, R. Carlos Chagas (1879-1934): a descoberta do tripanossoma cruzi e da tripanossomíase americana (notas da história da doença de Chagas). 1979.\n[…]\n«Biblioteca Virtual Carlos Chagas»\n[…]\n«Exposição Virtual Carlos Chagas»\n[…]\n«Dr. Carlos Chagas»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Doença_de_Chagas",
        "situacao": "ok",
        "texto": "Doença de Chagas ou Tripanossomíase americana é uma doença tropical parasitária causada pelo protozoário Trypanosoma cruzi e transmitida principalmente por insetos da subfamília Triatominae. Os sintomas mudam ao longo do curso da infecção. Na fase inicial, eles podem não estar presentes ou podem ser: febre, gânglios linfáticos aumentados, dor de cabeça e inchaço no local da mordida. Após 8-12 sema\n[…]\nMovimentos populacionais em grande escala têm expandido as áreas onde os casos da doença de Chagas são encontrados e estes passaram a incluir muitos países da Europa e nos Estados Unidos. Essas áreas também têm visto um aumento nos casos até 2014. A doença foi descrita pela primeira vez em 1909 por Carlos Chagas, do qual recebeu o nome. Ela afeta mais de 150 outras espécies de animais.\n[…]\nA enfermidade foi nomeada em homenagem ao médico e epidemiologista brasileiro Carlos Chagas, que foi o primeiro a descrevê-la em 1908-1909, mas a doença não foi vista como um problema maior de saúde pública até a década de 1960 (a epidemia da doença de Chagas no Brasil na década de 1920 foi amplamente ignorada).\n[…]\nCarlos Chagas descreveu o parasita patogênico como Trypanosoma cruzi em 1909, em homenagem a Oswaldo Cruz, médico e epidemiologista brasileiro que combateu com sucesso epidemias de febre amarela, varíola e peste bubônica no Rio de Janeiro e outras cidades no começo do século XX. No mesmo ano recombinou o nome científico do parasita para Schizotrypanum cruzi, após reconhecer particularidades biológicas no ciclo reprodutivo que o diferenciava dos demais parasitas do gênero Trypanosoma.\n[…]\nAlgumas menções à doença de Chagas podem ser encontradas na literatura não médica. Monteiro Lobato, em seu livro Mr. Slang e o Brasil, de 1927, denunciou \"o monstruoso quadro patológico que [Carlos Chagas] entrevira na paisagem rude dos sertões à guisa de um círculo inédito de Dante\"."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Drosophila melanogaster",
      "descricao": "Mosca-das-frutas, pequena mosca usada há mais de um século como organismo modelo em genética."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que geneticista americano ganhou o Nobel de 1933 ao mostrar, com moscas-das-frutas, que os genes ficam nos cromossomos?",
    "resposta": "Thomas Hunt Morgan",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Hunt_Morgan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Hunt_Morgan",
        "situacao": "ok",
        "texto": "Thomas Hunt Morgan  (September 25, 1866 – December 4, 1945) was an American evolutionary biologist, geneticist, and embryologist. In 1933, he won the Nobel Prize in Physiology or Medicine for discoveries on the role of chromosomes in heredity.\n[…]\nThe Thomas Hunt Morgan School of Biological Sciences at the University of Kentucky is named for him.\n[…]\nThe Genetics Society of America annually awards the Thomas Hunt Morgan Medal, named in his honor, to one of its members who has made a significant contribution to the science of genetics.\n[…]\nThomas Hunt Morgan's discovery was illustrated on a 1989 stamp issued in Sweden, showing the discoveries of eight Nobel Prize-winning geneticists.\n[…]\nAllen, Garland E. (2000). \"Morgan, Thomas Hunt\". American National Biography. Oxford University Press.\n[…]\nShine, Ian B; Sylvia Wrobel (1976). Thomas Hunt Morgan: Pioneer of Genetics. University Press of Kentucky. ISBN 0-8131-0095-X.\n[…]\nStephenson, Wendell H. (April 1946). \"Thomas Hunt Morgan: Kentucky's Gift to Biological Science\" (PDF). Filson Club History Quarterly. 20 (2). Retrieved 2025-09-22.\n[…]\nSturtevant, Alfred H. (1959). \"Thomas Hunt Morgan\" (PDF). Biographical Memoirs of the National Academy of Sciences. 33: 283–325.\n[…]\nThomas Hunt Morgan on Nobelprize.org  including the Nobel Lecture on June 4, 1934 The Relation of Genetics to Physiology and Medicine\n[…]\nThomas Hunt Morgan Biological Sciences Building at University of Kentucky\n[…]\nThomas Hunt Morgan\n[…]\nThomas Hunt Morgan – Biographical Memoirs of the National Academy of Sciences\n[…]\nWorks by Thomas Hunt Morgan at Project Gutenberg\n[…]\nWorks by or about Thomas Hunt Morgan at the Internet Archive\n[…]\nWorks by Thomas Hunt Morgan at LibriVox (public domain audiobooks)\n[…]\nWorks by Thomas Hunt Morgan at the Biodiversity Heritage Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Hunt_Morgan",
        "situacao": "ok",
        "texto": "Thomas Hunt Morgan (25 de setembro de 1866 – 4 de dezembro de 1945) foi um biólogo evolutivo, geneticista e embriologista americano. Em 1933, recebeu o Prêmio Nobel de Fisiologia ou Medicina por suas descobertas sobre o papel dos cromossomos na hereditariedade.\n[…]\nA Thomas Hunt Morgan School of Biological Sciences, da Universidade do Kentucky, recebeu seu nome em sua homenagem.\n[…]\nA Genetics Society of America concede anualmente a Medalha Thomas Hunt Morgan, denominada em sua homenagem, a um de seus membros que tenha feito uma contribuição significativa à ciência da genética.\n[…]\nA descoberta de Thomas Hunt Morgan foi representada em um selo postal emitido na Suécia em 1989, que mostrava as descobertas de oito geneticistas vencedores do Prêmio Nobel.\n[…]\nAllen, Garland E. (1978). Thomas Hunt Morgan: The Man and His Science. [S.l.]: Princeton University Press. ISBN 978-0-691-08200-4\n[…]\nShine, Ian B; Sylvia Wrobel (1976). Thomas Hunt Morgan: Pioneer of Genetics. [S.l.]: University Press of Kentucky. ISBN 0-8131-0095-X\n[…]\nStephenson, Wendell H. (1946). «Thomas Hunt Morgan: Kentucky's Gift to Biological Science» (PDF). Filson Club History Quarterly. 20 (2). Consultado em 22 de setembro de 2025\n[…]\nSturtevant, Alfred H. (1959). «Thomas Hunt Morgan» (PDF). Biographical Memoirs of the National Academy of Sciences. 33: 283–325\n[…]\nThomas Hunt Morgan Biological Sciences Building na Universidade do Kentucky\n[…]\nThomas Hunt Morgan\n[…]\nThomas Hunt Morgan – Biographical Memoirs da Academia Nacional de Ciências dos Estados Unidos\n[…]\nObras de Thomas Hunt Morgan (em inglês) no Projeto Gutenberg\n[…]\nObras de ou sobre Thomas Hunt Morgan no Internet Archive\n[…]\nObras de Thomas Hunt Morgan (em inglês) no LibriVox (livros falados em domínio público)\n[…]\nObras por Thomas Hunt Morgan em Biodiversity Heritage Library",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Caranguejo-vermelho-da-ilha-christmas",
      "descricao": "Caranguejo terrestre (Gecarcoidea natalis) da Ilha Christmas, famoso pela migração anual em massa até o mar para desovar."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Todo ano, milhões de caranguejos-vermelhos cruzam estradas rumo ao mar para desovar, numa ilha australiana do oceano Índico. Que ilha?",
    "resposta": "Ilha Christmas (Ilha do Natal)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Christmas_Island_red_crab"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christmas_Island_red_crab",
        "situacao": "ok",
        "texto": "The Christmas Island red crab (Gecarcoidea natalis) is a species of land crab that is endemic to Christmas Island and Cocos (Keeling) Islands in the Indian Ocean. Although restricted to a relatively small area, an estimated 43.7 million adult red crabs once lived on Christmas Island alone, but the accidental introduction of the yellow crazy ant is believed to have reduced the population by about a\n[…]\nAdult red crabs have no natural predators on Christmas Island. The yellow crazy ant, an invasive species accidentally introduced to Christmas Island and Australia from Africa, is believed to have killed 10–15 million red crabs (one-quarter to one-third of the total population) in recent years. In total (including killed), the ants are believed to have displaced 15–20 million red crabs on Christmas Island.\n[…]\nDuring their larval stage, millions of red crab larvae are eaten by fish and large filter-feeders such as manta rays and whale sharks which visit Christmas Island during the red crab breeding season.\n[…]\nCoconut crabs (alternatively known as robber crabs) have also been filmed on Christmas Island preying on red crabs.\n[…]\nEarly inhabitants of Christmas Island rarely mentioned these crabs. It is possible that their current large population size was caused by the extinction of the endemic Maclear's rat (Rattus macleari) in 1903, which may have limited the crab's population.\n[…]\nIn recent years, the human inhabitants of Christmas Island have become more tolerant and respectful of the crabs during their annual migration and are now more cautious while driving, which helps to minimise crab casualties. Their small size, high water content and poor meat quality mean they are not considered edible by humans.\n[…]\nChristmas Island National Park Website\n[…]\nWebpage about Christmas Island, describes crisis of Yellow Crazy ants\n[…]\nWebsite showing the crabs of Christmas Island including the red crab migration"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Mosca tsé-tsé",
      "descricao": "Moscas hematófagas do gênero Glossina, transmissoras da doença do sono."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A mosca tsé-tsé, transmissora da doença do sono, vive naturalmente em qual continente?",
    "resposta": "África",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tsetse_fly"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tsetse_fly",
        "situacao": "ok",
        "texto": "Tsetse flies (UK:  (T)SET-see or US:  (T)SEET-see; sometimes spelled tzetze; also known as tik-tik flies) are large biting flies that inhabit much of tropical Africa. Tsetse flies include all the species in the genus Glossina, which are placed in their own family, Glossinidae. The tsetse is an obligate parasite that lives by feeding on the blood of vertebrate animals. Tsetse flies have been extens\n[…]\nGlossina is almost entirely restricted to wooded grasslands and forested areas of the Afrotropics. As of 1990, tsetse flies were reported from a maximum latitude of approximately 15° north in Senegal (Niayes Region), to a minimum of 28.5° south in South Africa (KwaZulu-Natal Province).\n[…]\nThe tsetse-vectored trypanosomiases affect various vertebrate species including humans, antelopes, bovine cattle, camels, horses, sheep, goats, and pigs. These diseases are caused by several different trypanosome species that may also survive in wild animals such as crocodiles and monitor lizards. The diseases have different distributions across the African continent, so are transmitted by different species. This table summarizes this information:\n[…]\nTsetse flies are regarded as a major cause of rural poverty in sub-Saharan Africa because they prevent mixed farming. The land infested with tsetse flies is often cultivated by people using hoes rather than more efficient draught animals because nagana, the disease transmitted by tsetse, weakens and often kills these animals. Cattle that do survive produce little milk, pregnant cows often abort their calves, and manure is not available to fertilize the worn-out soils.\n[…]\nTsetse flies transmit a similar disease to humans, called African trypanosomiasis, human African trypanosomiasis (HAT) or sleeping sickness. An estimated 60-70 million people in 20 countries are at different levels of risk and only 3-4 million people are covered by active surveillance."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mosca-ts%C3%A9-ts%C3%A9",
        "situacao": "ok",
        "texto": "Glossina Wiedemann, 1830 é um género de moscas da família Glossinidae (anteriormente integrado na família Muscidae) que inclui as espécies conhecidas pelo nome comum de moscas tsé-tsé, nome com origem nas línguas manto da África equatorial. Estas espécies transmitem Trypanosoma brucei, o tripanossoma causador da doença do sono e  também Trypanossoma vivax, causador da Tripanossomíase Animal Africa\n[…]\nA Tripanossomíase Humana Africana (TAH) representa um grave desafio de saúde pública, sendo severamente agravada por sua inclusão no panorama das Doenças Tropicais Negligenciadas (DTN). O termo \"negligenciada\" evidencia a disparidade entre a severidade dessas patologias e o volume de atenção, pesquisa e financiamento que recebem globalmente.\n[…]\nEssa diferença de manifestação é essencial para a estratégia de controle e para o diagnóstico em campo, dado que o foco do controle da mosca Tsé-Tsé abrange tanto a saúde humana quanto o impacto econômico e na segurança alimentar do continente africano.\n[…]\nAs espécies dessa mosca são restritas á região Subsaariana da África, mais especificamente do lago Chade e do Senegal, ao oeste, até o lago Vitória, ao leste. Esta região é banhada pelo Rio Congo e seus afluentes, sendo conhecida como Coração Verde do Continente Africano. A umidade do local favorece o aparecimento de insetos das mais diversas espécies.\n[…]\nGrupo Palpalis (Espécies de áreas Ripícolas): Ocupa margens de rios, caracterizados por umidade estável. Atua como vetor primário da Tripanossomíase Africana Humana de curso crônico. Sua proximidade com assentamentos humanos o configura como vetor de alto risco para a transmissão peridomiciliar.\n[…]\nGlossina tachinoides (Westwood, 1850)\n[…]\nEstas espécies têm distribuição natural em, entre o Sahel e o Kalahari,incluido as regiões de selvas onde também se encontra a malária, outro tipo de doença transmitida por insectos, no caso mosquitos.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Escorpião-amarelo",
      "descricao": "Escorpião brasileiro (Tityus serrulatus), de veneno perigoso e comum em áreas urbanas."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O escorpião-amarelo, hoje espalhado por cidades de várias regiões do país, é originário de qual estado brasileiro?",
    "resposta": "Minas Gerais",
    "distratores": [
      "Bahia",
      "São Paulo",
      "Goiás"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tityus_serrulatus",
      "https://en.wikipedia.org/wiki/Tityus_serrulatus"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tityus_serrulatus",
        "situacao": "ok",
        "texto": "O Tityus serrulatus, conhecido popularmente como escorpião-amarelo, é um escorpião típico do Sudeste, Centro-Oeste e Nordeste do Brasil. É a principal espécie causadora de acidentes graves, com registro de óbitos, e é considerada a mais venenosa da América do Sul.\n[…]\nPor muito tempo julgou-se que a espécie era exclusivamente partenogênica, mas foi descoberta uma população com a divisão de gêneros e reprodução sexuada no norte do estado de Minas Gerais e na Bahia.\n[…]\nAntes restrita a Minas Gerais, devido à sua boa adaptação a ambientes urbanos e sua rápida e grande proliferação, a espécie hoje tem sua distribuição ampliada para Bahia, Ceará, Mato Grosso do Sul, Minas Gerais, Espírito Santo, Rio de Janeiro, São Paulo, Paraná, Paraíba, Alagoas, Pernambuco, Sergipe, Piauí, Rio Grande do Norte, Goiás, Distrito Federal e mais recentemente alguns registros foram relatados em Santa Catarina, Tocantins, Rio Grande do Sul e Mato Grosso.\n[…]\nContatos entre seres humanos e T. serrulatus são muito frequentes. Mas esse escorpião, por natureza, ataca as pessoas ao se sentir ameaçado. Em casos de acidente recomenda-se não \"sugar\" o veneno do local acidentado, não fazer torniquete, incisões ou cutucar o local, para não agravar a situação. Deve-se procurar um médico, e sempre que possível levar o escorpião junto para identificação da espécie.[carece de fontes]?\n[…]\nBucaretchi, Fábio; Baracat, Emílio CE; Nogueira, Roberto JN; Chaves, Aniel; Zambrone, Flávio AD; Fonseca, Márcia RCC; Tourinho, Francis S. (1995). «A comparative study of severe scorpion envenomation in children caused by Tityus bahiensis and Tityus serrulatus». Revista do Instituto de Medicina Tropical de São Paulo. 37 (4): 331–336. Consultado em 22 de abril de 2017"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tityus_serrulatus",
        "situacao": "ok",
        "texto": "Tityus serrulatus, the Brazilian yellow scorpion, is a species of scorpion of the family Buthidae. It is native to Brazil, and its venom is extremely toxic. It is the most dangerous scorpion in South America and is responsible for the most fatal cases.\n[…]\nThe species is endemic to Brazil and widely found throughout the country, including the states of Alagoas, Bahia, Ceará, Espírito Santo, Goiás, Mato Grosso, Mato Grosso do Sul, Minas Gerais, Paraná, Pernambuco, Rio de Janeiro, Rio Grande do Norte, Rio Grande do Sul, Rondônia, Santa Catarina, São Paulo, Sergipe, and Distrito Federal.\n[…]\nIn mild cases, localized pain is the primary symptom. Tityus serrulatus venom contains TsIV, which slows the inactivation of sodium channels in muscles and nerve cells.\n[…]\nConvulsions and coma are relatively rare, but can occur. Death usually results from pulmonary edema and cardiorespiratory failure. Deaths can occur between 1–6 hours, or 12–14 hours, depending on the age group, the person's state of health and the quantity of injected venom. The venom of this species seems to have different lethalities according to its distribution, T. serrulatus from Distrito Federal has an LD50 of 51.6 μg/kg, compared to LD50 from T. serrulatus from Minas Gerais, 26 μg/kg.\n[…]\nAccording to a nationwide epidemiological study of scorpion accidents that was conducted from 2000 to 2012, there were 482,616 accidents and 728 deaths reported in Brazil during that period. All of the fatal cases were attributed to the genus Tityus, and T. serrulatus, in particular, was believed to be responsible for the vast majority of scorpion-related deaths considered by the study."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Tardígrado",
      "descricao": "Animais microscópicos de oito patas do filo Tardigrada, famosos pela resistência a condições extremas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2019, tardígrados desidratados viajavam a bordo de uma sonda israelense que caiu durante a tentativa de pouso. Em que astro?",
    "resposta": "Na Lua",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beresheet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beresheet",
        "situacao": "ok",
        "texto": "Beresheet (Hebrew: בְּרֵאשִׁית, Bərēšīṯ, lit. 'In the beginning'; Book of Genesis) was a demonstrator of a small robotic lunar lander and lunar probe operated by SpaceIL and Israel Aerospace Industries. Its aims included inspiring youth and promoting careers in science, technology, engineering, and mathematics (STEM), and landing its magnetometer, time capsule, and laser retroreflector on the Moon\n[…]\nThe costs for the project, including launch, were about US$100 million. The government of Israel's commitment to the project was stated to be 10% in July 2018. However, in 2019 just before the launch, SpaceIL told media that the overall budget was about US$90 million, and only about US$2 million of that came from the Israeli government.\n[…]\nIn October 2015, SpaceIL signed a contract for a launch from Cape Canaveral in Florida on a SpaceX Falcon 9 booster, via Spaceflight Industries. It was launched on 22 February 2019 at 01:45 UTC (20:45 local time on 21 February 2019) as a secondary payload, along with the telecom satellite PSN-6. Beresheet was controlled by a command center in Yehud, Israel.\n[…]\nIn August 2019, scientists reported that a capsule containing tardigrade micro-animals in their natural cryptobiotic state may have survived the crash and lived on the Moon for a while. On previous space missions, tardigrades were exposed to the open vacuum of space and some were able to live for a period of time.\n[…]\nIAI owns the intellectual property of the Beresheet design. On 9 June 2019, it was announced that IAI signed an agreement with the American company Firefly Aerospace to build a lunar lander based on Beresheet. Firefly Aerospace is one of several \"main contractors\" for NASA's Commercial Lunar Payload Services (CLPS), and they planned to propose a lunar lander based on Beresheet called Genesis."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Beresheet",
        "situacao": "ok",
        "texto": "Beresheet foi um demonstrador de um pequeno aterrissador lunático robótico e uma sonda lunar. Seus objetivos incluíam a promoção de carreiras em ciência, tecnologia, engenharia e matemática (CTEM; STEM em inglês) e o desembarque de seu magnetómetro, de sua cápsula digital do tempo e de seu retrorefletor a laser na Lua.\n[…]\nEm 11 de abril de 2019, o fracasso do giroscópio do aterrissador (Unidade de Medição Inercial) causou uma cadeia de eventos que levaram ao desligamento do motor principal, levando à queda da sonda na Lua. Em 13 de abril de 2019, o Beresheet 2 foi anunciado.\n[…]\nO aterrissador era, anteriormente, conhecido como Sparrow, e foi oficialmente nomeado Beresheet (em hebraico: בְּרֵאשִׁית, \"Gênesis\") em dezembro de 2018. Sua massa líquida era de 150 kg; quando abastecido no lançamento, sua massa era de 585 kg. Utilizou sete estações terrestres, globalmente, para comunicação entre Terra-aterrissador. Sua sala de Controle da Missão estava na Israel Aerospace Industries em Yehud, Israel.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Cueva de la Araña",
      "descricao": "Cavernas em Bicorp, na Espanha, com uma pintura rupestre de cerca de oito mil anos que mostra a coleta de mel."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Uma pintura rupestre de cerca de oito mil anos mostra uma pessoa pendurada em cordas colhendo mel de uma colmeia. Em que país fica essa caverna?",
    "resposta": "Espanha",
    "distratores": [
      "França",
      "Portugal",
      "Itália"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cuevas_de_la_Araña"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cuevas_de_la_Araña",
        "situacao": "ok",
        "texto": "The Coves de l'Aranya (in original Catalan language, known in English as the Spider Caves and in Spanish Cuevas de la Araña) are a group of caves in the municipality of Bicorp in València, eastern Spain. The caves are in the valley of the river Escalona and were used by prehistoric people who left rock art."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Vespa-asiática",
      "descricao": "Vespa (Vespa velutina) nativa do Sudeste Asiático, predadora de abelhas e invasora na Europa."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A vespa-asiática, predadora de abelhas, chegou à Europa por volta de 2004, escondida numa carga de cerâmica vinda da China. Em que país desembarcou?",
    "resposta": "França",
    "fonte": [
      "https://en.wikipedia.org/wiki/Asian_hornet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Asian_hornet",
        "situacao": "ok",
        "texto": "The Asian hornet (Vespa velutina), also known as the yellow-legged hornet or Asian predatory wasp, is a species of hornet indigenous to Southeast Asia.\n[…]\nVespa velutina is significantly smaller than the European hornet. Typically, queens are 30 mm (1.2 in) long, and males about 24 mm (0.94 in). Workers are about 20 mm (0.79 in) long. The species has distinctive yellow tarsi (legs). The thorax is a velvety brown or black with a brown abdomen. Each abdominal segment has a narrow posterior yellow border, except for the fourth segment, which is orange. The head is black and the face yellow.\n[…]\nRegional forms vary sufficiently in colour to cause difficulties in classification, and several subspecies have been variously identified and ultimately rejected; while there is a history of recognising subspecies within many of the Vespa species, including V. velutina, the most recent taxonomic revision of the genus treats all subspecific names in the genus Vespa as synonyms, effectively relegating them to no more than informal names for regional colour forms.\n[…]\nV. velutina originates from Southeast Asia, particularly the tropical regions of northern India, Pakistan, Afghanistan, Bhutan, China, Taiwan, Burma, Thailand, Laos, Vietnam, Malaysia, the Indo-Chinese peninsula, and surrounding archipelagoes.\n[…]\nV. velutina has become an invasive species in France, where it is believed to have arrived in boxes of pottery from China in 2004. By 2009, several thousand nests were in the area of Bordeaux and surrounding departments, and by the end of 2015, they were reported over most of France."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vespa-asi%C3%A1tica",
        "situacao": "ok",
        "texto": "A vespa-asiática (nome científico: Vespa velutina) é uma espécie de vespa nativa do Sudeste Asiático.\n[…]\nA variedade que causa problemas de invasão na Europa é a subespécie Vespa velutina nigrithorax.\n[…]\nA Vespa velutina nigritorax chegou à Europa por via marítima, em 2004. As autoridades francesas desconfiam que vieram num carregamento de bonsai, proveniente da China e descarregado em Bordéus. Nesse ano, eliminaram três ninhos. Em 2005, cinco. Mas em 2006 foram detetados 223 ninhos de vespa velutina em França e um ano depois os animais tinham-se espalhado por metade do país: 1613 ninhos.\n[…]\nNos primeiros quatro meses de 2020, as autoridades portuguesas identificaram 1245 ninhos de vespa asiática no seu país, dos quais apenas conseguiram exterminar 1124.\n[…]\nNo Oriente, as abelhas asiáticas aprenderam a defender-se das velutinas. Quando uma vespa prospetora entra na colmeia, a colónia começa por fechar-lhe a saída. Depois as abelhas rodeiam o predador e formam uma bolha ao seu redor, começando a bater as asas para criar calor. As abelhas suportam temperaturas de 42 graus, as vespas apenas de 40. Então as obreiras aquecem a temperatura da colmeia até aos 41 graus, quase se matando a si próprias para eliminarem a vespa.\n[…]\nUm estudo do Jardim de plantas de Nantes (França) mostra que a planta carnívora Sarracenia oreophila atrai especificamente a vespa asiática e seria promissora na luta contra a invasora, cada planta podendo eliminar até 50 vespas. No entanto a planta não seria suficiente para lutar contra colónias que podem contar até 3000 vespas.\n[…]\nSOS Vespa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Bicho-de-pé",
      "descricao": "Pulga parasita (Tunga penetrans) cuja fêmea se instala na pele, geralmente dos pés."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Nativo das Américas, o bicho-de-pé atravessou o Atlântico no século dezenove num navio vindo do Brasil. Em que país africano ele desembarcou?",
    "resposta": "Angola",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tunga_penetrans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tunga_penetrans",
        "situacao": "ok",
        "texto": "Tunga penetrans is a species of flea also known as the jigger, jigger flea, chigoe, chigo, chigoe flea, chigo flea, nigua, sand flea, or burrowing flea. It is a parasitic insect found in most tropical and sub-tropical climates. In its parasitic stage it can cause significant health issues for its hosts, including humans and certain other mammals. An infestation of T. penetrans is called tungiasis.\n[…]\nThe species is native to Central and South America, and has also been introduced to sub-Saharan Africa.\n[…]\nSynonyms for Tunga penetrans include Sarcopsylla penetrans, Pulex penetrates, and many others.\n[…]\nT. penetrans is native to South America but is found globally in tropical and sub-tropical areas. T. penetrans has become a parasite of concern in sub-Saharan Africa.\n[…]\nHost species for  T. penetrans'\n[…]\nIn a seminal paper on the biology and pathology of Tunga penetrans, Eisele et al. (2003) provided and detailed the five stages of tungiasis, thereby detailing the in vivo development of the female chigoe flea for the first time. In dividing the natural history of the disease, the Fortaleza Classification formally describes the last part of the female flea's life cycle where it burrows into its host's skin, expels eggs, and dies.\n[…]\nThrough ship routes and further expeditions, the chigoe flea was spread to the rest of the world, particularly to the rest of Latin America and Africa. The spread to greater Africa occurred throughout the 17th and 19th centuries, specifically in 1873 when the infected crewmen of the Thomas Mitchell's ship introduced it into Angola, having sailed from Brazil.\n[…]\nFemale T. penetrans embed themselves within the skin of a host and this can cause tungiasis. A large quantity of T. penetrans burrowing into an animal cause secondary bacterial infections with severe cases requiring amputation and death occurring in the most extreme cases."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bicho-de-p%C3%A9",
        "situacao": "ok",
        "texto": "O Tunga penetrans, comummente conhecido como bicho-de-pé, ou pulga-da-areia em algumas regiões, é um inseto sifonáptero da família dos tungídeos, originário da América Central e América do Sul, tendo sido introduzido inadvertidamente pelo Homem na África subsariana. É conhecido ainda como nígua, tunga, matacanha (também grafado mataquenha) e bitacaia\n[…]\nNativo da América Central e do Sul, incluindo o Brasil, foi chamado pelos indígenas falantes de tupi antigo de tunga, nome que passou para o português brasileiro. Daí surgiram as variantes tunga, zunga e zunge. O inseto foi descrito por diversos viajantes do século XVI, entre eles Hans Staden:\n[…]\nPode ser encontrado em quase todo o continente americano e na África subsariana, e habita terrenos secos e arenosos, dentro ou fora de habitações humanas.\n[…]\nA doença causada pela infestação de bicho-de-pé é chamada tungíase, devido ao nome científico do gênero, Tunga, e pode levar a infecções secundárias e formação de úlceras. A fêmea fica sobre a superfície do solo esperando um hospedeiro, e penetra rapidamente sua epiderme. No ser humano, ataca preferencialmente a região da sola dos pés, no calcanhar, entre os dedos e nos cantos, nas bordas das unhas, e também nas mãos, por serem mais expostas ao chão e ao ambiente externo.\n[…]\nEntre as infecções secundárias que a tungíase pode causar estão a proliferação de Clostridium perfrigens (que causa gangrena gasosa), Clostridium tetani (tétano) e Paracoccidiodes brasiliensis (blastomicoses).\n[…]\nÉ geralmente aceito que o bicho-de-pé tenha se originado nas partes tropical e subtropical do continente americano e nas Antilhas. Ele se tornou conhecido pelos europeus pouco após a chegada de Colombo em 1492. Na época colonial, as pessoas que se aventuraram pelo interior do Brasil relataram as suas penosas experiências ao serem atacadas pelo bicho-de-pé.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Barata-sibilante-de-madagascar",
      "descricao": "Grande barata (Gromphadorhina portentosa) que produz um chiado ao expelir ar pelos espiráculos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Uma barata gigante que solta um chiado alto, expelindo ar pelos orifícios de respiração do corpo, é nativa de qual ilha?",
    "resposta": "Madagascar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Madagascar_hissing_cockroach"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Madagascar_hissing_cockroach",
        "situacao": "ok",
        "texto": "The Madagascar hissing cockroach (Gromphadorhina portentosa), also known as the hissing cockroach, Malagasy hissing cockroach or simply hisser, is one of the largest species of cockroach, reaching 5 to 7.5 centimetres (2 to 3 inches) at maturity. They are native to the island of Madagascar, where they are commonly found in rotting logs.\n[…]\nThe sound is produced as the insect forcefully expels air out of their specialized respiratory spiracles (orifices), mainly those that are located on the insect fourth body segment (abdomen), although spiracles are found, more or less, on all segments of their abdomen. The Madagascar hissing cockroach is the only member of their group of cockroaches that can make audible sounds.\n[…]\nIn 1984, a guest named Adam Zweig appeared on Late Night with David Letterman, demonstrating his pet Madagascar cockroach \"climbing the tightrope over the fires of hell and the pit of doom\".\n[…]\nA Madagascar hissing cockroach was used by artist Garnet Hertz as the driver of a mobile robotic artwork.\n[…]\nIn September 2006, amusement park Six Flags Great America announced that it would be granting unlimited line-jumping privileges (for all rides) to anyone who could eat a live Madagascar hissing cockroach, as part of a Halloween-themed promotion for their annual FrightFest. Furthermore, if a contestant managed to beat the previous world record (eating 36 cockroaches in 1 minute), they would receive season passes, for four people, for the 2007 season.\n[…]\nSince 2011 the Bronx Zoo has held a roach-naming and gifting program themed for Valentine's Day allowing their Madagascar hissing cockroaches to be named by benefactors. Funds raised are donated to Wildlife Conservation Society, the parent nonprofit organization of the zoo.\n[…]\nCockroachGuy.com ~ Care information and photos dedicated to the Madagascar Hissing Cockroach"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Barata-de-madag%C3%A1scar",
        "situacao": "ok",
        "texto": "A barata-de-madagáscar (Gromphadorhina portentosa) é uma das maiores espécies de barata, chegando a atingir de 2 polegadas (5,08 centímetros) a 3 polegadas (7,62 centímetros) quando adulta. São originárias da ilha de Madagáscar onde podem ser encontradas em troncos apodrecidos.\n[…]\nEsta é uma das 20 espécies conhecidas da tribo Gromphadorhinini nativas de Madagáscar, muitas das quais são mantidas como animais de estimação, e muitas vezes confundidas uma com a outra por traficantes de animais; em particular, G. portentosa é comumente confundida com G. oblongonota e G. picea.\n[…]\nCockroachGuy.com ~ Care information and photos dedicated to the Madagascar Hissing Cockroach\n[…]\nMadagascar Hissing Cockroach - Housing and Bedding\n[…]\nRearing cockroaches and details of a society dedicated to keeping cockroaches\n[…]\nWhen Cockroaches Seize Controls – Cockroach-controlled mobile robot story in Wired News",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Photinus carolinus",
      "descricao": "Espécie de vaga-lume norte-americano cujos machos piscam em sincronia no início do verão."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os vaga-lumes da espécie Photinus carolinus, famosos por piscar em sincronia, atraem multidões todo ano a qual parque nacional americano?",
    "resposta": "Great Smoky Mountains",
    "distratores": [
      "Yellowstone",
      "Yosemite",
      "Grand Canyon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Photinus_carolinus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Photinus_carolinus",
        "situacao": "ok",
        "texto": "Photinus carolinus, commonly known as the Smokies synchronous firefly, is a species of rover firefly whose mating displays of synchronous flashing have fascinated both scientists and tourists. As individual females synchronize with males nearby, waves of alternating bright light and darkness seem to travel across the landscape. Firefly displays typically occur in early June near Elkmont, Tennessee\n[…]\nThe species can be found in isolated pockets of the Appalachian Mountains in the eastern United States.\n[…]\nThe specific epithet refers to North Carolina, where the species was originally found.\n[…]\nIn the southern part of its range, P. carolinus is usually found in hardwood forests that are 65 years old or older, in mountain river valleys at elevations from 1,400–6,000 feet (430–1,830 m). In Pennsylvania and New York, the species is found at lower elevations, 1,000–2,000 feet (300–610 m).\n[…]\nP. carolinus is found in isolated pockets throughout the Appalachian Mountains, including in northern Georgia, Tennessee, South Carolina, North Carolina, Virginia, West Virginia, Pennsylvania, and New York. One of its small populations is in Elkmont, Tennessee. The species is also found elsewhere in the Smoky Mountains, usually at elevations near 2,000 feet (610 m), and has been observed as far north as Pennsylvania.\n[…]\nDriving and parking near Great Smoky Mountains National Park are strictly regulated during the two-week P. carolinus mating season. Would-be visitors are required to park at the Sugarlands Visitor Center and wait for a trolley to take them to the viewing site. On weekends there may be a four-hour wait for transportation.\n[…]\nMoiseff, Andrew; Copeland, Jonathan (May 1994). \"Mechanisms of synchrony in the North American firefly Photinus carolinus (Coleoptera: Lampyridae)\". Journal of Insect Behavior. 8 (3): 395–407. Bibcode:1994JIBeh...8..395M. doi:10.1007/BF01989367. S2CID 21384558."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Meganeura",
      "descricao": "Gênero extinto de insetos gigantes aparentados às libélulas, com mais de sessenta centímetros de envergadura."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A Meganeura, parente das libélulas com mais de sessenta centímetros de envergadura, viveu em qual período geológico?",
    "resposta": "Carbonífero",
    "distratores": [
      "Jurássico",
      "Cretáceo",
      "Cambriano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Meganeura"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Meganeura",
        "situacao": "ok",
        "texto": "Meganeura (Ancient Greek: μέγα (large) + νευρόν (vein or nerve)) is a genus of extinct insects from the Late Carboniferous (about 300 million years ago). It is a member of the extinct order Meganisoptera (also known as griffenflies), which resemble dragonflies and damselflies (with dragonflies, damselflies, and meganisopterans being part of the broader group Odonatoptera). While various species of\n[…]\nDespite being the iconic \"giant dragonfly\", fossils of Meganeura are poorly preserved in comparison to most of its relatives.\n[…]\nSome controversy remains as to how insects of the Carboniferous period were able to grow so large. The way oxygen is diffused through the insect's body via its tracheal breathing system puts an upper limit on body size, which prehistoric insects seem to have well exceeded.\n[…]\nAs such, other explanations for the large size of meganeurids compared to living relatives have been put forward. In 2004, paleontologist Günter Bechly suggested that the lack of aerial vertebrate predators allowed pterygote insects to evolve to maximum sizes during the Carboniferous and Permian periods, perhaps accelerated by an evolutionary arms race for increase in body size between plant-feeding Palaeodictyoptera and Meganisoptera as their predators.\n[…]\nMeganeura is one of many insects recovered from coal mines on the outskirts of Commentry, France. Commentry was a major component of France's 19th century coal industry, but it also gained renown among paleontologists as one of the best sources of Carboniferous insect fossils in the world. The fossils of Commentry are from the Gzhelian stage of the Carboniferous, about 304 to 299 million years ago. Also known from Commentry is Meganeurites, on which Meganeura may have predated.\n[…]\nMedia related to Meganeura at Wikimedia Commons\n[…]\nPicture of life sized model of Meganeura monyi made for Denver Museum of Natural History."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Meganeura",
        "situacao": "ok",
        "texto": "Meganeura monyi foi uma espécie de insetos pré-históricos que existiu no período Carbonífero (cerca de 300 milhões de anos atrás) que se assemelhava com as atuais libélulas. Com uma envergadura de mais de 75 cm (2,5 pés) de largura, foi o maior inseto voador que já viveu na Terra. (Meganeuropsis permiana, do período Permiano é outro candidato). Era um predador que, possivelmente, se alimentava de \n[…]\nA controvérsia tem prevalecido sobre a forma como insetos do período Carbonífero foram capazes de crescer tanto. A forma como o oxigênio é difundido pelo corpo dos insetos, através do seu sistema de respiração traqueal, coloca um limite superior no tamanho do corpo, que os insetos pré-históricos parecem ter ultrapassado - e muito.\n[…]\nFoi originalmente proposto (Harle & Harle, 1911) que a Meganeura só foi capaz de voar porque o ar atmosférico naquela época continha mais oxigênio do que os 20% atuais, e a atmosfera era mais densa. Esta teoria foi inicialmente indeferida por colegas cientistas, mas tem encontrado aprovação mais recentemente, através de um estudo mais aprofundado sobre a relação entre o gigantismo e a disponibilidade de oxigênio.\n[…]\nA palavra \" Meganeura \" significa \"grande nervura\", referindo-se à rede de veios nas asas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Drosophila melanogaster",
      "descricao": "Mosca-das-frutas, pequena mosca usada há mais de um século como organismo modelo em genética."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Moscas-das-frutas foram os primeiros animais enviados ao espaço, num foguete alemão capturado pelos americanos. Em que ano?",
    "resposta": "1947",
    "distratores": [
      "1957",
      "1961",
      "1969"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Animals_in_space"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Animals_in_space",
        "situacao": "ok",
        "texto": "Animals in space originally served to test the survivability of spaceflight, before human spaceflights were attempted. Later, many species were flown to investigate various biological processes and the effects microgravity and space flight might have on them. Bioastronautics is an area of bioengineering research that spans the study and support of life in space.\n[…]\nA wide variety of non-human animals have been launched into space, including monkeys and apes, dogs, cats, tortoises, mice, rats, rabbits, fish, frogs, spiders, insects, and quail eggs (which hatched on Mir in 1990). The US launched the first living beings into space, with fruit flies surviving a 1947 flight, followed by primates in 1949. The Soviet space program launched multiple dogs into space, with the first sub-orbital flights in 1951, and first orbital flights in 1957.\n[…]\nThe limited supply of captured German V-2 rockets led to the U.S. use of high-altitude balloon launches carrying fruit flies, mice, hamsters, guinea pigs, cats, dogs, frogs, goldfish and monkeys to heights of up to 44,000 m (144,000 ft; 27 mi). These high-altitude balloon flights from 1947 to 1960 tested radiation exposure, physiological response, life support and recovery systems. The U.S.\n[…]\nThe first animals sent into space were fruit flies aboard a U.S.-launched V-2 rocket on 20 February 1947 from White Sands Missile Range, New Mexico. The purpose of the experiment was to explore the effects of radiation exposure at high altitudes. The rocket reached 109 km (68 mi) in 3 minutes 10 seconds, past both the U.S. Air Force 80 km (50 mi) and the\n[…]\nL. W. Fraser and E. H. Siegler, High Altitude Research Using the V-2 Rocket, March 1946 – April 1947 (Johns Hopkins University, Bumblebee Series Report No. 8, July 1948), p. 90."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Animais_no_espa%C3%A7o",
        "situacao": "ok",
        "texto": "Os animais no espaço originalmente serviram para testar a capacidade de sobrevivência em voos espaciais, antes que voos espaciais tripulados fossem tentados.\n[…]\nMais tarde, outros animais foram levados ao espaço para investigar vários processos biológicos e os efeitos da microgravidade que os voos espaciais tinham sobre eles. Bioastronáutica é uma área de pesquisa da engenharia biológica que abrange o estudo e o suporte da vida no espaço. Até o momento, os programas espaciais de sete países já enviaram animais ao espaço: a União Soviética (depois Rússia), os Estados Unidos, a França, a Argentina, a China, o Japão e o Irã.\n[…]\nAlice King Chatham (escultora que desenhou máscaras de oxigênio e equipamento de segurança para animais no programa espacial dos Estados Unidos)\n[…]\nFélicette: primeiro gato no espaço\n[…]\nFélix I: projeto brasileiro que visava enviar um gato ao espaço na década de 1950\n[…]\nTardígrados no espaço e na lua",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Cigarra-periódica",
      "descricao": "Cigarras norte-americanas do gênero Magicicada, cujas ninfas emergem em massa em ciclos de treze ou dezessete anos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Uma grande população de cigarras-periódicas, a chamada Ninhada Dez, saiu da terra em massa no leste dos Estados Unidos em 2021. Em que ano deve voltar?",
    "resposta": "2038",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brood_X"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brood_X",
        "situacao": "ok",
        "texto": "Brood X (Brood 10), the Great Eastern Brood, is one of 15 broods of periodical cicadas that appear regularly throughout the eastern United States. The brood's first major emergence after 2021 is predicted to occur during 2038.\n[…]\nSignificant numbers of periodical cicadas, believed to be Brood X emergents that were one year and four years early, appeared in the Baltimore, Maryland–Washington, D.C. area in May 2017 and throughout the brood's range in 2000. Stragglers emerged in the Baltimore, Maryland–Washington, D.C. area in May 2025, four years after the brood's major emergence in 2021.\n[…]\nPowell, Nate (2008). Staros, Chris (ed.). Swallow Me Whole. Marietta, Georgia: Top Shelf Productions. ISBN 978-1-60309-033-9. LCCN 2012376553. OCLC 812189446. Retrieved April 23, 2021 – via Internet Archive.\n[…]\nKritsky, Gene (February 26, 2021). Periodical Cicadas: The Brood X Edition. Columbus, Ohio: Ohio Biological Survey. ISBN 978-0-86727-173-7. OCLC 1246784386. Retrieved May 6, 2021 – via Google Books.\n[…]\nMarcus, Stephanie (June 2017). \"Periodical Cicadas: Selected Internet Resources\". Library of Congress. Archived from the original on March 8, 2021. Retrieved May 6, 2021.\n[…]\n2021: The Brood X: The Cicada Podcast from Mount St. Joseph University and Cincinnati Public Radio\n[…]\nMoore, Thomas E. (July 2, 2002). \"Generalized distributions of extant 17-year broods of periodical cicadas\". Singing Insects of North America. University of Florida Institute of Food and Agricultural Sciences. Archived from the original (figure) on August 28, 2008. Retrieved July 1, 2011."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Bicho-da-seda",
      "descricao": "Lagarta da mariposa domesticada Bombyx mori, que tece casulos de seda."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Monges contrabandearam ovos de bicho-da-seda escondidos em bengalas ocas até Constantinopla, quebrando o segredo chinês da seda. Em que século?",
    "resposta": "Século seis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Byzantine_silk"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Byzantine_silk",
        "situacao": "ok",
        "texto": "Byzantine silk is silk woven in the Byzantine Empire (Byzantium) from about the fourth century until the Fall of Constantinople in 1453.\n[…]\nImports of raw silk, silk yarn, and finished fabrics are all recorded, but the techniques of producing these textiles from the silkworm Bombyx mori remained a closely guarded secret of the Chinese until the Emperor of the East Justinian I (482–565) arranged to have silkworm eggs smuggled out of Central Asia in 553–54, setting the stage for the flowering of the Byzantine silk-weaving industry.\n[…]\nContemporary Chinese sources, namely the Old and New Book of Tang, also depicted the city of Constantinople and how it was besieged by Muawiyah I (founder of the Umayyad Caliphate), who exacted tribute afterwards.\n[…]\nNearly a century after it was made it was acquired by Bishop Gunther of Bamberg in Germany, on a pilgrimage to Constantinople. He died during the journey and it was used for his shroud. Embroidered religious scenes were also used for vestments and hangings, and the famous English Opus Anglicanum seems to have been heavily influenced by Byzantine embroidery.\n[…]\nAfter the capture of Constantinople in 1204 by the forces of the Fourth Crusade (1202–1204) and the establishment of the Latin Empire (1204–1261) and other \"Latin\" states in the Byzantine territories, the Byzantine silk industry contracted, supplying only the domestic luxury market, and leadership in European silk-weaving and design passed to Sicily and the emerging Italian centres of Lucca and Venice."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Seda_bizantina",
        "situacao": "ok",
        "texto": "Seda bizantina é a designação dada à seda produzida no Império Bizantino desde o século IV até à queda de Constantinopla em 1453.\n[…]\nA capital bizantina, Constantinopla foi o primeiro centro de tecelagem da Europa. A seda era muito importante para a economia bizantina, sendo usada pelo Estado como meio de pagamento e de diplomacia. A seda em bruto começou por ser importada da China e tecida em finos tecidos que se vendiam a preços elevados em todo o mundo. Mais tarde, foram contrabandeados bichos-da-seda para o império, e o comércio de seda do Extremo Oriente por via terrestre diminuiu gradualmente de importância.\n[…]\nHá registro das importações de seda em bruto, fio de seda e de tecido acabado, mas as técnicas de produção desses têxteis a partir dos casulos de bicho-da-seda foram cuidadosamente mantidas em segredo pelos Chineses até o imperador romano do Oriente Justiniano ter conseguido obter ovos de bicho-da-seda através de contrabando na Ásia Central em 553–554, o que abriu caminho ao florescimento da indústria bizantina de tecelagem de seda.\n[…]\nDe entre os cinco tipos básicos de tecelagem usados nos centros têxteis de Bizâncio e islâmicos do Mediterrâneo — tafetá, sarja, damasco, lampas e tapeçaria —, o mais importante foi a sarja chamada samite. Este termo deriva do francês antigo samit, do latim medieval samitum ou examitum, que por sua vez derivou do grego bizantino ἑξάμιτον (hexamiton), que significa \"seis fios\", o que é usualmente interpretado como indicando o uso de seis fios na urdidura.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Gafanhoto-das-montanhas-rochosas",
      "descricao": "Gafanhoto norte-americano extinto (Melanoplus spretus) que formava nuvens gigantescas nas pradarias no século dezenove."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O gafanhoto-das-montanhas-rochosas formava nuvens imensas nas pradarias americanas e depois sumiu de vez. Em que século foi visto vivo pela última vez?",
    "resposta": "Século vinte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rocky_Mountain_locust"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rocky_Mountain_locust",
        "situacao": "ok",
        "texto": "The Rocky Mountain locust (Melanoplus spretus) is an extinct species of grasshopper that ranged through the western half of the United States and some western portions of Canada with large numbers seen until the end of the 19th century.\n[…]\nIt has been hypothesized that the removal of prairie grasses which were maintained by native herbivores such as bison were important for maintaining the main breeding habitat of the locust. The plowing and irrigation by settlers as well as trampling by cattle and other farm animals near streams and rivers in the Rocky Mountains destroyed their eggs in the areas where they permanently lived, which ultimately caused their demise.\n[…]\nA semi-fictionalized description of the devastation created by Rocky Mountain locusts in the 1870s can be found in the semi-autobiographical novel On the Banks of Plum Creek by Laura Ingalls Wilder. Her description was based on actual incidents in western Minnesota during the summers of 1874 and 1875 as the locusts destroyed her family's wheat crop.\n[…]\nIn 2018, a chamber opera about the Rocky Mountain locust named Locust: The Opera premiered in Wyoming, USA. The libretto for the opera was written by professor and author Jeffrey Lockwood who adapted it from his book Locust: the Devastating Rise and Mysterious Disappearance of the Insect that Shaped the American Frontier.\n[…]\nDissosteira longipennis - a still-extant North American locust species\n[…]\nLocust Plague of 1874\n[…]\nPassenger pigeon – another example of rapid anthropogenic extinction of a North American species\n[…]\nRyckman, Lisa Levitt (22 June 1999). \"The Great Locust Mystery\". Rocky Mountain News. Denver, Colo. Archived from the original on 1 June 2009. Retrieved 2013-03-31."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Dia Mundial das Abelhas",
      "descricao": "Data comemorativa instituída pela ONU, celebrada em 20 de maio em homenagem ao apicultor esloveno Anton Janša."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A ONU celebra o Dia Mundial das Abelhas na data de nascimento de Anton Janša, pioneiro esloveno da apicultura. Em que mês?",
    "resposta": "Maio",
    "fonte": [
      "https://en.wikipedia.org/wiki/World_Bee_Day"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/World_Bee_Day",
        "situacao": "ok",
        "texto": "World Bee Day is celebrated on 20 May. On this day Anton Janša, the pioneer of beekeeping, was baptized in 1734.\n[…]\nThe UN Member States approved Slovenia’s proposal to proclaim 20 May as World Bee Day in December 2017."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_Mundial_das_Abelhas",
        "situacao": "ok",
        "texto": "O Dia Mundial das Abelhas foi estabelecido pela ONU durante a Assembleia Geral das Nações Unidas em dezembro de 2017 e é comemorado todo dia 20 de maio desde 2018. O dia escolhido foi uma homenagem ao esloveno Anton Janša, nascido em 1734 e considerado o pioneiro da apicultura moderna.\n[…]\nSegundo a ONU, a \"data foi proclamada pela Assembleia Geral das Nações Unidas para lembrar a importância da polinização para o desenvolvimento sustentável\".\n[…]\nO dia foi proposto pela Eslovênia.Mês de maio na Extremadura, uma das regiões da Espanha que produz mais mel. Julio Solana Muñoz, terceira geração de uma saga de apicultores, está preocupado. Há um ano ele observa que as flores nos campos perto da sua cidade já não são tão numerosas. Suas colmeias também estão diminuindo. Nos últimos anos, a taxa de mortalidade de suas abelhas aumentou para quase 35%.\n[…]\nAs abelhas são fundamentais para a economia de Fuenlabrada de los Montes, a cidade natal de Julio; seu mel é considerado um dos melhores da Europa e a região a que pertence, Extremadura, origina mais de 10% da produção de mel na Espanha. No entanto, as abelhas são também importantes em outras partes do mundo: três entre quatro culturas que produzem frutos ou sementes para consumo humano em todo o mundo dependem, pelo menos em parte, de polinizadores como as abelhas.\n[…]\n\"As abelhas são a vida\", diz Julio. \"Sem elas, a maioria das culturas alimentares não existiriam. (FAO, 2019)\n[…]\nNa Suécia, a Princesa Herdeira Vitória levou os filhos para visitar uma colmeia e marcar a data\n[…]\nNo Brasil, a Embrapa lembrou a data em seu website com o texto Dia Mundial ressalta a importância das abelhas para o equilíbrio do Planeta\n[…]\n«Website oficial». (em inglês) e esloveno)\n[…]\nProjetos da Embrapa (Brasil) para a apicultura",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Micrographia",
      "descricao": "Livro de Robert Hooke com ilustrações de observações ao microscópio, incluindo uma pulga gigante."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O livro Micrographia, de Robert Hooke, impressionou os leitores com o desenho enorme de uma pulga vista ao microscópio. Em que século foi publicado?",
    "resposta": "Século dezessete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Micrographia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Micrographia",
        "situacao": "ok",
        "texto": "Micrographia: or Some Physiological Descriptions of Minute Bodies Made by Magnifying Glasses. With Observations and Inquiries Thereupon is a historically significant book by Robert Hooke about his observations through various lenses. It was the first book to include illustrations of insects and plants as seen through microscopes.\n[…]\nPublished under the aegis of the Royal Society, the popularity of the book helped further the society's image and mission of being England's leading scientific organization. Micrographia's illustrations of the miniature world captured the public's imagination in a radically new way; Samuel Pepys called it \"the most ingenious book that ever I read in my life\".\n[…]\nIn 2007, Janice Neri, a professor of art history and visual culture, studied Hooke's artistic influences and processes with the help of some newly rediscovered notes and drawings that appear to show some of his work leading up to Micrographia.\n[…]\nHooke built up his images from numerous observations made from multiple vantage points, under varying lighting conditions, and with lenses of differing powers. Similarly, his specimens required a great deal of manipulation and preparation in order to make them visible through the microscope.\n[…]\nAdditionally: \"Hooke often enclosed the objects he presented within a round frame, thus offering viewers an evocation of the experience of looking through the lens of a microscope.\"\n[…]\nRobert Hooke. Micrographia: or, Some physiological descriptions of minute bodies made by magnifying glasses. London: J. Martyn and J. Allestry, 1665. (first edition).\n[…]\nProject Gutenberg Micrographia text\n[…]\nMicrographia - full digital facsimile at Linda Hall Library\n[…]\nTranscribing the Hooke Folio Archived 23 October 2011 at the Wayback Machine\n[…]\nMicrographia at the Internet Archive\n[…]\nMicrographia public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Micrographia",
        "situacao": "ok",
        "texto": "Micrographia é o título da obra escrita em 1665 pelo cientista inglês Robert Hooke, que contém a descrição detalhada de cinquenta e sete observações realizadas com o microscópio que o próprio autor fabricou, e três observações telescópicas. A obra foi recebida com entusiasmo por uma parte da comunidade científica europeia. Hooke tinha 28 anos quando a escreveu. A obra foi uma oferta da Royal Socie\n[…]\nA obra foi escrita numa linguagem clara, humorística em alguns casos, e os desenhos apresentavam pela primeira vez, com uma qualidade artística apreciável, aspectos desconhecidos até então de factos de natureza microscópica. Mais importante foi o caminho que abriu para a utilização de instrumentos para descrições científicas da natureza e as novidades que trouxe em diversos campos.\n[…]\nNesta obra aparece pela primeira vez o termo célula, ao referir-se aos poros observados numa fina lâmina de cortiça, que faziam lembrar ao autor, as celas dos monges. Também descreveu pela primeira vez a estrutura do gelo, a neve e os cristais de urina. A interpretação sobre as observações microscópicas de fósseis, consideram-se como uma das primeiras proposições da teoria da evolução biológica.\n[…]\nNeste livro também se encontra o primeiro registro da possibilidade de se produzir uma fibra têxtil artificial\n[…]\nManuel Varela. Hooke, La ambición de una ciência sin limites. Ed. Nivola. Madrid Sept 2004.\n[…]\nHooke Robert. Micrografía y algunas descripciones fisiológicas de los cuerpos diminutos realizadas con cristales de aumento con observaciones y disquisiciones sobre ellas.Ed. Círculo de lectores, Barcelona 1995\n[…]\nEdição digital completa de Micrographia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Bicho-geográfico",
      "descricao": "Larva migrans cutânea, infecção da pele por larvas de vermes de cães e gatos que deixam um rastro sinuoso."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que verme de cães e gatos, pego ao andar descalço na areia, tem um nome popular porque deixa na pele um rastro que lembra um mapa?",
    "resposta": "Bicho-geográfico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cutaneous_larva_migrans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cutaneous_larva_migrans",
        "situacao": "ok",
        "texto": "Cutaneous larva migrans (abbreviated CLM) is a skin disease in humans, caused by the larvae of various nematode parasites of the hookworm family (Ancylostomatidae). The parasites live in the intestines of dogs, cats, and wild animals; they should not be confused with other members of the hookworm family for which humans are definitive hosts, namely Ancylostoma duodenale and Necator americanus.\n[…]\nThe infection causes a red, intensely pruritic (itchy) eruption and may look like twirling lesions. The itching can become very painful and if scratched may allow a secondary bacterial infection to develop. Cutaneous larva migrans usually heals spontaneously over weeks to months and has been known to last as long as one year. However the severity of the symptoms usually causes those infected to seek medical treatment before spontaneous resolution occurs.\n[…]\nThis is separate from the similar cutaneous larva currens which is caused by Strongyloides. Larva currens is also a cause of migratory pruritic eruptions but is marked by 1) migratory speed on the order of inches per hour 2) perianal involvement due to autoinfection from stool and 3) a wide band of urticaria.\n[…]\nVisceral larva migrans\n[…]\nList of migrating cutaneous conditions"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Larva_migrans_cut%C3%A2nea",
        "situacao": "ok",
        "texto": "A larva migrans cutânea (LMC), dermatite serpiginosa ou dermatite pruriginosa, conhecida popularmente como bicho-geográfico, é uma série de manifestações patológicas causadas geralmente por parasitas específicos do intestino delgado de cães e gatos que eventualmente atingem o homem. As larvas infectantes deixam marcas parecidas com um mapa na pele do homem devido à sua migração e conseguem avançar\n[…]\nOs agentes etiológicos fêmeas da LMC fazem a postura de ovos no sistema intestinal dos cães e gatos, e esses ovos são eliminados juntamente com as fezes desses animais no ambiente. Em condições apropriadas forma-se a larva de primeiro estágio, L1, ainda no interior do ovo.\n[…]\nNos cães e gatos a infecção pode ocorrer pelas via oral, transplacentária e cutânea. Cerca de um mês depois as larvas atingem seu estado maduro e são eliminadas nas fezes dos cães e gatos.\n[…]\nA infecção é dada pelo contato da pele com as larvas L3 infectantes. Apesar de estas serem comuns nas areias das praias, os ovos progridem em qualquer terreno que lhes garanta calor e umidade suficientes para virarem larvas. Por isso, também são frequentemente encontrados em outros locais onde cães e gatos defecam, como montes de areia de construção e quadras de esportes, de areia e saibro.\n[…]\nA ocorrência de LMC é intimamente ligada à presença de cães e gatos nos locais compartilhados com o homem. É comum a presença de larvas em areias de parques infantis e as crianças são mais facilmente atingidas pois costumam brincar com a areia. Todavia, considerando a prevalência da contaminação dos cães, a contaminação em humanos é baixa.\n[…]\nA profilaxia consiste em evitar o contato com a areia ou terra, utilizando-se proteções como chinelos, sapatos, toalhas, etc.\n[…]\nLarva migrans visceral\n[…]\nLarva migrans ocular",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Helix pomatia",
      "descricao": "Caracol terrestre europeu grande, o tradicional escargot da culinária francesa."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na França, o grande caracol mais tradicional do prato escargot leva o nome de qual região do país?",
    "resposta": "Borgonha",
    "distratores": [
      "Provença",
      "Normandia",
      "Bretanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Helix_pomatia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Helix_pomatia",
        "situacao": "ok",
        "texto": "Helix pomatia, known as the Roman snail, Burgundy snail, or escargot, is a species of large, air-breathing stylommatophoran land snail belonging to the family Helicidae and native to Europe. It is characterized by a globular brown shell.\n[…]\nThe present distribution of Helix pomatia is considerably affected by the dispersion by human and synanthropic occurrences. The northern limits of their natural distribution run presumably through central Germany and southern Poland with the eastern range limits running through western-most Ukraine and Moldova/Romania to Bulgaria. In the south, the species reaches northern Bulgaria, central Serbia, Bosnia and Hezegovina and Croatia.\n[…]\nPreference for feeding on the nettle Urtica dioica was found in H. pomatia juveniles in Germany.\n[…]\nWithin its native range, Helix pomatia is mostly a common species. It is also considered Least Concern by the IUCN Red List. However, it is listed in the Annex V of the EU's Habitats Directive and protected by law in several countries to regulate harvesting from free living populations.\n[…]\nEgorov R. (2015). \"Helix pomatia Linnaeus, 1758: the history of its introduction and recent distribution in European Russia\" (PDF). Malacologica Bohemoslovaca. 14: 91–101. doi:10.5817/MaB2015-14-91.\n[…]\nRoumyantseva E. G.; Dedkov V. P. (2006). \"Reproductive properties of the Roman snail Helix pomatia L. in the Kaliningrad Region, Russia\" (PDF). Ruthenica (in Russian). 15: 131–138. Archived from the original on 2018-12-22.\n[…]\nKorábek, O.; Juřičková, L.; Petrusek, A. (2015). \"Splitting the Roman snail Helix pomatia Linnaeus, 1758 (Stylommatophora: Helicidae) into two: redescription of the forgotten Helix thessalica Boettger, 1886\". Journal of Molluscan Studies. 82: 11–22."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Helix_pomatia",
        "situacao": "ok",
        "texto": "Helix pomatia, conhecido pelo nome comum de escargot, é uma espécie de caracol terrestre comestível de grandes dimensões, pertencente à família Helicidae. A espécie é nativa da Europa, sendo objecto de captura e de cultura em instalações de helicicultura,sendo comercializada para fins gastronómicos sob o nome francês de escargot.\n[…]\n(em russo) Roumyantseva E. G. & Dedkov V. P. (2006). \"Reproductive properties of the Roman snail Helix pomatia L. in the Kaliningrad Region, Russia\". Ruthenica 15: 131–138. abstract\n[…]\n«Helix pomatia» (em inglês). NCBI",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Mosquito",
      "descricao": "Díptero da família Culicidae, de pernas longas, cujas fêmeas sugam sangue."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra mosquito, usada também em inglês, vem do espanhol e do português. O que ela significa ao pé da letra?",
    "resposta": "Mosca pequena",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mosquito"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mosquito",
        "situacao": "ok",
        "texto": "Mosquitoes, the Culicidae, are a family of small flies consisting of 3,600 species. The word mosquito (formed by mosca and diminutive -ito) is Spanish and Portuguese for little fly. Mosquitoes have a slender, segmented body, one pair of wings, three pairs of long hair-like legs, and a specialized, highly elongated set of mouthparts forming a proboscis, adapted for piercing and sucking. All mosquit\n[…]\nThe multitude of characteristics in a host observed by the mosquito allows it to select a host to feed on. It activates odour and visual search behaviours that it otherwise would not use, when in presence of CO2. In terms of a mosquito's olfactory system, chemical analysis has revealed that people who are highly attractive to mosquitoes produce significantly more carboxylic acids.\n[…]\nLafcadio Hearn tells that in Japan, mosquitoes are seen as reincarnations of the dead, condemned by the errors of their former lives to the condition of Jiki-ketsu-gaki, or \"blood-drinking pretas\".\n[…]\nTwelve ships of the Royal Navy have borne the name HMS Mosquito or the archaic form of the name, HMS Musquito.\n[…]\nThe de Havilland Mosquito was a high-speed aircraft manufactured between 1940 and 1950, and used in many roles.\n[…]\nThe Russian city of Berezniki annually celebrates its mosquitoes from the 17th of July to the 20th in a \"most delicious girl\" competition. In the competition, women stand for 20 minutes in their shorts and undershirts (British: vests), and the one who receives the most bites wins.\n[…]\nMosquito proboscis inspired needles are being applied in biomimetic design for use in medicine.\n[…]\nWinegard, Timothy Charles (2019). The mosquito: a human history of our deadliest predator. Penguin Random House. ISBN 978-1-5247-4341-3. OCLC 1111638283.\n[…]\nQuotations related to Mosquitoes at Wikiquote\n[…]\nMosquito at IFAS\n[…]\nA film clip describing The Life Cycle of the Mosquito is available for viewing at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Culic%C3%ADdeos",
        "situacao": "ok",
        "texto": "Culicídeos (Culicidae) é uma família de insetos  habitualmente chamados de muriçocas, mosquitos ou pernilongos. As fêmeas em muitas regiões são designadas vulgarmente como melgas. Como os outros membros da ordem Diptera, os mosquitos têm um par de asas e um par de halteres. Em geral, apresentam dimorfismo sexual acentuado: as fêmeas apresentam antenas pilosas e são muito mais corpulentas que os ma\n[…]\nEm várias partes do Brasil, faz-se distinção entre mosquito e pernilongo: o primeiro refere-se a pequenas moscas, como as drosófilas, enquanto que o segundo, além dessa denominação, é também referido como \"muriçoca\". Na maioria dos estados da Região Norte do Brasil, este pernilongo chama-se \"carapanã\". As fêmeas do pernilongo são também conhecidas como \"melgas\" em Portugal.\n[…]\nSão pequenos dípteros, medindo em geral menos de um centímetro de comprimento ou de envergadura, corpo delgado e longas pernas. Nestes gêneros estão os mosquitos vetores do dengue e da malária, por exemplo, tendo então grande importância do ponto de vista sanitário e epidemiológico. Podem ser encontrados representantes desta família de norte ao sul do Brasil. Não se pode atribuir, contudo, o nome carapanã a uma única espécie, visto que o nome popular é generalizado.\n[…]\n\"Mosquito\" vem do latim musca. \"Pernilongo\" é uma referência às longas pernas do inseto. \"Mosquito-prego\" é uma referência a sua picada que se assemelha à perfuração de um prego. \"Muriçoca\", \"meruçoca\" e \"muruçoca\" são oriundos do tupi muri'soka. \"Carapanã\" vem do tupi karapa'nã. \"Carapanã-pinima\" vem da junção dos termos tupis karapa'nã (\"mosquito\") e pi'nima (\"pintado\"). \"Fincão\" e \"fincudo\" vem de \"fincar\" e são uma referência a sua picada.\n[…]\nConsoli RAGB, Lourenço-de-Oliveira R. (1994). \"Principais mosquitos de importância sanitária no Brasil\" (PDF)  . Editora Fundação Instituto Oswaldo Cruz, Rio de Janeiro, Brasil.\n[…]\nCatálogo de Mosquito",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Libélula",
      "descricao": "Insetos voadores da ordem Odonata, de corpo longo, quatro asas e larvas aquáticas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Brasil, a libélula ganhou o apelido de uma profissão porque toca a água repetidas vezes com a ponta do corpo. Que apelido?",
    "resposta": "Lavadeira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Odonata",
      "https://pt.wikipedia.org/wiki/Libélula"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Odonata",
        "situacao": "ok",
        "texto": "Odonata (Odonata; Odous = dente; gnatha = maxilas) é uma ordem de insetos que inclui animais popularmente conhecidos como lavadeira, lava-bunda, libélula, jacinta, cavalo-de-judeu, cavalinho-do-diabo, zigue-zague e donzelinha. O nome da ordem refere-se aos dentes fortes e robustos presentes nas mandíbulas dos adultos, caracterizando o hábito predatório desses insetos.\n[…]\nA filogenia das superfamílias de Odonata mais aceita atualmente é a de Rehn (2003), a qual foi simplificada por Grimald e Engel.\n[…]\nPara a locomoção, as ninfas de donzelinha (Zygoptera) realizam ondulações no corpo para nadar, utilizando as brânquias de forma análoga à cauda dos peixes. Já as ninfas de libélula (Anisoptera) bombeiam a água para o reto pelo ânus durante a respiração, expelindo essa água em seguida. Essa expulsão rápida da água pelo ânus resulta em uma “propulsão a jato”, possibilitando a locomoção da ninfa na água.\n[…]\nO comportamento desses animais é diurno. Logo que nascem, os adultos passam a viver na vegetação das proximidades, onde encontram alimento e abrigo. A maioria inicia suas atividades ao amanhecer, quando há raios de sol sobre o corpo d'água, voltando a seus abrigos ao anoitecer, quando o céu é encoberto por nuvens ou quando chove.\n[…]\nOs Odonatas se aglomeram próximos a corpos d'água para dar início a disputa por uma parceira. Disputas territoriais e a ornamentação de seus abdomens e asas podem determinar o sucesso na conquista de uma fêmea. As libélulas apresentam dimorfismo sexual bem evidente, sendo os machos mais coloridos e brilhantes que as fêmeas e também apresentam genitália nos segmentos abdominais II e III, enquanto as fêmeas apresentam os órgãos genitais no segmento abdominal VIII.\n[…]\nDiversidade e distribuição de Odonata no estado de São Paulo, Brasil (em português)\n[…]\nOdonata (libélulas) da região de Ottawa, Canadá (em inglês)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Libélula",
        "situacao": "desambiguacao",
        "texto": "Libélula pode referir-se a:\n\nSubordens de insetos\nAnisópteros\nZigópteros\nOutros\nLibélula (canção) — canção de Grag Queen\nLibélula 44 — galáxia ultra difusa\n\n\n== Ver também ==\nTodas as páginas cujo título começa por \"Libélula\"\nTodas as páginas que tenham \"Libélula\" no título\nBusca por \"libélula\""
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Aranha-marrom",
      "descricao": "Aranhas do gênero Loxosceles, de veneno que causa necrose na pele, com uma mancha escura no dorso."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por causa de uma mancha escura no dorso, a aranha-marrom é chamada em inglês e em outros idiomas pelo nome de qual instrumento musical?",
    "resposta": "Violino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Recluse_spider"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Recluse_spider",
        "situacao": "ok",
        "texto": "The recluse spiders (Loxosceles (), also known as brown spiders, fiddle-backs, violin spiders, and reapers, are a genus of spiders that were first described by R. T. Lowe in 1832. They are venomous spiders known for their bite, which sometimes produces a characteristic set of symptoms known as loxoscelism.\n[…]\nRecluse spiders are now identified as members of the family Sicariidae, having formerly been placed in their own family, the Loxoscelidae. Although recluse spiders are feared, they are usually not aggressive.\n[…]\nLoxosceles is distributed nearly worldwide in warmer areas. All have six eyes arranged in three groups of two (dyads) and some are brownish with a darker brown characteristic violin marking on the cephalothorax. However, the \"violin marking\" cannot be used as a reliable way to identify the spider as many unrelated species of spider have similar markings. Recluses are typically about 7–12 mm long.\n[…]\nBody size ranges from 5-15 mm for females and 3.5-12 mm for males. Color of body is yellowish to reddish brown with contrasting darker markings. Legs and pedipalps are light brown. The carapace is slightly longer than wide with a conspicuous deeply impressed fovea. The clypeus and chelicerae are directed to the front, usually with a \"violin-shaped\" darker marking on the anterior part of the carapace. Six eyes are arranged in a recurved row in three groups, each with two eyes.\n[…]\nThe Chilean recluse (L. laeta) supposedly has a more potent venom, which results in systemic involvement more often. All Loxosceles species that have been tested have venoms similar to that of the brown recluse, and all should be avoided. In general, though, they are not aggressive and commonly occupy human dwellings without causing problems.\n[…]\nChilean recluse\n[…]\nArachnology Home Pages: Loxosceles: Recluse spiders"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Loxosceles",
        "situacao": "ok",
        "texto": "Loxosceles Heineken & Lowe, 1832 é um gênero de aracnídeos peçonhentos pertencentes à família Sicariidae, conhecidos pelos casos onde sua picada tem efeito necrosante, apesar de a grande maioria das picadas não chegar nessa gravidade. Os membros destes gêneros são conhecidos pelos nomes comuns de aranhas-marrom (Brasil) ou aranhas-violino (Portugal).\n[…]\nLoxosceles amazonica (Gertsch, 1967) — encontrada no norte e no nordeste do Brasil. Tem o colorido marrom, com o cefalotórax e pernas menos pigmentadas, além do abdome mais próximo ao preto;\n[…]\nLoxosceles reclusa (Gertsch & Mulaik, 1940) — encontrada na América do Norte, principalmente nos EUA (Nos estados do Texas, Kansas, Missouri, Oklahoma e California). Apresenta uma linha preta na porção dorsal do seu tórax, gerando o apelido de \"Aranha Violino\";\n[…]\nA picada de uma aranha Loxosceles geralmente pode ser categorizada em um dos seguintes grupos:\n[…]\nO veneno das aranhas Loxosceles tem um efeito prejudicial dinâmico sobre o tecido adiposo (gordura). Consequentemente, mordidas em pessoas magras ou musculosas costumam ser muito menos dramáticas, enquanto que vítimas mordidas em regiões com mais tecido adiposo (coxas, nadegas), ou pessoas com sobrepeso, tendem a sofrer os piores sintomas.\n[…]\nA região sul do Brasil (Paraná principalmente) tem sofrido com o ataque destas aranhas, cerca de 3.000 acidentes somente em 2004. Um relatório de um Instituto de Saúde de Minas Gerais, mostra que foram encontradas aranhas-marrons do gênero Loxosceles em algumas casas da Grande Belo Horizonte, onde esta aranha estaria extinta desde 1917, e teoricamente somente existiria em cavernas.\n[…]\nÀ noite, a aranha-marrom costuma ficar alguns centímetros à frente de seu esconderijo (comumente em cantos e frestas próximos ao chão de habitações humanas) para onde corre ao sentir perigo. Não é agressiva.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Tatuzinho-de-jardim",
      "descricao": "Pequeno crustáceo terrestre da ordem Isopoda que se enrola em bola quando ameaçado."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Portugal, o tatuzinho-de-jardim, que se enrola como uma bolinha, é chamado por um nome que lembra as peças de um colar. Qual?",
    "resposta": "Bicho-de-conta",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Armadillidium_vulgare"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Armadillidium_vulgare",
        "situacao": "ok",
        "texto": "Armadillidium vulgare conhecida por bicho-de-conta ou tatuzinho-de-jardim é uma espécie de distribuição global originária do Mediterrâneo, provavelmente da parte oriental, como os demais do grupo vulgare. Exótica no Brasil, onde é encontrada em zonas de influência antrópica. O macho tem 13,6 mm de comprimento por 6,4 mm de largura, e a fêmea, 15,1 mm por 7,3 mm. Ao nascer, os filhotes apresentam u\n[…]\nvulgare obter 94% de sua necessidade normal de oxigênio no ar seco, quanto o tegumento também está seco.\n[…]\nA remoção da glândula androgênica em indivíduos da espécie Armadillidium vulgare causa a completa feminização de jovens machos, e a inserção da glândula de machos adultos em fêmeas jovens causa a completa e total reversão funcional do sexo.\n[…]\nArmadillidium vulgare é o exemplo mais estudado de determinação do sexo por fatores sexuais parasíticos. Nesta espécie, fatores sexuais parasíticos transmitidos maternalmente tendem a substituir a determinação sexual homo-heterogamética (onde ZZ é macho e WZ é fêmea). Um destes fatores sexuais parasíticos é uma bactéria parecida com a Wolbachia (F) encontrada no citoplasma de células hospedeiras.\n[…]\nEm populações onde F e f (dois fatores sexuais parasíticos) estão presentes, não há fêmeas genéticas e todos os indivíduos são geneticamente machos. Nestas populações, os machos são principalmente produzidos por genes do Armadillidium vulgare que limitam a expressão ou transmissão dos fatores sexuais parasíticos.\n[…]\nUm gene masculinizante (M) foi descoberto em populações selvagens de Armadillidium vulgare que abrigavam fatores sexuais parasíticos. Este gene tem a capacidade de inibir a expressão de f e parcialmente a de F. As propriedades masculinizadoras deste gene dominante autossômico foram demonstradas ao se cruzar machos abrigando M com fêmeas genéticas (WZ). O resultado dos cruzamentos pode ser descrito pela seguinte equação:"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Efêmera",
      "descricao": "Insetos da ordem Ephemeroptera, de larvas aquáticas e adultos que vivem muito pouco tempo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome da ordem das efêmeras, insetos cujos adultos vivem muito pouco, vem de uma palavra grega que significa durar quanto tempo?",
    "resposta": "Um dia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mayfly"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mayfly",
        "situacao": "ok",
        "texto": "Mayflies (also up-winged flies or up-wing flies, or drake-flies in the UK; shadflies or fishflies in  northern U.S. and Canada) are aquatic insects belonging to the order Ephemeroptera. This order is part of an ancient group of insects termed the Palaeoptera, which also contains dragonflies and damselflies. Over 3,000 species of mayfly are known worldwide, grouped into over 400 genera in 42 famili\n[…]\nMayfly phylogeny was further studied using morphological and molecular analyses by Ogden and others in 2009. They found that the Asian genus Siphluriscus was sister to all other mayflies. Some existing lineages such as Ephemeroidea, and families such as Ameletopsidae, were found not to be monophyletic, through convergence among nymphal features.\n[…]\nThe mayfly has come to symbolise the transitoriness of life. Peter Marren notes that the best-known thing about mayflies is their one-day adult life: he quotes from the poem \"Adonais\" by Percy Bysshe Shelley, \"each ephemeral insect then / Is gather'd into death without a dawn\", and remarks, \"no wonder mayfly is a byword for brevity\".\n[…]\nOn the face of the sun its countenance gazes, then all of a sudden nothing is there!\" The Roman lawyer Cicero wrote philosophically of them in his Tusculan Disputations, noting Aristotle's remark that the mayfly's life is just one day, and that compared to eternity, human life too is almost as brief. Scholars have noted that the English poet George Crabbe wrote a poem that compares the brief life of a newspaper with that of mayflies, both being known as \"Ephemera\", things that live for a day.\n[…]\nData related to Ephemeroptera at Wikispecies\n[…]\nMedia related to Ephemeroptera at Wikimedia Commons\n[…]\nInfo about Ephemeroptera Archived 2009-06-29 at the Wayback Machine on Tree of Life"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Efemer%C3%B3pteros",
        "situacao": "ok",
        "texto": "Os efemerópteros (Ephemeroptera) são uma ordem de insetos aquáticos, popularmente conhecidos como efémeras, efeméridas ou efémeros. Estão presentes no mundo todo, exceto na Antártida, e correspondem a uma diversidade de aproximadamente 3 000 espécies, distribuídas em mais de 375 gêneros e 37 famílias. Sua origem remete ao período Carbonífero no Paleozoico, e, junto com as libélulas (odonatos) e ou\n[…]\nO nome Ephemeroptera deriva do grego ephemeros, que significa “duração de um dia”, relacionando-se à vida efêmera dos adultos. Os insetos dessa ordem podem ser conhecidos popularmente como “efeméridas”, “borboletas de piracema”, “siriruias”, “sararás” ou “besouros-de-maio”.\n[…]\nEm inglês, as efeméridas são chamadas de “mayflies”, de “may” (maio) e “fly” (inseto alado). Esse nome é dado porque se acreditava que as formas adultas viviam em maio. Outro nome popular em inglês é “dayfly” (moscas de dia), pois os adultos normalmente vivem apenas um dia.\n[…]\nNo entanto, da mesma localidade foram descritas as estranhas larvas e adultos da extinta família Mickoleitiidae (ordem Coxoplectoptera), que representa o grupo irmão fóssil das efêmeras modernas, embora apresentassem adaptações muito peculiares, como as patas dianteiras raptoriais.\n[…]\nA espécie Ephemera compar é conhecida a partir de um único espécime, coletado no \"sopé das montanhas do Colorado\" em 1873, mas, apesar dos intensos levantamentos das efeméridas do Colorado relatados em 1984, não foi redescoberta.\n[…]\nAs efeméridas passaram a representar a brevidade da vida. O poeta inglês George Crabbe, interessado por insetos, comparou um jornal a uma efemérida, ambos “Ephemera”, que duram apenas um dia. Esse tema também aparece no poema “The Mayfly” de Douglas Florian e “Mayflies” de Richard Wilbur. Um antigo poema mesopotâmico, Epopeia de Gilgamesh compara a vida curta de Gilgamesh àquela de Ephemeroptera.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Caracol-de-jardim",
      "descricao": "Caracol terrestre europeu (Cornu aspersum), comum em jardins e usado como escargot."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Apesar das aparências, o caracol-de-jardim e o polvo pertencem ao mesmo grande grupo de animais. Qual?",
    "resposta": "Moluscos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cornu_aspersum",
      "https://pt.wikipedia.org/wiki/Mollusca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cornu_aspersum",
        "situacao": "ok",
        "texto": "Cornu aspersum (syn. Helix aspersa, Cryptomphalus aspersus), known by the common name garden snail, is a species of land snail in the family Helicidae, which includes some of the most familiar land snails. Of all terrestrial molluscs, this species may be the most widely known. It was classified under the name Helix aspersa for over two centuries, but the prevailing classification now places it in \n[…]\nThe accepted name of the species was long considered to be Helix aspersa, a member of the genus Helix, like the Roman snail Helix pomatia. However, in a number of publications since 1990, it has instead been placed in various genera previously considered as subgenera of Helix. One such genus is Cornu, which is appropriate if the species is considered as congeneric with the species previously known as Helix aperta. Then the name would be Cornu aspersum.\n[…]\nSome Algerian forms are indeed genetically quite distant from the usual, most widespread form, but the large form in snail farms is different again. It is also problematic that there was a prior use of the name Helix aspersa maxima unassociated with Algeria. The subspecies maximum is formally considered by some authorities as a junior synonym of Cornu aspersum.\n[…]\nCornu aspersum has gained some popularity as the chief ingredient in skin creams and gels (crema/gel de caracol) sold in the US. These creams are promoted as being suitable for use on wrinkles, scars, dry skin, and acne to reduce pigmentation, scarring, and wrinkles.\n[…]\nMedia related to Helix aspersa at Wikimedia Commons\n[…]\nHelix aspersa at Animalbase taxonomy, short description, distribution, biology, status (threats), images\n[…]\nHelix aspersa images at Encyclopedia of Life  including genitalia drawings\n[…]\nVideo of froth protection response of Cornu aspersum\n[…]\nZachi Evenor, A video showing a garden snail (Cornu aspersum / Helix aspersa) in action, YouTube, November 9, 2013"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mollusca",
        "situacao": "ok",
        "texto": "Os moluscos (filo Mollusca, do latim molluscus, mole) constituem um grande filo de animais invertebrados, marinhos, de água doce ou terrestres. O filo Mollusca é o segundo filo com a maior diversidade de espécies, depois dos artrópodes, (cerca de 93 000 espécies viventes confirmadas e até 200 000 espécies viventes estimadas, e 70 000 espécies fósseis) e inclui uma variedade de animais muito famili\n[…]\nOs moluscos têm reprodução sexuada, sendo que a maioria apresenta sexos separados, com exceção de alguns bivalves (ostras), nudibrânquios (aplísia) e pulmonatas (caracol), que são animais hermafroditas. A fecundação pode ser externa, na qual o macho libera o espermatozoide e a fêmea o óvulo, na água, ou a reprodução interna na qual o espermatozoide é liberado no corpo da fêmea.\n[…]\nApós a fecundação há a formação de uma larva livre-natante (larva trocófora, e depois o estado de larva véliger, que é exclusiva dos moluscos), mesmo no caso de animais sésseis como as ostras e mexilhões, que passa a integrar o plâncton, até que se fixe definitivamente.\n[…]\nOs moluscos englobam uma grande variedade de recursos alimentares denominados frutos-do-mar. Ostras, mexilhões e outras variedades de moluscos são consumidos em diversos pratos típicos regionais. Os bivalves, por serem na maioria animais filtradores, são muito utilizados como indicadores ambientais, uma vez que acumulam substâncias tais como metais pesados.\n[…]\nA existência da grande quantidade de registros fósseis tem se mostrado um fator bom e ao mesmo tempo ruim, na medida em que as tentativas de traçar a história evolutiva dos moluscos estão frequentemente sendo frustradas pelos bancos de dados limitados e algumas vezes confusos fornecidos pelas conchas.\n[…]\nExistem dez classes de moluscos, oito que ainda vivem e duas que só são conhecidas através de fósseis.\n[…]\nHelcionelloida (fósseis; parecidos com caracóis);"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Eastgate Centre",
      "descricao": "Centro comercial e de escritórios em Harare, no Zimbábue, com ventilação inspirada nos cupinzeiros."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Um prédio de lojas e escritórios em Harare, no Zimbábue, se mantém fresco quase sem ar-condicionado imitando as construções de qual animal?",
    "resposta": "Cupim",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eastgate_Centre,_Harare"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eastgate_Centre,_Harare",
        "situacao": "ok",
        "texto": "The Eastgate Centre is a shopping centre and office block in the business centre of Harare, Zimbabwe, designed by Mick Pearce and built by Ove Arup and Partners. It is a unique example of building ventilated and cooled entirely by natural means.\n[…]\nThe Eastgate Centre was commissioned in 1961 opening its doors in 1996 on Robert Mugabe Avenue and Second Street in the business downtown of Harare, Zimbabwe. The project cost $36 million. It was designed by Zimbabwean architect Mick Pearce and built by engineers from British firm Ove Arup and Partners. Eastgate contains nine storeys of commercial space lined up into two rows that ran along a glass-covered atrium, with retail shops situated on the first two floors and offices above them.\n[…]\nPassively cooled, Eastgate uses only 10% of the energy required by conventionally cooled building with similar space. When actively cooled, the centre consumes 35% less energy to maintain the same temperature as a conventionally cooled building. The inclusion of passive cooling, instead of importing air conditioning, saved $3.5 million.\n[…]\nThe construction of Eastgate, Zimbabwe became the \"forerunner in incorporating green building technologies in the sub-Saharan Africa\". Eastgate is emulated by London's Portcullis House (2001), opposite the Palace of Westminster. The distinctive giant chimneys on which the system relies are clearly visible.\n[…]\nMick Pearce Official Eastgate Project website\n[…]\nARUP Eastgate Project site\n[…]\nArchNet Digital Library Photographs and diagrams of the Eastgate Centre."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Gafanhoto",
      "descricao": "Inseto saltador herbívoro da subordem Caelifera, de antenas curtas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo os Evangelhos, que profeta vivia no deserto se alimentando de gafanhotos e mel silvestre?",
    "resposta": "João Batista",
    "fonte": [
      "https://en.wikipedia.org/wiki/John_the_Baptist",
      "https://pt.wikipedia.org/wiki/João_Batista"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/John_the_Baptist",
        "situacao": "ok",
        "texto": "John the Baptist (c. 6 BC – c. AD 30) was an itinerant Jewish preacher (Hebrew name Yochanan) who was active in the area of the Jordan River in the early 1st century AD. Sometimes referred to as John the Baptizer, he is known as Saint John the Forerunner in Eastern Orthodoxy, Eastern Catholicism, and Oriental Orthodoxy, as Saint John the Immerser in the Baptist tradition, and as the prophet Yahya \n[…]\nThese include the typical scenes: the Annunciation to Zechariah; John's birth; his naming by his father; the Visitation; John's departure for the desert; his preaching in the desert; the Baptism of Christ; John before Herod; the dance of Herod's stepdaughter, Salome; his beheading; and the daughter of Herodias Salome carrying his head on a platter.\n[…]\nAlso, on the night of 23 June on to the 24th, Saint John is celebrated as the patron saint of Porto, the second largest city in Portugal. An article from June 2004 in The Guardian remarked that \"Porto's Festa de São João is one of Europe's liveliest street festivals, yet it is relatively unknown outside the country\".\n[…]\nIn the North, particularly in the state of Amazonas, the \"Festival de Parintins\" adds a unique dimension to the June celebrations with the \"Boi-Bumbá\" folklore, perform theatrical retellings of Amazonian myths, mixing indigenous, African, and European cultural elements. More than a religious observance, the \"Festa de São João\" represents a vibrant expression of Brazilian folklore, reinforcing communal bonds and celebrating the diverse cultural identities that shape the nation.\n[…]\nAlong with John the Evangelist, John the Baptist is claimed as a patron saint by the fraternal society of Freemasons."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/João_Batista",
        "situacao": "ok",
        "texto": "João Baptista (em aramaico: יוחנן בר זכריא; romaniz.: Yōḥannan bar Zəḵaryā; Judeia, século I a.C., c. 28–30) é uma das principais figuras do cristianismo, tendo sido um pregador e profeta itinerante cuja mensagem era baseada no arrependimento, pregando o batismo para a remissão dos pecados, e na anunciação da chegada do messias Jesus Cristo, motivo pelo qual é também conhecido como São João, o Pre\n[…]\nNos evangelhos João Baptista é identificado como: o mensageiro enviado por Deus do qual o profeta Malaquias escreveu;  a \"voz que clama no deserto\" em Isaías; e o profeta Elias – em espírito e poder – que havia de vir antes da era messiânica.\n[…]\nJoão finalmente nasceu seis meses antes de seu primo Jesus. No oitavo dia em que teve que ser circuncidado, os vizinhos e parentes se reuniram e quiseram nomear o bebê Zacarias como o pai, porém ele escreveu numa tabuinha: “João é o seu nome”; e no momento seguinte conseguiu falar novamente. O Evangelho menciona brevemente a infância subsequente de João, dizendo que ele “esteve nos desertos até ao dia da sua aparição a Israel”. Mais nada sobre a infância de João é mencionado.\n[…]\nSegundo o Evangelho de Mateus, João inicialmente relutou em batizar Jesus, afirmando que ele próprio é quem deveria ser batizado por Cristo. No entanto, Jesus insistiu, dizendo que o batismo era necessário para \"cumprir toda a justiça\". Essa expressão tem sido interpretada como a intenção de Jesus de se identificar com a humanidade pecadora e de seguir o plano de Deus para a salvação. Após a insistência de Jesus, João Baptista consentiu e o batizou.\n[…]\nOs bahá'ís consideram que João foi um profeta de Deus que, como todos os outros profetas, foi enviado para instilar o conhecimento de Deus, promover a unidade entre as pessoas do mundo e mostrar às pessoas a maneira correta de viver. Segundo os Bahá'ís, João era um profeta menor."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Zangão",
      "descricao": "Macho da abelha-europeia, cuja principal função é fecundar a rainha."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Como o zangão tem mãe, mas não tem pai, sua árvore genealógica segue qual famosa sequência de números?",
    "resposta": "Sequência de Fibonacci",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fibonacci_sequence"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fibonacci_sequence",
        "situacao": "ok",
        "texto": "In mathematics, the Fibonacci sequence is a sequence in which each element is the sum of the two elements that precede it. Numbers that are part of the Fibonacci sequence are known as Fibonacci numbers, commonly denoted Fn . The initial elements of the sequence are F1 = 1 and F2 = 1, though many authors also include a zeroth element F0 = 0. Starting from F0, the sequence begins\n[…]\nFibonacci coding\n[…]\nThe measured values of voltages and currents in the infinite resistor chain circuit (also called the resistor ladder or infinite series-parallel circuit) follow the Fibonacci sequence. The intermediate results of adding the alternating series and parallel resistances yields fractions composed of consecutive Fibonacci numbers. The equivalent resistance of the entire circuit equals the golden ratio.\n[…]\nBrasch et al. 2012 show how a generalized Fibonacci sequence also can be connected to the field of economics. In particular, it is shown how a generalized Fibonacci sequence enters the control function of finite-horizon dynamic optimisation problems with one state and one control variable. The procedure is illustrated in an example often referred to as the Brock–Mirman economic growth model.\n[…]\nMario Merz included the Fibonacci sequence in some of his artworks beginning in 1970.\n[…]\nFibonacci numbers in popular culture\n[…]\nFibonacci word – Binary sequence from Fibonacci recurrence\n[…]\nRandom Fibonacci sequence – Randomized mathematical sequence based upon the Fibonacci sequence\n[…]\nWythoff array – Infinite matrix of integers derived from the Fibonacci sequence\n[…]\nFibonacci Sequence and Golden Ratio: Mathematics in the Modern World - Mathuklasan with Sir Ram on YouTube - animation of sequence, spiral, golden ratio, rabbit pair growth. Examples in art, music, architecture, nature, and astronomy\n[…]\nPeriods of Fibonacci Sequences Mod m at MathPages\n[…]\nFibonacci Sequence on In Our Time at the BBC"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci",
        "situacao": "ok",
        "texto": "Na matemática, a sucessão de Fibonacci (ou sequência de Fibonacci), é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual cada termo subsequente  corresponde à soma dos dois anteriores. A sequência recebeu o nome do matemático italiano Leonardo de Pisa ou Leonardo Fibonacci, mais conhecido por apenas Fibonacci, que descreveu, no ano de 1202, o crescimento de uma população d\n[…]\no n-ésimo termo da sequência de Fibonacci, então\n[…]\nA sequência de Fibonacci está intrinsecamente ligada à natureza. Estes números são facilmente encontrados no arranjo de folhas do ramo de uma planta, em copas das árvores ou até mesmo no número de pétalas das flores.\n[…]\nNa espiral do nautilus, por exemplo, pode ser facilmente percebida a sequência de Fibonacci. A composição de quadrados com lados de medidas proporcionais aos números da sequência mostram a existência desta sucessão numérica nesta peça natural.\n[…]\n\"Bougie\", que significa \"vela\" em francês), importante exportadora de cera na época de Leonardo de Pisa, sugeriu ele, fez o que realmente a abelha-produtores de Bugia e o conhecimento das linhagens de abelhas que inspirou os números da seqüência de Fibonacci, em vez de o modelo de reprodução de coelhos.\n[…]\nEm outro trecho do filme, Max encontra o judeu Lenny Meyer, que lhe fala da crença em que a Torah seria uma sequência de números que formam um código enviado por Deus, quando entendidas as correspondências entre as letras do alfabeto hebraico a números. Max diz que alguns dos conceitos apresentados por Lenny são similares a uma sequência de Fibonacci.\n[…]\nUm repfigit ou número de Keith é um número inteiro, superior a 9, tal que os seus dígitos, ao começar uma sequência de Fibonacci, alcançam posteriormente o referido número. Um exemplo é 47, porque a sequência de Fibonacci que começa com 4 e 7 (4, 7, 11, 18, 29, 47) alcança o 47.\n[…]\n«O número de ouro e a sequência de Fibonacci». UFF",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Escaravelho-sagrado",
      "descricao": "Besouro rola-bosta (Scarabaeus sacer) venerado no Antigo Egito como símbolo do deus Khepri."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No Antigo Egito, o escaravelho que empurra sua bola de esterco simbolizava o movimento de qual astro pelo céu?",
    "resposta": "O Sol",
    "fonte": [
      "https://en.wikipedia.org/wiki/Scarabaeus_sacer",
      "https://en.wikipedia.org/wiki/Khepri"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scarabaeus_sacer",
        "situacao": "ok",
        "texto": "Scarabaeus sacer, common name sacred scarab, is the type species of the genus Scarabaeus and the family Scarabaeidae. This dung beetle is native to southern Europe, North Africa, West Asia, and was venerated in ancient Egypt.\n[…]\nScarabaeus sacer is a robust, all-black beetle where adults are 1.9–4.0 cm (0.7–1.6 in) long. The head has a distinctive array of six projections, resembling rays. The projections are uniform with four more projections on each of the tibiae of the front legs, creating an arc of 14 \"rays\" (see illustration). Functionally, the projections are adaptations for digging and for shaping the ball of dung.\n[…]\nLike the front legs of other beetles of its genus, but unlike those of dung beetles in most other genera, the front legs of S. sacer are unusual; they do not end in any recognisable tarsi, the foot that bears the claws. There is only a vestigial claw-like structure that might be of some assistance in digging. The mid- and hindlegs of Scarabaeus have normal, well-developed, five-segmented tarsi, but the front legs are specialised for excavation and for forming balls of dung.\n[…]\nScarabaeus sacer serves as the host for the phoretic mite Macrocheles saceri.\n[…]\nScarabaeus sacer is the most famous of the scarab beetles. To the Ancient Egyptians, S. sacer was a symbol of Khepri, the early morning manifestation of the sun god Ra, from an analogy between the beetle's behaviour of rolling a ball of dung across the ground and Khepri's task of rolling the sun across the sky. They accordingly held the species to be sacred.\n[…]\nScarabaeus sacer was the species which first piqued the interest of William Sharp Macleay and drew him into a career in entomology.\n[…]\nMedia related to Scarabaeus sacer at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Khepri",
        "situacao": "ok",
        "texto": "Khepri (Egyptian: ḫprj, also transliterated Khepera, Kheper, Khepra, Chepri) is a scarab-faced god in ancient Egyptian religion who represents the rising or morning sun. By extension, he can also represent creation and the renewal of life.\n[…]\nThese scarab idols, whether they were made of faience, an amalgamated material composed of common minerals like quartz and alkaline salts that was cheap to produce, or turquoise, a rare and highly sought after stone, were often colored blue, which signifies that the color might have been significant in its relation to the gods.\n[…]\nWhile it is impossible to assume that the blue scarabs depicted in Egyptian art were meant to represent both Khepri and the traits of the color, the correlation between the divine symbolism of the beetle and meaning of the color blue is unlikely to be a mere coincidence.\n[…]\nKhepri was a solar deity and thus connected to the rising sun and the mythical creation of the world. The god and the scarab beetle represented creation and rebirth. There was no cult devoted to Khepri, as he was seen as a manifestation of the more prominent solar deity Ra. The scarab god was however included in the creationist theory of Heliopolis and later Thebes.\n[…]\nMummified scarab beetles and scarab amulets have been found in pre-dynastic graves, suggesting that Khepri was revered early on in the history of Ancient Egypt.\n[…]\nKhepri was depicted as either a scarab holding aloft the sun disk or as a human male with a scarab for a head. The scarab amulets that the Egyptians used as jewelry and as seals allude to Khepri and the newborn sun. The beetle carvings became so common that excavators have found them throughout the Mediterranean."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escaravelho-sagrado",
        "situacao": "ok",
        "texto": "O escaravelho-sagrado (Scarabaeus sacer) é um besouro da subfamília dos escarabeíneos, proveniente da região do Mediterrâneo.\n[…]\nOs escaravelhos, com inscrições gravadas na sua carapaça, ou objetos com forma de escaravelhos, constituíam amuletos muito populares no Antigo Egito. Na mitologia egípcia, o escaravelho sagrado estava relacionado com deus Khepri (chamado também de Kefri), responsável pelo movimento do sol, arrastando-o pelo horizonte; no crepúsculo, o sol (ou o deus Rá) morria, e ia para o outro mundo (representado pelo oeste); depois, o escaravelho renovava o sol no amanhecer.\n[…]\nKhefri muitas vezes é representado como um escaravelho, ou como um homem com cabeça de escaravelho. Da mesma forma, os escaravelhos-do-esterco, da família Scarabaeidae, ao fazerem bolas de excrementos de que se alimentam e onde depositam os seus ovos que darão origem a larvas que também aí se alimentarão e desenvolverão, eram vistos como um símbolo terreno do ciclo solar. Tornaram-se, assim, símbolos iconográficos e ideológicos incorporados na sociedade do Antigo Egipto.\n[…]\nA inscrição do nome do rei em escaravelhos, ao associar o carácter sagrado do cargo do faraó ao simbolismo sacro destes animais, foi determinante para o estabelecimento das listas destes reis já que, em alguns casos, constituem a única prova documental da sua existência.\n[…]\nDeveria ser feito de uma rocha especial de coloração verde-escura, conhecida como nemehef, geralmente jaspe ou basalto. A coleção egípcia da Casa Museu Eva Klabin possui um exemplar de escaravelho coração, datado da Baixa Época (654-332 a.C.).==Referências bibliográficas==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Carmim",
      "descricao": "Corante vermelho natural, também chamado ácido carmínico ou cochonilha, usado em alimentos e cosméticos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que famoso aperitivo italiano, de cor vermelha intensa, foi tingido durante décadas com o carmim extraído da cochonilha?",
    "resposta": "Campari",
    "fonte": [
      "https://en.wikipedia.org/wiki/Campari"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Campari",
        "situacao": "ok",
        "texto": "Campari (Italian: [kamˈpaːri]) is an Italian alcoholic liqueur, considered an apéritif of the bitter variety (and not an amaro) by Italians while considered an apéritif of the amaro variety by Americans, obtained from the infusion of herbs and fruit (including chinotto and cascarilla) in alcohol and water. It is a type of bitters, characterised by its dark red colour. It is produced by the Campari\n[…]\nCampari was invented in 1860 by Gaspare Campari in Novara, Italy. It was originally coloured with carmine dye, derived from crushed cochineal insects, which gave the drink its distinctive red colour. Campari Group discontinued the use of carmine in 2006.\n[…]\nCampari is often used in cocktails and is commonly served with soda water or citrus juice (most often pink grapefruit juice), often garnished with either blood orange or blood lime slice (mainly in Australia) or mixed with prosecco as a spritz.\n[…]\nCampari is an essential ingredient in several IBA official cocktails (of which Campari is a sponsor): the negroni, the Americano (which was named at a time when few Americans were aware of Campari), the boulevardier, and the old pal (removed from IBA list in 1987), as well as other drinks such as the Garibaldi. It is a common ingredient in spritzes, though other apéritif bitters are also common.\n[…]\nIn the Italian market, Campari mixed with soda water is sold in individual bottles as Campari Soda (10% alcohol by volume). Campari Soda is packaged in a distinctive bottle that was designed by Italian artist Fortunato Depero in 1932.\n[…]\nWine Enthusiast has reviewed Campari on a number of occasions, giving it a score of \"96/100\" in 2023.\n[…]\n\"Campari: the Italian classic that still has style\", The Daily Telegraph\n[…]\nChapter 9: \"Campari: product diversification and international expansion\", Corporate Strategy and Firm Growth: Creating Value for Shareholders, by Angelo Dringoli\n[…]\nThe Art of Campari"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campari",
        "situacao": "ok",
        "texto": "Campari é uma bebida alcoólica italiana do tipo extrato herbal bitter (do inglês “amargo”), servido como aperitivo ou digestivo (antes ou após a refeição), obtida pela infusão de sessenta ingredientes (ervas e temperos) combinados e macerados em malte de água destilada e álcool, e é fabricado pelo Grupo Campari, na cidade de Milão, Itália.\n[…]\nFoi inventado pelo italiano Gaspare Campari entre os anos de 1862 e 1867. Ainda hoje o produto tem a mesma composição original, graças à fórmula que foi guardada em segredo por quase 150 anos.\n[…]\nNa década de 1840, Gaspare construiu um bar na cidade de Milão e, na década de 1860 criou este bitter batizado com o sobrenome da família (Campari). O primeiro coquetel baseado nesta bebida é chamado Milano-Torino: metade bitter e metade vermute (bebida da região de Turim). Em seguida foi o drink Americano: mix de campari, vermute e, club soda (água com gás).\n[…]\nCampari orange, a bebida com suco de laranja, fatias da fruta e, gelo. Formando assim uma bebida leve. O fundo para ganhar a coloração.\n[…]\nCampari milano, mix da bebida com gin, espumante moscatel e, gelo. Finalização com folhas de hortelã.\n[…]\nCampari tonic, mix com gin tônica saborizada, água tônica, gelo. Com a finalização da fatia de limão no final usada como guarnição. Coloque o bitter no fundo para ganhar um sabor.\n[…]\nCampari tonic-laranja, versão do bitter com tônica e suco de laranja-bahia (que diminui o amargor).==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Mariposa-sarapintada",
      "descricao": "Mariposa europeia (Biston betularia) cuja forma escura se espalhou durante a Revolução Industrial, exemplo clássico de seleção natural."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Inglaterra da Revolução Industrial, mariposas-sarapintadas escuras ficaram muito comuns. O que a fuligem das fábricas fez nas árvores que as favoreceu?",
    "resposta": "Escureceu os troncos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Peppered_moth_evolution"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peppered_moth_evolution",
        "situacao": "ok",
        "texto": "The evolution of the peppered moth is an evolutionary instance of directional colour change in the moth population as a consequence of air pollution during the Industrial Revolution in England in the 19th century. The frequency of dark-coloured moths increased at that time, an example of industrial melanism. Later, when pollution was reduced in response to clean air legislation, the light-coloured\n[…]\nIndustrial melanism in the peppered moth was an early test of Charles Darwin's natural selection in action, and it remains a classic example in the teaching of evolution. In 1978, Sewall Wright described it as \"the clearest case in which a conspicuous evolutionary process has actually been observed.\"\n[…]\nBefore the Industrial Revolution, the black form of the peppered moth was rare. The first black specimen (of unknown origin) was collected before 1811, and kept in the University of Oxford. The first live specimen was caught by R. S. Edleston in Manchester, England in 1848, but he reported this only 16 years later in 1864, in The Entomologist. Edleston notes that by 1864 it was the more common type of moth in his garden in Manchester.\n[…]\nThe peppered moth Biston betularia is also a model of parallel evolution in the incidence of melanism in the British form (f. carbonaria) and the American form (f. swettaria) as they are indistinguishable in appearance. Genetic analysis indicates that both phenotypes are inherited as autosomal dominants. Cross hybridizations indicate that the phenotypes are produced by alleles at a single locus.\n[…]\nMajerus, Michael E. N. (2009). \"Industrial Melanism in the Peppered Moth, Biston betularia: An Excellent Teaching Example of Darwinian Evolution in Action\". Evolution: Education and Outreach. 2 (1): 63–74. doi:10.1007/s12052-008-0107-y. Accusations of data fudging and scientific fraud in the case are found to be vacuous."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Evolu%C3%A7%C3%A3o_de_Biston_betularia",
        "situacao": "ok",
        "texto": "A evolução de Biston betularia consiste na variação da coloração na população desta traça como consequência da Revolução Industrial. O conceito refere-se a um aumento na frequência de traças de cor escura devido a poluição industrial, e uma diminuição recíproca num ambiente limpo. O fenómeno é por isso chamado de melanismo industrial. É o primeiro caso registado e experimentado da seleção natural,\n[…]\nAs traças escuras ou melânicas (variedade carbonaria) não eram conhecidas antes de 1811. Após recolha de campo em 1848 em Manchester, uma cidade industrial em Inglaterra, foi descoberto que a frequência dessa variedade tinha aumentado drasticamente. Até ao fim do século XIX tinha já ultrapassado em número a forma clara original (variedade typica). Enquanto Darwin ainda era vivo, apenas se especulou sobre a importância evolutiva da traça. Foi só 14 anos após a sua morte, em 1896 que J. W.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Pulga-do-rato-oriental",
      "descricao": "Pulga parasita de ratos (Xenopsylla cheopis), principal transmissora da bactéria da peste."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A pulga-do-rato-oriental é a principal transmissora da bactéria de qual doença histórica, que devastou a Europa no século quatorze?",
    "resposta": "Peste bubônica (peste negra)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Oriental_rat_flea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oriental_rat_flea",
        "situacao": "ok",
        "texto": "The Oriental rat flea (Xenopsylla cheopis), also known as the tropical rat flea or the rat flea, is a parasite of rodents, primarily of the genus Rattus, and is a primary vector for plague and murine typhus. This occurs when a flea that has fed on an infected rodent bites a human, although the flea can live on any warm blooded mammal.\n[…]\nA flea's mouth has two functions: one for squirting saliva or partly digested blood into the bite, and one for sucking up blood from the host. This process mechanically transmits pathogens that may cause diseases it might carry. Fleas smell exhaled carbon dioxide from humans and animals and jump rapidly to the source to feed on the newly found host. The flea is wingless so it can not fly, but it can jump long distances with the help of small, powerful legs.\n[…]\nThe Oriental rat flea was collected in Shendi, Sudan by Charles Rothschild along with Karl Jordan and described in 1903. He named it cheopis after the Cheops pyramids.\n[…]\nX. cheopis is the primary vector of Yersinia pestis (causative agent of plague) and Rickettsia typhi (causative agent of murine typhus) in tropical and subtropical countries. X. cheopis also acts as a host for the tapeworms Hymenolepis diminuta and Hymenolepis nana. Diseases can be transmitted from one generation of fleas to the next through the eggs.\n[…]\nThe definitive host of X. cheopis is the Norwegian rat; however, X. cheopis can feed on humans, dogs, cats, chickens, and house mice amongst other hosts if there is a lack of rats to feed on.\n[…]\n\"Xenopsylla cheopis (oriental rat flea)\". Animal Diversity Web. Retrieved 3 September 2016.\n[…]\n\"Oriental rat flea\". parasitology.informatik.uni-wuerzburg.de. Archived from the original on 25 September 2007. Retrieved 3 September 2016."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xenopsylla_cheopis",
        "situacao": "ok",
        "texto": "A Xenopsylla cheopis é uma espécie tendencialmente cosmopolita de pulga, distribuída geograficamente nas regiões tropicais e subtropicais e em algumas áreas temperadas. É a espécie de pulga mais encontrada em ratos, sendo os ratos domésticos os hospedeiros mais comuns.\n[…]\nEsta espécie pode atuar como um vetor da peste (causada pela bactéria Yersinia pestis), do tifo murino (causado pela bactéria Rickettsia typhi), podendo também atuar como hospedeiro intermediário para as tênias Hymenolepis diminuta e Hymenolepis nana (abriga os cisticercos da ténia).\n[…]\nA X. cheopis é o principal responsável pela transmissão da peste bubónica ou peste negra (entre ratos e desses para o homem). O agente etiológico da peste é o bacilo gram-negativo Yersinia pestis, transmitido ao homem pela picada da pulga do rato previamente infectado.\n[…]\nAs doenças podem ser transmitidas de uma geração de pulgas para a seguinte através dos ovos ou fezes, essas pulgas transmitem tifo murino, doença infecciosa aguda causada pela Rickettsia tiphi, uma zoonose própria dos ratos mas que eventualmente atinge o homem quando trabalha em locais infestados por ratos.\n[…]\nNo caso da peste bubónica, a pulga adquire a bactéria ao sugar o sangue de um indivíduo infetado; este cresce no seu intestino anterior (região do proventrículo) formando um biofilme que cria um tampão que impede o animal de engolir; quando a pulga se alimenta de sangue, retira parte da bactéria do tampão, mas não a consegue engolir, então regurgita-a juntamente com a bactéria na ferida da picada na pele do mamífero, e desta forma a bactéria infeta outro mamífero.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Mosquito",
      "descricao": "Díptero da família Culicidae, de pernas longas, cujas fêmeas sugam sangue."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que gás, liberado quando respiramos, ajuda as fêmeas de mosquito a encontrar suas vítimas?",
    "resposta": "Gás carbônico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mosquito"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mosquito",
        "situacao": "ok",
        "texto": "Mosquitoes, the Culicidae, are a family of small flies consisting of 3,600 species. The word mosquito (formed by mosca and diminutive -ito) is Spanish and Portuguese for little fly. Mosquitoes have a slender, segmented body, one pair of wings, three pairs of long hair-like legs, and a specialized, highly elongated set of mouthparts forming a proboscis, adapted for piercing and sucking. All mosquit\n[…]\nMost mosquito species are crepuscular, feeding at dawn or dusk, and resting in a cool place through the heat of the day. Some species, such as the Asian tiger mosquito, are known to fly and feed during daytime. Female mosquitoes hunt for hosts by smelling substances such as carbon dioxide (CO2) and 1-octen-3-ol (mushroom alcohol, found in exhaled breath) produced from the host, and through visual recognition. The semiochemical that most strongly attracts Culex quinquefasciatus is nonanal.\n[…]\nTwelve ships of the Royal Navy have borne the name HMS Mosquito or the archaic form of the name, HMS Musquito.\n[…]\nThe de Havilland Mosquito was a high-speed aircraft manufactured between 1940 and 1950, and used in many roles.\n[…]\nThe Russian city of Berezniki annually celebrates its mosquitoes from the 17th of July to the 20th in a \"most delicious girl\" competition. In the competition, women stand for 20 minutes in their shorts and undershirts (British: vests), and the one who receives the most bites wins.\n[…]\nMosquito proboscis inspired needles are being applied in biomimetic design for use in medicine.\n[…]\nWinegard, Timothy Charles (2019). The mosquito: a human history of our deadliest predator. Penguin Random House. ISBN 978-1-5247-4341-3. OCLC 1111638283.\n[…]\nQuotations related to Mosquitoes at Wikiquote\n[…]\nMosquito at IFAS\n[…]\nA film clip describing The Life Cycle of the Mosquito is available for viewing at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Culic%C3%ADdeos",
        "situacao": "ok",
        "texto": "Culicídeos (Culicidae) é uma família de insetos  habitualmente chamados de muriçocas, mosquitos ou pernilongos. As fêmeas em muitas regiões são designadas vulgarmente como melgas. Como os outros membros da ordem Diptera, os mosquitos têm um par de asas e um par de halteres. Em geral, apresentam dimorfismo sexual acentuado: as fêmeas apresentam antenas pilosas e são muito mais corpulentas que os ma\n[…]\nEm várias partes do Brasil, faz-se distinção entre mosquito e pernilongo: o primeiro refere-se a pequenas moscas, como as drosófilas, enquanto que o segundo, além dessa denominação, é também referido como \"muriçoca\". Na maioria dos estados da Região Norte do Brasil, este pernilongo chama-se \"carapanã\". As fêmeas do pernilongo são também conhecidas como \"melgas\" em Portugal.\n[…]\nCarapanã  (do tupi [kaɾapaˈnã]) é um nome regional brasileiro dado aos mosquitos sugadores de sangue, principalmente na Região Norte do Brasil. São conhecidos em outras unidades federativas do Brasil como muriçoca, pernilongo, sovela ou mosquito-prego. Geralmente é um nome vulgar dado a insetos da ordem Diptera, família Culicidae, mais comumente relacionados aos gêneros Culex, Anopheles e Aedes.\n[…]\n\"Mosquito\" vem do latim musca. \"Pernilongo\" é uma referência às longas pernas do inseto. \"Mosquito-prego\" é uma referência a sua picada que se assemelha à perfuração de um prego. \"Muriçoca\", \"meruçoca\" e \"muruçoca\" são oriundos do tupi muri'soka. \"Carapanã\" vem do tupi karapa'nã. \"Carapanã-pinima\" vem da junção dos termos tupis karapa'nã (\"mosquito\") e pi'nima (\"pintado\"). \"Fincão\" e \"fincudo\" vem de \"fincar\" e são uma referência a sua picada.\n[…]\nNo abdómen se encontra o intestino posterior e as gónadas.\n[…]\nConsoli RAGB, Lourenço-de-Oliveira R. (1994). \"Principais mosquitos de importância sanitária no Brasil\" (PDF)  . Editora Fundação Instituto Oswaldo Cruz, Rio de Janeiro, Brasil.\n[…]\nCatálogo de Mosquito",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Gerrídeo",
      "descricao": "Percevejos aquáticos da família Gerridae, de pernas longas e finas, que andam sobre a superfície da água."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Certos percevejos aquáticos de pernas longas e finas andam sobre lagos sem afundar. Que propriedade da água torna isso possível?",
    "resposta": "Tensão superficial",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gerridae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gerridae",
        "situacao": "ok",
        "texto": "The Gerridae are a family of insects in the order Hemiptera, commonly known as water striders, water skeeters, water scooters, water bugs, pond skaters, water skippers, water gliders, water skimmers or puddle flies. They are true bugs of the suborder Heteroptera and have mouthparts evolved for piercing and sucking. A distinguishing feature is the ability to move on top of the water's surface, maki\n[…]\nWing polymorphism is common in the Gerridae despite most univoltine populations being completely apterous (wingless) or macropterous (with wings). Apterous populations of gerrids would be restricted to stable aquatic habitats that experience little change in environment, while macropterous populations can inhabit more changing, variable water supplies. Stable waters are usually large lakes and rivers, while unstable waters are generally small and seasonal.\n[…]\nOverwintering gerrids usually are macropterous, or with wings, so they can fly back to their aquatic habitat after winter. An environmental switch mechanism controls seasonal dimorphism observed in bivoltine species, or species having two broods per year. This switch mechanism is what helps determine whether or not a brood with wings will evolve. Temperature also plays an important role in photoperiodic switch.\n[…]\nGerrids are aquatic predators and feed on invertebrates, mainly spiders and insects, that fall onto the water surface. Water striders are attracted to this food source by ripples produced by the struggling prey. The water strider uses its front legs as sensors for the vibrations produced by the ripples in the water. The water strider punctures the prey item's body with its proboscis, injects salivary enzymes that break down the prey's internal structures, and then sucks out the resulting fluid.\n[…]\nList of Gerridae genera\n[…]\n\"Gerridae\". Integrated Taxonomic Information System."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gerr%C3%ADdeos",
        "situacao": "ok",
        "texto": "A família dos gerrídeos (Gerridae) agrupa vários tipos de insetos que têm em comum a capacidade de se deslocarem sobre a superfície da água. Em Portugal são conhecidos como alfaiates, nos Estados Unidos são conhecidos como Water Strider, e Jesus Bug e no Brasil são chamados como aranha-d'água ou inseto-jesus, porque conseguem andar sobre a água.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Grilo",
      "descricao": "Inseto ortóptero de corpo cilíndrico e antenas longas, cujos machos cantam esfregando as asas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os grilos cantam mais rápido ou mais devagar conforme o ambiente. Contando seus cricrilados por minuto, a lei de Dolbear permite estimar o quê?",
    "resposta": "A temperatura do ar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dolbear%27s_law"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dolbear%27s_law",
        "situacao": "ok",
        "texto": "Dolbear's law states the relationship between the air temperature and the rate at which crickets chirp. It was formulated by physicist Amos Dolbear and published in 1897 in an article called \"The Cricket as a Thermometer\". Dolbear's observations on the relation between chirp rate and temperature were preceded by an 1881 report by Margarette W.\n[…]\nThe chirping of the more common field crickets is not as reliably correlated to temperature—their chirping rate varies depending on other factors such as age and mating success.\n[…]\nDolbear expressed the relationship as the following formula which provides a way to estimate the temperature TF in degrees Fahrenheit from the number of chirps per minute N60:\n[…]\nReformulated to give the temperature in degrees Celsius (°C), it is:\n[…]\nMath textbooks will sometimes cite this as a simple example of where mathematical models break down, because at temperatures outside of the range that crickets live in, the total of chirps is zero as the crickets are dead.\n[…]\nYou can apply algebra to the equation and see that according to the model at 1,000 degrees Celsius (around 1,800 degrees Fahrenheit) crickets should be chirping at 6,970 chirps per minute (around 116 chirps per second), but no known cricket can live at that temperature to chirp.\n[…]\nThis formula was referenced in an episode (Season 3, Episode 2, \"The Jiminy Conjecture\") of the American TV sitcom The Big Bang Theory (although Sheldon referred to Amos Dolbear as Emile Dolbear and gave the year of publication as 1890).\n[…]\nArrhenius equation – Formula for temperature dependence of rates of chemical reactions\n[…]\nMedia related to Dolbear's law at Wikimedia Commons\n[…]\nDolbear's law calculator"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lei_de_Dolbear",
        "situacao": "ok",
        "texto": "A Lei de Dolbear estabelece a relação entre a temperatura ambiente e a velocidade com que os grilos cantam.. Em 1897, o físico americano Amos Dolbear, no artigo “The Cricket as a Thermometer”, propôs a teoria de que a temperatura externa determinaria o número de cricris dos grilos, e com isso os grilos poderiam ser usados como termômetros naturais As observações de Dolbear sobre a relação entre a \n[…]\nO chilrear dos grilos de campo mais comuns não é tão confiável quanto à temperatura - sua taxa de chilrear varia dependendo de outros fatores, como idade e sucesso de acasalamento. Em muitos casos, porém, a fórmula de Dolbear também é uma aproximação suficientemente próxima para os grilos de campo. Em 2007, a Dr.\n[…]\nLeMone Peggy, do GLOBE Program, comprovou cientificamente que o método realmente funciona, mas somente quando a temperatura está acima de 12 graus Celsius, pois os grilos não gostam de namorar no frio.\n[…]\nDolbear expressou a relação como a seguinte fórmula que fornece uma maneira de estimar a temperatura \"TF\" em graus Fahrenheit a partir do número de chirps por minuto \"N60\":\n[…]\nEsta fórmula é precisa dentro de um grau ou mais quando aplicada ao chilrear do grilo do campo .\n[…]\nReformulado para dar a temperatura em graus Celsius (°C), é:\n[…]\nOs livros didáticos de matemática às vezes citam isso como um exemplo simples de onde os modelos matemáticos falham, porque em temperaturas fora da faixa em que os grilos vivem , o total de chilrear é zero, pois os grilos estão mortos.\n[…]\nVocê pode aplicar a álgebra à equação e ver que, de acordo com o modelo a 1.000 graus Celsius (cerca de 1.800 graus Fahrenheit), os grilos devem cantar a 6.970 trinados por minuto (cerca de 116 trinados por segundo), mas nenhum grilo conhecido pode viver nessa temperatura chilrear.\n[…]\nA lei de Dolbear também é mencionada no romance \"Being Dead\" de Jim Crace, 1999 (\"A Natural History of Love\", 2004, Ed. Guanda).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Pragas do Egito",
      "descricao": "As dez calamidades que, segundo o livro bíblico do Êxodo, Deus enviou ao Egito para libertar os hebreus."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na Bíblia, a nuvem de gafanhotos que devora as plantações do Egito é qual das dez pragas, pela ordem?",
    "resposta": "Oitava",
    "distratores": [
      "Terceira",
      "Quinta",
      "Décima"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pragas_do_Egito",
      "https://en.wikipedia.org/wiki/Plagues_of_Egypt"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pragas_do_Egito",
        "situacao": "ok",
        "texto": "Na tradição judaico-cristã, as pragas do Egito (em hebraico: מכות מצרים; romaniz.: Makot Mitzrayim), por vezes referidas como as dez pragas do Egito, foram dez calamidades que, de acordo com o livro bíblico do Êxodo (7-11), o Deus de Israel infligiu no Egito para convencer o faraó a libertar os hebreus (ou israelitas), maltratados pela escravidão.\n[…]\nNo âmbito religioso, a Bíblia diz que as pragas serviram para contrastar o poder do Deus de Israel com os deuses egípcios, invalidando-os. Associação de várias das pragas com julgamento sobre deuses específicos, associados ao rio Nilo, fertilidade e fenômenos naturais.\n[…]\nA morte dos animais: Desta vez Moisés estendeu a mão sobre o Egito e por ordem do Senhor surgiu uma praga nos animais em que muitos morreram e grande foi a perda para os egípcios;\n[…]\nChuva de granizo destrói plantações: A resistência por parte do faraó se repetiu e assim, o Senhor pediu a Moisés para estender seu cajado por todo o Egito (exceto a região onde vivia o povo escolhido, o povo a ser liberto), e foi assim que uma chuva de pedras destruiu toda a plantação;\n[…]\nNuvem de gafanhotos ataca plantações: Nesta praga, pela oitava vez o Senhor tocou no povo egípcio a fim de fazer justiça e libertar seu povo; enviou um vento que passou seguido de inúmeros gafanhotos devorando muito do que possuía o faraó. Mais uma vez ele cedeu, mas somente até a praga cessar;\n[…]\nNo âmbito religioso, a Bíblia diz que as pragas serviram para subjugar deuses egípcios específicos:\n[…]\nNuvem de gafanhotos ataca plantações: Humilhação dos deuses responsáveis pela abundante colheita. O deus do ar, Xu e deus-inseto, Sebeque (Êx 10:12-15).\n[…]\nOs primogênitos de homens e animais morrem: Resultou na maior humilhação para os deuses egípcios, os governantes do Egito — que chamavam a si mesmos de deuses, filhos de Rá ou Amom-Rá  (Êx 12:12)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Plagues_of_Egypt",
        "situacao": "ok",
        "texto": "In the Book of Exodus, the Plagues of Egypt (Hebrew: מכות מצרים) were ten disasters that Yahweh inflicted on the Egyptians to convince the Pharaoh to emancipate the enslaved Israelites, each of them confronting the Pharaoh and one of his Egyptian gods; they served as \"signs and marvels\" given by Yahweh in response to the Pharaoh's taunt that he did not know Yahweh: \"The Egyptians shall know that I\n[…]\nScholars are in broad agreement that the publication of the Torah took place in the mid-Persian period (the 5th century BCE). The Book of Deuteronomy, composed in stages between the 7th and 6th centuries, mentions the \"diseases of Egypt\" (Deuteronomy 7:15 and 28:60). John Van Seters contends that this refers to something that afflicted the Israelites, not the Egyptians, and that Deuteronomy never specifies the plagues.\n[…]\nJohn Van Seters poses that the plagues of Egypt are a late literary invention by Biblical writers, rather than historical events or ancient folklore. In his argumentation, he contends Neo-Assyrian vassal treaties with their long list of curses for those who break their covenants were drawn upon, alongside other Near-Eastern motifs.\n[…]\nThe Ipuwer Papyrus, written no earlier than the late Twelfth Dynasty of Egypt (c.\n[…]\nSome scholars have suggested that the story of the Plagues of Egypt might have been inspired by natural phenomena like epidemics, although these theories are considered uncertain.\n[…]\nPerhaps the most successful artistic representation of the plagues is Handel's oratorio Israel in Egypt, which, like \"Handel's Messiah\", takes a libretto entirely from scripture. The work was especially popular in the 19th century because of its numerous choruses, generally one for each plague, and its playful musical depiction of the plagues.\n[…]\nThe Prince of Egypt (1998)\n[…]\nMedia related to Plagues of Egypt at Wikimedia Commons\n[…]\nKabbalah and the 10 Plagues (www.kabbalaonline.org)"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Aranha",
      "descricao": "Aracnídeos da ordem Araneae, predadores de oito patas que produzem seda."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantos olhos tem a maioria das espécies de aranha?",
    "resposta": "Oito",
    "distratores": [
      "Dois",
      "Seis",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Spider"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Spider",
        "situacao": "ok",
        "texto": "Spiders (order Araneae) are air-breathing arthropods that have eight limbs, chelicerae with fangs generally able to inject venom, and spinnerets that extrude silk. They are the largest order of arachnids and rank seventh in total species diversity among all orders of organisms. Spiders are found worldwide on every continent except Antarctica, and have become established in nearly every land habita\n[…]\nThe spiders (Araneae) are monophyletic (i.e., a clade, consisting of a last common ancestor and all of its descendants). There has been debate about what their closest evolutionary relatives are, and how all of these evolved from the ancestral chelicerates, which were marine animals. This 2019 cladogram illustrates the spiders' phylogenetic relationships.\n[…]\nSpiders (Araneae) are distinguished from other arachnid groups by several characteristics, including spinnerets and, in males, pedipalps that are specially adapted for sperm transfer.\n[…]\nThe order name Araneae derives from Latin aranea borrowing Ancient Greek ἀράχνη arákhnē from ἀράχνης arákhnēs.\n[…]\nSpiders are divided into two suborders, Mesothelae and Opisthothelae, of which the latter contains two infraorders, Mygalomorphae and Araneomorphae. Some 53,680 living species of spiders (order Araneae) have been identified, grouped into 139 families and 4,502 genera by arachnologists as of 2025."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aranha",
        "situacao": "ok",
        "texto": "As aranhas (ordem Araneae) são artrópodes de respiração aérea que possuem oito membros, quelíceras com presas geralmente capazes de injetar veneno, e fieiras que expelem seda. Constituem a maior ordem dos aracnídeos e ocupam o sétimo lugar em diversidade total de espécies entre todas as ordens de organismos. As aranhas são encontradas em todos os continentes, exceto na Antártida, e estabeleceram-s\n[…]\nDo cefalotórax partem as pernas, que são constituídas por sete segmentos. Cada uma das oito pernas de uma aranha consiste em sete partes distintas.\n[…]\nComo resultado, uma aranha com o cefalotórax perfurado não consegue estender as pernas, e as pernas de aranhas mortas se curvam para dentro. As aranhas podem gerar pressões até oito vezes superiores ao nível de repouso para estender as pernas, e as aranhas-saltadoras podem saltar até 50 vezes o comprimento do próprio corpo aumentando subitamente a pressão sanguínea no terceiro ou quarto par de pernas.\n[…]\nAranhas miméticas de formigas enfrentam vários desafios: geralmente desenvolvem abdomes mais estreitos e \"cinturas\" falsas no cefalotórax para imitar as três regiões distintas (tagmas) do corpo de uma formiga; agitam o primeiro par de pernas diante da cabeça para imitar antenas, que aranhas não possuem, e para ocultar o fato de terem oito pernas em vez de seis; desenvolvem grandes manchas coloridas ao redor de um par de olhos para disfarçar o fato de normalmente possuírem oito olhos simples, enquanto as formigas têm dois olhos compostos; cobrem seus corpos com cerdas reflexivas para se assemelharem ao corpo brilhante das formigas.\n[…]\nEmbora as aranhas sejam amplamente temidas, apenas um número reduzido de espécies representa perigo significativo para os seres humanos. As aranhas picam pessoas principalmente em situações de autodefesa, e a maioria das picadas produz efeitos menos graves do que os de ferroadas de mosquitos ou abelhas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Minhoca",
      "descricao": "Anelídeo terrestre da classe Oligochaeta que vive no solo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na minhoca-comum, o sangue é bombeado por pares de vasos musculares que costumam ser chamados de corações. Quantos pares são?",
    "resposta": "Cinco",
    "distratores": [
      "Um",
      "Dois",
      "Dez"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Earthworm"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Earthworm",
        "situacao": "ok",
        "texto": "An earthworm is a soil-dwelling terrestrial invertebrate that belongs to the phylum Annelida. The term is the common name for the largest members of the class (or subclass, depending on the author) Oligochaeta. In classical systems, they were in the order of Opisthopora since the male pores opened posterior to the female pores, although the internal male segments are anterior to the female.\n[…]\nFood enters at the mouth. The pharynx acts as a suction pump; its muscular walls draw in food. In the pharynx, the pharyngeal glands secrete mucus. Food moves into the esophagus, where calcium (from the blood and ingested from previous meals) is pumped in through calciferous glands to maintain proper blood calcium levels and pH in the blood and food, although more recent studies point to a role of calciferous glands in CO2 regulation through the excretion of stable calcite crystals.\n[…]\nFrom there the food passes into the crop and gizzard. In the gizzard, strong muscular contractions grind the food with the help of mineral particles ingested along with the food. Once through the gizzard, food continues through the intestine for digestion.\n[…]\nEarthworms travel underground by means of waves of muscular contractions which alternately shorten and lengthen the body (peristalsis). The shortened part is anchored to the surrounding soil by tiny clawlike bristles (setae) set along its segmented length. In all the body segments except the first, last and clitellum, there is a ring of S-shaped setae embedded in the epidermal pit of each segment (perichaetine arrangement)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Minhoca",
        "situacao": "ok",
        "texto": "As minhocas são animais anelídeos, da subclasse dos oligoquetas, de simetria bilateral, recobertos por uma fina cutícula pigmentada. Seu corpo cilíndrico é segmentado interna e externamente, mas os dois primeiros segmentos não são identificados externamente. Estão distribuídas pelos solos úmidos de todo o mundo, algumas com apenas alguns centímetros, outras com um a dois metros de comprimento, ou \n[…]\nA distribuição de nutrientes, resíduos e gases respiratórios no corpo da minhoca é realizada por um sistema circulatório duplo, no qual tanto o fluido celômico quanto um sistema circulatório fechado participam do transporte.\n[…]\nO sistema circulatório fechado possui cinco vasos sanguíneos principais: o vaso dorsal, localizado acima do trato digestivo; o vaso ventral, abaixo do trato digestivo; o vaso subneural, abaixo do cordão nervoso ventral; e dois vasos lateroneurais situados lateralmente ao cordão nervoso. O sangue é totalmente canalizado e consiste em células ameboides e hemoglobina dissolvida no plasma.\n[…]\nO vaso dorsal é altamente muscular e pode mover o sangue sob elevada pressão para determinadas regiões do corpo. Além disso, existem vasos secundários denominados “corações laterais” ou arcos aórticos, que constituem a principal força propulsora do sangue. Em Lumbricus terrestris, há cinco pares desses vasos musculares de grosso calibre, localizados entre os segmentos sete e onze, circundando o celoma e conectando diretamente o vaso dorsal ao ventral.\n[…]\nInvestigações nos Estados Unidos mostram que excrementos frescos de minhocas são cinco vezes mais ricos em nitrogênio disponível, sete vezes mais ricos em fosfatos disponíveis e 11 vezes mais ricos em potássio disponível do que o solo superficial ao redor dos primeiros 150 milímetros (seis polegadas). Em condições de abundância de húmus, o peso de excrementos produzidos pode ultrapassar 4,5 quilos por minhoca por ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Própolis",
      "descricao": "Substância pegajosa produzida pelas abelhas para vedar e proteger a colmeia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A própolis, que as abelhas usam para vedar frestas da colmeia, é feita principalmente de quê?",
    "resposta": "Resinas de plantas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Propolis",
      "https://pt.wikipedia.org/wiki/Própolis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Propolis",
        "situacao": "ok",
        "texto": "Propolis or bee glue is a resinous mixture that honey bees produce by mixing saliva and beeswax with exudate gathered from tree buds, sap flows, or other botanical sources. It is used as a sealant for unwanted open spaces in the beehive. Propolis is used for small gaps (around 6 mm (1⁄4 in) or less), while gaps larger than the bee space (around 9 mm (3⁄8 in)) are usually filled with burr comb. Its\n[…]\nPropolis functions may include:\n[…]\nMitigate putrefaction within the hive - bees usually carry waste out of and away from the hive, but if a small lizard or mouse, for example, finds its way into the hive and dies there, bees may be unable to carry it out through the hive entrance. In that case, they would attempt instead to seal the carcass in propolis, essentially mummifying it and making it odorless and harmless.\n[…]\nIn neotropical regions, in addition to a large variety of trees, bees may also gather resin from flowers in the genera Clusia and Dalechampia, which are the only known plant genera that produce floral resins to attract pollinators. Clusia resin contains polyprenylated benzophenones. In some areas of Chile and Argentina Andean valleys, propolis contains viscidone, a terpene from Baccharis shrubs, and prenylated acids, such as 4-hydroxy-3,5-diprenyl cinnamic acid.\n[…]\nPropolis has been used in traditional medicine, with a rating that it is \"possibly effective\" for treating mouth ulcers and improving blood sugar levels in people with diabetes.\n[…]\nPropolis is used by some string-instrument makers (violin, viola, cello, and bass) as a varnish ingredient. A tincture of propolis may be used to seal the surface of newly made violin family bridges, and may be used in the maintenance of the bores of pan flute tubes.\n[…]\nClaims that Antonio Stradivari used propolis in the varnish of his instruments were disproven in 2009.\n[…]\n\"Propolis\" . New International Encyclopedia. 1905."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Própolis",
        "situacao": "ok",
        "texto": "Própolis é uma substância resinosa que as abelhas coletam de exsudatos de plantas, incluindo flores, brotos de folhas, resinas e mucilagens. Este material é enriquecido com saliva de abelha, que contém enzimas como β-glicosidase, juntamente com outras enzimas salivares específicas de abelhas. Ela é amplamente utilizada na medicina tradicional.\n[…]\nSua composição é de 55% resinas vegetais; 30% cera de abelhas; 8 a 10% de óleos essenciais; e 5% de pólen aproximadamente.\n[…]\nA própolis verde do Brasil está associada a planta Baccharis dracunculifolia, conhecida também como alecrim-do-campo, onde é nativo.\n[…]\nA própolis marrom se origina de uma variedade de plantas, incluindo Eucalyptus spp. e Baccharis spp. Sua composição química inclui flavonoides, ácidos fenólicos e ésteres aromáticos. A própolis marrom é o tipo mais comumente disponível e é amplamente utilizada em cosméticos e suplementos alimentares.\n[…]\nQuando um intruso é abatido e não pode ser retirado do interior da colmeia, as abelhas cobrem o intruso com própolis, evitando que sua putrefação contamine o ninho.\n[…]\nFoi recentemente mostrado que as abelhas puderam sobreviver por um tempo mais longo quando tinham usado a própolis para selar as fendas da colmeia. Isso é provavelmente porque a própolis, feita de 50% de resina, contém bastantes moléculas com funções antibióticas.\n[…]\nDesde a Antiguidade, a própolis já era utilizada como medicamento popular no tratamento de feridas e infecções. As histórias das medicinas das civilizações Chinesa e Mediterrâneas(como Egípcia, Grega etc) são ricas, todas contendo em seus escritos antigos centenas de receitas onde entram principalmente mel, própolis, larvas de abelhas e às vezes as próprias abelhas, para curar ou prevenir enfermidades. A própolis é conhecida como um poderoso antibiótico natural.\n[…]\n«O presente das abelhas - Própolis»"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Goma-laca",
      "descricao": "Resina secretada pela cochonilha-da-laca, usada como verniz e na fabricação de antigos discos de gramofone."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A goma-laca, verniz de móveis antigos e matéria-prima dos velhos discos de setenta e oito rotações, é uma secreção de que tipo de animal?",
    "resposta": "Um inseto (cochonilha-da-laca)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Shellac"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shellac",
        "situacao": "ok",
        "texto": "Shellac () is a resin secreted by the female lac bug on trees in the forests of India and Thailand. Chemically, it is mainly composed of aleuritic acid, jalaric acid, shellolic acid, and other natural waxes. It is processed and sold as dry flakes and dissolved in alcohol to make liquid shellac, which is used as a brush-on colorant, food glaze and wood finish. Shellac functions as a tough natural p\n[…]\nShellac is used:\n[…]\nin the tying of artificial flies for trout and salmon, where the shellac was used to seal all trimmed materials at the head of the fly.\n[…]\nto stiffen and impart water-resistance to felt hats, as a constituent of gossamer (or goss for short), a cheesecloth fabric coated in shellac and ammonia solution used in the shell of traditional silk top and riding hats.\n[…]\nin watchmaking, due to its low melting temperature (about 80–100 °C (176–212 °F)), shellac is used in most mechanical movements to adjust and adhere pallet stones to the pallet fork and secure the roller jewel to the roller table of the balance wheel. Also for securing small parts to a 'wax chuck' (faceplate) in a watchmakers' lathe.\n[…]\nin modern traditional archery, shellac is one of the hot-melt glue/resin products used to attach arrowheads to wooden or bamboo arrow shafts.\n[…]\nas a topcoat in nail polish (although not all nail polish sold as \"shellac\" contains shellac, and some nail polish not labelled in this way does).\n[…]\nShellac.net US shellac vendor – properties and uses of dewaxed and non-dewaxed shellac\n[…]\nThe Story of Shellac (history)\n[…]\nDIYinfo.org's Shellac Wiki, practical information on everything to do with shellac\n[…]\nReactive Pyrolysis-Gas Chromatography of Shellac doi:10.1021/ac981049e\n[…]\nShellac A short introduction to the origin of shellac, the history of Japanning and French polishing, and how to conserve and repair these finishes sympathetically\n[…]\nShellac Application By Smith & Rodger"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Goma-laca",
        "situacao": "ok",
        "texto": "Goma-laca é uma resina secretada pelo inseto Kerria lacca, encontrado nas florestas da Índia e Tailândia. O material bruto é refinado em diversos graus para diferentes propósitos. As duas melhores variedades disponíveis no mercado são a goma-laca laranja, que nos chega em forma de flocos laranja-marrom finos e translúcidos e a goma-laca branca ou alvejada. Tanto a goma-laca branca quanto a laranja\n[…]\nComo verniz, a goma laca seca rapidamente, formando uma película dura, forte e flexível, sendo útil para envernizar pisos e móveis. Se aplicada com pincel, a superfície apresenta um acabamento ligeiramente áspero. A goma-laca não é muito utilizada na pintura permanente devido à sua tendência para escurecer com o tempo. Entretanto, quando é diluída com álcool puro até formar uma solução extremamente fina, seu amarelecimento não é significativo.\n[…]\nA goma-laca que foi diluída por diversas vezes perde as suas propriedades de secagem quando guardada, portanto é melhor não ser conservada nessas condições.\n[…]\nÉ também utilizada com muita frequência no envernizamento de instrumentos musicais uma vez que lhes proporcionam uma sonoridade melhor do que se fosse finalizados com outro substituto sintético. É usada com alguma frequência no reparo de canetas tinteiro, como adesivo de vedação do sistema de alimentação de tinta. Também foi utilizada na fabricação de discos de músicas, sendo substituída mais tarde pelo vinil.\n[…]\nDisco de goma-laca\n[…]\nVerniz",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Abelha-rainha",
      "descricao": "Fêmea fértil e reprodutora de uma colônia de abelhas-europeias."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Numa colmeia de abelhas-europeias, quem costuma viver por mais tempo: a rainha, as operárias ou os zangões?",
    "resposta": "A rainha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Queen_bee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Queen_bee",
        "situacao": "ok",
        "texto": "A queen bee is typically an adult, mated female (gyne) that lives in a colony or hive of honey bees. With fully developed reproductive organs, the queen is usually the mother of most, if not all, of the bees in the beehive. Queens are developed from larvae selected by worker bees and specially fed in order to become sexually mature. There is normally only one adult, mated queen in a hive, in which\n[…]\nAs the queen ages, her pheromone output diminishes. A queen bee that becomes old, or is diseased or failing, is replaced by the workers in a procedure known as \"supersedure\".\n[…]\nAlthough the color is sometimes randomly chosen, professional queen breeders use a color that identifies the year a queen hatched, which helps them to decide whether their queens are too old to maintain a strong hive and need to be replaced. The mnemonic taught to assist beekeepers in remembering the color order is Will You Raise Good Bees (white, yellow, red, green, blue).\n[…]\nQueen rearing is the process by which beekeepers raise queen bees from young fertilized worker bee larvae. The most commonly used method is known as the Doolittle method. In the Doolittle method, the beekeeper grafts larvae, which are 24 hours or less of age, into a bar of queen cell cups. The queen cell cups are placed inside a cell-building colony. A cell-building colony is a strong, well-fed, queenless colony that feeds the larvae royal jelly and develops the larvae into queen bees.\n[…]\nAfter approximately 10 days, the queen cells are transferred from the cell building colony to small mating nuclei colonies, which are placed inside of mating yards. The queens emerge from their cells inside of the mating nuclei. After approximately 7–10 days, the virgin queens take their mating flights, mate with 10–20 drone bees, and return to their mating nuclei as mated queen bees.\n[…]\nQueen ant\n[…]\nBee Queen Color Online Tool for Identification - Color / Year"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abelha-rainha",
        "situacao": "ok",
        "texto": "O termo abelha-rainha ou abelha-mestra é comumente utilizado para se referir a uma abelha adulta e fértil, sendo ela, normalmente, mãe de todas as outras abelhas da colmeia. As rainhas se desenvolvem a partir de larvas criadas em células especiais, construídas pelas operárias e preparadas especialmente para formar um indivíduo sexualmente maduro (as operárias são inférteis). Normalmente existe uma\n[…]\nSubstituição é o processo pelo qual uma rainha, normalmente muito velha ou doente, é substituída por outra. Se a rainha atual morrer, as rainhas de emergência devem ser criadas. As abelhas operárias selecionam poucas larvas do grupo existente para criar novas rainhas. A colônia tem apenas cerca de seis dias depois que o último ovo foi colocado para começar a criar novas rainhas. As abelhas escolhem o indivíduo mais apto para liderar a colônia.\n[…]\nAs rainhas jovens aparentam ter um pouco de feromônio de rainha, mas não o são assim reconhecidas pelas operárias, correndo o risco, inclusive, de serem confundidas com uma estranha e serem mortas pelas outras abelhas.\n[…]\nO abdome da rainha é muito maior que o das operárias ao seu redor. No entanto, em uma colmeia com 60.000 a 80.000 abelhas é muito difícil localizar a rainha rapidamente; por esse motivo, muitas rainhas são marcadas com um ponto luminoso na parte de cima de seu tórax. A tinta utilizada não é prejudicial e torna mais fácil a identificação da rainha.\n[…]\nEmbora algumas vezes a cor utilizada seja aleatória, apicultores e meliponicultores profissionais costumam utilizar um padrão de cores para indicar o ano no qual a rainha eclodiu. Isso ajuda a identificar a idade da rainha e as ações necessárias para manter a colmeia sempre com alta produtividade. Algumas vezes são utilizadas, também, numerações para indicar rainhas que eclodiram em um mesmo ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Aranha-mergulhadora",
      "descricao": "Aranha europeia e asiática (Argyroneta aquatica) que vive quase toda a vida debaixo d'água."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A aranha-mergulhadora passa quase a vida inteira submersa em lagos e riachos. Como ela consegue respirar debaixo da água?",
    "resposta": "Numa bolha de ar presa à teia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Diving_bell_spider"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diving_bell_spider",
        "situacao": "ok",
        "texto": "The diving bell spider or water spider (Argyroneta aquatica) is the only species of spider known to live almost entirely under water. It is the only member of the genus Argyroneta and the type genus of the family Argyronetidae. When out of the water, the spider ranges in colour from mid to dark brown, although the hairs on the abdomen give it a dark grey, velvet-like appearance. It is native to fr\n[…]\nA. aquatica is able to remain submerged for prolonged periods of time due to the silk-based structure it constructs in order to retain an oxygen supply, named after the diving bell structure it resembles. The species range in size, although the size of females may be limited as they put more energy into building and maintaining their larger bells.\n[…]\nMating takes place in the female's bell. The female spider then constructs an egg sac within her bell, laying between 30 and 70 eggs. Where this species moults is less clear, with some sources stating that it occurs below water in the diving bell and others that it occurs out of water.\n[…]\nDiving bells are irregularly constructed sheets of silk and an unknown protein-based hydrogel which is spun between submerged water plants then inflated with air brought down from the surface by the builder. Studies have considered gas diffusion between the diving bell and the spiders' aquatic environment. The silk is waterproof but allows gas exchange with the surrounding water. There is net diffusion of oxygen into the bell and net diffusion of carbon dioxide out.\n[…]\nThis process is driven by differences in partial pressure. The production of carbon dioxide and use of oxygen by the spider maintains the concentration gradient, required for diffusion. However, there is net diffusion of nitrogen out of the bell, resulting in a gradually shrinking air bubble which must be regularly replenished by the spider.\n[…]\nDiving bell spiders use bubble webs 'like gills'"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aranha-de-%C3%A1gua",
        "situacao": "ok",
        "texto": "Argyroneta aquatica, conhecida pelo nome comum de aranha-de-água, é uma espécie de aranhas da família Cybaeidae, encontrada na região Paleártica, privativa dos lagos e de outros locais de água parada. A espécie apresenta carapaça marrom-amarelada com estripações escuras e mede entre 8 mm e 15 mm de comprimento. É a única aranha que vive permanentemente debaixo de água.\n[…]\nEste tipo de aranhas é a única que consegue, usando os pequenos «pelos» das patas e do abdómen, aprisionam bolhas de ar, que retiram da superfície da água, e constroem com seda uma membrana que permite o armazenamento do ar contido nas bolhas, constituindo um reservatório subaquático denominado sino de ar. A seda é produzida sob a forma de um líquido que contém uma proteína, a fibroína que, em contacto com o ar, solidifica.\n[…]\nNormalmente a aranha-de-água aloja-se nos ramos das algas para que o ar contido nos sinos de ar sejam renovados ao longo do tempo pela fotossíntese que as algas realizam, estando sempre oxigénio dentro das bolhas.\n[…]\n«Folha: Aranhas-d'água femininas preferem machos gentis, indica estudo»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Formiga-leão",
      "descricao": "Larva de insetos da família Myrmeleontidae, que cava funis na areia para capturar presas."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que larva de inseto cava funis na areia fofa e fica escondida no fundo, esperando os pequenos insetos que escorregam para dentro?",
    "resposta": "Formiga-leão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Antlion"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Antlion",
        "situacao": "ok",
        "texto": "The antlions are a group of about 2,000 species of insect in the neuropteran family Myrmeleontidae. They are known for the predatory habits of their larvae, which mostly dig pits to trap passing ants or other prey. In North America, the larvae are sometimes referred to as doodlebugs because of the marks they leave in the sand. The adult insects are less well known due to their relatively short lif\n[…]\nAntlion larvae eat small arthropods – mainly ants – while the adults of some species eat pollen and nectar, and others are predators of small arthropods. In certain species of Myrmeleontidae, such as Dendroleon pantherinus, the larva, although resembling that of Myrmeleon structurally, makes no pitfall trap, but hides in detritus in a hole in a tree and seizes passing prey.\n[…]\nFunnel-shaped pits are built by members of just 3 antlion tribes: Myrmeleontini, Myrmecaelurini, and Nesoleontini. In these trap-building species, an average-sized larva digs a pit about 2 in (5 cm) deep and 3 in (7.5 cm) wide at the edge. This behavior has also been observed in the Vermileonidae (Diptera), whose larvae dig the same sort of pit to feed on ants.\n[…]\nOther arthropods may make use of the antlion larva's ability to trap prey. The larva of the Australian horsefly (Scaptia muscula) lives in antlion (for example Myrmeleon pictifrons) pit traps and feeds on the prey caught, and the female chalcid wasp (Lasiochalcidia igiliensis) purposefully allows itself to be trapped so that it can parasitise the antlion larva by ovipositing between its head and thorax.\n[…]\nThe closest living relatives of antlions within the Myrmeleontoidea are the owlflies (Ascalaphidae); the Nymphidae are more distantly related. The extinct Araripeneuridae and Babinskaiidae are considered likely to be stem groups in the Myrmeleontiformia clade.\n[…]\nList of Myrmeleontidae genera\n[…]\nMedia related to Myrmeleontidae at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Formiga-le%C3%A3o",
        "situacao": "ok",
        "texto": "O termo formiga-leão é a designação comum aos insetos neurópteros da família dos Myrmeleontidae (Mirmeleonídeos), cujas larvas de quem o nome vulgar deriva, são providas de longas mandíbulas e se enterram no fundo de um funil cônico por elas construído na areia para capturar presas.\n[…]\nTambém são conhecidos pelos nomes de formigão, furão, joão-torrão, mirmeleão, piolho-de-urubu e tatuzinho.\n[…]\nApesar do nome vulgar, estes insetos não pertencem ao grupo das formigas.\n[…]\nMede 4 cm de comprimento 8 cm de envergadura, possuem antenas filiformes. O adulto possui dois pares de asas, que quando paradas, cobrem o corpo como um abrigo. Voa apenas ao anoitecer ou à noite. A larva da formiga-leão pode jejuar durante oito meses, e a ninfa se torna adulta em um mês. A vida de um formiga-leão adulta é muito curta: vai da primavera ao outono.\n[…]\nO nome formiga-leão deriva da larva do inseto.\n[…]\nAs larvas da formiga-leão tem por principal característica a construção de uma armadilha em terrenos arenosos, no formato de funil, que servem para capturar o alimento; influem principalmente na escolha do solo para a construção dos funis, além do solo arenoso, o tamanho das partículas, a possibilidade de perturbação do meio, a disponibilidade de presas, a temperatura do solo e a \"densidade coespecífica\", e é comum que construam os funis sob plantas, pedras ou troncos onde ficam protegidas da chuva, sol ou pisoteio - embora não raro possam ser encontrados longe de qualquer desses meios de proteção.\n[…]\nTambém a presença de várias armadilhas próximas permite que, por resultado de \"efeito de ricochete\", a captura se torne facilitada quando a presa passa por várias armadilhas e, assim, fica mais enfraquecida - o que permitiria que larvas menores tenham sucesso embora com armadilhas pequenas.\n[…]\nMyrmeleon",
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
