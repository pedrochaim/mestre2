Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Jogos Eletrônicos** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Pokémon Advanced (anime)",
      "descricao": "Série do anime Pokémon em que Ash viaja pela região de Hoenn com May, Max e Brock, chamada Advanced Generation no Japão."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A fase de Hoenn do anime, em que Ash viaja com May, Max e Brock, estreou na televisão japonesa em que ano?",
    "resposta": "2002",
    "distratores": [
      "2000",
      "2001",
      "2003"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Advanced",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_the_Series:_Ruby_and_Sapphire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Advanced",
        "situacao": "ok",
        "texto": "Pokémon: Advanced is the sixth season of the Pokémon anime series and the first season of Pokémon the Series: Ruby and Sapphire, known in Japan as Pocket Monsters: Advanced Generation (ポケットモンスター アドバンスジェネレーション, Poketto Monsutā Adobansu Jenerēshon). It originally aired in Japan from November 21, 2002, to August 28, 2003, on TV Tokyo, and in the United States from November 1, 2003, to September 4, 20\n[…]\nThe season follows Ash Ketchum as he travels across the Hoenn region to challenge its Pokémon League while joined by Brock, May, an aspiring Pokémon Coordinator, and Max, her younger brother.\n[…]\nThemanime.org gave a positive review saying that \"the anime does stuff from the video games in this season\" and that \"May isn't just a replacement of Misty.\" Movie Reviews Simbasible gave a negative review saying that \"the new characters are actually more annoying instead of likeable\" and that \"it ended up being a bore but with some very good episodes.\" Alfah, writing for Pokeblog gave a positive review, giving the season a 8/10 and saying that  \"It's an awesome start to the Advanced Generation series, showing growth of two protagonists, Ash and May.\n[…]\nIn the United States, Viz Video and Ventura Distribution released the series on 8 VHS and DVD volumes from 2004–2005. The entire series was released on DVD, while the VHS versions only featured the first three episodes from each release.\n[…]\nViz Media and Warner Home Video released Pokémon: Advanced – The Complete Collection on DVD in the United States on May 16, 2017.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon: Advanced Generation website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_the_Series:_Ruby_and_Sapphire",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Advanced",
        "situacao": "ok",
        "texto": "Pokémon: Avançado (Pokémon: Advanced), é a sexta temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada de Pokémon, a Série: Rubi e Safira (Pokémon the Series: Ruby and Sapphire), conhecida no Japão como Pocket Monsters: Advanced Generation (ポケットモンスター アドバンスジェネレーション, Poketto Monsutā Adobansu Jenerēshon).\n[…]\nOriginalmente, foi exibido no Japão de 21 de novembro de 2002 a 28 de agosto de 2003, na TV Tokyo; nos Estados Unidos de 1º de novembro de 2003 a 4 de setembro de 2004, na Kids' WB/The WB; no Brasil de 5 de janeiro de 2003 a 6 de dezembro de 2004, no Cartoon Network, e em Portugal de 27 de julho a 20 de setembro de 2004, na SIC.\n[…]\nA temporada acompanha Ash Ketchum e seu parceiro Pikachu enquanto eles coletam Insígnias de Ginásio na região de Hoenn para competir na Liga Hoenn. Ao longo do caminho, eles são acompanhados por Brock, a Coordenadora Pokémon May, que participa de Concursos Pokémon, e seu irmão mais novo, Max.\n[…]\nNo Japão, a temporada teve sua exibição em 21 de novembro de 2002, na TV Tokyo.\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nA Viz Media e a Warner Home Video lançaram Pokémon: Advanced – The Complete Collection em DVD nos Estados Unidos em 16 de maio de 2017.\n[…]\nAlfah, escrevendo para o Pokeblog, fez uma crítica positiva, dando à temporada uma nota 8/10 e dizendo que \"É um começo incrível para a série Advanced Generation, mostrando o crescimento de dois protagonistas, Ash e May. Tirando a atitude mimada do Max, esta é uma temporada incrível: imperdível\".\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nSite de Pokémon: Advanced Generation na TV Tokyo\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pokémon Diamante e Pérola (anime)",
      "descricao": "Série do anime Pokémon em que Ash viaja pela região de Sinnoh com Dawn e Brock."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A série Diamante e Pérola, em que Ash percorre Sinnoh ao lado de Dawn e Brock, estreou na televisão japonesa em que ano?",
    "resposta": "2006",
    "distratores": [
      "2004",
      "2005",
      "2007"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Diamond_and_Pearl",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_the_Series:_Diamond_and_Pearl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Diamond_and_Pearl",
        "situacao": "ok",
        "texto": "Pokémon: Diamond and Pearl is the tenth season of the Pokémon anime series and the first and titular season of Pokémon the Series: Diamond and Pearl, known in Japan as Pocket Monsters Diamond & Pearl (ポケットモンスター ダイヤモンド&パール, Poketto Monsutā Daiyamondo & Pāru). It originally aired in Japan from September 28, 2006, to October 25, 2007, on TV Tokyo, and in the United States from April 20, 2007, to Febr\n[…]\nThe season follows Ash Ketchum as he travels across the Sinnoh region to challenge its Pokémon League while joined by Brock and Dawn, another aspiring Pokémon Coordinator.\n[…]\nThe first 3 episodes in Japan did not have the opening song, instead the instrumental songs from the Pokémon: Diamond and Pearl Japanese Anime Sound Collection serve as opening songs for 3 episodes during the original broadcast, and for 1 episode on DVD. The Japanese opening song is \"Together\" by Fumie Akiyoshi for 47 episodes during the original broadcast, and for 45 episodes on DVD.\n[…]\nVersion, Kimi no Soba de 〜Hikari no Tēma〜 Winter Version) for 1 episode by Grin, and the English opening song is \"Diamond and Pearl\" by \"Breeze\" Barczynski. Its instrumental version served as the end credit song.\n[…]\nIn the United States, the series was released on six volume DVDs (each containing 8-9 episodes per disc) by Viz Media in North America, released both individually and in a boxset.\n[…]\nViz Media and Warner Home Video released Pokémon the Series: Diamond and Pearl – The Complete Season on DVD on August 20, 2019.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon: Diamond and Pearl website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_the_Series:_Diamond_and_Pearl",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Diamond_and_Pearl",
        "situacao": "ok",
        "texto": "Pokémon: Diamante e Pérola (Pokémon: Diamond and Pearl), é a décima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada, que dá título à série, Pokémon, a Série: Diamante e Pérola (Pokémon the Series: Diamond and Pearl), conhecida no Japão como Pocket Monsters Diamond & Pearl (ポケットモンスター ダイヤモンド&パール, Poketto Monsutā Daiyamondo & Pāru).\n[…]\nA trama acompanha as aventuras do protagonista Ash Ketchum, seu parceiro Pikachu e o Criador Pokémon Brock, que conhecem uma nova Coordenadora Pokémon chamada Dawn, que viaja com eles pela região de Sinnoh e participa de Concursos Pokémon.\n[…]\nOs três primeiros episódios exibidos no Japão não tinham música de abertura. Em vez disso, as músicas instrumentais da coletânea de sons do anime japonês Pokémon: Diamond and Pearl serviram como abertura em três episódios da transmissão original e em um episódio do DVD. A música de abertura japonesa é \"Together\", interpretada por Fumie Akiyoshi, que foi usada em 47 episódios da transmissão original e em 45 episódios do DVD.\n[…]\nA música de abertura em inglês é \"Diamond and Pearl\" de \"Breeze\" Barczynski. Sua versão instrumental serviu como música de crédito final. A música de abertura no Brasil é \"Diamante e Pérola\" de Nil Bernardes. A música de abertura em Portugal é \"Diamante e Pérola\" de Sérgio Calvinho.\n[…]\nNo Japão, a temporada teve sua exibição em 28 de setembro de 2006, na TV Tokyo.\n[…]\nA Viz Media e a Warner Home Video lançaram Pokémon the Series: Diamond and Pearl – The Complete Season em DVD em 20 de agosto de 2019.\n[…]\nWebsite oficial de Pokémon US (em inglês)\n[…]\nWebsite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nWebsite de Pokémon: Diamond and Pearl na TV Tokyo (em japonês)\n[…]\nWebsite oficial do anime de televisão Pokémon no Pokémon JP  (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Jirachi: Realizador de Desejos",
      "descricao": "Sexto filme da franquia Pokémon, de 2003, em que Ash e seus amigos protegem o mítico Jirachi durante um festival."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O filme Jirachi: Realizador de Desejos, primeiro longa da fase de Hoenn, estreou nos cinemas japoneses em que ano?",
    "resposta": "2003",
    "distratores": [
      "2002",
      "2004",
      "2005"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Jirachi:_Wish_Maker",
      "https://bulbapedia.bulbagarden.net/wiki/M06"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Jirachi:_Wish_Maker",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/M06",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Jirachi: Realizador de Desejos",
      "descricao": "Sexto filme da franquia Pokémon, de 2003, em que Ash e seus amigos protegem o mítico Jirachi durante um festival."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No filme Jirachi: Realizador de Desejos, o pequeno mítico desperta e cria uma amizade especial com um dos companheiros de Ash. Com qual deles?",
    "resposta": "Max",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Jirachi:_Wish_Maker",
      "https://bulbapedia.bulbagarden.net/wiki/M06"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Jirachi:_Wish_Maker",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/M06",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Pokémon Ranger e o Templo do Mar",
      "descricao": "Nono filme da franquia Pokémon, de 2006, em que Ash e seus amigos acompanham o nascimento do mítico Manaphy."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No filme Pokémon Ranger e o Templo do Mar, o mítico Manaphy sai do ovo e passa a tratar como mãe qual companheira de Ash?",
    "resposta": "May",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger_and_the_Temple_of_the_Sea",
      "https://bulbapedia.bulbagarden.net/wiki/M09"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ranger_and_the_Temple_of_the_Sea",
        "situacao": "ok",
        "texto": "Pokémon Ranger and the Temple of the Sea is a 2006 Japanese animated fantasy film. It is the ninth film of the Pokémon anime series and the fourth and final film of Pokémon the Series: Ruby and Sapphire.\n[…]\nDirected by Kunihiko Yuyama and written by Hideki Sonoda, the film follows Ash Ketchum, his Pokémon partner Pikachu, and their friends May, Max and Brock as they help a Pokémon Ranger named Jack Walker deliver the Mythical Pokémon Manaphy to an undersea palace called Samiya while evading mercenaries led by Phantom the Pirate.\n[…]\nAn egg containing the Mythical Pokémon Manaphy is found floating in the sea by mercenary Phantom the Pirate, but it is subsequently stolen from him by Jack \"Jackie\" Walker, a Pokémon Ranger disguised as one of Phantom's crew members. Jackie escapes Phantom's ship and joins the Marina Group, a traveling circus family that specializes in Water-type Pokémon, to deliver the Manaphy egg to Samiya, an undersea palace built by the People of the Water, whom the Marina Group are descendants of.\n[…]\nPokémon Ranger and the Temple of the Sea was released in Japan on July 15, 2006, with a 105 minute running time. The film was distributed by Toho in Japan.\n[…]\nIn North America, Pokémon Ranger and the Temple of the Sea was aired on Cartoon Network on March 23, 2007.\n[…]\nThe general screening of Pokémon Ranger and the Prince of the Sea: Manaphy ran for 6 weeks, from July 15 to August 25, 2006.\n[…]\nPokémon Ranger and the Prince of the Sea received mixed reviews.\n[…]\nPokemon.com's Manaphy Promotion Page\n[…]\nPokémon Ranger and the Temple of the Sea (anime) at Anime News Network's encyclopedia\n[…]\nPokémon Ranger and the Temple of the Sea at IMDb"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/M09",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ranger_and_the_Temple_of_the_Sea",
        "situacao": "ok",
        "texto": "Pokémon Ranger and the Temple of the Sea, originalmente lançado no Japão como Pocket Monsters Advanced Generation the Movie: Pokémon Ranger and the Prince of the Sea: Manaphy (劇場版ポケットモンスターアドバンスジェネレーション ポケモンレンジャーと蒼海の王子 マナフィ, Gekijōban Poketto Monsutā Adobansu Jenerēshon Pokemon Renjā to Umi no Ōji Manafi), é o nono filme de animação da franquia Pokémon. Como indicado pelo título, elementos do jogo \n[…]\nFoi lançado nos cinemas japoneses em 16 de julho de 2006. No Brasil, o filme foi exibido em 16 de janeiro de 2009 pelo Cartoon Network.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Treecko de Ash",
      "descricao": "Treecko de Ash Ketchum no anime Pokémon, inicial de Hoenn que evolui para Grovyle e depois para Sceptile."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Hoenn, que pokémon inicial de Ash vivia com um raminho preso no canto da boca, mantido até depois de evoluir?",
    "resposta": "Treecko",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Sceptile",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Sceptile",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nPokémon the Series primarily follows Ash Ketchum, a young boy from Pallet Town who dreams of becoming a Pokémon Master. After receiving his first Pokémon, Pikachu, from Professor Oak, Ash embarks on a journey across various regions, including Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, and Galar, where he challenges Gym Leaders, competes in regional Pokémon Leagues, or other competitions, and meets a variety of companions who support him in his goal.\n[…]\nMay is the daughter of the Petalburg City Gym Leader, Norman and the older sister of Max. She takes interest in Pokémon Contests, competitions focusing on a Pokémon's appearance or appeal. May later reappears in Pokémon the Series: Diamond and Pearl and Pokémon Journeys: The Series. Max is May's younger brother, who acts as one of the group's travelling companions in the Hoenn-associated series.\n[…]\nShe partakes in Pokémon Showcases (beauty pageant-like contests) in an attempt to become the \"Kalos Queen\", an honorary title for the best Pokémon Performer. At the end of the series, she prepares to compete in the Pokémon Contests that occur in Hoenn. Before parting, she gives Ash a kiss on the lips.\n[…]\nStarting on December 6, 2024, episodes are uploaded to the Pokémon TV YouTube channel every Sunday, Monday, Wednesday, Friday, and Saturday.\n[…]\nPokémon seasons\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nYukinari Okido em japonês e Professor Samuel Oak em inglês), Ash embarca em uma jornada por diversas regiões, incluindo Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola e Galar, onde desafia Líderes de Ginásio, compete em Ligas Pokémon regionais e outras competições, e conhece diversos companheiros que o apoiam e o ajudam em seu objetivo.\n[…]\nA tabela a seguir lista a receita anual de conteúdo de mídia de anime Pokémon no Japão, conforme relatado pela empresa de pesquisa de mercado Hakuhodo.\n[…]\nPokémon chegou ao Brasil no dia 10 de maio de 1999, sendo transmitido inicialmente no programa \"Eliana e Alegria\" da Record. No Cartoon Network, o anime estreou em 6 de setembro do mesmo ano, sendo transmitido inicialmente no \"Talismã\" e esteve transmitido até setembro de 2021. Na TV aberta, Pokémon foi transmitido pela Record da 1ª até a 4ª temporada.\n[…]\nOs fãs também não gostaram do resultado porque acreditavam que o Greninja de Ash tinha muitas vantagens sobre o Charizard de Alain, incluindo o fato de que Pokémon do tipo Água resistem a ataques de Pokémon do tipo Fogo, e que o raro Fenômeno de Ligação ao qual o Greninja de Ash estava sujeito era considerado muito mais poderoso do que uma Mega Evolução convencional. Vários animadores da série também expressaram decepção com a derrota de Ash.\n[…]\nPágina oficial de Pokémon (em japonês)\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)\n[…]\nPágina oficial de Pokémon (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Treecko de Ash",
      "descricao": "Treecko de Ash Ketchum no anime Pokémon, inicial de Hoenn que evolui para Grovyle e depois para Sceptile."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "No anime, qual destes pokémon iniciais entrou primeiro para a equipe de Ash?",
    "resposta": "Treecko",
    "distratores": [
      "Turtwig",
      "Oshawott",
      "Froakie"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Sceptile",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Sceptile",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nInternationally, The Pokémon Company handles production and distribution of the anime with Iyuno Media Group and Goldcrest Post with publication by VIZ Media, which was formerly VIZ LLC but merged with ShoPro. The anime has been aired in 192 countries. In the United States, the anime aired on Kids' WB as a Saturday morning cartoon starting in February 1999.\n[…]\nIn a 2018 interview, the creators of Detective Pikachu, which features a talking Pikachu, revealed that the original intention for the anime was to have the Pokémon talk, but OLM, Inc. was unable to come up with a concept that Game Freak, developer of the mainline games, were accepting of.\n[…]\nThe following table lists the annual content revenue from Pokémon anime media in Japan, as reported by market research firm Hakuhodo.\n[…]\nIn TV Asahi's poll of the \"Top 100 Anime\", Pokémon came in 38th. Paste ranked the series at 44th place in its October 2018 list of \"The 50 Best Anime Series of All Time\", with Sarra Sedghi writing: \"To the joy of '90s kids everywhere, Pokémon helped solidify anime (and, hopefully, good punnery) in the West\".\n[…]\n\"How Pokémon Is Dubbed From Japanese To English\". Vanity Fair. March 16, 2020. Archived from the original on April 10, 2020. Retrieved April 9, 2020. - Displays the dubbing process done by Sarah Natochenny\n[…]\nPokémon seasons\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nA série de anime Pokémon foi amplamente creditada por permitir que o anime se tornasse mais popular e familiar em todo o mundo, especialmente nos Estados Unidos, onde muitos filmes de Pokémon estão entre os filmes de anime de maior bilheteria. Também é considerada uma das primeiras séries de anime na televisão a atingir esse nível de sucesso mainstream com o público ocidental, além de ser creditada por permitir que a série de jogos atingisse tal grau de popularidade e vice-versa.\n[…]\nPokémon, a Série\n[…]\nPokémon Horizontes, a Série\n[…]\nA produção no Japão é feita pela TV Tokyo, MediaNet (anteriormente TV Tokyo MediaNet e Softx) e ShoPro (anteriormente Shogakukan Productions). Kunihiko Yuyama foi o diretor principal da série até o episódio de 2023, \"To Be a Pokémon Master\". O anime arrecadou milhões de dólares no Japão quando foi ao ar pela primeira vez. Um episódio de Pokémon custa em média cerca de 100 mil dólares para ser produzido.\n[…]\nPokémon chegou ao Brasil no dia 10 de maio de 1999, sendo transmitido inicialmente no programa \"Eliana e Alegria\" da Record. No Cartoon Network, o anime estreou em 6 de setembro do mesmo ano, sendo transmitido inicialmente no \"Talismã\" e esteve transmitido até setembro de 2021. Na TV aberta, Pokémon foi transmitido pela Record da 1ª até a 4ª temporada.\n[…]\nPágina oficial de Pokémon (em japonês)\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)\n[…]\nPágina oficial de Pokémon (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Max (anime)",
      "descricao": "Irmão caçula de May, filho do líder de ginásio Norman, que acompanha Ash por Hoenn no anime Pokémon."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Hoenn, Max, o irmão de May, ainda é novo demais para ter pokémon. Que pokémon psíquico ele promete voltar para buscar quando virar treinador?",
    "resposta": "Ralts",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Max",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Max",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nInternationally, The Pokémon Company handles production and distribution of the anime with Iyuno Media Group and Goldcrest Post with publication by VIZ Media, which was formerly VIZ LLC but merged with ShoPro. The anime has been aired in 192 countries. In the United States, the anime aired on Kids' WB as a Saturday morning cartoon starting in February 1999.\n[…]\nIn a 2018 interview, the creators of Detective Pikachu, which features a talking Pikachu, revealed that the original intention for the anime was to have the Pokémon talk, but OLM, Inc. was unable to come up with a concept that Game Freak, developer of the mainline games, were accepting of.\n[…]\nThe following table lists the annual content revenue from Pokémon anime media in Japan, as reported by market research firm Hakuhodo.\n[…]\nIn TV Asahi's poll of the \"Top 100 Anime\", Pokémon came in 38th. Paste ranked the series at 44th place in its October 2018 list of \"The 50 Best Anime Series of All Time\", with Sarra Sedghi writing: \"To the joy of '90s kids everywhere, Pokémon helped solidify anime (and, hopefully, good punnery) in the West\".\n[…]\n\"How Pokémon Is Dubbed From Japanese To English\". Vanity Fair. March 16, 2020. Archived from the original on April 10, 2020. Retrieved April 9, 2020. - Displays the dubbing process done by Sarah Natochenny\n[…]\nPokémon seasons\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nPokémon Horizontes, a Série\n[…]\nPokémon Chronicles é um spin-off que conta histórias envolvendo os personagens secundários do anime. A maioria dos episódios de Chronicles foram chamados de Pocket Monsters Side Stories (ポケットモンスターサイドストーリー, Poketto Monsutā Saido Sutōrī; lit. \"Histórias Paralelas de Pokémon\"), sendo transmitidos na Weekly Pokémon Broadcasting Station. As demais partes da série são compostas pelo especial de TV Pocket Monsters Crystal e pela série de OVA Férias de Inverno do Pikachu.\n[…]\nsó transmitia Pokémon de forma \"correta\" e com horário fixo da 1ª temporada até o início da 5ª (quando o anime chegava no episódio 252, pulava direto para a oitava temporada, pois os direitos das demais temporadas ainda estavam com a Globo) através do TV Kids. Da 13ª temporada em diante nunca chegou a ser exibida na TV aberta, sendo transmitidas somente em canais de TV a cabo (Cartoon Network, Tooncast e Gloob) e serviços de streaming (Netflix, Amazon Prime Video e Globoplay).\n[…]\nAsh e seus amigos vagam por aí, encontram um novo Pokémon ou treinador Pokémon, lutam, fazem amigos e então usam seu recém-descoberto Poder da Amizade para impedir um ataque da nefasta Equipe Rocket\", e acrescentou: \"até mesmo os torneios são um alívio, uma pausa abençoada na fórmula que derrete o cérebro, enquanto Ash e companhia enfrentam rivais predestinados por um ou dois episódios\".\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Drew (anime)",
      "descricao": "Coordenador pokémon rival de May no anime Pokémon, dono de um Roselia."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Nos concursos de Hoenn, que coordenador rival de May, dono de um Roselia, costuma presenteá-la com uma rosa?",
    "resposta": "Drew",
    "distratores": [
      "Harley",
      "Robert",
      "Kenny"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Drew",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Drew",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nIn a 2018 interview, the creators of Detective Pikachu, which features a talking Pikachu, revealed that the original intention for the anime was to have the Pokémon talk, but OLM, Inc. was unable to come up with a concept that Game Freak, developer of the mainline games, were accepting of.\n[…]\nThe following table lists the annual content revenue from Pokémon anime media in Japan, as reported by market research firm Hakuhodo.\n[…]\nCarl Kimlinger, in an August 2008 review of the Diamond and Pearl series for Anime News Network, gave the dubbed series an overall grade of C.\n[…]\nIn TV Asahi's poll of the \"Top 100 Anime\", Pokémon came in 38th. Paste ranked the series at 44th place in its October 2018 list of \"The 50 Best Anime Series of All Time\", with Sarra Sedghi writing: \"To the joy of '90s kids everywhere, Pokémon helped solidify anime (and, hopefully, good punnery) in the West\".\n[…]\nThe series is considered to be one of the first anime series on television to reach a high level of mainstream success with Western audiences. It has also been credited with helping the game series to achieve a higher degree of popularity, and vice versa.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nNos Estados Unidos, o anime foi exibido no Kids' WB como um desenho animado nas manhãs de sábado a partir de fevereiro de 1999.\n[…]\nCarl Kimlinger, em uma crítica de agosto de 2008 da série Diamante e Pérola para o Anime News Network, deu à versão dublada uma nota geral C. Ele escreveu: \"A fórmula já está definida...\n[…]\nAlém desse episódio, o anime foi banido na Turquia, após duas crianças, uma de sete anos e outra de quatro, saltarem da sacada de seus apartamentos em imitação aos personagens do desenho e também na Arábia Saudita, pois o governo alegou que ele estimulava a competição entre as crianças.\n[…]\nApesar de ter sido comum a troca de dubladores em diversos países do mundo, poucos personagem principais do anime haviam tido o dublador trocado no Brasil, até 2015, quando por uma recusa do cliente da dublagem em permitir a dublagem a distância do dublador do protagonista, Fábio Lucindo, que à época estava em Portugal e não poderia comparecer presencialmente ao estúdio de dublagem, e por isso optou pela troca do dublador do protagonista depois de mais de 10 anos.\n[…]\nA série é considerada uma das primeiras séries de anime na televisão a alcançar um alto nível de sucesso convencional com o público ocidental. Também foi creditada por ajudar a série de jogos a alcançar um maior grau de popularidade e vice-versa.\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Dustox de Jessie",
      "descricao": "Dustox de Jessie, da Equipe Rocket, no anime Pokémon, que evoluiu de um Wurmple capturado em Hoenn."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Hoenn, Jessie, da Equipe Rocket, sonhava com um Beautifly, mas o Wurmple dela acabou evoluindo para outra mariposa. Qual?",
    "resposta": "Dustox",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Jessie%27s_Dustox",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jessie%27s_Dustox",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nAsh and his friends frequently encounter the villainous Team Rocket members, Jessie, James, and Meowth, who persistently attempt to steal rare and powerful Pokémon throughout the series.\n[…]\nJessie, James, and Meowth are a group of Team Rocket members. They act as one of the three primary antagonists of the anime series for the first twenty-five seasons, often coming into conflict with Ash Ketchum in an attempt to capture his Pikachu. They primarily act as comic relief, though they have also acted as serious antagonists on several occasions. Jessie owns a Wobbuffet, who is the source of a running gag where he pops out of his Poké Ball at the strangest times.\n[…]\nHe wrote: \"The formula has been set in stone … Ash and buddies wander around, meet a new pokémon [sic] or pokémon [sic] trainer, fight, make friends, and then use their newfound Power of Friendship to stave off an attack by the nefarious Team Rocket\", and added: \"even the tournaments are a relief, a blessed pause in the cerebrum-liquefying formula as Ash and company square off against destined rivals for an episode or two.\" However, he stated that it would be enjoyed by its target audience, saying: \"It's colorful, silly and lively (if insanely simplistic and cheap)\" and added: \"Parents will appreciate the absolute lack of objectionable content (aside from the promotion of animism) and the series's impeccably PC message of friendship, cooperation and acceptance\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nAsh também desenvolve rivalidades com vários personagens recorrentes ao longo da série, como Gary Carvalho (Shigeru Okido em japonês e Gary Oak em inglês), Paul (Shinji) e Trip (Shooty), muitos dos quais ele enfrenta em torneios da Liga ou outras competições. Ash e seus amigos frequentemente encontram o trio vilão da Equipe Rocket, Jessie (Musashi), James (Kojiro) e Meowth (Nyarth em japonês e Meowth em inglês), que persistentemente tentam roubar Pokémon raros e poderosos ao longo da série.\n[…]\nA Equipe Rocket tenta o plano mais recente para capturar Pikachu ou qualquer outra coisa, e falha miseravelmente.\" Ele concluiu: \"no final das contas, esta franquia parece mais marketing grosseiro do que uma tentativa de pregar a importância da amizade e do companheirismo.\" Em uma crítica de abril de 2008, o Common Sense Media deu à série, 3 de 5 estrelas, dizendo: \"Ao longo dos anos, a série de fantasia energética, repleta de imaginação e inspirada no Japão ultrapassou barreiras culturais, de gênero e idade para cativar um público global de meninas, meninos e até adultos\", mas acrescentou: \"As pessoas também podem achar o enorme apelo comercial da franquia perturbador, especialmente porque o programa é voltado principalmente para crianças.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Juan",
      "descricao": "Líder do ginásio de tipo Água de Sootopolis em Pokémon Emerald, antigo mestre de Wallace."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "No anime, que líder de ginásio de Sootopolis, mestre elegante dos pokémon de água, dá a Ash sua oitava insígnia de Hoenn?",
    "resposta": "Juan",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Juan",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Advanced_Battle"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Juan",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Advanced_Battle",
        "situacao": "ok",
        "texto": "Pokémon: Advanced Battle is the eighth season of the Pokémon anime series and the third season of Pokémon the Series: Ruby and Sapphire, known in Japan as Pocket Monsters: Advanced Generation (ポケットモンスター アドバンスジェネレーション, Poketto Monsutā Adobansu Jenerēshon). It originally aired in Japan from September 9, 2004, to September 29, 2005, on TV Tokyo, and in the United States from November 5, 2005, to Octo\n[…]\nThis season follows Ash Ketchum as he continues travelling across the Hoenn region with Brock, May, and Max. Later on, they travel across the Kanto region to challenge its Battle Frontier.\n[…]\nThe Japanese opening songs are \"Challenger!!\" (チャレンジャー!!, Charenjā!!) by Rica Matsumoto for 13 episodes, \"Pokemon Symphonic Medley\" (ポケモンシンフォニック メドレー, Pokémon Shinfonikku Medorē) by the Pokémon Symphonic Orchestra (Pokémon Choir) for 29 episodes, and \"Battle Frontier (Japanese song)\" (バトルフロンツア, Batoru Furontia) by Akina Takaya for 11 episodes.\n[…]\nThe ending songs are \"Smile\" (スマイル, Sumairu) by Toshiko Ezaki for 6 episodes, \"GLORY DAY 〜That Shining Day〜\" (GLORY DAY 〜輝くその日〜, GLORY DAY 〜Kagayaku Sono Hi〜) by GARDEN for 35 episodes, \"Pokémon Counting Song\" (ポケモンかぞえうた, Pokémon Kazoe Uta) by Akiko Kanazawa for 11 episodes, and the English opening song is \"Unbeatable\" by David Rolfe, with a shortened version used in the end credits.\n[…]\nViz Media and Warner Home Video later released Pokémon: Advanced Battle – The Complete Collection on DVD on June 12, 2018.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon: Advanced Generation website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Advanced_Battle",
        "situacao": "ok",
        "texto": "Pokémon: Batalha Avançada (Pokémon: Advanced Battle) é a oitava temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a terceira temporada de Pokémon, a Série: Rubi e Safira (Pokémon the Series: Ruby and Sapphire), conhecida no Japão como Pocket Monsters: Advanced Generation (ポケットモンスター アドバンスジェネレーション, Poketto Monsutā Adobansu Jenerēshon).\n[…]\nNesta temporada, acompanhamos Ash Ketchum e seu parceiro Pikachu enquanto coletam Insígnias de Ginásio na região de Hoenn para competir na Liga Hoenn. Ao longo do caminho, eles são acompanhados por Brock, pela Coordenadora Pokémon May, que participa de Concursos Pokémon, e seu irmão mais novo, Max.\n[…]\nAs músicas de encerramento são \"Smile\" (スマイル, Sumairu) de Toshiko Ezaki para 6 episódios, \"GLORY DAY 〜That Shining Day〜\" (GLORY DAY 〜輝くその日〜, GLORY DAY; 〜Kagayaku Sono Hi〜) de GARDEN para 35 episódios, \"Pokémon Counting Song\" (ポケモンかぞえうた, Pokémon Kazoe Uta) de Akiko Kanazawa por 11 episódios. A música de abertura em inglês é \"Unbeatable\" de David Rolfe, com uma versão abreviada usada nos créditos finais. A música de abertura no Brasil é \"Invencível\" de Nil Bernardes.\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nNo Brasil, a temporada também está disponível na Amazon Prime Video, no canal Pokémon TV do YouTube e Pluto TV. Em Portugal, a temporada também está disponível no canal Pokémon TV do YouTube.\n[…]\nA Viz Media e a Warner Home Video lançaram posteriormente Pokémon: Advanced Battle – The Complete Collection em DVD em 12 de junho de 2018.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nSite de Pokémon: Advanced Generation na TV Tokyo\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Frente de Batalha (anime)",
      "descricao": "Conjunto de instalações de batalha, comandadas por sete cérebros, que Ash desafia depois de Hoenn no anime Pokémon."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Nos jogos, a Frente de Batalha fica em Hoenn. No anime, em que região Ash enfrenta os sete cérebros da Frente?",
    "resposta": "Kanto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Battle_Frontier",
      "https://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(anime)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Battle_Frontier",
        "situacao": "ok",
        "texto": "Pokémon: Battle Frontier is the ninth season of the Pokémon anime series and the fourth and final season of Pokémon the Series: Ruby and Sapphire, known in Japan as Pocket Monsters: Advanced Generation (ポケットモンスター アドバンスジェネレーション, Poketto Monsutā Adobansu Jenerēshon). It originally aired in Japan from October 6, 2005, to September 14, 2006, on TV Tokyo, and in the United States from September 9, 2006\n[…]\nThe season follows Ash Ketchum as he continues travels across the Kanto region to challenge Frontier Brains with Brock, May, and Max.\n[…]\nThis is the first season of Pokémon to be localized into English by Pokémon USA after 4Kids Entertainment's contract was not renewed.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon: Advanced Generation website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JPN official website (in Japanese)"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Battle_Frontier",
        "situacao": "ok",
        "texto": "Pokémon: Batalha da Fronteira (Brasil) e Pokémon: Fronteira de Batalha (Portugal) (Pokémon: Battle Frontier) é a nona temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a quarta temporada de Pokémon, a Série: Rubi e Safira (Pokémon the Series: Ruby and Sapphire), conhecida no Japão como Pocket Monsters: Advanced Generation (ポケットモンスター アドバンスジェネレーション, Poketto Monsutā Adobansu J\n[…]\nA temporada acompanha Ash Ketchum e seu parceiro Pikachu enquanto competem na Fronteira da Batalha por Símbolos da Fronteira na região de Kanto. Eles são acompanhados por Brock, May, que participa de Concursos Pokémon para ganhar Fitas para o Grande Festival, e seu irmão mais novo, Max.\n[…]\nEsta é a primeira temporada de Pokémon a ser traduzida para o inglês pela Pokémon USA, após o contrato da 4Kids Entertainment não ter sido renovado.\n[…]\nA primeira abertura japonesa é \"Battle Frontier\" (バトルフロンチア, Batoru Furontia), interpretada por Akina Takaya e \"Spurt!\" (スパート!, Supāto!) interpretada por Rica Matsumoto. A música de abertura em inglês é \"Battle Frontier\" de Jason Appleton. A música de abertura no Brasil é \"Batalha da Fronteira\" de Nil Bernardes. A música de abertura em Portugal é \"Fronteira de Batalha\" de Sérgio Calvinho.\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nNo Brasil, a temporada também está disponível na Amazon Prime Video e no canal Pokémon TV do YouTube. Em Portugal, a temporada também está disponível no canal Pokémon TV do YouTube.\n[…]\nSite oficial de Pokémon nos EUA (em inglês)\n[…]\nSite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nSite de Pokémon: Advanced Generation na TV Tokyo\n[…]\nAnime de TV Pokémon no site oficial de Pokémon JP (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Scott (Pokémon)",
      "descricao": "Dono e idealizador da Frente de Batalha, que recruta Ash para o desafio no anime Pokémon."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois que Ash vence os sete cérebros da Frente de Batalha, Scott lhe faz uma proposta, que ele recusa para continuar viajando. Que proposta é essa?",
    "resposta": "Tornar-se um cérebro da Frente",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Scott",
      "https://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(anime)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Scott",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Anabel (anime)",
      "descricao": "Cérebro da Frente de Batalha que comanda a Torre de Batalha no anime Pokémon, dona de um Espeon."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que cérebro da Frente de Batalha, dona de um Espeon, se comunica com os pokémon por telepatia e se encanta por Ash?",
    "resposta": "Anabel",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Anabel",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Anabel",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nOn September 17, 2002, it was replaced by Weekly Pokémon Broadcasting Station.\n[…]\nThe following table lists the annual content revenue from Pokémon anime media in Japan, as reported by market research firm Hakuhodo.\n[…]\nHe wrote: \"The formula has been set in stone … Ash and buddies wander around, meet a new pokémon [sic] or pokémon [sic] trainer, fight, make friends, and then use their newfound Power of Friendship to stave off an attack by the nefarious Team Rocket\", and added: \"even the tournaments are a relief, a blessed pause in the cerebrum-liquefying formula as Ash and company square off against destined rivals for an episode or two.\" However, he stated that it would be enjoyed by its target audience, saying: \"It's colorful, silly and lively (if insanely simplistic and cheap)\" and added: \"Parents will appreciate the absolute lack of objectionable content (aside from the promotion of animism) and the series's impeccably PC message of friendship, cooperation and acceptance\".\n[…]\nIn TV Asahi's poll of the \"Top 100 Anime\", Pokémon came in 38th. Paste ranked the series at 44th place in its October 2018 list of \"The 50 Best Anime Series of All Time\", with Sarra Sedghi writing: \"To the joy of '90s kids everywhere, Pokémon helped solidify anime (and, hopefully, good punnery) in the West\".\n[…]\nPokémon seasons\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nPokémon, a Série\n[…]\nPokémon Horizontes, a Série\n[…]\nAsh e seus amigos vagam por aí, encontram um novo Pokémon ou treinador Pokémon, lutam, fazem amigos e então usam seu recém-descoberto Poder da Amizade para impedir um ataque da nefasta Equipe Rocket\", e acrescentou: \"até mesmo os torneios são um alívio, uma pausa abençoada na fórmula que derrete o cérebro, enquanto Ash e companhia enfrentam rivais predestinados por um ou dois episódios\".\n[…]\nKevin McFarland, em um guia de maratona da série Liga Índigo para a Wired em 2016, descreveu a série como \"um programa infantil que enfatiza o valor do trabalho árduo, a importância da família e da amizade próxima, e os ideais de amor, confiança e honra. Mas também é um programa bastante bobo, com comédia pastelão e sequências de batalha coloridas, tornando a tarefa hercúlea de Ash de se tornar o melhor treinador Pokémon do mundo continuamente divertida.\"\n[…]\nNa pesquisa da TV Asahi sobre os \"100 Melhores Animes\", Pokémon ficou em 38º lugar. A Paste classificou a série em 44º lugar em sua lista de outubro de 2018 com os \"50 Melhores Animes de Todos os Tempos\", com Sarra Sedghi escrevendo: \"Para a alegria das crianças dos anos 90 em todos os lugares, Pokémon ajudou a consolidar o anime (e com sorte, os bons trocadilhos) no Ocidente\".\n[…]\nPágina oficial de Pokémon (em japonês)\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)\n[…]\nPágina oficial de Pokémon (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "May (anime)",
      "descricao": "Companheira de viagem de Ash na série Pokémon Advanced, filha do líder de ginásio Norman, chamada Haruka no Japão."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No fim da Frente de Batalha, May se despede de Ash para disputar concursos sozinha. Para qual região ela parte?",
    "resposta": "Johto",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/May_(anime)",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/May_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nPokémon the Series primarily follows Ash Ketchum, a young boy from Pallet Town who dreams of becoming a Pokémon Master. After receiving his first Pokémon, Pikachu, from Professor Oak, Ash embarks on a journey across various regions, including Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, and Galar, where he challenges Gym Leaders, competes in regional Pokémon Leagues, or other competitions, and meets a variety of companions who support him in his goal.\n[…]\nMay and Max (ハルカ and マサト, Haruka and Masato)\n[…]\nThe following table lists the annual content revenue from Pokémon anime media in Japan, as reported by market research firm Hakuhodo.\n[…]\nCarl Kimlinger, in an August 2008 review of the Diamond and Pearl series for Anime News Network, gave the dubbed series an overall grade of C.\n[…]\nIn TV Asahi's poll of the \"Top 100 Anime\", Pokémon came in 38th. Paste ranked the series at 44th place in its October 2018 list of \"The 50 Best Anime Series of All Time\", with Sarra Sedghi writing: \"To the joy of '90s kids everywhere, Pokémon helped solidify anime (and, hopefully, good punnery) in the West\".\n[…]\nThe series is considered to be one of the first anime series on television to reach a high level of mainstream success with Western audiences. It has also been credited with helping the game series to achieve a higher degree of popularity, and vice versa.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nYukinari Okido em japonês e Professor Samuel Oak em inglês), Ash embarca em uma jornada por diversas regiões, incluindo Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola e Galar, onde desafia Líderes de Ginásio, compete em Ligas Pokémon regionais e outras competições, e conhece diversos companheiros que o apoiam e o ajudam em seu objetivo.\n[…]\nAlém desse episódio, o anime foi banido na Turquia, após duas crianças, uma de sete anos e outra de quatro, saltarem da sacada de seus apartamentos em imitação aos personagens do desenho e também na Arábia Saudita, pois o governo alegou que ele estimulava a competição entre as crianças.\n[…]\nApesar de ter sido comum a troca de dubladores em diversos países do mundo, poucos personagem principais do anime haviam tido o dublador trocado no Brasil, até 2015, quando por uma recusa do cliente da dublagem em permitir a dublagem a distância do dublador do protagonista, Fábio Lucindo, que à época estava em Portugal e não poderia comparecer presencialmente ao estúdio de dublagem, e por isso optou pela troca do dublador do protagonista depois de mais de 10 anos.\n[…]\nA série é considerada uma das primeiras séries de anime na televisão a alcançar um alto nível de sucesso convencional com o público ocidental. Também foi creditada por ajudar a série de jogos a alcançar um maior grau de popularidade e vice-versa.\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Buizel de Ash",
      "descricao": "Buizel de Ash Ketchum no anime Pokémon, que pertencia a Dawn e passou para Ash numa troca em Sinnoh."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Sinnoh, Ash e Dawn trocam pokémon, já que um deles preferia concursos e o outro, batalhas. Ash recebe o Buizel. Que pokémon Dawn recebe em troca?",
    "resposta": "Aipom",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Buizel",
      "https://bulbapedia.bulbagarden.net/wiki/Dawn%27s_Ambipom"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Buizel",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Dawn%27s_Ambipom",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Starly de Ash",
      "descricao": "Starly de Ash Ketchum no anime Pokémon, capturado em Sinnoh, que evolui para Staravia e depois para Staraptor."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Antes mesmo de ganhar Turtwig, Ash já tinha feito sua primeira captura em Sinnoh. Que pokémon foi esse?",
    "resposta": "Starly",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Staraptor",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Diamond_and_Pearl"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Staraptor",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Diamond_and_Pearl",
        "situacao": "ok",
        "texto": "Pokémon: Diamond and Pearl is the tenth season of the Pokémon anime series and the first and titular season of Pokémon the Series: Diamond and Pearl, known in Japan as Pocket Monsters Diamond & Pearl (ポケットモンスター ダイヤモンド&パール, Poketto Monsutā Daiyamondo & Pāru). It originally aired in Japan from September 28, 2006, to October 25, 2007, on TV Tokyo, and in the United States from April 20, 2007, to Febr\n[…]\nThe season follows Ash Ketchum as he travels across the Sinnoh region to challenge its Pokémon League while joined by Brock and Dawn, another aspiring Pokémon Coordinator.\n[…]\nThe first 3 episodes in Japan did not have the opening song, instead the instrumental songs from the Pokémon: Diamond and Pearl Japanese Anime Sound Collection serve as opening songs for 3 episodes during the original broadcast, and for 1 episode on DVD. The Japanese opening song is \"Together\" by Fumie Akiyoshi for 47 episodes during the original broadcast, and for 45 episodes on DVD.\n[…]\nViz Media and Warner Home Video released Pokémon the Series: Diamond and Pearl – The Complete Season on DVD on August 20, 2019.\n[…]\nPokémon US official website\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon: Diamond and Pearl website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Diamond_and_Pearl",
        "situacao": "ok",
        "texto": "Pokémon: Diamante e Pérola (Pokémon: Diamond and Pearl), é a décima temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a primeira temporada, que dá título à série, Pokémon, a Série: Diamante e Pérola (Pokémon the Series: Diamond and Pearl), conhecida no Japão como Pocket Monsters Diamond & Pearl (ポケットモンスター ダイヤモンド&パール, Poketto Monsutā Daiyamondo & Pāru).\n[…]\nA trama acompanha as aventuras do protagonista Ash Ketchum, seu parceiro Pikachu e o Criador Pokémon Brock, que conhecem uma nova Coordenadora Pokémon chamada Dawn, que viaja com eles pela região de Sinnoh e participa de Concursos Pokémon.\n[…]\nOs três primeiros episódios exibidos no Japão não tinham música de abertura. Em vez disso, as músicas instrumentais da coletânea de sons do anime japonês Pokémon: Diamond and Pearl serviram como abertura em três episódios da transmissão original e em um episódio do DVD. A música de abertura japonesa é \"Together\", interpretada por Fumie Akiyoshi, que foi usada em 47 episódios da transmissão original e em 45 episódios do DVD.\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Hoopla, Xfinity Stream, Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nNo Brasil, a temporada também está disponível na Amazon Prime Video e no canal Pokémon TV do YouTube. Em Portugal, a temporada também está disponível na Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nA Viz Media e a Warner Home Video lançaram Pokémon the Series: Diamond and Pearl – The Complete Season em DVD em 20 de agosto de 2019.\n[…]\nWebsite oficial de Pokémon US (em inglês)\n[…]\nWebsite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nWebsite de Pokémon: Diamond and Pearl na TV Tokyo (em japonês)\n[…]\nWebsite oficial do anime de televisão Pokémon no Pokémon JP  (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Barry (anime)",
      "descricao": "Treinador agitado de Sinnoh, filho do Magnata da Torre Palmer, que vira rival e amigo de Ash no anime Pokémon."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que treinador apressado de Sinnoh, fã declarado de Paul, vive ameaçando multar quem esbarra nele?",
    "resposta": "Barry",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Barry_(anime)",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Barry_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nIn a 2018 interview, the creators of Detective Pikachu, which features a talking Pikachu, revealed that the original intention for the anime was to have the Pokémon talk, but OLM, Inc. was unable to come up with a concept that Game Freak, developer of the mainline games, were accepting of.\n[…]\nThe following table lists the annual content revenue from Pokémon anime media in Japan, as reported by market research firm Hakuhodo.\n[…]\nCarl Kimlinger, in an August 2008 review of the Diamond and Pearl series for Anime News Network, gave the dubbed series an overall grade of C.\n[…]\nIn TV Asahi's poll of the \"Top 100 Anime\", Pokémon came in 38th. Paste ranked the series at 44th place in its October 2018 list of \"The 50 Best Anime Series of All Time\", with Sarra Sedghi writing: \"To the joy of '90s kids everywhere, Pokémon helped solidify anime (and, hopefully, good punnery) in the West\".\n[…]\nThe series is considered to be one of the first anime series on television to reach a high level of mainstream success with Western audiences. It has also been credited with helping the game series to achieve a higher degree of popularity, and vice versa.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nA franquia de anime consiste em oito séries sequenciais no Japão, cada uma se baseia em uma parcela principal da série de jogos eletrônicos Pokémon. Nas transmissões internacionais, essas oito séries são divididas em 28 temporadas. A série originalmente seguiu Ash Ketchum, um jovem treinador de criaturas fictícias chamadas Pokémon.\n[…]\nAlém desse episódio, o anime foi banido na Turquia, após duas crianças, uma de sete anos e outra de quatro, saltarem da sacada de seus apartamentos em imitação aos personagens do desenho e também na Arábia Saudita, pois o governo alegou que ele estimulava a competição entre as crianças.\n[…]\nApesar de ter sido comum a troca de dubladores em diversos países do mundo, poucos personagem principais do anime haviam tido o dublador trocado no Brasil, até 2015, quando por uma recusa do cliente da dublagem em permitir a dublagem a distância do dublador do protagonista, Fábio Lucindo, que à época estava em Portugal e não poderia comparecer presencialmente ao estúdio de dublagem, e por isso optou pela troca do dublador do protagonista depois de mais de 10 anos.\n[…]\nA série é considerada uma das primeiras séries de anime na televisão a alcançar um alto nível de sucesso convencional com o público ocidental. Também foi creditada por ajudar a série de jogos a alcançar um maior grau de popularidade e vice-versa.\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Paul",
      "descricao": "Treinador frio e exigente, rival de Ash Ketchum na série Diamante e Pérola do anime Pokémon, chamado Shinji no Japão."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Veilstone, o gentil criador de pokémon Reggie cuida dos pokémon que Paul não leva na viagem. Que parentesco ele tem com Paul?",
    "resposta": "É o irmão mais velho",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Reggie",
      "https://bulbapedia.bulbagarden.net/wiki/Paul"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Reggie",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Paul",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Infernape de Ash",
      "descricao": "Infernape de Ash Ketchum no anime Pokémon, que pertencia a Paul como Chimchar antes de ser libertado e ir para Ash."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Na Liga de Sinnoh, Ash enfim vence Paul. Que pokémon dele, com a habilidade Blaze ativada, derrota o Electivire do rival na última luta?",
    "resposta": "Infernape",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Infernape",
      "https://bulbapedia.bulbagarden.net/wiki/Paul"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Infernape",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Paul",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Zoey (anime)",
      "descricao": "Coordenadora pokémon de Sinnoh, rival e amiga de Dawn no anime Pokémon, dona de um Glameow."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Na final do Grande Festival de Sinnoh, Dawn fica com o segundo lugar. Que coordenadora a derrota?",
    "resposta": "Zoey",
    "distratores": [
      "Ursula",
      "Kenny",
      "Nando"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Zoey",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Zoey",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nDawn (ヒカリ, Hikari)\n[…]\nDawn is a 10-year-old Pokémon Coordinator from Twinleaf Town who travels with Ash and Brock in the Sinnoh Region. Following in her mother's footsteps as a Pokémon Coordinator—a Trainer who partakes in Pokémon Contests—she chooses Piplup and sets out with the goal of becoming Top Coordinator.\n[…]\nThe following table lists the annual content revenue from Pokémon anime media in Japan, as reported by market research firm Hakuhodo.\n[…]\nCarl Kimlinger, in an August 2008 review of the Diamond and Pearl series for Anime News Network, gave the dubbed series an overall grade of C.\n[…]\nIn TV Asahi's poll of the \"Top 100 Anime\", Pokémon came in 38th. Paste ranked the series at 44th place in its October 2018 list of \"The 50 Best Anime Series of All Time\", with Sarra Sedghi writing: \"To the joy of '90s kids everywhere, Pokémon helped solidify anime (and, hopefully, good punnery) in the West\".\n[…]\nThe series is considered to be one of the first anime series on television to reach a high level of mainstream success with Western audiences. It has also been credited with helping the game series to achieve a higher degree of popularity, and vice versa.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nEsses companheiros incluem Misty Willams (Kasumi), Brock Harrison (Takeshi), Tracey Sketchit (Kenji), May (Haruka), Max (Masato), Dawn (Hikari), Iris, Cilan (Dent), Serena, Clemont (Citron), Bonnie (Eureka), Lillie ou Lillian (Lilie), Kiawe (Kaki), Lana ou Victória (Suiren), Mallow ou Lulú (Mao), Sophocles ou Chris (Mamane), Goh (Go), Koharu ou Chloe (Koharu), cada um buscando seus próprios objetivos, como se tornar um Coordenador Pokémon de elite, um Criador Pokémon habilidoso ou capturar Mew.\n[…]\nCarl Kimlinger, em uma crítica de agosto de 2008 da série Diamante e Pérola para o Anime News Network, deu à versão dublada uma nota geral C. Ele escreveu: \"A fórmula já está definida...\n[…]\nNa pesquisa da TV Asahi sobre os \"100 Melhores Animes\", Pokémon ficou em 38º lugar. A Paste classificou a série em 44º lugar em sua lista de outubro de 2018 com os \"50 Melhores Animes de Todos os Tempos\", com Sarra Sedghi escrevendo: \"Para a alegria das crianças dos anos 90 em todos os lugares, Pokémon ajudou a consolidar o anime (e com sorte, os bons trocadilhos) no Ocidente\".\n[…]\nA série é considerada uma das primeiras séries de anime na televisão a alcançar um alto nível de sucesso convencional com o público ocidental. Também foi creditada por ajudar a série de jogos a alcançar um maior grau de popularidade e vice-versa.\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Kenny (anime)",
      "descricao": "Coordenador pokémon de Sinnoh, amigo de infância de Dawn no anime Pokémon, dono de um Prinplup."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Kenny, amigo de infância de Dawn, insiste em chamá-la por um apelido dos tempos de jardim de infância, que ela detesta. Que apelido é esse?",
    "resposta": "Dee Dee",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kenny",
      "https://bulbapedia.bulbagarden.net/wiki/Dawn_(anime)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kenny",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Dawn_(anime)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Buneary de Dawn",
      "descricao": "Buneary de Dawn no anime Pokémon, capturada em Sinnoh, conhecida pela paixão pelo Pikachu de Ash."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que pokémon coelha de Dawn é apaixonada pelo Pikachu de Ash e vive corando perto dele?",
    "resposta": "Buneary",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Dawn%27s_Buneary",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Dawn%27s_Buneary",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nOver the course of his journey, Ash achieves several milestones, including becoming the first-ever Champion of the Alola League, where he also attended Pokémon School, and ultimately defeating Leon to become Monarch of the World Coronation Series. After reaching this peak, Ash continues his travels with Pikachu to meet and befriend new Pokémon in order to achieve his goal of becoming a Pokémon Master.\n[…]\nDawn (ヒカリ, Hikari)\n[…]\nDawn is a 10-year-old Pokémon Coordinator from Twinleaf Town who travels with Ash and Brock in the Sinnoh Region. Following in her mother's footsteps as a Pokémon Coordinator—a Trainer who partakes in Pokémon Contests—she chooses Piplup and sets out with the goal of becoming Top Coordinator.\n[…]\nIn a 2018 interview, the creators of Detective Pikachu, which features a talking Pikachu, revealed that the original intention for the anime was to have the Pokémon talk, but OLM, Inc. was unable to come up with a concept that Game Freak, developer of the mainline games, were accepting of.\n[…]\nAlthough the offending sequence was caused by Pikachu's actions, the episode's featured Pokémon, Porygon, has rarely been seen in future episodes, with appearances limited to one brief cameo appearance in the film Pokémon Heroes and in one scene-bumper later in season 1. Its evolutions Porygon2 and Porygon-Z have only appeared in a brief part of the opening sequence of Pokémon the Movie: Kyurem vs. the Sword of Justice.\n[…]\nPokémon seasons\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nPokémon, a Série\n[…]\nO anime possui duas animações principais, que são Pokémon, a Série de 1997 a 2023, narra as jornadas de Ash Ketchum e Pikachu, e Pokémon Horizontes, a Série, a partir de 2023, narra as jornadas de Liko e Roy ou Rain atualmente.\n[…]\nPokémon Chronicles é um spin-off que conta histórias envolvendo os personagens secundários do anime. A maioria dos episódios de Chronicles foram chamados de Pocket Monsters Side Stories (ポケットモンスターサイドストーリー, Poketto Monsutā Saido Sutōrī; lit. \"Histórias Paralelas de Pokémon\"), sendo transmitidos na Weekly Pokémon Broadcasting Station. As demais partes da série são compostas pelo especial de TV Pocket Monsters Crystal e pela série de OVA Férias de Inverno do Pikachu.\n[…]\nEm uma entrevista de 2018, os criadores de Detective Pikachu, que apresenta um Pikachu falante, revelaram que a intenção original para o anime era que os Pokémon falassem, mas a OLM, Inc. não conseguiu desenvolver um conceito que a Game Freak, desenvolvedora dos jogos principais, aceitasse.\n[…]\nEmbora a sequência ofensiva tenha sido causada pelas ações de Pikachu, o Pokémon em destaque no episódio, Porygon, raramente foi visto em episódios posteriores, com aparições limitadas a uma breve participação especial no filme Heróis Pokémon e em uma vinheta de abertura na primeira temporada. Suas evoluções, Porygon2 e Porygon-Z, apareceram apenas em uma pequena parte da sequência de abertura de Pokémon: O Filme - Kyurem Contra a Espada da Justiça.\n[…]\nPágina oficial de Pokémon (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Jessie (Equipe Rocket)",
      "descricao": "Integrante da Equipe Rocket no anime Pokémon, parceira de James e Meowth, chamada Musashi no Japão."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Sinnoh, Jessie, da Equipe Rocket, entra disfarçada nos concursos pokémon e chega a ganhar fitas. Com que nome falso ela se apresenta?",
    "resposta": "Jessilina",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Jessie",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jessie",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nAsh and his friends frequently encounter the villainous Team Rocket members, Jessie, James, and Meowth, who persistently attempt to steal rare and powerful Pokémon throughout the series.\n[…]\nJessie, James, and Meowth (ムサシ, コジロウ and ニャース, Musashi, Kojirō, and Nyāsu)\n[…]\nThe hosts were Mayumi Iizuka as Kasumi (Misty) and Yūji Ueda as Takeshi (Brock). They were regularly joined by Kaba-chan, Manami Aihara, Bernard Ackah and Rex Jones as the comedy team \"Shio Koshō\", Megumi Hayashibara as Musashi (Jessie), Shin-ichiro Miki as Kojirō (James), and Inuko Inuyama as Nyāsu (Meowth). The show ran from October 15, 2002, to September 28, 2004, when it was replaced by Pokémon Sunday.\n[…]\nHe wrote: \"The formula has been set in stone … Ash and buddies wander around, meet a new pokémon [sic] or pokémon [sic] trainer, fight, make friends, and then use their newfound Power of Friendship to stave off an attack by the nefarious Team Rocket\", and added: \"even the tournaments are a relief, a blessed pause in the cerebrum-liquefying formula as Ash and company square off against destined rivals for an episode or two.\" However, he stated that it would be enjoyed by its target audience, saying: \"It's colorful, silly and lively (if insanely simplistic and cheap)\" and added: \"Parents will appreciate the absolute lack of objectionable content (aside from the promotion of animism) and the series's impeccably PC message of friendship, cooperation and acceptance\".\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nAsh também desenvolve rivalidades com vários personagens recorrentes ao longo da série, como Gary Carvalho (Shigeru Okido em japonês e Gary Oak em inglês), Paul (Shinji) e Trip (Shooty), muitos dos quais ele enfrenta em torneios da Liga ou outras competições. Ash e seus amigos frequentemente encontram o trio vilão da Equipe Rocket, Jessie (Musashi), James (Kojiro) e Meowth (Nyarth em japonês e Meowth em inglês), que persistentemente tentam roubar Pokémon raros e poderosos ao longo da série.\n[…]\nPokémon, a Série\n[…]\nPokémon Horizontes, a Série\n[…]\nEm uma entrevista de 2018, os criadores de Detective Pikachu, que apresenta um Pikachu falante, revelaram que a intenção original para o anime era que os Pokémon falassem, mas a OLM, Inc. não conseguiu desenvolver um conceito que a Game Freak, desenvolvedora dos jogos principais, aceitasse.\n[…]\nAsh e seus amigos vagam por aí, encontram um novo Pokémon ou treinador Pokémon, lutam, fazem amigos e então usam seu recém-descoberto Poder da Amizade para impedir um ataque da nefasta Equipe Rocket\", e acrescentou: \"até mesmo os torneios são um alívio, uma pausa abençoada na fórmula que derrete o cérebro, enquanto Ash e companhia enfrentam rivais predestinados por um ou dois episódios\".\n[…]\nPágina oficial de Pokémon (em japonês)\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)\n[…]\nPágina oficial de Pokémon (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Hunter J",
      "descricao": "Caçadora de pokémon sem escrúpulos da série Diamante e Pérola do anime, que rouba pokémon para vendê-los a clientes."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Sinnoh, que caçadora de pokémon, a bordo de uma nave, transforma suas presas em pedra com um aparelho no braço para vendê-las?",
    "resposta": "Hunter J",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/J",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/J",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nPokémon the Series primarily follows Ash Ketchum, a young boy from Pallet Town who dreams of becoming a Pokémon Master. After receiving his first Pokémon, Pikachu, from Professor Oak, Ash embarks on a journey across various regions, including Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, and Galar, where he challenges Gym Leaders, competes in regional Pokémon Leagues, or other competitions, and meets a variety of companions who support him in his goal.\n[…]\nDawn is a 10-year-old Pokémon Coordinator from Twinleaf Town who travels with Ash and Brock in the Sinnoh Region. Following in her mother's footsteps as a Pokémon Coordinator—a Trainer who partakes in Pokémon Contests—she chooses Piplup and sets out with the goal of becoming Top Coordinator.\n[…]\nIn TV Asahi's poll of the \"Top 100 Anime\", Pokémon came in 38th. Paste ranked the series at 44th place in its October 2018 list of \"The 50 Best Anime Series of All Time\", with Sarra Sedghi writing: \"To the joy of '90s kids everywhere, Pokémon helped solidify anime (and, hopefully, good punnery) in the West\".\n[…]\n\"How Pokémon Is Dubbed From Japanese To English\". Vanity Fair. March 16, 2020. Archived from the original on April 10, 2020. Retrieved April 9, 2020. - Displays the dubbing process done by Sarah Natochenny\n[…]\nPokémon seasons\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nYukinari Okido em japonês e Professor Samuel Oak em inglês), Ash embarca em uma jornada por diversas regiões, incluindo Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola e Galar, onde desafia Líderes de Ginásio, compete em Ligas Pokémon regionais e outras competições, e conhece diversos companheiros que o apoiam e o ajudam em seu objetivo.\n[…]\nPokémon, a Série\n[…]\nPokémon Horizontes, a Série\n[…]\nO conteúdo também estava disponível no aplicativo e site Pokémon TV até janeiro de 2024, quando foi desativado. A partir de 6 de dezembro de 2024, os episódios começam a ser carregados no canal do Pokémon TV no YouTube todos os domingos, segundas, quartas, sextas e sábados.\n[…]\nAs críticas se concentraram no título enganoso e nos trailers que sugeriam a vitória de Ash, além do fato de ele ter perdido todas as Ligas Pokémon nas temporadas anteriores.\n[…]\nOs fãs também não gostaram do resultado porque acreditavam que o Greninja de Ash tinha muitas vantagens sobre o Charizard de Alain, incluindo o fato de que Pokémon do tipo Água resistem a ataques de Pokémon do tipo Fogo, e que o raro Fenômeno de Ligação ao qual o Greninja de Ash estava sujeito era considerado muito mais poderoso do que uma Mega Evolução convencional. Vários animadores da série também expressaram decepção com a derrota de Ash.\n[…]\nPágina oficial de Pokémon (em japonês)\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)\n[…]\nPágina oficial de Pokémon (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Trip (anime)",
      "descricao": "Treinador de Unova, rival de Ash na série Preto e Branco do anime Pokémon, chamado Shooty no Japão."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em Unova, que rival esnobe de Ash, que começou com um Snivy, vive tirando fotos de tudo com sua câmera?",
    "resposta": "Trip",
    "distratores": [
      "Cameron",
      "Stephan",
      "Virgil"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Trip",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Trip",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nThese companions include Misty, Brock, May, Dawn, Serena, Lillie, Goh, and others, each pursuing their own unique goals, such as becoming a top Pokémon Coordinator, becoming a skilled Pokémon Breeder, or seeking to catch Mew. Ash also forms rivalries with several recurring characters across the series, such as Gary, Paul, and Trip, many of whom he faces in League tournaments or other competitions.\n[…]\nIn a February 2008 review for IGN, Jeffrey Harris gave the Indigo League series a score of 2 out of 10, saying: \"Ultimately, the show's story is boring, repetitive, and formulaic. The show constantly preaches about friendship and helping others. ... Nearly every episode features Ash, Misty, and Brock on a trip.\n[…]\nIn TV Asahi's poll of the \"Top 100 Anime\", Pokémon came in 38th. Paste ranked the series at 44th place in its October 2018 list of \"The 50 Best Anime Series of All Time\", with Sarra Sedghi writing: \"To the joy of '90s kids everywhere, Pokémon helped solidify anime (and, hopefully, good punnery) in the West\".\n[…]\nThe series is considered to be one of the first anime series on television to reach a high level of mainstream success with Western audiences. It has also been credited with helping the game series to achieve a higher degree of popularity, and vice versa.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nAsh também desenvolve rivalidades com vários personagens recorrentes ao longo da série, como Gary Carvalho (Shigeru Okido em japonês e Gary Oak em inglês), Paul (Shinji) e Trip (Shooty), muitos dos quais ele enfrenta em torneios da Liga ou outras competições. Ash e seus amigos frequentemente encontram o trio vilão da Equipe Rocket, Jessie (Musashi), James (Kojiro) e Meowth (Nyarth em japonês e Meowth em inglês), que persistentemente tentam roubar Pokémon raros e poderosos ao longo da série.\n[…]\nNos Estados Unidos, o anime foi exibido no Kids' WB como um desenho animado nas manhãs de sábado a partir de fevereiro de 1999.\n[…]\nApesar de ter sido comum a troca de dubladores em diversos países do mundo, poucos personagem principais do anime haviam tido o dublador trocado no Brasil, até 2015, quando por uma recusa do cliente da dublagem em permitir a dublagem a distância do dublador do protagonista, Fábio Lucindo, que à época estava em Portugal e não poderia comparecer presencialmente ao estúdio de dublagem, e por isso optou pela troca do dublador do protagonista depois de mais de 10 anos.\n[…]\nA série é considerada uma das primeiras séries de anime na televisão a alcançar um alto nível de sucesso convencional com o público ocidental. Também foi creditada por ajudar a série de jogos a alcançar um maior grau de popularidade e vice-versa.\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Cameron (anime)",
      "descricao": "Treinador distraído de Unova, rival de Ash na série Preto e Branco do anime Pokémon, dono de um Riolu."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Na Conferência Vertress, a Liga de Unova do anime, que treinador distraído e esquecido elimina Ash nas quartas de final?",
    "resposta": "Cameron",
    "distratores": [
      "Stephan",
      "Virgil",
      "Bianca"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Cameron",
      "https://bulbapedia.bulbagarden.net/wiki/Vertress_Conference"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cameron",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Vertress_Conference",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Krookodile de Ash",
      "descricao": "Krookodile de Ash Ketchum no anime Pokémon, capturado em Unova como Sandile e evoluído até a forma final."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Unova, o pokémon de Ash que começou como Sandile e chegou a Krookodile tem um acessório que virou sua marca registrada. Qual?",
    "resposta": "Óculos escuros",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Krookodile",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Krookodile",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nPokémon the Series primarily follows Ash Ketchum, a young boy from Pallet Town who dreams of becoming a Pokémon Master. After receiving his first Pokémon, Pikachu, from Professor Oak, Ash embarks on a journey across various regions, including Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, and Galar, where he challenges Gym Leaders, competes in regional Pokémon Leagues, or other competitions, and meets a variety of companions who support him in his goal.\n[…]\nOne of Ash's companions in Black and White series. Iris hails from a village where Dragon-type Pokémon are a major focus. She notably travels with an Axew, which evolves into a Haxorus. She reappears in Pokémon Master Journeys: The Series, where she is revealed to have become the new Unova Regional Champion. She battles Cynthia in the World Coronation Series Masters Eight Tournament but loses.\n[…]\nCilan is a Pokémon Connoisseur who has the ability to determine the compatibility between Pokémon and their trainers. He travels with Ash in Black and White series. He is one of the Gym Leaders of the Unova Region, a position he shares with his brothers Chili and Cress, but he leaves his post to join Ash and Iris on their journey. He has numerous interests seen throughout the series such as fishing, cinema and subway trains. He has the Grass-type Pokémon Pansage as his partner.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon TV Anime Official Japanese website (in Japanese)\n[…]\nPokémon (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nYukinari Okido em japonês e Professor Samuel Oak em inglês), Ash embarca em uma jornada por diversas regiões, incluindo Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola e Galar, onde desafia Líderes de Ginásio, compete em Ligas Pokémon regionais e outras competições, e conhece diversos companheiros que o apoiam e o ajudam em seu objetivo.\n[…]\nPokémon, a Série\n[…]\nPokémon Horizontes, a Série\n[…]\nPokémon chegou ao Brasil no dia 10 de maio de 1999, sendo transmitido inicialmente no programa \"Eliana e Alegria\" da Record. No Cartoon Network, o anime estreou em 6 de setembro do mesmo ano, sendo transmitido inicialmente no \"Talismã\" e esteve transmitido até setembro de 2021. Na TV aberta, Pokémon foi transmitido pela Record da 1ª até a 4ª temporada.\n[…]\nsó transmitia Pokémon de forma \"correta\" e com horário fixo da 1ª temporada até o início da 5ª (quando o anime chegava no episódio 252, pulava direto para a oitava temporada, pois os direitos das demais temporadas ainda estavam com a Globo) através do TV Kids. Da 13ª temporada em diante nunca chegou a ser exibida na TV aberta, sendo transmitidas somente em canais de TV a cabo (Cartoon Network, Tooncast e Gloob) e serviços de streaming (Netflix, Amazon Prime Video e Globoplay).\n[…]\nPágina oficial de Pokémon (em japonês)\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)\n[…]\nPágina oficial de Pokémon (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Tepig de Ash",
      "descricao": "Tepig de Ash Ketchum no anime Pokémon, encontrado em Unova, que evolui para Pignite."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Unova, Ash encontra um Tepig faminto e machucado, amarrado a um poste. Por que o antigo treinador o deixou ali?",
    "resposta": "Achava o Tepig fraco",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Pignite",
      "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Pignite",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon_anime_characters",
        "situacao": "ok",
        "texto": "Pokémon, abbreviated from the Japanese title of Pocket Monsters, and branded in English as Pokémon the Series and Pokémon Horizons: The Series, is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise, which premiered on TV Tokyo in April 1997.\n[…]\nPokémon the Series primarily follows Ash Ketchum, a young boy from Pallet Town who dreams of becoming a Pokémon Master. After receiving his first Pokémon, Pikachu, from Professor Oak, Ash embarks on a journey across various regions, including Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, and Galar, where he challenges Gym Leaders, competes in regional Pokémon Leagues, or other competitions, and meets a variety of companions who support him in his goal.\n[…]\nOne of Ash's companions in Black and White series. Iris hails from a village where Dragon-type Pokémon are a major focus. She notably travels with an Axew, which evolves into a Haxorus. She reappears in Pokémon Master Journeys: The Series, where she is revealed to have become the new Unova Regional Champion. She battles Cynthia in the World Coronation Series Masters Eight Tournament but loses.\n[…]\nCilan is a Pokémon Connoisseur who has the ability to determine the compatibility between Pokémon and their trainers. He travels with Ash in Black and White series. He is one of the Gym Leaders of the Unova Region, a position he shares with his brothers Chili and Cress, but he leaves his post to join Ash and Iris on their journey. He has numerous interests seen throughout the series such as fishing, cinema and subway trains. He has the Grass-type Pokémon Pansage as his partner."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_%28anime%29",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nAsh e seus amigos vagam por aí, encontram um novo Pokémon ou treinador Pokémon, lutam, fazem amigos e então usam seu recém-descoberto Poder da Amizade para impedir um ataque da nefasta Equipe Rocket\", e acrescentou: \"até mesmo os torneios são um alívio, uma pausa abençoada na fórmula que derrete o cérebro, enquanto Ash e companhia enfrentam rivais predestinados por um ou dois episódios\".\n[…]\nKevin McFarland, em um guia de maratona da série Liga Índigo para a Wired em 2016, descreveu a série como \"um programa infantil que enfatiza o valor do trabalho árduo, a importância da família e da amizade próxima, e os ideais de amor, confiança e honra. Mas também é um programa bastante bobo, com comédia pastelão e sequências de batalha coloridas, tornando a tarefa hercúlea de Ash de se tornar o melhor treinador Pokémon do mundo continuamente divertida.\"\n[…]\nA troca do dublador acendeu um protesto entre os dubladores dos personagens principais, que recusaram-se a continuar em seus papéis se o protagonista fosse trocado. Devido ao mal-estar, a partir de XYZ eixo da dublagem brasileira deixou São Paulo e passou para o Rio de Janeiro, o que causou a troca generalizada de dubladores e estilo de dublagem e tradução.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Meloetta",
      "descricao": "Pokémon mítico dos tipos Normal e Psíquico da quinta geração, a melodia."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Depois da Liga de Unova, que pokémon mítico cantor passa a acompanhar Ash invisível, perseguido pela Equipe Rocket?",
    "resposta": "Meloetta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Black_%26_White:_Adventures_in_Unova_and_Beyond",
      "https://bulbapedia.bulbagarden.net/wiki/Meloetta_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Black_%26_White:_Adventures_in_Unova_and_Beyond",
        "situacao": "ok",
        "texto": "Pokémon: Black & White: Adventures in Unova and Beyond is the sixteenth season of the Pokémon anime series and the third and final season of Pokémon the Series: Black & White. It originally aired in Japan from October 11, 2012, to September 26, 2013, on TV Tokyo, and in the United States from February 2, 2013, to December 7, 2013, on Cartoon Network.\n[…]\nThe Japanese opening songs are \"Be an Arrow!\" (やじるしになって!, Yajirushi ni Natte!), \"Be an Arrow! 2013\" (やじるしになって! 2013, Yajirushi ni Natte! 2013) by Rica Matsumoto and \"Summerly Slope\" (夏めく 坂道, Natsumeku Sakamichi) by Daisuke. The ending songs are the ending theme song of the lead-in short for the movie, Pokémon the Movie: Kyurem vs.\n[…]\nthe Sword of Justice, Meloetta's Moonlight Serenade, \"Look Look☆Here\" (みてみて☆こっちっち, Mite Mite☆Kotchitchi) by Momoiro Clover Z (桃色黒羽ゼット) to promote the short, \"Sakura Go-Round\" (サクラ・ゴーラウンド, Sakura Gō-Raundo) by Shiritsu Ebisu Chugaku (チュ学私立恵比寿), \"Let's Join Hands\" the ending theme song of the lead-in short for the movie, Pokémon the Movie: Genesect and the Legend Awakened, Pikachu & Eevee☆Friends, (手をつなごぅ, \"Te o Tsunagō\") by Shiritsu Ebisu Chugaku (私立恵比寿中学) to promote the short, \"X Strait, Y Scenery\" (X海峡Y景色, Ekkusu Kaikyō Wai Keshiki; \"X-Kaikyō, Y-Keshiki\") (from Pokémon The Series: XY) performed by J☆Dee'Z during the second Black & White anime special episode, and the English opening song is \"It's Always You and Me\" by Neal Coomer and Kathryn Raio.\n[…]\nViz Media and Warner Home Video released Pokémon: Black & White: Adventures in Unova and Beyond – The Complete Season on DVD on February 21, 2023.\n[…]\nPokémon anime website at TV Tokyo (in Japanese)\n[…]\nPokémon Anime television series at Pokémon JP official website (in Japanese)"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Meloetta_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Black_%26_White%3A_Adventures_in_Unova_and_Beyond",
        "situacao": "ok",
        "texto": "Pokémon Preto e Branco: Aventuras em Unova e Mais Além (Pokémon: Black & White: Adventures in Unova and Beyond) é a décima sexta temporada da série de anime Pokémon, do primeiro anime Pokémon, a Série e a terceira temporada de Pokémon, a Série: Preto e Branco (Pokémon the Series: Black & White).\n[…]\nAsh retorna para Kanto com Iris, que o acompanha para se tornar uma melhor Mestra dos Dragões, enquanto Cilan planeja aprimorar suas habilidades de Conhecedor com os Pokémon da região de Kanto.\n[…]\nthe Sword of Justice, Meloetta's Moonlight Serenade, \"Look Look☆Here\" (みてみて☆こっちっち, Mite Mite☆Kotchitchi) de Momoiro Clover Z (桃色黒羽ゼット) para promover o curta \"Sakura Go-Round\" (サクラ・ゴーラウンド, Sakura Gō-Raundo) de Shiritsu Ebisu Chugaku (チュ学私立恵比寿), \"Let's Join Hands\" a música tema de encerramento do curta-metragem do filme, Pokémon the Movie: Genesect and the Legend Awakened, Pikachu e Eevee☆Friends, (手をつなごぅ, \"Te o Tsunagō\") de Shiritsu Ebisu Chugaku (私立恵比寿中学) para promover o curta \"X Strait, Y Scenery\" (X海峡Y景色, Ekkusu Kaikyō Wai Keshiki; \"X-Kaikyō, Y-Keshiki\") (de Pokémon the Series XY) interpretada por J☆Dee'Z durante o segundo episódio especial do anime Black & White.\n[…]\nNos Estados Unidos, a temporada teve sua exibição na Netflix, Hulu, Amazon Prime Video e no canal Pokémon TV do YouTube.\n[…]\nA Viz Media e a Warner Home Video lançaram Pokémon: Black & White: Adventures in Unova and Beyond – The Complete Season em DVD em 21 de fevereiro de 2023.\n[…]\nWebsite oficial de Pokémon US (em inglês)\n[…]\nWebsite do anime Pokémon na TV Tokyo (em japonês)\n[…]\nWebsite oficial do anime de televisão Pokémon no Pokémon JP  (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.71 — 2026-10-16**
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
- no máximo **3 perguntas por âncora** no banco inteiro, somando texto e figura, e no máximo **2 com figura**. As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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

---

# Regras de conteúdo do modo (modo_pokemon.md)

Estas são as regras de conteúdo do **modo Pokémon**, que valem para as perguntas exclusivas dele (`colecao: "pokemon"`, `exclusiva: true`). Elas partem da Parte I do MANIFESTO acima: princípios, classificação, ângulos, tipos de pergunta, redação para voz e critérios de qualidade continuam valendo. **Onde estas regras e o MANIFESTO divergirem, valem estas.**

### Público e profundidade

- **O público é quem gosta de pokémon:** já jogou alguns jogos, viu o anime e conhece pokémon de várias gerações. Isso substitui o "público informado, mas leigo" do MANIFESTO §7: termos da franquia (tipo, evolução, ginásio, insígnia, lendário, Pokédex, megaevolução, iniciais) dispensam explicação.
- **Pode ir mais fundo que no jogo original**, mas a régua da justiça continua: um fã diria "boa pergunta", e não "que detalhe arbitrário". Profundidade vem do fato, não da obscuridade (MANIFESTO, princípio 4).
- **Entram:** a origem dos nomes, a inspiração dos desenhos, as lendas dos lendários, como e em quem um pokémon evolui, as formas regionais, o enredo e os lugares dos jogos, os líderes e campeões, os bastidores da criação, o anime, os filmes, a dublagem e o Pokémon no Brasil.
- **Ficam de fora:** números da Pokédex, estatísticas, valores de dano e de atributos, probabilidades e mecânicas internas (a chance de um brilhante, taxas de captura), golpes e habilidades obscuros, falhas de programação e dados escondidos (MissingNo., itens duplicados), detalhes que só um competidor saberia, e perguntas que pedem listas. A exceção são os cartões feitos de dados, o de tipo e atributos base e o de golpe ("Qual é esse ataque?"), em que os números aparecem na figura como pista e ninguém precisa sabê-los de cor.

### Cobertura

A franquia inteira, distribuída por **todas as gerações**, e não só Kanto. Cada lote de texto tem um dos três subtemas do modo como foco e procura fatos ainda não usados.

### Variedade

- **Não há cota de ângulos nos lotes:** não valem o máximo de 25% num mesmo ângulo, o mínimo de 6 ângulos, o máximo de 30% para `identidade` + `atributo` nem o piso de 20% para `conexao` + `nome` (MANIFESTO §9). Um lote pode se concentrar no ângulo que o foco pede.
- **Continuam valendo:** no máximo 2 perguntas por âncora no mesmo lote, nunca com o mesmo ângulo; no máximo 2 perguntas com o mesmo ângulo por âncora, na coleção; e perguntas do mesmo ângulo não repetem o mesmo molde de frase (MANIFESTO §5).
- Na silhueta e no cartão de tipo e atributos **não há cota de emblemáticos: todos os pokémon entram**, famosos ou não, de todas as gerações e em todas as formas da linha evolutiva.

### Saturação e repetição

- **A conta é só na coleção.** Na saturação de uma âncora, contam as perguntas com `colecao: "pokemon"`, exclusivas ou não, e não as do jogo original. As exclusivas, por sua vez, não contam na saturação do jogo original, porque uma partida nunca sorteia os dois conjuntos.
- **No máximo 5 perguntas por âncora** na coleção, somando texto e figura, e no máximo **2 com figura**. Isso substitui o limite de 3 do MANIFESTO §4.
- **Silhueta e cartão ficam fora da saturação.** A silhueta da casa "Quem é esse pokémon?", qualquer que seja a pergunta, e o cartão de tipo e atributos não contam nos limites acima, e o mesmo pokémon pode ter os dois. Cada pokémon tem no máximo **uma silhueta** e **um cartão**.
- **Um fato, uma pergunta, na coleção inteira:** uma pergunta nova não pode perguntar um fato que outra pergunta da coleção já pergunta, **mesmo com outra âncora**. Ash e Satoshi é o mesmo fato, pela âncora Ash ou pela âncora Satoshi Tajiri; os nomes de cores das cidades de Kanto também, por Pallet ou por Viridian.

### Nomes

Os jogos ganharam tradução oficial para o português do Brasil a partir de Scarlet e Violet, e o anime sempre foi dublado. Os fãs mais antigos conhecem os nomes em inglês, e os mais novos, os brasileiros. Por isso:

- **Golpes, itens, habilidades, lugares, organizações e personagens:** quando o nome oficial brasileiro é diferente do inglês, a pergunta usa **os dois**.
  - **No enunciado:** o brasileiro primeiro, depois o inglês, ligados por "ou", sem parênteses: "Nos jogos de Kanto, quem lidera a Equipe Rocket, ou Team Rocket?".
  - **Na resposta:** o brasileiro, com o inglês entre parênteses: "Equipe Rocket (Team Rocket)". É o caso de parênteses "muito apropriado" do MANIFESTO §7.
  - **Na múltipla escolha:** as quatro alternativas seguem a mesma forma, para a resposta não se destacar. O limite de 4 palavras vale para cada nome.
  - **Nas variantes da âncora:** os dois nomes.
- **Só nome brasileiro oficial**, de que se tenha certeza: o dos jogos traduzidos, o da dublagem ou o do material oficial da The Pokémon Company no Brasil. Nada de tradução livre: na dúvida, só o nome em inglês.
- **Os nomes dos pokémon** são os mesmos no Brasil e em inglês, e vão uma vez só.
- Os **tipos** usam sempre os nomes oficiais brasileiros (Planta, Venenoso, Fantasma), como nos cartões.
- **"pokémon"**, em minúsculas, é o nome comum da criatura e não vai para o plural ("os pokémon"); **"Pokémon"**, com maiúscula, é a franquia.

### Redação para voz

Além do MANIFESTO §7:
- Nomes com símbolos ou sinais vão na forma falada: "Nidoran fêmea" e "Nidoran macho", e não com ♀ e ♂; "Porygon Z", sem hífen.
- Gerações por ordinal, por extenso: "na quarta geração", e não "na Gen 4".
- Siglas da comunidade (PP, HM, TM, IV, EV) não entram no enunciado; se o conceito importar, diga o que ele é.

### Atemporalidade

A franquia continua lançando jogos e pokémon. Nada de "o jogo mais recente", "a geração atual", "o último pokémon", "quantos pokémon existem", "quantas regiões há" nem de recordes de venda ou de audiência que ainda podem ser batidos. Contagens só de conjuntos fechados: "quantos pokémon tinha a primeira geração" vale.

### Fontes

A Bulbapedia é a referência da franquia, mas bloqueia acesso automatizado: o crítico não lê os trechos dela. Por isso, toda pergunta cita, além da Bulbapedia, uma página da **Wikipédia**, em inglês ou em português, que sustente o fato, sempre que houver uma. Uma pergunta só com a Bulbapedia depende do conhecimento do crítico e só passa com fato amplamente documentado.

### Distratores

Sempre da franquia: outros pokémon, personagens, lugares, itens ou jogos de Pokémon, de preferência da mesma geração ou de gerações vizinhas. Nunca uma alternativa de fora do universo Pokémon.
