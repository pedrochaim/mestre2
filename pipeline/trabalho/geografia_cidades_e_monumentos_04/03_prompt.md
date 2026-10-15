Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Cidades e Monumentos** (tema **Geografia**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Coliseu",
      "descricao": "Anfiteatro romano do século um, no centro de Roma, também chamado Anfiteatro Flaviano."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Coliseu vem de uma estátua colossal de bronze que ficava ao lado do anfiteatro, em Roma. Originalmente, ela retratava qual imperador?",
    "resposta": "Nero",
    "fonte": [
      "https://en.wikipedia.org/wiki/Colosseum",
      "https://en.wikipedia.org/wiki/Colossus_of_Nero"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Colosseum",
        "situacao": "ok",
        "texto": "The Colosseum ( KOL-ə-SEE-əm; Italian: Colosseo [kolosˈsɛːo]) is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is the largest standing amphitheatre in the world. Construction began under the Emperor Vespasian (r. 69–79 AD) in 72 and was completed in AD 80 under his successor and heir, Titus \n[…]\nThe name Colosseum is believed to be derived from a colossal statue of Nero on the model of the Colossus of Rhodes. The giant bronze sculpture of Nero as a solar deity was moved to its position beside the amphitheatre by the emperor Hadrian (r. 117–138). The word colosseum is a neuter Latin noun formed from the adjective colosseus, meaning \"gigantic\" or \"colossean\". By the year 1000 the Latin name \"Colosseum\" had been coined to refer to the amphitheatre from the nearby \"Colossus Solis\".\n[…]\nHe built the grandiose Domus Aurea on the site, in front of which he created an artificial lake surrounded by pavilions, gardens and porticoes. The existing Aqua Claudia aqueduct was extended to supply water to the area and the gigantic bronze Colossus of Nero was set up nearby at the entrance to the Domus Aurea.\n[…]\nAlthough the Colossus was preserved, much of the Domus Aurea was torn down. The lake was filled in and the land reused as the location for the new Flavian Amphitheatre. Gladiatorial schools and other support buildings were constructed nearby within the former grounds of the Domus Aurea. Vespasian's decision to build the Colosseum on the site of Nero's lake can be seen as a populist gesture of returning to the people an area of the city which Nero had appropriated for his own use.\n[…]\nThe Los Angeles Memorial Coliseum entrance was inspired by the Colosseum.\n[…]\nNero Burning ROM's logo is inspired by the colosseum.\n[…]\n3D model of the past and present of the colosseum – The Only Progress is Human"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Colossus_of_Nero",
        "situacao": "ok",
        "texto": "The Colossus of Nero (Colossus Neronis) was a 30-metre (98 ft) bronze statue that the Emperor Nero (37–68 AD) created in the vestibule of his Domus Aurea, the imperial villa complex which spanned a large area from the north side of the Palatine Hill, across the Velian ridge to the Esquiline Hill in Rome. It was modified by Nero's successors into a statue of the sun god Sol.\n[…]\nThe statue was eventually moved to a spot outside the Flavian Amphitheatre, which (according to one of the more popular theories) became known, by its proximity to the Colossus, as the Colosseum.\n[…]\nShortly after Nero's death in AD 68, the Emperor Vespasian added a radiate crown and renamed it Colossus Solis, after the Roman sun god Sol. Around 128, Emperor Hadrian ordered the statue moved from the Domus Aurea to just northwest of the Colosseum in order to create space for the Temple of Venus and Roma. It was moved by the architect Decriannus with the use of 24 elephants.\n[…]\nThe last certain mention from antiquity of the statue is the reference in the Chronography of 354. Today, nothing remains of the Colossus of Nero save for the foundations of the pedestal at its second location near the Colosseum. It was possibly destroyed during the Sack of Rome in 410, or toppled in one of a series of fifth-century earthquakes, and its metal scavenged.\n[…]\nThe name of the Roman amphitheatre, the Colosseum, is derived from this statue.\n[…]\nThis is often mistranslated to refer to the Colosseum rather than the Colossus (as in, for instance, Byron's poem Childe Harold's Pilgrimage). However, at the time that Bede wrote, the masculine noun coliseus was applied to the statue rather than to what was still known as the Amphitheatre."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coliseu",
        "situacao": "ok",
        "texto": "Coliseu (em italiano:  Colosseo), também conhecido como Anfiteatro Flaviano (em latim: Amphitheatrum Flavium; em italiano:  Anfiteatro Flavio), é um anfiteatro oval localizado no centro da cidade de Roma, capital da Itália. Construído com tijolos revestidos de argamassa e areia, e originalmente cobertos com travertino é o maior anfiteatro já construído e está situado a leste do Fórum Romano.\n[…]\nO nome original do Coliseu de Roma era Anfiteatro Flávio ou Flaviano (em latim, Amphitheatrum Flavium), tendo sido construído no reinado dos imperadores da Dinastia Flaviana, após o governo do imperador Nero. Curiosamente, este nome não foi exclusivo do Coliseu, visto que Vespasiano e Tito haviam construído um anfiteatro que portou o mesmo nome, na cidade de Pozzuoli, na província de Nápoles.\n[…]\nO nome Anfiteatro Flavio é empregado ainda hoje, embora seja mais popularmente conhecido como Coliseu de Roma.\n[…]\nA sua designação de \"Coliseu\" começou a difundir-se a partir do século VIII, o qual se crê que tenha sido devido a uma grande estátua de Nero, que se encontrava perto do edifício, na Casa Dourada, conhecida popularmente como o Colosso de Nero. Este fato pode ter sido a razão pela qual o anfiteatro de Roma tenha adoptado o nome de Coliseu. Essa dita estátua foi destruída provavelmente para reciclagem do seu bronze.\n[…]\nA construção começou sob ordem de Vespasiano numa área que se encontrava no fundo de um vale entre as colinas de Célio, Esquilino e Palatino. O lugar fora devastado pelo Grande incêndio de Roma do ano 64, durante a época de governo do imperador Nero, e mais tarde havia sido reurbanizado para o prazer pessoal do imperador com a construção de um enorme lago artificial, da Casa Dourada (em latim: Domus Aurea), situada num complexo de uma villa, e de uma colossal estátua de si mesmo.\n[…]\nRoma Antiga\n[…]\nJogos inaugurais do Coliseu\n[…]\nTour virtual do Coliseu\n[…]\nEstrutura do Coliseu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Wall Street",
      "descricao": "Rua do sul de Manhattan, em Nova York, sede da Bolsa de Valores e símbolo do mercado financeiro americano."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Wall Street, a rua do mercado financeiro de Nova York, deve o nome a qual construção erguida pelos colonos holandeses no século dezessete?",
    "resposta": "Um muro de proteção",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wall_Street"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wall_Street",
        "situacao": "ok",
        "texto": "Wall Street is a street in the Financial District of Lower Manhattan in New York City. It runs eight city blocks between Broadway in the west and South Street and the East River in the east with a length of just under 2,000 feet. The term \"Wall Street\" has become a metonym for New York Stock Exchange (NYSE), the financial markets of the United States, American financial services industry, New York\n[…]\nAnchored by Wall Street, New York has been described as the world's principal fintech and financial center.\n[…]\nAt the same time, the investment community was worried about proposed legal reforms, including the Wall Street Reform and Consumer Protection Act which dealt with matters such as credit card rates and lending requirements. The NYSE closed two of its trading floors in a move towards transforming itself into an electronic exchange. Beginning in September 2011, the Occupy Wall Street movement, disenchanted with the financial system, protested in parks and plazas around Wall Street.\n[…]\nAfter Wall Street firms started to expand westward in the 1980s into New Jersey, the direct economic impacts of Wall Street activities have gone beyond New York City. The employment in the financial services industry, mostly in the \"back office\" roles, has become an important part of New Jersey's economy. In 2009, the Wall Street employment wages were paid in the amount of almost $18.5 billion in the state.\n[…]\nThe term \"Wall Street\" has become a metonym for the financial markets of the United States as a whole, the American financial services industry, or New York–based financial interests. Wall Street has become synonymous with financial interests, often used negatively. During the subprime mortgage crisis from 2007 to 2010, Wall Street financing was blamed as one of the causes, although most commentators blame an interplay of factors. The U.S.\n[…]\nNew York Songlines: Wall Street, a virtual walking tour"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wall_Street",
        "situacao": "ok",
        "texto": "A Wall Street (em tradução livre para o português: Rua da Parede) é uma rua que corre na região inferior de Manhattan, e é considerada o coração histórico do atual Distrito Financeiro da cidade de Nova Iorque, onde se localiza a bolsa de valores da cidade.\n[…]\nCom o tempo, o termo se tornou uma metonímia para o sistema do mercado financeiro dos Estados Unidos como um todo, mesmo quando não se refere diretamente a Wall Street de Nova Iorque.\n[…]\nNo fim do século XVIII, os intermediários financeiros e especulatórios se encontraram para negociar informalmente junto a um plátano de Wall Street. Esta foi a origem do mercado conservado em estoque do comércio de Nova Iorque.\n[…]\nWall Street compreende atualmente o mais importante centro comercial e financeiro do mundo. Em suas famosas calçadas circulam diariamente representantes de grandes empresas no mundo inteiro. Até mesmo o comércio local é voltado inteiramente a esses milhares de negociantes e empresários de renome internacional. Wall Street também é vista por muitos como um lugar onde os conceitos tradicionalistas estão enraizados.\n[…]\nA arquitetura dos edifícios de Wall Street está, no geral, enraizada na Idade Dourada, mas há alguns prédios sob influência da Art Deco. Entre os marcantes edifícios no Wall Street estão o Federal Hall, o The Trump Building, o 14 Wall Street e o prédio da New York Stock Exchange.\n[…]\nEm Wall Street também se encontra a sede de importantes grupos empresariais e financeiros. Alguns ganharam sua fama por suas estratégias de investimento, financiamento e comércios.\n[…]\nBay Street\n[…]\nEconomia da cidade de Nova Iorque\n[…]\nO Famoso Mercado de Wall Street",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Machu Picchu",
      "descricao": "Cidadela inca do século quinze no alto dos Andes, perto de Cusco, no Peru."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na língua quíchua, falada nos Andes, o que significa o nome da cidadela inca de Machu Picchu?",
    "resposta": "Montanha velha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Machu_Picchu",
      "https://pt.wikipedia.org/wiki/Machu_Picchu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Machu_Picchu",
        "situacao": "ok",
        "texto": "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern  Peru  on a mountain ridge at  2,430 meters (7,970 ft). It is situated in the Machupicchu District of Urubamba Province about 80 kilometers (50 miles) northwest of Cusco, above the Sacred Valley and along the Urubamba River, which forms a deep canyon with a subtropical mountain climate.\n[…]\nBetween the valley floor and the altitudinal zone of the Inca citadel, ranging from 2,200 metres (7,200 ft) to 2,500 metres (8,200 ft) meters above sea level, Machu Picchu features a subtropical highland climate, with an average annual precipitation of 2,010 millimetres (79 in) and an annual mean temperature of approximately 18 °C (64 °F). The site is characterized by steep slopes, dense vegetation, and significant rainfall, contributing to high humidity levels of 80–90%.\n[…]\nArchitecturally, Inti Mach'ay is often considered to be one of the most significant structures at Machu Picchu. Its entrances, walls, steps, and windows display some of the finest masonry in the Inca Empire. The cave also includes a tunnel-like window unique among Incan structures, designed so that sunlight enters the interior only for a few days around the December solstice.\n[…]\nThe trail begins at either Piscacucho (Km 82 on the railway to Aguas Calientes) or Q'oriwayrachina (Km 104), and, depending on the starting point, spans up to approximately 42.5 kilometres (26.4 mi), reaching an altitude of 4,200 metres (13,800 ft) at Warmi Wañusqa. It passes through the Andes and various archaeological sites before reaching the Inti Punku at Machu Picchu. Due to limited permits, booking through a tourism agency is required.\n[…]\nUNESCO – Machu Picchu (World Heritage)\n[…]\nPlants and animals in Machu Picchu Archived 4 November 2023 at the Wayback Machine\n[…]\nFirst photographs of Hiram Bingham in Machu Picchu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Machu_Picchu",
        "situacao": "ok",
        "texto": "Machu Picchu  é uma cidadela inca do século XV localizada na Cordilheira Oriental do sul do Peru, em uma crista montanhosa a 2.430 metros de altura. Está situado no distrito de Machupicchu, na província de Urubamba, cerca de 80 quilômetros a noroeste de Cusco, acima do Vale Sagrado e ao longo do rio Urubamba, que forma um cânion profundo com um clima subtropical de montanha.\n[…]\nO nome inca original do local pode ter sido Huayna Picchu, em homenagem à montanha onde parte do complexo se encontra.\n[…]\nO sítio arqueológico fica em uma estreita passagem entre dois picos de montanha, Machu Picchu e Huayna Picchu. Em quéchua, machu significa 'velho' ou 'pessoa idosa' e wayna (escrito huayna (na ortografia espanhola padrão) significa 'jovem', enquanto pikchu refere-se a um 'cume', 'pico' ou 'pirâmide'. Assim, o nome do local é frequentemente traduzido como 'montanha velha' ou 'pico velho'.\n[…]\nMachu Picchu situa-se no Hemisfério Sul, a 13,111 graus a sul do equador. Fica 80 quilômetros a noroeste de Cusco, no cume da montanha Machu Picchu, localizada a cerca de 2.430 metros acima do nível médio do mar, mais de 1.000 metros de altitude mais baixo que Cusco, que tem uma altitude de 3.400 metros. Como tal, tinha um clima mais ameno do que a capital inca.\n[…]\nA cidade situa-se numa sela entre as duas montanhas, Machu Picchu e Huayna Picchu, com vista para dois vales e uma montanha quase intransponível atrás dela. O leito rochoso é predominantemente de granito, com ocorrências menores de granodiorito, além de diques locais de peridotito e serpentina. Os terraços agrícolas, que cobrem cerca de 4,9 hectares (12 acres), complementavam a arquitetura do local e protegiam contra o escoamento superficial e a erosão.\n[…]\n«Imagens panorâmicas da cidade inca, em vistas de 360 graus - MachuPicchu360.com» (em espanhol) ."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Santa Sofia",
      "descricao": "Antiga basílica bizantina do século seis em Istambul, depois mesquita, também chamada Hagia Sophia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome grego da antiga basílica de Santa Sofia, em Istambul, não se refere a uma pessoa. O que ele quer dizer?",
    "resposta": "Sabedoria Divina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hagia_Sophia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hagia_Sophia",
        "situacao": "ok",
        "texto": "Hagia Sophia, officially the Hagia Sophia Grand Mosque, is a mosque and a major cultural and historical site in Istanbul, Turkey. It was formerly a church (360–1453) and a museum (1935–2020). The last of three church buildings to be successively erected on the site by the Eastern Roman Empire, it was completed in AD 537, becoming the world's largest interior space and among the first to employ a f\n[…]\nThe pendentives are the corners of the square base of the dome, and they curve upwards into the dome to support it, thus restraining the lateral forces of the dome and allowing its weight to flow downwards. The main dome of the Hagia Sophia was the largest pendentive dome in the world until the completion of St Peter's Basilica, and it has a much lower height than any other dome of such a large diameter.\n[…]\nThe Catedral Metropolitana Ortodoxa in São Paulo and the Église du Saint-Esprit (Paris) both replace the two large tympanums beneath the main dome with two shallow semi-domes. Several churches combine elements of the Hagia Sophia with a Latin cross plan. For instance, the transept of the Cathedral Basilica of Saint Louis (St. Louis) is formed by two semi-domes surrounding the main dome. The church's column capitals and mosaics emulate the style of the Hagia Sophia.\n[…]\nOther examples include the Alexander Nevsky Cathedral, Sofia, St Sophia's Cathedral, London, Saint Clement Catholic Church, Chicago, and the Basilica of the National Shrine of the Immaculate Conception. Several mosques commissioned by the Ottoman dynasty have plans based on the Hagia Sophia, including the Süleymaniye Mosque and the Bayezid II Mosque.\n[…]\nGigapixel of Hagia Sophia Dome (214 Billion Pixel)\n[…]\nHagia Sophia Museum, Republic of Turkey, Ministry of Culture & Tourism\n[…]\nThe Most Visited Museums of Turkey: Hagia Sophia Museum, Governorship of Istanbul Archived 8 December 2024 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santa_Sofia",
        "situacao": "ok",
        "texto": "Santa Sofia (em grego: Άγια Σοφία; romaniz.: Agia Sophia, que significa \"Sagrada Sabedoria\"; em turco: Ayasofya), oficialmente Grande Mesquita de Santa Sofia (em turco:  Ayasofya-i Kebir Cami-i Şerifi), é um imponente edifício construído entre 532 e 537 pelo Império Bizantino para ser a catedral de Constantinopla (atualmente Istambul, na Turquia).\n[…]\nEmbora ela seja chamada de \"Santa Sofia\" (como se tivesse sido dedicada em homenagem a Santa Sofia), sophia é a transliteração fonética em latim da palavra grega para \"sabedoria\" — o nome completo da igreja em grego é Ναός της Αγίας του Θεού Σοφίας, \"Igreja da Santa Sabedoria de Deus\".\n[…]\nA segunda igreja foi encomendada por Teodósio II, que a inaugurou em 10 de outubro de 415. A basílica com teto de madeira foi construída pelo arquiteto Rufino. Um incêndio iniciado durante a Revolta de Nica destruiu completamente a segunda Santa Sofia em 13-14 de janeiro de 532.\n[…]\nDiversos blocos de mármore da segunda igreja ainda existem. Num deles está um alto-relevo mostrando 12 cordeiros representando os doze apóstolos. Originalmente parte de uma entrada monumental, eles agora estão preservados nas escavações ao lado da entrada do museu. Estes fragmentos foram descobertos em 1935 abaixo do pátio ocidental por A. M. Schneider, que não pôde continuar com as escavações por medo de comprometer a integridade da Basílica de Santa Sofia.\n[…]\nDurante o Império Latino (1204–1261), a cidade foi ocupada e a basílica se transformou numa catedral da Igreja Católica Romana. Balduíno I foi coroado imperador em 16 de maio de 1204 em Santa Sofia, numa cerimônia muito parecida com o ritual bizantino.\n[…]\nA natureza única do projeto de Santa Sofia faz desta estrutura um dos monumentos mais avançados e ambiciosos construídos na Antiguidade Tardia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Flatiron Building",
      "descricao": "Arranha-céu triangular de 1902 na esquina da Quinta Avenida com a Broadway, em Nova York."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por causa do formato triangular, o Flatiron Building, em Nova York, ganhou o apelido de qual objeto doméstico?",
    "resposta": "Ferro de passar roupa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flatiron_Building"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flatiron_Building",
        "situacao": "ok",
        "texto": "The Flatiron Building (originally the Fuller Building) is a 22-story, 307-foot-tall (93.6 m) steel-framed triangular building at 175 Fifth Avenue in the Flatiron District neighborhood of Manhattan in New York City, New York, US. Designed by Daniel Burnham and Frederick P. Dinkelberg, it opened in 1902.\n[…]\nThe New York Herald published an image of the site on June 2, 1901, with the caption \"Flatiron Building\". The project's structural engineer, Corydon Purdy, filed plans for a 20-story building on the site that August. The Flatiron Building was not the first building of its triangular ground-plan, although it was the largest at the time of its completion.\n[…]\nOfficials of the Fuller Company announced in August 1902 that the structure would be officially named after George A. Fuller, founder of the Fuller Company and \"father of the skyscraper\", who had died two years earlier. By then, the site had been known as the \"flatiron\" for several years; according to Christopher Gray of The New York Times, Burnham's and Fuller's architectural drawings even labeled the structure as the \"Flatiron Building\".\n[…]\nAlthough the Fuller name was used for some time after the building's completion, locals persisted in calling it the Flatiron, to the displeasure of Harry Black and the building's contractors. In subsequent years, the edifice officially came to be known as the Flatiron Building, and the Fuller name was transferred to a newer 40-story structure at 597 Madison Avenue.\n[…]\n\"The Flatiron Building, New York\". Engineering Record, Building Record and Sanitary Engineer. Vol. 45, no. 13. McGraw Publishing Company. March 29, 1902.\n[…]\nBuilding Owner: GFP Real Estate\n[…]\nBuilding Owner: Sorgente Group\n[…]\n\"Travel New York – The Triangular Flatiron Building in New York City\" (Video). September 20, 2010 – via YouTube."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Flatiron_Building",
        "situacao": "ok",
        "texto": "O Flatiron Building, originalmente Fuller Building, foi um dos primeiros arranha-céus construídos em Nova Iorque, Estados Unidos, e tem esse nome por ter a forma semelhante de um ferro de passar roupas. Foi inaugurado em 1902, e está localizado entre a Fifth Avenue, a Broadway e a 23rd Street. Possui 87 metros de altura e 22 andares. Quando inaugurado, foi um dos prédios mais altos do mundo. O bai\n[…]\nFoi designado, em 20 de novembro de 1979, um edifício do Registro Nacional de Lugares Históricos bem como, em 29 de junho de 1989, um Marco Histórico Nacional.\n[…]\nO Flatiron Building foi desenhado pelo arquiteto e urbanista Daniel Burnham no estilo Beaux-Arts. Como uma coluna grega clássica, a sua fachada de calcário e terracota é dividida em base, fuste e capitel. Esboços primitivos feitos por Burnham mostram um projeto com um (não executado) mostrador de relógio e uma coroa bem mais elaborada do que no edifício atual.\n[…]\nO Flatiron Building não foi o primeiro edifício do seu tipo: exemplos proeminentes incluem o Edifício Gooderham de Toronto, construído em 1892 e o English-American Building em 1897 na cidade de Atlanta, embora estes sejam menores do que sua contraparte em Nova York.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "30 St Mary Axe",
      "descricao": "Arranha-céu arredondado de vidro no centro financeiro de Londres, projetado por Norman Foster e inaugurado em 2004."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os londrinos apelidaram de Gherkin o arranha-céu arredondado de vidro do número 30 da rua St Mary Axe. O que significa gherkin?",
    "resposta": "Pepino em conserva",
    "fonte": [
      "https://en.wikipedia.org/wiki/30_St_Mary_Axe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/30_St_Mary_Axe",
        "situacao": "ok",
        "texto": "30 St Mary Axe, previously known as the Swiss Re Building, is a commercial skyscraper in London's primary financial district, the City of London. It is nicknamed The Gherkin after the vegetable of the same name due to its shape. It was completed in December 2003 and opened in April 2004.\n[…]\nThe Gherkin nickname was applied to the current building at least as early as 1999, referring to the plan's highly unorthodox layout and appearance.\n[…]\nEnglish Heritage then discovered that the damage was far more severe than initially thought, and they stopped insisting on full restoration, albeit over the objections of architectural conservationists. The Baltic Exchange and the Chamber of Shipping sold the land to Trafalgar House in 1995.\n[…]\nThe building was constructed by Skanska, completed in December 2003 and opened on 28 April 2004. The main tenant of the building is Swiss Re, who had the building commissioned as the head office for its UK operation. The tower is thus sometimes known as the Swiss Re Building, although this name has never been official and was never in popular usage anyway, unlike the Gherkin moniker.\n[…]\nIn the construction process of 30 St Mary Axe, a skeleton of a teenage girl was unearthed and dated as roughly 1600 years old. To prevent damaging it throughout the construction process, it was stored in the Museum of London. In 2006, three years after the completion of the building, she was returned to and reburied on the site. Her tomb is visible and marked with an inscription in both Latin and English:\n[…]\nList of tallest buildings and structures in London\n[…]\nPhallic architecture, a list of similarly shaped buildings that includes 30 St Mary Axe"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/30_St_Mary_Axe",
        "situacao": "ok",
        "texto": "30 St Mary Axe, informalmente conhecido como The Gherkin (em inglês: \"O Pepino\"), é um arranha-céu comercial localizado na Cidade de Londres, principal distrito financeiro londrino. Foi concluído em dezembro de 2003 e inaugurado em abril de 2004.\n[…]\nDepois do abandono do projeto Millenium Tower, de 92 andares, o 30 St Mary Axe foi desenhado por Norman Foster e pelo Grupo Arup, foi erguido pela construtora Skanska, com o início das obras em 2001.\n[…]\nO edifício fica nas antigas instalações do Baltic Exchange (24-28 St Mary Axe), a sede de uma empresa de construção naval e frete, e Chamber of Shipping (30-32 St Mary Axe). Em 10 de Abril de 1992, o Exército Republicano Irlandês Provisório, detonou uma bomba próxima ao Baltic Exchange, provocando grandes danos nos arredores.\n[…]\nApós descobrirem que o dano causado era muito mais grave que o imaginado, foram encerrados os planos na restauração completa, ainda que sobre as objeções de conservacionistas arquitetônicos que preferiam a reconstrução. O Baltic Exchange e Chamber of Shipping venderam os lotes de terreno para um antigo conglomerado britânico em 1995.\n[…]\nO apelido \"gherkin\", referente a um tipo de picles de pepino, surgiu pelo menos em 1999, referindo-se à arquitetura não-ortodoxa do projeto.\n[…]\nNo nível superior do edifício (40.º andar), há um bar para os inquilinos e seus convidados, apresentando vista panorâmica de Londres. Um restaurante funciona no 39.º andar e salas de jantar privadas no 38.ª andar. Enquanto a maioria dos edifícios tem um número vasto de elevadores até o último andar, isso não foi possível para o 30 St Mary Axe, uma vez que um bar tinha sido previsto para o 40.º andar.\n[…]\nMedia relacionados com 30 St Mary Axe no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Checkpoint Charlie",
      "descricao": "Posto de fronteira entre Berlim Oriental e Berlim Ocidental durante a Guerra Fria, hoje ponto turístico."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na Berlim dividida, o posto de fronteira Checkpoint Charlie tinha esse nome por corresponder a qual letra do alfabeto fonético militar?",
    "resposta": "A letra C",
    "fonte": [
      "https://en.wikipedia.org/wiki/Checkpoint_Charlie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Checkpoint_Charlie",
        "situacao": "ok",
        "texto": "Checkpoint Charlie (or \"Checkpoint C\") was the Western Bloc's name for the best-known Berlin Wall crossing point between East Berlin and West Berlin during the Cold War (1947–1991), becoming a symbol of the Cold War, representing the separation of East and West.\n[…]\nThe museum is operated by the Arbeitsgemeinschaft 13. August e. V., a registered association founded by Dr. Rainer Hildebrandt. The director is Alexandra Hildebrandt, the founder's widow. The museum is housed in part in the \"House at Checkpoint Charlie\" building by architect Peter Eisenman.\n[…]\nWith 850,000 visitors in 2007, the Checkpoint Charlie Museum is one of the most visited museums in Berlin and in Germany.\n[…]\nAt the border crossing from Hyder in Alaska, USA to Stewart in British Columbia, Canada, there is a humorous imitation of the Checkpoint Charlie sign with the inscription \"You are leaving the American Sector\" in English, French, and German, as well as a sign reading \"Eastern Sektor\", as Stewart is located east of Hyder. Hyder is the only place in the USA that can be legally entered without any border control.\n[…]\nDuring the 1950s and 1960s the Portas do Cerco was also referred to as Far Eastern Checkpoint Charlie with a major border incident happening in 1952 with Portuguese African Troops exchanging fire with Chinese Communist border guards. According to reports, the exchange lasted for one and three quarter hours leaving one dead and several dozens injured on the Macau side and more than 100 casualties claimed on the Communist Chinese side.\n[…]\nMedia related to Checkpoint Charlie at Wikimedia Commons\n[…]\nMuseum Haus am Checkpoint Charlie\n[…]\nThe Rise and Fall of the Berlin Wall: Checkpoint Charlie at Imperial War Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Checkpoint_Charlie",
        "situacao": "ok",
        "texto": "Checkpoint Charlie foi um posto militar entre a Alemanha Ocidental e a Alemanha Oriental durante a Guerra Fria. Havia dois outros postos militares localizados na direção ocidental da auto-estrada (Autobahn) onde se localizava o Checkpoint Charlie: o Checkpoint Alpha, em Helmstedt, e o Checkpoint Bravo em Dreilinden, no sudoeste de Wannsee, cada nome indicando uma letra do alfabeto (Alpha a letra A\n[…]\nHavia muitos outros postos militares em Berlim. Alguns foram entregues para moradores da parte ocidental.\n[…]\nO Checkpoint Charlie foi assim denominado pelos Aliados e projetado como um simples posto militar para passagem de estrangeiros e membros das Forças Aliadas na Alemanha Ocidental para a Alemanha Oriental. Os membros das forças Aliadas não tinham permissão para utilizar outra passagem designada para estrangeiros, como a estação de trem Friedrichstraße. Checkpoint Charlie se localiza entre 2 bares famosos. Os Soviéticos simplesmente o chamavam de Posto de Passagem de Friedrichstraße.\n[…]\n[carece de fontes]?. Os Alemães Orientais referiam ao Checkpoint Charlie oficialmente como Grenzübergangsstelle (\"Posto de Passagem da Fronteira\") Friedrich-/Zimmerstraße.\n[…]\nO Checkpoint Charlie se tornou um símbolo da Guerra Fria, representando a separação do leste e oeste, e — para alguns alemães orientais — uma estrada para a liberdade. É frequentemente exibida em filmes e livros de espiões, como os escritos por John le Carré.\n[…]\nUm famoso café e ponto de observação dos oficiais aliados, forças armadas e outros visitantes, o Cafe Adler (\"Cafe Águia\"), está situado exatamente no checkpoint. Era um excelente ponto de observação da Berlim Oriental, enquanto se degustava algo para beber ou comer.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Cairo",
      "descricao": "Capital do Egito, às margens do rio Nilo, fundada no século dez pela dinastia fatímida."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Fundada no século dez à beira do Nilo, a cidade do Cairo tem um nome árabe que significa o quê?",
    "resposta": "A Vitoriosa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cairo",
      "https://pt.wikipedia.org/wiki/Cairo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cairo",
        "situacao": "ok",
        "texto": "Cairo is the capital and largest city of Egypt and the Cairo Governorate. It is home to more than 9.8 million people. The city is also part of the largest urban agglomeration in Africa, the Arab world, and the Middle East. The Greater Cairo metropolitan area is one of the largest in the world by population with over 22 million people. Areas of what would become Cairo were inhabited from pre-dynast\n[…]\nAl-Qahira al-Gadida (New Cairo, three qisms, under jurisdiction of NUCA)\n[…]\nWasat al-Qahira (Central Cairo, incl. Al-Darb al-Ahmar, al-Gamaliyya qisms)\n[…]\nGharb al-Qahira (West Cairo, incl. Zamalek qism, Qasr al-Nil qism incl. Garden City and part of Down Town)\n[…]\nThe majority of Egypt and Cairo's population is Sunni Muslim. A significant Christian minority exists, among whom Coptic Orthodox are the majority. Precise numbers for each religious community in Egypt are not available and estimates vary.\n[…]\nThe current bridge was completed in 1933 in an Art Deco style, replacing an earlier 19th-century bridge whose four colossal bronze lion statues were preserved and reinstalled on the current bridge. Groppi Ice Cream Shop, located in Talaat Harb Square, was founded in 1909, one of Cairo's oldest ice cream parlours. Café Riche, opened in 1908, has been a meeting place for intellectuals and revolutionaries, witnessing significant events throughout the 20th century.\n[…]\nThe settlement that was formally named Cairo (Arabic: al-Qahira) was founded to the northeast of Fustat in 959 AD by the victorious Fatimid army. The Fatimids built it as a separate palatial city which contained their palaces and institutions of government. It was enclosed by a circuit of walls, which were rebuilt in stone in the late 11th century AD by the vizier Badr al-Gamali, parts of which survive today at Bab Zuwayla in the south and Bab al-Futuh and Bab al-Nasr in the north.\n[…]\nGeographic data related to Cairo at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cairo",
        "situacao": "ok",
        "texto": "Cairo (em árabe: القاهرة; romaniz.: al-Qāhirah, pronunciado em árabe egípcio: [elqɑ(ː)ˈheɾɑ], literalmente: \"conquistador\" ou \"vencedor\"; em copta: Ⲕⲁϩⲓⲣⲏ) é a capital do Egito e da província homônima. É a maior cidade do mundo árabe e da África. Os egípcios a denominam muitas vezes, simplesmente, com o nome do país no idioma local: Miṣr (مصر), em árabe clássico; e Miṣr, em árabe egípcio. Cairo es\n[…]\nA cidade foi fundada no ano 969 por Jauar, o Siciliano, do califado Fatímida. Antes de sua fundação, Fostate era a capital do país. O nome da cidade deve-se aos fatímidas, que batizaram-na com o nome de Cairo. Depois de diversas invasões, como a dos mamelucos, dos otomanos, de Napoleão e dos britânicos, Cairo se converteu em capital soberana em 1922. A cidade foi conquistada em 1517 pelo Império Otomano. Entre 1798 e 1801, foi ocupada pelos franceses. É a sede da Liga Árabe.\n[…]\nA cidade foi fundada em 969 como residência real dos califas fatímidas, porém a capital administrativa e econômica era Fostate. Depois da destruição de Fostate em 1168/1169 para evitar sua captura pelos cruzados, a capital administrativa do Egito foi transferida para o Cairo, onde tem permanecido desde então.\n[…]\nDesde abril até agosto, o Cairo regista temperaturas muito altas, subindo a valores de temperatura máxima de 36-37 °C, que caem durante a noite até 22-23 °C.\n[…]\nEm 2018 a cidade do Cairo tinha cerca de 9,5 milhões de habitantes e a área metropolitana tinha aproximadamente 20,5 milhões de habitantes. É a maior metrópole da África.\n[…]\nA cidade tem estatuto de estado, muhafazah, com um governador à frente que é nomeado pelo Presidente do Egito. Cairo é o centro político, econômico e cultural do Egito e do Oriente Próximo. É a sede do governo egípcio, do Parlamento (Majlis al-Sha'b), de todos os organismos estatais e religiosos centrais e de numerosas representações diplomáticas."
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Tóquio",
      "descricao": "Capital e cidade mais populosa do Japão, vista com os arranha-céus de Shinjuku."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1868, a cidade de Edo passou a abrigar o imperador e foi rebatizada de Tóquio. O que esse novo nome significa?",
    "resposta": "Capital do leste",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tokyo",
      "https://pt.wikipedia.org/wiki/T%C3%B3quio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tokyo",
        "situacao": "ok",
        "texto": "Tokyo, officially the Tokyo Metropolis, is the capital and most populous city of Japan. The population of the city proper was over 14 million as of 2023. The Greater Tokyo Area, which includes Tokyo and parts of six neighboring prefectures, is the third-most populous metropolitan area in the world, with 33 million residents as of 2025.\n[…]\nTokyo, originally known as Edo, rose to political prominence in 1603 when it became the seat of the Tokugawa shogunate, and by the mid-18th century, Edo had evolved from a small fishing village into one of the largest cities in the world, with a population surpassing one million. After the Meiji Restoration (1868), the imperial capital in Kyoto was moved to Edo, and the city was renamed Tokyo (lit. 'Eastern Capital').\n[…]\nDuring the Meiji Restoration in 1868, the name of the city was changed to Tokyo (東京; from 東 tō 'east', and 京 kyō 'capital'), when it became the new imperial capital, in line with the East Asian tradition of including the word for capital (京) in the name of the capital city (for example, Kyoto (京都), Keijō (京城), Beijing (北京), Nanjing (南京), and Xijing (西京)).\n[…]\nAfter being handed over to the Meiji government, Edo was renamed Tokyo (Eastern Capital) on September 3, 1868, and the capital was subsequently moved officially from Kyoto to Tokyo by Emperor Meiji.\n[…]\nDentsu, Hakuhodo, and ADK Holdings, all based in Tokyo, are the country's largest advertising agencies. All three major telecommunications companies in Japan, namely NTT (whose market capitalization was once the largest among all publicly traded companies in the world), KDDI, and SoftBank, are based in Tokyo.\n[…]\nWaley, Paul. \"Tokyo-as-world-city: Reassessing the Role of Capital and the State in Urban Restructuring\". Urban Studies 2007 44(8): 1465–1490. ISSN 0042-0980 Fulltext: Ebsco\n[…]\nTokyo Convention & Visitors Bureau"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/T%C3%B3quio",
        "situacao": "ok",
        "texto": "Tóquio (em japonês: 東京; romaniz.: Tōkyō, pronunciado: [to̞ːkʲo̞ː] (), literalmente \"capital do Leste\"), oficialmente Metrópole de Tóquio (東京都, Tōkyō-to), é a capital do Japão e uma das 47 prefeituras do país. Situa-se em Honshu, a maior ilha do arquipélago.\n[…]\nEra originalmente conhecida como Edo, que significa \"estuário\". Seu nome foi mudado para Tóquio (Tóquio: Tō (leste) + kyō (capital)) quando se tornou a capital imperial em 1868, em linha com a tradição da Ásia Oriental de incluir a palavra capital ('京') no nome da cidade da capital.\n[…]\nEdo cresceu e por volta do século XVIII se tornou uma das cidades mais populosas do mundo com mais de um milhão de habitantes. A nobreza, junto com o Imperador do Japão, permaneceram em Quioto, que seguiu sendo a capital oficial, porém apenas de maneira protocolar.\n[…]\nEm novembro de 1867, ocorreu a destituição do último xogum, Tokugawa Yoshinobu, e o fim do Xogunato em todo o Japão. Assim, em 1868 deu-se o início da Restauração Meiji, em que o Imperador se mudou ao Castelo Edo, convertendo-o no Palácio Imperial do Japão e estabeleceu a mesma alteração de nome de Edo para Tóquio, \"a capital do leste\". No entanto, o Imperador não deixou estabelecido de maneira legal que Tóquio era a nova capital do Japão.\n[…]\nTóquio é uma cidade-irmã com as seguintes cidades e estados:\n[…]\nO santuário Meiji é o principal santuário xintoísta de Tóquio e é muito visitado durante a época de ano novo.\n[…]\nTóquio, como capital do Japão, pode ser considerada um dos centros da inovação tecnológica. É considerada uma cidade futurista devido a produtos como o trem-bala e porque seu governo é muito comprometido a abranger novas tecnologias oferecendo um ambiente favorável para a atuação de companhias de tecnologia e startups.\n[…]\nCidade de Tóquio"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "São Petersburgo",
      "descricao": "Segunda maior cidade da Rússia, às margens do rio Neva, fundada por Pedro, o Grande, em 1703."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "De 1924 a 1991, em homenagem a um líder revolucionário morto naquele ano, São Petersburgo teve qual nome?",
    "resposta": "Leningrado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saint_Petersburg",
      "https://pt.wikipedia.org/wiki/S%C3%A3o_Petersburgo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saint_Petersburg",
        "situacao": "ok",
        "texto": "Saint Petersburg, formerly known as Petrograd (Петроград), and later Leningrad (Ленинград), is the second-largest city in Russia, after Moscow, the nation's capital. Situated on the Neva River at the head of the Gulf of Finland on the Baltic Sea, its area of 1,439 square kilometers (556 sq mi) makes it the smallest administrative division of Russia by area. The city had a population of 5,601,911 r\n[…]\nOn 26 January 1924, shortly after the death of Vladimir Lenin, it was renamed to Leningrad (Russian: Ленинград, IPA: [lʲɪnʲɪnˈgrat]), meaning 'Lenin City'. On 6 September 1991, the original name, Sankt-Peterburg, was returned by a citywide referendum. Today, in English, the city is known as Saint Petersburg. Residents often refer to the city by its shortened nickname, Piter (Russian: Питер, IPA: [ˈpʲitʲɪr]).\n[…]\nAfter the October Revolution, the name Red Petrograd (Красный Петроград, Krasny Petrograd) was often used in newspapers and other prints until the city was renamed Leningrad in January 1924.\n[…]\nThe referendum on restoring the historic name was held on 12 June 1991, with 55% of voters supporting \"Saint Petersburg\" and 43% supporting \"Leningrad\". Renaming the city Petrograd was not an option. This change officially took effect on 6 September 1991. Meanwhile, the oblast which surrounds Saint Petersburg is still named Leningrad.\n[…]\nThe Revolution of 1905 began in Saint Petersburg and spread rapidly into the provinces.\n[…]\nEthnic composition of Saint Petersburg\n[…]\nSince 1991, the Historic Centre of Saint Petersburg and Related Groups of Monuments in Saint Petersburg and Leningrad Oblast have been listed by UNESCO as a World Heritage Site.\n[…]\nSeveral museums provide insight into the Soviet history of Saint Petersburg, including the Museum of the Blockade, which describes the Siege of Leningrad and the Museum of Political History of Russia, which explains many authoritarian features of the USSR."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A3o_Petersburgo",
        "situacao": "ok",
        "texto": "São Petersburgo ou Sampetersburgo (russo:  Санкт-Петербу́рг, tr. Sankt-Peterburg) é a segunda maior cidade da Rússia, politicamente incorporada como uma cidade autônoma (ou cidade federal). Ela está localizada ao longo do rio Neva, na entrada do Golfo da Finlândia, no Mar Báltico. Em 1914, o nome da cidade foi mudado para Petrogrado (russo:  Петроград) e, em 1924, para Leningrado (russo:  Ленингра\n[…]\nEm 26 de janeiro de 1924, cinco dias após a morte de Lênin, a cidade foi rebatizada de Leningrado. A cidade tem mais de 230 locais associados com a vida e as atividades do líder revolucionário, o que lhe rendeu o cognome de \"cidade de Lênin\", ainda que ele não tenha nela nascido. Nos anos 1920 e 1930, a região periférica da cidade foi reconstruída de forma planejada, fazendo com que a arquitetura construtivista florescesse nessa época.\n[…]\nO então líder soviético Joseph Stálin adotou um plano para construir um novo palácio para a cidade, com uma grande praça com acesso à avenida Moskovski, que deveria se tornar a artéria da cidade. O caos decorrente da Segunda Guerra Mundial, entretanto, anulou os planos de modernização de Leningrado.[carece de fontes]? A cidade permaneceu com esse nome até 12 de junho de 1991, quando um plebiscito decidiu pela volta de São Petersburgo.\n[…]\nEm 12 de junho de 1991, simultaneamente com as eleições presidenciais, a população de Leningrado votou pela mudança de nome da cidade para São Petersburgo, elegendo também o novo prefeito, Anatoli Sobchak, aliado do presidente Boris Iéltsin.\n[…]\nA cidade de São Petersburgo está atualmente dividida em dezoito distritos. Apesar de não ser oficialmente, São Petersburgo é o centro administrativo de facto do Oblast de Leningrado e do Distrito Federal do Noroeste.\n[…]\nWYKES, Alan. O Cerco de Leningrado. Rio de Janeiro: Renes, 1975. 160 p.– (História Ilustrada da Segunda Guerra Mundial; campanhas).\n[…]\nLista telefônica de São Petersburgo"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Praça de Espanha",
      "descricao": "Praça de Roma, na Itália, famosa pela escadaria barroca que sobe até a igreja da Trinità dei Monti."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Praça de Espanha, em Roma, deve o nome a um palácio espanhol instalado nela desde o século dezessete. Que função tem esse palácio?",
    "resposta": "Embaixada junto ao Vaticano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Piazza_di_Spagna",
      "https://en.wikipedia.org/wiki/Spanish_Steps"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piazza_di_Spagna",
        "situacao": "ok",
        "texto": "The Piazza di Spagna is a square in the centre of Rome, the capital of Italy. It lies at the foot of the Spanish Steps and owes its name to the Palazzo di Spagna, the seat of the Embassy of Spain to the Holy See. The Column of the Immaculate Conception is in the square.\n[…]\nAt the right corner of the Spanish Steps rises the house of the English poet John Keats, who lived there until his death in 1821: it is now a museum dedicated to him and his friend Percy Bysshe Shelley, displaying books and memorabilia of English romanticism. At the left corner, there is the Babington's tea room, founded in 1893.\n[…]\nThe side near Via Frattina is overlooked by the two façades (the main one, designed by Gian Lorenzo Bernini, and the side one created by Francesco Borromini) of the Palazzo di Propaganda Fide, a property of the Holy See. In front of it, actually in a part of Piazza di Spagna named Piazza Mignanelli, rises the Column of the Immaculate Conception, erected in 1856, two years after the proclamation of the dogma.\n[…]\nSince the 1980 the piazza accommodates a station on Line A of the Rome Metro, called Spagna. .\n[…]\nPalazzo di Spagna, seat of the Spanish embassy to the Holy See\n[…]\nSpanish Steps\n[…]\nSpagna (Rome Metro)\n[…]\nOld photo and prints Info.roma.it\n[…]\nSpanish Steps Rome The official website of the Association of Piazza di Spagna.\n[…]\nThe Spanish Steps Archived 2013-07-01 at the Wayback Machine - 360° Panorama (QuickTime VR)\n[…]\nPiazza di Spagna on Secret Rome"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Spanish_Steps",
        "situacao": "ok",
        "texto": "The Spanish Steps (Italian: Scalinata di Trinità dei Monti) in Rome, Italy, climb a steep slope between the Piazza di Spagna at the base and the Piazza Trinità dei Monti, dominated by the Trinità dei Monti church, at the top.\n[…]\nIn May 2022, a Saudi national drove a rented Maserati through the steps, descending the first flight of steps before stopping. Fractures were subsequently found on the 16th and 29th steps of the right-hand flight rising up from Piazza di Spagna. The man, who abandoned the car and fled the scene, was later apprehended at Milan Malpensa Airport after being identified through surveillance cameras and was charged with inflicting aggravated damage to cultural heritage and monuments.\n[…]\nThe film Le Ragazze di Piazza di Spagna of 1952, directed by Luciano Emmer and starring Liliana Bonfatti, Lucia Bosè, Cosetta Greco, and Marcello Mastroianni, centers on the Spanish Steps.\n[…]\nThe Spanish Steps feature in car action scene in Fast X (2023).\n[…]\nThe Spanish Steps appear as part of the Rome Avanti course in Mario Kart Tour and subsequently in Mario Kart 8 Deluxe, being added to both games in 2023.\n[…]\nPalazzo di Spagna\n[…]\nSalerno, Luigi (1967). Piazza di Spagna. Naples.{{cite book}}:  CS1 maint: location missing publisher (link)\n[…]\nVarè, Daniele (1955). Ghosts of the Spanish Steps. London.{{cite book}}:  CS1 maint: location missing publisher (link)\n[…]\n\"Elevation of Spanish Steps, Piazza di Spagna, Roma, Italy\". Worldwide Elevation Map Finder. MAPLOGS.COM. Retrieved May 4, 2021.\n[…]\nSpanish Steps Rome The official website of the Association of Piazza di Spagna.\n[…]\nSpanish Steps Virtual reality movie and picture gallery\n[…]\nThe Spanish Steps 360 degree panorama – QuickTime VR.\n[…]\nGuided tour of Piazza di Spagna on romainteractive.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Piazza_di_Spagna",
        "situacao": "ok",
        "texto": "Piazza di Spagna, conhecida até o século XVII como Piazza di Francia, com sua famosa escadaria até a igreja Trinità dei Monti, é uma das praças mais famosas de Roma, Itália, localizada no rione Campo Marzio. Seu nome é uma referência ao Palazzo di Spagna, sede da embaixada do Reino da Espanha à Santa Sé.\n[…]\nNo centro da praça está a famosa Fontana della Barcaccia, dos primeiros anos do barroco, esculpida por Pedro Bernini e seu filho, o célebre Gian Lorenzo Bernini.\n[…]\nAo lado da via Frattina está o Palazzo di Propaganda Fide, uma das propriedades da Santa Sé em Roma. Em frente à sua fachada, projetada por Bernini (mas realizada por Borromini), está a coluna mariana da Imaculada Conceição, inaugurada dois anos depois da proclamação do dogma (1856).\n[…]\nA monumental escadaria, com 135 degraus, foi inaugurada pelo papa Bento XIII por ocasião do Jubileu de 1725. A obra foi realizada graças ao financiamento dos franceses (1721-1725) para interligar a embaixada da Espanha Bourbon à igreja no alto do morro (Trinità dei Monti). Foi projetada por Alessandro Specchi e Francesco De Sanctis depois de gerações de acaloradas discussões sobre como a inclinação íngreme da encosta do Píncio devia ser urbanizada para ligar a praçã à igreja.\n[…]\nA solução final foi a de Sanctis: uma grandiosa escadaria decorada por diversos terraços-jardins que, na primavera, estariam decoradas por flores. A suntuosa escadaria aristocrática, na extremidade de uma via que levava até o Tibre, foi desenhada de forma a aumentar seu efeito dramático com a proximidade. Típico da grande arquitetura barroca foi, na realidade, a criação de longas e profundas perspectivas que culminavam em cenas ou fundos de caráter monumental. A escadaria foi restaurada em 1995.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Torre de TV de Berlim",
      "descricao": "Torre de televisão com uma esfera no alto, na Alexanderplatz, construída pela Alemanha Oriental e inaugurada em 1969."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A torre de TV da antiga Berlim Oriental ganhou o apelido de Vingança do Papa porque o sol, refletido na sua esfera, desenha o quê?",
    "resposta": "Uma cruz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fernsehturm_Berlin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fernsehturm_Berlin",
        "situacao": "ok",
        "texto": "The Fernsehturm (German: [ˈfɛ͡ənzeːˌtʊ͡ɐm] ; lit. 'Television Tower') in central Berlin was constructed between 1965 and 1969 by the government of the German Democratic Republic as both a functional broadcasting facility and a symbol of communist power.\n[…]\nTo mark the 2006 FIFA World Cup in Germany, for which the final match was played in the Berlin Olympic Stadium, the sphere was decorated as a football with magenta-coloured pentagons, reflecting the corporate colour of World Cup sponsor and owner of the Fernsehturm, Deutsche Telekom.\n[…]\nFor comprehensive and continuous coverage, a powerful large broadcasting facility at the highest possible location was required. In the 1950s, this task was fulfilled in Berlin by the fragile makeshift stations of Deutscher Fernsehfunk (East German broadcasting organisation).\n[…]\nThe building, officially called the Fernseh- und UKW-Turm Berlin (Television and VHF Tower Berlin), was the world's second highest television tower in October 1969. The only TV tower that was taller was the Ostankino in Moscow. It was also the third-highest freestanding building of its time, after the tower in Moscow and the Empire State Building in New York.\n[…]\nWhen the sun shines on the Fernsehturm's tiled stainless-steel dome, the reflection usually appears in the form of a Greek cross. Berliners nicknamed the luminous cross Rache des Papstes, or the \"Pope's Revenge\", believing the Christian symbol a divine retaliation for the government's removal of crosses from East Berlin's churches. For the same reasons, the structure was also called \"St. Walter\" (from Walter Ulbricht). U.S.\n[…]\nrbb Fernsehen Berlin\n[…]\nFunkturm Berlin\n[…]\nBerlin Television Tower at Structurae\n[…]\nFernsehturm Official Website\n[…]\nBerliner Fernsehturm during Football Worldcup 06"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torre_de_Televis%C3%A3o_de_Berlim",
        "situacao": "ok",
        "texto": "A Torre de Televisão de Berlim é uma torre de radiodifusão de sinal localizada na Alexanderplatz, no centro da cidade de Berlim, capital da Alemanha. A torre foi construída entre 1965 e 1969 pela República Democrática Alemã, que a usou como símbolo da Berlim governada pela República Democrática Alemã. A torre é facilmente visível de todo o centro e de alguns bairros de Berlim e continua a ser um s\n[…]\nSimultaneamente à construção da Torre da Televisão, projetou-se o Interhotel Stadt Berlin, um hotel alto com 125 m de altura, que foi construído em 1970 na Alexanderplatz e que hoje é conhecido como Park Inn by Radisson Berlin Alexanderplatz. Entre 1967 e 1972, o centro comercial Rathauspassagen e a Câmara Municipal de Berlim (Rotes Rathaus) foram erigidos no lado sul da Torre da Televisão.\n[…]\nA Torre da Televisão faz parte dos edifícios em Berlim que são artificialmente iluminados por meio de uma instalação luminosa especial durante os vários dias em que decorre o Festival of Lights, o Festival das Luzes que, desde 2004, se realiza durante o mês de outubro. Por ocasião do Campeonato Mundial de Futebol de 2006, a esfera da torre foi revestida de modo a imitar uma bola de futebol de cor magenta, no âmbito de uma campanha publicitária da empresa exploradora Telekom.\n[…]\nQuando o sol brilha sobre o telhado da cúpula de aço inoxidável da Fernsehturm, a reflexão aparece geralmente como uma cruz. Esse efeito, até onde se sabe, não foi previsto nem desejado no projeto da estrutura. Os berlinenses logo passaram a chamar a cruz luminosa de Die Rache des Papstes (alemão para a vingança do Papa), ironizando assim o governo socialista da antiga Alemanha Oriental, que promovia oficialmente o ateísmo e reprimia as instituições religiosas do País.\n[…]\nPanorama 360° da Fernsehtum durante a Festa das Luzes\n[…]\nA Berliner Fernsehturm durante o Campeonato do Mundo de Futebol de 2006\n[…]\nTudo sobre a torre",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Theatro Municipal do Rio de Janeiro",
      "descricao": "Teatro de ópera e balé na Cinelândia, no centro do Rio de Janeiro, inaugurado em 1909."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Inaugurado em 1909, o Theatro Municipal do Rio de Janeiro teve a arquitetura inspirada em qual casa de ópera de Paris?",
    "resposta": "Ópera Garnier",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Theatro_Municipal_do_Rio_de_Janeiro",
      "https://en.wikipedia.org/wiki/Theatro_Municipal_(Rio_de_Janeiro)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Theatro_Municipal_do_Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "O Theatro Municipal do Rio de Janeiro é um dos mais importantes teatros brasileiros. Localiza-se no bairro da Cinelândia, centro do Rio de Janeiro.\n[…]\nNesse contexto, realizou-se um concurso para a construção de um novo teatro, do qual saiu vitorioso o projeto de Francisco de Oliveira Passos (filho do então prefeito Pereira Passos), que contou com a colaboração do francês Albert Guilbert, com um desenho inspirado na Ópera de Paris, de Charles Garnier.\n[…]\nFinalmente, quatro anos e meio mais tarde — um tempo recorde para a obra, que teve o revezamento de 280 operários em dois turnos de trabalho —, no dia 14 de julho de 1909, foi inaugurado pelo então presidente da República, Nilo Peçanha, o Theatro Municipal do Rio de Janeiro. Francisco de Sousa Aguiar era o então prefeito da cidade.\n[…]\nAlém da orquestra, hoje a casa abriga o Coro do Theatro Municipal do Rio de Janeiro e o Ballet do Theatro Municipal do Rio de Janeiro e são apresentados, majoritariamente, programas de dança e de música erudita.\n[…]\nEm comemoração aos cem anos do Theatro Municipal do Rio de Janeiro, foram iniciadas extensas obras no teatro que, foi totalmente restaurado ao estilo original.\n[…]\nPara resgatar a beleza original ao teatro, construído no início do século anterior, foram investidos 70 milhões de reais nos trabalhos de restauro, que duraram mais de novecentos dias. Já para resgatar o dourado nos ornamentos do teatro, foram utilizadas milhares de folhas de ouro de 23 quilates compradas na Alemanha e que adornam os detalhes da fachada e da cúpula, como detalhou a Secretaria de Cultura do Rio de Janeiro, da qual depende a Fundação Theatro Municipal."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Theatro_Municipal_(Rio_de_Janeiro)",
        "situacao": "ok",
        "texto": "The Theatro Municipal (\"Municipal Theater\") is an opera house in the Centro district of  Rio de Janeiro, Brazil. Built in the early twentieth century, it is considered to be one of the most beautiful and important theaters in the country.\n[…]\nThe building is designed in an eclectic style, inspired by the Paris Opéra of Charles Garnier. The outside walls are inscribed with the names of classic European and Brazilian artists. It is located near the National Library and the National Fine Arts Museum, overlooking the spacious Cinelândia square.\n[…]\nFinally, four and a half years later — a record time for the work that took the relay from 280 workers in two shifts — on July 14, 1909, President Nilo Peçanha inaugurated the Theatro Municipal do Rio de Janeiro, which had the capacity for 1,739 viewers. Serzedelo Correa was then the mayor of the city. In 1934, upon the observation that the theater was small for the new size of the population of the city, auditory capacity was increased to 2,205 seats.\n[…]\nWith the inauguration of the annex, choir, orchestra and ballet crews gained new rehearsal rooms and greater space for artistic practices and rehearsal.\n[…]\nToday, the Theatro Municipal mostly shows productions of ballet and classical music. In its early heyday, it featured only foreign opera and symphonic orchestra shows, especially from Italian and French companies. In 1931, the Municipal Symphonic Orchestra of Rio de Janeiro was created and celebrities such as Arturo Toscanini, Sarah Bernhardt, Bidu Sayão, Eliane Coelho, Heitor Villa-Lobos, Igor Stravinsky, Paul Hindemith and Alexander Brailowsky highlighted the programs of the Theatro.\n[…]\nMedia related to Theatro Municipal (Rio de Janeiro) at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Theatro Municipal de São Paulo",
      "descricao": "Teatro de ópera no centro de São Paulo, junto ao Viaduto do Chá, inaugurado em 1911."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em fevereiro de 1922, que evento, considerado o marco do modernismo brasileiro, ocupou o Theatro Municipal de São Paulo?",
    "resposta": "Semana de Arte Moderna",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Theatro_Municipal_de_S%C3%A3o_Paulo",
      "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Theatro_Municipal_de_S%C3%A3o_Paulo",
        "situacao": "ok",
        "texto": "Theatro Municipal de São Paulo é um teatro brasileiro localizado na cidade de São Paulo, projetado pelos arquitetos Ramos de Azevedo, Claudio Rossi e Domiziano Rossi no estilo arquitetônico eclético, inspirado na Ópera de Paris e inaugurado em 1911. É um dos cartões postais da cidade, localizado na Praça Ramos de Azevedo, também considerado um dos mais importantes teatros do país.\n[…]\nSeu estilo arquitetônico é semelhante ao dos mais importantes teatros do mundo. O edifício faz parte do Patrimônio Histórico do estado desde 1981 quando foi tombado pelo Condephaat. Além de sua importância arquitetônica, o teatro também possui notabilidade histórica, pois foi palco da Semana de Arte Moderna, o marco inicial do Modernismo no Brasil.\n[…]\nDe 11 a 18 de fevereiro, o Theatro Municipal sediou um evento modernista que veio a ser conhecido como a Semana de Arte Moderna. Durante os sete dias de evento, ocorreu uma exposição modernista e nas noites dos dias 13, 15 e 17 de fevereiro aconteceram apresentações de música, poesia e palestras sobre a modernidade no país e no mundo.\n[…]\nO Modernismo pregava a ruptura de todo e qualquer valor artístico que existira até o momento, propondo uma abordagem totalmente nova à pintura, à literatura, à poesia e aos outros tipos de arte. A Semana de Arte Moderna contou com nomes já consagrados, como Graça Aranha e outros, que se tornariam futuros grandes expoentes do modernismo brasileiro.\n[…]\nCom o passar dos anos, o teatro, que havia sido feito exclusivamente para a ópera, mostrou-se capaz de abrigar outros eventos artísticos, como, além da Semana de Arte Moderna, performances de bailarinas como Anna Pavlova e Isadora Duncan.\n[…]\nFundação Theatro Municipal de São Paulo\n[…]\nSemana da Arte Moderna\n[…]\nTheatro Municipal de São Paulo no Facebook\n[…]\nTheatro Municipal de São Paulo no X\n[…]\nTheatro Municipal de São Paulo no YouTube\n[…]\nTheatro Municipal de São Paulo no Instagram"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna",
        "situacao": "ok",
        "texto": "Semana de Arte Moderna, também chamada de Semana de 22, foi um evento cultural que ocorreu no Theatro Municipal de São Paulo de 13 a 17 de fevereiro de 1922. Contou com exposição de pinturas, esculturas e maquetes arquitetônicas, além de conferências e concertos nas noites dos dias 13, 15 e 17. Foi financiada principalmente por membros da elite paulista que haviam enriquecido com a produção cafeei\n[…]\nAbertura oficial do evento. Espalhadas pelo saguão do Teatro Municipal de São Paulo, várias pinturas e esculturas provocam reações de espanto e repúdio por parte do público. O espetáculo tem início com a confusa conferência de Graça Aranha, intitulada \"A emoção estética da Arte Moderna\".\n[…]\nOs trabalhos expostos na Semana de Arte Moderna foram um esboço de reflexões que amadureceram no decorrer da década de 1920, como o combate ao Romantismo, ao Indianismo, ao Realismo, ao Parnasianismo, à métrica e o soneto, além de exaltar e propor uma recepção crítica dos postulados estéticos das vanguardas europeias, adaptando-os à realidade brasileira.\n[…]\nNas comemorações do centenário da Semana em 2022, vários eventos, mostras, publicações e seminários foram organizados, tentando formar uma visão mais exata sobre como se formou e o que representou o movimento no contexto histórico e identificar as distorções da historiografia tradicional. É um exemplo a exposição Raio-que-o-parta: ficções do moderno no Brasil, inaugurada no dia 16 de fevereiro no SESC 24 de Maio, em São Paulo.\n[…]\nArte moderna\n[…]\nModernismo\n[…]\nAjzenberg, Elza (2012). «A Semana de Arte Moderna de 1922». Revista de Cultura e Extensão USP: 25–29. ISSN 2316-9060. doi:10.11606/issn.2316-9060.v7i0p25-29\n[…]\nBopp, Raul (2012). Movimentos modernistas no Brasil. 1922-1928. Rio de Janeiro: José Olympio\n[…]\nLafetá, João Luiz (2000). 1930. a crítica e o Modernismo. São Paulo: Duas Cidades\n[…]\n«Editorial de 15 de maio de 1978 da Folha de S.Paulo sobre a Semana»"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Calçadão de Copacabana",
      "descricao": "Calçada em pedra portuguesa da Avenida Atlântica, no Rio de Janeiro, famosa pelo desenho de ondas pretas e brancas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O desenho de ondas pretas e brancas do calçadão de Copacabana foi inspirado no piso de qual praça de Lisboa?",
    "resposta": "Rossio",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cal%C3%A7ada_portuguesa",
      "https://en.wikipedia.org/wiki/Portuguese_pavement"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cal%C3%A7ada_portuguesa",
        "situacao": "ok",
        "texto": "A calçada portuguesa ou mosaico português ou calçada-mosaico (ou ainda pedra portuguesa no Brasil) é o nome consagrado de um determinado tipo de revestimento de piso utilizado especialmente na pavimentação de passeios, de espaços públicos e espaços privados, de uma forma geral. Este tipo de passeio é muito utilizado em países lusófonos.\n[…]\nAssim, não se deve confundir calçada portuguesa, que é o termo genérico para todo o tipo de calçada com pedra de pequena dimensão (entre cerca de 3 a 4 cm e máximo de 7 cm), branca ou com desenhos, assente no solo de forma irregular ou regular, consoante a técnica utilizada, com calçada à portuguesa que é uma das técnicas, a primeira utilizada na sua execução.\n[…]\nA sua aplicação pode ser apreciada em projetos como o do famoso Largo de São Sebastião, em Manaus, no ano de 1901, sendo a primeira calçada artística portuguesa no Brasil, inspirada na Praça Dom Pedro IV, de Lisboa.\n[…]\nEm 1906 surgiu o calçadão da Praia de Copacabana (uma obra do prefeito Paulo de Frontin, expandida por Roberto Burle Marx) ou nos espaços da antiga Avenida Central, ambos no Rio de Janeiro.\n[…]\nEm Lisboa no ano de 1842 foi executada a primeira calçada a preto e branco, a calcário e basalto, de que há registo conhecido. O trabalho foi realizado por presidiários (chamados \"grilhetas\" na época), a mando do Governador de armas do Castelo de São Jorge, o tenente-general Eusébio Pinheiro Furtado, na praça do Castelo de São Jorge.\n[…]\nApós este primeiro pavimento em calçada artística portuguesa, foram concedidas verbas a Eusébio Furtado para que os seus homens pavimentassem, obra iniciada em Agosto de 1848, toda a área da Praça do Rossio, uma das zonas mais conhecidas e mais centrais de Lisboa, numa extensão de 8712 m², que ficaria concluída no final do ano seguinte.\n[…]\nCalçadão"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Portuguese_pavement",
        "situacao": "ok",
        "texto": "Portuguese pavement, known in Portuguese as calçada portuguesa or simply calçada (or pedra portuguesa in Brazil), is a traditional-style pavement used for many pedestrian areas in Portugal and its former colonies. It consists of small pieces of stone arranged in a pattern or image, like a mosaic. It can also be found in Olivença (a disputed territory administered by Spain) and throughout former Po\n[…]\nIn 1848, Pinheiro was put in charge of the renewal of Rossio square, which he paved with a pattern of waves in homage to the sea crossed by Portuguese sailors. From then onward, the calçada began to spread throughout the streets of Lisbon and Portugal as a whole. Much of the motifs and patterns would revolve around the sea and maritime exploration, and the pavement quickly became a symbol of Portuguese culture and identity, also spreading overseas to Portugal's colonies.\n[…]\nBelo Horizonte followed suit, and then Rio de Janeiro. In Rio, mayor Francisco Pereira Passos was a strong promoter of implementing the calçada as part of the city's urban renewal plan, which was subsequently adopted in the reworking of Avenida Rio Branco, importing calceteiros, designs and even stones from Portugal. The remaining building materials were destined for the newly inaugurated Avenida Atlântica, in its iconic wavy pattern. Portuguese pavement then began to proliferate through Rio.\n[…]\nIn the 1940s, the Portuguese calçada began to evolve in line with the principles of the International Style, developing abstract geometric patterns. In Brazil, this pavement was used in many projects directed by modernist architects, in which they blended traditional materials and techniques like the calçada with contemporary design. Roberto Burle Marx applied it to many of his works and conserved it when redesigning Copacabana in the 1970s."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Panteão de Roma",
      "descricao": "Antigo templo romano com grande cúpula e óculo central, em Roma, transformado em igreja no século sete."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Qual pintor do Renascimento italiano, morto em 1520, está sepultado no Panteão de Roma?",
    "resposta": "Rafael",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pantheon,_Rome",
      "https://en.wikipedia.org/wiki/Raphael"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pantheon,_Rome",
        "situacao": "ok",
        "texto": "The Pantheon (UK: , US: ; Latin: Pantheum, from Ancient Greek  Πάνθειον (Pantheion) '[temple] of all the gods') is an ancient temple in Rome, Italy, originally built under emperor Augustus (27 BC–AD 14) and reconstructed under Hadrian (117–138); since AD 609, it is a Catholic church called the Basilica of St. Mary and the Martyrs (Italian: Basilica di Santa Maria ad Martyres).\n[…]\nThe National Institute for the Honour Guard of the Royal Tombs of the Pantheon, which was originally chartered by the House of Savoy and has subsequently operated with the authorisation of the Italian Republic, mounts a guard of honour in front of the royal tombs.\n[…]\nThe Pantheon's dome was also an inspiration for the Volkshalle, an assembly hall planned but never built by the Nazi German architect Albert Speer for Adolf Hitler's intended rebuilding of Berlin as \"Germania\".\n[…]\nPanthéon, Paris\n[…]\nPantheon, Moscow (never built)\n[…]\n\"Beggar's Rome\" – A self-directed virtual tour of St. Maria ad Martyres (Pantheon) and other Roman churches\n[…]\nPantheon Live Webcam, Live streaming Video of the Pantheon\n[…]\nPantheon Rome, Virtual Panorama and photo gallery\n[…]\nPantheon, article in Platner's Topographical Dictionary of Ancient Rome\n[…]\nPantheon Rome vs Pantheon Paris. Archived 24 June 2019 at the Wayback Machine.\n[…]\nTomás García Salgado, \"The geometry of the Pantheon's vault\"\n[…]\nPantheon at Great Buildings/Architecture Week website (archived 15 March 2008)\n[…]\nArt & History Pantheon. Archived 2010-11-24 at the Wayback Machine.\n[…]\nSummer solstice at the Pantheon (archived 15 July 2011)\n[…]\nPantheon at Structurae\n[…]\nVideo Introduction to the Pantheon\n[…]\nPanoramic Virtual Tour inside the Pantheon Archived 11 July 2021 at the Wayback Machine\n[…]\nHigh-resolution 360° Panoramas and Images of Pantheon|Art Atlas Archived 1 January 2022 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Raphael",
        "situacao": "ok",
        "texto": "Raffaello Sanzio da Urbino (Italian: [raffaˈɛllo ˈsantsjo da urˈbiːno]; March 28 or 6 April 1483 – 6 April 1520), now generally known in English as Raphael (UK:  RAF-ay-əl, US:  RAF-ee-əl, RAY-fee-, RAH-fy-EL), was an Italian painter and architect of the High Renaissance. His work is admired for its clarity of form, ease of composition, and visual achievement of the Neoplatonic ideal of human gran\n[…]\nRaphael asked Marco Fabio Calvo to translate Vitruvius's Four Books of Architecture into Italian; this he received around the end of August 1514. It is preserved at the Library in Munich with handwritten margin notes by Raphael.\n[…]\nRaphael died on Good Friday, 6 April 1520, which was possibly his 37th birthday. Vasari says that Raphael had also been born on a Good Friday, which in 1483 fell on 28 March and that the artist died from exhaustion brought on by unceasing romantic interests while he was working on the Loggia. Several other possibilities for his death have been raised by later historians and scientists, such as a combination of an infectious disease and bloodletting.\n[…]\nIn his acute illness, which lasted fifteen days, Raphael was composed enough to confess his sins, receive the last rites, and put his affairs in order. He dictated his will, in which he left sufficient funds for his mistress's care, entrusted to his loyal servant Baviera, and left most of his studio contents to Giulio Romano and Penni. At his request, Raphael was buried in the Pantheon.\n[…]\nGould, Cecil, The Sixteenth Century Italian Schools, National Gallery Catalogues, London 1975, ISBN 0-947645-22-5\n[…]\nPon, Lisa, Raphael, Dürer, and Marcantonio Raimondi, Copying and the Italian Renaissance Print, 2004, Yale UP, ISBN 978-0-300-09680-4"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pante%C3%A3o_%28Roma%29",
        "situacao": "ok",
        "texto": "Panteão (em latim: Pantheon) é um edifício em Roma, Itália, encomendado por Marco Vipsânio Agripa durante o reinado do imperador Augusto (r. 27 a.C.–14 d.C.) e reconstruído por Adriano (r. 117–138) por volta de 126.\n[…]\nDesde o Renascimento, o Panteão tem sido utilizado como túmulo e entre os sepultados ali estão os pintores Rafael e Annibale Carracci, o compositor Arcangelo Corelli e o arquiteto Baldassare Peruzzi. No século XV, muitas pinturas foram levadas para lá e a mais conhecida é uma \"Anunciação\" de Melozzo da Forlì. No início do século XVII, Urbano VIII Barberini  (r. 1623–1644) ordenou que o teto de bronze do pórtico do Panteão fosse derretido.\n[…]\nO terceiro nicho abriga os restos mortais do grande artista Rafael. Sua noiva (ela morreu antes do casamento), Maria Bibbiena, está enterrada à sua direita. O sarcófago foi doado pelo papa Gregório XVI (r. 1831–1846) e, na inscrição, lê-se: ILLE HIC EST RAPHAEL TIMUIT QUO SOSPITE VINCI / RERUM MAGNA PARENS ET MORIENTE MORI (\"Aqui jaz Rafael, por quem a mãe de todas as coisas [Natureza] temia ser ultrapassada enquanto ele vivia e, enquanto ele morria, temia morrer também\".\n[…]\nEste epitáfio foi escrito por Pietro Bembo. O atual arranjo da capela é de 1811, um projeto de Antonio Munoz. O busto de Rafael (1833), é de Giuseppe Fabris. As duas placas comemorativas celebram Maria Bibbiena e Annibale Carracci. Atrás do túmulo está um estátua conhecida como \"Madonna del Sasso\" (\"Madona das Rochas\"), pois a Virgem está com um pé num pedregulho na imagem, encomendada por Rafael e executada por Lorenzetto em 1524.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Boca da Verdade",
      "descricao": "Máscara de mármore com rosto de boca aberta, no pórtico da igreja de Santa Maria in Cosmedin, em Roma."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A Boca da Verdade, máscara de mármore em Roma, ficou mundialmente famosa numa cena de qual filme de 1953 com Audrey Hepburn?",
    "resposta": "A Princesa e o Plebeu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bocca_della_Verit%C3%A0",
      "https://en.wikipedia.org/wiki/Roman_Holiday"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bocca_della_Verit%C3%A0",
        "situacao": "ok",
        "texto": "The Mouth of Truth (Italian: Bocca della Verità [ˈbokka della veriˈta]) is an ancient Roman marble mask in Rome, Italy, which stands against the left wall of the portico of the Santa Maria in Cosmedin church, at the Piazza della Bocca della Verità, the site of the ancient Forum Boarium (cattle market). According to an enduring medieval legend, it will bite off the hand of any liar who places their\n[…]\nThe Mouth of Truth appears in the 1953 film Roman Holiday as a storytelling device as Hepburn's and Peck's characters are not truthful with each other. The sculpture is one of six genuine artifacts returned in place replicas in Lupin the Third:  Operation Return the Treasure. Robert Silverberg uses the Mouth of Truth as a means of providing the information that leads to the climax of his novella Nightwings.\n[…]\nIn Het geheim van de afgebeten vingers by Dutch writer Rindert Kromhout, the fingers of lying children are cut off with a scythe by a skeleton who lives in the Capuchin Crypt in the Santa Maria della Concezione dei Cappuccini.\n[…]\nThere are a number of Bocca della Verità replicas and derivative works. A full-size reproduction sits in the Alta Vista Gardens in California and one of Jules Blanchard's sculptures in the Luxembourg Garden in Paris depicts a woman with her hand in the sculpture's mouth. Coin-operated fortune teller machines have been developed and installed in different parts of the world, including one on display in the Musée Mécanique in San Francisco.\n[…]\nMedia related to Bocca della Verità at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Roman_Holiday",
        "situacao": "ok",
        "texto": "Roman Holiday is a 1953 American romantic comedy film directed and produced by William Wyler. It stars Audrey Hepburn as a princess out to see Rome on her own and Gregory Peck as a reporter. Hepburn won an Academy Award for Best Actress for her performance; the film also won the Academy Award for Best Story and the Academy Award for Best Costume Design.\n[…]\nWyler first offered the role to Hollywood favorite Cary Grant. Grant declined, believing he was too old to play Hepburn's character's love interest, though he would do so ten years later in Charade. Other sources say Grant declined because he knew all of the attention would be centered on the princess. Peck's contract gave him solo star billing, with newcomer Hepburn listed much less prominently in the credits.\n[…]\nWyler had initially considered Elizabeth Taylor and Jean Simmons for the princess role, but both were unavailable. On 18 September 1951, director Thorold Dickinson made a screen test with Hepburn and sent it to director William Wyler, who was in Rome preparing Roman Holiday.\n[…]\nMouth of Truth, Piazza Bocca della Verità, Church of Santa Maria in Cosmedin\n[…]\nVia Margutta 51, the location of Joe's apartment where he hosts Princess Ann\n[…]\nPalazzo Colonna Gallery, shown in the final scenes of the princess's press appearance\n[…]\nPalazzo Brancaccio, the princess' ornate Roman bedroom.\n[…]\nWhile the domestic box office disappointed Paramount, it was very successful elsewhere, including the UK, where the film benefited from both the current romance between Princess Margaret and commoner Peter Townsend—\"No film studio could have bought such publicity\", Alexander Walker wrote—and a fad for Italian culture. It earned around $12 million in the overseas market.\n[…]\nDue to the film's popularity, both Peck and Hepburn were approached about filming a sequel, but this project never got off the ground."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bocca_della_Verit%C3%A0",
        "situacao": "ok",
        "texto": "La Bocca della Verità ou A Boca da Verdade é uma imagem esculpida em mármore pavonazzo de uma face humanoide que fica no pórtico de Santa Maria in Cosmedin, em Roma, Itália. Acredita-se que a escultura tenha sido parte de uma fonte romana antiga ou, talvez, um tampão de bueiro, e retrate um entre vários possíveis deuses romanos, provavelmente Oceano. A maior parte dos romanos acredita que a Bocca \n[…]\nA mais famosa característica da Bocca é seu papel como detector de mentiras. Desde a Idade Média, acredita-se que se alguém contar uma mentira com a mão na boca da escultura, ela se fecharia \"mordendo\" a mão do mentiroso. Existe ainda uma antiga lenda medieval, que se atribui incorretamente ao poeta romano Virgílio, de uma imperatriz romana que teria conseguido enganar o marido durante um julgamento usando a Bocca.\n[…]\nA história da imperatriz é uma das xilogravuras da série \"Poder das Mulheres\" de Lucas van Leyden (ca. 1512), embora não seja comum que a imagem apareça em grupos similares. Ela apareceu também no filme \"Roman Holiday\" (1953), cujo enredo utilizou-a como artifício para indicar que as personagens de Audrey Hepburn e Gregory Peck não estariam sendo fieis um ao outro. Ela foi repetida em 1994 no filme Only You, estrelando Robert Downey Jr.\n[…]\ne Marisa Tomei, e novamente no filme japonês \"Sleeping Bride\", de Hideo Nakata, em 2000.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Castelo de Neuschwanstein",
      "descricao": "Castelo romântico do século dezenove nos Alpes da Baviera, na Alemanha, mandado construir pelo rei Luís Segundo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Mandado construir na Baviera pelo rei Luís Segundo, o Castelo de Neuschwanstein inspirou o castelo de qual princesa da Disney?",
    "resposta": "Bela Adormecida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Neuschwanstein_Castle",
      "https://en.wikipedia.org/wiki/Sleeping_Beauty_Castle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Neuschwanstein_Castle",
        "situacao": "ok",
        "texto": "Neuschwanstein Castle (German: Schloss Neuschwanstein, pronounced [ˈʃlɔs nɔʏˈʃvaːnʃtaɪn]; Southern Bavarian: Schloss Neischwanstoa; lit. 'Newswanstone') is a 19th-century historicist palace on a rugged hill of the foothills of the Alps in the very south of Germany, near the border with Austria. It is located in the Swabia region of Bavaria, in the municipality of Schwangau, above the incorporated \n[…]\nThe more detailed inspiration for the construction of Neuschwanstein came from two journeys that Ludwig took in 1867: one in May to the reconstructed Wartburg near Eisenach, site of the mythical Sängerkrieg and thus setting of Wagner's opera Tannhäuser and the Singers' Contest at Wartburg, and another in July to the Château de Pierrefonds, which Eugène Viollet-le-Duc was transforming from a ruined castle into a historicist palace for Napoleon III.\n[…]\nThe King never intended to make the palace accessible to the public. No more than six weeks after the King's death, the Prince-Regent Luitpold ordered the palace opened to paying visitors. The administrators of King Ludwig's estate managed to balance the construction debts by 1899. From then until World War I, Neuschwanstein was a stable and lucrative source of revenue for the House of Wittelsbach.\n[…]\nIt served as the inspiration for Disneyland's Sleeping Beauty Castle and Cinderella Castle, Cameran Palace in the animated Pokémon film Lucario and The Mystery of Mew (2005), and later similar structures. It is also visited by the character Grace Nakimura alongside Herrenchiemsee in the game The Beast Within: A Gabriel Knight Mystery (1996). It is also featured in the Globe Trot party game on the game Wii Party (2010).\n[…]\nNeuschwanstein Pictures and Videos: From a visitor's perspective.\n[…]\nNeuschwanstein Castle on Bavarian Palace Department website.\n[…]\nNeuschwanstein Castle on the Cultural Travel Explorer website."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sleeping_Beauty_Castle",
        "situacao": "ok",
        "texto": "Sleeping Beauty Castle is a fairy tale castle at  the center of Disneyland and formerly in Hong Kong Disneyland. It is based on the late 19th century Neuschwanstein Castle in Bavaria, Germany. It appeared in the Walt Disney Pictures logos from 1985 to 2006 before being merged with Cinderella Castle, both familiar symbols of the Walt Disney Company. The version at Disneyland is the only Disney cast\n[…]\nA redesigned and larger version of the castle is used as the symbol of Disneyland Paris.\n[…]\nAt the rear of the castle, shaded by the archways and driven into the ground is a gold spike that is widely, but wrongly, believed to mark the geographical center of Disneyland. In reality, the spike is a surveyor's mark that was used to ensure that the castle bridge and entrance lined up with Main Street USA when the park was first constructed.\n[…]\nThe 50th Anniversary of Disneyland is represented by fireworks and Tinker Bell.\n[…]\nThe castle closed on January 1, 2018 for a redesign as part of the park's 15th anniversary celebration. This redesign is meant to pay tribute to 14 Disney princesses and heroines. It has been renamed Castle of Magical Dreams.\n[…]\nAlthough no significant decorations were added to Hong Kong Disneyland's Sleeping Beauty Castle for the park's 10th anniversary, the nightly \"Disney In The Stars\" fireworks show was added with elaborate projection mapping with visuals to complement the display. This, however, resulted in the elimination of a few pyrotechnic elements launched from the front of the castle during the show.\n[…]\nAs Sleeping Beauty Castle is a Disney icon, it was used in the opening of the Walt Disney anthology television series from the show's beginning in 1954 until the late 70s, when it was replaced by the Cinderella Castle. It was also the logo of Walt Disney Pictures, Walt Disney Television, Disney Music Group and Walt Disney Studios Motion Pictures from 1985–2006."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Castelo_de_Neuschwanstein",
        "situacao": "ok",
        "texto": "O Castelo de Neuschwanstein (em alemão Schloss Neuschwanstein) é um palácio alemão construído na segunda metade do século XIX, perto das cidades de Schwangau e Füssen, no sudoeste da Baviera, a escassas dezenas de quilômetros da fronteira com a Áustria.\n[…]\nFoi construído por Luís II da Baviera no século XIX, inspirado na obra de seu amigo e protegido, o grande compositor Richard Wagner. A arquitectura do castelo possui um estilo fantástico, o qual serviu de inspiração ao \"Castelo da Bela Adormecida\", símbolo dos estúdios Disney. Apesar de não ser permitido fotografar o seu interior, é um dos edifícios mais fotografados da Alemanha e um dos mais populares destinos turísticos europeus, além de também ser considerado o \"cartão postal\" daquele país.\n[…]\nA concepção do edifício foi esboçada por Luís II da Baviera numa carta a Richard Wagner, datada de 31 de maio de 1868;\n[…]\n\"É minha intenção reconstruir a ruína do velho castelo em Hohenschwangau, próximo do Desfiladeiro de Pollat, no verdadeiro espírito dos velhos castelos dos cavaleiros alemães (...) a localização é a mais bela que alguém pode encontrar, sagrada e inacessível, um templo digno para o divino amigo que trouxe a salvação e a verdadeira bênção ao mundo.\"\n[…]\nO castelo é propriedade do estado da Baviera, ao contrário do Castelo de Hohenschwangau que é pertença de Franz, Duque da Baviera. Este edifício inspirou a construção de um outro castelo da Casa de Wittelsbach, o Castelo de Ringberg. O Castelo de Neuschwanstein é contemporâneo do português Palácio da Pena, em Sintra, por vezes referido como \"o Neuschwanstein português' (cerca de 1840).\n[…]\nSchloss Neuschwanstein - o Guia Oficial, Bayerische Schlosseverwaltung,\n[…]\nCastelo de Neuschwanstein\n[…]\nNeuschwanstein O Castelo Dos Contos De Fadas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Panteão de Paris",
      "descricao": "Edifício neoclássico no Quartier Latin, em Paris, que guarda os restos de grandes personalidades francesas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1851, sob a cúpula do Panteão de Paris, qual físico pendurou um pêndulo gigante para demonstrar a rotação da Terra?",
    "resposta": "Léon Foucault",
    "fonte": [
      "https://en.wikipedia.org/wiki/Panth%C3%A9on",
      "https://en.wikipedia.org/wiki/Foucault_pendulum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Panth%C3%A9on",
        "situacao": "ok",
        "texto": "The Panthéon (French: [pɑ̃.te.ɔ̃] , from Ancient Greek  πάνθειον (pántheion) '[temple] to all the gods') is a monument in the 5th arrondissement of Paris, France. It stands in the Latin Quarter (Quartier Latin), on the Montagne Sainte-Geneviève, in the centre of the Place du Panthéon, which was named after it.\n[…]\nIn 1851, Léon Foucault conducted a demonstration of diurnal motion at the Panthéon by suspending a pendulum from the ceiling, a copy of which is still visible today. As of December 2021 the remains of 81 people (75 men and six women) had been transferred to the Panthéon. More than half of all the panthéonisations were made under Napoleon's rule during the First Empire.\n[…]\nLouis Philippe was overthrown in 1848 and replaced by the elected government of the Second French Republic, which valued revolutionary themes. The new government designated the Pantheon \"The Temple of Humanity\", and proposed to decorate it with sixty new murals honouring human progress in all fields. In 1851 the Foucault Pendulum of astronomer Léon Foucault was hung beneath the dome to illustrate the rotation of the earth.\n[…]\nIn 1851, physicist Léon Foucault demonstrated the rotation of the Earth by constructing a 67-metre (220 ft) pendulum beneath the central dome. The original sphere from the pendulum was temporarily displayed at the Panthéon in the 1990s (starting in 1995) during renovations at the Musée des Arts et Métiers. The original pendulum was later returned to the Musée des Arts et Métiers, and a copy is now displayed at the Panthéon.\n[…]\nPantheon, Rome\n[…]\nLebeurre, Alexia (2000). The Pantheon: Temple of the Nation. Paris: Éditions du Patrimoine. ISBN 978-2858223435.\n[…]\nPanthéon ou église Sainte-Geneviève? Les ambiguïtés d'un monument, Denis Bocquet, MA Thesis, Sorbonne University 1992\n[…]\nPanthéon at Structurae"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Foucault_pendulum",
        "situacao": "ok",
        "texto": "The Foucault pendulum or Foucault's pendulum is a simple device named after French physicist Léon Foucault, conceived as an experiment to demonstrate the Earth's rotation. If a long and heavy pendulum suspended from the high roof above a circular area is monitored over an extended period of time, its plane of oscillation appears to change spontaneously as the Earth makes its 24-hourly rotation.\n[…]\nFoucault introduced his pendulum in 1851 in the first experiment to give simple, direct evidence of the Earth's rotation, which he further demonstrated in 1852 with a gyroscope experiment. Foucault pendulums have become popular in science museums and universities.\n[…]\nThe first public exhibition of a Foucault pendulum took place in February 1851 in the Meridian of the Paris Observatory. A few weeks later, Foucault made his most famous pendulum when he suspended a 28-kilogram (62 lb) brass-coated lead bob with a 67-metre-long (220 ft) wire from the dome of the Panthéon, Paris.\n[…]\nFoucault explained his results in an 1851 paper entitled Physical demonstration of the Earth's rotational movement by means of the pendulum, published in the Comptes rendus de l'Académie des Sciences. He wrote that, at the North Pole:\n[…]\nParis, France (latitude\n[…]\n\"Foucault's Pendulum\" by Jens-Peer Kuska with Jeff Bryant, Wolfram Demonstrations Project: a computer model of the pendulum allowing manipulation of pendulum frequency, Earth rotation frequency, latitude, and time.\n[…]\nFoucault, M. L., Physical demonstration of the rotation of the Earth by means of the pendulum, Franklin Institute, 2000, retrieved 2007-10-31. Translation of his paper on Foucault pendulum.\n[…]\nTobin, William. \"The Life and Science of Léon Foucault\". Archived from the original on 2018-09-12. Retrieved 2018-08-10.\n[…]\nCrane, H. Richard (1995). \"Foucault pendulum \"wall clock\"\". Am. J. Phys. 63 (1): 33–39. Bibcode:1995AmJPh..63...33C. doi:10.1119/1.17765."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pante%C3%A3o_%28Paris%29",
        "situacao": "ok",
        "texto": "O Panteão de Paris (em francês:  Panthéon de Paris) é um mausoléu histórico, que combina elementos do estilo neoclássico e gótico, situado no monte de Santa Genoveva, no 5.º arrondissement de Paris, em pleno Quartier Latin,  construído entre 1758 e 1790, a partir de projetos de Jacques-Germain Soufflot, a mando do rei Luís XV da França; o rei pretendia que fosse uma igreja dedicada a Santa Genovev\n[…]\nO Panteão é, indubitavelmente, monumental. Iniciadas em 1764, as obras do edifício foram encomendadas pelo monarca Luís XV, o qual, após recuperar-se de uma grave doença, ordenou ao arquiteto Soufflot a construção de uma basílica em tributo à Santa Genoveva (padroeira de Paris), em substituição à antiga abadia ali existente. Concluído em 1790, sob a gerência de Rondelet, o edifício foi laicizado pelos movimentos revolucionários burgueses, transformando-o em Panteão nacional.\n[…]\nO edifício, em forma de cruz grega, é coroado por uma cúpula de 83 metros de altura, com uma claraboia. O interior é decorado por pintores acadêmicos como Puvis de Chavannes, Antoine-Jean-Gros, Léon Bonnat ou Cabanel.\n[…]\nEste método de circulação de luz pode ser comparado com aquele adotado pelos predecessores de Soufflot; por exemplo, o Panteão de Roma e seu oculus central aberto, ou a cúpula dos Inválidos de Paris, de Hardouin-Mansart. Há também uma cúpula de envelope triplo na Catedral de São Paulo, em Londres, projetada pouco tempo antes pelo arquiteto inglês Christopher Wren, mas com uma cúpula robusta.\n[…]\nA primeira mulher a ser sepultada no Panteão de Paris foi Sophie Berthelot, não pelo que fez em vida, mas para a não separar do marido, Marcellin Berthelot.\n[…]\nLista de pessoas enterradas no Panteão de Paris\n[…]\nLista de pessoas mencionadas no Panteão de Paris\n[…]\nPanthéon ou église Sainte-Geneviève? Les ambiguïtés d'un monument, Denis Bocquet, MA Thesis, Sorbonne University 1992\n[…]\nPanteão (Paris) no Structurae",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Fontana di Trevi",
      "descricao": "Grande fonte barroca do século dezoito em Roma, onde os turistas jogam moedas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A Fontana di Trevi, em Roma, é cenário da cena mais famosa de qual filme de Federico Fellini, lançado em 1960?",
    "resposta": "A Doce Vida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trevi_Fountain",
      "https://en.wikipedia.org/wiki/La_Dolce_Vita"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trevi_Fountain",
        "situacao": "ok",
        "texto": "The Trevi Fountain (Italian: Fontana di Trevi) is an 18th-century fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini in 1762. Standing 26.3 metres (86 ft) high and 49.15 metres (161.3 ft) wide, it is the largest Baroque fountain in the world and one of the most famous fountains in the world.\n[…]\nThe Acqua Vergine water aqueduct carries the water to the Trevi Fountain, after having collected it 10 km (6.2 mi) from the Italian capital. The aqueduct is still in use today, despite some interventions during which the fountain remained empty. Calcium-free water is thought to be one of the causes.\n[…]\nThe Trevi Fountain was finished in 1762 by Pannini, who substituted the present allegories for planned sculptures of Agrippa and Trivia, the Roman virgin. It was officially opened and inaugurated on 22 May by Pope Clement XIII. The majority of the piece is made from Travertine stone, quarried near Tivoli, about 35 kilometres (22 miles) east of Rome.\n[…]\nThe Trevi Fountain is depicted in the third movement, \"The Trevi Fountain at Noon\", of Ottorino Respighi's 1916 symphonic poem Fountains of Rome.\n[…]\nThe fountain has appeared in several films, including Roman Holiday (1953); Three Coins in the Fountain (1954); Federico Fellini's classic, La Dolce Vita (1960); Sabrina Goes to Rome (1998); and The Lizzie McGuire Movie (2003). In Federico Fellini's 1960 film La Dolce Vita, Anita Ekberg wades into the fountain with Marcello Mastroianni.\n[…]\nIn 1973, the Italian national postal service dedicated a postage stamp to the Trevi Fountain.\n[…]\nLego released a set based on Trevi Fountain on March 1, 2025.\n[…]\nRoman Bookshelf – Trevi Fountain – Views from the 18th and 19th centuries\n[…]\nTrevi Fountain Live Cam\n[…]\nTrevi Fountain Virtual 360° panorama and photo gallery.\n[…]\nTurismoroma: Poli Palace – Trevi fountain"
      },
      {
        "url": "https://en.wikipedia.org/wiki/La_Dolce_Vita",
        "situacao": "ok",
        "texto": "La Dolce Vita (Italian: [la ˈdoltʃe ˈviːta]; Italian for 'the sweet life' or 'the good life') is a 1960 satirical comedy-drama film directed by Federico Fellini and written by Fellini, Ennio Flaiano, Tullio Pinelli, and Brunello Rondi. The film stars Marcello Mastroianni as Marcello Rubini, a tabloid journalist who, over seven days and nights, journeys through the \"sweet life\" of Rome in a fruitle\n[…]\nFederico Fellini’s 1960 “La Dolce Vita\" is one of the key works of the modern cinema. A brilliantly conceived epic fable about a scandal reporter (Marcello Mastroianni) adrift in Rome’s high life, it introduced the term paparazzi into the vocabulary, and depicted, with a judicious mixture of satire and compassion, the glitter world of celebrity now avidly chronicled in supermarket tabloids.\n[…]\nIn Ettore Scola's movie We All Loved Each Other So Much (1974), the accidental meeting between former lovers Stefania Sandrelli and Nino Manfredi takes place during the filming of the Fontana di Trevi scene with Fellini and Mastroianni acting as themselves.\n[…]\n\"Tributes to Fellini in the \"Director's Cut\" of Cinema Paradiso (1988) include a helicopter suspending a statue of Jesus over the city and scenes in which the Trevi Fountain is used as a backdrop while Toto, the main character, grows up to be a famous film director.\n[…]\n(in Italian) Costa, Antonio (2010). Federico Fellini. 'La Dolce Vita'. Lindau: collana Universale film.\n[…]\n(in Italian) Fellini, Federico, and Joseph-Marie Lo Duca (1960). La Dolce Vita. Paris: Jean-Jacques Pauvert Editeur.\n[…]\nKezich, Tullio (2005). \"Federico Fellini and the Making of 'La Dolce Vita'\". in Cineaste, Volume 31, no. 1, 2005, pp. 8–14.\n[…]\n(in Italian) — (1960). 'La Dolce Vita' di Federico Fellini. Bologna: Cappelli editore, collana Fellini Federico: dal soggetto al Film, 1960.\n[…]\n(in Italian) — (1996). Su 'La Dolce Vita' con Federico Fellini. Venice: Marsilio."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fontana_di_Trevi",
        "situacao": "ok",
        "texto": "A Fontana di Trevi (em português Fontana di Trevi) é a maior (cerca de 26 metros de altura e 20 metros de largura) e mais ambiciosa construção de fontes barrocas da Itália e está localizada no rione Trevi, em Roma. A fonte está encostada na fachada do Palazzo Poli.\n[…]\nA fonte situava-se no cruzamento de três estradas (tre vie), marcando o ponto final do Acqua Vergine, um dos mais antigos aquedutos que abasteciam a cidade de Roma. No ano 19 a.C., supostamente ajudados por uma virgem, técnicos romanos localizaram uma fonte de água pura a pouco mais de 22 quilômetros da cidade (cena representada em escultura na própria fonte, atualmente).\n[…]\nA água desta fonte foi levada pelo menor aqueduto de Roma, diretamente para as termas de Marco Vipsânio Agripa e serviu a cidade por mais de 400 anos.\n[…]\nEm 2 de fevereiro de 2026, a prefeitura de Roma começou a cobrar taxa de turistas para visitar a fonte.\n[…]\nEstima-se que 3 000 euros sejam jogados na fonte todos os dias. Em 2016, cerca de € 1,4 milhão (US$ 1,5 milhão) foi jogado na fonte. O dinheiro foi usado para subsidiar um supermercado para os pobres de Roma; No entanto, há tentativas regulares de roubar moedas da fonte, mesmo que seja ilegal fazê-lo.\n[…]\nEm 1964, foi lançado o filme que leva seu nome Fontana di Trevi - filmado pelo diretor Carlo Campogalliani.\n[…]\nO monumento foi o cenário de uma das cenas mais famosas do cinema italiano: em La Dolce Vita de Federico Fellini, Anita Ekberg entra na água e convida Marcello Mastroianni a fazer o mesmo.\n[…]\nPrecedentemente, a fonte foi o cenário do filme estadunidense Three Coins in the Fountain, onde a fonte do título é a própria Fontana di Trevi.\n[…]\nEm Tototruffa 62, Totò tenta vender a fonte a um turista.\n[…]\n«Trevi Fountain». Virtual 360° panorama and photo gallery.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Edifício Dakota",
      "descricao": "Prédio residencial do século dezenove no Upper West Side de Manhattan, em frente ao Central Park."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em dezembro de 1980, na entrada do Edifício Dakota, onde morava, em Nova York, qual músico foi assassinado?",
    "resposta": "John Lennon",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Dakota",
      "https://en.wikipedia.org/wiki/Murder_of_John_Lennon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Dakota",
        "situacao": "ok",
        "texto": "The Dakota, also known as the Dakota Apartments, is a cooperative apartment building at 1 West 72nd Street on the Upper West Side of Manhattan in New York City, New York, US. The Dakota was constructed between 1880 and 1884 in the German Renaissance style and was designed by Henry Janeway Hardenbergh for businessman Edward Cabot Clark. The building was one of the first large developments on the Up\n[…]\nIn 1961, the Dakota's residents bought the building from the Clark family and converted it into a housing cooperative. The Dakota has historically been home to many artists, actors, and musicians, including John Lennon, who was murdered outside the building on December 8, 1980. The building remained a cooperative into the 21st century.\n[…]\nThe Dakota gained attention when John Lennon, a resident and former member of the rock band the Beatles, was shot dead outside the building on December 8, 1980. According to the Chicago Tribune, the Dakota became a makeshift memorial for Lennon, especially among fans of the Beatles. The murder also prompted concern among residents, who demanded more stringent security; all visitors were already required to pass through the security booth on 72nd Street.\n[…]\nThe Dakota's maintenance expenses were shared among fewer residents and tended to be much higher than at other nearby co-ops. For instance, Lennon's widow Yoko Ono paid a monthly fee of $12,566 for her 6,000 ft2 (560 m2) apartment in 1996, while a similarly-sized apartment at the nearby San Remo had a monthly maintenance cost of $6,000. The Dakota's board announced in 2002 that it planned to restore the interior courtyard, and it hired Higgins & Quasebarth as a consulting architect.\n[…]\nOn the Dakota's 50th anniversary, the New York Herald Tribune described the building as standing \"firmly on its unimpeachable foundations; somewhat shorter than its neighbors but immeasurably more impressive\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Murder_of_John_Lennon",
        "situacao": "ok",
        "texto": "On the night of 8 December 1980, English musician John Lennon, formerly of the Beatles, was fatally shot in the archway of The Dakota, his residence in Manhattan, New York City. The shooter, Mark David Chapman, was an American Beatles fanatic who was envious and enraged by Lennon's lifestyle. Chapman was also inspired by the fictional character Holden Caulfield from J. D. Salinger's novel The Catc\n[…]\nIn 2018, Ono created an artwork in John Lennon's memory, titled \"Sky\", for MTA Arts & Design. The artwork was installed during the renovation of the 72nd Street station on the New York City Subway (served by the B and ​C trains), outside the Dakota.\n[…]\nFenton Bresler, a barrister and journalist, raised the idea of CIA involvement in the murder in his 1990 book Who Killed John Lennon? Bresler alleges that Chapman may have been brainwashed by the CIA as an assassin, such as in The Manchurian Candidate, to \"silence\" Lennon before his potential re-emergence as a political leader in the 1980s.\n[…]\nSalvador Astrucia argued that forensic evidence proves Chapman did not commit the murder in his 2004 book Rethinking John Lennon's Assassination: The FBI's War on Rock Stars.\n[…]\nThe 2010 documentary The Day John Lennon Died suggests that Chapman was merely a \"patsy\" who never fired the fatal shots and instead alleges that Jose Perdomo, the doorman at the Dakota, a Cuban exile with links to the CIA and the Bay of Pigs invasion was in fact responsible for firing the shots that killed Lennon.\n[…]\nChristgau, Robert (22 December 1980). \"John Lennon, 1940–1980\". The Village Voice. Retrieved 18 May 2022 – via robertchristgau.com.\n[…]\n\"John Lennon's Death Lingers for Witnesses\". Fox News. Associated Press. 7 December 2005. Archived from the original on 26 October 2012.\n[…]\n\"CRIME FILE – Famous crime: Mark Chapman: The Assassination of John Lennon\". Crime Investigation Network."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Dakota",
        "situacao": "ok",
        "texto": "The Dakota, também conhecido como Apartamentos Dakota, é um edifício de apartamentos localizado no Upper West Side de Manhattan em Nova Iorque, Estados Unidos. Foi projetado pelo arquiteto Henry Janeway Hardenbergh para o empresário Edward Cabot Clark e foi um dos primeiros grandes empreendimentos no Upper West Side, permanecendo como o mais antigo edifício de apartamentos de luxo de Nova Iorque a\n[…]\nO edifício foi historicamente a residência de vários artistas, atores e músicos, incluindo John Lennon, que foi assassinado na entrada do Dakota em dezembro de 1980. O edifício continua como uma cooperativa até hoje.\n[…]\nO Dakota ganhou fama mundial quando o músico John Lennon, um morador e ex-integrante da banda The Beatles, foi assassinado na entrada do edifício em 8 de dezembro de 1980. Segundo Rogers Worthington do Chicago Tribune, o Dakota se tornou um memorial improvisado para Lennon, especialmente entre fãs dos Beatles.\n[…]\nO assassinato também gerou preocupação entre os moradores, que passaram a exigir uma segurança rigorosa; todos os visitantes já eram obrigados a passar por uma cabine de segurança na Rua 72. Os moradores preferiam evitar publicidade nos anos após a morte de Lennon. O conselho do Dakota rejeitou várias personalidades famosas que queriam ir morar no edifício. Nesta época, existiam 93 apartamentos e as plantas baixas originais tinham sido bastante modificadas.\n[…]\nThe Dakota foi projetado por Henry Janeway Hardenbergh. A construção envolveu vários empreiteiros, incluindo o pedreiro John L. Banta, encanador T. Brieu, fornecedor de ferro Post & McCord, carpinteiro J. L. Hamilton, fornecedores de alvenaria J. Gillis Se Son e Henry Wilson, e empreiteiro de marcenaria Pottier & Stymus.\n[…]\nHá poucos corredores públicos nos andares superiores porque o Dakota tem quatro entradas com seus próprios elevadores e escadas.\n[…]\nMedia relacionados com The Dakota no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Palácio Belvedere",
      "descricao": "Conjunto de palácios barrocos em Viena, na Áustria, hoje museu de arte austríaca."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Qual famoso quadro dourado de Gustav Klimt, que mostra um casal abraçado, está exposto no Palácio Belvedere, em Viena?",
    "resposta": "O Beijo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Belvedere,_Vienna",
      "https://en.wikipedia.org/wiki/The_Kiss_(Klimt)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Belvedere,_Vienna",
        "situacao": "ok",
        "texto": "The Belvedere is a historic building complex and art museum in Vienna, Austria. The complex consists of two Baroque palaces, the Upper and Lower Belvedere, together with the Orangery, the Palace Stables, and a formal Baroque garden. It is located in the city's third district, Landstraße, on the south-eastern edge of Vienna's historic centre.\n[…]\nThe Upper Belvedere appears on the Austrian 20-cent euro coin.\n[…]\nThe museum describes its collection as spanning Austrian art from the Middle Ages to the present in a global context. The permanent collection includes works by Gustav Klimt, Egon Schiele, Oskar Kokoschka, Helene Funke, Ferdinand Georg Waldmüller, Franz Xaver Messerschmidt, Claude Monet, Vincent van Gogh, and Auguste Rodin. The Belvedere holds an important collection of works by Gustav Klimt, including The Kiss.\n[…]\nIn 2006, Austria returned five paintings by Gustav Klimt from the Belvedere to the heirs of Ferdinand and Adele Bloch-Bauer, including Portrait of Adele Bloch-Bauer I.\n[…]\nAlso in 2006, the Austrian arbitration panel decided that Gustav Klimt's unfinished Portrait of Amalie Zuckerkandl should remain in the Belvedere. The decision attracted criticism because Amalie Zuckerkandl and her daughter were murdered in the Holocaust and because of unresolved questions concerning the painting's ownership history.\n[…]\nBelvedere 21\n[…]\nÖsterreichische Galerie Belvedere\n[…]\nSeeger, Ulrike (2004). Stadtpalais und Belvedere des Prinzen Eugen: Entstehung, Gestalt, Funktion und Bedeutung. Vienna: Böhlau. ISBN 9783205771906.\n[…]\nAurenhammer, Hans; Aurenhammer, Gertrude (1971). Das Belvedere in Wien: Bauwerk, Menschen, Geschichte. Vienna and Munich: Verlag Anton Schroll.\n[…]\nRollig, Stella; Huemer, Christian, eds. (2023). The Belvedere: 300 Years a Venue for Art. Berlin and Boston: De Gruyter. ISBN 9783111186313.\n[…]\nBelvedere at Google Arts & Culture"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Kiss_(Klimt)",
        "situacao": "ok",
        "texto": "The Kiss (German: Der Kuss) is an oil-on-canvas painting with added gold leaf, silver and platinum by the Austrian Symbolist painter Gustav Klimt. It was painted at some point in 1907 and 1908, during the height of what scholars call his \"Golden Period\". It was exhibited in 1908 under the title Liebespaar (the lovers) as stated in the catalogue of the exhibition.\n[…]\nGustav Klimt depicts the couple locked in an intimate embrace against a gold, flat background. The two figures are situated at the edge of a patch of flowery meadow that ends under the woman's exposed feet. The man wears a robe printed with geometric patterns and subtle swirls. He wears a crown of vines while the woman wears a crown of flowers. She is shown in a flowing dress with floral patterns.\n[…]\nThe Kiss was exhibited in 1908 in Vienna in the Kunstschau – the building created in collaboration by Josef Hoffmann, Gustav Klimt, Otto Prutscher, Koloman Moser and many others, to coincide with the celebrations in Vienna for the sixtieth anniversary of Emperor Francis Joseph I’s reign from 1 June to 16 November 1908.\n[…]\nList of paintings by Gustav Klimt\n[…]\nThe Art Story Contributors. \"Gustav Klimt Artist Overview and Analysis\". [Internet]. 2018. TheArtStory.org\n[…]\nChillida, Julio Vives. (June 2013) \"El significado iconográfico de El beso (los enamorados), de Gustav Klimt\", comunicación al primer Coup de Fouet Art nouveau International Congress, Barcelona. [1]\n[…]\nO'Connor, Anne-Marie (2012). The Lady in Gold, The Extraordinary Tale of Gustav Klimt's Masterpiece, Portrait of Adele Bloch-Bauer, Alfred A. Knopf, New York, ISBN 0-307-26564-1.\n[…]\nWeidinger, Alfred and Penck, Stefanie  (2013) Gustav Klimt \"The Kiss\". Berlin, Jovis Verla, ISBN 978-3-86859-310-5\n[…]\nGustav Klimt's The Kiss at Smarthistory\n[…]\nGustav Klimt at the Österreichische Galerie Belvedere"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pal%C3%A1cio_Belvedere",
        "situacao": "ok",
        "texto": "O Palácio Belvedere (Schloss Belvedere) é um palácio barroco construído para o príncipe Eugénio de Saboia no 3° distrito de Viena, a sudeste do centro da cidade. O complexo é dividido em duas partes: Belvedere Inferior e Belvedere Superior.\n[…]\nA partir de 1696, registos mostram que esteve empregado como arquitecto da corte em Viena. Além do Belvedere, as mais notáveis realizações de Hildebrandt incluem o Schloss Hof, o qual também foi encomendado pelo Príncipe Eugénio, o Palais Schwarzenberg (anteriormente conhecido como Palácio Mansfeld–Fondi), o Palais Kinsky, assim como toda a propriedade da Abadia de Göttweig, no Vale de Wachau.\n[…]\nGustav Klimt: Judith I (1901);\n[…]\nDevido à grande celebridade do palácio, o novo bairro (stadtviertel) adjacente à área do Belvedere, em construção à volta da Estação Central de Viena, no 10º Distrito de Viena, recebeu o nome de Bairro Belvedere (Quartier Belvedere).\n[…]\nPara ir ao Palácio Belvedere deve tomar-se o Metro de Viena. a estação mais próxima é a \"Südtiroler Platz\" (U1), mas também se pode sair nas estações \"Taubstummengasse\" (U1) e \"Karlsplatz\" (U1,U2 (final da linha U2) e U4), que também ficam mais ou menos próximas.\n[…]\nHelmut Nemec: Belvedere. Schloss und Park des Prinzen Eugen. ISBN 3210248710\n[…]\nUlrike Seeger, Gerbert Frodl: Das Sommerpalais des Prinzen Eugen Belvedere. Brandstätter, Viena 2007, ISBN 3902510978\n[…]\nFranz Weller: Die kaiserlichen Burgen und Schlösser in Wort und Bild Aufgrund von Quellenwerken dargestellt Hofburg zu Wien über Augarten, Belvedere, Prater ...Gödöllő, Ischl ...bis über Miramar sind alle kaiserlichen Schlösser erklärt dagelegt. k.k. Hof-Buchdruckerei, Viena 1880, ISBN 0003221717\n[…]\nPrinz Eugen und sein Belvedere. Österreichische Galerie, Viena 1963. ASIN B0000BHVFQ",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Catedral de Notre-Dame de Paris",
      "descricao": "Catedral gótica medieval na Île de la Cité, em Paris, atingida por um incêndio em 2019."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Qual personagem de um romance de Victor Hugo, o sineiro corcunda, vivia na Catedral de Notre-Dame de Paris?",
    "resposta": "Quasímodo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quasimodo",
      "https://en.wikipedia.org/wiki/The_Hunchback_of_Notre-Dame"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quasimodo",
        "situacao": "ok",
        "texto": "Quasimodo ( KWAH-zee-MOH-doh; from Quasimodo Sunday) is the titular protagonist of the French novel The Hunchback of Notre-Dame (1831) by Victor Hugo. Born with numerous deformities, most notably a hunched back, Quasimodo serves as the bell-ringer for Notre Dame cathedral in fifteenth century Paris. Although his appearance causes others to treat him cruelly, he ultimately finds sanctuary in an unl\n[…]\nLooked upon by the general populace of Paris as a monster, he believes that Frollo is the only one who cares for him, and frequently accompanies him when the Archdeacon walks out of Notre Dame. Frollo lusts after a beautiful Romani girl named Esmeralda, and enlists Quasimodo in trying to kidnap her.\n[…]\nIn Disney's 1996 animated film adaptation of The Hunchback of Notre Dame, Quasimodo is a very different character than in the novel. He was voiced by Tom Hulce and animated by James Baxter. Unlike in the novel, Quasimodo has two eyes, with his left one only partially covered. He is not deaf, and is capable of fluent speech. He has three anthropomorphic gargoyle friends named Victor, Hugo, and Laverne.\n[…]\nIn 2014 at the La Jolla Playhouse, Disney premiered a new adaptation of The Hunchback of Notre Dame. Like the 1999 German Adaptation, the new adaptation was based on movie but it restored some of the themes, characters, and ending of Hugo's original book. It later transferred to PaperMill Playhouse in 2015. The musical also establishes Quasimodo as Frollo's nephew - Jehan runs off with a Gypsy girl, Florika, after being expelled from Notre Dame's sanctuary.\n[…]\nIn August 2010, Adrian Glew, a Tate archivist, announced evidence for a real-life Quasimodo, a \"humpbacked [stone] carver\" who worked at Notre Dame during the 1820s. The evidence is contained in the memoirs of Henry Sibson, a 19th-century British sculptor who worked at Notre Dame at around the same time Hugo wrote the novel."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Hunchback_of_Notre-Dame",
        "situacao": "ok",
        "texto": "The Hunchback of Notre-Dame (French: Notre-Dame de Paris, lit. 'Our Lady of Paris', originally titled Notre-Dame de Paris. 1482) is a French Gothic novel by Victor Hugo, published in 1831. The title refers to the Notre-Dame Cathedral, which features prominently throughout the novel. It focuses on the unfortunate story of Quasimodo, the Romani street dancer Esmeralda, and Quasimodo's guardian the A\n[…]\nThe novel's French title, Notre-Dame de Paris, refers to Notre-Dame Cathedral. Frederic Shoberl's 1833 English translation was published as The Hunchback of Notre-Dame. This became the generally used title in English, referring to Quasimodo, Notre-Dame's bell-ringer. Victor Hugo was allegedly upset that this translation placed focus on only one character, seeing his novel as a broader plea for the preservation of France's gothic architecture.\n[…]\nIn 1482 Paris, during the reign of Louis XI, sixteen-year-old Roma dancer Esmeralda is the romantic and sexual interest of many men, including Captain Phoebus de Chateaupers; poet Pierre Gringoire; the deformed cathedral bell-ringer Quasimodo, and his guardian Archdeacon Claude Frollo. Frollo is torn between his obsessive lust for Esmeralda and the rules of Notre-Dame Cathedral. He orders Quasimodo to kidnap her, but Quasimodo is captured by Phoebus and his guards.\n[…]\nQuasimodo d'El Paris, a 1999 parody film\n[…]\nThe Hunchback of Notre Dame, a 1976 television film starring Warren Clarke as Quasimodo, Michelle Newell as Esmeralda, and Kenneth Haigh as Frollo; directed by Alan Cooke\n[…]\nThe Hunchback of Notre Dame, a 1982 British-American television film starring Anthony Hopkins as Quasimodo, Lesley-Anne Down as Esmeralda and Derek Jacobi as Frollo, directed by Michael Tuchner and Alan Hume, and produced by Norman Rosemont and Malcolm J. Christopher\n[…]\nNotre Dame de Paris Harvard Classics\n[…]\nNotre-Dame de Paris at Wikisource (HTML) (in French)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quasimodo",
        "situacao": "ok",
        "texto": "Quasimodo é o personagem central do livro Notre-Dame de Paris, da autoria de Victor Hugo, publicado em 1831. Um corcunda de nascença, Quasimodo habita o campanário da Catedral de Notre-Dame de Paris, afastado da sociedade e temido pelos habitantes locais. O personagem foi adaptado inúmeras vezes, principalmente no cinema. Em 1996, a Walt Disney lançou a versão animada do romance, com variações no \n[…]\nQuasimodo nasceu com uma notável deformação física, descrita por Victor Hugo como \"uma enorme verruga que cobre seu olho esquerdo\" e \"uma grande corcunda\". Abandonado ainda criança, num dia de domingo  de quasímodo, isto é, o domingo seguinte ao domingo de Páscoa (também chamado 'pascoela'), foi recolhido pelo arcediago Claude Frollo, que o designou para ser sineiro da Catedral de Notre-Dame de Paris. Devido ao alto som dos sinos da Catedral, Quasimodo acaba por ficar surdo.\n[…]\nVisto como um monstro pela população de Paris, Quasimodo mais tarde apaixona-se pela cigana Esmeralda e a salva quando ela se envolve em um assassinato.\n[…]\nNo filme de 1996, produzido pela Walt Disney Pictures, Quasimodo é muito diferente da versão original de Victor Hugo. As diferenças são tanto na forma física como na história do personagem. No livro, Quasimodo foi abandonado pelos pais. Nesse filme, Quasimodo foi tomado de sua mãe e criado por Claude Frollo, que ameaçado pelo pároco, decide o esconder na catedral;\n[…]\nNesta versão, Quasimodo é fiel a Frollo, mas com o incentivo do Capitão Phoebus e apaixonado por Esmeralda, torna-se rebelde e passa a buscar a independência. Ao lado de Esmeralda, Quasimodo descobre um mundo totalmente diferente daquele que Frollo sugeria.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Torre Eiffel",
      "descricao": "Torre de ferro forjado no Campo de Marte, em Paris, inaugurada em 1889."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Pela licença original, a Torre Eiffel deveria ficar de pé por quantos anos antes de ser desmontada?",
    "resposta": "Vinte anos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eiffel_Tower",
      "https://pt.wikipedia.org/wiki/Torre_Eiffel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eiffel_Tower",
        "situacao": "ok",
        "texto": "The Eiffel Tower (  EYE-fəl; French: Tour Eiffel [tuʁ ɛfɛl] ) is a lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1889.\n[…]\nThe first floor is publicly accessible by lift or stairs. When originally built, the first level contained three restaurants—one French, one Russian and one Flemish—and an \"Anglo-American Bar\". After the exposition closed, the Flemish restaurant was converted to a 250-seat theatre. Today there is the Le 58 Tour Eiffel restaurant and other facilities.\n[…]\nThe Société d'Exploitation de la Tour Eiffel (SETE) now considers any illumination of the tower to be a separate work of art that falls under copyright. As a result, the SNTE alleges that it is illegal to publish contemporary photographs of the lit tower at night without permission in France and some other countries for commercial use.\n[…]\nThe imposition of copyright has been controversial. The Director of Documentation for what was then called the Société Nouvelle d'exploitation de la Tour Eiffel (SNTE), Stéphane Dieu, commented in 2005: \"It is really just a way to manage commercial use of the image, so that it isn't used in ways [of which] we don't approve\". SNTE made over €1 million from copyright fees in 2002.\n[…]\nList of the 72 names on the Eiffel Tower\n[…]\nFrémy, Dominique (1989). Quid de la tour Eiffel. R. Laffont. ISBN 978-2-221-06488-7.\n[…]\nMusée d'Orsay (1989). 1889: la Tour Eiffel et l'Exposition Universelle. Editions de la Réunion des Musées Nationaux, Ministère de la Culture, de la Communication, des Grands Travaux et du Bicentenaire. ISBN 978-2-7118-2244-7.\n[…]\nEiffel Tower at Structurae\n[…]\nList of radio services using today Eiffel Tower"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torre_Eiffel",
        "situacao": "ok",
        "texto": "Torre Eiffel (em francês:  Tour Eiffel, /tuʀ ɛfɛl/) é uma torre de treliça de ferro forjado no Champ de Mars, em Paris, França. Tem o nome do engenheiro Gustave Eiffel, cuja empresa projetou e construiu a torre.\n[…]\nEiffel tinha uma licença para a torre permanecer por 20 anos. A estrutura deveria ter sido desmantelada em 1909, quando sua propriedade seria revertida para a cidade de Paris.\n[…]\nA cidade havia planejado derrubá-la (parte das regras originais do concurso para projetar uma torre era que ela deveria ser fácil de desmontar), mas como a torre provou ser valiosa para a radiotelegrafia, ela foi autorizada a permanecer após a expiração do prazo e, a partir de 1910, também se tornou parte do International Time Service.\n[…]\nA Torre Eiffel oscila até 9 cm com o vento.\n[…]\nA torre é pintada em três tons: mais claro na parte superior, ficando progressivamente mais escuro na parte inferior para complementar o céu parisiense. Originalmente era marrom avermelhado; isso mudou em 1968 para uma cor de bronze conhecida como \"marrom Torre Eiffel\".\n[…]\nA torre tem dois restaurantes: Le 58 Tour Eiffel no primeiro nível, e Le Jules Verne, um restaurante gourmet com elevador próprio no segundo nível. Este restaurante tem uma estrela no Guia Michelin. Foi dirigido pelo chef Alain Ducasse de 2007 a 2017. A partir de maio de 2019, será administrado pelo chef Frédéric Anton.\n[…]\nA estação de metrô de Paris mais próxima é Bir-Hakeim e a estação RER mais próxima é Champ de Mars-Tour Eiffel.\n[…]\nA Torre de Tóquio no Japão, construída como torre de comunicações em 1958, também foi inspirada na Torre Eiffel.\n[…]\nTorre Eiffel — Página oficial (em francês e em inglês)\n[…]\nCâmaras web na Torre Eiffel"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Sagrada Família",
      "descricao": "Basílica projetada por Antoni Gaudí em Barcelona, ainda em construção por mais de um século."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quando estiver completa, a basílica da Sagrada Família, projetada por Gaudí em Barcelona, terá quantas torres?",
    "resposta": "Dezoito",
    "distratores": [
      "Doze",
      "Quatorze",
      "Vinte e quatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia",
        "situacao": "ok",
        "texto": "Basílica i Temple Expiatori de la Sagrada Família, or simply Sagrada Família, is a Catholic Basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by the Catalan architect Antoni Gaudí, it is the tallest church\n[…]\nin the world. On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a basilica. In 2005, parts of the Sagrada Família (Nativity façade and Crypt) were declared a UNESCO World Heritage Site, under \"Works of Antoni Gaudí\".\n[…]\nAntoni Gaudí\n[…]\nIn 2005, UNESCO extended the inscription for Works of Antoni Gaudí – No 320 bis to include four additional buildings in Barcelona, with item 320-005 listed as two specific sections of Sagrada Família: the Crypt and the Nativity façade.\n[…]\nThe Archdiocese of Barcelona holds an international mass at the Basilica of the Sagrada Família every Sunday and on holy days of obligation.\n[…]\nIn August 2017, Barcelona was the target of a series of terrorist attacks with Islamist motivations, commonly referred to as the La Rambla attacks. Investigations later revealed that one of the original targets was the Sagrada Família basilica. The attackers had planned to detonate a van loaded with gas canisters at the site during peak visiting hours to cause maximum damage.\n[…]\nGiven the Sagrada Família was built elevated, the main entrance (Glory Façade) stands 5 metres (16 ft) taller than the street (C/ Mallorca). Although Gaudí's plans are disputed (given that he first designed star-shaped avenues leading to the basilica), the Construction Board defends that Gaudi's last plans were to build a long 57 metres (187 ft) stairway passing over Mallorca street and leading into a 2-block avenue from the basilica to Diagonal Avenue.\n[…]\nSagrada Família (Barcelona Metro)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Templo_Expiat%C3%B3rio_da_Sagrada_Fam%C3%ADlia",
        "situacao": "ok",
        "texto": "Templo Expiatório da Sagrada Família (em catalão: Temple Expiatori de la Sagrada Família), também conhecido simplesmente como Sagrada Família, é um grande templo católico da cidade de Barcelona, Catalunha, Espanha, desenhado pelo arquiteto catalão Antoni Gaudí, e considerado por muitos críticos como a sua obra-prima e expoente da arquitetura modernista catalã.\n[…]\nEm 1905 Gaudí realizou um projeto para englobar a Sagrada Família dentro do Plano Jaussely, o novo projeto de alargamento barcelonês: concebeu situar o templo dentro de uma zona ajardinada em forma de estrela octogonal, que teria proporcionado uma excelente visão do templo a partir de todas as zonas circundantes. Finalmente, devido ao custo dos terrenos, reduziu o projeto a uma estrela de quatro pontas, que permitia uma ampla visão de todos os vértices.\n[…]\nIgualmente, as torres da Sagrada Família estavam inspiradas num projeto não realizado para umas \"Missões Católicas Franciscanas\" em Tânger (1892), encarregado pelo marquês de Comillas.\n[…]\nO templo terá dezoito torres, quatro em cada uma das três portas fazendo um total de doze pelos apóstolos, no centro a torre do zimbório dedicada a Jesus Cristo, de 170 m de altura, outras quatro dos evangelistas em torno da torre-zimbório, e sobre a abside outro zimbório dedicado à Virgem Maria. As torres têm perfil parabólico, e dispõem de umas escadas helicoidais que deixam a parte central oca para situar ali uns sinos tubulares dispostos como carrilhão.\n[…]\nGaudí concebeu um templo de grande verticalidade, para que fosse visível a partir de qualquer ponto de Barcelona e se destacasse sobre a mancha de edifícios. Para isso dotou o Templo da Sagrada Família com 18 torres, 12 dos apóstolos, 4 dos evangelistas, e as torres dos zimbórios dedicados a Jesus e à Virgem Maria.\n[…]\nOs túmulos de Josep Maria Bocabella e de Antoni Gaudí encontram-se na cripta.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Catedral de Brasília",
      "descricao": "Catedral Metropolitana de Nossa Senhora Aparecida, projetada por Oscar Niemeyer e inaugurada em 1970 em Brasília."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Projetada por Oscar Niemeyer, a Catedral de Brasília tem a estrutura formada por quantos pilares curvos de concreto?",
    "resposta": "Dezesseis",
    "distratores": [
      "Oito",
      "Doze",
      "Vinte"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Catedral_Metropolitana_de_Bras%C3%ADlia",
      "https://en.wikipedia.org/wiki/Cathedral_of_Bras%C3%ADlia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_Metropolitana_de_Bras%C3%ADlia",
        "situacao": "ok",
        "texto": "Catedral Metropolitana - Nossa Senhora Aparecida ou simplesmente Catedral de Brasília, é um templo católico brasileiro, na qual se encontra a cátedra da Arquidiocese de Brasília, localizada na capital federal, ao sul da S1, no Eixo Monumental, região da Esplanada dos Ministérios. A cerimônia de posse do presidente do Brasil tradicionalmente costuma se iniciar nesta catedral.\n[…]\nOs colaboradores habituais do arquiteto também contribuíram para a obra. O complexo projeto estrutural foi feito pelo engenheiro Joaquim Cardozo, que também calculou outras obras desafiadoras da nova cidade, como o Palácio do Congresso Nacional. De uma área de setenta metros de diâmetro, se elevam dezesseis colunas de concreto com noventa toneladas cada (pilares de seção parabólica), num formato hiperboloide.\n[…]\nUma vez definido o local, o arquiteto Oscar Niemeyer, segundo o próprio, se inspirou nos antigos mestres que construíram catedrais com cúpulas gigantes usando os recursos estruturais existentes na época. Tendo ele o concreto armado à disposição, idealizou uma obra em que a estrutura parece ascender aos céus, sendo formalmente simples, compacta e fazendo dos pilares estruturantes os protagonistas. Ele baseou o desenho da catedral numa estrutura hiperboloide.\n[…]\nO projeto estrutural do engenheiro Joaquim Cardozo reduziu o número de pilares para dezesseis, com bases delgadas e, na parte superior, uma laje posta um tanto mais abaixo do previsto. O engenheiro também calculou o efeito de cargas de vento sobre os vitrais e colunas, um cálculo avançado para a época.\n[…]\nA Catedral de Brasília, oficialmente a Catedral Metropolitana Nossa Senhora Aparecida, dedicada à Virgem Maria, sob o título de Nossa Senhora de Aparecida, proclamada pela Igreja como Rainha e Padroeira do Brasil, foi concebida pelo arquiteto Oscar Niemeyer, com projeto estrutural do engenheiro Joaquim Cardozo."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cathedral_of_Bras%C3%ADlia",
        "situacao": "ok",
        "texto": "The Cathedral of Brasília (Portuguese: Catedral Metropolitana de Brasília, \"Metropolitan Cathedral of Brasília\") is the Roman Catholic cathedral serving Brasília, Brazil, and serves as the seat of the Archdiocese of Brasília. It was designed by Brazilian architect Oscar Niemeyer and engineered by Brazilian structural engineer Joaquim Cardozo, and was completed and dedicated on May 31, 1970.\n[…]\nThe cathedral is a hyperboloid structure constructed from 16 concrete columns weighing 90 tons each.\n[…]\nThe Cathedral of Brasília, officially the Metropolitan Cathedral of Our Lady of Aparecida (Catedral Metropolitana Nossa Senhora Aparecida), dedicated to the Blessed Virgin Mary under her title of Our Lady of Aparecida, proclaimed by the Church as Queen and Patroness of Brazil, was designed by the architect Oscar Niemeyer and projected by the structural engineer Joaquim Cardozo.\n[…]\nCoinciding with the 50th anniversary of Brasília, major renovations were begun on April 21, 2012 to update and repair the building and infrastructure, and address issues with the roof. The exterior glazing is being replaced, and the original stained glass designed by Marianne Peretti (which used hand made glass and thus varied widely in thickness) is being replaced by uniform glass cut and assembled in Brazil from plates manufactured in Germany.\n[…]\nIn addition to the roof repairs, all marble surfaces will be polished, concrete repaired and painted, the angels in the nave will be cleaned and re-mounted, and the bell mechanisms will be replaced. The cathedral will be open to the public during renovation.\n[…]\n15. Mayer, R. A linguagem de Oscar Niemeyer. Masters dissertation. Federal University of Rio Grande do Sul, Brazil, 2003. Available in: https://www.lume.ufrgs.br/handle/10183/6693\n[…]\nPhoto 360° Cathedral of Brasília - GUIABSB (most of roof glass has been restored)"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Mesquita Azul",
      "descricao": "Mesquita do Sultão Ahmed, construída no início do século dezessete em Istambul, na Turquia, decorada com azulejos azuis."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Construída no início do século dezessete, a Mesquita Azul, em Istambul, tem quantos minaretes?",
    "resposta": "Seis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sultan_Ahmed_Mosque"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sultan_Ahmed_Mosque",
        "situacao": "ok",
        "texto": "The Sultan Ahmed Mosque (Turkish: Sultanahmet Camii), popularly known as the Blue Mosque, is an Ottoman-era historical imperial mosque located in Istanbul, Turkey. It was constructed between 1609 and 1617 during the rule of Ahmed I. It attracts a large number of tourists and is one of the most iconic and popular monuments of Ottoman architecture.\n[…]\nAfter the Peace of Zsitvatorok, seen as a blow to Ottoman prestige, Sultan Ahmed I decided to build a large mosque in Istanbul in the hope of soliciting God's favour. He was the first sultan to build an imperial mosque since Selim II (d. 1574), as both Murad III and Mehmed III before him had not constructed their own.\n[…]\nDuring excavations in the early 20th century, some of the ancient seats were discovered in the mosque's courtyard. Given the mosque's location, size, and number of minarets, it is probable that Sultan Ahmed intended to create a monument that rivalled or surpassed the Hagia Sophia.\n[…]\nDespite the opposition, the sultan went ahead with the project. Construction started in 1609 and completed in 1617, when the opening ceremony was held, though the year 1616 is mentioned on some of the mosque's inscriptions. Ahmed I died around the same time or very soon afterwards in 1617.\n[…]\nIn the end, the mosque's grandeur, its luxurious decoration, and the elaborate public ceremonies that Ahmed I organized to celebrate the project appear to have swayed public opinion and overcome the initial controversy over its construction. It became one of the most popular mosques in the city. The mosque has left a major mark on the city and has given its name to the surrounding neighbourhood, now known as Sultanahmet.\n[…]\nOn the outside, the mosque has six minarets, ablutions facilities, and a large courtyard preceding the prayer hall.\n[…]\nList of mosques in Istanbul\n[…]\nÇamlıca Mosque\n[…]\nShah Mosque"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mesquita_Azul",
        "situacao": "ok",
        "texto": "A Mesquita do Sultão Ahmed (em turco: Sultanahmet Camii), também conhecida como Mesquita Azul, é uma mesquita otomana de Istambul, Turquia. Foi construída entre 1609 e 1616 e está situada na Praça Sultanahmet, no distrito de Fatih, em frente da Basílica de Santa Sofia, da qual se encontra separada por um espaço ajardinado. É uma das 5 mesquitas da Turquia que possui seis minaretes.\n[…]\nA Mesquita Azul é um triunfo em harmonia, proporção e elegância. Construída em um estilo clássico otomano, o seu magnífico exterior não faz sombra a seu suntuoso interior. Uma verdadeira sinfonia de belos azulejos azuis de İznik dão a este espaço uma atmosfera muito especial. A mesquita ocupa uma parte da área outrora ocupada pelo Grande Palácio de Constantinopla, a residência dos imperadores bizantinos entre 330 e 1081.\n[…]\nEm 1606 o sultão Amade I quis construir uma mesquita maior, mais imponente e mais bonita do que Santa Sofia. O edifício tem 43 metros de altura.\n[…]\nAs mesquitas geralmente eram construídas com um intuito de serviço público. A  külliye da Mesquita Azul inclui ou incluiu  uma madraça, um hamame, uma cozinha que fornecia sopa aos pobres e lojas (o Bazar Arasta), cujas rendas se destinam a financiar o complexo.\n[…]\nA mesquita foi revestida com azulejos sobretudo azuis e possui ricos vitrais também do mesmo tom. Não há figuras no interior da mesquita pois os muçulmanos não cultuam imagens. Ao entrar na mesquita é necessário tirar os sapatos. Calções, bermudas, minissaias ou camisetas sem mangas não são recomendados. Funcionários da mesquita fornecem uma espécie de canga para cobrir as partes do corpo que segundo as regras islâmicas não devem ser ser expostas num espaço sagrado.\n[…]\nGuia da Mesquita Azul. www.turismogrecia.info",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "London Eye",
      "descricao": "Roda-gigante de observação à margem sul do rio Tâmisa, em Londres, inaugurada na virada do milênio."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A roda-gigante London Eye, à beira do Tâmisa, tem uma cápsula para cada distrito municipal de Londres. Quantas cápsulas são?",
    "resposta": "Trinta e duas",
    "distratores": [
      "Vinte e quatro",
      "Vinte e oito",
      "Quarenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/London_Eye"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/London_Eye",
        "situacao": "ok",
        "texto": "The London Eye, originally the Millennium Wheel, is a cantilevered observation wheel on the South Bank of the River Thames in London. It is the world's tallest cantilevered observation wheel, and the most popular paid tourist attraction in the United Kingdom with more than three million visitors annually. It has been featured numerous times in popular culture.\n[…]\nThe wheel's 32 sealed and air-conditioned ovoidal passenger capsules, designed and supplied by Poma, are attached to the external circumference of the wheel and rotated by electric motors. The capsules are numbered from 1 to 33, excluding number 13 for superstitious reasons. Each of the 10-tonne (11-short-ton) capsules represents one of the London boroughs, and holds up to 25 people, who are free to walk around inside the capsule, though seating is provided.\n[…]\nIn March 2020, the London Eye celebrated its 20th birthday by turning several of its capsules into experiences themed around London. The experiences included a pub in a capsule, a West End theatre capsule and a garden party with flower arrangements to represent the eight London Royal Parks.\n[…]\nEDF Energy became the sponsor in 2011, reportedly paying about £2.5 million a year. The deal coincided with its sponsorship of the London 2012 Olympic Games. A capsule was repainted bright orange to match the company's branding, but local councillors refused consent and requested it be restored to its original appearance.\n[…]\nThe structure serves as the focal point for London’s New Year’s Eve celebrations; each year more than 2,000 fireworks are launched from the wheel itself during the televised display.\n[…]\nConnection with National Rail services is made at London Waterloo station and London Waterloo East station.\n[…]\nLondon River Services operated by Thames Clippers and City Cruises stop at the London Eye Pier.\n[…]\nLondon Eye at Structurae"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/London_Eye",
        "situacao": "ok",
        "texto": "A London Eye, \"Olho de Londres\" (em português), também conhecida como Millennium Wheel (Roda do Milênio), é uma roda-gigante de observação, com 135 metros de altura. Situada na cidade de Londres, da Inglaterra, foi inaugurada na passagem entre o dia 31 de dezembro de 1999 e 1 de janeiro de 2000 e é um dos pontos turísticos mais disputados da cidade.\n[…]\nConsiderando que as ruas de Londres são demasiado estreitas e que seria impossível mover uma roda-gigante de 135 metros de diâmetro rio acima, foi decidido que ela seria construída no próprio Tâmisa, sendo suspendida depois. Todo o material usado viria por balsas. Apesar de ser um ícone londrino, muito pouco da London Eye é de fato inglês. As partes da roda foram fabricadas na Holanda, as cabines são dos Alpes Franceses, e as janelas foram produzidas em Veneza.\n[…]\nTodo o material subiu o rio até chegar ao lugar onde iria ser montada a roda. Em setembro de 1999, ela já estava pronta, e então iria começar o trabalho de 16 horas até suspender as 1.700 toneladas da London Eye. Mas, contra todas as expectativas, um cabo se rompeu. O novo milênio se aproximava e a mídia já chamava o projeto de Wheel of Misfortune (Roda do Infortúnio). Levou mais um mês e 10 dias até que ela estivesse \"em pé\".\n[…]\nMas isso não impediu que a roda girasse sem passageiros. Nos últimos minutos de 1999, Tony Blair apertou um botão, um Concorde voou sobre o céu de Londres e os fogos foram lançados. O novo milênio já tinha chegado, e com ele a London Eye.\n[…]\nNo primeiro dia de fevereiro de 2000, o público finalmente teve a chance de entrar na London Eye. O tempo estava essencialmente britânico, com muita neblina, mas isso não impediu os londrinos de experimentar seu novo ponto turístico. A mais nova roda-gigante de Londres provou ser um sucesso imediato.\n[…]\nAs 32 cápsulas representam os 32 distritos de Londres.\n[…]\nRoda-gigante",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Puerta del Sol",
      "descricao": "Praça central de Madri, na Espanha, com o relógio cujas badaladas marcam a virada do ano no país."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na virada do ano, os espanhóis acompanham as badaladas do relógio da Puerta del Sol, em Madri, comendo quantas uvas?",
    "resposta": "Doze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Puerta_del_Sol",
      "https://en.wikipedia.org/wiki/Twelve_Grapes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Puerta_del_Sol",
        "situacao": "ok",
        "texto": "The Puerta del Sol (Spanish: [ˈpweɾta ðel ˈsol], English: \"Gate of the Sun\") is a public square in Madrid, one of the best known and busiest places in the city. This is the centre (Km 0) of the radial network of Spanish roads. The square also contains the famous clock whose bells mark the traditional eating of the Twelve Grapes and the beginning of a new year.\n[…]\nThe Puerta del Sol originated as one of the gates in the city wall that surrounded Madrid in the 15th century. Outside the wall, medieval suburbs began to grow around the Christian Wall of the 12th century. The name of the gate came from the rising sun which decorated the entry, since the gate was oriented to the east.\n[…]\nThe Puerta del Sol contains a number of well known sights both domestically and internationally associated with Spain. On the south side, the old Post Office was the headquarters of the Ministry of Interior and State Security in Francoist Spain. The basement of the DGS (Spanish: Dirección General de Seguridad, lit. 'General Directorate of Security') was infamous for being a place where dissidents to the regime were subjected to torture.\n[…]\nThe Puerta is located in the very heart of Madrid. It serves as the kilometre zero from which all radial roads in Spain are measured. This is demonstrated by a plaque on the floor of the square, marking the exact point of Km.0. This was established in 1857, setting six major radial roads, clockwise:\n[…]\nThe old plaque was replaced in 2009, as it had become faded after years of foot traffic. It is also the reference for street numbers in Madrid, which begin at the street-end that is closest to Puerta del Sol.\n[…]\nThe new station connects the Puerta to Madrid's commuter rail system and, by extension, to Spain's railroads via direct connections to Atocha and Chamartín railway stations [1].\n[…]\nMedia related to Puerta del Sol at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Twelve_Grapes",
        "situacao": "ok",
        "texto": "The Twelve Grapes (Spanish: las doce uvas (de la suerte), lit. 'the twelve grapes (of luck)') is a Spanish tradition that consists of eating a grape with each of the twelve clock bell strikes at midnight of 31 December to welcome the New Year. Each grape and clock bell strike represents each of the coming twelve months.\n[…]\nThere are two types of places where people gather to eat the grapes: at home with family members after Nochevieja dinner, or in the main squares around the country. The most famous is where the tradition started, the Puerta del Sol in Madrid.\n[…]\nThe Twelve Grapes are closely related to the time ball and clock of the Royal House of the Post Office in Puerta del Sol, from where the change of year is broadcast on all major national television networks and radio stations, with television broadcasting beginning in 1962 on Televisión Española."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Porta_do_Sol_%28Madrid%29",
        "situacao": "ok",
        "texto": "A Puerta del Sol é um dos locais mais famosos e concorridos da cidade espanhola de Madrid. É neste local que se encontra desde 1950, o quilómetro zero das estradas espanholas. O edifício mais antigo da Puerta del Sol é a Real Casa de Correos e nele destaca-se o relógio da torre que foi construído e doado no séc. XIX por José Rodriguez de Losada, e que faz tradicionalmente a contagem decrescente pa\n[…]\nA Puerta del Sol foi nas suas origens, um dos acessos do muro que rodeava Madrid no século XV. Este muro incluía no seu perímetro os arredores medievais que tinham crescido extramuros, à volta da muralha cristã do século XII. O nome da porta provém de um sol que adornava a entrada, colocado ali pelo facto de a porta estar orientada a levante (Este). Entre os edifícios que a tornavam uma zona de prestígio nos seus primórdios encontram-se a Iglesia del Buen Suceso e o Convento de São Felipe.\n[…]\nAinda que desde o século XVII ao século XIX a porta tinha importância como local de encontro (aqui podíamos encontrar um dos locais mais importantes para as pessoas se reunirem e falarem da “villa” desde o Século de Ouro Espanhol, as famosas escadarias de São Felipe), não era uma praça bem definida, como a Plaza Maior, e ocupava metade do atual espaço.\n[…]\nA Real Casa de Correos foi construída pelo arquiteto francês Jaime Marquet entre 1766 e 1768; a mesma foi posteriormente Ministerio de la Gobernación (Interior) e a Direción General de Securidad do estado espanhol durante a ditadura franquista e, atualmente, é a sede da Presidência da Comunidade Autónoma de Madrid. Será esta Real Casa de Correos que iniciará as bases urbanísticas daquilo que é hoje a Puerta del Sol e da sua crescente importância como ponto central de Madrid.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Memorial de Lincoln",
      "descricao": "Memorial nacional em forma de templo clássico em Washington, D.C., em homenagem a Abraham Lincoln."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A colunata do Memorial de Lincoln, em Washington, tem uma coluna para cada estado do país na época da morte do presidente. Quantas são?",
    "resposta": "36",
    "distratores": [
      "13",
      "48",
      "50"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lincoln_Memorial"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lincoln_Memorial",
        "situacao": "ok",
        "texto": "The Lincoln Memorial is  a U.S. national memorial honoring Abraham Lincoln, the 16th president of the United States, located on the western end of the National Mall of Washington, D.C. The memorial is built in a neoclassical style in the form of a classical temple. The memorial's architect was Henry Bacon. In 1920, Daniel Chester French designed the large interior Abraham Lincoln statue, which was\n[…]\nThe exterior of the Memorial echoes a classic Greek temple and features Yule marble quarried from Colorado. The structure measures 189.7 by 118.5 feet (57.8 by 36.1 m) and is 99 feet (30 m) tall. It is surrounded by a peristyle of 36 fluted Doric columns, one for each of the 36 states in the Union at the time of Lincoln's death, and two columns in-antis at the entrance behind the colonnade. The columns stand 44 feet (13 m) tall with a base diameter of 7.5 feet (2.3 m).\n[…]\nAbove the colonnade, inscribed on the frieze, are the names of the 36 states in the Union at the time of Lincoln's death and the dates in which they entered the Union. Their names are separated by double wreath medallions in bas-relief. The cornice is composed of a carved scroll regularly interspersed with projecting lions' heads and ornamented with palmetto cresting along the upper edge.\n[…]\nThe Memorial is replete with symbolic elements. The 36 columns represent the states of the Union at the time of Lincoln's death; the 48 stone festoons above the columns represent the 48 states in 1922. Inside, each inscription is surmounted by a 60-by-12-foot (18.3 by 3.7 m) mural by Jules Guérin portraying principles seen as evident in Lincoln's life: Freedom, Liberty, Morality, Justice, and the Law on the south wall; Unity, Fraternity, and Charity on the north.\n[…]\nLincoln Memorial Panoramic Tour\n[…]\nOther Proposed Designs for the Lincoln Memorial\n[…]\nDesigning the Lincoln Memorial 2009–2010 exhibit at the National Gallery of Art"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lincoln_Memorial",
        "situacao": "ok",
        "texto": "O Lincoln Memorial é um monumento localizado em Washington, D.C., Estados Unidos, em homenagem ao 16.º presidente estadunidense Abraham Lincoln. O monumento foi concluído em 1922 e arquitetado por Henry Bacon; o escultor foi Daniel Chester French e o pintor dos murais internos foi Jules Guerin. Está aberto para visitação pública 24 horas por dia, e recebe cerca de 6 milhões de visitantes por ano.\n[…]\nEm agosto de 1983, uma multidão reuniu-se novamente no Memorial em comemoração ao 20.º aniversário da Marcha sobre Washington.\n[…]\nO exterior do Lincoln Memorial evoca um templo grego clássico revestido em mármore extraído na região do Vale de Yule Creek, no estado do Colorado. A estrutura possui 57,8 por 36,1 metros de área e 30 metros de altura. O edifício é cercado por um peristilo de 36 colunas dóricas caneladas representativas de cada um dos 36 estados da União à época da morte de Lincoln, e duas colunas em antas na entrada atrás da colunata. As colunas têm 13 metros de altura com um diâmetro de base de 2,3 metros.\n[…]\nAcima da colunata, inscritos no friso, estão os nomes dos 36 estados da União na época da morte de Lincoln e as datas em que eles entraram na União. Seus nomes são separados por medalhões de coroa dupla em baixo-relevo. A cornija é composta por um pergaminho esculpido regularmente intercalado com cabeças de leões e ornamentado com cristas de palmeiras ao longo da borda superior.\n[…]\nO interior do memorial é decorado com inúmeros elementos simbólicos. As 36 colunas representam os estados da União na época da morte de Lincoln; os 48 festões de pedra acima das colunas representam os 48 estados em 1922. No interior, cada inscrição é encimada por um mural de 18 metros de Jules Guerin retratando princípios vistos como evidentes na vida de Lincoln: Liberdade, Moralidade, Justiça e Lei na parede sul; União, Fraternidade e Caridade na parede norte.\n[…]\nLincoln Memorial Homepage (NPS)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Coluna de Nelson",
      "descricao": "Coluna monumental no centro da Trafalgar Square, em Londres, em homenagem ao almirante Horatio Nelson."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na Trafalgar Square, em Londres, quantos leões de bronze guardam a base da Coluna de Nelson?",
    "resposta": "Quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nelson%27s_Column",
      "https://en.wikipedia.org/wiki/Trafalgar_Square"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nelson%27s_Column",
        "situacao": "ok",
        "texto": "Nelson's Column is a monument in Trafalgar Square in the City of Westminster, Central London, England, United Kingdom, built to commemorate British Royal Navy officer Horatio Nelson's decisive victory at the Battle of Trafalgar over the combined French and Spanish navies, during which he was killed by a French sniper. The monument was constructed between 1840 and 1843 to a design by William Railto\n[…]\nIt is a column of the Corinthian order built from Dartmoor granite. The statue of Nelson at the top was carved from Craigleith sandstone by sculptor Edward Hodges Baily. The four bronze lions around its base, designed by Sir Edwin Landseer, were added in 1867.\n[…]\nThe pedestal is decorated with four bronze relief panels, each 18 feet (5.5 m) square, cast from captured French guns. They depict the Battle of Cape St. Vincent, the Battle of the Nile, the Battle of Copenhagen and the death of Nelson at Trafalgar. The sculptors were Musgrave Watson, William F. Woodington, John Ternouth and John Edward Carew, respectively. The ornate capital upon which Nelson stands is by Charles Harriott Smith.\n[…]\nOn 18 April 2016, in the early hours of the morning, Greenpeace activists climbed up the column and placed a breathing mask on Admiral Lord Nelson in protest of air pollution levels.\n[…]\nElsewhere in the world, Nelson's Column in Montreal was erected by both Britons and Canadians in 1809, and there is also a Mount Nelson, near Invermere, British Columbia. As at London, the column in Montreal has the admiral standing with his back to the waves. A much shorter statue of Lord Nelson that stood in Trafalgar Square, Bridgetown, Barbados, is older than its counterpart in London.\n[…]\nBerlin Victory Column\n[…]\nCongress Column\n[…]\nJuly Column\n[…]\nSigismund's Column\n[…]\nNelson's broken arm to be X-rayed – BBC News, 26 April 2006\n[…]\nWeb cam of Trafalgar Square including Nelson's Column Archived 6 April 2011 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Trafalgar_Square",
        "situacao": "ok",
        "texto": "Trafalgar Square (  trə-FAL-gər) is a public square in the City of Westminster in Central London. It was established in the early 19th century around the area known as Charing Cross. Its name commemorates the Battle of Trafalgar, the British naval victory in the Napoleonic Wars over France and Spain that took place on 21 October 1805 off the coast of Cape Trafalgar.\n[…]\nNelson's Column is in the centre of the square, flanked by fountains designed by the English architect Sir Edwin Lutyens between 1937 and 1939 (replacements for two of Peterhead granite, now in Canada) and guarded by four monumental bronze lions sculpted by Sir Edwin Landseer. At the top of the column is a statue of Horatio Nelson, who commanded the British Navy at the Battle of Trafalgar.\n[…]\nThe last of the bronze reliefs on the column's pedestals was not completed until May 1854, and the four lions, although part of the original design, were only added in 1867. Each lion weighs seven tons. A hoarding remained around the base of Nelson's Column for some years and some of its upper scaffolding remained in place. Landseer, the sculptor, had asked for a lion that had died at the London Zoo to be brought to his studio.\n[…]\nThe Sea Cadet Corps hold a yearly Battle of Trafalgar victory parade, on the anniversary of the Battle (21 October) running the north of Whitehall, from Horse Guard's Parade to Nelson's Column. The Royal British Legion holds a Silence in the Square event on Armistice Day, 11 November, in remembrance of those who died in war. The event includes music and poetry readings, culminating in a bugler playing the Last Post and a two-minute silence at 11 am.\n[…]\nA Lego architecture set based on Trafalgar Square was released in 2019. It contains models of the National Gallery and Nelson's Column alongside miniature lions, fountains and double-decker buses.\n[…]\nParliament Square"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coluna_de_Nelson",
        "situacao": "ok",
        "texto": "A Coluna de Nelson (em inglês: Nelson's Column) é um monumento em homenagem ao Almirante Horatio Nelson, um dos proeminentes comandantes durante as Guerras Napoleônicas. Localiza-se no centro da Trafalgar Square, uma das mais famosas praças de Londres e que leva o nome da Batalha que o vitimou.\n[…]\nProjetada por William Railton, a coluna foi construída entre 1840 e 1843. É uma coluna coríntia feita a partir de granito de Dartmoor. No topo da coluna encontra-se a estátua de Horatio Nelson em arenito. E na base estão quatro leões de bronze, colocados em 1867.\n[…]\nEm fevereiro de 1838, foi criado um comitê com o objetivo de construir um monumento para o Almirante Horatio Nelson, herói britânico das Guerras Napoleônicas. O Governo cedeu uma área na Trafalgar Square, no centro de Londres e em frente à recém-inaugurada National Gallery. No ano seguinte, 1839, foi organizado um concurso para eleger o projeto para o monumento.\n[…]\nEm 1844, o comitê do monumento passou por problemas financeiros e decidiu por uma campanha de arrecadação de fundos, tendo obtido apenas 20.485 libras em doações públicas e do Governo. Além disso, por controvérsias quanto a localização do monumento no centro da praça, a instalação das esculturas da base foram adiadas até o ano de 1849, quando a escultura de John Edward Carew da morte de Nelson foi colocada na direção de Whitehall. Em seguida, foi a vez de William F.\n[…]\nA estátua de 5 metros de altura no topo da coluna foi esculpida por Edward Hodges Baily em arenito de Craigleith, doado pelo Duque de Buccleuch, antigo presidente do comitê para o monumento. O capitel coríntio é feito do bronze recuperado do HMS Royal George. Em 1867, foram adicionados os leões de bronze à base da coluna.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "One World Trade Center",
      "descricao": "Arranha-céu principal do novo complexo do World Trade Center, em Manhattan, inaugurado em 2014."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A altura do One World Trade Center, em Nova York, medida em pés, é igual a qual ano marcante da história americana?",
    "resposta": "1776",
    "distratores": [
      "1789",
      "1812",
      "1865"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/One_World_Trade_Center"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/One_World_Trade_Center",
        "situacao": "ok",
        "texto": "One World Trade Center, also known as One WTC and the Freedom Tower, is the main building of the rebuilt World Trade Center complex in Lower Manhattan, New York City. Designed by David Childs of Skidmore, Owings & Merrill, One World Trade Center is the tallest building in the United States, the tallest building in the Western Hemisphere, and the seventh-tallest in the world.\n[…]\nOn March 26, 2009, the Port Authority of New York and New Jersey (PANYNJ) confirmed that the building would be officially known by its legal name of One World Trade Center, rather than its colloquial name of Freedom Tower. The building has 94 stories, with the top floor numbered 104.\n[…]\nWorld Trade Center's website describes One World Trade Center's top floor as floor 104, though the tower only contains 94 actual stories according to the Skyscraper Center. The building has 86 usable above-ground floors, of which 78 are intended for office purposes (approximately 2,600,000 square feet (240,000 m2)). The base consists of floors 1–19, including a 65-foot-high (20 m) public lobby that features the 90-foot (27 m) mural ONE: Union of the Senses by American artist José Parlá.\n[…]\nThe top floor of One World Trade Center is 1,368 feet (417 m) above ground level, along with a 33 ft 4 in (10.16 m) parapet; this is identical to the roof height of the original One World Trade Center. The tower's spire brings it to a pinnacle height of 1,776 feet (541 m), a figure intended to symbolize the year 1776, when the United States Declaration of Independence was signed.\n[…]\nWithout the spire, One World Trade Center would be 1,368 feet (417 m) tall, making it the seventh-tallest building in the United States, behind the Trump International Hotel & Tower in Chicago.\n[…]\nArtwork in the World Trade Center\n[…]\nDarton, Eric (1999). Divided We Stand: A Biography of New York's World Trade Center. Basic Books. ISBN 0-465-01727-4."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/One_World_Trade_Center",
        "situacao": "ok",
        "texto": "One World Trade Center, também conhecido como One WTC e erroneamente como Torre da Liberdade, é um arranha-céu e edifício principal do novo complexo do World Trade Center em Lower Manhattan, em Nova Iorque, Estados Unidos. A torre fica localizada no lado noroeste do local do World Trade Center e ocupa o local onde o antigo Six World Trade Center já esteve localizado.\n[…]\nO lado norte da torre fica entre a intersecção das ruas Vesey e West a noroeste e no cruzamento das ruas Vesey e Washington a nordeste, com o local da Torre Norte/1 WTC original ao sul. As obras de construção das fundações do edifício começaram em 27 de abril de 2006. Em 30 de março de 2009, a Autoridade Portuária confirmou que o edifício seria conhecido pelo seu nome legal (One World Trade Center), em vez do nome coloquial (Freedom Tower).\n[…]\nApós a sua conclusão, em 2014, o One World Trade Center se tornou o edifício mais alto nos Estados Unidos, exclusivo para escritórios, estando a uma altura simbólica de 1 776 pés (541,3 m), e entre os edifícios mais altos do mundo.\n[…]\nContrastando com o plano original de Libeskind, o design final afunila-se octogonalmente à medida que sobe. Seus projetistas afirmaram que a torre será uma \"estrutura monolítica de vidro refletindo o céu e coberta por uma antena esculpida.\" Comentando sobre uma data de conclusão, Larry Silverstein afirmou em 2006: \"Em 2012 devemos ter um World Trade Center completamente reconstruído e mais magnífico e mais espetacular do que sempre foi\".\n[…]\nEm 2009, a Autoridade Portuária mudou o nome do edifício de \"Torre da Liberdade\" para \"One World Trade Center\", afirmando que este nome é \"mais fácil para as pessoas se identificarem\".\n[…]\nConstrução do World Trade Center\n[…]\nWorld Trade Center (2001–presente)\n[…]\nFour World Trade Center\n[…]\n«Página oficial do complexo do World Trade Center»\n[…]\n«Site com informações sobre o Freedom Tower»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Pirâmide de Kukulcán",
      "descricao": "Pirâmide maia em degraus no centro do sítio de Chichén Itzá, na península de Iucatã, no México, também chamada El Castillo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Somando os degraus dos quatro lados e a plataforma do topo, a pirâmide de Kukulcán, em Chichén Itzá, chega a qual número?",
    "resposta": "365",
    "distratores": [
      "260",
      "300",
      "400"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/El_Castillo,_Chichen_Itza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/El_Castillo,_Chichen_Itza",
        "situacao": "ok",
        "texto": "El Castillo (Spanish pronunciation: [el kas'tiʎo], 'the Castle'), also known as the Temple of Kukulcan, is a Mesoamerican step-pyramid that dominates the center of the Chichen Itza archaeological site in the Mexican state of Yucatán. The temple building is more formally designated by archaeologists as Chichen Itza Structure 5B18.\n[…]\nAll four sides of the temple have approximately 91 steps which, when added together and including the temple platform on top as the final \"step\", may produce a total of 365 steps (the steps on the south side of the temple are eroded). That number is equal to the number of days of the Haabʼ year and likely is significantly related to rituals.\n[…]\nJadeite was valuable economically and socially, and the acquisition and application of the material is indicative of the access Chichén Itzá had along its trade routes.\n[…]\nIn agreement with this pattern, detected both in the Maya Lowlands  and elsewhere in Mesoamerica, the north (and main) face of the temple of Kukulcán at Chichén Itzá has an azimuth of 111.72°, corresponding to sunsets on May 20 and July 24, separated by 65 and 300 days (multiples of 13 and 20). Significantly, the same dates are recorded by a similar temple at Tulum.\n[…]\nA handclap made near the foot of El Castillo's staircase returns as a brief descending frequency sweep. The sound has been compared with the call of the resplendent quetzal.\n[…]\nAround 2006, the National Institute of Anthropology and History (INAH), which manages the archaeological site of Chichen Itza, started closing monuments to the public. While visitors may walk around them, they may no longer climb them or enter the chambers. This followed a climber falling to her death.\n[…]\nDetermining the dates when these constructions happened will provide time periods of when Chichen Itza may have been significantly occupied."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Templo_de_Kukulc%C3%A1n",
        "situacao": "ok",
        "texto": "O Templo de Kukulkán ou Pirâmide de Kukulkán, ou incluso \"El Castillo\" Foi construído pelos maias itzáes na antiga cidade de Chichén Itzá, no território pertencente ao estado mexicano do Yucatã. Sua construção foi iniciada no século VI, tendo sido posteriormente ampliado nos séculos VIII e XI.\n[…]\nSeu desenho tem uma forma geométrica piramidal, conta com nove níveis ou patamares, quatro fachadas principais cada uma com uma escadaria central e um patamar superior terminado por um templo. Nesta construção rendeu culto ao deus maia Kukulcán (\"Serpente Emplumada\" na língua maia). Conta também com motivos que simbolizam os números mais importantes utilizados no calendário Haab (calendário solar agrícola), o calendário Tzolkin (calendário sagrado) e a roda calendárica.\n[…]\nO templo de Kukulcán conta com quatro escadarias, cada uma delas tem 91 degraus, desta forma somam 364, que somadas ao patamar do topo, comum às quatro escadas, dá um total 365 unidades que representam os dias do Haab.\n[…]\nOs números 18 (uinais), 20 (kines), 5 (uayeb), 52 (ciclos), podem decifrar-se de maneira mais complexa na pirâmide de Kukulcán. O templo tem 9 patamares ou níveis, se se observa de jeito frontal quaisquer das fachadas, ao ter ao centro da vista a escadaria, pode-se multiplicar o número de embasamentos x 2, dando como resultado o número 18, correspondendo assim aos  18 uinais do Haab.\n[…]\nNo templo superior da pirâmide havia 5 adornos ou ameias em cada fachada, assim, tinha 20 ameias que representam os 20 dias ou kines de cada uinal.\n[…]\nEm muitas partes da decoração arquitetônica de colunas e dintéis de Chichén Itzá, encontram-se alusões ao corpo da serpente, no próprio \"Templo de Kukulcán\", no \"Templo dos Jaguares\", no \"Templo dos Guerreiros\", no \"Jogo de Bola\", na \"Plataforma das Águias e os Jaguares\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Monumento a Washington",
      "descricao": "Obelisco de mármore no National Mall, em Washington, D.C., em homenagem a George Washington, concluído em 1884."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O obelisco do Monumento a Washington tem duas tonalidades de mármore, uma na base e outra no alto. Por quê?",
    "resposta": "A obra ficou parada por décadas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Washington_Monument"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Washington_Monument",
        "situacao": "ok",
        "texto": "The Washington Monument is a 555-foot (169 m) tall obelisk on the National Mall in Washington, D.C., built to commemorate George Washington, a Founding Father of the United States and the nation's first president. Standing east of the Reflecting Pool and the Lincoln Memorial, the monument is made of bluestone gneiss for the foundation and of granite for the construction. The outside facing consist\n[…]\nThis original design conformed to a massive temple which was to have surrounded the base of the obelisk, but because it was never built, the architect of the second phase of construction Thomas Lincoln Casey smoothed down the projecting jambs, pediment and entablature in 1885, walled up the west entrance with marble forming an alcove, and reduced the east entrance to 8 feet (2.4 m) high. A statue of Washington was eventually placed in the alcove in 1994.\n[…]\nThe Washington Monument was the world's tallest structure until the Eiffel Tower in Paris was completed in 1889. This monument is taller than the obelisks around the capitals of Europe and in Egypt and Ethiopia, but ordinary antique obelisks were quarried as a monolithic block of stone, and were therefore seldom taller than approximately 100 feet (30 m).\n[…]\nFor ten hours in December 1982, the Washington Monument and eight tourists were held hostage by a nuclear arms protester, Norman Mayer, claiming to have explosives in a van he drove to the monument's base. United States Park Police shot and killed Mayer. The monument was undamaged in the incident, and it was discovered later that Mayer did not have explosives. After this incident, the surrounding grounds were modified in places to restrict the possible unauthorized approach of motor vehicles.\n[…]\nWashington National Monument at Structurae\n[…]\nHistoric American Engineering Record (HAER) No. DC-5, \"Washington Monument\"\n[…]\nPrehistory on the Mall at the Washington Monument"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monumento_a_Washington",
        "situacao": "ok",
        "texto": "O Monumento a Washington é um obelisco dentro do National Mall em Washington, D.C., construído para homenagear George Washington, uma vez comandante-chefe do Exército Continental (1775-1784) na Guerra Revolucionária Americana e o primeiro Presidente dos Estados Unidos (1789–1797).\n[…]\nLocalizado quase a leste do Espelho d'água e do Lincoln Memorial, o monumento, feito de mármore, granito e gnaisse de pedra azul, é a estrutura predominantemente de pedra mais alta do mundo e o obelisco mais alto do mundo, com 169,046 m de altura de acordo com o US National Geodetic Survey (medido em 2013–14) ou 169,294 m de altura, de acordo com o National Park Service (medido em 1884). É a coluna monumental mais alta do mundo se todas forem medidas acima de suas entradas de pedestres.\n[…]\nO Monumento a Washington é um obelisco de pedra oco de estilo egípcio com uma coluna de 152,4 m de altura encimada por uma pirâmide de 16,8 m de altura. Suas paredes têm 4,6 m de espessura em sua base e 0,46 m de espessura no topo. A pirâmide de mármore tem paredes finas de apenas 18 cm de espessura apoiadas por seis arcos, dois entre paredes opostas que se cruzam no centro da pirâmide e quatro arcos de canto menores.\n[…]\nDois pára-raios de alumínio, conectados através das colunas de suporte do elevador ao lençol freático, protegem o monumento. A base atual do monumento tem 11,3 m de espessura, consistindo em metade de seus escombros de gnaisse de bluestone original revestidos de concreto. No canto nordeste da fundação, 6,4 m abaixo do solo, está o mármore que é a pedra angular da construção, incluindo uma caixa de zinco cheia de memorabilia.\n[…]\nGeorge Washington\n[…]\nWashington, D.C.\n[…]\nWebsite oficial NPS: Monumento a Washington\n[…]\nMonumento a Washington no Structurae\n[…]\nPré-história no centro do Monumento a Washington",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Estátua de Hachiko",
      "descricao": "Estátua de bronze do cão akita Hachiko, diante da estação de Shibuya, em Tóquio."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Diante da estação de Shibuya, em Tóquio, há uma estátua do cão Hachiko. Por que ele ficou famoso?",
    "resposta": "Esperou anos pelo dono morto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hachik%C5%8D"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hachik%C5%8D",
        "situacao": "ok",
        "texto": "Hachikō (ハチ公; mid-November 1923 – March 8, 1935) was an Akita dog remembered for his strong dedication to his owner, Hidesaburō Ueno, for whom he continued to wait for almost ten years following Ueno's death in 1925.\n[…]\nSome vendors near Shibuya Station are known to have fed Hachikō and been kind to him. However, initially most people were not so friendly.\n[…]\nHelen Keller visited Akita Prefecture in June 1937 and knew of and asked about Hachikō. She began keeping Akitas as pets and introduced them to America. She intended to visit Korea, China, and the Hachikō statue in Shibuya, but her visit was cut short by the Marco Polo Bridge Incident. So was not able to \"meet\" Hachikō on that trip. Her first Akita, Kamikaze-Go (“divine wind”), whom she called Kami for short, was taken to meet her in Tokyo when she had to sail back to America.\n[…]\nKeller and Go-Go were great companions from day one. Go-Go even spent his first night at Keller's home sleeping at the foot of her bed. Go-go died in 1944 or 1945. After the end of World War II, many Americans brought many more Akitas, who were actually Shepherd-Akita mixes, back to America. These dogs became known as the American Akitas. On August 30, 1948, she touched the re-made statue of Hachikō at Shibuya Station, just 15 days after it was unveiled.\n[…]\nIn 2003, in Shibuya ward, a minibus (officially called \"Shibuya-ward Community Bus\") started routes in the ward, nicknamed \"Hachikō-bus\". The buses are different colors (red, orange, blue) to denote which of the three routes they run. The buses are short and narrow to aid in navigating Shibuya's congestion. People can hear the theme song Hachikō-basu no uta (ハチ公バスのうた), the \"Hachikō Bus Song\", in this bus."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hachiko",
        "situacao": "ok",
        "texto": "Hachiko (em japonês:  ハチ公; Odate, 10 de novembro de 1923 – Shibuya, 8 de março de 1935) foi um cão Akita japonês lembrado por sua notável lealdade ao seu dono, Hidesaburō Ueno, por quem ele continuou a esperar por mais de nove anos após a morte dele.\n[…]\nEm 1924, Hachikō foi trazido a Tóquio pelo seu dono, Hidesaburō Ueno, um professor do departamento de agricultura da Universidade de Tóquio. O professor Ueno, que sempre foi um amante de cães, nomeou-o Hachi e o encheu de amor e carinho. Hachikō acompanhava Ueno desde a porta de casa até à não distante, estação de trens de Shibuya, retornando para encontrá-lo ao final do dia.\n[…]\nAo perceber que seu antigo mestre já não morava na casa em Shibuya, Hachikō ia todos os dias à estação de Shibuya, da mesma forma como ele sempre fazia, e esperou que ele voltasse para casa. Todo dia ele ia e procurava o professor Ueno entre os passageiros, saindo somente quando as dores da fome o obrigavam. E ele fez isso dia após dia, ano após ano, em meio aos apressados passageiros. Hachikō esperava pelo retorno de seu dono e amigo.\n[…]\nA figura permanente do cão à espera de seu dono atraiu a atenção de alguns transeuntes. Muitos deles, frequentadores da estação de Shibuya, já haviam visto Hachikō e o professor Ueno indo e vindo diariamente no passado. Percebendo que o cão esperava em vão a volta de seu mestre, ficaram tocados e passaram, então, a trazer petiscos e comida para aliviar sua vigília.\n[…]\nPor dez anos contínuos Hachikō aparecia ao final da tarde, precisamente no momento de desembarque do trem na estação, na esperança de reencontrar-se com seu dono.\n[…]\nNo RPG Persona 5, é possível ver uma estátua de Hachiko em Shibuya.\n[…]\nA verdadeira história de Hachiko\n[…]\nNova foto rara de Hachiko foi encontrada",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Praça de Maio",
      "descricao": "Praça central de Buenos Aires, diante da Casa Rosada, palco de grandes manifestações políticas argentinas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Desde 1977, mulheres com lenço branco na cabeça caminham em roda na Praça de Maio, em Buenos Aires. O que elas cobram?",
    "resposta": "Os filhos desaparecidos na ditadura",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mothers_of_the_Plaza_de_Mayo",
      "https://en.wikipedia.org/wiki/Plaza_de_Mayo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mothers_of_the_Plaza_de_Mayo",
        "situacao": "ok",
        "texto": "The Mothers of Plaza de Mayo (Spanish: Madres de Plaza de Mayo) is an Argentine human rights association formed in response to abuses by the National Reorganization Process, the military dictatorship by Jorge Rafael Videla. Initially the association worked to find the desaparecidos, people who had disappeared without arrests, trials or judicial process; most were believed dead.\n[…]\nWomen had organized to gather, holding a vigil, while also trying to learn what had happened to their adult children during the 1970s and 1980s. They began to gather for this in 1977 every Thursday at Plaza de Mayo in Buenos Aires, in front of the Casa Rosada presidential palace, in public defiance of the government's law against mass assemblies. Wearing white headscarves to symbolize the diapers (nappies) of their lost children, now young adults.\n[…]\nOn 30 April 1977, Azucena Villaflor de De Vincenti and a dozen other mothers walked to the Plaza de Mayo in Argentina's capital city.\n[…]\nIn 2005, forensic anthropologists dug up some remains of bodies that had been buried in an unmarked grave after washing ashore (in late December 1977) near the beach resort of Santa Teresita, south of Buenos Aires. DNA testing identified among them Azucena Villaflor, Esther Careaga and María Eugenia Bianco, three pioneer Mothers of Plaza who had been \"disappeared\", as well as Léonie Duquet. In December 2005, Azucena Villaflor's ashes were buried in the Plaza de Mayo.\n[…]\nOn \"Little Steven\" Van Zandt's 1984 release, Voice of America, he pays tribute to Las Madres de Plaza de Mayo with his song, \"Los Desaparecidos\".\n[…]\nThe documentary Los Desaparecidos (The Disappeared, 2008) follows the horrors of Argentina's Dirty War. The film follows a child of the disappeared and his involvement in Los Madres is touched on throughout the documentary.\n[…]\n(in English) Asociación Abuelas de Plaza de Mayo"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Plaza_de_Mayo",
        "situacao": "ok",
        "texto": "The Plaza de Mayo (Latin American Spanish pronunciation: [ˈplasa ðe ˈmaʝo], Rioplatense: [- ˈmaʒo, - ˈmaʃo]; English: May Square) is  the main city square of Buenos Aires, Argentina. It was formed in 1884 after the demolition of the Recova building, unifying the city's Plaza Mayor and Plaza de Armas, by that time known as Plaza de la Victoria and Plaza 25 de Mayo, respectively.\n[…]\nThe city centre of Buenos Aires, Plaza de Mayo has been the scene of the most momentous events in Argentine history, as well as the largest popular demonstrations in the country. On the occasion of the first anniversary of the May Revolution in 1811, the Pirámide de Mayo (English: May Pyramid) was inaugurated in the square's hub, becoming Buenos Aires' first national monument.\n[…]\nIn the square's surroundings are several significant monuments and points of interest: the Cabildo, the Casa Rosada (seat of the President of Argentina), the Metropolitan Cathedral, the Buenos Aires City Hall, and the Bank of the Argentine Nation's headquarters. Underneath its lands are the Underground stations of Plaza de Mayo (Line A), Catedral (Line D), and Bolívar (Line E).\n[…]\nThe Plaza de Mayo has traditionally been the focal point of political life in Buenos Aires. Its current name commemorates the May Revolution of 1810, which started the process towards the country's independence from Spain in 1816.\n[…]\nThe plaza, since 1977, is where the Mothers of the Plaza de Mayo have congregated with signs and pictures of desaparecidos, their children, who were subject to forced disappearance by the Argentine military in the Dirty War, during the National Reorganization Process.\n[…]\nToday, Plaza de Mayo continues to be an indispensable tourist attraction for those who visit Buenos Aires.\n[…]\nThe Buenos Aires financial district (microcentro), affectionately known as la City (sic) also lies besides the Plaza.\n[…]\nBuenos Aires"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%A3es_da_Pra%C3%A7a_de_Maio",
        "situacao": "ok",
        "texto": "As Mães da Praça de Maio (em espanhol, Asociación Madres de la Plaza de Mayo) é uma associação argentina de mães que tiveram seus filhos assassinados ou desaparecidos durante o terrorismo de Estado da ditadura militar, que governou o país entre 1976 e 1983.\n[…]\nElas se organizaram tentando descobrir o que ocorreu com seus filhos e começaram a fazer passeatas em 1977 na Praça de Maio, em Buenos Aires, em frente a Casa Rosada, a sede do governo argentino, em desafio público ao terrorismo de Estado do governo, destinado a silenciar toda a oposição política. Usando lenços brancos em suas cabeças, procuravam simbolizar as fraldas de seus filhos perdidos e sensibilizar a população.\n[…]\nÀ medida que o número de desaparecidos cresceu, o movimento cresceu e as mães ganharam atenção internacional durante os anos da Guerra Suja. Eles começaram a tentar fazer pressões internacionais contra a ditadura argentina, compartilhando as muitas histórias dos desaparecidos. Em 10 de dezembro de 1977, Dia Internacional dos Direitos Humanos, as Mães publicaram um anúncio de jornal com os nomes de seus filhos desaparecidos.\n[…]\nEm dezembro de 2005, os restos mortais de Azucena Villaflor foram enterrados na Praça de Maio.\n[…]\nNos anos após a ditadura, a associação aumentou sua pressão sobre o governo, exigindo respostas sobre o destino e a localização das crianças desaparecidas. Depois que os militares entregaram sua autoridade a um governo civil em 1983, as Mães da Praça de Maio reacenderam as esperanças de que pudessem aprender o destino de seus filhos. Elas pressionaram por mais informações.\n[…]\nNo lançamento do álbum Voice of America, de Steven Van Zandt, em 1984, o cantor prestou homenagem às Mães da Praça de Maio com sua música \"Los Desaparecidos\".\n[…]\nAvós da Praça de Maio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Chicago",
      "descricao": "Maior cidade do estado de Illinois, nos Estados Unidos, à margem do lago Michigan."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que boa parte do centro de Chicago teve de ser reconstruída a partir de 1871, abrindo caminho para uma nova arquitetura?",
    "resposta": "Um grande incêndio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Chicago_Fire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Chicago_Fire",
        "situacao": "ok",
        "texto": "The Great Chicago Fire burned in Chicago, Illinois, United States, during October 8–10, 1871. The fire killed approximately 300 people, destroyed 17,000 structures across roughly 3.3 square miles (9 km2), and left more than 100,000 residents homeless. The fire began in a neighborhood southwest of the city center. A long period of hot, dry, windy conditions, and the wooden construction prevalent in\n[…]\nChicago Water Tower\n[…]\nChicago Avenue Pumping Station\n[…]\nAlthough set in Philadelphia, Theodore Dreiser's 1912 novel The Financier portrays the nationwide impact the 1871 Chicago fire had on the stock markets and the financial world.\n[…]\nThe 1976 made-for-TV movie Time Travelers has two doctors sent back to 1871 Chicago to find a cure for a disease thought lost to the fire. The Fire is shown starting when flames burst out from the O'Leary's barn and various attempts to stop the fire with a fire carriage and dynamiting buildings are depicted.\n[…]\nA 1980 The Far Side strip by Gary Larson depicts two cows watching the 1871 fire from the outskirts of Chicago. One of them comments, \"It seems that agent 6373 had accomplished her mission,\" alluding to O'Leary's cow.\n[…]\nIn 2014, the city of Chicago and Redmoon Theater partnered to create The Great Chicago Fire Festival. Held on October 4, 2014, the event fell victim to technical difficulties as replicas of 1871 houses on floating barges in the Chicago River failed to ignite properly due to electrical problems and heavy rain on the preceding days.\n[…]\nChicago and the Great Conflagration – Elias Colbert and Everett Chamberlin, 1871, 528 pp. ISBN 978-1-608-41016-3.\n[…]\n\"Mrs. O'Leary's Comet: Cosmic Causes of the Great Chicago Fire\" by Mel Waskin (1985) ISBN 978-0-897-33181-4.\n[…]\nTarshis, Lauren (2015). I Survived the Great Chicago Fire, 1871. Scholastic Inc.ISBN 0545658462.\n[…]\nThe Great Chicago Fire 1996, Chicago Historical Society\n[…]\nGreat Chicago Fire & the Web of Memory"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_inc%C3%AAndio_de_Chicago",
        "situacao": "ok",
        "texto": "O Grande Incêndio de Chicago foi um incêndio de grandes proporções que ocorreu na cidade americana de Chicago de 8 a 10 de outubro de 1871. O incêndio matou aproximadamente 300 pessoas, destruiu cerca de 3,3 milhas quadradas (9 km2) da cidade e deixou mais de 100 000 residentes sem casa. Começou em um bairro a sudoeste do centro da cidade. Um longo período de condições ventosas, quentes e secas, e\n[…]\nO fogo atingiu o braço sul do rio Chicago e destruiu grande parte do centro de Chicago e, em seguida, atingiu o braço principal do rio, consumindo o lado norte próximo.\n[…]\nA muita ajuda fluiu para a cidade de localidades próximas e de longínquas após o incêndio. O governo da cidade melhorou os códigos de construção para impedir a rápida propagação de futuros incêndios e reconstruiu rapidamente para esses padrões mais elevados.\n[…]\nVárias tentativas se seguiram para parar as chamas, mas todas falharam, frustradas pelo clima quente e seco e o vento forte que ajudou a espalhar as chamas. O prefeito de Chicago chegou a pedir ajuda às cidades vizinhas, mas a essa altura o incêndio já era grande demais para ser contido. Como o fogo também destruiu o aqueduto, os bombeiros desistiram de apagar as chamas, e o desastre continuou a se espalhar pelo rio Chicago também.\n[…]\n2323 e 2339 North Cleveland Avenue também sobreviveram ao incêndio.\n[…]\nA Igreja de São Miguel e a Estação de Bombeamento foram destruídas pelo incêndio, mas seus exteriores sobreviveram e os edifícios foram reconstruídos usando as paredes sobreviventes. Além disso, embora as partes habitáveis do edifício tenham sido destruídas, a torre do sino da Catedral de St. James sobreviveu ao incêndio e foi incorporada à igreja reconstruída. As pedras perto do topo da torre ainda estão enegrecidas com a fuligem e a fumaça.\n[…]\nEscola de Chicago (arquitetura)\n[…]\nThe Great Chicago Fire 1996, Chicago Historical Society\n[…]\nGreat Chicago Fire & the Web of Memory",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Catedral de Florença",
      "descricao": "Catedral de Santa Maria del Fiore, em Florença, na Itália, coroada por uma enorme cúpula de tijolos do século quinze."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Considerada um marco da engenharia, a enorme cúpula da Catedral de Florença, concluída no século quinze, foi projetada por quem?",
    "resposta": "Filippo Brunelleschi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Florence_Cathedral",
      "https://en.wikipedia.org/wiki/Filippo_Brunelleschi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Florence_Cathedral",
        "situacao": "ok",
        "texto": "Florence Cathedral (Italian: Duomo di Firenze), formally the Cathedral of Saint Mary of the Flower (Italian: Cattedrale di Santa Maria del Fiore [katteˈdraːle di ˈsanta maˈriːa del ˈfjoːre]), is the cathedral of the Catholic Archdiocese of Florence in Florence, Italy.\n[…]\nLorenzo Ghiberti had a large artistic impact on the cathedral. Ghiberti worked with Filippo Brunelleschi on the cathedral for eighteen years and had a large number of projects on almost the whole east end. Some of his works are the stained glass designs for the oculi in the drum, the bronze shrine of Saint Zenobius and marble revetments on the outside of the cathedral.\n[…]\nFilippo Brunelleschi\n[…]\nDevémy, Jean-François (2013). Sur les traces de Filippo Brunelleschi, l'invention de la coupole de Santa Maria del Fiore à Florence. Suresnes: Les Editions du Net. ISBN 978-2-312-01329-9. (in line presentation Archived 3 March 2016 at the Wayback Machine)\n[…]\nGärtner, Peter J. (1998). Filippo Brunelleschi 1377–1446. Cologne: Könemann. ISBN 978-3-8290-0241-7.\n[…]\nManetti, Giacomo; Bellucci, Marco; Bagnoli, Luca (2020). \"The construction of Brunelleschi's dome in Florence in the fifteenth century: between accountability and technologies of government\". Accounting History Review. 30 (2). Taylor & Francis: 141–169. doi:10.1080/21552851.2019.1686036. hdl:2158/1175096. S2CID 211446113.\n[…]\nRicci, Massimo, Il genio di Brunelleschi e la costruzione della Cupola di Santa Maria del Fiore, Livorno : Casa Editrice Sillabe S.r.l., April 2014. (The genius of Filippo Brunelleschi and the construction of the dome of Santa Maria del Fiore). ISBN 978-88-8347-691-4. The book is the result of forty years of research on the secret technique with which Brunelleschi built the Dome of Santa Maria del Fiore in Florence."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Filippo_Brunelleschi",
        "situacao": "ok",
        "texto": "Filippo di ser Brunellesco di Lippo Lapi (1377 – 15 April 1446), commonly known as Filippo Brunelleschi ( BROO-nə-LESK-ee, Italian: [fiˈlippo brunelˈleski]) and also nicknamed Pippo by Leon Battista Alberti, was an Italian architect, designer, goldsmith, and sculptor. He is considered to be a founding father of Renaissance architecture. He is recognized as the first modern engineer, planner, and s\n[…]\nBrunelleschi was born in Florence, Italy, in 1377. His father was Brunellesco di Lippo Lapi (born c. 1331), a notary and civil servant. His mother was Giuliana Spini; he had two brothers. The family was well-off; the palace of the Spini family still exists across from the Church of Santa Trinità in Florence. The young Filippo was given a literary and mathematical education to enable him to follow the father's career.\n[…]\nBrunelleschi's body lies in the crypt of the Cathedral of Florence.\n[…]\nAntonio Manetti, who knew Brunelleschi and wrote his biography that Brunelleschi \"was granted such honours as to be buried in the Basilica di Santa Maria del Fiore, and with a marble bust, which was said to be carved from life, and placed there in perpetual memory with such a splendid epitaph.\" Inside the cathedral entrance is this epitaph: \"Both the magnificent dome of this famous church and many other devices invented by Filippo the architect, bear witness to his superb skills.\n[…]\nThe principal buildings and works designed by Brunelleschi or which included his involvement, all situated in Florence:\n[…]\nFanelli, Giovanni (2004). Brunelleschi's Cupola: Past and Present of an Architectural Masterpiece. Florence: Mandragora.\n[…]\nSaalman, Howard (1980). Filippo Brunelleschi: The Cupola of Santa Maria del Fiore. London: A. Zwemmer. ISBN 0-302-02784-X.\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Filippo Brunelleschi\", MacTutor History of Mathematics Archive, University of St Andrews"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santa_Maria_del_Fiore",
        "situacao": "ok",
        "texto": "A Catedral de Santa Maria del Fiore é o \"Duomo\" de Florença, Itália, e está localizada na praça homónima.\n[…]\nA construção iniciou-se em 1296 com projeto de Arnolfo di Cambio sobre as fundações da antiga Catedral de Santa Reparada. Após a morte de Arnolfo, passou pela supervisão de Giotto di Bondone, depois por Francesco Talenti e teve a sua cúpula construída por Filippo Brunelleschi. Ao fim das obras da cúpula em 1436, a catedral foi consagrada pelo papa Eugénio IV.\n[…]\nO Duomo de Florença, como o vemos hoje, é o resultado de um trabalho que se estendeu por seis séculos. O seu projeto básico foi elaborado por Arnolfo di Cambio no final do século XIII, sendo que a cúpula é obra de Filippo Brunelleschi. A fachada teve de esperar até ao século XIX para ser concluída.\n[…]\nContudo, o problema da cúpula ainda não fora resolvido. Brunelleschi fez seu primeiro projeto em 1402, mas manteve-o em segredo. Em 1418, a Opera del Duomo, a centenária empresa administradora dos trabalhos na Catedral, anunciou um concurso que Brunelleschi haveria de vencer, mas o trabalho não começaria senão dois anos mais tarde, continuando até 1434.\n[…]\nA Catedral foi consagrada pelo Papa Eugénio IV em 25 de março (o Ano Novo florentino) de 1436, 140 anos depois do início da construção. Os arremates que ainda esperavam conclusão eram a lanterna da cúpula (colocada em 1461) e o revestimento externo com mármores brancos de Carrara, verdes de Prato, e vermelhos de Siena, de acordo com o projeto original de Arnolfo.\n[…]\nCúpula de Santa Maria del Fiore\n[…]\nIl Duomo de Florença, catedral de Santa Maria del Fiore\n[…]\nA catedral de Florença",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Catedral de São Paulo de Londres",
      "descricao": "Catedral anglicana com grande cúpula na colina de Ludgate, na City de Londres, reconstruída após o Grande Incêndio de 1666."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Reconstruída depois do Grande Incêndio de 1666, a Catedral de São Paulo, em Londres, foi projetada por qual arquiteto?",
    "resposta": "Christopher Wren",
    "fonte": [
      "https://en.wikipedia.org/wiki/St_Paul%27s_Cathedral"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/St_Paul%27s_Cathedral",
        "situacao": "ok",
        "texto": "St Paul's Cathedral, formally the Cathedral Church of St Paul in London, is an Anglican cathedral in London, England, the seat of the bishop of London. The cathedral serves as the mother church of the Diocese of London in the Church of England. It is on Ludgate Hill at the highest point of the City of London. Its dedication in honour of Paul the Apostle dates back to the original cathedral church \n[…]\nFollowing the Stuart Restoration, King Charles II established a royal commission in 1663 to restore or replace the ruinous cathedral; funds were raised and some £3,600 was spent in restoration, although a great deal remained to be done. One of the commissioners was Christopher Wren, who submitted proposals in May 1666 for a more radical renovation in the Classical style, rather than the \"Gothick Rudeness of the old design\". However, the Great Fire of London in September 1666 gutted Old St Paul's.\n[…]\nIn designing St Paul's, Christopher Wren had to meet many challenges. He had to create a fitting cathedral to replace Old St Paul's as a place of worship and as a landmark within the City of London. He had to satisfy the requirements of the church and the tastes of a royal patron, as well as respecting the essentially medieval tradition of English church building, which developed to accommodate the liturgy.\n[…]\nDownes, Kerry (1987), Sir Christopher Wren: the Design of St Paul's Cathedral, London: Trefoil Publications, pp. 11–34\n[…]\nHart, Vaughan (1995). St Paul's Cathedral: Sir Christopher Wren. Architecture in Detail. London: Phaidon Press. pp. 17–23. ISBN 978-0-7148-2998-2. OCLC 32695383.\n[…]\nTinniswood, Adrian (2001), His Invention so Fertile: A Life of Christopher Wren, London: Oxford Press, p. 315\n[…]\nWren's various designs\n[…]\nA history of the choristers of St Paul's Cathedral\n[…]\nThe giant 350-year-old model of St Paul's Cathedral—Short BBC video on the Saint Paul's Cathedral model built by Christopher Wren"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_de_S%C3%A3o_Paulo_%28Londres%29",
        "situacao": "ok",
        "texto": "Igreja Catedral de São Paulo, o Apóstolo, mais conhecida como Catedral de São Paulo (em inglês:  St Paul's Cathedral), é uma catedral anglicana localizada em Ludgate Hill, na cidade de Londres, na Inglaterra. É a sede do Bispo de Londres.\n[…]\nO edifício actual, projecto a cargo do arquitecto Christopher Wren, data do século XVIII e é geralmente considerado como a quinta Catedral de São Paulo, embora o número possa ser maior se todas as reconstruções medievais forem contadas como uma nova catedral. A catedral é atualmente um dos sítios de maior visitação na cidade de Londres. Foi também nesta catedral que Charles, Príncipe de Gales, casou-se com Lady Diana Spencer, em 1981.\n[…]\nApós as sucessivas reformas, a catedral permaneceu abandonada até que o arquiteto inglês Inigo Jones iniciou uma restauração definitiva da catedral em 1633, acrescentando a atual fachada neoclássica e outra cúpula de madeira. No entanto, a antiga catedral foi incendiada novamente e a cúpula acabou por ruir novamente e a igreja teve de ser reformada, porém desta vez foi contratado o renomado arquiteto Christopher Wren que aplicou o estilo barroco na catedral.\n[…]\nWren elaborou uma catedral em formato de cruz grega, mas seu projeto foi renegado por outros arquitetos por ser considerado muito complexo.\n[…]\nA catedral abriga cerca de 200 memoriais que servem a Ordem do Império Britânico e ao Tesouro Nacional. Porém muitos tesouros foram perdidos ou furtados da catedral em 1810, quando um grande assalto resultou na perda de grandes artefatos preciosos do local. A catedral ainda abriga os túmulos de notáveis cidadãos britânicos. A primeira pessoa a ser enterrada no local foi Christopher Wren em 1723.\n[…]\n«Sítio oficial da Catedral de São Paulo de Londres» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Reichstag",
      "descricao": "Edifício do século dezenove em Berlim, sede do Parlamento alemão, com cúpula de vidro moderna."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na reforma do Reichstag, em Berlim, concluída em 1999, qual arquiteto britânico projetou a cúpula de vidro aberta ao público?",
    "resposta": "Norman Foster",
    "fonte": [
      "https://en.wikipedia.org/wiki/Reichstag_building"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Reichstag_building",
        "situacao": "ok",
        "texto": "The Reichstag (; German: [ˈraɪçsˌtaːk] ) is a historic legislative government building on Platz der Republik in Berlin that is the seat of the Bundestag parliament. It is also the meeting place of the Federal Convention, which elects the president of Germany.\n[…]\nAfter the war, the building was modernised and partially restored in the 1950s and used for exhibitions and special events, as its location in West Berlin prevented its use as a parliament building by either of the two Germanies. From 1995 to 1999, the Reichstag was fundamentally redesigned by Norman Foster for its permanent use as a parliament building in the now reunified Germany. The keys were ceremonially handed over to the president of the Bundestag, Wolfgang Thierse, on 19 April 1999.\n[…]\nOn 21 June 1994, Norman Foster was asked to include a dome solution in his draft reconstruction proposal, which he included in his 10 February 1995 plans.\n[…]\nReconstruction was completed in 1999, with the Bundestag convening there officially for the first time on 19 April of that year. The Reichstag is now the second most visited attraction in Germany, not least because of the huge glass dome that was erected on the roof as a gesture to the original 1894 cupola, giving an impressive view over the city, especially at night.\n[…]\nConstruction work was finished in 1999 and the seat of parliament was transferred to the Bundestag in April of that year. The dome is open to visitors by prior registration.\n[…]\nReichskanzlei\n[…]\nReichstag (disambiguation)\n[…]\nWrapped Reichstag\n[…]\nPhotos of the Reichstag from 1989 and Photos of the 1945 Battle for the Reichstag.\n[…]\nReichstag and vicinity at dawn, July 1971. From the \"Berlin 1969\" website.\n[…]\nPanoramic view of The Reichstag (building)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pal%C3%A1cio_do_Reichstag",
        "situacao": "ok",
        "texto": "Reichstag é o edifício onde o parlamento federal da Alemanha (Bundestag) exerce suas funções. Localiza-se em Berlim no distrito de Mitte.\n[…]\nApós a guerra, o edifício foi modernizado e restaurado na década de 1950 e usado para exposições e eventos especiais, pois sua localização em Berlim Ocidental impedia seu uso como um parlamento por qualquer um dos dois alemães. De 1995 a 1999, o Reichstag foi fundamentalmente redesenhado por Norman Foster por seu uso permanente como um parlamento na Alemanha agora reunificada. As chaves foram entregues cerimonialmente ao  presidente do Bundestag, Wolfgang Thierse, em 19 de abril de 1999.\n[…]\nDurante a Guerra Fria o Reichstag ficou em Berlim Ocidental, mas somente a alguns metros da fronteira com Berlim Oriental, onde seria erguido em 1961 o Muro de Berlim. Durante o bloqueio de Berlim, uma multidão de berlinenses ocidentais reuniu-se defronte do edifício em 9 de setembro de 1948, ocasião na qual o prefeito Ernst Reuter proferiu um discurso que viria a tornar-se famoso e que concluía com a frase Ihr Völker der Welt, schaut auf diese Stadt! (\"Vós povos do mundo, assisti esta cidade!\").\n[…]\nNos seus mais de cem anos de história, o prédio do Reichstag foi a sede de governo em duas guerras. Em 1992 foi decidido que o Reichstag deveria ser reconstruído e escolheu-se então o projecto de Norman Foster. Em 1995, o casal de artistas Christo e Jeanne-Claude atraiu milhões de visitantes ao cobrir o prédio inteiro. A reconstrução foi um sucesso, especialmente pela reconstrução da cúpula com referência à cúpula original de 1894.\n[…]\nWrapped Reichstag\n[…]\nFoto do Reichstag em 1993",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Central Park",
      "descricao": "Grande parque urbano no centro de Manhattan, em Nova York, aberto na segunda metade do século dezenove."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Nova York, o Central Park foi projetado pelo arquiteto Calvert Vaux e por qual paisagista americano?",
    "resposta": "Frederick Law Olmsted",
    "fonte": [
      "https://en.wikipedia.org/wiki/Central_Park"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Central_Park",
        "situacao": "ok",
        "texto": "Central Park is an urban park between the Upper West Side and Upper East Side neighborhoods of Manhattan in New York City, and the first landscaped park in the United States. It is the sixth-largest park in the city, containing 843 acres (341 ha), and the most visited urban park in the United States, with an estimated 42 million visitors annually as of 2016.\n[…]\nIn April 1858, the park commissioners selected Frederick Law Olmsted and Calvert Vaux's \"Greensward Plan\" as the winning design. Three other plans were designated as runners-up and featured in a city exhibit. Unlike many of the other designs, which effectively integrated Central Park with the surrounding city, Olmsted and Vaux's proposal introduced clear separations with sunken transverse roadways. The plan eschewed symmetry, instead opting for a more picturesque design.\n[…]\nConstruction of Central Park's design was executed by a gamut of professionals. Frederick Law Olmsted and Calvert Vaux were the primary designers, assisted by board member Andrew Haswell Green, architect Jacob Wrey Mould, master gardener Ignaz Anton Pilat, and engineer George E. Waring Jr. Olmsted was responsible for the overall plan, while Vaux designed some of the finer details. Mould, who worked frequently with Vaux, designed the Central Park Esplanade and the Tavern on the Green building.\n[…]\nIn the late 19th century the landscape architect Samuel Parsons took the position of New York City parks superintendent. A onetime apprentice of Calvert Vaux, Parsons helped restore the nurseries of Central Park in 1886. Parsons closely followed Olmsted's original vision for the park, restoring Central Park's trees while blocking the placement of several large statues in the park.\n[…]\nDescription of a plan for the improvement of the Central Park (1858), Frederick Law Olmsted and Calvert Vaux. New York: The Aldine Press"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Central_Park",
        "situacao": "ok",
        "texto": "O Central Park (em português:  Parque Central) é um grande parque dentro da cidade de Nova Iorque. Possui uma área de 3,41 km² e está localizado no distrito de Manhattan. Foi o primeiro parque público nos Estados Unidos, inaugurado em 1857 com 3,15 km², e é considerado, por muitos nova-iorquinos, um oásis dentro da grande floresta de arranha-céus na cidade. É um lugar onde as pessoas podem diminui\n[…]\nO Central Park, que desde 1962 é um Marco Histórico Nacional, foi projetado pelo escritor e paisagista Frederick Law Olmsted e pelo arquiteto inglês Calvert Vaux em 1858, depois de vencerem uma competição de projetos para o futuro parque lançada pelos comissários da área reservada ao Central Park - o projeto vencedor foi nomeado como Greensward Plan. Eles também projetaram o Brooklyn's Prospect Park.\n[…]\nZoológico do Central Park\n[…]\nNo esquema climático de Koppen, o centro de Nova Iorque, mais especificadamente o Central Park é Cfa, subtropical úmido devido a ilha de calor em Manhattan, embora muito mais semelhante com os climas de outros lugares do nordeste do país de uma forma geral (a média do mês mais frio é de apenas 0,3 °C).\n[…]\nO Central Park abriga mais de 25 mil árvores, 1700 ulmeiros americanos, que compõem a maior reserva da espécie no nordeste dos Estados Unidos.\n[…]\nOutras espécies nativas e exóticas encontradas no Central Park:\n[…]\nA Linha da Oitava Avenida do Metrô de Nova Iorque percorre o limite oeste do parque, com uma estação de transferência à Linha Broadway - Sétima Avenida, localizada em Columbus Circle. Adicionalmente, o parque é servido pela Linha da Avenida Lenox - servida pela estação Central Park North – 110th Street; dela partem as linhas ao sudoeste do parque, e levam até uma estação da Linha Broadway.\n[…]\nFrederick Douglass Circle (nordeste)\n[…]\n«A página oficial do Central Park - guia completo» (em inglês)\n[…]\n«Conservação do Central Park - página oficial» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Abadia de Westminster",
      "descricao": "Igreja gótica em Londres, palco das coroações e de casamentos e funerais da realeza britânica."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Todas as coroações de monarcas ingleses e britânicos acontecem na Abadia de Westminster, em Londres, desde qual ano?",
    "resposta": "1066",
    "distratores": [
      "1100",
      "1154",
      "1215"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Westminster_Abbey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Westminster_Abbey",
        "situacao": "ok",
        "texto": "Westminster Abbey, formally titled the Collegiate Church of Saint Peter at Westminster, is an Anglican church in the City of Westminster, London, England. Since 1066, it has been the location of the coronations of 40 English and British monarchs and a burial site for 18 English, Scottish, and British monarchs. At least 16 royal weddings have taken place at the abbey since 1100.\n[…]\nThe abbey has strong connections with the royal family. It has been patronised by monarchs, been the location for coronations, royal weddings and funerals, and several monarchs have attended services there. One monarch was born and one died at Westminster Abbey. In 1413, Henry IV collapsed while praying at the shrine of Edward the Confessor. He was moved into the Jerusalem Chamber, and died shortly afterwards. Edward V was born in the abbot's house in 1470.\n[…]\nSince the coronation of William the Conqueror in 1066, 40 English and British monarchs have been crowned in Westminster Abbey (not counting Edward V, Lady Jane Grey, and Edward VIII, who were never crowned). In 1216, Henry III could not be crowned in the abbey because London was occupied by hostile forces at the time. Henry was crowned in Gloucester Cathedral, and had a second coronation at Westminster Abbey in 1220.\n[…]\nMany royal funerals took place at the abbey between that of Edward the Confessor in 1066 and that of Prince Henry, Duke of Cumberland and Strathearn, the last royal to be buried in the church, in 1790. From then until the funeral of Queen Alexandra in 1925, no royal funerals were held at the abbey; she was buried at Windsor Castle. Queen Elizabeth the Queen Mother was another queen consort whose funeral was held at the abbey before burial elsewhere, in 2002.\n[…]\nWestminster Abbey Choir School, also on the abbey grounds, educates the choirboys who sing for abbey services.\n[…]\nInformation for visitors to Westminster Abbey"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abadia_de_Westminster",
        "situacao": "ok",
        "texto": "A Abadia de Westminster, formalmente denominada Igreja Colegiada de São Pedro em Westminster, é uma grande igreja em arquitetura predominantemente gótica na cidade de Westminster, Londres, Inglaterra, a oeste do Palácio de Westminster. É um dos edifícios religiosos mais notáveis do Reino Unido e o local tradicional de coroação e sepultamento dos monarcas ingleses e, posteriormente, britânicos. O e\n[…]\nDesde a coroação de Guilherme, o Conquistador, em 1066, todas as coroações de monarcas ingleses e britânicos aconteceram na Abadia de Westminster. Houve 16 casamentos reais na abadia desde 1100 d.C.\n[…]\nA Diocese de Westminster foi dissolvida em 1550, mas a Abadia foi reconhecida (em 1552, retroativamente a 1550) como uma segunda catedral da Diocese de Londres até 1556. A antiga expressão inglesa \"To rob Peter to pay Paul\" (roubar Pedro para pagar Paulo) pode ter dado um novo sopro de vida quando o dinheiro destinado à abadia, que é dedicado a São Pedro, foi desviado para o tesouro da Catedral de São Paulo.\n[…]\nDesde as coroações em 1066, tanto do Rei Haroldo quanto de Guilherme, o Conquistador, todos os monarcas ingleses e britânicos (exceto Eduardo V e Eduardo VIII, que nunca tiveram cerimônia de coroação) foram coroados na Abadia de Westminster. Em 1216, Henrique III não pôde ser coroado em Londres quando subiu ao trono, porque o príncipe francês Luís VIII assumira o controle da cidade, e assim o rei foi coroado na Catedral de Gloucester.\n[…]\nA cadeira do Rei Eduardo (ou cadeira de Santo Eduardo), o trono no qual os soberanos ingleses e britânicos estavam sentados no momento da coroação, agora está abrigada dentro da Abadia na Capela de São Jorge, perto da Porta Ocidental, e tem sido usada em todas as coroações desde 1308.\n[…]\nGótico inglês\n[…]\nCARPENTER, David. The Struggle for Mastery: Britain, 1066-1284. Londres: Penguin Books: 2004\n[…]\n«Abadia de Westminster - Encyclopdia Britannica» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Ponte Carlos",
      "descricao": "Ponte medieval de pedra sobre o rio Moldava, em Praga, ladeada por estátuas barrocas."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que século começou a construção da Ponte Carlos, que cruza o rio Moldava, em Praga?",
    "resposta": "Século quatorze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_Bridge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Bridge",
        "situacao": "ok",
        "texto": "Charles Bridge (Czech: Karlův most [ˈkarluːf ˈmost] , German: Karlsbrücke [kaʁlsˌbʁʏkə] ) is a medieval stone arch bridge that crosses the Vltava river in Prague, Czech Republic. Its construction started in 1357 under the auspices of King Charles IV, and finished in the early 15th century. The bridge replaced the old Judith Bridge built 1158–1172 that had been severely damaged by a flood in 1342.\n[…]\nThis new bridge was originally called Stone Bridge (Kamenný most) or Prague Bridge (Pražský most), but has been referred to as \"Charles Bridge\" since 1870.\n[…]\nAs the only means of crossing the river Vltava until 1841, Charles Bridge was the most important connection between Prague Castle and the city's Old Town and adjacent areas. This land connection made Prague important as a trade route between Eastern and Western Europe. The bridge is located on the historic coronation route of the Bohemian kings.\n[…]\nThroughout its history, Charles Bridge has suffered several disasters and witnessed many historic events. Czech legend has it that construction began on Charles Bridge at 5:31am on 9 July 1357 with the first stone being laid by Charles IV himself.\n[…]\nStatues on the bridge have occasionally been damaged. On November 3, 1918, a crowd led by activists from Prague’s Žižkov district destroyed the Marian Column in Prague’s Old Town Square. According to accounts, the crowd then intended to proceed to Charles Bridge and throw its statues into the Vltava River. Legend has it that a man shouted, “Take down the statues from Charles Bridge as well!” The crowd was especially hostile toward the statue of Saint John of Nepomuk.\n[…]\nOn 9 July 2017, Google celebrated the 660th anniversary of Charles Bridge with a Google Doodle.\n[…]\nPonte Milvio\n[…]\nMost Ljubavi\n[…]\nMedia related to Charles Bridge at Wikimedia Commons\n[…]\nOfficial Museum of Charles Bridge\n[…]\nCharles Bridge at Structurae"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ponte_Carlos",
        "situacao": "ok",
        "texto": "A Ponte Carlos (em checo Karlův most) é a ponte mais antiga de Praga. Atravessa o rio Moldava da Cidade Velha até à Cidade Pequena. É a segunda ponte mais antiga existente na Chéquia.\n[…]\nSua construção começou em 1357 a pedido do rei Carlos IV e foi finalizada em princípios do século XV. Sendo a única forma de atravessar o rio, a Ponte Carlos transformou-se na via de comunicação mais importante entre a Cidade Velha, o Castelo de Praga e as zonas adjacentes, até 1841.\n[…]\nOriginalmente, esta via de comunicação chamava-se Ponte de Pedra (Kamenný most) e Ponte de Praga (Pražský most), mas leva sua denominação atual desde 1870.\n[…]\nA ponte tem 516 metros de comprimento e quase 10 metros de largura, apoiando-se em 16 arcos. Está protegida por três torres distribuídas entre ambos os lados, duas delas em Malá Strana, as restantes na Cidade Velha. A torre localizada no lado da Cidade Velha é considerada por muitos como uma das construções mais impressionantes de arquitetura gótica no mundo. A ponte é decorada por 30 estátuas em ambos os lados.\n[…]\nA maioria delas foram construídas entre 1683 e 1714 e são em estilo barroco, representam vários santos e patronos venerados naquela época. Entre os artistas que decoraram a ponte com suas obras se encontravam os mais proeminentes da Boêmia: Matthias Braun, Jan Brokoff e seus filhos Michael Joseph Brokoff e Ferdinand Maxmilian Brokoff, entre outros.\n[…]\nWebcam na Ponte Carlos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Grande Mesquita de Djenné",
      "descricao": "Mesquita de tijolos de barro cru na cidade de Djenné, na África Ocidental, Patrimônio da UNESCO."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Erguida com tijolos de barro cru e rebocada todo ano pela população, a Grande Mesquita de Djenné fica em qual país africano?",
    "resposta": "Mali",
    "distratores": [
      "Níger",
      "Burkina Faso",
      "Senegal"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Mosque_of_Djenn%C3%A9"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Mosque_of_Djenn%C3%A9",
        "situacao": "ok",
        "texto": "The Great Mosque of Djenné in the Sudano-Sahelian architectural style is the largest adobe brick building in the world. The mosque is located in the city of Djenné, Mali, on the flood plain of the Bani River. The first mosque on the site was built around the 13th century, but the current structure dates from 1907. As well as being the centre of the community of Djenné, it is one of the most famous\n[…]\nElectrical wiring and indoor plumbing have been added to many mosques in Mali. In some cases, the original surfaces of mosques have even been tiled over, destroying their historical appearances and in some cases compromising the building's structural integrity. While the Great Mosque has been equipped with a loudspeaker system, the citizens of Djenné have resisted modernization in favor of the building's historical integrity.\n[…]\nThe original mosque presided over one of the most important Islamic learning centers in Africa during the Middle Ages, with thousands of students coming to study the Quran in Djenné's madrassas. The historic areas of Djenné, including the Great Mosque, were designated a World Heritage Site by UNESCO in 1988. While there are many mosques that are older than its current incarnation, the Great Mosque remains the most prominent symbol of both the city of Djenné and the nation of Mali.\n[…]\nThe mosque features on the coat of arms of Mali.\n[…]\nIslam in Mali\n[…]\nWest African Mosques\n[…]\nBedaux, R.; Diaby, B.; Maas, P., eds. (2003), L'architecture de Djenné (Mali): la pérennité d'un Patrimonie Mondial (in French), Leiden: Rijksmuseum, ISBN 90-5349-420-0.\n[…]\nSanogo, Klessigué; Fané, Yamoussa, eds. (2008), Plan de Conservation et de Gestion des \" Villes anciennes de Djenné \" – Mali, 2008–2012 (in French), République du Mali: Ministère de la Culture du Mali/UNESCO.\n[…]\nIslamic Architecture in Mali\n[…]\nAdobe Mosques of Mali by Sebastian Schutyser Archived 3 March 2021 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Mesquita_de_Jen%C3%A9",
        "situacao": "ok",
        "texto": "A Grande Mesquita de Jené (em francês: Djenné) (em francês:  Grande mosquée de Djenné, em árabe: الجامع الكبير في جينيه) é o maior edifício em adobe do mundo, e é considerada por muitos arquitetos como a maior realização do estilo Sudano-Saheliano, embora tenha muitas influências islâmicas. Localiza-se na cidade de Jené, no Mali, a qual foi declarada como patrimônio mundial pela Unesco em 1988.\n[…]\nA mesquita original foi construída por volta de 1280 por Coi Comboro, o 26.º da rei de Jené, no lugar do seu antigo palácio. No final do século XIX, no entanto, à medida que o número de crentes diminuía a mesquita foi caindo em ruínas. A mesquita foi reconstruída com o seu aspecto original em 1906. Apesar de não haver nenhum documento relatando o aspecto da mesquita, através dos relatos de anciães foram iniciados os trabalhos na mesquita. A construção terminou no ano seguinte.\n[…]\nA mesquita tem muros espessos, nos quais estão enterrados pedaços de madeira de palma, e três torres com perto de 20 metros de altura, e robustos pilares pontiagudos inteiramente feitos de terra seca. Este material é denominado adobe e é fabricado com argila misturada com palha picada, excremento bovino, e, por vezes, manteiga de karité. Uma vez erguida, a parede é coberta com um revisto também de adobe.\n[…]\nA mesquita é danificada todos os anos pelas chuvas que ocorrem de Julho a Outubro, que levam uma parte do revestimento da mesquita, obrigando à manutenção regular do monumento. A esta manutenção dá-se o nome de \"rebocadura\" e tem lugar na estação seca, dando origem a uma grande festa. As mulheres trazem a água, os homens amassam o adobe com os pés e entregam-no aos pedreiros, que se empoleiram nas escadas para estendê-lo nas paredes. Os pedreiros mais velhos verificam a qualidade do trabalho.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Basílica de São Marcos",
      "descricao": "Catedral de estilo bizantino na Praça de São Marcos, em Veneza, na Itália."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os quatro cavalos de bronze da Basílica de São Marcos, em Veneza, foram levados como saque em 1204, na Quarta Cruzada. De qual cidade?",
    "resposta": "Constantinopla",
    "distratores": [
      "Alexandria",
      "Atenas",
      "Antioquia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Horses_of_Saint_Mark",
      "https://en.wikipedia.org/wiki/St_Mark%27s_Basilica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Horses_of_Saint_Mark",
        "situacao": "ok",
        "texto": "The Horses of Saint Mark (Italian: Cavalli di San Marco), also known as the Triumphal Quadriga or the Horses of the Hippodrome of Constantinople, are a group of ancient bronze statues of four horses that originally formed part of a monument depicting a quadriga — a four-horse chariot used in chariot racing and Roman triumphs.\n[…]\nThe horses were placed on the façade, on the loggia above the porch, of St Mark's Basilica in Venice, northern Italy, after the sack of Constantinople in 1204. They remained there until they were looted by Napoleon in 1797, but were returned in his final defeat in 1815. The original sculptures have since been moved indoors for conservation, with replicas now occupying their former position on the loggia.\n[…]\nThe horses, along with the quadriga with which they were depicted, were long displayed at the Hippodrome of Constantinople; they may be the \"four gilt horses that stand above the Hippodrome\" that \"came from the island of Chios under Theodosius II\" mentioned in the 8th- or early 9th-century Parastaseis syntomoi chronikai. As part of the sack of the capital of the Byzantine Empire in the Fourth Crusade, they were looted by Venetian forces in 1204.\n[…]\nThat same year, the collars on the four horses were added to obscure where the animals' heads had been severed to allow them to be transported from Constantinople to Venice. Shortly after the Fourth Crusade, Doge Enrico Dandolo sent the horses to Venice, where they were installed on the terrace of the façade of St Mark's Basilica in 1254. Petrarch admired them there.\n[…]\nIn 1797, Napoleon had the horses forcibly removed from the basilica and carried off to Paris, where they were used in the design of the Arc de Triomphe du Carrousel together with a quadriga.\n[…]\nByzantium 1200 Hippodrome Boxes shows the location of the horses until 1204."
      },
      {
        "url": "https://en.wikipedia.org/wiki/St_Mark%27s_Basilica",
        "situacao": "ok",
        "texto": "The Patriarchal Cathedral Basilica of Saint Mark (Italian: Basilica Cattedrale Patriarcale di San Marco), commonly known as St Mark's Basilica (Italian: Basilica di San Marco; Venetian: Baxéłega de San Marco), is the cathedral church of the Patriarchate of Venice; it became the episcopal seat of the Patriarch of Venice in 1807, replacing the earlier cathedral of San Pietro di Castello. It is dedic\n[…]\nMany of the columns, reliefs, and sculptures were spoils stripped from the churches, palaces, and public monuments of Constantinople as a result of the Venetian participation in the Fourth Crusade. Among the plundered artefacts brought back to Venice were the four ancient bronze horses that were placed prominently over the entry.\n[…]\nParticularly in the period of the Latin Empire (1204–1261), following the Fourth Crusade, the Venetians pillaged the churches, palaces, and public monuments of Constantinople and stripped them of polychrome columns and stones. Once in Venice, some of the columns were sliced for revetmets and patere; others were paired and spread across the façades or used as altars. Despoliation continued in later centuries, notably during the Venetian–Genoese Wars.\n[…]\nThe four gilded bronze horses were among the early spoils brought from Constantinople after the Fourth Crusade. They were part of a quadriga adorning the Hippodrome and are the only equestrian team to survive from classical Antiquity. In the mid-thirteenth century, they were installed prominently on the main façade of St Mark's as symbols of Venice's military triumph over Byzantium and of its newfound imperial status as the successor of the Byzantine Empire.\n[…]\nVeludo, Giovanni, La Pala d'oro della Basilica di San Marco in Venezia (Venezia: F. Ongania, 1887)\n[…]\nZatta, Antonio, Basilica di San Marco (Gregg Press, 1964), reprinted from the original edition of 1761\n[…]\nSt Mark's Basilica travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cavalos_de_S%C3%A3o_Marcos",
        "situacao": "ok",
        "texto": "Os Cavalos de São Marcos, também conhecidos como Cavalos de bronze de Constantino, são quatro estátuas de cavalos em bronze, formando uma quadriga, feitas no século IV a.C. e atribuídas ao escultor grego Lísipo. Atualmente se encontram na Basílica de São Marcos, em Veneza.\n[…]\nAs quatro estátuas são atribuídas por Plínio, o Velho ao escultor Lísipo. No século II, o imperador Trajano as transportou para Roma, onde foram instaladas sobre o Arco de Trajano.\n[…]\nNo século IV, o imperador Constantino as teria enviado para Constantinopla, nova capital do império, onde ornamentaram o Hipódromo de Constantinopla, construído em 203.\n[…]\nEm 1204, Enrico Dandolo, doge de Veneza se apoderou dos cavalos durante o saque de Constantinopla pela Quarta Cruzada e os transportou de volta para a península Itálica. Foram então instalados na fachada da Basílica de São Marcos.\n[…]\nAinda outro imperador se envolveria com os cavalos de bronze. Napoleão Bonaparte, então general chefe do exército que invadiu a península Itálica em nome do diretório, na sua primeira campanha (1796-1797), tomou Veneza e levou as estátuas para Paris, onde foram colocadas no Arco do Triunfo do Carrossel construído entre 1807 e 1809. Após a Batalha de Waterloo e a queda de Napoleão, os saques foram devolvidos a Veneza e à praça de São Marcos em 1815. No topo do arco foram colocadas réplicas.\n[…]\nNa década de 1980, os cavalos originais foram colocados no museu da basílica e substituídos na fachada por réplicas, para proteger da poluição atmosférica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Arco do Triunfo de Paris",
      "descricao": "Arco monumental na Praça Charles de Gaulle, no alto da Champs-Élysées, encomendado por Napoleão."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Sob o Arco do Triunfo, em Paris, uma chama eterna arde sobre o túmulo de quem?",
    "resposta": "Soldado Desconhecido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Arc_de_Triomphe",
      "https://en.wikipedia.org/wiki/Tomb_of_the_Unknown_Soldier_(France)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arc_de_Triomphe",
        "situacao": "ok",
        "texto": "The Arc de Triomphe de l'Étoile (UK: , US: , French: [aʁk də tʁijɔ̃f də letwal] ; \"Triumphal Arch of the Star\"), often simply called the Arc de Triomphe, is one of the most famous monuments in Paris, France. It is located at the western end of the Champs-Élysées, at the centre of the Place Charles de Gaulle—formerly known as the \"Place de l'Étoile\"—named for the star-shaped configuration formed by\n[…]\nBy the early 1960s, the monument had grown very blackened from coal soot and automobile exhaust, and during 1965–1966 it was cleaned through bleaching. In the prolongation of the Avenue des Champs-Élysées, a new arch, the Grande Arche de la Défense, was built in 1982, completing the line of monuments that forms Paris's Axe historique. After the Arc de Triomphe du Carrousel and the Arc de Triomphe de l'Étoile, the Grande Arche is the third arch built on the same perspective.\n[…]\nIn 1961, U.S. President John F. Kennedy and First Lady Jacqueline Kennedy paid their respects at the Tomb of the Unknown Soldier, accompanied by President Charles de Gaulle. After the 1963 assassination of President Kennedy, Mrs. Kennedy remembered the eternal flame at the Arc de Triomphe and requested that an eternal flame be placed next to her husband's grave at the Arlington National Cemetery in Virginia, United States.\n[…]\nWhile many structures around the world resemble the Arc de Triomphe, some were actually inspired by it. Replicas that used its design as a model include the Rosedale World War I Memorial Arch in Kansas City, United States (1924); the Arcul de Triumf in Bucharest, Romania (1936); the Arch of Triumph in Pyongyang, North Korea (1982); a miniature version at the Paris Casino in Las Vegas, United States (1999); and the Simpang Lima Gumul Monument in Kediri, Indonesia (2008).\n[…]\nSatellite view of the Arc de Triomphe on Google Maps\n[…]\nView from the rooftop terrace of the Arc de Triomphe on YouTube"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tomb_of_the_Unknown_Soldier_(France)",
        "situacao": "ok",
        "texto": "The Tomb of the Unknown Soldier (French: Tombe du Soldat inconnu) holds an unidentified member of the French armed forces killed during the First World War, to symbolically commemorate all soldiers who have died for France throughout history.\n[…]\nIt was installed in Paris under the Arc de Triomphe on 11 November 1920, simultaneously with the interment of a British unknown soldier in Westminster Abbey, making both graves the first examples of a tomb of the Unknown Soldier, and the first to honour the unknown dead of the First World War.\n[…]\nFounded in 1925 and declared on 16 October 1930, the association La Flamme sous l'Arc de Triomphe (\"The Flame under the Arc de Triomphe\") designated General Gouraud, a war-maimed military governor of Paris, as its first president; he held this position until his death in 1946. The eternal flame was briefly extinguished during the 1998 World Cup by a drunk tourist.\n[…]\nOn 6 August 2025, a Moroccan man was charged for using Paris' Eternal Flame to light a cigarette.\n[…]\nThe idea of a symbolic Tomb of the Unknown Soldier has spread to other countries. In 1921, the United States unveiled their own Tomb of the Unknown Soldier at Arlington National Cemetery in Arlington, Virginia just across the Potomac River from Washington, D.C., while Portugal also unveiled its Túmulo do Soldado Desconhecido, and Italy its La tomba del Milite Ignoto. Many other nations have also followed the practice and created their own tombs.\n[…]\nFerreira Martins, Maria Amélia (1937). O soldado desconhecido e a chama eterna The unknown warrior and the perpetual flame = Le soldat inconnu et la flamme perpetuelle (in Portuguese). Tipo da L.C.G.G. OCLC 496904993."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arco_do_Triunfo_%28Fran%C3%A7a%29",
        "situacao": "ok",
        "texto": "O Arco do Triunfo (francês: Arc de Triomphe) é um monumento localizado na cidade de Paris, construído em comemoração às vitórias militares de Napoleão Bonaparte, o qual ordenou a sua construção em 1806, aos moldes dos arcos triunfais romanos. Inaugurado em 1836, a monumental obra detém, gravados, os nomes de 158 batalhas e 660 líderes militares. Em sua base, situa-se o túmulo do soldado desconheci\n[…]\nSob o Arco está o Túmulo do Soldado Desconhecido da Primeira Guerra Mundial. Enterrado no Dia do Armistício de 1920, uma chama eterna arde em memória dos mortos que nunca foram identificados (agora em ambas as guerras mundiais).\n[…]\nUma cerimônia é realizada no Túmulo do Soldado Desconhecido todo dia 11 de novembro, no aniversário do Armistício de 11 de novembro de 1918, assinado pelas Potências da Entente e Alemanha em 1918. Originalmente, foi decidido em 12 de novembro de 1919 enterrar os restos do soldado desconhecido no Panteão, mas uma campanha pública de cartas levou à decisão de enterrá-lo sob o Arco do Triunfo.\n[…]\nO caixão foi colocado na capela do primeiro andar do Arco em 10 de novembro de 1920 e colocado em seu local de descanso final em 28 de janeiro de 1921. A placa no topo traz a inscrição: Ici repose un soldat français mort pour la Patrie, 1914-1918 (\"Aqui repousa um soldado francês morto pela Pátria, 1914-1918\").\n[…]\nEm 1961, o presidente dos EUA, John F. Kennedy, e a primeira-dama, Jacqueline Kennedy, prestaram suas homenagens no Túmulo do Soldado Desconhecido, acompanhados pelo presidente Charles de Gaulle. Após o assassinato do presidente Kennedy em 1963, a Sra. Kennedy lembrou-se da chama eterna no Arco do Triunfo e solicitou que uma chama eterna fosse colocada ao lado do túmulo de seu marido no Cemitério Nacional de Arlington, na Virgínia.\n[…]\nParis\n[…]\n«Vista de satélite do Arco do Triunfo»  no Google Maps\n[…]\n«Vista do terraço do Arco do Triunfo»  no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Mosteiro dos Jerónimos",
      "descricao": "Mosteiro manuelino do século dezesseis no bairro de Belém, em Lisboa, Patrimônio da UNESCO."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Mosteiro dos Jerónimos, em Lisboa, ficam os túmulos do navegador Vasco da Gama e de qual poeta?",
    "resposta": "Luís de Camões",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jer%C3%B3nimos_Monastery"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jer%C3%B3nimos_Monastery",
        "situacao": "ok",
        "texto": "The Jerónimos Monastery or Hieronymites Monastery (Portuguese: Mosteiro dos Jerónimos, pronounced [muʃˈtɐjɾu ðu(ʒ) ʒɨˈɾɔnimuʃ]) is a former monastery of the Order of Saint Jerome near the Tagus river in the parish of Belém, in the Lisbon Municipality, Portugal. It became the necropolis of the Portuguese royal dynasty of Aviz in the 16th century but was secularized on 28 December 1833 by state decr\n[…]\nIn 1880, da Gama's remains and those of the poet Luís de Camões (who celebrated da Gama's first voyage in his 1572 epic poem The Lusiad), were moved to new carved tombs in the nave of the monastery's church, only a few meters away from the tombs of the kings Manuel I and John III, whom da Gama had served. In 1983, the Jerónimos Monastery was classified as a UNESCO World Heritage Site, along with the nearby Tower of Belém.\n[…]\nIn 1640, the prior Bento de Siqueira ordered construction of the monastery's library, where books owned by the Infante Luís (son of King Manuel I) and others linked to the religious order were deposited.\n[…]\nTo celebrate the 1898 fourth centenary of the arrival of Vasco da Gama in India, it was decided to restore the tomb of the explorer in 1894. The tombs of Vasco da Gama and Luís de Camões, carved by the sculptor Costa Mota, were placed in the southern lateral chapel. A year later the monastery received the remains of the poet João de Deus, later joined by the tombs of Almeida Garret (1902), Sidónio Pais (1918), Guerra Junqueiro (1923) and Teófilo Braga (1924).\n[…]\nWithin the church, in the lower choir, are the stone tombs of Vasco da Gama (1468–1523), and of the great poet and chronicler of the Age of Discoveries, Luís de Camões (1527–1580). Both tombs were sculpted by the 19th-century sculptor Costa Mota in a harmonious neo-Manueline style. The mortal remains of both were transferred to these tombs in 1880.\n[…]\nJerónimos Monastery on Google Arts & Culture"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mosteiro_dos_Jer%C3%B3nimos",
        "situacao": "ok",
        "texto": "O Mosteiro de Santa Maria de Belém, mais conhecido como Mosteiro dos Jerónimos, é um mosteiro português, mandado construir no final do século XV pelo rei D. Manuel I e estava entregue à Ordem de São Jerónimo. Situa-se na freguesia de Belém, na cidade e concelho de Lisboa. Tem, desde 2016, o estatuto de Panteão Nacional.\n[…]\nPara atender a estas novas demandas o Infante Dom Henrique, em 1452, ordenou a construção da Ermida de Santa Maria de Belém e ainda serviços de canalização de água, casas para habitação do presbitério e terrenos para produção agrícola. Nessa igreja, os grandes navegadores como Pedro Álvares Cabral, Vasco da Gama e outros, faziam vigílias antes de partirem para as suas grandes viagens marítimas.\n[…]\nDois anos depois, o mesmo rei doou aos frades jerónimos o lugar de Santa Maria de Belém, para construção de um mosteiro que deveria ter capacidade para albergar 100 religiosos e onde deveria ser dada continuidade aos serviços públicos anteriormente prestados aos navegantes pela Ordem de Cristo.\n[…]\nNessa altura a Casa Pia abandonou a zona do claustro; os túmulos de Camões e Vasco da Gama foram transferidos do cruzeiro para o subcoro; foi reconstruída a galilé da portaria.\n[…]\nNa capela à esquerda do transepto está sepultado o Cardeal-Rei D. Henrique e os dos filhos de D. Manuel I; na que se situa à direita encontra-se o túmulo de D. Sebastião e dos descendentes de D. João III. A igreja acolhe também os túmulos de Camões e Vasco da Gama, da autoria de Costa Mota, tio.\n[…]\nSobre a balaustrada do coro-alto ergue-se um 'Cristo Crucificado' (1550) do escultor flamengo Philippe de Vries (Filipe Brias); oferecido em 1551 pelo Infante D. Luís, é considerado um marco do triunfo do renascimento em Portugal. O conjunto de pinturas representando os apóstolos que integra o cadeiral é de autor desconhecido.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Muro das Lamentações",
      "descricao": "Trecho de muro antigo na Cidade Velha de Jerusalém, local sagrado de oração para os judeus."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O Muro das Lamentações, em Jerusalém, é o que restou da muralha que cercava qual construção destruída pelos romanos no ano setenta?",
    "resposta": "Segundo Templo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Western_Wall"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Western_Wall",
        "situacao": "ok",
        "texto": "The Western Wall (Hebrew: הַכּוֹתֶל הַמַּעֲרָבִי, romanized: HaKotel HaMa'aravi lit. 'the western wall'; Ashkenazi Hebrew pronunciation: HaKosel HaMa'arovi) is an ancient retaining wall of the built-up hill known to Jews and Christians as the Temple Mount of Jerusalem.\n[…]\nIn 1517, the Turkish Ottomans under Selim I conquered Jerusalem from the Mamluks who had held it since 1250. Selim's son, Sultan Suleiman the Magnificent, ordered the construction of an imposing wall to be built around the entire city, which still stands today. Various folktales relate Suleiman's quest to locate the Temple site and his order to have the area \"swept and sprinkled, and the Western Wall washed with rosewater\" upon its discovery.\n[…]\nBut in the first week of our visit, before this decree, we went all the way in, and kissed it, and I prostrated myself before its base, and there I said the ordered prayers, and also entreated God to bless all the Jews of Carpi ... Though it is called the Western Wall, nothing of the Temple whatever survived the destruction, the looting by thieves, and the construction of the mosque. They built a citadel on the site of the Foundation Stone, surpassingly lovely ...Tensions eventually calmed again.\n[…]\nWhile recognizing the difficulties inherent in any ultimate peace agreement that involves the status of Jerusalem, the official position of the United States includes a recognition of the importance of the Wall to the Jewish people, and has condemned statements that seek to \"delegitimize\" the relationship between Jews and the area in general, and the Western Wall in particular.\n[…]\nWestern Wall camera\n[…]\nThe Western Wall Online Archived February 19, 2019, at the Wayback Machine – online services related to the Kotel: Prayer note, Live cam, and Information"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Muro_das_Lamenta%C3%A7%C3%B5es",
        "situacao": "ok",
        "texto": "Esta página contém alguns caracteres especiais e é possível que a impressão não corresponda ao artigo original.\n[…]\nO Muro das Lamentações, Muro Alburaque ou Muro Ocidental (em hebraico: הַכּוֹתֶל הַמַּעֲרָבִי, romaniz: HaKotel HaMa'aravi; lit. 'o muro ocidental') é uma antiga muralha de contenção construída na colina conhecida por judeus e cristãos como Monte do Templo de Jerusalém. Sua seção mais famosa também é frequentemente referida pelos judeus como Kotel ou Kosel, enquanto no mundo árabe e islâmico é conhecida como Muro Alburaque (em árabe: حَائِط ٱلْبُرَاق; romaniz.: Ḥā’iṭ al-Burāq).\n[…]\nO Primeiro Templo, ou Templo de Salomão, foi construído no século X a.C., e derrubado pelos babilónios em 586 a.C. O Segundo Templo, entretanto, foi construído por Zorobabel após o Exílio Babilônico, e voltou a ser destruído pelos romanos no ano 70 da nossa era, durante a Primeira Guerra Judaico-Romana. Deste modo, cada templo esteve erguido durante 400 anos.[carece de fontes]?\n[…]\nQuando as legiões do então general Tito destruíram o templo, só uma parte do muro exterior ficou em pé. Tito deixou este muro para que os judeus tivessem a amarga lembrança de que Roma vencera a Judeia (daí o nome de Muro das Lamentações). Os judeus, porém, atribuíram-no a uma promessa feita por Deus, segundo a qual sempre ficaria de pé ao menos uma parte do sagrado templo como símbolo da sua aliança perpétua com o povo judeu.\n[…]\n«Vista panorâmica em 360° do Muro das Lamentações»\n[…]\n«Streaming en directo do Muro das Lamentações». (Formato WMV9)\n[…]\n«Imagens em directo do Muro»\n[…]\n«Parte do Muro em 3D»\n[…]\n«Jerusalem Photo Portal - Imagens do Muro»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Pirâmides de Gizé",
      "descricao": "Conjunto de três grandes pirâmides do Egito Antigo no planalto de Gizé, perto do Cairo."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre as três grandes pirâmides do planalto de Gizé, no Egito, qual é a maior?",
    "resposta": "Pirâmide de Quéops",
    "distratores": [
      "Pirâmide de Quéfren",
      "Pirâmide de Miquerinos",
      "Pirâmide de Djoser"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
      "https://en.wikipedia.org/wiki/Giza_pyramid_complex"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
        "situacao": "ok",
        "texto": "The Great Pyramid of Giza is the largest of the Egyptian pyramids and the most famous landmark of the Giza pyramid complex in Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only wonder that has remained largely intact. The Great Pyramid served as the tomb of Egyptian Pharaoh Khufu (\"Cheops\"), who ruled during the Fourth Dynasty of the Old Kingdom. It was built c. \n[…]\nThe ancient Greeks believed that slave labour was used, but modern discoveries made at nearby workers' camps associated with construction at Giza suggest that it was built by thousands of conscript labourers.\n[…]\nWorker graffiti found at Giza suggest haulers were divided into zau (singular za), groups of 40 men, consisting of four sub-units that each had an \"Overseer of Ten\".\n[…]\nUnfinished casing blocks of the pyramids of Menkaure and Henutsen at Giza suggest that the front faces were smoothed only after the stones were laid, with chiselled seams marking correct positioning and where the superfluous rock would have to be trimmed off.\n[…]\nThe result is a cedar-wood boat 43.6 metres (143 ft) long, its timbers held together by ropes, which was originally housed in the Giza Solar boat museum, a special boat-shaped, air-conditioned museum beside the pyramid. The boat is now in the Grand Egyptian Museum.\n[…]\nFlanking the Giza pyramid complex is a cyclopean stone wall, the Wall of the Crow. Mark Lehner discovered a worker's town outside the wall, otherwise known as \"The Lost City\", dated by pottery styles, seal impressions and stratigraphy to have been constructed and occupied during the reigns of Khafre (2520–2494 BC) and Menkaure (2490–2472 BC).\n[…]\nMedia related to Great Pyramid of Giza at Wikimedia Commons\n[…]\n\"The Giza Plateau Mapping Project\". Oriental Institute. Archived from the original on 11 March 2008. Retrieved 12 February 2008.\n[…]\nGeographic data related to Great Pyramid of Giza at OpenStreetMap"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Giza_pyramid_complex",
        "situacao": "ok",
        "texto": "The Giza pyramid complex (also called the Giza necropolis) in Egypt is home to the Great Pyramid, the pyramid of Khafre, and the pyramid of Menkaure, along with their associated pyramid complexes and the Great Sphinx. All were built during the Fourth Dynasty of the Old Kingdom of ancient Egypt, between c. 2600 – c. 2500 BC. The site also includes several temples, cemeteries, and the remains of a w\n[…]\nIn 1903, rights to excavate the West Field and Pyramids of the Giza Necropolis were divided by three institutions from Italy, Germany, and the United States of America.\n[…]\nBy the turn of the 20th century, the three largest pyramids on the Giza plateau were considered mostly exhausted by previous excavations, so the Western Cemetery and its collection of private mastaba tombs were thought to represent the richest unexcavated part of the plateau. George Reisner's wife, Mary, drew names from a hat to assign three long east-west plots of the necropolis among the Italian, German, and American missions.\n[…]\nThis arrangement lasted until 1905, when, under the supervision of Schiaparelli and Francesco Ballerini, the Italian excavations ceased at Giza. As the Italians were more interested in sites which might yield more papyri, they turned their concession of the southern strip of the Western Cemetery over to the Americans under Reisner.\n[…]\nGiza Plateau\n[…]\nPyramids in Giza – Pictures of Giza Pyramids published under Creative Commons License.\n[…]\nWebsite of the Ancient Egypt Research Associates, researching Giza for over 30 years\n[…]\nThe Giza Archives at Harvard University – since 2010, the Giza Archives Project website. Archived 11 October 2008 at the Wayback Machine maintained by the Museum of Fine Arts, in Boston, has moved to Harvard University with an improved, expanded website. This website is a comprehensive resource for research on Giza."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pir%C3%A2mide_de_Qu%C3%A9ops",
        "situacao": "ok",
        "texto": "Pirâmide de Quéops, também conhecida como a Grande Pirâmide de Gizé ou simplesmente Grande Pirâmide, é a mais antiga e a maior das três pirâmides na Necrópole de Gizé, na fronteira de Gizé, no Egito. É a mais antiga das Sete Maravilhas do Mundo Antigo e a única a permanecer em grande parte intacta.\n[…]\nA parte principal do complexo de Gizé é um conjunto de edifícios que inclui dois templos mortuários em honra a Quéops (um perto da pirâmide e um perto do Nilo), três pirâmides menores para esposas do faraó, uma pirâmide \"satélite\" ainda menor, uma calçada que liga os dois templos e as pequenas mastabas que cercam a pirâmide e que foram feitas para os nobres da sociedade egípcia antiga.\n[…]\nIsto contrasta com os sarcófagos finamente acabados e decorados encontrados em outras pirâmides do mesmo período.\n[…]\nA Necrópole de Gizé, que inclui entre outras estruturas as pirâmides de Quéops, Quéfren e Miquerinos, é cercado por um muro de pedra ciclópica, o Muro do Corvo. O arqueólogo estadunidense Mark Lehner descobriu uma cidade de trabalhadores fora da parede, também conhecida como \"A Cidade Perdida\", datada por estilos de cerâmica, impressões de selos e estratigrafia que pode ter sido construída e ocupada em algum ponto durante os reinados de Quéfren (2 520-2 494 a.C.) e Miquerinos (2 490-2 472 a.C.).\n[…]\nEle também discute uma história contada por Heródoto, que visitou o Egito no século V a.C. e relata uma história que lhe foi contada sobre abóbadas sob a pirâmide construída em uma ilha onde o corpo de Quéops está. Edwards observa que a pirâmide \"quase certamente foi aberta e seu conteúdo saqueado muito antes do tempo de Heródoto\" e que poderia ter sido fechada novamente durante a XXVI dinastia egípcia, quando outros monumentos foram restaurados.\n[…]\n«Modelo em 3D do interior da Pirâmide de Quéops.»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Giralda",
      "descricao": "Torre sineira da Catedral de Sevilha, na Espanha, coroada por um cata-vento em forma de estátua."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes de virar o campanário da Catedral de Sevilha, a torre da Giralda foi construída no século doze para servir de quê?",
    "resposta": "Minarete de uma mesquita",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giralda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giralda",
        "situacao": "ok",
        "texto": "The Giralda (Spanish: La Giralda [la xiˈɾalda]) is the bell tower of Seville Cathedral in Seville, Spain. It was built as the minaret for the Great Mosque of Seville in al-Andalus, during the reign of the Almohad dynasty, with a Renaissance-style belfry added by the Catholics after the expulsion of the Muslims from the area. The cathedral, including the Giralda, was registered in 1987 as a World H\n[…]\nFrom the beginning, craftsmen from all over Al-Andalus and the Maghreb were enlisted in the mosque's planning, construction, and decoration, and the caliph himself was highly invested in the process and was said to have visited the site daily. By 1176, the mosque was complete, save for the minaret; however, Friday prayer was not held there until 1182.\n[…]\nUpon returning to al-Andalus in 1184 for a new military campaign, Aby Ya'qub Yusuf ordered the construction of the minaret. However, construction halted that same year with the death of the architect and, a month and a half later, the caliph, who died while commanding the Siege of Santarém. His son, Abu Yusuf Yaqub al-Mansur, ordered construction on the minaret to continue upon his accession in 1184, but the work stalled again soon after and did not restart until 1188.\n[…]\nThe minaret of the mosque still stands as the Giralda. The base at street level is a square of 13.6 m (45 ft) on the side and which sits on a solid foundation which is a bit wider, 15–16 m (49.21–52.49 ft) and about 5 m (16 ft) deep. The foundation is built with solid, rectangular stones, some taken and reused from the nearby walls of the former Abbadid palace and from the Roman city walls.\n[…]\nNumerous replicas of the Giralda have been built in the United States, mostly between 1890 and 1937:\n[…]\nBlueprints of Seville's Cathedral and Giralda[link removed], by Hernán Ruiz"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Giralda",
        "situacao": "ok",
        "texto": "A Giralda (em castelhano La Giralda) é a torre sineira para a Catedral de Sevilha, cuja maior parte (a inferior) era o minarete da Grande Mesquita de Sevilha. Tem 94,7 metros de altura e faz parte do sítio do Património Mundial da UNESCO \"Catedral, Alcázar e Arquivo das Índias de Sevilha\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.67 — 2026-10-13**
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

Uma **coleção** é um conjunto de perguntas sobre um mesmo universo, com um modo de jogo próprio (decidido em 2026-10-13). Cada coleção tem um documento próprio com as diretrizes dela; a única até agora é a de **pokémon**, do modo Pokémon, em [`modo_pokemon.md`](modo_pokemon.md).

- A pergunta da coleção tem o campo `colecao`. O modo da coleção sorteia só as perguntas dela, de qualquer tema.
- **Exclusiva** (campo `exclusiva`): a pergunta sai **só no modo da coleção**, nunca no jogo original (Master, Trilha da Vida, Linear).
- **Subtema da coleção** (campo `subtema_colecao`): uma coleção pode ter subtemas próprios, definidos no documento dela, que dividem as perguntas dentro do modo. Eles não substituem tema e subtema, e a lista canônica (§3) não muda. A folga para sobreposição entre eles também é definida no documento da coleção.
- As perguntas da coleção seguem todas as regras desta Parte I: tema e subtema, âncora, saturação e fontes. Podem ser com ou sem figura.
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
