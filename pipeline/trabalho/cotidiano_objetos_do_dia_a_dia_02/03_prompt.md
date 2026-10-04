Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Objetos do Dia a Dia** (tema **Cotidiano**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Pipa",
      "descricao": "Brinquedo de papel ou tecido sobre varetas, empinado ao vento preso a uma linha, também chamado de papagaio ou pandorga."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Chamada de papagaio, arraia ou pandorga conforme a região do Brasil, a pipa foi inventada há mais de dois mil anos em qual país?",
    "resposta": "China",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kite",
        "situacao": "ok",
        "texto": "A kite is a tethered heavier-than-air craft with wing surfaces that react against the air to create lift and drag forces. A kite consists of wings, tethers and anchors. Kites often have a bridle and tail to guide the face of the kite so the wind can lift it. Some kite designs do not need a bridle; box kites can have a single attachment point. A kite may have fixed or moving anchors that can balanc\n[…]\nIn China, the kite has been claimed as the invention of the 5th-century BC Chinese philosophers Mozi and Lu Ban, who flew wooden kites called muyuan (木鸢). With the invention of paper in the Han dynasty, kites made of paper became popular, and kites were called zhiyuan (纸鸢). Materials ideal for kite building were readily available, including silk fabric for sail material; fine, high-tensile-strength silk for flying line; and resilient bamboo for a strong, lightweight framework.\n[…]\nAfter its introduction into India, the kite further evolved into the fighter kite, known as the patang in India, where thousands are flown every year on festivals such as Makar Sankranti. Kites were known throughout Polynesia, as far as New Zealand, with the assumption being that the knowledge diffused from China along with the people. Anthropomorphic kites made from cloth and wood were used in religious ceremonies to send prayers to the gods.\n[…]\nKites have been flown in China since ancient times. Weifang is home to the largest kite museum in the world. It also hosts an annual international kite festival on the large salt flats south of the city. There are several kite museums in Japan, UK, Malaysia, Indonesia, Taiwan, Thailand and the US. In the pre-modern period, Malays in Singapore used kites for fishing."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pipa_%28brinquedo%29",
        "situacao": "ok",
        "texto": "A pipa (português brasileiro) ou papagaio (português europeu), também chamada pandorga ou raia, é um brinquedo que voa baseado na oposição entre a força do vento e a da corda segurada pelo operador.\n[…]\nNo Brasil, a pipa (como é chamada no Rio de Janeiro) também recebe os nomes de cafifa (em Niterói), arraia, morcego, lebreque, bebeu, coruja, tapioca (em várias partes do estado do Rio de Janeiro), papagaio, curica , cângula, jamanta, casqueta, cometa, chambeta (no estado de São Paulo), quadrado (no Paraná), pandorga (no Rio Grande do Sul e Santa Catarina), barril, estilão, pião, bolacha (na Bahia) e pepeta (em estados como Acre e Amazonas).\n[…]\nEm Portugal é designado papagaio ou papagaio de papel e, em algumas zonas do norte do país, estrela. No arquipélago da Madeira é conhecido como joeira.\n[…]\nMuito populares nos subúrbios da cidade do Rio de Janeiro, são chamadas de pipas propriamente ditas aquelas em formato de pentágono, com cabresto triangular e rabiola. Já as arraias não possuem rabiola, e são mais comuns em Niterói.\n[…]\nAs pipas nasceram na China antiga. Sabe-se que por volta do ano 1 200 a.C. foram utilizadas como dispositivo de sinalização militar. Os movimentos e as cores das pipas eram mensagens transmitidas à distância entre destacamentos militares.\n[…]\nO político e inventor norte-americano Benjamin Franklin utilizou uma pipa para investigar e inventar o para-raios. Hoje, a pipa mantém a sua popularidade entre  crianças de todas as culturas.\n[…]\nCapucheta — pipa feita de uma única folha de jornal e sem varetas; a rabiola também é feita de jornal. Com algumas dobraduras e com a linha amarrada nos dois lados da dobradura, formando um triângulo, ou delta, ao centro por onde é empinado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Garfo",
      "descricao": "Talher com dentes usado para espetar e levar alimentos à boca."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No começo do século onze, uma princesa bizantina escandalizou a nobreza ao comer com um garfo de ouro em seu casamento em qual cidade italiana?",
    "resposta": "Veneza",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fork",
      "https://en.wikipedia.org/wiki/Maria_Argyropoulina"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fork",
        "situacao": "ok",
        "texto": "In cutlery or kitchenware, a fork (from Latin: furca 'pitchfork') is a utensil, now usually made of metal, whose long handle terminates in a head that branches into several narrow and often slightly curved tines with which one can spear foods either to hold them to cut with a knife or to lift them to the mouth.\n[…]\nBy the 11th century, the table fork had become increasingly prevalent in the Italian Peninsula because of historical ties with the Eastern Roman Empire and, as pasta became a greater part of the Italian diet, continued to gain popularity, displacing the long wooden spike formerly used since the fork's three spikes proved better suited to gathering the noodles. By the 14th century the table fork had become commonplace in Italy, and by 1600 was almost universal among the merchant and upper classes.\n[…]\nAlthough in Portugal forks were first used around 1450 by Infanta Beatrice, Duchess of Viseu, King Manuel I of Portugal's mother, only by the 16th century, when they had become part of Italian etiquette, did forks enter into common use in southwestern Europe, gaining some currency in Spain, and gradually spreading to France. The rest of Europe did not adopt the fork until the 18th century.\n[…]\nThe fork's adoption in northern Europe was slower. Its use was first described in English by Thomas Coryat in a volume of writings on his Italian travels (1611), but for many years it was viewed as an unmanly Italian affectation. Some writers of the Roman Catholic Church expressly disapproved of its use; St. Peter Damian seeing it as \"excessive delicacy\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maria_Argyropoulina",
        "situacao": "ok",
        "texto": "Maria Argyra (also Argyre or Argyropoulina) (Greek: Μαρία Ἀργυρή or Ἀργυροπουλίνα; died 1006 or 1007), of the Argyros family, was the great-granddaughter of the Byzantine emperor Romanos I Lakapenos, cousin of the emperors Basil II and Constantine VIII, and sister to the Byzantine emperor Romanos III Argyros.\n[…]\nHalf a century after her death, she was criticised by Peter Damian for her use of a fork for eating (forks being unfamiliar in Western Europe at the time), perfumes, and dew for bathing, although these criticisms were later mistakenly believed to be aimed at another Byzantine princess, the dogaressa Theodora Doukaina.\n[…]\nTăpkova-Zaimova, Vasilka (2017). \"CHAPTER 5 Latin, French and Italian Sources\". Bulgarians by Birth : The Comitopuls, Emperor Samuel and Their Successors According to Historical Sources and the Historiographic Tradition. Translated by Pavel Murdzhev. Leiden: Brill. p. 155. doi:10.1163/9789004352995_007. ISBN 978-90-04-35299-5. ISSN 1872-8103."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Garfo",
        "situacao": "ok",
        "texto": "Garfo é um utensílio culinário utilizado pela civilização ocidental moderna para a alimentação. Serve principalmente para segurar alimentos rígidos e levá-los à boca, mas também se usa na cozinha para segurar os produtos a cozinhar e para pisar, por exemplo, batatas ou cenouras cozidas, em puré.\n[…]\nO garfo de mesa foi inventado no Império Bizantino pelos anos 300. No século VIII estava disseminado no Oriente. Os cronistas medievais registraram o espanto que a princesa Teofânia Esclerina causou aos ocidentais, porque ela usava um garfo em vez de suas mãos enquanto fazia a refeição na corte de seu marido Otão II do Sacro Império Romano-Germânico a partir de 972. Outras princesas do Império Bizantino contraíram núpcias com reis da Europa e também trouxeram seus garfos.\n[…]\nA princesa Maria Argyropoulina, casada  Giovanni Orseolo, filho de Pietro II Orseolo, causou escândalo público em Veneza no ano 1004, quando se recusou a utilizar-se de seus próprios dedos para levar o alimento à boca, no que foi severamente criticada por São Pedro Damião, Doutor da Igreja, que escreveu:\n[…]\nA princesa Teodora, filha de Constantino VIII Imperador do Oriente, que veio de Constantinopla para casar com o Doge de Veneza Domenico Selvo também trouxe seu garfo de ouro com dois dentes, como o qual comia frutas cristalizadas. No entanto, pouco depois a população dessa cosmopolita cidade da época assimilou o garfo. Esse costume se espalhou para Milão e Florença e daí para o resto da Europa. O talher já era bem conhecido na Itália do século XV.\n[…]\nGarfo de mesa\n[…]\nGarfo de trinchar ou de cozinha.\n[…]\nDe sobremesa - para comer doces ou frutas após a refeição\n[…]\nDe desopercular - Garfo desoperculador\n[…]\nÉ conhecido como tridente de Netuno, garfo com poderes mágicos quando em domínio do Rei do mar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Espelho",
      "descricao": "Superfície de vidro com fundo metálico que reflete imagens, usada no dia a dia para ver o próprio reflexo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na Europa do século dezesseis, os melhores espelhos de vidro saíam das oficinas de qual ilha veneziana, famosa pelos seus vidreiros?",
    "resposta": "Murano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mirror",
      "https://en.wikipedia.org/wiki/Murano_glass"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mirror",
        "situacao": "ok",
        "texto": "A mirror, also known as a looking glass, is an object that reflects an image. Light that bounces off a mirror forms an image of whatever is in front of it, which is then focused through the lens of the eye or a camera. Mirrors reverse the direction of light at an angle equal to its incidence. This allows the viewer to see themselves or objects behind them, or even objects that are at an angle from"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Murano_glass",
        "situacao": "ok",
        "texto": "Venetian glass (Italian: vetro veneziano) is glassware made in Venice, typically on the island of Murano near the city. Traditionally it is made with a soda–lime \"metal\" and is typically elaborately decorated, with various \"hot\" glass-forming techniques, as well as gilding, enamel, or engraving. Production has been concentrated on the Venetian island of Murano since the 13th century.\n[…]\nBriati died in Venice in 1772, and is buried in Murano.\n[…]\nAntonio Salviati, a Venetian lawyer who gave up his profession in 1859 in order to devote his time to glassmaking, also had an important role in the revival of glassmaking in Murano.\n[…]\nBy 2012, about 50 companies were using the Artistic Glass Murano® trademark of origin.\n[…]\nGlassmaking is a difficult and uncomfortable profession, as glassmakers must work with a product heated to extremely high temperatures. Unlike 500 years ago, children of glassmakers do not enjoy any special privileges, extra wealth, or marriage into nobility. Today, it is difficult to recruit young glassmakers. Foreign imitations, and difficulty attracting young workers, caused the number of professional glassmakers in Murano to decrease from about 6,000 in 1990 to fewer than 1,000 by 2012.\n[…]\nMurano Glass Museum\n[…]\nHeiremans, Marc (2002). Murano Glass: Themes and Variations. Stuttgart: Arnold. p. 223. ISBN 978-3-89790-163-6. OCLC 248786059.\n[…]\nPanini, Augusto (2017). The World in a Bead. The Murano Glass Museum's Collection. Antiga Edizioni. p. 375. ISBN 978-8-89965-790-1. OCLC 1001512112.\n[…]\nPiña, Leslie (2007). Archimede Seguso: Lace and Stone: Mid-Mod Glass from Murano. Atglen, Pennsylvania: Shiffer Pub. p. 223. ISBN 978-0-76432-661-5. OCLC 74029385.\n[…]\nA History of Murano Glass\n[…]\nList of glass factories on Murano\n[…]\nMuranoglass.com\n[…]\nMurano Glass Museum (English language)\n[…]\nYouTube Video: The art of Murano glass\n[…]\nMurano Glass tools\n[…]\nMurano glass master legends"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Espelho",
        "situacao": "ok",
        "texto": "Espelho (do latim speculum) é uma superfície que reflete um raio luminoso em uma direção única definida (em vez de absorvê-lo ou espalhá-lo em todas as direções). Por convenção, as distâncias dos objetos são sempre consideradas positivas e as distâncias das imagens são consideradas positivas para imagens reais e negativas para imagens virtuais. Objeto reflexivo encontrado 5 mil anos atrás na Sumér\n[…]\nOs espelhos mais comuns são formados por uma camada de prata, alumínio ou amálgama de estanho, que é depositada quimicamente sobre a face posterior de uma lâmina de vidro, e por trás coberta com uma substância protetora.\n[…]\nPor sua vez, os espelhos de precisão são obtidos depositando, por evaporação sob vácuo, a camada metálica sobre a face anterior do vidro. Estes espelhos não podem ser protegidos o que implica que se realizem metalizações frequentes.\n[…]\nNo final da Idade Média, a técnica da fabricação de espelho foi sendo desenvolvida. O mercúrio era aplicado em papel fino montado em papel alumínio polido e coberto com outra folha de papel liso. Uma placa de vidro era colocada sobre o mesmo e levemente comprimida, e a camada de papel superior era removida. Após 10-20 horas de repouso, tempo de compressão, e até duas semanas de tempo de secagem, era fabricado o espelho.\n[…]\nA fabricação deste espelho era incomparavelmente mais complexa do que a produção de espelhos por sopro com ligas de vidro, mas mesmo assim foi usado por quase quatro séculos.\n[…]\nNo século XIX foi iniciada a fabricação do espelho de prata. Em 1835 foi publicado por Justus von Liebig \"[...] quando se mistura aldeído com uma solução de nitrato de prata e aquece-se, a prata é depositada sobre as paredes de vidro, resultando em um espelho brilhante\". .\n[…]\nEquação do espelho plano:\n[…]\nEm ambos os casos a relação entre a distância focal f e o raio de curvatura r do espelho é dada por\n[…]\nEspelhos nas culturas mesoamericanas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Fósforo de segurança",
      "descricao": "Palito de fósforo que só se acende quando riscado na superfície especial da lateral da caixa."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os fósforos de segurança, que só acendem riscados na lixa da caixinha, ganharam o mundo no século dezenove a partir de fábricas de qual país?",
    "resposta": "Suécia",
    "distratores": [
      "Noruega",
      "Dinamarca",
      "Alemanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Match"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Match",
        "situacao": "ok",
        "texto": "A match is a tool for starting a fire. Typically, matches are made of small wooden sticks or stiff paper. One end is coated with a material that can be ignited by friction generated by striking the match against a suitable surface. Wooden matches are packaged in matchboxes, and paper matches are partially cut into rows and stapled into matchbooks. The coated end of a match, known as the match \"hea\n[…]\nIn 1832, William Newton patented the \"wax vesta\" in England. It consisted of a wax stem that embedded cotton threads and had a tip of phosphorus. Variants known as \"candle matches\" were made by Savaresse and Merckel in 1836. John Hucks Stevens also patented a safety version of the friction match in 1839.\n[…]\nThe Swedes long held a virtual worldwide monopoly on safety matches, with the industry mainly situated in Jönköping, by 1903 called Jönköpings & Vulcans Tändsticksfabriks AB today Swedish Match. In France, they sold the rights to their safety match patent to Coigent Père & Fils of Lyon, but Coigent contested the payment in the French courts, on the basis that the invention was known in Vienna before the Lundström brothers patented it.\n[…]\nThe British match manufacturer Bryant and May visited Jönköping in 1858 to try to obtain a supply of safety matches, but was unsuccessful. In 1862 it established its own factory and bought the rights for the British safety match patent from the Lundström brothers.\n[…]\nThe striking surface on modern matchboxes is typically composed of 25% powdered glass or other abrasive material, 50% red phosphorus, 5% neutralizer, 4% carbon black, and 16% binder; and the match head is typically composed of 45–55% potassium chlorate, with a little sulfur and starch, a neutralizer (ZnO or CaCO3), 20–40% of siliceous filler, diatomite, and glue. Safety matches ignite due to the extreme reactivity of phosphorus with the potassium chlorate in the match head."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Palito_de_f%C3%B3sforo",
        "situacao": "ok",
        "texto": "O palito de fósforo (fósforo de fricção) fabricado atualmente é um artigo, curto, fino, feito de madeira, papelão ou barbante encerado e apresentando oxidantes, enxofre e cola em uma das extremidades e que quando entra em atrito com a lixa, da parte externa da caixa, fabricada com dextrina, fósforo e trissulfeto de antimônio III (Sb2S3) se decompõe e arde diante de baixas temperaturas e incendeia \n[…]\nFoi nos Estados Unidos que Alonzo D. Phillips de Springfield obteve, em 1836, uma patente para “fabricar fósforos de fricção” e os chamou “locofocos”. Mas o perigo ainda era grande e só foi resolvido após a descoberta do fósforo vermelho, em 1845. Foi o sueco Carl Lundström que introduziu em 1855 fósforos seguros, também chamados fósforos de segurança.\n[…]\nAlém de ser fabricado com fósforo vermelho, para uma maior segurança, seus ingredientes inflamáveis foram colocados em dois locais distintos: na cabeça do palito e do lado de fora da caixa, junto com o material abrasivo.\n[…]\nAnos mais tarde, Joshua Pusey vendeu sua patente para a Diamond Match Company.\n[…]\nNo Brasil, o comerciante curitibano Olivo Carnascialli fundou, em 1913, a Cia. Fabril Paranaense com a finalidade de explorar a indústria do palito de fósforo, sendo desta forma um dos precursores dessa indústria no país. A Cia Fabril Paranaense foi inaugurada no final da Avenida Visconde de Guarapuava, que na época era o setor industrial da capital paranaense.\n[…]\nMais de 500 bilhões de fósforos são usados a cada ano.[carece de fontes]?\n[…]\nAtualmente os palitos de fósforo não possuem fósforo, possuindo apenas enxofre, oxidantes e cola. O fósforo está contido na parte de fora da caixa, junto com trissulfeto de antimônio II (Sb²S³) e dextrina, deixando o palito mais seguro e fazendo o acender apenas na presença da caixa.\n[…]\nUma fábrica de palitos de fósforo na Rússia: sortimento de produções (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Cartão-postal",
      "descricao": "Cartão para correspondência enviado pelo correio sem envelope, geralmente com uma ilustração ou foto de um lado."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1869, os correios de qual país europeu lançaram o primeiro cartão-postal oficial, vendido já com o selo impresso?",
    "resposta": "Áustria-Hungria",
    "distratores": [
      "Reino Unido",
      "França",
      "Prússia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Postcard"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Postcard",
        "situacao": "ok",
        "texto": "A postcard or post card is a piece of thick paper or thin cardboard, typically rectangular, intended for writing and mailing without an envelope. Non-rectangular shapes may also be used but are rare.\n[…]\nA recent discovery of a mention of postcards in an 1828 Austrian novella entitled Die Abendgenossen written by Friedrich Halm indicates that the postcard was possibly in use in Austria much earlier than had previously been supposed. As Dr. Tony Page writes in his Introduction to  Die Abendgenossen (Blade Publications, Amazon Kindle, 2026, p.\n[…]\n17): 'Die Abendgenossen indicates that postcards (‘Postkarten’) were perhaps in use in Austria at a much earlier date [than previously thought]: one of the central characters in the story tells, towards the end of the tale, of how he is planning to go on his travels to various countries and has brought postcards along with him for the purpose (‘Postkarten mitgebracht’) – this in 1828!'\n[…]\nIn October 1869, the post office of Austria-Hungary accepted a similar proposal, also without images, and 3 million cards were mailed within the first three months. With the outbreak of the Franco-Prussian War in July 1870, the government of the North German Confederation decided to take the advice of Austrian Emanuel Herrmann and issued postals for soldiers to inexpensively send home from the field.\n[…]\nPostcardese\n[…]\nThe full text of A New Thing in Postage (report on the first cheap postcard used in Austria) at Wikisource\n[…]\nPostcardTree. 30,000+ digitized and postally used postcards.\n[…]\nNational Trust Library Historic Postcard collection at the University of Maryland libraries\n[…]\nInstitute of American Deltiology Postcard collection at the University of Maryland libraries"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cart%C3%A3o-postal",
        "situacao": "ok",
        "texto": "O cartão-postal, bilhete-postal ou simplesmente postal, é uma simplificação da carta. Trata-se de um pequeno retângulo de papelão fino, com a intenção de circular pelo Correio sem envelope, tendo uma das faces destinada ao endereço do destinatário, postagem do selo, mensagem do remetente e na outra alguma figura.\n[…]\nO primeiro cartão-postal foi emitido no século XIX e existem versões diferentes sobre a sua invenção:\n[…]\nOutra versão diz que o diretor dos Correios da Confederação da Alemanha do Norte, Heinrich Von Stephan, pode ter lançado a ideia e a sugestão na Conferência Postal Germano-austríaca, em 1865.\n[…]\nPor fim, Emmanuel Hermann, professor de Economia Política, da Academia Militar Wiener Neustadt, no Império Austro-húngaro que, em carta publicada no Die Neue Freie Presse, de 29 de janeiro de 1869, propôs a adoção do cartão-postal salientando a conveniência do uso de cartas mais simples que aliassem o baixo custo à simplicidade, o que poderia ser obtido com a supressão do envelope.\n[…]\nDe Marly, Diretor da Administração dos Correios da Áustria, aceitou a ideia e oito meses depois, em 1.º de outubro de 1869, foi lançado para venda o primeiro cartão-postal do mundo — Korrespondenz Karte, escrito em cor negra sobre cartão creme, levando impresso um selo de 2 Neukreuzer.\n[…]\nOutra versão afirma sobre o primeiro cartão-postal do mundo foi recebido por Theodore Hook em 1840; ele provavelmente postou para si mesmo.\n[…]\nNo Brasil, o termo \"Cartão-postal\" é também utilizado como sinônimo de um marco na paisagem das cidades e do território de uma região. É comum utilizar-se o termo em referência a uma construção, edificação, via de tráfego ou obra de arte pública que simboliza a cidade, região ou país citado.\n[…]\n\"A Avenida Paulista é um cartão-postal da Cidade de São Paulo\".\n[…]\nCorreios\n[…]\nInteiro postal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Caixa eletrônico",
      "descricao": "Máquina de autoatendimento bancário que permite sacar dinheiro sem passar pelo caixa humano."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1967, a máquina de saque de dinheiro criada pelo escocês John Shepherd-Barron foi instalada numa agência do banco Barclays em qual cidade?",
    "resposta": "Londres",
    "fonte": [
      "https://en.wikipedia.org/wiki/Automated_teller_machine",
      "https://en.wikipedia.org/wiki/John_Shepherd-Barron"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Automated_teller_machine",
        "situacao": "ok",
        "texto": "An automated teller machine (ATM) is an electronic telecommunications device that enables customers of financial institutions to perform financial transactions, such as cash withdrawals, deposits, funds transfers, balance or account information inquiries, at any time and without the need for direct interaction with bank staff.\n[…]\nA cash machine was installed at Barclays Bank, Enfield, North London in the United Kingdom, on 27 June 1967. This is generally considered the world's first ATM. This machine was inaugurated by English actor Reg Varney as part of the launch publicity. This invention is credited to the engineering team led by John Shepherd-Barron of printing firm De La Rue, who was awarded an OBE in the 2005 New Year Honours.\n[…]\nTransactions were initiated by inserting paper cheques issued by a teller or cashier, marked with carbon-14 for machine readability and security, which in a later model were matched with a four-digit personal identification number (PIN). Shepherd-Barron stated: It struck me there must be a way I could get my own money, anywhere in the world or the UK. I hit upon the idea of a chocolate bar dispenser, but replacing chocolate with cash.\n[…]\nThe Barclays–De La Rue machine (called De La Rue Automatic Cash System or DACS) beat the Swedish saving banks' and a company called Metior's machine (a device called Bankomat) by a mere nine days and British Westminster Bank's Smith Industries Chubb system (called Chubb MD2) by a month.\n[…]\n\"Interview with Mr. Don Wetzel, Co-Patente of the Automatic Teller Machine\" (1995) online\n[…]\nMedia related to Automatic teller machines at Wikimedia Commons\n[…]\nWorld Map and Chart of Automated Teller Machines per 100,000 Adults by Lebanese-economy-forum, World Bank data"
      },
      {
        "url": "https://en.wikipedia.org/wiki/John_Shepherd-Barron",
        "situacao": "ok",
        "texto": "John Adrian Shepherd-Barron OBE (23 June 1925 – 15 May 2010) was an India-born British inventor, who led the team that installed the first cash machine, sometimes referred to as the automated teller machine or ATM.\n[…]\nThe first De La Rue Automatic Cash System (DACS) machine, called Barclaycash, was installed outside the Enfield branch of Barclays Bank in northern Greater London in June 1967. The first person to withdraw cash was actor Reg Varney, a celebrity resident of Enfield known for his part in a number of popular television series. An early deployment of this device outside of the UK took place in Zürich in November 1967. It was called a Geldautomat.\n[…]\nAs a result, four-digit PINs were chosen and as ATMs expanded across the globe, this became the world standard. Withdrawals from the first Barclaycash machines were limited to a maximum of £10, \"quite enough for a wild weekend\" according to Shepherd-Barron.\n[…]\nShepherd-Barron received the OBE in the 2005 New Year's Honours list for services to banking as \"inventor of the automatic cash dispenser\".\n[…]\nGoodfellow's PIN system resembled modern ATMs more than Shepherd-Barron's machine. However, Shepherd-Barron's machine was the first to be installed, if only for a few days.\n[…]\nIn 1953, he married Caroline Murray, the daughter of Sir Kenneth Murray, one-time chairman of the Royal Bank of Scotland. They had three sons. One, Nicholas Shepherd-Barron FRS, is professor of algebraic geometry at the King's College London.\n[…]\nJohn Adrian Shepherd-Barron died on 15 May 2010 after a brief illness at the age of 84 in Raigmore Hospital, Inverness, Scotland. He was survived by his wife and their three sons, and extended family."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caixa_eletr%C3%B4nico",
        "situacao": "ok",
        "texto": "Um caixa automático ou terminal bancário é um dispositivo eletrônico que permite que clientes de um banco retirem dinheiro e verifiquem o saldo das suas contas bancárias sem a necessidade de um funcionário do banco. São os principais equipamentos de automação bancária.\n[…]\nDentro do espaço lusófono, também é conhecido por ATM (do inglês: Automated Teller Machine) e localmente por caixa eletrônico no Brasil, multibanco em Portugal e multicaixa em Angola.\n[…]\nO primeiro caixa eletrônico do mundo de sucesso foi fabricado pela empresa britânica De La Rue e foi instalado num bairro no norte da Grande Londres em 27 de junho de 1967 pelo Barclays Bank. Em março de 1969 a De La Rue vendeu caixas eletrônicos para o Banco Industrial de Campina Grande, a primeira instituição brasileira a adotar o equipamento.\n[…]\nA segunda instituição foi o Banco Comercial do Estado de São Paulo, que instalou as primeiras máquinas em São Paulo e no Rio de Janeiro em janeiro de 1970.\n[…]\nOs primeiros caixas eletrônicos falantes — caixas com instruções sonoras para pessoas com deficiência visual — foram instalados no Canadá em 1999. O primeiro caixa eletrônico falante nos Estados Unidos foi instalado em São Francisco em outubro do mesmo ano. Em 2005 já há em torno de trinta mil caixas eletrônicos falantes naquele país.\n[…]\nApesar dos caixas eletrônicos serem utilizados principalmente para retirar dinheiro, eles evoluíram para incluir muitas outras funções bancárias. Em alguns países que possuem uma rede integrada de caixas eletrônicos compartilhada por mais de um banco, como nos caixas eletrônicos Multibanco em Portugal e o Banco 24 Horas no Brasil, as caixas incluem muitas outras funções que não estão diretamente relacionadas com as contas bancárias, como por exemplo:\n[…]\nBanco móvel",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Matrioska",
      "descricao": "Conjunto de bonecas russas de madeira pintada que se encaixam umas dentro das outras."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A primeira matrioska, criada na Rússia por volta de 1890, teria sido inspirada numa boneca trazida de qual país?",
    "resposta": "Japão",
    "distratores": [
      "China",
      "Índia",
      "Coreia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Matryoshka_doll"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Matryoshka_doll",
        "situacao": "ok",
        "texto": "A matryoshka doll or matryoshka (; Russian: матрёшка), also known as a Russian stacking doll, nesting doll, or simply a Russian doll, is a set of wooden dolls of decreasing size placed one inside another. Matryoshka is a diminutive form of Matryosha (Матрёша), in turn an affectionate form of the Russian female first name Matryona (Матрёна).\n[…]\nOther East Asian dolls share similarities with matryoshka dolls such as the Kokeshi dolls, originating in Northern Honshū, the main island of Japan, although they cannot be placed one inside another, and the round hollow daruma doll depicting a Buddhist monk. Another possible source of inspiration is the nesting Easter eggs produced on a lathe by Russian woodworkers during the late 19th Century.\n[…]\nToday, some Russian artists specialize in painting themed matryoshka dolls that feature specific categories of subjects, people, or nature. Areas with notable matryoshka styles include Sergiyev Posad, Semionovo (now the town of Semyonov), Polkhovsky Maydan, and the city of Kirov.\n[…]\nThe largest collection of matryoshkas in the United States is in the Museum of Russian Art (Minnesota), which keeps about 3,500 matryoshkas.\n[…]\nExamples of metaphorical use of matryoshka include the matrioshka brain, the Matroska media-container format, and the Russian Doll model of multi-walled carbon nanotubes.\n[…]\nMatryoshka is often seen as a symbol of the feminine side of Russian culture. Matryoshka is associated in Russia with family and fertility. Matryoshka is used as the symbol for the epithet Mother Russia.\n[…]\nIn 2020, the Unicode Consortium approved the matryoshka doll () as one of the new emoji characters in release v.13. The matryoshka or nesting doll emoji was submitted to the consortium by Jef Gray and Samantha Sunne, as a non-religious, apolitical symbol of Russian-East European-Far East Asian culture."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Matriosca",
        "situacao": "ok",
        "texto": "Uma matriosca (russo: матрёшка; romanizado: matrioshka) ou boneca-russa, é um tradicional brinquedo russo. Constitui-se de uma série de bonecas, feitas geralmente de madeira, colocadas umas dentro das outras, da maior (exterior) até a menor (a única que não é oca). A palavra provém do diminutivo do nome próprio matriona.\n[…]\nO número de figuras que se conseguem encaixar é, geralmente, de seis ou sete, ainda que existam algumas com um número impressionante de peças. A sua forma é simples, mais ou menos cilíndrica e arredondada e mais estreita na parte superior, onde se situa a cabeça das bonecas. Não têm mãos (a não ser as que são pintadas nas suas superfícies). A sofisticação das matrioscas reside, de fato, na complexidade dos motivos pintados.\n[…]\nNa Sérvia, a versão feminina é designada como бабушка (babushka), que significa \"avozinha\", enquanto a versão masculina é designada como дедушка (dyedushka), \"avozinho\".[carece de fontes]? Conta-se que Sergei Maliutin, um pintor artesanal de Abramtsevo, viu uma série de bonecos de madeira representando os Shichi-fuku-jin, os Sete Deuses da Fortuna, encaixados de forma semelhante às bonecas atuais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "São Nicolau de Mira",
      "descricao": "Bispo cristão do século quatro, venerado como santo, cuja figura deu origem ao Papai Noel."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "São Nicolau, o bispo do século quatro que inspirou a figura do Papai Noel, viveu na cidade de Mira, que hoje fica em qual país?",
    "resposta": "Turquia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saint_Nicholas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saint_Nicholas",
        "situacao": "ok",
        "texto": "Saint Nicholas of Myra (traditionally 15 March 270 – 6 December 343), also known as Nicholas of Bari, was an early Christian bishop of Greek descent from the maritime city of Patara in Anatolia (in modern-day Antalya Province, Turkey) during the time of the Roman Empire. Because of the many miracles attributed to his intercession, he is also known as Nicholas the Wonderworker.\n[…]\nAdam C. English describes the removal of the relics from Myra as \"essentially a holy robbery\" and notes the thieves were not only afraid of being caught or chased after by the locals, but also the power of Saint Nicholas himself. Returning to Bari, they brought the remains with them and cared for them. The remains arrived on 9 May 1087. Two years later, Pope Urban II inaugurated a new church, the Basilica di San Nicola, to Saint Nicholas in Bari.\n[…]\nAn Irish tradition states that the relics of Saint Nicholas are also reputed to have been stolen from Myra by local Norman crusading knights in the twelfth century and buried near Thomastown, County Kilkenny, where a stone slab marks the reputed \"Tomb of Saint Nicholas\". According to the Irish antiquarian John Hunt, the tomb probably actually belongs to a local priest from Jerpoint Abbey.\n[…]\nIn the Eastern Orthodox Church, Saint Nicholas's memory is celebrated on almost every Thursday of the year (together with the Apostles) with special hymns to him which are found in the liturgical book known as the Octoechos. Soon after the transfer of Saint Nicholas's relics from Myra to Bari, an East Slavic version of his Life and an account of the transfer of his relics were written by a contemporary to this event.\n[…]\n9 May – Translation of the relics of Saint Nicholas the Wonderworker from Myra to Bari, in 1087.\n[…]\nSaint Nicholas, patron saint archive\n[…]\nThe Saint Nicholas Center\n[…]\nBiography of Saint Nicholas\n[…]\n\"Saint Nicholas\" in the Ecumenical Lexicon of Saints"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nicolau_de_Mira",
        "situacao": "ok",
        "texto": "São Nicolau de Mira, também conhecido como São Nicolau de Bari (Patara, c. 270 – Mira, 6 de dezembro de 343), foi um bispo cristão grego da Ásia Menor, venerado como santo pela Igreja Católica e pela Igreja Ortodoxa. É um dos santos mais populares da cristandade e tornou-se, ao longo dos séculos, símbolo de caridade, especialmente para com os pobres e as crianças.\n[…]\nSão Nicolau era de ascendência grega e nasceu em Patara, na região da Lícia, então parte do Império Romano (atual Turquia), na segunda metade do século III. Viveu num período marcado pelas perseguições aos cristãos e pelas grandes disputas doutrinais que moldaram os primeiros séculos da Igreja.\n[…]\nNicolau tornou-se bispo de Mira, destacando-se pelo zelo pastoral, pela defesa da fé cristã e pela caridade concreta. Durante a perseguição promovida pelo imperador Diocleciano, foi preso por se recusar a renegar a sua fé em Jesus Cristo.\n[…]\nNa cidade de Bari, na Itália, onde se acredita estarem sepultados os seus restos mortais, São Nicolau é padroeiro dos coroinhas e objeto de profunda devoção popular.\n[…]\nSéculos após a sua morte, a figura de São Nicolau inspirou o personagem natalino conhecido como Papai Noel (português brasileiro) ou Pai Natal (português europeu), Santa Claus (nos países anglófonos) e Sinterklaas (na Holanda). É representado por um velhinho corado de barba branca, que traz um saco de presentes e percorre o mundo sendo levado em um trenó por renas voadoras.\n[…]\nEm 1691 foi fundada a Irmandade de São Nicolau, composta por estudantes, e até hoje realizam-se as Festas Nicolinas, uma das mais antigas celebrações académicas do mundo. As festividades decorrem entre 29 de novembro e 6 de dezembro, tendo como ponto alto as Maçãzinhas, tradição inspirada no auxílio prestado por São Nicolau às jovens pobres.\n[…]\nFesta de São Nicolau\n[…]\nPapai Noel\n[…]\nSão Nicolau, verdadeiro Papai Noel",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Stereobelt",
      "descricao": "Tocador de fitas portátil com fones de ouvido criado em 1972 pelo alemão Andreas Pavel, precursor do Walkman."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1972, o alemão Andreas Pavel criou o Stereobelt, um tocador de fitas portátil com fones que antecipou o Walkman, enquanto morava em qual país?",
    "resposta": "Brasil",
    "fonte": [
      "https://en.wikipedia.org/wiki/Andreas_Pavel",
      "https://en.wikipedia.org/wiki/Walkman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Andreas_Pavel",
        "situacao": "ok",
        "texto": "Andreas Pavel is a German-Brazilian cultural producer and media designer who is generally credited with patenting the personal stereo\n[…]\nHaving studied philosophy and social sciences at the Free University of Berlin, Pavel returned to Brazil in 1967 and started his professional career as head of programming of the newly founded public broadcasting station, TV Cultura. 1970 he took up editorial planning at Abril Cultural, where he edited partwork encyclopaedias for nationwide newsstand distribution, most notably the philosophical source collection \"Great Thinkers\" and a reference series of \"Brazilian Popular Music\".\n[…]\nIn March 1977, Pavel filed the a patent application for his Stereobelt in Italy, followed by further applications in Germany, United States, United Kingdom, and Japan. Pavel subsequently tried to interest companies like Uher, Beyer, B&O, and Brionvega in manufacturing his device.\n[…]\nIn 1989, Pavel started infringement proceedings against Sony in the UK. Four years later, the British patent was invalidated by a British judge. The exact settlement fee is not known, but European press accounts said that it is estimated that Pavel received a cash settlement in excess of $10,000,000 and received some royalties on Walkman sales.\n[…]\nPercezione senza più limiti – parla il padre di Walkman e iPod (Il Sole 24 Ore 21/09/2006)\n[…]\nRainer Schönhammer, Der Walkman: Eine phänomenologische Untersuchung (München, 1988)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Walkman",
        "situacao": "ok",
        "texto": "Walkman (Japanese: ウォークマン, Hepburn: Wōkuman) is a brand of portable audio players manufactured by Sony since 1979. It was originally introduced as a portable cassette player and later expanded to include a range of portable audio products. Since 2011, the brand has referred exclusively to digital flash memory players.\n[…]\nIn the 1970s, German-Brazilian inventor Andreas Pavel devised a method for carrying a player of this type on a belt around the waist, listening via headphones, but his \"Stereobelt\" concept did not include the required engineering advancements to yield high-quality sound reproduction while the tape player was subject to mechanical shock as would be expected on a person walking. Pavel later lost his suit claiming the Walkman idea as his own.\n[…]\nCulturally the Walkman had a great effect and it became ubiquitous. According to Time, the Walkman's \"unprecedented combination of portability (it ran on two AA batteries) and privacy (it featured a headphone jack but no external speaker) made it the ideal product for thousands of consumers looking for a compact portable stereo that they could take with them anywhere\". According to The Verge, \"the world changed\" on the day the Walkman was released.\n[…]\nIn German-speaking countries, the use of \"Walkman\" became generic, meaning a personal stereo of any make, to a degree that the Austrian Supreme Court of Justice ruled in 2002 that Sony could not prevent others from using the term \"Walkman\" to describe similar goods. It is therefore an example of what marketing experts call the \"genericide\" of a brand.\n[…]\nSince 2017, Sony provided the Music Center for PC software on Microsoft Windows, designed for both content transfer and also playback for Walkman and other audio products.\n[…]\nList of Sony Walkman products\n[…]\nStereobelt\n[…]\nWalkman effect"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Andreas_Pavel",
        "situacao": "ok",
        "texto": "Andreas Pavel (nascido em 1945) é um inventor teuto-brasileiro que é considerado o \"pai\" do reprodutor de áudio portátil e estéreo de fita cassete, mais conhecido como o Stereobelt. O Stereobelt foi o antepassado do Walkman e dos dispositivos pessoais de áudio modernos, como o Zune da Microsoft e o iPod da Apple.\n[…]\nNascido em Aachen, Alemanha, Pavel mudou-se para São Paulo quando tinha 6 anos de idade, levado por seu pai que foi trabalhar para as indústrias Matarazzo. Foi no Brasil, em 1972 que ele inventou o seu dispositivo, o stereobelt. Ele morava em uma casa moderna no Morumbi e estava familiarizado com algumas personalidades importantes da época, como o jornalista Vladimir Herzog e o poeta Augusto de Campos.\n[…]\nEm 1979, a Sony começou a vender o popular Walkman e em 1980 iniciou conversações jurídicas com Pavel para lhe pagar uma taxa de royalty. Em 1986, a Sony finalmente concordou em pagar royalties para Pavel, mas para as vendas de apenas alguns modelos de Walkman vendidos em seu país natal, a Alemanha, e se recusou a reconhecê-lo como o inventor do Walkman.\n[…]\nO acordo concede a Pavel o reconhecimento da Sony de que ele é o inventor original do Walkman, o que, aparentemente, só foi alcançado em 2003, depois da morte de Akio Morita, fundador da Sony e criador anteriormente reconhecido do aparelho de som portátil.\n[…]\nPavel tinha considerado pedir royalties aos fabricantes de tocadores de música MP3, incluindo a Apple (para o iPod). No entanto, em dezembro de 2005 ele disse que não tinha a intenção de fazê-lo, não querendo passar mais tempo em ações judiciais.\n[…]\nEle está agora a desenvolver o que ele chama de \"dreamkit\", um \"dispositivo multimídia portátil de extensão dos sentidos\".\n[…]\nCiência e tecnologia do Brasil\n[…]\nStereobelt\n[…]\nWalkman",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Coelho da Páscoa",
      "descricao": "Personagem folclórico em forma de coelho que traz ovos às crianças na Páscoa."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A tradição de um coelho que traz ovos às crianças na Páscoa chegou aos Estados Unidos com imigrantes de qual país europeu?",
    "resposta": "Alemanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Easter_Bunny"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Easter_Bunny",
        "situacao": "ok",
        "texto": "The Easter Bunny (also called the Easter Rabbit or Easter Hare) is a folkloric figure and symbol of Easter, depicted as a rabbit—sometimes dressed with clothes—bringing Easter eggs to people. Originating among German Lutherans, the \"Easter Hare\" originally played the role of a judge, evaluating whether children were good or disobedient in behavior at the start of the season of Eastertide, similar \n[…]\nSimilar variants of this form of artwork are seen among other eastern and central European cultures.\n[…]\nThe idea of an egg-giving hare went to the U.S. in the 18th century. Protestant German immigrants in the Pennsylvania Dutch area told their children about the \"Osterhase\" (sometimes spelled \"Oschter Haws\"). Hase means \"hare\", not rabbit, and in Northwest European folklore the \"Easter Bunny\" indeed is a hare. According to the legend, only good children received gifts of colored eggs in the nests that they made in their caps and bonnets before Easter.\n[…]\nAlternatively, he notes, a long-standing European belief held that hares laid eggs, likely arising from the similarity between a hare’s form or resting place and the nest of a lapwing, both of which are found in grassland and appear in spring. During the 19th century, the growing influence of Easter-themed cards, toys, and books helped popularize the Easter Hare or Rabbit across Europe.\n[…]\nGerman immigrants subsequently carried the custom to Britain and America, where it developed into the Easter Bunny.\n[…]\nIn 1961 Christina Hole wrote, \"The [hare] is the true Easter beast, for he was once sacred to the European Spring-Goddess whom we have already met under her Anglo-Saxon name of Ēostre.\" The belief that Ēostre had a hare companion who became the Easter Bunny was popularized when it was presented as fact in the BBC documentary Shadow of the Hare (1993).\n[…]\nBott, Adrian (23 April 2011). The Modern Myth of the Easter Bunny. The Guardian."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coelhinho_da_P%C3%A1scoa",
        "situacao": "ok",
        "texto": "O Coelhinho da Páscoa, também chamado de Coelho da Páscoa ou Lebre da Páscoa, é uma figura folclórica e símbolo da Páscoa, representado por um coelho - às vezes vestido com roupas - trazendo ovos de Páscoa.\n[…]\nA tradição do Coelhinho da Páscoa foi transportada para a América pelos imigrantes alemães, entre o final do século XVII e o início do século XVIII. No sul do Brasil, nas regiões bilíngues, o Coelhinho da Páscoa também é chamado de Osterhoos no dialeto Riograndenser Hunsrückisch, e Osterhase no Alemão padrão.\n[…]\nNo Antigo Egito, o coelho simbolizava o nascimento e a nova vida.[carece de fontes]? Alguns povos da Antiguidade consideravam o coelho como o símbolo da Lua, portanto, é possível que ele tornou-se símbolo pascal devido ao fato da Lua determinar a data da Páscoa. O certo é que os coelhos são notáveis por sua capacidade de reprodução, e geram grandes ninhadas, e a Páscoa marca a ressurreição, vida nova, tanto entre os judeus quanto entre os cristãos.[carece de fontes]?\n[…]\nExiste também a lenda de que uma mulher pobre coloriu alguns ovos de galinha e os escondeu, para dá-los a seus filhos como presente de Páscoa. Quando as crianças descobriram os ovos, um coelho passou correndo. Espalhou-se, então, a história de que o coelho é que havia trazido os ovos. Desde então as crianças sempre acreditaram no coelhinho da páscoa, a história que seus pais lhes contavam. O Coelhinho da Páscoa é a principal atração entre as crianças.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Dia do Trabalho",
      "descricao": "Data comemorada em primeiro de maio em homenagem aos trabalhadores, também chamada Dia Internacional dos Trabalhadores."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O primeiro de maio homenageia operários que fizeram greves e protestos pela jornada de oito horas em 1886. Em que cidade americana isso aconteceu?",
    "resposta": "Chicago",
    "fonte": [
      "https://en.wikipedia.org/wiki/International_Workers%27_Day",
      "https://en.wikipedia.org/wiki/Haymarket_affair"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/International_Workers%27_Day",
        "situacao": "ok",
        "texto": "International Workers' Day, also called Labour Day in some countries and often referred to as May Day, is a celebration of labourers, the labour movement and the working class that is marked every year on 1 May, or the first Monday in May.\n[…]\nOn 21 April 1856, Australian stonemasons in Victoria undertook a mass stoppage as part of the eight-hour workday movement. It became a yearly commemoration, inspiring American workers to have their first stoppage. 1 May was chosen to be International Workers' Day to commemorate the 1886 Haymarket affair in Chicago. In that year beginning on 1 May, there was a general strike for the eight-hour workday.\n[…]\nIn 1889, the first meeting of the Second International was held in Paris, following a proposal by Raymond Lavigne that called for international demonstrations on the 1890 anniversary of the Chicago protests. On 1 May 1890, demonstrations took place in the United States and most countries in Europe. Demonstrations were also held in Chile and Peru. International Workers' Day was formally recognized as an annual event at the International's second congress in 1891.\n[…]\nSome of the largest examples of this occurred during the Great Depression of the 1930s, when hundreds of thousands of workers marched in International Workers' Day parades in New York's Union Square, while cities like Chicago and Duluth saw large demonstrations organized by the Communist Party.\n[…]\nOn 1 May 2017, immigrants' rights advocates, labor unions and leftists held protests against the immigration and economic policies of President Donald Trump in cities throughout the US, Chicago and Los Angeles having some of the largest marches.\n[…]\nBoston May Day Coalition International Workers' Day Rally & March"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Haymarket_affair",
        "situacao": "ok",
        "texto": "The Haymarket affair was a bombing that took place at a labor demonstration on May 4, 1886, at Haymarket Square in Chicago. The rally began peacefully in support of workers striking for an eight-hour work day; it was held the day after a May 3 rally at a McCormick Harvesting Machine Company plant on the West Side of Chicago, during which police killed two strikers by opening fire at the crowd as i\n[…]\nHistorian Nathan Fine points out that trade-union activities continued to show signs of growth and vitality, culminating later in 1886 with the establishment of the Labor Party of Chicago.\n[…]\nand the foreign born Germans, Bohemians, and Scandinavians, all got together for the first time on the political field in the summer following the Haymarket Affair. ... The Knights of Labor doubled its membership, reaching 40,000 in the fall of 1886. On Labor Day the number of Chicago workers in parade led the country.\n[…]\nIn his book about the Haymarket Affair, historian James Green wrote, \"No other event in American history has exerted such a hold on the imaginations of people in other lands, especially on the minds of working people in Europe and the Latin world, where the 'martyrs of Chicago' were annually recalled in the iconography of May Day.\"\n[…]\nLum, Dyer (2005) [1887]. A Concise History of the Great Trial of the Chicago Anarchists in 1886. Adamant Media Corporation. ISBN 978-1-4021-6287-9.\n[…]\nMcLean, George N. (1890). The Rise and Fall of Anarchy in America. Chicago: R.G. Badoux & Co.\n[…]\nParsons, Lucy (1889). Life of Albert R. Parsons : with brief history of the labor movement in America. Chicago: L. E. Parsons.\n[…]\nThe Dramas of Haymarket, Chicago Historical Society\n[…]\n1886: The Haymarket Martyrs and Mayday, Libcom\n[…]\nHaymarket Martyrs' Monument, Graveyards of Chicago\n[…]\nChicago Anarchists on Trial: Evidence from the Haymarket Affair 1886–1887, American Memory, Library of Congress"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Walkman",
      "descricao": "Tocador portátil de fitas cassete com fones de ouvido, lançado pela empresa japonesa Sony."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Muita gente associa o Walkman aos anos oitenta, mas a Sony lançou o tocador de fitas portátil antes. Em que ano?",
    "resposta": "1979",
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
        "texto": "Walkman® é uma marca popular de uma série de tocadores ou leitores de áudio portáteis pertencente à Sony. O termo Walkman também é utilizado para se referir a aparelhos portáteis similares de reprodução de áudio estéreo de outros fabricantes. Com sua chegada, costuma-se dizer que mudaram os hábitos musicais, uma vez que cada pessoa pode carregar e ouvir seus sons preferidos e, principalmente, sem \n[…]\nEm março de 2007, a Sony prolongou a marca para Walkman Video, para lançamento do NW-A800, primeiro tocador portátil Walkman que reproduz vídeos flash.\n[…]\nO Walkman original foi criado em 1979 no Japão e levava o nome de Soundabout, no exterior. Foi criado pelo coordenador do setor de áudio da Sony Nobutoshi Kihara para um dos sócios da empresa, Akio Morita, que queria escutar ópera durante seu trabalho desgastante. Morita odiou o nome Walkman e pediu para ser alterado. Mas uma campanha de divulgação com o nome Walkman já tinha sido iniciada e alterá-lo sairia demasiado caro.\n[…]\nQuando o primeiro aparelho ficou pronto, em abril de 1979, os vendedores não ficaram muito entusiasmados com a ideia e afirmaram que o Walkman venderia pouco. Akio Morita que acreditava no novo produto, então, propôs um desafio: se o Walkman não vendesse pelo menos 100 mil unidades em seus dois primeiros anos de mercado, ele renunciaria à presidência da Sony. Akio ganhou a aposta e naquele período cerca de 1,5 milhões de tocadores de áudio Walkman foram vendidos entre 1979 e 1981.\n[…]\nOutros aparelhos da linha Ericsson-Walkman são os modelos W300, W580, W700i e W880. O sucesso dos aparelhos celulares mistos de tocadores digitais é um forte indício que os tocadores de áudio e telefones portáteis estão começando a se fundir. Outro grande indício é que outras empresas também estão lançando aparelhos celulares baseados em música, por exemplo a Nokia que lançou inclusive uma campanha chamada \"A música nos conecta\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Carrinho de supermercado",
      "descricao": "Cesto de metal ou plástico sobre rodas usado pelos clientes para carregar compras no mercado."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O americano Sylvan Goldman, dono de mercados, criou o carrinho de compras inspirado numa cadeira dobrável. Em que década isso aconteceu?",
    "resposta": "Anos trinta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Shopping_cart",
      "https://en.wikipedia.org/wiki/Sylvan_Goldman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shopping_cart",
        "situacao": "ok",
        "texto": "A shopping cart (North American English), trolley (British English, Australian English), also known by a variety of other names, is a wheeled cart supplied by a shop or store, especially supermarkets, for use by customers inside the premises for transport of merchandise as they move around the premises, while shopping, prior to heading to the checkout counter, cashiers or tills.\n[…]\nOne of the first shopping carts was introduced on June 4, 1937, the invention of Sylvan Goldman, owner of the Humpty Dumpty supermarket chain in Oklahoma. One night, in 1936, Goldman sat in his office wondering how customers might move more groceries. He found a wooden folding chair and put a basket on the seat and wheels on the legs. Goldman and one of his employees, a mechanic named Fred Young, began tinkering. Their first shopping cart was a metal frame that held two wire baskets.\n[…]\nIn 2004, British supermarket chain Tesco trialed shopping carts with user-adjustable wheel resistance, heart rate monitoring and calorie counting hardware in an effort to raise awareness of health issues. The cart's introduction coincided with Tesco's sponsorship of Cancer Research UK's fundraising event Race for Life.\n[…]\nOne of the most famous thematizations of a shopping cart in art is the 1970 sculpture \"Supermarket Lady\" by US pop artist Duane Hanson, which is critical of consumerism.\n[…]\nAnother example is found in Massurrealism, a grass-roots genre started in 1992. This art movement merges surrealism with mass media, and was inspired by the use of the shopping cart to comment on contemporary society's mass media saturation and consumer-driven culture.\n[…]\nShopping Cart–Related Injuries to Children American Academy Of Pediatrics\n[…]\nThe \"Telescopic Shopping Cart Collection\" at the National Museum of American History (Smithsonian Institution)\n[…]\nReversing the Operation of CAPS Shopping Cart Wheel Locks[link removed]"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sylvan_Goldman",
        "situacao": "ok",
        "texto": "Sylvan Nathan Goldman (November 15, 1898 – November 25, 1984) was an American businessman and inventor of the modern shopping cart. His design had a pair of large wire baskets connected by tubular metal arms with four wheels.\n[…]\nSylvan learned the retail trade from his father and his mother's uncles.\n[…]\nHe introduced the device on June 4, 1937, in the Humpty Dumpty supermarket chain in Oklahoma City, of which he was the owner. With the assistance of a mechanic named Fred Young, Goldman constructed the first shopping cart, basing his design on that of a wooden folding chair. They built it with a metal frame and added wheels and wire baskets. Another mechanic, Arthur Kosted, developed a method to mass-produce the carts by inventing an assembly line capable of forming and welding the wire.\n[…]\nSylvan Goldman also manufactured the more familiar and more modern \"nesting cart\" under a license granted by Telescope Carts, Inc. In 1946, Orla Watson, co-founder of Telescope Carts, Inc. developed an innovative \"nesting\" shopping cart that did not require disassembly after each use as Goldman's designs did, and which allowed for the shopping carts to telescope, or \"nest\", by simply shoving the carts together.\n[…]\nagreed to an exclusive license granted to Goldman's company for the production of the telescoping, or \"nesting\", cart. The telescoping cart, based on the patent issued to Watson, forms the basis of the shopping cart designs used to the present, and all royalties for the new design were paid to Telescope Carts, Inc. until their patent expired.\n[…]\nSylvan N. Goldman, 86, Dies; Inventor of the Shopping Cart | NY Times | November 27, 1984"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carrinho_de_supermercado",
        "situacao": "ok",
        "texto": "Um carrinho de supermercado, carrinho de compras ou trole é um carro disponibilizado por uma loja, especialmente os supermercados, a ser utilizado por clientes dentro da loja para o transporte da mercadoria para o caixa, podendo geralmente também ser levado até o estacionamento. Freqüentemente, são permitidos aos clientes deixar os carrinhos no estacionamento, os quais posteriormente são recolhido\n[…]\nO primeiro carrinho foi introduzido em junho de 1937, nos EUA, uma invenção de Sylvan Goldman, proprietário da rede de supermercados Humpty-Dumpty na cidade de Oklahoma. Com o auxílio do mecânico Fred Young, Goldman construiu o primeiro carrinho de compras, baseando seu projeto no desenho de uma cadeira dobrável de madeira. Construíram-na com uma grade de metal e adicionaram as rodas e as cestas de fio, e anunciaram a invenção como parte de um novo \"plano de não mais carregar cestas\".\n[…]\nA invenção não foi imediatamente bem aceita. Os homens acharam-na afeminada e as mulheres acharam-na parecida com um carro de bebê. \"Eu empurrei meu último carro de bebê\", afirmavam mulheres ofendidas. Após ter empregado diversos modelos masculinos e femininos para empurrar sua nova invenção dentro de sua loja para demonstrar sua utilidade, bem como demonstradores para explicar seu uso, os carrinhos  tornaram-se extremamente populares e Goldman transformou-se em um multimilionário.\n[…]\nGoldman continuou a fazer modificações em seu projeto original, e o tamanho da cesta foi aumentado, já que as lojas notaram que seus clientes compravam mais quando o tamanho aumentou. Hoje, a maioria das lojas de grande-porte e supermercados têm carros para a conveniência dos clientes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Sacola plástica",
      "descricao": "Saco leve de plástico com alças usado para carregar compras, criado pelo engenheiro sueco Sten Gustaf Thulin."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A sacola plástica de alças, criada pelo engenheiro sueco Sten Gustaf Thulin, foi patenteada por uma empresa da Suécia em qual década do século vinte?",
    "resposta": "Anos sessenta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Plastic_bag"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Plastic_bag",
        "situacao": "ok",
        "texto": "A plastic bag, poly bag,  or pouch is a type of container made of thin, flexible, plastic film, nonwoven fabric, or plastic textile. Plastic bags are used for containing and transporting goods such as foods, produce, powders, ice, magazines, chemicals, and waste. It is a common form of packaging.\n[…]\nHowever, plastic bags are reused before discard at a rate of 1.6 times.\n[…]\nAmerican and European patent applications relating to the production of plastic shopping bags can be found dating back to the early 1950s, but these refer to composite constructions with handles fixed to the bag in a secondary manufacturing process. The modern lightweight shopping bag is the invention of Swedish engineer Sten Gustaf Thulin.\n[…]\nIn the early 1960s, Thulin developed a method of forming a simple one-piece bag by folding, welding and die-cutting a flat tube of plastic for the packaging company Celloplast of Norrköping, Sweden. Thulin's design produced a simple, strong bag with a high load-carrying capacity, and was patented worldwide by Celloplast in 1965.\n[…]\nA large number of cities and counties have banned the use of plastic bags by grocery stores or introduced a minimum charge. In September 2014, California became the first US state to pass a law banning their use, but the ban contained what has since been called a loophole, allowing supermarkets to provide thicker plastic bags as \"reusable\" bags at a cost of 10 cents each. In 2024, California passed a new law, taking effect in 2026, which closes this loophole and reinforces the original ban.\n[…]\nPlastic bags are used for diverse applications:\n[…]\nJohansson, Nils. \"The Plastic Bag: From a Mundane Swedish Innovation to the World's Oceans\" Environment and History (August 2025), Vol. 31, No. 3: 293-299. online\n[…]\nMedia related to Plastic bags at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saco_de_pl%C3%A1stico",
        "situacao": "ok",
        "texto": "Um saco de plástico ou sacola de plástico é um objeto fabricado em plástico e utilizado para transportar pequenas quantidades de mercadorias. Introduzidos na década de 1970, os sacos de plástico depressa se tornaram muito populares, especialmente através da sua distribuição gratuita nos supermercados e outras lojas.\n[…]\nO Reino Unido encontra-se de momento a estudar a hipótese de aplicar legislação semelhante. Na Alemanha, os sacos de plásticos são pagos pelo consumidor em todos os supermercados e é habitual o uso de sacos de pano reutilizáveis ou caixas de cartão.\n[…]\nNo Brasil, o uso de sacos de plástico é generalizado e na maioria das lojas é distribuído gratuitamente. Segundo a Associação Brasileira de Supermercado (Abras) o número de unidades consumidas pela população brasileira em 2012 foi de aproximadamente 12 bilhões, ou 0,2% dos resíduos sólidos do país. Em 2011, o consumo teria sido de 13,2 bilhões de sacolas.\n[…]\nEm Portugal, em 15 de dezembro de 2010, foi aprovado um projeto de lei proposto pelo PSD que obriga a uma redução de 90% no fornecimento de sacos nos supermercados até 2016, e outro do PS para aplicar um \"sistema de desconto mínimo\" no valor de pelo menos 1% a partir de 5€ de compras a quem prescinda totalmente dos sacos de plástico fornecidos gratuitamente pelas superfícies comerciais.\n[…]\nEm São Paulo, empresas produzem o produto com plástico biodegradável a partir de polímeros do álcool. O setor de biotecnologia do IPT desenvolveu um plástico derivado, por ação de uma bactéria, do açúcar de cana.\n[…]\nComo uma grande alternativa contra o consumo excessivo de sacolas de plástico, é a utilização de sacolas retornáveis ou sacolas ecológicas, confeccionada em sua maioria em algodão cru e outros tecidos.\n[…]\n«A Favor das Sacolas Plásticas». - Página do Facebook a favor da distribuição das sacolas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Parabéns a Você",
      "descricao": "Canção cantada em aniversários, cuja melodia vem da canção americana Good Morning to All."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A melodia do Parabéns a Você nasceu como uma canção de bom dia, criada por duas irmãs americanas para crianças de escola. Em que século?",
    "resposta": "Século dezenove",
    "fonte": [
      "https://en.wikipedia.org/wiki/Happy_Birthday_to_You"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Happy_Birthday_to_You",
        "situacao": "ok",
        "texto": "\"Happy Birthday to You\", or simply \"Happy Birthday\", is an American song traditionally sung to celebrate a person's birthday. According to the 1998 Guinness World Records, it is the most recognized song in the English language, followed by \"For He's a Jolly Good Fellow\". The song's base lyrics have been translated into at least 18 languages.\n[…]\nThe melody of \"Happy Birthday to You\" comes from the song \"Good Morning to All\", which has traditionally been attributed to American sisters Patty and Mildred J. Hill in 1893, although the claim that the sisters composed the tune is disputed.\n[…]\nThe American copyright status of \"Happy Birthday to You\" began to draw more attention with the passage of the Copyright Term Extension Act in 1998. The Supreme Court upheld the Act in Eldred v. Ashcroft in 2003, and Associate Justice Stephen Breyer specifically mentioned \"Happy Birthday to You\" in his dissenting opinion.\n[…]\nIn regions of America and Canada, especially at young children's birthdays, immediately after \"Happy Birthday\" has been sung, it is not uncommon for the singers to segue into \"How old are you now? How old are you now? How old are you now, how old are you now?\" and then count up: \"Are you one? Are you two? Are you ...\" until they reach the right age or often, instead of counting, \"and many more!\" for those who are older.\n[…]\nColeman also published \"Happy Birthday\" in The American Hymnal in 1933. Children's Praise and Worship published the song in 1928, edited by Byers, Byrum, and Koglin.\n[…]\nMars rover Curiosity plays \"Happy Birthday\" to itself on YouTube in 2013\n[…]\n\"The Happy Birthday Song\". University of Pittsburgh. Archived from the original on September 26, 2015. Retrieved May 24, 2024. – shows the \"Good Morning and Birthday Song\" from the 1927 edition of The Everyday Song Book held by the University of Pittsburgh Library System."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parab%C3%A9ns_a_Voc%C3%AA",
        "situacao": "ok",
        "texto": "\"Parabéns a Você\" (no Brasil, popularmente alterado para \"Parabéns para Você\" ou mais habitualmente \"Parabéns pra Você\") é o título em português para a canção tradicional de origem estadunidense \"Happy Birthday to You\", cantada nas comemorações de aniversários das pessoas, e que em 1942 teve uma letra adaptando-a no Brasil por Bertha Celeste, a qual também é utilizada em Portugal.\n[…]\nA melodia de \"Parabéns a Você\" tem origem na canção \"Good Morning to All\" (\"Bom dia a todos\"), das irmãs e professoras norte-americanas Mildred J. Hill e Patty Hill em 1893, que resolveram compor uma canção para as crianças cantarem na entrada da escola. A melodia era acompanhada pela repetição do título quatro vezes. Isto ocorreu no ano de 1875.\n[…]\nAs duas registraram a composição em 1893, até que em 1924, a composição foi publicada num livro de Robert Coleman, que trazia partituras intitulado \"Celebrations Songs\", tendo conservado a melodia e alterado o verso para Happy Birthday to You\" (\"Feliz Aniversário a Você\").\n[…]\nO chamado Parabéns Crioulo ou Parabéns Gaúcho ou Parabéns Gaudério é uma versão regional da canção do Parabéns a Você, criada e utilizada no estado brasileiro do Rio Grande do Sul. A letra foi composta entre as décadas de 1950 e 1960 por Dimas Costa, poeta, radialista e folclorista brasileiro, e a música foi composta por Eleu Salvador, ator, compositor e dublador. \"É um refrão repetido 3x e duas declamações no meio\".\n[…]\nEm junho de 2016, a versão de “Happy Birthday” foi considerada de domínio público, sem ter que pagar direitos de autor para a execução pública, em um processo que tramitava desde 2013.\n[…]\nSegundo argumentou o advogado de Nelson, Mark C. Rifkin, que ajuizara a ação em 13 de junho de 2013, Happy Birthday era uma simples adaptação pública da canção original: \"É uma música criada pelo público, pertence ao público, e que precisa voltar para o público\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Penny Black",
      "descricao": "Primeiro selo postal adesivo do mundo, emitido no Reino Unido com o perfil da rainha Vitória."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Penny Black, primeiro selo postal adesivo do mundo, começou a circular no Reino Unido em que ano?",
    "resposta": "1840",
    "fonte": [
      "https://en.wikipedia.org/wiki/Penny_Black"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Penny_Black",
        "situacao": "ok",
        "texto": "The Penny Black was the world's first adhesive postage stamp used in a public postal system. It was first issued in the United Kingdom on 1 May 1840 but was not valid for use until 6 May. The stamp features a profile of 21-year-old Queen Victoria.\n[…]\nAs the name suggests, the stamp was printed in black ink. A two-penny stamp, the Two Penny Blue, printed in blue and covered the double-letter rate (up to 1 oz or 28 g), was issued on 8 May 1840.\n[…]\nA complete sheet of the Penny Black without check letters is held by the British Postal Museum. This unique item is in fact a plate proof and by definition not an imprimatur sheet.\n[…]\nThe development of the Penny Black is depicted in Daisy Goodwin's Victoria, Season 1 Episode 3.\n[…]\nJackson, Mike. May Dates: A survey of Penny Blacks, Twopenny Blues, Mulreadys and caricatures used during May 1840. Melton Mowbray, Leicestershire: Mike Jackson Publications, c1999. ISBN 0-952827-41-7.\n[…]\nMuir, Douglas N. Postal Reform and the Penny Black: A New Appreciation. London: National Postal Museum, 1990 ISBN 0-951594-80-X\n[…]\nNissen, Charles. Great Britain: The Penny Black: Its Plate Characteristics. Kent, [England]: F. Hugh Vallancey, 1948.\n[…]\nNissen, Charles and Bertram McGowan. The Plating of The Penny Black Postage Stamp Of Great Britain, 1840: with a description of each individual stamp on the eleven different plates, affording a guide to collectors in the reconstruction of the sheets. London: Stanley Gibbons, 1998 ISBN 0-85259-461-5\n[…]\nProud, Edward B. Penny Black Plates. Heathfield, East Sussex: International Postal Museum, 2015.\n[…]\nRigo de Righi, A. G. The Story of the Penny Black and Its Contemporaries. London: National Postal Museum, 1980 ISBN 0-9500018-7-2\n[…]\nThe 1840 Penny Black at the American National Postal Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/One_Penny_Black",
        "situacao": "ok",
        "texto": "O one penny black (um pêni preto) foi o primeiro selo postal do mundo. Começou a circular em Inglaterra a 6 de Maio de 1840. A ideia do selo postal para indicar pré-pagamento do correio foi de Sir Rowland Hill, incluída nas suas propostas de 1837 para a reforma do sistema postal Britânico. Era normal na época o destinatário pagar a postagem no recebimento da correspondência.\n[…]\nNo ano seguinte seria substituído pelo one penny red, pois a sua cor negra não permitia que os carimbos fossem visíveis e portanto era possível reutilizar os selos.\n[…]\nSistemas de entregas postais que utilizavam o que poderia ser selo adesivo existiam antes do Penny Black. Aparentemente a ideia teria já sido sugerida na Áustria, Suécia, e possivelmente Grécia.\n[…]\nInicialmente, os \"penny black\" tinham 3/4 de polegadas quadradas, mas foram modificados para as dimensões de 3/4 polegadas de largura por 7/8 polegadas de altura (algo aproximado de 19 x 22 mm) para acomodar a palavra \"POSTAGE\" no topo do desenho e \"ONE PENNY\" (um centavo) na parte inferior. Em primeiro plano, a imagem do perfil da Rainha Vitória em fundo negro.\n[…]\nO One Penny Black não é um selo raro. Foram impressas 286 700 folhas, totalizando 68 808 000 selos e uma considerável quantidade desses selos sobreviveu ao tempo, principalmente porque envelopes não eram usados com frequência. As cartas eram escritas diretamente em papéis de carta emitidos pela autoridade postal, que eram dobrados e selados. Então, se a carta era guardada, o selo sobrevivia.\n[…]\nA única folha completa de selos Penny Black conhecida pertence ao The British Postal Museum and Archive.\n[…]\ntwo penny blue",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Natal",
      "descricao": "Festa cristã que celebra o nascimento de Jesus, comemorada em vinte e cinco de dezembro."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O registro mais antigo de uma festa de Natal em vinte e cinco de dezembro vem de um calendário de Roma. De que século é esse registro?",
    "resposta": "Século quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Christmas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christmas",
        "situacao": "ok",
        "texto": "Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world. A liturgical feast central to Christianity, Christmas preparation begins on the First Sunday of Advent. Advent is followed by Christmastide, which historically in the West lasts twelve days and culminates on Tw\n[…]\nAround the 12th century, these traditions transferred again to the Twelve Days of Christmas (December 25 – January 5); a time that appears in the liturgical calendars as Christmastide or Twelve Holy Days.\n[…]\nThe Armenian Apostolic Church continues the original ancient Eastern Christian practice of celebrating the birth of Christ not as a separate holiday, but on the same day as the celebration of his baptism (Theophany), which is on January 6. This is a public holiday in Armenia, and it is held on the same day that is internationally considered to be January 6, because since 1923 the Armenian Church in Armenia has used the Gregorian calendar.\n[…]\nHowever, there is also a small Armenian Patriarchate of Jerusalem, which maintains the traditional Armenian custom of celebrating the birth of Christ on the same day as Theophany (January 6), but uses the Julian calendar for the determination of that date. As a result, this church celebrates \"Christmas\" (more properly called Theophany) on the day that is considered January 19 on the Gregorian calendar in use by the majority of the world.\n[…]\nFollowing the 2022 Russian invasion of Ukraine, Ukraine officially moved its Christmas date from January 7 to December 25, to distance itself from the Russian Orthodox Church that had supported Russia's invasion. This followed the Orthodox Church of Ukraine formally adopting the Revised Julian calendar for fixed feasts and solemnities.\n[…]\nChristmas collection at the Smithsonian National Museum of American History"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Natal",
        "situacao": "ok",
        "texto": "Natal é uma festa anual que comemora o nascimento de Jesus Cristo, celebrada principalmente em 25 de dezembro como uma celebração religiosa e cultural por bilhões de pessoas em todo o mundo. Festa litúrgica central para o cristianismo, a preparação para o Natal começa no primeiro domingo do Advento e é seguida pelo período natalino, que historicamente no Ocidente dura doze dias e culmina na Noite \n[…]\nNo entanto, algumas Igrejas Cristãs Orientais celebram o Natal em 25 de dezembro, segundo o calendário juliano, mais antigo, que atualmente corresponde a 7 de janeiro no calendário gregoriano. Para os cristãos, celebrar a vinda de Deus ao mundo em forma humana para expiar os pecados da humanidade é mais importante do que saber a data exata do nascimento de Jesus Cristo.\n[…]\nAlgumas jurisdições da Igreja Ortodoxa Oriental, incluindo as da Rússia, Geórgia, Macedônia do Norte, Montenegro, Sérvia e Jerusalém, celebram as festas usando o antigo calendário juliano. Desde o Natal de 1899 até o Natal de 2099, inclusive, há uma diferença de 13 dias entre o calendário juliano e o calendário gregoriano moderno. Como resultado, 25 de dezembro no calendário juliano corresponde atualmente a 7 de janeiro no calendário usado pela maioria dos governos e pessoas no dia a dia.\n[…]\nNo século II, os \"primeiros registros da igreja\" indicam que \"os cristãos estavam lembrando e celebrando o nascimento do Senhor\", uma \"celebração que surgiu organicamente da devoção autêntica de crentes comuns\"; embora \"eles não concordassem com uma data fixa\". O documento mais antigo a situar o aniversário de Jesus em 25 de dezembro é o Cronógrafo de 354 (também chamado de Calendário de Filocalus), que também o nomeia como o aniversário de Sol Invictus (o 'Sol Invencível').\n[…]\nForam descritos como um símbolo de humanidade comum mesmo nas situações mais sombrias e usados para demonstrar às crianças os ideais do Natal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Horário de verão no Brasil",
      "descricao": "Adiantamento dos relógios em uma hora durante o verão, adotado em vários períodos no Brasil."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Os brasileiros adiantaram os relógios em uma hora para o horário de verão pela primeira vez em que ano?",
    "resposta": "1931",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hor%C3%A1rio_de_ver%C3%A3o_no_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hor%C3%A1rio_de_ver%C3%A3o_no_Brasil",
        "situacao": "ok",
        "texto": "O horário de verão no Brasil foi adotado pela primeira vez em 1º de outubro de 1931, através do Decreto 20.466, abrangendo todo o território nacional. Foi designado pela sigla internacional BRST (Brasília Summer Time), e equivale a UTC −2 (salvo em MT e MS, onde equivale a UTC −3, e sua sigla internacional foi AMST (Amazon Summer Time).\n[…]\nUma pesquisa de opinião realizada pela empresa Paraná Pesquisas, entre 14 e 17 de abril, mostrou que 65,7% dos brasileiros concordam com o fim do horário de verão; 31,1% discorda; e 3,2% não sabe ou não respondeu. Foram entrevistados 2 020 pessoas de 164 municípios nos 26 estados e no Distrito Federal e o grau de confiança é de 95%.\n[…]\nNo dia 25 de abril de 2019, Jair Bolsonaro assinou o decreto que acaba com o horário de verão. Segundo o presidente, o fim do horário diferenciado, por favorecer o relógio biológico, vai aumentar produtividade do trabalhador. Além disso, segundo nota técnica do Ministério de Minas e Energia, o horário de maior consumo de energia no país passou do período da noite para o meio da tarde, em função da popularização do ar-condicionado.\n[…]\nMudança no perfil de consumo: O pico máximo de consumo de eletricidade no Brasil deixou de ocorrer no início da noite (faixa que o horário de verão costumava aliviar) e passou a se concentrar por volta das 15 horas, devido à forte expansão da energia solar e ao uso massivo de aparelhos de ar-condicionado durante o período mais quente do dia, o que reduziu drasticamente a eficácia da política de adiantamento dos relógios.\n[…]\nLista de períodos em que vigorou o horário de verão no Brasil\n[…]\nHorário de verão\n[…]\nFusos horários no Brasil\n[…]\nHorário de verão em Portugal\n[…]\nDecretos sobre o Horário de Verão no Brasil (em português)"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Tamagotchi",
      "descricao": "Bichinho virtual eletrônico em forma de ovo, criado pela empresa japonesa Bandai."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Tamagotchi, bichinho virtual em forma de ovo que precisava ser alimentado e limpo, foi lançado no Japão em que década?",
    "resposta": "Anos noventa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tamagotchi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tamagotchi",
        "situacao": "ok",
        "texto": "Tamagotchi (Japanese: たまごっち; IPA: [tamaɡotꜜtɕi], \"Egg Watch\") is a brand of handheld digital pets marketed since 1996 by Japanese toymaker Bandai, a division of Bandai Namco Holdings. Most Tamagotchi are housed in a small egg-shaped handheld video game with an interface consisting of three buttons, with the goal of raising the pet as it goes through different life stages.\n[…]\nTamagotchi was created in Japan by Akihiro Yokoi of WiZ and Aki Maita of Bandai. They both won the tongue-in-cheek 1997 Ig Nobel Prize for economics, dubbing them the father and mother of Tamagotchi. The first Tamagotchi was released by Bandai on November 23, 1996 (several months after the release of the unsuccessful Apple Pippin console) in Japan. It would then release in the United States on May 1, 1997. Tamagotchi is a keychain-sized virtual pet simulation game.\n[…]\nLearn everything about Tamagotchi with this book (たまごっちのことが全部わかる本 )\n[…]\nThe Tamagotchi was extremely popular globally in 1997-1998 having been referred to as becoming a \"pop culture phenomenon\". The success of the Tamagotchi led to the electronic pet being appointed the Christmas Gift of the Year by the Swedish Retail Institute in November 1997. The toy was especially popular among the high school girls and young women demographics. It also spawned the virtual pet genre and led to many knock-off products or imitators at the time, such as Tiger/Hasbro's Giga Pet.\n[…]\nAs of December 2005, over 15 million units of the Tamagotchi Connection/Plus had been sold. This number rose to 20 million by 2006.\n[…]\nNeopets – Virtual pet site\n[…]\nPou – 2012 Virtual pet game\n[…]\nTamagotchi effect – Development of emotional attachment to machines, robots or software agents\n[…]\nBloch, Linda-Renée; Lemish, Dafna (December 1999). \"Disposable Love: The Rise and Fall of a Virtual Pet\". New Media & Society. 1 (3): 283–303. doi:10.1177/14614449922225591. ISSN 1461-4448."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tamagotchi",
        "situacao": "ok",
        "texto": "Tamagotchi (たまごっち, tamagocchi) é uma franquia de mídia japonesa que consiste em animais de estimação virtual, jogos eletrônicos, animações ​​e outras mídias relacionadas. A franquia se passa em um universo compartilhado no qual humanos coexistem com criaturas alienígenas, denominadas Tamagotchi, vindas de um planeta de mesmo nome. O público-alvo principal da franquia é o infantojuvenil, mas ficou \n[…]\nO Tamagotchi Connection V3 foi lançado em 2005 no Japão e só agora está se espalhando pela Europa. É o novo \"Tamagotchi Connection\", que, além do sensor infravermelho e de jogos e funções adicionais àquelas conhecidas, tem interação com o computador, em um site \"Tamagotchi Town\", onde pode-se adquirir produtos virtuais através dos pontos ganhos em jogos. Não paga nada para entrar e se divertir. Nem para adquirir os produtos virtuais. Estes são armazenados em seu Tamagochi V2.\n[…]\nNo dia 14 de fevereiro de 2013 uma empresa chamada Zakeh, lançou um aplicativo chamado Pou, semelhante ao Tamagotchi, onde cuidamos de um alienígena na forma de um aplicativo gratuito para a plataforma móvel Android, que mais tarde foi lançado para o iOS, onde é pago.\n[…]\nDia 08 de fevereiro de 2018 foi lançada finalmente a versão do jogo para Android, desenvolvido pela Bandai Namco. intitulado como \"My Tamagotchi Forever\" o app pode ser baixado pela Play store, porém ainda não está disponível para o Brasil. Até então, somente no Japão.\n[…]\nDurante o final da década de 1990, as crianças frequentemente levavam os bichinhos digitais Tamagotchi para a escola porque nos dois primeiros lançamentos (Geração 1 e Geração 2), um personagem poderia morrer em menos de meio dia se não recebesse os cuidados adequados. Os professores expressaram preocupação com a interrupção das aulas, bem como a distração geral dos trabalhos escolares e isso acabou levando muitas escolas a banir o produto.\n[…]\nAnimal de estimação virtual",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Fax",
      "descricao": "Aparelho que transmite cópias de documentos por linha telefônica ou telegráfica."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O fax parece coisa do fim do século vinte, mas a primeira patente da máquina, do inventor escocês Alexander Bain, é de qual século?",
    "resposta": "Século dezenove",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fax",
      "https://en.wikipedia.org/wiki/Alexander_Bain_(inventor)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fax",
        "situacao": "ok",
        "texto": "Fax (short for facsimile), sometimes called telecopying or telefax (short for telefacsimile), is the telephonic transmission of scanned printed material (both text and images), normally to a telephone number connected to a printer or other output device.\n[…]\nScottish inventor Alexander Bain worked on chemical-mechanical fax-type devices and in 1846 Bain was able to reproduce graphic signs in laboratory experiments. He received British patent 9745 on May 27, 1843, for his \"Electric Printing Telegraph\". Frederick Bakewell made several improvements on Bain's design and demonstrated a telefax machine. The Pantelegraph was invented by the Italian physicist Giovanni Caselli.\n[…]\nHe introduced the first commercial telefax service between Paris and Lyon in 1865, some 11 years before the invention of the telephone.\n[…]\nIn 1880, English inventor Shelford Bidwell constructed the scanning phototelegraph that was the first telefax machine to scan any two-dimensional original, not requiring manual plotting or drawing. An account of Henry Sutton's \"telephane\" was published in 1896.\n[…]\nIn 1964, Xerox Corporation introduced (and patented) what many consider to be the first commercialized version of the modern fax machine, under the name (LDX) or Long Distance Xerography. This model was superseded two years later with a unit that would set the standard for fax machines for years to come. Up until this point facsimile machines were very expensive and hard to operate. In 1966, Xerox released the Magnafax Telecopiers, a smaller, 46 lb (21 kg) facsimile machine."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alexander_Bain_(inventor)",
        "situacao": "ok",
        "texto": "Alexander Bain (12 October 1810 – 2 January 1877) was a Scottish inventor and engineer who was first to invent and patent the electric clock. He created the first fax machine, known as Bain's facsimile. Bain also installed the railway telegraph lines between Edinburgh and Glasgow.\n[…]\nBain's and Bakewell's laboratory mechanisms reproduced poor quality images and were not viable systems because the transmitter and receiver were never truly synchronized. In 1861, the first practical operating electro-mechanical commercially exploited telefax machine, the Pantelegraph, was invented by the Italian physicist Giovanni Caselli. He introduced the first commercial telefax service between Paris and Lyon at least 11 years before the invention of workable telephones.\n[…]\nBain was buried in the Auld Aisle Cemetery, Kirkintilloch. It was restored in 1959. The headstone initially had an incorrect year of death (1876) which was later corrected to 1877. JD Wetherspoons pub in Wick, close to where Alexander Bain served his apprenticeship, is now named 'The Alexander Bain' after the inventor. Also, as a tribute to his inventions, the main BT building in Glasgow is named Alexander Bain House.\n[…]\nFinlaison, John, An account of some remarkable applications of the electric fluid to the useful arts, by Mr. Alexander Bain; with a vindication of his claim to be the first inventor of the electro-magnetic printing telegraph, and also of the electro-magnetic clock, London, Chapman and Hall, 1843.\n[…]\nU.S. patent 006,837\n[…]\nSignificant Scots: Alexander Bain, electricscotland.com.\n[…]\nAlexander Bain 1811-1877, visitdunkeld.com.\n[…]\nHistory of the Fax Machine: Alexander Bain received the first patent for a fax machine in 1843 Archived 15 March 2009 at Archive-It, inventors.about.com."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fax",
        "situacao": "ok",
        "texto": "Fax, faxe, telefax (abreviaturas do termo latino facsimile e telefacsimile) ou telecópia é uma tecnologia das telecomunicações usada para a transferência remota de documentos através da rede telefônica.\n[…]\nA ideia de transmitir e reproduzir documentos à longa distância foi patenteada por Alexander Bain, em 1843. Da união da ideia de Bain com aparelho telefônico criado por Alexander Graham Bell, o primeiro protótipo do fac-símile, mais conhecido como fax, foi criado nos Laboratórios Bell, em 1926.\n[…]\nEm 1947, Gabriel Casotti, especialista em telegrafia sem fio, produziu o primeiro aparelho de fax, com a ajuda da agência de notícias Associated Newspapers.\n[…]\nEm 1949, a Muirhead instalou o primeiro sistema de fax no Japão. E no ano 1973, este começou a ser produzido em grande escala.\n[…]\nUma \"máquina de fax\" normalmente consiste de um scanner, um modem, uma impressora e uma linha telefônica em um só equipamento. O scanner converte o arquivo impresso em uma imagem digital; o modem envia esta imagem pela linha telefônica para outra máquina de fax; e a impressora desta máquina produz uma cópia do documento recebido.\n[…]\nEm muitos ambientes corporativos, as máquinas de fax foram substituídas pelos servidores de fax e outros sistemas computadorizados capazes de receber e armazenar fax eletrônicos que podem ser impressos ou reenviados via e-mail para terceiros. Tais sistemas têm a vantagem de reduzir custos, uma vez que diminuem impressões desnecessárias e gastos com ligações telefônicas das máquinas de fax.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Lentes bifocais",
      "descricao": "Lentes de óculos com duas regiões de graus diferentes, uma para longe e outra para perto."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que cientista e político, um dos pais da independência dos Estados Unidos, é tradicionalmente apontado como o inventor das lentes bifocais?",
    "resposta": "Benjamin Franklin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bifocals"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bifocals",
        "situacao": "ok",
        "texto": "Bifocals are eyeglasses with two distinct optical powers correcting vision at both long and short distances. Bifocals are commonly prescribed to people with presbyopia who also require a correction for myopia, hyperopia or astigmatism.\n[…]\nBenjamin Franklin is generally credited with the invention of bifocals. One account states that Franklin cut his lenses in half so that he could follow speakers of French at court by reading their lips.\n[…]\nHistorians have produced some evidence to suggest that others may have come before him in the invention; however, a correspondence between George Whatley and John Fenno, editor of the Gazette of the United States, suggested that Franklin had indeed invented bifocals, and perhaps 50 years earlier than had been originally thought. However, the College of Optometrists concluded:\n[…]\nUnless further evidence emerges all we can say for certain is that Franklin was one of the first people to wear split bifocals and this act of wearing them caused his name to be associated with the type from an early date. This no doubt contributed greatly to their popularisation. The evidence implies, however, that when he sought to order lenses of this type the London opticians were already familiar with them.\n[…]\nOther members of Franklin's circle of British friends may have worn them even earlier, from the 1760s, but it is at best uncertain (and arguably improbable?) that split bifocal lenses had a famous gentleman inventor. Since many inventions are developed independently by more than one person, it is possible that the invention of bifocals may have been such a case.\n[…]\nJohn Isaac Hawkins, the inventor of trifocal lenses, coined the term bifocals in 1824 and credited Benjamin Franklin."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lente_bifocal",
        "situacao": "ok",
        "texto": "Lentes bifocais são óculos com dois distintos potências ópticas. Lentes bifocais são normalmente prescritas para pessoas com presbiopia que também requer uma correção para miopia, hipermetropia e/ou astigmatismo.\n[…]\nBenjamin Franklin é creditado geralmente pela invenção da lente bifocal. Historiadores obtiveram algumas evidências sugerindo que outras pessoas podem ter chegado antes de Franklin à invenção; contudo, uma correspondência entre George Whatley e John Fenno, editor do Gazette of the United States, sugere que Franklin inventou realmente a lente bifocal, e talvez 50 anos antes do que se pensava originalmente.\n[…]\nComo diversas invenções são desenvolvidas independentemente por mais de uma pessoa, é possível que a invenção das lentes bifocais seja um destes casos. No entanto, Benjamin Franklin foi um dos primeiros a usar lentes bifocais, e as correspondências de Franklin levam a crer que ele inventou-as independentemente, indiferentemente de ser o primeiro a apresentar tal invenção.\n[…]\nJohn Isaac Hawkins, inventor das lentes trifocais, cunhou o termo bifocal em 1824 e o creditou ao Dr. Franklin.\n[…]\nLetocha, Charles E. (1990). «The Invention and Early Manufacture of Bifocals». Survey of Ophthalmology. 35 (3): 226–235. PMID 2274850. doi:10.1016/0039-6257(90)90092-A\n[…]\nFranklin's letters to Whatley concerning double spectacles.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Freio de segurança do elevador",
      "descricao": "Mecanismo que trava a cabine do elevador caso o cabo se rompa, demonstrado em 1854 em Nova York."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1854, numa feira em Nova York, que americano subiu numa plataforma e mandou cortar o cabo para provar seu freio de segurança para elevadores?",
    "resposta": "Elisha Otis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Elisha_Otis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elisha_Otis",
        "situacao": "ok",
        "texto": "Elisha Graves Otis (August 3, 1811 – April 8, 1861) was an American industrialist and founder of the Otis Elevator Company. In 1853, he invented a safety device that prevents elevators from falling if the hoisting cable fails. On March 23, 1857, he installed the first safety elevator for passenger service in the store of E.V. Haughwout & Co. in New York City.\n[…]\nIn 1845, Otis married Elizabeth Boyd and moved to Albany, New York. There, he worked as a master mechanic in a bedstead factory and invented an automatic turner to make bed posts four times faster than by hand. In 1848, Otis started his business, Hudson Manufactory, to produce and market his invention. During this period, he also invented a railway safety brake, however the business only lasted two years.\n[…]\nBy 1852, he had moved to Yonkers, New York to work at the Maize & Burns bedstead factory installing machinery. The factory needed a hoist to lift heavy equipment to the upper floor, but this posed serious safety issues. In response, Otis invented the safety elevator, which automatically comes to a halt if the hoisting rope breaks. The following year, he left the factory and started his own company, the Otis Elevator Company.\n[…]\nOtis contracted diphtheria and died on April 8, 1861; he was 49 years old. He was buried in Oakland Cemetery in Yonkers, New York.\n[…]\nAn Otis Elevator Company worker coined the term \"escalator\" to refer to continuous-loop moving staircases that could either ascend or descend. The company was acquired by United Technologies in 1976. In April 2020, Otis Elevators Company was spun off from United technology to be an independent elevator company.\n[…]\nThe World War II U.S. Liberty ship SS Elisha Graves Otis was named after him."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Elisha_Otis",
        "situacao": "ok",
        "texto": "Elisha Graves Otis (Halifax, 3 de agosto de 1811 – Yonkers, 8 de abril de 1861) foi um industrial norte-americano e fundador da Otis Elevator Company, em 1853, ele inventou um dispositivo de segurança que impede que os elevadores caiam se o cabo de içamento falhar.\n[…]\nOtis não sabia que este simples dispositivo de segurança seria capaz de mudar o mundo, e que por seu invento as cidades seriam capazes de crescerem verticalmente, saltando para o céu.\n[…]\nElisha Otis impressionou multidões ao ordenar que cortassem a única corda que segurava a plataforma onde se encontrava com um machado. A plataforma caiu algumas polegadas, mas parou em seguida. O novo freio de segurança impediu que o elevador se chocasse com o chão, revolucionando toda a indústria.\n[…]\nSr. Otis vendeu os seus primeiros elevadores seguros em 1853. O primeiro elevador de pessoas foi instalado em Nova Iorque em 1857. Após a morte de Elisha, em 1861, seus filhos, Charles e Norton, construíram sua herança, criando a empresa Otis Brothers & Co. em 1867.\n[…]\nA invenção do Sr. Otis aumentou a confiança pública nos elevadores, que foi fundamental no crescimento da construção de arranha-céus. A companhia que ele fundou se tornou a maior companhia de elevadores do mundo. Hoje, é uma unidade da United Technologies Corporation.\n[…]\nOtis contraiu difteria e morreu em 8 de abril de 1861 aos 49 anos.\n[…]\nUm funcionário da Otis Elevator Company cunhou o termo \"escada rolante\" para se referir a escadas móveis em loop contínuo que podem subir ou descer. A empresa foi adquirida pela United Technologies em 1976. Novamente em abril de 2020, a Otis Elevator Company foi separada da United Technologies para se tornar uma empresa independente de elevadores.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Vulcanização",
      "descricao": "Processo químico que aquece a borracha com enxofre para torná-la resistente e elástica, usado na fabricação de pneus."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que americano descobriu a vulcanização da borracha em 1839 e, décadas após sua morte, foi homenageado no nome de uma fabricante de pneus sem ligação com ele?",
    "resposta": "Charles Goodyear",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_Goodyear",
      "https://en.wikipedia.org/wiki/Goodyear_Tire_and_Rubber_Company"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Goodyear",
        "situacao": "ok",
        "texto": "Charles Goodyear (December 29, 1800 – July 1, 1860) was an American self-taught chemist and manufacturing engineer who developed vulcanized rubber, for which he received patent number 3633 from the United States Patent Office on June 15, 1844.\n[…]\nIn 1852, Goodyear went to Europe, a trip that he had long planned, and saw Thomas Hancock, then in the employ of Charles Macintosh & Company. Hancock claimed to have invented vulcanization independently, and received a British patent, initiated in 1843, but finalized in 1844. In 1855, in the last of three patent disputes with fellow British rubber pioneer, Stephen Moulton, Hancock's patent was challenged with the claim that Hancock had copied Goodyear. Goodyear attended the trial.\n[…]\nGoodyear died on July 1, 1860, while traveling to see his dying daughter. After arriving in New York, he was informed that she had already died. He collapsed and was taken to the Fifth Avenue Hotel in New York City, where he died at the age of 59. Goodyear had never made a proper accounting of his debt, and at the time of his death his estate was in almost $200,000 of debt. His son Charles Jr. untangled the mismanaged books, paid off creditors, and provided a modest income for his family.\n[…]\nThe ACS Rubber Division awards a medal named in Goodyear's honor, the Charles Goodyear Medal. The medal honors principal inventors, innovators, and developers whose contributions resulted in a significant change to the nature of the rubber industry.\n[…]\nThe Goodyear welt, a technique in shoemaking, was named after and in honor of its inventor, Charles' son; Charles Goodyear Jr.\n[…]\nVulcanization\n[…]\nWorks by or about Charles Goodyear at the Internet Archive\n[…]\nThe Charles Goodyear Story Archived 2008-05-09 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Goodyear_Tire_and_Rubber_Company",
        "situacao": "ok",
        "texto": "The Goodyear Tire & Rubber Company, commonly known as Goodyear, is an American multinational tire manufacturer headquartered in Akron, Ohio. It develops tires for automobiles, motorcycles, trucks, recreational vehicles, heavy off-road machinery, aviation and military. It also licenses the Goodyear brand to bicycle tire manufacturers, returning from a break in production between 1976 and 2015.\n[…]\nFounded in 1898 by Frank Seiberling, the company was named after American Charles Goodyear (1800–1860), inventor of vulcanized rubber. The first Goodyear tires became popular because they were easily detachable and required little maintenance. Goodyear was a component of the Dow Jones Industrial Average between 1930 and 1999. Since 2021, the company has been the world's third-largest tire manufacturer by annual revenue.\n[…]\nWhen Charles J. Pilliod Jr. became CEO in 1974, he faced a major investment decision regarding the radial tire, which today has a market share of nearly 100%. Despite heavy criticism at the time, Pilliod invested heavily in new factories and tooling to build the radial tire. Sam Gibara, who headed Goodyear from 1996 to 2003, has noted that without the action of Pilliod, Goodyear \"wouldn't be around today.\"\n[…]\n2009: Goodyear Assurance Fuel Max tire introduced in North America\n[…]\nIn sports car racing, Goodyear was the 24 Hours of Le Mans overall winner in 14 editions from 1965 to 1997. It was absent from the race between 2006 and 2018. The brand returned to the FIA World Endurance Championship in 2019, becoming the exclusive supplier for the LMP2 class in 2021 and for the LMGT3 class in 2024. The brand also competed in the Can-Am, IMSA GT Championship, FIA GT Championship and American Le Mans Series among others.\n[…]\nRichard Korman. The Goodyear Story: An Inventor's Obsession and the Struggle for a Rubber Monopoly (2002)\n[…]\nBusiness data for Goodyear Tire and Rubber Company:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_Goodyear",
        "situacao": "ok",
        "texto": "Charles Goodyear (New Haven, 29 de dezembro de 1800 – Nova Iorque, 1 de julho de 1860) foi um inventor estadunidense, conhecido por ter descoberto a vulcanização da borracha.\n[…]\nDe 1834 a 1839, Goodyear trabalhou em qualquer lugar em que pudesse encontrar investidores e muitas vezes mudou-se para locais, principalmente em Nova York, Massachusetts, Filadélfia e Connecticut. Em 1839, Goodyear estava na Eagle India Rubber Company em Woburn, Massachusetts, onde acidentalmente descobriu que a combinação de borracha e enxofre em um fogão quente fazia com que a borracha vulcanizasse.\n[…]\nA fábrica era administrada em grande parte por Nelson e seus irmãos. O cunhado de Charles Goodyear, o Sr. De Forest, um rico fabricante de lã também se envolveu. O trabalho de tornar a invenção prática foi continuado. Em 1844, o processo foi suficientemente aperfeiçoado e a Goodyear recebeu a patente americana número 3 633, que menciona Nova York, mas não Springfield. Também em 1844, o irmão de Goodyear, Henry, introduziu a mistura mecânica da mistura no lugar do uso de solventes.\n[…]\nNo ano de 1852, Goodyear foi para a Europa, uma viagem que havia muito planejado, e viu Thomas Hancock, então empregado pela Charles Macintosh & Company. Hancock alegou ter inventado a vulcanização de forma independente e recebeu uma patente britânica, iniciada em 1843, mas finalizada em 1844. Em 1855, na última das três disputas de patentes com seu colega pioneiro da borracha britânico, Stephen Moulton, A patente de Hancock foi contestada com a alegação de que Hancock copiou Goodyear.\n[…]\nBiografia de Charles Goodyear",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Braille",
      "descricao": "Sistema de escrita e leitura tátil para pessoas cegas, formado por pontos em relevo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1824, que jovem francês, cego desde a infância, criou um sistema de leitura e escrita com pontos em relevo?",
    "resposta": "Louis Braille",
    "fonte": [
      "https://en.wikipedia.org/wiki/Braille",
      "https://en.wikipedia.org/wiki/Louis_Braille"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Braille",
        "situacao": "ok",
        "texto": "Braille ( BRAYL; French: [bʁaj] ) is a tactile writing system used by blind or visually impaired people. It can be read either on embossed paper or by using refreshable braille displays that connect to computers and smartphone devices. Braille can be written using a slate and stylus, a braille writer, an electronic braille notetaker or with the use of a computer connected to a braille embosser. Fo\n[…]\nBraille is named after its creator, Louis Braille, a Frenchman who lost his sight as a result of a childhood accident. In 1824, at the age of fifteen, he developed the braille code based on the French alphabet as an improvement on night writing. He published his system, which subsequently included musical notation, in 1829. The second revision, published in 1837, was the first binary form of writing developed in the modern era.\n[…]\nHistorically, there have been three principles in assigning the values of a linear script (print) to Braille: Using Louis Braille's original French letter values; reassigning the braille letters according to the sort order of the print alphabet being transcribed; and reassigning the letters to improve the efficiency of writing in braille.\n[…]\nEvery year on 4 January, World Braille Day is observed internationally to commemorate the birth of Louis Braille and to recognize his efforts. Although the event is not considered a public holiday, it has been recognized by the United Nations as an official day of celebration since 2019.\n[…]\nThere is a variety of contemporary electronic devices that serve the needs of blind people that operate in Braille, such as refreshable braille displays and braille e-books that use different technologies for transmitting graphic information of different types (pictures, maps, graphs, texts, etc.).\n[…]\nBraille Part 1 Text To Speech For The Visually Impaired YouTube\n[…]\nBraille information and advice – Sense UK\n[…]\nBraille at Omniglot"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Louis_Braille",
        "situacao": "ok",
        "texto": "Louis Braille ( BRAYL; French: [lwi bʁɑj] ; 4 January 1809 – 6 January 1852) was a French educator and the inventor of a reading and writing system named after him, braille, intended for use by visually impaired people. His system is used worldwide and remains virtually unchanged to this day.\n[…]\nThe immense personal legacy of Louis Braille was described in a 1952 essay by T. S. Eliot:\n[…]\nA Google Doodle for Louis Braille's 197th birthday in 2006 was shown on Google's homepage, spelling \"Google\" in braille.\n[…]\nWorld Braille Day is celebrated every year on Braille's birthday, 4 January, since 2019.\n[…]\nIn music, Braille's life was subject of the song Merci, Louis, composed by the Halifax singer-songwriter Terry Kelly, chair of the Canadian Braille Literacy Foundation. The Braille Legacy, a musical which tells the story of Louis Braille, directed by Thom Southerland and starring Jérôme Pradon, debuted at the Charing Cross Theatre in April 2017.\n[…]\nBickel, Lennard (1989). Triumph Over Darkness: The Life of Louis Braille. Leicester: Ulverscroft. ISBN 978-0708920046. (also large print)\n[…]\nKugelmass, J. Alvin (1951). Louis Braille: Windows for the Blind. New York: Julian Messner Inc. OCLC 8989771.\n[…]\nMellor, C. Michael (2006). Louis Braille: A Touch of Genius. Boston: National Braille Press. ISBN 978-0-939173-70-9.\n[…]\nWeygand, Zina (2009). The Blind in French Society: From the Middle Ages to the century of Louis Braille. Stanford, CA: Stanford University Press. ISBN 978-0-8047-5768-3.\n[…]\nHenri, Pierre (1952). La vie et l'oeuvre de Louis Braille: Inventeur de l'alphabet des aveugles (1809–1852) (in French) by. Paris: Presses universitaires de France. OCLC 299733373.\n[…]\nMusée Louis Braille\n[…]\nLouis Braille Online Museum – American Foundation for the Blind (AFB)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Braille",
        "situacao": "ok",
        "texto": "Braile ou braille é um sistema de escrita tátil utilizado por pessoas cegas ou com baixa visão. É tradicionalmente escrito em papel relevo. Os usuários do sistema Braille podem ler em telas de computadores e em outros suportes eletrônicos graças a um mostrador em braile atualizáveis. Eles podem escrever em braile com reglete e punção, máquina de escrever em braille, notetaker em braille ou computa\n[…]\nO Braille recebeu este nome devido ao seu criador Louis Braille, que perdeu a visão em um acidente na infância. Em 1824, Braille desenvolveu aos 15 anos um código para o alfabeto francês em uma melhoria para a escrita noturna. Em 1829, ele publicou o sistema, que incluía a notação musical. Em 1837, ele publicou uma segunda revisão, que foi a primeira forma binária de escrita desenvolvida na era moderna.\n[…]\nA solução de Braille foi usar células de 6 pontos e atribuir um padrão específico para cada letra do alfabeto. Inicialmente, o Braille era uma transliteração um–para–um da ortografia francesa, mas logo várias abreviaturas, contrações e até mesmo logogramas foram desenvolvidos. Isto criou um sistema muito mais parecido com a taquigrafia. O sistema inglês expandido chamado de Braille de grau 2 estava completo em 1905.\n[…]\nPara leitores cegos, o Braille é um sistema de escrita independente, ao invés de um código de ortografia impressa.\n[…]\nHistoricamente houve três princípios na atribuição dos valores de um script linear (impressão) para o Braille: usando os valores originais da letra francesa de Louis Braille, reatribuir as letras braille de acordo com a ordem de classificação do alfabeto de impressão que está sendo transcrito e reatribuir as letras para melhorar a eficiência da escrita em Braille.\n[…]\nTodos os anos é comemorado em 4 de janeiro o Dia Mundial do Braille em memória ao nascimento de Louis Braille e seus esforços. No entanto, o evento não é considerado um feriado público.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Dia das Mães no Brasil",
      "descricao": "Data comemorativa brasileira em homenagem às mães, celebrada no segundo domingo de maio."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que presidente brasileiro oficializou, por decreto em 1932, o segundo domingo de maio como Dia das Mães?",
    "resposta": "Getúlio Vargas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_das_M%C3%A3es"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_das_M%C3%A3es",
        "situacao": "ok",
        "texto": "Dia das Mães (português brasileiro) ou Dia da Mãe (português europeu) é uma data comemorativa que homenageia anualmente a figura familiar materna (mãe) e a maternidade. A data de comemoração varia de acordo com o país. Em Portugal e nos PALOP, é comemorado maioritariamente no primeiro domingo do mês de maio, embora muitas igrejas protestantes, em Portugal, o façam no segundo domingo do mesmo mês, \n[…]\nJá no Brasil, como também na Itália, por exemplo, é no segundo domingo do mês de maio que o dia é celebrado.\n[…]\nReconhecida como idealizadora do Dia das Mães na sua forma atual, a metodista Anna Jarvis, iniciou uma campanha para que o Dia das Mães fosse um feriado reconhecido. Ela obteve sucesso ao torná-lo reconhecido nos Estados Unidos em 8 de maio de 1914, quando a resolução Joint Resolution Designating the Second Sunday in May as Mother's Day foi aprovada pelo Congresso dos Estados Unidos, instaurando o segundo domingo do mês de maio como Dia das Mães.\n[…]\nAos poucos, a festividade foi se espalhando pelo país e, em 1932, o então presidente Getúlio Vargas, a pedido das feministas da Federação Brasileira pelo Progresso Feminino, oficializou a data no segundo domingo de maio. A iniciativa fazia parte da estratégia das feministas de valorizar a importância das mulheres na sociedade, animadas com as perspectivas que se abriram a partir da conquista do direito de votar, em fevereiro do mesmo ano.\n[…]\nNo Brasil e nos Estados Unidos o Dia das Mães é a segunda melhor data do comércio, depois do Natal. A National Retail Federation (Federação Nacional de Varejo norte-americana) estimou para 2012 que os gastos para o Dia das Mães devem ultrapassar $18,6 bilhões ($152 por pessoa) nos Estados Unidos.\n[…]\nMedia relacionados com Dia das Mães no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Dia dos Pais no Brasil",
      "descricao": "Data comemorativa brasileira em homenagem aos pais, celebrada no segundo domingo de agosto."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1953, o Dia dos Pais foi comemorado pela primeira vez no Brasil por iniciativa de um publicitário de qual jornal carioca?",
    "resposta": "O Globo",
    "distratores": [
      "Jornal do Brasil",
      "Última Hora",
      "Correio da Manhã"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_dos_Pais"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_dos_Pais",
        "situacao": "ok",
        "texto": "O Dia do Pai (em Portugal e na Europa em geral) ou Dia dos Pais (no Brasil) é uma data comemorativa que homenageia anualmente os pais. A data varia de acordo com os países. Em Portugal e na Espanha é celebrada no dia 19 de março, enquanto no Brasil é celebrado no segundo domingo de agosto. Nos Estados Unidos e na Inglaterra é celebrado no terceiro domingo de junho.\n[…]\nEm alguns países ocidentais, geralmente coincide com o dia cristão em que se comemora o dia de São José, esposo da Virgem Maria e pai adotivo de Jesus Cristo.\n[…]\nCredita-se a criação da data a uma americana chamada Sonora Smart Dodd, de Spokane, Washington, por volta de 1910. Tal ideia teria surgido enquanto ouvia um sermão no feriado do Dia das Mães e com o intuito de homenagear o seu pai. O presidente dos Estados Unidos da América, Calvin Coolidge, deu seu apoio público ao Dia dos Pais em 1924, porém, somente em 1972, o então presidente Richard Nixon, estabeleceu-o como feriado nacional.\n[…]\nNo Brasil, é comemorado no segundo domingo do mês de agosto. No país, a implementação da data é atribuída ao publicitário Sylvio Bhering, Diretor do jornal O Globo e da Rádio Globo, com o propósito de atrair anúncios de produtos que poderiam ser dados de presente.[carece de fontes]? A data escolhida foi o dia de São Joaquim, pai da Virgem Maria, sendo festejada pela primeira vez no dia 16 de agosto de 1953.\n[…]\nNa tradição antiga, diz-se que a data teria se originado na Babilônia há mais de quatro mil anos. Segundo os relatos, o jovem Elmesu, filho do rei Nabucodonosor, teria moldado em argila o primeiro cartão do Dia dos Pais. A partir daí, a data teria se tornado uma festa nacional."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Papel",
      "descricao": "Material fino feito de fibras vegetais prensadas, usado para escrever, imprimir e embalar."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que funcionário da corte imperial chinesa é tradicionalmente apontado como o inventor do papel, por volta do ano cento e cinco?",
    "resposta": "Cai Lun",
    "distratores": [
      "Confúcio",
      "Lao-Tsé",
      "Sun Tzu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cai_Lun"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cai_Lun",
        "situacao": "ok",
        "texto": "Cai Lun (Chinese: 蔡伦; courtesy name: Jingzhong (敬仲); c. 50–62 – 121 CE), formerly romanized as Ts'ai Lun, was a Chinese eunuch court official of the Eastern Han dynasty. He occupies a pivotal place in the history of paper due to his addition of pulp via tree bark and hemp ends which resulted in the large-scale manufacture and worldwide spread of paper.\n[…]\nCai's improvements to paper-making are considered to have had an enormous impact on human history, and of those who created China's Four Great Inventions—the compass, gunpowder, papermaking and printing—Cai is the only early figure whose name is known. Although in China he is revered in ancestor worship, deified as the god of papermaking, and appears in Chinese folklore, he is mostly unknown outside of East Asia. His hometown in Leiyang remains an active center of paper production.\n[…]\nDou then ordered Cai to interrogate Consort Song and her sister, another imperial consort, to force a confession; they both killed themselves. Believing Dou's accusation, Zhang replaced Liu Qing with Prince Zhao as heir.\n[…]\nUnlike many Chinese inventions that were created independently in Western Europe, the modern papermaking process was a wholly Chinese product and gradually spread via the Arabs to Europe, where it also saw widespread manufacturing by the 12th century. On 2 August 2010, the International Astronomical Union honored Cai's legacy by naming a crater on the Moon after him.\n[…]\nOf those who originated China's Four Great Inventions of the ancient world—the compass, gunpowder, papermaking and printing—the only early figure known is one of papermaking, Cai Lun. Additionally, in comparison to other Chinese inventions such as the writing brush and ink, the development of paper is the best documented in literary sources."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cai_Lun",
        "situacao": "ok",
        "texto": "Cai Lun foi um alto funcionário da corte imperial, na dinastia Han, que inventou o papel a partir de casca de amoreira e fibra de bambu, no ano 105.\n[…]\nNa China é tradicionalmente considerado o inventor do papel, pois sob sua administração foi aperfeiçoada a técnica de fabricação do material utilizado para a escrita de documentos, que passou a ter propriedades semelhantes às do papel atual, bem diferentes do papiro e do pergaminho usados ​​antigamente.\n[…]\nEmbora as primeiras formas de papel existissem na China a partir do século II a.C., ele foi responsável pela primeira melhoria e padronização significativa da fabricação de papel, adicionando novos materiais essenciais à sua composição. Segundo as crônicas históricas chinesas, a invenção do papel teria ocorrido no ano 105 d.C.\n[…]\nConsidera-se que as melhorias de Cai na fabricação de papel tiveram um enorme impacto na história humana, e daqueles que criaram as Quatro Grandes Invenções da China - a bússola, a pólvora, a fabricação de papel e a impressão - Cai é o único inventor cujo nome é conhecido. Embora na China ele seja reverenciado no culto aos ancestrais, deificado como o deus da fabricação de papel e apareça no folclore chinês, ele é praticamente desconhecido fora do leste da Ásia.\n[…]\nSua cidade natal em Leiyang continua sendo um centro ativo de produção de papel.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Telefone celular",
      "descricao": "Telefone portátil sem fio que se conecta a uma rede de antenas, cuja primeira ligação foi feita em 1973."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1973, numa calçada de Nova York, o engenheiro Martin Cooper fez a primeira ligação de um celular portátil. Em que empresa ele trabalhava?",
    "resposta": "Motorola",
    "distratores": [
      "Nokia",
      "Ericsson",
      "IBM"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Martin_Cooper_(inventor)",
      "https://en.wikipedia.org/wiki/Motorola_DynaTAC"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Martin_Cooper_(inventor)",
        "situacao": "ok",
        "texto": "Martin Cooper (born December 26, 1928) is an American engineer. He is a pioneer in the wireless communications industry, especially in radio spectrum management, with eleven patents in the field.\n[…]\nTop management at Motorola supported Cooper's mobile phone concept, investing $100 million between 1973 and 1993 before any revenues were realized. Cooper assembled a team that designed and assembled a product in less than 90 days. That original handset, called the DynaTAC 8000x (DYNamic Adaptive Total Area Coverage) weighed 2.5 pounds (1.1 kg), measured 10 inches (25 cm) long and was dubbed \"the brick\" or \"the shoe\" phone.\n[…]\nCooper is the lead inventor named on \"radio telephone system\" filed on October 17, 1973, with the U.S. Patent Office and later issued as U.S. Patent 3,906,166. John Francis Mitchell, Motorola's Chief of Portable Communication Products (and Cooper's Manager and Mentor) and the engineers who worked for Cooper and Mitchell are also named on the patent.\n[…]\nThe call connected him to a base station Motorola had installed on the roof of the Burlington House (now the AllianceBernstein Building) and into the AT&T land-line telephone system. Reporters and onlookers watched as Cooper dialed the number of his chief competitor Dr. Joel S. Engel at AT&T. \"Joel, this is Marty. I'm calling you from a cell phone, a real handheld portable cell phone.\" That public demonstration landed the DynaTAC on the July 1973 cover of Popular Science Magazine.\n[…]\nMotorola gained Federal Communications Commission (FCC) approval for cellular licenses to be assigned to competing entities and prevented an AT&T monopoly on cellular service.\n[…]\nMedia related to Martin Cooper at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Motorola_DynaTAC",
        "situacao": "ok",
        "texto": "The DynaTAC is a series of cellular telephones manufactured by Motorola from 1983 to 1994. Unveiled on March 6, 1983, the DynaTAC was the first commercially available handheld cellular phone. A full charge took roughly 10 hours, and it offered 30 minutes of talk time. It also offered an LED display for dialing or recall of one of 30 phone numbers. It was priced at US$3,995 in 1984, its commercial \n[…]\nMotorola had long produced mobile telephones for cars that were large and heavy and consumed too much power to allow their use without the automobile's engine running. Mitchell's team, which included Martin Cooper, developed portable cellular telephony, and Mitchell was among the Motorola employees granted a patent for this work in 1973; the first call on the prototype was completed, reportedly, to a wrong number.\n[…]\nMotorola announced the development of the Dyna-Tac in April 1973, saying that it expected to have it fully operational within three years. Motorola said that the Dyna-Tac would weigh 3 pounds (1.4 kg) and would cost between $60 and $100 per month. Motorola predicted that the cost would decrease to $10 or $12 per month in no more than 20 years.\n[…]\nWhile Motorola was developing the cellular phone itself, from 1968 to 1983, Bell Labs worked on the system called AMPS, while others designed cell phones for that and other cellular systems. Martin Cooper, a former general manager for the systems division at Motorola, led a team that produced the DynaTAC 8000X, the first commercially available cellular phone small enough to be easily carried, and made the first phone call from it. The DynaTAC 8000X received approval from the U.S.\n[…]\nMotorola also offered a one-hour desktop charger, though the battery could get quite hot while charging at this accelerated rate. In some cases, this could cause major problems with the battery, occasionally short circuiting it and rendering it unusable."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Martin_Cooper",
        "situacao": "ok",
        "texto": "Martin Cooper (Chicago, 26 de dezembro de 1928) é um engenheiro eletrotécnico e designer norte-americano, considerado o \"pai\" do telefone celular(pt-BR) ou telemóvel(pt-PT?) - distinto do telefone veicular. Inspirado no seriado de TV Jornada nas Estrelas.\n[…]\nCooper é o CEO e fundador da ArrayComm, empresa que atua na pesquisa tecnológica da antena inteligente e no aperfeiçoamento de redes  wireless. Foi também diretor de Pesquisa e Desenvolvimento da Motorola.\n[…]\nNo meio da Sexta Avenida, no dia 03 de abril de 1973, em Nova Iorque, antes de entrar na coletiva de imprensa que faria o anúncio do primeiro celular, Cooper fez a chamada histórica usando o aparelho Motorola DynaTAC – um equipamento \"móvel\" que pesava quase 2,5 kg e tinha bateria com autonomia para apenas 20 minutos de chamada de voz.\n[…]\nMuitos anos depois, Cooper comentaria: \"O primeiro modelo de telefone celular pesava praticamente um quilo e você só podia falar 20 minutos nele antes que a bateria se esgotasse. Mas era tempo suficiente, porque você não aguentaria segurar o aparelho por mais tempo que isso\".\n[…]\n. ... 4.↑ Celular com o peso de 2,5 quilos e 20 minutos de chamada de voz.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Termômetro de mercúrio",
      "descricao": "Termômetro de vidro em que uma coluna de mercúrio se dilata para indicar a temperatura."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1714, que físico criou o termômetro de mercúrio e, anos depois, deu seu nome a uma escala de temperatura?",
    "resposta": "Daniel Fahrenheit",
    "distratores": [
      "Anders Celsius",
      "Lord Kelvin",
      "Galileu Galilei"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Daniel_Gabriel_Fahrenheit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Daniel_Gabriel_Fahrenheit",
        "situacao": "ok",
        "texto": "Daniel Gabriel Fahrenheit FRS (24 May 1686 – 16 September 1736) was a physicist, inventor, and scientific instrument maker. He was born in Poland to a family of German origin, although he spent much of his life in the Dutch Republic. Fahrenheit significantly improved the design and manufacture of thermometers; his were accurate and consistent enough that different observers, each with their own Fa\n[…]\nFahrenheit was born in Danzig (Gdańsk), then in the Polish–Lithuanian Commonwealth. The Fahrenheits were a German Hanse merchant family who had lived in several Hanseatic cities. Fahrenheit's great-grandfather had lived in Rostock, and research suggests that the Fahrenheit family originated in Hildesheim. Daniel's grandfather Reinhold Fahrenheit moved from Kneiphof in Königsberg (then in the Duchy of Prussia) to Danzig and settled there as a merchant in 1650.\n[…]\nHis son, Daniel Fahrenheit (the father of Daniel Gabriel), married Concordia Schumann, the daughter of a well-known Danzig business family. Daniel was the eldest of the five Fahrenheit children (two sons, three daughters) who survived childhood. His sister, Virginia Elisabeth Fahrenheit, married Benjamin Krüger and was the mother of Benjamin Ephraim Krüger, a clergyman and playwright.\n[…]\nFahrenheit came up with the idea that mercury boils around 300 degrees on this temperature scale. Work by others showed that water boils about 180 degrees above its freezing point. The Fahrenheit scale later was redefined to make the freezing-to-boiling interval exactly 180 degrees, a convenient value as 180 is a highly composite number, meaning that it is evenly divisible into many fractions.\n[…]\nSoulen Jr, R. J. \"A brief history of the development of temperature scales: the contributions of Fahrenheit and Kelvin.\" Superconductor Science and Technology 4.11 (1991): 696-699.\n[…]\nFahrenheit's papers in the Royal Society Publishing (in Latin)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gabriel_Fahrenheit",
        "situacao": "ok",
        "texto": "Daniel Gabriel Fahrenheit FRS (24 de maio de 1686 – 16 de setembro de 1736) foi um físico, inventor e fabricante de instrumentos científicos. Nasceu na Polônia em uma família de origem alemã, embora tenha passado a maior parte de sua vida nos Países Baixos.\n[…]\nFahrenheit melhorou significativamente o design e a fabricação de termômetros; os seus eram precisos e consistentes o suficiente para que diferentes observadores, cada um com seu próprio termômetro Fahrenheit, pudessem comparar de forma confiável as medições de temperatura entre si. A Fahrenheit também é creditada a produção dos primeiros termômetros de mercúrio em vidro bem-sucedidos, que eram mais precisos do que os termômetros de álcool de sua época e de design geralmente superior.\n[…]\nFahrenheit começou a experimentar com termômetros de mercúrio em 1713. Também nessa época, Fahrenheit usava uma versão modificada da escala de Rømer para seus termômetros, que mais tarde evoluiria para sua própria escala Fahrenheit. Em 1714, Fahrenheit deixou Danzig para Berlim e Dresden para trabalhar em estreita colaboração com os sopradores de vidro locais.\n[…]\nFahrenheit teve a ideia de que o mercúrio ferve cerca de 300 graus nessa escala de temperatura. Trabalhos de outros mostraram que a água ferve cerca de 180 graus acima de seu ponto de congelamento. A escala de Fahrenheit mais tarde foi redefinida para tornar o intervalo congelamento-ebulição exatamente 180 graus, um valor conveniente, pois 180 é um número altamente composto, o que significa que é uniformemente divisível em muitas frações.\n[…]\n«Carta de Daniel Gabriel Fahrenheit para Carl Linnaeus, 7 de maio de 1736» 🔗 (em alemão)\n[…]\nFahrenheit's papers in the Royal Society Publishing",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Pascalina",
      "descricao": "Calculadora mecânica de engrenagens construída no século dezessete por Blaise Pascal."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Ainda jovem, para ajudar o pai, que era cobrador de impostos, que pensador francês do século dezessete construiu uma calculadora mecânica?",
    "resposta": "Blaise Pascal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pascal%27s_calculator"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pascal%27s_calculator",
        "situacao": "ok",
        "texto": "The Pascaline (also known as the arithmetic machine or Pascal's calculator) is a mechanical calculator invented by Blaise Pascal in 1642. Pascal was led to develop a calculator by the laborious arithmetical calculations required by his father's (Étienne Pascal) work as the supervisor of taxes in Rouen, France. He designed the machine to add and subtract two numbers and to perform multiplication an\n[…]\nNine Pascal calculators presently exist; most are on display in European museums.\n[…]\nBlaise Pascal began to work on his calculator in 1642, when he was 18 years old. He had been assisting his father, who worked as a tax commissioner, and sought to produce a device which could reduce some of his workload. Pascal received a Royal Privilege in 1649 that granted him exclusive rights to make and sell calculating machines in France.\n[…]\nPascal lived in France during France's Ancien Régime. During his time, craftsmen in Europe increasingly organised into guilds, such as the English clockmakers who formed the Clockmakers guild in 1631, half-way through Pascal's efforts to create the calculator. This affected Pascal’s ability to recruit talent as guilds often reduced the exchange of ideas and trade; sometimes, craftsmen would withhold their labour altogether to rebel against the nobles.\n[…]\nBesides being the first calculating machine made public during its time, the Pascaline is also:\n[…]\nIn 1957, Franz Hammer, a biographer of Johannes Kepler, announced the discovery of two letters that Wilhelm Schickard had written to his friend Johannes Kepler in 1623 and 1624 which contain the drawings of a previously unknown working calculating clock, predating Pascal's work by twenty years. The 1624 letter stated that the first machine to be built by a professional had been destroyed in a fire during its construction and that he was abandoning his project.\n[…]\nDetailed animation explaining how the Pascaline works."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pascalina",
        "situacao": "ok",
        "texto": "A pascalina (em francês: pascaline), também conhecida como máquina de Pascal, calculadora de Pascal e máquina aritmética, é uma calculadora mecânica inventada por Blaise Pascal em 1642. Pascal foi levado a desenvolver uma calculadora pelos trabalhosos cálculos aritméticos exigidos pelo trabalho de seu pai como supervisor de impostos em Ruão. Ele projetou a máquina para adicionar e subtrair dois nú\n[…]\nA calculadora de Pascal foi especialmente bem sucedida no projeto de seu mecanismo de transporte, que adiciona 1 a 9 em um mostrador e carrega 1 para o próximo mostrador quando o primeiro mostrador muda de 9 para 0. Sua inovação tornou cada dígito independente do estado do mostrador, permitindo que vários carregamentos passem rapidamente de um dígito para outro, independentemente da capacidade da máquina.\n[…]\nPascal projetou a máquina em 1642. Após 50 protótipos, apresentou o aparelho ao público em 1645, dedicando-o a Pierre Séguier, então chanceler da França. Pascal construiu cerca de vinte outras máquinas durante a década seguinte, muitas das quais eram novas versões que introduziam melhorias ao seu projeto original.\n[…]\nEm 1649, o rei Luís XIV da França concedeu a Pascal um privilégio real (semelhante a uma patente), que concedia o direito exclusivo de projetar e fabricar máquinas de calcular na França. Nove calculadoras Pascal existem atualmente; a maioria está em exibição em museus europeus.\n[…]\nMuitas calculadoras posteriores foram diretamente inspiradas ou moldadas pelas mesmas influências históricas que levaram à invenção de Pascal. Gottfried Leibniz inventou suas rodas de Leibniz depois de 1671, depois de tentar adicionar um recurso de multiplicação automática à pascalina. Em 1820, Thomas de Colmar projetou seu aritmômetro, a primeira calculadora mecânica suficientemente forte e confiável para ser usada diariamente em um ambiente de escritório.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Xampu",
      "descricao": "Produto líquido de higiene usado para lavar os cabelos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra xampu vem de uma língua da Índia, por meio do inglês. O que significava originalmente o verbo que deu origem a ela?",
    "resposta": "Massagear",
    "fonte": [
      "https://en.wikipedia.org/wiki/Shampoo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shampoo",
        "situacao": "ok",
        "texto": "Shampoo () is a hair care product, typically in the form of a viscous liquid, that is formulated to be used for cleaning (scalp) hair. Less commonly, it is available in solid bar format (not to be confused with \"dry shampoo\" which is a separate product). Shampoo is used by applying it to wet hair, massaging the product in the hair, roots and scalp, and then rinsing it out. Some users may follow sh\n[…]\nThe word shampoo entered the English language during the colonial era in India. It dates to 1762 and derives from the Hindi word cā̃pō (चाँपो, pronounced [tʃãːpoː]) or shampoo, itself derived from the Sanskrit root chapati (चपति), which means 'to press, knead, or soothe'. Shampoo is a type of traditional Indian head massage using hair oil.\n[…]\nDean Mahomed, an Indian  traveller, surgeon, and entrepreneur, is credited with introducing the practice of shampoo or \"shampooing\" (a type of traditional Indian head massage using hair oils) to Britain. In 1814, Mahomed, with his Irish wife Jane Daly, were established as shampooing bathhouse keepers, and a few year later in 1821 opened the first commercial shampooing vapour masseur bath in England, in Brighton.\n[…]\nOriginally, soap and shampoo were very similar products; both containing the same naturally derived surfactants, a type of detergent. Modern shampoo as it is known today was first introduced in the 1930s with Drene, the first shampoo using synthetic surfactants instead of soap.\n[…]\nMany shampoos are pearlescent. This effect is achieved by the addition of tiny flakes of suitable materials, e.g. glycol distearate, chemically derived from stearic acid, which may have either animal or vegetable origins. Glycol distearate is a wax. Many shampoos also include silicone to provide conditioning benefits.\n[…]\nMedia related to Shampoo at Wikimedia Commons\n[…]\nQuotations related to Shampoo at Wikiquote\n[…]\nThe dictionary definition of shampoo at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xampu",
        "situacao": "ok",
        "texto": "O xampu (português brasileiro) ou champô (português europeu) (do inglês, shampoo, que vem do hindi, chāmpo (चाँपो [tʃãːpoː]) ''massageie com as mãos'') tem a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo, sujeira e pele morta do couro cabeludo que se agregam ao cabelo ao longo do tempo.\n[…]\nA palavra xampu data de 1877, e sua origem acredita-se vir da palavra hindi chāmpô (चाँपो [tʃãːpoː]) durante o período em que foram colonizados. Isso data de 1762, que significa apertar, amassar, fazer massagem. Durante os estágios iniciais de concepção do xampu, cabeleireiros ingleses aqueceram sabão em água com bicarbonato de sódio e adicionaram ervas para darem ao cabelo saúde e aroma.\n[…]\nOriginalmente, sabão e xampu eram produtos muito similares. Ambos eram substâncias de emulsão tensoativas, um tipo de detergente. A formulação do xampu desenvolveu-se, tornando-se específica para a limpeza dos cabelos, e não um produto para o corpo em geral. Durante o século XX, diferentes tipos de xampus foram criados para cada tipo de cabelo; e atualmente utiliza-se principalmente substâncias sintéticas.\n[…]\nSegundo historiadores,  por volta do século XVI, o xampu era utilizado como bebida energética ou tônico (mais tarde originando a expressão \"tônico capilar\") no sul da Bulgária pelos guerreiros, os quais acreditavam que ao ingeri-lo teriam seus reflexos dobrados e perderiam qualquer noção de piedade contra seus oponentes.\n[…]\nO condicionador de cabelo é aplicado após o xampu para melhorar a textura e o aspecto do cabelo. Começou a ser usado após a Primeira Guerra Mundial, e depois a ser fabricado com substâncias siliconadas para um melhor custeamento de sua produção.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Xerografia",
      "descricao": "Processo de fotocópia a seco que deu origem às máquinas Xerox."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O processo de cópia das máquinas Xerox se chama xerografia, palavra de origem grega que significa escrita de que tipo?",
    "resposta": "Seca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Xerography"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Xerography",
        "situacao": "ok",
        "texto": "Xerography (from the Greek roots ξηρός xeros, meaning \"dry\" and -‍γραφία -‍graphia, meaning \"writing\") is a technique of printing and photocopying. Originally called electrophotography, it was renamed to emphasize that it uses no liquid chemicals, unlike reproduction techniques then in use such as cyanotype.\n[…]\nXerography was invented by American physicist Chester Carlson, based significantly on contributions by Hungarian physicist Pál Selényi. Carlson applied for and was awarded U.S. patent 2,297,691 on October 6, 1942.\n[…]\nIt was almost 18 years before a fully automated process was developed, the key breakthrough being the use of a cylindrical drum coated with selenium instead of a flat plate. This resulted in the first commercial automatic copier, the Xerox 914, being released by Haloid/Xerox in 1960.\n[…]\nThe steps of the process are described below as applied on a cylinder, as in a photocopier. Some variants are described within the text. Every step of the process has design variants. The physics of the xerographic process are discussed at length in a book.\n[…]\nUb Iwerks adapted xerography to eliminate the hand-inking stage in the animation process by printing the animator's drawings directly to the animation cels. The first animated feature film to use this process was One Hundred and One Dalmatians (1961), although the technique was already tested in Sleeping Beauty, released two years earlier.\n[…]\nXerography has been used by photographers internationally as a direct imaging photographic process, by book artists for publishing one-of-a-kind books or multiples, and by collaborating artists in portfolios such as those produced by the International Society of Copier Artists founded by American printmaker and book artist, Louise Odes Neaderland."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xerografia",
        "situacao": "ok",
        "texto": "Xerografia é o processo de reprodução de imagens e/ou texto mediante a utilização da máquina fotocopiadora. Este processo permite recortar, colar, modificar e interferir nas várias formas que se vai obtendo.\n[…]\nO processo é mais conhecido por ser usado por produtos da Xerox (que no Brasil é usada como verbo.)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Fita Scotch",
      "descricao": "Marca de fita adesiva da empresa americana 3M."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A fita adesiva Scotch, da 3M, ganhou esse nome depois que um cliente reclamou da pouca cola usando um estereótipo de pão-duro. Sobre qual povo?",
    "resposta": "Os escoceses",
    "fonte": [
      "https://en.wikipedia.org/wiki/Scotch_Tape"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scotch_Tape",
        "situacao": "ok",
        "texto": "Scotch is a brand name used for pressure sensitive tape and related products developed by 3M. It was first introduced by Richard Drew, who created the initial masking tape under the Scotch brand. The invention of Scotch-brand tape expanded its applications, making it suitable for sealing packages and conducting item repairs. Over time, Scotch tapes have been utilized in households and various indu\n[…]\nThe Scotch brand, Scotch Tape and Magic Tape are registered trademarks of 3M. Besides using Scotch as a prefix in its brand names (Scotchgard, Scotchlite, and Scotch-Brite), the company also used the Scotch name for its (mainly professional) audiovisual magnetic tape products, until the early 1990s when the tapes were branded solely with the 3M logo. In 1996, 3M exited the magnetic tape business, selling its assets to Quantegy (which is a spin-off of Ampex).\n[…]\nMagic tape, also known as Magic transparent tape, is a brand within the Scotch tape family of adhesive tapes made by 3M, sold in distinctive plaid packaging.\n[…]\nIn 1964, 3M released their \"Dynarange\" brand of magnetic tape used in reel-to-reel audio tape recording sold under either the Wollensak or Scotch brands. The company branched out to produce tapes for computer storage, cassette tapes and similar roles.\n[…]\nIn 1953, Soviet scientists showed that triboluminescence caused by peeling a roll of an unidentified Scotch brand tape in a vacuum can produce X-rays. In 2008, American scientists performed an experiment that showed the rays can be strong enough to leave an X-ray image of a finger on photographic paper.\n[…]\nDuct tape\n[…]\nPressure-sensitive tape\n[…]\nScotch Tape in MNopedia, the Minnesota Encyclopedia\n[…]\nHistory of Cellophane Tape and the Scotch Brand\n[…]\nScotch-tape.co.uk—Official website for the UK\n[…]\nScotchtape.com—Official website for the USA\n[…]\nAmbidextrousmag.org—A brief history of tape"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Tefal",
      "descricao": "Marca francesa de panelas e utensílios de cozinha, pioneira nas frigideiras antiaderentes."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome da marca francesa de panelas Tefal junta o nome de um revestimento antiaderente com o de qual metal?",
    "resposta": "Alumínio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tefal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tefal",
        "situacao": "ok",
        "texto": "Tefal S.A.S. (a portmanteau of TEFlon and ALuminium.) is a French cookware and small appliance manufacturer, owned by Groupe SEB (a global manufacturer of cookware) since 1968. The company is known for creating the non-stick cookware category and for offering frying equipment with a low requirement of fat or oils.\n[…]\nBesides cookware and cooking appliances, the Tefal brand is also applied to home appliances such as steam irons and vacuum cleaners.\n[…]\nIn 2013, a case of influence peddling broke out in Annecy, where Tefal management wanted to modify the employment contracts of certain employees, but a workers' union refused. The tug-of-war lasted several weeks, until the labor inspectorate intervened. The labor inspector in charge of the case discovered an irregularity in the 35-hour agreement signed thirteen years earlier and asked for it to be renegotiated, but management refused.\n[…]\nTefal management also contacted the intelligence services.\n[…]\nTefal decided to lodge a complaint against the labor inspector for breach of professional secrecy and handling stolen goods. The Annecy public prosecutor, Eric Maillaud, a close friend of Philippe Dumont, decides to follow up the complaint, not against the company or the inspectorate director, but against the labor inspector and the whistleblower to \"clean up\" the labor inspectorate. On June 5, 2015, hundreds of people demonstrated outside the court in support of the labor inspector.\n[…]\nThe trial is adjourned until October 16. At the same time, trade unions from the Ministry of Labor, local interprofessional unions and Tefal's CGT and FO sections call for a rally in front of the court."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tefal",
        "situacao": "ok",
        "texto": "Tefal é uma empresa francesa, fabricante de pequenos electrodomésticos, adquirida pelo Groupe SEB. O seu nome é fruto da combinação de alumínio e teflon.\n[…]\nA Tefal é conhecida mundialmente por fabricar utensílios de cozinha não aderentes.\n[…]\nThermo-spot é o nome de uma grande inovação apresentada pela Tefal, consiste num indicador de temperatura colocado em alguns utensílios, que permite saber quando a temperatura ideal para cozinhar é atingida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Olho-de-boi",
      "descricao": "Série dos primeiros selos postais do Brasil, emitida em 1843, com o valor em algarismos dentro de uma moldura oval."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Os primeiros selos do Brasil, lançados em 1843, traziam o valor em números grandes dentro de uma moldura oval. Que apelido eles ganharam?",
    "resposta": "Olho-de-boi",
    "distratores": [
      "Olho-de-cabra",
      "Olho-de-gato",
      "Olho-de-peixe"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Olho-de-boi_(selo)",
      "https://en.wikipedia.org/wiki/Postage_stamps_and_postal_history_of_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Olho-de-boi_(selo)",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Postage_stamps_and_postal_history_of_Brazil",
        "situacao": "ok",
        "texto": "Brazil is the fifth largest country in the world. It was a colony of Portugal from 1500 until 1815.\n[…]\nThe first stamps of Brazil were issued on 1 August 1843 and are known as \"Bull's Eyes\" due to their distinctive appearance. On 1 July 1844 a new series was issued which is known as the slanted numeral series. Subsequent stamps were in a similar format until the first pictorial stamps were issued in 1866 depicting Emperor Dom Pedro II\n[…]\nFor many years stamps from Brazil had Brasil Correio displayed on them. However, starting from 1973 stamps show the country name and year, e.g. Brasil 2000.\n[…]\nStudart, Marcelo Gladio da Costa. Catálogo Histórico dos Selos do Império do Brasil (1843-1889). 1991.\n[…]\nStudart, Marcelo Gladio da Costa. Falsificações e Fraudações na Filatelia Brasileira. 1991. Awarded the Alvaro Bonilla Lara Medal in 1995 by the FIAF.\n[…]\nTaveira, Walter Gonçalves. Brasil 1844–1846: \"Inclinados\": selos do império do Brasol (segunda estampa). Editora O Lutador. Belo Horizonte, MG. Brasil: Fundação Belgo-Mineira, 2001."
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Borracha natural",
      "descricao": "Material elástico obtido do látex de árvores como a seringueira."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em inglês, a borracha se chama rubber, do verbo esfregar. O nome surgiu no século dezoito por causa de qual uso que se descobriu para o material?",
    "resposta": "Apagar marcas de lápis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eraser",
      "https://en.wikipedia.org/wiki/Natural_rubber"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eraser",
        "situacao": "ok",
        "texto": "An eraser (also known as a rubber in some Commonwealth countries, including South Africa from which the material first used got its name) is an article of stationery that is used for removing marks from paper or skin (e.g. parchment or vellum). Erasers have a rubbery consistency and come in a variety of shapes, sizes, and colors. Some pencils have an eraser on one end.\n[…]\nIn 1770, the English optician and scientific instrument maker Edward Nairne reportedly developed the first widely marketed rubber eraser for an inventions competition. Until that time the material was known as gum elastic or by its French name caoutchouc borrowed from Quechua. Nairne sold natural rubber erasers for the high price of three shillings per half-inch cube.\n[…]\nNairne, Mathematical Instrument-Maker, opposite the Royal-Exchange.\" In 1770 the word rubber was in general use for any object used for rubbing; the word became attached to the new material sometime between 1770 and 1778.\n[…]\nThe stylized word \"Art gum\" was first used in 1903 and trademarked in the United States in 1907. That type of eraser was originally made from oils such as corn oil vulcanized with sulfur dichloride although it may now be made from natural or synthetic rubber or vinyl compounds. It is very soft yet retains its shape and is not mechanically plastic, but crumbles as it is used. It is especially suited to cleaning large areas without damaging the paper.\n[…]\nThe electric eraser was invented in 1932 by Albert J. Dremel of Racine, Wisconsin, United States. It used a replaceable cylinder of eraser material held by a chuck driven on the axis of a motor. The speed of rotation allowed less pressure to be used, which minimized paper damage. Originally standard pencil-eraser rubber was used, later replaced by higher-performance vinyl. Dremel went on to develop an entire line of hand-held rotary power tools."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Natural_rubber",
        "situacao": "ok",
        "texto": "Rubber, also called India rubber, latex, Amazonian rubber, caucho, or caoutchouc, as initially produced, consists of polymers of the organic compound isoprene, with minor impurities of other organic compounds.\n[…]\nBecause rubber does not dissolve easily, the material is finely divided by shredding prior to its immersion. An ammonia solution can be used to prevent the coagulation of raw latex. Rubber begins to melt at approximately 180 °C (356 °F).\n[…]\nAround 25 million tonnes of rubber are produced each year, of which 30 percent is natural. The remainder is synthetic rubber derived from petrochemical sources. The top end of latex production results in latex products such as surgeons' gloves, balloons, and other relatively high-value products. The mid-range which comes from the technically specified natural rubber materials ends up largely in tires but also in conveyor belts, marine products, windshield wipers, and miscellaneous goods.\n[…]\nNatural rubber offers good elasticity, while synthetic materials tend to offer better resistance to environmental factors such as oils, temperature, chemicals, and ultraviolet light. \"Cured rubber\" is rubber that has been compounded and subjected to the vulcanisation process to create cross-links within the rubber matrix. Rubber can be added to cement to improve its properties.\n[…]\nSome people have a serious latex allergy, and exposure to natural latex rubber products such as latex gloves can cause anaphylactic shock. The antigenic proteins found in Hevea latex are reduced by about 99.9 percent (though not eliminated) through vulcanization processing.\n[…]\nReinforced rubber\n[…]\nRubber seed oil\n[…]\nRubber technology\n[…]\nThe dictionary definition of natural rubber at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Borracha_escolar",
        "situacao": "ok",
        "texto": "A borracha escolar é um objeto de uso escolar ou em escritório, e seu principal uso é apagar os erros feitos com o lápis ou a lapiseira.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Polaroid",
      "descricao": "Câmera fotográfica instantânea que revela a foto logo após o clique, criada por Edwin Land."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Edwin Land teve a ideia da câmera instantânea Polaroid depois que alguém lhe perguntou por que não podia ver a foto na hora. Quem fez a pergunta?",
    "resposta": "A filha dele, de três anos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Edwin_H._Land",
      "https://en.wikipedia.org/wiki/Instant_camera"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Edwin_H._Land",
        "situacao": "ok",
        "texto": "Edwin Herbert Land, ForMemRS, FRPS, Hon.MRI (May 7, 1909 – March 1, 1991) was an American scientist and inventor, best known as the co-founder of the Polaroid Corporation. He invented inexpensive filters for polarizing light, a practical system of in-camera instant photography, and the retinex theory of color vision. His Polaroid instant camera went on sale in 1948 and made it possible for a pictu\n[…]\nA little more than three years later, on February 21, 1947, Land demonstrated an instant camera and associated film to the Optical Society of America. Called the Land Camera, it was in commercial sale less than two years later. Polaroid originally manufactured sixty units of this first camera. Fifty-seven were put up for sale at the Jordan Marsh department store in Boston before the 1948 Christmas holiday.\n[…]\nElkan Blout, a close colleague of Edwin Land at Polaroid, wrote: \"What was Land like? Knowing him was a unique experience. He was a true visionary; he saw things differently from other people, which is what led him to the idea of instant photography. He was a brilliant, driven man who did not spare himself and who enjoyed working with equally driven people.\"\n[…]\nDespite the tremendous success of his instant cameras, Land's Polavision instant movie system was a financial disaster, and he resigned as Chairman of Polaroid on July 27, 1982. When he retired, he had 535 patents to his name, only surpassed by Thomas Edison and Elihu Thomson. While he was set for retirement years, this did not mean the end of his passion in research and decided to continue with his interest in color vision.\n[…]\nLand was:\n[…]\nLand is referenced in the Lego set based on the Polaroid OneStep SX-70 Camera.\n[…]\nLand, Edwin H., \"Generation of Greatness: The Idea of a University in an Age of Science\", Ninth Annual Arthur Dehon Little Memorial Lecture at the Massachusetts Institute of Technology. May 22, 1957"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Instant_camera",
        "situacao": "ok",
        "texto": "An instant camera is a camera which uses self-developing film to create a chemically developed print shortly after taking the picture. Polaroid Corporation pioneered (and patented) consumer-friendly instant cameras and film, and were followed by various other manufacturers.\n[…]\nModels which used SX-70 film were introduced in a folding version, with later versions being solid plastic bodied. Third generation Polaroids, like the once popular SX-70, used a square format integral film, in which all components of the film (negative, developer, fixer, etc.) were contained. The SX-70 instant camera used the print technology that Edwin Land had most desired.\n[…]\nInstant cameras have found many uses throughout their history. The original purpose of instant cameras was motivated by Jennifer Land's question to her father (Edwin Land): \"Why can't I see them now?\" Many people have enjoyed seeing their photos shortly after taking them, allowing them to recompose or retake the photo if they didn't get it right.\n[…]\nInstant Cameras and Society\n[…]\nIntegral film cameras, such as the SX-70, 600 series, Spectra, and Captiva cameras went a long way in accomplishing Edwin Land's goal of creating a seamless process in producing instant photos. The photographer simply pointed the camera at the subject, framed it and took the photo.\n[…]\nThe name and app icon of the social photo sharing platform Instagram, founded in 2010, originated from the instant camera, with the 2010 icon directly resembling a Polaroid Land Camera 1000.\n[…]\n\"The Polaroid genius who re-imagined the way we take photos\" (video). Instant: The Story of Polaroid, author Christopher Bonanos compares the company's dynamic founder, Edwin Land, with Apple's iconic inventor, Steve Jobs. BBC News Online. 2013-01-23. Retrieved 2013-01-26."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Edwin_Land",
        "situacao": "ok",
        "texto": "Edwin Herbert Land (Bridgeport, 7 de maio de 1909 — Cambridge, 1 de março de 1991) foi um físico, industrial e inventor estadunidense.\n[…]\nPouco mais de três anos depois, em 21 de fevereiro de 1947, Land demonstrou uma câmera instantânea e um filme associado à Optical Society of America. Chamada de Land Camera, ela estava à venda comercial menos de dois anos depois. A Polaroid fabricou originalmente sessenta unidades desta primeira câmera. Cinquenta e sete foram colocados à venda na loja de departamentos Jordan Marsh em Boston antes do feriado de Natal de 1948.\n[…]\nElkan Blout, um colega próximo de Edwin Land na Polaroid, escreveu: \"Como era Land? Conhecê-lo foi uma experiência única. Ele foi um verdadeiro visionário; viu as coisas de maneira diferente das outras pessoas, e foi o que o levou à ideia de fotografia instantânea. Ele era um homem brilhante e motivado, que não se poupava a si mesmo e que gostava de trabalhar com pessoas igualmente motivadas\".\n[…]\nNo início dos anos 1970, Land tentou explicar o fenômeno anteriormente conhecido da constância de cores com sua teoria do retinex. Suas populares demonstrações de constância de cores despertaram muito interesse pelo conceito. Ele considerou sua liderança no desenvolvimento de fotografia colorida instantânea integral - o filme SX-70 e a câmera - como sua maior conquista.\n[…]\nApesar do tremendo sucesso de suas câmaras instantâneas, o fracassado sistema de filme instantâneo Polavision de Land foi um desastre financeiro, e ele renunciou ao cargo de presidente da Polaroid em 27 de julho de 1982.\n[…]\nMedalha Edwin H. Land\n[…]\nEdwin Herbert Land\n[…]\nCâmera Polaroid Land",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Dia dos Namorados no Brasil",
      "descricao": "Data comemorativa brasileira dos casais, celebrada em doze de junho desde 1949."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Dia dos Namorados brasileiro, criado em 1949 para aquecer o comércio, cai em doze de junho por ser a véspera do dia de qual santo?",
    "resposta": "Santo Antônio",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_dos_Namorados"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_dos_Namorados",
        "situacao": "ok",
        "texto": "O Dia dos Namorados, também conhecido em diversos países como Dia de São Valentim, é uma celebração anual comemorada a 14 de fevereiro que assinala a união amorosa, o romance e o afeto entre casais.\n[…]\nNo Brasil, a celebração ocorre a 12 de junho, tendo sido instituída por motivos comerciais na véspera do Dia de Santo António, conhecido popularmente como o santo casamenteiro, em detrimento do tradicional São Valentim.\n[…]\nO Dia dos Namorados foi criado pelo publicitário João Doria, que buscava uma data comemorativa para fomentar o comércio no mês de junho — considerado um mês com poucas vendas a época —, sendo comemorada no dia 12 de junho por ser véspera do 13 de junho, Dia de Santo Antônio, santo português com tradição de casamenteiro.\n[…]\nDoria trouxe a ideia do exterior e apresentou-a aos comerciantes paulistas, iniciando em junho de 1949 uma campanha com o lema \"não é só com beijos que se prova o amor\". A ideia se expandiu pelo Brasil, amparada pela correlação com o Dia de São Valentim — que nos países do hemisfério norte, ocorre em 14 de fevereiro e é utilizada para incentivar a troca de presentes entre o casal apaixonado.\n[…]\nOs registos mais antigos que restam de poemas de namorados em língua inglesa parecem ser os que constam nas Paston Letters, escritos em 1477 por Margery Brews para o seu futuro marido, John Paston, tratando-o por \"meu muito bem-amado Valentim\" (*\"my right well-beloved Valentine\"*).\n[…]\nSanto António\n[…]\n«Dia de São Valentim celebra santo que nunca existiu». , na Folha Online\n[…]\nO Doodle da Google para o Dia dos Namorados de 2025"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Dia das Crianças no Brasil",
      "descricao": "Data comemorativa brasileira dedicada às crianças, celebrada em doze de outubro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Dia das Crianças existia no papel desde os anos vinte, mas só pegou nos anos cinquenta, graças a uma campanha de qual fábrica de brinquedos?",
    "resposta": "Estrela",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_das_Crian%C3%A7as"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_das_Crian%C3%A7as",
        "situacao": "ok",
        "texto": "Dia das Crianças (português brasileiro) ou Dia da Criança (português europeu) é uma data comemorativa celebrada anualmente em homenagem às crianças, cujo dia efetivo varia de acordo com o país. Países como Angola, Portugal e Moçambique adotaram o dia 1 de junho. No Brasil é celebrado em 12 de outubro.\n[…]\nEm 1925, foi proclamado em Genebra o Dia Internacional da Criança durante a Conferência Mundial para o Bem-estar da Criança, sendo celebrado desde então em 1 de junho em vários países.\n[…]\nO fato é que, por alguma razão, a data de 25 de março ficou apenas \"no papel\". Somente em 1960, quando a Fábrica de Brinquedos Estrela fez uma promoção conjunta com a Johnson & Johnson para lançar a \"Semana do Bebê Robusto\" e aumentar suas vendas, é que a data de 12 de outubro passou a integrar o calendário das festas comerciais. Logo depois, outras empresas decidiram criar a Semana da Criança, para aumentar as vendas.\n[…]\nNo ano seguinte, os fabricantes de brinquedos decidiram escolher um único dia para a promoção, e fizeram ressurgir o antigo decreto de 1924. A estratégia deu certo, pois desde então o dia das crianças é comemorado com muitos presentes.\n[…]\nEsta efeméride assinalou-se pela primeira vez em 1950 por iniciativa das Nações Unidas, com o objetivo de chamar a atenção para os problemas que as crianças então enfrentavam.\n[…]\nO \"Dia Nacional da Criança\" foi proclamado pelo presidente George W. Bush em 3 de junho de 2001.\n[…]\nNo Paraguai, devido ao esforço do historiador Andrés Aguirre, o dia das crianças é comemorado em 16 de agosto, data da Batalha de Campo Grande (conhecida como \"Batalha de Los Niños\" pelos paraguaios), em homenagem às crianças-soldado recrutadas por Solano López devido à falta de homens no exército paraguaio e mortas no referido combate da Guerra do Paraguai."
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Smiley",
      "descricao": "Desenho de um rosto amarelo sorridente criado pelo artista americano Harvey Ball em 1963."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1963, o artista americano Harvey Ball desenhou a carinha amarela sorridente para levantar o ânimo dos funcionários de que tipo de empresa?",
    "resposta": "Uma seguradora",
    "fonte": [
      "https://en.wikipedia.org/wiki/Smiley",
      "https://en.wikipedia.org/wiki/Harvey_Ball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Smiley",
        "situacao": "ok",
        "texto": "A smiley, also known as a smiley face, is a basic ideogram representing a smiling face. Since the 1950s, it has become part of popular culture worldwide, used either as a standalone ideogram or as a form of communication, such as emoticons. The smiley began as two dots and a line representing eyes and a mouth. More elaborate designs emerged in the 1950s, featuring noses, eyebrows, and outlines.\n[…]\nNew York radio station WMCA used a yellow and black design for its \"Good Guys!\" campaign in the early 1960s. More yellow-and-black designs appeared in the 1960s and 1970s, including works by Harvey Ross Ball in 1963, and Franklin Loufrani in 1971. The Smiley Company, founded by Franklin Loufrani, claims to hold the rights to a version of the smiley face in over 100 countries. It has become one of the top 100 licensing companies globally.\n[…]\nYoung and Harvey Ball holding the design of the smiley and reported on September 11, 1971, that “two affiliated insurance companies” credited Harvey Ball with designing the symbol in 1963, while Bernard and Murray Spain claimed credit for introducing it to the market. This referred to the Worcester Mutual Fire Insurance Company of America and the Guarantee Mutual Assurance Company of America, whose 1963 \"Smile Power\" campaign first distributed smiley buttons to employees.\n[…]\nAccording to Worcester Historical Museum's documents, Young requested that Harvey Ball, a freelance artist, design \"a little smile to be used on buttons, desk cards and posters\". Ball completed the happy face in ten minutes and was paid $45 (equivalent to $473 in 2025). His rendition, with a bright yellow background, dark oval eyes, a full smile, and creases at the sides of the mouth, became familiar worldwide as the most iconic version of the smiley.\n[…]\nIn 2016, Walmart reintroduced the smiley face on its website, social media profiles, and in select stores."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Harvey_Ball",
        "situacao": "ok",
        "texto": "Harvey Ross Ball (July 10, 1921 – April 12, 2001) was an American commercial artist. In 1963, he created a design for a pin back button, that played a pivotal role in the adoption of the modern day smiley face. Ball was approached by marketing director Joy Young of State Mutual Life Assurance Company in 1963, with the instructions to design \"a little smile\".\n[…]\nThe State Mutual Life Assurance Company lapel pins later became a viral-success story, which had led to many calling Ball the creator of the Smiley face. He didn't trademark the design, and earned $45 for his efforts. Ball later founded the Harvey Ball World Smile Foundation in 1999, a non-profit charitable trust that supports children's causes.\n[…]\nAfter World War II, Ball worked for a local advertising firm until he started his own business, Harvey Ball Advertising, in 1959. He designed the smiley in 1963. The State Mutual Life Assurance Company of Worcester, Massachusetts (now known as Hanover Insurance) had purchased Guarantee Mutual Company of Ohio. The merger resulted in low employee morale. In an attempt to solve this, Ball was employed in 1963 as a freelance artist, to come up with an image to increase morale.\n[…]\nBall started with a sunny-yellow circle containing a smile, however wasn't happy that it could be turned upside down to make a frown. By adding two eyes, he created a smiley face. The whole drawing took 10 minutes to complete, and earned him $45.\n[…]\nFollowing Ball's death, the American media lauded Ball as the creator of the smiley face, including Smithsonian. Many wrongly stated that his 1963 design was the first and therefore original. After those claims were made, some journalists pointed to the New York radio station WMCA which used a yellow and black design for its \"Good Guys!\" campaign in the early 1960s. The designs did appear on sweatshirts rather than buttons."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Smiley",
        "situacao": "ok",
        "texto": "Um smiley, às vezes referido como smiley face, é um ideograma básico que representa um rosto sorridente. Desde a década de 1950, tornou-se parte da cultura popular em todo o mundo, usado como um ideograma autônomo ou como uma forma de comunicação, como emoticons. O smiley começou com dois pontos e uma linha para representar os olhos e a boca. Desenhos mais elaborados surgiram na década de 1950, co\n[…]\nUm design amarelo e preto foi usado por uma estação de rádio de Nova York. Mais designs amarelos e pretos apareceram nas décadas de 1960 e 1970, incluindo obras de Franklin Loufrani e Harvey Ball. Loufrani registrou o nome e seu design na França enquanto trabalhava como jornalista para o France Soir.\n[…]\nO primeiro uso conhecido de \"sorriso\" como um adjetivo para \"ter um sorriso \" ou \"sorrindo\" impresso foi em 1848. James Russell Lowell usou a frase \"All kin' o' smily roun' the lips \" em seu poema The Courtin'. Os primeiros designs eram frequentemente chamados de \"rosto sorridente\" ou \"rosto feliz\". Em 1961, os Good Guys da WMCA - é uma estação de rádio de Nova York - incorporaram um smiley preto em um moletom amarelo e foi apelidado de \"rosto feliz\".\n[…]\nO nome smiley tornou-se comumente usado nos anos 70 e 80 quando o ideograma amarelo e preto começou a aparecer mais na cultura popular. Desde então, o ideograma tem sido usado como base para criar emoticons. Estas são interpretações digitais do ideograma sorridente e desde então se tornaram o conjunto de emojis mais comumente usado desde que foram adotados pelo Unicode em 2006 em diante.\n[…]\nNos sistemas Microsoft Windows, os smileys podem ser inseridos, entre outras coisas, pressionando e segurando a tecla ALT e inserindo o código decimal correspondente através do bloco numérico (também teclado numérico) (exemplo: pressionada a tecla ALT + 9786 resultados ☺) ou com a combinação de teclas Windows + : (tecla de ponto/dois pontos).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Diners Club",
      "descricao": "Cartão de pagamento lançado nos Estados Unidos em 1950, precursor dos cartões de crédito modernos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Diz a história que o cartão Diners Club, de 1950, nasceu depois que o empresário Frank McNamara passou um aperto ao pagar a conta de um restaurante. Por quê?",
    "resposta": "Tinha esquecido a carteira",
    "fonte": [
      "https://en.wikipedia.org/wiki/Diners_Club_International"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diners_Club_International",
        "situacao": "ok",
        "texto": "Diners Club International Ltd. (DCI), founded as Diners Club, is a payment network  owned by Capital One.\n[…]\nThe idea for Diners Club was conceived at the Majors Cabin Grill restaurant in New York City in 1949. Diners Club cofounder Frank McNamara was dining with clients and realized he had left his wallet in another suit. His wife paid the bill, and McNamara thought of a multipurpose charge card as a way to avoid similar embarrassments in the future. He discussed the idea with the restaurant owner at the table, and the following day with his lawyer Ralph Schneider and friend Alfred S. Bloomingdale.\n[…]\nMcNamara returned to the same restaurant the following February, in 1950, and paid for his meal using a cardboard charge card and a signature. The story became well known. Diners Club official history refers to this meal as \"The First Supper\", and is credited by historians as the beginnings of contemporary credit.\n[…]\nMcNamara and his attorney, Ralph Schneider, founded Diners Club International on February 8, 1950, with $1.5 million in initial capital. Alfred Bloomingdale joined briefly, then started a competing venture in California before merging his California-based Dine and Sign with Diners Club.\n[…]\nDiners Club had 20,000 members by the end of 1950 and 42,000 by the end of 1951. At the time, the company was charging participating establishments 7% and billed cardholders $5 a year. In 1952, McNamara sold his interest in Diners Club to his partners for $200,000. The first plastic Diners Club card was introduced in 1961; by the mid-1960s, Diners Club had 1.3 million cardholders.\n[…]\nDiners Club Canada"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diners_Club_International",
        "situacao": "ok",
        "texto": "Diners Club International, originalmente Diners Club, é uma companhia de crédito fundada em 1950 por Frank X. McNamara, Ralph Schneider e Matty Simmons, comprada em 1981 pelo Citibank. Foi a primeira empresa independente de cartões de crédito do mundo.\n[…]\nFrank MacNamara e Ralph Schneider observaram a possibilidade do cartão de crédito após enfrentarem uma situação constrangedora em um restaurante ao descobrirem que não poderiam pagar um jantar por não terem trazido suas carteiras. Para resolver a situação entregaram seus cartões de visita para que depois a conta fosse entregue no escritório deles.\n[…]\nNo Brasil, o cartão Diners Club era operado pelo Citibank Brasil, porém com a venda do Citibank Brasil em 2017, passou a ser operado pelo Itaú Unibanco.\n[…]\nEm 18 de novembro de 2018, o Itaú Unibanco anuncia que irá substituir os cartões Diners Club por cartões da instituição com a bandeira Visa, extinguindo assim a marca no país. Porém em 21 de novembro de 2018, a Elo Participações anuncia que passarão a deter o nome Diners Club no Brasil, com os cartões sendo emitidos com a bandeira Elo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Play-Doh",
      "descricao": "Massinha de modelar colorida para crianças, vendida em potes desde os anos cinquenta."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A massinha de modelar Play-Doh e o plástico-bolha têm origens ligadas ao mesmo item de decoração da casa. Que item é esse?",
    "resposta": "Papel de parede",
    "fonte": [
      "https://en.wikipedia.org/wiki/Play-Doh",
      "https://en.wikipedia.org/wiki/Bubble_wrap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Play-Doh",
        "situacao": "ok",
        "texto": "Play-Doh, also known as Play-Dough, is an American brand of modeling compound marketed for young children to make arts and crafts projects. The product was first manufactured in Cincinnati, Ohio, as a wallpaper cleaner in the 1930s. Play-Doh was then reworked and marketed to Cincinnati schools in the mid-1950s. Play-Doh was demonstrated at an educational convention in 1956 and prominent department\n[…]\nIn 1964, Play-Doh was exported to Britain, France, and Italy. By 1965, Rainbow Crafts received a patent for Play-Doh. Also in 1965, the food company General Mills bought Rainbow Crafts for $3 million. In 1967, General Mills bought Kenner Products. In 1971, Rainbow Crafts and Kenner merged, and, in 1987, the Tonka Corporation bought the two. In the 1980s, its cardboard can (with a rust-prone metal bottom) was replaced with a more cost effective plastic container.\n[…]\nIn 2003, the Play-Doh Creativity Table was sold. Play-Doh related merchandise introduced during the 2007 anniversary year included the Play-Doh Birthday Bucket, the Play-Doh Fifty Colors Pack, the Fuzzy Pumper Crazy Cuts (a reworking of the 1977 Fuzzy Pumper Barber & Beauty Shop), and the Play-Doh Creativity Center. In 2013, \"Play-Doh Plus\" was introduced. It is lighter, more pliable, and softer than regular Play-Doh.\n[…]\nA game show adaptation produced by Hasbro's former entertainment division Entertainment One started streaming on Amazon Freevee (then known as IMDb TV), called Play-Doh Squished. Initially a holiday special on December 10, 2021, it became a full-length series on November 11, 2022. The competition show is hosted by Sarah Hyland.\n[…]\nPlasticine\n[…]\nPlay-Doh, sculpture by Jeff Koons\n[…]\nPlay-Doh on Instagram\n[…]\nPlay-Doh began as wall cleaner | Our History\n[…]\nPlaymakers Part II: Play-Doh Archived 2015-11-27 at the Wayback Machine\n[…]\nThe Accidental Invention of Play-Doh, by David Kindy, smithsonian.com, November 12, 2019"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bubble_wrap",
        "situacao": "ok",
        "texto": "Bubble wrap is a pliable transparent plastic material commonly used for protecting fragile items during shipping. Known for its cushioning air-filled bubbles, it has also become a cultural icon, celebrated for its satisfying popping sound and alternative uses as a stress-relief tool. Regularly spaced, protruding air-filled hemispheres (bubbles) provide cushioning for fragile items.\n[…]\nIn 1957, two inventors named Alfred Fielding and Marc Chavannes were attempting to create a three-dimensional plastic wallpaper. Although the idea was a failure, they found that what they made could be used as packing material. Sealed Air was co-founded by Fielding in 1960.\n[…]\nThe bubbles can be as small as 6 millimetres (0.24 inches) in diameter, to as large as 26 millimetres (1.0 inch) or more, to provide added levels of shock absorption during transit. The most common bubble size is 1 centimeter. In addition to the degree of protection available from the size of the air bubbles in the plastic, the plastic material itself can offer some forms of protection for the object in question.\n[…]\nFor example, when shipping sensitive electronic parts and components, a type of bubble wrap is used that employs an antistatic plastic that dissipates static charge, thereby protecting the sensitive electronic chips from static which can damage them. One of the first widespread uses of bubble wrap came in 1960, with the shipping of the new IBM 1401 computers to customers, most of whom had never seen this packing material before."
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Arroba",
      "descricao": "Símbolo gráfico usado nos endereços de e-mail para separar o nome do usuário do domínio."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em português, o símbolo dos endereços de e-mail tem o mesmo nome de uma antiga unidade de peso, usada até hoje para pesar gado. Que nome é esse?",
    "resposta": "Arroba",
    "fonte": [
      "https://en.wikipedia.org/wiki/At_sign",
      "https://pt.wikipedia.org/wiki/Arroba_(unidade)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/At_sign",
        "situacao": "ok",
        "texto": "The at sign (@) is a typographical symbol used as an accounting and invoice abbreviation meaning \"at a rate of\" (e.g. 7 widgets @ £2 per widget = £14), and now seen more widely in email addresses and social media platform handles. Most languages have their own name for the symbol.\n[…]\nThe symbol has long been used in Catalan, Spanish and Portuguese as an abbreviation of arroba, a unit of weight equivalent to 25 pounds, and derived from the Arabic expression of \"the quarter\" (الربع pronounced ar-rubʿ). A symbol resembling an @ is found in the Spanish \"Taula de Ariza\", a registry to denote a wheat shipment from Castile to Aragon, in 1448.\n[…]\nIn Portugal it may be used in typing and text messaging with the meaning \"french kiss\" (linguado).\n[…]\nIn Spain and Portugal, the Arroba, abbreviated using the @ sign, is a customary unit of weight, mass or volume. The name arroba is used in both countries for the @ sign more generally.\n[…]\nIn Indian English, speakers often say at the rate of (with e-mail addresses quoted as \"example at the rate of example.com\").\n[…]\nIn Irish, it is ag (meaning 'at') or comhartha @/ag (meaning 'at sign').\n[…]\nIn Portuguese, it is called arroba (from the Arabic ar-roub, ‏اَلرُّبْع‎). The word arroba is also used for a weight measure in Portuguese. One arroba is equivalent to 32 old Portuguese pounds, approximately 14.7 kg (32 lb), and both the weight and the symbol are called arroba. In Brazil, cattle are still priced by the arroba – now rounded to 15 kg (33 lb). This naming is because the at sign was used to represent this measure.\n[…]\nIn Spanish-speaking countries, it is called arroba (from the Arabic ar-roub, which denotes a pre-metric unit of weight).\n[…]\nA Natural History of the @ Sign The many names of the at sign in various languages, 1997, Retrieved June 2013."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arroba_(unidade)",
        "situacao": "ok",
        "texto": "A palavra Arroba (do árabe الربع; \"ar-rub\", a quarta parte) designa antigas unidades de massa e de volume usadas na Espanha, Portugal e América Latina. Como unidade de massa, a arroba equivale originalmente à quarta parte do quintal, isto é, 25 libras. Porém, esse valor não foi sempre o único a ser utilizado, nem as libras equivaliam entre si.\n[…]\nNo Portugal medieval, a arroba também designava normalmente 1/4 do quintal, mas dividia-se em 32 arráteis, podendo estes ser de 12.5, 13 ou 14 onças, estando também as onças sujeitas a alguma variação. Em Portugal usava-se o símbolo @ para abreviar a unidade arroba\n[…]\nA partir de 1499, com a reforma de D. Manuel, generalizou-se em Portugal um arrátel de 16 onças equivalente a 457,8 g valor que, mais tarde, foi ajustado para 459,0 g. A arroba da época moderna, de 32 destes arráteis, tinha assim 14,688 kg — valor próximo de 14,7 kg. Foi este o sistema disseminado no Brasil e nos restantes territórios do império português ao longo da época moderna.\n[…]\nCom a introdução do Sistema Internacional de Unidades, a arroba perdeu boa parte de sua função, mas ainda não deixou de existir.\n[…]\nModernamente, em Portugal (onde ainda é utilizada para pesar a cortiça, os cereais e as batatas nas vendas a retalho do comércio tradicional, porcos e gado bovino), a medida foi arredondada para 15 kg. No Brasil, também com o valor arredondado (15 kg), a arroba é utilizada para pesagem de bovinos, suínos e, na Bahia, o cacau.\n[…]\nComo medida de volume usada na Espanha, a arroba é utilizada para medir líquidos. Varia também o seu valor, dependendo não só das regiões, mas também do próprio líquido medido. Assim, se o líquido quantificado for azeite, a arroba equivale a 12,563 litros, enquanto, se for vinho, sua equivalência é de 16,133 litros.\n[…]\nAntigas unidades de medida portuguesas\n[…]\n«Arroba (valores)» (em inglês)"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Durex",
      "descricao": "Marca de fita adesiva cujo nome virou sinônimo de fita adesiva transparente no Brasil."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No Brasil, a fita adesiva é chamada de durex. Em países como o Reino Unido, Durex é a marca famosa de que produto?",
    "resposta": "Preservativos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Durex"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Durex",
        "situacao": "ok",
        "texto": "Durex is a British brand of condoms and personal lubricants owned by Reckitt Benckiser. It was initially developed in London under the purview of the London Rubber Company and British Latex Products Ltd, where it was manufactured between 1932 and 1994.\n[…]\nIn 2007, the last factory making Durex condoms in the UK stopped manufacturing and production has since moved to China, India and Thailand. The modern range includes a wide variety of latex condom, including the Sheik and Ramses brands in North America, and the Avanti condom. Durex also provides a range of lubricants and sex toys.\n[…]\nAlthough Durex was not an official sponsor of the Olympic Games, Durex provided 150,000 free condoms to more than 10,000 athletes that competed in the 2012 Summer Olympics in London.\n[…]\nAlthough condoms are not a widely used form of contraception in China, with only around 10% of sexually active people using them, among Chinese condom users Durex has a dominant market share of 45% as of 2015. Due to a relatively conservative culture surrounding sex, Durex's marketing in China is often indirect and subtle, often involving lighthearted humour. Marketing is done almost exclusively on social media.\n[…]\nDurex has operated an account on the microblogging site Weibo in 2011, which had 2.65 million followers and more than 20,000 posts as of 2018. Durex targets Chinese users on Sina Weibo aged from 20 to 40, and primarily men under 35 years old. In 2011, Durex began cross-industry advertising tie-ins with the antivirus software company Trend Micro, using the common themes of \"antivirus\" and \"security\".\n[…]\nMedia related to Durex at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Árvore de Natal",
      "descricao": "Pinheiro, natural ou artificial, enfeitado com luzes e ornamentos durante as festas de fim de ano."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1848, um jornal de Londres publicou uma gravura da família real britânica em volta de uma árvore de Natal, e a moda pegou. Quem era a rainha?",
    "resposta": "Rainha Vitória",
    "fonte": [
      "https://en.wikipedia.org/wiki/Christmas_tree"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christmas_tree",
        "situacao": "ok",
        "texto": "A Christmas tree is a decorated tree, usually an evergreen conifer such as a spruce, pine or fir, associated with the celebration of Christmas. It may also be an artificial tree of similar appearance.\n[…]\nTheir use at public entertainments, charity bazaars and in hospitals made them increasingly familiar, and in 1906 a charity was set up specifically to ensure even poor children in London slums \"who had never seen a Christmas tree\" would enjoy one that year. Anti-German sentiment after World War I briefly reduced their popularity but the effect was short-lived, and by the mid-1920s the use of Christmas trees had spread to all classes.\n[…]\nPresident Benjamin Harrison and his wife Caroline put up the first White House Christmas tree in 1889.\n[…]\nThe use of fire retardant allows many indoor public areas to display real trees while remaining code-compliant. Licensed applicators of fire retardant solution spray the tree, tag it, and provide a certificate for inspection.\n[…]\nThe Episcopal Church in The Anglican Family Prayer Book has long had a ritual titled Blessing of a Christmas Tree, as well as Blessing of a Crèche, for use in the church and the home; family services and public liturgies for the blessing of Christmas trees are common in other Christian denominations as well.\n[…]\nThis neutral naming aims to reduce the risk that a civic tree-lighting ceremony could be interpreted as governmental endorsement of a particular religion. However, these changes have often generated organized opposition from Christian groups and some public officials, who argue that dropping the word \"Christmas\" diminishes the holiday's religious character and long-established cultural terminology."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81rvore_de_Natal",
        "situacao": "ok",
        "texto": "Uma árvore de Natal é uma árvore decorada, geralmente uma conífera perene, como um abeto, pinheiro ou pinheiro-do-canadá, associada à celebração do Natal. Também pode consistir numa árvore artificial de aparência semelhante.\n[…]\nNa Dinamarca, uma empresa jornalística afirma que a primeira árvore de Natal atestada foi acesa em 1808 pela condessa Wilhemine de Holsteinborg. Foi a condessa, já idosa, quem contou a história da primeira árvore de Natal dinamarquesa ao escritor dinamarquês Hans Christian Andersen em 1865. Ele tinha publicado um conto de fadas chamado \"O Abeto\" em 1844, que narrava o destino de um abeto usado como árvore de Natal.\n[…]\nO debate sobre o impacto ambiental das árvores artificiais continua. Geralmente, os produtores de árvores naturais argumentam que as árvores artificiais são mais prejudiciais ao meio ambiente do que as suas contrapartes naturais. No entanto, grupos comerciais como a American Christmas Tree Association afirmam que o PVC usado nas árvores de Natal é quimicamente e mecanicamente estável, não afeta a saúde humana e tem excelentes propriedades de reciclagem.\n[…]\nO presépio e a árvore: símbolos preciosos que transmitem, ao longo do tempo, o verdadeiro significado do Natal.” O Livro de Bênçãos oficial da Igreja Católica inclui um serviço para a bênção da árvore de Natal em casa. A Igreja Episcopal, no Livro de Orações da Família Anglicana, que tem o imprimatur da Revma. Catherine S.\n[…]\nRoskam da Comunhão Anglicana, há muito tempo possui um ritual intitulado Bênção da Árvore de Natal, bem como Bênção do Presépio, para uso na igreja e em casa; serviços familiares e liturgias públicas para a bênção de árvores de Natal também são comuns em outras denominações cristãs.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Bambolê",
      "descricao": "Aro de plástico girado em volta da cintura, que virou febre nos Estados Unidos em 1958."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1958, o bambolê de plástico virou febre nos Estados Unidos, lançado pela mesma empresa que popularizou o frisbee. Que empresa?",
    "resposta": "Wham-O",
    "distratores": [
      "Mattel",
      "Hasbro",
      "Parker Brothers"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hula_hoop",
      "https://en.wikipedia.org/wiki/Wham-O"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hula_hoop",
        "situacao": "ok",
        "texto": "A hula hoop is a toy hoop that is twirled around the waist, limbs or neck. Hoops can also be used for hoop rolling, wheeled along the ground like a wheel with careful execution and practice. They have been used by children and adults since at least 500 BC. The modern hula hoop was inspired by Australian bamboo hoops.\n[…]\nJoan Anderson witnessed Australian children playing with bamboo hoops while driving past in an automobile, naming it \"hula hoop\" after the Hawaiian hula dance and introducing it to the Wham-O toy company, who popularized the plastic version in 1958 and helped it become a fad.\n[…]\nThe hula hoop gained international popularity in the late 1950s, when a plastic version was successfully marketed by California's Wham-O toy company. Cane hoops had been popular children's toys to be rolled on the ground and kept balanced for as long as possible.\n[…]\ncompany to sponsor one bed in an Australian children's hospital. By 1958, Wham-O plastic hoops were being used in California and then the craze for hooping swept the United States and beyond.\n[…]\nRichard Knerr and Melin of Wham-O updated the Toltoys design and manufactured 110 cm (42 in) diameter hoops from Marlex plastic. The earliest known advertisement was seen for the \"Hula-Hoop by Wham-O\" was seen on June 16, 1958 for \"The Broadway\" chain of department stores in Los Angeles, for sale for $1.98 (equivalent to $20 more than 60 years later).\n[…]\nSaddled with a glut of unwanted Hula Hoops, Wham-O stopped manufacturing the toy until 1965, when Knerr and Melin came up with a new twist: They inserted ball bearings in the cylinder to make a \"shoosh\" sound. The hoop was inducted into the National Toy Hall of Fame at The Strong in Rochester, New York, in 1999.\n[…]\nCollapsible hula hoops have been developed for easy transport and versatility.\n[…]\nThe History of Wham-O"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wham-O",
        "situacao": "ok",
        "texto": "Wham-O Inc. is an American toy company based in Carson, California, United States. It is known for creating and marketing many popular toys for nearly 70 years, including the Hula hoop, Frisbee, Slip 'N Slide, Super Ball, Trac-Ball, Silly String, Hacky Sack, Wham-O Bird Ornithopter, and Boogie Board, many of which have become genericized trademarks.\n[…]\nIn 1958, Wham-O, still a fledgling company, took the idea of Australian bamboo \"exercise hoops\", manufactured them in Marlex, and called their new product the Hula Hoop. The name had been used since the 18th century, but until then was not registered as a trademark. It became the biggest toy fad in modern history. 25 million were sold in four months, and in two years sales reached more than 100 million.\n[…]\n\"Hula Hoop mania\" continued through the end of 1959, and netted Wham-O $45 million (equivalent to $497 million in 2025).\n[…]\nShortly thereafter, the company had another huge success with the Frisbee. In 1955, inventor Fred Morrison began marketing a plastic flying disc called the Pluto Platter. He sold the design to Wham-O on January 23, 1957. By June they had learned that students back east were calling them a \"Frisbee.\" In early 1958, Wham-O added the name \"Frisbee\" to the top of the Pluto Platter – and once again a Wham-O toy became a common part of life through the 1960s.\n[…]\nThe Frisbee and Hula Hoop created fads. With other products, Wham-O tried to capitalize on existing national trends. In the 1960s, they produced a US$119 do-it-yourself bomb shelter cover. In 1962, they sold a limbo dance kit to take advantage of that fad; and in 1975, when the movie Jaws was released, they sold plastic shark teeth.\n[…]\n1995: Wham-O buys Aspectus.\n[…]\n2008: Wham-O introduces the EZ Spin Foam Frisbee Disc, a soft foam version of the Frisbee\n[…]\n2010: Wham-O acquires Sprig Toys Inc.\n[…]\nWham-O Company website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bambol%C3%AA",
        "situacao": "ok",
        "texto": "O bambolê (português brasileiro) ou arco (português europeu) é um aro de brinquedo que é girado ao redor da cintura, membros ou pescoço. Foi criado no Egito há três mil anos e era feito com fios secos de parreira. As crianças egípcias imitavam com os bambolês as artistas que dançavam com aros em torno do corpo.\n[…]\nO bambolê como conhecemos atualmente, de plástico colorido, surgiu nos Estados Unidos em 1958. Foi uma criação dos norte-americanos Arthur Melin e Richard Knerr, donos de uma fábrica de brinquedos, que trouxeram a ideia da Austrália, onde estudantes de ginástica se divertiam girando aros de bambu na cintura. O brinquedo foi batizado de hula hoop, e eles venderam cerca de 25 milhões de unidades em apenas quatro meses.\n[…]\nNo mesmo ano, a fábrica de brinquedos Estrela lançou o hula no Brasil, com o nome tirado do verbo \"bambolear\" (gingar).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "SMS",
      "descricao": "Serviço de mensagens de texto curtas entre celulares, cuja primeira mensagem foi enviada em 1992."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em dezembro de 1992, um engenheiro britânico mandou de um computador para um celular a primeira mensagem de texto SMS. O que ela dizia?",
    "resposta": "Feliz Natal",
    "fonte": [
      "https://en.wikipedia.org/wiki/SMS",
      "https://en.wikipedia.org/wiki/Neil_Papworth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/SMS",
        "situacao": "ok",
        "texto": "Short Message Service (SMS) is a text messaging service component of most telephone, Internet and mobile device systems. It uses standardized communication protocols that let mobile phones exchange short text messages, typically transmitted over cellular networks.\n[…]\nShort message cell broadcast.\n[…]\nThe first commercial deployment of a short message service center (SMSC) was by Aldiscon part of Logica (now part of CGI) with Telia (now TeliaSonera) in Sweden in 1993, followed by Fleet Call (now Nextel) in the US, Telenor in Norway and BT Cellnet (now O2 UK).\n[…]\nMessages are sent to a short message service center (SMSC), which provides a \"store and forward\" mechanism. It attempts to send messages to the SMSC's recipients. If a recipient is not reachable, the SMSC queues the message for later retry. Some SMSCs also provide a \"forward and forget\" option where transmission is tried only once. Both mobile terminated (MT, for messages sent to a mobile handset) and mobile originating (MO, for those sent from the mobile handset) operations are supported.\n[…]\nFrom 3GPP Releases 99 and 4 onwards, CAMEL Phase 3 introduced the ability for the Intelligent Network (IN) to control aspects of the Mobile Originated Short Message Service, while CAMEL Phase 4, as part of 3GPP Release 5 and onwards, provides the IN with the ability to control the Mobile Terminated service.\n[…]\nIn the US, carriers have traditionally preferred that A2P messages be sent using a short code rather than a standard long code. In 2021, US carriers introduced a new service called A2P 10DLC, supporting the used of 10-digit long codes for A2P messages. In the United Kingdom A2P messages can be sent with a dynamic 11 character sender ID; however, short codes are used for OPTOUT commands."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Neil_Papworth",
        "situacao": "ok",
        "texto": "Neil Papworth (born 1969) is a British software architect, designer and developer. He is known as the sender of the first ever text message (also known as SMS message) in 1992.\n[…]\nHe settled in Montreal, Quebec in September 2002. He remained with Sema Group (which became Airwide Solutions) until 2011. Since then, he worked for Tekelec, a telecommunications company, recently bought by Oracle Corporation. He worked at Oracle on 4G related technologies. In 2018, he started working at TriNimbus, a company providing Amazon Web Services consulting to customers, which was subsequently acquired by Onica in 2018, and then Onica was subsequently acquired by Rackspace in 2019.\n[…]\nIn 1992, Neil Papworth was working as a developer and test engineer at Sema Group Telecoms, in a team developing a Short Message Service Centre (SMSC) for their customer, Vodafone UK in Newbury, Berkshire. As part of this project, he sent the world's first text message, on 3 December 1992, at the age of 22. It was sent from a computer. The message was \"Merry Christmas\", and was sent to Richard Jarvis, a director at Vodafone, who was enjoying his office Christmas party.\n[…]\nRichard Jarvis received the message on an Orbitel 901 handset.\n[…]\nHe said in 2017 that he only sends a few texts per day and that they are typically \"fairly dull.\" He does not use the emoji menu. Papworth gained popularity during the 10th and 20th anniversaries of the first text message, as highlighted in the press, and has been featured in several outlets such as a Super Bowl commercial, a documentary movie, a Jeopardy! question, and radio talk shows.\n[…]\nBBC World Service documentary June 2023 15 minutes in"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Servi%C3%A7o_de_mensagens_curtas",
        "situacao": "ok",
        "texto": "Serviço de mensagens curtas (em inglês: Short Message Service, SMS) é um serviço disponível em celulares (telemóveis) digitais que permite o envio de mensagens curtas (até 160 caracteres) entre estes equipamentos e entre outros dispositivos de mão (handhelds), e até entre telefones fixos (linha-fixa), conhecidas popularmente como mensagens de texto. Este serviço pode ser tarifado ou não, dependend\n[…]\nSMS originalmente foi projetado como parte do GSM (Sistema de comunicação móvel global) padrão digital de telefone celular, mas está agora disponível num vasto leque de redes, incluindo redes 3G, 4G e até 5G.\n[…]\nJá se discute e planeja-se sua evolução através do serviço de mensagens multimídia (em inglês: Multimedia Messaging Service, MMS). Com o MMS, os usuários podem enviar e receber mensagens não mais limitados aos 160 caracteres do SMS, bem como podem enriquecê-las com recursos audiovisuais, como imagens, sons e gráficos.\n[…]\nO GSM 03.38 ou 3GPP TS 23.038 é a norma que define o padrão de codificação de caracteres para elementos da rede GSM; é o alfabeto GSM de 7 bits padronizado pela organização 3GPP que define o: SMS (Short Message Service), USSD (Unstructured Supplementary Service Data) e, CB (Cell Broadcast).\n[…]\nA primeira mensagem de texto (SMS) foi enviada em 3 de dezembro de 1992, quando Neil Papworth, um engenheiro de testes da Sema Group, enviou \"Merry Christmas\" (Feliz Natal) para o telefone Orbitel 901 de seu colega Richard Jarvis.\n[…]\nTais vulnerabilidades são inerentes ao SMS, como um dos serviços mais superiores e bem usados, com uma vulnerabilidade global nas redes GSM. A troca de mensagens por SMS tem algumas vulnerabilidades de segurança extras devido a sua funcionalidade de armazenar e encaminhar, e o problema de SMS falso que pode ser enviados através da Internet.\n[…]\nRede de Telefonia Fixa e Rede de Telefonia Celular",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Escova de dentes",
      "descricao": "Utensílio de higiene bucal com cerdas presas a um cabo, produzido em massa desde o século dezoito."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Antes da chegada do náilon, no fim dos anos trinta, as cerdas das escovas de dentes eram feitas, em geral, com pelos de qual animal?",
    "resposta": "Porco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Toothbrush"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toothbrush",
        "situacao": "ok",
        "texto": "A toothbrush is a special type of brush used to clean the teeth, gums, and tongue. It consists of a head of tightly clustered bristles, onto which toothpaste is applied, mounted on a handle that facilitates cleaning hard-to-reach areas of the mouth. They should be used in conjunction with tools that clean between the teeth―where toothbrush bristles cannot reach―such as floss, tape, interdental bru\n[…]\nBefore the invention of the toothbrush, a variety of oral hygiene measures were used. This has been verified by excavations during which tree twigs, bird feathers, animal bones and porcupine quills were recovered.\n[…]\nThe first patent for a toothbrush was granted to H.N. Wadsworth in 1857 (U.S.A. Patent No. 18,653) in the United States, but mass production in the United States did not start until 1885. The improved design had a bone handle with holes bored into it for the Siberian boar hair bristles. Unfortunately, animal bristle was not an ideal material as it retained bacteria, did not dry efficiently and the bristles often fell out. In addition to bone, handles were made of wood or ivory.\n[…]\nDuring the 1900s, celluloid gradually replaced bone handles. Natural animal bristles were also replaced by synthetic fibers, usually nylon, by DuPont in 1938. The first nylon bristle toothbrush made with nylon yarn went on sale on February 24, 1938. The first electric toothbrush, the Broxodent, was invented in Switzerland in 1954. By the turn of the 21st century nylon had come to be widely used for the bristles and the handles were usually molded from thermoplastic materials."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escova_de_dentes",
        "situacao": "ok",
        "texto": "A Escova de dentes é utilizada na higiene bucal. Promove, associada ao creme dental, a limpeza, a proteção e uma maior durabilidade dos dentes. Recomenda-se utilizá-la sempre após qualquer refeição para a manutenção de uma boa dentição. Já estão disponíveis no mercado escovas automatizadas que diminuem o esforço físico do usuário na hora da escovação, garantindo uma maior comodidade no procediment\n[…]\nO percurso deste instrumento de limpeza não se limitou a um só continente, William Addis em 1780 numa prisão da Inglaterra, utilizou osso de resto de comida e cerdas de pelo para criar uma escova de dente, porém, a patente da \"primeira\" escova ficou por conta de H.N Wasdworth em 1857 e a sua produção em grande escala só começou em 1885 usando cerdas de animais que durou até a chegada do nylon que as substituiria com químico estadunidense, Wallace Carothers que o criou em 1938.\n[…]\nA empresa química multinacional americana DuPont desenvolveu as cerdas de náilon, usadas hoje. Vale lembrar que a a primeira versão mais parecida com a nossa escova de dentes foi usada na China, em 1498, mas suas cerdas eram feitas com pelos de porco ou javalí e o corpo da mesma, feito de madeira de bambu. Mais tarde, estes foram substituídos por pelos de cavalo.\n[…]\nA escova de dentes mais antiga da Europa, que data de 300 anos atrás, é feita de osso e foi descoberta durante escavações arqueológicas em um antigo hospital municipal de Minden, na Alemanha. Os 19 buracos destinados a inserir os pelos de porco que funcionavam como cerdas são visíveis ainda hoje.\n[…]\nEscovas de dentes Interdental\n[…]\nEscovas de dentes mastigáveis\n[…]\nOs fabricantes e dentistas recomendam trocar de escova depois de 3 meses, ou quando as cerdas estiverem deformadas ou gastas. É muito importante trocar de escova depois de uma gripe ou resfriado para diminuir o risco de nova infecção por meio dos germes que aderem às cerdas.\n[…]\nEscovação dos dentes",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Despertador",
      "descricao": "Relógio que emite um som num horário programado para acordar quem dorme."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O despertador mecânico criado em 1787 pelo americano Levi Hutchins só conseguia tocar num horário, o que ele precisava para acordar. Qual era?",
    "resposta": "Quatro da manhã",
    "distratores": [
      "Três da manhã",
      "Cinco da manhã",
      "Seis da manhã"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alarm_clock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alarm_clock",
        "situacao": "ok",
        "texto": "An alarm clock or alarm is a clock that is designed to alert an individual or group of people at a specified time. The primary function of these clocks is to awaken people from their night's sleep or short naps; they can sometimes be used for other reminders as well. Most alarm clocks make sounds; some make light or vibration.\n[…]\nThe first American alarm clock was created in 1787 by Levi Hutchins in Concord, New Hampshire. This device he made only for himself, however, and it only rang at 4 am, to wake him for his job. The French inventor Antoine Redier was the first to patent an adjustable mechanical alarm clock, in 1847.\n[…]\nGetting the gear teeth to line up to allow for exactly ten minutes is impossible, so manufacturer had to choose between setting it at nine minutes and a few seconds, or a little bit over ten minutes, which was considered too long. Thus, the snooze duration is set at 9 minutes. Such duration was then carried over to electronic alarm clocks and then clock apps on phone.\n[…]\niPhones had a hard-set 9 minutes snooze duration until iOS 26, while Android users had long been able to change the duration due to having varieties in clock app. As an alternative solution, some clock apps allow multiple times to be set, such that as soon as the first alarm is turned off, it will go off again at the next set time. This continues until all set times have been used.\n[…]\nA 2024 pilot study by researchers at the University of Virginia found that being forced awake by an alarm clock, after short sleep duration, resulted in a 74% higher morning blood pressure surge for subjects compared to natural awakening. This sudden awakening can activate the sympathetic nervous system, inducing a \"fight-or-flight response that places additional stress on the heart.\n[…]\nMedia related to Alarm clocks at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Despertador",
        "situacao": "ok",
        "texto": "Despertador é um relógio projetado para alertar um indivíduo ou um grupo de indivíduos em uma hora específica. Na maioria dos casos, a função primária desses relógios é despertar indivíduos após uma noite de sono ou após um cochilo.\n[…]\nFoi só no começo da Época Moderna, durante o século XV, que os relógios de ponteiro começaram a ser vendidos na Europa.[carece de fontes]?\n[…]\nCom a Primeira Revolução Industrial (1780), chegaram os horários de trabalho fixos, sendo assim necessário que o trabalhador acorde na hora para ir ao trabalho. O primeiro despertador foi criado pelo americano Levi Hutchins, em 1787; porém, só tocava às 4 da madrugada, pois era a hora que ele tinha que acordar. O primeiro despertador que era possível definir a hora foi criado pelo francês Antoine Redier, em 1847.[carece de fontes]?\n[…]\nA ideia de criar algo para acordar no horário não foi executada apenas com o despertador. Platão criou um dispositivo que consistia de três recipientes empilhados. Com o primeiro cheio de água, o líquido gotejava por um funil estreito até a parte central encher e forçar o ar a sair por uma pequena abertura, gerando assim um assobio que acordava quem estava dormindo.[carece de fontes]?\n[…]\nRelógio:\n[…]\nAntigo (relógio):\n[…]\nDevido aos celulares e assistentes pessoais (Echo Dot, Google Nest e etc), o despertador vem sendo cada vez menos usado, pois muitos aparelhos já fazem essa função. O digital é um pouco mais usado, mas também perdeu muito espaço.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Dado",
      "descricao": "Pequeno cubo com faces numeradas de um a seis, usado em jogos de sorte."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Num dado comum de seis faces, quanto sempre dá a soma dos números de duas faces opostas?",
    "resposta": "Sete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dice",
        "situacao": "ok",
        "texto": "A die (plural: dice, sometimes also used as singular) is a small, throwable object with marked sides that can rest in multiple positions. Dice are used for generating random values, commonly as part of tabletop games, including dice games, board games, role-playing games, and games of chance.\n[…]\nBipyramids, the duals of the infinite set of prisms, with triangle faces: any multiple of 4 (so that a facet faces up), starting from 8\n[…]\nLong dice and teetotums can, in principle, be made with any number of faces, including odd numbers. Long dice are based on the infinite set of prisms. All the rectangular faces are mutually face-transitive, so they are equally probable. The two ends of the prism may be rounded or capped with a pyramid, designed so that the die cannot rest on those faces. 4-sided long dice are easier to roll than tetrahedra and are used in the traditional board games dayakattai and daldøs.\n[…]\nThe faces of most dice are labelled using sequences of whole numbers, usually starting at one, expressed with either pips or digits. However, there are some applications that require results other than numbers. Examples include letters for Boggle, directions for Warhammer, Fudge dice, playing card symbols for poker dice, and instructions for sexual acts using sex dice.\n[…]\nPolyhedral dice are commonly used in role-playing games. The fantasy role-playing game Dungeons & Dragons (D&D) is largely credited with popularizing dice in such games. Some games use only one type, like Exalted and Call of Cthulhu, which use only ten-sided dice. Others use numerous types for different game purposes, such as D&D, which makes use of all common polyhedral dice. Dice are usually used to determine the outcome of events."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dado_%28pe%C3%A7a%29",
        "situacao": "ok",
        "texto": "Os dados são pequenos poliedros gravados com determinadas instruções. O dado mais clássico é o cubo (seis faces), gravado com números de um a seis. Existem também dados de duas faces (representados por moedas), três faces (igual a um dado clássico de seis lados, mas com apenas três números, sendo cada um repetido duas vezes), quatro faces (em formato piramidal), oito faces, dez faces, 12 faces, 20\n[…]\nUma pequena curiosidade quanto aos dados clássicos (fabricados de forma correta), de seis lados: a soma dos lados opostos resulta no número sete. Ou seja, se de um lado temos o número um automaticamente teríamos o número seis do outro lado. Isso ocorre também com o dois casando com o cinco, e o três com o quatro. Isso se aplica também a qualquer outro dado, a soma de dois lados opostos sempre é igual ao número de faces mais um.\n[…]\nEstes também eram usados como um dado de dez faces duplo, ignorando a diferença de cores.\n[…]\nUm dado com dois números um e sem o número seis;\n[…]\nDado dos elementos, contendo seis desenhos: Fogo, Água, Terra, Ar, Vida e Morte.\n[…]\nMuitas vezes quando se utiliza dados multifacetados, refere-se a eles pelo número de faces e a letra 'd', como d6 para um dado de seis faces, d10 para um dado de dez faces, e assim por diante. Caso seja necessário mais de um dado é acrescentado um número a frente do 'd' - Número de dados 'd' Número de lados de cada dado. Combinações de dados e de outros números também são possíveis, tais como '1d10-3' seria um dado de dez lados e o seu resultado menos três.\n[…]\nQuando não se tem dois dados com mesmo número de lados para um '2d8', por exemplo, joga-se o mesmo dado duas vezes. Isso é muito útil para jogos como Banco Imobiliário e RPGs em geral. O dado estilo peão tem uma forma semi-cilíndrica quando com mais de dez lados. Também propiciam a possibilidade de um dado com três lados (sem contar os outros seis das pontas), em forma de uma barraca.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
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
