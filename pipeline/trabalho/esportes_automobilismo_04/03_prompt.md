Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Automobilismo** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Ayrton Senna",
      "descricao": "Piloto brasileiro tricampeão mundial de Fórmula 1."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Entre 1984 e 1994, quantos Grandes Prêmios de Fórmula 1 Ayrton Senna venceu?",
    "resposta": "Quarenta e um",
    "distratores": [
      "Trinta e cinco",
      "Quarenta e oito",
      "Cinquenta e um"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ayrton_Senna",
      "https://pt.wikipedia.org/wiki/Ayrton_Senna"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ayrton_Senna",
        "situacao": "ok",
        "texto": "Ayrton Senna da Silva (Brazilian Portuguese: [aˈiʁtõ ˈsẽnɐ dɐ ˈsiwvɐ] ; 21 March 1960 – 1 May 1994) was a Brazilian racing driver and philanthropist who competed in Formula One from 1984 to 1994. Senna won three Formula One World Drivers' Championship titles with McLaren, and—at the time of his death—held the record for most pole positions (65), among others; he won 41 Grands Prix across 11 season\n[…]\nIn a 1994 interview following Senna's death, Frank Williams said that \"If you want a summary of Ayrton Senna ... he was actually a greater man out of the car than in it.\"\n[…]\nThe tragic events that unfolded at Imola in 1994 with the deaths of Roland Ratzenberger and Ayrton Senna can be understood as a turning point for Formula One driver safety, the changes in attitude and in the procedures and standards that resulted from this were profound, and its effects continues to endure to the present day.\n[…]\n2004 marked the 10th anniversary of Senna's death. On 21 April 2004, Imola hosted a charity football match attended by over 10,000 people. The match featured members of Brazil's 1994 World Cup-winning team competing against an exhibition team of Formula One drivers. Viviane Senna presided at the kickoff. The match finished 5–5 and all profits were donated to the IAS. In addition, the book Ayrton: O Herói Revelado (Ayrton: The Hero Revealed) was published.\n[…]\nSenna used a number of helmet brands throughout his career. From 1977 to 1989, he used Bell (Star from 1977 to 1982 and XFM-1 from 1983 to 1989). From 1990 to 1991, he used Honda's own Rheos brand. From 1992 to 1993, he used Shoei (X-4). For 1994, he returned to using Bell (M3 Kevlar). The helmet worn by Senna in the fatal race was returned to Bell in 2002 and was incinerated while family members watched.\n[…]\nHilton, Christopher (1994). Ayrton Senna: The Second Coming. PSL. ISBN 9781852604837.\n[…]\nBBC Sport: Formula 1's Greatest Drivers"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ayrton_Senna",
        "situacao": "ok",
        "texto": "Ayrton Senna da Silva (São Paulo, 21 de março de 1960 – Bolonha, 1 de maio de 1994) foi um piloto de Fórmula 1, empresário e filantropo brasileiro. Senna foi campeão da categoria de piloto três vezes, em 1988, 1990 e 1991. Começou sua carreira competindo no kart em 1973 e em \"carros de fórmula\" em 1981, quando venceu as Fórmulas Ford 1600 e 2000. Em 1983 alcançou o título de campeão do Campeonato \n[…]\nSeu desempenho impulsionou sua ascensão à Fórmula 1, fazendo sua primeira aparição na categoria no Grande Prêmio do Brasil de 1984 pela equipe Toleman-Hart. Em sua primeira temporada, Senna pontuou em cinco corridas, fechando o ano com treze pontos e a nona posição na classificação geral dos pilotos. No ano seguinte, ingressou na Lotus-Renault, pela qual venceu seis grandes prêmios ao longo de três temporadas.\n[…]\nApós os eventos do trágico fim de semana no Grande Prêmio de San Marino de 1994, que resultou em seu trágico acidente, a Fórmula 1 implementou uma série de melhorias na segurança dos pilotos e nas pistas, incluindo novos regulamentos e tecnologias para a proteção dos pilotos. No auge de sua carreira, era considerado o maior ídolo brasileiro, posto que mantém mesmo depois de três décadas após a sua morte. Em 1º de maio de 2024, o Globoplay lança uma série documental intitulada Senna por Ayrton.\n[…]\nDurante os treinos para o Grande Prêmio do Brasil, algo muito raro aconteceu quando Senna narrou sua própria volta a bordo da Williams em transmissão ao vivo pela TV Globo.\n[…]\nEm maio de 2017, o governo do Principado de Mônaco, através do seu príncipe Albert II, prestou uma série de homenagens a Ayrton Senna na semana do Grande Prêmio de Mônaco de Fórmula 1. A primeira delas foi a inauguração de uma escultura com duas placas na curva Fairmont, onde fica o hotel de mesmo nome, que igualmente recebeu uma homenagem ao tricampeão mundial; uma suíte temática batizada com o nome do piloto."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Ayrton Senna",
      "descricao": "Piloto brasileiro tricampeão mundial de Fórmula 1."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes da fama, na família e entre os amigos de infância, Ayrton Senna era chamado por qual apelido?",
    "resposta": "Beco",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ayrton_Senna"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ayrton_Senna",
        "situacao": "ok",
        "texto": "Ayrton Senna da Silva (São Paulo, 21 de março de 1960 – Bolonha, 1 de maio de 1994) foi um piloto de Fórmula 1, empresário e filantropo brasileiro. Senna foi campeão da categoria de piloto três vezes, em 1988, 1990 e 1991. Começou sua carreira competindo no kart em 1973 e em \"carros de fórmula\" em 1981, quando venceu as Fórmulas Ford 1600 e 2000. Em 1983 alcançou o título de campeão do Campeonato \n[…]\nAlém de ter vencido a corrida, Senna fez a pole position, marcou a volta mais rápida da prova e liderou de ponta a ponta, sem dar chances para a Ferrari de Alain Prost, seu rival na disputa pelo título daquela temporada, que terminou na segunda colocação. A McLaren foi recebida pela família do piloto e hoje faz parte do acervo do Instituto Ayrton Senna.\n[…]\nEm vida, Ayrton ajudou inúmeras vezes programas de assistência a carentes, principalmente os ligados a crianças. A única condição para isso era o total sigilo. Se a imprensa descobrisse, ele negaria. Até mesmo a família e amigos mais próximos não tinham conhecimento da maioria de suas doações. Ayrton não desejava que seus gestos fossem interpretados apenas como promoção pessoal.\n[…]\nEm 1994, o cantor Elymar Santos gravou uma música chamada \"Guerreiros não morrem jamais\" em homenagem ao piloto. Em dezembro de 2009 a revista inglesa Autosport publicou uma matéria onde fez uma eleição para a escolha do melhor piloto de Fórmula 1 de todos os tempos. A revista consultou 217 pilotos que passaram pela categoria e Ayrton Senna venceu a votação.\n[…]\nAlém de reverenciar Senna, o carnavalesco Paulo Barros mostrou o universo da velocidade e do automobilismo. Fã de Ayrton, o presidente da agremiação, Fernando Horta, revelou que a família de Senna abraçou a ideia e estaria diretamente envolvida na pesquisa e no desenvolvimento do enredo. A escola sagrou-se campeã do carnaval carioca de 2014.\n[…]\n«Acervo sobre Ayrton Senna». no O Globo"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Ayrton Senna",
      "descricao": "Piloto brasileiro tricampeão mundial de Fórmula 1."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano Ayrton Senna conquistou o primeiro dos seus três títulos mundiais de Fórmula 1?",
    "resposta": "1988",
    "distratores": [
      "1986",
      "1987",
      "1989"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ayrton_Senna",
      "https://en.wikipedia.org/wiki/1988_Formula_One_World_Championship"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ayrton_Senna",
        "situacao": "ok",
        "texto": "Ayrton Senna da Silva (Brazilian Portuguese: [aˈiʁtõ ˈsẽnɐ dɐ ˈsiwvɐ] ; 21 March 1960 – 1 May 1994) was a Brazilian racing driver and philanthropist who competed in Formula One from 1984 to 1994. Senna won three Formula One World Drivers' Championship titles with McLaren, and—at the time of his death—held the record for most pole positions (65), among others; he won 41 Grands Prix across 11 season\n[…]\nSchlesser steered wide, attempting to give Senna room to lap him, losing then regaining control to avoid going into the sand trap, and the two collided; Senna's car was beached on top of a curb and had stalled. Ferrari went on to finish 1–2, the first in an Italian Grand Prix since the death of the team's founder Enzo Ferrari. This proved to be the only race McLaren did not win in 1988.\n[…]\nIn 1988, Nelson Piquet accused Senna of being homosexual in an incendiary interview, in which Piquet also called Enzo Ferrari \"senile\", former teammate Nigel Mansell an \"uneducated blockhead\", and Mansell's wife \"ugly\". Piquet retracted his comments after Senna and Mansell threatened to sue him for slander.\n[…]\nSenna was proud of his driving ability, and responded angrily to criticism. In 2000, Autocourse noted that \"Senna was the one driver who genuinely cared where he was ranked in [Autocourse's ranking of the year's] Top 10 drivers,\" and took being placed below his rivals as a personal slight. (Senna was ranked No. 1 in 1988, 1991, and 1993.) In 1990, Autocourse dropped Senna from No. 1 to No. 2 to criticize him for wrecking Alain Prost at Suzuka in 1990.\n[…]\n2010 marked the year of Senna's 50th birthday. In March, Senna's favourite football team, Corinthians, played a video in Senna's memory. On 25 July the BBC motoring show Top Gear paid an emotional tribute to Senna with British Formula One World Champion, Lewis Hamilton driving Senna's original MP4/4, with which he won the 1988 title."
      },
      {
        "url": "https://en.wikipedia.org/wiki/1988_Formula_One_World_Championship",
        "situacao": "ok",
        "texto": "The 1988 FIA Formula One World Championship was the 42nd season of FIA Formula One motor racing. It featured the 1988 Formula One World Championship for Drivers and the 1988 Formula One World Championship for Constructors, which were contested concurrently over a sixteen-race series that commenced on 3 April and ended on 13 November. The World Championship for Drivers was won by Ayrton Senna, and \n[…]\nMartin Brundle was test driver for Williams in 1988 and replaced Nigel Mansell at the Belgian Grand Prix, after Mansell was struck down with chickenpox. For the Italian Grand Prix, Williams called upon Jean-Louis Schlesser to make his debut, since Brundle had prior commitments in IMSA. The French driver made himself (in)famous by crashing into leader Ayrton Senna when the Brazilian tried to lap him for the second time. The McLaren spun out, paving the way for a Ferrari 1-2 finish on home soil.\n[…]\nThe French Grand Prix at Paul Ricard saw another 1–2 for McLaren, this time with Prost at the helm for his home Grand Prix, followed by the Ferraris, though this time Alboreto led home Berger with the Italian the only driver not lapped by the McLarens. Piquet raced a brilliant race, despite losing second gear, to come through for a fifth place. For the first time in 1988, Ayrton Senna was not on pole position.\n[…]\nAfter racing in Hungary against doctors orders, Nigel Mansell was forced to miss the Belgian Grand Prix through illness and was replaced by Martin Brundle, who after four years in F1 was driving a V12 Jaguar XJR-9 for Tom Walkinshaw Racing in the 1988 World Sportscar Championship (Brundle would win that championship). After qualifying 12th, and actually being fastest in the 2nd, wet qualifying session, Brundle finished in 7th place, one lap behind his former British Formula 3 rival Senna.\n[…]\n1988 Formula One results and images at f1-facts.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ayrton_Senna",
        "situacao": "ok",
        "texto": "Ayrton Senna da Silva (São Paulo, 21 de março de 1960 – Bolonha, 1 de maio de 1994) foi um piloto de Fórmula 1, empresário e filantropo brasileiro. Senna foi campeão da categoria de piloto três vezes, em 1988, 1990 e 1991. Começou sua carreira competindo no kart em 1973 e em \"carros de fórmula\" em 1981, quando venceu as Fórmulas Ford 1600 e 2000. Em 1983 alcançou o título de campeão do Campeonato \n[…]\nEm 1988, juntou-se ao francês Alain Prost na McLaren-Honda, com o qual teve grande rivalidade. Senna venceu oito etapas daquela temporada e sagrou-se campeão mundial pela primeira vez. Após a polêmica final de 1989 com Prost que resultou na segunda colocação do torneio, ele retomou o título em 1990, vencendo novamente na temporada seguinte, tornando-se o piloto mais jovem a conquistar um tricampeonato na Fórmula 1 até então. Em 1993, Senna foi vice-campeão, vencendo cinco corridas.\n[…]\nNo futebol, Ayrton Senna se declarava torcedor do Corinthians, fato muito celebrado pela torcida do clube por sua própria condição de ídolo nacional. Em 1988, logo após o primeiro título mundial, Ayrton tornou-se sócio do clube português Os Belenenses. A adesão do piloto se deu através de uma ação de marketing do então presidente, Miguel Pardal.\n[…]\nTítulo de Jaguar da Força Aérea Brasileira - 1988\n[…]\nTítulo de Benemérito do Estado do Rio de Janeiro - 1988\n[…]\nO primeiro fã-clube criado em homenagem ao piloto foi a Torcida Ayrton Senna, também conhecida como TAS. Foi criada por Jurandir Amaral em 15 de maio de 1988 na cidade de Brasília. No seu auge a torcida alcançou a marca de 18 mil associados em todo o Brasil - número bem próximo de uma torcida organizada de futebol à época. Filiais foram abertas em outras capitais brasileiras como Rio de Janeiro, Belo Horizonte, Fortaleza, João Pessoa e Porto Velho.\n[…]\nLista de conquistas na carreira de Ayrton Senna\n[…]\n«Instituto Ayrton Senna»\n[…]\n«Acervo sobre Ayrton Senna». no O Globo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Interlagos",
      "descricao": "Autódromo José Carlos Pace, em São Paulo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Interlagos, a sequência de curvas logo depois da reta de largada, para a esquerda e para a direita, leva o nome de qual piloto?",
    "resposta": "Ayrton Senna, o S do Senna",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Autódromo_José_Carlos_Pace",
      "https://en.wikipedia.org/wiki/Interlagos_Circuit"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Autódromo_José_Carlos_Pace",
        "situacao": "ok",
        "texto": "Autódromo José Carlos Pace é um autódromo municipal localizado no distrito de Cidade Dutra, na Zona Sul do município brasileiro de São Paulo, e considerado um dos melhores e mais importantes circuitos de corrida do mundo. Pela proximidade com o bairro de Interlagos, situado no distrito vizinho do Socorro, é popularmente chamado de Autódromo de Interlagos.\n[…]\nEm 1985, foi renomeado para homenagear o piloto de Fórmula 1 José Carlos Pace, falecido em 1977. Anexo à sua construção, há o Kartódromo Municipal Ayrton Senna.\n[…]\nPor sugestão de Ayrton Senna, foi então concebida uma sequência em descida ligando a antiga curva 1 à Curva do Sol. Esse trecho passou a ser denominado “S do Senna”, em homenagem ao tricampeão mundial.\n[…]\nEm agosto de 2024, o corpo de José Carlos Pace foi transferido de seu mausoléu vandalizado para o autódromo, onde foi sepultado no autódromo que leva seu nome. A ideia para isso surgiu de uma iniciativa do presidente da Confederação Brasileira de Automobilismo (CBA), Paulo \"Loco\" Figueiredo, do presidente da Comissão Nacional de Carros Clássicos e do jornalista Ricardo Caruso. O corpo de Pace chegou a Interlagos, onde foi sepultado ao lado do busto que ali se ergue em sua homenagem.\n[…]\nIsso faz de Pace o primeiro piloto falecido a ser sepultado em um circuito de corrida.\n[…]\nInterlagos sofreu reformas a serem entregues em 2015 ao custo de 130 milhões de reais para atender novas exigências da FIA. A pista foi inteiramente recapeada para o Grande Prêmio do Brasil de Fórmula 1 de 2014, assim como foram refeitas a entrada dos boxes e a área de escape da segunda perna do S do Senna. Para 2015, o paddock existente foi inteiramente remodelado. O então prefeito Fernando Haddad estudou construir novos boxes na reta oposta, porém a ideia foi abandonada.\n[…]\n«Autodromo Interlagos»\n[…]\n«Autódromo de Interlagos no WikiMapia»\n[…]\n«Classificados de Interlagos»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Interlagos_Circuit",
        "situacao": "ok",
        "texto": "The Autódromo José Carlos Pace, better known as Interlagos, is a 4.309 km (2.677 mi) motorsport circuit located in the city of São Paulo, Brazil. It was inaugurated on 12 May 1940, by the federal intervener of the state of São Paulo, Adhemar de Barros. In 1985, the circuit was renamed to honor the Formula 1 driver José Carlos Pace, who died in a plane crash in 1977. It is also his final resting pl\n[…]\nThe facilities also include a kart circuit named after Ayrton Senna.\n[…]\nInterlagos was renamed in 1985 to \"Autódromo José Carlos Pace\" in honor of the Brazilian Formula One driver José Carlos Pace, also known as \"Moco\", who died in a plane crash in 1977.\n[…]\nIn June 2012, further details of the proposed plans emerged, calling for the construction of a brand new pit building and the relocation of the start line from its current position between Arquibancadas and the Senna 'S' to Reta Oposta. However, later it was decided to keep start/finish straight at its current location along with the new pit building.\n[…]\nRace start is in the \"Tribunas\" section and features a long straight with an upward inclination, then comes \"S do Senna\" (the Senna S) [1,2], a pair of alternating downward turns (left then right) that exhibit different attack angles and inclinations.\n[…]\n\"S do Senna\" connects with \"Curva do Sol\" (Curve of the Sun) [3], a round-shaped large-radius left turn that leads to \"Reta Oposta\" (Opposite Straight) the track's longest (but not the fastest) straight. Reta Oposta is succeeded by a pair of downhill left turns that are called \"Descida do Lago\" (Lake's Descent) [4,5] into a short straight section that climbs up towards the back of the pit buildings.\n[…]\n'S' do Senna (Senna S) (1,2)\n[…]\nAs of April 2026, the fastest official lap records at the Autódromo José Carlos Pace are listed as:\n[…]\nAutodromo Jose Carlos Pace History and Statistics\n[…]\nAutódromo José Carlos Pace on Google Maps (Current Formula 1 Tracks)"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Interlagos",
      "descricao": "Autódromo José Carlos Pace, em São Paulo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Diferente da maioria dos circuitos da Fórmula 1, em Interlagos os carros dão a volta na pista em que sentido?",
    "resposta": "Anti-horário",
    "fonte": [
      "https://en.wikipedia.org/wiki/Interlagos_Circuit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Interlagos_Circuit",
        "situacao": "ok",
        "texto": "The Autódromo José Carlos Pace, better known as Interlagos, is a 4.309 km (2.677 mi) motorsport circuit located in the city of São Paulo, Brazil. It was inaugurated on 12 May 1940, by the federal intervener of the state of São Paulo, Adhemar de Barros. In 1985, the circuit was renamed to honor the Formula 1 driver José Carlos Pace, who died in a plane crash in 1977. It is also his final resting pl\n[…]\nInterlagos was renamed in 1985 to \"Autódromo José Carlos Pace\" in honor of the Brazilian Formula One driver José Carlos Pace, also known as \"Moco\", who died in a plane crash in 1977.\n[…]\nFormula One started racing at Interlagos in 1972, when the event was run as a non-championship race (won by Argentinean Carlos Reutemann). The first World Championship Brazilian Grand Prix was held there in 1973, and it was won by defending Formula One World Champion and São Paulo local Emerson Fittipaldi. Fittipaldi won the race again the following year, and José Carlos Pace won his only race at Interlagos in 1975.\n[…]\nIn August 2024, the body of José Carlos Pace was transferred from his vandalized mausoleum to the race circuit to be laid to rest in the race track named after him. The idea for this came from, and was organized by, the president of the Confederação Brasileira de Automobilismo (Brazilian Automobile Confederation) (CBA), Paulo \"Loco\" Figueiredo, the president of the Comissão Nacional de Carros Clássicos (National Classic Car Commission) and journalist Ricardo Caruso.\n[…]\nInternational Formula 3000 (2001–2002)\n[…]\nAs of April 2026, the fastest official lap records at the Autódromo José Carlos Pace are listed as:\n[…]\nInfo from the Official Formula 1 Website Archived 30 May 2013 at the Wayback Machine\n[…]\nInfo from BBC's circuit guide\n[…]\nAutodromo Jose Carlos Pace History and Statistics\n[…]\nAutódromo José Carlos Pace on Google Maps (Current Formula 1 Tracks)\n[…]\nGeographic data related to Interlagos Circuit at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aut%C3%B3dromo_de_Interlagos",
        "situacao": "ok",
        "texto": "Autódromo José Carlos Pace é um autódromo municipal localizado no distrito de Cidade Dutra, na Zona Sul do município brasileiro de São Paulo, e considerado um dos melhores e mais importantes circuitos de corrida do mundo. Pela proximidade com o bairro de Interlagos, situado no distrito vizinho do Socorro, é popularmente chamado de Autódromo de Interlagos.\n[…]\nEm 1985, foi renomeado para homenagear o piloto de Fórmula 1 José Carlos Pace, falecido em 1977. Anexo à sua construção, há o Kartódromo Municipal Ayrton Senna.\n[…]\nO circuito tem sentido anti-horário. Nesse autódromo são realizadas as principais competições de Automobilismo do Brasil. É conhecido internacionalmente por sediar a etapa do Grande Prêmio do Brasil de Fórmula 1 e os festivais de música Lollapalooza e The Town.\n[…]\nEm 1973, a prova já era válida pelo campeonato mundial de equipes e pilotos, sendo vencida pelo brasileiro Emerson Fittipaldi, da Lotus. Em 1975, o autódromo foi palco da primeira dobradinha de brasileiros na Fórmula 1: José Carlos Pace foi o vencedor, seguido de Fittipaldi. Até 1980, o autódromo recebeu o Grande Prêmio sucessivamente, com exceção de 1978 que foi no Autódromo de Jacarepaguá devido a reformas no circuito.\n[…]\nEm 2024 o autódromo foi interditado após a etapa da WEC para uma reforma orçada em 275 milhões de reais para a corrida da Fórmula 1 em novembro, com renovação completa do asfalto após 10 anos. Após este recapeamento, os tempos de volta caíram consideravelmente em diversas categorias; como exemplo, nas provas de carros turismo e GT que correram no mesmo ano em Interlagos, a queda foi de cerca de 1,5 a 2 segundos para a Porsche Cup e StockCar Pro Series.\n[…]\nO Autódromo de Interlagos foi palco do Grande Prêmio do Brasil de Fórmula 1 nos anos de: 1972 a 1977, 1979, 1980 e de 1990 até 2019. E, desde 2021 sedia o Grande Prêmio de São Paulo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Interlagos",
      "descricao": "Autódromo José Carlos Pace, em São Paulo."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Muito antes de receber a Fórmula 1, o autódromo de Interlagos, em São Paulo, foi inaugurado em que década?",
    "resposta": "Anos quarenta",
    "distratores": [
      "Anos trinta",
      "Anos cinquenta",
      "Anos sessenta"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Autódromo_José_Carlos_Pace",
      "https://en.wikipedia.org/wiki/Interlagos_Circuit"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Autódromo_José_Carlos_Pace",
        "situacao": "ok",
        "texto": "Autódromo José Carlos Pace é um autódromo municipal localizado no distrito de Cidade Dutra, na Zona Sul do município brasileiro de São Paulo, e considerado um dos melhores e mais importantes circuitos de corrida do mundo. Pela proximidade com o bairro de Interlagos, situado no distrito vizinho do Socorro, é popularmente chamado de Autódromo de Interlagos.\n[…]\nEm 1973, a prova já era válida pelo campeonato mundial de equipes e pilotos, sendo vencida pelo brasileiro Emerson Fittipaldi, da Lotus. Em 1975, o autódromo foi palco da primeira dobradinha de brasileiros na Fórmula 1: José Carlos Pace foi o vencedor, seguido de Fittipaldi. Até 1980, o autódromo recebeu o Grande Prêmio sucessivamente, com exceção de 1978 que foi no Autódromo de Jacarepaguá devido a reformas no circuito.\n[…]\nPorém, devido a problemas com liberação ambiental, o autódromo foi inviabilizado, garantindo assim que Interlagos assinasse um novo contrato com a Fórmula 1 para receber uma etapa da categoria até 2025, mas com o evento passando a se chamar Grande Prêmio de São Paulo.\n[…]\nEm agosto de 2024, o corpo de José Carlos Pace foi transferido de seu mausoléu vandalizado para o autódromo, onde foi sepultado no autódromo que leva seu nome. A ideia para isso surgiu de uma iniciativa do presidente da Confederação Brasileira de Automobilismo (CBA), Paulo \"Loco\" Figueiredo, do presidente da Comissão Nacional de Carros Clássicos e do jornalista Ricardo Caruso. O corpo de Pace chegou a Interlagos, onde foi sepultado ao lado do busto que ali se ergue em sua homenagem.\n[…]\nO Autódromo de Interlagos foi palco do Grande Prêmio do Brasil de Fórmula 1 nos anos de: 1972 a 1977, 1979, 1980 e de 1990 até 2019. E, desde 2021 sedia o Grande Prêmio de São Paulo.\n[…]\n↑1 (Última atualização: Grande Prêmio de São Paulo de 2026)Contabilizados somente os resultados válidos pelo Mundial de Fórmula 1."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Interlagos_Circuit",
        "situacao": "ok",
        "texto": "The Autódromo José Carlos Pace, better known as Interlagos, is a 4.309 km (2.677 mi) motorsport circuit located in the city of São Paulo, Brazil. It was inaugurated on 12 May 1940, by the federal intervener of the state of São Paulo, Adhemar de Barros. In 1985, the circuit was renamed to honor the Formula 1 driver José Carlos Pace, who died in a plane crash in 1977. It is also his final resting pl\n[…]\nInterlagos was renamed in 1985 to \"Autódromo José Carlos Pace\" in honor of the Brazilian Formula One driver José Carlos Pace, also known as \"Moco\", who died in a plane crash in 1977.\n[…]\nFormula One started racing at Interlagos in 1972, when the event was run as a non-championship race (won by Argentinean Carlos Reutemann). The first World Championship Brazilian Grand Prix was held there in 1973, and it was won by defending Formula One World Champion and São Paulo local Emerson Fittipaldi. Fittipaldi won the race again the following year, and José Carlos Pace won his only race at Interlagos in 1975.\n[…]\nIn August 2024, the body of José Carlos Pace was transferred from his vandalized mausoleum to the race circuit to be laid to rest in the race track named after him. The idea for this came from, and was organized by, the president of the Confederação Brasileira de Automobilismo (Brazilian Automobile Confederation) (CBA), Paulo \"Loco\" Figueiredo, the president of the Comissão Nacional de Carros Clássicos (National Classic Car Commission) and journalist Ricardo Caruso.\n[…]\nNovember: Formula One São Paulo Grand Prix, Porsche Cup Brasil, F4 Brazilian Championship\n[…]\nInternational Formula 3000 (2001–2002)\n[…]\nAs of April 2026, the fastest official lap records at the Autódromo José Carlos Pace are listed as:\n[…]\nInfo from the Official Formula 1 Website Archived 30 May 2013 at the Wayback Machine\n[…]\nAutodromo Jose Carlos Pace History and Statistics\n[…]\nAutódromo José Carlos Pace on Google Maps (Current Formula 1 Tracks)"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Emerson Fittipaldi",
      "descricao": "Piloto brasileiro bicampeão mundial de Fórmula 1, em 1972 e 1974, e bicampeão das 500 Milhas de Indianápolis."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 1972, Emerson Fittipaldi se tornou o campeão mundial de Fórmula 1 mais jovem até então. Com quantos anos?",
    "resposta": "Vinte e cinco anos",
    "distratores": [
      "Vinte e dois anos",
      "Vinte e oito anos",
      "Trinta e um anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Emerson_Fittipaldi",
      "https://pt.wikipedia.org/wiki/Emerson_Fittipaldi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emerson_Fittipaldi",
        "situacao": "ok",
        "texto": "Emerson Fittipaldi (Brazilian Portuguese: [ˈɛmeʁsõ fitʃiˈpawdʒi]; born 12 December 1946) is a Brazilian former racing driver and motorsport executive, who competed in Formula One from 1970 to 1980. Fittipaldi won two Formula One World Drivers' Championship titles,  in 1972 and 1974 with Lotus and McLaren, respectively; he won 14 Grands Prix across 11 seasons.\n[…]\nMoving up from Formula Two, Fittipaldi made his race debut for Team Lotus as a third driver at the 1970 British Grand Prix. After Jochen Rindt was killed at the 1970 Italian Grand Prix, the Brazilian became Lotus's lead driver in only his fifth Grand Prix. He enjoyed considerable success with Lotus, winning the World Drivers' Championship in 1972 at the age of 25. At the time, he was the youngest ever F1 world champion, and he held the record for 33 years.\n[…]\nIn early December 2012, Fittipaldi married economist Rossana Fanucchi in São Paulo after a partnership of eleven years. Their children include Emerson Jr.. Emerson Jr. competed in the 2021 F4 Danish Championship, finishing third overall.\n[…]\nHis daughter Juliana had two sons: Pietro and Enzo. Pietro and Enzo are also racing drivers, with Enzo being announced as a member of the Red Bull Junior Team in November 2022. Pietro made his Formula 1 debut at the 2020 Sakhir Grand Prix driving for the Haas F1 Team. For 2024, he was signed to run a full IndyCar schedule with Rahal Letterman Lanigan Racing.\n[…]\nMario Andretti, Nigel Mansell, and Jacques Villeneuve – Formula One and CART champions\n[…]\nLudvigsen, Karl (2002). Emerson Fittipaldi Heart of a Racer. Osceola: Motorbooks International. ISBN 1-85960-837-X.\n[…]\nEmerson Fittipaldi at IMDb\n[…]\nEmerson Fittipaldi career summary at DriverDB.com\n[…]\nEmerson Fittipaldi driver statistics at Racing-Reference\n[…]\nEmerson embracing social media Archived 19 August 2016 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Emerson_Fittipaldi",
        "situacao": "ok",
        "texto": "Emerson Fittipaldi (São Paulo, 12 de dezembro de 1946) é um ex-automobilista e empresário brasileiro.\n[…]\nÉ um dos pilotos mais vitoriosos da história brasileira, e foi o primeiro brasileiro a se tornar campeão mundial de Fórmula 1 e em categorias de ponta no automobilismo internacional, abrindo portas para vários compatriotas. Fittipaldi foi campeão da Fórmula 3 Inglesa em 1969, foi bicampeão da Fórmula 1 em 1972 e 1974, campeão da Fórmula Indy em 1989 e bicampeão das 500 milhas de Indianápolis em 1989 e 1993.\n[…]\nO ano de 1971 não viu vitórias de Emerson, embora sua atuação consistente lhe tenha garantido três pódios. Em 1972, com 5 vitórias, Fittipaldi tornou-se o campeão mundial mais jovem da história da Fórmula 1, com 25 anos, oito meses e 29 dias, recorde que manteve por mais de três décadas e que só foi quebrado em 2005, pelo piloto espanhol Fernando Alonso. Em 1973, Emerson venceu mais 3 corridas, no entanto perdeu o título para o escocês Jackie Stewart.\n[…]\nA partir de então houve um declínio técnico na equipe, e, ao final de 1980, no mesmo circuito de Watkins Glen onde vencera sua primeira prova, Emerson Fittipaldi retirou-se da Fórmula 1 como piloto; naquele ano, ele conseguiu o último pódio com o 3º lugar em Long Beach, tendo o compatriota Nelson Piquet como vencedor, e conquistado a primeira vitória na categoria.\n[…]\nFoi durante mais de 30 anos (desde 1972) o mais jovem campeão mundial de Fórmula 1 de todos os tempos até sua marca ser batida em 2005 por Fernando Alonso que, por sua vez, foi batido por Lewis Hamilton em 2008, que foi batido por Sebastian Vettel em 2010."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Niki Lauda",
      "descricao": "Piloto austríaco tricampeão mundial de Fórmula 1, em 1975, 1977 e 1984."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 1984, Niki Lauda conquistou seu terceiro título mundial derrotando o companheiro Alain Prost por qual diferença de pontos?",
    "resposta": "Meio ponto",
    "distratores": [
      "Um ponto",
      "Dois pontos",
      "Três pontos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Niki_Lauda",
      "https://en.wikipedia.org/wiki/1984_Formula_One_World_Championship"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Niki_Lauda",
        "situacao": "ok",
        "texto": "Andreas Nikolaus \"Niki\" Lauda (22 February 1949 – 20 May 2019) was an Austrian racing driver, motorsport executive, and aviation entrepreneur, who competed in Formula One from 1971 to 1979 and from 1982 to 1985. Lauda won three Formula One World Drivers' Championship titles and—at the time of his retirement—held the record for most podium finishes (54); he won 25 Grands Prix across 13 seasons, and\n[…]\nLauda won a third world championship in 1984 by half a point over teammate Alain Prost, due only to half points being awarded for the shortened 1984 Monaco Grand Prix. His Austrian Grand Prix victory that year is so far the only time an Austrian has won his home Grand Prix. Initially, Lauda did not want Prost to become his teammate, as he presented a much faster rival.\n[…]\nIn late 2003, he started a new airline, Niki. Similar to Lauda Air, Niki  merged with its major partner Air Berlin in 2011. In early 2016, Lauda took over chartered airline Amira Air and renamed the company LaudaMotion. As a result of Air Berlin's insolvency in 2017, LaudaMotion took over the Niki brand and asset after an unsuccessful bid by Lufthansa and IAG. Lauda held an airline transport pilot's licence and from time to time acted as a captain on the flights of his airline.\n[…]\nLauda's funeral at St. Stephen's Cathedral in Vienna was attended by prominent Formula One figures, including Gerhard Berger, Toto Wolff, Jackie Stewart, former FIA president Jean Todt, Alain Prost, Nelson Piquet, Jean Alesi, Lewis Hamilton, David Coulthard, Nico Rosberg, Valtteri Bottas, René and Hans Binder, and René Rast. Arnold Schwarzenegger and Austrian politicians, including Alexander Van der Bellen, also attended.\n[…]\nLauda, Niki (1984). The New Formula One: A Turbo Age. Osceola, Wis.: Motorbooks International. ISBN 9780879381790. OCLC 10456956.\n[…]\nHunt–Lauda rivalry\n[…]\nLauda Air Italy\n[…]\nNiki Lauda at IMDb\n[…]\nNiki Lauda discography at Discogs"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1984_Formula_One_World_Championship",
        "situacao": "ok",
        "texto": "The 1984 FIA Formula One World Championship was the 38th season of Fédération Internationale de l'Automobile (FIA) Formula One motor racing. It featured the 1984 Formula One World Championship for Drivers and the 1984 Formula One World Championship for Manufacturers, both of which commenced on 25 March and ended on 21 October after sixteen races.\n[…]\nIn the Drivers' Championship, McLaren teammates Alain Prost and Niki Lauda enjoyed a season-long duel. Prost won seven races to equal Jim Clark's record from 1963, over Lauda's five, but the Austrian eventually prevailed by half a point – the smallest margin in Formula One history. It was Lauda's third title, but his first since 1977, breaking the record of six years between World Championship victories set by Jack Brabham in 1966.\n[…]\nIn addition to a frantic start, drivers had to deal with people running across the track with the cars bearing down on those people; Briton Derek Warwick in the French factory Renault led until an incident with Niki Lauda led to suspension failure; Frenchman Alain Prost won his first Grand Prix with McLaren at the flat and rough but fast Rio circuit. This was also Ayrton Senna's first Formula One race, he was driving for the Toleman team.\n[…]\nAfter the race restarted, Prost retired with gearbox failure, Piquet pitted and lost a lap on the leaders. So victory went to Niki Lauda. Warwick finished 2nd and Ayrton Senna finished 3rd in the Toleman, which was better suited to faster tracks with long corners like Brands Hatch than it was to slow and tight circuits.\n[…]\nAs of 1984, Prost (future winner of four World Championships) had lost his 3rd consecutive F1 championship: he had been beaten by 2 points in 1983, and 7 points in 1982.\n[…]\n1984 Formula 1 World Championship results and images from f1-facts.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Niki_Lauda",
        "situacao": "ok",
        "texto": "Andreas Nikolaus \"Niki\" Lauda (Viena, 22 de fevereiro de 1949 – Zurique, 20 de maio de 2019), mais conhecido como Niki Lauda, foi um automobilista e piloto austríaco. Participou do Campeonato Mundial de Fórmula 1 entre 1971 a 1979 e de 1982 a 1985, disputando 177 Grandes Prêmios, obtendo 25 vitórias, 24 pole positions e 24 melhores voltas, totalizando 420,5\n[…]\nLauda ainda voltaria a correr no mesmo ano de 1976 e só perderia o título mundial na última corrida, o Grande Prêmio do Japão (estreia no calendário) para o inglês James Hunt. Em 1977, obteve 3 vitórias e recuperou o título mundial.\n[…]\nAo final daquele ano, abandonaria a Ferrari para juntar-se à Brabham-Alfa Romeo, dirigida por Bernie Ecclestone. A parceria lhe rendeu duas vitórias e cinco pódios em 1978, mas a frequência de quebras o deixou fora da disputa pelo título. Em 1979, marcou apenas quatro pontos. Os maus resultados fizeram Lauda voltar suas atenções para a companhia aérea que acabara de fundar e, assim, deixou a Fórmula 1.\n[…]\nPara a temporada de 1984, iniciou o ano desacreditado, e seu companheiro de equipe, o francês Alain Prost, era o favorito ao título. Após 5 vitórias (contra 7 de Prost), Lauda seria campeão mundial pela terceira vez, com apenas meio ponto de vantagem (Prost marcara apenas metade dos pontos - 4,5 - da vitória do Grande Prêmio de Mônaco, (encerrado prematuramente por causa da chuva).\n[…]\nEm 2013, o filme Rush contou a história do campeonato mundial de 1976 e a disputa do título entre Niki Lauda e James Hunt. Seu intérprete nessa produção foi o ator alemão Daniel Brühl.\n[…]\n↑1  Foi atribuído metade dos pontos, porque o número de voltas não alcançou 75% de sua distância percorrida. Lauda terminou em 6º lugar e marcou 0,5 ponto.\n[…]\nLauda Air\n[…]\nDeutsche Welle - 1976: Piloto Niki Lauda sofre acidente em Nürburgring\n[…]\nNiki Lauda: A Lenda do Automobilismo e Seus Desafios",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Nigel Mansell",
      "descricao": "Piloto inglês, campeão mundial de Fórmula 1 em 1992 pela Williams."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 1992, a caminho do título pela Williams, Nigel Mansell venceu seguidas quantas das primeiras corridas da temporada?",
    "resposta": "Cinco",
    "distratores": [
      "Três",
      "Quatro",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1992_Formula_One_World_Championship",
      "https://en.wikipedia.org/wiki/Nigel_Mansell"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1992_Formula_One_World_Championship",
        "situacao": "ok",
        "texto": "The 1992 Formula One World Championship was the 46th season of FIA Formula One motor racing. It featured the 1992 Formula One World Championship for Drivers and the 1992 Formula One World Championship for Constructors, which were contested concurrently over a sixteen-race series that commenced on 1 March and ended on 8 November. Nigel Mansell, in what would prove to be his final full season in For\n[…]\nMansell made it five wins out of five with Patrese making it one more Williams 1–2 ahead of Senna, Brundle, Alboreto and Martini.\n[…]\nWith two more races to go, Mansell was already World Champion with 108 points but there was a big battle for second. Senna was second with 50, Schumacher was third with 47, Patrese was fourth with 46, Berger was fifth with 33, Brundle was sixth with 30, Alesi was seventh with 13, and Häkkinen was eighth with 11. In the Constructors' Championship, Williams was the World Champion with 154 points. McLaren was second with 83, Benetton was third with 77, and Ferrari was fourth with 16.\n[…]\nBefore the race at Suzuka in Japan, Ferrari had dropped Capelli who had a poor season and replaced him with Nicola Larini. In qualifying, the Williamses showed their class with Mansell taking pole ahead of Patrese, Senna, Berger, Schumacher and Herbert. At the start, there were no changes at the front and Mansell still led Patrese, Senna, Berger, Schumacher and Herbert.\n[…]\nAt the end of the season, Mansell was named world champion with 108 points with Patrese edging out the battle for second with 56, Schumacher third with 53, Senna fourth with 50, Berger fifth with 49, Brundle sixth with 38, Alesi seventh with 18 and Häkkinen eighth with 11. In the Constructors' Championship, Williams was dominant champion with 164 points, McLaren just edging out second with 99, Benetton a close third with 91, and Ferrari fourth with 21.\n[…]\n1992 Formula One results and images at f1-facts.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nigel_Mansell",
        "situacao": "ok",
        "texto": "Nigel Ernest James Mansell (; born 8 August 1953) is a British former racing driver who competed in Formula One from 1980 to 1995. Mansell won the Formula One World Drivers' Championship in 1992 with Williams, and won 31 Grands Prix across 15 seasons. In American open-wheel racing, Mansell won the IndyCar World Series in 1993 with Newman/Haas Racing, and remains the only driver to have simultaneou\n[…]\nWhilst being world champion, Mansell had a public disagreement with Williams. In his autobiography, Mansell writes that this was because of a deal made at the previous Hungarian Grand Prix, which Williams reneged on, and the prospect of his former Ferrari teammate Alain Prost, who had sat out the 1992 season, being his teammate on Williams for the 1993 season.\n[…]\nAccording to Mansell, Williams had initially neglected to tell Mansell that Prost had signed for 1993 at only the second race of the 1992 season in Mexico, a position that Mansell felt would be similar to their days together at Ferrari in 1990.\n[…]\nIn 1994, after the CART season ended, Mansell returned to F1 and re-joined the Williams team. Since he had left it in 1992, the team had undergone some significant changes. Damon Hill had been promoted from test driver and was running full-time in one car. Prost, Mansell's replacement, won the 1993 Drivers' Championship and then retired after the season.\n[…]\nMansell and Williams: Challenge for the Championship (1991)\n[…]\nThere were three video games endorsed by Mansell: Nigel Mansell's Grand Prix (1988, Martech), Nigel Mansell's World Championship Racing (1993, Gremlin Graphics), and Newman/Haas IndyCar (1994). Mansell also appeared as a playable driver for Williams in Codemasters' F1 2013.\n[…]\nMansell, Nigel My Autobiography Collins Willow ISBN 0-00-218497-4\n[…]\nNigel Mansell at IMDb\n[…]\nNigel Mansell career summary at DriverDB.com\n[…]\nNigel Mansell driver statistics at Racing-Reference"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_F%C3%B3rmula_1_de_1992",
        "situacao": "ok",
        "texto": "A Temporada de Fórmula 1 de 1992 foi a 43.ª realizada pela FIA, decorrendo entre 1º de março a 8 de novembro de 1992, com dezesseis corridas.\n[…]\nTeve como campeão o britânico Nigel Mansell, da equipe Williams, sendo vice-campeão o italiano Riccardo Patrese, também da Williams.\n[…]\nMcLaren: manteve o tricampeão Ayrton Senna e o austríaco Gerhard Berger pela terceira temporada seguida.\n[…]\nWilliams: igualmente continuou Nigel Mansell e Riccardo Patrese. O italiano disputaria sua última temporada pela escuderia de Grove neste ano.\n[…]\nBenetton: manteve Michael Schumacher, em sua primeira temporada completa na categoria, agora fazendo dupla com Martin Brundle, que substituiu Nelson Piquet.\n[…]\nDallara: mantém J.J. Lehto e troca Emanuele Pirro por Pierluigi Martini, que disputaria sua única temporada completa fora da equipe Minardi (participara de uma corrida pela Toleman em 1984.\n[…]\nFootwork: substitui Alex Caffi por Aguri Suzuki e mantém Michele Alboreto pela terceira temporada seguida.\n[…]\nAinda no fundo do grid, a equipe Jordan assumiu um risco, substituindo os dois pilotos após a sua bem sucedida temporada de estreia. Eddie Jordan também trocou os motores Ford V8 pelos Yamaha V12 de vez. A Brabham passou a contar com a a italiana Giovanna Amati, a primeira mulher a correr na F1 desde a sul-africana Desiré Wilson em 1980, porém não conseguiu se classificar para nenhuma corrida.\n[…]\nEsta foi a primeira de duas temporadas (a outra foi em 1993) na história da Fórmula 1 em que o calendário tinha corridas em todos os seis continentes habitados (1 corrida cada na Ásia, Oceania, América do Sul e África; 2 na América do Norte e 11 na Europa).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Nigel Mansell",
      "descricao": "Piloto inglês, campeão mundial de Fórmula 1 em 1992 pela Williams."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1986, na última corrida do ano, na Austrália, Nigel Mansell estava a caminho do título quando perdeu a chance. O que aconteceu com seu carro?",
    "resposta": "Um pneu estourou",
    "fonte": [
      "https://en.wikipedia.org/wiki/1986_Australian_Grand_Prix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1986_Australian_Grand_Prix",
        "situacao": "ok",
        "texto": "The 1986 Australian Grand Prix was a Formula One motor race held on 26 October 1986 at the Adelaide Street Circuit, Adelaide, Australia. It was the sixteenth and final race of the 1986 Formula One World Championship. The race decided a three-way battle for the Drivers' Championship between Brit Nigel Mansell, driving a Williams-Honda; his Brazilian teammate Nelson Piquet; and Frenchman Alain Prost\n[…]\nGoing into the race, three drivers were in contention for the World Championship. Nigel Mansell, driving a Williams-Honda, led with 70 points, while reigning champion Alain Prost, driving a McLaren-TAG, was second on 64 and Mansell's teammate Nelson Piquet was third on 63.\n[…]\nThe Australian Grand Prix also saw Tambay's Lola and the Lotus of Johnny Dumfries each carrying an onboard camera for television use. During qualifying, Martin Brundle's Tyrrell-Renault was timed at a fastest of all 205 mph (330 km/h) on the 900 metre long Brabham Straight.\n[…]\nProst had just passed Mansell for third which became second when Rosberg retired, with Piquet now leading. Mansell only needed a third-place finish to win the championship.\n[…]\nMansell was still in third position when, on lap 64, his left rear tyre exploded at 290 km/h (180 mph) on the high-speed Brabham Straight as he was lapping Alliot's Ligier, sending a shower of sparks flying behind him and severely damaging his left rear suspension. The Williams coasted to a stop in the run-off area at the end of the straight, Mansell managing to avoid hitting anything. Fearing the same happening to the second car, Williams called Piquet to the pits and Prost took the lead.\n[…]\nBy winning, Prost became the first and so far only driver to ever win the Australian Grand Prix in both non-championship and World Championship form, having won the non-championship 1982 Australian Grand Prix run for Formula Pacific cars at the Calder Park Raceway in Melbourne."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Austr%C3%A1lia_de_1986",
        "situacao": "ok",
        "texto": "Resultados do Grande Prêmio da Austrália de Fórmula 1 realizado em Adelaide em 26 de outubro de 1986. Décima sexta etapa do campeonato, nele a vitória de Alain Prost, da McLaren-TAG/Porsche, garantiu o bicampeonato mundial ao francês. Nelson Piquet foi o segundo pela Williams-Honda e Stefan Johansson o terceiro pela Ferrari.\n[…]\nUma corrida emocionante com Nigel Mansell, Alain Prost e Nelson Piquet disputando o Campeonato na última prova. O finlandês Keke Rosberg da McLaren, que liderava a prova e serviu para forçar o ritmo dos pilotos da Williams, abandona na sua última prova na categoria com o pneu traseiro se desfazendo em tiras.\n[…]\nNigel Mansell, que tinha tudo para ser campeão com o terceiro lugar, tem o pneu traseiro esquerdo do seu carro estourado na reta Brabham. O piloto britânico da Williams consegue controlar com habilidade o carro com apenas três rodas em plena reta, mas ele é obrigado a abandonar no final da reta na área de escape. Ia a chance de ganhar a primeira na carreira.\n[…]\nNo momento Nelson Piquet é o campeão, porque está em primeiro e com Alain Prost em segundo; porém, o piloto brasileiro da Williams não parou nos boxes para colocar novo jogo de pneus enquanto o francês da McLaren já tinha feito. Se Piquet fosse para os boxes, inevitavelmente perderia o título. O piloto da Williams reluta à comunicação da equipe, mas acaba cedendo em função do ocorrido com o seu companheiro de equipe. Com novo jogo de pneus, Piquet volta dezoito segundos atrás de Prost.\n[…]\nChega a encurtar a diferença, mas o piloto francês consegue responder nas voltas seguintes. Alain Prost vence a corrida e é bicampeão mundial de Fórmula 1, Piquet chega em segundo, mas de quatro segundos atrás e termina o campeonato em terceiro lugar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Richard Petty",
      "descricao": "Piloto americano de stock car apelidado de 'o Rei', heptacampeão da NASCAR Cup Series."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na carreira, o americano Richard Petty venceu quantas corridas na principal divisão da NASCAR?",
    "resposta": "Duzentas",
    "distratores": [
      "Cento e vinte",
      "Cento e cinquenta",
      "Duzentas e cinquenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Richard_Petty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Richard_Petty",
        "situacao": "ok",
        "texto": "Richard Lee Petty (born July 2, 1937), nicknamed \"the King\", is an American former stock car racing driver who competed from 1958 to 1992 in the former NASCAR Grand National and Winston Cup Series (now called the NASCAR Cup Series), most notably driving the No. 43 Plymouth/Pontiac for Petty Enterprises. He is one of the members of the Petty racing family.\n[…]\nIn early 1988, Petty traveled to Australia to help promote a NASCAR exhibition race at the then new Calder Park Thunderdome, the first NASCAR race outside of North America. While he did not compete in the track's inaugural race, the Goodyear NASCAR 500 (though his son Kyle did), Richard Petty, in testing at the 1.119 mi (1.801 km) track which owner Bob Jane had modeled on the Charlotte Motor Speedway, set an unofficial lap record of 28.2 seconds (142.85 mp/h).\n[…]\nThe Richard Petty Driver of the Year Award is given out by the National Motorsports Press Association to recognize the NASCAR season’s most outstanding driver.\n[…]\nPetty was inducted into the International Motorsports Hall of Fame in 1997, the National Motorsports Press Association Hall of Fame in 1998, and was an inaugural inductee into NASCAR Hall of Fame in 2010. Making him one of 20 racers to compete the \"triple crown\" of America’s auto racing halls of fame. He was sole stock car representative in the first class inducted into the Motorsports Hall of Fame of America in 1989.\n[…]\nOn March 31, 2015 governor Pat McCrory declared \"Richard Petty\" day in the state of North Carolina. In 2017, Black Mountain, North Carolina named a bridge in his honor.\n[…]\nRichard and Lynda had four children, including Kyle Petty. The family resides in Petty's home town of Level Cross, North Carolina.\n[…]\nRichard Petty driver statistics at Racing-Reference\n[…]\nRichard Petty Gives a Tour of Petty Enterprises\n[…]\nRichard Petty at IMDb\n[…]\nRichard Petty discography at Discogs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Richard_Petty",
        "situacao": "ok",
        "texto": "Richard Lee Petty, conhecido como The King (\"O Rei\") (Condado de Randolph, 2 de julho de 1937) é um piloto automobilístico estadunidense aposentado. Foi o primeiro piloto a ser 7 vezes campeão da NASCAR, também detém o recorde de 200 vitórias na categoria. É considerado por muitos americanos o maior piloto americano de todos os tempos.\n[…]\nDisputou a imensa maioria de suas corridas pela equipe Petty Enterprises da família, usando o número 43 e um corpo pintado geralmente de azul claro com vermelho. Seu pai, Lee Petty, seu filho Kyle Petty e seu neto Adam Petty (falecido em 2000), também foram pilotos da NASCAR.\n[…]\nPetty começou sua carreira em 1958, com 21 anos. Em 1959, ele era o Rookie of the Year na NASCAR. Sua primeira vitória foi em Southern States Fairgrounds], em 1960. Seu segundo título em 1967 sucedeu com um recorde de 27 vitórias em 48 disputadas, dez deles consecutivos. Nesse ano foi a única vez que conseguiu vencer as 500 milhas de sul de Darlington. Em 1975, alcançado o mesmo registro mas da era moderna, com 13 vitórias em 30 corridas.\n[…]\nA última temporada de Petty na categoria foi em 1992, que disputou a temporada inteira. Além disso, ele jogou a International Race of Champions desde a sua temporada inaugural em 1974 até 1978 e, em seguida, 1989. Petty terminou em quinto em 1978 e sexto em 1977. Aposentou-se como piloto em 1992, aos 55 anos.\n[…]\nAlém da NASCAR, Petty forneceu apoio a John Andretti (Dreyer & Reinbold Racing) e Davey Hamilton (Kingdom Racing) nas 500 Milhas de Indianápolis de 2009. Foi a única experiência do heptacampeão da NASCAR na IndyCar Series em sua carreira, uma vez que ele nunca participou de uma edição das 500 Milhas como piloto.\n[…]\nLee Petty\n[…]\nEstatísticas de Richard Petty por temporada desde 1958 quando começou até 1992\n[…]\nRichard Petty Gives a Tour of Petty Enterprises",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Ingo Hoffmann",
      "descricao": "Piloto brasileiro que correu na Fórmula 1 pela Copersucar e foi o maior campeão da Stock Car brasileira."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Ex-piloto da Copersucar na Fórmula 1, Ingo Hoffmann foi campeão da Stock Car brasileira quantas vezes?",
    "resposta": "Doze",
    "distratores": [
      "Oito",
      "Dez",
      "Quinze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ingo_Hoffmann",
      "https://en.wikipedia.org/wiki/Ingo_Hoffmann"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ingo_Hoffmann",
        "situacao": "ok",
        "texto": "Ingo Ott Hoffmann  (São Paulo, 28 de fevereiro de 1953) é um automobilista brasileiro. Hoffmann competiu na Fórmula 1 pela equipe Copersucar-Fittipaldi por 6 corridas só conseguindo largar em 3 delas e não pontuou. Ele é o maior campeão da história do Campeonato Brasileiro de Stock Car, com doze títulos. Os doze títulos foram nos anos de 1980, 1985, 1989, 1990, 1991, 1992, 1993, 1994, 1996, 1997, \n[…]\nCorreu na Stock Car desde seu início em 1979 e a temporada de 2008 foi a sua temporada de despedida. Com isso é um dos pilotos que mais temporadas participou da Stock Car (30 temporadas em 30 anos de Stock Car). Seu carro era em 2008 o de número 17, da equipe AMG, modelo Mitsubishi Lancer. Foi campeão com os carros Opala, Ômega e Vectra.\n[…]\nAo final do ano de 2008, após 30 anos na Stock Car e 12 títulos na categoria, Ingo Hoffmann se aposentou das corridas de automóveis, obtendo em sua última corrida na Stock Car o 3º lugar no GP de Interlagos, vencido pelo piloto Thiago Camilo, e que consagrou como campeão da temporada o piloto Ricardo Maurício e como vice o paulista Marcos Gomes.\n[…]\nIngo recebeu diversas homenagens por todas as conquistas em sua carreira; numa das homenagens, recebeu de presente o Opala com o qual foi campeão pela primeira vez na Stock Car em 1980, totalmente reformado nos boxes de Interlagos no fim de semana de sua última corrida e sem que ele soubesse. A surpresa foi feita por seu então parceiro, o paranaense Lico Kaesemodel, a quem ele tem como a um filho.\n[…]\nApesar da aposentadoria como piloto, Ingo Hoffmann continua ligado ao automobilismo, trabalhando como chefe de uma equipe da Stock Car a partir de 2009.\n[…]\nLista de pilotos brasileiros na Fórmula 1\n[…]\nInstituto Ingo Hoffmann\n[…]\nArtigo sobre a carreira internacional de Ingo Hoffmann em automobilismobrasileiro.com\n[…]\n«Career summary - Ingo Hoffmann» (em inglês)\n[…]\nResenha da biografia de Ingo Hoffmann"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ingo_Hoffmann",
        "situacao": "ok",
        "texto": "Ingo Ott Hoffmann (born 28 February 1953) is a Brazilian retired racing driver from São Paulo. He is most well known for winning the Brazilian Stock Car Championship 12 times (1980, 1985, 1989–1994, 1996–1998 and 2002). He also participated in six Formula One Grands Prix, debuting on 25 January 1976. He scored no championship points.\n[…]\nHoffman began his career in Brazil competing in Formula Vee and saloon cars. He came to England in 1975 and competed in Formula Three in a March, before moving into Formula One in 1976.\n[…]\nHoffmann's Formula One career was hindered by the financial problems of the Fittipaldi team, and he drove the team's second car when realistically the team could only afford to run one. This meant Hoffmann only entered certain selected races, and ultimately the second car was dropped altogether. He entered four Grands Prix in 1976, did not qualify for three of them and an eleventh place at Interlagos was the best result achieved.\n[…]\nIn 1977, Hoffman competed at Buenos Aires (retired, engine) and again at Interlagos where he finished seventh, two laps behind the winner. However, that was Hoffman's last race in Formula One, as the second Fittipaldi entry was withdrawn.\n[…]\nWith the end of his Formula One career, Hoffmann competed in Formula 2 for Project Four with a Ralt and a March in 1977 and 1978, (which was his last year in Europe). He also competed in sports cars and saloon cars both in Europe and in South America.\n[…]\nNotably, Hoffmann has won the Brazilian Stock Car Championship 12 times (1980, 1985, 1989-1994, 1996-1998 and 2002). In 2006 December, he took his 100th win (of the races in the Brazilian circuits) at the Autódromo Internacional Nelson Piquet de Brasília, final race of the 2006 season.\n[…]\nInstituto Ingo Hoffmann\n[…]\nEntrevista com Ingo Hoffman - an interview about his career"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "500 Milhas de Indianápolis",
      "descricao": "Corrida anual disputada no oval de Indianápolis, nos Estados Unidos, desde 1911."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas voltas no oval os pilotos precisam completar para terminar as 500 Milhas de Indianápolis?",
    "resposta": "Duzentas",
    "distratores": [
      "Cento e cinquenta",
      "Duzentas e cinquenta",
      "Quinhentas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Indianapolis_500"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Indianapolis_500",
        "situacao": "ok",
        "texto": "The Indianapolis 500, commonly shortened to Indy 500, is an automobile race held annually at the Indianapolis Motor Speedway in Speedway, Indiana, United States, an enclave suburb of Indianapolis. The event is traditionally held over Memorial Day weekend, usually the last weekend of May. It is contested as part of the IndyCar Series, which is the top level of American open-wheel car racing, a form\n[…]\nAfter the Indy 500, drivers would catch a helicopter directly from the Speedway to Indianapolis International Airport. From there they would fly to Concord Regional Airport, and ride a helicopter to the NASCAR race. John Andretti, Tony Stewart, Robby Gordon, Kyle Larson, and Katherine Legge attempted the feat, with Katherine Legge being the latest in 2026. In 2001, Tony Stewart became the first and to date only driver to complete the full race distance (1,100 miles) in both races on the same day.\n[…]\nIt was announced on March 4, 2014, that Kurt Busch would attempt to qualify for the 2014 Indianapolis 500, driving a fifth car for the Andretti Autosport team. Busch completed all 500 miles at Indy to finish sixth but dropped out of the 600 with a blown engine just past the 400-mile mark.\n[…]\nIn contrast with the usual sell-out policy, in 2020, the race aired live on WTHR, as the Speedway ran the first three meetings (NASCAR in July, the Indianapolis 500 in August, and Road to Indy in September) behind closed doors as a result of COVID-19 cases in the state (the third INDYCAR meeting, the October road course races, admitted 10,000 spectators each day).\n[…]\nIndianapolis 500 by year\n[…]\nList of Indianapolis 500 broadcasters\n[…]\nList of female Indianapolis 500 drivers\n[…]\nTerry Reed. Indy: The Race and Ritual of the Indianapolis 500. 2nd ed. Potomac Books, Inc.; 2005. ISBN 978-1-57488-907-9.\n[…]\nImages from the Ralph J. Satterlee Indianapolis 500 Photographs Collection, Ball State University Digital Media Repository"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/500_Milhas_de_Indian%C3%A1polis",
        "situacao": "ok",
        "texto": "As 500 Milhas de Indianápolis, também conhecidas como Indianapolis 500 ou simplesmente Indy 500, são uma das corridas automobilísticas mais tradicionais do mundo e a principal prova do campeonato da IndyCar (conhecida no Brasil como Fórmula Indy), realizada no Indianapolis Motor Speedway, nos Estados Unidos. Este evento é considerado uma das maiores corridas do planeta e é promovido como The Great\n[…]\nPilotos como John Andretti, Davy Jones, Tony Stewart e Robby Gordon tentaram essa façanha, assim como Kurt Busch em 2014 e Kyle Larson nas 500 Milhas de Indianápolis de 2024 porém não teve largada em Charlotte pelo fato da Indy 500 ter sido postergada. Em 27 de maio de 2001, Tony Stewart se tornou o primeiro piloto a completar a distância combinada das duas corridas, totalizando 1 100 milhas (1 800 km) que é o chamado double duty(dupla jornada) no mesmo dia.\n[…]\nO piloto completou as 200 voltas da Indy 500, terminando em quinto lugar pela Chip Ganassi Racing, e, em seguida, viajou cerca de 860 quilômetros até a Carolina do Norte para correr as 400 voltas da Coca-Cola 600, onde terminou em terceiro lugar pela Joe Gibbs Racing.\n[…]\nNa corrida inaugural de 1994, participaram dois vencedores das 500 Milhas de Indianápolis: A. J. Foyt e Danny Sullivan. Juan Pablo Montoya e Jacques Villeneuve são os únicos pilotos a disputarem a Indy 500, a Brickyard 400 e o Campeonato Mundial de Fórmula 1 (incluindo o Grande Prêmio dos Estados Unidos). Montoya detém o melhor desempenho combinado nas duas corridas, com duas vitórias na Indy 500 e um segundo lugar na Brickyard 400.\n[…]\nA lista considera que o amplo domínio da corrida ocorre quando um piloto inscrito consegue liderar três quartos (3/4, 75% ou 150 voltas) das 500 Milhas de Indianápolis.\n[…]\nMenor número de voltas lideradas por um vencedor das 500 Milhas de Indianápolis até 2015\n[…]\nVenceu as 500 milhas de Indianápolis e das 500 Milhas de Daytona\n[…]\nDaytona 500",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Michael Schumacher",
      "descricao": "Piloto alemão heptacampeão mundial de Fórmula 1."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Michael Schumacher encerrou a carreira, em 2012, com quantas vitórias em Grandes Prêmios de Fórmula 1?",
    "resposta": "Noventa e uma",
    "distratores": [
      "Setenta e duas",
      "Oitenta e quatro",
      "Cento e três"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Michael_Schumacher"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michael_Schumacher",
        "situacao": "ok",
        "texto": "Michael Schumacher (German: [ˈmɪçaʔeːl ˈʃuːmaxɐ] ; born 3 January 1969) is a German former racing driver who competed in Formula One from 1991 to 2006 and from 2010 to 2012. Schumacher won a record-setting seven Formula One World Drivers' Championship titles, tied by Lewis Hamilton in 2020, and—at the time of his retirement—held the records for most wins (91), pole positions (68), and podium finis\n[…]\nBrawn said that \"Michael's contribution to our development and the future of our team has been significant\", and observed: \"In my opinion, he is the greatest Formula One driver, and the records which he holds in our sport speak volumes for his success and commitment.\" Brawn also stated that had Schumacher not retired in 2012 and not suffered a ski injury in 2013, he would have had a chance at winning his eighth World Championship in 2014.\n[…]\nBefore his skiing accident in 2013, Schumacher's main hobbies included horse riding, motorcycle racing, sky diving, and playing football for his local team FC Echichens. Schumacher appeared in several charity football games, and organised games between Formula One drivers. In 2008, Schumacher declined an offer from Sammarinese football club SS Murata to join their squad for their upcoming UEFA Champions League qualifying matches. He is a supporter of 1.\n[…]\nMichael Schumacher Racing World Kart 2002\n[…]\nHilton, Christopher (2003). Michael Schumacher: The greatest of all. Haynes. ISBN 978-1-84425-044-8.\n[…]\nHilton, Christopher (2006). Michael Schumacher: The Whole Story. Haynes. ISBN 978-1-84425-008-0.\n[…]\nKehm, Sabine (2003). Michael Schumacher. Driving Force. Random House. ISBN 978-0-09-189435-1.\n[…]\nMol, Olav; Houben, Erik (2025). Michael Schumacher: De Formule 1-legende (in Dutch). Amsterdam: Uitgeverij Het Spectrum. ISBN 978-9-0003-9342-8.\n[…]\nMichael Schumacher career summary at DriverDB.com\n[…]\nMichael Schumacher driver statistics at Racing-Reference\n[…]\nFormula1.com Profile"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Michael_Schumacher",
        "situacao": "ok",
        "texto": "Michael Schumacher (pronúncia alemã: ; (Hürth, 3 de janeiro de 1969) é um ex-automobilista alemão, sete vezes campeão da Fórmula 1 e detentor de inúmeros recordes, incluindo voltas mais rápidas e maior número de campeonatos (ao lado de Lewis Hamilton). Em 2002 tornou-se o único piloto na história da F1 a terminar entre os três primeiros em todas as corridas em um mesmo campeonato. É amplamente con\n[…]\nSchumacher foi vice-campeão em 1998 e viu o piloto finlandês Mika Hakkinen, da McLaren, sagrar-se campeão mundial de Fórmula 1 pela primeira vez. A temporada, no entanto, foi disputada até a última etapa, e poderia ter dado o tricampeonato para Schumacher se David Coulthard, na Bélgica, não houvesse atirado com o alemão para fora da prova quando estava a ser ultrapassado, num grande prêmio disputado sobre um enorme dilúvio.\n[…]\nNo dia 23 de dezembro de 2009, a Mercedes GP anunciou na Alemanha o retorno do heptacampeão, aos 41 anos, à Fórmula 1. Michael Schumacher tornou-se piloto da Mercedes, equipe que surgiu após a compra da vitoriosa Brawn, por três temporadas por sete milhões de euros. O veterano corre ao lado do compatriota Nico Rosberg.\n[…]\nMichael Schumacher teve boa atuação sob chuva na sua última corrida de Fórmula 1, no Brasil. Quando começou a chover, e a pista foi molhando, Schumi mostrou lampejos da velha forma e começou a ultrapassar seus adversários. Quando o asfalto molhou de vez, o alemão fez o último pit stop da carreira para colocar pneus intermediários e pulou para sexto, um excelente resultado.\n[…]\nEm 1997, no Grande Prêmio da Europa em Jerez, a última corrida da temporada, Schumacher liderava o campeonato novamente por 1 ponto, desta vez, sobre Jacques Villeneuve. O piloto canadense começou a corrida na pole position. Na primeira curva da corrida, Schumacher estava na frente de Villeneuve. Na volta 48, Villeneuve passou Schumacher na curva \"Dry Sack\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Michael Schumacher",
      "descricao": "Piloto alemão heptacampeão mundial de Fórmula 1."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Vestindo o vermelho da Ferrari, Michael Schumacher ganhou o apelido de um famoso aviador alemão da Primeira Guerra Mundial. Qual?",
    "resposta": "Barão Vermelho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Michael_Schumacher"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michael_Schumacher",
        "situacao": "ok",
        "texto": "Michael Schumacher (German: [ˈmɪçaʔeːl ˈʃuːmaxɐ] ; born 3 January 1969) is a German former racing driver who competed in Formula One from 1991 to 2006 and from 2010 to 2012. Schumacher won a record-setting seven Formula One World Drivers' Championship titles, tied by Lewis Hamilton in 2020, and—at the time of his retirement—held the records for most wins (91), pole positions (68), and podium finis\n[…]\nIrvine also later commented: \"The '96 [Ferrari] car was a disaster and was nearly undriveable. Only someone of Michael Schumacher's ability—and maybe Senna—could have driven it.\" During winter testing, Schumacher first drove a Ferrari, their 1995 Ferrari 412 T2, and was two seconds faster than former regulars Alesi and Gerhard Berger had been.\n[…]\nSome of Schumacher's best performances occurred in such conditions, earning him the nicknames Regenkönig (\"Rain King\"), or Regenmeister (\"Rain Master\"), even in the non-German-language media. He is further known as \"the Red Baron\" because of his red Ferrari and in reference to the German Manfred von Richthofen, the famous flying ace of the First World War. Schumacher's nicknames also include \"Schumi\", \"Schuey\", and \"Schu\".\n[…]\nAccording to Brawn, Schumacher was a \"pretty misunderstood character\", adding that \"nobody I know who ever worked with Michael ever had a bad opinion about him because of his integrity, his commitment, his human side.\" In addition to Hill, Schumacher also had rivalries with Häkkinen, whom he beat for his first World Championship at Ferrari and the team's first Drivers' Championship since the 1979 season, and Alonso, who ended Schumacher's five-consecutive titles in the 2000s.\n[…]\nMol, Olav; Houben, Erik (2025). Michael Schumacher: De Formule 1-legende (in Dutch). Amsterdam: Uitgeverij Het Spectrum. ISBN 978-9-0003-9342-8.\n[…]\nMichael Schumacher career summary at DriverDB.com\n[…]\nMichael Schumacher driver statistics at Racing-Reference"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Michael_Schumacher",
        "situacao": "ok",
        "texto": "Michael Schumacher (pronúncia alemã: ; (Hürth, 3 de janeiro de 1969) é um ex-automobilista alemão, sete vezes campeão da Fórmula 1 e detentor de inúmeros recordes, incluindo voltas mais rápidas e maior número de campeonatos (ao lado de Lewis Hamilton). Em 2002 tornou-se o único piloto na história da F1 a terminar entre os três primeiros em todas as corridas em um mesmo campeonato. É amplamente con\n[…]\nNesse mesmo ano, Schumacher se sagrou bicampeão do Desafio Internacional das Estrelas, após vencer a primeira bateria realizada no sábado e ser segundo na prova de domingo.\n[…]\nMichael Schumacher teve boa atuação sob chuva na sua última corrida de Fórmula 1, no Brasil. Quando começou a chover, e a pista foi molhando, Schumi mostrou lampejos da velha forma e começou a ultrapassar seus adversários. Quando o asfalto molhou de vez, o alemão fez o último pit stop da carreira para colocar pneus intermediários e pulou para sexto, um excelente resultado.\n[…]\nEm 1990, no GP de Macau de F3, Mika Hakkinen estava tentando uma ultrapassagem sobre Schumacher na última volta da 2ª bateria, e Michael deliberadamente desviou o carro para a direita numa manobra de defender a posição, fazendo com que Mika Hakkinen perdesse o controle e batesse no muro. Michael acabou ganhando a corrida e o confronto em Macau, já que Hakkinen ganhou a primeira bateria e não completou a segunda devido ao acidente.\n[…]\nSchumacher é católico. Ele foi recebido pelo Papa João Paulo II em 1999, afirmando que este era \"o dia mais lindo\" de sua vida. Em 2005, Michael, juntamente com Rubens Barrichello e outros funcionários da Ferrari, se encontrou com João Paulo II, dando a este uma réplica em miniatura do F2004 que o alemão usou na conquista de seu sétimo título. Meses mais tarde, o Papa Bento XVI foi presenteado com o volante do F2004 autografado pelo heptacampeão.\n[…]\n«Site oficial» (em alemão)\n[…]\n«Sobre Schumacher no UOL Esporte»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Rubens Barrichello",
      "descricao": "Piloto brasileiro de Fórmula 1, que correu de 1993 a 2011 e foi companheiro de Michael Schumacher na Ferrari."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Rubens Barrichello e Felipe Massa terminaram a carreira na Fórmula 1 com o mesmo número de vitórias. Quantas cada um?",
    "resposta": "Onze",
    "distratores": [
      "Nove",
      "Treze",
      "Quinze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rubens_Barrichello",
      "https://en.wikipedia.org/wiki/Felipe_Massa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rubens_Barrichello",
        "situacao": "ok",
        "texto": "Rubens Gonçalves Barrichello (Brazilian Portuguese: [ˈʁubẽjz ɡõˈsawviz baʁiˈkɛlu]; born 23 May 1972) is a Brazilian racing driver and broadcaster who competes in the Stock Car Pro Series for Scuderia Bandeiras. Nicknamed \"Rubinho\" (pronounced [ʁuˈbĩɲu]), Barrichello competed in Formula One from 1993 to 2011, and twice finished runner-up in the World Drivers' Championship in 2002 and 2004 with Ferr\n[…]\nIn an August 2022 interview with Felipe Massa, he states that Barrichello had a contract with Ferrari running until 2006, after which he was to be replaced with Kimi Räikkönen for the 2007 season. But in early 2005, Honda had approached him to drive for them, and unhappy with the treatment Ferrari had given him, decided to ask the team to terminate his contract in 2005. He was thus replaced by Massa for the 2006 season.\n[…]\nHe paid tribute to injured compatriot Felipe Massa with a plaque on the top of his race helmet.\n[…]\nContinuing to drive a Chevrolet for Full Time Sports in 2014, Barrichello was crowned the 2014 champion, winning two races and securing a further four podium finishes. This was Barrichello's first championship in 23 years, dating back to his 1991 British Formula 3 title. In 2015, Barrichello finished in fourth place overall. In 2016, he claimed three wins and nine podiums, finishing second overall behind Felipe Fraga.\n[…]\nBarrichello formerly held the fastest time by a Formula One driver around the Top Gear test track during the show's Star in a Reasonably Priced Car segment. His lap time of 1:44.3 put him ahead of the Stig by 0.1 seconds. This led to Jeremy Clarkson making frequent references to the Stig developing a deep-seated hatred of Barrichello.\n[…]\nFormula One drivers from Brazil\n[…]\nRubens Barrichello at IMDb\n[…]\nRubens Barrichello driver statistics at Racing-Reference\n[…]\nRubens Barrichello career summary at DriverDB.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Felipe_Massa",
        "situacao": "ok",
        "texto": "Felipe Massa (Brazilian Portuguese: [feˈlipi ˈmasɐ, fiˈ-]; born 25 April 1981) is a Brazilian racing driver, who competes in the Stock Car Pro Series for TMG and in the IMSA SportsCar Championship for Riley. Massa competed in Formula One from 2002 to 2017, and was runner-up in the World Drivers' Championship in 2008 with Ferrari; he won 11 Grands Prix across 15 seasons.\n[…]\nOn 25 July 2009, in the second round of qualifying for the Hungarian Grand Prix, Massa's head, though protected by his driver's helmet, was struck by a suspension spring that had fallen from Rubens Barrichello's Brawn, on a high-speed part of the track. He subsequently crashed head-on into a tyre barrier. Massa was airlifted to the ÁEK hospital in Budapest, where he underwent surgery in the area surrounding his left eye.\n[…]\nOn 1 September 2016, Massa announced that he would retire from Formula One at the end of the season.\n[…]\nAfter announcing his retirement from Formula 1 after 15 years, Massa qualified eleventh for the Italian Grand Prix. After an aggressive start, which saw him overtake 3 cars, Massa finished his last Italian race in ninth. After a two-week break, the action returned to Singapore. In qualifying, Massa was caught by yellow flags, caused by Romain Grosjean and Jenson Button.\n[…]\nMassa held a charity kart race, Desafio Internacional das Estrelas (International Challenge of the Stars) every year between 2005 and 2014. Notably, many active top level Brazilian drivers have competed in the event, such as Formula One drivers Rubens Barrichello and Nelson Piquet Jr., drivers who competed in American open wheel events such as Tony Kanaan, Mario Moraes, Felipe Giaffone, Vítor Meira, Roberto Moreno, and Gil de Ferran, and Stock Car Brasil champion Cacá Bueno.\n[…]\nFormula One drivers from Brazil\n[…]\nFelipe Massa statistics Archived 30 September 2007 at the Wayback Machine\n[…]\nFelipe Massa at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rubens_Barrichello",
        "situacao": "ok",
        "texto": "Rubens Gonçalves \"Rubinho\" Barrichello (São Paulo, 23 de maio de 1972) é um automobilista e apresentador brasileiro. Até 2020, foi o que por mais tempo disputou o mundial de Fórmula 1 de maneira ininterrupta, entre os anos de 1993 e 2011, tendo se tornado também um dos pilotos mais experientes da história da categoria. Também foi presidente da Grand Prix Drivers' Association (GPDA), a associação q\n[…]\nA primeira aposentadoria de Schumacher no final de 2006 fez de Barrichello o piloto mais experiente do grid e, no Grande Prêmio da Turquia de 2008, quando atingiu a marca de 257 largadas, tornou-se o piloto com maior número de corridas disputadas na Fórmula 1. Em 2010, no Grande Prêmio da Bélgica de 2010, atingiu a marca de 300 GPs disputados. Barrichello conquistou a centésima vitória brasileira na Fórmula 1, no Grande Prêmio da Europa de 2009.\n[…]\nPorém, em 2007, a equipe japonesa não conseguiu criar um carro no nível das outras equipes da Fórmula 1 que têm orçamento anual semelhante ao seu, entre as 11 equipes a Honda com seu modelo RA107 terminou apenas em 9º, herdando a 8ª colocação no campeonato com a exclusão dos carros da McLaren naquela temporada. Button conseguiu marcar apenas 6 pontos e pela primeira vez na carreira, Barrichello não pontuou.\n[…]\n68 pódios (sendo o 8° piloto a subir mais vezes ao pódio da Fórmula 1).\n[…]\nNeto do italiano de Riese Pio X Giovanni Barrichello, Rubinho é filho de Idely e de Rubens Barrichello Júnior. Ele nasceu no mesmo dia em que seu pai, enquanto sua irmã Renata nasceu no mesmo dia que sua mãe. Um outro irmão, Robson, nasceu em 1974 e faleceu de leucemia aos dois anos. Em fevereiro de 1997, Rubinho se casou com Silvana Giaffone, prima do ex-piloto da Indy Felipe Giaffone e sobrinha de Zeca Giaffone, campeão da Stock Car em 1987.\n[…]\nBarrichello ainda é tio de Felipe Barrichello Bartz, o Pipe, que competiu na Stock Series, categoria de acesso à Stock Car.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Rubens Barrichello",
      "descricao": "Piloto brasileiro de Fórmula 1, que correu de 1993 a 2011 e foi companheiro de Michael Schumacher na Ferrari."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes pilotos brasileiros disputou mais Grandes Prêmios de Fórmula 1 na carreira?",
    "resposta": "Rubens Barrichello",
    "distratores": [
      "Felipe Massa",
      "Nelson Piquet",
      "Emerson Fittipaldi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rubens_Barrichello",
      "https://en.wikipedia.org/wiki/Felipe_Massa",
      "https://en.wikipedia.org/wiki/Nelson_Piquet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rubens_Barrichello",
        "situacao": "ok",
        "texto": "Rubens Gonçalves Barrichello (Brazilian Portuguese: [ˈʁubẽjz ɡõˈsawviz baʁiˈkɛlu]; born 23 May 1972) is a Brazilian racing driver and broadcaster who competes in the Stock Car Pro Series for Scuderia Bandeiras. Nicknamed \"Rubinho\" (pronounced [ʁuˈbĩɲu]), Barrichello competed in Formula One from 1993 to 2011, and twice finished runner-up in the World Drivers' Championship in 2002 and 2004 with Ferr\n[…]\nThe paternal side of his family comes from Veneto, Italy (from the town of Riese, in the province of Treviso). His maternal side of the family is of Portuguese origin. Both his father and paternal grandfather are also named Rubens, and Barrichello shares his father's birthday: 23 May. Therefore, Rubens Barrichello was known as Rubinho (Portuguese for 'little Rubens'), which has become his nickname.\n[…]\nAt the 2008 Brazilian Grand Prix, Barrichello drove with a helmet in tribute to Ingo Hoffmann, former F1 driver and multiple Stock Car Brasil champion who was retiring that year. At the 1995 and 2011 Brazilian Grands Prix, he wore a helmet painted to include elements of his own helmet design, and the classic design of Ayrton Senna's helmet.\n[…]\nBarrichello formerly held the fastest time by a Formula One driver around the Top Gear test track during the show's Star in a Reasonably Priced Car segment. His lap time of 1:44.3 put him ahead of the Stig by 0.1 seconds. This led to Jeremy Clarkson making frequent references to the Stig developing a deep-seated hatred of Barrichello.\n[…]\nBarrichello's sons Eduardo and Fernando are also racing drivers, with Eduardo currently competing in the 2026 FIA World Endurance Championship and Fernando contesting the 2026 FIA Formula 3 Championship.\n[…]\n† As Barrichello was a guest driver, he was ineligible to score points.\n[…]\nRubens Barrichello at IMDb\n[…]\nRubens Barrichello driver statistics at Racing-Reference\n[…]\nRubens Barrichello career summary at DriverDB.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Felipe_Massa",
        "situacao": "ok",
        "texto": "Felipe Massa (Brazilian Portuguese: [feˈlipi ˈmasɐ, fiˈ-]; born 25 April 1981) is a Brazilian racing driver, who competes in the Stock Car Pro Series for TMG and in the IMSA SportsCar Championship for Riley. Massa competed in Formula One from 2002 to 2017, and was runner-up in the World Drivers' Championship in 2008 with Ferrari; he won 11 Grands Prix across 15 seasons.\n[…]\nIn an August 2022 interview, Massa revealed that after Sauber was taken over by BMW, they offered him a three-year contract with the team, however Ferrari exercised their option on him to replace the outgoing Rubens Barrichello, who had signed for Honda for the 2006 season. Massa was then released and replaced by his former teammate Heidfeld and joined Ferrari to partner Michael Schumacher.\n[…]\nOn 25 July 2009, in the second round of qualifying for the Hungarian Grand Prix, Massa's head, though protected by his driver's helmet, was struck by a suspension spring that had fallen from Rubens Barrichello's Brawn, on a high-speed part of the track. He subsequently crashed head-on into a tyre barrier. Massa was airlifted to the ÁEK hospital in Budapest, where he underwent surgery in the area surrounding his left eye.\n[…]\nOne month after his retirement from Formula E, Massa participated in the Porsche GT3 Cup Brasil endurance series, sharing a car with 2016 champion Lico Kaesemodel, and finishing in third.\n[…]\nMassa held a charity kart race, Desafio Internacional das Estrelas (International Challenge of the Stars) every year between 2005 and 2014. Notably, many active top level Brazilian drivers have competed in the event, such as Formula One drivers Rubens Barrichello and Nelson Piquet Jr., drivers who competed in American open wheel events such as Tony Kanaan, Mario Moraes, Felipe Giaffone, Vítor Meira, Roberto Moreno, and Gil de Ferran, and Stock Car Brasil champion Cacá Bueno."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nelson_Piquet",
        "situacao": "ok",
        "texto": "Nelson Piquet Souto Maior (Brazilian Portuguese pronunciation: [ˈnɛwsõ piˈke], born 17 August 1952) is a Brazilian former racing driver and businessman, who competed in Formula One from 1978 to 1991. Piquet won three Formula One World Drivers' Championship titles, which he won in 1981, 1983, and 1987, and won 23 Grands Prix across 14 seasons.\n[…]\nOn 20 January 2006, Piquet won the 50th edition of the Mil Milhas Brasileiras (Brazilian 1,000 miles) at the Interlagos circuit. He drove an Aston Martin DBR9 alongside his son, Nelson Piquet Jr., and drivers Christophe Bouchut and Hélio Castroneves. At the end of the race, an exhausted Piquet was quoted saying to a friend he would \"never sit in a cockpit again.\"\n[…]\nPiquet runs some other businesses, based in Brasília.\n[…]\nPiquet was inducted into the International Motorsports Hall of Fame in 2000 and two racing circuits in Rio de Janeiro (formerly the Jacarepaguá Circuit) and in Brasília have been named \"Autódromo Internacional Nelson Piquet\", though the Rio circuit has since been demolished to make way for venues to be used in the 2016 Summer Olympics, with Rio de Janeiro the host city. Since his retirement, Piquet has been ranked among the greatest Formula One drivers.\n[…]\nAs of 2022, Piquet lives in a mansion located in the suburbs of Brasília. Inside the property, there is a farm, a private automobile museum, and an airstrip.\n[…]\nIn July 2022, Piquet was banned from the F1 paddock as a result of the slanderous statements made against Hamilton. Craig Slater of Sky Sports F1 reported that despite his apology, Piquet, \"for the foreseeable future at least, will not be welcome in the Formula 1 paddock\". The British Racing Drivers' Club also suspended Piquet's membership, and were expected to terminate his status as an honorary member, following a 7-day notice period."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rubens_Barrichello",
        "situacao": "ok",
        "texto": "Rubens Gonçalves \"Rubinho\" Barrichello (São Paulo, 23 de maio de 1972) é um automobilista e apresentador brasileiro. Até 2020, foi o que por mais tempo disputou o mundial de Fórmula 1 de maneira ininterrupta, entre os anos de 1993 e 2011, tendo se tornado também um dos pilotos mais experientes da história da categoria. Também foi presidente da Grand Prix Drivers' Association (GPDA), a associação q\n[…]\nA primeira aposentadoria de Schumacher no final de 2006 fez de Barrichello o piloto mais experiente do grid e, no Grande Prêmio da Turquia de 2008, quando atingiu a marca de 257 largadas, tornou-se o piloto com maior número de corridas disputadas na Fórmula 1. Em 2010, no Grande Prêmio da Bélgica de 2010, atingiu a marca de 300 GPs disputados. Barrichello conquistou a centésima vitória brasileira na Fórmula 1, no Grande Prêmio da Europa de 2009.\n[…]\nRubens Barrichello conseguiu sagrar-se vice em dois Campeonatos Mundiais de F1, em 2002 e 2004. Em 2004, apesar de não ter obtido o título, fez pontos suficientes para ser campeão com folga em quase todas as edições anteriores da competição (tornou-se então o segundo maior pontuador em um único campeonato da história da Fórmula 1).\n[…]\nNo Grande Prêmio da Europa de 2009, disputado em 23 de agosto de 2009 em Valência, na Espanha, Rubens conquista sua primeira vitória na temporada, a décima na carreira e a centésima de pilotos brasileiros na principal categoria do automobilismo mundial. Em 13 de setembro, Rubinho consegue a segunda vitória em 2009, no Grande Prêmio da Itália, disputado no autódromo de Monza. Já em 17 de outubro, consegue fazer a pole position em casa, no Grande Prêmio do Brasil.\n[…]\nRubens Barrichello chegou ao GP do Brasil de 2011 sendo o segundo piloto com maior participação em grandes prêmios: 326, com 322 largadas (contra 327 de Räikkönen e contra 306 de Schumacher). Outras marcas destacam o desempenho do piloto:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Lewis Hamilton",
      "descricao": "Piloto britânico heptacampeão mundial de Fórmula 1."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O pai de Lewis Hamilton escolheu o primeiro nome do filho em homenagem a qual velocista americano, campeão olímpico?",
    "resposta": "Carl Lewis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lewis_Hamilton"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lewis_Hamilton",
        "situacao": "ok",
        "texto": "Sir Lewis Carl Davidson Hamilton (born 7 January 1985) is a British racing driver who competes in Formula One for Ferrari. Hamilton has won a joint-record seven Formula One World Drivers' Championship titles—tied with Michael Schumacher—and holds the records for most wins (106), pole positions (105), and podium finishes (209), among others.\n[…]\nLewis Carl Davidson Hamilton was born on 7 January 1985 in Stevenage, Hertfordshire. His father, Anthony Hamilton, is of Afro-Grenadian descent, while his mother, Carmen Larbalestier, is White British from Birmingham, making him mixed-race. Hamilton's parents separated when he was two, after which he lived with his mother and older half-sisters, Samantha and Nicola, until he was twelve.\n[…]\nRogers, Gareth (2007). Lewis Hamilton: The Story So Far (paperback ed.). Stroud: The History Press Ltd. p. 200. ISBN 978-0-7524-4480-2.\n[…]\nvan de Burgt, Andrew (2007). Lewis Hamilton: A portrait of Britain's new F1 hero (hardback ed.). Yeovil: J H Haynes & Co Ltd. p. 160. ISBN 978-1-84425-480-4.\n[…]\nJones, Bruce (2007). Lewis Hamilton: The People's Champion (ITV SPORT) (hardback ed.). London: Carlton Books Ltd. p. 128. ISBN 978-1-84442-027-8.\n[…]\nApps, Roy (2008). Lewis Hamilton (Dream to Win) (paperback ed.). London: Franklin Watts Ltd. p. 48. ISBN 978-0-7496-8233-0.\n[…]\nTownsend, John (2008). Lewis Hamilton (hardback ed.). Oxford: Raintree Publishers. p. 32. ISBN 978-1-4062-0953-2.\n[…]\nSpragg, Ian (2008). Lewis Hamilton: The Rise of F1's New Superstar. Bath: Parragon. ISBN 978-1-4075-2104-6.\n[…]\nWorrall, Frank (2016). Lewis Hamilton: Triple World Champion: The Biography (paperback ed.). London: John Blake Publishing Ltd. p. 388. ISBN 978-1-78606-033-4.\n[…]\nLewis Hamilton career summary at DriverDB.com\n[…]\nLewis Hamilton Archived 14 February 2023 at the Wayback Machine biography at MercedesAMGF1.com\n[…]\nLewis Hamilton at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lewis_Hamilton",
        "situacao": "ok",
        "texto": "Sir Lewis Carl Davidson Larbalestier Hamilton MBE • HonFREng • Kt (Stevenage, 7 de janeiro de 1985) é um automobilista britânico. Sete vezes campeão mundial de Fórmula 1, nos anos de 2008, 2014, 2015, 2017, 2018, 2019 e 2020, Hamilton é um dos maiores pilotos de todos os tempos, e um dos desportistas mais bem-sucedidos da história.\n[…]\nLewis Carl Davidson Hamilton é filho de Anthony Hamilton, homem de origens afro-caribenhas que é filho de imigrantes de Granada que foram para a Inglaterra na década de 1950, e de Carmen Larbalestier, uma mulher branca de Birmingham. Seus pais se divorciaram quando ele tinha dois anos, e Anthony se casou novamente com Linda Hamilton, a quem Lewis considera uma segunda mãe.\n[…]\nSebastian Vettel chegou apenas em quarto, o que acabou não sendo suficiente para manter a luta do campeonato viva, mesmo que Hamilton terminasse sem marcar pontos. Lewis Hamilton recebeu a bandeirada quadriculada na nona colocação, sagrando-se tetracampeão mundial, e entrando para um seleto grupo de pilotos, se igualando ao próprio Sebastian Vettel e Alain Prost na lista dos campeões com quatro títulos na história da Fórmula 1. Hamilton foi campeão restando duas provas para o fim do campeonato.\n[…]\nLewis se tornou o primeiro piloto na história da Fórmula 1 a vencer após romper a barreira dos 300 Grandes Prêmios participados na categoria, com sua vitória de número 104 sendo conquistada em sua corrida de número 344.\n[…]\nNa corrida seguinte, após assegurar uma terceira colocação no GP da Hungria de 2024, Lewis Hamilton se tornou o primeiro piloto na história da Fórmula 1 a atingir a marca de 200 pódios.\n[…]\n«Lewis Hamilton» (em inglês). em McLaren\n[…]\n«Lewis Hamilton» (em inglês). em Driverdatabase\n[…]\nLewis Hamilton no Facebook\n[…]\nLewis Hamilton no Twitter\n[…]\nLewis Hamilton no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Juan Manuel Fangio",
      "descricao": "Piloto argentino pentacampeão mundial de Fórmula 1 nos anos cinquenta."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por causa das pernas arqueadas, o argentino Juan Manuel Fangio ganhou em seu país qual apelido em espanhol?",
    "resposta": "El Chueco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Juan_Manuel_Fangio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Juan_Manuel_Fangio",
        "situacao": "ok",
        "texto": "Juan Manuel Fangio (Spanish: [ˈxwan maˈnwel ˈfaŋxjo], Italian: [ˈfandʒo]; 24 June 1911 – 17 July 1995) was an Argentine racing driver, who competed in Formula One from 1950 to 1958. Nicknamed \"el Chueco\" and \"el Maestro\", Fangio won five Formula One World Drivers' Championship titles and—at the time of his retirement—held the record for most wins (24), pole positions (29), fastest laps (23), and p\n[…]\nFangio was born in Balcarce on 24 June 1911, San Juan's Day, at 12:10 am. His birth certificate was mistakenly dated 23 June in the Register of Balcarce. He was the fourth of six children. In his childhood he became known as El Chueco, the bandy-legged one, for his skill in bending his left leg around the ball to shoot on goal in football games.\n[…]\nAfter ten years and after receiving an increasing number of comments about his resemblance to Fangio, not only physically but also in his voice, in 2005 Vázquez decided to confront his mother to find out the truth about whether or not he was the son of the former racer, although she was still weighed down by the extramarital relationship she had had with the “Chueco” decades ago. After several refusals, Basili finally confessed the truth to his son.\n[…]\nThe genetic result between Rodriguez and Cacho Fangio was that they are brothers with a certainty of almost 98%, which would lead to the conclusion that Rodriguez would also be the son of Juan Manuel, although the next step was still missing, which was to perform the same study by matching the DNA samples of Rodriguez with those extracted from the remains of the “Chueco”.“\n[…]\nKarl Ludvigsen. Juan Manuel Fangio: Motor Racing's Grand Master. Haynes Manuals Inc. ISBN 978-1859606254\n[…]\nPierre Menard & Jacques Vassal. Juan-Manuel Fangio: The Race in the Blood. Chronosports. ISBN 978-2847070453\n[…]\nJuan Manuel Fangio Website\n[…]\nJuan Manuel Fangio Museum (in Spanish)\n[…]\nJuan Manuel Fangio at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Juan_Manuel_Fangio",
        "situacao": "ok",
        "texto": "Juan Manuel Fangio (Balcarce, 24 de junho de 1911 — Buenos Aires, 17 de julho de 1995) foi um automobilista argentino. Dominou a primeira década da Fórmula 1, ganhando o campeonato mundial cinco vezes.\n[…]\nJuan Manuel Fangio correu 51 grandes prêmios, obteve 24 vitórias, 29 pole positions, 23 recordes de volta, cinco títulos mundiais (1951, 1954, 1955, 1956 e 1957) dos quais 4 foram consecutivos, e dois vice-campeonatos (1950 e 1953) em oito temporadas que disputou. Fangio correu em quatro escuderias: Alfa Romeo (1950-1951), Maserati (1953-1954), Mercedes (1954-1955), Ferrari (1956) e Maserati (1957-1958).\n[…]\nFangio tinha o apelido \"El Chueco\" (O Manco), que recebeu em partidas amadoras de futebol, por ter as pernas arqueadas.\n[…]\nJuan Manuel Fangio disputou sua primeira corrida aos dezessete anos, guiando um Ford-T, e terminou em último lugar. Ele subiu ao pódio pela primeira vez nas Mil Milhas da Argentina em 1939.\n[…]\nRubén então entrou na justiça para reconhecer a paternidade e depois de longos 13 anos foi confirmada a história e ele pode mudar seu nome para Rubén Juan Fangio e ganhou milhões como herdeiro da fortuna de Fangio.\n[…]\nFangio, ao longo de sua carreira, construiu um dos currículos mais invejáveis da categoria:\n[…]\nMuseu Juan Manuel Fangio\n[…]\n«Mini-biografia de Juan Manuel Fangio»\n[…]\n«Museo Juan Manuel Fangio» (em espanhol)\n[…]\n«Un tributo al Chueco» (em espanhol)\n[…]\n«Juan Manuel Fangio» (em francês)\n[…]\n«Grand Prix History - Hall of Fame - Juan Manuel Fangio» (em inglês)\n[…]\n«Estatísticas de Juan Manuel Fangio» (em inglês)\n[…]\n«Números da carreira de Juan Manuel Fangio» (em inglês)\n[…]\n«Atletas do século - Juan Manuel Fangio» (em inglês)\n[…]\n«1995 - Morre Manuel Fangio, a maior lenda da história da F1»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "José Carlos Pace",
      "descricao": "Piloto brasileiro de Fórmula 1 nos anos setenta, morto num acidente aéreo em 1977, que dá nome ao autódromo de Interlagos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "José Carlos Pace, o piloto que dá nome ao autódromo de Interlagos, era chamado pelos amigos e pela imprensa por qual apelido?",
    "resposta": "Moco",
    "fonte": [
      "https://pt.wikipedia.org/wiki/José_Carlos_Pace",
      "https://en.wikipedia.org/wiki/Carlos_Pace"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/José_Carlos_Pace",
        "situacao": "ok",
        "texto": "José Carlos Pace, ou Carlos Pace, o Moco (São Paulo, 6 de outubro de 1944 – Mairiporã, 18 de março de 1977) foi um piloto brasileiro de Fórmula 1, vencedor do Grande Prêmio do Brasil de 1975.\n[…]\nDe ascendência italiana, estreou no automobilismo em 1963, disputando provas de Turismo pela equipe Willys. Em 1964, foi um dos pilotos do Desafio 50 mil quilômetros no Autódromo de Interlagos.\n[…]\nO campeonato de 76 não foi muito bom para Pace. Utilizando os motores Alfa Romeo, que eram pesados e gastavam muita gasolina, fez apenas 7 pontos, terminando em 14º lugar. Naquele ano atuou como dublê de Al Pacino no filme Bobby Deerfield nas cenas de competição nos GPs do Brasil, África do Sul e Estados Unidos.\n[…]\nEm 1977, um segundo lugar no Grande Prêmio da Argentina foi o último pódio e os últimos pontos de José Carlos Pace. Participou de mais duas corridas, Brasil e África do Sul, sem pontuar.\n[…]\nNo dia 18 de março de 1977, o avião em que viajava, um pequeno monomotor de propriedade do também piloto Marivaldo Fernandes, bateu numa árvore na Serra da Cantareira, município de Mairiporã, após decolar do Aeroporto Campo de Marte no início de uma violenta tempestade, tendo Pace e os outros quatro ocupantes (inclusive Marivaldo) morte imediata.\n[…]\nEntre 1977 e 2024, esteve sepultado no Cemitério do Araçá, mas em 28 de agosto de 2024, seus restos mortais foram trasladados para o Autódromo de Interlagos, em cerimônia com familiares e pilotos veteranos do automobilismo brasileiro.\n[…]\nEm 1985, o Autódromo de Interlagos foi batizado Autódromo José Carlos Pace em sua homenagem.\n[…]\nLista de pilotos brasileiros na Fórmula 1\n[…]\nArtigo sobre José Carlos Pace"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Carlos_Pace",
        "situacao": "ok",
        "texto": "José Carlos Pace (Brazilian Portuguese pronunciation: [ʒoˈzɛ ˈkaʁlus ˈpatʃi]; 6 October 1944 – 18 March 1977)  was a Brazilian racing driver, who competed in Formula One from 1972 to 1977. Pace won the 1975 Brazilian Grand Prix with Brabham.\n[…]\nJosé Carlos Pace was born in São Paulo, Brazil to Angelo Raphael Pace, a textiles businessman, and Amélia Pace. His father and his mother were Brazilians, both children of Italian immigrants. The family moved back to Italy for a part of Pace's childhood and upon returning to Brazil he was given the nickname 'Moco' because he could only speak Italian.After becoming fluent in Portuguese again, he was encouraged by friends Wilson and Emerson Fittipaldi to start karting.\n[…]\nIn the 1977 motorsport film Bobby Deerfield, the eponymous title character is represented by Pace in the racing scenes.\n[…]\nFinally, on August 23, Pace's body arrived in Interlagos, where he was buried next to the bust that stands there in his honor. The emotional ceremony was attended by Pace's family (his widow Elda, his children Patrícia and Rodrigo, and his grandchildren), friends, other drivers, journalists and admirers of “Moco”.\n[…]\nThen, José Carlos Pace took one last lap around the track, where Rodrigo, “Moco's” son, drove a 1967 Karmann-Ghia racing car that was used by his father, from the old Dacon team, where José Carlos Pace formed a trio with none other than the Fittipaldi brothers of Emerson and Wilson Jr. at the time. Alongside Rodrigo was Maurício Marx, collector and current owner of the Karmann-Ghia, who took the urn with Pace's remains to his “final chequered flag”.\n[…]\nThis makes Pace the first departed driver ever to be buried in a race circuit.\n[…]\nPace's profile at Motorsportmemorial.org"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Enzo Ferrari",
      "descricao": "Piloto e empresário italiano, fundador da Scuderia Ferrari e da fabricante Ferrari."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Enzo Ferrari recebeu do governo italiano um título honorífico que acabou virando seu apelido. Qual?",
    "resposta": "Il Commendatore",
    "distratores": [
      "Il Maestro",
      "Il Capitano",
      "Il Dottore"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Enzo_Ferrari"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Enzo_Ferrari",
        "situacao": "ok",
        "texto": "Enzo Anselmo Giuseppe Maria Ferrari (; Italian: [ˈɛntso anˈsɛlmo ferˈraːri]; 18 February 1898 – 14 August 1988) was an Italian racing driver and entrepreneur, the founder of Scuderia Ferrari in Grand Prix motor racing, and subsequently of the Ferrari automobile marque. Under his leadership in Formula One, Ferrari won nine World Drivers' Championships and eight World Constructors' Championships dur\n[…]\nHe was widely known as il Commendatore or il Drake, a nickname given by British opponents in reference to the English privateer Francis Drake, due to Ferrari's demonstrated ability and determination in achieving significant sports results with his small company. In his final years, he was often referred to as l'Ingegnere (\"the Engineer\"), il Grande Vecchio (\"the Grand Old Man\"), il Cavaliere (\"the Knight\"), il Mago (\"the Wizard\"), and il Patriarca (\"the Patriarch\").\n[…]\nIn Ferrari's defence, contemporary F1 race car driver Stirling Moss commented: \"I can't think of a single occasion where a (Ferrari) driver's life was taken because of mechanical failure.\"\n[…]\nAccording to Yates, Ferrari once remarked to racing manager Romolo Tavoni that \"a man should always have two wives\", and at one point in 1961, when he was dating three women simultaneously, he wrote, \"I am convinced that when a man tells a woman he loves her, he only means that he desires her and that the only perfect love in this world is that of a father for his son\", a comment that came several years after the death of his first son.\n[…]\nFerrari was made a Cavaliere del Lavoro in 1952, to add to his honours of Cavaliere and Commendatore in the 1920s. He also received several honorary degrees, including the Hammarskjöld Prize in 1962, the Columbus Prize in 1965, and the De Gasperi Award in 1987. He was posthumously inducted into the International Motorsports Hall of Fame (1994) and the Automotive Hall of Fame (2000)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Enzo_Ferrari",
        "situacao": "ok",
        "texto": "Enzo Anselmo Giuseppe Maria Ferrari (Módena, 18 de fevereiro de 1898 – Maranello, 14 de agosto de 1988) foi o fundador da Scuderia Ferrari e da fábrica de automóveis Ferrari.\n[…]\nAlfredino Ferrari, filho de Enzo, morreu em 1956, aos 24 anos, sofrendo de distrofia muscular progressiva. Isto fez com que Enzo se tornasse uma pessoa amarga. Desde então Enzo nunca mais pisou numa pista de corrida e passou a usar os inseparáveis óculos escuros. Autodidata em mecânica, recebeu em 1960, da Universidade de Bolonha, o título de Doutor honoris causa em engenharia, e mais tarde, em física. Recebeu do governo italiano o título de Comendador.\n[…]\nOs últimos sucessos de sua equipe de Fórmula 1 que viu foram os títulos de Jody Scheckter em 1979 e o título de construtores da Ferrari em 1983. O último carro da marca fundada pelo comendador que ele aprovou em vida, foi o lendário F40 criado em 1987. Enzo gostou tanto do carro que proferiu a seguinte e famosa frase: \"Se Deus fosse um carro, seria um F40\".\n[…]\nProfundamente insatisfeita com a forma como o automobilismo era coberto pela imprensa italiana, em 1961 a Ferrari apoiou a decisão do editor Luciano Conti, com sede em Bolonha, de iniciar uma nova publicação, a Autosprint. O próprio Ferrari contribuiu regularmente para a revista por alguns anos.\n[…]\nFerrari morreu em 14 de agosto de 1988 em Maranello, aos 90 anos. Nenhuma causa de morte foi fornecida. Sua morte só foi divulgada dois dias depois, a pedido de Enzo, para compensar o atraso no registro de seu nascimento.==Referências==\n[…]\n«Enzo Ferrari: 70 fatos sobre a história da marca e seu criador». - AutoPapo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "NASCAR",
      "descricao": "Principal entidade de corridas de stock car dos Estados Unidos, fundada em 1948."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nas corridas da NASCAR, a expressão inglesa stock car indicava, na origem, que os carros eram de que tipo?",
    "resposta": "Carros de série, de fábrica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stock_car_racing",
      "https://en.wikipedia.org/wiki/NASCAR"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stock_car_racing",
        "situacao": "ok",
        "texto": "Stock car racing is a form of automobile racing run on oval tracks and road courses. It originally used production-model cars, hence the name \"stock car\", but is now run using cars specifically built for racing. Originating in the southern United States, its largest governing body is NASCAR, whose NASCAR Cup Series is the premier top-level series of professional stock car racing.\n[…]\nNASCAR is currently the largest stock car racing governing body in the world. While NASCAR sanctions multiple series, it has three national championship touring series that are commonly referred to as the \"top 3\" series. In addition to the top three series, NASCAR also sanctions many regional and local series. NASCAR also sanctions three international series that race in Canada, Mexico, and Europe.\n[…]\nStarting in 1995, the NASCAR Truck Series is the third highest ranking stock car series in the United States. The series was the brainchild of then-NASCAR West Coast executive Ken Clapp, who was inspired by off-road truck racing. Unlike the other two national touring NASCAR series, the Truck Series race pickup truck styled bodies, though it is still considered a stock car series because of its similarity.\n[…]\nOutside of NASCAR, there are a number of other national or regional stock-car sanctioning bodies in the United States. There are many organizations that cater to these local short tracks.\n[…]\nStock Car Racing has existed in Canada as early as the 1950s in amateur format, although official structured competitions began with the foundation of CASCAR in 1981. The league went on for a few decades until 2006, when it was purchased by NASCAR and became the NASCAR Canada Series. Vehicle models used are typically from the makes of Chevrolet, Dodge, and Ford. The series runs a higher percentage of road and street courses compared to the top 4 NASCAR series in America.\n[…]\nNASCAR"
      },
      {
        "url": "https://en.wikipedia.org/wiki/NASCAR",
        "situacao": "ok",
        "texto": "The National Association for Stock Car Auto Racing, LLC (NASCAR) is an American auto racing sanctioning and operating company that is best known for stock car racing. It is considered to be one of the top-ranked motorsports organizations in the world and is one of the largest spectator sports leagues in America. The privately owned company was founded by Bill France Sr. in 1948. The company is hea\n[…]\nBy early 1947, Bill France saw the potential for a unified series of racing competitors. France announced the foundation of the \"National Championship Stock Car Circuit\", otherwise known as NCSCC. France approached the American Automobile Association, or AAA, in hopes of obtaining financial backing for the venture. When the AAA declined support of the venture, France proceeded to announce a set of rules and awards for the NCSCC.\n[…]\nThe name originally chosen for the series was \"National Stock Car Racing Association\"; when it was pointed out that that name was already in use by a rival sanctioning body, \"National Association for Stock Car Auto Racing\", proposed by mechanic Red Vogt, was selected as the organization's name.\n[…]\nIn 2004, NASCAR also began to sanction a mini stock racing series in Mexico, known as the Mexico T4 Series.\n[…]\nIn addition to the six main national series, NASCAR operates several other racing divisions under the NASCAR Regional banner.\n[…]\nEach division champion receives a point-fund money payout and even more goes to the National champion (driver with most points out of the four division winners). The Whelen All-American Series is the base for stock car racing, developing NASCAR names such as Clint Bowyer, Jimmy Spencer, Tony Stewart, the Bodine brothers, and many others along the way.\n[…]\nIn November 2025, it was reported that NASCAR was backing a stock car racing-themed historical drama by John Fusco—Thunder Road—for AMC. The series is planned to star Dennis Quaid ."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stock_Car",
        "situacao": "ok",
        "texto": "O termo Stock Car refere-se a uma forma de corrida automobilística popular, principalmente nos Estados Unidos, no Canadá, no México, na Grã-Bretanha, na Austrália, no Brasil e em outros países.\n[…]\nO Stock Car em seu senso original descreve um automóvel de passeio utilizado em competições, mas sem  modificações especiais para corrida. Posteriormente passaram a ser carros de passeios modificados para provas. Atualmente muitas categorias usam carros especiais que mantém o design semelhante aos de passeio, que ao contrário dos monopostos, que têm pneus à mostra, são considerados provas de turismo.\n[…]\nA maior associação de stock cars do mundo é a NASCAR nos Estados Unidos, com três categorias principais (Cup Series, Xfinity Series e Truck Series) e várias categorias regionais e locais (as chamadas Home Tracks) como a Pro Series East e Pro Series West, a Modified Tour, a All-American Series, categorias que correm em mais de 30 etapas ao longo do ano, correndo em sua maior parte em circuitos ovais.\n[…]\nNos Estados Unidos ainda existem outras associações de stock cars, a exemplo da NASCAR costumam ter várias séries associadas, geralmente correndo a nível regional ou local, como exemplo tem-se a Automobile Racing Club of America (ARCA), a American Speed Association (ASA), a Champion Racing Association (CRA), a International Motor Contest Association (IMCA), fundada em 1915 e que é a mais antiga do país em atividade, a United Auto Racing Association (UARA), a Championship Auto Racing Series (CARS).\n[…]\nNo Brasil tem-se a Stock Car Brasil desde 1979. A corrida mais conhecida e a prova mais disputada é a Corrida do Milhão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "McLaren",
      "descricao": "Equipe britânica de Fórmula 1 fundada em 1963, pela qual Ayrton Senna conquistou seus três títulos mundiais."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Nos nomes dos carros da McLaren a partir de 1981, como o MP4 de Senna, a letra M vinha originalmente de qual patrocinador?",
    "resposta": "Marlboro",
    "distratores": [
      "Mobil",
      "Michelin",
      "Martini"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/McLaren_MP4/4",
      "https://en.wikipedia.org/wiki/McLaren"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/McLaren_MP4/4",
        "situacao": "ok",
        "texto": "The McLaren MP4/4, also known as the McLaren-Honda MP4/4, was one of the most successful and dominant Formula One car designs of all time. Powered by Honda's RA168E 1.5-litre V6-turbo engine and driven by teammates Alain Prost and Ayrton Senna, the car competed during the 1988 Formula One season. The design of the car was led by American engineer Steve Nichols.\n[…]\nThe fast Imola circuit with its long periods of full-throttle racing was notoriously hard on fuel, especially for the turbo cars which had seen numerous late race retirements in recent years, and the McLarens lapping the field at the speed they did prove the aerodynamic efficiency of the car as well as the work Honda had undertaken to reduce fuel consumption. Prost and Senna's fastest laps (again the only drivers under 1:30) were 1.5 seconds faster than the next fastest, Gerhard Berger's Ferrari.\n[…]\nChassis #2 is owned by a private collector in Chicago, Illinois, USA, and has been on display at McLaren of Chicago after being driven by Bruno Senna at Interlagos in 2019. Chassis #3 was previously on loan and displayed at the Donington Grand Prix Exhibition, but was relocated and displayed at McLaren Osaka Hakko. It was relocated again to Museo y Circuito Fernando Alonso in Asturias, Spain by 2016. As of 2022, it was in private ownership in the UK at Kiklo Spaces.\n[…]\nChassis #5 is owned by Honda and is sometimes on display at the Honda Collection Hall at Motegi; it ran at Goodwood in 2014 under Marlboro livery and driven by Takuya Izawa. Additionally, Honda owns a showcar, chassis MP4/4/SSC/10 (SSC for static show car), which is occasionally put on display including at the 2015 Tokyo Auto Salon and Honda Collection Hall.\n[…]\nTeam McLaren\n[…]\nHonda Racing F1\n[…]\nMedia related to McLaren MP4/4 at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/McLaren",
        "situacao": "ok",
        "texto": "McLaren Racing Limited ( mə-KLARR-ən), currently competing in Formula One as McLaren Mastercard F1 Team, is a British motor racing team based at the McLaren Technology Centre in Woking, Surrey, England. The team is a subsidiary of the McLaren Group, wholly owned by Mumtalakat Holding Company.\n[…]\nIn 1981, McLaren merged with Ron Dennis' Project Four Racing; Dennis took over as team principal, and shortly afterwards organised a buyout of the original McLaren shareholders to take full control of the team. This began the team's most successful era; with Porsche and Honda engines, Niki Lauda, Alain Prost, and Ayrton Senna won seven Drivers' Championships between them and the team took six Constructors' Championships.\n[…]\nIn 1974, Philip Morris was signed as title sponsor through their Marlboro cigarette brand although one car continued to run-ostensibly by a separate team-with Yardley livery for the year. Marlboro's red-and-white branding lasted until 1996, during which time the team went by the many variants of the Marlboro McLaren name. This partnership was the then longest-running Formula One sponsorship which has since been surpassed by Hugo Boss' sponsorship of the team, which ran from 1981 to 2014.\n[…]\nThe McLaren–Marlboro title sponsorship deal is still the longest-running in Formula One.\n[…]\nIn 1997, Philip Morris moved its Marlboro sponsorship to Ferrari and was replaced by Reemtsma's West cigarette brand, with the team racing as West McLaren Mercedes. As a result, McLaren adopted a silver and black livery. By mid-2005, a European Union directive banned tobacco advertising in sport, which forced McLaren to end its association with West. In 2006, the team competed without a title sponsor, entering under the name Team McLaren Mercedes.\n[…]\nAyrton Senna (1988, 1990, 1991)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/McLaren_MP4/4",
        "situacao": "ok",
        "texto": "O MP4/4 foi o modelo da McLaren da temporada de 1988 de F1. Seus condutores foram o francês Alain Prost e o brasileiro Ayrton Senna. É considerado por alguns o melhor modelo de Fórmula 1 da história, vencendo 15 das 16 corridas que disputou, não vencendo apenas o Grande Prêmio da Itália de 1988 porque Senna bateu na Williams do retardatário Jean-Louis Schlesser na penúltima volta da corrida enquan\n[…]\nEntão a Honda trabalhou no motor para conseguir unir torque e economia de combustível, e a equipe McLaren trabalhou para criar um chassis baixo com menor atrito aerodinâmico para andar bem nas retas, e isso fez o MP4/4 o carro mais bem sucedido da F1, que contava ainda com os dois melhores pilotos da F1 naquele momento: Senna e Prost.\n[…]\nA McLaren conseguiu 199 pontos dos 240 possíveis (82,92%); todos os pontos das equipes restantes (201) superavam os da McLaren por apenas 2 pontos.\n[…]\nO McLaren MP4-4 liderou 97,28% (1003 voltas) das voltas do somatório de todos os GP’s (1031 voltas)\n[…]\n1: San Marino e Canadá por Senna.\n[…]\n2: Brasil por Prost e Estados Unidos e Japão por Senna.\n[…]\n5: Grã-Bretanha, Alemanha, Hungria, Bélgica por Senna.\n[…]\nGP do Brasil: Senna, que foi o pole-position, foi desclassificado na 31ª volta por ter trocado de carro na volta de aquecimento.\n[…]\nGP de Mônaco: Liderando até a 66ª volta (restando 12 para o término) Senna comete um erro e “dá” a vitória ao seu colega de equipe, que chega em primeiro. Foi o único GP de Mônaco não vencido pelo piloto brasileiro entre 1987 a 1993.\n[…]\nGP da Itália: Prost tem um problema de motor e para na 34ª volta. Líder desde a largada, Senna bate em um retardatário na 49ª volta e perdendo a vitória. Termina em 10º e pela primeira vez na temporada que não teve nenhum McLaren no alto do pódio e também a primeira vez que nenhum carro McLaren pontuou na prova.\n[…]\n↑  Site oficial do Museu Honda - McLaren Honda MP4/4. [2]\n[…]\nMcLaren",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Brabham",
      "descricao": "Equipe britânica de Fórmula 1 fundada por Jack Brabham e Ron Tauranac, que competiu de 1962 a 1992."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nos nomes dos carros da Brabham, como o BT52 de Nelson Piquet, de onde vêm as letras B e T?",
    "resposta": "Dos fundadores Brabham e Tauranac",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brabham"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brabham",
        "situacao": "ok",
        "texto": "Motor Racing Developments Ltd., commonly known as Brabham ( BRAB-əm), was a British racing car manufacturer and Formula One racing team. It was founded in 1962 by the Australian driver Jack Brabham and the British-Australian designer Ron Tauranac. The team had a successful thirty-year history, winning four FIA Formula One World Drivers' Championships and two World Constructors' Championships.\n[…]\nTeams using Brabham cars won championships in Formula Two and Formula Three. The cars also competed in events like the Indianapolis 500 and Formula 5000 racing.\n[…]\nTo meet their aim of designing racing cars, Brabham and Tauranac set up Motor Racing Developments Ltd. (MRD), deliberately avoiding the use of either man's name. The new company would compete with Cooper in the market for customer-built racing cars. As Brabham was still employed by Cooper, Tauranac produced the first MRD car, for the entry level Formula Junior class, in secrecy. Unveiled in the summer of 1961, the \"MRD\" was soon renamed.\n[…]\nBrabham cars were also widely used by other teams, and not just in Formula One. Jack Brabham and Ron Tauranac called the company they set up in 1961 to design and build formula racing cars to customer teams Motor Racing Developments (MRD), and this company had a large portfolio of other activities. Initially, Brabham and Tauranac each held 50 per cent of the shares.\n[…]\nThe first Formula Three Brabham, the BT9, won only four major races in 1964. The BT15 which followed in 1965 was a highly successful design. 58 cars were sold, which won 42 major races. Further developments of the same concept, including wings by the end of the decade, were highly competitive up until 1971. The BT38C of 1972 was Brabham's first production monocoque and the first not designed by Tauranac. Although 40 were ordered, it was less successful than its predecessors.\n[…]\nList of Brabham racing cars\n[…]\nBrabham - At IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brabham",
        "situacao": "ok",
        "texto": "A Motor Racing Developments Ltd., mais conhecida como Brabham, foi uma equipe britânica de Fórmula 1 fundada em 1961 por Jack Brabham e Ron Tauranac.\n[…]\nCom a alteração do regulamento para 3,0 L em 1966, a Brabham adaptou-se adotando uma solução baseada no motor Repco V8 (projeto australiano), instalado no chassi BT19 concebido por Ron Tauranac; a combinação privilegiou confiabilidade e leveza, permitindo a Jack Brabham conquistar o Campeonato Mundial de Pilotos de 1966 ao volante do seu próprio carro — até hoje um caso singular na história da Fórmula 1.\n[…]\nJack Brabham retirou-se das provas ao fim da temporada de 1970, vendendo a sua participação na equipe a Ron Tauranac; no final de 1971 a Motor Racing Developments foi adquirida por Bernie Ecclestone, que procedeu a uma reorganização administrativa e técnica da estrutura de competição.\n[…]\nSob a gestão de Ecclestone e com projetos de Gordon Murray assumindo o posto de principal desenhista a partir de 1973, a Brabham alcançou novamente destaque competitivo no início da década de 1980: Nelson Piquet conquistou os campeonatos mundiais de 1981 e 1983 representando a equipe.\n[…]\nPiquet: 13\n[…]\nJ. Brabham: 7\n[…]\nRon Tauranac. History of Motor Racing Developments (MRD). Ron Tauranac Official Website. Disponível em: http://www.rontauranac.com/mrd-history.\n[…]\nInstitution of Mechanical Engineers (IMechE). How the reliable Repco Brabham BT19 came out on top in 1966. IMechE, 2016. Disponível em: https://www.imeche.org/news/news-article/how-the-reliable-repco-brabham-bt19-came-out-on-top-in-1966.\n[…]\nGrandPrix.com. Brabham Team History. Disponível em: https://www.grandprix.com/gpe/con-brabh.html.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Autódromo de Monza",
      "descricao": "Circuito italiano, perto de Milão, conhecido como Templo da Velocidade."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Uma chicane de Monza leva o nome de um bicampeão mundial italiano que morreu ali, num teste, em 1955. Que piloto?",
    "resposta": "Alberto Ascari",
    "fonte": [
      "https://en.wikipedia.org/wiki/Monza_Circuit",
      "https://en.wikipedia.org/wiki/Alberto_Ascari"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monza_Circuit",
        "situacao": "ok",
        "texto": "The Monza Circuit, officially called the Autodromo Nazionale di Monza (Italian for 'Monza National Autodrome'), is a 5.793 km (3.600 mi) race track near the city of Monza, north of Milan, in Italy. Built in 1922, it was the world's fourth purpose-built motor racing circuit after Aspendale, Brooklands and Indianapolis, and the oldest in mainland Europe. The circuit's biggest event is the Italian Gr\n[…]\nAs the speed of the machines increased, two chicanes were added in 1972 to reduce racing speeds – the Variante del Rettifilo at the middle of the start/finish straight, and the Variante Ascari. This resulted in a new circuit length of 5.755 km (3.576 mi). Grand Prix motorcycles continued to use the un-slowed road track until two serious accidents resulted in five deaths, including Renzo Pasolini and Jarno Saarinen, in 1973, and motorcycle racing did not return to Monza until 1981.\n[…]\nFormula One cars are set up with one of the smallest wing angles on the F1 calendar to ensure the lowest level of drag on the straights. There are only 6 corner complexes at Monza: the first two chicanes, the two Lesmos, the Ascari complex and the Parabolica. Thus, cars are set up for maximum performance on the straights.\n[…]\nThe downhill approach to Variante Ascari, particularly beneath the bridge, is known for its uneven surface. The Variante Ascari chicane is regarded as one of the circuit's more technically demanding sections and is considered important for achieving competitive lap times.\n[…]\n1955 Alberto Ascari, killed during private testing at the Vialone, which is now the Ascari chicane, driving a Ferrari 750 Monza, just four days after his harbour crash in the 1955 Monaco Grand Prix\n[…]\nRally Monza (2020–2021)\n[…]\nAutodromo Nazionale Monza official website\n[…]\nAutodromo Nazionale Monza on Google Maps (Current Formula 1 Tracks)\n[…]\nAutodromo Internazionale di Monza circuit history at RacingCircuits.info"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alberto_Ascari",
        "situacao": "ok",
        "texto": "Alberto Ascari (13 July 1918 – 26 May 1955) was an Italian racing driver who competed in the Drivers World Championship from 1950 to 1955. Ascari won two World Drivers' Championship titles, which he won in 1952 and 1953 with Ferrari, and won 13 Grands Prix across six seasons. In endurance racing, Ascari won the Mille Miglia in 1954 with Lancia.\n[…]\nWhen Ascari was a young child, his father Antonio Ascari, also a famous racing driver, died in an accident at the 1925 French Grand Prix. Ascari himself was later killed during a test session for Ferrari at the Autodromo Nazionale Monza in 1955. Both were 36 years old.\n[…]\nBorn in Milan, Alberto Ascari was the son of Antonio Ascari, a talented Grand Prix motor racing star in the 1920s, racing Alfa Romeos. A fortnight after Ascari's seventh birthday, his father was killed while leading the 1925 French Grand Prix at the Autodrome de Linas-Montlhéry; the younger Ascari had an interest in racing in spite of this, and later came to dominate Grand Prix racing like no other before him.\n[…]\nOn Thursday 26 May 1955, Ascari went to the Autodromo Nazionale Monza to watch his friend Eugenio Castellotti test a Ferrari 750 Monza sports car. They were to co-drive the car in the Agip-sponsored III. Gran Premio Supercortemaggiore  6-hour 1000 km Monza race, having been given special dispensation by his Lancia F1 team which did not compete in sportscar. Ascari was not scheduled to drive that day, but decided to try a few laps.\n[…]\nA street in Rome, in the Esposizione Universale Roma area, is named in Ascari's honour. The Autodromo Nazionale Monza, the Autodromo Oscar Alfredo Gálvez, and the Circuito del Jarama have chicanes or portions of their tracks named after Ascari. In 1972, one of the chicanes at the Monza Circuit was named in his honour Variante Ascari.\n[…]\nAlberto Ascari at Find a Grave"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aut%C3%B3dromo_Nacional_de_Monza",
        "situacao": "ok",
        "texto": "Autódromo Nacional de Monza (em italiano:  Autodromo Nazionale di Monza) é uma pista de automobilismo localizada próxima à cidade de Monza, na Itália, ao norte de Milão. É um dos circuitos mais tradicionais para a prática do automobilismo no mundo. É famoso principalmente por receber o Grande Prêmio da Itália de Fórmula 1 quase anualmente desde 3 de setembro de 1922, data da sua inauguração.\n[…]\nO Autódromo de Monza é atualmente o traçado mais veloz da Europa graças às suas retas muito longas, o que permite que os pilotos mantenham aceleração máxima por mais da metade da volta. É um circuito praticamente plano, com poucas elevações e conhecido como uma pista que testa mais a potência do motor que as habilidades dos pilotos.\n[…]\nPouco mais à frente, há a Variante della Roggia, bastante parecida com a Prima Variante, mas com direção oposta (esquerda-direita). A parte mais técnica do circuito é iniciada com as Curve di Lesmo, dupla de curvas à direita. O circuito readquire velocidade com a reta acompanhada da velocíssima Curva del Serraglio para, então, entrar na Variante Ascari, uma curva curta à esquerda que prossegue com curva longa à direita e conclui com outra esquerda a quase 90°.\n[…]\nO traçado do circuito completo de Monza - cuja extensão é de 10km - possui um fato curioso e impensável nos dias de hoje: para completar a volta, o piloto era obrigado a passar duas vezes pela reta principal.\n[…]\nO primeiro vencedor do circuito completo de Monza foi Pietro Bordino, em 1922. A bordo de um Fiat 804, ele completou os 800 km do primeiro Grand Prix da Itália em 5 horas 43 minutos e 13 segundos, com uma média de 139,8 km/h.\n[…]\nNa cor creme estão os Grande Prêmios da Itália que fizeram parte do Campeonato Europeu de Automobilismo, anterior a 2ª Guerra Mundial .\n[…]\nSite Oficial do Circuito de Monza\n[…]\nDetalhes do Circuito de Monza (Site Oficial da Fórmula 1)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Christian Fittipaldi",
      "descricao": "Piloto brasileiro que correu na Fórmula 1 de 1992 a 1994 e depois na Fórmula Indy e em provas de resistência, sobrinho de Emerson Fittipaldi."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Christian Fittipaldi, que correu na Fórmula 1 de 1992 a 1994, é filho de qual piloto brasileiro?",
    "resposta": "Wilson Fittipaldi Júnior",
    "distratores": [
      "Emerson Fittipaldi",
      "José Carlos Pace",
      "Nelson Piquet"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Christian_Fittipaldi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christian_Fittipaldi",
        "situacao": "ok",
        "texto": "Christian Fittipaldi (born 18 January 1971) is a Brazilian former racing driver who has competed in various forms of motorsport including Formula One, Champ Car, and NASCAR. He was a highly rated young racing driver in the early 1990s, and participated in 43 Formula One Grands Prix for Minardi and Footwork between 1992 and 1994.\n[…]\nA member of the Fittipaldi racing family, he is the son of former Formula One driver and team owner Wilson Fittipaldi, the nephew of two-time Formula One World Champion and Indianapolis 500 winner Emerson Fittipaldi, and the cousin of racing driver Emerson Fittipaldi Jr.. He is also the first cousin once-removed of Pietro and Enzo Fittipaldi, who are the grandsons of Emerson Fittipaldi.\n[…]\nFittipaldi was born in São Paulo. He is named after Christian Heins, a Brazilian racing driver who was killed in a wreck during the 1963 24 Hours of Le Mans. Fittipaldi was second in the Brazilian Formula Ford in 1988. After finishing third in the South American Formula 3 in 1989, in 1990, he won the title in the Formula 3 Sudamericana and the fourth place in the British Formula 3.\n[…]\nFittipaldi's jump into Formula 1 happened in 1992 with Minardi, scoring a single point. For 1993, he would score 5 points in the Drivers' Championship, but the team dropped him with two rounds to go. The following season, he competed in the Footwork team and earned two fourth places, finishing the season with 6 points. At the end of the 1994 season, Fittipaldi would retire from Formula One and move to CART.\n[…]\nIn parallel to his activity in Formula 1, Fittipaldi was the winner of the 1993 24 Hours of Spa and 1994 Brazilian 1000 Miles.\n[…]\nFittipaldi won the Rolex 24 at Daytona in 2014 in the Action Express Corvette DP with João Barbosa and Sébastien Bourdais.\n[…]\nChristian Fittipaldi driver statistics at Racing-Reference"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Christian_Fittipaldi",
        "situacao": "ok",
        "texto": "Christian Fittipaldi (São Paulo, 18 de janeiro de 1971) é um ex-piloto de automóveis brasileiro. Filho de Wilson Fittipaldi Júnior e sobrinho de Emerson Fittipaldi, Christian é o único piloto brasileiro já disputou provas da Formula 1, Champ Car e NASCAR Winston Cup, três das principais categorias do automobilismo mundial.\n[…]\nEle participou em 43 Grandes Prêmios de Fórmula 1 e correu pelas equipes Minardi e Arrows, pontuando 5 vezes. Em seguida foi quinto lugar na CART (br:Fórmula Mundial) em 1996 e 2002, conseguindo duas vitórias (Road America e California Speedway), bem como um segundo lugar nas 500 milhas de Indianápolis em 1995. Neste ano, Fittipaldi correu algumas provas da NASCAR Winston Cup, chegando a largar da sétima posição na etapa de Michigan.\n[…]\nApós o início no kart, aonde conquistou vitórias e títulos, Christian Fittipaldi ingressou na Fórmula Ford brasileira, aonde conseguiu terminar em segundo lugar na temporada de 1988. Posteriormente, terminou a temporada de 1989 em terceiro lugar na Fórmula 3 Sul-americana, vindo conquistar o título da categoria em 1990, e um quarto lugar na Fórmula 3 Britânica.\n[…]\nEm 1994 Christian teve uma nova chance correndo pela Arrows, conquistou dois quartos lugares mas desistiu da Fórmula 1 e mudou-se para os Estados Unidos.\n[…]\nApós sua fase na NASCAR pela equipe Petty Enterprises, Fittipaldi co-pilotou o carro vencedor das 24 Horas de Daytona em 2004 e correu pela Stock Car Brasil em 2005. Fittipaldi também co-dirigiu o carro vencedor durante as 24 Horas de Daytona e reapareceu na Grand-Am após vencer uma corrida em Phoenix, anunciando ter assinado contrato com a nova equipe de Eddie Cheever para 2006.\n[…]\nChristian Fittipaldi no Instagram\n[…]\nChristian Fittipaldi no Facebook\n[…]\nMedia relacionados com Christian Fittipaldi no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Fernando Alonso",
      "descricao": "Piloto espanhol de Fórmula 1, bicampeão mundial em 2005 e 2006."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Além dos títulos na Fórmula 1, Fernando Alonso venceu duas vezes as 24 Horas de Le Mans. Por qual montadora?",
    "resposta": "Toyota",
    "distratores": [
      "Porsche",
      "Audi",
      "Peugeot"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fernando_Alonso",
      "https://en.wikipedia.org/wiki/2018_24_Hours_of_Le_Mans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fernando_Alonso",
        "situacao": "ok",
        "texto": "Fernando Alonso Díaz (Spanish pronunciation: [feɾˈnando aˈlonso ˈði.aθ] ; born 29 July 1981) is a Spanish racing driver who competes in Formula One for Aston Martin. Alonso has won two Formula One World Drivers' Championship titles, which he won in 2005 and 2006 with Renault, and has won 32 Grands Prix across 23 seasons.\n[…]\nIn endurance racing, Alonso won the 2018–19 FIA World Endurance Championship and is a two-time winner of the 24 Hours of Le Mans with Toyota as well as a winner of the 24 Hours of Daytona in 2019 with WTR. He is the only driver to have won both the Formula One World Drivers' Championship and the World Sportscar/World Endurance Drivers' Championship.\n[…]\nHe remained with the team until the end of 2018, resulting in limited success, before his first retirement. Alonso then moved into sportscar racing with Toyota, winning the FIA World Endurance Championship, and the 24 Hours of Le Mans twice. He returned to Formula One in 2021 with Alpine, recording his first podium in seven years at the Qatar Grand Prix, and breaking the record for most career starts in 2022.\n[…]\nBrown discussed an entry for the 2018 24 Hours of Le Mans with Alonso and was prepared to consent to a switch to another team if certain circumstances were met. Alonso and Toyota held talks and agreed to compete in the 24 Hours of Le Mans. He visited Toyota's factory in Cologne for a seat fitting in a TS050 Hybrid in November 2017. Toyota entered Alonso into a post-season rookie test at the Bahrain International Circuit later that month.\n[…]\nIn January 2018, McLaren and Toyota reached an agreement to allow Alonso to enter the full 2018–19 FIA World Endurance Championship. He joined Sébastien Buemi and Kazuki Nakajima in Toyota's No. 8 TS050 Hybrid.\n[…]\nFernando Alonso statistics\n[…]\nFernando Alonso at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/2018_24_Hours_of_Le_Mans",
        "situacao": "ok",
        "texto": "The 86th 24 Hours of Le Mans (French: 86e 24 Heures du Mans) was an 24-hour automobile endurance race for Le Mans Prototype and Le Mans Grand Touring Endurance cars entered by teams of three drivers each held from 16 to 17 June 2018 at the Circuit de la Sarthe, close to Le Mans, France. It was the 86th running of the event, as organised by the automotive group, the Automobile Club de l'Ouest (ACO)\n[…]\nAs the race approached its midway point, Alonso lowered the deficit to Lopez's race-leading No. 7 Toyota to 1 minute and 16 seconds and Roman Rusinov's G-Drive car led by one lap over Lapierre in LMP2. Christensen in the No. 92 Porsche was 1 minute, 53 seconds ahead of his teammate Bruni in LMGTE Pro and Andlauer's No. 77 Dempsey-Proton held sway over Bleekemolen's Keating Ferrari in LMGTE Am. During the 13th hour, Menezes drove the No.\n[…]\nUnhindered in the final hours of the race, Nakajima achieved victory for the No. 8 Toyota team, which completed 388 laps and was two laps ahead of Kobayashi's No. 7 Toyota. Rebellion, unable to match the pace of the Toyota cars, finished third and fourth with the No. 3 R13 ahead of the No. 1 car. It was Alonso, Buemi and Nakajima's first Le Mans victory, and Toyota's first on its 20th try.\n[…]\nToyota became the first Japanese manufacturer to win at Le Mans since Mazda in 1991 and Alonso completed a second leg of the Triple Crown of Motorsport (the 24 Hours of Le Mans, the Indianapolis 500 and the Monaco Grand Prix). The G-Drive team led the final 360 laps with the No. 26 Oreca to be the first car to finish the race in LMP2, provisionally earning the team and its drivers Andrea Pizzitola, Rusinov and Vergne their first class victories.\n[…]\nThe No. 7 Toyota's 205 laps led was the most of any car with the race-winning No. 8 leading 13 times for a total of 183 laps."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fernando_Alonso",
        "situacao": "ok",
        "texto": "Fernando Alonso Díaz (Oviedo, 29 de julho de 1981) é um automobilista espanhol que atua na Fórmula 1 pela equipe Aston Martin. É bicampeão mundial de Fórmula 1 em 2005 e 2006 pela Renault, além de vice-campeão em 2010, 2012 e 2013 pela Ferrari, também vencedor de duas provas de Endurance, as 24 Horas de Le Mans de 2018 e 2019 e também as 24 Horas de Daytona de 2019.\n[…]\nO espanhol conquista seu segundo título mundial, também no Grande Prêmio do Brasil, chegando na segunda colocação da corrida, no dia em que Michael Schumacher fez a sua última corrida na Fórmula 1 e que Felipe Massa venceu, após treze anos sem vitória brasileira em Interlagos. Alonso também foi o mais jovem a alcançar o bicampeonato, totalizando sete vitórias e sete segundos lugares.\n[…]\nO caso foi julgado e Flávio Briatore, foi banido da Fórmula 1, Nelsinho foi absolvido por ser o delator, Pat Symonds (membro da equipe que participou do caso), foi suspenso da Fórmula 1 por cinco anos e Fernando Alonso, por falta de provas, foi absolvido.\n[…]\nEm outubro de 2017, confirmou sua participação nas 24 Horas de Daytona de 2018, como preparação para correr futuramente nas 24 Horas de Le Mans. Em 2018, ele correu ao lado dos exs-F1 Sebastien Buemi e Kazuki Nakajima, pela equipe Toyota na categoria LMP1, e o trio se sagrou vitorioso. Em 2019, os três repetiram o feito e se sagraram campeões do Mundial de Endurance.\n[…]\nEm março de 2022, Alonso fundou com dois sócios, Albert Resclosa Coll e Alberto Fernández Albilares, a A14 Management, empresa dedicada a gerenciar a carreira de jovens pilotos. Os dois primeiros pilotos gerenciados foram Clément Novalak e Nikola Tsolov. Desde setembro daquele mesmo ano, a empresa cuida da carreira de Gabriel Bortoleto, que em 2025 passou a competir na Fórmula 1 ao lado de Alonso.\n[…]\nFernando Alonso no Facebook\n[…]\nFernando Alonso no Twitter\n[…]\nFernando Alonso no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Kimi Räikkönen",
      "descricao": "Piloto finlandês de Fórmula 1, campeão mundial em 2007 pela Ferrari."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Depois de deixar a Ferrari no fim de 2009, Kimi Räikkönen passou duas temporadas competindo em qual campeonato mundial?",
    "resposta": "Mundial de Rali",
    "distratores": [
      "Mundial de Endurance",
      "Fórmula Indy",
      "MotoGP"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kimi_Räikkönen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kimi_Räikkönen",
        "situacao": "ok",
        "texto": "Kimi-Matias Räikkönen (Finnish pronunciation: [ˈkimi ˈmɑtiɑs ˈræi̯kːønen]; born 17 October 1979) is a Finnish racing and rally driver who competed in Formula One between 2001 and 2021, and the World Rally Championship from 2009 to 2011. Nicknamed \"the Iceman\", Räikkönen won the Formula One World Drivers' Championship in 2007 with Ferrari, and won 21 Grands Prix across 19 seasons.\n[…]\nIn November he visited the Alfa Romeo factory in Switzerland for the last time as a team member and was given a farewell, and was subsequently given a farewell by the Scuderia Ferrari team prior to the race in Abu Dhabi. For his final race in Abu Dhabi the team inscribed \"Dear Kimi, we will leave you alone now\" on his C41. Räikkönen was forced to retire on lap 25 because of a technical issue with a wheel nut.\n[…]\nRäikkönen's helmet, designed by UffeDesigns, manufactured by Arai (2001–2006, 2012), Bell (2013, 2015–2021), and Schuberth (2007–2009, 2014), slightly changed during the years. His helmet has also always featured a V design running on the circle top (representing a flying bird) and the inscription \"Iceman\". The trident insignia was painted in white during his time racing for Sauber and McLaren until 2005, and red from 2006 with McLaren and during his time with Ferrari.\n[…]\nRäikkönen holds the following Formula One records:\n[…]\nThe Unknown Kimi Raikkonen\n[…]\nNevalainen, Petri (22 October 2008). Jäämies – Kimi Räikkösen henkilökuva [The Iceman – a portrait of Kimi Räikkönen] (in Finnish). Helsinki: Ajatus Kirjat. p. 224. ISBN 978-951-20-7805-9.\n[…]\nHotakainen, Kari (18 October 2018). The Unknown Kimi Raikkonen. Siltala Publishing. p. 320. ISBN 978-1471177668.\n[…]\nSingh, A (6 April 2017). \"Kimi Raikkonen: The Iceman Who Heats Up F1 Racing\". TrendMantra. IN. Retrieved 12 February 2021.\n[…]\nFormula One DataBase: Kimi Räikkönen\n[…]\nKimi Räikkönen at IMDb\n[…]\nKimi Räikkönen driver statistics at Racing-Reference"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
        "situacao": "ok",
        "texto": "Kimi-Matias Räikkönen (Espoo, 17 de outubro de 1979) é um automobilista finlandês que atuou na Fórmula 1 entre 2001 e 2021, sendo campeão mundial em 2007 e vice-campeão em 2003 e 2005, Campeonato Mundial de Rali e NASCAR.\n[…]\nRäikkönen mudou para a Ferrari em 2007, se tornando o piloto mais bem pago da história do automobilismo com um salário estimado em US$ 51 milhões por ano. Sua mudança para a Ferrari seguiu com a conquista do seu primeiro Campeonato Mundial de Fórmula 1, vencendo os pilotos da McLaren Lewis Hamilton e Fernando Alonso por um ponto, e também se tornando um dos pouquíssimos pilotos a vencer uma primeira temporada na Ferrari.\n[…]\nEm 2008, ele igualou o recorde de voltas mais rápidas em uma temporada pela segunda vez. Depois de mais um ano no esporte, deixou a Fórmula 1 para dirigir um Citroën C4 WRC na equipe Citroën Junior Team no Campeonato Mundial de Rally de 2010. Juntamente com o Rally, Räikkönen colocou sua atenção na NASCAR e fez sua estreia pela equipe Kyle Busch Motorsports no Camping World Truck Series.\n[…]\nEm 2007, Räikkönen foi o primeiro piloto desde Nigel Mansell, em 1989, a estrear pela Ferrari com uma vitória. Ele ganhou o Grande Prêmio da Austrália, que abriu a temporada de 2007. E, após dois vice-campeonatos, o finlandês sagrou-se campeão mundial em 21 de outubro de 2007, vencendo o Grande Prêmio do Brasil, no Autódromo de Interlagos.\n[…]\nCom a vitória, Räikkönen conquistou seu primeiro título do campeonato mundial de pilotos e a consolidação da Ferrari como a líder mundial de construtores da Fórmula 1 em 2007.\n[…]\nNo dia 1 de setembro de 2021, Kimi Räikkönen anunciou que se aposentaria da Fórmula 1 após o final da temporada de 2021.\n[…]\n«Kimi Räikkönen» (em inglês). em Driverdatabase",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Graham Hill",
      "descricao": "Piloto inglês bicampeão mundial de Fórmula 1, em 1962 e 1968, pai do também campeão Damon Hill."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O capacete azul-escuro com faixas brancas de Graham Hill, depois usado pelo filho Damon, trazia as cores de um clube londrino de qual esporte?",
    "resposta": "Remo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Graham_Hill",
      "https://en.wikipedia.org/wiki/Damon_Hill"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Graham_Hill",
        "situacao": "ok",
        "texto": "Norman Graham Hill (15 February 1929 – 29 November 1975) was a British racing driver, rower and motorsport executive, who competed in Formula One from 1958 to 1975. Nicknamed \"Mr. Monaco\", Hill won two Formula One World Drivers' Championship titles and, at the time of his retirement, held the record for most podium finishes (36); he won 14 Grands Prix across 18 seasons. In American open-wheel raci\n[…]\nHill felt that the experience gained in rowing helped him in his motor-racing. He wrote in his autobiography:\n[…]\nHill, Graham (1970) [1969]. Life at the limit. Coward-McCann – via Internet Archive.\n[…]\nHill, Graham (1970). Kettlewell, Michael (ed.). Graham Hill's motor racing book. Designed and illustrated by Basil Smith. London: Patrick Stephens. ISBN 978-0-85059-055-5 – via Internet Archive.\n[…]\nHill, Graham (1971). Kettlewell, Michael (ed.). Graham Hill's car racing guide. Illustrated by Basil Smith. New York: Sterling Pub. Co. ISBN 978-0-8069-0080-3 – via Internet Archive.\n[…]\nHill, Graham; Ewart, Neil (1975). Advanced Driving with Graham Hill. Ebury Publishing. ISBN 978-0-09-122780-7.\n[…]\nHill, Graham; Ewart, Neil. Graham. Red Fox. ISBN 978-0-09-915250-7.\n[…]\nHill's easy wit and charm helped him become a television personality, notably on the BBC show Call My Bluff with Patrick Campbell and Frank Muir. For a number of years in the early 1970s he appeared as one half of a double act, with Jackie Stewart, as an insert within the BBC Sports Personality of the Year show. In June 1975 he appeared alongside his son, Damon Hill, on the popular television programme Jim'll Fix It.\n[…]\nA one-off BBC Four documentary called Graham Hill: Driven was first broadcast on 26 May 2008.\n[…]\nGraham Hill profile at The 500 Owners Association\n[…]\nGrand Prix History – Hall of Fame, Graham Hill Archived 10 October 2012 at the Wayback Machine\n[…]\nGraham Hill Statistics\n[…]\nGraham Hill Photos\n[…]\nGraham Hill at Find a Grave"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Damon_Hill",
        "situacao": "ok",
        "texto": "Damon Graham Devereux Hill (born 17 September 1960) is a British former racing driver and broadcaster, who competed in Formula One from 1992 to 1999. Hill won the Formula One World Drivers' Championship in 1996 with Williams, and won 22 Grands Prix across eight seasons.\n[…]\nHill was born in Hampstead, London, to Graham and Bette Hill. Graham Hill was a racing driver in the international Formula One series. He won the world Drivers' Championship in 1962 and 1968, and became a well-known personality in the United Kingdom. Graham Hill's career provided a comfortable living. Bette (née Shubrook) was a former rower and medalist at the European Rowing Championships.\n[…]\nBy 1975, the family lived in a \"25-room country mansion\" in Hertfordshire and Damon attended the independent The Haberdashers' Aske's Boys' School. The death of his father in an aeroplane crash in 1975 left the 15-year-old Hill, his mother, and sisters Samantha and Brigitte in drastically reduced circumstances. Hill worked as a labourer and a motorcycle courier to support his further education.\n[…]\nHill started his motorsport career in motorcycle racing in 1981. He used the same simple, easily identifiable helmet design as his father: eight white oar blades arranged vertically around the upper surface of a dark blue helmet. The device and colours represent the London Rowing Club for which Graham Hill rowed in the early 1950s. Although he won a 350 cc clubman's championship at the Brands Hatch circuit, his racing budget came from working as a building labourer.\n[…]\nHill–Schumacher rivalry\n[…]\nHill, Damon (1999). Damon Hill: Through the Eyes of Damon Hill. Little, Brown. ISBN 978-0-316-85392-7.\n[…]\nTremayne, David (1996). Damon Hill: World Champion. Weidenfeld Nicolson. ISBN 978-0-297-82262-2."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Graham_Hill",
        "situacao": "ok",
        "texto": "Norman Graham Hill (Hampstead, 15 de fevereiro de 1929 – Arkley, 29 de novembro de 1975) foi um automobilista britânico, bicampeão mundial da Fórmula 1 em 1962 e 1968. Esteve na categoria por 18 temporadas entre 1958 e 1975, sendo também proprietário de uma equipe. Ele é o único piloto a vencer a Tríplice Coroa do Automobilismo — 24 horas de Le Mans (em 1972), 500 milhas de Indianápolis (em 1966) \n[…]\nGraham e seu filho Damon, mantiveram o recorde de única dupla de pai e filho a ter ganho o Campeonato Mundial de Fórmula 1 até 2016, quando Keke Rosberg e Nico Rosberg se juntaram a eles. Neto de Graham e filho de Damon, Josh Hill também fez sua carreira através das categorias e aposentou-se na Fórmula 3 em 2013, com 22 anos.\n[…]\nComo última opção, voou para o pequeno aeroporto de Elstree, em Barnet, 16 quilômetros ao norte de Londres, voando baixo e com uma visibilidade de 100 metros. No clube Arkley, um campo de golfe, a três quilômetros da pista, houve um choque com algumas árvores, a queda, a explosão. Seis pessoas morreram na hora. Entre elas, Graham Hill, aos 46 anos.\n[…]\nO reconhecimento oficial foi feito através de sua ficha dentária. Os corpos, carbonizados, estavam irreconhecíveis. O avião vinha sob seu comando, de um voo que começara 10 minutos antes do acidente. Na Europa, 18 horas e 30 minutos em Marselha, França, Graham Hill tinha passado o dia no autódromo de Paul Ricard fazendo testes no novo carro de sua equipe.\n[…]\nGraham era casado com Bette Hill desde 1955 e deixou três filhos: Brigitte (mais velha), Damon Hill (do meio, que depois se tornaria campeão mundial de Fórmula 1 em 1996) e Samantha. Seu funeral foi na abadia de St. Albans, e ele está enterrado na igreja de St. Botolphs em Shenley. Em 1990, Graham foi introduzido ao International Motorsports Hall of Fame.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Porsche 917",
      "descricao": "Protótipo de corrida da Porsche, com motor de doze cilindros, vencedor das 24 Horas de Le Mans de 1970 e 1971."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No filme Le Mans, de 1971, qual astro de Hollywood, também piloto amador, interpreta um corredor que guia um Porsche 917?",
    "resposta": "Steve McQueen",
    "fonte": [
      "https://en.wikipedia.org/wiki/Le_Mans_(film)",
      "https://en.wikipedia.org/wiki/Porsche_917"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Le_Mans_(film)",
        "situacao": "ok",
        "texto": "Le Mans is a 1971 film depicting a fictional 24 Hours of Le Mans auto race starring Steve McQueen and directed by Lee H. Katzin. The film began as a John Sturges project, before he was replaced during filming. It features actual footage captured during the 1970 race held the previous June.\n[…]\nSteve McQueen as Michael Delaney, driver of the #20 Porsche 917K\n[…]\nAfter production, McQueen's main Porsche 917, chassis 022, driven extensively in the film, was sold and raced many times through the 1970s. In 2001, it was purchased for US$1.32 million (equivalent to $2.4 million in 2025), with that owner selling it  in 2002 to comedian Jerry Seinfeld. Seinfeld asked Joe Cavaglieri to fully restore it to the 1971 film era in Gulf Porsche team livery.\n[…]\nIn The Hollywood Reporter, film critic James Powers wrote:Le Mans is a class film in every way, attitude, realization, taste. It has visceral emotion but not heart...\n[…]\nIt is an unsatisfying film because we know no more about the people at the end than we did at the beginning, in fact, very little at all. Very near the end, Steve McQueen is asked if this driving is worth risking one's life for. He replies that for those men who drive these autos, \"it is life … anything before or after is just waiting.\"\n[…]\nSteve McQueen: The Man & Le Mans is a 2015 documentary film detailing the actor's quest to make the 1971 film Le Mans, complete with interviews from his then-wife Neile Adams McQueen, co-stars Louise Edlind and Siegfried Rauch, and McQueen's son Chad McQueen. It also includes recordings from John Sturges and Steve McQueen.\n[…]\nKeyser, Michael; Williams, Jonathan (1999). A French Kiss with Death: Steve McQueen and the Making of Le Mans. Cambridge, MA: Bentley Publishers. ISBN 978-0-8376-0234-9.\n[…]\nLe Mans at the TCM Movie Database (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Porsche_917",
        "situacao": "ok",
        "texto": "The Porsche 917 is a sports prototype race car developed by German manufacturer Porsche to exploit the regulations regarding the construction of 5-litre sports cars. Powered by a Type 912 flat-12 engine which was progressively enlarged from 4.5 to 5.0 litres, the 917 was introduced in 1969 and initially proved unwieldy on the race track but continuous development improved the handling and it went \n[…]\nIn 1970 it gave Porsche its first overall win at the 24 Hours of Le Mans, a feat it would repeat in 1971. It would be chiefly responsible for Porsche winning the International Championship for Makes in 1970 and 1971. Porsche went on to develop the 917 for Can–Am racing, culminating in the twin-turbocharged 917/30 which was even more dominant in the role. Porsche drivers would win the Can–Am championship in 1972 and 1973.\n[…]\n1971 917/20:\n[…]\nThroughout the season Porsche continued to develop the 917, introducing new versions of the short and long-tailed bodywork, and trying out a magnesium chassis, with which they would win the 1971 24 Hours of Le Mans. The most interesting development was the 917/20, built as test-bed for future Can-Am parts and aerodynamic \"low-drag\" concepts.\n[…]\nThe Porsche 917 was homologated for May 1969 and could have participated in the last six WSC rounds, but Porsche mostly still preferred the Porsche 908 types L coupe and /02 sypder which won four of these six rounds. Le Mans was again lost to the Gulf-Wyer Ford before the 917 succeeded in the last race in Austria where it was later developed with the Gulf-Wyer-JWA team to the 917K shape.\n[…]\nThe Gulf Oil liveried 917 'Kurzhecks' are also prominently featured in the Steve McQueen film Le Mans competing against Ferrari's 512 Coda Lunga.\n[…]\n2000 – Porsche 917, Unique Motor Books (ISBN 1-84155-297-6)\n[…]\n1971 Porsche Kurzheck Coupe (Official Porsche Website)\n[…]\n1973 Porsche 917/30 Spyder (Official Porsche Website)\n[…]\nVideo of Porsche 917"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Le_Mans_%28filme%29",
        "situacao": "ok",
        "texto": "Le Mans (bra: As 24 Horas de Le Mans) é um filme de 1971 que retrata uma corrida automobilística fictícia de 24 Horas de Le Mans, estrelado por Steve McQueen e dirigido por Lee H. Katzin. O filme começou como um projeto de John Sturges, antes dele ser substituído durante as filmagens. Le Mans apresenta imagens reais capturadas durante a corrida de 1970, realizada em junho do ano anterior.\n[…]\nSteve McQueen como Michael Delaney, piloto do Porsche 917K nº 20\n[…]\nLe Mans foi filmado em locações no circuito de Le Mans entre junho e novembro de 1970, inclusive durante a própria edição daquele ano das 24 Horas de Le Mans, em meados de junho. Steve McQueen pretendia disputar a corrida com um Porsche 917, ao lado de Jackie Stewart, mas a inscrição do carro nº 26 não foi aceita. Em vez disso, ele é retratado iniciando a corrida ao volante do Porsche 917K azul nº 20, da equipe Gulf, pilotado por Jo Siffert e Brian Redman.\n[…]\nApós a produção, o principal Porsche 917 de McQueen, chassi 022, amplamente utilizado no filme, foi vendido e participou de diversas corridas ao longo da década de 1970. Em 2001, o veículo fora adquirido por US$1,32\n[…]\nO crítico de cinema James Powers para o The Hollywood Reporter diz que Le Mans é \" um filme de classe em todos os sentidos: atitude, realização, bom gosto. Tem emoção visceral, mas não sentimentalismo...\" Porém, criticou a ausência de argumentação: \"não sabemos mais sobre as pessoas no final do que sabíamos no início, na verdade, muito pouco. Quase no final, perguntam a Steve McQueen se vale a pena arriscar a vida por dirigir.\n[…]\nSteve McQueen: The Man & Le Mans é um documentário de 2015 que detalha a busca do ator para realizar o filme Le Mans, com entrevistas de sua então esposa Neile Adams, dos co-protagonistas Louise Edlind e Siegfried Rauch, e do filho de McQueen, Chad McQueen. Também inclui gravações de John Sturges e Steve McQueen.\n[…]\nLe Mans no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Targa Florio",
      "descricao": "Corrida de automóveis em estradas abertas criada em 1906 por Vincenzo Florio, disputada como prova de velocidade até 1977."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que nome a Porsche deu à versão do 911 com teto removível, em homenagem a uma corrida de estrada da Sicília em que fez sucesso?",
    "resposta": "Targa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Targa_Florio",
      "https://en.wikipedia.org/wiki/Porsche_911"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Targa_Florio",
        "situacao": "ok",
        "texto": "The Targa Florio was a public road endurance automobile race held in the mountains of Sicily near the island's capital of Palermo. Founded in 1906, it was the oldest sports car racing event and was part of the World Sportscar Championship between 1955 and 1973. While the first races consisted of a whole tour of the island, the track length in the race's last decades was limited to the 72 km (45 mi\n[…]\nEven within Italy, many events became more significant, like the Mille Miglia, or the Tripoli Grand Prix in Italian North Africa. Without the international contacts and influence of Florio, the Targa could not uphold an unchallenged slot in the calendars. The 20 May 1934 Moroccan Grand Prix was held on the same day. In 1935, the Automobile Club di Sicilia tried to erase the name of Florio and call it Targa Primavera Siciliana, but that failed.\n[…]\nThe 1956 World Sportscar Championship had only five rounds, as Le Mans was excluded for limiting prototype engine capacity to only 2.5 liter rather than 3.0, and the Targa for Count Florio insisting on running 10 laps rather than only 8 as demanded by the CSI officials who were much more concerned now about safety. International entrants took part anyway, and the non-championship 1956 Targa Florio saw the first of many wins for Porsche.\n[…]\nThe event was won by a Porsche 911 Carrera RS prototype as the proper prototype-sportcars of Alfa and Ferrari suffered crashes or other troubles, some being driven by F1-pilots like Jacky Ickx and Clay Regazzoni with hardly any Targa experience.\n[…]\nAfter winning the race several times, Porsche named the hardtop convertible version of the 911 after the Targa. The name targa means plaque or plate, see targa top.\n[…]\nTarga Florio History\n[…]\nPorsche at Targa Florio\n[…]\nTarga Florio memorabilia\n[…]\nThe full Targa Florio for GrandPrix Legends\n[…]\nLe Auto. Targa Florio, 1906 1977, Gallery of winners.\n[…]\nHistory of the Targa Florio"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Porsche_911",
        "situacao": "ok",
        "texto": "The Porsche 911 model series (pronounced Nine Eleven or in German: Neunhundertelf, or colloquially Neunelfer) is a family of two-door, high performance rear-engine sports cars, introduced in September 1964 by Porsche of Stuttgart, Germany, and now in its eighth generation. All 911s have a rear-mounted flat-six engine, and usually 2+2 seating, except for special 2-seater variants.\n[…]\nThe 911 has been raced extensively by private and factory teams, in a variety of classes. It is among the most successful competition cars. In the mid-1970s, the naturally aspirated 911 Carrera RSR won world championship races including Targa Florio and the 24 Hours of Daytona. The 911-derived 935 turbo also won the 24 Hours of Le Mans in 1979. Porsche won the World Championship for Makes in 1976, 1977, 1978, and 1979 with 911-derived models.\n[…]\nThe Targa had a stainless steel-clad roll bar, as automakers believed that proposed rollover safety requirements by the US National Highway Traffic Safety Administration (NHTSA) would make it difficult for fully open convertibles to meet regulations for sale in the US, an important market for the 911. The name \"Targa\" came from the Targa Florio sports car road race in Sicily, Italy in which Porsche had several victories until 1973.\n[…]\nIn 1988, Porsche produced 875 examples of the CE or Commemorative Edition 911 Carrera in coupe, targa and cabriolet variants to mark the production of the 250,000th 911. Distinguishing features include special diamond blue metallic paint with colour-matched Fuchs wheels, front and rear spoilers, and interior carpets and leather. These cars also featured Dr. Ferdinand Porsche's signature embroidered on the seats in the headrest area.\n[…]\nTotal production of the 911 3.2 Carrera series was 76,473 cars (35,670 coupé, 19,987 cabrio, 18,468 targa).\n[…]\nOfficial Porsche 911 microsite\n[…]\nOfficial USA Porsche 911 page"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Targa_Florio",
        "situacao": "ok",
        "texto": "A Targa Florio é uma das mais antigas corridas automobilísticas da Itália. Junto com as Mille Miglia, é certamente a corrida italiana mais famosa no mundo.\n[…]\nA prova foi idealizada, criada, financiada e organizada  por Vincenzo Florio, um siciliano de rica família fascinado pelo novo meio de locomoção e já conhecido no ambiente das corridas por ter participado a algumas competições do início do século XX.\n[…]\nA Targa Florio foi disputado 61 vezes, praticamente sem interrupções, de 1906 a 1977 (excetuando-se os períodos bélicos mundiais).\n[…]\nLa Targa Florio - álbum de recordações\n[…]\nwww.targa-florio.net\n[…]\nTarga Florio 1906/1977\n[…]\nPublicacion:Targa Florio Il Mito - Autor : Giuseppe Valenza - Legenda Editore (Settimo Milanese - Italia)ISBN 978-88-88165-17-2",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "McLaren",
      "descricao": "Equipe britânica de Fórmula 1 fundada em 1963, pela qual Ayrton Senna conquistou seus três títulos mundiais."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que equipe de Fórmula 1 liga o bicampeonato de Emerson Fittipaldi, em 1974, aos três títulos de Ayrton Senna?",
    "resposta": "McLaren",
    "fonte": [
      "https://en.wikipedia.org/wiki/Emerson_Fittipaldi",
      "https://en.wikipedia.org/wiki/McLaren"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emerson_Fittipaldi",
        "situacao": "ok",
        "texto": "Emerson Fittipaldi (Brazilian Portuguese: [ˈɛmeʁsõ fitʃiˈpawdʒi]; born 12 December 1946) is a Brazilian former racing driver and motorsport executive, who competed in Formula One from 1970 to 1980. Fittipaldi won two Formula One World Drivers' Championship titles,  in 1972 and 1974 with Lotus and McLaren, respectively; he won 14 Grands Prix across 11 seasons.\n[…]\nHe later moved to McLaren for 1974, winning the title once again, and helping McLaren win their first Constructors' Championship. He surprised the paddock by moving to his brother's Fittipaldi Automotive team prior to the 1976 season, being replaced by James Hunt. Success eluded him during his final years in Formula One, with the Fittipaldi cars not competitive enough to fight for victories. Fittipaldi took two more podium finishes, before retiring in 1980.\n[…]\nFittipaldi left Lotus to sign with the promising McLaren team. Driving the highly efficient McLaren M23, he had three victories in 1974, reached the podium four other times, and beat out Clay Regazzoni in a close battle for his second championship. The following season, he notched two more victories and four other podiums, but was second to a dominant Niki Lauda.\n[…]\nHowever, at the height of his F1 success, Fittipaldi shocked everyone by leaving McLaren to race for older brother Wilson Fittipaldi's Copersucar-sponsored Fittipaldi Automotive team.\n[…]\nIn 2008, Emerson and his brother Wilson entered the Brazilian GT3 Championship, driving a Porsche 997 GT3 for the WB Motorsports team. In 2011, he started embracing social media and became a Chairman of Motorsport.com. In 2013 he began writing a regular monthly blog column on the official website of McLaren.\n[…]\nLudvigsen, Karl (2002). Emerson Fittipaldi Heart of a Racer. Osceola: Motorbooks International. ISBN 1-85960-837-X.\n[…]\nEmerson Fittipaldi driver statistics at Racing-Reference"
      },
      {
        "url": "https://en.wikipedia.org/wiki/McLaren",
        "situacao": "ok",
        "texto": "McLaren Racing Limited ( mə-KLARR-ən), currently competing in Formula One as McLaren Mastercard F1 Team, is a British motor racing team based at the McLaren Technology Centre in Woking, Surrey, England. The team is a subsidiary of the McLaren Group, wholly owned by Mumtalakat Holding Company.\n[…]\nFounded by Bruce McLaren in 1963, the team made its Grand Prix debut at the 1966 Monaco Grand Prix, won its first Grand Prix at the 1968 Belgian Grand Prix, and took its first Formula One championships in 1974. Emerson Fittipaldi, James Hunt, Niki Lauda, Alain Prost, Ayrton Senna, Mika Häkkinen, Lewis Hamilton, and Lando Norris have won Drivers' Championships with McLaren.\n[…]\nThe team began life as a Formula One constructor in 1963 by Bruce McLaren. The team's maiden Grand Prix victory was at the 1968 Belgian Grand Prix. After Bruce McLaren died in a testing accident in 1970, Teddy Mayer took over and led the team to their first Formula One Constructors' Championship in 1974, with Emerson Fittipaldi and James Hunt winning the Drivers' Championship in 1974 and 1976 respectively.\n[…]\nThe McLaren M23, designed by Gordon Coppuck, was the team's new car for the 1973 season. Sharing parts of the design of both McLaren's Formula One M19 and Indianapolis M16 cars (itself inspired by Lotus's 72), it was a mainstay for four years. Hulme won with it in Sweden and Revson took the only Grand Prix wins of his career in Britain and Canada. In 1974, Emerson Fittipaldi, world champion with Lotus two years earlier, joined McLaren.\n[…]\nSince 2017, McLaren returned to its traditional papaya orange colours, which was also used on their cars entered in other racing series such as Extreme E and Formula E.\n[…]\nThe following drivers won the Formula One Esports Drivers' Championship for McLaren Shadows:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Emerson_Fittipaldi",
        "situacao": "ok",
        "texto": "Emerson Fittipaldi (São Paulo, 12 de dezembro de 1946) é um ex-automobilista e empresário brasileiro.\n[…]\nÉ um dos pilotos mais vitoriosos da história brasileira, e foi o primeiro brasileiro a se tornar campeão mundial de Fórmula 1 e em categorias de ponta no automobilismo internacional, abrindo portas para vários compatriotas. Fittipaldi foi campeão da Fórmula 3 Inglesa em 1969, foi bicampeão da Fórmula 1 em 1972 e 1974, campeão da Fórmula Indy em 1989 e bicampeão das 500 milhas de Indianápolis em 1989 e 1993.\n[…]\nO ano de 1971 não viu vitórias de Emerson, embora sua atuação consistente lhe tenha garantido três pódios. Em 1972, com 5 vitórias, Fittipaldi tornou-se o campeão mundial mais jovem da história da Fórmula 1, com 25 anos, oito meses e 29 dias, recorde que manteve por mais de três décadas e que só foi quebrado em 2005, pelo piloto espanhol Fernando Alonso. Em 1973, Emerson venceu mais 3 corridas, no entanto perdeu o título para o escocês Jackie Stewart.\n[…]\nEm 1974, o piloto brasileiro trocou a Lotus pela McLaren, e, com três vitórias (uma delas no Brasil), sagrou-se bicampeão do mundo. Ainda competitivo, venceu mais duas corridas pela mesma equipe no ano seguinte.\n[…]\nA partir de então houve um declínio técnico na equipe, e, ao final de 1980, no mesmo circuito de Watkins Glen onde vencera sua primeira prova, Emerson Fittipaldi retirou-se da Fórmula 1 como piloto; naquele ano, ele conseguiu o último pódio com o 3º lugar em Long Beach, tendo o compatriota Nelson Piquet como vencedor, e conquistado a primeira vitória na categoria.\n[…]\nEnzo Fittipaldi\n[…]\nEmerson Fittipaldi no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Nelson Piquet",
      "descricao": "Piloto brasileiro tricampeão mundial de Fórmula 1, em 1981, 1983 e 1987."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1988, já tricampeão, Nelson Piquet foi para a Lotus ocupar a vaga deixada por qual piloto brasileiro?",
    "resposta": "Ayrton Senna",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nelson_Piquet",
      "https://en.wikipedia.org/wiki/Team_Lotus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nelson_Piquet",
        "situacao": "ok",
        "texto": "Nelson Piquet Souto Maior (Brazilian Portuguese pronunciation: [ˈnɛwsõ piˈke], born 17 August 1952) is a Brazilian former racing driver and businessman, who competed in Formula One from 1978 to 1991. Piquet won three Formula One World Drivers' Championship titles, which he won in 1981, 1983, and 1987, and won 23 Grands Prix across 14 seasons.\n[…]\nPiquet and the number 1 went to a stagnating Lotus team in 1988, and his career took a nose dive despite the Camel sponsored Lotus 100T having the same specification Honda V6 turbo that powered the almost totally dominant McLarens of Ayrton Senna and Alain Prost - the 100T was a very poor chassis that was riddled with aerodynamic issues, was constantly flexing and was not properly compatible with the engine.\n[…]\nPiquet runs some other businesses, based in Brasília.\n[…]\nPiquet's net worth is around US$200 million currently.\n[…]\nPiquet was known for insulting and slandering other drivers during and after his racing career. In 1988, Piquet made comments in a magazine about his rival Nigel Mansell, calling him an \"uneducated blockhead\" and describing his wife as \"ugly\". He also falsely accused Ayrton Senna of being homosexual and called Enzo Ferrari \"senile\", adding to the latter statement that the Ferrari team would have performed better at the time if Ferrari was 30 years younger.\n[…]\nDespite Senna's high-profile relationships with Brazilian television personalities like Xuxa from 1988 to 1990 and Adriane Galisteu at the time of his death in 1994, Piquet continued to publicly refer to Senna as \"gay\" as late as 2020.\n[…]\nPiquet was portrayed by Hugo Bonemer in the 2024 Senna miniseries, a dramatization of the life and racing career of Ayrton Senna.\n[…]\nEntry on Nelson Piquet from grandprix.com\n[…]\nNelson Piquet Statistics Archived 30 September 2007 at the Wayback Machine\n[…]\nNelson Piquet from Revs Digital Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Team_Lotus",
        "situacao": "ok",
        "texto": "Team Lotus was the motorsport sister company of English sports car manufacturer Lotus Cars. The team ran cars in many motorsport categories including Formula One, Formula Two, Formula Ford, Formula Junior, IndyCar, and sports car racing. Under the direction of founder and chief designer Colin Chapman, Lotus was responsible for many innovative and experimental developments in critical motorsport, i\n[…]\nWhen Nigel Mansell departed at the end of the year the team hired Ayrton Senna. The Lotus 97T scored victories with de Angelis at Imola and Senna in Portugal and Belgium. The team, although it had now won three races instead of none, lost 3rd in the Constructors' Championship to Williams (who beat them on countback with 4 wins). Senna scored eight pole positions, with two wins (Spain and Detroit) in 1986 driving the evolutionary Lotus 98T.\n[…]\nSenna moved to McLaren in 1988, and Lotus signed Senna's countryman and then World Champion Nelson Piquet from Williams. Both Piquet and Nakajima failed to make any impressions in terms of fighting for victories. However the team still managed to finish 4th in the Constructors' Championship. Lotus showed in 1988 that it took more than a Honda engine to win races.\n[…]\nHerbert finished 9th in the Drivers' Championship with three 4th placements: the 1993 Brazilian Grand Prix, where he lost 3rd to Benetton's Michael Schumacher shortly before the end of the race; the 1993 European Grand Prix, where he made only one pit stop for tyres; and the 1993 British Grand Prix, where he was not far behind Riccardo Patrese's 3rd placed Benetton at the end, having benefited from the retirements of Ayrton Senna, Martin Brundle and Damon Hill.\n[…]\nPritchard, Anthony (2006). Lotus: The Competition Cars. Haynes Publishing. ISBN 978-1-84425-242-8.\n[…]\nMalik, Ibrar (2020). Team Lotus: Beyond the Colin Chapman Era. Independent. p. 492. ISBN 978-1-83804-940-9.\n[…]\nTeam Lotus at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nelson_Piquet",
        "situacao": "ok",
        "texto": "Nelson Piquet Souto Maior (Rio de Janeiro, 17 de agosto de 1952) é um ex-automobilista e empresário brasileiro, tricampeão mundial de Fórmula 1 nos anos de 1981, 1983 e 1987.\n[…]\nEm 1985, a chance de brigar na frente foi impedida quando Bernie Ecclestone assinou um contrato de fornecimento dos pneus Pirelli. O desenvolvimento dos pneus italianos era um desafio de proporções gigantescas. Nenhum resultado poderia ser cobrado antes de dois ou três anos. Piquet consegue uma vitória no ano. Ela aconteceu em Paul Ricard, na França. Sob muito calor o brasileiro faz uma corrida bem planejada. Ultrapassa Ayrton Senna da Team Lotus e Keke Rosberg da Williams.\n[…]\nNa primeira edição do Grande Prêmio da Hungria, Piquet realizou sobre Ayrton Senna, a ultrapassagem que muitos consideram como a mais bela de todos os tempos na Fórmula 1 – no fim da reta dos boxes, pelo lado de fora de uma curva de 180º, escorregando nas quatro rodas. O tricampeão Jackie Stewart, comentando a cena, disse que era \"como fazer um looping com um Boeing 747\".\n[…]\nA Honda, então consagrada com o melhor motor turbo na época, deixou a Williams, e em 1988 passou a equipar a McLaren e a Team Lotus. Para a McLaren, conseguiu a contratação de Ayrton Senna, e para o lugar que Senna deixara na Lotus levou Nelson Piquet com um contrato milionário. Mas o carro amarelo da lendária equipe, projetado pelo engenheiro francês Gérard Ducarouge (que trabalhou com Senna em 1985 a 1987 na equipe), mostrou-se problemático.\n[…]\nEm novembro de 2022, Nelson Piquet participa de manifestações em apoio ao então presidente da república.\n[…]\nLista de pilotos brasileiros na Fórmula 1\n[…]\nNelson Piquet\n[…]\nNelson Piquet - A trajetória de um campeão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Jackie Stewart",
      "descricao": "Ex-piloto escocês de Fórmula 1, tricampeão mundial pela Tyrrell, apelidado de Flying Scot."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1973, já tricampeão, Jackie Stewart se aposentou sem disputar o que seria seu centésimo Grande Prêmio. Que fato o levou a isso?",
    "resposta": "A morte do companheiro François Cevert",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jackie_Stewart",
      "https://en.wikipedia.org/wiki/François_Cevert"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jackie_Stewart",
        "situacao": "ok",
        "texto": "Sir John Young Stewart (born 11 June 1939) is a British former racing driver, broadcaster and motorsport executive from Scotland who competed in Formula One from 1965 to 1973. Nicknamed \"the Flying Scot\", Stewart won three Formula One World Drivers' Championship titles with Tyrrell, and—at the time of his retirement—held the records for most wins (27) and podium finishes (43).\n[…]\nDuring the 1972 season, he missed the Belgian Grand Prix at Nivelles due to gastritis, and had to cancel plans to drive a Can-Am McLaren; he won the Argentine, French, U.S., and Canadian Grands Prix to come second to Emerson Fittipaldi in the drivers' standings. Stewart also competed in a Ford Capri RS2600 in the European Touring Car Championship, with F1 teammate François Cevert and other F1 pilots, at a time when the competition between Ford and BMW was at a height.\n[…]\nI was never sure I'd come home again.\" After the fatal crash of his teammate François Cevert in practice for the 1973 United States Grand Prix at Watkins Glen, Stewart retired one race earlier than intended and missed what would have been his 100th Grand Prix. Stewart had already won the Drivers' Championship at the Italian Grand Prix two races previously; this was a race where Stewart had to come into the pits to change a flat tyre, and drove from 20th to finish 4th.\n[…]\nThe accident we seen today is just typical if you're not properly protected.\" Stewart also revealed there was tension between him and ABC Sports producer Roone Arledge as Stewart was doing commercials for Ford Motor Company as well and several of the commercials aired on Wide World of Sports which he was a regular commentator there and that led him to leaving ABC in 1986.\n[…]\nJackie Stewart statistics\n[…]\nVideo Tribute to Jackie Stewart and his Tyrrell teammate François Cevert on YouTube\n[…]\nJackie Stewart at IMDb\n[…]\nJackie Stewart at the Scottish Sports Hall of Fame"
      },
      {
        "url": "https://en.wikipedia.org/wiki/François_Cevert",
        "situacao": "ok",
        "texto": "Albert François Cevert (French pronunciation: [fʁɑ̃swa səvɛʁ]; 25 February 1944 – 6 October 1973) was a French racing driver, who competed in Formula One from 1969 to 1973. Cevert won the 1971 United States Grand Prix with Tyrrell.\n[…]\nWhen Jackie Stewart had a hard time getting around Cevert in an F2 race at Crystal Palace the same year, Stewart told his team manager Ken Tyrrell to keep an eye on the young Frenchman. This personal recommendation was to pay off in 1970, as when Tyrrell needed a new driver at short notice Stewart's recommendation was still in his mind.\n[…]\nTyrrell later commented on the reason for Cevert's appointment to the Formula One team that \"everybody said it was (French oil company and Tyrrell sponsor) Elf, but it was really what Jackie said about him.\"\n[…]\nIn 1973, the Tyrrell team was back on top in Formula One and Cevert showed he was capable of running with Stewart at almost every race. He finished second six times, three times behind Stewart, who acknowledged that at times the Frenchman had been a very \"obedient\" teammate. As Cevert began to draw even with Stewart's driving abilities, the Scot was secretly planning to retire after the last race of the season in the United States. For the 1974 season, Cevert would be Tyrrell's team leader.\n[…]\nWilson Fittipaldi Júnior said he talked to Cevert earlier, wishing him good luck. After Cevert crashed, Wilson was still oblivious as to why all cars were returning to the pits, and why the crowd was silent. He then noticed that only Jackie Stewart's Tyrrell returned and not Cevert's. He talked with his race engineer, asking what happened.\n[…]\n† As Cevert was a graded driver, he was ineligible for points.\n[…]\nFrançois Cevert at IMDb\n[…]\nFrançois Cevert at Find a Grave"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jackie_Stewart",
        "situacao": "ok",
        "texto": "John Young Stewart OBE, conhecido como Jackie Stewart (Milton, West Dunbartonshire, 11 de junho de 1939) é um ex-automobilista britânico, nascido na Escócia. É tricampeão mundial de Fórmula 1, tendo conquistado seus títulos nos anos de 1969, 1971 e 1973, e é considerado um dos maiores pilotos da história do esporte. Além disso, Stewart paralelamente correu nas 24 Horas de Le Mans de 1965, nas 500 \n[…]\nO chefe Colin Chapman tinha ordenado a Ronnie Peterson que este cedesse sua posição a Fittipaldi, para manter o brasileiro vivo na luta pelo título, mas o sueco se recusou, irritando Emerson. Enquanto isso, Stewart superou um furo de pneu e ultrapassou vários carros, incluindo o de seu companheiro François Cevert, para terminar em quarto, resultado que lhe deu o título.\n[…]\nMas seu triunfo e seus recordes foram ofuscados pela trágica morte de seu companheiro de equipe e amigo, François Cevert, durante o Grande Prêmio dos Estados Unidos, o que levou Stewart a não participar daquele que seria seu centésimo GP na Fórmula 1 e a antecipar sua aposentadoria nas pistas.\n[…]\nSete anos depois, durante os treinos de classificação no circuito de Watkins Glen para a disputa do GP dos Estados Unidos de 1973, ocorreu um fato que levaria Jackie Stewart a abandonar a competição.\n[…]\nSeu parceiro da Tyrrell na época, o piloto francês François Cevert sofreu um grave acidente, o carro do piloto escapou da pista, bateu no guard rail do lado direito e ricocheteou em direção ao guard rail do lado esquerdo, virando de rodas para o ar e se arrastando pela \"lâmina\" de metal por mais de cem metros, foi degolado e teve morte instantânea. Chocado com a morte de François Cevert, Jackie Stewart decidiu abandonar de forma definitiva a Fórmula 1.\n[…]\n«Jackie Stewart statistics». www.4mula1.ro\n[…]\n«Jackie Stewart em StatsF1» (em inglês, francês, e espanhol)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Ford GT40",
      "descricao": "Carro de corrida da Ford que venceu as 24 Horas de Le Mans de 1966 a 1969."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos anos sessenta, a Ford criou um programa para derrotar a Ferrari em Le Mans depois que Enzo Ferrari desistiu de qual negócio?",
    "resposta": "Vender a Ferrari para a Ford",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ford_GT40",
      "https://en.wikipedia.org/wiki/Ford_v_Ferrari"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ford_GT40",
        "situacao": "ok",
        "texto": "The Ford GT40 is a high-performance mid-engined racing car originally designed and built for and by the Ford Motor Company to compete in 1960s European endurance racing and the World Sportscar Championship. Its specific impetus was to beat Scuderia Ferrari, which had won the prestigious 24 Hours of Le Mans race for six years running from 1960 to 1965.\n[…]\nHenry Ford II had wanted a Ford at Le Mans since the early 1960s. In early 1963, Ford reportedly received word through a European intermediary that Enzo Ferrari was interested in selling to Ford Motor Company. Ford reportedly spent several million dollars in an audit of Ferrari factory assets and in legal negotiations, only to have Ferrari unilaterally cut off talks at a late stage due to disputes about the ability to direct open-wheel racing.\n[…]\nThe Mk I met with little success in its initial tune during the 1964 season as it had to enter in the prototype class, against others prototypes, like Ferrari P and Chaparral. After the Nassau in December, Ford handed over the project to Carroll Shelby's Shelby American team. The car won the 1965 Continental 2000 km of Daytona and the 12 Hours of Sebring, but otherwise the GT40 program was a disappointment overall, once again failing to finish at Le Mans.\n[…]\nIn 1966, the three teams racing the Mk II (Chris Amon and Bruce McLaren, Denny Hulme and Ken Miles, and Dick Hutcherson and Ronnie Bucknum) dominated Le Mans, taking European audiences by surprise and beating Ferrari to finish 1-2-3 in the standings. Ford GT40 went on to win the Le Mans race for the next three years, but in very different form, as Mk.IV in 1967, and then twice an old Mk.I.\n[…]\nThe 2019 movie Ford v Ferrari is about the GT40's development and victory at the 1966 24 Hours of Le Mans.\n[…]\nFord Supervan, a van-bodied variant\n[…]\nFord v Ferrari, 2019 film about the GT40's development"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ford_v_Ferrari",
        "situacao": "ok",
        "texto": "Ford v Ferrari (titled Le Mans '66 in some European countries) is a 2019 American biographical sports drama film directed by James Mangold and written by Jez Butterworth, John-Henry Butterworth, and Jason Keller. It stars Matt Damon and Christian Bale, with Jon Bernthal, Caitríona Balfe, Tracy Letts, Josh Lucas, Noah Jupe, Remo Girone, and Ray McKinnon in supporting roles.\n[…]\nIn 1963, Ford Motor Company vice president Lee Iacocca proposes to Henry Ford II to boost their car sales by purchasing Ferrari, who are dominant in the annual 24 Hours of Le Mans. Owner Enzo Ferrari uses Ford's offer to secure a deal with Fiat that allows him to retain ownership of the firm's racing team, Scuderia Ferrari, and insults Ford and his whole company.\n[…]\nWhen Ford demands why he should not sack Shelby, Shelby explains that despite the GT40's reliability problems, it instilled fear in Enzo Ferrari by reaching 218 mph (350.8 km/h) on the Mulsanne Straight before breaking down. He says a race car cannot be designed by committee. Ford tells him to continue the project and report directly to him. During testing of the GT40 Mk II, the recurrent problem of brake fade causes a crash and fire, which Miles survives.\n[…]\nA film based on the rivalry between Ford and Ferrari for the dominance at the Le Mans endurance race had long been in works at 20th Century Fox. Initially, it was going to star Tom Cruise and Brad Pitt from an original screenplay titled Go Like Hell, by Jason Keller, the name being taken from the book, Go Like Hell: Ford, Ferrari, and Their Battle for Speed and Glory at Le Mans by A. J. Baime.\n[…]\nFord v Ferrari grossed $117.6 million in the United States and Canada, and $108.7 million in other territories, for a worldwide total of $226.3 million.\n[…]\nIn 2025, The Hollywood Reporter listed Ford v Ferrari as having the best stunts of 2019.\n[…]\nFord v Ferrari at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ford_GT40",
        "situacao": "ok",
        "texto": "Ford GT40 foi um carro de corrida americano de resistência de alto desempenho da Ford Motor Company, criado por ordens de Henry Ford II para correr nas 24 Horas de Le Mans e destruir o reinado da Ferrari. Isso porque Enzo Ferrari desistiu da venda de sua empresa à Ford na última hora e então, para Henry Ford II era questão de honra bater a Ferrari em seu território de domínio. E conseguiu com louv\n[…]\nHenry Ford II queria um Ford no Le Mans desde o início dos anos 1960. No início de 1963, a Ford teria recebido, através de um intermediário europeu, a notícia de que Enzo Ferrari estava interessado em vender para a Ford Motor Company.\n[…]\nA Ford então gastou vários milhões de dólares em uma auditoria dos ativos da fábrica da Ferrari e em negociações legais, apenas para que a Ferrari interrompesse unilateralmente as negociações em um estágio final devido a disputas sobre a capacidade de dirigir corridas de rodas abertas.\n[…]\nEnzo interrompeu o negócio por despeito e Henry Ford II, enfurecido, direcionou sua divisão de corridas para encontrar uma empresa que pudesse construir um batedor de Ferrari no circuito mundial de corridas de resistência. O carro teve a direção de construção por Carrol Shelby e o piloto Ken Milles que moldaram o carro que bateu mais de 3 recordes de voltas em uma mesma Le Mans, ganhando de 1966 a 1969 seguidas corridas, ganhando o título de “Killers of Ferraris” (matador de Ferraris).\n[…]\nPara esse fim, a Ford iniciou as negociações com a Lotus, Lola e Cooper. Cooper não tinha experiência em GT ou protótipo e seus desempenhos na Fórmula 1 estavam em declínio. Foi retratado no filme Ford vs Ferrari de 2019 do diretor James Mangold. O filme venceu alguns prêmios, além de receber quatro indicações no Oscar 2020, incluindo a indicação de melhor filme do ano, vencendo duas estatuetas, a de melhor edição de som e a de melhor montagem.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Scuderia Ferrari",
      "descricao": "Equipe de corrida da Ferrari, fundada por Enzo Ferrari em 1929 e presente na Fórmula 1 desde 1950."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os carros de corrida da Ferrari são vermelhos porque, nas antigas corridas internacionais, essa cor identificava o quê?",
    "resposta": "Os carros da Itália",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rosso_corsa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rosso_corsa",
        "situacao": "ok",
        "texto": "Rosso corsa (lit. \"racing red\" in Italian) is the red international motor racing colour of cars entered by teams from Italy.\n[…]\nConsequently, manufacturers such as Alfa Romeo, Lancia, and Maserati – and subsequently Scuderia Ferrari and more rarely Fiat – painted their competition cars in this colour so that spectators could identify the Italian teams competing in motor racing championships.Specific variants of rosso corsa soon developed within the different Italian manufacturers: rosso Ferrari is defined in a lighter shade, while rosso Alfa, used by Alfa Romeo, assumes a darker tone—although the company from the Alfa Romeo Portello Plant has historically also been associated with green, as seen in the Biscione, the emblem featured in the Alfa Romeo logo, and particularly the green Alfa Romeo Quadrifoglio, which marks its sporting and competition models.\n[…]\nHowever, Ferrari cars entered by non-Italian privateer teams wore their respective national racing colours until the 1961 Belgian Grand Prix when Belgian driver Olivier Gendebien privately entered a Ferrari car painted in the Belgian racing yellow colour, scoring 4th behind three other Ferrari cars painted in red as they were entered by the Scuderia Ferrari works team itself, and driven by US drivers Phil Hill and Richie Ginther as well as German Wolfgang von Trips.\n[…]\nSince Ferrari cars entered in 1965 and 1969 seasons by the NART team and at the 1966 Italian Grand Prix by the British privateer Reg Parnell team kept wearing the red colour, the 1964 Mexican Grand Prix was the last time Ferrari cars wore other than the traditional red colour in Formula One."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Grande Prêmio do Brasil de 2008",
      "descricao": "Última corrida da temporada de 2008 da Fórmula 1, em Interlagos, vencida por Felipe Massa, em que Lewis Hamilton garantiu o título."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em Interlagos, em 2008, Hamilton tirou o título de Massa ao ultrapassar, nas últimas curvas, um piloto alemão da Toyota. Quem?",
    "resposta": "Timo Glock",
    "distratores": [
      "Nick Heidfeld",
      "Nico Rosberg",
      "Adrian Sutil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/2008_Brazilian_Grand_Prix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2008_Brazilian_Grand_Prix",
        "situacao": "ok",
        "texto": "The 2008 Brazilian Grand Prix (formally the Formula 1 Grande Prêmio do Brasil 2008) was a Formula One motor race held on 2 November 2008 at the Autódromo José Carlos Pace (Interlagos) in São Paulo, Brazil. It was the eighteenth and final race of the 2008 Formula One World Championship. Ferrari driver Felipe Massa won the 71-lap race from pole position; this was the last of Massa's 11 Grand Prix wi\n[…]\nHamilton passed Toyota's Timo Glock in the final corners of the race to finish fifth, securing him the points needed to take the Drivers' Championship.\n[…]\nTrulli's Toyota teammate, Timo Glock, passed Fisichella later on in the same lap for sixth. Massa and Sebastian Vettel traded fastest lap times; Vettel's 1:14.214 on lap 25 was surpassed by Massa's 1:14.161 a lap later. However, Vettel made a pit stop soon after, having been lighter-fuelled than his Ferrari opponent. He rejoined in sixth position, behind Glock. Kovalainen passed Trulli and Fisichella in separate manoeuvres, gaining seventh position.\n[…]\nTimo Glock was fuelled so he could complete the race without stopping again at his pit stop on lap 36. Massa was the first of the championship frontrunners to pit, on lap 38; Alonso and Hamilton made pit stops two laps after. When Räikkönen made a pit stop on lap 43, Massa had regained the lead, ahead of Alonso. Räikkönen rejoined ahead of Hamilton in third place. Fisichella's stop was marred by transmission problems, dropping him to 18th position when he resumed.\n[…]\nThe rain began to fall heavily on lap 69 and Hamilton ran wide, which allowed Vettel to take fifth position. As Massa crossed the finish line to win the race, Hamilton battled Vettel for the crucial point needed to win the championship. Hamilton did not know of his position upon beginning the final lap and was told over the radio to overtake Glock during the fifth-place battle."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_do_Brasil_de_2008",
        "situacao": "ok",
        "texto": "O Grande Prêmio do Brasil de 2008 (formalmente XXXVII Grande Prêmio do Brasil) foi uma etapa da Fórmula 1, realizada em 2 de novembro de 2008, no Autódromo José Carlos Pace, em São Paulo, Brasil. Foi a décima oitava e última corrida do Campeonato Mundial de Fórmula 1 de 2008. A corrida de 71 voltas foi vencida pelo piloto da Ferrari Felipe Massa, que largou na pole position. Fernando Alonso, da Re\n[…]\nLewis Hamilton ultrapassou Timo Glock da Toyota nas últimas curvas para terminar em quinto, garantindo o título de campeão da temporada.\n[…]\nFernando Alonso, Sebastian Vettel, Nick Heidfeld, Sébastien Bourdais e Timo Glock completaram as dez primeiras colocações. Robert Kubica conquistou a 13ª colocação, mesmo fazendo uma boa sessão. David Coulthard, em sua última corrida da Fórmula 1, qualificou em 14º. Rubens Barrichello, na 15ª colocação, foi mais rápido do que o companheiro de equipe, Jenson Button, que ficou em 17º. Os pilotos da Williams e Force India ficaram nas últimas posições.\n[…]\nTimo Glock reabasteceu na volta 36, para que completasse a corrida sem parar novamente. Massa parou no pit stop na volta 38. Alonso e Hamilton pararam duas voltas depois. Quando Räikkönen fez um pit stop na volta 43, Massa recuperou a liderança e ficou à frente de Alonso. Räikkönen voltou à frente de Hamilton, em terceiro lugar. A parada de Fisichella foi prejudicada devido a problemas de transmissão, fazendo com que caísse para a 18ª posição.\n[…]\nA chuva leve começou a cair na volta 63. Heidfeld fez uma parada e mudou seus pneus para intermediários, tentando repetir a estratégia usada no Grande Prêmio da Bélgica, o que levou o alemão ao pódio. Kovalainen fez uma parada na volta 65; Alonso e Räikkönen fizeram mais uma parada na volta seguinte. Hamilton e Vettel pararam e colocaram pneus intermediários na volta 66. Glock permaneceu com seus pneus de pista seca e subiu para a quarta posição.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Grande Prêmio da Europa de 1993",
      "descricao": "Corrida de Fórmula 1 disputada sob chuva em abril de 1993, vencida por Ayrton Senna depois de uma primeira volta histórica."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1993, sob chuva, Ayrton Senna ultrapassou quatro carros na primeira volta e venceu o Grande Prêmio da Europa. Em que circuito inglês?",
    "resposta": "Donington Park",
    "fonte": [
      "https://en.wikipedia.org/wiki/1993_European_Grand_Prix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1993_European_Grand_Prix",
        "situacao": "ok",
        "texto": "The 1993 European Grand Prix (formally the Sega European Grand Prix) was a Formula One motor race held on 11 April 1993 at Donington Park, Leicestershire. It was the third race of the 1993 FIA Formula One World Championship. The race was contested over 76 laps and was won by Ayrton Senna for the McLaren team, ahead of second-placed Damon Hill and third-placed Alain Prost, both driving for the Will\n[…]\nSenna's drive to victory is regarded as one of his finest, and his first lap exploits are particularly lauded, in which he passed four drivers – Michael Schumacher, Karl Wendlinger, Damon Hill and Alain Prost – to take the lead in a single lap in damp conditions. The race was the first held under the European Grand Prix title since 1985, and to date is the only Formula One Grand Prix to have been held at the Donington Park circuit.\n[…]\nAfter plans to hold an Asian Grand Prix at the Nippon Autopolis in Japan failed to materialise, the first European Grand Prix for eight years was run as the third race of the 1993 season. Donington Park was awarded the race, having unsuccessfully bid to host the British Grand Prix. Video game company Sega sponsored the race and the logo could be seen throughout the Grand Prix and on the podium. Sega also had naming rights to the Grand Prix.\n[…]\nBarrichello, third, had trouble with his fuel pressure and retired, giving the place to Prost. Senna set the fastest lap on lap 57, on a lap when he drove into the pit lane but aborted the pit stop, showing that there actually was a shortcut through the pit lane. This is due to the Grand Prix configuration of Donington, which has the pit entry before the final hairpin corner onto the start/finish straight.\n[…]\nHenry, Alan (1993). AUTOCOURSE 1993–94. Hazleton Publishing. ISBN 1-874557-15-2."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Europa_de_1993",
        "situacao": "ok",
        "texto": "O Grande Prêmio da Europa de 1993 (originalmente XXXVIII Sega European Grand Prix, por motivo de patrocínio) foi a terceira das 16 etapas do campeonato mundial de Fórmula 1 do ano de 1993. A corrida foi realizada no circuito de Donington Park, no dia 11 de abril, a única vez em que o circuito recebeu uma prova da categoria. A vitória foi conquistada pelo brasileiro Ayrton Senna, a bordo de uma McL\n[…]\nEssa corrida ficou famosa no Brasil por conta de 2 feitos do Ayrton Senna: o primeiro é que ele realizou o que é considerado pela maioria dos especialistas em automobilismo como “a melhor primeira volta da história”. E o segundo é que ele cravou a volta mais rápida da prova passando por dentro do box (à época não tinha limite de velocidade passar pelos boxes). Uma outra curiosidade a respeito desse GP é que Rubens Barrichelo também fez uma grande primeira volta, passando 8 carros.\n[…]\nA corrida foi marcada pelo desempenho do piloto Ayrton Senna, que realizou o que é considerado pela maioria dos especialistas em automobilismo como “a melhor primeira volta da história”. O piloto havia feito o quarto tempo no treino classificatório. Na largada, sob chuva, o piloto acabou caindo para a quinta colocação, mas com facilidade Ayrton logo se recuperou.\n[…]\nAyrton Senna também fez o melhor tempo da corrida, mas de uma forma inusitada. O piloto entrou nos boxes quando a equipe não estava pronta para fazer o pit stop. Ele então passou reto e acabou fazendo a melhor volta daquele grande prêmio. Este fato foi possível porque no circuito de Donington, a curva de entrada dos boxes é menor do que a curva que leva à reta principal. Como naquela época não havia limite de velocidade no pit lane, Senna, então, usou esse artifício para ganhar tempo na pista.\n[…]\nPrimeiro ponto de Fabrizio Barbazza na Fórmula 1.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Max Verstappen",
      "descricao": "Piloto holandês de Fórmula 1 nascido em 1997, tetracampeão mundial de 2021 a 2024 pela Red Bull."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 2016, aos dezoito anos, logo na estreia pela Red Bull, Max Verstappen venceu sua primeira corrida de Fórmula 1. Em que país?",
    "resposta": "Espanha",
    "distratores": [
      "Mônaco",
      "Áustria",
      "Itália"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/2016_Spanish_Grand_Prix",
      "https://en.wikipedia.org/wiki/Max_Verstappen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2016_Spanish_Grand_Prix",
        "situacao": "ok",
        "texto": "The 2016 Spanish Grand Prix (formally known as the Formula 1 Gran Premio de España Pirelli 2016) was a Formula One motor race held on 15 May 2016 at the Circuit de Barcelona-Catalunya in Montmeló, Spain. The race was the fifth round of the 2016 FIA Formula One World Championship, and marked the forty-sixth running of the Spanish Grand Prix as a round of the Formula One World Championship. It was t\n[…]\nMax Verstappen won the race upon his début for his new team Red Bull, having swapped his Toro Rosso seat with Daniil Kvyat ahead of the event. At the age of 18 years and 228 days, Verstappen became the youngest ever winner and the youngest driver to score a podium finish of a Formula One race, breaking the previous records held by Sebastian Vettel. In the process he also became the first Dutchman to win a Grand Prix and the first Grand Prix winner born in the 1990s.\n[…]\nDaniil Kvyat and Max Verstappen traded places ahead of the race. Verstappen joined Red Bull Racing while Kvyat returned to Scuderia Toro Rosso. Red Bull's team principal Christian Horner explained the driver swap with Verstappen's talent, saying that the 18-year-old Dutchman and Daniel Ricciardo had the potential to become Formula One's best driver pairing. Furthermore, he stressed that Verstappen's move to Red Bull would tie him to the team for the foreseeable future.\n[…]\nWith 100 points from the first four races, Nico Rosberg remained on top of the Drivers' Championship, while Hamilton's retirement dropped him behind Räikkönen, who now trailed Rosberg by 39 points, four points ahead of Hamilton. Sebastian Vettel and Daniel Ricciardo were level on points with 48, while Verstappen's victory moved him into sixth on 38. In the Constructors' standings, Mercedes retained their lead on 157 points, but Ferrari closed the gap to 48 points, with Red Bull in third on 94.\n[…]\n2016 Catalunya GP3 Series round"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Max_Verstappen",
        "situacao": "ok",
        "texto": "Max Emilian Verstappen (Dutch pronunciation: [ˈmɑks fɛrˈstɑpə(n)]; born 30 September 1997) is a Dutch and Belgian racing driver who competes under the Dutch flag in Formula One for Red Bull Racing. Verstappen has won four Formula One World Drivers' Championship titles, which he won consecutively from 2021 to 2024 with Red Bull, and has won 74 Grands Prix across 12 seasons.\n[…]\nAged 17, Verstappen signed for Toro Rosso in 2015 as part of the Red Bull Junior Team, becoming the youngest driver in Formula One history at the Australian Grand Prix. Following several points finishes in his debut season, Verstappen retained his seat for 2016 before being promoted to parent team Red Bull to partner Daniel Ricciardo after four rounds. On debut for Red Bull, aged 18, Verstappen won the Spanish Grand Prix, becoming the youngest-ever driver to win a Formula One Grand Prix.\n[…]\nFollowing his maiden Formula One win, at the 2016 Spanish Grand Prix, three-time World Drivers' Champion Niki Lauda described Verstappen as the \"talent of the century\". Red Bull team principal Christian Horner stated that Verstappen is the best driver Red Bull have ever seen: \"I have no doubt [Verstappen is] the best we have seen on one of our cars, in terms of outright raw ability and commitment. He's the best driver we've seen.\"\n[…]\nWe saw the [qualifying] lap in Jeddah, until he touched the wall at the last corner, that lap was coming from Max, not the Red Bull.\" Karun Chandhok likened Verstappen's ruthless and uncompromising attitude in race combat to seven-time World Drivers' Champion Michael Schumacher. By 2025, Andrew Benson of BBC Sport opined that Verstappen was \"regarded by almost everyone in [Formula One] as the best driver in the world\".\n[…]\nLorenzo Bandini Trophy: 2016\n[…]\n† As Verstappen was a guest driver, he was ineligible for championship points.\n[…]\nMax Verstappen career summary at DriverDB.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Espanha_de_2016",
        "situacao": "ok",
        "texto": "Grande Prêmio da Espanha de 2016 (formalmente denominado Formula 1 Gran Premio de España Pirelli 2016) foi a quinta etapa da temporada de 2016 da Fórmula 1. Foi disputado no dia 15 de maio de 2016 no Circuito da Catalunha, Montmeló, Espanha. O holandês Max Verstappen, da Red Bull Racing, venceu a corrida, sendo sua primeira vitória na categoria em sua primeira corrida na equipe, passando a ser tam\n[…]\nNo dia 05 de maio de 2016, a equipe Red Bull Racing promoveu o holandês, Max Verstappen na equipe austríaca e rebaixando o piloto russo, Daniil Kvyat para a equipe Toro Rosso. A escuderia austríaca aproveitou o incidente provocado pelo russo de 22 anos para antecipar um plano que desejava para um futuro breve: promover o garoto prodígio Max Verstappen, de 18 anos, que tem encantado a cúpula da equipe com as boas atuações na STR.\n[…]\nAs duas Red Bulls conseguiram bater os dois carros da Ferrari, com Verstappen à frente de Ricciardo. Raikkonen e Vettel ficaram logo atrás.\n[…]\nRiccardo anotou uma boa volta e terminou em terceiro, a frente de Verstappen, que foi superado pela primeira vez na classificação e ficou em quarto.\n[…]\nNa 43ª volta Ricciardo, que apresentava um ritmo de corrida pior em relação aos rivais, fez nova troca de pneus. Quatro giros mais tarde, a McLaren de Fernando Alonso apresentou um problema, fazendo com que o espanhol abandonasse a prova. Na frente, Räikkönen se aproximou de vez de Verstappen na 48ª volta, sem conseguir ainda uma tentativa de ultrapassagem. Vettel, que se aproximava dos líderes, também viu Ricciardo diminuir sua diferença, encostando de vez na 57ª passagem.\n[…]\nNa ponta, Verstappen conseguiu abrir um segundo para Räikkönen, e seguiu para vencer pela primeira vez na carreira tornando-se o piloto mais jovem a vencer uma corrida e também a subir ao pódio aos 18 anos e 228 dias, ao mesmo tempo foi o primeiro neerlandês a vencer uma prova.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Mario Andretti",
      "descricao": "Ex-piloto ítalo-americano, campeão mundial de Fórmula 1 em 1978 e vencedor da Indy 500."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Mario Andretti nasceu em 1940 em Montona, na península da Ístria, então italiana. Hoje essa cidade pertence a qual país?",
    "resposta": "Croácia",
    "distratores": [
      "Eslovênia",
      "Itália",
      "Áustria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mario_Andretti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mario_Andretti",
        "situacao": "ok",
        "texto": "Mario Gabriele Andretti (born February 28, 1940) is an American former racing driver who competed in Formula One from 1968 to 1982, and IndyCar from 1964 to 1994. Andretti won the Formula One World Drivers' Championship in 1978 with Lotus, and won 12 Grands Prix across 14 seasons. In American open-wheel racing, Andretti won four IndyCar National Championship titles and the Indianapolis 500 in 1969\n[…]\nMario Gabriele Andretti was born on February 28, 1940, to an Istrian-Italian family in Montona, Istria, Kingdom of Italy (present-day Motovun, Croatia). He was born six hours before his twin brother Aldo. He is the son of Alvise \"Gigi\" Andretti, who worked as a farm administrator in Italy and for Bethlehem Steel in the U.S., and his wife Rina. He also had an older sister, Anna Maria Andretti Burley.\n[…]\nAndretti's family owned a 2,100-acre (850 ha) farm in Montona, but after World War II, the Treaty of Paris (1947) transferred the territory to communist-controlled Yugoslavia. As a result, the Andretti family joined the Istrian–Dalmatian exodus in 1948. The family lost all their land and was permitted to take only one truckload of possessions. They spent seven years in a refugee camp in Lucca, living in an abandoned college dormitory without running water.\n[…]\nAfter Penske helped start CART, Andretti sporadically competed in CART during the 1979 and 1980 seasons, winning one race at Michigan in 1980.\n[…]\nOn October 23, 2006, the Italian government made Andretti a Commendatore of the Order of Merit of the Italian Republic (OMRI), the most senior Italian order of merit, in honor of Andretti's racing career and commitment to his Italian heritage. In 2008, Andretti was also named the honorary mayor of an association of Italian exiles from Andretti's birthplace of Montona.\n[…]\nMario Andretti driver statistics at Racing-Reference\n[…]\nMario Andretti at 24 Hours of Le Mans (in French)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mario_Andretti",
        "situacao": "ok",
        "texto": "Mario Gabrielle Andretti (Montona, 28 de fevereiro de 1940) é um ex-piloto norte-americano de ascendência italiana. Atualmente, é diretor do conselho de administração da equipe de Fórmula 1 da Cadillac, que estreará na temporada de 2026. É considerado uma das maiores lendas do automobilismo dos Estados Unidos, e um dos poucos pilotos americanos a obter sucesso também no exterior: foi campeão mundi\n[…]\nMario e seu irmão gêmeo Aldo nasceram em Montona, na península da Ístria (atualmente conhecida como Motovun - Croácia), que estava sob domínio italiano desde a Primeira Guerra Mundial. Foi anexada pela Iugoslávia após a Segunda Guerra Mundial e, como muitas outras famílias da região, a família de Mario Andretti se exilou em 1948. Na cidade italiana de Ancona, Mario teve seu primeiro contato com um carro de corrida: um Fórmula Júnior. A família viajou para os Estados Unidos em 1955.\n[…]\nConforme informação presente no The Official Andretti Family Website, foi então que Mario começou sua carreira automobilística. Em 1959, aos 19 anos, Mario e seu irmão gêmeo Aldo prepararam um carro de Stock Car e começaram a disputar corridas em um circuito oval amador de terra batida que ficava quase no quintal de casa, na cidade de Nazareth. Logo nas quatro primeiras provas, cada um dos gêmeos obteve duas vitórias.\n[…]\nPioneiro de uma dinastia de pilotos, Mario hoje atua como um consultor eventual na equipe Andretti Global, campeã da IndyCar Series em 2004, 2005, 2007 e 2012, propriedade de seu filho Michael Andretti, que tem entre seus pilotos o seu neto, Marco Andretti. Também é vice-diretor de uma vinícola chamada \"Andretti Winery\" em Napa Valley, na Califórnia.\n[…]\nNa véspera de seu aniversário de 86 anos, foi homenageado pela Cadillac, que nomeou seu primeiro bólido de Fórmula 1 como Cadillac MAC-26, ou \"Mario Andretti Cadillac 2026\".\n[…]\nMichael Andretti",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Gilles Villeneuve",
      "descricao": "Piloto canadense de Fórmula 1 da Ferrari, morto num treino em 1982, pai do campeão Jacques Villeneuve."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1982, o canadense Gilles Villeneuve, ídolo da Ferrari, morreu num acidente durante o treino classificatório em qual país?",
    "resposta": "Bélgica",
    "distratores": [
      "Itália",
      "França",
      "Mônaco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gilles_Villeneuve"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gilles_Villeneuve",
        "situacao": "ok",
        "texto": "Joseph Gilles Henri Villeneuve (French pronunciation: [ʒil vil.nœv]; 18 January 1950 – 8 May 1982) was a Canadian racing driver, who competed in Formula One from 1977 to 1982. Villeneuve was runner-up in the Formula One World Drivers' Championship in 1979 with Ferrari, and won six Grands Prix across six seasons.\n[…]\nVilleneuve was offered a deal by team owner Ron Dennis to rejoin McLaren in 1982, which he rejected because he was nervous over ending his contract with Ferrari but optimistic that the Italian team would be competitive. The first few races of the 1982 season saw Villeneuve leading in Brazil in the new 126C2, before spinning into retirement, and finishing third at the United States Grand Prix West before being disqualified for a technical infringement.\n[…]\nThe racetrack on Notre Dame Island in Montreal, host to the Formula One Canadian Grand Prix, was named Circuit Gilles Villeneuve in his honour at the 1982 Canadian Grand Prix and a sign reading “Salut Gilles” was painted at the start/finish line. His home country has continued to honour him: in Berthierville a museum was opened in 1992 and a lifelike statue stands in a nearby park which was also named in his honour.\n[…]\nThere is still a huge demand for Villeneuve memorabilia at the race-track shops and several books have been written about him. The number 27, the number of his Ferrari in 1981 and 1982, is still closely associated with him by fans. Villeneuve's son, Jacques, drove the No. 27 during his IndyCar and Indianapolis 500 winning season with Team Green, and has also used the number for occasional drives in NASCAR and the Speedcar Series.\n[…]\nIn 2017, Italian rock band, The Rock Alchemist wrote the song, \"27\" for their Elements album as a tribute to Gilles Villeneuve's #27 Ferrari F1 car.\n[…]\nGilles Villeneuve Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gilles_Villeneuve",
        "situacao": "ok",
        "texto": "Joseph Gilles Henri Villeneuve, mais conhecido como Gilles Villeneuve (), (Saint-Jean-sur-Richelieu, 18 de janeiro de 1950 — Lovaina, 8 de maio de 1982) foi um automobilista canadense.\n[…]\nNo mais grave deles, no Grande Prêmio do Japão de 1977, Villeneuve bateu com seu Ferrari 312T2 nº11 no Tyrrell P34 nº3 do sueco Ronnie Peterson, e o carro do piloto canadense foi lançado na direção de dois espectadores que assistiam a prova em local proibido e que morreram.\n[…]\nEm 8 de maio de 1982, Gilles Villeneuve morreu após um acidente durante a sessão de qualificação final para o Grande Prêmio da Bélgica em Zolder. No momento do acidente, Didier Pironi havia marcado um tempo de 0,1s mais rápido que Villeneuve para o sexto lugar.\n[…]\nVilleneuve estava usando seu último conjunto de pneus de qualificação; alguns dizem que ele estava tentando melhorar seu tempo na última volta, enquanto outros sugerem que ele estava especificamente tentando superar o melhor tempo feito por Pironi. Entretanto, o biógrafo de Villeneuve, Gerald Donaldson, cita o engenheiro de corrida da Ferrari, Mauro Forghieri, dizendo que o canadense, embora continuando com a sua maneira habitual, estava retornando aos boxes quando o acidente ocorreu.\n[…]\nVilleneuve foi mantido vivo em suporte vital, enquanto sua esposa Joann Barthe viajou de Monte Carlo para o hospital e os médicos consultaram especialistas em todo o mundo. Depois que Joann chegou na Bélgica, Gilles Villeneuve foi oficialmente declarado morto às 21:12 (Horário de Verão da Europa Central, UTC+2). Ele tinha 32 anos de idade.\n[…]\nVentisetterosso - Salut Gilles\n[…]\n«Gilles Villeneuve» (em inglês)\n[…]\ndisputa de Gilles Villeneuve n.27 e Didier Pironi em San Marino 1982",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Dale Earnhardt",
      "descricao": "Piloto americano de stock car, heptacampeão da NASCAR, apelidado de 'o Intimidador'."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2001, o heptacampeão da NASCAR Dale Earnhardt morreu num acidente na última volta de qual corrida?",
    "resposta": "Daytona 500",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dale_Earnhardt",
      "https://en.wikipedia.org/wiki/Death_of_Dale_Earnhardt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dale_Earnhardt",
        "situacao": "ok",
        "texto": "Ralph Dale Earnhardt (; April 29, 1951 – February 18, 2001) was an American professional stock car driver and racing team owner, who raced from 1975 to 2001 in the former NASCAR Winston Cup Series (now called the NASCAR Cup Series), most notably driving the No. 3 Chevrolet for Richard Childress Racing. His aggressive driving style earned him the nicknames \"the Intimidator\", \"the Man in Black\" and \n[…]\nOn February 18, 2001, Earnhardt died as a result of a basilar skull fracture sustained in a sudden last-lap crash during the Daytona 500. His death was regarded in the racing industry as being a crucial moment in improving safety in all aspects of car racing, especially NASCAR. He was 49 years old. Earnhardt has been inducted into numerous halls of fame, including the NASCAR Hall of Fame inaugural class in 2010.\n[…]\nHe once again came close to a win at the Daytona 500 and dominated Speedweeks before finishing second to Dale Jarrett on a last-lap pass. Earnhardt scored six wins en route to his sixth Winston Cup title, including wins in the first prime-time Coca-Cola 600 and The Winston, both at Charlotte, and the Pepsi 400 at Daytona. He beat Rusty Wallace for the championship by 80 points.\n[…]\nDale Earnhardt, Inc. won five races in the 2001 season, beginning with Steve Park's victory in the race at Rockingham just one week after Earnhardt's death. Earnhardt Jr. and Waltrip finished first and second in the series' return to Daytona in July for the Pepsi 400, a reverse of the finish in the Daytona 500. Earnhardt Jr. also won the fall races at Dover (first post 9/11 race) and Talladega and came to an eighth-place points finish.\n[…]\nDuring the third lap of the 2011 Daytona 500 (a decade since Earnhardt's death), and 2021 Daytona 500 (two decades since Earnhardt's death) the commentators on FOX fell silent while fans raised three fingers in a similar fashion to the tributes throughout 2001."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Death_of_Dale_Earnhardt",
        "situacao": "ok",
        "texto": "On February 18, 2001, American stock car racing driver and team owner Dale Earnhardt was involved in a fatal collision in the 2001 Daytona 500. In the final lap of the race, Earnhardt crashed into a retaining wall after making contact with Sterling Marlin and Ken Schrader. He was pronounced dead at Halifax Medical Center a short time later. The cause of death was a basilar skull fracture, which wa\n[…]\nEarnhardt died while competing in the 2001 Daytona 500, a NASCAR-sanctioned automobile race at Daytona International Speedway. NASCAR sanctions required the use of a carburetor restrictor plate for races held at that track as well as Talladega Superspeedway.\n[…]\nIn the weeks before the Daytona 500, Earnhardt elected not to attend the annual fan and media preview event, drawing vocal criticism from fellow driver Jimmy Spencer. On February 3 and 4, 2001, for the first time in his career, Earnhardt participated in the Rolex 24 endurance race at Daytona, the event which kicks off Speedweeks at the track. Earnhardt and his teammates, Dale Earnhardt Jr. (Earnhardt's son), Andy Pilgrim and Kelly Collins, finished fourth overall and second in class.\n[…]\nThose involved in the crash were Jason Leffler, Steve Park (another of Earnhardt's drivers), both Rusty (who would rally back to finish third) and Kenny Wallace, Jeff Gordon (the eventual Winston Cup champion for 2001) and Robby Gordon, both Bobby (the defending Winston Cup Champion) and Terry Labonte, Mark Martin, Tony Stewart, Elliott Sadler, Jeff Burton and Ward Burton (who had led the most laps in the race so far with 53), Jerry Nadeau, John Andretti, Buckshot Jones, Dale Jarrett (the defending Daytona 500 winner), and Andy Houston.\n[…]\nDuring the 2021 Daytona 500, fans and crew members at Daytona International Speedway paid tribute to Earnhardt on Lap 3, the 20th anniversary of his death. They stood and saluted him by holding up three fingers."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dale_Earnhardt",
        "situacao": "ok",
        "texto": "Ralph Dale Earnhardt, Sr. (Kannapolis, 29 de abril de 1951 — Daytona Beach, 18 de fevereiro de 2001) foi um piloto estadunidense da NASCAR.\n[…]\nSete vezes campeão da Winston Cup (atual NASCAR Cup Series), teve no total 76 vitórias, incluindo as 500 Milhas de Daytona de 1998 e as 600 Milhas de Charlotte nos anos de 1986, 1992 e 1993. Era conhecido como \"The Intimidator\" (O Intimidador), por causa da sua forma de pilotar intimidando outros pilotos durante a corrida.\n[…]\nApesar de seu heptacampeonato na categoria, levou 20 anos para a ganhar a Daytona 500, feito obtido na edição de 1998. Em 2001, o seu filho, Dale Earnhardt Jr., também correu e terminou em segundo lugar naquela que seria a sua ultima corrida.\n[…]\nMorreu após um acidente ocorrido na última volta das 500 Milhas de Daytona de 2001, envolvendo três carros. Casado 3 vezes, sua última esposa Teresa, pediu para Dale parar de correr, mas nunca conseguiu.\n[…]\nApós a morte de Earnhardt, a NASCAR passou a adotar inúmeras mudanças nos carros e nos circuitos a fim de aumentar a segurança dos pilotos.\n[…]\nDale Earnhardt Jr.\n[…]\n«Dale Earnhardt Inc» (em inglês). www.daleearnhardtinc.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Paris–Rouen de 1894",
      "descricao": "Prova de automóveis entre Paris e Rouen, na França, disputada em 1894 e considerada a primeira competição automobilística da história."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A prova de Paris a Rouen, na França, considerada a primeira competição de automóveis da história, foi disputada em que século?",
    "resposta": "Século dezenove",
    "distratores": [
      "Século dezessete",
      "Século dezoito",
      "Século vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Paris–Rouen_(motor_competition)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paris–Rouen_(motor_competition)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Equipe Fittipaldi",
      "descricao": "Equipe brasileira de Fórmula 1 criada pelos irmãos Wilson e Emerson Fittipaldi, que competiu de 1975 a 1982."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que piloto finlandês, campeão mundial de Fórmula 1 em 1982, correu pela equipe brasileira dos Fittipaldi em 1980 e 1981?",
    "resposta": "Keke Rosberg",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fittipaldi_Automotive",
      "https://en.wikipedia.org/wiki/Keke_Rosberg"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fittipaldi_Automotive",
        "situacao": "ok",
        "texto": "Fittipaldi Automotive was a Formula One racing team and constructor that competed from 1975 to 1982. The cars were officially called Copersucar until the end of 1979 and Fittipaldi from the beginning of 1980 onwards. It was the only Formula One team to have been based in Brazil. The team was formed during 1974 by racing driver Wilson Fittipaldi and his younger brother, double world champion Emerso\n[…]\nAt the end of 1979 Copersucar decided to end their sponsorship. The team bought the remains of close neighbour Wolf Racing, becoming a two car operation for the first time. The team was renamed Skol Team Fittipaldi for the 1980 season to reflect new sponsorship from Skol Brasil (now an AmBev brand). Emerson and Wolf Racing driver Keke Rosberg raced the first part of the season with reworked Wolf chassis from the previous year.\n[…]\nAlthough he remained capable of front-running performances, during his time with Fittipaldi Automotive he became an inconsistent performer. On several occasions team manager Jo Ramírez berated his driver after a sudden burst of speed indicated that he had not been driving to his full potential. By 1980 Fittipaldi's teammate Keke Rosberg thought him long past his best, and found him demotivated.\n[…]\nThe young Finn Keke Rosberg was struggling to get into a competitive seat when he joined Fittipaldi for the 1980 season. He had previously driven two disjointed seasons for the Theodore Racing, ATS and Walter Wolf Racing teams but although he had won a non-championship race with Theodore, he had scored no world championship points. Fittipaldi bought the remains of Wolf at the end of 1979.\n[…]\n\"The Official 2006 Season - Thoroughbred Grand Prix - World Championship Website\". Archived from the original on 23 February 2007. Retrieved 1 July 2006. -- A Fittipaldi Automotive F5A competes in the European Thoroughbred Grand Prix Championship. Brief details and pictures."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Keke_Rosberg",
        "situacao": "ok",
        "texto": "Keijo Erik \"Keke\" Rosberg (Finnish pronunciation: [ˈkeke ˈruːsbæri] ; born 6 December 1948) is a Finnish former racing driver and motorsport executive, who competed in Formula One from 1978 to 1986. Rosberg won the Formula One World Drivers' Championship in 1982 with Williams, and won five Grands Prix across nine seasons.\n[…]\nRosberg next emerged with the Wolf team, midway through the 1979 season. However, the team was having difficulty staying solvent, and Rosberg had problems in finishing races. Rosberg soon had to change teams again when Wolf left Formula One, and signed with Fittipaldi Automotive which had bought the remains of Walter Wolf's squad.\n[…]\nHe secured his first two point-scoring results in the 1980 season, including a sensational podium at the season-opening race at Buenos Aires, but the uncompetitiveness of the Fittipaldi car meant that Rosberg often failed to finish or qualify. 1981 was worse as he failed to score at all.\n[…]\nRosberg's fifth and final Grand Prix victory came at the 1985 Australian Grand Prix on the brand new Adelaide Street Circuit. As it was the final race of the season, it was also Rosberg's final race for Williams. Keke gave the winners trophy to his race engineer, Frank Dernie. The win enhanced Rosberg's reputation as a street circuit specialist, as four of his five championship Grand Prix wins (Monaco, Dallas, Detroit and Adelaide) had come on street circuits.\n[…]\nIn 1985, renowned Finnish actor Matti Pellonpää and his band released a song called \"Keke Rosberg formula rock\".\n[…]\nKeith Botsford & Keke Rosberg (1 January 1985). Keke: An Autobiography. Hutchinson. ISBN 978-0091561802.\n[…]\nMedia related to Keke Rosberg at Wikimedia Commons\n[…]\nRosberg, Keijo (1948–). Kansallisbiografia. (in English)\n[…]\nWebsite about Keke Rosberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escuderia_Fittipaldi",
        "situacao": "ok",
        "texto": "Escuderia Fittipaldi, também conhecida como: Copersucar-Fittipaldi, Skol-Fittipaldi ou Fittipaldi Automotive, foi uma escuderia de Fórmula 1 brasileira fundada em 1975 pelos irmãos Emerson e Wilson Fittipaldi Jr. (não confundir com Wilson Fittipaldi, o \"Barão\", que chegou a cortar a ajuda financeira aos filhos para tentar desencorajá-los da ideia). Competiu num total de 104 grandes prêmios. Sua es\n[…]\nNa sua história, a Copersucar-Fittipaldi teve diversos pilotos, como Ingo Hoffmann e Chico Serra, e até ajudou a formar um campeão mundial, o finlandês Keke Rosberg, que defendeu a equipe em 1980 e 1981.\n[…]\nAos que teimam em lembrar da Copersucar, depois Fittipaldi, como um capítulo risível da história da F-1, alguns números são esclarecedores.Na temporada de 1980, por exemplo, o time brasileiro terminou o campeonato em oitavo lugar com onze pontos, enquanto que a Ferrari ficou em decimo lugar com apenas oito pontos. Dois anos antes, a equipe ficou na frente de McLaren, Williams, Renault e Arrows no Mundial de Construtores.\n[…]\nEmerson Fittipaldi, que juntou-se à Copersucar em 1976, marcou um ponto a menos que o canadense Gilles Villeneuve, da Ferrari.\n[…]\nNos seus oito anos de vida, a Copersucar-Fittipaldi teve na sua folha de pagamento, além do bicampeão Emerson, o projetista Adrian Newey, hoje na Red Bull e com passagens na Williams e McLaren, Keke Rosberg, que seria campeão pela Williams em 1982, Harvey Postlethwaite, projetista que depois trabalhou na Ferrari e na Tyrrell, e Jo Ramirez, uma espécie de faz-tudo que teve papel importante na logística da McLaren nos anos 80 e 90.\n[…]\nSegundo lugar de Emerson Fittipaldi no Grande Prêmio do Brasil de 1978 e dois terceiros lugares: Keke Rosberg no GP da Argentina e Emerson Fittipaldi no GP do Oeste dos Estados Unidos, ambos na temporada de 1980.\n[…]\nWilson Fittipaldi Júnior\n[…]\nEmerson Fittipaldi\n[…]\nKeke Rosberg\n[…]\nRecuperação dos carros da Equipe Fittipaldi",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Lotus",
      "descricao": "Equipe britânica de Fórmula 1 fundada por Colin Chapman, que competiu de 1958 a 1994."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As quatro letras entrelaçadas no emblema da Lotus são as iniciais do nome completo de quem?",
    "resposta": "Colin Chapman",
    "fonte": [
      "https://en.wikipedia.org/wiki/Colin_Chapman",
      "https://en.wikipedia.org/wiki/Lotus_Cars"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Colin_Chapman",
        "situacao": "ok",
        "texto": "Anthony Colin Bruce Chapman  (19 May 1928 – 16 December 1982) was an English design engineer, inventor, and builder in the automotive industry, and founder of the sports car company Lotus Cars.\n[…]\nAnthony Colin Bruce Chapman was born on 19 May 1928 in Richmond, Surrey, and brought up at 44 Beech Drive, on the border of Muswell Hill in London N2. His father ran The Railway Hotel on Tottenham Lane next to Hornsey Railway Station. Chapman attended the Stationers' Company's School in Mayfield Road.\n[…]\nThe liquidators also recovered around £20 million from Swiss bank accounts controlled by Chapman and John DeLorean.\n[…]\nChapman was married to Hazel Chapman (1927–2021). He had two daughters and one son.\n[…]\nThe night before he died, Chapman watched a performance by his long-time friend and Lotus customer Chris Barber, the jazz trombonist, and his band. On 16 December 1982, Team Lotus tested the first Formula One car with active suspension, which eventually made its début with the Lotus 99T in 1987. Chapman suffered a fatal heart attack on the same day at his home in Norwich, and died at the age of 54.\n[…]\nGérard ('Jabby') Crombac, Colin Chapman: The Man and His Cars (Patrick Stephens, Wellingborough, 1986) ISBN 1-85960-844-2\n[…]\nHugh Haskell, Colin Chapman Lotus Engineering (Osprey Publishing, 1993) ISBN 1-85532-872-0\n[…]\nMike Lawrence, Colin Chapman Wayward Genius (Breedon Books Publishing, 2003) ISBN 1-85983-278-4\n[…]\nKarl Ludvigsen, Colin Chapman: Inside the Innovator (Haynes Publishing, 2010) ISBN 978-1-84425-413-2\n[…]\nColin Chapman biography by Dennis David Archived 10 October 2012 at the Wayback Machine\n[…]\nPicture of Colin Chapman, Long Beach F-1\n[…]\nThe Colin Chapman Museum and Education Centre"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lotus_Cars",
        "situacao": "ok",
        "texto": "Lotus Group (also known as Lotus Cars, or simply Lotus) is a British multinational automotive manufacturer of luxury sports cars and electric vehicles.\n[…]\nAt the trial of Lotus accountant Fred Bushell, the judge insisted that had Chapman lived, he would have received a sentence \"of at least 10 years.\"\n[…]\nTeam Lotus established Classic Team Lotus in 1992, which continues to maintain Lotus F1 cars and run them in the FIA Historic Formula One Championship. It also preserves the Team Lotus archive and Works Collection of cars, under the management of Colin Chapman's son Clive.\n[…]\nOn 18 August 2011 Lotus developed an all new in-house designed V8 destined for the new era range of cars. At 170 kg (375 lb) and just 612 mm (24.1 in) long, the unit is dry sump lubricated to save depth and will feature a 180° flat plane crank. The engine is being utilised as a stressed component, a technique pioneered by Colin Chapman in F1, specifically with the 1967 Type 49. It was expected to be used in the Le Mans LMP2 car in 2012.\n[…]\nDMC DeLorean. Changes to the original concept led to considerable schedule pressures. The car was deemed to require almost complete re-engineering, which was turned over to engineer Colin Chapman, founder of Lotus. Lotus replaced most of the unproven material and manufacturing techniques with those then employed by Lotus in the Lotus Esprit\n[…]\nGérard (\"Jabby\") Crombac, Colin Chapman: The Man and His Cars (Patrick Stephens, Wellingborough, 1986)\n[…]\nMike Lawrence, Colin Chapman: The Wayward Genius (Breedon Books, Derby, 2002)\n[…]\nRobin Read, Colin Chapman's Lotus: The Early Years, the Elite and the Origins of the Elan (Haynes, Sparkford, 1989)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Colin_Chapman",
        "situacao": "ok",
        "texto": "Anthony Colin Bruce Chapman (Londres 19 de maio de 1928 – 16 de dezembro de 1982) foi um importante engenheiro, construtor da indústria automobilística inglês e fundador da empresa de carros esportivos Lotus Cars.\n[…]\nEm 1952, ele fundou a empresa de carros esportivos Lotus Cars. Na Fórmula 1, criou o chassi monocoque, construído sob uma estrutura única. Utilizou seus conhecimentos de aerodinâmica para introduzir diversas outras inovações: aerofólios e assoalhos cujo formato produzia o chamado \"efeito solo\" (ground effect).\n[…]\nOs carros de Chapman com esse segundo acessório eram chamados de \"carros-asa\" e foram proibidos por causarem grande velocidade nas curvas, mas sem que possibilitasse ao piloto, nessa manobra, manejar com segurança os carros.\n[…]\nColin Chapman ficou famoso quando importantes ases do automobilismo venceram pilotando seus carros inovadores: Jim Clark, Jochen Rindt, Emerson Fittipaldi, Ronnie Peterson e Mario Andretti. Seu gesto de arremessar o boné para o alto, na linha de chegada, quando seus pilotos venciam, era conhecido em todo o mundo esportivo.\n[…]\nDepois de sua súbita morte em 1982 (Chapman estava prestes a ser preso e condenado por 10 anos por desvio de dinheiro na Inglaterra, e ter a sua equipe confiscada), circularam boatos de que Chapman na verdade continuava vivo, tendo forjado a mesma para escapar das dívidas com o governo, e que estaria inclusive morando no Brasil, o que nunca foi confirmado. Sua esposa havia vindo em um GP do Brasil com ele nos anos 70 e detestou o país.\n[…]\nNa década de 80, depois que Chapman morreu, ela veio a todos os GPs do Brasil, o que torna suspeita a morte de Chapman.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Indianapolis Motor Speedway",
      "descricao": "Autódromo oval de Indianápolis, nos Estados Unidos, sede das 500 Milhas de Indianápolis."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Do antigo piso de tijolos que deu ao oval de Indianápolis o apelido de Brickyard, que parte continua à vista na pista?",
    "resposta": "Uma faixa na linha de chegada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Indianapolis_Motor_Speedway"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Indianapolis_Motor_Speedway",
        "situacao": "ok",
        "texto": "The Indianapolis Motor Speedway is a motor racing circuit located in Speedway, Indiana, United States, an enclave suburb of Indianapolis, Indiana. It is the home of the Indianapolis 500 and the Brickyard 400, and formerly the home of the United States Grand Prix and the Indianapolis motorcycle Grand Prix. It is located six miles (9.7 km) west of Downtown Indianapolis.\n[…]\nOn the grounds of the speedway is the Indianapolis Motor Speedway Museum, which opened in 1956, and houses the Hall of Fame. The museum moved into its current building located in the infield in 1976. Also on the grounds is the Brickyard Crossing Golf Resort, which originally opened as the Speedway Golf Course in 1929. The golf course has 14 holes outside the track, along the backstretch, and four holes in the infield.\n[…]\nSince 2000, various road course layouts have been used for additional races at the Indianapolis Motor Speedway:\n[…]\nSince the mid-2000s, the speedway has occasionally hosted USAC quarter midget races on an infield oval.\n[…]\nAs of October 2026, the fastest official race lap records at the Indianapolis Motor Speedway are listed as:\n[…]\nIndianapolis Motor Speedway has a transitional climate with influences of both subtropical and continental. The nearest official weather station is at the Indianapolis International Airport, located just a few miles from the speedway.\n[…]\nDonald Davidson – historian of the Indianapolis Motor Speedway\n[…]\nList of fatalities at the Indianapolis Motor Speedway\n[…]\nList of National Historic Landmarks in Indiana\n[…]\nIndianapolis Motor Speedway – Official website\n[…]\nIndianapolis Motor Speedway race results at Racing-Reference\n[…]\nIndianapolis Motor Speedway Page on NASCAR.com\n[…]\nIndianapolis Motor Speedway from Indianapolis, a National Park Service Discover Our Shared Heritage Travel Itinerary\n[…]\nIndianapolis Motor Speedway Collection Archived September 5, 2015, at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Indianapolis_Motor_Speedway",
        "situacao": "ok",
        "texto": "Indianapolis Motor Speedway é um circuito oval, com um circuito misto combinado, localizado em Speedway, um enclave de Indianápolis, no estado de Indiana, Estados Unidos. Fica aproximadamente a 6 milhas (9,7 km) do centro de Indianápolis.\n[…]\nEm 14 de novembro de 1945 o circuito é vendido à Tony Hulman. Pouco a pouco, a superfície de 3,2 milhões de tijolos foi substituída por asfalto para completar a mudança em 1961, deixando intacto uma faixa de tijolos na linha de chegada, que lhe rendeu o apelido de \"The Brickyard\" (\"terreno de tijolos\").\n[…]\nNa década de 2000, o local abrigou o Grande Prêmio dos Estados Unidos de Fórmula 1 de 2000 a 2007, no circuito misto. Na sequência, a pista abrigou o motociclismo com o Grande Prêmio de Indianápolis da MotoGP, de 2008 a 2015. O circuito ganhou o soft wall nas curvas do oval a partir de 2002, e a Indy Lights começou a fazer corridas no traçado misto em 2005.\n[…]\nDesde meados da década de 2000, o Indianapolis Motor Speedway tem ocasionalmente hospedado corridas na USAC com um quarter midget.\n[…]\nA corrida é disputada em um layout mais novo, modificado do circuito usado anteriormente para os Grandes Prêmios dos Estados Unidos disputado no ciclo de 2000-2007 na Fórmula 1 e posteriormente o Moto GP, feita em sentido horário. Posteriormente, seria recém-reconfigurada para ter 2,439 milhas (3,925 km), no circuito misto de 14 curvas em Indianapolis Motor Speedway (uma chicane substitui a curva longa) e a seção de Snake Pit está incluída.\n[…]\nO Grande Prêmio de Indianápolis de MotoGP é um evento motociclístico que faz parte do mundial de MotoGP.\n[…]\nBrickyard 400\n[…]\nIndianapolis Motor Speedway Hall of Fame Museum\n[…]\nIndianapolis Motor Speedway Page no NASCAR.com\n[…]\nColeção do IMS, o Indianapolis Motor Speedway",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Senninha",
      "descricao": "Personagem brasileiro de histórias em quadrinhos e desenhos, um menino piloto criado em 1994 em homenagem a Ayrton Senna."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que personagem brasileiro de gibi, um menino piloto de capacete amarelo lançado em 1994, foi criado em homenagem a um tricampeão de Fórmula 1?",
    "resposta": "Senninha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Senninha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Senninha",
        "situacao": "ok",
        "texto": "Senninha é um personagem de história em quadrinhos inspirado no piloto de Fórmula 1 Ayrton Senna criado por Rogério Martins, um publicitário, e Ridaut Dias Júnior, desenhista da Mauricio de Sousa Produções, em 1994.\n[…]\nSenninha é um garoto de oito anos que adora corridas. Quando não está na escola, disputa provas numa mini-pista no bairro onde mora. Tem uma turma de amigos, 'pilotos' como ele. É determinado, não gosta de perder e quer ser um piloto de Fórmula 1 quando crescer. Seu antagonista é Braço Duro, que faz de tudo para ser vitorioso usando muita trapaça.\n[…]\nApós a morte de Senna em maio de 1994, o gibi passou por mudanças na edição 10, com o aumento do número de páginas de 36 para 68, mudança de periodicidade para mensal, a alteração da cor da roupa do Senninha (que começou com o macacão azul que Senna vestia à época pela Williams, para após a morte mudar para o vermelho no qual Senna foi tricampeão mundial na McLaren) e a introdução do personagem Meu Herói.\n[…]\nAinda em 1994, foram lançados alguns produtos pela Tectoy: Um mini-game, um toca-fitas portátil e um livro para o brinquedo Pense Bem. Softwares com o personagem incluem Pintando com o Senninha da MPO Vídeo, Revistinha do Senninha da MicroPower, e Senninha: Rali dos Números da IDT-COC.\n[…]\nA marca Senninha está estampada em produtos que vão de roupas, calçados e brinquedos a alimentos, produtos de higiene pessoal e pet. O licenciamento do personagem é um dos recursos que mantêm o trabalho do Instituto Ayrton Senna em todo o Brasil para garantir educação pública de qualidade a 2 milhões de alunos a cada ano. 100% dos royalties do licenciamento do personagem são revertidos a esse trabalho.\n[…]\nZupt! com o Senninha\n[…]\nSenninha na Pista Maluca"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Scuderia Ferrari",
      "descricao": "Equipe de corrida da Ferrari, fundada por Enzo Ferrari em 1929 e presente na Fórmula 1 desde 1950."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1951, em Silverstone, que piloto argentino deu à Ferrari sua primeira vitória num Grande Prêmio do Mundial de Fórmula 1?",
    "resposta": "José Froilán González",
    "distratores": [
      "Juan Manuel Fangio",
      "Alberto Ascari",
      "Luigi Villoresi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1951_British_Grand_Prix",
      "https://en.wikipedia.org/wiki/José_Froilán_González"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1951_British_Grand_Prix",
        "situacao": "ok",
        "texto": "The 1951 British Grand Prix was a Formula One motor race held on 14 July 1951 at the Silverstone Circuit in Northamptonshire, England. It was race 5 of 8 in the 1951 World Championship of Drivers and was contested over 90 laps. The race was the first victory for José Froilán González, and was also the first of many for the Scuderia Ferrari team. Both the team and driver also achieved their first e\n[…]\nJosé Froilán González was one second quicker than Juan Manuel Fangio in qualifying, achieving the first pole position of his career. It was also the first pole position for the Ferrari team, and the first in the World Championship (excluding the Indy 500 races) not scored by an Alfa Romeo. Nino Farina and Alberto Ascari qualified in third and fourth positions, completing the front row.\n[…]\nThe Alfa Romeos of Fangio and Farina pitted twice for fuel, owing to the awful fuel consumption of their cars. They were doing 1+1⁄16 miles to the gallon, and needed to take on 90 gallons for every stop. Both drivers needed to stop twice, and, owing to the lengthy, minutes-long pit stops of Formula One in 1951, the more fuel efficient Ferrari of González (who only needed to make one stop) was able to overtake the Alfa Romeos and pull out a considerable lead.\n[…]\nGonzález eventually took his own and Ferrari's first victory in a World Championship race by 51 seconds. It was the first World Championship race (excluding the Indy 500) that was not won by an Alfa Romeo. An Alfa Romeo was still in second place though, in the form of the year's eventual champion Fangio. Luigi Villoresi became the second Ferrari on the podium after he finished in third place, two laps behind.\n[…]\nAs it turned out, González had actually raced with an older chassis and engine than his teammates, Villoresi and Ascari.\n[…]\n^1 – 1 point for fastest lap"
      },
      {
        "url": "https://en.wikipedia.org/wiki/José_Froilán_González",
        "situacao": "ok",
        "texto": "José Froilán González (5 October 1922 – 15 June 2013) was an Argentine racing driver who competed in Formula One between 1950 and 1960. Nicknamed \"the Pampas Bull\" and \"el Cabezón\", González was runner-up in the Formula One World Drivers' Championship in 1954 with Ferrari, and won two Grands Prix across nine seasons. In endurance racing, González won the 24 Hours of Le Mans in 1954, also with Ferr\n[…]\nGonzález, who was a close friend of Juan Manuel Fangio and Roberto Mieres, among others, is particularly notable for scoring Ferrari's first win in a Formula One World Championship race at the 1951 British Grand Prix. He made his Formula One debut for Scuderia Achille Varzi in the 1950 Monaco Grand Prix. His last Grand Prix was the 1960 Argentine Grand Prix.\n[…]\nGonzález competed in 26 World Championship Formula One Grands Prix over nine seasons (1950–1957 and 1960) and numerous non-Championship events. In the 26 World Championship races, González scored two victories (the 1951 British Grand Prix and the 1954 British Grand Prix), seven second-place finishes, six third-place finishes, three pole positions, six fastest laps, and 72 1⁄7 points.\n[…]\nOn 10 July 2011, during the British Grand Prix meeting, González was honoured by Ferrari and the FIA on the 60th anniversary of Ferrari's first Formula One World Championship race victory. As part of the celebration, Ferrari driver Fernando Alonso drove González's Ferrari 375 F1 for four laps of the Silverstone track. Later that day, Alonso won the British Grand Prix in his Ferrari 150º Italia.\n[…]\nGonzález died in Buenos Aires from respiratory failure, aged 90, after a downturn in health following a heart attack earlier in 2013.\n[…]\n† González started the race in a Ferrari 553 Squalo, but took over one of his teammates' 625 during the race.\n[…]\nGrand Prix of Buenos Aires 1st, (1951), Formula Libre\n[…]\nVideo: Tribute to Froilán González by Fernando Alonso"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Gr%C3%A3-Bretanha_de_1951",
        "situacao": "ok",
        "texto": "Resultados do Grande Prêmio da Grã-Bretanha de Fórmula 1 realizado em Silverstone em 14 de julho de 1951. Quinta etapa do campeonato, foi vencido José Froilán González, da Ferrari, com Juan Manuel Fangio em segundo pela Alfa Romeo e Luigi Villoresi em terceiro pela Ferrari.\n[…]\nEsta prova foi palco de três efemérides: a primeira vitória de José Froilán González, primeira dobradinha argentina na categoria e a primeira vitória da Ferrari.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Grande Prêmio da Alemanha de 2010",
      "descricao": "Corrida de Fórmula 1 em Hockenheim, em 2010, em que Felipe Massa cedeu a liderança ao companheiro de Ferrari após uma mensagem de rádio."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 2010, na Alemanha, Felipe Massa ouviu pelo rádio que seu companheiro de Ferrari era mais rápido e cedeu a liderança. Quem venceu a corrida?",
    "resposta": "Fernando Alonso",
    "fonte": [
      "https://en.wikipedia.org/wiki/2010_German_Grand_Prix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2010_German_Grand_Prix",
        "situacao": "ok",
        "texto": "The 2010 German Grand Prix (formally the Formula 1 Grosser Preis Santander von Deutschland 2010) was a Formula One motor race held on 25 July at the Hockenheimring in Hockenheim, Baden-Württemberg, Germany. It was the 11th round of the 2010 Formula One World Championship and the 71st German Grand Prix. Ferrari driver Fernando Alonso won the 67-lap race starting from second position. His teammate F\n[…]\nBefore the race, McLaren driver Lewis Hamilton led the Drivers' Championship with 145 championship points, 12 ahead of teammate Jenson Button in second who was five championship points in front of Mark Webber in third. Webber's teammate Sebastian Vettel was fourth on 121 championship points and Fernando Alonso was fifth on 98 championship points.\n[…]\nAt the end of the first lap, the order was: Massa, Alonso, Vettel, Hamilton, Webber, Button, Kubica, Schumacher, Rosberg and Kobayashi.\n[…]\nA radio transmission from Rob Smedley, Massa's race engineer, was intercepted on lap 48, with Smedley telling Massa, \"OK, so, Fernando (Alonso) is faster than you. Can you confirm you understood that message?\" Based on Smedley's tone, commentators surmised that it had been a coded message from engineer to driver telling Massa to move over and allow Alonso through, something Smedley was instructed to tell Massa by Ferrari.\n[…]\nFerrari's use of team orders, which resulted in Massa relinquishing the lead to Alonso on lap 49, risked the team's exclusion from the race results. Team principal Stefano Domenicali, Ferrari manager Massimo Rivola, and Alonso and Massa were summoned by the stewards because they were considered have transgressed Article 39.1 of the 2010 Fédération Internationale de l'Automobile (FIA) Sporting Regulations, and were charged with violating Article 151c of the FIA's sporting code.\n[…]\n2010 Hockenheimring GP2 Series round\n[…]\n2010 Hockenheimring GP3 Series round"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Alemanha_de_2010",
        "situacao": "ok",
        "texto": "O Grande Prémio da Alemanha de 2010 foi a décima primeira corrida da temporada de 2010 da Fórmula 1. Contrariando as expectativas, de 2009, de que não ocorreria um próximo grande prémio da Alemanha, devido a problemas financeiros, o circuito escolhido foi Hockenheimring, revezando a cada ano com o circuito de Nürburgring.\n[…]\nA largada foi marcada pelo pulo de Felipe Massa 3º colocado para a 1º posição, após a tentativa mal-sucedida  de Sebastian Vettel (pole position nos treinos qualificatórios) de bloquear a ultrapassagem de Fernando Alonso (segundo nos treinos qualificatórios). Fernando Alonso obteve a vitória após um jogo de equipe, feito pela Ferrari, solicitando que Felipe Massa abrisse a sua posição a Fernando Alonso.\n[…]\nEssa é a famosa corrida em que a frase \"Fernando is faster than you\" (em português: Fernando é mais rápido do que você) foi proferida pelo engenheiro Rob Smedley ao piloto brasileiro. Após o incidente, a escuderia italiana foi investigada pelos comissários que decidiram que a Ferrari infringiu os artigos 39.1, que proíbe ordens de equipe, e 151c, que fala sobre atitudes antidesportivas que sujem a imagem do esporte.\n[…]\nA equipe foi multada pela FIA em US$ 100 mil (cerca de R$ 178 mil) e o caso foi encaminhado para o Conselho Mundial da entidade, que julgará o ocorrido. Deixando o resultado da corrida em Hockenheim sob júdice. A princípio, o julgamento foi marcado para o dia 10 de Setembro do mesmo ano, na sede da entidade na Place de la Concorde, em Paris, mas foi adiantado para o dia 8 de Setembro para evitar o conflito com o primeiro dia de treinos livres do Grande Prêmio da Itália.\n[…]\nA equipe Red Bull Racing faz a sua corrida de número 100 na Fórmula 1.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Instituto Ayrton Senna",
      "descricao": "Organização sem fins lucrativos brasileira dedicada à educação, criada em 1994 após a morte de Ayrton Senna."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Criado em 1994, meses depois da morte do piloto, o Instituto Ayrton Senna, dedicado à educação, foi fundado por qual parente dele?",
    "resposta": "A irmã, Viviane Senna",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Instituto_Ayrton_Senna"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Instituto_Ayrton_Senna",
        "situacao": "ok",
        "texto": "O Instituto Ayrton Senna é uma ONG brasileira criada pela família Senna em 1994 tendo como presidente Viviane Senna, irmã do tricampeão de Fórmula 1. O Instituto concretiza o sonho de Ayrton Senna de ajudar o Brasil a diminuir as desigualdades sociais, criando oportunidades de desenvolvimento humano a crianças e jovens por meio da educação.\n[…]\nEm março de 1994, o tricampeão de Fórmula 1, Ayrton Senna, compartilhou com sua irmã Viviane Senna, o desejo de realizar uma ação sistemática para oferecer oportunidades de desenvolvimento humano a crianças e jovens de baixa renda. O assunto seria retomado no final da temporada daquele ano, mas não houve tempo devido ao acidente em Ímola, ocorrido em 1º de maio. Para concretizar o desejo do piloto, a família Senna fundou o Instituto Ayrton Senna em novembro daquele ano.\n[…]\nO fórum conta com organizações que atuam em diferentes setores, e o Instituto Ayrton Senna, única organização brasileira participante do grupo fundador, foi convidado por sua atuação e produção de conhecimento na área da educação.\n[…]\nO estudo aponta que o Instituto Ayrton Senna aumentou em até 11 vezes a velocidade do crescimento da taxa de aprovação escolar nas redes onde são implementadas as suas soluções educacionais.\n[…]\nEmpresas que apostam na educação para diminuir as desigualdades sociais investem recursos no trabalho que o Instituto Ayrton Senna desenvolve em todo o País. Muitas empresas também oferecem a sua expertise e o valioso tempo de seus profissionais a serviço da causa da educação.\n[…]\nA base de doadores ao Instituto Ayrton Senna é composta por pessoas que acreditam no trabalho do Instituto e contribuem para que crianças e jovens de todo o Brasil tenham acesso a uma educação pública de qualidade."
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
