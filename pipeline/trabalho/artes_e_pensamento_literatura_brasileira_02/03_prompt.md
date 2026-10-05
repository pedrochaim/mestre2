Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Literatura Brasileira** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "O Cortiço",
      "descricao": "Romance naturalista de Aluísio Azevedo publicado em 1890, sobre os moradores de uma habitação coletiva no Rio de Janeiro."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1890, que escritor maranhense publicou O Cortiço, romance naturalista sobre os moradores de uma habitação coletiva no Rio de Janeiro?",
    "resposta": "Aluísio Azevedo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Corti%C3%A7o",
      "https://pt.wikipedia.org/wiki/Alu%C3%ADsio_Azevedo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Corti%C3%A7o",
        "situacao": "ok",
        "texto": "O Cortiço é um romance do escritor brasileiro Aluísio Azevedo, publicado em 1890, considerado a principal obra do Naturalismo no Brasil. Ambientado no Rio de Janeiro do final do século XIX, o romance retrata a vida cotidiana em uma estalagem popular — o cortiço — e analisa as relações sociais ali estabelecidas, evidenciando mecanismos de exploração econômica, determinismo social e degradação moral\n[…]\nInfluenciado pelo Naturalismo Europeu, especialmente pela obra de Émile Zola, O Cortiço apresenta uma visão crítica da sociedade urbana brasileira e permanece como um dos romances mais estudados da literatura nacional.\n[…]\nAlfredo Bosi destaca que Azevedo não se importa em construir um enredo, mas em criar personagens convincentes:\n[…]\nSó em O Cortiço Aluísio atinou de fato com a fórmula que se ajustava ao seu talento: desistindo de montar um enredo em função de pessoas, ateve-se à sequência de descrições muito precisas onde cenas coletivas e tipos psicologicamente primários fazem, no conjunto, do cortiço, a personagem mais convincente do nosso romance naturalista. Existe o quadro: dele derivam as figuras.\n[…]\nSegundo análise de Antonio Candido no ensaio De Cortiço a Cortiço, no cortiço de Aluísio Azevedo, a natureza brasileira \"desempenha papel essencial como explicação dos comportamentos transgressivos, como combustível das paixões e até da simples rotina fisiológica. Aluísio aceita a visão romântico-exótica de uma natureza poderosa e transformadora, reinterpretando-a em chave naturalista.\"\n[…]\nA narração desses fatos da vida de João Romão entrelaça-se com a narração de vários episódios dos moradores do cortiço, cuja luta pela sobrevivência é dura e cruel. O caso de Jerônimo é exemplar da visão naturalista de Azevedo; Jerônimo é um operário português contratado por João Romão para trabalhar na pedreira. É sério e honesto, casado com Piedade, também portuguesa.\n[…]\nNaturalismo\n[…]\nAluísio de Azevedo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alu%C3%ADsio_Azevedo",
        "situacao": "ok",
        "texto": "Aluísio Tancredo Gonçalves de Azevedo (São Luís, 14 de abril de 1857 – Buenos Aires, 21 de janeiro de 1913) foi um escritor, diplomata e jornalista brasileiro. Célebre por seus romances O Mulato, Casa de pensão e O Cortiço, é considerado o introdutor e principal representante do naturalismo na literatura brasileira.\n[…]\nFilho do vice-cônsul português David Gonçalves de Azevedo, que, ainda jovem, se enviuvara em boda anterior, e de Emília Amália Pinto de Magalhães, separada de um rico comerciante português, Antônio Joaquim Branco, Aluísio assiste, ainda garoto, ao desabono da sociedade maranhense a essa união dos pais contraída sem segundas núpcias, algo que se configurava grande escândalo à época.\n[…]\nFoi Aluísio, irmão mais novo do dramaturgo e jornalista Artur Azevedo, com o qual, em parceria, esboçaria peças teatrais.\n[…]\nCom o falecimento do pai em 1878, volta ao Maranhão para sustentar a família. Ali, instigado por dificuldades financeiras, abandona momentaneamente os desenhos e dá início à atividade literária, publicando Uma Lágrima de Mulher no ano seguinte (1879). Em 1881, em período de crescente efervescência abolicionista no Brasil, publica o romance O Mulato, obra que deixa a sociedade escandalizada pelo modo cru com que desnuda a questão racial e inaugura o Naturalismo na literatura brasileira.\n[…]\nÉ autor de vários romances de estética naturalista: \"O mulato\" (1881), \"Casa de pensão\" (1884), \"O cortiço\" (1890) e outros.\n[…]\nFazem-se veementemente presentes em sua obra certos traços fundamentais do Naturalismo, quais sejam a influência do meio social e da hereditariedade na formação dos indivíduos, também o fatalismo. Em Aluísio \"a natureza humana afigura-se-lhe uma certa selvageria onde os fortes comem os fracos\", afirma o crítico Alfredo Bosi."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Memórias de um Sargento de Milícias",
      "descricao": "Romance brasileiro publicado em folhetins entre 1852 e 1853, sobre as aventuras do malandro Leonardo no Rio de Janeiro do tempo do rei."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Publicado em folhetins assinados apenas por Um Brasileiro, o romance Memórias de um Sargento de Milícias, sobre o malandro Leonardo, foi escrito por quem?",
    "resposta": "Manuel Antônio de Almeida",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mem%C3%B3rias_de_um_Sargento_de_Mil%C3%ADcias",
      "https://pt.wikipedia.org/wiki/Manuel_Ant%C3%B4nio_de_Almeida"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mem%C3%B3rias_de_um_Sargento_de_Mil%C3%ADcias",
        "situacao": "ok",
        "texto": "Memórias de um Sargento de Milícias é um romance do escritor brasileiro Manuel Antônio de Almeida. Foi publicado originalmente em capítulos no Correio Mercantil (Rio de Janeiro), sempre aos domingos no suplemento “Pacotilha”, entre 27 de junho de 1852 e 31 de julho de 1853, de forma anônima. A primeira edição em livro, pela Tipografia Brasiliense, data de 1854 (primeiro volume) e 1855 (segundo vol\n[…]\nSobre o livro, escreve Ruy Castro: \"Numa época de idealismos, em que mancebos, mocinhas e indígenas competiam em pureza e ingenuidade nos poemas e romances do período, Manuel Antônio de Almeida contou uma história cheia de pequenos golpes, mutretas e espertezas, estrelada por marotos, pilantras, brejeiros, finórios, gaiatos, capadócios, mariolas, sonsos e valdevinos.\"\n[…]\nEm seu ensaio \"Um Romance de Aventuras\", escreve o crítico literário André Seffrin: \"Em suma, este é nosso primeiro grande romance a radiografar o povo brasileiro muito próximo do que ele verdadeiramente é, com seus tipos mais característicos, suas cenas da vida urbana carioca, seus costumes que, em linhas gerais, permanecem até hoje quase inalterados. Um Brasil bem nosso, vivíssimo, que Manuel Antônio de Almeida praticamente inaugurou em literatura.\"\n[…]\nNesse contexto, Manuel Antônio de Almeida retrata o cotidiano popular, os hábitos sociais e a informalidade das relações, oferecendo um painel crítico da sociedade carioca oitocentista.\n[…]\nLuisinha — interesse amoroso de Leonardo;\n[…]\nMemórias de um Sargento de Milícias ocupa lugar singular na literatura brasileira por romper com os modelos românticos vigentes e oferecer uma visão crítica e bem-humorada da sociedade urbana. A obra passou a ser amplamente valorizada pela crítica literária no século XX, sendo hoje leitura obrigatória em currículos escolares e universitários.\n[…]\n«Memórias de um Sargento de Milícias»  – Domínio Público\n[…]\n«Memórias de um Sargento de Milícias (resenha)»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Manuel_Ant%C3%B4nio_de_Almeida",
        "situacao": "ok",
        "texto": "Manuel Antônio de Almeida (Rio de Janeiro, 17 de novembro de 1830 — Macaé, 28 de novembro de 1861) foi um escritor brasileiro do século XIX, conhecido pelo seu romance Memórias de um Sargento de Milícias, considerado o primeiro romance urbano do Brasil e precursor do realismo no país.\n[…]\nFilho do tenente Antônio de Almeida,  e de Josefina Maria de Almeida. Seu pai morreu quando Manuel Antônio tinha dez anos de idade. Concluiu a Faculdade de Medicina em 1855, mas nunca exerceu a profissão. Dificuldades financeiras o levaram ao jornalismo e às letras.\n[…]\nMemórias de um sargento de Milícias, de 1852, foi seu único livro. Retrata as classes média e baixa, algo muito incomum para a época, na qual os romances retratavam os ambientes aristocráticos. A experiência de ter tido uma infância pobre influenciou Manuel Antônio de Almeida no desenvolvimento de sua obra.\n[…]\nA Obra Dispersa de Manuel Antônio de Almeida reúne não só a colaboração dispersa em jornais e a opereta Dois Amores, mas três antologias complementares: a correspondência ativa, descoberta entre os recentes anos 50 e 60, dirigida a Quintino Bocaiuva, Francisco Ramos da Paz e José de Alencar; os depoimentos de contemporâneos, como Francisco Otaviano, Machado de Assis, Augusto Emílio Zaluar, Félix Ferreira, Joaquim Manuel de Macedo; e, por fim, uma mostra das hesitações críticas nas leituras pré-modernistas das Memórias de Um Sargento de Milícias.==Referências==\n[…]\nBernardo de Mendonça, \"D'Almeida, Almeida, Almeidinha, A., Maneco, Um Brasileiro: mais um romance de costumes\", in Obra Dispersa de Manuel Antônio de Almeida. Rio de Janeiro, Graphia, 1991.\n[…]\nAntônio Cândido, Dialética da Malandragem, in Revista do Instituto de Estudos Brasileiros, da Universidade de São Paulo, 1970, n. 8, p. 67-88."
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "A Escrava Isaura",
      "descricao": "Romance abolicionista brasileiro publicado em 1875, adaptado para uma novela da TV Globo de grande sucesso internacional."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O romance A Escrava Isaura, de 1875, que inspirou uma novela de enorme sucesso até na China, foi escrito por quem?",
    "resposta": "Bernardo Guimarães",
    "distratores": [
      "José de Alencar",
      "Joaquim Manuel de Macedo",
      "Visconde de Taunay"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Escrava_Isaura",
      "https://pt.wikipedia.org/wiki/Bernardo_Guimar%C3%A3es"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Escrava_Isaura",
        "situacao": "ok",
        "texto": "A Escrava Isaura é um romance do escritor brasileiro Bernardo Guimarães, publicado em 1875 pela editora B. L. Garnier, no Rio de Janeiro. Inserida no contexto do Romantismo no Brasil, a obra aborda a temática da escravidão a partir da história de uma jovem escravizada de origem branca, enfatizando valores como a moral cristã, a sensibilidade sentimental e a denúncia das injustiças sociais.\n[…]\nO romance alcançou grande repercussão à época de seu lançamento, consolidando a reputação literária de Bernardo Guimarães e sendo inclusive reconhecido por Dom Pedro II.\n[…]\nEscrito em plena campanha abolicionista (1875), o livro conta as desventuras de Isaura, escrava branca e educada, de caráter nobre, vítima de um senhor devasso.\n[…]\nO romance foi um grande sucesso editorial e permitiu que Bernardo Guimarães se tornasse um dos mais populares romancistas de sua época. O autor pretende, nesta obra, fazer um libelo antiescravagista e libertário e, talvez, por isso, o romance exceda em idealização romântica, a fim de conquistar a imaginação popular perante as situações intoleráveis do cativeiro. O estudioso Manuel Cavalcanti Proença observa que:\n[…]\nBernardo Guimarães faz questão de ressaltar exaustivamente a beleza branca e pura de Isaura, que não denunciava a sua condição de escrava porque não portava nenhum traço africano, era educada e nada havia nela que \"denunciasse a abjeção do escravo\".\n[…]\nSem restar outra escapatória para Isaura, Miguel usa os 10 contos de réis que tinha para comprar sua alforria em uma fuga, levando o romance ao seu segundo estágio.\n[…]\nA escrava Isaura (1917), filme;\n[…]\nA escrava Isaura (1922), filme;\n[…]\nA escrava Isaura (1929), filme;\n[…]\nA escrava Isaura (1949), filme;\n[…]\nEscrava Isaura (1976), telenovela;\n[…]\nA escrava Isaura (2004), telenovela.\n[…]\n«Texto integral de A Escrava Isaura, Universidade da Amazônia (UNAMA).» 🔗"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bernardo_Guimar%C3%A3es",
        "situacao": "ok",
        "texto": "Bernardo Joaquim da Silva Guimarães (Ouro Preto, 15 de agosto de 1825 – Ouro Preto, 10 de março de 1884) foi um romancista e poeta brasileiro, conhecido pelo romance A Escrava Isaura, sendo o patrono da Cadeira nº 5 da Academia Brasileira de Letras.\n[…]\nNa época em que participou da criação da Sociedade Epicureia, Bernardo Guimarães teria introduzido no Brasil o bestialógico (ou pantagruélico), que se tratava de poesia cujos versos não tinham nenhum sentido, embora bem metrificados. Usando do burlesco, o satírico e o nonsense, esta poesia faz de Bernardo Guimarães um precursor brasileiro do surrealismo, conforme Haroldo de Campos, embora este ainda o considere um romancista medíocre.\n[…]\nJá João Alphonsus, em sua obra Bernardo Guimarães, Romancista Regionalista, vê na opinião dos que declararam o poeta maior que o romancista \"um critério intelectual exigente\", acrescentando: \"No que concerne a Minas, nenhum outro escritor de sua época foi mais admirado, lido e conhecido\".\n[…]\nJosé Armelim Bernardo Guimarães (1915–2004), neto do escritor, argumenta que, se a história fosse de uma escrava negra, não chamaria a atenção dos leitores daquela época para a questão da escravidão. O livro de Bernardo Guimarães mais bem aceito pela crítica é O Seminarista, cuja primeira edição é de 1872. Permanece atual porque questiona o celibato dos padres. Conta a história de um fazendeiro de Minas Gerais que obriga o seu filho a ser padre.\n[…]\nA Escrava Isaura (romance – 1875)\n[…]\nNa ABL, Bernardo Guimarães foi homenageado como patronato da cadeira 5, que teve como fundador Raimundo Correia e na qual tiveram assento figuras exponenciais como Osvaldo Cruz e Rachel de Queiroz.\n[…]\nBernardo Guimarães (1825-1884), obra e vida -  site mantido por descendentes do escritor."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Meus Oito Anos",
      "descricao": "Poema romântico de Casimiro de Abreu, do livro As Primaveras, de 1859, sobre a saudade da infância."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que poeta romântico escreveu os versos: Oh, que saudades que tenho da aurora da minha vida, da minha infância querida, que os anos não trazem mais?",
    "resposta": "Casimiro de Abreu",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Meus_Oito_Anos",
      "https://pt.wikipedia.org/wiki/Casimiro_de_Abreu"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Meus_Oito_Anos",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Casimiro_de_Abreu",
        "situacao": "ok",
        "texto": "Casimiro José Marques de Abreu (Barra de São João, 4 de janeiro de 1839 – Nova Friburgo, 18 de outubro de 1860) foi um poeta, dramaturgo, romancista e ensaísta brasileiro, identificado com a segunda geração do romantismo no Brasil. Foi um dos poetas mais populares no Brasil durante o século XIX, conhecido pelo seu lirismo ingênuo, pueril e musical. É o patrono da cadeira número seis da Academia Br\n[…]\nCasimiro nasceu no dia 4 de janeiro de 1839, no município que hoje leva o seu nome. Filho do fazendeiro português José Joaquim Marques de Abreu e de Luísa Joaquina das Neves, que não eram oficialmente casados, passou a infância na fazenda da mãe e fez os estudos primários em Nova Friburgo. Em 1852, foi para o Rio de Janeiro com o pai para trabalhar no comércio, e, no ano seguinte, viajou com ele para Portugal.\n[…]\nSegundo Fausto Cunha, \"Casimiro de Abreu vinha propor uma linguagem perfeitamente de acordo com o pathos da época (...) de grande maleabilidade, poder de infiltração e virtualidades mnemônicas\".\n[…]\nO seu poema mais famoso é Meus oito anos, que, segundo Jean Pierre Chauvin, \"está gravado em nossa memória coletiva\". Segundo Manuel Bandeira, \"ninguém tampouco exprimiu melhor as saudades da infância do que o fez o poeta fluminense nas oitavas dos Meus oito anos\".\n[…]\nApesar de todo o seu prestígio, a obra de Casimiro é bastante criticada por conta do seu lirismo simples e pueril. Segundo Bandeira, \"formou-se em torno de Casimiro de Abreu um juízo de todo injusto, a que infelizmente deu força a opinião de nomes prestigiosos\".\n[…]\nAinda assim, a maioria dos críticos concorda com o alto valor da sua obra, sendo que Massaud Moisés reconhece que \"o poeta brasileiro escreveu poemas de maior ressonância lírica\", a exemplo de Amor e Medo, provavelmente o seu poema mais celebrado entre críticos.\n[…]\nCasimiro de Abreu (município do Rio de Janeiro)\n[…]\nCasimiro de Abreu"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "No Meio do Caminho",
      "descricao": "Poema modernista de Carlos Drummond de Andrade publicado em 1928, que repete o verso tinha uma pedra no meio do caminho."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Publicado em 1928 na Revista de Antropofagia, o poema que repete que havia uma pedra no meio do caminho é de que poeta mineiro?",
    "resposta": "Carlos Drummond de Andrade",
    "fonte": [
      "https://pt.wikipedia.org/wiki/No_Meio_do_Caminho",
      "https://pt.wikipedia.org/wiki/Carlos_Drummond_de_Andrade"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/No_Meio_do_Caminho",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_Drummond_de_Andrade",
        "situacao": "ok",
        "texto": "Carlos Drummond de Andrade (Itabira, 31 de outubro de 1902 – Rio de Janeiro, 17 de agosto de 1987) foi um poeta, contista e cronista brasileiro, considerado por muitos o mais influente poeta brasileiro do século XX.\n[…]\nDrummond foi um dos principais poetas da segunda geração do modernismo brasileiro, embora sua obra não se restrinja a formas e temáticas de movimentos específicos.\n[…]\nNos anos 1940, Drummond ingressou nas fileiras do Partido Comunista Brasileiro (PCB) e chegou a dirigir um jornal do Partido no Rio de Janeiro, onde realizou uma entrevista com o dirigente do partido Luis Carlos Prestes ainda na cadeia. Existe colaboração de sua autoria no semanário Mundo Literário (1946–1948) e na revista luso-brasileira Atlântico.\n[…]\nDurante a maior parte da vida, Drummond foi funcionário público, embora tenha começado a escrever cedo e prosseguisse escrevendo até sua morte, que se deu em 1987 no Rio de Janeiro, doze dias após a morte de sua filha. Além de poesia, produziu livros infantis, contos e crônicas. Sua morte ocorreu por infarto do miocárdio e insuficiência respiratória.\n[…]\nDrummond, como os modernistas, segue a libertação proposta por Mário de Andrade e Oswald de Andrade; com a instituição do verso livre, mostrando que este não depende de um metro fixo. Se dividirmos o modernismo numa corrente mais lírica e subjetiva e outra mais objetiva e concreta, Drummond faria parte da segunda, ao lado do próprio Oswald de Andrade.\n[…]\nQuando se diz que Drummond foi o primeiro grande poeta a se afirmar depois das estreias modernistas, não se está querendo dizer que Drummond seja um modernista. De fato, herda a liberdade linguística, o verso livre, o metro livre, as temáticas cotidianas."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Lavoura Arcaica",
      "descricao": "Romance de 1975 de Raduan Nassar, sobre o filho que foge de uma família rural de imigrantes libaneses."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escritor paulista, filho de imigrantes libaneses, publicou Lavoura Arcaica e depois abandonou a literatura para se dedicar à vida de fazendeiro?",
    "resposta": "Raduan Nassar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Raduan_Nassar",
      "https://pt.wikipedia.org/wiki/Lavoura_Arcaica"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Raduan_Nassar",
        "situacao": "ok",
        "texto": "Raduan Nassar (Pindorama, 27 de novembro de 1935), é um escritor brasileiro galardoado com o Prêmio Camões em 2016.\n[…]\nCom apenas três livros publicados é considerado pela crítica como um grande escritor e comparado a nomes consagrados da literatura brasileira, como Clarice Lispector e Guimarães Rosa. Tudo isso graças à extraordinária qualidade de sua linguagem e força poética da sua prosa. Cultuado por um pequeno círculo de leitores, Raduan tornou-se mais conhecido pelo público em geral com as versões cinematográficas de Um copo de cólera e Lavoura arcaica.\n[…]\nFilho de comerciantes libaneses que migraram para o Brasil em 1920,  Raduan Nassar nasceu em Pindorama, cidade do interior do Estado de São Paulo, assim como seus 9 irmãos. Iniciou os estudos no Grupo Escolar de Pindorama e cursou o então chamado ginasial na cidade de Catanduva, para onde a família mudou-se, em 1949. Graves problemas de saúde o obrigaram a interromper seus estudos, retomados em casa, com a ajuda de uma das irmãs.\n[…]\nA Editora Gallimard, da França, lançou Lavoura arcaica e Um copo de cólera num só volume, em 1984. A segunda edição de Um copo de cólera é publicada em São Paulo pela Editora Brasiliense (a 3ª edição sairia em 1985 e a 4ª, em 1987). Raduan compra a Fazenda Lagoa do Sino, em Buri, sudeste do Estado de São Paulo e passa a se dedicar integralmente à produção rural.\n[…]\nEm maio de 2016, o Prêmio Camões, instituído pelos governos do Brasil e de Portugal e tido como o mais importante prêmio literário da língua portuguesa, foi atribuído pelo juri a  Raduan Nassar.\n[…]\nLavoura Arcaica, Lisboa, Relógio d'Água, 1999"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lavoura_Arcaica",
        "situacao": "ok",
        "texto": "Lavoura Arcaica é um filme brasileiro de 2001, do gênero drama, dirigido, escrito e montado por Luiz Fernando Carvalho. O roteiro é baseado no romance homônimo de Raduan Nassar, publicado em 1975. Em novembro de 2015 o filme entrou na lista feita pela Associação Brasileira de Críticos de Cinema (Abraccine) dos 100 melhores filmes brasileiros de todos os tempos.\n[…]\nAinda na década de 90, o cineasta deu início à pesquisa para a realização do longa-metragem. Em companhia do autor do romance, Raduan Nassar, viajou para o Líbano a fim de tomar conhecimento da cultura mediterrânea. O material colhido durante viagem foi transformado no documentário Que Teus Olhos Sejam Atendidos, exibido no GNT em 1997.\n[…]\nDisposto a manter um diálogo com a prosa poética do livro, o diretor decidiu fazer o filme sem roteiro prévio, apoiado inteiramente em improvisações dos atores sobre o romance. Para isso, realizou um intenso trabalho de preparação de elenco, retirados por quatro meses em uma fazenda. O processo de criação que envolveu cineasta e equipe é marcado por um comprometimento sensível com o texto de Nassar.\n[…]\nO filme foi realizado inteiramente em uma locação, em uma fazenda do interior de Minas Gerais. Nela, os atores e a equipe técnica passaram nove semanas, durante as quais aprenderam a trabalhar a terra, ordenhar, fazer pão, bordar e dançar como uma família de origem libanesa. O próprio autor do texto original, Raduan Nassar, esteve presente durante esta etapa.\n[…]\nPara o escritor e psicanalista Renato Tardivo, autor de Porvir que vem antes de tudo – literatura e cinema em Lavoura Arcaica, o filme é uma das mais importantes obras do cinema brasileiro “de todos os tempos”. O crítico Carlos Alberto de Mattos descreveu o filme como a primeira obra prima do cinema brasileiro no século XXI.\n[…]\n«Lavoura Arcaica - Site Oficial»\n[…]\n«Lavoura Arcaica - Festival do Rio»"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Feliz Ano Velho",
      "descricao": "Livro autobiográfico de Marcelo Rubens Paiva, publicado em 1982, sobre o acidente que o deixou tetraplégico."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No livro Feliz Ano Velho, de 1982, que escritor conta o mergulho num lago raso que o deixou tetraplégico aos vinte anos?",
    "resposta": "Marcelo Rubens Paiva",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Feliz_Ano_Velho",
      "https://pt.wikipedia.org/wiki/Marcelo_Rubens_Paiva"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Feliz_Ano_Velho",
        "situacao": "ok",
        "texto": "Feliz Ano Velho é um romance brasileiro de autoria de Marcelo Rubens Paiva lançado em 1982.\n[…]\nDurante a ditadura militar, o narrador-personagem narra a repressão social e a barragem aos cidadãos de qualquer participação social que se oponha ao regime, além da invasão de seis militares em sua casa que levaram seu pai, o deputado federal Rubens Beyrodt Paiva, que Marcelo Rubens Paiva não voltaria a ver.\n[…]\nDurante esse período de recuperação, Marcelo conta com carisma e sinceridade detalhes de sua infância e de sua juventude. Desvela seus casos amorosos, retrata sua carreira musical. Jovem ativo, participava do quadro político da Universidade Estadual de Campinas, onde cursava engenharia agrícola.\n[…]\nNarrado em primeira pessoa e de forma não linear, a linguagem das memórias do autor é coloquial e direta, com o uso do deboche e da ironia para lidar com a frustração de perder a independências e com a saudade do passado, como o desaparecimento de seu pai, o deputado Rubens Paiva, que permeia toda a narrativa.\n[…]\nHá fragmentos que reconstroem a cidade de Campinas no fim da década de 1970 junto à vida universitária de Paiva.\n[…]\n\"Biiiiiiin”: a onomatopeia que reproduz o som de uma colisão nomeia o capítulo que narra o acidente de Marcelo Rubens Paiva em 1979 em uma festa da Unicamp;\n[…]\n\"Uma avenida paulista\": por meio da fisioterapia, Paiva consegue retomar alguns lazeres, como passear por São Paulo;\n[…]\nA obra também foi vista no longa-metragem Ainda Estou Aqui, dirigido por Walter Salles, baseado no livro Ainda Estou Aqui, também de Marcelo Rubens Paiva."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Marcelo_Rubens_Paiva",
        "situacao": "ok",
        "texto": "Marcelo Rubens Beyrodt Paiva OMC (São Paulo, 1 de maio de 1959) é um escritor, dramaturgo e jornalista brasileiro, amplamente reconhecido por sua obra literária. Seu pai, o deputado federal Rubens Paiva, foi uma vítima da ditadura militar brasileira.\n[…]\nAlém de sua carreira como escritor, Marcelo Rubens Paiva também se destacou como dramaturgo, com peças de teatro aclamadas, e como colunista de jornais importantes, como o O Estado de S.Paulo, onde escreve sobre política, sociedade e cultura. Seu trabalho abrange romances, contos e peças teatrais, sendo um nome significativo na literatura e no debate cultural do Brasil.\n[…]\nMarcelo Rubens Paiva nasceu na cidade de São Paulo em 1959, filho mais novo de Eunice Facciolla e Rubens Paiva, que já tinham quatro filhas. Aos seis anos mudou-se para a cidade do Rio de Janeiro, em 1966, depois que seu pai, ex-deputado, foi cassado e exilado pelo golpe de Estado de 1964. Estudou no Colégio Andrews, quando em 1971, aos 11 anos, Marcelo, ou Belo, como é chamado pelos amigos,[carece de fontes]?\n[…]\nEscreveu outro livro infantil, O Menino e o Foguete, para a plataforma do Itaú no Facebook, vencedor do Jabuti.\n[…]\nSelton Mello representa Rubens Paiva, e Antônio Saboia, representa Marcelo Rubens Paiva. [1] [2]\n[…]\nMarcelo Rubens Paiva foi um dos diretores artísticos da cerimônia oficial de abertura dos Jogos Paralímpicos Rio 2016. Nesse mesmo ano, recusou-se a receber a Ordem do Mérito Cultural do Ministério da Cultura, afirmando que só aceitaria uma homenagem vinda de \"um governo eleito pelo voto direto\".\n[…]\nFeliz Ano Velho (1982)\n[…]\n'Marcelo Rubens Paiva - Crônicas para Ler na Escola (2011)\n[…]\nMarcelo Rubens Paiva no X\n[…]\nMarcelo Rubens Paiva no Instagram"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Poesia Concreta",
      "descricao": "Movimento de vanguarda da poesia brasileira lançado em São Paulo nos anos 1950, que explora a forma visual das palavras na página."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Ao lado de Décio Pignatari, que dupla de irmãos paulistas liderou nos anos 1950 o movimento da Poesia Concreta?",
    "resposta": "Augusto e Haroldo de Campos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Poesia_concreta",
      "https://pt.wikipedia.org/wiki/Haroldo_de_Campos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Poesia_concreta",
        "situacao": "ok",
        "texto": "Poesia concreta é um tipo de poesia vanguardista, de carácter experimental, basicamente visual, que procura estruturar o texto poético escrito a partir do espaço do seu suporte, sendo ele a página de um livro ou não, buscando a superação do verso como unidade rítmico-formal.\n[…]\nSurgiu na década de 1950 no Brasil e na Suíça, tendo sido primeiramente nomeada, tal qual a conhecemos, por Augusto de Campos na revista Noigandres de número 2,  de 1955, publicada por um grupo de poetas homónimo à revista e que produziam uma poesia afins. Também é chamada de (ou confundida com) poesia visual em algumas partes do mundo.\n[…]\nNo entanto, os primeiros textos que atendem rigorosamente aos preceitos definidos para a poesia concreta no seu primeiro manifesto (Plano-piloto para poesia concreta, publicado em São Paulo, 1958, e assinado por Augusto de Campos, por seu irmão Haroldo de Campos e por Décio Pignatari, grupo reunido desde 1952 sob o nome de Noigandres), foram uma série de poemas chamados de “Poetamenos” e o primeiro livro do boliviano-suíço Eugen Gomringer,  Konstellationen (Constelações), ambos publicados em 1953.\n[…]\nA poesia concreta é uma vanguarda no sentido de arte que busca a “ruptura”, dado por Octavio Paz.\n[…]\nEm adendo, posto em 1961, a poesia concreta paulista assume sua postura revolucionária, citando o mesmo poeta russo: \"sem forma revolucionária não há arte revolucionária\".\n[…]\nAlém disso, os poetas de São Paulo, principalmente Augusto e Haroldo de Campos, produziram vasta e indiscutível obra nos campos da teoria literária (muito relacionada em seus pontos de vista aos da poesia concreta) e da tradução (utilizada com fins de crítica, conforme preceitos de Ezra Pound).\n[…]\nHaroldo de Campos\n[…]\nDécio Pignatari\n[…]\nAugusto de Campos\n[…]\nConcretismo\n[…]\nSite oficial de Augusto de Campos"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Haroldo_de_Campos",
        "situacao": "ok",
        "texto": "Haroldo Eurico Browne de Campos (São Paulo, 19 de agosto de 1929 – São Paulo, 16 de agosto de 2003) foi um poeta, crítico literário e tradutor brasileiro, considerado, ao lado de Augusto de Campos, seu irmão, e Décio Pignatari, com os quais formou o grupo Noigandres, um dos representantes da poesia concreta no Brasil.\n[…]\nO intelectual morreu no dia 16 de agosto de 2003 às 1h de falência múltipla de órgãos. Estava internado na Unidade de Terapia Intensiva do Hospital Alemão Oswaldo Cruz. O corpo de Haroldo de Campos foi velado no Hospital Beneficência Portuguesa e foi cremado às 16h do mesmo dia da sua morte, no Cemitério da Vila Alpina. O poeta deixou a mulher, Carmem, e um filho, Ivan.\n[…]\nPoesia concreta\n[…]\nSELIGMANN-SILVA, M. 4. “Haroldo de Campos: Tradução como Formação e ‘Abandono’ da Identidade”, in: Revista USP, no 36, dez.-fev. de 1997/98, pp. 159-171\n[…]\nChanoca, Tatiana Alvarenga. \"Haroldo de Campos e a Ilíada de Homero.\" Nuntius Antiquus 18, no. 2 (2022)."
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Escrevivência",
      "descricao": "Conceito literário criado por Conceição Evaristo para a escrita nascida da experiência de vida, especialmente de mulheres negras."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escritora mineira, autora de Ponciá Vicêncio, criou o conceito de escrevivência, a escrita que nasce da experiência de vida das mulheres negras?",
    "resposta": "Conceição Evaristo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Concei%C3%A7%C3%A3o_Evaristo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Concei%C3%A7%C3%A3o_Evaristo",
        "situacao": "ok",
        "texto": "Maria da Conceição Evaristo de Brito (Belo Horizonte, 29 de novembro de 1946) é uma linguista e escritora brasileira. Teve uma prolífica carreira como pesquisadora-docente universitária.\n[…]\nEm seu trabalho como pesquisadora-docente universitária, Conceição Evaristo criou o termo \"Escrevivência\",  termo que une as palavras “escrever” e “vivência”. Para Conceição Evaristo esse conceito literário defende a vivência especialmente de mulheres negras e ancestrais na literatura.\n[…]\nO conceito de escrevivência foi formulado por Conceição Evaristo para definir uma prática literária marcada pela relação entre escrita, memória, experiência e vivência coletiva da população negra brasileira. O termo, amplamente difundido nos estudos de literatura afro-brasileira e feminismo negro, combina as palavras “escrita” e “vivência”, sendo utilizado pela autora para descrever uma produção literária construída a partir das experiências históricas, sociais e afetivas de mulheres negras.\n[…]\nSegundo Evaristo, a escrevivência nasce da experiência cotidiana da população negra e periférica, especialmente das mulheres negras, articulando memória familiar, ancestralidade, oralidade e denúncia das desigualdades raciais e sociais. Em entrevistas e ensaios, a autora afirmou que sua escrita surge das histórias ouvidas na infância, das experiências comunitárias e da observação das condições de vida da população negra brasileira.\n[…]\nHomenageada com a Ocupação Conceição Evaristo pelo Itaú Cultural;\n[…]\nEu-Mulher, poema de Conceição Evaristo\n[…]\nMENDES, Ana Cláudia Duarte. Eco e Memória: \"Vozes-Mulheres\", de Conceição Evaristo. Terra roxa e outras terras – Revista de Estudos Literários - Volume 17-A (dez. 2009)"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "O Menino Maluquinho",
      "descricao": "Livro infantil de Ziraldo lançado em 1980, sobre um menino que usa uma panela na cabeça."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O Menino Maluquinho, que anda com uma panela na cabeça, foi criado em 1980 por que escritor e cartunista mineiro?",
    "resposta": "Ziraldo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Menino_Maluquinho",
      "https://pt.wikipedia.org/wiki/Ziraldo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Menino_Maluquinho",
        "situacao": "ok",
        "texto": "O Menino Maluquinho é uma série de histórias em quadrinhos brasileira criada pelo desenhista e cartunista Ziraldo. A revista foi baseada no livro infantil de mesmo nome publicado em 1980, que se tornou um fenômeno durante os anos de 1990 e 2000. As histórias em quadrinhos foram publicadas pela Abril e Globo, de 1989 até 2007.\n[…]\n\"Era uma vez um menino que tinha o olho maior que a barriga, fogo no rabo e vento nos pés.\" A frase abre o livro O Menino Maluquinho, que apresentou ao mundo um dos mais queridos personagens brasileiros, criado pelo cartunista Ziraldo no dia de seu 48º aniversário: 24 de outubro de 1980.\n[…]\nDiz a lenda – e o próprio Ziraldo - que a inspiração para criar o menino surgiu espontaneamente, enquanto ele fazia a barba e falava consigo mesmo olhando no espelho. Criado pelo cartunista tanto em texto quanto em imagem, Maluquinho rapidamente foi para as tiras e quadrinhos, onde ganhou turma. Destaque, inclusive, para sensível e espevitada Julieta, que ganhou até revista própria na primeira década dos anos 2000.\n[…]\nMaluquinho é um menino alegre, cheio de imaginação e que adora aprontar e viver aventuras com os amigos. Uma de suas manias é usar um panelão na cabeça, o que o diferencia dos demais. As histórias misturam um humor por vezes ingênuo (ainda que com uma certa escatologia típica da infância) com um certo gosto de nostalgia.\n[…]\nEm 2014 foram anunciadas a produção de duas séries em desenho animado baseadas no Menino Maluquinho, como parte da parceria de Ziraldo com a empresa Oca Filmes. A primeira série seria baseada nos quadrinhos, contando com animação tradicional em 2D e contou com 26 episódios logo na primeira temporada. Já a segunda série seria baseada nos livros pré-escolares \"Bebê Maluquinho\" e seria uma animação computadorizada."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ziraldo",
        "situacao": "ok",
        "texto": "Ziraldo Alves Pinto (Caratinga, 24 de outubro de 1932 – Rio de Janeiro, 6 de abril de 2024) foi um cartunista, chargista, pintor, escritor, dramaturgo, cartazista, caricaturista, poeta, cronista, desenhista, apresentador, humorista, advogado e jornalista brasileiro.\n[…]\nFoi o criador de personagens famosos, como o Menino Maluquinho, e foi um dos mais conhecidos e aclamados escritores infantis de seu tempo. Ziraldo foi pai de três filhos, a cineasta Daniela Thomas, o compositor Antonio Pinto e a diretora de teatro Fabrízia Alves Pinto. Faleceu em sua residência no estado do Rio de Janeiro, Lagoa Rodrigo de Freitas em 6 de abril de 2024 aos 91 anos.\n[…]\nZiraldo passou toda a infância em Caratinga. Era irmão do também desenhista, cartunista, jornalista e escritor Zélio Alves Pinto e também de Ziralzi Alves Pinto. Estudou dois anos no Rio de Janeiro e voltou a Caratinga, tendo concluído o módulo científico (atual ensino médio). Formou-se em Direito pela Universidade Federal de Minas Gerais em 1957. Seu talento no desenho já se manifestava desde essa época, tendo publicado um desenho no jornal Folha de Minas com apenas 6 anos de idade.\n[…]\nZiraldo foi fumante durante 40 anos, mas conseguiu abandonar o vício.\n[…]\nNa tarde do dia 6 de abril de 2024, em torno das 15h, aos 91 anos, Ziraldo morreu em sua casa enquanto dormia, segundo a sua família. O presidente Luiz Inácio Lula da Silva lamentou a morte de Ziraldo e afirmou que \"O Brasil perdeu neste sábado, 6/4, um de seus maiores expoentes da cultura, da imprensa, da literatura infantil e do imaginário do país\". Várias instituições prestaram homenagens ao cartunista, como os clubes de futebol Flamengo, Atlético Mineiro e Corinthians.\n[…]\nZiraldo no Instagram\n[…]\nZiraldo on Google Cultural Institute\n[…]\nZiraldo no IMDb"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "O Pagador de Promessas",
      "descricao": "Peça teatral brasileira de 1960 sobre Zé do Burro, que carrega uma cruz até uma igreja de Salvador, adaptada para o cinema em 1962."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A peça sobre Zé do Burro, que carrega uma cruz até uma igreja de Salvador, virou filme vencedor da Palma de Ouro em 1962. Quem a escreveu?",
    "resposta": "Dias Gomes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Keeper_of_Promises",
      "https://pt.wikipedia.org/wiki/Dias_Gomes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Keeper_of_Promises",
        "situacao": "ok",
        "texto": "O Pagador de Promessas (Brazilian Portuguese pronunciation: [u paɡaˈdoʁ dʒi pɾoˈmɛsɐs]; Keeper of Promises) is a 1962 Brazilian drama film written and directed by Anselmo Duarte, based on the stage play of the same name by Dias Gomes. Shot in Salvador, Bahia, it stars Leonardo Villar and Glória Menezes.\n[…]\nThe film won the Palme d'Or at the 1962 Cannes Film Festival, becoming the first and only Brazilian film to achieve that feat. A year later, it also became the first Brazilian and South American film to be nominated for Best Foreign Language Film at the 35th Academy Awards.\n[…]\nIn 2015, the Brazilian Film Critics Association aka Abraccine voted Keeper of Promises the 9th greatest Brazilian film of all time, in its list of the 100 best Brazilian films.\n[…]\nZé do Burro (Leonardo Villar) is a landowner from Nordeste. His best friend is a donkey. When his donkey falls terminally ill, Zé promises to a Candomblé orisha, Iansan, that if his donkey recovers, he will give away his land to the poor and carry a cross all the way from his farm to the Saint Bárbara Church in Salvador, Bahia, where he will offer the cross to the local priest. Upon the recovery of his donkey, Zé leaves on his journey, covering a distance of 7 léguas (46 km; 29 miles).\n[…]\nThe sensationalist newspapers transform his promise to give away his land into a \"communist\" call for land reform (which remains a highly controversial issue in Brazil). When Zé is shot by the police to prevent his entry into the church, the Candomblé worshippers place his dead body on the cross and force their way into the church.\n[…]\nLeonardo Villar as Zé do Burro (Donkey Jack)\n[…]\n1962 Cannes Film Festival\n[…]\nO Pagador de Promessas at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dias_Gomes",
        "situacao": "ok",
        "texto": "Alfredo de Freitas Dias Gomes, mais conhecido pelo sobrenome Dias Gomes (Salvador, 19 de outubro de 1922 — São Paulo, 18 de maio de 1999), foi um romancista, dramaturgo, autor de telenovelas e membro da Academia Brasileira de Letras. Também conhecido pelo seu casamento com a também escritora Janete Stocco Emmer (Janete Clair).\n[…]\nDias Gomes nasceu em Salvador, na Bahia, em 19 de outubro de 1922.\n[…]\nEssencialmente um homem de teatro, aos 15 anos Dias Gomes escreveu sua primeira peça, A Comédia dos Moralistas, com a qual ganharia o prêmio do Serviço Nacional de Teatro e pela União Nacional dos Estudantes (UNE), no ano seguinte. Em 1941 sua peça Amanhã Será Outro Dia chega às mãos do ator Procópio Ferreira que, empolgado com a qualidade do texto, chama o autor para uma conversa.\n[…]\nDe 1944 a 1964 Dias Gomes adaptou cerca de 500 peças teatrais para o rádio, o que lhe proporcionou apurado conhecimento da literatura universal. Em 1960 Dias Gomes volta aos palcos com aquele que viria a ser um dos maiores êxitos de sua carreira, o maior no teatro: a peça teatral O Pagador de Promessas. Adaptada para o cinema por Anselmo Duarte, O Pagador seria o primeiro filme brasileiro a receber uma indicação ao Oscar e o único a ganhar a Palma de Ouro em Cannes.\n[…]\nO fracasso de Sinal de Alerta, em 1978, leva Dias a se afastar do gênero telenovela temporariamente.\n[…]\nEm 2013, no remake de sua obra original Saramandaia, o autor é homenageado com uma pequena estátua de Santo Dias, retratado como o padroeiro da cidade de Bole-Bole.\n[…]\nDias Gomes escreveu diversas obras para o teatro, literatura, cinema e televisão. Entre suas peças teatrais, a mais célebre é O Pagador de Promessas (1959). Adaptada para o cinema em 1962, por Anselmo Duarte, conquistou vários prêmios internacionais, com destaque para a Palma de Ouro no Festival de Cannes."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Os Sertões",
      "descricao": "Livro de Euclides da Cunha publicado em 1902 sobre a Guerra de Canudos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Os Sertões, Euclides da Cunha narra a destruição, pelo Exército, de que arraial do sertão baiano liderado por Antônio Conselheiro?",
    "resposta": "Canudos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Os_Sert%C3%B5es",
      "https://pt.wikipedia.org/wiki/Guerra_de_Canudos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Sert%C3%B5es",
        "situacao": "ok",
        "texto": "Os Sertões é um livro do escritor e jornalista brasileiro Euclides da Cunha, publicado em 1902. É considerado como o primeiro livro-reportagem brasileiro.\n[…]\nTrata da Guerra de Canudos (1896–1897), ocorrida em Canudos, município do interior da Bahia. Euclides da Cunha presenciou uma parte da guerra como correspondente do jornal O Estado de S. Paulo. Pertence, ao mesmo tempo, à prosa científica e à prosa artística. Pode ser entendido como uma obra de Sociologia, Geografia, História ou crítica humana, mas não é errado lê-lo como uma epopeia da vida sertaneja em sua luta diária contra a paisagem e a incompreensão da elite.\n[…]\nO determinismo julgava que o homem é produto do meio (geografia), da raça (hereditariedade) e do momento histórico (cultura). O autor faz uma análise da psicologia do sertanejo e de seus costumes; é uma descrição feita pelo sociólogo e antropólogo Euclides da Cunha, que mostra o habitante do lugar, sua relação com o meio, sua gênese etnológica, seu comportamento, crença e costume; mas depois se fixa na figura de Antônio Conselheiro, o líder de Canudos.\n[…]\nFala sobre o que foi a Guerra de Canudos e explica com riqueza de detalhes os fatos dessa guerra que dizimou a população de Canudos. Uma descrição feita por Euclides da Cunha, relatando as quatro expedições a Canudos, criando o retrato real só possível pela testemunha ocular da fome, da peste, da miséria, da violência e da insanidade da guerra.\n[…]\nTexto completo de Os sertões\n[…]\nArtigo Afinal, do que trata o livro Os Sertões?\n[…]\n«Juízos críticos: Os sertões : Campanha de Canudos». Biblioteca Brasiliana Guita e José Mindlin. Consultado em 8 de julho de 2023"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_de_Canudos",
        "situacao": "ok",
        "texto": "Guerra de Canudos ou Campanha de Canudos foi um conflito armado ocorrido no final do século XIX entre, por um lado, as tropas regulares do estado da Bahia primeiro, e da república do Brasil depois, e por outro lado, um grupo de cerca de 30 000 colonos estabelecidos em comunidade autônoma num povoado fundado por eles no nordeste da Bahia, perto da antiga fazenda de Canudos, e rebatizado de Belo Mon\n[…]\nAlguns historiadores sugeriram, na esteira de Da Cunha, que a ocorrência de crises na sociedade do sertão — política, climática, ou ambas juntas — pode ter contribuído para a ascensão do messianismo, do fanatismo religioso ou da insubmissão às leis. A decisão de se mudar para Canudos pode ter sido determinada pelo atrativo que exercia a visão religiosa de Antônio Conselheiro, mas também e talvez antes de tudo por motivos econômicos.\n[…]\nPor fim, Euclides da Cunha fez publicar um livro, intitulado Os Sertões, pelo qual se propunha a reabilitar e resgatar os rebeldes, e na nota preliminar do qual teve esta frase tornada célebre: «A campanha de Canudos evoca um refluxo para o passado. Foi, em toda a força do termo, um crime. Denunciemo-lo».\n[…]\nJota Sara, de seu verdadeiro nome José Aras, baiano de Cumbe (rebatizado Euclides da Cunha), era um grande conhecedor da vida do sertanejo, tendo vivido toda a sua vida no sertão do Conselheiro, onde morreu octogenário em 1979. Cedo, empreendeu recolher informações sobre a guerra de Canudos junto a sobreviventes, mas também bebeu na tradição oral, viva na região.\n[…]\nO baiano Glauber Rocha está todo impregnado das representações de Da Cunha, e, se não fez certamente nunca uma adaptação direta de Os Sertões, nem pôs em imagens o drama de Canudos, ele encenou deuses, demônios, conselheiros, cangaceiros, beatos, santos guerreiros inspirados no universo de Da Cunha, mais particularmente em Deus e o Diabo na Terra do Sol.\n[…]\nAcervo da Guerra de Canudos"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "O Alienista",
      "descricao": "Novela satírica de Machado de Assis publicada em 1882, sobre o médico Simão Bacamarte e seu hospício, a Casa Verde."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em O Alienista, de Machado de Assis, o doutor Simão Bacamarte acaba internando na Casa Verde boa parte dos moradores de que vila?",
    "resposta": "Itaguaí",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Alienista"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Alienista",
        "situacao": "ok",
        "texto": "O Alienista é uma obra literária humorística do escritor brasileiro Machado de Assis. Muitos consideram-no um conto, mas a maioria dos críticos e especialistas consideram-no uma novela por causa da sua estrutura narrativa.\n[…]\nO livro conta a história do Dr. Bacamarte, um alienista (a designação de psiquiatra na época) que cria a Casa Verde, um local para realizar estudos inéditos sobre a mente humana, mas acaba perdendo-se na sua própria loucura.\n[…]\nDepois de conquistar respeito em sua carreira de médico na Europa e no Brasil, o Dr. Simão Bacamarte retorna à sua terra natal, a vila de Itaguaí, para dedicar-se ainda mais à sua profissão. Após um tempo na vila, casa-se com a já viúva D. Evarista, então por volta dos vinte e cinco anos e que não é nem bonita nem simpática. O médico escolhe-a por julgá-la capaz de gerar bons filhos, mas ela acaba não tendo nenhum.\n[…]\nDr. Simão Bacamarte - É médico psiquiatra e o protagonista da história. A ciência era o seu universo, vivia estudando. Representa bem a caricatura do tiranismo da ciência no século XIX, podendo ser um precursor de personagens como Spock. Construiu a Casa Verde para materializar suas ideias, mas acabou tornando-se vítima delas, recolhendo-se à Casa Verde por considerar-se o único cérebro bem organizado de Itaguaí.\n[…]\nCaso Especial: O Alienista (1993), episódio do seriado Caso Especial da Rede Globo, exibido durante a fase onde o programa adaptava obras literárias brasileiras, com Marco Nanini como Simão Bacamarte.\n[…]\nO Alienista Caçador de Mutantes (2010), de Natália Klein, parte da série Clássicos Fantásticos da Editora Lua de Papel. Nessa versão, a Casa Verde aprisiona vítimas de mutação, causadas pela queda de um disco voador em Itaguaí."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "O Alquimista",
      "descricao": "Romance de Paulo Coelho publicado em 1988, sobre a viagem do pastor andaluz Santiago em busca de um tesouro."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em O Alquimista, de Paulo Coelho, o pastor Santiago deixa a Andaluzia atrás de um tesouro sonhado perto de que monumentos?",
    "resposta": "As Pirâmides do Egito",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Alquimista",
      "https://en.wikipedia.org/wiki/The_Alchemist_(novel)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Alquimista",
        "situacao": "ok",
        "texto": "O Alquimista é um best-seller do escritor brasileiro Paulo Coelho, publicado originalmente em 1988, em português.\n[…]\nRomance alegórico, O Alquimista segue um jovem pastor andaluz em sua viagem ao Egito, depois de ter um sonho recorrente de encontrar tesouro lá.\n[…]\nO Alquimista segue a jornada de um pastor andaluz chamado Santiago. Acreditando em um sonho recorrente de ser profético, ele decide viajar para uma adivinha Romani em uma cidade próxima para descobrir seu significado. A mulher interpreta o sonho como uma profecia dizendo ao menino que há um tesouro nas pirâmides no Egito.\n[…]\nSantiago ou 'O rapaz'\n[…]\nO menino é o protagonista do Alquimista. Nascido em uma pequena cidade da Andaluzia, ele frequenta o seminário como um menino, mas quer viajar pelo mundo. Ele finalmente tem a coragem de pedir a seu pai permissão para se tornar um pastor para que ele possa viajar pelos campos da Andaluzia. Uma noite, em uma igreja abandonada, ele sonha com uma criança dizendo a ele que se ele for às pirâmides egípcias, encontrará um tesouro.\n[…]\nO Alquimista\n[…]\nO monge tenta recusar a oferenda, mas o alquimista diz-lhe que \"a vida pode estar escutando, e dar [você] menos na próxima vez.\" Depois, quando o garoto rasteja para trás batido e elated das pirâmides, o monk dá-lhe a outra parte do disco do ouro e ajuda-o a recuperar.\n[…]\nEla não sabe sobre as pirâmides do Egito. Ela afirma: \"Eu nunca ouvi falar deles, mas se foi uma criança que mostrou a você que eles existem.\" À primeira vista, ela parecia louca, suspeita e perigosa para o menino. Ela prometeu um décimo do tesouro do garoto se ele alguma vez encontrou."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Alchemist_(novel)",
        "situacao": "ok",
        "texto": "The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. The story follows Santiago, a shepherd boy, in his journey across North Africa to the Egyptian pyramids after he dreams of finding treasure there. It has since been translated into more than\n[…]\nThe book's main theme is about finding one's destiny, although according to The New York Times, The Alchemist is \"more self-help than literature\". The advice given to Santiago that \"when you really want something to happen, the whole universe will conspire so that your wish comes true\" is the core of the novel's thinking. Coelho originally wrote The Alchemist in only two weeks, explaining later that he was able to work at this pace because the story was \"already written in [his] soul.\"\n[…]\nIn 1994, a comic book adaptation was published by Alexandre Jubran. HarperOne, a HarperCollins imprint, produced an illustrated version of the novel, with paintings by the French artist Mœbius, but failed to convince Coelho \"to consent to the full graphic-novel treatment\". The Alchemist: A Graphic Novel was published in 2010, adapted by Derek Ruiz and with artwork by Daniel Sampere.\n[…]\nThe Alchemist's Symphony by the young Walter Taieb was released in 1997 with the support of Paulo Coelho, who wrote an original text for the CD booklet. The work has eight movements and five interludes.\n[…]\nIn 2006, Mistaken Identity, a Singapore indie rock band, adapted the story of the novel into what they claimed was \"essentially our attempt at writing a musical\" and released the track as \"The Alchemist\". Kochavva Paulo Ayyappa Coelho, an Indian Malayalam-language film written and directed by Sidhartha Siva, has its title inspired by novelist Paulo Coelho, and a central theme is inspired from The Alchemist."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "A Hora da Estrela",
      "descricao": "Romance de Clarice Lispector publicado em 1977, sobre a datilógrafa nordestina Macabéa no Rio de Janeiro."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em A Hora da Estrela, de Clarice Lispector, a datilógrafa Macabéa vive no Rio de Janeiro, mas nasceu em que estado nordestino?",
    "resposta": "Alagoas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Hora_da_Estrela"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Hora_da_Estrela",
        "situacao": "ok",
        "texto": "A Hora da Estrela é um romance literário da escritora brasileira Clarice Lispector.\n[…]\nO romance narra a história da datilógrafa alagoana, Macabéa, que migra para o Rio de Janeiro, tendo sua rotina narrada por um escritor fictício chamado Rodrigo S.M.\n[…]\nA Hora da Estrela traz consigo a forte presença de um narrador que conta a história ao mesmo tempo que a escreve, característica peculiar da autora. Clarice Lispector cria Rodrigo S.M. para contar a história de Macabéa, pois essa história não poderia ser contada por uma mulher. Rodrigo assume, portanto, o papel de autor da história.\n[…]\nO lado místico de Clarice Lispector é uma curiosa semelhança com Macabéa. No romance, a personagem ganha sua hora de estrela após uma visita à cartomante. Uma vez, a neta da escritora judia relatou que sua avó frequentava cartomantes, tinha costume de jogar búzios e até esteve em um congresso de bruxaria. Seria a autora uma continuação dos enigmas de suas obras?\n[…]\nClarice adota discurso regionalista em A hora da estrela, algo incomum em suas obras. Através da personagem Macabéa, a autora descreve uma nordestina que tenta escapar da miséria e do subdesenvolvimento, abandonando Alagoas pela possibilidade de melhores condições de vida no Rio de Janeiro. Clarice foi muitas vezes criticada por se afastar da literatura regional emergente do modernismo.\n[…]\nA hora da estrela é uma obra-prima da literatura brasileira, principalmente, pelas reflexões de Rodrigo S.M. sobre o ato de escrever, sua própria vida e a anti-heroína Macabéa."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Sermão de Santo Antônio aos Peixes",
      "descricao": "Sermão do padre Antônio Vieira pregado em 1654, em que ele se dirige aos peixes para criticar os colonos."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1654, em que cidade brasileira o padre Antônio Vieira pregou o famoso Sermão de Santo Antônio aos Peixes?",
    "resposta": "São Luís",
    "distratores": [
      "Salvador",
      "Olinda",
      "Belém"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Serm%C3%A3o_de_Santo_Ant%C3%B4nio_aos_Peixes",
      "https://pt.wikipedia.org/wiki/Ant%C3%B3nio_Vieira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Serm%C3%A3o_de_Santo_Ant%C3%B4nio_aos_Peixes",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ant%C3%B3nio_Vieira",
        "situacao": "ok",
        "texto": "António Vieira (Lisboa, Sé, 6 de fevereiro de 1608 – Salvador, 18 de julho de 1697), mais conhecido como Padre António Vieira, foi um filósofo, escritor e orador português da Companhia de Jesus.\n[…]\nEm 1653, proferiu o \"Sermão da Primeira Dominga de Quaresma\" em São Luís do Maranhão, no qual tentou convencer os senhores de engenho a libertarem os seus escravos indígenas. Sua luta contra a escravidão dos povos nativos da América estava associada à sua crença de que a colonização portuguesa teria como missão converter aqueles povos para a fé católica.\n[…]\nEm 1654, pouco depois de proferir o célebre \"Sermão de Santo António aos Peixes\" em São Luís, no estado do Maranhão, o padre António Vieira partiu para Lisboa, junto com dois companheiros, a bordo de um navio carregado de açúcar. Tinha como missão defender junto ao monarca os direitos dos indígenas escravizados, contra a cobiça dos colonos portugueses. Após cerca de dois meses de viagem, já à vista da ilha do Corvo, a Oeste dos Açores, abateu-se sobre a embarcação uma violenta tempestade.\n[…]\nEmbora não seja considerado santo na Igreja Católica, Padre Antônio Vieira consta no calendário de santos da Igreja Episcopal Anglicana do Brasil como sacerdote e testemunha profética, sendo sua festa litúrgica celebrada em 18 de julho.\n[…]\nSermão de Santo António aos Peixes\n[…]\nSermão XIII\n[…]\n1654 – Prega o \"Sermão de Santo António aos Peixes\", na véspera de embarcar para Lisboa, onde, em breve visita, pedirá providências favoráveis aos índios e às missões jesuítas no estado do Maranhão.\n[…]\n«Biografia do Pe. António Vieira, no site Patrimônios de São Luís»\n[…]\n\"Sermão de Stº. António aos Peixes\", de padre António Vieira, Grandes Livros, Companhia de Ideias, 2009"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Poema da Virgem",
      "descricao": "Longo poema em latim à Virgem Maria que, segundo a tradição, José de Anchieta compôs na areia da praia de Iperoig em 1563."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Segundo a tradição, José de Anchieta escreveu na areia um longo poema à Virgem Maria enquanto era refém dos tamoios. Em que atual cidade paulista?",
    "resposta": "Ubatuba",
    "distratores": [
      "Santos",
      "São Vicente",
      "Bertioga"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jos%C3%A9_de_Anchieta",
      "https://pt.wikipedia.org/wiki/Paz_de_Iperoig"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jos%C3%A9_de_Anchieta",
        "situacao": "ok",
        "texto": "José de Anchieta SJ (San Cristóbal de La Laguna, 19 de março de 1534 – Reritiba, 9 de junho de 1597) foi um padre jesuíta espanhol que ingressou na Companhia de Jesus no Reino de Portugal, ficando ao seu serviço, e um dos fundadores das cidades brasileiras de São Paulo e do Rio de Janeiro.\n[…]\nDurante este tempo em que passou entre os gentios, compôs o \"Poema à Virgem\". Segundo uma tradição, teria escrito nas areias da praia e memorizado o poema, e apenas mais tarde, em São Vicente, o teria trasladado para o papel. Ainda segundo a tradição, foi também durante o cativeiro que Anchieta teria \"levitado\" entre os indígenas.\n[…]\nO movimento de catequese influenciou seu teatro e sua poesia, resultando na melhor produção literária do quinhentismo brasileiro. Entre suas contribuições culturais, podemos citar as poesias em verso medieval (sobretudo o poema De Beata Virgine Dei Matre Maria, mais conhecido como Poema à Virgem, com 5786 versos), os autos que misturavam características religiosas e indígenas, a primeira gramática da língua tupi (A Cartilha dos nativos).\n[…]\nA Basílica de São José de Anchieta e o Museu Anchieta, no Pátio do Colégio, é um dos mais importantes espaços do centro histórico da cidade de São Paulo. Os atuais edifícios foram reconstruídos entre 1954 e 1979 (após o IV centenário da cidade) depois de anos sendo Palácio do Governo, louvando a história de um dos fundadores da capital paulista e maior cidade do Brasil.\n[…]\nNa Basílica de Nossa Senhora da Candelária, santuário da padroeira das Ilhas Canárias, localizada no sudeste da ilha de Tenerife, há uma pintura que apresenta José de Anchieta fundando o povoado de São Paulo de Piratininga, origem da cidade de São Paulo.\n[…]\nObras de José de Anchieta na Biblioteca Nacional de Portugal"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paz_de_Iperoig",
        "situacao": "ok",
        "texto": "A Paz de Iperoig ou Armísticio de Iperoig foi um tratado de paz efetuado entre os portugueses e os indígenas tamoios em 1563.\n[…]\n\"Iperoig\" é um termo derivado da língua tupi antiga: significa \"rio dos tubarões\", através da junção de iperó (tubarão) e 'y (rio). Era o nome da localidade onde Manuel da Nóbrega e José de Anchieta ficaram reféns dos tamoios em 1562-1563.\n[…]\nSem recursos para responder às investidas indígenas, os portugueses decidiram recorrer à diplomacia. Para tanto, as autoridades portuguesas enviaram os padres jesuítas Manuel da Nóbrega, como representante do governo de São Vicente, e José de Anchieta, como intérprete, para acertarem um tratado de paz com os tamoios fronteiriços. Partiram de São Vicente em 18 de abril de 1563, e alcançaram a região de Iperoig (atual Ubatuba) em 6 de maio.\n[…]\nReuniram-se com os principais líderes indígenas, como Cunhambebe (filho) e Pindobuçu. Nóbrega acompanhou Cunhambebe até São Vicente, onde o líder tamoio iria negociar com os portugueses e tupiniquins, enquanto Anchieta ficou em Iperoig como refém dos tamoios. Durante esse período como refém, Anchieta compôs, na areia da praia, seu célebre poema em latim em honra à Virgem Maria, o \"Poema da Virgem\".\n[…]\nUBAWEB. «História - Ubatuba - Sua opção de lazer». www.ubaweb.com. Consultado em 30 de setembro de 2018"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Guimarães Rosa",
      "descricao": "Escritor, médico e diplomata mineiro (1908–1967), autor de Grande Sertão: Veredas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Guimarães Rosa nasceu numa pequena cidade mineira, perto de uma famosa gruta, que hoje tem um museu dedicado a ele. Qual é essa cidade?",
    "resposta": "Cordisburgo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Guimar%C3%A3es_Rosa",
      "https://pt.wikipedia.org/wiki/Cordisburgo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Guimar%C3%A3es_Rosa",
        "situacao": "ok",
        "texto": "João Guimarães Rosa (Cordisburgo, 27 de junho de 1908 – Rio de Janeiro, 19 de novembro de 1967) foi um médico, diplomata, escritor e poeta brasileiro, identificado com a terceira geração do modernismo no Brasil e reconhecido por muitos como o maior escritor brasileiro do século XX. Seu estilo é marcado por neologismos, coloquialidade e fluxo de consciência e sua ficção ambienta-se no sertão mineir\n[…]\nGuimarães Rosa nasceu na cidade de Cordisburgo, no estado de Minas Gerais, e ao longo da vida exerceu as profissões de médico e diplomata. Enquanto servia como cônsul-adjunto em Hamburgo, entre 1938 e 1942, ele e sua segunda esposa Aracy de Carvalho ajudaram muitos judeus que fugiam do nazismo a entrarem ilegalmente no Brasil.\n[…]\nFoi o primeiro dos seis filhos de Francisca Guimarães Rosa (\"Chiquitita\") e de Florduardo Pinto Rosa (\"Flor\"), juiz de Paz, vereador e comerciante em Cordisburgo.\n[…]\nAinda pequeno, mudou-se para a casa dos avós, em Belo Horizonte, onde concluiu o curso primário. Iniciou o curso secundário no Colégio Santo Antônio, em São João del-Rei, mas logo retornou a Belo Horizonte, onde se formou. O tio Adonias, fazendeiro muito rico, dono da fazenda Sarandi, patrocinou os estudos de Guimarães Rosa no Colégio Arnaldo. Em 1925 matriculou-se na então Faculdade de Medicina da Universidade de Minas Gerais, com apenas 16 anos, tendo sido o orador da turma, em 1930.\n[…]\nDiadorim-Mediador, a alma que se perde na consumação do pacto com a linguagem e a poesia. Riobaldo (Rosa-IO-bardo), o poeta-guerreiro que, em estado de transe, dá à luz obras-primas da literatura universal. Biografia e ficção fundem-se e confundem-se nas páginas enigmáticas de João Guimarães Rosa, morto prematuramente aos 59 anos de idade, no ápice de sua carreira literária e diplomática.\n[…]\nJoão Guimarães Rosa / Centro da Memória da Medicina em Minas Gerais\n[…]\n24 Cartas de João Guimarães Rosa a Antonio Azeredo da Silveira"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cordisburgo",
        "situacao": "ok",
        "texto": "Cordisburgo é um município brasileiro localizado no estado de Minas Gerais. Situada na região central do estado, a cidade é amplamente reconhecida nos âmbitos geológico e literário, sendo o berço de importantes sítios paleontológicos, como a Gruta do Maquiné, e a terra natal do aclamado escritor, médico e diplomata brasileiro João Guimarães Rosa.\n[…]\nA história da ocupação do território que hoje compreende Cordisburgo tem suas raízes no período dos bandeirantes, que atuaram como desbravadores dos sertões da região calcária das Sete Lagoas. Posteriormente, pequenos fazendeiros começaram a se apossar das terras locais. A região específica onde a cidade se formou era inicialmente conhecida como arraial do \"Saco dos Cochos\" e fazia parte de uma sesmaria pertencente ao extinto Vínculo da Jaguara.\n[…]\nBerço Literário: João Guimarães Rosa nasceu em Cordisburgo no dia 27 de junho de 1908, sendo o grande expoente do município no cenário mundial. Ele utilizava com frequência sua terra natal como inspiração estrutural, cravando a famosa citação: “Cordisburgo era pequenina terra sertaneja, trás montanhas, no meio de Minas Gerais. Só quase um lugar, mas tão de repente bonito: lá se desencerra a Gruta do Maquiné, mil maravilha, a das Fadas...”\n[…]\nO Grupo Miguilim: Criado em 1996 pela Dra. Calina Guimarães (prima do escritor), o grupo de jovens narradores de histórias atua fortemente na cidade e no Museu Casa Guimarães Rosa, memorizando e recitando contos do autor para os visitantes.\n[…]\nTérmino Precoce: O ilustre cidadão cordisburguense, João Guimarães Rosa, faleceu em 19 de novembro de 1967, apenas três dias após assumir a sua tão aguardada posse na Academia Brasileira de Letras.\n[…]\nPrefeitura de Cordisburgo\n[…]\nCâmara de Cordisburgo\n[…]\nCordisburgo no IBGE Cidades"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Carlos Drummond de Andrade",
      "descricao": "Poeta modernista mineiro (1902–1987), autor de A Rosa do Povo e Sentimento do Mundo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidade mineira nasceu Carlos Drummond de Andrade, que num poema disse que sua terra natal era apenas uma fotografia na parede?",
    "resposta": "Itabira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carlos_Drummond_de_Andrade",
      "https://pt.wikipedia.org/wiki/Itabira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_Drummond_de_Andrade",
        "situacao": "ok",
        "texto": "Carlos Drummond de Andrade (Itabira, 31 de outubro de 1902 – Rio de Janeiro, 17 de agosto de 1987) foi um poeta, contista e cronista brasileiro, considerado por muitos o mais influente poeta brasileiro do século XX.\n[…]\nDrummond nasceu na cidade de Itabira, em Minas Gerais. Sua memória dessa cidade viria a permear parte de sua obra. Seus antepassados, tanto do lado materno como paterno, pertencem a famílias de origem escoto-madeirense há muito tempo estabelecidas no Brasil.\n[…]\nEm 1916, foi estudar no Colégio Arnaldo, em Belo Horizonte, colégio no qual desenvolveu amizades com figuras como o futuro Ministro da Educação Gustavo Capanema. Contudo, Drummond não concluiu seu estudos nesta instituição devido a sua contaminação por uma doença venérea, o que motivou sua família a retirá-lo do colégio e retorná-lo para sua cidade natal a fim de se tratar.\n[…]\nNos anos 1940, Drummond ingressou nas fileiras do Partido Comunista Brasileiro (PCB) e chegou a dirigir um jornal do Partido no Rio de Janeiro, onde realizou uma entrevista com o dirigente do partido Luis Carlos Prestes ainda na cadeia. Existe colaboração de sua autoria no semanário Mundo Literário (1946–1948) e na revista luso-brasileira Atlântico.\n[…]\nDrummond, como os modernistas, segue a libertação proposta por Mário de Andrade e Oswald de Andrade; com a instituição do verso livre, mostrando que este não depende de um metro fixo. Se dividirmos o modernismo numa corrente mais lírica e subjetiva e outra mais objetiva e concreta, Drummond faria parte da segunda, ao lado do próprio Oswald de Andrade."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Itabira",
        "situacao": "ok",
        "texto": "Itabira é um município brasileiro no interior do estado de Minas Gerais, Região Sudeste do país. Localiza-se no Quadrilátero Ferrífero, estando situado a cerca de 110 km a leste da capital estadual. Ocupa uma área de aproximadamente 1 250 km², sendo que 26 km² estão em área urbana, e sua população foi estimada em 118 053 habitantes em 2025.\n[…]\nAlém de se relevar no setor de exploração mineral, Itabira também se destaca por ser terra natal de Carlos Drummond de Andrade, contista, cronista e poeta modernista que se inspirou em sua cidade-natal para algumas de suas obras. Também há uma série de atrativos naturais, tais como a Mata do Limoeiro, a Pedra da Igreja, a Serra do Bicudo e a Serra dos Alves, além das cachoeiras dos Cristais, do Campo, da Boa Vista, do Limoeiro e do Meio.\n[…]\nNo final da década de 1960, Itabira ganhou novo impulso em seu desenvolvimento, com o Plano de Expansão da Vale, que construiu e colocou em operação o \"Projeto Cauê\" responsável por um verdadeiro crescimento econômico e cultural da cidade.\n[…]\nTambém há o Museu Itabirano, o Museu Caminhos Drummondianos e do Memorial Drummond, que reúnem um relevante acervo que conta em detalhes a história de Itabira e a vida de Carlos Drummond de Andrade.\n[…]\nA cidade é terra natal de alguns artistas que obtiveram relevância regional, nacional ou mesmo internacional, tais como a modelo Ana Beatriz Barros; o contista, cronista e poeta modernista Carlos Drummond de Andrade, sendo que como cidade-natal Itabira serviu de inspiração para algumas de suas obras; o romancista, biógrafo, jornalista, polígrafo, cientista, membro do Instituto Histórico e Geográfico de São Paulo e poeta Horácio de Carvalho; o escritor, professor e historiador João Camilo de Oliveira Torres; e a modelo Patrícia Barros, irmã da também modelo Ana Beatriz Barros.\n[…]\nItabira no IBGE Cidades"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Gabriela, Cravo e Canela",
      "descricao": "Romance de Jorge Amado publicado em 1958, sobre a retirante Gabriela e o árabe Nacib na região do cacau."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Gabriela, Cravo e Canela, de Jorge Amado, se passa nos anos 1920, na época de ouro do cacau, em que cidade baiana?",
    "resposta": "Ilhéus",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gabriela,_Cravo_e_Canela"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gabriela,_Cravo_e_Canela",
        "situacao": "ok",
        "texto": "Gabriela, Cravo e Canela é um dos mais célebres romances do escritor brasileiro Jorge Amado, publicado em 1958.\n[…]\nRepresenta um momento de mudança na produção literária do autor, que até então abordava temas sociais. Nesta fase faz uma crônica de costumes, marcada por tipos populares, poderosos coronéis e mulheres sensuais. \"A crítica aponta Gabriela, cravo e canela, que tem ambiência em Ilhéus, como o divisor de águas da obra amadiana. Além de Gabriela, Cravo e Canela, os romances Dona Flor e seus dois maridos, Tieta do Agreste e Teresa Batista cansada de guerra são representativos deste tempo.\n[…]\nNa década de 1920, na então rica e pacata Ilhéus, ansiando progressos, com intensa vida noturna litorânea, entre bares e bordéis, desenrola-se o drama, que acaba por tornar-se uma explosão de folia e luz, cor, som e riso.\n[…]\nA obra narra o caso de amor entre o árabe Nacib e a sertaneja Gabriela, como pano de fundo o período áureo do cacau na região de Ilhéus, descrevendo as alterações profundas da vida social da Bahia da década de 1920, que inclui a abertura do porto aos grandes navios, levando à ascensão do exportador carioca Mundinho Falcão e ao declínio dos coronéis, como Ramiro Bastos.\n[…]\nNessas duas primeiras partes iniciais a narrativa tem como foco principal dois personagens: Mundinho Falcão e Nacib. Ao término da segunda parte a personagem protagonista Gabriela aparece, retirante que tem como objetivo morar em Ilhéus e trabalhar como cozinheira ou doméstica. Ainda na segunda, o autor narra a solidão de Glória.\n[…]\nciclo do cacau\n[…]\nSite oficial de Jorge Amado\n[…]\nFundação Jorge Amado"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Poema Sujo",
      "descricao": "Longo poema de Ferreira Gullar escrito em 1975, durante seu exílio, sobre suas memórias de São Luís."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Ferreira Gullar escreveu o Poema Sujo, cheio de lembranças de São Luís, durante o exílio na ditadura. Em que cidade estrangeira?",
    "resposta": "Buenos Aires",
    "distratores": [
      "Paris",
      "Lisboa",
      "Moscou"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Poema_Sujo",
      "https://pt.wikipedia.org/wiki/Ferreira_Gullar"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Poema_Sujo",
        "situacao": "ok",
        "texto": "Poema Sujo é o título de um poema – e também da obra em que foi publicado – do escritor brasileiro Ferreira Gullar. Foi escrito no período do exílio do autor na Argentina, entre maio e outubro de 1975.\n[…]\nQuando divulga, em 1975, o \"Poema Sujo\", que marcaria seu apogeu, Gullar encontrava-se limitado à Argentina; seu passaporte cancelado em todas as páginas,  pois havia sido limitado pelo Brasil por lutar contra a ditadura militar, inclusive seu livro trata-se disso, lutas, miséria, pobreza... Pensando ser iminente sua morte, escreve convulsivamente, remetendo ao passado e dissecando sua condição e a situação em que se encontravam Brasil e América Latina.\n[…]\nA obra, escrita durante o exílio imposto a grande parte da intelectualidade brasileira, foi inicialmente lida pelo autor na casa de Augusto Boal em Buenos Aires, no ano de 1975, a pedido do poeta Vinicius de Moraes - que gravou o recital e, a partir daí, promoveu uma série de recitais onde os versos eram ouvidos por plateias diversas.\n[…]\nEssa divulgação antecedeu sua efetiva publicação em livro, que ocorreu em 1976, ainda durante o exílio do autor, pelo editor Ênio Silveira.\n[…]\nNo mês de agosto de 2016 o livro é reeditado pela editora Companhia das Letras com textos de apresentação do próprio Gullar e do poeta Antonio Cícero.\n[…]\nAs coisas que escrevia, então, davam continuidade à minha própria experiência, onde já havia a utilização dos elementos visuais. O Poema sujo incorpora toda a minha experiência formal e, no aspecto gráfico, se liga ao neoconcretismo. Conversando posteriormente com Glauber, soube que ele nessa frase, usando a expressão concretismo, incluía a poesia neoconcreta\".\n[…]\nPoema sujo (texto completo)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ferreira_Gullar",
        "situacao": "ok",
        "texto": "Ferreira Gullar, pseudônimo de José Ribamar Ferreira (São Luís, 10 de setembro de 1930 – Rio de Janeiro, 4 de dezembro de 2016), foi um poeta, escritor, crítico de arte, biógrafo, tradutor, memorialista e ensaísta brasileiro, reconhecido como um dos principais e mais importantes poetas brasileiros da segunda metade do século XX.\n[…]\nFerreira Gullar nasceu em São Luís, em 10 de setembro de 1930, com o nome de José Ribamar Ferreira. É um dos onze filhos do casal Newton Ferreira e Alzira Ribeiro Goulart.\n[…]\nFerreira Gullar morreu em 4 de dezembro de 2016, na cidade do Rio de Janeiro em decorrência de vários problemas respiratórios que culminaram em uma pneumonia. O velório do escritor foi realizado inicialmente na Biblioteca Nacional, pois esse era um desejo de Gullar. Dali, o corpo foi levado em um cortejo fúnebre até a Academia Brasileira de Letras no Rio de Janeiro. Uma semana antes de morrer, Ferreira Gullar pediu à filha Luciana para que o levasse até a Praia de Ipanema.\n[…]\nFerreira Gullar escreveu o Manifesto Neo-Concreto em 1959 e descreveu uma obra de arte como “algo que representa mais do que a soma de seus elementos constituintes; algo cuja análise pode se decompor em vários elementos, mas que só pode ser compreendido fenomenologicamente”. Em contraste com o concretismo, Gullar clamava por uma arte que não fosse baseada no racionalismo ou na busca da forma pura. Ele procurou obras de arte que se tornaram ativas assim que o espectador estava envolvido.\n[…]\nFerreira Gullar foi militante do Partido Comunista Brasileiro (PCB) e, exilado pela ditadura militar, viveu na União Soviética, na Argentina e Chile.\n[…]\nNa cidade de Imperatriz no interior do Maranhão, ganhou em sua homenagem o Teatro Ferreira Gullar. No ano de 1999, é inaugurada em São Luís, capital do Maranhão, a Avenida Ferreira Gullar."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Morte e Vida Severina",
      "descricao": "Auto de Natal em versos de João Cabral de Melo Neto, sobre a jornada do retirante Severino."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Morte e Vida Severina, o retirante Severino desce do sertão até o Recife acompanhando o curso de que rio?",
    "resposta": "Capibaribe",
    "distratores": [
      "São Francisco",
      "Beberibe",
      "Jaguaribe"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Morte_e_Vida_Severina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Morte_e_Vida_Severina",
        "situacao": "ok",
        "texto": "Morte e Vida Severina é um livro de poema regionalista e modernista do escritor brasileiro João Cabral de Melo Neto, escrito entre 1954 e 1955 e publicado em 1955.\n[…]\nEm preto e branco, fiel à aspereza do texto e aos traços dos quadrinhos, a animação narra a dura caminhada de Severino, um retirante nordestino, que migra do sertão para o litoral pernambucano em busca de uma vida melhor.\n[…]\nO poema é narrativo com seu gênero predominantemente lírico, mas com presença dramática. Consiste em duas partes: antes de chegar em Recife e depois. Antes de chegar chamamos de caminho ou fuga da morte; e depois em o presépio ou encontro da vida.\n[…]\nA primeira representação de Morte e Vida Severina se deu com um grupo de teatro do Pará em 1957. A peça foi ensaiada e montada pela primeira vez em Belém pelo grupo Norte Teatro Escola, e depois foi levada para o I Festival Nacional de Teatro de Estudantes, em Recife (1957), sendo promovido por Paschoal Carlos Magno. A montagem foi premiada, tendo o ator Carlos Miranda, intérprete de Severino, obtido o primeiro prêmio como revelação de ator.\n[…]\nO espaço possui um movimento de deslocamento: o retirante faz a travessia da Caatinga, passando pelo Agreste, para a Zona da Mata, até chegar ao Recife, ou seja, sai da serra, mais especificamente da Serra da Costela, e vai para o litoral (mangue). Durante esse deslocamento em buscas da vida, depara-se com tantas mortes e miséria que pensa em se atirar no rio onde ele se encontrava e apressar a própria morte.\n[…]\nA história é narrada em primeira pessoa pelo personagem Severino, e é composta de monólogos e diálogos com outros personagens."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Carta de Pero Vaz de Caminha",
      "descricao": "Carta escrita em 1500 por Pero Vaz de Caminha ao rei Dom Manuel I, relatando a chegada da esquadra de Cabral ao Brasil."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Escrita em 1500 e guardada por séculos num arquivo de Lisboa, a carta de Pero Vaz de Caminha foi publicada pela primeira vez em que século?",
    "resposta": "Século dezenove",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carta_de_Pero_Vaz_de_Caminha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carta_de_Pero_Vaz_de_Caminha",
        "situacao": "ok",
        "texto": "A Carta de Pero Vaz de Caminha é o documento no qual Pero Vaz de Caminha registrou as suas impressões sobre a terra que posteriormente viria a ser chamada de Brasil. É o primeiro documento escrito da história do Brasil. Costuma ser considerada marco inicial da obra literária brasileira, apesar de, formalmente, ser documento de mero registro, já que traz em suas linhas a escrita da época, o estilo;\n[…]\nA carta conservou-se inédita por mais de dois séculos no Arquivo Nacional da Torre do Tombo, em Lisboa. Foi descoberta, em 1773, por José de Seabra da Silva e publicada pelo historiador Manuel Aires de Casal na sua Corografia Brasílica (1817).\n[…]\nAlém da Carta de Pero Vaz de Caminha, importante documento na historiografia do país, o primeiro texto impresso que se refere exclusivamente ao descobrimento do Brasil é o panfleto anônimo, escrito em italiano, \"Copia di una lettera del Re di Portogallo mandata al Re di Castella del viaggio & successo dell' India\" (Cópia de uma carta do Rei de Portugal mandada ao Rei de Castela acerca da viagem e sucesso da Índia), publicada inicialmente em Roma, em 23 de outubro de 1505, por mestre João de Basicken e logo a seguir em Milão, no mesmo ano:\n[…]\n\"Lembra William Brooks Greenlee que 'a autenticidade desta carta é contestável, mas é o mais antigo relato impresso da viagem de Cabral hoje existente.' Apesar disso, como já ressaltou Rubens Borba de Moraes, 'para os brasileiros este panfleto guarda grande interesse, visto que contém as primeiras notícias impressas da descoberta do Brasil pelo \"Capitano Generale Petro Alves Cabrale...alla quale terra d'Santa Croce pose il nome...\"  \" (in: Brasiliana da Biblioteca Nacional. p. 33)\n[…]\nCarta de Mestre João\n[…]\nA carta de Pero Vaz de Caminha\n[…]\nCarta de Pero Vaz de Caminha: História e análise do texto, em UOL Educação.\n[…]\n«Carta de Pêro Vaz de Caminha - Arquivo Nacional Torre do Tombo»\n[…]\nUma Revisitação da Carta de Caminha"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Memórias do Cárcere",
      "descricao": "Livro de memórias de Graciliano Ramos sobre sua prisão política a partir de 1936, durante o governo Vargas."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Graciliano Ramos ficou quase um ano preso sem processo a partir de 1936. Quando seu relato Memórias do Cárcere chegou às livrarias?",
    "resposta": "Em 1953, após a morte do autor",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mem%C3%B3rias_do_C%C3%A1rcere",
      "https://pt.wikipedia.org/wiki/Graciliano_Ramos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mem%C3%B3rias_do_C%C3%A1rcere",
        "situacao": "desambiguacao",
        "texto": "Memórias do Cárcere pode referir-se a:\n\nMemórias do Cárcere (Camilo Castelo Branco) —  livro de 1862\nMemórias do Cárcere (livro) —  livro de Graciliano Ramos de 1953\nMemórias do Cárcere (filme) —  filme de Nelson Pereira dos Santos"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Graciliano_Ramos",
        "situacao": "ok",
        "texto": "Graciliano Ramos de Oliveira (Quebrangulo, 27 de outubro de 1892 – Rio de Janeiro, 20 de março de 1953) foi um romancista, cronista, contista, jornalista, político e memorialista brasileiro, considerado um dos maiores nomes da literatura brasileira. Ele é mais conhecido por sua obra Vidas Secas (1938). Foi membro integrante do Partido Comunista Brasileiro (PCB).\n[…]\nEntre 1930 e 1936. viveu em Maceió, trabalhando como diretor da Imprensa Oficial, professor e diretor da Instrução Pública do estado. Em 1934, havia publicado São Bernardo, e quando se preparava para publicar o próximo livro, foi preso após a Intentona Comunista de 1935. Foi levado para o Rio de Janeiro e ficou preso por onze meses, sendo liberado sem ter sido acusado de nada ou julgado.\n[…]\nEm Memórias do Cárcere, lê-se a seguinte passagem, em que Graciliano Ramos, preso em 1936, recorda a prisão que sofrera seis anos antes:\n[…]\nApós sua morte, a editora José Olympio passou longos tempos sem reeditar as obras do autor, mesmo havendo procura por parte do público. Isso motivou a família a vender os direitos de publicação à editora Martins, que, na década de 1960, lançou sua obra completa.\n[…]\nMemórias do Cárcere — memórias — Editora José Olympio, 1953; (obra póstuma)\n[…]\nALVES, Fabio Cesar. Armas de papel: Graciliano Ramos, as Memórias do cárcere e o Partido Comunista Brasileiro. São Paulo: Editora 34/FAPESP, 2016.\n[…]\nA obra de Graciliano Ramos entrou em domínio público em 1 de janeiro de 2024, após os 70 anos do falecimento do autor, de acordo com a lei brasileira. Porém, a família chegou a contestar isso, devido ao fato de o autor ainda ter então uma filha viva, e defendiam que, de acordo com o Código Civil de 1916, a obra deveria continuar protegida pelo tempo que ela estivesse viva após 2024. Por isso, firmaram um contrato com a Editora Record que durará até janeiro de 2029."
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "A Moreninha",
      "descricao": "Romance romântico publicado em 1844, ambientado na ilha de Paquetá."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Qual destes romances românticos brasileiros foi publicado primeiro?",
    "resposta": "A Moreninha",
    "distratores": [
      "O Guarani",
      "Iracema",
      "Senhora"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Moreninha",
      "https://pt.wikipedia.org/wiki/O_Guarani"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Moreninha",
        "situacao": "ok",
        "texto": "A Moreninha é um romance de autoria do escritor brasileiro Joaquim Manuel de Macedo (1820-1882), publicado em 1844. A obra marca o início da ficção do romantismo brasileiro e tem grande sucesso ainda nos dias de hoje. É considerado o primeiro romance tipicamente nacional, pois retrata hábitos da juventude burguesa carioca do século XIX, contemporânea à época de sua publicação.\n[…]\nConsiderado o primeiro romance romântico brasileiro propriamente dito, A Moreninha segue a tendência do romance-folhetim, alcançando grande repercussão por apresentar os quesitos necessários para satisfazer o gosto do leitor da época: o namoro difícil ou impossível, a comicidade, a dúvida entre o desejo e o dever, a revelação surpreendente de uma identidade, as brincadeiras de estudantes e uma linguagem mais inclinada para o tom coloquial.Sua narração é em terceira pessoa, com narrador onisciente.\n[…]\nO amor impossível e a mulher idealizada são freqüentes na prosa romântica. Para resolver o impasse amoroso, costuma haver duas saídas: o final feliz ou o trágico. Em A Moreninha, o impedimento é superado quando, por coincidência, os personagens se conhecem, percebendo serem elas as mesmas personagens de sete anos antes. O resultado é o final feliz.\n[…]\nAssim, o final do romance é considerado perfeitamente de acordo com o ideal amoroso romântico e as normas sociais, em virtude de não ter havido adultério ou traição em relação à “primeira esposa”. Resta apenas a Augusto pagar a aposta: que, considerando-se paga, temos o romance “A Moreninha”.\n[…]\nAlgumas edições (editora e ano de publicação) de A Moreninha são:\n[…]\nA Moreninha, livro em domínio público."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Guarani",
        "situacao": "ok",
        "texto": "O Guarani (originalmente O Guarany: Romance Brasileiro) é um romance histórico escrito por José de Alencar, desenvolvido em princípio em folhetim. No dia 1º de janeiro de 1857 é publicado o capítulo inicial do romance no Diário do Rio de Janeiro, para no fim desse ano, ser publicado como livro, com alterações mínimas em relação ao que fora publicado em folhetim.\n[…]\nO Guarani é apontado como um dos livros brasileiros que mais tiveram adaptações em histórias em quadrinhos. A primeira adaptação do livro para os quadrinhos foi em 1927 por Cícero Valladares na edição 1155 da revista O Tico-Tico, a história tem apenas uma página, em 1938 uma adaptação foi produzida por Francisco Acquarone e publicada no formato álbum pelo jornal Correio Universal.\n[…]\nNo ano anterior, Acquarone havia adaptado outro romance de Alencar nas páginas de O Globo Juvenil do jornal O Globo: As Minas de Prata. Em 1948, foi o ilustrador português Jayme Cortez, para o formato de tiras diárias, publicada no jornal Diário da Noite Em 1950, o haitiano André LeBlanc, fez uma adaptação para a vigésima quarta edição da revista Edição Maravilhosa, da EBAL.\n[…]\nEm junho de 2017, a adaptação de Francisco Acquarone ganhou uma versão fac-simile publicada pelo Senado Federal em edição impressa e em e-book gratuito, em novembro de 2018, a edição digital também disponibilizada no serviço Social Comics.\n[…]\nEm 2012, os escritores brasileiros Carlos Orsi Martinho e Octavio Aragão são convidados para publicar o conto de ficção científica \"The Last of The Guaranys\" na antologia \"The Worlds of Philip José Farmer: Portraits of a Trickster\" da editora americana Meteor House. A antologia dá sequência à série literária Wold Newton universe, criada pelo escritor americano Philip José Farmer, que conecta personagens da cultura pop como Tarzan e Sherlock Holmes."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Broquéis",
      "descricao": "Livro de poemas de Cruz e Sousa publicado em 1893, considerado o marco inicial do Simbolismo no Brasil."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que década Cruz e Sousa publicou Broquéis, livro de poemas considerado o marco inicial do Simbolismo no Brasil?",
    "resposta": "Década de 1890",
    "distratores": [
      "Década de 1860",
      "Década de 1870",
      "Década de 1920"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Broqu%C3%A9is",
      "https://pt.wikipedia.org/wiki/Cruz_e_Sousa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Broqu%C3%A9is",
        "situacao": "ok",
        "texto": "Broquéis é o livro de estreia do poeta simbolista brasileiro João da Cruz e Sousa, publicado em 1893. Considerado um marco inicial do Simbolismo no Brasil, ao lado de Missal, a obra introduz uma poética inovadora caracterizada pelo rigor formal, pelo uso intenso de imagens sensoriais e pela busca da transcendência espiritual.\n[…]\nBroquéis foi publicado em um período de transição estética na literatura brasileira, marcado pelo esgotamento do Parnasianismo e pela emergência de novas formas de expressão poética. Influenciado pelo Simbolismo europeu, especialmente pela obra de Charles Baudelaire, Stéphane Mallarmé e Paul Verlaine, Cruz e Sousa rompeu com a objetividade parnasiana e introduziu uma poesia marcada pela musicalidade, pela sugestão e pelo subjetivismo.\n[…]\nUso intenso de sinestesias e imagens simbólicas;\n[…]\nValorização da cor branca como símbolo do absoluto e do ideal espiritual.\n[…]\nBroquéis é composto por 54 poemas, organizados sem divisão explícita em seções temáticas, mas unidos por uma forte coerência estética e simbólica. Os poemas exploram estados de espírito, visões oníricas e imagens de caráter místico e sensorial.\n[…]\nEntre os poemas mais conhecidos de Broquéis, destacam-se:\n[…]\nBroquéis foi recebido com estranhamento por parte da crítica contemporânea, mas, ao longo do século XX, passou a ser reconhecido como uma das obras fundamentais da poesia brasileira. O livro consolidou Cruz e Sousa como o principal nome do Simbolismo no país e exerceu influência duradoura sobre poetas posteriores.\n[…]\nA obra também ocupa lugar central nos estudos sobre a literatura afro-brasileira, considerando a trajetória do autor e as tensões raciais presentes em sua experiência histórica e literária.\n[…]\nBroquéis – Enciclopédia Itaú Cultural\n[…]\nBroquéis – Universidade Federal de Santa Catarina"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cruz_e_Sousa",
        "situacao": "ok",
        "texto": "João da Cruz e Sousa (Nossa Senhora do Desterro, 24 de novembro de 1861 — Curral Novo, 19 de março de 1898) foi um poeta brasileiro, reconhecido como o primeiro e o principal expoente do simbolismo no Brasil. Filho de escravos alforriados, teve a vida marcada pela negritude e pela causa abolicionista, pelo que recebeu as alcunhas de Dante Negro, Cisne Negro e Poeta Negro.\n[…]\nEm fevereiro de 1893, publicou Missal (prosa poética baudelairiana) e em agosto, Broquéis (poesia), dando início ao simbolismo no Brasil que se estende até 1922.[carece de fontes]? Em novembro desse mesmo ano casou-se com Gavita Gonçalves, também negra, com quem teve quatro filhos, todos mortos prematuramente por tuberculose, levando-a à loucura.\n[…]\nEmbora quase metade da população brasileira seja não branca, poucos foram os escritores negros, mulatos ou indígenas. Cruz e Sousa, por exemplo, é acusado de ter-se omitido quanto a questões referentes à condição negra. Mesmo tendo sido filho de escravos e recebido a alcunha de \"Cisne Negro\", o poeta João da Cruz e Sousa não conseguiu escapar das acusações de indiferença pela causa abolicionista.\n[…]\nA acusação, porém, não procede, pois, apesar de a poesia social não fazer parte do projeto poético do simbolismo nem de seu projeto particular, o autor, em alguns poemas, retratou metaforicamente a condição do escravo. Cruz e Sousa militou, sim, contra a escravidão.\n[…]\nSylvio Back dirigiu um filme sobre o poeta lançado em 1998. Interpretou Cruz e Sousa o ator Kadu Karneiro. Todo o texto do filme é só de poemas de Cruz e Sousa.\n[…]\nEm Lages, existe o Clube Cruz e Souza, que preserva a sua história e promove a cultura negra.\n[…]\nCruz e Sousa - Mestre do Simbolismo. Biografia sobre o poeta catarinense escrita pelo Prof. Evaldo Pauli.\n[…]\nJornal A Notícia: Especial Cruz e Sousa\n[…]\nAllyne Fiorentino de Oliveira \"Aspectos do poema em prosa de Cruz e Sousa e Rubén Darío\""
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "A Hora da Estrela",
      "descricao": "Romance de Clarice Lispector publicado em 1977, sobre a datilógrafa nordestina Macabéa no Rio de Janeiro."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O romance A Hora da Estrela foi lançado no mesmo ano de que acontecimento na vida de sua autora, Clarice Lispector?",
    "resposta": "A morte dela",
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Hora_da_Estrela",
      "https://pt.wikipedia.org/wiki/Clarice_Lispector"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Hora_da_Estrela",
        "situacao": "ok",
        "texto": "A Hora da Estrela é um romance literário da escritora brasileira Clarice Lispector.\n[…]\nA Hora da Estrela traz consigo a forte presença de um narrador que conta a história ao mesmo tempo que a escreve, característica peculiar da autora. Clarice Lispector cria Rodrigo S.M. para contar a história de Macabéa, pois essa história não poderia ser contada por uma mulher. Rodrigo assume, portanto, o papel de autor da história.\n[…]\nA protagonista de A Hora da Estrela trazia ainda questionamentos de ordem psicológica e filosófica, muitas vezes existenciais, mas ela própria só veio sentir a vida correr pelo seu corpo na hora de sua morte, grande ironia na vida da protagonista que durante 19 anos nunca sentiu qualquer tipo de prazer ou sentimento de contentamento.\n[…]\nO lado místico de Clarice Lispector é uma curiosa semelhança com Macabéa. No romance, a personagem ganha sua hora de estrela após uma visita à cartomante. Uma vez, a neta da escritora judia relatou que sua avó frequentava cartomantes, tinha costume de jogar búzios e até esteve em um congresso de bruxaria. Seria a autora uma continuação dos enigmas de suas obras?\n[…]\nA Hora da Estrela possui na verdade 13 títulos. Na famosa entrevista para a TV Cultura de 1977 (ano de publicação do livro e também da morte da autora), Clarice Lispector deixa claro que o livro possui essa quantidade de títulos, que na verdade ajudam a desvendar a obra. Cada um dos títulos carrega consigo momentos marcantes do texto.\n[…]\nA culpa é minha (O momento em que o narrador tem que decidir sobre a vida e morte de Macabéa);"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Clarice_Lispector",
        "situacao": "ok",
        "texto": "Clarice Lispector, nascida Chaya Pinkhasivna Lispector (Chechelnyk, 10 de dezembro de 1920 – Rio de Janeiro, 9 de dezembro de 1977), foi uma escritora e jornalista de origem ucraniana-judaica (asquenazita). Radicada no Brasil desde a primeira infância, naturalizou-se brasileira em 1943. Autora de romances, contos e ensaios, é considerada uma das escritoras brasileiras mais importantes do século XX\n[…]\nO incêndio que sofri há algum tempo destruiu em parte minha mão direita. Minhas pernas ficaram marcadas para sempre. O que aconteceu foi muito triste, e prefiro não pensar nisso. Tudo o que posso dizer é que passei três dias no inferno, para onde — segundo dizem — vão as pessoas más depois da morte. Não me considero má, e vivi isso ainda em vida.\n[…]\nEm um ensaio de 2025 intitulado \"Escribir para no morir\", o escritor peruano Gunter Silva Passuni descreve o livro póstumo de Lispector, A Breath of Life, não como um romance convencional nem como um diário, mas como um texto montado a partir de fragmentos, no qual a escrita é encarada como uma forma de \"continuar respirando\" enquanto se enfrentava a morte.\n[…]\nNo total, a obra de Clarice Lispector recebeu mais de 200 traduções para mais de 10 idiomas, sendo mais de 179 traduções integrais de livros e 25 de contos publicados em periódicos. Seus livros mais traduzidos são principalmente romances: A Hora da Estrela, com 22 traduções; A Paixão segundo G. H., também com 22; Perto do Coração Selvagem, com 18; Laços de Família, com 16; e Uma aprendizagem ou o livro dos prazeres, com 15.\n[…]\nElisa Lispector\n[…]\nCasa de Clarice Lispector\n[…]\n«JBlog Hoje na História: 9 de dezembro de 1977 – Morre Clarice Lispector. Chega A Hora da Estrela». www.jblog.com.br. Consultado em 9 de dezembro de 2010. Arquivado do original em 18 de dezembro de 2011\n[…]\n«A arte de Clarice Lispector»  (entrevista de Hélène Cixous a Betty Milan)"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Guimarães Rosa",
      "descricao": "Escritor, médico e diplomata mineiro (1908–1967), autor de Grande Sertão: Veredas."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em novembro de 1967, depois de anos adiando, Guimarães Rosa finalmente tomou posse na Academia Brasileira de Letras. Quanto tempo depois ele morreu?",
    "resposta": "Três dias depois",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Guimar%C3%A3es_Rosa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Guimar%C3%A3es_Rosa",
        "situacao": "ok",
        "texto": "João Guimarães Rosa (Cordisburgo, 27 de junho de 1908 – Rio de Janeiro, 19 de novembro de 1967) foi um médico, diplomata, escritor e poeta brasileiro, identificado com a terceira geração do modernismo no Brasil e reconhecido por muitos como o maior escritor brasileiro do século XX. Seu estilo é marcado por neologismos, coloquialidade e fluxo de consciência e sua ficção ambienta-se no sertão mineir\n[…]\nEm 1963, foi eleito para a Cadeira 2 da Academia Brasileira de Letras (ABL) mas adiou sua posse até 1967, crendo que morreria assim que assumisse, o que realmente aconteceu, três dias depois.\n[…]\nDepois de servir em Hamburgo, Guimarães Rosa atuou, ainda, como diplomata, nas Embaixadas do Brasil em Bogotá e em Paris.\n[…]\nNo Brasil, Guimarães Rosa, na segunda vez em que se candidatou para a Academia Brasileira de Letras (ABL), foi eleito por unanimidade, em 1963. Temendo ser tomado por uma forte emoção, adiou a cerimônia de posse por quatro anos.\n[…]\nEm seu notável discurso de posse, quando enfim decidiu assumir a Cadeira da ABL, em 16 de novembro de 1967, chegou a afirmar, em tom de despedida, como se soubesse o que se passaria ao entardecer do domingo seguinte: \"…a gente morre é para provar que viveu.\" Morreu, na cidade do Rio de Janeiro, em 19 de novembro. Seu laudo médico atestou um infarto.\n[…]\nImortal, foi sepultado no Mausoléu da Academia Brasileira de Letras no Cemitério de São João Batista na cidade do Rio de Janeiro.\n[…]\nFoi o terceiro ocupante da Cadeira 2, eleito em 6 de agosto de 1963, na sucessão de João Neves da Fontoura e recebido, em 16 de novembro de 1967, pelo Acadêmico Afonso Arinos de Melo Franco.\n[…]\nJoão Guimarães Rosa / Centro da Memória da Medicina em Minas Gerais\n[…]\nGuimarães Rosa, Getúlio Vargas: \"Serenamente dou o primeiro passo no caminho da eternidade e saio da vida para entrar na História\"\n[…]\n24 Cartas de João Guimarães Rosa a Antonio Azeredo da Silveira"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "A Menina do Narizinho Arrebitado",
      "descricao": "Livro infantil de Monteiro Lobato publicado em 1920, com as primeiras histórias do Sítio do Picapau Amarelo."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década Monteiro Lobato publicou A Menina do Narizinho Arrebitado, o livro que deu início às histórias do Sítio do Picapau Amarelo?",
    "resposta": "Década de 1920",
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Menina_do_Narizinho_Arrebitado",
      "https://pt.wikipedia.org/wiki/S%C3%ADtio_do_Picapau_Amarelo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Menina_do_Narizinho_Arrebitado",
        "situacao": "ok",
        "texto": "Em 1920, Monteiro Lobato publicou o seu primeiro conto infantil, \"A história do peixinho que morreu afogado\", posteriormente ampliado com cenas de sua infância e republicado no Natal do mesmo ano, com o titulo \"A Menina do Narizinho Arrebitado\" e duas protagonistas, Narizinho e Emília. É considerado o primeiro livro infantil original do Brasil.\n[…]\nMais tarde, Narizinho Arrebitado passou a ser primeiro capítulo do livro Reinações de Narizinho, livro propulsor da série Sítio do Picapau Amarelo.\n[…]\nEm 2012, 90 anos após a publicação original, \"A Menina do Narizinho Arrebitado\" foi lançado para o formato iPad.\n[…]\nMonteiro Lobato (1920). A Menina do Narizinho Arrebitado. [S.l.: s.n.]"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADtio_do_Picapau_Amarelo",
        "situacao": "ok",
        "texto": "Sítio do Picapau Amarelo é uma série de 23 volumes de literatura fantástica, escrita pelo autor brasileiro Monteiro Lobato (entre 1920 e 1947). A obra tem atravessado gerações e geralmente representa a literatura infantil do Brasil.\n[…]\nO conceito foi introduzido de um livro anterior de Lobato, A Menina do Narizinho Arrebitado (1920), a história sendo mais tarde republicada como o primeiro capítulo de Reinações de Narizinho (1931), que é o livro que serve de propulsor à série de  Sítio do Picapau Amarelo. Precedentemente, Lobato já havia publicado os volumes O Saci (1921), Fábulas (1922), As aventuras de Hans Staden (1927) e Peter Pan (1930).\n[…]\nEm 1920, durante uma partida de xadrez com Toledo Malta, este contou a Monteiro Lobato a história de um peixe que, saído do mar, desaprendeu a nadar e faleceu afogado. Lobato diz que perdeu a partida porque o peixinho não parava de nadar em suas ideias, tanto que logo sentou-se à máquina e escreveu A História do Peixinho Que Morreu Afogado, atualmente relatado como perdido já que Lobato nunca se lembrou de onde o havia publicado.\n[…]\nEste conto, deu origem ao livro A Menina do Narizinho Arrebitado, publicado no Natal de 1920. A Menina do Narizinho Arrebitado introduziu a personagem-título Lúcia \"Narizinho\" e sua boneca de pano Emília. O livro foi posteriormente reeditado, no ano de 1931, como o primeiro capítulo de Reinações de Narizinho, livro que serve de propulsor a Sítio do Picapau Amarelo.\n[…]\nA Menina do Narizinho Arrebitado - 1920\n[…]\nSítio do Picapau Amarelo tornou-se uma história em quadrinhos em 1979, publicada pela Rio Gráfica Editora, uma editora da então Organizações Globo (atual Grupo Globo) e que em 1986, se tornou Editora Globo.\n[…]\nSítio do Picapau Amarelo (2006)"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Quincas Borba",
      "descricao": "Romance de Machado de Assis publicado em livro em 1891, sobre o professor Rubião, herdeiro do filósofo Quincas Borba."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No romance de Machado de Assis, o filósofo Quincas Borba deixa sua herança a Rubião com a condição de cuidar de quem, que tem o mesmo nome dele?",
    "resposta": "O cachorro dele",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Quincas_Borba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Quincas_Borba",
        "situacao": "ok",
        "texto": "Quincas Borba é um romance escrito por Machado de Assis, desenvolvido em princípio como folhetim na revista A Estação, entre os anos de 1886 e 1891 para, em 1892, ser publicado definitivamente pela Livraria Garnier. No processo de adaptação de folhetim para livro o autor realizou algumas mudanças mínimas, mas significativas.\n[…]\nAo contrário do romance anterior, no entanto, Quincas Borba foi escrito em terceira pessoa, a fim de contar a história de Rubião, ingênuo rapaz que torna-se discípulo e herdeiro do filósofo Quincas Borba, personagem do romance anterior, e que, sendo enganado por seu amigo capitalista Cristiano e sua esposa Sofia, paixão de Rubião, vive na pele todo o fundamento teórico do Humanitismo, filosofia fictícia daquele filósofo.\n[…]\n\"Em Quincas Borba, em que o motivo da dissimulação já preludia D. Casmurro, a arte machadiana se compraz na retórica do subentendido. Nesse estilo velado, impera a metonímia: o registro dos efeitos sugere as causas, sem explicitá-las. Por exemplo: o constrangimento ambíguo de Palha, quando Sofia lhe conta a declaração de amor que lhe fez Rubião, transparece na lacônica referência ao seu gesto.\"\n[…]\nPedro Rubião de Alvarenga, ex-professor primário, torna-se, em Barbacena, enfermeiro e discípulo do filósofo Quincas Borba, que lhe apresenta o Humanitismo, em que a razão do homem é sempre buscar viver e que a sobrevivência depende muitas vezes de saber vencer os outros. Borba falece no Rio de Janeiro, em casa de Brás Cubas. Rubião é nomeado herdeiro universal do filósofo, sob condição de cuidar de seu cachorro, também chamado Quincas Borba.\n[…]\nCom a morte de Rubião, o último parágrafo termina explicando também a morte do cachorro do filósofo."
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Literatura de cordel",
      "descricao": "Gênero de poesia popular impressa em folhetos, muito difundido no Nordeste brasileiro e ilustrado com xilogravuras."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A literatura de cordel, poesia popular em folhetos ilustrados com xilogravuras, recebeu esse nome por causa do jeito como os folhetos eram expostos nas feiras. Qual era?",
    "resposta": "Pendurados em cordões",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Literatura_de_cordel"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Literatura_de_cordel",
        "situacao": "ok",
        "texto": "Literatura de cordel também conhecida no Brasil como folheto, literatura popular em verso, ou simplesmente cordel, é um gênero literário popular escrito frequentemente em versos, na forma rimada, originado em relatos orais e depois impresso em folhetos. Remonta ao século XVI, quando o Renascimento popularizou a impressão de relatos orais, e mantém-se uma forma literária popular no Brasil.\n[…]\nO nome tem origem na forma como tradicionalmente os folhetos eram expostos para venda, pendurados em cordas, cordéis ou barbantes em Portugal. No Nordeste do Brasil o nome foi herdado, mas a tradição do barbante não se perpetuou: o folheto brasileiro pode ou não estar exposto em barbantes. Alguns poemas são ilustrados com xilogravuras, também usadas nas capas. As estrofes mais comuns são as de dez, oito ou seis versos.\n[…]\nA história da literatura de cordel começa com o romanceiro do Renascimento, quando se iniciou a impressão de relatos tradicionalmente orais feitos pelos trovadores medievais, e desenvolve-se até a Idade Contemporânea. O nome cordel está ligado à forma de comercialização desses folhetos em Portugal, onde eram pendurados em cordões, chamados de cordéis. Inicialmente, eles também continham peças de teatro, como as de autoria de Gil Vicente (1465-1536).\n[…]\nNa indagação dos pesquisadores, no entanto, há lógica, porque os poetas de bancada ou de gabinete, como ficaram conhecidos os autores da literatura de cordel, demoraram a emergir do seio bom da terra natal. Mais tarde, por volta de 1750 é que apareceram os primeiros vates da literatura de cordel oral. Engatinhando e sem nome, depois de relativo longo período, a literatura de cordel recebeu o batismo de poesia popular.\n[…]\n«Métricas e Cordel: Aprenda as métricas para escrever um Cordel» (PDF). Texto retirado do livro “Vertentes e Evolução da Literatura de Cordel”. Consultado em 5 de maio de 2024"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Academia Brasileira de Letras",
      "descricao": "Instituição literária fundada no Rio de Janeiro em 1897, com Machado de Assis como primeiro presidente."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A sede da Academia Brasileira de Letras, doada pela França, é uma réplica de um palacete do parque de Versalhes e leva o mesmo nome. Qual?",
    "resposta": "Petit Trianon",
    "distratores": [
      "Grand Trianon",
      "Palais-Royal",
      "Petit Palais"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Academia_Brasileira_de_Letras"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Academia_Brasileira_de_Letras",
        "situacao": "ok",
        "texto": "Academia Brasileira de Letras (ABL; ) GCSE • MHSE é uma instituição literária brasileira fundada na cidade do Rio de Janeiro em 20 de julho de 1897 pelos escritores Machado de Assis, Lúcio de Mendonça, Inglês de Sousa, Olavo Bilac, Afonso Celso, Graça Aranha, Medeiros e Albuquerque, Joaquim Nabuco, Teixeira de Melo, Visconde de Taunay e Ruy Barbosa. É composta por quarenta membros efetivos e perpé\n[…]\nEm 1923, graças à iniciativa de seu presidente à época, Afrânio Peixoto, e do então embaixador da França, Raymond Conty, o governo francês doou à Academia o prédio do Pavilhão Francês, edificado para a Exposição do Centenário da Independência do Brasil, uma réplica do Petit Trianon de Versalhes, erguido pelo arquiteto Ange-Jacques Gabriel, entre 1762 e 1768. Em 22 de Setembro de 1941, a Academia Brasileira de Letras foi agraciada com a Grã-Cruz da Ordem Militar de Sant'Iago da Espada de Portugal.\n[…]\nA Academia Brasileira de Letras agracia personalidades com os seguintes prêmios:\n[…]\nA primeira mulher eleita para a Academia Brasileira de Letras foi Rachel de Queiroz, em 1977. O regimento da instituição costumava proibir a eleição de mulheres.\n[…]\nNo geral, os críticos da Academia Brasileira de Letras consideram que ela deixou de ser séria, que virou um \"agrupamento de escritores conformistas e políticos poderosos e vaidosos\", e que o jogo político influencia na escolha dos imortais.\n[…]\nO jornalista Fernando Jorge, em \"A  Academia do Fardão e da Confusão: a Academia Brasileira de Letras e os seus 'Imortais' mortais\", critica a eleição de \"personalidades\" para a ABL, ou seja, pessoas influentes na sociedade, mas cuja principal ocupação não era a literatura e que, muitas vezes, produziam materiais apenas para que pudessem ser eleitos, nunca mais voltando a produzir qualquer obra de valor literário.\n[…]\nMedia relacionados com Academia Brasileira de Letras no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Castro Alves",
      "descricao": "Poeta romântico baiano (1847–1871), autor de O Navio Negreiro."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por seus versos contra a escravidão, como em O Navio Negreiro, Castro Alves ficou conhecido por que apelido?",
    "resposta": "Poeta dos Escravos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Castro_Alves"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Castro_Alves",
        "situacao": "ok",
        "texto": "Antônio Frederico de Castro Alves (Vila de Nossa Senhora do Rosário do Porto da Cachoeira, 14 de março de 1847 – Salvador, 6 de julho de 1871) foi um poeta, dramaturgo e advogado brasileiro, considerado o principal representante da terceira geração do romantismo no Brasil. Ficou conhecido por seus poemas abolicionistas, que renderam-lhe a alcunha de \"poeta dos escravos\".\n[…]\nComeçou sua produção maior aos dezesseis anos de idade, e seus versos de \"Os Escravos\" foram iniciados aos dezessete (1865), com ampla divulgação no país, onde eram publicados nos jornais e declamados, ajudando a formar a geração que viria a conquistar a abolição. Ao lado de Luís Gama, Nabuco, Ruy Barbosa e José do Patrocínio, destacou-se na campanha abolicionista, \"em especial, a figura do grande poeta baiano Castro Alves\".\n[…]\nNa sua obra épica de 1950, Canto Geral, o chileno Pablo Neruda inseriu o poeta entre os libertadores da América, no poema \"Castro Alves do Brasil\" (IV Canto, poema 29.º), onde afirma que ele fora o \"poeta da nossa América\" por haver dado aos escravos uma voz onde \"…em portas até então fechadas (…) combatendo, a liberdade entrasse\" e, finalmente, encerra com os versos: \"deixa-me a mim, poeta da nossa América, /coroar a tua cabeça com os louros do povo.\n[…]\nCastro Alves foi retratado como personagem no cinema, interpretado por Paulo Maurício no filme de ficção luso-brasileiro de 1949 Vendaval Maravilhoso (aka \"Castro Alves — Um Vendaval Maravilhoso\"), tendo a cantora Amália Rodrigues a interpretar a atriz Eugênia Câmara; a obra foi restaurada em 2003 pela Cinemateca Portuguesa; segundo informado no próprio filme a obra foi inspirada \"na vida de Castro Alves — O Poeta dos Escravos.\n[…]\n«Elogio de Castro Alves» (PDF) , por Ruy Barbosa, por ocasião do décimo ano de sua morte.\n[…]\n«Castro Alves - o poeta e o poema». livro de Afrânio Peixoto (1922) na Open Library"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Emília",
      "descricao": "Boneca de pano falante do Sítio do Picapau Amarelo, de Monteiro Lobato."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Ao se casar com o leitão Rabicó, a boneca Emília, do Sítio do Picapau Amarelo, ganhou que título de nobreza?",
    "resposta": "Marquesa de Rabicó",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Reina%C3%A7%C3%B5es_de_Narizinho",
      "https://pt.wikipedia.org/wiki/S%C3%ADtio_do_Picapau_Amarelo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Reina%C3%A7%C3%B5es_de_Narizinho",
        "situacao": "ok",
        "texto": "Reinações de Narizinho é um livro de fantasia e infantil de autoria do escritor brasileiro Monteiro Lobato. Publicado em 1931, é o livro que serve de propulsor à série que seria protagonizada no Sítio do Picapau Amarelo. É um clássico da literatura, e até hoje serve de inspiração para muitos autores infantis, como Ana Maria Machado, Ruth Rocha, Pedro Bandeira e muitos outros.\n[…]\nOs Brincos do Marquês\n[…]\nApuros do Marquês\n[…]\nEmília e La Fontaine\n[…]\nDona Benta - A avó de Pedrinho e Narizinho, é a proprietária do Sítio do Picapau Amarelo. Tem mais de sessenta anos e usa óculos de ouro na ponta do nariz. No início, não acreditava nas histórias dos netos, até que viu Emília falar. É sábia, democrática e uma ótima contadora de histórias.\n[…]\nVisconde de Sabugosa - Um boneco feito de sabugo de milho feito por Pedrinho para ser pais do Marquês de Rabicó. Ficou sábio depois de ser esquecido em meio aos livros. É feito de escravo por Emília.\n[…]\nRabicó - Leitãozinho protegido por Narizinho. Gordo e rosado, é o último de sete leitõezinhos. Guloso e poltrão, concorda em casar com Emília.\n[…]\nA segunda foi feita em 2001, tendo como Narizinho a atriz Lara Rodrigues que viveu a personagem de 2001 a 2004, e sua boneca Emília interpretada pela atriz Isabelle Drummond de 2001 a 2006. As histórias são adaptadas para diferentes episódios, como: O Reino das Águas Claras, Reinações de Narizinho, A festa do Faz-de-Conta e Viagem ao País das Fábulas.\n[…]\nNesse livro surgiram Narizinho, Emília, Dona Benta e Tia Nastácia, que foram mais tarde reaproveitadas em Reinações de Narizinho de 1931, que era uma versão ampliada de A menina do narizinho arrebitado e de muitos outros livros infantis escritos por Lobato na década de 20, algumas delas escritas no período em que morou em Nova Iorque. Em 1933, surgiu Novas reinações de Narizinho, contando novas travessuras da protagonista no Sítio do Picapau Amarelo."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADtio_do_Picapau_Amarelo",
        "situacao": "ok",
        "texto": "Sítio do Picapau Amarelo é uma série de 23 volumes de literatura fantástica, escrita pelo autor brasileiro Monteiro Lobato (entre 1920 e 1947). A obra tem atravessado gerações e geralmente representa a literatura infantil do Brasil.\n[…]\nO cenário principal é um sítio, batizado com o nome de Picapau Amarelo, de onde vem o título da série, onde mora Dona Benta, uma idosa de mais de sessenta anos que vive em companhia de sua neta Lúcia, ou Narizinho como todos dizem e a empregada, Tia Nastácia. Narizinho tem como amiga inseparável uma boneca de pano velho chamada Emília, feita por Tia Nastácia.\n[…]\nEste conto, deu origem ao livro A Menina do Narizinho Arrebitado, publicado no Natal de 1920. A Menina do Narizinho Arrebitado introduziu a personagem-título Lúcia \"Narizinho\" e sua boneca de pano Emília. O livro foi posteriormente reeditado, no ano de 1931, como o primeiro capítulo de Reinações de Narizinho, livro que serve de propulsor a Sítio do Picapau Amarelo.\n[…]\nO Marquês de Rabicó - 1922\n[…]\nNovas Reinações de Narizinho - 1932 (reunião dos seguintes livros anteriores em um só: \"O Marquês de Rabicó\", \"Fábulas\", \"A Caçada da Onça\", \"O Saci\", e inclusão da história inédita \"O Sítio do Picapau Amarelo\")\n[…]\nO Marquês de Rabicó\n[…]\nTodos os volumes de Sítio do Picapau Amarelo têm sido publicados em outros países, incluindo a Rússia (como Орден Жёлтого Дятла) e a Argentina (como El Rancho del Pájaro Amarillo). Enquanto esses dois países tem toda a série adaptada e traduzida (com grandes cortes, porém, no caso russo), apenas o volume Reinações de Narizinho foi publicado na Itália, em 1944, com o título Nasino.\n[…]\nSítio do Picapau Amarelo Vol. 2 (1979)\n[…]\nSítio do Picapau Amarelo (2001)\n[…]\nSítio do Picapau Amarelo (2005)\n[…]\nSítio do Picapau Amarelo (2006)"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Riobaldo",
      "descricao": "Ex-jagunço narrador de Grande Sertão: Veredas, de Guimarães Rosa."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Grande Sertão Veredas, ao assumir a chefia do bando de jagunços, Riobaldo passa a ser chamado por que nome de cobra?",
    "resposta": "Urutu-Branco",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Grande_Sert%C3%A3o:_Veredas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Sert%C3%A3o:_Veredas",
        "situacao": "ok",
        "texto": "Grande Sertão: Veredas é um romance experimental modernista escrito pelo autor brasileiro João Guimarães Rosa e publicado pela Livraria José Olympio Editora, em 1956. Tanto a arte da capa como as ilustrações da primeira edição de Grande sertão: veredas são de autoria de Poty Lazzarotto.\n[…]\nA história gira em torno do jagunço Riobaldo, também conhecido como Tatarana ou Urutu-Branco, narrador-protagonista do livro. Há na obra dois pontos aos quais o narrador se apega:Diadorim: um também jagunço com quem Riobaldo estabelece uma relação diferenciada, que se coloca nos limites entre a amizade e o relacionamento afetivo de um casal.\n[…]\nA mudança nas atitudes de Riobaldo é tamanha que, ao retornar pro acampamento na manhã posterior à madrugada do suposto pacto, o jagunço desafia um cada vez mais fraco Zé Bebelo, tira dele a posição de líder do grupo e ressurge rebatizado de Urutu-Branco.\n[…]\nO monólogo O Diabo Na Rua, No Meio do Redemunho é um recorte do livro Grande Sertão: Veredas, de João Guimarães Rosa, com foco na dialética bem/mal. Aborda as ações passadas do ex-jagunço Riobaldo, hoje um próspero fazendeiro. As inquietações da juventude o levaram ao pacto Fáustico. Ao rememorar, ele reflete sobre Deus e o demônio. “O diabo existe?” é a principal questão desse homem angustiado, que constata: “viver é muito perigoso”. Direção: Amir Haddad. Adaptação e atuação: Gilson de Barros.\n[…]\nAtravés da narrativa de Riobaldo, o autor explora as complexidades da alma humana, mergulhando na dualidade entre o bem e o mal. Adaptação da aclamada obra-prima \"Grande Sertão: Veredas\", escrita por Guimarães Rosa. Com estreia em agosto de 2024, o filme “O diabo na rua no meio do redemunho” é o resultado da imersão de quase 20 anos de Bia Lessa na obra máxima de Guimarães Rosa (1908-1967)."
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Lima Barreto",
      "descricao": "Romancista e cronista carioca (1881–1922), autor de Triste Fim de Policarpo Quaresma."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O escritor Lima Barreto, neto de escravizados, nasceu num treze de maio. Sete anos depois, nessa mesma data, que lei foi assinada?",
    "resposta": "Lei Áurea",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lima_Barreto",
      "https://pt.wikipedia.org/wiki/Lei_%C3%81urea"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lima_Barreto",
        "situacao": "desambiguacao",
        "texto": "Lima Barreto pode referir-se a:\n\nLima Barreto (escritor), brasileiro, autor de Triste Fim de Policarpo Quaresma\nLima Barreto (cineasta), brasileiro, dirigiu O Cangaceiro\nJorge Lima Barreto, músico, escritor, conferencista, improvisador e musicólogo brasileiro\n\n\n== Ver também ==\nTodas as páginas cujo título começa por \"Lima Barreto\"\nTodas as páginas que tenham \"Lima Barreto\" no título\nBusca por \"li"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lei_%C3%81urea",
        "situacao": "ok",
        "texto": "Lei Áurea, oficialmente Lei n.º 3 353 de 13 de maio de 1888, é a lei que extinguiu a escravidão no Brasil.\n[…]\nA votação em segundo turno, na Câmara Geral, no dia 10 de maio, foi feita por aclamação, sendo aprovado, em definitivo, na Câmara Geral, a Lei Áurea. Em seguida, o projeto de abolição da escravatura, foi enviado ao Senado do Império.\n[…]\nEsta proposta original, de 8 de Maio, sofreu apenas um pequeno acréscimo, no seu primeiro artigo, a partir de uma emenda feita pelo deputado geral Inocêncio Marques de Araújo Góis Júnior, que acrescentou ao projeto da Lei Áurea, a expressão \"desde a data desta lei\".\n[…]\nNo dia 10 de maio, houve segunda votação que não foi nominal, dando por aprovado, em segundo turno, o projeto de Lei Áurea, na Câmara Geral, com a adição, em emenda, da frase \"desde a data desta lei\".\n[…]\nO barão de Cotejipe, fez considerações, no dia 12 de maio, semelhantes às que foram feitas na Câmara Geral, sobre a fuga em massas de escravos, sobre a polícia paulista não mais ir atrás de escravos fugidos, sobre as muitas alforrias de escravos, sobre a ameaça ao direito de propriedade, temendo que futuramente se confiscasse terras sem indenização, e, concluiu afirmando que era inevitável a Lei Áurea para parar com a anarquia reinante devido às fugas de escravos:\n[…]\nJoão Maurício Wanderley, barão de Cotejipe, o único senador do império que votou contra o projeto de abolição da escravatura, ao cumprimentar a princesa logo após esta ter assinado a Lei Áurea, profetizou:\n[…]\nA Lei Áurea no sítio do Planalto\n[…]\nAnais do Parlamento Discussão e votação da Lei Áurea no Senado do Império"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Jeca Tatu",
      "descricao": "Personagem caipira criado por Monteiro Lobato em 1914, símbolo do trabalhador rural pobre e doente."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O caipira Jeca Tatu, de Monteiro Lobato, virou garoto-propaganda num almanaque distribuído aos milhões por que famoso fortificante?",
    "resposta": "Biotônico Fontoura",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jeca_Tatu",
      "https://pt.wikipedia.org/wiki/Biot%C3%B4nico_Fontoura"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jeca_Tatu",
        "situacao": "ok",
        "texto": "Jeca Tatu é uma personagem criada por Monteiro Lobato em sua obra Urupês, que contém 14 histórias baseadas no trabalhador rural paulista. Simboliza a situação do caipira, abandonado pelos poderes públicos brasileiros, às doenças, ao atraso econômico, educacional e à indigência política.\n[…]\n\"O Jeca Tatu não é assim, ele está assim\". A frase de Monteiro Lobato, sobre um dos seus mais populares personagens, refere sua obra para além das histórias infantis e incomoda a elite intelectual da época, acostumada a uma visão romântica do homem do campo. Jeca Tatu, um caipira de barba rala e calcanhares rachados – porque não gostava de usar sapatos, era pobre, ignorante e avesso aos hábitos de higiene urbanos. Morava na região do Vale do Paraíba Paulista, distinta por seu atraso.\n[…]\nO personagem Jeca Tatu e a análise dele feita por Monteiro Lobato no conto Urupês e no artigo \"Velha Praga\" de Monteiro Lobato é assim explicado pelo folclorista Cornélio Pires, quando analisa o caipira caboclo:\n[…]\nNum primeiro momento, em artigos publicados no jornal O Estado de S. Paulo, (1914), Lobato pensa o caboclo como uma praga nacional: funesto parasita da terra (…) homem baldio, inadaptável à civilização (…), responsabilizando-o pelos problemas da agricultura.\n[…]\nNo bojo das campanhas sanitaristas, Monteiro Lobato modifica sua análise do problema: Pobre Jeca. Como és bonito no romance e feio na realidade., transformando-o num novo símbolo de brasilidade. Não por acaso, em 1924, foi criado o personagem radiofônico Jeca Tatuzinho, que ensinava noções de higiene e saneamento às crianças.\n[…]\n\"O 'Jeca Tatu' de Monteiro Lobato: Identidade do Brasileiro e Visão do Brasil\", por Roberto B. da Silva (In: DezenoveVinte - Arte brasileira do século XIX e início do XX)\n[…]\nCaipira\n[…]\nBiotônico Fontoura"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Biot%C3%B4nico_Fontoura",
        "situacao": "ok",
        "texto": "O Biotônico Fontoura é um medicamento fortificante e antianêmico criado em 1910 pelo farmacêutico Cândido Fontoura. Desde meados dos anos de 1990, o produto tornou-se marca do portfólio da DM Farmacêutica, que posteriormente foi vendida a Hypera Pharma que ainda produz e comercializa no Brasil. No ano de 2010, o Biotônico Fontoura completou 100 anos e entrou para a lista de medicamentos mais antig\n[…]\nO slogan do produto era Ferro para o sangue e fósforo para os músculos e nervos e seu jingle era Bê, á, bá. Bê, é, bé. Bê, i, Bi…otônico Fontoura!, composto em 1978.\n[…]\nCândido Fontoura, (Nascido em Bragança Paulista) fundou em São Paulo em 1910 uma fábrica para a produção de um fortificante que havia criado para  o tratamento de sua esposa que estava com a saúde fragilizada. Queria um produto com qualidades semelhantes ao Elixir Nogueira ou a Emulsão de Scott, seus concorrentes.\n[…]\nO nome Biotônico Fontoura foi dado por Monteiro Lobato, famoso escritor e amigo profissional do farmacêutico Fontoura. Ambos trabalhavam no jornal O Estado de S. Paulo e Lobato sentia-se muito cansado quando Fontoura indicou o medicamento ao amigo e este sentiu-se mais animado. Posteriormente foi criado o Almanaque Fontoura que trouxe o personagem de Lobato Jeca Tatuzinho, baseado no Jeca Tatu que o autor criara na literatura.\n[…]\nO almanaque divulgava o laboratório e pregava uma campanha contra a ancilostomose.\n[…]\nDurante a vigência da Lei Seca, o Biotônico Fontoura foi exportado para os Estados Unidos. Como se tratava de um produto medicinal, sua comercialização e consumo eram liberados. Ainda que muitos o considerem superestimado, Cândido Fontoura contava que ganhou muito dinheiro com o negócio. Não há registros da quantidade exportada.\n[…]\nAlmanaque do Biotônico Fontoura\n[…]\n«Biotônico Fontoura, pela Rede Tec». www.redetec.org.br"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Zélia Gattai",
      "descricao": "Escritora e memorialista paulista (1916–2008), autora de Anarquistas, Graças a Deus."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A escritora paulista Zélia Gattai, autora de Anarquistas, Graças a Deus, foi casada por mais de cinquenta anos com que romancista baiano?",
    "resposta": "Jorge Amado",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Z%C3%A9lia_Gattai"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Z%C3%A9lia_Gattai",
        "situacao": "ok",
        "texto": "Zélia Gattai Amado de Faria (São Paulo, 2 de julho de 1916 – Salvador, 17 de maio de 2008) foi uma escritora, fotógrafa e memorialista (como ela mesma preferia denominar-se) brasileira, tendo também sido expoente da militância política nacional durante quase toda a sua longa vida, da qual partilhou cinquenta e seis anos casada com o também escritor Jorge Amado, até a morte deste.\n[…]\nLeitora entusiasta de Jorge Amado, Zélia Gattai o conheceu em 1945, quando trabalharam juntos no movimento pela anistia dos presos políticos. A união do casal deu-se poucos meses depois. A partir de então, Zélia Gattai trabalhou ao lado do marido, passando a limpo, à máquina, seus originais e o auxiliando no processo de revisão.\n[…]\nEm 2001 foi eleita para a Academia Brasileira de Letras, para a cadeira 23, anteriormente ocupada por Jorge Amado, que teve Machado de Assis como primeiro ocupante e José de Alencar como patrono. No mesmo ano, foi eleita para a Academia de Letras da Bahia e para a Academia Ilheense de Letras. Em 2002, tomou posse nas três. É mãe de Luís Carlos, Paloma e João Jorge. É amiga de personalidades e gente simples.\n[…]\nNo lançamento do livro 'Jorge Amado: um baiano romântico e sensual, em 2002, em uma livraria de Salvador, estavam pessoas como Antônio Carlos Magalhães, Sossó, Calasans Neto, Auta Rosa, Bruna Lima, Antonio Imbassahy e James Amado, entre outros.\n[…]\nAo lançar seu primeiro livro, Anarquistas graças a Deus, Zélia Gattai recebeu o Prêmio Paulista de Revelação Literária de 1979. No ano seguinte, recebeu o Prêmio da Associação de Imprensa, o Prêmio McKeen e o Troféu Dante Alighieri. A Secretaria de Educação do Estado da Bahia concedeu-lhe a Medalha Castro Alves, em 1987. Em 1988, recebeu o Troféu Avon, como destaque da área cultural e o Prêmio Destaque do Ano de 1988, pelo livro Jardim de inverno.\n[…]\nAnarquistas Graças a Deus, 1979 (memórias).\n[…]\nZélia Gattai no IMDb"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "A Guerra do Fim do Mundo",
      "descricao": "Romance de Mario Vargas Llosa publicado em 1981, sobre a Guerra de Canudos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No romance A Guerra do Fim do Mundo, o peruano Mario Vargas Llosa recria o mesmo conflito narrado em que clássico brasileiro de 1902?",
    "resposta": "Os Sertões",
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Guerra_do_Fim_do_Mundo",
      "https://en.wikipedia.org/wiki/The_War_of_the_End_of_the_World"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Guerra_do_Fim_do_Mundo",
        "situacao": "ok",
        "texto": "A Guerra do Fim do Mundo é um livro publicado em 1981 de autoria do peruano Mario Vargas Llosa. Este romance narra a história da Guerra de Canudos, mesclando personagens reais e fictícios.\n[…]\nAntônio Conselheiro, líder do levante, fundamentalista religioso, é descrito com base em elementos retirados do clássico brasileiro Os Sertões, de Euclides da Cunha.\n[…]\nMario Vargas Llosa passou vários meses no sertão de Canudos, procurando inspiração e escrevendo os primeiros rascunhos do romance. Inspirado nos fatos históricos da Guerra de Canudos e contendo uma riqueza de detalhes sobre a vida do sertão baiano, o livro não deve, porém, ser confundido com uma fonte histórica. Tanto a história quanto os personagens foram ficcionalizados."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_War_of_the_End_of_the_World",
        "situacao": "ok",
        "texto": "The War of the End of the World (Spanish: La guerra del fin del mundo) is a 1981 novel written by Peruvian novelist Mario Vargas Llosa, who won the 2010 Nobel Prize in Literature. It is a fictionalized account of the War of Canudos conflict in late 19th-century Brazil.\n[…]\nIt is generally believed that Vargas Llosa's five milestone novels are La Ciudad y los Perros (The Time of the Hero), La Casa Verde (The Green House), Conversación en La Catedral (Conversation in The Cathedral), The War of the End of the World and La Fiesta del Chivo (The Feast of the Goat).\n[…]\nAs he did later on with The Feast of the Goat, Vargas Llosa tackles a huge number of characters and stories caught during a time of strife, interweaving these in way that paints a picture of what it was to live in those times.\n[…]\nIn Publishers Weekly, Adriana Lopez wrote: \"This historical novel, based on actual occurrences with plenty of fabulistic legends throughout, is delivered in Vargas Llosa's witty and objective journalistic tone. Vargas Llosa, who is so good at bringing to life the human faults of history's fanatics and dictators, captivates the deranged world of the charismatic Counselor.\""
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Paulo Coelho",
      "descricao": "Romancista carioca nascido em 1947, autor de O Alquimista."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Antes da fama como romancista, Paulo Coelho foi parceiro de que roqueiro baiano em canções como Gita e Sociedade Alternativa?",
    "resposta": "Raul Seixas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Paulo_Coelho",
      "https://pt.wikipedia.org/wiki/Raul_Seixas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Paulo_Coelho",
        "situacao": "ok",
        "texto": "Paulo Coelho de Souza (Rio de Janeiro, 24 de agosto de 1947) é um escritor, letrista, jornalista e compositor brasileiro. Ocupa a 21.ª cadeira da Academia Brasileira de Letras.\n[…]\nInfluenciou o rock brasileiro através de sua parceira com o músico Raul Seixas, participando da composição de sucessos como \"Sociedade Alternativa\" e \"Eu Nasci Há 10 Mil Anos Atrás\".\n[…]\nOs dois se tornam parceiros em diversas músicas que exerceriam influência no rock brasileiro (consta na biografia de Paulo Coelho, \"O Mago\", do escritor Fernando Morais, que Raul Seixas, para incentivar o amigo a compor, colocou-o como parceiro em sua participação na trilha sonora da novela O Rebu da Rede Tupi - erroneamente confundida com a Rede Globo no livro - sem que Paulo escrevesse uma única linha).\n[…]\nNessa época, Paulo Coelho envolve-se com Marcelo Ramos Motta, conhece a Lei de Thelema e, no dia 19 de maio de 1974, assina o juramento do grau de Probacionista da Astrum Argentum, sob o mote mágico de Frater Luz Eterna. Pouco tempo depois, se desligou da Ordem. Foi o responsável por apresentar a Lei de Thelema a Raul Seixas, que fez surgir, a partir dela, a Sociedade Alternativa. Compõe também para diversos intérpretes, tais como Elis Regina, Rita Lee, Fábio Júnior e outros.\n[…]\nNa biografia do compositor Raul Seixas, escrita por Jotabê Medeiros em 2019, foi levantada a suspeita sobre a possibilidade deste ter delatado seu parceiro de criação Paulo Coelho de Souza às autoridades. Porém, após a análise de documentos usados na tese de doutorado de Lucas Marcelo Tomaz de Souza, publicada em 2016 e defendida na USP, esta hipótese foi refutada.\n[…]\nRaul - O Início, o Fim e o Meio\n[…]\nMúsicas com Raul Seixas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Raul_Seixas",
        "situacao": "ok",
        "texto": "Raul Santos Seixas OMC (Salvador, 28 de junho de 1945 – São Paulo, 21 de agosto de 1989) foi um cantor, compositor, produtor e multi-instrumentista brasileiro, frequentemente considerado um dos pioneiros do rock brasileiro. Também foi produtor musical da CBS, durante sua estadia na cidade do Rio de Janeiro e, por vezes, é chamado de Pai do Rock Brasileiro e Maluco Beleza. Sua obra musical é compos\n[…]\nRaul Seixas tinha um estilo musical que era chamado de \"contestador e místico\". Isso se deve aos ideais que defendia, como a Sociedade Alternativa apresentada no álbum Gita, lançado em 1974, influenciado por figuras como o ocultista britânico Aleister Crowley.\n[…]\nNo ano de 1974, Raul Seixas e Paulo Coelho criam a Sociedade Alternativa, uma sociedade baseada nos preceitos do bruxo inglês Aleister Crowley, praticamente repetindo o chamado Livro da Lei. O cantor foi levado pelo escritor a conhecer uma ordem filosófica baseada na Lei de Thelema, desenvolvida por Crowley.\n[…]\nDepois de torturados, Raul e Paulo foram exilados para os Estados Unidos, com suas respectivas esposas, Edith Wisner e Adalgisa Rios. Muitas histórias são contadas sobre a estadia de Raul Seixas nos Estados Unidos, como seu encontro com John Lennon, mas ninguém sabe ao certo se são verdadeiras. No entanto, o LP Gita gravado poucos meses antes faz tanto sucesso, que forçou a Ditadura a trazê-los de volta para o Brasil.\n[…]\nEm 1975, Raul Seixas casa-se com Glória Vaquer (1949–2024), e grava o LP Novo Aeon, onde compôs junto com Paulo Coelho, uma de suas músicas mais conhecidas, \"Tente Outra Vez\", que seria creditada juntamente com Marcelo Motta, por quem eram discipulados na Astrum Argentum (AA). O LP, porém, vendeu menos de 60 mil cópias.\n[…]\nRaul Rock Seixas (1977)\n[…]\nRaul Seixas (1983)\n[…]\n2012 - Meu amigo Raul (espetáculo da Associação Cultural Teatro de Pano)\n[…]\nRaul Seixas no Instagram\n[…]\nCanal de Raul Seixas no YouTube\n[…]\nRaul Seixas no TikTok"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Dom Casmurro",
      "descricao": "Romance de Machado de Assis publicado em 1899, narrado por Bento Santiago."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Dom Casmurro, por que o jovem Bentinho é mandado para o seminário, mesmo apaixonado por Capitu?",
    "resposta": "Por uma promessa da mãe",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dom_Casmurro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dom_Casmurro",
        "situacao": "ok",
        "texto": "Dom Casmurro é um romance escrito por Machado de Assis, publicado em 1899 pela Livraria Garnier. Escrito para publicação em livro, o que ocorreu em 1900 – embora com data do ano anterior, ao contrário de Memórias Póstumas de Brás Cubas (1881) e Quincas Borba (1891), escritos antes em folhetins –, é considerado pela crítica o terceiro romance da \"Trilogia Realista\" de Machado de Assis, ao lado dess\n[…]\nNos capítulos adiante Bento começa suas reminiscências: conta as experiências que teve quando sua mãe, a viúva D. Glória, lhe enviou para o seminário, fruto de promessa que ela fez caso acabasse concebendo um novo filho depois de seu primeiro, que morreu no parto; a ideia foi ressuscitada pelo agregado José Dias, que conta a Tio Cosme e à D. Glória o namoro de Bentinho com Capitolina, a vizinha pobre por quem Bentinho era apaixonado.\n[…]\nOutro ponto estudado é que Dom Casmurro é quase incomunicável com Capitu — daí o fato de somente os gestos e os olhares (e não palavras) da moça lhe indicarem o possível adultério. Bento é um homem calado e metido consigo mesmo.\n[…]\nDe todos seus romances, Dom Casmurro é provavelmente a obra que mais possui influência teológica. Há referências a São Tiago e São Pedro, principalmente pelo fato de o narrador Bentinho ter estudado em seminário. Além disso, no Capítulo XVII Machado faz alusão a um oráculo pagão do mito de Aquiles e ao pensamento israelita.\n[…]\nUma das provas do argumento de Gledson encontra-se no Capítulo 3, que ele considera ser a \"base do romance\", na motivação de José Dias ao falar da família de Capitu e lembrar a D. Glória a promessa que ela fez de botar Bentinho no Seminário, ou seja, tratando a \"gente do Pádua\" como inferior e sua filha como uma menina dissimulada e pobre que pode corromper o garoto.\n[…]\nDom Casmurro (em PDF, ePub e Mobi) no site Bíblioteca Mundial"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Capitães da Areia",
      "descricao": "Romance de Jorge Amado publicado em 1937, sobre um grupo de meninos de rua de Salvador."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Logo depois do golpe do Estado Novo, em 1937, que destino tiveram centenas de exemplares de Capitães da Areia, de Jorge Amado, em Salvador?",
    "resposta": "Foram queimados em praça pública",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capit%C3%A3es_da_Areia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capit%C3%A3es_da_Areia",
        "situacao": "ok",
        "texto": "Capitães da Areia é um romance do escritor brasileiro Jorge Amado, escrito em 1937 e publicado no mesmo ano. A obra retrata a vida de um grupo de menores abandonados que vivem nas ruas da cidade de Salvador, abrigando-se em um trapiche e sobrevivendo por meio de pequenos furtos. Esses jovens, marginalizados pela sociedade, são conhecidos como os \"Capitães da Areia\".\n[…]\nCapitães da Areia tornou-se o livro mais vendido de Jorge Amado, com cerca de 4,3 milhões de exemplares comercializados, e é amplamente considerado um clássico da literatura brasileira. A obra figura recorrentemente em listas de leituras obrigatórias de vestibulares, como o da FUVEST.\n[…]\nNeste livro, Jorge Amado retrata a vida nas ruas de Salvador, capital do estado brasileiro da Bahia, naquela época afetada por uma epidemia de bexiga (varíola); o aparato policial destinava-se à perseguição pura e simples dos menores infratores, encontrando mesmo prazer na tortura, sem qualquer senso de justiça.\n[…]\nAlberto, estudante que se torna amigos dos Capitães da Areia;\n[…]\nJá em novembro de 1937 a obra foi perseguida pela ditadura Vargas, sendo queimados em Salvador 808 exemplares em praça pública, junto a outros livros do autor e outros escritores, como José Lins do Rego, sob o pretexto de se tratar de objeto de propaganda comunista. No dia 8 de dezembro do mesmo ano a obra foi também uma das que foram apreendidas nas livrarias do Rio de Janeiro, sob a alegação de serem \"nocivas à sociedade\".\n[…]\nEm 1987 Adolfo Moreira Cavalcante escreveu o cordel Pedro Bala, o chefe dos Capitães da Areia, onde reconta com críticas sociais a saga do líder dos meninos abandonados, dizendo que Amado \"...baseou-se em fatos muito reais, no menor abandonado, verdadeiros marginais\".\n[…]\nEm 2011 estreou nos cinemas o filme Capitães da Areia por Cecília Amado, neta de Jorge Amado que realizou o filme em homenagem ao avô."
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Emília",
      "descricao": "Boneca de pano falante do Sítio do Picapau Amarelo, de Monteiro Lobato."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nas histórias de Monteiro Lobato, a boneca Emília começou a falar depois de engolir o quê?",
    "resposta": "Uma pílula do Doutor Caramujo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Reina%C3%A7%C3%B5es_de_Narizinho",
      "https://pt.wikipedia.org/wiki/S%C3%ADtio_do_Picapau_Amarelo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Reina%C3%A7%C3%B5es_de_Narizinho",
        "situacao": "ok",
        "texto": "Reinações de Narizinho é um livro de fantasia e infantil de autoria do escritor brasileiro Monteiro Lobato. Publicado em 1931, é o livro que serve de propulsor à série que seria protagonizada no Sítio do Picapau Amarelo. É um clássico da literatura, e até hoje serve de inspiração para muitos autores infantis, como Ana Maria Machado, Ruth Rocha, Pedro Bandeira e muitos outros.\n[…]\nA Pílula Falante\n[…]\nEmília - A boneca de Narizinho. Foi feita de pano por Tia Nastácia. Espevitada e atrevida, ganha o dom da fala ao engolir uma pílula falante do Doutor Caramujo.\n[…]\nDona Benta - A avó de Pedrinho e Narizinho, é a proprietária do Sítio do Picapau Amarelo. Tem mais de sessenta anos e usa óculos de ouro na ponta do nariz. No início, não acreditava nas histórias dos netos, até que viu Emília falar. É sábia, democrática e uma ótima contadora de histórias.\n[…]\nDoutor Caramujo - O médico da corte do Reino das Águas Claras, é renomado por suas pílulas milagrosas que curam todas as doenças.\n[…]\nA primeira foi realizada em 1982, protagonizada pela atriz Rosana Garcia que encarnou a Narizinho de 1981 a 1982, tendo como Emília a atriz Reny de Oliveira que deu vida á boneca de pano de 1978 a 1983.\n[…]\nA segunda foi feita em 2001, tendo como Narizinho a atriz Lara Rodrigues que viveu a personagem de 2001 a 2004, e sua boneca Emília interpretada pela atriz Isabelle Drummond de 2001 a 2006. As histórias são adaptadas para diferentes episódios, como: O Reino das Águas Claras, Reinações de Narizinho, A festa do Faz-de-Conta e Viagem ao País das Fábulas.\n[…]\nEm 1920, Monteiro Lobato publicou A menina do narizinho arrebitado, o primeiro livro infantil do Brasil, lançado em plena época de Natal e tornando-se um fenômeno editorial.\n[…]\nNos anos 40, Reinações de Narizinho e Novas reinações de Narizinho foram juntados em um único livro, sendo este o primeiro volume infantil das Obras completas de Monteiro Lobato."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADtio_do_Picapau_Amarelo",
        "situacao": "ok",
        "texto": "Sítio do Picapau Amarelo é uma série de 23 volumes de literatura fantástica, escrita pelo autor brasileiro Monteiro Lobato (entre 1920 e 1947). A obra tem atravessado gerações e geralmente representa a literatura infantil do Brasil.\n[…]\nEm um dos capítulos de Reinações de Narizinho, Emília começa a falar graças à pílula falante do Doutor Caramujo, um médico afamado do Reino das Águas Claras, um palácio que fica no fundo do ribeirão do sítio. Durante as férias escolares, Pedrinho, primo de Narizinho, passa uma temporada de aventuras no Sítio. Juntos, eles desfrutam de aventuras explorando fantasia, descoberta e aprendizagem.\n[…]\nPor outro lado, a pesquisadora da USP, Vanete Santana-Dezmann, no artigo Contradições em análises da obra infantil de Monteiro Lobato, nota como a literatura infantil brasileira do começo do século XX era extremamente racista, mas que Lobato buscou subverter esse fato, ao criar uma narrativa em que tia Nastácia tinha a mesma relevância que dona Benta (A Reforma da Natureza), e ainda dedicar dois volumes de sua obra aos contos populares (O Saci e Histórias da Tia Nastácia), além de notar que nem sempre a voz de um personagem representa a voz do autor, principalmente quando a obra contém personagens que se contradizem.\n[…]\nEm seus livros Monteiro Lobato já criou muitos encontros entre seus próprios personagens, e os de outros autores, como \"Alice no País das Maravilhas\" de Lewis Carroll, Peter Pan e Capitão Gancho de J. M. Barrie, além de personagens de Contos de fadas, que estavam em \"domínio público\", e por tanto poderiam ser usados pelo autor, sem pagar os direitos autorais. Porém Lobato também já usou em suas histórias pessoas reais de Hollywood, e até mesmo personagens de desenhos animados."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Monteiro Lobato",
      "descricao": "Escritor paulista (1882–1948), criador do Sítio do Picapau Amarelo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1941, Monteiro Lobato foi preso durante o Estado Novo por criticar a política do governo Vargas sobre que recurso natural?",
    "resposta": "Petróleo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Monteiro_Lobato"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Monteiro_Lobato",
        "situacao": "ok",
        "texto": "José Bento Renato Monteiro Lobato (Taubaté, 18 de abril de 1882 – São Paulo, 4 de julho de 1948) foi um escritor, intelectual e editor literário brasileiro. Participou ativamente do pré-modernismo e modernismo brasileiro e da vida política do Brasil, sendo popularmente lembrado por sua série de livros infantis Sítio do Pica Pau Amarelo.\n[…]\nLobato comprou, em 1937, a \"União Jornalística Brasileira\", uma empresa destinada a redigir e distribuir notícias pelos jornais, fundada, três anos antes, por Menotti del Picchia. Em fevereiro de 1939 morreu Guilherme, seu terceiro filho. Abalado, Monteiro Lobato enviou uma carta ao ministro de Agricultura, que precipitara a abertura de um inquérito sobre o petróleo. Recebeu convite de Getúlio Vargas para dirigir um ministério de Propaganda, mas Lobato recusou.\n[…]\nO teor da carta foi tido como subversivo e desrespeitoso e isso fez com que fosse detido pelo Estado Novo, acusado de tentar desmoralizar o Conselho Nacional do Petróleo, ironicamente presidido à época pelo general Horta Barbosa, o responsável por colocar Lobato atrás das grades do Presídio Tiradentes e que, abraçando as ideias de Lobato, se tornaria em 1947 um dos maiores líderes da nacionalista Campanha do Petróleo.\n[…]\nDois dias após conceder a Murilo Antunes Alves, da Rádio Record, a sua última entrevista, na qual defendeu a Campanha de O Petróleo é Nosso, Monteiro Lobato sofreu um segundo espasmo cerebral e morreu às 4 horas da madrugada, ao lado de sua esposa, Maria Pureza (a Purezinha), sua filha Ruth e o ascensorista Antônio Augusto (que havia ido até eles em resposta aos gritos de Ruth por ajuda), no dia 4 de julho de 1948, aos 66 anos de idade.\n[…]\nO escândalo do petróleo (1936)\n[…]\nCríticas e outras notas (1948)\n[…]\n«Site Monteiro Lobato»\n[…]\n«Página do Projeto \"Monteiro Lobato (1882-1948) e outros Modernismos brasileiros\", UNICAMP»"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Dona Flor e Seus Dois Maridos",
      "descricao": "Romance de Jorge Amado publicado em 1966, sobre uma professora de culinária de Salvador e seus dois maridos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Dona Flor e Seus Dois Maridos, de Jorge Amado, como se chama o primeiro marido, boêmio e jogador, que volta como fantasma?",
    "resposta": "Vadinho",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dona_Flor_e_Seus_Dois_Maridos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dona_Flor_e_Seus_Dois_Maridos",
        "situacao": "ok",
        "texto": "Dona Flor e Seus Dois Maridos é um dos romances mais conhecidos do escritor brasileiro Jorge Amado, membro da Academia Brasileira de Letras, que o lançou em junho de 1966 e fora levado com êxito ao cinema, ao teatro e à televisão.\n[…]\nO romance se inicia com a morte de Vadinho, um boêmio, jogador e alcoólatra que morre subitamente em pleno carnaval de rua, vestido de baiana. Deixa viúva Dona Flor, a quem explorava e que, apesar da vida desregrada do marido, era apaixonada por ele. Na primeira parte do livro são contados os excessos de Vadinho e de todos os companheiros boêmios que o cercavam.\n[…]\nIntercalando as aulas de culinária, há os suspiros da viúva pelo marido morto, que se lembra, cada vez mais constantemente, das qualidades de ótimo amante de Vadinho e dos poucos momentos de luxo que lhe propiciara, quando ganhava no jogo. Ao mesmo tempo, ela é cortejada por um pretendente, Teodoro, um farmacêutico pacato e religioso. Os dois acabam se casando. Mas, de idade um pouco avançada e bastante conservador, ele não consegue satisfazer Dona Flor, que cada vez mais se lembra de Vadinho.\n[…]\nNa terceira parte, os acontecimentos se atropelam e assumem um estilo do realismo fantástico, quando o espírito de Vadinho (que era filho de Exu) retorna e passa a atormentar Dona Flor. Somente ela vê Vadinho que, quando está com Dona Flor, parece ser capaz de realizar as mesmas coisas que fazia na cama quando estava vivo. Dona Flor hesita entre se manter fiel ao novo marido ou ceder ao espírito do primeiro.\n[…]\nI – Da morte de Vadinho, primeiro marido de Dona Flor, do velório e do enterro de seu corpo (ao cavaquinho o sublime Carlos Mascarenhas).\n[…]\nPágina de Dona Flor e Seus Dois Maridos no site Jorge Amado.com."
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Vidas Secas",
      "descricao": "Romance de Graciliano Ramos publicado em 1938, sobre uma família de retirantes no sertão nordestino."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Vidas Secas, de Graciliano Ramos, que nome tem a cachorra da família do vaqueiro Fabiano?",
    "resposta": "Baleia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vidas_Secas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vidas_Secas",
        "situacao": "ok",
        "texto": "Vidas Secas é um influente e importante romance do escritor brasileiro Graciliano Ramos, escrito entre 1937 e 1938, publicado originalmente em '38 pela antológica Livraria José Olympio Editora, hoje editado pela Editora Record, e considerado por muitos como a maior obra do autor.\n[…]\nVidas Secas retrata a vida de pessoas que vivem no sertão brasileiro e o sacrifício delas para sobreviver. Tendo como tema a luta pela sobrevivência diante do flagelo da estiagem, Graciliano Ramos traz em seus personagens muito da existência nordestina. Os principais personagens são: Fabiano, sinha Vitória, Menino mais velho, Menino mais novo, a cachorra Baleia e o papagaio, que serve de alimento providencial que a família come para aliviar a fome.\n[…]\nEste é um dos trechos mais comentados, influentes e comoventes da literatura brasileira. Se até agora Graciliano utilizava fielmente o realismo, seu estilo se inverte quando trata de Baleia neste capítulo. Considerado como \"um momento de poesia trágica de Vidas Secas\", o capítulo nos apresenta um narrador que, ternamente, se transfere para dentro do animal, revelando seus mais íntimos e últimos desejos, atingindo o máximo de sua humanização diante de humanos animalizados.\n[…]\n\"A obra de Graciliano Ramos firma-se, cada vez mais, como um dos marcos da literatura brasileira. Críticos e público são conscientes de que essa obra é imperecível, perfeita de forma e conteúdo. Dentre os romances de Graciliano, Vidas Secas se distingue pela original apresentação de episódios isolados, verdadeiros contos, e pela narração direta. Fabiano, Sinha Vitória e os filhos pertencem inelutavelmente, com suas vidas amargadas, à paisagem árida do sertão nordestino.\"\n[…]\nVidas Secas - Graciliano Ramos - Cr$ 10,00\n[…]\nVidas Secas - www.graciliano.com.br"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Os Sertões",
      "descricao": "Livro de Euclides da Cunha publicado em 1902 sobre a Guerra de Canudos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Os Sertões, de Euclides da Cunha, é dividido em três partes. As duas primeiras são A Terra e O Homem. Qual é a terceira?",
    "resposta": "A Luta",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Os_Sert%C3%B5es"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Sert%C3%B5es",
        "situacao": "ok",
        "texto": "Os Sertões é um livro do escritor e jornalista brasileiro Euclides da Cunha, publicado em 1902. É considerado como o primeiro livro-reportagem brasileiro.\n[…]\nTrata da Guerra de Canudos (1896–1897), ocorrida em Canudos, município do interior da Bahia. Euclides da Cunha presenciou uma parte da guerra como correspondente do jornal O Estado de S. Paulo. Pertence, ao mesmo tempo, à prosa científica e à prosa artística. Pode ser entendido como uma obra de Sociologia, Geografia, História ou crítica humana, mas não é errado lê-lo como uma epopeia da vida sertaneja em sua luta diária contra a paisagem e a incompreensão da elite.\n[…]\nConsiderada uma obra pré-modernista, o estilo de Os Sertões é conflituoso, angustiado, torturado. Dá a impressão de sofrimento e luta. O autor faz uso de muitas figuras de linguagem; às vezes omite as conjunções (assindetismo), outras repete-as reiteradamente (polissintetismo). Ocorre, com frequência, a mistura de termos de alta erudição tecnocientífica com regionalismos populares e neologismos do próprio autor.\n[…]\nA obra foi concebida segundo o esquema rigoroso do determinismo de Taine, que via o homem como um produto de três fatores: meio ambiente, raça e momento histórico. As teses e os princípios científicos adotados pelo escritor envelheceram, achando-se na sua maioria desacreditados atualmente. O determinismo considerava o mestiço brasileiro uma raça inferior, e Euclides da Cunha compartilha desta visão.\n[…]\nO livro divide-se em três partes: A terra, O homem e A luta.\n[…]\n«Juízos críticos: Os sertões : Campanha de Canudos». Biblioteca Brasiliana Guita e José Mindlin. Consultado em 8 de julho de 2023"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Academia Brasileira de Letras",
      "descricao": "Instituição literária fundada no Rio de Janeiro em 1897, com Machado de Assis como primeiro presidente."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Seguindo o modelo da Academia Francesa, a Academia Brasileira de Letras tem quantas cadeiras de membros efetivos?",
    "resposta": "Quarenta",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Academia_Brasileira_de_Letras"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Academia_Brasileira_de_Letras",
        "situacao": "ok",
        "texto": "Academia Brasileira de Letras (ABL; ) GCSE • MHSE é uma instituição literária brasileira fundada na cidade do Rio de Janeiro em 20 de julho de 1897 pelos escritores Machado de Assis, Lúcio de Mendonça, Inglês de Sousa, Olavo Bilac, Afonso Celso, Graça Aranha, Medeiros e Albuquerque, Joaquim Nabuco, Teixeira de Melo, Visconde de Taunay e Ruy Barbosa. É composta por quarenta membros efetivos e perpé\n[…]\nCom a presença de trinta membros, surgiu a necessidade de completar o número de quarenta, em conformidade com o modelo da Academia Francesa. Os dez membros adicionais foram eleitos: Aluísio Azevedo, Barão de Loreto, Clóvis Beviláqua, Domício da Gama, Eduardo Prado, Luís Guimarães Júnior, Magalhães de Azeredo, Oliveira Lima, Raimundo Correia e Salvador de Mendonça.\n[…]\nEm 26 de Novembro de 1987 tornou-se Membro-Honorário da mesma Ordem de Portugal.\n[…]\nA Academia Brasileira de Letras agracia personalidades com os seguintes prêmios:\n[…]\nPontualmente são atribuídos os seguintes prêmios:\n[…]\nO Mausoléu da Academia Brasileira de Letras se encontra no Cemitério São João Batista, Rio de Janeiro - RJ. Ele é uma construção retangular de dois andares, na qual estão sepultados alguns membros da Academia Brasileira de Letras. Foi construído entre 1958 e 1961, durante a gestão de Austregésilo de Athayde (1959-1993).\n[…]\nA Academia Brasileira de Letras tem quarenta cadeiras, ocupadas por quarenta membros efetivos perpétuos (no mínimo vinte e cinco devem morar na cidade que sedia a instituição, o Rio de Janeiro), sendo cada novo membro eleito pelos acadêmicos para ocupar uma cadeira vaga devido ao falecimento do último titular. Há ainda vinte membros estrangeiros correspondentes. No quadro atual, o membro mais idoso é Geraldo Holanda Cavalcanti aos 96 anos, enquanto o mais jovem é Ana Maria Gonçalves, com 55 anos.\n[…]\nMedia relacionados com Academia Brasileira de Letras no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Cora Coralina",
      "descricao": "Poeta e doceira goiana (1889–1985), da Cidade de Goiás."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A poeta goiana Cora Coralina lançou seu primeiro livro, Poemas dos Becos de Goiás, com aproximadamente quantos anos de idade?",
    "resposta": "Setenta e cinco anos",
    "distratores": [
      "Quarenta anos",
      "Cinquenta e cinco anos",
      "Noventa anos"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cora_Coralina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cora_Coralina",
        "situacao": "ok",
        "texto": "Cora Coralina, pseudônimo de Anna Lins dos Guimarães Peixoto Bretas (Cidade de Goiás, 20 de agosto de 1889 — Goiânia, 10 de abril de 1985), foi uma poetisa e contista brasileira. Considerada uma das mais importantes escritoras brasileiras, teve seu primeiro livro, Poemas dos Becos de Goiás e Estórias Mais, publicado em junho de 1965, quando já tinha quase 76 anos de idade, apesar de escrever seus \n[…]\nAnna Lins dos Guimarães Peixoto Bretas, que adotou o pseudônimo de Cora Coralina, era filha de Francisco de Paula Lins dos Guimarães Peixoto, desembargador nomeado por D. Pedro II, e de dona Jacyntha Luiza do Couto Brandão.\n[…]\nEla nasceu e foi criada às margens do Rio Vermelho. Estima-se que essa casa foi construída em meados do Século XVIII, tendo sido uma das primeiras edificações da antiga Vila Boa (Goiás), tendo vários moradores, dentre eles o Capitão-Mor da Coroa Portuguesa. Em 1825 a casa foi posta em hasta pública pela fazenda Real e adquirida pelo Sargento-Mor João José do Couto Guimarães, trisavô de Cora Coralina.\n[…]\nÉ patrimônio de nós todos, que nascemos no Brasil e amamos a poesia ( …)”.A primeira edição de Poemas dos Becos de Goiás e estórias mais, seu primeiro livro, foi publicado pela Editora José Olympio em 1965, quando a poetisa já contabilizava 75 anos. Reúne os poemas que consagraram o estilo da autora e a transformaram em uma das maiores poetisas lusófonas do século XX. Já a segunda edição, repetindo, saiu em 1978 pela imprensa da UFG. E a terceira, em 1980.\n[…]\nOnze anos depois da primeira edição de Poemas dos Becos de Goiás e estórias mais, compôs, em 1976, Meu Livro de Cordel. Finalmente, em 1983 lançou Vintém de Cobre - Meias Confissões de Aninha (Ed. Global).\n[…]\nEm 2016, o perfil de Cora Coralina foi incluído na primeira edição do livro Histórias de Ninar para Garotas Rebeldes: Cem fábulas sobre mulheres extraordinárias, como uma das cem mulheres mais influentes."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Euclides da Cunha",
      "descricao": "Escritor e engenheiro brasileiro (1866–1909), autor de Os Sertões."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em 1897, Euclides da Cunha acompanhou a Guerra de Canudos como correspondente de que jornal?",
    "resposta": "O Estado de S. Paulo",
    "distratores": [
      "Jornal do Commercio",
      "Correio Paulistano",
      "Gazeta de Notícias"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Euclides_da_Cunha",
      "https://pt.wikipedia.org/wiki/Os_Sert%C3%B5es"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Euclides_da_Cunha",
        "situacao": "ok",
        "texto": "Euclides Rodrigues Pimenta da Cunha (Cantagalo, 20 de janeiro de 1866 – Rio de Janeiro, 15 de agosto de 1909) foi um escritor, jornalista, engenheiro e ensaísta brasileiro, identificado com o pré-modernismo, conhecido por seu romance Os Sertões e por sua atividade intelectual nos primeiros anos da República Brasileira.\n[…]\nNascido em Cantagalo, Euclides estudou na Escola Politécnica e na Escola Militar da Praia Vermelha, tornando-se brevemente um militar. Ingressou no jornal A Província de S. Paulo — hoje O Estado de S. Paulo — enquanto recebia título de bacharel e primeiro-tenente. Em 1897, tornou-se jornalista correspondente de guerra e cobriu alguns dos principais acontecimentos da Guerra de Canudos, conflito dos sertanejos da Bahia liderados pelo religioso Antônio Conselheiro contra o Exército Brasileiro.\n[…]\nDurante a fase inicial da Guerra de Canudos, em 1897, Euclides da Cunha escreveu dois artigos intitulados A nossa Vendeia que lhe valeram um convite do jornal O Estado de S. Paulo para cobrir o final do conflito como correspondente de guerra no sertão da Bahia. Isso porque ele considerava, como muitos republicanos à época, que o movimento de Antônio Conselheiro tinha a pretensão de restaurar a monarquia e era apoiado por monarquistas residentes no país e no exterior.\n[…]\nJúlio de Mesquita, do jornal O Estado de S. Paulo, convida-o para acompanhar a última fase da campanha de Canudos como correspondente. Nomeado adido ao Estado-Maior do Ministério da Guerra, segue para Canudos. Cobre a última fase daquela campanha. De 7 de agosto a 1 de outubro fica no sertão, como correspondente do jornal O Estado de S. Paulo;\n[…]\nAnchieta. O Estado de S. Paulo, 9 jun. 1897.\n[…]\nCanudos: diário de uma expedição. O Estado de S. Paulo, 11-13, 20, 21 e 25 out. 1897.\n[…]\n«Especiais sobre Euclides da Cunha», O Estado de S. Paulo ."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Sert%C3%B5es",
        "situacao": "ok",
        "texto": "Os Sertões é um livro do escritor e jornalista brasileiro Euclides da Cunha, publicado em 1902. É considerado como o primeiro livro-reportagem brasileiro.\n[…]\nTrata da Guerra de Canudos (1896–1897), ocorrida em Canudos, município do interior da Bahia. Euclides da Cunha presenciou uma parte da guerra como correspondente do jornal O Estado de S. Paulo. Pertence, ao mesmo tempo, à prosa científica e à prosa artística. Pode ser entendido como uma obra de Sociologia, Geografia, História ou crítica humana, mas não é errado lê-lo como uma epopeia da vida sertaneja em sua luta diária contra a paisagem e a incompreensão da elite.\n[…]\nO determinismo julgava que o homem é produto do meio (geografia), da raça (hereditariedade) e do momento histórico (cultura). O autor faz uma análise da psicologia do sertanejo e de seus costumes; é uma descrição feita pelo sociólogo e antropólogo Euclides da Cunha, que mostra o habitante do lugar, sua relação com o meio, sua gênese etnológica, seu comportamento, crença e costume; mas depois se fixa na figura de Antônio Conselheiro, o líder de Canudos.\n[…]\nFala sobre o que foi a Guerra de Canudos e explica com riqueza de detalhes os fatos dessa guerra que dizimou a população de Canudos. Uma descrição feita por Euclides da Cunha, relatando as quatro expedições a Canudos, criando o retrato real só possível pela testemunha ocular da fome, da peste, da miséria, da violência e da insanidade da guerra.\n[…]\nREZENDE, Maria José de. Os sertões e os (des)caminhos da mudança social no Brasil. Tempo Social: Revista de Sociologia da USP, São Paulo, v. 13, n. 2, p. 201-226, nov. de 2006."
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
