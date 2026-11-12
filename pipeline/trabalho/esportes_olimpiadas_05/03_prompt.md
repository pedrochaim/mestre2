Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Olimpíadas** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Michael Phelps",
      "descricao": "Nadador americano, maior medalhista da história dos Jogos Olímpicos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nascido e criado numa grande cidade portuária de Maryland, Michael Phelps ganhou um apelido que junta o nome dela a um projétil. Qual?",
    "resposta": "Bala de Baltimore",
    "fonte": [
      "https://en.wikipedia.org/wiki/Michael_Phelps"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michael_Phelps",
        "situacao": "ok",
        "texto": "Michael Fred Phelps II (born June 30, 1985) is an American former competitive swimmer. He won more Olympic medals than any other athlete, a total of 28 medals across four Olympic Games. Phelps also holds the all-time records for Olympic gold medals (23), Olympic gold medals in individual events (13), and Olympic medals in individual events (16).\n[…]\nPhelps was born in Baltimore, Maryland, and raised in the Rodgers Forge neighborhood of nearby Towson. Phelps is the youngest of three children. His mother, Deborah Sue \"Debbie\" Phelps (née Davisson), is a middle school principal. His father, Michael Fred Phelps, was a retired Maryland State Trooper who played football in high school and college and tried out for the Washington Redskins in the 1970s. His parents divorced in 1994 when he was nine years old, and his father remarried in 2000.\n[…]\nPhelps has also cited Michael Jordan as a sporting idol of his, and stated that \"he changed the sport of basketball\". Phelps is also a fan of the Baltimore Ravens and stated that he found his life purpose and desire to compete in the 2016 Summer Olympics after seeking Ray Lewis's advice.\n[…]\nPhelps was a USA Olympic team member in 2000, 2004, 2008, 2012 and 2016, and holds the records for most Olympic gold medals (23), most such medals in individual events (13), and most such medals at a single games (8, in Beijing 2008). A street in his hometown of Baltimore was renamed The Michael Phelps Way in 2004. On April 9, 2009, Phelps was invited to appear before the Maryland House of Delegates and the Maryland Senate, to be honored for his Olympic accomplishments.\n[…]\nMichael Phelps at InterSportStats\n[…]\nMichael Phelps at USA Swimming (archived June 2, 2021)\n[…]\nMichael Phelps at Team USA (archive June 25, 2023)\n[…]\nOfficial website of the Michael Phelps Foundation at the Wayback Machine (archived March 10, 2010)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Michael_Phelps",
        "situacao": "ok",
        "texto": "Michael Fred Phelps II (Baltimore, 30 de junho de 1985) é um ex-nadador estadunidense, conquistou trinta e sete recordes mundiais e conquistou o maior número de medalhas de ouro (oito) olímpicas em uma única edição, feito este realizado nos Jogos de Pequim, na China, em agosto de 2008. Diante dos seus resultados, Michael superou as sete medalhas de ouro do compatriota Mark Spitz conquistadas nos J\n[…]\nPhelps nasceu e foi criado em Baltimore no estado de Maryland nos Estados Unidos da América, estudou na escola Rodgers Forge e se formou na Towson High School, em 2003. Seu pai, Fred Phelps,trabalha na Polícia do estado de Maryland e sua mãe, Debbie Davisson Phelps, é diretora de uma escola. Seus pais se divorciaram em 1994. Phelps tem duas irmãs mais velhas, Whitney e Hilary. As duas também são nadadoras.\n[…]\nEm Novembro de 2004, quando tinha 19 anos, Phelps foi preso por dirigir alcoolizado em Salisbury, Maryland. Phelps ganhou liberdade condicional até o julgamento, que foi considerado culpado com pena de 18 meses de serviços prestados à associação Mothers Against Drunk Driving (\"Mães contra Alcoolizados no Volante\"), e a pagar 250 dólares por mês, durante os 18 meses.\n[…]\nMichael Phelps se casou em segredo com Nicole Johnson, a 13 de junho de 2016 em Paradise Valley, no Arizona, EUA.\n[…]\nA posição dominante de Phelps trouxe comparações ao grande nadador Mark Spitz, que ganhou o recorde de sete medalhas de ouro nas Olimpíadas de 1972. Phelps teve a chance de quebrar o recorde de sete Spitz, competindo em oito provas: 200 m livre, 100 m borboleta, os 200 m borboleta, 200 m medley, 400 m medley, 4x100 m livre, 4x200 m livre, e no 4x100 m medley.\n[…]\nPhelps possui também recordes individuais em Campeonatos Mundiais/Olimpíadas:\n[…]\n2009 Michael Phelps sem limites - Livro que conta a história de superação do nadador[ligação inativa] ISBN 9788578600389 (em português)\n[…]\nMichael Phelps no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Michael Phelps",
      "descricao": "Nadador americano, maior medalhista da história dos Jogos Olímpicos."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Michael Phelps estreou em Jogos Olímpicos com apenas quinze anos e voltou para casa sem medalha. Em que edição foi isso?",
    "resposta": "Sydney 2000",
    "distratores": [
      "Atlanta 1996",
      "Atenas 2004",
      "Barcelona 1992"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Michael_Phelps"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michael_Phelps",
        "situacao": "ok",
        "texto": "Michael Fred Phelps II (born June 30, 1985) is an American former competitive swimmer. He won more Olympic medals than any other athlete, a total of 28 medals across four Olympic Games. Phelps also holds the all-time records for Olympic gold medals (23), Olympic gold medals in individual events (13), and Olympic medals in individual events (16).\n[…]\nPhelps was born in Baltimore, Maryland, and raised in the Rodgers Forge neighborhood of nearby Towson. Phelps is the youngest of three children. His mother, Deborah Sue \"Debbie\" Phelps (née Davisson), is a middle school principal. His father, Michael Fred Phelps, was a retired Maryland State Trooper who played football in high school and college and tried out for the Washington Redskins in the 1970s. His parents divorced in 1994 when he was nine years old, and his father remarried in 2000.\n[…]\nIn his second event on August 9, the 200-meter butterfly, he became the first swimmer in history to make five finals in the same event, after finishing 5th in 2000, 1st in 2004 and 2008, and 2nd in 2012. (Federica Pellegrini would be the second swimmer to do so at the 2020 Olympics.) At Rio, he won the title that he had lost to Chad le Clos four years earlier in London, edging Masato Sakai by 0.04 s. Phelps stated that winning back this title had been the main goal during his comeback.\n[…]\nPhelps was a USA Olympic team member in 2000, 2004, 2008, 2012 and 2016, and holds the records for most Olympic gold medals (23), most such medals in individual events (13), and most such medals at a single games (8, in Beijing 2008). A street in his hometown of Baltimore was renamed The Michael Phelps Way in 2004. On April 9, 2009, Phelps was invited to appear before the Maryland House of Delegates and the Maryland Senate, to be honored for his Olympic accomplishments.\n[…]\nMichael Phelps at InterSportStats"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Michael_Phelps",
        "situacao": "ok",
        "texto": "Michael Fred Phelps II (Baltimore, 30 de junho de 1985) é um ex-nadador estadunidense, conquistou trinta e sete recordes mundiais e conquistou o maior número de medalhas de ouro (oito) olímpicas em uma única edição, feito este realizado nos Jogos de Pequim, na China, em agosto de 2008. Diante dos seus resultados, Michael superou as sete medalhas de ouro do compatriota Mark Spitz conquistadas nos J\n[…]\nEm sua juventude, foi diagnosticada que Michael Phelps tinha Transtorno do défice de atenção com hiperatividade (TDAH). Ele começou a nadar aos sete anos de idade, partindo da influência das suas irmãs nadadoras. Ele se destacou como um excelente nadador, e quando tinha 10 anos de idade, ele quebrou o recorde nacional de natação para a idade dele. Enquanto crescia, Phelps ia quebrando recordes para sua idade e, aos 15 anos se classificou para as Olimpíadas de 2000, em Sydney.\n[…]\nEstreou-se aos 15 anos em Jogos Olímpicos, nas Olimpíadas de Sydney no ano 2000, tendo obtido o quinto lugar na final dos 200m borboleta. Cinco meses após os jogos, aos 15 anos e 9 meses de idade, bate o recorde desta mesma prova, tornando-se o mais novo nadador de todos os tempos a bater um recorde mundial de natação.\n[…]\nPhelps estabeleceu um novo recorde olímpico, nas competições eliminatórias dos 400m medley. Ele conseguiu a medalha de ouro na final da mesma prova nos jogos olímpicos, só que quebrou seu recorde das eliminatórias por quase dois segundos. Nesta edição dos jogos ele obteve sua única medalha de ouro individual em nado livre (200m) da carreira.\n[…]\nAo final de Pequim 2008, Phelps bateu o recorde de maior número de medalhas de ouro em uma só edição das Olimpíadas, conseguindo oito medalhas de ouro (em todas as finais que participou), assim superando o recorde de sete medalhas de ouro conquistadas por Mark Spitz na edição de Munique 1972.\n[…]\nJogos Olímpicos\n[…]\nMichael Phelps no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Jesse Owens",
      "descricao": "Velocista americano, campeão de quatro provas nos Jogos de Berlim 1936."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em Berlim 1936, Jesse Owens correu com sapatilhas de um sapateiro alemão que, anos depois, fundou uma famosa marca esportiva. Que marca?",
    "resposta": "Adidas",
    "distratores": [
      "Nike",
      "Reebok",
      "Asics"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Adolf_Dassler",
      "https://en.wikipedia.org/wiki/Jesse_Owens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Adolf_Dassler",
        "situacao": "ok",
        "texto": "Adolf \"Adi\" Dassler (3 November 1900 – 6 September 1978) was a German cobbler, inventor, and businessman who founded the sportswear company Adidas.\n[…]\nLike the Dasslers, Sepp Herberger joined the Nazi Party in 1933. In 1936, after Germany's humiliating quarter-final defeat by Norway at the Berlin Games, the Nazi sports authorities appointed him to coach the national football team. Herberger began an association with the Dassler firm, having been cultivated by Rudolf Dassler. After the breakup, Herberger sided with the Puma firm, until Rudolf once again felt his authority challenged and insulted him. Herberger switched his allegiance to Adidas.\n[…]\nWest Germany, established in May 1949, was not eligible for the 1950 World Cup, the first after the war, and so all preparations were made with a view toward the 1954 matches in Switzerland. By that time Adidas's football boots were considerably lighter than the ones made before the war, based on English designs.\n[…]\nAdidas's fame rose both in West Germany, where the win was considered a key post-war event in restoring German self-esteem and abroad, where in the first televised World Cup final viewers were introduced to \"the ultimate breakthrough\".\n[…]\nAfter Adi's death, his son and wife took over the management of Adidas. Horst died on 9 April 1987.\n[…]\nAdidas was transformed into a private limited company in 1989, but remained family property until its IPO in 1995. The last of the family members who worked for Adidas was Frank Dassler (the grandson of Rudolf), head of the legal department since 2004, who resigned in January 2018."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jesse_Owens",
        "situacao": "ok",
        "texto": "James Cleveland \"Jesse\" Owens (September 12, 1913 – March 31, 1980) was an American track and field athlete. He made history at the 1936 Olympic Games by winning four gold medals, setting individual Olympic records in each event, plus another as a member of the 400-meter relay. He is widely regarded as one of the greatest athletes in track and field history.\n[…]\nIn 1936, Owens and his US teammates sailed on the SS Manhattan to the Games. Just before the competitions, Adidas athletic shoe company founder Adi Dassler visited Owens in the Olympic village and persuaded him to wear Gebrüder Dassler Schuhfabrik shoes; this was the first sponsorship for a male African American athlete.\n[…]\n\"Giants like Jesse Owens show us why politics will never defeat the Olympic spirit. His character, his achievements have continued to inspire Americans as they did the whole world in 1936.\"—Gerald Ford\n[…]\nOwens was honored by naming schools, streets, and athletic facilities after him—including Jesse Owens Memorial Stadium—and his life inspired documentaries, books, and the biopic Race. Notably, the documentary Olympic Pride, American Prejudice highlights his story as part of a broader examination of the 18 Black American athletes who competed in the 1936 Berlin Olympics. He is a member of several halls of fame, including the U.S. Olympic and National Track and Field Hall of Fame.\n[…]\nJesse Owens Museum\n[…]\nFootage of Jesse Owens winning 100m Olympic gold in 1936\n[…]\nJesse Owens at IMDb\n[…]\nJesse Owens video newsreel\n[…]\nJesse Owens video in Riefenstahl's Olympia (1936) Archived February 27, 2021, at the Wayback Machine\n[…]\nJesse Owens at the United States Olympic Team at the Wayback Machine (archived July 5, 2006)\n[…]\nJesse Owens article at the Wayback Machine (archived October 6, 2013), Encyclopedia of Alabama\n[…]\nJesse Owens at the USATF Hall of Fame (archived)\n[…]\nJesse Owens at the Team USA Hall of Fame"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Adolf_Dassler",
        "situacao": "ok",
        "texto": "Adolf \"Adi\" Dassler (3 de novembro de 1900 – 6 de setembro de 1978) foi um sapateiro, inventor e empresário alemão que fundou a empresa de artigos esportivos Adidas.\n[…]\nDassler foi um inovador no design de calçados esportivos e um dos primeiros promotores que obtiveram endossos de atletas para impulsionar as vendas de seus produtos. A partir de seus conceitos, ele criou a Adidas, que tinha 17 fábricas e vendas anuais de um bilhão de marcos alemães na época de sua morte.\n[…]\nEnquanto isso, Adi estava preocupado em projetar uma aparência distinta para seus sapatos, pelo menos parcialmente para que fosse possível mostrar quais atletas usavam seu calçado. Ele teve a ideia de colorir as tiras usadas para reforço nas laterais dos sapatos com uma cor diferente dos próprios sapatos. Ele experimentou com diferentes números de tiras e finalmente decidiu por três. As \"três listras\" tornaram-se uma marca distintiva dos sapatos Adidas.\n[…]\nA fama da Adidas cresceu tanto na Alemanha Ocidental, onde a vitória foi considerada um evento chave do pós-guerra na restauração da autoestima alemã quanto no exterior, onde na primeira final da Copa do Mundo televisionada os espectadores foram apresentados ao \"avanço definitivo.\"\n[…]\nApós a morte de Adi, seu filho e esposa assumiram a gestão da Adidas. Horst morreu em 9 de abril de 1987.\n[…]\nA Adidas foi transformada em uma sociedade de responsabilidade limitada privada em 1989, mas permaneceu propriedade da família até seu IPO em 1995. O último dos membros da família que trabalhou para a Adidas foi Frank Dassler (neto de Rudolf), chefe do departamento jurídico desde 2004, que renunciou em janeiro de 2018.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Pierre de Coubertin",
      "descricao": "Pedagogo francês, fundador do Comitê Olímpico Internacional e idealizador dos Jogos Olímpicos modernos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Pierre de Coubertin defendia o esporte nas escolas porque atribuía a derrota da França em uma guerra ao mau preparo físico dos jovens. Que guerra?",
    "resposta": "Guerra Franco-Prussiana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pierre_de_Coubertin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pierre_de_Coubertin",
        "situacao": "ok",
        "texto": "Charles Pierre de Frédy, Baron de Coubertin (French: [ʃaʁl pjɛʁ də fʁedi baʁɔ̃ də kubɛʁtɛ̃]; born Pierre de Frédy; 1 January 1863 – 2 September 1937), also known as Pierre de Coubertin and Baron de Coubertin, was a French educator and historian, co-founder of the International Olympic Committee (IOC), and its second president. He is known as the father of the modern Olympic Games. He was particula\n[…]\nCoubertin grew up in a time of profound change in France – defeat in the Franco-Prussian War, the Paris Commune, and the establishment of the Third Republic – but while these events were the setting of his childhood, his school experiences were just as formative. In October 1874, his parents enrolled him in a new Jesuit school called Externat de la rue de Vienne, which was still under construction during his first five years there.\n[…]\nWhile Coubertin was certainly a romantic, and while his idealized vision of ancient Greece would lead him later to the idea of reviving the Olympic Games, his advocacy for physical education was also based on practical concerns. He believed that men who received physical education would be better prepared to fight in wars, and better able to win conflicts like the Franco-Prussian War, in which France had been humiliated.\n[…]\nThe Greek authorities were also frustrated that he could not provide an exact estimate of the number of attendees more than a year in advance. In France, Coubertin's efforts to elicit interest in the Games among athletes and the press met difficulty, largely because the participation of German athletes angered French nationalists who begrudged Germany their victory in the Franco-Prussian War.\n[…]\nIn 1911, Pierre de Coubertin founded the interreligious scouting organization aka Éclaireurs Français (EF) in France, which later merged to form the Éclaireuses et Éclaireurs de France.\n[…]\nPierre de Coubertin at the World Rugby Hall of Fame"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pierre_de_Coubertin",
        "situacao": "ok",
        "texto": "Charles Pierre Fredy de Coubertin (Paris, 1 de janeiro de 1863 — Genebra, 2 de setembro de 1937), mais conhecido pelo seu título nobiliárquico de Barão de Coubertin, foi um pedagogo e historiador francês, que ficou para a história como o fundador dos Jogos Olímpicos da era moderna.\n[…]\nO assunto pelo qual ele parece ter se interessado mais profundamente foi a educação, e seu estudo se concentrou em particular na educação física e no papel do esporte na escolarização. Em 1883, aos vinte anos, visitou a Inglaterra pela primeira vez e estudou o programa de educação física instituído por Thomas Arnold na Rugby School. Coubertin creditou a esses métodos a expansão do poder britânico durante o século XIX e defendeu seu uso em instituições francesas.\n[…]\nEle viu nesses ginásios o que chamou de uma tríplice unidade entre velhos e jovens, entre disciplinas e entre diferentes tipos de pessoas, ou seja, entre aqueles cujo trabalho era teórico e aqueles cujo trabalho era prático. Coubertin defendia que esses conceitos, essa tríplice unidade, fossem incorporados às escolas.\n[…]\nEmbora Coubertin fosse certamente um romântico, e embora sua visão idealizada da Grécia antiga o levasse mais tarde à ideia de reviver os Jogos Olímpicos, sua defesa da educação física também se baseava em preocupações práticas. Ele acreditava que os homens que recebiam educação física estariam mais bem preparados para lutar em guerras e mais capazes de vencer conflitos como a Guerra Franco-Prussiana, na qual a França havia sido humilhada.\n[…]\nCoubertin, Pierre de (1900–1906). La Chronique de France (7 vols.). Auxerre and Paris: Lanier. pp. 7 v\n[…]\n«Sítio do The International Pierre De Coubertin Committee (CIPC)» (em inglês, espanhol, e francês)\n[…]\nseleção de escritos do barão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Jogos Olímpicos da Antiguidade",
      "descricao": "Festival esportivo e religioso realizado no santuário de Olímpia, na Grécia Antiga."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nos Jogos de Olímpia da Antiguidade, que grupo de pessoas era proibido, sob ameaça de morte, de assistir às competições?",
    "resposta": "Mulheres casadas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ancient_Olympic_Games"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ancient_Olympic_Games",
        "situacao": "ok",
        "texto": "The ancient Olympic Games (Ancient Greek: τὰ Ὀλύμπια, ta Olympia), or the ancient Olympics, were a series of athletic competitions among representatives of city-states and one of the Panhellenic Games of ancient Greece. They were held at the Panhellenic religious sanctuary of Olympia, in honor of Zeus, and the Greeks gave them a mythological origin. The originating Olympic Games are traditionally \n[…]\nA body of officials, known as Hellanodikai, was responsible for determining the city-state of origin and the Greek identity of the competitors.\n[…]\nIt consisted of two horses that were harnessed under a yoke in the middle, and two outer horses that were attached with a rope. The two-horse chariot was introduced in 408 BC. The horse with rider competition, on the other hand, was introduced in 648 BC. In this race, Greeks did not use saddles or stirrups (the latter was unknown in Europe until about the 6th century AD), so they required good grip and balance.\n[…]\nDue to the winner being the benefactor, it was also possible for a particularly wealthy person to improve their odds by bringing multiple teams to the races; according to Plutarch, the record belongs to Alcibiades, who brought seven chariots to a single competition, winning the first, second, and either the third or fourth place at once.\n[…]\nIn 67, the Roman Emperor Nero competed in the chariot race at Olympia. He was thrown from his chariot and was thus unable to finish the race. Nevertheless, he was declared the winner on the basis that he would have won if he had finished the race.\n[…]\nOrsippus (diaulos, first to compete naked)\n[…]\nDioxippus (pankratiast, crowned champion by default in 336 BC when no other pankratiast dared compete. Such a victory was called akoniti (lit. without getting dusted) and remains the only one ever recorded in the Olympics in this discipline.)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_da_Antiguidade",
        "situacao": "ok",
        "texto": "Os Jogos Olímpicos da Antiguidade eram um festival religioso e atlético da Grécia Antiga, que se realizava de quatro em quatro anos no santuário de Olímpia, em honra de Zeus. A data tradicional atribuída à primeira edição dos Jogos Olímpicos é 776 a.C..\n[…]\nO período áureo dos Jogos Olímpicos antigos correspondeu ao século V a.C.. As perturbações que a Guerra do Peloponeso gerou na Grécia teriam inevitavelmente consequência sobre os jogos: Élide, que até então tinha mantido uma atitude politicamente neutra, aliou-se a Atenas durante este conflito e baniu os Espartanos do evento. Em 424 a.C., sob a ameaça de invasão de Esparta, os jogos tiveram que ser realizados sob proteção de tropas.\n[…]\nNão poderiam participar nos jogos os estrangeiros (os \"bárbaros\" segundo a mitologia grega), os escravos e as mulheres - sugere-se que somente a sacerdotisa de Deméter poderia estar presente no altar em homenagem à deusa. As mulheres que violassem a regra seriam atiradas do alto do Monte Tipéon. Havia uma competição exclusivamente feminina, a Heraea, nome dado em homenagem à Hera, mulher de Zeus.\n[…]\nConta-se o caso de uma mulher, Calipatira, que, em 404 a.C., vestida com roupas masculinas, disfarçou-se de treinador para entrar no ginásio e ver seu filho, Psídoro de Túrio, lutar. O filho venceu a prova e a mãe, comemorando a vitória, deixou cair seu disfarce, revelando ser mulher. Ela foi absolvida por vir de uma família de campeões olímpicos, mas a partir desse acontecimento, os treinadores também passaram a se apresentar nus nas competições.\n[…]\nHouve mulheres consideradas campeãs, porém, nas provas de cavalos, onde era declarado vencedor o dono do cavalo, não os condutores.\n[…]\nJogos Ístmicos\n[…]\nJogos Nemeus\n[…]\n«A verdadeira história dos Jogos Olímpicos» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Adhemar Ferreira da Silva",
      "descricao": "Atleta brasileiro, bicampeão olímpico do salto triplo em 1952 e 1956."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que grande clube de futebol paulista, pelo qual Adhemar Ferreira da Silva competia, traz no escudo duas estrelas vermelhas em homenagem aos recordes mundiais dele?",
    "resposta": "São Paulo Futebol Clube",
    "fonte": [
      "https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo_Futebol_Clube",
      "https://pt.wikipedia.org/wiki/Adhemar_Ferreira_da_Silva"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo_Futebol_Clube",
        "situacao": "ok",
        "texto": "São Paulo Futebol Clube, ou simplesmente São Paulo, é um clube poliesportivo brasileiro da cidade de São Paulo, capital do estado homônimo. Foi fundado em 25 de janeiro de 1930, tendo interrompido suas atividades em maio de 1935, e as retomado em dezembro do mesmo ano.\n[…]\nO Tricolor Paulista manteve ao longo de sua história, o mesmo nome, as mesmas cores, o mesmo estilo de escudo, o mesmo uniforme e a mesma bandeira. Os fundadores do São Paulo Futebol Clube queriam nome, cores e formas que representassem suas vontades como esportistas. Para isso, foi retirado o vermelho do Club Athletico Paulistano, o preto da Associação Atlética das Palmeiras e o branco de ambos, simbolizando a união dos times em um outro, maior. Assim nasciam as três cores do clube.\n[…]\nSão Paulo Social\n[…]\nApesar de ter sido criado como clube de futebol, o São Paulo possui diversos outros esportes tais como atletismo, basquete, boxe, ginástica, handebol, tênis e vôlei, mas nenhum deles alcança a projeção do futebol por, entre outros motivos, serem amadores e provenientes do complexo social do clube. Assim, esporadicamente, tomam proporções maiores ao alçar esportistas do calibre de Adhemar Ferreira da Silva e Éder Jofre sem ter, porém, a mesma força e investimento do futebol.\n[…]\nA equipe de futebol feminino do São Paulo Futebol Clube voltou a disputar competições oficiais em 2017, após um período de inatividade, e atualmente possui elenco profissional que disputa em 2026 a Série A do Campeonato Brasileiro e o Campeonato Paulista, além de elencos nas categorias de base. A equipe venceu a Supercopa do Brasil de Futebol Feminino de 2025, vencendo o Corinthians nos pênaltis.\n[…]\nSão Paulo Futebol Clube no Instagram\n[…]\nCanal de São Paulo Futebol Clube no YouTube\n[…]\nSão Paulo Futebol Clube no TikTok"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Adhemar_Ferreira_da_Silva",
        "situacao": "ok",
        "texto": "Adhemar Ferreira da Silva (São Paulo, 29 de setembro de 1927 – São Paulo, 12 de janeiro de 2001) foi um atleta brasileiro, primeiro bicampeão olímpico do país, primeiro atleta sul-americano bicampeão olímpico em eventos individuais, recordista mundial do salto triplo cinco vezes e primeiro atleta a quebrar a barreira dos 16m no salto triplo.\n[…]\nAdhemar começou a competir em 1947. Nesse ano, conversando com José Márcio Cato, da equipe de atletismo do São Paulo, ele gostou da sonoridade da palavra atleta e resolveu começar a praticar o esporte defendendo a camisa do São Paulo Futebol Clube.\n[…]\nAos dezoito anos, após receber algumas instruções básicas, saltou 12,9m, impressionando o técnico do São Paulo, Dietrich Gerner. Sua primeira competição foi no Troféu Brasil em 1947, obtendo a marca de 13,05 metros. Em dezembro de 1950, saltou 16m e igualou o recorde mundial do japonês Naoto Tajima, em vigor desde 1936. Em 30 de setembro de 1951, marcou 16,01 m no Rio de Janeiro, tornando-se recordista absoluto e primeiro atleta na modalidade a passar dos 16 m.\n[…]\nNo ano de 1955, o esportista chegou ao Vasco para brilhar no atletismo do clube. Depois de sagrar-se campeão olímpico em 1952, bicampeão panamericano e recordista mundial de salto triplo. Além de treinar na pista de atletismo que circundava o campo, Adhemar também estudava na Escola de Educação Física do Exército e trabalhava no jornal Última Hora.\n[…]\nNo escudo do São Paulo Futebol Clube as duas estrelas douradas que estão na parte de cima foram adotadas em sua homenagem. Elas se referem aos recordes mundiais batidos por ele em Helsinque 1952 e nos Jogos Pan americanos da Cidade do México em 1955, quando conseguiu a melhor marca de sua vida, 16,56m, quebrando pela quinta vez o recorde mundial.\n[…]\n«Adhemar Ferreira da Silva». na Confederação Brasileira de Atletismo"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Nadia Comăneci",
      "descricao": "Ginasta romena que recebeu a primeira nota dez da ginástica olímpica, em Montreal 1976."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Depois de deixar a Romênia, Nadia Comaneci se casou com um ginasta americano, campeão olímpico em Los Angeles 1984. Quem é ele?",
    "resposta": "Bart Conner",
    "distratores": [
      "Mitch Gaylord",
      "Peter Vidmar",
      "Kurt Thomas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bart_Conner",
      "https://en.wikipedia.org/wiki/Nadia_Com%C4%83neci"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bart_Conner",
        "situacao": "ok",
        "texto": "Barthold Wayne Conner (born March 28, 1958) is an American retired Olympic gymnast. He was a member of the United States men's national artistic gymnastics team and won two gold medals at the 1984 Summer Olympics. He owns and operates the Bart Conner Gymnastics Academy in Norman, Oklahoma, along with his wife, Romanian Olympic gold medalist Nadia Comăneci. In addition, Conner is a long-time gymnas\n[…]\nOn November 27, 1989, Nadia Comăneci, the famous Romanian gymnast Conner had met at the 1976 Montreal games, defected from Romania with a group of other Romanians. In January 1990, when Conner read in the newspaper that she was scheduled to be interviewed on The Pat Sajak Show, he contacted the producer and arranged to make a guest appearance on the show.\n[…]\nTheir wedding reception was held in the former presidential palace. Conner and Comăneci have one child, a son named Dylan Paul Conner who was born on June 3, 2006, in Oklahoma City, Oklahoma.\n[…]\nConner had one named element on the parallel bars, originally named in 1993, but removed from the code of points in 2000.\n[…]\nHe appeared as Bart Taylor in the 1986 film Rad and in 1984 as Richie Halberstrom in Season 1 Episode 7 (“One Fresh Batch of Lemonade: Part 2”) on the TV show “Highway to Heaven.”\n[…]\nConner, Bart with Paul Ziert. Winning the Gold. Warner Books, 1985.\n[…]\nComăneci, Nadia (2004). Letters to a Young Gymnast. Art of Mentoring. Basic Books. ISBN 0-465-01276-0.\n[…]\nBart Conner at World Gymnastics\n[…]\nBart Conner at the USA Gymnastics Hall of Fame\n[…]\nBart Conner at the International Gymnastics Hall of Fame\n[…]\nBart Conner at Olympics.com\n[…]\nBart Conner at the Team USA Hall of Fame\n[…]\nBart Conner at Olympedia\n[…]\nBart Conner at InterSportStats\n[…]\nBart Conner at the Team USA Hall of Fame (archive June 2, 2023)\n[…]\nBart Conner at USA Gymnastics\n[…]\nBart Conner at IMDb\n[…]\nBart Conner and Nadia Comaneci official website"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nadia_Com%C4%83neci",
        "situacao": "ok",
        "texto": "Nadia Elena Comăneci Conner (née Comăneci; born November 12, 1961) is a Romanian retired gymnast. She is a five-time Olympic gold medalist, all in individual events. In 1976, at age 14, Comăneci was the first gymnast to be awarded a perfect score of 10.0 at the Olympic Games. At the same Games (1976 Summer Olympics in Montreal), she earned six more perfect 10s for events en route to winning three \n[…]\nIn March 1976, Comăneci competed in the inaugural edition of the American Cup at Madison Square Garden in Manhattan. She received rare scores of 10, which signified a perfect routine without any deductions, for her vault in the preliminary stage and for her floor exercise routine in the final of the all-around competition, which she won. During this competition, Comăneci met American gymnast Bart Conner for the first time.\n[…]\nIn 1981, the Gymnastics Federation contacted Comăneci and informed her that she would be part of an official tour of the United States named \"Nadia '81\" and her coaches Béla and Márta Károlyi would lead the group. During this tour, Comăneci's team shared a bus trip with American gymnasts; it was the third time she had encountered Bart Conner. They had earlier met in 1976. She later remembered thinking, \"Conner was cute.\n[…]\nShe also offered daily analysis of the 2016 games (along with other Olympic champions such as Mark Spitz, Carl Lewis, and Conner), for the late-night show É Campeão, broadcast on Brazil's SporTV.\n[…]\nIn addition, both Comăneci and Conner are involved with the Special Olympics.\n[…]\nVoices of Oklahoma interview with Bart Conner – First person interview conducted on February 28, 2013, with Bart Conner, husband of Nadia Comăneci.\n[…]\nNadia Comaneci & Bart Conner Commentate on Their Perfect Olympic Routines | Take the Mic – The Olympic Channel, 2016\n[…]\nNadia Comaneci and Bart Conner, 11 Olympic Medals in this Olympic Family – The Olympic Channel, 2016"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bart_Conner",
        "situacao": "ok",
        "texto": "Bart Conner (Chicago, 28 de março de 1958) é um ex-ginasta estadunidense, que competiu em provas de ginástica artística pelos Estados Unidos.\n[…]\nBart foi membro da equipe vitoriosa nos Jogos de Los Angeles, no qual também conquistou uma medalha individual, nas barras paralelas. Nesse mesmo aparelho, o ginasta fora campeão mundial no Campeonato de Ft. Worth. Conner é o único ginasta estadunidense a conquistar uma medalha de ouro em todos os tipos de campeonatos de que participou, incluindo os nacionais, internacionais e universitários. Bart, ao lado da esposa, Nadia Comaneci, abriu o Bart Conner Gymnastics Academy em Oklahoma.\n[…]\nNesse mesmo campeonato, performou o movimento Conner Spin, de realização nas paralelas. Classificado a participar dos Jogos de Moscou, o ginasta não compareceu às disputas, devido ao boicote estadunidense aos soviéticos. Apesar de estar contra, pois tratava-se de um problema político, Bart não pôde ir à Rússia. Entre 1980 e 1983, Conner conquistou 21 medalhas, entre competições nacionais e internacionais.\n[…]\nAposentado da modalidade, o ginasta casou-se com a campeã olímpica Nadia Comaneci, com quem abriu o Bart Conner Gymnastics Academy e a Perfect 10 Production Company, que vende produtos esportivos, além de também, a seu lado, colaborar para as edições da revista especializada International Gymnast. Em 1997, foi inserido no International Gymnastics Hall of Fame. Além de receber outras honrarias, no Comitê Olímpico Estadunidense, no USA Gymnastics e no Oklahoma Sports.[carece de fontes]?\n[…]\nEm 2006, o casal teve o primeiro filho, Dylan Paul Conner.\n[…]\nBart Conner na Federação Internacional de Ginástica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Abebe Bikila",
      "descricao": "Maratonista etíope, campeão olímpico da maratona em Roma 1960 e Tóquio 1964."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na maratona de Roma 1960, Abebe Bikila venceu correndo descalço. Por que ele decidiu correr sem calçados?",
    "resposta": "Os tênis fornecidos não serviam bem",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abebe_Bikila"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abebe_Bikila",
        "situacao": "ok",
        "texto": "Shambel Abebe Bikila (Amharic: ሻምበል አበበ ቢቂላ; August 7, 1932 – October 25, 1973) was an Ethiopian marathon runner who was a back-to-back Olympic marathon champion. He was the first Ethiopian Olympic gold medalist, winning his first gold medal at the 1960 Summer Olympics in Rome while running barefoot. At the 1964 Tokyo Olympics, he won his second gold medal, making him the first athlete to successf\n[…]\nIn July 1960, Abebe won his first marathon in Addis Ababa. A month later he won again in Addis Ababa with a time of 2:21:23, which was faster than the existing Olympic record held by Emil Zátopek. Niskanen entered Abebe Bikila and Abebe Wakgira in the marathon at the 1960 Rome Olympics, which would be run on September 10. In Rome, Abebe purchased new running shoes, but they did not fit well and gave him blisters. He consequently decided to run barefoot instead.\n[…]\nAbebe received the Order of Menelik II, a Volkswagen Beetle and a house.\n[…]\nFive years after his death, the New York Road Runners inaugurated the annual Abebe Bikila Award for contributions by an individual to long-distance running. East African recipients include Mamo Wolde, Juma Ikangaa, Tegla Loroupe, Paul Tergat, and Haile Gebrselassie.\n[…]\nThe other two, also written in English, are Paul Rambali's 2007 fictional biographical novel Barefoot Runner and Tim Judah's 2009 Bikila: Ethiopia's Barefoot Olympian. According to the journalist Tim Lewis's comparative review of the two books, Judah's is a more journalistic, less-forgiving biography of Abebe. It refutes the mythical aspects of his life but recognises Abebe's athletic accomplishments.\n[…]\nAbebe Bikila at Olympics.comAbebe Bikila at Olympic.org (archived)\n[…]\nAbebe Bikila at Olympedia\n[…]\nVideo tribute to Abebe Bikila on YouTube\n[…]\nVideo footage of Abebe Bikila on YouTube at the 1960 Summer Olympics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abebe_Bikila",
        "situacao": "ok",
        "texto": "Abebe Bikila (Jato, 7 de agosto de 1932 – Adis Abeba, 25 de outubro de 1973) foi um maratonista etíope, filho de um pastor de ovelhas do interior da Etiópia e capitão da guarda real do imperador Hailé Selassié. Foi o primeiro homem a vencer duas maratonas olímpicas e é considerado por muitos especialistas como o maior maratonista de todos os tempos. Em 2012, foi imortalizado no Hall da Fama do atl\n[…]\nEm 1960, Bikila foi incluído na equipe de atletismo apenas no último momento, quando o avião já se preparava para partir para Roma, no lugar de outro atleta, Wami Biratu, que havia quebrado o tornozelo durante uma partida de futebol. Niskanen resolveu inscrever Bikila e Abebe Wakgira na disputa da maratona.\n[…]\nA Adidas, patrocinadora oficial dos Jogos Olímpicos de 1960, tinha apenas poucos pares disponíveis quando Bikila foi experimentar um deles para usar na corrida. Nenhum deles o deixava confortável e ele então resolveu correr descalço, a mesma maneira como sempre tinha treinado. Seu técnico, Niskanen, o havia advertido sobre os concorrentes mais fortes que iria encontrar, especificamente um corredor do Marrocos, Rhadi Ben Abdesselam, que deveria estar usando o número 26.\n[…]\nBikila foi para Tóquio sem previsão oficial de participar da maratona, seis semanas após ser operado de urgência do apêndice. Entretanto entrou na prova, desta vez calçado, por exigência dos organizadores, e adotou a mesma estratégia de 1960, mantendo-se junto o primeiro bloco de corredores até a metade da prova, quando começou a forçar o ritmo.\n[…]\nAbebe Bikila morreu aos 41 anos, em 25 de outubro de 1973, de hemorragia cerebral, complicação neurológica decorrente de seu acidente quatro anos antes. Uma multidão de 75 mil pessoas acompanhou o enterro de seu herói nacional e o imperador Selassie declarou um dia de luto oficial na Etiópia.\n[…]\nLista de campeões olímpicos da maratona",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Abebe Bikila",
      "descricao": "Maratonista etíope, campeão olímpico da maratona em Roma 1960 e Tóquio 1964."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A maratona de Roma 1960, vencida por Abebe Bikila, terminou à noite, iluminada por tochas, junto a um arco triunfal romano. Qual?",
    "resposta": "Arco de Constantino",
    "distratores": [
      "Arco de Tito",
      "Arco de Septímio Severo",
      "Arco de Jano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Athletics_at_the_1960_Summer_Olympics_%E2%80%93_Men%27s_marathon",
      "https://en.wikipedia.org/wiki/Abebe_Bikila"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Athletics_at_the_1960_Summer_Olympics_%E2%80%93_Men%27s_marathon",
        "situacao": "ok",
        "texto": "The men's marathon at the 1960 Summer Olympics in Rome, Italy, was held on Saturday September 10, 1960. There were 69 participants from 35 nations. The maximum number of athletes per nation had been set at 3 since the 1930 Olympic Congress. Abebe Bikila, who ran the race barefoot, finished in world record time and became the first sub-Saharan African to win an Olympic gold medal. All three of the \n[…]\nThe marathon distance of 26 miles, 385 yards was run over a point-to-point course; it was the first marathon to neither start nor end at the Olympic Stadium. The course started at the Piazza di Campidoglio. It was a triangular loop, running past many of the wonders of Ancient Roma. The course passed along the Caracalla Baths, ran down the Appian Way, and finished under the Arch of Constantine.\n[…]\nThese were the standing world and Olympic records prior to the 1960 Summer Olympics.\n[…]\nAbebe Bikila set a new world record at 2:15:16.2; this record is still the record for barefoot running.\n[…]\nThe 1960 marathon started so late that the course required torchlight for the runners to see. The last finisher arrived at nearly 9:15 p.m. local time."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Abebe_Bikila",
        "situacao": "ok",
        "texto": "Shambel Abebe Bikila (Amharic: ሻምበል አበበ ቢቂላ; August 7, 1932 – October 25, 1973) was an Ethiopian marathon runner who was a back-to-back Olympic marathon champion. He was the first Ethiopian Olympic gold medalist, winning his first gold medal at the 1960 Summer Olympics in Rome while running barefoot. At the 1964 Tokyo Olympics, he won his second gold medal, making him the first athlete to successf\n[…]\nIn July 1960, Abebe won his first marathon in Addis Ababa. A month later he won again in Addis Ababa with a time of 2:21:23, which was faster than the existing Olympic record held by Emil Zátopek. Niskanen entered Abebe Bikila and Abebe Wakgira in the marathon at the 1960 Rome Olympics, which would be run on September 10. In Rome, Abebe purchased new running shoes, but they did not fit well and gave him blisters. He consequently decided to run barefoot instead.\n[…]\nDue to Rome's blistering heat, the race started in late-afternoon at the foot of the Capitoline Hill staircase and finished at night at the Arch of Constantine, just outside the Colosseum. The course twice passed Piazza di Porta Capena, where the Obelisk of Axum was then located.\n[…]\nAbebe received the Order of Menelik II, a Volkswagen Beetle and a house.\n[…]\nThe other two, also written in English, are Paul Rambali's 2007 fictional biographical novel Barefoot Runner and Tim Judah's 2009 Bikila: Ethiopia's Barefoot Olympian. According to the journalist Tim Lewis's comparative review of the two books, Judah's is a more journalistic, less-forgiving biography of Abebe. It refutes the mythical aspects of his life but recognises Abebe's athletic accomplishments.\n[…]\nAbebe Bikila at Olympics.comAbebe Bikila at Olympic.org (archived)\n[…]\nAbebe Bikila at Olympedia\n[…]\nVideo tribute to Abebe Bikila on YouTube\n[…]\nVideo footage of Abebe Bikila on YouTube at the 1960 Summer Olympics"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Fosbury Flop",
      "descricao": "Técnica do salto em altura em que o atleta passa de costas sobre o sarrafo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Saltar de costas e cair de nuca no salto em altura só se tornou seguro graças a uma mudança na área de queda. Qual foi essa mudança?",
    "resposta": "Colchões de espuma no lugar da areia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fosbury_flop"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fosbury_flop",
        "situacao": "ok",
        "texto": "The Fosbury flop is a jumping style used in the track and field event of high jump. It was popularized and perfected by American athlete Dick Fosbury, whose gold medal in the 1968 Summer Olympics in Mexico City brought it to the world's attention. The flop became the dominant style of the event, surpassing the straddle technique, Western roll, Eastern cut-off, or scissors jump to clear the bar.\n[…]\nThough the backwards flop technique had been known for years before Fosbury, landing surfaces had been sandpits or low piles of matting and high jumpers had to land on their feet or at least land carefully to prevent injury. With the advent of deep foam matting, high jumpers were able to be more adventurous in their landing styles and hence more experimental with jumping styles.\n[…]\nThe approach (or run-up) in the Fosbury flop is characterized by (at least) the final four or five steps being run in a curve, allowing the athlete to lean in to the turn, away from the bar. This allows the center of gravity to be lowered even before knee flexion, giving a longer time period for the take-off thrust. Additionally, on take-off, the sudden move from inward lean to outwards produces a rotation of the jumper's body along the bar's axis, aiding clearance.\n[…]\nFosbury himself cleared the bar with his hands by his sides, whereas some athletes cross the bar with their arms held out to the side or even above their heads, optimizing their mass-distribution. Studies show that variations in approach, arm technique, and other factors can be adjusted to achieve each athlete's best performance.\n[…]\nDick Fosbury revolutionised the high jump (from the International Olympic Committee web site)\n[…]\nRotation over the bar in the Fosbury Flop analysed & explained by Dr. Jesus Dapena Archived 2 December 2008 at the Wayback Machine."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Jogos de Stoke Mandeville",
      "descricao": "Competição criada em 1948 num hospital inglês, considerada a origem dos Jogos Paralímpicos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Os primeiros jogos para atletas em cadeira de rodas de Stoke Mandeville, em 1948, foram marcados para o mesmo dia de que grande evento esportivo?",
    "resposta": "Abertura dos Jogos Olímpicos de Londres",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stoke_Mandeville_Games"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stoke_Mandeville_Games",
        "situacao": "ok",
        "texto": "The World Abilitysport Games (known as the IWAS World Games before 2023) are a parasports multi-sport event for athletes who use wheelchairs or are amputees.\n[…]\nOrganized by World Abilitysport (formerly IWAS), the Games are a successor to the original Stoke Mandeville Games founded in 1948 by Ludwig Guttmann, and specifically the International Stoke Mandeville Games—the first international sporting competition for athletes with disabilities which was held in 1952, itself an Olympic year, between British and Dutch athletes and which ultimately was the forerunner to the modern Paralympic Games.\n[…]\nThe event was first established in 1948 as the Stoke Mandeville Games by neurologist Ludwig Guttmann, who organized a sporting competition involving World War II veterans with spinal cord injuries at the Stoke Mandeville Hospital rehabilitation facility in Aylesbury, England, taking place concurrently with the first post-war Olympic Games in London.\n[…]\nThe inaugural competition, initially named \"Stoke Mandeville Games for the Paralyzed\" in 1948, was just named \"Stoke Mandeville Games\" the next year, before becoming the \"International Stoke Mandeville Games\" (ISMG) in 1952.\n[…]\nBeginning in 1960 during Summer Olympic years, the ISMG were held in the same host city as the Summer Olympics. These particular editions of the Games were retroactively recognised as being the first four Paralympic Games. The Games were otherwise hosted in Stoke Mandeville in all other years.\n[…]\n\"2012 – The Paralympics come home\", BBC, July 4, 2008. A look back at the origins of the Stoke Mandeville Games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Mundiais_de_Cadeirantes_e_Amputados",
        "situacao": "ok",
        "texto": "Jogos Mundiais de Cadeirantes e Amputados, anteriormente conhecido como Stoke Mandeville Wheelchair Games, e World Wheelchair Games é um evento multiesportivo, uma competição de atletismo para atletas com deficiência múltipla.\n[…]\nOs jogos foram originalmente realizados em 1948 pelo neurologista Sir Ludwig Guttmann, que organizou uma competição esportiva envolvendo veteranos da Segunda Guerra Mundial com lesões da medula espinhal no Hospital Stoke Mandeville Hospital em Stoke Mandeville, Reino Unido, simultaneamente com os primeiros Jogos Olímpicos de Verão do pós-guerra, realizado em Londres.\n[…]\nEm 1952, os Países Baixos se juntaram no evento, criando a primeira competição internacional de esportes para portadores de deficiência. Em 1960, a nova edição dos Jogos Stoke Mandeville foram realizados em Roma, Itália, na sequência de Jogos Olímpicos daquele ano. Estes são considerados os primeiros Jogos Paraolímpicos da história.\n[…]\nFederação Internacional do Esporte para Amputados e Cadeirantes",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Misha",
      "descricao": "Urso mascote dos Jogos Olímpicos de Moscou 1980."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No encerramento de Moscou 1980, o urso Misha, mascote dos Jogos, apareceu num painel formado por cartões na arquibancada. Que gesto dele emocionou o estádio?",
    "resposta": "Derramou uma lágrima",
    "fonte": [
      "https://en.wikipedia.org/wiki/Misha_(mascot)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Misha_(mascot)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Brasil nos Jogos Olímpicos de Verão de 1920",
      "descricao": "Participação brasileira nos Jogos de Antuérpia 1920, a primeira do país em Jogos Olímpicos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Antuérpia 1920, os atiradores brasileiros conquistaram medalhas usando armas e munição emprestadas pela equipe americana. Por que precisaram do empréstimo?",
    "resposta": "Suas armas e munição foram roubadas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_at_the_1920_Summer_Olympics",
      "https://en.wikipedia.org/wiki/Guilherme_Paraense"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_at_the_1920_Summer_Olympics",
        "situacao": "ok",
        "texto": "Brazil competed at the modern Olympic Games for the first time at the 1920 Summer Olympics in Antwerp, Belgium. 19 competitors, all men, took part in 10 events in 5 sports.\n[…]\nThey made friends with the American athletes Alfred Lane and Raymond Bracken, who gave the Brazilians 2,000 cartridges and 50 targets.\n[…]\nThe following competitors won several medals at the 1920 Olympic Games.\n[…]\nA single diver represented Brazil in the nation's Olympic debut in 1920. Wellisch competed in all three of the men's events, reaching the final in two but winning no medals.\n[…]\nFive rowers represented Brazil in 1920. It was the nation's debut in the sport. Brazil sent one boat, in the coxed fours. It was unable to advance past the semifinals, taking second place to the United States in the three-boat heat.\n[…]\nFive shooters represented Brazil in 1920. It was the nation's debut in the sport as well as the Olympics. All three of Brazil's medals at the Antwerp Games came in shooting events, with one of each type.\n[…]\nTwo swimmers, both male, represented Brazil in 1920. It was the nation's debut in the sport as well as the Olympics. Neither swimmer advanced past the quarterfinals.\n[…]\nBrazil competed in the Olympic water polo tournament for the first time in 1920. A modified version of the Bergvall System was in use at the time. Brazil won its first match, against France, before being defeated by Sweden in the quarterfinals."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Guilherme_Paraense",
        "situacao": "ok",
        "texto": "Guilherme Paraense (25 June 1884 – 18 April 1968) was a Brazilian sport shooter and Olympic Champion. He was the first Brazilian to win an Olympic gold medal.\n[…]\nParaense was born in Belém. He won a gold medal at the 1920 Summer Olympics in Antwerp, in the Rapid-Fire Pistol event. He was also part of the Brazilian team which earned a bronze medal in Military Revolver.\n[…]\nGuilherme Paraense at the Comitê Olímpico do Brasil  (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brasil_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1920",
        "situacao": "ok",
        "texto": "Nos Jogos Olímpicos de Verão de 1920, o Brasil participaria de sua  primeira Olimpíada, em Antuérpia (Bélgica). Os 21 atletas brasileiros - apenas homens - chegaram à Europa e conquistaram três medalhas: uma de ouro, uma de prata e uma de bronze. A modalidade que trouxe essas medalhas para o Brasil foi o tiro ao alvo.\n[…]\nChefiada por Roberto Trompowsky Júnior, a delegação brasileira embarcou a bordo do navio a vapor Curvello em 1º de julho de 1920 rumo à Antuérpia. Os sete atiradores tiveram grandes dificuldades para chegar às provas. Tiveram que descer em Portugal quando souberam que a embarcação não chegaria a tempo para a prova de tiro. Eles então pegaram um trem de Lisboa a Paris, sendo que boa parte da viagem foi num vagão descoberto, com os atletas pegando chuva e sol.\n[…]\nNa capital francesa, trocaram de composição, seguindo para a Bélgica. Porém, em Bruxelas, onde esperavam a conexão para Antuérpia, parte das armas e da munição foi roubada.\n[…]\nNesse momento, os sete atiradores possuíam 200 balas calibre 38, embora precisassem de pelo menos 75 para cada um. Por sorte, fizeram amizade com os atletas americanos Alfred Lane e Raymond Bracken, que deram 2 mil cartuchos e 50 alvos para os brasileiros.\n[…]\nO Brasil já começou a participar na prova de pistola livre, com Fernando Soledade. Como sua arma era muito ruim, o chefe da equipe americana de tiro, Coronel Snyders, ficou sensibilizado e cedeu duas armas fabricadas pela Colt especialmente para a competição.\n[…]\nOs atiradores Sebastião Wolf, Dario Barbosa, Guilherme Paraense e Afrânio da Costa fizeram um \"rodízio\" com as armas e conquistaram a medalha de bronze por equipes. Afrânio também conseguiu a medalha de prata individual.\n[…]\nBrasil nos Jogos Olímpicos de Verão\n[…]\nComitê Olímpico Brasileiro\n[…]\n«Site oficial do Comitê Olímpico Brasileiro»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Joaquim Cruz",
      "descricao": "Meio-fundista brasileiro, campeão olímpico dos 800 metros."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Campeão olímpico dos oitocentos metros, Joaquim Cruz nasceu numa cidade do Distrito Federal, vizinha a Brasília. Qual?",
    "resposta": "Taguatinga",
    "distratores": [
      "Ceilândia",
      "Gama",
      "Sobradinho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Joaquim_Cruz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Joaquim_Cruz",
        "situacao": "ok",
        "texto": "Joaquim Carvalho Cruz (born 12 March 1963) is a Brazilian former middle-distance runner, winner of the 800 meters at the 1984 Summer Olympics. He is one of only ten men, and in August 1984 became the second man, to run the 800 metres in less than 1 minute 42 seconds.\n[…]\nJoaquim Cruz was born in Taguatinga, Federal District. The son of a steel worker, he began running as a 13-year-old, and showed great promise as a junior. At the age of 15 his personal best over 800 m stood at 1:51 min. After setting a junior world record of 1:44.3 min in 1981, he received a scholarship for the University of Oregon in 1983. The move immediately paid off, and Cruz won the National Collegiate Athletic Association (NCAA) championships over 800 m that same year.\n[…]\nHis last victory of significance came in the 1500 meters at the 1995 Pan American Games. One year later, taking part at his third Olympics at the 1996 Summer Olympics, Cruz was the Brazilian flag-bearer and ran the 1500 meters without reaching the finals.\n[…]\nCruz competed at the 2001 Masters West Region Track and Field Championship winning the 5000 meter run at age 38.\n[…]\nCruz was the last torchbearer and lit the flame cauldron at the 2007 Pan American Games in Rio de Janeiro, on 13 July 2007. After retiring from competitions he became a running coach at the Olympic Training Center in Chula Vista, California. He guides David Brown and Shaquille Vance, among other Paralympic athletics.\n[…]\nJoaquim Cruz at Sporting Heroes at the Wayback Machine (archived 11 March 2007)\n[…]\nJoaquim Cruz at Olympedia\n[…]\nJoaquim Cruz at Olympics.com\n[…]\nJoaquim Cruz at the Comitê Olímpico do Brasil  (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Joaquim_Cruz",
        "situacao": "ok",
        "texto": "Joaquim Carvalho Cruz (Taguatinga, 12 de março de 1963) é um ex-meio-fundista brasileiro, campeão olímpico dos 800 metros em Los Angeles 1984, medalha de prata na mesma prova nas Seul 1988 e por duas vezes campeão pan-americano, em Indianápolis, 1987 e Mar del Plata, 1995.\n[…]\nSétimo filho de uma família de nordestinos que migrou do Piauí para o Distrito Federal, começou sua carreira jogando basquete americano no SESI de Taguatinga aos treze anos de idade, e logo mostrou um grande talento como júnior. Aos dezoito anos, conseguiu a marca de 1'51\" nos 800 metros.\n[…]\nPoucas semanas após os Jogos Olímpicos, Joaquim quebrou mais um recorde brasileiro nos 800m em uma competição em Colônia. Seu tempo de 1:41.77 foi apenas 4/100 de segundo acima do recorde mundial. Em 1985 Joaquim confirmou seus excelentes resultados no ano anterior ao correr tempos abaixo de 1:43 na Europa. Neste ano, foi eleito o Desportista do Ano numa votação de jornalistas brasileiros (obteve 98 dos 107 votos totais).\n[…]\nCom problemas no tendão de Aquiles, Joaquim teve dificuldades para conseguir continuar em nível internacional e não participou dos Jogos Olímpicos de Barcelona 1992. Em 1993, tentou sua volta nos 1500 metros em várias corridas de Grand Prix na Europa, mas não obteve o desempenho esperado. Em 1995 conquistou a medalha de ouro nos 1500 metros nos Jogos Pan-americanos de 1995 em Mar del Plata.\n[…]\nEm Atlanta 1996, Joaquim foi o porta-bandeira da delegação brasileira na cerimônia de abertura, em sua última Olimpíada. Encerrou a carreira no Troféu Brasil de Atletismo em janeiro de 1997, no Rio de Janeiro.\n[…]\nCampeão olímpico (800 m) - 1984\n[…]\nCampeão Júnior B da América do Sul (1500 m) - 1979\n[…]\nLista dos campeões olímpicos de atletismo\n[…]\n«Instituto Joaquim Cruz»\n[…]\n«História de Joaquim Cruz» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Vanderlei Cordeiro de Lima",
      "descricao": "Maratonista brasileiro, medalha de bronze na maratona dos Jogos de Atenas 2004."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O homem que agarrou Vanderlei Cordeiro de Lima quando ele liderava a maratona de Atenas 2004 era um padre afastado. De que país ele era?",
    "resposta": "Irlanda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cornelius_Horan",
      "https://en.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cornelius_Horan",
        "situacao": "ok",
        "texto": "Cornelius \"Neil\" Horan, sometimes referred to as The Grand Prix Priest, The Dancing Priest, or The Armageddon Priest (born 22 April 1947), is an Irish former Roman Catholic priest who is noted for his interference with the running of the 2003 British Grand Prix and the 2004 Summer Olympics men's marathon in order to promote his religious belief that the end times are near.\n[…]\nHoran pushed Brazilian Vanderlei de Lima, who was leading the race, into the crowds alongside the course. After a few seconds Horan was hauled off the shaken runner by Greek spectator Polyvios Kossivas. Kossivas subdued Horan and helped de Lima up and back to the lane.\n[…]\nDe Lima later commented that \"I think that the psychological shock was the greatest impact that I suffered. To be attacked like that, it was painful. I was totally defenseless and exhausted.\"\n[…]\nThe head of the Brazilian Athletics Confederation launched an appeal based on the controversy surrounding Horan's interference in the marathon. The federation asked that de Lima also be awarded a gold medal, citing precedents set in past Olympic matches where extenuating circumstances have led to more than one winner in certain sports. This request was denied. Horan was given a 12-month suspended sentence by a Greek court and fined €3,000.\n[…]\nIn 2004, Horan was found not guilty of indecent assault against a seven-year-old girl in 1991. Although he admitted that he was naked while the girl tickled him and while they played hide-and-seek, during the court case he also claimed to own only one pair of tight-fitting green satin underpants that have never been washed as he needs them to 'always be ready for use', at one point Horan produced the pants from his pocket to show the jury.\n[…]\nProtester ruins marathon, BBC, 29 August 2004"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima",
        "situacao": "ok",
        "texto": "Vanderlei Cordeiro de Lima  (born 4 July 1969) is a retired Brazilian long-distance runner. He was born in Cruzeiro do Oeste, Paraná. While leading the marathon after 35 km (22 mi) at the 2004 Summer Olympics, he was attacked on the course by Irish former priest Cornelius \"Neil\" Horan. Following the incident, Lima fell from first to third place, eventually winning the bronze medal. He was later aw\n[…]\nLima was a two-time Pan American champion, running 2:17:20 at the 1999 Games and 2:19:08 for the second victory at the 2003 Games. He began the 2004 season with a win (2:09:39) at the Hamburg Marathon.\n[…]\nAt the closing of the event, the International Olympic Committee awarded Lima the Pierre de Coubertin Medal for the spirit of sportsmanship. The medal was officially presented to Lima on 7 December in Rio de Janeiro, during a formal ceremony organized on a yearly basis by the Brazilian Olympic Committee (COB) during the Prêmio Brasil Olímpico. Lima was also named Brazilian Athlete of the Year in 2004, receiving the trophy presented by the COB at the same time as the Pierre de Coubertin Medal.\n[…]\nLima's biography was written by Renata Adrião D'Angelo, Vanderlei de Lima - A Maratona de uma Vida (A Marathon of Life), printed in Brazil by Casa da Palavra, in 2007. Lima took part in the 2016 Summer Olympics torch relay in Brasília. In August 2016, he received the honor of lighting the Olympic Flame at the 2016 Summer Olympics in Rio de Janeiro during the Opening Ceremonies.\n[…]\nA documentary shows De Lima returning to Athens at age 54 to participate in the Athens Classic Marathon. The documentary chronicles his relationship with the city and his experience with the attack at the 2004 Summer Olympics.\n[…]\nVanderlei de Lima at World Athletics\n[…]\nVanderlei de Lima - the story of a man that goes beyond one strange incident - Article from IAAF\n[…]\nVanderlei de Lima at Olympics.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anexo%3ALista_de_celebridades_instant%C3%A2neas%23Cornelius_Horan",
        "situacao": "inexistente",
        "texto": "",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Rebeca Andrade",
      "descricao": "Ginasta artística brasileira, campeã olímpica no salto em Tóquio 2020 e no solo em Paris 2024."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No pódio do solo em Paris 2024, duas americanas se curvaram em reverência à campeã Rebeca Andrade. Uma era Simone Biles. Quem era a outra?",
    "resposta": "Jordan Chiles",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rebeca_Andrade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rebeca_Andrade",
        "situacao": "ok",
        "texto": "Rebeca Rodrigues de Andrade (Brazilian Portuguese pronunciation: [ʁeˈbɛkɐ ʁoˈdɾiɡiz dʒ(i)ɐ̃ˈdɾadʒ(i)]; born 8 May 1999) is a Brazilian artistic gymnast. Having won a total of six Olympic and ten World medals, she is the most decorated Brazilian and Latin American gymnast of all time, as well as the most decorated Brazilian Olympian in any discipline.\n[…]\nAt the 2016 Olympics, Andrade performed well in the qualification round and helped Brazil qualify for the team finals in fifth place. She qualified individually to the all-around final in third place with a total score of 58.732 behind American gymnasts Simone Biles and Aly Raisman. During the team finals, Andrade fell on the floor exercise, and the Brazilian team finished eighth. In the individual all-around, she finished eleventh with a total score of 56.965.\n[…]\nIn the all-around final, Andrade won the gold medal ahead of Shilese Jones and Jessica Gadirova with a score of 56.899, becoming the first South American gymnast to win a World all-around title. Andrade then won the bronze medal in the floor exercise final alongside Jade Carey, finishing behind Jessica Gadirova and Jordan Chiles, who finished in first and second place respectively.\n[…]\nHer performance in the latter final bested Diego Hypólito's second-place finish at the 2016 Olympics to make her the first Brazilian Olympic floor champion of either gender. During the floor final medal ceremony, Simone Biles and Jordan Chiles bowed to Andrade as she walked onto the podium, a gesture that went viral.\n[…]\nIn December 2024, Rebeca Andrade was included on the BBC's 100 Women list.\n[…]\nIn April 2025, Andrade won the Laureus World Sports Award for Comeback of the Year, for her resilience in overcoming multiple injuries, including three ACL tears, to become Brazil's most decorated Olympian in history at Paris 2024.\n[…]\nRebeca Andrade at Olympedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        "situacao": "ok",
        "texto": "Rebeca Rodrigues de Andrade (Guarulhos, 8 de maio de 1999) é uma ginasta artística brasileira, bicampeã olímpica e a maior medalhista da história do Brasil nos Jogos Olímpicos, com 6 medalhas (2 ouros, 3 pratas e 1 bronze). Também foi bicampeã mundial no salto (2021 e 2023) e campeã mundial individual geral de 2022.\n[…]\nNos Jogos Olímpicos de 2020, Rebeca conquistou a primeira medalha feminina da ginástica brasileira e também latino-americana com a prata no individual geral, e com o ouro no salto, sendo a primeira atleta brasileira a ganhar duas medalhas numa mesma edição das Olimpíadas. Nos Jogos Olímpicos de 2024, Rebeca se tornou a atleta olímpica nacional com mais medalhas nos Jogos, após conquistar o bronze por equipes, a prata no individual geral e no salto, e o ouro no solo.\n[…]\nRebeca ainda conquistou a medalha de bronze na final do exercício de solo ao lado da estaunidense Jade Carey, ficando atrás da britânica Jessica Gadirova e da estadunidense Jordan Chiles, que terminaram em primeiro e segundo lugar, respectivamente.\n[…]\nNesta mesma competição, Andrade sagrou-se campeã na categoria salto, superando a lendária Simone Biles, e conquistando o bicampeonato, uma vez que também havia vencido em 2021. Ainda na mesma competição, assegurou a medalha de bronze na categoria trave e a medalha de prata na categoria solo, em um pódio inédito com a também brasileira Flávia Saraiva, que garantiu o bronze, assim medalhando em todas as finais às quais se classificou.\n[…]\nTambém conquistou uma medalha de prata no Salto. A quarta medalha olímpica fez Andrade superar Mayra Aguiar e Hélia Souza como a atleta brasileira feminina com mais pódios olímpicos. Após um quarto lugar na trave, Andrade conquistou a medalha de ouro na categoria Solo, e o sexto pódio a tornou a maior medalhista brasileira da história.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Rebeca Andrade",
      "descricao": "Ginasta artística brasileira, campeã olímpica no salto em Tóquio 2020 e no solo em Paris 2024."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Antes das medalhas olímpicas, Rebeca Andrade rompeu o ligamento cruzado do joelho direito várias vezes. Quantas cirurgias ela fez nesse ligamento?",
    "resposta": "Três",
    "distratores": [
      "Uma",
      "Duas",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rebeca_Andrade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rebeca_Andrade",
        "situacao": "ok",
        "texto": "Rebeca Rodrigues de Andrade (Brazilian Portuguese pronunciation: [ʁeˈbɛkɐ ʁoˈdɾiɡiz dʒ(i)ɐ̃ˈdɾadʒ(i)]; born 8 May 1999) is a Brazilian artistic gymnast. Having won a total of six Olympic and ten World medals, she is the most decorated Brazilian and Latin American gymnast of all time, as well as the most decorated Brazilian Olympian in any discipline.\n[…]\nAndrade underwent three ACL reconstruction surgeries, all on her right knee. Her main idol in gymnastics is the Brazilian world champion Daiane dos Santos.\n[…]\nIn December 2024, Rebeca Andrade was included on the BBC's 100 Women list.\n[…]\nIn late 2025, Rebeca Andrade was honored with a mural at CEU Butantã, in the western part of São Paulo. The artwork, titled “Rebeca Andrade: Body that Flies, Root that Remains,” is part of the MAR 2025 program of the São Paulo City Hall, which aims to promote urban art in public spaces.\n[…]\nOn September 12, 2025, the sportswear brand Adidas released a documentary that centers on Andrade’s long-standing working relationship with her coach, Francisco Porath, commonly known as Xico. According to a press release issued by Adidas, the production offers a personal perspective on the people who support the athlete and serve as a consistent and positive influence throughout her career.\n[…]\nThe documentary was released on YouTube and highlights their professional collaboration within the context of Andrade’s achievements at the international level. The film is part of Illuminated, a documentary series produced by Adidas that profiles elite athletes and the individuals who play significant roles in their professional journeys.\n[…]\nRebeca Andrade at World Gymnastics\n[…]\nRebeca Andrade at Olympics.com\n[…]\nRebeca Andrade at the Brazilian Olympic Committee (in Portuguese)\n[…]\nRebeca Andrade at Olympedia\n[…]\nRebeca Andrade at InterSportStats"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        "situacao": "ok",
        "texto": "Rebeca Rodrigues de Andrade (Guarulhos, 8 de maio de 1999) é uma ginasta artística brasileira, bicampeã olímpica e a maior medalhista da história do Brasil nos Jogos Olímpicos, com 6 medalhas (2 ouros, 3 pratas e 1 bronze). Também foi bicampeã mundial no salto (2021 e 2023) e campeã mundial individual geral de 2022.\n[…]\nTornou-se também a primeira brasileira bicampeã olímpica em prova individual.\n[…]\nA atleta passou por três cirurgias de reconstrução do ligamento cruzado anterior do joelho direito.\n[…]\nContudo, em junho, um rompimento no ligamento cruzado anterior do joelho direito impediu sua participação nos Jogos Pan-Americanos de 2015, realizado em Toronto no Canadá, e sua estreia no Campeonato Mundial, que ocorreu em Glasgow, na Escócia.\n[…]\nNo ano de 2016, Andrade retornou à competição após a cirurgia no joelho e conquistou cinco medalhas no circuito da Copa do Mundo, além de competir em sua primeira edição de Jogos Olímpicos de Verão na edição de 2016, realizada no Rio de Janeiro - cidade em que treina e reside desde 2011.\n[…]\nAndrade inicialmente foi convocada para a equipe do Campeonato Mundial juntamente com a estreante Thais Fidelis. No entanto, durante o aquecimento para o treino de pódio, ela rompeu o ligamento cruzado anterior pela segunda vez e ficou de fora da competição. A atleta passou por uma segunda cirurgia de reconstrução do ligamento em outubro.\n[…]\nAlém disso, Rebeca se tornou a ginasta mais premiada do país em mundiais, ao garantir sua sexta medalha ao conquistar o vice-campeonato no individual geral no mesmo ano. Um marco histórico adicional foi a inédita presença de três mulheres negras no pódio do Mundial de Ginástica, composto por Simone Biles levando o ouro, Rebeca conquistando a prata, e Shilese Jones ficando com o bronze.\n[…]\nRebeca Andrade no Instagram\n[…]\nRebeca Andrade em Olympics.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Isaquias Queiroz",
      "descricao": "Canoísta brasileiro de velocidade, medalhista olímpico com três medalhas numa mesma edição."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Quando criança, o canoísta Isaquias Queiroz caiu de uma árvore e perdeu um órgão. Que apelido os amigos lhe deram por causa disso?",
    "resposta": "Sem Rim",
    "fonte": [
      "https://en.wikipedia.org/wiki/Isaquias_Queiroz",
      "https://pt.wikipedia.org/wiki/Isaquias_Queiroz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Isaquias_Queiroz",
        "situacao": "ok",
        "texto": "Isaquias Queiroz dos Santos (born 3 January 1994), also known as Isaquias Guimarães Queiroz, is a Brazilian sprint canoeist who has competed since 2005. He is the first Brazilian athlete to ever win three medals in a single edition of the Olympic Games, and the second most decorated Brazilian athlete with five medals overall, including a gold medal.\n[…]\nThe 2020 Summer Olympics had Queiroz partnered with Jacky Godmann as Erlon Silva had not recovered from a hip injury. In the C–2 1000 metres category, Queiroz and Godmann finished in fourth place. Queiroz won the gold in his remaining race, the C-1 1000 meters. He considered a consolidation of extensive training to get a victory that eluded him in Rio and became the first Brazilian Olympic champion in canoeing.\n[…]\nQueiroz was one of eight sprint canoeists named to represent Brazil at the 2024 Summer Olympics. On 22 July 2024, the Brazil Olympic Committee designated Queiroz and rugby player Raquel Kochhann to be the Brazilian flag bearers at the 2024 Summer Olympics Parade of Nations. During the Olympics, Queiroz and Goodman again reached the C–2 1000 metres final, finishing eighth.\n[…]\nIn the C-1 1000 meters Queiroz finished with a silver, marking his fifth Olympic medal and tying him with Robert Scheidt and Torben Grael as the most condecorated Brazilian man in the Games.\n[…]\nIsaquias Guimarães Queiroz on Instagram\n[…]\nIsaquias Guimaraes Queiroz at Paddle Worldwide\n[…]\nIsaquias Queiroz at Olympics.com\n[…]\nIsaquias Queiroz at Olympedia\n[…]\nIsaquias Queiroz at InterSportStats\n[…]\nIsaquias Queiroz at the Lima 2019 Pan American Games (archived)\n[…]\nIsaquias Queiroz at the Comitê Olímpico do Brasil  (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Isaquias_Queiroz",
        "situacao": "ok",
        "texto": "Isaquias Queiroz dos Santos (Ubaitaba, 3 de janeiro de 1994) é um canoísta brasileiro, campeão olímpico nos Jogos Olímpicos de Verão de 2020, na Canoa Individual C1 1.000m, chegando aos 4:04:408 minutos. Em Nos Jogos Olímpicos de Verão de 2016, Isaquias se tornou o primeiro atleta brasileiro a conquistar três medalhas em uma única edição dos Jogos Olímpicos.\n[…]\nIsaquias Queiroz era atleta do Clube de Regatas do Flamengo quando conquistou as medalhas de ouro no C1 200m e a prata no C1 500m. Ele voltou ao clube em 2019 e como atleta do Flamengo conquistou o ouro em Tóquio 2020.\n[…]\nO pai de Isaquias morreu quando ele tinha apenas dois anos, e a mãe, Dilma, cuidava dele e de outros nove irmãos e irmãs (cinco biológicos e quatro adotados). Ao trabalhar, ela às vezes deixava as crianças trancadas em casa.\n[…]\nEm 1997, aos três anos, sentia dor de barriga, esbarrou na cuidadora enquanto esta esquentava água para o tratar, e a água quente queimou boa parte de seu corpo. Isaquias passou um mês no hospital, com um médico chegando a pensar que o menino iria morrer. Aos cinco anos, foi sequestrado. Aos dez, enquanto escalava uma árvore para ver uma cobra morta, caiu em cima de uma pedra, teve hemorragia interna e perdeu um rim.\n[…]\nA confederação atribuiu o atraso a questões burocráticas e disse que os atletas não ficaram sem assistência no período. No mesmo mês, Isaquias sofreu um acidente na BR-101 após buscar o irmão no aeroporto em Ilhéus. Ele estava no volante, cochilou e perdeu o controle do veículo, que caiu em uma ribanceira. Isaquias, o irmão e um amigo saíram sem ferimentos. O acidente só não teve consequências mais graves porque Isaquias dirigia em baixa velocidade por causa da neblina.\n[…]\nJesus Morlán - Treinador de canoagem que lapidou o talento do Isaquias Queiroz.\n[…]\nIsaquias Queiroz em Olympics.com"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Fabiana Murer",
      "descricao": "Atleta brasileira aposentada de salto com vara, campeã mundial em 2011."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na final do salto com vara de Pequim 2008, Fabiana Murer ficou longe do pódio depois de um problema causado pela organização. O que aconteceu?",
    "resposta": "Uma de suas varas sumiu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fabiana_Murer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fabiana_Murer",
        "situacao": "ok",
        "texto": "Fabiana de Almeida Murer (born 16 March 1981) is a retired Brazilian pole vaulter. She holds the South American record in the event with an indoor best of 4.82 m and an outdoor best of 4.87 m, making her the fourth highest vaulter ever at the time, now the eighth. She won gold medals at the 2011 World Championships, 2010 World Indoor Championships, and 2007 Pan American Games. Murer represented Br\n[…]\nMurer set an outdoor personal best of 4.80 metres in June 2008 in São Paulo. This was a South American record. She finished tenth at the 2008 Summer Olympics with a vault of 4.50 m, however, unable to scale the heights that she had in June. During the competition, the organisers lost one of Murer's poles, causing her to underperform as she spent over 10 minutes trying to get the pole back.\n[…]\nIn 2014, Murer won the second Diamond League circuit, winning four out of the seven diamond race events.\n[…]\nOn 3 July 2016, she vaulted 4.87 m at the Troféu Brasil de Atletismo in São Bernardo do Campo, the Brazilian athletics trials to Rio 2016, improving her own Brazilian and South American records again. That same month, after attending the Herculis Diamond League meet, Murer reported pain in her neck. Despite treating it, by the time of the London Grand Prix, Murer was feeling a lack of strength in her arms.\n[…]\nTests revealed a cervical spinal disc herniation, leading Murer to go through extensive physical therapy to ensure she would perform normally during the 2016 Summer Olympics at home. Still, by the time of the Games, Murer failed in her first attempts at clearing 4.55 m. She later attributed the failure on not being fully recovered from the hernia.\n[…]\nFabiana Murer at World Athletics\n[…]\nEvans, Hilary; Gjerde, Arild; Heijmans, Jeroen; Mallon, Bill; et al. \"Fabiana Murer\". Olympics at Sports-Reference.com. Sports Reference LLC. Archived from the original on 2020-04-17."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fabiana_Murer",
        "situacao": "ok",
        "texto": "Fabiana de Almeida Murer (Campinas, 16 de março de 1981) é uma fisioterapeuta e atleta brasileira, campeã mundial, pan-americana, recordista brasileira e sul-americana do salto com vara. Duas vezes campeã mundial da prova, em 2010 na pista coberta e em 2011 ao ar livre, seus recordes sul-americanos foram estabelecidos em São Bernardo do Campo,  no Troféu Brasil de Atletismo de 2016 – 4,87 m ao ar \n[…]\nCom vistas à preparação para os Jogos Olímpicos de Verão de 2008, em Pequim, na China, Fabiana passou por um período de treinamento em Fórmias, na Itália, sob os cuidados de Vitaly Petrov. Sua participação em Pequim 2008, foi aquém do esperado; classificada para a final, uma de suas varas favoritas e específicas para determinada altura desapareceu de seu saco de varas, fazendo-a perder totalmente a concentração para os saltos.\n[…]\nFabiana tentou até interromper a prova, reclamando com os árbitros e postando-se na frente da atleta chinesa Gao Shuying, impedindo-a de saltar e exigindo que sua vara fosse encontrada; sem nada conseguir, com a concentração e a vara específica para saltar acima de 4, 60 m perdidas, ela falhou nas três tentativas de superar os 4,65 m e terminou apenas em 10º lugar. Naquela mesma noite após a prova, sua vara foi encontrada junto com as varas de outras atletas eliminadas.\n[…]\nApesar das altas expectativas geradas para os Jogos Olímpicos de Verão de 2012, realizado em Londres, sua segunda participação em Jogos Olímpicos acabou se tornando tão frustrante quanto a primeira. Se em Pequim 2008, a culpa foi das varas sumidas, em Londres foi \"o vento\".\n[…]\nUm mês depois Murer voltou à cidade chinesa de Pequim —  onde disputou sua primeira Olimpíada que terminou com varas perdidas e uma participação frustrante.\n[…]\nFabiana Murer é casada com seu treinador, Elson Miranda, desde 2010. A filha do casal, Manuela, nasceu em 2017.\n[…]\n«Perfil de Fabiana Murer na página da IAAF» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Maurren Maggi",
      "descricao": "Ex-atleta brasileira, campeã olímpica do salto em distância em 2008."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Pequim 2008, Maurren Maggi ganhou o ouro do salto em distância saltando sete metros e quatro. Por quanto ela superou a russa Tatyana Lebedeva?",
    "resposta": "Um centímetro",
    "distratores": [
      "Dois centímetros",
      "Cinco centímetros",
      "Dez centímetros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Athletics_at_the_2008_Summer_Olympics_%E2%80%93_Women%27s_long_jump",
      "https://en.wikipedia.org/wiki/Maurren_Maggi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Athletics_at_the_2008_Summer_Olympics_%E2%80%93_Women%27s_long_jump",
        "situacao": "ok",
        "texto": "The women's long jump at the 2008 Summer Olympics took place on 19 and 22 August at the Beijing National Stadium. The winning margin was 13 cm.\n[…]\nIn the qualifying round, Blessing Okagbare was the last qualifier, jumping 6.59m on her final attempt to knock out Tatyana Kotova and triple jump bronze medalist, Hrysopiyí Devetzí out of the final by 2 cm. #1 qualifier Brittney Reese jumped 6.65m as the first jump in the final, which held up for five jumps until Tatyana Lebedeva jumped 6.97m. Four more jumps later, Maurren Maggi's 7.04 m (23 ft 1 in) winner was the only jump of the competition to best Lebedeva.\n[…]\nThe penultimate jumper Chelsea Hammond jumped 6.79m, then the 19 year old Okagbare hit a 6.91m. Those first round jumps settled the competition. Only Lebedeva was able to improve with a 7.03m final attempt, but it was still 1 cm short of capturing gold.\n[…]\nIn 2017, retests showed Tatyana Lebedeva had a positive test for turinabol and was disqualified from both her silver medals. The IOC requested that the IAAF modify the results, and, after CAS dismisses the appeal of Tatyana Lebedeva, the medals were redistributed accordingly. Blessing Okagbare was advanced to silver, and Chelsea Hammond was advanced to bronze.\n[…]\n22 August 2008 - 19:20"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maurren_Maggi",
        "situacao": "ok",
        "texto": "Maurren Higa Maggi (born 25 June 1976) is a Brazilian retired track and field athlete and Olympic gold medallist om the long jump. She is the South American record holder in the 100 metres hurdles and long jump, with 12.71 seconds and 7.26 metres respectively. She also has a best of 14.53 metres in the triple jump – a former South American record. She is the first Brazilian woman to win an Olympic\n[…]\nMaurren served a two-year ban from 2003 to 2004 for an unintentional anti-doping rule violation after testing positive for clostebol. Although Brazil's Superior Sports Tribunal had cleared her of the violation, the IAAF appealed the decision, and Maurren was issued with the sanction.\n[…]\nMaggi won the gold medal in the women's long jump at the 2008 Beijing Olympics with a distance of 7.04m, becoming the first Brazilian woman to achieve an Olympic gold in an individual sport.\n[…]\nMaurren was married to racer Antônio Pizzonia, with whom she has a daughter, Sophia.\n[…]\n2008 Summer Olympics - gold medal\n[…]\n2008 IAAF World Indoor Championships - silver medal\n[…]\nMaurren Higa Maggi at World Athletics\n[…]\nMaurren Maggi at Olympics.comMaurren Higa Maggi at Olympic.org (archived)\n[…]\nMaurren Maggi at Olympedia\n[…]\nMaurren Maggi at the Comitê Olímpico do Brasil  (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atletismo_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2008_-_Salto_em_dist%C3%A2ncia_feminino",
        "situacao": "ok",
        "texto": "A competição de salto em comprimento feminino dos Jogos Olímpicos de Verão de 2008 realizou-se a 19 e 22 de agosto de 2008 no Estádio Nacional de Pequim.\n[…]\nOriginalmente a russa Tatyana Lebedeva obteve a medalha de prata, mas foi desclassificada em 25 de janeiro de 2017 após a reanálise de seu exame antidoping acusar o uso da substância proibida turinabol. A nigeriana Blessing Okagbare, então em terceiro lugar, foi elevada a segunda posição, e a medalha de bronze foi realocada para a jamaicana Chelsea Hammond.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Rayssa Leal",
      "descricao": "Skatista brasileira, medalhista olímpica no skate street, conhecida como Fadinha."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Rayssa Leal conquistou a medalha de prata no skate street dos Jogos de Tóquio com quantos anos de idade?",
    "resposta": "Treze",
    "distratores": [
      "Doze",
      "Catorze",
      "Quinze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rayssa_Leal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rayssa_Leal",
        "situacao": "ok",
        "texto": "Jhulia Rayssa Mendes Leal (born 4 January 2008) is a Brazilian profesional skateboarder. Representing Brazil in the street skateboarding, she won a silver medal at the 2020 Summer Olympics, as well as a bronze at the 2024 Games.\n[…]\nShe was dubbed \"A Fadinha do Skate\", translated roughly as \"The Little Fairy of Skateboarding\".\n[…]\nIn 2021, Leal competed in the pandemic-delayed 2020 Summer Olympics in Tokyo at the age of 13, the youngest Brazilian ever to participate in the Olympic Games. In the skateboarding street competition she placed 3rd in the qualifiers. In the final, she won the silver medal. At 13 years and 203 days old on medal day, she was the youngest Olympic medalist in 85 years, and became an instant celebrity, gaining 5.8 million new followers on Instagram.\n[…]\nIn August 2021, Leal won the opening leg of the 2021 Street League Skateboarding season, which took place in Salt Lake City, Utah, United States. In the last round of tricks, Leal needed an 8.3 rating to pass Funa Nakayama and managed to get an 8.5 rating. It was, at that time, the highest score in women's SLS history, as no woman had done a kickflip followed by a handrail maneuver until this point in an official competition.\n[…]\nIn November 2022, Leal won the 2022 SLS Super Crown in Rio de Janeiro.\n[…]\nLeal is set to appear as one of the new playable skaters in the 2025 video game Tony Hawk's Pro Skater 3 + 4, a remake of the third and fourth entries in the series.\n[…]\nRayssa Leal at World Skate (alternative link)\n[…]\nRayssa Leal at The Boardr\n[…]\nRayssa Leal at SPoT\n[…]\nRayssa Leal at the X Games\n[…]\nRayssa Leal at Olympics.com\n[…]\nRayssa Leal at Olympedia\n[…]\nRayssa Leal at InterSportStats\n[…]\nRayssa Leal at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nRayssa Leal on Instagram"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        "situacao": "ok",
        "texto": "Jhúlia Rayssa Mendes Leal (Imperatriz, 4 de janeiro de 2008) é uma skatista brasileira, vice-campeã olímpica nos Jogos Olímpicos de Verão de 2020 em Tóquio, sendo a mais jovem medalhista olímpica brasileira. Em 2024, conquistou o bronze nos Jogos Olímpicos de Paris. Além disso, é campeã pan-americana, vencendo a medalha de ouro no skate street dos Jogos Pan-Americanos de 2023, realizados em Santia\n[…]\nRayssa foi ainda medalhista de ouro nos X Games duas vezes e campeã mundial no World Skate Games de 2022 e 2024. Também é a primeira e única tricampeã mundial da Street League Skateboarding, na categoria feminina.\n[…]\nEm 2021, Rayssa fez história ao conquistar a medalha de prata nos Jogos Olímpicos de Tóquio, tornando-se a mais jovem medalhista olímpica do Brasil. Seu desempenho continuou nas competições seguintes, com vitórias nas etapas da SLS e nos X Games em 2022, além de receber seu primeiro modelo de skate profissional, consolidando-se como uma das maiores atletas do esporte.\n[…]\nRayssa também fez parte da delegação brasileira nos Jogos Pan-Americanos de 2023, realizados em Santiago, Chile, onde conquistou a medalha de ouro na estreia do skate no evento, junto com Pâmela Rosa, que garantiu a prata, formando uma \"dobradinha\" brasileira no pódio. Rayssa foi a primeira atleta do Comitê Olímpico do Brasil (COB) a conquistar uma medalha de ouro nessa edição do Pan.\n[…]\nEm fevereiro de 2024, Rayssa Leal foi vice-campeã na Street League em Paris. Apenas dois meses depois, em abril, ela subiu novamente ao pódio, conquistando o título na etapa de San Diego da SLS. Em maio, Leal continuou sua trajetória de vitórias ao ganhar a medalha de ouro na etapa da China do Pré-Olímpico de skate street, garantindo sua vaga nos Jogos Olímpicos de Verão de 2024 em Paris. Nos Jogos, ela garantiu o pódio ao Brasil, levando para casa a medalha de bronze com uma pontuação 88,83.\n[…]\nRayssa Leal em Olympics.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Ítalo Ferreira",
      "descricao": "Surfista brasileiro de Baía Formosa (RN), campeão mundial da WSL e campeão olímpico em 2020."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Sem dinheiro para comprar uma prancha, o menino Ítalo Ferreira, futuro campeão olímpico, aprendeu a surfar em Baía Formosa usando o quê?",
    "resposta": "Uma tampa de caixa de isopor",
    "fonte": [
      "https://en.wikipedia.org/wiki/%C3%8Dtalo_Ferreira"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/%C3%8Dtalo_Ferreira",
        "situacao": "ok",
        "texto": "Ítalo Ferreira da Costa (born 6 May 1994) is a Brazilian professional surfer hailing from a small community of Baía Formosa, in Rio Grande do Norte on the northeastern coast of Brazil.\n[…]\nFerreira learned to surf on a three-foot-long lid of a coolbox his father used to transport fish to sell to restaurants in Baia Formosa. He quickly progressed to a real board and at 12 years of age, his talent was noticed and then nurtured by fellow surfer Jadson Andre and the legendary Brazilian surf coach, Luiz 'Pinga' Campos, who was then marketing director of one of the world's leading surf brands.\n[…]\nFerreira first gained notoriety on the Championship Tour during his 2015 rookie season. During his breakout year, he made the semifinals in Rio and the quarterfinals in Fiji, Tahiti, and France before making his first CT Final in Portugal. Italo won the Rookie of the Year award after finishing his year 7th in the rankings. However, his rookie season was followed by a few inconsistent seasons.\n[…]\nOn July, 27th, 2021, Ferreira won the first men's Olympic surfing gold medal in the 2020 Tokyo Summer Olympics. On 4 August 2023, Ferreira became the first Brazilian born surfer to be inducted into the Surfers' Hall of Fame.\n[…]\nItalo started the 2025 season very well, making the semi-finals at Pipe and winning the first event in the history of the WSL in the Middle East, the Surf Abu Dhabi Pro in the United Arab Emirates wave pool, beating Rio Waida in the final.\n[…]\nItalo Ferreira at the World Surf League\n[…]\nItalo Ferreira at Olympics.com\n[…]\nÍtalo Ferreira at Olympedia\n[…]\nItalo Ferreira at the Comitê Olímpico do Brasil  (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%8Dtalo_Ferreira",
        "situacao": "ok",
        "texto": "Ítalo Ferreira da Costa (Baía Formosa, 6 de maio de 1994) é um surfista profissional brasileiro que está na ASP World Tour desde 2015. Em 2021 sagrou-se o primeiro campeão olímpico da história do surfe, recebendo a medalha de ouro ao derrotar o japonês Kanoa Igarashi nos Jogos Olímpicos de Verão de 2020 em Tóquio. Em 2019 já havia sagrado-se campeão do WSL, o maior campeonato mundial de surfe.\n[…]\nÍtalo Ferreira foi o primeiro surfista no mundo a receber a medalha de ouro pelo esporte, nos Jogos Olímpicos, além do grande título mundial do WSL 2019. Ítalo Ferreira tem ainda em seu histórico dois títulos do Campeonato de Juniors, sendo campeão do Quiksilver Pro Rio Junior e do Mormaii Pro Junior em Garopaba, ambos no Brasil. Em 2014 foi campeão da SuperSurfe, sendo considerado o campeão brasileiro, e foi o vice-campeão no Moche Rip Curl pro Portugal 2015, perdendo para Filipe Toledo.\n[…]\nEm 27 de julho de 2021, aos 27 anos de idade, Ítalo Ferreira conquistou  a medalha de ouro nas Olimpíadas 2020 em Tóquio. Foi o ano de estreia do surfe como esporte olímpico. Também foi a primeira medalha de ouro do Brasil na edição. Na etapa final da competição ele venceu o japonês Kanoa Igarashi por 15,14 contra 6,60 numa bateria que começou tensa, com Ítalo quebrando a prancha mas conseguindo rapidamente se recuperar e crescer, pegando boas ondas.\n[…]\nSempre pedi para que esse sonho fosse realizado e ele aconteceu\", declarou Ítalo Ferreira, o primeiro campeão olímpico do surfe.\n[…]\nÍtalo nasceu em uma família humilde no município litorâneo de Baía Formosa, no Rio Grande do Norte (onde mora até hoje),e começou a surfar usando como prancha a tampa da caixa de isopor onde seu pai, na época pescador, guardava os peixes.\n[…]\n«Ítalo Ferreira» (em inglês). em Circuito Mundial Masculino de Surfe\n[…]\nÍtalo Ferreira em Olympics.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Martine Grael",
      "descricao": "Velejadora brasileira, campeã olímpica na classe 49er FX no Rio e em Tóquio."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Nos ouros olímpicos da classe 49er FX, no Rio e em Tóquio, quem dividiu o barco com Martine Grael?",
    "resposta": "Kahena Kunze",
    "distratores": [
      "Fernanda Oliveira",
      "Isabel Swan",
      "Patrícia Freitas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kahena_Kunze",
      "https://en.wikipedia.org/wiki/Martine_Grael"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kahena_Kunze",
        "situacao": "ok",
        "texto": "Kahena Kunze (born 12 March 1991) is a Brazilian sailor in the 49er FX class. Together with Martine Grael she won the 49er FX class at the 2014 ISAF Sailing World Championships and a gold medal in the inaugural 49er FX race, during the 2016 Rio Olympics, a feat both repeated at Tokyo 2020.\n[…]\nIn 2025 Kahena sailed for the Brazil SailGP Team in the SailGP competition, in 2026 she joined the Danish team as strategist.\n[…]\nShe is the daughter of Claudio Kunze, a former sailor who won a junior world championship in the Penguin class. Her name is an homage to the warrior Kahina.\n[…]\nKahena Kunze at World Sailing (archive)\n[…]\nKahena Kunze at Olympics.com\n[…]\nKahena Kunze at Olympedia\n[…]\nKahena Kunze at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nKahena Kunze at the Lima 2019 Pan American Games (archived, alternate link)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Martine_Grael",
        "situacao": "ok",
        "texto": "Martine Soffiatti Grael (born 12 February 1991) is a Brazilian sailor in the 49er FX class. Together with Kahena Kunze, she won the 49er FX class at the 2014 ISAF Sailing World Championships and at the 2016 Rio Olympics, and 2020 Tokyo Olympics.\n[…]\nMartine Grael was born 12 February 1991 in Niterói, Rio de Janeiro, Brazil, the daughter of Olympic sailing gold medalist Torben Grael. Her brother Marco and uncle Lars also sailed in the Olympics.\n[…]\nGrael then sailed with Kahena Kunze in the Olympic debuting 49er FX event. The two became World champions in the 49er FX class at the 2014 ISAF Sailing World Championships The duo then won the event at the 2016 Rio Olympics.\n[…]\nShe sailed with Team AkzoNobel in the 2017–18 Volvo Ocean Race. In 2024, Grael was designated captain of the debuting Brazilian team that would compete at the SailGP championship.\n[…]\nGrael and Kunze also won the 49er FX event at the 2020 Summer Olympics.\n[…]\nMartine Grael at World Sailing\n[…]\nMartine Grael at Olympics.com\n[…]\nMartine Grael at Olympedia\n[…]\nMartine Grael at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nMartine Grael at the Lima 2019 Pan American Games (archived, alternate link)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kahena_Kunze",
        "situacao": "ok",
        "texto": "Kahena Kunze (São Paulo, 12 de março de 1991) é uma velejadora brasileira, bicampeã olímpica e campeã mundial de Iatismo na classe 49er FX – junto com a parceira e timoneira Martine Grael. Considerada a melhor velejadora do mundo em 2014 junto com a parceira, ela e Martine são as atuais nº1 do mundo na classe 49er FX pelo ranking da FIV.\n[…]\nEm 2009, com Martine, Kahena foi campeã mundial júnior na classe 420.\n[…]\nNo final de 2012, porém, Martine fez o convite de dividir o barco na nova classe olímpica feminina 49er FX com vistas aos Jogos da Rio 2016 e Kahena trancou a faculdade para se voltar inteiramente ao projeto olímpico. Em 2013, as duas foram vice-campeãs mundiais e vice-campeãs europeias na 49er FX.\n[…]\nNo ciclo olímpico seguinte, em 2017 ela foi novamente vice-campeã mundial como em 2013, e depois de se classificar para os próximos Jogos no Campeonato Mundial de Classes Olímpicas em Aarhus, na Dinamarca, em setembro de 2018 venceu, e com antecipação de uma regata, o evento-teste da Vela para Tóquio 2020 na raia olímpica de Enoshima, no Japão. Quando Martine partiu para a Volvo Ocean Race, Kahena voltou para a PUC, cursando mais dois períodos antes de trancar novamente.\n[…]\nMesmo sem favoritismo às vésperas dos Jogos Olímpicos de Verão de 2020 em Tóquio, adiados por um ano por causa da pandemia de Covid-19, Kunze conquistou a medalha de ouro ao lado de Grael e tornou-se bicampeã olímpica.\n[…]\nEm sua terceiro Olimpíada em Paris 2024, Kunze e Grael tiveram maus resultados e acabaram apenas em oitavo. Apesar da dupla ter se desfeito após os Jogos, Grael acabaria chamando Kunze para a equipe que disputaria o torneio SailGP.\n[…]\nKahena Kunze no Instagram\n[…]\nKahena Kunze em Olympics.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Equipe Olímpica de Refugiados",
      "descricao": "Delegação de atletas refugiados que compete nos Jogos Olímpicos sob a bandeira olímpica."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A síria Yusra Mardini, da Equipe de Refugiados, ajudou a empurrar um bote à deriva no mar Egeu antes de nadar nos Jogos. Que filme da Netflix conta sua história?",
    "resposta": "As Nadadoras",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yusra_Mardini",
      "https://en.wikipedia.org/wiki/The_Swimmers_(2022_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yusra_Mardini",
        "situacao": "ok",
        "texto": "Yusra Mardini (Arabic: يسرى مارديني; born 5 March 1998) is a Syrian former competition swimmer and refugee of the Syrian civil war. She was a member of the first ever Refugee Olympic Athletes Team (ROT) that competed under the Olympic flag at the 2016 Summer Olympics in Rio de Janeiro. On 27 April 2017, Mardini was appointed a UNHCR Goodwill Ambassador. She also competed in the 2020 Summer Olympic\n[…]\n\"After the Olympics, I realised that it’s not just my story anymore. I realised that my responsibility is to raise awareness and bring hope to millions of refugees around the world and speak for all of those who do not have a voice\".After her decision to end her swimming career, Mardini moved to Los Angeles in 2022 to study film and television production at the University of Southern California. In early 2025, Yusra returned to Syria after about 10 years in exile.\n[…]\nAt the 2024 Olympic Games in Paris, Mardini was hired by Eurosport and Discovery TV channels to report on the Refugee Olympic Team.\n[…]\nOn 20 June 2023, on UN World Refugee Day, she officially started the Yusra Mardini Foundation to support sports and education for refugee communities. The Foundation is based both in the US and Germany, consisting of a small team that has been working with refugees before.\n[…]\nIrish musician Declan O'Rourke penned the song \"Olympian\" to recall Yusra's story. It was released in 2021.\n[…]\nIn November 2022, a biographical film, inspired by Mardini's life and titled The Swimmers, was theatrically released and distributed on Netflix later the same month. The film stars Manal Issa, Nathalie Issa, and Ahmed Malek.\n[…]\nYusra Mardini  at World Aquatics\n[…]\nYusra Mardini at Swimrankings.net\n[…]\nYusra Mardini at Olympedia\n[…]\nYusra Mardini at Olympics.com\n[…]\nOfficial website of the Yousra Mardini Foundation"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Swimmers_(2022_film)",
        "situacao": "ok",
        "texto": "The Swimmers is a 2022 biographical sports drama film directed by Sally El Hosaini, who co-wrote the screenplay with Jack Thorne. The film stars real-life sisters Nathalie Issa and Manal Issa, Ahmed Malek, Matthias Schweighöfer, Ali Suliman, Kinda Alloush, James Krishna Floyd, and Elmi Rashid Elmi. The film follows two young sisters who embark on a risky voyage from war-torn Syria to Rio de Janeir\n[…]\nThe plot follows the life story of teenage Syrian refugees Yusra Mardini and her sister Sarah Mardini, who swam alongside a sinking dinghy of refugees to lighten it, and eventually help 18 refugees reach safety across the Aegean Sea while being smuggled from İzmir towards Lesbos. Subsequent struggles as refugees are vividly depicted, but Yusra Mardini's swimming career sees her reach the Rio 2016 Olympics as a member of the Refugee Olympic Team.\n[…]\nNathalie Issa as Yusra Mardini\n[…]\nIn April 2021, it was announced that Manal Issa and Nathalie Issa had been cast to play real-life sisters Yusra and Sara Mardini in The Swimmers for Working Title Films and Netflix.\n[…]\nIn the context of the contemporary refugee crisis, El Hosaini did not just want to present the story of the Mardini sisters and the other refugees. Rather, her intention was to show in a realistic style, what refugees are going through in real life. In an interview about the film, Yusra Mardini said, \"After the Olympics, I realised that it's not just my story anymore.\n[…]\nIn another interview, Yusra explains \"We wanted it to be as authentic as possible… We knew that there would be elements of fiction but we really wanted our authentic story to be out there. In the end they are talking about us. It is our life story. When we watched it, it was just very, very good. Even if the situation did not happen exactly the way it is depicted, it did happen, or it did happen to other refugees and that was the main point.\"\n[…]\nThe Swimmers on Netflix"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yusra_Mardini",
        "situacao": "ok",
        "texto": "Yusra Mardini Embaixador(a) da boa vontade da ACNUR (Damasco, 5 de março de 1998) é uma nadadora síria residente em Berlim, Alemanha, participante do time de Atletas Olímpicos Refugiados (código COI: ROT, Refugee Olympic Team) sob a bandeira olímpica nos Jogos Olímpicos de Verão de 2016 no Rio de Janeiro e nos Jogos Olímpicos de Verão de 2020, em Tóquio.\n[…]\nApós o motor ter parado de funcionar e começar a se encher de água no Mar Egeu, Mardini, sua irmã, e duas outras pessoas que eram capazes de nadar, entraram n'água e empurraram o bote por mais de três horas, até que chegassem à ilha de Lesbos. Quando se deslocaram pela Europa rumo à Alemanha, onde estabeleceram-se em Berlim em setembro de 2015. Seus pais também fugiram da Síria e vivem na Alemanha.\n[…]\nNas Olimpíadas do Rio, Mardini venceu uma bateria de 100m contra quatro outros nadadores, com o tempo de 1:09:21 ficando em 41º lugar entre os 45 participantes.\n[…]\nYusra também competiu nas Olímpiadas de Tóquio de 2020, onde foi porta-bandeira na cerimônia de abertura do evento. Nos Jogos, Mardini fez um tempo de 1:06.78 no nado de borboleta nas rodadas iniciais, mas foi eliminada na etapa seguinte.\n[…]\nA história de Yusra Mardini é contada na curta história Good Night Stories for Rebel Girls, de Elena Favilli e Francesca Cavallo. A história é ilustrada por JM Cooper e foi narrada pela jornalista e nadadora de longa distância Diana Nyad durante seu lançamento como um episódio de podcast No dia 26 de abril de 2018, a autobiografia \"Butterfly\", de Yusra Mardini, foi publicada. Está previsto que o diretor Stephen Daldry faça um filme sobre sua vida.\n[…]\nEm 2022, foi lançado o filme “The Swimmers” (As Nadadoras) que conta a história das duas irmãs, Yusra e Sara Mardini. O filme foi realizado por Sally El Hosaini. O filme encontra-se disponível na Netflix.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Competições de arte nos Jogos Olímpicos",
      "descricao": "Disputas de pintura, escultura, literatura, música e arquitetura que deram medalhas olímpicas na primeira metade do século vinte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois de 1948, as medalhas olímpicas de pintura, escultura e literatura deixaram de existir. Por que essas competições foram eliminadas?",
    "resposta": "Os artistas eram profissionais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Art_competitions_at_the_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Art_competitions_at_the_Summer_Olympics",
        "situacao": "ok",
        "texto": "Art competitions formed part of the modern Olympic Games during its early years, from 1912 to 1948. The competitions were part of the original intention of the Olympic Movement's founder, Pierre de Frédy, Baron de Coubertin. Medals were awarded for works of art inspired by sport, divided into five categories: architecture, literature, music, painting, and sculpture, which led to the events' initia\n[…]\nSupport for the art competitions grew, and in May 1906, Baron de Coubertin organised a meeting in Paris for both IOC members and representatives of artists' organisations. The meeting ended with a proposal to the IOC to organise artistic competitions at the Olympic Games in five areas (architecture, literature, music, painting, and sculpture). The works of art entered had to be inspired by sports.\n[…]\nThe growth continued at the 1928 Amsterdam Olympics, where over 1,100 works of art were exhibited in the Municipal Museum, not including the submissions in literature, music and architecture. Artists were allowed to sell their works at the close of the exhibition, which was rather controversial given the IOC's amateurism policy, which required all competitors to be amateurs.\n[…]\nGenerally, it was permitted for artists to enter multiple works, although a maximum number was sometimes established. This made it possible for an artist to win multiple prizes in a single competition.\n[…]\nJosef Suk and John Weinzweig are two of the best-known musicians to have competed, winning silver medals in 1932 and 1948 respectively. Polish composer Grażyna Bacewicz only earned an honourable mention at the London Olympics in 1948, but she went on to become one of her nation's most celebrated musicians with a statue of her being one of the seven artists depicted at the Philharmonic Hall is Bydgoszcz.\n[…]\nLondon 1948 (14)\n[…]\nList of LGBT artists at the Olympic Games"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Competi%C3%A7%C3%B5es_art%C3%ADsticas_nos_Jogos_Ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "As competições artísticas fizeram parte dos modernos Jogos Olímpicos durante seus primeiros anos, de 1912 a 1948. As competições fazem parte da intenção original do fundador do Movimento Olímpico, Pierre de Fredy, o barão de Coubertin. Medalhas foram atribuídos a obras de arte inspiradas pelo esporte, divididos em cinco categorias: arquitetura, literatura, música, pintura e escultura.\n[…]\nAs competições de artes foram abandonadas em 1954 porque os artistas eram considerados profissionais, enquanto os atletas olímpicos eram obrigados a serem amadores. Desde 1956, o programa cultural olímpico tomou o seu lugar.\n[…]\nJogos Píticos\n[…]\nJogos délficos da era moderna",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Pentatlo moderno",
      "descricao": "Modalidade olímpica criada por Pierre de Coubertin, que combina esgrima, natação, hipismo, tiro e corrida."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Coubertin juntou esgrima, natação, cavalo, tiro e corrida no pentatlo moderno para simular a aventura de que personagem?",
    "resposta": "Um soldado atrás das linhas inimigas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Modern_pentathlon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Modern_pentathlon",
        "situacao": "ok",
        "texto": "The modern pentathlon is an Olympic multisport that consists of five events: fencing (one-touch épée followed by direct elimination), freestyle swimming, obstacle course racing, laser pistol shooting, and cross country running.\n[…]\nAs the events of the ancient pentathlon were modeled on the skills of the ideal soldier to defend a fortification of that time, Coubertin created the contest to simulate the experience of a 19th-century cavalry soldier behind enemy lines: he must ride an unfamiliar horse, fight enemies with pistol and sword, swim, and run to return to his own soldiers.\n[…]\nThe laser run is organized as a pursuit race: athletes start with a handicap based on the summed points gathered in the previous disciplines; as such it determines the overall outcome of the modern pentathlon event. The rest of the field face a one-second handicap for each pentathlon point by which they trail the leader. This ensures that the first person to cross the finish line wins the Gold medal.\n[…]\nІn August 2023 during the 2023 UIPM Pentathlon and Laser Run World Championships, the UIPM signed a memorandum of understanding with World Obstacle to collaborate on the integration of obstacle racing into the modern pentathlon at the senior level; UIPM president Klaus Schormann stated that the federation was \"want[ing] to bring a different challenge to the Olympic Movement, to be more urban and provide something that young generations will love.\" The MoU was criticised by Pentathlon United, who questioned World Obstacle's finances (in particular, being funded solely by one person with no other commercial revenue).\n[…]\nModern pentathlon at the Summer Olympics\n[…]\nLasers make modern pentathlon more modern"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pentatlo_moderno",
        "situacao": "ok",
        "texto": "Pentatlo moderno é um desporto olímpico praticado por homens e por mulheres, individualmente ou em equipes. Compõe-se de cinco modalidades diferentes: hipismo, esgrima, natação, tiro esportivo e corrida. É proclamado vencedor aquele que obtiver o melhor desempenho geral ao somar mais pontos. Por essa variedade de esportes, o vencedor do pentatlo é considerado o atleta mais completo.\n[…]\nNo início do século XX, o Barão de Coubertin, fundador dos Jogos Olímpicos da Era Moderna,  decidiu estimular a realização do pentatlo moderno. O pentatlo estreou nas Olimpíadas de 1912, em Estocolmo, Suécia.\n[…]\nO pentatlo moderno é uma prova criada pelo Barão Pierre de Coubertin, fundador dos Jogos Olímpicos da era moderna, baseada na filosofia por detrás do pentatlo disputado nos Jogos Olímpicos antigos. Na Grécia Antigamente, o pentatlo era constituído por provas que pretendiam demonstrar todas as aptidões físicas. Aquando da invenção da versão moderna, Coubertin inspirou-se nos soldados da cavalaria do século XIX, que deveriam saber montar um cavalo desconhecido, disparar, esgrimir, correr e nadar.\n[…]\nNatação: 200 metros livres\n[…]\nLaser-Run (Evento Combinado): O evento combinado é a última prova do pentatlo moderno e consiste na junção do tiro esportivo com a corrida. O atleta parte da linha de chegada e corre cerca de 30 metros até o estande de tiro onde terá que executar 5 tiros certeiros no alvo correspondente ao \"7\" no tiro esportivo de pistola de ar a 10 metros (atualmente o tiro é praticado com pistolas laser).\n[…]\nA China e o Brasil obtiveram suas primeiras medalhas olímpicas do pentatlo moderno nas Olimpíadas de 2012, e a Austrália e o México nas Olimpíadas de 2016.\n[…]\nPentatlo moderno nos Jogos Olímpicos\n[…]\nCampeonato Mundial de Pentatlo Moderno\n[…]\n«Federação Internacional de Pentatlo Moderno»\n[…]\n«Confederação Brasileira de Pentatlo Moderno»\n[…]\n«COI Pentatlo Moderno»\n[…]\n«COI Pentatlo Moderno»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Pentatlo moderno",
      "descricao": "Modalidade olímpica criada por Pierre de Coubertin, que combina esgrima, natação, hipismo, tiro e corrida."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Depois de polêmicas com cavalos em Tóquio, o pentatlo moderno vai trocar o hipismo por outra prova a partir de Los Angeles 2028. Qual?",
    "resposta": "Corrida de obstáculos",
    "distratores": [
      "Escalada esportiva",
      "Ciclismo de estrada",
      "Canoagem"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Modern_pentathlon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Modern_pentathlon",
        "situacao": "ok",
        "texto": "The modern pentathlon is an Olympic multisport that consists of five events: fencing (one-touch épée followed by direct elimination), freestyle swimming, obstacle course racing, laser pistol shooting, and cross country running.\n[…]\nThe initial program of the 2028 Olympics did not include modern pentathlon, but the 141st International Olympic Committee Session in Mumbai, India, voted to approve the inclusion of the sport with its new format where obstacle racing replaces equestrian.\n[…]\nThe format of the modern pentathlon has changed frequently through the sport's history. Obstacle course racing will make its debut in the 2028 Los Angeles Olympics as part of the modern pentathlon, replacing the equestrian show jumping event at the Olympics. This shift aims to modernize the sport and make it more accessible and relatable. Described below is the format that will be used:\n[…]\nThis event was replaced by an obstacle course event after the 2024 Olympics, and horse riding is no longer part of Modern Pentathlon.\n[…]\nІn August 2023 during the 2023 UIPM Pentathlon and Laser Run World Championships, the UIPM signed a memorandum of understanding with World Obstacle to collaborate on the integration of obstacle racing into the modern pentathlon at the senior level; UIPM president Klaus Schormann stated that the federation was \"want[ing] to bring a different challenge to the Olympic Movement, to be more urban and provide something that young generations will love.\" The MoU was criticised by Pentathlon United, who questioned World Obstacle's finances (in particular, being funded solely by one person with no other commercial revenue).\n[…]\nModern pentathlon at the Summer Olympics\n[…]\nLasers make modern pentathlon more modern"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pentatlo_moderno",
        "situacao": "ok",
        "texto": "Pentatlo moderno é um desporto olímpico praticado por homens e por mulheres, individualmente ou em equipes. Compõe-se de cinco modalidades diferentes: hipismo, esgrima, natação, tiro esportivo e corrida. É proclamado vencedor aquele que obtiver o melhor desempenho geral ao somar mais pontos. Por essa variedade de esportes, o vencedor do pentatlo é considerado o atleta mais completo.\n[…]\nO pentatlo moderno é uma prova criada pelo Barão Pierre de Coubertin, fundador dos Jogos Olímpicos da era moderna, baseada na filosofia por detrás do pentatlo disputado nos Jogos Olímpicos antigos. Na Grécia Antigamente, o pentatlo era constituído por provas que pretendiam demonstrar todas as aptidões físicas. Aquando da invenção da versão moderna, Coubertin inspirou-se nos soldados da cavalaria do século XIX, que deveriam saber montar um cavalo desconhecido, disparar, esgrimir, correr e nadar.\n[…]\nHipismo: Concurso de saltos - percurso de 350 a 450 metros, com 12 a 15 obstáculos. Os cavalos são fornecidos pela organização e atribuídos por sorteio a cada atleta 20 minutos antes da competição.\n[…]\nA equitação ainda vai aparecer nos Jogos Olímpicos de Paris, em 2024, mas quatro anos depois, em Los Angeles, o pentatlo moderno já terá alguma alternativa na sua sequência.\n[…]\nLaser-Run (Evento Combinado): O evento combinado é a última prova do pentatlo moderno e consiste na junção do tiro esportivo com a corrida. O atleta parte da linha de chegada e corre cerca de 30 metros até o estande de tiro onde terá que executar 5 tiros certeiros no alvo correspondente ao \"7\" no tiro esportivo de pistola de ar a 10 metros (atualmente o tiro é praticado com pistolas laser).\n[…]\nPentatlo moderno nos Jogos Olímpicos\n[…]\nCampeonato Mundial de Pentatlo Moderno\n[…]\n«Federação Internacional de Pentatlo Moderno»\n[…]\n«Confederação Brasileira de Pentatlo Moderno»\n[…]\n«COI Pentatlo Moderno»\n[…]\n«COI Pentatlo Moderno»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Decatlo",
      "descricao": "Prova combinada do atletismo masculino com dez provas disputadas em dois dias."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Desde que o rei da Suécia elogiou Jim Thorpe em 1912, que título informal costuma acompanhar o campeão olímpico do decatlo?",
    "resposta": "Maior atleta do mundo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Decathlon",
      "https://en.wikipedia.org/wiki/Jim_Thorpe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Decathlon",
        "situacao": "ok",
        "texto": "The decathlon is a combined event in athletics consisting of 10 track and field events. The word was formed in analogy to the word \"pentathlon\", from Greek δέκα (déka 'ten') and ἆθλον (áthlon 'contest, prize'). Events are held over two consecutive days and the winners are determined by the combined performance in all. Performance is judged not by the position achieved but rather on a points system\n[…]\nTraditionally, the title of \"World's Greatest Athlete\" has been given to the person who wins the decathlon. This began when Gustav V of Sweden told Jim Thorpe, \"Sir, you are the world's greatest athlete\" after Thorpe won the decathlon at the Stockholm Olympics in 1912.\n[…]\nThe event is similar to the pentathlon held at the ancient Greek Olympics, and also similar to a competition called an \"all-around\", which was contested at the United States amateur championships in 1884. Another all-around was held at the 1904 Summer Olympics. The modern decathlon first appeared at the 1912 Games.\n[…]\nThe modern decathlon first appeared in the Olympic athletics program at the 1912 Games in Stockholm.\n[…]\nThe world decathlon under-20 record is held by Hubert Trościanka, of Poland, who scored 8514 points at the European U20 Championships in Tampere, Finland, from 7-8th August 2025. This score was also the first over the 8500 point mark.\n[…]\nThe world decathlon under-20 record using senior implements is held by Torsten Voss, of East Germany, who scored 8397 points in Erfurt, East Germany, from 6–7 July 1982. This was the last record to be ratified because it is no longer a World Athletics under-20 record event.\n[…]\n(Within a completed decathlon scoring more than 7000 points)\n[…]\nIcosathlon or double decathlon\n[…]\nDecathlon world record progression\n[…]\nList of decathlon national champions (men)\n[…]\nIAAF decathlon homepage\n[…]\nIAAF list of decathlon records in XML\n[…]\nTeam Decathlon website\n[…]\nDecathlon splits of Olympic, World and European medalists"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jim_Thorpe",
        "situacao": "ok",
        "texto": "James Francis Thorpe (Meskwaki: Wa-Tho-Huk; May 22 or 28, 1887 – March 28, 1953) was an American athlete who won Olympic gold medals and played professional football, baseball, and basketball. A citizen of the Sac and Fox Nation, he was the first Native American to win a gold medal for the United States in the Olympics.\n[…]\nConsidered one of the most versatile athletes of modern sports, Thorpe won two Olympic gold medals in the 1912 Summer Olympics (one in classic pentathlon and the other in decathlon).\n[…]\nThorpe grew up in the Sac and Fox Nation in Indian Territory (what is now the U.S. state of Oklahoma). As a youth, he attended Carlisle Indian Industrial School in Carlisle, Pennsylvania, where he was a three-time All-American for the school's football team under coach Pop Warner. After his Olympic success in 1912, which included a record score in the decathlon, Thorpe added a victory in the All-Around Championship of the Amateur Athletic Union.\n[…]\nThorpe was extremely busy in the Olympics. Along with the decathlon and pentathlon, he competed in the long jump and high jump. The first competition was the pentathlon on July 7. He won four of the five events and placed third in the javelin, an event he had not competed in before 1912. Although the pentathlon was primarily decided on place points, points were also earned for the marks achieved in the individual events. Thorpe won the gold medal.\n[…]\n1912 Olympic Decathlon gold medal\n[…]\nIn 2008, Sports Illustrated retroactively named Thorpe the Heisman Trophy winner for the 1911 and 1912 seasons\n[…]\nMallon, Bill; Widlund, Ture (2002). \"In the Matter of Jacobus Franciscus Thorpe\". The 1912 Olympic Games: results for all competitors in all events, with commentary. Results of the early modern Olympics. Jefferson, N.C: McFarland & Company. ISBN 978-0-7864-1047-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Decatlo",
        "situacao": "ok",
        "texto": "Decatlo é uma competição de atletismo composta por dez provas. Nos Jogos Olímpicos, é exclusivamente praticada por homens. O equivalente feminino desta prova é o heptatlo, com sete provas. Os atletas inscritos competem num programa de dois dias, que inclui as seguintes modalidades: 100 metros rasos; salto em distância, arremesso de peso, salto em altura, 400 metros rasos (1.º dia); 110 metros com \n[…]\nA especial importância do decatlo deve-se a que o vencedor dessa modalidade é considerado \"o atleta mais completo do mundo\", por causa do conjunto de provas que a modalidade exige, ao mesmo tempo, resistência extraordinária e o desenvolvimento harmônico de diferentes aptidões físicas.\n[…]\nEste título foi ligado historicamente ao esporte, desde que em Estocolmo 1912 o rei Gustavo V da Suécia, ao cumprimentar o norte-americano Jim Thorpe pela conquista da medalha de ouro, lhe disse: \"Você, senhor, é o maior atleta do mundo\". Ao que Thorpe, um nativo americano e um homem simples, respondeu: \"Obrigado, Rei\".\n[…]\nAlguns dos grandes nomes na história do esporte são Thomas Kiely, Jim Thorpe, Bob Mathias, Ashton Eaton, Daley Thompson, Tomáš Dvořák, Bryan Clay, Roman Šebrle e Bruce Jenner.\n[…]\nUm evento com dez modalidades chamado \"All-around\", similar ao decatlo moderno, foi disputado no Campeonato de Atletismo Amador dos Estados Unidos em 1884 e tomou uma forma consistente a partir de 1890. Várias versões de decatlo foram disputadas durante o século XIX e ele foi passou a fazer parte do programa olímpico em St. Louis 1904, como um \"All-Around Championship\". O evento foi disputado por sete atletas de duas nações e, segundo as regras da época, durava três dias.\n[…]\nO primeiro campeão olímpico da Era Moderna foi o britânico Thomas Kiely. Nesta primeira participação, o decatlo era composto por:\n[…]\nAs marcas abaixo são de acordo com o Comitê Olímpico Internacional – COI.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Olga Korbut",
      "descricao": "Ginasta soviética nascida na Bielorrússia, estrela dos Jogos Olímpicos de 1972."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Pequena e leve, a ginasta soviética Olga Korbut encantou o público em Munique 1972 e ganhou um apelido de passarinho. Qual?",
    "resposta": "Pardal de Minsk",
    "distratores": [
      "Andorinha de Kiev",
      "Beija-flor de Moscou",
      "Canário de Odessa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olga_Korbut"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olga_Korbut",
        "situacao": "ok",
        "texto": "Olga Valentinovna Korbut (born 16 May 1955) is a Belarusian retired gymnast who competed for the Soviet Union. Nicknamed the \"Sparrow from Minsk,\" she won four gold medals and two silver medals at the Summer Olympic Games, in which she competed in 1972 and 1976 for the Soviet team, and was the inaugural inductee to the International Gymnastics Hall of Fame in 1988.\n[…]\nIn 2021, Korbut was named by Carnegie Corporation of New York as an honoree of the Great Immigrants Award.\n[…]\nAfter the 1972 Olympic competition, she also met United States President Richard Nixon at the White House. About the meeting, Korbut said: \"He told me that my performance in Munich did more for reducing the political tension during the Cold War between our two countries than the embassies were able to do in five years.\" In addition to greatly publicizing gymnastics worldwide, she also contributed to a marked change in the tenor of the sport itself.\n[…]\nHer 1972 Olympic achievement earned her the BBC Overseas Sports Personality of the Year and  ABC's Wide World of Sports title of Athlete of the Year. In a UK poll conducted by Channel 4 in 2002 the public voted \"Olga Korbut charms the world\" No.46 in the list of the 100 Greatest Sporting Moments.\n[…]\nList of Olympic female gymnasts for the Soviet Union\n[…]\nKorbut, Olga; Ellen Emerson-White (1992). My Story: The Autobiography of Olga Korbut. Random House. ISBN 978-0-7126-5495-1.\n[…]\nOlga Korbut at World Gymnastics\n[…]\nOlga Korbut at the International Gymnastics Hall of Fame\n[…]\nOlga Korbut at Olympics.com\n[…]\nOlga Korbut at Olympedia\n[…]\nOlga Korbut at the National Olympic Committee of the Republic of Belarus\n[…]\nOlga Korbut at Biography.com at the Wayback Machine (archived 15 March 2018)\n[…]\nIncredible Performance From Olga Korbut 'Darling Of Munich' – Munich 1972 Olympics – The Olympic Channel\n[…]\nGymnast Olga Korbut charms the World – Faster, Higher, Stronger – BBC Two – BBC"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Olga_Korbut",
        "situacao": "ok",
        "texto": "Olga Valentinovna Korbut, em russo: Oльга Валентиновна Корбут, (Hrodna, 16 de maio de 1955) é uma ex-ginasta bielorrussa. Korbut participou mais notoriamente nos Jogos Olímpicos de 1972 em Munique onde as suas performances despertaram os olhares de todo o mundo.\n[…]\nFoi apelidada \"pardal de Minsk\", em referência à sua graciosidade e à capital da Bielorrússia.\n[…]\nAos dezessete anos, Olga Korbut transformou a ginástica em um esporte interessante para as crianças, durante suas apresentações nas Olimpíadas de 1972, em Munique. Rapidamente a ginástica — e, a seguir, outros esportes — foi encampada pelos pré-adolescentes. A ginasta media pouco mais de 1,50 m e pesava cerca de 40 kg.\n[…]\nAo encerramento das Olimpíadas, Korbut ficou famosa — seu estilo agradou o público no mundo inteiro e foi eleita a atleta do ano. Em 1973, a Associated Press também elegeu Olga como a atleta do ano — era a primeira vez em 40 anos de regime soviético. Em seguida, ela foi aos Estados Unidos visitar o presidente Richard Nixon na Casa Branca, em Washington, e o primeiro-ministro inglês. De volta à Grodno, a ginasta retomou os estudos.\n[…]\nMais tarde, acabou por divorciar-se e se tornou treinadora. Nos Jogos Olímpicos de 1996 fez parte, como dirigente, da delegação da Bielorrússia. Hoje, vive em Scottsdale, no Arizona e é treinadora do Olga Korbut Gymnastics, onde ensina dança e ginástica sob seu programa de força e condicionamento próprio. No ano 2000 naturalizou-se cidadã americana.\n[…]\nEm 2017, no contexto de dificuldades financeiras, leiloou medalhas de suas conquistas esportivas, incluindo as premiações olímpicas. A venda rendeu a Olga Korbut 173 mil euros.\n[…]\nLista de ginastas\n[…]\nFederação Internacional de Ginástica\n[…]\nOlga Korbut na Federação Internacional de Ginástica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Shaun White",
      "descricao": "Snowboarder e skatista americano, três vezes campeão olímpico no half-pipe."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Por causa da longa cabeleira ruiva que voava em suas manobras, o snowboarder Shaun White ganhou que apelido?",
    "resposta": "Tomate Voador",
    "distratores": [
      "Cenoura Voadora",
      "Raposa Ruiva",
      "Cometa Vermelho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shaun_White"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shaun_White",
        "situacao": "ok",
        "texto": "Shaun Roger White (born September 3, 1986) is an American former professional snowboarder and skateboarder. He is a five-time Olympian and a three-time Olympic gold medalist in half-pipe snowboarding. He holds the world record for the most X Games gold medals and most Olympic gold medals by a snowboarder. He has also won ten ESPY Awards throughout his career in various categories.\n[…]\nWhite has appeared in several video games and has also launched his video game franchise. He appeared in 1999's Cool Boarders 4 and 2001's Shaun Palmer's Pro Snowboarder. In 2008 he released his own video game, Shaun White Snowboarding. This was followed by a sequel, Shaun White Snowboarding: World Stage, released in 2009. A skateboarding game, Shaun White Skateboarding, was also released in 2010.\n[…]\nAfter the 2010 Winter Olympics, White created Shaun White Enterprises to consolidate his business deals. In early 2016, White purchased a minority stake in Mammoth Resorts and is now a part-owner of the Mammoth Mountain, Snow Summit, June Mountain, and Bear Mountain ski areas where he got his start in snowboarding. White took ownership of the Air + Style festival of music and snowboarding in 2014 and moved it from Austria to Los Angeles.\n[…]\nWhite launched his own active lifestyle brand named 'Whitespace' in January 2022; he announced the name of the brand on his social media. The company will eventually release a line of outerwear, snowboard hard-goods, athletic equipment, and streetwear apparel.\n[…]\nShaun White at the International Ski and Snowboard Federation\n[…]\nShaun White at Team USA (archive June 5, 2023)\n[…]\nShaun White at the X Games (archived former page)\n[…]\nShaun White at Olympics.com\n[…]\nShaun White at Olympedia\n[…]\nShaun White at InterSportStats\n[…]\nShaun White at IMDb\n[…]\nAP Winter Games Athlete Profile: Shaun White\n[…]\nShaun White Project X Private Halfpipe Video\n[…]\nShaun White Interview: Pop Magazine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shaun_White",
        "situacao": "ok",
        "texto": "Shaun Roger White (San Diego, 3 de setembro de 1986) é um snowboarder e skatista profissional estadunidense. É tricampeão olímpico do halfpipe no snowboarding.\n[…]\nEm 2002, Shaun White conquistou suas primeiras de muitas medalhas no Winter X Games, que foram as pratas no snowboard slopestyle e superpipe. Mas mesmo com bons resultados no ano, White não conseguiu se classificar para os Olimpíadas de Inverno.\n[…]\nNos X Games de 2005, White conseguiu a medalha de prata no Skate Vertical; no Winter X Games conseguiu ser tri-campeão de snowboard slopestyle.\n[…]\nNo Winter X Games X, White voltou a conquistar a medalha de ouro tanto no snowboard slopestyle quanto no snowboard superpipe.\n[…]\nEm 16 de novembro de 2008 White lançou seu primeiro videogame, Shaun White Snowboarding, na América do Norte (14 de novembro de 2008 na Europa). Foi o vigésimo jogo mais vendido de dezembro de 2008 nos Estados Unidos.\n[…]\nEsta segunda corrida resultou em uma pontuação recorde de 48,4 (50 é a pontuação máxima) ampliando sua margem de vitória. Seu concorrente mais próximo, ganhou a prata com um total de 45,0 pontos, 3,4 atrás de White.\n[…]\nShaun White se tornou tricampeão olímpico conquistando a medalha de ouro no halfpipe dos Jogos Olímpicos de Inverno de PyeongChang.\n[…]\nShaun White detém o recorde de maior pontuação no halfpipe masculino nos Jogos Olímpicos de Inverno. Em 2006, seus 46,8 pontos superou o recorde anterior de Ross Powers de 46,1 de 2002. Em 2010, durante os Jogos Olímpicos de Inverno em Vancouver, ele melhorou seu próprio recorde, com 48,4 pontos na sua corrida final.\n[…]\n«Perfil de Shaun White» (em inglês). arquivado do sítio Sports-Reference.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Eddie the Eagle",
      "descricao": "Michael Edwards, saltador de esqui britânico que ficou em último em Calgary 1988 e virou ídolo popular."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Míope e sem patrocínio, o britânico Michael Edwards ficou em último no salto de esqui de Calgary 1988, mas virou ídolo. Por que apelido ficou famoso?",
    "resposta": "Eddie, a Águia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eddie_the_Eagle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eddie_the_Eagle",
        "situacao": "ok",
        "texto": "Michael David Edwards (born 5 December 1963), better known as Eddie the Eagle or Eddie Edwards, is an English ski jumper and Olympian who in 1988 became the first competitor to represent Great Britain in Olympic ski jumping. Despite finishing last in the normal hill and large hill events, he held the British ski jumping record from 1988 to 2001. He also took part in amateur speed skiing, running a\n[…]\nFollowing the widespread attention that Edwards received in Calgary shortly after the Olympics finished, the entry requirements were made stricter, making it nearly impossible for anyone to follow his example: the International Olympic Committee (IOC) instituted what became known as the Eddie the Eagle Rule, which requires Olympic hopefuls to compete in international events and be placed in the top 30 per cent or the top 50 competitors, whichever is fewer.\n[…]\nEdwards released a book (and a video) called On the Piste.\n[…]\nIn March 2015, it was announced that 20th Century Fox had acquired the film, with Taron Egerton and Hugh Jackman starring and Dexter Fletcher directing, from a screenplay by Sean Macaulay and Simon Kelton. Egerton would portray the adult Eddie \"The Eagle\" Edwards, Tom and Jack Costello younger versions of Edwards, while Jackman would portray his coach, Bronson Peary. It was later announced that Christopher Walken had also joined the film, portraying the role of Bronson Peary's mentor.\n[…]\nEdwards, Eddie (2016). Eddie the Eagle: My Story. Graymalkin Media. ISBN 9781631680649.\n[…]\nEddie Edwards at the International Ski and Snowboard Federation\n[…]\nEddie Edwards at Team GB\n[…]\nEddie Edwards at Olympedia\n[…]\nMichael Edwards at Olympics.com\n[…]\nEddie 'The Eagle' Edwards at IMDb\n[…]\nBBC Gloucestershire interview with Eddie \"The Eagle\" Edwards February 2008\n[…]\nEddie 'The Eagle' Edwards Speaking Profile and Video\n[…]\nEddie The Eagle 1991 Charity Ski Jump"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Curling",
      "descricao": "Esporte de inverno em que se desliza uma pedra de granito no gelo até um alvo."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "As pedras usadas no curling olímpico costumam ser feitas de um granito especial, extraído de uma pequena ilha desabitada da Escócia. Que ilha?",
    "resposta": "Ailsa Craig",
    "distratores": [
      "Skye",
      "Iona",
      "Arran"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ailsa_Craig",
      "https://en.wikipedia.org/wiki/Curling"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ailsa_Craig",
        "situacao": "ok",
        "texto": "Ailsa Craig (; Scottish Gaelic: Creag Ealasaid) is an island of 99 ha (1 km2; 245 acres) in the outer Firth of Clyde, 16 km (8+1⁄2 nmi) west of mainland Scotland. The island's microgranite has long been quarried to make curling stones. The now-uninhabited island comprises an eroded magmatic pluton formed during the same period of igneous activity as magmatic rocks on the nearby Isle of Arran.\n[…]\nThe Ailsa Craig Granite Company was never a financially sound business and effectively closed in 1928. The course of the mineral line is still evident near the quarries as a linear embankment that ends below Kennedy's Nag. Various artefacts of the quarry enterprise remain, including concrete blocks at Kennedy's Nag and steel and concrete remnants of the stone crusher near the south foghorn.\n[…]\nAilsa Craig produced two types of granite for curling, Blue Hone and Ailsa Craig Common Green. Blue Hone, which is unique to Ailsa Craig, has very low water absorption, which prevents the action of repeatedly freezing water from eroding the stone. In the past, most curling stones were made from Blue Hone but the quarry is restricted by environmental conditions that exclude blasting.\n[…]\nKays of Scotland has been making curling stones since 1851 and has the exclusive rights to the Ailsa Craig granite, granted by the Marquess of Ailsa. A \"harvest\" of Ailsa Craig granite by Kays took place in 2013, after a hiatus of 11 years; 2,000 tonnes were harvested, sufficient to fill anticipated orders until at least 2020. A subsequent harvest was held in the winter of 2020.\n[…]\nThe curling stones produced by Kays of Scotland with Ailsa Craig granite are the only curling stones approved for use in the Winter Olympic Games.\n[…]\nAilsa Craig tomato\n[…]\nAilsa Craig Archived 6 March 2021 at the Wayback Machine\n[…]\nAilsa Craig, 1868 at the Historical Society of Philadelphia Archived 17 April 2016 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Curling",
        "situacao": "ok",
        "texto": "Curling is a sport in which players slide stones on a sheet of ice towards a target area that is segmented into four concentric circles. It is related to bowls, boules, and shuffleboard. Two teams, each with four players, take turns sliding heavy, polished granite stones, also called rocks, across the ice curling sheet towards the house, a circular target marked on the ice. Each team has eight sto\n[…]\nThe granite for the stones comes from two sources: Ailsa Craig, an island located in the Firth of Clyde off the Ayrshire coast of Scotland, and the Trefor Granite Quarry, north of the Llŷn Peninsula, Gwynedd in Wales. These locations provide four variations in colour known as Ailsa Craig Common Green, Ailsa Craig Blue Hone, Blue Trefor and Red Trefor.\n[…]\nBlue Hone has very low water absorption, which prevents the action of repeatedly freezing water from eroding the stone. While the comparably lesser quality Ailsa Craig Common Green granite falls off naturally and can just be picked from the site, Blue Hone requires dislodging from the cliff face. In the past, most curling stones were made from Blue Hone, but the island is now a wildlife reserve, and the quarry is restricted by environmental conditions that exclude blasting.\n[…]\nKays of Scotland has been making curling stones in Mauchline, Ayrshire, since 1851 and has the exclusive rights to the Ailsa Craig granite, granted by the Marquess of Ailsa, whose family has owned the island since 1560. According to the 1881 Census, Andrew Kay employed 30 people in his curling stone factory in Mauchline. The most recent harvest of Ailsa Craig granite took place in 2020, totalling around 3,000 tons.\n[…]\nCurling is played in many countries, including Canada, the United Kingdom (especially Scotland), the United States, Norway, Sweden, Switzerland, Denmark, Finland, and Japan, all of which compete in the world championships.\n[…]\nWorld Curling Federation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ailsa_Craig",
        "situacao": "ok",
        "texto": "Ailsa Craig (irlandês: Creag Ealasaid que significa \"rocha de Elisabeth\") é uma ilha da Escócia situada no Fiorde de Clyde. De forma oval, mede, aproximadamente, 3,2 km de circunferência e alcança uma altura de 338 m (The Cairn). A ilha encontra-se desabitada.\n[…]\nAilsa Craig encontra-se a 16 km ao oeste de Girvan, no distrito de South Ayrshire. A ilha é um antigo vulcão extinto.\n[…]\nUm farol encontra-se à costa leste, em frente à ilha da Grã Bretanha, no cabo de Foreland Point. O farol funciona de maneira automatizada desde 1970.\n[…]\n(em inglês) Fotos de Ailsa Craig\n[…]\n(em inglês) Panoramas virtuais de Ailsa Craig\n[…]\n(em inglês) Northern Lighthouse Board - Farol de Ailsa Craig",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Bandeira olímpica",
      "descricao": "Bandeira branca com os cinco anéis olímpicos entrelaçados, hasteada nas cerimônias dos Jogos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A bandeira olímpica hasteada em Antuérpia 1920 sumiu e só voltou ao Comitê Olímpico Internacional muitas décadas depois. Por que ela tinha desaparecido?",
    "resposta": "Um atleta americano a roubou do mastro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_flag",
      "https://en.wikipedia.org/wiki/Hal_Haig_Prieste"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_flag",
        "situacao": "ok",
        "texto": "The International Olympic Committee (IOC) uses icons, flags, and symbols to represent and enhance the Olympic Games. These symbols include those commonly used during Olympic competitions such as the flame, fanfare, and theme as well as those used both during and outside competition, such as the Olympic flag.\n[…]\nFor this reason, he ordered the construction of a milestone with the Olympic rings carved in the sides and that a torchbearer should carry the flame along with an escort of three others from there to Berlin. The ceremony was celebrated, but the stone was never removed. Later, American authors Lynn and Gray Poole, when visiting Delphi in the late 1950s, saw the stone and reported in their History of the Ancient Games that the Olympic rings design came from ancient Greece.\n[…]\nThe 1949–50 edition of the IOC's \"Green Booklet\" stated that each colour corresponded to a particular continent except for Antarctica: \"blue for Europe, yellow for Asia, black for Africa, green for Australia, and red for North America and South America. This assertion was reversed in 1951 because there was no evidence that Coubertin had intended it: \"at the very most he might perhaps have admitted it afterwards\".\n[…]\nWhile the flag is recognized by the IOC, critics and historians note that the returned flag is not the one that was used in the 1920 opening ceremony, as the original flag was much larger than the one returned by Prieste.\n[…]\n\"Bugler's Dream\": Written in 1958 by Leo Arnaud as part of his Charge Suite. the theme is often thought of by Americans as the \"Olympic Theme\" due to its usage in television coverage by ABC and NBC, starting with the 1964 Olympics in Tokyo.\n[…]\nThe Nairobi Treaty provides for a framework of international intellectual property protection of the licensure of all Olympic symbols."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hal_Haig_Prieste",
        "situacao": "ok",
        "texto": "Hal Haig \"Harry\" Prieste (November 23, 1896 – April 19, 2001) was an American athlete who participated in the 1920 Summer Olympics in Antwerp as a diver.\n[…]\nHe was born Haig Prieste in Fresno, California, to Armenian immigrant parents. Their original surname was Keshishian. \"Haig\" is the name of the progenitor of the Armenians. Prieste first took \"Harry\" as his American name, but later switched to \"Hal.\"\n[…]\nHe won a bronze medal in platform diving as a member of the 1920 US Olympic team. He also competed in the 1920 plain high diving event, but he was eliminated in the first round.\n[…]\nHe is known for taking the original five-interlocking-ring Olympic flag as a prank at the 1920 Summer Olympics hosted by the city of Antwerp, Belgium. At the end of the Games, the flag could not be found. In 1997, at a banquet hosted by the US Olympic Committee, a reporter was interviewing him and the reporter mentioned that the IOC had not been able to find out what had happened to the original Olympic flag."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/An%C3%A9is_ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "Os anéis olímpicos são um símbolo dos Jogos Olímpicos composto por cinco arcos entrelaçados, com as cores azul, amarelo, preto, verde e vermelho sobre um fundo branco. Este foi originalmente concebido em 1913 pelo Barão Pierre de Coubertin, fundador dos Jogos Olímpicos modernos.\n[…]\nO emblema foi escolhido para ilustrar e representar o Congresso mundial de 1914: cinco anéis entrelaçados com cores diferentes - azul, amarelo, preto, verde e vermelho - são colocados no campo em branco do papel. Esses cinco anéis representam as cinco partes do mundo, que agora são conquistados para Olimpismo e dispostas a aceitar uma concorrência saudável.\n[…]\nAs cores utilizadas nos cinco anéis da bandeira foram escolhidas e representadas por Pierre de Coubertin devido à frequência em que aparecem nas bandeiras das diversas nações no mundo. Pelo menos uma das demais cores está presente em cada bandeira, dessa forma, integra todos os países, fornecendo um sentido universal para as Olimpíadas.\n[…]\nHá uma versão de que cada anel representaria um continente (sendo o anel azul correspondente à Europa, o anel amarelo à Ásia, o preto à África, o verde à Oceania e o vermelho à América), porém essa versão é oficialmente tida como equivocada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Hino olímpico",
      "descricao": "Composição grega tocada pela primeira vez nos Jogos de Atenas 1896 e adotada como hino oficial do movimento olímpico."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O hino olímpico tem música de Spyros Samaras. A letra, em grego, foi escrita por que poeta?",
    "resposta": "Kostis Palamas",
    "distratores": [
      "Constantino Cavafis",
      "Nikos Kazantzakis",
      "Odysseas Elytis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_Hymn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_Hymn",
        "situacao": "ok",
        "texto": "The Olympic Hymn (Greek: Ολυμπιακός Ύμνος, pronounced [oli(m)bi̯aˈkos ˈimnos]), also known as the Olympic Anthem, is a choral cantata by opera composer Spyridon Samaras (1861–1917), with Demotic Greek lyrics by Greek poet Kostis Palamas. Both poet and composer were the choice of the Greek Demetrius Vikelas, who was the first President of the International Olympic Committee.\n[…]\nThe anthem by Samaras and Palamas was declared the official Olympic Anthem by the International Olympic Committee in 1958 at the 54th Session of the IOC in Tokyo, Japan. The anthem was performed in English at the 1960 Winter Olympics in Squaw Valley and since then it has been played at each Olympic Games: during the opening ceremony when the Olympic flag is hoisted, and during the closing ceremony when the Olympic flag is lowered."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_Ol%C3%ADmpico",
        "situacao": "ok",
        "texto": "O Hino Olímpico (Grego: Ολυμπιακός Ύμνος) foi composto pelo grego Spyridon Samaras, com letra do poeta romano  Kostís Palamás em 1800. O hino foi adotado pelo Comitê Olímpico Internacional (COI) em 1958. É executado durante a Cerimônia de Abertura de cada edição, quando a Bandeira Olímpica é hasteada, e na Cerimônia de Encerramento, quando ela é arriada.\n[…]\nO hino começou a ser cantado em grego, mas em várias edições foi traduzido para o idioma do país anfitrião. Em Sydney 2000, o hino voltou a ser cantado em grego na Cerimônia de Abertura, o que foi repetido em  Pequim 2008.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Revezamento da tocha olímpica",
      "descricao": "Percurso em que a chama olímpica é levada de Olímpia até a cidade-sede dos Jogos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A caminho de Sydney 2000, a tocha olímpica foi levada debaixo d'água, com uma chama especial, num famoso ponto da costa australiana. Qual?",
    "resposta": "Grande Barreira de Coral",
    "fonte": [
      "https://en.wikipedia.org/wiki/2000_Summer_Olympics_torch_relay"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2000_Summer_Olympics_torch_relay",
        "situacao": "ok",
        "texto": "The 2000 Summer Olympics torch relay was the transferral of    the Olympic Flame to Sydney, Australia, that built up to the 2000 Summer Olympics. The torch travelled to various island nations as part of a tour of Oceania before beginning an extensive journey around Australia. For the first time the Flame was taken underwater, with a special flare-like torch taken on a dive down to the Great Barrie\n[…]\nThe design of the torch reflected three famed areas of Australian culture: the boomerang, the Sydney Opera House, and the waters of the Pacific Ocean. The concept also reflected the elements of earth, fire, and water. This was achieved across three layers of the torch. The first, inner layer contains the fuel system and combustor, the second contains the fuel canister, and the outer layer is a specially textured aluminium shell.\n[…]\nA total of 13,400 torch-bearers were involved in the relay. The Greek leg of the route saw 800 people carry the torch, while 1,500 people were involved across Oceania. As part of the vast traversal of Australia, 11,000 people carried the torch within the country. Anna Booth was the Australian who chaired the 2000 Summer Olympics torch relay committee and she brought the torch to Australian soil on 8 June.\n[…]\nThe torch was brought off the plane by Anna Booth who chaired the 2000 Summer Olympics Torch Relay Committee. She met Governor-General, Sir William Deane, at Uluru and that began the torch's journey in Australia on 8 June. Booth later noted that this was the greatest honour of her life.\n[…]\nIt was attended by Ian Thorpe, Louise Sauvage and local Sydneysiders who were volunteers during the games. Freeman sent a video message.\n[…]\nCahill, J. (1999) Running Towards Sydney 2000; A History of the Olympic Torch Relay, Walla Walla Press, Sydney\n[…]\nEntry for the Olympic Cauldron at Sydney Olympic Park at the Australian Office of Environment & Heritage"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Massacre de Munique",
      "descricao": "Ataque a atletas israelenses durante os Jogos Olímpicos de Munique 1972."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois do ataque aos atletas israelenses em Munique 1972, o serviço secreto de Israel montou uma operação para caçar os responsáveis. Como ela ficou conhecida?",
    "resposta": "Operação Ira de Deus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Operation_Wrath_of_God"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Operation_Wrath_of_God",
        "situacao": "ok",
        "texto": "Operation Bayonet (also nicknamed Operation Wrath of God) was a covert operation directed by Mossad to assassinate individuals they accused of being involved in the 1972 Munich massacre. The targets were members of the Palestinian armed militant group Black September and operatives of the Palestine Liberation Organisation (PLO). Authorised by Israeli Prime Minister Golda Meir in the autumn of 1972\n[…]\nTwo days after the Munich massacre at the 1972 Summer Olympics, Israel retaliated by bombing ten PLO bases in Syria and Lebanon. Prime Minister Golda Meir created Committee X, a small group of government officials tasked with formulating an Israeli response, with herself and Defense Minister Moshe Dayan at the head. She also appointed General Aharon Yariv as her Advisor on Counterterrorism; he, along with Mossad Director Zvi Zamir, took the principal role in directing the ensuing operation.\n[…]\nSimilar to the Mossad letter-bomb campaign, dozens of letter bombs were sent from Amsterdam to Israeli diplomatic posts around the world in September and October 1972. One such attack killed Ami Shachori, an Israeli Agricultural Counsellor in Britain.\n[…]\nAbu Daoud, one of the main planners of the Munich massacre, said in interviews before the release of the movie Munich that  \"I returned to Ramallah in 1995, and Israel knew that I was the planner of the Munich operation.\" The leader of Black September, Abu Iyad, was also not killed by Israel, although he was assassinated in 1991 in Tunis by the Abu Nidal Organization.\n[…]\nFormer Mossad chief Zvi Zamir countered this in an interview in 2006, when he said that Israel was more interested in striking the \"infrastructure of the terrorist organizations in Europe\" than those directly responsible for Munich. \"We had no choice but to start with preventive measures.\"\n[…]\nOperation Nemesis, conducted by Armenians in the 1920s in response to the Armenian genocide."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_C%C3%B3lera_de_Deus",
        "situacao": "ok",
        "texto": "Operação Cólera de Deus ou Ira de Deus (em hebraico:  מבצע זעם האל Mivtza Za'am Ha'el) foi uma operação militar de espionagem atribuída ao serviço de inteligência israelita, o Mossad, cujo objetivo era eliminar todos os responsáveis do Massacre de Munique, ocorrido durante os Jogos Olímpicos de Verão de 1972.\n[…]\nOs alvos da operação incluíam membros do grupo terrorista palestiniano Setembro Negro, responsável pelo ataque de Munique, e membros da Organização para a Libertação da Palestina (OLP), também acusada de estar envolvida. Com o aval da primeira-ministra israelita Golda Meir, a operação começou no outono de 1972 e pode ter continuado por mais de 20 anos.\n[…]\nDurante esse tempo, unidades secretas de assassinos israelitas mataram dezenas de conspiradores suspeitos em toda a Europa, incluindo o assassinato acidental de um garçom em Lillehammer, na Noruega, que ficou conhecido como o caso Lillehammer.\n[…]\nHouve também muitas críticas a Israel sobre a sua escolha de alvos, as táticas de assassínio e a sua eficácia. Devido à natureza secreta da operação, alguns detalhes são verificáveis para além de uma única fonte, incluindo a história de um israelita que afirma ter liderado um esquadrão da morte.\n[…]\nMotivado pelo assassinato de onze atletas da delegação israelense nos Jogos Olímpicos de 1972, na Alemanha, pelo grupo nacionalista palestino Setembro Negro, o governo israelense procurou adotar medidas para prevenir e  neutralizar possíveis ataques futuros.\n[…]\nDesde o início, o comitê chegou a conclusão de que, para deter ataques posteriores, seria necessário deter todos aqueles que organizaram e deram apoio aos ataques em Munique, por terem dado notoriedade a tais ações. Pressionada pela opinião pública e por membros do Parlamento de Israel, a primeira-ministra aprovou as ações.\n[…]\nMassacre de Munique",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Boicote aos Jogos de Moscou 1980",
      "descricao": "Boicote liderado pelos Estados Unidos aos Jogos Olímpicos de Verão de 1980, em Moscou."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Quatro anos depois do boicote liderado pelos americanos a Moscou 1980, a União Soviética e seus aliados deram o troco boicotando que edição dos Jogos?",
    "resposta": "Los Angeles 1984",
    "fonte": [
      "https://en.wikipedia.org/wiki/1984_Summer_Olympics_boycott"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1984_Summer_Olympics_boycott",
        "situacao": "ok",
        "texto": "The boycott of the 1984 Summer Olympics in Los Angeles followed four years after the American-led boycott of the 1980 Summer Olympics in Moscow. The boycott involved nineteen countries: fifteen from the Eastern Bloc led by the Soviet Union, which initiated the boycott on May 8, 1984; and four non‑aligned countries which boycotted on their own initiatives.\n[…]\nSince the announcement by U.S. president Carter of the boycott of the Olympic Games in Moscow in 1980, there was fear from United States officials that a reciprocal boycott could occur during the 1984 Games, scheduled for Los Angeles. The Soviets for their part gave sparsely few indications that this would happen, and indeed, from formalized talks which occurred over the course of three years, indicators seemed to point towards Soviet participation.\n[…]\nTheir faltering relations did not improve with the ascension of Konstantin Chernenko to the post of General Secretary of the Soviet Union in February 1984. Chernenko was a close acolyte of Leonid Brezhnev and therefore predisposed to avoiding Los Angeles due to the 1980 boycott. American reticence in dealing with anti-Soviet activists coupled with American mishandling of the Soviets' Olympic attaché, incentivized the Soviets enough in their view to justify boycotting the Games.\n[…]\nUpper Volta changed its official name to Burkina Faso on August 4, 1984.\n[…]\nSoviet Union\n[…]\nABC News Special Report on YouTube ABC News's Richard Threlkeld and Bob Zelnick report on the Soviet boycott announcement, May 8, 1984\n[…]\nNBC Nightly News with Connie Chung + CBS Morning News with Diane Sawyer on YouTube Two American news reports—First on the boycotting Soviets' media campaign highlighting a \"dangerous\" Los Angeles, aired July 29, 1984. Second on threatening letters reportedly forged by the KGB and sent to Asian and African NOC's, aired July 10, 1984."
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Jim Thorpe",
      "descricao": "Atleta americano, campeão do pentatlo e do decatlo nos Jogos de Estocolmo 1912."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "De origem indígena, o campeão olímpico Jim Thorpe recebeu da mãe o nome Wa-Tho-Huk. O que esse nome significa?",
    "resposta": "Caminho Brilhante",
    "distratores": [
      "Águia Veloz",
      "Trovão da Planície",
      "Cavalo Ligeiro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jim_Thorpe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jim_Thorpe",
        "situacao": "ok",
        "texto": "James Francis Thorpe (Meskwaki: Wa-Tho-Huk; May 22 or 28, 1887 – March 28, 1953) was an American athlete who won Olympic gold medals and played professional football, baseball, and basketball. A citizen of the Sac and Fox Nation, he was the first Native American to win a gold medal for the United States in the Olympics.\n[…]\nStatue of Jim Thorpe\n[…]\nThorpe's body was initially intended to be buried in the Garden Grove Cemetery in Oklahoma. A committee raised $2,500 to have his body transported from California to Shawnee. On April 12, 1953, on a farm in Oklahoma, Sac and Fox Thunder clan members, along with indigenous members of Thorpe's family, met to carry out a traditional Sac burial ceremony. During this ceremony, Thorpe's third wife, Patricia, accompanied by law enforcement, interrupted it, and Thorpe's body was removed.\n[…]\nMaraniss, David (2022). Path Lit by Lightning: The Life of Jim Thorpe (1st ed.). New York: Simon & Schuster. ISBN 978-1-4767-4841-2.\n[…]\nWheeler, Robert W. (1979). Jim Thorpe, World's Greatest Athlete. University of Oklahoma Press. ISBN 978-0-80-611745-4.\n[…]\nMallon, Bill; Widlund, Ture (2002). \"In the Matter of Jacobus Franciscus Thorpe\". The 1912 Olympic Games: results for all competitors in all events, with commentary. Results of the early modern Olympics. Jefferson, N.C: McFarland & Company. ISBN 978-0-7864-1047-7.\n[…]\nNewcombe, Jack (1975). The best of the athletic boys: The white man's impact on Jim Thorpe (1st ed.). Garden City, N.Y: Doubleday. ISBN 978-0-385-06186-5.\n[…]\nUpdyke, Rosemary K. (December 1997). Jim Thorpe: The Legend Remembered. Gretna, Louisiana: Pelican Publishing Company. ISBN 978-1-56-554539-7.\n[…]\nJim Thorpe at the Team USA Hall of Fame\n[…]\nJim Thorpe at Olympics.com\n[…]\nJim Thorpe at Olympedia\n[…]\nJim Thorpe at the College Football Hall of Fame\n[…]\nJim Thorpe at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jim_Thorpe",
        "situacao": "ok",
        "texto": "Jacobus Franciscus Thorpe, conhecido como Jim Thorpe (Prague, 28 de maio de 1887 – Lomita, 28 de março de 1953), foi um atleta norte-americano da primeira metade do Século XX.\n[…]\nJim Thorpe nasceu no território do atual estado do Oklahoma em território indígena, sendo que seu nome entre o povo indígena, mais precisamente na Língua Kichapooé, é Wha-Tho-Huk — Caminho Iluminado — devido ao fato de que no momento de seu nascimento, um raio de sol iluminava o lugar em que ele se encontrava. Seu pai, Hiram Thorpe, era filho de uma índia e um irlandês. Sua mãe, Charlotte Vieux, igualmente descendente de índia e um francês.\n[…]\nTornou-se campeão olímpico do pentatlo e decatlo em 1912, foi recebido com festa em seu país, desfilando em carro aberto pela Broadway. Entretanto, por receber dinheiro pelas disputas das partidas no beisebol, foi considerado um atleta à época como profissional, algo proibido entre os atletas olímpicos, essencialmente amadores, fato que culminou com a perda de suas medalhas. Na sequência, Thorpe acaba por assinar um contrato de cinco mil dólares para tornar-se a maior estrela do New York Giants.\n[…]\nDepois do término de sua carreira profissional, Thorpe encontrou diversos obstáculos para estabelecer-se em alguma profissão fora do esporte, em 1929, devido a grande depressão, a sua situação piorou ainda mais, não conseguia manter-se por um longo período em nenhum emprego. Por um período de sua vida atuou em vários filmes no elenco de apoio, sempre em papéis indígenas.\n[…]\nLista dos campeões olímpicos de atletismo\n[…]\n«Jim Thorpe Association» (em inglês) (em inglês)\n[…]\nJim Thorpe's U.S. Olympic Team bio(em inglês)\n[…]\nJim Thorpe no IMDB",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Paavo Nurmi",
      "descricao": "Fundista finlandês, nove vezes campeão olímpico nos Jogos de 1920, 1924 e 1928."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O fundista finlandês Paavo Nurmi ficou famoso por correr carregando na mão um objeto que o ajudava a controlar o ritmo. Que objeto?",
    "resposta": "Um cronômetro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Paavo_Nurmi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paavo_Nurmi",
        "situacao": "ok",
        "texto": "Paavo Johannes Nurmi (Finnish pronunciation: [ˈpɑːʋo ˈnurmi] ; 13 June 1897 – 2 October 1973) was a Finnish middle-distance and long-distance runner. He was called the \"Flying Finn\" because he dominated distance running in the 1920s. Nurmi set 22 official world records at distances between 1,500 metres and 20 kilometres, and won nine gold and three silver medals in his 12 events in the Summer Olym\n[…]\nBoken om Nurmi (The Book about Nurmi), released in Sweden in 1925, was the first biographical book on a Finnish sportsman. Finnish astronomer Yrjö Väisälä named the main belt asteroid 1740 Paavo Nurmi after Nurmi in 1939, while Finnair named its first DC-8 Paavo Nurmi in 1969. Nurmi's former rival Ville Ritola boarded the plane when he moved back to Finland in 1970.\n[…]\nPaavo Nurmi Marathon, held annually since 1969, is the oldest marathon in Wisconsin and the second-oldest in the American Midwest. In Finland, another marathon bearing the name has been held in Nurmi's hometown of Turku since 1992, along with the athletics competition Paavo Nurmi Games that was started in 1957. Finlandia University, an American college with Finnish roots, named their athletic center after Nurmi.\n[…]\nA ten-mark bill featuring a portrait of Nurmi was issued by the Bank of Finland in 1987. The other revised bills honored architect Alvar Aalto, composer Jean Sibelius, Enlightenment thinker Anders Chydenius and author Elias Lönnrot, respectively. The Nurmi bill was replaced by a new 20-mark note featuring Väinö Linna in 1993. In 1997, a historic stadium in Turku was renamed the Paavo Nurmi Stadium.\n[…]\nRaevuori, Antero (1997). Paavo Nurmi, juoksijoiden kuningas (in Finnish) (2nd ed.). WSOY. ISBN 978-9510218501.\n[…]\nMedia related to Paavo Nurmi at Wikimedia Commons\n[…]\nPaavo Nurmi at World Athletics\n[…]\nPaavo Nurmi at Olympics.com\n[…]\nPaavo Nurmi at Olympedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paavo_Nurmi",
        "situacao": "ok",
        "texto": "Paavo Nurmi (Turku, 13 de junho de 1897 — Helsinque, 2 de outubro de 1973) foi um corredor finlandês e um dos maiores atletas de todos os tempos. Em 2012, foi imortalizado no Hall da Fama do Atletismo, criado no mesmo ano como parte das celebrações pelo centenário da IAAF.\n[…]\nNurmi, também conhecido como Homem Relógio– por sua mania de correr com um relógio na mão controlando seu ritmo –  fez parte dos chamados Finlandeses Voadores, termo com que ele e seus compatriotas Hannes Kolehmainen, Ville Ritola e outros, eram designados nos anos 1920, pelas suas conquistas no atletismo, quando dominaram todas as provas de meio-fundo e de longa distância nos Jogos Olímpicos e torneios da época.\n[…]\nDurante este período, Paavo Nurmi foi o maior corredor de meia e longa distância do mundo, quebrando diversos recordes mundiais entre os 1500 m e os 20 quilômetros, conquistando nove medalhas de ouro em Jogos Olímpicos, o que o coloca – ao lado dos americanos Michael Phelps, Carl Lewis e Mark Spitz, do Jamaicano Usain Bolt e da russa Larissa Latynina – como um dos maiores ganhadores de medalhas de ouro da história olímpica.\n[…]\nHerói nacional da Finlândia, Nurmi causou um dos momentos mais emocionantes dos Jogos Olímpicos de Helsinque, na sua pátria, em 1952, ao entrar no estádio carregando a tocha olímpica. Quando morreu, aos 76 anos de idade,  teve um enterro com honras de Estado.\n[…]\nMaila Nurmi\n[…]\nBiografia em urheilumuseo.org:PAAVO NURMI'S HOME[ligação inativa] (inglês e finlandês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Carl Lewis",
      "descricao": "Atleta americano, campeão de quatro provas nos Jogos de Los Angeles 1984."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Nove vezes campeão olímpico na velocidade e no salto em distância, o americano Carl Lewis ganhou no Brasil que apelido?",
    "resposta": "Filho do Vento",
    "distratores": [
      "Gazela Negra",
      "Raio Negro",
      "Bala de Prata"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carl_Lewis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carl_Lewis",
        "situacao": "ok",
        "texto": "Willian Frederick Carlton 'Carl' Lewis Embaixador(a) da boa vontade da FAO (Birmingham, 1 de julho de 1961), é um ex-atleta dos Estados Unidos que ganhou dez medalhas olímpicas, nove das quais de ouro, e dez medalhas nos campeonatos mundiais de atletismo, oito das quais de ouro, em uma carreira que se estendeu de 1979, quando ele alcançou uma posição na classificação mundial, até 1996, quando ele \n[…]\nLewis foi um velocista que liderou o ranking mundial nos 100 e 200 metros rasos, e eventos de salto em distância de 1981 ao início de 1990. Foi nomeado Atleta do Ano pela Track and Field News em 1982, 1983 e 1984. Estabeleceu recordes mundiais nos 100m, 4 por 100 metros, e 4 por 200 metros. Suas 65 vitórias no salto em distância, durante 10 anos consecutivos, são um dos maiores períodos de invencibilidade do atletismo mundial.\n[…]\nNuma prova histórica do salto em distância contra Mike Powell em Tóquio, no Campeonato Mundial de Atletismo de 1991,  chegou a saltar a marca de 8,91m, que não valeria como recorde mundial apenas por causa do vento acima de 2,0 m/s (logo depois deste salto, Mike Powell bateu o recorde mundial com 8,95 m). Ainda assim, Carl Lewis detém até hoje a 3ª melhor marca da história da prova, 8,87 m.\n[…]\nAs realizações de sua vida renderam-lhe inúmeros prêmios, sendo inclusive eleito o \"Esportista do Século\" pelo Comitê Olímpico Internacional e nomeado \"Olympian of the Century\" pela revista esportiva americana Sports Illustrated.\n[…]\nEm 2003, o jornal \"The Orange County Register\" noticiou que Carl Lewis não poderia ter disputado os Jogos de Seul 1988, por ter sido flagrado no exame antidoping feito numa seletiva dois meses antes. Seu exame apontou um estimulante achado em antigripais, proibido pelo Comitê Olímpico Internacional. O jornal publicou uma carta em que Lewis recebeu só uma advertência do Comitê Olímpico dos Estados Unidos (USOC).\n[…]\nCarl Lewis na IAAF"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Florence Griffith-Joyner",
      "descricao": "Velocista americana, detentora dos recordes mundiais dos 100 e 200 metros, de 1988."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Além dos macacões ousados, com uma perna só, que detalhe do visual tornava a velocista Flo-Jo inconfundível nas pistas de Seul 1988?",
    "resposta": "Unhas enormes e decoradas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Florence_Griffith_Joyner"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Florence_Griffith_Joyner",
        "situacao": "ok",
        "texto": "Florence Delorez Griffith Joyner (née Griffith; December 21, 1959 – September 21, 1998), also known as Flo-Jo, was an American track and field athlete who set world records in the 100 m and 200 m in 1988. During the late 1980s, she became a popular figure due to both her record-setting athleticism and eclectic personal style.\n[…]\nSullivan Award of 1988 as the top amateur athlete in the United States. Griffith Joyner also won the 1988 World Athletics Award for women.\n[…]\nUSA Track & Field inducted her into its Hall of Fame in 1995. In 2000, the 102nd Street School in Los Angeles was renamed Florence Griffith Joyner Elementary School. Griffith Joyner had attended the school as a child. The city of Mission Viejo dedicated a park at the entrance to her neighborhood in her honor. Griffith Joyner was also an artist and painter. Her work has been on display as part the Art of The Olympians (AOTO).\n[…]\nFlorence Griffith Joyner at World Athletics\n[…]\nFlorence Griffith Joyner at the USATF Hall of Fame (archived)\n[…]\nFlorence Griffith Joyner at the Team USA Hall of Fame (archive July 20, 2023)\n[…]\nFlorence Griffith Joyner at Olympics.com\n[…]\nFlorence Griffith Joyner at IMDb\n[…]\nFlorence Griffith Joyner at Find a Grave\n[…]\n\"10.49 sec - Florence Griffith-Joyner\". 100m Women's World Records. Track and Field Video. Indianapolis: SprintIC. July 16, 1988. Archived from the original (video) on September 27, 2007. Retrieved April 4, 2007.\n[…]\n\"21.34 sec - Florence Griffith-Joyner\". 200m Women's World Records. Track and Field Video. Seoul: SprintIC. September 29, 1988. Archived from the original (video) on September 27, 2007. Retrieved April 4, 2007.\n[…]\nFriend, Tom (August 26, 2009). \"Dream Chaser\". ESPN. Outside the Lines. Al Joyner feels the presence of Florence Griffith 25 years after Olympic glory. Now, in their daughter, he sees a young Flo Jo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Florence_Griffith-Joyner",
        "situacao": "ok",
        "texto": "Delorez Florence Griffith-Joyner (Los Angeles, 21 de Dezembro de 1959 – Mission Viejo, 21 de Setembro de 1998) foi uma atleta norte-americana especializada em provas de velocidade. Também conhecida como Flo-Jo, ganhou diversas medalhas olímpicas e bateu os recordes dos 100 metros e 200 metros rasos, que ainda hoje se mantêm. Flo-Jo foi casada com o atleta Al Joyner e cunhada da também campeã olímp\n[…]\nAs unhas muito longas e coloridas seriam a sua imagem de marca ao longo de toda a sua carreira. Após os Jogos, Florence casou com Al Joyner, campeão olímpico do triplo salto, e passou a correr menos.\n[…]\nNos Jogos Olímpicos de Seul, em 1988, Florence Griffith-Joyner era a grande favorita para os eventos de velocidade. No total, ganhou três medalhas de ouro, nos 100 metros (com um tempo de 10,54 s, assistido por vento), nos 200 metros (batendo o recorde do mundo nos quartos de final) e na estafeta 4 x 100 metros, e uma medalha de prata na estafeta 4 x 400 metros. No final do ano recebeu o Prémio James E. Sullivan, que distingue o melhor atleta amador dos Estados Unidos.\n[…]\nA sua morte inesperada trouxe de novo as suspeitas de uso de dopagem na carreira de Florence Griffith-Joyner. A sua carreira foi atípica, principalmente porque todos os seus títulos e feitos foram alcançados numa única época (1987/1988), quando a atleta já tinha 28 anos e passara portanto o pico da sua forma. A forma abrupta como Flo-Jo se retirou das competições também foi interpretada como suspeita, tendo em conta que os testes antidoping passaram a ser rotina no ano seguinte.\n[…]\nPelo seu lado, Griffith-Joyner justificou a melhoria súbita de tempos como resultado de uma alteração no seu programa de treinos.\n[…]\n«Perfil de Florence Griffith-Joyner» (em inglês). no site da World Athletics\n[…]\n«Perfil de Florence Griffith-Joyner» (em inglês). arquivado do sítio Sports-Reference.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Dorando Pietri",
      "descricao": "Maratonista italiano que chegou em primeiro na maratona olímpica de Londres 1908 e foi desclassificado."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A chegada cambaleante do italiano Dorando Pietri na maratona de Londres 1908 foi narrada para um jornal pelo criador de Sherlock Holmes. Quem era ele?",
    "resposta": "Arthur Conan Doyle",
    "distratores": [
      "Rudyard Kipling",
      "H. G. Wells",
      "G. K. Chesterton"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dorando_Pietri"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dorando_Pietri",
        "situacao": "ok",
        "texto": "Dorando Pietri (Italian pronunciation: [doˈrando ˈpjɛːtri]; often wrongly spelt Petri; 16 October 1885  – 7 February 1942) was an Italian long-distance runner. He finished first in the marathon at the 1908 Summer Olympics in London but was subsequently disqualified.\n[…]\nDorando Pietri trained hard for the 1908 Olympics in London. In a race in Carpi he ran 40 km (25 mi) in 2 hours and 38 minutes, an extraordinary result for the times. The marathon, which was to take place on 24 July 1908, started with 56 competitors, including Pietri and fellow Italian Umberto Blasi. It began at 2:33pm. The weather was particularly hot by British summer standards. The London course measured 42.2 km (26 mi); the distance later became the official marathon length from 1921.\n[…]\nAs a compensation for the missing medal, Queen Alexandra gave him a gilded silver cup. Arthur Conan Doyle had been commissioned by the Daily Mail to write a special report about the race. He was very impressed by the effort of the Italian at the stadium, which he commented with the words:\n[…]\nConan Doyle proposed the Daily Mail to start a subscription to raise money and help Pietri to open a bakery in his native town. The fund reached the considerable sum of 300 pounds (equivalent to £31,203 in 2025), to which the same Conan Doyle contributed the initial 5 pounds (equivalent to £520 in 2025).\n[…]\nIl sogno del maratoneta is an Italian book and TV movie about Pietri's run.\n[…]\nDorando Pietri at World Athletics\n[…]\nDorando Pietri at Tilastopaja (registration required)\n[…]\nDorando Pietri at the Italian Athletics Federation (in Italian)\n[…]\nDorando Pietri at Olympics.com\n[…]\nDorando Pietri at Olympedia\n[…]\nScenes From the 1908 London Olympic Marathon\n[…]\nDorando Pietri at The Arthur Conan Doyle Encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dorando_Pietri",
        "situacao": "ok",
        "texto": "Dorando Pietri (Mandrio, 16 de outubro de 1885 – San Remo, 7 de fevereiro de 1942) foi um maratonista italiano que, nos Jogos Olímpicos de 1908 em Londres, protagonizou um dos mais dramáticos momentos da história olímpica.\n[…]\nA imagem de sua chegada, ajudado pelos fiscais, é considerada um ícone dos primórdios da fotografia e a primeira grande foto clássica dos esportes, especialmente da maratona, e que ajudou a dar uma grande carga dramática à lendária e desgastante prova. Foi o primeiro dos grandes heróis \"não-campeões\" da história olímpica que ajudariam a escrever a dramaticidade da mais longa prova do atletismo.\n[…]\nSó oitenta anos depois um italiano conquistaria a medalha de ouro na maratona para a Itália - Gelindo Bordin em Seul 88 - e a dedicaria à memória de Dorando Pietri.\n[…]\nA ele seguiram-se, mais de setenta anos depois, a maratonista suíça Gabriela Andersen-Scheiss, que emocionou o mundo ao se arrastar até a linha de chegada da primeira maratona feminina em Los Angeles 1984 e o brasileiro Vanderlei Cordeiro de Lima, derrubado e arrastado para fora da pista por um fanático religioso quando liderava a prova a menos de seis quilómetros da chegada, nos Jogos de Atenas 2004, conseguindo mesmo assim conquistar a medalha de bronze.\n[…]\nApós as Olimpíadas, Dorando e Johnny Hayes, que herdou a medalha de ouro do italiano, enfrentaram-se em duas corridas em Nova Iorque, como uma espécie de revanche. Dorando Pietri venceu as duas. Ele foi transformado numa grande celebridade internacional, tendo um canção feita com seu nome pelo compositor Irving Berlin e fez uma grande turnê de corridas nos Estados Unidos, ganhando 17 das 22 provas que disputou no país.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Simone Biles",
      "descricao": "Ginasta artística americana, a mais premiada da história da modalidade."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Tóquio 2020, Simone Biles abandonou a final por equipes e outras provas. Que problema a levou a desistir?",
    "resposta": "Perdia a noção do corpo no ar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Simone_Biles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Simone_Biles",
        "situacao": "ok",
        "texto": "Simone Arianne Biles Owens (née  Biles; born March 14, 1997) is an American artistic gymnast. Her 11 Olympic medals and 30 World Championship medals make her the most decorated gymnast in history. She is widely regarded as one of the greatest gymnasts of all time, and one of the greatest female athletes in history. With 11 Olympic medals, she is tied with Věra Čáslavská as the second-most decorate\n[…]\nAt the Olympic Games, Biles is a two-time gold medalist in the individual all-around (2016, 2024). She is also a two-time champion on vault (2016, 2024), the 2016 champion and 2024 silver medalist on floor exercise, and a two-time bronze medalist on balance beam (2016, 2020). Biles led the gold medal-winning U.S. teams in 2016, dubbed the \"Final Five\", and in 2024, dubbed the \"Golden Girls\".\n[…]\nAfter successfully performing the vault she premiered at the selection camp, it was named the Biles in the Code of Points, and given a difficulty value of 6.4 (for the 2017–2020 Code of Points), which was tied with the Produnova for the most difficult women's vault ever competed. The US also qualified for the team final in first place. During the team final, Biles competed on all four events, recording the highest score of any competitor on vault, uneven bars, and floor exercise. The U.S.\n[…]\nAt the 2020 Olympic Games, held in July and August 2021, Biles performed the all-around during the qualifications and helped the United States qualify for the team final, in second place behind the Russian team. She suffered several mishaps during qualifications: she bounced entirely off the floor landing on one of her tumbling passes and stepped one foot off the landing mat during her Cheng vault, and took several large stumbles back on her balance beam dismount.\n[…]\nSimone Biles at USA Gymnastics\n[…]\nSimone Biles at Team USA (archive March 18, 2023)\n[…]\nSimone Biles at Olympedia\n[…]\nSimone Biles at Olympics.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Simone_Biles",
        "situacao": "ok",
        "texto": "Simone Biles Owens (nascida Simone Arianne Biles; Columbus, 14 de março de 1997), é uma ginasta profissional americana. É especialista na ginástica artística, vencedora de trinta medalhas em campeonatos mundiais, sendo vinte e três delas de ouro. É a ginasta mais condecorada na história do seu país em mundiais.\n[…]\nEm sua primeira Olimpíada, no Rio de Janeiro em 2016, Biles foi considerada um dos grandes destaques, com conquistas incontestáveis e grande clamor do público e mídia, tanto nas provas individuais quanto de equipes. Ela subiu ao pódio cinco vezes, com quatro medalhas de ouro (equipes, salto, solo e individual geral) e uma de bronze (trave olímpica).\n[…]\nNas Olimpíadas de Tóquio, realizadas em 2021 por conta da pandemia de COVID-19, Biles esteve no pódio por equipes (prata) e na trave (bronze). Apesar de ser uma das melhores ginastas mundiais na competição, desistiu de disputar algumas provas após avaliação médica psicológica, dentre elas a final do individual geral, para zelar pelo seu bem-estar emocional e físico.\n[…]\nEm 23 de abril de 2023, Biles se casou com o jogador de futebol americano Jonathan Owens. Eles se conheceram em março de 2020 e estavam noivos desde fevereiro de 2022.\n[…]\nBiles estampou uma das capas da Revista People nas edições de \"Personalidades do Ano\", em 1 de dezembro de 2021. A revista destacou as transformações no olhar da sociedade sobre o esporte a partir da postura de Biles que priorizou sua a saúde mental em detrimento dos objetivos esportivos nos Jogos Olímpicos de Tóquio. Na ocasião, ela não conseguiu repetir o brilhantismo de 2016 e desistiu de cinco de suas seis finais por conta de uma crise psicológica denominada twisties.\n[…]\nSimone Biles na Federação Internacional de Ginástica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Jogos Olímpicos de Verão de 1908",
      "descricao": "Edição dos Jogos Olímpicos realizada em Londres em 1908."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Os Jogos de 1908 estavam prometidos a Roma, mas acabaram em Londres porque a Itália precisou gastar com uma catástrofe. Qual?",
    "resposta": "Erupção do Vesúvio",
    "distratores": [
      "Erupção do Etna",
      "Terremoto de Messina",
      "Enchente do Tibre"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1908_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1908_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 1908 Summer Olympics (officially the Games of the IV Olympiad and also known as London 1908) were an international multi-sport event held in London, United Kingdom, from 27 April to 31 October 1908.\n[…]\nThe 1908 Games were relocated to London after Italy withdrew from hosting on financial grounds. Rome had been awarded the games at the 6th IOC Session in 1904, but Italy formally relinquished its obligation during the 8th IOC Session at the Intercalated Games in Athens in April 1906, with Italy's IOC member Count Eugenio Brunetta d'Usseaux citing the financial consequences of the eruption of Mount Vesuvius (4–22 April 1906) as the reason.\n[…]\nItalian authorities were preparing to stage the games when Mount Vesuvius erupted on 7 April 1906, devastating the city of Naples. Funds were diverted to the reconstruction of Naples, so a new host country was required. During the Intercalated Games of Athens, still in April 1906, Coubertin approached Lord Desborough about alternatively hosting in London.\n[…]\n1908 Summer Olympics – London\n[…]\n\"London 1908\". Olympics.com. International Olympic Committee.\n[…]\nParliament & the 1908 Olympics - UK Parliament Living Heritage\n[…]\nCook, Theodore Andrea (May 1909). The Fourth Olympiad London 1908 Official Report (PDF). London: British Olympic Association. Archived from the original (PDF) on 28 May 2008. Retrieved 8 May 2008.\n[…]\nMallon, Bill; Buchanan, Ian (2000). \"Background\" (PDF). The 1908 Olympic Games: Results for All Competitors in All Events, with Commentary. McFarland. ISBN 978-0-7864-0598-5. Retrieved 8 May 2008.\n[…]\nJenkins, Rebecca (2008). The First London Olympics: 1908. Piatkus Books. ISBN 978-0-7499-5168-9.\n[…]\nVideo footage of the 1908 Summer Olympics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1908",
        "situacao": "ok",
        "texto": "Os Jogos Olímpicos de 1908 (em inglês: 1908 Olympic Games), conhecidos oficialmente como Jogos da IV Olimpíada,  foram os quartos Jogos Olímpicos da era moderna. Realizados em Londres, no Reino Unido, entre 27 de abril e 31 de outubro de 1908 com a participação de 2 008 atletas, entre eles 37 mulheres, de 22 nações.\n[…]\nApós a realização dos Jogos Olímpicos Intercalares de 1906 em Atenas, na Grécia, considerados não oficiais e que não tiveram seus resultados computados pelo Comitê Olímpico Internacional, originalmente essa edição estava prevista para ser sediada em Roma, na Itália, mas a erupção do vulcão Vesúvio obrigou as autoridades italianas a usar todos os seus recursos econômicos para combater os efeitos da tragédia e a desistir de sediar os Jogos, que acabaram por serem transferidos para a capital britânica.\n[…]\nFoi nestes Jogos que a Grã-Bretanha, a dona da casa, pela primeira e única vez, liderou o quadro de medalhas em uma Olimpíada, com um total de 145 pódios, 56 de ouro, mais do dobro de seus perseguidores diretos, os Estados Unidos.\n[…]\nEssa viria a ser a primeira das três ocasiões na qual Londres foi sede dos Jogos Olímpicos. As outras duas edições foram em 1948 e 2012.\n[…]\nNuma demonstração do espírito desportivo dos Jogos Olímpicos, a final da luta greco-romana entre Frithiof Martensson e Mauritz Andersson foi adiada para permitir que Martensson se recuperasse de uma pequena lesão. Martensson acabaria por ganhar a final.\n[…]\nPela primeira e única vez na história dos Jogos Olímpicos uma prova ficou sem vencedor. A prova de 1 km de velocidade masculino do ciclismo não teve campeão, nem vice, nem terceiro colocado, apesar de ter contado com a participação de 45 atletas, após todos os competidores excederem o tempo mínimo limite para a sua conclusão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Cerimônia de abertura dos Jogos Olímpicos de 2012",
      "descricao": "Cerimônia que abriu os Jogos Olímpicos de Londres, em julho de 2012, no Estádio Olímpico de Londres."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na abertura de Londres 2012, a rainha Elizabeth segunda apareceu num filme, saindo do palácio para pular de paraquedas ao lado de que famoso espião do cinema?",
    "resposta": "James Bond",
    "fonte": [
      "https://en.wikipedia.org/wiki/Happy_and_Glorious",
      "https://en.wikipedia.org/wiki/2012_Summer_Olympics_opening_ceremony"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Happy_and_Glorious",
        "situacao": "desambiguacao",
        "texto": "Happy and Glorious may refer to:\n\nHappy and Glorious (TV series), a 1952 British TV drama series about Queen Victoria and Prince Albert\nHappy and Glorious (film), a short film starring Queen Elizabeth II and Daniel Craig as James Bond shown as part of the 2012 Olympic Games opening ceremony\nHappy and Glorious, a 2015 comedy tour by Michael McIntyre"
      },
      {
        "url": "https://en.wikipedia.org/wiki/2012_Summer_Olympics_opening_ceremony",
        "situacao": "ok",
        "texto": "The opening ceremony of the 2012 Summer Olympics took place on the evening of Friday 27 July 2012 in the Olympic Stadium, London, during which the Games were formally opened by Queen Elizabeth II. As mandated by the Olympic Charter, the proceedings combined the ceremonial opening of this international sporting event (including welcoming speeches, hoisting of the flags and the parade of athletes) w\n[…]\nThe principal sections of the artistic display represented Britain's Industrial Revolution, National Health Service, literary heritage, popular music and culture, and were noted for their vibrant storytelling and use of music. Two shorter sections drew particular comment, involving a filmed cameo appearance of the Queen with James Bond as her escort, and a live performance by the London Symphony Orchestra joined by comedian Rowan Atkinson. These were widely ascribed to Britain's sense of humour.\n[…]\nA short film directed by Boyle and produced by the BBC, called Happy and Glorious (after a line in the national anthem), featured the character James Bond, played by then-Bond actor Daniel Craig, entering the front gate of Buckingham Palace in a London black cab. His entrance (accompanied by an arrangement of Handel's \"Arrival of the Queen of Sheba\") is noticed by Brazilian children (a nod to Rio de Janeiro, which was to be the next summer Games host city) in the throne room.\n[…]\nThe helicopter then passed through Tower Bridge, accompanied by the Dambusters March. The film finished with Bond and the Queen apparently jumping from a real helicopter live above the stadium, accompanied by the \"James Bond Theme\". The Queen and the Duke of Edinburgh, along with Rogge, were then introduced to the audience. The Queen was wearing the same dress as in the film, as if she had just arrived with Bond.\n[…]\nMedia related to 2012 Summer Olympics opening ceremony at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Cerimônia de abertura dos Jogos Olímpicos de 2012",
      "descricao": "Cerimônia que abriu os Jogos Olímpicos de Londres, em julho de 2012, no Estádio Olímpico de Londres."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A cerimônia de abertura de Londres 2012, com a Revolução Industrial e Mr. Bean, foi dirigida por que cineasta britânico, vencedor do Oscar por Quem Quer Ser um Milionário?",
    "resposta": "Danny Boyle",
    "distratores": [
      "Sam Mendes",
      "Christopher Nolan",
      "Ridley Scott"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/2012_Summer_Olympics_opening_ceremony"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2012_Summer_Olympics_opening_ceremony",
        "situacao": "ok",
        "texto": "The opening ceremony of the 2012 Summer Olympics took place on the evening of Friday 27 July 2012 in the Olympic Stadium, London, during which the Games were formally opened by Queen Elizabeth II. As mandated by the Olympic Charter, the proceedings combined the ceremonial opening of this international sporting event (including welcoming speeches, hoisting of the flags and the parade of athletes) w\n[…]\nThe spectacle was entitled Isles of Wonder and directed by the Academy Award-winning British film director Danny Boyle, with Paulette Randall as associate director.\n[…]\nThe BBC released footage of the entire ceremony on 29 October 2012, edited by Danny Boyle and with background extras, filling more than one disc of a five DVD or Blu-ray disc set, which also contained more than seven hours of sporting highlights as well as the complete closing ceremony. A \"BBC commentary-free\" option for the opening ceremony is available on the DVD, as well as a commentary track by Danny Boyle and Frank Cottrell-Boyce.\n[…]\nThe Stage said that \"Danny Boyle's spectacular and moving Olympics Opening Ceremony was undoubtedly the theatrical highlight of 2012\".\n[…]\nIn an end of the year review, British magazine Q said \"It could all have been so different. As the London 2012 Summer Olympics approached, the tide of scepticism seemed almost irreversible. There was the heavy-handed sponsorship, the draconian security, the ticketing problems, the ballooning budget, and the lurking fear that the Opening Ceremony might be, in director Danny Boyle's pungent description, 'shite'.\n[…]\nBoyle was offered a knighthood in late 2012, but turned it down, saying: \"I'm very proud to be an equal citizen and I think that's what the Opening Ceremony was actually about.\"\n[…]\nRaphael, Amy (21 March 2013). Danny Boyle: Creating Wonder. London: Faber & Faber. ISBN 9780571301867. Archived from the original on 1 April 2013. Retrieved 17 March 2013."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cerim%C3%B4nia_de_abertura_dos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2012",
        "situacao": "ok",
        "texto": "A Cerimônia de Abertura dos Jogos Olímpicos de Verão de 2012 aconteceu na noite de 27 de julho no Estádio Olímpico de Londres, no Reino Unido. Com o título de Ilhas de Maravilha (Isles of Wonder), o espetáculo foi dirigido pelo vencedor do Oscar Danny Boyle e a maioria dos segmentos foi batizada com nomes presentes em obras da cultura britânica.\n[…]\nO Comitê Organizador dos Jogos Olímpicos e Paralímpicos de Londres (LOCOG) anunciou em junho de 2010 a escolha do cineasta britânico vencedor do Oscar Danny Boyle para o cargo de diretor artístico da cerimônia de abertura e da equipe que iria conduzir as quatro produções (abertura e encerramento dos Jogos Olímpicos e Paralímpicos).\n[…]\nA equipe da cerimônia de abertura foi composta por:\n[…]\nDiretor artístico: Danny Boyle\n[…]\nAlém deles, as cerimônias de abertura e encerramento dos Jogos Olímpicos e Paralímpicos tinham como Equipe Executiva:\n[…]\nA qualidade da transmissão, entretanto, foi contestada por especialistas, principalmente em relação aos comentaristas, que falavam durante momentos importantes e faziam comentários que não interessavam ao grande público. O próprio Danny Boyle não era entusiasta da ideia de uma cerimônia com comentários, por isso a BBC ofereceu uma versão sem narração para os assinantes de tv a cabo ou por satélite.\n[…]\nA cerimônia conquistou em novembro de 2012 o Evening Standard Theatre Awards na categoria \"Além do Teatro\". No mesmo mês, venceu na categoria \"Inovação\" o Royal Television Society Craft & Design Awards. Em fevereiro de 2013, o diretor artístico Danny Boyle recebeu o Prêmio do Júri na premiação principal da mesma entidade. Em abril, Hamish Hamilton e Tapani Parm dividiram o prêmio de Melhor Diretor (multi-câmera) no BAFTA Television Craft Awards.\n[…]\nCerimônia de encerramento dos Jogos Olímpicos de Verão de 2012, também chamada de Sinfonia da Música Britânica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Cerimônia de abertura dos Jogos Olímpicos de 2016",
      "descricao": "Cerimônia que abriu os Jogos Olímpicos do Rio de Janeiro, em agosto de 2016, no Maracanã."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na abertura da Rio 2016, a modelo Gisele Bündchen atravessou o gramado do Maracanã num longo desfile ao som de que canção de Tom Jobim?",
    "resposta": "Garota de Ipanema",
    "distratores": [
      "Chega de Saudade",
      "Águas de Março",
      "Wave"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/2016_Summer_Olympics_opening_ceremony"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2016_Summer_Olympics_opening_ceremony",
        "situacao": "ok",
        "texto": "The opening ceremony of the 2016 Summer Olympics took place on the evening of Friday 5 August 2016 in the Maracanã Stadium, Rio de Janeiro, starting at 20:00 BRT (23:00 UTC).\n[…]\nThe 14-bis flew from Maracanã through Rio's main sights while Antônio Carlos Jobim's Samba do Avião played until, while the plane flew over Ipanema, faded into \"The Girl from Ipanema\", played by Daniel Jobim, Jobim's grandson. Gisele Bündchen interpreted the role of \"The Girl\" and walked through Maracanã Stadium, following the curves that characterized Niemeyer's works, such as the Pampulha Church and the Cathedral of Brasília.\n[…]\nAfter Ipanema, the favelas were represented to the sound of samba and funk carioca, with diva Elza Soares, who played the \"Canto de Ossanha\", and Ludmilla, who sang the \"Rap da Felicidade\". Later, rapper Marcelo D2 and singer Zeca Pagodinho simulated a duel of rhythms, with the latter sang the 2002's hit \"Deixa A Vida Me Levar\" (this song was also the theme of the victorious campaign of the Brazilian team in the 2002 FIFA World Cup). The new generation rappers Karol Conká and MC Sofia followed.\n[…]\n\"Após este maravilhoso espetáculo, declaro abertos os Jogos Olímpicos do Rio, celebrando a XXXI Olimpíada da Era Moderna!\" - \"After this wonderful spectacle, I declare open the Rio Olympic Games, celebrating the XXXI Olympiad of the modern era!\"\n[…]\n\"The Girl from Ipanema\"  – performed by Daniel Jobim\n[…]\n2016 Summer Paralympics opening ceremony\n[…]\nMedia related to 2016 Summer Olympics opening ceremony at Wikimedia Commons\n[…]\nRio 2016 Olympic Games Opening Ceremony Media Guide (found on Olympic Library)\n[…]\nRio 2016 Opening Ceremony Full Replay on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cerim%C3%B4nia_de_abertura_dos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2016",
        "situacao": "ok",
        "texto": "A cerimônia de abertura dos Jogos Olímpicos de Verão de 2016 ocorreu na noite de 5 de agosto de 2016 no Estádio do Maracanã, Rio de Janeiro, a partir das 20h00 (23h00 UTC).\n[…]\nGisele Bündchen interpretou a Garota de Ipanema e desfilou no Maracanã, enquanto Daniel Jobim, neto de Tom Jobim, tocava o clássico. Por onde passava, Giselle deixava curvas projetadas que formavam obras de Niemeyer, como a Igreja da Pampulha e a Catedral de Brasília.\n[…]\nEm abril de 2016, o porta-voz do Comitê Organizador Mario Andrada afirmou que os organizadores tinham planejado a mover a pira olímpica em um local público próximo ao Porto do Rio de Janeiro após a cerimônia de abertura, o mais provável perto da Igreja de Nossa Senhora da Candelária, em vez de mantê-la em no Estádio do Maracanã.Esta ação foi semelhante ao que aconteceu nos  Jogos Olímpicos de Inverno de 2010, em que a chama oficial ficou ao lado do Centro de Convenções Vancouver,em frente ao BC Place , sendo acessa exatamente ao final da cerimônia de abertura por Wayne Gretzky.\n[…]\nA Cerimônia de Abertura dos Jogos Olímpicos Rio 2016 consolidou-se como um dos mais importantes espetáculos da história recente do Brasil e, por sua riqueza estética, cultural e conceitual, também se tornou objeto de investigação acadêmica.\n[…]\nDentre os resultados da investigação publicados em periódicos científicos no Brasil e no exterior, destaca-se a formulação da tese de que a Cerimônia de Abertura dos Jogos Olímpicos Rio 2016 inaugura um novo ciclo de afirmação artístico-identitária da cultura brasileira.\n[…]\nMedia relacionados com Cerimônia de abertura dos Jogos Olímpicos de Verão de 2016 no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Cerimônia de abertura dos Jogos Olímpicos de 2024",
      "descricao": "Cerimônia que abriu os Jogos Olímpicos de Paris, em julho de 2024, realizada fora de um estádio."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No fim da abertura de Paris 2024, Céline Dion cantou na Torre Eiffel o Hino ao Amor, clássico eternizado por que cantora francesa?",
    "resposta": "Édith Piaf",
    "distratores": [
      "Dalida",
      "Juliette Gréco",
      "Mireille Mathieu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/2024_Summer_Olympics_opening_ceremony"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2024_Summer_Olympics_opening_ceremony",
        "situacao": "ok",
        "texto": "The opening ceremony of the 2024 Summer Olympics took place on 26 July 2024 across Paris, beginning at 19:30 CEST (17:30 UTC). As mandated by the Olympic Charter, the proceedings included an artistic program showcasing the culture of the host country and city, the parade of athletes and the lighting of the Olympic cauldron. The Games were formally opened by the president of France, Emmanuel Macron\n[…]\nThe parade was interspersed with the artistic programme, which was divided into twelve acts reflecting the culture of France and its history, and took place at Paris landmarks such as Notre-Dame, Conciergerie, Musée d'Orsay, and the Eiffel Tower. The ceremony featured musical performances by French musicians such as Gojira, Aya Nakamura, Philippe Katerine, and Juliette Armanet, and international musicians Lady Gaga and Céline Dion.\n[…]\nThe first sequence, Enchanté (enchant/delight), accordionist Félicien Brut was sitting at the top of Pont d'Austerlitz played a rendition of Édith Piaf's \"La Foule\" began the first of the four blocs of the parade with the Greek delegation and the Refugee Olympic Team, and through to the Bahraini delegation. The first musical act featured Lady Gaga and eight dancers waving large pink ostrich feather hand fans, all in custom Dior costumes.\n[…]\nCanadian singer Céline Dion, accompanied by pianist and musical director Scott Price, concluded the ceremony by singing Édith Piaf's \"Hymne à l'amour\" from the first floor of the Eiffel Tower, bringing the ceremony to a close at 23:29 CEST.\n[…]\nClosing the opening ceremony after the Olympic flame was lit, Canadian singer Céline Dion sang the Édith Piaf song \"Hymne à l'amour\" on the first level of the Eiffel Tower. The performance was her first since December 2022, after revealing her diagnosis with stiff person syndrome.\n[…]\n2024 France railway arson attacks\n[…]\nConcerns and controversies at the 2024 Summer Olympics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cerim%C3%B4nia_de_abertura_dos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024",
        "situacao": "ok",
        "texto": "A cerimônia de abertura dos Jogos Olímpicos de Verão de 2024 aconteceram na noite do dia 26 de julho às margens do Rio Sena, se encerrando nos Jardins du Trocadéro, em Paris na França.\n[…]\nOs organizadores afirmaram que a cerimônia seria a \"cerimônia de abertura mais espetacular e acessível da história olímpica\", com Estanguet afirmando que seria gratuito e estimando que poderia atrair até 600 000 espectadores. As arquibancadas se estendem da Biblioteca Nacional da França até a Torre Eiffel. O público ficaria alinhado às margens do Sena, ocupando um trecho de 6 quilômetros (3,7 milhas) nos cais superior e inferior, bem como nos rios que cruzam cada lado.\n[…]\nNo dia 22 de julho, faltando exatamente quatro dias para a cerimônia oficial de abertura dos Jogos Olímpicos de Paris, um grupo de 150 bailarinos se recusou a participar do ensaio final, acusando a COJOP2024 de tratamento desigual e atraso de salários, realizando uma manifestação balançando os braços.\n[…]\nSubstituindo os tradicionais fogos de artifício, flashes de luz iluminam a Torre Eiffel enquanto Céline Dion, a atração mais aguardada do evento, finaliza a cerimônia de abertura interpretando a canção Hymne à L'amour, de Edith Piaf.\n[…]\n- Hino Olímpico pela Orquestra Nacional da França, The Radio France Choir e Maîtrise de Radio France\n[…]\nPolíticos de extrema-direita da França se posicionaram contra a presença da cantora Aya Nakamura na abertura dos Jogos Olímpicos. Durante os ensaios, Nakamura enfrentou ataques racistas do grupo intitulado Les Natifs exibindo uma faixa \"Não tem como, Aya. Isso é Paris, não o mercado de Bamako\".\n[…]\nCerimônia de encerramento dos Jogos Olímpicos de Verão de 2024",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Clodoaldo Silva",
      "descricao": "Nadador paralímpico brasileiro, multimedalhista nos Jogos de Sydney 2000 e Atenas 2004."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Ídolo da natação paralímpica brasileira, com seis ouros em Atenas 2004, Clodoaldo Silva ficou conhecido por que apelido?",
    "resposta": "Tubarão Paralímpico",
    "distratores": [
      "Golfinho de Natal",
      "Torpedo Potiguar",
      "Peixe Voador"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Clodoaldo_Silva"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Clodoaldo_Silva",
        "situacao": "ok",
        "texto": "Clodoaldo Francisco da Silva (Natal, 1 de fevereiro de 1979), conhecido como Tubarão das Piscinas, é um nadador paralímpico brasileiro filiado ao Partido Socialismo e Liberdade (PSOL).\n[…]\nPor conta de uma falta de oxigenação durante o parto ele nasceu com paralisia cerebral, o que afetou seus membros inferiores. Suas conquistas ajudaram o país a reconhecer o esporte de alto rendimento para pessoas com deficiência. O atleta possui 14 medalhas paralímpicas (6 ouros, 6 pratas e 2 bronzes) e acumula mais de 700 medalhas na sua carreira. Ele foi o responsável por acender a pira paralímpica nos Jogos Paralímpicos de Verão do Rio de Janeiro em 2016.\n[…]\nApós suas seis medalhas de ouro nos Jogos Paralímpicos de Verão de 2004, Clodoaldo foi condecorado entre 2005 e 2006 pelo presidente Luiz Inácio Lula da Silva respectivamente com a Ordem de Rio Branco no grau de Oficial suplementar e a Ordem do Mérito Militar no grau de Cavaleiro especial. Nos Jogos Paralímpicos de Verão de 2016, no Rio de Janeiro, Clodoaldo foi o escolhido para acender a pira olímpica na cerimônia de abertura.\n[…]\nClodoaldo Silva no Facebook\n[…]\nClodoaldo Silva no Instagram\n[…]\n«Entrevista com Clodoaldo Silva». www.memoriaolimpica.com"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Discóbolo",
      "descricao": "Escultura grega do século cinco a.C. que mostra um atleta lançando o disco, conhecida por cópias romanas."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O Discóbolo, estátua grega de um atleta prestes a lançar o disco, conhecida hoje por cópias romanas, foi criado originalmente em bronze por que escultor?",
    "resposta": "Míron",
    "distratores": [
      "Fídias",
      "Praxíteles",
      "Policleto"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Discobolus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Discobolus",
        "situacao": "ok",
        "texto": "The Discobolus by Myron (\"discus thrower\", Greek: Δισκοβόλος, Diskobólos) is an ancient Greek sculpture completed at the start of the Classical period in around 460–450 BC that depicts an ancient Greek athlete throwing a discus.\n[…]\nThough the original Greek bronze cast is lost, the work is known through numerous surviving Roman copies. Copies are either smaller scaled in bronze or full-scale in marble, such as the Discobolus Palombara or the Townley Discobolus. The Palombara was the first to be discovered, in 1781 at the Villa Palombara on the Esquiline Hill.\n[…]\nThe Discobolus Palombara, the first copy of this famous sculpture to have been discovered, was found in 1781. It is a 1st-century AD copy of Myron's original bronze. Following its discovery at a Roman property of the Massimo family, the Villa Palombara on the Esquiline Hill, it was initially restored by Giuseppe Angelini; the Massimo installed it in their Palazzo Massimo alle Colonne and then at Palazzo Lancellotti.\n[…]\nThe Discobolus Castel Porziano was discovered in 1906 in the ruins of a Roman villa at Tor Paterno in the former royal estate of Castel Porziano. It is now conserved in the Museo Nazionale Romano. The Castel Porziano is fragmentary.\n[…]\nIn the 19th century, plaster copies of Discobolos could be found in many large academic collections, now mostly dispersed.\n[…]\nBodies: The Exhibition includes a recreation of the Discobolus. The Discus Thrower is plastinated human corpse posed like the original sculpture, discus included.\n[…]\nDiscobolus (Harvard University)\n[…]\nMyron's Discobolus Archived 2014-10-07 at the Wayback Machine  A discussion about the sculpture between Beth Harris and Steven Zucker on video at Khan Academy/Smarthistory"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Disc%C3%B3bolo",
        "situacao": "ok",
        "texto": "O Discóbolo (do grego Δισκοβόλος, Diskobólos, lançador de disco) é uma estátua do escultor grego Míron, que representa um atleta momentos antes de lançar um disco. É, possivelmente, a representação mais icônica de um desportista na história da arte.\n[…]\nSegundo nos dizem Plínio, o Velho e Luciano de Samósata, o original fora produzido em bronze em torno de 455 a.C para ser instalado em um palácio de Atenas, possivelmente criado para comemorar um atleta vitorioso no antigo pentatlo, mas a obra acabou se perdendo ao longo do tempo. A composição no entanto sobrevive em diversas cópias romanas, todas com algumas diferenças entre si, o que deixa algumas dúvidas sobre a conformação exata do original.\n[…]\nEstilisticamente o Discóbolo ilustra a transição do Estilo Severo para o Estilo Clássico. A descrição anatômica tem um caráter mais naturalista do que a idealização praticada pelos seus antecessores imediatos, e apesar de dinâmica, é mais ou menos confinada dentro do plano frontal, à maneira de um alto-relevo. A vanguarda da escultura grega logo após Míron se tornou celebrada por dar a verdadeira independência tridimensional à escultura, criando obras igualmente eficientes em todos os ângulos.\n[…]\nNas palavras de Arnold Hauser, o Discóbolo representa o primeiro momento, desde as pinturas do Paleolítico, em que...\n[…]\nAs cópias, então realizadas geralmente em mármore, por causa das especificidades do material, precisavam incorporar alguma base de apoio maior para o peso da pedra, na forma de troncos de árvore ou rochas, o que retira muito do impacto e elegância da composição original em bronze de Miron, que se mantinha somente com suas próprias pernas graças à maior resistência do metal.\n[…]\nMíron\n[…]\nEscultura do Classicismo grego",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
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
