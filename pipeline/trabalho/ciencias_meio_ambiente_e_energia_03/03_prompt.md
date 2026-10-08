Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Meio Ambiente e Energia** (tema **Ciências**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Gás natural",
      "descricao": "Combustível fóssil gasoso formado sobretudo por metano, usado em usinas, indústrias, veículos e residências."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre os combustíveis fósseis, qual libera menos dióxido de carbono para gerar a mesma quantidade de energia?",
    "resposta": "Gás natural",
    "fonte": [
      "https://en.wikipedia.org/wiki/Natural_gas",
      "https://pt.wikipedia.org/wiki/Gás_natural"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Natural_gas",
        "situacao": "ok",
        "texto": "Natural gas (also gas, methane gas or fossil gas) is a fossil fuel, naturally occurring in geological formations. Typically, the gas is a mix of gaseous hydrocarbons, primarily methane (95%), small amounts of higher alkanes, and traces of carbon dioxide and nitrogen, hydrogen sulfide and helium. Methane is a colorless and odorless gas, and, after carbon dioxide, is the second-greatest greenhouse g\n[…]\nCoal gas or Town gas is a flammable gaseous fuel made by the destructive distillation of coal. It contains a variety of calorific gases including hydrogen, carbon monoxide, methane, and other volatile hydrocarbons, together with small quantities of non-calorific gases such as carbon dioxide and nitrogen, and was used in a similar way to natural gas. This is a historical technology and is not usually economically competitive with other sources of fuel gas today.\n[…]\nWhen refined and burned, natural gas can produce 25–30% less carbon dioxide per joule delivered than oil, and 40–45% less than coal. It can also produce potentially fewer toxic pollutants than other hydrocarbon fuels. However, compared to other major fossil fuels, natural gas causes more emissions in relative terms during the production and transportation of the fuel, meaning that the life cycle greenhouse gas emissions are about 50% higher than the direct emissions from the site of consumption.\n[…]\nQuantities of natural gas are measured in standard cubic meters (cubic meter of gas at temperature 15 °C (59 °F) and pressure 101.325 kPa (14.6959 psi)) or standard cubic feet (cubic foot of gas at temperature 60.0 °F and pressure 14.73 psi (101.6 kPa)), 1 standard cubic meter = 35.301 standard cubic feet. The gross heat of combustion of commercial quality natural gas is around 39 MJ/m3 (0.31 kWh/ft3), but this can vary by several percent. This is about 50 to 54 MJ/kg depending on the density.\n[…]\nStrategic natural gas reserve"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gás_natural",
        "situacao": "ok",
        "texto": "O gás natural é uma mistura de derivados de combustíveis fósseis, formado quando camadas de animais soterrados ficam submetidos a intenso calor e pressão ao longo de milhares de anos, ou da biomassa quando está em decomposição. A energia que as plantas naturalmente absorvem da luz do Sol é armazenado em forma de carbono, em gás natural. É uma mistura de hidrocarbonetos leves encontrada no subsolo,\n[…]\nA composição do gás natural pode variar bastante dependendo de fatores relativos ao campo em que o gás é produzido, processo de produção, condicionamento, processamento e transporte. O gás natural é um combustível fóssil e uma fonte de energia não renovável.\n[…]\nAntes do gás natural poder ser utilizado como combustível, ele deve passar por um tratamento para retirar impurezas, inclusive a água, para satisfazer as especificações de um gás natural comercializável. São retirados nesse processo de tratamento etano, hidrocarbonetos de peso molecular superior, dióxido de carbono, hélio e nitrogênio.\n[…]\nA unidade básica de medida para o gás natural é o metro cúbico por dia (m3/dia). A energia produzida pela combustão do gás é usualmente medida em quilocaloria (kcal). Ou em – MMBTU - milhões de British Thermal Unit.\n[…]\nAo contrário do que ocorre com a maioria dos combustíveis fósseis, facilmente armazenáveis, a decisão de investimento em gás natural depende da negociação prévia de contratos de fornecimento de longo prazo, do produtor ao consumidor.\n[…]\nO gás natural é utilizado diretamente como combustível, tanto em indústrias, casas e automóveis. É considerado uma fonte de energia mais limpa que os derivados do petróleo e o carvão. Alguns dos gases de sua composição são eliminados porque não possuem capacidade energética (nitrogênio ou CO2) ou porque podem deixar resíduos nos condutores devido ao seu alto peso molecular em comparação ao metano (butano e mais pesados).\n[…]\nProcessamento de gás natural"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Gás natural",
      "descricao": "Combustível fóssil gasoso formado sobretudo por metano, usado em usinas, indústrias, veículos e residências."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Num vazamento, o gás de botijão se acumula junto ao chão. E o gás natural encanado, para onde ele tende a ir?",
    "resposta": "Para cima, junto ao teto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Natural_gas",
      "https://en.wikipedia.org/wiki/Liquefied_petroleum_gas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Natural_gas",
        "situacao": "ok",
        "texto": "Natural gas (also gas, methane gas or fossil gas) is a fossil fuel, naturally occurring in geological formations. Typically, the gas is a mix of gaseous hydrocarbons, primarily methane (95%), small amounts of higher alkanes, and traces of carbon dioxide and nitrogen, hydrogen sulfide and helium. Methane is a colorless and odorless gas, and, after carbon dioxide, is the second-greatest greenhouse g\n[…]\nLiquefied natural gas\n[…]\nNatural gas by country\n[…]\nRenewable natural gas\n[…]\nStrategic natural gas reserve\n[…]\nEmiliozzi, Simone; Ferriani, Fabrizio; Gazzani, Andrea (January 2025). \"The European Energy Crisis and the Consequences for the Global Natural Gas Market\". The Energy Journal. 46 (1): 119–145. Bibcode:2025EnerJ..46..119E. doi:10.1177/01956574241290640. SSRN 4849472. ProQuest 3183599245.\n[…]\nLi, Luguang (April 2022). \"Development of Natural Gas Industry in China: Review and Prospect\". Natural Gas Industry B. 9 (2): 187–196. Bibcode:2022NGIB....9..187L. doi:10.1016/j.ngib.2022.03.001.\n[…]\nMathias, Melissa Cristina; Szklo, Alexandre (December 2007). \"Lessons Learned from Brazilian Natural Gas Industry Reform\". Energy Policy. 35 (12): 6478–6490. Bibcode:2007EnPol..35.6478M. doi:10.1016/j.enpol.2007.08.013.\n[…]\nPurwanto, Widodo Wahyu; Muharam, Yuswan; Pratama, Yoga Wienda; Hartono, Djoni; Soedirman, Harimanto; Anindhito, Rezki (February 2016). \"Status and Outlook of Natural Gas Industry Development in Indonesia\". Journal of Natural Gas Science and Engineering. 29: 55–65. Bibcode:2016JNGSE..29...55P. doi:10.1016/j.jngse.2015.12.053.\n[…]\nXiao, Renrong; Zhao, Pengjun; Huang, Kangzheng; Ma, Tianyu; He, Zhangyuan; Zhang, Caixia; Lyu, Di (February 2025). \"Liquefied Natural Gas Trade Network Changes and Its Mechanism in the Context of the Russia–Ukraine Conflict\". Journal of Transport Geography. 123 104101. Bibcode:2025JTGeo.12304101X. doi:10.1016/j.jtrangeo.2024.104101."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Liquefied_petroleum_gas",
        "situacao": "ok",
        "texto": "Liquefied petroleum gas, also referred to as liquid petroleum gas (LPG or LP gas), is a fuel gas which contains a flammable mixture of hydrocarbon gases, specifically propane, butane and isobutane. It can also contain some propylene, butylene, and isobutylene.\n[…]\nLPG is composed mainly of propane and butane, while natural gas is composed of the lighter methane and ethane. LPG, vaporised and at atmospheric pressure, has a higher calorific value (46 MJ/m3 equivalent to 12.8 kWh/m3) than natural gas (methane) (38 MJ/m3 equivalent to 10.6 kWh/m3), which means that LPG cannot simply be substituted for natural gas.\n[…]\nDeveloping markets in India and China (among others) use LPG-SNG systems to build up customer bases prior to expanding existing natural gas systems.\n[…]\nLPG-based SNG or natural gas with localized storage and piping distribution network to the households for catering to each cluster of 5000 domestic consumers can be planned under the initial phase of the city gas network system. This would eliminate the last mile LPG cylinders road transport which is a cause of traffic and safety hurdles in Indian cities.\n[…]\nThese localized natural gas networks are successfully operating in Japan with feasibility to get connected to wider networks in both villages and cities.\n[…]\nCommercially available LPG is currently derived mainly from fossil fuels. Burning LPG releases carbon dioxide, a greenhouse gas. The reaction also produces some carbon monoxide. LPG does, however, release less CO2 per unit of energy than does coal or oil, but more than natural gas. It emits 81% of the CO2 per kWh produced by oil, 70% of that of coal, and less than 50% of that emitted by coal-generated electricity distributed via the grid.\n[…]\nCompressed natural gas (CNG)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/G%C3%A1s_natural",
        "situacao": "ok",
        "texto": "O gás natural é uma mistura de derivados de combustíveis fósseis, formado quando camadas de animais soterrados ficam submetidos a intenso calor e pressão ao longo de milhares de anos, ou da biomassa quando está em decomposição. A energia que as plantas naturalmente absorvem da luz do Sol é armazenado em forma de carbono, em gás natural. É uma mistura de hidrocarbonetos leves encontrada no subsolo,\n[…]\nO gás natural passou a ser utilizado em maior escala na Europa no final do século XIX, com a invenção do queimador Bunsen, em 1885, que misturava ar com gás natural e com a construção de um gasoduto à prova de vazamentos, em 1890.\n[…]\nCarregador: Pessoa jurídica que detém o controle do gás natural, contrata o transportador para o serviço de transporte e negocia a venda deste junto as companhias distribuidoras.\n[…]\nDistribuidor: Pessoa jurídica que tem a concessão do estado para comercializar o gás natural junto aos consumidores finais (No Brasil a distribuição é monopólio dos governos estaduais)\n[…]\nA exploração é a etapa inicial dentro da cadeia de gás natural, consistindo em duas fases. A primeira fase é a pesquisa onde, através de testes sísmicos, verifica-se a existência em bacias sedimentares de rochas reservatórias (estruturas propícias ao acúmulo de petróleo e gás natural).\n[…]\nQuando necessário, deverá também estar odorizado, para ser detectado facilmente em caso de vazamentos.\n[…]\nAlgumas jazidas de gás natural podem conter mercúrio associado. Trata-se de um metal altamente tóxico e deve ser removido no tratamento do gás natural. O mercúrio é proveniente de grandes profundidades no interior da terra e ascende junto com os hidrocarbonetos, formando complexos organo-metálicos.\n[…]\nAtualmente estão sendo investigadas as jazidas de hidratos de metano, que se estima haver reservas energéticas muito superiores às atuais de gás natural.[carece de fontes]?\n[…]\nProcessamento de gás natural",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Enriquecimento de urânio",
      "descricao": "Processo que aumenta a proporção do isótopo físsil urânio-235 no urânio, para uso como combustível nuclear."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "O urânio natural precisa ser enriquecido para virar combustível de usina. Que isótopo forma mais de noventa e nove por cento dele?",
    "resposta": "Urânio-238",
    "distratores": [
      "Urânio-235",
      "Urânio-234",
      "Urânio-233"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Enriched_uranium",
      "https://en.wikipedia.org/wiki/Uranium-238"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Enriched_uranium",
        "situacao": "ok",
        "texto": "Enriched uranium is a type of uranium in which the percent composition of uranium-235 (written 235U) has been increased through the process of isotope separation. Naturally occurring uranium is composed primarily of three isotopes: uranium-238 (238U, 99.2732–99.2752% natural abundance), uranium-235 (235U, 0.7198–0.7210%), and uranium-234 (234U, 0.0049–0.0059%). 235U is the only primordial nuclide \n[…]\nUF6 is used because fluorine has only one naturally occurring isotope and because UF6 can be handled as a gas at suitable operating temperatures.\n[…]\nThe HEU feedstock can contain unwanted uranium isotopes: 234U is a minor isotope contained in natural uranium, primarily as a product of alpha decay of 238U. The half-life of 238U is much larger than that of 234U, and so it is produced and destroyed at the same rate in a constant steady state equilibrium, bringing any sample with sufficient 238U content to a stable ratio of 234U to 238U (over long enough timescales).\n[…]\nThe blendstock can be NU or DU; however, depending on feedstock quality, SEU at typically 1.5 wt% 235U may be used as a blendstock to dilute the unwanted byproducts that may be contained in the HEU feed. Concentrations of these isotopes in the LEU product in some cases could exceed ASTM specifications for nuclear fuel if NU or DU were used. So, the HEU downblending generally cannot contribute to the waste management problem posed by the existing large stockpiles of depleted uranium.\n[…]\nCountries that had enrichment programs in the past include Libya and South Africa, although Libya's facility was never operational. The Australian company Silex Systems has developed a laser enrichment process known as SILEX (separation of isotopes by laser excitation), which it intends to pursue through financial investment in a U.S."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Uranium-238",
        "situacao": "ok",
        "texto": "Uranium-238 (238U or U-238) is the most common isotope of uranium found in nature, with a relative abundance above 99%. Unlike uranium-235, it is non-fissile, which means it cannot sustain a chain reaction in a thermal-neutron reactor. However, it is fissionable by fast neutrons, and is fertile, meaning it can be transmuted to fissile plutonium-239.\n[…]\nThe breeder reactor as its name implies creates larger quantities of 239Pu or 233U (the fissile isotopes) than it consumes.\n[…]\nUranium-238 is an alpha emitter, producing thorium-234 which is a beta emitter, etc. This leads to a decay chain, commonly called the radium series or uranium series. Beginning with naturally occurring uranium-238, this series includes isotopes of astatine, bismuth, lead, polonium, protactinium, radium, radon, thallium, thorium and uranium, all of which are present in natural uranium sources. The decay proceeds as (only main decay branches shown):\n[…]\n238\n[…]\n{\\displaystyle {\\begin{array}{l}{}\\\\{\\ce {^{238}_{92}U->[\\alpha ][4.463\\times 10^{9}\\ {\\ce {y}}]{^{234}_{90}Th}->[\\beta ^{-}][24.11\\ {\\ce {d}}]{^{234\\!m}_{91}Pa}}}{\\begin{Bmatrix}{\\ce {->[0.16\\%][1.16\\ {\\ce {min}}]{^{234}_{91}Pa}->[\\beta ^{-}][6.70\\ {\\ce {h}}]}}\\\\{\\ce {->[99.84\\%\\ \\beta ^{-}][1.16\\ {\\ce {min}}]}}\\end{Bmatrix}}{\\ce {^{234}_{92}U->[\\alpha ][2.455\\times 10^{5}\\ {\\ce {y}}]{^{230}_{90}Th}->[\\alpha ][7.54\\times 10^{4}\\ {\\ce {y}}]{^{226}_{88}Ra}->[\\alpha ][1600\\ {\\ce {y}}]{^{222}_{86}Rn}}}\\\\{\\ce {^{222}_{86}Rn->[\\alpha ][3.8235\\ {\\ce {d}}]{^{218}_{84}Po}->[\\alpha ][3.097\\ {\\ce {min}}]{^{214}_{82}Pb}->[\\beta ^{-}][27.06\\ {\\ce {min}}]{^{214}_{83}Bi}->[\\beta ^{-}][19.9\\ {\\ce {min}}]{^{214}_{84}Po}->[\\alpha ][164.3\\ \\mu {\\ce {s}}]{^{210}_{82}Pb}->[\\beta ^{-}][22.2\\ {\\ce {y}}]{^{210}_{83}Bi}->[\\beta ^{-}][5.012\\ {\\ce {d}}]{^{210}_{84}Po}->[\\alpha ][138.376\\ {\\ce {d}}]{^{206}_{82}Pb}}}\\end{array}}}"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ur%C3%A2nio_enriquecido",
        "situacao": "ok",
        "texto": "Urânio enriquecido é o urânio cujo teor de 235U  (urânio-235) foi aumentado, através de um processo de separação de isótopos. O urânio encontrado na natureza, sob a forma de dióxido de urânio (UO2), contém 99,284% do isótopo 238U; apenas 0,711% do seu peso é representado pelo isótopo 235U. Porém o 235U é o mais facilmente fissionado (físsil) na natureza em proporções significativas.\n[…]\nO termo combustível nuclear é comumente empregado para designar o material que pode sofrer fissão nuclear. O dióxido de urânio (UO2) é matéria-prima para fabricação do combustível nuclear nos reatores nucleares. Este óxido é muito pobre em urânio físsil (U-235), que pode sofrer fissão nuclear. Apenas 0,7% dos átomos de urânio presentes nesse óxido são (U-235); os 99,3% restantes são de (U-238), não-físsil. Assim, é necessário um novo tratamento para separar o isótopo físsil do isótopo não-físsil.\n[…]\nEm seguida, o gás hexafluoreto de urânio enriquecido volta a ser convertido em dióxido de urânio. Este óxido é o que constituirá finalmente o combustível nuclear.\n[…]\nO urânio levemente enriquecido, também referido como SEU (do inglês slightly enriched uranium) é uma sub-categoria de urânio fracamente enriquecido e tem uma concentração de 235U que vai de 0,9% a 2%. Destina-se a substituir o urânio natural como combustível, em certos tipos de reatores que utilizam água pesada, como o reator CANDU. Um ligeiro enriquecimento permite otimizar os custos, por  ser requerida menor quantidade de urânio  para o carregamento.\n[…]\nO urânio recuperado ou RU (do inglês recovered uranium ) é um tipo de urânio levemente enriquecido que é produzido nos ciclos de reatores a água leve: o combustível nuclear usado contém no final do processo uma proporção de U-235 superior ao teor natural e pode ser usado em reatores que consomem urânio natural ou levemente enriquecido.\n[…]\nCombustível nuclear\n[…]\nUrânio no ambiente",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Radiação ultravioleta",
      "descricao": "Radiação eletromagnética de comprimento de onda menor que o da luz violeta, emitida pelo Sol e dividida nas faixas A, B e C."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "A radiação ultravioleta do Sol tem três faixas, chamadas A, B e C. Qual delas é quase totalmente absorvida pela atmosfera antes de chegar ao solo?",
    "resposta": "Ultravioleta C",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ultraviolet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ultraviolet",
        "situacao": "ok",
        "texto": "Ultraviolet radiation (UV; sometimes called ultraviolet light) is electromagnetic radiation of wavelengths of 100–400 nanometers, shorter than that of visible light, but longer than vacuum ultraviolet and extreme ultraviolet, radiation bands that overlaps UV but shares some properties with soft X-rays. UV radiation is present in sunlight and constitutes about 10% of the total electromagnetic radia\n[…]\n13.5 nm: Extreme ultraviolet lithography\n[…]\nUltraviolet radiation is helpful in the treatment of skin conditions such as psoriasis and vitiligo. Exposure to UVA, while the skin is hyper-photosensitive, by taking psoralens is an effective treatment for psoriasis. Due to the potential of psoralens to cause damage to the liver, PUVA therapy may be used only a limited number of times over a patient's lifetime.\n[…]\nThe evolution of early reproductive proteins and enzymes is attributed in modern models of evolutionary theory to ultraviolet radiation. UVB causes thymine base pairs next to each other in genetic sequences to bond together into thymine dimers, a disruption in the strand that reproductive enzymes cannot copy. This leads to frameshifting during genetic replication and protein synthesis, usually killing the cell.\n[…]\nElevated levels of ultraviolet radiation, in particular UV-B, have also been speculated as a cause of mass extinctions in the fossil record.\n[…]\nAllen, Jeannie (6 September 2001). Ultraviolet Radiation: How it Affects Life on Earth. Earth Observatory. NASA, USA.\n[…]\nHockberger, Philip E. (2002). \"A History of Ultraviolet Photobiology for Humans, Animals and Microorganisms\". Photochemistry and Photobiology. 76 (6): 561–569. doi:10.1562/0031-8655(2002)0760561AHOUPF2.0.CO2. PMID 12511035. S2CID 222100404.\n[…]\nMedia related to Ultraviolet light at Wikimedia Commons\n[…]\nThe dictionary definition of ultraviolet at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Radia%C3%A7%C3%A3o_ultravioleta",
        "situacao": "ok",
        "texto": "Radiação ultravioleta, ou UV, também chamada de luz ultravioleta, é uma forma de radiação eletromagnética com comprimentos de onda entre 100 e 400 nanômetros, menores que os da luz visível e maiores que os dos raios X. A faixa entre 10 e 100 nanômetros recebe o nome de ultravioleta extremo e compartilha algumas propriedades com os raios X moles. A radiação UV está presente na luz solar e correspon\n[…]\nEm seres humanos, o bronzeamento e as queimaduras solares são efeitos familiares da exposição da pele à radiação UV, que também aumenta o risco de câncer de pele. A atmosfera absorve grande parte da radiação ultravioleta solar, reduzindo a exposição dos organismos na superfície. A radiação solar com comprimentos de onda inferiores a aproximadamente 300 nm é absorvida na atmosfera, sobretudo pelo ozônio e pelo oxigênio molecular, antes de chegar ao solo.\n[…]\nQuando o Sol está no zênite, a atmosfera bloqueia cerca de 77% de sua radiação ultravioleta, com absorção maior nos comprimentos de onda menores. Ao nível do solo, nessas condições, a luz solar contém 44% de luz visível e 3% de ultravioleta. O restante é infravermelho. Mais de 95% do ultravioleta que chega à superfície terrestre é UVA, de ondas mais longas, e a pequena parcela restante é UVB. Quase nenhuma radiação UVC alcança a superfície.\n[…]\nAs faixas mais curtas do UVC e a radiação ultravioleta solar ainda mais energética são absorvidas pelo oxigênio e participam da formação do ozônio. Átomos de oxigênio liberados pela fotólise do oxigênio diatômico reagem com outras moléculas desse gás, formando ozônio. A camada de ozônio bloqueia a maior parte do UVB e a parcela de UVC que não foi absorvida pelo oxigênio comum do ar.\n[…]\nA capacidade de provocar reações químicas e excitar a fluorescência permite muitos usos da radiação ultravioleta. Algumas aplicações das diferentes faixas são apresentadas a seguir.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Destilação fracionada do petróleo",
      "descricao": "Processo das refinarias que separa o petróleo em frações, como gás, gasolina, querosene, diesel e resíduos pesados, numa torre de destilação."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na torre de destilação do petróleo, que derivado, usado para pavimentar ruas, é o mais pesado e fica no fundo?",
    "resposta": "Asfalto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Oil_refinery",
      "https://pt.wikipedia.org/wiki/Asfalto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oil_refinery",
        "situacao": "ok",
        "texto": "An oil refinery or petroleum refinery is an industrial process plant where petroleum (crude oil) is transformed and refined into products such as gasoline (petrol), diesel fuel, asphalt base, fuel oils, heating oil, kerosene, liquefied petroleum gas and petroleum naphtha. Petrochemical feedstock like ethylene and propylene can also be produced directly by cracking crude oil without the need of usi\n[…]\nElimination and substitution are unlikely in petroleum refineries, as many of the raw materials, waste products, and finished products are hazardous in one form or another (e.g. flammable, carcinogenic).\n[…]\nIn addition to federal monitoring, California's CalOSHA has been particularly active in protecting worker health in the industry, and adopted a policy in 2017 that requires petroleum refineries to perform a \"Hierarchy of Hazard Controls Analysis\" (see above \"Hazard controls\" section) for each process safety hazard. Safety regulations have resulted in a below-average injury rate for refining industry workers.\n[…]\nIn a 2018 report by the US Bureau of Labor Statistics, they indicate that petroleum refinery workers have a significantly lower rate of occupational injury (0.4 OSHA-recordable cases per 100 full-time workers) than all industries (3.1 cases), oil and gas extraction (0.8 cases), and petroleum manufacturing in general (1.3 cases).\n[…]\nBelow is a list of the most common regulations referenced in petroleum refinery safety citations issued by OSHA:\n[…]\nCorrosion of metallic components is a major factor of inefficiency in the refining process. Because it leads to equipment failure, it is a primary driver for the refinery maintenance schedule. Corrosion-related direct costs in the U.S. petroleum industry as of 1996 were estimated at US$3.7 billion.\n[…]\nNelson complexity index – Conversion calculation in petroluem refinery"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Asfalto",
        "situacao": "ok",
        "texto": "O asfalto (não confundir com alcatrão) é um betume espesso, de material aglutinante escuro e reluzente, de estrutura sólida, constituído de misturas complexas de hidrocarbonetos não voláteis de elevada massa molecular, além de substâncias minerais, resíduo da destilação a vácuo do petróleo. Não é um material volátil, é solúvel em bissulfeto de carbono (\n[…]\nO CAP - Cimento Asfáltico de Petróleo (Ex. CAP-20, CAP-70);\n[…]\nO ADP - Asfalto Diluído de Petróleo(Ex. CM-30, CR-250);\n[…]\nDentro da engenharia rodoviária, cada tipo de asfalto se destina a um fim. Por exemplo: o ADP é utilizado para a imprimação (impermeabilização) da base dos pavimentos.\n[…]\nOs registros mais antigos são de 3000 a.C., quando ele era usado para conter vazamentos de águas em reservatórios, já passando pouco depois a pavimentar estradas no Oriente Médio. Nesta época, ele não era extraído do petróleo, mas sim feito com piche retirado de lagos pastosos. A partir de 1909 iniciou-se o emprego de asfalto derivado do petróleo, devido a sua maior pureza e viabilidade econômica, sendo atualmente o principal meio de produção de asfalto.\n[…]\nNo Brasil, a primeira rodovia asfaltada do país foi a Rio-Petrópolis, em 1928, durante o Governo Washington Luís.\n[…]\nEmbora em larga utilização no Brasil, o asfalto como solução para as rodovias em regiões tropicais não é ideal, devido ao intenso intemperismo destas regiões. Rodovias com superfície de concreto aparentemente são mais resistentes às intensas variações diurnas de temperatura e umidade características do clima tropical mas é sujeita a diversas trincas, rachaduras e até desintegração total.\n[…]\nUma usina de asfalto é um conjunto de equipamentos mecânicos e eletrônicos interconectados de forma a produzir misturas asfálticas. Variam em capacidade de produção e princípios de proporcionamento dos componentes, podendo ser estacionárias ou móveis."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Antracito",
      "descricao": "Tipo de carvão mineral duro e brilhante, o de maior teor de carbono."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes tipos de carvão mineral é o mais rico em carbono?",
    "resposta": "Antracito",
    "distratores": [
      "Turfa",
      "Linhito",
      "Hulha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Anthracite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anthracite",
        "situacao": "ok",
        "texto": "Anthracite, also known as hard coal and black coal, is a hard, compact variety of coal that has a submetallic lustre. It has the highest carbon content, the fewest impurities, and the highest energy density of all types of coal and is the highest ranking of coals.\n[…]\nAnthracite is similar in appearance to the mineraloid jet and is sometimes used as a jet imitation.\n[…]\nThe moisture content of fresh-mined anthracite generally is less than 15 percent. The heat content of anthracite ranges from 26 to 33 MJ/kg (22 to 28 million Btu/short ton) on a moist, mineral-matter-free basis. The heat content of anthracite coal consumed in the United States averages 29 MJ/kg (25 million Btu/ton), on the as-received basis, containing both inherent moisture and mineral matter.\n[…]\nAnthracite is classified into three grades, depending on its carbon content. Standard grade is used as a domestic fuel and in industrial power-generation. The rarer higher grades of anthracite are purer – i.e., they have a higher carbon content – and are used in steel-making and other segments of the metallurgical industries. Technical characteristics of the various grades of anthracite are as follows:\n[…]\nHigh grade (HG) and ultra high grade (UHG) anthracite are the highest grades of anthracite coal. They are the purest forms of coal, having the highest degree of coalification, the highest carbon count and energy content and the fewest impurities (moisture, ash and volatiles).\n[…]\nHigh grade and ultra high grade anthracite are harder than standard grade anthracite, and have a higher relative density. An example of a chemical formula for high-grade anthracite would be C240H90O4NS, representing 94% carbon. UHG anthracite typically has a minimum carbon content of 95%."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Antracite",
        "situacao": "ok",
        "texto": "A antracite ou o antracito, é uma variedade compacta e dura do mineral carvão que possui elevado lustre. Difere do carvão betuminoso por conter pouco ou nenhum betume, o que faz com que arda com uma chama quase invisível. É o carvão mineral que apresenta o teor de carbono fixo mais alto (92% a 98%) e baixo conteúdo de substâncias voláteis. Os espécimes mais puros são compostos quase inteiramente p\n[…]\nO antracito é criado por metamorfismo e está associado às rochas metamórficas, da mesma forma que o carvão betuminoso está associado às rochas sedimentares. No leste dos Estados Unidos, as camadas de carvão betuminoso que são mineradas à superfície no planalto de Allengheny (sedimentar) do Kentucky e da Virgínia Ocidental são as mesmas que são mineradas em profundidade nas dobras (metamórficas) dos montes Apalaches, na Pensilvânia.\n[…]\nO antracito liberta alta energia por quilo e queima limpidamente com pouca fuligem, o que o torna uma variedade de carvão mais procurado e desta forma de valor mais alto. É também usado como um filtro médio.\n[…]\nNo começo do século XX nos Estados Unidos, a Estrada de Ferro Lackawanna & Western começou a usar somente o carvão de antracito mais caro, apelidando-se a si mesmos de \"A estrada de antracito\" e noticiaram amplamente que graças ao antracito, os viajantes de sua linha podiam fazer a sua viagem sem ficarem com as roupas manchadas pela fuligem.\n[…]\nA maioria do carvão de antracito dos Estados Unidos é encontrado no leste da Pensilvânia onde há 7 bilhões de toneladas (6.4 pentagramas) de reservas mineráveis. Depósitos em Crested Butte, Colorado foram minerados historicamente. Depósitos de antracito de 3 bilhões de toneladas (2.7 pentagramas) no Alaska nunca foram minerados.\n[…]\nO antracito é similar em aparência ao lignito e algumas vezes é usado como imitação.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Energia solar fotovoltaica",
      "descricao": "Geração de eletricidade pela conversão direta da luz solar em células fotovoltaicas."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes tipos de usina gera eletricidade sem nenhuma peça girando?",
    "resposta": "Solar fotovoltaica",
    "distratores": [
      "Hidrelétrica",
      "Eólica",
      "Nuclear"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Photovoltaics",
      "https://en.wikipedia.org/wiki/Photovoltaic_system"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Photovoltaics",
        "situacao": "ok",
        "texto": "Photovoltaics (PV) is the conversion of light into electricity using semiconducting materials that exhibit the photovoltaic effect, a phenomenon studied in physics, photochemistry, and electrochemistry. The photovoltaic effect is commercially used for electricity generation and as photosensors.\n[…]\nQuantum dot solar cells are solution-processed, meaning they are potentially scalable, but currently they peak at 12% efficiency.\n[…]\nThe 122 PW of sunlight reaching the Earth's surface is plentiful—almost 10,000 times more than the 13 TW equivalent of average power consumed in 2005 by humans. This abundance leads to the suggestion that it will not be long before solar energy will become the world's primary energy source. Additionally, solar radiation has the highest power density (global mean of 170 W/m2) among renewable energies.\n[…]\nRooftop solar can be used locally, thus reducing transmission/distribution losses.\n[…]\nSolar cell research investment\n[…]\nCompared to fossil and nuclear energy sources, very little research money has been invested in the development of solar cells, so there is considerable room for improvement. Nevertheless, experimental high efficiency solar cells already have efficiencies of over 40% in case of concentrating photovoltaic cells and efficiencies are rapidly rising while mass-production costs are rapidly falling.\n[…]\nIn some states of the United States, much of the investment in a home-mounted system may be lost if the homeowner moves and the buyer puts less value on the system than the seller. The city of Berkeley developed an innovative financing method to remove this limitation, by adding a tax assessment that is transferred with the home to pay for the solar panels. Now known as PACE, Property Assessed Clean Energy, 30 U.S. states have duplicated this solution."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Photovoltaic_system",
        "situacao": "ok",
        "texto": "A photovoltaic system, also called a PV system or solar power system, is an electric power system designed to supply usable solar power by means of photovoltaics. It consists of an arrangement of several components, including solar panels to absorb and convert sunlight into electricity, a solar inverter to convert the output from direct to alternating current, as well as mounting, cabling, and oth\n[…]\nPopular Mechanics reports that VOS results show that grid-tied utility customers are being grossly under-compensated in most of the US as the value of solar eclipses the net metering rate as well as two-tiered rates, which means \"your neighbor's solar panels are secretly saving you money\".\n[…]\nElectric power from photovoltaic panels must be converted to alternating current by a special power inverter if it is intended for delivery to a power grid. The inverter sits between the solar array and the grid, and may be a large stand-alone unit or may be a collection of small inverters attached to individual solar panels as an AC module. The inverter must monitor grid voltage, waveform, and frequency.\n[…]\nIn the case of a utility blackout in a grid-connected PV system, the solar panels will continue to deliver power as long as the sun is shining. In this case, the supply line becomes an \"island\" with power surrounded by a \"sea\" of unpowered lines. For this reason, solar inverters that are designed to supply power to the grid are generally required to have automatic anti-islanding circuitry in them.\n[…]\nSolar power\n[…]\nSolar project management[link removed]\n[…]\nBest Practices for Siting Solar Photovoltaics on Municipal Solid Waste Landfills: A Study Prepared in Partnership with the Environmental Protection Agency for the RE-Powering America's Land Initiative: Siting Renewable Energy on Potentially Contaminated Land and Mine Sites National Renewable Energy Laboratory"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Energia_solar_fotovoltaica",
        "situacao": "ok",
        "texto": "A energia solar fotovoltaica é a energia obtida através da conversão direta da luz em eletricidade por meio do efeito fotovoltaico. A célula fotovoltaica, um dispositivo fabricado com material semicondutor, é a unidade fundamental desse processo de conversão.\n[…]\nA energia solar fotovoltaica é ideal para aplicativos de telecomunicações, entre as que se encontram por exemplo as centrais locais de telefonia, antenas de rádio e televisão, estações repetidoras de microondas e outros tipos de ligações de comunicação electrónicos. Isto é como, na maioria dos aplicativos de telecomunicações, se utilizam baterias de armazenamento e a instalação elétrica se realiza normalmente em corrente contínua (DC).\n[…]\nOs sistemas de autoconsumo fotovoltaicos utilizam a energia solar, uma fonte gratuita, inesgotável, limpa e respeitosa com o meio ambiente.\n[…]\nQuanto mais desce o custo da energia solar fotovoltaica, mais favoravelmente compete com as fontes de energia convencionais, e mais atractiva é para los usuários de eletricidade em todo o mundo. A fotovoltaica em pequena escala pode utilizar-se na Califórnia a preços de $100/MWh ($0,10/kWh) por um valor inferior da maioria de outros tipos de geração, inclusive aqueles que funcionam mediante gás natural de baixo custo.\n[…]\nA diferença das tecnologias de geração de energia baseadas em combustíveis fósseis, a energia solar fotovoltaica não produz nenhum tipo de emissões nocivas durante o seu funcionamento, ainda que a produção dos painéis fotovoltaicos apresenta também um verdadeiro impacto ambiental. Os resíduos finais gerados durante a fase de produção dos componentes, bem como as emissões das fábricas, podem gerir-se mediante controles de contaminação já existentes.\n[…]\nCentral térmica solar\n[…]\nPainel fotovoltaico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Três erres",
      "descricao": "Princípio de gestão de resíduos que ordena as ações reduzir, reutilizar e reciclar."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na regra dos três erres contra o desperdício, que ação vem em primeiro lugar, antes de reutilizar e reciclar?",
    "resposta": "Reduzir",
    "fonte": [
      "https://en.wikipedia.org/wiki/Waste_hierarchy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Waste_hierarchy",
        "situacao": "ok",
        "texto": "The waste management hierarchy, waste hierarchy, or \"hierarchy of waste management options\", is a tool used in the evaluation of processes that protect the environment alongside resource and energy consumption from most favourable to least favourable actions. The hierarchy establishes preferred program priorities based on sustainability. To be sustainable, waste management cannot be solved only wi"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hierarquia_dos_res%C3%ADduos",
        "situacao": "ok",
        "texto": "A hierarquia de gestão de resíduos é um conceito usado na gestão de resíduos sólidos, que consiste na identificação das estratégias básicas e de suas  respectivas importâncias para o sequenciamento de resíduos.\n[…]\nA hierarquia de gestão de resíduos indica uma ordem de preferência de ações para reduzir e gerenciar os resíduos. Geralmente é representado esquematicamente como uma pirâmide invertida, na qual as etapas superiores são as de maior prioridade. A hierarquia reflete as sucessivas etapas de gerenciamento pelos quais um produto deve passar antes de atingir o final de seu ciclo de vida (sua transformação em resíduo).\n[…]\nO objetivo da hierarquia de resíduos é extrair o máximo benefício prático dos produtos e gerar a mínima quantidade de resíduos. A aplicação correta da hierarquia de resíduos pode ter várias vantagens: pode ajudar a evitar emissões de gases de efeito estufa, reduzir poluentes, economizar energia, conservar recursos, criar empregos e estimular o desenvolvimento de tecnologias verdes.\n[…]\nEm 1975, a Directiva-Quadro Resíduos da União Europeia (1975/442/CEE) introduziu pela primeira vez o conceito de hierarquia de resíduos na política de resíduos europeia, enfatizando a importância da minimização de resíduos e a proteção do meio ambiente e da saúde humana. De acordo com a Diretiva de 1975, a política e a legislação da União Europeia foram adaptadas aos princípios da hierarquia de resíduos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Água doce",
      "descricao": "Água com baixa concentração de sais, presente em geleiras, aquíferos, rios e lagos."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Rios e lagos guardam só uma pequena parte da água doce do planeta. Onde está a maior parte dela?",
    "resposta": "Nas geleiras e calotas polares",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fresh_water"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fresh_water",
        "situacao": "ok",
        "texto": "Fresh water or freshwater is any naturally occurring liquid or frozen water containing low concentrations of dissolved salts and other total dissolved solids. The term excludes seawater and brackish water, but it does include non-salty mineral-rich waters, such as chalybeate springs."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81gua_doce",
        "situacao": "ok",
        "texto": "Água doce é qualquer líquido natural ou água congelada contendo baixas concentrações de sais dissolvidos e outros sólidos totais dissolvidos. Embora o termo exclua especificamente a água do mar e a água salobra, inclui águas não salgadas ricas em minerais.\n[…]\nA água doce pode abranger água congelada e derretida em lençóis de gelo, calotas polares, geleiras, campos de neve e icebergs, precipitações naturais como precipitação, queda de neve, granizo e graupel, e escoamentos superficiais que formam corpos d'água interiores, como pântanos, lagoas, lagos, rios, córregos, bem como águas subterrâneas contidas em aquíferos, rios e lagos subterrâneos. A água doce é o recurso hídrico de maior e mais imediato uso para os seres humanos.\n[…]\nNo planeta, de toda a água existente cerca de 97% é água salgada. A água doce representa 2,5%-2,75% de toda a água da Terra, estando em rios, lagos, aquíferos e vapor.\n[…]\nA água doce distribui-se desta forma:\n[…]\nGelos e geleiras — 77,39%\n[…]\nÁgua superficial, incluindo lagos, rios, pântanos e represas — 0,37%\n[…]\nA água doce é procedente de um processo de precipitação (chuva, granizo, neve) ou do degelo de geleiras. O processo de evaporação, queda e consumo de água é conhecido por ciclo da água. Todos os seres vivos precisam de água para viver. Está presente em todas as células e cada ser precisa duma certa quantidade, variando para cada espécie. Os seres vivos libertam água ao transpirar e respirar.\n[…]\nApesar de grande parte do planeta ser formado por água, apenas uma pequena parte serve para consumo. A água doce está presente nos vários recursos hídricos e na atmosfera. A quantidade existente no planeta é constante. A água passa pelo ciclo da água, passando por diversas fases.\n[…]\nPoluição da água\n[…]\nEscassez de água\n[…]\nEnciclopédia da Água",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Albedo",
      "descricao": "Fração da luz solar que uma superfície reflete, importante para o equilíbrio de temperatura da Terra."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas superfícies reflete a maior parte da luz do Sol que recebe?",
    "resposta": "Neve fresca",
    "distratores": [
      "Oceano",
      "Floresta tropical",
      "Asfalto"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Albedo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Albedo",
        "situacao": "ok",
        "texto": "Albedo (  al-BEE-doh; from Latin  albedo 'whiteness') is the fraction of sunlight that is diffusely reflected by a body. It is measured on a scale from 0 (corresponding to a black body that absorbs all incident radiation) to 1 (corresponding to a body that reflects all incident radiation). Surface albedo is defined as the ratio of radiosity Je to the irradiance Ee (flux per unit area) received by \n[…]\nFor example, the absolute albedo can indicate the surface ice content of outer Solar System objects, the variation of albedo with phase angle gives information about regolith properties, whereas unusually high radar albedo is indicative of high metal content in asteroids.\n[…]\nAn important relationship between an object's astronomical (geometric) albedo, absolute magnitude and diameter is given by:\n[…]\nis the astronomical albedo,\n[…]\nFor most objects in the solar system, the OC echo dominates and the most commonly reported radar albedo parameter is the (normalized) OC radar albedo (often shortened to radar albedo):\n[…]\nThe values reported for the Moon, Mercury, Mars, Venus, and Comet P/2005 JQ5 are derived from the total (OC+SC) radar albedo reported in those references.\n[…]\nor so), the OC radar albedo is a first-order approximation of the Fresnel reflection coefficient (aka reflectivity) and can be used to estimate the bulk density of a planetary surface to a depth of a meter or so (a few wavelengths of the radar wave which is typically at the decimeter scale) using the following empirical relationships:\n[…]\nThe term albedo was introduced into optics by Johann Heinrich Lambert in his 1760 work Photometria.\n[…]\nAlbedo Project Archived 3 April 2019 at the Wayback Machine. Additional archives: 3 March 2024.\n[…]\nAlbedo – Encyclopedia of Earth\n[…]\nNASA MODIS BRDF/albedo product site\n[…]\nOcean surface albedo look-up-table\n[…]\nSurface albedo derived from Meteosat observations\n[…]\nA discussion of Lunar albedos"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Albedo",
        "situacao": "ok",
        "texto": "Albedo ou coeficiente de reflexão (do latim albedo: 'brancura' ou luz solar refletida; de albus: 'branco') é a refletividade difusa ou poder de reflexão de uma superfície. É a razão entre a radiação refletida pela superfície e a radiação incidente sobre ela.\n[…]\nOs albedos de materiais típicos em luz visível variam de até 0,9 para neve recente até cerca de 0,04 para carvão, uma das substâncias mais escuras. Cavidades profundamente sombreadas podem possuir um albedo efetivo aproximando-se do zero de um corpo negro. Quando vista à distância, a superfície do oceano tem um albedo baixo, como a maior parte das florestas, enquanto áreas desérticas possuem os mais altos albedos entre os tipos de terreno.\n[…]\n, e a refletância bi-hemisférica,\n[…]\nO albedo\n[…]\né o albedo astronômico,\n[…]\nO albedo da neve é muito variável, variando de 0,9 para a neve recente a cerca de 0,4 para a neve que se derrete, e mesmo 0,2 para a neve suja. Sobre a Antártida, ele é em média pouco maior que 0,8. Se uma área marginalmente coberta de neve se aquece, a neve tende a derreter, reduzindo o albedo e, portanto, levando a maior derretimento de neve porque mais radiação está sendo absorvida pela neve (a retroalimentação positiva neve – albedo).\n[…]\nNo caso de florestas sempre verdes com cobertura sazonal por neve, a redução do albedo pode ser suficientemente alta para que o desmatamento provoque um efeito final de resfriamento. As árvores também impactam o clima de formas extremamente complicadas pela evapotranspiração. O vapor d’água provoca o resfriamento da superfície da terra e o aquecimento onde ele se condensa, age como um poderoso gás de efeito estufa e pode aumentar o albedo quando se condensa em nuvens.\n[…]\nFeedback do gelo-albedo\n[…]\n«O que é o albedo? - 30 segundos de explicação»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Lâmpada fluorescente",
      "descricao": "Lâmpada de descarga em gás que produz luz pela excitação de vapor de mercúrio e de um revestimento fluorescente."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Lâmpadas fluorescentes devem ir para pontos de coleta especiais porque contêm vapor de que metal tóxico?",
    "resposta": "Mercúrio",
    "distratores": [
      "Chumbo",
      "Cádmio",
      "Níquel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fluorescent_lamp"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fluorescent_lamp",
        "situacao": "ok",
        "texto": "A fluorescent lamp, or fluorescent tube, is a low-pressure mercury-vapor gas-discharge lamp that uses fluorescence to produce visible light. An electric current in the gas excites mercury vapor, to produce ultraviolet and make a phosphor coating in the lamp glow. Fluorescent lamps convert electrical energy into visible light much more efficiently than incandescent lamps, but are less efficient tha\n[…]\nMercury vapor lamps continued to be developed at a slow pace, especially in Europe. By the early 1930s they received limited use for large-scale illumination. Some of them employed fluorescent coatings, but these were used primarily for color correction and not for enhanced light output. Mercury vapor lamps also anticipated the fluorescent lamp in their incorporation of a ballast to maintain a constant current.\n[…]\nUsing an amalgam with some other metal reduces the vapor pressure and increases the optimum temperature range. The bulb wall \"cold spot\" temperature must still be controlled to prevent condensing. High-output fluorescent lamps have features such as a deformed tube or internal heat-sinks to control cold spot temperature and mercury distribution.\n[…]\nHeavily loaded small lamps, such as compact fluorescent lamps, also include heat-sink areas in the tube to maintain mercury vapor pressure at the optimum value.\n[…]\nFailure of the integral electronic ballast of a compact fluorescent bulb will also end its usable life.\n[…]\nGermicidal lamps contain no phosphor at all, making them mercury vapor gas discharge lamps rather than fluorescent. Their tubes are made of fused quartz transparent to the UVC light emitted by the mercury discharge. The 254 nm UVC emitted by these tubes will kill germs and the 184.45 nm far UV will ionize oxygen to ozone. Lamps labeled OF block the 184.45 nm far UV and do not produce significant ozone. In addition the UVC can cause eye and skin damage.\n[…]\nMetal-halide lamp"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%A2mpada_fluorescente",
        "situacao": "ok",
        "texto": "Uma lâmpada fluorescente, também chamada de tubo fluorescente, é uma lâmpada de descarga de vapor de mercúrio a baixa pressão que usa fluorescência para produzir luz visível. Uma corrente elétrica no gás excita o vapor de mercúrio, produzindo radiação ultravioleta, que faz brilhar a camada de material fluorescente depositada no interior da lâmpada.\n[…]\nO tubo de uma lâmpada fluorescente contém uma mistura de argônio, xenônio, néon ou criptônio e vapor de mercúrio. A pressão interna é de cerca de 0,3% da pressão atmosférica. Em uma lâmpada T12 de 40 W, a pressão parcial do vapor de mercúrio é de cerca de 0,8 Pa, aproximadamente oito milionésimos da pressão atmosférica. A superfície interna recebe um revestimento fluorescente formado por diferentes misturas de sais metálicos e de terras raras.\n[…]\nO uso de uma amálgama com outro metal reduz a pressão de vapor e amplia a faixa de temperatura adequada. Mesmo assim, a temperatura do \"ponto frio\" da parede precisa ser controlada para evitar condensação. Lâmpadas fluorescentes de alto fluxo podem ter tubos deformados ou dissipadores internos que controlam a temperatura do ponto frio e a distribuição do mercúrio.\n[…]\nLâmpadas pequenas submetidas a cargas elevadas, como as fluorescentes compactas, também têm áreas que funcionam como dissipadores para manter a pressão do vapor de mercúrio perto do valor ideal.\n[…]\nNo Brasil, lâmpadas fluorescentes, de vapor de sódio, de vapor de mercúrio e de luz mista fazem parte de um sistema de logística reversa. O Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos orienta o consumidor a não colocá-las no lixo comum e a levá-las a pontos de recebimento, de onde seguem para coleta, transporte, triagem e reciclagem.\n[…]\nLâmpada de vapor de mercúrio, outra lâmpada de descarga que utiliza vapor de mercúrio\n[…]\nHow Fluorescent Tubes are Manufactured",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Biodiesel",
      "descricao": "Combustível renovável feito de óleos vegetais ou gorduras animais, misturado ao diesel de petróleo."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No Brasil, a maior parte do biodiesel misturado ao diesel é feita a partir do óleo de que planta?",
    "resposta": "Soja",
    "distratores": [
      "Mamona",
      "Dendê",
      "Girassol"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Biodiesel"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Biodiesel",
        "situacao": "ok",
        "texto": "Biodiesel, também grafado como biodísel, refere-se ao biocombustível formado por ésteres de ácidos graxos, ésteres alquila (metila, etila ou propila) de ácidos carboxílicos de cadeia longa e hidrocarbonetos de origem vegetal. É um combustível renovável e biodegradável, obtido comumente a partir da reação química de lipídios, óleos ou gorduras, de origem animal ou vegetal, com um álcool na presença\n[…]\nTambém em 2007 a Disneyland começou a fazer rodar os trens do parque em misturas de biodiesel B98 (98% biodiesel). O programa foi interrompido em 2008 devido a problemas de armazenamento, mas em janeiro de 2009 foi anunciado que o parque teria, então, todos os trens rodando com biodiesel fabricado a partir de seus próprios óleos alimentares usados, sendo uma alteração dos trens movido por biodiesel à base de óleo de soja.\n[…]\nDe acordo com a análise Renewable Fuel Standards Program Regulatory Impact Analysis (Análise de Impacto e Programa Regulatório de Padrões para Combustível Renovável), da Agência de Proteção Ambiental dos Estados Unidos (EPA, Environmental Protection Agency), apresentada em fevereiro de 2010, o biodiesel de óleo de soja apresenta resultados, em média, de uma redução de 57% das emissões de gases com efeito de estufa em comparação com o diesel fóssil e biodiesel produzido a partir de resultados de resíduos de gordura uma redução de 86%.\n[…]\nA produção do biodiesel pode cooperar com o desenvolvimento econômico de diversas regiões do Brasil, uma vez que é possível explorar a melhor alternativa de matéria-prima, no caso fontes de óleos vegetais tais como óleo de amendoim, soja, mamona, dendê, girassol, algodão etc., dependendo da região.\n[…]\nFoi antecipada em três anos a mistura de 5% de biodiesel ao óleo diesel no Brasil. O chamado B5, que entraria em vigor apenas em 2013, passou a ser instituído em janeiro de 2010.\n[…]\nDiesel\n[…]\n«Entrevista com o inventor do biodiesel brasileiro»"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Etanol combustível nos Estados Unidos",
      "descricao": "Produção e uso de etanol como combustível automotivo nos Estados Unidos, misturado à gasolina."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Brasil, o etanol combustível sai da cana-de-açúcar. Nos Estados Unidos, ele é feito principalmente de que grão?",
    "resposta": "Milho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ethanol_fuel_in_the_United_States"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ethanol_fuel_in_the_United_States",
        "situacao": "ok",
        "texto": "The United States became the world's largest producer of ethanol fuel in 2005. The U.S. produced 15.8 billion U.S. liquid gallons of ethanol fuel in 2019, up from 13.9 billion gallons (52.6 billion liters) in 2011, and from 1.62 billion gallons in 2000. Brazil and U.S. production accounted for 87.1% of global production in 2011.\n[…]\nIn 1826 Samuel Morey experimented with an internal combustion chemical mixture that used ethanol (combined with turpentine and ambient air then vaporized) as fuel. At the time, his discovery was overlooked, mostly due to the success of steam power. Ethanol fuel received little attention until 1860 when Nicholas Otto began experimenting with internal combustion engines. In 1859, oil was found in Pennsylvania, which decades later provided a new kind of fuel. Popular fuels in the U.S.\n[…]\nGrowing corn to fuel internal combustion vehicles is a highly inefficient use of land. A solar farm generating electricity to power an electric vehicle would power around 85 times as much distance as corn ethanol grown on the same area."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Celulose para papel no Brasil",
      "descricao": "Polpa de fibras vegetais produzida no Brasil a partir de plantações florestais, matéria-prima do papel."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Brasil, a maior parte da celulose usada para fabricar papel vem de plantações de que árvore?",
    "resposta": "Eucalipto",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Eucalipto",
      "https://en.wikipedia.org/wiki/Eucalyptus"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Eucalipto",
        "situacao": "ok",
        "texto": "Eucalipto é o nome comum dado às espécies de um vasto e complexo gênero de plantas com flor, Eucalyptus (família Myrtaceae), e, por extensão, a gêneros próximos como Corymbia e Angophora. Predominantemente árvores, mas também arbustos, os eucaliptos são nativos da Oceania, onde formam a base da maioria das florestas e bosques da Austrália. Com mais de 700 espécies, o gênero é um dos mais diversos \n[…]\nDesde a sua descoberta pelos europeus, o eucalipto tornou-se a árvore de plantação mais difundida no mundo. Sua notável capacidade de adaptação, crescimento extremamente rápido e a versatilidade de sua madeira e óleos o converteram em um pilar da economia global, fundamental para as indústrias de celulose e papel, energia, construção civil e química.\n[…]\nAgentes fúngicos são os patógenos de maior impacto na eucaliptocultura. As condições de alta umidade e temperatura em regiões tropicais, como o Brasil, favorecem seu desenvolvimento.\n[…]\nCelulose e Papel: A principal aplicação global, com o Brasil sendo um dos maiores produtores mundiais de celulose de eucalipto.\n[…]\nO eucalipto é uma das principais escolhas para a silvicultura em todo o mundo. As espécias mais difundidas mundialmente são E. globulus e E. camaldulensis. Monoculturas de eucalipto estão presentes em cerca de 100 países, com destaque para o Brasil, que lidera o ranking mundial com cerca de 7,5 milhões de hectares. Portugal, China e Índia também possuem grandes plantações.\n[…]\nContudo, por pressão da bancada ruralista, em 2024 o Congresso do Brasil mudou a Política Nacional de Meio Ambiente ao retirar o plantio de monoculturas para extração de celulose da relação de atividades que se utilizam de recursos ambientais e são potencialmente poluidoras, aprovando a monocultura de eucalipto sem licenciamento ambiental e desobrigando a atividade do pagamento de impostos.\n[…]\nProdução de eucalipto no Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Eucalyptus",
        "situacao": "ok",
        "texto": "Eucalyptus () is a genus of more than 700 species of flowering plants in the family Myrtaceae. Most species of Eucalyptus are trees, often mallees, and a few are shrubs. Along with several other genera in the tribe Eucalypteae, including Corymbia and Angophora, they are commonly known as eucalypts or \"gum trees\". Species of Eucalyptus have bark that is either smooth, fibrous, hard, or stringy and \n[…]\nIn Italy, the Eucalyptus only arrived at the turn of the 19th century and large scale plantations were started at the beginning of the 20th century with the aim of drying up swampy ground to defeat malaria. During the 1930s, Benito Mussolini had thousands of Eucalyptus planted in the marshes around Rome. This, their rapid growth in the Italian climate and excellent function as windbreaks, has made them a common sight in the south of the country, including the islands of Sardinia and Sicily.\n[…]\nDue to similar favourable climatic conditions, Eucalyptus plantations have often replaced oak woodlands, for example in California, Spain and Portugal. The resulting monocultures have raised concerns about loss of biological diversity, through loss of acorns that mammals and birds feed on, absence of hollows that in oak trees provide shelter and nesting sites for birds and small mammals and for bee colonies, as well as lack of downed trees in managed plantations.\n[…]\nIn South Africa, Eucalyptus tree species E. camaldulensis, E. cladocalyx, E. conferruminata, E. diversicolor, E. grandis and E. tereticornis are listed as Category 1b invaders in the National Environmental Management: Biodiversity Act. This means most activities with regards to the species are prohibited (such as importing, propagating, translocating or trading) and it should be ensured that it does not spread beyond a plantation's domain."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Embalagem longa vida",
      "descricao": "Embalagem cartonada asséptica, como a Tetra Brik, usada para leite e sucos, feita de camadas de diferentes materiais."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As caixinhas de leite longa vida são feitas de camadas de papel, plástico e que metal?",
    "resposta": "Alumínio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tetra_Pak"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tetra_Pak",
        "situacao": "ok",
        "texto": "Tetra Pak is a Swedish multinational food packaging and processing company headquartered in Switzerland. The company offers packaging, filling machines and processing for dairy, beverages, cheese, ice cream and prepared food, including distribution tools like accumulators, cap applicators, conveyors, crate packers, film wrappers, line controllers and straw applicators.\n[…]\nThe Tetra Evero Aseptic is the latest of the Tetra Pak packages, launched in 2011 and marketed as the world's first aseptic carton bottle for ambient milk.\n[…]\nSince aseptic packages contain different layers of plastic and aluminium in addition to raw paper, they cannot be recycled as \"normal\" paper waste, but need to go to special recycling units for separation of the different materials. As a result, Tetra Pak cannot be put in recycling or compost bins. Recycled Tetra Paks may be used in producing polythene-based products and construction material, the third largest contributor to carbon footprint.\n[…]\nTetra Pak has operated limited recycling since the mid-1980s, introducing a recycling program for its containers in Canada as early as 1990. In 2000, Tetra Pak invested 20 million baht (€500,000) in the first recycling plant for aseptic packages in Thailand. Recycling aseptic packages has been one of Tetra Pak's challenges. Once separated, the aseptic carton yields aluminum and pure paraffin, which can be used in industry.\n[…]\nIn attempts to innovate and to improve the recyclability rate of their Aseptic cartons, one of the main factors is the replacement of the aluminum layer used, which can constitute up to 5% of the package material. In which, exposure to the metal has been suggested as a risk factor for Alzheimer's Disease. The company is currently testing two alternatives as a replacement for aluminum: (1) a fiber-based barrier layer, and (2) a polymer-based barrier."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tetra_Pak",
        "situacao": "ok",
        "texto": "A Tetra Pak é uma multinacional sueca especializada em embalagens e processamento de alimentos, com sede na Suíça. A empresa oferece soluções de embalagens, máquinas de enchimento e processamento para laticínios, bebidas, queijos, sorvetes e alimentos preparados, além de ferramentas de distribuição, como acumuladores, aplicadores de tampas, transportadores, embaladores de caixas, embaladores com f\n[…]\nEm 1952, a empresa já comercializava sua primeira máquina de embalagens cartonadas. O creme de leite foi o primeiro produto a ser embalado pela Tetra Pak. Três anos depois as embalagens da Tetra Pak começaram a acondicionar leite pasteurizado. A embalagem tipo longa vida, no entanto, seria criada apenas em 1961. Foi neste ano que Dr.\n[…]\nA Tetra Pak é a maior fornecedora do mundo em embalagens cartonadas (Tetra Brik) para o leite, sopas, sucos e outros produtos líquidos (alimentares). A empresa também fabrica equipamentos usados no envase de alimentos e o seu processamento. Oferece uma vasta gama de alternativas de embalagens, desde embalagens cartonadas às garrafas de plástico de PET e EBM.\n[…]\nPara além de fornecer cartão e materiais de plástico, a Tetra Pak também desenvolve e fabrica equipamentos-chave, tais como homogeneizadores, unidades de mistura e padronização, alternadores de temperatura a quente e componentes de sistemas e maquinaria. Seu foco são cinco categorias de alimentos: leite, queijos, bebidas, refeições prontas e gelados (sorvete). Para a maioria das pessoas, Tetra Pak é sinônimo de embalagens para leite, suco e bebidas.\n[…]\nEm julho de 2004 lançou a gama \"Tetra Recart\" nos Estados Unidos usando tecnologia de esterilização intra-embalagem. A empresa foi assim capaz de criar uma alternativa válida para embalagem de uma grande variedade de produtos (fruta, vegetais, etc) que até então eram embalados usando latas de alumínio ou recipientes de vidro.\n[…]\nTetra Laval SA: 100%",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Bateria de chumbo-ácido",
      "descricao": "Bateria recarregável com placas de chumbo em ácido sulfúrico, usada para dar a partida em automóveis."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A bateria comum dos carros, que dá a partida no motor, tem placas de que metal pesado mergulhadas em ácido?",
    "resposta": "Chumbo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lead%E2%80%93acid_battery"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lead%E2%80%93acid_battery",
        "situacao": "ok",
        "texto": "The lead–acid battery is a type of rechargeable battery. First invented in 1859 by French physicist Gaston Planté, it was the first type of rechargeable battery ever created. Compared to the more modern rechargeable batteries, lead–acid batteries have relatively low energy density and heavier weight. Despite this, they are able to supply high surge currents.\n[…]\nThese features, along with their low cost, make them useful for motor vehicles in order to provide the high current required by starter motors. Lead–acid batteries suffer from relatively short cycle lifespan (usually less than 500 deep cycles) and overall lifespan (due to the double sulfation in the discharged state), as well as long charging times; an average automotive battery takes anywhere between 6 and 12 hours to fully charge from a discharged state.\n[…]\nAttempts are being made to develop alternatives (particularly for automotive use) because of concerns about the environmental consequences of improper disposal and of lead smelting operations, among other reasons. Alternatives are unlikely to displace them for applications such as engine starting or backup power systems, since the batteries, although heavy, are inexpensive in up-front cost.\n[…]\nCorrosion of the external metal parts of the lead–acid battery results from a chemical reaction of the battery terminals, plugs, and connectors.\n[…]\nCorrosion on the positive terminal is caused by electrolysis, due to a mismatch of metal alloys used in the manufacture of the battery terminal and cable connector. White corrosion is usually lead or zinc sulfate crystals. Aluminum connectors corrode to aluminum sulfate. Copper connectors produce blue and white corrosion crystals. Corrosion of a battery's terminals can be reduced by coating the terminals with petroleum jelly or a commercially available product made for the purpose."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bateria_chumbo-%C3%A1cido",
        "situacao": "ok",
        "texto": "Acumulador de chumbo, também conhecido como bateria de chumbo-ácido, foi inventado pelo francês Gaston Planté em 1859. É uma associação de pilhas (chamadas de elementos, na linguagem da indústria de baterias) ligadas em série.\n[…]\nA bateria de chumbo-ácido é constituída de dois eletrodos; um de chumbo esponjoso e o outro de dióxido de chumbo em pó, ambos mergulhados em uma solução de ácido sulfúrico com densidade aproximada de 1,28g/mL dentro de uma malha de chumbo puro ou ligas de chumbo. O chumbo puro oferece maior resistência a corrosão, mas é muito maleável, o que dificulta o processo produtivo. Por esse motivo são usadas ligas com antimônio, cálcio e outros materiais.\n[…]\nQuando o circuito externo é fechado, conectando eletricamente os terminais, a bateria entra em funcionamento (descarga), ocorrendo a semi-reação de oxidação no chumbo e a de redução no dióxido de chumbo.\n[…]\nNo acumulador, o chumbo é o ânodo enquanto que o dióxido de chumbo é o cátodo. As reações químicas que acontecem durante a descarga são:\n[…]\nA reação do cátodo e do ânodo produzem sulfato de chumbo (\n[…]\nPara o acumulador recarregar faz-se passar corrente contínua do eletrodo de dióxido de chumbo para o de chumbo o que resulta na inversão das reações. Neste processo o ácido sulfúrico é regenerado; por isso a porcentagem de ácido sulfúrico indica o grau de carga ou descarga do acumulador. Quando está descarregado, o acumulador tem placas de sulfato de chumbo e o eletrólito diluído. Já quando está carregado, possui placas de chumbo e óxido de chumbo, imersas em ácido sulfúrico aquoso.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Reator RBMK",
      "descricao": "Modelo soviético de reator nuclear moderado a grafite e refrigerado a água, o tipo usado em Chernobyl."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O reator de Chernobyl usava blocos de que material, o mesmo da ponta do lápis, que pegaram fogo após a explosão?",
    "resposta": "Grafite",
    "fonte": [
      "https://en.wikipedia.org/wiki/RBMK",
      "https://en.wikipedia.org/wiki/Chernobyl_disaster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/RBMK",
        "situacao": "ok",
        "texto": "The RBMK (Russian: Реактор большой мощности канальный, РБМК; reaktor bolshoy moshchnosti kanalnyy, \"high-power channel-type reactor\") is a class of graphite-moderated nuclear power reactor designed and built by the Soviet Union. It is somewhat like a boiling water reactor as water boils in the pressure tubes. It is one of two power reactor types to enter serial production in the Soviet Union durin\n[…]\nCertain aspects of the original RBMK reactor design had several shortcomings, such as the large positive void coefficient, the 'positive scram effect' of the control rods and instability at low power levels—which contributed to the 1986 Chernobyl disaster, in which an RBMK experienced an uncontrolled nuclear chain reaction, leading to a steam and hydrogen explosion, large fire, and subsequent core meltdown.\n[…]\nThese design flaws were likely the final trigger of the first explosion of the Chernobyl accident, causing the lower part of the core to become prompt critical when the operators tried to shut down the highly destabilized reactor by reinserting the rods. The updates are:\n[…]\nMany incidents occurred at various power plants operating the RBMK reactor. Most of them were covered up. Incidents such as thefts of materials, equipment malfunction, repeated shut down due to them, etc. occurred. The most serious incidents such as the Partial meltdown of Leningrad unit 1 and Chernobyl unit 1 were not taken seriously and the recommendations of the scientist and experts were not implemented, which paved the path to the 1986 disaster.\n[…]\nChernobyl disaster in 1986\n[…]\nTechnical data on RBMK-1500 reactor at Ignalina nuclear power plant – a decommissioned RBMK reactor.\n[…]\nChernobyl – A Canadian Perspective – A brochure describing nuclear reactors in general and the RBMK design in particular, focusing on the safety differences between them and CANDU reactors. Published by Atomic Energy of Canada Limited."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chernobyl_disaster",
        "situacao": "ok",
        "texto": "On 26 April 1986, reactor 4 of the Chernobyl Nuclear Power Plant, located near Pripyat in the Ukrainian SSR of the Soviet Union, exploded. The accident resulted in dozens of direct deaths and a major release of radioactive material into the environment, causing widespread health effects and requiring the establishment of the Chernobyl exclusion zone. The response involved more than 500,000 personn\n[…]\nThe force of the second explosion and the ratio of xenon radioisotopes released after the accident led Sergei A. Pakhomov and Yuri V. Dubasov to theorize in 2009 that the second explosion could have been an extremely fast nuclear power transient resulting from core material melting in the absence of its water coolant and moderator.\n[…]\nThe concrete beneath the reactor was steaming hot, and was breached by now-solidified lava and spectacular unknown crystalline forms termed chernobylite. It was concluded that there was no further risk of explosion.\n[…]\nThe disaster released radioactive materials that were dispersed by wind over Ukraine, Belarus, Russia, and much of Europe. Chernobyl is estimated to have released about 400 times more radioactive material than the atomic bombings of Hiroshima and Nagasaki combined, contaminating roughly 100,000 square kilometres of land, mostly in Belarus, Ukraine, and Russia. The forest immediately downwind of the plant, since known as the Red Forest, was killed outright by acute radiation exposure.\n[…]\nIn the documentary, the women show the polluted water, their food from radioactive gardens, and explain how they manage to survive in this exclusion zone despite the radioactive levels. The documentary The Battle of Chernobyl (2006) shows rare original footage a day before the disaster in the city of Pripyat, then through different methods goes in depth on the chronological events that led to the explosion of reactor no.‍4 and the disaster response."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/RBMK",
        "situacao": "ok",
        "texto": "RBMK é um acrônimo em russo, que significa Reaktor Bolshoy Moshchnosty Kanalnyy (Reator Canalizado de Alta Potência) sendo um reator nuclear de canais pressurizados, refrigerado à água ordinária com canaletas individuais de combustível passando por dentro de blocos de grafite que além de moderador nuclear, atua como elemento estrutural do núcleo.\n[…]\nLogo após o acidente nuclear de Chernobil muitas modificações e aprimoramentos importantes de sistemas de segurança visando acidentes como perda do fluido de arrefecimento e maior velocidade de desligamento de emergência estão entre as principais. É muito diferente da maioria dos outros projetos ocidentais pois derivou de um projeto especificamente criado para gerar  principalmente plutônio para armas nucleares.\n[…]\nA combinação do moderador de grafite e do refrigerador à água não é encontrada em nenhum outro reator de força. A característica negativa principal do projeto do núcleo do reator é ser instável em níveis baixos de força, e isso foi mostrado no acidente de Chernobyl. A instabilidade era devida primeiramente ao projeto da haste de controle e a um coeficiente de vazio positivo coeficiente vago positivo.\n[…]\nReabastecimento: Quando as canaletas de combustível são isoladas, estes conjuntos do combustível podem ser levantados para fora do reator, permitindo a substituição do combustível, mesmo quando o reator estiver em operação.\n[…]\nModerador de grafite: Uma série de blocos de grafite cerca e separa os tubos de pressão. Agem como um moderador para retardar os nêutrons liberados durante a fissão de modo que uma reação em cadeia contínua possa ser mantida. A conducão de calor entre os blocos é realçado por uma mistura de hélio e nitrogênio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Smog",
      "descricao": "Tipo de poluição atmosférica urbana que forma uma névoa de fumaça e poluentes sobre as cidades."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Protetor lá no alto da atmosfera, que gás é um dos principais poluentes da névoa fotoquímica das cidades em dias quentes e ensolarados?",
    "resposta": "Ozônio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Smog",
      "https://en.wikipedia.org/wiki/Tropospheric_ozone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Smog",
        "situacao": "ok",
        "texto": "Smog, or smoke fog, is a type of intense air pollution. The word \"smog\" was coined in the early 20th century, and is a portmanteau of the words smoke and fog to refer to smoky fog due to its opacity, and odour. The word was then intended to refer to what was sometimes known as pea soup fog, a familiar and serious problem in London from the 19th century to the mid-20th century, where it was commonl\n[…]\nThe severity of smog is often measured using automated optical instruments such as nephelometers, as haze is associated with visibility and traffic control in ports. Haze, however, can also be an indication of poor air quality, though this is often better reflected using accurate purpose-built air indexes such as the American Air Quality Index, the Malaysian API (Air Pollution Index), and the Singaporean Pollutant Standards Index.\n[…]\nIn the 1957 Warner Brothers cartoon, What's Opera, Doc, Elmer Fudd called for various calamities to befall Bugs Bunny, ending in a screamed \"SMOG!!\"\n[…]\nThe 1970 made-for-TV movie A Clear and Present Danger was one of the first American television network entertainment programs to warn about the problem of smog and air pollution, as it dramatized a man's efforts toward clean air after emphysema killed his friend.\n[…]\nThe history of smog in LA is detailed in Smogtown by Chip Jacobs and William J. Kelly.\n[…]\nThe 2025 documentary series Clearing the Air: The War on Smog follows the history of smog in Los Angeles, from the first sudden appearance of smoky clouds over the city in 1943, to the decades of scientific investigation and public pressure, to the creation of the US EPA and passage of the Clean Air Act, to current day with pollution less than 1% of what it was at its worst.\n[…]\nUpadhyay, Harikrishna (2016-11-07)\"All You Need To Know About Delhi Smog / Air Pollution – 10 Questions Answered\", Dainik Bhaskar. Retrieved on 7 November 2016."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tropospheric_ozone",
        "situacao": "ok",
        "texto": "Ground-level ozone (O3), also known as surface-level ozone and tropospheric ozone, is a trace gas in the troposphere (the lowest level of the Earth's atmosphere), with an average concentration of 20–30 parts per billion by volume (ppbv), with close to 100 ppbv in polluted areas. Ozone is also an important constituent of the stratosphere, where the ozone layer (2 to 8 parts per million ozone) exist\n[…]\nIn 2000, the Ozone Annex was added to the U.S.–Canada Air Quality Agreement. The Ozone Annex addresses transboundary air pollution that contributes to ground-level ozone, which contributes to smog. The main goal was to attain proper ozone air quality standards in both countries. The North Front Range of Colorado has been out of compliance with the Federal Air Quality standards. The U.S. EPA designated Fort Collins as part of the ozone non-attainment area in November 2007.\n[…]\nGround-level ozone is both naturally occurring and anthropogenically formed. It is the primary constituent of urban smog, forming naturally as a secondary pollutant through photochemical reactions involving nitrogen oxides and volatile organic compounds in the presence of bright sunshine with high temperatures.\n[…]\nAs a result, photochemical smog pollution at the earth's surface, as well as stratospheric ozone depletion, have received a lot of attention in recent years. The disruptions in the \"free troposphere\" are likely to be the focus of the next cycle of scientific concern. In several parts of the northern hemisphere, tropospheric ozone levels have been rising. On various scales, this may have an impact on moisture levels, cloud volume and dispersion, precipitation, and atmospheric dynamics.\n[…]\nPhotochemical smog"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Smog",
        "situacao": "ok",
        "texto": "Smog, ou nevoeiro de fumaça, é um tipo de poluição atmosférica intensa. A criação da palavra costuma ser atribuída ao início do século XX. Trata-se de uma aglutinação das palavras inglesas smoke (fumaça) e fog (nevoeiro), empregada para designar um nevoeiro impregnado de fumaça, por sua opacidade e seu odor.\n[…]\nEntre os secundários estão os nitratos de peroxiacila (PANs), o ozônio troposférico e os aldeídos. O nitrato de peroxiacetila (PAN) é um dos compostos dessa família de nitratos. O ozônio é um importante poluente secundário do smog fotoquímico e se forma em reações que envolvem hidrocarbonetos e óxidos de nitrogênio (NOx) na presença de luz solar. Na atmosfera, a conversão de óxido nítrico (NO) em dióxido de nitrogênio (NO2) ocorre por reações com ozônio e radicais peroxila.\n[…]\nO dióxido de nitrogênio (NO2), o óxido nítrico (NO) e o ozônio (O3) participam ainda das seguintes reações:\n[…]\nOs vulcões liberam dióxido de enxofre e podem emitir grandes quantidades de material particulado. A liberação de gases também ocorre sem uma erupção. A névoa poluente produzida por essas emissões é chamada de vog. Na atmosfera, o dióxido de enxofre pode se transformar em aerossóis de sulfato, que reduzem a visibilidade e prejudicam a saúde. Esse processo difere da formação de ozônio no smog fotoquímico.\n[…]\nO smog é um problema grave em muitas cidades e continua prejudicando a saúde humana. Os poluentes secundários produzidos no smog fotoquímico, como o ozônio, os PANs e os aldeídos, contribuem para a irritação das vias respiratórias e dos olhos e para a redução da função pulmonar, especialmente entre os grupos mais sensíveis. O ozônio próximo à superfície, o dióxido de enxofre e o dióxido de nitrogênio podem agravar doenças respiratórias, como enfisema, bronquite e asma.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Isopor",
      "descricao": "Nome popular no Brasil do poliestireno expandido, espuma plástica leve usada em embalagens e isolamento térmico."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O isopor parece um material sólido, mas mais de noventa por cento do seu volume é feito de quê?",
    "resposta": "Ar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Poliestireno_expandido",
      "https://en.wikipedia.org/wiki/Polystyrene"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Poliestireno_expandido",
        "situacao": "ok",
        "texto": "O poliestireno ou mais popularmente conhecido como esferovite ou isopor, é um homopolímero resultante da polimerização do monômero de estireno. Trata-se de uma resina do grupo dos termoplásticos, cuja característica reside na sua fácil flexibilidade ou moldabilidade sob a ação do calor, que a deixa em forma líquida ou pastosa. É a matéria-prima dos copos descartáveis, de lacres de barris de chope \n[…]\nO poliestireno expandido (EPS), mais conhecido em Portugal sob o nome de esferovite e no Brasil sob o nome de isopor, é um plástico celular e rígido com variedade de formas e aplicações, e que apresenta-se como uma espuma moldada constituída por um aglomerado de grânulos. É bastante utilizado em construção civil e na confecção de caixas térmicas para armazenamento de bebidas e alimentos.\n[…]\nExpandidas, as pérolas apresentam em seu volume até 98% de ar e apenas 2% de poliestireno, o que garante grande leveza ao material. Em 1m³ de EPS expandido, por exemplo, existem de 3 a 6 bilhões de células fechadas e cheias de ar.\n[…]\nPS expandido: espuma semirrígida com marca comercial \"Isopor\". O plástico é polimerizado na presença do agente expansor ou então o mesmo pode ser absorvido posteriormente. Durante o processamento do material aquecido ele se volatiliza, gerando as células no material. Baixa densidade e bom isolamento térmico. Aplicações: bandejas para embalagem de produtos hortifrutigranjeiros, protetor de equipamentos, isolantes térmicos, pranchas para flutuação, geladeiras isotérmicas, etc.\n[…]\nNa construção civil, pode ser utilizado por meio da substituição de uma porcentagem de areia por poliestireno em pó, uma opção mais sustentável e economicamente viável. Uma porcentagem de 5% considera-se ideal para substituição da matéria-prima. Durante o processo de produção do poliestireno são adicionados aditivos que configuram características específicas, como:\n[…]\nEngenharia dos materiais"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Polystyrene",
        "situacao": "ok",
        "texto": "Polystyrene (PS)  is a synthetic polymer made from monomers of the aromatic hydrocarbon styrene. Polystyrene can be solid or foamed. General-purpose polystyrene is clear, hard, and brittle. By weight, it is considered a relatively cheap resin and a fairly poor barrier to oxygen and water vapor, with a relatively low melting point. Polystyrene is one of the most widely used plastics, with the scale\n[…]\nThe polystyrene beads formed by this mechanism may have an average diameter of around 200 μm. The beads are then permeated with a \"blowing agent\", a material that enables the beads to be expanded. Pentane is commonly used as the blowing agent. The beads are added to a continuously agitated reactor with the blowing agent, among other additives, and the blowing agent seeps into pores within each bead. The beads are then expanded using steam.\n[…]\nPolystyrene foams are produced using blowing agents that form bubbles and expand the foam. In expanded polystyrene, these are usually hydrocarbons such as pentane, which may pose a flammability hazard in manufacturing or storage of newly manufactured material, but have relatively mild environmental impact. Extruded polystyrene is usually made with hydrofluorocarbons (HFC-134a), which have global warming potentials of approximately 1000–1300 times that of carbon dioxide.\n[…]\nAnimals do not recognize polystyrene foam as an artificial material and may  mistake it for food.\n[…]\nExpanded polystyrene scrap can be easily added to products such as EPS insulation sheets and other EPS materials for construction applications; many manufacturers cannot obtain sufficient scrap because of collection issues. When it is not used to make more EPS, foam scrap can be turned into products such as clothes hangers, park benches, flower pots, toys, rulers, stapler bodies, seedling containers, picture frames, and architectural molding from recycled PS."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Capitão Planeta e os Planetários",
      "descricao": "Desenho animado ambientalista americano dos anos 1990, em que cinco jovens com anéis mágicos invocam o herói Capitão Planeta."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No desenho Capitão Planeta, os anéis dos Planetários controlam terra, fogo, vento, água e que quinto poder, que ficou com o brasileiro Ma-Ti?",
    "resposta": "Coração",
    "fonte": [
      "https://en.wikipedia.org/wiki/Captain_Planet_and_the_Planeteers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Captain_Planet_and_the_Planeteers",
        "situacao": "ok",
        "texto": "Captain Planet and the Planeteers, commonly referred to as simply Captain Planet, is an American animated environmentalist superhero television series created by Barbara Pyle and Ted Turner and developed by Pyle, Nicholas Boxer, Thom Beers, Andy Heyward, Robby London, Bob Forward, and Cassandra Schafausen. The series was produced by Turner Program Services and DIC Enterprises and broadcast on TBS \n[…]\nWith the five powers combined they summon Earth's greatest champion - CAPTAIN PLANET!\n[…]\nThis promotional DVD contained the episodes \"A River Ran Through It\", \"A Perfect World\", \"Gorillas Will Be Missed\", and \"The Big Clam Up\". A short clip titled \"Planeteers in Action\", which is about the Captain Planet Foundation, is also included. The \"Planeteer Pack\" special is no longer available.\n[…]\nMarvel Comics published a comic series titled Captain Planet and the Planeteers. The series ran twelve issues, cover dated October 1991 through October 1992.\n[…]\nA new comic series by Dynamite Entertainment began release on May 7, 2025, and ran for six issues. It was planned to be released on Earth Day (April 23) but, was delayed. Captain Planet and the Planeteers is written by David Pepose and illustrated by Emmanuel Casallos. The series received mostly positive reviews, averaging a critic score of 8.4/10 according to Comic Book Round Up.\n[…]\nIn 2017, Captain Planet appeared in a special crossover episode of the Cartoon Network series OK K.O.! Let's Be Heroes, with David Coburn reprising his role as Captain Planet and LeVar Burton reprising his role as Kwame. The heroes battled Dr. Blight (accompanied by a silent MAL). The episode \"The Power Is Yours\" aired on October 9, 2017, as part of the first season.\n[…]\nPlaneteer Movement\n[…]\nCaptain Planet Foundation\n[…]\nCaptain Planet at Don Markstein's Toonopedia. Archived[link removed] from the original on April 9, 2012.\n[…]\nCaptain Planet and the Planeteers at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Capit%C3%A3o_Planeta",
        "situacao": "ok",
        "texto": "Capitão Planeta (no original em inglês Captain Planet And The Planeteers) é um super-herói estadunidense-canadense criado no começo da década de 1990 pelo empresário americano Ted Turner como uma forma de alerta e interação para com seus telespectadores, que em sua maioria são crianças e adolescentes.\n[…]\nCapitão Planeta (Captain Planet): o super-herói da série, o Capitão Planeta surge após a combinação dos poderes dos cinco Protetores - terra, fogo, vento, água e coração - com sua frase introdutória \"Pela união de seus poderes, eu sou o Capitão Planeta!\". Ele obtém forças a partir dos elementos naturais e enfraquece ao ser exposto a poluentes de qualquer tipo.\n[…]\nCapitão Poluição (Captain Pollution): este \"doppelgänger corrupto\" é um tipo de contraparte poluída do Capitão Planeta, combinando os poderes poluentes dos anéis malignos criados por Blight para ela mesma, Dr. Duke Nukem, Matreiro, Verminoso Escória e Looten Plunder - ele tem sua própria frase introdutória \"Pela união de seus poderes poluidores, eu sou o Capitão Poluição!\", contrária ao Capitão Planeta.\n[…]\nTais anéis - Super-Radiação (contraparte do Fogo, portado por Duke Nukem), Desmatamento (contraparte da Terra, portado por Looten Plunder), Fumaça (contraparte do Vento, portado por Matreiro), Tóxicos (contraparte da Água, portado por Verminoso Escória) e Ódio (contraparte do Coração, portado pela Dra. Blight), respectivamente - são contrapartes malignas dos anéis dos Protetores (que Blight roubou e a partir deles criou as cópias).\n[…]\nEm uma inversão plena ao herói, o Capitão Poluição se fortalece com poluidores tóxicos e enfraquece com os elementos puros do planeta. Como o Planeta, ele também tem sua frase-tema, mas invertida: \"O poder da poluição é de vocês!\"Representa: a destruição global.\n[…]\nCapitão Planeta no TV.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Bandeiras tarifárias",
      "descricao": "Sistema brasileiro da Aneel que sinaliza, por cores, acréscimos na conta de luz conforme o custo de geração de energia."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No sistema de bandeiras tarifárias da conta de luz brasileira, que cor indica que não há nenhuma cobrança extra?",
    "resposta": "Verde",
    "fonte": [
      "https://www.gov.br/aneel/pt-br/assuntos/tarifas/bandeiras-tarifarias"
    ],
    "trechos": [
      {
        "url": "https://www.gov.br/aneel/pt-br/assuntos/tarifas/bandeiras-tarifarias",
        "situacao": "ok",
        "texto": "Sobre Bandeiras Tarifárias — Agência Nacional de Energia Elétrica\n[…]\nBandeiras tarifárias é o Sistema que sinaliza aos consumidores os custos reais da geração de energia elétrica. Saiba mais.\n[…]\nBandeiras tarifárias é o sistema que sinaliza aos consumidores os custos reais da geração de energia elétrica. Para tanto, as cores das Bandeiras (verde, amarela ou vermelha), definidas mensalmente , indicam se a energia custará mais ou menos em função das condições de geração de eletricidade.\n[…]\nCom as Bandeiras, a conta de luz fica mais transparente e o consumidor tem a melhor informação para usar a energia elétrica de forma mais consciente.\n[…]\nAs variações que ocorriam nos custos de geração de energia, para mais ou para menos, eram repassados até um ano depois, no reajuste tarifário seguinte.\n[…]\nBandeira verde: condições favoráveis de geração de energia. A tarifa não sofre nenhum acréscimo;\n[…]\nBandeira amarela: condições de geração menos favoráveis. A tarifa sofre acréscimo de R$ 0,01885 para cada quilowatt-hora (kWh) consumidos;\n[…]\nBandeira vermelha - Patamar 1: condições mais custosas de geração. A tarifa sofre acréscimo de R$ 0,04463 para cada quilowatt-hora kWh consumido.\n[…]\nBandeira vermelha - Patamar 2: condições ainda mais custosas de geração. A tarifa sofre acréscimo de R$ 0,07877 para cada quilowatt-hora kWh consumido.\n[…]\nTodos os consumidores cativos das distribuidoras são faturados pelo Sistema de Bandeiras Tarifárias, com exceção daqueles localizados em sistemas isolados.\n[…]\nAinda tem dúvidas? Veja aqui o Perguntas e Respostas sobre Bandeiras Tarifárias ."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Aquecedor solar de água",
      "descricao": "Sistema de placas coletoras, geralmente instaladas em telhados, que aquece água com a energia do Sol."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nos telhados, as placas dos aquecedores solares de água são pintadas de que cor, para absorver mais calor?",
    "resposta": "Preto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Solar_water_heating",
      "https://en.wikipedia.org/wiki/Solar_thermal_collector"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Solar_water_heating",
        "situacao": "ok",
        "texto": "Solar water heating (SWH) is heating water by sunlight, using a solar thermal collector. A variety of configurations are available at varying cost to provide solutions in different climates and latitudes. SWHs are widely used for residential and some industrial applications.\n[…]\nHowever, PV-powered active solar thermal systems typically use a 5–30 W PV panel and a small, low power diaphragm pump or centrifugal pump to circulate the water. This reduces the operational carbon and energy footprint.\n[…]\nAnalysing their lower impact retrofit freeze-tolerant solar water heating system, Allen et al. (qv) reported a production CO2 impact of 337 kg, which is around half the environmental impact reported in the Ardente et al. (qv) study.\n[…]\nThe amount of hot water consumed each day must be replaced and heated. In a solar-only system, consuming a high fraction of the water in the reservoir implies significant reservoir temperature variations. The larger the reservoir the smaller the daily temperature variation.\n[…]\nUNE 94002:2005 Thermal solar systems for domestic hot water production. Calculation method for heat demand.\n[…]\nOG-300: OG-300 Certification of Solar Water Heating Systems.\n[…]\nCAN/CSA-F378 Series 11 (Solar collectors)\n[…]\nCAN/CSA-F379 Series 09 (Packaged solar domestic hot water systems)\n[…]\nSRCC Standard 600 (Minimum standard for solar thermal concentrating collectors)\n[…]\nRenewable Energy (Electricity) Regulations 2001 - STC Calculation Methodology for Solar Water Heaters and air source heat pump Water Heaters\n[…]\nConcentrating solar power\n[…]\nPassive solar\n[…]\nSolar air conditioning\n[…]\nSolar air heating\n[…]\nSolar combisystem\n[…]\nSolar energy\n[…]\nSolar hot water in Australia\n[…]\nSolar thermal collector\n[…]\nSolar thermal energy\n[…]\nSolar water disinfection\n[…]\nParts of a solar heating system"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Solar_thermal_collector",
        "situacao": "ok",
        "texto": "A solar thermal collector collects heat by absorbing sunlight. The term \"solar collector\" commonly refers to a device for solar hot water heating, but may also refer to large power generating installations such as solar parabolic troughs and solar towers, or to non-water-heating devices such as solar cookers or solar air heaters.\n[…]\nMoreover, the wavelength of incident solar radiation falls between 0.3 and 3 μm, which is significantly shorter than the wavelength of radiation emitted by most radiative surfaces.\n[…]\nThe thermal energy of the heat transfer fluid can then be used directly or stored for later use. The transfer of thermal energy occurs through convection, which can be either natural or forced depending on the specific system. Use of artitifcal turbulence promoter in both solar air, and water heaters have been investigated to increase their thermal efficicency.\n[…]\nISO test methods for solar collectors.\n[…]\nEN 12975: Thermal solar systems and components. Solar collectors.\n[…]\nEN 12976: Thermal solar systems and components. Factory-made systems.\n[…]\nEN 12977:  Thermal solar systems and components. Custom-made systems.\n[…]\nSolar Keymark: Thermal solar systems and components. Higher level EN 1297X series certification which includes factory visits.\n[…]\nInternational Code Council / Solar Rating & Certification Corporation: Testing is performed by independent laboratories and typically includes selection of a collector to be tested from a sample group of at least six solar collectors.\n[…]\nICC 901/ICC-SRCC™ 100: Solar Thermal Collector Standard\n[…]\nICC 900/ICC-SRCC™ 300: Solar Thermal System Standard\n[…]\nICC 902/APSP 902/ICC-SRCC™ 400: Solar Pool and Spa Heating System Standard\n[…]\nCanadian government ratings of solar collectors\n[…]\nFeasibility of photovoltaic Cells on a Fixed Mirror Distributed Focus Solar Bowl"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Quilowatt-hora",
      "descricao": "Unidade usada para medir o consumo de eletricidade nas contas de luz, igual à energia de mil watts durante uma hora."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Na conta de luz, o consumo é cobrado em quilowatt-hora. Essa é uma unidade de quê?",
    "resposta": "Energia",
    "distratores": [
      "Potência",
      "Tensão elétrica",
      "Corrente elétrica"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kilowatt-hour"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kilowatt-hour",
        "situacao": "ok",
        "texto": "A kilowatt-hour (unit symbol: kW⋅h or kW h; commonly written as kWh) is a non-SI unit of energy equal to 3.6 megajoules (MJ) in SI units, which is the energy delivered by one kilowatt of power for one hour.\n[…]\nThe kilowatt-hour is commonly used by electrical energy providers for purposes of billing, since the monthly energy consumption of a typical residential customer ranges from a few hundred to a few thousand kilowatt-hours. Megawatt-hours (MWh), gigawatt-hours (GWh), and terawatt-hours (TWh) are often used for metering larger amounts of electrical energy to industrial customers and in power generation.\n[…]\nThe terawatt-hour and petawatt-hour (PWh) units are large enough to conveniently express the annual electricity generation for whole countries and the world energy consumption.\n[…]\nElectric energy production and consumption are sometimes reported on a yearly basis, in units such as megawatt-hours per year (MWh/yr) gigawatt-hours/year (GWh/yr) or terawatt-hours per year (TWh/yr). These units have dimensions of energy divided by time and thus are units of power. They can be converted to SI power units by dividing by the number of hours in a year, about 8760 h/yr.\n[…]\nAverage annual energy production or consumption can be expressed in kilowatt-hours per year. This is used with loads or output that vary during the year but whose annual totals are similar from one year to the next. For example, it is useful to compare the energy efficiency of household appliances whose power consumption varies with time or the season of the year. Another use is to measure the energy produced by a distributed power source.\n[…]\nElectric energy consumption"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "WALL-E",
      "descricao": "Animação da Pixar de 2008 sobre um pequeno robô deixado numa Terra abandonada e coberta de lixo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No filme Wall-E, da Pixar, o robozinho passa os dias na Terra abandonada fazendo o quê?",
    "resposta": "Compactando lixo em cubos",
    "fonte": [
      "https://en.wikipedia.org/wiki/WALL-E"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/WALL-E",
        "situacao": "ok",
        "texto": "WALL-E (stylized with an interpunct as WALL·E) is a 2008 American animated science fiction film directed by Andrew Stanton, who co-wrote the screenplay with Jim Reardon, based on a story by Stanton and Pete Docter. Produced by Pixar Animation Studios for Walt Disney Pictures, the film stars the voices of Ben Burtt, Elissa Knight, Jeff Garlin, John Ratzenberger, Kathy Najimy, and Sigourney Weaver, \n[…]\nIn the year 2805, Earth is an inhospitable, garbage-strewn wasteland due to an ecocide caused by rampant consumerism, corporate greed, and environmental neglect. Humanity was evacuated to space by the megacorporation Buy n Large on giant spaceships 700 years earlier, leaving trash-compacting \"WALL-E\" robots to clean up the planet, but the cleanup was eventually abandoned after the planet became far too toxic.\n[…]\nRalph Eggleston noted this feature gave the animators more to work with and gave the robot a childlike quality. Pixar's studies of trash compactors during their visits to recycling stations inspired his body. His tank treads were inspired by a wheelchair someone had developed that used treads instead of wheels. The animators wanted him to have elbows, but realized this was unrealistic because he is only designed to pull garbage into his body.\n[…]\nWALL-E proves to this generation and beyond that the film medium's only true boundaries are the human imagination. Writer/director Andrew Stanton and his team have created a classic screen character from a metal trash compactor who rides to the rescue of a planet buried in the debris that embodies the broken promise of American life. Not since Chaplin's \"Little Tramp\" has so much story—so much emotion—been conveyed without words.\n[…]\nHauser, Tim (2008). The Art of WALL-E. San Francisco: Chronicle Books. ISBN 978-0-8118-6235-6. OCLC 377889575.\n[…]\nWALL-E at IMDb\n[…]\nWALL-E at Rotten Tomatoes\n[…]\nWALL-E at the TCM Movie Database (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/WALL-E",
        "situacao": "ok",
        "texto": "WALL-E (estilizado como WALL·E) é um filme de animação americano de 2008 produzido pela Pixar Animation Studios e dirigido por Andrew Stanton. A história segue um robô chamado WALL-E, criado no ano de 2100 para limpar a Terra coberta por lixo. Ele se apaixona por um outro robô, chamado EVA, que tem a missão de encontrar pelo menos uma planta na superfície do planeta Terra. Ele a segue para o espaç\n[…]\nO filme se passa no ano de 2805, época em que a Terra é um planeta abandonado e coberto por lixo, resultado de décadas de consumismo em massa, facilitado pela megacorporação Buy-n-Large (BnL). Desistindo de restaurar o ecossistema, a BnL evacuou a Terra, levando a população a viver no espaço em uma nave estelar chamada Axiom, totalmente automatizada, deixando no planeta apenas um exército de robôs compactadores de lixo chamados \"WALL-E\" para limpeza durante um período de cinco anos.\n[…]\nA planta é levada ao capitão, que assiste às gravações de EVA de uma Terra desolada e percebe que a humanidade deve retornar ao planeta para recuperá-lo. Entretanto, Auto revela sua diretriz de \"não retornar\" e arma um motim contra o capitão, desabilitando WALL-E com um taser. EVA e WALL-E são então jogados no lixo, onde são compactados para serem lançados ao espaço.\n[…]\nEle não achou a ideia sombria porque ter um planeta coberto de lixo era, para ele, um desastre infantil.\n[…]\nA Pixar estudou Chernobyl e a cidade de Sófia para criar um mundo arruinado; o desenhista de produção Anthony Christov era da Bulgária e lembra que Sófia tinha problemas em guardar seu lixo. Eggleston desbotou os brancos da Terra para fazer WALL-E parecer vulnerável. A luz superexposta faz a locação parecer mais vasta. Devido a bruma, os cubos que constituem as torres de lixo tinham de ser bem grandes, de outra forma eles perderiam o formato (em troca, isso reduzia o tempo de renderização).\n[…]\nWALL-E (em inglês) no Box Office Mojo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Frenagem regenerativa",
      "descricao": "Sistema de carros elétricos e híbridos que recupera a energia do movimento durante a frenagem."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em carros elétricos e híbridos, a chamada frenagem regenerativa aproveita a energia da freada para fazer o quê?",
    "resposta": "Recarregar a bateria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Regenerative_braking"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Regenerative_braking",
        "situacao": "ok",
        "texto": "Regenerative braking is an energy recovery mechanism that slows down a moving vehicle or object by converting its kinetic energy or potential energy into a form that can be either used immediately or stored until needed.\n[…]\nRegenerative braking is also possible on a non-electric bicycle. The United States Environmental Protection Agency, working with students from the University of Michigan, developed the hydraulic Regenerative Brake Launch Assist (RBLA).\n[…]\nThe calibrations used to determine when energy will be regenerated and when friction braking is used to slow down the vehicle affects the way the driver feels the braking action.\n[…]\nPower consumption is reduced by regenerative braking on streetcars (AE) or trams (CE) in Oranjestad, Aruba. Designed and built by TIG/m Modern Street Railways in Chatsworth, USA, the vehicles use hybrid/electric technology: they do not take their power from external sources such as overhead wires when running but are self-powered by lithium batteries augmented by hydrogen fuel cells.\n[…]\nThe brake regeneration energy 𝐸re can be calculated by :\n[…]\nRegenerative braking has a similar energy equation to the equation for the mechanical flywheel. Regenerative braking is a two-step process involving the motor/generator and the battery. The initial kinetic energy is transformed into electrical energy by the generator and is then converted into chemical energy by the battery. This process is less efficient than the flywheel. The efficiency of the generator can be represented by:\n[…]\nThe work out of the battery represents the amount of energy produced by the regenerative brakes. This can be represented by:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Frenagem_regenerativa",
        "situacao": "ok",
        "texto": "A Frenagem Regenerativa ou Frenagem Recuperativa(pt-BR) ou Travagem Regenerativa ou Travagem Recuperativa(pt-PT?))  é um dispositivo eletromecânico que transforma a energia cinética liberada durante a freagem/travagem em energia elétrica, sendo usada em vários veículos elétricos, desde carros a lambretas.\n[…]\nA energia elétrica gerada durante a frenagem é armazenada nas baterias dos híbridos plug-in e veículos elétricos estes elétricos possuindo freios tradicionais para possibilitar uma frenagem rápida e abrupta, também contribui para a redução do consumo de combustível, no caso dos automóveis híbridos, além disso proporciona redução do desgaste das lonas ou discos de freios, por frear o veículo via campo eletromagnético (sem atrito), resultando em maior durabilidade para essas partes do sistema de freios.\n[…]\nFreios regenerativos são mais habitualmente vistos em veículos elétricos ou híbridos. Freios regenerativos elétricos derivam dos freios dinâmicos, também chamado de freios reostáticos, que eram utilizados em locomotivas e bondes diesel-elétricos desde meados do século XX. Em ambos sistemas, os freios eram acoplados por motores chaveados para atuar como gerador que convertiam o movimento em eletricidade ao invés de transformar eletricidade em movimento.\n[…]\nOs tradicionais freios baseados em fricção deveriam também ser providos, de forma a serem usados quando uma frenagem rápida e abrupta fosse requerida.\n[…]\nHá também o Flybrid que está em desenvolvimento, para ser usado na Formula 1 que trará benefícios aos carros. O Flybrid é um volante de inércia acoplado a uma transmissão, que armazena a energia liberada durante a frenagem do carro pela sua própria rotação. Esta energia que foi guardada no momento da frenagem do veículo é reutilizada quando o piloto acionar um botão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Novo Confinamento Seguro de Chernobyl",
      "descricao": "Estrutura gigante concluída em 2016 para cobrir o reator 4 destruído da usina de Chernobyl e o antigo sarcófago."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 2016, uma estrutura gigante foi deslizada sobre trilhos para cobrir o reator destruído de Chernobyl. Que formato ela tem?",
    "resposta": "Arco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chernobyl_New_Safe_Confinement"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chernobyl_New_Safe_Confinement",
        "situacao": "ok",
        "texto": "The New Safe Confinement (NSC or New Shelter; Ukrainian: Новий безпечний конфайнмент, romanized: Novyy bezpechnyy konfaynment) is a structure put in place in 2016 to confine the remains of the number 4 reactor unit at the Chernobyl Nuclear Power Plant, in Ukraine, which was destroyed during the Chernobyl disaster in 1986. The structure also encloses the temporary Shelter Structure (sarcophagus) th\n[…]\nConvert the destroyed Chernobyl Nuclear Power Plant reactor 4 into an environmentally safe system (i.e., confine the radioactive materials at the site to prevent further environmental contamination).\n[…]\nSpecial consideration was necessary for the excavation required for foundation construction due to the high level of radioactivity found in the upper layers of soil. The conceptual designers of the New Safe Confinement recommended the use of rope operated grabs for the first 0.3 metres (11.8 in) of pile excavation for the Chernobyl site. This reduced the direct exposure of workers to the most contaminated sections of the soil.\n[…]\nFor the removal and storage of nuclear waste within the New Safe Confinement area, the strategies for removing waste are split into three systems. Disposal of solid nuclear waste had the Vector Radioactive Waste Storage Facility built near to the Chernobyl site, consisting of the Industrial Complex for Solid Radwaste Management (ICSRM), a nuclear waste storage site.\n[…]\nDescription of the New Safe Confinement. Design of the new protective shield under Sarcophagus. Archived January 27, 2009, at the Wayback Machine\n[…]\nNovember 2014, Chernobyl Story on CBS 60 Minutes\n[…]\nNew Safe Confinement site live camera\n[…]\nUnique engineering feat concluded as Chernobyl arch has reached resting place on YouTube showing of New Safe Confinement being slid into position, 14–29 November 2016, European Bank for Reconstruction and Development channel archived at Ghostarchive.org on 6 May 2022"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Usina hidrelétrica reversível",
      "descricao": "Usina com dois reservatórios em alturas diferentes que armazena energia bombeando água para cima e a gera deixando-a descer."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "As hidrelétricas reversíveis funcionam como baterias gigantes. Quando sobra energia na rede, o que elas fazem com a água?",
    "resposta": "Bombeiam para o reservatório de cima",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pumped-storage_hydroelectricity"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pumped-storage_hydroelectricity",
        "situacao": "ok",
        "texto": "Pumped-storage hydroelectricity (PSH), or pumped hydroelectric energy storage (PHES), is a type of hydroelectric energy storage used by electric power systems for load balancing.\n[…]\nWhen there is higher demand, water is released back into the lower reservoir through a turbine, generating electricity. Pumped storage plants usually use reversible turbine/generator assemblies, which can act both as a pump and as a turbine generator (usually Francis turbine designs).\n[…]\nIn March 2017, the research project StEnSea (Storing Energy at Sea) announced their successful completion of a four-week test of a pumped storage underwater reservoir. In this configuration, a hollow sphere submerged and anchored at great depth acts as the lower reservoir, while the upper reservoir is the enclosing body of water. Electricity is created when water is let in via a reversible turbine integrated into the sphere.\n[…]\nThe first use of pumped-storage in the United States was in 1930 by the Connecticut Electric and Power Company, using a large reservoir located near New Milford, Connecticut, pumping water from the Housatonic River to the storage reservoir 70 metres (230 ft) above.\n[…]\nConventional hydroelectric dams may also make use of pumped storage in a hybrid system that both generates power from water naturally flowing into the reservoir as well as storing water pumped back to the reservoir from below the dam. The Grand Coulee Dam in the United States was expanded with a pump-back system in 1973. Existing dams may be repowered with reversing turbines thereby extending the length of time the plant can operate at capacity.\n[…]\nList of pumped-storage hydroelectric power stations"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Central_hidroel%C3%A9trica_revers%C3%ADvel",
        "situacao": "ok",
        "texto": "Uma central hidroeléctrica reversível (português europeu) ou usina hidrelétrica reversível (português brasileiro) é uma central hidroelétrica que permite o armazenamento energético sob a forma de energia potencial, bombeando água entre reservatórios a diferentes altitudes.\n[…]\nEstas centrais são tipicamente usadas para igualar diferenças periódicas em horário de carregamentos eléctricos, armazenando energia em períodos de baixo consumo e restituindo a energia armazenada à rede em períodos de elevado consumo. Esta tecnologia também pode ser usada em estrutura de canal (de irrigação ou navegável), permitindo a produção de energia eléctrica como nas centrais hidroelétricas tradicionais.\n[…]\nEmbora a maior parte destas instalações sejam de grande porte, existem instalações em pequena escala, nomeadamente em edifícios, embora estas sejam desvantajosas em termos económicos dadas as economias de escala presentes. Além disso, uma grande quantidade de água deve ser armazenada o que pode ser um problema em meios urbanos. No entanto, alguns autores defendem a simplicidade tecnológica e a capacidade de assegurar um fornecimento de água como importantes externalidades.\n[…]\nAlém de armazenar energia em um ciclo diário, as usinas hidrelétricas reversíveis podem armazenar energia em ciclos semanais, sazonais (anuais) e plurianuais. O potencial de implementação de UHRS no Brasil é grande e ainda inexplorado. Essa tecnologia tem a capacidade de aumentar o armazenamento energético do Brasil e garantir a segurança energética do país.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Angra 1",
      "descricao": "Primeira usina nuclear brasileira, unidade da central de Angra dos Reis, construída com tecnologia americana."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por desligar com muita frequência nos seus primeiros anos, a usina nuclear Angra 1 ganhou que apelido de inseto?",
    "resposta": "Vaga-lume",
    "fonte": [
      "https://en.wikipedia.org/wiki/Angra_Nuclear_Power_Plant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Angra_Nuclear_Power_Plant",
        "situacao": "ok",
        "texto": "Angra Nuclear Power Plant is Brazil's only nuclear power plant. It is located at the Central Nuclear Almirante Álvaro Alberto (CNAAA) on the Itaorna Beach in Angra dos Reis, Rio de Janeiro. It consists of two pressurized water reactors (PWR), Angra I, with a net output of 609 MWe, first connected to the power grid in 1985 and Angra II, with a net output of 1,275 MWe, connected in 2000.\n[…]\nAngra I was purchased from Westinghouse of the USA (its sister power plant is Krško Nuclear Power Plant in Slovenia). The balance of plant design was subcontracted to Gibbs and Hill (USA) in association with PROMON Engenharia S.A. and construction to Brasileira de Engenharia S.A.\n[…]\nThe purchase did not include the transfer of sensitive reactor technology. As a result, Angra II was built with pre-Konvoi German technology, as part of a comprehensive nuclear agreement between Brazil and West Germany signed by President Ernesto Geisel in 1975. The complex was designed to have three PWR units with a total output of around 3,000 MWe and was to be the first of 4 nuclear plants that would be built up to 1990.\n[…]\nThe development of Angra III began in 1984 as a Siemens/KWU pressurized water reactor but was halted in 1986. About 70% of the plant's equipment was purchased in 1985 but has been in storage ever since. In June 2007, restarting of work on was approved by the National Council for Energy Policy but was halted again. On 31 May 2010, the National Nuclear Energy Commission granted a licensee for construction of the third reactor.\n[…]\nIn November 2021, the Brazilian government rescheduled the conclusion of Angra III for 2026–27, and announced the construction of a fourth nuclear power plant, to be inaugurated in 2031. In February 2022, the consortium that will complete the reactor agreed a contract, which is planned to enable reactor operations to start in 2026.\n[…]\nAngra-3 PWR Nuclear, Brazil"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Central_Nuclear_Almirante_%C3%81lvaro_Alberto",
        "situacao": "ok",
        "texto": "Central Nuclear Almirante Álvaro Alberto (CNAAA) é o complexo formado pelo conjunto das usinas nucleares Angra 1, Angra 2 e Angra 3 (em construção), de propriedade da Eletronuclear, subsidiária da Eletrobras. Elas são o resultado de um longo programa nuclear brasileiro que remonta à década de 1950 com a criação do Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq) liderado na épo\n[…]\nEm 2001, entrou em operação a usina Angra 2 com 1350 MW. Essa usina foi construída com tecnologia alemã Siemens/KWU, ainda no âmbito do Acordo Nuclear Brasil-Alemanha. Em seu primeiro ano de operação, Angra 2 atingiu um fator de capacidade de quase noventa por cento.\n[…]\nAngra 1 - 657 MW\n[…]\nA usina Angra 1 está situada na Praia de Itaorna, em Angra dos Reis, foi a primeira usina do programa nuclear brasileiro, que atualmente conta também com Angra 2 em operação, Angra 3 em construção, conforme o planejamento da Empresa de Pesquisa Energética - EPE. Angra 1 teve sua construção iniciada em 1972, tendo recebido licença para operação comercial da Comissão Nacional de Energia Nuclear - CNEN em dezembro de 1984.\n[…]\nAngra 2 foi a primeira usina construída a partir do Acordo Nuclear Brasil-Alemanha, firmado em 1975. As obras civis da usina foram contratadas à Construtora Norberto Odebrecht (atual OEC) e iniciadas em 1976 com o estaqueamento. O início da construção propriamente dita se deu em setembro de 1981, com a concretagem da laje do prédio do reator.\n[…]\nA usina opera em ciclos de aproximadamente 13 meses para troca de aproximadamente 1/3 do seu combustível. A primeira parada foi realizada entre março e abril de 2000, e até maio de 2013 haviam sido feitos 10 reabastecimentos.[carece de fontes]? Projetada para produzir 1 309 MW, ao entrar em operação Angra 2 alcançou a potência de 1 360 MW graças a atualizações do projeto.\n[…]\nFábrica de Combustível Nuclear de Resende\n[…]\nIndústrias Nucleares do Brasil",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Monóxido de carbono",
      "descricao": "Gás tóxico, incolor e inodoro, produzido pela queima incompleta de combustíveis."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por não ter cor nem cheiro e matar sem dar sinais, o monóxido de carbono que escapa de aquecedores e motores ganhou que apelido?",
    "resposta": "Assassino silencioso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Carbon_monoxide",
      "https://en.wikipedia.org/wiki/Carbon_monoxide_poisoning"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carbon_monoxide",
        "situacao": "ok",
        "texto": "Carbon monoxide (chemical formula CO) is a poisonous, flammable gas that is colorless, odorless, flavorless, and slightly less dense than air. Carbon monoxide consists of one carbon atom and one oxygen atom connected by a triple bond. It is the simplest carbon oxide. In coordination complexes, the carbon monoxide ligand is called carbonyl. It is a key ingredient in many processes in industrial che\n[…]\nMany methods have been developed for carbon monoxide production.\n[…]\nCleopatra may have died from carbon monoxide poisoning.\n[…]\nCarbon monoxide gained recognition as an essential reagent in the 1900s. Three industrial processes illustrate its evolution in industry. In the Fischer–Tropsch process, coal and related carbon-rich feedstocks are converted into liquid fuels via the intermediacy of CO. Developed as part of the German war effort to compensate for their lack of domestic petroleum, this technology continues today. Also in Germany, a mixture of CO and hydrogen was found to combine with olefins to give aldehydes.\n[…]\nBreath carbon monoxide – Level of carbon monoxide in exhaled breath\n[…]\nCarbon monoxide (data page) – Chemical data page\n[…]\nCarbon monoxide detector – Device that measures carbon monoxide (CO)\n[…]\nGlobal map of carbon monoxide distribution\n[…]\nCDC NIOSH Pocket Guide to Chemical Hazards: Carbon monoxide—National Institute for Occupational Safety and Health (NIOSH), US Centers for Disease Control and Prevention (CDC)\n[…]\nCarbon Monoxide—NIOSH Workplace Safety and Health Topic—CDC\n[…]\nCarbon Monoxide Poisoning—Frequently Asked Questions—CDC\n[…]\nCarbon Monoxide Detector Placement\n[…]\nMicroscale Gas Chemistry Experiments with Carbon Monoxide\n[…]\n\"Instant insight: Don't blame the messenger\". Chemical Biology (11: Research News). 18 October 2007. Archived from the original on 28 October 2007. Retrieved 27 October 2019. Outlining the physiology of carbon monoxide from the Royal Society of Chemistry."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Carbon_monoxide_poisoning",
        "situacao": "ok",
        "texto": "Carbon monoxide poisoning typically occurs from breathing in carbon monoxide (CO) at excessive levels. Symptoms are often described as \"flu-like\" and commonly include headache, dizziness, weakness, vomiting, chest pain, and confusion. Large exposures can result in loss of consciousness, arrhythmias, seizures, or death. The classically described \"cherry red skin\" rarely occurs. Long-term complicati\n[…]\n1. A secondary power supply (battery backup) must operate all carbon monoxide notification appliances for at least 12 hours,\n[…]\nThe first controlled clinical trial studying the toxicity of carbon monoxide occurred in 1973.\n[…]\nThe worst accidental mass poisoning from carbon monoxide was the Balvano train disaster which occurred on 3 March 1944 in Italy, when a freight train with many illegal passengers stalled in a tunnel, leading to the death of over 500 people.\n[…]\nOn 14 December 2024 12 individuals died by carbon monoxide poisoning in Gudauri (Georgia) as electric generators using fuel oil were placed in a closed area near their rooms.\n[…]\nThe extermination of stray dogs by a carbon monoxide gas chamber was described in 1874. In 1884, an article appeared in Scientific American describing the use of a carbon monoxide gas chamber for slaughterhouse operations as well as euthanizing a variety of animals.\n[…]\nAs part of the Holocaust during World War II, the Nazis used gas vans at Chelmno extermination camp and elsewhere to murder an estimated 700,000 or more people by carbon monoxide poisoning. This method was also used in the gas chambers of several death camps such as Treblinka, Sobibor, and Belzec. Gassing with carbon monoxide started in Action T4.\n[…]\nCenters for Disease Control and Prevention (CDC) – Carbon Monoxide – NIOSH Workplace Safety and Health Topic\n[…]\nInternational Programme on Chemical Safety (1999). Carbon Monoxide, Environmental Health Criteria 213, Geneva: WHO"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mon%C3%B3xido_de_carbono",
        "situacao": "ok",
        "texto": "O monóxido de carbono (CO) é um gás levemente inflamável, inodoro e muito perigoso devido à sua grande toxicidade. É produzido pela queima em condições de pouco oxigênio (combustão incompleta) e/ou alta temperatura de carvão ou outros materiais ricos em carbono, como derivados de petróleo, por exemplo, pelos motores dos veículos. Grande quantidade de subproduto de CO é formada durante os processos\n[…]\nAbsorção: O monóxido de carbono existente no ar atmosférico atinge a corrente sanguínea através das vias aéreas.[carece de fontes]?\n[…]\nEmbora exista uma exposição contínua ao monóxido de carbono, apenas uma pequena quantidade de monóxido de carbono é difundido devido à existência de uma barreira significativa à difusão do monóxido de carbono no epitélio das vias sanguíneas, o que torna o processo de difusão e absorção extremamente lentos.[carece de fontes]?\n[…]\nMetabolização: Após distribuição pelos diferentes órgãos e tecidos, o monóxido de carbono sofre vários processos de metabolização, como a ligação a proteínas heme, metabolismo oxidativo e a produção metabólica de monóxido de carbono a partir de percursores endógenos e exógenos.[carece de fontes]?\n[…]\nEliminação: Numa fase final, o monóxido de carbono absorvido é eliminado do organismo pelo ar exalado e pelo seu metabolismo oxidativo.\n[…]\nO monóxido de carbono é formado quando os combustíveis (gás, derivados do petróleo, combustíveis sólidos e solventes) não são queimados completamente. É produzido ainda quer por fontes naturais quer por fontes produzidas por humanos. É comum encontrar em grandes concentrações em incêndios, no fumo libertado pelos automóveis e na indústria siderúrgica. Dentro de casa, as principais fontes são os fornos, aquecedores a gás os fogões a lenha e as ligações de gás mal efetuadas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Diesel S10",
      "descricao": "Óleo diesel de baixo teor de enxofre, com no máximo dez partes por milhão, vendido no Brasil."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No diesel S10, vendido nos postos brasileiros, a letra S indica o baixo teor de que elemento poluente?",
    "resposta": "Enxofre",
    "distratores": [
      "Sódio",
      "Silício",
      "Selênio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ultra-low-sulfur_diesel",
      "https://pt.wikipedia.org/wiki/Óleo_diesel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ultra-low-sulfur_diesel",
        "situacao": "ok",
        "texto": "Ultra-low-sulfur diesel (ULSD) is diesel fuel with substantially lowered sulfur content. Since 2006, almost all of the petroleum-based diesel fuel available in Europe and North America has been of a ULSD type.\n[…]\nArgentina has three grades of diesel fuel, as follows:\n[…]\nGrade 3 diesel fuel, also known as GASOLINE ULTRA, is the highest quality diesel fuel and is supposed to be available starting February 1, 2006. Sale of Grade 3 diesel at retail outlets is optional until 2008.\n[…]\nLaw 26.093 requires 5% biodiesel to be blended with diesel fuel starting January 1, 2010.\n[…]\nAlso, all Diesel available for purchase in Brazil contains 10% of biodiesel.\n[…]\nChile requires <15 ppm in Santiago, for diesel since 2011, and the rest of the country requires <50 ppm.\n[…]\nSince January 1, 2013, Colombia's diesel has <50 ppm for public and private transport.\n[…]\nUruguay is expected to impose a 50 ppm ULSD limit by 2009. 70% of the fuel used in Uruguay is diesel.\n[…]\nAs of 2002, much of the former Soviet Union still applied limits on sulfur in diesel fuel substantially higher than in Western Europe. Maximum levels of 2,000 and 5,000 ppm were applied for different uses.\n[…]\nAccording to the technical regulation, selling a fuel with sulfur content over 50 ppm was allowed until 31 December 2011. Euro IV diesel in particular may be available at fueling stations selling to long-distance truck fleets servicing import and export flows between Russia and the EU. As of August 2026, lower grade fuel, equivalent to EuroII standard was being supplied as an \"anti-crisis\" measure in response to supply difficulties caused by war damage to Russian petrochemical infrastructure.\n[…]\nDiesel engine\n[…]\nDiesel fuel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Óleo_diesel",
        "situacao": "ok",
        "texto": "Diesel, também grafado como dísel e chamado de gasóleo, é um óleo derivado da destilação do petróleo bruto usado como combustível nos motores a diesel/gasóleo, constituído basicamente por hidrocarbonetos. O óleo diesel é um composto formado principalmente por átomos de carbono, hidrogênio e em baixas concentrações por enxofre, nitrogênio e oxigênio. O diesel é selecionado de acordo com suas caract\n[…]\nNa figura 2 é mostrado um desenho esquemático genérico do processo de produção do óleo diesel. A partir do refino do petróleo obtém-se, pelos processos de destilação atmosférica, craqueamento catalítico fluido as frações denominadas de gasóleos,  básicas para a produção de óleo diesel. Para eliminação de contaminantes (compostos de enxofre e nitrogênio, principalmente) parte dos gasóleos são tratados quimicamente com hidrogênio no processo denominado hidrotratamento.\n[…]\n\"Art. 3º Fica estabelecido, para feitos desta Resolução, que os óleos diesel A e B deverão apresentar as seguintes nomenclaturas, conforme o teor máximo de enxofre:\n[…]\na) Óleo diesel A S10 e B S10: combustíveis com teor de enxofre, máximo, de 10 mg/kg.\n[…]\nb) Óleo diesel A S500 e B S500: combustíveis com teor de enxofre, máximo, de 500 mg/kg.\n[…]\nc) Óleo diesel A S1800 e B S1800: combustíveis com teor de enxofre, máximo, de 1800 mg/kg.\"\n[…]\nDestinado a motores diesel utilizado em embarcações marítimas. Difere do óleo diesel automotivo comercial principalmente pela necessidade de se especificar a característica de ponto de fulgor relacionada a maior segurança deste produto em embarcações marítimas.\n[…]\nA Resolução 315 do Conselho Nacional do Meio Ambiente (CONAMA), assinada em 2002, dispõe sobre a nova etapa do Programa de Controle da Poluição do Ar por Veículos Automotores (PROCONVE), mas, ao contrário do que se tem divulgado na imprensa brasileira, não cita o total de partes por milhão (ppm) de enxofre para o diesel.\n[…]\nMotocicleta a diesel"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Usina Hidrelétrica de Itaipu",
      "descricao": "Usina hidrelétrica binacional de Brasil e Paraguai no rio Paraná, inaugurada em 1984."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na língua tupi, o nome Itaipu, da grande hidrelétrica do rio Paraná, quer dizer o quê?",
    "resposta": "Pedra que canta",
    "distratores": [
      "Água que cai",
      "Rio das pedras",
      "Pedra grande"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Usina_Hidrelétrica_de_Itaipu"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Usina_Hidrelétrica_de_Itaipu",
        "situacao": "ok",
        "texto": "Usina Hidrelétrica de Itaipu (em castelhano:  Itaipú, em guarani:  Itaipu) é uma hidrelétrica binacional localizada no Rio Paraná, na fronteira entre o Brasil e o Paraguai. A barragem foi construída pelos dois países entre 1975 e 1982. O nome Itaipu foi tirado de uma ilha que existia perto do local de construção. Na língua tupi, o termo significa \"pedra na qual a água faz barulho\", através da junç\n[…]\nItaipu é uma palavra de origem tupi-guarani que significa \"pedra que canta\", através da junção de itá = pedra e ipo'ú = cantora, ou então \"pedra na qual a água faz barulho\", através da junção de itá (pedra), y (água, rio), e pu (barulho). Era o nome da pequena ilha que havia no atual local da usina, antes da obra.\n[…]\nAs primeiras pesquisas de campo para a elaboração do projeto foram feitas em pequenas balsas por técnicos brasileiros e paraguaios. O local escolhido para a construção foi um ponto do rio conhecido como Itaipu, que em tupi quer dizer \"a pedra que canta\". As dimensões do projeto também foram traçadas desde o início: a área da hidrelétrica vai de Foz do Iguaçu, no Brasil, e Ciudad del Este, no sul do Paraguai, até Guaíra e Salto del Guairá, no norte deste país.\n[…]\nA formalização do empreendimento se deu com a assinatura do Tratado de Itaipu em 1973, que estabeleceu os pontos para o financiamento da obra e a operação da empresa, num modelo de sociedade binacional, pertencente às duas nações em partes iguais. O Tratado previa “o aproveitamento hidrelétrico dos recursos hídricos do Rio Paraná, pertencentes em condomínio aos dois países, desde e inclusive o Salto Grande de Sete Quedas ou Salto de Guaíra até a Foz do Rio Iguaçu”.\n[…]\nEm 17 de maio de 1974, foi criada a entidade Itaipu Binacional, para gerenciar a construção da usina. O início efetivo das obras ocorreu em janeiro de 1975. Um consórcio de construtoras, liderado pela Andrade Gutierrez, executou o projeto."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Hipótese Gaia",
      "descricao": "Proposta de James Lovelock, dos anos 1970, de que a Terra funciona como um sistema autorregulado entre vida e ambiente."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome da hipótese Gaia, do cientista britânico James Lovelock, foi sugerido por que escritor, autor de O Senhor das Moscas?",
    "resposta": "William Golding",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gaia_hypothesis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gaia_hypothesis",
        "situacao": "ok",
        "texto": "The Gaia hypothesis (), also known as the Gaia theory, Gaia paradigm, or the Gaia principle, proposes that living organisms interact with their inorganic surroundings on Earth to form a synergistic and self-regulating complex system that helps to maintain and perpetuate the conditions for life on the planet.\n[…]\nThe Gaia hypothesis was formulated by the chemist James Lovelock and co-developed by the microbiologist Lynn Margulis in the 1970s. Following the suggestion by his neighbour, novelist William Golding, Lovelock named the hypothesis after Gaia, the primordial deity who was sometimes personified as the Earth in Greek mythology. In 2006, the Geological Society of London awarded Lovelock the Wollaston Medal in part for his work on the Gaia hypothesis.\n[…]\nThe idea of the Earth as an integrated whole, a living being, has a long tradition. The mythical Gaia was the primal Greek goddess personifying the Earth, the Greek version of \"Mother Nature\" (from Ge = Earth, and Aia = PIE grandmother), or the Earth Mother. James Lovelock gave this name to his hypothesis after a suggestion from the novelist William Golding, who was living in the same village as Lovelock at the time (Bowerchalke, Wiltshire, UK).\n[…]\nIn 1985, the first public symposium on the Gaia hypothesis, Is The Earth a Living Organism? was held at University of Massachusetts Amherst, August 1–6. The principal sponsor was the National Audubon Society. Speakers included James Lovelock, Lynn Margulis, George Wald, Mary Catherine Bateson, Lewis Thomas, Thomas Berry, David Abram, John Todd, Donald Michael, Christopher Bird, Michael Cohen, and William Fields. Some 500 people attended.\n[…]\nInterview: Jasper Gerard meets James Lovelock\n[…]\nClips of interview with James Lovelock from 2010 at the Wayback Machine (archived 3 March 2016)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hip%C3%B3tese_de_Gaia",
        "situacao": "ok",
        "texto": "A hipótese de Gaia, também denominada hipótese biogeoquímica, é uma hipótese da ecologia profunda que propõe que a biosfera e os componentes físicos da Terra (atmosfera, criosfera, hidrosfera e litosfera) são intimamente integrados de modo a formar um complexo sistema interagente que mantém as condições climáticas e biogeoquímicas preferivelmente em homeostase.\n[…]\nOriginalmente proposta pelo investigador britânico James E. Lovelock em 1972 como \"Hipótese de resposta da Terra\", ela foi renomeada conforme sugestão de seu colega, William Golding, como Hipótese de Gaia, em referência à mitológica titã que personificava a Terra: Gaia. A hipótese é frequentemente descrita como a Terra sendo um único organismo vivo, mas é uma definição inexata.\n[…]\nLovelock e outros pesquisadores que apoiam a ideia atualmente consideram-na como uma teoria científica, não apenas uma hipótese, uma vez que ela passou por testes de previsão.\n[…]\nO batismo da hipótese com o nome de uma deusa grega — uma sugestão de seu amigo, o escritor William Golding — junto com outras opiniões heterodoxas de Lovelock, só fizeram aumentar a confusão e a rejeição de toda a hipótese pelos cientistas alinhados ao darwinismo, embora ela fosse abraçada com entusiasmo pelos ambientalistas da época.\n[…]\n\"Mesmo na ilustre história da mais antiga medalha da Sociedade, concedida pela primeira vez a William Smith em 1831, é raro que se possa dizer que o recipiente abriu todo um novo campo no estudo nas Ciências da Terra. Mas este é o caso do vencedor deste ano, James Lovelock. Em sua longa e distinta carreira na ciência, o que não faltam são premiações.\n[…]\n[...] Mas Lovelock ganhou uma proeminência realmente alta com um conceito que capturou a imaginação tanto dos cientistas da Terra e dos biólogos como do público leigo — o conceito pelo qual os geólogos o homenageiam hoje — a Hipótese e Teoria de Gaia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Urânio",
      "descricao": "Elemento químico radioativo e metálico de número atômico noventa e dois, usado como combustível nuclear."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Descoberto em 1789, o urânio, combustível das usinas nucleares, recebeu esse nome em homenagem a quê?",
    "resposta": "Ao planeta Urano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Uranium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uranium",
        "situacao": "ok",
        "texto": "Uranium is a chemical element; it has symbol U and atomic number 92. It is a silvery-grey metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons. Uranium radioactively decays, usually by emitting an alpha particle. The half-life of this decay varies between 159,200 and 4.5 billion years for different isotopes, making the\n[…]\nThe 1789 discovery of uranium in the mineral pitchblende is credited to Martin Heinrich Klaproth, who named the new element after the recently discovered planet Uranus. Eugène-Melchior Péligot was the first person to isolate the metal, and its radioactive properties were discovered in 1896 by Henri Becquerel. Research by Otto Hahn, Lise Meitner, Enrico Fermi and others (including J.\n[…]\nKlaproth assumed the yellow substance was the oxide of a yet-undiscovered element and heated it with charcoal to obtain a black powder, which he thought was the newly discovered metal itself (in fact, that powder was an oxide of uranium). He named the newly discovered element \"Uranit\" after the planet Uranus (named after the primordial Greek god of the sky), which had been discovered eight years earlier by William Herschel. He later renamed it \"Uranium\" to conform to the naming standard.\n[…]\nThe only significant deviation from the 235U to 238U ratio in any known natural samples occurs in Oklo, Gabon, where natural nuclear fission reactors consumed some of the 235U some two billion years ago when the ratio of 235U to 238U was more akin to that of low enriched uranium allowing regular (\"light\") water to act as a neutron moderator akin to the process in humanmade light water reactors.\n[…]\nExposure to strontium-90, iodine-131, and other fission products is unrelated to uranium exposure, but may result from medical procedures or exposure to spent reactor fuel or fallout from nuclear weapons."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ur%C3%A2nio",
        "situacao": "ok",
        "texto": "O urânio é um elemento químico de símbolo U e de massa atômica igual a 238 u, apresenta número atômico 92 (92 prótons e 92 elétrons), é um elemento natural e comum, muito mais abundante que a prata, abundância comparável à do molibdênio e arsênio, porém, quatro vezes menos abundante que o tório (ver: Reator de tório).\n[…]\nO Urânio é utilizado em indústria bélica (bombas atômicas e no secundário para bombas de hidrogênio), e como combustível em usinas nucleares para geração de energia elétrica.\n[…]\nKlaproth achou que a substância amarela era o óxido de um elemento ainda não descoberto, e aquecido com carvão vegetal para a obtenção de um pó preto, que ele pensou ser o metal descoberto recentemente em si (na verdade, o pó era um óxido de urânio). Ele nomeou o novo elemento descoberto em honra ao planeta Urano, que tinha sido descoberto havia oito anos por William Herschel (que tinha chamado o planeta após o primordial deus grego do céu Urano).\n[…]\nDurante o Projeto Manhattan teve-se a necessidade de sigilo, então os termos chave durante a pesquisa para criar armas nucleares foram codificados, o urânio empobrecido recebeu a alcunha de Tuballoy, ja o urânio enriquecido, recebeu a alcunha de Oralloy em referência a Oak Ridge, o local onde o urânio era enriquecido, esses termos ainda hoje são largamente utilizados.\n[…]\nPensava-se que a uraninita era um minério de zinco, ferro ou tungstênio. No entanto, Klaphroth, em 1789, comprovou a existência de uma \"substância semi-metálica\" nesse minério. Chamou ao metal \"urânio\" em honra à descoberta feita por Herschel em 1781 do planeta Urano. Mais tarde, Péligot provou que Klaphroth apenas tinha conseguido isolar o óxido e não o metal e em 1842 conseguiu isolar o urânio metálico. O urânio foi o primeiro elemento no qual se descobriu a propriedade da radioatividade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Acidente nuclear de Fukushima",
      "descricao": "Acidente na usina nuclear de Fukushima Daiichi, no Japão, em março de 2011."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os acidentes nucleares de Chernobyl e de Fukushima receberam a mesma classificação, a máxima da escala internacional de eventos nucleares. Que nível é esse?",
    "resposta": "Nível sete",
    "fonte": [
      "https://en.wikipedia.org/wiki/International_Nuclear_Event_Scale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/International_Nuclear_Event_Scale",
        "situacao": "ok",
        "texto": "The International Nuclear and Radiological Event Scale (INES) was introduced in 1990 by the International Atomic Energy Agency (IAEA) in order to enable prompt communication of safety and significant information in case of nuclear accidents.\n[…]\nThe scale, which was developed in 1990 by the International Atomic Energy Agency and the Nuclear Energy Agency of the Organization for Economic Co-operation and Development, classifies these nuclear accidents based on the potential impact of the fallout: people and the environment (unplanned release of radioactive material outside the installation), radiological barriers and control (unplanned spread of radioactive material within the installation), defence-in-depth (how effectively existing safety measures functioned).\n[…]\nDeficiencies in the existing INES have emerged through comparisons between the 1986 Chernobyl disaster, which had severe and widespread consequences to humans and the environment, and the 2011 Fukushima nuclear disaster, which caused one fatality and comparatively small (10%) release of radiological material into the environment.\n[…]\nAs Smythe pointed out, the INES scale ends at 7; a more severe accident than Fukushima in 2011 or Chernobyl in 1986 would also be measured as INES category 7. In addition, it is discontinuous, not allowing a fine-grained comparison of nuclear incidents and accidents. But the most pressing item identified by Smythe is that INES conflates magnitude with intensity; a distinction long made by seismologists to compare earthquakes.\n[…]\n\"International Nuclear Event Scale, User's manual\" (PDF). Archived from the original (PDF) on 15 May 2011. Retrieved 19 March 2011. International Nuclear Event Scale, User's manual, IAEA, 2008"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escala_Internacional_de_Acidentes_Nucleares",
        "situacao": "ok",
        "texto": "A Escala Internacional de Acidentes Nucleares (mais conhecida pelas suas siglas, INES) foi introduzida pela AIEA para permitir a comunicação sem falta de informação importante de segurança em caso de acidentes nucleares e facilitar o conhecimento dos meios de comunicação e a população de sua importância em matéria de segurança. Definiu-se um número de critérios e indicadores para assegurar a infor\n[…]\nHá 7 níveis na escala:[carece de fontes]?\n[…]\nOs acontecimentos de nível 1 - 3, sem consequência significativa sobre a população e o meio ambiente, qualificam-se de incidentes; os níveis superiores (4 a 7), de acidentes. O último nível corresponde a um acidente cuja gravidade é comparável ao ocorrido em 26 de abril de 1986 na central nuclear de Chernobil[carece de fontes]? e ao de 11 de Março de 2011 na central nuclear de Fukushima I, considerados acidentes nucleares de nível 6 a 7; o acidente radiológico de Goiânia é considerado nível 5.\n[…]\n(ver Acidente nuclear de Chernobil e Acidente nuclear de Fukushima I)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Giles Gilbert Scott",
      "descricao": "Arquiteto britânico do século vinte, autor das usinas de Battersea e Bankside e da cabine telefônica vermelha de Londres."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O arquiteto que desenhou as usinas de Battersea e de Bankside, hoje o museu Tate Modern, também criou que famoso objeto vermelho das ruas de Londres?",
    "resposta": "A cabine telefônica vermelha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giles_Gilbert_Scott"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giles_Gilbert_Scott",
        "situacao": "ok",
        "texto": "Sir Giles Gilbert Scott (9 November 1880 – 8 February 1960) was a British architect known for his work on the New Bodleian Library, Cambridge University Library, Lady Margaret Hall, Oxford, Battersea Power Station, Liverpool Cathedral, and designing the iconic red telephone box.\n[…]\nScott came from a family of architects. His father George Gilbert Scott Jr. was a co-founder of Watts & Co., which Scott became the second chairman of. He was noted for his blending of Gothic tradition with modernism, making what might otherwise have been functionally designed buildings into popular landmarks.\n[…]\nDespite having opposed placing heavily industrial buildings in the centre of cities, he accepted a commission to build Bankside Power Station on the bank of the River Thames in Southwark, where he built on what he had learnt at Battersea and gathered all the flues into a single tower. This building was converted in the late 1990s into Tate Modern art gallery.\n[…]\nLewis, David Frazer (2014). Modernising Tradition: The Architectural Thought of Giles Gilbert Scott, 1880-1960. Oxford, Submitted for the degree of D.Phil. in the History of Art, 2014. 2 Vols., 2014.{{cite book}}:  CS1 maint: location (link) CS1 maint: location missing publisher (link)\n[…]\nScott, Richard Gilbert (2011). Giles Gilbert Scott: His Son's View. London: Lyndhurst Road Publications. ISBN 978-0-9567609-1-3.\n[…]\n\"Scott, Sir Giles Gilbert\". Oxford Dictionary of National Biography. Retrieved 12 June 2014.\n[…]\nScott, Giles Gilbert (2018). Giles Gilbert Scott: Speeches, Interviews, & Writings, Transcribed and Edited by John Thomas. Wolverhampton: Twin Books. ISBN 978-0-9934781-2-3.\n[…]\nGiles Gilbert Scott & the Parliament Rebuild - UK Parliament Living Heritage"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Painel Intergovernamental sobre Mudanças Climáticas",
      "descricao": "Órgão científico da ONU, criado em 1988, que avalia o conhecimento sobre as mudanças climáticas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 2007, o que o painel de cientistas do clima da ONU e o ex-vice-presidente americano Al Gore ganharam juntos?",
    "resposta": "O Nobel da Paz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Intergovernmental_Panel_on_Climate_Change",
      "https://www.nobelprize.org/prizes/peace/2007/summary/"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Intergovernmental_Panel_on_Climate_Change",
        "situacao": "ok",
        "texto": "The Intergovernmental Panel on Climate Change (IPCC) is an intergovernmental body of the United Nations (UN). Its job is to \"provide governments at all levels with scientific information that they can use to develop climate policies\". The World Meteorological Organization (WMO) and the United Nations Environment Programme (UNEP) set up the IPCC in 1988. The UN endorsed the creation of the IPCC lat\n[…]\nThe IPCC shared the 2007 Nobel Peace Prize with Al Gore for contributions to the understanding of climate change.\n[…]\nThe IPCC has the following structure:\n[…]\nThe IPCC's Fourth Assessment Report (AR4) was published in 2007. It gives much greater certainty about climate change. It states: \"Warming of the climate system is unequivocal...\" The report helped make people around the world aware of climate change. The IPCC shared the Nobel Peace Prize in the year of the report's publication for this work (see below).\n[…]\nClimate scientist James E. Hansen argues that the IPCC's conservativeness seriously underestimates the risk of sea-level rise on the order of meters—enough to inundate many low-lying areas, such as the southern third of Florida.\n[…]\nIn December 2007, the IPCC received the Nobel Peace Prize \"for their efforts to build up and disseminate greater knowledge about man-made climate change, and to lay the foundations for the measures that are needed to counteract such change\". It shared the award with former U.S. Vice-president Al Gore for his work on climate change and the documentary An Inconvenient Truth.\n[…]\nIn October 2022, the IPCC and IPBES shared the Gulbenkian Prize for Humanity. The two intergovernmental bodies won the prize because they \"produce scientific knowledge, alert society, and inform decision-makers to make better choices for combatting climate change and the loss of biodiversity\".\n[…]\nOfficial website of IPCC Data Distribution Centre (Climate data and guidance on its use)"
      },
      {
        "url": "https://www.nobelprize.org/prizes/peace/2007/summary/",
        "situacao": "ok",
        "texto": "The Nobel Peace Prize 2007 - NobelPrize.org\n[…]\nSummary - Intergovernmental Panel on Climate Change - Al Gore Prize announcement Press release Award ceremony speech Award ceremony video Speed read\n[…]\nIntergovernmental Panel on Climate Change (IPCC)\n[…]\nThe Nobel Peace Prize 2007 was awarded jointly to Intergovernmental Panel on Climate Change (IPCC) and Albert Arnold (Al) Gore Jr. \"for their efforts to build up and disseminate greater knowledge about man-made climate change, and to lay the foundations for the measures that are needed to counteract such change\"\n[…]\nDon't miss the Nobel Prize announcements on 5–12 October. All announcements are streamed live here on nobelprize.org."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Painel_Intergovernamental_sobre_Mudan%C3%A7as_Clim%C3%A1ticas",
        "situacao": "ok",
        "texto": "O Painel Intergovernamental sobre Mudanças Climáticas (Português do Brasil), ou Painel Intergovernamental para as Alterações Climáticas (Português europeu) mais conhecido pelo acrônimo IPCC (da sua denominação em inglês  Intergovernmental Panel on Climate Change) é uma organização científico-política criada em 1988 no âmbito das Nações Unidas (ONU) pela iniciativa do Programa das Nações Unidas par\n[…]\nA qualidade e seriedade do seu trabalho, que envolve milhares dos mais reputados cientistas da atualidade, lhe valeu o Prêmio Nobel da Paz em 2007.\n[…]\nGrupo de Trabalho I: avalia os aspectos científicos do sistema climático e de mudança do clima. Os temas principais que estuda são as mudanças nos gases estufa e aerossois, nos glaciares, precipitação, nível do mar, atmosfera, na temperatura da terra, oceano e atmosfera. Também estuda os registros paleoclimáticos, o ciclo do carbono, os modelos climáticos em uso, bioquímica ligada às mudanças, analisa dados de satélites e outras fontes, e desvenda as causas e origens da mudança climática.\n[…]\nInformação científica a respeito de mudança climática.\n[…]\nO IPCC define a mudança climática como uma variação estatisticamente significante em um parâmetro climático médio (incluindo sua variabilidade natural), que persiste num período extenso (tipicamente décadas ou por mais tempo). Em termos abstratos, a mudança climática pode ser causada por processos naturais, e realmente no passado da Terra houve variações importantes no clima, como por exemplo os períodos glaciais. Contudo, a mudança recente tem sua causa nas atividades humanas.\n[…]\nO aquecimento do sistema climático é inequívoco, e muitas das mudanças observadas desde a década de 1950 não têm precedentes. A atmosfera e os oceanos têm aquecido, a neve e o gelo têm declinado, e o nível do mar tem se elevado.\n[…]\nPainel Brasileiro de Mudanças Climáticas\n[…]\n«Sítio oficial do IPCC» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Edmond Becquerel",
      "descricao": "Físico francês do século dezenove que descobriu o efeito fotovoltaico em 1839, pai de Henri Becquerel."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Edmond Becquerel descobriu o efeito que faz funcionar os painéis solares. Seu filho Henri ficou famoso por descobrir que fenômeno?",
    "resposta": "Radioatividade",
    "fonte": [
      "https://en.wikipedia.org/wiki/Edmond_Becquerel",
      "https://en.wikipedia.org/wiki/Henri_Becquerel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Edmond_Becquerel",
        "situacao": "ok",
        "texto": "Alexandre-Edmond Becquerel (French: [alɛksɑ̃dʁ ɛdmɔ̃ bɛkʁɛl]; 24 March 1820 – 11 May 1891) was a French physicist who studied the solar spectrum, magnetism, electricity, and optics. In 1839, he discovered the photovoltaic effect, the operating principle of the solar cell, which he invented in the same year. He is also known for his work in luminescence and phosphorescence. He was the son of Antoin\n[…]\nBecquerel paid special attention to the study of light, investigating the photochemical effects and spectroscopic characters of solar radiation and the electric arc light, and the phenomena of phosphorescence, particularly as displayed by the sulfides and by compounds of uranium.\n[…]\nIn 1853, Becquerel discovered thermionic emission.\n[…]\nIn 1867 and 1868 Becquerel published La lumière, ses causes et ses effets (Light, its Causes and Effects), a two-volume treatise which became a standard text. His many papers, essays, and commentaries appeared in French scientific journals, mainly the French Academy of Sciences' widely distributed Comptes Rendus, from 1839 until shortly before his death in 1891.\n[…]\nBecquerel was elected a member of the Royal Swedish Academy of Sciences in 1886.\n[…]\nThe Becquerel Prize for \"outstanding merit in photovoltaics\" is awarded annually at the European Photovoltaic Solar Energy Conference and Exhibition (EU PVSEC).\n[…]\nA. Allisy (1 November 1996). \"Henri Becquerel: The Discovery of Radioactivity\". Radiation Protection Dosimetry. 68 (1): 3–10. doi:10.1093/oxfordjournals.rpd.a031848.\n[…]\nChisholm, Hugh, ed. (1911). \"Becquerel\" . Encyclopædia Britannica. Vol. 3 (11th ed.). Cambridge University Press. p. 611.\n[…]\nWorks by or about Edmond Becquerel at the Internet Archive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Henri_Becquerel",
        "situacao": "ok",
        "texto": "Antoine Henri Becquerel (15 December 1852 – 25 August 1908) was a French experimental physicist who shared the 1903 Nobel Prize in Physics with Marie and Pierre Curie for his discovery of radioactivity.\n[…]\nAntoine Henri Becquerel was born on 15 December 1852 in Paris. His grandfather, Antoine César Becquerel, father, Edmond Becquerel, and later his son, Jean Becquerel, were all notable physicists.\n[…]\nAs simultaneity often happens in science, radioactivity came close to being discovered nearly four decades earlier in 1857, when Abel Niépce de Saint-Victor, who was investigating photography under Michel Eugène Chevreul, observed that uranium salts emitted radiation that could darken photographic emulsions. By 1861, Niepce de Saint-Victor realized that uranium salts produce \"a radiation that is invisible to our eyes\". Niepce de Saint-Victor knew Edmond Becquerel, Henri Becquerel's father.\n[…]\nBecquerel died on 25 August 1908 in Le Croisic at the age of 55. He died of a heart attack, but it was reported that \"he had developed serious burns on his skin, likely from the handling of radioactive materials.\"\n[…]\nThe SI unit of radioactivity is named after Becquerel. A crater on the Moon, as well as a crater on Mars, are named after him. Becquerelite, a uranium mineral, is named after him. Minor planet 6914 Becquerel is named in his honour.\n[…]\nHenri Becquerel on Nobelprize.org  including the Nobel Lecture, \"On Radioactivity, a New Property of Matter\", 11 December 1903\n[…]\nHenri Becquerel, SI-derived unit of radioactivity\n[…]\n\"Henri Becquerel: The Discovery of Radioactivity\", Becquerel's 1896 articles online and analyzed on BibNum [click 'à télécharger' for English version]."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alexandre_Edmond_Becquerel",
        "situacao": "ok",
        "texto": "Alexandre-Edmond Becquerel (alɛksɑ̃dʁ ɛdmɔ̃ bɛkʁɛl; 24 de março de 1820 — 11 de maio de 1891) foi um físico francês que estudou o espectro solar, o magnetismo, a eletricidade e a óptica. Em 1839, descobriu o efeito fotovoltaico, o princípio de funcionamento da célula solar, que também inventou no mesmo ano. É também conhecido por seu trabalho em luminescência e fosforescência. Foi filho de Antoine\n[…]\nEm 1839, aos 19 anos, enquanto realizava experimentos no laboratório de seu pai, Becquerel criou a primeira célula fotovoltaica do mundo. Nesse experimento, colocou cloreto de prata em uma solução ácida e a iluminou enquanto estava conectada a eletrodos de platina, gerando assim voltagem e corrente elétrica. Em razão desse trabalho, o efeito fotovoltaico ficou também conhecido como o \"efeito Becquerel\".\n[…]\nBecquerel dedicou especial atenção ao estudo da luz, investigando os efeitos fotoquímicos e os caracteres espectroscópicos da radiação solar e da luz de arco elétrico, bem como os fenômenos de fosforescência, particularmente os exibidos pelos sulfetos e pelos compostos de urânio.\n[…]\nInvestigou as propriedades diamagnéticas e paramagnéticas das substâncias e demonstrou grande interesse pelos fenômenos de decomposição eletroquímica, acumulando numerosas evidências em favor da lei de eletrólise de Faraday e propondo uma formulação modificada dela, com a intenção de abranger certas aparentes exceções. Em 1853, Becquerel descobriu a emissão termiônica.\n[…]\nA. Allisy (1 de novembro de 1996). «Henri Becquerel: The Discovery of Radioactivity». Radiation Protection Dosimetry. 68 (1): 3–10. doi:10.1093/oxfordjournals.rpd.a031848\n[…]\nChisholm, Hugh, ed. (1911). «Becquerel». Encyclopædia Britannica (em inglês) 11.ª ed. Encyclopædia Britannica, Inc. (atualmente em domínio público)\n[…]\nObras de ou sobre Alexandre Edmond Becquerel no Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Césio-137",
      "descricao": "Isótopo radioativo do césio, produzido na fissão nuclear, com meia-vida de cerca de trinta anos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O césio-137, que contaminou Goiânia em 1987, também foi um dos principais materiais radioativos espalhados por que acidente, um ano antes?",
    "resposta": "Acidente de Chernobyl",
    "fonte": [
      "https://en.wikipedia.org/wiki/Caesium-137"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caesium-137",
        "situacao": "ok",
        "texto": "Caesium-137 (13755Cs), cesium-137 (US), or radiocaesium, is a radioactive isotope of caesium that is formed as one of the more common fission products by the nuclear fission of uranium-235 and other fissionable isotopes in nuclear reactors and nuclear weapons. Trace quantities also originate from spontaneous fission of uranium-238. It is among the most problematic of the short-to-medium-lifetime f\n[…]\nCaesium-137, along with other radioactive isotopes caesium-134, iodine-131, xenon-133, and strontium-90, were released into the environment during nearly all atmospheric nuclear weapon tests, and more recently some nuclear accidents, most notably the Chernobyl disaster, the Goiânia Accident and the Fukushima Daiichi disaster.\n[…]\nAs of today and for the next few hundred years or so, caesium-137 and strontium-90 continue to be the principal source of radiation in the zone of alienation around the Chernobyl nuclear power plant, and pose the greatest risk to health, owing to their approximately 30-year half-life and biological uptake. An estimated area of 12000 km² of Germany is contaminated with caesium-137 following the Chernobyl disaster in 1986 with surface activity of 20 to 37 kBq/m2.\n[…]\nThis corresponds to 1.1% of all caesium-137 released in Europe after the Chernobyl accident. In Scandinavia, some reindeer and sheep exceeded the Norwegian legal limit (3000 Bq/kg) 26 years after Chernobyl.‍ The Chernobyl caesium-137 has now decayed by more than half, but could have been locally concentrated by much larger factors.\n[…]\nPublic health authorities in Western Australia issued an emergency alert for a stretch of road measuring about 1,400 kilometres (870 miles) after a capsule containing caesium-137 was lost in transport on 25 January 2023. The 8 millimetres (0.3 inches) capsule contained a small quantity of the radioactive material when it disappeared from a truck."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A9sio-137",
        "situacao": "ok",
        "texto": "Césio-137, ou radiocésio, é um isótopo radioativo de césio que é formado como um dos produtos de fissão mais comuns pela fissão nuclear de urânio-235 e outros isótopos fissionáveis em reatores nucleares e armas nucleares, podendo ser usado em alguns equipamentos médicos, como o que provocou o acidente radiológico de Goiânia. As quantidades vestigiais também se originam da fissão espontânea do urân\n[…]\nO césio-137 tem um ponto de ebulição relativamente baixo de 671º C e é volatilizado facilmente quando liberado repentinamente em alta temperatura, como no caso do acidente nuclear de Chernobil e de explosões atômicas, podendo percorrer distâncias muito longas no ar. Após ser depositado no solo como cinza nuclear, ele se move e se espalha facilmente no ambiente devido à alta solubilidade em água dos compostos químicos mais comuns do césio, que são os sais. O césio-137 foi descoberto por Glenn T.\n[…]\nComo um isótopo quase puramente artificial, o césio-137 tem sido usado para datar vinho e detectar falsificações  e como um material de datação relativa para avaliar a idade da sedimentação que ocorreu após 1945. O césio-137 também é usado como traçador radioativo na pesquisa geológica para medir a erosão e a deposição do solo.\n[…]\nImportantes pesquisas mostraram uma concentração notável de 137Cs nas células exócrinas do pâncreas, que são as mais afetadas pelo câncer. Em 2003, em autópsias realizadas em seis crianças mortas na área poluída perto de Chernobil, onde também relataram maior incidência de tumores pancreáticos, Bandazhevsky encontrou uma concentração de 137Cs 40-45 vezes maior do que no fígado, demonstrando assim que o tecido pancreático é um forte acumulador e secretor no intestino de césio radioativo.\n[…]\nA ingestão acidental de césio-137 pode ser tratada com azul da prússia, que se liga a ele quimicamente e reduz a meia-vida biológica para 30 dias.\n[…]\nAcidente radiológico de Goiânia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Lagoa Azul",
      "descricao": "Spa geotérmico de águas quentes e leitosas na península de Reykjanes, na Islândia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Lagoa Azul, famosa piscina de águas quentes da Islândia, é formada pela água que sai de que tipo de usina vizinha?",
    "resposta": "Usina geotérmica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Blue_Lagoon_(geothermal_spa)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blue_Lagoon_(geothermal_spa)",
        "situacao": "ok",
        "texto": "The Blue Lagoon (Icelandic: Bláa lónið [ˈplauːa ˈlouːnɪθ]) is a geothermal spa in southwestern Iceland. The spa is located in a lava field 5 km (3.1 mi) from Grindavík and in front of Mount Þorbjörn on the Reykjanes Peninsula, in a location favourable for geothermal power, and is supplied by water used in the nearby Svartsengi geothermal power station. The Blue Lagoon is approximately 20 km (12 mi\n[…]\nOn 23 October 2023, the Department of Civil Protection and Emergency Management announced a level of uncertainty due to a seismic swarm in the area. The resort faced some criticism for continuing to accept customers with some likening the situation to events leading up to the 2019 Whakaari/White Island eruption. Guests were reportedly not informed about the unfolding events in the area and the risk of using the lagoon.\n[…]\nThe management of the Blue Lagoon announced the site's closure to visitors from 9–16 November as a precaution following the earthquakes. The closure period was later extended to 30 November 2023, and then further to 7 December.\n[…]\nThough briefly reopened, the Blue Lagoon was again closed until 6 January due to a volcanic eruption at Sundhnúkur, all facilities were reopened by 10 January. Another eruption caused a further closure on 14 January, reopening again by 20 January. A third eruption on 8 February forced the resort to close again but reopened once more on 16 February. A fourth eruption on 16 March caused the lagoon to, once again, close. It reopened on 7 April 2024.\n[…]\nAfter another eruption, the lava reached the Blue Lagoon on 22 November 2024, destroying the car park, but leaving the lagoon itself intact due to protective barriers built around the facilities. It was able to re-open on 9 December while a new parking lot was being constructed. The lagoon also briefly closed due to volcanic activity in April and July 2025.\n[…]\nBlue Lagoon travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lagoa_Azul_%28Isl%C3%A2ndia%29",
        "situacao": "ok",
        "texto": "A Lagoa Azul (em islandês:  Bláa lónið;  PRONÚNCIA) é um spa termal e uma das atrações mais visitadas na Islândia. Localizada  a 5 km da cidade de Grindavík e a 39 km da capital Reykjavik, a lagoa atrai visitantes que buscam em suas águas quentes (40 ºC) propriedades medicinais. São mais de 6 milhões de litros de água em 5 000 m2 de área.\n[…]\nAlém do efeito relaxante de suas águas quentes em um país frio, a concentração de algas e sais minerais é eficiente no combate ao envelhecimento e no tratamento de doenças de pele.\n[…]\nIslândia\n[…]\nTurismo na Islândia\n[…]\nPágina oficial da Blue Lagoon na Islândia\n[…]\nDocumentário da Blue Lagoon escrito por uma perspectiva de psoríase.\n[…]\nInstruções de higiene islandesa\n[…]\nFotos da www.islandsmyndir.is da clínica de Blue Lagoon\n[…]\nImagens do banho natural da Blue Lagoon\n[…]\nCríticas da Blue Lagoon",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Amianto",
      "descricao": "Mineral fibroso usado em telhas e caixas-d'água, proibido no Brasil pelo Supremo Tribunal Federal em 2017."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O amianto, comum em telhas e caixas-d'água, foi proibido no Brasil porque suas fibras, quando inaladas, causam doenças em que órgão?",
    "resposta": "Pulmões",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Amianto",
      "https://en.wikipedia.org/wiki/Asbestos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Amianto",
        "situacao": "ok",
        "texto": "O asbesto (da palavra grega ἀσβεστος, \"indestrutível\", \"imortal\", \"inextinguível\") ou amianto (do grego αμίαντος, \"puro\", \"sem sujidade\", \"sem mácula\") é uma designação comercial genérica para a variedade fibrosa de sais minerais metamórficos de ocorrência natural e utilizados em vários produtos comerciais. Trata-se de um material com grande flexibilidade e resistências química, térmica, eléctrica\n[…]\nA inalação prolongada de fibras de amianto pode provocar doenças graves incluindo câncer de pulmão, mesotelioma e asbestose (um tipo de pneumoconiose).\n[…]\nAté a proibição do uso de amianto no país em 2017,  Brasil era o terceiro maior produtor e o segundo maior exportador mundial de amianto, notadamente da a variedade crisotila. A maioria da produção brasileira  era comercializada internamente e destinava-se principalmente à fabricação de telhas onduladas, chapas de revestimento, tubos e caixas d'água. Na indústria automobilística, o amianto é usado em produtos de fricção (freios, embreagens).\n[…]\nOs problemas com o amianto surgem quando as fibras se dispersam no ar e são inaladas. Devido ao tamanho das fibras, os pulmões não conseguem expeli-las [Casarrett & Doull's Toxicology (2001), pp 520–522].\n[…]\nAsbestose - Inicialmente diagnosticada entre trabalhadores da indústria naval dos Estados Unidos, a asbestose consiste de lesões do tecido pulmonar causadas por um ácido produzido pelo organismo na tentativa de dissolver as fibras. As lesões podem tornar-se extensas ao ponto de não permitirem o funcionamento dos pulmões. O tempo de latência (período que a doença leva a manifestar-se) é geralmente 10 a 20 anos.\n[…]\nNa fabricação de telhas de fibrocimento, que responde por 97% do consumo de amianto crisotila no Brasil, o amianto pode ser substituído por uma mistura de fibras sintéticas (PVA ou PP) e celulose.\n[…]\nAsbesto-cimento\n[…]\nMinaçu: Maior mina de amianto do Brasil\n[…]\n«O amianto no mundo» (em francês)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Asbestos",
        "situacao": "ok",
        "texto": "Asbestos or asbestus ( ass-BES-təs, az-, -⁠toss) is a group of naturally occurring, fibrous silicate minerals that have been used for thousands of years to create flexible fire-resistant objects, such as fireproof fabrics. It is toxic and carcinogenic.\n[…]\n\"Amiantos\" is the source for the word for asbestos in many languages, such as the Portuguese, the Spanish, and the Italian amianto and the French amiante. It had also been called \"amiant\" in English in the early 15th century, but this usage was superseded by \"asbestos\". The word is pronounced  or .\n[…]\nA once-purported first description of asbestos occurs in Theophrastus, On Stones, from around 300 BC, but this identification has been refuted. In both modern and ancient Greek, the usual name for the material known in English as \"asbestos\" is amiantos (\"undefiled\", \"pure\"), which was adapted into the French as amiante and into Italian, Spanish and Portuguese as amianto. In modern Greek, the word ἀσβεστος or ασβέστης stands consistently and solely for lime.\n[…]\nCrocidolite commonly occurs as soft friable fibers. Asbestiform amphibole may also occur as soft friable fibers, but some varieties, such as amosite, are commonly straighter. All forms of asbestos are fibrillar in that they are composed of fibers with breadths less than 1 micrometer in bundles of very great widths. Asbestos with particularly fine fibers is also referred to as \"amianthus\".\n[…]\nAsbestine\n[…]\nUS EPA Asbestos Home Page\n[…]\nNational Institute for Occupational Safety and Health: Asbestos\n[…]\nWorld Health Organization – Asbestos page\n[…]\nWhite Gold Pioneers: Asbestos Mining Archived 3 January 2010 at the Wayback Machine – The origins of asbestos mining, illustrated with many early photographs\n[…]\nusgs.gov (Mineral Commodity Summaries 2025): Asbestos"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Proálcool",
      "descricao": "Programa Nacional do Álcool, lançado pelo governo brasileiro em 1975 para substituir a gasolina por etanol de cana."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Lançado pelo governo brasileiro em 1975, o programa Proálcool foi uma resposta a que crise mundial?",
    "resposta": "Crise do petróleo de 1973",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Proálcool"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Proálcool",
        "situacao": "ok",
        "texto": "O Brasil é o segundo maior produtor mundial de etanol combustível e segundo maior exportador mundial. Juntos, Brasil e Estados Unidos lideram a produção industrial de etanol, representando em conjunto 82,4% da produção mundial em 2021.\n[…]\nOs primeiros usos práticos do etanol deram-se entre meados dos anos 1920 e início dos anos 1930. Mas somente nos anos 1970, com a crise do petróleo, o Brasil passou a usar maciçamente o etanol como combustível. Na segunda metade da década de 1980 por diversos motivos ocorreu uma forte retração no consumo de álcool combustível.\n[…]\nO primeiro automóvel produzido em série, equipado com motor a álcool, foi Fiat 147 lançado em 1979.\n[…]\nA dificuldade de importação de combustíveis em decorrência da crise e pela falta de divisas forçou o Brasil a buscar soluções e alternativas, e o etanol combustível foi uma das mais proeminentes. Nos anos que precederam a Segunda Guerra Mundial, ainda no Governo Provisório de Getúlio Vargas em 1931, estabeleceu-se a obrigatoriedade de mistura-se ate 5% de etanol à gasolina (Decreto 19.717) como forma de economizar divisas na importação de combustíveis.\n[…]\nCom a deflagração da Segunda Grande Guerra, o etanol combustível ganhou ainda mais proeminência, mas com o fim do conflito em 1945, e a normalização da produção e do comércio de combustíveis, em especial a gasolina ele viria a perder parte da importância adquirida na década anterior. Foi somente em 1974 com a Crise do Petróleo que o governo militar brasileiro enxergou a necessidade de solucionar o problema do Brasil em relação à importação de combustíveis.\n[…]\nFoi lançado então o programa Pró-álcool que finalmente transformaria a produção de etanol combustível no Brasil em uma das maiores do mundo."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Branqueamento de corais",
      "descricao": "Perda de cor dos corais quando o estresse, sobretudo o aquecimento da água, os faz expulsar as algas que vivem em seus tecidos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Quando a água do mar esquenta demais, os corais ficam brancos porque expulsam o quê, que lhes dava cor e alimento?",
    "resposta": "Algas (zooxantelas)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Coral_bleaching"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coral_bleaching",
        "situacao": "ok",
        "texto": "Coral bleaching is the process where corals become white due to loss of symbiotic algae and photosynthetic pigments. This loss of pigment can be caused by various stressors, such as changes in water temperature, light, salinity, or nutrients. A bleached coral is under stress, more vulnerable to starvation and disease, and at risk of death. The leading cause of coral bleaching is rising ocean tempe\n[…]\nOther infectious bacteria however can further increase bleaching in reefs. The species Vibrio shiloi are the bleaching agent of Oculina patagonica in the Mediterranean Sea, causing this effect by attacking the zooxanthellae. V. shiloi is infectious only during warm periods. Elevated temperature increases the virulence of V. shiloi, which then become able to adhere to a beta-galactoside-containing receptor in the surface mucus of the host coral. V.\n[…]\nCoral in the south Red Sea does not bleach despite summer water temperatures up to 34 °C (93 °F).\n[…]\nWith the death of the zooxanthellae in the heat stressed events, the coral must find new sources to gather fixed carbon to generate energy, species of coral that can increase their carnivorous tendencies have been found to have an increased likelihood of recovering from bleaching events.\n[…]\nAfter corals experience a bleaching event to increased temperature stress some reefs are able to return to their original, pre-bleaching state. Reefs either recover from bleaching, where they are recolonized by zooxanthellae, or they experience a regime shift, where previously flourishing coral reefs are taken over by thick layers of macroalgae. This inhibits further coral growth because the algae produces antifouling compounds to deter settlement and competes with corals for space and light.\n[…]\nHigher populations of young coral increase the longevity of a reef, as well as its ability to recover from extreme bleaching events."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Branqueamento_do_coral",
        "situacao": "ok",
        "texto": "O branqueamento do coral é um fenômeno que ocorre quando os pólipos do coral expelem as zooxantelas, dinoflagelados fotossintetizantes que vivem dentro de seus tecidos. Normalmente, os pólipos dos corais vivem em íntima associação com as zooxantelas, em um processo conhecido como simbiose. Nessa relação simbiótica os corais oferecem às zooxantelas abrigo, nutrientes e dióxido de carbono e, em troc\n[…]\nAs zooxantelas, além de fornecer energia, são também responsáveis pela pigmentação. Dessa forma, quando são expulsas do interior dos tecidos dos corais, esses animais perdem sua coloração e ficam brancos. Em alguns casos, as zooxantelas podem ser responsáveis por fornecer até 90% da energia utilizada pelos corais. Após desfazer a simbiose com esses organismos, os corais podem acabar morrendo, devido à escassez de nutrientes.\n[…]\nComo as zooxantelas fornecem até 90% da energia utilizada pelos corais, após serem expulsas, os corais podem começar a morrer.\n[…]\nA saúde dos corais e das zooxantelas, junto com fatores genéticos, também influenciam o branqueamento.\n[…]\nEm 2010, pesquisadores da Universidade Estadual da Pensilvânia descobriram corais que estavam prosperando enquanto criavam uma relação simbiótica com espécies incomuns de algas nas águas quentes do Mar de Andamão, no Oceano Índico As zooxantelas normais não conseguem sobreviver em temperaturas altas como as que haviam no local, então essa descoberta foi inesperada.\n[…]\nA ocupação por macroalgas inibe o crescimento dos corais porque as algas produzem compostos que evitam a incrustação de outros organismos e competem com os corais por espaço e luz. Como resultado, as macroalgas formam comunidades estáveis que tornam difícil o crescimento e recuperação dos corais. Os recifes serão mais susceptíveis a outros problemas, como o declínio na qualidade da água e a remoção de peixes herbívoros, porque o crescimento dos corais está prejudicado (6).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Usina Hidrelétrica de Belo Monte",
      "descricao": "Grande usina hidrelétrica no estado do Pará, inaugurada em 2016."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A usina hidrelétrica de Belo Monte, no Pará, foi construída em que rio amazônico?",
    "resposta": "Xingu",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Usina_Hidrelétrica_de_Belo_Monte"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Usina_Hidrelétrica_de_Belo_Monte",
        "situacao": "ok",
        "texto": "A Usina Hidrelétrica de Belo Monte é uma usina hidrelétrica (UHE) brasileira da bacia do Rio Xingu, próximo ao município de Altamira, no norte do estado Pará. A capacidade instalada da usina é de 11 233 MW e sua quantidade média de geração de energia é de 4 571 MW por mês.\n[…]\nDesde seu início, o projeto de Belo Monte encontrou forte oposição de ambientalistas brasileiros e internacionais, de algumas comunidades indígenas locais e de membros da Igreja Católica. Essa oposição levou a sucessivas reduções do escopo do projeto, que originalmente previa outras barragens rio acima e uma área alagada total muito maior. Em 2008, o CNPE decidiu que Belo Monte seria a única usina hidrelétrica do Rio Xingu.\n[…]\n1975: iniciados os Estudos de Inventário Hidrelétrico da Bacia Hidrográfica do Rio Xingu.\n[…]\n1989: durante o 1º Encontro dos Povos Indígenas do Xingu, realizado em fevereiro em Altamira (PA), a índia Tuíra Kayapó, em sinal de protesto, levanta-se da plateia e encosta a lâmina de seu facão no rosto do presidente da Eletronorte, José Antônio Muniz, que fala sobre a construção da usina Kararaô (atual Belo Monte). A cena é reproduzida em jornais e torna-se histórica. O encontro teve a presença do cantor Sting. O nome Kararaô foi alterado para Belo Monte em sinal de respeito aos índios.\n[…]\nEm agosto de 2001, o coordenador do Movimento pela Transamazônica e do Xingu, Ademir Federicci, foi morto com um tiro na boca enquanto dormia ao lado da esposa e do filho caçula, após ter participado de um debate de resistência contra a Usina de Belo Monte. Ameaçada de morte desde 2004, a coordenadora do Movimento de Mulheres do Campo e da Cidade do Pará e do Movimento Xingu Vivo para Sempre, Antônia Melo, também é contrária à instalação da usina e não sai mais às ruas."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Camada de ozônio",
      "descricao": "Região da atmosfera com alta concentração de ozônio, que absorve grande parte da radiação ultravioleta do Sol."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A camada de ozônio, que filtra boa parte dos raios ultravioleta do Sol, fica em que camada da atmosfera?",
    "resposta": "Estratosfera",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ozone_layer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ozone_layer",
        "situacao": "ok",
        "texto": "The ozone layer or ozone shield is a region of Earth's stratosphere that absorbs most of the Sun's ultraviolet radiation. It contains a high concentration of ozone (O3) in relation to other parts of the atmosphere, although still small in relation to other gases in the stratosphere. The ozone layer peaks at 8 to 15 parts per million of ozone, while the average ozone concentration in Earth's atmosp\n[…]\nAtmospheric components are not sorted out by weight in the homosphere because of wind-driven mixing that extends to an altitude of about 90 km, well above the ozone layer. So despite being heavier than diatomic nitrogen and oxygen, these highly stable compounds rise into the stratosphere, where Cl and Br radicals are liberated by the action of ultraviolet light. Each radical is then free to initiate and catalyze a chain reaction capable of breaking down over 100,000 ozone molecules.\n[…]\nThe breakdown of ozone in the stratosphere results in reduced absorption of ultraviolet radiation. Consequently, unabsorbed and dangerous ultraviolet radiation reaches the Earth's surface at a higher intensity. Ozone levels have dropped by a worldwide average of about 4 percent since the late 1970s. For approximately 5 percent of the Earth's surface, around the north and south poles, much larger seasonal declines have been seen, and are described as \"ozone holes\".\n[…]\nAs ozone in the atmosphere prevents most energetic ultraviolet radiation reaching the surface of the Earth, astronomical data in these wavelengths have to be gathered from satellites orbiting above the atmosphere and ozone layer. Most of the light from young hot stars is in the ultraviolet and so study of these wavelengths is important for studying the origins of galaxies.\n[…]\nThe Galaxy Evolution Explorer, GALEX, is an orbiting ultraviolet space telescope launched on April 28, 2003, which operated until early 2012."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ozonosfera",
        "situacao": "ok",
        "texto": "A ozonosfera, camada de ozônio(pt-BR) ou camada de ozono(pt-PT?) é uma região da estratosfera terrestre que concentra altas quantidades de ozônio (gás formado a partir da combinação de três átomos de oxigênio). Localizada entre 20 e 30 quilômetros de altitude e com cerca de 10 km de espessura, contém aproximadamente 90% do ozônio atmosférico.\n[…]\nGrande parte da energia solar é absorvida e reemitida pela atmosfera. Se chegasse em sua totalidade à superfície do planeta, esta energia o esterilizaria. A camada de ozono é uma das principais barreiras que protegem os seres vivos dos raios ultravioleta. O ozono deixa passar apenas uma pequena parte dos raios U.V., esta benéfica.\n[…]\nEstes compostos, resultantes da poluição provocada pelo Homem, sobem para a estratosfera completamente inalterados devido à sua estabilidade e na faixa dos 10 a 50 km de altitude, onde os raios solares ultravioleta os atingem, decompõem-se, mas com certa dificuldade devido sua estabilidade, e então libera o seu radical - no caso dos CFC, o elemento químico cloro.\n[…]\nQuando os sistemas meteorológicos de grande escala, que se formam na troposfera e sobem depois à estratosfera, são mais fracos, a estratosfera fica mais fria do que é habitual, o que causa um aumento do buraco na camada de ozono. Quando eles são mais fracos (como em 2002), o buraco diminui.\n[…]\nIsto vai criar uma conversão mais rápida e fácil dos CFCs em radicais de cloro destrutivos de ozono. Como as massas de ar circulam em camadas sobrepostas, dos Pólos para o Equador e no sentido inverso, estas têm a capacidade de transportar poluentes para milhares de quilómetros de distância de onde estes foram emitidos. Na Antártida a circulação é interrompida, formando-se círculos de convecção exclusivos daquela área que levam as moléculas com cloro para a estratosfera.\n[…]\nA Radiação Ultravioleta e o Ozono",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Banco Mundial de Sementes de Svalbard",
      "descricao": "Cofre escavado numa montanha do arquipélago de Svalbard que guarda cópias de sementes de plantas do mundo inteiro."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Banco Mundial de Sementes de Svalbard, cofre escavado numa montanha gelada para guardar sementes do planeta, fica em que país?",
    "resposta": "Noruega",
    "fonte": [
      "https://en.wikipedia.org/wiki/Svalbard_Global_Seed_Vault"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Svalbard_Global_Seed_Vault",
        "situacao": "ok",
        "texto": "The Svalbard Global Seed Vault (Norwegian: Svalbard globale frøhvelv) is a secure backup facility for the Earth's crop diversity on the Norwegian island of Spitsbergen in the remote Arctic Svalbard archipelago. The Seed Vault provides long-term storage for duplicates of seeds from around the world, conserved in gene banks. The Seed Vault is managed under terms spelled out in a tripartite agreement\n[…]\nThe national genebank of the Philippines was damaged by flooding and later destroyed by a fire, the genebanks of Afghanistan and Iraq have been lost completely, while an international genebank in Syria became unavailable. According to The Economist, \"the Svalbard vault is a backup for the world's 1,750 seed banks, storehouses of agricultural biodiversity.\"\n[…]\nThe Svalbard Global Seed Vault ranked at No. 6 on Time's Best Inventions of 2008. It was awarded the Norwegian Lighting Prize for 2009. It was ranked the 10th most influential project of the past 50 years by the Project Management Institute. In 2026 it received the Princess of Asturias Award for International Cooperation.\n[…]\nScience communicators have been important in taking the project from relative obscurity, to global awareness. For example, Cary Fowler gave a TED talk on the Seed Vault at Oxford in 2009.\n[…]\nThere are several children’s books about the seed vault, including The Garden at the End of the World, and Just in Case: Saving Seeds in the Svalbard Global Seed Vault. The seed vault has  also been the subject of two feature length documentaries: Seeds of Time and Seed Battles, as well as Forever Securing the World Food Supply.\n[…]\nIndian Seed Vault\n[…]\nOrthodox seed\n[…]\nRecalcitrant seed\n[…]\nSvalbard Global Seed Vault by the Norwegian Ministry of Agriculture and Food\n[…]\nSvalbard Global Seed Vault by the Crop Trust\n[…]\nSvalbard Global Seed Vault by the Nordic Genetic Resource Center (NordGen)\n[…]\n\"Inside the Svalbard Seed Vault\" on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Banco_Mundial_de_Sementes_de_Esvalbarde",
        "situacao": "ok",
        "texto": "O Silo Global de Sementes de Svalbard, mais conhecido como Svalbard Global Seed Vault (em norueguês: Svalbard globale frøhvelv), é um gigantesco silo para sementes (banco de sementes) construído em 2008 próximo da localidade de Longyearbyen, no arquipélago Ártico de Svalbard, a cerca de 1 300 km ao sul do Polo Norte.\n[…]\nO governo norueguês financiou inteiramente a construção do cofre de aproximadamente 45 milhões de kr (US$ 8,8 milhões em 2008). O armazenamento de sementes no cofre é gratuito para os usuários finais; A Noruega e a Crop Trust pagam os custos operacionais. O financiamento primário para a Trust vem de organizações como a Fundação Bill & Melinda Gates e de vários governos em todo o mundo.\n[…]\nAo longo da cobertura do silo e de sua fachada exposta existe uma instalação luminosa chamada Perpetual Repercussion, realizada pela artista norueguesa Dyveke Sanne, que marca a localização do cofre à distância. Na Noruega, projetos financiados pelo governo que excedem certo orçamento devem conter uma obra de arte.\n[…]\nA KORO (Kunst i offentlige rom)  agência governamental norueguesa responsável por administrar arte em lugares públicos, entrou em contato com a artista para instalar uma obra luminosa que ressaltasse a importância e a beleza da aurora boreal. A cobertura e a entrada do cofre são cobertas por placas de aço inoxidável de alta reflexibilidade. No verão, a instalação reflete as luzes polares enquanto que, no inverno, uma rede de cerca de 200 cabos de fibra óptica dá à instalação uma cor esverdeada.\n[…]\nEm setembro de 2015, houve a primeira retirada de sementes para repor um banco genético de Alepo, na Síria, e que foi parcialmente danificado por conta da guerra civil no país.\n[…]\n«See Inside the Svalbard Global Seed Vault» (em inglês)\n[…]\n«Svalbard Global Seed Vault» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Angra 2",
      "descricao": "Segunda usina nuclear brasileira, unidade da central de Angra dos Reis, em operação desde 2000."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Fruto de um acordo nuclear assinado em 1975, a usina Angra 2 foi construída com tecnologia de que país europeu?",
    "resposta": "Alemanha (Ocidental)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Angra_Nuclear_Power_Plant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Angra_Nuclear_Power_Plant",
        "situacao": "ok",
        "texto": "Angra Nuclear Power Plant is Brazil's only nuclear power plant. It is located at the Central Nuclear Almirante Álvaro Alberto (CNAAA) on the Itaorna Beach in Angra dos Reis, Rio de Janeiro. It consists of two pressurized water reactors (PWR), Angra I, with a net output of 609 MWe, first connected to the power grid in 1985 and Angra II, with a net output of 1,275 MWe, connected in 2000.\n[…]\nAngra I was purchased from Westinghouse of the USA (its sister power plant is Krško Nuclear Power Plant in Slovenia). The balance of plant design was subcontracted to Gibbs and Hill (USA) in association with PROMON Engenharia S.A. and construction to Brasileira de Engenharia S.A.\n[…]\nThe purchase did not include the transfer of sensitive reactor technology. As a result, Angra II was built with pre-Konvoi German technology, as part of a comprehensive nuclear agreement between Brazil and West Germany signed by President Ernesto Geisel in 1975. The complex was designed to have three PWR units with a total output of around 3,000 MWe and was to be the first of 4 nuclear plants that would be built up to 1990.\n[…]\nThe development of Angra III began in 1984 as a Siemens/KWU pressurized water reactor but was halted in 1986. About 70% of the plant's equipment was purchased in 1985 but has been in storage ever since. In June 2007, restarting of work on was approved by the National Council for Energy Policy but was halted again. On 31 May 2010, the National Nuclear Energy Commission granted a licensee for construction of the third reactor.\n[…]\nIn November 2021, the Brazilian government rescheduled the conclusion of Angra III for 2026–27, and announced the construction of a fourth nuclear power plant, to be inaugurated in 2031. In February 2022, the consortium that will complete the reactor agreed a contract, which is planned to enable reactor operations to start in 2026.\n[…]\nAngra-3 PWR Nuclear, Brazil"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Central_Nuclear_Almirante_%C3%81lvaro_Alberto",
        "situacao": "ok",
        "texto": "Central Nuclear Almirante Álvaro Alberto (CNAAA) é o complexo formado pelo conjunto das usinas nucleares Angra 1, Angra 2 e Angra 3 (em construção), de propriedade da Eletronuclear, subsidiária da Eletrobras. Elas são o resultado de um longo programa nuclear brasileiro que remonta à década de 1950 com a criação do Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq) liderado na épo\n[…]\nEm 2001, entrou em operação a usina Angra 2 com 1350 MW. Essa usina foi construída com tecnologia alemã Siemens/KWU, ainda no âmbito do Acordo Nuclear Brasil-Alemanha. Em seu primeiro ano de operação, Angra 2 atingiu um fator de capacidade de quase noventa por cento.\n[…]\nAngra 2 - 1350 MW\n[…]\nAngra 3 - 1405 MW (em construção)\n[…]\nA usina Angra 2 está situada na Praia de Itaorna, em Angra dos Reis, entrou em operação comercial no ano de 2001. É uma usina do tipo PWR - Pressurized Water Reactor, com o núcleo refrigerado a água leve desmineralizada. Foi fornecida pela Siemens - KWU da Alemanha, no âmbito do Acordo Nuclear Brasil-Alemanha e é operada pela Eletronuclear. Com potência nominal de 1300 MW (aproximadamente 50% do consumo do Estado do Rio de Janeiro), produziu no ano de 2008 um total de 10 448 289 MWh.\n[…]\nAngra 2 foi a primeira usina construída a partir do Acordo Nuclear Brasil-Alemanha, firmado em 1975. As obras civis da usina foram contratadas à Construtora Norberto Odebrecht (atual OEC) e iniciadas em 1976 com o estaqueamento. O início da construção propriamente dita se deu em setembro de 1981, com a concretagem da laje do prédio do reator.\n[…]\nA usina Angra 3 está localizada na Praia de Itaorna e que está em fase de instalação. Como Angra 2, terá um reator de água pressurizada (Pressurized Water Reactor), potência de 1 350 MW, e projeto da Siemens/KWU, atual Areva NP. Após ter tido sua construção paralisada nos anos 1980, foi anunciada a retomada de seu desenvolvimento a partir de 2008.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Parque Nacional de Yellowstone",
      "descricao": "Parque nacional americano criado em 1872, nos estados de Wyoming, Montana e Idaho, famoso por seus gêiseres."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1872, que presidente americano assinou a lei que criou Yellowstone, considerado o primeiro parque nacional do mundo?",
    "resposta": "Ulysses S. Grant",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yellowstone_National_Park"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yellowstone_National_Park",
        "situacao": "ok",
        "texto": "Yellowstone National Park is a national park of the United States located mainly in the northwest corner of the state of Wyoming, with small portions extending into Montana and Idaho. The park is known for its wildlife and its many geothermal features, especially the Old Faithful geyser, one of its most popular. While it represents many types of biomes, subalpine forest is the most abundant. It is\n[…]\nNative Americans have lived in the Yellowstone region for at least 11,000 years. While non-native mountain men visited during the early-to-mid-19th century, organized exploration by non-natives did not begin until the late 1860s. The park was established by the 42nd U.S. Congress through the Yellowstone National Park Protection Act and signed into law by President Ulysses S. Grant on March 1, 1872.\n[…]\nHayden informed the Committee on Public Lands that if Yellowstone were not preserved immediately, \"vandals who are now waiting to enter into this wonder-land, will in a single season despoil, beyond recovery, these remarkable curiosities, which have required all the cunning skill of nature thousands of years to prepare\". On March 1, 1872, President Ulysses S.\n[…]\nGrant signed an Act of Dedication, which demarcated Yellowstone as \"dedicated and set apart as a public park or pleasuring ground for the benefit and enjoyment of the people.\"\n[…]\nPlanned to be completed by 1966, in honor of the 50th anniversary of the founding of the National Park Service, Mission 66 construction diverged from the traditional log cabin style with design features of a modern style. During the late 1980s, most construction styles in Yellowstone reverted to the more traditional designs. After the enormous forest fires of 1988 damaged much of Grant Village, structures there were rebuilt in the traditional style.\n[…]\nHAER No. MT-92, \"Gallatin Entrance Road, West Yellowstone, Gallatin County, MT\", 15 data pages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_de_Yellowstone",
        "situacao": "ok",
        "texto": "O Parque Nacional de Yellowstone é um parque nacional norte-americano localizado nos estados de Wyoming, Montana e Idaho. É o mais antigo parque nacional no mundo, e um marco na história das áreas protegidas. Foi inaugurado a 1 de março de 1872 e cobre uma área de 8 980 km², estando a maior parte dele no condado de Park, no noroeste do Wyoming.\n[…]\nÉ por esta altura que foi esboçada pela primeira vez a ideia de Yellowstone se tornar um Parque Nacional. Essa ideia pertenceu a Cornelius Hedges, um advogado de Montana.\n[…]\nEm 1 de Março de 1872, o presidente Ulysses S. Grant promulgou legislativamente a criação do Parque Nacional de Yellowstone.\n[…]\nO Parque Nacional de Yellowstone foi designado como Reserva da biosfera, a 26 de Outubro de 1976. Em 8 de Setembro de 1978 foi designado como Patrimônio Mundial, pela UNESCO.\n[…]\nAlguns dos gêiseres mais conhecidos do parque Yellowstone:\n[…]\nEm 1975 existiam apenas 136 ursos cinzentos a viverem em liberdade e em 2016 são mais de 700 devido aos serviços de proteção federal e estatal norte-americanos. Morreram em 2015 no parque de Yellowstone 61 ursos desta espécie — apenas três foram classificadas como mortes naturais.\n[…]\nYellowstone é um dos mais populares parques nacionais dos Estados Unidos. O parque é único no que diz respeito à conjugação de múltiplas características naturais.\n[…]\nOs fogos florestais são uma ocorrência vulgar em Yellowstone devido ao clima seco, sobretudo no Verão, mas não deverão ser considerados como desastres: são um processo natural de características regulares que contribui, em última análise, para a regeneração e embelezamento do parque. A série de fogos florestais que ocorreu no parque, no ano de 1988, deixou queimados 45% da floresta do parque, incluindo florestas adjacentes às áreas turísticas de maior evidência.\n[…]\nYellowstone (vulcão)\n[…]\n(em inglês) The Yellowstone Park Foundation",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Crise do apagão",
      "descricao": "Crise de abastecimento de energia elétrica no Brasil, que levou a um racionamento obrigatório no governo Fernando Henrique Cardoso."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano o Brasil começou o racionamento de eletricidade conhecido como crise do apagão, com metas de economia para cada casa?",
    "resposta": "2001",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Crise_do_apagão"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Crise_do_apagão",
        "situacao": "ok",
        "texto": "A crise do apagão foi uma crise nacional ocorrida no Brasil, que afetou o fornecimento e distribuição de energia elétrica. Ocorreu  entre 1 de julho de 2001 e 19 de fevereiro de 2002, durante o segundo mandato do presidente Fernando Henrique Cardoso.\n[…]\nFoi editada a Medida Provisória nº 2.147/2001, criando a Câmara de Gestão da Crise de Energia Elétrica, do Conselho de Governo, e estabelecendo diretrizes para programas de enfrentamento da crise de energia.A situação energética levou à necessidade urgente de cortar em 20% o consumo de eletricidade consumidores residenciais e industriais no Distrito Federal e em mais 16 estados das regiões Sudeste, Centro-Oeste e Nordeste, e parte da região Norte.\n[…]\nEm 4 de junho, começam as restrições obrigatórias paras as famílias, afetando 32,3 milhões de residências, enquanto que o racionamento obrigatório para as indústrias e o comércio começou em 1º de julho de 2001.\n[…]\nNa época, previa-se grande possibilidade de ocorrer cortes de grandes dimensões no país, sobretudo nas grandes cidades e adotaram-se diversas medidas de racionamento, que produziram severas perdas na economia brasileira, que cresceu apenas 1,42% em 2001, quando tinha crescido 4,4% em 2000.\n[…]\nAuditoria do Tribunal de Contas da União (TCU), publicada em 15 de julho de 2009 mostrou que o apagão elétrico gerou um prejuízo ao Tesouro de R$ 45,2 bilhões. O ex-ministro Delfim Netto calcula que cada brasileiro perdeu R$ 320 com o apagão.\n[…]\nApós a crise do apagão, o governo investiu na construção de linhas de transmissão de energia elétrica. Durante a crise, não havia linhas de transmissão suficientes para levar a energia da Região Sul, onde os reservatórios estavam cheios, para o Sudeste e o Nordeste.\n[…]\nLista de blecautes no Brasil"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Parque de diversões de Pripyat",
      "descricao": "Parque de diversões da cidade de Pripyat, abandonado após o acidente de Chernobyl, famoso por sua roda-gigante."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A roda-gigante de Pripyat, símbolo do abandono após Chernobyl, seria inaugurada poucos dias depois do acidente, em que data festiva?",
    "resposta": "Primeiro de maio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pripyat_amusement_park"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pripyat_amusement_park",
        "situacao": "ok",
        "texto": "The Pripyat amusement park is an abandoned amusement park located in Pripyat, Ukraine. It was to have its grand opening on 1 May 1986, in time for the May Day celebrations, but these plans were cancelled on 26 April, when the Chernobyl disaster occurred a few kilometers away. Several sources report that the park was opened for a short time on 27 April before the announcement to evacuate the city w\n[…]\nThese reports claim that the park was hurriedly opened to distract Pripyat residents from the unfolding disaster nearby. However, these claims remain largely unsubstantiated and unsupported. The park—and its Ferris wheel in particular—have become a symbol of the Chernobyl disaster.\n[…]\nLocated north-west to the Palace of Culture in the center of Pripyat, the park had five attractions:\n[…]\nRadiation levels around the park vary. The liquidators washed radiation into the soil after the helicopters carrying radioactive materials used the grounds as a landing strip, so concreted areas are less radioactive. However, areas where moss has built up can emit up to 25,000 μSv/h, one of the highest levels of radiation in all of Pripyat.\n[…]\nThe park plays significant roles in the video games S.T.A.L.K.E.R.: Shadow of Chernobyl, Call of Duty 4: Modern Warfare, Chernobylite, and Counter-Strike: Global Offensive, and the film Chernobyl Diaries.\n[…]\nThe park plays significant roles too in Markiyan Kamysh's novel about illegal Chernobyl trips, A Stroll to the Zone.\n[…]\nIn the horror novel series/show The Strain, Chernobyl NPP was the birthplace of an ancient vampire and the nuclear accident was a test by another ancient to destroy his ground.\n[…]\nAbseiling The ferris Wheel In Pripyat Deprecated link archived 26 April 2015 at archive.today\n[…]\nSatellite photo of Pripyat ferris wheel, Google Maps"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_de_divers%C3%A3o_de_Pripyat",
        "situacao": "ok",
        "texto": "O Parque de diversão de Pripyat é um parque temático abandonado localizado em Pripyat, Ucrânia. Seria aberto durante as comemorações do dia Primeiro de Maio de 1986, mas os planos foram cancelados no dia 26 de abril, quando houve o desastre de Chernobil, ocorrido a alguns quilômetros do parque. Algumas fontes reportam que o parque chegou a ser aberto rapidamente no dia 27 de abril antes do anúncio\n[…]\nTeorias de que o parque foi aberto apressadamente como consequência do desastre para distrair os moradores são fundamentadas no fato de alguns brinquedos nunca terem sido completamente terminados, como a roda-gigante, que apresenta seu revestimento incompleto. De qualquer maneira, o parque tornou-se um marco do acidente nuclear de Chernobil.\n[…]\nFoi construído durante a União Soviética como um Парк культуры и отдыха (parque de cultura e descanso), típico das grandes cidades do estado na época. Possuía uma roda-gigante, um bate-bate, balanços tematizados, um paratrooper e barracas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Lei de Betz",
      "descricao": "Princípio formulado por Albert Betz em 1919 que fixa o máximo de energia que uma turbina pode extrair do vento."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Pela lei de Betz, uma turbina eólica ideal consegue aproveitar no máximo cerca de quanto da energia do vento?",
    "resposta": "Sessenta por cento",
    "distratores": [
      "Trinta por cento",
      "Oitenta por cento",
      "Noventa por cento"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Betz%27s_law"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Betz%27s_law",
        "situacao": "ok",
        "texto": "In aerodynamics, Betz's law indicates the maximum power that can be extracted from the wind, independent of the design of a wind turbine in open flow. It was published in 1919 by the German physicist Albert Betz. The law is derived from the principles of conservation of mass and momentum of the air stream flowing through an idealized \"actuator disk\" that extracts energy from the wind stream.\n[…]\nBritish scientist Frederick W. Lanchester derived the same maximum in 1915. The leader of the Russian aerodynamic school, Nikolay Zhukowsky, also published the same result for an ideal wind turbine in 1920, the same year as Betz. It is thus an example of Stigler's law, which posits that no scientific discovery is named after its actual discoverer.\n[…]\nis the area of the turbine, and\n[…]\nat the Betz limit, the rotor extracts\n[…]\nIn 2001, Gorban, Gorlov and Silantyev introduced an exactly solvable model (GGS), that considers non-uniform pressure distribution and curvilinear flow across the turbine plane (issues not included in the Betz approach). They utilized and modified the Kirchhoff model, which describes the turbulent wake behind the actuator as the \"degenerated\" flow and uses the Euler equation outside the degenerate area.\n[…]\nThe GGS model predicts that peak efficiency is achieved when the flow through the turbine is approximately 61% of the total flow which is very similar to the Betz result of 2⁄3 for a flow resulting in peak efficiency, but the GGS predicted that the peak efficiency itself is much smaller: 30.1%.\n[…]\nIn 2008, viscous computations based on computational fluid dynamics (CFD) were applied to wind turbine modeling and demonstrated satisfactory agreement with experiment. Computed optimal efficiency is, typically, between the Betz limit and the GGS solution.\n[…]\nPierre Lecanu, Joel Breard, Dominique Mouazé. Betz limit applied to vertical axis wind turbine theory"
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
