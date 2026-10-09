Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Química** (tema **Ciências**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Mercúrio",
      "descricao": "Elemento químico de número atômico 80, metal prateado que é líquido em temperatura ambiente."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Usado nos termômetros antigos, que metal é o único que permanece líquido em temperatura ambiente?",
    "resposta": "Mercúrio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mercury_(element)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mercury_(element)",
        "situacao": "ok",
        "texto": "Mercury is a chemical element; it has symbol Hg (from Latin hydrargyrum) and atomic number 80. It is commonly known as quicksilver. A heavy, silvery d-block element, mercury is the only metallic element that is known to be liquid at standard temperature and pressure. As well as having the lowest freezing point, mercury has the lowest boiling point and subsequently the narrowest liquid state range \n[…]\nMercury is a heavy, silvery-white metal. It is the only metallic element that is known to be liquid at standard temperature and pressure; the only other element that is liquid under these conditions is bromine, one of the halogens, though metals such as caesium, gallium, and rubidium melt just above room temperature. Compared to other metals, mercury is a poor conductor of heat, but a fair conductor of electricity.\n[…]\nMercury(II) oxide, the main oxide of mercury, arises when the metal is exposed to air for long periods at elevated temperatures. It reverts to the elements upon heating near 400 °C, as was demonstrated by Joseph Priestley in an early synthesis of pure oxygen. Hydroxides of mercury are poorly characterized, as attempted isolation studies of mercury(II) hydroxide have yielded mercury oxide instead.\n[…]\nSimilarly, liquid mercury was used as a coolant for some nuclear reactors; however, sodium is proposed for liquid metal cooled reactor, because the high density of mercury requires much more energy to circulate as coolant.\n[…]\nDue to the health effects of mercury exposure, industrial and commercial uses are regulated in many countries. The World Health Organization, OSHA, and NIOSH all treat mercury as an occupational hazard; both OSHA and NIOSH, among other regulatory agencies, have established specific occupational exposure limits on the element and its derivative compounds in liquid and vapor form. Environmental releases and disposal of mercury are regulated in the U.S."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Merc%C3%BArio_%28elemento_qu%C3%ADmico%29",
        "situacao": "ok",
        "texto": "Mercúrio é um metal líquido à temperatura ambiente, conhecido desde os tempos da Grécia Antiga. Também é conhecido como hidrargírio, hidrargiro, azougue e prata-viva, entre outras denominações. Seu nome homenageia o deus romano Mercúrio, que era o mensageiro dos deuses. Essa homenagem é devida à fluidez do metal. O símbolo Hg vem do grego latinizado 'hydrargyrum' que significa prata líquida.\n[…]\nO mercúrio é um elemento químico de número atômico 80 (80 prótons e 80 elétrons) e massa atómica 200,5 u. É um dos seis elementos que se apresentam líquidos à temperatura ambiente ou a temperaturas próximas. Os outros elementos são os metais césio, gálio, frâncio e rubídio e o não metal bromo. Dentre os seis, porém, apenas o mercúrio e o bromo são líquidos nas condições padrão de temperatura e pressão.\n[…]\nO mercúrio metálico ou elementar, no estado de oxidação zero (Hg0), existe na forma líquida à temperatura ambiente, é volátil e liberta um gás monoatómico perigoso: o vapor de mercúrio. Este é estável, podendo permanecer na atmosfera por meses ou até anos, revelando-se, deste modo, muito importante no ciclo do mercúrio, pois pode sofrer oxidação e formar os outros estados: o mercuroso, Hg+1, quando o átomo de mercúrio perde um elétron e o mercúrico, Hg+2, quando este perde dois elétrons.\n[…]\nCom exceção do mercúrio, os metais caracterizam-se por estarem no estado sólido em temperatura ambiente, entretanto, energia sônica transforma o mercúrio líquido em nanopartículas sólidas.\n[…]\nO mercúrio metálico ou elementar, no estado de oxidação zero (Hg0), existe na forma líquida à temperatura ambiente, é volátil e liberta um gás monoatómico: o vapor de mercúrio. Este é quimicamente estável, podendo permanecer na atmosfera por um longo período de tempo, onde sofre oxidação e origina os compostos inorgânicos (compostos mercurosos e mercúricos).\n[…]\nMercúrio elementar\n[…]\nMercúrio metálico\n[…]\nMetal mercúrio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Mercúrio",
      "descricao": "Elemento químico de número atômico 80, metal prateado que é líquido em temperatura ambiente."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O símbolo químico do mercúrio vem do latim hidrargirum, palavra de origem grega. O que ela significa?",
    "resposta": "Água-prata, ou prata líquida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mercury_(element)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mercury_(element)",
        "situacao": "ok",
        "texto": "Mercury is a chemical element; it has symbol Hg (from Latin hydrargyrum) and atomic number 80. It is commonly known as quicksilver. A heavy, silvery d-block element, mercury is the only metallic element that is known to be liquid at standard temperature and pressure. As well as having the lowest freezing point, mercury has the lowest boiling point and subsequently the narrowest liquid state range \n[…]\nMercury is a heavy, silvery-white metal. It is the only metallic element that is known to be liquid at standard temperature and pressure; the only other element that is liquid under these conditions is bromine, one of the halogens, though metals such as caesium, gallium, and rubidium melt just above room temperature. Compared to other metals, mercury is a poor conductor of heat, but a fair conductor of electricity.\n[…]\nLike the English name quicksilver ('living-silver'), this name was due to mercury's liquid and shiny properties.\n[…]\nDue to its physical properties and relative chemical inertness, liquid mercury is absorbed very poorly through intact skin and the gastrointestinal tract. Mercury vapor is the primary hazard of elemental mercury. As a result, containers of mercury are securely sealed to avoid spills and evaporation. Heating of mercury, or of compounds of mercury that may decompose when heated, should be carried out with adequate ventilation in order to minimize exposure to mercury vapor.\n[…]\nDue to the health effects of mercury exposure, industrial and commercial uses are regulated in many countries. The World Health Organization, OSHA, and NIOSH all treat mercury as an occupational hazard; both OSHA and NIOSH, among other regulatory agencies, have established specific occupational exposure limits on the element and its derivative compounds in liquid and vapor form. Environmental releases and disposal of mercury are regulated in the U.S.\n[…]\nMercury pollution in the ocean\n[…]\nRed mercury"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Merc%C3%BArio_%28elemento_qu%C3%ADmico%29",
        "situacao": "ok",
        "texto": "Mercúrio é um metal líquido à temperatura ambiente, conhecido desde os tempos da Grécia Antiga. Também é conhecido como hidrargírio, hidrargiro, azougue e prata-viva, entre outras denominações. Seu nome homenageia o deus romano Mercúrio, que era o mensageiro dos deuses. Essa homenagem é devida à fluidez do metal. O símbolo Hg vem do grego latinizado 'hydrargyrum' que significa prata líquida.\n[…]\nÉ um metal prateado que na temperatura normal é líquido e inodoro. Não é um bom condutor de calor comparado com outros metais, entretanto é um bom condutor de eletricidade. Estabelece liga metálica facilmente com muitos outros metais como o ouro ou a prata produzindo amálgamas. É insolúvel em água e solúvel em ácido nítrico. Quando a temperatura é aumentada transforma-se em vapores tóxicos e corrosivos mais densos que o ar.\n[…]\nEm grego, hydro (ύδρω) significa \"água\" e argyros (άργυρος) era o nome grego da \"prata\". Os romanos latinizaram o nome para hidrargirium. E como os símbolos químicos são dados pela inicial maiúscula (e uma segunda letra em minúsculo para diferenciação) do nome em latim, seu símbolo ficou sendo Hg (para não confundir com o símbolo do hidrogênio, H).\n[…]\nOutra forma de obtenção de mercúrio se dá por ustulação do sulfeto ou cinábrio. Nesta reação, o enxofre do mineral se oxida a SO2 e o metal livre se conduz a grandes condensadores metálicos refrigerados com água. Os depósitos de mercúrio são de origem relativamente recente, mas aparecem em rochas de todas as idades.\n[…]\nO mercúrio metálico ou elementar, no estado de oxidação zero (Hg0), existe na forma líquida à temperatura ambiente, é volátil e liberta um gás monoatómico: o vapor de mercúrio. Este é quimicamente estável, podendo permanecer na atmosfera por um longo período de tempo, onde sofre oxidação e origina os compostos inorgânicos (compostos mercurosos e mercúricos).\n[…]\nMercúrio elementar\n[…]\nMetal mercúrio.\n[…]\nPrata líquida",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Hélio",
      "descricao": "Elemento químico gasoso de número atômico 2, o gás nobre mais leve, usado para encher balões."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Usado para resfriar os ímãs dos aparelhos de ressonância magnética, que elemento químico tem o ponto de ebulição mais baixo de todos?",
    "resposta": "Hélio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Helium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Helium",
        "situacao": "ok",
        "texto": "Helium (from Ancient Greek: ἥλιος, romanized: helios, lit. 'sun') is a chemical element; it has symbol He and atomic number 2. It is a colorless, odorless, non-toxic, inert, monatomic gas and the first in the noble gas group in the periodic table. Its boiling point is the lowest among all the elements, and it does not have a melting point at standard pressures. It is the second-lightest and second\n[…]\nFor example, in the solar wind together with ionized hydrogen, the particles interact with the Earth's magnetosphere, giving rise to Birkeland currents and the aurora.\n[…]\nExtracting helium from air is not economical. For large-scale use, helium is extracted by fractional distillation from natural gas, which can contain as much as 7% helium. Since helium has a lower boiling point than any other element, low temperatures and high pressure are used to liquefy nearly all the other gases (mostly nitrogen and methane).\n[…]\nOf the 2014 world helium total production of about 32 million kg (180 million standard cubic meters) of helium per year, the largest use (about 32% of the total in 2014) is in cryogenic applications, most of which involves cooling the superconducting magnets in medical MRI scanners and NMR spectrometers. Other major uses were pressurizing and purging systems, welding, maintenance of controlled atmospheres, and leak detection. Other uses by category were relatively minor fractions.\n[…]\nHelium at low temperatures is used in cryogenics and in certain cryogenic applications. As examples of applications, liquid helium is used to cool certain metals to the extremely low temperatures required for superconductivity, such as in superconducting magnets for magnetic resonance imaging. The Large Hadron Collider at CERN uses 96 metric tons of liquid helium to maintain the temperature at 1.9 K (−271.25 °C; −456.25 °F)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/H%C3%A9lio",
        "situacao": "ok",
        "texto": "O hélio (em grego: Ήλιος; romaniz.: Helios; lit. \"\"Sol\"\") é um elemento químico de símbolo He e que possui massa atómica igual a 4 u, apresentando número atômico 2 (2 prótons e 2 elétrons). Em temperatura ambiente o hélio encontra-se no estado gasoso.\n[…]\nÉ um gás monoatômico, incolor e inodoro. O hélio tem o menor ponto de evaporação de todos os elementos químicos, e só pode ser solidificado sob pressões muito grandes. É o segundo elemento químico em abundância no universo, atrás do hidrogênio, mas na atmosfera terrestre encontram-se apenas traços, provenientes da desintegração de alguns elementos. Em alguns depósitos naturais de gás é encontrado em quantidade suficiente para a sua exploração.\n[…]\nTem o ponto de solidificação mais baixo de todos os elementos químicos, sendo o único líquido que não pode solidificar-se baixando a temperatura, já que permanece no estado líquido no zero absoluto à pressão normal. De resto, sua temperatura crítica é de apenas 5,19 K. Os isótopos 3He e 4He são os únicos em que é possível, aumentando a pressão, reduzir o volume mais de 30%.\n[…]\nO hélio líquido encontra cada vez maior uso em  aplicações médicas de imagem por ressonância magnética (RMI);\n[…]\nO hélio é o segundo elemento mais abundante do universo, atrás apenas do hidrogênio, constituindo em torno de 20% da matéria das estrelas, em cujo processo de fusão nuclear desempenha um importante papel. A abundância do hélio não pode ser explicada pela formação das estrelas. Ainda que seja consistente com o modelo do Big bang, acredita-se que a maior parte do hélio existente se formou nos três primeiros minutos do universo.\n[…]\nHélio 3\n[…]\nHélio 4\n[…]\nÉ o isótopo mais encontrado na Terra, sendo o mais estável entre todos os isótopos de hélio.\n[…]\n«Hélio - vídeos e imagens»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Tungstênio",
      "descricao": "Elemento químico metálico de número atômico 74, conhecido pelo altíssimo ponto de fusão e usado em filamentos de lâmpadas."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre todos os metais, qual é o que suporta as temperaturas mais altas antes de derreter?",
    "resposta": "Tungstênio",
    "distratores": [
      "Titânio",
      "Platina",
      "Ferro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tungsten"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tungsten",
        "situacao": "ok",
        "texto": "Tungsten is a chemical element; it has symbol W (from German: Wolfram) and atomic number 74. It is a metal found naturally on Earth almost exclusively in compounds with other elements. It was identified as a distinct element in 1781 and first isolated as a metal in 1783. Its important ores include scheelite and wolframite, the latter lending the element its alternative name.\n[…]\nBecause of the high ductile-brittle transition temperature of tungsten, its products are conventionally manufactured through powder metallurgy, spark plasma sintering, chemical vapor deposition, hot isostatic pressing, and thermoplastic routes. A more flexible manufacturing alternative is selective laser melting, which is a form of 3D printing and allows creating complex three-dimensional shapes.\n[…]\nTungsten's heat resistance makes it useful in arc welding applications when combined with another highly-conductive metal such as silver or copper. The silver or copper provides the necessary conductivity and the tungsten allows the welding rod to withstand the high temperatures of the arc welding environment.\n[…]\nTungsten(IV) sulfide is a high temperature lubricant and is a component of catalysts for hydrodesulfurization. MoS2 is more commonly used for such applications.\n[…]\nBecause it retains its strength at high temperatures and has a high melting point, elemental tungsten is used in many high-temperature applications, such as incandescent light bulb, cathode-ray tube, and vacuum tube filaments, heating elements, and rocket engine nozzles.\n[…]\nIts high melting point also makes tungsten suitable for aerospace and high-temperature uses such as electrical, heating, and welding applications, notably in the gas tungsten arc welding process (also called tungsten inert gas (TIG) welding).\n[…]\nOfficial website of the International Tungsten Industry Association"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tungst%C3%AAnio",
        "situacao": "ok",
        "texto": "O tungstênio (português brasileiro) ou tungsténio (português europeu) (também conhecido como volfrâmio ou wolfrâmio) é um elemento químico de símbolo W e número atômico 74.\n[…]\nO elemento livre é notável pela sua robustez, especialmente pelo fato de possuir o mais alto ponto de fusão de todos os metais e o segundo mais alto entre todos os elementos, a seguir ao carbono. Também notável é a sua alta densidade, 19,3 vezes maior do que a da água, comparável às do urânio e ouro, e muito mais alta (cerca de 1,7 vezes) que a do chumbo. O tungstênio com pequenas quantidades de impurezas é frequentemente frágil e duro, tornando-o difícil de trabalhar.\n[…]\nContudo, o tungstênio muito puro é mais dúctil, e pode ser cortado com uma serra de metais.\n[…]\nDurante a Segunda Guerra Mundial, o tungstênio teve um papel significativo nos negócios políticos de bastidores. Portugal, como principal produtor europeu do elemento, foi pressionado por ambos os lados, devido às suas jazidas de minério de volframita. A resistência do tungstênio a altas temperaturas e a sua capacidade de aumentar a resistência de ligas metálicas tornavam-no uma matéria-prima importante para a indústria do armamento.\n[…]\nO tungstênio na sua forma impura é um metal de cor branca a cinza, frequentemente frágil e difícil de trabalhar, mas quando puro, pode ser facilmente trabalhado. Pode ser cortado com uma serra de metais, forjado, trefilado, extrudido ou sinterizado. Dentre todos os metais na forma pura, o tungstênio tem o mais alto ponto de fusão (3 422 °C), a menor pressão de vapor e (a temperaturas acima de 1 650 °C) a maior resistência à tração.\n[…]\n«Tungstênio - vídeos e imagens»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Oxigênio",
      "descricao": "Elemento químico de número atômico 8, gás essencial à respiração e à combustão."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Presente em rochas, areia e argila, que elemento químico é o mais abundante na crosta terrestre?",
    "resposta": "Oxigênio",
    "distratores": [
      "Silício",
      "Alumínio",
      "Ferro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Abundance_of_elements_in_Earth%27s_crust"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abundance_of_elements_in_Earth%27s_crust",
        "situacao": "ok",
        "texto": "The abundance of elements in Earth's crust is shown in tabulated form with the estimated crustal abundance for each chemical element shown as mg/kg, or parts per million (ppm) by mass (10,000 ppm = 1%).\n[…]\nThe Earth's crust is one \"reservoir\" for measurements of abundance. A reservoir is  any large body to be studied as unit, like the ocean, atmosphere, mantle or crust. Different reservoirs may have different relative amounts of each element due to different chemical or mechanical processes involved in the creation of the reservoir.\n[…]\nThe alternation of abundance between even and odd atomic number is known as the Oddo–Harkins rule. The rarest elements in the crust are not the heaviest, but are rather the siderophile elements (iron-loving) in the Goldschmidt classification of elements. These have been depleted by being relocated deeper into the Earth's core; their abundance in meteoroids is higher.\n[…]\nThis table gives the estimated abundance in parts per million by mass of elements in the continental crust; values of the less abundant elements may vary with location by several orders of magnitude.\n[…]\nAbundance of the chemical elements\n[…]\nAbundances of the elements (data page)\n[…]\nClarke number – Relative abundance of elements\n[…]\nFleischer, Michael (September 1954). \"The abundance and distribution of the chemical elements in the earth's crust\". Journal of Chemical Education. 31 (9): 446. Bibcode:1954JChEd..31..446F. doi:10.1021/ed031p446. ISSN 0021-9584. Examines the abundance and distribution of the chemical elements in the earth's crust, as well as the figures and methods that have contributed to this knowledge.\n[…]\nHyperPhysics, Georgia State University, Abundance of Elements in Earth's Crust."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_elementos_qu%C3%ADmicos_por_abund%C3%A2ncia_na_crosta_terrestre",
        "situacao": "ok",
        "texto": "A abundância de elementos na crosta terrestre é mostrada em forma de tabela com a abundância crustal estimada para cada elemento químico mostrado em partes por milhão (ppm) por massa (10.000 ppm = 1%). Observe que os gases nobres não estão incluídos, pois não fazem parte da crosta sólida.\n[…]\nTambém não estão incluídos certos elementos com concentrações crustais extremamente baixas: tecnécio (número atômico 43), promécio (61) e todos os elementos com números atômicos maiores que 83 exceto tório (90) e urânio (92).\n[…]\nLista de elementos químicos\n[…]\nQuímica atmosférica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Hidrogênio",
      "descricao": "Elemento químico de número atômico 1, o mais leve de todos, que forma água ao se combinar com o oxigênio."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Combustível das estrelas, que elemento químico é o mais abundante do universo, com cerca de três quartos da matéria comum?",
    "resposta": "Hidrogênio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hydrogen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hydrogen",
        "situacao": "ok",
        "texto": "Hydrogen is a chemical element; it has the symbol H and atomic number 1. It is the lightest and most abundant chemical element in the universe, constituting about 75% of all normal matter. Under standard conditions, hydrogen is a gas of diatomic molecules with the formula H2, called dihydrogen, or sometimes hydrogen gas, molecular hydrogen, or simply hydrogen. Dihydrogen is colorless, odorless, no\n[…]\nHydrogen, as atomic H, is the most abundant chemical element in the universe, making up 75% of normal matter by mass. and >90% by number of atoms. In the early universe, protons formed in the first second after the Big Bang; neutral hydrogen atoms formed about 370,000 years later during the recombination epoch as the universe expanded and plasma had cooled enough for electrons to remain bound to protons.\n[…]\nProtonated molecular hydrogen (H+3) is found in the interstellar medium, where it is generated by ionization of molecular hydrogen by cosmic rays. This ion has also been observed in the upper atmosphere of Jupiter. The ion is long-lived in outer space due to the low temperature and density. H+3 is one of the most abundant ions in the universe, and it plays a notable role in the chemistry of the interstellar medium. Neutral triatomic hydrogen H3 can exist only in an excited form and is unstable.\n[…]\nHydrogen is the third most abundant element on the Earth's surface, mostly existing within chemical compounds such as hydrocarbons and water. Elemental hydrogen is normally in the form of a gas, H2, at standard conditions. It is present in a very low concentration in Earth's atmosphere (around 0.53 parts per million on a molar basis) because of its light weight, which enables it to escape the atmosphere more rapidly than heavier gases.\n[…]\nRigden, John S. (2002). Hydrogen: The Essential Element. Cambridge, Massachusetts: Harvard University Press. ISBN 978-0-531-12501-4."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hidrog%C3%A9nio",
        "situacao": "ok",
        "texto": "O hidrogénio (português europeu) ou hidrogênio (português brasileiro) (pronuncia-se /idɾɔˈʒɛnju/ ou /idɾoˈʒenju/ de hidro + génio/gênio, ou do fr. hidrogène e admitindo-se a grafia dupla pelo acordo ortográfico) é um elemento químico com número atómicoPE ou atômico PB 1, representado pelo símbolo H. Com uma massa atómica de aproximadamente 1,0 u, o hidrogénio é o elemento menos denso.\n[…]\nO hidrogénio é o mais abundante dos elementos químicos, constituindo aproximadamente 75% da massa elementar do Universo. Estrelas na sequência principal são compostas primariamente de hidrogénio em seu estado de plasma. O hidrogénio elementar é relativamente raro na Terra e é industrialmente produzido a partir de hidrocarbonetos presentes no gás natural, tais como metano, após o qual a maior parte do hidrogénio elementar é usada \"em cativeiro\" (o que significa localmente no lugar de produção).\n[…]\nO hidrogênio é o elemento mais abundante no universo, compondo 75% da matéria normal por massa e mais de 90% por número de átomos. Este elemento é encontrado em grande abundância em estrelas e planetas gigantes de gás. Nuvens moleculares de H2 são associadas a formação de estrelas. O elemento tem um papel vital em dar energia às estrelas através de cadeias próton-próton e do ciclo CNO de fusão nuclear.\n[…]\nO isótopo mais comum do hidrogênio não possui nêutrons, existindo outros dois, o deutério (D) com um e o trítio (T), que é radioativo, com dois. O deutério tem uma abundância natural compreendida entre 0,0184 e 0,0082% (IUPAC). O hidrogênio é o único elemento químico que tem nomes e símbolos químicos distintos para seus diferentes isótopos.\n[…]\n1H: conhecido como prótio, é o isótopo mais comum do hidrogénio com uma abundância de mais de 99,98%. Uma vez que o núcleo desse isótopo é formado por um só próton, ele foi baptizado como prótio, nome que apesar de ser muito descritivo, é pouco usado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Prata",
      "descricao": "Elemento químico de símbolo Ag e número atômico 47, metal branco e brilhante, um dos metais conhecidos desde a Antiguidade."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Os fios elétricos costumam ser de cobre, mas que metal conduz eletricidade melhor do que qualquer outro?",
    "resposta": "Prata",
    "distratores": [
      "Ouro",
      "Alumínio",
      "Platina"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Silver"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Silver",
        "situacao": "ok",
        "texto": "Silver is a chemical element; it has symbol Ag (from Latin  argentum) and atomic number 47. A soft, white, lustrous transition metal, it exhibits the highest electrical conductivity, thermal conductivity and reflectivity of any metal. Silver is found in the Earth's crust in the pure, free elemental form (\"native silver\"), as an alloy with gold (electrum) and other metals, and in minerals such as a\n[…]\nSilver is useful in the manufacture of chemical equipment on account of its low chemical reactivity, high thermal conductivity, and being easily workable. Silver crucibles (alloyed with 0.15% nickel to avoid recrystallisation of the metal at red heat) are used for carrying out alkaline fusion. Copper and silver are also used when doing chemistry with fluorine. Equipment made to work at high temperatures is often silver-plated.\n[…]\nSilver metal is a good catalyst for oxidation reactions; in fact it is somewhat too good for most purposes, as finely divided silver tends to result in complete oxidation of organic substances to carbon dioxide and water, and hence coarser-grained silver tends to be used instead. For instance, 15% silver supported on α−Al2O3 or silicates is a catalyst for the oxidation of ethylene to ethylene oxide at 230–270 °C.\n[…]\nPure silver metal is used as a food colouring under the E number E174. In the European Union, E174 is authorised for limited decorative uses, including external coating of confectionery, decoration of chocolates and use in liqueurs. In 2025, the European Food Safety Authority reported that the available data were insufficient to conclude on the safety of silver as food additive E174.\n[…]\nThe Texas Legislature designated silver the official precious metal of Texas in 2007."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Prata",
        "situacao": "ok",
        "texto": "A prata ou argento (do latim vulgar platta*, argentum) é um elemento químico de símbolo Ag e de número atómico igual a 47 (47 prótons e 47 elétrons). Sua massa atómica é 107,87u. À temperatura ambiente, a prata encontra-se no estado sólido. No teste de chama, assume a cor lilás.\n[…]\nA maior parte da prata é um subproduto da mineração de chumbo e está frequentemente associada ao cobre. Dentre os metais, é a que mais conduz corrente elétrica, superando o cobre. Em 2019, os cientistas descobriram um mecanismo, em nanoescala, que tornou a prata 42% mais forte do que qualquer coisa já feita antes, sem perder a condutividade elétrica.\n[…]\nDurante a Segunda Guerra Mundial, o suprimento de cobre limitado levou a substituição pela prata em muitas aplicações industriais. O governo dos Estados Unidos tomou emprestado uma grande quantidade da reserva dos cofres de West Point para uma grande quantidade de usos industriais. Um uso muito importante foi para a produção de barramentos que as novas plantas de alumínio precisavam para construir aviões. Durante a guerra, muitos conectores elétricos e interruptores foram prateados.\n[…]\nA pureza da prata é normalmente medida em permilagem (base por mil), assim uma liga 95% pura é descrita como \"0,950 fina\". Logo, \"Prata 950\" quer dizer: 95% da joia é de prata legítima; os outros 5% são de outros metais, normalmente cobre.\n[…]\nA prata é um metal precioso que historicamente vale entre 5 e 12 partes do valor do ouro. É uma fonte não renovável. A onça (31,1035 gramas) de prata valia algo em torno de 43 dólares em 2 de setembro de 2011, após ter chegado próximo dos 50 dólares na última semana de abril de 2011. Em 1981, a onça de prata chegou a valer mais ainda, próximo dos 50 dólares, devido ao movimento especulativo.\n[…]\nMoeda de prata\n[…]\nBala de prata",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Lítio",
      "descricao": "Elemento químico de número atômico 3, o metal mais leve, usado em baterias recarregáveis."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Tão leve que consegue boiar até em óleo, qual é o metal de menor densidade?",
    "resposta": "Lítio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lithium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lithium",
        "situacao": "ok",
        "texto": "Lithium (from Ancient Greek: λίθος, líthos, 'stone') is a chemical element; it has symbol Li and atomic number 3. It is a soft, silvery-white alkali metal. Under standard conditions, it is the least dense metal and the least dense solid element. Like all alkali metals, lithium is highly reactive and flammable, and must be stored in vacuum, inert atmosphere, or inert liquid such as purified kerosen\n[…]\nLithium metal is produced through electrolysis applied to a mixture of fused 55% lithium chloride and 45% potassium chloride at about 450 °C.\n[…]\nWhen used as a flux for welding or soldering, metallic lithium promotes the fusing of metals during the process and eliminates the formation of oxides by absorbing impurities. Alloys of the metal with aluminium, cadmium, copper and manganese are used to make high-performance, low density aircraft parts (see also Lithium-aluminium alloys).\n[…]\nOrganolithium compounds are widely used in the production of polymer and fine-chemicals. In the polymer industry, which is the dominant consumer of these reagents, alkyl lithium compounds are catalysts/initiators in anionic polymerization of unfunctionalized olefins. For the production of fine chemicals, organolithium compounds function as strong bases and as reagents for the formation of carbon-carbon bonds. Organolithium compounds are prepared from lithium metal and alkyl halides.\n[…]\nLithium metal is corrosive and requires special handling to avoid skin contact. Breathing lithium dust or lithium compounds (which are often alkaline) initially irritate the nose and throat, while higher exposure can cause a buildup of fluid in the lungs, leading to pulmonary edema. The metal itself is a handling hazard because contact with moisture produces the caustic lithium hydroxide. Lithium metal is safely stored in non-reactive compounds such as naphtha and petroleum jelly."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADtio",
        "situacao": "ok",
        "texto": "O lítio (do grego líthos, ou, \"pedra\", \"cálculo\" + sufixo nominal \"io\") é um elemento químico de símbolo Li, número atômico 3 e massa atômica 7, contendo, na sua estrutura, três prótons e três elétrons. Na tabela periódica dos elementos químicos, pertencente ao grupo (ou família) 1 (anteriormente chamado 1A), dos elementos alcalinos. Sob condições normais de temperatura e pressão, é o metal mais l\n[…]\nO lítio é usado na fabricação de baterias, os íons de lítio, ou outras. Tem um grande poder oxidativo, é facílimo de sofrer corrosão e possui densidade igual a 0,534 gramas por centímetro cúbico.\n[…]\nBrande também descreveu bastante os sais de lítio, como o cloreto e, estimou que o óxido de lítio compõe cerca de 55% do metal, e que o peso atômico do lítio seria aproximadamente de 9,8 g/mol (valor atual ~6,94 g/mol). Em 1855, grandes quantidades de lítio foram produzidas a partir da eletrólise de cloreto de lítio por Robert Bunsen e Augustus Matthiessen.\n[…]\nDesde o fim da Segunda Guerra Mundial, a produção de lítio tem aumentado significativamente. O metal é separado de outros elementos nas rochas ígneas, tais nas imagens de satélite acima. Os sais de lítio são extraídos das águas de nascentes minerais, nos depósitos e poços de salmoura. Ele é produzido via eletrólise a partir da mistura fundida de 55% de cloreto de lítio e 45% de cloreto de potássio sob temperatura de 450 oC. Em 1998, o preço do lítio chegou a  95 US$ / kg (ou 43 US$/libra).\n[…]\nAs baterias de íons de lítio, que são recarregáveis e têm uma alta densidade energética, não podem ser confundidas com as pilhas de lítio, que são baterias primárias descartáveis com lítio ou seus compostos com o seu ânodo. Outras baterias recarregáveis que utilizam o lítio incluem a bateria de polímero de lítio, bateria Beltway e as baterias de nanofios.\n[…]\nBateria de íon de lítio\n[…]\nBateria de lítio\n[…]\nTabela Periódica Completa - Lítio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Ouro",
      "descricao": "Elemento químico de símbolo Au e número atômico 79, metal amarelo, denso e maleável."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Batido em folhas finíssimas para revestir altares de igrejas barrocas, qual é o metal mais maleável que existe?",
    "resposta": "Ouro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gold"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gold",
        "situacao": "ok",
        "texto": "Gold is a chemical element; its chemical symbol is Au (from Latin aurum) and atomic number 79. In its pure form, it is a bright-metallic-yellow, dense, soft, malleable, and ductile metal. Chemically, gold is a transition metal, a group 11 element, and one of the noble metals. It is one of the least reactive chemical elements, being the second lowest in the reactivity series, with only platinum ran\n[…]\nHistorically, metallic and gold compounds have long been used for medicinal purposes. Gold, usually as the metal, is perhaps the most anciently administered medicine (apparently by shamanic practitioners) and known to Dioscorides. In medieval times, gold was often seen as beneficial for the health, in the belief that something so rare and beautiful could not be anything but healthy.\n[…]\nDecorative use of gold flake goes back to medieval Europe as a decoration in food and drinks among nobility. Leaf or flakes are used today in sweets and drinks. Vark is a foil or leaf composed of a pure metal that can include gold, and is used for garnishing sweets in South Asian cuisine.\n[…]\nGold metal was voted Allergen of the Year in 2001 by the American Contact Dermatitis Society; gold contact allergies affect mostly women. Despite this, gold is a relatively non-potent contact allergen, in comparison with metals like nickel.\n[…]\nA sample of the fungus Aspergillus niger was found growing from gold mining solution; and was found to contain cyano metal complexes, such as gold, silver, copper, iron and zinc. The fungus also plays a role in the solubilization of heavy metal sulfides.\n[…]\nHart, Matthew, Gold: The Race for the World's Most Seductive Metal Gold : the race for the world's most seductive metal\", New York: Simon & Schuster, 2013. ISBN 9781451650020"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ouro",
        "situacao": "ok",
        "texto": "O ouro é um elemento químico com o símbolo Au (do latim aurum 'ouro') e número atômico 79. É um metal brilhante, levemente amarelo-alaranjado, denso, macio, maleável e dúctil na sua forma pura. Quimicamente, o ouro é um metal de transição e um elemento do grupo 11 (anteriormente chamado IB) da tabela periódica, e de massa atómica 197 u. É um dos elementos químicos menos reativos e é sólido em cond\n[…]\nEssas folhas semitransparentes também refletem fortemente a luz infravermelha, tornando-as úteis como escudos infravermelhos (calor radiante) em viseiras de trajes resistentes ao calor e viseiras de trajes espaciais. O ouro é um bom condutor de calor e eletricidade. É um metal muito denso, com alto ponto de fusão e alta afinidade eletrônica. Os seus estados de oxidação mais importantes são 1 e 3.\n[…]\nO ouro tem uma densidade de 19,3 g/cm3, quase idêntica à do volframio que é de 19,25 g/cm3; daí, o volframio ter sido utilizado na falsificação de lingotes de ouro, por exemplo, chapando um lingote de volframio com ouro,. ou pegando uma barra de ouro existente, fazendo furos e substituindo o ouro removido por hastes de tungsténio. Em comparação, a densidade do chumbo é 11,34 g/cm3, e a do elemento mais denso, o ósmio, é 22,588±0,015 g/cm3\n[…]\nExiste somente um isótopo estável do ouro (Au-197), porém existem 18 radioisótopos, sendo o Au-195 o mais estável com uma meia-vida de 186 dias, que é também o seu único isótopo natural, fazendo do ouro um elemento mononuclear e um elemento monoisotópico. Foram sintetizados trinta e seis radioisótopos com massas atómicas de 169 a 205. O mais estável deles é o\n[…]\n196Au, que decai mais frequentemente por captura de eletrões (93%) com um caminho de decaimento menor β− (7%). Todos os radioisótopos de ouro com massas atómicas superiores a 197 decaem por decaimento β−.\n[…]\n«Ouro - vídeos e imagens»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Flúor",
      "descricao": "Elemento químico de número atômico 9, halogênio gasoso amarelo-claro, extremamente reativo."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Que elemento químico, presente em compostos das pastas de dente, é considerado o mais reativo de todos?",
    "resposta": "Flúor",
    "distratores": [
      "Cloro",
      "Oxigênio",
      "Sódio"
    ],
    "fonte": [
      "https://www.britannica.com/science/fluorine",
      "https://en.wikipedia.org/wiki/Fluorine"
    ],
    "trechos": [
      {
        "url": "https://www.britannica.com/science/fluorine",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fluorine",
        "situacao": "ok",
        "texto": "Fluorine is a chemical element; it has the symbol F and atomic number 9. It is the lightest halogen and exists at standard conditions as pale yellow diatomic gas. Fluorine is extremely reactive as it reacts with all other elements except for the light noble gases. Fluorine in its elemental form is highly toxic.\n[…]\nFluorine is the 13th most abundant element in Earth's crust at 600–700 ppm (parts per million) by mass. Though believed not to occur naturally, elemental fluorine has been shown to be present as an occlusion in antozonite, a variant of fluorite. Most fluorine exists as fluoride-containing minerals. Fluorite, fluorapatite and cryolite are the most industrially significant. Fluorite (CaF2), also known as fluorspar, abundant worldwide, is the main source of fluoride, and hence fluorine.\n[…]\nIn 1529, Georgius Agricola described fluorite as an additive used to lower the melting point of metals during smelting. He penned the Latin word fluorēs (fluor, flow) for fluorite rocks. The name later evolved into fluorspar (still commonly used) and then fluorite. The composition of fluorite was later determined to be calcium difluoride.\n[…]\nElemental fluorine is highly toxic to living organisms. Its effects in humans start at concentrations lower than hydrogen cyanide's 50 ppm and are similar to those of chlorine: significant irritation of the eyes and respiratory system as well as liver and kidney damage occur above 25 ppm, which is the immediately dangerous to life and health value for fluorine.\n[…]\nHydrofluoric acid is the weakest of the hydrohalic acids, having a pKa of 3.2 at 25 °C (77 °F). Pure hydrogen fluoride is a volatile liquid due to the presence of hydrogen bonding, while the other hydrogen halides are gases. It is able to attack glass, concrete, metals, and organic matter."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fl%C3%BAor",
        "situacao": "ok",
        "texto": "Flúor é um elemento químico, símbolo F, de número atômico 9 (9 prótons e 9 elétrons) de massa atómica 19 u, situado no grupo dos halogênios (grupo 17; anteriormente denominado VIIA) da tabela periódica.\n[…]\nEm CNTP, o flúor é um gás corrosivo de coloração amarelo-pálido, fortemente oxidante. É o elemento mais eletronegativo, e o mais reativo dos não metais e forma compostos com praticamente todos os demais elementos, incluindo os gases nobres xenônio e radônio. Inclusive em ausência de luz e baixas temperaturas reage explosivamente com o hidrogênio. Jatos de flúor no estado gasoso atacam o vidro, metais, água e outras substâncias, que reagem formando uma chama brilhante.\n[…]\nO flúor foi descoberto em 1771 por Carl Wilhelm Scheele; entretanto, devido à sua elevada reatividade, não se conseguiu isolá-lo porque, quando separado de algum composto, imediatamente reagia com outras substâncias. Finalmente, em 1886, foi isolado pelo químico francês Henri Moissan.\n[…]\nO flúor é o halogênio mais abundante da crosta terrestre, com uma concentração de 950 ppm. Na água do mar se encontra numa proporção de aproximadamente 1,3 ppm. Os minerais mais importantes no qual está presente são a fluorita, CaF2, a fluorapatita, Ca5(PO4)3F e a criolita, Na3AlF6.\n[…]\nUtilizam-se numerosos compostos orgânicos nos quais foram substituídos formalmente átomos de hidrogênio por átomos de flúor. Existem distintas formas de obtê-los, uma das mais importantes é através de reações de substituição de outros halogênios:\n[…]\nA lista dos efeitos pode ser resumida assim, para o consumo de compostos do flúor.\n[…]\nA FDA considera que o flúor é um medicamento não aprovado, para o qual não existem provas de inocuidade e de efetividade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Ósmio",
      "descricao": "Elemento químico de número atômico 76, metal do grupo da platina, duro e azulado."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Com quase o dobro da densidade do chumbo, qual é o elemento químico mais denso encontrado na natureza?",
    "resposta": "Ósmio",
    "distratores": [
      "Ouro",
      "Platina",
      "Urânio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Osmium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Osmium",
        "situacao": "ok",
        "texto": "Osmium (from Ancient Greek  ὀσμή (osmḗ) 'smell') is a chemical element; it has symbol Os and atomic number 76. It is a hard, brittle, bluish-white transition metal in the platinum group. It was discovered in 1803 by Smithson Tennant, who named it for the characteristic smell of its volatile oxide.\n[…]\nOsmium is one of the least abundant stable elements in Earth's crust, with an average mass fraction of 50 parts per trillion in the continental crust.\n[…]\nOsmium is found in nature as an uncombined element or in natural alloys; especially the iridium–osmium alloys, osmiridium (iridium rich), and iridosmium (osmium rich). In nickel and copper deposits, the platinum-group metals occur as sulfides (i.e., (Pt,Pd)S), tellurides (e.g., PtBiTe), antimonides (e.g., PdSb), and arsenides (e.g., PtAs2); in all these compounds platinum is exchanged by a small amount of iridium and osmium.\n[…]\nOsmium is obtained commercially as a by-product from nickel and copper mining and processing. During electrorefining of copper and nickel, noble metals such as silver, gold and the platinum-group metals, together with non-metallic elements such as selenium and tellurium, settle to the bottom of the cell as anode mud, which forms the starting material for their extraction. Separating the metals requires that they first be brought into solution.\n[…]\nThe light bulb manufacturer Osram (founded in 1906, when three German companies, Auer-Gesellschaft, AEG and Siemens & Halske, combined their lamp production facilities) derived its name from the elements of osmium and Wolfram (the latter is German for tungsten).\n[…]\nFlegenheimer, J. (2014). \"The Mystery of the Disappearing Isotope\" (via the Wayback Machine). Revista Virtual de Química. V. XX."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93smio",
        "situacao": "ok",
        "texto": "O ósmio é um elemento químico, símbolo Os, de número atômico 76 (76 prótons e 76 elétrons), com massa atómica 190,23 u e que está situado no grupo 8 da classificação periódica dos elementos. Trata-se de um metal de transição classificado no grupo da platina. À temperatura ambiente o ósmio encontra-se no estado sólido. Ambos ósmio ou irídio podem ser considerados os elementos mais densos.\n[…]\nÀ temperatura e à pressão ambiente, a densidade calculada do ósmio é 22,61 g/cm3 e a densidade calculada do irídio é 22,65 g/cm3. No entanto, o valor medido experimentalmente (utilizando cristalografia de raios-x) para o ósmio é de 22,59 g/cm3, enquanto que a de irídio é de 22,56 g/cm3. Normalmente, o ósmio é o elemento mais denso.\n[…]\nO ósmio em sua forma metálica é o elemento mais denso da tabela periódica, branco azulado, frágil, sólido e brilhante, inclusive a altas temperaturas, mesmo sendo difícil encontrá-lo nesta forma. É mais fácil obter o ósmio na forma de pó, mesmo que exposto ao ar tende a formação do tetróxido de ósmio, OsO4. O tetróxido de ósmio é tóxico (perigoso para os olhos), oxidante energético e volátil com um forte odor.\n[…]\nO ósmio tem uma densidade muito alta, similar ao irídio. Tem o ponto de fusão mais elevado e a pressão de vapor mais baixa em relação aos outros metais do grupo da platina.\n[…]\nNas ligas de ósmio com irídio, são denominadas \"osmirídio\" aquelas que contem maior quantidade de ósmio e \"iridiósmio\" aquelas que apresentam mais irídio.\n[…]\nA abundância do ósmio na crosta terrestre é estimada em 10−3 ppm. Os principais depósitos de ósmio são encontrados na Rússia, Estados Unidos, Canadá, Colômbia e Japão.\n[…]\nO ósmio tem 7 isótopos naturais, dos quais 5 são estáveis: Os-187, Os-188, Os-189, Os-190, e o mais abundante Os-192. Os isótopos Os-184 e Os-186 têm meia-vida absurdamente longa e, para finalidades práticas, podem ser considerados estáveis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Bronze",
      "descricao": "Liga metálica de cobre e estanho, que deu nome à Idade do Bronze."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O metal que deu nome a uma era da Pré-História é uma liga de cobre com que outro metal?",
    "resposta": "Estanho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bronze"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bronze",
        "situacao": "ok",
        "texto": "Bronze is an alloy consisting primarily of copper, commonly with about 12–12.5% tin and often with the addition of other metals (including aluminium, manganese, nickel, or zinc) and sometimes non-metals (such as phosphorus) or metalloids (such as arsenic or silicon). These additions produce a range of alloys some of which are harder than copper alone or have other useful properties, such as streng\n[…]\nWebster's Dictionary (1828) offers: \"Tin united with copper in different proportions, forms bronze, bell-metal, and speculum-metal. D. Olmsted\".\n[…]\nHistorical \"bronzes\" are highly variable in composition, as most metalworkers probably used whatever scrap was on hand; the metal of the 12th-century English Gloucester Candlestick is bronze containing a mixture of copper, zinc, tin, lead, nickel, iron, antimony, arsenic and an unusually large amount of silver – between 22.5% in the base and 5.76% in the pan below the candle. The proportions of this mixture suggest that the candlestick was made from a hoard of old coins.\n[…]\nAlthough other materials such as speculum metal had come into use, and Western glass mirrors had largely taken over, bronze mirrors were still being made in Japan and elsewhere in the eighteenth century, and are still made on a small scale in Kerala, India.\n[…]\nBronze is the preferred metal for bells in the form of a high tin bronze alloy known as bell metal, which is typically about 23% tin.\n[…]\nSome companies are now making saxophones from phosphor bronze (3.5 to 10% tin and up to 1% phosphorus content). Bell bronze/B20 is used to make the tone rings of many professional model banjos. The tone ring is a heavy (usually 3 lb; 1.4 kg) folded or arched metal ring attached to a thick wood rim, over which a skin, or most often, a plastic membrane (or head) is stretched – it is the bell bronze that gives the banjo a crisp powerful lower register and clear bell-like treble register."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bronze",
        "situacao": "ok",
        "texto": "Bronze (do persa biring, cobre) é uma série de ligas metálicas que tem como base o cobre e o estanho e proporções variáveis de outros elementos como zinco, alumínio, antimônio, níquel, fósforo, chumbo entre outros com o objetivo de obter características superiores às do cobre. O estanho tem a característica de aumentar a resistência mecânica e a dureza do cobre sem alterar a sua ductibilidade.\n[…]\nO processo de fabricação consiste em misturar um mineral de cobre (calcopirita, malaquita ou outro) com o estanho (cassiterita) em um alto-forno alimentado com carbono (carvão vegetal ou coque). O anidrido carbônico reduz os minerais a metais, o cobre e estanho se fundem e se ligam a percentual de estanho de 2 a 11%.\n[…]\nO bronze possui características acústicas e de geração de ondas sinusoidais bastante puras e apresentando um timbre bem distinto, tornando-se assim um metal excelente para a fabricação de instrumentos musicais de percussão como é o caso dos sinos e sinetas ou secções de instrumentos de sopro, onde o som é originado, como são as boquilhas para saxofones, e bocais para trompetes e trombones, entre outros.\n[…]\nÉ considerada uma das ligas metálicas mais antigas da humanidade. Segundo a história, a fabricação do bronze iniciou-se há mais de 3000 anos e ficou conhecida como Idade do Bronze. Os ferreiros perceberam que a utilização do cobre tornou-se inviável em virtude da procura, estes por sua vez misturaram acidentalmente[carece de fontes]? o estanho com o cobre com a tentativa de aumentar o volume do material, e deu certo.\n[…]\nNo início da produção do bronze utilizou-o arsênio como elemento de liga, o qual foi posterior substituído (devido à sua toxicidade) pelo estanho.\n[…]\nBronze (escultura)\n[…]\nIdade do bronze",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Latão",
      "descricao": "Liga metálica amarelada de cobre e zinco, usada em instrumentos de sopro, fechaduras e torneiras."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Usado em trompetes, trombones e saxofones, o latão é uma liga de cobre com que metal?",
    "resposta": "Zinco",
    "distratores": [
      "Estanho",
      "Níquel",
      "Chumbo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brass"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brass",
        "situacao": "ok",
        "texto": "Brass is an alloy of copper and zinc, in proportions which can be varied to achieve different colours and mechanical, electrical, acoustic, and chemical properties, but copper typically has the larger proportion, generally 2⁄3 copper and 1⁄3 zinc. In use since prehistoric times, it is a substitutional alloy: atoms of the two constituents may replace each other within the same crystal structure.\n[…]\nWork in brass or bronze continued to be important in Benin art and other West African traditions such as Akan goldweights, where the metal was regarded as a more valuable material than in Europe. Brass Manilla (money) bracelets were also used as a means of exchange, across West Africa, into the 20th century.\n[…]\n16th-century technical writers such as Biringuccio, Ercker and Agricola described a variety of cementation brass making techniques and came closer to understanding the true nature of the process noting that copper became heavier as it changed to brass and that it became more golden as additional calamine was added. Zinc metal was also becoming more commonplace.\n[…]\nEventually it was discovered that metallic zinc could be alloyed with copper to make brass, a process known as speltering, and by 1657 the German chemist Johann Glauber had recognized that calamine was \"nothing else but unmeltable zinc\" and that zinc was a \"half ripe metal\".\n[…]\nBy 1559 the Germany city of Aachen alone was capable of producing 300,000 cwt of brass per year. After several false starts during the 16th and 17th centuries the brass industry was also established in England taking advantage of abundant supplies of cheap copper smelted in the new coal fired reverberatory furnace. In 1723 Bristol brass maker Nehemiah Champion patented the use of granulated copper, produced by pouring molten metal into cold water."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lat%C3%A3o",
        "situacao": "ok",
        "texto": "O  latão é uma liga metálica de cobre e zinco com percentagens deste último entre 3% a 45%, dependendo do tipo de latão.\n[…]\nApesar da base ser formada por cobre e zinco, outros metais podem ser adicionados, e variando a quantidade e a proporção destes metais, alteram-se as propriedades da liga. Ocasionalmente se adicionam pequenas quantidades de alumínio, estanho, chumbo e arsênio para potencializar algumas das características dessa ligação, dependendo de como e onde a liga será utilizada.\n[…]\nLiga de Aich tipicamente contém 60,66% de Cobre, 36,58% de Zinco, 1,02% de Estanho e 1,74% de Ferro. Foram projetados para uso em atmosfera marinha devido a sua resistência a corrosão, dureza e tenacidade. Uma aplicação característica é a proteção de costados de navios, embora métodos mais modernos de proteção catódica tornaram seu uso menos comum. Possui uma cor semelhante à do ouro;\n[…]\nLatão de príncipe Rupert é um tipo de latão alfa contendo 75% de Cobre e 25% de zinco. Devido a sua bela cor amarela característica, é utilizado em bijuterias como imitação de ouro. A liga é assim chamada por causa do príncipe Ruperto do Reno;\n[…]\nLatão alfa-beta (metal Muntz), também chamado latão duplex, possui de 35 a 45% de zinco e é adequado para ser trabalhado a quente. Contém ambas as fases α e β'. A fase β' é cúbica de corpo centrado e é mais dura e resistente do que α;\n[…]\nLatão para cartuchos é um latão com 30% de zinco com boas propriedades para trabalho a frio. Utilizado para cartuchos de munição de armas de fogo;\n[…]\nLatão comum, ou latão de rebite, é um latão com 37% de zinco, barato e padrão para trabalho a frio;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Aço",
      "descricao": "Liga de ferro com pequena quantidade de carbono, o material metálico mais usado na construção e na indústria."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Mais resistente que o ferro puro, o aço nasce da mistura do ferro com uma pequena porção de que elemento?",
    "resposta": "Carbono",
    "fonte": [
      "https://en.wikipedia.org/wiki/Steel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Steel",
        "situacao": "ok",
        "texto": "Steel is an alloy of iron and carbon that demonstrates improved mechanical properties compared to the pure form of iron. Due to its high elastic modulus, yield strength, fracture strength and low raw material cost, steel is one of the most commonly manufactured materials in the world. Steel is used in structures (as concrete reinforcing rods or steel beams), in bridges, infrastructure, tools, ship\n[…]\nSteel is defined as an alloy of iron and carbon and often other elements, with a carbon content up to 2.14%. Iron and carbon are always the main elements in steel, but other elements are used to produce various grades of steel, demonstrating altered material, mechanical, and microstructural properties. Stainless steels, for example, typically contain 18% chromium and exhibit improved corrosion and oxidation resistance versus their carbon steel counterpart.\n[…]\nAlloy steels are plain-carbon steels in which small amounts of alloying elements like chromium and vanadium have been added. Some more modern steels include tool steels, which are alloyed with large amounts of tungsten and cobalt or other elements to maximize solution hardening. This also allows the use of precipitation hardening and improves the alloy's temperature resistance. Tool steel is generally used in axes, drills, and other devices that need a sharp, long-lasting cutting edge.\n[…]\nOther special-purpose alloys include weathering steels such as Cor-ten, which weather by acquiring a stable, rusted surface, and so can be used un-painted. Maraging steel is alloyed with nickel and other elements, but unlike most steel contains little carbon (0.01%). This creates a very strong but still malleable steel.\n[…]\nCarbon fibre is replacing steel in reinforcement-based applications owing to its high modulus value (up to 5 times higher than steel), but its high cost is a barrier to widespread use in transportation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A%C3%A7o",
        "situacao": "ok",
        "texto": "O aço é uma liga metálica formada essencialmente por ferro e carbono, com percentagens deste último variando entre 0,008 e 2,11%. Distingue-se do ferro fundido, que também é uma liga de ferro e carbono, mas com teor de carbono acima de 2,11%. O carbono é um material muito usado nas ligas de ferro, porém varia com o uso de outros elementos como: magnésio, cromo, vanádio, nióbio e tungstênio.\n[…]\nO carbono e outros elementos químicos agem com o agente de resistência,  prevenindo o deslocamento em que um átomo de ferro em uma estrutura cristalina passa para outro. A diferença fundamental entre ambos é que o aço, pela sua ductibilidade, é facilmente deformável por forja, laminação e extrusão, enquanto que uma peça em ferro fundido é muito frágil.\n[…]\nA classificação mais comum é de acordo com a composição química, dentre os sistemas de classificação química o SAE é o mais utilizado, e adota a notação ABXX, em que AB se refere a elementos de liga adicionados intencionalmente, e XX ao percentual em peso de carbono multiplicado por cem.\n[…]\nNo aço comum o teor de impurezas (elementos além do ferro e do carbono) estará sempre abaixo dos 2%. Acima dos 2 até 5% de outros elementos já pode ser considerado aço de baixa-liga, acima de 5% é considerado de alta-liga. O enxofre e o fósforo são elementos prejudicais ao aço pois acabam por intervir nas suas propriedades físicas, deixando-o quebradiço.\n[…]\nNBR 8653 – Metalografia e tratamentos térmicos e termoquímicos das ligas ferro carbono –terminologia\n[…]\nOs diversos tipos de aço são classificados e denominados por normas nacionais (NBR) e internacionais (ASTM) de acordo com sua aplicação e propriedades mecânicas (principalmente a resistência ao escoamento e resistência à ruptura, no caso de aços estruturais).Com isso o ferro (ou Aço ) Se torna Mais forte\n[…]\nA propriedades médias de um aço com 0,2% de carbono em peso giram em torno de:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Vinagre",
      "descricao": "Condimento ácido obtido pela fermentação acética do vinho ou de outras bebidas alcoólicas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Formado pela fermentação do vinho e de outras bebidas, que ácido dá ao vinagre seu sabor azedo?",
    "resposta": "Ácido acético",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vinegar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vinegar",
        "situacao": "ok",
        "texto": "Vinegar (from Old French  vyn egre 'sour wine') is an odorous aqueous solution of diluted acetic acid and trace compounds that may include flavorings or naturally occurring organic compounds. Vinegar typically contains from 4% to 18% acetic acid by volume.\n[…]\nCane vinegars from Ilocos are made in two different ways. One way is to simply place sugar cane juice in large jars; it becomes sour by the direct action of bacteria on the sugar. The other way is through fermentation to produce a traditional wine known as basi. Low-quality basi is then allowed to undergo acetic acid fermentation that converts alcohol into acetic acid. Contaminated basi also becomes vinegar.\n[…]\nThe term \"spirit vinegar\" is sometimes reserved for the stronger variety (5% to 24% acetic acid) made from sugar cane or chemically produced acetic acid. To be called \"spirit vinegar\", the product must come from an agricultural source and must be made by \"double fermentation\". The first fermentation is sugar to alcohol, and the second is alcohol to acetic acid.\n[…]\nSherry vinegar is linked to the production of sherry wines of Jerez. Dark mahogany in color, it is made exclusively from the acetic fermentation of wines. It is concentrated and has generous aromas, including a note of wood, ideal for vinaigrettes and flavoring various foods.\n[…]\nThe term \"distilled vinegar\" as used in the United States (called \"spirit vinegar\" in the UK, \"white vinegar\" in Canada) is something of a misnomer because it is not produced by distillation of vinegar, but by fermentation of distilled alcohol. The fermentate is diluted to produce a colorless solution of 5 to 8% acetic acid in water, with a pH of about 2.6."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vinagre",
        "situacao": "ok",
        "texto": "O termo vinagre, deriva do francês vinaigre, que quer dizer vinho agre ou azedo. O vinagre é um contaminante indesejável na fabricação de vinhos. É, entretanto, um composto bastante utilizado no preparo de alimentos.\n[…]\nA produção do vinagre envolve três tipos de alterações bioquímicas:\n[…]\numa fermentação alcoólica de um carboidrato;\n[…]\numa oxidação do álcool até ácido acético.\n[…]\nEmprega-se uma fermentação por leveduras para a produção do álcool. A concentração alcoólica é ajustada entre 10 a 13%, sendo, então, exposta às bactérias do ácido acético (é um processo aeróbio), que vai oxidar a solução alcoólica até que se produza o vinagre na concentração desejada.\n[…]\nA fermentação, onde se deseja um aroma bom, é obtida pela ação de cultura pura de Saccharomyces cerevisiae, ou S. cerevisiae da variedade ellipsoideus. Para fermentação acética, emprega-se organismos mistos do gênero Acetobacter.\n[…]\nCom o aumento da produção de bebidas em embalagens plásticas, as bactérias acéticas não fermentativas tornaram-se mais importantes. Várias razões contribuíram para este fato, entre elas, a resistência de Gluconobacter a sanitizantes comumente empregados na indústria engarrafadora de bebidas, sua habilidade de crescer na presença de ácido ascórbico e ácido benzoico, e os altos níveis que caracterizam as bebidas em recipientes plásticos.\n[…]\nDe acordo com o FDA (Food and Drug Administration) a definição e padronização de um dos tipos de vinagre são: vinagre, vinagre de sidra e vinagre de maçã — produto obtido pelas fermentações alcoólica e subsequentemente acética do suco de maçãs. Contém, em 100 centímetros cúbicos a 20°C, não menos do que 4 gramas de ácido acético.\n[…]\nÁcido acético (uso médico)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Rubi",
      "descricao": "Pedra preciosa vermelha, variedade do mineral coríndon colorida por traços de cromo."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O rubi é feito de coríndon, mineral que puro é incolor. Traços de que metal lhe dão a cor vermelha?",
    "resposta": "Cromo",
    "distratores": [
      "Ferro",
      "Cobre",
      "Cobalto"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ruby"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ruby",
        "situacao": "ok",
        "texto": "Ruby is a pinkish-red to blood-red-colored gemstone, a variety of the mineral corundum, consisting of aluminium oxide (α-Al2O3). Ruby is one of the most popular traditional jewelry gems and is very durable. Other varieties of gem-quality corundum are called sapphires, and rubies are also sometimes referred to as \"red sapphires\".\n[…]\nRubies have a hardness of 9.0 on the Mohs scale of mineral hardness. Among the natural gems, only moissanite and diamond are harder, with diamond having a Mohs hardness of 10.0 and moissanite falling somewhere in between corundum (ruby) and diamond in hardness.\n[…]\nIf a color needs to be added, the glass powder can be \"enhanced\" with copper or other metal oxides as well as elements such as sodium, calcium, potassium etc.\n[…]\nList of minerals\n[…]\nWebmineral crystallographic and mineral info"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rubi",
        "situacao": "ok",
        "texto": "O rubi é uma pedra preciosa rosa a vermelho-sangue, uma variedade de corindo mineral (óxido de alumínio). Outras variedades de corindo com qualidade de gema são chamadas safiras. O rubi é uma das joias cardinais tradicionais, junto com ametista, safira, esmeralda e diamante. A palavra rubi vem de \"ruber\", latim para vermelho.\n[…]\nO rubi é uma pedra preciosa que vai de tons de vermelho a tons de cor de rosa.\n[…]\nO rubi é minerado na África, Ásia e na Austrália. Eles são mais comuns em Myanmar, no Sri Lanka e na Tailândia, porém também são encontrados em Montana e na Carolina do Sul nos Estados Unidos e Moçambique em África. Algumas vezes ocorrem juntamente com espinelas nas mesmas formações geológicas ocorrendo confusão entre as duas espécies: no entanto, bons exemplares de espinelas vermelhas têm um valor próximo do rubi.\n[…]\nO rubi tem dureza 9 na escala de Mohs, e entre as gemas naturais somente é ultrapassado pelo diamante em termos de dureza. As variedades de corindo não vermelhas são conhecidas como safiras.\n[…]\nAs gemas de rubi são valorizadas de acordo com várias características incluindo tamanho, cor, claridade e corte. Todos os rubis naturais contêm imperfeições. Por outro lado, rubis artificiais podem não conter imperfeições. Alguns rubis manufaturados têm substâncias adicionadas a eles para que possam ser identificados como artificiais, mas a maioria requer testes gemológicos para determinar a sua origem.\n[…]\nFoi usado um rubi sintético para criar o primeiro laser.\n[…]\nO maior rubi estrela do mundo é o Rajaratna, que pesa 495 g.\n[…]\nLista de minerais",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Porcelana",
      "descricao": "Cerâmica branca, fina e translúcida, feita de caulim queimado em alta temperatura, criada na China."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que argila branca e fina é a principal matéria-prima da porcelana?",
    "resposta": "Caulim",
    "fonte": [
      "https://en.wikipedia.org/wiki/Porcelain",
      "https://pt.wikipedia.org/wiki/Caulim"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Porcelain",
        "situacao": "ok",
        "texto": "Porcelain (), also called china, is a ceramic material made by heating raw materials, generally including kaolinite, in a kiln to temperatures between 1,200 and 1,400 °C (2,200 and 2,600 °F). The greater strength and translucence of porcelain, relative to other types of pottery, arise mainly from vitrification and the formation of the mineral mullite within the body at these high temperatures.\n[…]\nA body for electrical porcelain typically contains varying proportions of ball clay, kaolin, feldspar, quartz, calcined alumina and calcined bauxite. A variety of secondary materials can also be used, such as binders which burn off during firing. UK manufacturers typically fired the porcelain to a maximum of 1200 °C in an oxidising atmosphere, whereas reduction firing is standard practice at Chinese manufacturers.\n[…]\nA type of porcelain characterised by low thermal expansion, high mechanical strength and high chemical resistance. Used for laboratory ware, such as reaction vessels, combustion boats, evaporating dishes and Büchner funnels. Raw materials for the body include kaolin, quartz, feldspar, calcined alumina, and possibly also low percentages of other materials. A number of International standards specify the properties of the porcelain, such as ASTM C515.\n[…]\nWhilst modern sanitaryware, such as toilets and washbasins, is made of ceramic materials, porcelain is no longer used and vitreous china is the dominant material. Bath tubs are not made of porcelain, but of enamel on a metal base, usually of cast iron. Porcelain enamel is a marketing term used in the US, and is not porcelain but vitreous enamel.\n[…]\nGleeson, Janet (1998). The Arcanum: The Extraordinary True Story of the Invention of European Porcelain. Bantam Press. ISBN 978-0-59304-348-6\n[…]\nRackham, Bernard. A Book of Porcelain at Project Gutenberg\n[…]\nHow porcelain is made\n[…]\nHow bisque porcelain is made\n[…]\nArtLex Art Dictionary – Porcelain"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caulim",
        "situacao": "ok",
        "texto": "Caulim ou caulino é um minério composto de silicatos hidratados de alumínio, como a caulinita e a haloisita, e apresenta características especiais que permitem sua utilização na fabricação de papel, cerâmica, tintas, etc.\n[…]\nO termo caulim deriva da palavra Kauling («colina alta», em chinês), originário da colina de Jauchau Fu, ao norte da China, de onde o material tem sido obtido há décadas.\n[…]\nO caulim teve a sua utilização industrial na fabricação de artigos de porcelana iniciada há vários séculos. A partir de 1920 teve início a sua aplicação na industria de papel, seguida pelo uso na indústria da borracha. Mais recentemente, o caulim passou a ser utilizado na industrialização de plásticos, pesticidas, rações, produtos alimentícios, farmacêuticos, fertilizantes e outras variedades de aplicações industriais.\n[…]\nDesfloculação – é o ponto no qual o caulim (na forma de uma Porcelana) mais se aproxima de sua viscosidade mínima\n[…]\nO caulim cerâmico deve possuir um teor de caulinta entre 75 e 85% e não ter minerais que afetem a cor de queima, como o Fe2O3, cujo teor deve ser menor que 0,9%, de modo que a cor de alvura, após a queima, esteja na faixa de 85-92% (DA LUZ et. al 2003).\n[…]\nOcorre sob a forma de alteração de feldspatos, feldspatóides e outros silicatos, durante o intemperismo químico e também hidrotermal em rochas cristalinas (caulim primário). Pode formar-se também por processos diagenéticos em bacias sedimentares. Portanto pode ser formado às expensas de muitos minerais e rochas e em quantidades consideráveis (caulim secundário).\n[…]\nDA LUZ, A. B.; DAMASCENO, E. C. (1993) Caulim um Mineral Industrial Importante. CETM/CNPq, Série Tecnologia Mineral No. 65,\n[…]\nKULAIF, Y. (2005). Caulim. IG/UNICAMP"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Porcelana",
      "descricao": "Cerâmica branca, fina e translúcida, feita de caulim queimado em alta temperatura, criada na China."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que país surgiu a porcelana, tão ligada a ele que em inglês a louça fina leva o nome do país?",
    "resposta": "China",
    "fonte": [
      "https://en.wikipedia.org/wiki/Porcelain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Porcelain",
        "situacao": "ok",
        "texto": "Porcelain (), also called china, is a ceramic material made by heating raw materials, generally including kaolinite, in a kiln to temperatures between 1,200 and 1,400 °C (2,200 and 2,600 °F). The greater strength and translucence of porcelain, relative to other types of pottery, arise mainly from vitrification and the formation of the mineral mullite within the body at these high temperatures.\n[…]\nThough definitions vary, porcelain can be divided into three main categories: hard-paste, soft-paste, and bone china. The categories differ in the composition of the body and the firing conditions.\n[…]\nThe first soft-paste in England was demonstrated by Thomas Briand to the Royal Society in 1742 and is believed to have been based on the Saint-Cloud formula. In 1749, Thomas Frye took out a patent on a porcelain containing bone ash. This was the first bone china, subsequently perfected by Josiah Spode.\n[…]\nWilliam Cookworthy discovered deposits of kaolin in Cornwall, and his factory at Plymouth, established in 1768, used kaolin and china stone to make hard-paste porcelain with a body composition similar to that of the Chinese porcelains of the early 18th century.\n[…]\nBut the great success of English ceramics in the 18th century was based on soft-paste porcelain, and refined earthenwares such as creamware, which could compete with porcelain, and had devastated the faience industries of France and other continental countries by the end of the century. Most English porcelain from the late 18th century to the present is bone china.\n[…]\nWhilst modern sanitaryware, such as toilets and washbasins, is made of ceramic materials, porcelain is no longer used and vitreous china is the dominant material. Bath tubs are not made of porcelain, but of enamel on a metal base, usually of cast iron. Porcelain enamel is a marketing term used in the US, and is not porcelain but vitreous enamel.\n[…]\nHow porcelain is made"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Porcelana",
        "situacao": "ok",
        "texto": "A porcelana é um material cerâmico, branco impermeável, translúcido e de aspecto brilhante, que se distingue de outros produtos cerâmicos, especialmente, da faiança e da louça, pela sua vitrificação, transparência, resistência, completa isenção de porosidade e sonoridade.\n[…]\nCom efeito, a primeira alusão do género surge por referência ao \"pequeno jarro verde-acinzentado\" que Marco Polo trouxe da sua viagem pelo Oriente, especificamente da China.\n[…]\nA porcelana é uma variedade de cerâmica dura e resistente, branca, às vezes translúcida, que é preparada a partir de uma mistura triaxial de caulim, feldspato e quartzo.\n[…]\nTodas as evidências apontam para o surgimento da porcelana na China da época \"Tang\" que teve na época \"Song\" a sua mais refinada produção com o afinamento da massa, elegância de formas e introdução de novos vernizes, culminando, na época \"Ming\" com expansão e desenvolvimento até o século XIX.\n[…]\nForam os portugueses quem, pelas suas longas e temerárias navegações, introduziram nos mercados europeus a porcelana. Foi Frei Gaspar da Cruz que expôs os processos pelos quais se obtinha, na China, esse produto. Desde o século XVI, graças às importações pelas Companhias das Índias, a produção europeia se limitou a copiar toscamente a porcelana oriental, como a produção de Florença.\n[…]\nOs filetes são aplicados com dois tipos de pincéis: a trincha (pincel largo e sem ponta) e o pincel fino (de ponta fina e delicada). As peças são colocadas em um torno para que possam girar livremente, assim a mão do filetador pode ficar apoiada e fixa evitando falhas no filete.\n[…]\nApós as queimas a porcelana é lixada para retirar algum resíduo do decalque. Após esta operação a mercadoria já pode ser embalada e comercializada.\n[…]\nPorcelanato\n[…]\nHistória da porcelana no Brasil",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Gesso",
      "descricao": "Pó branco obtido pelo aquecimento da gipsita, usado em construção, moldes e imobilização de fraturas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Usado em forros, moldes e para imobilizar ossos quebrados, o gesso é obtido aquecendo que mineral?",
    "resposta": "Gipsita",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gypsum",
      "https://pt.wikipedia.org/wiki/Gipsita"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gypsum",
        "situacao": "ok",
        "texto": "Gypsum is a soft sulfate mineral composed of calcium sulfate dihydrate, with the chemical formula CaSO4·2H2O. It is widely mined and is used as a fertilizer and as the main constituent in many forms of plaster, drywall and blackboard or sidewalk chalk. Gypsum also crystallizes as translucent crystals of selenite. It forms as an evaporite mineral and as a hydration product of anhydrite. The Mohs sc\n[…]\nCrystals of gypsum up to 11 m (36 ft) long have been found in the caves of the Naica Mine of Chihuahua, Mexico. The crystals thrived in the cave's extremely rare and stable natural environment. Temperatures stayed at 58 °C (136 °F), and the cave was filled with mineral-rich water that drove the crystals' growth. The largest of those crystals weighs 55 tonnes (61 short tons) and is around 500,000 years old.\n[…]\nGypsum precipitates onto brackish water membranes, a phenomenon known as mineral salt scaling, such as during brackish water desalination of water with high concentrations of calcium and sulfate. Scaling decreases membrane life and productivity. This is one of the main obstacles in brackish water membrane desalination processes, such as reverse osmosis or nanofiltration.\n[…]\nA new study has suggested that the formation of gypsum starts as tiny crystals of a mineral called bassanite (2CaSO4·H2O). This process occurs via a three-stage pathway:\n[…]\nIn the medieval period, scribes and illuminators used it as an ingredient in gesso, which was applied to illuminated letters and gilded with gold in illuminated manuscripts.\n[…]\nUsed in baking as a dough conditioner, reducing stickiness, and as a baked goods source of dietary calcium. The primary component of mineral yeast food.\n[…]\nMineral galleries – gypsum\n[…]\nusgs.gov (Mineral Commodity Summaries 2025): Gypsum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gipsita",
        "situacao": "ok",
        "texto": "Gipsite (português europeu) ou gipsita (português brasileiro), também chamada pedra de gesso, gesso (do grego gypsos) ou sulfato de cálcio hidratado, é um minério de cálcio cuja composição química corresponde à fórmula Ca(SO4) • 2H2O.\n[…]\nO gipsito é, basicamente, composta por sulfato de cálcio hidratado.\n[…]\nA presença de depósitos de gipsita em Marte detectada pela sonda Opportunity é tratada como uma evidência de que houve água corrente na superfície do planeta no passado.\n[…]\nAtravés da calcinação, a gipsita perde sua água de cristalização, podendo, então, ser transformada em gesso quando mantém água cristalizada (CaSO4 + 1/2 H2O), ou sulfato de cálcio  (anidrita) quando perde totalmente a água cristalizada.\n[…]\nÉ usada principalmente na fabricação de cimento, como também na fabricação de ácido sulfúrico, giz, vidros, esmaltes, gesso e na produção de cerveja. É usada também como molde para fundição; desidratante; aglutinante e corretivo de solo (fornecedor de cálcio e enxofre), além de possuir aplicação na metalurgia (na formação de escória, entre outras aplicações.)\n[…]\nOs Estados Unidos são os maiores produtores e consumidores mundiais de gipsito; enquanto a sua produção, em 2001, foi da ordem de 19 milhões de toneladas, a de outros países grandes produtores foi a metade, ou um terço.[carece de fontes]? Em termos mundiais, a indústria cimenteira é a maior consumidora, enquanto nos países desenvolvidos a indústria de gesso e seus derivados absorve a maior parte da gipsito produzida.\n[…]\nA gipsito também pode ser fabricada de maneira artificial (sintetizada), através de um processo industrial no qual ocorre a precipitação a partir de carbonato de cálcio e ácido sulfúrico:\n[…]\nLista dos minerais"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Gás liquefeito de petróleo",
      "descricao": "Mistura de gases derivados do petróleo, vendida em botijões como gás de cozinha."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O gás do botijão de cozinha é uma mistura de dois gases derivados do petróleo. Quais são eles?",
    "resposta": "Propano e butano",
    "fonte": [
      "https://pt.wikipedia.org/wiki/G%C3%A1s_liquefeito_de_petr%C3%B3leo",
      "https://en.wikipedia.org/wiki/Liquefied_petroleum_gas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/G%C3%A1s_liquefeito_de_petr%C3%B3leo",
        "situacao": "ok",
        "texto": "O gás liquefeito de petróleo (GLP), também chamado de gás de petróleo liquefeito (GPL) e conhecimento coloquialmente como gás de cozinha no Brasil, é uma mistura de gases de hidrocarbonetos utilizado como combustível em aplicações de aquecimento (como em fogões) e veículos.\n[…]\nO GLP ou GPL é a mistura de gases condensáveis presentes no gás natural ou dissolvidos no petróleo. Os componentes do GLP, embora à temperatura e pressão ambientais sejam gases, são fáceis de condensar. Na prática, pode-se dizer que o GLP é uma mistura dos gases propano e butano.\n[…]\nO propano e o butano estão presentes no petróleo (crude, bruto) e no gás natural, embora uma parte se obtenha durante a refinação de petróleo, sobretudo como subproduto do processo de craqueamento catalítico (FCC, da sigla em inglês Fluid Catalytic Cracking).\n[…]\nO GLP é formado por vários hidrocarbonetos, sendo os principais o propano e o butano. Uma molécula de propano é caracterizada pela presença de três átomos de carbono e oito átomos de hidrogênio (C3H8). Já o butano, pela presença de quatro átomos de carbono e dez átomos de Hidrogênio (C4H10). Portanto, uma molécula de butano é mais pesada do que uma molécula de propano e a sua tendência em uma mistura é a de ficar depositada no fundo do recipiente de armazenagem.\n[…]\nAo percentual de mistura desses gases chama-se no jargão densidade (relacionado ao conceito de densidade, relacionado à massa por volume). Quanto maior a presença percentual de propano na mistura, menor a densidade do produto e consequentemente menor o peso do mesmo. Ao contrário, quanto maior o percentual de butano na mistura maior a densidade e consequentemente o seu peso.\n[…]\nGás natural liquefeito\n[…]\nLiquefação de gases\n[…]\nGás liquefeito de petróleo (GLP) Petrobras"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Liquefied_petroleum_gas",
        "situacao": "ok",
        "texto": "Liquefied petroleum gas, also referred to as liquid petroleum gas (LPG or LP gas), is a fuel gas which contains a flammable mixture of hydrocarbon gases, specifically propane, butane and isobutane. It can also contain some propylene, butylene, and isobutylene.\n[…]\nWhen LPG is used to fuel internal combustion engines, it is often referred to as autogas or auto propane. In some countries, it has been used since the 1940s as a petrol alternative for spark ignition engines. In some countries, there are additives in the liquid that extend engine life and the ratio of butane to propane is kept quite precise in fuel LPG.\n[…]\nLPG has a lower energy density per liter than either petrol or fuel-oil, so the equivalent fuel consumption is higher. Many governments impose less tax on LPG than on petrol or fuel-oil, which helps offset the greater consumption of LPG than of petrol or fuel-oil. However, in many European countries, this tax break is often compensated by a much higher annual tax on cars using LPG than on cars using petrol or fuel-oil. Propane is the third most widely used motor fuel in the world.\n[…]\n2013 estimates are that over 24.9 million vehicles are fueled by propane gas worldwide. Over 25 million tonnes (over 9 billion US gallons) are used annually as a vehicle fuel.\n[…]\nLPG is composed mainly of propane and butane, while natural gas is composed of the lighter methane and ethane. LPG, vaporised and at atmospheric pressure, has a higher calorific value (46 MJ/m3 equivalent to 12.8 kWh/m3) than natural gas (methane) (38 MJ/m3 equivalent to 10.6 kWh/m3), which means that LPG cannot simply be substituted for natural gas.\n[…]\nBeing a mix of propane and butane, LPG emits less carbon per joule than butane but more carbon per joule than propane."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Gás liquefeito de petróleo",
      "descricao": "Mistura de gases derivados do petróleo, vendida em botijões como gás de cozinha."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os gases do botijão de cozinha não têm cheiro natural. Por que, então, sentimos um cheiro forte quando ele vaza?",
    "resposta": "Recebe um odorizante, a mercaptana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Liquefied_petroleum_gas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Liquefied_petroleum_gas",
        "situacao": "ok",
        "texto": "Liquefied petroleum gas, also referred to as liquid petroleum gas (LPG or LP gas), is a fuel gas which contains a flammable mixture of hydrocarbon gases, specifically propane, butane and isobutane. It can also contain some propylene, butylene, and isobutylene.\n[…]\nIn the United States, tetrahydrothiophene (thiophane) or amyl mercaptan are also approved odorants, although neither is currently being utilized.\n[…]\nLPG is prepared by refining petroleum or \"wet\" natural gas, and is almost entirely derived from fossil fuel sources, being manufactured during the refining of petroleum (crude oil), or extracted from petroleum or natural gas streams as they emerge from the ground. It was first produced in 1910 by Walter O. Snelling, and the first commercial products appeared in 1912. It currently provides about 3% of all energy consumed, and burns relatively cleanly with no soot and very little sulfur emission.\n[…]\nGlobal LPG production reached over 292 million metric tons per year (Mt/a) in 2015, while global LPG consumption to over 284 Mt/a. 62% of LPG is extracted from natural gas while the rest is produced by petroleum refineries from crude oil. 44% of global consumption is in the domestic sector. The U.S. is the leading producer and exporter of LPG.\n[…]\nIn order to allow the use of the same burner controls and to provide for similar combustion characteristics, LPG can be mixed with air to produce a synthetic natural gas (SNG) that can be easily substituted. LPG/air mixing ratios average 60/40, though this is widely variable based on the gases making up the LPG. The method for determining the mixing ratios is by calculating the Wobbe index of the mix. Gases having the same Wobbe index are held to be interchangeable.\n[…]\nCompressed natural gas (CNG)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/G%C3%A1s_liquefeito_de_petr%C3%B3leo",
        "situacao": "ok",
        "texto": "O gás liquefeito de petróleo (GLP), também chamado de gás de petróleo liquefeito (GPL) e conhecimento coloquialmente como gás de cozinha no Brasil, é uma mistura de gases de hidrocarbonetos utilizado como combustível em aplicações de aquecimento (como em fogões) e veículos.\n[…]\nO GLP ou GPL é a mistura de gases condensáveis presentes no gás natural ou dissolvidos no petróleo. Os componentes do GLP, embora à temperatura e pressão ambientais sejam gases, são fáceis de condensar. Na prática, pode-se dizer que o GLP é uma mistura dos gases propano e butano.\n[…]\nO propano e o butano estão presentes no petróleo (crude, bruto) e no gás natural, embora uma parte se obtenha durante a refinação de petróleo, sobretudo como subproduto do processo de craqueamento catalítico (FCC, da sigla em inglês Fluid Catalytic Cracking).\n[…]\nO GLP é um dos subprodutos do petróleo, como a gasolina, diesel e os óleos lubrificantes, sendo retirado do mesmo através de refino em uma refinaria de petróleo. Torna-se liquefeito apenas quando é armazenado em bilhas/botijões ou tanques de aço em pressões de 6 a 8 atmosferas (6 a 8 kgf/cm²).\n[…]\nEm grandes consumos, onde não é suficiente a vaporização natural para atender a demanda, são utilizados aparelhos chamados de vaporizadores que possibilitam a vaporização do produto.\n[…]\nO GLP não é corrosivo, poluente e nem tóxico, mas se inalado em grande quantidade produz efeito anestésico e também asfixia, pois empurra o gás respirável do ambiente em que se encontra. O GLP não possui cor nem odor próprio, mas por motivo de segurança nele é adicionada a substância (mercaptano ou tiol) ainda nas refinarias, para facilitar sua detecção.\n[…]\nGás natural liquefeito\n[…]\nLiquefação de gases\n[…]\nGás liquefeito de petróleo (GLP) Petrobras",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Pedra-sabão",
      "descricao": "Rocha macia rica em talco, usada em panelas e esculturas, como as do Aleijadinho em Minas Gerais."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A pedra-sabão, em que Aleijadinho esculpiu os profetas de Congonhas, é macia por ser rica em que mineral?",
    "resposta": "Talco",
    "distratores": [
      "Quartzo",
      "Mica",
      "Calcita"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Soapstone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Soapstone",
        "situacao": "ok",
        "texto": "Soapstone (also known as steatite or soaprock) is a talc-schist, which is a type of metamorphic rock. It is composed largely of the magnesium-rich mineral talc. It is produced by dynamothermal metamorphism and metasomatism, which occur in subduction zones, changing rocks by heat and pressure, with influx of fluids but without melting. It has been a carving medium for thousands of years.\n[…]\nThe definitions of the terms \"steatite\" and \"soapstone\" vary with the field of study. In geology, steatite is a rock that is, to a very large extent, composed of talc. The mining industry defines steatite as a high-purity talc rock that is suitable for the manufacturing of, for example, insulators; the lesser grades of the mineral can be called simply \"talc rock\". Steatite can be used both in lumps (\"block steatite\", \"lava steatite\", \"lava grade talc\"), and in the ground form.\n[…]\nPyrophyllite, a mineral very similar to talc, is sometimes called soapstone in the generic sense, since its physical characteristics and industrial uses are similar, and because it is also commonly used as a carving material. However, this mineral typically does not have as soapy a feel as soapstone.\n[…]\nSome of the oldest towns, notably Congonhas, Tiradentes, and Ouro Preto, still have some of their streets paved with soapstone from colonial times.\n[…]\nArchitectural soapstone is mined in Canada, Brazil, India, and Finland and imported into the United States. Active North American mines include one south of Quebec City with products marketed by Canadian Soapstone, the Treasure and Regal mines in Beaverhead County, Montana mined by the Barretts Minerals Company, and another in central Virginia operated by the Alberene Soapstone Company.\n[…]\nList of minerals"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Esteatito",
        "situacao": "ok",
        "texto": "Esteatite (também pedra de talco ou pedra-sabão) é uma rocha metamórfica, compacta, composta sobretudo de talco (também chamado de esteatite ou esteatita), mas contendo muitos outros minerais como magnesita, clorita, tremolita e quartzo, por exemplo. É uma rocha muito branda e de baixa dureza, por conter grandes quantidades de talco na sua constituição. A pedra-sabão é encontrada em cores que vão \n[…]\nA pedra-sabão tem sido usada na Índia durante séculos como material para esculturas. A mineração desta pedra para atender a demanda mundial de talco está ameaçando o habitat natural dos tigres indianos. Os templos do Império Hoysala eram feitos de pedra-sabão.\n[…]\nO Cristo Redentor, obra da primeira metade do século XX (construção de 1922-1931), embora construído em concreto armado, possui em sua superfície um mosaico de pedra-sabão, com milhares de pequenas placas em formato triangular que simbolizam, com  a santíssima trindade.\n[…]\nUtilizar óleo mineral (qualquer tipo de óleo hidrocarbônico, que pode ser adquirido em farmácias). Esfregar o óleo na pedra. Remover excedentes para que não haja aparência de molhado. No passar do tempo, fazer nova aplicação de óleo. Os seladores de pedras produzem pouco efeito sobre a pedra-sabão, em comparação com granito ou ardósia. Fazer a limpeza com esponja ou com pano macio, utilizando água limpa e detergente neutro, se necessário.\n[…]\nAtualmente a pedra sabão têm sido muito utilizada na culinária. Os utensílios para cozinha em pedra sabão são diversos como: Panelas de pedra sabão, panelas de pressão em pedra sabão, grelhas em pedra sabão. Há diversos pontos positivos de se utilizar uma peça de pedra sabão no preparo dos alimentos. Estudos recentes demonstraram que minerais benéficos a saúde como ferro, cálcio, manganês e zinco são transferidos para os alimentos que são cozinhados na panela de pedra.\n[…]\nAleijadinho\n[…]\nSite sobre a Pedra-Sabão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Clorofila",
      "descricao": "Pigmento verde das plantas e algas que capta a luz na fotossíntese."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No centro da molécula de clorofila, o pigmento verde das plantas, fica um átomo de que metal?",
    "resposta": "Magnésio",
    "distratores": [
      "Ferro",
      "Cobre",
      "Zinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chlorophyll"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chlorophyll",
        "situacao": "ok",
        "texto": "Chlorophyll is any of several related photochemical catalysts and green pigments found in cyanobacteria and in the chloroplasts of algae and plants. Its name is derived from the Greek words χλωρός (khloros, \"pale green\") and φύλλον (phyllon, \"leaf\"). Chlorophyll allows plants to absorb energy from light. Those pigments are involved in oxygenic photosynthesis, as opposed to bacteriochlorophylls, wh\n[…]\nThe presence of magnesium in chlorophyll was discovered in 1906, and was the first detection of that element in living tissue.\n[…]\nReaction center chlorophyll–protein complexes are capable of directly absorbing light and performing charge separation events without the assistance of other chlorophyll pigments, but the probability of a single chlorophyll molecule doing so under a given light intensity is small. Thus, the other chlorophylls in the photosystem and antenna pigment proteins all cooperatively absorb and funnel light energy to the reaction center.\n[…]\nSeveral chlorophylls are known. All are defined as derivatives of the parent chlorin by the presence of a fifth, ketone-containing ring beyond the four pyrrole-like rings. Most chlorophylls are classified as chlorins, which are reduced relatives of porphyrins (found in hemoglobin). They share a common biosynthetic pathway with porphyrins, including the precursor uroporphyrinogen III. Unlike hemes, which contain iron bound to the N4 center, most chlorophylls bind magnesium.\n[…]\nIn diethyl ether, chlorophyll a has approximate absorbance maxima of 430 nm and 662 nm, while chlorophyll b has approximate maxima of 453 nm and 642 nm. The absorption peaks of chlorophyll a are at 465 nm and 665 nm. Chlorophyll a fluoresces at 673 nm (maximum) and 726 nm. The peak molar absorption coefficient of chlorophyll a exceeds 105 M−1 cm−1, which is among the highest for small-molecule organic compounds."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Clorofila",
        "situacao": "ok",
        "texto": "Clorofila é o nome de um grupo de pigmentos verdes que permite que plantas, algas e cianobactérias aproveitem a energia da luz na fotossíntese. Nas plantas e nas algas, ela se concentra nos cloroplastos e dá a folhas e outros tecidos grande parte de sua cor verde.\n[…]\nEm 1817, Joseph Bienaimé Caventou e Pierre Joseph Pelletier isolaram o pigmento e lhe deram o nome de clorofila. O termo combina as palavras gregas χλωρός, khloros, \"verde-pálido\", e φύλλον, phyllon, \"folha\". Em 1906, a presença de magnésio na clorofila foi demonstrada.\n[…]\nNo centro da molécula, quatro átomos de nitrogênio formam o chamado centro N4, que na maioria das clorofilas liga um átomo de magnésio, enquanto os hemes ligam ferro. Os ligantes axiais associados ao Mg2+ costumam ser omitidos dos diagramas para deixá-los mais fáceis de ler. Ao redor desse núcleo ficam cadeias laterais, entre elas a longa cadeia fitila, derivada do fitol, presente nas clorofilas a, b, d e f.\n[…]\nEm plantas, a biossíntese tetrapirrólica que leva à clorofila parte do glutamato, forma ácido 5-aminolevulínico e chega à protoporfirina IX, precursor comum das rotas do heme e da clorofila. A inserção de Mg2+ na protoporfirina IX pela magnésio quelatase inicia o ramo dedicado à clorofila. Perto do fim da via, a clorofila sintase esterifica clorofilidas com difosfato de fitila ou de geranilgeranila.\n[…]\nDurante a senescência vegetal, a perda da cor verde acompanha uma sequência regulada de degradação da clorofila. Na via da feoforbídeo a oxigenase e das filobilinas, a clorofila b é primeiro reconvertida em clorofila a. A remoção do magnésio da clorofila a forma feofitina a, e a feofitinase remove a cadeia fitila para produzir feoforbídeo a.\n[…]\nCloroplasto, organela onde a clorofila se concentra em plantas e algas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Água",
      "descricao": "Substância formada por hidrogênio e oxigênio, essencial à vida, considerada um dos quatro elementos pelos antigos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ao contrário da maioria das substâncias, o que acontece com o volume da água quando ela congela?",
    "resposta": "Aumenta, ela se expande",
    "fonte": [
      "https://en.wikipedia.org/wiki/Properties_of_water"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Properties_of_water",
        "situacao": "ok",
        "texto": "Water (H2O) is a polar inorganic compound that is, at room temperature, a tasteless and odorless liquid, which is nearly colorless apart from an inherent hint of blue. It is by far the most studied chemical compound and is described as the \"universal solvent\" and the \"solvent of life\". It is the most abundant substance on the surface of Earth and the only common substance to exist as a solid, liqu\n[…]\nIf a substance has properties that do not allow it to overcome these strong intermolecular forces, the molecules are precipitated out from the water. Contrary to the common misconception, water and hydrophobic substances do not \"repel\", and the hydration of a hydrophobic surface is energetically, but not entropically, favorable.\n[…]\nIn general, ionic and polar substances such as acids, alcohols, and salts are relatively soluble in water, and nonpolar substances such as fats and oils are not. Nonpolar molecules stay together in water because it is energetically more favorable for the water molecules to hydrogen bond to each other than to engage in van der Waals interactions with non-polar molecules.\n[…]\nWater is the most abundant substance on Earth's surface and also the third most abundant molecule in the universe, after H2 and CO. 0.23 ppm of the earth's mass is water and 97.39% of the global water volume of 1.38×109 km3 is found in the oceans.\n[…]\nWater substance is a rare term used for H2O when one does not wish to specify the phase of matter (liquid water, water vapor, some form of ice, or a component in a mixture) though the term water is also used with this general meaning.\n[…]\nRelease on the IAPWS Formulation 1995 for the Thermodynamic Properties of Ordinary Water Substance for General and Scientific Use (simpler formulation)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Propriedades_f%C3%ADsico-qu%C3%ADmicas_da_%C3%A1gua",
        "situacao": "ok",
        "texto": "A água (H2O, HOH) é a molécula mais abundante na superfície da Terra, cobrindo, somente em sua forma líquida, cerca de 71% desta, além de estar presente em abundância na atmosfera terrestre, como vapor, e nos polos, como gelo. Está em equilíbrio dinâmico entre os estados líquido e gasoso nas condições ambientes de temperatura e pressão (21-23 °C, 1 atm). À temperatura ambiente, é um líquido fracam\n[…]\nÀ temperatura ambiente, a água líquida fica mais densa à medida que diminui a temperatura, da mesma forma que as outras substâncias. Mas a 4 °C (3,98 °C, mais precisamente), logo antes de congelar, a água atinge sua densidade máxima e, ao aproximar-se mais do ponto de fusão, a água, sob condições normais de pressão, expande-se e torna-se menos densa. Isso se deve à estrutura cristalina do gelo, conhecido como gelo Ih hexagonal.\n[…]\nA água, o chumbo, o urânio, o neônio e o silício são alguns dos poucos materiais que se expandem ao se solidificar; a maioria dos demais elementos se contrai. Deve-se notar, porém, que nem todas as formas de gelo são menos densas que a água líquida pura. Por exemplo, o gelo amorfo de alta densidade é mais denso que a água pura na fase líquida.\n[…]\nIsso produz gelo essencialmente de água doce a −1,9 °C na superfície. A densidade aumentada da água abaixo do gelo em formação faz com que ela afunde.\n[…]\nAs ligações de hidrogênio também são a causa do comportamento incomum da água em congelamento. Quando a água resfriada até próximo do ponto de fusão, a presença das ligações leva as moléculas, que se reorganizam à medida que perdem energia, a formarem a estrutura cristalina hexagonal do gelo, que tem uma densidade menor: por isso o gelo flutua na água. Em outras palavras, a água se expande ao congelar, ao passo que quase todos os outros materiais se contraem na solidificação.\n[…]\nÁgua destilada\n[…]\nDureza da água",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Tornassol",
      "descricao": "Corante extraído de líquens, usado em papel indicador que muda de cor conforme a acidez."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Feito com um corante extraído de líquens, o papel de tornassol fica de que cor ao entrar em contato com um ácido?",
    "resposta": "Vermelho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Litmus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Litmus",
        "situacao": "ok",
        "texto": "Litmus is a water-soluble mixture of different dyes extracted from lichens. It is often absorbed into filter paper to produce one of the oldest forms of pH indicator, used to test materials for acidity. In an acidic medium, blue litmus paper turns red, while in a basic or alkaline medium, red litmus paper turns blue. In short, it is a dye and indicator which is used to place substances on a pH sca\n[…]\nThe litmus mixture has the CAS number 1393-92-6 and contains 10 to around 15 different dyes. All of the chemical components of litmus are likely to be the same as those of the related mixture known as orcein but in different proportions. In contrast with orcein, the principal constituent of litmus has an average molecular mass of 3300. Acid-base indicators on litmus owe their properties to a 7-hydroxyphenoxazone chromophore.\n[…]\nSome fractions of litmus were given specific names including erythrolitmin (or erythrolein), azolitmin, spaniolitmin, leucoorcein, and leucazolitmin. Azolitmin shows nearly the same effect as litmus.\n[…]\nA recipe to make litmus out of the lichens, as outlined on a UC Santa Barbara website says:\n[…]\nStir the lichens from time to time and the color changes from red to purple and finally blue after about four weeks. The lichens are then dried and powdered. At this stage the lichens contain partly litmus and partly orcein pigments. The orcein is removed by extraction with alcohol, leaving the pure blue litmus. It is marketed as blue lumps, masses, or tablets, after mixing with colorless compounds such as chalk and gypsum. Litmus paper is paper impregnated with this substance.\n[…]\nRed litmus contains a weak diprotic acid. When it is exposed to a basic compound, the hydrogen ions react with the added base. The conjugate base formed from the litmus acid has a blue color, so the wet red litmus paper turns blue in an alkaline solution."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Azul_de_tornassol",
        "situacao": "ok",
        "texto": "Azul de tornassol ou papel tornassol é um indicador solúvel em água extraído de certos líquens. Torna-se vermelho em condições de baixo pH (ácidas), azul em condições de alto pH (básicas) e roxo em condições neutras.\n[…]\nO papel de tornassol, em específico, pode ser usado colocando-o diretamente na solução ou pingando gotas da solução no papel. A mudança de cor não é irreversível.\n[…]\nO papel de tornassol é somente um entre vários tipos de indicadores de pH em forma de tira, com outros indicadores geralmente diferindo em sua faixa de mudança de cor. Um exemplo é o indicador universal.\n[…]\nO tornassol é uma mistura (número CAS: 1393-92-6) de diversos pigmentos orgânicos extraídos de líquens. Sua capacidade indicadora é proporcionada pelo cromóforo 7-hidroxifenoxazina, um ácido fraco.\n[…]\nA mudança de cor do tornassol é governada pelo equilíbrio químico que rege o cromóforo e pelas cores distintas de suas duas formas. Em condições de pH baixo, a forma protonada ácida da 7-hidroxifenoxazina predomina, conferindo ao tornassol uma coloração vermelha. Em condições de pH alto, a base conjugada da 7-hidroxifenoxazina predomina e dá ao tornassol cor azul.\n[…]\nEm condições de pH aproximadamente neutras, tanto a forma ácida vermelha quanto a forma básica azul do cromóforo estão presentes em proporções similares, gerando uma cor roxa intermediária. Este é o mecanismo de funcionamento típico de um equilíbrio ácido-base.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Silício",
      "descricao": "Elemento químico de número atômico 14, semimetal presente na areia e base dos chips eletrônicos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Base dos chips eletrônicos, o silício é um material de que tipo, nem bom condutor de eletricidade nem isolante?",
    "resposta": "Semicondutor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Silicon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Silicon",
        "situacao": "ok",
        "texto": "Silicon (, SILL-ih-kən) is a chemical element; it has symbol Si and atomic number 14. It is a hard, brittle crystalline solid with a blue-grey metallic lustre, and is a tetravalent non-metal (sometimes considered as a metalloid) and semiconductor. It is a member of group 14 in the periodic table: carbon is above it; and germanium, tin, lead, and flerovium are below it. It is relatively unreactive.\n[…]\nThe middle of the 20th century saw the development of the chemistry and industrial use of siloxanes and the growing use of silicone polymers, elastomers, and resins. In the late 20th century, the complexity of the crystal chemistry of silicides was mapped, along with the solid-state physics of doped semiconductors.\n[…]\nBecause silicon is an important element in high-technology semiconductor devices, many places in the world bear its name. For example, the Santa Clara Valley in California acquired the nickname Silicon Valley, as the element is the base material in the semiconductor industry there.\n[…]\nMetallurgical grade silicon is made by melting quartz or quartzite in a large arc furnace, in a carbothermal reduction process with carbon-containing material such as coal, coke or charcoal and woodchips for gas circulation. This production technique without iron is often used for polysilicon production for photovoltaics and also semiconductors.\n[…]\nAn estimated 15% of the world production of metallurgical grade silicon is refined to semiconductor purity. This is typically the \"nine-9\" or 99.9999999% purity, nearly defect-free single crystalline material.\n[…]\nThe market for the lesser grade is growing more quickly than for monocrystalline silicon. By 2013, polycrystalline silicon production, used mostly in solar cells, was projected to reach 200,000 metric tons per year, while monocrystalline semiconductor grade silicon was expected to remain less than 50,000 tons per year."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sil%C3%ADcio",
        "situacao": "ok",
        "texto": "O silício (latim: silex, sílex ou \"pedra dura\") é um elemento químico de símbolo Si de número atômico 14 (14 prótons e 14 elétrons) com massa atômica igual a 28 u. À temperatura ambiente, o silício encontra-se no estado sólido. Foi descoberto pelo químico sueco Jöns Jacob Berzelius, em 1823. O silício é o segundo elemento mais abundante na crosta terrestre, perfazendo mais de 28% de sua massa (atr\n[…]\nUtilizado para a produção de ligas metálicas, na preparação de silicones, na indústria cerâmica e, por ser um material semicondutor muito abundante, tem um interesse muito especial na indústria eletrônica e microeletrônica, como material básico para a produção de transistores para chips, células solares e em diversas variedades de circuitos eletrônicos.\n[…]\nIsto torna a fotônica em silício compatível com a plataforma CMOS (Complementary-Metal-Oxide-Semiconductor). Esta compatibilidade permitiria a integração direta dos elementos fotônicos (lasers, fotodiodos, moduladores) com os eletrônicos (amplificadores, transistores, etc). O sucesso desta integração poderia ter grande impacto na indústria de telecomunicações e computadores.\n[…]\nO silício líquido se acumula no fundo do forno onde é extraído e resfriado. O silício produzido por este processo é denominado metalúrgico apresentando um grau de pureza superior a 99%. Para a construção de dispositivos semicondutores é necessário um silício de maior pureza, silício ultrapuro, que pode ser obtido por métodos físicos e químicos.\n[…]\nDentre os halogenetos de silício, destacam-se o tetracloreto de silício, que é um composto importante na preparação de silício puro para dispositivos semicondutores. O tetrafluoreto de silício, que é um subproduto da produção de fertilizantes à base de fosfatos, resultando do ataque do ácido fluorídrico (\n[…]\n«Brasil obtém silício purificado para células solares»\n[…]\n«Enciclopedia Libre - Silicio» (em espanhol)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Vidro de urânio",
      "descricao": "Vidro colorido com pequena quantidade de urânio, comum em louças e objetos decorativos antigos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Sob luz ultravioleta, as peças antigas de vidro de urânio brilham em que cor?",
    "resposta": "Verde",
    "fonte": [
      "https://en.wikipedia.org/wiki/Uranium_glass"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uranium_glass",
        "situacao": "ok",
        "texto": "Uranium glass or vaseline glass or canary glass is glass which has had uranium, usually in oxide diuranate form, added to a glass mix before melting for coloration. The proportion usually varies from trace levels to about 2% uranium by weight, although some 20th-century pieces were made with up to 25% uranium.\n[…]\nVaseline glass is sometimes used as a synonym for any uranium glass, especially in the United States, but this usage is frowned upon, since Vaseline-brand petroleum jelly was only yellow, not other colors. The term is sometimes applied to other types of glass based on certain aspects of their superficial appearance in normal light, regardless of actual uranium content which requires a blacklight test to verify the characteristic green fluorescence.\n[…]\nIn the United Kingdom and Australia, the term Vaseline glass can be used to refer to any type of translucent glass.\n[…]\nLike \"Vaseline\", the terms \"custard\" and \"jad(e)ite\" are often applied on the basis of superficial appearance rather than uranium content. Conversely, \"Depression glass\" is a general description for any piece of glassware manufactured during the Great Depression regardless of appearance or formula.\n[…]\nThis material, technically a glass-ceramic, acquired the name \"vaseline glass\" because of its supposedly similar appearance to petroleum jelly. As of 2014, a few manufacturers continue the vaseline glass tradition: Fenton Glass, Mosser Glass, Gibson Glass and Jack Loranger.\n[…]\nCarnival glass\n[…]\nDepression glass\n[…]\nUranium Glass – The Glass Association Archived 2013-04-18 at the Wayback Machine\n[…]\nDavidson English Pressed Glass at the Glass Museum Archived 2016-03-03 at the Wayback Machine\n[…]\nVaseline and Uranium Glass at the Health Physics Historical Instrumentation Museum Collection\n[…]\nBasic overview on collectible Uranium glass"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vidro_de_ur%C3%A2nio",
        "situacao": "ok",
        "texto": "O vidro de urânio é vidro que contém urânio, geralmente em forma de óxido diuranato, adicionado a uma mistura de vidro antes da fusão. A proporção, geralmente, varia de níveis para cerca de 2% em peso de urânio, apesar de que no século XIX, peças foram feitas com até 25% de urânio.\n[…]\nO vidro de urânio era feito, algumas vezes, em mesas e artigos domésticos, mas caiu fora de uso generalizado quando a disponibilidade de urânio para a maioria das indústrias foi severamente usada durante a Guerra Fria. A maior parte desses objetos são agora considerados antiguidades ou colecionáveis, embora tenha havido uma menor evolução na arte do vidro.\n[…]\nCaso contrário, o moderno vidro de urânio está agora limitada principalmente a pequenos objetos como esferas ou mármores como novidades científicas ou decorativa. Devido a fraca radioatividade do urânio e além de sua pequena quantidade misturada ao vidro não é considerado um material de risco no uso humano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Cloreto de sódio",
      "descricao": "Composto formado por sódio e cloro, principal componente do sal de cozinha."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Vistos de perto com uma lupa, os grãos do sal de cozinha têm que forma geométrica?",
    "resposta": "Cubo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sodium_chloride"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sodium_chloride",
        "situacao": "ok",
        "texto": "Sodium chloride , is an ionic compound with the chemical formula NaCl, representing a 1:1 ratio of sodium and chloride ions. It is transparent or translucent, brittle, hygroscopic, and occurs as the mineral halite. In its edible form, common table salt, it is commonly used as a condiment and food preservative. Large quantities of sodium chloride are used in many industrial processes, and it is a m"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cloreto_de_s%C3%B3dio",
        "situacao": "ok",
        "texto": "O cloreto de sódio, popularmente conhecido como sal ou sal de cozinha, é uma substância largamente utilizada, formada na proporção de um átomo de cloro para cada átomo de sódio. A sua fórmula química é NaCl. O sal é essencial para a vida animal e é também um importante conservante de alimentos e um popular tempero.\n[…]\nCloreto de sódio e íons são os dois principais componentes do sal e são necessários para a sobrevivência de todos os seres vivos. O sal está envolvido na regulação da quantidade de água do organismo. O aumento excessivo de sal causa risco de problemas de saúde como a hipertensão arterial.\n[…]\nO processo de fabricação do sal é físico e não químico, dando-se por dissolução de sal gema com água quente injetada nas jazidas para a produção de salmoura. Posteriormente, procede-se à concentração, etapa que também é realizada com a água do mar e de lagos salgados, a cristalização do cloreto de sódio e a colheita e sua lavagem, e se adequado, refinação e adição de compostos contendo iodo para o consumo humano. [carece de fontes]?\n[…]\nCloreto de sódio para uso industrial é obtido por processos mais complexos e cuidadosos que incluem etapas como as seguintes:\n[…]\nDecantação e centrifugação dos cristais obtidos de cloreto de sódio, quando a suspensão de cristais obtida é decantada e separada a fase líquida (\"águas mães\"). A fase mais densa é centrifugada, sendo separadas as restantes águas mães e obtém-se o cloreto de sódio húmido, com teor de água de 2 a 3%.\n[…]\nO sal também é utilizado para a produção de gás cloro e de sódio metálico, através da eletrólise ígnea. Além disso, este mineral é o de maior utilidade aplicada entre todos, sendo utilizado em mais de 16 mil formas diferentes.\n[…]\nSal de cozinha",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Ácido fluorídrico",
      "descricao": "Solução de fluoreto de hidrogênio em água, ácido perigoso usado para gravar vidro."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Por que o ácido fluorídrico é guardado em frascos de plástico, e não em frascos de vidro?",
    "resposta": "Porque corrói o vidro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hydrofluoric_acid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hydrofluoric_acid",
        "situacao": "ok",
        "texto": "Hydrofluoric acid is a solution of hydrogen fluoride (HF) in water. Solutions of HF are colorless, acidic and highly corrosive. A common concentration is 49% (48–52%) but stronger solutions are available. In industry, it is less important than its anhydrous derivative hydrogen fluoride but in the laboratory it is a more common reagent used to make some organofluorine compound and other fluorides.\n[…]\nBecause of its high reactivity toward glass, hydrofluoric acid is stored in fluorinated plastic (often PTFE) containers.\n[…]\nIn dilute aqueous solution, hydrogen fluoride behaves as a weak acid.\n[…]\nUnlike other hydrohalic acids, such as hydrochloric acid, hydrogen fluoride is only a weak acid in dilute aqueous solution. This is in part a result of the strength of the hydrogen–fluorine bond, but also of other factors such as the tendency of HF, H2O, and F− anions to form clusters. At high concentrations, HF molecules undergo homoassociation to form polyatomic ions (such as bifluoride, HF−2) and protons, thus greatly increasing the acidity.\n[…]\nDilute solutions are weakly acidic with an acid ionization constant Ka = 6.6×10−4 (or pKa = 3.18), in contrast to corresponding solutions of the other hydrogen halides, which are strong acids (pKa < 0). However concentrated solutions of hydrogen fluoride are much more strongly acidic than implied by this value, as shown by measurements of the Hammett acidity function H0(or \"effective pH\").\n[…]\nThe weak acidity in dilute solution is sometimes attributed to the high H—F bond strength, which combines with the high dissolution enthalpy of HF to outweigh the more negative enthalpy of hydration of the fluoride ion. Paul Giguère and Sylvia Turrell have shown by infrared spectroscopy that the predominant solute species in dilute solution is the hydrogen-bonded ion pair H3O+·F−."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81cido_fluor%C3%ADdrico",
        "situacao": "ok",
        "texto": "Ácido fluorídrico, solução aquosa do fluoreto de hidrogénio ou ainda o fluoreto de hidrogénio anidro, que apresenta-se líquido até 19,5°C, é um ácido do grupo dos hidrácidos. O fluoreto de hidrogênio é um gás ou vapor esverdeado, de fórmula HF. Apresenta-se em solução como líquido incolor e fumegante de odor penetrante (assim como o gás ou vapor puro).\n[…]\nSabendo-se que a \"força\" dos hidrácidos varia de acordo com a eletronegatividade do elemento ligado ao hidrogênio, pode-se deduzir que o HF é um ácido forte.\n[…]\nSendo assim, o HF é um ácido moderado, que tem como maior propriedade sua facilidade em atacar materiais silicáticos (principalmente o vidro). Por isso o HF só deve ser armazenado em recipientes de plásticos, sendo usado especialmente o polietileno e o teflon.\n[…]\nO produto é obtido a partir da reação entre o ácido sulfúrico e a fluorita seca, originando além do ácido fluorídrico (quando em solução aquosa) ou fluoreto de hidrogênio (quando a seco), o sal sulfato de cálcio. Seguindo a reação:\n[…]\n«Ficha de Informação de Produto Químico - Ácido Fluorídico»\n[…]\nLivro: Ácido Fluorídrico e Fluoreto: Aspectos Toxicológicos\n[…]\nÁcido Fluorídrico Estabilizado - HFE - Smart Química Substituto/Alternativa para Ácido Fluorídrico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Grafite",
      "descricao": "Mineral formado por carbono em camadas, macio e escuro, usado na ponta dos lápis."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ao contrário do diamante, também feito de carbono, o grafite tem que propriedade elétrica?",
    "resposta": "Conduz eletricidade",
    "fonte": [
      "https://en.wikipedia.org/wiki/Graphite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Graphite",
        "situacao": "ok",
        "texto": "Graphite () is a crystalline allotrope (form) of the element carbon. It consists of many stacked layers of graphene, typically in excess of hundreds of layers. Graphite occurs naturally and is the most stable form of carbon under standard conditions.\n[…]\nHigh-purity monolithics are often used as a continuous furnace lining instead of carbon-magnesite bricks.\n[…]\nElectrolytic aluminium smelting also uses graphitic carbon electrodes. On a much smaller scale, synthetic graphite electrodes are used in electrical discharge machining (EDM), commonly to make injection molds for plastics.\n[…]\nThe mechanical properties of carbon fiber graphite-reinforced plastic composites and grey cast iron are strongly influenced by the role of graphite in these materials. In this context, the term \"(100%) graphite\" is often loosely used to refer to a pure mixture of carbon reinforcement and resin, while the term \"composite\" is used for composite materials with additional ingredients.\n[…]\nThe exfoliation process for bulk graphite, which involves separating the carbon layers within graphite, has been extensively studied between 2012 and 2021. Specifically, ultrasonic and thermal exfoliation have been the two most popular approaches worldwide, with 4,267 and 2,579 patent families, respectively, significantly more than for either the chemical or electrochemical alternatives.\n[…]\nCarbon brushes represent a long-explored graphite application area. There have been few inventions in this area over the last decade, with less than 300 patent families filed from 2012 to 2021, very significantly less than between 1992 and 2011.\n[…]\nLipson, H.; Stokes, A. R. (1942). \"A New Structure of Carbon\". Nature. 149 (3777): 328. Bibcode:1942Natur.149Q.328L. doi:10.1038/149328a0. S2CID 36502694."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grafite",
        "situacao": "ok",
        "texto": "Grafite (ou, raramente, grafita) é um mineral, um dos alótropos do carbono. Ao contrário do diamante, a grafite é um condutor elétrico. Por isso possui aplicações em eletrônica, como em eletrodos e baterias. Em razão do seu alto ponto de fusão, também possui aplicações como material refratário, como em cadinhos de fundição de aço. A grafite pode ser dissolvida em ácido clorossulfúrico.\n[…]\nA forma mais comum da grafite, é a hexagonal, em uma arrumação ABAB. Porém, o mesmo pode ser encontrado em uma outra forma, menos comum do que a primeira, conhecido como grafite romboédrica, que apresenta uma arrumação ABCABC. As principais características da grafite são sua capacidade de conduzir eletricidade e calor, que ocorre devido a deslocalização de seus elétrons π, e sua propriedade lubrificante, que se dá devido a sua estrutura em camadas ligadas por interações fracas de van der Waals.\n[…]\nMineral de variadas propriedades físicas, a grafita tem numerosas aplicações industriais. É mole, facilmente desgastável, untuosa e de boa condutibilidade elétrica. A grafita natural encontra-se em três formas, que determinam o emprego industrial: amorfa, cristalina e em lâminas. A grafita amorfa formou-se por intrusões ígneas em leitos de carvão, que se calcinou, convertendo-se em grafita, cuja pureza raramente é superior a 85%.\n[…]\nA grafite é um dos alótropos do carbono; é um condutor elétrico e pode ser usado, por exemplo, como os eletrodos de uma lâmpada elétrica de arco voltaico. Também é utilizada na fabricação de motores e peças eletrônicas.\n[…]\nOutras características: os flocos finos são flexíveis mas inelásticos; o mineral pode deixar marcas pretas nas mãos e papel; conduz eletricidade. Na grafita o efeito de superlubrificação também ocorre.\n[…]\nO diamante é um isolante elétrico; a grafita é um condutor de eletricidade.\n[…]\nFibra de carbono\n[…]\nDiamante\n[…]\nalótropo do carbono\n[…]\nTimcal Graphite & Carbon",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Nitroglicerina",
      "descricao": "Composto explosivo líquido e instável, criado em 1847, base da dinamite."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Além de explosivo poderoso, a nitroglicerina também é um remédio. Que tipo de dor ela é usada para aliviar?",
    "resposta": "Dor no peito, a angina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nitroglycerin_(medication)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nitroglycerin_(medication)",
        "situacao": "ok",
        "texto": "Nitroglycerin, also known as glyceryl trinitrate (GTN), is a vasodilator used for heart failure, high blood pressure, anal fissures, painful periods, treating the pain from esophageal spasm, and to treat and prevent chest pain caused by decreased blood flow to the heart (angina) or due to the recreational use of cocaine. This includes chest pain from a heart attack. It is taken by mouth, under the\n[…]\nNitroglycerin is used for the treatment of angina, acute myocardial infarction, severe hypertension, and acute coronary artery spasms. It may be administered intravenously, as a sublingual spray/tablet, or as a patch applied to the skin.\n[…]\nNitroglycerin is useful for myocardial infarction (heart attack) and pulmonary edema, again working best if used quickly, within a few minutes of symptom onset. It may also be given as a sublingual or buccal dose in the form of a tablet placed under the tongue or a spray into the mouth for the treatment of an angina attack.\n[…]\nNitroglycerin is also used in the treatment of anal fissures, though usually at a much lower concentration than that used for angina treatment.\n[…]\nFollowing Thomas Brunton's discovery that amyl nitrite could be used to treat chest pain, William Murrell experimented with the use of nitroglycerin to alleviate angina and reduce blood pressure, and showed that the accompanying headaches occurred as a result of overdose. Murrell began treating patients with small doses of nitroglycerin in 1878, and the substance was widely adopted after he published his results in The Lancet in 1879.\n[…]\nNitroglycerin used for treatment of angina has multiple brand names depending on the mode of administration, such as Minitran, Nitro-Dur, Nitrolingual, Nitromist, and Nitro-Bid. The brand name Nitro-bid is an ointment form of Nitroglycerin that is applied twice daily to the skin, hence the name, where \"BID\" indicates \"twice daily\" (B.I.D)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nitroglicerina_%28f%C3%A1rmaco%29",
        "situacao": "ok",
        "texto": "No contexto de farmacologia, nitroglicerina é um medicamento usado no tratamento de insuficiência cardíaca, hipertensão arterial e no tratamento e prevenção de dores no peito, quando a causa é irrigação insuficiente ou consumo de cocaína, incluindo também a dor causada por um enfarte do miocárdio. A nitroglicerina pode ser administrada por via oral, via sublingual ou por injeção.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Óxido nitroso",
      "descricao": "Gás formado por nitrogênio e oxigênio, conhecido como gás hilariante e usado como anestésico."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Apelidado de gás hilariante pela euforia que provoca, que gás é usado por dentistas como anestésico leve?",
    "resposta": "Óxido nitroso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nitrous_oxide"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nitrous_oxide",
        "situacao": "ok",
        "texto": "Nitrous oxide (dinitrogen oxide or dinitrogen monoxide), commonly known as laughing gas or nitrous, among others, is a chemical compound, an oxide of nitrogen with the formula N2O. At room temperature, it is a colourless non-flammable gas, and has a slightly sweet scent and flavour. At elevated temperatures, nitrous oxide is a powerful oxidiser similar to molecular oxygen.\n[…]\nNitrous oxide has been used in dentistry and surgery, as an anaesthetic and analgesic, since 1844. In the early days, the gas was administered through simple inhalers consisting of a breathing bag made of rubber cloth. Today, the gas is administered in hospitals by means of an automated relative analgesia machine, with an anaesthetic vaporiser and a medical ventilator, that delivers a precisely dosed and breath-actuated flow of nitrous oxide mixed with oxygen in a 2:1 ratio.\n[…]\nDentists use a simpler machine which only delivers an N2O and O2 mixture for the patient to inhale while conscious but must still be a recognised purpose designed dedicated relative analgesic flowmeter with a minimum 30% of oxygen at all times and a maximum upper limit of 70% nitrous oxide. The patient is kept conscious throughout the procedure, and retains adequate mental faculties to respond to questions and instructions from the dentist.\n[…]\nNitrous oxide is a significant occupational hazard for surgeons, dentists and nurses. Because the gas is minimally metabolised in humans (with a rate of 0.004%), it retains its potency when exhaled into the room by the patient, and can intoxicate the clinic staff if the room is poorly ventilated, with potential chronic exposure. A continuous-flow fresh-air ventilation system or N2O scavenger system may be needed to prevent waste-gas buildup."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93xido_nitroso",
        "situacao": "ok",
        "texto": "O óxido nitroso, protóxido de nitrogênio (português brasileiro) ou protóxido de azoto (português europeu), também conhecido como gás hilariante, é apresentado na forma de um gás incolor, composto de duas partes de nitrogênio e uma de oxigênio, cuja fórmula química é N2O. É um composto químico que age como agente anestésico fraco em forma de gás respiratório inorgânico e inodoro que tem efeitos ana\n[…]\nNos tempos recentes, ações antrópicas têm provocado mudanças no ciclo do nitrogênio, que envolvem o óxido nitroso, mediante ajustes globais tão drásticos quanto no ciclo do carbono. Em 1950, no mundo, produziam-se e aplicavam-se anualmente cerca de 3 milhões de toneladas de fertilizantes artificiais de nitrogênio. Hoje, esse total passa de 50 milhões de toneladas. Este e outros progressos da agricultura estão alterando o ciclo do nitrogênio de formas que a ciência ainda não compreende plenamente.\n[…]\nPor outro lado, a queima de combustíveis fósseis não produz apenas monóxido de carbono e dióxido de carbono, mas também compostos de nitrogênio e oxigênio. O óxido nítrico (NO) tem um átomo de nitrogênio e um de oxigênio; o oxido nitroso (N2O) tem dois átomos de nitrogênio e um de oxigênio, sendo que este segundo provoca efeito estufa.\n[…]\nSendo um agente inalatório, o Óxido Nitroso tem sua maior aplicação na área médica e na odontologia. Administrado juntamente com o Oxigênio, possui efeito analgésico e sedativo. Em anestesia geral, a adição de Óxido Nitroso ao Oxigênio permite uma redução da quantidade do agente anestésico mais caro, obtendo-se o mesmo efeito. Para fins industriais é utilizado principalmente na fabricação de chantilly e em automóveis.\n[…]\nControle do óxido nitroso é parte dos esforços para reduzir as emissões de gases de efeito estufa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Ozônio",
      "descricao": "Gás formado por três átomos de oxigênio, de cheiro forte, que na estratosfera filtra a radiação ultravioleta."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Batizado em 1840 pelo químico Christian Schönbein, o ozônio tem nome derivado de um verbo grego que significa o quê?",
    "resposta": "Cheirar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ozone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ozone",
        "situacao": "ok",
        "texto": "Ozone ( ), also called trioxygen, is an inorganic molecule with the chemical formula O3. It is a pale-blue gas with a distinctively pungent odour. It is an allotrope of oxygen that is much less stable than the diatomic allotrope O2, breaking down in the lower atmosphere to O2 (dioxygen). Ozone is formed from dioxygen by the action of ultraviolet (UV) light and electrical discharges within the Eart\n[…]\nA half century later, Christian Friedrich Schönbein noticed the same pungent odour and recognized it as the smell often following a bolt of lightning. In 1839, he succeeded in isolating the gaseous chemical and named it \"ozone\", from the Greek word ozein (ὄζειν) meaning \"to smell\".\n[…]\nThe chemical formula for ozone, O3, was not determined until 1865 by Jacques-Louis Soret and confirmed by Schönbein in 1867.\n[…]\nReduction of ozone gives the ozonide anion, O−3. Derivatives of this anion are explosive and must be stored at cryogenic temperatures. Ozonides for all the alkali metals are known. KO3, RbO3, and CsO3 can be prepared from their respective superoxides:\n[…]\nOzone has been implicated to have an adverse effect on plant growth: \"... ozone reduced total chlorophylls, carotenoid and carbohydrate concentration, and increased 1-aminocyclopropane-1-carboxylic acid (ACC) content and ethylene production. In treated plants, the ascorbate leaf pool was decreased, while lipid peroxidation and solute leakage were significantly higher than in ozone-free controls.\n[…]\nOzone may be formed from O2 by electrical discharges and by action of high energy electromagnetic radiation. Unsuppressed arcing in electrical contacts, motor brushes, or mechanical switches breaks down the chemical bonds of the atmospheric oxygen surrounding the contacts [O2 -> 2O]. Free radicals of oxygen in and around the arc recombine to create ozone [O3]. Certain electrical equipment generate significant levels of ozone."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Oz%C3%B4nio",
        "situacao": "ok",
        "texto": "O ozônio ou ozono, também chamado trioxigênio, é uma molécula inorgânica com a fórmula química O3. É um gás azul-claro de odor nitidamente pungente. Constitui um alótropo do oxigênio muito menos estável que o alótropo diatômico O2, decompondo-se na baixa atmosfera em O2, ou dioxigênio. O ozônio forma-se a partir do dioxigênio pela ação da radiação ultravioleta e de descargas elétricas na atmosfera\n[…]\nO nome trivial ozônio é o nome de uso mais comum e o nome preferido pela IUPAC. O nome sistemático trioxigênio segue a nomenclatura dos alótropos moleculares do oxigênio. Também são empregados os nomes 2λ4-trioxidiene e catena-trioxygen em sistemas específicos de nomenclatura. A palavra ozônio deriva de ozon (ὄζον), particípio presente neutro do grego ozein (ὄζειν), \"cheirar\", em referência ao odor característico do gás.\n[…]\nCerca de meio século depois, Christian Friedrich Schönbein percebeu o mesmo odor pungente e o relacionou ao cheiro que costuma acompanhar os relâmpagos. Em 1839, conseguiu isolar o gás e deu-lhe o nome \"ozônio\", a partir da palavra grega ozein (ὄζειν), \"cheirar\". Por esse motivo, Schönbein costuma receber o crédito pela descoberta do ozônio.\n[…]\nA redução do ozônio produz o ânion ozônido, O3−. Seus derivados são explosivos e precisam ser armazenados em temperaturas criogênicas. São conhecidos ozônidos de todos os metais alcalinos. KO3, RbO3 e CsO3 podem ser preparados a partir dos respectivos superóxidos:\n[…]\nsíntese de compostos químicos;\n[…]\nA poluição por ozônio pode alterar interações entre plantas e polinizadores. Mudanças nas condições atmosféricas podem alterar a emissão, a persistência e a percepção de sinais químicos usados pelos polinizadores. Um estudo realizado no noroeste da Europa encontrou efeitos negativos mais intensos sobre polinizadores e polinização de culturas quando as concentrações de ozônio eram maiores.\n[…]\nOzónido, compostos e íons derivados do ozônio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Ozônio",
      "descricao": "Gás formado por três átomos de oxigênio, de cheiro forte, que na estratosfera filtra a radiação ultravioleta."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o ozônio, que filtra os raios ultravioleta, e o gás essencial à nossa respiração têm em comum?",
    "resposta": "São formas do elemento oxigênio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ozone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ozone",
        "situacao": "ok",
        "texto": "Ozone ( ), also called trioxygen, is an inorganic molecule with the chemical formula O3. It is a pale-blue gas with a distinctively pungent odour. It is an allotrope of oxygen that is much less stable than the diatomic allotrope O2, breaking down in the lower atmosphere to O2 (dioxygen). Ozone is formed from dioxygen by the action of ultraviolet (UV) light and electrical discharges within the Eart\n[…]\nSulphuric acid can be produced from ozone, water and either elemental sulphur or sulphur dioxide:\n[…]\nIn an aqueous solution, however, two competing simultaneous reactions occur, one to produce elemental sulphur, and one to produce sulphuric acid:\n[…]\nThe uncatalysed process of ozone decomposition in the gas phase is a complex reaction involving two elementary reactions that finally lead to molecular oxygen, and this means that the reaction order and the rate law cannot be determined by the stoichiometry of the overall reaction.\n[…]\nUV ozone generators, or vacuum-ultraviolet (VUV) ozone generators, employ a light source that generates a narrow-band ultraviolet light, a subset of that produced by the Sun. The Sun's UV sustains the ozone layer in the stratosphere of Earth.\n[…]\nProvide an aid to flocculation (agglomeration of molecules, which aids in filtration, where the iron and arsenic are removed)\n[…]\nOzone is used in homes and hot tubs to kill bacteria in the water and to reduce the amount of chlorine or bromine required by reactivating them to their free state. Since ozone does not remain in the water long enough, ozone by itself is ineffective at preventing cross-contamination among bathers and must be used in conjunction with halogens. Gaseous ozone created by ultraviolet light or by corona discharge is injected into the water.\n[…]\nGreenwood, Norman  N.; Earnshaw, Alan (1997). Chemistry of the Elements (2nd ed.). Butterworth-Heinemann. doi:10.1016/C2009-0-30414-6. ISBN 978-0-08-037941-8."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Oz%C3%B4nio",
        "situacao": "ok",
        "texto": "O ozônio ou ozono, também chamado trioxigênio, é uma molécula inorgânica com a fórmula química O3. É um gás azul-claro de odor nitidamente pungente. Constitui um alótropo do oxigênio muito menos estável que o alótropo diatômico O2, decompondo-se na baixa atmosfera em O2, ou dioxigênio. O ozônio forma-se a partir do dioxigênio pela ação da radiação ultravioleta e de descargas elétricas na atmosfera\n[…]\nHá outras duas formas de decompor ozônio na fase gasosa:\n[…]\nNa decomposição fotoquímica, o ozônio é irradiado com radiação ultravioleta, produzindo oxigênio e espécies radicalares.\n[…]\nO ozônio estratosférico é produzido principalmente por radiação ultravioleta de comprimentos de onda entre 240 e 160 nm. O oxigênio começa a absorver fracamente em 240 nm nas bandas de Herzberg, mas grande parte de sua dissociação ocorre nas fortes bandas de Schumann–Runge, entre 200 e 160 nm, região em que a absorção pelo ozônio é menor. Radiações de comprimentos de onda ainda menores possuem energia suficiente para dissociar o oxigênio molecular, mas são menos abundantes.\n[…]\nO ozônio e outras formas reativas de oxigênio, como superóxido, oxigênio singleto, peróxido de hidrogênio e íons hipoclorito, podem ser produzidos por leucócitos e por outros sistemas biológicos. O ozônio reage diretamente com ligações duplas orgânicas. Sua decomposição também gera espécies radicalares de oxigênio capazes de danificar moléculas orgânicas. Essas propriedades oxidantes podem participar de processos inflamatórios.\n[…]\nGeradores de ozônio por ultravioleta, inclusive os que usam ultravioleta de vácuo, empregam fontes que emitem uma faixa estreita de radiação capaz de dissociar oxigênio molecular. A radiação ultravioleta solar sustenta o ciclo natural do ozônio na estratosfera.\n[…]\nCiclo ozônio-oxigênio, reações responsáveis pela formação e destruição natural do ozônio atmosférico\n[…]\nNASA Earth Observatory, artigo sobre ozônio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Camada de ozônio",
      "descricao": "Região da atmosfera terrestre com alta concentração de ozônio, que absorve boa parte da radiação ultravioleta do Sol."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A camada de ozônio, que protege a vida dos raios ultravioleta do Sol, fica em que camada da atmosfera?",
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
    "indice": 36,
    "ancora": {
      "nome": "Xenônio",
      "descricao": "Elemento químico de número atômico 54, gás nobre raro usado em faróis de carro e lâmpadas de flash."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Usado em faróis de carro, o gás nobre xenônio recebeu um nome grego que o descreve como o quê?",
    "resposta": "Estrangeiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Xenon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Xenon",
        "situacao": "ok",
        "texto": "Xenon is a chemical element; it has symbol Xe and atomic number 54. It is a dense, colorless, odorless noble gas found in Earth's atmosphere in trace amounts. Although generally unreactive, it can undergo a few chemical reactions such as the formation of xenon hexafluoroplatinate, the first noble gas compound to be synthesized.\n[…]\nThe xenon chloride excimer laser has certain dermatological uses.\n[…]\nApplied at pressures from 0.5 to 5 MPa (5 to 50 atm) to a protein crystal, xenon atoms bind in predominantly hydrophobic cavities, often creating a high-quality, isomorphous, heavy-atom derivative that can be used for solving the phase problem.\n[…]\nDense gases such as xenon and sulfur hexafluoride can be breathed safely when mixed with at least 20% oxygen. Xenon at 80% concentration along with 20% oxygen rapidly produces the unconsciousness of general anesthesia. Breathing mixes gases of different densities very effectively and rapidly so that heavier gases are purged along with the oxygen, and do not accumulate at the bottom of the lungs.\n[…]\nThere is, however, a danger associated with any heavy gas in large quantities: it may sit invisibly in a container, and a person who enters an area filled with an odorless, colorless gas may be asphyxiated without warning. Xenon is rarely used in large enough quantities for this to be a concern, though the potential for danger exists any time a tank or container of xenon is kept in an unventilated space.\n[…]\nWater-soluble xenon compounds such as monosodium xenate are moderately toxic, but have a very short half-life in the body – intravenously injected xenate is reduced to elemental xenon in about a minute.\n[…]\nXenon at The Periodic Table of Videos (University of Nottingham)\n[…]\nUSGS Periodic Table – Xenon Archived December 13, 2013, at the Wayback Machine\n[…]\nEnvironmentalChemistry.com – Xenon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xen%C3%B4nio",
        "situacao": "ok",
        "texto": "O xénon (português europeu) ou xenônio (português brasileiro), do grego xénos - estrangeiro, é um elemento químico de símbolo Xe de número atômico 54 (54 prótons e 54 elétrons) e de massa atómica igual a 131,3 u. À temperatura ambiente, o xenônio encontra-se no estado gasoso.\n[…]\nO xenônio é um elemento membro do grupo dos gases nobres ou inertes. A palavra inerte já não é mais usada para descrever este grupo químico, dado que alguns elementos deste grupo formam compostos. Num tubo cheio de gás, o xenônio emite um bonito brilho azul quando excitado com uma descarga elétrica. Tem-se obtido xenônio metálico aplicando-lhe pressões de várias centenas de quilobares.\n[…]\nNa propulsão de foguetes espaciais, a propulsão iônica, que usa aceleradores de partículas para acelerar íons de xenônio. Em inglês, este sistema se chama XIP (Xenon Ion Propulsion).\n[…]\nO xenônio (do grego que significa \"estranho\") foi descoberto por William Ramsay e Morris Travers em 1898 nos resíduos resultantes da evaporação dos componentes do ar líquido. Ramsay propôs chamar o novo gás de xenônio, do grego ξένον [xenon], forma singular neutra de ξένος [xenos], significando « estrangeiro » ou « convidado ».\n[…]\nEncontram-se traços de xenônio na atmosfera terrestre, aparecendo em uma parte por vinte milhões. O elemento é obtido comercialmente por extração dos resíduos do ar líquido. Este gás nobre é encontrado naturalmente nos gases emitidos por alguns mananciais naturais. Os isótopos Xe-133 e Xe-135 são sintetizados mediante irradiação de neutrons em reatores nucleares refrigerados a ar.\n[…]\n«WebElements.com - Xenon» (em inglês)\n[…]\n«EnvironmentalChemistry.com - Xenon» (em inglês)\n[…]\n«Xenônio - vídeos e imagens»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Iodo",
      "descricao": "Elemento químico de número atômico 53, halogênio sólido escuro que solta vapor violeta, adicionado ao sal de cozinha."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Ao ser aquecido, o iodo solta um vapor colorido que lhe valeu o nome, tirado do grego. Que cor é essa?",
    "resposta": "Violeta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Iodine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iodine",
        "situacao": "ok",
        "texto": "Iodine is a chemical element; it has symbol I and atomic number 53. The heaviest of the stable halogens, it exists at standard conditions as a semi-lustrous, non-metallic solid that melts to form a deep violet liquid at 114 °C (237 °F), and boils to a violet gas at 184 °C (363 °F). The element was discovered by the French chemist Bernard Courtois in 1811 and was named two years later by Joseph Lou\n[…]\nThe halogens darken in colour as the group is descended: fluorine is a very pale yellow, chlorine is greenish-yellow, bromine is reddish-brown, and iodine is violet.\n[…]\nElemental iodine is slightly soluble in water, with one gram dissolving in 3450 mL at 20 °C and 1280 mL at 50 °C; potassium iodide may be added to increase solubility via formation of triiodide ions, among other polyiodides. Nonpolar solvents such as hexane and carbon tetrachloride provide a higher solubility. Polar solutions, such as aqueous solutions, are brown, reflecting the role of these solvents as Lewis bases; on the other hand, nonpolar solutions are violet, the colour of iodine vapour.\n[…]\nCharge-transfer complexes form when iodine is dissolved in polar solvents, hence changing the colour. Iodine is violet when dissolved in carbon tetrachloride and saturated hydrocarbons but deep brown in alcohols and amines, solvents that form charge-transfer adducts.\n[…]\nThe iodine molecule, I2, dissolves in CCl4 and aliphatic hydrocarbons to give bright violet solutions. In these solvents the absorption band maximum occurs in the 520 – 540 nm region and is assigned to a π* to σ* transition. When I2 reacts with Lewis bases in these solvents a blue shift in I2 peak is seen and the new peak (230 – 330 nm) arises that is due to the formation of adducts, which are referred to as charge-transfer complexes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Iodo",
        "situacao": "ok",
        "texto": "O iodo (do grego iodés, cor violeta) é um elemento químico de símbolo I, de número atómico 53 (53 prótons e 53 elétrons) e de massa atómica 126,9 u. À temperatura ambiente, o iodo encontra-se no estado sólido. É um não metal, do grupo dos halogênios (17 ou VIIA) da classificação periódica dos elementos. É o segundo menos reativo e o menos eletronegativo de todos os elementos de seu grupo, atrás so\n[…]\nO iodo é um sólido negro e lustroso, com leve brilho metálico, que sublima em condições normais formando um gás de coloração violeta e odor irritante. Igual aos demais halogênios forma um grande número de compostos com outros elementos, porém é o menos reativo do grupo, e apresenta certas características metálicas. A falta de iodo causa retardamento nas prolactinas.\n[…]\nÉ pouco solúvel em água, porém dissolve-se facilmente em substâncias orgânicas, como etanol, clorofórmio, CHCl3, em tetracloreto de carbono, CCl4, ou em dissulfeto de carbono, CS2, produzindo soluções de coloração violeta. Em dissolução, na presença de amido dá uma coloração azul. Sua solubilidade em água aumenta se adicionarmos iodeto devido a formação do triodeto, I3-.\n[…]\nA tabela a seguir mostra alguns Isótopos do iodo, bem como sua massa atômica, meia vida e decaimento\n[…]\nO iodo radioativo 131I é obtido a partir de reações de fissão nuclear que ocorrem do decaimento do elemento Urânio. Pode ser produzidos para fins medicinais, como na produção de medicamentos para tratamento hormonal da tireoide e uso industrial.\n[…]\nO iodo radioativo, em altas concentrações, pode causar câncer, e mutações genéticas.\n[…]\nÉ necessário ser cuidadoso quando se maneja o iodo, pois em contato direto com a pele pode causar lesões. O vapor de iodo é muito irritante para os olhos e as mucosas.\n[…]\nNo caso do Iodo radioativo, deve-se adotar uma metodologia extremamente rígida, incorporando métodos de descarte e de segurança.\n[…]\n«TabelaPeriódica.Org - Iodo»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Gálio",
      "descricao": "Elemento químico metálico de número atômico 31, prateado, que funde a cerca de trinta graus Celsius."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Descoberto em 1875 por Lecoq de Boisbaudran, o gálio recebeu o nome latino de que país, terra natal do descobridor?",
    "resposta": "França",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gallium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gallium",
        "situacao": "ok",
        "texto": "Gallium is a chemical element; it has symbol Ga and atomic number 31. Discovered by the French chemist Paul-Émile Lecoq de Boisbaudran in Paris, France, 1875,\n[…]\nGallium was discovered using spectroscopy by French chemist Paul-Émile Lecoq de Boisbaudran in 1875 from its characteristic spectrum (two violet lines) in a sample of sphalerite. Later that year, Lecoq obtained the free metal by electrolysis of the hydroxide in potassium hydroxide solution.\n[…]\nHe named the element \"gallia\", from Latin Gallia meaning 'Gaul', a name for his native land of France. It was later claimed that, in a multilingual pun of a kind favoured by men of science in the 19th century, he had also named gallium after himself: Le coq is French for 'the rooster', and the Latin word for 'rooster' is gallus. In an 1877 article, Lecoq denied this conjecture.\n[…]\nOriginally, de Boisbaudran determined the density of gallium as 4.7 g/cm3, the only property that failed to match Mendeleev's predictions; Mendeleev then wrote to him and suggested that he should remeasure the density, and de Boisbaudran then obtained the correct value of 5.9 g/cm3, that Mendeleev had predicted exactly.\n[…]\nFrom its discovery in 1875 until the era of semiconductors, the primary uses of gallium were high-temperature thermometrics and metal alloys with unusual properties of stability or ease of melting (some such being liquid at room temperature)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/G%C3%A1lio",
        "situacao": "ok",
        "texto": "Gálio é um elemento químico de símbolo Ga, de número atômico 31 (31 prótons e 31 elétrons) e massa atómica igual a 69,7 u. É um metal pertencente ao grupo 13 (anteriormente denominado IIIA) da classificação periódica dos elementos. A temperaturas um pouco mais altas do que a temperatura ambiente encontra-se no estado líquido.\n[…]\nFoi descoberto em 1875 por Lecoq de Boisbaudran. Na forma metálica é utilizado para a produção de espelhos, ligas metálicas de baixos pontos de fusão e termômetros. O seu composto arsenieto de gálio é empregado na produção de circuitos integrados e diodos.\n[…]\nO gálio forma facilmente ligas metálicas com a maioria dos metais produzindo ligas de baixos pontos de fusão.\n[…]\nDescobriu-se recentemente que ligas de gálio-alumínio em contato com água produzem uma reação química dando como resultado hidrogênio, por impedir a formação de camada protetora (passivadora) de óxido de alumínio e fazendo o alumínio se comportar similarmente a um metal alcalino como o sódio ou o potássio. Tal propriedade é pesquisada como fonte de hidrogênio para motores, em substituição aos derivados de petróleo e outros combustíveis de motores de combustão interna.\n[…]\nO gálio (do latim Gallia, França), foi descoberto através da espectroscopia por Lecoq de Boisbaudran em 1875 por seu espectro característico (duas linhas no ultravioleta) ao examinar uma blenda de zinco procedente dos Pirenéus. No mesmo ano foi isolado pelo próprio Lecoq através do processo de eletrólise do hidróxido numa solução de hidróxido de potássio (KOH) dando ao novo elemento o nome do seu país natal: Gallia.\n[…]\nDevido a expansão ao solidificar, o gálio líquido não deve ser armazenado em recipientes rígidos como metálicos ou vidro. Pelo mesmo motivo o recipiente não pode ser completamente preenchido com gálio líquido.\n[…]\n«Gálio - vídeos e imagens»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Sódio",
      "descricao": "Elemento químico de número atômico 11, metal alcalino macio que reage violentamente com a água."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o símbolo químico do sódio tem a ver com as múmias do antigo Egito?",
    "resposta": "Vem do natrão, usado na mumificação",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sodium",
      "https://en.wikipedia.org/wiki/Natron"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sodium",
        "situacao": "ok",
        "texto": "Sodium is a chemical element; it has symbol Na (from Neo-Latin natrium) and atomic number 11. It is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table. Its only stable isotope is 23Na. The free metal does not occur in nature and must be prepared from compounds. Sodium is the sixth–most abundant element in the Earth's crust and exists in \n[…]\nThe chemical abbreviation for sodium was first published in 1814 by Jöns Jakob Berzelius in his system of atomic symbols, and is an abbreviation of the element's Neo-Latin name natrium, which refers to the Egyptian natron, a natural mineral salt mainly consisting of hydrated sodium carbonate. Natron historically had several important industrial and household uses, later eclipsed by other sodium compounds.\n[…]\nEtymology of \"natrium\" – source of symbol Na"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Natron",
        "situacao": "ok",
        "texto": "Natron is a naturally occurring mixture of sodium carbonate decahydrate (Na2CO3·10H2O, a kind of soda ash) and around 17% sodium bicarbonate (also called baking soda, NaHCO3) along with small quantities of sodium chloride and sodium sulfate. Natron is white to colourless when pure, varying to gray or yellow with impurities. Natron deposits are sometimes found in saline lake beds which arose in ari\n[…]\nThe English and German word natron is a French cognate derived through the Spanish natrón from Latin natrium and Greek nitron (νίτρον). This derives from the Ancient Egyptian word nṯrj. Natron refers to Wadi El Natrun or Natron Valley in Egypt, from which natron was mined by the ancient Egyptians for use in burial rites. The modern chemical symbol for sodium, Na, is an abbreviation of that element's Neo-Latin name natrium, which was derived from natron."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%B3dio",
        "situacao": "ok",
        "texto": "O sódio é um elemento químico de símbolo Na (Natrium em latim), de número atômico 11 (11 prótons e 11 elétrons), massa atômica 23 u (nº de protões + nº de neutrões). É um metal alcalino, sólido na temperatura ambiente, macio, untuoso, de coloração branca, ligeiramente prateada. Foi isolado em 1807 por Sir Humphry Davy por meio da eletrólise da soda cáustica fundida (se a eletrólise for feita com s\n[…]\nO sódio metálico emprega-se em síntese orgânica como agente redutor. É também componente do cloreto de sódio (NaCl) necessário para a vida. É um elemento químico essencial.\n[…]\nO cátion sódio (do italiano soda = sem sabor) é conhecido em diversos compostos. Foi isolado em 1807 por Sir Humphry Davy através da eletrólise da soda cáustica. Na Europa medieval era empregado como remédio para as enxaquecas um composto de sódio denominado sodanum. O símbolo do sódio (Na), provém de natron (ou natrium, do grego nítron) nome que recebia antigamente o carbonato de sódio.\n[…]\nEm ligas antiatrito com o chumbo para a produção de balas (projéteis). Com o chumbo também é usado para a produção de aditivos antidetonantes para as gasolinas;\n[…]\nA liga NaK é empregada como transferente de calor. O sódio também é usado como refrigerante;\n[…]\nNa produção de diversos reagentes químicos, como o peróxido de sódio e o cianeto de sódio;\n[…]\nTiossulfato de sódio penta-hidratado (Na2S2O3 . 5H2O);\n[…]\nHá treze isótopos do elemento sódio conhecidos. O único estável é o 23Na. O sódio possui dois isótopos radioativos cosmogênicos: 22Na e 24Na. O primeiro com períodos de semidesintegração de 2605 anos e o segundo de aproximadamente 20 horas.\n[…]\nEm caso de contato com a pele, jamais deve lavar-se com água mas sim com álcool, até a completa remoção do metal e posteriormente, tratar como uma queimadura por álcali cáustico, como o hidróxido de sódio.\n[…]\n«Brasileiro consome 2,5 vezes mais sódio que o recomendado pela OMS»\n[…]\n«Sódio - Vídeos e imagens»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Einstênio",
      "descricao": "Elemento químico sintético de número atômico 99, batizado em homenagem a Albert Einstein."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o elemento einstênio tem a ver com a primeira bomba de hidrogênio, testada pelos americanos em 1952?",
    "resposta": "Foi descoberto nos resíduos dela",
    "fonte": [
      "https://en.wikipedia.org/wiki/Einsteinium",
      "https://en.wikipedia.org/wiki/Ivy_Mike"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Einsteinium",
        "situacao": "ok",
        "texto": "Einsteinium is a synthetic chemical element; it has symbol Es and atomic number 99 and is a member of the actinide series and the seventh transuranium element.\n[…]\nThe absorption spectrum of einsteinium has been detected in Przybylski's Star, along with other actinide elements.\n[…]\nApart from traditional uranium charges, combinations of uranium with americium and thorium have been tried, as well as a mixed plutonium-neptunium charge, but they were less successful in terms of yield and was attributed to stronger losses of heavy isotopes due to enhanced fission rates in heavy-element charges. Product isolation was problematic as the explosions were spreading debris through melting and vaporizing the surrounding rocks at depths of 300–600 meters.\n[…]\nThough no new elements (except einsteinium and fermium) could be detected in the nuclear test debris, and the total yields of transuranics were disappointingly low, these tests did provide significantly higher amounts of rare heavy isotopes than previously available in laboratories.\n[…]\nThere is almost no use for any isotope of einsteinium outside basic scientific research aiming at production of higher transuranium elements and superheavy elements.\n[…]\nHaire, Richard G. (2006). \"Einsteinium\". In Morss, Lester R.; Edelstein, Norman M.; Fuger, Jean (eds.). The Chemistry of the Actinide and Transactinide Elements (PDF). Vol. 3 (3rd ed.). Dordrecht, the Netherlands: Springer. pp. 1577–1620. doi:10.1007/1-4020-3598-5_12. ISBN 978-1-4020-3555-5. Archived from the original (PDF) on 2010-07-17.\n[…]\nEinsteinium at The Periodic Table of Videos (University of Nottingham)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ivy_Mike",
        "situacao": "ok",
        "texto": "Ivy Mike was the codename given to the first full-yield test of a multi-stage thermonuclear device, also known as the Teller–Ulam design. Ivy Mike was detonated on November 1, 1952, by the United States on the island of Elugelab in Enewetak Atoll, Pacific Proving Grounds, as part of Operation Ivy. Yielding 10.4 megatons of TNT, it dwarfed the previous largest test Greenhouse George (250 kilotons, \n[…]\nSamples from the explosion led to the discovery of the predicted elements with atomic number 99 and 100, later named einsteinium and fermium. They also contained traces of the isotopes plutonium-246, and plutonium-244. These new nuclei had been produced by the rapid neutron capture process, later formalized in nuclear astrophysics in 1957. The Soviet Union tested a single-stage thermonuclear design, RDS-6s, in August 1953, and a three-megaton two-stage design, RDS-37, in 1955.\n[…]\nThe test was carried out on 1 November 1952 at 07:15 local time (19:15 on 31 October, Greenwich Mean Time). It produced a yield of 10.4 megatons of TNT (44 PJ). 77% of the final yield came from fast fission of the uranium tamper, which produced large amounts of radioactive fallout.\n[…]\nAl Ghiorso at the University of California, Berkeley speculated that the filters might also contain atoms that had transformed, through radioactive decay, into the predicted but undiscovered elements 99 and 100. Ghiorso, Stanley Gerald Thompson and Glenn Seaborg obtained half a filter paper from the Ivy Mike test. They were able to detect the existence of the elements einsteinium and fermium, which had been produced by intensely concentrated neutron flux about the detonation site.\n[…]\nThe discovery was kept secret for several years, but the team was eventually given credit. In 1955 the two new elements were named in honor of Albert Einstein and Enrico Fermi."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Einst%C3%AAnio",
        "situacao": "ok",
        "texto": "O einstênio (português brasileiro) ou einsténio (português europeu) (nome dado em homenagem a Albert Einstein) é um elemento químico de símbolo Es, número atômico 99 (99 prótons e 99 elétrons) e com massa atômica [252] u. É um elemento metálico, transurânico e radioactivo, pertencente ao grupo dos actinídeos (sétimo da série).\n[…]\nO elemento foi identificado pelo grupo de pesquisa formado por G. R. Choppin, A. Ghiorso, B. G. Harvey e S. G. Thompson nos destroços deixados pela explosão da primeira bomba de hidrogênio, em 1952. Quantidades da ordem das miligramas só se tornaram disponíveis depois de 1961. Seu isótopo mais comum é o 253Es. É produzido em maiores quantidades usando reatores nucleares de alta potência a partir do decaimento beta de califórnio-253.\n[…]\nO einstênio foi identificado pela primeira vez em dezembro de 1952 por Albert Ghiorso na Universidade da Califórnia, Berkeley, e uma outra equipe dirigida por Gregory Robert Choppin no Laboratório Nacional Los Alamos. Ambos examinavam resíduos do primeiro teste nuclear com bomba de hidrogênio que gerou 10,4 megatons realizado 1 de novembro de 1952 no Atol de Enewetak, Ivy Mike (Operação Ivy).\n[…]\nA criação de 25399Es em meio a detonação nuclear ocorreu devido a 15 capturas neutrônicas por parte de átomos de U-238 sucedidas por sete decaimentos betas sucessivos. Além disso, mais tarde descobriu-se que alguns átomos de U-238 foram capazes de absorver 17 nêutrons em vez de 15, e passando pelos mesmos sete decaimentos betas, formaram um outro isótopo de einstênio, o 25599Es.\n[…]\nROCHA-FILHO, Romeu C.; CHAGAS, Aécio Pereira; Sobre os nomes dos elementos químicos, inclusive dos transférmios, Quím. Nova, São Paulo, v. 22, n. 5, 1999. Disponível online, Acesso em: 10 Set 2007.\n[…]\nIt's Elemental - Einsteinium\n[…]\nEinstênio: o elemento químico sem nenhuma utilidade conhecida",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Gelo seco",
      "descricao": "Dióxido de carbono em estado sólido, que sublima direto para gás e é usado como refrigerante."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o gelo seco e as bolhas do refrigerante têm em comum?",
    "resposta": "São gás carbônico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dry_ice",
      "https://en.wikipedia.org/wiki/Carbonated_water"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dry_ice",
        "situacao": "ok",
        "texto": "Dry ice is the solid form of carbon dioxide. It is commonly used for temporary refrigeration as CO2  does not have a liquid state at normal atmospheric pressure and sublimes directly from the solid state to the gas state. It is used primarily as a cooling agent, but is also used in fog machines at theatres for dramatic effects. Its advantages include lower temperature than that of water ice and no\n[…]\nDry ice is produced industrially through the compression and cooling of carbon dioxide. The most common industrial method of manufacturing dry ice starts with a gas having a high concentration of carbon dioxide. Such gases can be a byproduct of another process, such as producing ammonia from nitrogen and natural gas, oil refinery activities or large-scale fermentation. The carbon dioxide-rich gas is then pressurized and refrigerated until it liquefies. Next, the pressure is reduced.\n[…]\nThe most common use of dry ice is to preserve food, using non-cyclic refrigeration.\n[…]\nVoyager 2 observations of Neptune's moon Triton suggested the presence of dry ice on the surface, though followup observations indicate that the carbon ices on the surface are carbon monoxide but that the moon's crust is composed of a significant quantity of dry ice.\n[…]\nProlonged exposure to dry ice can cause severe skin damage through frostbite, and the fog produced may also hinder attempts to withdraw from contact in a safe manner. Because it sublimes into large quantities of carbon dioxide gas, which could pose a danger of hypercapnia, dry ice should only be exposed to open air in a well-ventilated environment.\n[…]\nAt least one person has been killed by carbon dioxide gas subliming off dry ice in coolers placed in a car. In 2020, three people were killed at a party in Moscow after 25 kg of dry ice was dumped in a pool; carbon dioxide is heavier than air, and so can linger near the ground, just above water level."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Carbonated_water",
        "situacao": "ok",
        "texto": "Carbonated water is water containing dissolved carbon dioxide gas, either artificially injected under pressure, or occurring due to natural geological processes. Carbonation causes small bubbles to form, giving the water an effervescent quality. Common forms include sparkling natural mineral water, club soda, and commercially produced sparkling water.\n[…]\nCarbonated water is a diluent mixed with alcoholic beverages where it is used to top-off the drink and provides a degree of 'fizz'.\n[…]\nAdding soda water to \"short\" drinks such as spirits dilutes them and makes them \"long\" (not to be confused with long drinks such as those made with vermouth). Carbonated water is often added to drinks made with whiskey, brandy, and Campari to create a highball or variation. Soda water may be used to dilute drinks based on cordials such as orange squash. Soda water is a necessary ingredient in many cocktails, such as whiskey and soda or Campari and soda.\n[…]\nCarbonated water is increasingly popular in Western cooking as a substitute for plain water in deep-frying batters to provide a lighter texture to doughs similar to tempura. Kevin Ryan, a food scientist at the University of Illinois at Urbana–Champaign, says the effervescent bubbles when mixed with dough provide a light tempura-like texture, which gives the illusion of being lower calorie than regular frying batters.\n[…]\nThe lightness is caused by pockets of carbon dioxide gas being introduced into the batter (a process which natural rising using yeast also creates) and further expanding when cooked.\n[…]\nSince the dissolved gas in carbonated water acts as a temporary surfactant, it has been recommended as a household remedy for removing stains, particularly those of red wine.\n[…]\nSodium carbonate\n[…]\nLimnic eruption – in deep water lakes, a massive, sudden eruption of dissolved carbon dioxide"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gelo_seco",
        "situacao": "ok",
        "texto": "Gelo-seco é o nome popular para o dióxido de carbono solidificado ao ser resfriado a uma temperatura inferior a -78 °C. Ao ser aquecido na pressão atmosférica, torna-se imediatamente gás de dióxido de carbono, sem passar pelo estado líquido (processo conhecido por sublimação). O estado líquido só pode existir numa pressão superior a 5 atmosferas. Se o ar quente sopra sobre o gelo-seco, forma-se um\n[…]\nO gelo seco sublima a 194,7 K (-78,5 ° C; -109,2 ° F) à pressão atmosférica da Terra . Este frio extremo torna o sólido perigoso de manusear sem proteção contra ferimentos por congelamento . Embora geralmente não seja muito tóxico, a liberação de gases pode causar hipercapnia (níveis anormalmente elevados de dióxido de carbono no sangue) devido ao acúmulo em locais confinados.\n[…]\nÀ medida que o gelo-seco aquece, ele transforma-se em dióxido de carbono gasoso - e não em líquido. A temperatura muito gelada e a característica de passar diretamente para o estado gasoso (característica também conhecida como sublimação) fazem do gelo-seco uma excelente opção para refrigeração. Por exemplo, se você quer atravessar de um ponto a outro do Brasil com uma carne (ou outro produto) congelada, você pode cobri-la com gelo-seco.\n[…]\nEm tanques de alta pressão ou extintores de incêndio contêm dióxido de carbono líquido.\n[…]\nPara se produzir gelo-seco, é preciso um recipiente de alta pressão com dióxido de carbono líquido. Quando se liberta o dióxido de carbono líquido do tanque, a expansão do líquido e a alta velocidade de evaporação do dióxido de carbono gasoso esfriam o resto do líquido até o ponto de congelamento, no qual ele se transforma diretamente em sólido (ressublimação). Se você já viu um extintor de incêndio de dióxido de carbono em ação, viu uma espécie de \"neve\" se formar no bocal.\n[…]\nEssa \"neve\" é o dióxido de carbono (líquido) começando a virar um bloco de \"gelo-seco\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Rubídio",
      "descricao": "Elemento químico de número atômico 37, metal alcalino descoberto em 1861 por espectroscopia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o nome do elemento químico rubídio tem em comum com o nome da pedra preciosa rubi?",
    "resposta": "Vêm do latim para vermelho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rubidium",
      "https://en.wikipedia.org/wiki/Ruby"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rubidium",
        "situacao": "ok",
        "texto": "Rubidium is a chemical element; it has symbol Rb and atomic number 37. It is a very soft, whitish-grey solid in the alkali metal group, similar to potassium and caesium. Rubidium is the first alkali metal in the group to have a density higher than water. On Earth, natural rubidium comprises two isotopes: 72% is a stable isotope, 85Rb, and 28% is the slightly radioactive 87Rb, with a half-life of 4\n[…]\nSeawater contains an average of 125 μg/L of rubidium compared to the much higher value for potassium of 408 mg/L and the much lower value of 0.3 μg/L for caesium. Rubidium is the 18th most abundant element in seawater.\n[…]\nRubidium was the second element, shortly after caesium, to be discovered by spectroscopy, just one year after the invention of the spectroscope by Bunsen and Kirchhoff.\n[…]\nThe two scientists used the rubidium chloride to estimate that the atomic weight of the new element was 85.36 (the currently accepted value is 85.47). They tried to generate elemental rubidium by electrolysis of molten rubidium chloride, but instead of a metal, they obtained a blue homogeneous substance, which \"neither under the naked eye nor under the microscope showed the slightest trace of metallic substance\".\n[…]\nThe resonant element in atomic clocks utilizes the hyperfine structure of rubidium's energy levels, and rubidium is useful for high-precision timing. It is used as the main component of secondary frequency references (rubidium oscillators) in cell site transmitters and other electronic transmitting, networking, and test equipment. These rubidium standards are often used with GNSS to produce a \"primary frequency standard\" that has greater accuracy and is less expensive than caesium standards.\n[…]\n\"Rubidium\" . Encyclopædia Britannica. Vol. 23 (11th ed.). 1911. p. 809.\n[…]\nRubidium at The Periodic Table of Videos (University of Nottingham)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ruby",
        "situacao": "ok",
        "texto": "Ruby is a pinkish-red to blood-red-colored gemstone, a variety of the mineral corundum, consisting of aluminium oxide (α-Al2O3). Ruby is one of the most popular traditional jewelry gems and is very durable. Other varieties of gem-quality corundum are called sapphires, and rubies are also sometimes referred to as \"red sapphires\".\n[…]\nIf a color needs to be added, the glass powder can be \"enhanced\" with copper or other metal oxides as well as elements such as sodium, calcium, potassium etc.\n[…]\nIn the 1939 film adaptation of Frank L. Baum's The Wonderful Wizard of Oz the \"Ruby Slippers\" are a driving element within the plot. The slippers are mysteriously magical footwear made of rubies. The equivalent shoes were made of silver in the novel, but were changed to ruby in the film to showcase the then-novel three-strip Technicolor technology with which the film was shot."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rub%C3%ADdio",
        "situacao": "ok",
        "texto": "O rubídio é um elemento químico de símbolo Rb de número atômico 37 (37 prótons e 37 elétrons). O rubídio é um elemento metálico leve, brancoprateado e do grupo dos metais alcalinos. A massa atômica é 85,4678 u. elemento é altamente reativo, com propriedades similares a outros elementos do grupo 1, bem como uma oxidação na atmosfera terrestre muito rápida. O rubídio tem um isótopo estável,o 85Rb.\n[…]\nDois químicos alemães, Robert Bunsen e Gustav Kirchhoff, descobriram a existência do rubídio em 1861 pelo método então descoberto de espectroscopia de absorção atômica de chama. Seus compostos têm aplicações químicas e eletrônicas. O metal do rubídio é facilmente vaporizado e tem um alcance de absorção espectral prático, fazendo dele um alvo frequente de manipulação a laser de átomos.\n[…]\nO Rubídio é um metal alcalino macio, de coloração branca prateada brilhante que perde o brilho rapidamente em contato com o ar. Muito reativo - é o terceiro elemento alcalino mais eletropositivo - e pode ser encontrado líquido na temperatura ambiente. Igual aos demais elementos do grupo 1 pode arder espontaneamente com o ar produzindo chama de coloração violeta amarelada. reage violentamente com a água desprendendo hidrogênio. Forma amálgamas com o mercúrio.\n[…]\nEsta disparidade ocorre porque não se conhece minerais em que o rubídio seja o elemento predominante, entretanto, como o seu raio iônico é muito similar ao do potássio (2.000 vezes mais abundante) substitui-o - em ínfimas quantidades - nas suas espécies minerais, donde aparece como impureza.\n[…]\nPara assegurar a pureza do metal e a segurança na sua manipulação se armazena este elemento sob mineral seco, no vácuo ou em atmosfera inerte.\n[…]\nEmsley, John (2003). Nature's Building Blocks: An A-Z Guide to the Elements. Oxford: Oxford University Press. ISBN 9780198503408\n[…]\nWebElements.com - Rubidium\n[…]\nEnvironmentalChemistry.com - Rubidium",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Estátua da Liberdade",
      "descricao": "Estátua colossal de cobre na entrada do porto de Nova York, presente da França aos Estados Unidos, inaugurada em 1886."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Inaugurada com a cor avermelhada do cobre, por que a Estátua da Liberdade ficou esverdeada com o tempo?",
    "resposta": "O cobre oxidou, formando pátina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Statue_of_Liberty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Statue_of_Liberty",
        "situacao": "ok",
        "texto": "The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture of a robed and crowned woman on Liberty Island, part of New York City, in New York Harbor. The copper-clad statue, a gift to the United States from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi, and its metal framework built by Gustav\n[…]\nThe statue rapidly became a landmark. Originally, it was a dull copper color, but shortly after 1900 a green patina, also called verdigris, caused by the oxidation of the copper skin, began to spread. As early as 1902 it was mentioned in the press; by 1906 it had entirely covered the statue. Believing that the patina was evidence of corrosion, Congress authorized US$62,800 (equivalent to $2,250,000 in 2025) for various repairs, and to paint the statue both inside and out.\n[…]\nThere was considerable public protest against the proposed exterior painting. The Army Corps of Engineers studied the patina for any ill effects to the statue and concluded that it protected the skin, \"softened the outlines of the Statue and made it beautiful.\" The statue was painted only on the inside. The Corps of Engineers also installed an elevator to take visitors from the base to the top of the pedestal.\n[…]\nThe replacement skin was taken from a copper rooftop at Bell Labs, which had a patina that closely resembled the statue's; in exchange, the laboratory was provided some of the old copper skin for testing. The torch, found to have been leaking water since the 1916 alterations, was replaced with an exact replica of Bartholdi's unaltered torch. Consideration was given to replacing the arm and shoulder; the National Park Service insisted that they be repaired instead."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1tua_da_Liberdade",
        "situacao": "ok",
        "texto": "Estátua da Liberdade (Liberdade Iluminando o Mundo; em francês: La Liberté éclairant le monde) é uma escultura neoclássica colossal na Ilha da Liberdade, no porto de Nova York, na cidade de Nova York, Estados Unidos. A estátua revestida de cobre, um presente do povo francês ao povo americano, foi projetada pelo escultor francês Frédéric Auguste Bartholdi e sua estrutura de metal foi construída por\n[…]\nQuando construída, a estátua era marrom-avermelhada e brilhante, mas em vinte anos ela se oxidou até sua cor verde atual por meio de reações com o ar, a água e a poluição ácida, formando uma camada de verdete que protege o cobre de mais corrosão.\n[…]\n“A liberdade iluminando o mundo”, de fato! Essa expressão nos deixa doentes. Esse governo é uma farsa. Ele não pode, ou melhor, “não protege” seus cidadãos dentro de suas “próprias” fronteiras.\n[…]\nA estátua rapidamente se tornou um marco. Originalmente, era uma cor cobre opaca, mas logo depois de 1900 uma pátina verde, também chamada de verdete, causada pela oxidação da pele de cobre, começou a se espalhar. Já em 1902 foi mencionado na imprensa; em 1906 já cobria completamente a estátua.\n[…]\nA pele de substituição foi retirada de um telhado de cobre do Bell Labs, que tinha uma pátina que lembrava muito a da estátua; em troca, o laboratório recebeu parte da pele de cobre antiga para testes. A tocha, que apresentava vazamento de água desde as alterações de 1916, foi substituída por uma réplica exata da tocha inalterada de Bartholdi. Foi considerada a substituição do braço e do ombro; o Serviço de Parques Nacionais insistiu que fossem reparados.\n[…]\nEm uma homenagem patriótica, os Escoteiros da América, como parte de sua campanha Fortalecer o Braço da Liberdade em 1949-1952, doaram cerca de duzentas réplicas da estátua, feitas de cobre estampado e 2,5 metros de altura, para estados e municipalidades nos Estados Unidos.\n[…]\nLista de estátuas por altura",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Escurecimento enzimático",
      "descricao": "Reação química em que frutas e legumes cortados, como maçã e banana, escurecem em contato com o ar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que uma maçã cortada fica escura depois de alguns minutos exposta?",
    "resposta": "Reage com o oxigênio do ar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Food_browning"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Food_browning",
        "situacao": "ok",
        "texto": "Browning is the processes of food turning brown due to the chemical reactions that take place within. The process of browning is one of the chemical reactions that take place in food chemistry and represents an interesting research topic regarding health, nutrition, and food technology. Though there are many different ways food chemically changes over time, browning in particular falls into two ma"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dourado_%28culin%C3%A1ria%29",
        "situacao": "ok",
        "texto": "Dourado é a cor acastanhada obtida nos alimentos.\n[…]\nEssa coloração é normalmente é obtida por ligeiro aquecimento (tostar ligeiramente) do alimento, geralmente num forno.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Explosão no porto de Beirute",
      "descricao": "Explosão de um grande estoque químico armazenado no porto de Beirute, no Líbano, em 4 de agosto de 2020."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 2020, uma explosão gigantesca devastou o porto de Beirute, no Líbano. Que substância, armazenada ali por anos, explodiu?",
    "resposta": "Nitrato de amônio",
    "fonte": [
      "https://en.wikipedia.org/wiki/2020_Beirut_explosion"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2020_Beirut_explosion",
        "situacao": "ok",
        "texto": "On 4 August 2020, a major explosion occurred in Beirut, Lebanon, caused by the ignition of 2,750 tonnes of ammonium nitrate. The chemical, confiscated in 2014 from the cargo ship MV Rhosus and stored at the Port of Beirut without adequate safety measures for six years, detonated after a fire broke out in a nearby warehouse. The explosion resulted in at least 218 deaths, 7,000 injuries, and approxi\n[…]\nThe second explosion, 33 to 35 seconds later, was far more substantial and felt in northern Israel and in Cyprus, 240 kilometers (150 miles) away. It rocked central Beirut and created a large red-orange cloud, briefly ringed by a white condensation cloud. The red-orange colour of the smoke from the second explosion was caused by nitrogen dioxide, a byproduct of ammonium nitrate decomposition.\n[…]\nThe Beirut explosion was similar to explosions of large amounts of ammonium nitrate in Texas City, United States, in 1947; in Toulouse, France, in 2001; and Tianjin, China, in 2015.\n[…]\nWarehouses at the Port of Beirut were used to store explosives and chemicals including nitrates, which are common components of fertilisers and explosives. The General Director of General Security, Major General Abbas Ibrahim, said the ammonium nitrate confiscated from Rhosus had exploded. The 2,750 tonnes (3,030 short tons) of ammonium nitrate was the equivalent to around 1,155 tonnes of TNT (4,830 gigajoules).\n[…]\nNumerous conspiracy theories emerged on social media in the days following the explosion. The main themes were that there was a significant weapons cache belonging to Hezbollah stored at the Port of Beirut, and that Israel wished to destroy those weapons. The theories said that Israel launched an attack and the level of destruction took them by surprise. Israel, Lebanon, and Hezbollah all denied this theory, and blame the ammonium nitrate stored in the port.\n[…]\nIn Pictures: Huge Explosion Rocks Beirut by CNN"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Explos%C3%B5es_no_porto_de_Beirute_em_2020",
        "situacao": "ok",
        "texto": "A explosão no porto de Beirute em 2020 aconteceu no dia 4 de agosto de 2020, em um depósito que armazenava  nitrato de amônio. O ministro da Saúde falou de \"muitos feridos e danos extensos\". Testemunhas oculares disseram à televisão LBC que \"pelo menos dezenas foram feridas e os hospitais estavam cheios de pessoas feridas\", a explosão sacudiu o centro de Beirute e lançou uma nuvem de poeira no ar.\n[…]\nA explosão foi precedida por um incêndio no mesmo armazém.\n[…]\nPor volta das 18h00 no horário local (15h00 UTC) em 4 de agosto de 2020, um incêndio eclodiu no Armazém 12 no Porto de Beirute. O armazém 12 ficava ao lado da água e próximo aos silos de grãos; o depósito armazenava o nitrato de amônio que havia sido confiscado de MV Rhosus, junto com um estoque de fogos de artifício. Por volta das 17h54, hora local (14h54 UTC), uma equipe de nove bombeiros e um paramédico, conhecido como Pelotão 5, foi enviada para combater o incêndio.\n[…]\nA segunda explosão, 33 a 35 segundos depois, foi muito mais substancial, equivalente a um sismo de magnitude 3,3 na escala de Richter. Foi sentida no norte de Israel e em Chipre, a 240 quilômetros (150 milhas) de distância. Ela abalou o centro de Beirute e lançou uma nuvem vermelho-laranja no ar, que foi brevemente cercada por uma nuvem de condensação branca. A cor laranja-avermelhada da fumaça foi causada pelo dióxido de nitrogênio, um subproduto da decomposição do nitrato de amônio.\n[…]\nHavia armazéns de explosivos e produtos químicos no porto, incluindo nitratos, componentes comuns de fertilizantes e explosivos. O diretor geral de segurança pública, major-general Abbas Ibrahim, disse que a explosão foi causada pelo nitrato de amônio confiscado do navio moldavo MV Rhosus. Estavam armazenadas 2 750 toneladas de nitrato de amônio, cuja explosão gerou uma potência equivalente a um terremoto de magnitude 3,3 na escala de Richter.\n[…]\nExplosões em Tianjin em 2015",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Bico de Bunsen",
      "descricao": "Queimador a gás usado em laboratórios para aquecer, esterilizar e fazer combustões."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1855, que químico alemão, um dos descobridores do césio, desenvolveu o queimador a gás comum nos laboratórios?",
    "resposta": "Robert Bunsen",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bunsen_burner"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bunsen_burner",
        "situacao": "ok",
        "texto": "A Bunsen burner, named after Robert Bunsen, is a kind of ambient air gas burner used as laboratory equipment; it produces a single open gas flame, and is used for heating, sterilization, and combustion.\n[…]\nIn 1852, the University of Heidelberg hired Bunsen and promised him a new laboratory building. The city of Heidelberg had begun to install coal-gas street lighting, and the university laid gas lines to the new laboratory.\n[…]\nThe designers of the building intended to use the gas not just for lighting, but also as fuel for burners for laboratory operations. For any burner lamp, it was desirable to maximize the temperature of its flame, and minimize its luminosity (which represented lost heating energy). Bunsen sought to improve existing laboratory burner lamps with respect to economy, simplicity, and flame temperature, and adapt them to coal-gas fuel.\n[…]\nDesaga created adjustable slits for air at the bottom of the cylindrical burner, with the flame issuing at the top. When the building opened early in 1855, Desaga had made 50 burners for Bunsen's students. Two years later Bunsen published a description, and many of his colleagues soon adopted the design. Bunsen burners are now used in laboratories around the world.\n[…]\nA Bunsen burner is also used in microbiology laboratories to sterilise pieces of equipment and to produce an updraft intended to force airborne contaminants away from the working area. Research conducted in 2026 indicated that contaminants are not directed as presumed, however, and may contribute to increasing exposure in the work area.\n[…]\nPoliakoff, Martyn (2011). \"Robert Bunsen and his Burner\". The Periodic Table of Videos. University of Nottingham."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bico_de_Bunsen",
        "situacao": "ok",
        "texto": "O bico de Bunsen é um dispositivo usado para efetuar aquecimento de soluções em laboratório. Este queimador, muito usado no laboratório, é formado por um tubo com orifícios laterais, na base, por onde entra o ar, o qual se vai misturar com o gás que entra através do tubo de borracha.\n[…]\nO bico de Bunsen foi aperfeiçoado por Robert Bunsen, a partir de um dispositivo desenhado por Michael Faraday. Em biologia, especialmente em microbiologia e biologia molecular, é usado para manutenção de condições estéreis quando da manipulação de micro organismos, DNA, etc.\n[…]\nO bico de Bunsen queima em segurança um fluxo contínuo de gás, sem haver o risco da chama se propagar pelo tubo até o depósito de gás que o alimenta. Normalmente, o bico de Bunsen queima gás natural, ou alternativamente um GPL, tal como propano ou butano, ou uma mistura de ambos. (O gás natural é basicamente metano com uma reduzida quantidade de propano e butano).\n[…]\nDiz-se que a área estéril do bico de bunsen seja de 30 cm.\n[…]\nQuando a janela do Bico de Bunsen está fechada, sua chama é igual à de uma vela, pois a reação ocorre apenas com o oxigênio que está em volta e sua chama fica mais fraca.\n[…]\nQuando se usa o bico de Bunsen, deve-se primeiramente fechar a entrada de ar; em seguida, um fósforo deve ser aceso perto do ponto mais alto da câmara de mistura, daí, a válvula de gás pode ser aberta, dando origem a uma chama grande e amarela, que desprende fuligem.\n[…]\nOs bicos de Bunsen ainda são muito usados em laboratórios devido à velocidade com que conseguem atingir altas temperaturas e também para esterilização de materiais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "A Tabela Periódica",
      "descricao": "Livro de contos de 1975 do escritor e químico italiano Primo Levi, com capítulos nomeados por elementos químicos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escritor italiano, químico e sobrevivente de Auschwitz, escreveu um livro de contos em que cada capítulo leva o nome de um elemento?",
    "resposta": "Primo Levi",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Periodic_Table_(short_story_collection)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Periodic_Table_(short_story_collection)",
        "situacao": "ok",
        "texto": "The Periodic Table (Italian: Il sistema periodico) is a 1975 short story collection by Primo Levi, named after the periodic table in chemistry. In 2006, the Royal Institution of Great Britain named it the best science book ever.\n[…]\n\"Potassium\" – An experience in the laboratory with unexpected results. Levi assumes that potassium will act in similar ways to Sodium, which is directly above it in the periodic table, resulting in a conflagration which teaches Levi to \"distrust the Almost-the-Same\" and reminds him of hidden differences which, like railroad junctions, can amplify small apparent differences into radically divergent consequences.\n[…]\n\"Nickel\" – Inside the chemical laboratories of a mine. Levi reflects on the magical reputations of mines, as he is hired to attempt to extract Nickel from the waste elements of an asbestos mine. Nickel is named after an imp or sprite, reflecting its deception of miners who were searching for other substances. He succeeds and is elated, but later sadly reflects that the extracted materials would have been used to produce armor plates and artillery shells for the Fascists and Nazis.\n[…]\n\"Vanadium\" – Finding a German chemist after the war. Levi is thrown into a surreal correspondence with his former supervisor in Auschwitz, who asks for his forgiveness but seems to deny the reality of his crimes. He reflects on the absence of ideal characters for such a confrontation, and his inadequacy to represent the victims of the holocaust, and his supervisors' inadequacy to represent the perpetrators.\n[…]\nThe book was dramatised for radio by BBC Radio 4 in 2016. The dramatisation was broadcast in 12 episodes, with Henry Goodman and Akbar Kurtha as Primo Levi."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Datação por radiocarbono",
      "descricao": "Método que estima a idade de materiais orgânicos pela quantidade de carbono-14 que ainda contêm."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que químico americano criou, no fim dos anos 1940, a datação por carbono catorze, que lhe rendeu o Nobel de Química de 1960?",
    "resposta": "Willard Libby",
    "fonte": [
      "https://en.wikipedia.org/wiki/Radiocarbon_dating"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Radiocarbon_dating",
        "situacao": "ok",
        "texto": "Radiocarbon dating (also referred to as carbon dating or carbon-14 dating) is a method for determining the age of an object containing organic material by using the properties of radiocarbon, a radioactive isotope of carbon.\n[…]\nThe method was developed in the late 1940s at the University of Chicago by Willard Libby. It is based on the fact that radiocarbon (14C) is constantly being created in the Earth's atmosphere by the interaction of cosmic rays with atmospheric nitrogen. The resulting 14C combines with atmospheric oxygen to form radioactive carbon dioxide, which is incorporated into plants by photosynthesis; animals then acquire 14C by eating the plants.\n[…]\nKorff, then employed at the Franklin Institute in Philadelphia, that the interaction of thermal neutrons with 14N in the upper atmosphere would create 14C. It had previously been thought that 14C would be more likely to be created by deuterons interacting with 13C. At some time during World War II, Willard Libby, who was then at Berkeley, learned of Korff's research and conceived the idea that it might be possible to use radiocarbon for dating.\n[…]\nIn 1960, Libby was awarded the Nobel Prize in Chemistry for this work.\n[…]\n14\n[…]\n14\n[…]\nThis led to estimates that the trees were between 24,000 and 19,000 years old, and hence this was taken to be the date of the last advance of the Wisconsin glaciation before its final retreat marked the end of the Pleistocene in North America. In 1952 Libby published radiocarbon dates for several samples from the Two Creeks site and two similar sites nearby; the dates were averaged to 11,404 BP with a standard error of 350 years.\n[…]\n774–775 carbon-14 spike\n[…]\np3k14c, global radiocarbon database\n[…]\nXRONOS, global radiocarbon database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Data%C3%A7%C3%A3o_por_radiocarbono",
        "situacao": "ok",
        "texto": "Datação por radiocarbono é um método de datação radiométrica que usa o radioisótopo de ocorrência natural carbono-14 (14C) para determinar a idade de materiais carbonáceos até cerca de 60 000 anos. Idades por radiocarbono bruto, ou seja, não-calibrado, são geralmente reportadas em anos de radiocarbono \"Antes do Presente\" (AP), \"Presente\" sendo definido como 1950 AD. Tais idades brutas podem ser ca\n[…]\nA técnica de datação por radiocarbono foi desenvolvida por Willard Libby e seus colegas na Universidade de Chicago em 1949.\n[…]\nA primeira figura resume os processos químicos envolvidos na fixação de carbono pelos organismos vivos, enquanto que a segunda figura apresenta um modelo simplificado à escala global dos mesmos processos.\n[…]\nOs resultados da pesquisa sobre varves no lago de Suigetsu, no Japão, que foi anunciado em 2012, percebeu este objectivo. \"Na maioria dos casos, os níveis de radiocarbono deduzida a partir dos registros marinhos e outros não foram muito mal. No entanto, ter um registro verdadeiramente terrestre nos dá uma melhor resolução e confiança na datação por radiocarbono\", disse Bronk Ramsey.\n[…]\n\"Ele também permite-nos olhar para as diferenças entre a atmosfera e os oceanos e estudar as implicações para nossa compreensão do meio ambiente marinho, como parte do ciclo global do carbono\".\n[…]\nEm 2012, foi argumentado que há um erro na maneira que os programas de calibração mais - comumente usados calcular as idades de radiocarbono calibradas. Até agora, nenhuma correção para esse erro foi implementado. A imprecisão nas idades calibrados normalmente é pequeno, mas às vezes pode ser grande (principalmente em análises bayesianas) .\n[…]\nRadiocarbono - A principal revista internacional de registro de artigos de pesquisa e listas de datas relevantes à 14C",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Tecnécio",
      "descricao": "Elemento químico de número atômico 43, o mais leve sem isótopos estáveis, produzido artificialmente em 1937."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O tecnécio, primeiro elemento químico obtido artificialmente, foi produzido em laboratório em que década?",
    "resposta": "Década de 1930",
    "distratores": [
      "Década de 1900",
      "Década de 1960",
      "Década de 1880"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Technetium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Technetium",
        "situacao": "ok",
        "texto": "Technetium is a chemical element; it has symbol Tc and atomic number 43. It is the lightest element whose isotopes are all radioactive. Technetium is one of only two radioactive elements both preceded and succeeded in the periodic table by elements with stable forms, the other being promethium. All available technetium is produced as a synthetic element.\n[…]\nMany of technetium's properties had been predicted by Dmitri Mendeleev before it was discovered; Mendeleev noted a gap in his periodic table and gave the undiscovered element the provisional name ekamanganese (Em). In 1937, technetium became the first predominantly artificial element to be produced, hence its name (from the Greek technetos, 'artificial', + -ium).\n[…]\nThe discovery of element 43 was finally confirmed in a 1937 experiment at the University of Palermo in Sicily by Carlo Perrier and Emilio Segrè. In mid-1936, Segrè visited the United States, first Columbia University in New York and then the Lawrence Berkeley National Laboratory in California. He persuaded cyclotron inventor Ernest Lawrence to let him take back some discarded cyclotron parts that had become radioactive.\n[…]\nSegrè enlisted his colleague Perrier to attempt to prove, through comparative chemistry, that the molybdenum activity was indeed from an element with the atomic number 43, which they did. University of Palermo officials wanted them to name their discovery panormium, after the Latin name for Palermo, Panormus. In 1947, element 43 was named after the Greek word technetos (τεχνητός), meaning 'artificial', since it was the first element to be artificially produced.\n[…]\nDischarge of technetium into the sea resulted in contamination of some seafood with minuscule quantities of this element. For example, European lobster and fish from west Cumbria contain about 1 Bq/kg of technetium."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tecn%C3%A9cio",
        "situacao": "ok",
        "texto": "O tecnécio (technetium) é um elemento químico de símbolo Tc de número atômico 43 e de massa atómica igual a 98 u. À temperatura ambiente, o tecnécio encontra-se no estado sólido. Está colocado no grupo 7 (anteriormente denominado 7B) da classificação periódica dos elementos. Trata-se de um metal de transição, cinza prateado, radioativo, sendo obtido de forma sintética. Sua principal aplicação é em\n[…]\nAo ser sintetizado, o Molibdênio decai emitindo uma partícula Beta de seu núcleo, tornando-se Tecnécio 99m (meta estável) com meia-vida de 6 horas, decaindo novamente por emissão gama, se tornando Tecnécio 99, que tem meia vida de 211.100 anos. Foi o primeiro elemento a ser feito artificialmente pelo homem, daí seu nome que deriva da palavra grega \"technetos\", que significa artificial.\n[…]\nO tecnécio apresenta todos seus isotopos radioativos, tendo sido o primeiro elemento a ser produzido artificialmente. Seus estados de oxidação mais comuns são +2, +4, +5, +6 e +7.\n[…]\nEste elemento inibe bem a corrosão do aço,  sendo um supercondutor à temperaturas muito baixas.\n[…]\nO nome tecnécio é procedente do grego technetos, que significa \"artificial\". Foi descoberto por Carlo Perrier e Emilio Segrè na Itália em 1937, numa amostra de molibdênio, enviada por Ernest Lawrence, que foi bombardeada com núcleos de deutério em um ciclotron em Berkeley. O tecnécio foi o primeiro elemento a ser produzido artificialmente.\n[…]\nTodos os isótopos devem ser manuseados com cuidado. O mais comum, o tecnécio-99, é um emissor beta do qual a radiação é retida pelas paredes da vidraria do laboratório. O principal perigo quando trabalhando com o elemento é a inalação de poeira, pois tal contaminação radioativa nos pulmões pode aumentar o risco de câncer. Para a maioria das situações, o manuseio em uma capela de laboratório é suficiente e uma caixa com luvas não é necessária.\n[…]\nEstrela de tecnécio\n[…]\n«Tecnécio - vídeos e imagens»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Quilate (pureza do ouro)",
      "descricao": "Unidade que indica a proporção de ouro puro numa liga, em partes de vinte e quatro."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na joalheria, o ouro puro, sem mistura de outros metais, corresponde a quantos quilates?",
    "resposta": "Vinte e quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fineness"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fineness",
        "situacao": "ok",
        "texto": "The fineness of a precious metal object (coin, bar, jewelry, etc.) represents the weight of fine metal therein, in proportion to the total weight which includes alloying base metals and any impurities. Alloy metals are added to increase the hardness and durability of coins and jewelry, alter colors, decrease the cost per weight, or avoid the cost of high-purity refinement.\n[…]\n958—23 karat\n[…]\n834—20 karat\n[…]\n625—15 karat\n[…]\n500—12 karat\n[…]\n042–1 karat: Legal minimum for gold in the US since the revision of the FTC Guides of August 2018.\n[…]\nThe carat (UK spelling, symbol c or Ct) or karat (US spelling, symbol k or Kt) is a fractional measure of purity for gold alloys, in parts fine per 24 parts whole. The carat system is a standard adopted by US federal law.\n[…]\nKarat is a variant of carat. First attested in English in the mid-15th century, the word carat came from Middle French carat, in turn derived either from Italian carato or Medieval Latin carratus. These were borrowed into Medieval Europe from the Arabic qīrāṭ meaning \"fruit of the carob tree\", also \"weight of 5 grains\", (قيراط) and was a unit of mass though it was probably not used to measure gold in classical times.\n[…]\nIn 309 AD, Roman Emperor Constantine I began to mint a new gold coin, the solidus, that was 1⁄72 of a libra (Roman pound) of gold equal to a mass of 24 siliquae, where each siliqua (or carat) was 1⁄1728 of a libra. This is believed to be the origin of the value of the karat.\n[…]\nA piece of alloy metal containing a precious metal may also have the weight of its precious component referred to as its \"fine weight\". For example, 1 troy ounce of 18 karat gold (which is 75% gold) may be said to have a fine weight of 0.75 troy ounces.\n[…]\nLive gold price per gram by karat – Real-time melt value calculations for 10K through 24K gold using current spot prices"
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
