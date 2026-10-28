Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Tecnologia e Computação** (tema **Ciências**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Orkut",
      "descricao": "Rede social do Google lançada em 2004, extremamente popular no Brasil."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes sites, muito populares no Brasil nos anos dois mil, foi o primeiro a entrar no ar?",
    "resposta": "Orkut",
    "distratores": [
      "Facebook",
      "YouTube",
      "Twitter"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Orkut",
      "https://en.wikipedia.org/wiki/Facebook",
      "https://en.wikipedia.org/wiki/YouTube"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Orkut",
        "situacao": "ok",
        "texto": "Orkut foi uma rede social filiada ao Google, criada em 24 de janeiro de 2004 e desativada em 30 de setembro de 2014. Seu nome é originado no projetista chefe, Orkut Büyükkökten, engenheiro turco do Google.\n[…]\n5 de abril: O Orkut ganha versão em português.\n[…]\nNo dia 1 de janeiro de 2005 um hacker brasileiro chamado \"Vinícius K-Max\" atacou o Orkut, roubando comunidade usando uma vulnerabilidade de \"cross-site scripting\" (XSS).\n[…]\nEm 16 de janeiro de 2007, a comunidade do Orkut Eu AMO Floripa foi alvo da primeira transação comercial de que se teve notícia na rede no Brasil quando foi \"adquirida\" pela RBS, que pagou R$ 2 mil a um jovem carioca para se tornar moderador do fórum de discussão. A página da comunidade foi utilizada para promover o festival do verão \"Floripa Tem\", e seu nome foi alterado, logo em seguida, para \"Eu Amo Floripa! Floripa Tem!\".\n[…]\nEm 2006 a justiça do Brasil denunciou um estudante de 20 anos acusado de racismo contra pessoas com descendência africana, e espalhar textos difamatórios no Orkut.\n[…]\nA Arábia Saudita foi outro país que bloqueou o Orkut. O primeiro-ministro de Bahrein esteve sob forte pressão para fazer o mesmo.\n[…]\nEm outubro de 2026, o fundador atualizou o website, adicionando uma contagem regressiva até as 10 horas, em horário de Brasília, para o dia 8 de outubro de 2026, e uma mensagem em inglês e português, indicando grandes mudanças no website. Em entrevista para a revista Exame, Orkut Büyükkökten contou que o retorno da plataforma se tornou possível após setembro de 2025, quando passou a recuperar a propriedade intelectual da marca.\n[…]\nOrkut atrapalha negócios do Google segundo Wall Street Journal (no Wikinotícias)\n[…]\nwww.orkut.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Facebook",
        "situacao": "ok",
        "texto": "Facebook is an American social networking service owned by the American technology conglomerate Meta Platforms. It was founded in 2004 by Mark Zuckerberg, along with his Harvard College roommates and fellow students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes. The name Facebook derives from the face book directories often given to American university students.\n[…]\nIn a 2010 report regarding privacy, a research project stated that not a lot of information is available regarding the consequences of what people disclose online so often what is available are just reports made available through popular media. In 2017, a former Facebook executive went on the record to discuss how social media platforms have contributed to the unraveling of the \"fabric of society\".\n[…]\nIn the run-up to the 2020 United States elections, Eastern European troll farms operated popular Facebook pages showing content related to Christians and Blacks in America. They included more than 15,000 pages combined and were viewed by 140 million US users per month. This was in part due to how Facebook's algorithm and policies allow unoriginal viral content to be copied and spread in ways that still drive up user engagement.\n[…]\nAs of September 2021, some of the most popular pages were still active on Facebook despite the company's efforts to take down such content.\n[…]\nDuring the Arab Spring many journalists claimed Facebook played a major role in the 2011 Egyptian revolution. On January 14, the Facebook page of \"We are all Khaled Said\" was started by Wael Ghoniem to invite the Egyptian people to \"peaceful demonstrations\" on January 25. In Tunisia and Egypt, Facebook became the primary tool for connecting protesters and led the Egyptian government to ban it, Twitter and other sites. After 18 days, the uprising forced President Hosni Mubarak to resign."
      },
      {
        "url": "https://en.wikipedia.org/wiki/YouTube",
        "situacao": "ok",
        "texto": "YouTube  is an American online video-sharing platform owned by Google. YouTube was founded on February 14, 2005, by Chad Hurley, Jawed Karim, and Steve Chen, all of whom were former employees at PayPal. Headquartered in San Bruno, California, it is the second-most-visited website in the world, after Google itself. In January 2024, YouTube had reached more than 2.7 billion monthly active users, who\n[…]\nIn February 2017, YouTube Go was launched in India, and expanded in November 2017 to 14 other countries, including Nigeria, Indonesia, Thailand, Malaysia, Vietnam, the Philippines, Kenya, and South Africa. On February 1, 2018, it was rolled out in 130 countries worldwide, including Brazil, Mexico, Turkey, and Iraq. Before it shut down, the app was available to around 60% of the world's population. In May 2022, Google announced that they would be shutting down YouTube Go in August 2022.\n[…]\nAccess to specific videos is sometimes prevented due to copyright and intellectual property protection laws (e.g. in Germany), violations of hate speech, and preventing access to videos judged inappropriate for youth, which is also done by YouTube with the YouTube Kids app and with \"restricted mode\". Businesses, schools, government agencies, and other private institutions often block social media sites, including YouTube, due to its bandwidth limitations and the site's potential for distraction.\n[…]\nThe move was seen as an attempt to ensure that videos being monetized did not lead to controversy, but was criticized for penalizing smaller YouTube channels. YouTube Play Buttons, a part of the YouTube Creator Rewards, are a recognition by YouTube of its most popular channels. The trophies are made of nickel-plated copper-nickel alloy, golden-plated brass, silver-plated metal, ruby, and red-tinted crystal glass."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Nokia",
      "descricao": "Empresa finlandesa de telecomunicações, fundada em 1865, famosa pelos seus telefones celulares."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas empresas de tecnologia tem a origem mais antiga?",
    "resposta": "Nokia",
    "distratores": [
      "IBM",
      "Samsung",
      "Sony"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nokia",
      "https://en.wikipedia.org/wiki/IBM",
      "https://en.wikipedia.org/wiki/Samsung",
      "https://en.wikipedia.org/wiki/Sony"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nokia",
        "situacao": "ok",
        "texto": "Nokia Corporation is a Finnish multinational telecommunications, information technology, and consumer electronics corporation, originally established as a pulp mill in 1865. Nokia's main headquarters are in Espoo, Finland, in the Helsinki metropolitan area, but the company's actual roots are in the Tampere region of Pirkanmaa.\n[…]\nIn 2020, the Australian Strategic Policy Institute accused at least 82 major brands, including Nokia, of being connected to forced Uyghur labor in Xinjiang.\n[…]\nDavid J. Cord (April 2014). The Decline and Fall of Nokia. Schildts & Söderströms. ISBN 978-951-52-3320-2.\n[…]\nYves Doz; Keeley Wilson (November 2017). Ringtone: Exploring the Rise and Fall of Nokia in Mobile Phones. Oxford University Press. ISBN 978-0-19-877719-9.\n[…]\nMartti Häikiö (October 2002). Nokia: The Inside Story. FT / Prentice Hall. ISBN 0-273-65983-9.\n[…]\nMichael Lattanzi; Antti Korhonen; Vishy Gopalakrishnan (January 2006). Work Goes Mobile: Nokia's Lessons from the Leading Edge. John Wiley & Sons. ISBN 0-470-02752-5.\n[…]\nChristian Lindholm; Turkka Keinonen; Harri Kiljander (June 2003). Mobile Usability: How Nokia Changed the Face of the Mobile Phone. McGraw-Hill Companies. ISBN 0-07-138514-2.\n[…]\nTrevor Merriden (February 2001). Business The Nokia Way: Secrets of the World's Fastest Moving Company. John Wiley & Sons. ISBN 1-84112-104-5.\n[…]\nDan Steinbock (April 2001). The Nokia Revolution: The Story of an Extraordinary Company That Transformed an Industry. AMACOM Books. ISBN 0-8144-0636-X.\n[…]\nDan Steinbock (May 2010). Winning Across Global Markets: How Nokia Creates Strategic Advantage in a Fast-Changing World. Jossey-Bass / Wiley. ISBN 978-0-470-33966-4.\n[…]\nCarl-Gustav Lindén (April 2021). Kingdom of Nokia: How a Nation Served the Needs of One Company. Helsinki University Press. ISBN 978-952-369-032-5.\n[…]\nBusiness data for Nokia:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/IBM",
        "situacao": "ok",
        "texto": "International Business Machines Corporation, doing business as IBM (nicknamed Big Blue), is an American multinational technology company headquartered in Armonk, New York, and present in over 175 countries. It is a publicly traded company and one of the 30 companies in the Dow Jones Industrial Average."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Samsung",
        "situacao": "ok",
        "texto": "Samsung Group  (Korean: 삼성; pronounced [sʰamsɔŋ]; stylised as SΛMSUNG) is a South Korean multinational manufacturing conglomerate headquartered in the Samsung Town office complex in Seoul. The group consists of numerous affiliated businesses, most of which operate under the Samsung brand, and is the largest chaebol (family-controlled conglomerates in South Korea). As of 2024, Samsung has the world\n[…]\nIn 2010, Samsung announced a ten-year growth strategy centered around five businesses. One of these businesses was to be focused on biopharmaceuticals, to which has committed ₩2.1 trillion. In first quarter of 2012, Samsung Electronics became the world's largest mobile phone maker by unit sales, overtaking Nokia, which had been the market leader since 1998."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nokia",
        "situacao": "ok",
        "texto": "Nokia Corporation (pronúncia em finlandês: [ˈnɔkiɑ], nóquia) é uma empresa multinacional finlandesa fundada em 1865, de infraestruturas de telecomunicações, tecnologia de telecomunicações e tecnologia de consumo. A Nokia tem sede em Keilaniemi, Espoo, cidade vizinha a Helsínquia, capital da Finlândia.\n[…]\na Nokia Technologies, que foi criada após a venda, procedendo à gestão do imenso portfólio de patentes da empresa criados a partir de mais de 30 anos em investigação e desenvolvimento na área dos telemóveis, bem como incubadora de novas áreas de negócio lucrativas para a corporação.\n[…]\nA 28 de julho de 2015, a Nokia Technologies anunciou o OZO, uma câmara de realidade virtual com 8 sensores com resolução 2k. A Nokia declarou que o OZO, e todo o suporte que teria, seriam a mais avançada plataforma de Realidade Virtual em todo o mundo, além de constituir um primeiro passo da subdivisão de Realidade Virtual da empresa no mercado profissional. O preço de lançamento foi de 60.000€, estando atualmente nos 50.000€.\n[…]\nNo dia 26 de abril de 2016, a Nokia anunciou que iria adquirir a start-up francesa de saúde digital Withings por 191 milhões de euros. A empresa foi integrada na nova sub-divisão de saúde da Nokia Technologies. No decorrer de 2017, espera-se que a marca Nokia substitua a marca Withings.\n[…]\nA 18 de maio de 2016, a Microsoft anunciou a venda da divisão de telemóveis básicos, bem como a licença que tinha para utilizar a marca Nokia nesses mesmos dispositivos, à HMD Global, e as fábricas da antiga Nokia à FIH Mobile, uma subsidiária da Foxconn. Em simultâneo, a HMD Global, uma start-up finlandesa formada por antigos empregados da Nokia, acordou com a empresa o direito de utilização da marca Nokia, bem como das suas patentes, em smartphones Android.\n[…]\nSite oficial da Nokia\n[…]\nFundação Nokia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Cartão SIM",
      "descricao": "Cartão com chip que armazena a identidade do assinante de telefonia móvel."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Dos formatos de cartão SIM que se encaixam no celular, qual é o menor?",
    "resposta": "Nano-SIM",
    "distratores": [
      "Micro-SIM",
      "Mini-SIM",
      "SIM de tamanho completo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/SIM_card"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/SIM_card",
        "situacao": "ok",
        "texto": "A SIM card or SIM (subscriber identity module) is a type of integrated circuit, often in the form of a smart card. They are intended to securely store an international mobile subscriber identity (IMSI) number and its related key, which are used to identify and authenticate subscribers on mobile telephone devices (such as mobile phones, tablets, and laptops).\n[…]\nSIM cards have been made smaller over the years; functionality is independent of format. Full-size SIM was followed by mini-SIM, micro-SIM, and nano-SIM. SIM cards are also made to embed in devices.\n[…]\nAfter a debate in early 2012 between a few designs created by Apple, Nokia and RIM, Apple's design for an even smaller SIM card was accepted by the ETSI. The nano-SIM (or 4FF) card was introduced in June 2012, when mobile service providers in various countries first supplied it for phones that supported the format.\n[…]\nThe nano-SIM measures 12.3 mm × 8.8 mm × 0.67 mm (0.484 in × 0.346 in × 0.026 in) and reduces the previous format to the contact area while maintaining the existing contact arrangements. A small rim of isolating material is left around the contact area to avoid short circuits with the socket. The nano-SIM can be put into adapters for use with devices designed for 2FF or 3FF SIMs, and is made thinner for that purpose; some telephone companies give due warning about this.\n[…]\nAn embedded SIM (eSIM) is a form of programmable SIM that is embedded directly into a device. The surface mount format provides the same electrical interface as the full size, 2FF and 3FF SIM cards, but is soldered to a circuit board as part of the manufacturing process. In M2M applications where there is no requirement to change the SIM card, this avoids the requirement for a connector, improving reliability and security.\n[…]\nMulti-SIM card\n[…]\nITU-T E.118 – The International Telecommunication Charge Card 2006 ITU-T"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cart%C3%A3o_SIM",
        "situacao": "ok",
        "texto": "O cartão SIM (sigla em inglês para: subscriber identity module, em português: \"módulo de identificação do assinante\"), também conhecido como chip (no Brasil) é um circuito impresso do tipo cartão inteligente utilizado para identificar, controlar e armazenar dados de telefones celulares de tecnologia GSM (Global System for Mobile Communications) sendo obrigatório neste, usando R-UIM (Removable User\n[…]\nCada SIM é identificado internacionalmente pelo seu identificador de cartão de circuito integrado (integrated circuit card identifier - ICCID). ICCID é o identificador do próprio cartão SIM - ou seja, um identificador para o chip SIM. Atualmente, os números ICCID também são usados para identificar perfis eSIM, e não apenas cartões SIM físicos. Os ICCIDs são armazenados nos cartões SIM e também são gravados ou impressos no corpo do cartão SIM durante um processo chamado personalização.\n[…]\nNano-SIM (4FF) – Atualmente o formato físico mais comum, adotado pela maioria dos smartphones modernos.\n[…]\nEm mercados onde dispositivos econômicos são predominantes, o nano SIM ainda é a opção mais usada. Por outro lado, o eSIM tem sido adotado principalmente em smartphones topo de linha da Apple, Samsung e Google, onde a conectividade via software traz mais flexibilidade e elimina a necessidade de um slot físico.\n[…]\nQuando o telefone celular é ligado, o aparelho procura a rede GSM que está registrada no cartão SIM, quando a rede é encontrada, o sistema procura e define a localização do cliente automaticamente. Como o número de telefone do celular mais o número do cartão SIM que é único no mundo estão armazenado no cartão SIM, a identificação e o login do mesmo é feito através do chip e não do aparelho, como acontece em outras tecnologias (CDMA por exemplo).\n[…]\nSão funcionalidades mais avançadas que podem ou não, estar disponíveis no cartão SIM, se o mesmo for compatível.\n[…]\nDifusão Celular (Cell Broadcast)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Blu-ray",
      "descricao": "Formato de disco óptico digital de alta capacidade, sucessor do DVD, lançado em 2006."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Num disco de uma só camada, qual destas mídias ópticas tem a maior capacidade?",
    "resposta": "Blu-ray",
    "distratores": [
      "DVD",
      "CD",
      "MiniDisc"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Blu-ray",
      "https://en.wikipedia.org/wiki/DVD"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blu-ray",
        "situacao": "ok",
        "texto": "Blu-ray (Blu-ray Disc or BD) is a digital optical disc data storage format designed to supersede the DVD format. It was invented and developed in the early-mid 2000s and released worldwide on June 20, 2006, capable of storing several hours of high-definition video (HDTV 720p and 1080p).\n[…]\nBehind closed doors at CES 2007, Ritek revealed that it had successfully developed a high-definition optical disc process that extended the disc capacity to ten layers, increasing the capacity of the discs to 250 GB. However, it noted the major obstacle was that current read/write technology did not allow additional layers. JVC developed a three-layer technology that allows putting both standard-definition DVD data and HD data on a BD/(standard) DVD combination.\n[…]\nIn May 2009 Verbatim/Mitsubishi announced the industry's first 6X BD-R LTH media, which allows recording a 25 GB disc in about 16 minutes. Unlike with the previous releases of 120 mm optical discs (i.e. CDs and standard DVDs), Blu-ray recorders hit the market almost simultaneously with Blu-ray's debut.\n[…]\nThe BDFS was replaced by UDF 2.50 in the second BD-RE specification in 2005, to enable interoperability among consumer electronics, Blu-ray recorders, and personal computer systems. These optical disc recording technologies enabled PC recording and playback of BD-RE. BD-R can use UDF 2.50/2.60.\n[…]\nHigh Fidelity Pure Audio (HFPA) is a marketing initiative, spearheaded by the Universal Music Group, for audio-only Blu-ray optical discs. Launched in 2013 as a potential successor to the compact disc, it has been compared with DVD-A and SACD, which had similar aims.\n[…]\nBlu-ray Disc Association's Technical White Papers Archived August 17, 2013, at the Wayback Machine\n[…]\nBlu-ray Disc License Office"
      },
      {
        "url": "https://en.wikipedia.org/wiki/DVD",
        "situacao": "ok",
        "texto": "DVD (Digital Video Disc or Digital Versatile Disc) is a digital optical disc data storage format. It was invented and developed in 1995 and first released on November 1, 1996, in Japan. The medium can store any kind of digital data and has been widely used to store video programs (watched using DVD players), software and other computer files. DVDs offer significantly higher storage capacity than c\n[…]\nIts drawback was a loss from 5 to 4.7 Gigabytes of capacity.\n[…]\nBorrowing from the LaserDisc format, the DVD standard includes DVD-10 discs (Type B in ISO) with two recorded data layers such that only one layer is accessible from either side of the disc. This doubles the total nominal capacity of a DVD-10 disc to 9.4 GB (8.75 GiB), but each side is locked to 4.7 GB. Like DVD-5 discs, DVD-10 discs are defined as single-layer (SL) discs.\n[…]\nThe DVD Book also permits an additional disc type called DVD-14: a hybrid double-sided disc with one dual-layer side, one single-layer side, and a total nominal capacity of 12.3 GB. DVD-14 has no counterpart in ISO.\n[…]\nDual-layer recording (occasionally called double-layer recording) allows DVD-R and DVD+R discs to store nearly double the data of a single-layer disc—8.5 and 4.7 gigabyte capacities, respectively. The additional capacity comes at a cost: DVD±DLs have slower write speeds as compared to DVD±R. DVD-R DL was developed for the DVD Forum by Pioneer Corporation; DVD+R DL was developed for the DVD+RW Alliance by Mitsubishi Kagaku Media (MKM) and Philips.\n[…]\nSupport of measuring the disc quality varies among optical drive vendors and models. Unreadable data can be found using any drive using general-purpose tools like badblocks.\n[…]\nAccording to the Optical Storage Technology Association (OSTA), \"Manufacturers claim lifespans ranging from 30 to 100 years for DVD, DVD-R and DVD+R discs and up to 30 years for DVD-RW, DVD+RW and DVD-RAM.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Disco_Blu-ray",
        "situacao": "ok",
        "texto": "Disco Blu-ray, também conhecido como BD (de Blu-ray Disc) é um formato de disco óptico com 12 cm de diâmetro e 1,2 mm de espessura (igual ao CD e ao DVD) para vídeo e áudio de alta definição e armazenamento de dados de alta densidade. É uma alternativa ao DVD e é capaz de armazenar filmes de até 1080p Full HD por até 4 horas em compressão com perda de dados. Requer uma TV Full HD de LCD, plasma ou\n[…]\nSua capacidade varia de 25 GB (camada simples) a 50 GB (camada dupla) – gigabytes. O disco Blu-Ray faz uso de um laser de cor azul-violeta, cujo comprimento de onda é 405 nanômetros (nm), permitindo gravar mais informação num disco do mesmo tamanho usado por tecnologias anteriores (o DVD usa um laser de cor vermelha de 650 nanômetros).\n[…]\nOs primeiros lançamentos usando o VC-1 e AVC, os mais novos formatos, foram introduzidos em setembro de 2006. Os primeiros filmes que utilizam discos de camada dupla de 50 GB foram introduzidos em outubro de 2006. Os primeiros álbuns somente de áudio foram lançados em maio de 2008. O primeiro disco gravável Blu-ray Disc de disco rígido para o PC foi o BWU-100A, lançado pela Sony em 18 de julho de 2006.\n[…]\nOutros discos Blu-ray com capacidades de 200 GB (oito camadas) estão também em desenvolvimento.\n[…]\nRecentemente a TDK anunciou ter criado um disco Blu-ray experimental capaz de armazenar até 200 GB de informação em um único lado (6 camadas de 33 GB). Para isso, foi necessário aumentar a capacidade de cada camada de 25 GB para 33 GB. Isso foi possível graças ao peróxido de bismuto como meio de gravação.\n[…]\nO Blu-ray 4K foi licenciado em meados de 2015. Em 12 de maio de 2015, a Associação Blu-ray Disc revelou que as especificações foram concluídas e o logotipo oficial: Ultra HD Blu-ray. Os primeiros leitores de disco foram lançados em 2016.\n[…]\nDisco micro-holográfico, tecnologia que promete um armazenamento 20 vezes maior que o blu-ray.\n[…]\nUniversal Media Disc",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Z3",
      "descricao": "Computador eletromecânico programável concluído pelo engenheiro alemão Konrad Zuse em 1941."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes computadores pioneiros ficou pronto antes dos outros?",
    "resposta": "Z3, de Konrad Zuse",
    "distratores": [
      "Colossus",
      "ENIAC",
      "UNIVAC I"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Z3_(computer)",
      "https://en.wikipedia.org/wiki/Colossus_computer",
      "https://en.wikipedia.org/wiki/ENIAC",
      "https://en.wikipedia.org/wiki/UNIVAC_I"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Z3_(computer)",
        "situacao": "ok",
        "texto": "The Z3 was a German electromechanical computer designed by Konrad Zuse in 1938, and completed in 1941. It was the world's first working programmable, fully automatic digital computer. The Z3 was built with 2,600 relays, implementing a 22-bit word length that operated at a clock frequency of about 5–10 Hz. Program code was stored on punched film. Initial values were entered manually.\n[…]\nThanks to this machine and its predecessors, Konrad Zuse has often been suggested as the inventor of the computer.\n[…]\nZuse's coworker Helmut Schreyer built an electronic digital experimental model of a computer using 100 vacuum tubes in 1942, but it was lost at the end of the war.\n[…]\nVon Neumann is said to have given due credit to Alan Turing, and the concept had actually been mentioned earlier by Konrad Zuse himself, in a 1936 patent application (that was rejected). Konrad Zuse himself remembered in his memoirs: \"During the war it would have barely been possible to build efficient stored program devices anyway.\"  Friedrich L.\n[…]\nA modern reconstruction directed by Raúl Rojas and Horst Zuse started in 1997 and finished in 2003. It is now in the Konrad Zuse Museum in Hünfeld, Germany. Memory was halved to 32 words. Power consumption is about 400 W, and weight is about 30 kilograms (66 lb).\n[…]\nIn 2008, Horst Zuse started a reconstruction of the Z3 by himself. It was presented in 2010 in the Konrad Zuse Museum in Hünfeld.\n[…]\nRojas, Raúl; Darius, Frank; Göktekin, Cüneyt; Heyne, Georg (2005-08-22). \"The reconstruction of Konrad Zuse's Z3\". IEEE Annals of the History of Computing. 27 (3): 23–32. doi:10.1109/mahc.2005.48. eISSN 1934-1547. ISSN 1058-6180. S2CID 16288658.\n[…]\nThe Life and Work of Konrad Zuse\n[…]\nPaul E. Ceruzzi Collection on Konrad Zuse (CBI 219). Charles Babbage Institute, University of Minnesota. Collection contains published reports, articles, product literature, and other materials."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Colossus_computer",
        "situacao": "ok",
        "texto": "Colossus was a set of computers developed by British codebreakers in the years 1943–1945 to help in the cryptanalysis of the Lorenz cipher. Colossus used thermionic valves (vacuum tubes) to perform Boolean and counting operations. Colossus is regarded as the world's first programmable, electronic, digital computer. The first electromechanical computer was Konrad Zuse's Z3, completed in Berlin in 1\n[…]\nBritain had such vitality that it could immediately after the war embark on so many well-conceived and well-executed projects in the computer field.\n[…]\nThe reconstruction is on display, in the historically correct place for Colossus No. 9, at The National Museum of Computing, in H Block Bletchley Park in Milton Keynes, Buckinghamshire.\n[…]\nThe German codebreaker said: \"My laptop digested ciphertext at a speed of 1.2 million characters per second—240 times faster than Colossus. If you scale the CPU frequency by that factor, you get an equivalent clock of 5.8 MHz for Colossus. That is a remarkable speed for a computer built in 1944.\"\n[…]\nThere was a fictional computer named Colossus in the 1970 film Colossus: The Forbin Project which was based on the 1966 novel Colossus by D. F. Jones. This was a coincidence as it pre-dates the public release of information about Colossus, or even its name.\n[…]\nHistory of computing hardware\n[…]\nList of vacuum-tube computers\n[…]\nRojas, R.; Hashagen, U. (2000), The First Computers: History and Architectures, MIT Press, ISBN 0-262-18197-5 – Comparison of the first computers, with a chapter about Colossus and its reconstruction by Tony Sale.\n[…]\nSale, Tony (2004), The Colossus Computer 1943–1996: How It Helped to Break the German Lorenz Cipher in WWII, Kidderminster: M.&M. Baldwin, ISBN 0-947712-36-4 A slender (20-page) booklet, containing the same material as Tony Sale's website (see below)\n[…]\nEarly computer development\n[…]\nThe National Museum of Computing (TNMOC)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/ENIAC",
        "situacao": "ok",
        "texto": "ENIAC (; Electronic Numerical  Integrator and Computer) was the first programmable, electronic, general-purpose digital computer, completed in 1945. Other computers had some of these features, but ENIAC was the first to have them all. ENIAC was Turing-complete and able to solve \"a large class of numerical problems\" through reprogramming.\n[…]\non October 2, 1955, when it was retired in favor of the more efficient EDVAC and ORDVAC computers.\n[…]\nIn 1996, in honor of the ENIAC's 50th anniversary, The University of Pennsylvania sponsored a project named \"ENIAC-on-a-Chip\", where a very small silicon computer chip measuring 7.44 mm by 5.29 mm was built with the same functionality as ENIAC. Although this 20 MHz chip was many times faster than ENIAC, it had but a fraction of the speed of its contemporary microprocessors in the late 1990s.\n[…]\nIn 1997, the six women who did most of the programming of ENIAC were inducted into the Women in Technology International Hall of Fame. The role of the ENIAC programmers is treated in a 2010 documentary film titled Top Secret Rosies: The Female \"Computers\" of WWII by LeAnn Erickson. A 2014 documentary short, The Computers by Kate McMahon, tells of the story of the six programmers; this was the result of 20 years' research by Kathryn Kleiman and her team as part of the ENIAC Programmers Project.\n[…]\nHistory of computing\n[…]\nHistory of computing hardware\n[…]\nWomen in computing\n[…]\nList of vacuum-tube computers\n[…]\nMilitary computers\n[…]\nENIAC chapter in Karl Kempf, Electronic Computers Within The Ordnance Corps, November 1961\n[…]\nENIAC specifications from Ballistic Research Laboratories Report No. 971 December 1955, (A Survey of Domestic Electronic Digital Computing Systems)\n[…]\nA Computer Is Born, Michael Kanellos, 60th anniversary news story, CNet, February 13, 2006\n[…]\n1946 film restored, Computer History Archives Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Z3",
        "situacao": "ok",
        "texto": "O computador Z3 foi a primeira máquina de computação totalmente automática e programável do mundo, criado em 1941 pelo alemão Konrad Zuse. Foi utilizado pelo Instituto de pesquisa aeronáutica alemão a fim de realizar análises estatísticas em projetos de asas de novas aeronaves.\n[…]\nFoi destruído, junto com a casa de Zuse, em Berlim, por um bombardeio.\n[…]\n«A evolução do computador»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "iPod",
      "descricao": "Linha de tocadores de mídia portáteis da Apple, lançada em 2001 e encerrada em 2022."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em ordem de lançamento, qual destes aparelhos da Apple veio antes dos outros?",
    "resposta": "iPod",
    "distratores": [
      "iPhone",
      "iPad",
      "Apple Watch"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/IPod",
      "https://en.wikipedia.org/wiki/IPhone",
      "https://en.wikipedia.org/wiki/IPad",
      "https://en.wikipedia.org/wiki/Apple_Watch"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/IPod",
        "situacao": "ok",
        "texto": "The iPod is a discontinued series of portable media players and multi-purpose mobile devices that were designed and marketed by Apple from 2001 to 2022. The first version was released on November 10, 2001, 10 months after the Macintosh version of iTunes was released. Apple has sold an estimated 450 million iPods. Apple officially discontinued the iPod product line on May 10, 2022. The iPod is the \n[…]\nApple announced a battery replacement program on November 14, 2003, a week before a high publicity stunt and website by the Neistat Brothers. The initial cost was US$99, and it was lowered to US$59 in 2005. One week later, Apple offered an extended iPod warranty for US$59. For the iPod Nano, soldering tools are needed because the battery is soldered onto the main board. Fifth generation iPods have their battery attached to the backplate with adhesive.\n[…]\nThe first generation iPod Nano may overheat and pose a health and safety risk. Affected iPod Nanos were sold between September 2005 and December 2006. This is due to a flawed battery used by Apple from a single battery manufacturer. Apple recommended that owners of affected iPod Nanos stop using them. Under an Apple product replacement program, affected Nanos were replaced with current generation Nanos free of charge.\n[…]\nIn particular, failure rates for iPods employing hard drives were usually above 20% while those with flash memory had a failure rate below 10%. In late 2005, many users complained that the surface of the first-generation iPod Nano can become scratched easily, rendering the screen unusable. A class-action lawsuit was also filed. Apple initially considered the issue a minor defect, but later began shipping these iPods with protective sleeves.\n[…]\niPod – official site at Apple Inc.\n[…]\niPod troubleshooting basics and service FAQ at Apple Inc.\n[…]\niPod (1st generation) complete disassembly at TakeItApart.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/IPhone",
        "situacao": "ok",
        "texto": "The iPhone is a line of smartphones developed and marketed by Apple since 2007. The first-generation iPhone was announced by then–Apple CEO and co-founder Steve Jobs on January 9, 2007, at Macworld 2007, and first launched in June 2007.\n[…]\nThen-Apple CEO Steve Jobs steered the original focus away from a tablet (which was later revisited in the form of the iPad) toward a phone. Apple created the device during a secretive collaboration with Cingular Wireless (later renamed AT&T Mobility) at an estimated development cost of US$150 million over 30 months. According to Jobs in 1998, the \"i\" in \"iMac\" (and later \"iPod\", \"iPhone\", and \"iPad\") stands for internet, individual, instruct, inform, and inspire.\n[…]\nApple rejected the \"design by committee\" approach that had yielded the Motorola ROKR E1, a largely unsuccessful \"iTunes phone\" made in collaboration with Motorola. Among other deficiencies, the ROKR E1's firmware limited storage to only 100 iTunes songs to avoid competing with Apple's iPod nano.\n[…]\nUp to the iPhone 4, all iPhones and other devices, such as iPod Touch models and iPads, were manufactured by Foxconn, based in Taiwan. In 2011, new CEO Tim Cook changed Apple's manufacturing strategy to diversify its supply base. The iPhone 4s in 2012 was the first model to be manufactured simultaneously by two standalone companies: Foxconn and Pegatron, the latter also based in Taiwan.\n[…]\nAndroid overtook the iPhone's installed base in 2010, according to NPD Group. During Apple's earnings call on January 27, 2021, Tim Cook said that 1 billion iPhones were being actively used worldwide.\n[…]\nApple Newton, an early personal digital assistant and the first tablet platform developed by Apple"
      },
      {
        "url": "https://en.wikipedia.org/wiki/IPad",
        "situacao": "ok",
        "texto": "The iPad is a brand of tablet computers developed and marketed by Apple since 2010. The first-generation iPad was introduced on January 27, 2010. Since then, the iPad product line has been expanded to include the smaller iPad Mini, the lighter and thinner iPad Air, and the flagship iPad Pro models. As of 2022, over 670 million iPads have been sold, making Apple the largest vendor of tablet compute\n[…]\nThe third generation of iPad was announced on March 7, 2012, and released on March 16. It uses a dual-core Apple A5X chip embedded with quad-core graphics. Its Retina Display is 2,048 by 1,536 pixels and its pixels are 50% denser than those of standard displays. Unlike the iPhone and iPod Touch's built-in applications, which work in portrait, landscape-left and landscape-right orientations, the iPad's built-in applications support the upside-down orientation of the device.\n[…]\nThe iPad was quickly successful and sold in large numbers after its 2010 launch. Analysts have noted that while Apple's previous iPod and iPhone launches took some time till taking off, the iPad was commercially popular from the beginning and faced little market competition during its first year.\n[…]\nOthers, including PC Advisor and the Sydney Morning Herald, wrote that the iPad would also compete with proliferating netbooks, most of which use Microsoft Windows. The base model's $499 price was lower than pre-release estimates by the tech press, Wall Street analysts, and Apple's competitors, all of whom were expecting a much higher entry price point.\n[…]\nDue to its popularity, the term \"iPad\" is occasionally used as a generic name for tablet computers. However, it was suggested that Apple would attempt to prevent the term from being used in this fashion.\n[…]\nSource: Apple Newsroom Archive.\n[…]\nList of Apple Inc. media events"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/IPod",
        "situacao": "ok",
        "texto": "iPod foi uma linha de reprodutores de mídia portáteis e computadores pessoais portáteis projetados e comercializados pela Apple Inc. O primeiro modelo foi lançado em 23 de outubro de 2001, cerca de 8 meses depois do lançamento do iTunes nos computadores Macintosh. A linha vendeu cerca de 450 milhões de unidades até 2022. A Apple descontinuou a linha iPod em 10 de maio de 2022.\n[…]\nEm 9 de Setembro de 2009, a Apple descontinua outros modelos do classic e permanece só com a versão de 160 GB do iPod classic.\n[…]\nTodos os iPods vêm acompanhados de fones de ouvido pequenos com fios brancos que os distinguem de outros fones semelhantes, sendo o branco uma cor escolhida para combinar com o design dos modelos de iPods originais. Os fios brancos tornaram-se um símbolo do iPod e sempre ganham visibilidade nos anúncios do produto. Alguns outros fabricantes vendem fones de ouvido brancos (como por exemplo a Sony) marcados como substitutos dos fones do iPod, mas também funcionam com outros aparelhos.\n[…]\nEm 2004 a Creative Labs, concorrente da Apple, introduziu os novos modelos de players Zen Touch e Zen Micro com fones de ouvido brancos muito similares aos da Apple. Uma porta-voz da Creative disse ao The New York Times que a empresa escolheu a cor para combinar com o aparelho e não para emular o iPod. [2][ligação inativa] Além da Creative, a Sony também inclui fones de ouvido brancos muito similares junto de seu PlayStation Portable (PSP).\n[…]\nEnquanto este iPod alterado nunca chegou a ser produzido, o modelo da HP, completamente idêntico ao iPod da Apple, era vendido sob o nome de \"Apple iPod + hp\". Vendedores deste modelo incluíam (entre outros) a gigante de varejo Wal-Mart, que inclui um aviso deixando claro que o aparelho não irá funcionar com seu serviço de download de músicas online.\n[…]\nPágina oficial do iPod (Portugal)\n[…]\nPágina oficial do iPod (Brasil)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "NFC",
      "descricao": "Tecnologia de comunicação sem fio por aproximação, de alcance de poucos centímetros, usada em pagamentos com celular e cartão."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "No celular, qual destas tecnologias sem fio funciona na menor distância, a poucos centímetros?",
    "resposta": "NFC",
    "distratores": [
      "Bluetooth",
      "Wi-Fi",
      "4G"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Near-field_communication",
      "https://en.wikipedia.org/wiki/Bluetooth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Near-field_communication",
        "situacao": "ok",
        "texto": "Near-field communication (NFC) is a set of communication protocols that enables communication between two electronic devices over a distance of 4 cm (1+1⁄2 in) or less. NFC offers a low-speed connection through a simple setup that can be used for the bootstrapping of capable wireless connections. Like other proximity card technologies, NFC is based on inductive coupling between two electromagnetic\n[…]\nNear-field communication (NFC) technology not only supports data transmission but also enables wireless charging, providing a dual functionality that is particularly beneficial for small portable devices. The NFC Forum has developed a specific wireless charging specification, known as NFC Wireless Charging (WLC), which allows devices to charge with up to 1 W of power over distances of up to 2 cm (3⁄4 in).\n[…]\nAs with proximity card technology, NFC uses inductive coupling between two nearby loop antennas effectively forming an air-core transformer. Because the distances involved are tiny compared to the wavelength of electromagnetic radiation (radio waves) of that frequency (about 22 meters), the interaction is described as near field.\n[…]\nThe RF signal for the wireless data transfer can be picked up with antennas. The distance from which an attacker is able to eavesdrop the RF signal depends on multiple parameters, but is typically less than 10 meters. Also, eavesdropping is highly affected by the communication mode. A passive device that doesn't generate its own RF field is much harder to eavesdrop on than an active device. An attacker can typically eavesdrop within 10 m of an active device and 1 m for passive devices.\n[…]\nISO/IEC 18092 / ECMA-340—Near Field Communication Interface and Protocol-1 (NFCIP-1)\n[…]\nISO/IEC 21481 / ECMA-352—Near Field Communication Interface and Protocol-2 (NFCIP-2)\n[…]\nA summary video of near-field communication"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bluetooth",
        "situacao": "ok",
        "texto": "Bluetooth is a short-range wireless technology standard that is used for exchanging data between fixed and mobile devices over short distances and building personal area networks (PANs). In the most widely used mode, transmission power is limited to 2.5 milliwatts, giving it a very short range of up to 10 metres (33 ft). It employs UHF radio waves in the ISM bands, from 2.402 GHz to 2.48 GHz.\n[…]\nOut of band (OOB): This method uses an external means of communication, such as near-field communication (NFC) to exchange some information used in the pairing process. Pairing is completed using the Bluetooth radio, but requires information from the OOB mechanism. This provides only the level of MITM protection that is present in the OOB mechanism.\n[…]\nIn a subsequent experiment, Martin Herfurt from the trifinite.group was able to do a field-trial at the CeBIT fairgrounds, showing the importance of the problem to the world. A new attack called BlueBug was used for this experiment.\n[…]\nIn August 2004, a world-record-setting experiment showed that the range of Class 2 Bluetooth radios could be extended to 1.78 km (1.11 mi) with directional antennas and signal amplifiers. This poses a potential security threat because it enables attackers to access vulnerable Bluetooth devices from a distance beyond expectation. The attacker must also be able to receive information from the victim to set up a connection.\n[…]\nIn June 2005, Yaniv Shaked and Avishai Wool published a paper describing both passive and active methods for obtaining the PIN for a Bluetooth link. The passive attack allows a suitably equipped attacker to eavesdrop on communications and spoof if the attacker was present at the time of initial pairing. The active method makes use of a specially constructed message that must be inserted at a specific point in the protocol, to make the master and slave repeat the pairing process."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Comunica%C3%A7%C3%A3o_de_Campo_Pr%C3%B3ximo",
        "situacao": "ok",
        "texto": "Comunicação por campo de proximidade (CCP), ou near-field communication (NFC), é uma tecnologia que permite a troca de informações sem fio e de forma segura entre dispositivos compatíveis que estejam próximos um do outro, que funciona a 13,56 MHz. Ou seja, logo que os dispositivos estejam suficientemente próximos, a comunicação é estabelecida automaticamente, sem a necessidade de configurações adi\n[…]\nEste tipo de conexão é muito utilizado em outros países, principalmente nos Estados Unidos, onde se pode usar como forma de pagamento, acesso, recarga, entre outros. Muitos smartphones no mercado atualmente já contêm chips NFC embutidos que enviam dados criptografados a uma distância curta (\"campo próximo\") para um leitor localizado, por exemplo, próximo a uma caixa registradora de uma loja.\n[…]\nOutra forma de automação por NFC muito utilizada nos Estados Unidos é o pagamento de bilhetes de estacionamento via celular com NFC. Recentemente a empresa Kameda Corp lançou o sistema no Brasil, com um funcionamento simples: o motorista pode pagar o bilhete na saída do estacionamento com seu próprio smartphone, desde que este tenha o aplicativo integrado ao PayPal.\n[…]\nA curta distância para a transmissão já é um ponto positivo para a segurança dela, pois dificulta a interceptação do sinal; porém, apenas isso não basta. Pensando nisso, foi criado o protocolo SWP (Single Wire Protocol). Trata-se de uma interface que oferece comunicação segura entre o cartão SIM (popularmente conhecido como chip de celular) e o chip NFC do aparelho; porém ainda não é uma adoção prática e popular, até porque a solução não está totalmente desenvolvida.\n[…]\nEntretanto, o fato de haver empresas de renome apoiando a tecnologia indica que, em um futuro próximo, poderemos vê-la comumente em uso no dia a dia.\n[…]\nEstima-se que, até o ano de 2015, a tecnologia CCP faça parte ativa do dia a dia dos usuários da América do Norte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Unix",
      "descricao": "Sistema operacional criado no fim dos anos 1960 nos Laboratórios Bell, base de muitos sistemas atuais."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes sistemas operacionais, qual é o veterano, nascido ainda no fim dos anos sessenta?",
    "resposta": "Unix",
    "distratores": [
      "MS-DOS",
      "Windows",
      "Linux"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Unix",
      "https://en.wikipedia.org/wiki/MS-DOS"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Unix",
        "situacao": "ok",
        "texto": "Unix ( , YOO-niks; trademarked as UNIX) is a family of multitasking, multi-user computer operating systems that derive from the original AT&T Unix, the development of which started in 1969 at the Bell Labs research center by Ken Thompson, Dennis Ritchie, and others.\n[…]\nList of operating systems, Unix systems, and Unix commands\n[…]\nList of Unix programming books\n[…]\nUnix time\n[…]\nRitchie, D.M.; Thompson, K. (July–August 1978). \"The UNIX Time-Sharing System\". Bell System Technical Journal. 57 (6). Archived from the original on November 3, 2010.\n[…]\n\"UNIX History\". www.levenez.com. Retrieved March 17, 2005.\n[…]\nLions, John: Lions' \"Commentary on the Sixth Edition UNIX Operating System\". with Source Code, Peer-to-Peer Communications, 1996; ISBN 1-57398-013-7\n[…]\nSalus, Peter H.: A Quarter Century of UNIX, Addison Wesley, June 1, 1994; ISBN 0-201-54777-5\n[…]\nComputer Chronicles (1985). \"UNIX\".\n[…]\nComputer Chronicles (1989). \"Unix\".\n[…]\nThe Evolution of the Unix Time-sharing System\n[…]\nThe Creation of the UNIX Operating System\n[…]\nThe Unix Tree: source code and manuals from historic releases\n[…]\nUnix History Repository—a git repository representing a reconstructed version of the Unix history on GitHub\n[…]\nThe Unix 1st Edition Manual\n[…]\nAT&T Tech Channel Archive: The UNIX Operating System: Making Computers More Productive (1982) on YouTube  (film about Unix featuring Dennis Ritchie, Ken Thompson, Brian Kernighan, Alfred Aho, and more)\n[…]\nAT&T Tech Channel Archive: The UNIX System: Making Computers Easier to Use (1982) on YouTube  (complementary film to the preceding \"Making Computers More Productive\")\n[…]\nA History of UNIX before Berkeley: UNIX Evolution: 1975-1984\n[…]\nBYTE Magazine, September 1986: UNIX and the MC68000 –  a software perspective on the MC68000 CPU architecture and UNIX compatibility"
      },
      {
        "url": "https://en.wikipedia.org/wiki/MS-DOS",
        "situacao": "ok",
        "texto": "MS-DOS ( em-ess-DOSS; acronym for Microsoft Disk Operating System, also known as Microsoft DOS) is an operating system for x86-based personal computers mostly developed by Microsoft. Collectively, MS-DOS, its alternate branding as IBM PC DOS, and a few operating systems attempting to be compatible with MS-DOS, are sometimes referred to as \"DOS\" (which is also the generic acronym for disk operating\n[…]\nMicrosoft advertised MS-DOS and Xenix together, listing the shared features of its \"single-user OS\" and \"the multi-user, multi-tasking, UNIX-derived operating system\", and promising easy porting between them. After the breakup of the Bell System, however, AT&T Computer Systems started selling UNIX System V. Believing that it could not compete with AT&T in the Unix market, Microsoft abandoned Xenix, and in 1987 transferred ownership of Xenix to the Santa Cruz Operation (SCO).\n[…]\nSupport for IBM's XT 10 MB hard disk drives, support up to 16 MB or 32 MB FAT12-formatted hard disk drives depending on the formatting tool shipped by OEMs, user-installable device drivers, tree-structure filing system, Unix-like inheritable redirectable file handles, non-multitasking child processes, an improved Terminate and Stay Resident (TSR) API, environment variables, device driver support, FOR and GOTO loops in batch files, ANSI.SYS.\n[…]\nIn the business world, the 808x-based machines that MS-DOS was tied to faced competition from the Unix operating system; the latter ran on many different hardware architectures. Microsoft itself sold a version of Unix for the PC called Xenix.\n[…]\nWindows NT-based operating systems boot to a kernel whose purpose is to load Windows and run the system. One cannot run Win32 applications in the loader system in the manner that OS/2, UNIX or consumer versions of Windows can launch character-mode sessions."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Unix",
        "situacao": "ok",
        "texto": "Unix (inglês: [ˈju:nɪks]) é um sistema operativo portável, multitarefa e multiutilizador originalmente criado por Ken Thompson, Dennis Ritchie, entre outros, que trabalhavam nos Laboratórios Bell da AT&T.\n[…]\nO sistema Unix possui dois tipos de usuários: o usuário root (também conhecido como superusuário), que possui a missão de administrar o sistema, podendo manipular todos os recursos do sistema operacional; e os usuários comuns, que possuem direitos limitados.\n[…]\nO Unix possui recursos de apoio à comunicação de dados, que proporcionam sua integração com outros sistemas Unix, e até com outros sistemas operacionais distintos. A integração com sistemas heterogêneos permite as seguintes facilidades:\n[…]\nutilização dos terminais de uma máquina Unix como terminais de outras máquinas remotas, mesmo com sistemas operacionais distintos.\n[…]\nEsta é uma lista de programas de computador para o sistema operacional Unix e os sistemas compatíveis, como o Linux. Os comandos do Unix tornam-se acessíveis ao usuário a partir do momento em que ele realiza o login no sistema. Se o usuário utiliza tais comandos, então ele se encontra no modo shell, também chamado de modo texto (ou Unix tradicional). Quando estiver utilizando o modo gráfico, o usuário também poderá se utilizar de tais comandos desde que abra uma janela de terminal (Xterm).\n[…]\nA linha de comando do sistema operacional Unix permite a realização de inúmeras tarefas através de seus comandos, de manipulação de arquivos a verificação do tráfego em rede. Para exibir uma descrição detalhada de cada comando abra uma console ou xterm e digite  man comando, onde comando é o comando em questão.\n[…]\nFilosofia Unix\n[…]\nEra Unix\n[…]\nSistema operacional tipo Unix\n[…]\nUnix.org",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Byte",
      "descricao": "Unidade de informação digital formada por oito bits, base das medidas de armazenamento como megabyte e gigabyte."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas unidades de armazenamento de dados equivale à maior quantidade?",
    "resposta": "Petabyte",
    "distratores": [
      "Terabyte",
      "Gigabyte",
      "Megabyte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Byte",
      "https://en.wikipedia.org/wiki/Metric_prefix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Byte",
        "situacao": "ok",
        "texto": "The byte is a unit of digital information that  commonly consists of eight bits. Historically, the byte was the number of bits used to encode a single character of text in a computer and for this reason it is the smallest addressable unit of memory in many computer architectures. To disambiguate arbitrarily sized bytes from the common 8-bit definition, network protocol documents such as the Intern\n[…]\nThe development of eight-bit microprocessors in the 1970s popularized this storage size. Microprocessors such as the Intel 8080, the direct predecessor of the 8086, could also perform a small number of operations on the four-bit pairs in a byte, such as the decimal-add-adjust (DAA) instruction. A four-bit quantity is often called a nibble, also nybble, which is conveniently represented by a single hexadecimal digit.\n[…]\nUnit multiples of the byte are defined in a metric system based on the powers of 10, following the International System of Units (SI), which defines, for example, the prefix kilo as 1000 (103), as well as a binary system based on powers of two. Historically, the binary system used the identical prefixes of the metric system, but quantified differently. The nomenclature of the latter system has led to confusion.\n[…]\nMany programming languages define the data type byte.\n[…]\nHowever almost all modern software would not actually work if compiled with a byte size other than 8 bit. Further POSIX says \"A byte is composed of a contiguous sequence of 8 bits.\" Today, non-8-bit bytes only find niche application like in DSPs.\n[…]\n\"2.5 Byte manipulation\" (PDF). Programming with the PDP-10 Instruction Set (PDF). PDP-10 System Reference Manual. Vol. 1. Digital Equipment Corporation (DEC). August 1969. pp. 2-15 – 2-17. Archived (PDF) from the original on 2017-04-05. Retrieved 2017-04-05."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Metric_prefix",
        "situacao": "ok",
        "texto": "A metric prefix is a unit prefix that precedes a basic unit of measure to indicate a multiple or submultiple of the unit. All metric prefixes used today are decimal. Each prefix has a unique symbol that is prepended to any unit symbol. The prefix kilo, for example, may be added to gram to indicate multiplication by one thousand: one kilogram is equal to one thousand grams.\n[…]\nDuring mathematical operations, prefixes are treated as multiplicative factors. For example, 5 km is treated as 5000 m, which allows all quantities based on the same unit to be factored together even if they have different prefixes.\n[…]\nPrefixes for the SI standard unit second are most commonly encountered for quantities less than one second. For larger quantities, minutes (60 seconds), hours (60 minutes) and days (24 hours) are mentioned in the SI Brochure as widely used non-SI units. When speaking of spans of time, the length of the day is usually standardised to 86400 seconds so as not to create issues with the irregular leap second.\n[…]\nThe financial and general news media mostly use m or M, b or B, and t or T as abbreviations for million, billion (109) and trillion (1012), respectively, for large quantities, typically currency and population.\n[…]\nISO/IEC 80000 – International standard on physical quantities and units of measurement"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Byte",
        "situacao": "ok",
        "texto": "Um byte, é um dos tipos de dados integrais em computação. É usado com frequência para especificar o tamanho ou quantidade da memória ou da capacidade de armazenamento de um certo dispositivo, independentemente do tipo de dados. Cada uma dessas unidades de informação que implicam uma escolha é chamada de dí­gito binário, ou, no original inglês, binary digit, ou simplesmente bit, a menor unidade ger\n[…]\nNo início da computação chegou-se a utilizar 1 byte = 6 bits no código BCD pois com seis bits (64 caracteres) era possível representar todo o alfabeto alfanumérico A-Z, 0-9 além de alguns caracteres especiais. Em terminais e impressoras teletipo (TTY), conectados através de interfaces seriais com o computador central, também usou-se uma variante na comunicação de dados onde 1 byte = 7 bits e ainda hoje é possível configurar uma interface RS232 para operar em 7 bits de dados.\n[…]\nA transcodificação BASE64 usada até hoje em documentos MIME na Internet reflete a dificuldade passada de comunicação de dados em 8 bits entre diferentes computadores. A primeira codificação de 1 byte = 8 bits deve-se à IBM com a criação do código EBCDIC em 1960. A partir do sucesso dos computadores IBM, padronizou-se que 1 byte = 8 bits, surgindo também o código ASCII de 8 bits em 1961.\n[…]\nNeste artigo exprimem-se as quantidades em prefixo binário (e não no sistema internacional de unidades), que é uma forma de quantificação utilizada em informática onde se torna mais útil utilizar potências de dois do que potências de dez.\n[…]\n1 Byte = 8 bits\n[…]\n1 024 Byte = 8 192 Bits\n[…]\nDe acordo com Martino (2014), cada letra de uma palavra é uma unidade mínima de informação, assim como o byte é formado por números binários que combinados geram elementos novos e como consequência, comunicação entre sistemas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Memória RAM",
      "descricao": "Memória de acesso aleatório do computador, que guarda temporariamente os dados em uso e os perde ao ser desligada."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes componentes do computador esquece tudo o que guarda quando a energia é cortada?",
    "resposta": "Memória RAM",
    "distratores": [
      "Disco rígido",
      "SSD",
      "Pen drive"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Random-access_memory",
      "https://en.wikipedia.org/wiki/Volatile_memory"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Random-access_memory",
        "situacao": "ok",
        "texto": "Random-access memory (RAM; ) is a form of electronic computer memory that can be read and changed in any order, typically used to store working data and machine code.\n[…]\nNon-volatile RAM has also been developed and other types of non-volatile memories allow random access for read operations, but either do not allow write operations or have other kinds of limitations. These include most types of ROM and NOR flash memory.\n[…]\nLatches built out of triode vacuum tubes, and later, out of discrete transistors, were used for smaller and faster memories such as registers. Such registers were relatively large and too costly to use for large amounts of data; generally, only a few dozen or few hundred bits of such memory could be provided.\n[…]\nConstructing a memory unit of many gigabytes with a response time of one clock cycle is difficult or impossible. Modern CPUs often still have 0 wait state cache memory, but, due to the bandwidth limitations of chip-to-chip communication, it must reside on the same chip as the CPU cores. It must also be constructed from static RAM, which is far more expensive than the dynamic RAM used for larger memories.\n[…]\nThe main method of bridging the gap is the use of caches; small amounts of high-speed memory that houses data associated with recent operations near the processor, speeding up access to this data in cases where they are called upon frequently. Multiple levels of caching have been developed to deal with the widening gap, and the performance of high-speed modern computers relies on evolving caching techniques."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volatile_memory",
        "situacao": "ok",
        "texto": "Volatile memory, in contrast to non-volatile memory, is computer memory that requires power to maintain the stored information; it retains its contents while powered on but when the power is interrupted, the stored data is quickly lost."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mem%C3%B3ria_de_acesso_aleat%C3%B3rio",
        "situacao": "ok",
        "texto": "A memória de acesso randômico(pt-BR) ou de acesso aleatório(pt-PT?) (do inglês random-access memory, conhecido pela abreviatura RAM), também chamado de memória volátil de leitura e escrita, é uma memória temporária computacional de acesso rápido; ou seja, é um local de armazenamento temporário de informações digitais usada pelo processador para armazenar informações temporariamente e que possui um\n[…]\nO termo acesso aleatório identifica a capacidade de se ter acesso a qualquer posição e em qualquer momento, por oposição ao acesso sequencial imposto por alguns dispositivos de armazenamento, como fitas magnéticas. O nome não é verdadeiramente apropriado, já que outros tipos de memória (como a ROM) também permitem o acesso aleatório a seu conteúdo. O nome mais apropriado seria:  Memória de Leitura e Escrita, que está expressa na programação computacional.\n[…]\nApesar do conceito de memória operacional de acesso aleatório ser bastante amplo, atualmente o termo é usado apenas para definir um dispositivo eletrônico que o implementa, uma vez que atualmente essa memória se encontra espalhada dentro do próprio sistema dos atuais computadores (sistema por assim dizer \"nervoso\" do computador, como o humano), basicamente um tipo específico de chip.\n[…]\nExistem basicamente dois tipos de memória de acesso aleatório em uso: SDR e DDR. As SDRs são o tipo tradicional, onde o controlador de memória realiza apenas uma leitura por ciclo, enquanto as DDR são mais rápidas, pois fazem duas leituras por ciclo. O desempenho não chega a dobrar, pois o acesso inicial continua demorando o mesmo tempo, mas melhora bastante. Os pentes de memória SDR são usados em micros antigos: Pentium II e Pentium III e os primeiros Athlons e Durons soquete A.\n[…]\nParidade de memória\n[…]\nMemória de ferrite\n[…]\nMemória do computador\n[…]\nDaniel Saraiva, J.E. MEMÓRIA ARTIFICIAL Editora Biblioteca da Universidade de oxford, 2000.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pixel",
      "descricao": "Menor elemento de uma imagem digital ou de uma tela."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na maioria das telas coloridas, cada pixel é formado por pontinhos de quais três cores?",
    "resposta": "Vermelho, verde e azul",
    "distratores": [
      "Vermelho, amarelo e azul",
      "Ciano, magenta e amarelo",
      "Vermelho, verde e amarelo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pixel",
      "https://en.wikipedia.org/wiki/RGB_color_model"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pixel",
        "situacao": "ok",
        "texto": "In digital imaging, a pixel (abbreviated px), pel, or picture element is the smallest addressable element of a raster image. In a display device, dot matrix printer, or ASCII art a pixel is the smallest element whose output can generally be controlled independently.\n[…]\nBecause 1 radian equals (180/π) × 3,600 ≈ 206,265 arcseconds, the formula is commonly written as s = 206.265 p / f when p is measured in micrometers and f in millimeters, giving s in arcseconds per pixel.\n[…]\nIn CSS, the unit px is defined relative to a reference pixel. One CSS pixel equals 1/96 of a CSS inch. The reference pixel is based on the visual angle of one pixel on a 96 dpi device viewed from an arm's length of 28 inches (71 cm), corresponding to about 0.0213 degrees and 0.26 mm at that distance. A CSS pixel may therefore correspond to multiple physical device pixels on a high-density display.\n[…]\nThe pixel count of an image is calculated by multiplying its width by its height in pixels. This count describes the image's dimensions but does not, by itself, determine its sharpness or overall image quality.\n[…]\nSome sensors support pixel binning, in which signals from neighboring photosites are combined and read as one output pixel. This lowers the output resolution while increasing sensitivity and can improve performance in low light. For example, a four-to-one binning mode combines the data from four photosites into one output value. Some 200 MP mobile sensors can use 4 × 4 binning, combining 16 photosites to produce a 12.5 MP output image.\n[…]\nA Pixel Is Not A Little Square: Microsoft Memo by computer graphics pioneer Alvy Ray Smith.\n[…]\nSquare and non-Square Pixels: Technical info on pixel aspect ratios of modern video standards (480i, 576i, 1080i, 720p), plus software implications."
      },
      {
        "url": "https://en.wikipedia.org/wiki/RGB_color_model",
        "situacao": "ok",
        "texto": "The RGB color model is an additive color model in which the red, green, and blue primary colors of light are added together in various ways to reproduce a broad array of colors. The name of the model comes from the initials of the three additive primary colors— red, green, and blue.\n[…]\nModern systems encode pixel color values by devoting 8 bits to each of the R, G, and B components. RGB information can be either carried directly by the pixel bits themselves or provided by a separate color look-up table (CLUT) if indexed color graphic modes are used.\n[…]\nThis indirect scheme restricts the number of available colors in an image CLUT—typically 256-cubed (8 bits in three color channels with values of 0–255)—although each color in the RGB24 CLUT table has only 8 bits representing 256 codes for each of the R, G, and B primaries, making 16,777,216 possible colors. However, the advantage is that an indexed-color image file can be significantly smaller than it would be with only 8 bits per pixel for each primary.\n[…]\nModern storage, however, is far less costly, greatly reducing the need to minimize image file size. By using an appropriate combination of red, green, and blue intensities, many colors can be displayed. Current typical display adapters use up to 24 bits of information for each pixel: 8-bit per component multiplied by three components (see the Numeric representations section below (24 bits = 2563, each primary value of 8 bits with values of 0–255).\n[…]\nAlong with the creative processing, such interventions on digital images can damage the color accuracy and image detail, especially where the gamut is reduced. Professional digital devices and software tools allow for 48 bpp (bits per pixel) images to be manipulated (16 bits per channel), to minimize any such damage."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pixel",
        "situacao": "ok",
        "texto": "Pixel é o menor elemento em um dispositivo de exibição (por exemplo, um monitor), ao qual é possível atribuir-se uma cor. De uma forma mais simples, um pixel é o menor ponto que forma uma imagem digital, sendo que um conjunto de pixels com várias cores formam a imagem inteira.\n[…]\nJá faz parte do léxico do português, sendo aportuguesada como píxel (plural \"píxeis\").\n[…]\nEm um monitor colorido, cada pixel é composto por um conjunto de 3 pontos: verde, vermelho e azul. Nos melhores monitores, cada um desses pontos é capaz de exibir 256 tonalidades diferentes (o equivalente a 8 bits) e combinando tonalidades dos três pontos é então possível exibir pouco mais de 16,7 milhões de cores diferentes (exatamente 16 777 216). Em resolução de 640 x 480 temos 307 200 pixels, a 800 x 600 temos 480 000 pixels, a 1024 x 768 temos 786 432 pixels e assim por diante.\n[…]\nMedidas de pixels podem ser expressas como um único número, por exemplo, uma câmera digital de \"três-megapixels\", que tem um valor nominal de três milhões de pixels; ou como um par de números, por exemplo, um monitor com \"640 por 480\", onde se tem 640 pixels de um lado ao outro do monitor e 480 de cima para baixo (monitor VGA), e, portanto, tem um total de\n[…]\nCom tantas telas diferentes fabricadas em smartphones e tablets, foram criados nomes padrões para definir cada resolução, correspondentes à altura e à largura da tela.\n[…]\nTamanho da imagem impressa em qualidade fotográfica (300 DPI (Dot Per Inch), Pontos Por Polegada ou PPP - Pixel Por Polegada)\n[…]\nPixel art\n[…]\nPixel morto\n[…]\nA Quick Guide to Digital Video Resolution and Pixel Aspect Ratios\n[…]\nA Pixel Is Not A Little Square: Technical Memo by computer graphics pioneer Alvy Ray Smith.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "ENIAC",
      "descricao": "Computador eletrônico digital de uso geral construído nos Estados Unidos e concluído em 1945."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em vez de chips, o ENIAC, concluído em 1945, fazia seus cálculos com cerca de dezoito mil peças de quê?",
    "resposta": "Válvulas eletrônicas",
    "distratores": [
      "Transistores",
      "Engrenagens",
      "Ímãs de ferrite"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/ENIAC"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/ENIAC",
        "situacao": "ok",
        "texto": "ENIAC (; Electronic Numerical  Integrator and Computer) was the first programmable, electronic, general-purpose digital computer, completed in 1945. Other computers had some of these features, but ENIAC was the first to have them all. ENIAC was Turing-complete and able to solve \"a large class of numerical problems\" through reprogramming.\n[…]\nENIAC was completed in 1945 and first put to work for practical purposes on December 10, 1945.\n[…]\nOne year into the Ballistic Research Laboratory's three-year ENIAC project, it came to the attention of John von Neumann, a mathematician working on the hydrogen bomb at Los Alamos National Laboratory. In December 1945, the ENIAC was used to calculate thermonuclear reactions. This data was used to support research on building a hydrogen bomb.\n[…]\nAll but two of the Colossus machines were dismantled in 1945; the remaining two were used to decrypt Soviet messages by GCHQ until the 1960s. The public demonstration for ENIAC was developed by Snyder and Jennings who created a demo that would calculate the trajectory of a missile in 15 seconds, a task that would have taken several weeks for a human computer.\n[…]\nOral history interview with J. Presper Eckert, Charles Babbage Institute, University of Minnesota. Eckert, a co-inventor of ENIAC, discusses its development at the University of Pennsylvania's Moore School of Electrical Engineering; describes difficulties in securing patent rights for ENIAC and the problems posed by the circulation of John von Neumann's 1945 First Draft of the Report on EDVAC, which placed the ENIAC inventions in the public domain. Interview by Nancy Stern, 28 October 1977.\n[…]\nENIAC museum at the University of Pennsylvania\n[…]\nENIAC specifications from Ballistic Research Laboratories Report No. 971 December 1955, (A Survey of Domestic Electronic Digital Computing Systems)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/ENIAC",
        "situacao": "ok",
        "texto": "Electronic Numerical Integrator and Computer (abreviado ENIAC; em português: computador integrador numérico eletrônico) foi o primeiro dispositivo computacional eletroeletrônico e digital de grande escala, que entrou em funcionamento em fevereiro de 1946 pelos cientistas norte-americanos John Eckert e John Mauchly (da Electronic Control Company). Comenta-se que o primeiro eletroeletrônico foi o Ma\n[…]\nPossuía  cerca de 18 000 válvulas termiônicas, de 160 kW de potência.\n[…]\nQuando em operação, outrora complexos cálculos de balística passaram a realizar–se em alucinantes 30 segundos, quando com as calculadoras manuais que até aí se usavam levava 12 horas para se obter o mesmo resultado. Apesar dos resultados se darem mais rapidamente, ele não conseguia operar por muito tempo sem que tivesse algum problema em suas válvulas e quando isso acontecia, tinham que tentar descobrir qual das muitas válvulas apresentou problema.\n[…]\nO programa desenvolvido com a ajuda dos programadores do ENIAC foi executado em novembro de 1945 e as respostas dadas por ele revelaram muitas falhas no projeto proposto para a bomba H.\n[…]\nO ENIAC torna-se obsoleto e economicamente inviável de manter após 10 anos de operação, tendo sido desativado no dia 2 de outubro de 1955 e posteriormente desmontado. Hoje encontram-se peças do ENIAC por muitos museus do mundo, incluindo o Smithsonian em Washington D.C e no local preciso onde foi construído, na Moore School for Electrical Engineering da Universidade da Pensilvânia.\n[…]\nCom o tempo, os transístores passaram a ser a base da electrónica, seguindo-se a VLSI (Very Large Scale Integration), ou seja, a construção de circuitos cada vez menores por forma a que pudessem ser mais leves e despender menos energia, por terem menos superfície para a dissipação de energia por calor. Esta miniaturização permitiu que se tivesse a mesma capacidade de cálculo de um ENIAC na palma de uma mão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Sistema hexadecimal",
      "descricao": "Sistema de numeração de base dezesseis, muito usado na computação."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Além dos algarismos de zero a nove, que símbolos o sistema hexadecimal usa para chegar a dezesseis dígitos?",
    "resposta": "Letras de A a F",
    "distratores": [
      "Letras de A a E",
      "Letras de A a G",
      "Letras gregas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hexadecimal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hexadecimal",
        "situacao": "ok",
        "texto": "Hexadecimal (or hex for short) is a positional numeral system for representing a numeric value as base 16. For the most common convention, a digit is represented as \"0\" to \"9\" in the same way as decimal and as a letter of the alphabet from \"A\" to \"F\" (either upper or lower case) for the digits with decimal value 10 to 15.\n[…]\nCommon Lisp uses the prefixes #x and #16r. Setting the variables *read-base* and *print-base* to 16 can also be used to switch the reader and printer of a Common Lisp system to hex representation for reading and printing numbers. Thus hex numbers can be represented without the #x or #16r prefix code, when the input or output base has been changed to 16.\n[…]\nJust as decimal numbers can be represented in exponential notation, so too can hex numbers. P notation uses the letter P (or p, for \"power\"), whereas E (or e) serves a similar purpose in decimal E notation. The number after the P is decimal and represents the binary exponent. Increasing the exponent by 1 multiplies by 2, not 16: 20p0 = 10p1 = 8p2 = 4p3 = 2p4 = 1p5. Usually, the number is normalized so that the hex digits start with 1. (zero is usually 0 with no P).\n[…]\n\"16\" may be replaced with any other base that may be desired.\n[…]\nThe traditional Chinese units of measurement were base-16. For example, one jīn (斤) in the old system equals sixteen taels. The suanpan (Chinese abacus) can be used to perform hex calculations such as additions and subtractions.\n[…]\nNystrom among other things suggested hexadecimal time, which subdivides a day by 16,\n[…]\nAlfred B. Taylor used senidenary in his mid-1800s work on alternative number bases, although he rejected base 16 because of its \"incommodious number of digits\".\n[…]\nBailey–Borwein–Plouffe formula – Formula for computing the nth base-16 digit of π\n[…]\nHexadecimal time – Base 16 time format proposed in 1863"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_hexadecimal",
        "situacao": "ok",
        "texto": "O sistema hexadecimal é um sistema de numeração posicional que representa os números em base 16, portanto empregando 16 símbolos.\n[…]\n, o que, segundo o teorema geral da numeração posicional, equivale ao número em base 16\n[…]\n16\n[…]\n, dois dígitos hexadecimais correspondem exactamente —permitem representar a mesma linha de inteiros— a um byte.\n[…]\nDevido ao sistema decimal geralmente usado para a numeração apenas dispor de dez símbolos, deve-se incluir seis letras adicionais para completar o sistema. O conjunto de símbolos fica, portanto, assim\n[…]\nAssim como nos outros sistemas numéricos, após o uso de todos os dígitos hexadecimais, se inicia a repetição com a adição de outro dígito:\n[…]\nPode parecer pouca a diferença para os números decimais, porém esses 6 dígitos a mais fazem muita diferença. Por exemplo, com dois dígitos, em decimal, é possível fazer 100 combinações diferentes. Em hexadecimal, esse número sobe para 256.\n[…]\nUm dígito em hexadecimal pode representar um número binário de 4 dígitos, dessa forma, para transformar um binário em hexadecimal, separamos o binário em grupos de 4 bits, começando pela direita.\n[…]\nÉ possível realizar adições diretamente com números hexadecimais. Basta lembrar que os dígitos 0-9 equivalem aos mesmos em decimal, e que os dígitos a-f equivalem aos decimais 10-15. Assim como na soma de decimais, devemos começar pela direita.\n[…]\nSe a soma dos dígitos for menor que 15 (em decimal), registre o valor (em hexadecimal)\n[…]\nSe a soma dos dígitos for maior que 15, subtraia 16 do resultado, registre o numero hexadecimal e gere um carry na próxima coluna\n[…]\n16\n[…]\n16\n[…]\nConversão entre sistemas numéricos\n[…]\nLista de cores em hexadecimal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Máquina analítica",
      "descricao": "Computador mecânico de uso geral projetado por Charles Babbage no século dezenove, nunca concluído."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na máquina analítica de Charles Babbage, a parte que fazia as contas, equivalente ao processador, tinha que nome?",
    "resposta": "Moinho",
    "distratores": [
      "Armazém",
      "Tear",
      "Engenho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Analytical_engine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Analytical_engine",
        "situacao": "ok",
        "texto": "The analytical engine was a proposed digital mechanical general-purpose computer designed by the English mathematician and computer pioneer Charles Babbage. It was first described in 1837 as the successor to Babbage's difference engine, which was a design for a simpler mechanical calculator.\n[…]\nThe cyberpunk novelists William Gibson and Bruce Sterling co-authored a steampunk novel of alternative history titled The Difference Engine in which Babbage's difference and analytical engines became available to Victorian society. The novel explores the consequences and implications of the early introduction of computational technology.\n[…]\nMoriarty by Modem, a short story by Jack Nimersheim, describes an alternative history where Babbage's analytical engine was indeed completed and had been deemed highly classified by the British government. The characters of Sherlock Holmes and Moriarty had in reality been a set of prototype programs written for the analytical engine.\n[…]\nThis short story follows Holmes as his program is implemented on modern computers and he is forced to compete against his nemesis yet again in the modern counterparts of Babbage's analytical engine.\n[…]\nA similar setting to The Difference Engine is used by Sydney Padua in the webcomic The Thrilling Adventures of Lovelace and Babbage. It features an alternative history where Ada Lovelace and Babbage have built the analytical engine and use it to fight crime at Queen Victoria's request. The comic is based on thorough research on the biographies of and correspondence between Babbage and Lovelace, which is then twisted for humorous effect.\n[…]\nCharles Babbage and Ada Lovelace appear in an episode of Doctor Who, \"Spyfall Part 2\", where the engine is displayed and referenced.\n[…]\nPlan 28: Building Charles Babbage's Analytical Engine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%A1quina_anal%C3%ADtica",
        "situacao": "ok",
        "texto": "A máquina analítica, também conhecido como engenho analítico foi proposto pelo professor de matemática e pioneiro da ciência da computação Charles Babbage. A maquina foi descrita pela primeira vez em 1837, como a sucessora da máquina diferencial (um design para um computador mecânico mais simples).\n[…]\nIntermitentemente de 1880 a 1910, o filho de Babbage, Henry Prevost Babbage, estava construindo uma parte do moinho e do aparato de impressão. Em 1910, ela foi capaz de calcular uma lista (com falhas) de múltiplos de pi. Isso constituía apenas uma pequena parte da máquina; ela não era programável e não tinha armazenamento.\n[…]\n(Imagens populares dessa seção às vezes foram rotuladas erroneamente, dando a entender que era todo o moinho ou mesmo toda a máquina.) O \"moinho da máquina analítica\" de Henry Babbage está em exibição no Science Museum em Londres. Henry também propôs a construção de uma versão de demonstração da máquina completa, com uma capacidade de armazenamento menor: \"talvez para uma primeira máquina, dez (colunas) seriam suficientes, com quinze rodas em cada uma\".\n[…]\nO Leitor de Cartões da Máquina não é restrito a simplesmente processar os cartões em uma cadeia, um após o outro, do início ao fim. Ele pode, além disso, ser direcionado pelos próprios cartões que lê e aconselhado se a alavanca de inicialização do Moinho estiver ativada, avançar a cadeia de cartões para frente, pulando os cartões intermediários, ou para trás, fazendo com que os cartões previamente lidos sejam processados novamente.\n[…]\n«Sketch of The Analytical Engine Invented by Charles Babbage, By L. F. MENABREA of Turin, Officer of the Military Engineers from the Bibliothèque Universelle de Genève, October, 1842, No. 82, With notes upon the Memoir by the Translator ADA AUGUSTA, COUNTESS OF LOVELACE» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Bluetooth",
      "descricao": "Padrão de comunicação sem fio de curto alcance entre aparelhos eletrônicos, criado nos anos noventa."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O símbolo do Bluetooth junta as iniciais do rei Haroldo Dente-Azul escritas em qual tipo de alfabeto?",
    "resposta": "Runas nórdicas",
    "distratores": [
      "Alfabeto grego",
      "Hieróglifos egípcios",
      "Alfabeto cirílico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bluetooth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bluetooth",
        "situacao": "ok",
        "texto": "Bluetooth is a short-range wireless technology standard that is used for exchanging data between fixed and mobile devices over short distances and building personal area networks (PANs). In the most widely used mode, transmission power is limited to 2.5 milliwatts, giving it a very short range of up to 10 metres (33 ft). It employs UHF radio waves in the ISM bands, from 2.402 GHz to 2.48 GHz.\n[…]\nIn a single-mode implementation, only the low energy protocol stack is implemented. Dialog Semiconductor, STMicroelectronics, AMICCOM, CSR, Nordic Semiconductor and Texas Instruments have released single mode Bluetooth Low Energy solutions.\n[…]\nBluetooth Channel Sounding\n[…]\nAn overview of Bluetooth vulnerabilities exploits was published in 2007 by Andreas Becker.\n[…]\nBluetooth uses the radio frequency spectrum in the 2.402 GHz to 2.480 GHz range, which is non-ionizing radiation, of similar bandwidth to that used by wireless and mobile phones. No specific harm has been demonstrated, even though wireless transmission has been included by IARC in the possible carcinogen list. Maximum power output from a Bluetooth radio is 100 mW for Class 1, 2.5 mW for Class 2, and 1 mW for Class 3 devices.\n[…]\nThe Bluetooth Innovation World Cup, a marketing initiative of the Bluetooth Special Interest Group (SIG), was an international competition that encouraged the development of innovations for applications leveraging Bluetooth technology in sports, fitness and health care products. The competition aimed to stimulate new markets.\n[…]\nThe Bluetooth Innovation World Cup morphed into the Bluetooth Breakthrough Awards in 2013. Bluetooth SIG subsequently launched the Imagine Blue Award in 2016 at Bluetooth World. The Bluetooth Breakthrough Awards program highlights the most innovative products and applications available today, prototypes coming soon, and student-led projects in the making.\n[…]\nSpecifications at Bluetooth SIG"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bluetooth",
        "situacao": "ok",
        "texto": "Bluetooth é um padrão de tecnologia sem fio de curto alcance usado para troca de dados entre dispositivos fixos e móveis em distâncias curtas e construção de redes de área pessoal (PANs). No modo mais utilizado, a potência de transmissão é limitada a 2,5 miliwatts, proporcionando um alcance muito curto de até 10 metros (33 pés). Emprega ondas de rádio UHF nas bandas ISM, de 2,402 GHz a 2,48 GHz.\n[…]\nBluetooth é a versão anglicizada do escandinavo Blåtand / Blåtann (ou em nórdico antigo blátǫnn). Era o epíteto do rei Harald Bluetooth, que uniu as diferentes tribos dinamarquesas em um único reino; Kardach escolheu o nome para sugerir que o Bluetooth une protocolos de comunicação de maneira semelhante.\n[…]\nO logotipo Bluetooth  é uma runa vinculada que mescla as runas Younger Futhark  (ᚼ, Hagall) e  (ᛒ, Bjarkan), as iniciais de Harald.\n[…]\nEm uma implementação de modo único, apenas a pilha de protocolos de baixa energia é implementada. Dialog Semiconductor, STMicroelectronics, AMICCOM, CSR, Nordic Semiconductor e Texas Instruments. lançaram soluções de baixa energia Bluetooth de modo único.\n[…]\nO vírus foi descrito pela primeira vez pela Kaspersky Lab e exige que os usuários confirmem a instalação de software desconhecido antes que ele possa se propagar. O vírus foi escrito como uma prova de conceito por um grupo de criadores de vírus conhecido como \"29A\" e enviado para grupos de antivírus. Portanto, deve ser considerado como uma ameaça de segurança potencial (mas não real) à tecnologia Bluetooth ou Symbian OS, pois o vírus nunca se espalhou fora desse sistema.\n[…]\nA Bluetooth Innovation World Cup, uma iniciativa de marketing do Bluetooth Special Interest Group (SIG), foi uma competição internacional que incentivou o desenvolvimento de inovações para aplicações que utilizam a tecnologia Bluetooth em produtos esportivos, fitness e de saúde. A competição visava estimular novos mercados.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Máquina Enigma",
      "descricao": "Máquina eletromecânica de cifrar com rotores, usada pelos militares alemães na Segunda Guerra Mundial."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que peças giratórias da máquina Enigma mudavam de posição a cada tecla, trocando o embaralhamento das letras?",
    "resposta": "Rotores",
    "distratores": [
      "Válvulas",
      "Bobinas",
      "Pistões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Enigma_machine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Enigma_machine",
        "situacao": "ok",
        "texto": "The Enigma machine is a cipher device developed and used in the early- to mid-20th century to protect commercial, diplomatic, and military communication. It was employed extensively by Nazi Germany during World War II, in all branches of the German military. The Enigma machine was considered so secure that it was used to encipher the most top-secret messages.\n[…]\nIn August 1935, the Air Force introduced the Wehrmacht Enigma for their communications.\n[…]\nThe Enigma was influential in the field of cipher machine design, spinning off other rotor machines. Once the British discovered Enigma's principle of operation, they created the Typex rotor cipher, which the Germans believed to be unsolvable. Typex was originally derived from the Enigma patents; Typex even includes features from the patent descriptions that were omitted from the actual Enigma machine. The British paid no royalties for the use of the patents.\n[…]\nMachines like the SIGABA, NEMA, Typex, and so forth, are not considered to be Enigma derivatives as their internal ciphering functions are not mathematically identical to the Enigma transform.\n[…]\nCryptanalysis of the Enigma\n[…]\nErhard Maertens—investigated Enigma security\n[…]\nGisbert Hasenjaeger—responsible for Enigma security\n[…]\nTypex—cipher machine used by the British in the Second World War, based on the principles of the commercial Enigma machine\n[…]\nGordon Corera, Poland's overlooked Enigma codebreakers, BBC News Magazine, 4 July 2014\n[…]\nLong-running list of places with Enigma machines on display\n[…]\nEnigma machines on the Crypto Museum Web site\n[…]\nPictures of a four-rotor naval enigma, including Flash (SWF) views of the machine Archived 24 July 2011 at the Wayback Machine\n[…]\nEnigma Pictures and Demonstration by NSA Employee at RSA Archived 4 January 2025 at the Wayback Machine\n[…]\nProcess of building an Enigma M4 replica Archived 18 March 2013 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Enigma_%28m%C3%A1quina%29",
        "situacao": "ok",
        "texto": "Enigma foi uma máquina eletromecânica de criptografia com rotores. Utilizada tanto para criptografar como para descriptografar códigos de guerra, foi usada de várias formas na Europa a partir dos anos 1920.\n[…]\nTal como outras máquinas com rotores, a Máquina Enigma é uma combinação de sistemas mecânicos e elétricos. O mecanismo consiste num teclado, num conjunto de discos rotativos chamados rotores, dispostos em fila; e de um mecanismo de avanço que faz andar alguns rotores uma posição quando uma tecla é pressionada.\n[…]\nO mecanismo varia entre diversas versões da máquina, mas o mais comum é o rotor colocado à direita avançar uma posição com cada tecla premida, e ocasionalmente despoletar o movimento rotativo dos restantes rotores, à sua esquerda, à semelhança do mecanismo conta-quilómetros de um automóvel. O movimento contínuo dos rotores provoca diferentes combinações na criptografia.\n[…]\nOs rotores (também chamados rodas ou tambores — Walzen em alemão) são o coração da máquina Enigma. Com aproximadamente 10 cm de diâmetro, cada um é um disco feito de borracha dura ou baquelite com uma série de pinos de metal salientes dispostos em círculo num dos lados; no outro lado situa-se uma série de contactos eléctricos. Os pinos e os contactos eléctricos representam o alfabeto — tipicamente as 26 letras de A até Z.\n[…]\nA máquina de criptografia britânica, Typex, e várias americanas, como a SIGABA ou a M-134-C, eram semelhantes à Enigma nos seus princípios básicos, mas muito mais seguras. A primeira máquina de criptografia com rotores moderna, criada por Edward Hebern, era bastante menos segura, o que foi apontado por William F. Friedman quando ela foi oferecida ao governo dos Estados Unidos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Mecanismo de Anticítera",
      "descricao": "Antigo aparelho grego de engrenagens, encontrado num naufrágio perto da ilha de Anticítera, usado para prever posições astronômicas."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O mecanismo de Anticítera, calculador astronômico achado num naufrágio, é formado por dezenas de engrenagens de qual metal?",
    "resposta": "Bronze",
    "distratores": [
      "Ferro",
      "Ouro",
      "Prata"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Antikythera_mechanism"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Antikythera_mechanism",
        "situacao": "ok",
        "texto": "The Antikythera mechanism ( AN-tik-ih-THEER-ə, US also  AN-ty-kih-) is an ancient Greek hand-powered orrery (model of the Solar System) built in the 2nd century BC and discovered in 1901. It is the oldest known example of an analogue computer. It could be used to predict astronomical positions and eclipses decades in advance. It could also be used to track the four-year cycle of athletic games sim\n[…]\nThese scans suggest that the mechanism had 35 meshing bronze gears, 30 of which are still visible, enabling it to follow the movements of the Moon and the Sun through the zodiac, to predict eclipses and to model the irregular orbit of the Moon, where the Moon's speed is higher in its perigee than in its apogee. This motion was studied in the 2nd century BC by astronomer Hipparchus of Rhodes, and he may have been consulted in the machine's construction.\n[…]\nWhen Gallus moved this globe, it showed the relationship of the Moon with the Sun, and there were exactly the same number of turns on the bronze device as the number of days in the real globe of the sky. Thus it showed the same eclipse of the Sun as in the globe [of the sky], as well as showing the Moon entering the area of the Earth's shadow when the Sun is in line ... [missing text] [i.e. It showed both solar and lunar eclipses.]\n[…]\nOther relatively complex metal devices are known from Roman Greece. For example, a bronze combination lock from the Augustan or Hadrianic period was unearthed in the Kerameikos. The device operated on a primitive form of mechanical logic: the central bolt was physically blocked from retracting until the notches of two independent rotary dials were correctly aligned. The device also included a simple concealed bypass mechanism.\n[…]\nAstrarium – Timepiece and astronomical prediction device\n[…]\nBronze replica 3D engineering manufacturing drawings and operating manual"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%A1quina_de_Antic%C3%ADtera",
        "situacao": "ok",
        "texto": "A máquina de Anticítera ou mecanismo de Anticítera é o computador analógico e planetário mais antigo que se conhece, criado no século I a.C. na Grécia romana. Era usado para prever posições astronômicas e eclipses, como função de calendário e astrologia. Ela também podia rastrear o ciclo de quatro anos dos jogos atléticos que eram parecidos, mas não idênticos, a uma Olimpíada, o ciclo dos Jogos Ol\n[…]\nA revista Nature declarou: \"As colônias coríntias do noroeste da Grécia ou de Siracusa, na Sicília, são as mais prováveis - a segunda indicando um patrimônio que remonta aos dias de Arquimedes.\"Aparelhos similares não foram encontrados porque \"O bronze é um produto valioso e altamente reciclável\", escreveu Allen. \"Em resultado disso, antigos achados de bronze são muito raros. Na verdade, muitos deles foram descobertos debaixo da água, onde não eram acessíveis aos que talvez fossem reutilizá-los\".\n[…]\nIsso sugere que ele tinha 37 engrenagens de bronze que o permitiam seguir os movimentos da Lua e do Sol através do zodíaco, prever eclipses e modelar a órbita irregular da Lua, onde a velocidade da Lua é maior em seu perigeu do que em seu apogeu. Este movimento foi estudado no século II a.C. pelo astrônomo Hiparco de Rodes, e especula-se que ele pode ter sido consultado na construção da máquina.\n[…]\nHá especulações de que uma parte do mecanismo está faltando e também calculou as posições dos cinco planetas clássicos.\n[…]\nIntensamente estudado entre o final da década de 1950 e o início da década de 1970, o mecanismo é composto por vinte e sete (27) engrenagens de bronze, feitas a mão, e organizadas de modo a representar mecanicamente a órbita da Lua, de outros planetas do Sistema Solar e do próprio Sol. Primitivamente teria sido protegido por uma caixa ou moldura de madeira, constituindo-se no mais antigo computador analógico hoje conhecido.\n[…]\nRelógio astronômico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Nokia 3310",
      "descricao": "Celular da Nokia lançado em 2000, famoso pela resistência e pela bateria duradoura."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que jogo eletrônico vinha instalado no celular Nokia 3310, lançado em 2000?",
    "resposta": "Snake, o jogo da cobrinha",
    "distratores": [
      "Tetris",
      "Pac-Man",
      "Pong"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nokia_3310",
      "https://en.wikipedia.org/wiki/Snake_(video_game_genre)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nokia_3310",
        "situacao": "ok",
        "texto": "The Nokia 3310 is a discontinued GSM mobile phone by Nokia. It was announced on 1 September 2000, and released in the fourth quarter of the year, replacing the popular Nokia 3210. It is one of the most successful phones ever made, with 126 million units sold worldwide, and being one of Nokia's most iconic devices. The phone is still widely acclaimed and has gained a cult status due to its reputati\n[…]\nThe 3310 is known for having many features that were rare for the time. These include many utilities, such as a calculator, Nokia network monitor, stop watch and a reminder function. It has four games: Pairs II (a video game version of Concentration), Space Impact, Bantumi (a video game version of Kalah), and the hugely popular Snake II. The Snake series of games has been popular on Nokia handsets since the late 1990s.\n[…]\nFixed some of the bugs found in the 3310\n[…]\nThe Nokia 3330 added a CSD-based WAP capability, animated Screensavers, a pinball game named Bumper, and phonebook (stored in the phone memory as opposed to the SIM card in earlier models) with a 100-entry capacity to the model. It also has the capability of downloading additional game content via WAP (such as Snake II mazes, Bumper tables, and Space Impact chapters).\n[…]\nIn November 2015, the Nokia 3310 was chosen as one of the first three \"National Emojis\" for Finland. The emoji is referred to as \"The Unbreakable\", as the phone was known for its aforementioned toughness and durability.\n[…]\nOn 14 February 2017, it was reported that a revived version of the 3310 would be unveiled at the 2017 Mobile World Congress in Barcelona by HMD Global Oy, the Finnish manufacturer with rights to market phones under the Nokia brand, forecasting a price point of €49. On 26 February 2017, the modernized version of the 3310 was launched at a price of €49.\n[…]\nNokia 3310 - European support page at the Wayback Machine (archived 2007-03-22)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Snake_(video_game_genre)",
        "situacao": "ok",
        "texto": "Snake is a genre of action video games where the player maneuvers the end of a growing line, often themed as a snake. The player must keep the snake from colliding with both other obstacles and itself, which gets harder as the snake lengthens.\n[…]\nAfter a version simply called  Snake was preloaded on Nokia mobile phones in 1998, there was a resurgence of interest in snake games.\n[…]\nIn 1998, the mobile game Snake was released for Nokia 6110. The game was popular, and Nokia released a series of reiterations, including Snake II, Snake EX, Snake EX2, Snake III, Snakes, Snake Xenzia and Snakes Subsonic. As the game graphics and gameplay evolved, it became less popular.\n[…]\nIn 2002, Snake was made available for download to Pocket PC through Peter's GameBox. In 2004, TIM made Snake available for download through the Tim Wap Fast system. In 2010, a Snake mini-game was also included as a puzzle in the Nokia Symbian exclusive life simulator Creebies. In March 2013, NimbleBit released Nimble Quest, an action RPG snake game. In 2015, Armanto released a spiritual successor to Snake in partnership with Rumilus Design called Snake Rewind.\n[…]\nIn 2017, Gameloft developed and released the 2017 version of Snake as the pre-installed game for several of Nokia's Series 30+ and KaiOS devices under HMD Global's era, replaced Snake Xenzia. In 2019, scientists tested the touch sensibility of the GLASSES screen cellphones playing Snake. In 2020, Zanco Tiny T2 was launched with Snake installed. In March 2020, OrangePixel released Snake Core with shooter elements.\n[…]\nOn November 29, 2012, the Museum of Modern Art in New York City announced that the Nokia port of Snake was one of 40 games that the curators wished to add to the museum's collection in the future."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nokia_3310",
        "situacao": "ok",
        "texto": "O Nokia 3310 é um telefone celular da Nokia que foi lançado no ano de 2000. Foi um dos principais lançamentos da empresa nos anos de 2000 a 2003, com 126 milhões de unidades vendidas. Este telemóvel também era conhecido por ser extremamente resistente a quedas e impactos que em situações normais quebrariam a grande maioria dos telemóveis, ganhando no Brasil o seu famoso apelido de \"Tijolão\".\n[…]\nEm fevereiro de 2017 surgem rumores de que a empresa que detêm a marca Nokia, a HMD Global estaria para relançar o aparelho inquebrável, o lançamento ocorreu no dia 26 de fevereiro, um dia antes do evento de tecnologia MWC 2017. A escolha do modelo para relançamento foi feita por meio de uma votação com transmissão ao vivo pela página oficial da Nokia Mobile.\n[…]\nPara Lauren Guenveur, especialista do ramo de tecnologia móvel, o lançamento de uma versão atualizada do 3310 em 2017 é resultado de campanhas baseadas em \"nostalgia\" - um dos chamarizes do Nokia 3310 durante a MWC17, por exemplo, foi o fato do aparelho trazer o jogo \"snake\", a famosa cobrinha que pode ser jogada usando as teclas 2, 6, 8 e 4 como botões direcionais.\n[…]\nModelo 2000\n[…]\nRádio FM, MP3 e game Snake\n[…]\nLista de celulares mais vendidos\n[…]\nSite Oficial Nokia Mobile",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Código Morse",
      "descricao": "Sistema de representação de letras e números por sinais curtos e longos, pontos e traços, criado para o telégrafo."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No código Morse, a letra E, a mais usada da língua inglesa, é representada por quê?",
    "resposta": "Um único ponto",
    "distratores": [
      "Um único traço",
      "Dois pontos",
      "Um ponto e um traço"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Morse_code"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Morse_code",
        "situacao": "ok",
        "texto": "Morse code is a telecommunications method which encodes text characters as standardized sequences of two different signal durations, called dots and dashes, or dits and dahs. It is named after Samuel Morse, one of several developers of the system. Morse's preliminary proposal for a telegraph code was replaced by an alphabet-based code developed by Alfred Vail, the engineer working with Morse. Vail\n[…]\nBelow is an illustration of timing conventions. The phrase MORSE CODE, in Morse code format, would normally be written something like this, where  ▄▄▄  represents dahs and  ▄  represents dits:\n[…]\nThis sequence was reported to have been chosen to represent \"A[t] C[ommercial]\", or a letter 'a' inside a swirl represented by a letter 'C'. The new character facilitates sending e‑mail addresses by Morse code, and is notable since it is the first official addition to the Morse set of characters since World War I.\n[…]\nThe usual method has been to first transliterate the sounds represented by the International code and the four unique Gerke codes into the local alphabet, hence Greek, Hebrew, Russian, and Ukrainian Morse codes. If more codes are needed, one can either invent a new code or convert an otherwise unused code from either code set to the non-Latin letter. For example:\n[…]\nNon-alphabetic scripts require more radical adaptation. Japanese Morse code (Wabun code) has a separate encoding for kana script; although many of the codes are used for International Morse, the sounds they represent are mostly unrelated. The Japanese / Wabun code includes special prosigns for switching back-and-forth from International Morse:  ▄▄▄ ▄ ▄ ▄▄▄ ▄▄▄ ▄▄▄  signals a switch from International Morse to Wabun, and  ▄ ▄ ▄ ▄▄▄ ▄  to return from Wabun to International Morse.\n[…]\nInternational Morse code, hand sending. YouTube (training film). U.S. Army. 1966. Archived at Ghostarchive and the Wayback Machine:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%B3digo_Morse",
        "situacao": "ok",
        "texto": "O Código Morse é um sistema de representação de letras, algarismos e sinais de pontuação através de um sinal codificado enviado de modo intermitente, foi desenvolvido por Samuel Morse em 1837, criador do telégrafo elétrico, dispositivo que utiliza correntes elétricas para controlar eletroímãs que atuam na emissão e na recepção de sinais.\n[…]\nPortanto, com o desenvolvimento de tecnologias de comunicação mais avançadas, o uso do código Morse é agora um pouco obsoleto, embora ainda seja empregado em algumas finalidades específicas, incluindo rádio faróis, e por CW (continuous wave - onda contínua), operadores de radioamadorismo. Código Morse é o único modo de modulação feito para ser facilmente compreendido por humanos sem ajuda de um computador, tornando-o apropriado para mandar dados digitais em canais de voz.\n[…]\nSinal curto, ponto ou 'dit' (·)\n[…]\nAs marcas curtas foram chamadas de \"pontos\", e as longas de \"traços\", e as letras mais comuns usadas na língua inglesa foram nomeadas nas menores sequências.\n[…]\nMensagens Morse são geralmente transmitidas por uma ferramenta de transmissão manual, como o telégrafo, mas há variações introduzidas pela prática de enviar e receber — operadores mais experientes conseguem enviar e receber em altas velocidades. Em geral, qualquer código representando símbolo escrito como sinais de durações variadas pode ser transmitido por código Morse, mas o termo é usado especialmente para dois tipos de código Morse usado para o alfabeto inglês e símbolos associados.\n[…]\nA velocidade do código Morse é tipicamente especificado em palavras por minuto (WPM). O padrão paris define a velocidade de transmissão como o ritmo de ponto e traço necessário para enviar a palavra \"Paris\" um dado número de vezes por minuto. A palavra Paris é escolhida porque tem precisamente 50 \"dits\" baseado no ritmo do livro de texto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Bateria de íon de lítio",
      "descricao": "Tipo de bateria recarregável usada em celulares, notebooks e carros elétricos."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "As baterias recarregáveis de celulares e notebooks usam, em geral, íons de qual metal leve?",
    "resposta": "Lítio",
    "distratores": [
      "Níquel",
      "Chumbo",
      "Cádmio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lithium-ion_battery"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lithium-ion_battery",
        "situacao": "ok",
        "texto": "A lithium-ion battery or Li-ion battery is a type of rechargeable battery that uses the reversible intercalation of lithium ions (Li+) into electronically conducting solids to store energy. There are many different varieties, which are usually categorized by the materials used in the cathode. Compared to other rechargeable battery types, they generally have higher specific energy, energy density, \n[…]\nDuring discharge, lithium ions (Li+) carry the current within the battery cell from the negative to the positive electrode, through the non-aqueous electrolyte and separator diaphragm.\n[…]\nDirect recycling is the removal of the cathode or anode from the electrode, which are then reconditioned and reused in a new battery. Mixed metal-oxides can be added to the new electrode with very little change to the crystal morphology. The process generally involves the addition of new lithium to replenish the loss of lithium in the cathode due to degradation from cycling.\n[…]\nFor the biological metals reclamation or bio-leaching, the process uses microorganisms to digest metal oxides selectively. Then, recyclers can reduce these oxides to produce metal nanoparticles. Although bio-leaching has been used successfully in the mining industry, this process is still nascent to the recycling industry and plenty of opportunities exists for further investigation.\n[…]\nAs it is now accepted that not only transition metals, but also anions in cathodes participate in redox activity necessary for lithium insertion and removal, the design of cathode materials with diverse transition metal cations increasingly consider also oxygen redox reactions in lithium-ion battery cathodes and how these may enhance capacity beyond transition metal limitations, with computational studies using density functional theory helping to optimize materials while minimizing structural degradation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bateria_de_i%C3%A3o_l%C3%ADtio",
        "situacao": "ok",
        "texto": "Bateria íon-lítio (português brasileiro) ou bateria de ião lítio (português europeu) é um tipo de bateria recarregável muito utilizadas em equipamentos eletrônicos portáteis. Armazenam o dobro de energia que uma bateria de hidreto metálico de níquel (ou NiMH) e três vezes mais que uma bateria de níquel cádmio (ou NiCd).\n[…]\nA primeira bateria de lítio começou com G.N. Lewis em 1912, mas somente a partir de 1970 as primeiras baterias de lítio ficaram disponíveis comercialmente. As tentativas de desenvolver baterias recarregáveis de lítio falharam devido a problemas de segurança. Por causa da instabilidade inerente do lítio metálico, especialmente durante o carregamento, a pesquisa então mudou seu foco para uma bateria não metálica de lítio usando íons de lítio.\n[…]\nEmbora sua densidade de energia seja ligeiramente inferior à do lítio metálico, após comprovada a segurança das baterias de íons de lítio (desde que tomadas determinadas precauções na sua carga e descarga), em 1991, a Sony Corporation comercializou a primeira bateria deste tipo.\n[…]\nAs baterias de íons de lítio são facilmente corrompidas, inflamáveis e podem até explodir em altas temperaturas.\n[…]\nIncidentes desse tipo podem ocorrer quando as baterias de íons de lítio não são descartadas nos canais dedicados a elas, mas são jogadas fora com outros resíduos. A maneira como são tratadas pelas empresas de reciclagem pode danificá-las e causar incêndios, que podem levar a conflagrações em grande escala. Doze desses incêndios foram registrados em instalações de reciclagem suíças em 2023.\n[…]\nBateria de lítio-ar\n[…]\nHexafluoro fosfato de lítio\n[…]\nKarel Walraven, Revista Elektor (Edição brasileira), \"Tempo de vida das baterias de íons de lítio\", ano 4, n.º 45/46, p. 58.https://www.elektormagazine.com/magazine/elektor-200407/17745\n[…]\n«História das baterias de íons de lítio»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Linux",
      "descricao": "Núcleo de sistema operacional livre criado por Linus Torvalds em 1991."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Que animal é o mascote do sistema Linux, um personagem chamado Tux?",
    "resposta": "Pinguim",
    "distratores": [
      "Raposa",
      "Coruja",
      "Tartaruga"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tux_(mascot)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tux_(mascot)",
        "situacao": "ok",
        "texto": "Tux is a penguin character and the official mascot of the Linux kernel. Originally created as an entry to a Linux logo competition, Tux is the most commonly used icon for Linux, although different Linux distributions depict Tux in various styles. The character is used in many other Linux programs and as a general symbol of Linux.\n[…]\nApart from this, in the book Just for Fun: The Story of an Accidental Revolutionary, there is an excerpt dedicated to how Tux became the mascot of the Linux kernel. In the book, Linus says he does not remember how Tux became the mascot, but believes the zoo story, which, according to his wife, Tove Torvalds, is probably right.\n[…]\nThe story, according to Linus, is that while Tove may in fact have vaguely mentioned penguins at some early stage, it was in a conversation with two high-ranking Linux types that the icy creatures were first seriously considered as the operating system's official mascot.\n[…]\nIn 1999, Corel Linux Deluxe included a free Linux Penguin (Tux) toy.\n[…]\nIn 2008, Tux has also been made as a virtual pet under the name Tux Droid by Kysoh for Linux and Windows, has many features including reading tweets from Twitter and checking the weather.\n[…]\nIn 2010, a prototype of a Tux monument with wings was presented in the Russian city of Tyumen by the local Linux user community.\n[…]\nList of computing mascots\n[…]\nBSD Daemon, the mascot of various BSD releases\n[…]\nGlenda, the Plan 9 Bunny, the mascot of Plan 9 from Bell Labs\n[…]\nKiki the Cyber Squirrel, the mascot of Krita\n[…]\nKonqi, the mascot of KDE\n[…]\nMozilla (mascot), the mascot of Mozilla Foundation\n[…]\nPuffy (mascot), the mascot of OpenBSD\n[…]\nWilber (mascot), the mascot of GIMP\n[…]\nThis article incorporates material from the Citizendium article \"Tux (mascot)\", which is licensed under the Creative Commons Attribution-ShareAlike 3.0 Unported License but not under the GFDL."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tux",
        "situacao": "ok",
        "texto": "O Tux é a mascote oficial do kernel Linux. Criado por Larry Ewing em 1996, é um pinguim gorducho que tem um ar satisfeito e saciado. A ideia da mascote do Linux ser um pinguim veio do próprio Linus Torvalds, criador do núcleo Linux.\n[…]\nTux tornou-se um dos símbolos mais conhecidos associados ao Linux. Em 2001, a revista Wired noticiou que um grupo britânico de utilizadores de Linux havia adotado pinguins no Jardim Zoológico de Bristol como presente de aniversário para Linus Torvalds.\n[…]\nO conceito de um mascote para o Linux como sendo um pinguim vem de Linus Torvalds, o criador do Linux. Tux foi criado por Larry Ewing em 1996 depois de uma sugestão inicial de  Alan Cox e complementarmente refinado por Linus Torvalds na Lista de discussão do núcleo Linux.\n[…]\nNessa época, muitos integrantes estavam discutindo sobre a criação de uma imagem que representasse o Linux, como uma espécie de mascote. Muitas das sugestões eram equivalentes ao logotipo do Windows, fato que não agradava aos integrantes do grupo, outras eram monstros ou animais agressivos. Linus Torvalds  resolveu participar desse empasse, afirmou em uma mensagem que gostava muito de pinguins, visto que certo dia  em um zoológico fora surpreendido moradia dos pinguins.\n[…]\nQuando questionado sobre o por quê de pinguins, Linus Torvalds respondeu que não havia uma razão em especial, mas os achava engraçados e até citou que foi bicado por um \"pinguim assassino\" na Austrália e ficou impressionado como a bicada de um animal aparentemente tão inofensivo, podia ser tão dolorosa.\n[…]\nO pinguim Tux é uma personagem no popular webcomic Ctrl Alt Del. Ted, sendo o animal de estimação do único guru de Linux na tira, é claramente um tributo ao Tux.\n[…]\nThe Linux Logo Competition site",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Android",
      "descricao": "Sistema operacional para celulares e tablets desenvolvido pelo Google."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Até 2019, as versões do sistema Android recebiam apelidos de quê, em ordem alfabética?",
    "resposta": "Doces e sobremesas",
    "distratores": [
      "Planetas",
      "Animais",
      "Cidades americanas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Android_version_history"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Android_version_history",
        "situacao": "ok",
        "texto": "The version history of the Android mobile operating system began with the public release of its first beta on November 5, 2007. The first commercial version, Android 1.0, was released on September 23, 2008. The operating system has been developed by Google on a yearly schedule since at least 2011. New major releases are usually announced at Google I/O in May, along with beta testing, with the stab\n[…]\nThe project manager, Ryan Gibson, came up with a confectionery-themed naming scheme for public releases, starting with Android 1.5 Cupcake in 2009. Google announced in August 2019 that they were ending the confectionery theming scheme and would use numerical ordering for future versions. The first release under the numerical order format was Android 10, which was released in September 2019.\n[…]\nAndroid 10 is the tenth major version of the Android operating system. The stable version of Android 10 was released on September 3, 2019.\n[…]\nAndroid 13 is the thirteenth major version of the Android operating system.\n[…]\nAndroid supports OpenGL ES 1.1, 2.0, 3.0, 3.2 and since Android 7.0 Vulkan (and version 1.1 available for some devices). Some applications may explicitly require a certain version of the OpenGL ES, and suitable GPU hardware is required to run such applications.\n[…]\nAndroid 1.0 through 1.5 required a 2 megapixel camera with autofocusing capability. This was relaxed to a fixed-focus camera with Android 1.6. Android 10 onwards do not require a camera.\n[…]\nIn 2021, Qualcomm said it will provide a longer support period for its chipsets, starting with the Snapdragon 888, which will help extend Android update support for these devices. With this promise, devices using Qualcomm chipsets will have a total of three Android version upgrades and of four years of security updates.\n[…]\nOfficial Android website\n[…]\nAndroid Open Source Project website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hist%C3%B3rico_de_vers%C3%B5es_do_Android",
        "situacao": "ok",
        "texto": "O Android é um sistema operacional móvel lançado inicialmente com a versão alpha em novembro de 2007, e em seguida a segunda versão comercial e estável, o Android 1.0, lançado em setembro de 2008.\n[…]\nDesde abril de 2009, as versões Android foram desenvolvidos sob um codinome (exceto Android 10) e lançadas em ordem alfabética: 1.0, 1.1, Cupcake, Donut, Eclair, Froyo, Gingerbread, Honeycomb, Ice Cream Sandwich, Jelly Bean, KitKat, Lollipop, Marshmallow, Nougat, Oreo, Pie, Q, Red Velvet Cake, Snow Cone, Tiramisu, Upside Down Cake, Vanilla Ice Cream, Baklava, Cinnamon Bun.\n[…]\nDo Android 1.5 (Cupcake), lançado em 27 de abril de 2009, até o Android 17 (Cinammon Bun), lançado em 16 de junho de 2026, foram lançados apenas versões com nomes de doces. A Google coloca uma estátua em sua sede ao lançamento de cada versão, em que o famoso \"robôzinho\" estava acompanhado do doce a qual a versão Android se referia, e agora está acompanhado do número.\n[…]\nO Google adota uma convenção de nomenclatura para as versões do Android baseada em nomes de sobremesas, seguindo a ordem alfabética.\n[…]\nO Android beta foi lançado em 5 de novembro de 2007, enquanto o kit de desenvolvimento de software (SDK) foi lançado em 12 de novembro de 2007. Dia 5 de novembro é a data em que popularmente se comemora o aniversário do Android. As versões beta públicas do SDK foram lançadas na seguinte ordem:\n[…]\nAndroid 10 é a décima versão principal do sistema operacional Android.\n[…]\nO Android 17 é a décima sétima versão principal do sistema operacional Android. Foi anunciado pela primeira vez em 13 de fevereiro de 2026, e a primeira prévia do desenvolvedor foi lançada no mesmo dia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Instagram",
      "descricao": "Rede social de compartilhamento de fotos e vídeos lançada em 2010."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Até 2015, as fotos publicadas no Instagram eram obrigadas a ter qual formato?",
    "resposta": "Quadrado",
    "distratores": [
      "Circular",
      "Panorâmico",
      "Vertical"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Instagram"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Instagram",
        "situacao": "ok",
        "texto": "Instagram is an American photo and short-form video sharing social networking service owned by Meta Platforms. It allows users to upload media that can be edited with filters, be organized by hashtags, and be associated with a location via geographical tagging. Posts can be shared publicly or with preapproved followers. Users can browse other users' content by tags and locations, view trending con\n[…]\nSystrom further stated that \"When we adopted [Stories], we decided that one of the really annoying things about the format is that it just kept going and you couldn't pause it to look at something, you couldn't rewind. We did all that, we implemented that.\" He also told the publication that Snapchat \"didn't have filters, originally. They adopted filters because Instagram had filters and a lot of others were trying to adopt filters as well.\"\n[…]\nIn April 2017, Instagram Direct had 375 million monthly users.\n[…]\nIn 2021, Instagram announced that like counts would return to be publicly viewable by default. Users can choose to switch them off for their whole feed or on a per-post basis.\n[…]\nColumbia Law School professor Tim Wu has given public talks claiming that Facebook's 2012 purchase of Instagram was a felony. On February 26, 2019, the New York Post released an article stating that the FTC had discovered a memo authored by a senior Facebook official, revealing that the purpose behind the acquisition of Instagram was to remove a potential rival. Wu explains this is a violation of US antitrust law (see monopoly).\n[…]\nIn July 2022, Instagram announced a set of updates which immediately received widespread backlash from its userbase. The changes included a feed more focused on Instagram's content algorithms, full-screen photo and video posts, and changing the format of all of its videos to Reels. The primary criticisms for these updates was that Instagram was more like TikTok than photo sharing."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Instagram",
        "situacao": "ok",
        "texto": "Instagram é uma rede social online de compartilhamento de fotos e vídeos entre os seus usuários, que permite aplicar filtros digitais e compartilhá-los em uma variedade de serviços de redes sociais, como Facebook, Twitter, Tumblr e Flickr. Originalmente, uma característica distintiva era a limitação das fotos para uma forma quadrada, semelhante ao Kodak Instamatic e de câmeras Polaroid, em contras\n[…]\nO Instagram chegou aos 80 milhões de utilizadores em todo o mundo, em julho de 2012. Em fevereiro do ano seguinte, chegou a 100 milhões de utilizadores no mundo, sendo publicadas fotos inclusive da isolada Coreia do Norte.\n[…]\nEm 18 de dezembro de mesmo ano, o Instagram modificou o seu contrato de adesão. Entre outras alterações, poderia passar a vender fotos de usuários para fins comerciais ou publicitários, sem que o autor da foto desse outro consentimento ou recebesse compensação financeira.\n[…]\nEm setembro de 2015, o Instagram liberou a ferramenta de Instagram Ads para todos os usuários. Os anúncios são criados por uma plataforma dentro do Facebook e são de 3 tipos: cliques no site, visualização de vídeo e envolvimento com aplicativo.\n[…]\nEm 5 de julho de 2023, a Meta Platforms lançou o Threads, serviço de rede social conectado ao Instagram que permite aos usuários fazer postagens curtas com textos, fotos e vídeos, bem como conversar com outros usuários e republicar as publicações de outras contas. O Threads é um concorrente do Twitter.\n[…]\nO Instagram é bastante popular entre os brasileiros que têm acesso à internet. Desde 2015, a presença de brasileiros na plataforma é maior do que a média global — naquele ano, 55% dos usuários de internet estavam presentes na rede social de fotografias, mais do que a média global de 32%. Em 2016, esse número subiu para 75%, mais do que os 42% da média global do mesmo ano.\n[…]\nLista das contas mais seguidas no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Alan Turing",
      "descricao": "Matemático e lógico inglês (1912–1954), pai da ciência da computação teórica."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em 2021, o Banco da Inglaterra lançou uma cédula com o rosto de Alan Turing. De qual valor?",
    "resposta": "Cinquenta libras",
    "distratores": [
      "Cinco libras",
      "Dez libras",
      "Vinte libras"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bank_of_England_%C2%A350_note",
      "https://en.wikipedia.org/wiki/Alan_Turing"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bank_of_England_%C2%A350_note",
        "situacao": "ok",
        "texto": "The Bank of England £50 note is a sterling banknote circulated in the United Kingdom, particularly in England and Wales. It is the highest denomination of banknote currently issued for public circulation by the Bank of England. The current note, the second of this denomination to be printed in polymer, entered circulation on 5 June 2024.\n[…]\nIt bears the images of King Charles III on the obverse and computer scientist and World War II codebreaker Alan Turing on the reverse, with his birth date reflecting the release date. Cotton £50 notes from the previous series remained in circulation alongside the new polymer notes until 30 September 2022, when the last \"paper\" banknote issue finally ceased to be legal tender.\n[…]\nThe new Series G £50 note was brought into circulation in  June 2021; it is the last of the Bank of England's notes to switch from paper to polymer. The reverse of the note features a portrait of mathematician and codebreaker Alan Turing.\n[…]\nSuggestions were sought by the Bank for eligible scientists prior to Turing's selection. Some 227,299 nominations covering 989 scientists were received, and the shortlist eventually consisted of (in individuals and pairs) Mary Anning, Paul Dirac, Rosalind Franklin, William Herschel and Caroline Herschel, Dorothy Hodgkin, Ada Lovelace and Charles Babbage, Stephen Hawking, James Clerk Maxwell, Srinivasa Ramanujan, Ernest Rutherford, Frederick Sanger, and Alan Turing."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alan_Turing",
        "situacao": "ok",
        "texto": "Alan Mathison Turing (; 23 June 1912 – 7 June 1954) was an English mathematician and logician widely regarded as the father of theoretical computer science. He formalised the concepts of algorithm and computation with the Turing machine, a model of a general-purpose computer, and his contributions to cryptanalysis helped the Allies of World War II decipher messages encrypted by the German Enigma m\n[…]\nHochhuth, Rolf (1988). Alan Turing: en berättelse. Symposion. ISBN 978-91-7868-109-9.\n[…]\nTuring, Sara Stoney (1959). Alan M Turing. W Heffer. Turing's mother, who survived him by many years, wrote this 157-page biography of her son, glorifying his life. It was published in 1959, and so could not cover his war work. Scarcely 300 copies were sold (Sara Turing to Lyn Newman, 1967, Library of St John's College, Cambridge). The six-page foreword by Lyn Irvine includes reminiscences and is more frequently quoted.\n[…]\nTuring, Sara (2012). Alan M. Turing. Cambridge University Press. ISBN 978-1-107-02058-0. (originally published in 1959 by W. Heffer & Sons, Ltd)\n[…]\nList of things named after Alan Turing\n[…]\nAlan Turing archive on New Scientist\n[…]\nAlan Turing plaques Archived 24 April 2024 at the Wayback Machine on openplaques.org\n[…]\nAlan Turing Papers – University of Manchester Library\n[…]\nScience in the MakingArchived 4 April 2023 at the Wayback Machine Alan Turing's papers in the Royal Society's archives\n[…]\nHow Alan Turing Cracked The Enigma Code Imperial War Museums\n[…]\nJones, G. James (11 December 2001). \"Alan Turing – Towards a Digital Mind: Part 1\". System Toolbox. The Binary Freedom Project. Archived from the original on 3 August 2007.\n[…]\nAlan Turing site maintained by Andrew Hodges including a short biography\n[…]\nAlan Turing Year Archived 17 February 2019 at the Wayback Machine\n[…]\nAlan Turing and the 'Nature of Spirit' (Old Shirburnian Society)\n[…]\nAlan Turing OBE, PhD, FRS (1912–1954) (Old Shirburnian Society)"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Nintendo",
      "descricao": "Empresa japonesa de videogames fundada em 1889, criadora de Mario e Zelda."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Muito antes dos videogames, quando foi fundada em 1889, a Nintendo fabricava qual produto?",
    "resposta": "Cartas de baralho hanafuda",
    "distratores": [
      "Brinquedos de madeira",
      "Relógios de pulso",
      "Máquinas de costura"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nintendo",
      "https://en.wikipedia.org/wiki/Hanafuda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nintendo",
        "situacao": "ok",
        "texto": "Nintendo Co., Ltd. is a Japanese multinational video game company headquartered in Kyoto. It develops, publishes, and manufactures both video games and video game consoles.\n[…]\nThe history of Nintendo began when craftsman Fusajiro Yamauchi founded the company in 1889 to produce handmade hanafuda playing cards. After venturing into various lines of business and becoming a public company, Nintendo began producing toys in the 1960s, and later video games. Nintendo developed its first arcade games in the 1970s, and distributed its first system, the Color TV-Game in 1977.\n[…]\nNintendo was founded as Nintendo Koppai on 23 September 1889 by craftsman Fusajiro Yamauchi in Shimogyō-ku, Kyoto, Japan, as an unincorporated establishment, to produce and distribute Japanese playing cards, or karuta (かるた; from Portuguese carta, 'card'), most notably hanafuda (花札, 'flower cards').\n[…]\nOther card manufacturers had opted to leave the market, not wanting to be associated with its criminality, but Yamauchi persisted despite such fears to become the primary producer of hanafuda within a few years. With the increase of the cards' popularity, Yamauchi hired assistants to mass-produce them to satisfy the demand.\n[…]\nNintendo reached an agreement with Embracer Group in May 2024 to acquire 100% of the shares in Shiver Entertainment, a company that has specialized in porting triple-A games like Hogwarts Legacy and Mortal Kombat 1 to the Switch, making it a wholly owned subsidiary of Nintendo, subject to closing conditions. In October 2024, the company opened the Nintendo Museum on the site of its former Uji Ogura plant, where it had manufactured playing and hanafuda cards.\n[…]\nNintendo Systems"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hanafuda",
        "situacao": "ok",
        "texto": "Hanafuda (花札; lit. 'flower cards')) are a type of Japanese playing cards. They are typically smaller than Western playing cards, only 5.4 by 3.2 centimetres (2.1 by 1.3 in), but thicker and stiffer. On the face of each card is a depiction of plants, tanzaku (短冊; 'paper strips'), animals, birds, or man-made objects. One single card depicts a human. The back side is usually plain, without a pattern \n[…]\nSo as a loophole to the ban, early hanafuda were made to have old poems on some of the cards, disguising them as Uta-garuta. Remnants of this can be seen via the tanzaku-ranked cards.\n[…]\nIn 1889, Fusajiro Yamauchi founded Nintendo for the purposes of producing and selling hand-crafted hanafuda. Nintendo has focused on video games since the 1970s but continues to produce cards in Japan, including themed sets based on Mario, Pokémon, and Kirby. The Koi-Koi game played with hanafuda is included in Nintendo's own Clubhouse Games (2006) for the Nintendo DS, and Clubhouse Games: 51 Worldwide Classics (2020) for the Nintendo Switch.\n[…]\nThough modern Japanese hanafuda is primarily made today by either of the long-standing Oishi Tengudo (1800) or Nintendo (1889), dozens of others have manufactured hanafuda, such as Angel, Tamura Shogundo, Matsui Tengudo, Ace, Maruē, and many more.\n[…]\nIn Unicode, a symbol to represent hanafuda is available at U+1F3B4 🎴 FLOWER PLAYING CARDS in the Miscellaneous Symbols and Pictographs block. This character is typically rendered as the Full Moon with Red Sky card. It was added as part of Unicode 6.0 in 2010 for compatibility with a KDDI emoji character, and was added to Unicode Emoji 1.0 in 2015.\n[…]\nCategory:Films about hanafuda\n[…]\nCategory:Hanafuda manufacturers\n[…]\nMedia related to Hanafuda at Wikimedia Commons\n[…]\nThe dictionary definition of hanafuda at Wiktionary\n[…]\nHanafuda   at BoardGameGeek\n[…]\nHanafuda rules\n[…]\nCommentary on Hanafuda cards, including Korean variants"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nintendo",
        "situacao": "ok",
        "texto": "Nintendo Co., Ltd. (任天堂株式会社, Nintendō Kabushiki Gaisha) é uma desenvolvedora e publicadora japonesa de jogos eletrônicos e consoles sediada em Quioto, no Japão. Foi fundada em setembro de 1889 pelo artesão e empresário Fusajiro Yamauchi, e originalmente era uma fabricante de cartas de baralho tradicionais japonesas.\n[…]\nOutra medida foi começar a oferecer seus produtos em outras cidades, como Osaka, onde grandes quantidades de dinheiro eram movimentadas em jogos de cartas e os empresários locais renovavam quase continuamente os baralhos, evitando assim suspeitas de marcação.\n[…]\nEsta situação se acentuou porque as vendas de hanafudas, destinadas ao público adulto, caíram muito enquanto a sociedade japonesa passava a se interessar em outras formas de entretenimento, como pachinkos, boliche e até mesmo passeios noturnos. Portanto, assim que as vendas dos baralhos da Disney começaram a cair, a Nintendo logo percebeu que não tinha alternativas para aliviar a situação.\n[…]\nO principal negócio da Nintendo é a pesquisa, desenvolvimento, produção e distribuição de produtos de entretenimento, principalmente jogos eletrônicos, consoles e baralhos de cartas, com seus principais mercados sendo o Japão, América do Norte e Europa, embora mais de 70% de suas vendas globais provenham destes dois últimos.\n[…]\nA companhia continua a produzir e disponibilizar suas linhas de baralhos tradicionais japoneses, incluindo cartas hanafuda, kabufuda e Hyakunin Isshu, além de baralhos especiais temáticos de Pokémon, Mario e The Legend of Zelda. Também existe a opção do cliente personalizar suas cartas a partir de seus próprios desenhos. Outros produtos semelhantes vendidos pela empresa são jogos de tabuleiro shogi, go e mahjong, este último desde 1964 sob a marca registrada Yakoman.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Resistor",
      "descricao": "Componente eletrônico passivo de dois terminais que oferece resistência à passagem da corrente elétrica."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Nos resistores tradicionais, pequenos componentes eletrônicos, o valor da resistência costuma vir indicado de que forma?",
    "resposta": "Por faixas coloridas",
    "distratores": [
      "Por furos na carcaça",
      "Pelo formato da peça",
      "Pelo tamanho dos terminais"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Electronic_color_code",
      "https://en.wikipedia.org/wiki/Resistor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Electronic_color_code",
        "situacao": "ok",
        "texto": "An electronic color code is a system which wordlessly identifies either the functions of cables and connections, or the types and variants of electronic components. Codes for cables and connections range from the use of pink, blue, and green connectors on computer sound cards, to early attempts at standardizing the colors of battery, loudspeaker, and antenna wires of radio sets in the 1920s, to th\n[…]\nZero ohm resistors, marked with one or sometimes two black bands, are lengths of wire wrapped in a resistor-like body which can be mounted on a printed-circuit board (PCB) by automatic component-insertion equipment. A coding of four black bands has been used for an arbitrary large (such as anything over 100 kilohm) resistor meant for use as a core for winding an inductance.\n[…]\nTo summarize the variations of the tolerance colors, only silver, gold, brown, and red have had their meanings unchanged since 1943, (on both two- and three-digit codings) and generally the rainbow colors beyond red will indicate a tolerance tighter than 1% on three-digit resistors, and looser than 2% on two-digit resistors.\n[…]\nThe physical size of a resistor is indicative of the power it can dissipate.\n[…]\nThere is an important difference between the use of three and of four bands to indicate resistance. The same resistance is encoded by:\n[…]\nStandards IEC 60062 / EN 60062 do not define a color code for inductors, but manufacturers of small inductors use the resistor color code, typically encoding inductance in microhenries. A white tolerance ring is used by TDK to indicate custom specifications.\n[…]\nModern personal computer peripheral cables and connectors are color-coded to simplify connection of speakers, microphones, mice, keyboards and other peripherals, usually according to coloring schemes following recommendations such as PC System Design Guide, PoweredUSB, ATX, etc.\n[…]\nOnline resistor calculators"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Resistor",
        "situacao": "ok",
        "texto": "A resistor is a passive two-terminal electronic component that implements electrical resistance as a circuit element. In electronic circuits, resistors are used to reduce current flow, adjust signal levels, to divide voltages, bias active elements, and terminate transmission lines, among other uses. High-power resistors that can dissipate many watts of electrical power as heat may be used as part \n[…]\nThe electrical function of a resistor is specified by its resistance: common commercial resistors are manufactured over a range of more than nine orders of magnitude. The nominal value of the resistance falls within the manufacturing tolerance, indicated on the component.\n[…]\nWater resistor\n[…]\nResistances less than 10 Ω have 'R' to indicate the position of the decimal point (radix point). For example:\n[…]\nExcess noise is also size-dependent: in general, excess noise is reduced as the physical size of a resistor is increased (or multiple resistors are used in parallel), as the independently fluctuating resistances of smaller components tend to average out.\n[…]\nThe failure rate of resistors in a properly designed circuit is low compared to other electronic components such as semiconductors and electrolytic capacitors. Damage to resistors most often occurs due to overheating when the average power delivered to it greatly exceeds its ability to dissipate heat (specified by the resistor's power rating).\n[…]\nThis may be due to a fault external to the circuit but is frequently caused by the failure of another component (such as a transistor that shorts out) in the circuit connected to the resistor. Operating a resistor too close to its power rating can limit the resistor's lifespan or cause a significant change in its resistance. A safe design generally uses overrated resistors in power applications to avoid this danger.\n[…]\nIron-hydrogen resistor\n[…]\n4-terminal resistors – How ultra-precise resistors work - PSL"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%B3digo_de_cores_%28Eletr%C3%B4nica%29",
        "situacao": "ok",
        "texto": "O código de cores na Eletrônica é usado para indicar os multímetros ou as classificações de componentes eletrônicos que, em geral, são mini partículas mas que também são utilizados para criar indutores e outros componentes.\n[…]\nCódigos de cores foram usados ​​porque eles estavam simplesmente mais barato impresso em componentes minúsculos. No entanto, houve inconvenientes, especialmente para pessoas que sofrem com o daltonismo. Também o sobreaquecimento de um componente ou acúmulo de sujeira, pode tornar impossível de distinguir uma faixa de cor marrom do vermelho ou laranja. Avanços na tecnologia de impressão já fizeram números impressos práticos em pequenos componentes.\n[…]\nbanda A é o primeiro número significativo do valor do componente (lado esquerdo).\n[…]\nbanda D indica tolerância de valor em percentagem (sem banda significa 20%).\n[…]\nTodos os componentes codificados por cores terão pelo menos duas faixas de valor e uma com um multiplicador; outras bandas são opcionais.\n[…]\nOs capacitores podem ser marcados com quatro ou mais faixas coloridas. A primeira e a segunda faixa representam os valores significativos enquanto que a terceira é o multiplicador (em picofarads). Bandas adicionais têm significados que podem variar de um tipo para outro. Capacitores de baixa tolerância podem começar com os primeiros 3 (em vez de dois) dígitos do valor.\n[…]\nFaixas extras em capacitores de cerâmica identificam as características de classe de tensão e de coeficiente de temperatura. Uma faixa preta larga foi aplicada a alguns capacitores de papel tubulares para indicar o fim que teve o eletrodo externo; isso permitiu este fim de estar ligado à terra do chassi para fornecer alguma proteção contra zumbidos e ruídos.\n[…]\nEletrônica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Ada Lovelace",
      "descricao": "Matemática inglesa (1815–1852), considerada a primeira programadora de computadores."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Ada Lovelace, considerada a primeira programadora da história, era filha de qual poeta romântico inglês?",
    "resposta": "Lord Byron",
    "distratores": [
      "Percy Shelley",
      "John Keats",
      "William Wordsworth"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ada_Lovelace"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ada_Lovelace",
        "situacao": "ok",
        "texto": "Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852), also known as Ada Lovelace, was an English mathematician and writer chiefly known for work on Charles Babbage's proposed mechanical general-purpose computer, the analytical engine. She was the first to recognise the machine had applications beyond pure calculation. Lovelace is often considered the first comput\n[…]\nLovelace was the only legitimate child of poet Lord Byron and reformer Anne Isabella Milbanke. Lord Byron separated from his wife a month after Ada was born, and died when she was eight. Although often ill in childhood, Lovelace pursued her studies assiduously. She married William King in 1835. King was a Baron, and was created Viscount Ockham and 1st Earl of Lovelace in 1838. The name Lovelace was chosen because Ada was descended from the extinct Baron Lovelaces.\n[…]\nLovelace did have some contact with Elizabeth Medora Leigh, the daughter of Byron's half-sister Augusta Leigh, who purposely avoided Lovelace as much as possible when introduced at court.\n[…]\nIn 1841, Lovelace and Medora Leigh (the daughter of Lord Byron's half-sister Augusta Leigh) were told by Ada's mother that Ada's father was also Medora's father. On 27 February 1841, Ada wrote to her mother: \"I am not in the least astonished.\n[…]\nLovelace features in John Crowley's 2005 novel, Lord Byron's Novel: The Evening Land, as an unseen character whose personality is forcefully depicted in her annotations and anti-heroic efforts to archive her father's lost novel.\n[…]\nAda Lovelace Day\n[…]\nLovelace, Ada King. Ada, the Enchantress of Numbers: A Selection from the Letters of Lord Byron's Daughter and her Description of the First Computer. Mill Valley, CA: Strawberry Press, 1992. ISBN 978-0-912647-09-8.\n[…]\n\"How Ada Lovelace, Lord Byron's Daughter, Became the World's First Computer Programmer\". Maria Popova (Brain). 10 December 2014."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ada_Lovelace",
        "situacao": "ok",
        "texto": "Augusta Ada Byron King, Condessa de Lovelace (nascida Byron, 10 de dezembro de 1815 — 27 de novembro de 1852), atualmente conhecida como Ada Lovelace, foi uma matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage.\n[…]\nLovelace nasceu em 10 de dezembro de 1815 e é a única filha legítima do poeta Lord Byron e sua esposa Anne Isabella \"Anabella\" Byron, Lady Wentworth. Todos os outros filhos de Lorde Byron nasceram fora do casamento. Byron foi escritor de uma das versões de Don Juan. Se separou da esposa um mês depois do nascimento de Ada e deixou a Inglaterra para sempre, quatro meses depois. Acabou morrendo doente durante a Guerra da Independência Grega, quando Ada tinha oito anos de idade.\n[…]\nNo início de 1833, Ada teve um caso com seu tutor, e tentou fugir ao seu lado após ter sido descoberta, mas foi reconhecida pelos parentes do tutor, que contataram a sua mãe. Lady Byron, junto a seus amigos, conseguiram esconder o incidente antes que virasse um escândalo público. Ada nunca conheceu sua meia irmã, Allegra, filha de Lord Byron e Claire Clairmont, a criança morreu aos cinco anos de idade em 1822.\n[…]\nAda teve contato com Elizabeth Medora Leigh, a filha da meia irmã de seu pai, Augusta Leigh, que a evitava o máximo possível ao ser introduzida a Corte.\n[…]\nEm 1841, a mãe de Ada, Lady Byron, revelou à moça e à Medora (filha de Augusta Leight, que era meia-irmã de Lord Byron) que o pai de Ada e Medora eram a mesma pessoa. Em 27 de fevereiro daquele ano, Ada escreveu uma carta para sua mãe, dizendo “Não estou nem um pouco surpresa, na verdade a senhora apenas me confirmou uma dúvida que vem aterrorizando minha mente por anos, e que não tinha capacidade de lhe sugerir que suspeitava de tal fato”.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Twitter",
      "descricao": "Rede social de mensagens curtas criada em 2006 nos Estados Unidos."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O passarinho azul do logotipo do Twitter se chamava Larry, em homenagem a qual astro do basquete?",
    "resposta": "Larry Bird",
    "distratores": [
      "Magic Johnson",
      "Michael Jordan",
      "Kareem Abdul-Jabbar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Twitter"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Twitter",
        "situacao": "ok",
        "texto": "X, formerly known as Twitter, is an American microblogging and social networking service, headquartered in Bastrop, Texas and owned by X Corp, a subsidiary of SpaceXSI, a subsidiary of the public company SpaceX. It is one of the world's largest social media platforms and one of the most-visited websites.\n[…]\nOn March 21, 2012, Twitter celebrated its sixth birthday by announcing that it had 140 million users, a 40% rise from September 2011, who were sending 340 million tweets per day. On June 5, 2012, a modified logo was unveiled through the company blog, removing the text to showcase the slightly redesigned bird as the sole symbol of Twitter. On December 18, 2012, Twitter announced it had surpassed 200 million monthly active users.\n[…]\nBefore its rebranding to X, Twitter was internationally identifiable by its signature bird logo, or the Twitter Bird. The original logo, which was simply the word Twitter, was in use from its launch in March 2006. It was accompanied by an image of a bird which was later discovered to be a piece of clip art created by the British graphic designer Simon Oxley.\n[…]\nA new logo had to be redesigned by founder Biz Stone with help from designer Philip Pascuzzo, which resulted in a more cartoon-like bird in 2009. This version had been named \"Larry the Bird\" after Larry Bird of the NBA's Boston Celtics fame.\n[…]\nWithin a year, the Larry the Bird logo underwent a redesign by Stone and Pascuzzo to eliminate the cartoon features, leaving a solid silhouette of Larry the Bird that was used from 2010 through 2012. In 2012, Douglas Bowman created a further simplified version of Larry the Bird, keeping the solid silhouette but making it more similar to a mountain bluebird. This logo was simply called the \"Twitter Bird\" and was used until July 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Twitter",
        "situacao": "ok",
        "texto": "X, popularmente conhecido pelo seu nome anterior Twitter e inicialmente chamado de Twttr (\"gorjear\"), é uma rede social virtual e um serviço de microblog, que permite aos usuários enviar e receber atualizações pessoais de outros contatos em textos de até 280 caracteres (25 mil para assinantes do X Premium) conhecidos como posts (anteriormente tweets), por meio do website do serviço, por SMS e por \n[…]\nEm 24 de julho de 2023, o Twitter mudou o nome e logo do passarinho azul para a letra X, estilizada 𝕏. Em 30 de agosto de 2024, foi determinado o bloqueio da plataforma no Brasil por descumprimentos de ordens judiciais, que depois foi desbloqueado em 8 de outubro, após o X cumprir uma série de ordens judiciais.\n[…]\nPara que um perfil seja verificado com o selo azul, é necessário pagar o X Premium (anteriormente Twitter Blue), que custa entre R$ 440,00 e R$ 629,00 (por ano) ou R$ 42,00 e R$ 60,00 (por mês), e é o único método de consegui-lo. Qualquer perfil que obtenha os requisitos abaixo pode ter o selo azul:\n[…]\nÉ possível perder o selo azul se:\n[…]\nEm 11 de abril de 2023, Elon Musk, o então CEO do X, anunciou que os antigos verificados (chamados de legacy verified account), iriam perder o selo azul em 20 de abril de 2023, se não pagassem o Twitter Blue (atual X Premium). Com isso, vários usuários perderam o seu selo azul, agora, só sendo obtido através do X Premium.\n[…]\nEm janeiro de 2010 foi realizada a primeira conexão e acesso pessoal à Internet de origem espacial, utilizando o X. O astronauta Timothy Creamer, escreveu \"Hello Twitterverse\" no serviço de microblogging, diretamente da Estação Espacial Internacional (ISS).\n[…]\nEm maio de 2011, a jornalista brasileira Rosana Hermann lançou um livro pela editora Panda Books, intitulado Um passarinho me contou – Relatos de uma viciada em Twitter. O livro é baseado em histórias vividas por ela desde a sua entrada na rede social em abril de 2007.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Microsoft",
      "descricao": "Empresa americana de software fundada em 1975 por Bill Gates e Paul Allen."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Microsoft surgiu da junção de quais duas palavras?",
    "resposta": "Microcomputador e software",
    "distratores": [
      "Microchip e software",
      "Microfone e software",
      "Microeletrônica e software"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Microsoft"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Microsoft",
        "situacao": "ok",
        "texto": "Microsoft Corporation is an American multinational technology conglomerate headquartered in Redmond, Washington. The company became influential in the rise of personal computers through software like Windows and has since expanded into areas such as Internet services, cloud computing, artificial intelligence and video gaming among others.\n[…]\nMicrosoft opened the India Development Center in Hyderabad in 1998, later adding sites in Bengaluru and Noida. In Dublin, more than 1,600 engineers work on Azure, Copilot and security software.\n[…]\nIn June 2024, Microsoft faced a potential EU fine after regulators accused it of abusing market power by bundling its Teams video-conferencing app with its Office 365 and Microsoft 365 software. The European Commission issued a statement of objections, alleging Microsoft's practice since 2019 gave Teams an unfair market advantage and limited interoperability with competing software. This action followed a 2019 complaint from Slack, which was later acquired by Salesforce.\n[…]\nIn October 2024, Microsoft fired two employees, software engineer Hossam Nasr and data scientist Abdo Mohamed, who organized an unauthorized vigil at its Redmond headquarters to honor Palestinians killed in the Gaza war. The employees, part of the group No Azure for Apartheid, sought to address the company's involvement in the Israeli government's use of its technology.\n[…]\nOn March 20, 2025, before an event at Seattle's Great Hall with Brad Smith and Steve Ballmer, protestors projected \"Microsoft powers genocide\" on the wall. Subsequently, two employees, software engineers Ibtihal Aboussad and Vaniya Agrawal, interrupted AI executive Mustafa Suleyman at a speaking event on April 4, 2025, in protest at the company's support of Israel.\n[…]\nMicrosoft Enterprise Agreement\n[…]\nBusiness data for Microsoft Corporation:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Microsoft",
        "situacao": "ok",
        "texto": "Microsoft Corporation (ou simplesmente Microsoft)(NASDAQ: MSFT) é uma empresa transnacional de tecnologia dos Estados Unidos com sede em Redmond, Washington, que desenvolve, fabrica, licencia, apoia e vende softwares de computador, produtos eletrônicos, computadores e serviços pessoais. Entre seus produtos de software mais conhecidos estão as linhas de sistemas operacionais Windows e a rede social\n[…]\nTradicionalmente, o movimento de software livre abriga os maiores críticos dos produtos Microsoft, em especial o Windows, considerado por muitos um produto instável e inseguro, e o crescimento de soluções livres como o sistema operacional GNU/Linux, que cresceu muito em número de usuários, o navegador Firefox, o servidor Apache e o conjunto de programas de escritório OpenOffice.org, sendo as maiores ameaças ao futuro dos negócios de empresa, juntando a Google e a Apple Inc., que têm crescido muito nos últimos anos.[carece de fontes]?\n[…]\nA partir de 2014, sob a liderança de Satya Nadella, a Microsoft passou a enfatizar computação em nuvem e serviços corporativos, com expansão do Microsoft Azure e maior integração entre seus produtos de produtividade e infraestrutura. Nesse período, a empresa também ampliou sua presença em redes profissionais, desenvolvimento de software e jogos eletrônicos com as aquisições do LinkedIn em 2016, do GitHub em 2018 e da Activision Blizzard em 2023.\n[…]\nEm 1990, a Microsoft abriu a sua subsidiária portuguesa, com apenas 2 pessoas inicialmente. A empresa tem apostado em desenvolver diversas atividades destinadas a promover a indústria de software portuguesa e a maior utilização e conhecimento dos produtos de software. Em 2014, a Microsoft Portugal contava com 289 colaboradores. A Microsoft foi considerada a \"Melhor Empresa para Trabalhar em Portugal\" pelo Great Place to Work® Institute Portugal em 2005, 2008, 2009 e 2010.\n[…]\nMicrosoft Most Valuable Professional",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Wi-Fi",
      "descricao": "Família de padrões de rede local sem fio usada para conectar aparelhos à internet."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Wi-Fi foi criado por uma agência de marketing como trocadilho com qual termo do mundo dos aparelhos de som?",
    "resposta": "Hi-fi, alta fidelidade",
    "distratores": [
      "Estéreo",
      "Dolby",
      "Walkman"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wi-Fi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wi-Fi",
        "situacao": "ok",
        "texto": "Wi-Fi () is a family of wireless network protocols based on the IEEE 802.11 family of standards, which are commonly used for local area networking of devices and Internet access, allowing nearby digital devices to exchange data by radio waves.\n[…]\nThe yin-yang Wi-Fi logo indicates the certification of a product for interoperability. The name is often written as WiFi, Wifi, or wifi, but these are not approved by the Wi-Fi Alliance.\n[…]\nIt is disputed whether the name Wi-Fi is short-form for 'Wireless Fidelity', although the Wi-Fi Alliance did use the advertising slogan \"The Standard for Wireless Fidelity\" for a short time after the brand name was created, referenced \"the Wi-Fi (Wireless Fidelity) logo\" in a white paper and the Wi-Fi Alliance was also called the \"Wireless Fidelity Alliance Inc.\" in some publications.\n[…]\nIEEE, a separate but related organization, has stated \"WiFi is a short name for Wireless Fidelity\" on their website. The name Wi-Fi was partly chosen because it sounds similar to Hi-Fi, which consumers take to mean high fidelity or high quality. Interbrand hoped consumers would find the name catchy, and that they would assume this wireless protocol has high fidelity because of its name.\n[…]\nWhile each amendment is officially revoked when incorporated in the latest version of the standard, the corporate world tends to market to the revisions because they concisely denote capabilities of their products. As a result, in the market place, each revision tends to become its own standard.\n[…]\nCommon format: WIFI:S:<SSID>;T:<WEP|WPA|blank>;P:<PASSWORD>;H:<true|false|blank>;\n[…]\nSample WIFI:S:MySSID;T:WPA;P:MyPassW0rd;;"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wi-Fi",
        "situacao": "ok",
        "texto": "Wi-Fi (pronúncia em inglês [ˈwaɪfaɪ]) é uma marca registrada da Wi-Fi ALLIANCE. É utilizada por produtos certificados que pertencem à classe de dispositivos de rede local sem fios (WLAN) baseados no padrão IEEE 802.11. Por causa do relacionamento íntimo com seu padrão de mesmo nome, o termo Wi-Fi é usado frequentemente como sinônimo para a tecnologia IEEE 802.11. O nome se deriva de uma abreviação\n[…]\nAlguns comparam ao termo Hi-Fi, designado para qualificar aparelhos de som com áudio mais confiável, que é usado desde a década de 1950.\n[…]\nDiferentes marcas concorrentes de pontos de acesso e interfaces de rede para clientes podem inter-operar em um nível básico de serviço. Os produtos designados como Wi-Fi Certified pela Aliança Wi-Fi são compatíveis. Ao contrário de telefones móveis, qualquer dispositivo Wi-Fi padrão irá funcionar em qualquer lugar do mundo.\n[…]\nEsse mecanismo oferece um alto grau de segurança, entretanto, tem como deficiência a alta exigência de processamento, o que pode prejudicar o desempenho do equipamento  em que opera, por essa razão, não é recomendável para usuários domésticos, além de não ser compatível com equipamentos antigos, o que testes para a sua implementação definitiva.\n[…]\nPiggybacking (algo como \"carregar nas costas\") é um termo da língua inglesa que tem sido usado de forma mais ampla como referência a uma conexão de internet sem fio obtida quando alguém leva seu computador (geralmente, um laptop) para dentro da área de acesso de outrem, e usa a internet sem fio de graça, sem o conhecimento ou autorização explícita do assinante do serviço. É uma prática controvertida, tanto legalmente quanto eticamente, com leis que variam de país para país ao redor do mundo.\n[…]\nA Agência de Proteção à Saúde do Reino Unido informou em 2007 que a exposição ao Wi-Fi por um ano resulta na \"mesma quantidade de radiação de uma chamada de 20 minutos de telefone celular\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Macintosh",
      "descricao": "Linha de computadores pessoais da Apple, lançada em 1984."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Macintosh, do computador da Apple lançado em 1984, vem de quê?",
    "resposta": "Uma variedade de maçã",
    "distratores": [
      "Uma cidade escocesa",
      "Um engenheiro da Apple",
      "Uma capa de chuva"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mac_(computer)",
      "https://en.wikipedia.org/wiki/Macintosh_128K"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mac_(computer)",
        "situacao": "ok",
        "texto": "Mac is a brand of personal computers designed and marketed by Apple since 1984. The name is short for Macintosh (its official name until 1999), a reference to the McIntosh apple. As of 2026, the product lineup includes the MacBook Neo, MacBook Air and MacBook Pro laptops, and the iMac, Mac Mini and Mac Studio desktops. Macs are currently sold with Apple's Unix-based macOS operating system, which i\n[…]\nJef Raskin conceived the Macintosh project in 1979, which was usurped and redefined by Apple co-founder Steve Jobs in 1981. The original Macintosh was launched in January 1984 at US$2,495 (equivalent to $7,700 in 2025), after Apple's \"1984\" advertisement during Super Bowl XVIII. A series of incrementally improved models followed, sharing the same integrated case design. In 1987, the Macintosh II brought color graphics, but was priced as a professional workstation and not a personal computer.\n[…]\nBetween 1984 and 1989, Apple had sold one million Macs, and another 10 million over the following five years.\n[…]\nCorporations abandoned Macintosh in droves, replacing it with cheaper and more technically sophisticated Windows NT machines for which far more applications and peripherals existed. Even some Apple loyalists saw no future for the Macintosh. Once the world's second largest computer vendor after IBM, Apple's market share declined precipitously from 9.4% in 1993 to 3.1% in 1997.\n[…]\nThe original Macintosh was marketed at Super Bowl XVIII with the highly acclaimed \"1984\" ad, directed by Ridley Scott. The ad alluded to George Orwell's novel Nineteen Eighty-Four, and symbolized Apple's desire to \"rescue\" humanity from the conformity of computer industry giant IBM. The ad is now considered a \"watershed event\" and a \"masterpiece\".\n[…]\nSandberg-Diment, Erik (January 24, 1984). \"Hardware review: Apple Weighs In With Its Macintosh\". The New York Times. ISSN 0362-4331."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Macintosh_128K",
        "situacao": "ok",
        "texto": "The Macintosh, later rebranded as the Macintosh 128K, is the original Macintosh personal computer from Apple. It is the first successful mass-market all-in-one desktop personal computer with a graphical user interface, built-in screen and mouse. It was pivotal in establishing desktop publishing as a general office function. A motherboard, a 9 in (23 cm) monochrome CRT monitor, and a floppy drive a\n[…]\nIn April 1984, Microsoft's Multiplan migrated over from MS-DOS, with Microsoft Word following in January 1985. In return for Microsoft's commitment to Macintosh, Apple agreed to not provide software development kits and prototype computers to companies with applications competing with Microsoft's. Apple introduced the Macintosh Office concept the same year with the \"Lemmings\" ad; infamous for insulting its own potential customers, the ad was not successful.\n[…]\nIn September 1984, after months of complaints over the Mac's inadequate RAM, Apple released an official 512 KB machine, the  Macintosh 512K. At that time, Apple rebranded the original model as \"Macintosh 128K\" and modified the motherboard to allow easier RAM upgrades. Improving on the hard-wired RAM thus required a motherboard replacement (which was priced similarly to a new computer), or a third-party chip replacement upgrade, which was not only expensive but would void Apple's warranty.\n[…]\nIn the May 1984 issue Williams added, \"Initial reaction to the Macintosh has been strongly, but not overpoweringly, favorable. A few traditional computer users see the mouse, the windows, and the desktop metaphor as silly, useless frills, and others are outraged at the lack of color graphics, but most users are impressed by the machine and its capabilities.\n[…]\nFull Macintosh 128K specifications (Apple Computer) at the Wayback Machine (archived May 14, 2008)\n[…]\nThe Original Macintosh, anecdotes and the people who made it"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Macintosh",
        "situacao": "ok",
        "texto": "Macintosh (comumente abreviado para Mac desde 1998) é uma linha de computadores pessoais fabricados e comercializados pela empresa Apple desde janeiro de 1984. O nome deriva de McIntosh, um tipo de maçã apreciado por Jef Raskin. O Apple Macintosh foi o primeiro computador pessoal a popularizar a interface gráfica, tela incorporada e mouse. Ele é muito utilizado para o tratamento de vídeo, imagem e\n[…]\nDesde a criação do Macintosh, a maçã sempre resistiu a licenciar sua arquitetura para outras empresas, mantendo-se a fornecedora exclusiva.\n[…]\nEm 1995, criticada pelo alto custo e performance da linha, e com sua fatia no mercado de computadores diminuindo rapidamente, a Apple autorizou um grupo de empresas, incluindo Umax e Power Computing, a fabricar clones do Macintosh. Esperava-se que estas empresas conquistassem outros segmentos do mercado, com modelos diferenciados de Macintosh, preenchendo nichos não explorados pela Apple.\n[…]\nEm junho de 2005, Steve Jobs anuncia que a Apple estava prestes a trocar os processadores PowerPC de seus computadores por processadores da Intel. Os primeiros modelos de Macintosh equipados com chips da Intel apareceram à venda em janeiro de 2006: o MacBook Pro e o iMac, ambos equipados com o processador Intel Core Duo. A Apple anuncia que o MacBook Pro é quatro vezes mais rápido do que o PowerBook G4, e o iMac duas vezes mais rápido que o iMac G5.\n[…]\nEm 5 de abril de 2006 a Apple anuncia a disponibilidade de Boot Camp, uma coleção de tecnologias que auxilia usuários na instalação de Windows XP Service Pack 2 (edições Home ou Professional) em computadores Macintosh baseados em processadores intel. A Apple acredita, com esse lançamento, que Boot Camp torne o Mac ainda mais atraente para os usuários de Windows que consideram a possibilidade de trocar seu PC por um Macintosh.\n[…]\nMacintosh II\n[…]\nMaking the Macintosh: Technology and Culture in Silicon Valley",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Orkut",
      "descricao": "Rede social do Google lançada em 2004, extremamente popular no Brasil."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A rede social Orkut, febre no Brasil nos anos dois mil, recebeu o nome de quem?",
    "resposta": "Seu criador, um engenheiro turco",
    "distratores": [
      "Um bairro de Istambul",
      "Uma deusa turca",
      "Uma ave asiática"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Orkut",
      "https://en.wikipedia.org/wiki/Orkut_B%C3%BCy%C3%BCkk%C3%B6kten"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Orkut",
        "situacao": "ok",
        "texto": "Orkut foi uma rede social filiada ao Google, criada em 24 de janeiro de 2004 e desativada em 30 de setembro de 2014. Seu nome é originado no projetista chefe, Orkut Büyükkökten, engenheiro turco do Google.\n[…]\nEm abril de 2022, o site da rede social foi reativado. Seu criador, o programador turco Büyükkökten, anunciou o retorno em mensagem assinada no site e informou estar construindo algo novo. Em outubro de 2026, o site foi atualizado, com uma contagem regressiva até as 10 horas (Horário de Brasília) do dia 8 de outubro de 2026, e com uma mensagem em Inglês e Português indicando grandes mudanças no site.\n[…]\nComo acontece na maioria dos sites de rede social, no Orkut existiu inúmeros perfis falsos (também chamados de fakes). Esses perfis geralmente se passam por pessoas famosas ou personagens de filmes, animes, super-heróis ou games, assim sendo óbvio que eles são falsos. Eles são criados tanto para proteger a identidade da pessoa quanto para diversão, e não são ilegais. O problema é quando o perfil é de outra pessoa, seja ela viva ou morta.\n[…]\nEsse \"worm\" roubava detalhes bancários de usuários, como login e senha se propagando através do Orkut. O ataque era iniciado quando um usuário lançava um arquivo executável disfarçado de arquivo JPEG. O executável inicial que causou a infecção então instalava mais dois arquivos no computador do usuário. Esses arquivos então enviavam um e-mail com detalhes da conta bancária para o criador do \"worm\" quando o usuário infectado clicava no ícone \"Meu Computador\".\n[…]\nPaulo, após o encerramento da rede, os nomes de domínio do Orkut passariam a ser administrados de volta pelo criador da rede, o engenheiro turco Orkut Büyükkökten.\n[…]\nwww.orkut.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Orkut_B%C3%BCy%C3%BCkk%C3%B6kten",
        "situacao": "ok",
        "texto": "Orkut Büyükkökten (born February 6, 1975) is a Turkish software engineer who developed the social networking services Club Nexus, inCircle and Orkut. He is a former product manager at Google.\n[…]\nLater, Büyükkökten introduced an alumni social network, named inCircle, for the Stanford Alumni Association intended for use by university alumni groups. In 2002, Büyükkökten launched a company, Affinity Engines, to commercialize inCircle and Club Nexus.\n[…]\nAfter leaving Affinity Engines and joining Google, he decided to use his 20% time to develop a social networking service. He said: \"My dream was to connect all the Internet users so they can relate to each other, it can make such a difference in people's lives.\" The product manager and Marissa Mayer thought of naming the service after its creator. \"Orkut.com\" belonged to Orkut Büyükkökten himself. Google convinced him, and its social networking service was called Orkut.\n[…]\nBüyükkökten and Google were sued by Affinity Engines in 2004 for trade secret misappropriation. Affinity Engines claimed that Büyükkökten and Google had stolen Affinity Engines' code to launch the \"Orkut.com\" social networking service at Google. The lawsuit was settled in 2006.\n[…]\nIn 2016, he launched a new social networking service, Hello. The social networking site can be customized in three languages — English, French and Portuguese. By August 2016, Hello was available in the US, Canada, France, UK, Australia, New Zealand, Ireland, and Brazil — both on iOS and Android. Hello announced its entry into the Indian market in April 2018. By September 2022, Hello had shut down.\n[…]\nOrkut.com"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "QR Code",
      "descricao": "Código de barras bidimensional, em forma de quadrado, criado em 1994 pela japonesa Denso Wave."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na sigla QR Code, as letras QR vêm de duas palavras inglesas que significam o quê?",
    "resposta": "Resposta rápida",
    "distratores": [
      "Código rápido",
      "Quadrado de registro",
      "Leitura de qualidade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/QR_code"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/QR_code",
        "situacao": "ok",
        "texto": "A QR code, short for quick-response code, is a type of two-dimensional matrix barcode invented in 1994 by Masahiro Hara of the Japanese company Denso Wave for labelling automobile parts. It features white (\"0\") and black (\"1\") squares within a square grid featuring fiducial markers on the corners, readable by imaging devices like cameras, and processed using Reed–Solomon error correction until the\n[…]\nAugust 2024 – ISO/IEC 18004:2024 Information technology — Automatic identification and data capture techniques — QR code bar code symbology specification\n[…]\nThe use of QR code technology is freely licensed as long as users follow the standards for QR code documented with JIS or ISO/IEC. Non-standardized codes may require special licensing.\n[…]\nThe U.S. Trademark for the term QR Code is Trademark 2435991 and was filed on 29 September 1998 with an amended registration date of 13 March 2001, assigned to Denso Corporation. In South Korea, trademark application filed on 18 November 2011 was refused on 20 March 2012, because the Korean Intellectual Property Office viewed that the phrase was genericized among South Korean people to refer to matrix barcodes in general.\n[…]\nAztec Code\n[…]\nISO/IEC 18004:2024. Information technology. Automatic identification and data capture techniques. QR code bar code symbology specification.\n[…]\nBS ISO/IEC 18004:2006. Information technology. Automatic identification and data capture techniques. Bar code symbology. QR Code. Geneva: ISO/IEC. 2000. p. 114. OCLC 60816353.\n[…]\nBS ISO/IEC 18004:2006. Information technology. Automatic identification and data capture techniques. QR Code 2005 bar code symbology specification. London: BSI. 2007. p. 126. ISBN 978-0-580-67368-9. Retrieved 4 May 2023.\n[…]\nReed Solomon Codes for Coders – an elaborate tutorial on Wikiversity, covering both QR code structure and the Reed Solomon codes used to encode the data."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%B3digo_QR",
        "situacao": "ok",
        "texto": "[[File:Rickrolling QR code.png\n[…]\nCódigo QR (sigla do inglês Quick Response, \"resposta rápida\" em português) é um código de barras, ou barrametrico, bidimensional, que pode ser facilmente escaneado usando a maioria dos telefones celulares equipados com câmera. O código foi criado em 1994 pela companhia japonesa Denso Wave. Esse código é convertido em texto (interativo), um endereço URI, um número de telefone, uma localização georreferenciada, um e-mail, um contato ou um SMS.\n[…]\nTerceira Geração: QR Codes dinâmicos múltiplos. Um só código entrega vários conteúdos dinâmicos tais como links, PDF, Vídeo, Realidade Aumentada, dentre outros. Também recomendado para aplicações industriais e corporativas, pois permite ajustes mesmo após o QR Code ter sido impresso. Os múltiplos conteúdos podem ser editados em uma espécie de CMS - Content Management System, que hospeda dados e analytics.\n[…]\nOs códigos QR podem ser usados para:\n[…]\nO uso de códigos QR é livre de qualquer licença, sendo definido e publicado como um padrão ISO. Os direitos de patente pertencem à empresa Denso Wave, que decidiu não usá-los. O termo QR code é uma marca registrada da Denso Wave Incorporated.\n[…]\n\"Acabou de ler o primeiro código QR do mundo feito em calçada portuguesa\", disponível em português e em inglês, é a mensagem inicial que aparece ao entrar nesta experiência. Num segundo nível de informação foram acrescentadas informações turísticas e comerciais sobre a oferta cultural, gastronómica, hoteleira e de comércio no Chiado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Hewlett-Packard",
      "descricao": "Empresa americana de tecnologia fundada em 1939 por Bill Hewlett e David Packard."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Uma das primeiras clientes da HP, a Disney, comprou osciladores de áudio da empresa para preparar o som de qual filme?",
    "resposta": "Fantasia",
    "distratores": [
      "Branca de Neve",
      "Pinóquio",
      "Dumbo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hewlett-Packard"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hewlett-Packard",
        "situacao": "ok",
        "texto": "The Hewlett-Packard Company, commonly shortened to Hewlett-Packard ( HEW-lit PAK-ərd) or HP, was an American multinational information technology company. It was founded by Bill Hewlett and David Packard in 1939 in a one-car garage in Palo Alto, California. Growing to become an influential high-tech powerhouse at the heart of Silicon Valley, the company was known for its progressive business philo\n[…]\nHP initially produced a line of electronic test and measurement equipment. It won its first big contract in 1938 to provide the HP 200B, a variation of its first product, the HP 200A low-distortion frequency oscillator, for Walt Disney's production of the 1940 animated film Fantasia, which allowed Hewlett and Packard to formally establish the Hewlett-Packard Company on July 2, 1939. The company grew into a multinational corporation widely respected for its products.\n[…]\nOne of the company's earliest customers was Bud Hawkins, chief sound engineer for Walt Disney Studios, who bought eight HP 200B audio oscillators (at $71.50 each) to be used in the animated film Fantasia. HP's profit at the end of 1939, its first full year of business, was $1,563 (equivalent to $36,177 in 2025) on revenues of $5,369.\n[…]\nFrom 1995 to 1999, Hewlett-Packard were sponsors of the English football team Tottenham Hotspur.\n[…]\nOn October 29, 2014, Hewlett-Packard announced its new Sprout personal computer.\n[…]\nHewlett-Packard supplies a range of technology solutions and hardware infrastructure to various Israeli institutions, including the military, government agencies, and law enforcement bodies. Among its notable clients is the Israeli Immigration and Population Authority, to which the company provides dedicated technological support and equipment.\n[…]\nList of acquisitions by Hewlett-Packard\n[…]\nList of Hewlett-Packard products\n[…]\nHewlett-Packard Credit Union\n[…]\nHewlett-Packard\n[…]\nBusiness data for Hewlett-Packard Company:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hewlett-Packard",
        "situacao": "ok",
        "texto": "A Hewlett-Packard Company (comumente referida como HP) foi uma companhia de tecnologia da informação multinacional americana, até sua divisão, ocorrida em 2015 (gerando as empresas HP Inc. e Hewlett-Packard Enterprise). Tinha sua sede em Palo Alto, na Califórnia, Estados Unidos.\n[…]\nEm 6 de Outubro, 2014, a Hewlett-Packard anunciou seus planos para dividir o ramo de PCs e impressoras da área de negócios e serviços. A divisão ocorreu em 1º de Novembro de 2015 e resultou na criação de duas empresas de capital aberto: HP Inc. e Hewlett Packard Enterprise.\n[…]\nAntes disso Inventaram uma série de produtos mas a grande mudança de nível foi a criação de um oscilador de áudio, um instrumento muito usado por engenheiros de som para fazer testes. Um de seus primeiros clientes foi a Walt Disney Studios que adquiriu 8 destes osciladores Modelo 200B (uma versão melhorada criando assim a primeira linha de produtos). A aquisição pela Walt Disney foi para poderem desenvolver e testar o som do filme de animação \"Fantasia\", de 1943.\n[…]\nEm 2001 morre Bill Hewlett.\n[…]\nEm 2014 a HP anunciou o projeto de divisão em duas empresas, para separar a atividade de material de informática (computadores e impressoras) do setor de serviços para as empresas. O projeto deve ser concluído no ano fiscal de 2015. e resultou em duas empresas de capital aberto: HP Inc. e Hewlett Packard Enterprise.\n[…]\nA Hewlett-Packard está disponibilizando também em parceria com a Microsoft uma solução para atender empresas de telecomunicações e provedoras de serviços de Internet. A plataforma principal é baseada no Microsoft Comercial Internet System (MCIS), um pacote de aplicativos integrados para Windows NT Server que possui e-mail, notícias, chats, comércio eletrônico e transmissão em tempo real (streaming media).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Código de barras",
      "descricao": "Representação de dados em barras paralelas lidas por scanners, criada por Norman Joseph Woodland e Bernard Silver."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Norman Woodland teve a ideia do código de barras ao esticar, na areia de uma praia, os sinais de qual código?",
    "resposta": "Código Morse",
    "distratores": [
      "Braille",
      "Código binário",
      "Alfabeto semafórico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Barcode",
      "https://en.wikipedia.org/wiki/Norman_Joseph_Woodland"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Barcode",
        "situacao": "ok",
        "texto": "A barcode or bar code is a method of representing data in a visual, machine-readable symbolic form. Initially, barcodes represented data by varying the widths, spacings and sizes of parallel lines. These barcodes, commonly referred to as linear or one-dimensional (1D), can be scanned by optical scanners known as barcode readers. Later, two-dimensional (2D) variants were developed, using rectangles\n[…]\nThe barcode was invented by Norman Joseph Woodland and Bernard Silver and patented in the US in 1952. The invention was based on Morse code that was extended to thin and thick bars. However, it took over twenty years before this invention became commercially successful. UK magazine Modern Railways December 1962 pages 387–389 record how British Railways had already perfected a barcode-reading system capable of correctly reading rolling stock travelling at 100 mph (160 km/h) with no mistakes.\n[…]\nIn 1948, Bernard Silver, a graduate student at Drexel Institute of Technology in Philadelphia, Pennsylvania, US overheard the president of the local food chain, Food Fair, asking one of the deans to research a system to automatically read product information during checkout. Silver told his friend Norman Joseph Woodland about the request, and they started working on a variety of systems. Their first working system used ultraviolet ink, but the ink faded too easily and was expensive.\n[…]\nConvinced that the system was workable with further development, Woodland left Drexel, moved into his father's apartment in Florida, and continued working on the system. His next inspiration came from Morse code, and he formed his first barcode from sand on the beach."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Norman_Joseph_Woodland",
        "situacao": "ok",
        "texto": "Norman Joseph Woodland (September 6, 1921 – December 9, 2012) was an American Jewish inventor and engineer, best known as one of the inventors of the barcode, for which he received a patent in October 1952. Later, employed by IBM, he developed the format which became the ubiquitous Universal Product Code (UPC) of product labeling and check-out stands.\n[…]\nWoodland was born in Atlantic City, New Jersey, on September 6, 1921, the elder of two boys in his family.\n[…]\nWoodland took some stock market earnings, quit his teaching job and moved to his grandfather's Florida apartment. While at the beach, Woodland again considered the problem, recalling, from his Boy Scout training, how Morse code dots and dashes are used to send information electronically. He drew dots and dashes in the sand similar to the shapes used in Morse code.\n[…]\nAfter pulling them downward with his fingers, producing thin lines resulting from the dots and thick lines from the dashes, he came up with the concept of a two-dimensional, linear Morse code, and after sharing it with Silver and adapting optical sound film technology, they applied for a patent on October 20, 1949, receiving U.S. patent 2,612,994 Classifying Apparatus and Method on October 7, 1952, covering both linear barcode and circular bulls-eye printing designs.\n[…]\nWoodland died from the effects of Alzheimer's disease on December 9, 2012, in Edgewater, New Jersey.\n[…]\nIn 1973, IBM presented Woodland with their Outstanding Contribution Award.\n[…]\nIn 1992, Woodland was awarded the National Medal of Technology from President George H. W. Bush for his contribution to barcode technology.\n[…]\nIn 1998, Woodland received an honorary degree from his alma mater, Drexel University.\n[…]\nIn 2011, Woodland was inducted into the National Inventors Hall of Fame."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%B3digo_de_barras",
        "situacao": "ok",
        "texto": "Código de barras (em inglês: barcode) é um método de representação de dados de forma visual e legível por máquinas. Inicialmente, os códigos de barras eram representados pela variação das larguras e espaçamentos das linhas paralelas. Esses códigos, agora comumente chamados de lineares ou unidimensionais (1D), podem ser decodificados (lidos) por scanners ópticos especiais, chamados de leitores de c\n[…]\nA primeira patente de um código de barras foi atribuída em 1952 a Joseph Woodland e Bernard Silver. Seu código consistia num padrão de circunferências concéntricas de espessura variável.\n[…]\nEm 1969, a Associação Nacional das Cadeias Alimentares (NAFC) realizou uma reunião, onde se discutiu a ideia de sistemas de verificação geral automatizados. A RCA tinha comprado os direitos à patente de Woodland original, participou da reunião e deu início a um projeto interno para desenvolver um sistema baseado no código bullseye. A cadeia de supermercados Kroger se ofereceu para testá-lo.\n[…]\nScanners de interface de teclado se conectam a um computador usando um teclado PS/2 ou cabo adaptador AT compatível com teclado (a \"interface de teclado\"). Os dados do código de barras são enviados para o computador como se tivessem sido digitados no teclado.\n[…]\nNo entanto, esses dispositivos não são projetados especificamente para a captura de códigos de barras. Como resultado, eles não decodificam quase tão rapidamente um scanner de código de barras dedicado ou um terminal de dados portátil.\n[…]\nOs códigos de barras QR são utilizados na maioria das vezes para marketing, seja este pessoal ou empresarial. Podem conter várias informações diferentes, sendo essas, por exemplo, cartões pessoais, contendo seu nome, contato e empresa onde trabalha. Ou também o website, onde a pessoa, ao fazer a leitura com um smartphone, seria levada diretamente a sua página online, por meio do código.\n[…]\nLista de códigos de país GS1",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "YouTube",
      "descricao": "Site de compartilhamento de vídeos criado em 2005 nos Estados Unidos e comprado pelo Google em 2006."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Os três fundadores do YouTube, criado em 2005, tinham sido colegas de trabalho em qual empresa?",
    "resposta": "PayPal",
    "distratores": [
      "Google",
      "Yahoo",
      "eBay"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/YouTube"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/YouTube",
        "situacao": "ok",
        "texto": "YouTube  is an American online video-sharing platform owned by Google. YouTube was founded on February 14, 2005, by Chad Hurley, Jawed Karim, and Steve Chen, all of whom were former employees at PayPal. Headquartered in San Bruno, California, it is the second-most-visited website in the world, after Google itself. In January 2024, YouTube had reached more than 2.7 billion monthly active users, who\n[…]\nYouTube was founded by Chad Hurley, Jawed Karim, and Steve Chen. The three were early employees at PayPal and had become wealthy after eBay's acquisition of the company. Hurley had studied design at the Indiana University of Pennsylvania, and Chen and Karim studied computer science together at the University of Illinois Urbana-Champaign.\n[…]\nAccording to a story that has often been repeated in the media, Hurley and Chen developed the idea for YouTube during the early months of 2005, after they had experienced difficulty sharing videos that had been shot at a dinner party at Chen's apartment in San Francisco.\n[…]\nYouTube was not the first video-sharing site on the Internet; Vimeo was founded in November 2004, though that site remained a side project of its developers from CollegeHumor. On December 17, 2005, the same week YouTube exited beta, NBCUniversal Saturday Night Live ran a sketch \"Lazy Sunday\" by The Lonely Island. Besides helping to bolster ratings and long-term viewership for Saturday Night Live, \"Lazy Sunday\"'s status as an early viral video helped establish YouTube as an important website.\n[…]\nYouTube has been led by a CEO since its founding in 2005, beginning with Chad Hurley, who led the company until 2010. After Google acquired YouTube, the CEO role was retained. Salar Kamangar took over Hurley's position and kept the job until 2014. He was replaced by Susan Wojcicki, who later resigned in 2023. On February 16, 2023, Neal Mohan was appointed as the new CEO.\n[…]\nList of YouTubers"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/YouTube",
        "situacao": "ok",
        "texto": "YouTube é uma plataforma de compartilhamento de vídeos com sede em San Bruno, Califórnia. O serviço foi criado por três ex-funcionários do PayPal — Chad Hurley, Steve Chen e Jawed Karim — em fevereiro de 2005. O Google comprou o site em novembro de 2006 por 1,65 bilhão de dólares. Desde então o YouTube funciona como uma das subsidiárias do Google.\n[…]\nO YouTube foi fundado por Chad Hurley, Steve Chen e Jawed Karim, que eram funcionários da PayPal. Antes de trabalhar no PayPal, Hurley estudou design na Indiana University of Pennsylvania, e Chen e Karim estudaram ciência da computação juntos na University of Illinois em Urbana-Champaign.\n[…]\nO domínio \"YouTube.com\" foi ativado em 15 de fevereiro de 2005 e o site foi desenvolvido nos meses seguintes. Os criadores do site ofereceram uma prévia do site ao público em maio de 2005, seis meses antes do lançamento oficial. O primeiro vídeo do YouTube, intitulado Me at the zoo, publicado em abril do mesmo ano, mostra o co-fundador Jawed Karim no Zoológico de San Diego. O vídeo foi publicado em 23 de abril de 2005 e ainda pode ser visualizado no site.\n[…]\nEm 9 de outubro de 2006, foi anunciado que a companhia seria comprada pelo Google por 1 650 milhões de dólares em ações. O negócio entre Google e YouTube veio depois que o YouTube apresentou três acordos com empresas de comunicação em uma tentativa de evitar processos sobre infração de direitos autorais. O YouTube continuou operando independentemente, com seus co-fundadores e 67 empregados trabalhando dentro da empresa.\n[…]\nNo YouTube\n[…]\nFora do YouTube\n[…]\nO YouTube há sido alvo de ações de censura em vários países por causa do conteúdo que hospeda. O site já foi bloqueado em vários países desde o seu lançamento, como Austrália Indonésia, Irã, Paquistão, Síria, Sudão, Tailândia, Tunísia e Turquia.\n[…]\nGoogle, empresa dona do YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "CAPTCHA",
      "descricao": "Teste automático usado em sites para distinguir pessoas de programas, como digitar letras distorcidas."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O guatemalteco Luis von Ahn, um dos criadores do captcha, fundou depois qual aplicativo de ensino de idiomas?",
    "resposta": "Duolingo",
    "distratores": [
      "Babbel",
      "Rosetta Stone",
      "Busuu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Luis_von_Ahn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Luis_von_Ahn",
        "situacao": "ok",
        "texto": "Luis von Ahn (Spanish: [ˈlwis fon ˈan]; born 19 August 1978) is a Guatemalan-American entrepreneur and software developer. He is the founder of the company reCAPTCHA, which was sold to Google in 2009, and the co-founder and CEO of Duolingo. For these projects and others, von Ahn is known as one of the pioneers of crowdsourcing.\n[…]\nLuis von Ahn was born and raised in Guatemala City. Of German descent from his father side, his mother was one of the first women in Guatemala to complete medical school. She gave birth to von Ahn at age 42, and raised him as a single mother. Von Ahn attended the American School of Guatemala, a private English-language school in Guatemala City, an experience he cites as a great privilege.\n[…]\nIn 2009, von Ahn and his graduate student Severin Hacker began to develop Duolingo, a language education platform. They founded a company of the same name, with von Ahn as chief executive officer and Hacker as chief technology officer. In November 2011, a private beta test of Duolingo was launched and the app was released to the public in June 2012. As of May 2020, Duolingo was valued at $1.5 billion.\n[…]\nIn a talk with NPR, von Ahn shared that Duolingo saw a spike in users during the COVID-19 pandemic. von Ahn has a chapter giving advice in Tim Ferriss' book Tools of Titans.\n[…]\nIn 2021, von Ahn established the Luis von Ahn Foundation. Its focus is to support Guatemalans, especially women and girls, through financial support to local community leaders and nonprofit organizations. According to the foundation website, in 2022 it will give US$3 million to various organizations that focus on \"women's and girls equality, conservation of the environment, and democracy and youth participation.\"\n[…]\nProfile: Luis von Ahn NOVA scienceNOW aired 2009-06-30\n[…]\nLuis von Ahn Foundation Website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Luis_von_Ahn",
        "situacao": "ok",
        "texto": "Luis von Ahn (Cidade da Guatemala, 19 de agosto de 1978) é um empreendedor e professor guatemalteco. Associado no departamento de Ciências da Computação da Carnegie Mellon School, ele é conhecido como um dos pioneiros do crowdsourcing. É o fundador da companhia reCAPTCHA, que foi vendida para o Google em 2009, e o cofundador e CEO do Duolingo, uma popular plataforma de ensino de línguas.\n[…]\nVon Ahn nasceu e cresceu na Cidade da Guatemala, onde ambos pais trabalhavam como médicos e sua família possuía uma fábrica de doces. Ele frequentou a American School of Guatemala e graduou-se em 1996. Ele recebeu um B.S em Matemática (summa cum laude) da Universidade Duke em 2000, e obteve um Ph.D. da Carnegie Mellon University em 2005 com supervisão do professor Manuel Blum. Em 2006 entrou para a faculdade no Carnegie Mellon School of Computer Science.\n[…]\nComo professor, suas pesquisas incluem CAPTCHAs e computação humana, que ganhou reconhecimento internacional e numerosas honrarias.\n[…]\nA partir de 2014 von Ahn está trabalhando no Duolingo, uma companhia que objetiva ajudar milhões de pessoas a traduzir a Web para todos os principais idiomas.\n[…]\nVon Ahn tem usado um número incomum de técnicas em suas aulas, ganhando vários prêmios de ensino na Universidade Carnegie Mellon. No segundo semestres de 2008, ele começou a ensinar um novo curso na Universidade Carnegie Mellon intitulado \"Ciências da Web\". Uma combinação da teoria gráfica e ciências social, o curso abrange tópicos de network e teorias de jogos para auction theory.\n[…]\nLuis von Blog, Luis von Ahn's weblog\n[…]\nLuis von Ahn no Twitter\n[…]\nProfile: Luis von Ahn NOVA scienceNOW aired 2009-06-30",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "1984 (comercial da Apple)",
      "descricao": "Comercial de televisão que apresentou o computador Macintosh, exibido no Super Bowl de 1984."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O comercial 1984, que lançou o Macintosh no Super Bowl, faz referência ao romance de qual escritor britânico?",
    "resposta": "George Orwell",
    "distratores": [
      "Aldous Huxley",
      "H. G. Wells",
      "Anthony Burgess"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1984_(advertisement)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1984_(advertisement)",
        "situacao": "ok",
        "texto": "\"1984\" is an American television commercial that introduced the Apple Macintosh personal computer. It was conceived by Steve Hayden, Brent Thomas, and Lee Clow at Chiat/Day, produced by New York production company Fairbanks Films, and directed by Ridley Scott. The ad was a reference to George Orwell's noted 1949 novel, Nineteen Eighty-Four, which described a dystopian future ruled by a televised \"\n[…]\nWas George Orwell right about 1984?\n[…]\nThe estate of George Orwell and the television rightsholder to the novel Nineteen Eighty-Four considered the commercial to be copyright infringement and sent a cease-and-desist letter to Apple and Chiat/Day in April 1984.\n[…]\n1984: Clio Awards\n[…]\n1984: 31st Cannes Lions International Advertising Festival—Grand Prix\n[…]\n2007: Best Super Bowl Spot (in the game's 40-year history)\n[…]\nSuper Bowl viewers were overwhelmed by the startling ad. The ad garnered millions of dollars worth of free publicity, as news programs rebroadcast it that night. It was quickly hailed by many in the advertising industry as a masterwork. Advertising Age named it the 1980s Commercial of the Decade, and it continues to rank high on lists of the most influential commercials of all time [...] '1984' was never broadcast again, adding to its mystique.\n[…]\nThe ad has also been cited as the turning point for Super Bowl commercials, which had been important and popular before (especially Coca-Cola's \"Hey Kid, Catch!\" featuring \"Mean\" Joe Greene during Super Bowl XIV) but after \"1984\" those ads became the most expensive, creative and influential advertising set for all television coverage.\n[…]\nMedia archivist and early Apple supporter Marion Stokes recorded the Super Bowl broadcast featuring the legendary ad, which was then featured in the 2019 documentary film Recorder: The Marion Stokes Project.\n[…]\nThink Different, an Apple advertising slogan\n[…]\nList of Super Bowl commercials\n[…]\n1984 at IMDb"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Bliss (fotografia)",
      "descricao": "Fotografia de uma colina verde sob céu azul, usada como papel de parede padrão do Windows XP."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A famosa foto de uma colina verde sob céu azul, papel de parede padrão do Windows XP, foi tirada em que lugar?",
    "resposta": "Califórnia, nos Estados Unidos",
    "distratores": [
      "Irlanda",
      "Nova Zelândia",
      "Suíça"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bliss_(image)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bliss_(image)",
        "situacao": "ok",
        "texto": "Bliss, originally titled Bucolic Green Hills, is the default wallpaper of Microsoft's Windows XP operating system. It is a photograph of green rolling hills and daytime sky with cirrus clouds. Charles O'Rear, a former National Geographic photographer, took the photo in January 1996 near the Napa–Sonoma county line, California, after a phylloxera infestation forced vineyards to be cleared from the \n[…]\nThe photograph depicts a lush green rolling hill with cirrus clouds during a daytime sky, with mountains far in the background. It was taken by Charles O'Rear, a former National Geographic photographer and resident of St. Helena, California, in the Napa Valley region north of San Francisco, while on his way to visit his girlfriend in January 1996.\n[…]\nHe drove along the Sonoma Highway, California State Route 121 intersecting 12, when he noticed the hill, which had been cleared of vineyards after a phylloxera infestation years prior. O'Rear came to a stop in southern Sonoma County, near the Napa–Sonoma county line and pulled off the road.\n[…]\nShortly before Microsoft retired Windows XP in April 2014, news about the Bliss photograph escalated in popularity.\n[…]\nTheir work, titled After Microsoft, was created when the Luna theme was replaced by Aero in Windows Vista and also discussed the history of the photograph and its legacy after the phasing out of Windows XP's default theme. The duo said that they were attracted to the Bliss location due to it being \"a backdrop to our lives in the front of the screen, as a kind of collective subconscious.\" Their work was exhibited at the gallery La Vitrine in Paris in 2007.\n[…]\nArt historian Julian Myers-Szupinska said that with the return of vineyards, the Goldin+Senneby Bliss re-creation \"loses its shine.\"\n[…]\nMedia related to Bliss (photograph) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bliss_%28imagem%29",
        "situacao": "ok",
        "texto": "Bliss (originalmente intitulado como Bucolic Green Hills) é uma imagem para Windows desenvolvida por Stephane Couture & Marc-Antoine Tanguay. A imagem foi incluída nos temas do Microsoft Windows XP, produzida por um fotógrafo na Califórnia.\n[…]\nA fotografia que a imagem teve como base foi feita por Charles O'Rear, um morador de St. Helena, no condado de Napa, para a empresa HighTurn. De acordo com ele, a imagem não foi alterada ou editada de alguma forma até então. O local é aproximadamente em 38.249°N 122.410°W.\n[…]\nWindows XP",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Google",
      "descricao": "Empresa americana de tecnologia fundada em 1998 por Larry Page e Sergey Brin, dona do buscador de mesmo nome."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que universidade americana o Google nasceu, como projeto de doutorado de Larry Page e Sergey Brin?",
    "resposta": "Universidade Stanford",
    "distratores": [
      "Universidade Harvard",
      "MIT",
      "Universidade da Califórnia, Berkeley"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Google"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Google",
        "situacao": "ok",
        "texto": "Google (officially known as Google LLC) ( , GOO-gəl) is an American multinational technology corporation focused on information technology, online advertising, search engine technology, email, cloud computing, software, quantum computing, e-commerce, consumer electronics, and artificial intelligence (AI). It has been referred to as \"the most powerful company in the world\" by the BBC, and is one of\n[…]\nGoogle was founded in 1998 by American computer scientists Larry Page and Sergey Brin. Together, they own about 14% of its publicly listed shares and control 56% of its stockholder voting power through super-voting stock. The company went public via an initial public offering (IPO) in 2004. In 2015, Google was reorganized as a wholly owned subsidiary of Alphabet Inc. Google is Alphabet's largest subsidiary and is a holding company for Alphabet's internet properties and interests.\n[…]\nGoogle began in January 1996 as a research project by Larry Page and Sergey Brin with additional contribution from Scott Hassan. Page and Brin published their research, along with\n[…]\nRajeev Motwani and Terry Winograd, as the PageRank algorithm and Stanford owned the patent. PageRank determines a website's relevance by the pages that linked back to the original site. Page told his ideas to Hassan, who began writing the code to implement Page's ideas. Page and Brin would also use their friend Susan Wojcicki's garage as their office when the search engine was set up in 1998.\n[…]\nThe original Google logo was designed by Sergey Brin. Since 1998, Google has been designing special, temporary alternate logos to place on their homepage intended to celebrate holidays, events, achievements and people. The first Google Doodle was in honor of the Burning Man Festival of 1998. The doodle was designed by Larry Page and Sergey Brin to notify users of their absence in case the servers crashed.\n[…]\nBusiness data for Google, Inc.:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Google",
        "situacao": "ok",
        "texto": "Google ([ˈɡuːɡəl] GOO-ghəl) é uma empresa multinacional de softwares e serviços online (baseado na nuvem) fundada em 1998 na cidade norte-americana de Menlo Park (estado da Califórnia), que lucra principalmente através da publicidade pelo AdWords. A Google é a principal subsidiária da Alphabet Inc.\n[…]\nA empresa foi fundada por Larry Page e Sergey Brin, muitas vezes apelidados de \"Google Guys\", enquanto os dois estavam frequentando a Universidade Stanford como estudantes de doutoramento. Foi fundada como uma empresa privada em 4 de setembro de 1998 e sua oferta pública inicial foi realizada em 19 de agosto de 2004. A missão declarada da empresa desde o início foi \"organizar a informação mundial e torná-la universalmente acessível e útil\" e seu slogan oficial era \"Não seja mal\".\n[…]\nO Google começou em janeiro de 1996 como um projeto de pesquisa de Larry Page e Sergey Brin, quando ambos eram estudantes de doutorado na Universidade Stanford, na Califórnia, Estados Unidos.\n[…]\nOriginalmente, o Google funcionou sob o site da Universidade Stanford, com o domínio google.stanford.edu, com os direitos de autor mencionados à universidade no final de sua página à época.\n[…]\nDurante este tempo, o Google conseguiu uma patente descrevendo seu mecanismo de PageRank. A patente foi oficialmente atribuída a Universidade de Stanford e classificou Lawrence Page como seu inventor. Em 2003, após superando dois outros locais, a empresa arrendou seu atual complexo da Silicon Graphics na 1600 Amphitheatre Parkway, em Mountain View, Califórnia.\n[…]\nEm uma palestra na Universidade de Stanford, Marissa Mayer, vice-presidente de Produtos Pesquisa e Experiência do Usuário do Google, mostrou que metade de todos os lançamentos de novos produtos atuais se originaram a partir do Innovation Time Off.\n[…]\nGoogle.org\n[…]\n«Google»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Emoji",
      "descricao": "Pictogramas usados em mensagens digitais, surgidos nos celulares japoneses no fim dos anos noventa."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 2016, o conjunto original de emojis, criado para a operadora japonesa NTT Docomo, entrou no acervo de qual museu?",
    "resposta": "MoMA, em Nova York",
    "distratores": [
      "Museu Britânico",
      "Museu do Louvre",
      "Museu Guggenheim"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Emoji"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emoji",
        "situacao": "ok",
        "texto": "An emoji ( i-MOH-jee or  ee-MOH-jee; plural emoji or emojis; Japanese: 絵文字, pronounced [emoꜜ(d)ʑi]) is a pictogram, logogram, or ideogram embedded in text and used in electronic messages and web pages. The primary function of modern emoji is to fill in emotional cues otherwise missing from typed conversation as well as to replace words as part of a logographic system.\n[…]\nTheories about language replacement can be traced back to the 1960s, when Russian novelist and professor Vladimir Nabokov stated in an interview with The New York Times: \"I often think there should exist a special typographical sign for a smile — some sort of concave mark, a supine round bracket.\" It did not become a mainstream concept until the 1990s, when Japanese, American, and European companies began developing Fahlman's idea.\n[…]\nThe DoCoMo i-Mode set included facial expressions, such as smiley faces, derived from a Japanese visual style commonly found in manga and anime, combined with kaomoji and smiley elements. Kurita's work is displayed in the Museum of Modern Art in New York City.\n[…]\nIn addition, while the original incarnations of the modern pentathlon emoji depicted its five events, including a man pointing a gun, the final grapheme contains a person riding a horse, along with a laser pistol target in the corner.\n[…]\nIn 2016, Firefox 50 added in-browser emoji rendering for platforms lacking in native support.\n[…]\nIn October 2016, the Museum of Modern Art acquired the original collection of emoji distributed by NTT DoCoMo in 1999.\n[…]\nIn November 2016, the first emoji-themed convention, Emojicon, was held in San Francisco.\n[…]\nHouston, Keith (2025). Face with Tears of Joy: A Natural History of Emoji (First (trade paperback) ed.). New York: W. W. Norton & Company. ISBN 978-1-324-07514-1. OCLC 1455397262.\n[…]\nEmoji Symbols – the original proposals for encoding of emoji symbols as Unicode characters"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Emoji",
        "situacao": "ok",
        "texto": "Emoji (絵文字, lit. pictograma) é uma palavra derivada da junção dos seguintes termos em japonês: e (絵, \"imagem\") + moji (文字, \"letra\"). Com origem no Japão, os emojis são ideogramas e smileys usados em mensagens eletrônicas e páginas web, cujo uso está se popularizando para além do país. Eles existem em diversos gêneros, incluindo: expressões faciais, objetos, lugares, animais e tipos de clima.\n[…]\nO primeiro emoji foi criado em 1998 ou 1999 no Japão por Shigetaka Kurita, que integrava a equipa da NTT DoCoMo responsável pelo desenvolvimento da i-mode, uma plataforma de Internet móvel. O primeiro conjunto de 172 emojis de 12×12 pixels foi criado como parte das funcionalidades de mensagens da i-mode para facilitar a comunicação eletrónica e funcionar como uma característica distintiva de outros serviços.\n[…]\nDurante anos, as operadoras japonesas usaram esquemas de codificação incompatíveis (Shift JIS), causando “mojibake” (texto corrompido) quando ícones eram enviados entre redes diferentes. A transição para um padrão global começou em 2006, quando o Google mapeou emojis japoneses em códigos Unicode privados para expandir o Gmail no Japão. Em 2007, Google e Apple apresentaram uma proposta formal ao Consórcio Unicode para incluir emojis no padrão internacional.\n[…]\nA maturidade dos emojis chegou ao tribunal em 2023, quando um juiz canadense decidiu que um emoji de “polegar para cima” (👍) poderia constituir uma aceitação válida dos termos contratuais, resultando em uma indenização por danos de US$ 82.000 (CAD). Olhando para o futuro, o cenário está mudando em direção à personalização por meio de “Genmojis” e adesivos gerados por IA, confundindo a linha entre personagens padronizados e expressão visual de forma livre.\n[…]\nUma lista com significado dos emoji\n[…]\nConstrutor de emojis\n[…]\nEmojis mais populares\n[…]\nEmojis para Copiar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Transistor",
      "descricao": "Dispositivo semicondutor usado para amplificar ou chavear sinais elétricos, bloco básico da eletrônica moderna."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O transistor foi criado em 1947 por três físicos que depois dividiram um Nobel. Qual destes era um deles?",
    "resposta": "William Shockley",
    "distratores": [
      "Jack Kilby",
      "Robert Noyce",
      "Gordon Moore"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Transistor",
      "https://en.wikipedia.org/wiki/William_Shockley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Transistor",
        "situacao": "ok",
        "texto": "A transistor is a semiconductor device used to amplify or switch electrical signals and power. It is one of the fundamental building blocks of modern electronics. A transistor is composed of semiconductor material, often with at least three terminals for connection to an electronic circuit. A voltage or current applied to one pair of the transistor's terminals controls the current through another \n[…]\nPhysicist Julius Edgar Lilienfeld proposed the concept of a field-effect transistor (FET) in 1925, but it was not possible to construct a working device at that time. The first working device was a point-contact transistor invented in 1947 by physicists John Bardeen, Walter Brattain, and William Shockley at Bell Labs who shared the 1956 Nobel Prize in Physics for their achievement.\n[…]\nTo acknowledge this accomplishment, Shockley, Bardeen and Brattain jointly received the 1956 Nobel Prize in Physics \"for their researches on semiconductors and their discovery of the transistor effect\".\n[…]\nThe first bipolar junction transistors were invented by Bell Labs' William Shockley, who applied for patent (2,569,347) on June 26, 1948. On April 12, 1950, Bell Labs chemists Gordon Teal and Morgan Sparks successfully produced a working bipolar NPN junction amplifying germanium transistor. Bell announced the discovery of this new sandwich transistor in a press release on July 4, 1951.\n[…]\nThe basic principle of the field-effect transistor (FET) was first proposed by physicist Julius Edgar Lilienfeld when he filed a patent for a device similar to MESFET in 1926, and for an insulated-gate field-effect transistor in 1928. The FET concept was later also theorized by engineer Oskar Heil in the 1930s and by William Shockley in the 1940s.\n[…]\nThe Bell Systems Memorial on Transistors\n[…]\nThis Month in Physics History: November 17 to December 23, 1947: Invention of the First Transistor. From the American Physical Society"
      },
      {
        "url": "https://en.wikipedia.org/wiki/William_Shockley",
        "situacao": "ok",
        "texto": "William Bradford Shockley (February 13, 1910 – August 12, 1989) was an American physicist. He was the manager of a research group at Bell Labs that included John Bardeen and Walter Brattain. The three scientists were jointly awarded the 1956 Nobel Prize in Physics \"for their researches on semiconductors and their discovery of the transistor effect.\"\n[…]\nLeslie 2000, \"We also know that two children who were tested but didn't make the cut – William Shockley and Luis Alvarez – went on to win the Nobel Prize in Physics. According to Hastorf, none of the Terman kids ever won a Nobel or Pulitzer.\"\n[…]\nSimonton 1999, p. 4 \"When Terman first used the IQ test to select a sample of child geniuses, he unknowingly excluded a special child whose IQ did not make the grade. Yet a few decades later that talent received the Nobel Prize in physics: William Shockley, the cocreator of the transistor. Ironically, not one of the more than 1,500 children who qualified according to his IQ criterion received so high an honor as adults.\"\n[…]\nBrittain, J.E. (1984). \"Becker and Shive on the transistor\". Proceedings of the IEEE. 72 (12): 1695. Bibcode:1984IEEEP..72.1695B. doi:10.1109/PROC.1984.13075. ISSN 0018-9219. S2CID 1616808. an observation that William Shockley interpreted as confirmation of his concept of that junction transistor\n[…]\nSaxon, Wolfgang (August 14, 1989). \"William B. Shockley, 79, Creator of Transistor and Theory on Race\". The New York Times. Retrieved January 2, 2015. He drew further scorn when he proposed financial rewards for the genetically disadvantaged if they volunteered for sterilization.\n[…]\nWilliam Shockley on Nobelprize.org  including his Nobel Lecture, December 11, 1956 Transistor Technology Evokes New Physics\n[…]\nWilliam Bradford Shockley Papers (SC0222) at Department of Special Collections and University Archives, Stanford University Libraries"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trans%C3%ADstor",
        "situacao": "ok",
        "texto": "O transístor ou transistor (do inglês transfer varistor: varistor de transferência) é um dispositivo semicondutor usado para amplificar ou trocar sinais eletrônicos e potência elétrica. Considera-se inventado em 1947 pelos físicos estadunidenses John Bardeen, Walter Brattain e William Shockley. É composto de material semicondutor com pelo menos três terminais para conexão a um circuito externo.\n[…]\nO transistor é o bloco de construção fundamental dos dispositivos eletrônicos modernos e é onipresente nos sistemas modernos. Julius Edgar Lilienfeld patenteou um transistor de efeito de campo em 1926, mas não foi possível construir um dispositivo de trabalho naquele momento. O primeiro dispositivo praticamente implementado foi um transistor de contato pontual inventado em 1947 pelos físicos estadunidenses John Bardeen, Walter Brattain e William Shockley.\n[…]\nO líder do grupo de física do estado sólido, William Shockley, viu o potencial nisso, e nos meses seguintes trabalhou para ampliar o conhecimento sobre semicondutores. O termo transístor foi cunhado por John R. Pierce como uma contração do termo transresistência.\n[…]\nEm reconhecimento a essa conquista, Shockley, Bardeen e Brattain receberam conjuntamente o Prêmio Nobel de Física de 1956 \"por suas pesquisas sobre semicondutores e sua descoberta do efeito do transistor\".\n[…]\nOs primeiros transistores de junção bipolar foram inventados por William Shockley, da Bell Labs, que solicitou a patente (2.569.347) em 26 de junho de 1948. Em 12 de abril de 1950, os químicos Gordon Teal e Morgan Sparks, da Bell Labs, produziram com sucesso uma junção NPN bipolar que amplificava o transistor de germânio. A Bell Labs anunciou a descoberta deste novo transistor \"sanduíche\" em um comunicado de imprensa em 4 de julho de 1951.\n[…]\nTransistor de unijunção\n[…]\nTransistor JFET\n[…]\nTransistor MOSFET\n[…]\nTransistor IGBT\n[…]\n«Documentário de 1953 sobre o transístor» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Wikipédia",
      "descricao": "Enciclopédia on-line livre e colaborativa lançada em 2001."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Ao lado de Larry Sanger, que empresário americano fundou a Wikipédia em 2001?",
    "resposta": "Jimmy Wales",
    "distratores": [
      "Ward Cunningham",
      "Larry Page",
      "Jack Dorsey"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wikipedia",
      "https://en.wikipedia.org/wiki/Jimmy_Wales"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wikipedia",
        "situacao": "ok",
        "texto": "Wikipedia is a free online encyclopedia written and maintained by a community of volunteer editors, known as Wikipedians, through open collaboration and the wiki software MediaWiki. Founded by Jimmy Wales and Larry Sanger in 2001, Wikipedia has been hosted since 2003 by the Wikimedia Foundation, an American nonprofit organization funded mainly by donations from readers. Wikipedia is the largest an\n[…]\nVarious collaborative online encyclopedias were attempted before Wikipedia's launch, but with limited success. Wikipedia began as a complementary project for Nupedia, a free online English-language encyclopedia project whose articles were written by experts and reviewed under a formal process. It was founded on March 9, 2000, under the ownership of Bomis, a web portal company. Its main figures were Bomis CEO Jimmy Wales and Larry Sanger, editor-in-chief for Nupedia and later Wikipedia.\n[…]\nA 2007 study by researchers from Dartmouth College found that \"anonymous and infrequent contributors to Wikipedia ... are as reliable a source of knowledge as those contributors who register with the site\". Jimmy Wales stated in 2009 that \"[I]t turns out over 50% of all the edits are done by just 0.7% of the users ... 524 people ...\n[…]\nWikipedia co-founder Jimmy Wales has claimed that Wikipedia has largely avoided the problem of \"fake news\" because the Wikipedia community regularly debates the quality of sources in articles.\n[…]\nIn 2015, Wikipedia was awarded both the annual Erasmus Prize, which recognizes exceptional contributions to culture, society or social sciences, and the Spanish Princess of Asturias Award on International Cooperation. Speaking at the Asturian Parliament in Oviedo, the city that hosts the awards ceremony, Jimmy Wales praised the work of the Asturian Wikipedia users.\n[…]\nWikipedia on X\n[…]\nWikipedia topic page at The New York Times\n[…]\nVideo of TED talk by Jimmy Wales on the birth of Wikipedia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jimmy_Wales",
        "situacao": "ok",
        "texto": "Jimmy Donal Wales (born August 8, 1966) is an American and British internet entrepreneur and former financial trader. He is best known for co-founding Wikipedia, a non-profit free encyclopedia, and Fandom (formerly Wikia), a for-profit wiki hosting service. He has also worked on Bomis, Nupedia, WikiTribune, and Trust Café (formerly WT Social).\n[…]\nIn 1996, Wales co-founded Bomis, which funded the free peer-reviewed encyclopedia Nupedia (2000–2003). On January 15, 2001, with Larry Sanger and others, he launched Wikipedia, which grew rapidly. Wales became its promoter and public face, though he has at times disputed Sanger's role, claiming sole founder status.\n[…]\nIt was Jimmy Wales, along with other people, who came up with the broader idea of an open-source, collaborative encyclopedia that would accept contributions from ordinary people. Initially, neither Sanger nor Wales knew what to expect from the Wikipedia initiative. Many of the early contributors to the site were familiar with the model of the free culture movement, and, like Wales, many of them sympathized with the open-source movement.\n[…]\nIn late 2005, Wales edited his biographical entry on the English Wikipedia. Writer Rogers Cadenhead drew attention to logs showing that in his edits to the page, Wales had removed references to Sanger as the co-founder of Wikipedia. Sanger commented that \"having seen edits like this, it does seem that Jimmy is attempting to rewrite history.\n[…]\nJimmy Wales at IMDb\n[…]\nJimmy Wales on Charlie Rose\n[…]\nJimmy Wales at TED\n[…]\nWikia userpage (User:Jimbo Wales)\n[…]\nWikipedia:Role of Jimmy Wales –  Wales' role in the English Wikipedia as described by its editors\n[…]\nWales, Jimmy (December 9, 2016). \"How Wikipedia Works\". cato.org. Cato Institute. Jimmy Wales, founder of Wikipedia, discusses the site, how it's treated by governments, and how it's fueled by its users."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wikip%C3%A9dia",
        "situacao": "ok",
        "texto": "Wikipédia é um projeto de enciclopédia multilíngue de licença livre, baseado na web e escrito de maneira colaborativa. Foi lançado em 2001 por Jimmy Wales e Larry Sanger e é administrado pela Fundação Wikimedia (organização sem fins lucrativos que engaja pessoas para desenvolver conteúdo educacional sob uma licença livre ou no domínio público e para disseminá-lo globalmente), integrando vários pro\n[…]\nA Wikipédia começou como um projeto complementar para a Nupedia, um projeto de enciclopédia online gratuita de língua inglesa, cujos artigos eram escritos por especialistas e revistos em um processo formal. A Nupedia foi fundada em 9 de março de 2000, sob a posse da Bomis, uma empresa de portal web. Suas principais figuras eram Jimmy Wales, CEO da Bomis, e Larry Sanger, editor-chefe da Nupedia e posteriormente da Wikipédia.\n[…]\nLarry Sanger e Jimmy Wales fundaram a Wikipédia. Embora Wales seja creditado por definir o objetivo de fazer uma enciclopédia editável publicamente, Sanger é geralmente creditado pela estratégia de usar um wiki para alcançar esse objetivo. Em 10 de janeiro de 2001, Larry Sanger propôs na lista de discussão da Nupedia a criação de um wiki como um projeto \"alimentador\" para a Nupedia.\n[…]\nEm setembro de 2008, a Wikipédia recebeu o prêmio Quadriga Uma Missão de Iluminação, atribuído por Werkstatt Deutschland, juntamente com Boris Tadic, Eckart Höfling e Peter Gabriel. O prêmio foi entregue a Jimmy Wales por David Weinberger.\n[…]\nO Wikipedia Watch criticou o site em 2006, quando listou dezenas de exemplos de plágio cometidos pelos editores da Wikipédia em inglês. Jimmy Wales, cofundador da Wikipédia, disse a este respeito: \"Nós precisamos lidar com tais atividades com rigor absoluto, sem piedade, porque este tipo de plágio está 100% em desacordo com todos os nossos princípios fundamentais\".\n[…]\nWikipédia no Twitter\n[…]\nWikipédia no Facebook\n[…]\nCanal de Wikipédia no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Motorola DynaTAC",
      "descricao": "Série de telefones celulares portáteis da Motorola, lançada comercialmente em 1984, apelidada de tijolão."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1973, que engenheiro da Motorola fez a primeira ligação de um celular portátil, numa rua de Nova York?",
    "resposta": "Martin Cooper",
    "distratores": [
      "Joel Engel",
      "Robert Noyce",
      "Ray Tomlinson"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Motorola_DynaTAC",
      "https://en.wikipedia.org/wiki/Martin_Cooper_(inventor)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Motorola_DynaTAC",
        "situacao": "ok",
        "texto": "The DynaTAC is a series of cellular telephones manufactured by Motorola from 1983 to 1994. Unveiled on March 6, 1983, the DynaTAC was the first commercially available handheld cellular phone. A full charge took roughly 10 hours, and it offered 30 minutes of talk time. It also offered an LED display for dialing or recall of one of 30 phone numbers. It was priced at US$3,995 in 1984, its commercial \n[…]\nMotorola had long produced mobile telephones for cars that were large and heavy and consumed too much power to allow their use without the automobile's engine running. Mitchell's team, which included Martin Cooper, developed portable cellular telephony, and Mitchell was among the Motorola employees granted a patent for this work in 1973; the first call on the prototype was completed, reportedly, to a wrong number.\n[…]\nWhile Motorola was developing the cellular phone itself, from 1968 to 1983, Bell Labs worked on the system called AMPS, while others designed cell phones for that and other cellular systems. Martin Cooper, a former general manager for the systems division at Motorola, led a team that produced the DynaTAC 8000X, the first commercially available cellular phone small enough to be easily carried, and made the first phone call from it. The DynaTAC 8000X received approval from the U.S.\n[…]\nThe Motorola DynaTAC 8000X was very large compared to phones today. This first cell phone was very expensive when it was first released in the United States in 1984.\n[…]\nU.S. Patent 3,906,166, September 16, 1975 for a Radio Telephone System for the first cell phone was granted by Martin Cooper, Richard W. Dronsurth, Albert J. Leitich, Charles N. Lynk, James J. Mikulski, John F. Mitchell, Roy A. Richardson, and John H. Sangster.\n[…]\nThe DynaTAC Series was succeeded by the MicroTAC in 1989.\n[…]\nDynaTAC relates to US phones used on the DynaTAC system in the US, not phones in use in the UK."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Martin_Cooper_(inventor)",
        "situacao": "ok",
        "texto": "Martin Cooper (born December 26, 1928) is an American inventor and electrical engineer. He is a pioneer in the wireless communications industry, especially in radio spectrum management, with 11 patents in the field. He is considered the \"father of the (handheld) cell phone\".\n[…]\nTop management at Motorola supported Cooper's mobile phone concept, investing $100 million between 1973 and 1993 before any revenues were realized. Cooper assembled a team that designed and assembled a product in less than 90 days. That original handset, called the DynaTAC 8000x (DYNamic Adaptive Total Area Coverage) weighed 2.5 pounds (1.1 kg), measured 10 inches (25 cm) long and was dubbed \"the brick\" or \"the shoe\" phone.\n[…]\nOn April 3, 1973, Cooper and Mitchell demonstrated two working phones to the media and to passers-by prior to walking into a scheduled press conference at the New York City Hilton in midtown Manhattan. Standing on Sixth avenue near the Hilton, Cooper made the first handheld cellular phone call in public from the prototype DynaTAC.\n[…]\nThe call connected him to a base station Motorola had installed on the roof of the Burlington House (now the AllianceBernstein Building) and into the AT&T land-line telephone system. Reporters and onlookers watched as Cooper dialed the number of his chief competitor Dr. Joel S. Engel at AT&T. \"Joel, this is Marty. I'm calling you from a cell phone, a real handheld portable cell phone.\" That public demonstration landed the DynaTAC on the July 1973 cover of Popular Science Magazine.\n[…]\nCooper joined the board of directors from 2015 to 2019.\n[…]\nMedia related to Martin Cooper at Wikimedia Commons\n[…]\nMarty Cooper interviewed on the TV show Triangulation on the TWiT.tv network"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Motorola_DynaTAC",
        "situacao": "ok",
        "texto": "O DynaTAC é uma série de telefones celulares fabricados pela Motorola de 1983 a 1994. O Motorola DynaTAC 8000X recebeu aprovação da Comissão Federal de Comunicações (FCC) dos Estados Unidos em 21 de setembro de 1983. Uma carga completa levava cerca de dez horas e oferecia trinta minutos de tempo de conversa. O aparelho também tinha um display de LED para discagem ou para acessar um dos 30 números \n[…]\nSeu preço de lançamento em 1984 foi de US$ 3.995 dólares, o equivalente a US$ 11.716 em 2023. DynaTAC era a abreviação de \"Dynamic Adaptive Total Area Coverage\" (\"Cobertura Total Adaptativa Dinâmica\", em tradução livre).\n[…]\nVários modelos foram lançados posteriormente, começando em 1985 com o 8000s e recebendo atualizações frequentes até o Classic II, de 1993. O DynaTAC foi substituído na maioria das funções pelo Motorola MicroTAC, um modelo muito menor lançado em 1989 e, quando o Motorola StarTAC chegou ao mercado em 1996, o DynaTAC já estava obsoleto.\n[…]\nA Motorola apresentou a linha DynaTAC em 1972, porém, a comissão norte-americana FCC (Comissão Federal de Comunicações) não aprovou o produto, alegando possível monopólio de mercado.\n[…]\nInventado por Martin Cooper, o modelo 8000X foi o primeiro celular aprovado pelo FCC para a comercialização e fabricado em série, tornando-se o primeiro telefone celular da história disponível comercialmente. Sua apresentação ocorreu em 6 de março de 1983 e foi descontinuada em 1984, com aproximadamente 2 000 unidades vendidas.\n[…]\nMotorola MicroTAC\n[…]\nMotorola StarTAC\n[…]\nLista de celulares mais vendidos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "CD",
      "descricao": "Disco óptico digital para gravar áudio e dados, lançado comercialmente em 1982."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo uma história famosa, a duração de cerca de setenta e quatro minutos do CD foi escolhida para caber inteira qual obra?",
    "resposta": "Nona Sinfonia de Beethoven",
    "distratores": [
      "As Quatro Estações",
      "Réquiem de Mozart",
      "Messias de Händel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Compact_disc"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Compact_disc",
        "situacao": "ok",
        "texto": "The compact disc (CD) is a digital optical disc data storage format co-developed by Philips and Sony to store and play digital audio recordings. It employs the Compact Disc Digital Audio (CD-DA) standard and is capable of holding uncompressed stereo audio. First released in Japan in October 1982, the CD was the second optical disc format to reach the market, following the larger LaserDisc (LD).\n[…]\nThe official Philips history says the capacity was specified by Sony executive Norio Ohga to be able to contain the entirety of Beethoven's Ninth Symphony on one disc.\n[…]\nOne major drawback to these copy-protected discs is that most will not play on either computer CD-ROM drives or some standalone CD players that use CD-ROM mechanisms. Philips has stated that such discs are not permitted to bear the trademarked Compact Disc Digital Audio logo because they violate the Red Book specifications.\n[…]\nOptical disc packaging\n[…]\nExtended Resolution Compact Disc\n[…]\nCompact disc bronzing – Type of compact disc corrosion\n[…]\nSPARS code – Classification system for commercial compact disc releases\n[…]\nPohlmann, Kenneth C. (1992). The Compact Disc Handbook. Middleton, Wisconsin: A-R Editions. ISBN 0-89579-300-8.\n[…]\nPeek, Hans et al. (2009) Origins and Successors of the Compact Disc. Springer Science+Business Media B.V. ISBN 978-1-4020-9552-8.\n[…]\nPeek, Hans B., The emergence of the compact disc, IEEE Communications Magazine, Jan. 2010, pp. 10–17.\n[…]\nNakajima, Heitaro; Ogawa, Hiroshi (1992) Compact Disc Technology, Tokyo, Ohmsha Ltd. ISBN 4-274-03347-3.\n[…]\nBarry, Robert (2020). Compact Disc (Object Lessons). New York: Bloomsbury. ISBN 978-1-5013-4851-8.\n[…]\nA Media History of the Compact Disc (1-hour podcast interview)\n[…]\nSorin, Stan (2009), \"Compact Disc Standards and Formats\", Origins and Successors of the Compact Disc, Philips Research, vol. 11, Philips Research, pp. 137–176, doi:10.1007/978-1-4020-9553-5_4, ISBN 978-1-4020-9552-8"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Compact_disc",
        "situacao": "ok",
        "texto": "O compact disc (CD ou \"Disco Compacto\") é um disco óptico digital de armazenamento de dados. O formato foi originalmente desenvolvido com o propósito de armazenar e tocar apenas músicas, mas posteriormente foi adaptado para o armazenamento de dados, o CD-ROM.\n[…]\nDerivações de formatos foram criadas, assim como: mídias regraváveis (CD-RW), CD de áudio e dados (CD-R), Video Compact Disc (VCD), Super Video Compact Disc (SVCD), Enhanced Music Compact Disc (EMCD), Photo CD, Picture CD, CD-i, dentre outros.\n[…]\nA Philips e a Sony criaram uma força-tarefa conjunta de engenheiros, para desenvolver um novo disco digital de áudio. A força-tarefa, liderada por membros proeminentes da Philips, Kees Schouhamer Immink, e Sony, Toshitada Doi, progrediram na pesquisa em tecnologia laser e discos ópticos.\n[…]\nA Philips anunciou publicamente um protótipo de CD-ROM de áudio em uma conferência de imprensa, intitulada \"Philips Introduce Compact Disc\", em 8 de março de 1979, em Eindhoven, Países Baixos.\n[…]\nUm CD é um disco de acrílico, sobre o qual é impressa uma longa espiral (22,188 voltas, totalizando 5,6 km de extensão). As informações são gravadas em furos nessa espiral, o que cria dois tipos de irregularidades físicas: pontos brilhantes e pontos escuros. Estes pontos são chamados de bits, e compõem as informações carregadas pelo CD.\n[…]\nA superfície da espiral é varrida por um laser, que utiliza luz no comprimento infravermelho. Essa luz é refletida pela superfície do disco e captada por um detector. Esse detector envia ao controlador do aparelho a sequência de pontos claros e escuros, que são convertidos em \"uns ou zeros\", os bits (dados binários). Para proteger a superfície do CD de sujeira, é colocada sobre ela uma camada de policarbonato.\n[…]\nDisco blu-ray",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Pascalina",
      "descricao": "Calculadora mecânica de rodas inventada por Blaise Pascal em 1642."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Blaise Pascal criou sua calculadora mecânica, a pascalina, para ajudar o pai em qual trabalho?",
    "resposta": "Cálculo de impostos",
    "distratores": [
      "Navegação marítima",
      "Comércio de tecidos",
      "Engenharia militar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pascal%27s_calculator"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pascal%27s_calculator",
        "situacao": "ok",
        "texto": "The Pascaline (also known as the arithmetic machine or Pascal's calculator) is a mechanical calculator invented by Blaise Pascal in 1642. It was the first operational mechanical calculator with better tens-carry. Pascal was led to develop a calculator by the laborious arithmetical calculations required by his father's (Étienne Pascal) work as the supervisor of taxes in Rouen, France.\n[…]\nThere were three versions of his calculator:\n[…]\nNine Pascal calculators presently exist; most are on display in European museums.\n[…]\nBlaise Pascal began to work on his calculator in 1642, when he was 18 years old. He had been assisting his father, who worked as a tax commissioner, and sought to produce a device which could reduce some of his workload. Pascal received a Royal Privilege in 1649 that granted him exclusive rights to make and sell calculating machines in France.\n[…]\nBesides being the first calculating machine made public during its time, the Pascaline is also:\n[…]\nthe first calculator to be described in an encyclopaedia (Diderot & d'Alembert, 1751)\n[…]\nthe first calculator sold by a distributor\n[…]\nPascal's calculator was the most successful mechanical calculator developed in the 17th century for the addition and subtraction of large numbers. The stepped reckoner had a problem in the carry mechanism after more than two consecutive carries, and the other devices had carry mechanisms (one tooth wheel) that were limited in their capacity to carry across multiple digits or had no carry mechanism in between the digits of the accumulator.\n[…]\nCalculating machines did not become commercially viable until 1851, when Thomas de Colmar released, after thirty years of development, his simplified arithmometer, the first machine strong enough to be used daily in an office environment. The Arithmometer was designed around Leibniz wheels and initially used Pascal's 9's complement method for subtractions."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pascalina",
        "situacao": "ok",
        "texto": "A pascalina (em francês: pascaline), também conhecida como máquina de Pascal, calculadora de Pascal e máquina aritmética, é uma calculadora mecânica inventada por Blaise Pascal em 1642. Pascal foi levado a desenvolver uma calculadora pelos trabalhosos cálculos aritméticos exigidos pelo trabalho de seu pai como supervisor de impostos em Ruão. Ele projetou a máquina para adicionar e subtrair dois nú\n[…]\nA calculadora de Pascal foi especialmente bem sucedida no projeto de seu mecanismo de transporte, que adiciona 1 a 9 em um mostrador e carrega 1 para o próximo mostrador quando o primeiro mostrador muda de 9 para 0. Sua inovação tornou cada dígito independente do estado do mostrador, permitindo que vários carregamentos passem rapidamente de um dígito para outro, independentemente da capacidade da máquina.\n[…]\nPascal também foi o primeiro a encolher e adaptar para sua finalidade uma engrenagem de lanterna, usada em relógios de torre e rodas d'água. Essa inovação permitiu que o dispositivo resistisse à força de qualquer entrada do operador com muito pouco atrito adicionado.\n[…]\nEm 1649, o rei Luís XIV da França concedeu a Pascal um privilégio real (semelhante a uma patente), que concedia o direito exclusivo de projetar e fabricar máquinas de calcular na França. Nove calculadoras Pascal existem atualmente; a maioria está em exibição em museus europeus.\n[…]\nMuitas calculadoras posteriores foram diretamente inspiradas ou moldadas pelas mesmas influências históricas que levaram à invenção de Pascal. Gottfried Leibniz inventou suas rodas de Leibniz depois de 1671, depois de tentar adicionar um recurso de multiplicação automática à pascalina. Em 1820, Thomas de Colmar projetou seu aritmômetro, a primeira calculadora mecânica suficientemente forte e confiável para ser usada diariamente em um ambiente de escritório.\n[…]\nMedia relacionados com a Pascalina no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "iPhone",
      "descricao": "Linha de smartphones da Apple, apresentada por Steve Jobs em 2007."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano Steve Jobs apresentou o primeiro iPhone, num evento em São Francisco?",
    "resposta": "2007",
    "distratores": [
      "2005",
      "2006",
      "2008"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/IPhone_(1st_generation)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/IPhone_(1st_generation)",
        "situacao": "ok",
        "texto": "The iPhone is a smartphone developed and marketed by Apple as the first device in the iPhone lineup of smartphones. It features a Samsung S5L8900 SoC (90 nm), a 3.5 in multi-touch display, and a web browser (Safari). After years of rumors and speculation, it was officially announced on January 9, 2007, and was released in the United States on June 29, 2007.\n[…]\nThe original iPhone was introduced by Steve Jobs on January 9, 2007, in a keynote address at the Macworld Conference & Expo held in Moscone West in San Francisco, California. In his address, Jobs said, \"This is a day that I have been looking forward to for two and a half years,\" and that \"today, Apple is going to reinvent the phone\".\n[…]\nBy October 2007, the iPhone was the fourth-best-selling handset in the U.S., trailing the Motorola Razr V3, the LG Chocolate, and the LG VX8300.\n[…]\nSteve Ballmer, the former CEO of Microsoft, argued in 2007 that the first-generation iPhone “is the most expensive phone in the world and it doesn't have a keyboard”, and argued that the 1st gen iPhone was too expensive even with a carrier subsidy and a carrier plan.\n[…]\nWhile the LG Prada, a feature phone with a large capacitative touchscreen, was released in March 2007, the iPhone was the first large-touchscreen phone with multi-touch and with full mobile rendering of websites, features which have now become virtually universal in smartphones. (The last push-button successor of the Treo, the HP Veer, was discontinued in 2011, and the BlackBerry was sold off by parent company BlackBerry Limited in 2016 before being discontinued in 2020.\n[…]\nIn July 2023, an unopened, first edition model of the 2007 4 GB iPhone was sold at auction in the US for $190,372.80, nearly 400 times the original price.\n[…]\nTimeline of iPhone models\n[…]\n\"Apple Reinvents the Phone with iPhone\" – Apple press release announcing the iPhone, January 9, 2007"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/IPhone_%281.%C2%AA_gera%C3%A7%C3%A3o%29",
        "situacao": "ok",
        "texto": "O iPhone é um smartphone desenvolvido e comercializado pela Apple como o primeiro dispositivo da linha de smartphones iPhone. Ele possui um SoC Samsung S5L8900 (90 nm), uma tela multitoque de 3.5 polegadas e um navegador web (Safari). Após anos de rumores e especulações, foi oficialmente anunciado em 9 de janeiro de 2007 e lançado nos Estados Unidos em 29 de junho de 2007.\n[…]\nO desenvolvimento do iPhone começou em 2005 e continuou em segredo até sua apresentação pública na Macworld de 2007. O dispositivo rompeu com os designs de telefones celulares da época ao eliminar a maioria dos botões físicos e utilizar uma interface touchscreen intuitiva que dispensava o uso de caneta stylus.\n[…]\nO iPhone original foi introduzido por Steve Jobs em 9 de janeiro de 2007, em uma palestra na Macworld Conference & Expo, realizada em Moscone West, em San Francisco, Califórnia. Em seu discurso, Jobs disse: \"Eu estou ansioso por este momento há dois anos e meio\" e que \"hoje, a Apple vai reinventar o telefone\".\n[…]\nJobs apresentou o iPhone como uma combinação de três dispositivos: um iPod widescreen com controles sensíveis ao toque, um telefone celular revolucionário e um comunicador de internet inovador.\n[…]\nO iPhone foi lançado no dia 29 de junho de 2007 nos Estados Unidos, onde centenas de pessoas formaram filas fora das Apple Stores e lojas da AT&T dias antes de os dispositivos serem lançados. Para evitar uma repetição do fato que aconteceu no lançamento do PlayStation 3, que causou assaltos e até mesmo um tiro, policiais foram contratados para proteger as lojas durante a noite.\n[…]\nMais tarde, foi disponibilizado no Reino Unido, França e Alemanha em novembro de 2007, e a República da Irlanda e Áustria, no outono de 2008.\n[…]\niPhone\n[…]\nA Time Magazine o nomeou como a \"Invenção do Ano\" em 2007.\n[…]\nSite Oficial do iPhone (Português)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Walkman",
      "descricao": "Linha de tocadores portáteis da Sony, iniciada com um toca-fitas com fones de ouvido."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano a Sony lançou o Walkman, o toca-fitas portátil que popularizou ouvir música com fones na rua?",
    "resposta": "1979",
    "distratores": [
      "1975",
      "1982",
      "1985"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Walkman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Walkman",
        "situacao": "ok",
        "texto": "Walkman (Japanese: ウォークマン, Hepburn: Wōkuman) is a brand of portable audio players manufactured by Sony since 1979. It was originally introduced as a portable cassette player and later expanded to include a range of portable audio products. Since 2011, the brand has referred exclusively to digital flash memory players.\n[…]\nIn March 1979, at the request of Masaru Ibuka, the audio department modified the small \"Pressman\" recorder used by journalists, into a smaller cassette player. After many people praised the good sound quality, Sony, under the leadership of Akio Morita, launched the Walkman in July 1979. Morita positioned Walkman in the youth market, emphasized youth, vitality, and fashion, and created a headset culture.\n[…]\nSony co-founder Masaru Ibuka used the company's bulky TC-D5 cassette recorder to listen to music while traveling for business. He asked the executive deputy president Norio Ohga to design a playback-only stereo version optimized for walking. The metal-cased blue-and-silver Walkman TPS-L2, the world's first low-cost personal stereo, went on sale in Japan on 1 July 1979, and was sold for around ¥33,000 (or $150.00).\n[…]\nSony also hired actors to pose with the Walkman around the streets of Tokyo as an additional form of promotion.\n[…]\nIn the early 2000s, Sony debuted Plato, a blue alien, as its mascot for the Walkman.\n[…]\nIn 2025, a cassette Walkman from 1979 (model TPS-L2 ) was included in Pirouette: Turning Points in Design, an exhibition at the Museum of Modern Art featuring \"widely recognized design icons [...] highlighting pivotal moments in design history.\"\n[…]\nSince 2017, Sony provided the Music Center for PC software on Microsoft Windows, designed for both content transfer and also playback for Walkman and other audio products.\n[…]\nList of Sony Walkman products\n[…]\nSony Watchman\n[…]\nWalkman effect\n[…]\nSony"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Walkman",
        "situacao": "ok",
        "texto": "Walkman® é uma marca popular de uma série de tocadores ou leitores de áudio portáteis pertencente à Sony. O termo Walkman também é utilizado para se referir a aparelhos portáteis similares de reprodução de áudio estéreo de outros fabricantes. Com sua chegada, costuma-se dizer que mudaram os hábitos musicais, uma vez que cada pessoa pode carregar e ouvir seus sons preferidos e, principalmente, sem \n[…]\nO Walkman original foi criado em 1979 no Japão e levava o nome de Soundabout, no exterior. Foi criado pelo coordenador do setor de áudio da Sony Nobutoshi Kihara para um dos sócios da empresa, Akio Morita, que queria escutar ópera durante seu trabalho desgastante. Morita odiou o nome Walkman e pediu para ser alterado. Mas uma campanha de divulgação com o nome Walkman já tinha sido iniciada e alterá-lo sairia demasiado caro.\n[…]\nQuando o primeiro aparelho ficou pronto, em abril de 1979, os vendedores não ficaram muito entusiasmados com a ideia e afirmaram que o Walkman venderia pouco. Akio Morita que acreditava no novo produto, então, propôs um desafio: se o Walkman não vendesse pelo menos 100 mil unidades em seus dois primeiros anos de mercado, ele renunciaria à presidência da Sony. Akio ganhou a aposta e naquele período cerca de 1,5 milhões de tocadores de áudio Walkman foram vendidos entre 1979 e 1981.\n[…]\nO Walkman original azul e prateado, modelo TPS-L2, foi colocado à venda no Japão em 1 de julho de 1979. No Reino Unido recebeu estereofonia (estéreo) e duas entradas para minifones, permitindo a duas pessoas ouvirem o mesmo aparelho ao mesmo tempo (embora fosse vendido com apenas um par de fones de ouvido). Também recebeu um botão chamado pressman, que ativava um microfone interno e cancelava parcialmente o som da fita cassete e permitindo o usuário falar sobre a música reproduzida.\n[…]\nSony Watchman\n[…]\nSony Walkman Portugal\n[…]\nSony Walkman Oficial Brasil\n[…]\nSony Walkman Shop Amazon Walkman opslaan",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Intel 4004",
      "descricao": "Microprocessador de quatro bits lançado pela Intel em 1971."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O Intel 4004, de 1971, primeiro microprocessador comercial, tinha cerca de quantos transistores?",
    "resposta": "Cerca de 2.300",
    "distratores": [
      "Cerca de 230",
      "Cerca de 23 mil",
      "Cerca de 2,3 milhões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Intel_4004"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Intel_4004",
        "situacao": "ok",
        "texto": "The Intel 4004, released by the Intel Corporation on November 15, 1971, was the first in a long line of Intel central processing units (CPUs). Priced at US$60 (equivalent to $477 in 2025), the chip marked both a technological and economic milestone in computing.\n[…]\nAdditionally, he developed the \"bootstrap load\", previously considered unfeasible with silicon gate technology, and the \"buried contact\", which enabled silicon gates to connect directly to the transistor's source and drain without the use of metal. Together, these innovations doubled the circuit density, and thus halved cost, allowing a single chip to contain 2,300 transistors and run five times faster than designs using the previous MOS technology with aluminum gates.\n[…]\nthe Intel 4004 CPU.\n[…]\nInitials F.F. (Federico Faggin) on the 4004 design (1971). The 4004 bears the initials F.F. of its designer, Federico Faggin, etched on one corner of the chip. Signing the chip was a spontaneous gesture of proud authorship and was also an original idea imitated after him by many Intel designers.\n[…]\nIntel 4004 Microprocessor 35th Anniversary  - Live recording of presentations by Ted Hoff and Federico Faggin at the Computer History Museum for the 35th anniversary of the first microprocessor. (youtube.com)\n[…]\nIntel's First Microprocessor—the Intel 4004: Intel Museum (Intel Corporate Archives) entry\n[…]\nThe New Methodology for Random Logic Design Used in the 4004 and in All the Early Intel Microprocessors\n[…]\nIntel 4004 -- 45th Anniversary Project, Schematics at the unofficial 4004 website, and a simulator in Java. Fully functional 130x scale replicas of the 4004 built using discrete transistors.\n[…]\nDatasheet Intel 4004\n[…]\nChip Hall of Fame: Intel 4004 Microprocessor (IEEE Spectrum website)\n[…]\nStory of the Intel 4004"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Intel_4004",
        "situacao": "ok",
        "texto": "Intel 4004 é uma Unidade Central de Processamento com 4-bits. Fabricado pela Intel Corporation em 1971, foi o primeiro microprocessador comercialmente disponível pela Intel em um chip simples, assim como o primeiro disponível comercialmente. O design dos chips começou em abril de 1970, quando Federico Faggin se juntou à Intel, e foi concluído sob sua liderança em janeiro de 1971.\n[…]\nFaggin foi o primeiro projetista de chips que obteve sucesso integrando uma CPU em um único chip (o Intel 4004, o primeiro microprocessador do mundo), em 1970-1971. A Intel contratou o Faggin da Fairchild onde ele tinha desenvolvido a original tecnologia de porta de silício (silicon gate technology: SGT) com portas auto-alinhadas (self-aligned gates) em 1968 e também tinha criado o primeiro circuito integrado comercial do mundo usando a tecnologia de porta de silício: o Fairchild 3708.\n[…]\nNa Intel, Federico Faggin criou uma nova metodologia de projeto em porta de silício que ainda não existia (porque a tecnologia SGT era muito nova e somente tinha sido usada para construir memórias) e contribuiu em muitas outras invenções indispensáveis para a criação do primeiro microprocessador em um único chip, por exemplo: a invenção do \"contato enterrado\" um método para criar contato direto entre o silício poli cristalino e as junções que permitiram dois níveis de interconexões, um com silício e o outro com alumínio; a invenção do “bootstrap loads” em inglês, permitindo que a saída da porta tenha a mesma voltagem da fonte, usando silício poli cristalino (uma ideia então considerada impossível de alcançar); um layout muito inovador; a invenção de muitos circuitos especiais, por exemplo um novo registro estático de deslocamento, um novo tipo de contador e um novo circuito automático de reset (Reset ao-Ligar (Power-on Reset - PoR) em inglês) (patente 3 753 011).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "JavaScript",
      "descricao": "Linguagem de programação criada em 1995 por Brendan Eich, na Netscape, usada para dar interatividade às páginas da web."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 1995, o programador Brendan Eich escreveu a primeira versão da linguagem JavaScript em cerca de quanto tempo?",
    "resposta": "Dez dias",
    "distratores": [
      "Três meses",
      "Seis meses",
      "Dois anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brendan_Eich",
      "https://en.wikipedia.org/wiki/JavaScript"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brendan_Eich",
        "situacao": "ok",
        "texto": "Brendan Eich ( EYEK; born July 4, 1961) is an American computer programmer and technology executive. He created the JavaScript programming language and co-founded the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation. He served as the Mozilla Corporation's chief technical officer before he was appointed chief executive officer, but resigned shortly after his appointment due to p\n[…]\nAt first the language was called Mocha, but it was renamed LiveScript in September 1995 and finally – in a joint announcement with Sun Microsystems – it was named JavaScript in December. Simultaneously, he designed the first SpiderMonkey engine to execute the new language in the Navigator browser.\n[…]\nWhen Mozilla inherited the Netscape base code in 1998, it included this engine, which was written in the C language. It was then changed in JavaScript 1.5 to comply with the ECMA-262 standard. Eich continued to oversee the development of SpiderMonkey, the specific implementation of JavaScript in Navigator.\n[…]\nIn August 2005, after serving as a lead technologist and as a member of the board of directors of the Mozilla Foundation, Eich became chief technical officer (CTO) of the newly founded Mozilla Corporation, meant to be the Mozilla Foundation's for-profit arm. Eich continued to \"own\" the Mozilla SpiderMonkey module, its JavaScript engine, until he passed the ownership of it to Dave Mandelin in 2011.\n[…]\nCREDO Mobile collected more than 50,000 signatures demanding that Eich resign.\n[…]\nIn 2020, The New York Times reported that Eich's comments about \"the policy and science related to the coronavirus\" on Twitter caused a backlash within the browser's user base, commenting that this echoed the criticism that led to his resignation from Mozilla.\n[…]\nBrendan Eich video interview – Lex Fridman Podcast #160"
      },
      {
        "url": "https://en.wikipedia.org/wiki/JavaScript",
        "situacao": "ok",
        "texto": "JavaScript (JS) is a programming language and core technology of the Web, alongside HTML and CSS. Created by Brendan Eich in 1995, it is maintained by Ecma International's TC39 technical committee, with related Web APIs maintained by W3C and WHATWG. In 2025, JavaScript was the most widely used programming language on GitHub. However, TypeScript, a statically typed superset of JavaScript that is st\n[…]\nDuring these formative years of the Web, web pages could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the flourishing web development scene to remove this limitation, so in 1995, Netscape decided to add a programming language to Navigator. They pursued two routes to achieve this: collaborating with Sun Microsystems to embed the Java language, while also hiring Brendan Eich to embed the Scheme language.\n[…]\nA letter was circulated in September 2024, spearheaded by Ryan Dahl, calling on Oracle to free the JavaScript trademark. Brendan Eich, the original creator of JavaScript, was among the over 14,000 signatories who supported the initiative.\n[…]\nMicrosoft Windows allows JavaScript source files on a computer's hard drive to be launched as general-purpose, non-sandboxed programs (see: Windows Script Host). This makes JavaScript (like VBScript) a theoretically viable vector for a Trojan horse, although JavaScript Trojan horses are uncommon in practice.\n[…]\nStatic program analysis tools, such as ESLint and JSLint, scan JavaScript code for conformance to a set of standards and guidelines.\n[…]\nBoth languages first appeared in 1995, but Java was developed by James Gosling of Sun Microsystems and JavaScript by Brendan Eich of Netscape Communications.\n[…]\nJSON is a data format derived from JavaScript; hence the name JavaScript Object Notation. It is a widely used format supported by many other programming languages."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brendan_Eich",
        "situacao": "ok",
        "texto": "Brendan Eich ([ˈaɪk]; nascido em 4 de julho de 1961) é um tecnólogo e programador de computadores americano. Ele é o criador da linguagem de programação JavaScript e cofundador do projeto Mozilla, da Mozilla Foundation e da Mozilla Corporation. Eich serviu brevemente como CEO da Mozilla Corporation antes de renunciar devido a controvérsias políticas. Atualmente, é o CEO da Brave Software, empresa \n[…]\nEm abril de 1995, Eich ingressou na Netscape Communications Corporation. Inicialmente contratado para implementar a linguagem Scheme no navegador Netscape Navigator, seus superiores insistiram que a sintaxe da nova linguagem fosse semelhante à do Java.\n[…]\nEich desenvolveu o protótipo funcional em apenas dez dias em maio de 1995, sob o nome interno de Mocha. Mais tarde, o nome foi alterado para LiveScript e, finalmente, para JavaScript em uma estratégia conjunta de marketing com a Sun Microsystems. A linguagem rapidamente se tornou o padrão de fato para a programação do lado do cliente na web.\n[…]\nEich ajudou a fundar o mozilla.org em 1998, servindo como arquiteto-chefe. Após a compra da Netscape pela AOL, ele desempenhou um papel crucial na criação da Mozilla Foundation em 2003.\n[…]\nEm 2015, Eich fundou a Brave Software junto com Brian Bondy. A empresa desenvolveu o navegador Brave, que bloqueia anúncios e rastreadores nativamente para aumentar a privacidade e a velocidade de navegação.\n[…]\nPara reformular o modelo de publicidade digital, Eich introduziu o Basic Attention Token (BAT), um sistema baseado na Blockchain do Ethereum que recompensa usuários por sua atenção e permite que criadores de conteúdo recebam doações diretamente. Em sua Oferta Inicial de Moedas (ICO) em 2017, o projeto arrecadou US$ 35 milhões em menos de 30 segundos.\n[…]\nJavaScript\n[…]\nSítio oficial de Brendan Eich",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.83 — 2026-10-27**
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas.
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
- No máximo **3 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras centrais e conhecidas**, mesmo que já tenham perguntas, a âncoras novas e obscuras (desde 2026-10-27; antes, "prefira âncoras novas"). O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para aprofundá-las com fatos e ângulos novos, sem repetir fatos.
- **Tentar incluir uma âncora nova a cada 50 perguntas**, tão conhecida quanto as centrais, para manter alguma variedade. Se for difícil achar uma assim, o lote fica sem: uma âncora nova obscura não vale a troca.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
