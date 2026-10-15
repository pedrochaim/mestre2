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
      "nome": "Pokémon Black e White",
      "descricao": "Par de jogos Pokémon da quinta geração, lançado em 2010 para o Nintendo DS e ambientado na região de Unova."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Black e White, que levaram os jogadores à região de Unova no Nintendo DS, foram lançados no Japão em que ano?",
    "resposta": "2010",
    "distratores": [
      "2009",
      "2011",
      "2008"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version and Pokémon White Version are 2010 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. They are the first installments in the fifth generation of the Pokémon video game series. First released in Japan on 18 September 2010, they were later released in Europe, North America and Australia in March 2011. Sequels \n[…]\nNintendo DS Pokémon Black · White Super Music Collection is a four-disc soundtrack featuring the games' music scored by Masuda, Go Ichinose, Shota Kageyama, Hitomi Sato, Morikazu Aoki, Minako Adachi, and Satoshi Nohara. The soundtrack was released on 20 October 2010, in Japan. Ichinose was in charge of directing all Pokémon voices for the game while Adachi produced all sound effects.\n[…]\nPokémon Black and White were released in Japan on 18 September 2010. They were later released in Europe on 4 March 2011, in North America on 6 March 2011, and in Australia on 10 March 2011.\n[…]\nIn August 2010, one month before the games' release in Japan, Pokémon Black and White gained a total of 1.08 million pre-orders, becoming the fastest game on the Nintendo DS to break the 1 million mark. In the first two days on sale, it sold more than 2.6 million copies, becoming the biggest launch in the series history in Japan. By 3 November, the games had sold over 4.3 million copies in Japan. As of 9 January 2011, the games became the fastest DS titles to sell 5 million copies.\n[…]\nIn April 2011, Nintendo's financial earnings report confirmed that Pokémon Black and White had sold 11.5 million copies worldwide, making them the highest selling DS games for Nintendo in the 2010–11 financial year, and third overall, behind only the Wii games, Wii Sports and Wii Sports Resort. As of September 2017, the games' combined sales have reached 15.64 million."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Black_e_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version e White Version (ポケットモンスターブラック・ホワイト, Poketto Monsutā Burakku・Howaito; Monstros de Bolso Black・White, Black e White significam Preto e Branco quando traduzidos do inglês para o português, Preto e Branco em japonês seria 黒・白, Kuro・Shiro) são jogos eletrônicos de RPG lançados em 2010, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo lançados para o \n[…]\nEm 29 de janeiro de 2010, a The Pokémon Company anunciou o desenvolvimento de novos jogos da franquia Pokémon para o Nintendo DS, que seriam lançados no final do ano. Junichi Masuda, diretor de Pokémon, disse que vários aspectos da saga estão sendo atualizados para a nova geração. Em 9 de abril de 2010, o site japonês de Pokémon foi atualizado com a revelação dos títulos Pokémon Black e White, e foi lançado no Japão em setembro de 2010.\n[…]\nPokémon Nintendo DS Black · White Super Music Collection (ニンテンドーDSポケットモンスターブラック·ホワイトスーパーミュージックコレクション, Nintendo Di Esu Poketto Monsutā Burakku · Howaito Supa Myūjikku Korekushon) é uma trilha sonora de quatro discos que apresenta a música dos jogos com pontuação de Masuda, Go Ichinose, Shota Kageyama, Hitomi Sato, Morikazu Aoki, Minako Adachi e Satoshi Nohara. A trilha sonora foi lançada no dia 20 de outubro de 2010, no Japão.\n[…]\nEm agosto de 2010, um mês antes do lançamento dos jogos no Japão, Pokémon Black e White ganhou um total de 1,08 milhão de encomendas, tornando-se o jogo mais rápido no Nintendo DS a quebrar a marca de um milhão. Nos primeiros dois dias de venda, vendeu mais de 2,6 milhões de cópias, se tornando o maior lançamento da história da série no Japão. Em 3 de novembro, os jogos venderam mais de 4,3 milhões de cópias no Japão.\n[…]\nSequências de Black e White, Pokémon Black 2 e White 2, foram lançadas para o Nintendo DS em 2012. São as primeiras e únicas, até à data, sequências da franquia da série principal.\n[…]\nPokemon Black and White",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pokémon Black e White",
      "descricao": "Par de jogos Pokémon da quinta geração, lançado em 2010 para o Nintendo DS e ambientado na região de Unova."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes pares de jogos principais trouxe o maior número de espécies inéditas de pokémon?",
    "resposta": "Black e White",
    "distratores": [
      "Red e Green",
      "Ruby e Sapphire",
      "Diamond e Pearl"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White",
      "https://bulbapedia.bulbagarden.net/wiki/Generation_V"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version and Pokémon White Version are 2010 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. They are the first installments in the fifth generation of the Pokémon video game series. First released in Japan on 18 September 2010, they were later released in Europe, North America and Australia in March 2011. Sequels \n[…]\nIt was later confirmed that Black and White are region locked on the Nintendo DSi and 3DS.\n[…]\nIn August 2010, one month before the games' release in Japan, Pokémon Black and White gained a total of 1.08 million pre-orders, becoming the fastest game on the Nintendo DS to break the 1 million mark. In the first two days on sale, it sold more than 2.6 million copies, becoming the biggest launch in the series history in Japan. By 3 November, the games had sold over 4.3 million copies in Japan. As of 9 January 2011, the games became the fastest DS titles to sell 5 million copies.\n[…]\nUpon its release in the UK, White and Black took the #1 and #2 spots respectively in the UK overall sales charts, with White becoming the second fastest-selling DS game ever in the UK after Professor Layton and Pandora's Box, selling 13,000 more copies than Black. Combined, their sales became Nintendo's third biggest ever launch in the UK, behind Wii Fit and Mario Kart Wii, and the biggest opening weekend ever for a pair of Pokémon titles.\n[…]\nIn April 2011, Nintendo's financial earnings report confirmed that Pokémon Black and White had sold 11.5 million copies worldwide, making them the highest selling DS games for Nintendo in the 2010–11 financial year, and third overall, behind only the Wii games, Wii Sports and Wii Sports Resort. As of September 2017, the games' combined sales have reached 15.64 million.\n[…]\nSequels to Black and White, Pokémon Black 2 and Pokémon White 2, were released for the Nintendo DS in 2012."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Generation_V",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Black_e_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version e White Version (ポケットモンスターブラック・ホワイト, Poketto Monsutā Burakku・Howaito; Monstros de Bolso Black・White, Black e White significam Preto e Branco quando traduzidos do inglês para o português, Preto e Branco em japonês seria 黒・白, Kuro・Shiro) são jogos eletrônicos de RPG lançados em 2010, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo lançados para o \n[…]\nDois recursos foram adicionados para transferir Pokémon de jogos mais antigos do DS Pokémon para Black e White. Para transferência normal, o recurso Poké Transfer (PokéShifter) está disponível após a conclusão da história principal. Ao contrário do recurso \"Pal Park\" dos jogos anteriores, o Poké Transfer é um minijogo no qual, após a transferência de seis Pokémon, o jogador usa a tela de toque para lançar Pokébolas no Pokémon transferido para capturá-los dentro de um limite de tempo.\n[…]\nComo os jogos Pokémon anteriores, Black e White seguem um enredo linear; os eventos principais ocorrem em uma ordem fixa. O protagonista de Pokémon Black e White é um adolescente que parte em uma jornada por Unova para se tornar o mestre Pokémon. No início dos jogos, o jogador escolhe Snivy, Tepig ou Oshawott como seu Pokémon inicial como um presente da Professora Juniper.\n[…]\nEm agosto de 2010, um mês antes do lançamento dos jogos no Japão, Pokémon Black e White ganhou um total de 1,08 milhão de encomendas, tornando-se o jogo mais rápido no Nintendo DS a quebrar a marca de um milhão. Nos primeiros dois dias de venda, vendeu mais de 2,6 milhões de cópias, se tornando o maior lançamento da história da série no Japão. Em 3 de novembro, os jogos venderam mais de 4,3 milhões de cópias no Japão.\n[…]\nSequências de Black e White, Pokémon Black 2 e White 2, foram lançadas para o Nintendo DS em 2012. São as primeiras e únicas, até à data, sequências da franquia da série principal.\n[…]\nPokemon Black and White",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pokémon Black 2 e White 2",
      "descricao": "Par de jogos Pokémon da quinta geração para Nintendo DS, continuação direta de Black e White, ambientado em Unova."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Black 2 e White 2, a volta à região de Unova no Nintendo DS, chegaram às lojas do Japão em que ano?",
    "resposta": "2012",
    "distratores": [
      "2011",
      "2013",
      "2014"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_2_and_White_2"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_2_and_White_2",
        "situacao": "ok",
        "texto": "Pokémon Black Version 2 and Pokémon White Version 2 are 2012 role-playing video games developed by Game Freak, published by The Pokémon Company and Nintendo for the Nintendo DS. Part of the fifth generation of the Pokémon video game series, the games are direct sequels to Pokémon Black and Pokémon White, being the first sequels in the series. They were first released in Japan in June 2012, with a \n[…]\nThe games feature the legendary Pokémon identified by Junichi Masuda as Black Kyurem and White Kyurem. The games were first revealed on February 26, 2012, in the episode of the Japanese television program Pokémon Smash!, followed by an international confirmation on the Pokémon official website.\n[…]\nThe events of Pokémon Black 2 and White 2 take place two years after the events of Black and White, with new locations that weren't accessible in the previous games. These are places like Virbank City, Flocessy Town, Lentimas Town, Humilau City, along with areas called Hidden Grottoes, where you can catch special Pokémon. Also, instead of starting in Nuvema Town, the player begins their journey in Aspertia City, a new city located in the southwest of Unova.\n[…]\nMuch like other Pokémon games, the player travels around the region, battling Gym Leaders to acquire eight Gym Badges, and then goes on to challenge the Elite Four and the Unova League Champion to beat the game.\n[…]\nPokémon Black 2 and White 2 background music contains the music of Pokémon Black and White, adds brand new tracks, and utilizes the arrangements of most tracks from Pokémon Black and White. The official soundtrack of the game titled Nintendo DS Pokémon Black 2 · White 2 Super Music Complete was released in Japan on July 25, 2012. Its DISC 4 also includes music from Pokémon Black and White, Pokémon Emerald, and Pokémon Platinum, which had not seen an original soundtrack release prior."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Black_2_e_White_2",
        "situacao": "ok",
        "texto": "Pokémon Black Version 2 e White Version 2 (ポケットモンスターブラック2·ホワイト2, Poketto Monsutā Burakku Tsu & Howaito Tsu; Monstros de Bolso Black 2·White 2, que significam Preto 2·Branco 2 quando traduzidos do inglês para o português, Preto e Branco em japonês é respectivamente 黒・白, Kuro・Shiro) são dois jogos eletrônicos de RPG de 2012, faz parte da quinta geração da série Pokémon, desenvolvida pela Game Freak,\n[…]\nContinuação de Pokémon Black e White, os dois jogos foram lançados em 23 de junho de 2012 no Japão e programado para o dia 7 de outubro de 2012 nos Estados Unidos e 12 de outubro de 2012 na Europa.\n[…]\nPokémon Black 2 e White 2 são ambientados dois anos após os eventos de Black e White, e muitos dos eventos iniciais acontecem em novos locais no lado oeste da região de Unova. Esses novos locais também apresentam vários Pokémon que antes não estavam disponíveis em Black e White com um total de 300 criaturas únicas disponíveis desde o início do jogo.\n[…]\nDepois de lutar contra a Tríade das Sombras com a ajuda do rival do jogador, que recebe seu Liepard de volta, o jogador entra no santuário interno do Abismo Gigante, onde encontram Kyurem e Ghetsis. N aparece com seu Zekrom em Preto 2 ou Reshiram em Branco 2para tentar convencer seu pai Ghetsis, mas o lendário Pokémon de N é derrotado e fundido com Kyurem, transformando-o em Black Kyurem em Black 2 ou White Kyurem em White 2, e forçando o jogador a batalhar contra ele.\n[…]\nA música de fundo do Pokémon Black 2 e White 2 contém a música do Pokémon Black e White, adiciona novas faixas e utiliza os arranjos da maioria das faixas do Pokémon Black e White. A trilha sonora oficial do jogo intitulado Nintendo DS Pokémon Black 2 · White 2 Super Music Complete (ニンテンドーDSポケモンブラック2 ·ホワイト2スーパーミュージックコンプリート, Nintendo Di Esu Poketto Monsutā Burakku Tsu · Howaito TSU Supa Myūjikku Konpurīto) foi lançada no Japão em 25 de julho de 2012.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Pokémon Black 2 e White 2",
      "descricao": "Par de jogos Pokémon da quinta geração para Nintendo DS, continuação direta de Black e White, ambientado em Unova."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Black 2 e White 2 foram as primeiras continuações diretas da série principal. Quantos anos depois de Black e White se passa a história?",
    "resposta": "Dois anos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_2_and_White_2",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Black_2_and_White_2_Versions"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_2_and_White_2",
        "situacao": "ok",
        "texto": "Pokémon Black Version 2 and Pokémon White Version 2 are 2012 role-playing video games developed by Game Freak, published by The Pokémon Company and Nintendo for the Nintendo DS. Part of the fifth generation of the Pokémon video game series, the games are direct sequels to Pokémon Black and Pokémon White, being the first sequels in the series. They were first released in Japan in June 2012, with a \n[…]\nDuring development, the theme Takao Unno raised for Black and White 2 was resonance, which led the staff to bringing up the idea for 100 people to be able to play together through the Entralink. For smoother gameplay for new and returning players, a Pokémon Center was added to the first city of the region, a first for Pokémon games at that time, for an expedited introduction to the world.\n[…]\nPokémon Black 2 and White 2 were released alongside the premiere of Pokémon the Movie: Kyurem vs. The Sword of Justice, and certain theaters in Japan allowed players to receive an in-game Pokémon in Black and White or Black and White 2 when watching the movie.\n[…]\nPokémon Black 2 and White 2 background music contains the music of Pokémon Black and White, adds brand new tracks, and utilizes the arrangements of most tracks from Pokémon Black and White. The official soundtrack of the game titled Nintendo DS Pokémon Black 2 · White 2 Super Music Complete was released in Japan on July 25, 2012. Its DISC 4 also includes music from Pokémon Black and White, Pokémon Emerald, and Pokémon Platinum, which had not seen an original soundtrack release prior.\n[…]\nWithin the first two days of release, Pokémon Black 2 and White 2 sold over 1.6 million copies, and over 2 million copies within the first two weeks.As of January 2013, Pokémon Black 2 and White 2 had combined sales of 7.81 million copies worldwide. By 2020, Pokémon Black 2 and White 2 had sold 8.52 million copies worldwide."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Black_2_and_White_2_Versions",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Black_2_e_White_2",
        "situacao": "ok",
        "texto": "Pokémon Black Version 2 e White Version 2 (ポケットモンスターブラック2·ホワイト2, Poketto Monsutā Burakku Tsu & Howaito Tsu; Monstros de Bolso Black 2·White 2, que significam Preto 2·Branco 2 quando traduzidos do inglês para o português, Preto e Branco em japonês é respectivamente 黒・白, Kuro・Shiro) são dois jogos eletrônicos de RPG de 2012, faz parte da quinta geração da série Pokémon, desenvolvida pela Game Freak,\n[…]\nContinuação de Pokémon Black e White, os dois jogos foram lançados em 23 de junho de 2012 no Japão e programado para o dia 7 de outubro de 2012 nos Estados Unidos e 12 de outubro de 2012 na Europa.\n[…]\nBlack 2 e White 2 seguem a jornada de um treinador Pokémon para se tornar o Campeão Pokémon de Unova, dois anos após os eventos de Pokémon Black e White. Seguindo os eventos de seus antecessores, a organização criminosa Equipe Plasma voltou como Neo Equipe Plasma, e o jogador deve frustrar seus planos ao longo da história, impedindo-os de governar o mundo. Os jogos também incluem novos recursos, como o Sistema de Chaves, Grutas Escondidas, novas cidades e os novos Pokémon disponíveis.\n[…]\nSemelhante às entradas anteriores, Pokémon Black 2 e White 2 consistem em dois loops principais de jogabilidade, exploração do mundo superior e batalhas. A exploração do mundo superior consiste em controlar o personagem do jogador de uma perspectiva de cima para baixo, conversando com personagens não jogáveis e procurando por itens e Pokémon. As batalhas consistem no jogador enviar seu Pokémon com o objetivo de reduzir o Pokémon do oponente a zero pontos de saúde.\n[…]\nNos primeiros dois dias de lançamento, Pokémon Black 2 e White 2 venderam mais de 1,6 milhões de cópias nos primeiros dois dias e mais de 2 milhões de cópias nas primeiras duas semanas. Em janeiro de 2013, Pokémon Black 2 e White 2 tinham vendas combinadas de 7,81 milhões de cópias em todo o mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Pokémon X e Y",
      "descricao": "Par de jogos Pokémon da sexta geração, lançado em 2013 para o Nintendo 3DS e ambientado na região de Kalos."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon X e Y foram os primeiros jogos da série lançados no mesmo dia no mundo inteiro. Em que ano isso aconteceu?",
    "resposta": "2013",
    "distratores": [
      "2012",
      "2014",
      "2011"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y",
        "situacao": "ok",
        "texto": "Pokémon X and Pokémon Y are 2013 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the sixth generation of the main Pokémon game series. First announced in January 2013 by Nintendo president Satoru Iwata through a Nintendo Direct, Pokémon X and Pokémon Y were released worldwide in October 2013\n[…]\nIn promoting the game's new Mega Evolution feature, Mega Mewtwo Y (then known as \"Awakened Mewtwo\") was featured in a special episode of the anime titled \"Mewtwo: Prologue to Awakening\" and then the film ExtremeSpeed Genesect: Mewtwo Awakens, released in Japan on 13 July 2013. Mega Evolution was also featured in the TV special Pokémon Origins, which was a re-telling of the original Pokémon Red and Blue games, and included a surprise appearance of Mega Charizard X.\n[…]\nThe upcoming season of the Pokémon anime series based on these games, titled Pokémon the Series: XY, began airing in Japan on 17 October 2013, and was previewed in North America and Europe on 19 October 2013.\n[…]\nPokémon X and Y were nominated for Best RPG and Best Handheld Game at the 2013 VGX Awards. In 2014 it won the Golden Joystick Award for Handheld Game of the Year. During the 17th Annual D.I.C.E. Awards, the Academy of Interactive Arts & Sciences nominated Pokémon X and Y for \"Handheld Game of the Year\" and \"Role-Playing/Massively Multiplayer Game of the Year\".\n[…]\nAt the time, they were the fastest-selling 3DS titles in the Americas, but were later surpassed by Pokémon Sun and Moon. Within three months of release, by December 2013, the games were the best-selling titles for the 3DS with 11.61 million copies sold worldwide. They remained at the top through at least 2016, before being outsold by Mario Kart 7 in 2017."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_X_e_Y",
        "situacao": "ok",
        "texto": "Pokémon X e Y (ポケットモンスター X・Y, Poketto Monsutā Ekkusu & Wai; Monstros de Bolso Xis & Ípsilon) são dois jogos eletrônicos de RPG de 2013, produzidos pela Game Freak e publicados pela The Pokémon Company e Nintendo para o Nintendo 3DS, sendo os jogos mais vendidos do console, com 27 milhões de cópias vendidas. São os primeiros títulos da sexta geração da série Pokémon.\n[…]\nAnunciado pela primeira vez em janeiro de 2013 pelo ex-presidente da Nintendo, Satoru Iwata, através de um Nintendo Direct especial, Pokémon X e Y foram lançados mundialmente em outubro de 2013, tornando-os os primeiros jogos de varejo publicados pela Nintendo a ter um lançamento global simultâneo em todas as principais regiões.\n[…]\nPokémon X e Y foram anunciados por Satoru Iwata através de um Nintendo Direct em 8 de janeiro de 2013. Um primeiro para a série principal de títulos Pokémon, X e Y foram lançados mundialmente em 12 de outubro de 2013. A seguir venda generalizada dos títulos antes de sua data de lançamento no Brasil, a Nintendo alertou os varejistas de jogos que eles seriam penalizados se continuassem a quebrar o namoro. Uma loja em Bournemouth, Reino Unido, começou a vender os jogos em 11 de outubro.\n[…]\nA próxima temporada do anime Pokémon A, série baseada nesses jogos, intitulada Pokémon the Series: XY, começou a ser exibida no Japão em 17 de outubro de 2013, e foi apresentada na América do Norte e na Europa em 19 de outubro de 2013.\n[…]\nMais de 4 milhões de cópias dos jogos foram vendidas em todo o mundo no primeiro fim de semana, tornando X e Y o jogo de venda mais rápida no 3DS. Na época, eles foram os títulos 3DS de venda mais rápida nas Américas, mas mais tarde foram superados por Pokémon Sun e Moon. Dentro de três meses do lançamento, em dezembro de 2013, os jogos foram os títulos mais vendidos para o 3DS, com 11,61 milhões de cópias vendidas em todo o mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Castelia",
      "descricao": "Grande cidade portuária de arranha-céus da região de Unova, nos jogos Pokémon Black e White."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Castelia, a cidade de arranha-céus e píeres de Black e White, foi inspirada em qual parte de Nova York?",
    "resposta": "Manhattan",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Castelia_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Castelia_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Musical Pokémon",
      "descricao": "Atração de Pokémon Black e White em que o jogador enfeita seus pokémon com acessórios para se apresentarem num palco."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Black e White, o Musical Pokémon, em que o jogador enfeita seus pokémon com acessórios para um espetáculo, acontece em qual cidade de Unova?",
    "resposta": "Nimbasa",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Musical"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Musical",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Kyurem",
      "descricao": "Pokémon lendário dos tipos Dragão e Gelo da quinta geração, que pode se fundir a Reshiram ou Zekrom."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Black e White, depois do fim da história, o lendário Kyurem pode ser capturado no fundo de qual caverna gelada de Unova?",
    "resposta": "Giant Chasm",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Giant_Chasm",
      "https://bulbapedia.bulbagarden.net/wiki/Kyurem_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Giant_Chasm",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kyurem_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Castelo de N",
      "descricao": "Castelo da Equipe Plasma em Pokémon Black e White, onde acontece o confronto final da história."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No clímax de Black e White, o castelo de N surge das profundezas da terra e envolve qual lugar de Unova?",
    "resposta": "A Liga Pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/N%27s_Castle"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/N%27s_Castle",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Zygarde",
      "descricao": "Pokémon lendário do tipo Dragão/Terra da sexta geração, guardião do ecossistema de Kalos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em X e Y, onde o jogador encontra o lendário Zygarde, o guardião do ecossistema de Kalos?",
    "resposta": "Na Terminus Cave",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Terminus_Cave"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Terminus_Cave",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Professor Sycamore",
      "descricao": "Professor pokémon da região de Kalos, que entrega o inicial ao jogador em Pokémon X e Y."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em X e Y, além do inicial de Kalos, o Professor Sycamore oferece ao jogador um segundo pokémon inicial, vindo de qual região?",
    "resposta": "Kanto",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Sycamore"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Sycamore",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Arma suprema",
      "descricao": "Máquina construída há três mil anos pelo rei AZ, em Pokémon X e Y, que a Equipe Flare quer disparar contra o mundo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em X e Y, a arma suprema construída pelo antigo rei AZ fica escondida debaixo de qual cidadezinha de Kalos, cercada de pedras antigas?",
    "resposta": "Geosenge",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ultimate_Weapon",
      "https://bulbapedia.bulbagarden.net/wiki/Geosenge_Town"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ultimate_Weapon",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Geosenge_Town",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Máquina Técnica",
      "descricao": "Item dos jogos Pokémon que ensina um golpe a um pokémon, conhecido pela sigla MT."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Durante muito tempo, cada Máquina Técnica servia uma única vez. A partir de qual par de jogos ela passou a poder ser usada sem limite?",
    "resposta": "Black e White",
    "distratores": [
      "X e Y",
      "HeartGold e SoulSilver",
      "Sun e Moon"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/TM"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/TM",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Personalização do treinador",
      "descricao": "Recurso dos jogos Pokémon que permite trocar roupas, acessórios e penteado do protagonista."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Comprar roupas em butiques e mudar o penteado do próprio treinador virou recurso da série principal a partir de qual par de jogos?",
    "resposta": "X e Y",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Character_customization",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Character_customization",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_X_and_Y",
        "situacao": "ok",
        "texto": "Pokémon X and Pokémon Y are 2013 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the sixth generation of the main Pokémon game series. First announced in January 2013 by Nintendo president Satoru Iwata through a Nintendo Direct, Pokémon X and Pokémon Y were released worldwide in October 2013\n[…]\nAs with previous installments, the games follow the journey of a young Pokémon Trainer as they train and battle Pokémon while thwarting  schemes of the criminal organisation Team Flare. X and Y introduced 72 new Pokémon species, and added new features including the new Fairy-type, character customisation, updated battle and training mechanics such as \"Mega Evolution\", and completely rendered polygonal 3D graphics as opposed to the sprites used in previous generations.\n[…]\nPokémon X and Y are the first titles in the main series presented in fully 3D polygonal graphics, allowing for more interactivity with the overworld and more dynamic action during battles. Players are also able to customise their Pokémon trainer's appearance, choosing gender, skin tone and hair colour at the start of the game, and can later acquire outfits and accessories in-game to change their character's look.\n[…]\nIn contrast to the praise for the games' visuals, the story was poorly received. Otero described the story and character personalities as \"pretty disappointing for a predominantly single-player RPG.\" McElroy described the campaign as \"rigidly formulaic\". However, Hilliard called some of the interactions with non-playable characters \"bizarre... and often entertaining\". Parkin criticized it as \"thin and melodramatic\" and \"sometimes jarringly preachy\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_X_e_Y",
        "situacao": "ok",
        "texto": "Pokémon X e Y (ポケットモンスター X・Y, Poketto Monsutā Ekkusu & Wai; Monstros de Bolso Xis & Ípsilon) são dois jogos eletrônicos de RPG de 2013, produzidos pela Game Freak e publicados pela The Pokémon Company e Nintendo para o Nintendo 3DS, sendo os jogos mais vendidos do console, com 27 milhões de cópias vendidas. São os primeiros títulos da sexta geração da série Pokémon.\n[…]\nPokémon X e Y são os primeiros títulos da série principal apresentados em gráficos poligonais totalmente 3D, permitindo mais interatividade com o mundo superior e ação mais dinâmica durante as batalhas. Os jogadores também podem personalizar a aparência de seu treinador Pokémon, escolhendo gênero, tom de pele e cor de cabelo no início do jogo, e podem posteriormente adquirir roupas e acessórios no jogo para mudar a aparência de seu personagem.\n[…]\nSemelhante aos jogos Pokémon anteriores, X e Y seguem um enredo linear cujos eventos principais ocorrem em uma ordem fixa. O protagonista de Pokémon X e Y é uma criança que acabou de se mudar com sua mãe para uma pequena cidade chamada Vaniville Town. Eles logo tornam-se amigos de quatro treinadores: Shauna, Tierno, Trevor e seu rival Calem ou Serena.\n[…]\nA pontuação do jogo foi composta por Shota Kageyama, Minako Adachi, Hitomi Sato, Junichi Masuda, Go Ichinose e Morikazu Aoki. Este foi o primeiro uso dos recursos de som do Nintendo 3DS para a série Pokémon, e Masuda expressou sua satisfação com a melhoria da qualidade de som e expressão. Semelhante ao tema dos próprios X e Y, a trilha sonora dos jogos foi projetada para enfatizar a beleza.\n[…]\nA próxima temporada do anime Pokémon A, série baseada nesses jogos, intitulada Pokémon the Series: XY, começou a ser exibida no Japão em 17 de outubro de 2013, e foi apresentada na América do Norte e na Europa em 19 de outubro de 2013.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Estações do ano em Pokémon Black e White",
      "descricao": "Mecânica de Pokémon Black e White em que primavera, verão, outono e inverno se alternam no jogo, mudando paisagens e pokémon."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em Black e White, as quatro estações do ano se alternam no jogo seguindo o relógio do console. Quanto tempo dura cada estação?",
    "resposta": "Um mês",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Season"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Season",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Elite dos Quatro de Unova",
      "descricao": "Grupo de quatro treinadores de elite, Shauntal, Grimsley, Caitlin e Marshal, enfrentados na Liga Pokémon de Unova em Black e White."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Black e White, que liberdade inédita o jogador ganha ao desafiar a Elite dos Quatro de Unova?",
    "resposta": "Enfrentá-los em qualquer ordem",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Elite_Four"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Elite_Four",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Opelucid",
      "descricao": "Cidade da região de Unova, nos jogos Pokémon Black e White, cujo visual muda conforme a versão do jogo."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Black e White, a cidade de Opelucid muda de visual conforme a versão do jogo. Como ela é em Pokémon Black?",
    "resposta": "Futurista",
    "distratores": [
      "Tradicional",
      "Em ruínas",
      "Coberta de neve"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Opelucid_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Opelucid_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Sistema de Chaves",
      "descricao": "Recurso de Pokémon Black 2 e White 2 que libera conteúdos e modos de jogo por meio de chaves, que podem ser trocadas entre as versões."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Black 2, depois de vencer a Liga, o Sistema de Chaves libera um modo de jogo especial. Qual?",
    "resposta": "Modo Desafio",
    "distratores": [
      "Modo Fácil",
      "Modo Noturno",
      "Modo Espelho"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Key_System"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Key_System",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Grace",
      "descricao": "Mãe do protagonista em Pokémon X e Y, que mora em Vaniville, na região de Kalos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em X e Y, a mãe do protagonista, que mora na pacata Vaniville, foi famosa no passado em qual esporte?",
    "resposta": "Corrida de Rhyhorn",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Grace"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Grace",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Mega Charizard X",
      "descricao": "Uma das duas megaevoluções de Charizard, introduzida em Pokémon X e Y, de corpo negro e chamas azuis."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Ao virar Mega Charizard X, de chamas azuis, o pokémon perde o tipo Voador e ganha qual outro tipo?",
    "resposta": "Dragão",
    "distratores": [
      "Sombrio",
      "Aço",
      "Lutador"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Mega_Evolution"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mega_Evolution",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Encontro em horda",
      "descricao": "Tipo de batalha introduzido em Pokémon X e Y em que vários pokémon selvagens aparecem juntos contra o jogador."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Nos encontros em horda, novidade de X e Y, quantos pokémon selvagens enfrentam o jogador de uma só vez?",
    "resposta": "Cinco",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Horde_Encounter"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Horde_Encounter",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Sábios da Equipe Plasma",
      "descricao": "Conselho de sábios que governa a Equipe Plasma em Pokémon Black e White, do qual faz parte Ghetsis."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Ghetsis, o verdadeiro chefe da Equipe Plasma, faz parte de um conselho de sábios que comanda o grupo. Quantos sábios formam esse conselho?",
    "resposta": "Sete",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Seven_Sages"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Seven_Sages",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Pokédex de Kalos",
      "descricao": "Pokédex regional dos jogos Pokémon X e Y, que registra os pokémon encontrados na região de Kalos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em X e Y, a Pokédex regional de Kalos tem tantos pokémon que é dividida em três partes. Quais são elas?",
    "resposta": "Central, Costeira e Montanhosa",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kalos_Pok%C3%A9dex"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kalos_Pok%C3%A9dex",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Equipe Flare",
      "descricao": "Organização vilã de Pokémon X e Y, da região de Kalos, de uniformes vermelhos, liderada por Lysandre."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Qual integrante da Elite dos Quatro de Kalos, especialista em pokémon de fogo, é também uma agente secreta da Equipe Flare?",
    "resposta": "Malva",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Malva",
      "https://bulbapedia.bulbagarden.net/wiki/Team_Flare"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Malva",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Flare",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Equipe Flare",
      "descricao": "Organização vilã de Pokémon X e Y, da região de Kalos, de uniformes vermelhos, liderada por Lysandre."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em X e Y, a Equipe Flare sonha com um mundo bonito e quer disparar a arma suprema. O que o grupo pretende fazer com ela?",
    "resposta": "Eliminar quem não é da equipe",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Flare"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Flare",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Ginásio de Striaton",
      "descricao": "Primeiro ginásio de Pokémon Black e White, comandado pelos irmãos Cilan, Chili e Cress, especialistas em Planta, Fogo e Água."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No primeiro ginásio de Black e White, em Striaton, o jogador enfrenta só um de três irmãos. O que decide qual deles será o adversário?",
    "resposta": "O inicial escolhido pelo jogador",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Striaton_Gym"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Striaton_Gym",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Torre Prisma",
      "descricao": "Torre no centro da cidade de Lumiose, em Pokémon X e Y, que abriga o ginásio de tipo Elétrico de Clemont."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em X e Y, o edifício que domina o centro de Lumiose e abriga o ginásio elétrico de Clemont foi inspirado em qual monumento real?",
    "resposta": "Torre Eiffel",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Prism_Tower"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Prism_Tower",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Unova",
      "descricao": "Região fictícia dos jogos Pokémon Black e White, da quinta geração."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual foi a primeira região dos jogos principais de Pokémon inspirada num lugar fora do Japão?",
    "resposta": "Unova",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Unova",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Unova",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version and Pokémon White Version are 2010 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. They are the first installments in the fifth generation of the Pokémon video game series. First released in Japan on 18 September 2010, they were later released in Europe, North America and Australia in March 2011. Sequels \n[…]\nIn addition to a diversity of new landscapes, the Unova region is also home to a diversity of people who vary in skin tone, language, and occupation. The region's Japanese name \"Isshu\" (イッシュ) is derived from the Japanese words tashu (多種, meaning \"many kinds\") and isshu (一種, meaning \"one kind\"); the many kinds of people and Pokémon seen up close look like only one kind of life from afar.\n[…]\nThe player also gains access to the eastern portion of Unova, which contains Pokémon from the previous games in the series, as well as access to an area unique to each game version: the ultra-metropolitan Black City, home to powerful Pokémon Trainers; and the White Forest, home to humans and Pokémon living in harmony. Cynthia, the former Sinnoh League Champion, is also found in this area of the game and can be challenged.\n[…]\nThe foreign promotion for the games began on 22 November 2010, when the official website for the North American, European, and Australian markets was updated, which included the localized names of the starter Pokémon (Snivy, Tepig, and Oshawott) in English, Dutch, Italian, Portuguese, and Spanish markets and the games' setting in the Unova region.\n[…]\nSequels to Black and White, Pokémon Black 2 and Pokémon White 2, were released for the Nintendo DS in 2012.\n[…]\nThe second part of the Pokémon Scarlet and Violet DLC The Hidden Treasure of Area Zero takes place in the Blueberry Academy, a terrarium off the coast of Unova."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Black_e_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version e White Version (ポケットモンスターブラック・ホワイト, Poketto Monsutā Burakku・Howaito; Monstros de Bolso Black・White, Black e White significam Preto e Branco quando traduzidos do inglês para o português, Preto e Branco em japonês seria 黒・白, Kuro・Shiro) são jogos eletrônicos de RPG lançados em 2010, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo lançados para o \n[…]\nAssim como nas edições anteriores da série, os jogos acompanham a jornada de um jovem treinador Pokémon pela região de Unova. O jogador captura e treina Pokémon para enfrentar outros treinadores, ao mesmo tempo em que tenta impedir os planos da organização criminosa conhecida como Equipe Plasma.\n[…]\nComo os jogos Pokémon anteriores, Black e White seguem um enredo linear; os eventos principais ocorrem em uma ordem fixa. O protagonista de Pokémon Black e White é um adolescente que parte em uma jornada por Unova para se tornar o mestre Pokémon. No início dos jogos, o jogador escolhe Snivy, Tepig ou Oshawott como seu Pokémon inicial como um presente da Professora Juniper.\n[…]\nO jogador também ganha acesso à porção oriental de Unova, que contém Pokémon dos jogos anteriores da série, bem como acesso a uma área exclusiva para cada versão do jogo: a ultrametropolitana Black City, lar de poderosos treinadores Pokémon; e a White Florest, lar de humanos e Pokémon que vivem em harmonia. Cynthia, uma ex-Campeã da região de Sinnoh, também é encontrada nesta área do jogo e pode ser desafiada.\n[…]\nA promoção estrangeira dos jogos começou em 22 de novembro de 2010, quando o site oficial para os mercados norte-americano, europeu e australiano foi atualizado, que incluía os nomes localizados do Pokémon inicial (Snivy, Tepig e Oshawott) em mercados inglês, neerlandês, italiano, português brasileiro e espanhol e o cenário dos jogos na região de Unova.\n[…]\nPokemon Black and White",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Cheren e Bianca",
      "descricao": "Amigos de infância e rivais do protagonista em Pokémon Black e White, da região de Unova."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os nomes de Cheren e Bianca, amigos de infância do protagonista de Unova, vêm do búlgaro e do italiano. O que eles significam?",
    "resposta": "Preto e branco",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Cheren",
      "https://bulbapedia.bulbagarden.net/wiki/Bianca"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cheren",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bianca",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Pokémon-Amie",
      "descricao": "Recurso de Pokémon X e Y em que o jogador acaricia, alimenta e brinca com seus pokémon para aumentar a afeição deles."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O Pokémon-Amie, de X e Y, em que o jogador acaricia e alimenta seus pokémon, leva no nome uma palavra francesa. O que ela significa?",
    "resposta": "Amiga",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon-Amie"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon-Amie",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.66 — 2026-10-13**
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
