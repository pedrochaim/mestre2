Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Transportes** (tema **Cotidiano**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Draisiana",
      "descricao": "Veículo de duas rodas sem pedais, empurrado com os pés, inventado na Alemanha em 1817 e precursor da bicicleta."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1817, na Alemanha, que inventor criou a máquina de correr, veículo de duas rodas sem pedais e precursor da bicicleta?",
    "resposta": "Karl Drais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Karl_Drais",
      "https://en.wikipedia.org/wiki/Dandy_horse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Karl_Drais",
        "situacao": "ok",
        "texto": "Karl Freiherr von Drais (full name: Karl Friedrich Christian Ludwig Freiherr Drais von Sauerbronn; 29 April 1785 – 10 December 1851) was a noble German forest official and significant inventor in the Biedermeier period. He is regarded as \"the father\" and as the inventor of the bicycle.\n[…]\nDrais was a prolific inventor, who invented the Laufmaschine (\"running machine\"), also later called the velocipede, draisine (English) or draisienne (French), also nicknamed the hobby horse or dandy horse. This was his most popular and widely recognized invention. It incorporated the two-wheeler principle that is basic to the bicycle and motorcycle and was the beginning of mechanized personal transport. This was the earliest form of a bicycle, without pedals.\n[…]\nDrais was unable to market his inventions for profit because he was still a civil servant of Baden, even though he was being paid without providing active service. As a result, on 12 January 1818, Drais was awarded a grand-ducal privilege (Großherzogliches Privileg) to protect his inventions for 10 years in Baden by the younger Grand Duke Karl. Grand Duke Karl also appointed Drais professor of mechanics. This was merely an honorary title, not related to any university or other institution.\n[…]\nIn 2017, Germany issued a commemorative postage stamp (0.70 Euro) in remembrance of the 200th anniversary of Karl Drais's first run of his \"running machine\" on 12 June 1817. The stamp shows the machine plus as its shadow, a bicycle.\n[…]\nList of German inventors and discoverers\n[…]\nList of German inventions and discoveries\n[…]\nMichael Rauck: Karl Freiherr Drais von Sauerbronn: Erfinder und Unternehmer (1785–1851). Steiner, Stuttgart 1983. ISBN 3-515-03939-2\n[…]\nKarl Drais in Baden-Baden Archived 31 October 2018 at the Wayback Machine by Hans-Erhard Lessing"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dandy_horse",
        "situacao": "ok",
        "texto": "The dandy horse, an English nickname for what was first called a Laufmaschine ('running machine' in German), then a vélocipède or draisienne (in French and then English), and then a pedestrian curricle or hobby-horse, or swiftwalker, is a human-powered vehicle that, as the first two-wheeled vehicle, is regarded as the first bicycle. The dandy horse is powered by the rider's feet on the ground inst\n[…]\nIt was invented by Karl Drais, who called it a Laufmaschine German: [ˈlaʊfmaˌʃiːnə] 'running machine' in 1817, and patented by him in France in February 1818 as a vélocipède. It is also known as a Draisine (German: [dʁaɪˈziːnə]  in German, a term used in English only for light auxiliary railcars regardless of their form of propulsion), and as a draisienne (French: [drɛzjɛn] in French and English.\n[…]\nThe dandy-horse was a two-wheeled vehicle, with both wheels in line, propelled by the rider pushing along the ground with the feet as in regular walking or running. The front wheel and handlebar assembly was hinged to allow steering. The dandy horse was capable of more than doubling the average walking speed, to around 10 mph (16 km/h) on level ground.\n[…]\nDrais was inspired, at least in part, by the need to develop a form of transit that did not rely on the horse. After the 1815 eruption of Mount Tambora and the Year Without a Summer (1816), which followed close on the devastation of the Napoleonic Wars, widespread crop failures and food shortages resulted in the deaths of tens of thousands of horses, which either starved to death or were killed to provide meat and hides.\n[…]\nIn the 1860s in France, the vélocipède bicycle was created by attaching rotary cranks and pedals to the front-wheel hub of a dandy-horse.\n[…]\nThe dandy horse has been adapted as a starter bicycle for children, and is called a balance bike, or a run bike."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Karl_Drais",
        "situacao": "ok",
        "texto": "Karl Friedrich Christian Ludwig Drais von Sauerbronn (Karlsruhe, 29 de abril de 1785 – Karlsruhe, 10 de dezembro de 1851) foi um inventor alemão, construtor da draisiana, antecessora da bicicleta moderna.\n[…]\nA invenção mais importante de Karl Drais foi o velocípede, uma versão primitiva da bicicleta — sem pedais. Sua primeira viagem relatada, de Mannheim a Rheinau (hoje um bairro de Mannheim), aconteceu em 12 de junho de 1817. No mesmo ano ele realizou uma segunda viagem de Gernsbach a Baden-Baden.\n[…]\nEm 12 de janeiro de 1818, Karl Drais foi premiado com um Großherzogliches Privileg, similar à nossa atual patente (Baden não tinha lei de patentes na época). Além disso, foi nomeado professor de Mecânica pelo Grand Duke Karl Friedrich, o que foi apenas um título honorário e sem relação com qualquer universidade ou outra instituição. Ao mesmo tempo, deixou o serviço civil e continuou a receber seu salário como uma espécie de \"pensão de inventor\".\n[…]\nDe 1822 a 1825, Karl Drais participou de uma expedição ao Brasil, liderada por Georg Heinrich von Langsdorff.\n[…]\nDraisiana\n[…]\nBicicleta\n[…]\nHans-Erhard Lessing Automobilität – Karl Drais und die unglaublichen Anfänge. Leipzig: Maxime Verlag, 2003.\n[…]\nHeinz Schmitt Karl Friedrich Drais von Sauerbronn: 1785-1851; ein badischer Erfinder; Ausstellung zu seinem 200. Geburtstag; Stadtgeschichte im Prinz-Max-Palais, Karlsruhe, 9. März-26. Mai 1985; Städt. Reiss-Museum Mannheim, 5. Juli-18. August 1985. Karlsruhe: Stadtarchiv, 1985.\n[…]\nMichael Rauck Karl Freiherr Drais von Sauerbronn: Erfinder und Unternehmer (1785–1851). Stuttgart: Steiner 1983.\n[…]\nkarl-drais.de de ADFC Mannheim\n[…]\n(em alemão) Karl Drais in Baden-Baden por Hans-Erhard Lessing",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pneu pneumático",
      "descricao": "Pneu cheio de ar que reveste a roda de veículos, desenvolvido de forma prática no fim do século dezenove."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1888, um veterinário escocês desenvolveu um pneu cheio de ar para deixar mais confortável o triciclo do filho. Quem era ele?",
    "resposta": "John Boyd Dunlop",
    "fonte": [
      "https://en.wikipedia.org/wiki/John_Boyd_Dunlop"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/John_Boyd_Dunlop",
        "situacao": "ok",
        "texto": "John Boyd Dunlop (5 February 1840 – 23 October 1921) was a Scottish inventor and veterinary surgeon who spent most of his career in Ireland. Familiar with making rubber devices, he invented the practical pneumatic tyres for his child's tricycle and developed them for use in cycle racing.\n[…]\nHe married Margaret Stevenson in 1871 and they had a daughter and a son. He established Downe Veterinary Clinic in Downpatrick with his brother James Dunlop before moving to a practice in 38–42 May Street, Belfast where, by the mid 1880s, his was one of the largest practices in Ireland.\n[…]\nIn October 1887, John Boyd Dunlop developed the first practical pneumatic or inflatable tyre for his son's tricycle and, using his knowledge and experience with rubber, in the yard of his home in Belfast fitted it to a wooden disc 96 centimetres across. The tyre was an inflated tube of sheet rubber. He then took his wheel and a metal wheel from his son's tricycle and rolled both across the yard together.\n[…]\nThe metal wheel stopped rolling but the pneumatic continued until it hit a gatepost and rebounded. Dunlop then put pneumatics on both rear wheels of the tricycle. That too rolled better, and Dunlop moved on to larger tyres for a bicycle \"with even more startling results\". He tested that in Cherryvale sports ground, South Belfast, and a patent was granted on 7 December 1888. Unknown to Dunlop another Scot, Robert William Thomson from Stonehaven, had patented a pneumatic tyre in 1847.\n[…]\nJohn Boyd Dunlop died at his home in Dublin's Ballsbridge in 1921 and is buried in Deans Grange Cemetery.\n[…]\nJohn Boyd Dunlop has been commemorated with a blue plaque by the Ulster Historical Circle for inventing the first successful pneumatic tyre.\n[…]\nFamous Scots – John Boyd Dunlop\n[…]\nJohn Boyd Dunlop – Pictures and information"
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
    "indice": 3,
    "ancora": {
      "nome": "Ferrovia Stockton-Darlington",
      "descricao": "Ferrovia inglesa aberta em 1825 no nordeste da Inglaterra, pioneira no uso de locomotivas a vapor."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que engenheiro inglês, chamado de pai das ferrovias, foi o responsável pela linha Stockton-Darlington, aberta em 1825 com trens a vapor?",
    "resposta": "George Stephenson",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stockton_and_Darlington_Railway",
      "https://en.wikipedia.org/wiki/George_Stephenson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stockton_and_Darlington_Railway",
        "situacao": "ok",
        "texto": "The Stockton and Darlington Railway  (S&DR) was a railway company that operated in north-east England from 1825 to 1863. The world's first public railway to use steam locomotives, its first line connected collieries near Shildon with Darlington and Stockton in County Durham, and was officially opened on 27 September 1825. The movement of coal to ships rapidly became a lucrative business, and the l\n[…]\nConcerned about Overton's competence, Pease asked George Stephenson, an experienced enginewright of the collieries of Killingworth, to meet him in Darlington. On 12 May 1821 the shareholders appointed Thomas Meynell as chairman and Jonathan Backhouse as treasurer; a majority of the managing committee, which included Thomas Richardson, Edward Pease and his son Joseph Pease, were Quakers.\n[…]\nThe export of coal had become the railway's main business, but the staiths at Stockton had inadequate storage and the size of ships was limited by the depth of the Tees. A branch from Stockton to Haverton, on the north bank of the Tees, was proposed in 1826, and the engineer Thomas Storey proposed a shorter and cheaper line to Middlesbrough, south of the Tees in July 1827. Later approved by George Stephenson, this plan was ratified by the shareholders on 26 October.\n[…]\nThe railway was to be built in sections, and to allow both to open at the same time permission for the more difficult line through the hills from Darlington to Newcastle was to be sought in 1836 and a bill for the easier line south of Darlington to York presented the following year. Pease specified a formation wide enough for four tracks, so freight could be carried at 30 miles per hour (48 km/h) and passengers at 60 mph (97 km/h), and George Stephenson had drawn up detailed plans by November.\n[…]\nOriginal report by George Stephenson on the proposal to construct the railway (Network Rail)\n[…]\nThe Stockton and Darlington Railway"
      },
      {
        "url": "https://en.wikipedia.org/wiki/George_Stephenson",
        "situacao": "ok",
        "texto": "George Stephenson (9 June 1781 – 12 August 1848) was an English civil engineer and mechanical engineer. Renowned as the \"Father of Railways\", Stephenson was considered by the Victorians as a great example of diligent application and thirst for improvement. His chosen rail gauge, sometimes called \"Stephenson gauge\", was the basis for the 4-foot-8+1⁄2-inch (1.435 m) standard gauge used by most of th\n[…]\nPioneered by Stephenson, rail transport was one of the most important technological inventions of the 19th century and a key component of the Industrial Revolution. Built by George and his son Robert's company Robert Stephenson and Company, the Locomotion No. 1 was the first steam locomotive to carry passengers on a public rail line, the Stockton and Darlington Railway in 1825.\n[…]\nBritain led the world in the development of railways which acted as a stimulus for the Industrial Revolution by facilitating the transport of raw materials and manufactured goods. George Stephenson, with his work on the Stockton and Darlington Railway and the Liverpool and Manchester Railway, paved the way for the railway engineers who followed, such as his son Robert, his assistant Joseph Locke who carried out much work on his own account and Isambard Kingdom Brunel.\n[…]\nAlso named after him and his son is George Stephenson High School in Killingworth, Stephenson Memorial Primary School in Howdon, the Stephenson Railway Museum in North Shields, the Stephenson Locomotive Society, the Stephenson Centre, an SEBD Unit of Beaumont Hill School in Darlington, and the Stephenson Building, home of the school of engineering at Newcastle University. His last home in Tapton, Chesterfield is now part of Chesterfield College and is called Tapton House Campus.\n[…]\nRobert Stephenson and Company\n[…]\nRolt, L.T.C. (1960). George and Robert Stephenson: The Railway Revolution. London: Penguin. OCLC 4947526.\n[…]\nStephenson's birthplace"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stockton_and_Darlington_Railway",
        "situacao": "ok",
        "texto": "A Stockton and Darlington Railway (S&DR), inaugurada em 1825, foi a primeira companhia ferroviária pública a ser estabelecida no mundo, com uma linha de locomotiva a vapor, tendo operado até 1863.\n[…]\nNa sua inauguração, a linha possuía 40 km de extensão, e foi construída entre Darlington e Stockton-on-Tees, na Inglaterra. A linha foi inicialmente construída para conectar minas de carvão no interior de Stockton, que era transportado através de barcos. A maior parte dessa rota é atualmente servida pela \"Linha do Vale Tees\", operada pela Northern Rail.\n[…]\nJá com 320 km de linhas e 160 locomotivas, a S&DR foi absorvida pela North Eastern Railway em 1863, que, por sua vez, sofreu fusão com a London and North Eastern Railway em 1923.\n[…]\nGeorge Stephenson\n[…]\nPhilip John Greer Ransom: The Victorian Railway and How It Evolved, 1990. Heinemann. ISBN 978-0-434-98083-3 (em inglês)\n[…]\nSamuel Smiles: La vie des Stephenson, comprenant l'histoire des chemins de fer et de la locomotive, Paris, Plon, 1868 (em francês)\n[…]\nBreakdowns and bruises, but the railway is still a runaway success (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Volkswagen Fusca",
      "descricao": "Carro compacto de motor traseiro da Volkswagen, projetado na Alemanha nos anos trinta e conhecido mundialmente como Beetle."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que engenheiro austríaco, cujo sobrenome virou marca de carros esportivos, projetou o Fusca na Alemanha dos anos trinta?",
    "resposta": "Ferdinand Porsche",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volkswagen_Beetle",
      "https://pt.wikipedia.org/wiki/Volkswagen_Fusca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volkswagen_Beetle",
        "situacao": "ok",
        "texto": "The Volkswagen Beetle, officially the Volkswagen Type 1, is a small family car produced by the German company Volkswagen from 1938 to 2003. A global cultural icon known for its bug-like design, the Beetle is widely regarded as one of the most influential cars of the 20th century. Its production period of 65 years is the longest for any single generation of automobile.\n[…]\nThe Beetle was conceived in the early 1930s, when the leader of Nazi Germany, Adolf Hitler, decided there was a need for a people's car—an inexpensive, simple, mass-produced car—to serve Germany's new road network, the Reichsautobahn. Engineer Ferdinand Porsche and his design team began developing and designing the car in the early 1930s, but the fundamental design concept can be attributed to Béla Barényi in 1925, predating Porsche's claims by almost ten years.\n[…]\nOn 22 June 1934, Ferdinand Porsche received a development contract from the Verband der Automobilindustrie (German Association of the Automotive Industry) for the prototype of an inexpensive and economical passenger car after Hitler decided there was a need for a people's car (in German, \"volkswagen\")—a car affordable and practical enough for lower-class people to own—to serve the country's new road network, the Reichsautobahn.\n[…]\nAlthough the Volkswagen car was primarily the conception of Porsche and Hitler, the idea of a \"people's car\" is much older than Nazism, and has existed since the introduction of automotive mass production.\n[…]\nGerman-Bohemian engineer Ferdinand Porsche and his team were generally known as the original designers of the Volkswagen. However, there has been debate over whether he was the original designer. Rumours circulated suggesting that other designers, such as Béla Barényi, Paul Jaray, Josef Ganz and Hans Ledwinka, may have influenced its design.\n[…]\nThe In-Depth History of the Volkswagen Super Beetle"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Volkswagen_Fusca",
        "situacao": "ok",
        "texto": "O Volkswagen Typ 1, popularmente conhecido como Fusca (no Brasil) ou Carocha (em Portugal), foi o primeiro modelo de automóvel fabricado pela companhia alemã Volkswagen, sendo produzido entre 1938 e 2003. Foi o carro mais vendido no mundo, ultrapassando em 1972 o recorde que pertencia até então ao Ford Modelo T, de origem estadunidense. Foi produzido até 2003, no México, onde era chamado de VW Sed\n[…]\nA história do Fusca é uma das mais complexas e longas da história do automóvel. Em 22 junho de 1934, a União das Indústrias Automotivas (Verband der Automobilindustrie) firmou um contrato com o projetista Ferdinand Porsche para o desenvolvimento de um Volkswagen (\"carro do povo\"). Diferente da maioria dos outros carros, o projeto do Fusca envolveu várias empresas e até mesmo o governo de seu país, e levaria à fundação de uma fábrica inteira de automóveis no processo.\n[…]\nJá no Brasil, o nome Fusca é um pouco mais peculiar: a origem do nome no Brasil está relacionada com a pronúncia alemã da palavra Volkswagen. O fonema da letra V em alemão é algo como \"fau\" e o W é \"vê\". Ao abreviar a palavra Volkswagen para VW, os alemães falavam \"fauvê\". Logo que o Fusca foi lançado na Alemanha, ficou comum a frase \"Isto é um VW\" (\"Das ist ein VW\"). A abreviação alemã \"fauvê\" logo se transformaria em \"fulque\" e \"fulca\"[carece de fontes]?.\n[…]\nEm Curitiba se fala 'fuqui' ou 'fuque', no Rio Grande do Sul é 'fuca'. Mas em São Paulo, talvez por uma questão de fonética, acrescentaram o 'S' na palavra e o Volkswagen virou Fusca.\"\n[…]\nUm Buggy Baja ou Fusca Baja é um tipo de carro fora de estrada muito popular. É feito á partir de um fusca comum com peças de carros diferentes. É comum no nordeste brasileiro por causa de sua versatilidade em terrenos ruins como em areia ou estrada de terra.\n[…]\nVolkswagen New Beetle\n[…]\nVolkswagen Fusca (A5)\n[…]\nMotor1.com. Carros para sempre: Fusca \"Itamar\" marcou a volta dos populares"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Canal de Suez",
      "descricao": "Canal artificial no Egito que liga o Mar Mediterrâneo ao Mar Vermelho, inaugurado em 1869."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que diplomata francês liderou a construção do canal que, em 1869, ligou o Mediterrâneo ao Mar Vermelho, no Egito?",
    "resposta": "Ferdinand de Lesseps",
    "fonte": [
      "https://en.wikipedia.org/wiki/Suez_Canal",
      "https://en.wikipedia.org/wiki/Ferdinand_de_Lesseps"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Suez_Canal",
        "situacao": "ok",
        "texto": "The Suez Canal (; Egyptian Arabic: قناة السويس, Qanāt as-Suwais) is an artificial sea-level waterway in Egypt, connecting the Mediterranean Sea to the Red Sea through the Isthmus of Suez and dividing Africa and Asia (and by extension, the Sinai Peninsula from the rest of Egypt). The 193.3-kilometre-long (120.1-mile) canal is a key trade route between Europe and Asia.\n[…]\nIn 1858, French diplomat Ferdinand de Lesseps formed the Compagnie de Suez for the express purpose of building the canal. Construction of the canal lasted from 1859 to 1869 and it officially opened on 17 November 1869.\n[…]\nIn 1854 and 1856, Ferdinand de Lesseps obtained a concession from Sa'id Pasha, the Khedive of Egypt and Sudan, to create a company to construct a canal open to ships of all nations. The company was to operate the canal for 99 years from its opening. De Lesseps had used his friendly relationship with Sa'id, which he had developed while he was a French diplomat in the 1830s.\n[…]\nThe European Mediterranean countries in particular benefited economically from the Suez Canal, as they now had much faster connections to Asia and East Africa than the North and West European maritime trading nations such as Great Britain, the Netherlands or Germany. The biggest beneficiary in the Mediterranean was Austria-Hungary, which had participated in the planning and construction of the canal.\n[…]\nThe Red Sea is generally saltier and less nutrient-rich than the Mediterranean, so that Erythrean species will often do well in the 'milder' eastern Mediterranean environment. To the contrary very few Mediterranean species have been able to settle in the 'harsher' conditions of the Red Sea. The dominant, south to north, migratory passage across the canal is often called Lessepsian migration (after Ferdinand de Lesseps) or \"Erythrean invasion\".\n[…]\nAmerican Society of Civil Engineers – Suez Canal"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ferdinand_de_Lesseps",
        "situacao": "ok",
        "texto": "Ferdinand Marie de Lesseps (French: [lesɛps]; 19 November 1805 – 7 December 1894) was a French Orientalist diplomat and later developer of the Suez Canal, which in 1869, joined the Mediterranean and Red Seas, substantially reducing sailing distances and times between Europe and East Asia.\n[…]\nAfter Ferdinand returned to France he was educated at the Lycée Henri-IV in Paris. Sa'id was educated in Paris as well, and kept the friendship. From the age of 18 years to 20 he was employed in the commissary department of the army. From 1825 to 1827 he acted as assistant vice-consul at Lisbon, where his uncle, Barthélemy de Lesseps, was the French chargé d'affaires.\n[…]\nLesseps then retired from the diplomatic service, and never again occupied any public office. In 1853, he lost his wife and his son Ferdinand Victor at a few days' interval. In 1854, the accession to the viceroyalty of Egypt of Said Pasha gave Lesseps a new impulse to act upon the creation of a Suez Canal.\n[…]\nFrom 17 November 1899 to 23 December 1956, a monumental statue of Ferdinand de Lesseps by Emmanuel Frémiet stood at the entrance of the Suez Canal.\n[…]\nOn 11 June 1884, Levi P. Morton, the Minister of the United States to France, gave a banquet in honor of the Franco-American Union and in celebration of the completion of the Statue of Liberty. Ferdinand de Lesseps, as head of the Franco-American Union, formally presented the statue to the United States, saying:\n[…]\nFerdinand de Lesseps (1887). Recollections of forty years. Volume 1. Volume 2. From Internet Archive.\n[…]\nAndré Gill (1867). \"Ferdinand de Lesseps\", caricature painting of Ferdinand de Lesseps.\n[…]\nWorks by Ferdinand de Lesseps at LibriVox (public domain audiobooks)\n[…]\nNewspaper clippings about Ferdinand de Lesseps in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canal_de_Suez",
        "situacao": "ok",
        "texto": "O canal de Suez (em árabe: قناة السويس Qanāt al-Suways) é uma via navegável artificial a nível do mar localizada no Egito, entre o mar Mediterrâneo e o mar Vermelho (golfo de Suez). Inaugurado em 17 de novembro de 1869, após 10 anos de construção, permite que navios viajem entre a Europa e a Ásia Meridional sem ter de navegar em torno de África, reduzindo assim a distância da viagem marítima entre\n[…]\nA companhia Suez de Ferdinand de Lesseps construiu o canal entre 1859 e 1869. No final dos trabalhos, o Egito e a França eram os proprietários do canal. Estima-se que 1,5 milhão de egípcios tenham participado da construção do canal e que 120 000 morreram, principalmente de cólera.\n[…]\nEm 17 de fevereiro de 1867, o primeiro navio atravessou o canal, mas a inauguração oficial foi em 7 de novembro de 1869. O imperador da França Napoleão III, não estava presente, estando enfermo, sendo representado pela sua esposa a imperatriz Eugenia, sobrinha do próprio Lesseps. Ao contrário da crença popular, a ópera Aida não foi encomendada ao compositor italiano Giuseppe Verdi para ser apresentada na inauguração, que só foi concluída e apresentada dois anos depois.\n[…]\nComo o canal não tem comportas marítimas, os portos nas extremidades estariam sujeitos ao impacto repentino dos tsunamis do Mar Mediterrâneo e do Mar Vermelho, de acordo com um artigo de 2012 no Journal of Coastal Research.\n[…]\nEm agosto de 2014, o Egito escolheu um consórcio que inclui o exército egípcio e a empresa de engenharia global Dar Al-Handasah para desenvolver um centro industrial e de logística internacional na área do Canal de Suez e iniciou a construção de uma nova seção de canal do km 60 ao km 95, combinado com a expansão e escavação profunda dos outros 37 km do canal. Isso permitiu a navegação em ambas as direções simultaneamente na seção central de 72 km do canal.\n[…]\nCanal da Tailândia\n[…]\nCanal de Suez no Panoramio (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Metrô de Paris",
      "descricao": "Sistema de metrô da cidade de Paris, inaugurado em 1900."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que arquiteto francês do art nouveau desenhou as famosas entradas de ferro verde, com formas de plantas, do metrô de Paris?",
    "resposta": "Hector Guimard",
    "distratores": [
      "Gustave Eiffel",
      "Charles Garnier",
      "Eugène Viollet-le-Duc"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hector_Guimard"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hector_Guimard",
        "situacao": "ok",
        "texto": "Hector Guimard (French pronunciation: [ɛktɔʁ ɡimaʁ]; 10 March 1867 – 20 May 1942) was a French architect and designer prominent for his Art Nouveau style designs. He achieved early fame with his design for the Castel Béranger, the first Art Nouveau apartment building in Paris, which was selected in an 1899 competition as one of the best new building facades in the city.\n[…]\nHector Guimard was born in Lyon on 10 March 1867. His father, Germain-René Guimard, was an orthopedist, and his mother, Marie-Françoise Bailly, was a linen maid. His parents married on 22 June 1867. His father became a gymnastics teacher at the Lycée Michelet in Vanves in 1878, and the following year Hector began to study at the Lycée. In October 1882 he enrolled at the École nationale supérieure des arts décoratifs, or school of decorative arts.\n[…]\nHe is honoured in street names in the French towns of Châteauroux, Perpignan, Guilherand-Granges and Cournon-d'Auvergne, and by the rue Hector Guimard in Belleville, Paris.\n[…]\nEdicules and balustrades of the Paris Métro from 1900 until 1903. (See Paris Métro entrances by Hector Guimard)\n[…]\nParis Métro entrances by Hector Guimard\n[…]\nConcours de façades de la ville de Paris (Guimard was a winner in 1898 and 1928)\n[…]\nVigne, George (2016). Hector Guimard - Le geste mangnifique de l'Art Nouveau (in French). Paris: Editions du Patrimoine - Centre des monuments nationaux. ISBN 978-2-7577-0494-3.\n[…]\nHector Guimard architectural drawings and papers, circa 1903–1933, (bulk circa 1903–1929).Held by the Department of Drawings & Archives Archived 23 June 2019 at the Wayback Machine, Avery Architectural & Fine Arts Library, Columbia University.\n[…]\nLe Cercle Guimard\n[…]\nlartnouveau.com - The work of Hector Guimard in Paris and in France\n[…]\nart-nouveau-around-the-world.org Hector Guimard\n[…]\nHector Guimard in American public collections, on the French Sculpture Census website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hector_Guimard",
        "situacao": "ok",
        "texto": "Hector Guimard (Lyon, 10 de março de 1867 – Nova Iorque, 20 de maio de 1942), foi um arquiteto e designer francês e uma figura proeminente do estilo Art Nouveau.\n[…]\nEle alcançou fama precoce com seu projeto para o Castel Beranger, o primeiro prédio de apartamentos Art Nouveau em Paris, que foi selecionado em um concurso de 1899 como uma das melhores fachadas de prédios novos da cidade. Ele é mais conhecido pelas edículas ou dosséis de vidro e ferro, com curvas Art Nouveau ornamentais, que ele projetou para cobrir as entradas das primeiras estações do metrô de Paris.\n[…]\nEntre 1890 e 1930, Guimard projetou e construiu cerca de cinquenta edifícios, além de cento e quarenta e uma entradas do metrô de Paris, além de inúmeras peças de mobiliário e outros trabalhos decorativos. No entanto, na década de 1910, o Art Nouveau saiu de moda e, na década de 1960, a maioria de suas obras havia sido demolida, e apenas duas de suas edículas originais do Metro ainda estavam em vigor.\n[…]\nEdículas e balaustradas do metrô de Paris de 1900 a 1903. (Ver entradas do metrô de Paris por Hector Guimard)\n[…]\nConclusão do Hôtel Guimard, 122 Rue Mozart e Villa Flore, Paris XVI (Protegido 1964 e 1997)\n[…]\nGuimard Building, prédio de apartamentos em 18 rue Henri-Heine, Paris XVI\n[…]\nHector Guimard architectural drawings and papers, circa 1903-1933, (bulk circa 1903-1929).Held by the Department of Drawings & Archives, Avery Architectural & Fine Arts Library, Columbia University.\n[…]\nLe Cercle Guimard\n[…]\nlartnouveau.com - The work of Hector Guimard in Paris and in France\n[…]\nart-nouveau-around-the-world.org Hector Guimard\n[…]\nGuimard's works in the Cooper-Hewitt, National Design Museum",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Mapa do metrô de Londres",
      "descricao": "Diagrama esquemático das linhas do metrô de Londres, criado por Harry Beck e publicado em 1933."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1933, que desenhista criou o mapa do metrô de Londres com linhas retas e diagonais, modelo depois copiado no mundo todo?",
    "resposta": "Harry Beck",
    "distratores": [
      "Massimo Vignelli",
      "Edward Johnston",
      "Frank Pick"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tube_map",
      "https://en.wikipedia.org/wiki/Harry_Beck"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tube_map",
        "situacao": "ok",
        "texto": "The Tube map (sometimes called the London Underground map) is a schematic transport map of the lines, stations and services of the London Underground, known colloquially as \"the Tube\", hence the map's name. The first schematic Tube map was designed by Harry Beck in 1931. Since then, it has been expanded to include more of London's public transport systems, including the Docklands Light Railway, Lo\n[…]\nAlthough all of the western branches of the District and Piccadilly lines were included for the first time in 1933 with Harry Beck's first proper Tube map, the portion of the Metropolitan line beyond Rickmansworth did not appear until 1938, and the eastern end of the District line did not appear until the mid-1950s.\n[…]\nThe first diagrammatic map of London's rapid transit network was designed by Harry Beck in 1931. He was a London Underground employee who realised that because the railway ran mostly underground, the physical locations of the stations were largely irrelevant to the traveller wanting to know how to get from one station to another; only the topology of the route mattered. That approach is similar to that of electrical circuit diagrams although they were not the inspiration for Beck's map.\n[…]\nIn 1997, Beck's importance was posthumously recognised, and as of 2022, this statement is printed on every Tube map: \"This diagram is an evolution of the original design conceived in 1931 by Harry Beck\".\n[…]\nAlbus Dumbledore, a central character in the Harry Potter series, has a scar just above his left knee that is in the shape of a Tube map.\n[…]\nThe game development studio Dinosaur Polo Club created the game Mini Metro, whose main mechanic is to efficiently connect stations in a strict Harry Beck style.\n[…]\nParis Métro map\n[…]\nRoberts, Maxwell (2005). Underground Maps After Beck. London: Capital Transport Publishing. ISBN 978-1-85414-286-3.\n[…]\nTube maps from TfL\n[…]\nMost recent official Tube map in PDF format."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Harry_Beck",
        "situacao": "ok",
        "texto": "Henry Charles Beck (4 June 1902 – 18 September 1974) was an English technical draughtsman who created the first diagrammatic Tube map for the London Underground in 1931. Beck drew the diagram after being laid off by the Signalling Department of Underground Electric Railways of London.\n[…]\nAlthough his design was initially rejected, the Publicity Office of London Transport changed their minds after Beck resubmitted an updated copy. The map was first issued as a pocket edition in January 1933 and was immediately popular. The Underground has used topological maps to illustrate the network ever since. Harry Beck wanted to make the network easier to understand by colouring each train route and using only straight lines and 45 degree angles.\n[…]\nAs part of the Transported by Design programme of activities, on 15 October 2015, after two months of public voting, Harry Beck's tube map was elected by Londoners as number 3 of the 10 favourite transport design icons.\n[…]\nIn March 2006 viewers of BBC2's The Culture Show and visitors to London's Design Museum voted Harry Beck's Tube map as their second-favourite British design of the 20th century in the Great British Design Quest. The winner was Concorde and in third place was the Supermarine Spitfire.\n[…]\nIn March 2013 a blue plaque was unveiled on the house where Beck was born, in Wesley Road in Leyton, to mark the 80th anniversary of the Tube map.\n[…]\nIn 2021 a play, The Truth About Harry Beck, was staged at the Theatre Royal Bath's Ustinov Studio. The play portrays Beck's journey to create the Tube map and the challenges he faced along the way, focusing on his commitment, and the role of his wife, Nora, in supporting his work. In 2024 the play was staged at the London Transport Museum's Cubic Theatre.\n[…]\nHarry Beck's Original Tube Map"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mapa_do_Metropolitano_de_Londres",
        "situacao": "ok",
        "texto": "Metropolitano de Londres, também conhecido como Metro de Londres (português europeu) ou Metrô de Londres (português brasileiro), ou no seu nome original London Underground, conhecido ainda por The Tube, Tube, The Underground ou Underground, é um sistema de metropolitano que serve grande parte da Grande Londres e as áreas vizinhas de Essex, Hertfordshire e Buckinghamshire, no Reino Unido, e constit\n[…]\nPouco tempo depois de ser criada, a LT iniciou o processo de integração de todas as linhas de metropolitano existentes na altura, em apenas uma única rede de metropolitano. Todas as linhas \"ganharam\" um novas denominações, de modo e a fim de se integrarem todas dentro de apenas uma rede de metropolitano. Um mapa gratuito destas linhas, desenhado por Harry Beck, foi emitido e passou a ser dado aos passageiros, em 1933.\n[…]\nO mapa da rede do Metropolitano de Londres, feito pela TpL, e o logótipo circular, com uma faixa no meio, são imediatamente reconhecidos, por qualquer londrino, por quase todos os britânicos, e um pouco por todas as pessoas fora do país. Os mapas originais (iniciais) eram basicamente os mapas das ruas de Londres, com as linhas do metropolitano sobrepostas aos mesmos, e o mapa standard foi criado pelo engenheiro eléctrico e designer gráfico Harry Beck, em 1931.\n[…]\nO atual estilo do mapa do Metropolitano de Londres evoluiu do design criado pelo engenheiro eletrotécnico Harry Beck em 1933. É caracterizado pela sua apresentação geograficamente não rigorosa (baseada em diagramas de circuito) e pelo uso de um código de cores para as suas linhas.\n[…]\nO mapa é agora considerado um clássico do design; virtualmente, todas as grandes redes de transporte, por todo o mundo, têm um mapa inspirado no do Metropolitano de Londres, e muitas companhias de transportes também adoptaram o conceito para as suas carreiras ou frotas.\n[…]\nTransporte em Londres\n[…]\nMapa interativo do Metropolitano de Londres",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Gurgel BR-800",
      "descricao": "Minicarro brasileiro lançado em 1988 pela montadora Gurgel, de João Augusto Conrado do Amaral Gurgel."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que engenheiro paulista deu o próprio sobrenome à fábrica que lançou, em 1988, o minicarro nacional BR-800?",
    "resposta": "João Gurgel",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gurgel_BR-800",
      "https://en.wikipedia.org/wiki/Gurgel_BR-800"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gurgel_BR-800",
        "situacao": "ok",
        "texto": "O BR-800 foi o primeiro automóvel 100% desenvolvido e fabricado no Brasil, fruto da perseverança do engenheiro João Augusto Conrado do Amaral Gurgel, fundador da Gurgel Motores S/A.\n[…]\nIdealizado pelo próprio engenheiro, o BR-800 foi o primeiro automóvel a ser fabricado exclusivamente com tecnologia nacional. Seu motor, de 2 cilindros e 800cc, era fabricado na própria indústria da Gurgel, em Rio Claro, estado de São Paulo.\n[…]\nO projeto do Carro Econômico Nacional (sigla CENA) da Gurgel coincide com a criação do Ministério da Ciência e Tecnologia e com o fim da fabricação do Fusca pela VW no Brasil. O ministro Renato Archer percebeu a importância do desenvolvimento de uma tecnologia automotiva própria nacional e viabilizou o projeto com o financiamento, através da FINEP, e uma alíquota reduzida de apenas 5% do IPI específica para este veículo, enquanto sobre os outros veículos a alíquota em vigor era de 37%.\n[…]\nPara financiar a ampliação da fábrica, Gurgel criou a nova empresa \"Gurgel Motores S/A\" e lançou seus lotes de ações na Bolsa de Valores. Para atrair os investidores, as vendas do BR-800 nos primeiros dois anos seriam exclusivas para os novos acionistas.\n[…]\nO BR-800 foi fabricado de 1988 a 1991, quando foi substituído pelo Supermini, sua evolução. A Gurgel Motores S/A funcionou até 1994, mas a marca foi posteriormente adquirida pelo empresário Paulo Freire Lemos em 2004 e voltou a existir hoje.\n[…]\nGurgel\n[…]\nGurgel Supermini\n[…]\nCALDEIRA, Lélis. Gurgel: Um sonho forjado em fibra. Labortexto, ISBN 8587917161\n[…]\nGurgel: o engenheiro que virou carro\n[…]\nQuatro Rodas. Grandes Brasileiros: Gurgel BR-800\n[…]\nLexicar Brasil. Gurgel\n[…]\nQuatro Rodas nº 341 de dezembro de 1988\n[…]\nGurgel Clube Rio de Janeiro"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gurgel_BR-800",
        "situacao": "ok",
        "texto": "The Gurgel BR-800 is a Brazilian city car produced by Gurgel between 1988 and early 1992. The project started under the acronym CENA, meaning \"National Economical Car\" (\"Carro Econômico NAcional\", in Portuguese), designed to be essentially a small car for urban daily use. It received great attention and good reviews from critics, regarding the mechanic solutions, comfort, drivability and stability\n[…]\nThe engine, called the Gurgel Enertron, was developed by Gurgel themselves. This is a water-cooled flat-twin engine, essentially a halved Volkswagen flat-four engine. it was developed with either 650 cc (40 cu in) or 800 cc (49 cu in)  displacements, generating 26 PS (26 hp; 19 kW) and 30 PS (30 hp; 22 kW) respectively. It had a very simple and robust design, eliminating totally the V-belt by using the crankshaft for activating the alternator, and the camshaft for water and oil pump.\n[…]\nThe car's ride also came in for heavy complaints, due to the use of Gurgel's own \"Springshock\" suspension. This system, made mainly from synthetic materials, was abandoned for a more conventional setup for the succeeding Supermini.\n[…]\nBetween 1988 and July 1990, Gurgel BR-800 had the IPI tax reduced to 7%, thus giving a great advantage for Gurgel. In July 1990, the Brazilian president Fernando Collor decided to give a similar tax cut to all cars with engines smaller than one litre, thus equating the price of the BR-800 with those of significantly larger and more usable cars, reducing the BR-800 sales to a trickle.\n[…]\nBy the end of 1991, the BR-800 received some restyling and other improvements, it was now sold under the name BR-SL. This then received some general improvements and a more thorough restyling, evolving into the Gurgel Supermini.\n[…]\nGurgel 800 General information and forums about Gurgel cars (in Portuguese)"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Balão de ar quente",
      "descricao": "Aeronave mais leve que o ar, com um envelope de ar aquecido e uma cesta para os passageiros."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1783, na França, o primeiro voo tripulado da história foi feito num balão de ar quente construído por quais irmãos?",
    "resposta": "Irmãos Montgolfier",
    "fonte": [
      "https://en.wikipedia.org/wiki/Montgolfier_brothers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Montgolfier_brothers",
        "situacao": "ok",
        "texto": "The Montgolfier brothers – Joseph-Michel Montgolfier (French: [ʒozɛf miʃɛl mɔ̃ɡɔlfje]; 26 August 1740 – 26 June 1810) and Jacques-Étienne Montgolfier ([ʒak etjɛn mɔ̃ɡɔlfje]; 6 January 1745 – 2 August 1799) – were aviation pioneers, balloonists and paper manufacturers from the commune Annonay in Ardèche, France. They invented the Montgolfière-style hot air balloon, globe aérostatique, which launche\n[…]\nHe believed that the smoke itself was the buoyant part and contained within it a special gas, which he called \"Montgolfier Gas\", with a special property he called levity, which is why he preferred smoldering fuel.\n[…]\nÉtienne Montgolfier was the first human to lift off the Earth in a balloon, making a tethered test flight from the yard of the Réveillon workshop in the Faubourg Saint-Antoine, most likely on 15 October 1783. A little while later on that same day, physicist Pilâtre de Rozier became the second to ascend into the air, to an altitude of 25 metres (82 ft), which was the length of the tether.\n[…]\nIn December 1783, father Pierre Montgolfier was elevated to the nobility and the hereditary appellation of de Montgolfier by King Louis XVI.\n[…]\nOn 1 December 1783, a few months after the Montgolfiers' first flight, Jacques Alexandre César Charles rose to an altitude of about 3 km (1.9 mi) near Paris in a hydrogen-filled balloon he had developed.\n[…]\nIn 1797, Montgolfier's friend Matthew Boulton took out a British patent on his behalf.\n[…]\nThe Montgolfier Company in Annonay still exists under the name Canson. It produces fine art papers, school drawing papers and digital fine art and photography papers sold in 150 countries.\n[…]\nIn 1983, the Montgolfier brothers were inducted into the International Air & Space Hall of Fame at the San Diego Air & Space Museum.\n[…]\nHistory of aviation\n[…]\nAdélaïde de Montgolfier\n[…]\n\"Lighter than air: the Montgolfier brothers\"\n[…]\n\"Balloons and the Montgolfier brothers\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Irm%C3%A3os_Montgolfier",
        "situacao": "ok",
        "texto": "Os Irmãos Montgolfier: Joseph-Michel (Annonay, 26 de agosto de 1740 — Balaruc-les-Bains, 26 de junho de 1810) e Jacques-Étienne (Annonay, 6 de janeiro de 1745 — Neuchâtel, 2 de agosto de 1799), foram dois irmãos inventores franceses, que construíram o primeiro balão tripulado do Mundo, que elevou Étienne aos céus em 5 de junho de 1783.\n[…]\nDevido a esse feito, em dezembro de 1783, o pai deles, Pierre, foi elevado à nobreza com brasão próprio e o sobrenome de Montgolfier passou a ser hereditário, por decreto do Rei Luís XVI.\n[…]\nDecididos a fazer uma demonstração pública para reivindicar a autoria do invento, os irmãos Montgolfier construíram um balão em forma de esfera feito de serapilheira com três camadas de papel no interior, com capacidade de 790 m³ de ar pesando 225 kg, constituído de quatro partes (o topo e mais três laterais) seguras por 1,8 mil botões e uma rede de pesca reforçada.\n[…]\nEm colaboração com o fabricante de papel de parede, Jean-Baptiste Réveillon, Étienne construiu um balão ainda maior, com 1 060 m³ de capacidade de ar, feito de tafetá envernizado com alume (que tem propriedades antichamas). O balão era azul, decorado com flores douradas, signos do zodíaco e Sóis. O teste seguinte ocorreu em 11 de setembro de 1783 em terras próximas à casa de Réveillon.\n[…]\nAo que se sabe, Étienne Montgolfier foi o primeiro ser humano a levantar voo do solo, fazendo no mínimo um voo seguro por cordas do pátio da oficina de Réveillon no subúrbio de Paris conhecido como Faubourg Saint-Antoine, na provável date de 15 de outubro de 1783. Mais tarde naquele mesmo dia, Pilâtre de Rozier tornou-se o segundo ser humano a voar num balão atingindo cerca de 24 m de altitude, que era o comprimento da corda.\n[…]\nBalão\n[…]\n\"Balloons and the Montgolfier brothers\"\n[…]\nPortrait des frères Montgolfier\n[…]\nMusée des papeteries Canson et Montgolfier",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Balão de ar quente",
      "descricao": "Aeronave mais leve que o ar, com um envelope de ar aquecido e uma cesta para os passageiros."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Antes de levar pessoas, um balão de ar quente subiu diante do rei em Versalhes, em 1783, levando um pato, um galo e qual outro animal?",
    "resposta": "Ovelha",
    "distratores": [
      "Cachorro",
      "Gato",
      "Coelho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Montgolfier_brothers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Montgolfier_brothers",
        "situacao": "ok",
        "texto": "The Montgolfier brothers – Joseph-Michel Montgolfier (French: [ʒozɛf miʃɛl mɔ̃ɡɔlfje]; 26 August 1740 – 26 June 1810) and Jacques-Étienne Montgolfier ([ʒak etjɛn mɔ̃ɡɔlfje]; 6 January 1745 – 2 August 1799) – were aviation pioneers, balloonists and paper manufacturers from the commune Annonay in Ardèche, France. They invented the Montgolfière-style hot air balloon, globe aérostatique, which launche\n[…]\nHe believed that the smoke itself was the buoyant part and contained within it a special gas, which he called \"Montgolfier Gas\", with a special property he called levity, which is why he preferred smoldering fuel.\n[…]\nÉtienne Montgolfier was the first human to lift off the Earth in a balloon, making a tethered test flight from the yard of the Réveillon workshop in the Faubourg Saint-Antoine, most likely on 15 October 1783. A little while later on that same day, physicist Pilâtre de Rozier became the second to ascend into the air, to an altitude of 25 metres (82 ft), which was the length of the tether.\n[…]\nIn December 1783, father Pierre Montgolfier was elevated to the nobility and the hereditary appellation of de Montgolfier by King Louis XVI.\n[…]\nOn 1 December 1783, a few months after the Montgolfiers' first flight, Jacques Alexandre César Charles rose to an altitude of about 3 km (1.9 mi) near Paris in a hydrogen-filled balloon he had developed.\n[…]\nIn 1797, Montgolfier's friend Matthew Boulton took out a British patent on his behalf.\n[…]\nThe Montgolfier Company in Annonay still exists under the name Canson. It produces fine art papers, school drawing papers and digital fine art and photography papers sold in 150 countries.\n[…]\nIn 1983, the Montgolfier brothers were inducted into the International Air & Space Hall of Fame at the San Diego Air & Space Museum.\n[…]\nAdélaïde de Montgolfier\n[…]\n\"Lighter than air: the Montgolfier brothers\"\n[…]\n\"Balloons and the Montgolfier brothers\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Irm%C3%A3os_Montgolfier",
        "situacao": "ok",
        "texto": "Os Irmãos Montgolfier: Joseph-Michel (Annonay, 26 de agosto de 1740 — Balaruc-les-Bains, 26 de junho de 1810) e Jacques-Étienne (Annonay, 6 de janeiro de 1745 — Neuchâtel, 2 de agosto de 1799), foram dois irmãos inventores franceses, que construíram o primeiro balão tripulado do Mundo, que elevou Étienne aos céus em 5 de junho de 1783.\n[…]\nNa semana seguinte, em 19 de setembro de 1783, em frente ao Palácio de Versalhes perante um público que incluiu o Rei Luis XVI e a Rainha Maria Antonieta, o Aérostat Réveillon voou com os primeiros seres vivos a bordo: uma ovelha, um pato e um galo (apesar de o Rei ter proposto enviar dois criminosos). Este voo durou cerca de 8 minutos, se estendeu por 3 km chegando a cerca de 460 m de altitude e pousando em segurança.\n[…]\nAo que se sabe, Étienne Montgolfier foi o primeiro ser humano a levantar voo do solo, fazendo no mínimo um voo seguro por cordas do pátio da oficina de Réveillon no subúrbio de Paris conhecido como Faubourg Saint-Antoine, na provável date de 15 de outubro de 1783. Mais tarde naquele mesmo dia, Pilâtre de Rozier tornou-se o segundo ser humano a voar num balão atingindo cerca de 24 m de altitude, que era o comprimento da corda.\n[…]\nAs \"provas\" de que o invento dos Montgolfier teria sido apenas a aplicação prática do aeróstato inventado por Gusmão, ficam por conta de que após a fuga dele para a Espanha (devido à \"Inquisição\"), ele deixou seus planos inventivos com seu irmão e notável cientista Alexandre de Gusmão. Fontes alegam que quando Alexandre esteve em Paris, manteve estreitas relações de amizade com o cientista José de Barros, o qual por sua vez era amigo pessoal dos Montgolfier e lhes teria passado essas informações.\n[…]\nBalão\n[…]\nBalão de ar quente\n[…]\n\"Balloons and the Montgolfier brothers\"\n[…]\nPortrait des frères Montgolfier\n[…]\nMusée des papeteries Canson et Montgolfier",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Helicóptero",
      "descricao": "Aeronave de asas rotativas em que a sustentação e a propulsão vêm de rotores que giram na horizontal."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que engenheiro nascido em Kiev e radicado nos Estados Unidos fez voar, em 1939, o protótipo que definiu o helicóptero moderno, com um rotor principal e outro na cauda?",
    "resposta": "Igor Sikorsky",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sikorsky_VS-300",
      "https://en.wikipedia.org/wiki/Igor_Sikorsky"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sikorsky_VS-300",
        "situacao": "ok",
        "texto": "The Vought-Sikorsky VS-300 (or S-46) is an American single-engine helicopter designed by Igor Sikorsky. It had a single three-blade rotor originally powered by a 75 horsepower (56 kW) engine. The first \"free\" flight of the VS-300 was on 13 May 1940. The VS-300 was the first successful single lifting rotor helicopter in the United States and the first successful helicopter to use a single vertical-\n[…]\nWith floats attached, it became the first practical amphibious helicopter.\n[…]\nIgor Sikorsky's quest for a practical helicopter began in 1938, when as the Engineering Manager of the Vought-Sikorsky Division of United Aircraft Corporation, he was able to convince the directors of United Aircraft that his years of study and research into rotary-wing flight problems would lead to a breakthrough. His first experimental machine, the VS-300, was test flown by Sikorsky on 14 September 1939, tethered by cables.\n[…]\nIn developing the concept of rotary-wing flight, Sikorsky was the first to introduce a single engine to power both the main and tail rotor systems. The only previous successful attempt at a single-lift rotor helicopter, the Yuriev-Cheremukhin TsAGI-1EA in 1931 in the Soviet Union, used a pair of uprated, Russian-built Gnome Monosoupape rotary engines of 120 hp each for its power.\n[…]\nSikorsky fitted utility floats (also called pontoons) to the VS-300 and performed a water landing and takeoff on 17 April 1941, making it the first practical amphibious helicopter. On 6 May 1941, the VS-300 beat the world endurance record held by the Focke-Wulf Fw 61, by staying aloft for 1 hour 32 minutes and 26.1 seconds. A two-seater version was delivered to the US Army in May 1942.\n[…]\nMain rotor diameter:  30 ft 0 in (9.14 m)\n[…]\nSikorsky R-4\n[…]\nList of single seat helicopters\n[…]\n\"Wingless Helicopter Flies Straight Up\", Popular Mechanics, September 1940 article showing Sikorsky flying his first helicopter"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Igor_Sikorsky",
        "situacao": "ok",
        "texto": "Igor Ivanovich Sikorsky (25 May 1889 – 26 October 1972) was a Russian-American aviation pioneer in both helicopters and fixed-wing aircraft. His first success came with the Sikorsky S-2, the second aircraft of his design and construction. His fifth airplane, the S-5, won him national recognition in Russia and secured F.A.I. pilot's license number 64.\n[…]\nIgor Sikorsky was born in Kiev, Russian Empire (now Kyiv, Ukraine), on May 25, 1889. He was the youngest of five children. His father, Ivan Alexeevich Sikorsky, was a professor of psychology in Saint Vladimir University (now Taras Shevchenko National University), a psychiatrist with an international reputation, and an ardent Russian nationalist.\n[…]\nBy the start of World War I in 1914, Sikorsky's airplane research and production business in Kiev was flourishing, and his factory made bombers during the war. After the Russian Revolution in 1917, Igor Sikorsky fled his homeland in early 1918, because the Bolsheviks threatened to shoot him for being \"the Tsar's friend and a very popular person\". He moved to France where he was offered a contract for the design of a new, more powerful Muromets-type plane.\n[…]\nSikorsky, Igor Ivan. The Message of the Lord's Prayer. New York: C. Scribner's sons, 1942. OCLC 2928920\n[…]\nSikorsky, Igor Ivan. The Invisible Encounter. New York: C. Scribner's Sons, 1947. OCLC 1446225\n[…]\nSikorsky, Igor Ivan. The Story of the Winged-S: Late Developments and Recent Photographs of the Helicopter, an Autobiography. New York: Dodd, Mead, 1967. OCLC 1396277\n[…]\nSikorsky Prize – a prize for human powered helicopters named in his honor\n[…]\n10090 Sikorsky – an asteroid named in honor of Igor Sikorsky\n[…]\nIgor Sikorsky at IMDb\n[…]\nIgor Sikorsky Aerial Russia – the Romance of the Giant Aeroplane – early days of Igor Sikorsky online book\n[…]\nIgor Sikorsky. Time magazine, November 16, 1953. (Cover)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vought-Sikorsky_VS-300",
        "situacao": "ok",
        "texto": "O Vought-Sikorsky VS-300 — ou S-46 — foi um helicóptero monomotor norte-americano projetado por Igor Sikorsky. Possuía um único rotor de três pás, originalmente acionado por um motor de 75 hp (56 kW). O primeiro voo \"livre\" do VS-300 ocorreu em 13 de maio de 1940. O VS-300 foi o primeiro helicóptero bem-sucedido com um único rotor de sustentação nos Estados Unidos e o primeiro helicóptero bem-suce\n[…]\nA busca de Igor Sikorsky por um helicóptero prático começou em 1938, quando, como gerente de engenharia da divisão Vought-Sikorsky da United Aircraft Corporation, conseguiu convencer os diretores da United Aircraft de que seus anos de estudo e pesquisa sobre os problemas do voo de aeronaves de asas rotativas levariam a um avanço. Sua primeira máquina experimental, o VS-300, foi pilotada em teste por Sikorsky em 14 de setembro de 1939, presa por cabos.\n[…]\nAo desenvolver o conceito de voo por asas rotativas, Sikorsky foi o primeiro a introduzir um único motor para acionar tanto o sistema do rotor principal quanto o do rotor de cauda. A única tentativa anterior bem-sucedida de helicóptero com um único rotor de sustentação, o Yuriev-Cheremukhin  ru, em 1931, na União Soviética, utilizava um par de motores rotativos Gnome Monosoupape de fabricação russa e potência aumentada, com 120 hp cada.\n[…]\nSikorsky instalou flutuadores utilitários — também chamados de pontões — no VS-300 e realizou um pouso e uma decolagem na água em 17 de abril de 1941, tornando-o o primeiro helicóptero anfíbio prático. Em 6 de maio de 1941, o VS-300 superou o recorde mundial de permanência em voo detido pelo Focke-Wulf Fw 61, ao permanecer no ar por 1 hora, 32 minutos e 26,1 segundos. Uma versão de dois lugares foi entregue ao Exército dos Estados Unidos em maio de 1942.\n[…]\n\"Wingless Helicopter Flies Straight Up\", Popular Mechanics, artigo de setembro de 1940 que mostra Sikorsky pilotando seu primeiro helicóptero",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Primeira travessia aérea do Atlântico Sul",
      "descricao": "Voo de Lisboa ao Rio de Janeiro feito em 1922 pelos aviadores portugueses Gago Coutinho e Sacadura Cabral."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1922, que dupla de aviadores portugueses fez a primeira travessia aérea do Atlântico Sul, de Lisboa ao Rio de Janeiro?",
    "resposta": "Gago Coutinho e Sacadura Cabral",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Primeira_travessia_a%C3%A9rea_do_Atl%C3%A2ntico_Sul",
      "https://en.wikipedia.org/wiki/Gago_Coutinho",
      "https://en.wikipedia.org/wiki/Sacadura_Cabral"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Primeira_travessia_a%C3%A9rea_do_Atl%C3%A2ntico_Sul",
        "situacao": "ok",
        "texto": "A primeira travessia aérea do Atlântico Sul foi concluída com sucesso pelos aeronautas portugueses Gago Coutinho e Sacadura Cabral, em 1922, no contexto das comemorações do Primeiro Centenário da Independência do Brasil.\n[…]\nA épica viagem iniciou-se em Lisboa, às 7h00 (hora GMT) de 30 de março de 1922, empregando um hidroavião monomotor Fairey F III-D MkII, especialmente concebido para a viagem, equipado com motor Rolls-Royce e batizado Lusitânia. Sacadura Cabral exercia as funções de piloto e Gago Coutinho as de navegador. Este último havia criado, e empregaria durante a viagem, um horizonte artificial adaptado a um sextante, a fim de medir a altura dos astros, invenção que revolucionou a navegação aérea à época.\n[…]\nOs aeronautas foram recolhidos por um Cruzador da Marinha Portuguesa, que os conduziu a Fernando de Noronha. Apesar de exaustos pelo voo de 1 700 quilômetros e pelo pouso acidentado, comemoraram o achamento, com precisão, daqueles rochedos em pleno Atlântico Sul, apenas com o recurso do método de navegação astronômica criado por Gago Coutinho.\n[…]\nPINTO, Rui Miguel da Costa, \"Gago Coutinho simples aventureiro ou um homem de Ciência\" in Filatelia Lusitana, série III, n.º19, Lisboa, Federação Portuguesa de Filatelia, 2009\n[…]\nPINTO, Rui Miguel da Costa, Gago Coutinho, breve perfil biográfico, Lisboa, Academia da Marinha, 2009\n[…]\nPINTO, Rui Miguel da Costa, Gago Coutinho e as relações luso-brasileiras, Espírito Santo, Instituto Histórico e Geográfico do Espírito Santo, 2009\n[…]\nInstituto Camões: Gago Coutinho\n[…]\nGago Coutinho (1869-1959), geógrafo e historiador. Uma biografia científica\n[…]\nGago Coutinho\n[…]\nGago Coutinho Breve Perfil Biográfico\n[…]\nA VIAGEM DE SACADURA CABRAL E GAGO COUTINHO - EDUARDO BUENO"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gago_Coutinho",
        "situacao": "ok",
        "texto": "Carlos Viegas Gago Coutinho, GCTE, GCC (Portuguese pronunciation: [ˈkaɾluʒ ˈvjeɣɐʒ ˈɣaɣu koˈtĩɲu]; 17 February 1869 – 18 February 1959), generally known simply as Gago Coutinho, was a Portuguese geographer, cartographer, naval officer, historian and aviator.\n[…]\nAn aviation pioneer, Gago Coutinho and Sacadura Cabral were the first to cross the South Atlantic Ocean by air, in a journey from March to June 1922, started in Lisbon, Portugal, and finished in Rio de Janeiro, Brazil, using a seaplane variant of the British reconnaissance biplane Fairey III.\n[…]\nGago Coutinho was nominated head of the Geodesical Mission of Eastern Africa in May 1907, a post he held until the beginning of 1911. It was during this assignment that he met Portuguese aviator pioneer Artur de Sacadura Cabral, who become his close friend and who would be his mentor for future aviation projects. Afterwards, he led the Portuguese mission that delimited Angola borders in Barotze, which was formed in 1912.\n[…]\nThe year after his return to Portugal, he was nominated the head of the Geodesical Mission of São Tomé and Príncipe, in 1915, which he was until middle 1919. In 1917, Gago Coutinho and Artur de Sacadura Cabral did their first flights together. In 1919, encouraged by his friend, he started to dedicate himself to the improvement of the aerial navigation methods. They took several flights together to study the methods, the most important was the first flight from Lisbon to Funchal, in 1919.\n[…]\nPinto, Rui Miguel da Costa, \"Gago Coutinho simples aventureiro ou um homem de Ciência\", in Filatelia Lusitana, série III, nº19, Lisboa, Federação Portuguesa de Filatelia, 2009.\n[…]\nMap of the journey (Portuguese Air Museum)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sacadura_Cabral",
        "situacao": "ok",
        "texto": "Artur de Sacadura Freire Cabral, GCTE (23 May 1881 – 15 November 1924), known simply as Sacadura Cabral (Portuguese pronunciation: [sɐkɐˈðuɾɐ kɐˈβɾal]), was a Portuguese aviation pioneer. He, together with fellow aviator Gago Coutinho, conducted the first flight across the South Atlantic Ocean in 1922, and also the first using only astronomical navigation, from Lisbon, Portugal, to Rio de Janeiro,\n[…]\nHe was the granduncle of Portuguese politicians Miguel Portas and Paulo Portas.\n[…]\nWorks by or about Sacadura Cabral at the Internet Archive"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Primeira travessia aérea do Atlântico Sul",
      "descricao": "Voo de Lisboa ao Rio de Janeiro feito em 1922 pelos aviadores portugueses Gago Coutinho e Sacadura Cabral."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1922, o voo pioneiro de Lisboa ao Rio de Janeiro sobre o Atlântico Sul foi feito para comemorar que data brasileira?",
    "resposta": "Centenário da Independência do Brasil",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Primeira_travessia_a%C3%A9rea_do_Atl%C3%A2ntico_Sul",
      "https://en.wikipedia.org/wiki/Gago_Coutinho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Primeira_travessia_a%C3%A9rea_do_Atl%C3%A2ntico_Sul",
        "situacao": "ok",
        "texto": "A primeira travessia aérea do Atlântico Sul foi concluída com sucesso pelos aeronautas portugueses Gago Coutinho e Sacadura Cabral, em 1922, no contexto das comemorações do Primeiro Centenário da Independência do Brasil.\n[…]\nA épica viagem iniciou-se em Lisboa, às 7h00 (hora GMT) de 30 de março de 1922, empregando um hidroavião monomotor Fairey F III-D MkII, especialmente concebido para a viagem, equipado com motor Rolls-Royce e batizado Lusitânia. Sacadura Cabral exercia as funções de piloto e Gago Coutinho as de navegador. Este último havia criado, e empregaria durante a viagem, um horizonte artificial adaptado a um sextante, a fim de medir a altura dos astros, invenção que revolucionou a navegação aérea à época.\n[…]\nReconduzidos a Fernando de Noronha, aguardaram até 5 de junho, quando lhes foi enviado um novo Fairey F III-D (o n.° 17), batizado pela esposa do então Presidente do Brasil, Epitácio Pessoa (1919-1922), como Santa Cruz.\n[…]\nAclamados entusiasticamente como heróis em todas as cidades brasileiras onde amerisaram, os aeronautas haviam concluído com êxito não apenas a primeira travessia do Atlântico Sul, mas pela primeira vez na História da Aviação, tinha-se viajado sobre o Oceano Atlântico apenas com o auxílio da navegação astronômica a partir do aeroplano.\n[…]\nPINTO, Rui Miguel da Costa, Gago Coutinho, breve perfil biográfico, Lisboa, Academia da Marinha, 2009\n[…]\nPINTO, Rui Miguel da Costa, Gago Coutinho e as relações luso-brasileiras, Espírito Santo, Instituto Histórico e Geográfico do Espírito Santo, 2009\n[…]\nGago Coutinho (1869-1959), geógrafo e historiador. Uma biografia científica\n[…]\nGago Coutinho\n[…]\nGago Coutinho Breve Perfil Biográfico\n[…]\nA VIAGEM DE SACADURA CABRAL E GAGO COUTINHO - EDUARDO BUENO"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gago_Coutinho",
        "situacao": "ok",
        "texto": "Carlos Viegas Gago Coutinho, GCTE, GCC (Portuguese pronunciation: [ˈkaɾluʒ ˈvjeɣɐʒ ˈɣaɣu koˈtĩɲu]; 17 February 1869 – 18 February 1959), generally known simply as Gago Coutinho, was a Portuguese geographer, cartographer, naval officer, historian and aviator.\n[…]\nAn aviation pioneer, Gago Coutinho and Sacadura Cabral were the first to cross the South Atlantic Ocean by air, in a journey from March to June 1922, started in Lisbon, Portugal, and finished in Rio de Janeiro, Brazil, using a seaplane variant of the British reconnaissance biplane Fairey III.\n[…]\nIn June 2022, the centenary of the first aerial crossing of the South Atlantic, it was announced that Faro Airport would officially change its name to Gago Coutinho Airport.\n[…]\nArtur de Sacadura Cabral had already delineated by them the project of making the first aerial crossing of the South Atlantic, meant to take place in 1922, the year of the centennial of the independence of Brazil.\n[…]\nThe Fairey IIIB seaplane named Lusitânia used by Gago Coutinho and Sacadura Cabral for their transatlantic flight did not have enough fuel capacity to make the entire trip unaided so various stops were made along the way and the aviators were shadowed by a support ship, República. On the journey down the Brazilian coast a heavy rain storm caused the aircraft's engine to fail and the aviators were forced to ditch in the ocean.\n[…]\nPinto, Rui Miguel da Costa, \"Gago Coutinho simples aventureiro ou um homem de Ciência\", in Filatelia Lusitana, série III, nº19, Lisboa, Federação Portuguesa de Filatelia, 2009.\n[…]\nPinto, Rui Miguel da Costa, Gago Coutinho e as relações luso brasileiras, Espírito Santo (Brasil), Instituto Histórico e Geográfico do Espírito Santo, 2009."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Barco a vapor de Robert Fulton",
      "descricao": "Barco a vapor de Robert Fulton que, em 1807, iniciou serviço de passageiros entre Nova York e Albany."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1807, o barco a vapor de Robert Fulton passou a levar passageiros entre Nova York e Albany, navegando por qual rio?",
    "resposta": "Rio Hudson",
    "fonte": [
      "https://en.wikipedia.org/wiki/North_River_Steamboat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/North_River_Steamboat",
        "situacao": "ok",
        "texto": "The North River Steamboat or North River, colloquially known as the Clermont, is widely regarded as the world's first vessel to demonstrate the viability of using steam propulsion for commercial water transportation. Built in 1807, the North River Steamboat operated on the Hudson River – at that time often known as the North River – between New York City and Albany, New York.\n[…]\nScheduled passenger service began on September 4, 1807. Steamboat left New York on Saturdays at 6:00 pm, and returned from Albany on Wednesdays at 8:00 am, taking about 36 hours for each journey. Stops were made at West Point, Newburgh, Poughkeepsie, Esopus, and Hudson; other stops were sometimes made, such as Red Hook and Catskill. In the company's publicity the ship was called North River Steamboat or just Steamboat (there being no other in operation at the time).\n[…]\nwith great fanfare on July 10, 1909, at Staten Island, New York. Her US Official Number (O.N.) was 206719. The water used to christen her came from the same well Fulton drank from, at Livingston Place, Clermont, New York. Her ship's bell, from the original Clermont, was borrowed from the Hudson River Day Line's riverboat Robert Fulton (1909).\n[…]\nShe was to be seen in the parade with a replica of the Henry Hudson's ship Half Moon, brought from Rotterdam to New York that July by the Holland America Line vessel SS Soestdyk.\n[…]\nAfter the 1923 homonymous silent film, starring Marion Davies, came Little Old New York (1940), the sound version of the historical film drama from 20th Century Fox, based on Robert Fulton's venture to build the North River Steamboat (aka Clermont in the film). Both a 12-foot shooting miniature and a full size mock-up of the steamboat were built for the Fox production; both were based on the original full sized 1909 Clermont reproduction that had been broken up several years before."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/North_River_Steamboat",
        "situacao": "ok",
        "texto": "O North River Steamboat ou North River, coloquialmente conhecido como Clermont, é amplamente considerado o primeiro navio do mundo a demonstrar a viabilidade do uso de propulsão a vapor para transporte comercial de água. Construído em 1807, o North River Steamboat operava no rio Hudson - na época conhecido como North River - entre a cidade de Nova York e Albany, Nova York. Foi construído pelo rico\n[…]\n\"Meu primeiro barco a vapor no rio Hudson tinha 150 pés de comprimento, 13 pés de largura, puxando 2 pés de água, proa e popa 60 graus: ela deslocou 36,40 [sic] pés cúbicos, igual a 100 toneladas de água; sua proa apresentava 26 pés para a água, mais e menos a resistência de 1 pé correndo 4 milhas por hora.\n[…]\nEspecificações publicadas de Fulton após o alargamento e reconstrução geral do Steamboat:\n[…]\nO barco tinha três cabines com 54 beliches, cozinha, despensa, despensa, bar e sala de mordomo.\n[…]\nA corrida inaugural do navio foi comandada pelo capitão Andrew Brink, e deixou Nova York em 17 de agosto de 1807, com um complemento de convidados a bordo. Eles chegaram a Albany dois dias depois, após 32 horas de viagem e uma parada de 20 horas na propriedade de Livingston, Clermont Manor. A viagem de volta foi concluída em 30 horas, com apenas uma parada de uma hora em Clermont; A velocidade média do navio era de 5 mph (8 km / h).\n[…]\n\"Steamboat Days at Clermont\" Friends of Clermont. Retrieved August 26, 2009.\n[…]\nThe Clermont International Marine Engineering, September 1909: Discussion of original and building of replica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Amelia Earhart",
      "descricao": "Aviadora americana pioneira, desaparecida em 1937 durante uma tentativa de volta ao mundo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1937, a aviadora americana Amelia Earhart desapareceu durante uma tentativa de dar a volta ao mundo. Sobre que oceano ela sumiu?",
    "resposta": "Oceano Pacífico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Amelia_Earhart"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amelia_Earhart",
        "situacao": "ok",
        "texto": "Amelia Mary Earhart ( AIR-hart; born July 24, 1897; disappeared July 2, 1937; declared dead January 5, 1939) was an American aviator and aviation pioneer who became one of the most celebrated figures of early flight.\n[…]\nOn July 2, 1937, she disappeared over the Pacific Ocean while attempting to become the first female pilot to circumnavigate the world. Since her disappearance, Earhart  has become a global cultural figure and numerous films, documentaries, and books have recounted her life.\n[…]\nManning, the only skilled radio operator, had left the crew, which now consisted of Noonan and Earhart. The pair departed Miami on June 1 and after numerous stops in South America, Africa, the Indian subcontinent, and Southeast Asia, arrived in Lae, New Guinea, on June 29, 1937. At this stage, about 22,000 miles (35,000 km) of the journey had been completed. The remaining 7,000 miles (11,000 km) would be over the Pacific.\n[…]\nImmediately after the end of the official search, Putnam financed a private search by local authorities of nearby Pacific islands and waters. In late July 1937, Putnam chartered two small boats and, while he remained in the United States, directed a search of other islands. Putnam acted to become the trustee of Earhart's estate so he could pay for the searches and related bills.\n[…]\nLast Flight (1937) features the periodic journal entries she sent to the United States during her round-the-world flight attempt, and was published in newspapers in the weeks prior to her departure from New Guinea. The journal was compiled by Earhart's husband GP Putnam after her disappearance over the Pacific. Many historians consider this book to be only partially Earhart's original work."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Amelia_Earhart",
        "situacao": "ok",
        "texto": "Amelia Mary Earhart (Atchison, Kansas, 24 de julho de 1897 – desaparecida em 2 de julho de 1937) foi pioneira da aviação dos Estados Unidos, autora e defensora dos direitos das mulheres. Earhart foi a primeira mulher a receber a \"The Distinguished Flying Cross\", condecoração dada por ter sido a primeira mulher a voar sozinha sobre o Oceano Atlântico.\n[…]\nAmelia desapareceu no Oceano Pacífico, perto da Ilha Howland enquanto tentava realizar um voo ao redor do globo em 1937. Foi declarada morta no dia 5 de janeiro de 1939.\n[…]\nApós o voo solo de Charles Lindbergh através do Atlântico em 1927, Amy Phipps Guest, uma socialite americana (1873-1959), expressou interesse em se tornar a primeira mulher a cruzar o Oceano Atlântico. Porém, ao perceber que a viagem seria muito perigosa, ela se ofereceu para patrocinar o projeto, buscando \"uma outra garota com a mesma fibra\". Durante uma tarde de trabalho em abril de 1928, Earhart recebeu um telefonema do publicitário Hilton H.\n[…]\nFred Noonan foi o único membro da tripulação de Earhart no segundo voo. Eles partiram de Miami em 1 de junho e após várias escalas na América do Sul, África, Índia e Sudoeste da Ásia, chegaram em Lae, Nova Guiné em 29 de junho de 1937. Nesse momento a viagem havia completado cerca de 22 000 milhas (35 000 km). Restavam 7 000 milhas (11 000 km) sobrevoando o Pacífico.\n[…]\nOperadores do Oceano Pacífico e dos Estados Unidos poderão ter recebido sinais do Electra, porém eram incompreensíveis ou fracos.\n[…]\nLast Flight (1937) notícias periódicas que ela enviava para os Estados Unidos durante sua tentativa de voo ao redor do mundo, publicadas semanas antes até sua última decolagem de Nova Guiné. Organizadas pelo seu marido GP Putnam após seu desaparecimento no Pacífico, muitos historiadores consideram esse livro como tendo somente parte do trabalho original de Earhart.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Bonde de Santa Teresa",
      "descricao": "Linha de bondes elétricos que liga o centro do Rio de Janeiro ao bairro de Santa Teresa."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No Rio de Janeiro, os bondes amarelos de Santa Teresa passam por cima de qual antigo aqueduto colonial?",
    "resposta": "Arcos da Lapa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bonde_de_Santa_Teresa",
      "https://en.wikipedia.org/wiki/Santa_Teresa_Tram"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bonde_de_Santa_Teresa",
        "situacao": "ok",
        "texto": "Os Bondes de Santa Teresa são um serviço de transporte de passageiros operados pela estatal CENTRAL, que opera na cidade do Rio de Janeiro, no Brasil. Os seus veículos são o símbolo do bairro de Santa Teresa.\n[…]\nA concessão das linhas de carris entre a cidade e os morros de Santa Teresa e Paula Mattos, foi obtida em 1872 por empresários que fundaram a Companhia Ferro-Carril de Santa Teresa. A concessão abrangia a exploração de uma linha entre a atual Praça XV de Novembro e o Largo da Lapa até à avenida Gomes Freire, esquina com a rua do Riachuelo.\n[…]\nA tração elétrica abriu uma nova possibilidade para a Companhia Ferro-Carril Carioca, já que a nova companhia conseguiu permissão para prolongar suas linhas até o Morro de Santo Antônio no centro, através do velho Aqueduto da Carioca (os Arcos da Lapa) que encontrava-se desativado, permitindo utilizá-lo para acessar o morro de Santa Teresa.\n[…]\nA passagem dos bondes sobre os arcos fez com que a companhia utiliza-se a incomum bitola de 1.100 mm, sendo esta a largura possível entre os trilhos, dadas as limitações da antiga construção do Aqueduto da Carioca.\n[…]\nEm 2011, um turista francês morreu ao cair dos Arcos da Lapa. Ele seguia em pé no estribo quando se desequilibrou ao tentar bater uma foto e ficou preso na mureta, caindo então em um vão existente entre o carro e as grades da mureta.\n[…]\nOs Bondes de Santa Teresa possuem a incomum bitola de 1 100 mm, largura máxima possível dadas as limitações da construção sobre o antigo Aqueduto da Carioca (os arcos).\n[…]\nOs condutores de bondes elétricos são também chamados de motorneiros.\n[…]\nThe Rio de Janeiro Tramway, Light and Power"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Santa_Teresa_Tram",
        "situacao": "ok",
        "texto": "The Santa Teresa Tram, or Tramway (Portuguese: Bonde de Santa Teresa, IPA: [bõˈdʒi dʒi ˈsɐ̃tɐ teˈɾezɐ]), is a historic tram line in Rio de Janeiro, Brazil. It connects the city's centre with the primarily residential, inner-city neighbourhood of Santa Teresa, in the hills immediately southwest of downtown, which features the tram in many of its local murals.\n[…]\nThe Santa Teresa tram route rises from downtown Rio de Janeiro and climbs Santa Teresa hill, offering a high-level view of the city. It passes over the 17.6-metre (58 ft) high Carioca Aqueduct, a former aqueduct constructed in 1750 and 1,435 mm (4 ft 8+1⁄2 in) standard gauge electric trams used to run beneath it. Except for the section between the central terminus and the initial station (including the aqueduct), the route is shared by motor vehicles.\n[…]\nMost services run from near Largo da Carioca (in the city centre, at 22.910188°S 43.178732°W﻿ / -22.910188; -43.178732﻿ (Terminal de Bonde de Santa Teresa)) to Largo do Guimarães (Santa Teresa cultural center, at 22.9215517°S 43.1860415°W﻿ / -22.9215517; -43.1860415﻿ (Largo do Guimarães)), where the lines branch.\n[…]\nClosures continued through the 1960s, with the closure of the Alto da Boa Vista route in 1967, leaving only the Santa Teresa tram still running. The Silvestre Line had been cut back to Dois Irmãos in 1966; the section beyond was abandoned following storm damage.\n[…]\nThe Santa Teresa tram moved to its new modern terminal in 1975, in the gardens of the Petrobrás oil company, located on the roof of the company's parking garage. This was the Santa Teresa line's sixth successive city-centre terminus; it remains the system's terminal today. The system is currently operated by the Companhia Estadual de Engenharia de Transportes e Logística.\n[…]\n2010 Map of Santa Teresa Tramway and Corcovado rack railway by Allen Morrison"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Metrô de Buenos Aires",
      "descricao": "Sistema de metrô da capital argentina, inaugurado em 1913."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1913, que capital sul-americana inaugurou o primeiro metrô da América Latina?",
    "resposta": "Buenos Aires",
    "fonte": [
      "https://en.wikipedia.org/wiki/Buenos_Aires_Underground",
      "https://pt.wikipedia.org/wiki/Metr%C3%B4_de_Buenos_Aires"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Buenos_Aires_Underground",
        "situacao": "ok",
        "texto": "The Buenos Aires Underground (Spanish: Subterráneo de Buenos Aires), locally known as Subte (Spanish: [ˈsuβte]), is a rapid transit system that serves the area of the city of Buenos Aires, Argentina.\n[…]\nThe first section of this network (Plaza de Mayo–Plaza Miserere) opened in 1913, making it the 13th earliest subway network in the world and the first underground railway in Latin America, the Southern Hemisphere, and the Spanish-speaking world, with the Madrid Metro opening nearly six years later, in 1919. As of 2026, Buenos Aires is the only Argentine city with a metro system.\n[…]\nIn 1979, SBA became Subterráneos de Buenos Aires Sociedad del Estado (SBASE) under Buenos Aires mayor Osvaldo Cacciatore of the National Reorganisation Process military junta. After a long period of stagnation, the Underground began to be expanded again with Lines B and E within the scope of these plans, though only the extension of Line E was commenced and completed before the transition to democracy where expansion was once again stalled.\n[…]\nThese proposals have been rejected by Subterráneos de Buenos Aires, which stated in 2015 that the reduced schedule is needed in order to carry out infrastructure modernisation works across all the lines while they are closed.\n[…]\nIn October 2015, the city of Buenos Aires together with the Inter-American Development Bank presented a 150-page plan for the Underground called the Strategic and Technical Plan for the Expansion of the Subterranean Network (Plan Estratégico y Técnico para la Expansión de la Red de Subtes, or PETERS), highlighting past expansion efforts and the need to adapt plans to the current needs of the city.\n[…]\nList of metro systems\n[…]\nTrams in Buenos Aires"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Metr%C3%B4_de_Buenos_Aires",
        "situacao": "ok",
        "texto": "O metrô de Buenos Aires (em castelhano: Subterráneo de Buenos Aires), conhecido localmente como Subte, é um sistema de metropolitano que atende a área da cidade de Buenos Aires, Argentina. A primeira seção desta rede (Plaza de Mayo–Plaza Miserere) foi inaugurada em 1913, tornando-se a 13ª rede de metrô mais antiga do mundo e a primeira ferrovia subterrânea da América Latina, do Hemisfério Sul e do\n[…]\nEm 1909, o Conselho Deliberante de Buenos Aires aprovou o contrato entre o intendente Güiraldes e a Companhia de Trens Anglo – Argentina (CTAA) para que esta construiria e explorara por 80 anos três linhas de subterrâneos: Praça de Maio – Primeira Junta (atual  linha A), Constitución – Retiro (atual linha C) e Praça de Maio – Palermo (parte da atual linha D). Apenas se concretizou a primeira.\n[…]\nEm fevereiro de 1939 começa a funcionar a Corporação de Transportes da Cidade de Buenos Aires, composta por capitais privados e estatais. Esta corporação tinha a função de consolidar os subterrâneos, e também os bondes, trens, coletivos e ônibus. Pelas importantes dividas que possuía, em 1948 a empresa entra em liquidação. É substituída em 1952 pela Administração General de Transportes de Buenos Aires, que dependia diretamente do Ministério de Transporte da Nação.\n[…]\nAs fichas de metrô passaram a ser parte da cultura popular portenha, e podiam ser reconhecidas pela legenda: \"un viaje en subte\", de um lado, e \"Subterraneos de Buenos Aires\" do outro.\n[…]\nDesde sua inauguração, o Metrô de Buenos Aires buscou abrir espaço para as mais diferentes formas de cultura. Com isso, é possível encontrar em suas instalações pinturas e murais originais e reproduções, esculturas, estátuas e retratos, além de haver espaços para apresentações de música e teatro. Na estação Tronador, no bairro de Villa Ortúzar, da Linha B, existem 18 vitrais com imagens históricas da região.\n[…]\nSubterráneos de Buenos Aires"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Motim do Bounty",
      "descricao": "Rebelião de 1789 a bordo do navio britânico HMS Bounty, no Pacífico, liderada por Fletcher Christian contra o capitão William Bligh."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Depois do motim de 1789, Fletcher Christian e parte dos amotinados do navio Bounty se esconderam em que ilha remota do Pacífico?",
    "resposta": "Ilha Pitcairn",
    "distratores": [
      "Ilha de Páscoa",
      "Galápagos",
      "Fiji"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mutiny_on_the_Bounty",
      "https://en.wikipedia.org/wiki/Pitcairn_Islands"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mutiny_on_the_Bounty",
        "situacao": "ok",
        "texto": "The Mutiny on the Bounty occurred in the Pacific Ocean on 28 April 1789. Disaffected crewmen, led by acting-Lieutenant Fletcher Christian, seized control of the Royal Navy merchant ship HMS Bounty from its captain, Lieutenant William Bligh, and set him and 18 loyalists adrift in the ship's open launch. The reasons behind the mutiny are still debated.\n[…]\nAfter leaving Tahiti on 22 September 1789, Christian sailed Bounty west in search of a safe haven. He then formed the idea of settling on Pitcairn Island, far to the east of Tahiti; the island had been reported in 1767, but its exact location was never verified. After months of searching, Christian rediscovered the island on 15 January 1790, 188 nautical miles (348 km; 216 mi) east of its recorded position. This longitudinal error had contributed to the mutineers' decision to settle on Pitcairn.\n[…]\nExplorer Luis Marden rediscovered the remains of Bounty in January 1957. After spotting remains of the rudder (which had been found in 1933 by Parkin Christian, and is still displayed in the Fiji Museum in Suva) he persuaded his editors and writers to let him dive off Pitcairn Island. After several days of dangerous diving, Marden found the remains of the ship: a rudder pin, nails, a ships boat oarlock, fittings and a Bounty anchor that he raised.\n[…]\nApart from Bligh's journal, the first published account of the mutiny was that of Sir John Barrow, published in 1831. Barrow was a friend of the Heywood family; his book mitigated Heywood's role while emphasising Bligh's severity. The book also instigated the legend that Christian had not died on Pitcairn, but had somehow returned to England and been recognised by Heywood in Plymouth, around 1808–1809.\n[…]\nBoth Pitcairn Island Museum and Bounty Museum on Norfolk Island use objects and memorabilia to interpret the history of the mutineers."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pitcairn_Islands",
        "situacao": "ok",
        "texto": "The Pitcairn Islands ( PIT-kairn; Pitkern: Pitkern Ailen), officially Pitcairn, Henderson, Ducie and Oeno Islands, are a group of four volcanic islands in the southern Pacific Ocean that form the sole British Overseas Territory in the Pacific Ocean. The four islands—Pitcairn, Henderson, Ducie and Oeno—are scattered across several hundred kilometres of ocean and have a combined land area of about 4\n[…]\nFletcher Christian (b 1764, d 1793 on Pitcairn), Master's mate on board HMS Bounty, died here at age 28.\n[…]\nJohn Adams (b 1767, d 1829 on Pitcairn), the last survivor of the HMS Bounty mutineers who settled on Pitcairn Island in January 1790, the year after the mutiny\n[…]\nThursday October Christian II (1820–1911), a Pitcairn Islands political leader. Grandson of Fletcher Christian and son of Thursday October Christian I\n[…]\nThe \"Re-colonising of Pitcairn by Sue Farran, Senior Lecturer, University of Dundee; Visiting Lecturer, University of the South Pacific.\n[…]\nBall, Ian M. – Pitcairn: Children of Mutiny. 1973\n[…]\nBelcher, Lady – The Mutineers of the Bounty and Their Descendants in Pitcairn and Norfolk Islands. 1870\n[…]\nClarke, Peter – Hell and Paradise: The Norfolk-Bounty-Pitcairn Saga. 1986\n[…]\nRandall, John E. – Reef and Shore Fishes of the South Pacific: New Caledonia to Tahiti and the Pitcairn Islands. 2005\n[…]\nShapiro, Harry L. – The Heritage of the 'Bounty': The Story of Pitcairn Through Six Generations. 1936\n[…]\nSouhami, Diana – Coconut Chaos: Pitcairn, mutiny and a seduction at sea. 2007\n[…]\nNechtman, Tillman (2018). The Pretender of Pitcairn Island: Joshua W. Hill – The Man Who Would Be King Among the Bounty Mutineers. Cambridge, UK: Cambridge University Press. ISBN 978-1108440806.\n[…]\nPitcairn Miscellany News from Pitcairn Island. Jacqui Christian, ed.\n[…]\nPitcairn News Archived 23 June 2021 at the Wayback Machine information from Chris Double, a Bounty descendant based in Auckland\n[…]\nU.S. Pitcairn Islands Study Group"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Motim_do_HMS_Bounty",
        "situacao": "ok",
        "texto": "O motim do HMS Bounty ocorreu a bordo do navio HMS Bounty da Marinha Real Britânica em 28 de abril de 1789 no meio do Oceano Pacífico. Tripulantes insatisfeitos liderados pelo mestre assistente Fletcher Christian tomaram o controle da embarcação das mãos de seu comandante, o tenente William Bligh, deixando-o à deriva abordo de um bote com poucos suprimentos junto com outros dezoito marinheiros.\n[…]\nOs amotinados se estabeleceram no Taiti ou nas Ilhas Pitcairn; enquanto isso Bligh conseguiu realizar uma viagem de mais de 6 500 quilômetros no bote até encontrar terra, começando então um processo para levar os amotinados para a justiça.\n[…]\nBligh conseguiu voltar para a Grã-Bretanha em abril de 1790 e o Almirantado Britânico enviou o HMS Pandora para prender os amotinados. Catorze foram capturados no Taiti e aprisionados no navio, que então procurou sem sucesso por Christian e o resto dos homens que haviam ficado em Pitcairn. O Pandora encalhou na Grande Barreira de Coral no caminho de volta, perdendo 31 tripulantes e quatro prisioneiros do Bounty.\n[…]\nO grupo de Christian permaneceu sem ser descoberto até 1808, altura em que apenas um dos amotinados, John Adams, ainda estava vivo. Quase todos os outros homens, incluindo Christian, haviam sido mortos uns pelos outros ou por suas companheiras polinésias . Nenhuma ação foi tomada contra Adams. Os descendentes dos amotinados com suas consortes taitianas vivem até os dias de hoje em Pitcairn.\n[…]\nO Bounty foi adquirido para transportar frutas-pão do Taiti (então chamada de \"Otaheite\"), uma ilha polinésia no sul do Oceano Pacífico, até as colônias britânicas nas Índias Ocidentais. A expedição foi patrocinada pela Royal Society e organizada por seu presidente sir Joseph Banks, que compartilhava a visão dos donos de plantações caribenhos de que frutas-pão poderiam ser cultivadas lá e servir como comida barata para os escravos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Motim do Bounty",
      "descricao": "Rebelião de 1789 a bordo do navio britânico HMS Bounty, no Pacífico, liderada por Fletcher Christian contra o capitão William Bligh."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O motim do navio Bounty, em pleno Pacífico, explodiu poucos meses antes de que famoso acontecimento em Paris, em julho daquele ano?",
    "resposta": "Queda da Bastilha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mutiny_on_the_Bounty",
      "https://en.wikipedia.org/wiki/Storming_of_the_Bastille"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mutiny_on_the_Bounty",
        "situacao": "ok",
        "texto": "The Mutiny on the Bounty occurred in the Pacific Ocean on 28 April 1789. Disaffected crewmen, led by acting-Lieutenant Fletcher Christian, seized control of the Royal Navy merchant ship HMS Bounty from its captain, Lieutenant William Bligh, and set him and 18 loyalists adrift in the ship's open launch. The reasons behind the mutiny are still debated.\n[…]\nAdams gave Bounty's azimuth compass and marine chronometer to Topaz's captain, Mayhew Folger. News of the discovery did not reach Britain until 1810, when it was overlooked by an Admiralty preoccupied by war with France.\n[…]\nIn addition to books and poems, five feature films have been made on the mutiny. The first was a 1916 silent Australian film, subsequently lost. The second, also from Australia, titled In the Wake of the Bounty (1933), was the screen debut of Errol Flynn, in the role of Christian.\n[…]\nThe impact of this film was overshadowed by that of the MGM version, Mutiny on the Bounty (1935), based on the popular namesake novel by Charles Nordhoff and James Norman Hall, and starring Charles Laughton and Clark Gable as Bligh and Christian, respectively. The film's story was presented, says Dening, as \"the classic conflict between tyranny and a just cause\"; Laughton's portrayal became in the public mind the definitive Bligh, \"a byword for sadistic tyranny\".\n[…]\nMutiny on the Bounty (1962) with Trevor Howard and Marlon Brando as Bligh and Christian, was later followed by The Bounty (1984) with Anthony Hopkins and Mel Gibson.\n[…]\nA musical Mutiny! played at the Piccadilly Theatre in London's West End for sixteen months from 1985. It was co-written by David Essex based on the novel Mutiny on the Bounty and starred Essex as Christian.\n[…]\nBoth Pitcairn Island Museum and Bounty Museum on Norfolk Island use objects and memorabilia to interpret the history of the mutineers."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Storming_of_the_Bastille",
        "situacao": "ok",
        "texto": "The Storming of the Bastille (French: Prise de la Bastille [pʁiz də la bastij]), also known as Fall of the Bastille, which occurred in Paris, France, on 14 July 1789, was an act of political violence by revolutionary insurgents who attempted to storm and seize control of the medieval armoury, fortress, and political prison known as the Bastille. After four hours of fighting and 94 deaths, the insu\n[…]\nAlthough there were arguments that the Bastille should be preserved as a monument to liberation or as a depot for the new National Guard, the Permanent Committee of Municipal Electors at the Paris Town Hall gave the construction entrepreneur Pierre-François Palloy the commission of disassembling the building. Palloy commenced work immediately, employing about 1,000 workers.\n[…]\nVarious other pieces of the Bastille also survive, including stones used to build the Pont de la Concorde bridge over the Seine, and one of the towers, which was found buried in 1899 and is now at Square Henri-Galli in Paris, as well as the clock bells and pulley system, which are now in the Musée d’Art Campanaire. The building itself is outlined in brick on the location where it once stood, as is the moat in the Paris Metro stop below it, where a piece of the foundation is also on display.\n[…]\nA Tale of Two Cities, the 1859 novel by Charles Dickens, dramatizes the Bastille storming in \"Book The Second – the Golden Thread,\" Chapter 21, \"Echoing Footsteps\"  (\"Seven prisoners released, seven gory heads on pikes, the keys of the accursed fortress of the eight strong towers, some discovered letters and other memorials of prisoners of old time, long dead of broken hearts, – such, and such – like, the loudly echoing footsteps of Saint Antoine escort through the Paris streets in mid-July, one thousand seven hunderd and eighty-nine.\")\n[…]\nMedia related to Storming of the Bastille at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Motim_do_HMS_Bounty",
        "situacao": "ok",
        "texto": "O motim do HMS Bounty ocorreu a bordo do navio HMS Bounty da Marinha Real Britânica em 28 de abril de 1789 no meio do Oceano Pacífico. Tripulantes insatisfeitos liderados pelo mestre assistente Fletcher Christian tomaram o controle da embarcação das mãos de seu comandante, o tenente William Bligh, deixando-o à deriva abordo de um bote com poucos suprimentos junto com outros dezoito marinheiros.\n[…]\nBanks supervisionou a reforma do Bounty realizada no Estaleiro Deptford no rio Tâmisa. A cabine, normalmente os aposentos do capitão, foi convertida em uma estufa para mais de cem frutas-pão, com janelas vidraçadas, clarabóias, um convés coberto e um sistema de drenagem para impedir o desperdício de água fresca. O espaço necessário para esses arranjos em uma navio pequeno significou que a tripulação passaria por uma superlotação durante toda viagem.\n[…]\nBligh passou por um período de ociosidade e então conseguiu trabalho temporário na marinha mercante, sendo comandante em 1785 do Britannia, navio propriedade do tio de sua esposa Duncan Campbell. Bligh assumiu em 16 de agosto de 1787 a nomeação no Bounty, com um considerável custo financeiro: seu pagamento de quatro xelins por dia (totalizando setenta libras por ano) contrastava com as quinhentas libras anuais que recebeu como comandante do Britannia.\n[…]\nEle também teve de assumir a posição de comissário do Bounty por causa do limitado número de oficiais abordo. Suas ordens para a viagem ditavam que Bligh deveria entrar no Pacífico através do Cabo Horn, coletar as frutas-pão, velejar para leste na direção do Estreito Endeavour e cruzar os oceanos Índico e Atlântico até as Índias Ocidentais. O Bounty assim completaria uma circum-navegação completa pela Terra.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "RMS Titanic",
      "descricao": "Transatlântico britânico da White Star Line que afundou em 1912 após colidir com um iceberg."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em abril de 1912, de que porto inglês o Titanic partiu para a sua viagem inaugural?",
    "resposta": "Southampton",
    "fonte": [
      "https://en.wikipedia.org/wiki/Titanic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Titanic",
        "situacao": "ok",
        "texto": "RMS Titanic was a British ocean liner that sank in the early hours of 15 April 1912 after striking an iceberg on her maiden voyage from Southampton, England, to New York City. Of the 2,208 passengers and crew aboard, approximately 1,500 died (estimates vary), making the incident one of the deadliest peacetime sinkings of a single ship.\n[…]\nTitanic's sea trials began at 6 am on Tuesday, 2 April 1912, two days after the fitting out was finished and eight days before departure from Southampton on the maiden voyage. The trials were delayed for a day due to bad weather, but by Monday morning it was clear and fair. Aboard were 78 stokers, greasers and firemen, and 41 members of crew. No domestic staff appear to have been aboard.\n[…]\nTitanic's maiden voyage was intended to be the first of many trans-Atlantic crossings between Southampton and New York via Cherbourg and Queenstown on westbound runs, returning via Plymouth in England while eastbound. The entire schedule of voyages through to December 1912 still exists. When the route was established, four ships were assigned to the service. In addition to Teutonic and Majestic, RMS Oceanic and the brand new RMS Adriatic sailed the route.\n[…]\nTitanic's maiden voyage began on Wednesday, 10 April 1912. Following the embarkation of the crew, the passengers began arriving at 9:30 am, when the London and South Western Railway's boat train from London Waterloo station reached Southampton Terminus railway station on the quayside, alongside Titanic's berth. The large number of Third Class passengers meant they were the first to board, with First and Second Class passengers following up to an hour before departure.\n[…]\nIt hit hardest in Southampton, whose people suffered the greatest losses from the sinking; four out of every five crew members came from this town.\n[…]\nTitanic Historical Society"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/RMS_Titanic",
        "situacao": "ok",
        "texto": "RMS Titanic foi um navio de passageiros britânico operado pela White Star Line e construído pelos estaleiros da Harland and Wolff, em Belfast. Segunda embarcação da Classe Olympic de transatlânticos, depois do RMS Olympic e seguido pelo HMHS Britannic, foi projetado pelos engenheiros navais Alexander Carlisle e Thomas Andrews. Sua construção começou em março de 1909 e seu lançamento ao mar ocorreu\n[…]\nA embarcação partiu em sua viagem inaugural de Southampton com destino a Nova Iorque  em 10 de abril de 1912, no caminho passando em Cherbourg-Octeville, na França, e por Queenstown, na Irlanda. Colidiu com um iceberg na proa do lado direito às 23h40 de 14 de abril, naufragando na madrugada do dia seguinte, com mais de 1 500 pessoas a bordo, sendo um dos maiores desastres marítimos em tempos de paz de toda a história.\n[…]\nO Titanic partiu em sua primeira e única viagem com 1 316 passageiros a bordo: 325 na primeira classe, 285 na segunda e 706 na terceira. Deles, 922 embarcaram em Southampton, 274 em Cherbourg-Octeville na França e 120 em Queenstown na Irlanda. Na primeira classe estavam os passageiros mais ricos do navio, dentre eles empresários, artistas, oficiais militares, políticos e outros. Em muitos casos eles viajaram com várias malas de bagagem e um ou mais criados particulares.\n[…]\nA embarcação deixou a cidade às 20h do mesmo dia e chegou em Southampton durante a noite do dia 3 de abril.\n[…]\nO Titanic deixou o porto de Southampton às 12h15min do dia 10 de abril de 1912 com 953 passageiros a bordo, 29 dos quais desembarcariam antes do navio seguir para Nova Iorque. A bordo estavam pessoas de quarenta nacionalidades diferentes. Ao partir a embarcação passou perto do SS New York, que estava atracado no cais. A sucção das hélices do Titanic fez com que as amarras que prendiam o New York se soltassem, e ele rapidamente começou a se aproximar do navio maior.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "DeLorean DMC-12",
      "descricao": "Carro esportivo de carroceria de aço inoxidável e portas que abrem para cima, fabricado de 1981 a 1983 e famoso como máquina do tempo no cinema."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O DeLorean, carro que vira máquina do tempo no filme De Volta para o Futuro, era fabricado em qual parte do Reino Unido?",
    "resposta": "Irlanda do Norte",
    "fonte": [
      "https://en.wikipedia.org/wiki/DeLorean_DMC-12"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/DeLorean_DMC-12",
        "situacao": "ok",
        "texto": "The DMC DeLorean is a rear-engine, two-seat sports car manufactured and marketed by John DeLorean's DeLorean Motor Company (DMC) for the American market from 1981 until 1983—ultimately the only car brought to market by the fledgling company. The DeLorean is sometimes referred to by its internal pre-production designation, DMC-12, although this was not used in sales or marketing materials for the p\n[…]\nA small number of pre-production DeLoreans were produced with fiberglass bodies and are referred to as \"black cars\" or mules and were used by Lotus during development and engineering. After several delays and cost overruns, production at the Dunmurry factory in Northern Ireland, located a few miles from Belfast City Centre, finally began in late 1980. DMC changed the name DMC-12 on its now $25,000 car in favor of the model name DeLorean.\n[…]\nThe rear trim panel has an armrest extension that is visibly two separate pieces on early 1981 models; this armrest has a tendency to break loose as people get in and out of the vehicle. In late 1981, this was resolved by having the armrest extension integrated into the rear trim panel, the assembly wrapped in vacuum-formed vinyl. The small sun visors on the DeLorean have vinyl on one side and headliner fabric on the other side.\n[…]\nParnham, Chris; Withers, Andrew (2014). DeLorean Celebrating the Impossible. DeLorean Motor Cars (1978) Ltd. ISBN 978-0-9928594-0-4.\n[…]\nDeLorean, John Z.; Schwarz, Ted (1985). DeLorean. Grand Rapids, MI: Zondervan. ISBN 0-310-37940-7.\n[…]\nHaddad, William (1985). Hard Driving: My Years with John DeLorean. Random House, Inc. ISBN 978-0394534107.\n[…]\nWilliams, Chris (2018). DeLorean DMC-12 [sic]: The Essential Buyers Guide (2018). Veloce Publishing. ISBN 978-1-787112-32-2.\n[…]\nDeLorean Museum\n[…]\nDeLorean at the Internet Movie Cars Database\n[…]\n1976 DeLorean DMC-12 Prototype"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/DMC_DeLorean",
        "situacao": "ok",
        "texto": "O DMC DeLorean é um carro desportivo produzido entre 1981 e 1982 pela empresa automobilística estadunidense DeLorean Motor Company (DMC). É conhecido como o DeLorean, pois este foi o único modelo fabricado pela empresa. O carro algumas vezes também é referido por sua designação interna de pré-produção, DMC-12. Porém, o nome DMC-12 nunca foi usado em vendas ou material de marketing para o modelo de\n[…]\nO primeiro protótipo foi completado em 1976 e a produção começou oficialmente em 1981 na fábrica que a DMC tinha em Dunmurry, na Irlanda do Norte. Durante sua produção, vários aspectos do carro foram alterados, como o estilo do capô, as rodas e o interior. Foram fabricadas aproximadamente 9200 unidades do DeLorean entre 1981 e 1982 (alguns carros desse ano foram vendidos como ano/modelo 1983).\n[…]\nA construção da fábrica começou em outubro de 1978 e foi concluída em 1980, e embora o início da produção do DeLorean estivesse planejado para esse ano, problemas de engenharia e orçamento atrasaram o início da produção até janeiro de 1981. Durante essa época, a taxa de desemprego era muito alta na Irlanda do Norte e os residentes faziam fila para se candidatar a empregos na fábrica.\n[…]\nApesar de ter sido produzidos na Irlanda do Norte, os DeLorean destinavam-se ao mercado estadunidense. Portanto, todos os carros produzidos tinham a posto de condução à esquerda (projetados para ser dirigidos do lado direito da estrada). Alguns deles (24 carros) foram convertidos para conduzir desde o assento direito por mecânicos especializados do Reino Unido, mas nunca foram produzidos dessa forma pela DMC, então a popularidade deste modelo no Reino Unido foi muito limitada.\n[…]\n«Sítio do estúdio italiano Italdesign, que desenhou o DeLorean»\n[…]\nBest Cars Web Site. DeLorean: o carro inoxidável, de volta para o futuro\n[…]\nQuatro Rodas. DeLorean DMC-12 voltará a ser produzido em 2017 Consultado em 24/05/2017.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Mão inglesa",
      "descricao": "Regra de trânsito em que os veículos circulam pelo lado esquerdo da via, como no Reino Unido."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Na América do Sul, só dois países dirigem pela esquerda, como os ingleses. Um deles é a Guiana. Qual é o outro?",
    "resposta": "Suriname",
    "distratores": [
      "Venezuela",
      "Equador",
      "Uruguai"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Left-_and_right-hand_traffic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Left-_and_right-hand_traffic",
        "situacao": "ok",
        "texto": "Left-hand traffic (LHT) and right-hand traffic (RHT) are the practices, in bidirectional traffic, of keeping to the left side or to the right side of the road, respectively. They are fundamental to traffic flow, and are sometimes called a \"rule of the road\". The terms right- and left-hand \"drive\" refer to the position of the driver and the steering wheel in the vehicle and are, in automobiles, the\n[…]\nSuriname and its neighbour Guyana are the only two remaining LHT countries in South America.\n[…]\nHistorically there was less consistency in the relationship of the position of the driver to the handedness of traffic. Most American cars produced before 1910 were RHD.\n[…]\nIn 1908, Henry Ford standardised the Model T as LHD in RHT America, arguing that with RHD and RHT, the passenger was obliged to \"get out on the street side and walk around the car\" and that with steering from the left, the driver \"is able to see even the wheels of the other car and easily avoids danger.\" By 1915, other manufacturers followed Ford's lead, due to the popularity of the Model T.\n[…]\nWhere it is more convenient for the driver to be on the nearside, e.g. delivery vehicles. The Grumman LLV postal delivery truck is widely used with RHD configurations in RHT North America. Some Unimogs are designed to switch between LHD and RHD to permit operators to work on the more convenient side of the truck.\n[…]\nExamples include: Argentina, Belgium, Bolivia, Brazil, Cambodia, China, Egypt, France, Iraq, Israel, Italy, Laos, Monaco, Morocco, Myanmar, Nigeria, Peru, Portugal, Senegal, Slovenia, Sweden, Switzerland, Taiwan, Tunisia, Uruguay and Venezuela. In North America, multi-track rail lines with centralized traffic control are typically signalled to allow operation on any track in both directions, and the side of operation will vary based on the railroad's specific operational requirements."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sentido_de_circula%C3%A7%C3%A3o_de_tr%C3%A1fego",
        "situacao": "ok",
        "texto": "Sentido de circulação de tráfego é a forma pela qual os veículos devem ser conduzidos nas ruas e rodovias de cada país, no que diz respeito ao lado pelo qual se deve conduzir tais veículos, ou mesmo para os pedestres, que devem saber o sentido de circulação para poder atravessar as ruas com segurança.\n[…]\nNa América do Sul, apenas a Guiana e o Suriname dirigem pela esquerda, assim como a maioria dos países da Oceania, seguindo a Austrália e a Nova Zelândia, com Samoa invertendo a circulação da direita para a esquerda em 7 de setembro de 2009, o primeiro país a mudar o sentido de circulação em três décadas.\n[…]\nA Guiana e o Suriname são uma das únicas regiões da América do Sul onde a circulação de veículos é feita pela esquerda, juntamente com Trinidad e Tobago, as Ilhas Malvinas e as Ilhas Geórgia do Sul e Sandwich do Sul. Como consequência da construção da Rodovia Pan-americana, quatro países da América continental passaram a circulação da esquerda para a direita entre 1943 e 1961, sendo o último dos quais Belize.\n[…]\nApós essa mudança, apenas a Guiana e o Suriname continuaram adotando a \"mão-inglesa\" em toda a porção continental das Américas. Tanto a Guiana como o Suriname são separados de seus vizinhos por largos rios, com a primeira travessia terrestre por ponte (a Ponte sobre o Rio Tacutu) sendo aberta ao tráfego apenas em abril de 2009. O interior ao sul dos dois países é esparsamente povoado, com poucas rodovias e dessa forma sem postos de fronteira.\n[…]\nApós a mudança da circulação da esquerda para a direita, realizada pela Etiópia em 1964, o Sudão passou a ter duas pequenas fronteiras com países de mão-inglesa ao sul (Quênia e Uganda). Em agosto de 1973, o Sudão mudou o sentido de circulação para a direita para se alinhar com os demais países do mundo árabe.\n[…]\nVide Guiana e Suriname.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Dagen H",
      "descricao": "Dia de 1967 em que a Suécia passou a circular pela direita no trânsito, abandonando a mão esquerda."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Num domingo de 1967, conhecido como Dia H, que país europeu trocou de uma só vez o trânsito da mão esquerda para a direita?",
    "resposta": "Suécia",
    "distratores": [
      "Noruega",
      "Dinamarca",
      "Finlândia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dagen_H"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dagen_H",
        "situacao": "ok",
        "texto": "Dagen H (H-day), today usually called \"Högertrafikomläggningen\" (lit. 'the right-hand traffic reorganisation'), was on 3 September 1967, the day on which Sweden switched from driving on the left-hand side of the road to the right. The \"H\" stands for \"Högertrafik\", the Swedish word for right-hand traffic. It was by far the largest logistical event in Sweden's history.\n[…]\nHowever, the change was unpopular; in a 1955 referendum, 83 percent voted to keep driving on the left. Nevertheless, the Riksdag approved Prime Minister Tage Erlander's proposal on 10 May 1963 of right-hand traffic beginning in 1967, as the number of cars on the road tripled from 500,000 to 1.5 million and was expected to reach 2.8 million by 1975. The Swedish Commission for the Introduction of Right-Hand Driving (Statens högertrafikkommission, HTK) was established to oversee the change.\n[…]\nVehicles had to have their original left-hand-traffic headlamps replaced with right-traffic units. One of the reasons the Riksdag pushed ahead with Dagen H despite public unpopularity was that most vehicles in Sweden at the time used inexpensive, standard-size round headlamps, but the trend towards more expensive model-specific headlamps had begun in continental Europe and was expected to spread through most other parts of the world.\n[…]\nOn Dagen H, Sunday, 3 September 1967, all non-essential traffic was banned from the roads from 01:00 to 06:00. Any vehicles on the roads during that time had to come to a complete stop at 04:50, then carefully change to the right-hand side of the road and stop again (to give others time to switch sides of the road and avoid a head-on collision) before being allowed to proceed at 05:00.\n[…]\nBorder crossing between Sweden and Finland, 1967"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dagen_H",
        "situacao": "ok",
        "texto": "Dagen H (o Dia H em sueco), hoje mais conhecido por Högertrafikomläggningen (\"O desvio do tráfego para a direita\"), foi o dia 3 de setembro de 1967, no qual o tráfego na Suécia passou do lado esquerdo para o lado direito das vias. A letra H é a abreviação de Högertrafik, a palavra sueca para \"tráfego pela direita\".\n[…]\nTodos os países vizinhos da Suécia dirigiam pela direita, inclusive a Noruega, país com o qual a Suécia divide uma longa fronteira terrestre;\n[…]\nA maioria dos suecos dirigia veículos com volantes à esquerda. Isto levava a muitas colisões frontais em estradas de pista simples, comuns na Suécia em função de sua baixa densidade populacional e dos menores níveis de tráfego.\n[…]\nConforme o Dagen H se aproximava, cada cruzamento recebeu postes adicionais e sinais de trânsito envoltos em plástico preto. No dia da mudança, muitos trabalhadores circularam pelas ruas no início da manhã para remover os plásticos. Da mesma forma, a sinalização de rua pós-mudança já fora previamente pintada com tinta branca e depois coberta como fitas pretas. Antes do Dagen H, as ruas e estradas da Suécia tinham a sinalização de rua na cor amarela.\n[…]\nDe modo a evitar o ofuscamento dos motoristas que viessem em sentido contrário, todos os veículos suecos tiveram todos os faróis  para tráfego à esquerda substituídos por equivalentes para tráfego à direita.\n[…]\nUma das razões pelas quais o Riksdag impôs a mudança apesar da oposição popular foi o de que a maioria dos veículos na Suécia daquele tempo usavam faróis padrão, redondos e baratos, mas com o aumento da variedade de faróis, o custo tornar-se-ia cada vez maior para os futuros compradores de automóveis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Estação King's Cross",
      "descricao": "Estação ferroviária de Londres, terminal de trens para o norte da Inglaterra e a Escócia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Nos livros de Harry Potter, o Expresso de Hogwarts parte da plataforma nove e três quartos de qual estação de Londres?",
    "resposta": "King's Cross",
    "fonte": [
      "https://en.wikipedia.org/wiki/London_King%27s_Cross_railway_station"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/London_King%27s_Cross_railway_station",
        "situacao": "ok",
        "texto": "King's Cross railway station, also known as London King's Cross, is a passenger railway terminus in the London Borough of Camden, on the edge of Central London. It is one of the busiest stations in the United Kingdom and the southern terminus of the East Coast Main Line to Yorkshire and the Humber, North East England and Scotland. Adjacent to King's Cross station is St Pancras International, the L\n[…]\nKing's Cross is one of the 18 stations in the London station group. A ticket marked \"London Terminals\" allows travel to any station in the group via any permitted route.\n[…]\nKing's Cross features in the Harry Potter books, by J. K. Rowling, as the starting point of the Hogwarts Express. The train uses a secret Platform 9+3⁄4 accessed through the brick wall barrier between platforms 9 and 10. In fact, platforms 9 and 10 are in a separate building from the main station and are separated by two intervening tracks.\n[…]\nBy 2003, a sign marking Platform 9 3/4 was put up at the station, with a trolley fixed to the wall added by the year 2005. The location of the trolley moved after renovations, and a Harry Potter-themed shop opened nearby in 2012. Because of the temporary buildings obscuring the façade of the real King's Cross station until 2012, the Harry Potter films showed St. Pancras in exterior station shots instead.\n[…]\nWhen The Wizarding World of Harry Potter at Universal Orlando Resort expanded to Universal Studios Florida, the Wizarding Worlds in both Diagon Alley at Universal Studios Florida and Hogsmeade at Universal's Islands of Adventure were connected with the Hogwarts Express. The Universal Studios Florida station is based on King's Cross station and Platform 9+3⁄4, including a quarter-scale replica of the façade of King's Cross as the entrance to the station.\n[…]\n\"All Change at King's Cross\"—Pictures of the new concourse opened in March 2012, Evening Standard (archive)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Esta%C3%A7%C3%A3o_King%27s_Cross",
        "situacao": "ok",
        "texto": "A Estação King's Cross ou London King's Cross é uma estação de trem em Londres, no Reino Unido, aberta ao publico em 14 de outubro de 1852. A estação ferroviária de King's Cross, também conhecida como London King's Cross, é um terminal ferroviário de passageiros no bairro londrino de Camden, na periferia do centro de Londres.\n[…]\nA estação King's Cross foi construída em 1851 como o terminal londrino da Great Northern Railway (GNR), e foi o quinto terminal de Londres a ser construído. Substituiu uma estação temporária ao lado de Maiden Lane (agora York Way) que havia sido rapidamente construída com a chegada da linha a Londres em 1850, e inaugurada em 7 de agosto de 1850.\n[…]\nEm 1987, o incêndio da adjacente estação de metrô, King's Cross St Pancras, fez 31 vítimas. A estação passou por uma extensa reforma e desenvolvimento, em parte devido às descobertas de relatórios feitos após o incêndio.\n[…]\nEm 2007, desde a entrada em funcionamento da Channel Tunnel Rail Link, os Eurostars têm o seu terminal na Estação St Pancras renovada. A combinação King's Cross St. Pancras e da estação de metrô King's Cross St. Pancras tornou-se um dos maiores centros de transferência de Londres.\n[…]\nExpresso De Hogwarts : Trem que leva os alunos de Londres até a estação de Hogsmeade (nas redondezas de Hogwarts) nos livros de Harry Potter de J. K. Rowling.\n[…]\nKing's Cross aparece nos livros de Harry Potter, de J. K. Rowling, como o ponto de partida do Expresso de Hogwarts. Na série, há na estação a Plataforma Nove e Três Quartos, a qual somente bruxos podem embarcar. Para chegar na plataforma, é preciso atravessar uma barreira mágica entre as plataforma 9 e 10. Em homenagem à série, a administração da plataforma, na vida real, instalou entre as plataformas 9 e 10 uma placa onde se lê: Plataforma 9 3/4.\n[…]\nIncêndio de King's Cross em 1987",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Alberto Santos-Dumont",
      "descricao": "Aviador e inventor brasileiro, pioneiro dos dirigíveis e do 14-bis."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1901, Santos Dumont ganhou um prêmio em Paris ao sair de Saint-Cloud num dirigível, contornar qual monumento e voltar em menos de meia hora?",
    "resposta": "Torre Eiffel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Santos-Dumont_No._6",
      "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Santos-Dumont_No._6",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont",
        "situacao": "ok",
        "texto": "Alberto Santos-Dumont (self-stylised as Alberto Santos=Dumont; 20 July 1873 – 23 July 1932) was a Brazilian aeronaut, sportsman, inventor, and one of the few people to have contributed significantly to the early development of both lighter-than-air and heavier-than-air aircraft. The heir of a wealthy family of coffee producers, he dedicated himself to aeronautical study and experimentation in Pari\n[…]\nAt 3:30 pm on 13 November Santos-Dumont took off in No. 3 from Vaugirard Aerostation Park and went around the Eiffel Tower for the first time. From the monument he went to the Parc des Princes then to the Bagatelle Gamefield in the Bois de Boulogne (near the Hippodrome of Longchamp). He landed at the exact spot where No. 1 had crashed, this time under control.\n[…]\nDesirous of contributing to the solution of the problem of air travel, I undertake to place at the disposal of the Air Club a sum of 100,000 francs, constituting a prize, under the title of the Air Club Prize, to the aeronaut who, leaving the park of Saint Cloud, Longchamps, or any other point situated at an equal distance from the Eiffel Tower, reaches this monument in half an hour, and, surrounding it, returns to the point of departure.\n[…]\nIn 1902 the poet Eduardo das Neves composed the song \"A Conquista do Ar\" in honour of Santos-Dumont's achievements, described by Thomas Skidmore as 'a conspicuous example of \"ufanism\" during the [Brazilian] belle époque', while for Oliveira 2022 the song was \"...an effort to insert Afro-Brazilians into cosmopolitan visions of flight.\" In 1924 Tarsila do Amaral painted \"Carnaval em Madureira\", which showed the replica of the Eiffel Tower and the airship built in Madureira for the Carnaval celebrations of that year, alongside Afro-Brazilians attending the event.\n[…]\nWorks by or about Alberto Santos-Dumont at the Internet Archive\n[…]\nAlberto Santos Dumont Article by writer Patricia Nell Warren."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Shinkansen",
      "descricao": "Rede japonesa de trens de alta velocidade, inaugurada em 1964 e conhecida como trem-bala."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A primeira linha do trem-bala japonês, entre Tóquio e Osaka, foi inaugurada em 1964, às vésperas de que grande evento esportivo?",
    "resposta": "Jogos Olímpicos de Tóquio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tokaido_Shinkansen",
      "https://en.wikipedia.org/wiki/Shinkansen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tokaido_Shinkansen",
        "situacao": "ok",
        "texto": "The Tokaido Shinkansen (Japanese: 東海道新幹線; lit. 'Eastern Sea Road new main line') is a Japanese high-speed rail line and part of the nationwide Shinkansen network. Together with the San'yō Shinkansen, it forms a continuous high-speed corridor through the Taiheiyō Belt, also known as the Tōkaidō corridor.\n[…]\nOpened in 1964 between Tōkyō and Shin-Ōsaka stations, it was the world's first high-speed rail line and remains one of the busiest. Since 1987, it has been operated by the Central Japan Railway Company (JR Central), following its transfer from Japanese National Railways (JNR).\n[…]\nThe Shinkansen route broadly follows the alignment of the conventional Tōkaidō Main Line, which in turn traces the course of the historic Tōkaidō road, dating back to the 1600s. For centuries, the Tōkaidō was one of Japan's most important transport corridors, as it linked the political and cultural centers of the Kansai region (Kyoto and Osaka) with the Kantō region (Tokyo) via the Tōkai region (Nagoya).\n[…]\nWhen service began, two train types operated: the express Hikari, which covered the Tokyo–Osaka route in four hours, and the all-stops Kodama, which required five hours. A test run on 25 August 1964 simulating a Hikari service was broadcast nationwide by NHK. The line officially opened on 1 October 1964, with Hikari 1 departing Tokyo for Osaka and Hikari 2 operating in the opposite direction.\n[…]\nFrom 1964 to 2012, the Tokaido Shinkansen line carried approximately 5.3 billion passengers. Ridership increased from 61,000 per day in 1964 to 391,000 per day in 2012. By 2016, the route was carrying 452,000 passengers per day on 365 daily services making it one of the busiest high speed railway lines in the world.\n[…]\nChūō Shinkansen, a high-speed maglev line under construction between Tokyo and Nagoya"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Shinkansen",
        "situacao": "ok",
        "texto": "The Shinkansen (Japanese: 新幹線; [ɕiŋkaꜜɰ̃seɴ] , lit. 'new main line'), colloquially known in English as the bullet train, is a network of primarily high-speed railway lines in Japan. The system was developed to provide connections between Tokyo and other regions of the country. In addition to long-distance services, some sections in and around the largest metropolitan areas are used for commuter tr\n[…]\nThe first line, the Tōkaidō Shinkansen, opened shortly before the 1964 Tokyo Summer Olympics, the 552.6-kilometre (343.4 mi) route connects Tōkyō, Yokohama, Nagoya, and Ōsaka, the four largest cities in Japan. It remains the busiest line in the network, carrying 161 million passengers in fiscal 2023 and more than 6.5 billion passengers in total since opening.\n[…]\nThe Tōkaidō Shinkansen began service on 1 October 1964, shortly before the opening of the 1964 Tokyo Olympics on 10 October 1964. Prior to the introduction of the high-speed line, conventional limited express services required approximately 6 hours and 40 minutes to travel between Tokyo and Osaka. With the opening of the Shinkansen, the limited-stop Hikari service reduced the journey time to four hours, while the all-stations Kodama service completed the trip in five hours.\n[…]\nTraveling by the Tokaido Shinkansen from Tokyo to Osaka produces only around 16% of the carbon dioxide of the equivalent journey by car, a saving of 15,000 tons of CO2 per year.\n[…]\nOsaka – Fukuoka (554 km; 344 mi): The Shinkansen dominates with approximately 85% market share against air travel between the Keihanshin area and Fukuoka. From Shin-Osaka, Nozomi and Mizuho services take about two and a half hours, and the JR West Hikari Rail Star or JR West/JR Kyushu Sakura trains operate twice an hour, taking about 2 hours and 40 minutes between the two cities.\n[…]\nEast meets West, a story of how the Shinkansen brought Tokyo and Osaka closer together."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tokaido_Shinkansen",
        "situacao": "ok",
        "texto": "Tōkaidō Shinkansen (東海道新幹線) é a linha Shinkansen original que foi aberta ao público em 1964 entre Tóquio e Shin-Osaka. É gerida pela Central Japan Railway Company, e antes da privatização pela JNR, a Japan National Railways. É a rota ferroviária de alta velocidade mais movimentada do mundo de longe; seu número acumulado de 5,3 bilhões de passageiros anula todas as outras linhas em todo o mundo.\n[…]\nA linha Tokaido Shinkansen foi concebida originalmente em 1940 como uma linha de caminho de ferro dedicada entre Tóquio e Shimonoseki, o que teria sido 50% mais rápido que o comboio expresso mais rápido daquele tempo. No princípio da Segunda Guerra Mundial o projecto foi interrompido ainda durante a fase de planeamento, apesar de que muitos dos túneis usados hoje em dia pelo Shinkansen terem sido construidos durante esse tempo.\n[…]\nA construção da linha começou em 1959 e ficou completa em 1964, tendo sido efectuada a primeira viagem entre Tóquio e Shin-Osaka a 1 de Outubro desse mesmo ano. A inauguração coincidiu com os Jogos Olímpicos de Verão em Tóquio, que por sua vez já tinha trazido a atenção internacional para o Japão. Originalmente a linha era referida em Inglês como New Tokaido Line. O seu nome deve-se à rota japonesa de Tokaido usada durante séculos.\n[…]\nExistem três tipos de comboios nesta linha, do mais rápido para o mais lento, o Nozomi, o Hikari e o Kodama (Shinkansen). Muitos continuam pela linha Sanyo Shinkansen, indo tão longe como a estação de Hakata em Fukuoka.\n[…]\nO Hikari que circula entre Tóquio e Osaka levava 4h em 1964, tendo este tempo sido encurtado para 3h10 em 1965. Com a introdução o serviço de alta velocidade Kodama (Shinkansen) em 1992, o tempo de viagem encurtou para 2h30.\n[…]\nTóquio - Shinagawa - Shin-Yokohama - Odawara - Atami - Mishima - Shin-Fuji - Shizuoka - Kakegawa - Hamamatsu - Toyohashi - Mikawa-Anjō - Nagoia - Gifu-Hashima - Maibara - Quioto - Shin-Osaka",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Heinkel He 178",
      "descricao": "Avião experimental alemão que, em agosto de 1939, fez o primeiro voo movido a turbojato."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em agosto de 1939, o primeiro avião movido a motor a jato voou na Alemanha. Que conflito começaria poucos dias depois?",
    "resposta": "Segunda Guerra Mundial",
    "fonte": [
      "https://en.wikipedia.org/wiki/Heinkel_He_178"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Heinkel_He_178",
        "situacao": "ok",
        "texto": "The Heinkel He 178 was an experimental aircraft designed and produced by the German aircraft manufacturer Heinkel. It was the world's first aircraft to fly using the thrust from a turbojet engine.\n[…]\nHeinkel had developed the turbojet engine and the testbed aircraft, the Heinkel He 178 V1, in great secrecy. Their existence was concealed even from the Luftwaffe. On 1 November 1939, after the German victory in Poland, Heinkel arranged a demonstration of the aircraft before a group of Nazi officials.\n[…]\nHeinkel was disappointed by the lack of official interest in his private-venture jet. In his autobiography, he attributes that to the failure of the leaders of the Reichsluftfahrtministerium to understand the advantages of jet propulsion and the breakthrough that He 178 represented.\n[…]\nUndeterred by a lack of support from external officials, Heinkel decided to embark on the development of a twin-engine jet fighter as a private venture, harnessing what had been learned from flying the He 178 prototype. This would result in the He 280, the first prototype jet-powered fighter aircraft.\n[…]\nUnknown to Heinkel, the Reich Air Ministry had already been developing its own jet technology. In fact, in September 1939, the development of jet powered single-seat aircraft was ordered to continue despite a general order to cut back on non-core development work as to get certain aircraft types operational as soon as possible.\n[…]\nHeinkel He 280\n[…]\nList of German aircraft projects, 1939–45\n[…]\nErich Warsitz (official website), including rare videos of the Heinkel He 178 and audio commentaries.\n[…]\nHeinkel He 178 and He 282 – the first jets, 9 June 2011 – via YouTube\n[…]\nHeinkel He-178, first jet plane, sciencephoto.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Heinkel_He_178",
        "situacao": "ok",
        "texto": "Heinkel He 178 foi o primeiro avião turbojato a voar. Foi uma iniciativa privada da empresa alemã Heinkel. Voou pela primeira vez em 27 de agosto de 1939 pilotado por Erich Warsitz. Voo realizado 21 meses antes do caça britânico Gloster E.28/39.\n[…]\nEm 1936, o jovem engenheiro Hans von Ohain havia obtido uma patente para usar a exaustão de uma turbina à gás como meio de propulsão. Ele mostrou sua ideia a Ernst Heinkel, que concordou em desenvolver o conceito. Von Ohain demonstrou seu primeiro motor em 1937. O He 178 foi desenhado sobre o terceiro projeto de motor de von Ohain, movido a diesel. O resultado foi uma aeronave pequena de construção e configuração convencional, com uma fuselagem metálica asas altas de madeira.\n[…]\nA entrada de ar do motor era no nariz do avião e o trem de pouso convencional. O trem de pouso era retrátil, mas por razões de segurança, foi mantido travado para o primeiro voo.\n[…]\nOs testes de taxiamento se iniciaram no dia 24 de agosto de 1939, então o grande dia chegou para Heinkel, Von Ohain e Warsitz: 27 de agosto de 1939, ainda antes do alvorecer, o He 178 se preparava para decolar. O He 178 alça voo por sua própria força, se distancia, retorna e pousa, tudo de acordo com o programado. O Voo teve duração de seis minutos e se realizou a uma altitude de aproximadamente dois mil metros.\n[…]\nEm 1 de novembro de 1939, Heinkel organizou uma demonstração do jato para o Ministério da Aeronáutica alemão Reichsluftfahrtministerium, onde tanto Ernst Udet e Erhard Milch testemunharam a performance da aeronave.\n[…]\nApesar disso Heinkel não se deteve e decidiu desenvolver um jato bimotor, o Heinkel He 280 privadamente com o que tinha aprendido no desenvolvimento do He 178.\n[…]\nHeinkel He 176\n[…]\nHeinkel He 280",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Canal do Panamá",
      "descricao": "Canal artificial no Panamá que liga os oceanos Atlântico e Pacífico, aberto à navegação em 1914."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Canal do Panamá, que ligou o Atlântico ao Pacífico, foi aberto à navegação no mesmo ano em que começou qual guerra?",
    "resposta": "Primeira Guerra Mundial",
    "fonte": [
      "https://en.wikipedia.org/wiki/Panama_Canal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Panama_Canal",
        "situacao": "ok",
        "texto": "The Panama Canal (Spanish: Canal de Panamá) is an artificial 82-kilometer (51-mile) waterway in Panama that connects the Caribbean Sea with the Pacific Ocean. It cuts across the narrowest point of the Isthmus of Panama, and is a conduit for maritime trade between the Atlantic Ocean and the Pacific Ocean.\n[…]\nThe canal consists of artificial lakes, several improved and artificial channels, and multiple sets of locks. The original locks take ships up to panamax size and the new expansion locks up to neopanamax size. An additional artificial lake, Alajuela Lake (known during the American administration as Madden Lake), acts as a reservoir for the canal. The layout of the canal as seen by a ship passing from the Atlantic to the Pacific is:\n[…]\nThe Panama Canal has been a vital conduit for global trade since its completion in 1914. By linking the Atlantic Ocean and Pacific Ocean, the canal has significantly reduced maritime travel time and costs, facilitating economic growth and international commerce. Over the past century, the canal has evolved through expansions and policy changes, further strengthening its role in global trade networks. It is an integral part of the global maritime transportation network.\n[…]\nAn enlargement scheme of the canal was completed and officially opened in June 2017. The project came out because changes in shipping patterns – particularly the increasing numbers of larger-than-Panamax ships – necessitated changes to the canal for it to retain a significant market share of transit between the Pacific and Atlantic Oceans. By 2011, it was estimated that 37 percent of the world's container ships had become too large for the earlier canal and locks.\n[…]\nPanama Canal Zone\n[…]\nPanama Canal Collection Archived 5 March 2021 at the Wayback Machine\n[…]\nPanama Canal at nationsonline.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canal_do_Panam%C3%A1",
        "situacao": "ok",
        "texto": "Canal do Panamá (em castelhano:  Canal de Panamá) é um canal artificial de navios com 77,1 quilômetros de extensão, localizado no Panamá e que liga o oceano Atlântico (através do mar do Caribe) ao oceano Pacífico. O canal atravessa o istmo do Panamá e é uma travessia chave para o comércio marítimo internacional.\n[…]\nOs Estados Unidos usaram o canal durante a Segunda Guerra Mundial para revitalizar sua frota militar devastada no Pacífico, após o ataque a Pearl Harbour em 7 de dezembro de 1941. Alguns dos maiores navios que os Estados Unidos tiveram que enviar pelo canal foram porta-aviões, em particular o USS Essex. Estes eram tão largos que, apesar de as eclusas poderem contê-los, os postes de luz que ladeiam o canal tiveram que ser removidos para que pudessem passar.\n[…]\nO lado do Pacífico é 25 centímetros mais alto do que o lado do Atlântico, e tem marés muito mais altas. Ao todo, o canal tem uma extensão de 82 km, tendo uma grande importância no fluxo marítimo internacional, que hoje corresponde a 4% do comércio mundial: por ano passam pelo canal cerca de 15 mil navios.\n[…]\nDiversas ilhas situam-se no lago Gatún, incluindo a ilha Barro Colorado, um santuário mundial de vida selvagem.\n[…]\nOs capitães que trafegavam pelo Canal do Panamá estavam inicialmente despreparados para lidar com a saliência significativa da cabine de comando dos porta-aviões. O USS Saratoga derrubou todos os postes de concreto adjacentes ao passar pelas eclusas de Gatún pela primeira vez em 1928. É o tamanho das eclusas, especificamente das eclusas de Pedro Miguel, juntamente com a altura da Ponte das Américas em Balboa, que determinam a métrica panamax e limitam o tamanho dos navios que podem usar o canal.\n[…]\nAutoridade do Canal do Panamá\n[…]\nJudicial Warch, Inc. v. Panama Canal Comission case\n[…]\nCamaras web Canal do Panamá en vivo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Boeing 747",
      "descricao": "Avião a jato de grande porte da Boeing, com uma corcunda característica na parte dianteira."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Boeing 747 e o Concorde fizeram seus primeiros voos no mesmo ano em que o homem pisou na Lua. Que ano foi esse?",
    "resposta": "1969",
    "fonte": [
      "https://en.wikipedia.org/wiki/Boeing_747",
      "https://en.wikipedia.org/wiki/Concorde"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Boeing_747",
        "situacao": "ok",
        "texto": "The Boeing 747 is a long-range wide-body airliner designed and manufactured by Boeing Commercial Airplanes in the United States between 1968 and 2023.\n[…]\nBoeing agreed to deliver the first 747 to Pan Am by the end of 1969. That date left 28 months to design the aircraft, just two-thirds of the normal time. The schedule was so fast-paced that the people who worked on it were given the nickname \"The Incredibles\". Developing the aircraft was such a technical and financial challenge that management was said to have \"bet the company\" when it started the project.\n[…]\nThe program was further delayed when one of the five test aircraft suffered serious damage during a landing attempt at Renton Municipal Airport, the site of Boeing's Renton factory. The incident happened on December 13, 1969, when a test aircraft was flown to Renton to have test equipment removed and a cabin installed. Pilot Ralph C. Cokely undershot the airport's short runway and the 747's right, outer landing gear was torn off and two engine nacelles were damaged.\n[…]\nHowever, these difficulties did not prevent Boeing from taking a test aircraft to the 28th Paris Air Show in mid-1969, where it was displayed to the public for the first time. Finally, in December 1969, the 747 received its FAA airworthiness certificate, clearing it for introduction into service. Pan Am introduced the first 747 service the following year on January 22, 1970.\n[…]\nBoeing 747-8\n[…]\nBoeing 747-400\n[…]\n\"747-8\". Boeing.\n[…]\n\"Photos: Boeing 747-100 Assembly Line In 1969\". Aviation Week & Space Technology. April 28, 1969.\n[…]\n\"Boeing 747: Evolution of a Jumbo, As Featured On Aviation Week's Covers\". Aviation Week. August 2016."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Concorde",
        "situacao": "ok",
        "texto": "Concorde ( KONG-kord, French: [kɔ̃kɔʁd] ) is a retired Anglo-French supersonic airliner jointly developed and manufactured by Sud Aviation and the British Aircraft Corporation (BAC).\n[…]\nWorld events also dampened Concorde sales prospects; the 1973–74 stock market crash and the 1973 oil crisis had made airlines cautious about aircraft with high fuel consumption, and new wide-body aircraft, such as the Boeing 747, had recently made subsonic aircraft significantly more efficient and presented a low-risk option for airlines.\n[…]\nThe main competing designs for the US government-funded supersonic transport (SST) were the swing-wing Boeing 2707 and the compound delta wing Lockheed L-2000. These were to have been larger, with seating for up to 300 people. The Boeing 2707 was selected for development. Concorde first flew in 1969, the year Boeing began building 2707 mockups after changing the design to a cropped delta wing; the cost of this and other changes helped to kill the project.\n[…]\nData from The Wall Street Journal, The Concorde Story, The International Directory of Civil Aircraft, Aérospatiale/BAC Concorde 1969 Onwards (All Models)General characteristics\n[…]\nOlivier, Jean-Marc (2018). 1969 First Flight of the Concorde. Editions midi-pyrénéennes. ISBN 979-1-09-349833-1. OCLC 1066694697.\n[…]\nDonald Fink (10 March 1969). \"Concorde Enters Flight Test Phase\" (PDF). Aviation Week & Space Technology. Archived from the original (PDF) on 16 March 2015.\n[…]\n\"First Concorde Supersonic Transport Flies\" (PDF). Aviation Week & Space Technology. 17 March 1969. Archived from the original (PDF) on 16 March 2015.\n[…]\n\"The day Concorde flew into the history books\". Airbus. 2 March 2019."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Boeing_747",
        "situacao": "ok",
        "texto": "Boeing 747 é uma aeronave a jato usada no âmbito civil e militar para transporte de passageiros e de carga, referida com frequência como Jumbo Jet ou Queen of the Skies (Rainha dos Céus). A sua corcunda na parte superior frontal da fuselagem faz com que seja uma das aeronaves mais reconhecíveis do mundo, sendo também a primeira do género produzida em massa.\n[…]\nA Boeing concordou em entregar o primeiro 747 à Pan Am por volta de 1969. A data de entrega deixava apenas 28 meses para desenvolver e criar a aeronave, que era dois terços do tempo normal exigido para se criar uma aeronave desta envergadura. O prazo era tão curto que as pessoas que trabalhavam na aeronave eram apelidados de \"Os Incríveis\".\n[…]\nA 30 de Setembro de 1968, o primeiro 747 saiu do enorme centro de montagem antes mesmo da chegada da imprensa mundial e dos representantes das 26 companhias aéreas que haviam encomendado o avião. Nos meses que se seguiram, fizeram todos os preparativos para o primeiro voo, que foi realizado a 9 de Fevereiro de 1969 pelos pilotos de teste Jack Waddell e Brien Wygle, estando Jack Wallick no lugar do engenheiro de voo.\n[…]\nO lado direito do 747, juntamente com o trem de aterragem, foi seriamente danificado, juntamente com os dois motores. Contudo, estas dificuldades não impediram a Boeing de levar um avião de testes para a 28.ª Demonstração Aérea de Paris, em 1969, quando foi apresentada ao público em geral pela primeira vez. O 747 recebeu o certificado da FAA em Dezembro de 1969, abrindo o caminho para a introdução nas companhias aéreas.\n[…]\nNorris, Guy and Mark Wagner. Boeing 747: Design and Development Since 1969 (em inglês). St. Paul, MN: MBI Publishing Co., 1997. ISBN 0-7603-0280-4.\n[…]\nPágina de produção do Boeing 747\n[…]\nArquivo do Boeing 747\n[…]\nFotos: linha de montagem de um Boeing 747-100 em 1969 Arquivado em 27 de abril de  2015, no Wayback Machine.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Túnel do Canal da Mancha",
      "descricao": "Túnel ferroviário submarino sob o Canal da Mancha que liga a Inglaterra à França, inaugurado em 1994."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década foi inaugurado o túnel ferroviário sob o Canal da Mancha, que liga a Inglaterra à França?",
    "resposta": "Década de 1990",
    "fonte": [
      "https://en.wikipedia.org/wiki/Channel_Tunnel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Channel_Tunnel",
        "situacao": "ok",
        "texto": "The Channel Tunnel (French: Tunnel sous la Manche), sometimes referred to as the Chunnel, is a 50.46-kilometre (31.35-mile) railway tunnel beneath the English Channel which connects Folkestone in the United Kingdom with Coquelles in northern France. Opened in 1994, it remains the only fixed link between Great Britain and the European mainland.\n[…]\nA 50 mm (2.0 in) diameter pilot hole allowed the service tunnel to break through without ceremony on 30 October 1990. The two tunnelling efforts were misaligned by only 30 cm (12 in) horizontally and 8 cm (3.1 in) vertically, with the total length of the tunnel being 2 cm (0.79 in) shorter than estimated. On 1 December 1990, Englishman Graham Fagg and Frenchman Philippe Cozette broke through the service tunnel with the media watching.\n[…]\nFreight volumes have been erratic, with a major decrease during 1997 due to a closure caused by a fire in a freight shuttle. Freight crossings increased over the period, indicating the substitutability of the tunnel by sea crossings. The tunnel has achieved a market share close to or above Eurotunnel's 1980s predictions but Eurotunnel's 1990 and 1994 predictions were overestimates.\n[…]\nIn January 2014, UK operators EE and Vodafone signed ten-year contracts with Eurotunnel for Running Tunnel North. The agreements will enable both operators' subscribers to use 2G and 3G services. Both EE and Vodafone planned to offer LTE services on the route; EE said it expected to cover the route with LTE connectivity by the summer of 2014. EE and Vodafone will offer Channel Tunnel network coverage for travellers from the UK to France.\n[…]\nDupont, Christophe (1990). \"The Channel Tunnel Negotiations, 1984–1986: Some aspects of the process and its outcome\". Negotiation Journal. 6 (1): 71–80. doi:10.1111/j.1571-9979.1990.tb00555.x.\n[…]\n\"Channel Tunnel\". Structurae."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eurot%C3%BAnel",
        "situacao": "ok",
        "texto": "O Eurotúnel (em inglês:  Channel Tunnel; em francês:  Tunnel sous la Manche) é um túnel ferroviário de 50,45 quilômetros de extensão que liga Folkestone, Kent, no Reino Unido, com Coquelles, em Pas-de-Calais, perto de Calais, no norte da França, sob o Canal da Mancha no Estreito de Dover. No seu ponto mais baixo, atinge 75 metros de profundidade.\n[…]\nEm 1957, foi formado o Grupo de Estudo para o Túnel do Canal (Channel Tunnel Study Group). No seu relatório, publicado em 1960, recomendava-se a construção de dois túneis ferroviários principais e um de serviço, menor. O projeto foi iniciado em 1973, mas, devido a problemas de financiamento, foi interrompido em 1975 quando já estavam construídos 250 metros de um túnel de teste.\n[…]\nO encontro dos dois túneis 40 metros abaixo do solo do Canal da Mancha em 1 de dezembro de 1990, num crossover (passagens que permitem trens passar de um túnel a outro), tornou possível caminhar em terra seca da Inglaterra à Europa pela primeira vez desde o fim da última glaciação, mais de 13 mil anos atrás. Os britânicos e franceses, usando métodos de cálculo e pesquisa a laser, encontraram-se com menos de 2 cm de erro.\n[…]\nLe Shuttle: transporta automoveis, ônibus e vans através do túnel (como se fosse um ferry-boat, uma balsa ferroviária), serviço entre Calais (França) e Folkestone (Inglaterra).\n[…]\nO governo britânico instituiu um projeto (Channel Tunnel Rail Link, Ligação ao túnel do canal, em português), com parte de suas verbas oriundas do estado britânico, cujo objetivo é construir uma linha de trem de Londres à entrada do túnel especialmente dedicada aos trens de alta velocidade do Eurostar. No final de 2003, aproximadamente metade da linha estava completa (secção de Ebbsfleet a Cheriton). Quando o projeto foi finalizado, o terminal foi transferido de Waterloo para a estação de St.\n[…]\nChannel Tunnel History",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Carro flex",
      "descricao": "Automóvel bicombustível capaz de rodar com etanol, gasolina ou qualquer mistura dos dois, vendido no Brasil desde 2003."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Os carros flex, que aceitam álcool, gasolina ou qualquer mistura dos dois, começaram a ser vendidos no Brasil em que ano?",
    "resposta": "2003",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flexible-fuel_vehicles_in_Brazil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flexible-fuel_vehicles_in_Brazil",
        "situacao": "ok",
        "texto": "The fleet of flexible-fuel vehicles in Brazil is the largest in the world. Since their inception in 2003, a total of 30.5 million flex fuel cars and light-duty trucks were registered in the country, and over 6 million flexible-fuel motorcycles, both by March 2018. The market share of flex-fuel autos and light commercial trucks represented 88.6% of all light-duty registrations in 2017.\n[…]\nFlexible-fuel technology started being developed only by the end of the 1990s by Brazilian engineers and in March 2003 Volkswagen do Brasil launched in the market the Gol 1.6 Total Flex, the first commercial flexible fuel vehicle capable of running on any blend of gasoline and ethanol.\n[…]\nAfter the market launch of the Gol 1.6 Total Flex, the first commercial flexible fuel vehicle capable of running on any blend of gasoline and ethanol, GM do Brasil followed three months later with the Chevrolet Corsa 1.8 Flexpower, using an engine developed by a joint-venture with Fiat called PowerTrain.\n[…]\nFlexible fuel vehicles were 22% of the new car sales in 2004, 73% in 2005, 87.6% in July 2008, and reached a record 94% in August 2009. The production of flex-fuel cars and light commercial vehicles since 2003 reached 10 million vehicles in March 2010, and 15 million in January 2012. Registrations of flex-fuel cars and light trucks represented 87.0% of all passenger and light duty vehicles sold in the country in 2012. Production passed the 20 million-unit mark in June 2013.\n[…]\nIn December 2018, Toyota do Brasil announced the development of the world's first commercial hybrid electric car with flex-fuel engine capable of running with electricity and ethanol fuel or gasoline. The flexible fuel hybrid technology was developed in partnership with several Brazilian federal universities, and a prototype was tested for six months using a Toyota Prius as development mule.\n[…]\nEthanol fuel in Brazil"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Mayflower",
      "descricao": "Navio inglês que levou os peregrinos puritanos da Inglaterra à América do Norte em 1620."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que século o navio Mayflower levou um grupo de peregrinos ingleses para fundar uma colônia na América do Norte?",
    "resposta": "Século dezessete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mayflower"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mayflower",
        "situacao": "ok",
        "texto": "Mayflower was an English square-rigged merchant sailing ship, active from before 1609 until 1622. Her tonnage was 180+, and she was 110 feet (34 meters) long and 25 feet (7.5 meters) in the beam, with several decks. She was notable in that she transported a group of English families, known today as the Pilgrims, from England to the New World in 1620.\n[…]\nThe following year, the survivors celebrated the colony's first fall harvest along with 90 Wampanoag people, an occasion declared in centuries later as the first American Thanksgiving. As one of the earliest colonial vessels, Mayflower has become a cultural icon in the history of the United States.\n[…]\nMayflower has a famous place in American history as a symbol of early European colonization of the future United States. As described by Richard Bevan:\n[…]\nOut of all the voyages to the American colonies from 1620 to 1640, the Mayflower's first crossing of Pilgrim Fathers has become the most culturally iconic and important in the history of migration from Europe to the New World during the Age of Discovery.\n[…]\nThe American national holiday of Thanksgiving originated from the first Thanksgiving feast held by the Pilgrims in 1621, a prayer event and dinner to mark the first harvest of the Mayflower settlers.\n[…]\nThe phrase \"return of the Mayflower\" is often used to refer to significant events involving Americans returning by ship to England. George Henry Boughton used this phrase for his 1871 painting, as did Bernard F. Gribble, the latter of which depicts US Navy destroyers entering British waters as the United States joined the allied forces in World War I.\n[…]\nThe Mayflower II\n[…]\nContemporary photos of Plymouth's Barbican and the Mayflower Steps\n[…]\nPilgrims Point, Plymouth (UK)[link removed] A photo of the modern-day Mayflower Steps Arch and Pilgrims Point\n[…]\n\"Mayflower, The\" . Encyclopedia Americana. 1920."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mayflower",
        "situacao": "ok",
        "texto": "Mayflower foi o famoso navio que, em 1620, transportou os chamados Peregrinos, do porto de Southampton, Inglaterra, para o Novo Mundo.\n[…]\nDevido a uma série de problemas no navio, os peregrinos viram-se obrigados a regressar duas vezes, pouco depois de zarpar, para o consertar. A viagem seria feita em dois navios: o Mayflower e o Speedwell, mas problemas de vedação no casco do último impediram a sua partida. Por causa disso, 20 passageiros desistiram da viagem. Os outros foram todos juntos no Mayflower.\n[…]\nOs Peregrinos do Mayflower foram um dos primeiros povos colonos a se estabelecer nas terras do que seriam os futuros Estados Unidos da América. Fundaram aí a cidade de Plymouth, que se tornaria a capital da Colónia de Plymouth.\n[…]\nOs detalhes a respeito das dimensões da nave são desconhecidos, mas estimaram-se a partir do total da carga e pela forma dos barcos mercantes de 180 ton, que no período tinham entre 90 e 110 pés de comprimento e cerca de 25 pés de largura. O termo ton é utilizado para medir a carga do navio, e deriva da palavra inglesa tum, um barril grande que se usava para transportar vinho.\n[…]\nUm grupo de pesquisadores fez o desenho de uma réplica, o Mayflower II, que foi lançado a 22 de setembro de 1956.\n[…]\nAntes de desembarcar, os peregrinos escreveram e assinaram o Pacto do Mayflower. Estes não conseguiram chegar à Virgínia, onde tinham permissão de terras. A 5 de abril de 1621 o Mayflower partiu da colônia de Plymouth no Massachusetts, regressando a Inglaterra a 6 de maio de 1621.\n[…]\nMayflower history - MayflowerHistory.com\n[…]\nDescendentes famosos de passageiros do Mayflower\n[…]\nList completa de passageiros do Mayflower",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Bonde",
      "descricao": "Veículo elétrico ou de tração animal que corre sobre trilhos nas ruas das cidades, nome usado no Brasil para o tram ou elétrico."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Rio do século dezenove, os bilhetes da companhia de carris eram chamados por uma palavra inglesa que acabou dando nome ao veículo. Que palavra?",
    "resposta": "Bond",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bonde"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bonde",
        "situacao": "ok",
        "texto": "Um elétrico (português europeu) ou bonde (português brasileiro), trâmuei ou tranvia é um meio de transporte público tradicional em grandes cidades da Europa como Varsóvia, Basileia, Zurique, Helsinque, Lisboa e Porto, ou das Américas, como São Francisco, Rio de Janeiro e Toronto. Movimenta-se sobre carris (trilhos) que, em geral, encontram-se instalados nas partes mais antigas das cidades, uma vez\n[…]\nEm 1883, Magnus Volk construiu o Volk's Electric Railway, com bitola de 2 metros, ao longo da orla este em Brighton, na Inglaterra. Esta linha de 2 quilómetros, rebitolada a 2,09 metros em 1884, permanece em serviço até hoje, e é a mais antiga bondes elétricos no mundo. O primeiro bonde de serviço permanente às linhas aéreas foi o Mödling and Hinterbrühl Tram na Áustria. Ele começou a operar em outubro de 1883, mas foi fechado em 1932.\n[…]\nO outro estilo de bonde a vapor tinha a máquina a vapor no corpo do veículo. O sistema mais notável a adotar tais veículos foi o de Paris. Bondes a vapor também foram explorados em Rockhampton, no estado australiano de Queensland, entre 1909 e 1939. Estocolmo, na Suécia, tinha uma linha de bondes a vapor na ilha de Södermalm entre 1887 e 1901. A grande desvantagem deste estilo de bondes era o espaço limitado para o motor, de modo que estes elétricos eram normalmente de fraca potência.\n[…]\nA segunda cidade a operar os elétricos a cabo foi Dunedin, na Nova Zelândia, em 1881-1957.\n[…]\nOutro foi o de John Joseph Wright, irmão do famoso empresário mineiro Whitaker Wright, em Toronto, em 1883. A primeira instalação comercial de um bonde elétrico nos Estados Unidos foi construído em 1884 em Cleveland, em Ohio, operado por um período de um ano pela Cleveland East Street Railway Company. Anteriores instalações revelaram-se difíceis ou pouco confiáveis. A linha da Siemens, por exemplo, provocava choques elétricos em pessoas e animais que atravessavam as pistas."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Táxi",
      "descricao": "Automóvel de aluguel com motorista que leva passageiros e cobra pela corrida."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra táxi é a forma curta do nome de um aparelho que calcula o preço da corrida. Que aparelho é esse?",
    "resposta": "Taxímetro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Taxicab",
      "https://en.wikipedia.org/wiki/Taximeter"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taxicab",
        "situacao": "ok",
        "texto": "A taxi, also known as a taxicab or simply a cab, is a vehicle for hire that provides point-to-point transportation for passengers typically on an exclusive, non-shared basis. This differs from public transport, where pick-up and drop-off points are set by the service provider, although demand-responsive transport and share taxis provide hybrid bus/taxi modes.\n[…]\nThe taxicabs of Paris were equipped with the first meters beginning on 9 March 1898. They were originally called taxamètres, then renamed taximètres on 17 October 1904.\n[…]\nThe modern taximeter was invented and perfected by a trio of German inventors; Wilhelm Friedrich Nedler, Ferdinand Dencker and Friedrich Wilhelm Gustav Bruhn. The Daimler Victoria—the world's first motorized-powered taximeter-cab—was built by Gottlieb Daimler in 1897 and began operating in Stuttgart in June 1897. Gasoline-powered taxicabs began operating in Paris in 1899, in London in 1903, and in New York in 1907. The New York taxicabs were initially imported from France by Harry N.\n[…]\nTaxicabs proliferated around the world in the early 20th century. The first major innovation after the invention of the taximeter occurred in the late 1940s, when two-way radios first appeared in taxicabs. Radios enabled taxicabs and dispatch offices to communicate and serve customers more efficiently than previous methods, such as using callboxes. The next major innovation occurred in the 1980s when computer assisted dispatching was first introduced.\n[…]\nThe results of taxi deregulation in specific cities has varied widely.\n[…]\nIn New Zealand taxi deregulation increased the supply of taxi services and initially decreased the prices remarkably in big cities, whereas the effects in smaller cities were small.\n[…]\nIn Finland taxi fares rose 13% after 2018 deregulation.\n[…]\nMedia related to Taxi service at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Taximeter",
        "situacao": "ok",
        "texto": "A taximeter or fare meter is a mechanical or electronic device installed in taxicabs and auto rickshaws that calculates passenger fares based on a combination of distance travelled and waiting time. Its shortened form, \"taxi\", is also a metonym for the hired cars that use them.\n[…]\nTaximeters were originally mechanical and mounted outside the cab, above the driver's side front wheel. Meters were soon relocated inside the taxi, and in the 1980s electronic meters were introduced. There are some companies that claiming invention of the world's first electronic taximeter including Monitex in Israel.\n[…]\nTaximeters, when they are installed to the taxis, require adjustment of k constant. During the movement, car generates signal which transmitted to the taximeter. Number of signals transmitted per k constant ratio results distance travelled. Within pre-installed tariff values and travel data are multiplied and fare is calculated.\n[…]\nTaximeters can include several accessories, or act as components in larger dispatching/control systems. Features include:\n[…]\nSeat sensors that detect the presence of a passenger (to prevent a cab from carrying fares without activating the taximeter).\n[…]\nDuring normal operation, taximeters repeat cyclically through several stages:\n[…]\nOccupied (or Hired): The taximeter enters in this stage at the start of the trip and the \"Free\" sign is switched off. In this stage the running fare and the present tariff are displayed. Additional information that can be displayed in this mode includes extras (e.g. credits for luggage), present time, speed, etc.\n[…]\nMedia related to Taximeters at Wikimedia Commons\n[…]\nThe dictionary definition of taximeter at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/T%C3%A1xi",
        "situacao": "ok",
        "texto": "Um táxi (forma reduzida de \"taxímetro\") é um automóvel destinado ao transporte de passageiros e provido de um taxímetro. É um modo de transporte público com características entre os veículos privados e os ônibus urbanos, sem uma rota regular e contínua.\n[…]\nNos serviços de táxi comum, calcula-se a tarifa por meio de um taxímetro. Quando se utiliza taxímetro, este é previamente aferido e calcula a tarifa a partir do somatório da tarifa inicial, também conhecida como bandeirada, com a tarifa métrica ou horária.\n[…]\nA tarifa métrica mais comumente utilizada é a bandeira 1; a bandeira 2 costuma ser acionada quando há fatores que justifiquem um acréscimo no valor da corrida (horário noturno, estrada de terra etc.) O taxímetro comuta o sistema de medição para tarifa horária, quando o veículo está em baixa velocidade ou parado.\n[…]\nO táxi propriamente dito apareceu historicamente quando foram aplicadas taxas à sua utilização através de taxímetros. Contudo, o serviço de transportar pessoas numa grande cidade a qualquer pessoa que o solicite é quase tão antigo como a civilização. O primeiro serviço desse género apareceu com  a invenção do riquexó — carro de duas rodas puxado por um só homem.\n[…]\nOs municípios brasileiros diversificam os serviços de táxi em modalidades, tais como táxi luxo, táxi especial, táxi comum, táxi comum-rádio, táxi-lotação, táxi mirim e mototáxi, quase todos se utilizando de taxímetro.\n[…]\nEm São Paulo, esse valor diário pode variar entre 85 e 115 reais, mais o preço da gasolina. Outras alternativas disponíveis em algumas cidades brasileiras são alugar um táxi de uma associação ou cooperativa de radiotáxi, ou mesmo alugar um carro de outro taxista, pagando, também, um valor diário.\n[…]\nTáxi aéreo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Zepelim",
      "descricao": "Tipo de dirigível rígido desenvolvido na Alemanha a partir do fim do século dezenove."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que conde alemão, pioneiro dos dirigíveis rígidos, emprestou o próprio sobrenome a esse tipo de aeronave?",
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
        "texto": "Zeppelin ou Zepelim é um tipo de aeróstato rígido, mais especificamente um dirigível, cujo nome é uma homenagem ao Conde alemão Ferdinand Von Zeppelin, que foi pioneiro no desenvolvimento de dirigíveis rígidos no início do século XX. As primeiras ideias de Zeppelin foram formuladas em 1874 e desenvolvidas em detalhes em 1893, sendo patenteadas na Alemanha em 1895 e nos Estados Unidos em 1899.\n[…]\nO interesse do conde Ferdinand von Zeppelin no desenvolvimento de dirigíveis começou em 1874, quando ele se inspirou em uma palestra dada por Heinrich von Stephan, sobre o tema “Serviços postais mundiais e viagens aéreas”, para esboçar os princípios básicos de seu futuro aeróstato em um diário datado de 25 de Março de 1874. No diário, é descrito um grande envelope exterior, rigidamente emoldurado contendo várias cavidades de ar separadas.\n[…]\nFerdinand von Zeppelin começou a se dedicar mais seriamente ao seu projeto depois da sua reforma antecipada do exército em 1890 aos 52 anos. Convencido da importância potencial da aviação, ele começou a trabalhar em vários projetos em 1891, e teve esboços completamente detalhados em 1893. Um ano depois, em 1894, um comitê oficial revisou seus trabalhos e o concedeu a patente em 1895, tendo Theodor Kober produzido os desenhos técnicos.\n[…]\nDoações, os lucros de uma loteria particular, alguns fundos públicos, a hipoteca de uma das propriedades da esposa do Conde von Zeppelin e uma contribuição de 100 mil marcos dadas pelo próprio conde permitiram a construção do LZ 2, que fez um voo único em 17 de janeiro de 1906. Após ambos os motores falharem o dirigível fez um pouso forçado nas montanhas de Algovia, onde uma tempestade subsequentemente danificou a nave deixando-a irreparável.\n[…]\nTorre do Zeppelin\n[…]\nZeppelin LZ1\n[…]\nZeppelin Luftschifftechnik GmbH – The original company, now developing the Zeppelin NT\n[…]\nDark Autumn: The 1916 German Zeppelin Offensive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Boeing 747",
      "descricao": "Avião a jato de grande porte da Boeing, com uma corcunda característica na parte dianteira."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O Boeing 747 ganhou um apelido emprestado de um elefante de circo muito famoso no século dezenove. Que apelido é esse?",
    "resposta": "Jumbo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Boeing_747",
      "https://en.wikipedia.org/wiki/Jumbo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Boeing_747",
        "situacao": "ok",
        "texto": "The Boeing 747 is a long-range wide-body airliner designed and manufactured by Boeing Commercial Airplanes in the United States between 1968 and 2023.\n[…]\nOn September 30, 1968, the first 747 was rolled out of the purpose-built Everett Plant, the world's largest building by volume. The 747's first flight took place on February 9, 1969, and the 747 was certified in December 1969. It entered service with Pan Am on January 22, 1970. The 747 was the first airplane called a \"Jumbo Jet\" as the first wide-body airliner.\n[…]\nThe Jumbo Stay hostel, using a converted 747-200 formerly operated by Singapore Airlines and registered as 9V-SQE, opened at Arlanda Airport, Stockholm in January 2009. It closed in March 2025 after the owner declared bankruptcy.\n[…]\nFollowing its debut, the 747 rapidly achieved iconic status. The aircraft entered the cultural lexicon as the original Jumbo Jet, a term coined by the aviation media to describe its size, and was also nicknamed Queen of the Skies. Test pilot David P. Davies described it as \"a most impressive aeroplane with a number of exceptionally fine qualities\", and praised its flight control system as \"truly outstanding\" because of its redundancy.\n[…]\nBoeing 747-8\n[…]\nBoeing 747-400\n[…]\n\"747-8\". Boeing.\n[…]\n\"Boeing 747: Evolution of a Jumbo, As Featured On Aviation Week's Covers\". Aviation Week. August 2016.\n[…]\n\"Boeing's Jumbo jet celebrates golden jubilee\". FlightGlobal. February 8, 2019.\n[…]\n\"The 747 Takes Off: The Dawn of the Jumbo Jet Age\". Digital Exhibit. Northwestern University Transportation Library. January 2020.\n[…]\nFlottau, Jens (January 26, 2023). \"How Boeing's 747 Revolutionized Air Travel\". Aviation Week & Space Technology."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jumbo",
        "situacao": "ok",
        "texto": "Jumbo (December 25, 1860 – September 15, 1885), also known as Jumbo the Elephant and Jumbo the Circus Elephant, was a 19th-century male African bush elephant born in Sudan. Jumbo was exported to Jardin des Plantes, a zoo in Paris, and then transferred in 1865 to London Zoo in England. Despite public protest, Jumbo was sold to P. T. Barnum, who took him to the United States for exhibition in March \n[…]\nJumbo is the official Tufts University athletic mascot.\n[…]\nCanadian professional ice hockey player Joe Thornton (b. 1979) from St. Thomas, Ontario is nicknamed Jumbo Joe as a homage to Jumbo.\n[…]\nJumbo's molar teeth were malformed and out of line as a result of a long-term soft diet that did not wear his molar teeth down enough, obstructing the forward eruptive movement of the next molar.\n[…]\nJumbo's nightly rages were probably caused by toothache, rather than musth, as his keeper thought at the time.\n[…]\nA post mortem photograph of Jumbo shows skin abrasions consistent with an illustration produced just after his death of the freight train hitting him on a hip from behind as he was being led across to his traveling carriage, and said that the likeliest cause of death was internal bleeding from his injuries.\n[…]\nExamination of Jumbo's limb bones showed overgrown tendon attachment areas consistent with a long-term history of being overloaded at his work.\n[…]\nJumbo was still growing at the time of his death, as is normal for African male elephants of his age, and might eventually have attained the size claimed by Barnum.\n[…]\n1942 photo of the 'stuffed' Jumbo at the Barnum Museum\n[…]\nJumbo Images from the PT Barnum Collection at Tufts University\n[…]\nThe Story of Jumbo's Death Archived June 17, 2018, at the Wayback Machine\n[…]\nJumbo memorial in St. Thomas, ON, Canada\n[…]\nJumbo in typical trade card advertising.\n[…]\nAutobiography of Matthew Scott, Jumbo's Keeper; also Jumbo's Biography at Faded Page (Canada)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Boeing_747",
        "situacao": "ok",
        "texto": "Boeing 747 é uma aeronave a jato usada no âmbito civil e militar para transporte de passageiros e de carga, referida com frequência como Jumbo Jet ou Queen of the Skies (Rainha dos Céus). A sua corcunda na parte superior frontal da fuselagem faz com que seja uma das aeronaves mais reconhecíveis do mundo, sendo também a primeira do género produzida em massa.\n[…]\nDesenvolver o 747 já todos sabiam que estava a ser um enorme desafio, e construir uma nova fábrica estava a revelar ser preciso um esforço ainda maior. O presidente da Boeing William M. Allen pediu a Malcolm T. Stamper, o responsável da divisão de turbinas da empresa, para supervisionar a construção do novo complexo onde seriam construídos os 747 e, assim que estivesse terminado, dar início à produção do mesmo.\n[…]\nO enorme custo do desenvolvimento do 747, e a construção da fábrica de Everett, significou que a Boeing teve que contrair grandes quantias emprestadas por diversos bancos. Durante os meses finais, antes da entrega da primeira aeronave à Pan Am, a companhia teve que pedir vários empréstimos para conseguir finalizar o projecto. Se estes tivessem sido recusados, a própria existência da Boeing ficaria em risco.\n[…]\nA aeronave entrou para o léxico cultural como o verdadeiro Jumbo Jet, um termo cunhado nos media da aviação para descrever o seu tamanho, recebendo a alcunha de Queen of the Skies (Rainha dos céus).\n[…]\nGesar, Aram. Boeing 747: The Jumbo (em inglês). New York: Pyramid Media Group, 2000. ISBN 0-944188-02-8.\n[…]\nPealing, Norman, and Savage, Mike. Jumbo Jetliners: Boeing's 747 and the Widebodies (Osprey Color Classics) (em inglês). Osceola, WI: Motorbooks International, 1999. ISBN 1-85532-874-7.\n[…]\nSutter, Joe. 747: Creating the World's First Jumbo Jet and Other Adventures from a Life in Aviation (em inglês). Washington, DC: Smithsonian Books, 2006. ISBN 978-0-06-088241-9.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Metrô de Londres",
      "descricao": "Sistema de metrô de Londres, aberto em 1863 com a Metropolitan Railway."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra metrô abrevia um adjetivo que já estava no nome da primeira linha subterrânea de Londres, aberta em 1863. Que adjetivo?",
    "resposta": "Metropolitano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Metropolitan_Railway",
      "https://en.wikipedia.org/wiki/Rapid_transit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Metropolitan_Railway",
        "situacao": "ok",
        "texto": "The Metropolitan Railway (also known as the Met) was a passenger and goods railway that served London from 1863 to 1933, its main line heading north-west from the capital's financial heart in the City to what were to become the Middlesex suburbs. Its first line connected the main-line railway termini at Paddington, Euston, and King's Cross to the City.\n[…]\nFormer Met tracks and stations are used by the London Underground's Metropolitan, Circle, District, Hammersmith & City, Piccadilly, Jubilee and Victoria lines, and by Chiltern Railways and Great Northern.\n[…]\nThe early success of the Met prompted a flurry of applications to Parliament in 1863 for new railways in London, many of them competing for similar routes. To consider the best proposals, the House of Lords established a select committee, which issued a report in July 1863 with a recommendation for an \"inner circuit of railway that should abut, if not actually join, nearly all of the principal railway termini in the Metropolis\".\n[…]\nBetween 1927 and 1933, multiple unit compartment stock was built by the Metropolitan Carriage and Wagon and Birmingham Railway Carriage and Wagon Company for services from Baker Street and the City to Watford and Rickmansworth. The first order was only for motor cars; half had Westinghouse brakes, Metro-Vickers control systems and four MV153 motors; they replaced the motor cars working with bogie stock trailers.\n[…]\nBaker, B. (1885). \"The Metropolitan and Metropolitan District Railways. (Including Plates at Back of Volume)\". Minutes of the Proceedings. 81 (1885). Institution of Civil Engineers: 1–33. doi:10.1680/imotp.1885.21367.\n[…]\nA silent film A trip on the Metropolitan Railway, circa 1910 Archived 7 March 2016 at the Wayback Machine (Adobe Flash) London Transport Museum\n[…]\nMetropolitan Line Clive's UndergrounD Line Guides"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rapid_transit",
        "situacao": "ok",
        "texto": "Rapid transit, mass rapid transit (MRT) or rail rapid transit (RRT) and commonly referred to as metro, is a type of high-capacity public transport that is generally built in urban areas. A grade separated rapid transit line below ground surface through a tunnel can be regionally called a subway, tube, metro or underground. They are sometimes grade-separated on elevated railways, in which case some\n[…]\nThe world's first rapid transit system was the partially underground Metropolitan Railway which opened in 1863 using steam locomotives, and now forms part of the London Underground.\n[…]\nIn most of Southeast Asia and in Taiwan, rapid transit systems are primarily known by the acronym MRT. The meaning varies from one country to another. In Indonesia, the acronym stands for Moda Raya Terpadu or Integrated Mass [Transit] Mode in English. In the Philippines, it stands for Metro Rail Transit. Two underground lines use the term subway. In Thailand, it stands for Metropolitan Rapid Transit, previously using the Mass Rapid Transit name.\n[…]\nThe opening of London's steam-hauled Metropolitan Railway in 1863 marked the beginning of rapid transit. Initial experiences with steam engines, despite ventilation, were unpleasant. Experiments with pneumatic railways failed in their extended adoption by cities.\n[…]\nThe technology used for public, mass rapid transit has undergone significant changes in the years since the Metropolitan Railway opened publicly in London in 1863.\n[…]\nAlthough trains on very early rapid transit systems like the Metropolitan Railway were powered using steam engines, either via cable haulage or steam locomotives, nowadays virtually all metro trains use electric power and are built to run as multiple units.\n[…]\nAlso, an efficient transit system can decrease the economic welfare loss caused by the increase of population density in a metropolis.\n[…]\nList of metro systems"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Metropolitan_Railway",
        "situacao": "ok",
        "texto": "A Metropolitan Railway (MetR ou Met) e a Metropolitan District Railway (District), em português, Caminho de Ferro Metropolitano, Estrada de Ferro Metropolitana ou Ferrovia Metropolitana; e Caminho de Ferro do Distrito Metropolitano, Estrada de Ferro do Distrito Metropolitano ou Ferrovia do Distrito Metropolitano foram os dois primeiros metropolitanos a serem construídos em Londres, a criação do pr\n[…]\nO projeto mostrou-se tão bem-sucedido que eventualmente 120 foram construídos para fornecer tração na Metropolitan, na District Railway (em 1871) e em todas as outras linhas subterrâneas \"cut and cover\". Esse motor de tanque 4-4-0 pode, portanto, ser considerado o motor pioneiro da primeira ferrovia subterrânea de Londres; finalmente, 148 foram construídos entre 1864 e 1886 para várias ferrovias, e a maioria continuou funcionando até a eletrificação em 1905.\n[…]\nAo contrário da UERL, a Met lucrava diretamente com o desenvolvimento de empreendimentos residenciais metropolitanos próximos a suas linhas; o Met sempre pagava um dividendo para seus acionistas. Os primeiros relatos não são confiáveis, mas no final do século XIX estavam pagando um dividendo de cerca de 5 por cento. Isso caiu a partir de 1900, quando os bondes elétricos e a Central London Railway atraíram os passageiros; uma baixa de 1⁄2 por cento foi alcançada em 1907-1908.\n[…]\nApós a fusão em 1933, a marca \"Metro-land\" foi rapidamente abandonada. Em meados do século XX, o espírito da Metro-land foi lembrado nos poemas de John Betjeman como \"The Metropolitan Railway\" publicados na coleção A Few Late Chrysanthemums em 1954 e mais tarde alcançou uma audiência maior com seu documentário de televisão Metro-land, transmitido pela primeira vez em 26 de fevereiro de 1973.\n[…]\nMetropolitano de Londres\n[…]\nUm filme mudo A trip on the Metropolitan Railway, cerca de 1910 London Transport Museum\n[…]\nMetropolitan Line Clive's UndergrounD Line Guides",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Kombi",
      "descricao": "Furgão da Volkswagen, também chamado Volkswagen Type 2, fabricado no Brasil de 1957 a 2013."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Kombi vem de uma palavra alemã para veículo combinado. Ele combinava o transporte de quê com o quê?",
    "resposta": "Passageiros e carga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volkswagen_Type_2",
      "https://pt.wikipedia.org/wiki/Volkswagen_Kombi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volkswagen_Type_2",
        "situacao": "ok",
        "texto": "The Volkswagen Transporter, initially the Type 2, is a range of light commercial vehicles, built as vans, pickups, and cab-and-chassis variants, introduced in 1950 by the German automaker Volkswagen. It was the company's second mass-production light motor vehicle series, and was inspired by an idea and request from Dutch VW importer Ben Pon.\n[…]\nKnown officially (depending on body type) as the Transporter, Kombi or Microbus—or informally as the Volkswagen Station Wagon (US), Bus (also US), Camper (UK) or Bulli (Germany), it was initially given the factory designation \"Type 2\", as it followed—and was for decades based on—the original Volkswagen (\"People's Car\"), which became VW's \"Type 1\" after the company's post-World War II reboot, and mostly known, in many languages, as the \"Beetle\".\n[…]\nIn 2017, decades after production of the Type 2 ended, Volkswagen announced the introduction of an electric VW microbus based on the new MEB platform in 2022.\n[…]\nThe Type 2 was available as a:\n[…]\nThe official German-language model names Transporter and Kombi (Kombinationskraftwagen, combined-use vehicle) have also caught on as nicknames. Kombi is not only the name of the passenger variant but also the Australasian and Brazilian term for the whole Type 2 family, in much the same way that they are all called VW-Bus in Germany, even the pickup truck variations.\n[…]\nIn 1996, production ended in Mexico, with models henceforth being imported from Brazil. The Caravelle was discontinued and both the Combi and the Panel were only offered in white color. Finally, in 2002, the Combi/Panel were replaced by the T4 EuroVan Pasajeros and EuroVan Carga, passenger and cargo van in long wheelbase version, fitted with a 2.5-liter, 115 PS, straight-five engine and a five-speed manual gearbox imported from Germany.\n[…]\nVolkswagen Transporter\n[…]\nVolkswagen Westfalia Camper"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Volkswagen_Kombi",
        "situacao": "ok",
        "texto": "O Volkswagen Kombi foi um veículo comercial ligeiro  produzido pela empresa automotiva alemã Volkswagen, entre 1950 e 2013. Por força de um decreto, os carros a partir de 2014, deveriam ser dotados de freio tipo ABS e possuir Airbag frontal duplo (para o condutor e passageiro do banco dianteiro). O antigo projeto mostrou-se incompatível com as novas exigências da legislação.\n[…]\nNo Brasil,  foi fabricada ininterruptamente entre 2 de setembro de 1957 e 18 de dezembro de 2013, sendo praticamente o automóvel mais antigo no mercado do país. É considerada a precursora das vans de passageiros e carga.\n[…]\nA versão Standard veio para o Brasil inicialmente com a designação Kombi - do alemão Kombinationsfahrzeug, refletindo a natureza multiuso desta versão em particular, que poderia ser utilizada como veículo de carga (sem os bancos) ou de passageiros/família (com os bancos). Posteriormente o nome acabou servindo para designar toda a linha no Brasil.\n[…]\nDurante a produção no Brasil, a versão Standard apresentou várias configurações, como a atual \"Escolar\" para doze passageiros, ou Luxo, apresentada nos anos 1950 e 60 como transporte para famílias; este nicho de mercado é hoje ocupado pelas \"minivans\" tais como a GM Spin. Mais recentemente, o tipo \"Standard\" ganhou o modelo \"Lotação\", logo após a legalização do uso deste tipo de veículo para transporte público.\n[…]\nA versão mexicana, no entanto, ainda contava com um painel de plástico envolvente que proporcionava maior proteção para os passageiros - item que nunca equipou a Kombi brasileira.\n[…]\nCarat (1997 e 1998): Versão de luxo, com teto alto, porta lateral e janelas de correr. Capacidade para 7 passageiros. Interior luxuoso com tecido diferenciado.\n[…]\nCarga útil (kg): 810\n[…]\nCarga útil máxima (kg):\n[…]\nCapacidade de carga: 1.070 kg\n[…]\nCarga útil máxima (kg): 1000\n[…]\nFlatOut. Elektro-Bus: o primeiro carro elétrico da Volkswagen foi… uma Kombi"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "RMS Lusitania",
      "descricao": "Transatlântico britânico da Cunard afundado por um submarino alemão em maio de 1915."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O naufrágio do transatlântico Lusitania, torpedeado por um submarino alemão em 1915, ajudou a empurrar qual país para a Primeira Guerra?",
    "resposta": "Estados Unidos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sinking_of_the_RMS_Lusitania"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sinking_of_the_RMS_Lusitania",
        "situacao": "ok",
        "texto": "RMS Lusitania was a British-registered ocean liner that was torpedoed by an Imperial German Navy U-boat during the First World War on 7 May 1915, about 11 nautical miles (20 kilometres; 13 miles) off the Old Head of Kinsale, Ireland (then part of the United Kingdom).\n[…]\nOn her next voyage, Lusitania was scheduled to arrive in Liverpool on 6 March 1915. The Admiralty issued her specific instructions on how to avoid submarines. Despite a severe shortage of destroyers, Admiral Henry Oliver ordered HMS Louis and Laverock to escort Lusitania, and took the further precaution of sending the Q ship Lyons to patrol Liverpool Bay.\n[…]\nCaptain Dow, apparently stressed by operating in the war zone, left the ship; Cunard later explained that he was \"tired and really ill.\" He was replaced with a new commander, Captain William Thomas Turner, who had commanded Lusitania, Mauretania, and Aquitania before the war. On 17 April 1915, Lusitania left Liverpool on her 201st transatlantic voyage, arriving at New York on 24 April.\n[…]\nThe following day the German government issued an official communication regarding the sinking in which it said that the Cunard liner Lusitania \"was yesterday torpedoed by a German submarine and sank\", that Lusitania \"was naturally armed with guns, as were recently most of the English mercantile steamers\" and that \"as is well known here, she had large quantities of war material in her cargo\". This would be the official German line for the immediate aftermath.\n[…]\nWhile most would agree that running into the submarine was ultimately a matter of bad luck, with the more modern understanding that the ship may have sunk from torpedo damage alone, the degree to which Turner may have exacerbated the loss of life gains some significance."
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Revolta do Vintém",
      "descricao": "Protesto popular ocorrido no Rio de Janeiro entre o fim de 1879 e o início de 1880 contra uma taxa de um vintém."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1880, a Revolta do Vintém tomou as ruas do Rio de Janeiro contra uma taxa cobrada nas passagens de qual meio de transporte?",
    "resposta": "Bonde",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Revolta_do_Vint%C3%A9m"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Revolta_do_Vint%C3%A9m",
        "situacao": "desambiguacao",
        "texto": "Revolta do Vintém pode referir-se a:\n\nRevolta do Vintém (Rio de Janeiro) - protestos populares ocorridos na cidade do Rio de Janeiro no ano de 1880\nRevolta do Vintém (Paraná) - protestos populares ocorridos na cidade de Curitiba no ano de 1883"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Cutty Sark",
      "descricao": "Clíper britânico construído em 1869, preservado em Greenwich, Londres."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O veleiro Cutty Sark foi lançado em 1869, ano da inauguração de uma obra que logo tirou dos veleiros o comércio de chá com a China. Que obra?",
    "resposta": "Canal de Suez",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cutty_Sark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cutty_Sark",
        "situacao": "ok",
        "texto": "Cutty Sark is a British clipper ship. Built on the River Leven, Dumbarton, Scotland in 1869 for the Jock Willis Shipping Line, she was one of the last tea clippers to be built and one of the fastest, at the end of a long period of design development for this type of vessel, which ended as steamships took over their routes. She was named after the fictional witch who wore only a short shift (a \"cut\n[…]\nAfter the big improvement in the fuel efficiency of steamships in 1866, the opening of the Suez Canal in 1869 gave them a shorter route to China, so Cutty Sark spent only a few years on the tea trade before turning to the trade in wool from Australia. Continuing improvements in steam technology early in the 1880s meant that steamships also came to dominate the longer sailing route to Australia, and the ship was sold to the Portuguese company Ferreira and Co. in 1895. She was renamed Ferreira.\n[…]\nCutty Sark sailed in eight \"tea seasons\", from London to China and back.\n[…]\nCutty Sark's launch coincided with the opening of the Suez Canal to shipping in 1869. Her first trip encountered significant competition with steamships. The route from the Far East to London (and many other European ports) through the Suez Canal was shorter by about 3,300 nautical miles (6,100 km; 3,800 mi), compared to sailing round the Cape of Good Hope. The route round Africa is in excess of 14,000 nmi (26,000 km; 16,000 mi).\n[…]\nWhen the tea clippers arrived in China in 1870, they found a big increase in the number of steamers, which were in high demand. The rate of freight to London that was given to steamers was nearly twice that paid to the sailing ships. Additionally, the insurance premium for a cargo of tea in a steamer was substantially less than for a sailing vessel. So successful were the steamers using the Suez Canal that, in 1871, 45 were built in Clyde shipyards alone for Far Eastern trade.\n[…]\n\"Cutty Sark\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cutty_Sark",
        "situacao": "ok",
        "texto": "O Cutty Sark é um clipper (veleiro) britânico. Da classe \"extreme clipper\", é a última das embarcações de transporte de chá, preservada como símbolo de uma era.\n[…]\nA embarcação destinava-se ao transporte de chá, naquela época objecto de um dinâmico comércio entre a China e a Grã-Bretanha. Este comércio gerava grandes lucros, nomeadamente se chegasse a Londres com o primeiro chá da temporada, o que demandava embarcações ágeis e velozes. O início da carreira do Cutty Sark, entretanto, não foi dos mais promissores.\n[…]\nEm fins do século XIX os clippers foram substituídos pelos barcos a vapor na rota do chá. Estes últimos podiam passar através do canal de Suez e, além disso, a entrega da carga era mais garantida. O Cutty Sark foi destinado então ao comércio de lã com a Austrália. Sob o comando do respeitado capitão Richard Woodget conseguiu transportar cargas de lã em apenas 67 dias.\n[…]\nO Cutty Sark tem também seu eco na literatura graças ao poema de Hart Crane, \"The Bridge\", publicado em 1930.\n[…]\nA embarcação arvora uma bandeira com a legenda \"JKWS\", o código que representa Cutty Sark no Código internacional de sinais, introduzido em 1857.\n[…]\nA embarcação inspirou a marca de whisky com o mesmo nome. Uma imagem do veleiro figura no rótulo e antigamente, a marca patrocinava uma corrida de clipper conhecida como \"Cutty Sark Tall Ships' Race\".\n[…]\nO Cutty Sark é um das três últimas embarcações sobreviventes da era dos clippers. Possui estrutura metálica e coberta em pranchas de madeira.\n[…]\n«Site oficial do Cutty Sark.» (em inglês)\n[…]\n«Cutty Sark: a lenda e o mito. in: Revista da Armada.»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Panair do Brasil",
      "descricao": "Companhia aérea brasileira que operou de 1929 até ser fechada pelo governo militar em 1965."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A companhia aérea Panair do Brasil, fechada pelo governo em 1965, é lembrada numa canção de saudade composta por Fernando Brant e qual cantor mineiro?",
    "resposta": "Milton Nascimento",
    "distratores": [
      "Beto Guedes",
      "Flávio Venturini",
      "Toninho Horta"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Panair_do_Brasil",
      "https://en.wikipedia.org/wiki/Panair_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Panair_do_Brasil",
        "situacao": "ok",
        "texto": "A Panair do Brasil S.A. foi uma companhia aérea brasileira sediada no Rio de Janeiro, fundada em 22 de outubro de 1929, por Ralph Ambrose O'Neill, como NYRBA do Brasil. Foi uma das companhias aéreas pioneiras do Brasil. A NYRBA foi incorporada pela Pan Am em 1930, e teve seu nome mudado para Panair do Brasil, em referência ao código telegráfico da Pan American World Airways, \"PANAIR\", controladora\n[…]\nO governo brasileiro concedeu à Panair a concessão para operar serviços para a Europa, sendo a única companhia aérea brasileira com tal concessão.\n[…]\nEm 1953, a Panair fez um pedido de quatro de Havilland Comet 2, com opção para mais dois Comet 3. A Panair foi a segunda companhia aérea a fazer um pedido dessas aeronaves, atrás apenas da BOAC. Essas ordens acabariam canceladas em 1954, devido a falhas no projeto original do avião.\n[…]\nDiversos autores (MARTINS, 2004; LEB SASAKI, 2005;2015) avaliam que a destruição da companhia foi motivada pela perseguição política que o regime militar movia contra os proprietários da Panair, os empresários Celso da Rocha Miranda e Mário Wallace Simonsen — este, dono também da TV Excelsior, que foi igualmente fechada por ordem do governo militar brasileiro.\n[…]\nOs funcionários da Panair do Brasil têm geralmente muito orgulho de haver trabalhado para esta companhia. Desde 1966, cerca de 400 pessoas se reúnem num almoço anual, realizado no dia 22 de outubro, para lembrar dos velhos tempos e recontar as inúmeras histórias pessoais, celebrar e rememorar as agruras e as glórias da aeronáutica, mas sobretudo aquelas adornadas pelo verde e dourado da Panair.\n[…]\nA Panair inspirou algumas músicas no Brasil, incluindo uma interpretada por Elis Regina, que fez sucesso: \"Saudade dos Aviões da Panair (Conversando num Bar)\", composta por Milton Nascimento e Fernando Brant.\n[…]\n«Estúdio i (GloboNews): \"Exposição no Rio conta história da companhia aérea Panair do Brasil\"»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Panair_do_Brasil",
        "situacao": "ok",
        "texto": "Panair do Brasil was an airline of Brazil. It ceased operations in 1965. Between 1945 and 1965, it was considered to be the largest carrier not only in Brazil but in all of Latin America.\n[…]\nPanair do Brasil was forced to cease operations abruptly on February 10, 1965, when the Brazilian military government, which seized power the year before, suspended its operational certification and allotted its international route concessions to Varig and domestic to Cruzeiro do Sul.\n[…]\nThe sudden suspension of Panair shocked the country. Since its financial problems were not serious enough to justify the government's actions, the company tried to protect its assets by filing for bankruptcy protection while its lawyers debated the issue in Court. Pressured by the military, the judge that was studying the carrier's plea declared Panair officially bankrupt on February 15, 1965.\n[…]\nIt has since been determined that the shutdown of Panair do Brasil was not based on financial or technical reasons, but on other political factors, such as the military government persecution of the company's shareholders, businessmen Celso da Rocha Miranda and Mário Wallace Simonsen.\n[…]\nOn March 23, 2013, the Brazilian National Truth Commission, established in 2012 by the Brazilian government to investigate acts of human rights violations between 1946 and 1988, held a public event in Rio de Janeiro to address the circumstances behind the shutdown of Panair do Brasil. The group has recently had access to unpublished documentation which would prove that the company's owners were victims of the country's military regime.\n[…]\nAirport Development Program: Panair do Brasil's role in WWII"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Trem do Corcovado",
      "descricao": "Ferrovia de cremalheira inaugurada em 1884 que sobe o morro do Corcovado, no Rio de Janeiro."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Inaugurado em 1884, o trem que sobe o morro do Corcovado, no Rio, levou décadas depois os materiais para erguer qual monumento?",
    "resposta": "Cristo Redentor",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Trem_do_Corcovado",
      "https://en.wikipedia.org/wiki/Corcovado_Rack_Railway"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Trem_do_Corcovado",
        "situacao": "ok",
        "texto": "O Trem do Corcovado é uma linha férrea localizada na cidade do Rio de Janeiro. A linha começa no bairro do Cosme Velho e segue até o cume do morro do Corcovado, a uma altitude de 710 m. O cume é famoso pela estátua do Cristo Redentor e pela vista aérea de várias praias do Rio de Janeiro.\n[…]\nA linha foi inaugurada pelo imperador Dom Pedro II em 9 de Outubro de 1884. É, portanto, mais antigo que o monumento do Cristo Redentor, que foi aberto a visitação em 1931. De fato, as peças para a montagem da estátua do Cristo foram transportadas pelo próprio trem ao longo de quatro anos.\n[…]\nAo longo de seus anos, o Trem do Corcovado já recebeu vários passageiros ilustres, como o Imperador Dom Pedro II, Princesa Isabel, Papa João Paulo II, Alberto Santos Dumont, Epitácio Pessoa, Getúlio Vargas, Albert Einstein e a Princesa Diana de Gales.\n[…]\nO trajeto é completado em cerca de 20 minutos, com um trem partindo também a cada 20 minutos, o que dá ao sistema uma capacidade de transporte de 462 passageiros por hora. Devido à capacidade limitada, a espera para fazer a viagem pode levar horas nos dias com muita afluência de turistas. A estação funciona das 8h às 17h nos dias úteis e das 8h às 18h aos finais de semana e feriados.\n[…]\nEm outubro de 2025, com a eminente finalização das obras de revitalização do Bonde de Santa Teresa, o presidente do Trem do Corcovado anunciou a reforma da estação Silvestre, com planos para utilizar a estação como base para um passeio ao pôr do sol, além de \"um bar nos próximos meses\" e até o fim de 2026 \"um hotel com apenas oito quartos e um restaurante\".\n[…]\nTrem do Corcovado no Facebook\n[…]\nTrem do Corcovado no Instagram\n[…]\nTrem do Corcovado no X"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Corcovado_Rack_Railway",
        "situacao": "ok",
        "texto": "The Corcovado Rack Railway (Portuguese: Trem do Corcovado) is a mountain rack railway in Rio de Janeiro, Brazil, from Cosme Velho to the summit of Corcovado at an elevation of 710 m (2,329 ft). The summit is famous for its giant statue of Christ the Redeemer and for its views over the city and beaches.\n[…]\nThe railway was opened by Emperor Dom Pedro II of Brazil on 9 October 1884. Initially hauled by steam locomotives, the line was electrified in 1910, a first in Brazil. It was re-equipped in 1980 with trains built by Swiss Locomotive and Machine Works (SLM) of Winterthur, Switzerland, and these were in turn replaced in 2019 by vehicles from SLM's successor company Stadler Rail.\n[…]\nThe line is 3.824 km (2.376 mi) long and has four stations total. The termini are the historic base station in Cosme Velho and the summit of Corcovado.\n[…]\nThe railway was built using metre gauge and the Riggenbach rack system, and has a maximum incline of 30%. It is one of the few remaining railways using three-phase electric power with two overhead wires, at 900 V 60 Hz.\n[…]\nCorcovado Rack Railway website"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Estação Saint-Lazare",
      "descricao": "Estação ferroviária de Paris inaugurada em 1837, uma das mais movimentadas da França."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1877, que pintor impressionista fez uma série de quadros da estação ferroviária Saint-Lazare, em Paris, cheia da fumaça das locomotivas?",
    "resposta": "Claude Monet",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Gare_Saint-Lazare",
      "https://en.wikipedia.org/wiki/Gare_Saint-Lazare"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Gare_Saint-Lazare",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gare_Saint-Lazare",
        "situacao": "ok",
        "texto": "The Gare Saint-Lazare (French pronunciation: [ɡaʁ sɛ̃ lazaʁ]; lit. 'Saint Lazarus station'), officially Paris Saint Lazare, is one of the seven large mainline railway station terminals in Paris, France. It was the first railway station built in Paris, opening in 1837. It mostly serves train services to western suburbs, as well as intercity services toward Normandy using the Paris–Le Havre railway.\n[…]\nIn 1877, painter Claude Monet rented a studio near the Gare Saint Lazare. That same year he exhibited seven paintings of the railway station in an impressionist painting exhibition. He completed 12 paintings of this subject. Oscar-Claude Monet's series of the Gare Saint-Lazare train station was one of his most famous series in his lifetime. Monet was one of the most important and influential painters in the Impressionist movement in the 19th century.\n[…]\nThe Gare Saint-Lazare piece was shown at the Third Impressionist Exhibition. The Gare Saint-Lazare is very different from Monet's previous paintings of harbors, boats and oceans that viewers had seen before. The Gare Saint-Lazare series of paintings lead the viewers through a tour of the train station in different points of the day.\n[…]\nLe Quartier de l'Europe, where artists like Claude Monet and Gustave Caillebotte spent a lot of time and painted was, in short, a paradigm of modern Paris; the forward-looking young artists who called it home, and who had consciously dedicated themselves to the interpretation of modern life, included in their work recognizable references to their neighborhood as a sign of both their commitment to the present, with all its irregularities and \"unaesthetic\" components, and their rejection of the past, with its Academy-sanctioned conventions.\n[…]\nWilson-Bareau, Juliet. Manet, Monet, and the Gare Saint-Lazare.\n[…]\nGare Saint-Lazare at \"Gares & Connexions\", the official website of SNCF (in French)"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Daimler Reitwagen",
      "descricao": "Veículo de duas rodas com motor a gasolina construído por Gottlieb Daimler e Wilhelm Maybach em 1885, considerado a primeira motocicleta a gasolina."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em 1885, Gottlieb Daimler e Wilhelm Maybach criaram a Reitwagen, motocicleta a gasolina pioneira. De que material eram o quadro e as rodas?",
    "resposta": "Madeira",
    "distratores": [
      "Aço",
      "Bambu",
      "Ferro fundido"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Daimler_Reitwagen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Daimler_Reitwagen",
        "situacao": "ok",
        "texto": "The Daimler Reitwagen  (\"riding car\") or Einspur (\"single track\") was a motor vehicle made by Gottlieb Daimler and Wilhelm Maybach in 1885. It is widely recognized as the first motorcycle. Daimler is often called \"the father of the motorcycle\" for this invention.\n[…]\nEnrico Bernardi's 1884 one-cylinder gasoline-engined tricycle, the Motrice Pia, is considered by a few sources as the first gasoline internal combustion motorcycle, and in fact the first ever internal combustion vehicle, so Siegfried Marcus built his internal combustion vehicle in 1870. Bernardi's work was more of a motorbike, mounting his engine on the tricycle of his son, while Daimler designed and built the Reitwagen chassis to fit the needs of his machine and so the first full motorcycle.\n[…]\nIn 1872 Gottlieb Daimler had become the director of N.A. Otto & Cie, the world's largest engine manufacturer. Otto's company  had created the first successful gaseous fuel engine in 1864 and in 1876 finally succeeded in creating a compressed charge gaseous petroleum engine due to the direction of Daimler and his plant engineer Wilhelm Maybach. Because of this success Otto's company name was changed to Gasmotoren Fabrik Deutz (Now Deutz AG) the next year when the plant was moved.\n[…]\nHaving achieved the goals of producing a throttling engine with high enough RPM that was small enough to be used in transportation Daimler and Maybach built the 1884 engine into a two-wheeled test frame which was patented as the \"Petroleum Reitwagen\" (Petroleum Riding Car). This test machine demonstrated the feasibility of a liquid petroleum engine which used a compressed fuel charge to power an automobile. Daimler is often referred to as the Father of the Automobile.\n[…]\nThe design was patented on August 29, 1885."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Daimler_Reitwagen",
        "situacao": "ok",
        "texto": "A Daimler Reitwagen  (\"vagão de dirigir\") ou Einspur (\"pequeno caminho\") foi uma motocicleta desenvolvida por Gottlieb Daimler e Wilhelm Maybach em 1885, e é considerada a primeira motocicleta que existiu. Daimler é considerado \"o pai do motociclismo\" por sua invenção.\n[…]\nDaimler fundou uma oficina de teste em Cannstatt em 1882. Junto com seu empregado Maybach, ele desenvolveu uma unidade, de alta velocidade compacto único - cilindro do motor de quatro tempos. O motor a gás controlado com ignição por tubo de incandescência foi protegido pelas patentes de 16 de dezembro de 1883 (DRP 28022) e 22 de dezembro de 1883 (DRP 28243). O motor alcançou de 462 cc a uma potência de 1 cavalo-vapor (735  W) a 600 rotações por minuto.\n[…]\nUma versão revisada com um deslocamento menor (264 cm³) foi patenteado em 3 de abril de 1885 (DRP 34926). Com um peso de cerca de 60 quilos, o motor era comparativamente leve e produzia cerca de meio cavalo - vapor (368  W) a 700 rotações por minuto. As pequenas dimensões e o baixo peso, mas também a operação com gasolina, tornaram o motor de relógio de pêndulo menor ideal para um uso independente do local.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Placa de pare",
      "descricao": "Placa de trânsito vermelha e octogonal que indica parada obrigatória."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A placa vermelha de parada obrigatória, usada no Brasil e em boa parte do mundo, tem quantos lados?",
    "resposta": "Oito",
    "distratores": [
      "Seis",
      "Cinco",
      "Dez"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Stop_sign"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stop_sign",
        "situacao": "ok",
        "texto": "A stop sign is a traffic sign designed to notify drivers that they must come to a complete stop and make sure the intersection (or railroad crossing) is safely clear of vehicles and pedestrians before continuing past the sign. In many countries, the sign is a red octagon with the word STOP, in either English, the national language of that particular country, or both, displayed in white or yellow.\n[…]\nJapan uses a triangular sign that says 止まれ tomare and stop.\n[…]\nVanuatu uses a circular red stop sign.\n[…]\nInstead of replacing all the old halt signs with the new Vienna Convention stop sign, the give way sign became the standard one at UK priority junctions.\n[…]\nRelatively short distance between the stop sign and the crossroad shortens the time required for safe passage through the intersection, but degrades the ability of the stopped driver to accurately perceive the speed of approaching cross traffic.\n[…]\nSpecifically, drivers approaching an intersection from beyond the subtended angular velocity detection threshold (SAVT) limit may be perceived by a stopped driver as standing still rather than approaching, which means the stopped driver may not make an accurate decision as to whether it is safe to proceed past the stop sign.\n[…]\nWhether the distance between the stop sign and the crossroad is officially short or is shortened by drivers creeping past the stop line, they can lose the visual acuity of lateral motion, leaving them to rely on the SAVT. This can make it challenging to accurately estimate the movement of approaching cross traffic. According to recent game-theoretical analysis, at intersections where all directions face stop signs, drivers have strong incentives to run the stop sign.\n[…]\nA better solution is to randomly remove one stop sign from all directions, which could lead to significant efficiency gains while ensuring safe traffic.\n[…]\nThe following are some older stop sign designs:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sinal_de_stop",
        "situacao": "ok",
        "texto": "Sinal de stop ou sinal de pare (tecnicamente sinal de paragem/parada obrigatória no cruzamento ou entroncamento) é um sinal de trânsito que obriga o condutor a parar o veículo antes de entrar numa interseção rodoviária (cruzamento ou entroncamento), devendo ceder a passagem a todos os veículos que transitem na via em que vai entrar.\n[…]\nNo Canadá, Estados Unidos da América, Reino Unido, África do Sul e outros países anglófonos, assim como na maior parte da Europa, incluindo Portugal, Espanha, França e Alemanha, o sinal apresenta-se com a palavra inglesa \"STOP\". No Brasil, assim como em muitos países da América Latina cuja língua oficial é o espanhol, é utilizada a inscrição \"PARE\". No México e em outros países da América Central, o sinal ostenta o termo \"ALTO\".\n[…]\nIdaho stop",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Irmãos Wright",
      "descricao": "Orville e Wilbur Wright, americanos pioneiros da aviação com o Wright Flyer em 1903."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em dezembro de 1903, o primeiro voo dos irmãos Wright durou cerca de quantos segundos?",
    "resposta": "Doze",
    "distratores": [
      "Três",
      "Cinquenta e nove",
      "Cento e vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wright_Flyer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "The Wright Flyer (also known as the Kitty Hawk, Flyer I or the 1903 Flyer) made the first sustained flight by a manned heavier-than-air powered and controlled aircraft on December 17, 1903. Invented and flown by brothers Orville and Wilbur Wright, it marked the beginning of the pioneer era of aviation.\n[…]\nThe Smithsonian Institution, and primarily its then-secretary Charles Walcott, refused to give credit to the Wright Brothers for the first powered, controlled flight of an aircraft. Instead, they honored the former Smithsonian Secretary Samuel Pierpont Langley, whose 1903 tests of his Aerodrome on the Potomac were not successful. Walcott was a friend of Langley and wanted to see Langley's place in aviation history restored.\n[…]\nThe entry in the 1942 Annual Report of Smithsonian Institution begins with the statement \"It is everywhere acknowledged that the Wright brothers were the first to make sustained flights in a heavier-than-air machine at Kitty Hawk, North Carolina, on December 17, 1903\" and closes with a promise that \"Should Dr. Wright decide to deposit the plane ... it would be given the highest place of honor which it is due\".\n[…]\nThe Los Angeles Section of the American Institute of Aeronautics and Astronautics (AIAA) built a full-scale replica of the 1903 Wright Flyer between 1979 and 1993 using plans from the original Wright Flyer published by the Smithsonian Institution in 1950. Constructed in advance of the 100th anniversary of the Wright Brothers' first flight, the replica was intended for wind tunnel testing to provide a historically accurate aerodynamic database of the Wright Flyer design.\n[…]\nThe Wright Brothers and their airplane have been commemorated on a U.S. Quarter and on several U. S. Postage stamps.\n[…]\nHistory of the Wright Flyer Wright State University Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "O Wright Flyer (também frequentemente referenciado como Flyer I ou 1903 Flyer) foi a primeira aeronave construída pelos Irmãos Wright. Eles voaram com ele por quatro vezes em 17 de Dezembro de 1903, próximo à Kill Devil Hills, Carolina do Norte, cerca de 6,4 km ao Sul de Kitty Hawk, Estados Unidos. Hoje a aeronave está em exibição no Museu do Ar e Espaço em Washington, D.C.\n[…]\nNo seu retorno à Kitty Hawk em 1903, os Wright completaram a montagem do Flyer enquanto praticavam com o planador de 1902. Em 14 de Dezembro eles se sentiram prontos para a primeira tentativa de voo motorizado. Com a ajuda de alguns membros da equipe de salva vidas local, levaram o Flyer e a sua rampa de lançamento para o declive de uma duna próxima (em Kill Devil Hills), com a intenção de fazer uma decolagem facilitada pela gravidade.\n[…]\nO seu primeiro voo durou 12 segundos para uma distância total de 36,5 m - menos que a envergadura de asa de um Boeing 747, como foi comentado em 2003 na comemoração do centenário do primeiro voo.\n[…]\nEm rodízio, os irmãos Wright fizeram quatro voos curtos em baixa altitude naquele dia. A rota dos voos foi essencialmente reta; curvas não foram tentadas. Cada voo terminou num \"pouso\" em forma de queda não intencional. O último voo, conduzido por Wilbur percorreu 260 m em 59 segundos, bem mais que os três primeiros de 36, 53 e 61 m respectivamente. O \"pouso\" do último voo quebrou o profundor frontal, que os irmãos Wright esperavam consertar para um possível voo de 6 km até a vila de Kitty Hawk.\n[…]\nO então secretário da Smithsonian Institution, Charles Walcott, se recusava a dar o crédito desse primeiro voo aos irmãos Wright. Em vez disso, ele concedeu a honra ao secretário anterior (seu amigo) Samuel Langley, que em 1903 testou o seu Langley Aerodrome no rio Potomac sem sucesso.\n[…]\nIrmãos Wright\n[…]\nUnder The Hood of A Wright Flyer  Air & Space Magazine",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "The Knowledge",
      "descricao": "Exame exigido dos motoristas dos táxis pretos de Londres, que precisam decorar milhares de ruas e trajetos da cidade."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Para dirigir os famosos táxis pretos de Londres, é preciso decorar milhares de ruas e passar numa prova lendária. Como ela se chama?",
    "resposta": "The Knowledge",
    "fonte": [
      "https://en.wikipedia.org/wiki/Taxicabs_of_the_United_Kingdom",
      "https://en.wikipedia.org/wiki/Hackney_carriage"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taxicabs_of_the_United_Kingdom",
        "situacao": "ok",
        "texto": "Taxicabs are available throughout the United Kingdom, and are regulated by local authorities.\n[…]\nOnly licensed hackney carriages can pick up passengers on the street and without pre-booking. London's traditional black cabs (so-called, despite now being of various colours and advertising designs) are specially constructed vehicles designed to conform to the standards set out in the Conditions of Fitness. London taxi drivers are licensed and must have passed an extensive training course (the Knowledge). Unlike many other cities, the number of taxicab drivers in London is not limited.\n[…]\nSince 2001 minicabs have been subject to regulation in London and most other local authorities. London minicabs are now licensed by TFL (London Taxis and Private Hire), or TFLTPH, formerly known as the Public Carriage Office.\n[…]\nThis is the same body that now regulates London's licensed taxicabs, but minicab drivers do not have to complete The Knowledge, and although they must undergo a small \"topographical test\" in order to obtain a Private Hire Driver's Licence, they generally rely on satnavs or local knowledge to take them to the pick up and destination.\n[…]\nOutside London, taxis are licensed by the local authority, and in many places are required to be painted a certain colour. Most major cities predominantly use London taxis, again traditionally black but this is not always mandatory. Smaller towns and rural areas allow more varieties of passenger cars, which may require taxis to be painted in a particular livery as a licence condition.\n[…]\nLondon Cab Drivers Club\n[…]\nThe Knowledge (1979 film)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hackney_carriage",
        "situacao": "ok",
        "texto": "A hackney or hackney carriage (also called a cab, black cab, hack or taxi) is a carriage or car for hire. A symbol of London and Britain, the black taxi is a common sight on the streets of London. The hackney carriages carry a roof sign TAXI that can be illuminated to indicate their availability for passengers.\n[…]\nIn London, hackney-carriage drivers have to pass a test called The Knowledge to demonstrate that they have an intimate knowledge of the geography of London streets, important buildings, etc. Elsewhere in the UK, councils have their own regulations. Some merely require a driver to pass a DBS disclosure and have a reasonably clean driving licence, while others use their own local versions of London's The Knowledge test.\n[…]\nBetween 2003 and 1 August 2009 the London taxi model TXII could be purchased in the United States. Today there are approximately 250 TXIIs in the US, operating as taxis in San Francisco, Dallas, Long Beach, Houston, New Orleans, Las Vegas, Newport, Rhode Island, Wilmington, North Carolina and Portland, Oregon. There are also a few operating in Ottawa, Ontario, Canada. The largest London taxi rental fleet in North America is in Wilmington, owned by The British Taxi Company.\n[…]\nSingapore has used London-style cabs since 1992; starting with the \"Fairway\". The flag-down fares for the London Taxis are the same as for other taxis. SMRT Corporation, the sole operator, had by March 2013 replaced its fleet of 15 ageing multi-coloured (gold, pink, etc.) taxis with new white ones. They are the only wheelchair-accessible taxis in Singapore, and were brought back following an outcry after the removal of the service.\n[…]\nTaxis and private hire Transport for London Public Carriage Office\n[…]\nLondon hackney coach regulations, 1819. Genealogy UK Genealogy and Family History."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Demoiselle",
      "descricao": "Pequeno avião monoplano criado por Santos-Dumont entre 1907 e 1909, cujos planos foram divulgados livremente."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Santos Dumont não patenteou seu pequeno monoplano e liberou os planos para quem quisesse construí-lo. Como esse avião ficou conhecido?",
    "resposta": "Demoiselle",
    "fonte": [
      "https://en.wikipedia.org/wiki/Santos-Dumont_Demoiselle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Santos-Dumont_Demoiselle",
        "situacao": "ok",
        "texto": "The Santos-Dumont Demoiselle is a series of aircraft built in France by the Brazilian aviation pioneer Alberto Santos-Dumont. The tiny, quick, primitive airplanes -- the first successful \"sport aircraft\" -- were the first practical light aircraft. The Demoiselles were the most affordable airplane by 1912, and were widely copied across Europe and the United States, a principal force in the developm\n[…]\nThough only 50 official Santos-Dumont Demoiselles were built (and only 15 sold), The Demoiselles were the most affordable airplane by 1912, and Santos-Dumont made the plans freely available to the public, without compensation. Countless copies were made, throughout Europe and the United States, a major force stimulating the development of aviation as a sport.\n[…]\nWidely flown, as were the many copies of them, the Demoiselles were used to achieve many early airplane firsts and records. In France, in 1907, Santos-Dumont made the first airplane flight between two cities (from Saint-Cyr to Buc), setting a record speed of 95 kilometres per hour (59 mph). On September 14, 1909, Santos-Dumont set a recognized speed record of 55 miles per hour (89 km/h), to win a $200 prize.\n[…]\n\"Santos-Dumont 20 'Demoiselle'\". Aviafrance. Retrieved 10 February 2009.\n[…]\nWier, Stuart (5 May 2019). \"Superbly Small: Alberto Santos=Dumont and his Demoiselle Airplanes\" (PDF). westernexplorers.us. westernexplorers.us. Retrieved 27 September 2020.\n[…]\nArthur E. Joerin; Cross. A. M. (June 1910). \"How to Build the Famous \"Demoiselle\" Santos-Dumont's Monoplane\". Popular Mechanics. Vol. 13, no. 3. pp. 775–782.\n[…]\nArthur E. Joerin; Cross. A. M. (July 1910). \"How to Build the Famous \"Demoiselle\" Santos-Dumont's Monoplane\". Popular Mechanics. Vol. 14, no. 1. pp. 39–45.\n[…]\nJames, W. and Fernando Catalano: \"The influence of the Demoiselle aircraft on light and general aviation aircraft design\" (2014), Academia.edu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santos-Dumont_Demoiselle",
        "situacao": "ok",
        "texto": "O Santos-Dumont Demoiselle (em francês: \"Donzela\" ou \"Libélula\") foi uma série de aeronaves leves projetadas e construídas pelo pioneiro da aviação brasileiro Alberto Santos-Dumont. Desenvolvidos entre 1907 e 1909, os Demoiselle são considerados os primeiros ultraleves do mundo e representam um marco na história da aviação por seu design inovador, baixo custo e, crucialmente, por serem as primeira\n[…]\nO Demoiselle foi uma obra-prima de minimalismo e eficiência estrutural. Santos-Dumont aplicou seus conhecimentos de construção de dirigíveis, utilizando materiais leves e resistentes para criar uma fuselagem robusta com o mínimo de peso.\n[…]\nAcelerador: Uma pequena alavanca controlada pelo pé.\n[…]\nA carreira de Santos-Dumont como piloto terminou abruptamente em 4 de janeiro de 1910. Durante o voo inaugural de um novo Demoiselle (provavelmente o Nº 22 com modificações), um dos estais de arame que sustentavam a asa se rompeu em pleno voo. A asa entrou em colapso e o avião caiu de uma altura de quase 30 metros. Milagrosamente, Santos-Dumont sobreviveu com ferimentos leves. O choque do acidente, no entanto, foi profundo. Ele nunca mais pilotou uma aeronave.\n[…]\nA decisão de Santos-Dumont de publicar os planos do Demoiselle teve um impacto imenso. A edição de junho de 1910 da revista americana Popular Mechanics trazia um artigo intitulado \"Como Construir o Famoso 'Demoiselle'\", com desenhos detalhados e instruções. A revista declarava: \"Esta máquina é melhor do que qualquer outra já construída para aqueles que desejam obter resultados com o menor gasto possível e o mínimo de experiência\".\n[…]\nArthur E. Joerin; Cross, A. M. (junho de 1910). «How to Build the Famous \"Demoiselle\" Santos-Dumont's Monoplane». Popular Mechanics. 13 (6). pp. 775–782\n[…]\nArthur E. Joerin; Cross, A. M. (julho de 1910). «How to Build the Famous \"Demoiselle\" Santos-Dumont's Monoplane (Part II)». Popular Mechanics. 14 (1). pp. 39–45",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Air Force One",
      "descricao": "Código de chamada de rádio de qualquer aeronave da Força Aérea dos Estados Unidos que transporte o presidente americano."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Air Force One não é o nome de um avião específico, e sim um código de rádio. Ele indica qualquer avião da Força Aérea americana que esteja levando quem?",
    "resposta": "O presidente dos Estados Unidos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Air_Force_One"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Air_Force_One",
        "situacao": "ok",
        "texto": "Air Force One is the official air traffic control–designated call sign for a United States Air Force aircraft carrying the president of the United States. The term is commonly used to denote U.S. Air Force aircraft modified and used to transport the president, and as a metonym for the primary presidential aircraft, VC-25 or VC-25B, although it can be used to refer to any Air Force aircraft the pre\n[…]\nAfter announcing his intention to resign the presidency, Nixon boarded SAM 27000 (with call sign \"Air Force One\") to travel to California. Colonel Ralph Albertazzie, then pilot of Air Force One, recounted that after Gerald Ford was sworn in as president, the plane had to be redesignated as SAM 27000, indicating no president was on board the aircraft. Over Jefferson City, Missouri, Albertazzie radioed: \"Kansas City, this was Air Force One.\n[…]\nLater, Tillman received a warning of an imminent attack on Air Force One. \"We got word from the vice president and the staff that 'Angel was next,' indicating the classified call sign for Air Force One. Once we got into the Gulf [of Mexico] and they passed to us that 'Angel was next,' at that point I asked for fighter support.\n[…]\nOn 1 May 2026, the Air Force announced that N7478D, now the VC-25B Bridge aircraft, had completed modifications by L3Harris and finished flight testing. The aircraft was painted in Trump's preferred red, white, blue with gold stripe livery and waved American flag tailfin was delivered to the Presidential Airlift Group in summer 2026. On 19 June 2026, the new aircraft was officially unveiled at Joint Base Andrews.\n[…]\nVice presidents have used a VC-25 on longer trips, using the Air Force Two call sign.\n[…]\nVC-137B SAM 970, used from 1959 to 1962 as Air Force One and until 1996 in the presidential fleet, is on display at The Museum of Flight in Seattle, Washington.\n[…]\nNavy One – US Navy aircraft carrying the US president"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/For%C3%A7a_A%C3%A9rea_Um",
        "situacao": "ok",
        "texto": "O Força Aérea Um (Air Force One) é o indicativo de chamada oficial para controle de tráfego aéreo que a Força Aérea dos Estados Unidos utiliza para referenciar qualquer avião que carregue o Presidente dos Estados Unidos. Na linguagem comum, o termo é aplicado ao avião da força aérea modificado para serviço especial do presidente, que ele utiliza como transporte oficial. Tais aeronaves são símbolos\n[…]\nA ideia de designar uma aeronave militar específica para transportar o Presidente aconteceu após o voo do Boeing 314 Dixie Clipper em 1943, quando oficiais da Forças Aéreas do Exército dos Estados Unidos passaram a se preocupar com a ideia do presidente continuar usando companhias aéreas comerciais para viagens oficiais.\n[…]\nRoosevelt até a Conferência de Yalta em fevereiro de 1945 e permaneceu em serviço por mais dois anos, também transportando o presidente Harry S. Truman.\n[…]\nO indicativo de chamada Air Force One foi criado em 1953, após o Lockheed Constellation, apelidado de Columbine II, que carregava o presidente Dwight D. Eisenhower entrar num espaço aéreo onde um avião comercial também utilizava o mesmo número de voo. Desde então, o governo dos Estados Unidos determinou que apenas o avião que carrega o presidente pode ter esse indicativo de chamada.\n[…]\nNo decorrer dos anos, os presidentes dos Estados Unidos foram adquirindo mais aeronaves, mais modernas, com maior autonomia de voo e mais segurança. Entre os modelos que carregaram os Chefes de Estado americanos estão o Lockheed Constellation, Columbine III e dois Boeing 707s, introduzidos entre as décadas de 1960 e 70. Desde 1990, a frota presidencial conta com dois Boeing VC-25As, baseados no Boeing 747-200B.\n[…]\nAtualmente, a força aérea dos Estados Unidos encomendou duas aeronaves Boeing 747-8 para substituir o VC-25 como o novo Air Force One.\n[…]\nAir Force Two\n[…]\nCarro Presidencial dos Estados Unidos",
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
