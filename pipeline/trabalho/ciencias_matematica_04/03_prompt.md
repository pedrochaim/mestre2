Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Matemática** (tema **Ciências**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Arquimedes",
      "descricao": "Matemático, físico e inventor grego de Siracusa, do século três antes de Cristo, autor do princípio do empuxo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Para estimar pi, Arquimedes desenhou polígonos regulares dentro e fora de um círculo. Quantos lados tinham os maiores polígonos que ele usou?",
    "resposta": "Noventa e seis",
    "distratores": [
      "Trinta e dois",
      "Sessenta",
      "Cento e vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Measurement_of_a_Circle",
      "https://en.wikipedia.org/wiki/Approximations_of_%CF%80"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Measurement_of_a_Circle",
        "situacao": "ok",
        "texto": "Measurement of a Circle or Dimension of the Circle (Greek: Κύκλου μέτρησις, Kuklou metrēsis) is a treatise that consists of three propositions, probably made by Archimedes, ca. 250 BCE. The treatise is only a fraction of what was a longer work.\n[…]\nThis approximates what we now call the mathematical constant π. He found these bounds on the value of π by inscribing and circumscribing a circle with two similar 96-sided regular polygons.\n[…]\nAlthough only one route to the bounds is mentioned, in fact there are two others, making the bounds almost inescapable however the method is worked. But the bounds can also be produced by an iterative geometrical construction suggested by Archimedes' Stomachion in the setting of the regular dodecagon. In this case, the task is to give rational approximations to the tangent of π/12."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Approximations_of_%CF%80",
        "situacao": "ok",
        "texto": "Approximations for the mathematical constant pi (π) in the history of mathematics reached an accuracy within 0.04% of the true value before the beginning of the Common Era. In Chinese mathematics, this was improved to approximations correct to what corresponds to about seven decimal digits by the 5th century of the Common Era.\n[…]\nIn the 3rd century BCE, Archimedes proved the sharp inequalities 223⁄71 < π < 22⁄7 , by means of regular 96-gons (accuracies of 2·10−4 and 4·10−4, respectively).\n[…]\nIndian mathematician Bhaskara II (12th century) used regular polygons with up to 384 sides to obtain another approximation of π, calculating it as 3.141666.\n[…]\nHe achieved this level of accuracy by calculating the perimeter of a regular polygon with 3 × 228 sides.\n[…]\nArchimedes, in his Measurement of a Circle, created the first algorithm for the calculation of π based on the idea that the perimeter of any (convex) polygon inscribed in a circle is less than the circumference of the circle, which, in turn, is less than the perimeter of any circumscribed polygon. He started with inscribed and circumscribed regular hexagons, whose perimeters are readily determined.\n[…]\nHe then shows how to calculate the perimeters of regular polygons of twice as many sides that are inscribed and circumscribed about the same circle. This is a recursive procedure which would be described today as follows: Let pk and Pk denote the perimeters of regular polygons of k sides that are inscribed and circumscribed about the same circle, respectively. Then,\n[…]\nOther formulae that have been used to compute estimates of π include:\n[…]\nThe following expressions have been used to estimate π:\n[…]\nOther formulae that have been used to compute estimates of π include:"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Srinivasa Ramanujan",
      "descricao": "Matemático indiano do início do século vinte, autodidata, com contribuições à teoria dos números e às séries infinitas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O indiano Srinivasa Ramanujan deixou milhares de fórmulas, mas viveu pouco. Com quantos anos ele morreu?",
    "resposta": "Trinta e dois",
    "distratores": [
      "Vinte e seis",
      "Trinta e oito",
      "Quarenta e cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Srinivasa_Ramanujan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Srinivasa_Ramanujan",
        "situacao": "ok",
        "texto": "Srinivasa Ramanujan Iyengar (22 December 1887 – 26 April 1920) was an Indian mathematician who worked during the early 20th century. He made substantial contributions to mathematical analysis, number theory, infinite series, and continued fractions, including solutions to mathematical problems then considered unsolvable.\n[…]\nRamanujan, an Indo-British collaboration film chronicling Ramanujan's life, was released in 2014 by the independent film company Camphor Cinema. The cast and crew include director Gnana Rajasekaran, cinematographer Sunny Joseph and editor B. Lenin. Indian and English stars Abhinay Vaddi, Suhasini Maniratnam, Bhama, Kevin McGowan and Michael Lieber star in pivotal roles.\n[…]\nNandan Kudhyadi directed the Indian documentary films The Genius of Srinivasa Ramanujan (2013) and Srinivasa Ramanujan: The Mathematician and His Legacy (2016) about the mathematician.\n[…]\nRamanujan (The Man Who Reshaped 20th Century Mathematics), an Indian docudrama film directed by Akashdeep released in 2018.\n[…]\nDavid Leavitt's novel The Indian Clerk explores the events following Ramanujan's letter to Hardy.\n[…]\nIn the television series Numbers, the character Amita Ramanujan (Navi Rawat) was named after Srinivasa.\n[…]\nSrinivasa Ramanujan at the Mathematics Genealogy Project\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Srinivasa Ramanujan\", MacTutor History of Mathematics Archive, University of St Andrews\n[…]\nWeisstein, Eric Wolfgang (ed.). \"Ramanujan, Srinivasa (1887–1920)\". ScienceWorld.\n[…]\nA Study Group For Mathematics: Srinivasa Ramanujan Iyengar[link removed]\n[…]\nHindu.com: Norwegian and Indian mathematical geniuses, Ramanujan – Essays and Surveys Archived 6 November 2012 at the Wayback Machine, Ramanujan's growing influence, Ramanujan's mentor\n[…]\nHindu.com: The sponsor of Ramanujan\n[…]\nRamanujan's papers and notebooks\n[…]\nRamanujan on Fried Eye"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sriniv%C4%81sa_R%C4%81m%C4%81nujan",
        "situacao": "ok",
        "texto": "Srinivāsa Aiyangār Rāmānujan (em tâmil: ஸ்ரீனிவாஸ ஐயங்கார் ராமானுஜன்) (Erode, 22 de dezembro de 1887 — Kumbakonam, 26 de abril de 1920) foi um matemático indiano. Sem qualquer formação acadêmica, deu contributos importantes para as áreas da análise matemática, teoria dos números, séries infinitas, frações continuadas, entre outros ramos da matemática, incluindo problemas considerados insolúveis.\n[…]\nO The Ramanujan Journal, periódico científico que abrange todas as áreas da matemática, especialmente aquelas influenciadas pelo matemático indiano Srinivasa Ramanujan, foi criada em 1997 pela Springer Science + Business Media. Seus cadernos contendo resultados e fórmulas não publicados foram analisados e estudados por décadas desde a sua morte com fonte para novas e inovadoras ideias matemáticas.\n[…]\nQuando Ramanujan tinha um ano e meio de vida, sua mãe deu à luz a seu irmão, Sadagopan, que morreu menos de três meses depois. Em dezembro de 1889, Ramanujan contraiu varíola, mas sobreviveu, enquanto outros 4 mil indianos morreriam no mesmo ano no distrito de Thanjavur. Depois de recuperado, eles se mudaram para Conjiverão, perto de Madras, hoje Chenai, onde sua mãe deu à luz a mais dois bebês, em 1891 e 1894, mas os dois morreram antes de completarem um ano.\n[…]\nHá uma conhecida anedota acerca de Ramanujan que mostra seu espírito dedicado à matemática. Estando hospitalizado em Londres, foi visitado por G.H. Hardy, que viera de táxi e comentou que o número deste era 1729. Ramanujan disse que era um belo número, pois se tratava do menor número natural representado, de duas formas diferentes, pela soma de dois cubos: 1729 = 103 + 93 = 13 + 123.\n[…]\nO'Connor, John J.; Robertson, Edmund F., «Srinivāsa Rāmānujan», MacTutor History of Mathematics archive (em inglês), Universidade de St. Andrews\n[…]\nSrinivāsa Rāmānujan (em inglês) no Mathematics Genealogy Project\n[…]\nRamanujan's papers and notebooks",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Sequência de Fibonacci",
      "descricao": "Sequência numérica em que cada termo é a soma dos dois anteriores, apresentada na Europa por Fibonacci no Liber Abaci."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Tirando o zero e o um, qual é o único número da sequência de Fibonacci que é um quadrado perfeito?",
    "resposta": "Cento e quarenta e quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fibonacci_sequence",
      "https://en.wikipedia.org/wiki/144_(number)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fibonacci_sequence",
        "situacao": "ok",
        "texto": "In mathematics, the Fibonacci sequence is a sequence in which each element is the sum of the two elements that precede it. Numbers that are part of the Fibonacci sequence are known as Fibonacci numbers, commonly denoted Fn . The initial elements of the sequence are F1 = 1 and F2 = 1, though many authors also include a zeroth element F0 = 0. Starting from F0, the sequence begins\n[…]\nFibonacci coding\n[…]\nThe measured values of voltages and currents in the infinite resistor chain circuit (also called the resistor ladder or infinite series-parallel circuit) follow the Fibonacci sequence. The intermediate results of adding the alternating series and parallel resistances yields fractions composed of consecutive Fibonacci numbers. The equivalent resistance of the entire circuit equals the golden ratio.\n[…]\nBrasch et al. 2012 show how a generalized Fibonacci sequence also can be connected to the field of economics. In particular, it is shown how a generalized Fibonacci sequence enters the control function of finite-horizon dynamic optimisation problems with one state and one control variable. The procedure is illustrated in an example often referred to as the Brock–Mirman economic growth model.\n[…]\nMario Merz included the Fibonacci sequence in some of his artworks beginning in 1970.\n[…]\nFibonacci numbers in popular culture\n[…]\nFibonacci word – Binary sequence from Fibonacci recurrence\n[…]\nRandom Fibonacci sequence – Randomized mathematical sequence based upon the Fibonacci sequence\n[…]\nWythoff array – Infinite matrix of integers derived from the Fibonacci sequence\n[…]\nFibonacci Sequence and Golden Ratio: Mathematics in the Modern World - Mathuklasan with Sir Ram on YouTube - animation of sequence, spiral, golden ratio, rabbit pair growth. Examples in art, music, architecture, nature, and astronomy\n[…]\nPeriods of Fibonacci Sequences Mod m at MathPages\n[…]\nFibonacci Sequence on In Our Time at the BBC"
      },
      {
        "url": "https://en.wikipedia.org/wiki/144_(number)",
        "situacao": "ok",
        "texto": "144 (one hundred [and] forty-four) is the natural number following 143 and preceding 145. It is coincidentally both the square of twelve (a dozen dozens, or one gross) and the twelfth Fibonacci number, and the only nontrivial number in the sequence that is square."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci",
        "situacao": "ok",
        "texto": "Na matemática, a sucessão de Fibonacci (ou sequência de Fibonacci), é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual cada termo subsequente  corresponde à soma dos dois anteriores. A sequência recebeu o nome do matemático italiano Leonardo de Pisa ou Leonardo Fibonacci, mais conhecido por apenas Fibonacci, que descreveu, no ano de 1202, o crescimento de uma população d\n[…]\nNa espiral do nautilus, por exemplo, pode ser facilmente percebida a sequência de Fibonacci. A composição de quadrados com lados de medidas proporcionais aos números da sequência mostram a existência desta sucessão numérica nesta peça natural.\n[…]\nEm uma cena, Max desenha quadrados com arestas de medidas proporcionais aos elementos da sequência de Fibonacci e os sobrepõe ao desenho do Homem Vitruviano de Leonardo da Vinci, trazendo-lhe certezas às suas convicções de que a matemática é a linguagem da natureza. Em outra cena, Max apanha uma concha em uma praia e observa a espiral nela descrita.\n[…]\nEm outro trecho do filme, Max encontra o judeu Lenny Meyer, que lhe fala da crença em que a Torah seria uma sequência de números que formam um código enviado por Deus, quando entendidas as correspondências entre as letras do alfabeto hebraico a números. Max diz que alguns dos conceitos apresentados por Lenny são similares a uma sequência de Fibonacci.\n[…]\nUm repfigit ou número de Keith é um número inteiro, superior a 9, tal que os seus dígitos, ao começar uma sequência de Fibonacci, alcançam posteriormente o referido número. Um exemplo é 47, porque a sequência de Fibonacci que começa com 4 e 7 (4, 7, 11, 18, 29, 47) alcança o 47.\n[…]\nUm repfigit pode ser uma sequência de Tribonacci se houver três dígitos no número, e de Tetranacci se o número tiver quatro dígitos, etc.\n[…]\nnúmero de quatro dígitos:\n[…]\numa sequência\n[…]\ntermos. Se o número N aparece na sequência\n[…]\n«O número de ouro e a sequência de Fibonacci». UFF",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Razão áurea",
      "descricao": "Número irracional aproximadamente igual a um vírgula seis um oito, também chamado proporção áurea ou número de ouro."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A razão áurea, também chamada de número de ouro, vale aproximadamente quanto?",
    "resposta": "1,618",
    "distratores": [
      "1,414",
      "1,732",
      "2,718"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Propor%C3%A7%C3%A3o_%C3%A1urea",
      "https://en.wikipedia.org/wiki/Golden_ratio"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Propor%C3%A7%C3%A3o_%C3%A1urea",
        "situacao": "ok",
        "texto": "Proporção áurea, número de ouro, número áureo, secção áurea, proporção de ouro é uma constante real algébrica irracional denotada pela letra grega\n[…]\n(PHI), em homenagem ao escultor Phideas (Fídias), que a teria utilizado para conceber o Parthenon, e com o valor arredondado a três casas decimais de 1,618. Também é chamada de se(c)ção áurea (do latim sectio aurea), razão áurea, razão de ouro, média e extrema razão (Euclides), divina proporção, divina seção (do latim sectio divina), proporção em extrema razão, divisão de extrema razão ou áurea excelência. O número de ouro é ainda frequentemente chamado razão de Phidias.\n[…]\n1,618\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\n1\n[…]\nEm geometria, o retângulo de ouro surge do processo de divisão em média e extrema razão, de Euclides. Ele é assim chamado porque ao dividir-se a base desse retângulo pela sua altura, obtêm-se o número de ouro 1,618. A cada etapa em que um retânculo é seccionado, retirando-se um quadrado de sua extremidade, surge outro retângulo conguente.\n[…]\nNa Pirâmide de Quéops, no Egito, cada bloco é 1,618 vezes maior que o bloco do nível logo acima e também, as câmaras em seu interior seguem esta proporção, de forma que os comprimentos das salas são 1,618 vezes maiores que as larguras. Ainda, nas ruínas do Parthenom, na Grécia, são notadas inúmeras presenças da razão áurea.\n[…]\nA aplicação da seqüência e da razão de ouro, mais especificamente o seu inverso, 0,618, na análise dos padrões de reversão de ações é o ponto que liga Fibonacci ao mercado de ações. São pontos baseados nos números descobertos pelo italiano que, segundo muitos analistas, podem indicar os níveis de suporte ou resistência de um papel."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Golden_ratio",
        "situacao": "ok",
        "texto": "In mathematics, two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Expressed algebraically, for quantities ⁠a⁠ and ⁠b⁠ with ⁠a>b>0⁠, ⁠a⁠ is in a golden ratio to ⁠b⁠ if\n[…]\n1:φ+:φ.\n[…]\nThe golden ratio proportions the adjacent side lengths of a golden rectangle in ⁠1:φ⁠ ratio. Removing or adding squares from golden rectangles leaves rectangles still proportioned in ⁠φ⁠ ratio. They can be generated by golden spirals, through successive Fibonacci and Lucas number-sized squares and quarter circles. They feature prominently in the geometry of the regular icosahedron and dodecahedron.\n[…]\nA golden rhombus is a rhombus whose diagonals are in proportion to the golden ratio, most commonly ⁠1:φ⁠. For a rhombus of such proportions, its acute angle and obtuse angles are:\n[…]\nwhere ⁠Im⁡τ>0⁠ and ⁠(ez)1/5⁠ in the continued fraction should be evaluated as ⁠ez/5⁠. The function ⁠τ↦R(e2πiτ)⁠ is invariant under ⁠Γ(5)⁠, a congruence subgroup of the modular group. Also for positive real numbers ⁠a⁠ and ⁠b⁠ such that ⁠ab=π2,⁠\n[…]\n(φ+R(e−2a))(φ+R(e−2b))=φ5,(φ−1−R(−e−a))(φ−1−R(−e−b))=φ−15.\n[…]\nThere was a time when deviations from the truly beautiful page proportions ⁠2:3⁠, ⁠1:3⁠, and the Golden Section were rare. Many books produced between 1550 and 1770 show these proportions exactly, to within half a millimeter.\n[…]\nHistorian John Man states that both the pages and text area of the Gutenberg Bible were \"based on the golden section shape\". However, according to his own measurements, the ratio of height to width of the pages is ⁠1.45⁠.\n[…]\nMetallic ratio – Solution to the quadratic equation x2=nx+1 for a positive integer ⁠n⁠\n[…]\nPlastic ratio – Solution to x3=x+1\n[…]\nSupergolden ratio – Solution to x3=x2+1"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Último Teorema de Fermat",
      "descricao": "Teorema enunciado por Pierre de Fermat em 1637 e demonstrado por Andrew Wiles em 1994."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O último teorema de Fermat diz que uma potência de inteiros positivos nunca é a soma de outras duas de mesmo grau. Isso vale a partir de que expoente?",
    "resposta": "Três",
    "fonte": [
      "https://pt.wikipedia.org/wiki/%C3%9Altimo_teorema_de_Fermat",
      "https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%9Altimo_teorema_de_Fermat",
        "situacao": "ok",
        "texto": "O Último Teorema de Fermat é um famoso teorema matemático conjecturado pelo matemático francês Pierre de Fermat em 1637. Trata-se de uma generalização do famoso Teorema de Pitágoras, que diz \"a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa\": (\n[…]\n, não pode ser escrita como um número inteiro elevado a esta potência.\n[…]\n\"É impossível para um cubo ser escrito como a soma de dois cubos ou uma quarta potência ser escrita como a soma de duas quartas potências ou, em geral, para qualquer número que é uma potência maior do que a segunda, ser escrito como a soma de duas potências com o mesmo expoente”.\n[…]\nWiles, então, submeteu seu trabalho à revista Inventiones Mathematicae, e seu editor Barry Mazur  começou o processo de selecionar os juízes para julgarem o trabalho. A demonstração de Wiles envolvia uma variedade tão grande de técnicas matemáticas, antigas e modernas, que Mazur tomou a decisão fora do comum de nomear não apenas dois ou três examinadores, como é normal, mas seis.\n[…]\nComo mencionado, o Último Teorema de Fermat afirma que não existe nenhum conjunto de inteiros positivos x, y, z e n com n maior que 2 que satisfaça\n[…]\n\" em um quadro negro, que parece ser um contraexemplo do Último Teorema de Fermat. A equação está incorreta, mas parece estar correta se for testada em uma calculadora portátil que exibe apenas 10 algarismos significativos. Os cálculos batem com 10 dos 44 dígitos decimais, mas as regras de divisibilidade simples mostram que 3 987 e 4 365 são múltiplos de 3, de modo que uma soma de seus potências também são.\n[…]\nO Livro \"O Último Teorema de Fermat: À descoberta do segredo de um problema matemático secular\", de Amir D. Aczel (1997) também fala sobre este teorema.\n[…]\nO Último Teorema de Fermat, livro de Simon Singh"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem",
        "situacao": "ok",
        "texto": "In number theory, Fermat's Last Theorem (sometimes called Fermat's conjecture, especially in older texts) states that there are no positive integers a,b,c,n with n>2 such that an+bn=cn. The cases n=1 and n=2 have been known since antiquity to have infinitely many solutions.\n[…]\nThe generalized Fermat equation generalizes the statement of Fermat's last theorem by considering positive integer solutions a, b, c, m, n, and k satisfying\n[…]\nThe Beal conjecture states that there are no solutions to the generalized Fermat equation in positive integers a, b, c, m, n, k with a, b, and c being pairwise coprime and all of m, n, k being greater than 2.\n[…]\nThe Fermat–Catalan conjecture generalizes Fermat's last theorem with the ideas of the Catalan conjecture. The conjecture states that the generalized Fermat equation has only finitely many solutions (a, b, c, m, n, k) with distinct triplets of values (am, bn, ck), where a, b, c are positive coprime integers and m, n, k are positive integers satisfying\n[…]\nfor positive, coprime integers m, k.\n[…]\nwhich is impossible by Fermat's Last Theorem.\n[…]\nThe abc conjecture roughly states that if three positive integers a, b and c (hence the name) are coprime and satisfy a + b = c, then the radical d of abc is usually not much smaller than c. In particular, the abc conjecture in its most standard formulation implies Fermat's last theorem for n that are sufficiently large. The modified Szpiro conjecture is equivalent to the abc conjecture and therefore has the same implication.\n[…]\nIn March 2016, Wiles was awarded the Norwegian government's Abel Prize worth €600,000 for \"his stunning proof of Fermat's Last Theorem by way of the modularity conjecture for semistable elliptic curves, opening a new era in number theory\"."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Triângulo de Pascal",
      "descricao": "Arranjo triangular dos coeficientes binomiais, em que cada número é a soma dos dois acima dele."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Somando todos os números de cada linha do triângulo de Pascal, obtém-se sempre uma potência de que número?",
    "resposta": "Dois",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tri%C3%A2ngulo_de_Pascal",
      "https://en.wikipedia.org/wiki/Pascal%27s_triangle"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tri%C3%A2ngulo_de_Pascal",
        "situacao": "ok",
        "texto": "O triângulo de Pascal (alguns países, nomeadamente na Itália, é conhecido como Triângulo de Tartaglia) é um triângulo numérico infinito formado por números binomiais\n[…]\nrepresenta o número da linha e\n[…]\nEle define os números no triângulo por recursão: Chame o número na (m+1)-ésima linha e na (n+1)-ésima coluna por tmn. Então tmn = tm-1,n-1 + tm-1,n, para m = 0, 1, 2... e n = 0, 1, 2... As condições de contorno são tm, −1 = 0, t−1, n para m = 1, 2, 3... e n = 1, 2, 3... O gerador t00 = 1. Pascal conclui com a prova,\n[…]\nCada número do triângulo de Pascal é igual à soma do número imediatamente acima e do antecessor do número de cima.\n[…]\nA soma de uma linha no triângulo de Pascal é igual a\n[…]\nA soma da coluna, no triângulo de Pascal, pode ser calculada pela relação\n[…]\nO triângulo de Pascal apresenta simetria em relação à altura, se for escrito da seguinte forma:\n[…]\n(Simetria) do triângulo de Pascal, pode-se encontrar a seguinte fórmula para soma de diagonais:\n[…]\n1- Em toda a infinita coluna central do Triângulo, na figura abaixo, o produto de dois de seus elementos é maior do que o produto de dois elementos pertencentes à mesma coluna central, localizados simetricamente entre eles. Por exemplo, na figura abaixo: 1 x 20 > 2 x 6, ou então, 2 x 20 > 6 x 6, ou ainda, 1 x 6 > 2 x 2. Isto vale para toda a coluna central.\n[…]\n2- Dados dois elementos A e B da coluna central, o produto deles é maior do que o produto de dois elementos C e D pertencentes às diagonais que passam por A e por B, que estejam simetricamente localizados em relação a A e a B. Por exemplo, olhando novamente a figura acima: se A = 2 e B = 20, então:\n[…]\nBlaise Pascal\n[…]\nPirâmide de Pascal"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pascal%27s_triangle",
        "situacao": "ok",
        "texto": "In mathematics, Pascal's triangle is an infinite triangular array of the binomial coefficients which play a crucial role in probability theory, combinatorics, and algebra. In much of the Western world, it is named after the  French mathematician Blaise Pascal, although other mathematicians studied it centuries before him in India, Persia, China, Germany, and Italy.\n[…]\nIn Italy, Pascal's triangle is referred to as Tartaglia's triangle, named for the Italian algebraist Tartaglia (1500–1577), who published six rows of the triangle in 1556. Gerolamo Cardano also published the triangle as well as the additive and multiplicative rules for constructing it in 1570.\n[…]\nPascal's triangle has higher dimensional generalizations. The three-dimensional version is known as Pascal's pyramid or Pascal's tetrahedron, while the general versions are known as Pascal's simplices.\n[…]\nWhen the factorial function is defined as z!=Γ(z+1), Pascal's triangle can be extended beyond the integers to ℂ, since Γ(z+1) is meromorphic to the entire complex plane.\n[…]\nIsaac Newton once observed that the first five rows of Pascal's triangle, when read as the digits of an integer, are the corresponding powers of eleven. He claimed without proof that subsequent rows also generate powers of eleven. In 1964, Robert L. Morton presented the more generalized argument that each row n can be read as a radix a numeral, where limn→∞11an is the hypothetical terminal row, or limit, of the triangle, and the rows are its partial products.\n[…]\n\"Pascal triangle\", Encyclopedia of Mathematics, EMS Press, 2001 [1994]\n[…]\nWeisstein, Eric W. \"Pascal's triangle\". MathWorld.\n[…]\nThe Old Method Chart of the Seven Multiplying Squares (from the Ssu Yuan Yü Chien of Chu Shi-Chieh, 1303, depicting the first nine rows of Pascal's triangle)\n[…]\nPascal's Treatise on the Arithmetic Triangle (page images of Pascal's treatise, 1654; summary)"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Sudoku",
      "descricao": "Quebra-cabeça de lógica de preencher uma grade 9x9 com dígitos de 1 a 9 sem repetir em linhas, colunas e blocos 3x3."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 2012, uma busca feita com ajuda de computadores mostrou que um sudoku com solução única precisa de pelo menos quantas pistas?",
    "resposta": "Dezessete",
    "distratores": [
      "Doze",
      "Vinte e um",
      "Vinte e cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mathematics_of_Sudoku"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mathematics_of_Sudoku",
        "situacao": "ok",
        "texto": "Mathematics can be used to study sudoku puzzles to answer questions such as \"How many filled sudoku grids are there?\", \"What is the minimal number of clues in a valid puzzle?\" and \"In what ways can sudoku grids be symmetric?\" through the use of combinatorics and group theory.\n[…]\nMany sudokus have been found with 17 clues, although finding them is not a trivial task. A 2014 paper by Gary McGuire, Bastian Tugemann, and Gilles Civario proved that the minimum number of clues in any proper sudoku is 17 through an exhaustive computer search based on hitting set enumeration.\n[…]\nAnother way of formulating sudoku as a computational problem is as the exact cover problem. In this problem, one is given a family of sets, and must choose a subfamily of disjoint sets that has the same union. One way of formulating a sudoku puzzle in this way uses sets with four kinds of elements:\n[…]\nFor standard 9×9 sudoku, the number of solutions is\n[…]\nThe precise structure of the sudoku symmetry group can be expressed succinctly using the wreath product (≀). The possible row (or column) permutations form a group isomorphic to S3≀S3 of order 3!4 = 1,296. The whole rearrangement group is formed by letting the transposition operation (isomorphic to C2) act on two copies of that group, one for the row permutations and one for the column permutations. This is S3≀S3≀C2, a group of order 1,2962 × 2 = 3,359,232.\n[…]\nFinally, the relabelling operations commute with the rearrangement operations, so the full sudoku (VPT) group is (S3≀S3≀C2)×S9 of order 1,218,998,108,160.\n[…]\nUsing this technique, Ed Russell and Frazer Jarvis were the first to compute the number of essentially different sudoku solutions as 5,472,730,538.\n[…]\nSudoku code"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Matem%C3%A1tica_do_Sudoku",
        "situacao": "ok",
        "texto": "A matemática pode ser usada para estudar quebra-cabeças de Sudoku para responder perguntas como \"Quantas grades de Sudoku preenchidas existem?\", \"Qual é o número mínimo de pistas em um quebra-cabeça válido?\" e \"De que maneiras as grades de Sudoku podem ser simétricas?\" através do uso de combinatória e teoria dos grupos.\n[…]\nPara o Sudoku clássico, o número de grades preenchidas é 6.670.903.752.021.072.936.960 (6,671×1021), que se reduz a 5.472.730.538 soluções essencialmente diferentes sob as transformações que preservam a validade. Existem 26 tipos possíveis de simetria, mas eles só podem ser encontrados em cerca de 0,005% de todas as grades preenchidas. Um quebra-cabeça comum com uma solução única deve ter pelo menos 17 pistas. Existe um quebra-cabeça solucionável com no máximo 21 pistas para cada grade resolvida.\n[…]\nSudokus comuns (quebra-cabeças próprios) têm uma solução única. Um Sudoku minimal é um Sudoku do qual nenhuma pista pode ser removida mantendo-o um Sudoku próprio. Diferentes Sudokus minimais podem ter um número diferente de pistas. Esta seção discute o número mínimo de pistas para quebra-cabeças próprios.\n[…]\nMuitos Sudokus foram encontrados com 17 pistas, embora encontrá-los não seja uma tarefa trivial. Um artigo de 2014 de Gary McGuire, Bastian Tugemann e Gilles Civario provou que o número mínimo de pistas em qualquer Sudoku próprio é 17 através de uma busca computacional exaustiva baseada em enumeração de conjuntos de cobertura.\n[…]\nUma grade solução do Sudoku é também um quadrado latino. Há significativamente menos grades de Sudoku do que quadrados latinos porque o Sudoku impõe restrições regionais adicionais.\n[…]\nA resposta para a pergunta 'Quantas grades de Sudoku existem?' depende da definição de quando soluções semelhantes são consideradas diferentes.\n[…]\nGlossário de Sudoku\n[…]\nCódigo do Sudoku",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Cubo mágico",
      "descricao": "Quebra-cabeça tridimensional de faces coloridas giratórias, inventado pelo húngaro Ernő Rubik em 1974."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 2010, computadores provaram que qualquer posição embaralhada do cubo mágico pode ser resolvida em no máximo quantos movimentos?",
    "resposta": "Vinte",
    "distratores": [
      "Doze",
      "Trinta e dois",
      "Quarenta e cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Optimal_solutions_for_the_Rubik%27s_Cube"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Optimal_solutions_for_the_Rubik%27s_Cube",
        "situacao": "ok",
        "texto": "Optimal solutions for the Rubik's Cube are solutions that are the shortest in some sense. There are two common ways to measure the length of a solution. The first is to count the number of quarter turns (90°). The second and more popular is to count the number of outer-layer twists, called \"face turns\".\n[…]\nTo denote a sequence of moves on the 3×3×3 Rubik's Cube, this article uses \"Singmaster notation\", which was developed by David Singmaster.\n[…]\nFive computer algorithms (four of which can find an optimal Rubik's Cube solution in the half-turn metric) are briefly described below in chronological order. An animated example solve has been made for each of them. The scrambling move sequence used in all example solves is: U2 B2 R' F2 R' U2 L2 B2 R' B2 R2 U2 B2 U' L R2 U L F D2 R' F'. See example solves and use the buttons at the top right to navigate through the solves, then use the button bar at the bottom to play the solving sequence.\n[…]\nFeather's algorithm was implemented in the first online optimal Rubik's Cube solver, more specifically in the first client-side processing (JavaScript) solver with a graphical user interface running in a web browser and being able to generate optimal solutions in a timely manner. That includes computing 19-move-long optimal solutions, as they will occur in roughly 3.4% of all cases in a batch of randomly scrambled cubes.\n[…]\nFinally, in 2010, Tomas Rokicki, Herbert Kociemba, Morley Davidson, and John Dethridge gave the final computer-assisted proof that all cube positions could be solved with a maximum of 20 face turns. In 2009, Tomas Rokicki proved that 29 moves in the quarter-turn metric is enough to solve any scrambled cube. And in 2014, Tomas Rokicki and Morley Davidson proved that the maximum number of quarter-turns needed to solve the cube is 26."
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Problemas de Hilbert",
      "descricao": "Lista de vinte e três problemas de matemática apresentada por David Hilbert num congresso em Paris."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em 1900, o alemão David Hilbert propôs uma lista de grandes problemas em aberto que guiou a matemática do século vinte. Quantos problemas havia nela?",
    "resposta": "Vinte e três",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Problemas_de_Hilbert",
      "https://en.wikipedia.org/wiki/Hilbert%27s_problems"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Problemas_de_Hilbert",
        "situacao": "ok",
        "texto": "Os Problemas de Hilbert são uma lista de 23 problemas em matemática propostos pelo matemático alemão David Hilbert na conferência do Congresso Internacional de Matemáticos de Paris em 1900. Nenhum dos problemas havia tido solução até então, e vários deles acabaram se tornando muito influentes na matemática do século XX. Nessa conferência, ele publicou 10 dos problemas (1, 2, 6, 7, 8, 13, 16, 19, 2\n[…]\nNotavelmente, os outros vinte e um problemas receberam uma atenção significante e, no final do século vinte, trabalhos com estes problemas ainda são de grande importância. Paul Cohen recebeu a Medalha Fields, em 1966, por seu trabalho no primeiro problema e pela solução negativa para o décimo problema em 1970 por Matiyasevich (completando o trabalho de Davis, Putnam e Robinson) geraram uma aclamação similar. Aspectos desses problemas ainda despertam grande interesse hoje.\n[…]\nPelo menos na grande mídia, o análogo do século XXI dos problemas de Hilbert é a lista de sete Millennium Prize Problems escolhido em 2000 pelo Instituto Clay de Matemática. Ao contrário dos problemas de Hilbert, onde o prêmio principal foi a admiração de Hilbert em particular e os matemáticos em geral, cada problema-prêmio inclui uma recompensa de milhões de dólares.\n[…]\nNotável por sua aparição na lista de problemas de Hilbert, a lista de Smale e a lista de Millennium Prize Problems - e até mesmo, em seu disfarce geométrico, nas Conjecturas de Weil - é a hipótese de Riemann. Apesar de alguns ataques famosos recentes de grandes matemáticos atuais, muitos especialistas acreditam que a hipótese de Riemann ainda será incluída em listas de problemas durante séculos.\n[…]\nEm 2008, a DARPA anunciou a sua própria lista de 23 problemas que ele esperava que pudessem causar grandes descobertas matemáticas \"desse modo reforçando as capacidades científicas e tecnológicas do DoD\".\n[…]\nEnglish translation of Hilbert's 1900 address"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hilbert%27s_problems",
        "situacao": "ok",
        "texto": "Hilbert's problems are 23 problems in mathematics published by German mathematician David Hilbert in 1900. He intended to rival the master of French mathematics, Henri Poincaré, and to prove that he was cut from the same cloth. They were all unsolved at the time, and several proved to be very influential for 20th-century mathematics.\n[…]\nHowever, the Weil conjectures were more like a single Hilbert problem in scope, and Weil never intended them as a programme for all mathematics.\n[…]\nWhile most of Hilbert's problems were not recognised widely in mathematical community before publication of his list, all of Millennium Prize Problem was well-known from decades and earned many attempted proofs. As with the Hilbert problems, one of the prize problems (the Poincaré conjecture) was solved relatively soon after the problems were announced.\n[…]\nThe Riemann hypothesis is noteworthy for its appearance on the list of Hilbert problems, Smale's list, the Millennium Prize Problems, and the Weil conjectures in its geometric setting. Despite extensive efforts by mathematicians throughout the 20th and 21st centuries, the conjecture remains unproven. Reflecting on its enduring difficulty, Hilbert remarked: \"If I were to awaken after having slept for a thousand years, my first question would be: Has the Riemann hypothesis been proved?\"\n[…]\nIn 2008, DARPA announced its own list of 23 problems that it hoped could lead to major mathematical breakthroughs, \"thereby strengthening the scientific and technological capabilities of the DoD\". The DARPA list also includes a few problems from Hilbert's list, e.g. the Riemann hypothesis.\n[…]\n\"Hilbert problems\". Encyclopedia of Mathematics. EMS Press. 2001 [1994].\n[…]\n\"David Hilbert's \"Mathematical Problems\": A lecture delivered before the International Congress of Mathematicians at Paris in 1900\" (PDF)."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Problemas do Prêmio Millennium",
      "descricao": "Conjunto de grandes problemas de matemática para os quais o Instituto Clay ofereceu, em 2000, um prêmio de um milhão de dólares por solução."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No ano 2000, o Instituto Clay ofereceu um milhão de dólares pela solução de cada um dos chamados Problemas do Milênio. Quantos são esses problemas?",
    "resposta": "Sete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Millennium_Prize_Problems"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Millennium_Prize_Problems",
        "situacao": "ok",
        "texto": "The Millennium Prize Problems are seven well-known complex mathematical problems selected by the Clay Mathematics Institute in 2000. Each of the problems has a prize of one million US dollars for the first correct solution, pledged by the Clay Mathematics Institute.\n[…]\nThe Clay Mathematics Institute officially designated the title Millennium Prize Problem for the seven unsolved mathematical problems, the Birch and Swinnerton-Dyer conjecture, Hodge conjecture, Navier–Stokes existence and smoothness, P versus NP problem, Riemann hypothesis, Yang–Mills existence and mass gap, and the Poincaré conjecture at the Millennium Meeting held on May 24, 2000.\n[…]\nOn September 8, 2026, OpenAI posted a claimed solution to the Navier-Stokes equation satisfying statements (C) and (D) of the Millennium Prize problem, along with a formalized proof. As of October 2026, this solution to the Navier-Stokes equation awaits scientific validation, but the Clay Mathematical Institute wrote that \"CMI shares in the excitement of the global mathematical community as we contemplate the announcement that the Navier-Stokes problem has apparently been settled.\"\n[…]\nMartin Bridson, the president of the Clay Mathematics Institute, stressed that the institute requires a solution to a Millennium problem to be in the form of peer-reviewed publications, which would then be further scrutinised before the prize is awarded. Additionally, the Clay Institute only considers proposed solutions to Millennium Prize problems after at least two years since publication.\n[…]\nCarlson, James; Jaffe, Arthur; Wiles, Andrew, eds. (2006). The Millennium Prize Problems. Providence, Rhode Island: American Mathematical Society and Clay Mathematics Institute. ISBN 978-0-8218-3679-8.\n[…]\nThe Millennium Prize Problems"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Problemas_do_Pr%C3%A9mio_Millennium",
        "situacao": "ok",
        "texto": "Os Prêmios dos Problemas do Milênio (em inglês: Millennium Prize Problems) são sete problemas matemáticos estabelecidos pelo Instituto Clay de Matemática. A correta solução de qualquer um destes problemas resulta em um prémio de um milhão de dólares entregues pelo Instituto a quem realizar esta resolução.\n[…]\nAtualmente, apenas a conjectura de Poincaré foi resolvida, em 2010, pelo matemático russo Grigori Perelman, que recusou tanto este prêmio quanto a Medalha Fields em 2006. Em setembro de 2026, a OpenAI afirmou ter encontrado uma solução para o problema da existência e suavidade de Navier-Stokes e disse, por meio de nota oficial, que não reivindicaria o prêmio, caso oferecido. No entanto, a solução ainda não foi analisada nem pelo instituto responsável nem pela comunidade matemática.\n[…]\nEsses problemas foram estabelecidos ao se inspirarem no sucesso da lista de Hilbert, desafiando a comunidade. O prêmio foi estruturado para celebrar a Matemática na virada do milênio, a fim de elevar a consciência do público geral de que na Matemática, as fronteiras ainda estão abertas, além de enfatizar a importância do desenvolvimento em andamento de soluções que tratam acerca de problemas profundos e difíceis.\n[…]\nForam anunciados durante um encontro em 24 de maio de 2000 no Collège de France, Paris. Três palestras foram ministradas: Timothy Gowers falou sobre a importância da Matemática, enquanto Michael Atiyah e John Tate falaram os problemas.\n[…]\nOs enunciados oficiais dos problemas foram dados por Stephen Cook, Pierre Deligne, John Milnor, Enrico Bombieri, Arthur Jaffe, Edward Witten, Charles Fefferman e Andrew Wiles.\n[…]\nProblemas em aberto da matemática",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Numeração maia",
      "descricao": "Sistema de numeração posicional dos maias, escrito com pontos, barras e um sinal de concha para o zero."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Enquanto nós contamos de dez em dez, os maias usavam um sistema de numeração baseado em que número?",
    "resposta": "Vinte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Maya_numerals"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maya_numerals",
        "situacao": "ok",
        "texto": "The Mayan numeral system was the system to represent numbers and calendar dates in the Maya civilization. It was a vigesimal (base-20) positional numeral system. The numerals are made up of three symbols: zero (a shell), one (a dot) and five (a bar). For example, thirteen is written as three dots in a horizontal row above two horizontal bars; sometimes it is also written as three vertical dots to \n[…]\nOther than the bar and dot notation, Maya numerals were sometimes illustrated by face type glyphs or pictures. The face glyph for a number represents the deity associated with the number. These face number glyphs were rarely used, and are mostly seen on some of the most elaborate monumental carvings.\n[…]\nAdding and subtracting numbers below 20 using Mayan numerals is very simple.\n[…]\nThe \"Long Count\" portion of the Maya calendar uses a variation on the strictly vigesimal numerals to show a Long Count date. In the second position, only the digits up to 17 are used, and the place value of the third position is not 20×20 = 400, as would otherwise be expected, but 18×20 = 360 so that one dot over two zeros signifies 360. Presumably, this is because 360 is roughly the number of days in a year.\n[…]\nSeveral Mesoamerican cultures used similar numerals and base-twenty systems and the Mesoamerican Long Count calendar requiring the use of zero as a place-holder. The earliest long count date (on Stela 2 at Chiappa de Corzo, Chiapas) is from 36 BC.\n[…]\nMayan numerals codes in Unicode comprise the block 1D2E0 to 1D2F3\n[…]\nKaktovik numerals, a similar system from another culture, created in the late 20th century.\n[…]\nMaya numerals converter - online converter from decimal numeration to Maya numeral notation.\n[…]\nBabelStone Mayan Numerals - free font for Unicode Mayan numeral characters."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Numera%C3%A7%C3%A3o_maia",
        "situacao": "ok",
        "texto": "O sistema de numeração maia adotado pela civilização pré-colombiana dos Maias é um sistema de numeração vigesimal, ou seja, tem base em vinte.\n[…]\nNúmeros superiores a dezenove são escritos na vertical seguindo potências de vinte em notação posicional. Por exemplo o número trinta e dois é escrito como um ponto seguido logo abaixo por dois pontos horizontais sobre duas barras, representando uma vintena e treze unidades.\n[…]\nOutro exemplo é o número 819 que pode ser decomposto em potências de vinte da seguinte forma:\n[…]\nO sistema de contagem vigesimal também influenciava calendário maia sendo o fechamento de um período de vinte anos um momento parecido com o fechamento de uma década para nós. Alguns calendários usavam um sistema modificado de contagem onde a terceira casa  vigesimal não denotava múltiplos de 20 × 20, mas sim de 18 × 20 pois assim era possível uma contagem aproximada da duração em dias do ano solar dado que 18 × 20 = 360.\n[…]\n(Os maias tinham, no entanto, uma estimativa bastante precisa de 365,2422 dias para o ano solar, pelo menos desde o início da era clássica.) As posições subsequentes usam todos os vinte dígitos e os valores de lugar continuam como 18×20×20 = 7 200 e 18×20×20×20 = 144 000, etc.\n[…]\nVárias culturas mesoamericanas usaram numerais semelhantes e sistemas de base vinte e o calendário mesoamericano de contagem longa exigindo o uso de zero como um espaço reservado. A data de contagem longa mais antiga (em Estela 2 em Chiapa de Corzo, Chiapas) é de 36 a.C.\n[…]\nConversor de numerais maias - conversor - on-line de numeração decimal para notação numérica maia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Pierre de Fermat",
      "descricao": "Matemático e magistrado francês do século dezessete, autor do Último Teorema de Fermat."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por fazer matemática só nas horas vagas, sem nunca ter sido matemático de profissão, Pierre de Fermat ganhou que apelido?",
    "resposta": "Príncipe dos amadores",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pierre_de_Fermat",
      "https://en.wikipedia.org/wiki/Pierre_de_Fermat"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pierre_de_Fermat",
        "situacao": "ok",
        "texto": "Pierre de Fermat (Beaumont-de-Lomagne, nascido por volta do dia 17 de agosto de 1601 – Castres, 12 de janeiro de 1665) foi um magistrado, polímata e especialmente matemático francês. Apelidado de \"o príncipe dos amadores\". Ele também foi poeta, um hábil latinista e helenista, e se interessou pela ciência e em particular pela física; devemos a ele em particular o princípio de Fermat em óptica.\n[…]\nConsiderado o \"Príncipe dos Amadores\", Pierre de Fermat nunca teve formalmente a matemática como a principal atividade de sua vida. Jurista e magistrado por profissão, dedicava à Matemática apenas as suas horas de lazer e, mesmo assim, foi considerado por Blaise Pascal o maior matemático de seu tempo.\n[…]\nA matemática do século XVII estava ainda em recuperação da Idade das Trevas, portanto não é nenhuma surpresa o caráter amador dos trabalhos de Fermat. No entanto, se ele era um amador, então era o melhor de todos eles, devido à precisão e à importância dos seus estudos, que, diga-se , se realizavam longe de Paris, o único centro que abrigava grandes matemáticos, mas até então ainda não prestigiados estudiosos da Matemática, como Blaise Pascal, Gassendi, Mersenne, entre outros.\n[…]\nClément-Samuel, depois de passar cinco anos recolhendo cartas e anotações de seu pai, publica em 1670, em Toulouse, a Aritmética de Diofante contendo observações de Pierre de Fermat, em cuja página 61 continha o teorema.\n[…]\nJunto com René Descartes, Fermat foi um dos dois principais matemáticos da primeira metade do século XVII. De acordo com Peter L. Bernstein, em seu livro de 1996 Against the Gods, Fermat \"foi um matemático de raro poder. Ele foi um inventor independente da geometria analítica, contribuiu para o desenvolvimento inicial do cálculo, fez pesquisas sobre o peso do terra e trabalhou na refração da luz e na óptica.\n[…]\nPrêmio Fermat\n[…]\nSingh, Simon (1998). O último teorema de Fermat. Rio de Janeiro: Record"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pierre_de_Fermat",
        "situacao": "ok",
        "texto": "Pierre de Fermat (;  French: [pjɛʁ də fɛʁma]; 17 August 1601 – 12 January 1665) was a French magistrate, polymath, and mathematician credited for early developments that led to infinitesimal calculus, including his technique of adequality. In particular, he is recognized for his discovery of an original method of finding the greatest and the smallest ordinates of curved lines, which is analogous t\n[…]\nHe made notable contributions to analytic geometry, probability, and optics. He is best known for his Fermat's principle for light propagation and his Fermat's Last Theorem in number theory, which he described in a note at the margin of a copy of Diophantus' Arithmetica. He was also a lawyer at the parlement of Toulouse, France, a poet, a skilled Latinist, and a Hellenist.\n[…]\nThe first variational principle in physics was articulated by Euclid in his Catoptrica. It says that, for the path of light reflecting from a mirror, the angle of incidence equals the angle of reflection. Hero of Alexandria later showed that this path gave the shortest length and the least time. Fermat refined and generalized this to \"light travels between two given points along the path of shortest time\" now known as the principle of least time.\n[…]\nFor this, Fermat is recognized as a key figure in the historical development of the fundamental principle of least action in physics. The terms Fermat's principle and Fermat functional were named in recognition of this role.\n[…]\nList of things named after Pierre de Fermat\n[…]\nMahoney, Michael Sean (1994). The mathematical career of Pierre de Fermat, 1601–1665. Princeton Univ. Press. ISBN 978-0-691-03666-3.\n[…]\nThe Correspondence of Pierre de Fermat in EMLO\n[…]\nThe Life and times of Pierre de Fermat (1601–1665) from W. W. Rouse Ball's History of Mathematics\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Pierre de Fermat\", MacTutor History of Mathematics Archive, University of St Andrews"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Sudoku",
      "descricao": "Quebra-cabeça de lógica de preencher uma grade 9x9 com dígitos de 1 a 9 sem repetir em linhas, colunas e blocos 3x3."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome sudoku abrevia uma frase japonesa segundo a qual os algarismos devem ter que estado civil?",
    "resposta": "Solteiros",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sudoku"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sudoku",
        "situacao": "ok",
        "texto": "Sudoku (; Japanese: 数独, romanized: sūdoku, lit. 'digit-single'; originally called Number Place) is a logic-based, combinatorial number-placement puzzle. In classic sudoku, the objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids that compose the grid (also called \"boxes\", \"blocks\", or \"regions\") contains all of the digits from 1 to 9.\n[…]\nThis section refers to classic sudoku, disregarding jigsaw, hyper, and other variants. A completed sudoku grid is a special type of Latin square with the additional property of no repeated values in any of the nine blocks (or boxes of 3×3 cells).\n[…]\nThe fewest clues possible for a proper sudoku is 17. Tens of thousands of distinct sudoku puzzles have only 17 clues.\n[…]\nThe number of classic 9×9 sudoku solution grids is 6,670,903,752,021,072,936,960, or around 6.67×1021. The number of essentially different solutions, when symmetries such as rotation, reflection, permutation, and relabelling are taken into account, is much smaller, 5,472,730,538.\n[…]\nUnlike the number of complete sudoku grids, the number of minimal 9×9 sudoku puzzles is not precisely known. (A minimal puzzle is one in which no clue can be deleted without losing the uniqueness of the solution.) However, statistical techniques combined with a puzzle generator show that about (with 0.065% relative error) 3.10 × 1037 minimal puzzles and 2.55 × 1025 nonessentially equivalent minimal puzzles exist.\n[…]\nDelahaye, Jean-Paul (June 2006). \"The Science Behind Sudoku\" (PDF). Scientific American. 294 (6): 80–87. Bibcode:2006SciAm.294f..80D. doi:10.1038/scientificamerican0606-80. JSTOR 26061494. PMID 16711364.\n[…]\nProvan, J. Scott (October 2009). \"Sudoku: Strategy Versus Structure\". American Mathematical Monthly. 116 (8): 702–707. doi:10.4169/193009709X460822. S2CID 38433481. Also as UNC/STOR/08/04 Archived June 13, 2010, at the Wayback Machine."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sudoku",
        "situacao": "ok",
        "texto": "Sudoku, por vezes escrito Su Doku (数独, sūdoku) é um jogo baseado na colocação lógica de números. O objetivo do jogo é a colocação de números de 1 a 9 em cada uma das células vazias numa grade de 9×9, constituída por 3×3 subgrades chamadas regiões. O quebra-cabeça contém algumas pistas iniciais, que são números inseridos em algumas células, de maneira a permitir uma indução ou dedução dos números e\n[…]\nA palavra \"sudoku\" em si foi cunhada pelo empresário japonês Maki Kaji, que fez uma contração da frase japonesa \"cada número deve ser individual\".\n[…]\nHyper Sudoku usa a grade clássica 9×9 com regiões 3×3, mas define quatro regiões interiores adicionais 3×3 nas quais os números 1–9 devem aparecer exatamente uma vez. Foi inventado por Peter Ritmeester e publicado pela primeira vez por ele no jornal holandês NRC Handelsblad em outubro de 2005, e desde abril de 2007 diariamente no International New York Times (International Herald Tribune).\n[…]\nRecentes variantes têm esta característica, geralmente em forma de palavra lida ao longo da diagonal principal depois de encontrada a solução; determinar a palavra antecipadamente pode ser visto como um auxílio para a solução.Como o sudoku padrão não envolve aritmética, os dígitos de 1 a 9 podem ser substituídos por nove símbolos arbitrários, como formas geométricas, algarismos romanos (por exemplo, Quadratum latinum, publicado na revista de quebra-cabeças latinas Hebdomada aenigmatum) ou letras, e não há função diferença.\n[…]\nTambém pode ser encontrado o Circular Sudoku, também conhecido como Target Sudoku, inventado pelo matemático Peter Higgins. Nessa variante, todos os números devem aparecer em círculos concêntricos bem como em todos os pares de fatias adjacentes.\n[…]\nAlgoritmo de sudoku\n[…]\nPlataforma Sudoku em português para competições globais, estatísticas pessoais e tutoriais\n[…]\nSudoku Brasil\n[…]\nSudoku Hard",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Medalha Fields",
      "descricao": "Prêmio internacional concedido a cada quatro anos a matemáticos com menos de quarenta anos."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A Medalha Fields, um dos prêmios mais importantes da matemática, leva o nome de um matemático de que país?",
    "resposta": "Canadá",
    "distratores": [
      "Estados Unidos",
      "Inglaterra",
      "Suécia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Medalha_Fields",
      "https://en.wikipedia.org/wiki/John_Charles_Fields"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Medalha_Fields",
        "situacao": "ok",
        "texto": "Medalha Fields, oficialmente conhecida como Medalha Internacional de Descobrimentos Proeminentes em Matemática (em inglês:  International Medal for Outstanding Discoveries in Mathematics), é um prêmio concedido a dois, três ou quatro matemáticos com até 40 anos de idade durante cada Congresso Internacional da União Internacional de Matemática (IMU), que acontece a cada quatro anos. O prêmio é muit\n[…]\nO prêmio também oferece uma quantia em dinheiro, que desde 2006 tem sido de 15 mil dólares canadenses. O nome coloquial da medalha é em homenagem ao matemático canadense John Charles Fields, que foi uma pessoa importante no estabelecimento do prêmio, projetando a própria medalha e financiando o componente monetário da honraria.\n[…]\nQuando uma mídia não especializada se refere à medalha Fields, dirigindo-se a um público que supostamente não a conheça, geralmente estabelecem uma analogia com o prêmio Nobel, por este ser mais conhecido, e citam a medalha Fields como o \"Nobel da Matemática\". Isso pode produzir a impressão incorreta de que o prêmio Nobel é uma distinção mais notável, e essa impressão inadequada acaba sendo corroborada pelos valores monetários que acompanham cada prêmio.\n[…]\nO prêmio Nobel é anual, enquanto a Medalha Fields é quadrienal.\n[…]\nDe modo geral, a Medalha Fields representa com maior fidelidade os méritos intelectuais do matemático, enquanto o Nobel muitas vezes combina méritos com fatores políticos. Por estes motivos, alguns consideram a Medalha Fields uma distinção mais elevada que o Nobel. Como se trata de uma avaliação subjetiva, há margem para uma larga variedade de opiniões. Há também algumas controvérsias sobre o Prêmio Abel ser mais expressivo que a Medalha Fields.\n[…]\nAlém disso, a medalha Fields só é dada para jovens matemáticos (com até 40 anos), enquanto que o prêmio Nobel não tem limite de idade.\n[…]\nPrémio Abel\n[…]\nPrémio Nevanlinna\n[…]\nPrémios Clay\n[…]\nPrêmio Wolf de Matemática"
      },
      {
        "url": "https://en.wikipedia.org/wiki/John_Charles_Fields",
        "situacao": "ok",
        "texto": "John Charles Fields, FRS, FRSC (May 14, 1863 – August 9, 1932) was a Canadian mathematician and the founder of the Fields Medal for outstanding achievement in mathematics.\n[…]\nBorn in Hamilton, Canada West, to a leather shop owner, Fields graduated from Hamilton Collegiate Institute in 1880 and University College, University of Toronto in 1884 before leaving for the United States to study at Johns Hopkins University in Baltimore, Maryland. Fields received his Ph.D. in 1887. His thesis, entitled Symbolic Finite Solutions and Solutions by Definite Integrals of the Equation dny/dxn = xmy, was published in the American Journal of Mathematics in 1886.\n[…]\nFields returned to Canada in 1902 to lecture at the University of Toronto. Back in the country of his birth, he worked tirelessly to raise the status of mathematics within academic and public circles. He successfully lobbied the Ontario Legislature for an annual research grant of $75,000 for the university and helped establish the National Research Council of Canada, and the Ontario Research Foundation.\n[…]\nFields is best known for his development of the Fields Medal, which is considered by some to be the Nobel Prize of mathematics, although there are differences between the awards. First awarded in 1936, the medal was reintroduced in 1950 and has been awarded every four years since. It is awarded to two, three or four mathematicians under the age of 40 who have made important contributions to the field.\n[…]\nFields was elected a fellow of the Royal Society of Canada in 1907 and of the Royal Society of London in 1913.\n[…]\nFields Institute Biography\n[…]\nEntry for Fields, John Charles in the Dictionary of Canadian Biography"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Georg Cantor",
      "descricao": "Matemático alemão (1845–1918), criador da teoria dos conjuntos."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Para dar nome aos diferentes tamanhos de infinito, Georg Cantor usou a primeira letra de que alfabeto?",
    "resposta": "Hebraico",
    "distratores": [
      "Grego",
      "Árabe",
      "Cirílico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aleph_number"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aleph_number",
        "situacao": "ok",
        "texto": "In mathematics, particularly in set theory, the aleph numbers are a sequence of numbers used to represent the cardinality (or size) of infinite sets. They were introduced by the mathematician Georg Cantor and are named after the symbol he used to denote them, the Hebrew letter aleph (ℵ).\n[…]\nThe concept and notation are due to Georg Cantor,\n[…]\nThe α-th infinite initial ordinal is written ωα. Its cardinality is written ℵα.\n[…]\nInformally, the aleph function ℵ:On→Cd is a bijection from the ordinals to the infinite cardinals that can be well ordered.\n[…]\nThe cardinality of any infinite ordinal number is an aleph number. Every aleph is the cardinality of some ordinal. The least of these is its initial ordinal. Any set whose cardinality is an aleph is equinumerous with an ordinal and is thus well-orderable.\n[…]\nOver ZF, the assumption that the cardinality of each infinite set is an aleph number is equivalent to the existence of a well-ordering of every set, which in turn is equivalent to the axiom of choice. ZFC set theory, which includes the axiom of choice, implies that every infinite set has an aleph number as its cardinality (i.e.\n[…]\nis equinumerous with its initial ordinal), and thus the initial ordinals of the aleph numbers serve as a class of representatives for all possible infinite cardinal numbers.\n[…]\nWhen cardinality is studied in ZF without the axiom of choice, it is no longer possible to prove that each infinite set has some aleph number as its cardinality; the sets whose cardinality is an aleph number are exactly the infinite sets that can be well-ordered. The method of Scott's trick is sometimes used as an alternative way to construct representatives for cardinal numbers in the setting of ZF.\n[…]\nInfinity\n[…]\nMichael Stevens \"How To Count Past Infinity\". Vsauce."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/N%C3%BAmero_aleph",
        "situacao": "ok",
        "texto": "Na teoria dos conjuntos, os números alephs ou números álefes são uma sequência de números usados para representar os cardinais (ou tamanho) de conjuntos infinitos. Um símbolo é usado para nomeá-los, a letra hebraica álefe (א).\n[…]\nEste conceito vem de Georg Cantor, quem definiu a noção de cardinalidade e percebeu que conjuntos infinitos podem possuir distintas cardinalidades.\n[…]\nOs números álefes são diferentes do infinito (∞) comumente encontrado na álgebra e no cálculo. Álefes são medidas de tamanho de conjuntos; o infinito, por outro lado, é comumente definido como um limite extremo da reta real (aplicado a uma função ou sequência que \"diverge no infinito\" ou \"é sempre crescente\") ou um ponto extremo da reta real estendida.\n[…]\nℵ0 é a cardinalidade do conjunto de todos os números naturais e é o primeiro cardinal infinito. Um conjunto possui cardinalidade  ℵ0 se e somente se é contável e infinito, o que significa que tal conjunto tem um isomorfismo, ou seja, uma relação um-para-um sobrejetora (ou seja, uma função bijetora) com o conjunto dos números naturais.\n[…]\nNa classe de conjuntos com esta cardinalidade estão inclusos os conjuntos de todos os números primos, dos números inteiros, dos números racionais, o conjunto dos números algébricos, o conjunto das cadeias binárias de tamanho finito e o conjunto de todos os subconjuntos finitos de um conjunto infinito contável.\n[…]\ne para λ um ordinal limite infinito:\n[…]\nO αº ordinal inicial infinito é escrito como ωα. Sua cardinalidade é escrita como ℵα.\n[…]\nA aritmética dos números infinitos difere substancialmente da aritmética dos números finitos. Apesar disto as regras de adição e multiplicação dos números álefes são bem simples. Temos que:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Euclides",
      "descricao": "Matemático grego que viveu em Alexandria por volta de 300 a.C., autor de Os Elementos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Pela enorme influência de Os Elementos, Euclides é frequentemente chamado de pai de que ramo da matemática?",
    "resposta": "Geometria",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Euclides",
      "https://en.wikipedia.org/wiki/Euclid"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Euclides",
        "situacao": "ok",
        "texto": "Euclides de Alexandria (em grego antigo, Εὐκλείδης, Eukleídes; ativo por volta de 300 a.C.) foi um matemático da Grécia Antiga que trabalhou como geômetra e lógico. Chamado de \"pai da geometria\", é conhecido sobretudo pelo tratado Os Elementos, que estabeleceu as bases da geometria predominantes na área até o início do século XIX.\n[…]\nEm Os Elementos, Euclides deduziu teoremas a partir de um pequeno conjunto de axiomas. Escreveu também sobre perspectiva, seções cônicas, geometria esférica, teoria dos números e rigor matemático. Além de Os Elementos, são atribuídos a ele um dos primeiros tratados de óptica, Óptica, e obras menos conhecidas, como Dados e Fenômenos. A autoria de Sobre as divisões das figuras e Catóptrica é discutida. Acredita-se que tenha escrito ainda outras obras hoje perdidas.\n[…]\nHá ainda muitas anedotas sobre Euclides, todas de historicidade incerta, que o retratam como um velho bondoso e gentil. Na mais conhecida, relatada por Proclo, Ptolemeu perguntou se haveria um caminho mais rápido para aprender geometria do que ler Os Elementos. Euclides teria respondido: \"Não há estrada real para a geometria\". A história é questionável, pois Estobeu conta uma conversa muito semelhante entre Menecmo e Alexandre, o Grande.\n[…]\nEuclides costuma ser situado ao lado de Arquimedes e Apolônio de Perga entre os matemáticos de maior destaque da Antiguidade. Muitos comentadores o incluem entre os nomes de maior influência na história da matemática. O sistema geométrico exposto em Os Elementos predominou na área por muito tempo. Desde a descoberta das geometrias não euclidianas no início do século XIX, ele passou a ser chamado de geometria euclidiana para distingui-lo dos outros sistemas.\n[…]\nElementa geometria, edição de 1482 preservada na Biblioteca Nacional de Portugal.\n[…]\nAudiolivros de Euclides no LibriVox (em inglês)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Euclid",
        "situacao": "ok",
        "texto": "Euclid (; Ancient Greek: Εὐκλείδης; fl. 300 BC) was an ancient Greek mathematician active as a geometer and logician. Considered the \"father of geometry\", he is chiefly known for the Elements treatise, which established the foundations of geometry that largely dominated the field until the early 19th century.\n[…]\nIn any event, the contents of Euclid's work demonstrate familiarity with the Platonic geometry tradition.\n[…]\nThere are also numerous anecdotal stories concerning to Euclid, all of uncertain historicity, which \"picture him as a kindly and gentle old man\". The best known of these is Proclus' story about Ptolemy asking Euclid if there was a quicker path to learning geometry than reading his Elements, which Euclid replied with \"there is no royal road to geometry\". This anecdote is questionable since a very similar interaction between Menaechmus and Alexander the Great is recorded from Stobaeus.\n[…]\nThe 8th book discusses geometric progressions, while book 9 includes the proposition, now called Euclid's theorem, that there are infinitely many prime numbers. Of the Elements, book 10 is by far the largest and most complex, dealing with irrational numbers in the context of magnitudes.\n[…]\nThe Data (Ancient Greek: Δεδομένα), is a somewhat short text which deals with the nature and implications of \"given\" information in geometrical problems.\n[…]\nEuclid is generally considered with Archimedes and Apollonius of Perga as among the greatest mathematicians of antiquity. Many commentators cite him as one of the most influential figures in the history of mathematics. The geometrical system established by the Elements long dominated the field; however, today that system is often referred to as 'Euclidean geometry' to distinguish it from other non-Euclidean geometries discovered in the early 19th century."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Isaac Newton",
      "descricao": "Físico e matemático inglês (1643–1727), autor dos Princípios Matemáticos da Filosofia Natural e um dos criadores do cálculo."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Isaac Newton não chamava de cálculo o método que criou para estudar quantidades que variam. Que nome ele usava?",
    "resposta": "Método das fluxões",
    "distratores": [
      "Método da exaustão",
      "Método das coordenadas",
      "Método dos mínimos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Method_of_Fluxions"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Method_of_Fluxions",
        "situacao": "ok",
        "texto": "Method of Fluxions (Latin: De Methodis Serierum et Fluxionum) is a mathematical treatise by Sir Isaac Newton which served as the earliest written formulation of modern calculus. The book was completed in 1671 and posthumously published in 1736.\n[…]\nGottfried Leibniz developed his form of calculus independently around 1673, seven years after Newton had developed the basis for differential calculus, as seen in surviving documents like “the method of fluxions and fluents...\" from 1666. Leibniz, however, published his discovery of differential calculus in 1684, nine years before Newton formally published his fluxion notation form of calculus in part during 1693.\n[…]\nThe calculus notation in use today is mostly that of Leibniz, although Newton's dot notation for differentiation x˙ is frequently used to denote derivatives with respect to time.\n[…]\nNewton's Method of Fluxions was formally published posthumously, but following Leibniz's publication of the calculus a bitter rivalry erupted between the two mathematicians over who had developed the calculus first, provoking Newton to reveal his work on fluxions.\n[…]\nInstead, analysts were often forced to invoke infinitesimal, or \"infinitely small\", quantities to justify their algebraic manipulations. Some of Newton's mathematical contemporaries, such as Isaac Barrow, were highly skeptical of such techniques, which had no clear geometric interpretation. Although in his early work Newton also used infinitesimals in his derivations without justifying them, he later developed something akin to the modern definition of limits in order to justify his work."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Method_of_Fluxions",
        "situacao": "ok",
        "texto": "Method of Fluxions (em latim: De Methodis Serierum et Fluxionum) é um tratado matemático de Sir Isaac Newton que serviu como uma das primeiras formulações escritas do cálculo moderno.\n[…]\nEle originalmente desenvolveu o método em Woolsthorpe Manor durante o fechamento de Universidade de Cambridge durante a Grande Peste de Londres de 1665 a 1667, mas não optou por tornar suas descobertas conhecidas (da mesma forma, suas descobertas que eventualmente se tornaram o Princípios Matemáticos da Filosofia Natural foram desenvolvidos nesta época e escondidos do mundo nas notas de Newton por muitos anos).\n[…]\nGottfried Leibniz desenvolveu independentemente sua forma de cálculo por volta de 1673, sete anos após Newton estabelecer as bases para o cálculo diferencial, como visto em documentos sobreviventes como \"o método de fluxões e fluentes […]\" de 1666. Leibniz, no entanto, publicou sua descoberta do cálculo diferencial em 1684, nove anos antes de Newton publicar formalmente sua forma de notação de fluxões de cálculo em parte durante 1693.\n[…]\nO Method of Fluxions de Newton foi formalmente publicado postumamente, mas após a publicação do cálculo por Leibniz, uma amarga rivalidade surgiu entre os dois matemáticos sobre quem havia desenvolvido o cálculo primeiro, levando Newton a revelar seu trabalho sobre fluxões.\n[…]\nEm vez disso, os analistas eram frequentemente forçados a invocar quantidades infinitesimais, ou \"infinitamente pequenas\", para justificar suas manipulações algébricas. Alguns dos contemporâneos matemáticos de Newton, como Isaac Barrow, eram altamente céticos em relação a tais técnicas, que não tinham uma interpretação geométrica clara.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Problema de Monty Hall",
      "descricao": "Problema de probabilidade inspirado num programa de auditório americano, em que o jogador escolhe uma entre três portas."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O problema de Monty Hall leva o nome do apresentador de que programa de auditório americano?",
    "resposta": "Let's Make a Deal",
    "distratores": [
      "The Price Is Right",
      "Wheel of Fortune",
      "Family Feud"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Monty_Hall_problem"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monty_Hall_problem",
        "situacao": "ok",
        "texto": "The Monty Hall problem is a brain teaser, in the form of a probability puzzle, based nominally on the American television game show Let's Make a Deal and named after its original host, Monty Hall. The problem was originally posed in a letter by Steve Selvin to the American Statistician in 1975. It became famous as a question from reader Craig F. Whitaker's letter quoted in (and solved by) Marilyn \n[…]\nSteve Selvin wrote a letter to the American Statistician in 1975, describing a problem based on the game show Let's Make a Deal, dubbing it the \"Monty Hall problem\" in a subsequent letter. The problem is equivalent mathematically to the three prisoners problem described in Martin Gardner's \"Mathematical Games\" column in Scientific American in 1959 and the Three Shells Problem described in Gardner's book Aha Gotcha.\n[…]\nAs in the Monty Hall problem, the intuitive answer is 1/2, but the probability is actually 2/3.\n[…]\nAs Monty Hall wrote to Selvin:\n[…]\nThe Parade column and its response received considerable attention in the press, including a front-page story in The New York Times in which Monty Hall himself was interviewed. Hall understood the problem, giving the reporter a demonstration with car keys and explaining how actual game play on Let's Make a Deal differed from the rules of the puzzle.\n[…]\nIn the article, Hall pointed out that because he had control over the way the game progressed, playing on the psychology of the contestant, the theoretical solution did not apply to the show's actual gameplay. He said he was not surprised at the experts' insistence that the probability was 1 out of 2. \"That's the same assumption contestants would make on the show after I showed them there was nothing behind one door,\" he said.\n[…]\n\"Stick or switch? Probability and the Monty Hall problem\", BBC News Magazine, 11 September 2013 (video). Mathematician Marcus du Sautoy explains the Monty Hall paradox."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Problema_de_Monty_Hall",
        "situacao": "ok",
        "texto": "O problema de Monty Hall, também conhecido por paradoxo de Monty Hall, é um problema matemático e paradoxo que surgiu a partir de um concurso televisivo dos Estados Unidos chamado Let’s Make a Deal, exibido na década de 1970. O problema foi originalmente publicado por Steve Selvin para a revista American Statistician em 1975. Tornou-se famoso com uma pergunta do leitor Craig F. Whitaker para Maril\n[…]\nO jogo consistia no seguinte: Monty Hall, o apresentador, apresentava três portas aos concorrentes. Atrás de uma delas estava um prêmio (um carro) e, atrás das outras duas, dois bodes.\n[…]\nSteve Selvin escreveu um artigo para a revista American Statistician em 1975, descrevendo um problema baseado no programa Let's Make a Deal, apresentado por Monty Hall. O problema é semelhante ao problema dos três prisioneiros proposto por Martin Gardner em 1959.\n[…]\nA resposta intuitiva ao problema é a que quando o apresentador revelou uma das portas não premiadas, o concorrente passaria a ter à frente um novo dilema, com apenas duas portas e um prêmio, portanto as chances do prêmio estar em qualquer uma das duas portas passaria a ser de 50%.\n[…]\nA solução apresentada por Savant em Parade apresenta três possibilidades da disposição dos dois bodes e do carro atrás das três portas e suas respectivas probabilidades de ficar ou trocar após escolher, no primeiro momento, a porta A:\n[…]\nO problema de Monty Hall é exposto em muitos cursos de probabilidades e de estatística, e um exercício com ele seria dado em Harvard e Princeton. Ele demonstra muito bem como nosso cérebro não foi feito para lidar intuitivamente com tais tipos específicos de problemas. Felizmente pode-se resolver o problema de Monty Hall no papel de forma simples e sem erro usando o teorema de Bayes relativo às probabilidades condicionadas.\n[…]\nParadoxo da Bela Adormecida\n[…]\nParadoxo de São Petersburgo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Liber Abaci",
      "descricao": "Livro de aritmética escrito por Fibonacci, publicado em 1202."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O título Liber Abaci, do famoso livro de Fibonacci, costuma ser traduzido do latim como livro de quê?",
    "resposta": "Do cálculo",
    "distratores": [
      "Das medidas",
      "Dos mercadores",
      "Das frações"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Liber_Abaci"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Liber_Abaci",
        "situacao": "ok",
        "texto": "The Liber Abaci or Liber Abbaci (Latin for \"The Book of Calculation\") was a 1202 Latin work on arithmetic by Leonardo of Pisa, posthumously known as Fibonacci. It is primarily famous for introducing both base-10 positional notation and the symbols known as Arabic numerals in Europe.\n[…]\nAlthough the book's title is sometimes translated as \"The Book of the Abacus\", Sigler (2002) notes that the word in the title does not refer to the abacus as a calculating device. Rather, the word \"abacus\" was used at the time to refer to calculation in any form; the spelling \"abbacus\" with two \"b\"s was, and still is in Italy, used to refer to calculation using Hindu-Arabic numerals.\n[…]\nThe book describes methods of doing calculations without aid of an abacus, and as Ore (1948) confirms, for centuries after its publication the algorismists (followers of the style of calculation demonstrated in Liber Abaci) remained in conflict with the abacists (traditionalists who continued to use the abacus in conjunction with Roman numerals).\n[…]\nThe second section presents examples from commerce, such as conversions of currency and measurements, and calculations of profit and interest.\n[…]\nIn Liber Abaci, Fibonacci's notation for rational numbers is intermediate in form between the Egyptian fractions commonly used until that time and the vulgar fractions still in use today. It differs from modern fraction notation in three key ways:\n[…]\nIn the Liber Abaci, Fibonacci wrote the following, introducing the affirmative Modus Indorum (the method of the Indians), today known as Hindu–Arabic numeral system or base-10 positional notation. It also introduced digits that greatly resembled the modern Arabic numerals.\n[…]\nFibonacci was deeply influenced by Muslim scholars from the 9th and 10 centuries."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Liber_Abaci",
        "situacao": "ok",
        "texto": "O Liber Abaci (também chamado Liber Abbaci) é um livro histórico sobre aritmética escrito por Leonardo Fibonacci (ou Leonardo de Pisa) em Latim. No seu trabalho introduziu na Europa a numeração árabe, a notação posicional esclarecendo o funcionamento desta numeração e o zero, aprendido por Fibonacci com os árabes enquanto viveu com o seu pai, Guglielmo Bonaccio, no Norte de África.\n[…]\nO Liber Abaci foi um dos primeiros livros ocidentais a descrever os algarismos arábicos. Ao abordar os comerciantes e académicos começou a convencer o público da superioridade deste sistema algorítmico. O título Liber Abaci significa o \"Livro do Cálculo\", mas também foi traduzido como \"Livro do Ábaco\", mas Sigler (2002) escreve que a intenção do livro é descrever os métodos de calcular sem recorrer ao ábaco.\n[…]\nEsse livro contém uma grande quantidade de assuntos relacionados com a Aritmética e a Álgebra da época, e realizou um papel importante no desenvolvimento matemático na Europa nos séculos seguintes, pois, por esse livro, os europeus vieram a conhecer os algarismos hindus, também denominados arábicos. A teoria contida em Liber Abaci é ilustrada com muitos problemas que representam uma grande parte do livro.\n[…]\nO Liber Abaci também colocou e resolveu um problema que envolve o crescimento de uma população hipotética de coelhos com base em pressupostos idealizados. A solução, de geração em geração, foi uma sequência de números mais tarde conhecida como número de Fibonacci. A sequência numérica era conhecida por matemáticos indianos já no século VI, mas foi o Liber Abaci que a introduziu no Ocidente.\n[…]\nO manuscrito mais antigo do Liber Abaci circulou em 1202, mas não se conhecem cópias sobreviventes desta versão. Uma versão revisada do Liber Abaci, dedicada a Michael Scot e publicada em 1228, é a que hoje é conhecida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Quipu",
      "descricao": "Sistema de cordões com nós usado pelos incas para registrar números e informações."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na língua quíchua, falada pelos incas, o que significa a palavra quipu?",
    "resposta": "Nó",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quipu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quipu",
        "situacao": "ok",
        "texto": "Quipu ( KEE-poo), also spelled khipu (Ayacucho Quechua: kipu, [ˈkipu]; Cusco Quechua: khipu, [kʰipu]), are record-keeping devices fashioned from knotted cords. They were historically used by various cultures in the central Andes of South America, most prominently by the Inca Empire.\n[…]\nA 2005 report in the journal Science, titled \"Khipu Accounting in Ancient Peru\", may represent the first identification of a quipu element for a non-numeric concept. The report details a sequence of three figure-eight knots at the start of a quipu that seems to be a unique signifier. It could be a toponym for the city of Puruchuco (near Lima), or the name of the quipu keeper who made it, or its subject matter, or even a time designator.\n[…]\nWhile evidence for the latter is still under the critical eye of scholars around the world, the very fact that they are kept to this day without any confirmed level of fluent literacy in the system is testament to its historical 'moral authority.' Today, \"khipu\" is regarded as a powerful symbol of heritage, only 'unfurled' and handled by 'pairs of [contemporary] dignitaries,' as the system and its 'construction embed' modern 'cultural knowledge.' Ceremonies in which they are 'curated, even though they can no longer be read,' is even further support for the case of societal honor and significance associated with the quipu.\n[…]\nThe Open Khipu Repository (formerly known as the Harvard Khipu Database Project)\n[…]\nThe Khipu Field Guide (quipu schematics and investigations from a large quipu database)\n[…]\nThe Khipu Keepers: Explore the undeciphered writing of the Incas (2020 exhibition by the Google Arts & Culture in collaboration with the Lima Art Museum)\n[…]\nQuipu: Counting with knots in the Inka Empire (2003 exhibition by the Museo Chileno de Arte Precolombino)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quipo",
        "situacao": "ok",
        "texto": "Quipo ou Quipu (em quíchua: khipu) era um instrumento utilizado para comunicação, mas também como registro contábil e como registros mnemotécnicos entre os incas. Alguns expertos têm proposto que também eram utilizado como sistema de escrita, hipótese sustentada entre outras por William Burns Glynn, Gary Urton e Manuel Medrano.\n[…]\nEram feitos da união de cordões que podem ser coloridos ou não, e poderia ter enfeites, como por exemplo ossos e penas, onde cada nó que se dava em cada cordão significava uma mensagem distinta. Cada cordão poderia ter um ou mais nós, ou nenhum nó, ou um nó na ponta, um na base, enfim, tudo era comunicado e transportado rapidamente ao imperador Inca no centro do império Cusco.\n[…]\nO transporte dos quipos era realizado pelos chasqui, rápidos mensageiros, que corriam por dois quilômetros pelas trilhas incas levando o quipo contendo as informações a serem transmitidas, até o próximo posto de mensageiros, onde aguardava um mensageiro descansado pronto para continuar o transporte do quipo.\n[…]\nDesconhecendo-se o contexto de Quipos individuais, é difícil decifrar o significado de tais códigos. Outros aspectos dos Quipos poderiam ser usados para comunicar outras informações: as Cores, a locação relativa das cordas, o espaço entre os conjuntos de nós, a estrutura das cordas, as cordas secundárias.\n[…]\n\"Aluno de Harvard ajudou a decifrar o misterioso código secreto dos Incas\"; ZAP - 31 Dezembro, 2017.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Problema de Monty Hall",
      "descricao": "Problema de probabilidade inspirado num programa de auditório americano, em que o jogador escolhe uma entre três portas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que famoso matemático húngaro, autor de centenas de artigos, só aceitou a solução do problema de Monty Hall depois de ver uma simulação em computador?",
    "resposta": "Paul Erdős",
    "fonte": [
      "https://en.wikipedia.org/wiki/Monty_Hall_problem"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monty_Hall_problem",
        "situacao": "ok",
        "texto": "The Monty Hall problem is a brain teaser, in the form of a probability puzzle, based nominally on the American television game show Let's Make a Deal and named after its original host, Monty Hall. The problem was originally posed in a letter by Steve Selvin to the American Statistician in 1975. It became famous as a question from reader Craig F. Whitaker's letter quoted in (and solved by) Marilyn \n[…]\nPaul Erdős, one of the most prolific mathematicians in history, remained unconvinced until he was shown a computer simulation demonstrating Savant's predicted result.\n[…]\nSavant wrote in her first column on the Monty Hall problem that the player should switch. She received thousands of letters from her readers – the vast majority of which, including many from readers with doctorate degrees, disagreed with her answer. During 1990–1991, three more of her columns in Parade were devoted to the paradox. Numerous examples of letters from readers of Savant's columns are presented and discussed in The Monty Hall Dilemma: A Cognitive Illusion Par Excellence.\n[…]\nThe earliest of several probability puzzles related to the Monty Hall problem is Bertrand's box paradox, posed by Joseph Bertrand in 1889 in his Calcul des probabilités. In this puzzle, there are three boxes: a box containing two gold coins, a box with two silver coins, and a box with one of each. After choosing a box at random and withdrawing one coin at random that happens to be a gold coin, the question is what is the probability that the other coin is gold.\n[…]\nGill, Richard (2011b). \"Monty Hall Problem (version 5)\". StatProb: The Encyclopedia Sponsored by Statistics and Probability Societies. Archived from the original on 21 January 2016. Retrieved 3 April 2011.\n[…]\n\"Stick or switch? Probability and the Monty Hall problem\", BBC News Magazine, 11 September 2013 (video). Mathematician Marcus du Sautoy explains the Monty Hall paradox."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Problema_de_Monty_Hall",
        "situacao": "ok",
        "texto": "O problema de Monty Hall, também conhecido por paradoxo de Monty Hall, é um problema matemático e paradoxo que surgiu a partir de um concurso televisivo dos Estados Unidos chamado Let’s Make a Deal, exibido na década de 1970. O problema foi originalmente publicado por Steve Selvin para a revista American Statistician em 1975. Tornou-se famoso com uma pergunta do leitor Craig F. Whitaker para Maril\n[…]\nO jogo consistia no seguinte: Monty Hall, o apresentador, apresentava três portas aos concorrentes. Atrás de uma delas estava um prêmio (um carro) e, atrás das outras duas, dois bodes.\n[…]\nSteve Selvin escreveu um artigo para a revista American Statistician em 1975, descrevendo um problema baseado no programa Let's Make a Deal, apresentado por Monty Hall. O problema é semelhante ao problema dos três prisioneiros proposto por Martin Gardner em 1959.\n[…]\nEm um estudo acerca desse problema, de 228 pessoas que foram submetidas ao teste, apenas 13% escolheram trocar de porta.\n[…]\nA solução apresentada por Savant em Parade apresenta três possibilidades da disposição dos dois bodes e do carro atrás das três portas e suas respectivas probabilidades de ficar ou trocar após escolher, no primeiro momento, a porta A:\n[…]\nO problema de Monty Hall é exposto em muitos cursos de probabilidades e de estatística, e um exercício com ele seria dado em Harvard e Princeton. Ele demonstra muito bem como nosso cérebro não foi feito para lidar intuitivamente com tais tipos específicos de problemas. Felizmente pode-se resolver o problema de Monty Hall no papel de forma simples e sem erro usando o teorema de Bayes relativo às probabilidades condicionadas.\n[…]\nParadoxo da Bela Adormecida\n[…]\nParadoxo de São Petersburgo\n[…]\nEdward R. Scheinerman (2003). Matemática Discreta - Uma Introdução 1 ed. Brasil: Cengage Learning. 532 páginas. ISBN 85-221-0291-0",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Número primo",
      "descricao": "Número natural maior que um que só é divisível por um e por ele mesmo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Algumas cigarras da América do Norte passam treze ou dezessete anos debaixo da terra antes de sair. O que esses dois números têm em comum?",
    "resposta": "São números primos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Periodical_cicadas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Periodical_cicadas",
        "situacao": "ok",
        "texto": "A periodical cicada is any of the seven species of the genus Magicicada of eastern North America, the 13- and 17-year cicadas. They are called \"periodical\" because nearly all individuals in a local population are developmentally synchronized and emerge in the same year. Although they are sometimes called \"locusts\", this is a misnomer, as cicadas belong to the taxonomic order Hemiptera (true bugs),\n[…]\nAfter describing a \"pestilent fever\" that had swept through the Plymouth Colony and neighboring Indians in 1633, the New-Englands Memoriall's account stated: It is to be observed that, the spring before this sickness, there was a numerous company of Flies which were like for bigness unto Wasps or Bumble-Bees; they came out of little holes in the ground, and did eat up the green things, and made such a constant yelling noise as made the woods ring of them, and ready to deafen the hearers; they were not any seen or heard by the English in this country before this time; but the Indians told them that sickness would follow, and so it did, very hot, in the months of June, July, and August of that summer.\n[…]\nThere are a kind of Locusts which about every seventeen years come hither in incredible numbers ... In the interval between the years when they are so numerous, they are only seen or heard single in the woods.\n[…]\nIn April 1800, Benjamin Banneker, who lived near Ellicott's Mills, Maryland, wrote in his record book that he recalled a \"great locust year\" in 1749, a second in 1766 during which the insects appeared to be \"full as numerous as the first\", and a third in 1783. He predicted that the insects (Brood X) \"may be expected again in they year 1800 which is Seventeen Since their third appearance to me\".\n[…]\nInsectSingers.com Recordings of species-specific songs of many North American cicada species."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Razão áurea",
      "descricao": "Número irracional aproximadamente igual a um vírgula seis um oito, também chamado proporção áurea ou número de ouro."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O livro A Divina Proporção, do frade Luca Pacioli, dedicado à razão áurea, foi ilustrado por que gênio do Renascimento?",
    "resposta": "Leonardo da Vinci",
    "fonte": [
      "https://en.wikipedia.org/wiki/Divina_proportione"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Divina_proportione",
        "situacao": "ok",
        "texto": "Divina proportione (15th century Italian for Divine proportion), later also called De divina proportione (converting the Italian title into a Latin one) is a book on mathematics written by Luca Pacioli and illustrated by Leonardo da Vinci, completed by February 9th, 1498 in Milan and first printed in 1509. Its subject was mathematical proportions (the title refers to the golden ratio) and their ap\n[…]\nThe clarity of the written material and Leonardo's excellent diagrams helped the book to achieve an impact beyond mathematical circles, popularizing contemporary geometric concepts and images.\n[…]\nThe first part, Compendio divina proportione (Compendium on the Divine Proportion), studies the golden ratio from a mathematical perspective (following the relevant work of Euclid), giving mystical and religious meanings to this ratio, in seventy-one chapters. Pacioli points out that golden rectangles can be inscribed by an icosahedron, and in the fifth chapter, gives five reasons why the golden ratio should be referred to as the \"Divine Proportion\":\n[…]\nAfter these three parts are appended two sections of illustrations, the first showing twenty-three capital letters drawn with a ruler and compass by Pacioli and the second with some sixty illustrations in woodcut after drawings by Leonardo da Vinci. Leonardo drew the illustrations of the regular solids while he lived with and took mathematics lessons from Pacioli.\n[…]\nLeonardo's drawings are probably the first illustrations of skeletonic solids which allowed an easy distinction between front and back.\n[…]\nAnother collaboration between Pacioli and Leonardo existed: Pacioli planned a book of mathematics and proverbs called De Viribus Quantitatis (The powers of numbers) which Leonardo was to illustrate, but Pacioli died before he could publish it.\n[…]\nList of works by Leonardo da Vinci"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Divina_proportione",
        "situacao": "ok",
        "texto": "Divina proportione  mais tarde também chamada De divina proporione é um livro de matemática escrito por Luca Pacioli e ilustrado por Leonardo da Vinci, composto por volta de 1498 em Milão com primeira impressão em 1509. O tratado matemático foi publicado em Veneza por Paganino Paganini.\n[…]\nO assunto tratado foi a proporções matemáticas (o título se refere à proporção áurea) e suas aplicações à geometria, às artes visuais por meio da perspectiva e à arquitetura. A clareza do material escrito e os excelentes diagramas de Leonardo ajudaram o livro a atingir um impacto além dos círculos matemáticos, popularizando conceitos e imagens geométricas contemporâneas.\n[…]\nO livro consiste em três manuscritos separados, nos quais Pacioli trabalhou entre 1496 e 1498. Ele credita para Leonardo Fibonacci como a principal fonte para a matemática apresentada no livro.\n[…]\nA primeira parte da obra estuda a proporção áurea sob uma perspectiva matemática, utilizando de estudos de Euclides, além de fornecer um significado místico e religioso à proporção ao longo de 71 capítulos. Pacioli defende que essa razão deveria ser denominada como \"Proporção Divina\", dado que:\n[…]\nA. Marinoni, Leonardo, Luca Pacioli e il \"De ludo geometrico\", Atti Mem. Accad. Petrarca, 40 (1970-2) pp. 180–205;\n[…]\nG. Masotti Biggiogero, Luca Pacioli e la sua \"Divina Proportione\", Rend. Ist. Lombardo Sci. Lett., 94 (1960) pp. 3–30;\n[…]\nL. Pacioli, De Divina Proportione. Riproduzione anastatica della copia conservata presso la Biblioteca Ambrosiana di Milano (manoscritto 170 sup.), Editore: Silvana Ed., Milano, (2010), ISBN 8836617891;\n[…]\nL. Pacioli, De Divina Proportione, Riproduzione anastatica della copia conservata presso la Bibliothèque de Genève (ms. Langues Etrangères n. 210). Editore: Aboca Edizioni, Sansepolcro. 8895642422;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Ladrilhos de Penrose",
      "descricao": "Padrão de ladrilhos que cobre o plano sem se repetir periodicamente, criado pelo britânico Roger Penrose nos anos setenta."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nos anos noventa, Roger Penrose foi à justiça contra uma empresa que estampou seus famosos ladrilhos em que produto?",
    "resposta": "Papel higiênico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Penrose_tiling"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Penrose_tiling",
        "situacao": "ok",
        "texto": "A Penrose tiling is an example of an aperiodic tiling. Here, a tiling is a covering of the plane by non-overlapping polygons or other shapes, and a tiling is aperiodic if it does not contain arbitrarily large periodic regions or patches. However, despite their lack of translational symmetry, Penrose tilings may have both reflection symmetry and fivefold rotational symmetry. Penrose tilings are nam\n[…]\nPenrose originally discovered the P1 tiling in this way, by decomposing a pentagon into six smaller pentagons (one half of a net of a dodecahedron) and five half-diamonds; he then observed that when he repeated this process the gaps between pentagons could all be filled by stars, diamonds, boats (or \"justice caps\", as he puts it) and other pentagons. By iterating this process indefinitely he obtained one of the two P1 tilings with pentagonal symmetry.\n[…]\nIn Indian Institute of Information Technology, Allahabad, since the first phase of construction in 2001, academic buildings were designed on the basis of \"Penrose Geometry\", styled on tessellations developed by Roger Penrose. In many places in those buildings, the floor has geometric patterns composed of Penrose tiling.\n[…]\nPenrose, Roger (1974). \"The role of aesthetics in pure and applied mathematical research\". Bulletin of the Institute of Mathematics and Its Applications. 10: 266ff..\n[…]\nUS 4133152, Penrose, Roger, \"Set of tiles for covering a surface\", published 9 January 1979 .\n[…]\nPenrose, Roger (1978). \"Pentaplexity\" (PDF). Eureka. Vol. 39. pp. 16–22. Archived from the original (PDF) on 9 August 2022. Retrieved 2 February 2021.. (Page numbers cited here are from the reproduction as Penrose, R. (1979–80). \"Pentaplexity: A class of non-periodic tilings of the plane\". The Mathematical Intelligencer. 2: 32–37. doi:10.1007/BF03024384. S2CID 120305260..)\n[…]\nWeisstein, Eric W. \"Penrose Tiles\". MathWorld.\n[…]\n\"Penrose's tiles viewer\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mosaico_de_Penrose",
        "situacao": "ok",
        "texto": "Os mosaicos de Penrose ou tesselação de Penrose é uma tesselação (em mosaico, e.g.) não periódicos que levam o nome de Roger Penrose, que os investigou na década de 1970.\n[…]\nSegundo Penrose, quando tinha 9 anos perguntou a seu pai se era possível encaixar hexágonos regulares de modo a formar uma figura redonda.\n[…]\nTrês tipos de azulejos de Penrose (P1—P3) são descritos abaixo. Todos os azulejos apresentam azulejos formados a partir de um pentágono.\n[…]\nOs primeiros azulejos de Penrose poderiam compreender uma dessas formas: um pentágono, uma estrela de cinco pontas (um pentagrama), um \"barco\" (aproximadamente três quintos de uma estrela) e um \"diamante\" (um losango fino).\n[…]\nO quadrilátero e flecha de Conway podem ser combinados de tal forma que produzam um losango — mas, para formar um mosaico de Penrose, essa combinação não pode estar presente. O quadrilátero de Conway é uma pipa convexo, enquanto a flecha é uma pipa côncava. Ambas as figuras são compostas de dois triângulos chamadas de \"triângulos de Robinson\".\n[…]\n«Roger Penrose, seus mosaicos e a consciência»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Benoit Mandelbrot",
      "descricao": "Matemático franco-americano nascido na Polônia, criador da geometria fractal."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Num artigo famoso de 1967, Benoit Mandelbrot perguntou qual é o comprimento do litoral de que grande ilha europeia?",
    "resposta": "Grã-Bretanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/How_Long_Is_the_Coast_of_Britain%3F_Statistical_Self-Similarity_and_Fractional_Dimension",
      "https://en.wikipedia.org/wiki/Coastline_paradox"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/How_Long_Is_the_Coast_of_Britain%3F_Statistical_Self-Similarity_and_Fractional_Dimension",
        "situacao": "ok",
        "texto": "The coastline paradox is the counterintuitive observation that the coastline of a landmass does not have a well-defined length or perimeter. This results from the fractal curve–like properties of coastlines, namely the fact that a coastline typically has a fractal dimension. Although the \"paradox of length\" was previously noted by Hugo Steinhaus, the first systematic study of this phenomenon was b\n[…]\nIn geometric measure theory, such a smooth curve as the circle that can be approximated by small straight segments with a definite limit is termed a rectifiable curve. Benoit Mandelbrot devised an alternative measure of length for coastlines, the Hausdorff dimension, and showed that it does not depend on the length l in the same way.\n[…]\nMore than a decade after Richardson completed his work, Benoit Mandelbrot developed a new branch of mathematics called fractal geometry to describe just such non-rectifiable complexes in nature as the infinite coastline. His own definition of the new figure serving as the basis for his study is:\n[…]\nIn \"How Long Is the Coast of Britain? Statistical Self-Similarity and Fractional Dimension\", published on 5 May 1967, Mandelbrot discusses self-similar curves that have Hausdorff dimension between 1 and 2. These curves are examples of fractals, although Mandelbrot does not use this term in the paper, as he did not coin it until 1975. The paper is one of Mandelbrot's first publications on the topic of fractals.\n[…]\nThere are different kinds of fractals. A coastline with the stated property is in \"a first category of fractals, namely curves whose fractal dimension is greater than 1\". That last statement represents an extension by Mandelbrot of Richardson's thought. Mandelbrot's statement of the Richardson effect is:\n[…]\n\"Coastlines\" at Fractal Geometry (ed. Michael Frame, Benoit Mandelbrot, and Nial Neger; maintained for Math 190a at Yale University)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Coastline_paradox",
        "situacao": "ok",
        "texto": "The coastline paradox is the counterintuitive observation that the coastline of a landmass does not have a well-defined length or perimeter. This results from the fractal curve–like properties of coastlines, namely the fact that a coastline typically has a fractal dimension. Although the \"paradox of length\" was previously noted by Hugo Steinhaus, the first systematic study of this phenomenon was b\n[…]\nIn geometric measure theory, such a smooth curve as the circle that can be approximated by small straight segments with a definite limit is termed a rectifiable curve. Benoit Mandelbrot devised an alternative measure of length for coastlines, the Hausdorff dimension, and showed that it does not depend on the length l in the same way.\n[…]\nMore than a decade after Richardson completed his work, Benoit Mandelbrot developed a new branch of mathematics called fractal geometry to describe just such non-rectifiable complexes in nature as the infinite coastline. His own definition of the new figure serving as the basis for his study is:\n[…]\nIn \"How Long Is the Coast of Britain? Statistical Self-Similarity and Fractional Dimension\", published on 5 May 1967, Mandelbrot discusses self-similar curves that have Hausdorff dimension between 1 and 2. These curves are examples of fractals, although Mandelbrot does not use this term in the paper, as he did not coin it until 1975. The paper is one of Mandelbrot's first publications on the topic of fractals.\n[…]\nThere are different kinds of fractals. A coastline with the stated property is in \"a first category of fractals, namely curves whose fractal dimension is greater than 1\". That last statement represents an extension by Mandelbrot of Richardson's thought. Mandelbrot's statement of the Richardson effect is:\n[…]\n\"Coastlines\" at Fractal Geometry (ed. Michael Frame, Benoit Mandelbrot, and Nial Neger; maintained for Math 190a at Yale University)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paradoxo_do_litoral",
        "situacao": "ok",
        "texto": "O paradoxo do litoral é a observação contraintuitiva de que o litoral de uma massa terrestre não tem um comprimento bem definido. Isso resulta das propriedades semelhantes às fractais das linhas costeiras, ou seja, o fato de que um litoral tipicamente tem uma dimensão fractal (o que de fato torna a noção de comprimento inaplicável). A primeira observação registrada deste fenômeno foi por Lewis Fry\n[…]\nQuanto mais preciso for o dispositivo de medição, mais próximos serão os resultados para o comprimento real do que vai ser medido. Ao medir um litoral, no entanto, a questão é que o resultado não aumenta em precisão para um aumento no critério da medição – o resultado só aumenta; diferentemente da barra de metal, não há como obter um valor máximo para o comprimento de um litoral.\n[…]\nO conceito básico de comprimento tem origem em distância euclidiana. Na geometria euclidiana, uma linha reta representa a menor distância entre dois pontos. Essa linha tem apenas um comprimento. Na superfície de uma esfera, essa é substituída pelo comprimento geodésico (também chamado comprimento sobre grande círculo), que é medido ao longo da curva de superfície que existe no plano contendo ambos os pontos finais e o centro da esfera.\n[…]\nA animação a seguir ilustra como a uma curva “smooth” pode ser significativamente atribuído um comprimento preciso\n[…]\nComo o comprimento de uma curva fractal sempre diverge ao infinito, se alguém fosse medir um litoral com resolução infinita ou quase infinita, o comprimento das dobras infinitamente curtas no litoral aumentaria até o infinito. No entanto, essa figura se baseia no pressuposto de que o espaço pode ser subdividido em seções infinitesimais.\n[…]\n\"Coastlines\" at Fractal Geometry (ed. Michael Frame, Benoit Mandelbrot, and Nial Neger; maintained for Math 190a at Yale University)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Fractal",
      "descricao": "Figura geométrica cujas partes repetem a forma do todo em escalas cada vez menores."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que hortaliça, parente da couve-flor, tem pontas em espiral que repetem a forma do todo e é um exemplo clássico de fractal na natureza?",
    "resposta": "Brócolis romanesco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Romanesco_broccoli"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Romanesco_broccoli",
        "situacao": "ok",
        "texto": "Romanesco broccoli (also known as broccolo romanesco, romanesque cauliflower,  or simply romanesco) is a cultivar of the cauliflower (Brassica oleracea var. botrytis). It is one of two types of broccoflower. It is an edible flower bud of the species Brassica oleracea, which also includes regular broccoli and cauliflower. It is chartreuse in color and has a striking form that naturally approximates\n[…]\nRomanesco has a nutty flavor and a firmer texture than white cauliflower or broccoli when cooked.\n[…]\nRomanesco superficially resembles a cauliflower, but it is chartreuse in color, with the form of a natural fractal. Nutritionally, romanesco is rich in vitamin C, vitamin K, dietary fiber, and carotenoids.\n[…]\nThe inflorescence (the bud) is self-similar in character, with the branched meristems making up a logarithmic spiral, giving a form approximating a natural fractal; each bud is composed of a series of smaller buds, all arranged in yet another logarithmic spiral. This self-similar pattern continues at smaller levels. The pattern is only an approximate fractal since the pattern eventually terminates when the feature size becomes sufficiently small.\n[…]\nThe number of spirals on the head of Romanesco broccoli is a Fibonacci number.\n[…]\nMedia related to Romanesco broccoli at Wikimedia Commons\n[…]\nThe dictionary definition of Romanesco at Wiktionary\n[…]\nFractal Food: Self-Similarity on the Supermarket Shelf (John Walker, March 2005)\n[…]\nProcedural fractal 3-D generation of Romanesco broccoli with RenderMan (Aleksandar Rodić, 2009)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Romanesco",
        "situacao": "ok",
        "texto": "O romanesco é a inflorescência comestível da Brassica oleracea var. botrytis, uma variedade da espécie a que pertencem também a couve-flor, o brócolis, a couve, o repolho e a couve-de-bruxelas. É originário da Itália, mais precisamente de Roma. Há registros de sua utilização desde o século XVI, mas somente nas últimas décadas veio a ser disponível e conhecido em outros países.\n[…]\nA sua forma geométrica é muito decorativa e a sua disposição espiralada é frequentemente citada como exemplo de forma fractal na natureza; ela ilustra as leis da filotaxia. A sua consistência é ainda mais tenra que a da couve-flor, devendo portanto ser apenas levemente cozida e podendo também ser utilizada crua, em saladas.\n[…]\nClassificação do cultivar (em inglês)\n[…]\nComida fractal (em inglês)\n[…]\nAbacaxi fractal (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Sistema binário",
      "descricao": "Sistema de numeração de base dois, que escreve todos os números apenas com os algarismos zero e um, base da computação."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No início do século dezoito, Leibniz viu semelhanças entre o sistema binário e os hexagramas de que antigo livro chinês?",
    "resposta": "I Ching",
    "distratores": [
      "Tao Te Ching",
      "A Arte da Guerra",
      "Analectos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Binary_number"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Binary_number",
        "situacao": "ok",
        "texto": "A binary number is a number expressed in the base-2 numeral system or binary numeral system, a method for representing numbers that uses only two symbols for the natural numbers: typically 0 (zero) and 1 (one). A binary number may also refer to a rational number that has a finite representation in the binary numeral system, that is, the quotient of an integer by a power of two.\n[…]\nSets of binary combinations similar to the I Ching have also been used in traditional African divination systems, such as Ifá among others, as well as in medieval Western geomancy. The majority of Indigenous Australian languages use a base-2 system.\n[…]\nThe full title of Leibniz's article is translated into English as the \"Explanation of Binary Arithmetic, which uses only the characters 1 and 0, with some remarks on its usefulness, and on the light it throws on the ancient Chinese figures of Fu Xi\". Leibniz's system uses 0 and 1, like the modern binary numeral system. An example of Leibniz's binary numeral system is as follows:\n[…]\nWhile corresponding with the Jesuit priest Joachim Bouvet in 1700, who had made himself an expert on the I Ching while a missionary in China, Leibniz explained his binary notation, and Bouvet demonstrated in his 1701 letters that the I Ching was an independent, parallel invention of binary notation.\n[…]\nLeibniz was first introduced to the I Ching through his contact with the French Jesuit Joachim Bouvet, who visited China in 1685 as a missionary. Leibniz saw the I Ching hexagrams as an affirmation of the universality of his own religious beliefs as a Christian. Binary numerals were central to Leibniz's theology. He believed that binary numbers were symbolic of the Christian idea of creatio ex nihilo or creation out of nothing.\n[…]\nBinary numerals that neither terminate nor recur represent irrational numbers. For instance,\n[…]\nAn analysis of binary as an efficient base"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_bin%C3%A1rio",
        "situacao": "ok",
        "texto": "O sistema binário ou de base 2 é um sistema de numeração posicional em que todas as quantidades se representam com base em dois números, ou seja, zero e um (0 e 1).\n[…]\nO sistema numérico binário moderno foi estudado na Europa nos séculos 16 e 17 por Thomas Harriot, Juan Caramuel Lobkowitz e Gottfried Leibniz. No entanto, sistemas envolvendo números binários já apareceram em várias culturas, incluindo o antigo Egito, China e Índia. Leibniz foi especificamente inspirado pelo I Ching chinês.\n[…]\nOs antigos escribas egípcios usavam dois sistemas diferentes para suas frações, as frações egípcias (não relacionadas ao sistema de numeração binária) e as frações do Olho de Hórus (assim chamadas porque muitos historiadores da matemática acreditam que os símbolos usados para esse sistema poderiam ser arranjados para formar o olho de Horus, embora isso tenha sido contestado).\n[…]\nNa China antiga, no texto clássico do I Ching, uma série completa de 8 trigramas e 64 hexagramas (análogo a 3 bits) e números binários de 6 bits.\n[…]\nO estudioso e filósofo chinês Shao Yong no século XI desenvolveu um arranjo binário ordenado dos hexagramas do I Ching, representando a sequência decimal de 0 a 63, e um método para gerá-lo.\n[…]\nO sistema binário moderno foi totalmente documentado por Leibniz, no século XVIII, em seu artigo \"Explication de l'Arithmétique Binaire\". Ele menciona os símbolos binários usados pelos matemáticos chineses. Leibniz utilizou um sistema matemático de duas variáveis — 0/1 — para transformar termos linguísticos e, dessa forma, distribuir informações, assim como o sistema binário atual.\n[…]\nSistema decimal\n[…]\nSistema hexadecimal\n[…]\nPrefixos binários\n[…]\nAlgarismos na base b",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Katherine Johnson",
      "descricao": "Matemática americana (1918–2020) da NASA, que calculou trajetórias de voos espaciais."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que filme de 2016 contou a história de Katherine Johnson e de outras matemáticas negras que trabalharam na NASA?",
    "resposta": "Estrelas Além do Tempo",
    "distratores": [
      "O Jogo da Imitação",
      "Uma Mente Brilhante",
      "Gênio Indomável"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hidden_Figures",
      "https://pt.wikipedia.org/wiki/Katherine_Johnson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hidden_Figures",
        "situacao": "ok",
        "texto": "Hidden Figures is a 2016 American biographical drama film co-produced and directed by Theodore Melfi, who co-wrote the screenplay with Allison Schroeder. It is loosely based on the 2016 book by Margot Lee Shetterly. It follows three female African-American mathematicians, Katherine Goble Johnson (Taraji P. Henson), Dorothy Vaughan (Octavia Spencer), and Mary Jackson (Janelle Monáe), who worked at \n[…]\nKatherine Goble Johnson's Technical Note D-233, co-written with T.H. Skopinski, can be found on the NASA Technical Reports Server.\n[…]\nSome historians and critics also discussed the film's historical accuracy. Although the film was widely praised for bringing attention to Black women mathematics at NASA, some historians and critics noted that the movie simplified parts of the historical record. For example, the film combines multiple real people into certain supporting characters and dramatizes events such as Katherine Johnson running across NASA's campus to use a segregated bathroom.\n[…]\nThe minifigures planned for inclusion in the set were Katherine Johnson, computer scientist Margaret Hamilton; astronaut, physicist and educator Sally Ride; astronomer Nancy Grace Roman; and astronaut and physician Mae Jemison (who is also African American). The finished set did not include Johnson. The Women of NASA set was released November 1, 2017.\n[…]\nMaia Weinstock’s original Lego Ideas submission also included Katherine Johnson, a NASA mathematician who calculated trajectories for the Mercury and Apollo programs, and who was recently featured in the film, Hidden Figures. But Johnson unfortunately isn’t included in Lego’s final version of this set. A company representative told Gizmodo, “In order for us to move forward with a partner we need to obtain approval from all key people, which was not possible in this case.\n[…]\nHidden Figures at History vs. Hollywood"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Katherine_Johnson",
        "situacao": "ok",
        "texto": "Katherine Coleman Goble Johnson (White Sulphur Springs, 26 de agosto de 1918 – Newport News, 24 de fevereiro de 2020) foi uma matemática, física e cientista espacial norte-americana.\n[…]\nKatherine foi coautora de 26 artigos científicos. A NASA mantém uma lista de artigos mais significativos de Johnson com links para sua ferramenta de busca de arquivo para encontrar outros. O impacto de seu legado pioneira para a ciência espacial e computação lhe rendeu diversas honrarias e medalhas, além de servir como modelo para outras estudantes. Desde 1979, antes de se aposentar da NASA, sua biografia tem lugar de destaque entre a lista de negros pioneiros em ciência e tecnologia.\n[…]\nEm março de 2016, começaram as finalizações do filme Hidden Figures, que foi lançado em 2017, sobre três cientistas negras da NASA que calcularam as trajetórias de voo do Projeto Mercury e do Apollo 11 nos anos 1960. O filme é baseado no livro de Margot Lee Shetterly que documentou as carreiras e as contribuições de Katherine Johnson, Dorothy Vaughan e Mary Jackson. Katherine é interpretada pela atriz indicada ao Oscar Taraji P. Henson.\n[…]\nHidden Figures, um filme sobre sua figura e seus colegas afro-americanos da NASA, foi baseado no livro de não ficção de mesmo nome de Margot Lee Shetterly, lançado em janeiro de 2017. O filme conta a história de Johnson e outras matemáticas afro-americanos (Mary Jackson e Dorothy Vaughan) que trabalharam na NASA. A atriz Taraji P. Henson interpreta Johnson no filme. Ela esteve presente na cerimônia do Oscar de 2017 ao lado das atrizes do filme e foi aplaudida de pé pelo público.\n[…]\nKatherine G. Johnson Vídeo produzido por Makers: Women Who Make America"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Florence Nightingale",
      "descricao": "Enfermeira britânica (1820–1910), pioneira da enfermagem moderna, que atuou na Guerra da Crimeia e usou gráficos estatísticos."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Além de pioneira da enfermagem, Florence Nightingale foi a primeira mulher aceita como membro de uma sociedade científica britânica de que área?",
    "resposta": "Estatística",
    "distratores": [
      "Astronomia",
      "Química",
      "Geologia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Florence_Nightingale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Florence_Nightingale",
        "situacao": "ok",
        "texto": "Florence Nightingale ()  (12 May 1820 – 13 August 1910) was an English social reformer, statistician and the founder of modern nursing. Nightingale came to prominence while serving as a manager and trainer of nurses during the Crimean War, in which she organised care for wounded soldiers at Constantinople. She significantly reduced death rates by improving hygiene and living standards.\n[…]\nIn 2011, an appeal was made for the former Derbyshire Royal Infirmary hospital in Derby, England to be named after Nightingale. It was suggested the name could be either Nightingale Community Hospital or Florence Nightingale Community Hospital. The area where the hospital is situated is sometimes referred to as the \"Nightingale Quarter\".\n[…]\nEminent Victorians: Florence Nightingale by Lytton Strachey\n[…]\nFlorence Nightingale Foundation\n[…]\nFlorence Nightingale Letters Collection – correspondence in the University of Illinois at Chicago digital collections\n[…]\nFlorence Nightingale Collection at Wayne State University Library consists primarily of letters written by Florence Nightingale throughout her life. Major topics of the letters include medical care for the soldiers and the poor, the role of nursing, and sanitation and public works in colonized India.\n[…]\nFlorence Nightingale Declaration Campaign for Global Health established by the Nightingale Initiative for Global Health (NIGH)\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Florence Nightingale\", MacTutor History of Mathematics Archive, University of St Andrews\n[…]\nFlorence Nightingale Window at St Peter's, Derby[link removed]\n[…]\nPapers of Florence Nightingale, 1820–1910\n[…]\nEpisode 6: Florence Nightingale Archived 1 April 2023 at the Wayback Machine from Babes of Science Archived 29 March 2019 at the Wayback Machine podcasts\n[…]\nTexas Woman's University Special Collections has a large collection of Florence Nightingale artefacts, letters, and primary sources."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Florence_Nightingale",
        "situacao": "ok",
        "texto": "Florence Nightingale (Florença, 12 de maio de 1820 — Londres, 13 de agosto de 1910) foi uma reformadora social britânica, estaticista e fundadora da enfermagem moderna. Nightingale ganhou destaque ao servir como chefe e treinadora de enfermeiras durante a Guerra da Crimeia, na qual organizou o atendimento aos soldados feridos.\n[…]\nFoi a primeira escola secular de enfermagem do mundo, hoje parte do King's College de Londres. Em reconhecimento ao seu trabalho pioneiro na enfermagem, o Juramento Nightingale feito por novos enfermeiros e a Medalha Florence Nightingale, a mais alta distinção internacional que um enfermeiro pode alcançar, foram nomeados em sua homenagem, e o Dia Internacional da Enfermagem é comemorado anualmente na data de seu aniversário.\n[…]\nNightingale foi uma escritora prodigiosa e versátil. Em sua vida, muitos de seus trabalhos publicados se preocuparam em divulgar o conhecimento médico. Algumas de suas obras foram escritas em inglês simples para que pudessem ser facilmente compreendidos por aqueles com habilidades literárias insuficientes. Ela também foi pioneira na visualização de dados com o uso de infográficos, efetivamente utilizando apresentações gráficas de dados estatísticos.\n[…]\nNightingale passou pela primeira de várias experiências que ela acreditava serem chamados de Deus em fevereiro de 1837, quando se encontrava em Embley Park, o que despertou um forte desejo de devotar sua vida ao serviço dos outros. Em sua juventude, ela respeitou a oposição de sua família ao trabalho como enfermeira, apenas anunciando sua decisão de entrar na área em 1844. Essa decisão foi um desafio às convenções sociais da época, onde a mulher estava destinada a cumprir o papel de esposa e mãe.\n[…]\nHá uma escola de enfermagem em Anápolis com o nome de Florence Nightingale.\n[…]\nFlorence Nightingale Museum",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Leonhard Euler",
      "descricao": "Matemático e físico suíço do século dezoito, fundador da teoria dos grafos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1742, numa carta a Leonhard Euler, que matemático propôs que todo número par maior que dois é a soma de dois números primos?",
    "resposta": "Christian Goldbach",
    "fonte": [
      "https://en.wikipedia.org/wiki/Goldbach%27s_conjecture"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Goldbach%27s_conjecture",
        "situacao": "ok",
        "texto": "Goldbach's conjecture is one of the oldest and best-known unsolved problems in number theory and all of mathematics. It states that every even natural number greater than 2 is the sum of two prime numbers.\n[…]\nOn 7 June 1742, the Prussian mathematician Christian Goldbach wrote a letter to Leonhard Euler (letter XLIII), in which he proposed the following conjecture:\n[…]\nEuler replied in a letter dated 30 June 1742 and reminded Goldbach of an earlier conversation they had had (\"... so Ew. vormals mit mir communicirt haben ...\"), in which Goldbach had remarked that the first of those two conjectures would follow from the statement\n[…]\nRené Descartes wrote, \"Every even number can be expressed as the sum of at most three primes.\" This proposition is similar to, but weaker than, Goldbach's conjecture. Paul Erdős said, \"Descartes actually discovered this before Goldbach ... but it is better that the conjecture was named for Goldbach because, mathematically speaking, Descartes was infinitely rich and Goldbach was very poor.\"\n[…]\nAnd a modern version of Goldbach's older conjecture of which Euler reminded him is:\n[…]\nHarvey Dubner proposed a strengthening of the Goldbach conjecture: that every even integer greater than 4208 is the sum of two twin primes (not necessarily belonging to the same pair). Only 34 even integers less than 4208 are not the sum of two twin primes; Dubner has verified computationally that this list is complete up to 2⋅1010. A proof of this stronger conjecture would imply not only Goldbach's conjecture but also the twin prime conjecture.\n[…]\nGoldbach's conjecture is a plot device in the Frederik Pohl novella \"The Gold at the Starbow's End.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Conjetura_de_Goldbach",
        "situacao": "ok",
        "texto": "A conjetura de Goldbach, proposta pelo matemático prussiano Christian Goldbach, é um dos problemas mais antigos não resolvidos da matemática, mais precisamente da teoria dos números.\n[…]\nEla diz que todo número par maior que 2 pode ser representado pela soma de dois números primos. Por exemplo: 4 = 2 + 2; 6 = 3 + 3; 8 = 5 + 3; 10 = 3 + 7 = 5 + 5; 12 = 5 + 7; etc.\n[…]\nVerificações por computador já confirmaram a conjetura de Goldbach para muitos números. No entanto, a efetiva demonstração matemática ainda não ocorreu. O melhor resultado até agora foi dado por Olivier Ramaré em 1995: todo número par é a soma de no máximo 6 números primos.\n[…]\nEm 7 de junho de 1742, o matemático prussiano Christian Goldbach escreveu uma carta a Leonhard Euler\n[…]\nTodo inteiro par maior que 2 pode ser escrito como a soma de 3 números primos.\n[…]\nTodo inteiro par maior que 5 pode ser escrito como a soma de 3 números primos.\n[…]\nEuler respondeu em uma carta de 30 de junho de 1742 e lembrou Goldbach de uma conversa anterior que eles tiveram (\"…so Ew vormals mit mir communicirt haben…\"), na qual Goldbach observou que sua conjectura seguia da seguinte declaração:\n[…]\nTodo inteiro par maior que 2 pode ser escrito como a soma de 2 números primos.\n[…]\nA última versão aqui descrita é a mais conhecida e divulgada atualmente, também a mais aceita, por ser mais simples e abrangente. Também é conhecida como a conjetura \"forte\" de Goldbach, distinta de seu corolário mais fraco. A conjectura forte de Goldbach implica a conjetura que todos os números ímpares maiores que 7 são a soma de três primos, que é conhecida atualmente como a conjetura \"fraca\" de Goldbach.\n[…]\nConjectura fraca de Goldbach",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Teorema do macaco infinito",
      "descricao": "Resultado de probabilidade segundo o qual um macaco digitando teclas ao acaso por tempo infinito acabaria, quase certamente, escrevendo qualquer texto."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo o teorema do macaco infinito, um macaco digitando ao acaso para sempre acabaria escrevendo, no exemplo clássico, a obra completa de que autor?",
    "resposta": "William Shakespeare",
    "fonte": [
      "https://en.wikipedia.org/wiki/Infinite_monkey_theorem"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Infinite_monkey_theorem",
        "situacao": "ok",
        "texto": "The infinite monkey theorem states that a monkey hitting keys independently and at random on a typewriter keyboard for an infinite amount of time will almost surely type any given text, including the complete works of William Shakespeare. More precisely, under the assumption of independence and randomness of each keystroke, the monkey would almost surely type every possible finite text an infinite\n[…]\nDue to processing power limitations, the program used a probabilistic model (by using a random number generator or RNG) instead of actually generating random text and comparing it to Shakespeare. When the simulator \"detected a match\" (that is, the RNG generated a certain value or a value within a certain range), the simulator simulated the match by generating matched text.\n[…]\nScience fiction author R. A. Lafferty used this idea as the basis for his 1970 short story \"Been a Long, Long Time\", in which a group of immortal monkeys are tasked with typing randomly to write the complete works of Shakespeare. After several billion cycles of the universe expanding, contracting, and repeating the Big Bang, they nearly complete the task.\n[…]\nA quotation attributed to a 1996 speech by Robert Wilensky stated, \"We've heard that a million monkeys at a million keyboards could produce the complete works of Shakespeare; now, thanks to the Internet, we know that is not true.\"\n[…]\nThe enduring, widespread popularity of the theorem was noted in the introduction to a 2001 paper, \"Monkeys, Typewriters and Networks: The Internet in the Light of the Theory of Accidental Excellence\". In 2002, an article in The Washington Post said, \"Plenty of people have had fun with the famous notion that an infinite number of monkeys with an infinite number of typewriters and an infinite amount of time could eventually write the works of Shakespeare\".\n[…]\nThe Infinite Monkey Cage – Science and comedy radio show"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teorema_do_macaco_infinito",
        "situacao": "ok",
        "texto": "O teorema do macaco infinito afirma que um macaco digitando aleatoriamente em um teclado por um intervalo de tempo infinito irá quase certamente criar um texto qualquer escolhido, como por exemplo a obra completa de William Shakespeare.\n[…]\nPode-se também pensar que, com infinitos macacos infinitos, algum deles irá quase certamente criar um texto qualquer escolhido como primeiro texto a ser digitado.\n[…]\nNeste contexto, \"quase certamente\" é um termo matemático com um significado preciso, enquanto que o \"macaco\" é apenas uma imagem, não um símio verdadeiro; trata-se de uma metáfora para um dispositivo abstracto que produza uma sequência aleatória de letras ad infinitum. O teorema ilustra os perigos do raciocínio sobre o infinito ao imaginar um número muito grande mas finito, e vice versa.\n[…]\nO mesmo argumento mostra por que pelo menos um dos infinitamente muitos macacos irá (quase certamente) produzir um texto tão rapidamente quanto o seria por um digitador humano perfeitamente sem erros copiando do original. Nesse caso Xn = (1 − (1/50)6)n onde Xn representa a probabilidade de nenhum dos primeiros n macacos escrever banana corretamente na primeira tentativa.\n[…]\na probabilidade de infinitamente muitos dos Ek ocorrerem é 1. O primeiro teorema é demonstrado de forma similar; pode-se dividir a cadeia aleatória pelos blocos não sobrepostos que correspondem ao texto desejado, e fazer Ek o evento onde o k-ésimo bloco é igual à cadeia desejada.\n[…]\nIgnorando pontuação, espaçamento e diferença entre maiúsculas e minúsculas, um macaco escrevendo letras de maneira uniforme e aleatória tem uma chance em 26 de digitar corretamente a primeira letra de Hamlet. Ele tem uma chance em 676 (26 × 26) de digitar as primeiras duas letras.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Pitágoras",
      "descricao": "Filósofo e matemático grego do século seis a.C., nascido em Samos, fundador da escola pitagórica."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Depois de deixar a ilha de Samos, Pitágoras fundou sua famosa escola numa colônia grega do sul da Itália. Em que cidade?",
    "resposta": "Crotona",
    "distratores": [
      "Siracusa",
      "Nápoles",
      "Agrigento"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pit%C3%A1goras",
      "https://en.wikipedia.org/wiki/Pythagoras"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pit%C3%A1goras",
        "situacao": "ok",
        "texto": "Pitágoras de Samos (em grego:  Πυθαγόρας ὁ Σάμιος, ou apenas Πυθαγόρας; Πυθαγόρης em grego jônico; Samos, c. 570 – Metaponto, c. 495 a.C.) foi um filósofo e matemático grego jônico creditado como fundador do movimento chamado Pitagorismo. Na sua maioria, as informações sobre Pitágoras foram escritas séculos depois da sua morte, de modo que há pouca informação confiável sobre ele. Nasceu na ilha de\n[…]\nCerca de 530 a.C., mudou-se para Crotona, na Magna Grécia.\n[…]\nEm 522 a.C. ambos Policrates e Cambises já haviam morrido, então Pitágoras retorna a Samos onde funda uma escola de filosofia chamada Semicírculo.\n[…]\nPor volta de 518 a.C., para evitar conflitos políticos, viaja para o sul da Itália, para a cidade de Crotona onde funda uma escola espiritual; lá ele teria se casado.\n[…]\nPitágoras foi expulso de Crotona e passou a morar em Metaponto, onde morreu, provavelmente em 496 a.C. ou 497 a.C. Segundo o pitagorismo, a essência, que é o princípio fundamental que forma todas as coisas é o número. Os pitagóricos não distinguem forma, lei, e substância, considerando o número o elo entre estes elementos. Para esta escola existiam quatro elementos: terra, água, ar e fogo.\n[…]\nTanto Platão e Isócrates afirmam que, acima de tudo, Pitágoras era conhecido como o fundador de uma nova forma de vida. A organização que Pitágoras fundou em Crotona foi chamada de \"escola\", mas, de muitas maneiras, parecia um mosteiro. Os adeptos foram obrigados por um voto a Pitágoras e uns aos outros, com o propósito de buscar as observâncias religiosas e ascéticas e de estudar suas teorias religiosas e filosóficas.\n[…]\nQuando retornou a Samos, indispôs-se com o tirano Polícrates e emigrou para Crotona no sul da Itália. Aí fundou a Escola Pitagórica, a quem se concede a glória de ser a \"primeira Universidade do mundo\".\n[…]\nÁrvore de Pitágoras\n[…]\nComa pitagórica\n[…]\nCopo de Pitágoras\n[…]\nTripla pitagórica\n[…]\nPitágoras de Samos (escultor)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pythagoras",
        "situacao": "ok",
        "texto": "Pythagoras of Samos (Ancient Greek: Πυθαγόρας; c. 570 – c. 495 BC) was an ancient Ionian Greek philosopher, polymath, and the eponymous founder of Pythagoreanism. His political and religious teachings were well known in Magna Graecia and influenced the philosophies of Plato, Aristotle, and, through them, Western philosophy.\n[…]\nOther accounts claim that Pythagoras left Samos because he was so overburdened with public duties in Samos, because of the high estimation in which he was held by his fellow-citizens. He arrived in the Greek colony of Croton (today's Crotone, in Calabria) in what was then Magna Graecia. All sources agree that Pythagoras was charismatic and quickly acquired great political influence in his new environment. He served as an advisor to the elites in Croton and gave them frequent advice.\n[…]\nThe poet Heraclitus of Ephesus (fl. c. 500 BC), who was born a few miles across the sea from Samos and may have lived within Pythagoras's lifetime, mocked Pythagoras as a clever charlatan, remarking that \"Pythagoras, son of Mnesarchus, practiced inquiry more than any other man, and selecting from these writings he manufactured a wisdom for himself—much learning, artful knavery.\" Alcmaeon of Croton (fl. c.\n[…]\nHeinrich Cornelius Agrippa's popular and influential three-volume treatise De Occulta Philosophia cites Pythagoras as a \"religious magi\" and advances the idea that Pythagoras's mystical numerology operates on a supercelestial level, a religious term used to describe a high heavenly realm used during his time. The freemasons deliberately modeled their society on the community founded by Pythagoras at Croton."
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Artur Avila",
      "descricao": "Matemático brasileiro nascido no Rio de Janeiro em 1979, vencedor da Medalha Fields em 2014."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Antes de ganhar a Medalha Fields, o carioca Artur Avila fez seu doutorado em que instituto de pesquisa do Rio de Janeiro?",
    "resposta": "Instituto de Matemática Pura e Aplicada",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Artur_Avila",
      "https://en.wikipedia.org/wiki/Artur_Avila"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Artur_Avila",
        "situacao": "ok",
        "texto": "Artur Avila Cordeiro de Melo (Rio de Janeiro, 29 de junho de 1979) é um matemático brasileiro, naturalizado francês. É conhecido por ter sido o primeiro lusófono e primeiro latino-americano a receber a Medalha Fields, prêmio oferecido a matemáticos com até 40 anos de idade e considerado equivalente ao Prêmio Nobel (já que o Prêmio Nobel não premia cientistas na área da matemática).\n[…]\nAinda no ensino médio, Ávila concluiu o mestrado no Instituto Nacional de Matemática Pura e Aplicada (IMPA) e iniciou o doutorado na mesma instituição concomitantemente com a graduação na Universidade Federal do Rio de Janeiro (UFRJ). Aos 19 anos começou sua tese de doutorado baseada na teoria de sistemas dinâmicos finalizada em 2001. Ele trabalha nas áreas de dinâmica unidimensional e holomorfa.\n[…]\nDurante sua tese Ávila viajou a Paris onde aprendeu francês e se candidatou ao concurso do CNRS, sendo rejeitado em duas oportunidades (em 2001 e 2002), entretanto um pesquisador conhecido facilitou seu acesso a um cargo de pós-graduação na instituição. Ingressou no CNRS em 2003, onde chegou, em 2008, ao título de diretor de pesquisa, com apenas 29 anos. Seu orientador de pós-doutorado foi Jean-Christophe Yoccoz.\n[…]\nArtur solucionou o problema junto com a matemática Svetlana Jitomirskaya e ganhou de presente algumas rodadas de martini.\n[…]\nEm 2014 recebeu a Medalha Fields, láurea voltada para jovens matemáticos que é considerada o \"Prêmio Nobel\" da matemática, pelos seus trabalhos em teoria de sistemas dinâmicos, tornando-se o primeiro cientista latino-americano e lusófono a conquistar tal distinção. Em 1° de janeiro de 2015 foi nomeado cavaleiro da Legião de Honra da França, que lhe foi concedida como título excepcional já que Avila não tinha os 20 anos mínimos de carreira exigidos para receber a honraria.\n[…]\nArtur Avila (em inglês) no Mathematics Genealogy Project"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Artur_Avila",
        "situacao": "ok",
        "texto": "Artur Avila Cordeiro de Melo (Brazilian Portuguese: [aʁˈtuʁ ˈavilɐ koʁˈde(j)ɾu dʒi ˈmɛlu]; born 29 June 1979) is a Brazilian and naturalized French mathematician working primarily in the fields of dynamical systems and spectral theory. He is one of the winners of the 2014 Fields Medal, being the first Latin American and lusophone to win such award. He has been a researcher at both the IMPA and the\n[…]\nAt the age of 16, Avila won a gold medal at the 1995 International Mathematical Olympiad and received a scholarship for the Instituto Nacional de Matemática Pura e Aplicada (IMPA) to start an M.S. degree while still attending high school in Colégio de São Bento and Colégio Santo Agostinho in Rio de Janeiro. He completed his M.S. degree in 1997. Later he enrolled in the Federal University of Rio de Janeiro (UFRJ), earning his B.S in mathematics.\n[…]\nMuch of Artur Avila's work has been in the field of dynamical systems. In March 2005, at age 26, Avila and Svetlana Jitomirskaya proved the \"conjecture of the ten martinis,\" a problem proposed by the American mathematical physicist Barry Simon. Mark Kac promised a reward of ten martinis to whoever solved the problem: whether or not the spectrum of a particular type of operator is a Cantor set, given certain conditions on its parameters.\n[…]\n1993: Gold medal at the Olimpíada Brasileira de Matemática, Brazil\n[…]\n1994: Gold medal at the Olimpíada Brasileira de Matemática, Brazil\n[…]\n1995: Gold medal at the Olimpíada Brasileira de Matemática, Brazil\n[…]\n2001: PhD Thesis (advisor Welington de Melo)\n[…]\n2014: Fields Medal\n[…]\nInterview with Artur Avila Chalkdust Magazine\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Artur Avila\", MacTutor History of Mathematics Archive, University of St Andrews\n[…]\nArtur Avila's page at University of Zurich\n[…]\nArtur Avila at the Mathematics Genealogy Project\n[…]\nArtur Avila's results at International Mathematical Olympiad\n[…]\nArtur Avila's Lattes Platform"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "M. C. Escher",
      "descricao": "Artista gráfico holandês (1898–1972), famoso por gravuras com ladrilhamentos, metamorfoses e construções impossíveis."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os ladrilhamentos com figuras de animais do holandês Escher foram inspirados nos mosaicos de que palácio mouro da Espanha?",
    "resposta": "Alhambra",
    "fonte": [
      "https://en.wikipedia.org/wiki/M._C._Escher"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/M._C._Escher",
        "situacao": "ok",
        "texto": "Maurits Cornelis Escher (; Dutch: [ˈmʌurɪts kɔrˈneːlɪs ˈɛɕər]; 17 June 1898 – 27 March 1972) was a Dutch graphic artist who made woodcuts, lithographs, and mezzotints, many of which were inspired by mathematics.\n[…]\nHe travelled frequently, visiting (among other places) Viterbo in 1926, the Abruzzi in 1927 and 1929, Corsica in 1928 and 1933, Calabria in 1930, the Amalfi coast in 1931 and 1934, and Gargano and Sicily in 1932 and 1935. The townscapes and landscapes of these places feature prominently in his artworks. In May and June 1936, Escher travelled back to Spain, revisiting the Alhambra and spending days at a time making detailed drawings of its mosaic patterns.\n[…]\nAfter his 1936 journey to the Alhambra and to La Mezquita, Cordoba, where he sketched the Moorish architecture and the tessellated mosaic decorations, Escher began to explore tessellation using geometric grids as the basis for his sketches. He then extended these to form complex interlocking designs, for example with animals such as birds, fish, and reptiles.\n[…]\nThe mathematical influence in his work became prominent after 1936, when, having boldly asked the Adria Shipping Company if he could sail with them as travelling artist in return for making drawings of their ships, they surprisingly agreed, and he sailed the Mediterranean, becoming interested in order and symmetry. Escher described this journey, including his repeat visit to the Alhambra, as \"the richest source of inspiration I have ever tapped\".\n[…]\nDoris Schattschneider identifies eleven strands of mathematical and scientific research anticipated or directly inspired by Escher.\n[…]\nM. C. Escher at IMDb\n[…]\nM. C. Escher discography at Discogs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M._C._Escher",
        "situacao": "ok",
        "texto": "Maurits Cornelis Escher ([ˈɛʃər]; nl; 17 de junho de 1898 – 27 de março de 1972) foi um artista gráfico neerlandês que produziu xilogravuras, litografias e mezzotintas, muitas das quais foram inspiradas pela matemática.\n[…]\nEm 1922, um ano importante de sua vida, Escher viajou pela Itália, visitando Florença, San Gimignano, Volterra, Siena e Ravello. No mesmo ano, viajou pela Espanha, visitando Madri, Toledo e Granada. Ele ficou impressionado com o campo italiano e, em Granada, pela arquitetura moura do Alhambra, datado do século XIV.\n[…]\nEle viajava frequentemente, visitando (entre outros lugares) Viterbo em 1926, Abruzos em 1927 e 1929, Córsega em 1928 e 1933, Calábria em 1930, a Costa Amalfitana em 1931 e 1934, além de Gargano e Sicília em 1932 and 1935. As paisagens urbanas e rurais desses lugares figuram proeminentemente em suas obras de arte. Em maio e junho de 1936, Escher viajou de volta à Espanha, revisitando o Alhambra e passando dias inteiros fazendo desenhos detalhados de seus padrões de mosaico.\n[…]\nApós sua viagem de 1936 ao Alhambra e à Mesquita de Córdova, onde esboçou a arquitetura moura e as decorações em mosaicos tessalados, Escher começou a explorar a tessalação utilizando grades geométricas como base para seus esboços. Ele então estendeu essas grades para formar desenhos complexos e interconectados, por exemplo, com animais como pássaros, peixes e répteis.\n[…]\nEscher descreveu essa jornada, incluindo sua repetição de visita ao Alhambra, como \"a fonte mais rica de inspiração que já explorei\".\n[…]\nDoris Schattschneider identifica onze vertentes de pesquisa matemática e científica antecipadas ou diretamente inspiradas por Escher.\n[…]\nM. C. Escher no IMDb\n[…]\nEscher M. C. Escher (em inglês) no Discogs",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Joseph-Louis Lagrange",
      "descricao": "Matemático e astrônomo ítalo-francês autor da Mecânica Analítica."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Lagrange, Laplace e Cauchy estão entre os setenta e dois cientistas que têm o nome gravado em que famoso monumento francês?",
    "resposta": "Torre Eiffel",
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_the_72_names_on_the_Eiffel_Tower"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_the_72_names_on_the_Eiffel_Tower",
        "situacao": "ok",
        "texto": "On the Eiffel Tower, 72 names of French male scientists, engineers, and mathematicians appear in raised lettering in recognition of their contributions. Gustave Eiffel chose this \"invocation of science\" because of his concern over the protests against the tower, and chose names of those who had distinguished themselves since 1789. The engravings are found on the sides of the tower under the first \n[…]\nAn Eiffel Tower tour guide, Benjamin Rigaud, would point out to visitors the 72 names of scientists on the tower, but he was surprised to find that there were no women included. He noticed that there were 40 spaces on the tower's second floor and this matched the number of women identified in a Femmes et Sciences document. This led to the idea of a project, to include the missing women, which was named after Hypatia, the fourth century CE Alexandrian mathematician.\n[…]\nEiffel acknowledged most of the leading French scientists in the field of hydraulic engineering; fourteen of them are listed on the Eiffel Tower. Among those missing are Henri Philibert Gaspard Darcy, whose work did not come into wide use until the 20th century, Antoine Chézy, and Joseph Valentin Boussinesq, who was early in his career at the time.\n[…]\nThe renowned mathematician Évariste Galois is also absent from the list, as are Joseph Liouville and Charles Hermite, two other famous French mathematicians.\n[…]\nList of women's names for the Eiffel Tower\n[…]\nBarral, Georges (1892). Le Panthéon scientifique de la tour Eiffel: histoire des origines de la construction de la Tour (in French). Savine. Reprinted as Barral, Georges (2013). Le Panthéon scientifique de la tour Eiffel: histoire des origines de la construction de la Tour (in French). Hachette Livre. ISBN 978-2-01-285936-4.\n[…]\nMedia related to 72 names on the Eiffel Tower at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/72_nomes_na_Torre_Eiffel",
        "situacao": "ok",
        "texto": "Os 72 nomes na Torre Eiffel referem-se aos nomes gravados na referida torre de matemáticos, físicos, engenheiros, militares e políticos franceses, em reconhecimento a suas contribuições à República Francesa, cujo centenário se comemorava então (1789-1889). Estas gravações foram cobertas por tinta no começo do século XX, e restauradas em 1986-1987 pela Société Nouvelle d'exploitation de la Tour Eif\n[…]\nA lista é criticada por excluir, dentre outros, Sophie Germain, cujo trabalho na teoria da elasticidade foi crucial para a construção da torre. Alguns autores e biógrafos dizem que ela foi excluída pelo simples fato de ser mulher.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Último Teorema de Fermat",
      "descricao": "Teorema enunciado por Pierre de Fermat em 1637 e demonstrado por Andrew Wiles em 1994."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Por volta de 1637, Pierre de Fermat anotou seu último teorema na margem de um livro escrito por um matemático grego antigo. Que livro?",
    "resposta": "Aritmética, de Diofanto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem",
      "https://en.wikipedia.org/wiki/Arithmetica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem",
        "situacao": "ok",
        "texto": "In number theory, Fermat's Last Theorem (sometimes called Fermat's conjecture, especially in older texts) states that there are no positive integers a,b,c,n with n>2 such that an+bn=cn. The cases n=1 and n=2 have been known since antiquity to have infinitely many solutions.\n[…]\nThe proposition was first stated as a theorem by Pierre de Fermat around 1637 in the margin of a copy of Arithmetica.\n[…]\nWiles and Taylor's proof relies on 20th-century techniques. Fermat's proof would have had to be elementary by comparison, given the mathematical knowledge of his time.\n[…]\nThe error would not have rendered his work worthless: each part of Wiles's work was highly significant and innovative by itself, as were the many developments and techniques he had created in the course of his work, and only one part was affected. However, without this part proved, there was no actual proof of Fermat's Last Theorem. Wiles spent almost a year trying to repair his proof, initially by himself and then in collaboration with his former student Richard Taylor, without success.\n[…]\nOn 24 October 1994, Wiles submitted two manuscripts, \"Modular elliptic curves and Fermat's Last Theorem\" and \"Ring theoretic properties of certain Hecke algebras\", the second of which was co-authored with Taylor and proved that certain conditions were met that were needed to justify the corrected step in the main paper. The two papers were vetted and published as the entirety of the May 1995 issue of the Annals of Mathematics.\n[…]\nwhich is impossible by Fermat's Last Theorem.\n[…]\nIn March 2016, Wiles was awarded the Norwegian government's Abel Prize worth €600,000 for \"his stunning proof of Fermat's Last Theorem by way of the modularity conjecture for semistable elliptic curves, opening a new era in number theory\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Arithmetica",
        "situacao": "ok",
        "texto": "Diophantus of Alexandria (; Ancient Greek: Διόφαντος, romanized: Diophantos; fl. 250 CE) was a Greek mathematician who was the author of the Arithmetica in thirteen books, of which ten are extant, made up of arithmetical problems that are solved through algebraic equations.\n[…]\nI have a truly marvelous proof of this proposition which this margin is too narrow to contain.Fermat's proof was never found, and the problem of finding a proof for the theorem went unsolved for centuries. A proof was finally found in 1994 by Andrew Wiles after working on it for seven years. It is believed that Fermat did not actually have the proof he claimed to have.\n[…]\nDiophantus was among the first to recognise positive rational numbers as numbers, by allowing fractions for coefficients and solutions. He coined the term παρισότης (parisotēs) to refer to an approximate equality. This term was rendered as adaequalitas in Latin, and became the technique of adequality developed by Pierre de Fermat to find maxima for functions and tangent lines to curves.\n[…]\nDiophantus Alexandrinus, Pierre de Fermat, Claude Gaspard Bachet de Meziriac, Diophanti Alexandrini Arithmeticorum libri 6, et De numeris multangulis liber unus. Cum comm. C(laude) G(aspar) Bacheti et observationibus P(ierre) de Fermat. Acc. doctrinae analyticae inventum novum, coll. ex variis eiu. Tolosae 1670, doi:10.3931/e-rara-9423.\n[…]\nRashed, Roshdi, Histoire de l’analyse diophantienne classique : D’Abū Kāmil à Fermat, Berlin, New York : Walter de Gruyter."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%9Altimo_teorema_de_Fermat",
        "situacao": "ok",
        "texto": "O Último Teorema de Fermat é um famoso teorema matemático conjecturado pelo matemático francês Pierre de Fermat em 1637. Trata-se de uma generalização do famoso Teorema de Pitágoras, que diz \"a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa\": (\n[…]\nFermat era conhecido como \"Príncipe dos Amadores\", e compartilhava suas ideias matemáticas com matemáticos da época. Como seu epíteto diz, Fermat se tratava de um amador, e seus trabalhos e conceitos eram construídos em seus momentos de lazer. Provavelmente seu interesse pela Matemática se despertou ao conhecer a tradução de CG Bachet (1621), de Diofanto de Alexandria.\n[…]\nComo o matemático possuía a prática de fazer apenas anotações informais sobre seus estudos, o único indício de uma prova deste teorema é uma observação por ele deixada em 1637 em um de seus livros, “Aritmética”, de Diofante.\n[…]\nFermat então escreveu:\n[…]\nA Conjectura construída pelos dois matemáticos diz que, para cada equação elíptica, há uma forma modular correspondente. Isso implica que, se a mesma estivesse correta, ela poderia ser aplicada ao Último Teorema de Fermat, provando a sua veracidade. Ou seja, para provar se o Último Teorema de Fermat era verdadeiro ou não, tornava-se necessário provar a conjectura Taniyama-Shimura, e foi o que Andrew Wiles fez.\n[…]\nPropiciando notáveis avanços em vários ramos da matemática, a saga de 359 anos de tentativas, erros e acertos está descrita no livro “O Último Teorema de Fermat”, do autor britânico Simon Lehna Singh, com 324 páginas\n[…]\nO Livro \"O Último Teorema de Fermat: À descoberta do segredo de um problema matemático secular\", de Amir D. Aczel (1997) também fala sobre este teorema.\n[…]\nO Último Teorema de Fermat, livro de Simon Singh\n[…]\n«Bluff your way in Fermat's Last Theorem» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Quadrado mágico",
      "descricao": "Arranjo quadrado de números em que linhas, colunas e diagonais principais têm a mesma soma."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Segundo uma lenda chinesa, o mais antigo quadrado mágico, o Lo Shu, apareceu desenhado no casco de que animal?",
    "resposta": "Tartaruga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lo_Shu_Square"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lo_Shu_Square",
        "situacao": "ok",
        "texto": "The Luoshu (pinyin), Lo Shu (Wade-Giles), or Nine Halls Diagram is an ancient Chinese diagram and named for the Luo River near Luoyang, Henan. The Luoshu appears in myths concerning the invention of writing by Cangjie and other culture heroes. It is a unique normal magic square of order three.\n[…]\nIt is usually paired with the River Map or Hetu—named in reference to the Yellow River—and used with the River Map in various contexts involving Chinese geomancy, numerology, philosophy, and early natural science.\n[…]\nThe Lo Shu is part of the legacy of ancient Chinese mathematical and divination (cf. the I Ching 易經) traditions, and is an important emblem in Feng Shui (風水)—the art of geomancy concerned with the placement of objects in relation to the flow of qi (氣), or \"natural energy\".\n[…]\nA Chinese legend concerning the pre-historic Emperor Yu (夏禹) tells of the Lo Shu, often in connection with the Yellow River Map (Hetu) and the eight trigrams. In ancient China there is a legend of a huge deluge: the people offered sacrifices to the god of one of the flooding rivers, the Luo river (洛河), to try to calm his anger.\n[…]\nChinese: 河圖洛書\n[…]\nCammann, Schuyler (Summer 1961). \"The Magic Square of Three in Old Chinese Philosophy and Religion\". History of Religions. 1 (1): 37–80. doi:10.1086/462439. S2CID 162306354.\n[…]\nBerglund, Lars (1990). The Secret of the Luo Shu: Numerology in Chinese Art and Architecture. Tryckbiten. ISBN 9789162800680."
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Al-Khwarizmi",
      "descricao": "Matemático e astrônomo persa do século nove que trabalhou na Casa da Sabedoria, em Bagdá."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O persa Al-Khwarizmi, cujo nome deu origem à palavra algoritmo, viveu em que século?",
    "resposta": "Século nove",
    "distratores": [
      "Século sete",
      "Século onze",
      "Século treze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Al-Khwarizmi",
      "https://en.wikipedia.org/wiki/Al-Khwarizmi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Al-Khwarizmi",
        "situacao": "ok",
        "texto": "Para álgebra, palavra originário do livro de Alcuarismo, e para algoritmo e algarismo, palavras derivadas do seu nome, veja os respectivos artigos.\n[…]\nMaomé ibne Muça Alcuarismi (em árabe: محمد بن موسى الخوارزمي, translit. Muḥammad ibn Mūsā al-Khwārizmī; c. 780 – c. 850), conhecido simplesmente como Alcuarismi, foi um matemático, astrônomo e geógrafo que trabalhou em Bagdá durante o Califado Abássida, no reinado do califa Almamune. Escreveu sobre aritmética, álgebra, astronomia e geografia, reunindo e desenvolvendo conhecimentos matemáticos de origem indiana, grega e do mundo islâmico.\n[…]\nNos textos aritméticos árabes a partir do século IX, ṣifr designava sobretudo o sinal usado para uma posição vazia na escrita dos números, embora alguns autores também efetuassem operações envolvendo esse sinal. O tratado de Alcuarismi usa o sistema indiano de notação decimal posicional, com nove algarismos e um marcador para a posição vazia, e expõe métodos que já faziam parte desse sistema. A obra não constitui um ponto de origem isolado do zero como conceito matemático.\n[…]\nA partir do século XII, traduções e adaptações latinas puseram partes da aritmética e da álgebra de Alcuarismi em circulação na Europa. Nos primeiros algorismi latinos, o cálculo decimal é escrito com nove algarismos e zero, enquanto as traduções do Al-Jabr levam seus procedimentos algébricos por outra via. Os textos latinos foram retrabalhados durante a transmissão e não formam uma sequência de cópias literais do original árabe.\n[…]\nAlgoritmo, termo cuja etimologia remonta à forma latinizada de seu nome\n[…]\nIdade de ouro islâmica, período em que viveu e escreveu"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Al-Khwarizmi",
        "situacao": "ok",
        "texto": "Muhammad ibn Musa al-Khwarizmi, or simply al-Khwarizmi (c. 780 – c. 850) was a mathematician active during the Islamic Golden Age, who produced Arabic-language works in mathematics, astronomy, and geography. Around 820, he worked at the House of Wisdom in Baghdad, the contemporary capital city of the Abbasid Caliphate. One of the most prominent scholars of the period, his works were widely influen\n[…]\nAl-Tabari gives his name as Muḥammad ibn Musá al-Khwārizmī al-Majūsī al-Quṭrubbullī (محمد بن موسى الخوارزميّ المجوسـيّ القطربّـليّ). The epithet al-Qutrubbulli could indicate he might instead have come from Qutrubbul (Qatrabbul), near Baghdad. However, Roshdi Rashed denies this:\n[…]\nThere is no need to be an expert on the period or a philologist to see that al-Tabari's second citation should read \"Muhammad ibn Mūsa al-Khwārizmī and al-Majūsi al-Qutrubbulli,\" and that there are two people (al-Khwārizmī and al-Majūsi al-Qutrubbulli) between whom the letter wa [Arabic 'و' for the conjunction 'and'] has been omitted in an early copy.\n[…]\nDuring the reign of al-Wathiq, he is said to have been involved in the first of two embassies to the Khazars. Douglas Morton Dunlop suggests that Muḥammad ibn Mūsā al-Khwārizmī might have been the same person as Muḥammad ibn Mūsā ibn Shākir, the eldest of the three Banū Mūsā brothers.\n[…]\nAl-Khwarizmi's work on arithmetic was responsible for introducing the Arabic numerals, based on the Hindu–Arabic numeral system developed in Indian mathematics, to the Western world. The term \"algorithm\" is derived from the algorism, the technique of performing arithmetic with Hindu-Arabic numerals developed by al-Khwārizmī. Both \"algorithm\" and \"algorism\" are derived from the Latinized forms of al-Khwārizmī's name, Algoritmi and Algorismi, respectively.\n[…]\nAl-Khwārizmī produced accurate sine and cosine tables.\n[…]\nMedia related to Muhammad ibn Musa al-Khwarizmi at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Pi",
      "descricao": "Constante matemática igual à razão entre a circunferência e o diâmetro de um círculo."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A letra grega pi passou a representar a razão entre a circunferência e o diâmetro de um círculo em que século?",
    "resposta": "Século dezoito",
    "distratores": [
      "Século dezesseis",
      "Século dezessete",
      "Século dezenove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pi",
        "situacao": "ok",
        "texto": "The number π ( ; spelled out as pi) is a mathematical constant, approximately equal to 3.14159, that is the ratio of a circle's circumference to its diameter. It appears in many formulae across mathematics and physics, and some of these formulae are commonly used for defining π, to avoid relying on the definition of the length of a curve.\n[…]\nThe symbol used by mathematicians to represent the ratio of a circle's circumference to its diameter is the lowercase Greek letter π, sometimes spelled out as pi. In English, π is pronounced as \"pie\" ( PY). In mathematical use, the lowercase letter π is distinguished from its capitalized and enlarged counterpart Π, which denotes a product of a sequence, analogously to how Σ denotes summation.\n[…]\nwhere the Greek letters π and δ were combined into the fraction ⁠πδ⁠ for denoting the ratios semiperimeter to semidiameter and perimeter to diameter, that is, what is presently denoted as π. (Before then, mathematicians sometimes used letters such as c or p instead.) Barrow likewise used the same notation, while Gregory instead used πρ to represent 6.28... .\n[…]\nThe earliest known use of the Greek letter π alone to represent the ratio of a circle's circumference to its diameter was by Welsh mathematician William Jones in his 1706 work Synopsis Palmariorum Matheseos; or, a New Introduction to the Mathematics. The Greek letter appears on p. 243 in the phrase \"12 Periphery (π)\", calculated for a circle with radius one. However, Jones writes that his equations for π are from the \"ready pen of the truly ingenious Mr.\n[…]\nPi Day in 2015 was particularly significant because the date and time 3/14/15 9:26:53 reflected many more digits of pi. In parts of the world where dates are commonly noted in day/month/year format, 22 July represents \"Pi Approximation Day\", as 22/7 ≈ 3.142857."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pi",
        "situacao": "ok",
        "texto": "O número π (pronuncia-se [pi]) é uma constante matemática que é razão entre o comprimento de uma circunferência e seu diâmetro, aproximadamente igual a 3,14159. Ele aparece em diversas fórmulas matemáticas e físicas. É um número irracional, que significa que não pode ser expresso como a razão de dois inteiros, embora frações como ⁠22/7⁠ são comumente utilizadas para aproximar o seu valor. Conseque\n[…]\nNo século V d.C., matemáticos chineses aproximaram π a sete dígitos, enquanto os matemáticos indianos fizeram uma aproximação de cinco dígitos, ambos utilizando técnicas geométricas. A primeira fórmula computacional, baseada numa série infinita, foi descoberta um milênio depois. O primeiro uso da letra π para representar a razão entre o comprimento e o diâmetro de uma circunferência foi do matemático galês William Jones em 1706.\n[…]\nO símbolo utilizado pelos matemáticos para representar a razão entre o comprimento de uma circunferência pelo seu diâmetro é a letra grega π minúscula, às vezes escrito como pi. Em português, π é pronunciado como [pi]. Em usos matemáticos, a letra π minúscula é diferenciada de sua forma maiúscula Π, utilizada para denotar o produtório, análogo a como Σ é utilizado para denotar o somatório.\n[…]\nπ é comumente definido como a razão do comprimento C de uma circunferência pelo seu diâmetro d:\n[…]\nO primeiro uso da letra grega π sozinha para representar a razão do comprimento de uma circunferência ao seu diâmetro foi pelo matemático galês William Jones em sua obra de 1706 Synopsis palmariorum matheseos. A letra grega aparece na frase \" ⁠1/2⁠ Periphery (π)\" na página 243, calculado para uma circunferência de raio um. No entanto, Jones escreve que suas equações para π são \"do verdadeiramente engenhoso Sr.\n[…]\nA área de um círculo de raio r é πr2.\n[…]\nO projeto foi aprovado pela Câmara dos Representantes de Indiana, mas rejeitado pelo Senado e, portanto, não se tornou lei.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Medalha Fields",
      "descricao": "Prêmio internacional concedido a cada quatro anos a matemáticos com menos de quarenta anos."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Num congresso realizado em Oslo, foram entregues as primeiras Medalhas Fields da história. Em que ano?",
    "resposta": "1936",
    "distratores": [
      "1924",
      "1950",
      "1966"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fields_Medal",
      "https://pt.wikipedia.org/wiki/Medalha_Fields"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fields_Medal",
        "situacao": "ok",
        "texto": "The Fields Medal is a prize awarded to two, three, or four mathematicians under 40 years of age at the International Congress of Mathematicians (ICM) of the International Mathematical Union (IMU), a convention which takes place every four years. The name of the award honors the Canadian mathematician John Charles Fields. Its purpose is to give recognition and support to younger mathematical resear\n[…]\nThe medal was first awarded in 1936 to Finnish mathematician Lars Ahlfors and American mathematician Jesse Douglas, and it has been awarded every four years since 1950. In 2014, the Iranian mathematician Maryam Mirzakhani became the first female Fields Medalist. With the exception of two Ph.D. holders in physics (Edward Witten and Martin Hairer), only people with a Ph.D. in mathematics have won the medal. In total, 68 people have been awarded the Fields Medal as of 2026.\n[…]\nFor the other years through 1986, summaries of the ICM lectures, as written by Donald Albers, Gerald L. Alexanderson, and Constance Reid, are quoted. In the remaining years (1990, 1994, and 2002), part of the text of the ICM lecture itself has been quoted. The most recent awarding of the Fields Medal at the 2026 International Congress of the International Mathematical Union was in Philadelphia.\n[…]\nThe medal was first awarded in 1936 to the Finnish mathematician Lars Ahlfors and the American mathematician Jesse Douglas.\n[…]\nIn 1954, Jean-Pierre Serre became the youngest winner of the Fields Medal, at 27. He retains this distinction.\n[…]\nIn 2006, Grigori Perelman, who proved the Poincaré conjecture, refused his Fields Medal, stating \"I'm not interested in money or fame; I don't want to be on display like an animal in a zoo.\" He did not attend the congress.\n[…]\nThe Fields Medal has had three female recipients: Maryam Mirzakhani from Iran in 2014, Maryna Viazovska from Ukraine in 2022, and Hong Wang from China in 2026."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Medalha_Fields",
        "situacao": "ok",
        "texto": "Medalha Fields, oficialmente conhecida como Medalha Internacional de Descobrimentos Proeminentes em Matemática (em inglês:  International Medal for Outstanding Discoveries in Mathematics), é um prêmio concedido a dois, três ou quatro matemáticos com até 40 anos de idade durante cada Congresso Internacional da União Internacional de Matemática (IMU), que acontece a cada quatro anos. O prêmio é muit\n[…]\nA medalha foi entregue pela primeira vez em 1936, para o matemático finlandês Lars Ahlfors e o matemático norte-americano Jesse Douglas, e tem sido entregue a cada quatro anos desde 1950. Sua finalidade é dar reconhecimento e apoio a jovens pesquisadores matemáticos que fizeram grandes contribuições para este campo da ciência.\n[…]\nEm 2014, Maryam Mirzakhani se tornou a primeira mulher, assim como a primeira iraniana a receber o prêmio, enquanto Artur Ávila tornou-se o primeiro matemático da América Latina a ser condecorado com a Medalha Fields.\n[…]\nMuitos trabalhos distinguidos com o Nobel são relativamente triviais, cujas descobertas emergiram espontaneamente dos estudos realizados, sem necessidade de um insight genial, ao passo que os trabalhos aos quais foram conferidas Medalhas Fields sempre exigiram um nível muito elevado de abstração, criatividade, um trabalho analítico profundo e rigoroso.\n[…]\nAlém disso, a medalha Fields só é dada para jovens matemáticos (com até 40 anos), enquanto que o prêmio Nobel não tem limite de idade.\n[…]\nA Medalha Fields ganhou conhecimento popular com o filme de 1997 Good Will Hunting. Na obra, o professor do Instituto de Tecnologia de Massachusetts Gerald Lambeau, interpretado por Stellan Skarsgård, ganhou o prêmio antes dos eventos que ocorrem na história. Ao longo do filme, há referências que enaltecem o prestígio da medalha. No programa de televisão Numbers, o protagonista, o professor Charlie Eppes, é retratado como um indicado ao prêmio."
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Crivo de Eratóstenes",
      "descricao": "Método antigo para encontrar todos os números primos até um limite, riscando os múltiplos de cada primo."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que sábio grego, famoso por ter calculado a circunferência da Terra, criou um método de peneira para encontrar números primos?",
    "resposta": "Eratóstenes",
    "distratores": [
      "Euclides",
      "Arquimedes",
      "Ptolomeu"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Crivo_de_Erat%C3%B3stenes",
      "https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Crivo_de_Erat%C3%B3stenes",
        "situacao": "ok",
        "texto": "O Crivo de Eratóstenes é um algoritmo e um método simples e prático para encontrar números primos até um certo valor limite. Segundo a tradição, foi criado pelo matemático grego Eratóstenes ((circa?) 275-194 a.C.), o terceiro bibliotecário-chefe da Biblioteca de Alexandria desde 247.\n[…]\nPara exemplificá-lo, vamos determinar a lista de números entre 1 e 30.\n[…]\nInicialmente, determina-se o maior número a ser verificado. Ele corresponde à raiz quadrada do valor limite, arredondado para baixo. No caso, a raiz de 30, arredondada para baixo, é 5.\n[…]\nCrie uma lista de todos os números inteiros de 2 até o valor limite, neste caso 30.\n[…]\nEncontre o primeiro número da lista. Ele é um número primo, 2.\n[…]\nRemova da lista todos os múltiplos de 2 (exceto ele próprio) até o valor limite. No nosso exemplo, a lista contem 2 e os números ímpares até 29.\n[…]\nO próximo número da lista após o primo anterior é primo. Repita o procedimento. No caso, o próximo número da lista é 3. Removendo seus múltiplos, a lista fica: 2, 3, 5, 7, 11, 13, 17, 19, 23, 25 e 29. O próximo número, 5, também é primo; a lista fica: 2, 3, 5, 7, 11, 13, 17, 19, 23 e 29. 5 é o último número a ser verificado, conforme determinado inicialmente. Assim, a lista encontrada contém somente números primos.\n[…]\nCrivo de Atkin"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes",
        "situacao": "ok",
        "texto": "In mathematics, the sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to any given limit.\n[…]\nThe sieve of Eratosthenes is a popular way to benchmark computer performance. The time complexity of calculating all primes below n in the random access machine model is O(n log log n) operations, a direct consequence of the fact that the prime harmonic series asymptotically approaches log log n. It has an exponential time complexity with regard to length of the input, though, which makes it a pseudo-polynomial algorithm. The basic algorithm requires O(n) of memory.\n[…]\nEuler's proof of the zeta product formula contains a version of the sieve of Eratosthenes in which each composite number is eliminated exactly once. The same sieve was rediscovered and observed to take linear time by Gries & Misra (1978). It, too, starts with a list of numbers from 2 to n in order. On each step the first element is identified as the next prime, is multiplied with each element of the list (thus starting with itself), and the results are marked in the list for subsequent deletion.\n[…]\nprimesieve – Very fast highly optimized C/C++ segmented Sieve of Eratosthenes\n[…]\nEratosthenes, sieve of at Encyclopaedia of Mathematics\n[…]\nSieve of Eratosthenes by George Beck, Wolfram Demonstrations Project.\n[…]\nSieve of Eratosthenes in Haskell\n[…]\nSieve of Eratosthenes algorithm illustrated and explained. Java and C++ implementations.\n[…]\nFast optimized highly parallel  CUDA segmented Sieve of Eratosthenes in C\n[…]\nThe Art of Prime Sieving Sieve of Eratosthenes in C from 1998 with nice features and algorithmic tricks explained."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Máquina analítica",
      "descricao": "Computador mecânico de uso geral projetado no século dezenove pelo inglês Charles Babbage, nunca concluído."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Ada Lovelace escreveu o que muitos consideram o primeiro programa de computador, para uma máquina projetada por que inventor inglês?",
    "resposta": "Charles Babbage",
    "fonte": [
      "https://en.wikipedia.org/wiki/Analytical_engine",
      "https://pt.wikipedia.org/wiki/Ada_Lovelace"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Analytical_engine",
        "situacao": "ok",
        "texto": "The analytical engine was a proposed digital mechanical general-purpose computer designed by the English mathematician and computer pioneer Charles Babbage. It was first described in 1837 as the successor to Babbage's difference engine, which was a design for a simpler mechanical calculator.\n[…]\nThe cyberpunk novelists William Gibson and Bruce Sterling co-authored a steampunk novel of alternative history titled The Difference Engine in which Babbage's difference and analytical engines became available to Victorian society. The novel explores the consequences and implications of the early introduction of computational technology.\n[…]\nMoriarty by Modem, a short story by Jack Nimersheim, describes an alternative history where Babbage's analytical engine was indeed completed and had been deemed highly classified by the British government. The characters of Sherlock Holmes and Moriarty had in reality been a set of prototype programs written for the analytical engine.\n[…]\nThis short story follows Holmes as his program is implemented on modern computers and he is forced to compete against his nemesis yet again in the modern counterparts of Babbage's analytical engine.\n[…]\nA similar setting to The Difference Engine is used by Sydney Padua in the webcomic The Thrilling Adventures of Lovelace and Babbage. It features an alternative history where Ada Lovelace and Babbage have built the analytical engine and use it to fight crime at Queen Victoria's request. The comic is based on thorough research on the biographies of and correspondence between Babbage and Lovelace, which is then twisted for humorous effect.\n[…]\nCharles Babbage and Ada Lovelace appear in an episode of Doctor Who, \"Spyfall Part 2\", where the engine is displayed and referenced.\n[…]\nPlan 28: Building Charles Babbage's Analytical Engine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ada_Lovelace",
        "situacao": "ok",
        "texto": "Augusta Ada Byron King, Condessa de Lovelace (nascida Byron, 10 de dezembro de 1815 — 27 de novembro de 1852), atualmente conhecida como Ada Lovelace, foi uma matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage.\n[…]\nDurante o período em que esteve envolvida com o projeto de Babbage, ela desenvolveu os algoritmos que permitiriam à máquina computar os valores de funções matemáticas, além de publicar uma coleção de notas sobre a máquina analítica. Por esse trabalho é considerada a primeira programadora de toda a história.\n[…]\nEssas notas contêm um algoritmo criado para ser processado por máquinas, o que muitos consideram ser o primeiro programa de computador. Ela também desenvolveu uma visão sobre a capacidade dos computadores de irem além do mero cálculo ou processamento de números, enquanto outros, incluindo o próprio Babbage, focavam apenas nessas capacidades.\n[…]\nEm 1842, Charles Babbage foi convidado a ministrar um seminário na Universidade de Turim sobre sua máquina analítica. Luigi Menabrea, um jovem engenheiro italiano e futuro Primeiro-ministro da Itália, publicou a palestra de Babbage em francês e esta transcrição foi posteriormente publicada na Bibliothèque Universelle de Genève, em 1842.\n[…]\nA Ada Initiative é uma organização sem fins lucrativos dedicada a aumentar o envolvimento das mulheres no Movimento pela cultura livre e em movimentos open source. Em 2009, na ocasião da celebração do primeiro Ada Lovelace Day, a artista plástica Sydney Padua criou a história em quadrinhos \"The Thrilling Adventures of Lovelace and Babbage\", que ao mesmo tempo que contava a história de Charles Babbage e da condessa Ada Lovelace, também apresenta uma leitura descontraída dos dois."
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Número e",
      "descricao": "Constante matemática aproximadamente igual a dois vírgula setenta e um, base dos logaritmos naturais, também chamada número de Euler."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que matemático do século dezoito passou a usar a letra e, hoje universal, para a constante que é a base dos logaritmos naturais?",
    "resposta": "Leonhard Euler",
    "distratores": [
      "Jacob Bernoulli",
      "John Napier",
      "Gottfried Leibniz"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/E_(mathematical_constant)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/E_(mathematical_constant)",
        "situacao": "ok",
        "texto": "The number e is a mathematical constant that is the base of the natural logarithm and exponential function. It is approximately equal to\n[…]\nThe constant is sometimes called Euler's number, after the Swiss mathematician Leonhard Euler, though this can invite confusion with other numbers named after Euler. Alternatively, e can be called Napier's constant after John Napier. The Swiss mathematician Jacob Bernoulli introduced the constant while studying compound interest.\n[…]\nThe first calculations entailing this constant were published in 1618 in the table of an appendix of a work on logarithms by John Napier. However, this did not contain the constant itself, but simply a list of natural logarithms (in the form of the original Napierian logarithms). \"[T]hat these were logarithms to base e was not recognised since the base to which logarithms are computed did not arise in the way that logarithms were thought about at this time.\n[…]\nLeonhard Euler started to use the letter e for the constant in 1727 or 1728, in an unpublished paper on explosive forces in cannons, and in a letter to Christian Goldbach on 25 November 1731. The first appearance of e in a printed publication was in Euler's Mechanica (1736). It is unknown why Euler chose the letter e. Although some researchers used the letter c in the subsequent years, the letter e was more common and eventually became standard.\n[…]\nconverges if and only if x ∈ [(1/e)e, e1/e] ≈ [0.06599, 1.4447] , shown by a theorem of Leonhard Euler.\n[…]\nUsing the natural logarithm gives entropy units in nats (as opposed, for example, to the use of the base-2 logarithm giving entropy in bits)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/E_%28constante_matem%C3%A1tica%29",
        "situacao": "ok",
        "texto": "O número e é uma constante matemática, aproximadamente igual a 2,71828, que é a base dos logaritmos naturais. Pode ser definido de diversas maneiras, como o limite de uma sequência, uma soma infinita, entre outras definições. O número e também é chamado de número de Euler, nomeado em homenagem ao matemático suíço Leonhard Euler, porém este nome pode levar a confusão com os números de Euler, ou a c\n[…]\nO número e é de grande importância na matemática, junto de 0, 1, π, e i. Todos os cinco aparecem numa formulação da identidade de Euler\n[…]\nOs primeiros registros de uso da letra e para a constante, por Leonhard Euler, são de 1727 ou 1728, em um artigo não publicado sobre forças explosivas em canhões, e em uma carta para Christian Goldbach em 25 de novembro de 1731. A primeira aparição de e em uma publicação impressa foi em Mechanica de Euler (1736). É desconhecido o motivo pelo qual Euler escolheu a letra e. Embora alguns pesquisadores tenham usado a letra c nos anos subsequentes, a letra e era a mais comum e tornou-se a padrão.\n[…]\nEuler provou que e é a soma da série infinita\n[…]\nSe a constante de proporcionalidade for negativa, então a quantidade diminui ao longo do tempo, e diz-se que está passando por um decaimento exponencial. A lei do crescimento exponencial pode ser expressa de formas diferentes, mas matematicamente equivalentes, usando uma base diferente, para a qual o número e é uma escolha comum e conveniente:\n[…]\nO número e é o único número real tal que\n[…]\nconverge se e somente se x ∈ [(1/e)e; e1/e] ≈ [0,06599; 1,4447] , o que foi mostrado por Leonhard Euler.\n[…]\nJá que esta série é convergente para todo valor complexo de x, é comumente utilizada para estender a definição de ex para os números complexos. Isto, junto com a série de Taylor para sen e cos x, permite que seja derivado a fórmula de Euler:\n[…]\nque vale para todo complexo x. O caso especial com x = π é a identidade de Euler:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Pi",
      "descricao": "Constante matemática igual à razão entre a circunferência e o diâmetro de um círculo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1882, provou-se que pi é um número transcendente. Isso mostrou ser impossível que antigo desafio grego feito só com régua e compasso?",
    "resposta": "Quadratura do círculo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Quadratura_do_c%C3%ADrculo",
      "https://en.wikipedia.org/wiki/Squaring_the_circle"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Quadratura_do_c%C3%ADrculo",
        "situacao": "ok",
        "texto": "A quadratura do círculo é um problema proposto pelos antigos geômetras gregos consistindo em construir um quadrado com a mesma área de um dado círculo servindo-se somente de uma régua não graduada e um compasso em um número finito de etapas.\n[…]\nA transcendência de π estabelece a impossibilidade de se resolver o problema da quadratura do círculo: é impossível construir, somente com uma régua não graduada e um compasso, um quadrado cuja área seja rigorosamente igual à área de um determinado círculo.\n[…]\nA solução (não-clássica) com sua espiral é descrita na seção Quadratura do círculo através da espiral de Arquimedes. No entanto, como no caso da quadratriz, nem a própria espiral nem a sua tangente são construtíveis com régua e compasso.\n[…]\nDado que não é possível uma solução exata com régua e compasso, existem construções de aproximação para a quadratura do círculo que são suficientemente exatas para muitos propósitos. Métodos simples, já conhecidos na antiguidade, indicam uma relação inteira entre o diâmetro ou o raio do círculo e o lado ou a diagonal do quadrado.\n[…]\ndo quadrado\n[…]\nSe a restrição à régua e ao compasso for relaxada e outros meios de construção forem permitidos, obtém-se uma infinidade de possibilidades para quadrar o círculo ou para construir o comprimento do lado do quadrado\n[…]\nMiklós Laczkovich publicou uma solução em 1990: Ele provou que é possível dividir um círculo num número finito de partes e deslocá-las apenas por meio de movimentos rígidos para formar um quadrado. Ele dividiu o círculo em 1050 pedaços. Para a prova, no entanto, ele necessita do Axioma da escolha, que, embora seja aceite pela maioria dos cientistas hoje em dia, não é por si só evidente. A prova assemelha-se fortemente ao Paradoxo de Banach-Tarski."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Squaring_the_circle",
        "situacao": "ok",
        "texto": "Squaring the circle is a problem in geometry first proposed in Greek mathematics. It is the challenge of constructing a square with the area of a given circle by using only a finite number of steps with a compass and straightedge. The difficulty of the problem raised the question of whether specified axioms of Euclidean geometry concerning the existence of lines and circles implied the existence o\n[…]\nA 1647 attempt at squaring the circle, Opus geometricum quadraturae circuli et sectionum coni decem libris comprehensum by Grégoire de Saint-Vincent, was heavily criticized by Vincent Léotaud. Nevertheless, de Saint-Vincent succeeded in his quadrature of the hyperbola, and in doing so was one of the earliest to develop the natural logarithm.\n[…]\nJames Gregory, following de Saint-Vincent, attempted another proof of the impossibility of squaring the circle in Vera Circuli et Hyperbolae Quadratura (The True Squaring of the Circle and of the Hyperbola) in 1667. Although his proof was faulty, it was the first paper to attempt to solve the problem using algebraic properties of π. Johann Heinrich Lambert proved in 1761 that π is an irrational number.\n[…]\nIt was not until 1882 that Ferdinand von Lindemann succeeded in proving more strongly that π is a transcendental number, and by doing so also proved the impossibility of squaring the circle with compass and straightedge.\n[…]\nBending the rules by introducing a supplemental tool, allowing an infinite number of compass-and-straightedge operations or by performing the operations in certain non-Euclidean geometries makes squaring the circle possible in some sense. For example, Dinostratus' theorem uses the quadratrix of Hippias to square the circle, meaning that if this curve is somehow already given, then a square and circle of equal areas can be constructed from it."
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Kurt Gödel",
      "descricao": "Lógico e matemático austríaco (1906–1978), autor dos teoremas da incompletude."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Nos últimos anos de vida, o lógico Kurt Gödel passou a recusar comida e acabou morrendo de fome. Por quê?",
    "resposta": "Medo de ser envenenado",
    "distratores": [
      "Protesto contra a guerra",
      "Jejum religioso",
      "Falta de dinheiro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kurt_G%C3%B6del"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kurt_G%C3%B6del",
        "situacao": "ok",
        "texto": "Kurt Friedrich Gödel ( GUR-dəl, GUH-dəl; German: [ˈkʊʁt ˈɡøːdl̩] ; April 28, 1906 – January 14, 1978) was a  logician, mathematician, cosmologist, and philosopher.\n[…]\nKurt Gödel, 2000. On Formally Undecidable Propositions Of Principia Mathematica And Related Systems, tr. Martin Hirzel\n[…]\nKurt Gödel, Philosophische Notizbücher / Philosophical Notebooks: De Gruyter: Berlin/München/Boston. Editor: Eva-Maria Engelen.\n[…]\nGödel–Löb logic\n[…]\nGödel's Loophole\n[…]\nDawson, John W (1997), Logical dilemmas: The life and work of Kurt Gödel, Wellesley, MA: AK Peters.\n[…]\nGoldstein, Rebecca (2005), Incompleteness: The Proof and Paradox of Kurt Gödel, New York: W.W. Norton & Co, ISBN 978-0-393-32760-1.\n[…]\nWang, Hao (1987), Reflections on Kurt Gödel, Cambridge: MIT Press, ISBN 0-262-73087-1\n[…]\nBrewer, William D. (2022). Kurt Gödel: The Genius of Metamathematics. Cham: Springer. ISBN 978-3-031-11308-6.\n[…]\nStephen Budiansky, 2021. Journey to the Edge of Reason: The Life of Kurt Gödel. W.W. Norton & Company.\n[…]\nOlga Taussky-Todd, 1983. Remembrances of Kurt Gödel. Engineering & Science, Winter 1988.\n[…]\nWeisstein, Eric Wolfgang (ed.). \"Gödel, Kurt (1906–1978)\". ScienceWorld.\n[…]\nKennedy, Juliette. \"Kurt Gödel\". In Zalta, Edward N. (ed.). Stanford Encyclopedia of Philosophy. ISSN 1095-5054. OCLC 429049174.\n[…]\nNotices of the AMS, April 2006, Volume 53, Number 4 Kurt Gödel Centenary Issue\n[…]\nPaul Davies and Freeman Dyson discuss Kurt Godel (transcript)\n[…]\n\"Gödel and the Nature of Mathematical Truth\" Edge: A Talk with Rebecca Goldstein on Kurt Gödel.\n[…]\nIt's Not All In The Numbers: Gregory Chaitin Explains Gödel's Mathematical Complexities.\n[…]\nGödel photo gallery. (archived)\n[…]\nKurt Gödel MacTutor History of Mathematics archive page"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kurt_G%C3%B6del",
        "situacao": "ok",
        "texto": "Kurt Friedrich Gödel (Brünn, 28 de abril de 1906 — Princeton, 14 de janeiro de 1978) foi um filósofo, matemático e lógico austríaco, naturalizado norte-americano.\n[…]\nEm 1946, Gödel tornou-se membro permanente do IAS e, em 1948, naturalizou-se cidadão estadunidense. Passou a ser professor pleno do instituto, em 1953, e professor emérito, em 1976. No início da década de 1970, Gödel distribuiu aos amigos um estudo desenvolvido a partir da prova ontológica da existência de Deus, de  Leibniz, o qual acabou sendo conhecido como \"prova ontológica de Gödel\".\n[…]\nKurt Gödel recebeu muitos prêmios e honrarias durante sua vida e também o primeiro Prêmio Albert Einstein, em 1951. Em 1974 recebeu a Medalha Nacional de Ciência.\n[…]\nCom o passar dos anos, porém, Gödel  tornou-se cada vez mais esquivo ao contato com outras pessoas, à exceção de um pequeno círculo de amigos. Tal comportamento está provavelmente relacionado ao quadro paranoico que desenvolveu: acreditava haver uma conspiração para matá-lo por envenenamento. Só comia o que lhe fosse preparado por Adele, sua esposa, a qual o ajudava a controlar seus delírios persecutórios e a se manter vivo.\n[…]\nDurante os últimos anos de sua vida, o cientista esteve por diversas vezes internado em hospitais psiquiátricos. Quando Adele adoeceu e foi internada por seis meses, Gödel praticamente parou de se alimentar. Acabou morrendo, por complicações decorrentes da inanição, em Princeton, no dia 14 de janeiro de 1978. Gödel pesava apenas 29 kg na época de sua morte. Ele foi sepultado no Cemitério de Princeton.\n[…]\nTeorema da completude de Gödel\n[…]\nKurt Gödel (em inglês) no Mathematics Genealogy Project",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Sophie Germain",
      "descricao": "Matemática francesa dos séculos dezoito e dezenove, conhecida por trabalhos em teoria dos números e elasticidade."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Sophie Germain conseguia as apostilas da Escola Politécnica de Paris usando o nome de um ex-aluno. Por que ela não podia estudar lá?",
    "resposta": "A escola não aceitava mulheres",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sophie_Germain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sophie_Germain",
        "situacao": "ok",
        "texto": "Marie-Sophie Germain (French: [maʁi sɔfi ʒɛʁmɛ̃]; 1 April 1776 – 27 June 1831) was a French mathematician, physicist, and philosopher. Despite initial opposition from her parents and difficulties presented by society, she gained education from books in her father's library, including ones by Euler, and from correspondence under the pseudonym of Monsieur Le Blanc with famous mathematicians, such as\n[…]\nMarie-Sophie Germain was born in a house on Rue Saint-Denis on 1 April 1776, in Paris, France, to Marie-Madeline (née Gruguelin) and Ambroise-François Germain and was baptised the same day. She was from a bourgeois family. According to most sources, her father was a wealthy silk merchant, though some believe he was a goldsmith. In 1789, he was elected as a representative of the bourgeoisie to the États-Généraux, which he saw change into the National Assembly.\n[…]\nThe Sophie Germain Prize (French: Prix Sophie Germain), awarded annually by the Foundation Sophie Germain, is conferred by the Academy of Sciences in Paris. Its purpose is to honour a French mathematician for research in the foundations of mathematics. This award, in the amount of €8,000, was established in 2003, under the auspices of the Institut de France.\n[…]\nSophie Germain's theorem\n[…]\nMusielak, Dora (2020). Sophie Germain: Revolutionary Mathematician (2nd ed.). Cham: Springer Biographies. ISBN 978-3-030-38374-9.\n[…]\nStupuy, Hippolyte, ed. (1896). Œuvres philosophiques de Sophie Germain [Philosophical Works of Sophie Germain] (in French) (2nd ed.). Paris: Firmin-Didot.\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Sophie Germain\", MacTutor History of Mathematics Archive, University of St Andrews\n[…]\nSophie Germain at the Mathematics Genealogy Project\n[…]\nWorks by Sophie Germain at Project Gutenberg\n[…]\nSheroes of History; Sophie Germain\n[…]\nSophie Germain in the illustrated story Archived 6 June 2021 at the Wayback Machine at the Kids Love Science project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sophie_Germain",
        "situacao": "ok",
        "texto": "Marie-Sophie Germain (Paris, 1 de abril de 1776 – Paris, 27 de junho de 1831) foi uma matemática, física e filósofa francesa. Ela era autodidata, e apesar da oposição inicial de seus pais e das dificuldades impostas pela sociedade, adquiriu sua formação por meio dos livros da biblioteca de seu pai, incluindo obras de Euler, e através de correspondência com matemáticos renomados, como Lagrange, Leg\n[…]\nEm 27 de junho de 1831, ela morreu de câncer de mama. Em seu centenário, uma rua e uma escola feminina foram nomeadas em sua homenagem. A Academia de Ciências em Paris anualmente presenteia o prêmio Prêmio Sophie Germain na área de matemática.\n[…]\nEm 1794, quando Sophie tinha 18 anos, foi inaugurada a a Escola Politécnica de Paris, uma academia de excelência para a formação de matemáticos e cientistas de toda a nação, reservada exclusivamente para homens. Como mulher, Sophie não podia frequentar a instituição, mas o novo sistema educacional tornava as anotações das aulas disponíveis a todos que as solicitassem. Esse sistema também exigia que os alunos entregassem observações escritas sobre o conteúdo estudado.\n[…]\nEla então conseguiu obter essas anotações e começou a enviar seus próprios trabalhos a Joseph Louis Lagrange, que era membro do corpo docente. Para isso, usou o nome de um ex-aluno, Monsieur Antoine-Auguste Le Blanc. Quando Lagrange percebeu a inteligência do tal M. Le Blanc, pediu para conhecê-lo pessoalmente, e assim Sophie teve de revelar sua verdadeira identidade. Felizmente, Lagrange não se incomodou com o fato de ela ser mulher e acabou se tornando seu mentor e amigo.\n[…]\nDevido às barreiras impostas às mulheres na época, Sophie enfrentou restrições institucionais, não podendo frequentar a École Polytechnique. Mesmo assim, ela estudou clandestinamente as aulas, desenvolvendo métodos próprios de aprendizado e mantendo extensa correspondência científica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Fórmula de Bhaskara",
      "descricao": "Nome dado no Brasil à fórmula que resolve equações do segundo grau."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na fórmula de Bhaskara, que letra grega costuma representar o discriminante, b ao quadrado menos quatro a c?",
    "resposta": "Delta",
    "distratores": [
      "Alfa",
      "Sigma",
      "Ômega"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/F%C3%B3rmula_de_Bhaskara",
      "https://pt.wikipedia.org/wiki/Equa%C3%A7%C3%A3o_quadr%C3%A1tica"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/F%C3%B3rmula_de_Bhaskara",
        "situacao": "ok",
        "texto": "Em álgebra, a fórmula quadrática, também conhecida como fórmula de Bhaskara no Brasil, é uma fórmula que fornece a solução de uma equação do 2º grau (ou equação quadrática). Existem outras formas de resolver uma equação quadrática, como fatoração, completamento de quadrados, pelo gráfico da função e outras.\n[…]\n), a fórmula quadrática é:\n[…]\nUma fórmula quadrática menos conhecida, que é utilizada no Método de Muller e que pode ser encontrada pelas Fórmulas de Viète, fornece (assumindo\n[…]\nEssa derivação da fórmula quadrática é extremamente antiga e era conhecida na Índia pelo menos desde 1025. Comparada à derivação em uso padrão, essa derivação alternativa evita frações até o último passo e portanto não requer uma reorganização após o terceiro passo para obter um denominador comum no lado direito.\n[…]\nO matemático indiano Brahmagupta (597–668) descreveu explicitamente a fórmula quadrática em seu tratado Brāhmasphuṭasiddhānta, publicado em 628 d.C., mas escrito em palavras em vez de símbolos.\n[…]\nSua solução da equação quadrática ax2 + bx = c foi a seguinte: \"Ao número absoluto multiplicado por quatro vezes o [coeficiente do] quadrado, adicione o quadrado do [coeficiente do] termo médio; a raiz quadrada do mesmo, menos o [coeficiente do] termo médio, sendo dividido por duas vezes o [coeficiente do] quadrado é o valor.\" Isso é equivalente a:\n[…]\nO autor do método empregado por Bhaskara Akaria, para resolução das equações quadráticas, foi provavelmente o matemático indiano Sridhara [en] (870-930 d.C.), que apresentou um algoritmo  para resolver equações quadráticas, embora não haja indicação de que ele tenha considerado ambas as raízes. A fórmula, por vezes chamada \"fórmula de Bhaskara\", veio com um matemático francês, François Viète (1540-1603), que deu à fórmula geral, um tratamento  algébrico mais formal."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Equa%C3%A7%C3%A3o_quadr%C3%A1tica",
        "situacao": "ok",
        "texto": "Em matemática, uma equação quadrática ou equação do segundo grau é uma equação polinomial de grau dois. A forma geral deste tipo de equação é: y := f(x) =\n[…]\nA variável x representa um valor a ser determinado, e também é chamada de incógnita. O termo \"quadrático\" vem de quadratus, que em latim significa quadrado. Equações quadráticas podem ser resolvidas por meio da fatoração, do completamento de quadrados, do uso de gráficos, da aplicação do método de Newton ou do uso de uma fórmula. Um uso frequente das equações do segundo grau é em modelos simples de cálculo das trajetórias de projéteis em movimento.\n[…]\nNa fórmula acima, a expressão que aparece sob a raiz quadrada é chamada de discriminante da equação quadrática, e é comumente denotada pela letra grega delta maiúsculo:\n[…]\n{\\displaystyle \\Delta <0:}\n[…]\nEstas fórmulas são mais fáceis de avaliar do que a Fórmula de Bhaskara sob a condição de que uma raiz é grande e uma pequena, porque a fórmula de resolução de equações quadráticas avalia a raiz menor como a diferença entre dois números praticamente iguais (no caso em que b é grande), o que causa erros de arredondamento em avaliações numéricas.\n[…]\nA figura ao lado mostra a diferença entre (i) um calculo direto usando a fórmula de Bhaskara (preciso quando as raízes têm valores próximos) e (ii) uma avaliação baseada na aproximação das fórmulas de Viète dadas acima (precisa quando as raízes estão bem separadas). Conforme o coeficiente linear b aumenta, inicialmente a fórmula quadrática é precisa, e a fórmula aproximada melhora sua precisão, levando a pequenas diferenças entre os métodos ao aumentar b.\n[…]\n{\\displaystyle \\Delta >0}"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Principia Mathematica",
      "descricao": "Obra em três volumes de Bertrand Russell e Alfred North Whitehead, publicada entre 1910 e 1913, que tentou fundamentar a matemática na lógica."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Principia Mathematica, de Bertrand Russell e Alfred Whitehead, que igualdade elementar da aritmética só fica demonstrada depois de centenas de páginas?",
    "resposta": "Um mais um igual a dois",
    "fonte": [
      "https://en.wikipedia.org/wiki/Principia_Mathematica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Principia_Mathematica",
        "situacao": "ok",
        "texto": "The Principia Mathematica (often abbreviated PM) is a three-volume work on the foundations of mathematics written by the mathematician–philosophers Alfred North Whitehead and Bertrand Russell and published in 1910, 1912, and 1913. In 1925–1927, it appeared in a second edition with an important Introduction to the Second Edition, an Appendix A (that replaced ✱9), and with an additional new Appendix\n[…]\nbecause Russell is not Greek. And it fails for\n[…]\nAccording to Carnap's \"Logicist Foundations of Mathematics\", Russell wanted a theory that could plausibly be said to derive all of mathematics from purely logical axioms. However, Principia Mathematica required, in addition to the basic axioms of type theory, three further axioms that seemed to not be true as mere matters of logic, namely the axiom of infinity, the axiom of choice, and the axiom of reducibility.\n[…]\nPropositional logic itself was known to be consistent, but the same had not been established for Principia's axioms of set theory. (See Hilbert's second problem.) Russell and Whitehead suspected that the system in PM is incomplete: for example, they pointed out that it does not seem powerful enough to show that the cardinal ℵω exists. However, one can ask if some recursively axiomatizable extension of it is complete and consistent.\n[…]\nIntroduction to Mathematical Philosophy\n[…]\nGödel, Kurt (1944). \"Russell's Mathematical Logic\". In Schilpp, Paul Arthur (ed.). The Philosophy of Bertrand Russell. The Library of Living Philosophers. Vol. 5 (1st ed.). Chicago: Northwestern University Press. pp. 123–153. LCCN 44006786. OCLC 2007378. OL 6467049M.\n[…]\nWhitehead, Alfred North; Russell, Bertrand (1910). Principia Mathematica. Vol. 1 (1st ed.). Cambridge: Cambridge University Press. hdl:2027/miun.aat3201.0001.001. JFM 41.0083.02. LCCN a11002789.\n[…]\nPrincipia Mathematica – by A. D. Irvine\n[…]\nThe Notation in Principia Mathematica – by Bernard Linsky."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Principia_Mathematica",
        "situacao": "ok",
        "texto": "O Principia Mathematica (tradução livre do latim: Princípios Matemáticos) é uma obra de três volumes sobre fundamentos da matemática, escrita por Alfred North Whitehead e seu aluno Bertrand Russell e publicada nos anos de 1910, 1912 e 1913. Em 1927, foram acrescentados uma Introdução à Segunda Edição, um Apêndice A (que substituiu o ✸9) e um novo Apêndice C.\n[…]\nA edição que vai até o item 56, publicada em primeira edição, pela mesma editora, em 1910 e, em segunda edição, em 1927, com dezenas de tiragens, consiste num extrato da parte mais textual e inicial do compêndio, com vistas a uma divulgação científica intermediária entre a obra completa e a Introdução à Filosofia da Matemática, de Russell.\n[…]\nEntretanto, este não é o mais pleno senso de completude desejado pelo Principia, já que um dado sistema de axiomas (como os do Principia) pode ter mais de um modelo, em algum dos quais uma afirmação pode ser verdadeira e, no outro modelo, falsa, de modo que a afirmação é tida como não decidida por axiomas.\n[…]\nEsta nova proposta resultou em um terrível resultado, a ideia de que uma lista infinita não pode ser especificada significa que o conceito de \"número\" no sentido infinito (ou seja, a hipótese do continuum) não pode ser descrita pela teoria proposta na segunda edição do Principia. Wittgenstein, no seu \"Lectures on the Foundations of Mathematics, Cambridge, 1939\", criticou o Principia em vários níveis, como estes dois raciocínios seguintes. Em primeiro, pretende-se revelar as bases da aritmética.\n[…]\nWhitehead, Alfred North & Russell, Bertrand: Principia Mathematica. 3 vols, Merchant Books, 2001, ISBN 978-1603861823 (vol. 1), ISBN 978-1603861830 (vol. 2), ISBN 978-1603861847 (vol. 3)\n[…]\nWhitehead, Alfred North; Russell, Bertrand (1980). Principia Mathematica to ✸56 (em inglês). Cambridge: Cambridge University Press. ISBN 0 521 09187 X",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Tangram",
      "descricao": "Quebra-cabeça geométrico de origem chinesa, formado por sete peças que se combinam para montar figuras."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O tangram, quebra-cabeça chinês de sete peças, tem cinco triângulos. Que formas têm as outras duas peças?",
    "resposta": "Um quadrado e um paralelogramo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tangram",
      "https://en.wikipedia.org/wiki/Tangram"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tangram",
        "situacao": "ok",
        "texto": "O Tangram (chinês: 七巧板; pinyin: qīqiǎobǎn; lit. \"sete peças de habilidade\") é um quebra-cabeças geométrico chinês formado por 7 peças, chamadas tans: são 2 triângulos grandes, 2 pequenos, 1 médio, 1 quadrado e 1 paralelogramo. Utilizando todas essas peças sem sobrepô-las, podemos formar várias figuras. Segundo a Enciclopédia do Tangram é possível montar mais de 5000 figuras.\n[…]\nNão se sabe ao certo como surgiu o Tangram, mas acredita-se ter sido inventado na China durante a Dinastia Song e levado para Europa por navios mercantes no início do século XIX, onde se tornou muito popular. Há várias lendas sobre a sua origem e o seu renascimento no mundo dos mortos. Uma diz que uma pedra preciosa  se desfez em sete pedaços, e com eles era possível formar várias formas.\n[…]\nOutra diz que um imperador deixou um espelho quadrado cair, e este se desfez em 7 pedaços que poderiam ser usados para formar várias figuras,de diversas formas. Segundo algumas, o nome Tangram vem da palavra inglesa \"tangam\", de significado \"misturas\" ou \"desconhecidos\". Outros dizem que a palavra vem da dinastia chinesa Tang, ou até do barco cantonês \"bundumocu\", onde mulheres entretinham os marinheiros americanos. Na Ásia o jogo é chamado de \"300 placas\".\n[…]\nEsse quebra-cabeças, também conhecido como jogo das 1000 peças, é utilizado pelos professores de geometria como instrumento facilitador da compreensão das formas geométricas. Além de facilitar o estudo da geometria, ele desenvolve a criatividade e o raciocínio lógico, que também são fundamentais para o estudo da matemática e da ciência.\n[…]\nTangram\n[…]\nA Origem do Tangram\n[…]\nThe Tangram\n[…]\n«Peces». Programa gratuito com 40 tangram e mais de 31.000 figuras ."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tangram",
        "situacao": "ok",
        "texto": "The tangram (Chinese: 七巧板; pinyin: qīqiǎobǎn; lit. 'seven boards of skill') is a dissection puzzle consisting of seven flat polygons, called tans, which are put together to form shapes. The objective is to replicate a pattern (given only an outline) generally found in a puzzle book using all seven pieces without overlap.\n[…]\nThe prominent third-century mathematician Liu Hui made use of construction proofs in his works and some bear a striking resemblance to the subsequently developed banquet tables which in turn seem to anticipate the tangram. While there is no reason to suspect that tangrams were used in the proof of the Pythagorean theorem, as is sometimes reported, it is likely that this style of geometric reasoning went on to exert an influence on Chinese cultural life that led directly to the puzzle.\n[…]\nThe puzzle eventually reached England, where it became very fashionable. The craze quickly spread to other European countries. This was mostly due to a pair of British tangram books, The Fashionable Chinese Puzzle, and the accompanying solution book, Key. Soon, tangram sets were being exported in great number from China, made of various materials, from glass, to wood, to tortoise shell.\n[…]\nMany of these unusual and exquisite tangram sets made their way to Denmark. Danish interest in tangrams skyrocketed around 1818, when two books on the puzzle were published, to much enthusiasm. The first of these was Mandarinen (About the Chinese Game). This was written by a student at Copenhagen University, which was a non-fictional work about the history and popularity of tangrams.\n[…]\nGardner, Martin. \"More on Tangrams\", Scientific American Sep. 1974, p. 187–191.\n[…]\nPast & Future: The Roots of Tangram and Its Developments\n[…]\nTurning Your Set of Tangram Into A Magic Math Puzzle by puzzle designer G. Sarcone"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Euclides",
      "descricao": "Matemático grego que viveu em Alexandria por volta de 300 a.C., autor de Os Elementos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O algoritmo de Euclides, descrito em Os Elementos e um dos mais antigos ainda em uso, serve para calcular o quê?",
    "resposta": "Máximo divisor comum",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Algoritmo_de_Euclides",
      "https://en.wikipedia.org/wiki/Euclidean_algorithm"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Algoritmo_de_Euclides",
        "situacao": "ok",
        "texto": "Na matemática, o algoritmo de Euclides, é um método eficiente para computar o máximo divisor comum (MDC) de dois inteiros, o maior número que divide ambos sem deixar resto. Recebeu o nome do antigo matemático grego Euclides, que o descreveu pela primeira vez nos seus Elementos (c. 300 a.C.). É um exemplo de um algoritmo, e é um dos algoritmos mais antigos em uso comum.\n[…]\nO algoritmo de Euclides calcula o máximo divisor comum (MDC) de dois números naturais a e b. O máximo divisor comum g é o maior número natural que divide tanto a quanto b sem deixar resto. Sinônimos para MDC incluem maior fator comum, maior divisor comum e maior medida comum.\n[…]\nCalcular um máximo divisor comum é um passo essencial em vários algoritmos de fatoração de inteiros, tais como o algoritmo rho de Pollard, o algoritmo de Shor, o método de fatoração de Dixon e a fatoração de curva elíptica de Lenstra. O algoritmo de Euclides pode ser usado para encontrar este MDC de forma eficiente. A fatoração com frações contínuas utiliza frações contínuas, as quais são determinadas com recurso ao algoritmo de Euclides.\n[…]\nUma vez que a primeira média pode ser calculada a partir da média tau somando sobre os divisores d de a\n[…]\nEmbora o algoritmo de Euclides seja usado para encontrar o máximo divisor comum de dois números naturais (inteiros positivos), ele pode ser generalizado para os números reais e para outros objetos matemáticos, tais como polinômios, inteiros quadráticos e quatérnios de Hurwitz.\n[…]\nPor outras palavras, pode existir um máximo divisor comum (para todos os pares de elementos num domínio), embora possa não ser possível encontrá-lo usando um algoritmo de Euclides. Um domínio euclidiano é sempre um domínio de ideais principais (DIP), um domínio de integridade no qual todo ideal é um ideal principal. Novamente, o inverso não é verdadeiro: nem todo DIP é um domínio euclidiano."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Euclidean_algorithm",
        "situacao": "ok",
        "texto": "In mathematics, the Euclidean algorithm, or Euclid's algorithm, is an efficient method for computing the greatest common divisor (GCD) of two integers, the largest number that divides them both without a remainder. It is named after the ancient Greek mathematician Euclid, who first described it in his Elements (c. 300 BC).\n[…]\nAlthough the Euclidean algorithm is used to find the greatest common divisor of two natural numbers (positive integers), it may be generalized to the real numbers, and to other mathematical objects, such as polynomials, quadratic integers and Hurwitz quaternions. In the latter cases, the Euclidean algorithm is used to demonstrate the crucial property of unique factorization, i.e., that such numbers can be factored uniquely into irreducible elements, the counterparts of prime numbers.\n[…]\nIn other words, a greatest common divisor may exist (for all pairs of elements in a domain), although it may not be possible to find it using a Euclidean algorithm. A Euclidean domain is always a principal ideal domain (PID), an integral domain in which every ideal is a principal ideal. Again, the converse is not true: not every PID is a Euclidean domain.\n[…]\nThe Euclidean algorithm may be applied to some noncommutative rings such as the set of Hurwitz quaternions. Let α and β represent two elements from such a ring. They have a common right divisor δ if α = ξδ and β = ηδ for some choice of ξ and η in the ring. Similarly, they have a common left divisor if α = dξ and β = dη for some choice of ξ and η in the ring.\n[…]\nSince multiplication is not commutative, there are two versions of the Euclidean algorithm, one for right divisors and one for left divisors. Choosing the right divisors, the first step in finding the gcd(α, β) by the Euclidean algorithm can be written\n[…]\nThe Euclidean Algorithm at MathPages"
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
