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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6). Uma pergunta `aberta` cuja resposta é um ano ou uma data deve ser reescrita como `multipla`, com 3 anos ou datas próximos e críveis (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Thomas Edison",
      "descricao": "Inventor e empresário americano (1847–1931), conhecido pela lâmpada incandescente e pelo fonógrafo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Inventor do fonógrafo e de uma lâmpada de longa duração, Thomas Edison registrou nos Estados Unidos cerca de quantas patentes?",
    "resposta": "Mais de mil",
    "distratores": [
      "Cerca de cem",
      "Cerca de trezentas",
      "Mais de cinco mil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Edison"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Edison",
        "situacao": "ok",
        "texto": "Thomas Alva Edison (February 11, 1847 – October 18, 1931) was an American inventor and businessman known for his work on the incandescent light bulb, the phonograph, electric power distribution and early motion pictures. The merger of the Edison General Electric Company and the competitor Thomson-Houston Electric Company resulted in the formation of General Electric. Edison registered 1,093 patent\n[…]\nEdison's name is registered on 1,093 patents in the United States— during his adult life, he averaged a patent once every 10–12 days. As the leader of his laboratory, Edison was credited for inventions made in large part by those working under him. He worked extreme hours and expected those around him to follow suit. This often meant 18 hours per day Monday through Friday and additional work on Saturday and Sunday.\n[…]\nThe Edison effect was instrumental in the eventual design of vacuum tubes. To avoid a possible court battle with yet another competitor, Edison and Joseph Swan, who held an 1880 British patent on a similar incandescent electric lamp, formed a joint company called Ediswan to manufacture and market the invention in Britain.\n[…]\nThomas Alva Edison Jr. (1876–1935)\n[…]\nWanting to be an inventor, but not having much of an aptitude for it, Thomas Jr. became a problem for his father and his father's business. Starting in the 1890s, Thomas Jr. became involved in snake oil products and shady and fraudulent enterprises. The situation became so bad that Thomas Sr. had to deal with his son through attorneys and agreed to pay Thomas Jr. an allowance in exchange for not using the Edison name. He struggled with problematic drinking and depression. Thomas Jr.\n[…]\nEdison, Thomas Alva (June 7, 1925). \"The Philosophy of Thomas Paine\". www.thomaspaine.org. Archived from the original on February 9, 2026. Retrieved December 12, 2025.\n[…]\nThomas Edison Personal Manuscripts and Letters\n[…]\nThomas Edison at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Edison",
        "situacao": "ok",
        "texto": "Thomas Alva Edison (11 de fevereiro de 1847 – 18 de outubro de 1931) foi um inventor e empresário norte-americano que trabalhou com a lâmpada incandescente, o fonógrafo, a distribuição de energia elétrica e os primeiros filmes. A fusão da Edison General Electric Company com a concorrente Thomson-Houston Electric Company deu origem à General Electric. Edison registrou 1.093 patentes nos Estados Uni\n[…]\nO fonógrafo, inventado por Edison em 1877, chamou a atenção de um público muito mais amplo. Como telegrafista, ele já imaginara uma máquina capaz de registrar mensagens recebidas e reproduzi-las. Primeiro patenteou um disco giratório em que as mensagens seriam gravadas em relevo para posterior leitura. As experiências com Batchelor levaram a formas rudimentares de gravar e reproduzir sons.\n[…]\nDepois de vencer ações por violação de sua patente de lâmpadas, a empresa de Edison considerou comprar uma concorrente de CA para encerrar disputas e obter suas patentes. Em 1892, Villard e J. P. Morgan negociaram a fusão da Edison General Electric com a Thomson-Houston. O resultado foi diferente do que Villard esperava. Morgan considerou a Thomson-Houston mais valiosa, afastou Villard e entregou a direção da nova General Electric aos administradores da rival.\n[…]\nEm 1899, Edison começou a pesquisar uma bateria recarregável mais eficiente para automóveis elétricos. As baterias de chumbo-ácido eram comuns, mas apresentavam limitações e estavam protegidas por patentes de outros inventores. Edison optou por uma bateria alcalina. Seu laboratório testou dez mil combinações de eletrodos e soluções até escolher níquel e ferro.\n[…]\nThomas Alva Edison Jr. (1876–1935)\n[…]\nAdair, Gene (1996). Thomas Alva Edison : Inventing the Electric Age. [S.l.]: Oxford University Press. ISBN 0195087992\n[…]\nPedido de patente da lâmpada nos Arquivos Nacionais dos Estados Unidos (em inglês).\n[…]\nPatentes de Edison no Brasil, Pesquisa FAPESP.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Bíblia de Gutenberg",
      "descricao": "Bíblia em latim impressa por Johannes Gutenberg em Mainz, o primeiro grande livro europeu feito com tipos móveis."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Bíblia de Gutenberg, impressa em Mainz no século quinze, também é conhecida pelo número de linhas de cada coluna. Quantas linhas?",
    "resposta": "42",
    "distratores": [
      "24",
      "36",
      "50"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gutenberg_Bible"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gutenberg_Bible",
        "situacao": "ok",
        "texto": "The Gutenberg Bible, also known as the 42-line Bible, the Mazarin Bible or the B42, is the earliest major book printed in Europe using mass-produced metal movable type. It marked the start of the \"Gutenberg Revolution\" and the age of printed books in the West. The book is valued and revered for its high aesthetic and artistic qualities and its historical significance.\n[…]\nSome time later, after more sheets had been printed, the number of lines per page was increased from 40 to 42, presumably to save paper. Therefore, pages 1 to 9 and pages 256 to 265, presumably the first ones printed, have 40 lines each. Page 10 has 41, and from there on the 42 lines appear. The increase in line number was achieved by decreasing the interline spacing, rather than increasing the printed area of the page.\n[…]\nFinally, the print run was increased, necessitating resetting those pages which had already been printed. The new sheets were all reset to 42 lines per page. Consequently, there are two distinct settings in folios 1–32 and 129–158 of volume I and folios 1–16 and 162 of volume II.\n[…]\nThe 42-line Bible was printed on the size of paper known as 'Royal'. A full sheet of Royal paper measures 42 cm × 60 cm (17 in × 24 in) and a single untrimmed folio leaf measures 42 cm × 30 cm (17 in × 12 in). There have been attempts to claim that the book was printed on larger paper measuring 44.5 cm × 30.7 cm (17.5 in × 12.1 in), but this assertion is contradicted by the dimensions of existing copies.\n[…]\nFor example, the leaves of the copy in the Bodleian Library, Oxford, measure 40 cm × 28.6 cm (15.7 in × 11.3 in). This is typical of other folio Bibles printed on Royal paper in the fifteenth century. Most fifteenth-century printing papers have a width-to-height ratio of 1:1.4 (e.g. 30:42 cm) which, mathematically, is a ratio of 1 to the square root of 2 or, simply,"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/B%C3%ADblia_de_Gutenberg",
        "situacao": "ok",
        "texto": "A Bíblia de Gutenberg (também conhecida como Bíblia de Mazari ou Bíblia de 42 linhas) é o incunábulo impresso da tradução em latim da Bíblia, por Johannes Gutenberg, em Mogúncia (atual Mainz), Alemanha. A produção da Bíblia começou em 1450, tendo Gutenberg usado uma prensa de tipos móveis. Calcula-se que tenha terminado em 1455. Essa Bíblia é considerada o incunábulo mais importante, pois marca o \n[…]\nEste método é uma forma de impressão em relevo. Algum tempo depois, após a impressão de mais folhas, o número de linhas por página foi aumentado de 40 para 42, provavelmente para economizar papel. Portanto, as páginas 1 a 9 e as páginas 256 a 265, presumivelmente as primeiras impressas, têm 40 linhas cada. A página 10 tem 41 linhas e, a partir daí, aparecem as 42 linhas. O aumento no número de linhas foi obtido diminuindo o espaçamento entre linhas, em vez de aumentar a área impressa da página.\n[…]\nA Bíblia de 42 linhas foi impressa em um papel do tamanho conhecido como 'Real'. Uma folha inteira de papel Real mede 42 cm × 60 cm (17 pol × 24 pol) e uma única folha fólio não aparada mede 42 cm × 30 cm (17 pol × 12 pol). Um único exemplar completo da Bíblia de Gutenberg tem 1.288 páginas (4×322 = 1288) (geralmente encadernado em dois volumes); com quatro páginas por folha fólio, são necessárias 322 folhas de papel por exemplar.\n[…]\nA Bíblia de Gutenberg é impressa nos estilos de tipografia gótica que ficariam conhecidos como Textualis (Textura) e Schwabacher. O nome Textura refere-se à textura da página impressa: traços verticais retos combinados com linhas horizontais, dando a impressão de uma estrutura tecida. Gutenberg já utilizava a técnica de justificação, ou seja, criar um alinhamento vertical, sem recuo, nos lados esquerdo e direito da coluna.\n[…]\n«The Digital Gutenberg Project». : A Bíblia de Gutenberg em 1.300 imagens digitais, cada página da cópia da Universidade do Texas em Austin.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "14-bis",
      "descricao": "Avião de Alberto Santos-Dumont que voou em Paris em 1906."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em novembro de 1906, em Paris, Santos-Dumont fez com o 14-bis o voo mais longo desse avião. Cerca de quantos metros ele percorreu?",
    "resposta": "220 metros",
    "distratores": [
      "20 metros",
      "1 quilômetro",
      "5 quilômetros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/14-bis",
      "https://pt.wikipedia.org/wiki/14-bis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/14-bis",
        "situacao": "ok",
        "texto": "The 14-bis (French: Quatorze-bis; (Portuguese: Quatorze-bis; English: Fourteen-again, approximating \"14B\"), also known as Oiseau de proie (\"bird of prey\" in French), was a pioneer era, canard-style biplane designed and built by Brazilian aviation pioneer Alberto Santos-Dumont. In 1906, near Paris, the 14-bis made a manned powered flight that was the first to be publicly witnessed by a crowd and al\n[…]\nThis landing damaged the aircraft slightly, but Santos-Dumont announced that he should be ready to attempt the 100-metre (330 ft) prize on 12 November 1906.\n[…]\nOn the morning of 12 November 1906 the aviation community of France assembled at the Château de Bagatelle's grounds to witness Santos-Dumont's next attempt. As Santos-Dumont allowed the 14-bis to run down the field, a car drove alongside, from which Henry Farman dropped a plate each time he observed the wheels of the aircraft leave the ground or touch down again.\n[…]\nAs the sun set, Santos-Dumont attempted one more flight. In order to ensure he would not hit the spectators, who by this time were all over the field, he pulled up while flying over them. After 22 seconds, he cut the engine and glided in to land. He had flown for 220 meters (over 700 ft), qualifying for the second aviation prize offered for heavier-than-air-aircraft, 1,000 francs for a flight of 100 meters or more.\n[…]\nThe Santos-Dumont 14-bis did not use a catapult and ran on wheels located at the back of the aircraft – said to have been adopted by Santos-Dumont for his 14-bis after personally witnessing Traian Vuia's contemporary, four-wheeled aircraft's flight attempts earlier in 1906 in the western suburbs of Paris, not far from the Château de Bagatelle's grounds – with a \"nose-skid\" under the front of the 14-bis' fuselage.\n[…]\nGray, Carroll F. (November 2006). \"The 1906 Santos-Dumont No. 14bis\". WWI Aero: The Journal of the Early Aeroplane (194): 4–21. ISSN 0736-198X."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/14-bis",
        "situacao": "ok",
        "texto": "14-bis, também conhecido como Oiseau de Proie (francês para “ave de rapina”), foi um avião construído pelo inventor brasileiro Alberto Santos Dumont que em 12 de novembro de 1906 conquistou o Prêmio Archdeacon e o Prêmio do Aeroclube da França ao realizar um voo de 220 metros em Paris.\n[…]\nO peso total da aeronave vazia era de aproximadamente 160 kg, um feito notável para uma máquina com mais de 11 metros de envergadura.\n[…]\nPrimeiros Saltos (Agosto-Setembro de 1906): Após abandonar o balão Nº 14, Santos Dumont realizou os primeiros testes no solo em Bagatelle. Em 13 de setembro, com o motor de 24 hp, conseguiu um \"salto\" de 7 a 11 metros, que terminou com o trem de pouso danificado. Ele então instalou o motor mais potente de 50 hp e rebatizou a aeronave de Oiseau de Proie.\n[…]\n23 de Outubro de 1906: O Prêmio Archdeacon: Perante uma multidão e a comissão oficial do Aéro-Club de France, Santos Dumont fez várias tentativas. Após alguns saltos curtos, ele finalmente conseguiu um voo sustentado de 60 metros a uma altura de 2 a 3 metros. O voo durou 7 segundos e foi suficiente para vencer a Taça Archdeacon, destinada ao primeiro voo de mais de 25 metros.\n[…]\n12 de Novembro de 1906: O Prêmio do Aéro-Club: Insatisfeito e buscando maior controle e distância, Santos Dumont fez modificações cruciais, incluindo a adição dos ailerons interplanares. No dia 12 de novembro, novamente em Bagatelle, ele realizou uma série de voos cada vez mais longos. O clímax foi um voo de 220 metros que durou 21,5 segundos.\n[…]\nCom este feito, ele não apenas quebrou seu próprio recorde, mas também venceu o prêmio de 1.500 francos do Aéro-Club de France para o primeiro voo de mais de 100 metros. Este voo foi a consagração definitiva do 14-bis e de seu inventor.\n[…]\nAlberto Santos Dumont"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Sistema Braille",
      "descricao": "Sistema de leitura e escrita tátil com pontos em relevo, criado por Louis Braille no século dezenove para pessoas cegas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No sistema braille de leitura com pontos em relevo, cada letra é formada numa pequena célula com até quantos pontos?",
    "resposta": "Seis",
    "distratores": [
      "Quatro",
      "Oito",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Braille",
      "https://pt.wikipedia.org/wiki/Braille"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Braille",
        "situacao": "ok",
        "texto": "Braille ( BRAYL; French: [bʁaj] ) is a tactile writing system used by blind or visually impaired people. It can be read either on embossed paper or by using refreshable braille displays that connect to computers and smartphone devices. Braille can be written using a slate and stylus, a braille writer, an electronic braille notetaker or with the use of a computer connected to a braille embosser. Fo\n[…]\nHowever, some codes have quite different tactile versus visual interpretations and most are not even defined in Braille ASCII.)\n[…]\nThe Unicode standard encodes 6-dot and 8-dot braille glyphs according to their binary appearance, rather than following their assigned numeric order. Dot 1 corresponds to the least significant bit of the low byte of the Unicode scalar value, and dot 8 to the high bit of that byte.\n[…]\nThe Unicode block for braille is U+2800 ... U+28FF. The mapping of patterns to characters etc. is language dependent: even for English for example, see American Braille and English Braille.\n[…]\nEvery year on 4 January, World Braille Day is observed internationally to commemorate the birth of Louis Braille and to recognize his efforts. Although the event is not considered a public holiday, it has been recognized by the United Nations as an official day of celebration since 2019.\n[…]\nThe 200th anniversary of the launch of braille was celebrated in 2024. In the UK, the Royal National Institute of Blind People has held celebrations from September 2024 until August 2025.\n[…]\nThere is a variety of contemporary electronic devices that serve the needs of blind people that operate in Braille, such as refreshable braille displays and braille e-books that use different technologies for transmitting graphic information of different types (pictures, maps, graphs, texts, etc.).\n[…]\nBraille Part 1 Text To Speech For The Visually Impaired YouTube\n[…]\nBraille information and advice – Sense UK\n[…]\nBraille at Omniglot"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Braille",
        "situacao": "ok",
        "texto": "Braile ou braille é um sistema de escrita tátil utilizado por pessoas cegas ou com baixa visão. É tradicionalmente escrito em papel relevo. Os usuários do sistema Braille podem ler em telas de computadores e em outros suportes eletrônicos graças a um mostrador em braile atualizáveis. Eles podem escrever em braile com reglete e punção, máquina de escrever em braille, notetaker em braille ou computa\n[…]\nEm inglês, o Braille tinha três níveis de codificação:\n[…]\nUma célula Braille completa inclui seis pontos dispostos em duas linhas verticais, cada uma com três pontos. As posições dos pontos são identificadas por números de um a seis. São 63 combinações possíveis para usar um ou mais pontos e 64 combinações possíveis considerando o espaço em branco. Uma única célula pode ser usada para representar uma letra do alfabeto, um número, um sinal de pontuação ou mesmo uma palavra inteira.\n[…]\nA solução de Braille foi usar células de 6 pontos e atribuir um padrão específico para cada letra do alfabeto. Inicialmente, o Braille era uma transliteração um–para–um da ortografia francesa, mas logo várias abreviaturas, contrações e até mesmo logogramas foram desenvolvidos. Isto criou um sistema muito mais parecido com a taquigrafia. O sistema inglês expandido chamado de Braille de grau 2 estava completo em 1905.\n[…]\nOs textos acadêmicos são às vezes escritos em um script de oito em vez de seis pontos por célula, permitindo-lhes codificar um maior número de símbolos. O Braille luxemburguês adotou células de oito pontos para uso geral. Por exemplo, adiciona um ponto abaixo de cada letra para derivar sua variante com letra maiúscula.\n[…]\nCada célula braille possui 6 pontos de preenchimento, permitindo 63 combinações. Alguns consideram a célula vazia como um símbolo também, totalizando 64 combinações. Assim, podem-se designar combinações de pontos para todas as letras e para a pontuação da maioria dos alfabetos."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Sputnik 1",
      "descricao": "Primeiro satélite artificial da Terra, lançado pela União Soviética em 1957."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Lançado pela União Soviética em 1957, o Sputnik 1 era uma esfera metálica polida com quantas antenas compridas?",
    "resposta": "Quatro",
    "distratores": [
      "Duas",
      "Três",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sputnik_1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sputnik_1",
        "situacao": "ok",
        "texto": "Sputnik 1  (, Russian: Спутник-1, Satellite 1), often referred to as simply Sputnik, was the first artificial Earth satellite. It was launched into an elliptical low Earth orbit by the Soviet Union on 4 October 1957 as part of the Soviet space program. It sent a radio signal back to Earth for three weeks before its three silver-zinc batteries became depleted. Aerodynamic drag caused it to fall bac\n[…]\nThe success of Sputnik 1 seemed to have changed minds around the world regarding a shift in power to the Soviets.\n[…]\nBefore work was completed, however, the Soviet Union launched a second satellite, Sputnik 2, on 3 November 1957. Meanwhile, the televised failure of Vanguard TV-3 on 6 December 1957 deepened American dismay over the country's position in the Space Race. The Americans took a more aggressive stance in the emerging space race, resulting in an emphasis on science and technological research, and reforms in many areas from the military to education systems.\n[…]\nInitially, U.S. President Dwight Eisenhower was not surprised by Sputnik 1. He had been forewarned of the R-7's capabilities by information derived from U-2 spy plane overflight photos, as well as signals and telemetry intercepts. General James M. Gavin wrote in 1958 that he had predicted to the Army Scientific Advisory Panel on 12 September 1957 that the Soviets would launch a satellite within 30 days, and that on 4 October he and Wernher von Braun had agreed that a launch was imminent.\n[…]\nThe Sputnik 1 EMC/EMI is a class of full-scale laboratory models of the satellite. The models, manufactured by OKB-1 and NII-885 (headed by Mikhail Ryazansky), were introduced on 15 February 1957. They were made to test ground electromagnetic compatibility (EMC) and electromagnetic interference (EMI).\n[…]\nDocuments related to Sputnik 1 and the Space Race at the Dwight D. Eisenhower Presidential Library\n[…]\nNASA on Sputnik 1"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sputnik-1",
        "situacao": "ok",
        "texto": "Sputnik-1 (em russo: Спутник-1), inicialmente batizado Iskusstvenni Sputnik Zemli (em russo: Искусственный спутник Земли, trad.: Satélite Artificial da Terra ou Companheiro Viajante Artificial da Terra) e aportuguesado Esputinique-1, foi o primeiro satélite artificial, isto é, o primeiro objeto posto pela humanidade em órbita ao redor de um corpo celeste, no caso a Terra.\n[…]\nDesignado nos meios militares soviéticos Satélite Elementar-1 (em russo: Простейший Спутник-1; romaniz.: Prosteishii Sputnik-1) e pela sigla PS-1 (em russo: ПС-1), externamente o Sputnik-1 era uma esfera de metal polido de 58 centímetros de diâmetro, com quatro antenas para transmissão de sinais de rádio. Ele foi posicionado em uma órbita elíptica relativamente baixa, na qual viajou a cerca de 29 mil quilômetros por hora, levando 96,2 minutos para concluir cada volta ao redor do planeta.\n[…]\nCerca de um mês depois do seu lançamento os soviéticos inovaram novamente com o Sputnik-2 e a cadela Laika, sendo seguidos pelo lançamento do Explorer 1 pelos estadunidenses no final de janeiro de 1958.\n[…]\nO satélite, uma pequena esfera polida, tinha brilho aparente de sexta magnitude, e, portanto, quase não era visível. Contudo, as frequências em que o Sputnik-1 emitia ondas de rádio não apenas permitiam o seu recebimento por equipamentos amadores existentes à época, mas também permitiam aos operadores sintonizarem facilmente as suas faixas de frequência. Em consonância, o governo soviético manifestou-se publicamente, convidando a todos a gravarem em fita o sinal transmitido pelo satélite.\n[…]\nQuase ao mesmo tempo, instalações militares americanas na Alemanha Ocidental captaram e gravaram os sinais do satélite, e em 5 de outubro um laboratório militar capturou gravações do Sputnik-1 durante quatro travessias sobre o território dos Estados Unidos.\n[…]\nSalyut 1\n[…]\nLunokhod 1",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Telescópio Espacial James Webb",
      "descricao": "Telescópio espacial infravermelho da NASA, ESA e CSA, lançado em 2021, com espelho primário de segmentos hexagonais dourados."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O espelho principal do telescópio espacial James Webb, lançado em 2021, é formado por quantos segmentos em forma de hexágono?",
    "resposta": "18",
    "distratores": [
      "6",
      "12",
      "36"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/James_Webb_Space_Telescope"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/James_Webb_Space_Telescope",
        "situacao": "ok",
        "texto": "The James Webb Space Telescope (JWST) is a space telescope designed to conduct infrared astronomy. It is the largest telescope in space, and is equipped with high-resolution and high-sensitivity instruments, allowing it to view objects too old, distant, or faint for the Hubble Space Telescope.\n[…]\nWebb's primary mirror consists of 18 hexagonal mirror segments made of gold-plated beryllium, which together create a 6.5-meter-diameter (21 ft) mirror, compared with Hubble's 2.4 m (7 ft 10 in). This gives Webb a light-collecting area of about 25 m2 (270 sq ft), about six times that of Hubble.\n[…]\nThe mass of the James Webb Space Telescope (JWST) is about half that of the Hubble Space Telescope. Webb has a 6.5-meter-diameter (21-foot) gold-coated beryllium primary mirror made up of 18 separate hexagonal mirrors. The mirror has a polished area of 26.3 m2 (283 ft2), of which 0.9 m2 (9.7 ft2) is obscured by the secondary support struts, giving a total collecting area of 25.4 m2 (273 ft2).\n[…]\nWebb's primary mirror is a 6.5 m (21 ft)-diameter gold-coated beryllium reflector with a collecting area of 25.4 m2 (273 sq ft). If it had been designed as a single, large mirror, it would have been too large for existing launch vehicles. The mirror is therefore composed of 18 hexagonal segments (a technique pioneered by Guido Horn d'Arturo), which unfolded after the telescope was launched.\n[…]\nMirror alignment requires each of the 18 mirror segments and the secondary mirror to be positioned to within 50 nanometers. NASA compares the accuracy needed by analogy: \"If the Webb primary mirror were the size of the United States, each [mirror] segment would be the size of Texas, and the team would need to line the height of those Texas-sized segments up with each other to an accuracy of about 1.5 inches\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Telesc%C3%B3pio_Espacial_James_Webb",
        "situacao": "ok",
        "texto": "O Telescópio Espacial James Webb (em inglês James Webb Space Telescope, JWST) é um telescópio espacial desenvolvido em conjunto pela NASA, a ESA e a CSA, com a finalidade de colocar no espaço um observatório para captar a radiação infravermelha. O telescópio pode observar a formação das primeiras galáxias e estrelas, estudar a evolução das galáxias e ver os processos de formação das estrelas e dos\n[…]\nO James Webb foi lançado em 25 de dezembro de 2021 a partir do Centro Espacial de Kourou, na Guiana Francesa. No dia 24 de janeiro de 2022, chegou ao seu destino, o ponto de Lagrange L2. Seu primeiro alvo foi a estrela HD 84406, situada a aproximadamente 241 anos-luz da Terra.\n[…]\nNo entanto, as imagens iniciais produzidas não serão diretamente usadas para estudos científicos, já que estarão desfocadas e servirão apenas para auxiliar no alinhamento dos 18 segmentos hexagonais do espelho primário do telescópio. A publicação das primeiras imagens científicas coloridas e com espectroscopia foi realizada no dia 12 de julho de 2022.\n[…]\nO Telescópio Espacial James Webb tem quatro objetivos principais:\n[…]\nEm 2002, o projeto foi renomeado em homenagem ao segundo administrador da NASA (1961–1968) James E. Webb. Webb liderou a agência durante o programa Apollo e estabeleceu a pesquisa científica como uma atividade central da NASA. Em 2003, a NASA concedeu à TRW o contrato principal de US$ 824,8 milhões para o JWST.\n[…]\nAté julho de 2022, o Telescópio foi atingido por pelo menos 19 pequenas rochas espaciais, incluindo uma grande que deixou danos visíveis em um dos 18 espelhos do telescópio.\n[…]\nNo dia 11 de julho de 2022 a NASA apresentou a primeira imagem de campo profundo tirada pelo James Webb. O presidente americano Joe Biden revelou a imagem por meio de uma transmissão conjunta entre a Casa Branca a Agência Espacial Americana.\n[…]\n«Site da NASA sobre a sonda James Webb Space Telescope» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Bertha Benz",
      "descricao": "Empresária alemã (1849–1944), esposa de Karl Benz, que fez em 1888 a primeira viagem longa de automóvel."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 1888, Bertha Benz dirigiu o automóvel do marido de Mannheim até Pforzheim, na Alemanha. Essa viagem pioneira teve cerca de quantos quilômetros?",
    "resposta": "Cerca de 100 km",
    "distratores": [
      "Cerca de 10 km",
      "Cerca de 500 km",
      "Cerca de 1.000 km"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bertha_Benz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bertha_Benz",
        "situacao": "ok",
        "texto": "Bertha Benz (German: [ˈbɛʁta ˈbɛnts] ; née Cäcilie Bertha Ringer; 3 May 1849 – 5 May 1944) was a German automotive pioneer. She was the business partner, investor and wife of automobile inventor Carl Benz. On 5 August 1888, she became the first person to drive an internal-combustion-engined automobile over a long distance, field testing the Benz Patent-Motorwagen, inventing brake lining and solvin\n[…]\nOn 20 July 1872, Bertha Ringer married Carl Benz at the St. Michael's Lutheran Castle Church in Pforzheim.\n[…]\nOn 3 July 1886, Karl Benz presented the Patent-Motorwagen automobile to the public in Mannheim. It had powered rear wheels with a ringed steel and solid rubber, steerable front wheel and optional seat arrangements and a folding top. Karl Benz was a poor marketer and faced competition by Gottlieb Daimler, which prompted his wife to undertake the test drive in 1888.\n[…]\nOn 5 August 1888, 39-year-old Bertha Benz drove from Mannheim to Pforzheim with her sons Richard and Eugen, thirteen and fifteen years old respectively, in a Model III, without telling her husband and without permission of the authorities, thus becoming the first person to drive an  internal-combustion-engined automobile a significant distance. Before this historic trip, motorized drives were merely very short trials, returning to the point of origin, made with assistance of mechanics.\n[…]\nIn 2008, the Bertha Benz Memorial Route was officially approved as a route of the industrial heritage of humankind, because it follows Bertha Benz's path during the world's first long-distance journey by automobile in 1888. Now it is possible to follow the 194 km of signs indicating her route from Mannheim via Heidelberg to Pforzheim (Black Forest) and back.\n[…]\nThe motto is Bertha Benz Challenge – Sustainable Mobility on the World's Oldest Automobile Road!\n[…]\nBertha Benz Memorial Route\n[…]\nAutomuseum Dr. Carl Benz, 2018."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bertha_Benz",
        "situacao": "ok",
        "texto": "Bertha Benz, nascida Bertha Ringer (Pforzheim, 3 de maio de 1849 — Ladenburg, 5 de maio de 1944) foi uma das pioneiras do automóvel. Em 5 de agosto de 1888 ela foi a primeira pessoa na história a dirigir um automóvel a uma longa distância. Ao fazer isso, Bertha trouxe a atenção do mundo todo para o Benz Patent-Motorwagen, primeiro automóvel do mundo, iniciando as vendas da companhia.\n[…]\nEm 5 de agosto de 1888, aos 39 anos, Bertha dirigiu de Mannheim até Pforzheim, junto de seus filhos Richard e Eugen, de 13 e 15 anos de idade, em um Modelo III, sem contar ao marido e sem nenhuma permissão das autoridades, tornando-se a primeira pessoa a dirigir um automóvel a uma longa distância, ainda que ilegalmente. Antes desta viagem histórica, os carros motorizados eram conduzidos a curtas distâncias, retornando ao ponto de partida e muitas vezes com a ajuda de um mecânico.\n[…]\nSeguindo as marcas das carroças, esta pioneira viagem cobriu 106 km entre uma cidade e outra. Apesar de o motivo da viagem fosse para visitar sua mãe, Bertha tinha outros motivos: provar ao seu marido, que não conseguiu fazer propaganda de sua invenção, de que o invento no qual eles tanto investiram poderia se tornar um sucesso comercial uma vez que se mostrasse útil ao grande público. Além disso, ela esperava que Karl ganhasse a confiança necessária para continuar seu trabalho.\n[…]\nBertha chegou a Pforzheim pouco antes do pôr do sol, mandando um telegrama ao marido, avisando sobre a viagem bem-sucedida. Ela voltou dirigindo para Pforzheim dias depois.\n[…]\nSua viagem mostrou que os test-drives na indústria automobilística eram essenciais para o negócio e para a segurança dos passageiros.\n[…]\nBenz Patent-Motorwagen\n[…]\nBertha Benz Memorial Route (Mannheim-Pforzheim-Mannheim)\n[…]\nProf. John H. Lienhard on Bertha Benz's ride\n[…]\nE nasce o carro – documentário que conta os eventos cronologicamente da jornada de Bertha com o Modelo III",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Irmãos Montgolfier",
      "descricao": "Joseph-Michel e Jacques-Étienne Montgolfier, franceses que criaram o balão de ar quente em 1783."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em novembro de 1783, dois homens fizeram em Paris o primeiro voo tripulado livre, num balão dos irmãos Montgolfier. Cerca de quanto tempo ele durou?",
    "resposta": "25 minutos",
    "distratores": [
      "Dois minutos",
      "Três horas",
      "Dez horas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Montgolfier_brothers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Montgolfier_brothers",
        "situacao": "ok",
        "texto": "The Montgolfier brothers – Joseph-Michel Montgolfier (French: [ʒozɛf miʃɛl mɔ̃ɡɔlfje]; 26 August 1740 – 26 June 1810) and Jacques-Étienne Montgolfier ([ʒak etjɛn mɔ̃ɡɔlfje]; 6 January 1745 – 2 August 1799) – were aviation pioneers, balloonists and paper manufacturers from Annonay in Ardèche, France. They invented the Montgolfière-style hot air balloon, Globe aérostatique, which launched the first \n[…]\nÉtienne Montgolfier was the first human to lift off the Earth in a balloon, making a tethered test flight from the yard of the Réveillon workshop in the Faubourg Saint-Antoine, most likely on 15 October 1783. A little while later on that same day, physicist Pilâtre de Rozier became the second to ascend into the air, to an altitude of 25 metres (82 ft), which was the length of the tether.\n[…]\nOn 21 November 1783, the first free flight by humans was made by Pilâtre de Rozier, together with an army officer, the marquis d'Arlandes. The flight began from the grounds of the Château de la Muette close to the Bois de Boulogne park in the western outskirts of Paris. They flew about 900 metres (3,000 ft) above Paris for a distance of nine kilometers. After 25 minutes, the balloon landed between the windmills, outside the city ramparts, on the Butte-aux-Cailles.\n[…]\nIn December 1783, father Pierre Montgolfier was elevated to the nobility and the hereditary appellation of de Montgolfier by King Louis XVI.\n[…]\nOn 1 December 1783, a few months after the Montgolfiers' first flight, Jacques Alexandre César Charles rose to an altitude of about 3 km (1.9 mi) near Paris in a hydrogen-filled balloon he had developed.\n[…]\nIn 1983, the Montgolfier brothers were inducted into the International Air & Space Hall of Fame at the San Diego Air & Space Museum.\n[…]\nAdélaïde de Montgolfier\n[…]\n\"Lighter than air: the Montgolfier brothers\"\n[…]\n\"Balloons and the Montgolfier brothers\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Irm%C3%A3os_Montgolfier",
        "situacao": "ok",
        "texto": "Os Irmãos Montgolfier: Joseph-Michel (Annonay, 26 de agosto de 1740 — Balaruc-les-Bains, 26 de junho de 1810) e Jacques-Étienne (Annonay, 6 de janeiro de 1745 — Neuchâtel, 2 de agosto de 1799), foram dois irmãos inventores franceses, que construíram o primeiro balão tripulado do Mundo, que elevou Étienne aos céus em 5 de junho de 1783.\n[…]\nNo dia 5 de junho de 1783, eles fizeram a sua demonstração pública desse balão em Annonay na presença de um grupo de dignitários do États particuliers. O seu voo se estendeu por 2 km, durou cerca de 10 minutos e atingiu uma altitude estimada de 1,6 mil a 2 mil metros. As notícias desse sucesso chegaram rapidamente à Paris. Étienne foi para a capital para fazer mais demonstrações e solidificar a reivindicação da \"invenção do voo\".\n[…]\nNa semana seguinte, em 19 de setembro de 1783, em frente ao Palácio de Versalhes perante um público que incluiu o Rei Luis XVI e a Rainha Maria Antonieta, o Aérostat Réveillon voou com os primeiros seres vivos a bordo: uma ovelha, um pato e um galo (apesar de o Rei ter proposto enviar dois criminosos). Este voo durou cerca de 8 minutos, se estendeu por 3 km chegando a cerca de 460 m de altitude e pousando em segurança.\n[…]\nEm 21 de novembro de 1783, ocorreu o primeiro voo livre de seres humanos num balão, executado por Pilâtre juntamente com o oficial do exército, marquês d'Arlandes. O voo partiu das terras do castelo de la Muette (perto do parque Bois de Boulogne), lado Oeste de Paris. Eles voaram por 9 km a cerca de 910 m acima de Paris, depois de 25 minutos, o aparelho pousou entre os moinhos de Butte-aux-Cailles, tendo o voo sido abreviado por um princípio de incêndio no tecido que recobria o balão.\n[…]\nBalão\n[…]\nPierre-Louis Clément, Les Montgolfières : Leur invention, leur évolution du XVIIIe à nos jours, 1982, Paris.\n[…]\nMusée des papeteries Canson et Montgolfier",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Alfred Nobel",
      "descricao": "Químico e industrial sueco (1833–1896), inventor da dinamite e criador do Prêmio Nobel."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Além da dinamite, o químico sueco Alfred Nobel registrou muitas outras invenções. Ao longo da vida, ele teve cerca de quantas patentes?",
    "resposta": "Cerca de 350",
    "distratores": [
      "Cerca de 15",
      "Cerca de 90",
      "Cerca de 1.000"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alfred_Nobel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alfred_Nobel",
        "situacao": "ok",
        "texto": "Alfred Bernhard Nobel ( noh-BEL; Swedish: [ˈǎlːfrɛd nʊˈbɛlː] ; 21 October 1833 – 10 December 1896) was a Swedish chemist, inventor, engineer, and businessman. Nobel is known for inventing dynamite, as well as having bequeathed his fortune to establish the Nobel Prizes. He worked on various important contributions and inventions to science, holding 355 patents during his life.\n[…]\nNobel's most famous invention, dynamite, was an explosive made using nitroglycerin, which was patented in 1867. He further invented gelignite in 1875 and ballistite in 1887.\n[…]\nThis request added to the controversy over whether the Bank of Sweden Prize in Economic Sciences in Memory of Alfred Nobel is actually a legitimate \"Nobel Prize\".\n[…]\nThe Monument to Alfred Nobel (Russian: Памятник Альфреду Нобелю, 59.960787°N 30.334905°E﻿ / 59.960787; 30.334905) stands in Saint Petersburg along the Bolshaya Nevka River on the Petrogradskaya Embankment, the street where Nobel's family lived until 1859. It was dedicated in 1991 to mark the 90th anniversary of the first Nobel Prize presentation.\n[…]\nEvlanoff, M. and Fluor, M. Alfred Nobel – The Loneliest Millionaire. Los Angeles, Ward Ritchie Press, 1969.\n[…]\nJorpes, J. E. (3 January 1959). \"Alfred Nobel\". BMJ. 1 (5113): 1–6. doi:10.1136/bmj.1.5113.1. PMC 1992347. PMID 13608066.\n[…]\nSchück, H, and Sohlman, R., (1929). The Life of Alfred Nobel, transl. Brian Lunn, London: William Heineman Ltd.\n[…]\nSohlman, R. The Legacy of Alfred Nobel, transl. Schubert E. London: The Bodley Head, 1983 (Swedish original, Ett Testamente, published in 1950).\n[…]\nAlfred Nobel US Patent No 78,317, dated 26 May 1868\n[…]\nThe Man Behind the Prize – Alfred Nobel\n[…]\nBiography at the Norwegian Nobel Institute\n[…]\nNewspaper clippings about Alfred Nobel in the 20th Century Press Archives of the ZBW\n[…]\nWorks by or about Alfred Nobel at the Internet Archive\n[…]\nAlfred Nobel and his unknown coworker"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfred_Nobel",
        "situacao": "ok",
        "texto": "Alfred Bernhard Nobel ([noʊˈbɛl] noh-BEL; Sueco: [ˈǎlːfrɛd nʊˈbɛlː] (); 21 de outubro de 1833 – 10 de dezembro de 1896) foi um químico, inventor, engenheiro e empresário sueco. Nobel é conhecido por inventar a dinamite, bem como por ter legado sua fortuna para estabelecer os Prêmios Nobel. Ele trabalhou em várias contribuições e invenções importantes para a ciência, detendo 355 patentes durante su\n[…]\nAlfred Nobel nasceu em Estocolmo, na Suécia, em 21 de outubro de 1833. Ele era o terceiro filho de Immanuel Nobel (1801–1872), um inventor e engenheiro, e Andriette Nobel (nascida Ahlsell; 1805–1889). O casal se casou em 1827 e teve oito filhos. A família era empobrecida, e apenas Alfred e seus três irmãos sobreviveram além da infância. Por meio de seu pai, Alfred Nobel era descendente do cientista sueco Olaus Rudbeck (1630–1702).\n[…]\nNobel mais tarde combinou nitroglicerina com vários compostos de nitrocelulose, semelhantes ao colódio, mas optou por uma receita mais eficiente combinando outro explosivo nitrato, e obteve uma substância transparente e gelatinosa, que era um explosivo mais potente que a dinamite. A gelignite, ou gelatina explosiva, como foi chamada, foi patenteada em 1876; e foi seguida por uma série de combinações semelhantes, modificadas pela adição de nitrato de potássio e várias outras substâncias.\n[…]\nNobel também exibiu características de chauvinismo nas cartas a Hess, escrevendo, entre outras coisas: \"Você não trabalha, nem escreve, nem lê, nem pensa\", e disse a ela que ela tinha um \"cérebro microscópico\", além de tentar fazê-la se sentir culpada por sua atenção, escrevendo: \"Sacrifiquei [a você] minha vida intelectual, minha reputação, que sempre se baseia em nossa associação com os outros, toda a minha interação com o mundo culto.\"\n[…]\nAlfred Nobel US Patent No 78,317, dated 26 May 1868\n[…]\nThe Man Behind the Prize – Alfred Nobel\n[…]\nAlfred Nobel and his unknown coworker",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Benjamin Franklin",
      "descricao": "Polímata, estadista e inventor americano, um dos pais fundadores dos Estados Unidos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O rosto do inventor do para-raios, Benjamin Franklin, estampa a cédula americana de que valor?",
    "resposta": "Cem dólares",
    "distratores": [
      "Um dólar",
      "Vinte dólares",
      "Cinquenta dólares"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/United_States_one-hundred-dollar_bill"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/United_States_one-hundred-dollar_bill",
        "situacao": "ok",
        "texto": "The United States one-hundred-dollar bill (US$100) is a denomination of United States currency. The first United States Note with this value was issued in 1862, and the Federal Reserve Note version was first produced in 1914. Inventor and U.S. Founding Father Benjamin Franklin has been featured on the obverse of the bill since 1914, which now also contains stylized images of the Declaration of Ind\n[…]\n1914: The first $100 Federal Reserve Note was issued with a portrait of Benjamin Franklin on the obverse and allegorical figures representing labor, plenty, America, peace, and commerce on the reverse.\n[…]\n1929: Under the Series of 1928, all U.S. currency was changed to its current size and began to carry a standardized design. All variations of the $100 bill would carry the same portrait of Benjamin Franklin, same border design on the obverse, and the same reverse with a vignette of Independence Hall. The $100 bill was issued as a Federal Reserve Note with a green seal and serial numbers and as a Gold Certificate with a golden seal and serial numbers.\n[…]\nIn addition to design changes introduced in 1996, the obverse features the brown quill that was used to sign the Declaration of Independence; faint phrases from the Declaration of Independence; the Syng inkstand's inkwell; a bell within the inkwell's image that appears and disappears depending on the angle at which the bill is viewed using optically variable ink (OVI) and changes from copper to green; teal background color; a borderless portrait of Benjamin Franklin; a blue \"3D security ribbon\" (trademarked \"Motion\" by Crane Currency) on which images of Liberty Bells shift into numerical designations of '100' as the note is tilted; and to the left of Franklin, small yellow '100's whose zeros form the EURion constellation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A9dula_de_cem_d%C3%B3lares_dos_Estados_Unidos",
        "situacao": "ok",
        "texto": "A nota de cem dólares dos Estados Unidos (US$100) é a maior denominação atual do dólar americano. O anverso apresenta um retrato de Benjamin Franklin, o político, cientista e inventor americano, e o verso mostra uma imagem do Independence Hall. É a nota de valor mais elevado em circulação nos Estados Unidos desde 1969, altura em que foram retiradas as notas de 500, 1.000, 5.000 e 100.000 dólares.\n[…]\n1914: A primeira nota de 100 dólares da Reserva Federal foi emitida com um retrato de Benjamin Franklin no anverso e figuras alegóricas representando o trabalho, a abundância, a América, a paz e o comércio no reverso.\n[…]\n1929: Ao abrigo da Lei da Série de 1928, as notas dos Estados Unidos foi alterada para o seu tamanho atual, menores, e começou a apresentar um desenho normalizado. Todas as versões da nota de 100 dólares apresentavam o mesmo retrato de Benjamin Franklin no anverso e o mesmo desenho de rebordo no verso, com um desenho do Independence Hall, o famoso monumento situado em Filadélfia.\n[…]\n1963: Uma vez que as notas de dólar deixaram de poder ser trocadas pelo seu valor em prata, a nota de 100 dólares da Série 1963A começou a ter a frase: PAYABLE TO THE HOLDER retirada do anverso e substituída pela frase atual: THIS BILL IS LEGAL CURRENCY WHETHER FOR PUBLIC OR PRIVATE DEBT. Além disso, o lema nacional dos Estados Unidos (IN GOD WE TRUST) foi acrescentado ao verso.\n[…]\nAs Notas de 100 dólares dos Estados Unidos foram impressas pela última vez em 1969 e emitidas pela última vez em 1971.\n[…]\nOs novos elementos de segurança incluíam uma marca d'água de Franklin no lado direito da nota, tinta opticamente variável que mudava de verde para preto quando vista de diferentes ângulos no canto inferior direito da nota de 100 dólares, um retrato de Franklin ampliado e diferente, e uma impressão de linhas finas difícil de reproduzir à volta do retrato de Franklin e do Independence Hall.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Decibel",
      "descricao": "Unidade logarítmica usada para medir a intensidade de sons, um décimo do bel."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O decibel, unidade usada para medir a intensidade dos sons, tem esse nome em homenagem a que inventor?",
    "resposta": "Alexander Graham Bell",
    "distratores": [
      "Thomas Edison",
      "Heinrich Hertz",
      "Emile Berliner"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Decibel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Decibel",
        "situacao": "ok",
        "texto": "The decibel (symbol: dB) is a relative unit of measurement equal to one tenth of a bel (B). It expresses the ratio of two values of a power or root-power quantity on a logarithmic scale. Two signals whose levels differ by one decibel have a power ratio of 101/10 (approximately 1.26) or root-power ratio of 101/20 (approximately 1.12).\n[…]\nThe definition of the decibel originated in the measurement of transmission loss and power in telephony of the early 20th century in the Bell System in the United States. The bel was named in honor of Alexander Graham Bell, but the bel is seldom used. Instead, the decibel is used for a wide variety of measurements in science and engineering, most prominently for sound power in acoustics, in electronics and control theory.\n[…]\nIn 1924, Bell Telephone Laboratories received a favorable response to a new unit definition among members of the International Advisory Committee on Long Distance Telephony in Europe and replaced the MSC with the Transmission Unit (TU). 1 TU was defined such that the number of TUs was ten times the base-10 logarithm of the ratio of measured power to a reference power. The definition was conveniently chosen such that 1 TU approximated 1 MSC; specifically, 1.056 MSC was 1 TU.\n[…]\nIn 1928, the Bell system renamed the TU as the decibel, being one tenth of a newly defined unit for the base-10 logarithm of the power ratio. It was named the bel, in honor of the telecommunications pioneer Alexander Graham Bell. The bel is seldom used, as the decibel was the proposed working unit.\n[…]\nThe original choice of the decibel over the bel as a log unit of change of intensity is because a single change in a property of sound which is below the just-noticeable difference (JND) does not affect perception of the sound. For amplitude, the JND for humans is around 1 dB."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Decibel",
        "situacao": "ok",
        "texto": "O decibel (símbolo: dB) é uma unidade de medida relativa, adimensional, correspondente à décima parte de um bel (símbolo: B), que expressa o rácio de uma grandeza física (geralmente energia ou intensidade) em relação a um nível de referência especificado ou implícito, expressa numa escala logarítmica de base 10 (log10). Um valor em dB expressa a relação entre dois valores de um nível de potência o\n[…]\nO bel (símbolo: B) é uma unidade de medida adimensional, que compara a intensidade de um sinal a um nível de referência. Recebe este nome em homenagem ao físico Alexander Graham Bell. O cálculo é mais frequente em decibel.\n[…]\nA definição do decibel originou-se na medição da perda de transmissão e potência na telefonia do início do século XX no Bell System dos Estados Unidos. O bel foi assim designado em homenagem a Alexander Graham Bell, mas o bel raramente é usado. Em vez disso, o decibel é usado para uma ampla variedade de medições em ciência e engenharia, mais frequentemente em acústica, eletrónica e teoria de controlo.\n[…]\nO nome da nova unidade é uma homenagem ao pioneiro das telecomunicações Alexander Graham Bell. Dada a sua maior adequação aos valores geralmente medidos, o decibel foi a unidade de trabalho proposta, sendo por isso o bel raramente usado.\n[…]\nO bel (símbolo B) é uma unidade de medida de razões. Ele é principalmente usado nas telecomunicações, eletrônica, e acústica. Foi inventado por engenheiros do Bell Labs para quantificar a redução no nível acústico sobre um cabo telefônico padrão com 1 milha de comprimento. Originalmente era chamado de unidade de transmissão ou TU, mas foi renomeado entre 1923 e 1924 em homenagem ao fundador do laboratório Alexander Graham Bell.\n[…]\nI = intensidade acústica\n[…]\nConversão de unidades de nível sonoro: dBSPL ou dBA para pressão sonora p e intensidade sonora J\n[…]\nTrabalhando com Decibéis (Sinal de RF e intensidades de campo)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "14-bis",
      "descricao": "Avião de Alberto Santos-Dumont que voou em Paris em 1906."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Por que o avião com que Santos-Dumont voou em Paris, em 1906, recebeu o nome de 14-bis?",
    "resposta": "Foi testado no dirigível 14",
    "distratores": [
      "Voou num dia 14",
      "Media catorze metros",
      "Seu décimo quarto avião"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/14-bis",
      "https://en.wikipedia.org/wiki/14-bis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/14-bis",
        "situacao": "ok",
        "texto": "14-bis, também conhecido como Oiseau de Proie (francês para “ave de rapina”), foi um avião construído pelo inventor brasileiro Alberto Santos Dumont que em 12 de novembro de 1906 conquistou o Prêmio Archdeacon e o Prêmio do Aeroclube da França ao realizar um voo de 220 metros em Paris.\n[…]\nA concepção do 14-bis é uma síntese de ideias. Sua estrutura celular de biplano foi diretamente inspirada nas pipas-caixa (box kites) do inventor australiano Lawrence Hargrave, conhecidas por sua notável estabilidade aerodinâmica. O nome \"14-bis\" (ou \"14-de novo\") surgiu de sua concepção inicial. Santos Dumont primeiro testou o aeroplano acoplado ao seu dirigível Nº 14 em meados de 1906.\n[…]\nA ideia era que o balão, preenchido com hidrogênio, compensasse o peso da máquina, facilitando os testes de controle e estabilidade. A aeronave era, literalmente, um \"anexo\" do dirigível 14. No entanto, o enorme arrasto aerodinâmico do balão impedia que o avião ganhasse velocidade, tornando o sistema inviável para o voo autônomo.\n[…]\nA jornada do 14-bis até o voo foi uma série de testes públicos, erros e modificações rápidas.\n[…]\nPrimeiros Saltos (Agosto-Setembro de 1906): Após abandonar o balão Nº 14, Santos Dumont realizou os primeiros testes no solo em Bagatelle. Em 13 de setembro, com o motor de 24 hp, conseguiu um \"salto\" de 7 a 11 metros, que terminou com o trem de pouso danificado. Ele então instalou o motor mais potente de 50 hp e rebatizou a aeronave de Oiseau de Proie.\n[…]\nCerimônia de Abertura das Olimpíadas Rio 2016: O 14-bis teve um papel de destaque na Cerimônia de abertura dos Jogos Olímpicos de Verão de 2016, com uma réplica \"voando\" sobre o estádio do Maracanã em uma homenagem a Santos Dumont como um dos grandes inventores do Brasil.\n[…]\nVoo da réplica do 14-bis em Brasília (2006) no YouTube"
      },
      {
        "url": "https://en.wikipedia.org/wiki/14-bis",
        "situacao": "ok",
        "texto": "The 14-bis (French: Quatorze-bis; (Portuguese: Quatorze-bis; English: Fourteen-again, approximating \"14B\"), also known as Oiseau de proie (\"bird of prey\" in French), was a pioneer era, canard-style biplane designed and built by Brazilian aviation pioneer Alberto Santos-Dumont. In 1906, near Paris, the 14-bis made a manned powered flight that was the first to be publicly witnessed by a crowd and al\n[…]\nThe first trials of the aircraft were made on 22 July 1906 at Santos-Dumont's grounds at Neuilly, where it had been assembled. In order to simulate flight conditions, Santos-Dumont attached the aircraft under his latest non-rigid airship, the Number 14, which is why the aircraft came to be known as the \"14-bis\". The aircraft was then transported to the grounds of the Château de Bagatelle in the Bois de Boulogne, where there was more space.\n[…]\nOn the morning of 12 November 1906 the aviation community of France assembled at the Château de Bagatelle's grounds to witness Santos-Dumont's next attempt. As Santos-Dumont allowed the 14-bis to run down the field, a car drove alongside, from which Henry Farman dropped a plate each time he observed the wheels of the aircraft leave the ground or touch down again.\n[…]\nThe Santos-Dumont 14-bis did not use a catapult and ran on wheels located at the back of the aircraft – said to have been adopted by Santos-Dumont for his 14-bis after personally witnessing Traian Vuia's contemporary, four-wheeled aircraft's flight attempts earlier in 1906 in the western suburbs of Paris, not far from the Château de Bagatelle's grounds – with a \"nose-skid\" under the front of the 14-bis' fuselage.\n[…]\nBitencourt; Pogorzelski; Freitas; Azevedo (2011). \"A CFD-based Analysis of the 14-Bis Aircraft Aerodynamics and Stability\". J. Aerosp. Technol. Manag. 3 (2): 137–146. doi:10.5028/jatm.2011.03021711.\n[…]\nSantos-dumont.net"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Velcro",
      "descricao": "Fecho de contato com ganchinhos e laçadas, inventado pelo engenheiro suíço George de Mestral."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome velcro, criado pelo suíço George de Mestral, junta duas palavras francesas: velours, que quer dizer veludo, e qual outra?",
    "resposta": "Crochet",
    "distratores": [
      "Croquis",
      "Crêpe",
      "Cordon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Velcro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Velcro",
        "situacao": "ok",
        "texto": "Velcro is a brand of versatile fastening devices, known as hook-and-loop fasteners, hook-and-pile fasteners, or touch fasteners, that allow two surfaces to be repeatedly attached and detached with ease. A trademark of Velcro Companies, the brand name is often used generically to refer to this type of fastener. Invented in the mid-20th century, it is widely used in clothing, accessories, and variou\n[…]\nThe original hook-and-loop fastener was conceived in 1941 by Swiss engineer George de Mestral, which he named velcro. The word Velcro is a portmanteau of two French words: \"velours\" meaning velvet, and \"crochet\" meaning hook. The idea came to him one day after he returned from a hunting trip with his dog in the Alps. He took a close look at the burs of burdock that kept sticking to his clothes and his dog's fur.\n[…]\nVelcro Corporation products were displayed at a fashion show at the Waldorf-Astoria hotel in New York in 1959, and the fabric got its first break when it was used in the aerospace industry to help astronauts maneuver in and out of bulky space suits. However, this use reinforced the view among the populace that hook-and-loop was something with very limited utilitarian uses.\n[…]\nVelcro jumping is a game where people wearing hook-covered suits take a running jump and hurl themselves as high as possible at a loop-covered wall. The wall is inflated, and looks similar to other inflatable structures. It is not necessarily completely covered in the material—often there will be vertical strips of hooks. Sometimes, instead of a running jump, people use a small trampoline.\n[…]\n2002 – The Star Trek: Enterprise episode \"Carbon Creek\" portrays Velcro as being introduced to human society by Vulcans in 1957. One of the Vulcans in the episode is named \"Mestral\", after the fastener's actual inventor and founder of the brand.\n[…]\nMedia related to Hook-and-loop fasteners at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Kodak",
      "descricao": "Empresa americana de fotografia fundada por George Eastman, que lançou em 1888 a primeira câmera Kodak."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "George Eastman inventou o nome Kodak, que não significa nada, em parte por gostar muito de uma letra do alfabeto. Qual letra?",
    "resposta": "K",
    "distratores": [
      "D",
      "O",
      "A"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kodak"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kodak",
        "situacao": "ok",
        "texto": "The Eastman Kodak Company, referred to simply as Kodak ( ), is an American public company that produces various products related to its historic roots in film photography. The company is headquartered in Rochester, New York, and is incorporated in New Jersey. It is best known for photographic film products, which it brought to a mass market for the first time.\n[…]\nKodak was hard-hit by the Great Depression, although Rochester was spared from its worst effects as banks were able to remain solvent. Seventeen percent of the company's employees were laid off between 1929 and 1933. Company founder George Eastman committed suicide at his home on March 14, 1932, due to his declining health. From 1931 to 1936, Kodak participated in the Rochester Plan, a privately funded unemployment insurance program to assist the jobless and boost consumer spending.\n[…]\nKodak's involvement in document imaging technology began when George Eastman partnered with banks to image checks in the 1920s. Kodak subsidiary Recordak was founded in 1928 to manufacture some of the first microfilm. Kodak acquired the Bowe Bell & Howell scanner division in 2009. The Document Imaging division was transferred to Kodak Alaris in 2013.\n[…]\nKodak encountered several challenges from rival patents for film and cameras. These began while Eastman was still developing his first camera, when he was forced to pay inventor David Houston for a license to his pre-existing patents. A major lawsuit for patent infringement would come from rival film producer Ansco. Inventor Hannibal Goodwin had filed his own patent for nitrocellulose film in 1887, before the one owned by Kodak, but his was initially denied by the patent office.\n[…]\nBrayer, Elizabeth (1996). George Eastman : a biography. Baltimore: Johns Hopkins University Press. ISBN 978-1580464246.\n[…]\nEastman Kodak. Story of the Kodak Camera (1948)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kodak",
        "situacao": "ok",
        "texto": "A Eastman Kodak Company (referida simplesmente como Kodak) é uma companhia americana que produz vários produtos relacionados com a sua base histórica no analógico fotografia. A empresa está sediada em Rochester, Nova Iorque. A Kodak fornece embalagens, impressão funcional, comunicações gráficas e serviços profissionais para empresas em todo o mundo. Seus principais segmentos de negócios são Sistem\n[…]\nA Kodak foi fundada por George Eastman e Henry A. Strong em 4 de setembro de 1888. O nome foi inventado, a partir de um jogo de palavras cruzadas, ele e sua esposa usaram a letra \"K\", que o parecia ser uma letra forte. Compilaram as outras letras e formaram a palavra que foi patenteada. Durante a maioria do século XX a Kodak manteve uma posição dominante no cinema fotográfico.\n[…]\nComo parte de uma estratégia de recuperação, a Kodak começou a se concentrar em fotografia digital e impressão digital, e tentou gerar receitas por meio de litígios de patentes agressivos.\n[…]\nImagens personalizadas e imagens de documentos agora fazem parte da Kodak Alaris, uma empresa separada de propriedade da Kodak Pension Plan, com sede no Reino Unido.\n[…]\nEmbora a Kodak tenha sido a criadora da primeira câmera fotográfica digital, em 1975, a empresa preferiu continuar a apostar no mercado de fotografia analógica. Apenas em 2003 decidiu entrar com mais força no setor digital, contudo, nesse momento as empresas japonesas já dominavam totalmente o mercado.\n[…]\nEssa demora para ingressar no setor digital praticamente levou a companhia, outrora bilionária, à falência. Como grande parte das receitas da Kodak era proveniente da fabricação de filmes fotográficos, a expansão das câmeras digitais, que ela mesmo havia inventado em 1975, causou súbita redução na demanda por tais filmes, afetando significativamente a economia da empresa.\n[…]\n«Kodak Brasil»\n[…]\n«Kodak Portugal»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Irmãos Lumière",
      "descricao": "Auguste e Louis Lumière, inventores franceses do cinematógrafo e pioneiros das exibições públicas de cinema em 1895."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O sobrenome Lumière, dos irmãos franceses pioneiros do cinema, combina com a invenção deles. O que ele quer dizer em francês?",
    "resposta": "Luz",
    "distratores": [
      "Sombra",
      "Imagem",
      "Lanterna"
    ],
    "fonte": [
      "https://en.wiktionary.org/wiki/lumi%C3%A8re",
      "https://en.wikipedia.org/wiki/Auguste_and_Louis_Lumi%C3%A8re"
    ],
    "trechos": [
      {
        "url": "https://en.wiktionary.org/wiki/lumi%C3%A8re",
        "situacao": "ok",
        "texto": "lumière - Wiktionary, the free dictionary\n[…]\nInherited from Middle French lumiere , from Old French lumiere , from Late Latin lūmināria , plural of neuter lūmināre reinterpreted as a feminine noun, ultimately from Latin lūmen . Doublet of luminaire .\n[…]\nAudio ( France ( Paris ) ) ; “ la lumière ” : ( file )\n[…]\n“ lumière ”, in Trésor de la langue française informatisé [ Digitized Treasury of the French Language ], 2012\n[…]\nRetrieved from \" https://en.wiktionary.org/w/index.php?title=lumière&oldid=92542039 \""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Auguste_and_Louis_Lumi%C3%A8re",
        "situacao": "ok",
        "texto": "The Lumière brothers (UK: , US: ; French: [lymjɛːʁ]), Auguste Marie Louis Nicolas Lumière (19 October 1862 – 10 April 1954) and Louis Jean Lumière (5 October 1864 – 6 June 1948), were French manufacturers of photography equipment, best known for their Cinématographe motion picture system and the short films they produced between 1895 and 1905, which places them among the earliest filmmakers.\n[…]\nThe Lumière brothers were born in Besançon, France, to Charles-Antoine Lumière (1840–1911) and Jeanne Joséphine Costille Lumière, who were married in 1861 and moved to Besançon, setting up a small photographic portrait studio. Here were born Auguste, Louis and their daughter Jeanne. They moved to Lyon in 1870, where their two other daughters were born: Mélina and Francine. Auguste and Louis both attended La Martiniere, the largest technical school in Lyon.\n[…]\nThe date of the recording of their first film is in dispute. In an interview with Georges Sadoul given in 1948, Louis claimed that he shot the film in August 1894—before the arrival of the kinetoscope in France. This is questioned by historians, who consider that a functional Lumière camera did not exist before the beginning of 1895.\n[…]\nLouis died on 6 June 1948, and Auguste on 10 April 1954. They are buried in a family tomb in the New Guillotière Cemetery in Lyon.\n[…]\nThe Lumières went on tour with the cinématographe in 1896, visiting places like Mexico City, Brussels, Bombay, London, Montreal, New York City, Palestine, and Buenos Aires.\n[…]\nKardozi, Karzan (2019). 100 Years of Cinema, 100 Directors, Vol 1: The Lumière Brothers. Xazalnus Publication – via The Moving Silent.\n[…]\nRittaud-Hutinet, Jacques. Le cinéma des origines (in French). Seyssel, France: Champ Vallon, 1985. ISBN 2-903528-43-8.\n[…]\nLouis Lumière at IMDb\n[…]\nAuguste Lumière at IMDb\n[…]\nLouis Lumière at Who's Who of Victorian Cinema\n[…]\nAuguste Lumière at Who's Who of Victorian Cinema"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Auguste_e_Louis_Lumi%C3%A8re",
        "situacao": "ok",
        "texto": "Os irmãos Lumière (em francês: [lymjɛːʁ]), Auguste Marie Louis Nicolas Lumière (19 de outubro de 1862 – 10 de abril de 1954) e Louis Jean Lumière (5 de outubro de 1864 – 6 de junho de 1948), foram fabricantes franceses de equipamentos de fotografia, mais conhecidos por seu sistema de imagens em movimento Cinématographe e pelos curtas-metragens que produziram entre 1895 e 1905, o que os coloca entr\n[…]\nOs irmãos Lumière nasceram em Besançon, França, filhos de Charles-Antoine Lumière (1840–1911) e Jeanne Joséphine Costille Lumière, que se casaram em 1861 e se mudaram para Besançon, estabelecendo um pequeno estúdio de retratos fotográficos. Ali nasceram Auguste, Louis e sua irmã Jeanne. Eles se mudaram para Lyon em 1870, onde nasceram suas outras duas filhas: Mélina e Francine. Auguste e Louis frequentaram La Martiniere, a maior escola técnica de Lyon.\n[…]\nOs irmãos patentearam sua própria versão em 13 de fevereiro de 1895.\n[…]\nOs irmãos Lumière viam o cinema como uma novidade e se retiraram do negócio cinematográfico em 1905. Eles passaram a desenvolver o primeiro processo fotográfico prático em cores, o Autocromo Lumière.\n[…]\nOs irmãos afirmaram que \"o cinema é uma invenção sem futuro\" e se recusaram a vender sua câmera a outros cineastas como Georges Méliès. Isso deixou muitos cineastas chateados. Consequentemente, seu papel na história do cinema foi extremamente breve. Paralelamente ao seu trabalho no cinema, eles experimentaram a fotografia colorida.\n[…]\nChardère, B. Les images des Lumière (em francês). Paris: Gallimard, 1995. ISBN 2-07-011462-7.\n[…]\nKardozi, Karzan (2019). 100 Years of Cinema, 100 Directors, Vol 1: The Lumière Brothers. [S.l.]: Xazalnus Publication  – via The Moving Silent\n[…]\nRittaud-Hutinet, Jacques. Le cinéma des origines (em francês). Seyssel, France: Champ Vallon, 1985. ISBN 2-903528-43-8.\n[…]\nLouis Lumière no IMDb\n[…]\nAuguste Lumière no IMDb\n[…]\nLe musée Lumière – Museu Lumière",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Zíper",
      "descricao": "Fecho deslizante de dentes intercalados usado em roupas, bolsas e calçados"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome zíper surgiu nos anos vinte como marca registrada da fabricante americana B. F. Goodrich, que usava o fecho em que produto?",
    "resposta": "Galochas de borracha",
    "distratores": [
      "Pneus de bicicleta",
      "Luvas de couro",
      "Bolsas femininas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Zipper"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zipper",
        "situacao": "ok",
        "texto": "A zipper (N. America), zip, zip fastener (UK), formerly known as a clasp locker, is a commonly used device for binding together two edges of fabric or other flexible material. Used in clothing (e.g., jackets and jeans), luggage and other bags, camping gear (e.g., tents and sleeping bags), and many other items, zippers come in a wide range of sizes, shapes, and colors. In 1892, Whitcomb L. Judson, \n[…]\nZippers may:\n[…]\nThe popular North American term zipper (UK zip, or occasionally zip-fastener) came from the B. F. Goodrich Company in 1923. The company used Gideon Sundbäck's fastener on a new type of rubber boots (or galoshes) and referred to it as the zipper, and the name stuck. The two chief uses of the zipper in its early years were for closing boots and tobacco pouches. Zippers began being used for clothing in 1925 by Schott NYC on leather jackets.\n[…]\nBottom Tape Extension (the fabric part of the zipper, that extends beyond the teeth, at the bottom of the chain)\n[…]\nSingle Tape Width (refers to the width of the fabric on one side of the zipper chain)\n[…]\nForbes reported in 2003 that although the zipper market in the 1960s was dominated by Talon Zipper (US) and Optilon (Germany), Japanese manufacturer YKK grew to become the industry giant by the 1980s. YKK held 45 percent of world market share, followed by Optilon (8 percent) and Talon Zipper (7 percent). YKK enters zipper historical records only following the significant contributions from Howe, Judson, Sundback and the B.F. Goodrich Company.\n[…]\nZippers have entered into urban legends. American folklorist Jan Brunvand noted that \"The zipper has been the subject of jokes and legends since... the 1920s\". Those stories reflect \"modern anxieties and desires\", emphasizing embarrassments and accidents, primarily involving the flies of men's trousers in stories such as \"The Unzipped Stranger\" and \"The Unzipped Fly\".\n[…]\nZipper storage bag\n[…]\nType of Zippers"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Z%C3%ADper",
        "situacao": "ok",
        "texto": "Um zíper, fecho éclair, fecho ecler, zíper ou fecho de correr [PT]   é um fecho utilizado em roupas e em artefatos de couro feito de dois cadarços com dentes plásticos ou metálicos, que se encaixam por ação de um cursor.\n[…]\nEmbora Whitcomb L. Judson tenha sido o inventor e tenha montado uma fábrica para a criação desta nova invenção, ele também era obrigado a fabricar botões. O zíper só começou a se popularizar quando começou a ser usado em outras peças de roupa que não calçados, e quando foi inventada em 1912, pelo sueco-americano Gideon Sundbäck, a versão do zíper que é conhecida hoje, com dentes que se engancham, o que tornou o dispositivo mais prático.\n[…]\nO zíper se difundiu por todo o mundo quando os aviadores americanos na Primeira Guerra Mundial usaram-no para fechar seus uniformes, bem como quando foi introduzido na alta costura da moda mundial pela modista parisiense Elsa Schiaparelli, que começou a usá-lo nas suas criações nos salões franceses.\n[…]\nO nome \"zíper\" vem da palavra zipper, em inglês. Este nome popularizou-se somente em 1923, vindo de um funcionário da empresa americana B. F. Goodrich, em que o termo foi usado para denominar o fecho da nova linha de galochas de borracha da fábrica, chamada Zipper Boots.\n[…]\nEm Portugal e no Brasil adotou-se a expressão «fecho éclair», vinda do francês fermeture Éclair, que se refere ao nome da sociedade detentora do registro da marca — a Éclair Prestil SN. Essa expressão foi utilizada durante muitos anos, por fecho éclair ser uma marca mundialmente conhecida desde a sua fundação em 1946.\n[…]\nAtualmente, o maior produtor de zíperes do mundo está localizado no Japão, onde o grupo YKK tornou-se o mais famoso do mundo na fabricação destes fechos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Estetoscópio",
      "descricao": "Instrumento médico para ouvir sons do coração e dos pulmões, inventado pelo francês René Laennec em 1816."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "René Laennec batizou seu invento de estetoscópio. Em grego, o começo dessa palavra designa que parte do corpo?",
    "resposta": "Peito",
    "distratores": [
      "Coração",
      "Ouvido",
      "Garganta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Stethoscope"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stethoscope",
        "situacao": "ok",
        "texto": "The stethoscope (from Ancient Greek στῆθος (stêthos) 'breast' and σκοπέω (skopéō) 'to look') is a medical device for auscultation, or listening to internal sounds of an animal or human body. It typically has a small disc-shaped resonator that is placed against the naked skin, with either one or two tubes connected to two earpieces. A stethoscope can be used to listen to the sounds made by the hear\n[…]\nIn combination with a manual sphygmomanometer, it is commonly used when measuring blood pressure. It was invented in 1816 by René Laennec and the binaural version by Arthur Leared in 1851.\n[…]\nThe stethoscope was invented in France in 1816 by René Laennec at the Necker-Enfants Malades Hospital in Paris. It consisted of a wooden tube and was monaural. Laennec invented the stethoscope because he was not comfortable placing his ear directly onto a woman's chest in order to listen to her heart. He observed that a rolled piece of paper, placed between the individual's chest and his ear, could amplify heart sounds without requiring physical contact.\n[…]\nIn 1851, Irish physician Arthur Leared invented a binaural stethoscope. The following year, George Philip Cammann, a physician practicing in New York City, perfected for commercial production the design of a stethoscope that featured  a plug for each ear. Although improvements have been made, his design has remained essentially unchanged ever since. Cammann also wrote a major treatise on diagnosis by auscultation, which the refined binaural stethoscope made possible.\n[…]\nRotating the tube 180 degrees in the head connects it to the diaphragm. This two-sided stethoscope was invented by Rappaport and Sprague in the early part of the 20th century.\n[…]\n\"The invention of the stethoscope: A milestone in cardiology\", analysis of Laennec's text (1819) on BibNum [click 'à télécharger' for English version]."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Estetosc%C3%B3pio",
        "situacao": "ok",
        "texto": "Estetoscópio (do grego στηθοσκόπιο, de στήθος, stéthos - peito e σκοπή, skopé - exame) é um instrumento utilizado por diversos profissionais, como médicos, fisioterapeutas, enfermeiros, nutricionistas e veterinários, para amplificar sons corporais de humanos ou animais. É geralmente constituído de um ressonador em forma de disco e dois tubos conectados a olivas auriculares.\n[…]\nO estetoscópio foi uma invenção revolucionária do início do século XIX. Criado em 1816 pelo médico francês René Laënnec, enquanto trabalhava no Hospital Necker, em Paris, ele substituiu a prática de encostar o ouvido diretamente no peito do paciente por um tubo.Que deixou o trabalho dos médicos mais profissional, higiênico e respeitoso. Atualmente, o estetoscópio é considerado símbolo da profissão médica e parte do equipamento básico de propedêutica clínica.\n[…]\nCampânula: Peça de contato com o corpo do examinado, com formato de campânula, mais apropriada para percepção de sons graves.\n[…]\nDiafragma: Peça de contato com o corpo do examinado, com formato de campânula, mas limitada por uma membrana, mais apropriada para percepção de sons agudos.\n[…]\nUm estetoscópio eletrônico (ou estetófono) resolve o problema dos baixos níveis de som ampliando eletronicamente os sons corporais.\n[…]\nVendo a necessidade de um instrumento que pudesse amplificar sons internos do corpo,como pulmão e coração sem a necessidade de colocar o ouvido diretamente na pele do paciente, René Laennec, inventou o estetoscópio. A ideia veio a partir de duas crianças brincando com um pedaço de madeira, enquanto uma ouvia na extremidade e a outra produzia ruídos na outra, a partir disso, ele usou folhas de papel enroladas para amplificar sons para facilitar a ausculta.\n[…]\nBLOCH, H. The inventor of the stethoscope: Rene Laennec. Disponível em: O inventor do estetoscópio (em inglês)\n[…]\nBiografia de René Laennec[ligação inativa] (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Isaac Asimov",
      "descricao": "Escritor americano de ficção científica e professor de bioquímica, autor da série Fundação."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O escritor Isaac Asimov é apontado como criador de que palavra, que usou num conto de 1941 e hoje nomeia uma área da engenharia?",
    "resposta": "Robótica",
    "distratores": [
      "Informática",
      "Cibernética",
      "Astronáutica"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Isaac_Asimov",
      "https://en.wikipedia.org/wiki/Robotics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Isaac_Asimov",
        "situacao": "ok",
        "texto": "Isaac Asimov ( AZ-im-ov; c. January 2, 1920 – April 6, 1992) was an American writer and professor of biochemistry at Boston University. During his lifetime, Asimov was considered one of the \"Big Three\" science fiction writers, along with Robert A. Heinlein and Arthur C. Clarke. He wrote or edited more than 500 books and an estimated 90,000 letters and postcards. Best known for his hard science fic\n[…]\nAsimov coined the term \"robotics\" in his May 1941 story \"Liar!\", though he later remarked that he believed then that he was merely using an existing word, as he stated in Gold (\"The Robot Chronicles\"). While acknowledging the Oxford Dictionary reference, he incorrectly states that the word was first printed about one third of the way down the first column of page 100 in the March 1942 issue of Astounding Science Fiction – the printing of his short story \"Runaround\".\n[…]\n2010 – In the US Congress bill about the designation of the National Robotics Week as an annual event, a tribute to Isaac Asimov is as follows:\n[…]\n\"Whereas the second week in April each year is designated as 'National Robotics Week', recognizing the accomplishments of Isaac Asimov, who immigrated to America, taught science, wrote science books for children and adults, first used the term robotics, developed the Three Laws of Robotics, and died in April 1992: Now, therefore, be it resolved ...\"\n[…]\nIn 2024, DARPA named one of its programs after Asimov, inspired by his “Three Laws of Robotics.” The program, Autonomy Standards and Ideals with Military Operational Values (ASIMOV), aims to develop benchmarks objectively and quantitatively assessing the ethical challenges and readiness of using autonomous systems for military operations.\n[…]\nIsaac Asimov at the Internet Speculative Fiction Database\n[…]\nIsaac Asimov at the Internet Book List\n[…]\nIsaac Asimov at IMDb\n[…]\nJenkins' Spoiler-Laden Guide to Isaac Asimov, reviews of all of Asimov's books"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Robotics",
        "situacao": "ok",
        "texto": "Robotics is the interdisciplinary study and practice of the design, construction, operation, and use of robots. A roboticist is someone who specializes in robotics. Robotics usually combines four aspects of design work: a power source (e.g. a battery), mechanical construction, a control system (electrical circuits), and software (run by remote control or artificial intelligence).\n[…]\nSince 2018, autonomous restaurants have been run in Massachusetts (by Spyce Kitchen until 2022), the Los Angeles area (by Miso Robotics), and the Chicago area (by Nala Robotics). As of August 2026, California Pizza Kitchen plans to install 1,000 vending machines over three years. Some companies sell their kitchen automation systems, including those related to commercial dishwashing.\n[…]\nEvolutionary robotics is a methodology that uses evolutionary computation to help design robots, especially the body form, or motion and behavior controllers. In a similar way to natural evolution, a large population of robots is allowed to compete in some way, or their ability to perform a task is measured using a fitness function. Those that perform worst are removed from the population and replaced by a new set with behaviors based on those of the winners.\n[…]\nSwarm robotics is an approach to the coordination of multiple robots as a system which consist of large numbers of mostly simple physical robots.\n[…]\nQuantum robotics is the study of running robotic programs on quantum computers, which will likely outperform digital computers.\n[…]\nAdditional general areas of study include cobots, drones, and nanorobots. Two major academic conferences for robotics research are the International Conference on Robotics and Automation and International Conference on Intelligent Robots and Systems.\n[…]\nIEEE Robotics and Automation Society\n[…]\nJournal of Field Robotics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Isaac_Asimov",
        "situacao": "ok",
        "texto": "Isaac Asimov (em russo: Исаак Юдович Озимов; romaniz.: Isaak Yudavich Azimov; Petrovichi, 2 de janeiro de 1920 — Nova Iorque, 6 de abril de 1992) foi um escritor e bioquímico russo-americano, autor de obras de ficção científica e divulgação científica.\n[…]\nIsaac Asimov nasceu Isaak Yudovich Ozimov (em russo, Исаак Юдович Озимов) em Petrovichi, uma pequena cidade situada na então Subdivisão Governamental de Gomel, situada no oeste da República Soviética Russa (atual Oblast de Smolensk, Rússia), perto do que hoje é a fronteira entre a Federação Russa e a Bielorrússia. De origem russo-judaica, era filho de Judah Asimov, um comerciante e moleiro, e Anna Rachel Berman-Asimov, uma dona-de-casa, oriunda de uma tradicional família de judeus.\n[…]\nThe Positronic Man (1993) (com Robert Silverberg, um romance baseado no antigo conto de Asimov \"The Bicentennial Man\")\n[…]\nLista de contos e noveletas de Isaac Asimov:\n[…]\nThe Best of Isaac Asimov (1973)\n[…]\nThe Best Mysteries of Isaac Asimov (1986)\n[…]\nIsaac Asimov's Guide to Earth and Space (1991)\n[…]\nAsimov's Biographical Encyclopedia of Science and Technology (1972)\n[…]\nIsaac Asimov's Book of Facts (1979)\n[…]\nApresentadas no livro Eu, Robô, as 3 Leis da Robótica foram criadas como condição de coexistência dos robôs com os seres humanos, como prevenção de qualquer perigo que a inteligência artificial pudesse representar à humanidade. São elas:\n[…]\nASIMOV, Isaac (1979). In Memory Yet Green. Nova Iorque: Doubleday. ISBN 038513679X\n[…]\nASIMOV, Isaac (1978). O Futuro Começou. São Paulo: Hemus\n[…]\nKathia Natalie Gomes (2005). Editora DuettoScientific American Brasil Exploradores do Futuro - Isaac Asimov (3). ISSN 1808-6543\n[…]\n«Isaac Asimov Home Page» (em inglês). www.asimovonline.com\n[…]\nIsaac Asimov na Internet Speculative Fiction Database (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Sputnik 1",
      "descricao": "Primeiro satélite artificial da Terra, lançado pela União Soviética em 1957."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do satélite soviético Sputnik, de 1957, é uma palavra russa que pode ser traduzida como companheiro de quê?",
    "resposta": "De viagem",
    "distratores": [
      "De guerra",
      "De trabalho",
      "Das estrelas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sputnik_1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sputnik_1",
        "situacao": "ok",
        "texto": "Sputnik 1  (, Russian: Спутник-1, Satellite 1), often referred to as simply Sputnik, was the first artificial Earth satellite. It was launched into an elliptical low Earth orbit by the Soviet Union on 4 October 1957 as part of the Soviet space program. It sent a radio signal back to Earth for three weeks before its three silver-zinc batteries became depleted. Aerodynamic drag caused it to fall bac\n[…]\nThe success of Sputnik 1 seemed to have changed minds around the world regarding a shift in power to the Soviets.\n[…]\nBefore work was completed, however, the Soviet Union launched a second satellite, Sputnik 2, on 3 November 1957. Meanwhile, the televised failure of Vanguard TV-3 on 6 December 1957 deepened American dismay over the country's position in the Space Race. The Americans took a more aggressive stance in the emerging space race, resulting in an emphasis on science and technological research, and reforms in many areas from the military to education systems.\n[…]\nInitially, U.S. President Dwight Eisenhower was not surprised by Sputnik 1. He had been forewarned of the R-7's capabilities by information derived from U-2 spy plane overflight photos, as well as signals and telemetry intercepts. General James M. Gavin wrote in 1958 that he had predicted to the Army Scientific Advisory Panel on 12 September 1957 that the Soviets would launch a satellite within 30 days, and that on 4 October he and Wernher von Braun had agreed that a launch was imminent.\n[…]\nThe Sputnik 1 EMC/EMI is a class of full-scale laboratory models of the satellite. The models, manufactured by OKB-1 and NII-885 (headed by Mikhail Ryazansky), were introduced on 15 February 1957. They were made to test ground electromagnetic compatibility (EMC) and electromagnetic interference (EMI).\n[…]\nDocuments related to Sputnik 1 and the Space Race at the Dwight D. Eisenhower Presidential Library\n[…]\nNASA on Sputnik 1"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sputnik-1",
        "situacao": "ok",
        "texto": "Sputnik-1 (em russo: Спутник-1), inicialmente batizado Iskusstvenni Sputnik Zemli (em russo: Искусственный спутник Земли, trad.: Satélite Artificial da Terra ou Companheiro Viajante Artificial da Terra) e aportuguesado Esputinique-1, foi o primeiro satélite artificial, isto é, o primeiro objeto posto pela humanidade em órbita ao redor de um corpo celeste, no caso a Terra.\n[…]\nConsequentemente, além da União Soviética, os sinais do Sputnik-1 foram rastreados por estações de rádio e operadores de radioamador de todo o mundo. Em sua segunda órbita, seus sinais foram captados por uma estação de monitoramento da BBC ao sul de Londres, no que foi o primeiro registro de captação do satélite fora da URSS.\n[…]\nEm idioma russo a palavra \"Sputnik\" significa \"satélite\" ou, mais liricamente, \"companheiro viajante\". Durante suas fases de planejamento e lançamento, o satélite foi referido internamente como PS-1 (em russo: ПС-1), sigla para Satélite Elementar-1 (em russo: Простейший Спутник-1).\n[…]\nMais tarde ele seria anunciado publicamente com um nome sobretudo descritivo, Искусственный спутник Земли (romanizado Iskusstvenni Sputnik Zemli), que pode ser traduzido como \"Satélite Artificial da Terra\" e \"Companheiro Viajante Artificial da Terra\". Na sequência esse nome daria lugar à versão mais curta \"Sputnik Zemli\" (Satélite da Terra ou Companheiro Viajante da Terra) e, sobretudo fora da URSS, simplesmente Sputnik-1.\n[…]\nO problema, portanto, era sobretudo o foguete que colocara o Sputnik-1 em órbita, e nem tanto o satélite em si.\n[…]\nEm 1959 a União Soviética doou às Nações Unidas uma réplica do Sputnik-1, e existem outras réplicas suas, com graus variados de precisão, em exibição em todo o mundo, incluindo no Museu Nacional do Ar e Espaço nos EUA, o Museu da Ciência na Inglaterra, o Museu de Artes Aplicadas & Ciências na Austrália e diante da embaixada russa na Espanha.\n[…]\nLunokhod 1",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Dinamite",
      "descricao": "Explosivo à base de nitroglicerina absorvida em material poroso, patenteado por Alfred Nobel em 1867."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Alfred Nobel tirou o nome dinamite de uma palavra grega. Que ideia essa palavra expressa?",
    "resposta": "Força ou poder",
    "distratores": [
      "Fogo",
      "Trovão",
      "Explosão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dynamite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dynamite",
        "situacao": "ok",
        "texto": "Dynamite is an explosive made of nitroglycerin, sorbents (such as powdered shells or clay), and stabilizers. It was invented by Swedish chemist Alfred Nobel in 1866 and patented the following year.\n[…]\nAfter this, Alfred founded the company Nitroglycerin Aktiebolaget in Vinterviken to continue work in a more isolated area and the following year moved to Germany, where he founded another company, Dynamit Nobel.\n[…]\nNobel originally intended to sell dynamite under the name \"Nobel's Safety Powder\", but later changed the name to dynamite, from the Ancient Greek word dýnamis (δύναμις), meaning \"power\".\n[…]\nDynamite was first manufactured in the US by the Giant Powder Company of San Francisco, California, whose founder had obtained the exclusive rights from Nobel in 1867. Giant was eventually acquired by DuPont, which produced dynamite under the Giant name until Giant was dissolved by DuPont in 1905.\n[…]\nCurrently, only Dyno Nobel manufactures dynamite in the US. The only facility producing it is located in Carthage, Missouri, but the material is purchased from Dyno Nobel by other manufacturers who put their labels on the dynamite and boxes.\n[…]\nDynamite gun\n[…]\nNobel Prize\n[…]\nCartwright, A. P. (1964). The dynamite Company: The Story of African Explosives and Chemical Industries Limited. Cape Town: Purnell & Sons (S.A.) (Pty) Ltd.\n[…]\nSchück, H. and Sohlman, R. (1929). The Life of Alfred Nobel. London: William Heinemann Ltd.\n[…]\nAlfred Nobel’s dynamite companies\n[…]\nUS patent 78317, Alfred Nobel, \"Improved explosive compound\", published 26 May 1868, issued 26 May 1868  (Dynamite US patent)\n[…]\nDynamite and TNT at The Periodic Table of Videos (University of Nottingham)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dinamite",
        "situacao": "ok",
        "texto": "A dinamite é um explosivo composto de nitroglicerina, sorventes (como conchas pulverizadas ou argila) e estabilizantes. Foi inventada pelo químico sueco Alfred Nobel em 1866 e patenteada no ano seguinte. Utilizada em diversos setores, sua principal aplicação é a realização de explosões controladas.\n[…]\nA dinamite foi o primeiro explosivo mais potente que os explosivos tradicionais à base de pólvora a poder ser manuseado de maneira relativamente segura. Pouco depois de sua introdução, passou a ser amplamente adotada como alternativa mais segura e resistente. Ela permite aproveitar as propriedades explosivas da nitroglicerina, reduzindo consideravelmente o risco de detonação acidental.\n[…]\nNo ano seguinte, mudou-se para a Alemanha, onde fundou outra empresa, a Dynamit Nobel.\n[…]\nNobel pretendia originalmente comercializar a dinamite sob o nome Nobel's Safety Powder (\"pólvora de segurança de Nobel\"), mas depois escolheu a denominação dinamite, derivada da palavra do grego antigo dýnamis (δύναμις), que significa \"força\" ou \"poder\".\n[…]\nSua principal vantagem é a notável estabilidade e baixa sensibilidade: é impermeável e não detona sem o choque extremo e o calor fornecidos por um detonador (ou por uma detonação por simpatia). Essa estabilidade também permite que seja fundido a 81 °C, despejado em projéteis de alto poder explosivo e deixado para solidificar novamente, sem risco adicional ou alteração de suas características.\n[…]\nPrêmio Nobel\n[…]\nSchück, H. e Sohlman, R. (1929). The Life of Alfred Nobel. Londres: William Heinemann Ltd.\n[…]\nEmpresas de dinamite de Alfred Nobel (em inglês)\n[…]\nPatente norte-americana nº 78.317, de Alfred Nobel, publicada em 26 de maio de 1868 — patente norte-americana da dinamite\n[…]\nDinamite e TNT, em The Periodic Table of Videos (Universidade de Nottingham; em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Alberto Santos-Dumont",
      "descricao": "Aviador e inventor brasileiro (1873–1932), pioneiro dos dirigíveis e do avião, criador do 14-bis e do Demoiselle."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Para que Santos-Dumont pudesse ver as horas sem tirar as mãos dos comandos em voo, que joalheiro francês criou para ele um relógio de pulso?",
    "resposta": "Louis Cartier",
    "distratores": [
      "Louis Vuitton",
      "Abraham-Louis Breguet",
      "Hans Wilsdorf"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont",
        "situacao": "ok",
        "texto": "Alberto Santos-Dumont (self-stylised as Alberto Santos=Dumont; 20 July 1873 – 23 July 1932) was a Brazilian aeronaut, sportsman, inventor, and one of the few people to have contributed significantly to the early development of both lighter-than-air and heavier-than-air aircraft. The heir of a wealthy family of coffee producers, he dedicated himself to aeronautical study and experimentation in Pari\n[…]\nOn 25 July 1909, Louis Blériot crossed the English Channel, becoming a hero in France. In a letter, Santos-Dumont congratulated Blériot, his friend, with the following words: \"This transformation of geography is a victory of air navigation over sea navigation. One day, perhaps, thanks to you, the airplane will cross the Atlantic\". Blériot then replied, \"I have done nothing but follow and imitate you. Your name to the aviators is a flag.\n[…]\nIn 1904, renowned French jeweller Louis Cartier debuted the Santos-Dumont, a watch designed for the aviator himself. It was the first wristwatch the Maison made, and the collection retails to this day.\n[…]\nSantos-Dumont's friend Louis Cartier created a wristwatch for him in 1904. Up to that point, only women had wristwatches as they were considered a jewelry or fashion item only suitable for women; men only carried pocket watches. But Santos-Dumont needed both hands for flying and so Cartier created a wristwatch with a leather strap for him and called it the Cartier-Santos-Dumont.\n[…]\nAfter his 1906 exploits, Santos-Dumont's picture was everywhere wearing the watch, and soon after, wristwatches became popular among men, possibly due to the publicity involving  the watch Cartier made for his friend.\n[…]\nOver a century later, Cartier produced a series of watches named after him, celebrating the partnership between him and the brand. As a publicity piece, an award-winning film was made by France's Quad Productions entitled \"L'Odyssée de Cartier\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santos_Dumont",
        "situacao": "ok",
        "texto": "Alberto Santos Dumont (Palmira, 20 de julho de 1873 – Guarujá, 23 de julho de 1932) foi um aeronauta, esportista, autodidata e inventor brasileiro. Santos Dumont projetou, construiu e voou os primeiros balões dirigíveis com motor a gasolina. Esse mérito lhe é garantido internacionalmente pela conquista do Prêmio Deutsch em 1901, quando em um voo contornou a Torre Eiffel com o seu dirigível Nº 6, t\n[…]\nO estadunidense solicitou que Dumont criasse o Aero Clube dos EUA e ao explicar o motivo de não cobrar por demonstrações em Saint Louis, Dumont disse: \"sou um amador\". Após o encontro com Edison, Dumont declarou à imprensa estadunidense que não pretendia patentear suas aeronaves.\n[…]\nEm 25 de julho de 1909, Louis Blériot atravessou o Canal da Mancha, tornando-se um herói na França. Santos Dumont, em carta, parabenizou Blériot, seu amigo, com as seguintes palavras: \"Esta transformação da geografia é uma vitória da navegação aérea sobre a navegação marítima. Um dia, talvez, graças a você, o avião atravessará o Atlântico\". Blériot, então, respondeu: \"Eu não fiz mais do que segui-lo e imitá-lo. Seu nome para os aviadores é uma bandeira. Você é o nosso líder\".\n[…]\nEm 2012, a Cartier produziu uma série de relógios com o nome do piloto brasileiro, celebrando a parceria entre a marca e Santos Dumont, responsável pelo desenho que até hoje é característico da empresa; como peça publicitária foi realizado um premiado filme pela francesa Quad Productions France com animação digital a mesclar-se em locações reais, em que aparece o piloto brasileiro interagindo com um leopardo, figura central da peça — intitulada L'Odyssée de Cartier.\n[…]\nA documentação da época não provê uma boa quantidade de informações para determinar que Santos Dumont tenha sofrido por esclerose múltipla.\n[…]\nColeção Santos Dumont\n[…]\nSantos Dumont — Academia Brasileira de Letras\n[…]\n«Histórias do Brasil - Santos Dumont»  — TV Senado",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Wright Flyer",
      "descricao": "Avião dos irmãos Wright que voou em Kitty Hawk, nos Estados Unidos, em 17 de dezembro de 1903."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1969, um pedaço de madeira e de tecido do Flyer, o avião dos irmãos Wright, viajou até a Lua levado por que astronauta?",
    "resposta": "Neil Armstrong",
    "distratores": [
      "John Glenn",
      "Alan Shepard",
      "Jim Lovell"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wright_Flyer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "The Wright Flyer (also known as the Kitty Hawk, Flyer I or the 1903 Flyer) made the first sustained flight by a manned heavier-than-air powered and controlled aircraft on December 17, 1903. Invented and flown by brothers Orville and Wilbur Wright, it marked the beginning of the pioneer era of aviation.\n[…]\nThe Los Angeles Section of the American Institute of Aeronautics and Astronautics (AIAA) built a full-scale replica of the 1903 Wright Flyer between 1979 and 1993 using plans from the original Wright Flyer published by the Smithsonian Institution in 1950. Constructed in advance of the 100th anniversary of the Wright Brothers' first flight, the replica was intended for wind tunnel testing to provide a historically accurate aerodynamic database of the Wright Flyer design.\n[…]\nIn 1969, portions of the original fabric and wood from the Wright Flyer traveled to the Moon and its surface in Neil Armstrong's personal preference kit aboard the Apollo 11 Lunar Module Eagle, and then back to Earth in the Command module Columbia.\n[…]\nA small piece of the Wright Flyer's wing fabric is attached to a cable underneath the solar panel of the helicopter Ingenuity, which became the first vehicle to perform a controlled atmospheric flight on Mars on April 19, 2021. Before moving on for further exploration and testing, Ingenuity's first base on Mars was named Wright Brothers Field.\n[…]\nAnother piece of fabric from the Wright Flyer was contributed by the Ohio state government to the official time capsule for the United States Semiquincentennial in Philadelphia. It was buried in 2026, and set to be opened in 2276.\n[…]\nWright Model B\n[…]\n\"Under The Hood of A Wright Flyer\" Air & Space Magazine\n[…]\n1942 Smithsonian Annual Report acknowledging primacy of the Wright Flyer\n[…]\nHistory of the Wright Flyer Wright State University Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "O Wright Flyer (também frequentemente referenciado como Flyer I ou 1903 Flyer) foi a primeira aeronave construída pelos Irmãos Wright. Eles voaram com ele por quatro vezes em 17 de Dezembro de 1903, próximo à Kill Devil Hills, Carolina do Norte, cerca de 6,4 km ao Sul de Kitty Hawk, Estados Unidos. Hoje a aeronave está em exibição no Museu do Ar e Espaço em Washington, D.C.\n[…]\nA \"pista de decolagem\" do Flyer era um trilho composto de ripas de madeira de formato e medidas padronizados, que os irmãos apelidaram de \"Junction Railroad\" algo como \"ferrovia de juntas\", sendo obrigatório o uso para o voo do modelo.\n[…]\nDepois dos voos do Flyer, os irmãos Wright retornaram ao lar em Dayton para o Natal de 1903. Enquanto eles abandonaram os planadores, eles perceberam o significado histórico do Flyer. Eles o empacotaram e enviaram para Dayton, onde ele permaneceu embalado por nove anos. ele ficou submerso na Grande enchente de Dayton em Março de 1913.\n[…]\nA devolução oficial do Flyer para o American Civil Air Attache ocorreu em 1948 numa cerimônia presenciada por vários representantes de entidades aeronáuticas do Reino Unido e alguns pioneiros da aviação, como Sir Alliott Verdon-Roe. Naquele mesmo ano, o Flyer retornou aos Estados Unidos a bordo do Mauretania. Quando o navio aportou em Halifax, Nova Escócia, Paul E. Garber do \"Smithsonian National Air Museum\" encontrou o avião e cuidou dos procedimentos.\n[…]\nIrmãos Wright\n[…]\nWright Flyer II\n[…]\nWright Flyer III\n[…]\nWright Model HS\n[…]\nWright Model K\n[…]\nWright Model L\n[…]\nWright Model R\n[…]\nWright Liberty Eagle\n[…]\nWright Aerial Coupe\n[…]\nHise, Phaedra. \"In Search of the Real Wright Flyer.\" Air&Space/Smithsonian, January 2003, pp. 22–29.\n[…]\nMikesh, Robert C. and Tom D. Crouch. \"Restoration: The Wright Flyer.\"  National Air and Space Museum Research Report, 1985, pp. 135–141.\n[…]\nWrightflyer.org\n[…]\nWrightexperience.com\n[…]\nUnder The Hood of A Wright Flyer  Air & Space Magazine",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Gustave Eiffel",
      "descricao": "Engenheiro francês, 1832-1923, cuja empresa construiu a torre de ferro do Campo de Marte, em Paris."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Antes da famosa torre de Paris, a empresa de Gustave Eiffel projetou a estrutura interna de ferro de que monumento, presente da França a outro país?",
    "resposta": "Estátua da Liberdade",
    "distratores": [
      "Cristo Redentor",
      "Arco do Triunfo",
      "Big Ben"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gustave_Eiffel",
      "https://en.wikipedia.org/wiki/Statue_of_Liberty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gustave_Eiffel",
        "situacao": "ok",
        "texto": "Alexandre Gustave Eiffel (  EYE-fəl; French: [alɛksɑ̃dʁ ɡystav ɛfɛl]; né Bonickhausen dit Eiffel; 15 December 1832 – 27 December 1923) was a French civil engineer. A graduate of École Centrale des Arts et Métiers, he made his name with various bridges for the French railway network, most famously the Garabit Viaduct.\n[…]\nAlexandre Gustave Eiffel was born in France, in the Côte-d'Or, the first child of Catherine-Mélanie (née Moneuse) and Alexandre Bonickhausen dit Eiffel. He was a descendant of Jean-René Bönickhausen, who had emigrated from the German town of Marmagen and settled in Paris at the beginning of the 18th century. The family adopted the name Eiffel as a reference to the Eifel mountains in the region from which they had come.\n[…]\nIn 1913, Eiffel was awarded the Samuel P. Langley Medal for Aerodromics by the Smithsonian Institution. In his speech at the presentation of the medal, Alexander Graham Bell said:...his writings upon the resistance of the air have already become classical. His researches, published in 1907 and 1911, on the resistance of the air in connection with aviation, are especially valuable. They have given engineers the data for designing and constructing flying machines upon sound, scientific principles\n[…]\nEiffel Tower, Paris, France (1889)\n[…]\nA proposal to demolish the railway bridge of Bordeaux (also known as the \"passerelle St Jean\"), the first major work of Gustave Eiffel, resulted in a large response from the public. Actions to protect the bridge were taken as early as 2002 by the \"Association of the Descendants of Gustave Eiffel\", joined from 2005 onwards by the Association \"Sauvons la Passerelle Eiffel\" (Save the Eiffel Bridge). They led, in 2010, to the decision to list Eiffel's Bordeaux bridge as a French Historical Monument.\n[…]\nGustave Alexandre Eiffel at Structurae"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Statue_of_Liberty",
        "situacao": "ok",
        "texto": "The Statue of Liberty (Liberty Enlightening the World, French: La Liberté éclairant le monde) is a colossal neoclassical sculpture of a robed and crowned woman on Liberty Island, part of New York City, in New York Harbor. The copper-clad statue, a gift to the United States from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi, and its metal framework built by Gustav\n[…]\nBy 1882, the statue was complete up to the waist, an event Bartholdi celebrated by inviting reporters to lunch on a platform built within the statue. Laboulaye died in 1883. He was succeeded as chairman of the French committee by Lesseps. The completed statue was formally presented to Ambassador Morton at a ceremony in Paris on July 4, 1884, and Lesseps announced that the French government had agreed to pay for its transport to New York.\n[…]\nNorwegian immigrant civil engineer Joachim Goschen Giæver designed the structural framework for the Statue of Liberty. His work involved design computations, detailed fabrication and construction drawings, and oversight of construction. In completing his engineering for the statue's frame, Giæver worked from drawings and sketches produced by Gustave Eiffel.\n[…]\nThe entire puddled iron armature designed by Gustave Eiffel was replaced. Low-carbon corrosion-resistant stainless steel bars that now hold the staples next to the skin are made of Ferralium, an alloy that bends slightly and returns to its original shape as the statue moves. To prevent the ray and arm making contact, the ray was realigned by several degrees.\n[…]\nOn the sub-national level, the Statue of Liberty National Monument was added to the New Jersey Register of Historic Places in 1971, and was made a New York City designated landmark in 1976.\n[…]\nPlace des États-Unis, in Paris, France\n[…]\nStatue of Liberty National Monument\n[…]\nMade in Paris The Statue of Liberty 1877–1885 – many historical photographs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gustave_Eiffel",
        "situacao": "ok",
        "texto": "Alexandre Gustave Eiffel (nascido Bonickhausen dit Eiffel; Dijon, 15 de dezembro de 1832 — Paris, 27 de dezembro de 1923) foi um engenheiro francês. Formado pela École Centrale Paris, ele fez seu nome construindo várias pontes para a rede ferroviária francesa, mais notoriamente o viaduto Garabit. Ele é mais conhecido pela mundialmente famosa Torre Eiffel, construída para a Exposição Universal de 1\n[…]\nGustave Eiffel nasceu em Burgundy, França, na cidade de Dijon, Côte-d'Or, o primeiro filho de Catherine-Mélanie (nascida como Moneuse) e Alexandre Bönickhausen. Ele era um descendente de Jean-René Bönickhausen, que emigrara da cidade alemã de Marmagen e se estabeleceu em Paris no início do século XVIII. A família adotou o nome Eiffel como referência para o Eifel, montanhas da região de onde vieram.\n[…]\nNo entanto, pouco tempo depois, a empresa de Nepveu faliu, mas Nepveu encontrou um emprego para Eiffel projetando uma ponte de ferro de 22 m para a ferrovia de Saint Germain. Alguns dos negócios da Nepveu foram então adquiridos pela Compagnie Belge de Matériels de Chemin de Fer: Nepveu foi nomeado diretor administrativo das duas fábricas em Paris e ofereceu a Eiffel um emprego como chefe do departamento de pesquisa.\n[…]\nEstátua da Liberdade, Liberty Island, Nova York, Estados Unidos (1886)\n[…]\nTorre Eiffel, Paris, França (1889)\n[…]\nAerodinâmica EIFFEL (túnel de vento), Paris (Auteuil), França (1911)\n[…]\nConstruções mais conhecidas, a Estátua da Liberdade, em Nova Iorque (1886) e a Torre Eiffel.\n[…]\nA Estátua da Liberdade foi um presente da França aos Estados Unidos para comemorar o centenário de sua independência. Inaugurada em 1886, foi projetada pelo escultor Frédéric Auguste Bartholdi e contou com a assistência de Gustave Eiffel. Tem 307 pés (93 m) de altura e tem na sua composição 63 000 toneladas de ferro forjado.\n[…]\nEiffel respondeu a essas críticas comparando sua torre às pirâmides egípcias:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Louis Braille",
      "descricao": "Educador francês (1809–1852), cego desde a infância, criador do sistema de leitura e escrita com pontos em relevo."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O sistema de pontos de Louis Braille foi inspirado num código de escrita noturna, em relevo, que um capitão francês criou para quem usar?",
    "resposta": "Soldados em campanha",
    "distratores": [
      "Marinheiros em navios",
      "Monges em mosteiros",
      "Espiões do rei"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Night_writing",
      "https://en.wikipedia.org/wiki/Louis_Braille"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Night_writing",
        "situacao": "ok",
        "texto": "Night writing is the name given to a form of tactile writing invented by Charles Barbier de la Serre (1767–1841). It is one of a dozen forms of alternative writing presented in a book published in 1815: Essai sur divers procédés d'expéditive française, contenant douze écritures différentes, avec une planche pour chaque procédé (Essay on various processes of French expedition, containing twelve dif\n[…]\nA student at the school, Louis Braille, used the tools and Barbier's idea of communicating with raised dots in a form of code, and developed a more compact and flexible system for communications, Braille.\n[…]\nno combinations of dots existed to represent capital letters, musical notes, mathematical symbols, etc.\n[…]\nIn 1829, Louis Braille published Procédé pour écrire les paroles, la musique et le plain-chant au moyen de points, à l’usage des aveugles et disposés pour eux (Process for writing words, music and plainsong by way of dots, for the use of, and arranged for, the blind). This was based on Barbier's invention but greatly improved its legibility, and the publication marked the official birth of the Braille alphabet.\n[…]\nLouis Braille revised the publication in 1837, and this second edition contained the system now known by the name Braille.\n[…]\nThe characters of Night Writing can be partially represented by the existing Braille allocation in Unicode. Additional patterns needed for representing the remaining Night Writing characters can be found in the Under-ConScript Unicode Registry, an unofficial but widely supported Private Use agreement for Unicode Private Use Areas."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Louis_Braille",
        "situacao": "ok",
        "texto": "Louis Braille ( BRAYL; French: [lwi bʁɑj] ; 4 January 1809 – 6 January 1852) was a French educator and the inventor of a reading and writing system named after him, braille, intended for use by visually impaired people. His system is used worldwide and remains virtually unchanged to this day.\n[…]\nThe immense personal legacy of Louis Braille was described in a 1952 essay by T. S. Eliot:\n[…]\nA Google Doodle for Louis Braille's 197th birthday in 2006 was shown on Google's homepage, spelling \"Google\" in braille.\n[…]\nWorld Braille Day is celebrated every year on Braille's birthday, 4 January, since 2019.\n[…]\nIn music, Braille's life was subject of the song Merci, Louis, composed by the Halifax singer-songwriter Terry Kelly, chair of the Canadian Braille Literacy Foundation. The Braille Legacy, a musical which tells the story of Louis Braille, directed by Thom Southerland and starring Jérôme Pradon, debuted at the Charing Cross Theatre in April 2017.\n[…]\nBickel, Lennard (1989). Triumph Over Darkness: The Life of Louis Braille. Leicester: Ulverscroft. ISBN 978-0708920046. (also large print)\n[…]\nKugelmass, J. Alvin (1951). Louis Braille: Windows for the Blind. New York: Julian Messner Inc. OCLC 8989771.\n[…]\nMellor, C. Michael (2006). Louis Braille: A Touch of Genius. Boston: National Braille Press. ISBN 978-0-939173-70-9.\n[…]\nWeygand, Zina (2009). The Blind in French Society: From the Middle Ages to the century of Louis Braille. Stanford, CA: Stanford University Press. ISBN 978-0-8047-5768-3.\n[…]\nHenri, Pierre (1952). La vie et l'oeuvre de Louis Braille: Inventeur de l'alphabet des aveugles (1809–1852) (in French) by. Paris: Presses universitaires de France. OCLC 299733373.\n[…]\nMusée Louis Braille\n[…]\nLouis Braille Online Museum – American Foundation for the Blind (AFB)"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Daguerreótipo",
      "descricao": "Processo fotográfico criado pelo francês Louis Daguerre, que produzia imagens únicas sobre placas de cobre prateadas."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1840, meses após o anúncio do daguerreótipo na França, que jovem monarca, então com quatorze anos, comprou um e virou pioneiro da fotografia no Brasil?",
    "resposta": "Dom Pedro II",
    "distratores": [
      "Dom Pedro I",
      "Dom João VI",
      "Princesa Isabel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pedro_II_of_Brazil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pedro_II_of_Brazil",
        "situacao": "ok",
        "texto": "Dom Pedro II (Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga; 2 December 1825 – 5 December 1891), known as \"the Magnanimous\" (Portuguese: O Magnânimo), was the second and final emperor of the Empire of Brazil. He reigned from 1831 until his deposition in the military coup of 1889, presiding over the longest and most stable \n[…]\nA national holiday was declared and the return of the Emperor as a national hero was celebrated throughout the country. Thousands attended the main ceremony in Rio de Janeiro where, according to historian Pedro Calmon, the \"elderly people cried. Many knelt down. All clapped hands. There was no distinction between republicans and monarchists. They were all Brazilians.\" This homage marked the reconciliation of Republican Brazil with its monarchical past.\n[…]\nIn a manner similar to methods which were used by republicans, historians point to the Emperor's virtues as an example to be followed, although none go so far as to advocate a restoration of the monarchy. Historian Richard Graham noted that \"[m]ost twentieth-century historians, moreover, have looked back on the period [of Pedro II's reign] nostalgically, using their descriptions of the Empire to criticize—sometimes subtly, sometimes not—Brazil's subsequent republican or dictatorial regimes.\"\n[…]\nThe Emperor's full style and title were \"His Imperial Majesty Dom Pedro II, by the Grace of God, and Unanimous Acclamation of the People, Constitutional Emperor and Perpetual Defender of Brazil\" (Sua Majestade Imperial, Dom Pedro II, Pela Graça de Deus, e Unânime Aclamação dos Povos, Imperador Constitucional e Defensor Perpétuo do Brasil).\n[…]\nThe ancestry of Emperor Pedro II:\n[…]\nMedia related to Pedro II do Brasil (category) at Wikimedia Commons\n[…]\nQuotations related to Pedro II of Brazil at Wikiquote\n[…]\nWorks by or about Pedro II of Brazil at Wikisource"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pedro_II_do_Brasil",
        "situacao": "ok",
        "texto": "Pedro II (nome completo: Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga; Rio de Janeiro, 2 de dezembro de 1825 – Paris, 5 de dezembro de 1891), cognominado \"o Magnânimo\", foi o segundo e último monarca do Império do Brasil, reinando por 58 anos (1831–1889). Filho mais novo do imperador Pedro I do Brasil e da imperatriz cons\n[…]\nApós receber também a recusa do Conselho de Estado, Pedro II fez o seu memorável pronunciamento: \"Se os políticos podem me impedir que siga como imperador, vou abdicar e seguir como voluntário da Pátria\"—uma alusão aos brasileiros que se voluntariaram para ir a guerra e que ficaram conhecidos por toda a nação como \"Voluntários da Pátria\". O próprio monarca foi chamado popularmente de \"Voluntário número um\".\n[…]\nLogo após retornar ao Brasil, Pedro II enfrentou uma crise inesperada. Por muito tempo o clero brasileiro fora mal preparado e indisciplinado, além de sofrer com a falta de membros suficientes, levando a uma grande perda de prestígio à Igreja Católica. O governo imperial realizou um programa de reformas com o intuito de corrigir essas deficiências, seguindo uma tendência liberal.\n[…]\nEm 15 de julho de 1889, o imperador Pedro II sofreu um atentado a tiros quando saía de um teatro no Centro do Rio de Janeiro (Atentado de Julho de 1889); quando já estava em sua carruagem ouviu-se um grito de \"Viva a República\", e em seguida o jovem Adriano Augusto do Vale sacou uma arma e atirou na sua direção. A bala não atingiu o Imperador e o responsável pelo atentado fora preso horas depois; não ficou comprovado se o jovem possuía, de fato, ligações politicas com algum grupo republicano.\n[…]\nA forma de tratamento e o título completo do monarca foram \"Sua Majestade Imperial, Dom Pedro II, Pela Graça de Deus, e Unânime Aclamação dos Povos, Imperador Constitucional e Defensor Perpétuo do Brasil\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Vulcanização",
      "descricao": "Processo químico que aquece a borracha com enxofre, tornando-a resistente e elástica."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A fabricante de pneus Goodyear, fundada em 1898, homenageia no nome o inventor de que processo, que tinha morrido quase quarenta anos antes?",
    "resposta": "Vulcanização da borracha",
    "distratores": [
      "Pneu com câmara",
      "Borracha sintética",
      "Motor a explosão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Goodyear_Tire_and_Rubber_Company",
      "https://en.wikipedia.org/wiki/Charles_Goodyear"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Goodyear_Tire_and_Rubber_Company",
        "situacao": "ok",
        "texto": "The Goodyear Tire & Rubber Company, commonly known as Goodyear, is an American multinational tire manufacturer headquartered in Akron, Ohio. It develops tires for automobiles, motorcycles, trucks, recreational vehicles, heavy off-road machinery, aviation and military. It also licenses the Goodyear brand to bicycle tire manufacturers, returning from a break in production between 1976 and 2015.\n[…]\nFounded in 1898 by Frank Seiberling, the company was named after American Charles Goodyear (1800–1860), inventor of vulcanized rubber. The first Goodyear tires became popular because they were easily detachable and required little maintenance. Goodyear was a component of the Dow Jones Industrial Average between 1930 and 1999. Since 2021, the company has been the world's third-largest tire manufacturer by annual revenue.\n[…]\nOver the next few decades, Goodyear grew to become a multinational corporation. It acquired their rival Kelly-Springfield Tire in 1935. During World War II Goodyear manufactured F4U Corsair fighter planes for the U.S. Military. Goodyear ranked 30th among United States corporations in the value of wartime production contracts. WWII forced the dissolution of the Goodyear-Zeppelin partnership in December 1940. By 1956 they owned and operated a nuclear processing plant in Ohio.\n[…]\nPresident Tom Barrett succeeded Chairman Robert Mercer in 1989, and began a process of modernizing and expanding Goodyear plants in cities like Lawton, Oklahoma, Napanee, Canada, Point Pleasant, West Virginia, and Scottsboro, Alabama.\n[…]\n1898: Goodyear founded\n[…]\n1929: Introduction of first-known example of low-pressure tundra tires for aviation, invented by Alvin J. Musselman as Goodyear \"Airwheels\"\n[…]\n1956: Goodyear-operated U235 atomic processing plant opens in Ohio\n[…]\nD. E. Holl, 1898–1899\n[…]\nRichard Korman. The Goodyear Story: An Inventor's Obsession and the Struggle for a Rubber Monopoly (2002)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Goodyear",
        "situacao": "ok",
        "texto": "Charles Goodyear (December 29, 1800 – July 1, 1860) was an American self-taught chemist and manufacturing engineer who developed vulcanized rubber, for which he received patent number 3633 from the United States Patent Office on June 15, 1844.\n[…]\nGoodyear is credited with inventing the chemical process to create and manufacture pliable, waterproof, moldable rubber.\n[…]\nFrom 1834 through 1839, Goodyear worked anywhere he could find investors, and often moved locations, mostly within New York, Massachusetts, Philadelphia, and Connecticut. In 1839, Goodyear was at the Eagle India Rubber Company in Woburn, Massachusetts, where he discovered that combining rubber and sulfur over a hot stove caused the rubber to become rigid, a process which he called vulcanization because of the heat involved.\n[…]\nIn 1852, Goodyear went to Europe, a trip that he had long planned, and saw Thomas Hancock, then in the employ of Charles Macintosh & Company. Hancock claimed to have invented vulcanization independently and had received a British patent, initiated in 1843 but finalized in 1844. In 1855, in the last of three patent disputes with his fellow British rubber pioneer Stephen Moulton, Hancock's patent was challenged with the claim that Hancock had copied Goodyear. Goodyear attended the trial.\n[…]\nIn 1858, Goodyear won a seven-year extension on his American patent on the grounds of financial hardship. Although he had earned nearly $163,000 from the patent, he owed far more to creditors who had supported him in his journey to develop the vulcanization process and bring vulcanized products to market.\n[…]\nLeverett Candee, first person to manufacture rubber footwear under the Goodyear vulcanization process.\n[…]\nGoodyear Tire and Rubber Company\n[…]\nVulcanization"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Goodyear",
        "situacao": "ok",
        "texto": "Goodyear Tire & Rubber Company é uma empresa que fabrica pneus para automóveis, camiões comerciais, camiões leves, utilitários esportivos, carros de corrida, aviões, equipamentos agrícolas e máquinas terra-motor pesado. Foi fundada em 1898 por Frank Seiberling em Akron, Ohio.\n[…]\nGoodyear é conhecida em todo o mundo para o dirigível da Goodyear. O primeiro dirigível da Goodyear voou em 1925. Hoje é um dos ícones publicitários mais reconhecidos na América. A empresa é o mais bem sucedido fornecedor de pneus na Fórmula 1 na história, com mais partidas, vitórias, e campeonatos de construtores do que qualquer outro fornecedor de pneus; eles saíram do esporte após a temporada de 1998. É o único fornecedor de pneus para a NASCAR.\n[…]\nEm 2005, Titan Tire comprou o negócio de pneus da Goodyear fazenda, e continua a fabricação Goodyear pneus agrícolas sob licença. Esta aquisição incluiu a planta em Freeport, Illinois.\n[…]\nGoodyear também foi classificada entre as 100 melhores empresas cidadãs, selecionados pelo CRO revista.\n[…]\nA empresa anunciou no Verão de 2009 que vai fechar sua fábrica de pneus no Filipinas, como parte de uma estratégia para abordar a capacidade de produção não competitivo globalmente até o final do terceiro trimestre.\n[…]\nGoodyear anunciou que vai vender os ativos de sua latino-americana negócio de pneus off-road para Titan pneu para EUA 98,6 milhões dólares. Isso inclui a fábrica em São Paulo, Brasil, e um acordo de licenciamento que permite Titan para continuar fabricação sob a Goodyear.\n[…]\nA Goodyear fornece pneus para a NASCAR desde 1954, sendo fornecedora exclusiva desde 1997.\n[…]\nDe 1964 até ao fim da época de 1998, a Goodyear forneceu pneus à F1.\n[…]\nGoodyear Brasil\n[…]\nGoodyear Stockcar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Teflon",
      "descricao": "Nome comercial do politetrafluoretileno, plástico antiaderente descoberto por Roy Plunkett na DuPont em 1938."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Nos anos cinquenta, um francês aplicou teflon em panelas e fundou a marca Tefal, cujo nome junta teflon e que metal?",
    "resposta": "Alumínio",
    "distratores": [
      "Aço",
      "Ferro",
      "Cobre"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tefal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tefal",
        "situacao": "ok",
        "texto": "Tefal S.A.S. (a portmanteau of TEFlon and ALuminium.) is a French cookware and small appliance manufacturer, owned by Groupe SEB (a global manufacturer of cookware) since 1968. The company is known for creating the non-stick cookware category and for offering frying equipment with a low requirement of fat or oils.\n[…]\nIn the United States, Tefal is marketed as T-fal. This is to comply with DuPont's objection that the name \"Tefal\" was too close to DuPont's trademark \"Teflon\". The T-fal brand is also used in Canada, Mexico, and Japan.\n[…]\nBesides cookware and cooking appliances, the Tefal brand is also applied to home appliances such as steam irons and vacuum cleaners.\n[…]\nTefal management also contacted the intelligence services.\n[…]\nTefal decided to lodge a complaint against the labor inspector for breach of professional secrecy and handling stolen goods. The Annecy public prosecutor, Eric Maillaud, a close friend of Philippe Dumont, decides to follow up the complaint, not against the company or the inspectorate director, but against the labor inspector and the whistleblower to \"clean up\" the labor inspectorate. On June 5, 2015, hundreds of people demonstrated outside the court in support of the labor inspector.\n[…]\nThe trial is adjourned until October 16. At the same time, trade unions from the Ministry of Labor, local interprofessional unions and Tefal's CGT and FO sections call for a rally in front of the court.\n[…]\nIn February 2023, the newspaper Le Monde published an article on PFAS contamination at certain French sites, pointing the finger at the Rumilly production site and highlighting the massive contamination of groundwater in the area. Former employees accused the Seb group of \"dumping its PTFE sludge by truck in what used to be a landfill site\", which the group denied."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tefal",
        "situacao": "ok",
        "texto": "Tefal é uma empresa francesa, fabricante de pequenos electrodomésticos, adquirida pelo Groupe SEB. O seu nome é fruto da combinação de alumínio e teflon.\n[…]\nA Tefal é conhecida mundialmente por fabricar utensílios de cozinha não aderentes.\n[…]\nThermo-spot é o nome de uma grande inovação apresentada pela Tefal, consiste num indicador de temperatura colocado em alguns utensílios, que permite saber quando a temperatura ideal para cozinhar é atingida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Robert Hooke",
      "descricao": "Cientista inglês do século dezessete, autor do livro Micrographia, sobre observações ao microscópio."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na década de 1670, Isaac Newton escreveu numa carta que, se viu mais longe, foi por estar sobre ombros de gigantes. A que cientista rival ele escrevia?",
    "resposta": "Robert Hooke",
    "distratores": [
      "Gottfried Leibniz",
      "Edmond Halley",
      "Christiaan Huygens"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants",
        "situacao": "ok",
        "texto": "The phrase \"standing on the shoulders of giants\" is a metaphor which means \"using the understanding gained by major thinkers who have gone before in order to make intellectual progress\".\n[…]\nIsaac Newton remarked in a letter to his rival Robert Hooke written in 5 February 1675 and published in 1855:\n[…]\nThis has recently been interpreted by a few writers as a sarcastic remark directed at Hooke's appearance. Although Hooke was not of particularly short stature, he was of slight build and had been afflicted from his youth with a severe kyphosis.\n[…]\nDiego de Estella took up the quotation in his 1578 commentary on Gospel of Luke and by the 17th century it had become commonplace. Robert Burton, in the second edition of The Anatomy of Melancholy (1624), quotes Stella thus:\n[…]\nRobert King Merton, one of the 'founding fathers' of sociology, titled a book On the Shoulders of Giants: A Shandean Postscript. In it, he traces the history of Newton's famous comment \"If I have seen farther, it is by standing on the shoulders of giants\" back to centuries earlier, in the rambling style of Laurence Sterne's The Life and Opinions of Tristram Shandy, Gentleman.\n[…]\nStephen Hawking stated: \"Each generation stands on the shoulders of those who have gone before them, just as I did as a young PhD student in Cambridge, inspired by the work of Isaac Newton, James Clerk Maxwell and Albert Einstein.\" Additionally, Hawking wrote a book called On the Shoulders of Giants, which explores the major works of physics and astronomy that inspired him.\n[…]\nMerton, Robert King; Eco, Umberto; Donoghue, Denis (1993). On the shoulders of giants: a Shandean postscript. University of Chicago press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sobre_os_ombros_de_gigantes",
        "situacao": "ok",
        "texto": "A metáfora dos anões estarem sobre ombros de gigantes (em latim: nanos gigantum humeris insidentes) expressa o significado de \"descobrir a verdade a partir das descobertas anteriores\". Esse conceito tem origem no século XII, e é atribuído a Bernardo de Chartres. Seu uso mais conhecido procede de Isaac Newton, que escreveu em 1675: \"Se eu vi mais longe, foi por estar sobre ombros de gigantes.\"\n[…]\nDiego de Estella retomou a citação no século XVI, e por volta do século seguinte, ela havia se tornado lugar-comum. Robert Burton, em The Anatomy of Melancholy (1621), cita Estella assim:Eu sigo Didacus Stella, um anão sobre os ombros de um gigante pode ver mais longe do que o próprio gigante.Editores posteriores de Burton atribuíram a citação erroneamente a Lucano; em suas mãos, a atribuição de Burton Didacus Stella, em luc 10, tom.\n[…]\nIsaac Newton comentou em uma carta a seu rival Robert Hooke, datada de 5 de fevereiro de 1676:O que Des-Cartes  [sic] fez foi um bom passo. Você contribuiu muito de várias formas, especialmente tomando as cores de placas finas em consideração filosófica. Se eu vi mais longe foi por estar sobre ombros [sic] (\"sholders\" [sic]) de gigantes.Isso foi recentemente interpretado por alguns autores como um comentário sarcástico dirigido à aparência de Hooke.\n[…]\nEmbora Hooke não fosse particularmente de baixa estatura, era pequeno e tinha sido afligido, desde a sua juventude, com uma grave cifose. No entanto, neste momento Hooke e Newton estavam em bons termos e trocaram muitas cartas em tons de mútuo respeito. Só mais tarde, quando Robert Hooke criticou algumas das ideias de Newton sobre a óptica, Newton ficou tão ofendido que se retirou do debate público. Os dois homens permaneceram inimigos até a morte de Hooke.\n[…]\nO slideshow de instalação do Linux Mint tem um slide intitulado \"Sobre os ombros de gigantes\" significando Ubuntu, Debian e GNU.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Johannes Kepler",
      "descricao": "Astrônomo e matemático alemão (1571–1630), autor das leis do movimento planetário."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1600, em Praga, Johannes Kepler foi trabalhar como assistente de que astrônomo, cujas observações precisas usaria para formular suas leis?",
    "resposta": "Tycho Brahe",
    "distratores": [
      "Galileu Galilei",
      "Nicolau Copérnico",
      "Giordano Bruno"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Johannes_Kepler"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Johannes_Kepler",
        "situacao": "ok",
        "texto": "Johannes Kepler (27 December 1571 – 15 November 1630) was a German polymath who was an astronomer, mathematician, astrologer, natural philosopher and music theorist. He is a key figure in the 17th-century Scientific Revolution, best known for his laws of planetary motion, and his books Astronomia nova, Harmonice Mundi, and Epitome Astronomiae Copernicanae.\n[…]\nKepler was a mathematics teacher at a seminary school in Graz, where he became an associate of Prince Hans Ulrich von Eggenberg. Later he became an assistant to the astronomer Tycho Brahe in Prague, and eventually the imperial mathematician to Emperor Rudolf II and his two successors Matthias and Ferdinand II. He also taught mathematics in Linz, and was an adviser to General Wallenstein.\n[…]\nHe also sought the opinions of many of the astronomers to whom he had sent Mysterium, among them Reimarus Ursus (Nicolaus Reimers Bär)—the imperial mathematician to Rudolf II and a bitter rival of Tycho Brahe. Ursus did not reply directly, but republished Kepler's flattering letter to pursue his priority dispute over (what is now called) the Tychonic system with Tycho.\n[…]\nIn December 1599, Tycho invited Kepler to visit him in Prague; on 1 January 1600 (before he even received the invitation), Kepler set off in the hopes that Tycho's patronage could solve his philosophical problems as well as his social and financial ones. On 4 February 1600, Kepler met Tycho Brahe and his assistants Franz Tengnagel and Longomontanus at Benátky nad Jizerou (35 km from Prague), the site where Tycho's new observatory was being constructed.\n[…]\nKepler, at last, completed the Rudolphine Tables in 1623, which at the time was considered his major work. However, due to the publishing requirements of the emperor and negotiations with Tycho Brahe's heir, it would not be printed until 1627.\n[…]\nAstronomia nova (New Astronomy) (1609)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Johannes_Kepler",
        "situacao": "ok",
        "texto": "Johannes Kepler (Weil der Stadt, 27 de dezembro de 1571 — Ratisbona, 15 de novembro de 1630) foi um astrônomo, astrólogo e matemático alemão. Considerado figura-chave da revolução científica do século XVII, é todavia célebre por ter formulado as três leis fundamentais da mecânica celeste, denominadas Leis de Kepler, tendo estas sido codificadas por astrônomos posteriores com base nas suas obras As\n[…]\nDurante sua carreira, Kepler foi professor de matemática em uma escola seminarista em Graz, Áustria, um assistente do astrônomo Tycho Brahe, o matemático imperial do imperador Rodolfo II e de seus dois sucessores, Matias I e Fernando II. Também foi professor de matemática em Linz, Áustria, e conselheiro do general Wallenstein.\n[…]\nEm 4 de fevereiro de 1600, Kepler encontrou Tycho Brahe e seus assistentes Franz Tengnagel e Longomontanus em Benátky nad Jizerou (a 35 km de Praga), o local onde o novo observatório de Tycho estava sendo construído. Nos dois meses seguintes, ele permaneceu como um convidado, analisando algumas das observações de Tycho a respeito de Marte; Tycho vigiava de perto os seus dados, mas ficou impressionado com as ideias teóricas de Kepler e logo lhe permitiu mais acesso.\n[…]\nAo passo que ele lentamente continuava a analisar as observações de Tycho a respeito de Marte — agora à sua disposição em sua totalidade — e começava o lento processo de tabulação das tábuas rudolfinas, Kepler também retomou a investigação a respeito das leis da óptica de seu ensaio de 1600 sobre a Lua.\n[…]\nUm bem recebido, embora irreal, romance histórico de John Banville, Kepler (1981), explorou muitos dos temas desenvolvidos na narrativa não científica de Koestler e na filosofia da ciência. Um pouco mais fantasioso é o trabalho de não ficção Heavenly Intrigue (2004), que sugere que Kepler assassinou Tycho Brahe para ter acesso aos seus dados.\n[…]\nAstronomia nova (Nova Astronomia) (1609)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Prensa de Gutenberg",
      "descricao": "Prensa de tipos móveis metálicos desenvolvida por Johannes Gutenberg em meados do século quinze."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A prensa de tipos móveis de Gutenberg adaptou um tipo de prensa de rosca já usado na Europa para produzir que bebida?",
    "resposta": "Vinho",
    "distratores": [
      "Cerveja",
      "Hidromel",
      "Leite"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Printing_press"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Printing_press",
        "situacao": "ok",
        "texto": "A printing press is a machine that applies pressure to transfer ink onto a surface made of paper, cloth, or a similar material. Its workers are known as printing press operators. It marked a significant improvement on earlier methods, in which the paper was rubbed by hand to transfer applied ink to the printing surface.\n[…]\nHellinga, Lotte (2007), \"The Gutenberg Revolutions\", in Eliot, Simon; Rose, Jonathan (eds.), A Companion to the History of the Book, Blackwell Publishing, pp. 207–220, ISBN 978-1-4051-2765-3\n[…]\nKapr, Albert (1996), Johannes Gutenberg. The Man and his Invention, Aldershot: Scolar, ISBN 978-1-85928-114-7\n[…]\nLehmann-Haupt, Hellmut (1940), \"Englische Holzstempelalphabete des XIII. Jahrhunderts\", Gutenberg-Jahrbuch (in German): 93–97\n[…]\nMahnke, Helmut (2009), Der kunstreiche Johannes Gutenberg und die Frühzeit der Druckkunst (in German), Norderstedt: Books on Demand, ISBN 978-3-8370-5041-7\n[…]\nSchulte, Alfred (1939), \"Papierpresse, Druckerpresse und Kelter\", Gutenberg-Jahrbuch (in German): 52–56\n[…]\nWidmann, Hans (1974), \"Der koreanische Buchdruck und Gutenbergs Erfindung\", Gutenberg-Jahrbuch (in German): 32–34\n[…]\nBechtel, G. (1992), Gutenberg et l'invention de l'imprimerie (in French), Paris: Fayard, ISBN 978-2-213-02865-1\n[…]\nGerhardt, Claus W. (1971), \"Warum wurde die Gutenberg-Presse erst nach über 350 Jahren durch ein besseres System abgelöst?\", Gutenberg-Jahrbuch (in German): 43–57\n[…]\nGerhardt, Claus W. (1978), \"Besitzt Gutenbergs Erfindung heute noch einen Wert?\", Gutenberg-Jahrbuch (in German): 212–217\n[…]\nMcLuhan, Marshall (1962), The Gutenberg Galaxy, The Making of Typographic Man, University of Toronto Press, OCLC 428949\n[…]\nGutenberg printing – Photos of Incunabula and the Gutenberg Bible (1455) (archived 28 September 2007)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Prensa_m%C3%B3vel",
        "situacao": "ok",
        "texto": "A prensa de tipos móveis, ou somente prensa móvel, é um dispositivo que aplica pressão numa superfície com tinta, transferindo-a para uma superfície de impressão, geralmente papel ou tecido. Ela é normalmente utilizada para imprimir textos (\"a reprodução técnica da escrita\"), mas também foi adaptada para impressão em larga escala de imagens, mapas, diagramas e tabelas matemáticas.\n[…]\nA prensa de tipos móveis foi inventada pelo alemão Johannes Gutenberg por volta de 1450, com base nas prensas de vinhos. A técnica de impressão já existia na China e no Japão (acredita-se que desde o século VIII), porém, o método usado era diferente, chamado de “impressão em bloco” usando um bloco de madeira talhado, para imprimir uma página com determinado texto.\n[…]\nMas, os desenvolvimentos de Johannes Gutenberg, um ourives de profissão, se diferenciam dos métodos já usados pelos chineses em dois aspectos: a invenção da máquina impressora e o uso de tipos alfabéticos e não ideográficos. Além disso, ele desenvolveu um sistema de impressão completo, que aperfeiçoou o processo de impressão em todas as etapas, adaptando as tecnologias existentes (como por exemplo a tradicional prensa de parafuso, conhecida na Europa desde o século I) às invenções de sua autoria.\n[…]\nNo renascimento, uma só prensa móvel podia produzir 3 600 páginas por dia, muito em comparação as quarenta cópias feitas manualmente por um escriba.\n[…]\nNa Europa renascentista, com a chegada de impressão por prensa de tipos móveis, iniciou-se a era da comunicação de massa, que alterou a estrutura da sociedade: a circulação relativamente irrestrita de informação e ideias (revolucionárias, como por exemplo as de Lutero) transcendeu fronteiras, galvanizou as massas para a Reforma Protestante e ameaçou o poder de autoridades políticas e religiosas, pois facilitou a difusão de críticas aos mesmos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Pólvora",
      "descricao": "Explosivo formado por salitre, enxofre e carvão, inventado na China e uma das Quatro Grandes Invenções chinesas."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Os alquimistas chineses que criaram a pólvora, por volta do século nove, buscavam na verdade outra coisa. O quê?",
    "resposta": "Elixir da imortalidade",
    "distratores": [
      "Ouro artificial",
      "Remédio contra peste",
      "Tinta para escrever"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gunpowder"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gunpowder",
        "situacao": "ok",
        "texto": "Gunpowder, referred to as black powder to distinguish it from modern smokeless powder, is the earliest known chemical explosive. It consists of a mixture of sulfur, charcoal (which is mostly carbon), and potassium nitrate (saltpeter). The sulfur and charcoal act as fuels, while the saltpeter is an oxidizer.\n[…]\nAccording to the Zhenyuan miaodao yaolüe, \"Some have heated together sulfur, realgar and saltpeter with honey; smoke and flames result, so that their hands and faces have been burnt, and even the whole house where they were working burned down.\" Based on these Taoist texts, the invention of gunpowder by Chinese alchemists was likely an accidental byproduct from experiments seeking to create the elixir of life.\n[…]\nIt is difficult to accurately translate original Chinese alchemical texts, which tend to explain phenomena through metaphor, into modern scientific language with rigidly defined terminology in English. Early texts potentially mentioning gunpowder are sometimes marked by a linguistic process where semantic change occurred. For instance, the Arabic word naft transitioned from denoting naphtha to denoting gunpowder, and the Chinese word pào changed in meaning from trebuchet to a cannon.\n[…]\nAnother major area of contention in modern studies of the history of gunpowder is regarding the transmission of gunpowder. While the literary and archaeological evidence supports a Chinese origin for gunpowder and guns, the manner in which gunpowder technology was transferred from China to the West is still under debate."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%B3lvora",
        "situacao": "ok",
        "texto": "A pólvora é a designação genérica de qualquer mistura de substâncias pouco explosivas, que queima com rapidez, usada como carga propelente em armas de fogo, ou agentes explosivos em atividades de mineração ou desobstrução, e também em fogos de artifício. Historiadores creditam a descoberta aos chineses, que teria ocorrido acidentalmente por volta do século IX, pois no ano 1000 os chineses usavam a\n[…]\nDe acordo com o Zhenyuan miaodao yaolüe, \"alguns aqueceram juntos enxofre, realgar e salitre com mel; resultam fumaça e chamas, de modo que suas mãos e rostos foram queimados, e até toda a casa onde estavam trabalhando queimada\".Com base nesses textos taoístas, a invenção da pólvora pelos alquimistas chineses provavelmente foi um subproduto acidental de experimentos que tentavam criar o elixir da vida.\n[…]\nUm texto alquímico chinês datado de 492 observou salitre queimado com uma chama roxa, fornecendo um meio prático e confiável de distingui-lo de outros sais inorgânicos, permitindo assim aos alquimistas avaliar e comparar técnicas de purificação; os primeiros relatos latinos de purificação de salitre são datados após 1200. Originalmente desenvolvida pelos taoístas para fins medicinais, a pólvora foi usada pela primeira vez na guerra por volta de 904 DC.\n[…]\nOutra área importante de discórdia nos estudos modernos da história da pólvora é a transmissão da pólvora. Enquanto as evidências literárias e arqueológicas apoiam uma origem chinesa da pólvora e armas relacionadas, ainda está em debate a maneira pela qual a tecnologia da pólvora foi transferida da China para o Ocidente.\n[…]\nA \"pólvora negra\" é uma mistura granular de:\n[…]\nUma equação química simples, comumente citada, para a combustão da \"pólvora negra\" é:\n[…]\nHoje, os explosivos industriais para tais usos ainda são um grande mercado, mas a maior parte do mercado é de explosivos mais novos, em vez de pólvora negra.\n[…]\nSubstituto de pólvora negra",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Louis Braille",
      "descricao": "Educador francês (1809–1852), cego desde a infância, criador do sistema de leitura e escrita com pontos em relevo."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Louis Braille perdeu a visão ainda criança, depois de se ferir com uma ferramenta pontuda na oficina do pai. O que o pai fabricava?",
    "resposta": "Selas e arreios",
    "distratores": [
      "Sapatos",
      "Móveis",
      "Relógios"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Louis_Braille"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Louis_Braille",
        "situacao": "ok",
        "texto": "Louis Braille ( BRAYL; French: [lwi bʁɑj] ; 4 January 1809 – 6 January 1852) was a French educator and the inventor of a reading and writing system named after him, braille, intended for use by visually impaired people. His system is used worldwide and remains virtually unchanged to this day.\n[…]\nThe immense personal legacy of Louis Braille was described in a 1952 essay by T. S. Eliot:\n[…]\nA Google Doodle for Louis Braille's 197th birthday in 2006 was shown on Google's homepage, spelling \"Google\" in braille.\n[…]\nWorld Braille Day is celebrated every year on Braille's birthday, 4 January, since 2019.\n[…]\nIn music, Braille's life was subject of the song Merci, Louis, composed by the Halifax singer-songwriter Terry Kelly, chair of the Canadian Braille Literacy Foundation. The Braille Legacy, a musical which tells the story of Louis Braille, directed by Thom Southerland and starring Jérôme Pradon, debuted at the Charing Cross Theatre in April 2017.\n[…]\nBickel, Lennard (1989). Triumph Over Darkness: The Life of Louis Braille. Leicester: Ulverscroft. ISBN 978-0708920046. (also large print)\n[…]\nKugelmass, J. Alvin (1951). Louis Braille: Windows for the Blind. New York: Julian Messner Inc. OCLC 8989771.\n[…]\nMellor, C. Michael (2006). Louis Braille: A Touch of Genius. Boston: National Braille Press. ISBN 978-0-939173-70-9.\n[…]\nWeygand, Zina (2009). The Blind in French Society: From the Middle Ages to the century of Louis Braille. Stanford, CA: Stanford University Press. ISBN 978-0-8047-5768-3.\n[…]\nHenri, Pierre (1952). La vie et l'oeuvre de Louis Braille: Inventeur de l'alphabet des aveugles (1809–1852) (in French) by. Paris: Presses universitaires de France. OCLC 299733373.\n[…]\nMusée Louis Braille\n[…]\nLouis Braille Online Museum – American Foundation for the Blind (AFB)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Louis_Braille",
        "situacao": "ok",
        "texto": "Louis Braille (Coupvray, 4 de janeiro de 1809 — Paris, 6 de janeiro de 1852), mais raramente Luís Braille, foi o criador do sistema de leitura por tato para cegos que recebeu seu nome, braille.\n[…]\nLouis Braille nasceu em 4 de janeiro de 1809 em Coupvray, na França, a cerca de 40 km de Paris. Seu pai, Simon-René Braille, foi um fabricante de arreios e selas. Aos três anos, provavelmente ao brincar na oficina do pai, Louis feriu-se no olho esquerdo com uma ferramenta pontiaguda, possivelmente uma sovela. A infecção que se seguiu ao ferimento alastrou-se ao olho direito, provocando a cegueira total.\n[…]\nApesar de tudo, levou tempo até essa inovação ser aceita. As pessoas com visão não entendiam quão útil o sistema inventado por Braille podia ser, e um dos professores principais da escola chegou a proibir seu uso pelas crianças. Felizmente, tal decisão teve efeito contrário ao desejado, encorajando as crianças a usar o método e a aprendê-lo em segredo. Com o tempo, mesmo as pessoas com visão acabaram por perceber os benefícios do novo sistema.\n[…]\nO braille provou ser muito adaptável como meio de comunicação. Quando Louis Braille inicialmente inventou o sistema de leitura, aplicou-o à notação musical. O método funciona tão bem que a leitura e escrita de música é mais fácil para os cegos do que para os que vêem. Vários termos matemáticos, científicos e químicos têm sido transpostos para o braille, abrindo amplos depósitos de conhecimento para os leitores cegos.\n[…]\nRelógios com ponteiros reforçados e números em relevo, em braille, foram produzidos, de modo que dedos ágeis possam sentir as horas.\n[…]\nDeutsche Welle - 1852: Morre Louis Braille, inventor da escrita para deficientes visuais",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Forno de micro-ondas",
      "descricao": "Eletrodoméstico que aquece alimentos com radiação de micro-ondas, desenvolvido a partir da tecnologia de radar."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1945, o engenheiro Percy Spencer percebeu o poder de aquecer das micro-ondas quando um doce derreteu no seu bolso, perto de um aparelho ligado. Que doce?",
    "resposta": "Barra de chocolate",
    "distratores": [
      "Bala de caramelo",
      "Marshmallow",
      "Pirulito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Percy_Spencer",
      "https://en.wikipedia.org/wiki/Microwave_oven"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Percy_Spencer",
        "situacao": "ok",
        "texto": "Percy LaBaron Spencer (July 19, 1894, Howland, Maine, U.S – September 8, 1970, Newton, Massachusetts, U.S.) was an American physicist, electrical engineer, and inventor of the microwave oven. As a boy he was twice orphaned and began work at a young age, never finishing grammar school. During the night shift, he taught himself topics such as calculus, trigonometry, physics, and chemistry, establish\n[…]\nSpencer was born July 19, 1894 in Howland, Maine and orphaned at a young age. His father died when he was 18 months old, and his mother was unable to care for him so he lived with his aunt and uncle. When Spencer was seven years old, his uncle died. He left grammar school to earn money to support himself and his aunt.\n[…]\nFor his invention, Spencer received no royalties, but he was paid a one-time $2.00 gratuity from Raytheon, the same token payment the company made to all inventors on its payroll at that time for company patents.\n[…]\nSpencer and his first wife, Louise, had three children: John, James, and George. Later, he married Lillian Ottenheimer on November 18, 1960. He died in Newton, Massachusetts in late 1970 at age 76.\n[…]\nHis friends included Omar Bradley, William Redington Hewlett, David Packard, and Vannevar Bush, who said \"every physicist in the country\" respected Spencer for not only his ingenuity but \"what he has learned about physics by absorbing it through his skin.\"\n[…]\nRaytheon Integrated Defense Systems, which deals extensively in radar systems, named a building after Spencer in the Woburn, Massachusetts facility. An early Radarange model sits in the lobby, across from the dining center.\n[…]\n\"Gramps - How an orphan from Maine became the Edison of the modern age\" by Rod Spencer\n[…]\nInventor's Stories: Percy Spencer\n[…]\nPercy L. Spencer - The National Inventors Hall of Fame\n[…]\n\"Percy Spencer and His Itch to Know\" by Don Murray, Reader's Digest, August 1958"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Microwave_oven",
        "situacao": "ok",
        "texto": "A microwave oven, or simply microwave, is an electric oven that heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range. This induces polar molecules in the food to rotate and produce thermal energy (heat) in a process known as dielectric heating. Microwave ovens heat food quickly and efficiently; the heating effect is fairly uniform in the outer 25–38 mm \n[…]\nMicrowave ovens are a common kitchen appliance in households and kitchens and are popular for reheating previously cooked foods and cooking a variety of different foods. They rapidly heat foods which can easily burn or turn lumpy if cooked rapidly in conventional pans, such as butter, fats, chocolate, or porridge. Microwave ovens usually do not directly brown or caramelize food, since they rarely attain the necessary temperature to produce Maillard reactions.\n[…]\nIn 1945, the heating effect of a high-power microwave beam was independently and accidentally discovered by Percy Spencer, an American self-taught engineer from Howland, Maine. While employed at Raytheon, he noticed that microwaves from an active radar set he was working on started to melt a candy bar he had in his pocket. The first food deliberately cooked by Spencer was popcorn, and the second was an egg, which exploded in the face of one of the experimenters.\n[…]\nTo verify his finding, Spencer created a high-density electromagnetic field by feeding microwave power from a magnetron into a metal box from which it had no way to escape. When food was placed in the box with the microwave energy, the temperature of the food rose rapidly.\n[…]\nOn October 8, 1945, Raytheon filed a United States patent application for Spencer's microwave cooking process, and an oven that heated food using microwave energy from a magnetron was soon placed in a Boston restaurant for testing.\n[…]\nU.S. patent 2,495,429: Percy Spencer's original patent"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Percy_Spencer",
        "situacao": "ok",
        "texto": "Percy Lebaron Spencer (Howland, 19 de julho de 1894 – Newton, 8 de setembro de 1970) foi um engenheiro norte-americano, inventor do forno de micro-ondas em 1945, a serviço da empresa Raytheon.\n[…]\nO efeito calorífico das micro-ondas foi descoberto por Percy Spencer durante a realização de experiências com radares e micro-ondas, quando o engenheiro reparou que a barra de chocolate metida na sua algibeira se tinha quase derretido. Spencer procurou a explicação de tal fato, pôs grãos de milho sob o efeito dessas ondas e, em poucos segundos, eles ficaram transformados em pipocas.\n[…]\nAs micro-ondas tinham agitado as moléculas de água contidas nos grãos de milho, friccionara-as umas contra as outras e aquecera-as.\n[…]\nOs primeiros fornos de micro-ondas eram, porém, caros e pouco práticos. A partir da década de 1970 apareceram modelos menores e mais fáceis de operar.\n[…]\nSpencer continuou na Raytheon como consultor sênior, até que morreu em 1970, aos 76 anos, devido a um câncer causado pela radiação excessiva. Até à época de sua morte, registou 150 patentes e foi considerado um dos maiores peritos do mundo no campo da energia de micro-ondas.\n[…]\nEm 18 de setembro de 1999, Percy Lebaron Spencer foi incluído na National Inventors Hall of Fame.\n[…]\n«Breve história do micro-ondas» (em inglês)\n[…]\n«Fatos fascinantes sobre o inventor do micro-ondas» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Post-it",
      "descricao": "Bloco de papéis autoadesivos removíveis lançado pela empresa americana 3M."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Art Fry, colega de Spencer Silver na 3M, pensou no post-it porque queria marcar páginas sem que os papeizinhos caíssem. Que livro ele usava?",
    "resposta": "Hinário da igreja",
    "distratores": [
      "Livro de receitas",
      "Caderno escolar",
      "Lista telefônica"
    ],
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
        "texto": "Um post-it (ou nota adesiva) é um pequeno pedaço de papel com uma tira de cola re-adesiva no verso, feito para anexar notas temporariamente a documentos e outras superfícies. Um adesivo sensível à pressão de baixa aderência permite que as notas sejam facilmente anexadas, removidas e até recolocadas em outro lugar sem deixar resíduos. Originalmente pequenos quadrados amarelos, os post-its e produto\n[…]\nAté 2019, existem pelo menos 26 cores documentadas de post-its.\n[…]\nEm 1968, Spencer Silver, um cientista da 3M nos Estados Unidos, tentou desenvolver um adesivo super forte. Em vez disso, ele acidentalmente criou um adesivo sensível à pressão \"low-tack\", reutilizável. Por cinco anos, Silver promoveu sua \"solução sem problemas\" dentro da 3M tanto informalmente quanto por meio de seminários, mas não conseguiu ganhar adeptos.\n[…]\nEm 1974, um colega que havia participado de um de seus seminários, Art Fry, teve a ideia de usar o adesivo para ancorar seu marcador em seu hinário. Fry então utilizou a política de \"bootlegging permitido\" da 3M para desenvolver a ideia. A cor amarelo-pálido das notas originais foi escolhida por acaso, a partir da cor do papel de rascunho usado pelo laboratório ao lado da equipe do Post-It.\n[…]\nAlan Amron afirmou ter sido o inventor real em 1973 que divulgou a tecnologia Post-it para a 3M em 1974. Seu processo de 1997 contra a 3M foi resolvido com um pagamento da 3M para Amron. Como parte do acordo, a Amron concordou em não fazer reclamações futuras contra a empresa, a menos que o acordo fosse violado. No entanto, em 2016, ele abriu um novo processo contra a 3M, afirmando que a 3M estava alegando erroneamente ser a inventora e pedindo quatrocentos milhões de dólares em danos.\n[…]\nPost-it homepage\n[…]\nBBC news article on 20th anniversary of Post-it Notes\n[…]\nThe Rake magazine article on 25th anniversary of Post-it notes\n[…]\nPost-it Note History by 3M",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Ar-condicionado",
      "descricao": "Aparelho que retira calor de um ambiente fechado para resfriá-lo, aqui a unidade externa de um sistema split."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1902, Willis Carrier criou o primeiro sistema moderno de ar-condicionado para resolver um problema de umidade em que tipo de empresa?",
    "resposta": "Uma gráfica",
    "distratores": [
      "Uma padaria",
      "Um frigorífico",
      "Um hospital"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Willis_Carrier"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Willis_Carrier",
        "situacao": "ok",
        "texto": "Willis Haviland Carrier (November 26, 1876 – October 7, 1950) was an American engineer, best known for inventing modern air conditioning by inventing the first electrical air conditioning unit in 1902. In 1915, he founded Carrier Corporation, a company specializing in the manufacture and distribution of heating, ventilation, and air conditioning (now abbreviated \"HVAC\") systems.\n[…]\nIn Buffalo, New York, on July 17, 1902, in response to an air quality problem experienced at the Sackett-Wilhelms Lithographing & Publishing Company of Brooklyn, New York, Willis Carrier submitted drawings for what became recognized as the world's first modern air conditioning system.\n[…]\nThe Willis H. Carrier Total Indoor Environmental Quality Lab at the Syracuse University's Center of Excellence in Environmental and Energy Systems is named in his honor. The lab was established in 2010 with a donation from the Carrier Corp.\n[…]\nCarrier met Edith Claire Seymour at Cornell and they married on August 29, 1902. Edith Claire Seymour died in 1912. He married Jennie Tifft Martin on April 16, 1913. She died in 1939. He married Elizabeth Marsh Wise of Terre Haute, Indiana on February 7, 1941. Carrier and all three of his wives are buried in Forest Lawn Cemetery in Buffalo, New York. Carrier fathered one child, Howard Carter Willis.\n[…]\nFor his contributions to science and industry, Willis Carrier was awarded an engineering degree by Lehigh University in 1935 and an honorary Doctor of Letters degree by Alfred University in 1942. He received the ASME Medal in 1934. Carrier was awarded the Frank P. Brown Medal and elected an Honorary Member of the American Society of Mechanical Engineers in 1942. He was inducted posthumously in the National Inventors Hall of Fame (1985) and the Buffalo Science Museum Hall of Fame (2008).\n[…]\nRational Psychrometric Formulae, by Willis H. Carrier (1911)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Willis_Carrier",
        "situacao": "ok",
        "texto": "Willis Haviland Carrier (Condado de Erie, 26 de novembro de 1876 – Nova Iorque, 7 de outubro de 1950) foi um engenheiro norte-americano, conhecido como o inventor do ar-condicionado e do umidificador de ar moderno. Carrier inventou a primeira unidade de ar-condicionado elétrico em 1902. Em 1915 fundou a Carrier Corporation, uma empresa especializada na fabricação e distribuição de sistemas de aque\n[…]\nEm 1897, Willis Carrier conseguiu uma bolsa de estudos da Universidade Cornell e se formou em 1901 com licenciatura em engenharia mecânica.\n[…]\nEm Buffalo, Nova Iorque, no dia 17 de julho de 1902, ao tentar resolver um problema de qualidade existente na Lithographing Sackett-Wilhelms & Publishing Company of Brooklyn, Carrier apresentou seus desenhos que se tornariam mais tarde o sistema do ar-condicionado conhecido hoje.\n[…]\nA instalação em 1903 marcou o nascimento do ar-condicionado e do umidificador de ar, por causa da adição de controle de umidade, o que levou ao reconhecimento por parte das autoridades no domínio que o ar-condicionado deve realizar quatro funções básicas:\n[…]\nControle da umidade\n[…]\nApós vários anos de refinamento e testes de campo, em 2 de janeiro de 1906, nasceu a Carrier Corporation. A invenção de patente nº 808 897, que ele chamou de um \"aparelho para o tratamento do ar\", foi o primeiro tipo de equipamento de ar-condicionado no mundo.\n[…]\nFoi projetado para umidificar ou desumidificar o ar, fazendo o aquecimento de água para umidificar e a refrigeração de água para retirar a umidade do ar. A primeira venda do aparelho foi feita no final de 1906, para o LaCrosse National Bank, La Crosse, Wisconsin.\n[…]\nWillis era filho de Duane Carrier Williams (1836–1908) e Elizabeth R. Haviland (1845–1888). Elizabeth era filha de David Jay Haviland e Elizabeth Ann Button.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Semáforo",
      "descricao": "Sinal luminoso que controla o trânsito de veículos e pedestres; o primeiro foi instalado em Londres em 1868."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Instalado em dezembro de 1868, o primeiro semáforo de Londres, movido a gás, durou pouco. Por que ele foi abandonado poucas semanas depois?",
    "resposta": "Explodiu, ferindo o policial",
    "distratores": [
      "Atropelado por carruagem",
      "Assustava os cavalos",
      "Faltou gás"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Traffic_light"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Traffic_light",
        "situacao": "ok",
        "texto": "Traffic lights, traffic signals, or stoplights – also known as robots in South Africa, Zambia, and Namibia – are signaling devices positioned at road intersections, pedestrian crossings, and other locations to control the flow of traffic.\n[…]\nIn December 1868, the first traffic signals showing a red or green light at night were installed outside the Houses of Parliament in London. They were invented by John Peake Knight. A police constable raised or lowered the semaphore arms and, at night, operated a lever to control the lights which drivers and pedestrians saw. This system exploded on 2 January 1869 and was taken down. This early traffic signal led to other parts of the world implementing similar traffic signal systems.\n[…]\nIn the US, an intersection is usually required to meet one or more of these warrants before a signal is installed. However, meeting one or more warrants does not require installing a traffic signal; it only suggests that a signal may be suitable. It could be that a roundabout would work better. There may be other unconsidered conditions that lead traffic engineers to conclude that a signal is undesirable.\n[…]\nFor example, it may be decided not to install a signal at an intersection if traffic stopped by it will back up and block another, more heavily trafficked intersection. Also, if a signal meets only the peak-hour warrant, the advantages during that time may not outweigh the disadvantages during the rest of the day.\n[…]\nIn China, the standards for setting traffic signals is defined in GB 14886-2016: Specifications for road traffic signal setting and installation, published in 2016 and implemented in 2017. A signal shall be placed at intersections that meet the following criteria:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sem%C3%A1foro",
        "situacao": "ok",
        "texto": "Semáforos, também conhecidos como robôs na África do Sul, Zâmbia e Namíbia – são dispositivos de sinalização posicionados em cruzamentos de estradas, passagens de pedestres e outros locais para controlar o fluxo de tráfego.\n[…]\nOs semáforos foram introduzidos pela primeira vez em dezembro de 1868 na Praça do Parlamento, em Londres, para reduzir a necessidade de policiais para controlar o tráfego. Desde então, a eletricidade e o controle computadorizado aprimoraram a tecnologia dos semáforos e aumentaram a capacidade dos cruzamentos.\n[…]\n\"Semáforo\" procede da composição dos termos gregos sêma, atos (sinal) e phorós, ós, ón (que conduz).\n[…]\nEm dezembro de 1868, os primeiros semáforos que exibiam luz vermelha ou verde à noite foram instalados em frente ao Parlamento, em Londres. Eles foram inventados por John Peake Knight. Um policial levantava ou abaixava os braços do semáforo e, à noite, operava uma alavanca para controlar as luzes que motoristas e pedestres viam. Esse sistema explodiu em 2 de janeiro de 1869 e foi desmontado. Esse primeiro semáforo levou outras partes do mundo a implementarem sistemas de semáforos semelhantes.\n[…]\nPotts era Superintendente de Sinais do Departamento de Polícia de Detroit. Em 1921, ele instalou semáforos automáticos de quatro vias e três cores em 15 torres em Detroit.\n[…]\nEm Portugal, o primeiro semáforo terá sido instalado em 1928, no cruzamento entre a Avenida da Liberdade e a Rua das Pretas, em Lisboa. O mesmo funcionava apenas com duas cores de luzes e era operado manualmente por um guarda sinaleiro da Polícia.\n[…]\nSemáforos, 1922, fotografia digitalizada do Departamento de Polícia de Nova Iorque (NYPD) pertencente às Coleções Digitais da Biblioteca Lloyd Sealy.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Nicolas Appert",
      "descricao": "Confeiteiro francês (1749–1841) que criou o método de conservar alimentos cozidos em recipientes hermeticamente fechados."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Nicolas Appert, pai das conservas, ganhou em 1810 um prêmio do governo francês, que buscava um jeito de conservar comida para alimentar quem?",
    "resposta": "As tropas francesas",
    "distratores": [
      "Prisioneiros de guerra",
      "Doentes dos hospitais",
      "Colonos na América"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nicolas_Appert"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nicolas_Appert",
        "situacao": "ok",
        "texto": "Nicolas Appert (17 November 1749 – 1 June 1841) was a French confectioner and inventor who, in the early 19th century, invented airtight food preservation. Appert, known as the \"father of food science\", described his invention as a way \"of conserving all kinds of food substances in containers\".\n[…]\nIn 1810 the Bureau of Arts and Manufactures of the Ministry of the Interior gave Appert an ex gratia payment of 12,000 francs on condition that he make his process public. Appert accepted and published a book describing his process that year. Appert's treatise was entitled L'Art de conserver les substances animales et végétales (The Art of Preserving Animal and Vegetable Substances), 6,000 copies of which were printed in 1810.\n[…]\nAppert's canned goods were widely appreciated, especially by naval services as the products were far superior to the dried and salted provisions on which they had previously relied. Cans were exported to Bavaria and Saint Petersburg, and received praise from newspapers across France. However, this did not translate into financial success.\n[…]\nIn 1985 a street in Paris, the Rue Nicolas-Appert, was constructed and named in his honour. Many other streets in France bear his name.\n[…]\nThere is a high school named after Nicolas Appert in Orvault, France.\n[…]\nThe student association of the Food Technology education at Wageningen University is called Nicolas Appert. Since 1962 this association has focused on improving courses related to food technology education and organises several events each year for students and alumni. In 2022 the association celebrated its 12th lustrum.\n[…]\nAppert-aina.com Archived 4 September 2011 at the Wayback Machine\n[…]\nStudy association Nicolas Appert\n[…]\nWorks by Nicolas Appert at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nicolas_Appert",
        "situacao": "ok",
        "texto": "Nicolas Appert (Châlons-en-Champagne, 17 de novembro de 1749 – Massy, 1 de junho de 1841) foi um inventor e industrial francês. Descobriu que o aquecimento de alimentos em recipientes fechados poderia interromper o processo de fermentação. Em 1795 iniciou a comercialização de alimentos conservados em garrafas. Suas técnicas foram as precursoras dos métodos atuais de conservação de alimentos em lat\n[…]\nAppert foi ativo durante a Revolução Francesa e até mesmo participou da execução do rei Luís XVI. No entanto, ele caiu sob suspeita durante o subsequente período do Terror e foi preso em abril de 1794, mas ele mesmo conseguiu evitar ser executado. Em 1795, ele começou a experimentar maneiras de conservar alimentos, obtendo sucesso com sopas, vegetais, sucos, laticínios, geleias e xaropes.\n[…]\nApesar de seus sucessos, Appert teve problemas financeiros devido ao alto custo de seu equipamento e ao fato de não ser um bom empresário. Ele declarou falência em 1806, mas conseguiu continuar seu negócio. Em 1795, Napoleão ofereceu um prêmio de 12 mil francos por um novo método de conservação de alimentos. Em 1806, Appert apresentou uma seleção de frutas e vegetais engarrafados de sua manufatura na Exposition des produits de l'industrie française, mas não ganhou nenhuma recompensa.\n[…]\nEste foi o primeiro livro de receitas de seu tipo em métodos modernos de preservação de alimentos.\n[…]\nNo entanto, apesar da concessão do governo, sua situação financeira não melhorou e foi exacerbada pela destruição de sua fábrica em Massy pelas forças prussianas e austríacas no final da Guerra da Sexta Coalizão em 1814. Com o apoio do Governo francês na forma de aluguel gratuito, ele abriu uma nova fábrica em Paris para conservar alimentos em latas, que durou dez anos até que o mesmo governo o despejou em dezembro de 1827.\n[…]\nPrémio Nicholas Appert\n[…]\nNicolas Appert - \"Le Livre de tous les Ménages\" (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Fonógrafo",
      "descricao": "Aparelho de cilindro que grava e reproduz sons mecanicamente, inventado em 1877."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No fonógrafo de Edison, de 1877, o som ficava gravado num cilindro envolto por uma folha fina de que material?",
    "resposta": "Estanho",
    "distratores": [
      "Cera",
      "Cobre",
      "Papel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Phonograph"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Phonograph",
        "situacao": "ok",
        "texto": "A phonograph, later called a gramophone, and since the 1940s a record player, or more recently a turntable, is a device for the mechanical and analogue reproduction of sound.\n[…]\nHe announced his invention of the first phonograph, a device for recording and replaying sound, on November 21, 1877 (early reports appear in Scientific American and several newspapers in the beginning of November, and an even earlier announcement of Edison working on a \"talking-machine\" can be found in the Chicago Daily Tribune on May 9), and he demonstrated the device for the first time on November 29 (it was patented on February 19, 1878, as US Patent 200,521).\n[…]\nOn the occasion of the 50th anniversary of the phonograph, Edison recounted reciting Mary Had a Little Lamb to test his first machine. The 1927 event was filmed by an early sound-on-film newsreel camera, and an audio clip from that film's soundtrack is sometimes mistakenly presented as the original 1877 recording.\n[…]\nAlthough Edison had invented the phonograph in 1877, the fame bestowed on him for this invention was not due to its efficiency. Recording with his tinfoil phonograph was too difficult to be practical, as the tinfoil tore easily, and even when the stylus was properly adjusted, its reproduction of sound was distorted, and good for only a few playbacks; nevertheless Edison had discovered the idea of sound recording.\n[…]\nPhonograph cylinder\n[…]\nKoenigsberg, Allen. The Patent History of the Phonograph, 1877–1912. APM Press, 1991.\n[…]\nListen to early recordings on the Edison Phonograph\n[…]\nSay What? – Essay on phonograph technology and intellectual property law\n[…]\nHistoric video footage of Edison operating his original tinfoil phonograph"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fon%C3%B3grafo",
        "situacao": "ok",
        "texto": "O Fonógrafo é um aparelho inventado em 1877 por Thomas Edison para a gravação e reprodução de sons através de um cilindro. Ele foi o primeiro aparelho capaz de gravar e reproduzir sons.\n[…]\nO fonógrafo foi anunciado por Edison em 21 de novembro de 1877 e teve a sua primeira demonstração pública em 29 de novembro do mesmo ano. O aparelho consistia em um cilindro com sulcos coberto por uma folha de estanho. Uma ponta aguda era pressionada contra este cilindro e, conectados à ponta oposta, ficavam um diafragma (uma membrana circular, cujas vibrações convertiam sons em impulsos mecânicos e vice-versa) acoplado a um grande bocal em forma de cone.\n[…]\nDuas empresas distintas foram formadas para explorar o cilindro e, no final da década, a comercialização dos aparelhos (o fonógrafo de Edison e o grafofone de Bell) e de cilindros virgens e gravados com música ou palavra falada já dava lucros significativos nos Estados Unidos.\n[…]\nAssim, em 1912, a gravadora de Edison, a Edison Records, passa a comercializar discos e aparelhos que tocavam esses discos. Entretanto, os discos de Edison eram diferentes e apenas o seu fonógrafo adaptado poderia tocá-los.\n[…]\nA gravação de cilindros é grande até 1913, quando é fundada fábrica de prensagem de discos da Odeon, no Rio de Janeiro, que passa a abastecer com discos a Casa Edison e provoca o início do fim da comercialização de cilindros e de fonógrafos no Brasil. Esta parceria duraria até 1926, com o início das gravações elétricas e a decisão da Odeon de abrir filial no Brasil.\n[…]\nGravador\n[…]\nListen to early recordings on the Edison Phonograph\n[…]\nVídeo histórico de Edison operando seu fonógrafo de papel alumínio original",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Prensa de Gutenberg",
      "descricao": "Prensa de tipos móveis metálicos desenvolvida por Johannes Gutenberg em meados do século quinze."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Os tipos móveis usados na prensa de Gutenberg eram fundidos numa liga à base de que metal, misturado com estanho e antimônio?",
    "resposta": "Chumbo",
    "distratores": [
      "Ferro",
      "Cobre",
      "Zinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Johannes_Gutenberg",
      "https://en.wikipedia.org/wiki/Type_metal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Johannes_Gutenberg",
        "situacao": "ok",
        "texto": "Johannes Gensfleisch zur Laden zum Gutenberg (c. 1393–1406 – 1468) was a German inventor and craftsman who invented the movable-type printing press. Though movable type was already in use in East Asia, Gutenberg's invention of the printing press enabled a much faster rate of printing. The printing press later spread across the world, and led to an information revolution and the unprecedented mass-\n[…]\nAround 1439, Gutenberg was involved in a financial misadventure making polished metal mirrors (which were believed to capture holy light from religious relics) for sale to pilgrims to Aachen: in 1439 the city was planning to exhibit its collection of relics from Emperor Charlemagne but the event was delayed by one year due to a severe flood and the capital already spent could not be repaid.\n[…]\nIn 2001, the physicist Blaise Agüera y Arcas and Princeton librarian Paul Needham, used digital scans of a Papal bull in the Scheide Library, Princeton, to carefully compare the same letters (types) appearing in different parts of the printed text. Gutenberg's type had irregularities, particularly in simple characters like the hyphen. These variations could not have been caused by ink smears or wear on the metal pieces.\n[…]\nA 1568 book Batavia by Hadrianus Junius from Holland claims the idea of the movable type came to Gutenberg from Laurens Janszoon Coster via Fust, who was apprenticed to Coster in the 1430s and may have brought some of his equipment from Haarlem to Mainz. While Coster appears to have experimented with moulds and castable metal type, there is no evidence that he had actually printed anything with this technology. He was an inventor and a goldsmith.\n[…]\nGutenberg-Museum Mainz, Germany – English homepage\n[…]\nGutenberg Bible Archived 10 June 2023 at the Wayback Machine at the British Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Type_metal",
        "situacao": "ok",
        "texto": "In printing, type metal refers to the metal alloys used in traditional typefounding and hot metal typesetting. Historically, type metal was an alloy of lead, tin and antimony in different proportions depending on the application, be it individual character mechanical casting for hand setting, mechanical line casting or individual character mechanical typesetting and stereo plate casting. The propo\n[…]\nDespite patiently trying different proportions of both metals, solving the second part of the type metal problem proved very difficult without the addition of yet a third metal, antimony.\n[…]\nAntimony (Sb) is a metalloid element, which melts at 630 °C (1,166 °F). Antimony forms a useful alloy with lead, increasing its hardness and mechanical strength. When casting, it increases fluidity of the melt and reduces shrinkage during cooling. When alloyed with lead to produce type metal, antimony gives it the hardness it needs to resist deformation during printing, and gives it sharper castings from the mould to produce clear, easily read printed text on the page.\n[…]\nRegeneration-metal was melted into the crucible to replace lost tin and antimony through the dross.\n[…]\nEvery time type metal is remelted, tin and antimony oxidise. These oxides form on the surface of the crucible and must be removed. After stirring the molten metal, grey powder forms on the surface, the dross, needing to be skimmed. Dross contains recoverable amounts of tin and antimony.\n[…]\nThe Metal Founders make Printing Letters of, is Lead hardned with Iron: Thus they chuse stub-Nails for the best Iron to Melt, as well because they are asured stub-Nails are made of good soft and tough Iron, as because (they being in small pieces of Iron) will Melt the sooner. To make the Iron Run, they mingle an equal weight of Antimony (beaten in an Iron-Morter into small pieces) and stub-Nails together."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Johannes_Gutenberg",
        "situacao": "ok",
        "texto": "Para outros significados de Gutenberg, veja Gutenberg (desambiguação).\n[…]\nJohannes Gensfleisch zur Laden zum Gutenberg (c. 1393–1406 – 1468) foi um inventor e artesão alemão que desenvolveu a prensa tipográfica de tipos móveis. Embora já se imprimisse com tipos móveis na Ásia Oriental, Gutenberg reuniu na Europa tipos de metal, tinta e uma prensa mecânica num sistema capaz de produzir livros em grande escala.\n[…]\nEntre as contribuições atribuídas a Gutenberg estão um processo de produção em massa de tipos móveis, o uso de tinta à base de óleo na impressão de livros, moldes ajustáveis, tipos móveis de metal e uma prensa de madeira semelhante às prensas agrícolas de parafuso da época. Tradicionalmente, considera-se que seu método empregava uma liga metálica e um molde manual para fundir os tipos.\n[…]\nA liga reunia chumbo, estanho e antimônio, fundia a uma temperatura relativamente baixa e produzia peças duráveis. Sua obra mais conhecida, a Bíblia de Gutenberg, foi a primeira obra de grande porte impressa na Europa com tipos móveis de metal e recebeu elogios por sua qualidade técnica e estética.\n[…]\nGutenberg morou em Estrasburgo pelo menos até 1444, provavelmente na paróquia de São Arbogasto. Uma praça da cidade hoje leva seu nome. Num contrato firmado em 1438, Gutenberg mencionou künste vnd afentur, expressão usada na época para atividades artesanais e comerciais. Os documentos sugerem experiências com uma prensa e com formas de metal, mas não permitem afirmar que já imprimisse com tipos móveis em Estrasburgo. Segue-se uma lacuna de quatro anos na documentação.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Metro",
      "descricao": "Unidade de comprimento do Sistema Internacional, criada na França no fim do século dezoito."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em 1799, a França fabricou uma barra-padrão para definir o metro, guardada nos Arquivos Nacionais de Paris. De que metal ela era feita?",
    "resposta": "Platina",
    "distratores": [
      "Ouro",
      "Prata",
      "Ferro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/History_of_the_metre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/History_of_the_metre",
        "situacao": "ok",
        "texto": "During the French Revolution, the traditional units of measure were to be replaced by consistent measures based on natural phenomena. As a base unit of length, scientists had favoured the seconds pendulum (a pendulum with a half-period of one second) one century earlier, but this was rejected as it had been discovered that this length varied from place to place with local gravity.\n[…]\nFollowing the arc measurement of Delambre and Méchain, the historical French official standard of the metre was made available in the form of the Mètre des Archives, a platinum bar held in Paris. It was originally also planned to dematerialise the definition of the metre by counting the number of swings of a one-metre-long pendulum during a day at a latitude of 45°. However, dematerialising the definition of units of length by means of the pendulum would prove less reliable than artefacts.\n[…]\nThe Mètre des Archives and its copies such as the Committee Meter were replaced from 1889 by a new standard metre made of platinum-iridium, and 29 bars calibrated against it were distributed to different nations. This improved standardisation involved the development of specialised measuring equipment and the definition of a reproducible temperature scale.\n[…]\nIn 1799, the measurement of part of the meridian, from Dunkirk to Barcelona, was completed and a correction for the Earth's non-spherical shape calculated from that and another survey. A metre bar was accordingly made of platinum and designated by law as the primary standard metre. This was kept in the National Archives and known as the Mètre des Archives. Another platinum metre, calibrated against the Mètre des Archives, and twelve iron ones were made as secondary standards.\n[…]\nAccordingly, the 11th CGPM in 1960 agreed a new definition of the metre:\n[…]\nThis definition was reworded in 2019:\n[…]\nParis meridian#History"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Galileu Galilei",
      "descricao": "Astrônomo, físico e matemático italiano (1564–1642), pioneiro do uso do telescópio na astronomia."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que parte do corpo de Galileu Galilei, retirada quando seus restos foram transferidos de túmulo, está exposta num museu de Florença?",
    "resposta": "O dedo médio",
    "distratores": [
      "O crânio",
      "O coração",
      "Um olho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Museo_Galileo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Museo_Galileo",
        "situacao": "ok",
        "texto": "Museo Galileo (formerly Istituto e Museo di Storia della Scienza; Institute and Museum of the History of Science) is located in Florence, Italy, in Piazza dei Giudici, along the River Arno and close to the Uffizi Gallery. The museum, dedicated to astronomer and scientist Galileo Galilei, is housed in Palazzo Castellani, an 11th-century building which was then known as the Castello d'Altafronte.\n[…]\nMuseo Galileo publishes historical scientific works and two journals, which are Nuncius: Journal of the Material and Visual History of Science, and Galilaeana, devoted to research about the figure, work and scientific findings of Galileo Galilei.\n[…]\nAware of the growing importance of information and communication technologies, Museo Galileo started its own Multimedia Lab in 1991. The Lab produces offline and online interactive applications related to the dissemination and documentation of both permanent collections and temporary exhibitions. It also creates digital archives for historical scientific research.\n[…]\nGalileo Galilei\n[…]\nCamerota, Filippo, ed. (2010). Museo Galileo: Masterpieces of Science. Firenze: Giunti. ISBN 9788809748828.\n[…]\nCamerota F., ed. (2010). Museo Galileo: Masterpieces of Science. Giunti. ISBN 9788809748828.\n[…]\nF. Camerota, ed. (2010). Museo Galileo: A Guide to the Treasures of the Collection. Firenze: Giunti. ISBN 9788809748835.\n[…]\nF. Camerota, ed. (2012). Galileo and the Measurement of Time: Interactive Area,. Firenze: Giunti. ISBN 9788809776067.\n[…]\nToday’s discovery is... Galileo and the Science of his Time. Milano: Touring Junior. 2013. ISBN 9788836564507.\n[…]\nF. Camerota, ed. (2012). Displaying Scientific Instruments: From the Medici Wardrobe to the Museo Galileo. Milano: Goppion. ISBN 9788888714172.\n[…]\nMuseo Galileo\n[…]\nMuseums in Florence - Museum Galileo - History of Science"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Palazzo_Castellani_%28Floren%C3%A7a%29",
        "situacao": "ok",
        "texto": "O Palazzo Castellani é um palácio de Florença que se encontra na Piazza dei Giudici, logo por trás da esplanada da Galleria degli Uffizi. Actualmente, o severo edifício medieval de três andares hospeda o Museu de História da Ciência (Museo Galileo-Istituto e Museo di Storia della Scienza) de Florença, onde se conserva uma das mais importantes colecções científicas a nível nacional e internacional.\n[…]\nO Palazzo Castellani surge no sítio do antiquíssimo Castello d'Altafronte, satado de finais do século XI, que era a fortaleza que protegia o porto fluvial no Arno e fazia parte da cerca antiga das muralhas de Florença.\n[…]\nO museu foi inaugurado em 1930 e recolhe preciosos instrumentos científicos, em parte provenientes das colecções mediceas em tempos expostas no museu La Specola - um polo do Museu de História Natural de Florença instalado no Palazzo Torrigiani, vizinho do Palazzo Pitti - em parte das colecções do Arcispedale di Santa Maria Nuova e em parte de outras fontes através de aquisições e doações.\n[…]\nOs objectos e os instrumentos expostos cobrem um arco de tempo que vai do Renascimento ao século XIX. Embora inicialmente a exposição fosse uma pura exibição de memórias (cimeli - como os famosos binóculos de Galileo), depois da reordenação que se seguiu à inundação de Florença de 1966 e da renovação de 1991, hoje assumiu a fisionomia de um verdadeiro instituto científico de pesquisa para estudiosos italianos e estrangeiros, enriquecido, ainda, por uma importante biblioteca.\n[…]\nA exposição articula-se segundo critérios temáticos em vinte salas. Além dos já citados binóculos pertencente ao ilustre cientista pisano Galileo Galilei, o museu conserva também o termoscópio, o compasso geométrico militar, o plano inclinado e um primitivo \"microscópio\", todos usados pelo inventor do método científico nas suas múltiplas experiências.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Nikola Tesla",
      "descricao": "Engenheiro e inventor sérvio-americano (1856–1943), pioneiro da corrente alternada."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Nikola Tesla, filho de sérvios, nasceu em 1856 numa aldeia do Império Austríaco que hoje pertence a que país?",
    "resposta": "Croácia",
    "distratores": [
      "Sérvia",
      "Hungria",
      "Bósnia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nikola_Tesla",
      "https://en.wikipedia.org/wiki/Smiljan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nikola_Tesla",
        "situacao": "ok",
        "texto": "Nikola Tesla (10 July 1856 – 7 January 1943) was a Serbian-American engineer, futurist, and inventor. He is known for his contributions to the design of the modern alternating current (AC) electricity supply system.\n[…]\nTesla was born into a family of ethnic Serbs on 10 July 1856 in Smiljan, then part of the Military Frontier of the Austrian Empire and now part of Croatia. His father, Milutin Tesla (1819–1879), was a priest of the Eastern Orthodox Church. His father's brother Josif was a lecturer at a military academy who wrote several textbooks on mathematics.\n[…]\nTesla was the fourth of five children. In 1861, Tesla attended primary school in Smiljan where he studied German, arithmetic, and religion. In 1862, the Tesla family moved to the nearby town of Gospić, where Tesla's father worked as parish priest. Nikola completed primary school, followed by middle school. Later in his patent applications, before he obtained American citizenship, Tesla would identify himself as \"of Smiljan, Lika, border country of Austria-Hungary\".\n[…]\nIn 1952, following pressure from Sava Kosanović, Tesla's entire estate was shipped to Belgrade in 80 trunks marked \"N.T.\". In 1957, Kosanović's secretary Charlotte Muzar transported Tesla's ashes from the United States to Belgrade. They are displayed in a gold-plated sphere on a marble pedestal in the Nikola Tesla Museum. His archive consists of over 160,000 documents and is included in the UNESCO Memory of the World Programme.\n[…]\nFBI. \"Nikola Tesla\" (PDF). Main Investigative File. FBI.\n[…]\nWorks by Nikola Tesla at Project Gutenberg\n[…]\nWorks by or about Nikola Tesla at the Internet Archive\n[…]\nWorks by Nikola Tesla at LibriVox (public domain audiobooks)\n[…]\n\"Tesla's pigeon\" – Amanda Gefter"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Smiljan",
        "situacao": "desambiguacao",
        "texto": "Smiljan may refer to:\n\nSmiljan (given name), a South Slavic masculine personal name\nSmiljan, Croatia, a village near Gospić\nSmilyan, a village near Smolyan, Bulgaria\n\n\n== See also ==\nAll pages with titles containing Smiljan\nSmilja\nSmiljanić\nMiljan"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nikola_Tesla",
        "situacao": "ok",
        "texto": "Nikola Tesla (em sérvio: Никола Тесла; pronunciação sérvia: [nǐkola têsla]; Smiljan, 10 de julho de 1856 — Nova Iorque, 7 de janeiro de 1943) foi um inventor, físico experimental, engenheiro eletricista e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada (CA).\n[…]\nNikola Tesla nasceu de família sérvia na aldeia Smiljan, condado de Lika, no Império Austríaco, em 10 de julho de 1856. Seu pai, Milutin Tesla (1819–1879 ), era um padre ortodoxo sérvio. A mãe de Tesla, Đuka Tesla (née Mandić; 1822-1892), cujo pai também era um padre ortodoxo sérvio, tinha um talento para fabricar ferramentas artesanais, aparelhos mecânicos e a capacidade de memorizar poemas épicos sérvios. Đuka nunca recebeu uma educação formal.\n[…]\nEm 1875, Tesla se matriculou no Politécnico Austríaco em Graz, na Áustria, após conseguir uma bolsa. Durante seu primeiro ano, Tesla nunca perdeu uma aula, obteve as notas mais altas possíveis, passou em nove exames (quase o dobro do necessário), fundou um clube cultural sérvio e até recebeu uma carta de recomendação do reitor da faculdade técnica a seu pai, que dizia: \"Seu filho é uma estrela de primeira linha\".\n[…]\nDificilmente existe uma nação que experimentou um destino mais difícil e sofredora do que a Sérvia. Do auge de seu maior esplendor, quando o império abrangia quase toda a parte norte da Península Balcânica, bem como a grande área que hoje pertence à Áustria, o povo sérvio caiu na ocupação trágica após a batalha fatídica em Kosovo em 1389 , lutando contra horda asiáticas superior.\n[…]\nA maioria dos familiares de Nikola Tesla foram mortos pelo exercito nazista croata pelo fato dos familiares de Tesla serem Cristãos Ortodoxos e Sérvios, com motivação de genocídio.\n[…]\nMuseu Nikola Tesla\n[…]\nFBI. «Nikola Tesla» (PDF). Main Investigative File",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Henry Ford",
      "descricao": "Industrial americano, fundador da Ford Motor Company e pioneiro da produção em massa de automóveis."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Nos anos vinte, Henry Ford criou na Amazônia a cidade de Fordlândia para produzir borracha. Ela fica às margens de que rio?",
    "resposta": "Rio Tapajós",
    "distratores": [
      "Rio Xingu",
      "Rio Madeira",
      "Rio Negro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fordl%C3%A2ndia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fordl%C3%A2ndia",
        "situacao": "ok",
        "texto": "Fordlândia is a district and adjacent area of 14,268 square kilometres (5,509 sq mi) in the city of Aveiro, Pará, Brazil. It is located on the east banks of the Tapajós river roughly 300 kilometres (190 mi) south of the city of Santarém.\n[…]\nFord had negotiated a deal with the Brazilian government granting him a concession of 10,000 km2 (3,900 sq mi) of land on the banks of the Rio Tapajós near the city of Santarém, Pará, Brazil, in exchange for a 9% share in the profits generated. Ford's project failed, and the city was abandoned in 1934.\n[…]\nIn spite of the huge investment and numerous invitations, Henry Ford never visited either of his ill-fated towns. A 2009 NPR article reported, \"Not one drop of latex from Fordlândia ever made it into a Ford car\".\n[…]\nIn 2009, Greg Grandin published his non-fiction account Fordlandia: The Rise and Fall of Henry Ford's Forgotten Jungle City, and Montreal artist Scott Chandler produced photos.\n[…]\nIn the PC game The Amazon Trail, the player travels back in time to meet Henry Ford there.\n[…]\nBraudeau, Michel (2004). \"Henry Ford vaincu par la « rouille »\". Le rêve amazonien [Henry Ford defeated by 'rust'] (in French). éditions Gallimard. ISBN 2-07-077049-4.\n[…]\nColón, Marcos (2018). Beyond Fordlândia: An Environmental Account of Henry Ford's Adventures in the Amazon. Amazônia Latitude Films.\n[…]\nGrandin, Greg (2009). Fordlandia: The Rise and Fall of Henry Ford's Forgotten Jungle City. Metropolitan Books. ISBN 978-0805082364.\n[…]\nFordlandia: The Rise and Fall of Henry Ford’s Forgotten Jungle City - Democracy Now, broadcast 2 July 2009, Video and Discussion (transcript available).\n[…]\nFordlandia on Flickr - Historic images from the Benson Ford Research Center, a library and archive located at the Henry Ford Museum."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fordl%C3%A2ndia",
        "situacao": "ok",
        "texto": "Fordlândia é um distrito brasileiro de 14 568 km² de extensão, no município paraense de Aveiro, situado às margens do Rio Tapajós, na Amazônia. Recebeu este nome porque foi uma cidade operária do projeto agroindustrial \"Fordlândia\" do empresário estadunidense Henry Ford em 1927.\n[…]\nFord também sonhava em recriar uma nova América, que estava se deteriorando em seu país. Assim ergueu, nas margens do rio Tapajós, uma localidade com boa infraestrutura: luz elétrica, praças, cinemas, piscinas, campos de golfe e casas nos moldes das pequenas cidades dos Estados Unidos. Atualmente pleiteia emancipação política.\n[…]\nOs termos da concessão, proposta pelo então governador Dionísio Bentes, isentavam a Companhia Ford do Brasil pagamento de qualquer taxa de exportação dos bens produzidos na gleba (borracha, látex, pele, couro, petróleo, sementes, madeira e outros). Jorge Dumont Villares, representante do governador, conduziu as negociações em visita a Henry Ford nos EUA, enquanto no Brasil \"O. Z. Ide\" e \"W. L. Reeves Blakeley\" representaram a Ford.\n[…]\nNa literatura, o historiador da Universidade de Nova Iorque Greg Grandin lançou o livro Fordlândia – A Ascensão e a Queda da Cidade Perdida na Selva de Henry Ford, considerado um dos cem melhores livros publicados em 2009 (no ranking do The New York Times). Além disso, um documentário sobre a cidade também foi desenvolvido pelos brasileiros Marinho Andrade e Daniel Augusto.\n[…]\n«Fordlândia: A derrapada do Ford (arquivado)»\n[…]\nFordlandia: The Rise and Fall of Henry Ford’s Forgotten Jungle City, video e discussão - Democracy Now, postado em 2 de julho de 2009 (transcrição avaliada).\n[…]\nFordlandia on Flickr, imagens históricas por Benson Ford Research Center, biblioteca localizada no the Henry Ford Museum.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Hangar do Zeppelin",
      "descricao": "Hangar construído nos anos 1930 em Santa Cruz, no Rio de Janeiro, para receber os dirigíveis alemães, hoje na Base Aérea de Santa Cruz."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O hangar construído nos anos trinta para receber os zepelins alemães no Brasil, ainda de pé numa base aérea, fica em que cidade?",
    "resposta": "Rio de Janeiro",
    "distratores": [
      "Recife",
      "Salvador",
      "São Paulo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hangar_do_Zeppelin",
      "https://pt.wikipedia.org/wiki/Base_A%C3%A9rea_de_Santa_Cruz"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hangar_do_Zeppelin",
        "situacao": "ok",
        "texto": "O chamado Hangar do Zeppelin localiza-se nas dependências da Base Aérea de Santa Cruz, unidade da Força Aérea Brasileira, no bairro de Santa Cruz na zona oeste da cidade do Rio de Janeiro. Trata-se de um hangar, edificação de grandes dimensões destinada a abrigar os dirigíveis alemães conhecidos como zeppelin. Atualmente é um dos últimos hangares de dirigíveis existentes e um dos mais bem conserva\n[…]\nCom a tragédia do LZ 129 Hindenburg em 1937 e a eclosão da Segunda Guerra Mundial em 1939, o antigo Aeroporto Bartolomeu de Gusmão foi transformado na Base Aérea de Santa Cruz no ano de 1941, e o hangar passou a abrigar as diversas unidades aéreas militares que ali se instalaram ao longo dos anos. Ainda no contexto da Segunda Guerra, foi utilizado como base aérea para os Blimps da aviação naval norte-americana (US Navy), que patrulhavam a costa brasileira.\n[…]\nO hangar da base aérea de Santa Cruz atualmente é um dos últimos hangares para dirigíveis existentes no mundo. Ainda sobreviveram dentre outros, o que servia a linha alemã de passageiros para os Estados Unidos, o Hangar Number One, em Lakehurst (Naval Air Station Lakehurst), e que se transformou em monumento nacional. Em Akron, estado de Ohio, existe ainda o Akron Airdock da Goodyear  , e na cidade de Tustin, no estado da Califórnia, há também outros dois hangares .\n[…]\nO edifício do hangar da Base Aérea de Santa Cruz, encontra-se tombado pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN), desde 1998, recebendo a inscrição de tombamento no 550. É um dos últimos exemplares e um dos mais bem conservados no mundo hoje.\n[…]\nEm 2009, foi encaminhado projeto de lei, para o seu reconhecimento pela Câmara de Vereadores da Cidade do Rio de Janeiro, como uma das eleitas sete maravilhas do histórico bairro de Santa Cruz.\n[…]\n«Base Aérea de Santa Cruz - BASC»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Base_A%C3%A9rea_de_Santa_Cruz",
        "situacao": "ok",
        "texto": "A ALA 12 (antiga Base Aérea de Santa Cruz - BASC, (IATA: SNZ, ICAO: SBSC), é uma base da Força Aérea Brasileira localizada na região de Santa Cruz, região oeste do município do Rio de Janeiro. Nessa Base Aérea, localiza-se o famoso Hangar do Zeppelin, construído na década de 1930, perfeitamente conservado e em uso como hangar para aeronaves militares de asa fixa.\n[…]\nCriada a 21 de agosto de 1944, a Base Aérea de Santa Cruz - BASC, situada no estado do Rio de Janeiro, é uma das principais bases da Força Aérea Brasileira, sediando não menos do que quatro unidades aéreas: os 1º e 2º esquadrões do , o 1º/16º Grupo de Aviação, o 4º/7º Grupo de Aviação e a 2ª Esquadrilha de Ligação e Observação, bem como uma unidade de controle aerotático, o 1º/1º Grupo de Comunicações e Controle.\n[…]\nA sede da BASC é de grande importância histórica. É situada em terras da antiga Fazenda de Santa Cruz, aonde viveram grande parte de suas vidas o rei de Portugal, D. João VI, e o imperador do Brasil, D. Pedro I. Na década de 30, tornou-se famosa por receber os famosos dirigíveis rígidos \"Zeppelin\". Com o desejo de estabelecer de forma permanente uma linha aérea ligando a Alemanha ao Brasil, a empresa \"Luftschiffbau Zeppelin Gmbh.\" consultou o governo brasileiro sobre tal possibilidade.\n[…]\nAssim foi que em 31 de março de 1934 a companhia alemã foi autorizada a estabelecer tal serviço; dois anos após, foi inaugurado o primeiro aeródromo dedicado à operação de dirigíveis na América do Sul, localizado na Fazenda de Santa Cruz e recebendo o nome de Aeroporto Bartolomeu de Gusmão, em honra ao pioneiro brasileiro da aerostação.\n[…]\nHangar do Zeppelin\n[…]\n«Perfil de um A-1A (AMX)»  do Esquadrão Adelphi, Baseado em Santa Cruz)\n[…]\n[5] - OPERAÇÃO BLACK BUCK 6 - Uma missão de combate que acabou no Brasil\n[…]\nRotaer Brasil - Manual auxiliar de Rotas"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Raios X",
      "descricao": "Radiação eletromagnética de alta energia descoberta pelo físico alemão Wilhelm Röntgen, usada em radiografias."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os raios X foram descobertos por Wilhelm Röntgen no mesmo ano da primeira sessão pública de cinema dos irmãos Lumière. Que ano foi esse?",
    "resposta": "1895",
    "distratores": [
      "1885",
      "1901",
      "1905"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wilhelm_R%C3%B6ntgen",
      "https://en.wikipedia.org/wiki/X-ray"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wilhelm_R%C3%B6ntgen",
        "situacao": "ok",
        "texto": "Wilhelm Conrad Röntgen (27 March 1845 – 10 February 1923) was a German experimental physicist who produced and detected electromagnetic radiation in a wavelength range known as X-rays (known as Röntgen rays in many languages). In 1901, Röntgen became the first recipient of the Nobel Prize in Physics \"in recognition of the extraordinary services he has rendered by the discovery of the remarkable ra\n[…]\nIn 1895, in his laboratory at the Physical Institute of the University of Würzburg, Röntgen was investigating the external effects of passing an electric discharge through various types of vacuum tube equipment—apparatuses from Heinrich Hertz, Johann Hittorf, William Crookes, Nikola Tesla, and Philipp Lenard.\n[…]\nIn the late afternoon of 8 November 1895, Röntgen was determined to test his idea. He carefully constructed a black cardboard covering similar to the one he had used on the Lenard tube. He covered the Crookes–Hittorf tube with the cardboard and attached electrodes to an induction coil to generate an electrostatic charge. Before setting up the barium platinocyanide screen to test his idea, he darkened the room to test the opacity of his cardboard cover.\n[…]\nRöntgen's original paper, Ueber eine neue Art von Strahlen (On a New Kind of Rays), was published on 28 December 1895. On 5 January 1896, an Austrian newspaper reported his discovery of a new type of radiation. He was awarded an honorary M.D. from the University of Würzburg after his discovery.\n[…]\nWilhelm Conrad Röntgen Biography\n[…]\nWorks by or about Wilhelm Röntgen at the Internet Archive\n[…]\nWorks by Wilhelm Conrad Röntgen at LibriVox (public domain audiobooks)\n[…]\nRöntgen's 1895 article, on line and analyzed on BibNum Archived 9 May 2016 at the Wayback Machine [click 'à télécharger' for English analysis]\n[…]\nWorks by Wilhelm Röntgen at Open Library\n[…]\nNewspaper clippings about Wilhelm Röntgen in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://en.wikipedia.org/wiki/X-ray",
        "situacao": "ok",
        "texto": "An X-ray is a form of high-energy electromagnetic radiation with a wavelength shorter than those of ultraviolet rays and longer than those of gamma rays. Roughly, X-rays have a wavelength ranging from 10 nanometers to 10 picometers, corresponding to frequencies in the range of 30 petahertz to 30 exahertz (3×1016 Hz to 3×1019 Hz) and photon energies in the range of 100 eV to 100 keV, respectively.\n[…]\nX-rays were discovered in 1895 by the German scientist Wilhelm Conrad Röntgen, who named it X-radiation to signify an unknown type of radiation.\n[…]\nOn 8 November 1895, German physics professor Wilhelm Röntgen discovered X-rays while experimenting with Lenard tubes and Crookes tubes and began studying them. He wrote an initial report \"On a new kind of ray: A preliminary communication\" and on 28 December 1895, submitted it to Würzburg's Physical-Medical Society journal. This was the first paper written on X-rays. Röntgen referred to the radiation as \"X\", to indicate that it was an unknown type of radiation.\n[…]\nWith the widespread experimentation with X‑rays after their discovery in 1895 by scientists, physicians, and inventors came many stories of burns, hair loss, and worse in technical journals of the time. In February 1896, Professor John Daniel and William Lofland Dudley of Vanderbilt University reported hair loss after Dudley was X-rayed. A child who had been shot in the head was brought to the Vanderbilt laboratory in 1896.\n[…]\nWhile they fall outside of the wavelengths that compose the visible light spectrum, in special circumstances X-rays can be detected by eye. Brandes, in an experiment a short time after Röntgen's landmark 1895 paper, reported after dark adaptation and placing his eye close to an X-ray tube, seeing a faint \"blue-gray\" glow which seemed to originate within the eye itself. Upon hearing this, Röntgen reviewed his record books and found he too had seen the effect."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wilhelm_R%C3%B6ntgen",
        "situacao": "ok",
        "texto": "Wilhelm Conrad Röntgen (Lennep, 27 de março de 1845 — Munique, 10 de fevereiro de 1923) foi um físico e engenheiro mecânico alemão. Em 8 de novembro de 1895, produziu e detectou radiação eletromagnética nos comprimentos de onda correspondentes aos atualmente chamados raios-X.\n[…]\nO artigo original de Wilhelm, Ueber Eine Neue Art von Strahlen (\"Sobre uma nova espécie de Raios\"), foi publicado 50 dias depois, em 28 de dezembro de 1895. Em 5 de janeiro de 1896, um jornal austríaco relatou a descoberta, por Wilhelm, de um novo tipo de radiação. Após a descoberta dos raios-X, Wilhelm recebeu o título de Doutor Honorário em Medicina, da Universidade de Würzburgo.\n[…]\nEntre 1895 e 1897, ele publicou três artigos a respeito dos raios-X, cuja tradução para o português pode ser vista nos links externos. Até os dias atuais, nenhuma das suas conclusões foi considerada falsa. Atualmente, Wilhelm Röntgen é considerado o pai da Radiologia de Diagnóstico – a especialidade médica que utiliza imagem para o diagnóstico de doenças.\n[…]\nDevido à sua descoberta, Röntgen foi laureado com o primeiro Nobel de Física, em 1901. O prêmio foi concedido \"em reconhecimento aos extraordinários serviços que a descoberta dos notáveis raios que levam seu nome possibilitaram\". Röntgen doou a recompensa monetária à sua universidade, convicto de que a ciência deve estar ao serviço da humanidade e não do lucro.\n[…]\nEine neue Art von Strahlen. 2. Auflage Stahel, Würzburg 1896, DNB 575871458 (relatórios de reuniões da sociedade de medicina física de Würzburg 1895, pela primeira vez sob o título: Grundlegende Abhandlungen über die X-Strahlen, Digitalisat und Volltext im Deutschen Textarchiv).\n[…]\nWilhelm Röntgen em Nobelprize.org\n[…]\nWilhelm Conrad Röntgen\n[…]\nPrimeiro fotograma em Raios-X\n[…]\nSobre uma nova espécie de raios",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Post-it",
      "descricao": "Bloco de papéis autoadesivos removíveis lançado pela empresa americana 3M."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A cola fraca do post-it foi criada em 1968, mas os bloquinhos só foram lançados em todos os Estados Unidos em que década?",
    "resposta": "Década de 1980",
    "distratores": [
      "Década de 1960",
      "Década de 1970",
      "Década de 1990"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Post-it_Note"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Post-it_Note",
        "situacao": "ok",
        "texto": "A Post-it note (or sticky note) is a small piece of paper with a re-adherable strip of glue on its back, made for temporarily attaching notes to documents and other surfaces. A low-tack pressure-sensitive adhesive allows the notes to be easily attached, removed, and even re-posted elsewhere without leaving residue. The Post-it's signature adhesive was discovered accidentally by a scientist at 3M.\n[…]\nPost-its were launched across the United States in 1980. The following year, they were launched in Canada and Europe. Post-it Notes as we know them were patented by Fry in 1993 as a \"repositionable pressure-sensitive adhesive sheet material\".\n[…]\nThey can be used to annotate textbooks in place of standard highlighting and sideline note-taking methods, allowing the pages to remain free of markings. Additionally, Post-it notes can be used to visually guide students to important points in the textbook, helping them find information faster.\n[…]\nIn 2000, the 20th anniversary of Post-it notes was celebrated by having artists create artworks on the notes. One such work, by the artist R. B. Kitaj, sold for £640 in an auction, making it the most valuable Post-it note on record.\n[…]\nSidewalks Labs, a Google-owned company that focuses on urban innovation, opened a public workspace in Quayside, Toronto, that supports public engagement in the city-planning process. Plans are presented here and the public can freely share their ideas, opinions, and feedback on potential projects, often in the form of Post-it note annotations.\n[…]\nPost-it homepage\n[…]\n\"Sticking around – the Post-it note is 20\". BBC News. 2000-04-06.\n[…]\nBeato, Greg (2005-03-24). \"Twenty-Five Years of Post-it Notes\". The Rake. Archived from the original on 2008-04-15.\n[…]\nPost-it Note History by 3M\n[…]\nStavroula Karapapa, (2019). Post-it note. In Claudy Op den Kamp and Dan Hunter (eds.), A History of Intellectual Property in 50 Objects, Cambridge University Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Post-it",
        "situacao": "ok",
        "texto": "Um post-it (ou nota adesiva) é um pequeno pedaço de papel com uma tira de cola re-adesiva no verso, feito para anexar notas temporariamente a documentos e outras superfícies. Um adesivo sensível à pressão de baixa aderência permite que as notas sejam facilmente anexadas, removidas e até recolocadas em outro lugar sem deixar resíduos. Originalmente pequenos quadrados amarelos, os post-its e produto\n[…]\nAté 2019, existem pelo menos 26 cores documentadas de post-its.\n[…]\nEm 1968, Spencer Silver, um cientista da 3M nos Estados Unidos, tentou desenvolver um adesivo super forte. Em vez disso, ele acidentalmente criou um adesivo sensível à pressão \"low-tack\", reutilizável. Por cinco anos, Silver promoveu sua \"solução sem problemas\" dentro da 3M tanto informalmente quanto por meio de seminários, mas não conseguiu ganhar adeptos.\n[…]\nA 3M fez um lançamento teste do produto como \"Press 'n Peel\" em lojas em quatro cidades em 1977, mas os resultados foram decepcionantes. Um ano depois, a 3M deu amostras grátis para consumidores em Boise, Idaho, com 94% dos que experimentaram indicando que comprariam o produto. O produto foi vendido como \"Post-Its\" em sua introdução em 1979, e foi lançado nos Estados Unidos em 6 de abril de 1980. No ano seguinte, eles foram lançados no Canadá e Europa.\n[…]\nEm 2003, a empresa lançou o \"Post-it Brand Super Sticky Notes\", com uma cola mais forte que adere melhor a superfícies verticais e não lisas.\n[…]\nAté a patente da 3M expirar na década de 1990, as notas tipo Post-it eram produzidas apenas na fábrica da empresa em Cynthiana, Kentucky.\n[…]\nEm 2018, a 3M lançou o \"Post-It Extreme Notes\", que são mais duráveis ​​e resistentes à água e que aderem à madeira e outros materiais em ambientes industriais.\n[…]\nPost-it homepage\n[…]\nBBC news article on 20th anniversary of Post-it Notes\n[…]\nThe Rake magazine article on 25th anniversary of Post-it notes\n[…]\nPost-it Note History by 3M",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Alexander Graham Bell",
      "descricao": "Inventor e cientista nascido na Escócia, a quem se atribui a primeira patente prática do telefone."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Graham Bell queria que o telefone fosse atendido com uma saudação de marinheiros, mas a sugestão de Edison venceu. Que saudação Bell preferia?",
    "resposta": "Ahoy",
    "distratores": [
      "Alô",
      "Pronto",
      "Olá"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hello",
      "https://en.wikipedia.org/wiki/Ahoy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hello",
        "situacao": "ok",
        "texto": "Hello is a salutation or greeting in the English language. It is first attested in writing from 1826.\n[…]\nThomas Edison is credited with popularizing hullo as a telephone greeting. In previous decades, hullo had been used as an exclamation of surprise (used early on by Charles Dickens in 1850) and halloo was shouted at ferry boat operators by people who wanted to catch a ride. According to one account, halloo was the first word Edison yelled into his strip phonograph when he discovered recorded sound in 1877.\n[…]\nShortly after Alexander Graham Bell invented the telephone, he answered calls by saying \"ahoy ahoy\", borrowing the term used on ships. There is no evidence the greeting caught on. Edison suggested Hello! on August 15, 1877, in a letter to the president of Pittsburgh's Central District and Printing Telegraph Company, T. B. A. David:\n[…]\nFriend David, I do not think we shall need a call bell as Hello! can be heard 10 to 20 feet away.\n[…]\nWhat you think? Edison – P.S. first cost of sender & receiver to manufacture is only $7.00."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ahoy",
        "situacao": "ok",
        "texto": "Ahoy () () is a signal word used to call to a ship or boat. It is derived from the Middle English cry, 'Hoy!'. The word fell out of use at one time, but was revived when sailing became a popular sport. 'Ahoy' can also be used as a greeting, a warning, or a farewell.\n[…]\nAlexander Graham Bell initially suggested that the standard greeting when answering a telephone should be 'ahoy', but instead 'hello' (suggested by Thomas Edison) was adopted.\n[…]\nAho(o)i, ahoy and ehoi\n[…]\nIn the 1950s ahoi was considered outdated. However, the expression was still generally known. Evidence for the use of ahoy in Friesian are lacking in comprehensive dictionaries of that language.\n[…]\nThe Simpsons character Mr. Burns uses the term ahoy-hoy as a greeting while Australian comedian duo Hamish and Andy has used the term ahoy as the shows preferred greeting after finding out Graham-Bell wanted the term to be used following the invention of the telephone.\n[…]\nIn Theresienstadt concentration camp Czech-speaking Jews called jokingly non-believing inmates, who had assimilated to the Czech society, Ahojista, (English - \"ahoy-ers\"). A Jewish Czech who had assimilated and posed opportunistically as a Zionist for the camp's Jewish administration centre, was called Šahojista, which was composed of the greetings Schalom and Ahoj.\n[…]\nDietmar Bratz: \"Ahoi! Ein Wort geht um die Welt,\" in: derselbe: \"Tampen, Pütz und Wanten. Seemansprache.\" Wiesbaden 2014, ISBN 978-3-86539-344-9, S. 301-319, hier S. 304 z. B. \"OED\" s. v. ahoy Svenska Akademien: \"Ordbok över svenska språket.\" Bd. 18, Lund 1949, s. v. ohoj ' 'Duden. Das große Wörterbuch der deutschen Sprache in zehn Bänden.' ' Mannheim 1999, ISBN 3-411-04743-7, s. v. ahoi see quote in the retrospective language"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Bússola",
      "descricao": "Instrumento de orientação com agulha magnetizada que aponta para o norte magnético."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Na China antiga, as primeiras bússolas eram colheres de pedra magnética girando sobre uma placa. Por convenção, o cabo delas apontava para que direção?",
    "resposta": "Sul",
    "distratores": [
      "Norte",
      "Leste",
      "Oeste"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Compass",
      "https://en.wikipedia.org/wiki/History_of_the_compass"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Compass",
        "situacao": "ok",
        "texto": "A compass is a device that shows the cardinal directions used for navigation and geographic orientation. It typically consists of a magnetized needle or another element, such as a compass card or compass rose, that pivots to align itself with magnetic north. Other methods may be used, including gyroscopes, magnetometers, and GPS receivers.\n[…]\nThe first compasses used for navigation appeared in China by 1088 during the Song dynasty, as described by Shen Kuo. These compasses were made of iron needles, magnetized by striking them with a lodestone. Dry compasses began to appear around 1300 in Medieval Europe and the Islamic world. This was supplanted in the early 20th century by the liquid-filled magnetic compass.\n[…]\nThe luopan, a compass used by feng shui practitioners.\n[…]\nOriginally, many compasses were marked only as to the direction of magnetic north, or to the four cardinal points (north, south, east, west). Later, these were divided, in China into 24, and in Europe into 32 equally spaced points around the compass card. For a table of the thirty-two points, see compass points.\n[…]\nHowever, they depend on the functioning of, and communication with, the GPS satellites, which might be disrupted by an electronic attack or by the effects of a severe solar storm. Gyrocompasses remain in use for military purposes (especially in submarines, where magnetic and GPS compasses are useless), but have been largely superseded by GPS compasses, with magnetic backups, in civilian contexts.\n[…]\nHand compass – Compact magnetic compass\n[…]\nAdmiralty, Great Britain (1915) Admiralty manual of navigation, 1914, Chapter XXV: \"The Magnetic Compass (continued): the analysis and correction of the deviation\", London: HMSO, 525 p.\n[…]\nHandbook of Magnetic Compass Adjustment Archived 2019-05-29 at the Wayback Machine\n[…]\nPaul J. Gans, The Medieval Technology Pages: Compass"
      },
      {
        "url": "https://en.wikipedia.org/wiki/History_of_the_compass",
        "situacao": "ok",
        "texto": "The compass is a magnetometer used for navigation and orientation that shows direction in regard to the geographic cardinal points. The structure of a compass consists of the compass rose, which displays the four main directions on it: East (E), South (S), West (W) and North (N). The angle increases in the clockwise position. North corresponds to 0°, east is 90°, south is 180° and west is 270°.\n[…]\nThe magnetic compass was first invented as a device for divination as early as the Chinese Han dynasty and Tang dynasty (since about 206 BC). The compass was used in Song dynasty China by the military for navigational orienteering by 1040–44, and was used for maritime navigation by 1111 to 1117.\n[…]\nThe typical Chinese navigational compass was in the form of a magnetic needle floating in a bowl of water. According to Needham, the Chinese in the Song dynasty and continuing Yuan dynasty did make use of a dry compass, although this type never became as widely used in China as the wet compass. Evidence of this is found in the Shilin Guang Ji (\"Guide Through the Forest of Affairs\"), published in 1325 by Chen Yuanjing, although its compilation had taken place between 1100 and 1250.\n[…]\nThe earliest reference to a compass in the Muslim world occurs in a Persian talebook from 1232, Jawami ul-Hikayat, where a compass is used for navigation during a trip in the Red Sea or the Persian Gulf. The fish-shaped iron leaf described indicates that this early Chinese design has spread outside of China. The earliest Arabic reference to a compass, in the form of magnetic needle in a bowl of water, comes from a work by Baylak al-Qibjāqī, written in 1282 while in Cairo.\n[…]\nNeedham, Joseph and Ronan, Colin A. (1986) The shorter Science and civilization in China: an abridgment of Joseph Needham's original text, Vol. 3, Chapter 1: \"Magnetism and Electricity\", Cambridge University Press, ISBN 0-521-25272-5"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/B%C3%BAssola",
        "situacao": "ok",
        "texto": "Uma bússola é um instrumento que mostra os pontos cardeais usados na navegação e na orientação geográfica. Em geral, consiste em uma agulha magnetizada ou outro elemento, como um cartão de bússola ou uma rosa dos ventos, que gira até se alinhar com o norte magnético. Outros métodos também podem ser usados, entre eles giroscópios, magnetômetros e receptores do sistema de posicionamento global.\n[…]\nAlgumas interpretações situam os primeiros instrumentos que exploravam as propriedades magnéticas naturais da pedra-imã na China da Dinastia Han. A menção mais antiga à atração de uma agulha está no Lunheng (Investigações equilibradas), obra escrita entre 20 e 100 d.C.: \"Uma pedra-imã atrai uma agulha.\" No século II a.C., geomantes chineses experimentavam as propriedades magnéticas da pedra-imã para produzir uma \"colher que aponta para o sul\" usada em adivinhação.\n[…]\nA agulha também passa a apontar para cima ou para baixo conforme se aproxima dos polos, por causa da chamada inclinação magnética. Bússolas baratas com mancais ruins podem travar por esse motivo e indicar uma direção incorreta.\n[…]\nNo início, muitas bússolas marcavam apenas a direção do norte magnético ou os quatro pontos cardeais, norte, sul, leste e oeste. Mais tarde, o cartão foi dividido em 24 pontos na China e em 32 pontos igualmente espaçados na Europa. Os 32 pontos aparecem na rosa dos ventos.\n[…]\nAs bússolas modernas de transferidor têm na placa-base uma seta ou indicador adicional de direção de marcha. Uma nova leitura de um alvo visível pode ser usada para conferir o avanço ao longo de um percurso ou azimute e verificar se o objeto observado corresponde ao destino. Com a seta de direção de marcha voltada para o alvo, a bússola é orientada até que a agulha fique sobre a seta de orientação da cápsula. O valor indicado é a marcação magnética do alvo.\n[…]\nHandbook of Magnetic Compass Adjustment",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Tycho Brahe",
      "descricao": "Astrônomo dinamarquês do século dezesseis, famoso por observações precisas feitas sem telescópio."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Segundo relatos da época, o astrônomo Tycho Brahe tinha um animal de estimação que morreu depois de beber cerveja e cair de uma escada. Que animal?",
    "resposta": "Um alce",
    "distratores": [
      "Um urso",
      "Um macaco",
      "Um papagaio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tycho_Brahe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tycho_Brahe",
        "situacao": "ok",
        "texto": "Tycho Brahe ( TY-koh BRAH-(h)ee, -⁠ BRAH(-hə); Danish: [ˈtsʰykʰo ˈpʁɑːə] ; born Tyge Ottesen Brahe, Danish: [ˈtsʰyːjə ˈʌtəsn̩ ˈpʁɑːə]; 14 December 1546 – 24 October 1601), generally called Tycho for short, was a Danish astronomer known for his comprehensive and unprecedentedly accurate astronomical observations which helped to turn astronomy into the first modern science and launch the Scientific \n[…]\nTycho Brahe was highly appreciated by King Frederick II, and he was accepted and supported by people of high social status. He was supported by the church. The support Tycho Brahe received from the king allowed him to continue his research and make significant contributions to the field of astronomy.\n[…]\nAlthough Tycho's planetary model was soon discredited, his astronomical observations were an essential contribution to the Scientific Revolution. The traditional view of Tycho is that he was primarily an empiricist who set new standards for precise and objective measurements. This appraisal originated in Gassendi's 1654 biography, Tychonis Brahe, equitis Dani, astronomorum coryphaei, vita. It was furthered by Dreyer's biography in 1890, which was long the most influential work on Tycho.\n[…]\nThe Tycho Brahe Prize, inaugurated in 2008, is awarded annually by the European Astronomical Society in recognition of the pioneering development or exploitation of European astronomical instrumentation, or major discoveries based largely on such instruments.\n[…]\nTycho is directly referenced in Sarah Williams' poem The Old Astronomer: \"Reach me down my Tycho Brahé, – I would know him when we meet\". Though, the poem's oft quoted line comes later: \"Though my soul may set in darkness, it will rise in perfect light; / I have loved the stars too truly to be fearful of the night.\"\n[…]\nAuthor Jerry Holkins' comic alter ego and online handle for Penny Arcade is named after the astronomer Tycho Brahe."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tycho_Brahe",
        "situacao": "ok",
        "texto": "Tycho Brahe ([ˈtaɪkoʊ ˈbrɑː(h)i,_ʔ ˈbrɑː(hə)] TY-koh-_-BRAH-(h)ee-,_-_-BRAH(-hə); da; nascido Tyge Ottesen Brahe, da; 14 de dezembro de 1546 – 24 de outubro de 1601), geralmente chamado abreviadamente de Tycho, foi um astrônomo dinamarquês conhecido por suas observações astronômicas abrangentes e com precisão sem precedentes, que ajudaram a transformar a astronomia na primeira Ciência moderna e a \n[…]\nTycho nasceu em 14 de dezembro de 1546, na sede ancestral de sua família no Castelo de Knutstorp (Knudstrup borg; Knutstorps borg), cerca de 8 quilômetros (5,0 mi) ao norte do município de Svalöv, na então Escânia dinamarquesa (sueca desde 1658). Ele era o mais velho de 12 irmãos, 8 dos quais viveram até a idade adulta, incluindo Steen Ottesen Brahe e Sophia Brahe. Seu irmão gêmeo morreu antes de ser batizado.\n[…]\nAs observações e cálculos de Tycho Brahe em Uraniborg permitiram-lhe desenvolver modelos mais precisos do Sistema Solar. Ele compilou o catálogo mais extenso e preciso de posições estelares até aquela época. As observações e cálculos de Tycho Brahe em Uraniborg permitiram-lhe lançar as bases para os astrônomos do futuro.\n[…]\nO apoio que Tycho recebeu da Coroa foi substancial, chegando a 1% da receita anual total em determinado momento na década de 1580. Tycho costumava realizar grandes reuniões sociais em seu castelo. Pierre Gassendi escreveu que Tycho tinha um alce manso e que seu mentor, o Landgrave Guilherme de Hesse-Kassel, perguntou se havia um animal mais rápido do que um veado. Tycho respondeu que não havia nenhum, mas que poderia enviar seu alce manso.\n[…]\nQuando Guilherme respondeu que aceitaria um em troca de um cavalo, Tycho respondeu com a triste notícia de que o alce tinha acabado de morrer em uma visita para entreter um nobre em Landskrona. Aparentemente, durante o jantar, o alce havia bebido muita cerveja, caído das escadas e morrido.\n[…]\nBrasão de armas dos Brahe",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cronômetro marítimo",
      "descricao": "Relógio de precisão levado a bordo de navios para determinar a longitude."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "No século dezoito, que relojoeiro inglês autodidata, carpinteiro de formação, criou o cronômetro marítimo que resolveu o problema de calcular a longitude no mar?",
    "resposta": "John Harrison",
    "distratores": [
      "Christiaan Huygens",
      "Robert Hooke",
      "James Cook"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/John_Harrison",
      "https://en.wikipedia.org/wiki/Marine_chronometer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/John_Harrison",
        "situacao": "ok",
        "texto": "John Harrison (3 April 1693 [O.S. 24 March 1692] – 24 March 1776) was an English joiner and clockmaker who invented the marine chronometer, a long-sought device for solving the problem of how to calculate longitude while at sea.\n[…]\nThe third (1717) is at Nostell Priory in Yorkshire, the face bearing the inscription \"John Harrison Barrow\".\n[…]\nOn 30 August 1718, John Harrison married Elizabeth Barret at Barrow upon Humber church. After her death in 1726, he married Elizabeth Scott on 23 November 1726, at the same church.\n[…]\nNumber 2 is in the Leeds City Museum, as the centrepiece of a permanent display dedicated to John Harrison's achievements. The exhibition, \"John Harrison: The Clockmaker Who Changed the World\", opened on 23 January 2014. It was the first longitude-related event marking the tercentenary of the Longitude Act.\n[…]\nIn 2014, Northern Rail named diesel railcar 153316 as the John 'Longitude' Harrison.\n[…]\n\"John Harrison's Hands\", a song about the man and his work, was written by Brian McNeill and Dick Gaughan, and has been recorded by both artists and by Show of Hands.\n[…]\nHistory of longitude\n[…]\nWolfendale, Arnold, ed. (2006). Harrison in the Abbey. London: Worshipful Company of Clockmakers. Published in Honour of John Harrison on the Occasion of the Unveiling of his Memorial in the Abbey on 24 March 2006\n[…]\nJohn Harrison and the Longitude Problem, at the National Maritime Museum site\n[…]\nPBS Nova Online: Lost at Sea, the Search for Longitude\n[…]\nJohn 'Longitude' Harrison and musical tuning\n[…]\nLeeds Museums and Galleries \"Secret Life of Objects\" blog, John Harrison's precision pendulum-clock No. 2\n[…]\nAccount of John Harrison and his chronometer at Cambridge Digital Library\n[…]\nWorks by John Harrison at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Marine_chronometer",
        "situacao": "ok",
        "texto": "A marine chronometer is a precision timepiece that is carried on a ship and employed in the determination of the ship's position by celestial navigation. It is used to determine longitude by comparing Greenwich Mean Time (GMT) and the time at the current location found from observations of celestial bodies.\n[…]\nWhen first developed in the 18th century, it was a major technical achievement, as accurate knowledge of the time over a long sea voyage was vital for effective navigation, lacking electronic or communications aids. The first true chronometer was the life work of one man, John Harrison, spanning 31 years of persistent experimentation and testing that revolutionized naval (and later aerial) navigation.\n[…]\nIn 1714, the British government offered a longitude prize for a method of determining longitude at sea, with the awards ranging from £10,000 to £20,000 (£2 million to £4 million in 2026 terms) depending on accuracy. John Harrison, a Yorkshire carpenter, submitted a project in 1730, and in 1735 completed a clock based on a pair of counter-oscillating weighted beams connected by springs whose motion was not influenced by gravity or the motion of a ship.\n[…]\nHarrison solved the precision problems with his much smaller H4 chronometer design in 1761. H4 looked much like a large five-inch (12 cm) diameter pocket watch. In 1761, Harrison submitted H4 for the £20,000 longitude prize. His design used a fast-beating balance wheel controlled by a temperature-compensated spiral spring. These features remained in use until stable electronic oscillators allowed very accurate portable timepieces to be made at affordable cost.\n[…]\nThe most complete international collection of marine chronometers, including Harrison's H1 to H4, is at the Royal Observatory, Greenwich, in London, UK.\n[…]\nLongitude (book)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/John_Harrison",
        "situacao": "ok",
        "texto": "John Harrison (3 de abril de 1693 — Londres, 24 de março de 1776) foi um carpinteiro e relojoeiro inglês autodidata que inventou o cronômetro marinho, um dispositivo há muito procurado para resolver o problema de cálculo da longitude no mar.\n[…]\nA solução de Harrison revolucionou a navegação e aumentou muito a segurança das viagens marítimas de longa distância. O problema que ele resolveu foi considerado tão importante após o desastre naval de Scilly em 1707 que o Parlamento da Grã-Bretanha ofereceu recompensas financeiras de até £ 20 000 (equivalente a £ 3,17 milhões em 2020) sob a Lei da Longitude de 1714.\n[…]\nEm 1730, Harrison apresentou seu primeiro design e trabalhou por muitos anos em designs aprimorados, fazendo vários avanços na tecnologia de cronometragem, finalmente voltando-se para o que era chamado de relógios marítimos. Harrison ganhou o apoio do Longitude Board na construção e teste de seus projetos. Perto do fim de sua vida, ele recebeu reconhecimento e uma recompensa do Parlamento. Harrison ficou em 39º lugar na pesquisa pública da BBC de 2002 sobre os 100 maiores britânicos.\n[…]\nEm 1730, Harrison projetou um relógio marítimo para competir pelo prêmio Longitude e viajou para Londres em busca de ajuda financeira. Ele apresentou suas ideias a Edmond Halley, o Astrônomo Real, que por sua vez o encaminhou a George Graham, o mais importante relojoeiro do país. Graham deve ter ficado impressionado com as ideias de Harrison, pois ele lhe emprestou dinheiro para construir um modelo de seu \"relógio do mar\".\n[…]\nContra a maré. Quando todos tentavam aperfeiçoar a navegação olhando o céu, Harrison achou a resposta num relógio\n[…]\nPrêmio Longitude\n[…]\nQuem foi John Harrison e porque a Google lhe dedica um Doodle",
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
