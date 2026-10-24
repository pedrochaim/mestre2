Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Física** (tema **Ciências**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Dispersão da luz",
      "descricao": "Separação da luz branca em suas cores ao atravessar um meio como o vidro de um prisma, porque cada cor se desvia de um jeito."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Quando a luz branca atravessa um prisma e se abre num leque de cores, qual cor sofre o maior desvio?",
    "resposta": "Violeta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dispersion_(optics)",
      "https://en.wikipedia.org/wiki/Prism_(optics)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dispersion_(optics)",
        "situacao": "ok",
        "texto": "Dispersion is the phenomenon in which the phase velocity of a wave depends on its frequency. Sometimes the term chromatic dispersion is used to refer to optics specifically, as opposed to wave propagation in general. A medium having this common property may be termed a dispersive medium.\n[…]\nAlthough the term is used in the field of optics to describe light and other electromagnetic waves, dispersion in the same sense can apply to any sort of wave motion such as acoustic dispersion in the case of sound and seismic waves, and in gravity waves (ocean waves). Within optics, dispersion is a property of telecommunication signals along transmission lines (such as microwaves in coaxial cable) or the pulses of light in optical fiber.\n[…]\nIn electromagnetics and optics, the term dispersion generally refers to aforementioned temporal or frequency dispersion. Spatial dispersion refers to the non-local response of the medium to the space; this can be reworded as the wavevector dependence of the permittivity. For an exemplary anisotropic medium, the spatial relation between electric and electric displacement field can be expressed as a convolution:\n[…]\nis much larger than atomic dimensions, because the dielectric kernel dies out at macroscopic distances. Nevertheless, it can result in non-negligible macroscopic effects, particularly in conducting media such as metals, electrolytes and plasmas. Spatial dispersion also plays role in optical activity and Doppler broadening, as well as in the theory of metamaterials.\n[…]\nwhere the dispersion constant kDM is given by\n[…]\nDispersion – Encyclopedia of Laser Physics and Technology\n[…]\nAnimations demonstrating optical dispersion by QED\n[…]\nInteractive webdemo for chromatic dispersion Institute of Telecommunications, University of Stuttgart"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Prism_(optics)",
        "situacao": "ok",
        "texto": "An optical prism is a transparent optical element with flat, polished surfaces that are designed to refract light. At least one surface must be angled—elements with only two parallel surfaces are windows, not prisms. The most familiar type of optical prism is the triangular prism, which has a triangular base and rectangular sides. Not all optical prisms are geometric prisms, and not all geometric \n[…]\nSpectral dispersion is the best known property of optical prisms, although not the most frequent purpose of using optical prisms in practice.\n[…]\nOverall optical performance of such a cube is determined by the thin layer.\n[…]\nPrisms made of isotropic materials like glass will also alter polarization of light, as partial reflection under oblique angles does not maintain the amplitude ratio (nor phase) of the s- and p-polarized components of the light, leading to general elliptical polarization. This is generally an unwanted effect of dispersive prisms.\n[…]\nFresnel rhomb uses this effect to achieve conversion between circular and linear polarisation. This phase difference is not explicitly dependent on wavelength, but only on refractive index, so Fresnel rhombs made of low-dispersion glasses achieve much broader spectral range than quarter-wave plates. They displace the beam, however.\n[…]\nSimilar effect can also be used to make a polarization-maintaining optics.\n[…]\nTotal internal reflection in prisms finds numerous uses through optics, plasmonics and microscopy. In particular:\n[…]\nAnamorphic pair of similar, but asymmetrically placed prisms can also change the profile of a beam. This is often used to make a round beam from the elliptical output of a laser diode. With its monochromatic light, slight chromatic dispersion arising from different wedge inclination is not a problem.\n[…]\nMultiple-prism dispersion theory\n[…]\nHecht, Eugene (2001). Optics (4th ed.). Pearson Education. ISBN 0-8053-8566-5."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dispers%C3%A3o_%28%C3%B3ptica%29",
        "situacao": "ok",
        "texto": "A dispersão óptica (chamada também de dispersão cromática por causa das diferentes cores associadas aos comprimentos de onda) é um resultado direto da refração e importantíssimo para o nosso cotidiano.\n[…]\nEsse fenômeno é, de certa forma, famoso por conta do arco-íris, que é o exemplo mais comum da dispersão cromática. Como visto na figura ao lado, um feixe de luz branca (formado por todas ou quase todas as cores) é separado em feixes de cores diferentes por causa da dispersão. O índice de refração é uma propriedade que muda de um meio para outro; logo, a dispersão cromática é mais acentuada em alguns materiais do que outros.\n[…]\nNo primeiro caso, a luz branca está passando de um meio com um índice de refração menor para um maior: do ar para o vidro, por exemplo. Dessa forma, os raios de luz se aproximam da normal. Como a cor azul possui um comprimento de onda menor, o desvio sofrido pelo raio de luz azul é maior em relação ao raio incidente. No entanto,\n[…]\nnão é maior que\n[…]\nNo segundo caso, a luz branca está passando de um meio com um índice de refração maior para um menor: do vidro para o ar, por exemplo. Dessa forma, os raios de luz se afastam da reta normal. Assim como aconteceu no primeiro caso, a cor azul também sofre um desvio maior que a cor vermelha em relação ao raio incidente.\n[…]\nLogo, no caso do arco-íris, basta fazer essa análise com todas as cores do espectro visível. Por fim, para aumentar os efeitos da dispersão cromática, em geral é usado o prisma triangular de um material refrator (vidro, por exemplo), como foi exemplificado em uma das figuras deste artigo. Esse aumento é devido à dispersão que ocorre quando a luz penetra na superfície, e também quando ele deixa a superfície.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Radiação gama",
      "descricao": "Radiação eletromagnética de altíssima energia emitida por núcleos atômicos e por fenômenos astrofísicos violentos."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes tipos de radiação eletromagnética, qual carrega mais energia?",
    "resposta": "Raios gama",
    "distratores": [
      "Raios X",
      "Ultravioleta",
      "Micro-ondas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gamma_ray",
      "https://en.wikipedia.org/wiki/Electromagnetic_spectrum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gamma_ray",
        "situacao": "ok",
        "texto": "A gamma ray, also known as gamma radiation (symbol γ), is a penetrating form of electromagnetic radiation arising from high-energy interactions like the radioactive decay of atomic nuclei or astronomical events like solar flares. Lower energy gamma radiation overlaps the upper end of X-ray radiation; they are distinguished by their different origins. Gamma ray photons have photon energy at the low\n[…]\nIn astrophysics, gamma rays are conventionally defined as having photon energies above 100 keV and are the subject of gamma-ray astronomy, while radiation below 100 keV is classified as X-rays and is the subject of X-ray astronomy.\n[…]\nThe photoelectric effect is the dominant energy transfer mechanism for X-ray and gamma ray photons with energies below 50 keV (thousand electronvolts), but it is much less important at higher energies.\n[…]\nPair production: This becomes possible with gamma energies exceeding 1.02 MeV, and becomes important as an absorption mechanism at energies over 5 MeV (see illustration at right, for lead). By interaction with the electric field of a nucleus, the energy of the incident photon is converted into the mass of an electron-positron pair.\n[…]\nHowever, since current artificial sources are now able to duplicate any electromagnetic radiation that originates in the nucleus, as well as far higher energies, the wavelengths characteristic of radioactive gamma ray sources vs. other types now completely overlap. Thus, gamma rays are now usually distinguished by their origin: X-rays are emitted by definition by electrons outside the nucleus, while gamma rays are emitted by the nucleus.\n[…]\nVery-high-energy gamma ray\n[…]\nUltra-high-energy gamma ray\n[…]\nGamma-ray bursts\n[…]\nThe Lund/LBNL Nuclear Data Search – Contains information on gamma-ray energies from isotopes.\n[…]\nThe LIVEChart of Nuclides – IAEA with filter on gamma-ray energy"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Electromagnetic_spectrum",
        "situacao": "ok",
        "texto": "The electromagnetic spectrum is the full range of electromagnetic radiation, organized by frequency or wavelength. The spectrum is divided into separate bands, with different names for the electromagnetic waves within each band. From low to high frequency these are: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays.\n[…]\nGamma rays, at the high-frequency end of the spectrum, have the highest photon energies and the shortest wavelengths—much smaller than an atomic nucleus. Gamma rays, X-rays, and extreme ultraviolet rays are called ionizing radiation because their high photon energy is able to ionize atoms, causing chemical reactions. Longer-wavelength radiation such as visible light is non-ionizing; the photons do not have sufficient energy to ionize atoms.\n[…]\nGamma radiation\n[…]\nThe energy of X-rays and gamma rays overlap; usually if the source of the radiation is an electronic transition in an atom it will be called an x-ray, but if the source is nuclear decay it will be called a gamma ray. Electronic transitions in muonic atoms transitions are also said to produce X-rays. In astrophysics, energies below 100 keV are called X-rays and higher energies are gamma rays.\n[…]\nFor example, the cosmic microwave background, relic blackbody radiation from the era of recombination, started out at energies around 1 eV, but has undergone enough cosmological red shift to put it into the microwave region of the spectrum for observers on Earth.\n[…]\nThey are used for irradiation of foods and seeds for sterilization, and in medicine they are occasionally used in radiation cancer therapy. More commonly, gamma rays are used for diagnostic imaging in nuclear medicine, an example being PET scans. The wavelength of gamma rays can be measured with high accuracy through the effects of Compton scattering."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Radia%C3%A7%C3%A3o_gama",
        "situacao": "ok",
        "texto": "Um raio gama, também chamado de radiação gama, de símbolo γ, é uma forma penetrante de radiação eletromagnética produzida em interações de alta energia, como o decaimento radioativo de núcleos atômicos, ou em fenômenos astronômicos, como as erupções solares. A radiação gama de menor energia se sobrepõe à faixa superior dos raios X, e as duas são diferenciadas pela origem. Na extremidade inferior d\n[…]\nRaios gama com energia superior a 1.022 keV também podem interagir com núcleos e gerar um elétron e um pósitron por produção de pares.\n[…]\nA radiação gama de origem extraterrestre contém uma componente difusa produzida quando raios cósmicos, como elétrons ou prótons de alta velocidade, interagem com a matéria. Essas interações podem gerar pósitrons, cuja aniquilação com elétrons produz fótons de 511 keV. A interação de elétrons dos raios cósmicos com núcleos de número atômico elevado também pode produzir bremsstrahlung com energias de dezenas de MeV ou mais.\n[…]\nOs raios gama de quasares muito distantes e de galáxias ativas mais próximas podem ser produzidos por processos semelhantes aos de um acelerador de partículas. Elétrons de alta energia emitem radiação por espalhamento Compton inverso, radiação síncrotron ou bremsstrahlung. A energia desses objetos vem da acreção de matéria por um buraco negro supermassivo no centro da galáxia. Parte da matéria forma jatos de partículas carregadas que saem das regiões polares.\n[…]\nVer também: Erupção de raios gama.\n[…]\nOs raios gama podem lesar as células e, devido ao seu poder de penetração, atingir tecidos em diferentes partes do corpo. Sua ionização é indireta, por meio das partículas carregadas produzidas nas interações com a matéria. Partículas alfa depositam energia de forma muito mais concentrada ao longo de percursos curtos. Para fins de proteção radiológica, fótons gama e partículas beta recebem o mesmo fator de ponderação da radiação, igual a 1.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Diamante",
      "descricao": "Forma cristalina do carbono, o mineral natural mais duro, usado em joias e ferramentas de corte."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes materiais conduz melhor o calor?",
    "resposta": "Diamante",
    "distratores": [
      "Prata",
      "Cobre",
      "Alumínio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Material_properties_of_diamond",
      "https://en.wikipedia.org/wiki/Diamond"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Material_properties_of_diamond",
        "situacao": "ok",
        "texto": "Diamond is the allotrope of carbon in which the carbon atoms are arranged in the specific type of cubic lattice called diamond cubic. It is a crystal that is transparent to opaque and which is generally isotropic (no or very weak birefringence). Diamond is the hardest naturally occurring material known. Yet, due to important structural brittleness, bulk diamond's toughness is only fair to good.\n[…]\nDiamond also has one of the smallest compressibilities of any material.\n[…]\nDiamond's electronic properties can be also modulated by strain engineering.\n[…]\nUncommon magnetic properties (spin glass state) were observed in diamond nanocrystals intercalated with potassium. Unlike paramagnetic host material, magnetic susceptibility measurements of intercalated nanodiamond revealed distinct ferromagnetic behavior at 5 K. This is essentially different from results of potassium intercalation in graphite or C60 fullerene, and shows that sp3 bonding promotes magnetic ordering in carbon.\n[…]\nMonocrystalline synthetic diamond enriched to 99.9% the isotope 12C had the highest thermal conductivity of any known solid at room temperature: 3,320 W/(m·K), though reports exist of superior thermal conductivity in both carbon nanotubes and graphene. Because diamond has such high thermal conductance it is already used in semiconductor manufacture to prevent silicon and other semiconducting materials from overheating.\n[…]\nTechnologically, the high thermal conductivity of diamond is used for the efficient heat removal in high-end power electronics. Diamond is especially appealing in situations where electrical conductivity of the heat sinking material cannot be tolerated e.g. for the thermal management of high-power radio-frequency (RF) microcoils that are used to produce strong and local RF fields.\n[…]\nProperties of diamond\n[…]\nProperties of diamond (S. Sque, PhD thesis, 2005, University of Exeter, UK)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Diamond",
        "situacao": "ok",
        "texto": "Diamond is a mineral form of the element carbon with its atoms arranged in a crystal structure called diamond cubic. Diamond is a tasteless, odorless, strong, brittle solid, a poor conductor of electricity, colorless in pure form, and insoluble in water. Another solid form of carbon known as graphite is the chemically stable form of carbon at room temperature and pressure, but diamond is metastabl\n[…]\nTaken together, these factors affect the overall appearance of a polished diamond and most diamantaires still rely upon skilled use of a loupe (magnifying glass) to identify diamonds \"by eye\".\n[…]\nThe city of Antwerp also hosts the Antwerpsche Diamantkring, created in 1929 to become the first and biggest diamond bourse dedicated to rough diamonds. Another important diamond center is New York City, where almost 80% of the world's diamonds are sold, including auction sales.\n[…]\nToday, most commercially viable diamond deposits are in Russia (mostly in Sakha Republic, for example Mir pipe and Udachnaya pipe), Botswana, Australia (Northern and Western Australia) and the Democratic Republic of the Congo. In 2005, Russia produced almost one-fifth of the global diamond output, according to the British Geological Survey. Australia boasts the richest diamantiferous pipe, with production from the Argyle diamond mine reaching peak levels of 42 metric tons per year in the 1990s.\n[…]\nA diamond simulant is a non-diamond material that is used to simulate the appearance of a diamond, and may be referred to as diamante. Cubic zirconia is the most common. The gemstone moissanite (silicon carbide) can be treated as a diamond simulant, though more costly to produce than cubic zirconia. Both are produced synthetically.\n[…]\nSimilarly, natural diamonds usually have minor imperfections and flaws, such as inclusions of foreign material, that are not seen in synthetic diamonds.\n[…]\nProperties of diamond: Ioffe database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Propriedades_materiais_do_diamante",
        "situacao": "ok",
        "texto": "O diamante é o alótropo do carbono no qual os átomos de carbono estão organizados no tipo específico de rede cúbica chamado estrutura cúbica do diamante. É um cristal que varia de transparente a opaco e que geralmente é isotrópico, sem birrefringência ou com birrefringência muito fraca. O diamante é o material de ocorrência natural mais duro conhecido. Ainda assim, devido à importante fragilidade \n[…]\nDemonstrou-se que alguns agregados de diamante com tamanho de grão nanométrico são mais duros e tenazes que cristais convencionais grandes de diamante; por isso, apresentam melhor desempenho como material abrasivo. Devido ao uso desses novos materiais ultraduros para ensaios de diamante, valores mais precisos de dureza do diamante são hoje conhecidos.\n[…]\nO diamante também tem uma das menores compressibilidades entre todos os materiais.\n[…]\nCristais estrangeiros sólidos são comumente presentes no diamante. Em sua maioria são minerais, como olivina, granadas, rubi e muitos outros. Essas e outras inclusões, como fraturas internas ou \"penas\", podem comprometer a integridade estrutural de um diamante. Diamantes lapidados que foram melhorados para aumentar sua pureza por preenchimento vítreo de fraturas ou cavidades são especialmente frágeis, pois o vidro não resiste à limpeza ultrassônica nem ao calor do maçarico do joalheiro.\n[…]\nEm temperaturas mais baixas, a condutividade se torna ainda melhor e atinge 41 000 W/(m·K) a 104 K, ou −169 °C, em diamante enriquecido com 12C.\n[…]\nTecnologicamente, a alta condutividade térmica do diamante é usada para remoção eficiente de calor em eletrônica de potência de alto desempenho. O diamante é especialmente atrativo em situações em que a condutividade elétrica do material dissipador de calor não pode ser tolerada, por exemplo, na gestão térmica de microbobinas de radiofrequência (RF) de alta potência usadas para produzir campos de RF fortes e locais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Plasma",
      "descricao": "Estado da matéria formado por gás ionizado, com elétrons livres, presente nas estrelas, nos raios e nas auroras."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Contando a matéria das estrelas, qual estado da matéria é o mais comum no universo visível?",
    "resposta": "Plasma",
    "distratores": [
      "Gasoso",
      "Sólido",
      "Líquido"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Plasma_(physics)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Plasma_(physics)",
        "situacao": "ok",
        "texto": "Plasma is a state of matter that results from one of the other three classical states (often, the gaseous one) having undergone an appreciable degree of ionization. It thus consists of a significant portion of charged particles (ions and/or electrons). While rarely encountered on Earth, it is estimated that 99.9% of all ordinary matter in the universe is plasma. Stars are almost pure balls of plas\n[…]\n), non-thermal or \"cold\" plasma (\n[…]\nThe spontaneous formation of interesting spatial features on a wide range of length scales is one manifestation of plasma complexity. The features are interesting, for example, because they are very sharp, spatially intermittent (the distance between features is much larger than the features themselves), or have a fractal form. Many of these features were first studied in the laboratory, and have subsequently been recognized throughout the universe.\n[…]\nImpermeable plasma is a type of thermal plasma which acts like an impermeable solid with respect to gas or cold plasma and can be physically pushed. Interaction of cold gas and thermal plasma was briefly studied by a group led by Hannes Alfvén in 1960s and 1970s for its possible applications in insulation of fusion plasma from the reactor walls.\n[…]\nIn 2013, a group of materials scientists reported that they have successfully generated stable impermeable plasma with no magnetic confinement using only an ultrahigh-pressure blanket of cold gas. While spectroscopic data on the characteristics of plasma were claimed to be difficult to obtain due to the high pressure, the passive effect of plasma on synthesis of different nanostructures clearly suggested the effective confinement.\n[…]\nList of plasma physics software\n[…]\nQuark-gluon plasma\n[…]\nIntroduction to Plasma Physics: Graduate course given by Richard Fitzpatrick|M.I.T. Introduction by I.H.Hutchinson\n[…]\nPlasma Material Interaction\n[…]\nPlasma Formulary Interactive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Plasma",
        "situacao": "ok",
        "texto": "Plasma é um estado da matéria que resulta de um grau apreciável de ionização de um dos outros três estados clássicos, em geral o gasoso. Uma fração considerável de suas partículas possui carga elétrica, na forma de íons e/ou elétrons. Embora seja pouco comum na Terra, estima-se que 99,9% de toda a matéria comum do Universo esteja no estado de plasma. As estrelas são quase inteiramente constituídas\n[…]\nO plasma é chamado de quarto estado da matéria, depois do sólido, do líquido e do gás. É um estado em que uma substância ionizada se torna suficientemente condutora para que campos elétricos e magnéticos de longo alcance dominem seu comportamento.\n[…]\nO plasma possui propriedades diferentes das encontradas nos outros estados da matéria. Em especial, tratar um plasma de baixa densidade apenas como \"gás ionizado\" pode ocultar os efeitos coletivos que o distinguem de um gás comum. Os dois estados não têm forma nem volume definidos, mas diferem em pontos fundamentais:\n[…]\nMais de 99% da matéria observada no Universo visível está no estado de plasma. Acima da superfície da Terra, a ionosfera é um plasma, e a magnetosfera também contém plasma.\n[…]\nPlasmas astrofísicos também são encontrados em discos de acreção ao redor de estrelas ou objetos compactos, como anãs brancas, estrelas de nêutrons e buracos negros em sistemas de estrelas binárias. O plasma também participa da ejeção de matéria em jatos astrofísicos, observados em buracos negros com acreção e em galáxias ativas, como no jato de M87, que pode se estender por cerca de 5.000 anos-luz.\n[…]\n, ou plasma não térmico, também chamado de \"frio\", com\n[…]\nPlasma de quarks e glúons, estado de matéria formado por quarks e glúons desconfinados em temperaturas ou densidades extremas\n[…]\nIntroduction to Plasma Physics: curso de pós-graduação de Richard Fitzpatrick | introdução de I. H. Hutchinson no MIT\n[…]\nPlasma Material Interaction\n[…]\nPlasma Formulary Interactive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Nêutron",
      "descricao": "Partícula subatômica sem carga elétrica que, com os prótons, forma o núcleo dos átomos; descoberta por James Chadwick em 1932."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Comparando as partículas subatômicas a seguir, qual delas tem a maior massa?",
    "resposta": "Nêutron",
    "distratores": [
      "Próton",
      "Elétron",
      "Neutrino"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Neutron"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Neutron",
        "situacao": "ok",
        "texto": "A neutron is a subatomic particle, symbol n or n0, that has no electric charge, and a mass slightly greater than that of a proton. The neutron was discovered by James Chadwick in 1932, leading to the discovery of nuclear fission in 1938, the first self-sustaining nuclear reactor (Chicago Pile-1, 1942), and the first nuclear weapon (Trinity, 1945).\n[…]\nThe story of the discovery of the neutron and its properties is central to the extraordinary developments in atomic physics that occurred in the first half of the 20th century, leading ultimately to the atomic bomb in 1945. The name derives from the Latin root for neutralis (neuter) and the Greek suffix -on (a suffix used in the names of subatomic particles, e.g. electron and proton)\n[…]\nAbout the time Rutherford suggested the neutral proton-electron composite, several other publications appeared making similar suggestions, and in 1921 the American chemist W. D. Harkins first named the hypothetical particle a \"neutron\".\n[…]\nEven though the neutron is a neutral particle, the magnetic moment of a neutron is not zero. The neutron is not affected by electric fields, but it is affected by magnetic fields. The value for the neutron's magnetic moment was first directly measured by Luis Alvarez and Felix Bloch at Berkeley, California, in 1940. Alvarez and Bloch determined the magnetic moment of the neutron to be μn= −1.93(2) μN, where μN is the nuclear magneton.\n[…]\nFree neutrons are unstable, although they have the longest half-life of any unstable subatomic particle by several orders of magnitude. Their half-life is still only about 10 minutes, so they can be obtained only from sources that produce them continuously.\n[…]\nNeutron source\n[…]\nNeutron bomb\n[…]\nNeutron diffraction\n[…]\nNeutron flux\n[…]\nNeutron imaging\n[…]\nNeutron transport\n[…]\nAnnotated bibliography for neutrons from the Alsos Digital Library for Nuclear Issues."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/N%C3%AAutron",
        "situacao": "ok",
        "texto": "Um nêutron (português brasileiro) ou neutrão (português europeu) é um bárion eletricamente neutro. Composto por dois quarks down e um quark up, forma o núcleo atômico juntamente com o próton e, uma vez fora deste, é instável e tem uma vida média de cerca de 15 minutos, emitindo um elétron e um antineutrino, convertendo-se em um próton.\n[…]\nAssim como o acelerador de elétrons, quanto maior a energia da partícula incidente no alvo de baixo número atômico, maior a faixa de energia dos nêutrons liberados.\n[…]\nO Hidrogênio acelerado como já discutimos é capaz de realizar interações coulombianas e, assim, produzir radiações ionizantes. Já o Nitrogênio - 16 tem capacidade para emitir radiações Beta e Gama. Como podemos ver o nêutron quando interage com o Oxigênio - 16 resulta em outras duas partículas que podem provocar radiações ionizantes. Tal cascata provocada pelas interações dos nêutrons torna a sua blindagem um processo relativamente complexo quando comparado a outras radiações.\n[…]\nSabemos que o nêutron, por ser eletricamente neutro, não é auto conjugado de carga. Tanto o nêutron quanto o antinêutron possuem a mesma massa e nenhuma carga elétrica, mas podemos distingui-los por outros números quânticos. Além disso, o antinêutron é composto por antiquarks. Particularmente o antinêutron é composto por dois antiquarks down e um antiquark up.\n[…]\nO spin de nêutrons não carrega massa e só pode ser descrito mecanicamente, mas exibe uma propriedade inercial. Quando as rotações são consideradas, as coisas são semelhantes: o momento angular de um objeto em rotação é conservado desde que nenhum torque externo seja aplicado. Mas, ao considerar partículas quânticas, as coisas se tornam mais complicadas: partículas como nêutrons apresentam um tipo especial de momento angular - o spin.\n[…]\nNMI3 - Iniciativa Europeia de neutrões e muões",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Partícula alfa",
      "descricao": "Partícula formada por dois prótons e dois nêutrons, emitida por núcleos radioativos no decaimento alfa."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estas radiações emitidas por materiais radioativos, qual é barrada por uma simples folha de papel?",
    "resposta": "Radiação alfa",
    "distratores": [
      "Radiação beta",
      "Radiação gama",
      "Radiação de nêutrons"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alpha_particle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alpha_particle",
        "situacao": "ok",
        "texto": "Alpha particles, also called alpha rays or alpha radiation, consist of two protons and two neutrons bound together into a particle identical to the nucleus of a helium-4 atom. They are generally produced in the process of alpha decay but may also be produced in other ways. Alpha particles are named after the first letter in the Greek alphabet, α. The symbol for the alpha particle is α or α2+.\n[…]\nRutherford decided the second explanation was the most plausible because it is the simplest and sizeable deposits of helium were commonly found underground next to deposits of radioactive elements. His explanation was that as alpha particles are emitted by underground radioactive elements, they become trapped in the rock strata and acquire electrons, becoming helium atoms. Therefore an alpha particle is essentially a helium atom stripped of two electrons.\n[…]\nAlpha decay can provide a relatively safe power source for radioisotope thermoelectric generators  used for space probes. Alpha decay is much more easily shielded against than other forms of radioactive decay. Plutonium-238, a source of alpha particles, requires only 2.5 mm of lead shielding to protect against unwanted radiation.\n[…]\nRadium-224 is a radioactive atom that is utilized as a source of alpha radiation in a cancer treatment device called DaRT (diffusing alpha emitters radiation therapy). Each radium-224 atom undergoes a decay process producing 6 daughter atoms. During this process, 4 alpha particles are emitted. The range of an alpha particle—up to 100 microns—is insufficient to cover the width of many tumors.\n[…]\nIn computer technology, dynamic random access memory (DRAM) \"soft errors\" were linked to alpha particles in 1978 in Intel's DRAM chips. The discovery led to strict control of radioactive elements in the packaging of semiconductor materials, and the problem is largely considered to be solved.\n[…]\nRadioactive isotope"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Part%C3%ADcula_alfa",
        "situacao": "ok",
        "texto": "A partícula alfa é uma partícula composta por dois prótons e dois nêutrons, tendo a mesma estrutura do núcleo do átomo de hélio e sendo denotada pela letra grega α. Portanto, a partícula alfa possui duas unidades de carga positiva e quatro unidades de massa atômica. É emitida espontaneamente por núcleos de elementos radioativos, com número atômico maior que 82, como urânio, tório, polônio e rádio,\n[…]\nEm 1902, Rutherford observou que a radiação alfa era defletida por campos elétricos e magnéticos, no sentido contrário à radiação beta (que já se sabia, era constituída de elétrons e, portanto, com carga negativa) e que o grau de deflexão da radiação alfa era muito menor que o da beta. Assim, Rutherford conclui que a radiação alfa era constituída por partículas positivamente carregadas e que eram mais massivas que os elétrons.\n[…]\nUm mesmo tipo de núcleo pode emitir partículas alfa com diferentes energias, gerando um espectro. Isso ocorre porque o núcleo filho pode estar no estado fundamental ou em um estado excitado. Se o núcleo filho está em um estado excitado, ele pode passar para estado fundamental, emitindo radiação eletromagnética (raios gama). Dessa forma, a emissão da partícula alfa pode ser acompanhada pela emissão de um raio gama.\n[…]\nNo ar, por exemplo, a energia para criar um íon é, em média, 34,5 eV, assim uma partícula alfa emitida pelo átomo de radônio 222 que possui uma energia de 5,49 MeV, causa 1,59x105 íons.\n[…]\nA grande massa e carga da partícula alfa, comparada com outros tipos de radiação, dão a ela um grande poder de ionização, porém, pouca capacidade de penetrar a matéria. No ar, por exemplo, as partículas alfa percorrem alguns centímetros (dependendo da energia inicial da partícula).\n[…]\nNa tabela abaixo, alguns exemplos do alcance da penetração de uma partícula alfa com energia de 5,5 MeV (emitida pelo radionuclídeo amerício 241) para vários materiais (em cm):",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Gravidade da Terra",
      "descricao": "Aceleração que a Terra imprime aos corpos na sua superfície, que varia levemente com a latitude por causa da rotação e do achatamento do planeta."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Por causa da rotação e do formato achatado da Terra, em que região do planeta uma balança marca um peso um pouquinho menor?",
    "resposta": "Na linha do Equador",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gravity_of_Earth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gravity_of_Earth",
        "situacao": "ok",
        "texto": "The gravity of Earth, denoted by g, is the net acceleration that is imparted to objects due to the combined effect of gravitation (from mass distribution within Earth) and the centrifugal force (from the Earth's rotation).\n[…]\nThe second major reason for the difference in gravity at different latitudes is that the Earth's equatorial bulge (itself also caused by centrifugal force from rotation) causes objects at the Equator to be further from the planet's center than objects at the poles. The force due to gravitational attraction between two masses (a piece of the Earth and the object being weighed) varies inversely with the square of the distance between them.\n[…]\nThe magnitude of gravity on Earth is a key factor in creating and sustaining Earth's atmosphere which in turn is essential for maintaining water in the oceans. The force of gravity works opposite to the kinetic energy of gas molecules energized by the Sun. On the one hand, Earth's gravity is small enough to allow light gases like hydrogen to escape, unlike large planets like Jupiter. On the other hand, Earth gravity is strong enough to retain larger molecules.\n[…]\nThis formula works because the gravity of a uniform spherical body, as measured on or above its surface, is the same as if all its mass were concentrated at a point at its centre. This is what allows us to use the Earth's radius for r.\n[…]\nThis calculated value of g only includes true gravity. It does not include the reduction of constraint force that we perceive as a reduction of gravity due to the rotation of Earth, and some of gravity being counteracted by centrifugal force.\n[…]\nThe measurement of Earth's gravity is called gravimetry.\n[…]\nGeoid 2011 model Potsdam Gravity Potato"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gravidade_da_Terra",
        "situacao": "ok",
        "texto": "A gravidade da Terra, denotada por g, é a aceleração resultante da gravitação produzida pela distribuição de massa do sistema terrestre e da força inercial centrífuga gerada pela rotação da Terra. Como grandeza vetorial, tem a direção definida por um prumo e magnitude dada pela norma euclidiana\n[…]\nUma esfera perfeita e não girante produziria um campo gravitacional de mesma magnitude em todos os pontos de sua superfície se tivesse densidade uniforme ou densidade dependente apenas da distância ao centro, condição de simetria esférica. A Terra gira, é ligeiramente achatada nos polos e abaulada no equador, com forma próxima à de uma esfera oblata. Essas características produzem pequenas diferenças na magnitude da gravidade ao longo da superfície.\n[…]\nA rotação da Terra torna a superfície um referencial não inercial e gera uma força centrífuga para fora, mais intensa perto do equador do que nas latitudes polares. Essa força reduz a aceleração aparente para baixo e, no equador, corresponde a cerca de 0,35% da gravidade local.\n[…]\nA protuberância equatorial, também causada pela rotação, aumenta a distância entre a superfície e o centro da Terra no equador em comparação com os polos. A atração gravitacional entre duas massas diminui com o quadrado da distância entre elas, e a distribuição de massa sob um ponto da superfície também muda com a latitude. Um objeto no equador sofre, por esses efeitos, atração gravitacional menor do que um objeto em qualquer dos polos.\n[…]\nA diferença teórica entre equador e polos calculada pela fórmula de Somigliana com as constantes do WGS 84 é de cerca de 0,53%, antes das irregularidades do campo gravitacional terrestre.\n[…]\nFigura da Terra, forma terrestre que influencia as variações da gravidade\n[…]\nGeopotencial, potencial do campo de gravidade terrestre",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Hélio",
      "descricao": "Elemento químico de número atômico 2, gás nobre leve usado em balões, que permanece líquido perto do zero absoluto."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual é o único elemento químico que não se solidifica sob pressão normal, mesmo resfriado até perto do zero absoluto?",
    "resposta": "Hélio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Helium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Helium",
        "situacao": "ok",
        "texto": "Helium (from Ancient Greek: ἥλιος, romanized: helios, lit. 'sun') is a chemical element; it has symbol He and atomic number 2. It is a colorless, odorless, non-toxic, inert, monatomic gas and the first in the noble gas group in the periodic table. Its boiling point is the lowest among all the elements, and it does not have a melting point at standard pressures. It is the second-lightest and second\n[…]\nHelium liquifies when cooled below 4.2 K (−268.95 °C; −452.11 °F) at atmospheric pressure. Unlike any other element, however, helium remains liquid down to a temperature of absolute zero. This is a direct effect of quantum mechanics: specifically, the zero point energy of the system is too high to allow freezing. Pressures above about 2.5 MPa (25 atm) are required to freeze it.\n[…]\nQuantum mechanics is needed to explain this property and thus both states of liquid helium (helium I and helium II) are called quantum fluids, meaning they display atomic properties on a macroscopic scale. This may be an effect of its boiling point being so close to absolute zero, preventing random molecular motion (thermal energy) from masking the atomic properties.\n[…]\nHelium remains liquid down to absolute zero at atmospheric pressure, but it freezes at high pressure. Solid helium requires a temperature of 1–1.5 K (about −272 °C or −457 °F) at about 25 bar (2.5 MPa) of pressure. It is often hard to distinguish solid from liquid helium since the refractive index of the two phases are nearly the same.\n[…]\nHelium has a valence of zero and is chemically unreactive under all normal conditions. It is an electrical insulator unless ionized. As with the other noble gases, helium has metastable energy levels that allow it to remain ionized in an electrical discharge with a voltage below its ionization potential.\n[…]\nDemonstration of superfluid helium (Alfred Leitner, 1963, 38 min.)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/H%C3%A9lio",
        "situacao": "ok",
        "texto": "O hélio (em grego: Ήλιος; romaniz.: Helios; lit. \"\"Sol\"\") é um elemento químico de símbolo He e que possui massa atómica igual a 4 u, apresentando número atômico 2 (2 prótons e 2 elétrons). Em temperatura ambiente o hélio encontra-se no estado gasoso.\n[…]\nÉ um gás monoatômico, incolor e inodoro. O hélio tem o menor ponto de evaporação de todos os elementos químicos, e só pode ser solidificado sob pressões muito grandes. É o segundo elemento químico em abundância no universo, atrás do hidrogênio, mas na atmosfera terrestre encontram-se apenas traços, provenientes da desintegração de alguns elementos. Em alguns depósitos naturais de gás é encontrado em quantidade suficiente para a sua exploração.\n[…]\nTem o ponto de solidificação mais baixo de todos os elementos químicos, sendo o único líquido que não pode solidificar-se baixando a temperatura, já que permanece no estado líquido no zero absoluto à pressão normal. De resto, sua temperatura crítica é de apenas 5,19 K. Os isótopos 3He e 4He são os únicos em que é possível, aumentando a pressão, reduzir o volume mais de 30%.\n[…]\nEm 1895 Sir William Ramsay isolou o hélio a partir do aquecimento da cleveíta, descobrindo que não era metálico, entretanto o nome original foi conservado. Os químicos suecos Abraham Langlet e Per Teodor Cleve conseguiram também, na mesma época, isolar o elemento.\n[…]\nDado que o hélio é um gás nobre, praticamente não participa de reações químicas, ainda que sob a influência de descargas elétricas ou bombardeado com elétrons forme compostos com o tungstênio.\n[…]\nHélio 3\n[…]\nHélio 4\n[…]\nOs estoques de gás hélio de 5 a 10 K devem ser armazenados como líquido devido ao grande incremento de pressão que se produz ao aquecer o gás a temperatura ambiente.\n[…]\n«Hélio - vídeos e imagens»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Calor específico",
      "descricao": "Quantidade de energia necessária para elevar em um grau a temperatura de uma unidade de massa de uma substância."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Para esquentar um quilo de cada uma destas substâncias em um grau, qual exige mais energia?",
    "resposta": "Água",
    "distratores": [
      "Ferro",
      "Areia",
      "Azeite"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Specific_heat_capacity",
      "https://en.wikipedia.org/wiki/Table_of_specific_heat_capacities"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Specific_heat_capacity",
        "situacao": "ok",
        "texto": "In thermodynamics, the specific heat capacity (symbol c) of a substance is the amount of heat that must be added to one unit of mass of the substance in order to cause an increase of one unit in temperature. It is also referred to as massic heat capacity or as the specific heat. More formally it is the heat capacity of a sample of the substance divided by the mass of the sample. The SI unit of spe\n[…]\nThe specific heat capacity of a substance, especially a gas, may be significantly higher when it is allowed to expand as it is heated (specific heat capacity at constant pressure) than when it is heated in a closed vessel that prevents expansion (specific heat capacity at constant volume). These two values are usually denoted by\n[…]\nThese parameters are usually specified when giving the specific heat capacity of a substance. For example, \"Water (liquid):\n[…]\nThese extra degrees of freedom or \"modes\" contribute to the specific heat capacity of the substance. Namely, when energy is introduced into a gas with polyatomic molecules, only part of it will increase their kinetic energy, and hence the temperature; the rest will go into the other degrees of freedom. To achieve the same increase in temperature, more heat is needed for a gram of that substance than for a gram of a monatomic gas.\n[…]\nIn that case, the specific heat capacity of the substance increases with temperature, sometimes in a step-like fashion as mode becomes unfrozen and starts absorbing part of the input heat.\n[…]\nThe dimensionless heat capacity of a material is\n[…]\nIn theory, the specific heat capacity of a substance can also be derived from its abstract thermodynamic modeling by an equation of state and an internal energy function.\n[…]\nTo apply the theory, one considers the sample of the substance (solid, liquid, or gas) for which the specific heat capacity can be defined; in particular, that it has homogeneous composition and fixed mass"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Table_of_specific_heat_capacities",
        "situacao": "ok",
        "texto": "The table of specific heat capacities gives the volumetric heat capacity as well as the specific heat capacity of some substances and engineering materials, and (when applicable) the molar heat capacity.\n[…]\nNote that the especially high molar values, as for paraffin, gasoline, water and ammonia, result from calculating specific heats in terms of moles of molecules. If specific heat is expressed per mole of atoms for these substances, none of the constant-volume values exceed, to any large extent, the theoretical Dulong–Petit limit of 25 J⋅mol−1⋅K−1 = 3 R per mole of atoms (see the last column of this table).\n[…]\nFor example, Paraffin has very large molecules and thus a high heat capacity per mole, but as a substance it does not have remarkable heat capacity in terms of volume, mass, or atom-mol (which is just 1.41 R per mole of atoms, or less than half of most solids, in terms of heat capacity per atom). The Dulong–Petit limit also explains why dense substances, such as lead, which have very heavy atoms, rank very low in mass heat capacity.\n[…]\nThe specific heat of the human body calculated from the measured values of individual tissues is 2.98 J · g−1· K−1. This is 17% lower than the earlier, more widely used value based on non-measured values of 3.47 J · g−1· K−1. The contribution of the muscle to the specific heat of the body is approximately 47%, and the contribution of the fat and skin is approximately 24%. The specific heat of tissues range from ~0.7 J · g−1 · K−1 for tooth (enamel) to 4.2 J · g−1 · K−1 for eye (sclera)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Calor_espec%C3%ADfico",
        "situacao": "ok",
        "texto": "Calor específico é uma grandeza física intensiva que define a variação térmica de determinada substância ao receber determinada quantidade de calor. Também é chamado de capacidade térmica mássica. A unidade no SI é J/(kg.K) (joule por quilograma e por kelvin). Uma unidade usual bastante utilizada para calores específicos é cal/(g.°C) (caloria por grama-grau Celsius).\n[…]\nO cilindro interno é enchido com água ou algum outro líquido de calor específico conhecido. Um corpo de massa m, e capacidade calorífica específica c, aquecido a uma certa temperatura T é imergido no calorímetro de massa m1 e capacidade calorífica c1 na qual a temperatura é medida.\n[…]\nDa lei de conservação da energia e considerando o calor dissipado na vizinhança pelo  objecto quente Q, o calor recebido pela água e pelo calorímetro que seja respectivamente Q1 e Q2 , mostra que a capacidade calorífica específica é\n[…]\nMoléculas sofrem muitas vibrações características internas. A energia potencial armazenada nestes graus de liberdade internos contribui para uma amostra do conteúdo de energia, mas não a sua temperatura. Graus de liberdade mais internos tendem a aumentar a capacidade de uma substância de calor específico, contanto que as temperaturas são suficientemente elevadas para superar os efeitos quânticos.\n[…]\nSe uma substância tem uma massa molar mais leve, em seguida, cada grama de que tem mais átomos ou moléculas disponíveis para armazenar energia. Esta é a razão pela qual o hidrogênio, a substância com menor massa molar tem um calor específico muito elevado.\n[…]\nContendo hidrogênio na sua composição, moléculas polares como o etanol, amônia e água, têm poderosas ligações intermoleculares de hidrogênio quando em sua fase líquida. Estas ligações proporcionam um outro local em que o calor pode ser armazenado como energia potencial de vibração, mesmo em baixas temperaturas comparativamente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Lâmpada incandescente",
      "descricao": "Lâmpada elétrica que produz luz aquecendo um filamento metálico até ele brilhar."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nas lâmpadas incandescentes, o filamento que brilha ao esquentar é feito de que metal, escolhido por resistir a temperaturas altíssimas?",
    "resposta": "Tungstênio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Incandescent_light_bulb",
      "https://en.wikipedia.org/wiki/Tungsten"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Incandescent_light_bulb",
        "situacao": "ok",
        "texto": "An incandescent light bulb, also known as an incandescent lamp or incandescent light globe, is an electric light that produces illumination by Joule heating a filament until it glows. The filament is enclosed in a glass bulb that is either evacuated or filled with inert gas to protect the filament from oxidation. Electric current is supplied to the filament by terminals or wires embedded in the gl\n[…]\nEarly light bulbs with carbon filaments also used carbon monoxide, nitrogen, or mercury vapor. However, carbon filaments operate at lower temperatures than tungsten ones, so the effect of the fill gas was not significant as the heat losses offset any benefits.\n[…]\nThe resistance of the filament is temperature dependent. The cold resistance of tungsten-filament lamps is about 1⁄15 the resistance when operating. For example, a 100-watt, 120-volt lamp has a resistance of 144 ohms when lit, but the cold resistance is much lower (about 9.5 ohms). Since incandescent lamps are resistive loads, simple phase-control TRIAC dimmers can be used to control brightness.\n[…]\nThe filament in a tungsten light bulb is not easy to break when the bulb is cold, but filaments are more vulnerable when they are hot because the incandescent metal is less rigid. An impact on the outside of the bulb may cause the filament to break or experience a surge in electric current that causes part of it to melt or vaporize.\n[…]\nPhotoflood lamps used for photographic lighting favor light output over life, with some lasting only two hours. The upper temperature limit for the filament is the melting point of the metal. Tungsten is the metal with the highest melting point, 3,695 K (3,422 °C; 6,191 °F). A 50-hour-life projection bulb, for instance, is designed to operate only 50 °C (122 °F) below that melting point. Such a lamp may achieve up to 22 lumens per watt, compared with 17.5 for a 750-hour general service lamp.\n[…]\nLight tube"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tungsten",
        "situacao": "ok",
        "texto": "Tungsten is a chemical element; it has symbol W (from German: Wolfram) and atomic number 74. It is a metal found naturally on Earth almost exclusively in compounds with other elements. It was identified as a distinct element in 1781 and first isolated as a metal in 1783. Its important ores include scheelite and wolframite, the latter lending the element its alternative name.\n[…]\nTungsten occurs in many alloys, which have numerous applications, including incandescent light bulb filaments, X-ray tubes, electrodes in gas tungsten arc welding, superalloys, and radiation shielding. Tungsten's hardness and high density make it suitable for military applications in penetrating projectiles. Tungsten compounds are often used as industrial catalysts. Its largest use is in tungsten carbide, a wear-resistant material used in metalworking, mining, and construction.\n[…]\nThe α phase has one third of the electrical resistivity and a much lower superconducting transition temperature Tc relative to the β phase: ca. 0.015 K vs. 1–4 K; mixing the two phases allows obtaining intermediate Tc values. The Tc value can also be raised by alloying tungsten with another metal (e.g. 7.9 K for W-Tc). Such tungsten alloys are sometimes used in low-temperature superconducting circuits.\n[…]\nTungsten's heat resistance makes it useful in arc welding applications when combined with another highly-conductive metal such as silver or copper. The silver or copper provides the necessary conductivity and the tungsten allows the welding rod to withstand the high temperatures of the arc welding environment.\n[…]\nBecause it retains its strength at high temperatures and has a high melting point, elemental tungsten is used in many high-temperature applications, such as incandescent light bulb, cathode-ray tube, and vacuum tube filaments, heating elements, and rocket engine nozzles."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%A2mpada_incandescente",
        "situacao": "ok",
        "texto": "A lâmpada incandescente é um dispositivo elétrico que transforma energia elétrica em energia luminosa e energia térmica através do efeito Joule. Dada a sua simplicidade, foi o primeiro dispositivo prático que permitiu utilizar eletricidade para iluminação, sendo durante as primeiras décadas de uso comercial da energia elétrica a principal forma de consumo daquela forma de energia.\n[…]\nA lâmpada de filamento de bambu carbonizado foi a que teve melhor rendimento e durabilidade, sendo em seguida substituída pela de celulose, e finalmente a conhecida até hoje com filamento de tungsténio cuja temperatura de trabalho chega a 3 000 °C.\n[…]\nAs primeiras lâmpadas incandescentes também utilizaram o ósmio e o tântalo como filamento, porém o tungstênio apresentava muitas propriedades desejáveis para o uso como um filamento, sua baixa pressão de vapor e alto ponto de fusão (3 422 °C) permitiam a operação em altas temperaturas e consequentemente possuía alta eficiência. Tipicamente a temperatura de operação de um filamento de tungstênio fica entre 2 200 °C e 2 700 °C (em algumas lâmpadas especiais pode atingir 3 120°C).\n[…]\nO Tungstênio leva vantagem sobre o carbono também no que diz respeito a resistência mecânica e ductilidade, o que permite a construção de filamentos mais finos, resistentes e baratos. Praticamente todas as lâmpadas incandescentes atuais utilizam filamentos de tungstênio trefilado e enrolados em forma de espiral, para diminuir as perdas de calor.\n[…]\nO filamento não deve ter contato com o ar, pois do contrário sua vida seria muito curta, devido à ação oxidante do oxigênio sobre ele. Por isso, as primeiras lâmpadas incandescentes possuíam o meio interno sob vácuo. Porém, esta baixa pressão favorecia a vaporização do filamento diminuindo a sua vida.\n[…]\nLâmpadas em vácuo eram o único tipo existente até 1913.\n[…]\nLâmpada fluorescente\n[…]\nLâmpada photoflood",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "RGB",
      "descricao": "Modelo de cores aditivo em que luzes vermelha, verde e azul se combinam para formar as cores exibidas em telas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As telas de TV e de celular formam todas as cores misturando pontinhos de luz de três cores. Vermelho, azul e qual outra?",
    "resposta": "Verde",
    "fonte": [
      "https://en.wikipedia.org/wiki/RGB_color_model"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/RGB_color_model",
        "situacao": "ok",
        "texto": "The RGB color model is an additive color model in which the red, green, and blue primary colors of light are added together in various ways to reproduce a broad array of colors. The name of the model comes from the initials of the three additive primary colors— red, green, and blue.\n[…]\nThe RGB color model itself does not define what is meant by red, green, and blue colorimetrically, and so the results of mixing them are not specified as absolute, but relative to the primary colors. When the exact chromaticities of the red, green, and blue primaries are defined, the color model then becomes an absolute color space, such as sRGB or Adobe RGB.\n[…]\nHigh-end digital image equipment are often able to deal with larger integer ranges for each primary color, such as 0..1023 (10 bits), 0..65535 (16 bits) or even larger, by extending the 24 bits (three 8-bit values) to 32-bit, 48-bit, or 64-bit units (more or less independent from the particular computer's word size).\n[…]\nThe RGB color model is one of the most common ways to encode color in computing, and several different digital representations are in use. The main characteristic of all of them is the quantization of the possible values per component (technically a sample) by using only integer numbers within some range, usually from 0 to some power of two minus one (2n − 1) to fit them into some bit groupings.\n[…]\nSince colors are usually defined by three components, not only in the RGB model, but also in other color models such as CIELAB and Y'UV, among others, then a three-dimensional volume is described by treating the component values as ordinary Cartesian coordinates in a Euclidean space.\n[…]\nAlso, those color difference signals need lower data bandwidth compared to full RGB signals.\n[…]\nDemonstrative color conversion applet"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/RGB",
        "situacao": "ok",
        "texto": "RGB é a abreviatura de um sistema de cores aditivas em que o Vermelho (Red), o Verde (Green) e o Azul (Blue) são combinados de várias formas de modo a reproduzir um largo espectro cromático. O propósito principal do sistema RGB é a reprodução de cores em dispositivos eletrônicos como monitores de TV e computador, retroprojetores, scanners e câmeras digitais, assim como na fotografia tradicional. E\n[…]\nModelos aditivos cromáticos são combinados de várias maneiras para reproduzir outras cores. O nome deste modelo e a abreviação RGB vêm das três cores primárias aditivas: vermelho, verde e azul (Red, Green, e Blue, em inglês), e só foi possível devido ao desenvolvimento tecnológico de tubos de raios catódicos – com os quais foi possível fazer o display de cores ao invés de uma fosforescência.\n[…]\nO modelo de cores RGB, por si só, não define o que significa “vermelho”, “verde” ou “azul” (espectroscopicamente), e então os resultados de misturá-los não são tão exatos (e sim relativos, na média da percepção do olho humano).\n[…]\nUma aplicação comum do modelo de cores RGB é o ecrã/tela do computador ou display ou na televisão a cores em um tubo de raios catódicos, de cristal líquido ou de plasma, como televisões ou monitores de computador. Cada pixel na tela pode ser representado no computador ou na interface do hardware (por exemplo, uma “placa de gráficos”) como valores para vermelho, verde e azul.\n[…]\nUma cor no modelo de cores RGB pode ser descrita pela indicação da quantidade de vermelho, verde, e azul que contém. Cada uma pode variar entre o mínimo (completamente escuro) e máximo (completamente intenso). Quando todas as cores estão no mínimo, o resultado é preto. Se todas estão no máximo, o resultado é branco.\n[…]\nMistura RGB - cssdeck.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Próton",
      "descricao": "Partícula subatômica de carga elétrica positiva presente no núcleo de todos os átomos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Prótons e nêutrons já foram considerados indivisíveis, mas cada um é formado por três partículas menores. Como elas se chamam?",
    "resposta": "Quarks",
    "fonte": [
      "https://en.wikipedia.org/wiki/Proton",
      "https://en.wikipedia.org/wiki/Quark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Proton",
        "situacao": "ok",
        "texto": "A proton is a stable subatomic particle, symbol p, H+, or 1H+ with a positive electric charge of +1 e (elementary charge). Its mass is slightly less than the mass of a neutron and approximately 1836 times the mass of an electron (the proton-to-electron mass ratio). Protons and neutrons, each with a mass of approximately one dalton, are jointly referred to as nucleons (particles present in atomic n\n[…]\nAlthough protons were originally considered to be elementary particles, in the modern Standard Model of particle physics, protons are known to be composite particles, containing three valence quarks, and together with neutrons are now classified as hadrons. Protons are composed of two up quarks of charge +⁠2/3⁠e each, and one down quark of charge −⁠1/3⁠e. The rest masses of quarks contribute only about 1% of a proton's mass.\n[…]\nThe rest mass of a proton is, thus, the invariant mass of the system of moving quarks and gluons that make up the particle, and, in such systems, even the energy of massless particles confined to a system is still measured as part of the rest mass of the system.\n[…]\nTwo terms are used in referring to the mass of the quarks that make up protons: current quark mass refers to the mass of a quark by itself, while constituent quark mass refers to the current quark mass plus the mass of the gluon particle field surrounding the quark. These masses typically have very different values. The kinetic energy of the quarks that is a consequence of confinement is a contribution (see Mass in special relativity).\n[…]\nSince the proton is composed of quarks confined by gluons, an equivalent pressure that acts on the quarks can be defined. The size of that pressure and other details about it are controversial.\n[…]\nThe Apollo Lunar Surface Experiments Packages (ALSEP) determined that more than 95% of the particles in the solar wind are electrons and protons, in approximately equal numbers."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Quark",
        "situacao": "ok",
        "texto": "A quark ( ) is a type of elementary particle and a fundamental constituent of matter. Quarks combine to form composite particles called hadrons, the most stable of which are protons and neutrons, the components of atomic nuclei. All commonly observable matter is composed of up quarks, down quarks, and electrons.\n[…]\nDeep inelastic scattering experiments conducted in 1968 at the Stanford Linear Accelerator Center (SLAC) and published on October 20, 1969, showed that the proton contained much smaller, point-like objects and was therefore not an elementary particle. Physicists were reluctant to firmly identify these objects with quarks at the time, instead calling them \"partons\"—a term coined by Richard Feynman.\n[…]\nFor example, the hadron constituents of atomic nuclei, neutrons and protons, have charges of 0 e and +1 e, respectively; the neutron is composed of two down quarks and one up quark, and the proton of two up quarks and one down quark.\n[…]\nThis flavor transformation mechanism causes the radioactive process of beta decay, in which a neutron (n) \"splits\" into a proton (p), an electron (e−) and an electron antineutrino (νe) (see picture). This occurs when one of the down quarks in the neutron (udd) decays into an up quark by emitting a virtual W− boson, transforming the neutron into a proton (uud). The W− boson then decays into an electron and an electron antineutrino.\n[…]\nIn QCD, quarks are considered to be point-like entities, with no structure. As of 2014, experimental evidence indicates they have no structure greater than 10−4 times the size of a proton, i.e. less than 10−19 m.\n[…]\nThe Top Quark And The Higgs Particle by T.A. Heppenheimer – A description of CERN's experiment to count the families of quarks.\n[…]\nThink Big website, Quarks and Gluons\n[…]\nThink Big website, Quarks 2019"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pr%C3%B3ton",
        "situacao": "ok",
        "texto": "O próton (português brasileiro) ou protão (português europeu) é uma partícula subatômica, de símbolo p ou p+, com uma carga elétrica positiva de +1 e uma carga elementar de 1,6×10 -19 C. Os prótons e os nêutrons possuem uma massa de aproximadamente 1 unidade de massa atômica, cerca de 1,66×10-24g e são referidos coletivamente como \"núcleons\". Prótons estão presentes no núcleo de um átomo; o número\n[…]\nNo moderno modelo padrão da física de partículas, o próton é um hádron, e como o nêutron, o outro núcleon (partículas presentes no núcleo atômico), é composto por três quarks. Embora o próton foi inicialmente considerado uma partícula fundamental, um próton é agora compreendido a ser composto por três quarks: dois quarks up e um quark down. Pensa-se que as massas de repouso dos quarks contribuem apenas cerca de 1% da massa do próton.\n[…]\nO restante da massa dos prótons se deve à energia cinética dos quarks e à energia dos campos de glúons que ligam os quarks juntos.\n[…]\nTais moléculas de hidrogênio na Terra podem, então, servir (entre muitos outros usos) como uma fonte conveniente de prótons para aceleradores (como o utilizado na terapia de prótons) e em outros experimentos de física de partículas com hádrons que exigem  que prótons acelerem, com o mais notável exemplo sendo o acelerador de partículas Large Hadron Collider.\n[…]\nPrótons são férmions de spin-½ e são compostos por três quarks de valência, tornando-os bárions (um sub-tipo de hádrons). Os dois quarks up e um quark down pertencentes ao próton são mantidos unidos pela força forte, mediada pelos glúons.:21-22 Uma perspectiva moderna tem o próton composto por quarks de valência (up, up, down), pelos glúons e pares transitórios de mar de quarks.\n[…]\nO próton é formado por dois quarks up e um down, sendo escrito como: uud.\n[…]\nO nêutron tem carga elétrica nula e é ligeiramente mais pesado que o próton.\n[…]\nNêutron",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Fibra óptica",
      "descricao": "Fio transparente e finíssimo que conduz luz por reflexão interna, usado em telecomunicações e na internet."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Os cabos de fibra óptica, que levam internet usando luz, são feitos em geral de fios finíssimos de que material?",
    "resposta": "Vidro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Optical_fiber"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Optical_fiber",
        "situacao": "ok",
        "texto": "An optical fiber, or optical fibre, is a flexible glass or plastic fiber that can transmit light from one end to the other. Such fibers are widely used in fiber-optic communication, where they permit transmission over longer distances and at higher bandwidths (data transfer rates) than electrical cables. Fibers are used instead of cables because signals travel along them with less loss and are imm\n[…]\nGlass optical fibers are typically made by drawing, while plastic fibers can be made either by drawing or by extrusion. Optical fibers typically include a core surrounded by a transparent cladding material with a lower index of refraction. Light is kept in the core by the phenomenon of total internal reflection which causes the fiber to act as a waveguide.\n[…]\nAn optical fiber is a cylindrical dielectric waveguide (nonconducting waveguide) that transmits light along its axis through the process of total internal reflection. The fiber consists of a core surrounded by a cladding layer, both of which are made of dielectric materials. To confine the optical signal in the core, the refractive index of the core must be greater than that of the cladding.\n[…]\nThe propagation of light through the core of an optical fiber is based on the total internal reflection of the light wave, in terms of geometric optics, or guided modes, in terms of an electromagnetic waveguide. In a typical single-mode optical fiber, about 75% of the light is propagating through the core material, having a higher refractive index, and about 25% of the light is propagating through the cladding, having a lower refractive index.\n[…]\nThe preform, regardless of construction, is placed in a device known as a drawing tower, where the preform tip is heated and the optical fiber is pulled out as a string. The tension on the fiber can be controlled to maintain the desired fiber thickness."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fibra_%C3%B3ptica",
        "situacao": "ok",
        "texto": "Uma fibra óptica, ou fibra ótica, é uma fibra flexível de vidro ou plástico que pode transmitir luz de uma extremidade à outra. Essas fibras são muito usadas na comunicação por fibra óptica, na qual permitem transmissões por distâncias maiores e com largura de banda mais alta, ou seja, maiores taxas de transferência de dados, que os cabos elétricos.\n[…]\nA luz é guiada pelo núcleo graças a uma casca óptica de índice de refração menor, que mantém a luz confinada por reflexão total. Em alguns tipos de fibra, a casca é de vidro e é trefilada junto com o núcleo a partir de uma pré-forma cujo índice varia radialmente. Em outros, é feita de plástico e aplicada como revestimento.\n[…]\nOs processos modernos de trefilagem de fibra óptica de vidro usam duas camadas de revestimento. A camada primária interna funciona como amortecedor e reduz a atenuação causada por microcurvaturas. A camada secundária externa protege a primeira contra danos mecânicos, funciona como barreira a forças laterais e pode receber cor para diferenciar os filamentos em cabos com muitas fibras. As camadas são aplicadas durante a trefilagem em velocidades próximas de 100 km/h.\n[…]\nTrês características dos guias de onda de fibra óptica podem ser afetadas pelo ambiente: resistência, atenuação e suscetibilidade a perdas por microcurvaturas. As capas externas e os tubos amortecedores dos cabos protegem a fibra de vidro contra condições que prejudicam o desempenho e a durabilidade. Internamente, os revestimentos dão estabilidade ao sinal e ajudam a reduzir a atenuação por microcurvaturas.\n[…]\nAlgumas versões de cabo de fibra óptica são reforçadas com fios de aramida ou fios de vidro como elemento intermediário de resistência. Em termos comerciais, o uso de fios de vidro é mais barato sem perda de durabilidade mecânica. Eles também protegem o núcleo do cabo contra roedores e cupins.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Bomba de hidrogênio",
      "descricao": "Arma termonuclear cuja energia vem principalmente da fusão de isótopos de hidrogênio, testada pela primeira vez em 1952."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Para detonar, uma bomba de hidrogênio carrega dentro dela, como gatilho, que outro tipo de bomba?",
    "resposta": "Uma bomba atômica de fissão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thermonuclear_weapon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thermonuclear_weapon",
        "situacao": "ok",
        "texto": "A thermonuclear weapon, fusion weapon, or hydrogen bomb (H-bomb) is a second-generation nuclear weapon, using nuclear fusion. The most destructive weapons ever created, their yields typically exceed first-generation nuclear weapons by twenty times, with far lower mass and volume requirements. Characteristics of fusion reactions can make possible the use of non-fissile depleted uranium as the weapo\n[…]\nThermonuclear weapons are the only artificial source of explosions above one megaton TNT. The Tsar Bomba was the most powerful bomb ever detonated at 50 megatons of TNT (210 PJ), despite the uranium tamper being replaced with lead to reduce radioactive fallout.\n[…]\nThe energy released by the primary compresses the secondary through the process of radiation implosion, at which point it is heated and undergoes nuclear fusion. This process could be continued, with energy from the secondary igniting a third fusion stage; the Soviet Tsar Bomba and US B41 nuclear bombs are believed to have used this design. Theoretically by continuing this process thermonuclear weapons with arbitrarily high yield could be constructed.\n[…]\nSakharov's \"Third Idea\", as the Teller–Ulam design was known in the USSR, was tested in the shot \"RDS-37\" in November 1955 with a yield of 1.6 Mt (6.7 PJ). The Soviets demonstrated the power of the staging concept in October 1961, when they detonated the massive and unwieldy Tsar Bomba. It was the largest nuclear weapon developed and tested by any country.\n[…]\nAfter the Pokhran-II tests, Rajagopala Chidambaram, former chairman of the Atomic Energy Commission of India, said that India has the capability to build thermonuclear bombs of any yield at will. India officially maintains that it can build thermonuclear weapons of various yields up to around 200 kt (840 TJ) on the basis of the Shakti-1 thermonuclear test.\n[…]\nPure fusion weapon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bomba_de_hidrog%C3%A9nio",
        "situacao": "ok",
        "texto": "Arma termonuclear, arma de fusão ou bomba de hidrogénio (português europeu) ou hidrogênio (português brasileiro) (bomba-H) é uma arma nuclear de segunda geração, que utiliza fusão nuclear. Como as armas mais destrutivas já criadas, seu poder explosivo geralmente supera o das armas nucleares de primeira geração em vinte vezes, com requisitos de massa e volume muito menores.\n[…]\nO húngaro Edward Teller (1908–2003), sob protestos de Fermi e Szilard, chefiou o desenvolvimento da bomba de fusão de hidrogênio, que utiliza uma bomba de fissão como gatilho para iniciar a colisão do deutério com o trítio. A bomba de hidrogênio, Ivy Mike (com intensidade equivalente à detonação de 10,4 megatoneladas de T.N.T.) foi testada a 31 de Outubro de 1952, em Eniwetok.\n[…]\nNa bomba de hidrogênio, um disparador de bomba atômica inicia uma reação de fusão nuclear num composto químico de deutério e trítio, produzindo instantaneamente o hélio-4, que por sua vez reage com o deutério. Porém, os cientistas militares foram mais além, no que diz respeito ao poder destrutivo da bomba, envolvendo-a em urânio natural. Os poderosos neutrões libertos pela fusão causam depois uma explosão por fissão nuclear no invólucro de urânio.\n[…]\nergs/s é equivalente a 5 bilhões de bombas de hidrogênio por segundo. Para comparar, a primeira bomba atômica, de urânio, chamada de Little Boy, e que explodiu sobre a cidade de Hiroshima, tinha uma potência de 20 mil toneladas de TNT (trinitrotolueno). Uma bomba de hidrogênio tem uma potência de 20 milhões de toneladas de TNT.\n[…]\nQuando 2 átomos de hidrogênio se transformam em deutério, no primeiro passo da fusão do hidrogênio (\n[…]\nBomba atômica\n[…]\nBomba de nêutrons\n[…]\nBomba suja\n[…]\nTsar Bomba\n[…]\nArtigo sobre a Bomba de Hidrogênio e a Bomba Nuclear, com a História e Notas Explicativas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Disco de Newton",
      "descricao": "Disco pintado em fatias coloridas que parece branco quando gira rapidamente, demonstrando a composição da luz branca."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O disco de Newton parece branco quando gira bem rápido. Que cores são pintadas nas suas fatias?",
    "resposta": "As cores do arco-íris",
    "fonte": [
      "https://en.wikipedia.org/wiki/Newton_disc",
      "https://pt.wikipedia.org/wiki/Disco_de_Newton"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Newton_disc",
        "situacao": "ok",
        "texto": "The Newton disk, also known as the disappearing color disk, is a well-known physics experiment with a rotating disk with segments in different colors (usually Newton's primary colors: red, orange, yellow, green, blue, indigo, and violet, commonly known by the abbreviation ROYGBIV) appearing as white (or off-white or grey) when it is spun rapidly about its axis.\n[…]\nIn reaction to Robert Hooke's criticism of the new theory of light, Newton published a letter in the Philosophical Transactions, with other experiments that proved how sunlight existed of rays with different colors. He described how the cogs or teeth of a gyrating wheel behind a prism can block part of the light so that all the colors would be projected successively if the wheel turns rather slow, but how all the colors will be mixed into white light if the wheel turns very fast.\n[…]\nAfter presenting his conclusions about dividing sunlight into primary colors and mixing them back together into white light, Newton presented a color circle to illustrate the relations between these colors in his book Opticks (1704).\n[…]\nMany modern sources state that Isaac Newton himself used a spinning disk with colored sectors to demonstrate how white light was the compound of the primary colors. However, these do not reference any historical source.\n[…]\nAccording to Joseph Plateau, the first to describe how a spinning disk with Newton's seven primary colors would show an (imperfect) white color was Pieter van Musschenbroek in 1762.\n[…]\n\"Newton's Disk Flash\". TD Flash Zone. 2017."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Disco_de_Newton",
        "situacao": "ok",
        "texto": "Disco de Newton é um dispositivo utilizado em demonstrações de composição de cores. Recebeu esse nome pelo fato do físico e matemático inglês Sir Isaac Newton ter descoberto, por meio de experimentos com prismas, que a luz branca do Sol é composta pelas cores do arco-íris.\n[…]\nAo entrar em movimento, cada cor do disco de Newton se sobrepõe na nossa retina, dando a sensação de mistura. Com velocidade suficientemente rápida e com as cores que compõem o arco-íris, o fenômeno de sobreposição ocorre, produzindo a ilusão de que o disco aparenta estar esbranquiçado.\n[…]\nNo manuscrito Of Colours de 1666, em que Newton apresenta vários resultados de seus experimentos com a decomposição da luz, não há nenhuma menção ao número de cores do espectro. No entanto, em seu experimento 63 são citadas dez cores: violeta extremo, violeta intenso, índigo, azul, verde, a fronteira entre verde e amarelo, amarelo, laranja, vermelho e vermelho extremo.\n[…]\nJá em seu livro Opticks, publicado em 1704, são citadas sete cores: vermelho, laranja, amarelo, verde, azul (ciano), índigo (azul escuro) e violeta.\n[…]\nDisco de Benham"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Telescópio newtoniano",
      "descricao": "Telescópio refletor construído por Isaac Newton por volta de 1668, que forma a imagem com um espelho em vez de uma lente."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Por volta de 1668, Isaac Newton construiu um telescópio que trocava a lente principal por que peça?",
    "resposta": "Um espelho curvo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Newtonian_telescope",
      "https://en.wikipedia.org/wiki/Reflecting_telescope"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Newtonian_telescope",
        "situacao": "ok",
        "texto": "The Newtonian telescope, also called the Newtonian reflector or just a Newtonian, is a type of reflecting telescope invented by the English scientist Sir Isaac Newton, using a concave primary mirror and a flat diagonal secondary mirror. Newton's first reflecting telescope was completed in 1668 and is the earliest known functional reflecting telescope. The Newtonian telescope's simple design has ma\n[…]\nIn late 1668 Isaac Newton built his first reflecting telescope. He chose an alloy (speculum metal) of tin and copper as the most suitable material for his objective  mirror. He later devised means for shaping and grinding the mirror and may have been the first to use a pitch lap to polish the optical surface. He chose a spherical shape for his mirror instead of a parabola to simplify construction; even though it would introduce spherical aberration, it would still correct chromatic aberration.\n[…]\nHe found that the telescope worked without colour distortion and that he could see the four Galilean moons of Jupiter and the crescent phase of the planet Venus with it. Newton's friend Isaac Barrow showed a second telescope to a small group from the Royal Society of London at the end of 1671. They were so impressed with it that they demonstrated it to Charles II in January 1672. Newton was admitted as a fellow of the society in the same year.\n[…]\nLike Gregory before him, Newton found it hard to construct an effective reflector. It was difficult to grind the speculum metal to a regular curvature. The surface also tarnished rapidly; the consequent low reflectivity of the mirror and also its small size meant that the view through the telescope was very dim compared to contemporary refractors. Because of these difficulties in construction, the Newtonian reflecting telescope was  initially not widely adopted.\n[…]\nDobsonian telescope - type of portable Newtonian telescope\n[…]\nSchmidt–Newton telescope"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Reflecting_telescope",
        "situacao": "ok",
        "texto": "A reflecting telescope (also called a reflector) is a telescope that uses a single or a combination of curved mirrors that reflect light and form an image. The reflecting telescope was invented in the 17th century by Isaac Newton as an alternative to the refracting telescope which, at that time, was a design that suffered from severe chromatic aberration. Although reflecting telescopes produce oth\n[…]\nFive years after Gregory designed his telescope and five years before Hooke built the first such Gregorian telescope, Isaac Newton in 1668 built his own reflecting telescope, which is considered the first reflecting telescope, as previous designs were never put into practice or ended in failure when attempted. Newton's telescope used a spherically ground metal primary mirror and a small diagonal mirror in an optical configuration that has come to be known as the Newtonian telescope.\n[…]\nThe Newtonian telescope was the first successful reflecting telescope, completed by Isaac Newton in 1668. It usually has a paraboloid primary mirror but at focal ratios of about f/10 or longer a spherical primary mirror can be sufficient for high visual resolution. A flat secondary mirror reflects the light to a focal plane at the side of the top of the telescope tube.\n[…]\nThe Herschelian reflector is named after William Herschel, who used this design to build very large telescopes including the 40-foot telescope in 1789. In the Herschelian reflector the primary mirror is tilted so the observer's head does not block the incoming light. Although this introduces geometrical aberrations, Herschel employed this design to avoid the use of a Newtonian secondary mirror since the speculum metal mirrors of that time tarnished quickly and could only achieve 60% reflectivity.\n[…]\nWho was James Gregory? Reflecting Telescopes, Explore, National Museums Scotland Archived 2017-01-17 at the Wayback Machine"
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
    "indice": 18,
    "ancora": {
      "nome": "E = mc²",
      "descricao": "Equação de Albert Einstein que expressa a equivalência entre massa e energia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na famosa equação de Einstein, E igual a m c ao quadrado, o que a letra c representa?",
    "resposta": "A velocidade da luz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mass–energy_equivalence"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mass–energy_equivalence",
        "situacao": "ok",
        "texto": "In physics, mass–energy equivalence is the relationship between mass and energy in a system's rest frame. The two differ only by a multiplicative constant and the units of measurement. The principle is described by the physicist Albert Einstein's formula:\n[…]\nRest mass, also called invariant mass, is a fundamental physical property of matter, independent of velocity. Massless particles such as photons have zero invariant mass, but massless free particles have both momentum and energy.\n[…]\nEinstein, following Lorentz and Abraham, used velocity- and direction-dependent mass concepts in his 1905 electrodynamics paper and in another paper in 1906. In Einstein's first 1905 paper on E = mc2, he treated m as what would now be called the rest mass, and it has been noted that in his later years he did not like the idea of \"relativistic mass\".\n[…]\nIn addition, Einstein used the formula μ = ⁠E0/V2⁠, with E0 being the energy of a system of mass points, to describe the energy and mass increase of that system when the velocity of the differently moving mass points is increased. Max Planck rewrote Einstein's mass–energy relationship as M = ⁠E0 + pV0/c2⁠ in June 1907, where p is the pressure and V0 the volume to express the relation between mass, its latent energy, and thermodynamic energy within the body.\n[…]\nAn alternative version of Einstein's thought experiment was proposed by American theoretical physicist Fritz Rohrlich in 1990, who based his reasoning on the Doppler effect. Like Einstein, he considered a body at rest with mass M. If the body is examined in a frame moving with nonrelativistic velocity v, it is no longer at rest and in the moving frame it has momentum P = Mv.\n[…]\nEinstein-on film explaining a mass energy equivalence"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Equival%C3%AAncia_massa%E2%80%93energia",
        "situacao": "ok",
        "texto": "Na física, a equivalência massa-energia é a relação entre massa e energia no referencial de repouso de um sistema, onde as duas quantidades diferem apenas por uma constante multiplicativa e pelas unidades de medida. O princípio é descrito pela fórmula do físico Albert Einstein :\n[…]\nEntão este E pode ser visto como a energia removida, correspondendo a uma certa quantidade de massa relativística m que foi perdida, e que corresponde ao calor ou luz removidos. Nesses casos, a energia removida é igual a massa perdida, vezes o quadrado da velocidade da luz. Do mesmo modo, quando energia de qualquer forma é adicionada ao corpo em repouso, o aumento de massa de repouso será a energia adicionada dividido pela velocidade da luz ao quadrado.\n[…]\nDe acordo com a fórmula de equivalência massa-energia, a quantia máxima de energia que se pode obter de um objeto, é a massa do objeto multiplicada pelo quadrado da velocidade da luz.\n[…]\nteoria de Abraham da massa variável e experimento de Walter Kaufmann sobre a massa de elétrons em alta velocidade e (2) a não-conservação de energia em experimentos de rádio de Marie Curie. Foi a percepção de Einstein de que um corpo perdendo energia como radiação ou calor foi perdendo massa pela quantia\n[…]\nNa primeira formulação de Einstein, é a diferença na massa antes e depois da energia ser gasta, que é igual a L/c², e não a massa inteira do objeto. Naquele momento em 1905, mesmo isso era apenas teórico e não provado experimentalmente. Não até a descoberta  do primeiro tipo de antimatéria (o pósitron em 1932) foi esta descoberta que mostrou que vários pares de partículas em repouso podem ser convertidas em radiação movendo-se a velocidade da luz.\n[…]\nsendo a velocidade relativa. Isto pode ser mostrado como sendo equivalente a\n[…]\nEnergia\n[…]\nVelocidade da luz",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Leis de Newton",
      "descricao": "As três leis do movimento formuladas por Isaac Newton: inércia, princípio fundamental da dinâmica e ação e reação."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Das três leis do movimento de Isaac Newton, qual diz que toda ação provoca uma reação de mesma intensidade e sentido oposto?",
    "resposta": "A terceira lei",
    "fonte": [
      "https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion",
        "situacao": "ok",
        "texto": "Newton's laws of motion are three physical laws that describe the relationship between the motion of an object and the forces acting on it. These laws, which provide the basis for Newtonian mechanics, can be paraphrased as follows:\n[…]\nThe three laws of motion were first stated by Isaac Newton in his Philosophiæ Naturalis Principia Mathematica (Mathematical Principles of Natural Philosophy), originally published in 1687. Newton used them to investigate and explain the motion of many physical objects and systems. In the time since Newton, new insights, especially around the concept of energy, built the field of classical mechanics on his foundations.\n[…]\nDue to the breadth of these topics, the discussion here will be confined to concise treatments of how they reformulate Newton's laws of motion.\n[…]\nGalileo recognized that in projectile motion, the Earth's gravity affects vertical but not horizontal motion. However, Galileo's idea of inertia was not exactly the one that would be codified into Newton's first law. Galileo thought that a body moving a long distance inertially would follow the curve of the Earth. This idea was corrected by Isaac Beeckman, Descartes, and Pierre Gassendi, who recognized that inertial motion should be motion in a straight line.\n[…]\nNewton arrived at his set of three laws incrementally. In a 1684 manuscript written to Huygens, he listed four laws: the principle of inertia, the change of motion by force, a statement about relative motion that would today be called Galilean invariance, and the rule that interactions between bodies do not change the motion of their center of mass.\n[…]\nEuler's laws of motion\n[…]\nList of eponymous laws\n[…]\nNewton's Laws of Dynamics - The Feynman Lectures on Physics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Leis_de_Newton",
        "situacao": "ok",
        "texto": "As leis de Newton, também chamadas leis do movimento de Newton, são três leis físicas que descrevem a relação entre o movimento de um objeto e as forças que atuam sobre ele. Essas leis constituem a base da mecânica newtoniana e, em sua apresentação usual para partículas em referenciais inerciais, podem ser resumidas da seguinte forma:\n[…]\nSe um corpo exerce força sobre um segundo corpo, o segundo exerce sobre o primeiro uma força de mesma magnitude e sentido oposto. Paráfrases excessivamente breves da terceira lei, como \"ação é igual à reação\", podem causar confusão: ação e reação atuam sobre corpos diferentes.\n[…]\nO exemplo do ventilador e da vela é uma situação estudada em discussões sobre a terceira lei de Newton. Um ventilador é preso a um carrinho ou a um veleiro e sopra contra sua própria vela. Uma análise simplificada pode sugerir que a reação sobre o ventilador e a força do ar sobre a vela se cancelariam, deixando o conjunto imóvel. Essas duas forças, porém, não constituem diretamente um único par de ação e reação, e o resultado depende do fluxo de ar e da fronteira escolhida para o sistema.\n[…]\nAs equações newtonianas do movimento podem ser combinadas com leis de força elétrica e magnética no regime não relativístico, mas a aplicação da terceira lei aos corpos materiais isoladamente exige ressalvas.\n[…]\n, em acordo com a terceira lei.\n[…]\nEntre as dificuldades mais documentadas estão a noção de que um corpo em movimento precisa necessariamente de uma força na mesma direção, a confusão sobre os pares de ação e reação e a ideia de que, numa interação, o corpo maior ou mais rápido sempre exerce a força mais intensa. Para investigar esse tipo de compreensão conceitual, foram criados instrumentos como o Force Concept Inventory, que passou a ser amplamente utilizado em estudos sobre o aprendizado da mecânica newtoniana.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Guerra das correntes",
      "descricao": "Disputa comercial e técnica do fim do século dezenove entre os defensores da corrente contínua e da corrente alternada nos Estados Unidos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na guerra das correntes, no fim do século dezenove, Thomas Edison defendia a corrente contínua. Que inventor de origem sérvia apoiava a corrente alternada?",
    "resposta": "Nikola Tesla",
    "fonte": [
      "https://en.wikipedia.org/wiki/War_of_the_currents"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/War_of_the_currents",
        "situacao": "ok",
        "texto": "The war of the currents was a series of events surrounding the introduction of competing electric power transmission systems in the late 1880s and early 1890s. It grew out of two lighting systems developed in the late 1870s and early 1880s: arc lamp street lighting running on high-voltage alternating current (AC), and large-scale low-voltage direct current (DC) indoor incandescent lighting being m\n[…]\nEdison had invented a meter to allow customers to be billed for energy proportional to consumption, but this meter worked only with direct current. Direct current also worked well with electric motors, an advantage DC held throughout the 1880s.\n[…]\nIn April 1888, Westinghouse engineer Oliver B. Shallenberger developed an induction meter that used a rotating magnetic field for measuring alternating current, giving the company a way to calculate how much electricity a customer used. In July 1888 Westinghouse paid a substantial amount to license Nikola Tesla's US patents for a poly-phase AC induction motor and obtained a patent option on Galileo Ferraris' induction motor design.\n[…]\nIn 1897 Edison sold his remaining stock in Edison Electric Illuminating of New York to finance his iron ore refining prototype plant. In 1908, Edison said to George Stanley, son of AC transformer inventor William Stanley, Jr., \"Tell your father I was wrong\", likely an admission that he had underestimated the developmental potential of alternating current.\n[…]\nNew York City's electric utility company, Consolidated Edison, continued to supply direct current to customers who had adopted it early in the twentieth century, mainly for elevators. The New Yorker Hotel, constructed in 1929, had a large direct-current power plant and did not convert fully to alternating-current service until well into the 1960s. This was the building in which AC pioneer Nikola Tesla spent his last years, and where he died in 1943."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_das_Correntes",
        "situacao": "ok",
        "texto": "A Guerra das Correntes (ou Batalha das Correntes) foi uma disputa entre Westinghouse e Thomas Edison que ocorreu nas duas últimas décadas do século XIX. Os dois tornaram-se adversários devido à campanha publicitária de Edison pela utilização da corrente contínua para distribuição de eletricidade, em contraposição à corrente alternada, defendida por Westinghouse e Nikola Tesla\n[…]\nEm 1882, Nikola Tesla começou a trabalhar para a empresa de Thomas Edison, a Edison Machine Works, onde foi encarregado de melhorar os geradores de corrente contínua da empresa. No entanto, Tesla logo começou a desenvolver suas próprias ideias para um sistema de energia elétrica baseado em corrente alternada. Em 1887, Tesla inventou um motor de corrente alternada que usava dois ou mais campos magnéticos rotacionais para criar um movimento rotativo.\n[…]\nWestinghouse comprou com antecedência os direitos das patentes do sistema polifásico de Tesla, além de outras patentes de transformadores de corrente alternada, de Lucien Gaulard e John Dixon Gibbs, dessa forma driblando o monopólio de patentes reivindicado por Thomas Edison.\n[…]\nIsto se aplica tanto à corrente contínua como à alternada.\n[…]\nO sistema de distribuição de Edison a baixa tensão, que utilizava corrente contínua, acabou perdendo para dispositivos de corrente alternada propostos por outros colaboradores: primeiramente Tesla, com sistemas polifásicos; e outros, como Charles Proteus Steinmetz - em 1888 ele trabalhava em Pittsburgh para Westinghouse.\n[…]\n“Edison's Medicine” (O Remédio de Edison) foi uma música da banda Tesla, do álbum Psychotic Supper, o qual dá enfoque à Guerra das Correntes.\n[…]\nO filme de 1980 The Secret of Nikola Tesla (aka Tajna Nikole Tesle), estrelado por Orson Welles como J. P. Morgan, descreve várias realizações de Tesla.\n[…]\n«War of the Currents». . PBS.\n[…]\n«The Current War : Edison and Tesla Fight Over How to Power the World»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Arco-íris",
      "descricao": "Fenômeno óptico em que a luz do Sol, refratada e refletida em gotas de chuva, forma um arco colorido no céu."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Às vezes aparece um segundo arco-íris, mais fraco, por fora do principal. O que acontece com a ordem das cores nele?",
    "resposta": "Fica invertida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rainbow"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rainbow",
        "situacao": "ok",
        "texto": "A rainbow is an optical phenomenon caused by refraction, internal reflection and dispersion of light in water droplets resulting in a continuous spectrum of light appearing in the sky. The rainbow takes the form of a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun. Rainbows can be caused by many forms of airborne water. These in\n[…]\nIn Song dynasty China (960–1279), a polymath scholar-official named Shen Kuo hypothesised—as Sun Sikong did before him—that rainbows were formed by a phenomenon of sunlight encountering droplets of rain in the air. Paul Dong writes that Shen's explanation of the rainbow as a phenomenon of atmospheric refraction \"is basically in accord with modern scientific principles.\"\n[…]\nIn Greek mythology, the goddess Iris is the personification of the rainbow, a messenger goddess who, like the rainbow, connects the mortal world with the gods through messages. In Albanian folk beliefs the rainbow is regarded as the belt of the goddess Prende, and oral legend has it that anyone who jumps over the rainbow changes their sex.\n[…]\nDe Rico, Ul (1978). The Rainbow Goblins. Thames & Hudson. ISBN 978-0-500-27759-1.\n[…]\nGreenler, Robert (1980). Rainbows, Halos, and Glories. Cambridge University Press. ISBN 978-0-19-521833-6.\n[…]\nLee, Raymond L. & Alastair B. Fraser (2001). The Rainbow Bridge: Rainbows in Art, Myth and Science. New York: Pennsylvania State University Press and SPIE Press. ISBN 978-0-271-01977-2.\n[…]\nThe Mathematics of Rainbows, article from the American mathematical society\n[…]\nRainbow seen through infrared filter and through ultraviolet filter\n[…]\nMerrifield, Michael. \"Rainbows\". Sixty Symbols. Brady Haran for the University of Nottingham.\n[…]\nCreating Circular and Double Rainbows! – video explanation of basics, shown artificial rainbow at night, second rainbow and circular one."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arco-%C3%ADris",
        "situacao": "ok",
        "texto": "Um arco-íris, também chamado popularmente de arco-da-velha, é um fenômeno óptico causado pela refração, pela reflexão interna e pela dispersão da luz em gotas de água, produzindo um espectro contínuo de luz que aparece no céu. O arco-íris tem a forma de um arco circular multicolorido. Os arcos produzidos pela luz solar aparecem sempre na parte do céu diretamente oposta ao Sol.\n[…]\nPor causa da reflexão na parte posterior da gota, porém, a luz azul emerge formando um ângulo menor em relação ao raio incidente de luz branca do que a luz vermelha. Por isso, o azul fica no interior do arco primário e o vermelho, no exterior. A separação das cores também reduz o brilho. Um arco formado por gotas de um líquido sem dispersão seria branco e mais brilhante que um arco comum.\n[…]\nComo o \"interior\" do arco secundário fica voltado para cima em relação ao observador, as cores aparecem invertidas em comparação com o primário.\n[…]\nDiferente do arco-íris duplo, formado por dois arcos separados e concêntricos, o raro arco-íris geminado aparece como dois arcos que se separam a partir de uma mesma base. As cores do segundo arco permanecem na mesma ordem do primário em vez de se inverterem como no arco secundário. Um arco secundário comum também pode estar presente. Arcos geminados podem parecer semelhantes às faixas supranumerárias, mas os dois fenômenos têm perfis cromáticos diferentes.\n[…]\nOs dois são segmentos de anéis coloridos centrados no zênite, mas ocupam regiões diferentes do céu. O arco circunzenital tem curvatura acentuada, fica muito acima do Sol ou da Lua e apresenta o lado convexo voltado para baixo, criando a aparência de um \"arco-íris de cabeça para baixo\". O arco circum-horizontal fica mais próximo do horizonte, tem curvatura menor e aparece bastante abaixo do Sol ou da Lua. Em ambos, a faixa vermelha aponta para o Sol, e a violeta fica no lado oposto.\n[…]\n. O arco de ordem",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Letreiro de neon",
      "descricao": "Placa luminosa feita de tubos de vidro com gás rarefeito, como o neônio, que brilham com descarga elétrica."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O gás neônio, usado nos letreiros luminosos clássicos, brilha em que cor quando é atravessado pela eletricidade?",
    "resposta": "Vermelho-alaranjado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Neon_lighting",
      "https://en.wikipedia.org/wiki/Neon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Neon_lighting",
        "situacao": "ok",
        "texto": "Neon lighting consists of brightly glowing, electrified glass tubes or bulbs that contain rarefied neon or other gases. Neon lights are a type of cold cathode gas-discharge light. A neon tube is a sealed glass tube with a metal electrode at each end, filled with one of a number of gases at low pressure. A high potential of several thousand volts applied to the electrodes ionizes the gas in the tub\n[…]\nThe Second World War (1939–1945) arrested new sign installations around most of the world. Following the war, the industry resumed. Marcus Thielen writes of this era, \"...after World War II, government programs were established to help re-educate soldiers. The Egani Institute (New York City) was one of few schools in the country that taught neon-trade secrets.\n[…]\nIn neon glow lamps, the luminous region of the gas is a thin, \"negative glow\" region immediately adjacent to a negatively charged electrode (or \"cathode\"); the positively charged electrode (\"anode\") is quite close to the cathode. These features distinguish glow lamps from the much longer and brighter \"positive column\" luminous regions in neon tube lighting. The energy dissipation in the lamps when they are glowing is very low (about 0.1 W), hence the distinguishing term cold-cathode lighting.\n[…]\nThe mid to late 1980s was a period of resurgence in neon production. Sign companies developed a new type of signage called channel lettering, in which individual letters were fashioned from sheet metal.\n[…]\nSeveral museums in the United States are now devoted to neon lighting and art, including the Museum of Neon Art (founded by neon artist Lili Lakich, Los Angeles, 1981), the Neon Museum (Las Vegas, founded 1996), the American Sign Museum (Cincinnati, founded 1999). These museums restore and display historical signage that was originally designed as advertising, in addition to presenting exhibits of neon art."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Neon",
        "situacao": "ok",
        "texto": "Neon is a chemical element; it has the symbol Ne and the atomic number 10. It is the second noble gas in the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with approximately two-thirds the density of air.\n[…]\n1 pound (0.45 kg) of pure neon can be produced from the processing of 88,000 pounds (40,000 kg) of the gas-phase mixture.\n[…]\nThe closure was predicted to exacerbate the COVID-19 chip shortage, which may further shift neon production to China.\n[…]\nNeon signs typically operate at much higher voltages (2–15 kilovolts), and the luminous tubes are commonly meters long. The glass tubing is often formed into shapes and letters for signage, as well as architectural and artistic applications.\n[…]\nIn neon signs, neon produces an unmistakable bright reddish-orange light when electric current passes through it under low pressure. Although tube lights with other colors are often called \"neon\", they use different noble gases or varied colors of fluorescent lighting, for example, argon produces a lavender or blue hue. As of 2012, there are over one hundred colors available.\n[…]\nNeon is used in vacuum tubes, high-voltage indicators, lightning arresters, wavemeter tubes, television tubes, and helium–neon lasers. Gas mixtures that include high-purity neon are used in lasers for photolithography in semiconductor device fabrication.\n[…]\nLiquefied neon is commercially used as a cryogenic refrigerant in applications not requiring the lower temperature range attainable with the more extreme liquid helium refrigeration.\n[…]\nNeon at The Periodic Table of Videos (University of Nottingham)\n[…]\nWebElements.com – Neon.\n[…]\nIt's Elemental – Neon\n[…]\nUSGS Periodic Table – Neon\n[…]\nAtomic Spectrum of Neon\n[…]\nNeon Museum, Las Vegas"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Forno de micro-ondas",
      "descricao": "Eletrodoméstico que aquece alimentos com radiação de micro-ondas gerada por um magnétron."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O forno de micro-ondas esquenta a comida agitando principalmente as moléculas de que substância presente nos alimentos?",
    "resposta": "Água",
    "fonte": [
      "https://en.wikipedia.org/wiki/Microwave_oven"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Microwave_oven",
        "situacao": "ok",
        "texto": "A microwave oven, or simply microwave, is an electric oven that heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range. This induces polar molecules in the food to rotate and produce thermal energy (heat) in a process known as dielectric heating. Microwave ovens heat food quickly and efficiently; the heating effect is fairly uniform in the outer 25–38 mm \n[…]\nThe development of the cavity magnetron in the United Kingdom made possible the production of electromagnetic waves of a small enough wavelength (microwaves) to efficiently heat up water molecules. American electrical engineer Percy Spencer is generally credited with developing and patenting the world's first commercial microwave oven, the Raytheon \"Radarange\", which was first sold in 1947. He based it on British radar technology which had been developed before and during World War II.\n[…]\nAll microwave ovens use a timer to switch off the oven at the end of the cooking time.\n[…]\nHowever, with the oven door open, the radiation may cause damage by heating. Microwave ovens are sold with a protective interlock so that it cannot be run when the door is open or improperly latched.\n[…]\nMicrowave ovens are frequently used for reheating leftover food, and bacterial contamination may not be repressed if the microwave oven is used improperly. If safe temperature is not reached, this can result in foodborne illness, as with other reheating methods. While microwave ovens can destroy bacteria as well as conventional ovens can, they cook rapidly and may not cook as evenly, similar to frying or grilling, leading to a risk of some food regions failing to reach recommended temperatures.\n[…]\nWall oven\n[…]\nMicrowave oven history from American Heritage magazine\n[…]\n\"The Microwave Oven\": Short explanation of microwave oven in terms of microwave cavities and waveguides, intended for use in a class in electrical engineering"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Forno_de_micro-ondas",
        "situacao": "ok",
        "texto": "O forno de micro-ondas (também conhecido como forno micro-ondas ou simplesmente micro-ondas) é um eletrodoméstico utilizado principalmente na cozinha e que permite a preparação ou aquecimento rápido de alimentos.\n[…]\nQuando sujeitas às micro-ondas, as moléculas de água do alimento orientam-se em direção do campo elétrico que compõe estas ondas. Este campo, ao ser alternado, faz com que os pólos se orientem sucessivamente num sentido e seguidamente no outro, o que resulta em várias mudanças de orientação (cerca de 2 450 000 000 vezes num segundo) ao mesmo ritmo que a onda que oscila 2 450 000 000 vezes por segundo.\n[…]\nA molécula de água não é a única a vibrar na presença de micro-ondas, há também os açúcares e as gorduras. Mas o que faz com que a molécula de água seja a única a desempenhar um papel na liberação de calor é a sua dimensão: é a única que é bipolar e que pode girar graças à sua pequena dimensão.\n[…]\nQuando o papel saturado com água é submetido à radiação de micro-ondas, ele fica quente o suficiente para fazer com que o corante fique escurecido, o que pode fornecer uma representação visual das micro-ondas. Se múltiplas camadas de papel forem construídas no forno com uma distância suficiente entre elas, um mapa tridimensional poderá ser criado. Muitos recibos de lojas são impressos em papel térmico, o que permite que isso seja feito facilmente em casa.\n[…]\nEm casos raros, a água e outros líquidos homogêneos podem superaquecer quando aquecidos em um forno de micro-ondas em um recipiente com superfície lisa. Ou seja, o líquido atinge uma temperatura ligeiramente acima do seu ponto de ebulição normal sem a formação de bolhas de vapor no seu interior.\n[…]\nO forno micro-ondas pode causar câncer?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Átomo",
      "descricao": "Menor unidade de um elemento químico, formada por um núcleo de prótons e nêutrons cercado por elétrons."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Embora a matéria pareça sólida, quase todo o volume de um átomo é formado por quê?",
    "resposta": "Espaço vazio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atom",
      "https://en.wikipedia.org/wiki/Rutherford_model"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atom",
        "situacao": "ok",
        "texto": "Atoms are the basic particles of the chemical elements and the fundamental building blocks of matter. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and an\n[…]\nHe called these new particles corpuscles but they were later renamed electrons since these are the particles that carry electricity. Thomson also showed that electrons were identical to particles given off by photoelectric and radioactive materials. Thomson explained that an electric current is the passing of electrons from one atom to the next, and when there was no current the electrons embedded themselves in the atoms. This in turn meant that atoms were not indivisible as scientists thought.\n[…]\nThis shouldn't have been possible according to the Thomson model of the atom, whose charges were too diffuse to produce a sufficiently strong electric field. The deflections should have all been negligible. Rutherford proposed that the positive charge of the atom is concentrated in a tiny volume at the center of the atom and that the electrons surround this nucleus in a diffuse cloud. This nucleus carried almost all of the atom's mass.\n[…]\nThe atom-probe tomograph has sub-nanometer resolution in 3-D and can chemically identify individual atoms using time-of-flight mass spectrometry.\n[…]\nAndrew G. van Melsen (2004) [1952]. From Atomos to Atom: The History of the Concept Atom. Translated by Henry J. Koren. Dover Publications. ISBN 0-486-49584-1.\n[…]\nBernard Pullman (1998). The Atom in the History of Human Thought. Translated by Axel Reisinger. Oxford University Press. ISBN 0-19-511447-7.\n[…]\nSharp, Tim (8 August 2017). \"What is an Atom?\". Live Science."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rutherford_model",
        "situacao": "ok",
        "texto": "The Rutherford model is the name for the idea that  an atom contains a compact nucleus. The concept arose after Ernest Rutherford directed the Geiger–Marsden experiment in 1909, which showed much more alpha particle recoil than J. J. Thomson's plum pudding model of the atom could explain. Thomson's model had positive charge spread out in the atom.\n[…]\nRutherford's analysis proposed a high central charge concentrated into a very small volume in comparison to the rest of the atom and with this central volume containing most of the atom's mass. The central  region would later be known as the atomic nucleus. Rutherford did not discuss the organization of electrons in the atom and did not himself propose a model for the atom. Niels Bohr joined Rutherford's lab and developed a theory for the electron motion which became known as the Bohr model.\n[…]\nThe atom's electron cloud does not (substantially) influence alpha particle scattering.\n[…]\nMuch of an atom's positive charge is concentrated in a relatively tiny volume at the center of the atom, known today as the nucleus. The magnitude of this charge is proportional to (up to a charge number that can be approximately half of) the atom's atomic mass—the remaining mass is now known to be mostly attributed to neutrons. This concentrated central mass and charge is responsible for deflecting both alpha and beta particles.\n[…]\nThe impact of Rutherford's nuclear model came after Niels Bohr arrived as a post-doctoral student in Manchester at Rutherford's invitation. Bohr dropped his work on the Thomson model in favor of Rutherford's nuclear model, developing the Rutherford–Bohr model over the next several years. Eventually Bohr incorporated early ideas of quantum mechanics into the model of the atom, allowing prediction of electronic spectra and concepts of chemistry."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81tomo",
        "situacao": "ok",
        "texto": "Átomo é uma unidade básica de matéria que consiste num núcleo central de carga elétrica positiva envolto por uma nuvem de eletrões de carga negativa. O núcleo atómico é composto por protões e neutrões. Os eletrões de um átomo estão ligados ao núcleo por força eletromagnética. Da mesma forma, um grupo de átomos pode estar ligado entre si através de ligações químicas baseadas na mesma força, formand\n[…]\nOutros isótopos, como o lítio-6, são gerados no espaço através da espalação de raios cósmicos. Este fenómeno ocorre quando um protão de elevada energia atinge um núcleo atómico, o que causa a ejeção de um grande número de nucleões. Os elementos mais pesados que o ferro foram produzidos em supernovas através do Processo R e em estrelas AGB através do Processo-S, ambos envolvendo a captura de neutrões pelo núcleo atómico.\n[…]\nO termo átomo tem origem no grego ἄτομος (atomos, \"indivisível\"), formado a partir de ἀ- (a-, \"não\") e τέμνω (temnō, \"cortar\"), o que significa qualquer coisa que não pode ser cortada ou que é indivisível. O conceito de átomo enquanto componente indivisível da matéria foi inicialmente proposto por filósofos gregos e indianos.\n[…]\nA ideia de organizar os elementos conforme as suas propriedades foi mais tarde desenvolvida por outros cientistas como Alexandre-Emile Béguyer de Chancourtois, Julius Lothar Meyer e John Newlands, culminando com a publicação da tabela periódica de Dmitri Mendeleev em 1871. Ao contrário das tabelas anteriores, a tabela proposta por Mendeleev antevia as propriedades de elementos que ainda não tinham sido isolados e dispunha de espaços vazios na sua estrutura para posterior preenchimento.\n[…]\nAssim, o modelo planetário do átomo foi depreciado a favor de um que descrevia as zonas orbitais à volta do núcleo em que fosse mais provável existirem eletrões.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Supercondutividade",
      "descricao": "Fenômeno em que certos materiais, resfriados abaixo de uma temperatura crítica, conduzem corrente sem resistência e expulsam campos magnéticos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Resfriados a temperaturas baixíssimas, certos materiais passam a conduzir eletricidade sem perder energia. Que grandeza elétrica neles cai a zero?",
    "resposta": "Resistência elétrica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Superconductivity"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Superconductivity",
        "situacao": "ok",
        "texto": "Superconductivity is a set of physical properties observed in superconductors: materials where electrical resistance is exactly zero and magnetic fields are expelled from the material. Unlike an ordinary metallic conductor, whose resistance decreases gradually as its temperature is lowered, even down to near absolute zero, a superconductor has a characteristic critical temperature below which the \n[…]\nSeveral physical properties of superconductors vary from material to material, such as the critical temperature, the value of the superconducting gap, the critical magnetic field, and the critical current density at which superconductivity is destroyed. On the other hand, there is a class of properties that are independent of the underlying material. The Meissner effect, the quantization of the magnetic flux or permanent currents, i.e. the state of zero resistance are the most important examples.\n[…]\nThis is the phenomenon of electrical resistance and Joule heating.\n[…]\nIn the class of superconductors known as type II superconductors, including all known high-temperature superconductors, an extremely low but non-zero resistivity appears at temperatures not too far below the nominal superconducting transition when an electric current is applied in conjunction with a strong magnetic field, which may be caused by the electric current.\n[…]\nHowever, as the temperature decreases far enough below the nominal superconducting transition, these vortices can become frozen into a disordered but stationary phase known as a \"vortex glass\". Below this vortex glass transition temperature, the resistance of the material becomes truly zero.\n[…]\nIt has been experimentally demonstrated that, as a consequence, when the magnetic field is increased beyond the critical field, the resulting phase transition leads to a decrease in the temperature of the superconducting material."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Supercondutividade",
        "situacao": "ok",
        "texto": "A supercondutividade é um conjunto de propriedades físicas observadas nos supercondutores, materiais nos quais a resistência elétrica é exatamente nula e os campos magnéticos são expulsos do material. Ao contrário de um condutor elétrico metálico comum, cuja resistência diminui gradualmente à medida que a temperatura é reduzida, mesmo nas proximidades do zero absoluto, um supercondutor tem uma tem\n[…]\nEm 2008, foi proposto que o mesmo mecanismo responsável pela supercondutividade poderia produzir, em alguns materiais, um estado de superisolante, com resistência elétrica quase infinita. O desenvolvimento e estudo, em 2020, de um condensado de Bose-Einstein supercondutor sugeriu uma \"transição suave\" entre os regimes de condensado de Bose-Einstein e Bardeen-Cooper-Schrieffer.\n[…]\nA maneira mais simples de medir a resistência elétrica de uma amostra é colocá-la em um circuito elétrico, em série com uma fonte de corrente I, e medir a tensão elétrica V entre seus terminais. Pela Lei de Ohm, a resistência é R = V/I. Se a queda de tensão na amostra for zero, a resistência será zero.\n[…]\nNos supercondutores do tipo II, classe que abrange todos os supercondutores de alta temperatura conhecidos, pode surgir uma resistividade muito pequena, mas diferente de zero, em temperaturas não muito abaixo da transição supercondutora quando uma corrente elétrica é aplicada em presença de um campo magnético intenso, que pode ser produzido pela própria corrente.\n[…]\nNos supercondutores do tipo II, quando o campo aplicado ultrapassa um primeiro valor crítico Hc1, surge um estado misto, também chamado estado de vórtices, no qual uma quantidade crescente de fluxo magnético penetra no material. Ainda assim, não há resistência ao fluxo de corrente elétrica enquanto a corrente não for grande demais. Em um segundo campo crítico, Hc2, a supercondutividade é destruída.\n[…]\nMaterial didático DoITPoMS sobre supercondutividade",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Ímã",
      "descricao": "Objeto que produz um campo magnético e atrai materiais ferromagnéticos; aqui, um ímã em barra com polos marcados."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Se você quebrar um ímã em barra ao meio, tentando separar o polo norte do polo sul, o que acontece?",
    "resposta": "Cada pedaço ganha os dois polos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Magnet",
      "https://en.wikipedia.org/wiki/Magnetic_monopole"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Magnet",
        "situacao": "ok",
        "texto": "A magnet is a material or object that produces a magnetic field. This magnetic field is invisible but is responsible for the most notable property of a magnet: a force that pulls on other ferromagnetic materials, such as iron, steel, nickel, cobalt, etc. and attracts or repels other magnets.\n[…]\nAlthough for many purposes it is convenient to think of a magnet as having distinct north and south magnetic poles, the concept of poles should not be taken literally: it is merely a way of referring to the two different ends of a magnet. The magnet does not have distinct north or south particles on opposing sides. If a bar magnet is broken into two pieces, in an attempt to separate the north and south poles, the result will be two bar magnets, each of which has both a north and south pole.\n[…]\nMagnets can be used in scrap and salvage operations to separate magnetic metals (iron, cobalt, and nickel) from non-magnetic metals (aluminum, non-ferrous alloys, etc.). The same idea can be used in the so-called \"magnet test\", in which a car chassis is inspected with a magnet to detect areas repaired using fiberglass or plastic putty.\n[…]\nz is the separation between the two magnets, in m.\n[…]\nis the magnetization of the magnets and\n[…]\nis the gap between the magnets.\n[…]\nA measurement of the magnetic flux density very close to the magnet\n[…]\nThe effective magnetic dipole can be written as\n[…]\nis the volume of the magnet. For a cylinder, this is\n[…]\nwhich matches the expression of the force between two magnetic dipoles.\n[…]\nHow magnets are made Archived 2013-03-16 at the Wayback Machine (video)\n[…]\nFloating Ring Magnets, Bulletin of the IAPT, Volume 4, No. 6, 145 (June 2012). (Publication of the Indian Association of Physics Teachers).\n[…]\nA brief history of electricity and magnetism Archived 2021-10-21 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Magnetic_monopole",
        "situacao": "ok",
        "texto": "In particle physics, a magnetic monopole is a hypothetical particle that is an isolated magnet with only one magnetic pole (a north pole without a south pole or vice versa). A magnetic monopole would have a net north or south \"magnetic charge\". Modern interest in the concept stems from particle theories, notably grand unified and superstring theories, which predict their existence.\n[…]\nBecause of this, the two poles of a magnetic dipole must always have equal and opposite strength, and the two poles cannot be separated from each other.\n[…]\nBy using a highly sensitive \"superconducting quantum interference device\" (SQUID) one can, in principle, detect even a single magnetic monopole.\n[…]\nAtiyah, M. F.; Hitchin, N. (1988). The Geometry and Dynamics of Magnetic Monopoles. Princeton University Press. ISBN 0-691-08480-7.\n[…]\nBalestra, S. (2011), Magnetic Monopole Bibliography-II, arXiv:1105.5587\n[…]\nGiacomelli, G. (2000), Magnetic Monopole Bibliography, arXiv:hep-ex/0005041, Bibcode:2000hep.ex....5041G\n[…]\nLacava, F. (2022). Classical Electrodynamics: From Image Charges to the Photon Mass and Magnetic Monopoles (2nd ed.). Springer. ISBN 978-3-031-05098-5.\n[…]\nLochak, G.; Stumpf, H. (2015). The Leptonic Magnetic Monopole: Theory and Experiments. Elsevier. ISBN 978-0-12-802463-8.\n[…]\nMilton, K. A. (2006). \"Theoretical and experimental status of magnetic monopoles\". Reports on Progress in Physics. 69 (6): 1637–1711. arXiv:hep-ex/0602040. Bibcode:2006RPPh...69.1637M. doi:10.1088/0034-4885/69/6/R02. S2CID 119061150.\n[…]\nShnir, Y. M. (2005). Magnetic Monopoles. Springer. ISBN 978-3-540-25277-1.\n[…]\nVonsovsky, S. V. (1975). Magnetism of Elementary Particles. Mir Publishers.\n[…]\nThis article incorporates material from N. Hitchin (2001) [1994], \"Magnetic Monopole\", Encyclopedia of Mathematics, EMS Press, which is licensed under the Creative Commons Attribution/Share-Alike License and GNU Free Documentation License."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%8Dman",
        "situacao": "ok",
        "texto": "Um ímã, também chamado de íman no português europeu ou de magneto, é um material ou objeto que produz um campo magnético. Esse campo é invisível, mas é responsável pela propriedade mais notável de um ímã: uma força que atrai outros materiais ferromagnéticos, como ferro, aço, níquel e cobalto, e atrai ou repele outros ímãs.\n[…]\nO momento magnético de um ímã, também chamado de momento de dipolo magnético e geralmente representado por μ, é um vetor que caracteriza suas propriedades magnéticas globais. Em um ímã em barra, o momento magnético aponta do polo sul para o polo norte, e seu módulo está relacionado à intensidade desses polos e à distância entre eles. No SI, o momento magnético é expresso em A·m2, isto é, amperes vezes metros quadrados.\n[…]\nHá dois modelos distintos para os ímãs: o dos polos magnéticos e o das correntes atômicas.\n[…]\nSe um ímã em barra for quebrado em duas partes na tentativa de separar os polos norte e sul, o resultado será a formação de dois ímãs em barra, cada um com um polo norte e um polo sul. Ainda assim, uma versão da abordagem dos polos magnéticos é utilizada por especialistas no projeto de ímãs permanentes.\n[…]\nNa prática, não é necessário recorrer ao campo magnético da Terra para identificar qual polo de um ímã é o norte e qual é o sul. Um dos métodos consiste em compará-lo a um eletroímã, cujos polos podem ser identificados pela regra da mão direita. Por convenção, considera-se que as linhas do campo magnético saem do polo norte do ímã e retornam a ele pelo polo sul.\n[…]\nNa descrição clássica por polos pontuais equivalentes, o módulo da força entre dois polos no vácuo é:\n[…]\nO módulo da força de atração entre dois ímãs cilíndricos idênticos, coaxiais e uniformemente magnetizados no mesmo sentido, separados por um vão\n[…]\nPara os mesmos dois cilindros idênticos, com magnetização axial uniforme",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Campo magnético da Terra",
      "descricao": "Campo magnético gerado no núcleo terrestre, que orienta as bússolas e protege o planeta do vento solar."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A ponta norte da agulha da bússola é atraída para o Ártico. Do ponto de vista da física, que tipo de polo magnético fica lá?",
    "resposta": "Um polo sul magnético",
    "fonte": [
      "https://en.wikipedia.org/wiki/Earth%27s_magnetic_field",
      "https://en.wikipedia.org/wiki/North_magnetic_pole"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Earth%27s_magnetic_field",
        "situacao": "ok",
        "texto": "Earth's magnetic field, also known as the geomagnetic field, is the magnetic field that extends from Earth's interior out into space, where it interacts with the solar wind, a stream of       charged particles emanating from the Sun. The magnetic field is generated by electric currents due to the motion of convection currents of a mixture of molten iron and nickel in Earth's outer core: these conv\n[…]\nFrequently, the Earth's magnetosphere is hit by solar flares causing geomagnetic storms, provoking displays of aurorae. The short-term instability of the magnetic field is measured with the K-index.\n[…]\nAlthough generally Earth's field is approximately dipolar, with an axis that is nearly aligned with the rotational axis, occasionally the North and South geomagnetic poles trade places. Evidence for these geomagnetic reversals can be found in basalts, sediment cores taken from the ocean floors, and seafloor magnetic anomalies. Reversals occur nearly randomly in time, with intervals between reversals ranging from less than 0.1 million years to as much as 50 million years.\n[…]\nThe first self-consistent dynamo models, ones that determine both the fluid motions and the magnetic field, were developed by two groups in 1995, one in Japan and one in the United States. The latter received attention because it successfully reproduced some of the characteristics of the Earth's field, including geomagnetic reversals.\n[…]\nThe oceans contribute to Earth's magnetic field. Seawater is an electrical conductor, and therefore interacts with the magnetic field. As the tides cycle around the ocean basins, the ocean water essentially tries to pull the geomagnetic field lines along. Because the salty water is only slightly conductive, the interaction is relatively weak: the strongest component is from the regular lunar tide that happens about twice per day (M2).\n[…]\nMagnetic field of Mars\n[…]\nMagnetotellurics"
      },
      {
        "url": "https://en.wikipedia.org/wiki/North_magnetic_pole",
        "situacao": "ok",
        "texto": "The north magnetic pole, also known as the magnetic north pole, is a point on the surface of Earth's Northern Hemisphere at which the planet's magnetic field points vertically downward (in other words, if a magnetic compass needle is allowed to rotate in three dimensions, it will point straight down). There is only one location where this occurs, near (but distinct from) the geographic north pole.\n[…]\nThe direction in which a compass needle points is known as magnetic north. In general, this is not exactly the direction of the north magnetic pole (or of any other consistent location). Instead, the compass aligns itself to the local geomagnetic field, which varies in a complex manner over Earth's surface, as well as over time. The local angular difference between magnetic north and true north is called the magnetic declination.\n[…]\nAs a first-order approximation, Earth's magnetic field can be modeled as a simple dipole (like a bar magnet), tilted about 10° with respect to Earth's rotation axis (which defines the geographic north and geographic south poles) and centered at Earth's center. The north and south geomagnetic poles are the antipodal points where the axis of this theoretical dipole intersects Earth's surface.\n[…]\nIf Earth's magnetic field were a perfect dipole then the field lines would be vertical at the geomagnetic poles, and they would coincide with the magnetic poles. However, the approximation is imperfect, and so the magnetic and geomagnetic poles lie some distance apart.\n[…]\nOver the life of Earth, the orientation of Earth's magnetic field has reversed many times, with magnetic north becoming magnetic south and vice versa – an event known as a geomagnetic reversal. Evidence of geomagnetic reversals can be seen at mid-ocean ridges where tectonic plates move apart and the seabed is filled in with magma.\n[…]\nSouth magnetic pole"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campo_magn%C3%A9tico_terrestre",
        "situacao": "ok",
        "texto": "Campo magnético terrestre, também conhecido como campo geomagnético, é o campo magnético que se estende do interior da Terra para o espaço, onde interage com o vento solar, um fluxo de partículas carregadas que emanam do Sol.\n[…]\nPerto da superfície da Terra, o campo magnético funciona como um dipolo magnético posicionado no centro do planeta e inclinado em um ângulo de cerca de 11° em relação ao eixo rotacional dele. O dipolo é equivalente a um poderoso ímã, com seu polo sul apontando para o Polo Norte geomagnético. Como o polo norte de um ímã atrai os polos sul de outros ímãs e repele os polos norte, ele deve ser atraído pelo polo sul do ímã da Terra.\n[…]\nHistoricamente, os polos norte e sul de um ímã foram definidos pela primeira vez pelo campo magnético da Terra, e não vice-versa, uma vez que um dos primeiros usos de um ímã foi como uma agulha de bússola. O polo norte de um ímã é atraído pelo polo magnético norte da Terra quando o ímã é suspenso e pode girar livremente. Como polos opostos se atraem, o Polo Magnético Norte da Terra é, na verdade, o polo sul do seu campo magnético (o local onde o campo é direcionado para baixo na Terra).\n[…]\nAs posições dos polos magnéticos podem ser definidas de pelo menos duas maneiras: local ou globalmente. A definição local é o ponto em que o campo magnético é vertical. Isto pode ser determinado medindo a inclinação do campo da Terra, que é de 90° (para baixo) no Polo Magnético Norte e de -90° (para cima) no Polo Magnético Sul. Os dois polos vagam independentemente um do outro e não estão diretamente opostos um ao outro no globo.\n[…]\nMagnetosfera de Júpiter\n[…]\nPadrões no campo magnético da Terra que evoluem na ordem de 1.000 anos . 19 de julho de 2017",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Ultrassom",
      "descricao": "Som de frequência acima do limite da audição humana, usado em exames médicos e na ecolocalização de animais."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Como a física chama o som agudo demais para o ouvido humano, como o de certos apitos usados para adestrar cães?",
    "resposta": "Ultrassom",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ultrasound",
      "https://en.wikipedia.org/wiki/Dog_whistle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ultrasound",
        "situacao": "ok",
        "texto": "Ultrasound is sound with frequencies greater than 20 kilohertz. This frequency is the approximate upper audible limit of human hearing in healthy young adults. The physical principles of acoustic waves apply to any frequency range, including ultrasound. Ultrasonic devices operate with frequencies from 20 kHz up to several gigahertz.\n[…]\nUltrasound is used in extraction, using different frequencies.\n[…]\nAudio can be propagated by modulated ultrasound.\n[…]\nIn July 2015, The Economist reported that researchers at the University of California, Berkeley have conducted ultrasound studies using graphene diaphragms. The thinness and low weight of graphene combined with its strength make it an effective material to use in ultrasound communications. One suggested application of the technology would be underwater communications, where radio waves typically do not travel well.\n[…]\nUltrasonic signals have been used in \"audio beacons\" for cross-device tracking of Internet users.\n[…]\nOccupational exposure to ultrasound in excess of 120 dB may lead to hearing loss. Exposure in excess of 155 dB may produce heating effects that are harmful to the human body, and it has been calculated that exposures above 180 dB may lead to death. The UK's independent Advisory Group on Non-ionising Radiation (AGNIR) produced a report in 2010, which was published by the UK Health Protection Agency (HPA).\n[…]\nThis report recommended an exposure limit for the general public to airborne ultrasound sound pressure levels (SPL) of 70 dB (at 20 kHz), and 100 dB (at 25 kHz and above).\n[…]\nIn medical ultrasound, guidelines exist to prevent inertial cavitation from happening. The risk of inertial cavitation damage is expressed by the mechanical index.\n[…]\nGuidelines for the Safe Use of Ultrasound: valuable insight on the boundary conditions tending towards abuse of ultrasound"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dog_whistle",
        "situacao": "ok",
        "texto": "A dog whistle (also known as silent whistle or Galton's whistle) is a type of whistle that emits sound in the ultrasonic range, which humans cannot hear but some animals can, including dogs and domestic cats, and is used in their training. It was invented in 1876 by Francis Galton and is mentioned in his book Inquiries into Human Faculty and Its Development, in which he describes experiments to te\n[…]\nThe whistle emitted ultrasonic sounds beyond the upper limit of human hearing, allowing Galton to observe that smaller dogs could detect higher pitches than larger ones, and that cats responded to even higher frequencies, albeit with less enthusiasm. This innovation not only advanced the understanding of auditory perception but also laid the groundwork for the modern dog whistle used in training and communication with canines.\n[…]\nIn addition to lung-powered whistles, there are also electronic dog whistle devices that emit ultrasonic sound via piezoelectric emitters. The electronic variety are sometimes coupled with bark-detection circuits in devices designed to curb barking behaviour.\n[…]\nIn addition, some animal welfare advocates have raised concerns about the misuse of dog whistles, particularly if used at excessive volumes or frequencies that may cause distress or confusion in dogs and other animals. Inappropriate use of ultrasonic devices for behavior correction has also been criticized as potentially aversive or inhumane when used without proper training or understanding.\n[…]\nUltrasound"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ultrassom",
        "situacao": "ok",
        "texto": "Ultrassom é uma faixa de som com uma frequência sonora superior àquela que o ouvido do ser humano com uma audição regular pode perceber, aproximadamente 20 000 Hz. Dispositivos ultrassônicos operam de 20 kHz até vários gigahertz.\n[…]\nO ultrassom é usado em diversos campos. Dispositivos ultrassônicos são usados para detectar objetos e medir distâncias. Ultrassonografia é usada tanto em medicina veterinária quanto em medicina humana. Em testes não destrutíveis, o ultrassom é usado para detectar falhas em produtos e estruturas. Industrialmente, o ultrassom é usado para limpar, misturar e acelerar processos químicos.\n[…]\nUm som é caracterizado por vibrações (variação de pressão) no ar. O ser humano normal médio consegue distinguir, ou ouvir, sons na faixa de frequência que se estende de 20 Hz a 20 000 Hz aproximadamente. Acima deste intervalo, os sinais são conhecidos como ultrassons, e abaixo dele como infrassons.\n[…]\nO limite superior de frequência que o ouvido humano consegue perceber é de aproximadamente 20 kHz. A audição ultrassônica pode ocorrer se o som é direcionado diretamente para o crânio humano e atinge a cóclea através da condução óssea, sem passar através da orelha média.\n[…]\nPara gerar sons de alta-frequência e ultrassons, geralmente são utilizados transdutores ultrassônicos como cerâmicas ou cristais, que estão sujeitos ao efeito piezoelétrico, os quais produzem oscilações mecânicas em resposta a impulsos elétricos.\n[…]\nUsa ultrassom para aumentar as propriedades físicas e mecânicas dos metais. Tratamento ultrassônico pode resultar em controle residual do stress compressivo, redução e refinamento de grão, além de redução da fadiga.\n[…]\nUltrassonografia\n[…]\nUltrassom terapêutico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Magnetita",
      "descricao": "Mineral de óxido de ferro, naturalmente magnético, que forma os ímãs naturais conhecidos desde a Antiguidade."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que mineral de ferro, conhecido desde a Antiguidade, forma ímãs naturais capazes de atrair pregos?",
    "resposta": "Magnetita",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lodestone",
      "https://en.wikipedia.org/wiki/Magnetite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lodestone",
        "situacao": "ok",
        "texto": "Lodestones are naturally magnetized pieces of the mineral magnetite. They are naturally occurring magnets, which can attract iron. The property of magnetism was first discovered in antiquity through lodestones. Pieces of lodestone, suspended so they could turn, were the first magnetic compasses, and their importance to early navigation is indicated by the name lodestone, which in Middle English me\n[…]\nLodestone is one of only a very few minerals that is found naturally magnetized. Magnetite is black or brownish-black with a black streak, with a metallic luster and a Mohs hardness of 5.5–6.5.\n[…]\nIn the chronicle Lüshi Chunqiu, from the 2nd century BC, it is explicitly stated that \"the lodestone makes iron come or it attracts it.\" The earliest mention of a needle's attraction appears in a work composed between 20 and 100 AD, the Lunheng (Balanced Inquiries): \"A lodestone attracts a needle.\" In the 2nd century BC, Chinese geomancers were experimenting with the magnetic properties of lodestone to make a \"south-pointing spoon\" for divination.\n[…]\nBased on his discovery of an Olmec artifact (a shaped and grooved magnetic bar) in North America, astronomer John Carlson suggests that lodestone may have been used by the Olmec more than a thousand years prior to the Chinese discovery. Carlson speculates that the Olmecs, for astrological or geomantic purposes, used similar artifacts as a directional device, or to orient their temples, the dwellings of the living, or the interments of the dead.\n[…]\nAnd in 17th-century London, the Royal Society displayed a 6-inch (15 cm) spherical lodestone (a terrella or 'little Earth'), which was used to illustrate the Earth's magnetic fields and the function of mariners' compasses.\n[…]\n\"The Lodestone\", from the website The Great Magnet, the Earth, made to commemorate the 400th anniversary of De Magnete"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Magnetite",
        "situacao": "ok",
        "texto": "Magnetite is a mineral and one of the main iron ores, with the chemical formula Fe2+Fe3+2O4. It is one of the oxides of iron, and is ferrimagnetic; it is attracted to a magnet and can be magnetized to become a permanent magnet itself. With the exception of extremely rare native iron deposits, it is the most magnetic of all the naturally occurring minerals on Earth.\n[…]\nNaturally magnetized pieces of magnetite, called lodestone, will attract small pieces of iron, which is how ancient peoples first discovered the property of magnetism.\n[…]\nNatural and synthetic magnetite occurs most commonly as octahedral crystals bounded by {111} planes and as rhombic-dodecahedra. Twinning occurs on the {111} plane.\n[…]\nLarge deposits of magnetite are also found in the Atacama region of Chile (Chilean Iron Belt); the Valentines region of Uruguay; Kiruna, Sweden; the Tallawang region of New South Wales; and in the Adirondack Mountains of New York in the United States. Kediet ej Jill, the highest mountain of Mauritania, is made entirely of the mineral.\n[…]\nElectron microscope scans of human brain-tissue samples are able to differentiate between magnetite produced by the body's own cells and magnetite absorbed from airborne pollution, the natural forms being jagged and crystalline, while magnetite pollution occurs as rounded nanoparticles. Potentially a human health hazard, airborne magnetite is a result of pollution (specifically combustion).\n[…]\nThese nanoparticles can travel to the brain via the olfactory nerve, increasing the concentration of magnetite in the brain. In some brain samples, the nanoparticle pollution outnumbers the natural particles by as much as 100:1, and such pollution-borne magnetite particles may be linked to abnormal neural deterioration.\n[…]\nMagnesia (in natural mixtures with magnetite)\n[…]\nBio-magnetics\n[…]\nMagnetite mining in New Zealand Accessed 25-Mar-09"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pedra-im%C3%A3",
        "situacao": "ok",
        "texto": "Pedras-imãs, ou, erroneamente, magnetitas, são pedaços naturalmente magnetizados do mineral magnetita. Eles são ímãs naturais, que podem atrair ferro. A propriedade do magnetismo foi descoberta pela primeira vez na antiguidade através destas pedras em específico.\n[…]\nPedaços de magnetita, suspensos para que pudessem girar, foram as primeiras bússolas magnéticas, e sua importância para a navegação inicial é indicada pelo nome Lodestone, que no inglês médio, significa algo como \"pedra do percurso\" ou \"pedra principal\".\n[…]\nA pedra-imã é um dos poucos minerais, encontrados naturalmente, que são magnetizados. Costuma ser preta, ou preta acastanhada, com brilho metálico, dureza Mohs de 5,5–6,5 e traço preto (a cor do pó do mineral).\n[…]\nUma das primeiras referências conhecidas às propriedades magnéticas da pedra-imã foi feita pelo famoso filósofo, matemático, e astrônomo grego do século VI aC, Tales de Mileto, a quem os antigos gregos atribuíam a descoberta da atração da pedra-imã pelo ferro, e outras pedras-imã. O nome magnetismo pode vir de pedras-imã que foram encontradas na antiga cidade da Lídia, chamada Magnésia, na Anatólia.\n[…]\nA primeira referência na literatura chinesa, ao magnetismo, se dá no Livro do Mestre do Vale do Diabo (Guiguzi), do século IV a.C. Na crônica Lüshi Chunqiu, do século II a.C., é dito que  “a pedra-imã faz vir o ferro, ou o atrai”.\n[…]\nNo jogo Minecraft há um bloco chamado \"Lodestone\" (Pedra-imã em inglês). Sua função no jogo é mudar a direção da agulha do item bússola, usando das propriedades magnéticas.\n[…]\nNo jogo Heroes of Newerth, o nome de um dos heróis é \"Lodestone\", pois é feito de \"pedra magnetizada e aço\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Eletricidade estática",
      "descricao": "Acúmulo de carga elétrica na superfície de objetos, em geral por atrito, que causa faíscas e atrai cabelos."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que fenômeno faz o cabelo ficar em pé e dar estalinhos quando tiramos uma blusa de lã num dia seco?",
    "resposta": "Eletricidade estática",
    "fonte": [
      "https://en.wikipedia.org/wiki/Static_electricity"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Static_electricity",
        "situacao": "ok",
        "texto": "Static electricity is an imbalance of electric charges within or on the surface of a material. The charge remains until it can move away as an electric current or by electrical discharge. The word \"static\" is used to differentiate it from current electricity, where an electric charge flows through an electrical conductor.\n[…]\nDue to the extremely low humidity in extraterrestrial environments, very large static charges can accumulate, causing a major hazard for the complex electronics used in space exploration vehicles. Static electricity is thought to be a particular hazard for astronauts on planned missions to the Moon and Mars.\n[…]\nWalking over the extremely dry terrain could cause them to accumulate a significant amount of charge; reaching out to open the airlock on their return could cause a large static discharge, potentially damaging sensitive electronics.\n[…]\nThe energy released in a static electricity discharge may vary over a wide range. The energy in joules can be calculated from the capacitance (C) of the object and the static potential V in volts (V) by the formula E = ½CV2. One experimenter estimates the capacitance of the human body as high as 400 picofarads, and a voltage of 50,000 volts, discharged e.g. during touching a charged car, creating a spark with energy of 500 millijoules.\n[…]\nSpark, responsible for the majority of industrial fires and explosions where static electricity is involved. Sparks occur between objects at different electric potentials. Good grounding of all parts of the equipment and precautions against charge buildups on equipment and personnel are used as prevention measures.\n[…]\nElectrical charge\n[…]\nElectrostatic discharge\n[…]\nElectrostatic generator\n[…]\nElectrostatics\n[…]\nMedia related to Static electricity at Wikimedia Commons\n[…]\nThe dictionary definition of static electricity at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eletricidade_est%C3%A1tica",
        "situacao": "ok",
        "texto": "Eletricidade estática é um desequilíbrio de cargas elétricas dentro ou na superfície de um material. O acúmulo de carga permanece até que possa se afastar como corrente elétrica ou por descarga elétrica. A palavra \"estática\" é usada para diferenciá-la da eletricidade corrente, onde uma carga elétrica flui através de um condutor elétrico.\n[…]\nUma carga elétrica estática pode ser criada sempre que duas superfícies entram em contato e/ou deslizam uma contra a outra e depois se separam. Os efeitos da eletricidade estática são familiares para a maioria das pessoas porque elas podem sentir, ouvir e até mesmo ver faíscas se o excesso de carga for neutralizado quando levadas para perto de um condutor elétrico (por exemplo, um caminho para o solo) ou de uma região com excesso de carga de polaridade oposta (positiva ou negativa).\n[…]\nO fenômeno familiar de um choque estático – mais especificamente, uma descarga eletrostática – é causado pela neutralização de uma carga.\n[…]\nOs corpos são eletricamente neutros porque têm o mesmo número de cargas positivas (protões) e cargas negativas (eletrões). O fenômeno da eletricidade estática requer uma separação sustentada dessas cargas por algum suporte isolante.\n[…]\nEletrões ou iões podem ser trocados entre materiais em contato ou quando deslizam uns contra os outros, o que é conhecido como efeito triboelétrico e faz com que um material fique carregado positivamente e o outro carregado negativamente. O efeito triboelétrico é a principal causa da eletricidade estática observada na vida cotidiana e em demonstrações científicas comuns do ensino médio envolvendo a fricção de diferentes materiais (por exemplo, pele contra uma haste de acrílico).\n[…]\nEletricidade\n[…]\nEstática",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Átomo",
      "descricao": "Menor unidade de um elemento químico, formada por um núcleo de prótons e nêutrons cercado por elétrons."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Filósofos gregos imaginaram a menor parte da matéria e a chamaram de átomo. O que essa palavra significa?",
    "resposta": "Indivisível",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atom",
      "https://pt.wikipedia.org/wiki/Átomo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atom",
        "situacao": "ok",
        "texto": "Atoms are the basic particles of the chemical elements and the fundamental building blocks of matter. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and an\n[…]\nHe called these new particles corpuscles but they were later renamed electrons since these are the particles that carry electricity. Thomson also showed that electrons were identical to particles given off by photoelectric and radioactive materials. Thomson explained that an electric current is the passing of electrons from one atom to the next, and when there was no current the electrons embedded themselves in the atoms. This in turn meant that atoms were not indivisible as scientists thought.\n[…]\nAtomic dimensions are thousands of times smaller than the wavelengths of light (400–700 nm) so they cannot be viewed using an optical microscope, although individual atoms can be observed using a scanning tunneling microscope. To visualize the minuteness of the atom, consider that a typical human hair is about 1 million carbon atoms in width. A single drop of water contains about 2 sextillion (2×1021) atoms of oxygen, and twice the number of hydrogen atoms.\n[…]\nParamagnetic materials have atoms with magnetic moments that line up in random directions when no magnetic field is present, but the magnetic moments of the individual atoms line up in the presence of a field.\n[…]\nThis has important applications in magnetic resonance imaging.\n[…]\nThe atom-probe tomograph has sub-nanometer resolution in 3-D and can chemically identify individual atoms using time-of-flight mass spectrometry.\n[…]\nSharp, Tim (8 August 2017). \"What is an Atom?\". Live Science."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Átomo",
        "situacao": "ok",
        "texto": "Átomo é uma unidade básica de matéria que consiste num núcleo central de carga elétrica positiva envolto por uma nuvem de eletrões de carga negativa. O núcleo atómico é composto por protões e neutrões. Os eletrões de um átomo estão ligados ao núcleo por força eletromagnética. Da mesma forma, um grupo de átomos pode estar ligado entre si através de ligações químicas baseadas na mesma força, formand\n[…]\nOs materiais paramagnéticos possuem átomos com momentos magnéticos que, na ausência de campos magnéticos, se alinham em direções aleatórias, mas em que na presença de um campo se alinham individualmente.\n[…]\nO termo átomo tem origem no grego ἄτομος (atomos, \"indivisível\"), formado a partir de ἀ- (a-, \"não\") e τέμνω (temnō, \"cortar\"), o que significa qualquer coisa que não pode ser cortada ou que é indivisível. O conceito de átomo enquanto componente indivisível da matéria foi inicialmente proposto por filósofos gregos e indianos.\n[…]\nO conceito de que a matéria é constituída por unidades individuais e que não pode ser dividida em quantidades cada vez mais pequenas de forma arbitrária existe desde a Antiguidade. No entanto, este conceito tinha por base noções filosóficas, e não o experimentalismo ou a observação empírica. A natureza dos átomos em filosofia variou consideravelmente ao longo do tempo e entre culturas e escolas de pensamento, tendo muitas vezes associados elementos espirituais.\n[…]\nEm termos históricos, os átomos individuais sempre foram proibitivamente pequenos para terem aplicações científicas. No entanto, recentemente têm sido construídos aparelhos que usam um único átomo de metal ligado por ligantes orgânicos para construir um transístor de eletrão único. Têm sido realizadas experiências para reter e abrandar átomos individuais através de arrefecimento a laser, de modo a melhorar a compreensão da matéria."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Próton",
      "descricao": "Partícula subatômica de carga elétrica positiva presente no núcleo de todos os átomos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Batizado por Ernest Rutherford, o próton tem um nome tirado de uma palavra grega. O que ela significa?",
    "resposta": "Primeiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Proton"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Proton",
        "situacao": "ok",
        "texto": "A proton is a stable subatomic particle, symbol p, H+, or 1H+ with a positive electric charge of +1 e (elementary charge). Its mass is slightly less than the mass of a neutron and approximately 1836 times the mass of an electron (the proton-to-electron mass ratio). Protons and neutrons, each with a mass of approximately one dalton, are jointly referred to as nucleons (particles present in atomic n\n[…]\nThe word proton is Greek for \"first\", and the name was given to the hydrogen nucleus by Ernest Rutherford in 1920. In previous years, Rutherford had discovered that the hydrogen nucleus (known to be the lightest nucleus) could be extracted from the nuclei of nitrogen by atomic collisions. Protons were therefore a candidate to be a fundamental or elementary particle, and hence a building block of nitrogen and all other heavier atomic nuclei.\n[…]\nFollowing the discovery of the atomic nucleus by Ernest Rutherford in 1913, Antonius van den Broek proposed that the place of each element in the periodic table (its atomic number) is equal to its nuclear charge. Van den Broek speculated that the nucleus contained alpha particles with four positive charges and two electrons, the first version of the nuclear-electron hypothesis. (The modern model of two positive protons and two neutrons would take many years to discover).\n[…]\nRutherford initially assumed that the alpha particle merely knocked a proton out of nitrogen, turning it into carbon. Patrick Blackett's cloud chamber images in 1925 demonstrated that the alpha particle was absorbed. If the alpha particle were not absorbed, then three charged particles, a negatively charged carbon, a proton, and an alpha particle, would be expected. The three charged particles would create three tracks in the cloud chamber, but only two tracks in the cloud chamber were observed.\n[…]\nMIT proton visualization project:\n[…]\nVisualizing the Proton, Arts at MIT, 2022"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pr%C3%B3ton",
        "situacao": "ok",
        "texto": "O próton (português brasileiro) ou protão (português europeu) é uma partícula subatômica, de símbolo p ou p+, com uma carga elétrica positiva de +1 e uma carga elementar de 1,6×10 -19 C. Os prótons e os nêutrons possuem uma massa de aproximadamente 1 unidade de massa atômica, cerca de 1,66×10-24g e são referidos coletivamente como \"núcleons\". Prótons estão presentes no núcleo de um átomo; o número\n[…]\nUma vez que cada elemento tem um único número de prótons, cada elemento tem o seu próprio número atômico. A palavra próton significa em grego \"primeiro\", e esse nome foi dado ao núcleo de hidrogênio por Ernest Rutherford em 1920. Nos anos anteriores, Rutherford descobriu que o núcleo de hidrogênio (conhecido por ser o núcleo mais leve) podia ser extraído dos núcleos de nitrogênio por colisão.\n[…]\nEsses raios foram denominados de raios canais. Posteriormente, o neozelandês Ernest Rutherford verificou que os raios canais originários do hidrogênio possuíam a menor carga positiva conhecida até então. A essa unidade eletricamente carregada positivamente deu-se o nome de próton.\n[…]\nO próton é formado por dois quarks up e um down, sendo escrito como: uud.\n[…]\nO nêutron tem carga elétrica nula e é ligeiramente mais pesado que o próton.\n[…]\nO elétron apresenta a mesma carga que o próton, porém de sinal contrário. Entretanto, é 1836 vezes mais leve (1/1836).\n[…]\nNa química e bioquímica , a palavra próton é frequentemente usada como um sinônimo para o íon molecular de hidrogênio (H+) em vários contextos:\n[…]\nA transferência do H+ em uma reação ácido-base é descrita como a transferência de um próton. Um ácido é tido como um doador de próton e uma base como um receptor de próton.\n[…]\nO íon de hidrogênio (H3O+) em uma solução aquosa corresponde ao íon de hidreto de hidrogênio. Frequentemente a molécula da água é ignorada e o íon é escrito simplesmente como H+(aq) ou finalmente H+, e tratado como um próton.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Neutrino",
      "descricao": "Partícula elementar sem carga elétrica e de massa minúscula, que interage muito pouco com a matéria."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A partícula chamada neutrino ganhou um nome italiano, popularizado por Enrico Fermi. O que esse nome significa?",
    "resposta": "Pequeno neutro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Neutrino"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Neutrino",
        "situacao": "ok",
        "texto": "A neutrino ( new-TREE-noh; denoted by the Greek letter ν) is an elementary particle that interacts  via the weak interaction and gravity. The neutrino is so named because it is electrically neutral and because its rest mass is so small (-ino) that it was long thought to be zero. The rest mass of the neutrino is much smaller than that of the other known elementary particles (excluding massless part\n[…]\nJames Chadwick discovered a much more massive neutral nuclear particle in 1932 and named it a neutron also, leaving two kinds of particles with the same name. The word \"neutrino\" entered the scientific vocabulary through Enrico Fermi, who used it during a conference in Paris in July 1932 and at the Solvay Conference in October 1933, where Pauli also employed it.\n[…]\nThe name (the Italian equivalent of \"little neutral one\") was jokingly coined by Italian physicist Edoardo Amaldi during a conversation with Fermi at the Institute of Physics of via Panisperna in Rome, in order to distinguish this light neutral particle from Chadwick's heavy neutron.\n[…]\nAntineutrinos are produced in nuclear beta decay together with a beta particle (in beta decay a neutron decays into a proton, electron, and antineutrino). All antineutrinos observed thus far had right-handed helicity (i.e., only one of the two possible spin states has ever been seen), while neutrinos were all left-handed.\n[…]\nAlthough neutrinos pass through the outer gases of a supernova without scattering, they provide information about the deeper supernova core with evidence that here, even neutrinos scatter to a significant extent. In a supernova core the densities are those of a neutron star (which is expected to be formed in this type of supernova), becoming large enough to influence the duration of the neutrino signal by delaying some neutrinos.\n[…]\nRincon, Paul (22 June 2010). \"Neutrino 'ghost particle' sized up by astronomers\". BBC News."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Neutrino",
        "situacao": "ok",
        "texto": "O neutrino é uma partícula subatômica sem carga elétrica e que interage com outras partículas apenas por meio da gravidade e da força nuclear fraca (duas das quatro forças fundamentais da Natureza, ao lado da eletromagnética e da força nuclear forte). É conhecido por suas características extremas: é extremamente leve (algumas centenas de vezes mais leve que o elétron),\n[…]\nneutrino do múon\n[…]\nneutrino do tau\n[…]\nEssas partículas novas foram chamadas inicialmente de \"nêutrons\", porque não tinham carga elétrica. Com a descoberta, em 1932, do que conhecemos hoje por \"nêutrons\", elas passaram a ser chamadas pelo diminutivo em italiano, \"neutrino\", palavra escolhida pelo físico italiano Enrico Fermi.\n[…]\nMesmo assim, esse modelo levava a complicações relacionadas com o spin do núcleo. Pauli achava que elas também podiam ser resolvidas se se admitisse que os neutrinos também fizessem parte do núcleo. Porém, em 1932, descobriu-se que o núcleo continha nêutrons, o que resolveu esses problemas.\n[…]\nUsaram como detector um tanque de água com cloreto de cádmio. Alguns dos neutrinos que entravam no tanque interagiam com os prótons dos átomos, produzindo nêutrons e pósitrons (elétrons positivos). Os pósitrons aniquilavam-se com os elétrons dos átomos, produzindo raios gama. Já os nêutrons eram capturados pelos núcleos atômicos do cádmio, produzindo outros raios gama com frequências diferentes. Os espectros dos dois tipos de raios gama eram uma \"assinatura\" da presença do antineutrino ali.\n[…]\nAntes que a ideia de oscilações de neutrinos surgisse, era comumente aceito que eles viajavam à velocidade da luz. A questão da velocidade do neutrino está intimamente relacionada à sua massa extremamente pequena, algumas centenas de milhares de vezes menores que a do elétron. De acordo com a teoria da relatividade, se os neutrinos têm massa, eles não podem alcançar a velocidade da luz.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Laser",
      "descricao": "Dispositivo que emite um feixe de luz intenso, concentrado e de uma só cor, por emissão estimulada de radiação."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra laser é uma sigla em inglês que significa amplificação de quê por emissão estimulada de radiação?",
    "resposta": "Da luz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Laser"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Laser",
        "situacao": "ok",
        "texto": "A laser is a device that emits light through a process of optical amplification based on the stimulated emission of electromagnetic radiation. The word laser originated as an acronym for light amplification by stimulated emission of radiation. The first laser was built in 1960 by Theodore Maiman at Hughes Research Laboratories, based on theoretical work by Charles H. Townes and Arthur Leonard Scha\n[…]\nA system with this property is called an optical amplifier. When an optical amplifier is placed inside a resonant optical cavity, one obtains a laser.\n[…]\nIt also contained the first recorded use of the term \"laser,\" an acronym for \"light amplification by stimulated emission of radiation,\" along with suggestions for potential applications of the coherent light beams described.\n[…]\nGould won his first patent in 1977 for optically pumped laser amplifiers, yet it was not until 1987 that he won his first significant patent infringement claim. Many aspects of a working laser were patented by different people: the question of just how to assign credit for inventing the laser remains unresolved by historians.\n[…]\nFollowing the invention of the HeNe gas laser, many other gas discharges have been found to amplify light coherently.\n[…]\nSolid-state lasers or laser amplifiers where the light is guided due to the total internal reflection in a single mode optical fiber are instead called fiber lasers. Guiding of light allows extremely long gain regions, providing good cooling conditions; fibers have a high surface area to volume ratio which allows efficient cooling. In addition, the fiber's waveguiding properties tend to reduce thermal distortion of the beam. Erbium and ytterbium ions are common active species in such lasers.\n[…]\nLike astrophysical masers, irradiated planetary or stellar gases may amplify light producing a natural laser. Mars, Venus, and MWC 349 exhibit this phenomenon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Laser",
        "situacao": "ok",
        "texto": "Um laser, também grafado lêiser, é um dispositivo que emite luz por um processo de amplificação óptica baseado na emissão estimulada de radiação eletromagnética. A palavra laser surgiu como acrônimo da expressão inglesa light amplification by stimulated emission of radiation, \"amplificação da luz por emissão estimulada de radiação\". O primeiro laser funcional foi construído em 1960 por Theodore Ma\n[…]\nO primeiro dispositivo que usava amplificação por emissão estimulada operava em frequências de micro-ondas e recebeu o nome de maser, acrônimo de microwave amplification by stimulated emission of radiation, \"amplificação de micro-ondas por emissão estimulada de radiação\". Quando dispositivos semelhantes foram propostos para a região óptica, foram inicialmente chamados de masers ópticos. A substituição de microwave por light no acrônimo produziu a palavra laser.\n[…]\nAlgumas obras usam o termo inglês anacronym para palavras como laser, acrônimos que se tornaram substantivos tão comuns que deixaram de ser percebidos como abreviações.\n[…]\nO bombeamento de um laser mantém partículas no estado superior da transição. A luz emitida espontaneamente pode iniciar a oscilação, mas a amplificação por emissão estimulada favorece a radiação nos modos sustentados pelo sistema óptico. A coerência da saída depende dessa amplificação e da dinâmica do laser.\n[…]\nEm 1917, Albert Einstein publicou Zur Quantentheorie der Strahlung, \"Sobre a teoria quântica da radiação\", relacionando a lei de Planck aos coeficientes de absorção, emissão espontânea e emissão estimulada. Esse tratamento forneceu uma das bases teóricas do laser e do maser. Em 1928, Rudolf W. Ladenburg investigou a absorção negativa relacionada à emissão estimulada. Em 1939, Valentin A. Fabrikant propôs usar a emissão estimulada para amplificar ondas eletromagnéticas curtas.\n[…]\nEmissão estimulada, processo que fornece a amplificação em muitos lasers",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Mecânica quântica",
      "descricao": "Teoria física que descreve o comportamento da matéria e da energia na escala dos átomos e das partículas subatômicas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A física quântica tirou seu nome da palavra latina quantum. O que ela significa?",
    "resposta": "Quanto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quantum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quantum",
        "situacao": "ok",
        "texto": "In physics, a quantum (pl.: quanta) is the minimum amount of any physical entity (physical property) involved in an interaction. The fundamental notion that a property can be \"quantized\" is referred to as \"the hypothesis of quantization\". This means that the magnitude of the physical property can take on only discrete values consisting of integer multiples of one quantum.\n[…]\nFor example, a photon is a single quantum of light of a specific frequency (or of any other form of electromagnetic radiation). Similarly, the energy of an electron bound within an atom is quantized and can exist only in certain discrete values. Atoms and matter in general are stable because electrons can exist only at discrete energy levels within an atom. Quantization is one of the foundations of the much broader physics of quantum mechanics.\n[…]\nQuantization of energy and its influence on how energy and matter interact (quantum electrodynamics) is part of the fundamental framework for understanding and describing nature.\n[…]\nEinstein was able to use this hypothesis to recast Planck's treatment of the blackbody problem in a form that also explained the voltages observed in Philipp Lenard's experiments on the photoelectric effect. Shortly thereafter, the term \"energy quantum\" was introduced for the quantity hν.\n[…]\nWhile quantization was first discovered in electromagnetic radiation, it describes a fundamental aspect of energy not just restricted to photons.\n[…]\nIntroduction to quantum mechanics\n[…]\nHistory of quantum mechanics\n[…]\nQuantum geometry\n[…]\nMehra, Jagdish; Rechenberg, Helmut; Mehra, Jagdish; Rechenberg, Helmut (2001). The historical development of quantum theory. 4: Pt.1, the fundamental equations of quantum mechanics, 1925-1926 (1. softcover print ed.). New York Heidelberg: Springer. ISBN 978-0-387-95178-2."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quantum",
        "situacao": "ok",
        "texto": "Na física um quantum (plural: quanta) é a menor quantidade de qualquer grandeza física envolvida numa interação. A noção de que uma grandeza pode ser “quantizada” vem da “hipótese da quantização”. Isso implica que a magnitude dessas grandezas podem apenas assumir valores discretos, que são múltiplos inteiros da unidade de um quantum.\n[…]\nA palavra quantum, advinda do adjetivo interrogativo \"quantus\" do latim (em português, \"quanto\") foi empregada como \"quanta\" referente à eletricidade por Philipp Lenard em um artigo sobre o efeito fotoelétrico, entretanto o físico alemão deu os créditos da palavra a Hermann von Helmholtz  por este ser um dos primeiros assim como Julius von Mayer em seus trabalhos sobre a formulação da primeira lei da termodinâmica, a utilizá-la na física como referência a calor.\n[…]\nEm 14 de dezembro de 1900, Planck relata suas descobertas a Sociedade Alemã de Física, introduzindo a ideia de que quantização pela primeira vez associada aos seus estudos sobre a radiação de corpo negro. Quanto aos resultados de seus experimentos, Planck deduziu valores numéricos de h, conhecido como constante de Planck, valores mais precisos para a unidade de carga elétrica e para a constante de Avogadro-Locschmidt.\n[…]\nAs teorias de Planck, após terem sido validadas, suas descobertas renderam a ele o Prêmio Nobel de Física de 1918.\n[…]\nA quantização das grandezas e a definição do quantum são bases da mecânica quântica. A ideia de quantização de energia e suas consequências na interação de energia e matéria (eletrodinâmica quântica) é parte da estruturação fundamental para entender e descrever a natureza na física quântica. (Átomos e matéria geralmente são estáveis porque elétrons só existem em níveis de energia discretos num átomo).[carece de fontes]?\n[…]\nMecânica quântica\n[…]\nQuantização (física)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Aage Bohr",
      "descricao": "Físico dinamarquês (1922–2009), filho de Niels Bohr, que dividiu o Nobel de Física de 1975 por estudos sobre a estrutura do núcleo atômico."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O dinamarquês Aage Bohr dividiu o Nobel de Física de 1975. Que outro ganhador do Nobel de Física era o pai dele?",
    "resposta": "Niels Bohr",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aage_Bohr"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aage_Bohr",
        "situacao": "ok",
        "texto": "Aage Niels Bohr (Danish: [ˈɔːwə ˈne̝ls ˈpoɐ̯ˀ] ; 19 June 1922 – 8 September 2009) was a Danish nuclear physicist who shared the Nobel Prize in Physics in 1975 with Ben Roy Mottelson and James Rainwater \"for the discovery of the connection between collective motion and particle motion in atomic nuclei and the development of the theory of the structure of the atomic nucleus based on this connection\"\n[…]\nSince his father, Niels Bohr, had won the prize in 1922, he and his father are one of the several pairs of fathers and sons who have both won the Nobel Prize.\n[…]\nOnly after doing his Nobel Prize-winning research did Bohr receive his doctorate from the University of Copenhagen, in 1954, writing his thesis on \"Rotational States of Atomic Nuclei\". Bohr became a professor at the University of Copenhagen in 1956, and, following his father's death in 1962, succeeded him as director of the Niels Bohr Institute, a position he held until 1970. He remained active there until he retired in 1992.\n[…]\nBohr's Nobel Prize medal was sold at auction in November 2011. It was subsequently sold at auction in April 2019 for $90,000.\n[…]\nJones, R. V. (1985). \"Meetings in Wartime and After\". In French, A. P.; Kennedy, P. J. (eds.). Niels Bohr: A Centenary Volume. Cambridge, Mass.: Harvard University Press. pp. 278–287. ISBN 978-0-674-62415-3.\n[…]\nPais, Abraham (1991). Niels Bohr's Times, In Physics, Philosophy and Polity. Oxford: Clarendon Press. ISBN 978-0-19-852049-8.\n[…]\nStuewer, Roger H. (1985). \"Niels Bohr and Nuclear Physics\". In French, A. P.; Kennedy, P. J. (eds.). Niels Bohr: A Centenary Volume. Cambridge, Mass.: Harvard University Press. pp. 197–220. ISBN 978-0-674-62415-3.\n[…]\nAage Bohr on Nobelprize.org  including the Nobel Lecture, 11 December 1975: \"Rotational Motion in Nuclei\"\n[…]\nOral History interview transcript with Aage Bohr 23 & 30 January 1963, American Institute of Physics, Niels Bohr Library and Archives"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aage_Niels_Bohr",
        "situacao": "ok",
        "texto": "Aage Niels Bohr (Copenhaga, 19 de junho de 1922 — Copenhaga, 8 de setembro de 2009) foi um físico dinamarquês, quarto filho de Margrethe Bohr e Niels Bohr.\n[…]\nFoi Nobel de Física em 1975 pela descoberta da conexão do movimento coletivo e movimento individual de partículas no núcleo atômico e pelo desenvolvimento da teoria da estrutura do núcleo atômico. Foi professor da Universidade de Copenhague e ingressou na Pontifícia Academia das Ciências em 17 de abril de 1978.\n[…]\nMorou com seus pais no Instituto de Física Teórica (hoje Instituto Niels Bohr) e, depois, se mudou para Carlsberg em 1932. Quando completou doze anos entrou para o Sortedam Gymnasium e estudou ciências humanas e biologia. Entrou para a Universidade de Copenhague em 1940, antes da ocupação alemã, com o intuito estudar física e acabou tornando-se uma espécie de assistente por correspondência do pai Niels Bohr, em trabalhos sobre física.\n[…]\nRetornou para a Dinamarca em 1945, mas continuou integrando grupos de pesquisa em física atômica de Londres, Washington e Los Alamos. Na Dinamarca voltou para a Universidade e alcançou o mestrado em 1946. Em 1948 foi nomeado para integrar a equipe do Instituto de Estudos Avançados de Princeton.\n[…]\nEscreveu dois importantes livros sobre a estrutura nuclear em cooperação com o físico norte americano Ben Mottelson: Single-Particle Motion (1969) e Nuclear Deformations (1975).\n[…]\nAage Niels Bohr em Nobelprize.org\n[…]\n«Perfil no sítio oficial do Nobel de Física 1975» (em inglês)\n[…]\n«Aage Niels Bohr»\n[…]\n«Aage Niels Bohr - Autobiografia»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Pascal (unidade)",
      "descricao": "Unidade de pressão do Sistema Internacional, igual a um newton por metro quadrado, nomeada em honra a Blaise Pascal."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Uma linguagem de programação de 1970 e a unidade de pressão do Sistema Internacional homenageiam o mesmo pensador francês. Quem é ele?",
    "resposta": "Blaise Pascal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pascal_(unit)",
      "https://en.wikipedia.org/wiki/Pascal_(programming_language)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pascal_(unit)",
        "situacao": "ok",
        "texto": "The pascal (symbol: Pa) is the unit of pressure in the International System of Units (SI). It is also used to quantify internal pressure, stress, Young's modulus, and ultimate tensile strength. The unit, named after Blaise Pascal, is an SI coherent derived unit defined as one newton per square metre (N/m2). It is also equivalent to 10 barye (10 Ba) in the CGS system.\n[…]\nThe unit is named after Blaise Pascal, noted for his contributions to hydrodynamics and hydrostatics, and experiments with a barometer. The name pascal was adopted for the SI unit newton per square metre (N/m2) by the 14th General Conference on Weights and Measures in 1971.\n[…]\nThe pascal is defined as the pressure exerted by a force of one newton perpendicularly upon an area of one square metre. It can be expressed in SI units as:\n[…]\nThe pascal is also equivalent to the SI unit of energy density, the joule per cubic metre. This applies not only to the thermodynamics of pressurised gases, but also to the energy density of electric, magnetic, and gravitational fields.\n[…]\nThe pascal is used to measure sound pressure. Loudness is the subjective experience of sound pressure and is measured as a sound pressure level (SPL) on a logarithmic scale of the sound pressure relative to some reference pressure. For sound in air, a pressure of 20 μPa is considered to be at the threshold of hearing for humans and is a common reference pressure, so that its SPL is zero.\n[…]\nThe units of atmospheric pressure commonly used in meteorology were formerly the bar (100000 Pa), which is close to the average air pressure on Earth, and the millibar. Since the introduction of SI units, meteorologists generally measure atmospheric pressure in hectopascals (hPa), equal to 100 pascals or 1 millibar. Exceptions include Canada, which uses kilopascals (kPa).\n[…]\nPascal's law"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pascal_(programming_language)",
        "situacao": "ok",
        "texto": "Pascal is an imperative and procedural programming language, designed by Niklaus Wirth as a small, efficient language intended to encourage good programming practices using structured programming and data structuring. It is named after French mathematician, philosopher and physicist Blaise Pascal.\n[…]\nPascal-S\n[…]\nDelphi – Object Pascal is essentially its underlying language.\n[…]\nWirth's initial definition of the language was widely criticized. In particular, Nico Habermann commented in his \"Critical Comments on the Programming Language Pascal\" (1973) that many of its constructs were poorly defined, in particular for data types, ranges, structures, and goto. Later, Brian Kernighan, who popularized the C language, outlined his criticisms of Pascal in 1981 in his article \"Why Pascal is Not My Favorite Programming Language\".\n[…]\nIn the two decades after 1975, Pascal gained increasing attention and became a major programming language for important platforms (including Apple II, Apple III, Apple Lisa, Commodore systems, Z-80-based machines and IBM PC) due to the availability of UCSD Pascal and Turbo Pascal.\n[…]\nConcurrent Pascal – Programming language\n[…]\nComparison of Pascal and C – Comparison of two programming languages\n[…]\nComparison of Pascal and Delphi – Programming language\n[…]\nWirth, Niklaus (1971). \"The Programming Language Pascal\". Acta Informatica. 1: 35–63. doi:10.1007/BF00264291.\n[…]\nHoare, C. A. R.; Wirth, Niklaus (1973). \"An Axiomatic Definition of the Programming Language Pascal\". Acta Informatica. 2: 335–355. doi:10.1007/BF00289504. hdl:20.500.11850/68663.\n[…]\nWirth, Niklaus (June 1975). \"An assessment of the programming language Pascal\". ACM SIGPLAN Notices. 10 (6): 23–30. doi:10.1145/390016.808421.\n[…]\nGrogono, Peter (1980). Programming in Pascal (Revised ed.). Addison-Wesley. ISBN 0-201-02775-5."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pascal_%28unidade%29",
        "situacao": "ok",
        "texto": "O pascal (símbolo: Pa) é a unidade de pressão no Sistema Internacional de Unidades (SI). Também é usado para quantificar a pressão interna, a tensão, o módulo de Young e a resistência à tração final. A unidade, nomeada em homenagem a Blaise Pascal, é uma unidade derivada coerente do SI definida como um newton por metro quadrado (N/m²). Também é equivalente a 10 bárias (10 Ba) no sistema CGS.\n[…]\nAs unidades múltiplas comuns do pascal são o hectopascal (1 hPa = 100 Pa), que é igual a um milibar, e o quilopascal (1 kPa = 1.000 Pa), que é igual a um centibar.\n[…]\nA unidade de medida denominada atmosfera padrão (atm) é definida como 101,325 Pa. As observações meteorológicas normalmente relatam a pressão atmosférica em hectopascais, conforme a recomendação da Organização Meteorológica Mundial, portanto, uma atmosfera padrão (atm) ou pressão atmosférica típica ao nível do mar é de cerca de 1.013 hPa. Os relatórios nos Estados Unidos normalmente usam polegadas de mercúrio ou milibares (hectopascais). No Canadá, esses relatórios são fornecidos em quilopascais.\n[…]\nA unidade de medida chamada atmosfera ou atmosfera padrão (atm) é 101325 Pa (101,325 kPa). Este valor é frequentemente usado como pressão de referência e especificado como tal em algumas normas nacionais e internacionais, como a ISO 2787 (ferramentas e compressores pneumáticos) da Organização Internacional de Normalização, a ISO 2533 (aeroespacial) e a ISO 5024 (petróleo).\n[…]\nEm contraste, a União Internacional de Química Pura e Aplicada (IUPAC) recomenda o uso de 100 kPa como pressão padrão ao relatar as propriedades das substâncias.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Sonar",
      "descricao": "Técnica que usa a propagação e o eco do som na água para navegar e detectar objetos, usada por navios e submarinos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o sonar dos submarinos e o jeito como os morcegos caçam no escuro têm em comum?",
    "resposta": "Localizam objetos pelo eco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sonar",
      "https://en.wikipedia.org/wiki/Animal_echolocation"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sonar",
        "situacao": "ok",
        "texto": "Sonar (sound navigation and ranging or sonic navigation and ranging) is a technique that uses sound propagation (usually underwater, as in submarine navigation) to navigate, measure distances (ranging), communicate with or detect objects on or under the surface of the water, such as other vessels.\n[…]\nFurther processes may be carried out to classify the target and localise it, as well as measuring its velocity.\n[…]\nThe detection, classification and localisation performance of a sonar depends on the environment and the receiving equipment, as well as the transmitting equipment in an active sonar or the target radiated noise in a passive sonar.\n[…]\nMines may be fitted with a sonar to detect, localize and recognize the required target. An example is the CAPTOR mine.\n[…]\nHelicopters can be used for anti-submarine warfare by deploying fields of active-passive sonobuoys or can operate dipping sonar, such as the AQS-13. Fixed-wing aircraft can also deploy sonobuoys and have greater endurance and capacity to deploy them. Processing from the sonobuoys or dipping sonar can be on the aircraft or on a ship. Dipping sonar has the advantage of being deployable to depths appropriate to daily conditions.\n[…]\nThis is a sonar designed to detect and locate transmissions from hostile active sonars. An example of this is the Type 2082 fitted on the British Vanguard-class submarines.\n[…]\nCreating two and three-dimensional images using sonar data.\n[…]\nBaffles (submarine) – Areas behind a submarine or ship where sonar cannot hear\n[…]\nHackmann, Willem. Seek & Strike: Sonar, Anti-submarine Warfare and the Royal Navy 1914–54. London: Her Majesty's Stationery Office, 1984. ISBN 0-11-290423-8.\n[…]\nSonar Propagation, in-depth explanation on the propagation of sound underwater, Military Analysis Network, Federation of American Scientists"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Animal_echolocation",
        "situacao": "ok",
        "texto": "Echolocation, also called bio sonar, is a biological active sonar used by several animal groups, both in the air and underwater. Echolocating animals emit calls and listen to the echoes of those calls that return from various objects near them. They use these echoes to locate and identify the objects. Echolocation is used for navigation, foraging, and hunting prey.\n[…]\nUnlike some human-made sonars that rely on many extremely narrow beams and many receivers to localize a target (multibeam sonar), animal echolocation has only one transmitter and two receivers (the ears) positioned slightly apart. The echoes returning to the ears arrive at different times and at different intensities, depending on the position of the object generating the echoes. The time and loudness differences are used by the animals to perceive distance and direction.\n[…]\nAn FM component is excellent for hunting prey while flying in close, cluttered environments. Two aspects of the FM signal account for this fact: the precise target localization conferred by the broadband signal, and the short duration of the call. The first of these is essential because in a cluttered environment, the bats must be able to resolve their prey from large amounts of background noise.\n[…]\nThe 3D localization abilities of the broadband signal enable the bat to do exactly that, providing it with what Simmons and Stein (1980) call a \"clutter rejection strategy\". This strategy is further improved by the use of harmonics, which, as previously stated, enhance the localization properties of the call. The short duration of the FM call is also best in close, cluttered environments because it enables the bat to emit many calls extremely rapidly without overlap.\n[…]\nMorcegoteca Program for Biodiversity Research (PPBio)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sonar",
        "situacao": "ok",
        "texto": "Sonar (do inglês sound navigation and ranging ou “navegação e distanciometria pelo som”) é um instrumento inicialmente usado em época de guerra para a localização de submarinos, mas que hoje em dia passou a ter muita utilização na navegação, na pesca, no estudo e pesquisa dos oceanos, estudos atmosféricos.\n[…]\nO uso de sonar para localizar objetos sob a água foi motivado pelo desastre do navio RMS Titanic, em 1912. A primeira patente mundial de um dispositivo desse tipo foi protocolada pelo meteorologista inglês Lewis Fry Richardson, um mês depois do naufrágio; o físico alemão Alexander Behm obteve uma patente para uma ecossonda em 1913.\n[…]\nQuando o sonar ativo é utilizado, a dispersão ocorre a partir de pequenos objetos no mar, bem como a partir do fundo e da superfície, podendo ser fontes de interferência. A dispersão acústica do sonar ativo é minimizada transmitindo em um feixe estreito, princípio semelhante do espalhamento de luz dos faróis de um carro, que quanto mais amplo o feixe, mais luz será emitida em direções indesejadas.\n[…]\nO pulso do sonar é emitido ao encontrar um obstáculo, e retorna ao emissor. Medindo-se o tempo em que o “ping” levou para ir e voltar, tem-se como calcular a distância do objeto ecoado com relativa precisão. Muitas vezes vários hidrofones são utilizados, e o conjunto mede o tempo de chegada em relação a cada um, através da medição da amplitudes dos feixes formados.\n[…]\nOs códigos de ultrassom empregados pelos golfinhos são muito complexos. Uma equipe da Marinha Americana vem trabalhando a alguns anos com esses animais. Os cientistas descobriram que os golfinhos costumam emitir um “click” explorador e depois vão ajustando a sintonia e modulação dos pulsos seguintes, até conseguir um eco-resposta que forneça informações para identificação do objeto em questão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Forno de micro-ondas",
      "descricao": "Eletrodoméstico que aquece alimentos com radiação de micro-ondas gerada por um magnétron."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Ligar o forno de micro-ondas pode atrapalhar o sinal do wi-fi. O que os dois aparelhos têm em comum?",
    "resposta": "Usam a mesma faixa de frequência",
    "fonte": [
      "https://en.wikipedia.org/wiki/Microwave_oven",
      "https://en.wikipedia.org/wiki/ISM_radio_band"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Microwave_oven",
        "situacao": "ok",
        "texto": "A microwave oven, or simply microwave, is an electric oven that heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range. This induces polar molecules in the food to rotate and produce thermal energy (heat) in a process known as dielectric heating. Microwave ovens heat food quickly and efficiently; the heating effect is fairly uniform in the outer 25–38 mm \n[…]\nA microwave oven heats food by passing microwave radiation through it, a process known as dielectric heating. Microwaves are a form of non-ionizing electromagnetic radiation with a frequency between 300 MHz and 300 GHz. Microwave ovens use frequencies in one of the ISM (industrial, scientific, medical) bands, so they do not interfere with other vital radio services.\n[…]\nA microwave oven generally consists of:\n[…]\nThe cooking chamber is similar to a Faraday cage to prevent the waves from coming out of the oven. Even though there is no continuous metal-to-metal contact around the rim of the door, choke connections on the door edges act like metal-to-metal contact, at the frequency of the microwaves, to prevent leakage. The oven door usually has a window for easy viewing, with a layer of conductive mesh some distance from the outer panel to maintain the shielding.\n[…]\nMicrowave control panels are often considered awkward to use and are frequently employed as examples for user interface design.\n[…]\nMicrowave ovens are frequently used for reheating leftover food, and bacterial contamination may not be repressed if the microwave oven is used improperly. If safe temperature is not reached, this can result in foodborne illness, as with other reheating methods. While microwave ovens can destroy bacteria as well as conventional ovens can, they cook rapidly and may not cook as evenly, similar to frying or grilling, leading to a risk of some food regions failing to reach recommended temperatures.\n[…]\nWall oven"
      },
      {
        "url": "https://en.wikipedia.org/wiki/ISM_radio_band",
        "situacao": "ok",
        "texto": "The ISM radio bands are portions of the radio spectrum reserved internationally for industrial, scientific and medical (ISM) purposes, excluding applications in telecommunications.\n[…]\nExamples of applications for the use of radio frequency (RF) energy in these bands include RF heating, microwave ovens, and medical diathermy machines. The powerful emissions of these devices can create electromagnetic interference and disrupt radio communication using the same frequency, so these devices are limited to certain bands of frequencies.\n[…]\nNear-field communication (NFC) devices such as proximity cards and contactless smart cards use the lower-frequency 13 and 27 MHz ISM bands.\n[…]\nThe ISM bands are also widely used for radio-frequency identification (RFID) applications with the most commonly used band being the 13.56 MHz band used by systems compliant with ISO/IEC 14443 including those used by biometric passports and contactless smart cards.\n[…]\nANT / ANT+ (originates from Adaptive Network Topology) is a proprietary (but open access) multicast wireless sensor network technology designed and marketed by ANT Wireless. ANT devices may use any RF frequency from 2400 MHz to 2524 MHz, with the exception of 2457 MHz, which is reserved for ANT+ devices.\n[…]\nIEEE 802.15.4 – Zigbee and other personal area networks may use the 915 MHz and 2450 MHz ISM bands because of frequency sharing between different allocations.\n[…]\nFrequency allocation\n[…]\nCordless phone frequencies Archived 2006-07-01 at the Wayback Machine\n[…]\nEuropean Radiocommunications Office frequency information system Archived 2009-04-08 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Forno_de_micro-ondas",
        "situacao": "ok",
        "texto": "O forno de micro-ondas (também conhecido como forno micro-ondas ou simplesmente micro-ondas) é um eletrodoméstico utilizado principalmente na cozinha e que permite a preparação ou aquecimento rápido de alimentos.\n[…]\nFrequentemente, isso resulta no superaquecimento dos frutos em relação ao resto da comida. As configurações de “descongelamento” do forno usam níveis baixos de potência ou desligam e ligam repetidamente - projetadas para permitir que o calor seja conduzido dentro dos alimentos congelados, de áreas que absorvem o calor mais facilmente para aquelas que aquecem mais lentamente.\n[…]\nA radiação eletromagnética do micro-ondas, que tem frequência na faixa de 103 a 104 MHz só produz risco se o forno for mal-usado. Essa radiação é não ionizante, o que significa que não possui energia suficiente para danificar diretamente o DNA das células. Ainda assim, os fornos micro-ondas possuem sistemas de segurança para você não ter contato direto. Por exemplo, eles não ligam com a porta aberta.\n[…]\nOs fornos micro-ondas são frequentemente usados ​​para reaquecer restos de alimentos e a contaminação bacteriana pode não ser reprimida se o forno micro-ondas for usado incorretamente. Se a temperatura segura não for atingida, isso pode resultar em doenças de origem alimentar, como acontece com outros métodos de reaquecimento.\n[…]\nO forno micro-ondas pode causar câncer?\n[…]\nOs fornos micro-ondas são frequentemente usados ​​para reaquecer restos de alimentos e a contaminação bacteriana pode não ser reprimida se o forno micro-ondas for usado incorretamente. Se a temperatura segura não for atingida, isso pode resultar em doenças de origem alimentar, como acontece com outros métodos de reaquecimento.\n[…]\nForno cadinho\n[…]\nForno solar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Brisa marítima",
      "descricao": "Vento que sopra do mar para a terra durante o dia, causado pelo aquecimento mais rápido do continente."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Num dia de sol na praia, por que o vento costuma soprar do mar para a terra?",
    "resposta": "A terra esquenta mais rápido que o mar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sea_breeze"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sea_breeze",
        "situacao": "ok",
        "texto": "A sea breeze or onshore breeze is a wind that blows in the afternoon from a large body of water toward or onto a landmass. By contrast, a land breeze or offshore breeze is a wind that blows in the night from a landmass toward or onto a large body of water. Sea breezes and land breezes are both important factors in coastal regions' prevailing winds.\n[…]\nAt night, the sea breeze usually changes to a land breeze, due to a reversal of the same mechanisms.\n[…]\nDue to its large size, Lake Okeechobee may also contribute to this activity by creating its own lake breeze which collides with the east and west coast sea breezes.\n[…]\nIn Cuba, similar sea breeze collisions with the northern and southern coasts sometimes lead to storms.\n[…]\nThis is mainly because the strength of the land breeze is weaker than the sea breeze. The land breeze will die once the land warms up again the next morning.\n[…]\nWind farms can be situated near a coast to take advantage of the normal daily fluctuations of wind speed resulting from sea or land breezes. While many onshore and offshore wind farms do not rely on these winds, a nearshore wind farm is a type of offshore wind farm located on shallow coastal waters to take advantage of both sea and land breezes. For practical reasons, other offshore wind farms are situated further out to sea and rely on prevailing winds rather than sea breezes.\n[…]\nFremantle Doctor, the local name for the sea breeze in and around Perth, Western Australia\n[…]\nSoutherly buster, a sea breeze, though usually a storm, which is experienced in the southeast coast of New South Wales, southern coast of Victoria and New Zealand\n[…]\nMountain breeze and valley breeze – Localized winds which occur in a daily cycle\n[…]\nWeather Elements: Sea and Land Breezes at the Wayback Machine (archived January 2, 2018)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brisa",
        "situacao": "ok",
        "texto": "Chama-se brisa uma circulação de ar (vento) de fraca a moderada intensidade próxima à superfície. Tal circulação afeta uma camada rasa da atmosfera (até por volta de 200 metros de altitude) e os ventos locais associados são extremamente influenciados (na direção) por obstáculos naturais e (na intensidade) pela rugosidade da superfície.\n[…]\nComo as massas de terra são aquecidas pelo sol mais rapidamente do que o oceano, o ar em cima delas ascende e cria uma baixa de pressão no solo que atrai o ar mais fresco do mar: o que se chama uma brisa marítima. Ao cair da noite, há muitas vezes um período de calma durante o qual a temperatura em terra e no mar são iguais. De noite, como o oceano arrefece mais lentamente, a brisa sopra de terra, na direção oposta, mas é geralmente mais fraca porque a diferença de temperaturas é menor.\n[…]\nAs monções no sudeste asiático são brisas marítimas de grande escala. Variam a sua direção entre as estações porque as massas de terra são aquecidas ou arrefecidas mais rapidamente que o mar. Monções de Verão - do mar para a terra (aquecida). Monções de Inverno - da terra (mais fria) para o mar.\n[…]\nBrisa Marítima: É o deslocamento do ar frio que vem dos oceanos em direção ao ambiente terrestre.\n[…]\nBrisa Terrestre: É o deslocamento do ar frio que vem da terra em direção ao mar.\n[…]\nExistem também as circulações de brisa de vale/montanha. No começo do dia, o aquecimento do ar do fundo do vale - que estava mais denso e pesado - faz com que ele comece a fluir ao longo das encostas sob a forma de ventos de vales. À noite, o processo inverte-se e o ar frio e denso começa a se acumular no fundo dos vales - é a brisa da montanha.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Ponto de ebulição",
      "descricao": "Temperatura em que um líquido ferve, que depende da pressão exercida sobre ele."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em La Paz, a mais de três mil e quinhentos metros de altitude, a água ferve bem abaixo de cem graus. Por quê?",
    "resposta": "A pressão do ar é menor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Boiling_point",
      "https://en.wikipedia.org/wiki/High-altitude_cooking"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Boiling_point",
        "situacao": "ok",
        "texto": "The boiling point of a substance is the temperature at which the vapor pressure of a liquid equals the pressure surrounding the liquid and the liquid changes into a vapor.\n[…]\nThe higher the vapor pressure of a liquid at a given temperature, the lower the normal boiling point (i.e., the boiling point at atmospheric pressure) of the liquid.\n[…]\nThe presence of non-volatile impurities such as salts or compounds of a volatility far lower than the main component compound decreases its mole fraction and the solution's volatility, and thus raises the normal boiling point in proportion to the concentration of the solutes. This effect is called boiling point elevation. As a common example, salt water boils at a higher temperature than pure water.\n[…]\nIn other mixtures of miscible compounds (components), there may be two or more components of varying volatility, each having its own pure component boiling point at any given pressure. The presence of other volatile components in a mixture affects the vapor pressures and thus boiling points and dew points of all the components in the mixture. The dew point is a temperature at which a vapor condenses into a liquid.\n[…]\nFurthermore, at any given temperature, the composition of the vapor is different from the composition of the liquid in most such cases. In order to illustrate these effects between the volatile components in a mixture, a boiling point diagram is commonly used. Distillation is a process of boiling and [usually] condensation which takes advantage of these differences in composition between liquid and vapor phases.\n[…]\nBoiling-point elevation\n[…]\nTriple point\n[…]\n\"Boiling-Point\" . The New Student's Reference Work . 1914."
      },
      {
        "url": "https://en.wikipedia.org/wiki/High-altitude_cooking",
        "situacao": "ok",
        "texto": "High-altitude cooking is cooking done at altitudes that are considerably higher than sea level. At elevated altitudes, any cooking that involves boiling or steaming generally requires compensation for lower temperatures because the boiling point of water is lower at higher altitudes due to the decreased atmospheric pressure. The effect starts to become relevant at altitudes above approximately 2,0\n[…]\nAt sea level, water boils at 100 °C (212 °F). For every 152.4-metre (500 ft) increase in elevation, water's boiling point is lowered by approximately 1°F. At 2,438.4 metres (8,000 ft) in elevation, water boils at just 92 °C (198 °F). Boiling as a cooking method must be adjusted or alternatives applied. Food will take longer to cook, or cannot be prepared at all depending on temperatures required.\n[…]\nA pressure cooker is often used to compensate for the low atmospheric pressure at very high elevations. Under these circumstances, water boils at temperatures significantly below 100 °C and, without the use of a pressure cooker, may leave boiled foods undercooked. Charles Darwin commented on this phenomenon in The Voyage of the Beagle:\n[…]\n\"Having crossed the Peuquenes (Piuquenes), we descended into a mountainous country, intermediate between the two main ranges, and then took up our quarters for the night. We were now in the republic of Mendoza. The elevation was probably not under 11,000 feet [...]. At the place where we slept water necessarily boiled, from the diminished pressure of the atmosphere, at a lower temperature than it does in a less lofty country; the case being the converse of that of a Papin's digester.\n[…]\nHence the potatoes, after remaining for some hours in the boiling water, were nearly as hard as ever. The pot was left on the fire all night, and next morning it was boiled again, but yet the potatoes were not cooked.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ponto_de_ebuli%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "Para conceitos relacionados: o ponto de ebulição é a temperatura na qual um líquido entra em ebulição a uma determinada pressão; o ponto de fusão é a temperatura na qual as fases sólida e líquida coexistem em equilíbrio; e o ponto de sublimação é a temperatura na qual as fases sólida e de vapor coexistem em equilíbrio, a uma determinada pressão.\n[…]\nO ponto de ebulição de um líquido varia com a pressão do meio. Um líquido em vácuo parcial, sob pressão menor, tem um ponto de ebulição mais baixo do que teria à pressão atmosférica. Por esse motivo, a água entra em ebulição a aproximadamente 100 °C sob uma pressão de uma atmosfera, mas a cerca de 93 °C a uma altitude de 2.000 m. A temperatura exata depende da pressão atmosférica local, que também varia com as condições meteorológicas.\n[…]\nPontos de ebulição podem ser tabelados a 101,325 kPa, ou 1 atm, e à pressão padrão da IUPAC de 100 kPa, ou 1 bar. A pressão de referência deve acompanhar o valor informado. Em altitudes maiores, onde a pressão atmosférica é menor, o ponto de ebulição também é menor. Com o aumento da pressão, a curva líquido-vapor prossegue até o ponto crítico, onde desaparece a distinção entre as fases líquida e gasosa. Acima da temperatura crítica não existe uma transição de ebulição entre essas duas fases.\n[…]\nA relação entre temperatura e pressão de vapor da água determina seus pontos de ebulição nas diferentes pressões.\n[…]\nEsse efeito recebe o nome de elevação do ponto de ebulição. Em soluções diluídas, a elevação é aproximadamente proporcional à concentração de partículas dissolvidas expressa em molalidade. A dissolução de sais na água fornece um exemplo. A água salina entra em ebulição a uma temperatura mais alta que a água pura à mesma pressão.\n[…]\nPonto triplo, condição de pressão e temperatura na qual três fases coexistem em equilíbrio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Inércia",
      "descricao": "Tendência de um corpo de manter seu estado de repouso ou de movimento, descrita pela primeira lei de Newton."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Quando um ônibus freia de repente, os passageiros em pé são jogados para a frente. Que propriedade dos corpos explica isso?",
    "resposta": "Inércia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Inertia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inertia",
        "situacao": "ok",
        "texto": "Inertia is the natural tendency of objects in motion to stay in motion and objects at rest to stay at rest, unless a force causes its velocity to change. It is one of the fundamental principles in classical physics, and is described by Isaac Newton in his first law of motion (also known as The Principle of Inertia). It is one of the primary manifestations of mass, one of the core quantitative prop\n[…]\nIn his 1687 work Philosophiæ Naturalis Principia Mathematica, Newton defined inertia as a property:\n[…]\nIt was not until the later work of Galileo and Newton unified rest and motion in one principle that the term \"inertia\" could be applied to those concepts as it is today.\n[…]\nThe principle of inertia, as formulated by Aristotle for \"motions in a void\", includes that a mundane object tends to resist a change in motion. The Aristotelian division of motion into mundane and celestial became increasingly problematic in the face of the conclusions of Nicolaus Copernicus in the 16th century, who argued that the Earth is never at rest, but is actually in constant motion around the Sun.\n[…]\nConcepts of inertia in Galileo's writings would later come to be refined, modified, and codified by Isaac Newton as the first of his laws of motion (first published in Newton's work, Philosophiæ Naturalis Principia Mathematica, in 1687):\n[…]\nHowever, this resulted in a limitation inherent in special relativity: the principle of relativity could only apply to inertial reference frames. To address this limitation, Einstein developed his general theory of relativity (\"The Foundation of the General Theory of Relativity\", 1916), which provided a theory including noninertial (accelerated) reference frames.\n[…]\nThe term inertia comes from the Latin word iners, meaning idle or sluggish.\n[…]\nQuotations related to Inertia at Wikiquote"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/In%C3%A9rcia",
        "situacao": "ok",
        "texto": "Inércia é a tendência natural de objetos em movimento permanecerem em movimento e de objetos em repouso permanecerem em repouso, a menos que uma força provoque uma mudança em sua velocidade. É um dos princípios fundamentais da física clássica e é expressa por Isaac Newton em sua primeira lei do movimento, também chamada de princípio da inércia. É uma das principais manifestações da massa, uma das \n[…]\nEm sua obra de 1687, Philosophiæ Naturalis Principia Mathematica, Newton definiu a inércia como uma propriedade:\n[…]\nDentro de um veículo que acelera para a frente, um passageiro pode ter a sensação de ser empurrado para trás. Tomando o solo como um referencial aproximadamente inercial, não existe uma força física que o empurre para trás. O assento exerce uma força para a frente e acelera o passageiro junto com o veículo. A força para trás aparece quando o próprio veículo acelerado é usado como referencial.\n[…]\nA teoria da relatividade restrita de Albert Einstein, apresentada em seu artigo de 1905 \"Sobre a Eletrodinâmica dos Corpos em Movimento\", partiu da compreensão dos referenciais inerciais desenvolvida por Galileu, Huygens e Newton. A teoria alterou o significado de conceitos newtonianos como massa, energia e distância, mas a concepção de inércia de Einstein permaneceu, a princípio, próxima da formulação newtoniana.\n[…]\nUma grandeza relacionada à inércia é a inércia rotacional, ou momento de inércia, propriedade pela qual um corpo rígido em rotação resiste a mudanças de sua velocidade angular. Seu momento angular permanece inalterado enquanto nenhum torque externo resultante for aplicado, princípio chamado de conservação do momento angular. A inércia rotacional é geralmente tratada em relação a corpos rígidos. Um giroscópio, por exemplo, resiste a mudanças na orientação de seu eixo de rotação.\n[…]\nPrincípio da equivalência, relação entre massa inercial e massa gravitacional",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Som",
      "descricao": "Onda mecânica de vibração que se propaga por um meio material, como o ar ou a água."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos filmes, naves explodem com estrondo, mas no espaço de verdade a explosão seria silenciosa. Por quê?",
    "resposta": "O som não se propaga no vácuo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sound"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sound",
        "situacao": "ok",
        "texto": "Sound is a phenomenon in which pressure disturbances propagate through an elastic material medium. In the context of physics, it is characterised as a mechanical wave of pressure or related quantities (e.g. displacement), whereas in physiological-psychological contexts it implies a hearing process. Though sensitivity to sound varies among all organisms, the human ear is sensitive to audio frequenc\n[…]\nThe propagation of sound in a medium is influenced primarily by:\n[…]\nMotion of the medium itself. If the medium is moving, this movement may increase or decrease the absolute speed of the sound wave depending on the direction of the movement. For example, sound moving through wind will have its speed of propagation increased by the speed of the wind if the sound and wind are moving in the same direction. If the sound and wind are moving in opposite directions, the speed of the sound wave will be decreased by the speed of the wind.\n[…]\nSound is transmitted through fluids (e.g. gases, plasmas, and liquids) as longitudinal waves, also called compression waves. Through solids, however, sound can be transmitted as both longitudinal waves and transverse waves. Longitudinal sound waves are waves of alternating pressure deviations from the equilibrium pressure, causing local regions of compression and rarefaction, while transverse waves (in solids) are waves of alternating shear stress perpendicular to the direction of propagation.\n[…]\nThe speed of sound is also slightly sensitive, being subject to a second-order anharmonic effect, to the sound amplitude, which means there are non-linear propagation effects, such as the production of harmonics and mixed tones not present in the original sound (see parametric array). If relativistic effects are important, the speed of sound is calculated from the relativistic Euler equations.\n[…]\nMore Sounds Amazing; a sixth-form learning resource about sound waves"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Som",
        "situacao": "ok",
        "texto": "Som é a propagação de uma onda mecânica acústica (frente de compressão mecânica); é uma onda longitudinal que se propaga de forma circuncêntrica apenas em meios materiais (como sólidos, líquidos ou gasosos).\n[…]\nOnda sonora pode ser definida genericamente como qualquer onda longitudinal. A onda sonora se propaga em todas as direções.\n[…]\nA vibração de uma fonte sonora causa uma onda. Há um movimento ondulatório que se propaga no ar em todas as direções, partindo da fonte.\n[…]\nO som propaga-se por ondas invisíveis: as ondas sonoras ou acústicas. São também chamadas ondas de pressão, porque transferem energia por variações de pressão no meio de propagação. O som não se propaga no vazio, como por exemplo, no espaço.\n[…]\nLogo o som pode ser descrito através de uma sequência de ondas sonoras, que são ondas de deslocamento, densidade e pressão que se propagam pelos meios compressíveis. Quando uma onda sonora se propaga através de qualquer gás, ocorrem várias compressões e rarefações de pequenos volumes do gás.\n[…]\nseja um número positivo. Através da análise de quanto um elemento do gás modifica o seu volume e sua densidade, é possível determinar a velocidade da onda sonora naquele meio:\n[…]\nUma onda progressiva é um dos casos mais simples, visto que, se estuda a propagação somente ao longo de uma direção. Para este caso, há uma equação que descreve o formato seguido por essas ondas que se deslocam para a direita:\n[…]\nUma onda que se propaga para a esquerda pode ser descrita assim como a equação\n[…]\né o número de onda angular e\n[…]\né a frequência angular. Conforme a onda se propaga, a pressão do ar diminui em cada ponto com o tempo e essa variação é dada pela equação\n[…]\nHyperPhysics: Sound and Hearing\n[…]\nSimulação Ondas Sonoras",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Lei de Hooke",
      "descricao": "Lei física segundo a qual a deformação de uma mola é proporcional à força aplicada, formulada no século dezessete."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que cientista inglês do século dezessete, rival de Isaac Newton, formulou a lei que descreve quanto uma mola estica?",
    "resposta": "Robert Hooke",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hooke%27s_law",
      "https://en.wikipedia.org/wiki/Robert_Hooke"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hooke%27s_law",
        "situacao": "ok",
        "texto": "In physics, Hooke's law is an empirical law which states that the force (F) needed to extend or compress a spring by some distance (x) scales linearly with respect to that distance—that is, Fs = kx, where k is a constant factor characteristic of the spring (i.e., its stiffness), and x is small compared to the total possible deformation of the spring.\n[…]\nThe law is named after 17th-century British physicist Robert Hooke. He first stated the law in 1676 as a Latin anagram. He published the solution of his anagram in 1678 as: ut tensio, sic vis (\"as the extension, so the force\" or \"the extension is proportional to the force\"). Hooke states in the 1678 work that he was aware of the law since 1660. It is the fundamental principle behind the spring scale, the manometer, the galvanometer, and the balance wheel of the mechanical clock.\n[…]\nτ is the torque measured in Newton-meters or N·m.\n[…]\nSince Hooke's law is a simple proportionality between two quantities, its formulas and consequences are mathematically similar to those of many other physical laws, such as those describing the motion of fluids, or the polarization of a dielectric by an electric field.\n[…]\nUnder plane strain conditions, ε31 = ε13 = ε32 = ε23 = ε33 = 0. In this case Hooke's law takes the form\n[…]\nand Hooke's law is written as\n[…]\nUnder plane stress conditions, σzz = σzx = σyz = 0, Hooke's law for an orthotropic material takes the form\n[…]\nA transversely isotropic material is symmetric with respect to a rotation about an axis of symmetry. For such a material, if e3 is the axis of symmetry, Hooke's law can be expressed as\n[…]\nMore frequently, the x ≡ e1 axis is taken to be the axis of symmetry and the inverse Hooke's law is written as\n[…]\nHooke's law - The Feynman Lectures on Physics\n[…]\nHooke's Law - Classical Mechanics - Physics - MIT OpenCourseWare\n[…]\nJavaScript Applet demonstrating Springs and Hooke's law"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Robert_Hooke",
        "situacao": "ok",
        "texto": "Robert Hooke (; 18 July 1635 – 3 March 1703) was an English polymath who was active as a physicist ('natural philosopher'), astronomer, geologist, meteorologist, and architect. He is credited as one of the first scientists to investigate living things at microscopic scale in 1665, using a compound microscope that he designed. Hooke was an impoverished scientific inquirer in young adulthood who wen\n[…]\nNo authenticated portrait of Robert Hooke exists, a situation that has sometimes been attributed to the heated conflicts between Hooke and Isaac Newton, although Hooke's biographer Allan Chapman rejects as a myth claims Newton or his acolytes deliberately destroyed Hooke's portrait.\n[…]\nLost manuscript of Robert Hooke discovered – from The Guardian\n[…]\nHall, A R (October 1951). \"Two Unpublished Lectures of Robert Hooke\". Isis. 42 (3). The University of Chicago Press: 219–230. doi:10.1086/349309. JSTOR 226559. PMID 14880332. (A pair of letters exchanged between Hooke and Newton (9 December 1679 and 13 December 1679, omitted from Waller's The Posthumous Works of Robert Hooke, M.D. S.R.S.)\n[…]\nHenderson, Felicity (22 May 2007). \"Unpublished Material from the Memorandum Book of Robert Hooke, Guildhall Library MS 1758\". Notes and Records of the Royal Society of London. 61 (2): 129–175. doi:10.1098/rsnr.2006.0173. JSTOR 20462618. (Hooke's diary for March–July 1672 and January 1681 to May 1683, omitted by Robinson and Adams from The Diary of Robert Hooke, M.A., M.D., F.R.S., 1672–1680)\n[…]\nKoyré, Alexandre (December 1952). \"An Unpublished Letter of Robert Hooke to Isaac Newton\". Isis. 43 (4). The University of Chicago Press: 312–337. doi:10.1086/348155. JSTOR 227384. PMID 13010921. (A pair of letters exchanged between Hooke and Newton (9 December 1679 and 13 December 1679, omitted from Rowse's Essay on Newton's Principia.)\n[…]\nThe Robert Hooke Trail on the Isle of Wight. (Robert Hooke Society, Freshwater)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lei_de_Hooke",
        "situacao": "ok",
        "texto": "Em física, a lei de Hooke é uma lei empírica que afirma que a força (F) necessária para estender ou comprimir uma mola por alguma distância (x) escala linearmente com relação a essa distância — isto é,\n[…]\n, onde k é um fator constante característico da mola (ou seja, sua rigidez) e x é pequeno em comparação com a deformação total possível da mola. A lei recebeu o nome do físico britânico do século XVII Robert Hooke. Ele declarou a lei pela primeira vez em 1676 como um anagrama latino. Ele publicou a solução de seu anagrama em 1678 como: ut tensio, sic vis (\"como a extensão, assim a força\" ou \"a extensão é proporcional à força\"). Hooke afirma no trabalho de 1678 que estava ciente da lei desde 1660.\n[…]\nPor outro lado, a lei de Hooke é uma aproximação precisa para a maioria dos corpos sólidos, desde que as forças e deformações sejam suficientemente pequenas. Por esse motivo, a lei de Hooke é amplamente utilizada em todos os ramos da ciência e da engenharia, sendo a base de muitas disciplinas, como sismologia, mecânica molecular e acústica. É também o princípio fundamental por trás da balança de mola, do manômetro, do galvanômetro e do volante regulador do relógio mecânico.\n[…]\nEm sua forma geral, a lei de Hooke permite deduzir a relação entre deformação e tensão para objetos complexos em termos das propriedades intrínsecas dos materiais de que são feitos. Por exemplo, pode-se deduzir que uma barra homogênea com seção transversal uniforme se comportará como uma mola simples quando esticada, com uma rigidez k diretamente proporcional à sua área de seção transversal e inversamente proporcional ao seu comprimento.\n[…]\n«Experimentos - Calculo da constante de elasticidade segundo a lei de Hooke»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Radiação infravermelha",
      "descricao": "Radiação eletromagnética invisível, de comprimento de onda maior que o da luz vermelha, sentida como calor."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1800, medindo com termômetros as cores de um prisma, que astrônomo, descobridor de Urano, achou uma luz invisível além do vermelho?",
    "resposta": "William Herschel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Infrared",
      "https://en.wikipedia.org/wiki/William_Herschel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Infrared",
        "situacao": "ok",
        "texto": "Infrared radiation (IR; sometimes called infrared light) is electromagnetic radiation (EMR) with wavelengths longer than that of visible light but shorter than microwaves. The infrared spectral band begins with the waves that are just longer than those of red light (the longest waves in the visible spectrum), so IR is, per definition, invisible to the human eye. IR is generally (according to ISO, \n[…]\nIt was long known that fires emit invisible heat; in 1681 the pioneering experimenter Edme Mariotte showed that glass, though transparent to sunlight, obstructed radiant heat. In 1800 the astronomer Sir William Herschel discovered that infrared radiation is a type of invisible radiation in the spectrum lower in energy than red light, by means of its effect on a thermometer.\n[…]\nSlightly more than half of the energy from the Sun was eventually found, through Herschel's studies, to arrive on Earth in the form of infrared. The balance between absorbed and emitted infrared radiation has an important effect on Earth's climate.\n[…]\nAstronomers typically divide the infrared spectrum as follows:\n[…]\nThe discovery of infrared radiation is ascribed to William Herschel, the astronomer, in the early 19th century. Herschel published his results in 1800 before the Royal Society of London. Herschel used a prism to refract light from the sun and detected the infrared, beyond the red part of the spectrum, through an increase in the temperature recorded on a thermometer. He was surprised at the result and called them \"Calorific Rays\". The term \"infrared\" did not appear until late 19th century.\n[…]\n1840: John Herschel produces the first thermal image, called a thermogram.\n[…]\n1905–1908: William Coblentz published infrared spectra in units of wavelength (micrometers) for several chemical compounds in Investigations of Infra-Red Spectra.\n[…]\nHerschel's original paper from 1800 announcing the discovery of infrared light"
      },
      {
        "url": "https://en.wikipedia.org/wiki/William_Herschel",
        "situacao": "ok",
        "texto": "Frederick William Herschel ( HUR-shəl; German: Friedrich Wilhelm Herschel [ˈfʁiːdʁɪç ˈvɪlhɛlm ˈhɛʁʃl̩]; 15 November 1738 – 25 August 1822), generally known as William Herschel, was a German–British astronomer and composer. He frequently collaborated with his younger sister and fellow astronomer Caroline Herschel. Born in the Electorate of Hanover, he followed his father into the military band of H\n[…]\nHis sister Caroline arrived in England on 24 August 1772 to live with William in New King Street, Bath. The house they shared is now the location of the Herschel Museum of Astronomy. Herschel's brothers Dietrich, Alexander and Jakob also appeared as musicians of Bath. In 1780, Herschel was appointed director of the Bath orchestra, with his sister often appearing as soprano soloist.\n[…]\nHerschel is especially honoured in Slough and there are several memorials to him and his discoveries. In 2011 a new bus station, the design of which was inspired by the infrared experiment of William Herschel, was built in the centre of Slough.\n[…]\nHis house at 19 New King Street in Bath, Somerset, where he made many telescopes and first observed Uranus, is now home to the Herschel Museum of Astronomy. There is a commemorative plaque of Herschel installed by the Institute of Physics in London. There is a memorial plaque of William near the choir screen in Westminster Abbey.\n[…]\nThe Oboe Concertos of Sir William Herschel, Wilbert Davis Jerome ed. ISBN 0-87169-225-2\n[…]\nPortraits of William Herschel (and other members of the family) from the Lick Observatory Records Digital Archive, UC Santa Cruz Library's Digital Collections Archived 4 March 2016 at the Wayback Machine\n[…]\nMichael Lemonick: William Herschel, the First Observational Cosmologist, 12 November 2008, Fermilab Colloquium\n[…]\nFree scores by William Herschel at the International Music Score Library Project (IMSLP)\n[…]\nMusical pieces by William Herschel @YouTube:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Radia%C3%A7%C3%A3o_infravermelha",
        "situacao": "ok",
        "texto": "A radiação infravermelha (IV, também chamada de luz infravermelha) é uma forma não ionizante de radiação eletromagnética com comprimentos de onda maiores que os da luz visível e menores que os das micro-ondas. A faixa espectral do infravermelho começa logo além da luz vermelha, que tem os maiores comprimentos de onda do espectro visível, e por isso não pode ser vista pelo olho humano em condições \n[…]\nHá muito se sabia que o fogo emitia calor invisível. Em 1681, o experimentador Edme Mariotte mostrou que o vidro, embora transparente à luz solar, bloqueava o calor radiante. Em 1800, o astrônomo britânico William Herschel descobriu que a radiação infravermelha era uma forma de radiação invisível com energia por fóton menor que a luz vermelha, observando seu efeito sobre um termômetro. Cerca de metade da energia irradiada pelo Sol encontra-se no infravermelho.\n[…]\nA descoberta experimental da radiação infravermelha é atribuída ao astrônomo William Herschel, que publicou seus resultados em 1800 perante a Royal Society. Herschel usou um prisma para refratar a luz do Sol e detectou a região além da parte vermelha do espectro por meio do aumento da temperatura indicada por um termômetro. Chamou a radiação de \"raios caloríficos\".\n[…]\nO termo \"infravermelho\" surgiu mais tarde no século XIX. O prefixo latino infra- significa \"abaixo\", pois o infravermelho tem frequência abaixo da luz vermelha. Antes de Herschel, em 1790, Marc-Auguste Pictet mostrou que o calor radiante podia ser refletido e focalizado por espelhos sem luz visível.\n[…]\n1876: William de Wiveleslie Abney publicou na revista Nature experimentos com materiais fotográficos sensíveis à região vermelha e \"ultravermelha\" do espectro, ampliando o registro fotográfico para comprimentos de onda além do visível.\n[…]\nArtigo original de Herschel de 1800 sobre a descoberta da radiação infravermelha",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Pêndulo",
      "descricao": "Corpo suspenso por um fio ou haste que oscila sob a ação da gravidade, base dos relógios de pêndulo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Diz a tradição que, vendo um lustre balançar na catedral de Pisa, que cientista percebeu que cada oscilação de um pêndulo dura o mesmo tempo?",
    "resposta": "Galileu Galilei",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pendulum",
      "https://en.wikipedia.org/wiki/Galileo_Galilei"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pendulum",
        "situacao": "ok",
        "texto": "A pendulum is a mechanical device consisting of a weight suspended from a pivot so that it can swing freely. When a pendulum is displaced sideways from its resting mechanical equilibrium position, it is subject to a restoring force due to gravity, which will accelerate it back toward the equilibrium position. When released, the restoring force acting on the pendulum's mass causes it to oscillate a\n[…]\n. This shows that a rigid rod pendulum has the same period as a simple pendulum of two-thirds its length.\n[…]\nHis biographer and student, Vincenzo Viviani, claimed his interest had been sparked around 1582 by the swinging motion of a chandelier in Pisa Cathedral. Galileo discovered the crucial property that makes pendulums useful as timekeepers, called isochronism; the period of the pendulum is approximately independent of the amplitude or width of the swing. He also found that the period is independent of the mass of the bob, and proportional to the square root of the length of the pendulum.\n[…]\nHe first employed freeswinging pendulums in simple timing applications. Santorio Santori in 1602 invented a device which measured a patient's pulse by the length of a pendulum; the pulsilogium. In 1641 Galileo dictated to his son Vincenzo a design for a mechanism to keep a pendulum swinging, which has been described as the first pendulum clock; Vincenzo began construction, but had not completed it when he died in 1649.\n[…]\nHuygens analyzed this problem by determining what curve an object must follow to descend by gravity to the same point in the same time interval, regardless of starting point; the so-called tautochrone curve. By a complicated method that was an early use of calculus, he showed this curve was a cycloid, rather than the circular arc of a pendulum, confirming that the pendulum was not isochronous and Galileo's observation of isochronism was accurate only for small swings."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Galileo_Galilei",
        "situacao": "ok",
        "texto": "Galileo di Vincenzo Bonaiuti de' Galilei (15 February 1564 – 8 January 1642), commonly referred to as Galileo Galilei or mononymously as Galileo, was an Italian astronomer, physicist, engineer and  polymath. He was born in Pisa, then part of the Duchy of Florence. Galileo has been called the father of observational astronomy, classical physics, the scientific method, and modern science.\n[…]\nGalileo conducted several experiments with pendulums. It is popularly believed (thanks to the biography by Vincenzo Viviani) that these began by watching the swings of the bronze chandelier in the Cathedral of Pisa, using his pulse as a timer. The first recorded interest in pendulums made by Galileo was in his posthumously published notes titled On Motion, but later experiments are described in his Two New Sciences. Galileo claimed that a simple pendulum is isochronous, i.e.\n[…]\nStevin was forced to rely on audio feedback (caused by the spheres impacting a wooden platform below) to deduce that the balls had fallen at the same speed. The experiment was given less credence than the more substantive work of Galileo Galilei and his famous Leaning Tower of Pisa thought experiment of 1589.\n[…]\nIn Galileo’s Two New Sciences (1638), the character Salviati, widely regarded as Galileo's spokesman, held that \"In a medium totally devoid of all resistance all bodies would fall with the same speed.\" Salviati also held that this could be experimentally demonstrated by the comparison of pendulum motions in air with bobs of lead and of cork which had different weights but which were otherwise similar.\n[…]\nGalileo's early works describing scientific instruments include the 1586 tract La Billancetta (The Little Balance) describing an accurate balance to weigh objects in air or water and the 1606 manual Le Operazioni del Compasso Geometrico et Militare on the operation of a geometrical and military compass."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%AAndulo",
        "situacao": "ok",
        "texto": "Um pêndulo é um dispositivo mecânico formado por um corpo suspenso de modo que possa oscilar em torno de um ponto ou eixo de apoio. No pêndulo gravitacional, quando o corpo é afastado lateralmente de sua posição de equilíbrio mecânico, a gravidade produz uma força restauradora que o acelera de volta em direção ao equilíbrio. Ao passar por essa posição, o corpo mantém seu movimento por inércia e so\n[…]\n, ele oscila. Com\n[…]\nGalileu Galilei investigou o movimento pendular no fim do século XVI e no início do XVII. Notas de cerca de 1588, publicadas após sua morte sob o título De motu, já contêm observações sobre corpos suspensos. Nelas, Galileu observou que corpos mais pesados podiam continuar oscilando durante mais tempo que corpos mais leves.\n[…]\nGalileu defendeu que oscilações de amplitudes diferentes levavam o mesmo tempo. Essa conclusão era mais ampla do que os resultados aceitos pela mecânica: o isocronismo do pêndulo circular é apenas aproximado e vale para pequenas amplitudes. Seus estudos também estabeleceram a independência aproximada do período em relação à massa e sua relação com a raiz quadrada do comprimento.\n[…]\nHuygens procurou a curva ao longo da qual um corpo, sob a ação da gravidade e sem atrito, chegaria ao ponto inferior sempre no mesmo tempo, independentemente da altura de partida. Por uma demonstração geométrica, estabeleceu que essa curva tautocrônica é uma cicloide. Também desenvolveu a teoria do pêndulo composto e demonstrou a intercambialidade entre o ponto de suspensão e o centro de oscilação.\n[…]\nUm turíbulo, recipiente suspenso por correntes para queimar incenso, realiza movimento pendular quando é posto a balançar. O Botafumeiro da Catedral de Santiago de Compostela é um exemplo de grande dimensão. A movimentação da corda de suspensão pode transferir energia ao sistema e ampliar sua oscilação.\n[…]\nRelógio de pêndulo, uso do movimento pendular como regulador de tempo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Experimento do martelo e da pena",
      "descricao": "Demonstração feita pelo astronauta David Scott na missão Apollo 15, em 1971, que repetiu a ideia de Galileu sobre a queda dos corpos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1971, um astronauta soltou ao mesmo tempo um martelo e uma pena de falcão, e os dois chegaram juntos ao chão. Onde foi isso?",
    "resposta": "Na Lua",
    "fonte": [
      "https://en.wikipedia.org/wiki/Apollo_15",
      "https://en.wikipedia.org/wiki/Galileo%27s_Leaning_Tower_of_Pisa_experiment"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Apollo_15",
        "situacao": "ok",
        "texto": "Apollo 15 (July 26 – August 7, 1971) was the ninth crewed mission in the Apollo program and the fourth Moon landing. It was the first J mission, with a longer stay on the Moon and a greater focus on science than earlier landings. Apollo 15 saw the first use of the Lunar Roving Vehicle.\n[…]\nTravelling at speeds up to 6 to 8 mph (10 to 12 km/h), astronauts for the first time could travel far afield from their lander and still have enough time to do some scientific experiments. The Apollo 15 rover bore a plaque, reading: \"Man's First Wheels on the Moon, Delivered by Falcon, July 30, 1971\". During pre-launch testing, the LRV was given additional bracing, lest it collapse if someone sat on it under Earth conditions.\n[…]\nOnce the astronauts were beside the LM, Scott used a kit provided by the Postal Service to cancel a first day cover of two stamps being issued on August 2, the current date. Scott then performed an experiment in view of the television camera, using a falcon feather and hammer to demonstrate Galileo's theory that all objects in a given gravity field fall at the same rate, regardless of mass, in the absence of aerodynamic drag.\n[…]\nHe dropped the hammer and feather at the same time; because of the negligible lunar atmosphere, there was no drag on the feather, which hit the ground at the same time as the hammer. This was Joe Allen's idea (he also served as CAPCOM during it) and was part of an effort to find a memorable popular science experiment to do on the Moon along the lines of Shepard's hitting of golf balls.\n[…]\nThe feather was most likely from a female gyrfalcon (a type of falcon), a mascot at the United States Air Force Academy.\n[…]\nThe astronauts were photographed with the cars and the training LRV for the June 11, 1971, edition of Life magazine."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Galileo%27s_Leaning_Tower_of_Pisa_experiment",
        "situacao": "ok",
        "texto": "Between 1589 and 1592, the Italian scientist Galileo Galilei (then professor of mathematics at the University of Pisa) is said to have dropped \"unequal weights of the same material\" from the Leaning Tower of Pisa to demonstrate that their time of descent was independent of their mass, according to a biography by Galileo's pupil Vincenzo Viviani, composed in 1654 and published in 1717. The basic pr\n[…]\nGalileo set out his ideas about falling bodies, and about projectiles in general, in his book Two New Sciences (1638). The two sciences were the science of motion, which became the foundation-stone of physics, and the science of materials and construction, an important contribution to engineering. Galileo arrived at his hypothesis by a famous thought experiment outlined in his book On Motion. He writes:\n[…]\nAstronaut David Scott performed a version of the experiment on the Moon during the Apollo 15 mission in 1971, dropping a feather and a hammer from his hands. Because of the negligible lunar atmosphere, there was no drag on the feather, which reached the lunar surface at the same time as the hammer.\n[…]\nThe basic premise behind these experiments is now known as the (weak) equivalence principle. Galileo's hypothesis that inertial mass (resistance to acceleration) equals gravitational mass (weight) was extended by Albert Einstein to include special relativity and that combination became a key concept leading to the development of the modern theory of gravity, general relativity. Physical experiments following Galileo increased the precision of the equivalence to better than one part in a trillion.\n[…]\nDelft tower experiment\n[…]\nGalileo experiment on the Moon\n[…]\nThe Hammer-Feather Drop in the world's biggest vacuum chamber"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Apollo_15",
        "situacao": "ok",
        "texto": "A Apollo 15 foi um voo espacial tripulado norte-americano responsável pelo quarto pouso na Lua. Esta foi a primeira missão do Programa Apollo a ser concebida para passar uma estadia mais longa na superfície lunar, além de possuir um foco muito maior em ciência do que em alunissagens anteriores. Também foi a primeira a utilizar o Veículo Explorador Lunar.\n[…]\nA Apollo 15 também é lembrada por ter encontrado a Pedra do Gênesis e por Scott ter usado uma pena e um martelo a fim de validar a teoria de Galileu Galilei de que objetos caem ao mesmo tempo na ausência de ar.\n[…]\nAcredita-se que ele caiu na Lua pouco tempo depois.\n[…]\nO problema foi resolvido e os astronautas iniciaram as preparações para a primeira caminhada na Lua.\n[…]\nScott, assim que voltaram para o módulo lunar, usou um kit fornecido pelo Serviço Postal dos Estados Unidos para carimbar edições de primeiro dia de dois selos postais emitidos na mesma data, 2 de agosto. Scott em seguida realizou um experimento na frente da câmera, usando uma pena de falcão e um martelo a fim de demonstrar a teoria de Galileu Galilei de que todos os objetivos em dado campo gravitacional, na ausência de arrasto aerodinâmico, caem na mesma velocidade, não importando suas massas.\n[…]\nEle soltou os dois objetos ao mesmo tempo; como a atmosfera lunar era desprezível, não houve arrasto na pena e ela caiu no solo ao mesmo tempo que o martelo. Scott logo em seguida exclamou: \"O que prova que o Sr. Galileu estava correto em suas descobertas\".\n[…]\nOs astronautas passaram os dois dias seguintes trabalhando em experimentos científicos orbitais, incluindo mais observações da Lua a partir da órbita e o lançamento do sub-satélite. O Endeavour deixou a órbita lunar às 21h22min45s UTC de 4 de agosto, depois de uma queima dos motores do sistema de propulsão de serviço que durou dois minutos e 21 segundos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Escala Fahrenheit",
      "descricao": "Escala de temperatura proposta por Daniel Gabriel Fahrenheit em 1724, usada principalmente nos Estados Unidos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em que temperatura os termômetros em graus Celsius e em graus Fahrenheit marcam exatamente o mesmo número?",
    "resposta": "Quarenta graus negativos",
    "distratores": [
      "Zero grau",
      "Trinta e dois graus",
      "Dez graus negativos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fahrenheit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fahrenheit",
        "situacao": "ok",
        "texto": "The Fahrenheit scale () is a temperature scale based on one proposed in 1724 by Daniel Gabriel Fahrenheit (1686–1736). It uses the degree Fahrenheit (symbol: °F) as the unit. Several accounts of how he originally defined his scale exist, but the original paper suggests the lower defining point, 0 °F, was established as the freezing temperature of a solution of brine made from a mixture of water, i\n[…]\nThe Fahrenheit scale was the primary temperature standard for climatic, industrial and medical purposes in Anglophone countries until the 1960s. In the late 1960s and 1970s, the Celsius scale replaced Fahrenheit in almost all of those countries—with the notable exception of the United States.\n[…]\nEarly in the 20th century, Halsey and Dale suggested that reasons for resistance to the use of the centigrade (now Celsius) system in the U.S. included the larger size of each degree Celsius and the lower zero point in the Fahrenheit system; and claimed the Fahrenheit scale is more intuitive than Celsius for describing outdoor temperatures in temperate latitudes, with 100 °F being a hot summer day and 0 °F a cold winter day.\n[…]\nIn the European Union, it is mandatory to use Kelvins or degrees Celsius when quoting temperature for \"economic, public health, public safety and administrative\" purposes, though degrees Fahrenheit may be used alongside degrees Celsius as a supplementary unit.\n[…]\nFor example, The Times has an all-metric daily weather page but includes a Celsius-to-Fahrenheit conversion table. Some UK tabloids have adopted a tendency of using Fahrenheit for mid to high temperatures. It has been suggested that the rationale to keep using Fahrenheit was one of emphasis, especially for high (weather) temperatures: \"−6 °C\" sounds colder than \"21 °F\", and \"94 °F\" sounds more sensational than \"34 °C\".\n[…]\nComparison of temperature scales\n[…]\nMedia related to Fahrenheit temperature at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grau_Fahrenheit",
        "situacao": "ok",
        "texto": "Fahrenheit é uma escala de temperatura proposta por Daniel Gabriel Fahrenheit em 1724. Sua unidade é o grau Fahrenheit (símbolo: °F). Nesta escala, o ponto de fusão da água é de 32 °F e o ponto de ebulição é de 212 °F. Uma diferença de 1,8 °F é igual a uma diferença de 1 °C.\n[…]\nPara uso científico, há uma escala de temperatura, chamada de Rankine, que leva o marco zero de sua escala ao zero absoluto e possui a mesma variação da escala fahrenheit, existindo, portanto, correlação entre a escala de Rankine e grau fahrenheit do mesmo modo que existe correlação das escalas kelvin e grau Celsius.\n[…]\nO fato de existirem uma maior quantidade de números em um mesmo intervalo quando comparados fahrenheit e Celsius (1,8 para 1) faz com que todos os arredondamentos para valores inteiros se mostrem muito mais próximos do valor real. Entretanto, críticos sugerem que, mesmo a diferença de 1 grau na escala Celsius (para a temperatura da cidade) é uma variação muito pequena para ser atribuída uma vantagem a esta característica.\n[…]\nPara a maior parte do mundo, acostumados com temperaturas escritas em graus Celsius, torna-se difícil entender temperaturas em graus fahrenheit, comumente utilizada nos Estados Unidos. Pela fórmula de conversão é necessária a divisão por 1,8 após a diminuição de 32, nem sempre fácil de se fazer mentalmente. Para facilitar a rápida conversão mental, podem-se usar dois métodos, o primeiro mais preciso e menos rápido, o segundo menos preciso e muito rápido :\n[…]\nPrimeiro método, mais preciso: Temperatura em graus Celsius = [ (Temperatura em Fahrenheit - 32) / 2 ] + 10%\n[…]\nSegundo método, mais rápido: Temperatura em graus Celsius = (Temperatura em Fahrenheit - 30) / 2\n[…]\nResposta : (86 - 30) / 2  = 28 graus Celsius.\n[…]\nX = 30 graus Celsius",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Densidade máxima da água",
      "descricao": "Comportamento anômalo da água líquida, que fica mais densa por volta de quatro graus Celsius, e não no ponto de congelamento."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Ajudando lagos congelados a manter água líquida no fundo, a água atinge sua densidade máxima a que temperatura?",
    "resposta": "Quatro graus Celsius",
    "distratores": [
      "Zero grau Celsius",
      "Oito graus Celsius",
      "Dez graus Celsius"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Properties_of_water",
      "https://en.wikipedia.org/wiki/Water"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Properties_of_water",
        "situacao": "ok",
        "texto": "Water (H2O) is a polar inorganic compound that is, at room temperature, a tasteless and odorless liquid, which is nearly colorless apart from an inherent hint of blue. It is by far the most studied chemical compound and is described as the \"universal solvent\" and the \"solvent of life\". It is the most abundant substance on the surface of Earth and the only common substance to exist as a solid, liqu\n[…]\nThe melting point of ice is 0 °C (32 °F; 273 K) at standard pressure; however, pure liquid water can be supercooled well below that temperature without freezing if the liquid is not mechanically disturbed. It can remain in a fluid state down to its homogeneous nucleation point of about 231 K (−42 °C; −44 °F).\n[…]\nBecause of autoionization, at ambient temperatures pure liquid water has a similar intrinsic charge carrier concentration to the semiconductor germanium and an intrinsic charge carrier concentration three orders of magnitude greater than the semiconductor silicon, hence, based on charge carrier concentration, water cannot be considered to be a completely dielectric material or electrical insulator but to be a limited conductor of ionic charge.\n[…]\nH2S is a gas at room temperature, despite hydrogen sulfide having nearly twice the molar mass of water. The extra bonding between water molecules also gives liquid water a large specific heat capacity. This high heat capacity makes water a good heat storage medium (coolant) and heat shield.\n[…]\nThe properties of water have historically been used to define various temperature scales. Notably, the Kelvin, Celsius, Rankine, and Fahrenheit scales were, or currently are, defined by the freezing and boiling points of water. The less-common scales of Delisle, Newton, Réaumur, and Rømer were defined similarly. The triple point of water is a more commonly used standard point today."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Water",
        "situacao": "ok",
        "texto": "Water is an inorganic compound with the chemical formula H2O. It is a transparent, tasteless, odorless, and nearly colorless chemical substance. It is the main constituent of Earth's streams, lakes, and oceans. Water is also the fluid of all known living organisms, in which it acts as a solvent. Water, being a polar molecule, undergoes strong intermolecular hydrogen bonding which is a large contri\n[…]\nIn a vacuum, water will boil at room temperature.\n[…]\nThe water/vapor phase curve terminates at 647.096 K (373.946 °C; 705.103 °F) and 22.064 megapascals (3,200.1 psi; 217.75 atm). This is known as the critical point. At higher temperatures and pressures the liquid and vapor phases form a continuous phase called a supercritical fluid. It can be gradually compressed or expanded between gas-like and liquid-like densities; its properties (which are quite different from those of ambient water) are sensitive to density.\n[…]\nThe viscosity of water is about 10−3 Pa·s or 0.01 poise at 20 °C (68 °F), and the speed of sound in liquid water ranges between 1,400 and 1,540 metres per second (4,600 and 5,100 ft/s) depending on temperature. Sound travels long distances in water with little attenuation, especially at low frequencies (roughly 0.03 dB/km for 1 kHz), a property that is exploited by cetaceans and humans for communication and environment sensing (sonar).\n[…]\nThe Kelvin temperature scale of the SI system was based on the triple point of water, defined as exactly 273.16 K (0.01 °C; 32.02 °F), but as of May 2019 is based on the Boltzmann constant instead. The scale is an absolute temperature scale with the same increment as the Celsius temperature scale, which was originally defined according to the boiling point (set to 100 °C (212 °F)) and melting point (set to 0 °C (32 °F)) of water.\n[…]\nLiquid water may also exist on Jupiter's moon Ganymede as a layer sandwiched between high pressure ice and rock."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Propriedades_f%C3%ADsico-qu%C3%ADmicas_da_%C3%A1gua",
        "situacao": "ok",
        "texto": "A água (H2O, HOH) é a molécula mais abundante na superfície da Terra, cobrindo, somente em sua forma líquida, cerca de 71% desta, além de estar presente em abundância na atmosfera terrestre, como vapor, e nos polos, como gelo. Está em equilíbrio dinâmico entre os estados líquido e gasoso nas condições ambientes de temperatura e pressão (21-23 °C, 1 atm). À temperatura ambiente, é um líquido fracam\n[…]\nÀ temperatura ambiente, a água líquida fica mais densa à medida que diminui a temperatura, da mesma forma que as outras substâncias. Mas a 4 °C (3,98 °C, mais precisamente), logo antes de congelar, a água atinge sua densidade máxima e, ao aproximar-se mais do ponto de fusão, a água, sob condições normais de pressão, expande-se e torna-se menos densa. Isso se deve à estrutura cristalina do gelo, conhecido como gelo Ih hexagonal.\n[…]\nPor isso, qualquer criatura que tente sobreviver no fundo dessas águas geladas, como as do Oceano Ártico, geralmente vive a 4 °C menos que a temperatura no fundo de lagos e rios de água doce congelados no inverno.\n[…]\nAs condições de temperatura e pressão na qual a água sólida, líquida e gasosa coexistem em equilíbrio são chamadas o ponto triplo da água. Esse ponto é usado para definir as unidades de temperatura (o Kelvin, unidade padrão de termodinâmica do SI e, indiretamente, os graus Celsius e Fahrenheit). Como consequência, a temperatura de ponto triplo da água é um valor estabelecido ao invés de uma quantidade medida.\n[…]\nNa água, uma ordem tetraédrica devida às quatro ligações de hidrogênio leva a uma estrutura aberta e a uma rede de ligações tridimensional, que contrasta com as estruturas mais unidas de líquidos simples. Há uma grande semelhança entre a água e a sílica em seu comportamento anômalo, apesar de a água ser um líquido que tem uma rede de ligações de hidrogênio e a sílica ter uma rede covalente com um ponto de fusão muito alto.\n[…]\nDureza da água",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Laser",
      "descricao": "Dispositivo que emite um feixe de luz intenso, concentrado e de uma só cor, por emissão estimulada de radiação."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano o americano Theodore Maiman fez funcionar o primeiro laser, usando um cristal de rubi?",
    "resposta": "1960",
    "distratores": [
      "1948",
      "1955",
      "1967"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Laser",
      "https://en.wikipedia.org/wiki/Theodore_Maiman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Laser",
        "situacao": "ok",
        "texto": "A laser is a device that emits light through a process of optical amplification based on the stimulated emission of electromagnetic radiation. The word laser originated as an acronym for light amplification by stimulated emission of radiation. The first laser was built in 1960 by Theodore Maiman at Hughes Research Laboratories, based on theoretical work by Charles H. Townes and Arthur Leonard Scha\n[…]\nGould's notes included possible applications for a laser, such as optical telecommunications, spectrometry, interferometry, radar, and nuclear fusion. He continued developing the idea and filed a patent application in April 1959. The United States Patent and Trademark Office (USPTO) denied his application, and awarded a patent to Bell Labs, in 1960. That provoked a twenty-eight-year legal fight over the rights to various laser technologies and applications.\n[…]\nOn May 16, 1960, Theodore H. Maiman operated the first functioning laser at Hughes Research Laboratories, Malibu, California, ahead of several research teams, including those of Townes, at Columbia University, Arthur L. Schawlow, at Bell Labs, and Gould, at the TRG (Technical Research Group) company. Maiman's functional laser used a flashlamp-pumped synthetic ruby crystal to produce red laser light at 694 nanometers wavelength.\n[…]\nEven the first laser was recognized as being potentially dangerous. Theodore Maiman characterized the first laser as having the power of one \"Gillette\", as it could burn through one Gillette razor blade. Today, it is accepted that even low-power lasers with only a few milliwatts of output power can be hazardous to human eyesight when the beam hits the eye directly or after reflection from a shiny surface.\n[…]\nBromberg, Joan Lisa (1991). The Laser in America, 1950–1970. MIT Press. ISBN 978-0-262-02318-4.\n[…]\nLaser Focus World (ISSN 0740-2511)\n[…]\nVirtual Museum of Laser History, from the touring exhibit by SPIE"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Theodore_Maiman",
        "situacao": "ok",
        "texto": "Theodore Harold Maiman (July 11, 1927 – May 5, 2007) was an American engineer and physicist who is widely credited with the invention of the laser. Maiman's laser led to the subsequent development of many other types of lasers. The laser was successfully fired on May 16, 1960. In a July 7, 1960, press conference in Manhattan, Maiman and his employer, Hughes Aircraft Company, announced the laser to\n[…]\nOn May 16, 1960, at Hughes' Malibu, California, laboratories, Maiman's solid-state pink ruby laser emitted mankind's first coherent light, with rays all the same wavelength and fully in phase. Maiman documented his invention in Nature on August 6, 1960, after two rejections by Samuel A. Goudsmit at Physical Review Letters, besides which he published other scholarly articles describing the science and technology underlying his laser.\n[…]\nRecognition for Maiman and his laser invention continued posthumously. In a 2007 obituary testimonial, maser co-inventor Charles H. Townes described Maiman's 1960 Nature article on his laser as \"probably more important per word than any of the papers published by Nature over the past century.\" The annual Theodore Maiman Student Paper Competition was established in 2008, endowed by major laser groups, and is administered by the OSA Foundation.\n[…]\nThe U.S. Congress passed a resolution celebrating the invention of the laser and citing Maiman. Also in 2010 Maiman's laser achievement was recognized as an IEEE Milestone, and the American Physical Society presented Hughes Research Laboratories with a plaque to commemorate the historic site of the world's first laser.\n[…]\nTheodore H. Maiman: Creator of the First Laser\n[…]\nSPIE, \"Lasers and Sources, Video: Theodore Maiman on the First Laser\"\n[…]\nSPIE, \"Lasers and Sources, Video: Maiman's First Laser Light Shines Again\"\n[…]\nCLEO, \"Video: The World's First Laser, Made by Ted Maiman on May 16, 1960\" on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Laser",
        "situacao": "ok",
        "texto": "Um laser, também grafado lêiser, é um dispositivo que emite luz por um processo de amplificação óptica baseado na emissão estimulada de radiação eletromagnética. A palavra laser surgiu como acrônimo da expressão inglesa light amplification by stimulated emission of radiation, \"amplificação da luz por emissão estimulada de radiação\". O primeiro laser funcional foi construído em 1960 por Theodore Ma\n[…]\nEm 16 de maio de 1960, Theodore H. Maiman operou o primeiro laser funcional no Hughes Research Laboratories, em Malibu, Califórnia. O aparelho usava um cristal sintético de rubi bombeado por uma lâmpada de flash e emitia luz vermelha de cerca de 694 nm em pulsos. Maiman chegou a esse resultado antes das equipes de Townes na Universidade Columbia, Schawlow nos Bell Labs e Gould na Technical Research Group.\n[…]\nLasers de estado sólido usam cristais ou vidros dopados com íons que fornecem as transições de emissão. O primeiro laser funcional usava rubi, um coríndon dopado com cromo. O bombeamento é geralmente óptico, por lâmpadas ou outros lasers. No vocabulário da área, a categoria costuma excluir os lasers semicondutores, apesar de seu meio ativo também ser sólido.\n[…]\nArmas que lançavam raios de energia já faziam parte da ficção científica antes da construção do primeiro laser. Brinquedos e histórias associados a personagens como Buck Rogers e Flash Gordon apresentavam \"armas de raios\" décadas antes de 1960. Depois da invenção do laser, porém, o próprio termo passou rapidamente para a ficção e tornou-se uma designação recorrente para armas e dispositivos futuristas, muitas vezes sem relação estrita com o funcionamento de um laser real.\n[…]\nBromberg, Joan Lisa. The Laser in America, 1950–1970. MIT Press, 1991. ISBN 978-0-262-02318-4.\n[…]\nAdvancing the Laser, material da SPIE para o cinquentenário do laser, versão arquivada\n[…]\nBright Idea: The First Lasers, exposição do American Institute of Physics",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.75 — 2026-10-23**
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
- no máximo **2 perguntas por âncora** em cada lote, nunca com o mesmo ângulo;
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro;
- no máximo **5 perguntas por âncora** no banco inteiro (3 até 2026-10-23), somando texto e figura, e no máximo **2 com figura**. As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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
- **Saturação:** o áudio conta no limite de 5 perguntas por âncora, e cada âncora tem no máximo 1 pergunta com áudio.
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
