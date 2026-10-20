Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Primeira Guerra Mundial** (tema **História**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Primeira Batalha do Marne",
      "descricao": "Batalha de setembro de 1914 perto do rio Marne em que franceses e britânicos detiveram o avanço alemão sobre Paris."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em setembro de 1914, na Batalha do Marne, que veículos civis de Paris foram requisitados para levar soldados franceses ao front?",
    "resposta": "Táxis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Taxis_of_the_Marne",
      "https://en.wikipedia.org/wiki/First_Battle_of_the_Marne"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taxis_of_the_Marne",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/First_Battle_of_the_Marne",
        "situacao": "ok",
        "texto": "The First Battle of the Marne or known in France as the Miracle on the Marne (French: miracle de la Marne) was a battle of the First World War fought from 5 to 12 September 1914. The German army invaded France with a plan for winning the war in 40 days by occupying Paris and destroying the French and British armies. The Germans had initial successes in August. They were victorious in the Battles o\n[…]\nOn the night of 7–8 September came the most storied event of the Battle of the Marne. Military Governor Gallieni in Paris reinforced the 6th Army guarding Paris by shuttling soldiers to the front by rail, truck, and Renault taxis. Gallieni commandeered about 600 taxicabs at Les Invalides in central Paris to carry soldiers to the front at Nanteuil-le-Haudouin, 50 kilometres (31 mi) away. Most of the taxis were demobilised on 8 September but some remained longer to transport wounded and refugees.\n[…]\n\"Along a front of nearly 250 miles [400km], the German infantry faced about and began to retrace its steps over the ground won in bitter combat during the last two weeks.\" Many of the German soldiers and officers on the front lines of the conflict were bitter at what they regarded as a foolish order to retreat. Meyer said that the First Battle of the Marne \"has come down to us in history as the fight that saved Paris but in fact was settled by one side's decision not to fight.\"\n[…]\nIt is difficult to separate the casualties in the Battle of the Marne from the casualties in the other related battles of August and September 1914. Over two million men fought in the campaign leading to the First Battle of the Marne and although there are no exact official casualty counts for the battle, estimates for the actions of September along the Marne front for all armies are often given as c. 500,000 killed or wounded. French casualties totalled c.\n[…]\nSecond Battle of the Marne"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pickelhaube",
      "descricao": "Capacete de couro com ponta de metal usado pelo exército alemão no século dezenove e no início da Primeira Guerra Mundial."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Os soldados alemães começaram a guerra com um capacete de couro chamado Pickelhaube. Que característica marcante ele tinha no topo?",
    "resposta": "Uma ponta de metal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pickelhaube"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pickelhaube",
        "situacao": "ok",
        "texto": "The Pickelhaube (German: [ˈpɪkl̩ˌhaʊ̯bə] ; pl. Pickelhauben [ˈpɪkl̩ˌhaʊ̯bn̩] ), also Pickelhelm, is a spiked leather or metal helmet that was worn in the 19th and 20th centuries by Prussian and German soldiers of all ranks as well as firefighters and police. Although it is typically associated with the Prussian Army, which adopted it in 1842–43, the helmet was widely imitated by other armies durin\n[…]\nThe basic Pickelhaube was made of hardened (boiled) leather, given a glossy-black finish, and reinforced with metal trim (usually plated with gold or silver for officers) that included a metal spike to deflect vertical sword strikes at the crown. Early versions had a high crown, but the height gradually was reduced and the helmet became more fitted in form, in a continuing process of weight-reduction and cost-saving.\n[…]\nPrior to the outbreak of World War I in 1914 detachable black or white plumes were worn with the Pickelhaube in full dress by German generals, staff officers, dragoon regiments, infantry of the Prussian Guard and a number of line infantry regiments as a special distinction. This was achieved by unscrewing the spike (a feature of all Pickelhauben regardless of whether they bore a plume) and replacing it with a tall metal plume-holder known as a trichter.\n[…]\nThe left cockade was used to denote the state of the soldier (Prussia: black and white; Bavaria: white and blue; etc.).All-metal versions of the Pickelhaube were worn mainly by cuirassiers, and often appear in portraits of high-ranking military and political figures (such as Otto von Bismarck, pictured above). These helmets were sometimes referred to as lobster-tail helmets, due to their distinctive articulated neck guard.\n[…]\nColonel J's Pickelhaube Musings\n[…]\nEvolution of the Pickelhaube\n[…]\nOn-line guide to the different patterns of Imperial German Pickelhaube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pickelhaube",
        "situacao": "ok",
        "texto": "Pickelhaube (plural Pickelhauben; do alemão Pickel = \"ponta\", e Haube = \"boné\") é um clássico modelo de capacete confeccionado em couro envernizado, com ponteira e guarnições metálicas, usado pelos militares, bombeiros e policiais alemães durante os séculos XIX e XX; o qual está mais intimamente associado ao exército da Prússia. Oficialmente fora chamado \"Helm mit Spitze\", literalmente \"Capacete c\n[…]\nA versão russa inicialmente tinha uma pluma de crina encaixada no final da ponta, mas isso foi posteriormente descartado em algumas unidades. A ponteira russa era coberto com um motivo de granada. O Exército Imperial Russo entrou na Guerra da Criméia com esses capacetes, sendo eles comuns entre a infantaria e os granadeiros. Um pickelhaube russo capturado está exposto no Museu da Legião Estrangeira Francesa em Aubagne, no sul da França.\n[…]\nO pickelhaube básico era feito de couro endurecido (fervido), com acabamento preto brilhante e reforçado com acabamento de metal (geralmente banhado a ouro ou prata para oficiais) que incluía uma ponta de metal na coroa. As primeiras versões tinham uma coroa alta, mas a altura foi gradualmente reduzida e o capacete tornou-se mais ajustado na forma, em um processo contínuo de redução de peso e economia de custos.\n[…]\nIsso foi conseguido desparafusando o espigão (uma característica de todos os pickelhauben, independentemente de terem uma pluma) e substituindo-o por um alto suporte de pluma de metal conhecido como trichter. Para os músicos dessas unidades, e também para a Artilharia da Baviera e todo um regimento de cavalaria da Guarda Saxônica, essa pluma era vermelha.\n[…]\nA ligação entre o capacete pickelhaube e o Home Service não era, no entanto, direta, uma vez que o toucado britânico era mais alto, tinha apenas uma pequena ponta e era feito de tecido reforçado sobre uma estrutura de cortiça, em vez de couro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Batalha de Passchendaele",
      "descricao": "Ofensiva britânica de 1917 perto de Ypres, na Bélgica, também chamada Terceira Batalha de Ypres."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 1917, a Batalha de Passchendaele, na Bélgica, ficou marcada por qual condição do terreno, em que homens e cavalos chegavam a se afogar?",
    "resposta": "Lama",
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_Passchendaele"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Passchendaele",
        "situacao": "ok",
        "texto": "The Third Battle of Ypres (German: Dritte Flandernschlacht; French: Troisième Bataille des Flandres; Dutch: Derde Slag om Ieper), also known as the Battle of Passchendaele ( PASH-ən-dayl), was a campaign of the First World War, fought by the Allies against the German Empire.\n[…]\nThe battle took place on the Western Front, from July to November 1917, for control of the ridges south and east of the Belgian city of Ypres in West Flanders, as part of a strategy decided by the Entente at conferences in November 1916 and May 1917. Passchendaele (now Passendale) lies on the last ridge east of Ypres, 5 mi (8 km) from Roulers (now Roeselare), a junction of the Bruges-(Brugge)-to-Kortrijk railway. The station at Roulers was on the main supply route of the German 4th Army.\n[…]\nFrom July 1917, the area east of Ypres was defended by the front position, the Albrechtstellung (second position), Wilhelmstellung (third position), Flandern I Stellung (fourth position), Flandern II Stellung (fifth position) and Flandern III Stellung, the sixth position (incomplete). Between the German defences lay villages such as Zonnebeke and Passchendaele, which were fortified and prepared for all-round defence.\n[…]\nThe German 4th Army was prevented from transferring troops away from the Fifth Army and from concentrating its artillery-fire on the Canadians as they prepared for the Second Battle of Passchendaele (26 October – 10 November 1917).\n[…]\nPasschendaele, a 2008 Canadian film with the battle as a backdrop.\n[…]\nKerby, Martin, and Margaret Baguley. \"The Year in between: 1917, Passchendaele, and the Queensland Press.\" Media, War & Conflict 14, no. 1 (2021): 114–30. https://doi.org/10.1177/1750635219854469.\n[…]\nPasschendaele, original reports from The Times\n[…]\nBattles: The Third Battle of Ypres, 1917"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Terceira_Batalha_de_Ypres",
        "situacao": "ok",
        "texto": "A Terceira Batalha de Ypres, ou, na sua forma portuguesa, de Ipres, também conhecida como Batalha de Passchendaele, foi uma campanha da Primeira Guerra Mundial travada pelos Aliados (Entente) contra o Império Alemão. ​​A batalha ocorreu na Frente Ocidental, de julho a novembro de 1917, pelo controle das cristas ao sul e leste da cidade belga de Ypres, na Flandres Ocidental, como parte de uma estra\n[…]\nA resistência do Quarto Exército alemão, um clima muito úmido de chuvas torrenciais, o terreno inundado pela lama, o começo do inverno e a mudança dos recursos franceses e britânicos para Itália, a seguir à vitória austro-germânica na Batalha de Caporetto, (24 de outubro – 19 de novembro), permitiu aos alemães evitar uma retirada geral, que lhes parecia inevitável em outubro. A campanha terminou em novembro quando o Corpo Canadiano capturou a vila de Passchendaele.\n[…]\nAlgumas questões controversas entre os participantes na batalha, escritores e historiadores, incluem a visão de efectuar uma estratégia ofensiva após a mal-sucedida Ofensiva Nivelle, em vez de aguardar pela chegada dos exércitos americanos a França; a escolha da Flandres em vez de outras zonas mais a sul ou a Frente italiana; o clima e as condições atmosféricas na Flandres; a escolha do general Hubert Gough por Haig e o Quinto Exército para liderar a ofensiva; a forma de dar início ao ataque; o intervalo de tempo entre a Batalha de Messines e o ataque de abertura das Batalhas de Ypres; a influência dos problemas internos dos exércitos franceses na persistência dos britânicos na ofensiva; o efeito da lama nas operações; a decisão de continuar a ofensiva em Outubro com a mudança nas condições meteorológicas; e o custo das perdas humanas da campanha nos exército alemão e britânico.\n[…]\nTerraine (1977). The Road to Passchendaele: The Flanders Offensive 1917, A Study in Inevitability. London: Leo Cooper. ISBN 0-436-51732-9",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Guilherme II",
      "descricao": "Último imperador da Alemanha e rei da Prússia, de 1888 até sua abdicação em 1918."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O kaiser Guilherme II costumava disfarçar nas fotos uma deficiência de nascença em que parte do corpo?",
    "resposta": "O braço esquerdo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wilhelm_II"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wilhelm_II",
        "situacao": "ok",
        "texto": "Wilhelm II (Friedrich Wilhelm Viktor Albert; 27 January 1859 – 4 June 1941) was the last German Emperor from 1888 until his abdication in 1918. His fall from power marked the end of the German Empire as well as the Hohenzollern dynasty's 400-year rule over Prussia.\n[…]\nHowever, Kaiser Wilhelm's insistence that the swastika and Nazi Party regalia not be displayed at his funeral was ignored, as is seen in the photographs of the funeral taken by a Dutch photographer.\n[…]\nWilhelm's biographer Lamar Cecil identified Wilhelm's \"curious but well-developed anti-Semitism\", noting that in 1888 a friend of Wilhelm \"declared that the young Kaiser's dislike of his Hebrew subjects, one rooted in a perception that they possessed an overweening influence in Germany, was so strong that it could not be overcome\".\n[…]\nAt the height of German military intervention against the Red Army during the Russian Civil War in 1918, Kaiser Wilhelm also suggested a similar campaign against the \"Jew-Bolsheviks\" who were slaughtering the Baltic German nobility in the Baltic states, citing the example of what Turks had done to the Ottoman Armenians just a few years earlier.\n[…]\nWilliam II. – The last days of the German Monarchy (original title: \"Wilhelm II. – Die letzten Tage des Deutschen Kaiserreichs\"), about the abdication and flight of the last German Kaiser. Germany/Belgium, 2007. Produced by seelmannfilm and German Television. Written and directed by Christoph Weinert.\n[…]\nRupert Julian played Wilhelm II in the 1918 Hollywood propaganda film The Kaiser, the Beast of Berlin.\n[…]\nSylvester Groth portrayed Wilhelm II during his last days as Emperor in the 2018 miniseries Kaisersturz (\"The Emperor's Fall\").\n[…]\nWorks by Wilhelm II at Project Gutenberg\n[…]\nKaiser Wilhelm II at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guilherme_II_da_Alemanha",
        "situacao": "ok",
        "texto": "Guilherme II (em alemão:  Wilhelm II; Friedrich Wilhelm Viktor Albert; Frederico Guilherme Vítor Alberto; Berlim, 27 de janeiro de 1859 – Doorn, 4 de junho de 1941) foi o último Imperador da Alemanha e Rei da Prússia de 1888 até sua abdicação em 1918, que marcou o fim do Império Alemão, bem como o governo de 300 anos da Dinastia Hohenzollern na Prússia.\n[…]\nObservando as pernas do bebê levantadas para cima, e seu braço esquerdo também levantado para cima e atrás da cabeça, Martin \"afastou cuidadosamente as pernas do príncipe\". Devido à \"estreiteza do canal de parto\", ele puxou à força o braço esquerdo para baixo, rompendo o plexo braquial, e continuou a agarrar o braço esquerdo para girar o tronco do bebê e liberar o braço direito, provavelmente agravando a lesão.\n[…]\nAs avaliações médicas modernas concluíram que o estado hipóxico de Guilherme ao nascer, devido ao parto pélvico e à alta dosagem de clorofórmio, deixou-o com danos cerebrais mínimos a leves, que se manifestaram em seu comportamento hiperativo e errático subsequente, capacidade de atenção limitada e habilidades sociais prejudicadas. A lesão no plexo braquial resultou na paralisia de Erb, que deixou Guilherme com o braço esquerdo atrofiado, cerca de 15cm mais curto que o direito.\n[…]\nEle tentou, com algum sucesso, esconder isso; muitas fotografias o mostram segurando um par de luvas brancas na mão esquerda para fazer o braço parecer mais longo. Em outras, ele segura a mão esquerda com a direita, segura o braço incapacitado no punho de uma espada ou segura uma bengala para dar a ilusão de um membro útil em um ângulo digno. Os historiadores sugeriram que essa deficiência afetou seu desenvolvimento emocional.\n[…]\nGuilherminismo\n[…]\nClark, Christopher M. Kaiser Wilhelm II (2000).\n[…]\nVan der Kiste, John. Kaiser Wilhelm II: Germany's Last Emperor, Sutton Publishing, 1999. ISBN 978-0-7509-1941-8.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Cher Ami",
      "descricao": "Pombo-correio do exército americano condecorado por levar uma mensagem que salvou o Batalhão Perdido em 1918."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 1918, Cher Ami foi condecorado na França por levar uma mensagem que salvou quase duzentos soldados americanos cercados. Que animal era Cher Ami?",
    "resposta": "Um pombo-correio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cher_Ami"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cher_Ami",
        "situacao": "ok",
        "texto": "Cher Ami (French for \"dear friend\", in the masculine) was a male homing pigeon known for his military service during World War I, especially the Meuse-Argonne offensive in October 1918. According to popular legend, he delivered a message alerting American forces to the location of the Lost Battalion, despite sustaining injuries such as being shot in the breast, losing his right leg and being blind\n[…]\nReports of Cher Ami's injuries vary. Some reports state that he lost an eye, though photographs from April 1919 show no evidence of this. A film made in 1919, The Lost Battalion, which mentions Cher Ami as losing an eye and leg, may have helped perpetuate reports of an eye wound. An October 1918 report by Captain David C.\n[…]\nAccording to Frank A. Blazich Jr., the curator of modern military history at the Smithsonian Institution’s National Museum of American History, where Cher Ami's body is located, \"There is nothing conclusive linking the pigeon to the actions of the Lost Battalion. Cher Ami did survive severe wounds transporting a message, but exactly where and when are uncertain. The U.S.\n[…]\nIn 2021, the National Museum of American History, together with the Smithsonian's National Zoo, had DNA samples from Cher Ami analyzed which concluded the bird is a cock bird.\n[…]\nSince 1921, Cher Ami has been on display at the Smithsonian Institution, then the United States National Museum. Today, he is on display in the National Museum of American History exhibit \"The Price of Freedom: Americans at War.\"\n[…]\n\"War Pigs\", an essay in the collection Animals Strike Curious Poses by Elena Passarello\n[…]\nCher Ami is mentioned in season 3, episode 11 of White Collar, first aired 2011.\n[…]\nThe Lost Battalion, a 2001 war film about the Meuse-Argonne Offensive of 1918, depicting Cher Ami being sent off with the important message.\n[…]\nA reference to Cher Ami is made in the 2024 Netflix series The Gentlemen."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Francisco José I da Áustria",
      "descricao": "Imperador da Áustria de 1848 a 1916 e rei da Hungria, que reinava sobre a Áustria-Hungria no início da Primeira Guerra Mundial."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "No trono desde 1848, que imperador governava a Áustria-Hungria quando a guerra começou e morreu em 1916, em pleno conflito?",
    "resposta": "Francisco José I",
    "fonte": [
      "https://en.wikipedia.org/wiki/Franz_Joseph_I_of_Austria"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Franz_Joseph_I_of_Austria",
        "situacao": "ok",
        "texto": "Franz Joseph I or Francis Joseph I (German: Franz Joseph Karl [fʁants ˈjoːzɛf ˈkaʁl]; Hungarian: Ferenc József Károly [ˈfɛrɛnt͡s ˈjoːʒɛf ˈkaːroj]; 18 August 1830 – 21 November 1916) was Emperor of Austria, King of Hungary, and the ruler of the other states of the Habsburg monarchy from 2 December 1848 until his death in 1916.\n[…]\nThe second cause was Francis Joseph's usurpation of the Hungarian throne; the third was the repudiation by the Habsburg court of the April Laws, which had been enacted by the Hungarian Diet and sanctioned by King Ferdinand V on 11 April 1848; and fourth, most decisively, the \"usurper's\" attempt to forcibly overthrow Hungary's legitimate constitutional government and elected representative parliament by the Habsburg army, which was interpreted by the government and Hungarian parliament as an \"attempted coup by military force\".\n[…]\nThe Compromise partially re-established the sovereignty of the Kingdom of Hungary, separate from, and no longer subject to the Austrian Empire. Instead, it was regarded as an equal partner with Austria. The compromise put an end to 18 years of absolutist rule and military dictatorship which had been introduced by Francis Joseph after the Hungarian Revolution of 1848.\n[…]\n18 August 1830 – 2 December 1848: His Imperial and Royal Highness Archduke and Prince Francis Joseph of Austria, Prince of Hungary, Bohemia and Croatia\n[…]\nFranz Joseph founded in 1872 the Franz Joseph University (Hungarian: Ferenc József Tudományegyetem, Romanian: Universitatea Francisc Iosif) in the city of Cluj-Napoca (at that time a part of Austria-Hungary under the name of Kolozsvár). The university was moved to Szeged after Cluj became a part of Romania, becoming the University of Szeged.\n[…]\nMurad, Anatol (1968). Franz Joseph I of Austria and his Empire. Twayne Publishers. ISBN 978-0-8290-0172-3."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Francisco_Jos%C3%A9_I_da_%C3%81ustria",
        "situacao": "ok",
        "texto": "Francisco José I (em alemão:  Franz Joseph Karl; em húngaro:  Ferenc József Károly; Viena, 18 de agosto de 1830 – Viena, 21 de novembro de 1916) foi Imperador da Áustria, Rei da Hungria e governante dos outros estados da monarquia dos Habsburgos de 2 de dezembro de 1848 até sua morte em 1916. No início de seu reinado, seus reinos e territórios eram chamados de Império Austríaco, mas foram reconsti\n[…]\nApós a Guerra Austro-Prussiana, a Áustria-Hungria voltou sua atenção para os Bálcãs, que eram um ponto crítico de tensão internacional devido aos interesses conflitantes da Áustria não apenas com o Império Otomano, mas também com o Império Russo. A Crise da Bósnia foi resultado da anexação da Bósnia e Herzegovina por Francisco José em 1908, que já estava ocupada por suas tropas desde o Congresso de Berlim (1878).\n[…]\nEm 28 de junho de 1914, o assassinato do arquiduque Francisco Ferdinando em Sarajevo resultou na declaração de guerra da Áustria-Hungria contra o Reino da Sérvia, que era um aliado do Império Russo. Isso ativou um sistema de alianças que declaravam guerra umas às outras, o que resultou na Primeira Guerra Mundial. Francisco José morreu em 1916, depois de governar seus domínios por 67 anos. Ele foi sucedido por seu sobrinho-neto Carlos I e IV.\n[…]\nSeu novo governo instalou o sistema de neoabsolutismo nos assuntos internos austríacos para tornar o Império Austríaco um estado unitário, centralizado e administrado burocraticamente. Quando Francisco José retornou ao governo constitucional após os desastres na Itália em Magenta e Solferino e convocou as dietas de suas terras, a questão de sua coroação como rei da Boêmia voltou à pauta, como não acontecia desde 1848.\n[…]\nCoronel-chefe do 122º Regimento de Fuzileiros (Imperador Francisco José da Áustria, Rei da Hungria (4º Württemberg)\n[…]\nRecortes de jornais sobre Francisco José I da Áustria nos Arquivos da Imprensa do Século XX da ZBW",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Charles de Gaulle",
      "descricao": "Militar e estadista francês, líder da França Livre na Segunda Guerra Mundial e presidente da França de 1959 a 1969."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que futuro presidente francês foi ferido e capturado pelos alemães em Verdun, em 1916, e passou o resto da guerra como prisioneiro?",
    "resposta": "Charles de Gaulle",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_de_Gaulle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_de_Gaulle",
        "situacao": "ok",
        "texto": "Charles André Joseph Marie de Gaulle (22 November 1890 – 9 November 1970) was a French general and statesman who led the Free French Forces against Nazi Germany and its puppet state of Vichy France in World War II and chaired the Provisional Government of the French Republic from 1944 to 1946 to restore democracy in France. Following the 1958 Algiers putsch, he came out of retirement at the reques\n[…]\nFrench political parties and leaders claim a Gaullist legacy; streets and monuments in France and other parts of the world were dedicated in honour of him after his death, such as the Paris Charles de Gaulle Airport in Paris, France.\n[…]\nIn the November 1958 election, Charles de Gaulle and his supporters (initially the Union pour la nouvelle République - Union démocratique du travail, then the Union des démocrates pour la Cinquième République, later still the Union des Démocrates pour la République, UDR) won a comfortable majority. On 21 December, he was elected President of France and was inaugurated in January 1959. As head of state, he became ex officio the Co-Prince of Andorra.\n[…]\nA number of monuments have been built to commemorate de Gaulle. France's largest airport, located in Roissy, outside Paris, is named Charles de Gaulle Airport. France's flagship nuclear-powered aircraft carrier is also named after him.\n[…]\nFenby, Jonathan, The General: Charles de Gaulle and the France He Saved. (2011). Simon & Schuster. ISBN 9781847394101\n[…]\nJackson, Julian, A Certain Idea of France: The Life of Charles de Gaulle (2018) 887pp.\n[…]\nWilliams, Charles. The Last Great Frenchman: A Life of General De Gaulle (1997), 560pp. excerpt and text search\n[…]\nCogan, Charles G. \"The Break-up: General de Gaulle's Separation from Power,\" Journal of Contemporary History Vol. 27, No. 1 (Jan. 1992), pp. 167–199, re: 1969 . JSTOR 260783.\n[…]\nNewspaper clippings about Charles de Gaulle in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_de_Gaulle",
        "situacao": "ok",
        "texto": "Charles André Joseph Marie de Gaulle (francês: [ʃaʁl də ɡol] (), Lille, 22 de novembro de 1890 – Colombey-les-Deux-Églises, 9 de novembro de 1970) foi um general, político e estadista francês que liderou as Forças Francesas Livres durante a Segunda Guerra Mundial e presidiu o Governo Provisório da República Francesa de 1944 a 1946, a fim de restabelecer a democracia na França.\n[…]\nComo presidente, Charles de Gaulle pôs fim ao caos político que precedeu o seu regresso ao poder. Durante seu governo, promoveu o controle da inflação e instituiu uma nova moeda em janeiro de 1960. Também fomentou o crescimento industrial. Apesar de ter apoiado inicialmente o domínio francês sobre a Argélia, decidiu mais tarde conceder a independência àquele país, encerrando uma guerra cara e impopular.\n[…]\nCharles De Gaulle foi alvo de três atentados confirmados, todos falhados. O primeiro ocorreu em Paris, no ano de 1945, por atiradores furtivos alemães. Outro em 8 de setembro de 1961, organizado por Raoul Salan, uma bomba fabricada com explosivo plástico explodiu perto de seu carro.\n[…]\nDe acordo com uma pesquisa de 2005, realizada no contexto do décimo aniversário da morte de François Mitterrand, 35 por cento dos entrevistados disseram que Mitterrand foi o melhor presidente francês de todos os tempos, seguido por Charles de Gaulle (30 por cento) e Jacques Chirac (12 por cento). Outra pesquisa da BVA quatro anos depois mostrou que 87% dos franceses consideravam sua presidência positivamente.\n[…]\nPraça Charles de Gaulle\n[…]\nQuinta República Francesa\n[…]\nFundação Charles de Gaulle. (em francês)\n[…]\nCírculo de Estudos Charles de Gaulle. (em francês)\n[…]\nOs papéis da Presidência da República do General de Gaulle estão guardados no Arquivo Nacional sob o símbolo AG/5(1). (em francês)\n[…]\nOs relatórios fotográficos da presidência do General de Gaulle (1959-1969) estão preservados no Arquivo Naciona (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "C. S. Lewis",
      "descricao": "Escritor e professor britânico (1898–1963), autor de As Crônicas de Nárnia."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que escritor britânico, futuro autor de As Crônicas de Nárnia, foi ferido por estilhaços de artilharia na França em 1918?",
    "resposta": "C. S. Lewis",
    "fonte": [
      "https://en.wikipedia.org/wiki/C._S._Lewis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/C._S._Lewis",
        "situacao": "ok",
        "texto": "Clive Staples Lewis (29 November 1898 – 22 November 1963) was a British author, literary scholar and Anglican lay theologian. He held academic positions in English literature at both Magdalen College, Oxford (1925–1954), and Magdalene College, Cambridge (1954–1963).\n[…]\nClive Staples Lewis was born in Belfast in Ulster, Ireland (before partition), on 29 November 1898. His father was Albert James Lewis (1863–1929), a solicitor whose father Richard Lewis had come to Ireland from Wales during the mid-19th century. Lewis's mother was Florence Augusta Lewis née Hamilton (1862–1908), known as Flora, the daughter of Thomas Hamilton, a Church of Ireland priest, and the great-granddaughter of both Bishop Hugh Hamilton and John Staples.\n[…]\nLewis also portrays Universal Morality in his works of fiction. In The Chronicles of Narnia he describes Universal Morality as the \"deep magic\" which everyone knew.\n[…]\nPullman is an atheist and is known to be sharply critical of Lewis's work, accusing Lewis of featuring religious propaganda, misogyny, racism, and emotional sadism in his books. However, he has also modestly praised The Chronicles of Narnia for being a \"more serious\" work of literature in comparison with Tolkien's \"trivial\" The Lord of the Rings. Authors of adult fantasy literature such as Tim Powers have also testified to being influenced by Lewis's work.\n[…]\nGreat Lives – \"Suzannah Lipscomb on CS Lewis\", 3 January 2017—BBC Radio 4. Step though the wardrobe on Great Lives as CS Lewis – creator of the Narnia Chronicles – is this week's choice.\n[…]\nWorks by Clive Staples Lewis at Project Gutenberg\n[…]\nWorks by C. S. (Clive Staples) Lewis at Faded Page (Canada)\n[…]\nWorks by C. S. Lewis at LibriVox (public domain audiobooks)\n[…]\nC. S. Lewis at the Internet Speculative Fiction Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C._S._Lewis",
        "situacao": "ok",
        "texto": "Clive Staples Lewis, comumente referido como C. S. Lewis (Belfast, 29 de novembro de 1898 — Oxford, 22 de novembro de 1963), foi um professor universitário, escritor, romancista, poeta, crítico literário, ensaísta e teólogo anglicano irlandês. Durante sua carreira acadêmica, foi professor e membro do Magdalen College, tanto da Universidade de Oxford como da Universidade de Cambridge.\n[…]\nNascido na cidade de Belfast, Irlanda (atual Irlanda do Norte), em 29 de novembro de 1898, Clive Staples Lewis cresceu no meio dos livros da seleta biblioteca particular de sua família, criando nesta atmosfera cultural um mundo todo próprio, dominado por sua fértil imaginação e criatividade. Filho caçula de Albert James Lewis (1863-1929) e de sua esposa, Florence Augusta Lewis (1862-1908), Clive foi descrito como uma \"criança sonhadora\".\n[…]\nLewis também retrata a Moralidade Universal em suas obras de ficção. Em As Crônicas de Nárnia, ele descreve a Moralidade Universal como a \"magia profunda\" que todos sabiam.\n[…]\nÉ bastante conhecida sua influência sobre personalidades ilustres da nossa época, dentre elas Margaret Thatcher, ex-primeira-ministra do Reino Unido. Seus livros foram lidos pelos seis últimos presidentes americanos, e muitos de seus pensamentos foram citados em seus discursos. Venderam-se mais de 200 milhões de cópias dos 38 livros escritos por Lewis, os quais foram traduzidos para mais de 30 línguas, incluindo a série completa de Nárnia para o polonês, ainda durante a Guerra fria, e o russo.\n[…]\nLewis, Clive Staples (2012) [1936], The Allegory of Love: A Study in Medieval Tradition [Alegoria do Amor: Um estudo da tradição medieval]\n[…]\nLewis, Clive Staples (1939), Rehabilitations and other essays  — com dois ensaios não incluídos em Essay Collection (2000).\n[…]\nLivros de CS Lewis (em inglês), Projecto Gutenberg\n[…]\nCS Lewis (em inglês), Open Directory\n[…]\nCS Lewis, BR",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Fritz Haber",
      "descricao": "Químico alemão (1868–1934), Nobel de Química de 1918 pela síntese da amônia e pioneiro da guerra química."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que químico alemão, premiado com o Nobel por sintetizar a amônia, supervisionou o primeiro grande ataque com gás cloro da guerra, em Ypres?",
    "resposta": "Fritz Haber",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fritz_Haber"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fritz_Haber",
        "situacao": "ok",
        "texto": "Fritz Jakob Haber (German: [ˈfʁɪt͡s ˈhaːbɐ] ; 9 December 1868 – 29 January 1934) was a German chemist who received the Nobel Prize in Chemistry in 1918 for his invention of the Haber process, a method used in industry to synthesize ammonia from nitrogen gas and hydrogen gas. This invention is important for the large-scale synthesis of fertilizers and explosives.\n[…]\nIn 2008, a short film titled Haber depicted Fritz Haber's decision to embark on the gas warfare program and his relationship with his wife. The film was written and directed by Daniel Ragussis.\n[…]\nLuggin–Haber capillary\n[…]\nCharles, Daniel: Master mind: The Rise and Fall of Fritz Haber, the Nobel Laureate Who Launched the Age of Chemical Warfare (New York: Ecco, 2005), ISBN 0-06-056272-2.\n[…]\nDunikowska, Magda; Turko, Ludwik 2011 \"Fritz Haber: The Damned Scientist\". \"Angew. Chem. Int. Ed.\" 50: 10050–10062\n[…]\nSmil, Vaclav (2004). Enriching the Earth: Fritz Haber, Carl Bosch, and the Transformation of World Food Production. MIT Press. ISBN 978-0-262-69313-4.\n[…]\nStern, Fritz: \"Together and Apart: Fritz Haber and Albert Einstein\", in Einstein's German World. Princeton University Press, 2001\n[…]\nStoltzenberg, Dietrich: Fritz Haber: Chemist, Nobel Laureate, German, Jew: A Biography (Chemical Heritage Foundation, 2005), ISBN 0-941901-24-6.\n[…]\nFritz Haber on Nobelprize.org  including the Nobel Lecture, 2 June 1920 The Synthesis of Ammonia from Its Elements\n[…]\nHABER – A biographical film about Fritz Haber\n[…]\nA short biography of Fritz Haber, by Bretislav Friedrich\n[…]\nFritz Haber, Encyclopædia Britannica\n[…]\n\"How do you solve a problem like Fritz Haber\" on NPR's Radiolab\n[…]\nFritz Haber: Jewish chemist whose work led to Zyklon B\n[…]\nTermination of Employment Letter to Ladislaus Farkas from Fritz Haber\n[…]\nNewspaper clippings about Fritz Haber in the 20th Century Press Archives of the ZBW\n[…]\nChlorine nitrogen and the legacies of Fritz Haber"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fritz_Haber",
        "situacao": "ok",
        "texto": "Fritz Haber (Breslávia, 9 de dezembro de 1868 — Basileia, 29 de janeiro de 1934) foi um químico alemão, laureado com o Nobel de Química de 1918, pela descoberta da síntese do amoníaco, importante para fertilizantes e explosivos. Estima-se que a produção de alimentos para metade da população mundial atual depende deste método para a produção de fertilizantes. Haber, juntamente com Max Born, propôs \n[…]\nFritz Haber nasceu em Breslávia (atual Polónia), numa família judaica de língua alemã. Converteu-se ao protestantismo em 1893. Foi padrinho do historiador Fritz Stern, também nascido em Breslau em uma família judaica.\n[…]\nFoi condecorado com o Nobel de Química de 1918 por este trabalho. A descoberta do processo Haber-Bosch foi um importante feito para a indústria química, possibilitando a produção de produtos químicos nitrogenados como fertilizantes, explosivos e outras matérias primas independentemente da utilização de depósitos naturais, especialmente do nitrato de sódio, do qual o Chile era o maior produtor.\n[…]\nOrganizou o departamento de guerra química do Ministério da Guerra da Alemanha, responsável pelo uso de certos gases durante a Primeira Guerra Mundial (entre os anos de 1915 e 1917). Entre eles usou o gás cloro e gás mostarda, sendo o primeiro utilizado numa investida na cidade de Ypres da Bélgica que deixou cerca de 5 000 mortos entre ingleses, franceses e alemães.\n[…]\nQuímica\n[…]\nFritz Haber em Nobelprize.org\n[…]\nFritz Haber Institute\n[…]\nSociedade Portuguesa de Química. Trata-se de uma biografia de Fritz Haber em português, “Grandeza e decadência de Fritz Haber”, escrita por Arkan Simaan.\n[…]\n(em francês) Arkan Simaan, Le paradoxe de la science : Fritz Haber, Cahiers rationalistes, número 579, novembro-dezembro 2005, Paris.\n[…]\n(em francês) Arkan Simaan, « Fritz Haber, chimiste à double visage », Science et pseudo-sciences, número 269, outubro 2005, Paris",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Mito da punhalada pelas costas",
      "descricao": "Teoria conspiratória difundida na Alemanha após 1918 segundo a qual o exército alemão não fora derrotado em combate, mas traído por civis e políticos."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Depois da guerra, nacionalistas alemães espalharam a ideia falsa de que o exército fora traído por civis e políticos em casa. Que nome esse mito recebeu?",
    "resposta": "Punhalada pelas costas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stab-in-the-back_myth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stab-in-the-back_myth",
        "situacao": "ok",
        "texto": "The stab-in-the-back myth (German: Dolchstoßlegende, pronounced [ˈdɔlçʃtoːsleˌɡɛndə] , lit. 'dagger-stab legend') is an antisemitic and anti-communist conspiracy theory that was widely believed and promulgated in Germany after 1918.\n[…]\nContributing to the Dolchstoßlegende, the overall failure of the German offensive was blamed on strikes in the arms industry at a critical moment, leaving soldiers without an adequate supply of materiel. The strikes were seen as having been instigated by treasonous elements, with the Jews taking most of the blame.\n[…]\nThe troops on the lines of communication and the reserves disbanded themselves, and unfavourable reports arrived concerning the reliability of the field army proper.It was particularly this testimony of Hindenburg that led to the widespread acceptance of the Dolchstoßlegende in post-World War I Germany.\n[…]\nThe Dolchstoß was a central image in propaganda produced by the many right-wing and traditionally conservative political parties that sprang up in the early days of the Weimar Republic, including Adolf Hitler's Nazi Party. For Hitler himself, this explanatory model for World War I was of crucial personal importance. He had learned of Germany's defeat while being treated for temporary blindness following a gas attack on the front.\n[…]\nThe editor of an SPD newspaper sued the journal for defamation, giving rise to what is known as the Munich Dolchstoßprozess from 19 October to 20 November 1925. Many prominent figures testified in that trial, including members of the parliamentary committee investigating the reasons for the defeat, so some of its results were made public long before the publication of the committee report in 1928."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lenda_da_punhalada_pelas_costas",
        "situacao": "ok",
        "texto": "A Lenda da Punhalada pelas Costas (em alemão: Dolchstoßlegende) foi uma popular lenda política do período entre-guerras na Alemanha, que se manteve até às vésperas da Segunda Guerra Mundial.\n[…]\nA lenda atribuía a derrota do Império Alemão na Primeira Guerra Mundial ao fracasso do povo em responder ao \"chamado patriótico\" e à sabotagem do esforço de guerra pelos socialistas, bolcheviques e judeus alemães, e não pela incapacidade do Reichsheer de participar da batalha, exonerando os militares do país de sua perda.\n[…]\nHistoricamente, a Dolchstoßlegende revelou-se importante para a ascensão política de Adolf Hitler e para o crescimento do Partido Nazista, já que muito de sua base política original consistia de veteranos da Primeira Guerra Mundial e muitos estavam próximos à interpretação Dolchstoß da história recente alemã.\n[…]\nDeutsche Welle - 1919: A \"lenda da punhalada pelas costas\" fomenta o nazismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Batalha de Verdun",
      "descricao": "Batalha travada entre franceses e alemães em 1916, perto da cidade de Verdun, uma das mais longas e sangrentas da Primeira Guerra Mundial."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Com cerca de dez meses de combates em 1916, qual foi a batalha mais longa da Primeira Guerra Mundial?",
    "resposta": "Batalha de Verdun",
    "distratores": [
      "Batalha do Somme",
      "Batalha do Marne",
      "Batalha de Passchendaele"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_Verdun"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Verdun",
        "situacao": "ok",
        "texto": "The Battle of Verdun (French: Bataille de Verdun [bataj də vɛʁdœ̃]; German: Schlacht um Verdun [ʃlaxt ʔʊm ˈvɛɐ̯dœ̃]) was fought from 21 February to 18 December 1916 on the Western Front in France. The battle was the longest of the First World War and took place on the hills north of Verdun. The German 5th Army attacked the defences of the Fortified Region of Verdun (RFV, Région Fortifiée de Verdun\n[…]\nNivelle had been concerned about declining French morale at Verdun; after his promotion to lead the Second Army in June 1916, Défaillance, manifestations of indiscipline, occurred in five front line regiments. Défaillance reappeared in the French army mutinies that followed the Nivelle Offensive (April–May 1917).\n[…]\nGrant gave a figure of 355,000 German and 400,000 French casualties in 2005. In 2005, Robert Foley used the Wendt calculations of 1931 to give German casualties at Verdun from 21 February to 31 August 1916 of 281,000, against 315,000 French. (In 2014, William Philpott recorded 377,000 French casualties, of whom 162,000 had been killed; German casualties were 337,000 and noted a recent estimate of casualties at Verdun from 1914 to 1918 of 1,250,000).\n[…]\nThe 5th Army had spent a year improving their defences at Verdun, including the excavation of tunnels linking Mort-Homme with the rear, to deliver supplies and infantry with impunity. On the right bank, the Germans had developed four defensive positions, the last on the French front line of early 1916.\n[…]\nBrown, M. (1999). Verdun 1916. Stroud: Tempus. ISBN 978-0-7524-1774-5.\n[…]\nMartin, W. (2001). Verdun 1916. London: Osprey. ISBN 978-1-85532-993-5.\n[…]\nBruce, Robert B. (1998). \"To the Last Limits of Their Strength: The French Army and the Logistics of Attrition at the Battle of Verdun 21 February – 18 December 1916\". Army History. 45 (45). Washington, D.C.: U.S. Army Center of Military History: 9–21. ISSN 1546-5330. JSTOR 26304799."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_de_Verdun",
        "situacao": "ok",
        "texto": "A Batalha de Verdun (em francês:  Bataille de Verdun [bataj də vɛʁdœ̃]; em alemão:  Schlacht um Verdun [ʃlaxt ˀʊm ˈvɛɐdœŋ]), foi a única grande ofensiva alemã que ocorreu entre a Primeira Batalha do Marne em 1914 e a Kaiserschlacht do general Erich Ludendorff na primavera de 1918.\n[…]\nEntre agosto e dezembro, os franceses lançaram múltiplos contra-ataques, recuperando boa parte do terreno perdido na margem leste do Meuse e finalmente recuperando Forte Douaumont e Forte Vaux. Em meados de dezembro, Falkenhayn cancelou novas ofensivas e, com os franceses no controle de boa parte de Verdun, a batalha foi assim encerrada. Foram 302 dias de combates, fazendo desta batalha uma das mais longas da Primeira Guerra. Também foi uma das mais sangrentas.\n[…]\nOs franceses lançaram uma grande contra-ofensiva para recapturar Douaumont em Outubro de 1916 (a Primeira Batalha Ofensiva de Verdun). O seu mentor foi o general Nivelle, um oficial com grande experiência na utilização da artilharia. A acção preliminar, que demorou seis dias, consumiu 530 000 projécteis de artilharia de 75 mm e 100 000 de 155 mm, sem ter em conta os calibres mais pesados.\n[…]\nA Batalha de Verdun popularizou a frase do general Robert Nivelle: \"Eles não passarão\", cujo texto francês original é: \"Vous ne les laisserez pas passer, mes camarades\" (\"[vocês] não os deixaram passar, meus camaradas \"), registada na Ordem do Dia de Nivelle de 23 de Junho de 1916. Cerca de dois meses antes, em Abril de 1916, o general Philippe Pétain tinha também emitido uma Ordem do Dia, mas era optimista: \"Courage! On les aura\" (\"Coragem! Eles serão apanhados \").\n[…]\nMedia relacionados com Batalha de Verdun no Wikimedia Commons\n[…]\nBatalha de Verdun (em inglês)\n[…]\nMapa da Europa durante a Batalha de Verdun (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Batalha da Jutlândia",
      "descricao": "Batalha naval de 1916 entre a Grande Frota britânica e a Frota de Alto-Mar alemã, no Mar do Norte."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na Batalha da Jutlândia, em 1916, qual das duas frotas perdeu mais navios e marinheiros, embora tenha mantido o controle do mar?",
    "resposta": "A britânica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_Jutland"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Jutland",
        "situacao": "ok",
        "texto": "The Battle of Jutland (German: Skagerrakschlacht, lit. 'Battle of the Skagerrak') was a naval battle between Britain's Royal Navy Grand Fleet, under Admiral Sir John Jellicoe, and the Imperial German Navy's High Seas Fleet, under Vice-Admiral Reinhard Scheer, during the First World War. The battle unfolded in extensive manoeuvring and three main engagements from 31 May to 1 June 1916, off the Nort\n[…]\nAt the end of 1916, after further unsuccessful attempts to reduce the Royal Navy's numerical advantage, the German Navy accepted its surface ships had been successfully contained, turning its resources to unrestricted submarine warfare for the second time (the first attempt of the war having ended with the controversy following the sinking of the RMS Lusitania by U-20) and destruction of Allied and neutral shipping, which—with the Zimmermann Telegram—by April 1917 triggered the United States of America's declaration of war on Germany.\n[…]\nBeatty's force of six ships of the 1st and 2nd Battlecruiser Squadrons plus the 5th Battle Squadron of four fast battleships left the Firth of Forth at around the same time; Jellicoe intended to rendezvous with him 90 mi (78 nmi; 140 km) west of the mouth of the Skagerrak off the coast of Jutland and wait for the Germans to appear or for their intentions to become clear. The planned position would give him the widest range of responses to likely German moves.\n[…]\nIn 1916 Contreadmiral Friedrich von Kühlwetter (1865–1931) wrote a detailed analysis of the battle and published it in a book under the title Skagerrak (first anonymously published), which was reprinted in large numbers until after World War II and had a huge influence in keeping the battle in public memory amongst Germans as it was not tainted by the ideology of the Third Reich. Kühlwetter built the School for Naval Officers at Mürwik near Flensburg, where he is still remembered."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_da_Jutl%C3%A2ndia",
        "situacao": "ok",
        "texto": "A Batalha da Jutlândia, chamada em alemão da Batalha de Skagerrak, foi uma batalha naval travada entre a Grande Frota da Marinha Real Britânica, sob o comando do Almirante Sir John Jellicoe, e a Frota de Alto Mar da Marinha Imperial Alemã, sob o comando do Vice-Almirante Reinhard Scheer, durante a Primeira Guerra Mundial.\n[…]\nNo momento em que Beatty avistou a força maior e voltou para a frota principal britânica, ele havia perdido dois cruzadores de batalha de uma força de seis cruzadores de batalha e quatro poderosos navios de guerra - embora ele tivesse corrido à frente de seus navios de guerra do 5º Esquadrão de Batalha.no início do dia, perdendo-os efetivamente como um componente integral para grande parte desta ação de abertura contra os cinco navios comandados por Hipper.\n[…]\nA retirada de Beatty ao avistar a Frota de Alto Mar, que os britânicos não sabiam estar em mar aberto, reverteria o curso da batalha ao atrair a frota alemã em perseguição à Grande Frota Britânica. Entre 18h30, quando o sol estava se pondo no horizonte oeste, iluminando as forças alemãs, e o anoitecer por volta das 20h30, as duas frotas - totalizando 250 navios entre elas - se enfrentaram diretamente duas vezes.\n[…]\nAmbos os lados reivindicaram a vitória. Os britânicos perderam mais navios e o dobro de marinheiros, mas conseguiram conter a frota alemã. A imprensa britânica criticou o fracasso da Grande Frota em forçar um resultado decisivo, enquanto o plano de Scheer de destruir uma parte substancial da frota britânica também falhou. A estratégia britânica de negar à Alemanha o acesso ao Reino Unido e ao Atlântico teve sucesso, o que era o objetivo britânico de longo prazo.\n[…]\n\"A Batalha da Jutlândia\" (em português)\n[…]\n\"Centenary News Lookahead: Battle of Jutland\" (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Armistício de Salônica",
      "descricao": "Armistício assinado em 29 de setembro de 1918 entre a Bulgária e os Aliados, que tirou a Bulgária da Primeira Guerra Mundial."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em setembro de 1918, qual das Potências Centrais foi a primeira a assinar um armistício com os Aliados e sair da guerra?",
    "resposta": "Bulgária",
    "distratores": [
      "Império Otomano",
      "Áustria-Hungria",
      "Alemanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Armistice_of_Salonica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Armistice_of_Salonica",
        "situacao": "ok",
        "texto": "The Armistice of Salonica (also known as the Armistice of Thessalonica) was the armistice signed at 10:50 p.m. on 29 September 1918 between Bulgaria and the Allied Powers at the General Headquarters of the Allied Army of the Orient in Thessaloniki. The armistice came into force at noon on 30 September 1918. The armistice would remain in effect until the conclusion of the Treaty of Neuilly-sur-Sein\n[…]\nThe Kingdom of Bulgaria entered World War I on the side of the Central Powers on 14 October 1915, invading and occupying parts of Serbia. However, Bulgarian forces would struggle against the Vardar offensive launched by the Allies in September 1918, causing part of the Bulgarian Army to collapse, and an open mutiny of rebellious troops who proclaimed a republic at Radomir. The Bulgarian government then requested a ceasefire on 24 September.\n[…]\nThe terms included the withdrawal of Bulgarian forces in occupied areas and the demobilization of most of Bulgaria's army.\n[…]\nThe armistice effectively ended Bulgaria's participation in World War I on the side of the Central Powers and came into effect on the Bulgarian Front at noon on 30 September. The armistice regulated the demobilization and the disarmament of the Bulgarian armed forces.\n[…]\nIts importance was described by German Emperor Wilhelm II in his telegram to Bulgarian Tsar Ferdinand I: \"Disgraceful! 62,000 Serbs decided the war!\"\n[…]\nBulgaria and especially Sofia were not to be occupied, but the Allies had the right to occupy some strategic points temporarily and to transfer troops over Bulgarian territory.\n[…]\nAccording to Article 5, about 150,000 Bulgarian soldiers to the west of the Skopje meridian were to be delivered to the Entente as hostages.\n[…]\n(1919) \"Bulgaria Armistice Convention, September 29th, 1918\". The American Journal of International Law Vol. 13 No.4 Supplement: Official Documents, 402-404."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Armist%C3%ADcio_com_a_Bulg%C3%A1ria",
        "situacao": "ok",
        "texto": "O armistício com a Bulgária (também conhecido como o Armistício de Tessalônica) foi assinado em 29 de setembro de 1918 na Convenção do Armistício da Bulgária, em Salônica, na Grécia, entre o Reino da Bulgária e as Potências Aliadas. A convenção foi seguida de um pedido do governo búlgaro em 24 de setembro, pedindo um cessar-fogo.\n[…]\nO armistício terminou eficazmente a participação da Bulgária na Primeira Guerra Mundial ao lado das Potências Centrais, e regulamentou a desmobilização e o desarmamento das forças armadas da Bulgária.\n[…]\nNa prática, esse ato marcou o fim da Primeira Guerra Mundial. O avanço da Frente da Macedônia é apenas um reflexo do sentimento público na Bulgária como resultado do Tratado de Bucareste (1918), com o qual a Alemanha não cumpre suas obrigações contratuais com a Bulgária.\n[…]\nOs termos do armistício apelaram à desmobilização imediata de todas as atividades militares búlgaras. Foi ordenado a evacuação dos territórios gregos e sérvios ocupados pelos búlgaros, e se estabeleciam limites e restrições ao tamanho do exército da Bulgária e, a Bulgária foi obrigada a devolver o equipamento militar que tinha sido tirado do IV Corpo do Exército grego durante a ocupação búlgara do Sul da Macedônia em 1916.\n[…]\n(1919) \"Bulgaria Armistice Convention, September 29th, 1918\". The American Journal of International Law Vol. 13 No.4 Supplement: Official Documents, 402-404.\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em inglês cujo título é «Armistice with Bulgaria (World War I)», especificamente desta versão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Jorge V",
      "descricao": "Rei do Reino Unido de 1910 a 1936, que reinou durante a Primeira Guerra Mundial."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Jorge V, Guilherme II e Nicolau II eram primos e reinavam em 1914. Qual dos três ainda estava no trono quando a guerra terminou?",
    "resposta": "Jorge V",
    "fonte": [
      "https://en.wikipedia.org/wiki/George_V",
      "https://en.wikipedia.org/wiki/Wilhelm_II",
      "https://en.wikipedia.org/wiki/Nicholas_II"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/George_V",
        "situacao": "ok",
        "texto": "George V (George Frederick Ernest Albert; 3 June 1865 – 20 January 1936) was King of the United Kingdom and the British Dominions, and Emperor of India, from 6 May 1910 until his death in 1936.\n[…]\nDesperate to avoid the prospect of civil war in Ireland between Unionists and Nationalists, George called a meeting of all parties at Buckingham Palace in July 1914 in an attempt to negotiate a settlement. After four days the conference ended without an agreement. Political developments in Britain and Ireland were overtaken by events in Europe, and the issue of Irish Home Rule was suspended for the duration of the war.\n[…]\nOn 4 August 1914, George wrote in his diary, \"I held a council at 10:45 to declare war with Germany. It is a terrible catastrophe but it is not our fault. ... Please to God it may soon be over.\" From 1914 to 1918, Britain and its allies were at war with the Central Powers, led by the German Empire. German Kaiser Wilhelm II, who for the British public came to symbolise all the horrors of the war, was the King's first cousin.\n[…]\nGore, John (1941), King George V: a personal memoir\n[…]\nCannadine, David (2014), George V: The Unexpected King\n[…]\nRidley, Jane (2022), George V: Never a Dull Moment, excerpt\n[…]\nSomervell, D. C. (1936), The Reign of King George V, wide-ranging political, social and economic coverage, 1910–35\n[…]\nSpender, John A. (1935), \"British Foreign Policy in the Reign of HM King George V\", International Affairs, 14 (4): 455–479, JSTOR 2603463\n[…]\nGeorge V at the official website of the British monarchy\n[…]\nGeorge V at the official website of the Royal Collection Trust\n[…]\nGeorge V at BBC History\n[…]\nPortraits of King George V at the National Portrait Gallery, London\n[…]\nKing George V at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wilhelm_II",
        "situacao": "ok",
        "texto": "Wilhelm II (Friedrich Wilhelm Viktor Albert; 27 January 1859 – 4 June 1941) was the last German Emperor from 1888 until his abdication in 1918. His fall from power marked the end of the German Empire as well as the Hohenzollern dynasty's 400-year rule over Prussia.\n[…]\nOn 19 August 1914, Wilhelm II predicted that Germany would win the war. He said, \"I am firmly confident that, with the help of God, the bravery of the German Army and Navy and the unquenchable unanimity of the German people during those hours of danger, victory will crown our cause.\"\n[…]\nEducated by Schlieffen they put the plans he had worked out under me into practice along the same lines as we did in 1914.\" Hitler, on the other hand, in one of his speeches in 1940, specifically stated that the downfall of Germany in the First World War was due to the country's \"poor leadership\" at that time.\n[…]\nRöhl has portrayed Wilhelm as the key figure in understanding the recklessness and downfall of Imperial Germany. Thus, the argument is still made that the Kaiser played a major role in promoting the policies of both naval and colonialist expansion that caused the deterioration of Germany's relations with Britain before 1914.\n[…]\nThe following January, Wilhelm received a birthday greeting from a son of the late Prince Johann George Ludwig Ferdinand August Wilhelm of Schönaich-Carolath. The 63-year-old Wilhelm invited the boy and his mother, Princess Hermine Reuss of Greiz, to Doorn. Wilhelm found 35-year-old Hermine very attractive, and greatly enjoyed her company. The couple were wed in Doorn on 5 November 1922 despite the objections of Wilhelm's monarchist supporters and his children.\n[…]\nSaunders, George (1922). \"William II. of Hohenzollern\" . Encyclopædia Britannica. Vol. 32 (12th ed.)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nicholas_II",
        "situacao": "ok",
        "texto": "Nicholas II (18 May [O.S. 6 May] 1868 – 17 July 1918) was the last Emperor of Russia from 1 November 1894 until his abdication in 1917, during the Russian Revolution. A member of the Romanov dynasty, he oversaw the Russian Empire's role in the Russo-Japanese War and the First World War. During the Russian Civil War, Nicholas and his family were killed by the Bolsheviks.\n[…]\nVariations in the figures cited regarding the incomes of the Russian Imperial Family are likely further compounded by based changes in exchange rates during the nineteenth and early twentieth centuries; the approximate exchange rate of ₽2:$1 and ₽10:£1 in the late 19th century fell to ₽3:$1 and ₽15:£1 from 1914 to 1917.\n[…]\nFurthermore, he alleged that in 1914 an \"overcareful Minister of the Imperial Court, acting against the orders of the Czar,\" had transferred the sums held from the annual allowances paid to Emperor Nicholas II's five children to Berlin, amounting to some 7,000,000 roubles; as a result, this part of the Romanov Family's wealth was lost in the rampant German currency inflation in the early 1920's.\n[…]\nEmperor Nicholas II Land (Russian: Земля Императора Николая II, Zemlya Imperatora Nikolaya II) was discovered in 1913 by the Arctic Ocean Hydrographic Expedition led by Boris Vilkitsky on behalf of the Russian Hydrographic Service. Still incompletely surveyed, the new territory was officially named in the Emperor's honour by order of the Secretary of the Imperial Navy in 1914.\n[…]\nKnight of St. George, 4th Class, 7 November 1915\n[…]\nThrough his maternal grandfather, King Christian IX of Denmark, Nicholas II was descendant of King George II of Great Britain as Christian IX was George II's great-great-grandson.\n[…]\n(in Russian) The Murder of Russia's Imperial Family Archived 22 March 2007 at the Wayback Machine, Nicolay Sokolov. Investigation of execution of the Romanovs."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jorge_V_do_Reino_Unido",
        "situacao": "ok",
        "texto": "Jorge V (nascido Jorge Frederico Ernesto Alberto em inglês:  George Frederick Ernest Albert; Londres, 3 de junho de 1865 – Sandringham, 20 de janeiro de 1936) foi Rei do Reino Unido e dos Domínios Britânicos e Imperador da Índia de 1910 até sua morte, patriarca e primeiro monarca britânico da Casa de Windsor. Segundo filho varão do rei Eduardo VII e da rainha Alexandra da Dinamarca.\n[…]\nDe 1914 a 1918, a Grã-Bretanha esteve em guerra com a Alemanha e o cáiser Guilherme II — que, para o povo britânico, simbolizava todos os horrores da guerra — era primo-irmão do rei. O avô paterno de Jorge era o príncipe Alberto de Saxe-Coburgo-Gota e, por conseguinte, tanto ele quanto seus filhos possuíam os títulos de príncipes e princesa de Saxe-Coburgo-Gota e de duques e duquesa de Saxe.\n[…]\nDois meses após o término da guerra, o filho mais novo do rei, João, morreu com a idade de 13 anos, após uma vida de problemas de saúde. Jorge foi informado de sua morte pela rainha Maria, que escreveu: \"[João] foi uma grande preocupação para nós por muitos anos […] O primeiro rompimento no círculo familiar é difícil de suportar, mas as pessoas têm sido tão gentis e simpáticas que têm-nos ajudado muito\".\n[…]\nNo cortejo fúnebre para o Westminster Hall, uma parte da Coroa Imperial do Estado, que estava sobre o caixão, caiu na sarjeta na altura do New Palace Yard. O novo rei, Eduardo VIII, viu o incidente e questionou se não seria um mau presságio para o seu novo reino. Eduardo abdicou antes do fim do ano, sendo sucedido por seu irmão Alberto, duque de Iorque, que subiu ao trono como Jorge VI.\n[…]\nDois navios de guerra da Marinha Real foram batizados com o nome do rei: o HMS King George V, lançado ao mar em 1911, e seu homônimo, lançado ao mar em 1939. Jorge V deu seu nome e doações a muitas instituições de caridade, incluindo o King George’s Fund for Sailors (mais tarde conhecido como Seafares UK).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Marinha Real Britânica",
      "descricao": "Força naval do Reino Unido, conhecida em inglês como Royal Navy."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Quando a guerra começou, em 1914, que país tinha a marinha de guerra mais poderosa do mundo?",
    "resposta": "Reino Unido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Royal_Navy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Royal_Navy",
        "situacao": "ok",
        "texto": "The Royal Navy (RN) is the naval warfare force of the United Kingdom, responsible for defending the country, the Crown Dependencies, and the Overseas Territories from naval attack or invasion. It is a component of His Majesty's Naval Service, and its officers hold their commissions from the King. Although warships were used by English and Scottish kings from the early medieval period, the first ma\n[…]\nBritain's reliance on Malta, via the Suez Canal, as the nearest Imperial fortress was improved, relying on amity and common interests that developed between Britain and the United States during and after World War I, by the completion of the Panama Canal in 1914, allowing the cruisers based in Bermuda to more easily and rapidly reach the eastern Pacific Ocean (after the war, the Royal Navy's Bermuda-based North America and West Indies Station was consequently re-designated the America and West Indies station), including a South American division.\n[…]\nHMS Raleigh at Torpoint, Cornwall, is the basic training facility for newly enlisted ratings. Britannia Royal Naval College in Dartmouth, Devon is the initial officer training establishment for the Royal Navy. Personnel are divided into a warfare branch, which includes Warfare Officers (previously named seamen officers) and Naval Aviators, as well other branches including the Royal Naval Engineers, Royal Navy Medical Branch, and Logistics Officers (previously named Supply Officers).\n[…]\nThe academy where initial training for future Royal Navy officers takes place is Britannia Royal Naval College, located on a hill overlooking Dartmouth, Devon. Basic training for future ratings takes place at HMS Raleigh at Torpoint, Cornwall, close to HMNB Devonport.\n[…]\nSeligmann, Matthew S (20 March 2018). \"A Service Ready for Total War? The State of the Royal Navy in July 1914\". The English Historical Review. 133 (560): 98–122. doi:10.1093/ehr/cey060."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Marinha_Real_Brit%C3%A2nica",
        "situacao": "ok",
        "texto": "A Marinha Real Britânica (Royal Navy) é o ramo naval das forças armadas do Reino Unido e um componente do Serviço Naval de Sua Majestade. Embora os navios de guerra tenham sido usados ​​pelos reis ingleses e escoceses desde o início do período medieval, os primeiros grandes combates marítimos foram travados na Guerra dos Cem Anos contra a França.\n[…]\nA moderna Marinha Real tem suas origens no início do Século XVI; a mais antiga das forças armadas do Reino Unido, é consequentemente conhecida como Senior Service.\n[…]\nEntrega da força de Comando do Reino Unido;\n[…]\nO Comandante do Componente Marítimo do Reino Unido, superintendente de todos os navios de guerra de Sua Majestade no Golfo Pérsico e nas águas circundantes, também é vice-comandante da Combined Maritime Forces. A Marinha Real foi responsável por treinar a nova Marinha do Iraque e garantir a segurança dos terminais petrolíferos do Iraque após a cessação das hostilidades no país.\n[…]\nHoje, a marinha do Reino Unido é comumente chamada de \"Marinha Real\", tanto no Reino Unido quanto em outros países. Os navios de outros países da Commonwealth onde o monarca britânico também é Chefe de Estado incluem o seu nome nacional, por ex. Marinha Real Australiana. Alguns navios de outras monarquias, como o Koninklijke Marine (Marinha Real Neerlandesa), também são chamados de \"Marinha Real\" em seu próprio idioma.\n[…]\nA Marinha também pode ser vista em vários filmes. O espião fictício James Bond é comandante da Royal Naval Volunteer Reserve (RNVR). A Marinha Real é destaque em The Spy Who Loved Me quando um submarino com mísseis balísticos nucleares é roubado, e em Tomorrow Never Dies, quando o magnata da mídia Elliot Carver afunda um navio de guerra da Marinha Real na tentativa de desencadear uma guerra entre o Reino Unido e a República Popular da China.\n[…]\nRoyal Marines (fuzileiros)\n[…]\nRoyal Navy no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Corpo de Exército Australiano e Neozelandês",
      "descricao": "Corpo militar formado em 1914 por tropas da Austrália e da Nova Zelândia, conhecido pela sigla ANZAC e pela luta em Galípoli."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Galípoli, lutou do lado aliado o corpo de exército conhecido como Anzac. Ele reunia soldados de que dois países?",
    "resposta": "Austrália e Nova Zelândia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Australian_and_New_Zealand_Army_Corps"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Australian_and_New_Zealand_Army_Corps",
        "situacao": "ok",
        "texto": "The Australian and New Zealand Army Corps (ANZAC) was originally a First World War army corps of the British Empire under the command of the Mediterranean Expeditionary Force. It was formed in Egypt in December 1914, and operated during the Gallipoli campaign.\n[…]\nThe term 'ANZAC' has been used since for joint Australian–New Zealand units of different sizes.\n[…]\nIn response to lobbying by the Australian and New Zealand governments, in 1916 the United Kingdom introduced legislation prohibiting the use of the term in trade or business without the approval of the government of Australia or New Zealand. This resulted in the cancellation of around 29 already registered trademarks including \"Anzac Motor Company\" and \"Anzac Soap\".\n[…]\nAustralia and New Zealand governments were unsuccessful post WWI in persuading other governments to introduce similar restrictions. However, in 2003 the countries successfully applied to register Anzac as an \"official sign, hallmark or emblem\" under the Paris Convention for the Protection of Industrial Property, requiring signatory countries to refuse the registration of Anzac under their domestic trademark law.\n[…]\nMilitary history of Australia during World War I\n[…]\nVisit Gallipoli: Australian site about Gallipoli and the Anzacs, includes previously unpublished photographs, artworks and documents from Government archives. A site by the Australian Department of Veterans' Affairs.\n[…]\nDiscovering Anzacs, includes service records and profiles from National Archives of Australia and Archives NZ for those who enlisted in WWI.\n[…]\nAn ongoing collection of geo-mapped Australian & ANZAC War Memorial photographs.\n[…]\nSeal, Graham: Anzac (Australia), in: 1914-1918-online. International Encyclopedia of the First World War.\n[…]\nBeersheba ANZAC Memorial Center"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/For%C3%A7as_Armadas_da_Austr%C3%A1lia_e_Nova_Zel%C3%A2ndia",
        "situacao": "ok",
        "texto": "As Forças Armadas da Austrália e Nova Zelândia (em inglês:  Australia and New Zealand Army Corps, ANZAC) é o exército conjunto da Austrália e Nova Zelândia em tempos de guerra.\n[…]\nTodos os anos, no dia 25 de Abril, ambos os países celebram o \"Dia ANZAC\", em que ocorrem desfiles militares em todas as grandes cidades e seus cidadãos relembram os esforços dos veteranos de guerra, prestam homenagem àqueles que já faleceram, e mostram admiração pelos militares que hoje estão em serviço.\n[…]\nAustrália na Primeira Guerra Mundial\n[…]\nExército Australiano durante a Segunda Guerra Mundial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Acordo Sykes-Picot",
      "descricao": "Acordo secreto de 1916 entre o Reino Unido e a França, com assentimento da Rússia, para dividir territórios do Império Otomano no Oriente Médio."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1916, o acordo secreto Sykes-Picot dividia boa parte do Oriente Médio otomano entre que duas potências?",
    "resposta": "Reino Unido e França",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sykes%E2%80%93Picot_Agreement"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sykes%E2%80%93Picot_Agreement",
        "situacao": "ok",
        "texto": "The Sykes–Picot Agreement () was a 1916 secret treaty between the United Kingdom and France, with assent from Russia and Italy, to define their mutually agreed spheres of influence and control in an eventual partition of the Ottoman Empire.\n[…]\nThe agreement was based on the premise that the Triple Entente would achieve success in defeating the Ottoman Empire during World War I and formed part of a series of secret agreements contemplating its partition. The primary negotiations leading to the agreement took place between 23 November 1915 and 3 January 1916, on which date the British and French diplomats, Mark Sykes and François Georges-Picot, initialled an agreed memorandum.\n[…]\nSykes was the author of the Hogarth Message a secret January 1918 message to Hussein following his request for an explanation of the Balfour Declaration and the Bassett Letter was a letter (also secret) dated 8 February 1918 from the British Government to Hussein following his request for an explanation of the Sykes–Picot Agreement.\n[…]\nMany sources contend that Sykes–Picot conflicted with the McMahon–Hussein correspondence of 1915–1916 and that the publication of the agreement in November 1917 caused the resignation of Sir Henry McMahon. There were several points of difference, the most obvious being Iraq placed in the British red area and less obviously, the idea that British and French advisors would be in control of the area designated as being for an Arab state.\n[…]\nDonaldson, Megan (2016). \"Textual Settlements: The Sykes–Picot Agreement and Secret Treaty-Making\" (PDF). AJIL Unbound. 110: 127–131. doi:10.1017/S2398772300002932. ISSN 2398-7723.\n[…]\nThe Sykes–Picot Agreement\n[…]\nSykes-Picot from Yale"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Acordo_Sykes-Picot",
        "situacao": "ok",
        "texto": "O Acordo Sykes-Picot de 16 de maio de 1916 foi um ajuste secreto entre os governos do Reino Unido e da França que definiu as suas respectivas esferas de influência no Oriente Médio, considerando-se a hipótese de derrota do Império Otomano na Primeira Guerra Mundial. O acordo estabeleceu limites que ainda permanecem na maior parte da fronteira comum entre a Síria e o Iraque.\n[…]\nO Acordo estabeleceu a partição antecipada do espólio do Império Otomano no Oriente Médio, dois anos antes do fim da Primeira Guerra Mundial. Tal divisão deveria contemplar os interesses estratégicos das grandes potências imperialistas na região - notadamente, com referência ao petróleo e ao Canal de Suez. Com o fim da Primeira Guerra o mapa do Oriente Médio foi efetivamente redesenhado, com base no acordo Sykes-Picot.\n[…]\nO Reino Unido recebeu o controle dos territórios correspondentes, grosso modo, à Jordânia e ao Iraque, bem como uma pequena área em torno de Haifa. A França ganhou o controle do sudeste da Turquia, da Síria, do Líbano e do norte do Iraque. As duas potências ficaram livres para definir as fronteiras dentro daquelas áreas.\n[…]\nA Revolução Russa de 1917 invalidou as reivindicações da Rússia sobre o Império Otomano. Lênin tornou pública uma cópia do Acordo Sykes-Picot (até então secreto), bem como outros tratados, o que causou constrangimento entre os aliados e crescente desconfiança entre os árabes.\n[…]\nOs principais termos do acordo foram confirmados pela Conferência interaliada de San Remo, realizada entre 19 e 26 de abril de 1920, e pelo Conselho da Sociedade das Nações, em 24 de julho de 1922, estabelecendo os mandatos britânico e francês correspondentes às áreas definidas em 1916 pelo Acordo Sykes-Picot.\n[…]\nMedia relacionados com Sykes-Picot Agreement no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Quatro Grandes (1919)",
      "descricao": "Os chefes de governo dos Estados Unidos, do Reino Unido, da França e da Itália, que dominaram a Conferência de Paz de Paris em 1919."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em 1919, os Quatro Grandes da Conferência de Paz eram Wilson, Clemenceau, Lloyd George e o chefe de governo de que país?",
    "resposta": "Itália",
    "distratores": [
      "Japão",
      "Bélgica",
      "Sérvia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Big_Four_(World_War_I)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Big_Four_(World_War_I)",
        "situacao": "ok",
        "texto": "The Big Four or the Four Nations refer to the four top Allied powers of World War I and their leaders who met at the Paris Peace Conference in January 1919. The Big Four is also known as the Council of Four. It was composed of Georges Clemenceau of France, David Lloyd George of the United Kingdom, Vittorio Emanuele Orlando of Italy, and Woodrow Wilson of the United States.\n[…]\nAmong the Big Four, only Clemenceau could speak and understand both English and French. Orlando did not know English, while Lloyd George and Wilson did not know French. Therefore Orlando and Wilson had no direct means of communication.\n[…]\nHe won by a landslide in the election of 1918, held just after the war ended, where he spoke out for harsh terms against Germany. However, he was much more moderate in Paris. Unlike Clemenceau and Orlando, Lloyd George did not want to destroy the German economy and political system—as Clemenceau demanded—with massive reparations. When asked how he had done at the peace conference, he commented, \"Not badly, considering I was seated between Jesus Christ and Napoleon [Wilson and Clemenceau].\"\n[…]\nAs Prime Minister of Italy, he went to the Paris Peace Conference in 1919. He demanded the fulfilment of the \"secret\" Treaty of London of 1915, by which Britain and France  had promised Italy ample territorial compensation for its entry into World War I. Wilson agreed to the Italian annexation of Trento, South Tyrol, Trieste and Istria, but opposed the Italian annexation of Dalmatia. Clashing with Wilson, Orlando left the Peace Conference.\n[…]\nAt one point Orlando temporarily pulled out of the conference because Italian demands were not met, leaving the other three countries as the sole major architects of the talk, referred to as the \"Big Three\". The Italian delegation returned after 11 days. Mr. Maurice Hankey was the council's sole secretary and took minutes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quatro_Grandes",
        "situacao": "ok",
        "texto": "Os Quatro Grandes refere-se às principais potências aliadas que ganharam a Primeira Guerra Mundial e aos seus líderes que se reuniram na Conferência de Paz de Paris em Janeiro de 1919. Os Quatro Grandes são também conhecidos como o Conselho dos Quatro. Ela era composta por Woodrow Wilson dos Estados Unidos, David Lloyd George da Grã-Bretanha, Vittorio Emanuele Orlando da Itália, e Georges Clemence\n[…]\nApesar dos Aliados na Conferência de Paz de Paris estarem representados em Versailles por mais de vinte países, foram os Quatro Grandes os arquitetos do Tratado de Versalhes, que foi assinado com a Alemanha, do Tratado de St. Germain, assinado com a Áustria; do Tratado de Neuilly, com a Bulgária; do Tratado de Trianon, com a Hungria; e do Tratado de Sèvres, com o Império Otomano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Máscara de gás",
      "descricao": "Equipamento que protege o rosto e as vias respiratórias contra gases tóxicos, adotado em massa na Primeira Guerra Mundial."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nos primeiros ataques com gás cloro, ainda sem máscaras de verdade, soldados cobriam o rosto com panos molhados em quê?",
    "resposta": "Urina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chemical_weapons_in_World_War_I",
      "https://en.wikipedia.org/wiki/Second_Battle_of_Ypres"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chemical_weapons_in_World_War_I",
        "situacao": "ok",
        "texto": "Chemical warfare dates back thousands of years, but the first large-scale use of chemical weapons was during World War I. Austria-Hungary, France, Germany, the United Kingdom, and the United States used chemical weapons on the battlefield. They were primarily used to demoralize, injure, and kill entrenched defenders, against whom the indiscriminate and generally very slow-moving or static nature o"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Second_Battle_of_Ypres",
        "situacao": "ok",
        "texto": "The Second Battle of Ypres was fought from 22 April to 25 May 1915, during the First World War, for control of the tactically valuable high ground to the east and the south of the Flemish town of Ypres, in western Belgium. The First Battle of Ypres had been fought the previous autumn. The Second Battle of Ypres was the occasion of the first mass use by Germany of poison gas on the Western Front."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Armas_qu%C3%ADmicas_na_Primeira_Guerra_Mundial",
        "situacao": "ok",
        "texto": "Armas químicas são armas cujos efeitos destrutivos não se devem à força explosiva, mas sim à toxicidade das substâncias que as compõe, que podem vir a ferir, matar e/ou causar danos ao meio ambiente. Em vez de matar por explosões ou perfuramentos, como um tiro ou explosivos, as armas químicas produzem reações no organismo que acabam levando à morte. No entanto, as armas químicas são diferentes de \n[…]\nAs armas químicas são apenas substâncias químicas que possuem efeitos tóxicos. Há relatos do uso de armas químicas desde a Antiguidade. Os gregos usaram flechas envenenadas em suas guerras há mais de 2 mil anos, mas foi na Primeira Guerra Mundial que as armas químicas foram usadas em larga escala.[carece de fontes]?\n[…]\nO uso deste equipamento militar promoveu mais tarde motivações políticas, como quando Hitler sofreu um ataque de gás mostarda enquanto lutava nesta guerra, o que o levou a proibir que seu país usasse esse tipo de armamento na Segunda Guerra Mundial.\n[…]\nEm setembro, os aliados passaram a usar o mesmo recurso contra as linhas alemãs, até que em 1917 a fórmula foi superada pelo gás mostarda, ainda mais letal. Durante toda a guerra, mais de 124 mil toneladas de 21 agentes tóxicos diferentes fizeram estimadas 1 milhão de baixas, com 90 mil mortes.\n[…]\nO trauma da Primeira Guerra levou ao Protocolo de Genebra, de 1925, que proibiu o uso de arsenal químico no campo de batalha. O historiador americano Bruce N. Canfield, autor do livro Armas de Infantaria dos Estados Unidos na I Guerra, explica que os gases eram \"temidos por todos os lados e também foram usados por todos\". \"Mas, devido ao vento e a outros fatores, eles poderiam causar mortes tanto para quem os usava quanto para o pelotão visto como alvo.\n[…]\nGás cloro (Cl2)\n[…]\nArmas químicas que foram empregadas na Primeira Guerra",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Telegrama Zimmermann",
      "descricao": "Mensagem secreta alemã de 1917, interceptada pelos britânicos, que propunha uma aliança militar ao México contra os Estados Unidos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1917, em troca de uma aliança contra os Estados Unidos, a Alemanha prometeu ao México a devolução de que três estados americanos?",
    "resposta": "Texas, Novo México e Arizona",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zimmermann_Telegram"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zimmermann_Telegram",
        "situacao": "ok",
        "texto": "The Zimmermann telegram (or Zimmermann note or Zimmermann cable) was a secret diplomatic communication issued from the German Foreign Office on January 17, 1917, that proposed a military contract between the German Empire and Mexico if the United States entered World War I against Germany. With Germany's aid, Mexico would recover Texas, Arizona, and New Mexico. The telegram was intercepted by Brit\n[…]\nher lost territory of New Mexico, Texas and\n[…]\nMexico of the above in the greatest confidence as\n[…]\nMexico that the employment of ruthless submarine\n[…]\nThe British had obtained a further copy in Mexico City, and Balfour could obscure the real source with the half-truth that it had been \"bought in Mexico\". Page then reported the story to Wilson on February 24, 1917, including details to be verified from telegraph-company files in the United States. Wilson felt \"much indignation\" toward the Germans and wanted to publish the Zimmermann Telegraph immediately after he had received it from the British, but he delayed until March 1, 1917.\n[…]\nOn February 1, 1917, Germany had begun unrestricted submarine warfare against all ships in the Atlantic bearing the American flag, both passenger and merchant ships. Two ships were sunk in February, and most American shipping companies held their ships in port. Besides the highly-provocative war proposal to Mexico, the telegram also mentioned \"ruthless employment of our submarines\". Public opinion demanded action.\n[…]\nIt is true.\" Then, on March 29, 1917, Zimmermann gave a speech in the Reichstag in which he admitted that the telegram was genuine. Zimmermann hoped that Americans would understand that the idea was that Germany would not fund Mexico's war with the United States unless the Americans joined World War I. Nevertheless, in his speech Zimmermann questioned how the Washington government obtained the telegram.\n[…]\nOur Documents – Zimmermann Telegram (1917)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Telegrama_Zimmermann",
        "situacao": "ok",
        "texto": "O Telegrama Zimmermann (em alemão: Zimmermann-Depesche; em espanhol: Telegrama Zimmermann) foi um telegrama codificado despachado por radiofrequência pelo ministro do exterior do Império Alemão, Arthur Zimmermann, em 16 de janeiro de 1917, para o embaixador alemão no México, Heinrich von Eckardt, no auge da Primeira Guerra Mundial.\n[…]\nO telegrama instruía o embaixador para se aproximar com o governo mexicano com a proposta de formar uma aliança militar contra os Estados Unidos. A proposta prometia ao México suas antigas terras tomadas pelos Estados Unidos caso o país aceitasse o acordo. O telegrama foi interceptado e decodificado por britânicos e seu conteúdo apressou a entrada dos Estados Unidos na Primeira Guerra Mundial em abril.\n[…]\nNo caso disso não ser bem sucedido, nós propomos uma aliança com as seguintes bases ao México: Que nós façamos guerra juntos e façamos paz juntos. Nós forneceremos um generoso suporte financeiro, e no nosso entendimento o México virá a reconquistar os territórios perdidos do Novo México, Texas e Arizona. Os detalhes do assentamento são deixados para você.\n[…]\nVocê está instruído a informar o Presidente [do México] sobre acima na maior confidência assim que for certo que irá haver uma deflagração de guerra nos Estados Unidos e sugerir ao Presidente, em sua própria iniciativa, o convite ao Japão para imediatamente aderir a esse plano; ao mesmo tempo, oferecer-se para mediar as conversas entre Japão e nós mesmos.\n[…]\nBoghardt, Thomas. The Zimmermann Telegram: Intelligence, Diplomacy, and America's Entry into World War I (2012) excerpt and text search; 319pp\n[…]\nKatz, Friedrich (1981). The Secret War in Mexico: Europe, the United States, and the Mexican Revolution. [S.l.: s.n.]\n[…]\nTuchman, Barbara W. (1958). The Zimmermann Telegram. [S.l.: s.n.] ISBN 0-345-32425-0",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Catorze Pontos",
      "descricao": "Programa de paz apresentado pelo presidente americano Woodrow Wilson ao Congresso em janeiro de 1918."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O último dos Catorze Pontos do presidente Wilson, apresentados em 1918, propunha uma associação de países que deu origem a que organização?",
    "resposta": "Liga das Nações",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fourteen_Points"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fourteen_Points",
        "situacao": "ok",
        "texto": "The Fourteen Points was a statement of principles for peace that was to be used for peace negotiations in order to end World War I. The principles were outlined in a January 8, 1918, speech on war aims and peace terms to the United States Congress by President Woodrow Wilson. However, his main Allied colleagues (Georges Clemenceau of France, David Lloyd George of the United Kingdom, and Vittorio E\n[…]\nIn his speech to Congress, President Wilson declared fourteen points which he regarded as the only possible basis of an enduring peace:\n[…]\nAs a major public statement of war aims, it became the basis for the terms of the German surrender at the end of the First World War. After the speech, Colonel House worked to secure the acceptance of the Fourteen Points by Entente leaders. On October 16, 1918, President Woodrow Wilson and Sir William Wiseman, the head of British intelligence in America, had an interview.\n[…]\nIndeed, in a note sent to Wilson, Prince Maximilian of Baden, the German imperial chancellor, in October 1918 requested an immediate armistice and peace negotiations on the basis of the Fourteen Points.\n[…]\nIn late October 1918, President Wilson's close adviser Colonel House asked Frank I. Cobb and Walter Lippmann to write an analysis of the Fourteen Points which he then sent to US Secretary of State Robert Lansing. In this analysis, Cobb and Lippmann elaborated on each of the Fourteen Points in extremely great detail.\n[…]\nText of Wilson's message to Congress outlining 14 points January 8, 1918\n[…]\nInterpretation of President Wilson's Fourteen Points Archived 2011-03-07 at the Wayback Machine by Edward M. House\n[…]\n\"President Wilson's Fourteen Points\" from the World War I Document Archive\n[…]\nArthur Balfour's speech on the Fourteen Points to Parliament, on February 27, 1918 – firstworldwar.com\n[…]\nWoodrow Wilson Library Wilson's Nobel Peace Prize is digitized. From the Library of Congress"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quatorze_Pontos",
        "situacao": "ok",
        "texto": "Os \"Quatorze Pontos\" constituíam um plano para a paz mundial a ser tidos em conta nas negociações da paz após a Primeira Guerra Mundial, elucidados pelo Presidente dos Estados Unidos da América Woodrow Wilson num discurso, a 8 de Janeiro de 1918.\n[…]\nO discurso feito por Wilson a 8 de Janeiro de 1918 expunha uma política de livre-cambismo, divulgação de tratados, democracia e autodeterminação dos povos. O discurso dos Catorze Pontos foi a única declaração explícita dos objetivos de guerra feita por qualquer uma das nações beligerantes da Primeira Guerra Mundial (alguns Estados deram indicações gerais dos seus objetivos; a maioria manteve em segredo os seus objetivos pós-guerra).\n[…]\nPor exemplo, ele propôs a remoção de barreiras econômicas entre as nações, a promessa de autodeterminação para minorias nacionais] e uma organização mundial que garantiria a \"independência política e integridade territorial [de] grandes e pequenos Estados\" – uma Liga das Nações.\n[…]\nEmbora o idealismo de Wilson permeasse os Quatorze Pontos, ele também tinha objetivos mais práticos em mente. Ele esperava manter a Rússia na guerra, convencendo os bolcheviques de que eles receberiam uma paz melhor dos Aliados, para reforçar o moral dos Aliados e para minar o apoio alemão à guerra. O discurso foi bem recebido nos Estados Unidos e nações aliadas e até mesmo pelo líder bolchevique Vladimir Lênin, como um marco do esclarecimento nas relações internacionais.\n[…]\n14.º A formação de uma liga de nações deverá ter como objetivo encontrar garantias mútuas para a independência política e a integridade territorial de todos os Estados, independentemente da sua escala.\n[…]\n\"Os Quatorze Pontos do Presidente Wilson\" do Arquivo de Documentos da Primeira Guerra Mundial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Missão Médica Militar Brasileira na França",
      "descricao": "Missão de médicos militares enviada pelo Brasil à França em 1918, que montou e manteve um hospital em Paris."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1918, além da esquadra, o Brasil enviou à França uma missão que montou e manteve um hospital em Paris. Que profissionais formavam essa missão?",
    "resposta": "Médicos militares",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Brasil_na_Primeira_Guerra_Mundial",
      "https://en.wikipedia.org/wiki/Brazil_during_World_War_I"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Brasil_na_Primeira_Guerra_Mundial",
        "situacao": "ok",
        "texto": "O Brasil na Primeira Guerra Mundial (1914-1918) tinha uma posição neutra respaldada pela Convenção de Haia, buscando não restringir os seus produtos exportados na época, principalmente o café. A Alemanha era, na época, o principal parceiro comercial do Brasil, sendo seguida pela Inglaterra e pela França. Após o afundamento de navios mercantes brasileiros por submarinos da Marinha Imperial Alemã, o\n[…]\nEm cumprimento aos compromissos assumidos com a Conferência Interaliada, reunida em Paris de 20 de novembro a 3 de dezembro de 1917, o Governo brasileiro enviou uma missão médica composta de cirurgiões civis e militares, para atuar em hospitais de campanha do teatro de operações europeu, um contingente de sargentos e oficiais para servirem junto ao exército francês; aviadores do Exército e da Marinha para se juntarem à Força Aérea Real, e o emprego de parte da Esquadra, fundamentalmente na guerra antissubmarina.\n[…]\nEm 18 de agosto de 1918, a Missão Médica, chefiada pelo Dr. Nabuco Gouveia e também subordinada ao General Napoleão Aché, foi a última a partir, com 86 médicos. Em 24 de setembro de 1918, a Missão Médica brasileira chegou à terra francesa pelo porto de Marselha, depois de uma viagem acidentada. Uma outra missão já havia sido enviada ao teatro de guerra europeu com a finalidade de instalar um hospital.\n[…]\nIntegravam a missão 92 médicos, sendo dez militares e os demais mobilizados e convocados nos respectivos postos privativos de oficiais. Além dos médicos, integravam a missão acadêmicos, farmacêuticos, pessoal de apoio administrativo e um pelotão de segurança.\n[…]\nHistória militar do Brasil\n[…]\nUniformes brasileiros na Primeira Guerra Mundial (em português e inglês)\n[…]\n[1] Página da AHIMTB - Academia de História Militar Terrestre do Brasil\n[…]\nMissão Médica Militar em França na Guerra de 1918 - Grandes Guerras\n[…]\nNavios estrangeiros atacados no Brasil durante Primeira Guerra Mundial"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_during_World_War_I",
        "situacao": "ok",
        "texto": "During World War I (1914–1918), Brazil initially adopted a neutral position in accordance with the Hague Convention as an attempt to maintain markets for its export products, mainly coffee, latex, and industrially manufactured items.\n[…]\nThe administration of Venceslau Brás, which was in its last year in office, made statements implying that it did not intend to involve the country deeper into the conflict. Nevertheless, in early 1918, a confidential report commissioned by the presidential candidate elected that year, Rodrigues Alves, was completed. This report, regarding the entry of Brazil into the conflict, was coordinated by the parliamentary expert on foreign policy and military affairs, João Pandiá Calógeras.\n[…]\nThe Brazilian Army was enlarged to 54,000 men following the declaration of war, but this rapid expansion meant that most immediately available resources had to be directed to the training and equipping of new recruits. Brazil's direct participation in land operations was limited to a preparatory military mission of 24 officers and sergeants sent to Europe in mid-1918.\n[…]\nThe end of World War I in November 1918 precluded the further development of the country's military involvement in the war as envisioned in the Calógeras Plan.\n[…]\nOn September 24, 1918, the Mission landed at the French port of Marseille. The hospital was opened in Paris, but the main roles performed by the Medical Mission were in providing treatment for French sufferers during the Spanish flu epidemic and in ensuring the continuity of logistical support to the troops at the front. The Medical Mission was terminated in February 1919.\n[…]\nSchulze, Frederik: Brazil, in: 1914–1918-online. International Encyclopedia of the First World War."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Mark I (tanque)",
      "descricao": "Primeiro tanque britânico usado em combate, estreado na Batalha do Somme em 1916."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Os primeiros tanques britânicos, de 1916, eram divididos em machos e fêmeas. O que distinguia um tipo do outro?",
    "resposta": "Machos tinham canhões; fêmeas, metralhadoras",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mark_I_tank"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mark_I_tank",
        "situacao": "ok",
        "texto": "British heavy tanks were a series of related armoured fighting vehicles developed by the UK during the First World War. The Mark I was the world's first tank, a tracked, armed, and armoured vehicle, to enter combat. The name \"tank\" was initially a code name to maintain secrecy and disguise its true purpose. The tank was developed in 1915 to break the stalemate of trench warfare.\n[…]\nThe Mark II was built from December 1916 to January 1917 by Foster & Co and Metropolitan (25 Male and 25 Female respectively).\n[…]\nThe Mark VI was one of a pair of related projects to develop the tank initiated in late 1916. The Mark V would be the application of as many advanced features as could be managed on the Mark I hull design and the Mark VI would be a complete break with the Mark I hull. The Mark V would not be built as such, because of the delays with the Mark IV and it would be a different Mark V that was built. The Mark VI project design had a completely new hull – taller and with rounded track paths.\n[…]\nThe first tanks were added, as a \"Heavy Branch\", to the Machine Gun Corps until a separate Tank Corps was formed on 28 July 1917 by royal warrant. A small number of Mark I tanks took part in the Battle of the Somme during the Battle of Flers-Courcelette in September 1916. They were used to cut through barbed wire to clear the way for infantry, and were even driven through houses to destroy machine gunner's emplacements.\n[…]\nSeven Mark IVs survive.\n[…]\nMark IV Female Liberty: formerly displayed at United States Army Ordnance Museum, Aberdeen, Maryland. Originally named Britannia, Renamed Liberty, the tank joined the Ordnance Museum collection in 1919. After decades of exposure to the elements, it is in poor condition, but about to undergo restoration.\n[…]\nMark V Composite\n[…]\nMark I (Mother)\n[…]\nArchaeological discovery: the Mark IV tank of Flesquières (Battle of Cambrai 1917)"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Renault FT",
      "descricao": "Tanque leve francês lançado em 1917, com a arma montada numa torre giratória."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Lançado em 1917, o tanque francês Renault FT trazia a arma numa peça que virou padrão dos tanques modernos. Que peça era essa?",
    "resposta": "Uma torre giratória",
    "fonte": [
      "https://en.wikipedia.org/wiki/Renault_FT"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Renault_FT",
        "situacao": "ok",
        "texto": "The Renault FT (frequently referred to in post-World War I literature as the FT-17, FT17, or similar) is a French light tank that was among the most revolutionary and influential tank designs in history. The FT was the first production tank to have its armament within a fully rotating turret. The Renault FT's configuration (crew compartment at the front, engine compartment at the back, and main ar\n[…]\nVichy France used Renault FTs against Allied invasion forces during Operation Torch in Morocco and Algeria. The French tanks were no match for the newly arrived American M4 Sherman and M3 Stuart tanks. French Army FTs saw combat deployment during the Japanese invasion of French Indochina and the Franco-Thai War in the period from September 1940 to January 1941.\n[…]\nThe FT was the ancestor of a long line of French tank, beginning with FT tanks equipped with modernized suspention, such as the FT Kégresse and the Renault NC. The NC eventually evolved into the Char D1 with the NC3, in turn into the Char D2.\n[…]\nFrance\n[…]\nTurkey (one company of Renault FT, received from France in 1921 or 1928)\n[…]\nRusskiy Reno: the \"Russian Renault\", the first Soviet tank, produced at Krasnoye Sormovo. A close copy. 17 units were produced. Also known as \"Tank M\" or \"KS tank\".\n[…]\nRenault FT Kégresse: FT modernized with different suspension and Kégresse rubber tracks; used by France, Yugoslavia, and Poland in limited numbers\n[…]\nRenault FT AC: A December 1939 plan to convert France's obsolete FTs into tank destroyers. The tank never left the drawing board. It was designed to have a 47mm APX anti-tank gun instead of the turret.\n[…]\nOverloon War Museum, Overloon, Netherlands has a Renault FT bearing German markings. This vehicle was captured in France and subsequently used by the German army to patrol and guard the Volkel airbase during World War II.\n[…]\nChar Léger Renault FT Modèle 1917 (video)\n[…]\nFT-17 – The WW1 Tank Used Until the 1980s"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Renault_FT",
        "situacao": "ok",
        "texto": "O Renault FT, chamado no pós-guerra de Renault FT-17 ou FT17, foi um dos primeiros tanques de guerra fabricados no mundo. Leve, rápido e fácil de ser produzido, operado, mantido e reposto, o Renault FT foi o mais bem sucedido tanque utilizado durante a Primeira Guerra Mundial. O FT foi o primeiro tanque de produção a ter seu armamento dentro de uma torre totalmente giratória.\n[…]\nA configuração do Renault FT tornou-se e continua sendo o esboço padrão para tanques: compartimento da tripulação na frente, compartimento do motor atrás e armamento principal em uma torre giratória. Consequentemente, historiadores da guerra blindada apontaram o Renault FT como o primeiro tanque moderno do mundo.\n[…]\nEstienne e Renault, cuja empresa já se preparava para produzir o tanque FT, ficaram furiosos com a decisão. A Ofensiva Nivelle fora lançada no Chemin-des-Dames durante os testes, e o seu resultado desastroso levou Estienne a ficar ainda mais convencido da necessidade de massas de tanques leves para superar o impasse da guerra de trincheiras.\n[…]\nEnquanto Thomas estava fora da França, Estienne encenou outra série de testes diante de vários oficiais franceses que lutaram no Chemin-des-Dames durante as primeiras ações de tanques franceses, em 16 de abril de 1917; que reagiram de forma entusiástica ao Renault FT, convencendo até mesmo o cético General Mourret de que o tanque havia atingido um estágio de desenvolvimento suficiente para a produção.\n[…]\nProjetado e fabricado ao final daquele conflito para \"abrir caminho\" em direção às trincheiras inimigas, dando cobertura aos avanços da infantaria, pesava apenas 6,5 toneladas, comportando dois tripulantes (comandante-atirador e motorista). Seu desenho com torre giratória, posição das lagartas e motor tornou-se padrão nos tanques que vieram depois.\n[…]\n«Tank Chats #8 Renault FT-17» (em inglês). No canal The Tank Museum no YouTube.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Zepelim",
      "descricao": "Tipo de dirigível rígido desenvolvido na Alemanha, usado na Primeira Guerra Mundial para bombardear cidades britânicas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Muitos dos dirigíveis alemães que bombardearam Londres na guerra levavam o nome de que conde alemão, que os desenvolveu?",
    "resposta": "Ferdinand von Zeppelin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zeppelin",
      "https://en.wikipedia.org/wiki/Ferdinand_von_Zeppelin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zeppelin",
        "situacao": "ok",
        "texto": "A Zeppelin is a type of rigid airship named after the German inventor Ferdinand von Zeppelin (German pronunciation: [ˈt͡sɛpəliːn] ) who pioneered rigid airship development at the beginning of the 20th century. Zeppelin's notions were first formulated in 1874 and developed in detail in 1893. They were patented in Germany in 1895 and in the United States in 1899. After the outstanding success of the\n[…]\nCount Ferdinand von Zeppelin's interest in airship development began in 1874, when he was inspired by a lecture given by Heinrich von Stephan on the subject of \"World Postal Services and Air Travel\" to outline the basic principle of his later craft in a diary entry dated 25 March 1874. It describes a large rigidly framed outer envelope containing several separate gasbags.\n[…]\nAnother two years passed before 18 September 1928, when the new dirigible, christened Graf Zeppelin in honour of the Count, flew for the first time. With a total length of 236.6 metres (776 ft) and a volume of 105,000 m3, it was the largest dirigible to have been built at the time. Eckener's initial purpose was to use Graf Zeppelin for experimental and demonstration purposes to prepare the way for regular airship traveling, carrying passengers and mail to cover the costs.\n[…]\nAs with the October 1928 flight to New York, Hearst had placed a reporter, Grace Marguerite Hay Drummond-Hay, on board: she therefore became the first woman to circumnavigate the globe by air. From there, Graf Zeppelin flew to Friedrichshafen, then Tokyo, Los Angeles, and back to Lakehurst, in 21 days, 5 hours, and 31 minutes. Including the initial and final trips between Friedrichshafen and Lakehurst and back, the dirigible had travelled 49,618 kilometres (30,831 mi).\n[…]\nZeppelin Museum Friedrichshafen\n[…]\nZeppelin Luftschifftechnik GmbH – The original company, now developing the Zeppelin NT\n[…]\nDark Autumn: The 1916 German Zeppelin Offensive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ferdinand_von_Zeppelin",
        "situacao": "ok",
        "texto": "Count Ferdinand von Zeppelin (German: Ferdinand Adolf Heinrich August Graf von Zeppelin; 8 July 1838 – 8 March 1917) was a German general and later inventor of the Zeppelin rigid airships. His name became synonymous with airships and dominated long-distance flight until the 1930s. He founded the company Luftschiffbau Zeppelin.\n[…]\nFerdinand was the son of Württemberg Minister and Hofmarschall Friedrich Jerôme Wilhelm Karl Graf von Zeppelin (1807–1886) and his wife Amélie Françoise Pauline (born Macaire d'Hogguer) (1816–1852). Ferdinand spent his childhood with his sister and brother at their Girsberg manor near Konstanz, where he was educated by private tutors. Ferdinand married Isabella Freiin von Wolff in Berlin.\n[…]\nFerdinand von Zeppelin served as an official observer with the Union Army during the U.S Civil War. During the Peninsular Campaign, he visited the balloon camp of Thaddeus S. C. Lowe shortly after Lowe's services were terminated by the Army. Zeppelin then travelled to St. Paul, where the German-born former Army balloonist John Steiner offered tethered flights. His first ascent in a balloon is said to have been the inspiration of his later interest in aeronautics.\n[…]\nZeppelin\n[…]\nVömel, Alexander (1909–1933). Graf Ferdinand von Zeppelin – Ein Mann der Tat.\n[…]\nLiterature by and about Ferdinand von Zeppelin in the German National Library catalogue\n[…]\n\"Biographie: Ferdinand Graf von Zeppelin, 1838–1917\" (in German). Deutschen Historischen Museums. Retrieved 12 September 2009.\n[…]\nMichael \"Walter\" Walz. \"Stuttgart im Bild – Ferdinand Graf von Zeppelin\" (in German). Deutschen Historischen Museums. Retrieved 12 September 2009. (Gravestone in Stuttgart, biography and images)\n[…]\nNewspaper clippings about Ferdinand von Zeppelin in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zepelim",
        "situacao": "ok",
        "texto": "Zeppelin ou Zepelim é um tipo de aeróstato rígido, mais especificamente um dirigível, cujo nome é uma homenagem ao Conde alemão Ferdinand Von Zeppelin, que foi pioneiro no desenvolvimento de dirigíveis rígidos no início do século XX. As primeiras ideias de Zeppelin foram formuladas em 1874 e desenvolvidas em detalhes em 1893, sendo patenteadas na Alemanha em 1895 e nos Estados Unidos em 1899.\n[…]\nDurante a Primeira Guerra Mundial, os militares alemães fizeram uso extensivo dos zepelins como bombardeiros e para reconhecimento, matando mais de 500 pessoas em bombardeios apenas na Grã-Bretanha  (ver: Dirigível militar).\n[…]\nO interesse do conde Ferdinand von Zeppelin no desenvolvimento de dirigíveis começou em 1874, quando ele se inspirou em uma palestra dada por Heinrich von Stephan, sobre o tema “Serviços postais mundiais e viagens aéreas”, para esboçar os princípios básicos de seu futuro aeróstato em um diário datado de 25 de Março de 1874. No diário, é descrito um grande envelope exterior, rigidamente emoldurado contendo várias cavidades de ar separadas.\n[…]\nFerdinand von Zeppelin começou a se dedicar mais seriamente ao seu projeto depois da sua reforma antecipada do exército em 1890 aos 52 anos. Convencido da importância potencial da aviação, ele começou a trabalhar em vários projetos em 1891, e teve esboços completamente detalhados em 1893. Um ano depois, em 1894, um comitê oficial revisou seus trabalhos e o concedeu a patente em 1895, tendo Theodor Kober produzido os desenhos técnicos.\n[…]\nAs tentativas iniciais do Conde Zeppelin de assegurar financiamento do governo para seu projeto se mostraram mal-sucedidas, entretanto uma palestra dada à União dos engenheiros alemães garantiu o suporte governamental pretendido. Zeppelin também solicitou apoio ao industrial Carl Berg, que se encontrava engajado no trabalho de construção do segundo projeto de dirigível de David Schwarz.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Voie Sacrée",
      "descricao": "Estrada entre Bar-le-Duc e Verdun que abasteceu de tropas e suprimentos a defesa francesa durante a Batalha de Verdun, em 1916."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Durante a Batalha de Verdun, a estrada por onde passavam tropas e suprimentos franceses ganhou que apelido?",
    "resposta": "Via Sagrada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Voie_Sacr%C3%A9e"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Voie_Sacr%C3%A9e",
        "situacao": "ok",
        "texto": "The Voie Sacrée (French for 'Sacred Way' / 'Sacred Road') is a road that connects Bar-le-Duc to Verdun (Meuse), France. It was given its name because of the vital role it played during the Battle of Verdun in World War I.\n[…]\nAfter March 1916, along the 72 km (45 miles) of the Voie Sacrée, transport vehicles were on the move day and night, ferrying troops, armaments, and supplies to the Verdun battlefield. During the initial crisis of 21 February to 22 March, 600 trucks per day had already delivered 48,000 tons of ammunition, 6,400 tons of other materiel and 263,000 men to the battlefield.\n[…]\nThe Voie Sacrée still exists, but it has been paved over and is now an active secondary road. In 2006, the route was renumbered RD1916, a reference to the road's most critical year. From 1923, the Voie Sacrée was marked by a borne every kilometre along the route. Each borne is topped with a sculpture of an Adrian helmet, the helmet worn by French soldiers during the Battle of Verdun.\n[…]\nThe town hall in the village of Souilly, on the Voie Sacrée, served as headquarters to Generals Philippe Pétain and Robert Nivelle during the Battle of Verdun. A large, well-preserved, two-storey stone building fronting on the Voie Sacrée, the Souilly town hall is still in official use today. Several plaques on its facade remind the visitor of the historic role it played in 1916 during the Battle of Verdun and, later in 1918, during the Meuse–Argonne offensive.\n[…]\nVoie Sacrée wind farm\n[…]\nLefebvre, Jacques-Henri (1960). Verdun, la plus grande bataille de l'histoire [Verdun, the Greatest Battle in History] (in French). G. Durassié. Retrieved 27 June 2025."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voie_Sacr%C3%A9e",
        "situacao": "ok",
        "texto": "A Voie Sacrée (\"Caminho Sagrado\") é uma estrada que liga Bar-le-Duc a Verdun (Meuse), França. Recebeu esse nome devido ao papel vital que desempenhou durante a Batalha de Verdun na Primeira Guerra Mundial.\n[…]\nDepois de março de 1916, ao longo dos 72 km (45 milhas) da \"Voie Sacrée\", veículos de transporte estavam em movimento dia e noite transportando tropas, armamentos e suprimentos para o campo de batalha de Verdun. Durante a crise inicial de 21 de fevereiro a 22 de março, 600 caminhões por dia já haviam entregue 48 000 toneladas de munição, 6 400 toneladas de outros materiais e 263 000 homens ao campo de batalha.\n[…]\nA partir de 21 de fevereiro, todo o tráfego puxado a cavalo e os movimentos de tropas a pé foram ordenados para fora da estrada, deixando-a aberta apenas para o tráfego de caminhões e automóveis. Depois de março de 1916, um caminhão passou a cada 14 segundos, submetendo a estrada a um desgaste considerável. Pedreiras tiveram que ser abertas nas proximidades para abastecer a estrada com pedra britada. Ao longo de dez meses, 16 batalhões trabalharam para manter a estrada em boa forma e ordem.\n[…]\nA estrada era reconhecida desde 1915 como a única estrada veicular confiável que permanecia para abastecer Verdun com segurança. Todas as linhas ferroviárias de bitola padrão que podiam chegar a Verdun já haviam sido interrompidas pelas forças alemãs no final de 1914. Para compensar essa situação precária, a estrada foi alargada para 23 pés durante 1915, para que pudesse acomodar o fluxo contínuo de subida e descida de dois linhas de tráfego de caminhões.\n[…]\nDurante o verão de 1916, ele reconectaria Verdun à rede regional de bitola padrão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Reino da Iugoslávia",
      "descricao": "Estado criado em 1918 nos Bálcãs com o nome de Reino dos Sérvios, Croatas e Eslovenos, rebatizado em 1929."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Criado em 1918, com o fim da guerra, o Reino dos Sérvios, Croatas e Eslovenos passou a se chamar como a partir de 1929?",
    "resposta": "Reino da Iugoslávia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kingdom_of_Yugoslavia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kingdom_of_Yugoslavia",
        "situacao": "ok",
        "texto": "The Kingdom of Yugoslavia was a country in Southeast and Central Europe that existed from 1918 until 1941. From 1918 to 1929, it was officially called the Kingdom of Serbs, Croats, and Slovenes and was colloquially known as Yugoslavia (lit. 'Land of the South Slavs') due to its origins.\n[…]\nOn 6 January 1929, using as a pretext the political crisis triggered by the shooting, King Alexander abolished the Constitution, prorogued the Parliament and introduced a personal dictatorship (known as the \"January 6 Dictatorship\", Šestosiječanjska diktatura, Šestojanuarska diktatura) with the aim of establishing the Yugoslav ideology and single Yugoslav nation.\n[…]\nThese hostile relations were demonstrated on 1 November 1918, when Italian forces sunk the recently captured Austro-Hungarian battleship SMS Viribus Unitis being used by the State of Slovenes, Croats and Serbs.\n[…]\nUntil 1929, Serbs, Croats and Slovenes were the constitutional nations, when they were merged into a single \"Yugoslav\" nationality. With the language of the country being institutionalized and mandatory, ethnic minorities were expected to gradually assimilate into the Yugoslav panethnic identity.\n[…]\nPeter I (1 December 1918 – 16 August 1921; Prince regent Alexander ruled in the name of the King)\n[…]\nStojan Protić: 1918–1919\n[…]\nAnton Korošec: 1928–1929\n[…]\nPetar Živković: 1929–1932\n[…]\nThe subdivisions of the Kingdom of Yugoslavia existed successively in three different forms. From 1918 to 1922, the kingdom maintained the pre–World War I subdivisions of Yugoslavia's predecessor states. In 1922, the state was divided into thirty-three oblasts (provinces). In 1929, after the establishment of the January 6 Dictatorship, a new system of nine banovinas (regions) was implemented by royal decree."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Reino_da_Iugosl%C3%A1via",
        "situacao": "ok",
        "texto": "O Reino da Iugoslávia (Servo-croata: Краљевина Југославија / Kraljevina Jugoslavija; em esloveno:  Kraljevina Jugoslavija) foi um estado na região central e sudeste da Europa que existiu de 1918 até 1941. De 1918 a 1929, foi oficialmente chamado de Reino dos Sérvios, Croatas e Eslovenos (Servo-croata: Краљевина Срба, Хрвата и Словенаца / Kraljevina Srba, Hrvata i Slovenaca; em esloveno:  Kraljevin\n[…]\nEm novembro de 1918, o Conselho Nacional do Estado dos Eslovenos, Croatas e Sérvios nomeou 28 membros para iniciar negociações com os representantes do governo do Reino da Sérvia e Montenegro sobre a criação de um novo estado iugoslavo, a delegação negociou diretamente com o regente Alexandre Karađorđević.\n[…]\nO nome do novo estado iugoslavo era Reino dos Sérvios, Croatas e Eslovenos (Servo-croata: Краљевина Срба, Хрвата и Словенаца / Kraljevina Srba, Hrvata i Slovenaca; em esloveno:  Kraljevina Srbov, Hrvatov in Slovencev) ou sua forma abreviada Reino dos SCE (Kraljevina SHS / Краљевина СХС).\n[…]\nO Reino da Itália tinha ambições territoriais contra o Reino da Iugoslávia. As relações entre a Itália e os predecessores do reino, o Reino da Sérvia e o Estado dos Eslovenos, Croatas e Sérvios tornaram-se hostis durante a Primeira Guerra Mundial, pois os políticos italianos e iugoslavos estavam em disputa pela região da Dalmácia que a Itália exigia como parte da Itália.\n[…]\nAs subdivisões do Reino da Iugoslávia existiram sucessivamente em três formas diferentes. De 1918 a 1922, o reino manteve as subdivisões anteriores à Primeira Guerra Mundial dos estados predecessores da Iugoslávia. Em 1922, o estado foi dividido em trinta e três oblasts (províncias). Em 1929, após o estabelecimento da Ditadura de 6 de janeiro, um novo sistema de nove banovinas (regiões) foi implementado por decreto real.\n[…]\nOutros esportes populares incluíam o pólo aquático, que era dominado nacionalmente pelo time croata VK Jug.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Trench coat",
      "descricao": "Casaco longo impermeável, de origem militar, popularizado entre oficiais britânicos na Primeira Guerra Mundial."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O casaco conhecido como trench coat, hoje um clássico da moda, tem no nome uma referência a quê?",
    "resposta": "Às trincheiras da Primeira Guerra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trench_coat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trench_coat",
        "situacao": "ok",
        "texto": "A trench coat is a variety of coat made of waterproof heavy-duty fabric. Originally developed for British Army officers before the First World War, they became popular while used in the trenches, hence the name.\n[…]\nOriginally made from gabardine, a worsted wool fabric waterproofed using lanolin before weaving, the traditional colour of a trench coat was khaki. Traditionally trench coats are double-breasted with 10 front buttons, wide lapels, a storm flap, and pockets that button-close. The coat is belted at the waist with a self-belt, with raglan sleeves ending in cuff straps around the wrists that also buckle, to keep water from running down the forearm when using binoculars in the rain.\n[…]\nThe trench coat was developed as an alternative to the heavy serge greatcoats worn by British and French soldiers in the First World War. Invention of the trench coat is claimed by two British luxury clothing manufacturers, Burberry and Aquascutum, with Aquascutum's claim dating back to the 1850s. Thomas Burberry had invented gabardine fabric in 1879 and submitted a design for a British Army officer's raincoat to the War Office in 1901.\n[…]\nWhile similar, the heavy metal and Goth fashion trend of black oilcloth dusters are incorrectly referred to as trench coats. Early media reports of the 1999 Columbine High School massacre initially associated the perpetrators (Eric Harris and Dylan Klebold) with the school's \"Trenchcoat Mafia\", a clique who allegedly wore conspicuous black Australian oilcloth dusters. In the copycat W. R. Myers High School shooting days later, it was rumoured the shooter had worn a trench coat.\n[…]\nCoat (clothing)\n[…]\nChesterfield coat\n[…]\nMedia related to Trenchcoats at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Guerra submarina irrestrita",
      "descricao": "Estratégia alemã de afundar sem aviso navios mercantes, inclusive neutros, nas águas em torno do Reino Unido, retomada em 1917."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1917, a Alemanha voltou a afundar sem aviso qualquer navio, inclusive neutro, nas águas britânicas. Que grande consequência isso trouxe?",
    "resposta": "A entrada dos Estados Unidos na guerra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Unrestricted_submarine_warfare",
      "https://en.wikipedia.org/wiki/American_entry_into_World_War_I"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Unrestricted_submarine_warfare",
        "situacao": "ok",
        "texto": "Unrestricted submarine warfare is a type of naval warfare in which submarines sink merchant ships such as freighters and tankers without warning. The use of unrestricted submarine warfare has had significant impacts on international relations in regard to both the First World War and the Second World War. Its history has been dominated by German decision making.\n[…]\nAfter World War I, there was a strong push to construct international rules prohibiting submarine attacks on merchant ships. In 1922 the United States, the United Kingdom, Japan, France, and Italy signed the Washington Treaty on Poison Gas and Submarines, to so restrict the use of submarines as to make them useless as commerce raiders. France did not ratify, so the treaty did not go into effect.\n[…]\nPrior to World War II, 48 states had accepted the prohibitions on unrestricted submarine warfare, including the great power combatants during World War II. However states rapidly abandoned these restrictions: Mostly significantly Germany with War Order No. 154, and the US from the start of the War in the Pacific.\n[…]\nThere have been four campaigns of unrestricted submarine warfare, one in World War I and three in World War II:\n[…]\nThe U-boat campaign of World War I, waged intermittently by Germany between 1915 and 1918 against Britain and her allies. One of the most infamous acts was on May 7, 1915, when U-boat U-20 deliberately torpedoed the British Cunard luxury liner RMS Lusitania. Germany's resumption of unrestricted submarine warfare in February 1917, together with the Zimmermann Telegram, brought American entry into World War I on the British side.\n[…]\nList of ships sunk by submarines by death toll\n[…]\nSubmarine warfare\n[…]\n9 January 1917 German Crown Council meeting"
      },
      {
        "url": "https://en.wikipedia.org/wiki/American_entry_into_World_War_I",
        "situacao": "ok",
        "texto": "The United States entered World War I on April 6, 1917, more than two and a half years after the war began in Austria-Hungary. Apart from an Anglophile element urging early support for the British and an anti-tsarist element sympathizing with Germany's war against Russia, American public opinion had generally reflected a desire to stay out of the war.\n[…]\nThe Germans had anticipated that unrestricted submarine warfare would lead to war and thus tried to line up new allies ahead of the announcement, especially Mexico. Arthur Zimmermann, the German foreign minister, sent the Zimmermann Telegram to Mexico on January 16, 1917. Zimmermann invited Mexico (knowing their resentment towards America since the 1848 Mexican Cession) to join in a war against the United States if the United States declared war on Germany.\n[…]\nAbove all, US attitudes towards Germany focused on the U-boats (submarines), which sank RMS Lusitania in 1915 and other passenger ships without warning. That appeared to Americans as an unacceptable challenge to the US's rights as a neutral country, and as an unforgivable affront to humanity. After repeated diplomatic protests, Germany agreed to stop. But in 1917 the Germany military leadership decided that \"military necessity\" dictated the unrestricted use of their submarines.\n[…]\nThe United States Senate, in a 74 to 0 vote, declared war on Austria-Hungary on December 7, 1917, citing Austria-Hungary's severing of diplomatic relations with the United States, its use of unrestricted submarine warfare and its alliance with Germany. The declaration passed in the United States House of Representatives by a vote of 365 to 1. The sole dissenting ballot was cast by Meyer London, a Socialist Party of America member and New York congressman.\n[…]\nWilson, Woodrow. Why We Are at War (1917) six war messages to Congress, Jan- April 1917"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_submarina_irrestrita",
        "situacao": "ok",
        "texto": "Guerra submarina irrestrita é um tipo de guerra naval onde submarinos são empregados de forma agressiva para atacar forças navais inimigas, especialmente embarcações cargueiras e navios-tanques, sem restrições de neutralidade, nacionalidade ou se tem ou não meios de defesa. Tais ações são feitas no mar sem aviso prévio, não dando chance para o navio alvo tentar se defender ou proteger sua tripulaç\n[…]\nAs regras prize diziam que os submarinos deveriam subir a superfície e então buscar um \"local seguro\" para a tripulação de um navio antes de afundá-lo, a não ser que o navio não quisesse parar ou oferecesse resistência.\n[…]\nApós a Alemanha adotar uma política de guerra submarina irrestrita a partir de fevereiro de 1917, durante a Primeira Guerra Mundial, os países tentaram limitar ou até abolir os submarinos. Ao invés disso, foi assinado o Tratado Naval de Londres que exigia que os submarinos respeitassem a regra prize.\n[…]\nEstas regulamentações não proibiam que navios mercantes usassem armas, o que os tornavam essencialmente em navios de guerra auxiliares e assim, de facto, acabava por remover as proteções das regras prize. Isso fez com que as regulamentações anti-submarino fossem bem menos eficientes.\n[…]\nEsta tática é, até os dias atuais, controversa. A guerra submarina irrestrita aumenta a eficiência dos submarinos em combate e melhora suas chances de sobrevivência, mas muitos consideram tal tática como uma violação das leis da guerra, especialmente quando empregada contra navios de nações neutras em zonas de conflito.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Edith Cavell",
      "descricao": "Enfermeira britânica (1865–1915) fuzilada pelos alemães na Bélgica ocupada durante a Primeira Guerra Mundial."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que os alemães fuzilaram em 1915 a enfermeira britânica Edith Cavell, que trabalhava na Bélgica ocupada?",
    "resposta": "Ajudou soldados aliados a fugir",
    "fonte": [
      "https://en.wikipedia.org/wiki/Edith_Cavell"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Edith_Cavell",
        "situacao": "ok",
        "texto": "Edith Louisa Cavell ( KAV-əl; 4 December 1865 – 12 October 1915) was a British nurse. She is celebrated for treating wounded soldiers from both sides without discrimination during the First World War and for helping some 200 Allied soldiers escape from German-occupied Belgium. Cavell was arrested, court-martialled under German military law, and sentenced to death by firing squad. Despite internati\n[…]\nA blue plaque in West Runton, Norfolk, outside Cumberland Cottage reads \"Edith Cavell 1865–1915 Nursing Pioneer Spent Holidays Here 1908–1914\".\n[…]\nMount Edith Cavell, Alberta, Canada was named in her memory in 1916.\n[…]\nThe French singer Édith Piaf, born two months after Edith Cavell's execution, was named after her. The name \"Édith\", hitherto rare in France, became more common there after 1915.\n[…]\nAn Epitaph for Edith Cavell by Nigel Clarke - a solo violin piece recorded on Toccata Classics by Peter Sheppard Skaerved.\n[…]\nThe centenary was also marked by two new musical compositions. The 40-minute oratorio Eventide: In Memoriam Edith Cavell by Patrick Hawes premiered in Norwich Cathedral in July 2014 and had its London premiere in St Clement Danes, The Strand, London on 12 October 2015, the exact centenary of her death.\n[…]\nThe Belgian Edith Cavell Commemoration Group also commissioned a 20-minute-long setting of the Latin Mass by David Mitchell for the centenary - it premiered in Holy Trinity Pro-Cathedral, Brussels on 10 October 2015, in the same choir stalls where Cavell sang in 1915, with Haydn's Missa in Angustiis also performed at the same concert.\n[…]\nCavell Nurses' Trust\n[…]\nEdith Cavell Healthcare Campus\n[…]\nEdith Cavell Hospital\n[…]\nEdith Cavell commemoration site\n[…]\nWorks by or about Edith Cavell at the Internet Archive\n[…]\nKatie Pickles: Cavell, Edith Louisa, in: 1914-1918-online. International Encyclopedia of the First World War.\n[…]\nNewspaper clippings about Edith Cavell in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Edith_Cavell",
        "situacao": "ok",
        "texto": "Edith Louisa Cavell (Swardeston, 4 de dezembro de 1865 – Schaerbeek, 12 de outubro de 1915) foi uma enfermeira britânica. É lembrada por ter salvado várias vidas de ambos os lados e por ter ajudado 200 soldados Aliados a escaparem da Bélgica ocupada pela Alemanha durante a Primeira Guerra Mundial. Presa por autoridades alemãs, ela foi considerada traidora e culpada por traição, enviada à corte mar\n[…]\nEm 1897, em Maidstone, Edith ajudou a cuidar de pacientes acometidos de febre tifoide, trabalho pelo qual a cidade lhe concedeu uma medalha. Em 1907, Edith foi convidade pelo médico Antoine Depage a administrar uma nova escola de enfermagem, a L'École Belge d'Infirmières Diplômées, em Bruxelas. O trabalho de Edith profissionalizou a enfermagem na Bélgica.\n[…]\nEm novembro de 1914, após a ocupação alemã na Bélgica, Edith começou a abrigar soldados britânicos e a ajudá-los a escapar do país ocupado até a Holanda. Soldados britânicos e franceses feridos, bem como cidadãos belgas e franceses em idade militar eram escondidos dos alemães e recebiam documentação falsa assinada pelo Príncipe Reginaldo de Croÿ em sua casa em Bellignies.\n[…]\nAo contrário do que se diz, Edith não foi presa por espionagem, e sim por traição. Ela pode ter sido recrutada pela inteligência britânica e teria negado para poder ajudar os soldados aliados a escaparem, ainda que isso não seja consenso entre os historiadores. Em custódia, Edith foi interrogada em francês, mas seu julgamento inteiro foi em alemão, o que teria levado o promotor a interpretar errado as respostas de Edith.\n[…]\nExiste em português a \"Correspondência trocada entre o Ministro dos Negócios Estrangeiros Britânico e o Embaixador dos Estados Unidos com respeito à execução de Miss Cavell em Brxellas\". Londres: Eyre &Spottiswoode, Limited. 1915. 24 páginas.\n[…]\nObras de ou sobre Edith Cavell no Internet Archive\n[…]\nEdith Cavell commemoration site",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "RMS Lusitania",
      "descricao": "Transatlântico britânico afundado por um submarino alemão na costa da Irlanda em maio de 1915."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Para justificar o afundamento do transatlântico Lusitânia em 1915, a Alemanha alegou que o navio de passageiros carregava o quê?",
    "resposta": "Munição para os Aliados",
    "fonte": [
      "https://en.wikipedia.org/wiki/RMS_Lusitania"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/RMS_Lusitania",
        "situacao": "ok",
        "texto": "RMS Lusitania was a British ocean liner launched by the Cunard Line in 1906 as a Royal Mail Ship. She was the world's largest passenger ship until the completion of her sister Mauretania three months later. In 1907, she gained the Blue Riband appellation for the fastest Atlantic crossing, which had been held by German ships for a decade.\n[…]\nThough reserved for conversion as an armed merchant cruiser, Lusitania was not commissioned as such during World War I, but continued a transatlantic passenger service, sometimes carrying war materials in her cargo. The German submarine U-20 hit her with a torpedo on 7 May 1915 at 14:10, 11 nautical miles (20 km; 13 mi) off the Old Head of Kinsale, Ireland, leading to her sinking about 18 minutes later.\n[…]\nOn 17 April 1915, Lusitania left Liverpool on her 201st transatlantic voyage, arriving in New York on 24 April. On 22 April, the German Embassy under Johann Heinrich von Bernstorff submitted a general warning about travel to 50 American newspapers, including those in New York, which coincidentally appeared in newspapers just before the ship sailed.\n[…]\nOn 7 May 1915, Lusitania was nearing the end of her 202nd crossing, bound for Liverpool from New York, and was scheduled to dock at the Prince's Landing Stage later that afternoon. Aboard her were 1,264 passengers, three stowaways, and a crew of 693, totalling 1,960 people. She was also carrying around 173 tons of war supplies on board, consisting of 4.2 million rounds of rifle ammunition, almost 5,000 shrapnel-filled artillery shell casings and 3,240 brass percussion fuses.\n[…]\nRMS Hesperian, another liner sunk in 1915 by U-20\n[…]\nThe Carpet from Bagdad, a mostly lost 1915 film; one reel was recovered from the wreck in 1982\n[…]\nRMS Lusitania, Public Broadcasting Service (PBS)\n[…]\nSinking of the Lusitania (1918)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/RMS_Lusitania",
        "situacao": "ok",
        "texto": "O RMS Lusitania foi um navio de passageiros britânico que esteve em operação durante o início do século XX. A embarcação foi detentora da Flâmula Azul e, brevemente, o maior navio de passageiros do mundo até a conclusão de seu navio irmão, o Mauretania. A Cunard Line lançou o Lusitania em 1906, em uma época de forte concorrência pelo comércio do Atlântico Norte. Ele fez um total de 202 travessias \n[…]\nCom o início das hostilidades, os temores pela segurança do Lusitania e de outros grandes transatlânticos aumentaram. Durante 1914-1915, muitos transatlânticos se tornaram navios de transporte de tropas ou navio-hospitalar, mas este transatlântico foi o oposto de tudo isso, e continuando no serviço comercial. Embora as reservas de passagens não fossem de forma alguma fortes durante aquele outono e inverno, mas a demanda era forte o suficiente para mantê-lo no serviço civil.\n[…]\nEm 4 de fevereiro de 1915, a Alemanha declarou os mares ao redor da Grã-Bretanha e Irlanda uma zona de guerra: a partir de 18 de fevereiro, os navios aliados na área seriam afundados sem aviso prévio. Esta não foi uma guerra submarina totalmente irrestritacomo esforços seriam feitos para evitar afundar navios neutros. O Lusitania estava programado para chegar a Liverpool em 6 de março de 1915, com isso, o Almirantado emitiu suas instruções específicas sobre como evitar submarinos.\n[…]\nEmbora a maioria eram cidadãos britânicos, bem como um grande número de canadenses, juntamente com 128 americanos. Programado para sair às 10h, o Lusitania partiu com duas horas de atraso devido ao recolhimento de 41 passageiros do transatlântico da Anchor Line, o SS Cameronia, que teve a sua viagem cancelada. Existe alguns relatos que pouco depois da partida do navio, três homens de língua alemã foram encontrados a bordo escondidos na despensa de um comissário.\n[…]\nLusitania on Chris' Cunard Page (em inglês)\n[…]\nRMS Lusitania no wrecksite",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Navio Paraná (1917)",
      "descricao": "Navio mercante brasileiro torpedeado por um submarino alemão na costa da França em abril de 1917."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em abril de 1917, o torpedeamento do navio brasileiro Paraná por um submarino alemão levou o Brasil a tomar que medida?",
    "resposta": "Romper relações diplomáticas com a Alemanha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Brasil_na_Primeira_Guerra_Mundial",
      "https://en.wikipedia.org/wiki/Brazil_during_World_War_I"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Brasil_na_Primeira_Guerra_Mundial",
        "situacao": "ok",
        "texto": "O Brasil na Primeira Guerra Mundial (1914-1918) tinha uma posição neutra respaldada pela Convenção de Haia, buscando não restringir os seus produtos exportados na época, principalmente o café. A Alemanha era, na época, o principal parceiro comercial do Brasil, sendo seguida pela Inglaterra e pela França. Após o afundamento de navios mercantes brasileiros por submarinos da Marinha Imperial Alemã, o\n[…]\nAs relações entre Brasil e o Império Alemão, outrora extremamente cordiais, foram abaladas pela decisão alemã de autorizar seus submarinos a afundar qualquer navio que entrasse nas zonas de bloqueio.\n[…]\nNo dia 5 de abril de 1917 o vapor Paraná foi torpedeado perto de Le Havre, com 60 000 toneladas de café e 3 brasileiros morreram. O acidente criou uma comoção nacional. No entanto, propriedades alemãs ou de descendentes de alemães foram vandalizadas em Porto Alegre e Blumenau. O ministro de relações exteriores Lauro Müller foi forçado à resignar, devido ao \"perigo alemão\" e os discursos inflamados de Ruy Barbosa.\n[…]\nNo dia 11 de abril de 1917 o Brasil rompeu relações diplomáticas com a coligação formada entre a Alemanha e a Áustria-Hungria, e, em 20 de maio, o navio Tijuca foi torpedeado perto da costa francesa por submarino alemão. Nos meses seguintes, o governo brasileiro confiscou 42 navios alemães que estavam em portos brasileiros, como uma indenização de guerra, essa quantia considerável de navios passou a corresponder a um quarto da frota brasileira.\n[…]\nEm 18 de outubro de 1917, um outro navio mercante, Macau, foi torpedeado por submarino alemão U-93. No dia 23 de outubro de 1917 o cargueiro nacional Macau, um dos navios arrestados, foi torpedeado pelo submarino alemão U-93, perto da costa da Espanha, e seu comandante feito prisioneiro. Com a pressão popular contra a Alemanha, no dia 26 de outubro de 1917, o país declarou guerra à aliança germânica.\n[…]\nNavios Brasileiros"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_during_World_War_I",
        "situacao": "ok",
        "texto": "During World War I (1914–1918), Brazil initially adopted a neutral position in accordance with the Hague Convention as an attempt to maintain markets for its export products, mainly coffee, latex, and industrially manufactured items.\n[…]\nRelations between Brazil and the German Empire were shaken by the German decision to introduce unrestricted submarine warfare, thus allowing its submarines to sink any ship that breached the blockade. On April 5, 1917, the Brazilian steamship Paraná was torpedoed by a German submarine, which killed three Brazilians.\n[…]\nApril 11, 1917: Brazil broke diplomatic relations with Germany\n[…]\nMay 22, 1917: U-47 torpedoed the steamship Lapa.\n[…]\nOctober 18, 1917: U-93 torpedoed the steamship Macau near the coast of Spain and took the captain prisoner\n[…]\nNovember 2, 1917: U-151 torpedoed the steamships Acari and Guaíba\n[…]\nThe war at sea fought by Brazil's navy began on August 1, 1918, following the departure of the force from the port of Rio de Janeiro. On August 3, 1918, the German submarine U-43 torpedoed the Brazilian ship Maceió. On August 9, 1918, the mission reached Freetown in Sierra Leone, with the fleet staying 14 days, during which the crew began falling ill with Spanish flu during a pandemic.\n[…]\nOn the night of August 25, while sailing from Freetown to Dakar, the division suffered a torpedo attack by German submarines, but no casualties or damage were suffered by the Brazilian vessels; the torpedoes passed harmlessly between the Brazilian ships. A successful counter-attack using depth charges was launched, and the Royal Navy credited the Brazilians with the destruction of a U-boat.\n[…]\nBrazil's Explanation to the Vatican of the Reasons for War, October 1917."
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Concerto para a Mão Esquerda",
      "descricao": "Concerto para piano e orquestra de Maurice Ravel, composto entre 1929 e 1930 para ser tocado apenas com a mão esquerda."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Ravel compôs seu Concerto para a Mão Esquerda por encomenda de um pianista austríaco. Por que esse pianista só tocava com essa mão?",
    "resposta": "Perdeu o braço direito na guerra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Piano_Concerto_for_the_Left_Hand_(Ravel)",
      "https://en.wikipedia.org/wiki/Paul_Wittgenstein"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piano_Concerto_for_the_Left_Hand_(Ravel)",
        "situacao": "ok",
        "texto": "The Piano Concerto for the Left Hand in D major was composed by Maurice Ravel between 1929 and 1930, concurrently with his Piano Concerto in G major. The piece was commissioned by Paul Wittgenstein, a concert pianist who had lost his right arm in the First World War.\n[…]\nIn preparing for composition, Ravel studied several pieces written for one-handed piano, including Camille Saint-Saëns's Six Études pour la main gauche (Six Études for the Left Hand) (Op. 135), Leopold Godowsky's transcription for the left hand of Frédéric Chopin's Etudes (Opp. 10 and 25), Carl Czerny's Ecole de la main gauche (School of the Left Hand) (Op. 399), 24 études pour la main gauche (Op. 718), Charles-Valentin Alkan's Fantaisie in A♭ major (Op. 76 No.\n[…]\nIn May 1930 Ravel had had a major disagreement with Arturo Toscanini over the correct tempo for Boléro (he conducted it too fast for Ravel's liking, who said he should play it at the slower speed he had in mind, or not at all). In September, Ravel patched up the relationship and invited Toscanini to conduct the world premiere of the Piano Concerto for the Left Hand, but the conductor declined.\n[…]\nEven before the premiere, in 1931 Alfred Cortot made an arrangement for piano two-hands and orchestra; however, Ravel did not approve of it and forbade its publication or performance. Cortot ignored this and played his arrangement, which caused Ravel to write to many conductors imploring them not to engage Cortot to play his concerto. After Ravel's death in 1937, Cortot resumed playing his arrangement, and even recorded it with Charles Munch leading the Paris Conservatoire Orchestra.\n[…]\nLewis, Cary (August 1965). The Piano Concertos of Ravel (M.Mus.). North Texas State University. OCLC 42709867. Retrieved 24 April 2017."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Paul_Wittgenstein",
        "situacao": "ok",
        "texto": "Paul Wittgenstein (November 5, 1887 – March 3, 1961) was an Austrian-American concert pianist notable for commissioning new piano concerti for the left hand alone, after his right arm was amputated during World War I. He devised novel techniques, including pedal and hand-movement combinations, that allowed him to play chords previously thought impossible for a five-fingered pianist.\n[…]\nHe then approached more famous composers, asking them to write material for him to perform. Benjamin Britten, Paul Hindemith, Alexandre Tansman, Erich Wolfgang Korngold, Sergei Prokofiev, Karl Weigl, Franz Schmidt, Sergei Bortkiewicz, and Richard Strauss all produced pieces for him. Maurice Ravel wrote his Piano Concerto for the Left Hand, which became more famous than any of the other compositions Wittgenstein inspired.\n[…]\nMany of the pieces Wittgenstein commissioned are still performed today by two-armed pianists; in particular, the Austrian pianist Friedrich Wührer, claiming the composer's sanction but apparently over Wittgenstein's objections, created two-hand arrangements of Schmidt's Wittgenstein-inspired left-hand works.\n[…]\nAn episode of the long-running American television series M*A*S*H, \"Morale Victory\", featured James Stephens as a drafted concert pianist with debilitating nerve damage in his right hand after being wounded in combat. Charles Winchester (David Ogden Stiers) provides him with the music for Ravel's Concerto for the Left Hand, tells him Wittgenstein's story, and encourages him not to abandon his musical gift.\n[…]\nMarkowitz, Michael (August 12, 2002). \"Long-Lost Hindemith Concerto for Piano Left-Hand Surfaces in Pennsylvania Farmhouse\". Chicago Tribune. Archived from the original on July 3, 2007.\n[…]\n1933 video of Paul Wittgenstein performing Ravel's Piano Concerto for Left Hand at Salle Pleyel in Paris, France"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Concerto_para_piano_para_a_m%C3%A3o_esquerda_%28Ravel%29",
        "situacao": "ok",
        "texto": "O Concerto para piano para a mão esquerda em Ré Maior foi composto por Maurice Ravel entre 1929 e 1930.\n[…]\nFoi composto, quase como um desafio, para o eminente pianista austríaco Paul Wittgenstein, que tinha perdido o braço direito num combate durante a Primeira Guerra Mundial e cuja carreira parecia terminada. Contudo, Wittgenstein, com admirável coragem, recusou conformar-se com o fato, e escreveu a vários compositores, pedindo-lhes que escrevessem músicas que ele pudesse tocar em tais circunstâncias.\n[…]\nPor essa ocasião, Maurice Ravel achava-se ocupado com a composição de um concerto para piano (para duas mãos): o em sol maior.\n[…]\nContudo, movido, pelo apelo, e cedendo ao seu amor inato pela experimentação e pelo incomum, Ravel ficou enormemente fascinado por esta prova técnica. Sem suspender a composição do outro concerto, pôs-se sem tardança a trabalhar a fim de escrever algo que pudesse atender às necessidades do pianista tão gravemente sacrificado.\n[…]\nAo tempo da composição ainda estava sob a sedução do jazz que Ravel ouvira em vários lugares de diversões noturnas no Harlem e em Greenwich Village. Assim sendo, não é de surpreender que, nesse concerto, nos deparemos com temas e ritmos de jazz procurando, insolentemente, vir à tona.\n[…]\nSegue-se um breve andante no qual o piano acompanha melancólica melodia cantada pelo corne-inglês.\n[…]\nSucede a este episódio uma espécie de tarantela que, por sua vez, dá lugar a uma cadenza final na qual Ravel não tem pena do pianista. A obra acaba quando o pianista e a orquestra travam nova batalha numa breve coda de grande brilho.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Ofensiva Nivelle",
      "descricao": "Ofensiva franco-britânica de abril e maio de 1917, comandada pelo general Robert Nivelle, que terminou em grande fracasso."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1917, o fracasso sangrento da ofensiva do general Nivelle levou dezenas de milhares de soldados franceses a fazer o quê?",
    "resposta": "Amotinar-se e recusar novos ataques",
    "fonte": [
      "https://en.wikipedia.org/wiki/1917_French_Army_mutinies",
      "https://en.wikipedia.org/wiki/Nivelle_Offensive"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1917_French_Army_mutinies",
        "situacao": "ok",
        "texto": "The 1917 French Army mutinies took place by French Army troops on the Western Front in northern France during World War I. The mutinies started just after the unsuccessful and costly Second Battle of the Aisne, the main action in the April 1917 Nivelle offensive. The new commander of the armies in France, General Robert Nivelle, had promised a decisive victory over the German Empire within 48 hour\n[…]\nIn April 1917, General Robert Nivelle promised a war-winning decisive victory. He proposed to work closely with the British Army to break through the German Empire lines on the Western Front by a great attack against the German-occupied Chemin des Dames, a long and prominent ridge that runs east to west, just north of the Aisne River.\n[…]\nNivelle's attack, the Second Battle of the Aisne, failed to achieve its main war-winning objective. At the cost of very high casualties, the offensive exhausted the German reserves and conquered some tactically important positions. A French tank attack had also been launched near Berry-au-Bac, but half of the Schneider CA1 tanks engaged were knocked out. Nivelle was removed from his command on 15 May 1917 and was replaced by General Philippe Pétain.\n[…]\nWhen the Americans arrived in France in the spring of 1917, they were inexperienced. The US generals had orders not to accept responsibility for military zones and to \"understudy\" the British. That meant that for the summer and the autumn of 1917, British troops had to take over the zones that the French had vacated and also to teach American troops.\n[…]\nFalls, C. (1992) [1940]. Military Operations France and Belgium 1917: The German Retreat to the Hindenburg Line and the Battles of Arras. History of the Great War Based on Official Documents by Direction of the Historical Section of the Committee of Imperial Defence. Vol. I (Imperial War Museum and Battery Press ed.). London: HMSO. ISBN 978-0-89839-180-0."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nivelle_Offensive",
        "situacao": "ok",
        "texto": "The Nivelle offensive (16 April – 9 May 1917) was a Franco-British operation on the Western Front in the First World War that led to mutinies in the French Army. The offensive was named after General Robert Nivelle, the commander-in-chief of the French metropolitan armies. The French part of the offensive was intended to be decisive by breaking through the German defences on the Aisne front within\n[…]\nNivelle left Petain in command of Groupe d'armées de Centre (GAC) and established a new Groupe d'armées de Reserve (GAR, Joseph Micheler) for the attack along the Chemin des Dames with the Fifth Army (General Olivier Mazel), the Sixth Army (General Charles Mangin) and the Tenth Army (General Denis Duchêne). Forty-nine infantry and five cavalry divisions were massed on the Aisne front with 5,300 guns.\n[…]\nThe ground at Brimont began to rise to the west towards Craonne and then reached a height of 180 m (590 ft) along a plateau which continued westwards to Fort Malmaison. The French held a bridgehead 20 km (12 mi) wide on the north bank of the Aisne, south of the Chemin des Dames, from Berry-au-Bac to Fort Condé on the road to Soissons.\n[…]\nThe Battle of La Malmaison (Bataille de la Malmaison 23–27 October 1917) led to the French capture of the village and fort of La Malmaison and control of the Chemin des Dames ridge. Boehn chose to defend the front positions, rather than treat them as an advanced zone and conduct the main defence north of the Canal de l'Oise à l'Aisne.\n[…]\nOn 25 October the village and forest of Pinon were captured and the line of the Canal de l'Oise à l'Aisne was reached. In four days the French advanced 9.7 km (6 mi) and forced the Germans off the Chemin des Dames, back to the north bank of the Ailette valley by the night of 1/2 November. The French took 11,157 prisoners, 200 guns and 220 heavy mortars for c. 10,000 casualties from 23 to 26 October."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Motins_do_ex%C3%A9rcito_franc%C3%AAs_%281917%29",
        "situacao": "ok",
        "texto": "Os motins do exército francês de 1917 foram uma série de deserções e revoltas dentro das forças francesas que ocorreram na Frente Ocidental durante a Primeira Guerra Mundial. Os motins começaram após o desastroso desfecho da Segunda Batalha de Aisne, no contexto da fracassada Ofensiva Nivelle.\n[…]\nAo fim de abril de 1917, a situação se deteriorou para o exército francês na frente de batalha. As condições de vida eram precárias e havia desconfiança por parte dos soldados a respeito da competência dos seus oficiais superiores que constantemente os mandavam para morrer em ofensivas sem sentido. Em maio, no auge das deserções, motins foram reportados em pelo menos onze divisões francesas (principalmente na 9ª, 158ª, 5ª, 1ª, 6ª, 13ª, 35ª, 43ª, 62ª, 77ª e 170ª divisões).\n[…]\nSomente no ano de 1917 cerca de 27 000 soldados franceses desertaram. Em junho, contudo, as autoridades militares francesas retaliaram. No total, mais de 3 400 cortes marciais foram realizadas, com 554 homens sendo sentenciados à morte (mas em torno de apenas 10% destas sentenças foram executadas).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Portugal na Primeira Guerra Mundial",
      "descricao": "Participação portuguesa no conflito, a partir da declaração de guerra alemã em março de 1916."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em março de 1916, a Alemanha declarou guerra a Portugal. Que atitude portuguesa provocou essa declaração?",
    "resposta": "A apreensão de navios alemães",
    "fonte": [
      "https://en.wikipedia.org/wiki/Portugal_in_World_War_I"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Portugal_in_World_War_I",
        "situacao": "ok",
        "texto": "The Kingdom of Portugal had been allied with England since 1373, and thus the Republic of Portugal was an ally of the United Kingdom. However, Portugal remained neutral from the start of World War I in 1914 until early 1916. In that time there were many hostile engagements with Germany.\n[…]\nTensions between Germany and Portugal also arose as a result of German U-boat warfare, which sought to blockade the United Kingdom, at the time the most important market for Portuguese products. Ultimately this led to the confiscation of German ships interned in Portuguese ports in 1916, to which Germany reacted by declaring war on 9 March 1916. In total, from 1916 to 1918, about 91 Portuguese ships were sunk and five damaged by German U-boats, causing at least 170 casualties.\n[…]\nMarch 9: Germany declared war on Portugal. The Portuguese government started to organise the participation of its troops on the Western Front. Shortly afterward, Portugal began closing its consulates in the Ottoman Empire. (The Ottomans had no representation in Portugal.)\n[…]\nMarch 15: Austria-Hungary declared war on Portugal.\n[…]\nJuly 22: The Portuguese Expeditionary Corps (Corpo Expedicionário Português, CEP), with 30,000 soldiers, was established in Tancos, Portugal, under the command of General Norton de Matos.\n[…]\nJanuary 3: A convention with Britain regulated Portuguese participation in the Western Front. Portuguese troops of the CEP were to be integrated in the BEF (British Expeditionary Force).\n[…]\nJanuary 7: The Independent Heavy Artillery Corps (Corpo de Artilharia Pesada Independente, CAPI) was created to respond to the French request for artillery crews. Under the Portuguese Superior Command, this unit was to operate 25 heavy artillery batteries.\n[…]\nPortugal during World War II"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Portugal_na_Primeira_Guerra_Mundial",
        "situacao": "ok",
        "texto": "A participação de Portugal no primeiro conflito mundial ao lado dos Aliados esteve de acordo com as orientações da República ainda recentemente instaurada (5 de Outubro de 1910). Entrando oficialmente a 9 de Março de 1916, combates na África ocorriam desde o inicio do conflito.\n[…]\nNo entanto, o principal oponente à entrada de Portugal na Primeira Guerra Mundial foi a Inglaterra.\n[…]\nEm Fevereiro de 1916, o antigo aliado português decidiu pedir ao Estado português o apresamento de todos os navios alemães e austro-húngaros que estavam ancorados na costa portuguesa. Portugal apresou um total de 72 navios alemães, tendo cedido 65% destes para uso da Inglaterra, mantendo os restantes 35% do total para uso português. Esta atitude justificou a declaração oficial de guerra a Portugal pela Alemanha, a 9 de Março de 1916 (apesar dos combates em África desde 1914).\n[…]\nEm 1917, as primeiras tropas portuguesas, do Corpo Expedicionário Português, seguiam para a guerra na Europa, em direcção à Flandres. Portugal envolveu-se, depois, em combates na França. A experiência do Corpo Expedicionário Português no campo de batalha ficou registada na publicação João Ninguém, soldado da Grande Guerra, com ilustrações e texto do capitão Menezes Ferreira.\n[…]\nEm finais de Junho de 1916 chega a Moçambique a 3.ª força enviada de Portugal, constituída por 4642 homens comandados por Ferreira Gil, com a finalidade de passar o Rovuma e atacar as tropas alemães ao mesmo tempo que estas eram atacadas no Tanganica por forças inglesas, da Rodésia, da União Sul-Africana, do Quénia, do Congo Belga e da Índia.\n[…]\nÀ medida que o número de mortes vai aumentando no Corpo Expedicionário Português e o seu fim era previsível, a guerra tornava-se cada vez mais impopular.\n[…]\nCorpo Expedicionário Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Winnie (ursa)",
      "descricao": "Ursa-negra canadense, mascote de uma unidade militar do Canadá na Primeira Guerra, que viveu no Zoológico de Londres e inspirou o nome do Ursinho Pooh."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que personagem infantil ganhou o nome de uma ursa canadense, mascote de uma unidade militar na guerra, que acabou no zoológico de Londres?",
    "resposta": "Ursinho Pooh",
    "fonte": [
      "https://en.wikipedia.org/wiki/Winnie_(bear)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Winnie_(bear)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "HMHS Britannic",
      "descricao": "Transatlântico britânico da White Star Line convertido em navio-hospital e afundado por uma mina no Mar Egeu em 1916."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O navio-hospital Britannic, afundado por uma mina no Mar Egeu em 1916, era irmão de que transatlântico famoso, que naufragou em 1912?",
    "resposta": "Titanic",
    "fonte": [
      "https://en.wikipedia.org/wiki/HMHS_Britannic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/HMHS_Britannic",
        "situacao": "ok",
        "texto": "HMHS Britannic () was the third and final vessel of the White Star Line's Olympic class of ocean liners and the second White Star ship to bear the name Britannic. She was the younger sister of RMS Olympic and RMS Titanic and was intended to enter service as a transatlantic passenger liner. She operated as a hospital ship from 1915 until her sinking near the Greek island of Kea, in the Aegean Sea i\n[…]\nBritannic was launched on 26 February 1914, months before the start of the First World War. The ship was designed to be the safest of the three ships with design changes made during construction due to lessons learned from the sinking of the Titanic. Britannic was laid up at her builders, Harland & Wolff, in Belfast, for many months before being requisitioned by the British government to be operated as a hospital ship. In 1915 and 1916 she operated between the United Kingdom and the Dardanelles.\n[…]\nIn addition, the number of crew planned was increased from about 860 – 880 onboard Olympic and Titanic to 950 aboard Britannic.\n[…]\nIn 2012, divers using rebreathers installed and recovered scientific equipment used for environmental purposes, to determine how fast bacteria are eating at Britannic's iron compared to Titanic.\n[…]\nA BBC2 documentary, Titanic's Tragic Twin – the Britannic Disaster, was broadcast on 5 December 2016; presented by Kate Humble and Andy Torbet, it used up-to-date underwater film of the wreck and spoke to relatives of survivors.\n[…]\nAlma Katsu's 2020 novel The Deep was set partly on Britannic and Titanic, and centred around the sinking of the two ships.\n[…]\nKohler, Richie; Hudson, Charlie (2016). Mystery of the Last Olympian: Titanic's Tragic Sister Britannic. Best Publishing Company. ISBN 978-1930536869.\n[…]\nMills, Simon (2019). Exploring the Britannic: The Life, Last Voyage and Wreck of Titanic's Tragic Twin. London: Adlard Coles. ISBN 978-1-4729-5492-3.\n[…]\nHospital Ship Britannic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/HMHS_Britannic",
        "situacao": "ok",
        "texto": "O HMHS Britannic foi um navio de passageiros britânico construído pelos estaleiros da Harland and Wolff, em Belfast, para a White Star Line, porém transformado em navio-hospital antes de entrar em operação comercial. Originalmente chamado de Gigantic, foi o terceiro da Classe Olympic de transatlânticos, depois do RMS Olympic e o RMS Titanic. Sua construção começou em novembro de 1911, com lançamen\n[…]\nO Britannic foi requisitado pela Marinha Real Britânica em 1915, durante seu período de equipagem, para servir como navio-hospital na Primeira Guerra Mundial, viajando entre o Reino Unido e Dardanelos no Império Otomano. Ele sofreu uma explosão após colidir com uma mina subaquática na manhã do dia 21 de novembro de 1916, no mar Egeu, durante sua sexta viagem, afundando em pouco menos de uma hora. Entretanto, as causas exatas de seu naufrágio permanecem desconhecidas até hoje.\n[…]\nEle foi substituído na frota da White Star Line, depois da guerra, pelo RMS Majestic. Em 1975, seus destroços foram localizados pelo explorador francês Jacques-Yves Cousteau. O Britannic é o maior navio para passageiros naufragado do mundo, embora não tão famoso quanto seu irmão Titanic, atraindo mergulhadores e expedições de exploração desde sua redescoberta, com o principal objetivo, na maioria das vezes, de determinar as causas do naufrágio.\n[…]\nComo o Britannic naufragou durante a guerra, nunca tendo servido comercialmente como navio de passageiros, além de ter tido poucas vítimas, não atraiu o mesmo interesse e entusiasmo que seu irmão Titanic. Ele logo foi esquecido pelo público, com sua fama voltando apenas depois da descoberta de seus destroços. Além disso, seu nome seria reutilizado em 1930, pela White Star Line, no MV Britannic. Este foi o último navio da empresa, que em 1934 foi comprada pela Cunard Line.\n[…]\nPiouffre, Gérard (2009). Le Titanic ne répond plus. [S.l.]: Larousse. ISBN 9782035841964",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Dia Anzac",
      "descricao": "Data comemorativa da Austrália e da Nova Zelândia, em 25 de abril, que lembra o desembarque em Galípoli em 1915."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Dia Anzac, que lembra o desembarque aliado em Galípoli em 1915, é celebrado na mesma data de que revolução portuguesa?",
    "resposta": "Revolução dos Cravos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Anzac_Day",
      "https://pt.wikipedia.org/wiki/Revolução_dos_Cravos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anzac_Day",
        "situacao": "ok",
        "texto": "Anzac Day is a national day of remembrance in Australia and New Zealand that broadly commemorates all Australians and New Zealanders \"who served and died in all wars, conflicts, and peacekeeping operations\" and \"the contribution and suffering of all those who have served\".\n[…]\nAnzac Day marks the anniversary of the first campaign that led to major casualties for Australian and New Zealand forces during the First World War. The acronym ANZAC stands for Australian and New Zealand Army Corps, whose soldiers were known as Anzacs. Anzac Day remains one of the most important national occasions of both Australia and New Zealand; however, the ceremonies and their meanings have changed significantly since 1915.\n[…]\nThe original native pines and remnant seedlings of the original wattles still grow in Wattle Grove, but in 1940 the Adelaide City Council moved the monument and its surrounding pergola a short distance away to Lundie Gardens. Also in South Australia, Eight Hour Day, 13 October 1915, was renamed Anzac Day and a carnival was organised to raise money for the Wounded Soldiers Fund. The name Anzac Day was chosen through a competition, won by Robert Wheeler, a draper of Prospect.\n[…]\nMelbourne observed an Anzac Remembrance Day on 17 December 1915.\n[…]\n1955: the then current 3+1⁄2-pence (equivalent to A$0.39 in 2022) Purple Nursing commemorative stamp was privately overprinted with the words \"ANZAC 1915–1955 40 YEARS LEST WE FORGET\" and a value ranging from 1 pence to £A 1 (equivalent to A$38.58 in 2022) was also added which was the fundraising amount in addition to the legal cost of stamp of which the denomination was 3+1⁄2 pence. Eight values were issued and were intended to raise funds for the Anzac commemorations.\n[…]\nQueensland First ANZAC Day\n[…]\nAnzac Day ritual"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Revolução_dos_Cravos",
        "situacao": "ok",
        "texto": "A Revolução de 25 de Abril de 1974, também conhecida como Revolução dos Cravos, Revolução de Abril ou apenas por 25 de Abril, refere-se a um evento da história de Portugal resultante do movimento político e social, ocorrido a 25 de abril de 1974, que depôs o regime ditatorial do Estado Novo, vigente desde 1933, e que iniciou um processo que viria a terminar com a implantação de um regime democráti\n[…]\nA Revolução dos Cravos continua a dividir a sociedade portuguesa, sobretudo nos estratos mais velhos da população que viveram os acontecimentos, nas facções extremas do espectro político e nas pessoas politicamente mais empenhadas. A análise que se segue refere-se apenas às divisões entre estes estratos sociais.[carece de fontes]?\n[…]\nMais tarde as floristas da Baixa continuaram a replicar o gesto. Por esta razão este dia também ficou conhecido como \"Revolução dos Cravos\".\n[…]\nHistória do Povo na Revolução Portuguesa — 1974–75 (2014), de Raquel Varela.\n[…]\nRevolução dos «Cravos», Áreamilitar\n[…]\nMorreu Siné, o cartoonista que ilustrou a revolução dos cravos, artigo de Luís Miguel Queirós, jornal Público, 5 de maio 2016\n[…]\nA Revolução dos Cravos na Revista nº05 — 25 de Abril (textos para download) do Instituto Camões\n[…]\nSob o Vermelho dos Cravos de Abril: literatura e revolução no Portugal contemporâneo- Resenha de Gerson Luiz Roani, Revista Letras, Curitiba, n. 64, p. 15–32. set./dez. 2004. Editora UFPR\n[…]\nCinéma d’Avril 1. Rencontre avec la documentariste Ginette Lavigne auteur de “República, journal du peuple” — o jornal República e a Revolução dos Cravos\n[…]\nCronologia da Revolução dos Cravos (24 e 25 de Abril)\n[…]\nCronologia da Revolução dos Cravos na pág. da Universidade de Évora (25 e 26 de Abril)\n[…]\nO Fim da Ditadura- Cronologia da Revolução dos Cravos de 25 de Abril a 31 de Dezembro de 1974 em C. M. Oeiras\n[…]\nCronologia da Revolução dos Cravos(25 de Abril de 1974 a 22 de Abril de 1976) em Fórum Cidadania"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Roland Garros (aviador)",
      "descricao": "Aviador francês (1888–1918), pioneiro da aviação de caça, morto em combate na Primeira Guerra Mundial."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que torneio de tênis de Grand Slam é disputado num complexo batizado em homenagem a um aviador francês morto na guerra?",
    "resposta": "Aberto da França",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stade_Roland_Garros",
      "https://en.wikipedia.org/wiki/Roland_Garros_(aviator)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stade_Roland_Garros",
        "situacao": "ok",
        "texto": "Stade Roland Garros (French pronunciation: [stad ʁɔlɑ̃ ɡaʁɔs]; 'Roland Garros Stadium') is a complex of tennis courts, including stadiums, located in Paris that hosts the French Open. That tournament, also known as Roland Garros, is a major tennis championship played annually in late May and early June. The complex is named after Roland Garros (1888–1918), a pioneering French aviator, and was cons\n[…]\nThe 13.5-hectare (34-acre) complex contains twenty courts, including three large-capacity stadiums; Les Jardins de Roland Garros, a large restaurant and bar complex; Le Village, the press and VIP area; France's National Training Centre (CNE); and the Tenniseum, a bilingual, multimedia museum of the history of tennis.\n[…]\nCourt Philippe Chatrier was built in 1928 as Stade Roland Garros's centerpiece and remains its principal venue. It seats 15,225 spectators as of a 2019 renovation. The stadium was known simply as \"Court Central\" until 2001 when it was renamed for the long-time president of the Fédération Française de Tennis (FFT) who helped restore tennis as a Summer Olympics sport in 1988.\n[…]\nThe 5,000-seat tertiary venue was completed in March 2019. Technically located just outside the Roland Garros compound, but operated as part of the tennis complex, Court Simonne Mathieu was built on the adjacent municipal grounds of the Jardin des Serres d'Auteuil. The court's namesake, Simonne Mathieu,  was the 1938 and 1939 women's singles champion who is also remembered as a leader of the French Resistance during the Second World War.\n[…]\nAmid charges of bluffing and brinkmanship, a spokesman explained that because Stade Roland Garros was less than half the size of the other three Grand Slam venues and had no covered courts, the French Open was at risk of losing its Grand Slam status to Madrid—which has a long clay court tradition and larger facilities—or the Gulf countries."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Roland_Garros_(aviator)",
        "situacao": "ok",
        "texto": "Eugène Adrien Roland Georges Garros (French: [ʁɔlɑ̃ ɡaʁos]; 6 October 1888 – 5 October 1918) was a French aviation pioneer and fighter pilot. A self-taught pilot, he performed many early aviation feats such as the first-ever airplane crossing of the Mediterranean Sea in 1913. He later joined the French Army and became one of the earliest fighter pilots during First World War.\n[…]\nRoland Garros was born in Saint-Denis, Réunion, and studied at the Lycée Janson de Sailly and HEC Paris.\n[…]\nThe Stade Roland Garros tennis centre constructed in Paris in the 1920s was named after him. It accommodates the French Open, one of the four Grand Slam tennis tournaments. Consequently, the tournament is officially called Les Internationaux de France de Roland-Garros (the \"French Internationals of Roland Garros\").\n[…]\nAccording to Vũ Trọng Phụng's urban novel, Dumb Luck (1936), during colonial times the Hanoi government named the city's main tennis stadium after Roland Garros.\n[…]\nThe French car manufacturer Peugeot commissioned a 'Roland Garros' limited-edition version of its 205 model in celebration of the tennis tournament that bears his name. The model included special paint and leather interior. Because of the success of this special edition, Peugeot later created Roland Garros editions of its 106, 108, 206, 207, 208, 306, 307, 308, 406, and 806 models.\n[…]\nCobleigh, Ed (2019). The First Fighter Pilot: Roland Garros. Paso Robles: Check Six. ISBN 978-1629671567.\n[…]\nFleury, Georges (2009). Roland Garros. Un inconnu si célèbre. Bourin. p. 44. ISBN 978-2849411230.\n[…]\nLefèvre-Garros, Jean-Pierre (2001). Ananké/Lefrancq (ed.). Roland Garros. La tête dans les nuages, la vie aventureuse et passionnée d'un pionnier de l'aviation. Ananké/Lefrancq. pp. 32–33. ISBN 9782874180125.\n[…]\nMedia related to Roland Garros (aviator) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stade_Roland_Garros",
        "situacao": "ok",
        "texto": "O Stade Roland Garros (que ao pé da letra seria traduzido como \"Estádio Roland Garros\"), é na verdade desde sua criação, um complexo de quadras de tênis e outras facilidades, localizado em Paris, na França.\n[…]\nRecebe todo ano o Torneio de Roland-Garros, um dos quatro Grand Slam de tênis. O nome do complexo foi escolhido em homenagem ao pioneiro da aviação Roland Garros, que morreu em um combate aéreo da Primeira Guerra Mundial em 1918.\n[…]\nFoi  Émile Lesieur, jogador da Seleção Francesa de Rugby Union, criador da primeiríssima prova do Torneio das Cinco Nações, e ex-companheiro de Roland Garros no HEC na turma de 1908, que impôs o nome do seu amigo aviador e grande desportista, falecido para a França em combate aéreo em 5 de outubro de 1918, para homenagear sua memória.\n[…]\nA partir de 1941, o \"Internationaux de France\" se tornou o \"Tournoi de France\" e aconteceu no Stade Roland Garros. Apenas os franceses e alguns que falavam francês jogaram esses torneios. Bernard Destremau venceu o \"Torneio da França\" em 1941 e 1942 antes de ir lutar na frente de batalha no Exército Francês de Libertação [fr]. Voltando da guerra, Yvon Petra o sucedeu nos anos seguintes. Entre as mulheres, Raymonde Veber Jones [en] venceu o torneio de 1944.\n[…]\nEm 2001, a Quadra Central de Roland-Garros passou a se chamar quadra \"Philippe-Chatrier\", homenageando o presidente da Federação Francesa de Tênis.\n[…]\nNo início da década de 2010, o Aberto da França demandava mais espaço no complexo Roland-Garros que é bem menor do que os locais de outros torneios de Grand Slam. A Federação Francesa de Tênis considerou várias alternativas de extensão do complexo, bem como a transferência do torneio para outro local em Île-de-France.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Dadaísmo",
      "descricao": "Movimento artístico de vanguarda surgido em 1916 como reação aos horrores da Primeira Guerra Mundial."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O dadaísmo, movimento artístico de protesto contra a guerra, nasceu em 1916 num cabaré de que cidade suíça?",
    "resposta": "Zurique",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dada"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dada",
        "situacao": "ok",
        "texto": "Dada () or Dadaism was an international art movement that developed in the context of World War I, its aftermath, and the Futurist movement. First established in Zürich, Switzerland, it later quickly spread to Berlin, Paris, New York City and a variety of artistic centers in Europe and Asia. The Dada movement focused on rejecting prevailing ideas surrounding art, and more broadly in society. The D\n[…]\nDada coalesced among émigré artists and writers in neutral Switzerland during 1916, with Hugo Ball and Emmy Hennings founding the Cabaret Voltaire as a venue for nightly performances and manifestos. Participants framed their activity as a protest against war, nationalism, and cultural conformity, adopting strategies of nonsense, chance, and ridicule to negate prevailing aesthetic values.\n[…]\nProminent Dadaists published manifestos, but the movement was loosely organized and there was no central hierarchy. On 14 July 1916, Ball originated the seminal Dada Manifesto. Tzara wrote a second Dada manifesto, considered important Dada reading, which was published in 1918. Tzara's manifesto articulated the concept of \"Dadaist disgust\"—the contradiction implicit in avant-garde works between the criticism and affirmation of modernist reality.\n[…]\nSophie Taeuber-Arp was a Swiss artist, teacher, and dancer who produced various types of fine art and handicraft pieces. While married to Dadaist Jean Arp, Taeuber-Arp was known in the Dada community for her performative dancing. As such, she worked with choreographer Rudolf von Laban and was written by Tristan Tzara for her dancing skills.\n[…]\nTête Dada\n[…]\n2016 Dada Art Movement History – \"Dada on Tour\" on YouTube, Bruno Art Group in collaboration with Cabaret Voltaire & Art Stage Singapore 2016, 27 minutes\n[…]\nDada Companion, bibliographies, chronology, artists' profiles, places, techniques, reception\n[…]\nText of Hugo Ball's 1916 Dada Manifesto\n[…]\nDada Digital Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dada%C3%ADsmo",
        "situacao": "ok",
        "texto": "O dada ou dadaísmo foi um movimento artístico da vanguarda europeia no início do século XX, com centros iniciais em Zurique, Suíça, no Cabaret Voltaire (c. 1916). O dadaísmo novaiorquino começou por volta de 1915, e depois de 1920, o dadaísmo se desenvolveu em Paris. As atividades dadaístas duraram até meados da década de 1920.\n[…]\nO dadaísmo foi um movimento internacional informal, com participantes na Europa e na América do Norte. Os primórdios do dadaísmo correspondem à eclosão da Primeira Guerra Mundial. Para muitos participantes, o movimento foi um protesto contra os interesses burgueses nacionalistas e colonialistas, que muitos dadaístas acreditavam ser a causa raiz da guerra, e contra a conformidade cultural e intelectual — na arte e mais amplamente na sociedade — que correspondia à guerra.\n[…]\nMuitos dadaístas acreditavam que a \"razão\" e a \"lógica\" da sociedade capitalista burguesa levaram as pessoas à guerra. Eles expressaram sua rejeição dessa ideologia na expressão artística que parecia rejeitar a lógica e abraçar o caos e a irracionalidade. Por exemplo, Georg Grosz lembrou mais tarde que sua arte dadaísta pretendia ser um protesto \"contra este mundo de destruição mútua\".\n[…]\nPara citar The Language of Art Knowledge, de Dona Budd, O dadaísmo nasceu da reação negativa aos horrores da Primeira Guerra Mundial. Este movimento internacional foi iniciado por um grupo de artistas e poetas associados ao Cabaret Voltaire em Zurique. Dada rejeitou a razão e a lógica, valorizando o absurdo, a irracionalidade e a intuição. A origem do nome dadaísmo não é clara; alguns acreditam que é uma palavra sem sentido.\n[…]\n«Dada Companion». , bibliographies, chronology, artists' profiles, places, techniques, reception\n[…]\nText of Hugo Ball's 1916 Dada Manifesto\n[…]\n«Seven Dada Manifestos by Tristan Tzara» (PDF)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Liga das Nações",
      "descricao": "Organização internacional criada após a Primeira Guerra Mundial para preservar a paz, antecessora da ONU."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidade ficava a sede da Liga das Nações, a organização criada depois da guerra para preservar a paz?",
    "resposta": "Genebra",
    "fonte": [
      "https://en.wikipedia.org/wiki/League_of_Nations"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/League_of_Nations",
        "situacao": "ok",
        "texto": "The League of Nations (LN or LoN; French: Société des Nations [sɔsjete de nɑsjɔ̃], SdN) was the first worldwide intergovernmental organisation whose principal mission was to maintain world peace. It was founded on 10 January 1920 by the Paris Peace Conference that ended the First World War. The main organisation ceased operations on 18 April 1946 when many of its components were relocated into the\n[…]\nWhen the war ended in an Italian conquest, the League refused to recognise Italian sovereignty over Ethiopia, prompting the fascist government to withdraw from the organisation altogether in 1937. Though neutral during World War I, Spain (then still a kingdom) also began as a permanent member of the council, but withdrew in 1939 after the Spanish Civil War ended in a victory for the Nationalists.\n[…]\nThe British Conservatives were especially tepid to the League and preferred, when in government, to negotiate treaties without the involvement of that organisation. Moreover, the League's advocacy of disarmament for Britain, France, and its other members, while at the same time advocating collective security, meant that the League was depriving itself of the only forceful means by which it could uphold its authority.\n[…]\nAt the 1943 Tehran Conference, the Allied powers agreed to create a new body to replace the League: the United Nations. Many League bodies, such as the International Labour Organization, continued to function and eventually became affiliated with the UN. The designers of the structures of the United Nations intended to make it more effective than the League.\n[…]\nIn 2017, the UN Library & Archives Geneva launched the Total Digital Access to the League of Nations Archives Project (LONTAD), with the intention of preserving, digitising, and providing online access to the League of Nations archives. It was completed in 2022."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sociedade_das_Na%C3%A7%C3%B5es",
        "situacao": "ok",
        "texto": "Sociedade das Nações (em francês: Société des Nations [sɔsjete de nɑsjɔ̃], SdN), também conhecida como Liga das Nações (em inglês: League of Nations, LN ou LoN), foi a primeira organização intergovernamental de alcance mundial cuja principal missão era manter a paz mundial. Foi fundada em 10 de janeiro de 1920 pela Conferência de Paz de Paris, que encerrou a Primeira Guerra Mundial.\n[…]\nA última sessão da Sociedade das Nações terminou em 18 de abril de 1946, em Genebra. Delegados de 34 nações participaram da Assembleia. A sessão concentrou-se na liquidação da organização: transferiu às Nações Unidas, em 1946, ativos avaliados em aproximadamente 22 milhões de dólares estadunidenses — incluindo o Palácio das Nações e os arquivos da Sociedade —, devolveu fundos de reserva aos países que os haviam fornecido e quitou as dívidas da organização.\n[…]\nUma Junta de Liquidação composta por nove pessoas de diferentes países passou os quinze meses seguintes supervisionando a transferência dos bens e das funções da Sociedade para as Nações Unidas ou para organismos especializados, dissolvendo-se finalmente em 31 de julho de 1947. O arquivo da Sociedade das Nações foi transferido ao Escritório das Nações Unidas em Genebra e hoje integra o Registro Memória do Mundo da UNESCO.\n[…]\nOs arquivos da Sociedade das Nações constituem uma coleção de registros e documentos da organização. São aproximadamente quinze milhões de páginas de conteúdo, desde a criação da Sociedade, em 1919, até sua dissolução em 1946. A coleção está localizada no Escritório das Nações Unidas em Genebra.\n[…]\nEm 2017, a Biblioteca e Arquivos da ONU em Genebra lançou o Projeto de Acesso Digital Total aos Arquivos da Sociedade das Nações — LONTAD, na sigla em inglês —, com o objetivo de preservar, digitalizar e disponibilizar on-line os arquivos da organização. O projeto foi concluído em 2022.\n[…]\nLiga contra o Imperialismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Batalha das Malvinas (1914)",
      "descricao": "Batalha naval de dezembro de 1914 em que a esquadra britânica destruiu a esquadra alemã do almirante von Spee no Atlântico Sul."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em dezembro de 1914, a esquadra alemã do almirante von Spee foi destruída pelos britânicos perto de que arquipélago sul-americano?",
    "resposta": "Ilhas Malvinas",
    "distratores": [
      "Ilhas Galápagos",
      "Fernando de Noronha",
      "Terra do Fogo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_the_Falkland_Islands"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_the_Falkland_Islands",
        "situacao": "ok",
        "texto": "The Battle of the Falkland Islands was a First World War naval action between the British Royal Navy and Imperial German Navy on 8 December 1914 in the South Atlantic. The British, after their defeat at the Battle of Coronel on 1 November, sent a large force to track down and destroy the German cruiser squadron. The battle is commemorated every year on 8 December in the Falkland Islands as a publi\n[…]\nSturdee announced his intention to depart for the Falkland Islands on 29 November. From there, the fast light cruisers Glasgow and Bristol would patrol seeking Spee, summoning reinforcements if they found him. Captain John Luce of Glasgow, who had been at the Battle of Coronel, objected that there was no need to wait so long and persuaded Sturdee to depart a day early.\n[…]\nAfter the battle, German naval experts were baffled at why Admiral von Spee attacked the base and how the two squadrons could have met so coincidentally in so many thousand miles of open waters. Kaiser Wilhelm's handwritten note on the official report of the battle reads: \"It remains a mystery what made Spee attack the Falkland Islands. See 'Mahan's Naval Strategy'.\"\n[…]\nIt was generally believed Spee was misled by the German admiralty into attacking the Falklands, a Royal Naval fuelling base, after receiving intelligence from the German wireless station at Valparaíso which reported the port free of Royal Navy warships. Despite the objection of three of his ships' captains, Spee proceeded to attack.\n[…]\nMcNally, Michael (2012). Coronel and Falklands 1914; Duel in the South Atlantic. Osprey Campaign Series #248. Osprey Publishing. ISBN 9781849086745\n[…]\n\"Falkland Islands, Battle of\" . Collier's New Encyclopedia. 1921.\n[…]\nDiscovery of WW1 German Battlecruiser SMS Scharnhorst in Falklands waters\n[…]\nInto Battle on Board the Invincible - Describing HMS Invincible at the 1914 Battle of the Falklands, written by the battlecruiser's navigator"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_das_Malvinas",
        "situacao": "ok",
        "texto": "Batalha das Malvinas ou Batalha das Ilhas Malvinas foi uma vitória da Marinha Real Britânica sobre a Marinha Imperial Alemã em 8 de dezembro de 1914, durante a Primeira Guerra Mundial, no Atlântico Sul. Os britânicos, depois de uma derrota na Batalha de Coronel para os alemães em 1 de novembro, enviaram uma grande força para rastrear e destruir o vitorioso esquadrão alemão.\n[…]\nO Almirante Maximilian von Spee – comandante da esquadra alemã formada por dois cruzadores blindados (SMS Scharnhorst e Gneisenau), três cruzadores rápidos (SMS Nürnberg, Dresden e Leipzig) e três navios auxiliares – tentou invadir a base de fornecimento britânica em Stanley, nas Ilhas Falkland.\n[…]\nPara a Batalha da Malvinas, o plano de ataque de Spee exigia que o SMS Gneisenau e o SMS Nürnberg seguissem para Port Stanley no meio da manhã para dar cobertura aos destacamentos que desembarcariam, a fim de destruir a estação de rádio sem fio e outras instalações navais, enquanto outros três cruzadores alemães forneceriam apoio de artilharia adicional a certa distância.\n[…]\nCom esta retirada o comandante da armada inglesa, Almirante Sturdee, empreendeu uma caçada aos alemães com toda a sua esquadra, exceto o Canopus que continuou protegendo Port Stanley. Navegando na direção sudeste a partir das Malvinas, os navios alemães foram gradativamente perdendo a dianteira para os cruzadores britânicos mais rápidos.\n[…]\nDiante de um confronto inevitável, Spee alterou o curso para nordeste com o Gneisenau e o Scharnhorst, numa tentativa de atrair os dois principais cruzadores britânicos, HMS Invincible e HMS Inflexible, levando-os para longe do restante da esquadra. Sturdee perseguiu os dois cruzadores alemães com seus dois navios disparando continuamente com suas baterias de 305 milímetros (o Inflexible disparou 661 vezes e o Invincible, 513).\n[…]\nBattle of the Falkland Islands (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Revolta dos marinheiros de Kiel",
      "descricao": "Motim de marinheiros da frota alemã em novembro de 1918 que desencadeou a Revolução Alemã e a queda do kaiser."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em novembro de 1918, um motim de marinheiros em que porto alemão do Mar Báltico deu início à revolução que derrubou o kaiser?",
    "resposta": "Kiel",
    "distratores": [
      "Rostock",
      "Lübeck",
      "Danzig"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kiel_mutiny"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kiel_mutiny",
        "situacao": "ok",
        "texto": "The Kiel mutiny (German: Kieler Matrosenaufstand) was a revolt by sailors of the German High Seas Fleet against the maritime military command in Kiel. The mutiny broke out on 3 November 1918 after sailors at Wilhelmshaven refused orders on 30 October to sail out for what was to be the final battle against the British Grand Fleet. The mutineers saw the planned battle, which had been ordered by the \n[…]\nDetachments of revolutionary sailors moved out from Kiel to all major German cities beginning on 4 November. They encountered almost no resistance in their takeover of civil and military power; only in Lübeck and Hanover did two local commanders attempt to maintain military discipline by force of arms. On 6 November, Wilhelmshaven was in the hands of a workers' and soldiers' council; by 7 November all the larger coastal cities plus Frankfurt am Main, Stuttgart and Munich were as well.\n[…]\nGerman Revolution of 1918–1919\n[…]\nDirk Dähnhardt: Revolution in Kiel. Der Ubergang vom Kaiserreich zur Weimarer Republik. Karl Wachholtz Verlag, Neumünster, 1978, ISBN 3-529-02636-0\n[…]\nWolfram Wette: Gustav Noske und die Revolution in Kiel 1918. Boyens Buchverlag, Heide 2010, ISBN 978-3-8042-1322-7; published as special edition from the Gesellschaft für Kieler Stadtgeschichte, by Jürgen Jensen, Band 64\n[…]\nDocumentary film \"In Kiel ist Revolution!\" 53 minutes, 2018 (German version as DVD, English version as high definition mp4 format). By Kay Gerdes and Klaus Kuhl, published by the Gesellschaft für Kieler Stadtgeschichte e.V. as \"Historische Filmdokumente Nr. 9\". Sponsored by City of Kiel and Filmförderung Hamburg Schleswig-Holstein. The film highlights in detail the events in November 1918 in Kiel and presents them in a larger historical frame.\n[…]\nKiel Uprising: Women's activism and the German Revolution November 1918 highlights women's role in the German Revolution of 1918, with a particular focus on Kiel."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Motim_de_Kiel",
        "situacao": "ok",
        "texto": "O motim de Kiel (em alemão:  Kieler Matrosenaufstand) foi uma revolta de marinheiros da Frota de Alto-Mar alemã contra o comando militar marítimo em Kiel. O motim eclodiu em 3 de novembro de 1918 quando algumas tripulações se recusaram a navegar de Wilhelmshaven para a batalha final contra a Grande Frota britânica que o Almirantado havia ordenado sem o conhecimento ou aprovação do governo alemão.\n[…]\nO III Esquadrão foi ordenado de volta para Kiel.\n[…]\nWilhelm Souchon, o governador da estação naval, inicialmente pediu tropas externas para ajudar a suprimir a revolta, mas revogou seu pedido quando sua equipe alegou que a situação estava sob controle. Souchon havia sido enviado para Kiel apenas alguns dias antes, em 30 de outubro de 1918, e portanto teve que confiar muito em sua equipe. Em 4 de novembro, no entanto, o pedido foi renovado, e seis companhias de infantaria foram trazidas para Kiel.\n[…]\nDurante as semanas seguintes, Noske foi capaz de reduzir a influência dos conselhos, mas não pôde impedir que os marinheiros espalhassem a revolução pela Alemanha. Na manhã de 5 de novembro, a bandeira vermelha da revolução foi içada nos navios da Marinha Imperial no porto de Kiel.\n[…]\nDestacamentos de marinheiros revolucionários partiram de Kiel para todas as principais cidades alemãs começando em 4 de novembro. Eles encontraram quase nenhuma resistência em sua tomada do poder civil e militar; apenas em Lübeck e Hanover dois comandantes locais tentaram manter a disciplina militar pela força das armas.\n[…]\nRevolta da Chibata\n[…]\nWolfram Wette: Gustav Noske und die Revolution in Kiel 1918. Boyens Buchverlag, Heide 2010, ISBN 978-3-8042-1322-7; published as special edition from the Gesellschaft für Kieler Stadtgeschichte, by Jürgen Jensen, Band 64\n[…]\nMotim de Kiel: Ativismo feminino e a Revolução Alemã de novembro de 1918 destaca o papel das mulheres na Revolução Alemã de 1918, com foco particular em Kiel.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Atentado de Sarajevo",
      "descricao": "Assassinato do arquiduque Francisco Ferdinando e de sua esposa em 28 de junho de 1914, estopim da Primeira Guerra Mundial."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Os jovens que mataram o arquiduque em Sarajevo, em 1914, receberam armas e treino de que sociedade secreta nacionalista sérvia?",
    "resposta": "Mão Negra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Hand_(Serbia)",
      "https://en.wikipedia.org/wiki/Assassination_of_Archduke_Franz_Ferdinand"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Hand_(Serbia)",
        "situacao": "ok",
        "texto": "Unification or Death (Serbian: Уједињење или смрт, romanized: Ujedinjenje ili smrt), popularly known as the Black Hand (Црна рука, Crna ruka), was a secret military society formed in May 1911 by officers in the Army of the Kingdom of Serbia.\n[…]\nIt was famous for its involvement in the assassination of Archduke Franz Ferdinand in Sarajevo in 1914, triggering World War I, and for the earlier assassination of the Serbian royal couple in 1903, under the aegis of Captain Dragutin Dimitrijević (a.k.a. \"Apis\").\n[…]\nThrough its connections to the June 1914 assassination of Archduke Franz Ferdinand in Sarajevo, carried out by the members of the youth movement Young Bosnia, the Black Hand was instrumental in starting  World War I (1914–1918) by precipitating the July Crisis of 1914, which eventually led to Austria-Hungary's invasion of the Kingdom of Serbia in August 1914.\n[…]\nIn 1914, Apis allegedly decided that Archduke Franz Ferdinand, the heir-apparent of Austria, should be assassinated, as he was trying to pacify the Serbians, which would prevent a revolution if he was successful. Towards that end, three young Bosnian Serbs were allegedly recruited to kill the Archduke. They were certainly trained in bomb throwing and marksmanship by current and former members of the Serbian military.\n[…]\nMacKenzie, David (1982). \"Serbian Nationalist and Military Organizations and the Piedmont Idea, 1844–1914\". East European Quarterly. 16 (3): 323–.\n[…]\nRemak, Joachim (1971). The Origins of World War I: 1871–1914. Holt, Rinehart and Winston. ISBN 978-0136427445.\n[…]\nGilfond, Henry (1975). The Black Hand at Sarajevo. Bobbs-Merrill. ISBN 0672520702. OCLC 1692249.\n[…]\nJohn Paul Newman: Black Hand, in: 1914–1918 online. International Encyclopedia of the First World War."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Assassination_of_Archduke_Franz_Ferdinand",
        "situacao": "ok",
        "texto": "Archduke Franz Ferdinand of Austria, heir presumptive to the Austro-Hungarian throne, and his wife, Sophie, Duchess of Hohenberg, were assassinated by Bosnian Serb student Gavrilo Princip in Sarajevo on 28 June 1914. They were shot at close range while being driven through the provincial capital of Bosnia and Herzegovina, formally annexed by Austria-Hungary in 1908. The incident was one of the key\n[…]\nApis's confession, however, states that \"I engaged Malobabić to organize the assassination on the occasion of the announced arrival of Franz Ferdinand to Sarajevo.\" At the Salonika trial, Colonel Ljubomir Vulović (head of the Serbian Frontiers Service) testified: 'In 1914 on occasion of my official trip from Loznica to Belgrade, I received a letter at the General Staff [signed by Marshal Radomir Putnik, Serbia's top military officer] noting that agents of Malobabić would come and a teacher whose name I don't recall (Danilo Ilić was a teacher but it is unclear if the teacher in question was Ilić as Ilić can be placed in Brod but not Loznica) so I could sent  [sic] them into Bosnia.' Because of that 'I went to Loznica and either that day or very soon afterwards sent Rade and that teacher into Bosnia.' Soon thereafter occurred the Sarajevo assassination of Archduke Franz Ferdinand.\" On the eve of his execution, Malobabić told a priest: \"They ordered me to go to Sarajevo when that assassination was to take place, and when everything was over, they ordered me to come back and fulfill other missions, and then there was the outbreak of the war.\" Vladimir Dedijer in The Road to Sarajevo presented additional testimonial evidence that Malobabić arrived in Sarajevo on the eve of the Sarajevo attack and gave the final go-ahead for the operation to Danilo Ilić.\n[…]\nSarajevo (2014) directed by Andreas Prochaska\n[…]\nNewsreels about Franz Ferdinand's assassination at www.europeanfilmgateway.eu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%A3o_Negra",
        "situacao": "ok",
        "texto": "Unificação ou Morte (em sérvio:  Уједињење или смрт, Ujedinjenje ili smrt), também chamado de Mão Negra (Црна рука, Crna ruka), foi uma organização nacionalista sérvia que recorreu ao terrorismo como uma forma de atividade política,  e tinha conexões com alguns elementos pan-eslavistas do Governo da Sérvia.\n[…]\nA sociedade secreta fundada no Reino da Sérvia em 10 de junho de 1910, por ex-membros de uma sociedade semissecreta chamada Narodna Odbrana (Defesa do Povo), dedicado à realização do pan-eslavismo e do nacionalismo, por meio de assassinatos, com a intenção de unir todos os territórios com populações eslavas do Sul anexadas pela Áustria-Hungria.\n[…]\nA Mão Negra foi o grupo responsável por planejar e organizar o assassinato do herdeiro do trono do Império Austro-Húngaro, o arquiduque Francisco Ferdinando da Áustria e sua esposa Sofia Chotek, em Sarajevo (ver: Atentado de Sarajevo), o atentado e suas consequências foram um dos gatilhos da Primeira Guerra Mundial. No entanto, os autores do ataque eram membros da organização Jovem Bósnia.\n[…]\nA organização exigia obediência total aos seus membros e ordenava a execução daqueles que considerava seus inimigos. Um de seus principais membros foi Dragutin Dimitrijević \"Apis\", um dos principais conspiradores do Golpe de Maio de 1903. Foi herdeira deste conluio que acabou com a dinastia Obrenović ao assassinar o rei Alexandre I da Sérvia e a rainha Draga Mašin; e perpetuou o poder dos conspiradores na vida política do país, com consequências desastrosas.\n[…]\nA organização foi extinta em 1917 pelo Governo da Sérvia após o julgamento de Salônica.\n[…]\nGrande Sérvia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Cerco de Tsingtao",
      "descricao": "Ataque de 1914 em que forças japonesas e britânicas tomaram a colônia alemã de Tsingtao, na China."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1914, que país asiático, aliado dos britânicos, conquistou a colônia alemã de Tsingtao, na China?",
    "resposta": "Japão",
    "distratores": [
      "China",
      "Sião",
      "Pérsia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Siege_of_Tsingtao"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Siege_of_Tsingtao",
        "situacao": "ok",
        "texto": "The Siege of Tsingtao (German: Belagerung von Tsingtau; Japanese: 青島の戦い; simplified Chinese: 青岛战役; traditional Chinese: 青島戰役) was the attack on the German port of Qingdao (Tsingtao) from Jiaozhou Bay during World War I by Japan and the United Kingdom. The siege was waged against Imperial Germany between 27 August and 7 November 1914.\n[…]\nGermany then began to assert its influence across the rest of the province and built the city and port of Qingdao, which became the base of the German East Asia Squadron of the Kaiserliche Marine (Imperial Navy), which operated in support of the German colonies in the Pacific. Britain viewed the German presence in China with suspicion and leased Weihaiwei, also in Shandong, as a naval port and coaling station.\n[…]\nAs the Japanese approached their positions, Meyer-Waldeck withdrew his forces from the two outer defensive lines and concentrated his troops on the innermost line of defence along the hills closest to the town. The Austro-Hungarian cruiser SMS Kaiserin Elisabeth was stationed in Qingdao at the start of the war. On 2 September 1914 the German gunboat Jaguar sank the stranded Japanese destroyer Shirotae.\n[…]\nPlüschow claimed the downing of a Japanese Farman MF.VII with his pistol, the first aerial victory in aviation history. Plüschow flew from Qingdao on 6 November 1914 carrying the governor's last dispatches, which were forwarded to Berlin through neutral diplomatic channels.\n[…]\nLwów pogrom (1914)\n[…]\nJapanese landing at Tsingtao, 10 January 1938\n[…]\nVeperdi, András. \"The protected cruiser SMS Kaiserin Elisabeth in defence of Tsingtao in 1914\". mateinfo.hu. Budapest, Hungary: Hungarian seamen's association. Retrieved 24 July 2013.\n[…]\nDixon, John (2008). A Clash of Empires – The South Wales Borderers at Tsingtao, 1914. Wrexham: Bridge books. ISBN 978-1-84494-052-3.\n[…]\nGerman Colonial Uniforms"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cerco_de_Tsingtao",
        "situacao": "ok",
        "texto": "O Cerco de Tsingtao, também chamado de Batalha de Tsingtau, foi o ataque realizado ao porto alemão de Tsingtao (Qingdao) na China no decorrer da Primeira Guerra Mundial pelo  Japão e o Reino Unido.\n[…]\nO cerco de Tsingtao ocorreu entre o dia 31 de Outubro e 7 de Novembro de 1914, foi disputado entro Império do Japão e o Reino Unido de um lado, e o Império Alemão de outro. O certo foi o primeiro encontro entre as forças Japonesas e Alemãs, e também a primeira operação Anglo-Japonesa realizada durante a guerra. Antes disso, já em 27 de agosto foi iniciado um bloqueio ao porto e em 17 de outubro tiveram início as manobras navais.\n[…]\nA presença alemã crescente constituiu uma ameaça ao Reino Unido na região, que possuía sua própria posse em Weihaiwei, também em Shantung, como um porto naval e central de abastecimento de carvão, enquanto a aliada Rússia possuía seu próprio arrendamento em Port Arthur (atualmente Lüshunkou), similar ao enclave da França em Kwang-Chou-Wan. Os britânicos haviam começado também a estreitar os laços com o Japão.\n[…]\nCom o estopim da guerra na europa em agosto de 1914, os britânicos prontamente acionaram a aliança com os japoneses. No dia 15 de Agosto os japoneses emitiram um ultimato exigindo que a Alemanha retirasse seus navios de guerra das águas chinesas e japonesas e transferisse o controle de seu porto em Tsingtao para o Japão. No dia seguinte, o Major-General Mitsuomi Kamio recebeu a ordem para preparar o assalto à Tsingtao. O ultimato expirou no dia 23 de agosto e o Japão declarou guerra à Alemanha.\n[…]\nGerman Colonial Uniforms\n[…]\nThe protected cruiser SMS Kaiserin Elisabeth in defence of Tsingtao, in the Year of 1914",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Liga de Defesa Nacional",
      "descricao": "Entidade civil brasileira fundada em 1916 para promover o civismo e o serviço militar obrigatório."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1916, em plena guerra, que poeta brasileiro ajudou a fundar a Liga de Defesa Nacional e fez campanha pelo serviço militar obrigatório?",
    "resposta": "Olavo Bilac",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Liga_de_Defesa_Nacional",
      "https://pt.wikipedia.org/wiki/Olavo_Bilac"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Liga_de_Defesa_Nacional",
        "situacao": "ok",
        "texto": "A Liga da Defesa Nacional (LDN) é uma associação cívico-cultural brasileira.\n[…]\nFoi fundada no Rio de Janeiro em 7 de setembro de 1916 por um grupo de intelectuais liderados por Pedro Lessa, Miguel Calmon, Olavo Bilac e Venceslau Brás, na época presidente do Brasil. A sua atuação está ligada à campanha vitoriosa pela implantação do serviço militar obrigatório no Brasil.\n[…]\nUma de suas conquistas foi a obrigatoriedade da apresentação da carteira de reservista aos candidatos a cargos públicos.\n[…]\nOlavo Bilac, o seu mais importante líder, sintetizava a sua ação como um \"apostolado de civismo e patriotismo\". Em suas viagens, ressaltava a importância do envolvimento dos intelectuais na causa nacionalista, como responsáveis pela defesa da pátria e pela modernização das estruturas sociais.\n[…]\nEncontra-se em funcionamento até aos nossos dias, sendo as sua atividades públicas mais destacadas a entrega da Ordem do Mérito Cívico da Liga da Defesa Nacional entregue aos brasileiros que mais se destacaram aos serviços cívicos e patrióticos ao país, as festividades por todo país abertura e encerramento da Semana da Pátria, a guarda do Fogo Simbólico da Pátria ( a chama ) que se encontra nos monumentos nacionais oficiais, e é acendida obrigatoriamente em uma Pira antes de todos os Desfiles Cívicos Oficiais de 7 de Setembro em todo território brasileiro, a promoção da Corrida do Fogo Simbólico da Pátria, que se realiza desde 1938.\n[…]\nHistória da Liga na página do CPDOC da Fundação Getúlio Vargas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Olavo_Bilac",
        "situacao": "ok",
        "texto": "Olavo Brás Martins dos Guimarães Bilac (Rio de Janeiro, 16 de dezembro de 1865 – Rio de Janeiro, 28 de dezembro de 1918), mais conhecido como Olavo Bilac, foi um poeta, jornalista, cronista e contista brasileiro. Alcunhado \"príncipe dos poetas brasileiros\", é considerado o principal autor do parnasianismo no país. Junto com Alberto de Oliveira e Raimundo Correia, integrou a chamada \"tríade parnasi\n[…]\nEm 1888, Olavo Bilac estreou como poeta e lançou a sua obra intitulada Poesias, que obteve ampla aceitação do público.\n[…]\nJá consagrado em 1907, o autor do Hino da Bandeira é convidado para liderar o movimento em prol do serviço militar obrigatório − já matéria de lei desde 1907, mas apenas implementado em 1915 por ocasião da I Guerra Mundial. Bilac se desdobra para convencer os jovens a se alistar.\n[…]\nJá no fim de sua vida, em 1917, Bilac recebe o título de professor honorário da Universidade de São Paulo.\n[…]\nDentre os escritos de Olavo Bilac, destacam-se os seguintes:\n[…]\n\"No poema Língua Portuguesa, o autor parnasiano Olavo Bilac faz uma abordagem sobre o histórico da língua portuguesa, tema já tratado por Camões. Este poema inspirou outras abordagens, como o poema 'Língua', de Gilberto Mendonça Teles e 'Língua', de Caetano Veloso.\n[…]\nAinda expressando o seu amor pelo idioma, agora por meio de um vocativo, 'Amo-te, ó rude e doloroso idioma', Olavo Bilac alude ao fato de que o idioma ainda precisava ser moldado e, impor essa língua a outros povos não era uma tarefa fácil, pois implicou destruir a cultura de outros povos.\n[…]\nOlavo Bilac traduziu as famosas travessuras de Max und Moritz, por Wilhelm Busch, do alemão para o português, aportuguesando os nomes das personagens para Juca e Chico.\n[…]\nJardim Olavo Bilac\n[…]\nPerfil de Olavo Bilac no sítio oficial da Biblioteca Nacional\n[…]\n«Poemas de Olavo Bilac»\n[…]\n«Artigo sobre os usos políticos da memória de Olavo Bilac no século XX»"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Fokker Dr.I",
      "descricao": "Caça triplano alemão de 1917, famoso por ter sido pilotado por Manfred von Richthofen, o Barão Vermelho."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O caça alemão Fokker Dr.I, em que o Barão Vermelho foi abatido em 1918, tinha quantas asas sobrepostas?",
    "resposta": "Três",
    "distratores": [
      "Duas",
      "Quatro",
      "Uma"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fokker_Dr.I"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fokker_Dr.I",
        "situacao": "ok",
        "texto": "The Fokker Dr.I (Dreidecker, \"triplane\" in German), often known simply as the Fokker Triplane, was a World War I fighter aircraft built by Fokker-Flugzeugwerke. The Dr.I saw widespread service in the spring of 1918. It became famous as the aircraft in which Manfred von Richthofen gained his last 17 victories (plus two earlier ones in the Fokker F.I prototype in September 1917), and in which he was\n[…]\nPlatz responded with the V.4, a small, rotary-powered triplane with a steel-tube fuselage and thick cantilever wings, first developed during Fokker's government-mandated collaboration with Hugo Junkers. Initial tests revealed that the V.4 had unacceptably high control forces resulting from the use of unbalanced ailerons and elevators.\n[…]\nBy January 1918, Jastas 6 and 11 were fully equipped with the triplane. Only 14 squadrons used the Dr.I as their primary equipment. Most of these units were part of Jagdgeschwadern I, II, or III. Frontline inventory peaked in late April 1918, with 171 aircraft in service on the Western Front.\n[…]\nThe triplane's chronic structural problems destroyed any prospect of large-scale orders. Production eventually ended in May 1918, by which time only 320 had been manufactured. The Dr.I was withdrawn from frontline service, as the Fokker D.VII entered widespread service in June and July. Jasta 19 was the last squadron to be fully equipped with the Dr.I.\n[…]\nSands Fokker Dr.1 Triplane, homebuilt replica\n[…]\nSopwith Triplane\n[…]\nImrie, Alex. The Fokker Triplane. Arms and Armour Press, 1992. ISBN 1-85409-118-2.\n[…]\nLeaman, Paul. Fokker Dr.I Triplane: A World War One Legend. Hersham, Surrey, UK: Classic Publications, 2003. ISBN 1-903223-28-8.\n[…]\nRimell, Raymond Laurence (1996). Fokker Triplane. Windsock Datafiles 5. Herts, UK: Albatros Productions. ISBN 978-0948414039.\n[…]\nFokker Dr.I Triplane: Germany\n[…]\nFokker Dr. I – National Museum of the United States Air Force"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fokker_Dr.I",
        "situacao": "ok",
        "texto": "O Fokker Dr.I (Dreidecker, \"triplano\" em alemão) foi um avião militar, utilizado durante a Primeira Guerra Mundial. Foi projetado por Reinhold Platz e construído pela Fokker-Flugzeugwerke. O modelo ganhou notoriedade quando foi pilotado pelo \"Barão Vermelho\" Manfred von Richthofen, que o usou nas suas últimas 19 vitórias até sua morte.\n[…]\nOs trabalhos de Fokker responderam às necessidades com o V.3, um triplano equipado com um pequeno motor-rotativo, fuselagem em aço e asas muito grossas. Testes iniciais revelaram deficiências no V.3, particularmente no controle das forças.\n[…]\nO V.4 provou ser superior aos protótipos do triplano construídos por outros fabricantes. Depois de um teste, Idflieg emitiu uma ordem para a produção imediata dos aviões.\n[…]\nForam pré-produzidos dois triplanos, designados por F.I. Estes aviões, da série 102/17 e 103/17, foram os únicos a receber o nome de F.I. Chegaram a Markebeeke, Bélgica no dia 28 de Agosto de 1917. Richthofen, voou no 102/17, pela primeira vez a 1 de Setembro de 1917 e abateu dois aviões inimigos nos dois dias seguintes. Disse a Kogenluft (Kommandierenden der General Luftstreitkräfte) que o F.I era muito satisfatório.\n[…]\nNa primeira vez que o triplano esteve em combate durou pouco tempo. Kurt Wolff, Staffelführer da Jasta 11, foi atingido no 102/17 a 15 de Setembro e Werner Voss, Staffelführer da Jasta 10, foi morto no 103/17 a 23 de Setembro.\n[…]\nVizefeldwebel Franz Hemer da Jasta 6 disse, \"O triplano foi o meu avião de combate preferido porque tinha todas as qualidades de voo que um avião pode ter.\"\n[…]\nEm 1932, Fokker criou um Dr.I com componentes existentes. Foi posto à mostra no Deutsche Luftfahrt-Sammlung em Berlim. Em 1943, também foi destruído em um bombardeio Aliado. Hoje, somente algumas partes originais de Dr.I existem.==Notas==\n[…]\n«Página sobre o Fokker Dr. I» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Henry Gunther",
      "descricao": "Soldado americano morto na França em 11 de novembro de 1918, considerado o último soldado morto em combate na Primeira Guerra Mundial."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Considerado o último soldado morto em combate na guerra, o americano Henry Gunther foi atingido a quantos minutos do armistício?",
    "resposta": "Um minuto",
    "distratores": [
      "Cinco minutos",
      "Dez minutos",
      "Trinta minutos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Henry_Gunther"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Henry_Gunther",
        "situacao": "ok",
        "texto": "Henry Nicholas John Gunther (June 6, 1895 – November 11, 1918) was an American soldier and possibly the last soldier of any of the belligerents to be killed during World War I. He was killed at 10:59 a.m., about one minute before the Armistice was to take effect at 11:00 a.m.\n[…]\nHenry Gunther was born into a German-American family in east Baltimore, Maryland, on June 6, 1895. His parents, George Gunther (1869–1919) and Lina Roth (1866–1938), were both children of German immigrants. He grew up in Highlandtown, an East Baltimore neighborhood heavily influenced by German immigrants, where his family belonged to Sacred Heart of Jesus Roman Catholic parish. Gunther worked as a bookkeeper and clerk at the National Bank of Baltimore.\n[…]\nGunther's unit, Company \"A\", arrived at the Western Front on September 12, 1918. Like all Allied units on the front of the Meuse-Argonne Offensive, it was still embroiled in fighting on the morning of November 11. The armistice with Germany was signed by 5:00 a.m., local time, but it would not come into force until 11:00 a.m.\n[…]\nAmerican Expeditionary Forces commanding General John J. Pershing's \"Order of The Day\" on the following day specifically mentioned Gunther as the last American killed in the war. The Army posthumously restored his rank of sergeant, also awarding him a divisional citation for gallantry in action and the Distinguished Service Cross.\n[…]\nOn Veterans Day (called Armistice Day in France), November 11, 2008, a memorial was constructed near the place in Chaumont-devant-Damvillers in Lorraine where Gunther died. Two years later on the same remembrance holiday observance, November 11, 2010, a memorial plaque was also unveiled at his grave site in America at 10:59 a.m. by the German Society of Maryland."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Tratado de Trianon",
      "descricao": "Tratado de paz assinado em 1920 entre os Aliados e a Hungria após a Primeira Guerra Mundial."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Pelo Tratado de Trianon, assinado em 1920, a Hungria perdeu cerca de que fração do seu território?",
    "resposta": "Dois terços",
    "distratores": [
      "Um quarto",
      "Um terço",
      "Metade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Treaty_of_Trianon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Treaty_of_Trianon",
        "situacao": "ok",
        "texto": "The Treaty of Trianon (French: Traité de Trianon; Hungarian: Trianoni békediktátum; Italian: Trattato del Trianon; Romanian: Tratatul de la Trianon), often referred to in Hungary as the Peace Dictate of Trianon or Dictate of Trianon, was prepared at the Paris Peace Conference. It was signed in the Grand Trianon at Versailles on 4 June 1920, and formally terminated World War I between most of the A\n[…]\nAs the Hungarian revolutionary leader Vilmos Böhm recalled about the Hungarian-Czech coal talks, \"every wagon of coal should be paid for with territorial concessions\". Despite the withdrawal of Hungarian troops from the Upper Hungarian territories claimed by Prague (Slovakia in December 1918 – January 1919 and Subcarpathian Ruthenia in April–July 1919), Czechoslovakia maintained a blockade on coal exports to Hungary until the signing of the Trianon Peace Treaty in June 1920.\n[…]\nThe great powers understood that Hungary's desperate need for coal and trade with neighbouring countries, particularly Czechoslovakia, would force Budapest to accept the heavy territorial losses in favour of Prague. After the ratification of the Trianon Treaty by the Hungarian Parliament in November 1920, Hungary started receiving increasing quantities of coal via Czechoslovakia. During the 1920s, Czechoslovakia became the most important trading partner of Hungary.\n[…]\nThe final borders of Hungary were defined by the Treaty of Trianon signed on 4 June 1920. Besides exclusion of the previously mentioned territories, they also did not include:\n[…]\nRomsics, Ignác (2013). \"Hungarian Revisionism in Thought and Action, 1920–1941: Plans, Expectations, Reality\". In Cattaruzza, Marina (ed.). Territorial Revisionism and the Allies of Germany in the Second World War: Goals, Expectations, Practices. Berghahn Books. pp. 92–101. ISBN 978-0-85745-738-7. JSTOR j.ctt9qcwmw.11.\n[…]\nTrianon Treaty text (in English)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Trianon",
        "situacao": "ok",
        "texto": "O Tratado de Trianon foi assinado em 4 de junho de 1920, no Palácio Grand Trianon, em Versalhes, França. Destinava-se a regular a situação do novo Estado húngaro que substituiu o Reino da Hungria, parte do antigo Império Austro-Húngaro, após a Primeira Guerra Mundial. As partes ao tratado eram as potências vitoriosas, seus aliados e o lado perdedor.\n[…]\nAs potências vitoriosas incluíam os Estados Unidos, o Reino Unido, a França e a Itália; seus aliados eram a Romênia, a Iugoslávia e a Tchecoslováquia. O lado perdedor estava representado pela Hungria.\n[…]\nNo campo dos derrotados, a Hungria perdeu dois-terços de seu território, que passou de 325 000 km² a apenas 93 000 km² após a assinatura do tratado, e quase dois-terços de sua população, de 19 milhões para 7 milhões de habitantes.\n[…]\nO território perdido foi distribuído da maneira seguinte:\n[…]\na Áustria recebeu a Burgenland (4 000 km²); Sopron voltou à Hungria após o referendo de 1921.\n[…]\nA Hungria perdeu o acesso ao mar que possuía através da Croácia.\n[…]\nO tratado criou expressivas minorias húngaras na Romênia, na Iugoslávia e na Tchecoslováquia.\n[…]\nEm razão da redistribuição de territórios de população húngara entre os países vizinhos, manifestaram-se reivindicações do Estado húngaro por sobre tais territórios, principalmente no que tange à Romênia. Formaram-se ainda agremiações étnicas e movimentos políticos húngaros nos países limítrofes e, na Hungria, o partido Jobbik reclama a reintegração dos territórios e populações húngaras pré-Trianon.\n[…]\nTratado de Saint-Germain-en-Laye\n[…]\nHistória da Hungria",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Entrada da Itália na Primeira Guerra Mundial",
      "descricao": "Declaração de guerra da Itália à Áustria-Hungria em maio de 1915, após o Tratado de Londres com os Aliados."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Neutra no começo do conflito, a Itália mudou de lado e entrou na guerra contra a Áustria-Hungria em que ano?",
    "resposta": "1915",
    "distratores": [
      "1914",
      "1916",
      "1917"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Treaty_of_London_(1915)",
      "https://en.wikipedia.org/wiki/Italian_front_(World_War_I)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Treaty_of_London_(1915)",
        "situacao": "ok",
        "texto": "The Treaty of London (Italian: Trattato di Londra; Russian: Лондонский договор, romanized: Londonskiy dogovor) or the Pact of London (Patto di Londra, French: Pacte de Londres) was a secret agreement concluded on 26 April 1915 by the United Kingdom, France, and Russia on the one part, and Italy on the other, in order to entice the latter to enter the Great War on the side of the Triple Entente.\n[…]\nIn May 1915, Italy declared war on Austria-Hungary but waited a year before declaring war on Germany, leading France and the UK to resent the delay. At the Paris Peace Conference after the war, the United States of America applied pressure to void the treaty as contrary to the principle of self-determination.\n[…]\nNonetheless, negotiations extended for six weeks over disagreements as the extent of Italian territorial gains in Dalmatia was still objected to by Sazonov.\n[…]\nOn 22 May 1915, the Italian government decided to launch the Alpine Front by declaring war against Austria-Hungary alone. This ignored the requirement set out in Article 2 to wage war against all the Central Powers. France accused Italy of violating the Treaty of London, and Russia speculated on the potential existence of a non-aggression agreement between Italy and Germany. Lack of preparation of the army was cited as the decision for the non-compliance with the treaty.\n[…]\nPartition of the Ottoman Empire was discussed by the Entente powers at two conferences in London in January and February 1917, and in Saint-Jean-de-Maurienne in April 1917. While it was apparent that the Italian interests were clashing with the British and the French, Italian representatives insisted on fulfilment of the promise given under the 1915 Treaty of London in the region of Antalya.\n[…]\nRenzi, William A. (1987). In the Shadow of the Sword: Italy's Neutrality and Entrance Into the Great War, 1914-1915. New York: P. Lang. ISBN 9780820404103."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Italian_front_(World_War_I)",
        "situacao": "ok",
        "texto": "The Italian front (Italian: Fronte italiano; German: Südwestfront) was one of the main theatres of war of World War I. It involved a series of military engagements along the border between the Kingdom of Italy and Austria-Hungary from 1915 to 1918. The Kingdom of Italy entered the war on the Entente side, although they had previously been allied with Germany and Austria-Hungary in the Triple Allia\n[…]\n1915: 23 May, Italy declares war on Austria-Hungary.\n[…]\n1914 became the standard machine gun of the Italian army and a total of 309 sections had been created, with 618 guns in total; though this was an improvement it was still only half the planned number, leaving many battalions to do without. In contrast a standard k.u.k regiment had four machine gun sections, MG 07/12 \"Schwarzlose\", one for each battalion, whilst a standard British regiment had by February 1915 four machine gun sections per battalion.\n[…]\nAt the beginning of the First Battle of the Isonzo on 23 June 1915, Italian forces outnumbered the Austrians three-to-one but failed to penetrate the strong Austro-Hungarian defensive lines in the highlands of northwestern Gorizia and Gradisca. Because the Austrian forces occupied higher ground, Italians conducted difficult offensives while climbing. The Italian forces therefore failed to drive much beyond the river, and the battle ended on 7 July 1915.\n[…]\nThe Italians recuperated, rearmed with 1200 heavy guns, and then on 18 October 1915 launched the Third Battle of the Isonzo, another attack. Forces of Austria-Hungary repulsed this Italian offensive, which concluded on 4 November without resulting gains.\n[…]\nWhile the confirmed death numbers of Italian soldiers on the front in 1915 were 66,090 killed, in 1916 this figure was 118,880 killed, in 1917 it was 152,790 killed, and in 1918 it stood at 40,250 killed soldiers.\n[…]\nAustro-Hungarian fortifications on the Italian border"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Londres_%281915%29",
        "situacao": "ok",
        "texto": "O Tratado de Londres ou Pacto de Londres foi um acordo secreto fechado em 26 de abril de 1915 por Reino Unido, França e Rússia de um lado, e a Itália do outro, com o objetivo de atrair este último a entrar na Primeira Guerra Mundial pelo lado da Tríplice Entente. O acordo envolvia promessas de expansão territorial italiana aos custos da Áustria-Hungria e Império Otomano, bem como na África, onde f\n[…]\nA política de Grey e o tratado foram criticados pela imprensa britânica, com o arqueólogo Arthur Evans publicando um artigo em abril de 1915 em que descrevia o tratado como a manifestação das ambições chauvinistas italianas na Dalmácia causando uma crise. Os historiadores Robert Seton-Watson e Wickham Steed descreveram as reivindicações italianas como absurdas e as políticas de Grey como injustas. Grey respondeu que a Sérvia receberia territórios da Áustria-Hungria em caso de vitória na guerra.\n[…]\nO governo italiano decidiu em 22 de maio de 1915 lançar o Fronte Alpino ao declarar guerra apenas contra a Áustria-Hungria. Isto ignorou os requerimentos do Artigo 2 do tratado, que era declarar guerra contra todas as Potências Centrais. A França acusou a Itália de violar o tratado e a Rússia especulou a possível existência de um acordo de não agressão com a Alemanha. A falta de preparação do Exército Real Italiano foi citada como o motivo pelo não cumprimento do tratado.\n[…]\nA entrada italiana na guerra não fez a Bulgária se juntar à Entente, pois derrotas britânicas e francesas em Galípoli deixaram os búlgaros mais cautelosos. Os alemães capturaram Caunas na Lituânia em junho de 1915 durante a Grande Retirada russa e isto convenceu a Bulgária que a Entente perderia a guerra. Pašić em agosto recebeu uma mensagem da Entente prometendo ganhos territoriais em troca de concessões na Macedônia do Vardar.\n[…]\nMedia relacionados com Tratado de Londres (1915) no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.73 — 2026-10-19**
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
