Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Invenções e História da Ciência** (tema **Ciências**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Isqueiro",
      "descricao": "Aparelho portátil que produz uma chama; o primeiro foi a lâmpada de Döbereiner, de 1823."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No século dezenove, o que foi inventado primeiro: o isqueiro ou o fósforo de riscar por atrito?",
    "resposta": "O isqueiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lighter",
      "https://en.wikipedia.org/wiki/D%C3%B6bereiner%27s_lamp",
      "https://en.wikipedia.org/wiki/Match"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lighter",
        "situacao": "ok",
        "texto": "A lighter is a portable device which uses mechanical or electrical means to create a controlled flame, and can be used to ignite a variety of flammable items, such as cigarettes,  butane gas, fireworks, candles, or campfires. Some lighters use a consumable chemical fuel, others use electricity from a battery.\n[…]\nThis is useful for soldiers on campaign.\" One of the first lighters was invented by a German chemist named Johann Wolfgang Döbereiner in 1823, and was often called Döbereiner's lamp. This lighter worked by passing flammable hydrogen gas, produced within the lighter by a chemical reaction, over a platinum metal catalyst, which in turn caused it to ignite and give off a great amount of heat and light.\n[…]\nThe Zippo lighter and company were invented and founded by George Grant Blaisdell in 1932. The Zippo was noted for its reliability, \"Life Time Warranty\" and marketing as \"Wind-Proof\". Zippos still use light petroleum distillate, or naphtha, as their fuel source (of which they sell their own brand).\n[…]\nIn the 1950s, a switch occurred in the fuel of choice from naphtha to butane, as butane allows for a controllable flame and has less odour. The butane lighter was invented and patented in France in 1936 by Henri Pingeot, whose patent was acquired by Marcel Quercia. Quercia was the son of a goldsmith whose company sold several different brands of lighters, and saw promise in Pingeot's invention."
      },
      {
        "url": "https://en.wikipedia.org/wiki/D%C3%B6bereiner%27s_lamp",
        "situacao": "ok",
        "texto": "Döbereiner's lamp, also called a \"tinderbox\" (\"Feuerzeug\"), is a lighter invented in 1823 by the German chemist Johann Wolfgang Döbereiner. The lighter is based on the Fürstenberger lighter (invented in Basel in 1780; in which hydrogen gas is ignited by an electrostatically generated spark). Döbereiner's lamp was in production until ca. 1880. In the jar, similar to the Kipp's apparatus, zinc metal\n[…]\nThe Döbereiner's lamp is considered as the first commercial application of heterogeneous catalysis and was commercialized for lighting fires and pipes. The world's largest manufacturer of these lighters was Heinrich Gottfried Piegler from Schleiz in Thuringia (Germany). It is said that in the 1820s over a million of the \"tinderboxes\" were sold.\n[…]\nHoffmann, Roald (Jul–Aug 1998). \"Döbereiner's Lighter\". American Scientist. 86 (4): 326. doi:10.1511/1998.4.326. Archived from the original on 2016-11-07. Retrieved 2010-07-10.\n[…]\nGeorge B. Kauffman (1999). \"Johann Wolfgang Döbereiner's Feuerzeug\" (PDF). Platinum Metals Review. 43 (3): 122–128. doi:10.1595/003214099X433122128. Archived from the original (PDF) on 2012-02-07. Retrieved 2007-02-15."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Match",
        "situacao": "ok",
        "texto": "A match is a tool for starting a fire. Typically, matches are made of small wooden sticks or stiff paper. One end is coated with a material that can be ignited by friction generated by striking the match against a suitable surface. Wooden matches are packaged in matchboxes, and paper matches are partially cut into rows and stapled into matchbooks. The coated end of a match, known as the match \"hea\n[…]\nHe mixed the phosphorus with lead dioxide and gum arabic, poured the paste-like mass into a jar, and dipped the pine sticks into the mixture and let them dry. When he tried them that evening, all of them lit evenly. He sold the invention and production rights for these noiseless matches to István Rómer, a Hungarian pharmacist living in Vienna, for 60 florins (about 22.5 oz t of silver).\n[…]\nThe Swedes long held a virtual worldwide monopoly on safety matches, with the industry mainly situated in Jönköping, by 1903 called Jönköpings & Vulcans Tändsticksfabriks AB today Swedish Match. In France, they sold the rights to their safety match patent to Coigent Père & Fils of Lyon, but Coigent contested the payment in the French courts, on the basis that the invention was known in Vienna before the Lundström brothers patented it.\n[…]\nStormproof matches, also known as lifeboat matches, are often included in survival kits. They were invented by Morland Micholl Dessau in 1925 and have a strikeable tip similar to a normal match. The matches also have a waterproof coating (which often makes the match more difficult to light). As a result of the combustible coating, they burn strongly even in strong winds, and can even spontaneously re-ignite after being briefly immersed in water.\n[…]\n\"The History of Matches\". Inventors.about.com.{{cite web}}:  CS1 maint: deprecated archival service (link)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Isqueiro",
        "situacao": "ok",
        "texto": "O isqueiro (anteriormente chamado de lâmpada de Döbereiner) é um dispositivo portátil usado para gerar fogo, patenteado em 1823 pelo químico alemão Johann Wolfgang Döbereiner, baseado na pederneira.\n[…]\nOs primeiros isqueiros foram pistolas de pederneira convertidas que usavam pólvora. Um dos primeiros isqueiros foi inventado pelo químico alemão Johann Wolfgang Döbereiner em 1823 e muitas vezes chamado de lâmpada de Döbereiner, que trabalhava passando um gás hidrogênio inflamável, produzido por uma reação química dentro do dispositivo, sobre um catalisador de metal de platina que, por sua vez, fazia com que ele incendiasse e emitisse uma grande quantidade de calor e luz.\n[…]\nO isqueiro e a empresa Zippo foram inventados e fundada por George Grant Blaisdell em 1932. O Zippo era conhecido por sua confiabilidade, \"garantia vitalícia\" e marketing como \"à prova de vento\". A maioria dos primeiros Zippos usava nafta como fonte de combustível.\n[…]\nEm 1961, a empresa francesa Feudor lançou o primeiro isqueiro descartável do mundo, comercializado sob a marca Cricket. Este isqueiro inovador, fabricado em plástico, oferecia uma alternativa prática aos isqueiros recarregáveis tradicionais. Seu design simples e preço acessível rapidamente conquistaram os consumidores.\n[…]\nEm 1970, a Gillette, uma empresa do grupo P&G, adquiriu uma parte significativa da Feudor, o que permitiu à marca Cricket expandir-se internacionalmente. Hoje, a Cricket é reconhecida como o primeiro isqueiro descartável do mundo e continua sendo um importante player no mercado.\n[…]\nA definição de dicionário de Isqueiro no Wikcionário",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Wright Flyer",
      "descricao": "Avião dos irmãos Wright que voou em Kitty Hawk, nos Estados Unidos, em 17 de dezembro de 1903."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "O que é maior: a distância do primeiro voo dos irmãos Wright, em 1903, ou a medida de ponta a ponta das asas de um Boeing 747?",
    "resposta": "As asas do Boeing 747",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wright_Flyer",
      "https://en.wikipedia.org/wiki/Boeing_747"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "The Wright Flyer (also known as the Kitty Hawk, Flyer I or the 1903 Flyer) made the first sustained flight by a manned heavier-than-air powered and controlled aircraft on December 17, 1903. Invented and flown by brothers Orville and Wilbur Wright, it marked the beginning of the pioneer era of aviation.\n[…]\nUpon returning to Kitty Hawk in 1903, the Wrights completed assembly of the Flyer while practicing on the 1902 Glider from the previous season. On December 14, 1903, they felt ready for their first attempt at powered flight. With the help of men from the nearby government life-saving station, the Wrights moved the Flyer and its launching rail to the incline of a nearby sand dune, Big Kill Devil Hill, intending to make a gravity-assisted takeoff.\n[…]\nHis flight, captured in a famous photograph, lasted 12 seconds for a total distance of 120 feet (37 m) – shorter than the wingspan of a Boeing 747. The brothers made three more flights, taking turns. The second and third flights were 175 and 200 feet (53 and 61 m) in 12 and 15 seconds respectively. The fourth and last flight, by Wilbur, took 59 seconds to cover 852 feet (260 m) over the ground, moving through approximately a half mile (800 m) of flowing air.\n[…]\nThe Los Angeles Section of the American Institute of Aeronautics and Astronautics (AIAA) built a full-scale replica of the 1903 Wright Flyer between 1979 and 1993 using plans from the original Wright Flyer published by the Smithsonian Institution in 1950. Constructed in advance of the 100th anniversary of the Wright Brothers' first flight, the replica was intended for wind tunnel testing to provide a historically accurate aerodynamic database of the Wright Flyer design.\n[…]\n\"Under The Hood of A Wright Flyer\" Air & Space Magazine\n[…]\nHistory of the Wright Flyer Wright State University Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Boeing_747",
        "situacao": "ok",
        "texto": "The Boeing 747 is a long-range wide-body airliner designed and manufactured by Boeing Commercial Airplanes in the United States between 1968 and 2023.\n[…]\nThe 747 was conceived while air travel was increasing in the 1960s. The era of commercial jet transportation, led by the enormous popularity of the Boeing 707 and Douglas DC-8, had revolutionized long-distance travel.\n[…]\nBoeing addressed these concerns in 1970 by conducting wake turbulence tests with a 737-100 flying closely behind a 747 at various distances to measure the wake generation of the larger aircraft, which Boeing found only to have a slight difference from the wake generated by the smaller 707 flown in the same test.\n[…]\nIn 2023, a Boeing 747-412, retired from Lion Air, was turned into a steak restaurant in Bekasi, Indonesia. The aircraft had been sitting since 2018 but the construction of the restaurant was delayed due to the COVID-19 pandemic.\n[…]\nBoeing 747 LCF\n[…]\nBoeing 747-8\n[…]\nBoeing 747-400\n[…]\nBoeing VC-25\n[…]\n\"747-8\". Boeing.\n[…]\n\"747-100 cutaway\". FlightGlobal.\n[…]\nDebut of Boeing 747. British Movietone News. October 1, 1968.\n[…]\n\"Photos: Boeing 747-100 Assembly Line In 1969\". Aviation Week & Space Technology. April 28, 1969.\n[…]\n\"Boeing 747 Aircraft Profile\". FlightGlobal. June 3, 2007.\n[…]\n\"This Luxury Boeing 747-8 for the Super-Rich is a Palace in the Sky\". popular mechanics. February 24, 2015.\n[…]\n\"Boeing 747: Evolution of a Jumbo, As Featured On Aviation Week's Covers\". Aviation Week. August 2016.\n[…]\nGuy, Norris. \"Evolution of a Widebody: 50 Years of the Boeing 747\". Aviation Week & Space Technology.\n[…]\nFlottau, Jens (January 26, 2023). \"How Boeing's 747 Revolutionized Air Travel\". Aviation Week & Space Technology."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "O Wright Flyer (também frequentemente referenciado como Flyer I ou 1903 Flyer) foi a primeira aeronave construída pelos Irmãos Wright. Eles voaram com ele por quatro vezes em 17 de Dezembro de 1903, próximo à Kill Devil Hills, Carolina do Norte, cerca de 6,4 km ao Sul de Kitty Hawk, Estados Unidos. Hoje a aeronave está em exibição no Museu do Ar e Espaço em Washington, D.C.\n[…]\nOs Wright construíram a aeronave em 1903 usando madeira de Picea como matéria prima. As asas foram desenhadas com um arqueamento de 1-em-20. Como eles não encontraram um motor de automóvel leve o suficiente para a tarefa, eles atribuíram ao seu empregado Charlie Taylor a tarefa de construir um completamente novo. Uma corrente semelhante às de bicicletas, acionava as duas hélices que também foram projetadas e construídas por eles, à mão.\n[…]\nA \"pista de decolagem\" do Flyer era um trilho composto de ripas de madeira de formato e medidas padronizados, que os irmãos apelidaram de \"Junction Railroad\" algo como \"ferrovia de juntas\", sendo obrigatório o uso para o voo do modelo.\n[…]\nO seu primeiro voo durou 12 segundos para uma distância total de 36,5 m - menos que a envergadura de asa de um Boeing 747, como foi comentado em 2003 na comemoração do centenário do primeiro voo.\n[…]\nDepois dos voos do Flyer, os irmãos Wright retornaram ao lar em Dayton para o Natal de 1903. Enquanto eles abandonaram os planadores, eles perceberam o significado histórico do Flyer. Eles o empacotaram e enviaram para Dayton, onde ele permaneceu embalado por nove anos. ele ficou submerso na Grande enchente de Dayton em Março de 1913.\n[…]\nO então secretário da Smithsonian Institution, Charles Walcott, se recusava a dar o crédito desse primeiro voo aos irmãos Wright. Em vez disso, ele concedeu a honra ao secretário anterior (seu amigo) Samuel Langley, que em 1903 testou o seu Langley Aerodrome no rio Potomac sem sucesso.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Wright Flyer",
      "descricao": "Avião dos irmãos Wright que voou em Kitty Hawk, nos Estados Unidos, em 17 de dezembro de 1903."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 17 de dezembro de 1903, em Kitty Hawk, qual dos irmãos Wright pilotava o Flyer no primeiro dos quatro voos daquele dia?",
    "resposta": "Orville Wright",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wright_Flyer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "The Wright Flyer (also known as the Kitty Hawk, Flyer I or the 1903 Flyer) made the first sustained flight by a manned heavier-than-air powered and controlled aircraft on December 17, 1903. Invented and flown by brothers Orville and Wilbur Wright, it marked the beginning of the pioneer era of aviation.\n[…]\nOn November 5, 1903, the brothers tested their engine on the Wright Flyer at Kitty Hawk, but before they could tune the engine, the propeller hubs came loose. The drive shafts were sent back to Dayton for repair, and returned on 20 November. A hairline crack was discovered in one of the propeller shafts. Orville returned to Dayton on 30 November to make new spring steel shafts.\n[…]\nOn December 12, the brothers installed the new shafts on the Wright Flyer and tested it on their 60-foot (18 m) launching rail system that included a wheeled launching dolly. According to Orville:\n[…]\nThe Wright Flyer was put on display in the Arts and Industries Building of the Smithsonian on December 17, 1948, 45 years to the day after the aircraft's only successful flights. (Orville did not live to see this, as he had died that January.) In 1976, it was moved to the Milestones of Flight Gallery of the new National Air and Space Museum.\n[…]\nIn 1981, discussion began on the need to restore the Wright Flyer from the aging it sustained after many decades on display. During the ceremonies celebrating the 78th anniversary of the first flights, Ivonette Wright Miller (Lorin's daughter), one of the Wright brothers' nieces, presented the Museum with the original covering of one wing of the Flyer, which she had received in her inheritance from Orville. She expressed her wish to see the aircraft restored.\n[…]\n\"Under The Hood of A Wright Flyer\" Air & Space Magazine\n[…]\nHistory of the Wright Flyer Wright State University Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "O Wright Flyer (também frequentemente referenciado como Flyer I ou 1903 Flyer) foi a primeira aeronave construída pelos Irmãos Wright. Eles voaram com ele por quatro vezes em 17 de Dezembro de 1903, próximo à Kill Devil Hills, Carolina do Norte, cerca de 6,4 km ao Sul de Kitty Hawk, Estados Unidos. Hoje a aeronave está em exibição no Museu do Ar e Espaço em Washington, D.C.\n[…]\nNo seu retorno à Kitty Hawk em 1903, os Wright completaram a montagem do Flyer enquanto praticavam com o planador de 1902. Em 14 de Dezembro eles se sentiram prontos para a primeira tentativa de voo motorizado. Com a ajuda de alguns membros da equipe de salva vidas local, levaram o Flyer e a sua rampa de lançamento para o declive de uma duna próxima (em Kill Devil Hills), com a intenção de fazer uma decolagem facilitada pela gravidade.\n[…]\nEm rodízio, os irmãos Wright fizeram quatro voos curtos em baixa altitude naquele dia. A rota dos voos foi essencialmente reta; curvas não foram tentadas. Cada voo terminou num \"pouso\" em forma de queda não intencional. O último voo, conduzido por Wilbur percorreu 260 m em 59 segundos, bem mais que os três primeiros de 36, 53 e 61 m respectivamente. O \"pouso\" do último voo quebrou o profundor frontal, que os irmãos Wright esperavam consertar para um possível voo de 6 km até a vila de Kitty Hawk.\n[…]\nDepois dos voos do Flyer, os irmãos Wright retornaram ao lar em Dayton para o Natal de 1903. Enquanto eles abandonaram os planadores, eles perceberam o significado histórico do Flyer. Eles o empacotaram e enviaram para Dayton, onde ele permaneceu embalado por nove anos. ele ficou submerso na Grande enchente de Dayton em Março de 1913.\n[…]\nIrmãos Wright\n[…]\nWright Flyer II\n[…]\nWright Flyer III\n[…]\nHoward, Fred. Orville and Wilbur: The Story of the Wright Brothers. London: Hale, 1988. ISBN 0-7090-3244-7.\n[…]\nWrightexperience.com\n[…]\nUnder The Hood of A Wright Flyer  Air & Space Magazine",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Linus Pauling",
      "descricao": "Químico americano (1901–1994), ganhador do Nobel de Química de 1954 e do Nobel da Paz de 1962."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre os cientistas que ganharam dois prêmios Nobel, quem recebeu os dois sem dividir com ninguém?",
    "resposta": "Linus Pauling",
    "distratores": [
      "Marie Curie",
      "Frederick Sanger",
      "John Bardeen"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Linus_Pauling"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Linus_Pauling",
        "situacao": "ok",
        "texto": "Linus Carl Pauling ( PAW-ling; February 28, 1901 – August 19, 1994) was an American chemist and peace activist. He published more than 1,200 papers and books, of which about 850 dealt with scientific topics. Scientific American called him one of the 20 greatest scientists of all time. For his scientific work, Pauling was awarded the Nobel Prize in Chemistry in 1954. For his peace activism, he was \n[…]\n(No prize had previously been awarded for that year.)  They described him as \"Linus Carl Pauling, who ever since 1946 has campaigned ceaselessly, not only against nuclear weapons tests, not only against the spread of these armaments, not only against their very use, but against all warfare as a means of solving international conflicts.\"  Pauling himself acknowledged his wife Ava's deep involvement in peace work, and regretted that she was not awarded the Nobel Peace Prize with him.\n[…]\nLinus Carl Pauling was an honorary president and member of the International Academy of Science, Munich, until the end of his life.\n[…]\nPauling married Ava Helen Miller on June 17, 1923. The marriage lasted until her death in 1981. They had four children. Linus Carl Jr. (1925–2023) became a psychiatrist; Peter (1931–2003) a crystallographer at University College London; Edward Crellin (1937–1997) a biologist; and Linda Helen (born 1932) married noted Caltech geologist and glaciologist Barclay Kamb.\n[…]\nOn March 6, 2008, the United States Postal Service released a 41 cent stamp honoring Pauling designed by artist Victor Stabin. His description reads: \"A remarkably versatile scientist, structural chemist Linus Pauling (1901–1994) won the 1954 Nobel Prize in Chemistry for determining the nature of the chemical bond linking atoms into molecules.\n[…]\nNobel laureate Peter Agre has said that Linus Pauling inspired him.\n[…]\nOral history interview with Linus C. Pauling from Science History Institute Digital Collections"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Linus_Pauling",
        "situacao": "ok",
        "texto": "Linus Carl Pauling (Portland, 28 de fevereiro de 1901 — Big Sur, 19 de agosto de 1994) foi um químico quântico e bioquímico dos Estados Unidos. Também é reconhecido como cristalógrafo, biólogo molecular e pesquisador médico.\n[…]\nPauling recebeu o Nobel da Paz de 1962, pela sua campanha contra os testes nucleares e é a única personalidade a ter recebido dois Prémios Nobel não compartilhados. As outras personalidades que receberam dois Prémios Nobel foram Marie Curie (Física e Química), John Bardeen (ambos em Física), Frederick Sanger (ambos em Química) e Barry Sharpless (ambos em Química). Mais tarde na sua carreira científica, advogou o uso em maiores proporções, em dietas, de vitamina C e outros nutrientes.\n[…]\nNo ano seguinte, Linus Pauling assinou o Manifesto Russell-Einstein, juntando o seu nome ao de Bertrand Russell, Albert Einstein e outros oito cientistas e intelectuais, que apelavam para a busca de soluções pacíficas durante a Guerra Fria.\n[…]\nO prêmio mais notável recebido por Linus Pauling foi o Prêmio Nobel, recebendo o de Química de 1954 e o da Paz de 1962. Para além de Pauling, só mais três pessoas o receberam em mais de uma ocasião. Pauling, contudo, foi o único a tê-lo recebido individualmente das duas vezes. Para além do Nobel, foi várias vezes distinguido ao longo da sua carreira, entre as quais cabe destacar:\n[…]\nA contribuição de Linus Pauling para o desenvolvimento científico no século XX é de especial importância. Pauling integrou uma lista com os vinte maiores cientistas de todos os tempos, segundo a revista britânica New Scientist. Pauling é, a par de Albert Einstein, a única personalidade do século XX a aparecer na dita lista. Gautam R.\n[…]\nPublicações científicas selecionadas, em formato PDF",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Baquelite",
      "descricao": "Plástico criado em 1907 pelo químico Leo Baekeland, feito de fenol e formaldeído."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Criado em 1907, qual destes materiais é considerado o primeiro plástico feito só de componentes sintéticos?",
    "resposta": "Baquelite",
    "distratores": [
      "Náilon",
      "Polietileno",
      "Teflon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bakelite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bakelite",
        "situacao": "ok",
        "texto": "Bakelite ( BAY-kə-lyte) is the first plastic made from synthetic components. It was developed by chemist Leo Baekeland in Yonkers, New York, in 1907, and patented on December 7, 1909.\n[…]\nMolded Bakelite forms in a condensation reaction of phenol and formaldehyde, with wood flour or asbestos fiber as a filler, under high pressure and heat in a time frame of a few minutes of curing. The result is a hard plastic material. Asbestos was gradually abandoned as filler because many countries banned the production of asbestos.\n[…]\nBy 1930, designer Paul T. Frankl considered Bakelite a \"Materia Nova\", \"expressive of our own age\". By the 1930s, Bakelite was used for game pieces like chess pieces, poker chips, dominoes, and mahjong sets. Kitchenware made with Bakelite, including canisters and tableware, was promoted for its resistance to heat and to chipping. In the mid-1930s, Northland marketed a line of skis with a black \"Ebonite\" base, a coating of Bakelite. By 1935, it was used in solid-body electric guitars.\n[…]\nDuring World War II, Bakelite was used in a variety of wartime equipment including pilots' goggles and field telephones. It was also used for patriotic wartime jewelry. In 1943, the thermosetting phenolic resin was even considered for the manufacture of coins, due to a shortage of traditional material. Bakelite and other non-metal materials were tested for usage for the one cent coin in the US before the Mint settled on zinc-coated steel.\n[…]\nThe term Bakelite is sometimes used in the resale market as a catch-all for various types of early plastics, including Catalin and Faturan, which may be brightly colored, as well as items made of true Bakelite material."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baquelite",
        "situacao": "ok",
        "texto": "A baquelite é uma resina sintética, quimicamente estável e resistente ao calor e o primeiro produto plástico. Trata-se do polioxibenzimetilenglicolanidrido, ou seja, é a junção do fenol com o formaldeído (aldeído fórmico), formando um polímero chamado polifenol.\n[…]\nO primeiro plástico feito de componentes sintéticos, foi desenvolvido por Leo Baekeland em Yonkers, Nova York, em 1907, e patenteado em 7 de dezembro de 1909 (Patente dos EUA 942699A), tendo criado, em 1910, a General Bakelite Company para a exploração industrial de suas descobertas. A fórmula resulta da combinação por polimerização de fenol (C6H5OH) e formaldeído ou aldeído fórmico (HCHO), produtos sintéticos, sob calor e pressão.\n[…]\nAntes de Baekeland, houve várias outras tentativas de fazer polímeros fenol formaldeído, mas geralmente formavam sólidos quebradiços e inúteis. A grande descoberta feita por Baekeland foi como controlar a reação. Para isso, ele inventou uma máquina chamada Bakelizer, um vaso de pressão a vapor usado para produzir quantidades comerciais do primeiro plástico totalmente sintético, baquelite.\n[…]\nNo ramo da metalografia, a baquelite pode ser utilizada no embutimento das amostras para a ideal análise da microestrutura do material analisado. Ao sofrer aquecimento, a baquelite é derretida, porém ao sofrer resfriamento e se transformar em um produto sólido, ela não é afetada ao se aplicar temperatura novamente.\n[…]\nA maior parte dos computadores e dispositivos eletrônicos em comércio é revestida com plásticos não-recicláveis. Pensando nisso, pesquisadores desenvolveram um novo material plástico reciclável feito com baquelite para os componentes eletrônicos.\n[…]\nThe Bakelite Museum (inglês)\n[…]\nBakelite: The Material of a Thousand Uses (inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Telefone",
      "descricao": "Aparelho de telecomunicação que transmite a voz à distância, aqui um modelo antigo de disco."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas invenções do fim do século dezenove foi apresentada ao público primeiro?",
    "resposta": "Telefone",
    "distratores": [
      "Fonógrafo",
      "Lâmpada de Edison",
      "Cinetoscópio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Invention_of_the_telephone",
      "https://en.wikipedia.org/wiki/Phonograph",
      "https://en.wikipedia.org/wiki/Kinetoscope"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Invention_of_the_telephone",
        "situacao": "ok",
        "texto": "The invention of the telephone was the culmination of work done by many different people, and led to an array of lawsuits relating to the conflicting patent claims made by several individuals and numerous companies. Notable people included in this process were Antonio Meucci, Philipp Reis, Elisha Gray and Alexander Graham Bell.\n[…]\nBecause a liquid transmitter was not practical for commercial products, Bell focused on improving the electromagnetic telephone after March 1876 and never used Gray's liquid transmitter in public demonstrations or commercial use.\n[…]\nBell exhibited a working telephone at the Centennial Exhibition in Philadelphia in June 1876, where it attracted the attention of Brazilian emperor Pedro II plus the physicist and engineer Sir William Thomson (who would later be ennobled as the 1st Baron Kelvin). In August 1876 at a meeting of the British Association for the Advancement of Science, Thomson revealed the telephone to the European public.\n[…]\nA later telephone design was publicly exhibited on May 4, 1877, at a lecture given by Professor Bell in the Boston Music Hall. According to a report quoted by John Munro in Heroes of the Telegraph:\n[…]\nOn January 14, 1878, at Osborne House, on the Isle of Wight, Bell demonstrated the device to Queen Victoria, placing calls to Cowes, Southampton and London. These were the first publicly witnessed long-distance telephone calls in the UK. The queen considered the process to be \"quite extraordinary\" although the sound was \"quite faint\". She later asked to buy the equipment that was used, but Bell offered to make a model specifically for her.\n[…]\nIn 1886 it was publicly alleged by Zenas Wilber, a patent examiner, that Bell paid him one hundred dollars, when he allowed Bell to look at Gray's confidential patent filing."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Phonograph",
        "situacao": "ok",
        "texto": "A phonograph, later called a gramophone, and since the 1940s a record player, or more recently a turntable, is a device for the mechanical and analogue reproduction of sound.\n[…]\nThe device's true significance in the history of recorded sound was not fully realized prior to March 2008, when it was discovered and resurrected in a Paris patent office by First Sounds, an informal collaborative of American audio historians, recording engineers, and sound archivists founded to make the earliest sound recordings available to the public.\n[…]\nCros was a poet of meager means, not in a position to pay a machinist to build a working model, and largely content to bequeath his ideas to the public domain free of charge and let others reduce them to practice, but after the earliest reports of Edison's presumably independent invention crossed the Atlantic he had his sealed letter of April 30 opened and read at the December 3, 1877, meeting of the French Academy of Sciences, claiming due scientific credit for priority of conception.\n[…]\nThrough experimentation, in 1892, Berliner began commercial production of his disc records and \"gramophones\". His \"phonograph record\" was the first disc record to be offered to the public. They were five inches (13 cm) in diameter and recorded on one side only. Seven-inch (17.5 cm) records followed in 1895. The same year, Berliner replaced the hard rubber used to make the discs with a shellac compound. Berliner's early records had poor sound quality, however. Work by Eldridge R."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kinetoscope",
        "situacao": "ok",
        "texto": "The Kinetoscope is an early motion picture exhibition device, designed for films to be viewed by one person at a time through a peephole viewer window. The Kinetoscope was not a movie projector, but it introduced the basic approach that would become the standard for all cinematic projection before the advent of video: it created the illusion of movement by conveying a strip of perforated film bear\n[…]\nOn April 14, 1894, a public Kinetoscope parlor was opened by the Holland Bros. in New York City at 1155 Broadway, on the corner of 27th Street—the first commercial motion picture house. The venue had ten machines, set up in parallel rows of five, each showing a different movie. For 25 cents a viewer could see all the films in either row; half a dollar gave access to the entire bill.\n[…]\nThe Kinetoscope was also gaining notice abroad. On July 16, 1894, it was demonstrated publicly for the first time in Europe at the 20 boulevard Montmartre newsroom of Le petit Parisienne, where photographer Antoine Lumière may have seen it for the first time. In September, the first Kinetoscope parlor outside the United States opened in Buenos Aires, Argentina. The first European Kinetoscope parlor was soon operating in Paris, at 20 boulevard Poissonnière.\n[…]\nA few weeks after he and Edison fell out, Dickson openly participated in an April 21 screening of the Latham group's new Eidoloscope for at least one member of the New York press, which historians describe as the first public film projection in the U.S. On May 20, in Lower Manhattan, the world's first run of commercial motion picture screenings began: the Eidoloscope show's prime attraction was a boxing match between Young Griffo and Charles Barnett, approximately eight minutes long."
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Farol de Alexandria",
      "descricao": "Farol construído no século três antes de Cristo na ilha de Faros, em Alexandria, uma das sete maravilhas do mundo antigo."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Das sete maravilhas do mundo antigo, qual foi feita com a função prática de guiar os navios até o porto?",
    "resposta": "Farol de Alexandria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lighthouse_of_Alexandria",
      "https://en.wikipedia.org/wiki/Seven_Wonders_of_the_Ancient_World"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lighthouse_of_Alexandria",
        "situacao": "ok",
        "texto": "The Pharos of Alexandria was a lighthouse built by the Ptolemaic Kingdom of Ancient Egypt, during the reign of Ptolemy II Philadelphus (280–247 BC). It has been estimated to have been at least 100 metres (330 ft) in overall height. One of the Seven Wonders of the Ancient World, for many centuries it was one of the world's tallest man-made structures.\n[…]\nThe etymology of \"Pharos\" is uncertain. The word became generalised in modern Greek to mean \"lighthouse\" (φάρος 'fáros'), and was borrowed by many Romance languages such as Catalan or Romanian (far), French (phare), Italian and Spanish (faro) – and thence into Esperanto (faro), and Portuguese (farol), and even some Slavic languages like Bulgarian (far). In French, Portuguese, Spanish, Turkish, Serbian, Bulgarian and Russian, a derived word means \"headlight\" (phare, farol, faro, far, фар, фара).\n[…]\nHaas, Christopher (1997). Alexandria in Late Antiquity: Topography and Social Conflict. Johns Hopkins. ISBN 0-8018-8541-8.\n[…]\nHarris, William V., and Giovanni Ruffini (2004). Ancient Alexandria Between Egypt and Greece. Leiden: Brill.\n[…]\nHiggins, Michael Denis (2023). \"A Reverse History of the Pharos Lighthouse of Alexandria: From the Underwater Remains to the First Structure\". The Ancient Near East Today. 11 (10).\n[…]\nPolyzōidēs, Apostolos (2014). Alexandria: City of Gifts and Sorrows: From Hellenistic Civilization to Multiethnic Metropolis. Chicago: Sussex Academic Press, 2014.\n[…]\nTkaczow, Barbara, and Iwona Zych (1993). The Topography of Ancient Alexandria: An Archaeological Map. Warszawa: Zaklad Archeologii Śródziemnomorskiej, Polskiej Akadmii Nauk.\n[…]\nLighthouse of Alexandria—World History Encyclopedia\n[…]\nDescription of Alexandria and the Pharos in the Zhu fan zhi\n[…]\nA frightening vision: on plans to rebuild the Alexandria Lighthouse (Archived June 12, 2018, at the Wayback Machine)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Seven_Wonders_of_the_Ancient_World",
        "situacao": "ok",
        "texto": "The Seven Wonders of the Ancient World, also known as the Seven Wonders of the World or simply the Seven Wonders, is a list of seven notable structures present during classical antiquity, first established in the 1572 publication Octo Mundi Miracula using a combination of historical sources.\n[…]\nThe first reference to a list of seven such monuments was given by Diodorus Siculus; he did not provide the list itself, mentioning only the Walls of Babylon and the Pyramids. The epigrammist Antipater of Sidon, who lived around or before 100 BC, gave a list of seven \"wonders\", including six of the present list (substituting the walls of Babylon for the Lighthouse of Alexandria):\n[…]\nEarlier and later lists by the historian Herodotus (c. 484 BC – c. 425 BC) and the poet Callimachus of Cyrene (c. 305 BC – c. 240 BC), housed at the Museum of Alexandria, survive only as references.\n[…]\nReflecting the rise of Christianity and the factor of time, nature and the hand of man overcoming Antipater's seven wonders, Roman and Christian sites began to figure on the list, including the Colosseum, Noah's Ark, and Solomon's Temple. In the 6th century, a list of seven wonders was compiled by St. Gregory of Tours: the list included the Temple of Solomon, the Pharos of Alexandria, and Noah's Ark.\n[…]\nThe Temple of Artemis and the Statue of Zeus were destroyed by fire, while the Lighthouse of Alexandria, the Colossus, and tomb of Mausolus were destroyed by earthquakes. Among the surviving artifacts are sculptures from the tomb of Mausolus and the Temple of Artemis, currently kept in the British Museum in London."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Farol_de_Alexandria",
        "situacao": "ok",
        "texto": "Farol de Alexandria (em grego:  ὁ Φάρος της Ἀλεξανδρείας) foi um farol construído pelo Reino Ptolomaico entre 280 e 247 a.C. na cidade de Alexandria. Ele tinha entre 120 e 137 metros de altura e era uma das sete maravilhas do mundo antigo, sendo que por muitos séculos foi uma das estruturas mais altas no mundo. Danificado por três terremotos entre os anos de 956 e 1323, tornou-se uma ruína abandon\n[…]\nAté 1480, era a terceira maravilha antiga sobrevivente (depois do Mausoléu de Halicarnasso e da Grande Pirâmide de Gizé), quando então a última de suas pedras remanescentes foi usada para construir a Cidadela de Qaitbay no mesmo local. Em 1994, os arqueólogos franceses descobriram parte dos restos do farol no Porto Oriental de Alexandria.\n[…]\nO farol foi construído no século III a.C. Depois que Alexandre, o Grande morreu de uma febre aos 32 anos, o primeiro Ptolomeu (Ptolemeu I Sóter) anunciou-se rei em 305 a.C. e comissionou a sua construção pouco depois. O edifício foi terminado durante o reinado de seu filho, o segundo Ptolomeu (Ptolemeu II Filadelfo). Levou doze anos para completar, com um custo total de 800 talentos e serviu como um protótipo para todos os faróis posteriores no mundo.\n[…]\nMoedas romanas encontrado no mosteiro alexandrino mostram que uma estátua de um Tritão ficava posicionada em cada um dos quatro cantos do edifício. Uma estátua de Poseidon ou de Zeus ficava no topo do farol. Os blocos de alvenaria do Faros estavam interligados, selados com chumbo derretido, para resistir às ondas do mar.\n[…]\nNo final de 1994, arqueólogos gregos liderados por Jean-Yves Empereur redescobriram os restos físicos do farol no piso do Porto Oriental de Alexandria. Alguns destes restos foram trazidos acima e ficaram em exposição pública até o fim de 1995. Subsequentes imagens de satélite revelaram mais vestígios. É possível mergulhar e ver as ruínas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Caneta esferográfica",
      "descricao": "Caneta com uma pequena esfera na ponta que espalha a tinta, patenteada pelo húngaro László Bíró em 1938."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes instrumentos de escrita, qual foi o último a ser inventado?",
    "resposta": "Caneta esferográfica",
    "distratores": [
      "Caneta-tinteiro",
      "Lápis de grafite",
      "Pena de aço"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ballpoint_pen",
      "https://en.wikipedia.org/wiki/Fountain_pen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ballpoint_pen",
        "situacao": "ok",
        "texto": "A ballpoint pen is a pen that dispenses ink (usually in paste form) over a hard ball rolling in its point. The materials commonly used are steel, brass, or tungsten carbide. The design was conceived and developed as a cleaner and more reliable alternative to dip pens and fountain pens. It is now the world's most-used writing instrument, with millions manufactured and sold daily. It has influenced \n[…]\nThe first patent for a ballpoint pen was issued on 30 October 1888 to American inventor John J. Loud, who was attempting to make a writing instrument that would be able to write \"on rough surfaces—such as wood, coarse wrapping paper, and other articles\"—which fountain pens could not. Loud's pen had a small rotating steel ball held in place by a socket. Although it could be used to mark rough surfaces such as leather, as Loud intended, it proved too coarse for letter-writing.\n[…]\nThe manufacture of economical, reliable ballpoint pens as known today arose from experimentation, modern chemistry, and the precision manufacturing capabilities of the early 20th century. Patents filed worldwide during early development are testaments to failed attempts at making the pens commercially viable and widely available. Early ballpoints did not deliver the ink evenly; overflow and clogging were among the obstacles faced by early inventors.\n[…]\n1998: Drawing and writing instruments – Ball point pens – Vocabulary\n[…]\nFascinating facts about the invention of the Ballpoint Pen by Ladislas Biro in 1935 (archived 13 September 2019)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fountain_pen",
        "situacao": "ok",
        "texto": "A fountain pen is a writing instrument that uses a metal nib to apply water-based ink to paper.\n[…]\nIn 1848, American inventor Azel Storrs Lyman patented a pen with \"a combined holder and nib\". In 1849 Scottish inventor Robert William Thomson invented the refillable fountain pen. From the 1850s, there was a steadily accelerating stream of fountain pen patents and pens in production. However, it was only after three key inventions were in place that the fountain pen became a widely popular writing instrument. Those were the iridium-tipped gold nib, hard rubber, and free-flowing ink.\n[…]\nScrew-mechanism piston-fillers were made as early as the 1820s, but the mechanism's modern popularity begins with the original Pelikan of 1929, based upon a patent that was initially licensed to a Croatian company Moster-Penkala by inventor Theodore Kovacs. The basic idea is simple and intuitive: turn a knob at the end of the pen and a screw mechanism draws a piston up the barrel, sucking in ink. Pens with this mechanism remain very popular today.\n[…]\nWhile no longer the primary writing instrument in modern times, fountain pens are used for important official works such as signing valuable documents. Today, fountain pens are often treated as luxury goods and sometimes as status symbols. Fountain pens may serve as an everyday writing instrument, much like the common ballpoint pen."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caneta_esferogr%C3%A1fica",
        "situacao": "ok",
        "texto": "Canetas esferográficas são um tipo de caneta cuja tinta envolve uma esfera rolante que desliza sobre a superfície destinada à escrita, disponível em várias cores.\n[…]\nO conceito de uma caneta esferográfica remonta à patente registada por John J. Loud em 30 de Outubro de 1888. Tratava-se de um produto destinado a marcar couros e não foi explorado comercialmente.\n[…]\nPosteriormente, o jornalista húngaro e naturalizado argentino László Bíró inventou a primeira caneta esferográfica, na década de 1930. Ele havia percebido que o tipo de tinta utilizado na impressão de jornais secava rapidamente, deixando o papel seco e livre de borrões. Imaginou então criar uma caneta utilizando o mesmo tipo de tinta. Entretanto, a tinta, espessa, não fluía de maneira regular.\n[…]\nA princípio, os consumidores norte-americanos relutaram em comprar uma caneta \"Bic\", já que outros modelos de canetas esferográficas haviam sido lançados sem sucesso no mercado dos EUA por diversos fabricantes. Para vencer essa relutância do público, a \"Bic\" veiculou uma campanha em rede nacional de televisão para informar que a caneta esferográfica \"escreve logo de cara, sempre!\" e que seu preço era de apenas 0,299 dólares.\n[…]\nA \"Bic\" também veiculou anúncios televisivos que mostravam as suas canetas sendo disparadas de espingardas, amarradas a patins de gelo e até montadas sobre britadeiras. Após um ano, a concorrência forçou a queda dos preços para 0,10 dólares por unidade. Atualmente, a empresa fabrica milhões de canetas esferográficas por dia, atendendo a todo o planeta.\n[…]\nAs canetas são feitas de plástico ou de metal, ao passo que a pequena esfera é feita de latão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Caneta esferográfica",
      "descricao": "Caneta com uma pequena esfera na ponta que espalha a tinta, patenteada pelo húngaro László Bíró em 1938."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na década de 1940, o húngaro László Bíró começou a fabricar sua caneta esferográfica em que país sul-americano?",
    "resposta": "Argentina",
    "fonte": [
      "https://en.wikipedia.org/wiki/L%C3%A1szl%C3%B3_B%C3%ADr%C3%B3",
      "https://en.wikipedia.org/wiki/Ballpoint_pen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/L%C3%A1szl%C3%B3_B%C3%ADr%C3%B3",
        "situacao": "ok",
        "texto": "László József Bíró (Hungarian: [ˈlaːsloː ˈjoːʒɛf ˈbiːroː]; né Schweiger; 29 September 1899 – 24 October 1985), Hispanicized as Ladislao José Biro, was an Argentine, Hungary-born inventor who patented the first commercially successful modern ballpoint pen. The first ballpoint pen had been invented roughly 50 years earlier by John J. Loud, but it was not a commercial success.\n[…]\nDuring World War II, Bíró fled the Nazis with his brother. They relocated to Argentina in 1943 at the invitation of the President of Argentina, Agustin Justo, who met the inventor in Yugoslavia while on vacation, noticing the unusual writing implement.\n[…]\nOn 17 June 1943, the brothers filed another patent, issued in the US as \"US Patent 2,390,636 Writing Instrument\" and formed Biro Pens of Argentina (in Argentina and Uruguay the ballpoint pen is known as birome, a portmanteau of the brothers' surname with that of their business partner, Juan Jorge Meyne). This new design was supposedly licensed for production in the United Kingdom for supply to Royal Air Force aircrew.\n[…]\nIn 1931, Bíró married to Erzsébet Schick in Terézváros. In 1938, Bíró and his wife converted to Lutheranism.\n[…]\nLászló Bíró died in Buenos Aires, Argentina, on October 24, 1985.\n[…]\nArgentina's Inventors' Day is celebrated on Bíró's birthday, 29 September. On 29 September 2016, the 117th anniversary of his birth, Google commemorated Bíró with a Google Doodle for \"his relentless, forward-thinking spirit\".\n[…]\nHargittai, Istvan; Hargittai, Balazs (2023). \"Ladislao José Biro\". Brilliance in Exile: The Diaspora of Hungarian Scientists from John von Neumann to Katalin Karikó. Central European University Press. pp. 154–156. doi:10.7829/j.ctv2vdbvm7. ISBN 978-963-386-625-2. JSTOR 10.7829/j.ctv2vdbvm7. Retrieved 25 December 2024."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ballpoint_pen",
        "situacao": "ok",
        "texto": "A ballpoint pen is a pen that dispenses ink (usually in paste form) over a hard ball rolling in its point. The materials commonly used are steel, brass, or tungsten carbide. The design was conceived and developed as a cleaner and more reliable alternative to dip pens and fountain pens. It is now the world's most-used writing instrument, with millions manufactured and sold daily. It has influenced \n[…]\nLászló Bíró, a Hungarian newspaper editor (later a naturalized Argentine) frustrated by the amount of time that he wasted filling up fountain pens and cleaning up smudged pages, noticed that inks used in newspaper printing dried quickly, leaving the paper dry and smudge-free. He decided to create a pen using the same type of ink. Bíró enlisted the help of his brother György, a dentist with useful knowledge of chemistry, to develop viscous ink formulae for new ballpoint designs.\n[…]\nDuring the same period, American entrepreneur Milton Reynolds came across a Birome ballpoint pen during a business trip to Buenos Aires, Argentina. Recognizing commercial potential, he purchased several ballpoint samples, returned to the United States, and founded the Reynolds International Pen Company. Reynolds bypassed the Birome patent with sufficient design alterations to obtain an American patent, beating Eversharp and other competitors to introduce the pen to the US market.\n[…]\nMarcel Bich also introduced a ballpoint pen to the American marketplace in the 1950s, licensed from Bíró and based on the Argentine designs. Bich shortened his name to Bic in 1953, forming the ballpoint brand Bic now recognized globally. Bic pens struggled until the company launched its \"Writes First Time, Every Time!\" advertising campaign in the 1960s. Competition during this era forced unit prices to drop considerably.\n[…]\nLaszlo Biro on Jewish.hu's list of famous Hungarians (archived 22 May 2013)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%A1szl%C3%B3_B%C3%ADr%C3%B3",
        "situacao": "ok",
        "texto": "László József Bíró (em húngaro:  Bíró László József; em castelhano:  Ladislao José Biro) (Budapeste, 29 de setembro de 1899 – Buenos Aires, 24 de outubro de 1985) foi um inventor húngaro naturalizado argentino. Era judeu, tal como a restante família.\n[…]\nInventou a moderna caneta esferográfica.\n[…]\nBíró nasceu em Budapeste, Áustria-Hungria, em 1899. Apresentou sua primeira versão da caneta esferográfica na Feira Internacional de Budapeste, em 1931. Quando trabalhava como jornalista na Hungria, percebeu que a tinta usada na impressão de jornais secava rapidamente, deixando a folha impressa seca e sem manchas. Tentou usar a mesma tinta em uma caneta-tinteiro, percebendo que a tinta não fluía para a ponta da mesma, pois era muito viscosa.\n[…]\nTrabalhando juntamente com seu irmão Georg, um químico, desenvolveu uma nova ponta, consistindo de uma esfera que girava livremente na ponta da caneta, e assim que a mesma fosse colocada na posição de escrever a esfera era molhada na tinta de um cartucho, esfera esta que rotacionada devido ao atrito com uma folha de papel deixava uma trilha de tinta. Biró patenteou a invenção em Paris, em 1938.\n[…]\nBrief biography of Bíró by Budapest Pocket Guide\n[…]\nQuem foi Ladislao José Biro e porque a Google lhe dedica um doodle",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Lápis",
      "descricao": "Instrumento de escrita com miolo de grafite e argila envolto em madeira."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Muita gente fala em chumbo, mas o miolo de um lápis comum é feito de grafite misturado com o quê?",
    "resposta": "Argila",
    "distratores": [
      "Chumbo",
      "Cera de abelha",
      "Carvão vegetal"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pencil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pencil",
        "situacao": "ok",
        "texto": "A pencil ( ) is a writing or drawing implement with a solid pigment core in a protective casing that reduces the risk of core breakage and keeps it from marking the user's hand."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%A1pis",
        "situacao": "ok",
        "texto": "Um lápis é um instrumento de escrever, pintar, desenhar e das mais variadas coisas, concebido para marcar, sublinhar e riscar. A acepção mais comum do termo atrela-se a um instrumento utilizado para escrever,[carece de fontes]? ou mesmo riscar sobre um papel; usualmente construído através de um estilete de grafite revestido de madeira, o tradicional lápis de escrever preto ou grafite (cor mais cin\n[…]\nOs primeiros lápis livres de chumbo datam do século XVI. Neste século foi descoberta, perto de Borrowdale, Cúmbria, Inglaterra, uma grande jazida de um material bastante puro e sólido, hoje reconhecido como o estado alotrópico mais comum do carbono, a grafite. À época nomeava-se tal elemento \"chumbo negro\" em alusão direta ao elemento concorrente e suas aplicações; e os habitantes locais descobriram rapidamente que o \"chumbo negro\" era muito útil para marcarem-se as ovelhas.\n[…]\nUm lápis de mais de 3 séculos foi encontrado em meio às colunas do sótão de uma casa construída no século XVII. O lápis foi provavelmente esquecido por um carpinteiro por acidente. Este lápis é feito de 2 pedaços de madeira de tília, colados com uma barra de grafite entre elas e apresenta sinais de uso que atestam sua idade. O mais antigo exemplo de lápis de madeira do mundo, hoje é cuidadosamente preservado pelo acervo Faber-Castell localizado na Alemanha.\n[…]\nEm 2007, para celebrar o 76º aniversário de Sri Chinmoy, Furman decidiu criar algo gigantesco e simbólico: um lápis monumental, representando a criatividade, a educação e o potencial humano .O projeto foi desenvolvido por voluntários do Sri Chinmoy Centre, em Nova York.Foram necessários meses de planejamento e materiais especiais para garantir que o lápis fosse fiel às proporções de um lápis real — apenas muito maior. Feito com madeira sólida ao redor de um miolo de grafite gigante.\n[…]\nDuas instituições registram o que consideram o menor lápis do mundo:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Cai Lun",
      "descricao": "Funcionário da corte chinesa da dinastia Han, tradicionalmente associado à criação do papel por volta do ano 105."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Por volta do ano cento e cinco, o chinês Cai Lun fazia papel com casca de árvore, cânhamo, trapos e restos de que objeto?",
    "resposta": "Redes de pesca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cai_Lun"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cai_Lun",
        "situacao": "ok",
        "texto": "Cai Lun (Chinese: 蔡伦; courtesy name: Jingzhong (敬仲); c. 50–62 – 121 CE), formerly romanized as Ts'ai Lun, was a Chinese eunuch court official of the Eastern Han dynasty. He occupies a pivotal place in the history of paper due to his addition of pulp via tree bark and hemp ends which resulted in the large-scale manufacture and worldwide spread of paper.\n[…]\nAccording to legend, the Buddhist monk Damjing brought the process to Japan, though this is unconfirmed. Damjing occupies a similar patron saint position in Japan that Cai does in China. By the 600s the process appeared in Turkestan, Korea, and India, while Chinese prisoners from the Battle of Talas spread the knowledge to Arabs in the Abbasid Caliphate.\n[…]\nUnlike many Chinese inventions that were created independently in Western Europe, the modern papermaking process was a wholly Chinese product and gradually spread via the Arabs to Europe, where it also saw widespread manufacturing by the 12th century. On 2 August 2010, the International Astronomical Union honored Cai's legacy by naming a crater on the Moon after him.\n[…]\nThen, their neighbors checked in on them, and Hui sprung out of the coffin, explaining that the burned money was transferred to her in the afterlife, with which she paid ghosts to return her from the dead. Believing the story, the neighbors quickly purchased large amounts of paper for their own use. While mostly a fictitious story, intense wailing and burning offerings are commonplace in Chinese culture.\n[…]\nOf those who originated China's Four Great Inventions of the ancient world—the compass, gunpowder, papermaking and printing—the only early figure known is one of papermaking, Cai Lun. Additionally, in comparison to other Chinese inventions such as the writing brush and ink, the development of paper is the best documented in literary sources."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cai_Lun",
        "situacao": "ok",
        "texto": "Cai Lun foi um alto funcionário da corte imperial, na dinastia Han, que inventou o papel a partir de casca de amoreira e fibra de bambu, no ano 105.\n[…]\nNa China é tradicionalmente considerado o inventor do papel, pois sob sua administração foi aperfeiçoada a técnica de fabricação do material utilizado para a escrita de documentos, que passou a ter propriedades semelhantes às do papel atual, bem diferentes do papiro e do pergaminho usados ​​antigamente.\n[…]\nEmbora as primeiras formas de papel existissem na China a partir do século II a.C., ele foi responsável pela primeira melhoria e padronização significativa da fabricação de papel, adicionando novos materiais essenciais à sua composição. Segundo as crônicas históricas chinesas, a invenção do papel teria ocorrido no ano 105 d.C.\n[…]\nConsidera-se que as melhorias de Cai na fabricação de papel tiveram um enorme impacto na história humana, e daqueles que criaram as Quatro Grandes Invenções da China - a bússola, a pólvora, a fabricação de papel e a impressão - Cai é o único inventor cujo nome é conhecido. Embora na China ele seja reverenciado no culto aos ancestrais, deificado como o deus da fabricação de papel e apareça no folclore chinês, ele é praticamente desconhecido fora do leste da Ásia.\n[…]\nSua cidade natal em Leiyang continua sendo um centro ativo de produção de papel.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Lâmpada incandescente",
      "descricao": "Lâmpada elétrica que produz luz aquecendo um filamento, desenvolvida por Edison e Swan no fim do século dezenove."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Por volta de 1880, Thomas Edison fez suas lâmpadas durarem muito mais com um filamento feito de que planta carbonizada?",
    "resposta": "Bambu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Incandescent_light_bulb"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Incandescent_light_bulb",
        "situacao": "ok",
        "texto": "An incandescent light bulb, also known as an incandescent lamp or incandescent light globe, is an electric light that produces illumination by Joule heating a filament until it glows. The filament is enclosed in a glass bulb that is either evacuated or filled with inert gas to protect the filament from oxidation. Electric current is supplied to the filament by terminals or wires embedded in the gl\n[…]\nIn 1845, American John W. Starr patented an incandescent light bulb using carbon filaments. His invention was never produced commercially.\n[…]\nThomas Edison began serious research into developing a practical incandescent lamp in 1878. Edison filed his first patent application for \"Improvement in Electric Lights\" on 14 October 1878. After many experiments, first with carbon in the early 1880s and then with platinum and other metals, in the end Edison returned to a carbon filament. The first successful test was on 22 October 1879, and lasted 13.5 hours.\n[…]\nOn 4 March 1880, just five months after Edison's light bulb, Alessandro Cruto developed a process to create thin carbon filaments by heating thin platinum filaments in the presence of gaseous ethyl alcohol to coat them with pure graphite, and then sublimating the platinum at high temperatures. In 1882 at the Munich Electrical Exhibition in Bavaria, Germany Cruto demonstrated bulbs that were more efficient than Edison's and produced a better, whiter light.\n[…]\nIn 1893, Heinrich Göbel claimed he had designed the first incandescent light bulb in 1854, with a thin carbonized bamboo filament of high resistance, platinum lead-in wires in an all-glass envelope, and a high vacuum. Judges of four courts raised doubts about the alleged Göbel anticipation, but there was never a decision in a final hearing due to the expiration of Edison's patent. Research work published in 2007 concluded that the story of the Göbel lamps in the 1850s is fictitious."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%A2mpada_incandescente",
        "situacao": "ok",
        "texto": "A lâmpada incandescente é um dispositivo elétrico que transforma energia elétrica em energia luminosa e energia térmica através do efeito Joule. Dada a sua simplicidade, foi o primeiro dispositivo prático que permitiu utilizar eletricidade para iluminação, sendo durante as primeiras décadas de uso comercial da energia elétrica a principal forma de consumo daquela forma de energia.\n[…]\nOutros vinte e um inventores construíram lâmpadas incandescentes antes de Thomas Edison, que foi o primeiro a construir a primeira lâmpada incandescente comercializável em 1879, utilizando uma haste de carvão (carbono) muito fina que, aquecida acima de aproximadamente 900 K, passa a emitir luz, inicialmente bastante avermelhada e fraca, passando ao alaranjado e alcançando o amarelo, com uma intensidade luminosa bem maior, ao atingir sua temperatura final, próximo do ponto de fusão do carbono, que é de aproximadamente 3 800 K.\n[…]\nA lâmpada de filamento de bambu carbonizado foi a que teve melhor rendimento e durabilidade, sendo em seguida substituída pela de celulose, e finalmente a conhecida até hoje com filamento de tungsténio cuja temperatura de trabalho chega a 3 000 °C.\n[…]\nPor aproximadamente 26 anos, todas as lâmpadas incandescentes possuíam filamentos feitos de celulose carbonizada (papel, algodão ou bambu). As primeiras lâmpadas comerciais de Edison tinham os filamentos feitos de papel carbonizado que era muito frágil, mas em 1880 sua fábrica utilizava o bambu carbonizado, que produzia filamentos duros e fortes.\n[…]\nO Tungstênio leva vantagem sobre o carbono também no que diz respeito a resistência mecânica e ductilidade, o que permite a construção de filamentos mais finos, resistentes e baratos. Praticamente todas as lâmpadas incandescentes atuais utilizam filamentos de tungstênio trefilado e enrolados em forma de espiral, para diminuir as perdas de calor.\n[…]\nLâmpada photoflood",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Goma de mascar",
      "descricao": "Guloseima para mastigar sem engolir, cuja versão moderna surgiu nos Estados Unidos no século dezenove."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No século dezenove, a goma de mascar moderna foi feita nos Estados Unidos com o chicle, a seiva de que árvore das Américas?",
    "resposta": "Sapotizeiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chicle",
      "https://en.wikipedia.org/wiki/Chewing_gum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chicle",
        "situacao": "ok",
        "texto": "Chicle () is a latex traditionally used in making chewing gum and other products. It is collected from several species of Mesoamerican trees in the genus Manilkara, including M. zapota, M. chicle, M. staminodella, and M. bidentata.\n[…]\nThe word is used in the Americas and Spain to refer to chewing gum, chicle being a common term for it in Spanish and chiclete being the Portuguese term (both in Brazil and in parts of Portugal; other areas also use the term chicla). The word has also been exported to other languages such as Greek, which refers to chewing gum as τσίχλα (tsichla).\n[…]\nBoth the Aztecs and Maya traditionally chewed chicle. It was chewed as a way to stave off hunger, freshen breath, and keep teeth clean. Chicle was also used by the Maya as a filling for tooth cavities.\n[…]\nThe American Chicle Company, incorporated in June 1899, was the first prominent commercial user of this ingredient in the production of chewing gum. Its brand name, Chiclets, is derived from the word chicle.\n[…]\nIn response to a land reform law passed in Guatemala in 1952 which ended feudal work relations and expropriated unused lands and sold them to the indigenous and peasants, the William Wrigley Company discontinued buying Guatemalan chicle. Since it was the sole buyer of Guatemalan chicle, the government was pushed to create a massive aid program for growers.\n[…]\nBy the 1960s, most chewing gum companies had switched from using chicle to polybutadiene, which was cheaper to manufacture. Only a handful of small gum companies still use chicle, including Gud Gum, Glee Gum, Simply Gum, and Tree Hugger Gum."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chewing_gum",
        "situacao": "ok",
        "texto": "Chewing gum is a soft, cohesive substance designed to be chewed without being swallowed. Modern chewing gum is composed of gum base, sweeteners, softeners/plasticizers, flavors, colors, and, typically, a hard or powdered polyol coating. Its texture is reminiscent of rubber because of the physical-chemical properties of its polymer, plasticizer, and resin components, which contribute to its elastic\n[…]\nAlthough chewing gum can be traced back to civilizations worldwide, the modernization and commercialization of this product mainly took place in the United States. The American Indians chewed resin made from the sap of spruce trees. The New England settlers picked up this practice, and in 1848, John B. Curtis developed and sold the first commercial chewing gum called The State of Maine Pure Spruce Gum.\n[…]\nModern chewing gum was first developed in the 1860s when chicle was brought from Mexico by the former president, General Antonio Lopez de Santa Anna, to New York, where he gave it to Thomas Adams for use as a rubber substitute. Chicle did not succeed as a replacement for rubber, but as a gum cut into strips and marketed as Adams New York Chewing Gum in 1871.\n[…]\nBlack Jack (1884), which is flavored with licorice, Chiclets (1899), and Wrigley's Spearmint Gum were early popular gums that quickly dominated the market and are all still around today. Chewing gum gained worldwide popularity through American GIs in WWII, who were supplied chewing gum as a ration and traded it with locals. Synthetic gums were first introduced to the U.S. after chicle no longer satisfied the needs of making good chewing gum.\n[…]\nTable 2: Common ingredients in the formulation of modern chewing gum\n[…]\nHowever, likely as a consequence of Singapore's ban, Singapore's pavements are, perhaps uniquely amongst modern cities, free of gum.\n[…]\nList of chewing gum brands\n[…]\n\"Chewing-Gum\" . New International Encyclopedia. 1905."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chicle",
        "situacao": "ok",
        "texto": "Chicle (do náuatle tzictli) designa o látex ou seiva da árvore Sapota zapotilla, originária da América Central e América do Sul, conhecida no Brasil como sapoti, com o qual se fazia originariamente a goma de mascar (chiclete).\n[…]\nO sapotizeiro também produz uma fruta comestível do tamanho de uma ameixa, com uma polpa marrom translúcida.\n[…]\nO chicle é extraído dessa árvore do mesmo modo que o látex da borracha, ou seja, são feitos com um canivete, uma série de cortes em \"V\" no seu tronco, um acima do outro mas alinhados por um corte ao prumo (os cortes anteriores já cicatrizados são escarificados).\n[…]\nA árvore exsuda por estes cortes pequenas gotas de seiva que descem pelos cortes e se depositam em pequenos recipientes fixados no tronco, logo abaixo. O \"chiclero\" faz esta sangria em uma porção de árvores pela manhã, fixando nelas os recipientes, que à tarde coleta, reunindo a seiva bruta.\n[…]\nA seiva já densa pela oxidação é então filtrada e depois fervida para alcançar a densidade correta.\n[…]\nAtualmente há outras formas de se produzir artificialmente o chicle, a partir da seiva de outras árvores e até mesmo a partir de derivado de petróleo. Às respectivas massas, então, são adicionados corantes, fragrâncias e essências de sabor.\n[…]\nO hábito de mascar chicle remonta às culturas pré-colombiana dos astecas e maias e os colonos europeus logo o adquiriram em virtude do agradável sabor e aroma característicos e do alto grau de açúcar que a seiva contém.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Telescópio newtoniano",
      "descricao": "Telescópio refletor construído por Isaac Newton em 1668, que usa um espelho côncavo no lugar de lentes."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1668, Isaac Newton construiu um telescópio que trocava as lentes por que peça curva para captar a luz?",
    "resposta": "Espelho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Newtonian_telescope"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Newtonian_telescope",
        "situacao": "ok",
        "texto": "The Newtonian telescope, also called the Newtonian reflector or just a Newtonian, is a type of reflecting telescope invented by the English scientist Sir Isaac Newton, using a concave primary mirror and a flat diagonal secondary mirror. Newton's first reflecting telescope was completed in 1668 and is the earliest known functional reflecting telescope. The Newtonian telescope's simple design has ma\n[…]\nIn late 1668 Isaac Newton built his first reflecting telescope. He chose an alloy (speculum metal) of tin and copper as the most suitable material for his objective  mirror. He later devised means for shaping and grinding the mirror and may have been the first to use a pitch lap to polish the optical surface. He chose a spherical shape for his mirror instead of a parabola to simplify construction; even though it would introduce spherical aberration, it would still correct chromatic aberration.\n[…]\nHe found that the telescope worked without colour distortion and that he could see the four Galilean moons of Jupiter and the crescent phase of the planet Venus with it. Newton's friend Isaac Barrow showed a second telescope to a small group from the Royal Society of London at the end of 1671. They were so impressed with it that they demonstrated it to Charles II in January 1672. Newton was admitted as a fellow of the society in the same year.\n[…]\nLike Gregory before him, Newton found it hard to construct an effective reflector. It was difficult to grind the speculum metal to a regular curvature. The surface also tarnished rapidly; the consequent low reflectivity of the mirror and also its small size meant that the view through the telescope was very dim compared to contemporary refractors. Because of these difficulties in construction, the Newtonian reflecting telescope was  initially not widely adopted.\n[…]\nDobsonian telescope - type of portable Newtonian telescope\n[…]\nSchmidt–Newton telescope"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Telesc%C3%B3pio_newtoniano",
        "situacao": "ok",
        "texto": "O telescópio newtoniano, também chamado de refletor newtoniano, é um tipo de telescópio refletor inventado pelo cientista inglês Sir Isaac Newton, usando um espelho primário côncavo e um espelho secundário diagonal plano. O primeiro telescópio refletor de Newton foi concluído em 1668 e é o mais antigo telescópio refletor funcional conhecido. O design simples do telescópio newtoniano o tornou muito\n[…]\nSe isso fosse verdade, então a aberração cromática poderia ser eliminada construindo um telescópio que não usasse uma lente – um telescópio refletor.No final de 1668 Isaac Newton construiu seu primeiro telescópio refletor. Ele escolheu uma liga de estanho e cobre como o material mais adequado para seu espelho objetivo. Mais tarde, ele concebeu meios para moldar e retificar o espelho e pode ter sido o primeiro a usar um pitch lap para polir a superfície óptica.\n[…]\nEle escolheu uma forma esférica para seu espelho em vez de uma parábola para simplificar a construção; mesmo que introduzisse a aberração esférica, ainda corrigiria a aberração cromática. Ele acrescentou ao seu refletor o que é a marca registrada do design de um telescópio newtoniano, um espelho secundário montado diagonalmente próximo ao foco do espelho primário para refletir a imagem em um ângulo de 90° em relação a uma ocular montada na lateral do telescópio.\n[…]\nComo Gregory antes dele, Newton achou difícil construir um refletor eficaz. Era difícil moer o metal do espéculo até uma curvatura regular. A superfície também escureceu rapidamente; a conseqüente baixa refletividade do espelho e também seu pequeno tamanho significavam que a visão através do telescópio era muito fraca em comparação com os refratores contemporâneos. Devido a essas dificuldades na construção, o telescópio refletor newtoniano inicialmente não foi amplamente adotado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Termômetro de mercúrio",
      "descricao": "Termômetro de vidro com mercúrio, criado pelo físico Daniel Gabriel Fahrenheit em 1714."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1714, o físico Daniel Fahrenheit construiu um termômetro muito mais confiável usando que metal líquido?",
    "resposta": "Mercúrio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Daniel_Gabriel_Fahrenheit",
      "https://en.wikipedia.org/wiki/Mercury-in-glass_thermometer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Daniel_Gabriel_Fahrenheit",
        "situacao": "ok",
        "texto": "Daniel Gabriel Fahrenheit FRS (24 May 1686 – 16 September 1736) was a physicist, inventor, and scientific instrument maker. He was born in Poland to a family of German origin, although he spent much of his life in the Dutch Republic. Fahrenheit significantly improved the design and manufacture of thermometers; his were accurate and consistent enough that different observers, each with their own Fa\n[…]\nFahrenheit began experimenting with mercury thermometers in 1713. Also by this time, Fahrenheit was using a modified version of Rømer's scale for his thermometers which would later evolve into his own Fahrenheit scale. In 1714, Fahrenheit left Danzig for Berlin and Dresden to work closely with the glass-blowers there.\n[…]\nIn 1717 or 1718, Fahrenheit returned to Amsterdam and began selling barometers, areometers, and his mercury and alcohol-based thermometers commercially. By 1721, Fahrenheit had perfected the process of crafting and standardizing his thermometers. The superiority of his mercury thermometers over alcohol-based thermometers made them very popular, leading to the widespread adoption of his Fahrenheit scale, the measurement system he developed and used for his thermometers.\n[…]\nFahrenheit came up with the idea that mercury boils around 300 degrees on this temperature scale. Work by others showed that water boils about 180 degrees above its freezing point. The Fahrenheit scale later was redefined to make the freezing-to-boiling interval exactly 180 degrees, a convenient value as 180 is a highly composite number, meaning that it is evenly divisible into many fractions.\n[…]\nFahrenheit hydrometer\n[…]\nFahrenheit, D. G. (1724). \"Experimenta circa gradum caloris liquorum nonnullorum ebullientium instituta (Experiments done on the degree of heat of a few boiling liquids)\". Philosophical Transactions of the Royal Society. 33 (381): 1–3. doi:10.1098/rstl.1724.0002."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mercury-in-glass_thermometer",
        "situacao": "ok",
        "texto": "The mercury-in-glass or mercury thermometer is a thermometer that uses the thermal expansion and contraction of liquid mercury to indicate the temperature.\n[…]\nIn 1713, Daniel Gabriel Fahrenheit began experimenting with mercury thermometers. By 1717, he was making them commercially. The superiority of his mercury thermometers over alcohol-based thermometers made them very popular, leading to the widespread adoption of his Fahrenheit scale, the measurement system he developed and used for his thermometers.\n[…]\nMercury thermometers cover a wide temperature range from −37 to 356 °C (−35 to 673 °F); the instrument's upper temperature range may be extended through the introduction of an inert gas such as nitrogen. This introduction of an inert gas increases the pressure on the liquid mercury and therefore its boiling point is increased, this in combination with replacing the Pyrex glass with fused quartz allows the upper temperature range to be extended to 800 °C (1,470 °F).\n[…]\nAs of 2026, many mercury-in-glass thermometers are used in meteorology; however, they are becoming increasingly rare for other uses, as many countries banned them for medical use due to the toxicity of mercury. Some manufacturers use galinstan, a liquid alloy of gallium, indium, and tin, or propylene carbonate, as a replacement for mercury.\n[…]\nThe HPA had, in 2007, released a guide to dealing with small spills of mercury.\n[…]\nMercury switch, an electrical circuit, on-off switch using the element mercury\n[…]\nMercury swivel commutator, an electrical circuit, current-reversing switch using the element mercury\n[…]\nMercury vapour turbine, a rotary engine to produce electricity from mercury vapor"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gabriel_Fahrenheit",
        "situacao": "ok",
        "texto": "Daniel Gabriel Fahrenheit FRS (24 de maio de 1686 – 16 de setembro de 1736) foi um físico, inventor e fabricante de instrumentos científicos. Nasceu na Polônia em uma família de origem alemã, embora tenha passado a maior parte de sua vida nos Países Baixos.\n[…]\nFahrenheit melhorou significativamente o design e a fabricação de termômetros; os seus eram precisos e consistentes o suficiente para que diferentes observadores, cada um com seu próprio termômetro Fahrenheit, pudessem comparar de forma confiável as medições de temperatura entre si. A Fahrenheit também é creditada a produção dos primeiros termômetros de mercúrio em vidro bem-sucedidos, que eram mais precisos do que os termômetros de álcool de sua época e de design geralmente superior.\n[…]\nFahrenheit começou a experimentar com termômetros de mercúrio em 1713. Também nessa época, Fahrenheit usava uma versão modificada da escala de Rømer para seus termômetros, que mais tarde evoluiria para sua própria escala Fahrenheit. Em 1714, Fahrenheit deixou Danzig para Berlim e Dresden para trabalhar em estreita colaboração com os sopradores de vidro locais.\n[…]\nEm 1717 ou 1718, Fahrenheit retornou a Amsterdã e começou a vender comercialmente barômetros, areômetros e seus termômetros de mercúrio e álcool. Em 1721, Fahrenheit havia aperfeiçoado o processo de fabricação e padronização de seus termômetros. A superioridade de seus termômetros de mercúrio sobre os termômetros de álcool os tornou muito populares, levando à ampla adoção de sua escala Fahrenheit, o sistema de medição que ele desenvolveu e usou para seus termômetros.\n[…]\n«Carta de Daniel Gabriel Fahrenheit para Carl Linnaeus, 7 de maio de 1736» 🔗 (em alemão)\n[…]\nFahrenheit's papers in the Royal Society Publishing",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Lâmpada de Davy",
      "descricao": "Lamparina de segurança para minas de carvão, criada por Humphry Davy em 1815."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1815, Humphry Davy criou uma lamparina segura para minas de carvão, em que a chama ficava envolta por quê?",
    "resposta": "Uma tela de arame",
    "fonte": [
      "https://en.wikipedia.org/wiki/Davy_lamp"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Davy_lamp",
        "situacao": "ok",
        "texto": "The Davy lamp is a safety lamp used in flammable atmospheres, invented in 1815 by Sir Humphry Davy. It consists of a wick lamp with the flame enclosed inside a mesh screen. It was created for use in coal mines, to reduce the danger of explosions due to the presence of methane and other flammable gases, called firedamp or minedamp.\n[…]\nThe first trial of a Davy lamp with a wire sieve was at Hebburn Colliery on 9 January 1816. A letter from Davy (which he intended to be kept private) describing his findings and various suggestions for a safety lamp was made public at a meeting in Newcastle on 3 November 1815, and a paper describing the lamp was formally presented at a Royal Society meeting in London on 9 November. For it, Davy was awarded the society's Rumford Medal.\n[…]\nIn 2016, the Royal Institution of Great Britain, where the Davy lamp prototype is displayed, decided to have the invention 3D scanned, reverse engineered and presented to the museum visitors in a more accessible digital format via a virtual reality cabinet. At first sight it appears to be a traditional display cabinet but has a touch screen with various options for visitors to view and reference the virtual exhibits inside.\n[…]\nJames, Frank A.J.L. (2005). \"How Big is a Hole?: The Problems of the Practical Application of Science in the Invention of the Miners' Safety Lamp by Humphry Davy and George Stephenson in Late Regency England\" (PDF). Transactions of the Newcomen Society. 75 (2): 175–227. doi:10.1179/tns.2005.010. S2CID 111936569. Archived (PDF) from the original on 27 September 2019.\n[…]\nPopular Science video showing an experiment that demonstrates the principle of the Davy lamp\n[…]\nHumphry Davy Brief bio at Spartacus Educational\n[…]\nMartyn Poliakoff, Martyn Poliakoff. \"Davy's Lamp\". The Periodic Table of Videos. University of Nottingham."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lanterna_Davy",
        "situacao": "ok",
        "texto": "A lanterna ou lâmpada Davy é uma lanterna de segurança inventada pelo químico inglês Humphry Davy para evitar as explosões causadas pela ignição do metano em minas de carvão.\n[…]\nApresentada à Real Sociedade de Londres em 1815, a lanterna ou candeeiro de petróleo tem a chama protegida por uma fina tela metálica, que impede que a chama se propague.\n[…]\nUma versão moderna desta lanterna é usada para o transporte da Chama Olímpica.\n[…]\nO primeiro teste de uma lâmpada Davy com uma peneira de arame foi em minas de Hebburn Colliery em 9 de janeiro de 1816. Uma carta de Davy (que ele pretendia manter em sigilo) descrevendo suas descobertas e várias sugestões para uma lâmpada de segurança foi tornada pública em uma reunião em Newcastle em 3 de novembro de 1815, e um artigo descrevendo a lâmpada foi formalmente apresentado em uma reunião da Royal Society em Londres em 9 de novembro.\n[…]\nPor isso, Davy foi premiado com a Medalha Rumford da Sociedade. A lâmpada de Davy era diferente da de Stephenson porque a chama era cercada por uma tela de gaze, enquanto o protótipo de lâmpada de Stephenson tinha uma placa perfurada contida em um cilindro de vidro (um design mencionado no artigo da Royal Society de Davy como alternativa à sua solução preferida).\n[…]\nA lâmpada consiste em uma lâmpada de pavio com a chama dentro de uma tela de malha. A tela atua como um supressor de chamas; o ar (e qualquer gas presente) pode passar pela malha livremente o suficiente para suportar a combustão, mas os orifícios são muito finos para permitir que uma chama se propague por eles e acenda qualquer gas fora da malha. Originalmente, queimava um óleo vegetal pesado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Dinamite",
      "descricao": "Explosivo à base de nitroglicerina patenteado por Alfred Nobel em 1867."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Para tornar a nitroglicerina segura, Alfred Nobel a misturou com uma terra porosa formada por restos de algas microscópicas. Que terra?",
    "resposta": "Terra de diatomáceas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dynamite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dynamite",
        "situacao": "ok",
        "texto": "Dynamite is an explosive made of nitroglycerin, sorbents (such as powdered shells or clay), and stabilizers. It was invented by Swedish chemist Alfred Nobel in 1866 and patented the following year.\n[…]\nIn 1863, Nobel performed his first successful detonation of pure nitroglycerin, using a blasting cap made of a copper percussion cap and mercury fulminate. In 1864, Alfred Nobel filed patents for both the blasting cap and his method of synthesizing nitroglycerin, using sulfuric acid, nitric acid, and glycerin. On 3 September 1864, while experimenting with nitroglycerin, Emil and several others were killed in an explosion at the factory at Immanuel Nobel's estate at Heleneborg.\n[…]\nAfter this, Alfred founded the company Nitroglycerin Aktiebolaget in Vinterviken to continue work in a more isolated area and the following year moved to Germany, where he founded another company, Dynamit Nobel.\n[…]\nFinally, he tried diatomaceous earth, which is fossilized algae, that he brought from the Elbe River near his factory in Hamburg, which successfully stabilized the nitroglycerin into a portable explosive.\n[…]\nNobel obtained patents for his inventions in England on 7 May 1867 and in Sweden on 19 October 1867. After its introduction, dynamite rapidly gained wide-scale use as a safe alternative to black powder and nitroglycerin. Nobel tightly controlled the patents, and unlicensed duplicating companies were quickly shut down. A few American businessmen got around the patent by using absorbents other than diatomaceous earth, such as resin.\n[…]\nNobel Prize\n[…]\nAlfred Nobel’s dynamite companies\n[…]\nUS patent 78317, Alfred Nobel, \"Improved explosive compound\", published 26 May 1868, issued 26 May 1868  (Dynamite US patent)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dinamite",
        "situacao": "ok",
        "texto": "Dinamite é um artefato explosivo à base de nitroglicerina, misturado com terra diatomácea (dióxido de silício em pó) ou com outro material absorvente, como serragem, argila, polpa de celulose ou pó de conchas, mais seguro que a pólvora e que a própria nitroglicerina em seu estado puro. Dinamites usando materiais orgânicos como a serragem são menos estáveis, e seu uso está sendo gradualmente descon\n[…]\nOutra forma de dinamite consiste na nitroglicerina dissolvida em nitrocelulose e em uma pequena quantidade de cetona. Esta forma é similar à cordite e muito mais segura que a mistura simples de nitroglicerina com terra diatomácea. Há também a dinamite militar, que possui maior estabilidade por evitar o uso de nitroglicerina, priorizando o uso de substâncias químicas mais estáveis.\n[…]\nFinalmente, ele experimentou terra diatomácea, algas fossilizadas, que trouxe do rio Elba, perto de sua fábrica em Hamburgo, que estabilizou com sucesso a nitroglicerina em um explosivo portátil.\n[…]\nNobel obteve patentes para suas invenções na Inglaterra em 7 de maio de 1867 e na Suécia em 19 de outubro de 1867. Após sua introdução, a dinamite rapidamente ganhou uso em larga escala como uma alternativa segura ao pó preto e nitroglicerina. A Nobel controlou rigidamente as patentes, e empresas de duplicação não licenciadas foram fechadas rapidamente. Alguns empresários americanos, no entanto, contornaram a patente usando absorventes diferentes da terra diatomácea, como a resina.\n[…]\nA dinamite costumava ser feita pela mistura de nitroglicerina e terra diatomácea com alto teor de dióxido de silício. Este último agia como uma espécie de esponja, absorvendo e estabilizando a nitroglicerina, tornando seu uso como explosivo mais seguro e prático. Ele costumava ser vendido na forma de tubos de papelão cheios do composto, medindo entre 10 cm e 15 cm de comprimento por 2,5 cm de diâmetro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Quatro Grandes Invenções",
      "descricao": "Conjunto de invenções da China antiga celebradas na cultura chinesa: bússola, pólvora, papel e impressão."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "As quatro grandes invenções da China antiga são a bússola, a pólvora, a impressão e qual outra?",
    "resposta": "Papel",
    "distratores": [
      "Porcelana",
      "Seda",
      "Ábaco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Four_Great_Inventions"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Four_Great_Inventions",
        "situacao": "ok",
        "texto": "The Four Great Inventions are inventions from imperial China that are celebrated in Chinese culture for their historical significance and as symbols of ancient China's advanced science and technology. They are the compass, gunpowder, papermaking and printing.\n[…]\nThe four inventions do not necessarily summarize the achievements of science and technology in ancient China. The four inventions were regarded as the most important Chinese achievements in science and technology, simply because they had a prominent position in the exchanges between the East and the West and acted as a powerful dynamic in the development of capitalism in Europe.\n[…]\nAs a matter of fact, ancient Chinese scored much more than the four major inventions: in farming, iron and copper metallurgy, exploitation of coal and petroleum, machinery, medicine, astronomy, mathematics, porcelain, silk, and wine making. The numerous inventions and discoveries greatly advanced China's productive forces and social life. Many are at least as important as the four inventions, and some are even greater than the four.\n[…]\nIn his political discourse, General Secretary of the Chinese Communist Party Xi Jinping often cites the Four Great Inventions as a source of national pride for China and its historic contributions to humanity.\n[…]\nIn 2017, the term \"four great new inventions\" became popularized in China in reference to high-speed rail, mobile payment, e-commerce, and bike-sharing. The term is not intended strictly, as although these innovations have been exceptionally developed in China, none were invented within China. Arguably, all were first realized on a societal scale in China.\n[…]\nHistory of science and technology in China"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quatro_grandes_inven%C3%A7%C3%B5es",
        "situacao": "ok",
        "texto": "As quatro grandes invenções (chinês simplificado: 四大发明; chinês tradicional: 四大發明; pinyin: sì dà fāmíng) são a bússola, a impressão, a fabricação de papel e a pólvora. Estas invenções da China antiga são celebradas na cultura chinesa pelo seu significado histórico e servem como símbolos da avançada ciência e tecnologia existente na região.\n[…]\nPapel\n[…]\nPólvora\n[…]\nImpacto das Quatro Grandes Invenções no Mundo\n[…]\nBússola\n[…]\nImpressão\n[…]\nPapel\n[…]\nPólvora\n[…]\nAs quatro invenções não resumem, necessariamente, as conquistas da ciência e da tecnologia na China antiga. Elas foram consideradas as mais importantes realizações chinesas nesses campos simplesmente porque tiveram um papel proeminente nas trocas entre o Oriente e o Ocidente e atuaram como uma força dinâmica no desenvolvimento do capitalismo na Europa.\n[…]\nEm seu discurso político, o secretário geral do Partido Comunista Chinês Xi Jinping com frequência cita as quatro grandes invenções como fonte de orgulho nacional para a China, pelas contribuições históricas do país para a humanidade.\n[…]\nEm 2017, o termo “quatro grandes novas invenções” popularizou-se na China em referência ao trem de alta velocidade, o pagamento móvel, o comércio eletrônico e o sistema de bicicletas compartilhadas. O termo não deve ser interpretado de forma literal, pois, embora essas inovações tenham sido desenvolvidas excepcionalmente na China, nenhuma delas foi originalmente inventada no país.\n[…]\nAs quatro grandes invenções foram um dos temas principais da cerimônia de abertura das Olimpíadas de Versão de 2008, em Pequim. A feitura do papel foi representada com uma dança de um desenho à tinta em um grande pedaço de papel, e a impressão por uma série de blocos tipográficos dançantes; uma réplica de uma bússola antiga foi mostrada, e a pólvora foi demonstrada por um extenso espetáculo de fogos de artifício durante a apresentação.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "William Addis",
      "descricao": "Empresário inglês do século dezoito que criou um modelo de escova de dentes produzido em série."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Por volta de 1780, a escova de dentes do inglês William Addis tinha cabo de osso e cerdas de que animal?",
    "resposta": "Porco",
    "fonte": [
      "https://en.wikipedia.org/wiki/William_Addis",
      "https://en.wikipedia.org/wiki/Toothbrush"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/William_Addis",
        "situacao": "desambiguacao",
        "texto": "William Addis may refer to:\n\nWilliam Addis (colonial administrator) (1901–1978), British governor of Seychelles\nWilliam Addis (entrepreneur) (1734–1808), English inventor of the first mass-produced toothbrush\nWilliam Edward Addis (1844–1917), Scottish-born Australian colonial clergyman\nWilliam Adyes or Addis (1520–1558/9), English politician, MP for Worcester"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Toothbrush",
        "situacao": "ok",
        "texto": "A toothbrush is a special type of brush used to clean the teeth, gums, and tongue. It consists of a head of tightly clustered bristles, onto which toothpaste is applied, mounted on a handle that facilitates cleaning hard-to-reach areas of the mouth. They should be used in conjunction with tools that clean between the teeth―where toothbrush bristles cannot reach―such as floss, tape, interdental bru\n[…]\nBefore the invention of the toothbrush, a variety of oral hygiene measures were used. This has been verified by excavations during which tree twigs, bird feathers, animal bones and porcupine quills were recovered.\n[…]\nIn the UK, William Addis is believed to have made the first mass-produced toothbrush in 1780. In 1770, he was jailed for causing a riot. While in prison he decided that using a rag with soot and salt on the teeth was ineffective and could be improved.\n[…]\nThe first patent for a toothbrush was granted to H.N. Wadsworth in 1857 (U.S.A. Patent No. 18,653) in the United States, but mass production in the United States did not start until 1885. The improved design had a bone handle with holes bored into it for the Siberian boar hair bristles. Unfortunately, animal bristle was not an ideal material as it retained bacteria, did not dry efficiently and the bristles often fell out. In addition to bone, handles were made of wood or ivory.\n[…]\nDuring the 1900s, celluloid gradually replaced bone handles. Natural animal bristles were also replaced by synthetic fibers, usually nylon, by DuPont in 1938. The first nylon bristle toothbrush made with nylon yarn went on sale on February 24, 1938. The first electric toothbrush, the Broxodent, was invented in Switzerland in 1954. By the turn of the 21st century nylon had come to be widely used for the bristles and the handles were usually molded from thermoplastic materials."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Jacques Charles",
      "descricao": "Físico e inventor francês (1746–1823) que fez, em 1783, o primeiro voo tripulado num balão de hidrogênio."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Poucos dias depois do primeiro voo tripulado dos Montgolfier, o francês Jacques Charles subiu num balão inflado com que gás?",
    "resposta": "Hidrogênio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jacques_Charles",
      "https://en.wikipedia.org/wiki/Gas_balloon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jacques_Charles",
        "situacao": "ok",
        "texto": "Jacques Alexandre César Charles (French pronunciation: [ʒak alɛksɑ̃dʁ sezaʁ ʃaʁl]; 12 November 1746 – 7 April 1823) was a French inventor, scientist, and balloonist.\n[…]\nCharles wrote almost nothing about mathematics, and most of what has been credited to him was due to mistaking him with another Jacques Charles (sometimes called Charles the Geometer), also a member of the Paris Academy of Sciences, entering on 12 May 1785.\n[…]\nCharles and the Robert brothers launched the world's first hydrogen-filled gas balloon August 27, 1783; then December 1, 1783, Charles and his co-pilot Nicolas-Louis Robert ascended to a height of about 1,800 feet (550 m) in a piloted gas balloon. Their pioneering use of hydrogen for lift led to this type of gas balloon being named a Charlière (as opposed to the hot-air Montgolfière).\n[…]\nAlso present was Joseph Montgolfier, whom Charles honoured by asking him to release the small, bright green, pilot balloon to assess the wind and weather conditions.\n[…]\nMontgolfier's principal scientific collaborator was M. Charles, ... who had been the first to propose the gas produced by vitriol instead of the burning, dampened straw and wood that he had used in earlier flights. Charles himself was also eager to ascend but had run into a firm veto from the King, who from the earliest reports had been observing the progress of the flights with keen attentiveness.\n[…]\nThis article incorporates text from a publication now in the public domain: Chisholm, Hugh, ed. (1911). \"Charles, Jacques Alexandre César\". Encyclopædia Britannica. Vol. 5 (11th ed.). Cambridge University Press. p. 937.\n[…]\n\"Charles, Jacques Alexandre César\" . The American Cyclopædia. 1879."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gas_balloon",
        "situacao": "ok",
        "texto": "A gas balloon is a balloon that rises and floats in the air because it is filled with a gas lighter than air (such as helium or hydrogen). When not in flight, it is tethered to prevent it from flying away and is sealed at the bottom to prevent the escape of gas. A gas balloon may also be called a Charlière for its inventor, the Frenchman Jacques Charles. Today, familiar gas balloons include large \n[…]\nThe first gas balloon made its flight in August 1783. Designed by professor Jacques Charles and Les Frères Robert, it carried no passengers or cargo. On 1 December 1783, their second hydrogen-filled balloon made a manned flight piloted by Jacques Charles and Nicolas-Louis Robert. This occurred ten days after the first manned flight in a Montgolfier hot air balloon.\n[…]\nThe next project of Jacques Charles and the Robert brothers was La Caroline, an elongated steerable craft that followed Jean Baptiste Meusnier's proposals for a dirigible balloon, incorporating internal ballonnets (air cells), a rudder and a method of propulsion. On September 19, 1784 the brothers and M. Collin-Hullin flew for 6 hours 40 minutes, covering 186 km from Paris to Beuvry near Béthune. This was the first flight over 100 km.\n[…]\nAerophile is the world's largest lighter-than-air carrier, flying 300,000 passengers every year through its eight tethered gas balloon operations in Walt Disney World, San Diego Zoo Safari Park, Smoky Mountains & Irvine in the US and Paris, Disneyland Paris and Parc du Petit Prince in France."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jacques_Alexandre_Cesar_Charles",
        "situacao": "ok",
        "texto": "Jacques Alexandre Cesar Charles (Beaugency, 12 de novembro de 1746 — Paris, 7 de abril de 1823) foi um físico, inventor e químico francês. Foi o primeiro a fazer voar um balão a gás, em 1783.\n[…]\nCharles sabia produzir o hidrogênio e experimentava em suas aulas a força ascensional deste gás insuflando bolhas de sabão. Quando a notícia da experiência feita em Annonay pelos irmãos Montgolfier com globos voadores se propagou, ele sabia que poderia tirar proveito de hidrogênio para elevar os homens no ar.\n[…]\nJacques Charles fez construir por John e Anne Marie Noël Robert, construtores de aparelhos de precisão, um globo feito de seda impermeabilizada por um verniz à base de borracha. Tratava-se de um pequeno balão esférico de 4 m de diâmetro e um volume de 33 m³. Ao invés do ar quente usado pelos irmãos Montgolfier, ele usou o hidrogênio, muito mais leve que o ar. Ele produziu uma grande quantidade de hidrogênio derramando ácido sulfúrico em limalha de ferro.\n[…]\nEm 1 de dezembro 1783, ou seja, dez dias mais tarde, o balão inflado com gás hidrogênio decolou com Charles e Robert Noel no Jardim das Tulherias. O balão voou por duas horas e aterrissou em Nesles depois de viajar 36 km. O Duque de Chartres e o Duque de Fitz-James seguiram a cavalo a aeronave e lavraram a ata. O balão atingiu a altura de 3 300 m, medida com precisão com a ajuda de um barômetro. Portanto Charles também inventou o altímetro.\n[…]\nChisholm, Hugh, ed. (1911). «Charles, Jacques Alexandre César». Encyclopædia Britannica (em inglês) 11.ª ed. Encyclopædia Britannica, Inc. (atualmente em domínio público)\n[…]\n«Charles, Jacques Alexandre César». The American Cyclopædia (em inglês). 1879",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Metrô de Londres",
      "descricao": "Sistema de metrô de Londres, cuja primeira linha, a Metropolitan Railway, foi inaugurada em 1863."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Inaugurado em 1863, o metrô de Londres, o primeiro do mundo, tinha trens puxados por que tipo de locomotiva?",
    "resposta": "A vapor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Metropolitan_Railway",
      "https://en.wikipedia.org/wiki/London_Underground"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Metropolitan_Railway",
        "situacao": "ok",
        "texto": "The Metropolitan Railway (also known as the Met) was a passenger and goods railway that served London from 1863 to 1933, its main line heading north-west from the capital's financial heart in the City to what were to become the Middlesex suburbs. Its first line connected the main-line railway termini at Paddington, Euston, and King's Cross to the City.\n[…]\nThe railway was initially worked by GWR broad-gauge Metropolitan Class tank locomotives and rolling stock. Soon after the opening, disagreement arose between the Met and the GWR over the need to increase the frequency, and the GWR withdrew its stock in August 1863. The Met continued operating a reduced service using GNR standard-gauge rolling stock before purchasing its own standard-gauge locomotives from Beyer, Peacock and Company and rolling stock.\n[…]\nThe Metropolitan initially ordered 18 tank locomotives, of which a key feature was condensing equipment which prevented most of the steam from escaping while trains were in tunnels; they have been described as \"beautiful little engines, painted green and distinguished particularly by their enormous external cylinders.\" The design proved so successful that eventually 120 were built to provide traction on the Metropolitan, the District Railway (in 1871) and all other 'cut and cover' underground lines.\n[…]\nThe early success of the Met prompted a flurry of applications to Parliament in 1863 for new railways in London, many of them competing for similar routes. To consider the best proposals, the House of Lords established a select committee, which issued a report in July 1863 with a recommendation for an \"inner circuit of railway that should abut, if not actually join, nearly all of the principal railway termini in the Metropolis\".\n[…]\nMetropolitan Line Clive's UndergrounD Line Guides"
      },
      {
        "url": "https://en.wikipedia.org/wiki/London_Underground",
        "situacao": "ok",
        "texto": "The London Underground (also known simply as the Underground or as the Tube) is a rapid transit system serving Greater London and parts of the adjacent home counties of Buckinghamshire, Essex, and Hertfordshire in England. Managed by Transport for London (TfL), the network spans 11 lines and 250 miles (400 km) of track, serving 272 stations.\n[…]\nThe network has its origins in the Metropolitan Railway, which opened on 10 January 1863 as the world's first underground passenger railway. Early sub-surface lines used the cut-and-cover construction method, later transitioning to deeper, circular \"tube\" tunnels, which pioneered the use of underground electric traction with the opening of the City and South London Railway in 1890 (now part of the Northern line).\n[…]\nThe current standard Tube map shows the Docklands Light Railway, Thameslink, London Overground, IFS Cloud Cable Car, London Tramlink and the London Underground; a more detailed map covering a larger area, published by National Rail and Transport for London, includes suburban railway services.\n[…]\nEarly advertising posters used various typefaces. Graphic posters first appeared in the 1890s, and it became possible to print colour images economically in the early 20th century. The Central London Railway used colour illustrations in their 1905 poster, and from 1908 the Underground Group, under Pick's direction, used images of country scenes, shopping and major events on posters to encourage use of the tube.\n[…]\nCharles Pearson (1793–1862) suggested an underground railway in London in 1845 and from 1854 promoted a scheme that eventually became the Metropolitan Railway.\n[…]\nCharles Yerkes (1837–1905) was an American who founded the Underground Electric Railways Company of London (UERL) in 1902, which opened three tube lines and electrified the District Railway.\n[…]\nLondon Underground API"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Metropolitan_Railway",
        "situacao": "ok",
        "texto": "A Metropolitan Railway (MetR ou Met) e a Metropolitan District Railway (District), em português, Caminho de Ferro Metropolitano, Estrada de Ferro Metropolitana ou Ferrovia Metropolitana; e Caminho de Ferro do Distrito Metropolitano, Estrada de Ferro do Distrito Metropolitano ou Ferrovia do Distrito Metropolitano foram os dois primeiros metropolitanos a serem construídos em Londres, a criação do pr\n[…]\nInicialmente, a ferrovia era operada pelas locomotivas a vapor Metropolitan Class de bitola larga e material rodante da GWR. Logo após o desentendimento inicial entre a Met e a GWR sobre a necessidade de aumentar a frequência, a GWR retirou seu estoque em agosto de 1863. A Met continuou operando um serviço reduzido usando o material rodante de bitola padrão GNR antes de comprar suas próprias locomotivas de bitola de Beyer, Peacock e material rodante.\n[…]\nA Metropolitan encomendou inicialmente 18 locomotivas-tanque, das quais uma característica fundamental era o equipamento de condensação que impedia a maior parte do vapor de escapar enquanto os trens estavam em túneis; eles foram descritos como \"belos motores pequenos, pintados de verde e distinguidos principalmente por seus enormes cilindros externos\".\n[…]\nAs locomotivas a vapor foram usadas ao norte de Rickmansworth até o início dos anos 1960 quando foram substituídas após a eletrificação em Amersham e a introdução de várias unidades elétricas, a London Transport retirando seu serviço ao norte de Amersham.\n[…]\nA Met se tornou a linha Metropolitan da London Transport, o ramal de Brill foi fechado em 1935, seguida pela linha de Quainton Road até Verney Junction em 1936. A LNER assumiu os trabalhos a vapor e o frete. Em 1936, os serviços da linha Metropolitan foram estendidos de Whitechapel para Barking ao longo da linha District.\n[…]\nMetropolitano de Londres\n[…]\nUm filme mudo A trip on the Metropolitan Railway, cerca de 1910 London Transport Museum",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Gramofone",
      "descricao": "Aparelho de reprodução de som com discos planos, patenteado por Emile Berliner em 1887."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 1887, Emile Berliner patenteou o gramofone, que trocava os cilindros do fonógrafo por gravações em que formato?",
    "resposta": "Discos planos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Emile_Berliner",
      "https://en.wikipedia.org/wiki/Phonograph"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emile_Berliner",
        "situacao": "ok",
        "texto": "Emile Berliner (born Emil Berliner; May 20, 1851 – August 3, 1929) was a German-American inventor and businessman who invented the lateral-cut flat disc record, also known as a \"gramophone record,\" used with a gramophone. He founded the United States Gramophone Company in 1894.\n[…]\nIn 1890, a Berliner licensee in Germany was manufacturing a toy Gramophone and five-inch hard rubber discs (stamped-out replicas of etched zinc master discs), but because key U.S. patents were still pending they were sold only in Europe. Berliner meant his Gramophone to be more than a mere toy, and in 1894 he persuaded a group of businessmen to invest $25,000, with which he started the United States Gramophone Company.\n[…]\nUK Patent 15232 filed November 8, 1887\n[…]\nU.S. patent 372,786 Gramophone (horizontal recording), original filed May 1887, refiled September 1887, issued November 8, 1887\n[…]\nU.S. patent 564,586 Gramophone (recorded on underside of flat, transparent disk), filed November 7, 1887, issued July 1896\n[…]\nBerliner, Emile; Berliner Gramophone Company (1871). Gramophone: invented by Emile Berliner, \"reproducing the human voice\". Philadelphia: Berliner Gramophone Company.\n[…]\nEmile Berliner discography at Discogs\n[…]\nEmile Berliner: Inventor of the Gramophone (Library of Congress)\n[…]\nBerliner – Inventor of the Gramophone and the \"flat\" record – Canadian Communication Foundation Archived October 20, 2021, at the Wayback Machine\n[…]\nBerliner timeline and patent list\n[…]\nContents of Berliner's case file at The Franklin Institute contains evidence and correspondence with Berliner regarding the award of his 1929 Franklin Medal for acoustic engineering and development of the gramophone\n[…]\nMusée des ondes Emile Berliner in Montreal, Quebec contains over 30,000 recordings and other artifacts"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Phonograph",
        "situacao": "ok",
        "texto": "A phonograph, later called a gramophone, and since the 1940s a record player, or more recently a turntable, is a device for the mechanical and analogue reproduction of sound.\n[…]\nIn the 1890s, Emile Berliner initiated the transition from phonograph cylinders to flat discs with a spiral groove running from the periphery to near the centre, coining the term gramophone for disc record players, which is predominantly used in many languages. Later improvements through the years included modifications to the turntable and its drive system, stylus, pickup system, and the sound and equalization systems.\n[…]\nIn American English, \"phonograph\", properly specific to machines made by Edison, was sometimes used in a generic sense as early as the 1890s to include cylinder-playing machines made by others. But it was then considered strictly incorrect to apply it to Emile Berliner's Gramophone, a different machine that played nonrecordable discs (although Edison's original Phonograph patent included the use of discs.)\n[…]\nThe phonautograph would play a role in the development of the gramophone, whose inventor, Emile Berliner, worked with the phonautograph in the course of developing his own device.\n[…]\nThrough experimentation, in 1892, Berliner began commercial production of his disc records and \"gramophones\". His \"phonograph record\" was the first disc record to be offered to the public. They were five inches (13 cm) in diameter and recorded on one side only. Seven-inch (17.5 cm) records followed in 1895. The same year, Berliner replaced the hard rubber used to make the discs with a shellac compound. Berliner's early records had poor sound quality, however. Work by Eldridge R."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Emil_Berliner",
        "situacao": "ok",
        "texto": "Emil Berliner (Hanôver, 20 de maio de 1851 – Washington, D.C., 3 de agosto de 1929) foi um inventor alemão, naturalizado americano. Ele é mais conhecido por inventar o disco plano de corte lateral (chamado de \"gramophone record\" em inglês britânico e americano) usado com um gramofone.\n[…]\nDepois de algum tempo trabalhando em um estábulo, Berliner se interessou pela nova tecnologia de áudio do telefone e fonógrafo. Ele inventou um transmissor telefônico melhorado, um dos primeiros tipos de microfones. A patente foi adquirida pela Bell Telephone Company (ver The Telephone Cases), mas contestada, em uma longa batalha legal, por Thomas Edison.\n[…]\nUK Patent 15232 filed November 8, 1887\n[…]\nPatente E.U.A. 372 786 Gramophone (gravação horizontal), original depositado em maio de 1887, rearquivado em setembro de 1887, emitido em 8 de novembro de 1887\n[…]\nPatente E.U.A. 548 623 Sound Record and Method of Making Same (cópias duplicadas de discos planos de zinco por galvanvanagem), depositada em março de 1893, emitida em outubro de 1895\n[…]\nPatente E.U.A. 564 586 Gramophone (gravada na parte inferior do disco plano e transparente), depositada em 7 de novembro de 1887, emitida em julho de 1896\n[…]\nEmile Berliner: Inventor of the Gramophone (Biblioteca do Congresso)\n[…]\nBerliner - Inventor of the Gramophone and the \"flat\" record - Canadian Communication Foundation Arquivado em 2021-10-20 no Wayback Machine\n[…]\nBerliner timeline and patent list\n[…]\nBerliner in the Inventor's Hall of Fame\n[…]\nContents of Berliner's case file no Instituto Franklin contém evidências e correspondência com Berliner sobre a concessão de sua Medalha Franklin de 1929 para engenharia acústica e desenvolvimento do gramofone\n[…]\nMusée des ondes Emile Berliner em Montreal, Quebec contém mais de 30.000 gravações e outros artefatos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Demoiselle",
      "descricao": "Pequeno avião monoplano criado por Alberto Santos-Dumont entre 1907 e 1909."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em vez de patentear o Demoiselle, seu pequeno avião, o que Santos-Dumont fez com os planos dele?",
    "resposta": "Divulgou-os de graça ao público",
    "fonte": [
      "https://en.wikipedia.org/wiki/Santos-Dumont_Demoiselle",
      "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Santos-Dumont_Demoiselle",
        "situacao": "ok",
        "texto": "The Santos-Dumont Demoiselle is a series of aircraft built in France by the Brazilian aviation pioneer Alberto Santos-Dumont. The tiny, quick, primitive airplanes -- the first successful \"sport aircraft\" -- were the first practical light aircraft. The Demoiselles were the most affordable airplane by 1912, and were widely copied across Europe and the United States, a principal force in the developm\n[…]\nSantos-Dumont made three flights on 17 November 1907 at Issy-les-Moulineaux.\n[…]\nThough only 50 official Santos-Dumont Demoiselles were built (and only 15 sold), The Demoiselles were the most affordable airplane by 1912, and Santos-Dumont made the plans freely available to the public, without compensation. Countless copies were made, throughout Europe and the United States, a major force stimulating the development of aviation as a sport.\n[…]\nWidely flown, as were the many copies of them, the Demoiselles were used to achieve many early airplane firsts and records. In France, in 1907, Santos-Dumont made the first airplane flight between two cities (from Saint-Cyr to Buc), setting a record speed of 95 kilometres per hour (59 mph). On September 14, 1909, Santos-Dumont set a recognized speed record of 55 miles per hour (89 km/h), to win a $200 prize.\n[…]\n\"Santos-Dumont 20 'Demoiselle'\". Aviafrance. Retrieved 10 February 2009.\n[…]\nWier, Stuart (5 May 2019). \"Superbly Small: Alberto Santos=Dumont and his Demoiselle Airplanes\" (PDF). westernexplorers.us. westernexplorers.us. Retrieved 27 September 2020.\n[…]\nArthur E. Joerin; Cross. A. M. (June 1910). \"How to Build the Famous \"Demoiselle\" Santos-Dumont's Monoplane\". Popular Mechanics. Vol. 13, no. 3. pp. 775–782.\n[…]\nArthur E. Joerin; Cross. A. M. (July 1910). \"How to Build the Famous \"Demoiselle\" Santos-Dumont's Monoplane\". Popular Mechanics. Vol. 14, no. 1. pp. 39–45."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont",
        "situacao": "ok",
        "texto": "Alberto Santos-Dumont (self-stylised as Alberto Santos=Dumont; 20 July 1873 – 23 July 1932) was a Brazilian aeronaut, sportsman, inventor, and one of the few people to have contributed significantly to the early development of both lighter-than-air and heavier-than-air aircraft. The heir of a wealthy family of coffee producers, he dedicated himself to aeronautical study and experimentation in Pari\n[…]\nPublic demonstrations, such as those performed by Santos-Dumont, were important in the sceptical academic environment.\n[…]\nThe order of the governor Pedro de Toledo, following Santos-Dumont's death, was: \"There will be no investigation, Santos Dumont did not commit suicide\". Journalist Edmar Morel publicised the cause of death as suicide in 1944.\n[…]\nSeveral legends were told about our Brazilian friend. They said he had an immense fortune! Well, this fortune was only a remediated situation. But how to explain the gesture of this man who distributed prizes awarded for performances to charitable institutions? In the eyes of the public, these liberalities could only be based on a fabulous fortune. Not at all: Santos Dumont was generosity itself, innate elegance, kindness and righteousness.\n[…]\nYou are our leader.\" Blériot's last project was named Santos-Dumont. Dias 2005 says that the inventor's influence was both in his aeronautical development and in advocating the public and personal use of aeronautics, whether through lighter or heavier-than-air.\n[…]\nAfter his 1906 exploits, Santos-Dumont's picture was everywhere wearing the watch, and soon after, wristwatches became popular among men, possibly due to the publicity involving  the watch Cartier made for his friend.\n[…]\nNogueira, Salvador (2006). Conexão Wright – Santos Dumont: a verdadeira história da invenção do avião (in Brazilian Portuguese). Rio de Janeiro: Record.\n[…]\nWorks by Alberto Santos-Dumont at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santos-Dumont_Demoiselle",
        "situacao": "ok",
        "texto": "O Santos-Dumont Demoiselle (em francês: \"Donzela\" ou \"Libélula\") foi uma série de aeronaves leves projetadas e construídas pelo pioneiro da aviação brasileiro Alberto Santos-Dumont. Desenvolvidos entre 1907 e 1909, os Demoiselle são considerados os primeiros ultraleves do mundo e representam um marco na história da aviação por seu design inovador, baixo custo e, crucialmente, por serem as primeira\n[…]\nApós a conquista do voo com o 14-bis em 1906, Santos-Dumont voltou-se para um novo desafio: criar uma aeronave que não fosse apenas uma máquina experimental, mas um meio de transporte pessoal, acessível e fácil de pilotar. Em suas memórias, ele expressou seu desejo de democratizar os céus: \"Não trabalhei para a glória de meu nome, nem para a riqueza. [...] Pus tudo em domínio público. Acho que é o meu dever para com a Humanidade\".\n[…]\nFoi com o Nº 20 que Santos-Dumont realizou seus voos mais espetaculares e que serviu de modelo para a produção em série pela Clément-Bayard e para as cópias publicadas na revista Popular Mechanics em 1910.\n[…]\nEstas versões posteriores foram usadas por Santos-Dumont para seus voos de cross-country e demonstrações públicas em 1909.\n[…]\nO ano de 1909 foi o auge da carreira do Demoiselle. Santos-Dumont, voando com as versões Nº 20, 21 e 22, cativou o público e quebrou recordes.\n[…]\nA decisão de Santos-Dumont de publicar os planos do Demoiselle teve um impacto imenso. A edição de junho de 1910 da revista americana Popular Mechanics trazia um artigo intitulado \"Como Construir o Famoso 'Demoiselle'\", com desenhos detalhados e instruções. A revista declarava: \"Esta máquina é melhor do que qualquer outra já construída para aqueles que desejam obter resultados com o menor gasto possível e o mínimo de experiência\".\n[…]\nSANTOS DUMONT Nº 22 “Demoiselle” no Museu Aeroespacial (MUSAL) (em português)\n[…]\nSantos-Dumont “Demoiselle” no Musée de l'Air et de l'Espace (em inglês) (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Metro",
      "descricao": "Unidade de comprimento do sistema métrico, criada na França no fim do século dezoito."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na França revolucionária, o metro foi definido como a décima milionésima parte da distância entre o polo norte e o quê?",
    "resposta": "A linha do Equador",
    "fonte": [
      "https://en.wikipedia.org/wiki/History_of_the_metre",
      "https://en.wikipedia.org/wiki/Metre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/History_of_the_metre",
        "situacao": "ok",
        "texto": "During the French Revolution, the traditional units of measure were to be replaced by consistent measures based on natural phenomena. As a base unit of length, scientists had favoured the seconds pendulum (a pendulum with a half-period of one second) one century earlier, but this was rejected as it had been discovered that this length varied from place to place with local gravity.\n[…]\nIn 1790, during the French Revolution, the National Convention tasked the French Academy of Sciences with reforming the units of measurement. The Academy formed a commission, which rejected using the pendulum as a unit of length and decided that the new measure should be equal to one ten-millionth of the distance from the North Pole to the Equator (a quadrant of the Earth's circumference). This was to be measured along the meridian passing through the centre of Paris Observatory.\n[…]\nAccordingly, the 11th CGPM in 1960 agreed a new definition of the metre:\n[…]\nNevertheless, the infrared light from a methane-stabilised laser was inconvenient for use in practical interferometry. It was not until 1983 that the chain of frequency measurements reached the 633 nm line of the helium–neon laser, stabilised using molecular iodine. That same year, the 17th CGPM adopted a definition of the metre, in terms of the 1975 conventional value for the speed of light:\n[…]\nThis definition was reworded in 2019:\n[…]\nThe concept of defining a unit of length in terms of a time received some comment. In both cases, the practical issue is that time can be measured more accurately than length (one part in 1013 for a second using a caesium clock as opposed to four parts in 109 for the metre in 1983). The definition in terms of the speed of light also means that the metre can be realised using any light source of known frequency, rather than defining a \"preferred\" source in advance."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Metre",
        "situacao": "ok",
        "texto": "The metre (or meter in US spelling; symbol: m) is the base unit of length in the International System of Units (SI). Since 2019, the metre has been defined as the length of the path travelled by light in vacuum during a time interval of ⁠1/299792458⁠ of a second, where the second is defined by a hyperfine transition frequency of caesium.\n[…]\nThe metre was originally defined in 1791 by the French National Assembly as one ten-millionth of the distance from the equator to the North Pole along a great circle through Paris, setting 10000 km as that quarter of the Earth's polar circumference.\n[…]\nAfter the 2019 revision of the SI, this definition was rephrased to include the definition of a second in terms of the caesium frequency ΔνCs.\n[…]\nSI prefixes can be used to denote decimal multiples and submultiples of the metre, as shown in the table below. Long distances are usually expressed in km, astronomical units (149,597,871 km), light-years (63,000 au; 9.5 trillion km), or parsecs (210,000 au; 31 trillion km), rather than in Mm or larger multiples. \"30 cm\", \"30 m\", and \"300 m\" are more common than \"3 dm\", \"3 dam\", and \"3 hm\", respectively.\n[…]\nThe ancient Egyptian cubit was about 0.5 m (surviving rods are 523–529 mm). Scottish and English definitions of the ell (2 cubits) were 941 mm (0.941 m) and 1143 mm (1.143 m) respectively. The ancient Parisian toise (fathom) was slightly shorter than 2 m and was standardised at exactly 2 m in the mesures usuelles system, such that 1 m was exactly 1⁄2 toise. The Russian verst was 1.0668 km. The Swedish mil was 10.688 km, but was changed to 10 km when Sweden converted to metric units.\n[…]\nThe dictionary definition of metre at Wiktionary"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Samuel Morse",
      "descricao": "Pintor e inventor americano (1791–1872), um dos criadores do telégrafo elétrico e do código Morse."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes de desenvolver o telégrafo elétrico e o código que leva seu nome, o americano Samuel Morse era conhecido em que profissão?",
    "resposta": "Pintor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Samuel_Morse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Samuel_Morse",
        "situacao": "ok",
        "texto": "Samuel Finley Breese Morse (April 27, 1791 – April 2, 1872) was an American inventor and painter. After establishing his reputation as a portrait painter, Morse, in his middle age, contributed to the invention of a single-wire telegraph system based on European telegraphs. He was a co-developer and the namesake of Morse code in 1837 and helped to develop the commercial use of telegraphy.\n[…]\nMorse received a patent for the telegraph in 1847, at the old Beylerbeyi Palace (the present Beylerbeyi Palace was built in 1861–1865 on the same location) in Istanbul, which was issued by Sultan Abdülmecid, who personally tested the new invention. He was elected an Associate Fellow of the American Academy of Arts and Sciences in 1849. The original patent went to the Breese side of the family after the death of Samuel Morse.\n[…]\nLind purchased the Hacienda from his sister when she became a widow. Morse, who often spent his winters at the Hacienda with his daughter and son-in-law, set a two-mile telegraph line connecting his son-in-law's Hacienda to their house in Arroyo. The line was inaugurated on March 1, 1859, in a ceremony flanked by the Spanish and American flags. The first words transmitted by Samuel Morse that day in Puerto Rico were:\n[…]\nBellis, Mary (2009a), Samuel Morse and the Invention of the Telegraph, retrieved April 27, 2020\n[…]\nMcEwen, Neal (1997), Morse Code or Vail Code? Did Samuel F. B. Morse Invent the Code as We Know it Today?, The Telegraph Office, retrieved October 17, 2009\n[…]\nMorse, Samuel F. B. (June 20, 1840), U.S. Patent No. 1647, Telegraph Signs, archived from the original on December 5, 2021, retrieved April 7, 2021\n[…]\nMabee, Carleton, The American Leonardo: A Life of Samuel F. B. Morse, (1943, reissued 1969); William Kloss, Samuel F. B. Morse (1988); Paul J. Staiti, Samuel F. B. Morse (1989) (Knopf, 1944) (Pulitzer Prize winner for biography for 1944)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Samuel_Morse",
        "situacao": "ok",
        "texto": "Samuel Finley Breese Morse (27 de abril de 1791 – 2 de abril de 1872) foi um inventor e pintor norte-americano. Após estabelecer sua reputação como retratista, Morse, em sua meia-idade, contribuiu para a invenção de um sistema de telégrafo de fio único baseado em telégrafos europeus. Foi um dos desenvolvedores do Código Morse em 1837 e ajudou a desenvolver o uso comercial da telegrafia.\n[…]\nEle deixou a Inglaterra em 21 de agosto de 1815, para retornar aos Estados Unidos e iniciar sua carreira em tempo integral como pintor. A década de 1815-1825 marcou um crescimento significativo no trabalho de Morse, à medida que ele buscava capturar a essência da cultura e da vida americana. Ele pintou o ex-presidente federalista John Adams (1816). Os federalistas e anti-federalistas entraram em conflito sobre o Dartmouth College.\n[…]\nCom o tempo, o Código Morse que ele desenvolveu se tornaria a principal linguagem da telegrafia no mundo. Ainda é o padrão para transmissão rítmica de dados. Enquanto isso, William Cooke e o professor Charles Wheatstone haviam tomado conhecimento do telégrafo eletromagnético de Wilhelm Weber e Carl Gauss em 1833. Eles haviam chegado ao estágio de lançar um telégrafo comercial antes de Morse, apesar de terem começado mais tarde.\n[…]\nMas Alfred Vail também desempenhou um papel importante no desenvolvimento do Código Morse, que foi baseado em códigos anteriores para o telégrafo eletromagnético.\n[…]\nMorse recebeu uma patente para o telégrafo em 1847, no antigo Palácio do Beilerbei (o atual Palácio do Beilerbei foi construído em 1861-1865 no mesmo local) em Istambul, que foi emitida pelo Abdul Majide I, que pessoalmente testou a nova invenção. Ele foi eleito um membro associado da Academia Americana de Artes e Ciências em 1849. A patente original foi para o lado Breese da família após a morte de Samuel Morse.\n[…]\nObras de ou sobre Samuel Morse no Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Samuel Morse",
      "descricao": "Pintor e inventor americano (1791–1872), um dos criadores do telégrafo elétrico e do código Morse."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que tragédia pessoal, de que só soube dias depois por carta, levou Samuel Morse a buscar um meio de comunicação rápida?",
    "resposta": "A morte da esposa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Samuel_Morse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Samuel_Morse",
        "situacao": "ok",
        "texto": "Samuel Finley Breese Morse (April 27, 1791 – April 2, 1872) was an American inventor and painter. After establishing his reputation as a portrait painter, Morse, in his middle age, contributed to the invention of a single-wire telegraph system based on European telegraphs. He was a co-developer and the namesake of Morse code in 1837 and helped to develop the commercial use of telegraphy.\n[…]\nMorse, Samuel F. B. (June 20, 1840), U.S. Patent No. 1647, Telegraph Signs, archived from the original on December 5, 2021, retrieved April 7, 2021\n[…]\nSilverman, Kenneth (2004), Lightning Man: The Accursed Life of Samuel F. B. Morse, Hachette Books, ISBN 978-0-306-81394-8\n[…]\nThis article incorporates text from a publication now in the public domain: Chisholm, Hugh, ed. (1911). \"Morse, Samuel Finley Breese\". Encyclopædia Britannica (11th ed.). Cambridge University Press.{{cite encyclopedia}}:  CS1 maint: postscript (link)\n[…]\nMabee, Carleton, The American Leonardo: A Life of Samuel F. B. Morse, (1943, reissued 1969); William Kloss, Samuel F. B. Morse (1988); Paul J. Staiti, Samuel F. B. Morse (1989) (Knopf, 1944) (Pulitzer Prize winner for biography for 1944).\n[…]\nE. L. Morse (editor), his son, Samuel Finley Breese Morse, his Letters and Journals (two volumes, Boston, 1914)\n[…]\nSamuel F. B. Morse, Foreign Conspiracy Against the Liberties of the United States: The Numbers Under the Signature  (Harvard University Press 1835, 1855)\n[…]\nSamuel I. Prime, Life of S. F. B. Morse (New York, 1875)\n[…]\nReinhardt, Joachim, Samuel F. B. Morse (1791–1872), Congo, 1988.\n[…]\nPaul J. Staiti, Gary A. Reynolds, Samuel F. B. Morse (1914). Samuel F. B. Morse\n[…]\nReminiscence by Morse regarding the early days of the daguerreotype\n[…]\nWorks by Samuel Finley Breese Morse at Project Gutenberg\n[…]\nWorks by or about Samuel Morse at the Internet Archive\n[…]\nSamuel Finley Breese Morse papers at the Stuart A. Rose Manuscript, Archives, and Rare Book Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Samuel_Morse",
        "situacao": "ok",
        "texto": "Samuel Finley Breese Morse (27 de abril de 1791 – 2 de abril de 1872) foi um inventor e pintor norte-americano. Após estabelecer sua reputação como retratista, Morse, em sua meia-idade, contribuiu para a invenção de um sistema de telégrafo de fio único baseado em telégrafos europeus. Foi um dos desenvolvedores do Código Morse em 1837 e ajudou a desenvolver o uso comercial da telegrafia.\n[…]\nSamuel F. B. Morse nasceu em Charlestown, Boston, Massachusetts, o primeiro filho do pastor Jedidiah Morse, que também era geógrafo, e sua esposa Elizabeth Ann Finley Breese. Seu pai era um grande pregador da fé calvinista e apoiador do Partido Federalista. Ele acreditava que isso ajudava a preservar as tradições Puritanas (observância estrita do Sabbath, entre outras coisas), e acreditava no apoio federalista a uma aliança com a Grã-Bretanha e um governo central forte.\n[…]\nEm uma visita subsequente a Paris em 1839, Morse conheceu Louis Daguerre. Ele se interessou pelo daguerreótipo deste último — o primeiro meio prático de fotografia. Morse escreveu uma carta ao New York Observer descrevendo a invenção, que foi amplamente publicada na imprensa americana e forneceu ampla conscientização sobre a nova tecnologia.\n[…]\nMorse recebeu uma patente para o telégrafo em 1847, no antigo Palácio do Beilerbei (o atual Palácio do Beilerbei foi construído em 1861-1865 no mesmo local) em Istambul, que foi emitida pelo Abdul Majide I, que pessoalmente testou a nova invenção. Ele foi eleito um membro associado da Academia Americana de Artes e Ciências em 1849. A patente original foi para o lado Breese da família após a morte de Samuel Morse.\n[…]\nEle morreu de pneumonia na cidade de Nova Iorque em 2 de abril de 1872, e foi sepultado no Cemitério Green-Wood no Brooklyn. Na época de sua morte, seu patrimônio foi avaliado em cerca de US$ 500 000 (aproximadamente US$ 12,7 milhões hoje).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "William Herschel",
      "descricao": "Astrônomo e músico alemão radicado na Inglaterra (1738–1822), descobridor do planeta Urano em 1781."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Que atividade sustentou o alemão William Herschel na Inglaterra antes de ele descobrir o planeta Urano, em 1781?",
    "resposta": "Músico",
    "distratores": [
      "Médico",
      "Relojoeiro",
      "Pastor"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/William_Herschel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/William_Herschel",
        "situacao": "ok",
        "texto": "Frederick William Herschel ( HUR-shəl; German: Friedrich Wilhelm Herschel [ˈfʁiːdʁɪç ˈvɪlhɛlm ˈhɛʁʃl̩]; 15 November 1738 – 25 August 1822) was a German–British astronomer and composer. He frequently collaborated with his younger sister and fellow astronomer Caroline Herschel. Born in the Electorate of Hanover, he followed his father into the military band of Hanover, before emigrating to Britain i\n[…]\nAfter they were defeated at the Battle of Hastenbeck, Herschel's father Isaak sent his two sons to seek refuge in England in late 1757. Although his older brother Jakob had received his dismissal from the Hanoverian Guards, Wilhelm was accused of desertion (for which he was pardoned by George III in 1782). Wilhelm, nineteen years old at this time, was a quick student of English. In England, he anglicised his name to Frederick William Herschel.\n[…]\nIn all, Herschel discovered over 800 confirmed double or multiple star systems, almost all of them physical rather than optical pairs. His theoretical and observational work provided the foundation for modern binary star astronomy; new catalogues adding to his work were not published until after 1820 by Friedrich Wilhelm Struve, James South and John Herschel.\n[…]\nIn March 1781, during his search for double stars, Herschel noticed an object appearing as a disk. Herschel originally thought it was a comet or a stellar disc, which he believed he might actually resolve. He reported the sighting to Nevil Maskelyne the Astronomer Royal. He made many more observations of it, and afterwards Finnish-Swedish astronomer Anders Lexell computed the orbit and found it to be probably planetary.\n[…]\nWilliam Herschel Society\n[…]\nMichael Lemonick: William Herschel, the First Observational Cosmologist, 12 November 2008, Fermilab Colloquium\n[…]\nFree scores by William Herschel at the International Music Score Library Project (IMSLP)\n[…]\nMusical pieces by William Herschel @YouTube:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/William_Herschel",
        "situacao": "ok",
        "texto": "William Herschel (Hanôver, 15 de novembro de 1738 — Slough, 25 de agosto de 1822) foi um astrônomo e compositor alemão naturalizado inglês. Aos 19 anos mudou-se para a Inglaterra onde passou a ensinar música, antes de se tornar um organista. Com o tempo passou a estudar astronomia e ficou famoso por sua descoberta do planeta Urano, assim como de duas de suas luas (Titânia e Oberon). Também descobr\n[…]\nFriedrich Wilhelm Herschel nasceu em Hanôver, Alemanha, filho de Anna Ilse Moritzen e Issak Herschel. Seu pai era músico da Guarda Hanoveriana - para a qual entrou aos catorze anos. Mais tarde abandonou os serviços militares, devido a sua saúde frágil, sendo acusado de deserção, e sendo posteriormente perdoado pelo rei George III, em 1782. Seu pai ajudou-o a mudar-se para a Inglaterra em 1757, onde começou a ganhar a vida como músico e organista.\n[…]\nFriedrich Wilhelm Herschel (Hanôver, 15 de novembro de 1738 — Slough, 25 de agosto de 1822), mais conhecido como William Herschel, foi um astrônomo, cientista e músico de origem alemã naturalizado britânico, amplamente reconhecido como um dos pais da astronomia moderna.\n[…]\nNascido em Hanôver (então parte do Eleitorado de Hanôver, no Sacro Império Romano-Germânico), Herschel era filho de Anna Ilse Moritzen e Issak Herschel. Seu pai era músico da Guarda Hanoveriana, corporação na qual o próprio William entrou aos catorze anos. Devido à sua saúde frágil, ele posteriormente abandonou os serviços militares, chegando a ser acusado de deserção antes de ser devidamente perdoado pelo rei George III em 1782.\n[…]\nCom a ajuda do pai, mudou-se para a Inglaterra em 1757, onde passou a ganhar a vida trabalhando como músico e organista.\n[…]\nAntes de consagrar-se na ciência, Herschel desenvolveu uma prolífica carreira como compositor e músico. Suas obras musicais catalogadas incluem:\n[…]\n«Works by or about William Herschel» (em inglês)  no WorldCat",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Post-it",
      "descricao": "Bloco de papeizinhos com cola fraca reposicionável, lançado pela empresa americana 3M em 1980."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 1968, o químico Spencer Silver tentava criar uma cola superforte, mas obteve a do futuro post-it. Que característica ela tinha?",
    "resposta": "Colava fraco e descolava fácil",
    "fonte": [
      "https://en.wikipedia.org/wiki/Post-it_Note",
      "https://en.wikipedia.org/wiki/Spencer_Silver"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Post-it_Note",
        "situacao": "ok",
        "texto": "A Post-it note (or sticky note) is a small piece of paper with a re-adherable strip of glue on its back, made for temporarily attaching notes to documents and other surfaces. A low-tack pressure-sensitive adhesive allows the notes to be easily attached, removed, and even re-posted elsewhere without leaving residue. The Post-it's signature adhesive was discovered accidentally by a scientist at 3M.\n[…]\nIn 1968, Spencer Silver, a scientist at 3M in the United States, attempted to develop a super-strong adhesive. Instead, he accidentally created a \"low-tack\", reusable, pressure-sensitive adhesive for the aerospace industry. For five years, Silver promoted his \"solution without a problem\" within 3M both informally and through seminars, but failed to gain adherents.\n[…]\nThey can be used to annotate textbooks in place of standard highlighting and sideline note-taking methods, allowing the pages to remain free of markings. Additionally, Post-it notes can be used to visually guide students to important points in the textbook, helping them find information faster.\n[…]\nIn 2000, the 20th anniversary of Post-it notes was celebrated by having artists create artworks on the notes. One such work, by the artist R. B. Kitaj, sold for £640 in an auction, making it the most valuable Post-it note on record.\n[…]\nSidewalks Labs, a Google-owned company that focuses on urban innovation, opened a public workspace in Quayside, Toronto, that supports public engagement in the city-planning process. Plans are presented here and the public can freely share their ideas, opinions, and feedback on potential projects, often in the form of Post-it note annotations.\n[…]\n\"Sticking around – the Post-it note is 20\". BBC News. 2000-04-06.\n[…]\nPost-it Note History by 3M\n[…]\nStavroula Karapapa, (2019). Post-it note. In Claudy Op den Kamp and Dan Hunter (eds.), A History of Intellectual Property in 50 Objects, Cambridge University Press."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Spencer_Silver",
        "situacao": "ok",
        "texto": "Spencer Ferguson Silver III (February 6, 1941 – May 8, 2021) was an American chemist and inventor who specialized in adhesives. 3M credits him with having devised the adhesive that Arthur Fry used to create Post-it Notes.\n[…]\nSpencer Ferguson Silver III was born in San Antonio, Texas, on February 6, 1941, to Bernice (née Wendt) and Spencer Silver Jr. His father was an accountant while his mother was a secretary. He majored in chemistry at Arizona State University, earning a B.S. in 1962, then earned a doctorate in organic chemistry from the University of Colorado at Boulder in 1966, before taking a position as a Senior Chemist in 3M's Central Research Labs.\n[…]\nSilver started his career at 3M's central research laboratory as a senior chemist focused on developing pressure sensitive adhesives. He started working in 1968 on trying to create a strong adhesive that could be used for aircraft construction. However, he failed in that objective and ended up developing a \"low-tack\" adhesive made of tiny acrylic spheres that would stick only where they were tangent to a given surface, rather than flat up against it.\n[…]\nSilver received several awards for his work, including the 1998 American Chemical Society Award for Creative Invention and induction into the National Inventors Hall of Fame in 2011. A book of Post-it notes is held in the design collection of the Museum of Modern Art (MoMA) in New York City, and both Silver and Fry are credited as the artists.\n[…]\nIn 2025, the Post-it Note was included in Pirouette: Turning Points in Design, an exhibition at the MoMA featuring \"widely recognized design icons [...] highlighting pivotal moments in design history.\"\n[…]\nSpencer Silver at the Museum of Modern Art"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Post-it",
        "situacao": "ok",
        "texto": "Um post-it (ou nota adesiva) é um pequeno pedaço de papel com uma tira de cola re-adesiva no verso, feito para anexar notas temporariamente a documentos e outras superfícies. Um adesivo sensível à pressão de baixa aderência permite que as notas sejam facilmente anexadas, removidas e até recolocadas em outro lugar sem deixar resíduos. Originalmente pequenos quadrados amarelos, os post-its e produto\n[…]\nAté 2019, existem pelo menos 26 cores documentadas de post-its.\n[…]\nEmbora a patente da 3M tenha expirado em 1997, \"Post-it\" e a cor amarela característica das notas originais continuam sendo marcas registradas da empresa, com termos como \"notas reposicionáveis\" usadas para ofertas semelhantes fabricadas por concorrentes. Embora o uso da marca registrada 'Post-it' em um sentido representativo se refira a qualquer nota adesiva, nenhuma autoridade legal jamais considerou a marca registrada como genérica.\n[…]\nEm 1968, Spencer Silver, um cientista da 3M nos Estados Unidos, tentou desenvolver um adesivo super forte. Em vez disso, ele acidentalmente criou um adesivo sensível à pressão \"low-tack\", reutilizável. Por cinco anos, Silver promoveu sua \"solução sem problemas\" dentro da 3M tanto informalmente quanto por meio de seminários, mas não conseguiu ganhar adeptos.\n[…]\nEm 2003, a empresa lançou o \"Post-it Brand Super Sticky Notes\", com uma cola mais forte que adere melhor a superfícies verticais e não lisas.\n[…]\nAté a patente da 3M expirar na década de 1990, as notas tipo Post-it eram produzidas apenas na fábrica da empresa em Cynthiana, Kentucky.\n[…]\nEm 2018, a 3M lançou o \"Post-It Extreme Notes\", que são mais duráveis ​​e resistentes à água e que aderem à madeira e outros materiais em ambientes industriais.\n[…]\nPost-it homepage\n[…]\nBBC news article on 20th anniversary of Post-it Notes\n[…]\nThe Rake magazine article on 25th anniversary of Post-it notes\n[…]\nPost-it Note History by 3M",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Post-it",
      "descricao": "Bloco de papeizinhos com cola fraca reposicionável, lançado pela empresa americana 3M em 1980."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O post-it ganhou utilidade quando Art Fry quis marcar páginas sem que o papel caísse de que livro, usado no coral da igreja?",
    "resposta": "Hinário",
    "fonte": [
      "https://en.wikipedia.org/wiki/Post-it_Note"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Post-it_Note",
        "situacao": "ok",
        "texto": "A Post-it note (or sticky note) is a small piece of paper with a re-adherable strip of glue on its back, made for temporarily attaching notes to documents and other surfaces. A low-tack pressure-sensitive adhesive allows the notes to be easily attached, removed, and even re-posted elsewhere without leaving residue. The Post-it's signature adhesive was discovered accidentally by a scientist at 3M.\n[…]\nIn 2019, the Post-it App was relaunched.\n[…]\nIn 2010, the creators of the Post-it note joined the National Inventors Hall of Fame as a result of the widespread success of the Post-it note.\n[…]\nPost-it notes may have a positive effect on how people interact with information presented to them. This is backed up by research that aimed to determine how attaching a blank Post-it note to a survey affected participation in the survey. The research found that the surveys with affixed Post-it notes were more likely to be completed and returned, and that the participants were more likely to write higher quality responses to the questions.\n[…]\nIn 2000, the 20th anniversary of Post-it notes was celebrated by having artists create artworks on the notes. One such work, by the artist R. B. Kitaj, sold for £640 in an auction, making it the most valuable Post-it note on record.\n[…]\nSidewalks Labs, a Google-owned company that focuses on urban innovation, opened a public workspace in Quayside, Toronto, that supports public engagement in the city-planning process. Plans are presented here and the public can freely share their ideas, opinions, and feedback on potential projects, often in the form of Post-it note annotations.\n[…]\nPost-it homepage\n[…]\n\"Sticking around – the Post-it note is 20\". BBC News. 2000-04-06.\n[…]\nPost-it Note History by 3M\n[…]\nStavroula Karapapa, (2019). Post-it note. In Claudy Op den Kamp and Dan Hunter (eds.), A History of Intellectual Property in 50 Objects, Cambridge University Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Post-it",
        "situacao": "ok",
        "texto": "Um post-it (ou nota adesiva) é um pequeno pedaço de papel com uma tira de cola re-adesiva no verso, feito para anexar notas temporariamente a documentos e outras superfícies. Um adesivo sensível à pressão de baixa aderência permite que as notas sejam facilmente anexadas, removidas e até recolocadas em outro lugar sem deixar resíduos. Originalmente pequenos quadrados amarelos, os post-its e produto\n[…]\nEm 1974, um colega que havia participado de um de seus seminários, Art Fry, teve a ideia de usar o adesivo para ancorar seu marcador em seu hinário. Fry então utilizou a política de \"bootlegging permitido\" da 3M para desenvolver a ideia. A cor amarelo-pálido das notas originais foi escolhida por acaso, a partir da cor do papel de rascunho usado pelo laboratório ao lado da equipe do Post-It.\n[…]\nEm 2003, a empresa lançou o \"Post-it Brand Super Sticky Notes\", com uma cola mais forte que adere melhor a superfícies verticais e não lisas.\n[…]\nAté a patente da 3M expirar na década de 1990, as notas tipo Post-it eram produzidas apenas na fábrica da empresa em Cynthiana, Kentucky.\n[…]\nEm 2018, a 3M lançou o \"Post-It Extreme Notes\", que são mais duráveis ​​e resistentes à água e que aderem à madeira e outros materiais em ambientes industriais.\n[…]\nAlan Amron afirmou ter sido o inventor real em 1973 que divulgou a tecnologia Post-it para a 3M em 1974. Seu processo de 1997 contra a 3M foi resolvido com um pagamento da 3M para Amron. Como parte do acordo, a Amron concordou em não fazer reclamações futuras contra a empresa, a menos que o acordo fosse violado. No entanto, em 2016, ele abriu um novo processo contra a 3M, afirmando que a 3M estava alegando erroneamente ser a inventora e pedindo quatrocentos milhões de dólares em danos.\n[…]\nPost-it homepage\n[…]\nBBC news article on 20th anniversary of Post-it Notes\n[…]\nThe Rake magazine article on 25th anniversary of Post-it notes\n[…]\nPost-it Note History by 3M",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Thomas Edison",
      "descricao": "Inventor e empresário americano (1847–1931), conhecido pela lâmpada incandescente e pelo fonógrafo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Que deficiência acompanhou Thomas Edison, criador do fonógrafo, durante quase toda a vida adulta?",
    "resposta": "Surdez",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Edison"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Edison",
        "situacao": "ok",
        "texto": "Thomas Alva Edison (February 11, 1847 – October 18, 1931) was an American inventor and businessman known for his work on the incandescent light bulb, the phonograph, electric power distribution and early motion pictures. The merger of the Edison General Electric Company and the competitor Thomson-Houston Electric Company resulted in the formation of General Electric. Edison registered 1,093 patent\n[…]\nIn 1926, at 79 years old, Edison handed over the presidency of Thomas A. Edison, Inc. to his son Charles.\n[…]\nThomas Alva Edison Jr. (1876–1935)\n[…]\nThomas Jr. was often sick as a child, but Edison left his care in Mary's hands.\n[…]\nCharles Edison (1890–1969)\n[…]\nThomas Edison in popular culture\n[…]\nList of things named after Thomas Edison\n[…]\nAlbion, Michele Wehrwein. (2008). The Florida Life of Thomas Edison. University Press of Florida. ISBN 978-0-8130-3259-7.\n[…]\nDeGraaf, Leonard. \"Confronting the Mass Market: Thomas Edison and the Entertainment Phonograph.\" Business and Economic History 24#1 1995, pp. 88–96. JSTOR 23703274\n[…]\nMillard, Andre. \"Thomas Edison and the Theory and Practice of Innovation.\" Business and Economic History 20, 1991, pp. 191–99. JSTOR 23702816\n[…]\nUS 203018, Edison, Thomas A., \"Telephones or speaking-telegraphs\", published April 30, 1878\n[…]\nUS 307031, Edison, Thomas A., \"Electrical Indicator\", published October 21, 1884\n[…]\nThe Thomas A. Edison Papers Digital Edition\n[…]\nThe Papers of Thomas A. Edison, book edition in 9 volumes; each can be downloaded at no cost\n[…]\nEdison, Thomas Alva (June 7, 1925). \"The Philosophy of Thomas Paine\". www.thomaspaine.org. Archived from the original on February 9, 2026. Retrieved December 12, 2025.\n[…]\nInterview with Thomas Edison in 1931\n[…]\nThe Diary of Thomas Edison\n[…]\nWorks by Thomas Edison at Project Gutenberg\n[…]\nWorks by or about Thomas Edison at the Internet Archive\n[…]\nThomas Edison Personal Manuscripts and Letters\n[…]\nEdison Papers Rutgers.\n[…]\nEdisonian Museum Antique Electrics\n[…]\nThomas Edison at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Edison",
        "situacao": "ok",
        "texto": "Thomas Alva Edison (11 de fevereiro de 1847 – 18 de outubro de 1931) foi um inventor e empresário norte-americano que trabalhou com a lâmpada incandescente, o fonógrafo, a distribuição de energia elétrica e os primeiros filmes. A fusão da Edison General Electric Company com a concorrente Thomson-Houston Electric Company deu origem à General Electric. Edison registrou 1.093 patentes nos Estados Uni\n[…]\nEdison começou a ter problemas de audição aos 12 anos. O historiador Paul Israel sugeriu que infecções recorrentes do ouvido médio e talvez um episódio de escarlatina contribuíram para sua surdez; a causa exata permanece incerta. Chamado de Alva quando jovem, Edison mais tarde inventou histórias fantasiosas para explicar a perda auditiva. Não ouvia de um ouvido e mal conseguia ouvir do outro. Quando adulto, acreditava que essa condição o ajudava a evitar distrações e a se concentrar no trabalho.\n[…]\nDurante a Primeira Guerra Mundial, preocupado com a segurança dos Estados Unidos, Edison propôs um comitê de cientistas e industriais para aconselhar as forças armadas e realizar pesquisas. Em 1915, assumiu a presidência do Naval Consulting Board. Participou de poucas reuniões devido à surdez. Uma das tarefas do conselho era escolher o local de um centro de pesquisa naval. Edison queria instalá-lo longe de Washington, para evitar que visitas de funcionários do governo atrasassem os trabalhos.\n[…]\nCharles Edison (1890–1969)\n[…]\nO pai de Edison era democrata e apoiava a secessão dos Estados Confederados da América. Edison foi republicano durante quase toda a vida, mas apoiou por pouco tempo a terceira candidatura presidencial de Theodore Roosevelt pelo Partido Progressista. Apreciava a defesa republicana do capitalismo industrial e das tarifas alfandegárias.\n[…]\n«Thomas Alva Edison, Jr.». Thomas Edison National Historical Park. U.S. National Park Service. Cópia arquivada em 18 de fevereiro de 2026",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Velcro",
      "descricao": "Fecho de tecido com ganchos e laçadas, criado pelo engenheiro suíço George de Mestral."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos anos quarenta, o suíço George de Mestral teve a ideia do velcro ao examinar o que vivia grudando no pelo do seu cachorro?",
    "resposta": "Carrapichos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hook-and-loop_fastener",
      "https://en.wikipedia.org/wiki/George_de_Mestral"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hook-and-loop_fastener",
        "situacao": "ok",
        "texto": "Velcro is a brand of versatile fastening devices, known as hook-and-loop fasteners, hook-and-pile fasteners, or touch fasteners, that allow two surfaces to be repeatedly attached and detached with ease. A trademark of Velcro Companies, the brand name is often used generically to refer to this type of fastener. Invented in the mid-20th century, it is widely used in clothing, accessories, and variou\n[…]\nThe original hook-and-loop fastener was conceived in 1941 by Swiss engineer George de Mestral, which he named velcro. The word Velcro is a portmanteau of two French words: \"velours\" meaning velvet, and \"crochet\" meaning hook. The idea came to him one day after he returned from a hunting trip with his dog in the Alps. He took a close look at the burs of burdock that kept sticking to his clothes and his dog's fur.\n[…]\nVelcro Corporation products were displayed at a fashion show at the Waldorf-Astoria hotel in New York in 1959, and the fabric got its first break when it was used in the aerospace industry to help astronauts maneuver in and out of bulky space suits. However, this use reinforced the view among the populace that hook-and-loop was something with very limited utilitarian uses.\n[…]\nVelcro jumping is a game where people wearing hook-covered suits take a running jump and hurl themselves as high as possible at a loop-covered wall. The wall is inflated, and looks similar to other inflatable structures. It is not necessarily completely covered in the material—often there will be vertical strips of hooks. Sometimes, instead of a running jump, people use a small trampoline.\n[…]\n2002 – The Star Trek: Enterprise episode \"Carbon Creek\" portrays Velcro as being introduced to human society by Vulcans in 1957. One of the Vulcans in the episode is named \"Mestral\", after the fastener's actual inventor and founder of the brand.\n[…]\nMedia related to Hook-and-loop fasteners at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/George_de_Mestral",
        "situacao": "ok",
        "texto": "George de Mestral ((1907-06-19)19 June 1907 – (1990-02-08)8 February 1990) was a Swiss electrical engineer who invented the hook and loop fastener which he named Velcro.\n[…]\nDe Mestral died in Commugny, Switzerland, where he is buried. The municipality posthumously named an avenue, L'avenue George de Mestral, in his honour.\n[…]\nHe was inducted into the National Inventors Hall of Fame in 1999 for inventing hook and loop fasteners.\n[…]\nDe Mestral first conceptualised hook and loop after returning from a hunting trip with his dog in the Alps in 1941. After removing several of the burdock burrs (seeds) that kept sticking to his clothes and his dog's fur, he became curious as to how it worked. He examined them under a microscope, and noted hundreds of \"hooks\" that caught on anything with a loop, such as clothing, animal fur, or hair.\n[…]\nDe Mestral gave the name Velcro, a portmanteau of the French words velours (\"velvet\"), and crochet (\"hook\"), to his invention as well as his company, which continues to manufacture and market the fastening system.\n[…]\nHowever, hook and loop's integration into the textile industry took time, partly because of its appearance. Hook and loop in the early 1960s looked like it had been made from left-over bits of cheap fabric, an unappealing aspect for clothiers. The first notable use for Velcro® brand hook and loop came in the aerospace industry, where it helped astronauts manoeuvre in and out of bulky space suits. Eventually, skiers noted the similar advantages of a suit that was easier to get in and out of.\n[…]\n\"George de Mestral\" in  German, French and Italian in the online Historical Dictionary of Switzerland."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "John Boyd Dunlop",
      "descricao": "Veterinário escocês (1840–1921) que desenvolveu um pneu com câmara de ar prático no fim dos anos 1880."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No fim dos anos 1880, o veterinário escocês John Boyd Dunlop desenvolveu um pneu cheio de ar para acabar com o desconforto de quem?",
    "resposta": "Do filho, no triciclo",
    "fonte": [
      "https://en.wikipedia.org/wiki/John_Boyd_Dunlop"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/John_Boyd_Dunlop",
        "situacao": "ok",
        "texto": "John Boyd Dunlop (5 February 1840 – 23 October 1921) was a Scottish inventor and veterinary surgeon who spent most of his career in Ireland. Familiar with making rubber devices, he invented the practical pneumatic tyres for his child's tricycle and developed them for use in cycle racing.\n[…]\nHe married Margaret Stevenson in 1871 and they had a daughter and a son. He established Downe Veterinary Clinic in Downpatrick with his brother James Dunlop before moving to a practice in 38–42 May Street, Belfast where, by the mid 1880s, his was one of the largest practices in Ireland.\n[…]\nJ. B. Dunlop sold out in 1895 and took no further interest in the tyre or rubber business. His remaining business interest was a local drapery.\n[…]\nIn October 1887, John Boyd Dunlop developed the first practical pneumatic or inflatable tyre for his son's tricycle and, using his knowledge and experience with rubber, in the yard of his home in Belfast fitted it to a wooden disc 96 centimetres across. The tyre was an inflated tube of sheet rubber. He then took his wheel and a metal wheel from his son's tricycle and rolled both across the yard together.\n[…]\nJohn Boyd Dunlop died at his home in Dublin's Ballsbridge in 1921 and is buried in Deans Grange Cemetery.\n[…]\nIn 2005, Dunlop was inducted into the Automotive Hall of Fame.\n[…]\nAn avenue in the city of Campinas, in southeast Brazil, is also named after him; that is because a Dunlop tyre factory was established there in 1953.\n[…]\nJohn Boyd Dunlop has been commemorated with a blue plaque by the Ulster Historical Circle for inventing the first successful pneumatic tyre.\n[…]\nIn 2025, Dunlop was inducted into the Scottish Engineering Hall of Fame\n[…]\nFamous Scots – John Boyd Dunlop\n[…]\nJohn Boyd Dunlop – Pictures and information\n[…]\nDunlop. Archived 2 April 2011 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/John_Boyd_Dunlop",
        "situacao": "ok",
        "texto": "John Boyd Dunlop (Dreghorn, North Ayrshire, Escócia, 5 de fevereiro de 1840 – Dublin, 23 de outubro de 1921) foi um inventor escocês fundador da empresa de pneumáticos que leva seu nome, Dunlop Tyres.\n[…]\nEle nasceu em uma fazenda em Dreghorn, North Ayrshire, e estudou medicina veterinária na Dick Vet, pertencente à University of Edinburgh, profissão que ele exerceu em casa durante quase dez anos, mudando-se então para Belfast, onde é agora a Irlanda do Norte, em 1867.\n[…]\nEm 1887, ele desenvolveu e testou o primeiro pneu para o triciclo de seu filho, e patenteou-o em 7 de dezembro de 1888. No entanto, dois anos após sua solicitação de patente ele foi oficialmente informado que ela era inválida, pois o inventor escocês Robert William Thomson havia patenteado a ideia na França em 1846 e nos Estados Unidos em 1847. O desenvolvimento de pneumáticos por Dunlop chegou em um momento crucial para o desenvolvimento das rodovias.\n[…]\nA produção comercial iniciou-se em 1890 em Belfast. Dunlop associou sua patente a William Harvey Du Cros, em troca de 1.500 ações na empresa resultante, e acabou não fazendo qualquer grande fortuna por sua invenção. Dunlop morreu em  Dublin.\n[…]\n(em inglês) Escoceses famosos - John Boyd Dunlop\n[…]\n(em inglês) John Boyd Dunlop - Fotos e informações Arquivado em 20 de julho de  2011, no Wayback Machine.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Ar-condicionado",
      "descricao": "Sistema que controla a temperatura e a umidade do ar, cuja versão moderna foi criada por Willis Carrier em 1902."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1902, o engenheiro Willis Carrier criou o ar-condicionado moderno para controlar a umidade de que tipo de empresa, no Brooklyn?",
    "resposta": "Gráfica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Willis_Carrier",
      "https://en.wikipedia.org/wiki/Air_conditioning"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Willis_Carrier",
        "situacao": "ok",
        "texto": "Willis Haviland Carrier (November 26, 1876 – October 7, 1950) was an American engineer, best known for inventing modern air conditioning by inventing the first electrical air conditioning unit in 1902. In 1915, he founded Carrier Corporation, a company specializing in the manufacture and distribution of heating, ventilation, and air conditioning (now abbreviated \"HVAC\") systems.\n[…]\nIn Buffalo, New York, on July 17, 1902, in response to an air quality problem experienced at the Sackett-Wilhelms Lithographing & Publishing Company of Brooklyn, New York, Willis Carrier submitted drawings for what became recognized as the world's first modern air conditioning system.\n[…]\ncontrol humidity\n[…]\nThe Willis H. Carrier Total Indoor Environmental Quality Lab at the Syracuse University's Center of Excellence in Environmental and Energy Systems is named in his honor. The lab was established in 2010 with a donation from the Carrier Corp.\n[…]\nCarrier met Edith Claire Seymour at Cornell and they married on August 29, 1902. Edith Claire Seymour died in 1912. He married Jennie Tifft Martin on April 16, 1913. She died in 1939. He married Elizabeth Marsh Wise of Terre Haute, Indiana on February 7, 1941. Carrier and all three of his wives are buried in Forest Lawn Cemetery in Buffalo, New York. Carrier fathered one child, Howard Carter Willis.\n[…]\nFor his contributions to science and industry, Willis Carrier was awarded an engineering degree by Lehigh University in 1935 and an honorary Doctor of Letters degree by Alfred University in 1942. He received the ASME Medal in 1934. Carrier was awarded the Frank P. Brown Medal and elected an Honorary Member of the American Society of Mechanical Engineers in 1942. He was inducted posthumously in the National Inventors Hall of Fame (1985) and the Buffalo Science Museum Hall of Fame (2008).\n[…]\nRational Psychrometric Formulae, by Willis H. Carrier (1911)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Air_conditioning",
        "situacao": "ok",
        "texto": "Air conditioning, often abbreviated as A/C (US) or air con (UK), is the process of removing heat from an enclosed space to achieve a more comfortable interior temperature and, in some cases, controlling the humidity of internal air. Air conditioning can be achieved using a mechanical air conditioner or through other methods, such as passive cooling and ventilative cooling.\n[…]\nElectricity made more practical mechanically powered systems possible. In 1902, American engineer Willis Carrier designed what is widely regarded as the first modern electrical air-conditioning system for the Sackett-Wilhelms Lithographing & Publishing Company in Brooklyn, New York. The installation controlled both temperature and humidity, helping stabilize paper dimensions and the alignment of inks during color printing. On January 2, 1906, Carrier received U.S.\n[…]\nThis system uses a variable-frequency drive (also called an Inverter) to control the speed of the compressor. The refrigerant flow rate is changed by the change in the speed of the compressor. The turn down ratio depends on the system configuration and manufacturer. It modulates from 15 or 25% up to 100% at full capacity with a single inverter from 12 to 100% with a hybrid tandem. This method is the most efficient way to modulate an air conditioner's capacity.\n[…]\nThere is some push to increase the energy efficiency of air conditioners. United Nations Environment Programme (UNEP) and the IEA found that if air conditioners could be twice as effective as now, 460 billion tons of GHG could be cut over 40 years. The UNEP and IEA also recommended legislation to decrease the use of hydrofluorocarbons, better building insulation, and more sustainable temperature-controlled food supply chains going forward.\n[…]\nU.S. patent 808,897 Carrier's original patent"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Willis_Carrier",
        "situacao": "ok",
        "texto": "Willis Haviland Carrier (Condado de Erie, 26 de novembro de 1876 – Nova Iorque, 7 de outubro de 1950) foi um engenheiro norte-americano, conhecido como o inventor do ar-condicionado e do umidificador de ar moderno. Carrier inventou a primeira unidade de ar-condicionado elétrico em 1902. Em 1915 fundou a Carrier Corporation, uma empresa especializada na fabricação e distribuição de sistemas de aque\n[…]\nEm 1897, Willis Carrier conseguiu uma bolsa de estudos da Universidade Cornell e se formou em 1901 com licenciatura em engenharia mecânica.\n[…]\nEm Buffalo, Nova Iorque, no dia 17 de julho de 1902, ao tentar resolver um problema de qualidade existente na Lithographing Sackett-Wilhelms & Publishing Company of Brooklyn, Carrier apresentou seus desenhos que se tornariam mais tarde o sistema do ar-condicionado conhecido hoje.\n[…]\nA instalação em 1903 marcou o nascimento do ar-condicionado e do umidificador de ar, por causa da adição de controle de umidade, o que levou ao reconhecimento por parte das autoridades no domínio que o ar-condicionado deve realizar quatro funções básicas:\n[…]\nControle da temperatura\n[…]\nControle da umidade\n[…]\nControle da circulação de ar e ventilação\n[…]\nApós vários anos de refinamento e testes de campo, em 2 de janeiro de 1906, nasceu a Carrier Corporation. A invenção de patente nº 808 897, que ele chamou de um \"aparelho para o tratamento do ar\", foi o primeiro tipo de equipamento de ar-condicionado no mundo.\n[…]\nFoi projetado para umidificar ou desumidificar o ar, fazendo o aquecimento de água para umidificar e a refrigeração de água para retirar a umidade do ar. A primeira venda do aparelho foi feita no final de 1906, para o LaCrosse National Bank, La Crosse, Wisconsin.\n[…]\nWillis era filho de Duane Carrier Williams (1836–1908) e Elizabeth R. Haviland (1845–1888). Elizabeth era filha de David Jay Haviland e Elizabeth Ann Button.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Supercola",
      "descricao": "Adesivo instantâneo de cianoacrilato, descoberto por Harry Coover em 1942."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1942, o químico americano Harry Coover obteve por acaso a supercola enquanto tentava fazer miras de plástico transparente para quê?",
    "resposta": "Armas de fogo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cyanoacrylate",
      "https://en.wikipedia.org/wiki/Harry_Coover"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cyanoacrylate",
        "situacao": "ok",
        "texto": "Cyanoacrylates are a family of strong, fast-acting adhesives with industrial, medical, and household uses that are derived from ethyl cyanoacrylate and related esters. The cyanoacrylate group in the monomer rapidly polymerizes in the presence of water to form long, strong chains.\n[…]\nThe original patent for cyanoacrylate was filed in 1947 by the B.F. Goodrich Company as an outgrowth of a search for materials suitable for clear plastic gun sights for the war effort. In 1942, a team of scientists headed by Harry Coover Jr. stumbled upon a formulation that stuck to everything with which it came in contact.\n[…]\nDuring the 1960s, Eastman Kodak sold cyanoacrylate to Loctite, which in turn repackaged and distributed it under a different brand name \"Loctite Quick Set 404\". In 1971, Loctite developed its own manufacturing technology and introduced its own line of cyanoacrylate, called \"Super Bonder\". Loctite quickly gained market share, and by the late 1970s it was believed to have exceeded Eastman Kodak's share in the North American industrial cyanoacrylate market.\n[…]\nThe American Conference of Governmental Industrial Hygienists (ACGIH) assign a threshold limit value exposure limit of 200 parts per billion. On rare occasions, inhalation may trigger asthma. There is no singular measurement of toxicity for all cyanoacrylate adhesives because of the large number of adhesives that contain various cyanoacrylate formulations.\n[…]\nWas Super Glue invented to seal battle wounds in Vietnam? (from The Straight Dope)\n[…]\nCyanoacrylate Adhesive / Super Glue Safety Data Sheets\n[…]\nSafety in the Home: Super Glue - Queensland Health"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Harry_Coover",
        "situacao": "ok",
        "texto": "Harry Wesley Coover Jr. (March 6, 1917 – March 26, 2011) was an American chemist and the inventor of Eastman 910, commonly known as Super Glue.\n[…]\nIn 1942, while searching for materials to make more secure cockpit covers for military planes, cyanoacrylate was discovered. At this time they were deemed too sticky to be of use and were set aside. In 1951, Coover and his team at Eastman Kodak examined cyanoacrylates again. Coover was overseeing Kodak chemists investigating heat-resistant polymers for jet canopies when cyanoacrylates were once again tested and proved too sticky.\n[…]\nWhen a chemist in the group informed Coover that he had permanently damaged an expensive refractometer by gluing it together, Coover recognized that he had discovered a unique adhesive. In 1958, the adhesive, marketed by Kodak as Eastman 910 and then as Super Glue, was introduced for sale.\n[…]\nWhile much attention was given to the glue's capacity to bond solid materials, Coover was also the first to recognize and patent cyanoacrylates as a tissue adhesive after his eldest son cut open his finger while making a model and glued the cut closed with the glue he had samples of from the lab, an early formulation of super glue.\n[…]\nCoover held 460 patents and Super Glue was just one of his many discoveries. He viewed \"programmed innovation,\" a management methodology emphasizing research and development, among his most important work. Coover later formed an international management consulting practice, advising corporate clients around the world on programmed innovation methodology.\n[…]\nIn 2010, Coover received the National Medal of Technology and Innovation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cianoacrilato",
        "situacao": "ok",
        "texto": "Os cianoacrilatos são uma família de monômeros vinílicos e de adesivos de ação rápida, com usos industriais, médicos e domésticos. Os mais usados como adesivos são ésteres alquílicos do ácido 2-cianoacrílico, entre eles o cianoacrilato de etila. Sua estrutura geral pode ser representada por CH2=C(CN)CO2R.\n[…]\nNo Brasil, a Henkel comercializa adesivos instantâneos à base de éster de cianoacrilato sob a marca Loctite Super Bonder. Em Portugal, produtos de cianoacrilato da Loctite são comercializados como Super Cola 3.\n[…]\nDurante a Segunda Guerra Mundial, Harry Coover Jr. trabalhou com cianoacrilatos enquanto participava de pesquisas da Eastman Kodak sobre materiais transparentes para miras de precisão. Os compostos foram considerados inadequados para essa finalidade porque aderiam facilmente às superfícies. Em 1951, Coover e seu colega Fred Joyner voltaram a trabalhar com cianoacrilatos durante pesquisas sobre polímeros resistentes ao calor e reconheceram seu potencial como adesivos.\n[…]\nNa década de 1960, a Eastman Kodak forneceu cianoacrilato à Loctite, que o reembalou e distribuiu sob a marca \"Loctite Quick Set 404\". Em 1971, a Loctite desenvolveu sua própria tecnologia de fabricação e lançou uma linha de cianoacrilatos chamada \"Super Bonder\". A empresa ganhou participação de mercado rapidamente e, no fim da década de 1970, acreditava-se que já tivesse superado a Eastman Kodak no mercado industrial de cianoacrilatos da América do Norte.\n[…]\nHá formulações de \"supercola\" compostas quase inteiramente por 2-cianoacrilato de etila, enquanto outras contêm espessantes, estabilizantes, modificadores de impacto e outros componentes. Uma formulação já documentada continha 91% de ECA, 9% de poli(metacrilato de metila), menos de 0,5% de hidroquinona e uma pequena quantidade de ácido sulfônico orgânico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Robô",
      "descricao": "Máquina capaz de executar tarefas automaticamente; a palavra surgiu na peça tcheca R.U.R., de Karel Čapek, em 1920."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra robô nasceu numa peça de teatro tcheca de 1920, a partir de um termo que significa o quê?",
    "resposta": "Trabalho forçado",
    "distratores": [
      "Boneco mecânico",
      "Homem de metal",
      "Máquina pensante"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/R.U.R.",
      "https://en.wikipedia.org/wiki/Robot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/R.U.R.",
        "situacao": "ok",
        "texto": "R.U.R. is a 1920 science fiction play by the Czech writer Karel Čapek. \"R.U.R.\" stands for Rossumovi Univerzální Roboti (Rossum's Universal Robots, a phrase that has been used as a subtitle in English versions).\n[…]\nIn August 2010, Portuguese multi-media artist Leonel Moura's R.U.R.: The Birth of the Robot, inspired by the Čapek play, was performed at Itaú Cultural in São Paulo, Brazil. It utilized actual robots on stage interacting with the human actors.\n[…]\nOn 26 November 2015 The RUR-Play: Prologue, the world's first version of R.U.R. with robots appearing in all the roles, was presented during the robot performance festival of Cafe Neu Romance at the gallery of the National Library of Technology in Prague.\n[…]\nEric, a robot constructed in Britain in 1928 for public appearances, bore the letters \"R.U.R.\" across its chest.\n[…]\nIn the 1977 Doctor Who serial \"The Robots of Death\", the robot servants turn on their human masters under the influence of an individual named Taren Capel.\n[…]\nIn the rebooted science fiction series The Outer Limits (1995), in the remake of the \"I, Robot\" episode from the original 1964 series, the business where the robot Adam Link is built is named \"Rossum Hall Robotics\".\n[…]\nIn the 2016 video game Deus Ex: Mankind Divided, R.U.R. is performed in an underground theater in a dystopian Prague by an \"augmented\" (cyborg) woman who believes herself to be the robot Helena.\n[…]\nThe main protagonist in Peter Brown’s The Wild Robot series (2016-2023) is “a robot character named Rozzum (a subtle nod to Čapek’s play)”.\n[…]\nIn the 2024 American animated movie The Wild Robot, the model name of the protagonist robot is \"ROZZUM Unit 7134\".\n[…]\nOnline facsimile version of the 1920 first edition in Czech."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Robot",
        "situacao": "ok",
        "texto": "A robot is a machine, especially one programmable via a computer, capable of automatically carrying out a complex series of actions. A robot can be guided by an external or internal control device. Robots may be humanoid, but most are task-performing machines prioritizing functionality over aesthetics.\n[…]\nThe word robot was introduced to the public by the Czech interwar writer Karel Čapek in his play R.U.R. (Rossum's Universal Robots), published in 1920. The play begins in a factory that uses a chemical substitute for protoplasm to manufacture living, simplified people called robots. The play does not focus in detail on the technology behind the creation of these living creatures, but in their appearance they prefigure modern ideas of androids, creatures who can be mistaken for humans.\n[…]\nFor instance, a laparoscopic surgery robot allows the surgeon to work inside a human patient on a relatively small scale compared to open surgery, significantly shortening recovery time. They can also be used to avoid exposing workers to the hazardous and tight spaces such as in duct cleaning. When disabling a bomb, the operator sends a small robot to disable it. Several authors have been using a device called the Longpen to sign books remotely.\n[…]\nThey looked like real women and could not only speak and use their limbs but were endowed with intelligence and trained in handwork by the immortal gods.\" The words \"robot\" or \"android\" are not used to describe them, but they are nevertheless mechanical devices human in appearance. \"The first use of the word Robot was in Karel Čapek's play R.U.R. (Rossum's Universal Robots) (written in 1920)\". Writer Karel Čapek was born in Czechoslovakia (Czech Republic).\n[…]\nTsai, L. W. (1999). Robot Analysis. Wiley. New York.\n[…]\nČapek, Karel (1920). R.U.R. , Aventinum, Prague."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/R.U.R.",
        "situacao": "ok",
        "texto": "R. U. R. é uma peça teatral de ficção científica de 1920 escrita pelo tcheco Karel Čapek. R. U. R. significa Rossumovi Univerzální Roboti (Robôs Universais de Rossum). A frase em inglês \"Rossum's Universal Robots\" foi usada como legenda na versão checa original. A peça estreou no dia 25 de janeiro de 1921, e introduziu a palavra \"robô\" em variados idiomas e na ficção científica como um todo.\n[…]\nA peça começa em uma fábrica que faz pessoas artificiais, chamadas de roboti (robôs), a partir de matéria orgânica sintética. Elas não são exatamente robôs na definição atual do termo: elas são criaturas de carne e osso que estão mais próximas do conceito moderno de clones do que de máquinas. Elas podem ser confundidas com humanos e podem pensar por si mesmas. Elas parecem felizes em trabalhar para os seres humanos inicialmente, mas uma rebelião de robôs leva à extinção da raça humana.\n[…]\nA peça introduziu a palavra robô, que deslocou palavras mais antigas como \"automaton\" ou \"android\" em idiomas de todo o mundo. Em um artigo na Lidové noviny, Karel Capek nomeou seu irmão Josef Čapek (1887-1945) como o verdadeiro inventor da palavra. Em checo, robota significa trabalho forçado do tipo que os servos tinham que executar nas terras de seus mestres e é derivado de rab, que significa \"escravo\".\n[…]\nA obra foi publicada em Praga pela Aventinum em 1920, e estreou naquela cidade em 25 de janeiro de 1921, sendo encenada no palco do Teatro Nacional. Ela foi traduzida do checo para o inglês por Paul Selver e adaptada para o inglês por Nigel Playfair, em 1923. A tradução de Selver resumiu a peça e eliminou um personagem, um robô chamado \"Damon\". Em abril de 1923 Basil Dean produziu R. U. R. para o Reandean Company no St Martin's Theatre, em Londres.\n[…]\nR. U. R. checa, a partir de Projeto Gutenberg\n[…]\nOnline fac-símile da versão da década de 1920, primeira edição em checo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Telescópio",
      "descricao": "Instrumento óptico que usa lentes ou espelhos para observar objetos distantes."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Proposto em 1611 num banquete em homenagem a Galileu, o nome telescópio vem do grego e significa o quê?",
    "resposta": "Ver de longe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Telescope"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Telescope",
        "situacao": "ok",
        "texto": "A telescope is a device used to observe distant objects by their emission, absorption, or reflection of electromagnetic radiation. Originally, it was an optical instrument using lenses, curved mirrors, or a combination of both to observe distant objects – an optical telescope. Nowadays, the word \"telescope\" is defined as a wide range of instruments capable of detecting different regions of the ele\n[…]\nThe word telescope was coined in 1611 by the Greek mathematician Giovanni Demisiani for one of Galileo Galilei's instruments presented at a banquet at the Accademia dei Lincei. In the Starry Messenger, Galileo had used the Latin term perspicillum. The root of the word is from the Ancient Greek τῆλε, tele 'far' and σκοπεῖν, skopein 'to look or see'; τηλεσκόπος, teleskopos 'far-seeing'.\n[…]\nThe idea that the objective, or light-gathering element, could be a mirror instead of a lens was being investigated soon after the invention of the refracting telescope. The potential advantages of using parabolic mirrors—reduction of spherical aberration and no chromatic aberration—led to many proposed designs and several attempts to build reflecting telescopes. In 1668, Isaac Newton built the first practical reflecting telescope, of a design which now bears his name, the Newtonian reflector.\n[…]\nThe refracting telescope which uses lenses to form an image.\n[…]\nA Fresnel imager is a proposed ultra-lightweight design for a space telescope that uses a Fresnel lens to focus light.\n[…]\nGalileo to Gamma Cephei – The History of the Telescope. Archived 8 May 2013 at the Wayback Machine\n[…]\nThe Galileo Project – The Telescope by Al Van Helden\n[…]\nTaylor, Harold Dennis; Gill, David (1911). \"Telescope\" . Encyclopædia Britannica. Vol. 26 (11th ed.). pp. 557–573.\n[…]\nOutside the Optical: Other Kinds of Telescopes\n[…]\nGray, Meghan; Merrifield, Michael (2009). \"Telescope Diameter\". Sixty Symbols. Brady Haran for the University of Nottingham."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Telesc%C3%B3pio",
        "situacao": "ok",
        "texto": "Um telescópio é um dispositivo usado para observar objetos distantes por meio de sua emissão, absorção ou reflexão de radiação eletromagnética. Originalmente, era um instrumento óptico que usava lentes, espelhos curvos ou uma combinação de ambos para observar objetos distantes - um telescópio óptico. Hoje em dia, a palavra \"telescópio\" é definida como uma ampla gama de instrumentos capazes de dete\n[…]\nA palavra telescópio foi cunhada em 1611 pelo matemático grego Giovanni Demisiani para um dos instrumentos de Galileo Galilei apresentados em um banquete na Accademia dei Lincei. No Mensageiro Sideral, Galileu usou o termo latino perspicillum. A raiz da palavra é do Grego Antigo τῆλε, romanizado tele 'longe' e σκοπεῖν, skopein 'olhar ou ver'; τηλεσκόπος, teleskopos 'ver ao longe'.\n[…]\nAs desvantagens de lançar um telescópio espacial incluem custo, tamanho, capacidade de manutenção e atualizações.\n[…]\nCom fótons de comprimentos de onda mais curtos e frequências mais altas, são usadas óticas de incidência oblíqua, em vez de óticas totalmente refletoras. Telescópios como TRACE e SOHO usam espelhos especiais para refletir extremo ultravioleta, produzindo imagens de resolução mais alta e mais brilhantes do que seria possível de outra forma. Uma abertura maior não significa apenas que mais luz é coletada, mas também permite uma resolução angular mais fina.\n[…]\nO telescópio refrator que usa lentes para formar uma imagem. O telescópio refletor que usa um arranjo de espelhos para formar uma imagem. O telescópio catadióptrico que usa espelhos combinados com lentes para formar uma imagem. Um imager de Fresnel é um design ultraleve proposto para um telescópio espacial que usa uma lente de Fresnel para focar a luz.\n[…]\nAlém desses tipos ópticos básicos, existem muitos subtipos de design óptico variado classificados pela tarefa que desempenham, como astrográfos, cometa-seekers e telescópios solares.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Kodak",
      "descricao": "Empresa americana de fotografia fundada por George Eastman, que lançou em 1888 a primeira câmera Kodak."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "George Eastman inventou a palavra Kodak para batizar sua câmera de 1888. Que letra do alfabeto ele considerava forte e marcante?",
    "resposta": "A letra K",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kodak"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kodak",
        "situacao": "ok",
        "texto": "The Eastman Kodak Company, referred to simply as Kodak ( ), is an American public company that produces various products related to its historic roots in film photography. The company is headquartered in Rochester, New York, and is incorporated in New Jersey. It is best known for photographic film products, which it brought to a mass market for the first time.\n[…]\nAccording to a 1920 ad, the name \"was simply invented – made up from letters of the alphabet to meet our trademark requirements. It was short and euphonious and likely to stick in the public mind.\" The Kodak name was trademarked by Eastman in 1888.\n[…]\nIn 1888, the Kodak camera was patented by Eastman. It was a box camera with a fixed-focus lens on the front and no viewfinder; two V shape silhouettes at the top aided in aiming in the direction of the subject. At the top, it had a rotating key to advance the film, a pull-string to set the shutter, and a button on the side to release it, exposing the celluloid film. Inside, it had a rotating bar to operate the shutter.\n[…]\nIn 1934, Kodak entered a partnership with Edwin Land to supply polarized lenses, after briefly considering an offer to purchase Land's patents. Land would later launch the Polaroid Corporation and invented the first instant camera using emulsions supplied by Kodak.\n[…]\nKodak encountered several challenges from rival patents for film and cameras. These began while Eastman was still developing his first camera, when he was forced to pay inventor David Houston for a license to his pre-existing patents. A major lawsuit for patent infringement would come from rival film producer Ansco. Inventor Hannibal Goodwin had filed his own patent for nitrocellulose film in 1887, before the one owned by Kodak, but his was initially denied by the patent office.\n[…]\nGeorge Eastman, 1925–1934\n[…]\nEastman Kodak. Story of the Kodak Camera (1948)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kodak",
        "situacao": "ok",
        "texto": "A Eastman Kodak Company (referida simplesmente como Kodak) é uma companhia americana que produz vários produtos relacionados com a sua base histórica no analógico fotografia. A empresa está sediada em Rochester, Nova Iorque. A Kodak fornece embalagens, impressão funcional, comunicações gráficas e serviços profissionais para empresas em todo o mundo. Seus principais segmentos de negócios são Sistem\n[…]\nA Kodak foi fundada por George Eastman e Henry A. Strong em 4 de setembro de 1888. O nome foi inventado, a partir de um jogo de palavras cruzadas, ele e sua esposa usaram a letra \"K\", que o parecia ser uma letra forte. Compilaram as outras letras e formaram a palavra que foi patenteada. Durante a maioria do século XX a Kodak manteve uma posição dominante no cinema fotográfico.\n[…]\nEm janeiro de 2012 a Kodak entrou com um pedido de proteção contra falência, no Tribunal de Falências dos Estados Unidos. Pouco tempo depois, a Kodak anunciou que iria parar de fazer câmeras digitais, câmeras de vídeo de bolso e porta-retratos digitais e se concentrar no mercado corporativo de imagem digital. As câmeras digitais ainda são vendidas sob a marca Kodak pela JK Imaging Ltd. sob um contrato com a Kodak.\n[…]\nEmbora a Kodak tenha sido a criadora da primeira câmera fotográfica digital, em 1975, a empresa preferiu continuar a apostar no mercado de fotografia analógica. Apenas em 2003 decidiu entrar com mais força no setor digital, contudo, nesse momento as empresas japonesas já dominavam totalmente o mercado.\n[…]\nEssa demora para ingressar no setor digital praticamente levou a companhia, outrora bilionária, à falência. Como grande parte das receitas da Kodak era proveniente da fabricação de filmes fotográficos, a expansão das câmeras digitais, que ela mesmo havia inventado em 1975, causou súbita redução na demanda por tais filmes, afetando significativamente a economia da empresa.\n[…]\n«Kodak Portugal»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Kodak",
      "descricao": "Empresa americana de fotografia fundada por George Eastman, que lançou em 1888 a primeira câmera Kodak."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Lançada em 1888, a primeira câmera Kodak já vinha carregada de fábrica com filme para quantas fotos?",
    "resposta": "Cem",
    "distratores": [
      "Doze",
      "Trinta e seis",
      "Quinhentas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kodak",
      "https://en.wikipedia.org/wiki/George_Eastman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kodak",
        "situacao": "ok",
        "texto": "The Eastman Kodak Company, referred to simply as Kodak ( ), is an American public company that produces various products related to its historic roots in film photography. The company is headquartered in Rochester, New York, and is incorporated in New Jersey. It is best known for photographic film products, which it brought to a mass market for the first time.\n[…]\nIn 1888, the Kodak camera was patented by Eastman. It was a box camera with a fixed-focus lens on the front and no viewfinder; two V shape silhouettes at the top aided in aiming in the direction of the subject. At the top, it had a rotating key to advance the film, a pull-string to set the shutter, and a button on the side to release it, exposing the celluloid film. Inside, it had a rotating bar to operate the shutter.\n[…]\nKodak encountered several challenges from rival patents for film and cameras. These began while Eastman was still developing his first camera, when he was forced to pay inventor David Houston for a license to his pre-existing patents. A major lawsuit for patent infringement would come from rival film producer Ansco. Inventor Hannibal Goodwin had filed his own patent for nitrocellulose film in 1887, before the one owned by Kodak, but his was initially denied by the patent office.\n[…]\nShortly after the announcement, Polaroid filed a complaint for patent infringement in the U.S. District Court District of Massachusetts, beginning a lawsuit which would last a decade. Polaroid Corporation v. Eastman Kodak Company was decided in Polaroid's favor in 1985, and after a short period of appeals, Kodak was forced to exit the instant camera market immediately in 1986. On October 12, 1990, Polaroid was awarded $909 million in damages.\n[…]\nEastman Kodak. Story of the Kodak Camera (1948)\n[…]\nKodak Camera Catalog Info at Historic Camera. Archived May 24, 2013, at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/George_Eastman",
        "situacao": "ok",
        "texto": "George Eastman  (July 12, 1854 – March 14, 1932) was an American innovator and entrepreneur who founded the Eastman Kodak Company and helped to bring the photographic use of roll film into the mainstream. After a decade of experiments in photography, he patented and sold a roll film camera, making amateur photography accessible to the general public for the first time. Working as the treasurer and\n[…]\nIn 1885, he received a patent for a film roll and then focused on creating a camera to use the rolls. In 1888, he patented and released the Kodak camera (\"Kodak\" being a word Eastman created). It was sold loaded with enough roll film for 100 exposures. When all the exposures had been made, the photographer mailed the camera back to the Eastman company in Rochester, along with $10.\n[…]\nThe separation of photo-taking from the difficult process of film development was novel and made photography more accessible to amateurs than ever before, and the camera was immediately popular with the public. By August 1888, Eastman was struggling to meet orders, and he and his employees soon had several other cameras in development. The rapidly-growing Eastman Dry Plate Company was reorganized as the Eastman Company in 1889, and then incorporated as Eastman Kodak in 1892.\n[…]\nKodak's growth was sustained during the 20th century by innovations in film and cameras, including the Brownie camera, which was marketed to children. Eastman took interest in color photography in 1904, and funded experiments in color film production for the next decade. The resulting product, created by John Capstaff, was a two-color process named Kodachrome. Later, in 1935, Kodak would release the more famous second Kodachrome, the first marketed integral tripack film.\n[…]\nU.S. patent 388,850 \"Camera\", filed March 1888, issued September 1888.\n[…]\nIn 1934, the George Eastman Monument at Kodak Park (now Eastman Business Park) was unveiled."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kodak",
        "situacao": "ok",
        "texto": "A Eastman Kodak Company (referida simplesmente como Kodak) é uma companhia americana que produz vários produtos relacionados com a sua base histórica no analógico fotografia. A empresa está sediada em Rochester, Nova Iorque. A Kodak fornece embalagens, impressão funcional, comunicações gráficas e serviços profissionais para empresas em todo o mundo. Seus principais segmentos de negócios são Sistem\n[…]\nA Kodak foi fundada por George Eastman e Henry A. Strong em 4 de setembro de 1888. O nome foi inventado, a partir de um jogo de palavras cruzadas, ele e sua esposa usaram a letra \"K\", que o parecia ser uma letra forte. Compilaram as outras letras e formaram a palavra que foi patenteada. Durante a maioria do século XX a Kodak manteve uma posição dominante no cinema fotográfico.\n[…]\nA onipresença da empresa era tal que o seu slogan \"momento Kodak\" entrou no léxico comum para descrever um evento pessoal que merecia ser registrado para a posteridade. Kodak começou a ter dificuldades financeiras no final da década de 1990, como resultado do declínio nas vendas de filmes fotográficos e sua lentidão na mudança para a fotografia digital, apesar de desenvolver a primeira câmera digital independente.\n[…]\nEmbora a Kodak tenha sido a criadora da primeira câmera fotográfica digital, em 1975, a empresa preferiu continuar a apostar no mercado de fotografia analógica. Apenas em 2003 decidiu entrar com mais força no setor digital, contudo, nesse momento as empresas japonesas já dominavam totalmente o mercado.\n[…]\nEssa demora para ingressar no setor digital praticamente levou a companhia, outrora bilionária, à falência. Como grande parte das receitas da Kodak era proveniente da fabricação de filmes fotográficos, a expansão das câmeras digitais, que ela mesmo havia inventado em 1975, causou súbita redução na demanda por tais filmes, afetando significativamente a economia da empresa.\n[…]\n«Kodak Portugal»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "James Watt",
      "descricao": "Engenheiro, inventor e químico escocês (1736–1819) que aperfeiçoou a máquina a vapor de Newcomen."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que unidade de medida de potência, estampada em lâmpadas e chuveiros, homenageia o engenheiro escocês que aperfeiçoou a máquina a vapor?",
    "resposta": "Watt",
    "fonte": [
      "https://en.wikipedia.org/wiki/Watt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Watt",
        "situacao": "ok",
        "texto": "The watt (symbol: W) is the unit of power or radiant flux in the International System of Units (SI), equal to 1 joule per second or 1 kg⋅m2⋅s−3. It is used to quantify the rate of energy transfer. The watt is named in honor of James Watt (1736–1819), an 18th-century Scottish inventor, mechanical engineer, and chemist who in 1776 improved the Newcomen engine with his own steam engine, which became \n[…]\nTwo additional unit conversions for watt can be found using the above equation and Ohm's law.\n[…]\nThe watt is named after the Scottish inventor James Watt. The unit name was proposed by C. William Siemens in August 1882 in his President's Address to the Fifty-Second Congress of the British Association for the Advancement of Science. Noting that units in the practical system of units were named after leading physicists, Siemens proposed that watt might be an appropriate name for a unit of power.\n[…]\nWatt\n[…]\nWhen describing alternating current (AC) electricity, another distinction is made between the watt and the volt-ampere. While these units are equivalent for simple resistive circuits, they differ when loads exhibit electrical reactance.\n[…]\nFor example, when a light bulb with a power rating of 100W is turned on for one hour, the energy used is 100 watt hours (W·h), 0.1 kilowatt hour, or 360 kJ. This same amount of energy would light a 40-watt bulb for 2.5 hours, or a 50-watt bulb for 2 hours.\n[…]\nThe watt-second is a unit of energy, equal to the joule. One kilowatt hour is 3,600,000 watt seconds.\n[…]\nWhile a watt per hour is a unit of rate of change of power with time, it is not correct to refer to a watt (or watt-hour) as a watt per hour.\n[…]\nKibble balance (formerly known as a watt balance)\n[…]\nOne Watt Initiative\n[…]\nMedia related to Watt at Wikimedia Commons\n[…]\nThe dictionary definition of watt at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Watt",
        "situacao": "ok",
        "texto": "O watt (símbolo: W), ou vátio, é a unidade de potência do Sistema Internacional de Unidades (SI). É equivalente a um joule por segundo.\n[…]\nA unidade recebeu este nome em homenagem a James Watt, pelas suas contribuições para o desenvolvimento do motor a vapor, e foi adotada pelo segundo congresso da associação britânica para o avanço da ciência em 1882.\n[…]\nQuando um objeto em velocidade constante de um metro por segundo é antagônico a uma força constante de um newton, a taxa de trabalho é de 1 watt.\n[…]\nNo eletromagnetismo, um watt é a taxa de trabalho resultante quando um ampere (\n[…]\nDuas conversões de unidades adicionais podem ser obtidas a partir da Lei de Ohm.\n[…]\n) é a unidade de medida no SI para resistência elétrica.\n[…]\nO termo técnico watt elétrico (símbolo: We) corresponde à produção de potência elétrica. Seus múltiplos são  o megawatt elétrico (MWe) e o gigawatt elétrico (GWe').\n[…]\nO termo técnico watt térmico (símbolo : Wt ou Wth) corresponde à produção de potência térmica. Seus múltiplos são o megawatt térmico (MWt ou MWth) e o gigawatt térmico (GWt ou GWth).\n[…]\nEmbora de uso corrente, a adoção de símbolos dotados de índices não é recomendada pelo Escritório Internacional de Pesos e Medidas (BIPM), que só considera a existência de um único watt, pois é a quantidade medida que muda, não a unidade utilizada para a medida.\n[…]\nEm mecânica o watt é a potência desenvolvida por uma força de um newton aplicada a um ponto que se move um metro em um segundo. Ou seja, se um ponto sobre o qual se aplica uma força de um newton se move a uma velocidade de 1 m/s, então a potência é igual a 1 watt (1 W = 1 Nm/s):\n[…]\nTabela de conversão de unidades",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Zepelim",
      "descricao": "Tipo de dirigível de estrutura rígida desenvolvido na Alemanha no fim do século dezenove."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os grandes dirigíveis de estrutura rígida do início do século vinte ganharam um nome que homenageia que conde alemão?",
    "resposta": "Ferdinand von Zeppelin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zeppelin",
      "https://en.wikipedia.org/wiki/Ferdinand_von_Zeppelin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zeppelin",
        "situacao": "ok",
        "texto": "A Zeppelin is a type of rigid airship named after the German inventor Ferdinand von Zeppelin (German pronunciation: [ˈt͡sɛpəliːn] ) who pioneered rigid airship development at the beginning of the 20th century. Zeppelin's notions were first formulated in 1874 and developed in detail in 1893. They were patented in Germany in 1895 and in the United States in 1899. After the outstanding success of the\n[…]\nCount Ferdinand von Zeppelin's interest in airship development began in 1874, when he was inspired by a lecture given by Heinrich von Stephan on the subject of \"World Postal Services and Air Travel\" to outline the basic principle of his later craft in a diary entry dated 25 March 1874. It describes a large rigidly framed outer envelope containing several separate gasbags.\n[…]\nAnother two years passed before 18 September 1928, when the new dirigible, christened Graf Zeppelin in honour of the Count, flew for the first time. With a total length of 236.6 metres (776 ft) and a volume of 105,000 m3, it was the largest dirigible to have been built at the time. Eckener's initial purpose was to use Graf Zeppelin for experimental and demonstration purposes to prepare the way for regular airship traveling, carrying passengers and mail to cover the costs.\n[…]\nAs with the October 1928 flight to New York, Hearst had placed a reporter, Grace Marguerite Hay Drummond-Hay, on board: she therefore became the first woman to circumnavigate the globe by air. From there, Graf Zeppelin flew to Friedrichshafen, then Tokyo, Los Angeles, and back to Lakehurst, in 21 days, 5 hours, and 31 minutes. Including the initial and final trips between Friedrichshafen and Lakehurst and back, the dirigible had travelled 49,618 kilometres (30,831 mi).\n[…]\nZeppelin Museum Friedrichshafen\n[…]\nZeppelin Luftschifftechnik GmbH – The original company, now developing the Zeppelin NT\n[…]\nDark Autumn: The 1916 German Zeppelin Offensive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ferdinand_von_Zeppelin",
        "situacao": "ok",
        "texto": "Count Ferdinand von Zeppelin (German: Ferdinand Adolf Heinrich August Graf von Zeppelin; 8 July 1838 – 8 March 1917) was a German general and later inventor of the Zeppelin rigid airships. His name became synonymous with airships and dominated long-distance flight until the 1930s. He founded the company Luftschiffbau Zeppelin.\n[…]\nFerdinand was the son of Württemberg Minister and Hofmarschall Friedrich Jerôme Wilhelm Karl Graf von Zeppelin (1807–1886) and his wife Amélie Françoise Pauline (born Macaire d'Hogguer) (1816–1852). Ferdinand spent his childhood with his sister and brother at their Girsberg manor near Konstanz, where he was educated by private tutors. Ferdinand married Isabella Freiin von Wolff in Berlin.\n[…]\nFerdinand von Zeppelin served as an official observer with the Union Army during the U.S Civil War. During the Peninsular Campaign, he visited the balloon camp of Thaddeus S. C. Lowe shortly after Lowe's services were terminated by the Army. Zeppelin then travelled to St. Paul, where the German-born former Army balloonist John Steiner offered tethered flights. His first ascent in a balloon is said to have been the inspiration of his later interest in aeronautics.\n[…]\nZeppelin\n[…]\nVömel, Alexander (1909–1933). Graf Ferdinand von Zeppelin – Ein Mann der Tat.\n[…]\nLiterature by and about Ferdinand von Zeppelin in the German National Library catalogue\n[…]\n\"Biographie: Ferdinand Graf von Zeppelin, 1838–1917\" (in German). Deutschen Historischen Museums. Retrieved 12 September 2009.\n[…]\nMichael \"Walter\" Walz. \"Stuttgart im Bild – Ferdinand Graf von Zeppelin\" (in German). Deutschen Historischen Museums. Retrieved 12 September 2009. (Gravestone in Stuttgart, biography and images)\n[…]\nNewspaper clippings about Ferdinand von Zeppelin in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zepelim",
        "situacao": "ok",
        "texto": "Zeppelin ou Zepelim é um tipo de aeróstato rígido, mais especificamente um dirigível, cujo nome é uma homenagem ao Conde alemão Ferdinand Von Zeppelin, que foi pioneiro no desenvolvimento de dirigíveis rígidos no início do século XX. As primeiras ideias de Zeppelin foram formuladas em 1874 e desenvolvidas em detalhes em 1893, sendo patenteadas na Alemanha em 1895 e nos Estados Unidos em 1899.\n[…]\nOs zepelins fizeram os seus primeiros voos comerciais em 1910, pela Deutsche Luftschiffahrts-Aktiengesellschaft-AG (DELAG), a primeira companhia aérea do mundo em serviço comercial e, quatro anos após o início de suas operações, em meados de 1914, a DELAG já havia transportado mais de 10 mil passageiros pagantes em mais de 1 500 voos. Após o enorme sucesso do projeto Zeppelin, a palavra Zeppelin passou a ser comumente utilizada para se referir a todos os dirigíveis rígidos.\n[…]\nO interesse do conde Ferdinand von Zeppelin no desenvolvimento de dirigíveis começou em 1874, quando ele se inspirou em uma palestra dada por Heinrich von Stephan, sobre o tema “Serviços postais mundiais e viagens aéreas”, para esboçar os princípios básicos de seu futuro aeróstato em um diário datado de 25 de Março de 1874. No diário, é descrito um grande envelope exterior, rigidamente emoldurado contendo várias cavidades de ar separadas.\n[…]\nImpelido pelo desejo de continuar experimentando, o Conde Von Zeppelin comprou dos outros acionistas a aeronave e os equipamentos, mas acabou eventualmente desmontando a nave em 1901.\n[…]\nEsse acidente teria terminado os experimentos de Zeppelin, mas graças aos seus trabalhos, seus voos haviam gerado grande interesse público e um senso de orgulho nacional e doações espontâneas começaram a chegar, totalizando mais de seis milhões de marcos. Essas doações permitiram o Conde fundar a Luftschiffbau Zeppelin GmbH (construção de dirigíveis Zeppelin Ltd.) e a Fundação Zeppelin.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Dirigível número 6",
      "descricao": "Dirigível de Alberto Santos-Dumont que contornou a Torre Eiffel e venceu o Prêmio Deutsch."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano Santos-Dumont contornou a Torre Eiffel com seu dirigível número seis e ganhou o Prêmio Deutsch?",
    "resposta": "1901",
    "fonte": [
      "https://en.wikipedia.org/wiki/Santos-Dumont_No._6",
      "https://en.wikipedia.org/wiki/Deutsch_de_la_Meurthe_prize"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Santos-Dumont_No._6",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Deutsch_de_la_Meurthe_prize",
        "situacao": "ok",
        "texto": "Henri Deutsch de la Meurthe (French: [ɑ̃ʁi døtsʃ də la mœʁt]; 25 September 1846 – 24 November 1919), born Salomon Henry Deutsch, was a successful French petroleum businessman (known as the \"Oil King of Europe\"), and a supporter of early aviation. He sponsored a number of prizes to encourage the development of aviation technologies, including the Grand Prix d'Aviation and the Deutsch de la Meurthe \n[…]\nHenri Deutsch de la Meurthe was posthumously made Commander of the Legion of Honor on November 20, 1912.\n[…]\nIn April 1900, Henri offered the Deutsch de la Meurthe prize, also simply known as the Deutsch prize, of 100,000 francs to the first machine capable of flying a round trip from the Parc Saint Cloud to the Eiffel Tower in Paris and back in less than 30 minutes. The winner of the prize needed to maintain an average ground speed of at least 22 km/h (14 mph) to cover the round trip distance of 11 km (6.8 mi) in the allotted time. The prize was to be available from May 1, 1900, to October 1, 1903.\n[…]\nTo win the prize, Alberto Santos-Dumont decided to build the Santos-Dumont No. 5, a  larger airship than his earlier craft. On August 8, 1901, during one of his attempts, the dirigible began to lose hydrogen gas. It started to descend and was unable to clear the roof of the Trocadero Hotel. Santos-Dumont was left hanging in a basket from the side of the hotel. With the help of the Paris fire brigade, he climbed to the roof without injury.\n[…]\nOn October 19, 1901, after several attempts and trials, Santos-Dumont launched his Number 6 airship at 2:30 pm. After only nine minutes of flight, Santos-Dumont had rounded the Eiffel Tower, but then suffered an engine failure. To restart the engine, he had to climb back over the gondola rail without a safety harness. The attempt was successful, and he crossed the finish line in 29 minutes 30 seconds."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Vacina antirrábica",
      "descricao": "Vacina contra a raiva desenvolvida por Louis Pasteur e Émile Roux no século dezenove."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década Louis Pasteur aplicou pela primeira vez sua vacina contra a raiva num menino mordido por um cão?",
    "resposta": "Década de 1880",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rabies_vaccine",
      "https://en.wikipedia.org/wiki/Joseph_Meister"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rabies_vaccine",
        "situacao": "ok",
        "texto": "A rabies vaccine is a vaccine used to prevent rabies. There are several rabies vaccines available that are both safe and effective. Vaccinations must be administered prior to rabies virus exposure or within the latent period after exposure to prevent the disease. Transmission of rabies virus to humans typically occurs through a bite or scratch from an infectious animal, but exposure can occur thro\n[…]\nVirtually all infections with rabies resulted in death until two French scientists, Louis Pasteur and Émile Roux, developed the first rabies vaccination in 1885. Nine-year-old Joseph Meister (1876–1940), who had been mauled by a rabid dog, was the first human to receive this vaccine. The treatment started with a subcutaneous injection on 6 July 1885, at 8:00 pm, which was followed with 12 additional doses administered over the following 10 days.\n[…]\nAfter the rabies vaccine created by Louis Pasteur was first introduced in France in 1885, its use soon spread to other countries, including outside of Europe. The vaccine was first used in the United States in 1886. In 1888, France established the Pasteur Institute. During the following decades, several similar specialized rabies prevention centers (\"Pasteur Institutes\") appeared around the world. By 1909 there were 75 such rabies centers worldwide, including in French Indochina.\n[…]\nSeveral movies deal with rabies vaccine, notably the 1936 The Story of Louis Pasteur, which focuses on the life and achievements of Louis Pasteur, played by Paul Muni. The 1966 film Rage features a man bitten by a rabid dog who engages in a race against time to reach the nearest medical establishment to get the vaccine."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Joseph_Meister",
        "situacao": "ok",
        "texto": "Joseph Meister (21 February 1876 – 24 June 1940) was the first person to be inoculated against rabies by Louis Pasteur, and likely the first person to be successfully treated for the infection, which has a >99% fatality rate once symptoms set in.\n[…]\nIn 1885, nine-year-old Meister was badly bitten by a supposedly rabid dog. After consulting with Alfred Vulpian and Jacques-Joseph Grancher and obtaining their assistance, Louis Pasteur agreed to inoculate the boy with spinal tissue from rabid rabbits, which he had successfully used to prevent rabies in dogs. The treatment was successful and the boy did not develop rabies.\n[…]\nAlthough often repeated, the version of his suicide stating he chose to take his life rather than allow the Wehrmacht to enter the Pasteurs' crypt is not sustainable. Instead, a contemporary journal article as well as the testimony of Meister's granddaughter indicate that, fearing for his family's safety, Meister asked them to leave, while he stayed behind to protect the Pasteur institute from the German soldiers. He incorrectly believed this had resulted in them being captured by the Nazis.\n[…]\nMeister was played by Dickie Moore in the 1936 film The Story of Louis Pasteur. The story of Meister's potentially dangerous inoculation against rabies by Pasteur was also featured in an episode of the TV series Dark Matters: Twisted But True and the 1974 BBC drama-documentary series Microbes and Men.\n[…]\nGerald L. Geison. The Private Science of Louis Pasteur (Princeton University Press, 1995) (ISBN 0691034427)\n[…]\nRecording of Meister's account of his meeting with Pasteur"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vacina_antirr%C3%A1bica",
        "situacao": "ok",
        "texto": "A vacina antirrábica é uma vacina usada para prevenir a raiva. Há uma série de vacinas disponíveis que são seguras e eficazes e podem ser usadas para prevenir a raiva antes e durante um período de tempo após a exposição ao vírus, como, por exemplo, pela mordida de um cão ou morcego. A imunidade que se desenvolve é de longa duração, depois de um curso completo. As doses são normalmente administrada\n[…]\nApós a exposição a vacinação é normalmente utilizado junto com raiva de imunoglobulinas. Recomenda-se que aqueles que estão em alto risco de exposição serem vacinados antes da exposição potencial. As vacinas são eficazes em humanos e outros animais. Na vacinação de cães é muito eficaz na prevenção da propagação da raiva para os seres humanos.\n[…]\nA vacinação antirrábica pode ser usada com segurança em todos os grupos etários. Cerca de 35 a 45 por cento das pessoas podem desenvolver vermelhidão e dor no local da injeção por um breve período. Cerca de 5 a 15% das pessoas podem ter febre, dores de cabeça ou náuseas. Após a exposição ao vírus da raiva não há contra-indicação para seu uso. A maioria das vacinas não contêm timerosal.\n[…]\nA primeira vacina antirrábica foi introduzida em 1885, que foi seguida por uma versão melhorada em 1908. Milhões de pessoas em todo o mundo foram vacinadas e estima-se que isso salva mais de 250 000 pessoas por ano. Está na Lista de Medicamentos Essenciais da Organização Mundial de Saúde, os medicamentos mais necessários, eficazes e seguros em um sistema de saúde. O custo bruto em países em desenvolvimento está entre 44 e 78 dólares para um curso de tratamento em 2014.\n[…]\nNos Estados Unidos, o custo do tratamento com a vacina antirrábica é de mais de 750 dólares.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Irmãos Montgolfier",
      "descricao": "Joseph-Michel e Jacques-Étienne Montgolfier, franceses que criaram o balão de ar quente em 1783."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que século pessoas voaram pela primeira vez, a bordo de um balão de ar quente dos irmãos Montgolfier?",
    "resposta": "Século dezoito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Montgolfier_brothers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Montgolfier_brothers",
        "situacao": "ok",
        "texto": "The Montgolfier brothers – Joseph-Michel Montgolfier (French: [ʒozɛf miʃɛl mɔ̃ɡɔlfje]; 26 August 1740 – 26 June 1810) and Jacques-Étienne Montgolfier ([ʒak etjɛn mɔ̃ɡɔlfje]; 6 January 1745 – 2 August 1799) – were aviation pioneers, balloonists and paper manufacturers from the commune Annonay in Ardèche, France. They invented the Montgolfière-style hot air balloon, globe aérostatique, which launche\n[…]\nIn December 1783, father Pierre Montgolfier was elevated to the nobility and the hereditary appellation of de Montgolfier by King Louis XVI.\n[…]\nBoth brothers invented a process to manufacture transparent paper similar to vellum, imitating the technique of the English, followed by the papermakers Johannot and Réveillon. In 1796, Joseph Michel Montgolfier invented the first self-acting hydraulic ram, a water pump to raise water for his paper mill at Voiron. In 1772, the British clockmaker John Whitehurst had invented its precursor, the \"pulsation engine\".\n[…]\nIn 1797, Montgolfier's friend Matthew Boulton took out a British patent on his behalf.\n[…]\nIn 1799, Etienne de Montgolfier died on the way from Lyon to Annonay. His son-in-law, Barthélémy Barou de la Lombardière de Canson (1774–1859), succeeded him as the head of the company, thanks to his marriage with Alexandrine de Montgolfier. The company became Montgolfier et Canson in 1801, then Canson-Montgolfier in 1807. In 1810, Joseph-Michel died in Balaruc-les-Bains.\n[…]\nThe Montgolfier Company in Annonay still exists under the name Canson. It produces fine art papers, school drawing papers and digital fine art and photography papers sold in 150 countries.\n[…]\nIn 1983, the Montgolfier brothers were inducted into the International Air & Space Hall of Fame at the San Diego Air & Space Museum.\n[…]\nAdélaïde de Montgolfier\n[…]\n\"Lighter than air: the Montgolfier brothers\"\n[…]\n\"Balloons and the Montgolfier brothers\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Irm%C3%A3os_Montgolfier",
        "situacao": "ok",
        "texto": "Os Irmãos Montgolfier: Joseph-Michel (Annonay, 26 de agosto de 1740 — Balaruc-les-Bains, 26 de junho de 1810) e Jacques-Étienne (Annonay, 6 de janeiro de 1745 — Neuchâtel, 2 de agosto de 1799), foram dois irmãos inventores franceses, que construíram o primeiro balão tripulado do Mundo, que elevou Étienne aos céus em 5 de junho de 1783.\n[…]\nDecididos a fazer uma demonstração pública para reivindicar a autoria do invento, os irmãos Montgolfier construíram um balão em forma de esfera feito de serapilheira com três camadas de papel no interior, com capacidade de 790 m³ de ar pesando 225 kg, constituído de quatro partes (o topo e mais três laterais) seguras por 1,8 mil botões e uma rede de pesca reforçada.\n[…]\nAo que se sabe, Étienne Montgolfier foi o primeiro ser humano a levantar voo do solo, fazendo no mínimo um voo seguro por cordas do pátio da oficina de Réveillon no subúrbio de Paris conhecido como Faubourg Saint-Antoine, na provável date de 15 de outubro de 1783. Mais tarde naquele mesmo dia, Pilâtre de Rozier tornou-se o segundo ser humano a voar num balão atingindo cerca de 24 m de altitude, que era o comprimento da corda.\n[…]\nEm 21 de novembro de 1783, ocorreu o primeiro voo livre de seres humanos num balão, executado por Pilâtre juntamente com o oficial do exército, marquês d'Arlandes. O voo partiu das terras do castelo de la Muette (perto do parque Bois de Boulogne), lado Oeste de Paris. Eles voaram por 9 km a cerca de 910 m acima de Paris, depois de 25 minutos, o aparelho pousou entre os moinhos de Butte-aux-Cailles, tendo o voo sido abreviado por um princípio de incêndio no tecido que recobria o balão.\n[…]\nBalão\n[…]\nBalão de ar quente\n[…]\n\"Lighter than air: the Montgolfier brothers\"\n[…]\n\"Balloons and the Montgolfier brothers\"\n[…]\nPortrait des frères Montgolfier\n[…]\nMusée des papeteries Canson et Montgolfier",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Penny Black",
      "descricao": "Primeiro selo postal adesivo do mundo, lançado no Reino Unido em 1840."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O primeiro selo postal adesivo do mundo foi lançado em 1840. Em que país?",
    "resposta": "Reino Unido",
    "distratores": [
      "França",
      "Estados Unidos",
      "Brasil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Penny_Black"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Penny_Black",
        "situacao": "ok",
        "texto": "The Penny Black was the world's first adhesive postage stamp used in a public postal system. It was first issued in the United Kingdom on 1 May 1840 but was not valid for use until 6 May. The stamp features a profile of 21-year-old Queen Victoria.\n[…]\nA complete sheet of the Penny Black without check letters is held by the British Postal Museum. This unique item is in fact a plate proof and by definition not an imprimatur sheet.\n[…]\nAn original printing press for the Penny Black, the \"D\" cylinder press invented by Jacob Perkins and patented in 1819, is on display at the British Library in London. The total print run was 286,700 sheets, containing a total of 68,808,000 stamps. Many were saved, and in used condition they remain readily available to stamp collectors. The only known complete sheets of the Penny Black are owned by the British Postal Museum.\n[…]\nUniform Penny Post\n[…]\nMuir, Douglas N. Postal Reform and the Penny Black: A New Appreciation. London: National Postal Museum, 1990 ISBN 0-951594-80-X\n[…]\nNissen, Charles. Great Britain: The Penny Black: Its Plate Characteristics. Kent, [England]: F. Hugh Vallancey, 1948.\n[…]\nNissen, Charles and Bertram McGowan. The Plating of The Penny Black Postage Stamp Of Great Britain, 1840: with a description of each individual stamp on the eleven different plates, affording a guide to collectors in the reconstruction of the sheets. London: Stanley Gibbons, 1998 ISBN 0-85259-461-5\n[…]\nProud, Edward B. Penny Black Plates. Heathfield, East Sussex: International Postal Museum, 2015.\n[…]\nRigo de Righi, A. G. The Story of the Penny Black and Its Contemporaries. London: National Postal Museum, 1980 ISBN 0-9500018-7-2\n[…]\nThe 1840 Penny Black at the American National Postal Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/One_Penny_Black",
        "situacao": "ok",
        "texto": "O one penny black (um pêni preto) foi o primeiro selo postal do mundo. Começou a circular em Inglaterra a 6 de Maio de 1840. A ideia do selo postal para indicar pré-pagamento do correio foi de Sir Rowland Hill, incluída nas suas propostas de 1837 para a reforma do sistema postal Britânico. Era normal na época o destinatário pagar a postagem no recebimento da correspondência.\n[…]\nNo ano seguinte seria substituído pelo one penny red, pois a sua cor negra não permitia que os carimbos fossem visíveis e portanto era possível reutilizar os selos.\n[…]\nSistemas de entregas postais que utilizavam o que poderia ser selo adesivo existiam antes do Penny Black. Aparentemente a ideia teria já sido sugerida na Áustria, Suécia, e possivelmente Grécia.\n[…]\nInicialmente, os \"penny black\" tinham 3/4 de polegadas quadradas, mas foram modificados para as dimensões de 3/4 polegadas de largura por 7/8 polegadas de altura (algo aproximado de 19 x 22 mm) para acomodar a palavra \"POSTAGE\" no topo do desenho e \"ONE PENNY\" (um centavo) na parte inferior. Em primeiro plano, a imagem do perfil da Rainha Vitória em fundo negro.\n[…]\nO One Penny Black não é um selo raro. Foram impressas 286 700 folhas, totalizando 68 808 000 selos e uma considerável quantidade desses selos sobreviveu ao tempo, principalmente porque envelopes não eram usados com frequência. As cartas eram escritas diretamente em papéis de carta emitidos pela autoridade postal, que eram dobrados e selados. Então, se a carta era guardada, o selo sobrevivia.\n[…]\nA única folha completa de selos Penny Black conhecida pertence ao The British Postal Museum and Archive.\n[…]\ntwo penny blue",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Bertha Benz",
      "descricao": "Empresária alemã (1849–1944), esposa de Karl Benz, que fez em 1888 a primeira viagem longa de automóvel."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1888, na primeira viagem longa de automóvel, Bertha Benz reabasteceu o carro do marido em que tipo de estabelecimento?",
    "resposta": "Farmácia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bertha_Benz",
      "https://en.wikipedia.org/wiki/Bertha_Benz_Memorial_Route"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bertha_Benz",
        "situacao": "ok",
        "texto": "Bertha Benz (German: [ˈbɛʁta ˈbɛnts] ; née Cäcilie Bertha Ringer; 3 May 1849 – 5 May 1944) was a German automotive pioneer. She was the business partner, investor and wife of automobile inventor Carl Benz. On 5 August 1888, she became the first person to drive an internal-combustion-engined automobile over a long distance, field testing the Benz Patent-Motorwagen, inventing brake lining and solvin\n[…]\nOn 5 August 1888, 39-year-old Bertha Benz drove from Mannheim to Pforzheim with her sons Richard and Eugen, thirteen and fifteen years old respectively, in a Model III, without telling her husband and without permission of the authorities, thus becoming the first person to drive an automobile a significant distance. Before this historic trip, motorized drives were merely very short trials, returning to the point of origin, made with assistance of mechanics.\n[…]\nAfter Bertha's test drive, Benz & Cie. became the world's largest automobile company.\n[…]\nIn 2008, the Bertha Benz Memorial Route was officially approved as a route of the industrial heritage of humankind, because it follows Bertha Benz's path during the world's first long-distance journey by automobile in 1888. Now it is possible to follow the 194 km of signs indicating her route from Mannheim via Heidelberg to Pforzheim (Black Forest) and back.\n[…]\nThe motto is Bertha Benz Challenge – Sustainable Mobility on the World's Oldest Automobile Road!\n[…]\nIn honor of International Women's Day in 2019, the modern Daimler company commissioned a four-minute advertisement dramatizing portions of Bertha Benz’ 1888 journey. The ad was created by Berlin-based ad agency Antoni (the lead European agency for Mercedes-Benz), and directed by Sebastian Strasser via his production company, Anorak Film.\n[…]\nBertha Benz Memorial Route\n[…]\nThe Car is Born Archived 18 December 2010 at the Wayback Machine – A documentary of Bertha Benz's historic drive by Ulli Kampelmann."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bertha_Benz_Memorial_Route",
        "situacao": "ok",
        "texto": "The Bertha Benz Memorial Route is a German tourist and theme route in Baden-Württemberg and member of the European Route of Industrial Heritage. It opened in 2008 and follows the tracks of the world's first long-distance road trip by a vehicle powered with an internal combustion engine, in 1888. The trip was taken by Bertha Benz in the world's first automobile, the Benz Patent-Motorwagen, created \n[…]\nBertha Benz's husband, Carl Benz, patented the first automobile designed to produce its own power in January 1886 (Reichspatent Nr. 37435).\n[…]\nIn early August 1888, without her husband's knowledge, Bertha Benz, with her sons Richard (aged 14) and Eugen (aged 15), drove in Benz's newly constructed Patent Motorwagen No. 3 automobile from Mannheim to her own birthplace, Pforzheim, becoming the first person to drive an automobile powered with an internal combustion engine over more than a very short distance. The distance was about 104 km (65 mi).\n[…]\nOn January 25, 2011, Deutsche Welle (DW-TV) broadcast worldwide in its series Made in Germany a TV documentary on the invention of the automobile by Karl Benz, highlighting the very important role of his wife Bertha Benz. The report was not only on the history of the automobile, but took a look at its future as well, as shown by the Bertha Benz Challenge.\n[…]\nThe first Bertha Benz Challenge took place on September 10 and 11, 2011. In the future it will take place yearly, aiming to become a globally visible signal for a new automobile breakthrough, as it is only open for sustainable mobility: Future-oriented vehicles with alternative drive systems – hybrid and electric vehicles, hydrogen and fuel cells – and other extremely economical vehicles. Its motto was: \"Sustainable Mobility on the World's Oldest Automobile Road!\"\n[…]\nBertha Benz Memorial Route\n[…]\nProf. John H. Lienhard on Bertha Benz's ride\n[…]\nList of sights along the Bertha Benz Memorial Route"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bertha_Benz",
        "situacao": "ok",
        "texto": "Bertha Benz, nascida Bertha Ringer (Pforzheim, 3 de maio de 1849 — Ladenburg, 5 de maio de 1944) foi uma das pioneiras do automóvel. Em 5 de agosto de 1888 ela foi a primeira pessoa na história a dirigir um automóvel a uma longa distância. Ao fazer isso, Bertha trouxe a atenção do mundo todo para o Benz Patent-Motorwagen, primeiro automóvel do mundo, iniciando as vendas da companhia.\n[…]\nEm 5 de agosto de 1888, aos 39 anos, Bertha dirigiu de Mannheim até Pforzheim, junto de seus filhos Richard e Eugen, de 13 e 15 anos de idade, em um Modelo III, sem contar ao marido e sem nenhuma permissão das autoridades, tornando-se a primeira pessoa a dirigir um automóvel a uma longa distância, ainda que ilegalmente. Antes desta viagem histórica, os carros motorizados eram conduzidos a curtas distâncias, retornando ao ponto de partida e muitas vezes com a ajuda de um mecânico.\n[…]\nBertha deixou Mannheim cedo pela manhã, resolvendo vários assuntos pelo caminho, demonstrando sua capacidade técnica com o veículo. Sem tanque adicional e com um suprimento de apenas 4,5 litros de combustível, ela precisou usar ligroína para tentar fazer o automóvel rodar. O produto só era vendido em boticários, então ela parou em uma farmácia, em Wiesloch e comprou mais.\n[…]\nEra comum para a época que petróleo e seus componentes fossem encontrados com químicos e boticários e assim uma farmácia se tornou o primeiro posto de combustível no mundo.\n[…]\nA viagem de Bertha ganhou notoriedade, como ela esperava. Esta viagem foi essencial para o desenvolvimento técnico do automóvel. O casal fez diversas melhorias à invenção após a viagem de Bertha e suas experiências na estrada. Ela lhe contou tudo o que aconteceu no caminho, dando sugestões como a de uma engrenagem extra para locais íngremes e correias mais resistentes para tornar a freada mais rápida.\n[…]\nBenz Patent-Motorwagen\n[…]\nProf. John H. Lienhard on Bertha Benz's ride",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Kevlar",
      "descricao": "Fibra sintética de alta resistência criada na DuPont em 1965, usada em coletes à prova de balas."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1965, que química americana da DuPont criou o kevlar, fibra usada em coletes à prova de balas?",
    "resposta": "Stephanie Kwolek",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stephanie_Kwolek",
      "https://en.wikipedia.org/wiki/Kevlar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stephanie_Kwolek",
        "situacao": "ok",
        "texto": "Stephanie Louise Kwolek (; July 31, 1923 – June 18, 2014) was a Polish-American chemist known for inventing Kevlar (poly-paraphenylene terephthalamide). Her career at the DuPont company spanned more than 40 years.\n[…]\nBeyond her scientific achievements, Stephanie Kwolek was a passionate advocate for increasing women's participation in science, technology, engineering, and mathematics (STEM). As one of the few women chemists working at DuPont during the mid-20th century, Kwolek often spoke about the challenges she faced in a male-dominated field and sought to encourage young women to pursue careers in science.\n[…]\nKwolek is featured as one of the Royal Society of Chemistry's 175 Faces of Chemistry.\n[…]\nMedia related to Stephanie Kwolek at Wikimedia Commons\n[…]\nStephanie Kwolek at Famous Women Inventors\n[…]\n\"Women in Chemistry – Stephanie Kwolek (Video)\". Science History Institute.\n[…]\nFerguson, Raymond C. (May 4, 1986). Stephanie Louise Kwolek, Transcript of an Interview Conducted by Raymond C. Ferguson in Sharpley, Delaware on 4 May 1986 (PDF). Philadelphia: Beckman Center for the History of Chemistry.\n[…]\nBensaude-Vincent, Bernadette (March 21, 1998). Stephanie L. Kwolek, Transcript of an Interview Conducted by Bernadette Bensaude-Vincent at Wilmington, Delaware on 21 March 1998 (PDF). Philadelphia: Chemical Heritage Foundation.\n[…]\nOral history interview with Stephanie L. Kwolek (1986) from Science History Institute Digital Collections\n[…]\nOral history interview with Stephanie L. Kwolek (1998) from Science History Institute Digital Collections\n[…]\nStephanie L. Kwolek papers at Hagley Museum and Library\n[…]\nStephanie Kwolek photographs and videotapes at Hagley Museum and Library\n[…]\nStephanie Kwolek photographs at Hagley Museum and Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kevlar",
        "situacao": "ok",
        "texto": "Kevlar (para-aramid) is a strong, heat-resistant synthetic fiber, related to other aramids such as Nomex and Technora. Developed by Stephanie Kwolek at DuPont in 1965, the high-strength material was first used commercially in the early 1970s as a replacement for steel in racing tires. It is typically spun into ropes or fabric sheets that can be used as such, or as an ingredient in composite materi\n[…]\nPoly-paraphenylene terephthalamide (K29) was invented by the American chemist Stephanie Kwolek while working for DuPont, in anticipation of a gasoline shortage. In 1964, her group began searching for a new lightweight strong fiber to use for light, but strong, tires. The polymers she had been working with, poly-p-phenylene-terephthalate and polybenzamide, formed liquid crystals in solution, unlike other polymers at the time.\n[…]\nThe solution was \"cloudy, opalescent upon being stirred, and of low viscosity\" and usually was thrown away. However, Kwolek persuaded the technician, Charles Smullen, who ran the spinneret, to test her solution, and was amazed to find that the fiber did not break, unlike nylon. Her supervisor and her laboratory director understood the significance of her discovery and a new field of polymer chemistry quickly arose. By 1971, modern Kevlar was introduced.\n[…]\nHowever, Kwolek was not very involved in developing the applications of Kevlar.\n[…]\nKevlar 149 was invented by Jacob Lahijani of Dupont in the 1980s.\n[…]\nKevlar KM2 – enhanced ballistic resistance for armor applications\n[…]\nKevlar 149, the strongest fiber and most crystalline in structure, is an alternative in certain parts of aircraft construction. The wing leading edge is one application, Kevlar being less prone than carbon or glass fiber to break in bird collisions.\n[…]\nMatweb material properties of Kevlar\n[…]\nKevlar Archived 2016-03-03 at the Wayback Machine\n[…]\nKevlar in body armor\n[…]\nSynthesis of Kevlar\n[…]\nKevlar at Plastics Wiki"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stephanie_Kwolek",
        "situacao": "ok",
        "texto": "Stephanie Louise Kwolek (New Kensington, 31 de julho de 1923 — 18 de junho de 2014) foi uma química polaco-estadunidense, inventora do p-fenilenodiamina com cloreto de tereftaloila, mais conhecida como Kevlar, uma fibra de alta resistência mecânica, de cor dourada, que pode atingir mais de cinco vezes a resistência do aço. Atualmente o Kevlar é empregado na fabricação de coletes balísticos e equip\n[…]\nInicialmente, Stephanie não pretendia ficar muito tempo na DuPont. Mas ela achou o trabalho interessante e preferiu continuar ao invés de tentar carreira na medicina. Depois de 9 anos na empresa, ela criou o Kevlar. Em 1959 ganhou o primeiro de muitos prêmios, por sua publicação na American Chemical Society (ACS). O artigo demonstrava uma maneira de se produzir nylon em um béquer em temperatura ambiente, que ainda é a base para muitos experimentos escolares.\n[…]\nEsse tipo de solução, normalmente, era jogada fora, mas Stephanie persuadiu seu técnico, Charles Smullen, a passar a substância por um spinneret (espécie de fiandeira) para testar a solução. Ela ficou maravilhada de descobrir que a nova fibra não se quebrava, como normalmente o nylon faria. Não apenas era mais forte que o nylon como também era cinco vezes mais forte que o aço. O diretor do laboratório logo percebeu o significado da descoberta e a área de química de polímeros logo se consolidou.\n[…]\nEm 1971, o Kevlar foi introduzido no mercado. As fibras de Kevlar, segundo experimentos de Stephanie, ficavam ainda mais fortes depois de aquecidas.\n[…]\nEm 1986, Stephanie Kwolek se aposentou como pesquisadora da DuPont. Foi consultora da empresa, do National Research Council e da National Academy of Sciences. Em mais de 40 anos de pesquisa teve entre 17 e 28 patentes.\n[…]\nStephanie morreu aos 90 anos, em 14 de junho de 2014.\n[…]\nStephanie Kwolek bei Famous Women Inventors\n[…]\nFoto von Stephanie Kwolek\n[…]\nMeet Stephanie Kwolek",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Relógio Cartier Santos",
      "descricao": "Relógio de pulso criado por Louis Cartier por volta de 1904 para o aviador Alberto Santos-Dumont."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Por volta de 1904, que joalheiro francês fez um relógio de pulso para Santos-Dumont ver as horas sem tirar as mãos dos comandos?",
    "resposta": "Louis Cartier",
    "fonte": [
      "https://en.wikipedia.org/wiki/Louis_Cartier",
      "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Louis_Cartier",
        "situacao": "ok",
        "texto": "Louis Joseph Cartier ( KAR-tee-ay, French: [lwi ʒozɛf kaʁtje]; June 6, 1875 – July 23, 1942) was a French businessman, jeweler and heir to the Cartier jewelry house. From 1909, he and his brother Pierre were primarily based in New York City. In 1917, they acquired the Cartier Building, formerly owned by Morton Freeman Plant, which became the headquarters of Cartier in North America. He was a resid\n[…]\nCartier’s collaboration with Charles Jacqueau, who drew on Islamic, Indian, Egyptian, Greek, and Chinese art, further enriched the brand’s style by adding diverse cultural motifs and global artistic influences.\n[…]\nLouis Joseph Cartier died July 23, 1942, aged 67 in Manhattan, New York, U.S.\n[…]\nHe was transported back to France and buried on Cimetière des Gonards in Versailles near Paris.\n[…]\nFrancesca Cartier Brickell; The Cartiers: The Untold Story of the Family Behind de Jewelry Empire; 2019"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont",
        "situacao": "ok",
        "texto": "Alberto Santos-Dumont (self-stylised as Alberto Santos=Dumont; 20 July 1873 – 23 July 1932) was a Brazilian aeronaut, sportsman, inventor, and one of the few people to have contributed significantly to the early development of both lighter-than-air and heavier-than-air aircraft. The heir of a wealthy family of coffee producers, he dedicated himself to aeronautical study and experimentation in Pari\n[…]\nOn 25 July 1909, Louis Blériot crossed the English Channel, becoming a hero in France. In a letter, Santos-Dumont congratulated Blériot, his friend, with the following words: \"This transformation of geography is a victory of air navigation over sea navigation. One day, perhaps, thanks to you, the airplane will cross the Atlantic\". Blériot then replied, \"I have done nothing but follow and imitate you. Your name to the aviators is a flag.\n[…]\nIn 1904, renowned French jeweller Louis Cartier debuted the Santos-Dumont, a watch designed for the aviator himself. It was the first wristwatch the Maison made, and the collection retails to this day.\n[…]\nSantos-Dumont's friend Louis Cartier created a wristwatch for him in 1904. Up to that point, only women had wristwatches as they were considered a jewelry or fashion item only suitable for women; men only carried pocket watches. But Santos-Dumont needed both hands for flying and so Cartier created a wristwatch with a leather strap for him and called it the Cartier-Santos-Dumont.\n[…]\nAfter his 1906 exploits, Santos-Dumont's picture was everywhere wearing the watch, and soon after, wristwatches became popular among men, possibly due to the publicity involving  the watch Cartier made for his friend.\n[…]\nOver a century later, Cartier produced a series of watches named after him, celebrating the partnership between him and the brand. As a publicity piece, an award-winning film was made by France's Quad Productions entitled \"L'Odyssée de Cartier\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Louis_Cartier",
        "situacao": "ok",
        "texto": "Louis-François Cartier (Paris, 1875 – Paris, 23 de julho de 1942) foi um joalheiro e relojoeiro que iniciou a Maison Cartier em 1847, quando herdou de seu mestre Adolphe Picard o ateliê de jóias de rua Montergueilem Paris, e patenteia sua própria marca, o famoso coração entre suas iniciais L e C num losango, em Paris.\n[…]\nEm 1904 Louis Cartier cria o primeiro relógio de pulso masculino, a pedido de seu amigo, o aviador brasileiro Santos Dumont. Porém, só em 1911 esse relógio começa a ser comercializado e hoje, mais de 90 anos depois, a coleção de relógios Santos Dumont conserva todos os seus parafusos.\n[…]\n(em francês) La Maison Cartier > A travers le temps > 1847 -1912 > 1904: FOTOS de Santos Dumont e história.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Fardier de Cugnot",
      "descricao": "Veículo a vapor construído em 1769 pelo engenheiro militar francês Nicolas-Joseph Cugnot para puxar canhões."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1769, mais de um século antes de Karl Benz, que engenheiro militar francês construiu um veículo movido a vapor para puxar canhões?",
    "resposta": "Nicolas-Joseph Cugnot",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nicolas-Joseph_Cugnot",
      "https://en.wikipedia.org/wiki/Fardier_%C3%A0_vapeur"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nicolas-Joseph_Cugnot",
        "situacao": "ok",
        "texto": "Nicolas-Joseph Cugnot (English:  koo-NYOH, French: [nikɔla ʒozɛf kyɲo]; 26 February 1725 – 2 October 1804) was a French inventor who built the world's first full-size and working self-propelled mechanical land-vehicle, the \"Fardier à vapeur\" – effectively the world's first automobile.\n[…]\nFrench Army captain Cugnot was one of the first to successfully employ a device for converting the reciprocating motion of a steam piston into a rotary motion by means of a ratchet arrangement. A small version of his three-wheeled fardier à vapeur (\"steam dray\") was made and used in 1769 (a fardier was a massively built two-wheeled horse-drawn cart for transporting very heavy equipment, such as cannon barrels).\n[…]\n241 years later, in 2010, a copy of the \"fardier de Cugnot\" was built by students from ParisTech, in conjunction with Cugnot's native commune of Void-Vacon. This replica worked perfectly, demonstrating the validity of the concept and the veracity of the tests carried out in 1769. The replica was exhibited at the 2010 Paris Motor Show before returning for exhibit in Void-Vacon.\n[…]\nNevertheless, the story persists that Cugnot was arrested and convicted of dangerous driving, another first for him if true.\n[…]\nMax J. B. Rauck, Cugnot, 1769-1969: der Urahn unseres Autos fuhr vor 200 Jahren, München: Münchener Zeitungsverlag, 196\n[…]\nBruno Jacomy, Annie-Claude Martin: Le Chariot à feu de M. Cugnot, Paris, 1992, Nathan/Musée national des techniques, ISBN 2-09-204538-5.\n[…]\nCugnot on 3wheelers.com\n[…]\nLe fardier de Cugnot: page in French about Cugnot and his invention, hosted at an Île-de-France regional government web site and credited to the Société des ingénieurs de l'automobile (Society of Automotive Engineers).\n[…]\nBiography of Cugnot from 'World of Invention'"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fardier_%C3%A0_vapeur",
        "situacao": "ok",
        "texto": "Nicolas-Joseph Cugnot (English:  koo-NYOH, French: [nikɔla ʒozɛf kyɲo]; 26 February 1725 – 2 October 1804) was a French inventor who built the world's first full-size and working self-propelled mechanical land-vehicle, the \"Fardier à vapeur\" – effectively the world's first automobile.\n[…]\nFrench Army captain Cugnot was one of the first to successfully employ a device for converting the reciprocating motion of a steam piston into a rotary motion by means of a ratchet arrangement. A small version of his three-wheeled fardier à vapeur (\"steam dray\") was made and used in 1769 (a fardier was a massively built two-wheeled horse-drawn cart for transporting very heavy equipment, such as cannon barrels).\n[…]\n241 years later, in 2010, a copy of the \"fardier de Cugnot\" was built by students from ParisTech, in conjunction with Cugnot's native commune of Void-Vacon. This replica worked perfectly, demonstrating the validity of the concept and the veracity of the tests carried out in 1769. The replica was exhibited at the 2010 Paris Motor Show before returning for exhibit in Void-Vacon.\n[…]\nNevertheless, the story persists that Cugnot was arrested and convicted of dangerous driving, another first for him if true.\n[…]\nMax J. B. Rauck, Cugnot, 1769-1969: der Urahn unseres Autos fuhr vor 200 Jahren, München: Münchener Zeitungsverlag, 196\n[…]\nBruno Jacomy, Annie-Claude Martin: Le Chariot à feu de M. Cugnot, Paris, 1992, Nathan/Musée national des techniques, ISBN 2-09-204538-5.\n[…]\nCugnot on 3wheelers.com\n[…]\nLe fardier de Cugnot: page in French about Cugnot and his invention, hosted at an Île-de-France regional government web site and credited to the Société des ingénieurs de l'automobile (Society of Automotive Engineers).\n[…]\nBiography of Cugnot from 'World of Invention'"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Joseph_Cugnot",
        "situacao": "ok",
        "texto": "Nicolas-Joseph Cugnot (Void-Vacon, 25 de setembro de 1725 – Paris, 2 de outubro de 1804) foi um inventor francês que construiu o primeiro veículo terrestre mecânico autopropelido em tamanho real e funcional, o \"Fardier à vapeur\" — efetivamente o primeiro automóvel do mundo.\n[…]\nEle nasceu em Void-Vacon, Lorraine, (agora departamento de Meuse), França. Ele formou-se engenheiro militar. Em 1765, ele começou a experimentar modelos funcionais de veículos movidos a motor a vapor para o exército francês, destinados ao transporte de canhões.\n[…]\nO capitão do Exército francês Cugnot foi um dos primeiros a empregar com sucesso um dispositivo para converter o movimento alternativo de um pistão a vapor em um movimento rotativo por meio de um arranjo de catraca. Uma pequena versão de seu fardier à vapeur de três rodas (\"dray a vapor\") foi feita e usada em 1769 (um fardier era uma carroça de duas rodas puxada por cavalos de construção maciça para transportar equipamentos muito pesados, como barris de canhão).\n[…]\nDepois de executar um pequeno número de testes, variadamente descritos como sendo entre Paris e Vincennes e em Meudon, o projeto foi abandonado. Isso encerrou a primeira experiência do Exército francês com veículos mecânicos. Mesmo assim, em 1772, o rei Luís XV concedeu a Cugnot uma pensão de 600 libras por ano por seu trabalho inovador, e o experimento foi considerado interessante o suficiente para que o fardier fosse mantido no arsenal.\n[…]\n241 anos depois, em 2010, uma cópia do \"fardier de Cugnot\" foi construída por alunos da Arts et Métiers ParisTech, uma Grande école francesa, e da cidade de Void-Vacon. Esta réplica funcionou perfeitamente, o rancor do protótipo é bom, embora fosse viável e verificando a veracidade e os resultados dos testes de 1769.\n[…]\nCarro a vapor",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Benz Patent-Motorwagen",
      "descricao": "Automóvel patenteado por Karl Benz em 1886, considerado o primeiro carro prático."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O automóvel patenteado por Karl Benz em 1886, considerado o primeiro carro prático, tinha quantas rodas?",
    "resposta": "Três",
    "fonte": [
      "https://en.wikipedia.org/wiki/Benz_Patent-Motorwagen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Benz_Patent-Motorwagen",
        "situacao": "ok",
        "texto": "Benz Patent-Motorwagen (\"patent motorcar\") is used today to refer to the first cars produced by Benz & Cie between 1885 and 1893; these had three wheels, a single-cylinder four-stroke engine and belt-drive. Benz & Cie used the designation \"Patent-Motorwagen\" for their four-wheel cars until c.1900, but these are known today by their other names, such as Viktoria and Velo.\n[…]\nThe Patent-Motorwagen has been recognised as the first practical automobile (Nr. 2) and the first to enter production (Model 2). As its creator, Carl Benz has been hailed as the father and inventor of the automobile.\n[…]\nBenz started work on his Motorwagen in 1884 in his own time, outside his responsibilities as a director of the company. He continually made changes to it, so it is hard to tie down details of its specification at any particular date. What can be said is that the first version which Benz was happy to take into Mannheim and be seen in was the Patent-Motorwagen Nr. 2 in summer 1886. This was his first practical car: it fixed the greatest inadequacies in the design of Nr.\n[…]\nIn Mercedes-Benz: Personenwagen 1886-1945 (1985), Werner Oswald, with access to Mercedes-Benz's records, gives statistics of the numbers of vehicles sold by Benz & Cie from 1886 – 1900, broken down by country. However, while data are specified for each individual year after 1893, the data are aggregated for the years 1886 – 1893. Oswald states that about 25 three-wheel Patent-Motorwagen were manufactured (not sold).\n[…]\nOn 12 July 1925 the Allgemeine Schnauferl-Club organised a parade of historic vehicles in Munich which Benz headed, driving his Patent-Motorwagen for one final time.\n[…]\nPatent 37435, by Karl Benz for his 1885 Motorwagon The birth certificate of the automobile – the German patent application of January 29, 1886, that was granted on November 2, 1886, to Benz & Company in Mannheim"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Benz_Patent-Motorwagen",
        "situacao": "ok",
        "texto": "O Benz Patent-Motorwagen, construído em 1886, é amplamente reconhecido como o primeiro automóvel, ou seja, um veículo \"projetado\" para ser movido a motor.\n[…]\nO veículo recebeu a patente alemã número 37 435, requerida por Karl Benz em janeiro de 1886. Seguindo procedimentos oficiais, a data de requerimento torna-se a data da patente, que ocorreu em novembro do mesmo ano.\n[…]\nBenz apresentou sua invenção oficialmente ao público em 3 de julho de 1886 na Ringstraße em Mannheim, Alemanha.\n[…]\nO Benz Patent-Motorwagen era um automóvel de três rodas com um motor traseiro. O veículo continha muitas novas invenções. Foi construído com tubos de aço e painéis de madeira. As rodas de aço raiadas e pneus de borracha sólida foram projetos de Benz. A direção era por cremalheira que girava a roda da frente sem mecanismo de suspensão. Molas elípticas foram usadas na parte de trás juntamente com um eixo sólido e acionamento por corrente dos dois lados.\n[…]\nBertha Benz, casada com Karl, decidiu fazer a publicidade do Patent-Motorwagen de maneira única—ela tomou o Patent-Motorwagen Nr. 3, supostamente sem o conhecimento de seu marido, e dirigiu-o na primeira viagem a longa distância de automóvel, a fim de demonstrar sua viabilidade como meio de viagem a longas distâncias.\n[…]\nApós enviar um telegrama a seu marido ao chegar a Pforzheim, passou a noite na casa de sua mãe e voltou para casa três dias depois. A viagem total foi de 194 km.\n[…]\nHistória do automóvel\n[…]\nPatent 37435, by Karl Benz for his 1885 Motorwagon A \"certidão de nascimento\" do automóvel - o pedido de patente alemã de 29 de janeiro de 1886, concedido em 2 de novembro de 1886 à Benz & Company em Mannheim",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Alfred Nobel",
      "descricao": "Químico e industrial sueco (1833–1896), inventor da dinamite e criador do Prêmio Nobel."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Além de dar nome a um famoso prêmio, o inventor da dinamite também é homenageado por que elemento químico da tabela periódica?",
    "resposta": "Nobélio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nobelium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nobelium",
        "situacao": "ok",
        "texto": "Nobelium is a synthetic chemical element; it has symbol No and atomic number 102. It is named after Alfred Nobel, the inventor of dynamite and benefactor of science. A radioactive metal, it is the tenth transuranium element, the second transfermium, and is the fourteenth member of the actinide series. Like all elements with atomic number over 100, nobelium can only be produced in particle accelera\n[…]\nThe Berkeley team decided to adopt the proposed name of the Swedish team, \"nobelium\", for the element.\n[…]\nIn 1994, as part of an attempted resolution to the element naming controversy, IUPAC ratified names for elements 101–109. For element 102, it ratified the name nobelium (No) on the basis that it had become entrenched in the literature over the course of 30 years and that Alfred Nobel should be commemorated in this fashion.\n[…]\nBecause of outcry over the 1994 names, which mostly did not respect the choices of the discoverers, a comment period ensued, and in 1995 IUPAC named element 102 flerovium (Fl) as part of a new proposal, after either Georgy Flyorov or his eponymous Flerov Laboratory of Nuclear Reactions. This proposal was also not accepted, and in 1997 the name nobelium was restored. Today the name flerovium, with the same symbol, refers to element 114.\n[…]\nNobelium's melting point has been predicted to be 800 °C, the same value as that estimated for the neighboring element mendelevium. Its density is predicted to be around 9.9 ± 0.4 g/cm3.\n[…]\nSilva, Robert J. (2011). \"Chapter 13. Fermium, Mendelevium, Nobelium, and Lawrencium\". In Morss, Lester R.; Edelstein, Norman M.; Fuger, Jean (eds.). The Chemistry of the Actinide and Transactinide Elements. Netherlands: Springer. pp. 1621–1651. doi:10.1007/978-94-007-0211-0_13. ISBN 978-94-007-0210-3.\n[…]\nLos Alamos National Laboratory – Nobelium\n[…]\nNobelium at The Periodic Table of Videos (University of Nottingham)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nob%C3%A9lio",
        "situacao": "ok",
        "texto": "Nobélio (nomeado em homenagem a Alfred Nobel) é um elemento químico da Tabela Periódica, símbolo No, número atômico 102 (102 prótons e 102 elétrons), de massa atómica 259 u.\n[…]\nEntretanto, um ano antes, físicos do Instituto Nobel da Suécia anunciaram que sintetizaram um isótopo do elemento 102. A equipe relatou que criaram um isótopo com meia-vida de 10 minutos em 8,5 MeV após bombardearem o cúrio-244 com núcleos de carbono-13. Baseado neste relatório, a Comissão de Massas atômicas da IUPAC aceitou o nome \"nobélio\" e o símbolo \"No\" para o \"novo\" elemento. Posteriormente os russos e americanos tentaram repetir a experiência dos físicos suecos e falharam.\n[…]\nO nobélio era o elemento mais recente descoberto, quando Tom Lehrer escreveu A canção dos elementos. Consequentemente, foi o elemento com o maior número atômico incluído.\n[…]\n13 radioisótopos do nobélio foram identificados, sendo os mais estáveis No-259 com uma meia-vida de 58 minutos, No-255 com uma meia-vida de 3,1 minutos, e No-253 com uma meia-vida de 1,7 minutos. Todos os demais isótopos radioativos apresentam meias-vidas inferiores a 56 segundos, e a maioria destes abaixo de 2,4 segundos. Este elemento apresenta também 1 meta estado, No-254m t½ 0,28 segundos).\n[…]\nAs massas atômicas dos isótopos conhecidos de nobélio variam de 249,088 u (No-249) até 262,108 u (No-262). O primeiro modo de decaimento antes do isótopo mais estável, No-259, e a emissão alfa, e o primeiro modo após é a fissão espontânea. O produto de decaimento primário antes do No-259 são os isótopos do elemento férmio, e os produtos após são energia e partículas subatômicas.\n[…]\nIt's Elemental - Nobelium\n[…]\n«Nobélio - vídeos e imagens»",
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
