Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Américas Pré-Colombianas** (tema **História**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Império Inca",
      "descricao": "Estado pré-colombiano andino, centrado em Cusco, que dominou boa parte da costa oeste da América do Sul nos séculos quinze e dezesseis."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre os Estados indígenas que os europeus encontraram nas Américas, qual tinha o maior território?",
    "resposta": "Império Inca",
    "distratores": [
      "Império Asteca",
      "Reino Chimu",
      "Império Tarasco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Inca_Empire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inca_Empire",
        "situacao": "ok",
        "texto": "The Inca Empire, officially known as the Realm of the Four Parts (Quechua: Tawantinsuyu pronounced [taˈwantiŋ ˈsuju], lit. 'land of four parts'), was the largest empire in pre-Columbian America. The administrative, political, and military center of the empire was in the city of Cusco. The Inca civilisation rose from the Peruvian highlands sometime in the early 13th century. The Portuguese explorer\n[…]\nThe Inca Empire was unique in that it lacked many of the features associated with civilization in the Old World. The anthropologist Gordon McEwan wrote that the Incas were able to construct \"one of the greatest imperial states in human history\" without the use of the wheel, draft animals, knowledge of iron or steel, or even a system of writing.\n[…]\nWhen the conquistadors returned to Peru in 1532, a war of succession between the sons of Sapa Inca Huayna Capac, Huáscar and Atahualpa, and unrest among newly conquered territories weakened the empire. Perhaps more importantly smallpox, influenza, typhus, and measles had potentially spread from Central America.\n[…]\nFollowing Pachacuti, the Sapa Inca claimed descent from Inti, who placed a high value on imperial blood; by the end of the empire, it was common to incestuously wed brother and sister. He was \"son of the sun\", and his people the Intip churin, or \"children of the sun\", and both his right to rule and mission to conquer derived from his holy ancestor.\n[…]\nGuaman Poma's 1615 book, El primer nueva corónica y buen gobierno, shows numerous line drawings of Inca flags. In his 1847 book A History of the Conquest of Peru, William H. Prescott says that in the Inca army each company had its particular banner and that the imperial standard, high above all, displayed the glittering device of the rainbow, the armorial ensign of the Incas.\" A 1917 world flags book says the Inca \"heir-apparent ...\n[…]\nInca Religion\n[…]\nA Map and Timeline of Inca Empire events"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imp%C3%A9rio_Inca",
        "situacao": "ok",
        "texto": "Império Inca (em quíchua:  Tawantinsuyu, lit. \"quatro partes juntas\") foi o maior império da América pré-colombiana. O centro administrativo, político e militar do império ficava na cidade de Cusco. A civilização inca surgiu nas terras altas do Peru em algum momento do início do século XIII. Seu último reduto foi conquistado pelos espanhóis em 1572.\n[…]\nO Império Inca foi o último capítulo de milhares de anos das civilizações andinas. A civilização andina foi uma das cinco civilizações do mundo consideradas pelos estudiosos como \"intocada\", ou seja, indígena e não derivada de outras civilizações.\n[…]\nTroll também argumentou que as lhamas, o animal de carga dos incas, podem ser encontradas em maior número nesta mesma região. Vale a pena considerar que a extensão máxima do Império Inca coincidiu aproximadamente com a distribuição de lhamas e alpacas na América pré-hispânica. A ligação entre os biomas andinos de puna e páramo, o pastoralismo e o Estado inca é uma questão em estudo. Como um terceiro ponto, Troll apontou a tecnologia de irrigação como vantajosa para a construção do Estado inca.\n[…]\nQuando os conquistadores retornaram ao Peru em 1532, uma guerra de sucessão entre os filhos de Sapa Inca Huayna Capac, Huáscar e Atahualpa, e a agitação entre os territórios recém-conquistados enfraqueceram o império. Talvez mais importante, doenças como a varíola, a gripe, o tifo e o sarampo também se espalharam pela América Central através dos europeus.\n[…]\nO Império Inca era um sistema federalista que consistia em um governo central com os incas no topo e quatro quadrantes, ou suyu: Chinchay Suyu (NW), Anti Suyu (NE), Kunti Suyu (SW) e Qulla Suyu (SE). Eles se encontravam no centro, Cusco. Esses suyu provavelmente foram criados por volta de 1460 durante o reinado de Pachacuti, antes que o império atingisse sua maior extensão territorial.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Império Inca",
      "descricao": "Estado pré-colombiano andino, centrado em Cusco, que dominou boa parte da costa oeste da América do Sul nos séculos quinze e dezesseis."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Os incas guardavam registros em cordões com nós porque não tinham algo que maias e astecas já usavam. O quê?",
    "resposta": "Escrita",
    "distratores": [
      "Calendário",
      "Números",
      "Cerâmica"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Inca_Empire",
      "https://en.wikipedia.org/wiki/Quipu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inca_Empire",
        "situacao": "ok",
        "texto": "The Inca Empire, officially known as the Realm of the Four Parts (Quechua: Tawantinsuyu pronounced [taˈwantiŋ ˈsuju], lit. 'land of four parts'), was the largest empire in pre-Columbian America. The administrative, political, and military center of the empire was in the city of Cusco. The Inca civilisation rose from the Peruvian highlands sometime in the early 13th century. The Portuguese explorer\n[…]\nThe Inca Empire was unique in that it lacked many of the features associated with civilization in the Old World. The anthropologist Gordon McEwan wrote that the Incas were able to construct \"one of the greatest imperial states in human history\" without the use of the wheel, draft animals, knowledge of iron or steel, or even a system of writing.\n[…]\nWhen the Spaniards arrived in the Empire of the Incas, they gave the name Peru to what the natives knew as Tawantinsuyu. The name \"Inca Empire\" originated from the Chronicles of the 16th century.\n[…]\nGuaman Poma's 1615 book, El primer nueva corónica y buen gobierno, shows numerous line drawings of Inca flags. In his 1847 book A History of the Conquest of Peru, William H. Prescott says that in the Inca army each company had its particular banner and that the imperial standard, high above all, displayed the glittering device of the rainbow, the armorial ensign of the Incas.\" A 1917 world flags book says the Inca \"heir-apparent ...\n[…]\nThe Incas had no iron or steel and their weapons were not much more effective than those of their opponents so they often defeated opponents by sheer force of numbers, or else by persuading them to surrender beforehand by offering generous terms. Inca weaponry included \"hardwood spears launched using throwers, arrows, javelins, slings, the bolas, clubs, and maces with star-shaped heads made of copper or bronze\".\n[…]\n\"Ice Treasures of the Inca\", National Geographic site.\n[…]\nInca Religion\n[…]\nA Map and Timeline of Inca Empire events"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Quipu",
        "situacao": "ok",
        "texto": "Quipu ( KEE-poo), also spelled khipu (Ayacucho Quechua: kipu, [ˈkipu]; Cusco Quechua: khipu, [kʰipu]), are record-keeping devices fashioned from knotted cords. They were historically used by various cultures in the central Andes of South America, most prominently by the Inca Empire.\n[…]\nQuipucamayocs were from a class of people, \"males, fifty to sixty\", and were not the only members of Inca society to use quipus. Inca historians used quipus when telling the Spanish about Tawantin Suyu history (whether they only recorded important numbers or actually contained the story itself is unknown).\n[…]\nIn 1994, the American cultural anthropologist Frank Salomon conducted a study in the Peruvian village of Tupicocha, where quipus are still an important part of the social life of the village. As of 1994, this was the only known village where quipus with a structure similar to pre-Columbian quipus were still used for official local government record-keeping and functions, although the villagers did not associate their quipus with Inca artifacts.\n[…]\nThe Mysterious Cities of Gold (1982):  As the daughter of an Inca priest, Zia can read and create quipu and is depicted doing so in several episodes.\n[…]\nDa Vinci's Demons (2014): In Season 3, Episode 5, Leonardo and his associates are captured by an Inca patrol, who are given updated orders recorded on a quipu.\n[…]\nThe Khipu Keepers: Explore the undeciphered writing of the Incas (2020 exhibition by the Google Arts & Culture in collaboration with the Lima Art Museum)\n[…]\nNew Details Emerge About Ancient Inca Counting Technology - Gizmodo - Margherita Bassi - August 13, 2025\n[…]\n\"Experts 'decipher' Inca strings\". BBC News. 12 August 2005."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imp%C3%A9rio_Inca",
        "situacao": "ok",
        "texto": "Império Inca (em quíchua:  Tawantinsuyu, lit. \"quatro partes juntas\") foi o maior império da América pré-colombiana. O centro administrativo, político e militar do império ficava na cidade de Cusco. A civilização inca surgiu nas terras altas do Peru em algum momento do início do século XIII. Seu último reduto foi conquistado pelos espanhóis em 1572.\n[…]\nO Império Inca foi único por não ter muitas das características associadas às civilizações no Velho Mundo. O antropólogo Gordon McEwan escreveu que os incas foram capazes de construir \"um dos maiores Estados imperiais da história humana\" sem o uso da roda, de animais de tração, conhecimento de ferro ou aço ou mesmo um sistema de escrita\".\n[…]\nOs incas também mantinham registros usando quipus .\n[…]\nEnquanto Cusco era essencialmente governada pelos Sapa Inca, seus parentes e as linhagens reais panaqa, cada suyu era governado por um Apu, um termo de estima usado para homens de status elevado e para montanhas veneradas. Tanto Cusco como um distrito e quanto os quatro suyu como regiões administrativas eram agrupados nas divisões hanan (superior) e hurin (inferior). Como os incas não tinham registros escritos, é impossível listar exaustivamente o wamani constituinte.\n[…]\nQuase todos os trabalhos feitos em ouro e prata pelo Império Inca foi derretido pelos conquistadores e enviado de volta para a Espanha.\n[…]\nA literatura inca é um dos aspectos mais fascinantes da cultura pré-colombiana, caracterizada por sua rica tradição oral e formas de expressão únicas. Diferentemente dos seus contemporâneos astecas, os Incas não parecem ter desenvolvido a escrita, apesar de muitas pesquisas terem buscado associar os desenhos que ornavam os tecidos e tapeçarias como picotgramas ou ideogramas, nada se concluiu de forma definitiva.\n[…]\n«Garcilaso Inca de La Vega:» (em espanhol). Comentarios Reales de los Incas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Lhama",
      "descricao": "Camelídeo domesticado nos Andes, usado pelos incas como animal de carga e fonte de lã e carne."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Sem cavalos nem bois, que animal os incas usavam para carregar fardos pelas estradas dos Andes?",
    "resposta": "Lhama",
    "distratores": [
      "Alpaca",
      "Vicunha",
      "Guanaco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Llama"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Llama",
        "situacao": "ok",
        "texto": "The llama (; Spanish pronunciation: [ˈʎama] or [ˈʝama]; Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the pre-Columbian era.\n[…]\nLlamas are social animals and live with others as a herd. Their wool is soft and contains only a small amount of lanolin. Llamas can learn simple tasks after a few repetitions. When using a pack, they can carry about 25 to 30% of their body weight for 8 to 13 km (5–8 miles). The name llama (also historically spelled \"lama\" or \"glama\") was adopted by European settlers from native Peruvian Quechua.\n[…]\nthe llama, Lama glama (Linnaeus);\n[…]\nthe vicuña, Lama vicugna (Molina)\n[…]\nBoth the price and number of llamas in the US climbed rapidly in the 1980s and 1990s. With little market for llama fiber or meat in the US and the value of guard llamas limited, the primary value in llamas was in breeding more animals, a classic sign of a speculative bubble in agriculture. By 2002, there were almost 145,000 llamas in the US, according to the US Department of Agriculture, and animals sold for as much as $220,000.\n[…]\nHowever, the lack of any end market for the animals resulted in a crash in both llama prices and the number of llamas; the Great Recession further dried up investment capital, and the number of llamas in the US began to decline as fewer animals were bred and older animals died of old age. By 2017, the number of llamas in the US had dropped below 40,000. A similar speculative bubble was experienced with the closely related alpaca, which burst shortly after the llama bubble.\n[…]\n\"Llama\" . Encyclopædia Britannica. Vol. 16 (11th ed.). 1911. p. 829.\n[…]\n\"Llama\" . Encyclopedia Americana. 1920."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lhama",
        "situacao": "ok",
        "texto": "A lhama (português brasileiro) ou lama (português europeu) (Lama glama), do quíchua llama, é um mamífero ruminante da América do Sul, da família dos camelídeos, género Lama. É um animal de pelagem longa e lanosa, domesticado para a utilização no transporte de carga e na produção de lã, carne e couro.\n[…]\nA lhama é uma parente do guanaco, da vicunha e da alpaca. Foram domesticadas pelo povo inca, tendo sido muito importantes para o desenvolvimento desse povo.\n[…]\nAs lhamas vivem na cordilheira dos Andes, onde as temperaturas são baixas. Assim, as pelagens servem para protegê-las do frio, além de arranhões e outros ferimentos. A lhama é conhecida pela sua natureza calma, muitas vezes andando devagar, porém pode se irritar facilmente: por este motivo, foi considerada o oitavo animal mais irritável do mundo segundo o canal Animal Planet. Quando irritada ou para chamar a atenção, espirra seu muco na direção do objeto de sua irritação.\n[…]\nAs palavras lama e lhama são substantivos uniformes, comuns de dois gêneros, portanto tanto se pode dizer a lhama, o lhama, a lama ou o lama.\n[…]\nO lhama tem pelagem longa e lanosa, a coloração varia bastante indo desde o branco, marrom e chegando a tons mais escuros, alimenta-se de capim e mato. Estes animais medem de 1,40 m a 2,4 m contando com a cauda de 25 cm e chegam a pesar 150 kg. A gestação dura 11 meses e nasce normalmente um filhote chegando a pesar 11 kg. Os adultos chegam a viver até 24 anos.\n[…]\nCama (animal) — híbrido de lhama com dromedário\n[…]\nAlpama — híbrido de lhama com alpaca",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Caral",
      "descricao": "Sítio arqueológico com pirâmides e praças no vale do Supe, no Peru, centro da civilização Norte Chico."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Caral, no Peru, uma das principais lavouras não era de comida: dela saíam as redes trocadas por peixe com o litoral. Qual era?",
    "resposta": "Algodão",
    "distratores": [
      "Agave",
      "Totora",
      "Bambu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Norte_Chico_civilization",
      "https://en.wikipedia.org/wiki/Caral"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Norte_Chico_civilization",
        "situacao": "ok",
        "texto": "Caral–Supe (also known as Caral and Norte Chico) was a complex pre-Columbian era society that included as many as thirty major population centers in what is now the Caral region of north-central coastal Peru. The civilization flourished between the 4th and 2nd millennia BCE, with the formation of the first city generally dated to around 3500 BCE, at Huaricanga, in the Fortaleza area. From 3100 BCE\n[…]\nAs with much other research at Caral–Supe, the nature and significance of the find has been disputed by other researchers.\n[…]\nWhen compared to the common Eurasian models of the development of civilization, Caral–Supe's differences are striking. In Caral–Supe, a total lack of ceramics persists across the period. Crops were cooked by roasting. The lack of pottery was accompanied by a lack of archaeologically apparent art. In conversation with Mann, Alvaro Ruiz observes: \"In the Norte Chico we see almost no visual arts. No sculpture, no carving or bas-relief, almost no painting or drawing—the interiors are completely bare.\n[…]\nThe magnitude of the Caral–Supe discovery has generated academic controversy among researchers. The \"monumental feud\", as described by Archaeology, has included \"public insults, a charge of plagiarism, ethics inquiries in both Peru and the United States, and complaints by Peruvian officials to the U.S. government\".\n[…]\nIn 2004, Haas et al. wrote that \"Our recent work in the neighboring Pativilca and Fortaleza has revealed that Caral and Aspero were but two of a much larger number of major Late Archaic sites in the Norte Chico\", while noting Shady only in footnotes. Attribution of this type is what has angered Shady and her supporters.\n[…]\nList of Norte Chico archaeological sites\n[…]\nShady Solís, Ruth (2005). Caral Supe, Perú: the Caral–Supe civilization: 5,000 years of cultural identity in Peru. Lima: Instituto Nacional de Cultura. ISBN 9972-9738-4-0.\n[…]\nCaral–Supe at Google Maps"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Caral",
        "situacao": "ok",
        "texto": "The Sacred City of Caral-Supe, or simply Caral, is an archaeological site in Peru where the remains of the main city of the Caral civilization are found. It is located in the Supe District of Peru, near the current town of Caral, 182 kilometres (113 mi) north of Lima, 23 kilometres (14 mi) from the coast and 350 meters above sea level. It is attributed an antiquity of 5,000 years and it is conside\n[…]\nCaral was inhabited from around 2600 BC to 2000 BC, and the site includes an area of more than 60 hectares (150 acres). Caral has been described by its excavators as the oldest urban center in the Americas. This claim has been challenged by the discovery of other ancient sites nearby, such as Bandurria, Peru. Accommodating more than 3,000 inhabitants, Caral is the best studied and one of the largest sites known of the Norte Chico civilization.\n[…]\nCaral was flanked by 19 other temple complexes scattered across the 90 square kilometres (35 sq mi) area of the Supe Valley.\n[…]\nTourism in Peru\n[…]\nShady, R., (2003). Los Orígenes de la Civilización y la Formación del Estado en el Perú: Las Evidencias Arqueológicas de Caral-Supe. In: Shady, R., Leyva, C. (Eds.), La Ciudad Sagrada de Caral-Supe. Los Orígenes de la Civilización Andina y la Formación del Estado Prístino en el Antiguo Perú. Instituto Nacional de Cultura, Lima, Peru.\n[…]\nShady, R. (2007). The Social and Cultural Values of Caral-Supe, the Oldest Civilization in Peru and America and its Role in Integral and Sustainable Development (original in Spanish) (Proyecto Especial Arqueológico Caral-Supe/INC, Lima, Peru), No. 4, 1–69.\n[…]\nShady, R., and Lopez, S. (2000 [1999]). \"Ritual de enterramiento de un recinto en el sector residencial A en Caral Supe.\" In El perıodo arcaico en el Perú: Hacia una definición de los orígenes, ed. P. Kaulicke, 187–212. Lima: Pontifıcia Universidad Catolica del Peru.\n[…]\nUNESCO – Sacred City of Caral-Supe (World Heritage)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Civiliza%C3%A7%C3%A3o_de_Caral",
        "situacao": "ok",
        "texto": "A civilização de Caral (também conhecida como Caral-Supe ou Norte Chico) foi uma sociedade complexa da era pré-colombiana que incluía cerca de trinta grandes centros populacionais no que hoje é a região de Caral, na costa centro-norte do Peru. A civilização floresceu entre o quarto e o segundo milênios a.C., com a formação da primeira cidade datada geralmente por volta de 3500 a.C., em Huaricanga,\n[…]\nHaas observa que \"o controle sobre o algodão permite que uma elite governante forneça o benefício de tecidos para roupas, bolsas, envoltórios e adornos\". Ele está disposto a admitir um dilema de dependência mútua: \"Os moradores pré-históricos do Norte Chico precisavam dos recursos pesqueiros para sua proteína e os pescadores precisavam do algodão para fazer as redes para pegar os peixes\".\n[…]\nHaas sugere provisoriamente que o escopo desta base de poder econômico pode ter se estendido amplamente: há apenas dois sítios arqueológicos costeiros confirmados dessa civilização (Aspero e Bandurria) e possivelmente mais dois, mas redes de pesca de algodão e plantas domesticadas foram encontradas em toda a costa peruana. É possível que os principais centros do interior de Caral-Supe estivessem no centro de uma ampla rede de comércio regional centrada nesses recursos.\n[…]\nEm Caral-Supe, um recurso vital estava presente: terras aráveis em geral e a safra de algodão especificamente, mas Mann observou que, aparentemente, a mudança para uma maior complexidade pela cultura de Caral não foi motivada pela necessidade de defesa ou guerra.\n[…]\nEm 2004, Haas et al. escreveu que \"Nosso trabalho recente nas vizinhas Pativilca e Fortaleza revelou que Caral e Aspero eram apenas dois de um número muito maior de grandes sítios arcaicos tardios no Norte Chico\", embora mencione Shady apenas em notas de rodapé. A atribuição irritou Shady e seus apoiadores.\n[…]\n(em castelhano) Arqueologia do Peru: Caral",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Cusco",
      "descricao": "Cidade do sudeste do Peru, antiga capital do Império Inca, nos Andes."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Segundo a tradição, o imperador Pachacútec redesenhou Cusco no formato de que animal sagrado dos Andes?",
    "resposta": "Puma",
    "distratores": [
      "Condor",
      "Serpente",
      "Lhama"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cusco"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cusco",
        "situacao": "ok",
        "texto": "Cusco or Cuzco (; Latin American Spanish: [ˈkusko]; Quechua: Qusqu/Qosqo [ˈqosqɔ]) is a city in southeastern Peru, near the Sacred Valley of the Andes mountain range, and the Huatanay and Urubamba rivers. It is the capital and largest city of the eponymous Cusco Province and Cusco Department. It has historically been one of the largest cultural, economic and political centers of Peru.\n[…]\nCusco was long an important center of indigenous people. It was the capital of the Inca Empire (13th century – 1532). Many believe that the city was planned as an effigy in the shape of a puma, a sacred animal. How Cusco was specifically built, or how its large stones were quarried and transported to the site remain undetermined. Under the Inca, the city had two sectors: the hurin and hanan.\n[…]\nCurrently, the majority of the population belongs to the Catholic Church, with Cuzco being the archbishopric. The largest and oldest cathedral is the Cusco Cathedral. It is home to the Roman Catholic Archdiocese of Cusco.\n[…]\nThe city developed a distinctive style of painting known as the \"Cuzco School\" and the cathedral houses a major collection of local artists of the time. The cathedral is known for a Cusco School painting of the Last Supper depicting Jesus and the twelve apostles feasting on guinea pig, a traditional Andean delicacy.\n[…]\nCusco's main international airport is Alejandro Velasco Astete International Airport, which provides service to 5 domestic destinations and 3 international ones. It is named in honor of Peruvian pilot Alejandro Velasco Astete who was the first person to fly across the Andes in 1925 when he made the first flight from Lima to Cusco. The airport is the second busiest in Peru after Lima's Jorge Chávez International Airport. It will soon be replaced by Chinchero International Airport.\n[…]\nCusco is twinned with:\n[…]\nCusco travel guide from Wikivoyage\n[…]\nCusco official website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cusco",
        "situacao": "ok",
        "texto": "Cusco (em espanhol Cuzco ou Cusco, em quíchua Qosqo ou Qusqu) é uma cidade no Peru situada no sudeste do Vale de Huatanay ou Vale Sagrado dos Incas, na região dos Andes, com população de 428 450 habitantes. É a capital da região de Cusco e da província de Cusco.\n[…]\nAtribui-se ao governante Pachacuti ter feito de Cusco um centro espiritual e político. Pachacuti chegou ao poder em 1438, e ele e seu filho Túpac Yupanqui dedicaram cinco décadas à organização e conciliação dos diferentes grupos tribais sob seu domínio, entre eles os Lupaca e os Colla. Durante o período de Pachacuti e Túpac Yupanqui, o domínio de Cusco chegou até Quito, ao norte, e até o rio Maule, ao sul, integrando culturalmente os habitantes de 4 500 quilômetros de cadeias montanhosas.\n[…]\nTambém se crê que o projeto original da cidade seja obra de Pachacuti. O plano do Cusco antigo tem forma de um puma, com a praça central Haucaypata na posição que ocuparia o peito do animal. A cabeça do felino estaria localizada na colina onde está a fortaleza de Sacsayhuaman. Os incas organizaram sua divisão administrativa de maneira que os limites das quatro regiões do império coincidissem na praça principal de Cusco.\n[…]\nA cidade se converteu em um importante centro comercial e cultural dos Andes centrais, já que se encontrava nas rotas entre Lima e Buenos Aires. Porém, a administração do vice-reinado preferiu a povoação de Lima (fundada dois anos depois da tomada de Cusco, em 1535) e principalmente a proximidade desta com o porto natural que seria Callao para estabelecer a cabeceira de seus domínios na América do Sul. A cidade já é mencionada no primeiro mapa conhecido sobre o Peru.\n[…]\nCusco tem geminação com essas cidades:\n[…]\nCusco Machupicchu\n[…]\nCusco\n[…]\nCuzco Info (English)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Quipu",
      "descricao": "Sistema de cordões com nós usado pelos incas para registrar números e informações."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Os maias contavam de vinte em vinte. Nos quipus dos incas, os nós registravam os números em que base?",
    "resposta": "Dez",
    "distratores": [
      "Doze",
      "Vinte",
      "Sessenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Quipu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quipu",
        "situacao": "ok",
        "texto": "Quipu ( KEE-poo), also spelled khipu (Ayacucho Quechua: kipu, [ˈkipu]; Cusco Quechua: khipu, [kʰipu]), are record-keeping devices fashioned from knotted cords. They were historically used by various cultures in the central Andes of South America, most prominently by the Inca Empire.\n[…]\nThe word quipu is derived from a Quechua word meaning 'knot'. The terms quipu and khipu are spelling variations on the same word. Quipu is the traditional spelling based on the Spanish orthography, while khipu reflects the Quechuan and Aymaran spelling shift. Khipu (pronounced [ˈkʰipu]) comes from Cusco Quechua, while many other Quechua varieties use the term kipu. The hispanicized spelling of quipu is the form most commonly used in both Spanish and English.\n[…]\nMost quipus use three main types of knots: simple overhand knots; \"long knots\", consisting of an overhand knot with one or more additional turns; and figure-eight knots. The Aschers also identified a fourth, and less common, type of knot—a figure-eight knot with an extra twist—which they refer to as an \"EE\" knot. On a given quipu cord, knots are grouped into clusters. Each cluster is tied at specific registers, or lengths, along the cord.\n[…]\nCatan - Rise of the Inkas: Quipu imagery is used in the visual design to evoke Inka administration, though quipus do not function as a distinct gameplay mechanic.\n[…]\nThe Khipu Field Guide (quipu schematics and investigations from a large quipu database)\n[…]\nCode of the Quipu: Databooks (contains the descriptions and data for the more than 200 quipus studied Marcia Ascher and Robert Ascher)\n[…]\nThe Khipu Keepers: Explore the undeciphered writing of the Incas (2020 exhibition by the Google Arts & Culture in collaboration with the Lima Art Museum)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quipo",
        "situacao": "ok",
        "texto": "Quipo ou Quipu (em quíchua: khipu) era um instrumento utilizado para comunicação, mas também como registro contábil e como registros mnemotécnicos entre os incas. Alguns expertos têm proposto que também eram utilizado como sistema de escrita, hipótese sustentada entre outras por William Burns Glynn, Gary Urton e Manuel Medrano.\n[…]\nO transporte dos quipos era realizado pelos chasqui, rápidos mensageiros, que corriam por dois quilômetros pelas trilhas incas levando o quipo contendo as informações a serem transmitidas, até o próximo posto de mensageiros, onde aguardava um mensageiro descansado pronto para continuar o transporte do quipo.\n[…]\nHá um quarto tipo, um oito com uma volta adicional, representado por EE em Ascher. Um número é representado por sequências de grupos de nós e a base é decimal.\n[…]\nAs potências de dez mostram uma posição ao longo da cadeia de nós e essas posições se alinham formando os números.\n[…]\nOs dígitos nas posições das unidades são representados por nós grande (exemplo, cinco é indicado por um nó de 5 voltas) Devido à forma de atar os nós, o número “um” deve ser representado pelo nó em “oito”.\n[…]\nEstando as unidade estar representada de forma diferente (“nó oito”), fica claro onde um número termina.\n[…]\nCada “capítulo” (cada cordão suspenso) pode conter mais de um número.\n[…]\nO número 841 estaria representado por  8s, 4s, E\n[…]\nO número 503 estaria representado por 5s, X, 3L\n[…]\nO número 206 seguido pelo número 71 seria por 2s, X, 6L, 7s, E\n[…]\n\"Aluno de Harvard ajudou a decifrar o misterioso código secreto dos Incas\"; ZAP - 31 Dezembro, 2017.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Mita",
      "descricao": "Sistema de trabalho obrigatório prestado ao Estado no Império Inca, como forma de tributo."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "No Império Inca, que não usava dinheiro, de que forma as famílias pagavam o principal tributo ao Estado?",
    "resposta": "Com trabalho",
    "distratores": [
      "Com ouro",
      "Com folhas de coca",
      "Com sementes de cacau"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mit%27a",
      "https://en.wikipedia.org/wiki/Inca_Empire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mit%27a",
        "situacao": "ok",
        "texto": "Mit'a (Quechua pronunciation: [ˈmɪˌtʼa]) was a system of mandatory labor service in the Inca Empire, as well as in Spain's empire in America. Mit'a (federal work) was effectively a form of tribute to the Inca government in the form of labor, a corvée. Tax labor accounted for much of the Inca state tax revenue; beyond that, it was used for the construction of the road network, bridges, agricultural\n[…]\nDuring the Inca period, people were mostly dependent on the cultivation of their land. All the fields of the Empire were divided into three categories: the Field of the Temple, the Emperor, and People. Temple lands provided sacrifices for local Huacas, as well as imperial ones such as Inti and Viracocha. Imperial fields were generally cultivated to provide tribute for the Sapa Inca and nobility.\n[…]\nThe mit'a labor tribute is not to be confused with the related Inca policy of deliberate resettlements referred to by the Quechua word mitma (mitmaq means 'outsider' or 'newcomer') or its Hispanicized forms, mitima or mitimaes (plural). That involved transplanting whole groups of people for the benefit of imperial stability. Under this system, colonists from loyal communities were sent to regions which were suspected of disloyalty or of harboring rebellious intent.\n[…]\nThe only example of re-applying the Inca-style mit'a in a modern state, as a government policy, occurred in Peru during the two Popular Action governments under President Fernando Belaúnde Terry (1963–1968 and 1980–1985). Under this government, a state institution called Cooperación Popular ('Popular Cooperation') was launched, strongly inspired by the strategy of labor tribute in the Incan mit'a."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Inca_Empire",
        "situacao": "ok",
        "texto": "The Inca Empire, officially known as the Realm of the Four Parts (Quechua: Tawantinsuyu pronounced [taˈwantiŋ ˈsuju], lit. 'land of four parts'), was the largest empire in pre-Columbian America. The administrative, political, and military center of the empire was in the city of Cusco. The Inca civilisation rose from the Peruvian highlands sometime in the early 13th century. The Portuguese explorer\n[…]\nThe basic organizational principle of Inca society was duality or yanantin, which was based on kinship relationships. The ayllus were divided into two parts that could be Hanan or Hurin, Alaasa or Massaa, Uma or Urco, Allauca or Ichoc; according to Franklin Pease, these terms were understood as \"high or low\", \"right or left\", \"male or female\", \"inside or outside\", \"near or far\", and \"front or back\".\n[…]\nFollowing Pachacuti, the Sapa Inca claimed descent from Inti, who placed a high value on imperial blood; by the end of the empire, it was common to incestuously wed brother and sister. He was \"son of the sun\", and his people the Intip churin, or \"children of the sun\", and both his right to rule and mission to conquer derived from his holy ancestor.\n[…]\nGuaman Poma's 1615 book, El primer nueva corónica y buen gobierno, shows numerous line drawings of Inca flags. In his 1847 book A History of the Conquest of Peru, William H. Prescott says that in the Inca army each company had its particular banner and that the imperial standard, high above all, displayed the glittering device of the rainbow, the armorial ensign of the Incas.\" A 1917 world flags book says the Inca \"heir-apparent ...\n[…]\nConquest nts.html Inca Land by Hiram Bingham (published 1912–1922).\n[…]\n\"Ice Treasures of the Inca\", National Geographic site.\n[…]\n\"The Sacred Hymns of Pachacutec\", poetry of an Inca emperor.\n[…]\nInca Religion\n[…]\nEngineering in the Andes Mountains, lecture on Inca suspension bridges\n[…]\nA Map and Timeline of Inca Empire events"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mita",
        "situacao": "ok",
        "texto": "A Mita (termo que provém da palavra que em quéchua significa turno)  era um sistema de trabalho tributário pré-hispânico destinado ao Estado, ao sapainca ou a outros chefes, como o kuraka (chefe da ayllu). O trabalho era planificado, organizado e fiscalizado pelo próprio Estado através de seus administradores.\n[…]\nApesar do regime mita ser uma forma de exploração, pois o excedente do trabalho ficava com os integrantes da direção do Estado, culturalmente era muito apreciado por aqueles que participavam do sistema. O mita era visto como uma constante efetivação da ordem cósmica e da relação com o Inca, filho do sol. Além disso, o período de trabalho era caracterizado pela relativa fartura para os trabalhadores.\n[…]\nA mita potosina se firmou como prática em 1578, possuindo um número máximo de mitayos fixado em 13.382, apesar de seu início ter se dado cinco anos mais cedo. A região de Charcas, próximo ao Potosí, passou a ter maior peso demográfico em razão desta prática, pois muitos dos quais sustentavam suas famílias com os ganhos desta forma trabalho, viviam nesta região ainda que no período pré-hispânico a migração para esta área fosse constante.\n[…]\nNo entanto, o trabalho de mineração subterrânea remete ao período romano, tendo sido esta forma aplicada nas minas de mercúrio em Almandén, Espanha, não se tratando de uma inovação da prática espanhola.\n[…]\nA utilização da mão de obra indígena no Cerro Rico de Potosí está intimamente ligada ao processo de recrutamento de índios minga, ou seja, indígenas alugados que cobravam de acordo com a atividade realizada. Dessa forma, muitos indígenas sobre o regime da mita optavam por trabalhar como mingas, pois com o salário que recebiam poderiam pagar sua substituição na mita, tendo em vista que outros assentamentos possuíam maiores vantagens aos indígenas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Cahokia",
      "descricao": "Grande cidade da cultura do Mississippi, com enormes montes de terra, no atual estado de Illinois."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em Cahokia, o Monks Mound, gigantesco monte de terra, tem uma base de tamanho parecido com a de que monumento famoso?",
    "resposta": "Grande Pirâmide de Gizé",
    "distratores": [
      "Coliseu de Roma",
      "Stonehenge",
      "Partenon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Monks_Mound"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monks_Mound",
        "situacao": "ok",
        "texto": "Monks Mound is the largest Pre-Columbian earthwork in the Americas and the largest pyramid north of Mesoamerica. The beginning of its construction dates from 900 to 955 CE. Located at the Cahokia Mounds UNESCO World Heritage Site near Collinsville, Illinois, the mound size was calculated in 1988 as about 100 feet (30 m) high, 955 feet (291 m) long including the access ramp at the southern end, and\n[…]\nConstruction of Monks Mound by the Mississippian culture began about 900–950 CE, on a site that had already been occupied by buildings. The original concept seems to have been a much smaller mound, now buried deep within the northern end of the present structure. At the northern end of the summit plateau, as finally completed around 1100 CE, is an area raised slightly higher still, on which was placed a building over 100 ft (30 m) long, the largest in the entire Cahokia Mounds urban zone.\n[…]\nThere is no evidence of significant Native American settlement in the Cahokia Mounds urban area for hundreds of years after about 1400 CE. In 1735, French missionaries built a chapel at the west end of the south terrace of the mound. The River L'Abbe Mission served a small Illiniwek community, until they were forced to abandon the area by rival tribes about 1752.\n[…]\nIn the early 19th century, the land was claimed by people of French descent, and Nicholas Jarrot had a deed for most of it. He donated some to a small group of French Trappist monks, who settled on one of the smaller mounds from 1809. They took advantage of the big mound's terraces to grow produce, which was elevated above the danger of flooding: wheat on the upper levels, garden produce on the south terrace.\n[…]\nThe dramatic finds encouraged the governor of Illinois to budget for an expansion of the Cahokia Mounds State Park.\n[…]\nMound 34\n[…]\nMound 72\n[…]\nSugarloaf Mound\n[…]\nUNESCO – Cahokia Mounds State Historic Site\n[…]\nCahokia Mounds Photo Gallery"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Cahokia",
      "descricao": "Grande cidade da cultura do Mississippi, com enormes montes de terra, no atual estado de Illinois."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em Cahokia, círculos de grandes postes de madeira marcavam os solstícios. Que apelido eles ganharam, lembrando um monumento inglês?",
    "resposta": "Woodhenge",
    "distratores": [
      "Treehenge",
      "Sunhenge",
      "Mudhenge"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cahokia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cahokia",
        "situacao": "ok",
        "texto": "The Cahokia Mounds (also simply known as Cahokia ; Smithsonian trinomial ID 11 MS 2) is the site of a Native American city which existed c. 1050 – c. 1350 AD, directly across the Mississippi River from present-day St. Louis. The state archaeology park lies in south-western Illinois between East St. Louis and Collinsville. The park covers 2,200 acres (890 ha; 3.4 mi2; 8.9 km2), and contains about 8\n[…]\nOther prominent Cahokia academics include Warren Wittry, who was instrumental in the recovery of Cahokia Woodhenge.\n[…]\nAlleen Betzenhauser and Timothy Pauketat argue that upwards of 20 percent of Cahokia's neighborhood structures did not serve domestic functions, but were rather intended to facilitate engagement with non-human spiritual beings as part of an animistic religion. These beings may have resided in the building itself or inhabited large marker posts, similar to the posts used to build the Cahokia Woodhenge.\n[…]\nThe Cahokia Woodhenge was a series of large timber circles located roughly 850 m (2,790 ft) to the west of Monks Mound. They are thought to have been constructed between 900 and 1100 CE, with each one being larger and having 12 more posts than its predecessor. The site was discovered during salvage archaeology undertaken by Dr. Warren Wittry in the early 1960s interstate highway construction boom.\n[…]\nThe post holes found by Wittry are an example of how soil retains the memory of organic materials that decayed in the soil from thousands of years ago. Many soils have a naturally acidic component that breaks down most organic material pretty quickly, but leaves behind dark discoloration in the soil. The original posts of Cahokia Woodhenge left behind this same discoloration, allowing researchers to easily identify the soil as having once contained wooden posts.\n[…]\nCahokia Mounds Photo Gallery\n[…]\nWoodhenge and the Cahokia Mounds Archived October 11, 2008, at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADtio_Hist%C3%B3rico_Estadual_dos_Cahokia_Mounds",
        "situacao": "ok",
        "texto": "Cahokia é a área de uma antiga cidade indígena (c. 600 - 1400 dC) localizada na planície de baixio norte-americana, entre Saint Louis Leste e Collinsville no Sudoeste de Illinois, através do Rio Mississippi, de St. Louis, Missouri. O local com cerca de 8,9 km2 incluiu 120 montes de terra estendendo-se através de  uma área de 15,5 quilómetros quadrados, dos quais 80 montes ainda existem.\n[…]\nEsta cultura surgiu no vale do Mississippi por volta de 700 d.C. Em seu auge nos anos 1100, Cahokia era o centro da cultura do Mississipi e lar de dezenas de milhares de nativos americanos que cultivavam, pescavam, comercializavam e construíam montes rituais gigantes. Nos anos 1400, Cahokia havia sido abandonada devido as mudanças climáticas na forma de inundações e secas consecutivas, elas desempenharam um papel fundamental no êxodo dos habitantes do Mississipi de Cahokia.\n[…]\nA região de Cahokia era uma cidade fantasma na época do contato europeu, com base no registro arqueológico. Uma nova onda de nativos americanos repovoou a região nos anos 1500 e manteve uma presença constante por volta dos anos 1700, quando migrações, guerras, doenças e mudanças ambientais levaram a uma redução na população local.\n[…]\nAo contrário dos Mississipianos, que estavam firmemente enraizados na metrópole de Cahokia, os membros da tribo da Confederação de Illinois vagavam mais longe, cuidando de pequenas fazendas e jardins, caçando caça e dividindo-se em grupos menores quando os recursos se tornavam escassos.==Referências==\n[…]\n«Site Oficial» (em inglês)\n[…]\n«Tour Virtual por Cahokia Mounds» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Chan Chan",
      "descricao": "Grande cidade de adobe no litoral norte do Peru, perto de Trujillo, antiga capital do reino Chimu."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Que cidade do litoral norte do Peru, erguida antes dos incas, é considerada a maior cidade de adobe das Américas?",
    "resposta": "Chan Chan",
    "distratores": [
      "Caral",
      "Pachacamac",
      "Cahuachi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chan_Chan",
      "https://whc.unesco.org/en/list/366"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chan_Chan",
        "situacao": "ok",
        "texto": "Chan Chan (Spanish pronunciation: [tʃaɲ.ˈtʃaŋ]), sometimes called Chimor, was the capital city of the Chimor kingdom, a pre-Columbian era culture in South America. The city is now an archeological site in the department of La Libertad five kilometers (3.1 mi) west of Trujillo, Peru.\n[…]\nBetween 2016 and 2022, an international project between the Consiglio Nazionale delle Ricerche (CNR) and the Consejo Nacional de Ciencia, Tecnología e Innovación Tecnológica (CONCYTEC) was conducted at the site. The work intended to build a three-dimensional Heritage Building Information Model (HBIM) of the Huaca Arco Iris, the largest adobe monumental complex in South America. The huaca is placed chronologically alongside the first structures built at Chan Chan.\n[…]\nPeru\n[…]\nKeatinge, Richard W; Day, Kent C (1973). \"Socio-Economic Organization of the Moche Valley, Peru, during the Chimu Occupation of Chan Chan\". Journal of Anthropological Research. 29 (4): 275–295. doi:10.1086/jar.29.4.3629879. JSTOR 3629879. S2CID 163416043. (subscription required)\n[…]\nSmailes, Richard L. (2011). \"Building Chan Chan: A Project Management Perspective\". Latin American Antiquity. 22 (1): 37–63. doi:10.7183/1045-6635.22.1.37. JSTOR 23072515. S2CID 164117955. (subscription required)\n[…]\nTopic, John R.; Moseley, Michael E. (1983). \"Chan Chan: A Case Study of Urban Change in Peru\". Ñawpa Pacha. 21 (21): 153–182. doi:10.1179/naw.1983.21.1.004. JSTOR 27977764. (subscription required)\n[…]\nWest, Michael (1970). \"Community Settlement Patterns at Chan Chan, Peru\". American Antiquity. 35 (1): 74–86. doi:10.2307/278179. JSTOR 278179. S2CID 163958191. (subscription required)\n[…]\nChan Chan information\n[…]\nChan Chan Multimedia Resources\n[…]\nArchaeologists Restore High Adobe Walls in Ancient Chimu City of Chan Chan"
      },
      {
        "url": "https://whc.unesco.org/en/list/366",
        "situacao": "ok",
        "texto": "Chan Chan Archaeological Zone - UNESCO World Heritage Centre\n[…]\nThe Chimu Kingdom, with Chan Chan as its capital, reached its apogee in the 15th century, not long before falling to the Incas. The planning of this huge city, the largest in pre-Columbian America, reflects a strict political and social strategy, marked by the city's division into nine 'citadels' or 'palaces' forming autonomous units.\n[…]\nThe Chimu Kingdom reached its apogee in the 15th century, not long before falling to the Incas. Its capital Chan Chan, located in the once fertile river valley of Moche or Santa Catalina, was the largest earthen architecture city in pre-Columbian America. The remains of this vast city reflect in their layout a strict political and social strategy, emphasized by their division into nine 'citadels' or 'palaces' forming independent units.\n[…]\nThe vision for Chan Chan is that it maintains its status as a cultural symbol for Peru that links the past to the present and plays an essential role in the human development of the region and the country. The conservation and presentation of the archaeological site and its context will contribute to its value and to the strengthening of Peruvian cultural identity.\n[…]\nChan Chan Archaeological Zone, Peru (History Channel)\n[…]\nAdobe en América y Alrededor del Mundo: historia, conservación y uso contemporáneo (exposición y catalogo) 1984\n[…]\nPreventing climate-related impacts in the Chan Chan Archaeological Zone (Peru)\n[…]\nplay_arrow Chan Chan Archaeological Zone (UNESCO/NHK)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chan_Chan",
        "situacao": "ok",
        "texto": "Um reino poderoso, com estrutura hierárquica definida e uma cidade perfeitamente planejada, abrigando 50 mil habitantes. Assim era Chan Chan há 600 anos, hoje um dos mais preciosos sítios arqueológicos do mundo. Somente mãos habilidosas poderiam erguer uma cidade de barro como a de Chan Chan, costa norte do Peru. Próximo a Trujillo, Chan Chan foi a capital do Reino de Chimu, um dos mais poderosos \n[…]\nEm 1986 a Unesco declarou esta relíquia arqueológica um patrimônio cultural da humanidade. E não é para menos: pelos cerca de 15 km² nos quais se estende Chan Chan, há ruínas das edificações construídas em adobe, um material preparado com barro, palha e pedregulho, ideal para a região em que se localiza a cidade, quase sem chuvas. Mas a erosão, provocada pela ação do tempo, colocou o sítio arqueológico em outra lista, a dos patrimônios em perigo.\n[…]\nO auge do Reino Chimu aconteceu no século XIV. A cidade de Chan Chan dividia-se em dez partes muradas - chamadas cidadelas -, algumas com paredes de proteção de mais de 9 metros de altura. Em cada cidadela havia templos religiosos piramidais, jardins, cemitérios, reservatórios e palácios para os reis e nobres. Uma das histórias daquela época faz referência a jardins com plantas de ouro. Fora do muro ficavam as casas mais modestas, para o povo.\n[…]\nLocalização: Vale do Chimu, costa norte do Peru.\n[…]\nMaior Cidadela: Cerca de 20.500 m².\n[…]\nPerigo: Em 1998, em razão do El  Niño, uma chuva atípica castigou Chan Chan e medidas de emergência tiveram que ser tomadas.\n[…]\n«O ArQueólogo: Sítio de Chan Chan»\n[…]\n(em inglês) UNESCO World Heritage Center: Chan Chan",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Chichén Itzá",
      "descricao": "Cidade maia na península de Iucatã, no México, com a pirâmide de Kukulcán."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas cidades maias tem o maior campo de jogo de bola da antiga Mesoamérica, com mais de cento e sessenta metros?",
    "resposta": "Chichén Itzá",
    "distratores": [
      "Tikal",
      "Copán",
      "Palenque"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Ball_Court"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Ball_Court",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Chichén Itzá",
      "descricao": "Cidade maia na península de Iucatã, no México, com a pirâmide de Kukulcán."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 2007, Chichén Itzá foi eleita uma das Sete Novas Maravilhas do Mundo, junto com que outro sítio pré-colombiano?",
    "resposta": "Machu Picchu",
    "distratores": [
      "Teotihuacan",
      "Tikal",
      "Linhas de Nazca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/New7Wonders_of_the_World"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/New7Wonders_of_the_World",
        "situacao": "ok",
        "texto": "The New 7 Wonders of the World was a campaign started in 2001 to choose Wonders of the World from a selection of 200 existing monuments. The popularity poll via free web-based voting and telephone voting was led by Canadian-Swiss Bernard Weber and organized by the New 7 Wonders Foundation (N7W) based in Zurich, Switzerland, with winners announced on 7 July 2007 at Estádio da Luz in Lisbon. The pol\n[…]\nAfter supporting the New 7 Wonders Foundation at the beginning of the campaign by providing advice on nominee selection, the United Nations Educational, Scientific, and Cultural Organization (UNESCO), bound by its bylaws to record and give equal status to all World Heritage Sites, distanced itself from the undertaking in 2001 and again in 2007.\n[…]\nIn 2007, the New 7 Wonders Foundation contracted a partnership with the United Nations in recognition of the efforts to promote the UN's Millennium Development Goals.\n[…]\nHowever, the United Nations Educational, Scientific and Cultural Organization (UNESCO), in a press release on June 20, 2007, reaffirmed that it has no link with the initiative. The press release concluded:\n[…]\nAn intensive campaign led by the Peruvian Ministry of Commerce and Tourism in Peru had a great impact in the media and consequently, Peruvian people voted massively for its national wonder. The announcement of the new World Wonders generated great expectations and the election of Machu Picchu was celebrated nationwide.\n[…]\nA campaign to publicize the Taj Mahal in India gathered speed  and it reached a climax in July 2007 with news channels, radio stations, and many celebrities asking people to vote for the Taj Mahal.\n[…]\nThere was a campaign on the news programs to encourage people to vote for Chichen Itzá."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Novas_sete_maravilhas_do_mundo",
        "situacao": "ok",
        "texto": "As Novas Sete Maravilhas do Mundo foram uma revisão de caráter informal e recreativo da lista original das sete maravilhas, idealizada por uma organização suíça chamada New Open World Corporation (NOWC). A seleção foi feita mundialmente por votos pela internet gratuitos e ligações telefônicas.\n[…]\nApesar de nada se mencionar sobre os monumentos do hinduísmo, os quais são inúmeros em todo o planeta, as Novas Sete Maravilhas do Mundo foram escolhidas em concurso informal e popular internacional promovido pela New Open World Foundation, com o lançamento da campanha New 7 wonders, que contou com mais de cem milhões de votos através de telefones, celulares e da internet, enviados de todas as partes do mundo e anunciados em 7 de julho de 2007, numa cerimônia no Estádio da Luz em Lisboa, Portugal.\n[…]\nA Necrópole de Gizé, no Egito, por ser a única remanescente das sete maravilhas do mundo originais, recebeu o título honorário.\n[…]\nO site Hillman Wonders elaborou uma lista com as 100 maravilhas do mundo. As sete primeiras foram:\n[…]\nMachu Picchu, no Peru\n[…]\nUm grupo organizou o concurso das Sete maravilhas do mundo moderno (7 Wonders of the Modern World), desde 2007 e realizou um concurso para escolher as \"Sete maravilhas da natureza\". A votação foi feita pelo site \"New 7 Wonders of Nature\".E foi encerrada em 2009.\n[…]\nSete maravilhas de origem portuguesa no mundo\n[…]\nSete maravilhas brasileiras\n[…]\n«Site oficial para votação das novas sete maravilhas do mundo» (em inglês)\n[…]\n«As sete maravilhas de Chicago» (em inglês). Uma lista compilada pelo Chicago Tribune e votada pelos residentes na área de Chicago.\n[…]\n«Vota as 7 maravilhas novas do mundo (votação não oficial)» (em italiano)\n[…]\n«Web site para votação das sete maravilhas naturais» (em italiano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Copán",
      "descricao": "Antiga cidade maia do período clássico, famosa por sua escadaria hieroglífica, perto da fronteira com a Guatemala."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Os degraus de uma escadaria guardam o mais longo texto hieroglífico maia conhecido. Em que cidade maia ela fica?",
    "resposta": "Copán",
    "distratores": [
      "Tikal",
      "Palenque",
      "Calakmul"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cop%C3%A1n"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cop%C3%A1n",
        "situacao": "ok",
        "texto": "Copán is an archaeological site of the Maya civilization in the Copán Department of western Honduras, not far from the border with Guatemala. It is one of the most important sites of the Maya civilization, which was not excavated until the 19th century. The ruined citadel and imposing public squares reveal the three main stages of development before the city was abandoned in the early 10th century\n[…]\nThe hieroglyphic text on Copán Altar Q describes the lord being elevated to kingship with the receipt of his royal scepter. The ceremonies involved in the founding of the Copán dynasty also included the installation of a subordinate king at Quiriguá.\n[…]\nAltar Q is the most famous monument at Copán. It was dedicated by king Yax Pasaj Chan Yopaat in AD 776 and has each of the first 16 kings of the Copán dynasty carved around its side. Each figure is depicted seated on his name glyph. A hieroglyphic text is inscribed on the upper surface, relating the founding of the dynasty in AD 426–427. On one side, it shows the dynastic founder K'inich Yax K'uk' Mo' transferring power to Yax Pasaj.\n[…]\nThe Motmot Capstone is an inscribed stone that was placed over a tomb under Structure 10L-26. Its face was finely sculpted with portraits of the first two kings of the Copán dynasty, K'inich Yax K'uk' Mo' and K'inich Popol Hol, facing towards each other with a double column of hieroglyphs between them, all contained within a quatrefoil frame. The frame and the hieroglyphic names of mythological locations underneath the feet of the two kings place them in a supernatural realm.\n[…]\nStela 7 dates to the reign of K'ak' Chan Yopaat, and was erected to celebrate the K'atun-ending ceremony of AD 613. It was found in the western complex now underneath the modern village of Copán Ruinas. It bears a long hieroglyphic text that has been only partially deciphered."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cop%C3%A1n",
        "situacao": "ok",
        "texto": "Copán é uma antiga cidade pré-colombiana situada no extremo oeste de Honduras, no departamento homônimo, próximo à fronteira com a Guatemala. Este lugar é  o maior sítio arqueológico do período clássico da civilização maia.\n[…]\nNo ápice do período clássico, Copán parecia ter uma quantidade inusual de nobreza secundária próspera, escriturários e artesãos, alguns dos quais construíram para si próprios suas casas em pedra decorada (privilégio reservado apenas aos nobres e sacerdotes na maioria das outras cidades), e em algumas fizeram inscrições hieroglíficas.\n[…]\nAs construções de Copán sofreram consideralvelmente com as forças da natureza nos séculos em que estiveram abandonadas, até a sua redescoberta. Ocorreram numerosos terremotos e nenhum dos tetos manteve-se intacto. A principal escadaria que continha inscrições estava desmoronada quando redescoberta. O Rio Copán mudou o seu curso e inundou uma parte da cidade, destruindo parte da acrópole e vários dos grupos arquitetônicos subsidiários do lugar.\n[…]\nUm reino parece ter sido estabelecido em Copán em 159 d.C. e progrediu até se tornar um dos locais mais importantes da civilização maia antes do século V. Foram erguidos monumentos, com registros hieroglíficos datados de 435 até 822.\n[…]\nNos textos de uma destas estelas, proclama-se que a cidade de Xukpi (Copán) era a cidade maia mais poderosa da região embora tenha sofrido uma derrota catastrófica nas mãos do reino de Quirigua no ano de 738. Este fato deve ter causado uma derrocada no afluxo de recursos naturais que sustentavam o poder das cidades-estado soberanas da era clássica e pode ter sido o fator determinante de sua fase final, até o completo abandono.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Teotihuacan",
      "descricao": "Antiga cidade pré-colombiana no vale do México, com as pirâmides do Sol e da Lua, abandonada séculos antes dos astecas."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Por volta do ano quinhentos, que cidade mesoamericana, com mais de cem mil habitantes, era a maior das Américas?",
    "resposta": "Teotihuacan",
    "distratores": [
      "Tikal",
      "Monte Albán",
      "Cholula"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Teotihuacan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Teotihuacan",
        "situacao": "ok",
        "texto": "Teotihuacan (; Spanish: Teotihuacán, Spanish pronunciation: [teotiwaˈkan] ; Classical Nahuatl: Teōtīhuacān, Classical Nahuatl pronunciation: [te.oːtiːˈwakaːn] ) is an ancient Mesoamerican city located in a sub-valley of the Valley of Mexico, which is located in the State of Mexico, 40 kilometers (25 mi) northeast of modern-day Mexico City.\n[…]\nTeotihuacan is known today as the site of many of the most architecturally significant Mesoamerican pyramids built in the pre-Columbian Americas, namely the  Pyramid of the Sun and the Pyramid of the Moon. Although close to Mexico City, Teotihuacan was not a Mexica (i.e. Aztec) city, and it predates the Aztec Empire by many centuries. At its zenith, perhaps in the first half of the first millennium (1 CE to 500 CE), Teotihuacan was the largest city in the Americas.\n[…]\nRanging from 40 to 130 millimetres, the balls have a core of clay and are covered with a yellow jarosite formed by the oxidation of pyrite. According to George Cowgill of Arizona State University, the spheres are a fascinating find: \"Pyrite was certainly used by the Teotihuacanos and other ancient Mesoamerican societies. Originally, the spheres would have shown [sic] brilliantly.\n[…]\nThese pecked-cross circles can be found not just in Teotihuacan, but also throughout Mesoamerica. The ones found all share certain similarities. These include having the shape of two circles, one being inside of the other. They are all found pecked on the ground or onto rocks. They are all created with a small hammer-like device that produces cuplike markings that are 1 centimeter in diameter and 2 centimeters apart. They all have axes that are in line with the city structures of the region.\n[…]\nTeotihuacan Multimedia Gallery\n[…]\nLidar scans of the Teotihuacán Valley reveal how the landscape was engineered centuries ago. Gizmodo Sept 21, 2021"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teotihuacan",
        "situacao": "ok",
        "texto": "Teotihuacan é uma antiga cidade mesoamericana localizada em um subvale do Vale do México, que fica no Estado do México, 40 quilômetros a nordeste da atual Cidade do México. É conhecida hoje como o sítio arqueológico de muitas das pirâmides mesoamericanas mais significativas do ponto de vista arquitetônico, construídas na América pré-colombiana, especificamente a Pirâmide do Sol e a Pirâmide da Lua\n[…]\nComeçou como um centro religioso no Planalto Mexicano por volta do século I d.C. Tornou-se o maior e mais populoso centro da América pré-colombiana. Teotihuacan abrigava complexos de apartamentos de vários andares construídos para acomodar a grande população. O termo Teotihuacan (ou teotihuacano) também é usado para se referir a toda a civilização e complexo cultural associado ao sítio arqueológico.\n[…]\nO Período II durou de 1 d.C. a 350 d.C. Durante essa era, Teotihuacan apresentou um crescimento explosivo e emergiu como a maior metrópole da Mesoamérica. Os fatores que influenciaram esse crescimento incluem a destruição de outros assentamentos devido a erupções vulcânicas e a atração econômica da cidade em expansão. Esse influxo de novos residentes causou uma reorganização das habitações urbanas nos complexos habitacionais únicos que caracterizam Teotihuacan.\n[…]\nA história inicial de Teotihuacan é bastante misteriosa e a origem de seus fundadores é incerta. Por volta de 300 a.C., os povos das regiões central e sudeste da Mesoamérica começaram a se reunir em assentamentos maiores. Teotihuacan foi o maior centro urbano da Mesoamérica antes dos astecas, quase 1.000 anos antes da época deles.\n[…]\nIsso permitiu a formação de canais e, posteriormente, o tráfego de canoas para transportar alimentos das fazendas ao redor da cidade. As construções mais antigas de Teotihuacan datam de cerca de 200 a.C. A maior pirâmide, a Pirâmide do Sol, foi concluída por volta de 100 d.C.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Teotihuacan",
      "descricao": "Antiga cidade pré-colombiana no vale do México, com as pirâmides do Sol e da Lua, abandonada séculos antes dos astecas."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O centro de Teotihuacan foi incendiado e a cidade entrou em declínio em que século depois de Cristo?",
    "resposta": "Século seis",
    "distratores": [
      "Século dois",
      "Século dez",
      "Século quatorze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Teotihuacan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Teotihuacan",
        "situacao": "ok",
        "texto": "Teotihuacan (; Spanish: Teotihuacán, Spanish pronunciation: [teotiwaˈkan] ; Classical Nahuatl: Teōtīhuacān, Classical Nahuatl pronunciation: [te.oːtiːˈwakaːn] ) is an ancient Mesoamerican city located in a sub-valley of the Valley of Mexico, which is located in the State of Mexico, 40 kilometers (25 mi) northeast of modern-day Mexico City.\n[…]\nThe nature of political and cultural interactions between Teotihuacan and the centers of the Maya region (as well as elsewhere in Mesoamerica) has been a long-standing and significant area for debate. Substantial exchange and interaction occurred over the centuries from the Terminal Preclassic to the Mid-Classic period. \"Teotihuacan-inspired ideologies\" and motifs persisted at Maya centers into the Late Classic, long after Teotihuacan itself had declined.\n[…]\nEvidence for population decline beginning around the 6th century lends some support to the internal unrest hypothesis. The decline of Teotihuacan has been correlated to lengthy droughts related to the climate changes of 535–536, possibly caused by the eruption of the Ilopango volcano in El Salvador.\n[…]\nThis theory of ecological decline is supported by archeological remains that show a rise in the percentage of juvenile skeletons with evidence of malnutrition during the 6th century, further supporting the hypothesis of famine as one of the more plausible reasons for the decline of Teotihuacan. Urbanized Teotihuacanos would likely have been dependent on agricultural crops such as maize, beans, amaranth, tomatillos, and pumpkins.\n[…]\nSpring equinox in Teotihuacán\n[…]\nTeotihuacan Archived 2018-11-18 at the Wayback Machine Teotihuacan information and history\n[…]\nTeotihuacan article by Encyclopædia Britannica\n[…]\nTeotihuacan Multimedia Gallery\n[…]\nLidar scans of the Teotihuacán Valley reveal how the landscape was engineered centuries ago. Gizmodo Sept 21, 2021"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teotihuacan",
        "situacao": "ok",
        "texto": "Teotihuacan é uma antiga cidade mesoamericana localizada em um subvale do Vale do México, que fica no Estado do México, 40 quilômetros a nordeste da atual Cidade do México. É conhecida hoje como o sítio arqueológico de muitas das pirâmides mesoamericanas mais significativas do ponto de vista arquitetônico, construídas na América pré-colombiana, especificamente a Pirâmide do Sol e a Pirâmide da Lua\n[…]\nO Período IV descreve o período entre 650 e 750 d.C. Ele marca o fim de Teotihuacan como uma grande potência na Mesoamérica. Os complexos residenciais da elite da cidade, agrupados ao redor da Avenida dos Mortos, apresentam muitas marcas de incêndios, e os arqueólogos levantam a hipótese de que a cidade sofreu conflitos civis que aceleraram seu declínio.\n[…]\nEm 378, um grupo de teotihuacanos organizou um golpe de Estado em Tikal, na Guatemala. Não se tratava do Estado de Teotihuacan, mas de um grupo do povo da Serpente Emplumada, que havia sido expulso da cidade. A Pirâmide da Serpente Emplumada foi incendiada, todas as esculturas foram arrancadas do templo e outra plataforma foi construída para apagar a fachada...\n[…]\nAmbas as cidades, de tamanho semelhante e centros comerciais importantes, eram polos produtivos de artesãos e comércio. Por volta de 100 a.C., no entanto, a dinâmica de poder mudou quando o monte Xitle, um vulcão ativo, entrou em erupção, afetando fortemente Cuicuilco e as terras agrícolas que a sustentavam. Acredita-se que o posterior crescimento exponencial da população de Teotihuacan se deva à migração subsequente daqueles deslocados pela erupção.\n[…]\nO planejamento preliminar da exploração e da arrecadação de fundos levou mais de seis anos.\n[…]\nOutro exemplo de modificações artificiais da paisagem é o curso do rio San Juan, que foi modificado para contornar as estruturas ao atravessar o centro da cidade, retornando eventualmente ao seu curso natural fora de Teotihuacan.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Vicunha",
      "descricao": "Camelídeo selvagem dos Andes, parente da lhama, cuja lã finíssima era reservada à realeza inca."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Dos camelídeos dos Andes, qual tem a lã mais fina, que entre os incas só a realeza podia vestir?",
    "resposta": "Vicunha",
    "distratores": [
      "Lhama",
      "Alpaca",
      "Guanaco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Vicu%C3%B1a"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vicu%C3%B1a",
        "situacao": "ok",
        "texto": "The vicuña (Lama vicugna) or vicuna (both , very rarely spelled vicugna, its Latin specific name) is a wild South American camelid which lives in high alpine areas of the Andes. It is a relative of the llama, the domesticated descendant of the guanaco, the only other still wild South American camelid.\n[…]\nLama vicugna mensalis\n[…]\nWhile vicuñas are restricted to the more extreme elevations of the Andes in modern times, they may have also been present in the lowland regions of Patagonia as much as 3500 km south of their current range during the Late Pleistocene and Early Holocene. Fossils of these lowland camelids have been assigned to a species known as Lama gracilis, but genetic and morphological analysis between them and modern vicuña indicate the two may be the same.\n[…]\nCurrently, vicuñas are restricted to South America's central Andes. They are found in Peru, northwestern Argentina, Bolivia, and northern Chile. A smaller, introduced population lives in central Ecuador. However, fossil remains indicate that they were also found as far as Uruguay and the Straits of Magellan until the early Holocene, together with the related guanaco.\n[…]\nVicuñas live at altitudes of 3,200 to 4,800 m (10,500–15,700 ft). They feed in the daytime on the grassy plains of the Andes Mountains but spend the nights on the slopes. In these areas, only nutrient-poor, tough, bunch grasses and Festuca grow. The sun's rays can penetrate the thin atmosphere, producing relatively warm temperatures during the day; however, the temperatures drop to freezing at night.\n[…]\n\"The Vicuna: the precious treasure of the Andes\". Alpaca Fiber News. Archived from the original on 21 October 2009.\n[…]\nThe Vicuna Animal and Everything You Need to Know About It (Peru 2025)\n[…]\nConvention for the Conservation and Management of the Vicuña (Lima 1979)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vicunha",
        "situacao": "ok",
        "texto": "A vicunha (Vicugna vicugna) é o animal que possui o menor tamanho entre os camelídeos andinos, chegando, no máximo, a 1,30 metros de altura e podendo pesar até 40 kg. Sua pelagem é muito fina e tem alto valor comercial; por esse motivo, a vicunha esteve à beira da extinção por causa dos caçadores ilegais. A população de vicunhas, que chegou a ter apenas 25 000 exemplares, chega atualmente quase a \n[…]\n\"Vicunha\" provém do quíchua huik'unha, através do castelhano americano vicuña.\n[…]\nA vicunha está bem adaptada à vida nesse ambiente inóspito. Sua pelagem é constituída da lã da melhor qualidade que se conhece, a qual é valorizada e utilizada pelo homem desde a era pré-colombiana. Esta lã a protege do extremo frio e dos fortes ventos da puna e serve como um acolchoado para o corpo quando descansa no chão.\n[…]\nEm comparação com os camelos do velho mundo, a vicunha possui cascos mais profundamente bipartidos, permitindo que caminhe e corra com mais aptidão em encostas rochosas, penhascos e pedras soltas, comuns na puna (Koford, 1957). Outra importante adaptação são os dentes semelhantes aos de roedores, os quais crescem continuamente e permitem que a vicunha se alimente de pequenos arbustos herbáceos e gramíneas perenes rentes ao solo.\n[…]\nA vicunha é o único ungulado que possui incisivos de raiz aberta e crescimento contínuo. É um dos quatro representantes vivos da família dos camelos encontrados na América do Sul, sendo os outros três o guanaco (Lama guanicoe), a lhama (Lama glama) e a alpaca (Vicugna pacos). A vicunha e o guanaco são espécies selvagens, enquanto a lhama e a alpaca são domesticadas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Pirâmide do Sol (Teotihuacan)",
      "descricao": "Maior pirâmide de Teotihuacan, no México, junto à Avenida dos Mortos."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em altura, qual destas pirâmides pré-colombianas do México é a mais alta?",
    "resposta": "Pirâmide do Sol",
    "distratores": [
      "Pirâmide de Kukulcán",
      "Pirâmide dos Nichos",
      "Pirâmide do Adivinho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pyramid_of_the_Sun",
      "https://en.wikipedia.org/wiki/El_Castillo,_Chichen_Itza",
      "https://en.wikipedia.org/wiki/Pyramid_of_the_Magician"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pyramid_of_the_Sun",
        "situacao": "ok",
        "texto": "The Pyramid of the Sun is the largest building in Teotihuacan, and one of the largest in Mesoamerica. It is believed to have been constructed about 200 AD. Found along the Avenue of the Dead, in between the Pyramid of the Moon and the Ciudadela, and in the shadow of the mountain Cerro Gordo, the pyramid is part of a large complex in the heart of the city.\n[…]\nThe caves and tunnel systems underneath the pyramid have been investigated by various archaeologists who have all concluded that these caves were sacred to those in Teotihuacan in the same way that caves were important cross-culturally in Mesoamerica.\n[…]\nThe cave was likely built early in Teotihuacan's history as a shrine that was later covered with the Pyramid of the Sun. The site of the shrine served as a ceremonial place for the Aztec people as it held significant religious history for the city of Teotihuacan, and was a focal point for society as it was located on the Street of the Dead.\n[…]\nThe city layout of Teotihuacan incorporated alignments dictated by the astronomically significant orientation of the Pyramid of the Sun: the peak of the pyramid aligned with the horizon in order to serve as a natural marker of the sun's position on the Aztec quarter days of the year. Thus, this cave is more important than most in Aztec culture and religion. Recently, scientists have used muon detectors to try to find other chambers within the interior of the pyramid.\n[…]\nA unique historical artifact discovered near the foot of the pyramid at the end of the nineteenth century was the Teotihuacan Ocelot, which is now in the British Museum's collection. In addition, burial sites of children have been found in excavations at the corners of the pyramid. It is believed that these burials were part of a sacrificial ritual dedicating the building of the pyramid.\n[…]\nList of Mesoamerican pyramids"
      },
      {
        "url": "https://en.wikipedia.org/wiki/El_Castillo,_Chichen_Itza",
        "situacao": "ok",
        "texto": "El Castillo (Spanish pronunciation: [el kas'tiʎo], 'the Castle'), also known as the Temple of Kukulcán, is a Mesoamerican step-pyramid that dominates the center of the Chichen Itza archaeological site in the Mexican state of Yucatán. The temple building is more formally designated by archaeologists as Chichen Itza Structure 5B18.\n[…]\nIn April 1931, looking to confirm the hypothesis that the structure of the temple of Kukulcán was built on top of a much older temple, the work of excavation and exploration began in spite of generalized beliefs contrary to that hypothesis. On June 7, 1932, a box with coral, obsidian, and turquoise encrusted objects was found alongside human remains, which are exhibited in the National Anthropology Museum in Mexico City.\n[…]\nThe authors attributed the lower two experimental bands mainly to the spectral content of the handclap rather than to the diffraction process itself. Including reflections from the ground in front of the pyramid did not affect the presence or absence of the four bands.\n[…]\nList of Mesoamerican pyramids\n[…]\nPyramid of the Magician at Uxmal"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pyramid_of_the_Magician",
        "situacao": "ok",
        "texto": "The Pyramid of the Magician (Spanish: Pirámide del adivino) is a Mesoamerican step pyramid located in the ancient Mayan city of Uxmal, Mexico. It is the tallest and most recognizable structure in Uxmal.\n[…]\nThe Pyramid of the Magician is the central structure in the Maya ruin complex of Uxmal. Uxmal is located in the Puuc region of Mexico and was one of the largest cities on the Yucatán Peninsula. At its height, Uxmal was home to about 25,000 people. Like other Puuc sites, the city flourished from 600–1000 AD, with the great building period taking place between 700 and 1000 AD.\n[…]\nAccording to one account, a magician-god named Itzamna was single-handedly supposed to have erected the pyramid in one night, using his might and magic.\n[…]\n\"The classical pyramid form has been abandoned here. It is as if the Mayan architects had remembered the mountain peaks where the gods had been worshipped in the hazy past.\"\n[…]\nList of Mesoamerican pyramids\n[…]\nDesmond, Lawrenc G. \"Stereo-Photogrammetric Documentation of the Adivino Pyramid at Uxmal, Yucatan\". (Online resource)  12-24 Mar. 1999. Retrieval 26 Oct. 2006  <https://web.archive.org/web/20060907110146/http://maya.csuhayward.edu/archaeoplanet/LgdPage/Adivino99SumRpt.htm>\n[…]\nKowalski, Jeff K. The House of the Governor:  A Maya palace at Uxmal, Yucatán, Mexico. Norman : University of Oklahoma Press, 1987.\n[…]\nPaz, Octavio. The Other Mexico: Critique of the Pyramid. New York : Grove Press, 1972.\n[…]\nRanney, Edward. Stonework of the Maya. Albuquerque:  University of New Mexico Press, 1974.\n[…]\nReed College website on Pyramid of the Magician\n[…]\nAncient Worlds:  The Americas, Pyramid of the Dwarf\n[…]\nFrommers Travel Site, Pyramid of the Magician"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pir%C3%A2mide_do_Sol",
        "situacao": "ok",
        "texto": "A Pirâmide do Sol é a maior das pirâmides da cidade de Teotihuacan, a segunda maior de todo o México e a terceira maior do mundo.\n[…]\nA pirâmide é composta de cinco plataformas dispostas em degraus e uma escadaria cerimonial que conduz ao topo, onde existia um templo feito de madeira – utilizado para realizar sacrifícios e oferendas aos deuses – que foi destruído juntamente com a parte mais alta da pirâmide. Ela é feita de pedregulhos com o núcleo de adobes de terra e lama, recobertos de pedra e revestido de estuque pintado.\n[…]\nDurante o auge de Teotihuacan, as pirâmides eram pintadas de vermelho brilhante e se destacavam na paisagem.\n[…]\nEssa caverna é, na verdade, um túnel natural elaborado e alargado por antigas correntes de lava, devido à região onde Teotihuacan está localizada, sobre uma bacia natural numa extensa região de vulcões. Alguns estudiosos acreditam que a razão para a pirâmide estar construída sobre a caverna é que ela era considerada sagrada e utilizada para atividades religiosas e rituais.\n[…]\nSua base é 97% da base da Grande Pirâmide de Gizé. A relação entre o seu perímetro e a sua base é 4 pi vezes a sua altura. O \"pi\" (π) é uma razão matemática que se baseia no conhecimento de geometria, o que implica o conhecimento de matemática sofisticada. Ela tem uma inclinação de 17º em relação ao polo terrestre, o que faz com que ela aponte para o pólo geográfico da Terra, permitindo que o Sol coincida com o seu centro nos dias 20 de maio e 18 de junho.\n[…]\nTeotihuacan\n[…]\nPirâmide da Lua\n[…]\nMedia relacionados com Pirâmide do Sol no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Tenochtitlan",
      "descricao": "Capital dos astecas mexicas, erguida numa ilha do lago Texcoco, onde hoje fica a Cidade do México."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na mesma ilha de Tenochtitlan ficava uma cidade gêmea, dona do maior mercado do mundo asteca. Como ela se chamava?",
    "resposta": "Tlatelolco",
    "distratores": [
      "Texcoco",
      "Tlacopan",
      "Xochimilco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tenochtitlan",
      "https://en.wikipedia.org/wiki/Tlatelolco_(altepetl)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tenochtitlan",
        "situacao": "ok",
        "texto": "Tenochtitlan, also known as Mexico-Tenochtitlan, was a large Mexican altepetl in what is now the historic center of Mexico City. The exact date of the founding of the city is unclear, but the date 13 March 1325 was chosen in 1925 to celebrate the 600th anniversary of the city. The city was built on an island in what was then Lake Texcoco in the Valley of Mexico.\n[…]\nAt the time of Spanish conquests, Mexico City comprised both Tenochtitlan and Tlatelolco. The city extended from north to south, from the north border of Tlatelolco to the swamps, which by that time were gradually disappearing to the west; the city ended more or less at the present location of Avenida Bucareli.\n[…]\nAlthough many native residents died during the siege of Tenochtitlan, the indigenous still had a strong presence in the city, and were settled in two main areas of the island, designated San Juan Tenochtitlan and Santiago Tlatelolco, each with a municipal council that functioned the entire colonial period. San Juan Tenochtitlan was a Spanish administrative creation, which amalgamated four indigenous sections, with each losing territory to the Spanish traza.\n[…]\nIn the colonial period both San Juan Tenochtitlan and Santiago Tlatelolco retained jurisdiction over settlements on the mainland that they could draw on for labor and tribute demanded by the Spanish, but increasingly those subordinate settlements (sujetos) were able to gain their autonomy with their own rulers and separate relationship with the Spanish rulers.\n[…]\nThere are a number of colonial-era pictorial manuscripts dealing with Tenochtitlan–Tlatelolco, which shed light on litigation between Spaniards and indigenous over property. An account with information about the war of Tenochtitlan against its neighbor Tlatelolco in 1473 and the Spanish conquest in 1521 is the Anales de Mexico y Tlatelolco, 1473, 1521–22."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tlatelolco_(altepetl)",
        "situacao": "ok",
        "texto": "Tlatelolco (Classical Nahuatl: Mēxihco-Tlatelōlco [tɬateˈloːɬko], ) (also called Mexico Tlatelolco) was a pre-Columbian altepetl, or city-state, in the Valley of Mexico. Its inhabitants, known as the Tlatelolca, were part of the Mexica, a Nahuatl-speaking people who arrived in what is now central Mexico in the 13th century. The Mexica settled on an island in Lake Texcoco and founded the altepetl o\n[…]\nIn 1337, a group of dissident Mexica broke away from the Tenochca leadership in Tenochtitlan and founded Mexico-Tlatelolco on the northern portion of the island. Tenochtitlan was closely tied with Tlatelolco, and was largely dependent on its market, the most important site of commerce in the area.\n[…]\nDuring Cortés's siege of Tenochtitlan, the Mexica's would retreat to Tlatelolco and even achieve a successful ambush against the Spanish conquistadores and their allies but would ultimately fall along with the rest of the island to Spain. After the completion of the two-year Spanish Conquest of the Aztec Empire in 1521, the Spanish conquerors established the ruins of Mexico-Tenochtitlan as the Spanish capital of New Spain.\n[…]\nThe remnants of the indigenous populations of Tenochtitlan and Tlatelolco following the conquest were administered by indigenous elites in the incorporated Indian towns of Santiago Tlatelolco and San Juan Tenochtitlan.\n[…]\nIn the twentieth and twenty-first centuries, archeological excavations have taken place at the Tlatelolco (archaeological site) in what is now part of Mexico City. The excavations of the prehispanic city-state are centered on the Plaza de las Tres Culturas, a square surrounded on three sides by an excavated Aztec site, a 17th-century church called Templo de Santiago, and the modern office complex of the Mexican foreign ministry.\n[…]\nList of rulers of Tlatelolco\n[…]\nCodex of Tlatelolco"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tenochtitl%C3%A1n",
        "situacao": "ok",
        "texto": "Tenochtitlán foi uma grande cidade-estado (āltepētl) mexica situada no que é hoje o centro histórico da capital mexicana. A data exata da fundação da cidade não é clara, mas o dia 13 de março de 1325 foi escolhido em 1925 para celebrar o 600º aniversário da Cidade do México.\n[…]\nA pequena ilha natural foi continuamente ampliada, enquanto Tenochtitlan tornou-se a maior e mais poderosa cidade da Mesoamérica. Rotas comerciais foram desenvolvidas, trazendo mercadorias de lugares tão distantes quanto o Golfo do México, o Oceano Pacífico e talvez até mesmo o Império Inca. Após uma inundação do Lago de Texcoco, a cidade foi reconstruída durante o reinado de Ahuitzotl, que ocorreu entre 1486 e 1502, em um estilo que a tornou uma das mais grandiosas da Mesoamérica.\n[…]\nEmbora muitos residentes nativos tenham morrido durante o cerco de Tenochtitlán, os indígenas ainda mantinham uma forte presença na cidade e estavam assentados em duas áreas principais da ilha, designadas San Juan Tenochtitlán e Santiago Tlatelolco, cada uma com um conselho municipal que funcionou durante todo o período colonial. San Juan Tenochtitlán foi uma criação administrativa espanhola que ampliou quatro seções indígenas, cada uma das quais perdeu território para a traza espanhola.\n[…]\nCada calpulli tinha seu próprio tiyanquiztli (mercado), mas também havia um mercado principal na cidade-rimã de Tlatelolco. O conquistador espanhol Hernán Cortés estimou que o mercado tinha o dobro do tamanho da cidade de Salamanca e recebia cerca de 60 mil pessoas por dia. Bernardino de Sahagún fornece uma estimativa populacional mais conservadora de 20 mil habitantes em dias comuns e 40 mil em dias festivos. Também havia mercados especializados nas outras cidades do centro do México.\n[…]\nCivilização asteca",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Cabeças colossais olmecas",
      "descricao": "Esculturas monumentais de cabeças em basalto feitas pela civilização olmeca, no sul do México, a partir de cerca de 900 a.C."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "As cabeças colossais olmecas, algumas com dezenas de toneladas, foram esculpidas em que tipo de rocha?",
    "resposta": "Basalto",
    "distratores": [
      "Granito",
      "Mármore",
      "Arenito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olmec_colossal_heads"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olmec_colossal_heads",
        "situacao": "ok",
        "texto": "The Olmec colossal heads are stone representations of heads sculpted from large basalt boulders. They range in height from 1.17 to 3.4 metres (3.8 to 11.2 ft). The heads date from at least 900 BCE and are a distinctive feature of the Olmec civilization of ancient Mesoamerica. All portray individuals with characteristics corresponding to phenotypes that are still common among the inhabitants of Tab\n[…]\nArchaeological investigation of Olmec basalt workshops suggest that the colossal heads were first roughly shaped using direct percussion to chip away both large and small flakes of stone. The sculpture was then refined by retouching the surface using hammerstones, which were generally rounded cobbles that could be of the same basalt as the monument itself, although this was not always the case.\n[…]\nAll seventeen of the confirmed heads in the Olmec heartland were sculpted from basalt mined in the Sierra de los Tuxtlas mountains of Veracruz. Most were formed from coarse-grained, dark-grey basalt known as Cerro Cintepec basalt after a volcano in the range. Investigators have proposed that large Cerro Cintepec basalt boulders found on the southeastern slopes of the mountains are the source of the stone for the monuments.\n[…]\nThe La Cobata region was the source of the basalt used for carving all of the colossal heads in the Olmec heartland. The La Cobata colossal head was discovered in 1970 and was the fifteenth to be recorded. It was discovered in a mountain pass in the Sierra de los Tuxtlas, on the north side of El Vigia volcano near to Santiago Tuxtla.\n[…]\nThe de Young Museum was loaned San Lorenzo colossal heads 5 and 9 for its Olmec: Colossal Masterworks of Ancient Mexico exhibition, which ran from 19 February to 8 May 2011.\n[…]\nMexican Government of Veracruz donated a resin replica of an Olmec colossal head to Belgium; it is on display in the Tournay Solvay Park in Brussels."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cabe%C3%A7a_colossal_olmeca",
        "situacao": "ok",
        "texto": "As cabeças colossais olmecas são representações em pedra de cabeças esculpidas em grandes blocos de basalto. Elas variam em altura de 1,17 a 3,4 metros (3,8 a 11,2 ft). As cabeças datam de pelo menos 900 a.C. e são uma característica distintiva da civilização olmeca da antiga Mesoamérica. Todas retratam indivíduos com características correspondentes a fenótipos que ainda são comuns entre os habita\n[…]\nUm monumento adicional, em Takalik Abaj na Guatemala, é um trono que pode ter sido esculpido a partir de uma cabeça colossal. Este é o único exemplo conhecido fora do coração olmeca.\n[…]\nTodas as dezessete cabeças confirmadas no coração olmeca foram esculpidas em basalto extraído nas montanhas da Sierra de los Tuxtlas de Veracruz. A maioria foi formada a partir de basalto de grão grosso, cinza escuro, conhecido como basalto Cerro Cintepec, em homenagem a um vulcão na serra. Investigadores propuseram que grandes blocos de basalto Cerro Cintepec encontrados nas encostas sudeste das montanhas são a fonte da pedra para os monumentos.\n[…]\nA região de La Cobata foi a fonte do basalto usado para esculpir todas as cabeças colossais no coração olmeca. A cabeça colossal de La Cobata foi descoberta em 1970 e foi a décima quinta a ser registrada. Foi descoberta em um desfiladeiro na Sierra de los Tuxtlas, no lado norte do vulcão El Vigia, perto de Santiago Tuxtla [en].\n[…]\nOlmecas\n[…]\nMiniaturas olmecas\n[…]\nÁrea nuclear olmeca\n[…]\nPorter, James B. (primavera–outono de 1989). «Olmec Colossal Heads as Recarved Thrones: \"Mutilation,\" Revolution, and Recarving» [Cabeças colossais olmecas como tronos re-esculpidos: \"mutilação\", revolução e re-esculpida]. Cambridge, Massachusetts: The President and Fellows of Harvard College acting through the Peabody Museum of Archaeology and Ethnology. Res: Anthropology and Aesthetics. 17-18 (17/18): 22–29. JSTOR 20166812. doi:10.1086/RESvn1ms20166812",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Três Irmãs (agricultura)",
      "descricao": "Técnica agrícola indígena americana de plantar juntos milho, feijão e abóbora, que se ajudam no crescimento."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No cultivo indígena chamado de três irmãs, o milho é plantado junto com o feijão e com que outra planta?",
    "resposta": "Abóbora",
    "distratores": [
      "Mandioca",
      "Batata",
      "Pimenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Three_Sisters_(agriculture)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Three_Sisters_(agriculture)",
        "situacao": "ok",
        "texto": "The Three Sisters (Spanish: tres hermanas) are the three main agricultural crops of various indigenous peoples of Central and North America. The crops are squash, maize, and climbing beans (typically tepary beans or common beans). Traditionally, several Native American groups also planted sunflowers on the north edges of their gardens as a \"fourth sister\".\n[…]\nThe individual crops and their use in polyculture originated in Mesoamerica, where squash was domesticated first approximately 10,000 years ago, followed by maize and then beans, over a period of 5,000–6,500 years. European records from the sixteenth century describe highly productive Indigenous agriculture based on cultivation of the Three Sisters throughout what are now the Eastern United States and Canada, where the crops were used for both food and trade.\n[…]\nIndigenous peoples throughout North America cultivated different varieties of the Three Sisters, adapted to varying local environments.\n[…]\nWhile this practice is often cited as a way to improve small gardens for individual use, its historical value lay in larger-scale implementations designed to nurture and sustain entire communities. European records from the sixteenth century describe highly productive Indigenous agriculture based on cultivation of the Three Sisters throughout what are now the Eastern United States and Canada, from Florida to Ontario. The agronomist Jane Mt.\n[…]\nIn the Maya Culture they referred to the Three Sisters of Agriculture as Milpa. The Milpa systems was used by the Maya people and many others in Mesoamerica. This agricultural practice uses the same characteristics for intercropping for maize, beans, and squash which is commonly referred to as the \"Three Sisters\". This traditional agriculture practice has been around and implemented for thousands of years."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tr%C3%AAs_Irm%C3%A3s_%28agricultura%29",
        "situacao": "ok",
        "texto": "As Três Irmãs são os três principais cultivos agrícolas da cultura nativa dos Estados Unidos, que são: abóbora, milho, e feijão.\n[…]\nAs três sementes beneficiavam uma as outras. O milho fornecia estrutura aos feijões para se sustentar, eliminando a necessidade de paus. Os feijões forneciam nitrogênio para o solo para que outras plantas o usassem, e a abóbora se propagava pelo chão, bloqueando a luz do sol, prevenindo o aparecimento de ervas daninhas. a abóbora atuava como um \"bagaço vivo\", criando um microclima para reter a umidade no solo.\n[…]\nApesar de ser conhecida como três irmãs, também é chamada e MILPA a Estratégia Pré-Colombiana para a produção de alimentos, onde existe o consórcio de Milho, feijão e abóbora, sendo uma alternativa agroecológica para uma alta produção de alimentos, o sistema MILPA é importante pois tende ao equilíbrio, sendo um fornecedos de compostos bioativos, onde existem três diferentes espécies vegetais, de famílias distintas, que interagem umas com as outras, sendo plantas companheiras.\n[…]\nNutricionalmente, milho, feijão e abóbora contêm todos os nove aminoácidos essenciais. A proteína do milho é ainda mais enriquecida pelas contribuições proteicas dos feijões e sementes de abóbora, enquanto a polpa da abóbora fornece grandes quantidades de vitamina A; com as Três Irmãs, os agricultores colhem aproximadamente a mesma quantidade de energia que a monocultura de milho, mas obtêm mais rendimento de proteína do feijão e da abóbora plantados intercaladamente. Mt.\n[…]\n«The Three Sisters». American Farm Bureau Foundation for Agriculture. 8 de novembro de 2016",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Códice de Dresden",
      "descricao": "Livro maia dobrado em sanfona, com tabelas astronômicas, guardado na biblioteca estadual da Saxônia, em Dresden."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "As tabelas astronômicas mais famosas do Códice de Dresden, livro maia, acompanham os ciclos de que planeta?",
    "resposta": "Vênus",
    "distratores": [
      "Marte",
      "Júpiter",
      "Mercúrio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dresden_Codex"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dresden_Codex",
        "situacao": "ok",
        "texto": "The Dresden Codex is a Maya book originating from the region of Chichén Itzá in Mexico. It was believed to be the oldest surviving book written in the Americas, dating to the 11th or 12th century, however in 2018 it was proven that the Maya Codex of Mexico, previously known as the Grolier Codex, is in fact older by about a century. The codex was rediscovered in the city of Dresden, Germany, hence \n[…]\nThe codex contains information relating to astronomical and astrological tables, religious references, seasons of the earth, and illness and medicine. It also includes information about conjunctions of planets and moons.\n[…]\nHistorian Cyrus Thomas made a connection between the codex and the 260 year cycle (\"Ahau Katun\") of the Maya calendar and the 365 days in a year. Ruggles shows that in the codex the Maya related their 260-day calendar to celestial bodies, especially Venus and Mars.\n[…]\nThe Dresden Codex contains accurate astronomical tables, which are recognized by students of the codex for its detailed Venus tables and lunar tables. The lunar series has intervals correlating with eclipses, while the Venus tables correlate with the movements of the planet Venus. The codex also contains astrological tables and ritual schedules. The religious references show in a cycle of a 260-day ritual calendar the important Maya royal events.\n[…]\nMaya Codex of Mexico\n[…]\nFacsimile: Codex Dresdensis, Akademische Druck- u. Verlagsanstalt (ADEVA) Graz 1975, Colour facsimile edition of the Maya-MS in possession of Sächsische Landesbibliothek, Dresden. 78 pp. (74 with inscriptions), size: 205 x 90 mm, total length 3,56 m, in leporello folding. Encased in box with leather spine. Commentary: With contributions by F. Anders and H. Deckert; 93 pp. introduction, 39 pp. with black-and-white reproduction of the codex, 10 colour plates. CODICES SELECTI, Vol. LIV\n[…]\nThe Dresden Codex Lunar Series and Sidereal Astronomy"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Códice de Dresden",
      "descricao": "Livro maia dobrado em sanfona, com tabelas astronômicas, guardado na biblioteca estadual da Saxônia, em Dresden."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1945, o Códice de Dresden, um livro maia, foi danificado pela água. Que acontecimento da Segunda Guerra causou o estrago?",
    "resposta": "Bombardeio de Dresden",
    "distratores": [
      "Enchente do rio Elba",
      "Saque soviético",
      "Naufrágio no Báltico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dresden_Codex"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dresden_Codex",
        "situacao": "ok",
        "texto": "The Dresden Codex is a Maya book originating from the region of Chichén Itzá in Mexico. It was believed to be the oldest surviving book written in the Americas, dating to the 11th or 12th century, however in 2018 it was proven that the Maya Codex of Mexico, previously known as the Grolier Codex, is in fact older by about a century. The codex was rediscovered in the city of Dresden, Germany, hence \n[…]\nThe Dresden Codex is one of four hieroglyphic Maya codices that survived the Spanish Inquisition in the New World. Three, the Dresden, Madrid, and Paris codices, are named after the city where they were ultimately rediscovered. The fourth is the Grolier Codex, located at the Grolier Club in New York City. The Dresden Codex is held by the Saxon State and University Library Dresden (SLUB Dresden, Saxon State Library) in Dresden, Germany.\n[…]\nIt received direct water damage that was significantly destructive, from being kept in a flooded basement during the World War II bombing of Dresden in February 1945. German historian G. Zimmerman later noted that the damage was extreme on pages 2, 4, 24, 28, 34, 38, 71 and 72. Certain details of the glyph images have been lost because of this. The damage is apparent when the current codex is compared to the Kingsborough copies of 1831–48 and the Förstemann facsimile editions from 1880 and 1892.\n[…]\nMaya Codex of Mexico\n[…]\nFacsimile: Codex Dresdensis, Akademische Druck- u. Verlagsanstalt (ADEVA) Graz 1975, Colour facsimile edition of the Maya-MS in possession of Sächsische Landesbibliothek, Dresden. 78 pp. (74 with inscriptions), size: 205 x 90 mm, total length 3,56 m, in leporello folding. Encased in box with leather spine. Commentary: With contributions by F. Anders and H. Deckert; 93 pp. introduction, 39 pp. with black-and-white reproduction of the codex, 10 colour plates. CODICES SELECTI, Vol. LIV\n[…]\nThe Dresden Codex Lunar Series and Sidereal Astronomy"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Coricancha",
      "descricao": "Principal templo inca, dedicado ao Sol, em Cusco, no Peru."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Antes da conquista espanhola, as paredes do Coricancha, o templo do Sol em Cusco, eram revestidas de lâminas de quê?",
    "resposta": "Ouro",
    "distratores": [
      "Prata",
      "Cobre",
      "Bronze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coricancha"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coricancha",
        "situacao": "ok",
        "texto": "The Coricancha (Cusco Quechua: Quri Kancha, lit. 'golden temple', pronounced [ˈqɔɾi ˈkantʃa]) was the most important temple in the Inca Empire, and was described by early Spanish colonialists. It is located in Cusco, Peru, which was the capital of the empire.\n[…]\nOriginally named Intikancha or Intiwasi, it was dedicated to Inti (the Sun god of the Inca), and is located at the former Inca capital of Cusco. The High Priest resided in the temple and offered up the ordinary sacrifices, accompanied by religious rites, with the help of other priests. Most of the temple was destroyed after the 16th-century war with the Spanish conquistadors, as settlers also took it apart to build their own churches and residences.\n[…]\nSimilarities are found in the semicircular temples found in the Temple of the Sun in Cusco, the Torreon in Machu Picchu, and the Temple of the Sun in Písac. In particular, all three exhibit a \"parabolic enclosure wall\" of the finest stonework, as Bingham describes it. These structures were also used for similar purposes, including the observation of solstices and Inca constellations.\n[…]\nChildren were also sacrificed in certain circumstances; they were brought to Cusco following a ceque and huaca route of tribute.\n[…]\nThe Coricancha is located at the confluence of two rivers, one of which being the Huatanay River which is now highly polluted. Here, according to Inca myth, is where Manco Cápac decided to build the Coricancha, the foundation of Cusco, and the eventual Inca Empire. According to Ed Krupp, \"The Inca built the Coricancha at the confluence because that place represented terrestrially the organizing pivot of heaven.\"\n[…]\nChurch and Convent of Santo Domingo, Cusco"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coricancha",
        "situacao": "ok",
        "texto": "Coricancha, Qorikancha, Korikancha ou Qurikancha (em quéchua, Quri Kancha, \"recinto de ouro\" ou \"templo dourado\", originalmente Inti Kancha, \"templo do sol\"), em Cusco no Peru, é uma obra da arquitetura Inca e um dos mais importantes complexos arqueológicos sagrados daquele povo.\n[…]\nFeito de pedras polidas e encaixes harmoniosos, Coricancha foi construído pelo imperador inca Pachacuti (em espanhol Pachacútec), assim como muitas outras edificações de seu mandato, por motivo de um vitória acometida contra os chankas por volta de 1438.\n[…]\nDestaca-se no complexo o Templo de Qorikancha ou Templo do Sol. Era um local sagrado de rituais e oferendas ao deus Sol, cultuado pelos Incas, nele habitava o sumo sacerdote (Willaq Umu) e só tinham autorização de ingressar o Inca (imperador), os sacerdotes e as virgens do sol. Suas paredes eram cobertas por folhas (lâminas) de ouro sólido e o adjacente foi preenchido com estátuas douradas. O Templo do Sol era também um observatório onde altos sacerdotes monitoravam atividades celestes.\n[…]\nFoi destruído pelos conquistadores espanhóis, mais precisamente pelos religiosos dominicanos que sobre ele erigiram o Convento e a Igreja de Santo Domingo. A construção levou um século para ser finalizada e uma, das muitas, edificações que os espanhóis aproveitaram do alicerce de pedras incas para erguerem edifícios coloniais.\n[…]\nDe forma interessante, o grande terremoto de 1950, destruiu a construção dos padres dominicanos e expôs o Templo do Sol, que resistiu firmemente ao terremoto, graças às técnicas incas de construção.\n[…]\nEsta teria sido a segunda vez que aquela construção dos dominicanos fora destruída, sendo que a primeira vez fora em 1650 quando a construção espanhola era bem diferente.\n[…]\nCusco",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Estátua de Coatlicue",
      "descricao": "Monumental escultura asteca de pedra da deusa mãe Coatlicue, a da saia de serpentes, no Museu Nacional de Antropologia do México."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na grande estátua asteca de Coatlicue, a deusa usa um colar feito de corações e de que outra parte do corpo humano?",
    "resposta": "Mãos",
    "distratores": [
      "Olhos",
      "Orelhas",
      "Dentes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coatlicue"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coatlicue",
        "situacao": "ok",
        "texto": "Coatlicue (; Classical Nahuatl: cōātl īcue, Nahuatl pronunciation: [koː(w)aːˈt͡ɬiːkʷeː] , \"skirt of snakes\"), wife of Mixcōhuātl, also known as Tēteoh īnnān (pronounced [teːˈtéoʔˈíːnːaːn̥], \"mother of the gods\") is the Aztec goddess who gave birth to the moon, stars, and Huītzilōpōchtli, the god of the sun and war. The goddesses Toci \"our grandmother\" and Cihuacōātl \"snake woman\", the patron of wo\n[…]\nBoone, Elizabeth H. \"The Coatlicues at the Templo Mayor.\"  Ancient Mesoamerica  (1999), 10: 189–206 Cambridge University Press.\n[…]\nCarbonell, Ana Maria. \"From Llorona to Gritona: Coatlicue in Feminist Tales by Viramontes and Cisneros.\" MELUS 24(2) Summer 1999:53–74\n[…]\nCisneros, Sandra. \"It occurs to me I am the creative/destructive goddess Coatlicue.\" The Massachusetts Review 36(4):599. Winter 1995.\n[…]\nDe Leon, Ann. \"Coatlicue or How to Write the Dismembered Body.\" MLN Hispanic Notes Volume 125, Number 2: 259–286 March 2010.\n[…]\nDorsfuhrer, C. \"Quetzalcoatl and Coatlicue in Mexican Mythology.\" Cuadernos Hispanoamericanos (449):6–28 November 1987.\n[…]\nFernández, Justino. Coatlicue. Estética del arte indígena antiguo. Centro de Estudios Filosoficos, U.N.A.M., Mexico, 1954.\n[…]\nFranco, Jean. \"The Return of Coatlicue: Mexican Nationalism and the Aztec Past.\" Journal of Latin American Cultural Studies 13(2) August 2004: 205–219.\n[…]\nGranziera, Patrizia. \"From Coatlicue to Guadalupe: The Image of the Great Mother in Mexico.\" Studies in World Christianity 10(2):250–273. 2005.\n[…]\nLópez Luján, Leonardo. \"La Coatlicue.\" Escultura Monumental Mexica :115–230. 2012.\n[…]\nLópez Luján, Leonardo. El ídolo sin pies ni cabeza: la Coatlicue a fines del México virreinal. El Colegio Nacional, Mexico City, 2020.\n[…]\nPimentel, Luz A. \"Ekphrasis and Cultural Discourse: Coatlicue in Descriptive and Analytic Texts (Representations of the Aztec earth mother goddess). NEOHELICON 30(1):61–75. 2003.\n[…]\nMedia related to Coatlicue at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coatlicue",
        "situacao": "ok",
        "texto": "Coatlicue é, na mitologia asteca, a deusa da vida e da morte, mãe dos deuses, da lua e das estrelas.\n[…]\nSofreu tentativa de assassinato por sua primogênita Coyolxauhqui (também conhecida como a própria Lua) e seus 400 filhos, os Centzon Huitznauhtin (irmãos de Coyolxauhqui e representantes das estrelas no céu) após quebrar o celibato e engravidar do \"Deus Céu\" que veio em forma de pássaro e deixou uma oferenda de plumas, resultando no nascimento de seu filho e salvador, Huitzilopochtli (futuro Deus da Guerra da Mitologia Asteca) que nasceu fruto dessa \"união\" sem relações sexuais.\n[…]\nFonte: History Channel - Programa \"Confronto dos Deuses: América Latina, Episódio 2: Coatlicue\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Estátua de Coatlicue",
      "descricao": "Monumental escultura asteca de pedra da deusa mãe Coatlicue, a da saia de serpentes, no Museu Nacional de Antropologia do México."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Segundo o mito asteca, a deusa Coatlicue é a mãe de que deus da guerra, que nasceu já armado para defendê-la?",
    "resposta": "Huitzilopochtli",
    "distratores": [
      "Tezcatlipoca",
      "Quetzalcóatl",
      "Xipe Tótec"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coatlicue",
      "https://en.wikipedia.org/wiki/Huitzilopochtli"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coatlicue",
        "situacao": "ok",
        "texto": "Coatlicue (; Classical Nahuatl: cōātl īcue, Nahuatl pronunciation: [koː(w)aːˈt͡ɬiːkʷeː] , \"skirt of snakes\"), wife of Mixcōhuātl, also known as Tēteoh īnnān (pronounced [teːˈtéoʔˈíːnːaːn̥], \"mother of the gods\") is the Aztec goddess who gave birth to the moon, stars, and Huītzilōpōchtli, the god of the sun and war. The goddesses Toci \"our grandmother\" and Cihuacōātl \"snake woman\", the patron of wo\n[…]\nAccording to Aztec mythology, the goddess Coatlicue became miraculously pregnant when a ball of feathers fell on her while she was sweeping a temple—an event that symbolizes divine conception and cosmic destiny. She was to give birth to Huitzilopochtli, the future god of war and the sun. Interpreting this as dishonor, her daughter Coyolxauhqui, along with her 400 brothers, plotted to kill her.\n[…]\nJust as the attack began, Huitzilopochtli emerged fully armed from his mother, defeated his siblings, and cast Coyolxauhqui into the sky, where she became the moon. This myth represents the triumph of cosmic order over chaos and the daily rebirth of the sun.\n[…]\nFranco, Jean. \"The Return of Coatlicue: Mexican Nationalism and the Aztec Past.\" Journal of Latin American Cultural Studies 13(2) August 2004: 205–219.\n[…]\nGranziera, Patrizia. \"From Coatlicue to Guadalupe: The Image of the Great Mother in Mexico.\" Studies in World Christianity 10(2):250–273. 2005.\n[…]\nLópez Luján, Leonardo. \"La Coatlicue.\" Escultura Monumental Mexica :115–230. 2012.\n[…]\nLópez Luján, Leonardo. El ídolo sin pies ni cabeza: la Coatlicue a fines del México virreinal. El Colegio Nacional, Mexico City, 2020.\n[…]\nPimentel, Luz A. \"Ekphrasis and Cultural Discourse: Coatlicue in Descriptive and Analytic Texts (Representations of the Aztec earth mother goddess). NEOHELICON 30(1):61–75. 2003.\n[…]\nMedia related to Coatlicue at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Huitzilopochtli",
        "situacao": "ok",
        "texto": "Huitzilopochtli (Classical Nahuatl: Huītzilōpōchtli, IPA: [wiːt͡siloːˈpoːt͡ʃt͡ɬi] ) is the solar and war deity of sacrifice in Aztec religion. He was also the patron god of the Aztecs and their capital city, Tenochtitlan. He wielded Xiuhcoatl, the fire serpent, as a weapon, thus also associating Huitzilopochtli with fire.\n[…]\nHuitzilopochtli burst forth from his mother's womb in full armor and fully grown, or in other versions of the story, burst forth from the womb and immediately put on his gear. He attacked his older brothers and sister, defending his mother by beheading his sister and casting her body from the mountain top. He also chased after his brothers, who fled from him and became scattered all over the sky. This same story exists also with Quetzalcoatl instead.\n[…]\nThe leader of one group, Huitzilopochtli, defeats the warriors of a woman leader, Coyolxauh, and tears open their breasts and eats their hearts. Both versions tell of the origin of human sacrifice at the sacred place, Coatepec, during the rise of the Aztec nation and at the foundation of Tenochtitlan.\n[…]\nDiego Durán described the festivities for Huitzilopochtli. Panquetzaliztli (November 9 to November 28) was the Aztec month dedicated to Huitzilopochtli. People decorated their homes and trees with paper flags; there were ritual races, processions, dances, songs, prayers, and finally human sacrifices. This was one of the more important Aztec festivals, and the people prepared for the whole month.\n[…]\nFor the reconsecration of Great Pyramid of Tenochtitlan in 1487, dedicated to Tlaloc and Huitzilopochtli, the Aztecs reported that they sacrificed about 20,400 prisoners over the course of four days. While accepted by some scholars, this claim also has been considered Aztec propaganda. There were 19 altars in the city of Tenochtitlan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coatlicue",
        "situacao": "ok",
        "texto": "Coatlicue é, na mitologia asteca, a deusa da vida e da morte, mãe dos deuses, da lua e das estrelas.\n[…]\nSofreu tentativa de assassinato por sua primogênita Coyolxauhqui (também conhecida como a própria Lua) e seus 400 filhos, os Centzon Huitznauhtin (irmãos de Coyolxauhqui e representantes das estrelas no céu) após quebrar o celibato e engravidar do \"Deus Céu\" que veio em forma de pássaro e deixou uma oferenda de plumas, resultando no nascimento de seu filho e salvador, Huitzilopochtli (futuro Deus da Guerra da Mitologia Asteca) que nasceu fruto dessa \"união\" sem relações sexuais.\n[…]\nFonte: History Channel - Programa \"Confronto dos Deuses: América Latina, Episódio 2: Coatlicue\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Moais da Ilha de Páscoa",
      "descricao": "Estátuas monolíticas esculpidas pelo povo Rapa Nui na Ilha de Páscoa."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Quando completos, os olhos de alguns moais da Ilha de Páscoa eram feitos de que material branco?",
    "resposta": "Coral",
    "distratores": [
      "Marfim",
      "Calcário",
      "Gesso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Moai"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moai",
        "situacao": "ok",
        "texto": "Moai or moꞌai (  MOH-eye; Rapa Nui: moꞌai, lit. 'statue', pronounced [ˈmoʔai]; Spanish: moái) are monolithic human figures carved from stone by the Rapa Nui people, on Rapa Nui (Easter Island) in eastern Polynesia between the years 1250 and 1500. Nearly half are still at Rano Raraku, the main moai quarry, but hundreds were transported from there and set on stone platforms called ahu around the isl\n[…]\nIn 1979, Sergio Rapu Haoa and a team of archaeologists discovered that the hemispherical or deep elliptical eye sockets were designed to hold coral eyes with either black obsidian or red scoria pupils. The discovery was made by collecting and reassembling broken fragments of white coral that were found at the various sites. Subsequently, previously uncategorized finds in the Easter Island museum were re-examined and recategorized as eye fragments.\n[…]\nCompleted statues were moved to ahu mostly on the coast, then erected, sometimes with pukao, red stone cylinders, on their heads. Moai must have been very time-consuming to craft and transport; not only would the actual carving of each statue require effort and resources, but the finished product was then hauled to its final location and erected.\n[…]\nThe quarries in Rano Raraku appear to have been abandoned abruptly, with a litter of stone tools and many completed moai outside the quarry awaiting transport and almost as many incomplete statues still in situ as were installed on ahu. In the nineteenth century, this led to conjecture that the island was the remnant of a sunken continent and that most completed moai were under the sea. That idea has long been debunked, and now it is generally believed that:\n[…]\nHeyerdahl, Thor. Skjølsvold, Arne. Pavel Pavel. The \"Walking\" Moai of Easter Island. Retrieved 8 August 2005.\n[…]\nMoai statues at Easter Island Travel\n[…]\nMoai database at Terevaka Archaeological Outreach"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Moai",
        "situacao": "ok",
        "texto": "Moai ou moꞌai (em rapanui: moꞌai, \"estátua\") são figuras humanas monolíticas esculpidas em pedra pelo povo rapanui, em Rapa Nui (Ilha de Páscoa) na Polinésia Oriental entre os anos 1250 e 1500. Quase metade ainda está em Rano Raraku, a principal pedreira de moai, mas centenas foram transportadas de lá e colocadas em plataformas de pedra chamadas ahu ao redor do perímetro da ilha.\n[…]\nAs estátuas ainda contemplavam o interior, através das terras de seus clãs, quando os europeus visitaram a ilha pela primeira vez em 1722, mas todas elas haviam caído no final do século XIX. Os moai foram derrubados no final do século XVIII e início do século XIX, possivelmente como resultado do contato europeu ou de guerras tribais internas.\n[…]\nEm 2010, moai foi incluído como um emoji \"moyai\" (🗿) na versão 6.0 do Unicode sob o ponto de código U+1F5FF como \"estátua de pedra japonesa semelhante a Moai na Ilha de Páscoa\".\n[…]\nO nome oficial Unicode para o emoji é escrito \"moyai\", pois o emoji representa a estátua moyai perto da Estação Shibuya em Tóquio. A estátua foi um presente do povo de Nii-jima (uma ilha 163 quilômetros (101 mi) de Tóquio, mas administrativamente parte da cidade) inspirado nos moai da Ilha de Páscoa. O nome da estátua foi derivado da combinação de \"moai\" e da palavra dialetal japonesa moyai (催合い) 'ajudando uns aos outros'.\n[…]\nComo o Unicode adotou emojis proprietários inicialmente usados por operadoras de telefonia móvel japonesas na década de 1990, desenhos inconsistentes foram adotados para este emoji por várias empresas com imagens de emoji proprietárias, representando um moai ou a estátua moyai. Os emojis do Google e da Microsoft inicialmente se assemelhavam à estátua moyai em Tóquio; no entanto, os emojis foram posteriormente revisados para se assemelharem a moai.\n[…]\nCzech who made moai statues walk returns to Easter Island",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Pirâmide de Kukulcán",
      "descricao": "Pirâmide escalonada no centro de Chichén Itzá, no México, também chamada El Castillo."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Dentro da pirâmide de Kukulcán, em Chichén Itzá, há um templo mais antigo com um trono vermelho em forma de que animal?",
    "resposta": "Jaguar",
    "distratores": [
      "Serpente",
      "Águia",
      "Macaco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/El_Castillo,_Chichen_Itza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/El_Castillo,_Chichen_Itza",
        "situacao": "ok",
        "texto": "El Castillo (Spanish pronunciation: [el kas'tiʎo], 'the Castle'), also known as the Temple of Kukulcán, is a Mesoamerican step-pyramid that dominates the center of the Chichen Itza archaeological site in the Mexican state of Yucatán. The temple building is more formally designated by archaeologists as Chichen Itza Structure 5B18.\n[…]\nThe four fangs of the Red Jaguar have been identified as gastropod mollusk shells (Lobatus costatus) using a digital microscope and comparative analysis from malacology experts from the National Institute of Anthropology and History. The shells also are thought to be another valued resource material that may have been traded into Chichén Itzá. The green stones were analyzed and determined to be a form of jadeite.\n[…]\nArchaeological studies indicate that the Red Jaguar is similar to other depictions of thrones found in Maya murals (Temple of Chacmool), thus whoever was seated on this throne could have been accessing the point of axis mundi, which is essential to the elements and relationship to the cosmological system. The symbolic use of materials related to the underworld and death also suggest that it acted as an offering for ritually closing the temple.\n[…]\nIn agreement with this pattern, detected both in the Maya Lowlands  and elsewhere in Mesoamerica, the north (and main) face of the temple of Kukulcán at Chichén Itzá has an azimuth of 111.72°, corresponding to sunsets on May 20 and July 24, separated by 65 and 300 days (multiples of 13 and 20). Significantly, the same dates are recorded by a similar temple at Tulum.\n[…]\nDetermining the dates when these constructions happened will provide time periods of when Chichen Itza may have been significantly occupied."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Templo_de_Kukulc%C3%A1n",
        "situacao": "ok",
        "texto": "O Templo de Kukulkán ou Pirâmide de Kukulkán, ou incluso \"El Castillo\" Foi construído pelos maias itzáes na antiga cidade de Chichén Itzá, no território pertencente ao estado mexicano do Yucatã. Sua construção foi iniciada no século VI, tendo sido posteriormente ampliado nos séculos VIII e XI.\n[…]\nA poucos metros, e após mais de um ano de escavações, em Agosto de 1936 foi descoberto um segundo recinto, o qual foi batizado como \"câmara de sacrifícios\", dentro do qual se encontraram duas fileiras de canelas humanas embutidas paralelamente ao fundo da câmara, e a escultura de um jaguar (Onça-pintada) de cor vermelha com 74 incrustações de jade que simulam no corpo as manchas características da espécie; os olhos são simulados com médias-luas da mesma pedra e os colmilhos e dentes em pederneira pintados de branco.\n[…]\nNo lombo encontrava-se um disco de turquesas, o qual aparentemente servia para queimar copal; ambas as figuras têm a sua vista dirigida ao NNE (nor-nordeste). Como conclusão foi determinada a existência de uma pirâmide de medidas aproximadas de 33 metros de largura, de igual forma à exterior, com 9 embasamentos e uma altura de 17 m até o patamar do templo superior onde se encontraram o Chac Mool e o jaguar, estima-se que esta construção corresponde ao século XI.\n[…]\nO templo de Kukulcán conta com quatro escadarias, cada uma delas tem 91 degraus, desta forma somam 364, que somadas ao patamar do topo, comum às quatro escadas, dá um total 365 unidades que representam os dias do Haab.\n[…]\nEm muitas partes da decoração arquitetônica de colunas e dintéis de Chichén Itzá, encontram-se alusões ao corpo da serpente, no próprio \"Templo de Kukulcán\", no \"Templo dos Jaguares\", no \"Templo dos Guerreiros\", no \"Jogo de Bola\", na \"Plataforma das Águias e os Jaguares\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Queda de Tenochtitlan",
      "descricao": "Cerco e conquista da capital asteca pelos espanhóis de Hernán Cortés e seus aliados indígenas, em 1521."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que povo, velho inimigo dos astecas, forneceu os principais aliados indígenas de Cortés no cerco a Tenochtitlan?",
    "resposta": "Tlaxcaltecas",
    "distratores": [
      "Tarascos",
      "Zapotecas",
      "Maias"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fall_of_Tenochtitlan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fall_of_Tenochtitlan",
        "situacao": "ok",
        "texto": "The fall of Tenochtitlan, the capital of the Mexica, was an important event in the Spanish conquest of the Mexica. It occurred in 1521 following extensive negotiations between local factions and Spanish conquistador Hernán Cortés. He was aided by La Malinche, his interpreter and companion, and by thousands of indigenous allies, especially Tlaxcaltec warriors.\n[…]\nTwo thousand warriors returned from Texcoco, as did many Tlaxcan warriors under Tepaneca from Topeyanco, and those from Huejotzingo and Cholula.\n[…]\nThis was part of a merciless campaign against the Aztecs who had long oppressed them, as for a hundred years the Tlaxcalans had been forced to hand over an annual quota of young men and women to be sacrificed and eaten at the Great Pyramid of Tenochtitlan, and now the Tlaxcalans saw their chance for revenge. American historian Charles Robinson wrote: \"Centuries of hate and the basic viciousness of Mesoamerican warfare combined in violence that appalled Cortés himself\".\n[…]\nAlthough some reports put the number as low as forty, the Spanish lost over 100 soldiers in the siege, while thousands of Tlaxcalans perished. It is estimated that around 1,800 Spaniards died from all causes during the two-year campaign—from Veracruz to Tenochtitlan. (Thomas, pp. 528–29) The remaining Spanish forces consisted of 800–900 Spaniards, eighty horses, sixteen pieces of artillery, and Cortés' thirteen brigantines.\n[…]\nOther sources estimate that around 860 Spanish soldiers and 20,000 Tlaxcalan warriors were killed during all the battles in this region from 1519 to 1521. It is well accepted that Cortés' indigenous allies, which may have numbered as many as 200,000 over the three-year period of the conquest, were indispensable to his success. Cortés' lieutenant Bernal Díaz del Castillo especially credited La Malinche with their victory."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cerco_de_Tenochtitl%C3%A1n",
        "situacao": "ok",
        "texto": "O Cerco de Tenochtitlán foi uma grande batalha travada na capital do Império Asteca, que aconteceu em 1521, entre as forças do conquistador espanhol Hernán Cortés, apoiados por combatentes da tribo local de Tlaxcala, e as tropas de guerreiros astecas.\n[…]\nDepois de incontáveis confrontos de pequena e larga escala entre os exércitos inimigos, a luta por Tenochtitlán foi a batalha final e a que acabou decidindo o resultado de toda a guerra, culminando na queda da civilização asteca e o início da colonização espanhola do México e depois da América Latina.\n[…]\nApesar de escaramuças e combates travados, a maioria das mortes entre os nativos indígenas vieram de doenças trazidas pelos espanhóis, como a varíola.\n[…]\nHistória dos astecas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Queda de Tenochtitlan",
      "descricao": "Cerco e conquista da capital asteca pelos espanhóis de Hernán Cortés e seus aliados indígenas, em 1521."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Destes episódios da conquista espanhola das Américas, qual aconteceu primeiro?",
    "resposta": "Queda de Tenochtitlan",
    "distratores": [
      "Captura de Atahualpa",
      "Fundação de Lima",
      "Execução de Túpac Amaru"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fall_of_Tenochtitlan",
      "https://en.wikipedia.org/wiki/Battle_of_Cajamarca",
      "https://en.wikipedia.org/wiki/Lima",
      "https://en.wikipedia.org/wiki/T%C3%BApac_Amaru"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fall_of_Tenochtitlan",
        "situacao": "ok",
        "texto": "The fall of Tenochtitlan, the capital of the Mexica, was an important event in the Spanish conquest of the Mexica. It occurred in 1521 following extensive negotiations between local factions and Spanish conquistador Hernán Cortés. He was aided by La Malinche, his interpreter and companion, and by thousands of indigenous allies, especially Tlaxcaltec warriors.\n[…]\nThe fighting in Tenochtitlan was described by the American historian Charles Robinson as \"desperate\" as both sides battled one another in the streets in a ferocious battle where no quarter was given nor asked for.\n[…]\nCuauhtémoc was taken prisoner the same day, as related above, and remained the titular leader of Tenochtitlan, under the control of Cortés, until he was hanged for treason in 1525 while accompanying a Spanish expedition to Guatemala.\n[…]\nThis was part of a merciless campaign against the Aztecs who had long oppressed them, as for a hundred years the Tlaxcalans had been forced to hand over an annual quota of young men and women to be sacrificed and eaten at the Great Pyramid of Tenochtitlan, and now the Tlaxcalans saw their chance for revenge. American historian Charles Robinson wrote: \"Centuries of hate and the basic viciousness of Mesoamerican warfare combined in violence that appalled Cortés himself\".\n[…]\nAlthough some reports put the number as low as forty, the Spanish lost over 100 soldiers in the siege, while thousands of Tlaxcalans perished. It is estimated that around 1,800 Spaniards died from all causes during the two-year campaign—from Veracruz to Tenochtitlan. (Thomas, pp. 528–29) The remaining Spanish forces consisted of 800–900 Spaniards, eighty horses, sixteen pieces of artillery, and Cortés' thirteen brigantines.\n[…]\nSheppard, Si. Tenochtitlan 1519–21: Clash of Civilizations. Oxford: Osprey, 2018.\n[…]\nConquistadors, with Michael Wood – website for 2001 PBS documentary"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Cajamarca",
        "situacao": "ok",
        "texto": "The Battle of Cajamarca, also spelled Cajamalca (though many contemporary scholars prefer to call it the Cajamarca massacre), was the ambush and seizure of the Incan ruler Atahualpa by a small Spanish force led by Francisco Pizarro, on November 16, 1532. The Spanish killed thousands of Atahualpa's counselors, commanders, and unarmed attendants in the great plaza of Cajamarca, and caused his armed \n[…]\nMichael Wood: The Conquistadors. 2002 PBS"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lima",
        "situacao": "ok",
        "texto": "Lima is the capital and largest city of Peru, as well as a primate city. It is located in the valleys of the Chillón, Rímac and Lurín Rivers, in the desert zone of the central coastal part of the country, overlooking the Pacific Ocean. The city is considered the political, cultural, financial and commercial center of Peru.\n[…]\nLima is known as the Gastronomical Capital of the Americas. As a center of immigration and the center of the Spanish Viceroyalty, chefs incorporated dishes brought by the conquistadors and waves of immigrants: African, European, Chinese and Japanese. Since the second half of the 20th century, international immigrants were joined by internal migrants from rural areas. Lima cuisines include Creole food, Chifas, Cebicherias and Pollerias.\n[…]\nWhile Commuter rail services for Lima are planned as part of the larger Tren de la Costa project, the first official services, beginning 2027, will run from the capital to Chosica on the FCCA mainlines and will operate as a diesel powered service using ex-Caltrain EMD F40PH locomotives and 90 Nippon Sharyo Gallery cars, some being cab cars for push-pull configuration, all of the coaches and cab cars being the first of their kind in Peru and western South America.\n[…]\nThe Metropolitan Transport System or El Metropolitano is a new, integrated system, consisting of a network of buses that run in exclusive corridors under the Bus Rapid Transit system (BRT). The goal is to reduce passengers' commute times, protect the environment, provide improved security and overall quality of service. Metropolitano was executed with funds from the City of Lima and financing from the Inter-American Development Bank and the World Bank.\n[…]\nLargest cities in the Americas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cerco_de_Tenochtitl%C3%A1n",
        "situacao": "ok",
        "texto": "O Cerco de Tenochtitlán foi uma grande batalha travada na capital do Império Asteca, que aconteceu em 1521, entre as forças do conquistador espanhol Hernán Cortés, apoiados por combatentes da tribo local de Tlaxcala, e as tropas de guerreiros astecas.\n[…]\nDepois de incontáveis confrontos de pequena e larga escala entre os exércitos inimigos, a luta por Tenochtitlán foi a batalha final e a que acabou decidindo o resultado de toda a guerra, culminando na queda da civilização asteca e o início da colonização espanhola do México e depois da América Latina.\n[…]\nApesar de escaramuças e combates travados, a maioria das mortes entre os nativos indígenas vieram de doenças trazidas pelos espanhóis, como a varíola.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Sambaqui",
      "descricao": "Morro artificial de conchas e restos de alimentos erguido por povos pré-históricos do litoral brasileiro."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Os sambaquis, morros erguidos há milhares de anos por povos do litoral brasileiro, são formados principalmente de quê?",
    "resposta": "Conchas",
    "distratores": [
      "Areia",
      "Cerâmica",
      "Ossos de baleia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sambaqui"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sambaqui",
        "situacao": "ok",
        "texto": "Os sambaquis (português brasileiro) ou concheiros (português europeu) são depósitos construídos pelo homem, constituídos por materiais orgânicos e calcários que, empilhados ao longo do tempo, vêm sofrendo a ação das intempéries. Similares a um tel, acabaram por sofrer uma fossilização química, já que a chuva deforma as estruturas dos moluscos e dos ossos enterrados, difundindo o cálcio em toda a e\n[…]\n\"Sambaqui\" procede do termo tupi tãba (conchas) e ki (amontoado). \"Cernambi\" e \"sarnambi\" possuem origem tupi. Dentre outras denominações, cernambis, sarnambis, minas de cernambis, minas, bancos, casqueiros, concheiras, concheiros, ostreiras, samauquis, berbigueiras, caieiras e caleiras.\n[…]\nEm Portugal designam-se de Concheiros, sendo os mais conhecidos os Concheiros de Muge, nas margens do Rio Tejo, perto da cidade de Santarém. Em língua inglesa, são chamados shell-mounds (\"montes de conchas\") ou middens. Em língua norueguesa, são chamados kjökkenmodding. Em espanhol, eles são conhecidos como concheros.\n[…]\nNo Brasil, no meio acadêmico são comuns as denominações \"população sambaquieira\", \"sociedade sambaquieira\" e \"povo sambaquieiro\" para aqueles que habitavam e construíram os sambaquis.\n[…]\nAlguns destes sambaquis chegavam a atingir 30 metros de altura por 40 de comprimento. No século XVI, conchas de um só monte foram moídas e utilizadas como cal na construção do Palácio do Governador, de parte do Colégio da Bahia, de engenhos de açúcar e de vários outros edifícios.\n[…]\nO Sambaqui Garopaba do Sul é o maior depósito de conchas do mundo em extensão, com 30 metros de altura e 200 de diâmetro e mais de 3,7 mil anos (DIDONÊ, Revista Nova Escola, maio, 2008).\n[…]\nO Sambaqui de Cananeia, localizado na Ilha do Cardoso, em Cananéia, no litoral do Estado de São Paulo, é um dos mais antigos do Brasil, com cerca de 8 mil anos (DIDONÊ, Revista Nova Escola, maio, 2008).\n[…]\nSuper Interessante: O que são sambaquis?"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Cuauhtémoc",
      "descricao": "Último imperador mexica, que comandou a defesa de Tenochtitlan contra os espanhóis em 1521."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Depois da queda de Tenochtitlan, os espanhóis queimaram os pés do imperador Cuauhtémoc para obrigá-lo a revelar o quê?",
    "resposta": "Onde estava o ouro",
    "distratores": [
      "Os planos de revolta",
      "Onde estavam os ídolos",
      "A rota ao Pacífico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cuauht%C3%A9moc"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cuauht%C3%A9moc",
        "situacao": "ok",
        "texto": "Cuauhtémoc (Nahuatl pronunciation: [kʷaːʍˈtemoːk] , Spanish pronunciation: [kwawˈtemok] ), also known as Cuauhtemotzín, Guatimozín, or Guatémoc, was the Aztec ruler (tlatoani) of Tenochtitlan from 1520 to 1521, and the last Aztec Emperor. The name Cuauhtemōc means \"one who has descended like an eagle\", commonly rendered in English as \"Descending Eagle\", evoking a raptor diving toward its prey.\n[…]\nCuauhtémoc called for reinforcements from the countryside to aid the defense of Tenochtitlán, after eighty days of warfare against the Spanish. Of all the Nahuas, only Tlatelolcas remained loyal, and the surviving Tenochcas looked for refuge in Tlatelolco, where even women took part in the battle. Cuauhtémoc was captured on August 13, 1521, while fleeing Tenochtitlán by crossing Lake Texcoco with his wife, family, and friends.\n[…]\nThere are a number of discrepancies in the various accounts of the event. According to Cortés himself, on 27 February 1525, he learned from a citizen of Tenochtitlan, Mexicalcingo, that Cuauhtémoc, Coanacoch (the ruler of Texcoco), and Tetlepanquetzal, the ruler of Tlacopan, were plotting his death. Cortés interrogated them until each confessed and then had Cuauhtémoc, Tetlepanquetzal, and another lord, Tlacatlec, hanged.\n[…]\nTlacotzin, Cuauhtémoc's cihuacoatl, was appointed his successor as tlatoani. He died the next year before he could return to Tenochtitlan.\n[…]\nTenochtitlan\n[…]\nList of Tenochtitlan rulers\n[…]\nLeón-Portilla, Miguel ed. The Broken Spears: Aztec Account of the Conquest of Mexico. Boston, 1992. Presents Nahuatl texts about Cuauhtémoc's deeds during the siege of Tenochtitlan. ISBN 978-0-8070-5500-7\n[…]\nScholes, France V., and Ralph Roys. The Maya Chontal Indians of Acalan-Tixchel. Washington, D.C., 1948. Includes a unique text in Chontal that tells about the death of Cuauhtémoc.\n[…]\n\"Cuauhtemotzín\" . Appletons' Cyclopædia of American Biography. 1900."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cuauht%C3%A9moc",
        "situacao": "ok",
        "texto": "Cuauhtémoc (1495 — 28 de fevereiro de 1525), também chamado Cuauhtemotzin ou Guatimozin, foi o último Tlatoani (governante) de Tenochtitlán e o último Huey Tlatoani do Império Asteca que não foi empossado e endossado pelos espanhóis. Seu nome pode significar tanto \"ataque da águia\" na língua Nahuatl (cuauhtli significa águia; temoc, declinante), como pode também ser interpretado como \"sol se pondo\n[…]\nCuauhtémoc assumiu o poder como imperador em 1521, sucedendo Cuitláhuac. Ele era primo do falecido Moctezuma II. Sua jovem esposa, que posteriormente ficou conhecida como Isabel Moctezuma, era uma das filhas do imperador Moctezuma. Ele subiu ao trono quando tinha cerca de 25 anos, enquanto Tenochtitlan estava sendo sitiada pelos espanhóis e devastada por uma epidemia de varíola trazida às Américas pelos conquistadores espanhóis.\n[…]\nPara Cortés não era interessante nesse momento a morte de Cuauhtémoc. Preferia usar a autoridade de um tlatoani, para submeter os nativos aos desígnios do imperador Carlos V e aos seus próprios. E fez isso com sucesso, garantindo que com Cuauhtémoc teria a cooperação dos astecas na limpeza e restauração da cidade. Nos quatro anos de administração espanhola que se seguiram, a ganancia de Cortés por ouro o levou a torturar e matar o último tlatoani asteca.\n[…]\nHá uma série de discrepâncias nas diversas versões sobre o evento. Segundo o próprio Cortés, um dia antes da execução, Mexicalcingo habitante de Tenochtitlan afirmara que Cuauhtémoc, Coanacoch (tlatoani de Texcoco) e Tetlepanquetzal (tlatoani de Tlacopan) estavam tramando a sua morte. Cortés os interrogou até que confessassem, e depois enforcou Cuauhtémoc, Tetlepanquetzal, Tlacatlec. Cortés escreveu que fez isso como exemplo para quem conspirasse contra ele novamente.\n[…]\n«Motecuhzoma.de Cuauhtémoc, a águila que descende». -Retrato do Tenochca Tlatoani\n[…]\n«Mexico.udg.mx Arte \"Monumento a Cuauhtémoc: o tormento\"»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Cultura marajoara",
      "descricao": "Sociedade indígena que viveu na ilha de Marajó, no Pará, entre cerca de 400 e 1400, famosa por sua cerâmica pintada."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Os antigos marajoaras erguiam grandes aterros, os tesos, para construir aldeias e cemitérios. Eles serviam para proteger contra o quê?",
    "resposta": "As cheias",
    "distratores": [
      "Ataques inimigos",
      "As onças",
      "O sol forte"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cultura_marajoara",
      "https://en.wikipedia.org/wiki/Marajoara_culture"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cultura_marajoara",
        "situacao": "ok",
        "texto": "Os marajoaras ou cultura do Marajó foram uma sociedade que floresceu na Ilha de Marajó ou Rio Amazonas na Era pré-colombiana. Em uma pesquisa, o arqueólogo Charles Mann sugere datas entre 400 e 1600 para a cultura. Contudo, atividade humana desde 1000 a.C. já tinha sido reportada nesses locais. A cultura parece ter persistido na era colonial. A cultura pré-colombiana do Marajó pode ter desenvolvid\n[…]\nTrabalhos sofisticados em cerâmica, grandes pinturas elaboradas e desenhos com representações de plantas e animais são a descoberta mais impressionante na área e forneceram a primeira evidência de uma sociedade complexa no Marajó. Evidências de construção de montículos (pequenas colinas artificiais) sugerem, ainda, uma área bem povoada. No entanto, a extensão do nível de complexidade e as interações de influências da cultura Marajoara são contestados.\n[…]\nAssim, os grandes montes marajoaras ou tesos não são inteiramente artificiais. Em vez disso, os marajoaras aproveitaram montes naturais preexistentes como superfícies elevadas que servissem às suas comunidades. Esta interpretação sugere menos investimento em trabalho acumulado na construção dos montes.\n[…]\nEles serviram a muitos propósitos, como cemitérios, habitações, defesas e proteção contra inundações sazonais.\n[…]\nEmbora restos de esqueletos não tenham sido analisados por padrões de trauma, eles mostram sinais peculiares de desenvolvimento muscular que sugerem, fortemente, a participação regular na guerra. Os padrões de desenvolvimento muscular são semelhantes aos dos wrestlers modernos. O desenvolvimento muscular semelhante sugere que os marajoaras eram treinados para o combate. Os montes de terra poderia servir claramente para fins defensivos, além de protecção contra as inundações.\n[…]\nMarajoara culture artwork, National Museum of the American Indian\n[…]\nMarajoara.com, Researcher website with publications, artwork"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Marajoara_culture",
        "situacao": "ok",
        "texto": "The Marajoara or Marajó culture was an ancient pre-Cabraline era culture that flourished on Marajó island at the mouth of the Amazon River in northern Brazil. In a survey, Charles C. Mann suggests the culture appeared to flourish between 800 AD and 1400 AD, based on archeological studies. Researchers have documented that there was human activity at these sites as early as 1000 BC. The culture seem\n[…]\nThus, the large Marajoara mounds or tesos are not entirely manmade. Rather, the inhabitants took advantage of the natural, preexisting elevated surfaces and added on top of those to build their earthworks. This interpretation suggests less cumulative labor investment in the construction of the mounds.\n[…]\nEarthen mounds, unlike lithic artifacts, are abundant. They were used for cemetery purposes as well as for habitation, as the low-lying areas are prone to flooding in the rainy season. Mounds may have served a defensive purpose too. Pre-historic peoples of Marajo Island may have also constructed ramps, canals, ponds, and drained fields found near earthworks mounds, but most of the evidence has likely been buried by sediment in seasonal floods.\n[…]\nThe most common motif found in Marajoara iconography involves female imagery such as females as mythical ancestors, creators, cultural heroes, or females portrayed in shamanistic roles and with shamanistic power. These female motifs are typically found on ceramic artifacts, either pottery vessels or statues.\n[…]\nHowever, among the most significant ceramic collections in the region, the Marajó Museum, created in 1972, brings together pieces of everyday use and customs, relating to the civic-religious aspect of civilization. The museum was created to promote and make known to the public the culture and art of an ancient civilization.\n[…]\nMarajoara culture artwork Archived 2015-04-02 at the Wayback Machine, National Museum of the American Indian"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Machu Picchu",
      "descricao": "Cidadela inca do século quinze nos Andes peruanos."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Por que Machu Picchu escapou do saque e da destruição que atingiram outras cidades incas durante a conquista?",
    "resposta": "Espanhóis nunca a encontraram",
    "distratores": [
      "Pacto com Pizarro",
      "Proteção do papa",
      "Muralhas inexpugnáveis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Machu_Picchu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Machu_Picchu",
        "situacao": "ok",
        "texto": "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern  Peru  on a mountain ridge at  2,430 meters (7,970 ft). It is situated in the Machupicchu District of Urubamba Province about 80 kilometers (50 miles) northwest of Cusco, above the Sacred Valley and along the Urubamba River, which forms a deep canyon with a subtropical mountain climate.\n[…]\nInitially disappointed, he documented in his pocket field journal: \"Agustín Lizárraga is discoverer of Machu Picchu and lives at San Miguel Bridge just before passing.\" However, while Bingham initially acknowledged Lizárraga as the discoverer in his early writings and speeches, including Inca Land (1922), he gradually downplayed Lizárraga's role until, in his final version of the story, Lost City of the Incas (1952), Bingham claimed to have found the site himself.\n[…]\nAs was the case with Machu Picchu, the site was so heavily overgrown that Bingham could only note a few of the buildings. In 1964, Gene Savoy further explored the ruins at Espiritu Pampa and revealed the full extent of the site, identifying it as Vilcabamba Viejo, where the Incas fled after the Spanish drove them from Vitcos.\n[…]\nThe section of the mountain where Machu Picchu was built provided various challenges that the Incas solved with local materials. One issue was the seismic activity due to two fault lines, which made mortar and similar building methods nearly useless.\n[…]\nMachu Picchu has appeared in several films, television programmes and music productions. The Paramount Pictures film Secret of the Incas (1954), starring Charlton Heston and Yma Sumac, was filmed on location at Machu Picchu and Cusco, marking the first time a major Hollywood studio shot on site. Werner Herzog's drama Aguirre, the Wrath of God (1972) opens with scenes shot in the Machu Picchu area and on the stone stairway of Huayna Picchu."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Machu_Picchu",
        "situacao": "ok",
        "texto": "Machu Picchu  é uma cidadela inca do século XV localizada na Cordilheira Oriental do sul do Peru, em uma crista montanhosa a 2.430 metros de altura. Está situado no distrito de Machupicchu, na província de Urubamba, cerca de 80 quilômetros a noroeste de Cusco, acima do Vale Sagrado e ao longo do rio Urubamba, que forma um cânion profundo com um clima subtropical de montanha.\n[…]\nFrequentemente chamada de \"Cidade Perdida dos Incas\", Machu Picchu é um dos símbolos mais icônicos da civilização inca e um importante sítio arqueológico nas Américas. Estima-se que tenha sido construída por volta de 1450, e acredita-se que tenha servido como propriedade do imperador inca Pachacuti, embora não existam registros escritos contemporâneos para confirmar isso. O sítio foi abandonado aproximadamente um século depois, provavelmente durante a conquista espanhola.\n[…]\nEm 1911, o historiador e explorador americano Hiram Bingham viajou pela região em busca da capital perdida do Estado neoinca (posteriormente identificado como Vilcabamba), fundado por Manco Inca após a conquista espanhola. Eles foram levados a Machu Picchu por um aldeão, Melchor Arteaga. Bingham encontrou o sobrenome de Lizárraga e a data de 1902 no templo.\n[…]\nInicialmente desapontado, ele registrou em seu diário de campo: \"Agustín Lizárraga é o descobridor de Machu Picchu e vive na Ponte de San Miguel, pouco antes de passar por ela.\" No entanto, embora Bingham tenha inicialmente reconhecido Lizárraga como o descobridor em seus primeiros escritos e discursos, incluindo Terra Inca (1922), ele gradualmente minimizou o papel de Lizárraga até que, em sua versão final da história, Cidade Perdida dos Incas (1952), Bingham afirmou ter encontrado o sítio ele mesmo.\n[…]\nVale Sagrado dos Incas\n[…]\n«Imagens panorâmicas da cidade inca, em vistas de 360 graus - MachuPicchu360.com» (em espanhol) .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Milho",
      "descricao": "Gramínea alta Zea mays, domesticada no México, cultivada pelos grãos."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Os povos mesoamericanos cozinhavam o milho com cal, a nixtamalização. Que doença causada por falta de vitamina essa prática ajudava a evitar?",
    "resposta": "Pelagra",
    "distratores": [
      "Escorbuto",
      "Beribéri",
      "Raquitismo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nixtamalization"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nixtamalization",
        "situacao": "ok",
        "texto": "Nixtamalization ( nish-tə-mə-lih-ZAY-shən) is a process for the preparation of maize (corn), or other grain, in which the grain is soaked and cooked in an alkaline solution, usually limewater (but sometimes aqueous alkali metal carbonates), washed, and then hulled. The term can also refer to the removal via an alkali process of the pericarp from other grains such as sorghum.\n[…]\nThe process of nixtamalization was first developed in Mesoamerica, where maize was originally cultivated. The earliest evidence is found in Guatemala's southern coast, with equipment dating from 1200 to 1500 BCE. How nixtamalization was discovered is not currently known with certainty, but it may have been through the use of hot cooking stones to boil corn in early cultures which did not have cooking vessels robust enough to put directly on fire or coals.\n[…]\nThe nixtamalization process was very important in the early Mesoamerican diet, as there is very little niacin in corn and the tryptophan within is unavailable without processing. A population that depends on untreated maize as a staple food risks malnourishment and is more likely to develop deficiency diseases such as pellagra, niacin deficiency, or kwashiorkor, the absence of certain amino acids that maize is deficient in.\n[…]\nThe process has not substantially declined in usage in the Mesoamerican region, though there has been a decline in North America. Many Native North American tribes, such as the Huron, no longer use the process. In some Mesoamerican and North American regions, dishes are still made from nixtamalized maize prepared by traditional techniques. The Hopi produce sodium carbonate from ashes of various native plants and trees.\n[…]\nNixtamalization significantly deactivates mycotoxins which are putative carcinogens. Aflatoxins are reduced by 90–94%. Fumonisins are reduced by 82%."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nixtamaliza%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "Nixtamalização é um processo de cozimento e maceração do milho maduro em solução alcalina de cal (CaO) em 1,3% de peso. Esse processo facilita a moagem, melhora o sabor, aroma e valor nutritivo.\n[…]\nEstes benefícios fazem da nixtamalização uma etapa preliminar crucial para o processamento final do milho em produtos de alimento e o processo é empregado usando métodos tradicionais e industriais na produção de tortilla, de tamales, de microplaquetas de milho, tacos e de muitos outros produtos.\n[…]\nMesoamérica\n[…]\nO processo de nixtamalização foi desenvolvido na Mesoamérica, nos locais do centro de origem da cultura do milho. A evidência mais antiga de nixtamalização é encontrada na costa sul da Guatemala, com equipamentos datados de 1200 a 1500 aC. Provavelmente a nixtamalização foi um efeito secundário da utilização de pedras calcárias quentes para ferver a água contendo espigas de milho.\n[…]\nO processo original começa pela obtenção duma solução de soda, usando um pedaço de tronco de árvore oco onde se colocam cinzas, de preferência do carvalho-verde, sobre as quais se despeja água; o líquido resultante é recebido num balde que se coloca debaixo da extremidade do tronco; este líquido pode ser deitado de novo sobre as cinzas, para obter uma solução mais forte. Esta soda natural é depois utilizada para nixtamalizar milho, ou para fabricar sabão.\n[…]\nPara fazer  a massa de milho, colocam-se grãos de milho secos na solução de soda e vai-se mexendo até que a ponta do grão saia facilmente; este processo pode levar dois dias. Após este período, o milho é lavado e esfregado várias vezes em água limpa, para retirar a pele e a soda.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Sacsayhuamán",
      "descricao": "Cidadela inca de muralhas de pedra seca nos arredores de Cusco, no Peru."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Depois da conquista, os espanhóis desmontaram boa parte das muralhas incas de Sacsayhuamán. Para que usaram as pedras?",
    "resposta": "Construir edifícios de Cusco",
    "distratores": [
      "Pavimentar a estrada a Lima",
      "Erguer um porto",
      "Fazer balas de canhão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sacsayhuam%C3%A1n"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sacsayhuam%C3%A1n",
        "situacao": "ok",
        "texto": "Sacsayhuamán ( SACK-sy-wuh-MəN; Spanish pronunciation: [saksajwaˈman]) or Saksaywaman (from Quechua Saksay waman pukara, pronounced [ˈsaksaj ˈwaman], lit. 'fortress of the royal falcon or hawk') is a citadel on the northern outskirts of the city of Cusco, Peru, the historic capital of the Inca Empire. The site is an important example of Inca architecture and sits at an altitude of 3,701 metres (12\n[…]\nIn 1983, Cusco and Sacsayhuamán together were designated as sites on the UNESCO World Heritage List, for international recognition and protection. The archeological site is now a tourist destination.\n[…]\nDuring the 15th century, the Imperial Inca expanded on this settlement, building dry stone walls constructed of huge stones. Spanish Chronicler Pedro Cieza de León wrote in 1553:\n[…]\nThe best-known zone of Sacsayhuamán includes its great plaza and its adjacent three massive terrace walls. The stones used in the construction of these terraces are among the largest used in any building in pre-Hispanic America. They display a precision of cutting and fitting that is unmatched in the Americas. The stones are so closely spaced that a single piece of paper will not fit between many of the stones.\n[…]\nFollowing the siege of Cusco, the Spaniards began to use Sacsayhuamán as a source of stones for building Spanish Cuzco; within a few years, they had taken apart and demolished much of the complex. The site was destroyed block by block to salvage materials with which to build the new Spanish governmental and religious buildings of the colonial city, as well as the houses of the wealthiest Spaniards. In the words of Garcilaso de la Vega (1966:471 [1609: Part 1, Book. Bk. 7, Ch. 29]):\n[…]\nSome people from Cusco use the large field within the walls of the complex for jogging, tai chi, and other athletic activities.\n[…]\nSiege of Cusco\n[…]\nWorld's Greatest Riddles Mystery of Sacsayhuamán"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sacsayhuaman",
        "situacao": "ok",
        "texto": "Sacsayhuaman ou Sacsahuamán  é uma fortaleza inca, hoje em ruínas, localizada dois quilômetros ao norte da cidade do Cusco, no Peru.\n[…]\nAtualmente se pode apreciar somente 20 porcento do que foi o conjunto arqueológico, já que na época colonial os espanhóis destruíram seus muros para construir casas e igrejas em Cusco.\n[…]\nA construção em si é peculiar, já que algumas das pedras que ali se encontram são gigantes e fazem que se pergunte como foi possível transportá-las. As pedras foram encaixadas com uma precisão quase inimaginável. É inexplicável decifrar como os incas conseguiram cortar as pedras com tal precisão que nem mesmo uma lâmina de uma faca se pode colocar entre elas. O complexo também conta com uma espécie de tobogã grande de pedras por onde o visitante pode deslizar.\n[…]\nA suavidade da pedra ressalta nestas formações. Há figuras desenhadas nas pedras e rochas, entradas a túneis subterrâneos, anfiteatros, construções de caráter ritual, provavelmente relacionadas com o culto da água. Este local desempenhou um importante papel nas atividades rituais incas.\n[…]\nNa atualidade restam vestígios das três muralhas escalonadas edificadas de pedras de origem sedimentária.\n[…]\nSacsaihuaman está dividida em diferentes setores: Sacsahuaman, Rodadero, Trono do Inca, Warmi K’ajchana, Banho do Inca, Anfiteatros, Chincana, Bases de Torrões, entre outros.\n[…]\nPara chegar ao lugar deve-se utilizar a estrada que une Cuzco com o Vale Sagrado dos Incas. Também se pode acessar por uma via para pedestres a partir de Cusco.\n[…]\nVale Sagrado dos Incas\n[…]\nSacsahuaman and Cusco\n[…]\nLivro: A Verdade Sobre Os Incas\n[…]\nOutras Ruinas Incas Perto de Cusco",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Resgate de Atahualpa",
      "descricao": "Grande quantidade de ouro e prata reunida pelos incas em Cajamarca, em 1532 e 1533, para libertar Atahualpa, preso por Pizarro."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Preso por Pizarro, Atahualpa prometeu encher uma sala uma vez de ouro e quantas vezes de prata?",
    "resposta": "Duas",
    "distratores": [
      "Três",
      "Quatro",
      "Dez"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Atahualpa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atahualpa",
        "situacao": "ok",
        "texto": "Atawallpa ( ), also Atahualpa or Ataw Wallpa (Classical Quechua: Ataw Wallpa, pronounced [ˈataw ˈwaʎpa]) (c. 1502 – 29 August 1533), whose regnal name was Caccha Pachacuti Inca Yupanqui Inca (from the caccha idol and to honour the emperor Pachacuti), was the last effective Inca emperor, reigning from April 1532 until his capture and execution in July-August of the following year, as part of the Sp\n[…]\nAround the same time as Atawallpa's victory, a group of Spanish conquistadors, led by Francisco Pizarro, arrived in the region. In November 1532, they captured Atahualpa during an ambush at Cajamarca. In captivity, Atahualpa gave a ransom in exchange for a promise of release and arranged for the execution of Huáscar. After receiving the ransom, the Spanish accused Atahualpa of treason, conspiracy against the Spanish Crown, and the murder of Huáscar.\n[…]\nPizarro led the charge on Atawallpa but captured him only after killing all those carrying him and turning over his litter. No Spanish soldiers were killed.\n[…]\nIn Quito, the most important football stadium is named Estadio Atahualpa after Atawallpa.\n[…]\nAtawallpa Inca's conflict with Pizarro was dramatised by Peter Shaffer in his play The Royal Hunt of the Sun, first staged by the National Theatre in 1964 at the Chichester Festival, then in London at the Old Vic. The role of Atawallpa was played by Robert Stephens and by David Carradine, who received a Theatre World Award in the 1965 Broadway production. Christopher Plummer portrayed Atawallpa in the 1969 movie version of the play.\n[…]\nThe closing track of Tyrannosaurus Rex's debut album, My People Were Fair and Had Sky in Their Hair... But Now They're Content to Wear Stars on Their Brows, was entitled \"Frowning Atahuallpa (My Inca Love)\".\n[…]\n[1] Atahualpa – World History Encyclopedia\n[…]\n\"Atahualpa\" . Appletons' Cyclopædia of American Biography. 1900. pp. 113–114."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atahualpa",
        "situacao": "ok",
        "texto": "Atahualpa ou Atahuallpa (quéchua Ataw Wallpa, 30 de março de 1502 – Cajamarca, 26 de julho de 1533) foi o décimo terceiro e último Sapa Inca (imperador inca) de Tahuantinsuyu, como era chamado o Império Inca. Foi o governante de Quito por cinco anos antes de conquistar o Império Inca de seu irmão Huáscar. Depois de derrotar seu irmão, Atahualpa tornou-se muito brevemente o último Sapa Inca (impera\n[…]\nAtahualpa herdou o Reino de Quito de seu pai, o Sapa Inca Huayna Capac em 1525. Antes que Huayna morresse, fez um testamento verbal onde dizia que pretendia dividir seu império em duas partes. Atahualpa se tornaria rei na seção norte do Império Inca e seu meio-irmão mais Huáscar, receberia a seção do sul como Sapa Inca. Huayna morreu de uma doença infeciosa (possivelmente varíola).\n[…]\nO episódio ocorreu quando o soberano inca, depois de aceitar um convite de Pizarro para jantar e conversar, veio à praça principal de Cajamarca trazendo apenas um pequeno contingente de guardas de honra. Quando Atahualpa chegou, a praça aparentava estar vazia, pois os homens de Pizarro aguardavam ocultos.\n[…]\nEm troca da liberdade, Atahualpa concordou em encher de peças de ouro o grande aposento que ocupava, e a dar ao espanhol o dobro daquela quantia, em prata.\n[…]\nEmbora aturdido com o resgate, Pizarro jamais teve intenção de libertar Atahualpa, que pretendia mantê-lo como refém para evitar uma escalada da violência, já que o general inca Rumiñawi ainda estava no comando de grande contingente de guerreiros incas.\n[…]\nComo Huascar ainda estava vivo e poderia fazer um acordo com Pizarro, Atahualpa determinou a execução de Huascar, demonstrando assim que ainda mantinha autoridade. Este fato determinou a Pizarro que se apressasse a executá-lo.\n[…]\nApós a morte de Atahualpa, Pizarro colocou um irmão de Atahualpa, Túpac Hualpa como governador de Cusco que foi envenenado e logo em seguida outro irmão Manco Yupanqui.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Templo Mayor",
      "descricao": "Principal templo dos mexicas em Tenochtitlan, cujas ruínas ficam no centro da Cidade do México."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O Templo Mayor foi ampliado várias vezes, cada nova pirâmide cobrindo a anterior. Quantas etapas principais de construção os arqueólogos identificaram?",
    "resposta": "Sete",
    "distratores": [
      "Três",
      "Doze",
      "Vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Templo_Mayor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Templo_Mayor",
        "situacao": "ok",
        "texto": "The Templo Mayor (from Spanish: 'Main Temple') was the main temple of the Mexica people in their capital city of Tenōchtitlan, which is now Mexico City. Erected in its final form in the late Postclassic period, the temple was called Huēyi Teōcalli [we:ˈi teoːˈkalːi] in the Nahuatl language, meaning 'great church' or 'great house of god', and understood to be the center of the universe.\n[…]\nHe states that the \"principal center, or navel, where the horizontal and vertical planes intersect, that is, the point from which the heavenly or upper plane and the plane of the Underworld begin and the four directions of the universe originate, is the Templo Mayor of Tenochtitlan.\" Matos Moctezuma supports his supposition by claiming that the temple acts as an embodiment of a living myth where \"all sacred power is concentrated and where all the levels intersect.\" Said myth is the birth and struggle between Huitzilopochtli and Coyolxauhqui.\n[…]\nThe ball field, called the tlachtli or teutlachtli, was similar to many sacred ball fields in Mesoamerica. Games were played barefoot, and players used their hips to move a heavy ball to stone rings. The field was located west of the Templo Mayor, near the twin staircases and oriented east–west. Next to this ball field was the \"huey tzompanti\" where the skulls of sacrifice victims were kept after being covered in stucco and decorated.\n[…]\nRoom 6 is dedicated to the flora and fauna of Mesoamerica at this time, as most contained divine aspects for the Aztecs. Also many of the offerings found at the Templo Mayor were or were made from various plants and animals. Related to Room 6, Room 7 contains exhibits of the agricultural technology of the time, especially in the growing of corn and the construction of chinampas, the so-called \"floating gardens\".\n[…]\nTemplo Mayor entry on The Visual History Project\n[…]\nTourist visit to Templo Mayor"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Templo_Mayor",
        "situacao": "ok",
        "texto": "O Templo Mayor era um dos principais templos dos astecas na sua capital Tenochtitlan, atual Cidade do México. O seu estilo arquitetónico pertence ao período pós-clássico mesoamericano. O templo era chamado huey teocalli na língua nauatle e estava dedicado a dois deuses em simultâneo, Huitzilopochtli, deus da guerra e Tlaloc, deus da chuva e da agricultura, cada um deles com um santuário no topo da\n[…]\nMedindo aproximadamente 100 por 80 metros na base, o templo dominava um Recinto Sagrado. A construção do primeiro templo teve início algum tempo depois de 1325, tendo sido reconstruído posteriormente por seis vezes. O templo foi destruído pelos espanhóis em 1521. O sítio arqueológico dos nossos dias situa-se imediatamente a nordeste do Zócalo, ou praça principal da Cidade México, na esquina entre as ruas Seminario e Justo Sierra.\n[…]\nApós a destruição de Tenochtitlan, o Templo Maior, tal como a maior parte da cidade, foi desmantelado e depois coberto pela nova cidade colonial espanhola. A localização exata do templo foi esquecida, embora no século XX os académicos tivessem já uma boa ideia sobre onde o procurar. Tal conhecimento baseava-se no trabalho de arqueologia efetuado no final do século XIX e na primeira metade do século XX.\n[…]\nEntre 1978 e 1982, especialistas sob a direção do arqueólogo Eduardo Matos Moctezuma trabalharam no projeto de escavação do templo. As escavações iniciais permitiram verificar que muitos dos artefatos se encontravam em condição suficientemente boa para serem estudados. Os vários esforços coalesceram no Projeto do Templo Maior, o qual foi autorizado por decreto presidencial.\n[…]\nEste museu é o resultado do trabalho efetuado desde o início da década de 1980 para resgatar, conservar e estudar o Templo Maior, o seu Recinto Sagrado e todos os objetos com ele associados e existe para tornar todas as descobertas acessíveis ao público.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Pakal",
      "descricao": "Rei maia de Palenque no século sete, sepultado no Templo das Inscrições."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Pakal, rei maia de Palenque, reinou por quase setenta anos. Com que idade ele subiu ao trono?",
    "resposta": "Doze anos",
    "distratores": [
      "Seis anos",
      "Dezoito anos",
      "Trinta anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/K%27inich_Janaab%27_Pakal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/K%27inich_Janaab%27_Pakal",
        "situacao": "ok",
        "texto": "Kʼinich Janaab Pakal I (Mayan pronunciation: [kʼihniʧ χanaːɓ pakal]), also known as Pacal or Pacal the Great (24 March 603 – 29 August 683), was ajaw of the Maya city-state of Palenque in the Late Classic period of pre-Columbian Mesoamerican chronology. He acceded to the throne in July 615 and ruled until his death.\n[…]\nHowever, although his grandfather was a personage of ajaw ranking, he does not himself appear to have been a king. When instead the name Pakal I is used, this serves to distinguish him from two later known successors to the American rulership, Kʼinich Janaab Pakal II (ruled c. 742) and Janaab Pakal III, the last-known Palenque ruler (ruled c. 799).\n[…]\nKʼinich Janaab Pakal was a Palenque native, born on 9.8.9.13.0 (March 603) to Lady Sak Kʼukʼ of the ruling Palenque dynasty and her husband Kʼan Moʼ Hix.\n[…]\nPakal died on 9.12.11.5.18 (August 683), at the age of 80, having ruled Palenque for 68 years and 33 days.\n[…]\nAfter his death, Pakal was deified as one of the patron gods of Palenque. He was survived at least by his two sons Kan Bahlam and Kʼan Joy Chitam—each of whom subsequently also became Palenque's kʼuhul ajaw in his own right—and two grandsons, Ahkal Moʼ Nahb (successor of Kʼinich Kʼan Joy Chitam II as kʼuhul ajaw of Palenque) and Janaab Ajaw, a royal official inaugurated under the reign of Kʼinich Kʼan Joy Chitam II.\n[…]\nEpigraphers, on the other hand, insisted that allowing for such possibilities would go against everything else that is known about the Maya calendar and Maya written history, and asserted that the texts clearly state that it is indeed Kʼinich Janaabʼ Pakal entombed within, and that he did in fact die at the advanced age of 80, after reigning for 68 years.\n[…]\nMesoweb's description of the discovery of Pakal's tomb (via Archive.org)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pacal%2C_o_Grande",
        "situacao": "ok",
        "texto": "K'inich J'anaab Pakal, também conhecido como Pacal II ou Pacal, o Grande (Palenque, 23 de março de 603 d.C. – Palenque, 28 de agosto de 683 d.C.) foi o governante do estado maia de B'aakal cuja sede era a cidade de Palenque. Pacal II é o mais conhecido dos senhores de Palenque em razão do desenvolvimento e sofisticação que B'aakal atingiu durante o seu governo, bem como pela sua tumba, considerada\n[…]\nPassou-se a usar então os nomes de  K'inich Janaab' Pakal I ou Pakal I, já que ele foi realmente o primeiro governante que utilizou este nome em Palenque. Existem dois governantes que anos depois também utilizaram o mesmo nome: Upakal K'inich Janaab' Pakal (K'inich Janaab' Pakal II) e Wak Kimi Janaab' Pakal (Janaab' Pakal III). Para evitar confundir a Pakal “o Grande” com seu avô, alguns estudiosos da cultura maia têm optado por referir ao avô então como Pakal “o Velho\".\n[…]\nComo Pakal tão só contava com doze anos de idade, considera-se que sua mãe foi a verdadeira depositaria do poder dinástico durante vários anos.\n[…]\nPassaram mais de mil duzentos anos para que fosse descoberta a tumba de Pakal. Em 1949, o arqueólogo Alberto Ruz Lhuillier encontrou numa lousa da parte superior do Templo das Inscrições doze buracos em forma simétrica que pareciam ter sido feitos para suportar o trono do governante. Ao perceber que havia um espaço oco abaixo da lousa, começou a escavar e encontrou os degraus da escada interna da pirâmide, em um caminho totalmente obstruído.\n[…]\nAs epígrafes, por outro lado, insistiram que permitir tais possibilidades iria contra tudo o mais que se sabe sobre o calendário maia e a história escrita maia, e afirmaram que os textos afirmam claramente que é de fato K'inich Janaab' Pakal sepultado lá dentro, e que ele de fato morreu com a idade avançada de 80 anos, depois de reinar por 68 anos.\n[…]\nMedia relacionados com Pacal, o Grande no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Atlantes de Tula",
      "descricao": "Colunas de pedra em forma de guerreiros no alto de uma pirâmide de Tula, antiga capital tolteca no estado mexicano de Hidalgo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No alto de uma pirâmide de Tula, quantos guerreiros de pedra, os Atlantes, sustentavam o teto do antigo templo tolteca?",
    "resposta": "Quatro",
    "distratores": [
      "Dois",
      "Seis",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tula_(Mesoamerican_site)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tula_(Mesoamerican_site)",
        "situacao": "ok",
        "texto": "Tula (Nahuatl: Tollan Xicocotitlan Otomi: Mämeni) is a Mesoamerican archaeological site, which was an important regional center that reached its height as the capital of the Toltec Empire between the fall of Teotihuacan and the rise of Tenochtitlan. It has not been well studied in comparison to these other two sites, and disputes remain as to its political system, area of influence and its relatio\n[…]\nThe inhabitants of Tula were called Toltecs, but that term was later broadened to mean an urban person, artisan or skilled worker. This was due to the high respect in which the indigenous peoples in the Valley of Mexico held the ancient civilization before the Spanish conquest of the Aztec Empire.\n[…]\nThe site was determined to be that of Tollan and the Toltecs after ethnographic studies and archeological work from the 1950s to the 1970s. However, Tula is not well understood, especially in its relation to its predecessor, Teotihuacan, and little has been published. No detailed archeological map of the city exists.\n[…]\nThe history of the city remained important up through the Aztec Empire and is reported in the codices written after the Spanish conquest. However, most of these stories are heavy in myth. These tend to start with the Toltecs and the city of Tula, followed by the migration of the Mexica to the Valley of Mexico. The stories either portray Tula as a kind of paradise in which the inhabitants master the sciences and arts or a city filled with strife headed for a downfall.\n[…]\nMuch of Toltec history was lost when Itzcoatl burned the history books after founding the Aztec Empire. The planning of Tula was adopted by some Aztec city-state rulers for their urban centers.\n[…]\nToltec"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tula_Xicocotitlan",
        "situacao": "ok",
        "texto": "Tula (do Nahuatl \"Tollan\", lugar dos tules (uma árvore do género Scirpus) também conhecida como Tollan-Xicocotitla) é uma cidade com 10000 habitantes, parte da qual se encontra sobre a Tula pré-hispânica, situada no municipio de Tula de Allende no estado de Hidalgo, México, a 70 km da capital do país.\n[…]\nGeralmente considerada como tendo sido a capital dos Toltecas, cerca do ano 980, tendo sido destruída no ano 1168 ou 1179. Foi a maior cidade do México nos séculos IX e X, cobrindo uma área de 12 km2, com uma população de cerca de 30000 habitantes, possivelmente bastante mais.\n[…]\nOs primeiros habitantes (provavelmente Chichimecas) chegaram a Tula no século VIII. Mais tarde chegaram os Nonoalcas, um povo de língua Nahuatl, que adorava o deus Quetzalcóatl.\n[…]\nPor fim os seguidores do \"deus nocturno\" expulsaram os toltecas que professavam a sua crença na serpente emplumada, tendo estes sido obrigados a migrar para o sul em direcção ao Golfo do México até chegarem ao Iucatão. Ali chegados, fundaram cidades como Chichén Itzá, nome alusivo à fusão dos Itzaes com os Chichimecas, sendo estes últimos a origem do povo Tolteca.\n[…]\nEm termos arquitectónicos distingue-se pelas pirâmides de terraços, edifícios colunados e esculturas em relevo, incluindo os característicos chacmools, figuras deitadas que terão sido representações do deus da chuva. Existem dois campos de bola e parte da arquitectura tem aspectos semelhantes à encontrada em Chichén Itzá. Foi saqueada pelos astecas, tendo sido removida grande parte das esculturas e outras obras de arte.\n[…]\nTula de Allende",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Tzolkin",
      "descricao": "Calendário sagrado maia, usado em rituais e adivinhação, que combinava vinte nomes de dias com treze números."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O calendário sagrado maia, de 260 dias, e o ano solar, de 365, só voltavam a começar no mesmo dia depois de quantos anos?",
    "resposta": "Cinquenta e dois",
    "distratores": [
      "Vinte",
      "Cem",
      "Quatrocentos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Calendar_round"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Calendar_round",
        "situacao": "ok",
        "texto": "The Maya calendar is a system of calendars used in pre-Columbian Mesoamerica and in many modern communities in the Guatemalan highlands, Veracruz, Oaxaca and Chiapas, Mexico.\n[…]\nThe Maya calendar consists of several  cycles or counts of different lengths. The 260-day count is known to scholars as the Tzolkin, or Tzolkʼin. The Tzolkin was combined with a 365-day vague solar year known as the Haabʼ to form a synchronized cycle lasting for 52 Haabʼ called the Calendar Round. The Calendar Round is still in use by many groups in the Guatemalan highlands.\n[…]\nThe tzolkʼin (in modern Maya orthography; also commonly written tzolkin) is the name commonly employed by Mayanist researchers for the Maya Sacred Round or 260-day calendar. The word tzolkʼin is a neologism coined in Yucatec Maya, to mean \"count of days\" (Coe 1992). The various names of this calendar as used by precolumbian Maya people are still debated by scholars. The Aztec calendar equivalent was called Tōnalpōhualli, in the Nahuatl language.\n[…]\nThe tzolkʼin calendar combines twenty day names with the thirteen day numbers to produce 260 unique days. It is used to determine the time of religious and ceremonial events and for divination. Each successive day is numbered from 1 up to 13 and then starting again at 1. Separately from this, every day is given a name in sequence from a list of 20 day names:\n[…]\nArithmetically, the duration of the Calendar Round is the least common multiple of 260 and 365; 18,980 is 73 × 260 Tzolkʼin days and 52 × 365 Haabʼ days.\n[…]\nAztec calendar\n[…]\ndate converter at FAMSI This converter uses the Julian/Gregorian calendar and includes the 819 day cycle and lunar age.\n[…]\nInteractive Maya Calendars"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Calend%C3%A1rio_maia",
        "situacao": "ok",
        "texto": "O calendário maia é um sistema de calendários e almanaques distintos, usados pela civilização maia da Mesoamérica pré-colombiana, e por algumas comunidades maias modernas dos planaltos da Guatemala.\n[…]\nO tzolkʼin é o nome comumente empregado pelos estudiosos da civilização maia para o Ciclo Sagrado Maia ou calendário de 260 dias. A palavra tzolkʼin é um neologismo cunhado na língua maia iucateque, para significar \"contagem de dias\". Os vários nomes deste calendário usados pelos povos maias pré-colombianos ainda são debatidos pelos estudiosos. O calendário asteca equivalente foi chamado tonalpohualli, na língua náuatle.\n[…]\nO calendário tzolkʼin combina vinte nomes de dias com os treze números do ciclo trezena para produzir 260 dias únicos. Ele é usado para determinar o momento de eventos religiosos e cerimoniais e para divinação. Cada dia sucessivo é numerado de 1 a 13 e então começa novamente em 1. Além disso, a cada dia é dado um nome uma lista sequencial de 20 nomes de dias:\n[…]\nA origem exata do tzolkʼin não é conhecida, mas existem várias teorias. Uma teoria é que o calendário vem de operações matemáticas baseadas nos números 13 e 20, que eram números importantes para os maias. Os dois números multiplicados um pelo outro dão 260. Outra teoria é que o período de 260 dias vem da duração da gestação humana.\n[…]\nEstes dois calendários eram baseados em 260 e 365 dias respectivamente, o ciclo completo se repete exatamente a cada 52 anos Haabʼ. Este período era conhecido como um Ciclo de Calendário. O fim do Ciclo de Calendário era um período de tensão e má sorte entre os maias, eles esperavam para ver se os deuses concederiam outro ciclo de 52 anos.\n[…]\nNumeração maia\n[…]\nAstrologia maia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Confederação Iroquesa",
      "descricao": "Aliança de nações indígenas do nordeste da América do Norte, também chamada Haudenosaunee."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Haudenosaunee, o nome que os iroqueses dão a si mesmos, significa povo de que tipo de moradia?",
    "resposta": "Casa comprida",
    "distratores": [
      "Tenda cônica",
      "Casa de pedra",
      "Casa sobre palafitas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Iroquois"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iroquois",
        "situacao": "ok",
        "texto": "The Haudenosaunee Confederacy ( HOH-din-oh-SHOH-nee; lit. 'those who build the longhouse'), also known as the Iroquois, is a confederacy of Iroquoian Indigenous peoples in northeast North America. They have also been called the Six Nations (Five Nations before 1722). The Haudenosaunee originally comprised (from east to west) the Mohawk, Oneida, Onondaga, Cayuga, and Seneca peoples. After 1722, the\n[…]\nAfterwards, it would be taken down and thrown in a fire with tobacco while speeches were read. The White Dog Sacrifice may have had varying religious significance among the nations of the Haudenosaunee, with the Seneca viewing the ritual as sending the dog to the Great Creator as a messenger.\n[…]\nThe Onondaga are represented by an eastern white pine which represents the Tree of Peace, an Eastern White Pine, the needles of which are clustered in groups of five. Traditionally the Onondaga are the peace keepers of the confederacy. The placement of the nations on the belt represents the actual geographical distribution of the six nations over their shared territory, with the Seneca in the far west and the Mohawk in the far east of Haudenosaunee territory.\n[…]\nConsensus has not been reached on how influential the Haudenosaunee model was to the development of U.S. documents such as the Articles of Confederation and the U.S. Constitution. The influence thesis has been discussed by historians such as Donald Grinde and Bruce Johansen. In 1987, Cornell University held a conference on the link between the Haudenosaunee's government and the U.S. Constitution. In 1988, the U.S.\n[…]\nThe Grand Council of the Haudenosaunee Confederacy declared war on Germany in 1917 during World War I and again in 1942 in World War II.\n[…]\nSeveral communities exist of people descended from the nations of the Haudenosaunee Confederacy.\n[…]\nHaudenosaunee Confederacy, official website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Iroqueses",
        "situacao": "ok",
        "texto": "Os iroqueses (em inglês e francês: Iroquois, pronunciado irocuá) ou Haudenosaunee são um grupo nativo norte-americano que vive em torno da região dos Grandes Lagos, primariamente no sul de Ontário, uma província do Canadá, e no nordeste dos Estados Unidos.\n[…]\nOs iroqueses de antigamente eram primariamente nômades. Até o século XVII, formavam o que é atualmente chamado de nação iroquesa. Atualmente, esta nação indígena é composta pelos povos seneca, cayuga, onondaga, oneida, mohawk e tuscarora, formando uma confederação distribuída entre o Canadá e os Estados Unidos (principalmente no Estado de Nova Iorque e na província de Quebec).\n[…]\nNesse sentido, Lafitau enaltecia os iroqueses, ao dizer que as construções náuticas desses povos eram parecidas, mas também os denegria, afirmando que a brutalidade dos heróis de Homero não se distinguia da ferocidade dos iroqueses, ferocidade esta que ele considerava como sendo inata. Mesmo assim, a importância se deu pelo fato de que Lafitau deixou os nativos mais humanos, diferentemente de pensadores anteriores (como Mandeville) que assemelhavam os nativos a monstros.\n[…]\nA Economia dos iroqueses se focaliza na produção comunal e ao sistema combinado de horticultura e de caçador-recolector. As tribos da Confederação Iroquesa e outras do norte do continente americano que compartilhavam idioma (iroqués), como o povo hurón, viviam na região que hoje é o Estado de Nova York e a Região dos Grandes Lagos. A Confederação Iroquesa compunha-se de seis tribos dantes da colonização européia da América.\n[…]\nMesmo não sendo iroquês, o povo hurón entrava no mesmo grupo linguístico e compartilhava economia com os iroqueses.\n[…]\nConfederação Iroquesa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Pachacútec",
      "descricao": "Imperador inca do século quinze que transformou o reino de Cusco no grande Império Inca."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Que significado em quíchua tem o nome de Pachacútec, o imperador que expandiu o reino inca no século quinze?",
    "resposta": "O que transforma o mundo",
    "distratores": [
      "Filho do Sol",
      "Senhor dos Andes",
      "Guerreiro do trovão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pachacuti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pachacuti",
        "situacao": "ok",
        "texto": "Pachacuti Inca Yupanqui, also called Pachacútec (Quechua: Pachakutiy Inka Yupanki, pronounced [ˈpatʃa ˈkuti ˈiŋka juˈpaŋki]), was the ninth Sapa Inca of the Chiefdom of Cusco, which he transformed into the Inca Empire (Tawantinsuyu). Most archaeologists now believe that the famous Inca site of Machu Picchu was built as an estate for Pachacuti.\n[…]\nYupanqui was tipped off to the plot, however, and the assassination failed. Viracocha went into exile while Inca Yupanqui returned in triumph to Cusco, and, following a short civil war during which the co-ruler, Urco, died, was crowned Sapa Inca of Cusco, and renamed himself \"Pachacuti\" (meaning \"Earth Shaker\").\n[…]\nPachacuti initially nominated his son Amaru Topa Inca to be co-ruler and heir to the throne. However, due to the lack of military talent found in the joint prince, Pachacuti changed his decision and instead decided to name another of his sons, Tupac Inca Yupanqui, who in turn had a reputation as a talented general, as his co-ruler and successor.\n[…]\nIn his last years, the Inca government might have been de facto in the hands of his \"helper\" (Quechua: yanapac), \"companion\" (yananti), or \"brother\" (huauque) in the semi-diarchy of the Inca, by the name of Yamqui Yupanqui. At the death of Pachacuti, instead of confirming his own power, Yamqui Yupanqui rather confirmed Tupac Inca Yupanqui as successor to his father.\n[…]\nPachacuti, considered the son of Inca Viracocha and Mama Runtu, was, according to most traditional lists of Inca rulers, the fourth ruler of a lineage from the Hanan moiety of Cusco, whose rulers are collectively called the Hanan dynasty. He had several sons, among which are Tupac Ayar Manco, Apu Paucar, Amaru Topa or Amaru Yupanqui, Yamqui Yupanqui, Auqui Yupanqui, Tilca Yupanqui, and Tupac Inca Yupanqui.\n[…]\nColla–Inca War\n[…]\nMedia related to Pachacútec at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pachacuti",
        "situacao": "ok",
        "texto": "Pachacuti, (em espanhol Pachacútec, do quíchua Pacha Kutiq, \"O que muda a Terra\", ou \"Reformador da Terra\"; Cusco, 1408 - 1474) foi o nono Sapa Inca e o primeiro Inca do Tawantinsuyu. Ele foi sucedido por seu filho Túpac Yupanqui.\n[…]\nFoi o quarto governante da dinastia Hanan Cusco, e foi o mais importante dos governantes cusquenhos e o fundador do Império inca como tal. Ademais, deve-se esclarecer que foi o personagem mais notável do novo mundo pré-colombiano: arquiteto, visionário, grande político, administrador e guerreiro feroz.\n[…]\nEstando acéfalo o reino, Cusi Yupanqui assume a condução da defesa da cidade, assim como este mostra seu valor e consegue impor-se sobre os veteranos generais imperiais, com o que se assegura o comando das tropas.\n[…]\nCom tamanha rapidez no ataque, as tropas chancas se despersaram momentaneamente, e os incas gritaram sua vitória, isso acabou por fazer os curacas, que estavam observando do alto dos montes, unirem-se aos cusquenhos, sendo isto explicado pela tradição inca como a lenda dos pururauca (as míticas pedras que se transformam em soldados e decidem a vitória cusquenha).\n[…]\nA fim de impor seu domínio sobre um complexo mosaico de mais de 500 tribos, com línguas, religiões e costumes díspares e radicadas em áreas geográficas distantes, Pachacuti Inca Yupanqui reprimiu com extrema dureza as rebeliões dos povos submetidos e não hesitou em deportar os grupos mais conflitivos para longe de suas regiões de origem, dando lugar aos \"povos deslocados\" ou mitimaes, povos que, por sua rebeldia haviam sido levados desde seu lugar de origem a outro lugar mais estratégico para os objetivos do Império Inca.\n[…]\nImpério Inca",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Códice Mendoza",
      "descricao": "Códice asteca de cerca de 1541, feito sob o vice-rei Antonio de Mendoza, com a história dos governantes e do tributo astecas."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A caminho da Espanha, o Códice Mendoza foi capturado por corsários franceses. Hoje ele está numa biblioteca de que cidade inglesa?",
    "resposta": "Oxford",
    "distratores": [
      "Londres",
      "Cambridge",
      "Manchester"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Codex_Mendoza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Codex_Mendoza",
        "situacao": "ok",
        "texto": "The Codex Mendoza is an Aztec codex, believed to have been created around the year 1541. It contains a history of both the Aztec rulers and their conquests as well as a description of the daily life of pre-conquest Aztec society. The codex is written using traditional Aztec pictograms with a translation and explanation of the text provided in Spanish.\n[…]\nThe codex is also known as the Codex Mendocino and La colección Mendoza, and has been held at the Bodleian Library at Oxford University since 1659. It was on display as part of the Bodleian's Gifts and Books exhibition from 16 June to 29 October 2023. The Bodleian Library holds four other Mesoamerican codices: Codex Bodley, Codex Laud, Codex Selden, and the Selden Roll.\n[…]\nAccording to a later account by Samuel Purchas, a later owner of the Codex, writing in 1625, the Spanish fleet was attacked by French privateers and all of the booty, including the codex, was taken to France.\n[…]\nThe codex was deposited into the Bodleian Library at Oxford University in 1659, five years after Selden's death, where it remained in obscurity until 1831, when it was rediscovered by Viscount Kingsborough and brought to the attention of scholars.\n[…]\nMaya codices\n[…]\nBerdan, F. F.; Anawalt, P. R. (1992a). The Codex Mendoza. Berkeley: University of California Press. ISBN 9780520062344.\n[…]\nBerdan, F. F.; Anawalt, P. R. (1992b). \"Codex Mendoza\". Scientific American. 1 (6): 70–79. Bibcode:1992SciAm.266f..70A. doi:10.1038/scientificamerican0692-70.\n[…]\nBerdan, Frances F.; Anawalt, Patricia Rieff (1997). The Essential Codex Mendoza. University of California Press. ISBN 978-0-520-20454-6.\n[…]\nRoss, Kurt (1978). Codex Mendoza: Aztec Manuscript.\n[…]\nKupriienko, Sergii; Talakh, Viktor (2013) [2013]. Codex Mendoza (russian ed.). Kyiv: Видавець Купрієнко С.А. ISBN 978-617-7085-00-2. Retrieved 4 September 2013.\n[…]\nReview of The Essential Codex Mendoza"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%B3dice_Mendoza",
        "situacao": "ok",
        "texto": "O Códice Mendoza (ou Códice Mendocino ou Codex Mendoza) é um códice asteca colonial, datado da década de 1540 em papel europeu. Posterior à Conquista do México, foi pintado por escribas astecas, que usaram o formato pictórico e iconográfico antigo. Após ser pintado, um escriba adicionou descrições escritas em castelhano.\n[…]\nÉ assim chamado porque foi encomendado pelo primeiro vice-rei da Nova Espanha, Antonio de Mendoza, que desempenhou o seu cargo de 1535 a 1550, para enviar a Carlos I informações sobre os astecas. Provavelmente as suas fontes foram vários códices originais copiados por tlacuilos (pintores de códices) embora alguma das suas partes possa ser obra original dos indígenas especialistas nesta atividade.\n[…]\nFinalizado o códice, este partiu de Veracruz em 1549 sendo enviado para Espanha mas o navio foi aprisionado por piratas franceses, tendo ido parar às mãos do cosmógrafo real francês, que o estragou assinando-o três vezes. Quando morreu, o códice foi comprado pelo geógrafo e embaixador inglês Richard Hakiuyt que o levou para Londres. Passou por várias mãos até ter chegado à biblioteca de consulta Bodleiana da Universidade de Oxford, onde se encontra hoje.\n[…]\nO códice é constituído por 71 folhas, com filigrana de manufatura europeia, encadernadas até ao século XVIII, dividido em três partes:\n[…]\nAnónimo (1 de dezembro de 2010). «Codex Mendoza (ed. russa).» (PDF). Ucrânia, Kiev, 2010-2011. A.Skromnitsky (1 parte), V.Talakh (2 e 3 partes): www.bloknot.info (A.Skromnitsky). Consultado em 7 de junho de 2011",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Comentários Reais dos Incas",
      "descricao": "Livro de 1609 sobre a história e a cultura do Império Inca, escrito por um autor mestiço nascido em Cusco."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os Comentários Reais dos Incas, de Garcilaso de la Vega, saíram pela primeira vez em 1609, impressos em que cidade europeia?",
    "resposta": "Lisboa",
    "distratores": [
      "Madri",
      "Sevilha",
      "Roma"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Comentarios_Reales_de_los_Incas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Comentarios_Reales_de_los_Incas",
        "situacao": "ok",
        "texto": "The Comentarios Reales de los Incas is a book written by Inca Garcilaso de la Vega, the first published mestizo writer of colonial Andean South America. The Comentarios Reales de los Incas  is considered by most to be the unquestioned masterpiece of Inca Garcilaso de la Vega, born of the first generation after the Spanish conquest.\n[…]\nHe was formally educated within the Spanish system of his father and for the most part, \"Garcilaso interpreted Inca and Andean religion from the European and Christian point of view that he had been taught to adopt from infancy, and that provided him with most of his historical and philosophical terminology.\"\n[…]\nThe natural son of Captain Sebastián Garcilaso de la Vega y Vargas and the Inca ñusta (princess) Isabel Suárez Chimpu Ocllo (or Palla Chimpu Ocllo), he lived with his mother and her people until he was ten and was close to them until leaving Peru. He grew up in the worlds of both his parents, also living with his Spanish father as a youth. After traveling to Spain at the age of 21, he was informally educated there, where he lived the rest of his life.\n[…]\nMost experts agree the Comentarios Reales are a chronicle of the culture, economics, and politics of the Inca Empire, based on oral tradition as handed down to Garcilaso by relatives and other amauta (masters, wise ones) during his childhood and adolescence, as well as written sources, including the chronicle of Blas Valera.\n[…]\nMazzotti, José Antonio. Coros mestizos del Inca Garcilaso: resonancias andinas (Lima: Fondo de Cultura Económica, 1996).\n[…]\nMargarita Zamora, Language, Authority, and Indigenous History in the Comentarios reales de los Incas, (Cambridge:  Cambridge University Press, 1988).\n[…]\nFully digitized copy of the Comentarios Reales de los Inca (1609) from the John Carter Brown Library"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Eldorado",
      "descricao": "Lenda de uma terra riquíssima em ouro, nascida de um ritual dos muíscas, na atual Colômbia."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O ritual muísca do chefe coberto de ouro, que deu origem à lenda do Eldorado, acontecia em que lagoa da atual Colômbia?",
    "resposta": "Lagoa de Guatavita",
    "distratores": [
      "Lago Titicaca",
      "Lagoa de Tota",
      "Lago de Maracaibo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Guatavita",
      "https://en.wikipedia.org/wiki/El_Dorado"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Guatavita",
        "situacao": "ok",
        "texto": "Lake Guatavita (Spanish: Laguna Guatavita) is located in the Cordillera Oriental of the Colombian Andes in the municipality of Sesquilé in the Almeidas Province, Cundinamarca department of Colombia, 57 km (35 mi) northeast of Bogotá, the capital of Colombia. This lake is famous for being the inspiration for the legendary El Dorado.\n[…]\nThis brought the Spanish into first contact with the Muisca inhabiting the Altiplano Cundiboyacense, including around Lake Guatavita.\n[…]\nThe lake is a focus of ecotourism, and its association with the legend of El Dorado is also a major attraction.\n[…]\nLake Guatavita was reputedly one of the sacred lakes of the Muisca, and a ritual conducted there is widely thought to be the basis for the legend of El Dorado, \"the golden one\". The legend says the lake is where the Muisca celebrated a ritual in which the zipa (named \"El Dorado\" by the conquistadors) was covered in gold dust, and then, venturing out into the water on a ceremonial raft made of rushes, dove into the waters, washing off the gold.\n[…]\nAfterward, trinkets, jewelry, and other precious offerings were thrown into the waters by worshipers. A few artifacts of gold and silver found at bottom hold proof to this claim; however, to date, attempts to drain the lake or salvage the gold (see Lake Guatavita gold) have yielded no more than these.\n[…]\nLake Guatavita is the filming location of the music video of the song No Te Pido Flores by Fanny Lú.\n[…]\nMuisca religion\n[…]\nGuatavita myth\n[…]\nLake Iguaque, another sacred lake of the Muisca\n[…]\nSiecha Lakes, other lakes implicated in the El Dorado legend\n[…]\nTominé Reservoir, which buried the old town of Guatavita\n[…]\nTunjo, offer pieces in Lake Guatavita\n[…]\nMedia related to Laguna de Guatavita at Wikimedia Commons\n[…]\n(in Spanish) Lake Guatavita - Colparques"
      },
      {
        "url": "https://en.wikipedia.org/wiki/El_Dorado",
        "situacao": "ok",
        "texto": "El Dorado (Spanish: [el doˈɾaðo]) is a mythical city of gold supposedly located somewhere in South America. The legend originated in 16th-century Spanish accounts of a ruler known as El Dorado, or the Golden One, who was said to cover himself in gold dust before washing it off in a sacred lake. Over time, the name came to refer not only to the ruler, but also to a lost city or kingdom of immense w\n[…]\nThe legend is associated with the Muisca, an indigenous people who inhabited the Altiplano Cundiboyacense in present-day Colombia. Later accounts linked the story to the installation ceremony of a new zipa, involving offerings of gold and other valuables at Lake Guatavita. The Muisca were skilled goldsmiths, and Spanish expeditions under Gonzalo Jiménez de Quesada reached and conquered their territory in 1537.\n[…]\nLater attempts were made to drain Lake Guatavita in search of treasure, and objects associated with the El Dorado tradition, including the Muisca raft, are now held by the Museo del Oro in Bogotá.\n[…]\nFreyle claimed to have received his information from the nephew of the last Indigenous ruler of Guatavita who followed the Inca trail south to their gold mines at Puente del Inca.\n[…]\nQuintero-Guzmán suggests that the Guatavita ceremony may have been a one-time event, which lived on in the oral history of the Muisca until the arrival of the Spaniards.\n[…]\nLakes featured heavily in Muisca religion. The mother goddess Bachué was said to have emerged from a lake before peopling the earth, and then returned to the water in the form of a serpent. Guatavita was one of several sacred lakes found within Muisca territory, and gold, emeralds and other objects were often deposited at the lakeside as sacrificial offerings.\n[…]\nThe Muisca raft is now held by the Museo del Oro in Bogotá."
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Parque Nacional da Serra da Capivara",
      "descricao": "Parque nacional no sudeste do Piauí com milhares de pinturas rupestres e sítios arqueológicos pré-históricos."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O Parque Nacional da Serra da Capivara, com milhares de pinturas rupestres pré-históricas, fica em que estado brasileiro?",
    "resposta": "Piauí",
    "distratores": [
      "Bahia",
      "Minas Gerais",
      "Pernambuco"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Serra_da_Capivara"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Serra_da_Capivara",
        "situacao": "ok",
        "texto": "O Parque Nacional Serra da Capivara é uma unidade de conservação brasileira de proteção integral à natureza que ocupa parte dos municípios de São Raimundo Nonato, João Costa, Brejo do Piauí e Coronel José Dias, todos localizados no estado do Piauí. Esta área tem a maior e mais antiga concentração de sítios pré-históricos da América. Estudos científicos confirmam que a cadeia montanhosa de Capivara\n[…]\nO Parque Nacional Serra da Capivara se localiza no Estado do Piauí, ao Sudeste do Estado. Existem atualmente cerca de 400 sítios arqueológicos catalogados onde foram encontrados artefatos líticos, esqueletos humanos e  pinturas rupestres. No sítio Toca do Boqueirão da Pedra Furada, 63 datações por carbono-14 (C-14) permitiram o estabelecimento de uma coluna cronoestratigráfica que vai de 59 000 até 5 000 anos AP. Numerosas pinturas rupestres se encontram na área.\n[…]\nAs pinturas rupestres são a manifestação mais abundante, notável e espetacular deixada pelas populações pré-históricas que viveram na área do Parque Nacional, desde épocas muito recuadas.\n[…]\nNo parque destaca-se o Mocó, único mamífero endêmico da Caatinga. O maior predador de toda a região do parque é a onça-pintada, que pode ultrapassar 50 kg e se alimenta de outros vertebrados que pode capturar.\n[…]\nNo início de 2017 o Museu do Homem Americano passou a ser de responsabilidade do comitê permanente de acompanhamento e gestão do Parque Nacional da Serra da Capivara, um modelo de gerenciamento compartilhado instituído pelo governo do estado do Piauí e pelo Ministério da Cultura.\n[…]\nSerra da Capivara (Território do Piauí)\n[…]\nParque Nacional Serra da Capivara - Fundação Museu do Homem Americano\n[…]\nParque Nacional Serra da Capivara - PI - Portal Brasil\n[…]\nParque Nacional Serra da Capivara - Instituto do Patrimônio Artístico e Histórico Nacional\n[…]\nParque Nacional da Serra da Capivara - Fotorreportagem Olhar sobre o Mundo"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Parque Nacional da Serra da Capivara",
      "descricao": "Parque nacional no sudeste do Piauí com milhares de pinturas rupestres e sítios arqueológicos pré-históricos."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que arqueóloga dedicou a vida às pesquisas na Serra da Capivara e lutou pela criação do parque nacional, em 1979?",
    "resposta": "Niède Guidon",
    "distratores": [
      "Anna Roosevelt",
      "Betty Meggers",
      "Denise Schaan"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ni%C3%A8de_Guidon",
      "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Serra_da_Capivara"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ni%C3%A8de_Guidon",
        "situacao": "ok",
        "texto": "Niède Guidon (Jaú, 12 de março de 1933 — São Raimundo Nonato, 4 de junho de 2025) foi uma arqueóloga, pesquisadora e professora universitária brasileira.\n[…]\nVoltando ao Brasil, integrando a Missão Arqueológica Franco-Brasileira, uma iniciativa do Museu de História Natural de Paris para desenvolvimento de projetos de arqueologia. Até sua aposentadoria como docente, Niède Guidon seria a líder da missão, composta por pesquisadores brasileiros, franceses e de outros países, assim como assistentes de campo locais. Depois disso, a seu convite, Eric Boëda, pesquisador do CNRS e professor da Universidade de Paris, sucedeu-a na liderança.\n[…]\nPor quase cinco décadas, Niède Guidon protagonizou as pesquisas arqueológicas na área de São Raimundo Nonato e lutou pela conservação do Parque, até que, em 2020, aos 87 anos, as sequelas da chikungunya lhe causaram problemas nas articulações, obrigando-a a usar uma bengala para andar, e impossibilitando-a a fazer suas longas caminhadas pelo parque - ela decidiu que estava na hora de parar.\n[…]\nMorreu, em 4 de junho de 2025, vítima de um infarto. Após a divulgação da morte, o governo do Piauí alegou que o legado de Guidon para a ciência e arqueologia é \"inestimável\" e decretou luto oficial de três dias. O Ministério da Ciência, Tecnologia e Inovação (MCTI) emitiu uma nota onde declara “com coragem, rigor científico e compromisso com a educação, Niède construiu um legado que transcende a ciência”.\n[…]\n«O casamento de Niède». no Museu da Pessoa\n[…]\nNiède Guidon e as Origens do Homem Americano -Globo Ciência (1990)\n[…]\n«Algumas premiações da arqueóloga Niède Guidon». www.portalaz.com.br"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Serra_da_Capivara",
        "situacao": "ok",
        "texto": "O Parque Nacional Serra da Capivara é uma unidade de conservação brasileira de proteção integral à natureza que ocupa parte dos municípios de São Raimundo Nonato, João Costa, Brejo do Piauí e Coronel José Dias, todos localizados no estado do Piauí. Esta área tem a maior e mais antiga concentração de sítios pré-históricos da América. Estudos científicos confirmam que a cadeia montanhosa de Capivara\n[…]\nÉ um local com vários atrativos, monumental museu a céu aberto, entre belíssimas formações rochosas, onde encontram sítios arqueológicos e paleontológicos espetaculares, que testemunham a presença de humanos e animais pré-históricos. O parque nacional foi criado graças, em grande parte, ao trabalho da arqueóloga Niède Guidon, que, até seu falecimento em junho de 2025, atuava como Presidente Emérita da Fundação Museu do Homem Americano, instituição responsável pelo manejo do parque.\n[…]\nO Parque Nacional Serra da Capivara se localiza no Estado do Piauí, ao Sudeste do Estado. Existem atualmente cerca de 400 sítios arqueológicos catalogados onde foram encontrados artefatos líticos, esqueletos humanos e  pinturas rupestres. No sítio Toca do Boqueirão da Pedra Furada, 63 datações por carbono-14 (C-14) permitiram o estabelecimento de uma coluna cronoestratigráfica que vai de 59 000 até 5 000 anos AP. Numerosas pinturas rupestres se encontram na área.\n[…]\nEm 18 de dezembro de 2018 foi inaugurado, dentro do parque, o Museu da Natureza, uma moderna estrutura com apoio do Banco Nacional de Desenvolvimento Econômico e Social e do Ministério da Cultura, sob idealização de Niède Guidon em 2002, que doou uma premiação pessoal para ajudar no custeio das obras.\n[…]\nParque Nacional Serra da Capivara - PI - Portal Brasil\n[…]\nParque Nacional Serra da Capivara - Instituto do Patrimônio Artístico e Histórico Nacional\n[…]\nParque Nacional da Serra da Capivara - Fotorreportagem Olhar sobre o Mundo"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Luzia",
      "descricao": "Esqueleto humano de cerca de onze mil anos achado em 1975 numa gruta da região de Lagoa Santa, um dos mais antigos das Américas."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Achado em 1975, o crânio de Luzia, um dos fósseis humanos mais antigos das Américas, saiu de uma gruta de que estado brasileiro?",
    "resposta": "Minas Gerais",
    "distratores": [
      "Piauí",
      "Bahia",
      "Goiás"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Luzia_Woman",
      "https://pt.wikipedia.org/wiki/Luzia_(f%C3%B3ssil)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Luzia_Woman",
        "situacao": "ok",
        "texto": "Luzia Woman (Portuguese pronunciation: [luˈzi.ɐ]) is the name for an Upper Paleolithic period Paleo-Indian woman whose skeletal remains were found in a cave in Brazil. The 11,500-year-old skeleton was found in a cave in the Lapa Vermelha archeological site in Pedro Leopoldo, in the Greater Belo Horizonte region of Brazil, in 1974 by archaeologist Annette Laming-Emperaire.\n[…]\nLuzia's remains were discovered in 1974 during excavations at Lapa Vermelha IV, a rock shelter near Pedro Leopoldo, Minas Gerais, Brazil. The excavation was led by French archaeologist Annette Laming-Emperaire as part of a joint French–Brazilian research expedition. The remains were recovered from a sedimentary deposit approximately 12 metres (40 ft) below the surface of the shelter.\n[…]\nIn November 2018, scientists of the University of São Paulo and Harvard University released a study that contradicts the alleged Australo-Melanesian origin of Luzia. Using DNA sequencing, the results showed that Luzia was genetically entirely Amerindian. It was published in the journal Cell article (November 8, 2018), a paper in the journal Science from an affiliated team also reported new findings on fossil DNA from the first migrants to the Americas.\n[…]\nLagoa Santa remains from a site nearby to the Luzia remains carry DNA regarded as Native American. Two of the Lagoa Santa individuals carry the same mtDNA haplogroup (D4h3a) also carried by older 12,000+ remains Anzick-1 found in Montana, mtDNA haplogroup A2, B2, C1d1 and three of the Lagoa Santa individuals harbor the same Y chromosome haplogroup Q1b1a1a1-M848 as found in the Spirit Cave genome of Nevada. The bust of Luzia displaying Australo-Melanesian features was created in 1999.\n[…]\nGenetic history of indigenous peoples of the Americas\n[…]\nSettlement of the Americas\n[…]\nMedia related to Luzia (fossil) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Luzia_(f%C3%B3ssil)",
        "situacao": "ok",
        "texto": "Luzia é o fóssil humano mais antigo encontrado na América do Sul, com cerca de 12 500 a 13 000 anos que reacendeu questionamentos acerca das teorias da origem do homem americano. O fóssil pertenceu a uma mulher que morreu entre seus 20 a 24 anos de idade e foi considerado como parte da primeira população humana que entrou no continente americano.\n[…]\nFormalmente, o esqueleto se chama \"Lapa Vermelha IV Hominídeo 1\". \"Luzia\" é um apelido dado pelo biólogo Walter Alves Neves, do Instituto de Biociências da Universidade de São Paulo. Ele se inspirou em Lucy, o célebre fóssil de Australopithecus afarensis de 3,5 milhões de anos achado na Etiópia no ano de 1974.[carece de fontes]?\n[…]\nA gruta era famosa pelos trabalhos do cientista Peter Lund (1801–1880), que lá descobrira, entre 1835 e 1845, milhares de fósseis de animais extintos da época do Pleistoceno e 31 crânios humanos em estado fóssil do que passou a ser conhecido como o Homem de Lagoa Santa. Seus hábitos alimentares incluíam folhas, frutas, raízes e algumas vezes, carne.\n[…]\nO trabalho foi feito em conjunto pela USP, pela Universidade Harvard e pelo Instituto Max Planck, da Alemanha. Os cientistas estudaram nove ossadas humanas da região de Lagoa Santa, em Minas Gerais. Dos mesmos sítios arqueológicos de Luzia, a ossada de uma mulher que teria vivido há mais de 11 mil anos e é considerada a primeira brasileira.\n[…]\nA segunda, criada na  década de 1990, diz que os territórios americanos foram povoados por humanos mais antigos ainda, os primeiros que já tinham saído da África, cruzado a Ásia e que teriam vindo direto para a América, até chegar ao Brasil. A ideia surgiu porque os pesquisadores estudaram as medidas do crânio de Luzia e acharam que ele era mais largo do que os dos indígenas e mais parecido com o dos africanos.\n[…]\nPovoamento das Américas\n[…]\nLapa Vermelha no WikiMapia"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Popol Vuh",
      "descricao": "Livro que reúne os mitos de criação e a história dos maias quichés, da Guatemala."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No Popol Vuh, os gêmeos heróis Hunahpú e Xbalanqué desafiam os senhores do mundo dos mortos em que disputa?",
    "resposta": "Jogo de bola",
    "distratores": [
      "Corrida a pé",
      "Luta corpo a corpo",
      "Jogo de dados"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maya_Hero_Twins",
      "https://en.wikipedia.org/wiki/Popol_Vuh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maya_Hero_Twins",
        "situacao": "ok",
        "texto": "The Maya Hero Twins are the central figures of a narrative included within the colonial Kʼicheʼ document called Popol Vuh, and constituting the oldest Maya myth to have been preserved in its entirety. Called Hunahpu [hunaxˈpu] and Xbalanque [ʃɓalaŋˈke] in the Kʼicheʼ language, the Twins have also been identified in the art of the Classic Mayas (200–900 AD). The twins are often portrayed as complem\n[…]\nXmucane now recognizes that Blood Moon is telling the truth. She later gives birth to the children, Hunahpu and Xbalanque. The sons—or 'Twins'—grow up to avenge their father, and after many trials, finally defeated the lords of the Underworld in a  ballgame. The Popol Vuh features other episodes involving the Twins as well (see below), including the destruction of a pretentious bird demon, Vucub Caquix, and of his two demonic sons.\n[…]\nIn a climactic performance, Xbalanque cut Hunahpu apart and offered him as a sacrifice, only to have the older brother rise once again from the dead.\n[…]\nEnthralled by the performance, One Death and Seven Death, the highest lords of Xibalba, demanded that the miracle be performed upon them. The twins obliged by killing and offering the lords as a sacrifice, but did not bring them back from the dead. The twins then shocked the Xibalbans by revealing their identities as Hunahpu and Xbalanque, sons of One Hunahpu whom they had slain years ago along with their uncle Seven Hunahpu.\n[…]\nTheir mission accomplished, the pair left Xibalba, climbing back to the surface of the Earth; but they did not, however, stop there and continued climbing straight on up into the sky – Hunahpu became the Sun, and Xbalanque became the Moon.\n[…]\nTedlock, Dennis (trans.) (1985). Popol Vuh: the Definitive Edition of the Maya Book of the Dawn of Life and the Glories of Gods and Kings. New York: Simon and Schuster. ISBN 0-671-45241-X."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Popol_Vuh",
        "situacao": "ok",
        "texto": "Popol Vuh (also  Popul Vuh or Pop Vuj) is a text recounting the mythology and history of the Kʼicheʼ people of Guatemala, one of the Maya peoples who also inhabit the Mexican states of Chiapas, Campeche, Yucatan and Quintana Roo, as well as areas of Belize, Honduras and El Salvador.\n[…]\nThe Popol Vuh is a foundational sacred narrative of the Kʼich'eʼ people from long before the Spanish conquest of the Maya. It includes the Mayan creation myth, the exploits of the Hero Twins Hunahpú and Xbalanqué, and a chronicle of the Kʼicheʼ people.\n[…]\nIn Mayan mythology Hunahpú and Xbalanqué are the second pair of twins out of three, preceded by Hun-Hunahpú and his brother Vucub-Hunahpú, and precursors to the third pair of twins, Hun Batz and Hun Chuen. In the Popol Vuh, the first set of twins, Hun-Hunahpú and Vucub-Hanahpú were invited to the Mayan Underworld, Xibalba, to play a ballgame with the Xibalban lords. In the Underworld the twins faced many trials filled with trickery; eventually they fail and are put to death.\n[…]\nThe Popol Vuh is referenced throughout Robert Rodriguez's television show From Dusk till Dawn: The Series (2014). In particular, the show's protagonists, the Gecko Brothers, Seth and Richie, are referred to as the embodiment of Hunahpú and Xbalanqué, the hero twins, from the Popol Vuh.\n[…]\nFollowing the Twin Hero narrative, mankind is fashioned from white and yellow corn, demonstrating the crop's transcendent importance in Maya culture. To the Maya of the Classic period, Hun Hunahpu may have represented the maize god. Although in the Popol Vuh his severed head is unequivocally stated to have become a calabash, some scholars believe the calabash to be interchangeable with a cacao pod or an ear of corn."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Uxmal",
      "descricao": "Antiga cidade maia do período clássico na região Puuc, península de Yucatán, México, com a Pirâmide do Adivinho."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Segundo uma lenda maia, quem ergueu numa única noite a Pirâmide do Adivinho, em Uxmal?",
    "resposta": "Um anão",
    "distratores": [
      "Um gigante",
      "Um rei cego",
      "Um jaguar falante"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pyramid_of_the_Magician"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pyramid_of_the_Magician",
        "situacao": "ok",
        "texto": "The Pyramid of the Magician (Spanish: Pirámide del adivino) is a Mesoamerican step pyramid located in the ancient Mayan city of Uxmal, Mexico. It is the tallest and most recognizable structure in Uxmal.\n[…]\nThe name Uxmal means 'thrice-built' in the Mayan language, referring to the many layers of construction of its most imposing structure.\n[…]\nThe ruler reconsidered the death sentence, though, and promised that the dwarf's life would be spared if he could perform three seemingly impossible tasks. One of the tasks was to build a massive pyramid, taller than any building in the city, in a single night. The dwarf ultimately completed all the tasks, including the construction of the pyramid. The dwarf was hailed as the new ruler of Uxmal and the structure was dedicated to him.\n[…]\nLegend tells that this temple-pyramid was built by a powerful dwarf magician, who was hatched from an egg by his mother. Under a threat by an Uxmal king he was ordered to build this temple within a fortnight, or else lose his life (82).\n[…]\nStephens and Catherwood visited Uxmal first in 1839, then again during their expedition of 1841. Describing his first view of the ruins, Stephens writes:\n[…]\nDesmond, Lawrenc G. \"Stereo-Photogrammetric Documentation of the Adivino Pyramid at Uxmal, Yucatan\". (Online resource)  12-24 Mar. 1999. Retrieval 26 Oct. 2006  <https://web.archive.org/web/20060907110146/http://maya.csuhayward.edu/archaeoplanet/LgdPage/Adivino99SumRpt.htm>\n[…]\nKowalski, Jeff K. The House of the Governor:  A Maya palace at Uxmal, Yucatán, Mexico. Norman : University of Oklahoma Press, 1987."
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.94 — 2026-11-02**
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
