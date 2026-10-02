// Modo Trilha da Vida (manifesto/modo_trilha_da_vida.md): dados, mapa no estilo Slay the Spire e regras.
// Só lógica e desenho: a ligação com a tela e o Firestore fica no index.html.

// ---------------------------------------------------------------- dados

const TEMAS = ["Geografia", "História", "Natureza", "Ciências", "Artes e Pensamento", "Entretenimento", "Esportes", "Cotidiano"];
export const TEMAS_LISTA = TEMAS;

// Profissões: todas as combinações de 2 temas (28).
const NOMES_PROFISSOES = {
  "Geografia+História": "Diplomata", "Geografia+Natureza": "Explorador", "Geografia+Ciências": "Meteorologista",
  "Geografia+Artes e Pensamento": "Arquiteto", "Geografia+Entretenimento": "Blogueiro de viagens",
  "Geografia+Esportes": "Alpinista", "Geografia+Cotidiano": "Guia de turismo",
  "História+Natureza": "Paleontólogo", "História+Ciências": "Arqueólogo", "História+Artes e Pensamento": "Curador de museu",
  "História+Entretenimento": "Roteirista", "História+Esportes": "Cronista esportivo", "História+Cotidiano": "Antropólogo",
  "Natureza+Ciências": "Biólogo", "Natureza+Artes e Pensamento": "Paisagista", "Natureza+Entretenimento": "Documentarista",
  "Natureza+Esportes": "Instrutor de mergulho", "Natureza+Cotidiano": "Agrônomo",
  "Ciências+Artes e Pensamento": "Inventor", "Ciências+Entretenimento": "Desenvolvedor de games",
  "Ciências+Esportes": "Médico do esporte", "Ciências+Cotidiano": "Engenheiro",
  "Artes e Pensamento+Entretenimento": "Ator", "Artes e Pensamento+Esportes": "Ginasta",
  "Artes e Pensamento+Cotidiano": "Escritor", "Entretenimento+Esportes": "Locutor esportivo",
  "Entretenimento+Cotidiano": "Publicitário", "Esportes+Cotidiano": "Personal trainer",
};
export const PROFISSOES = Object.entries(NOMES_PROFISSOES).map(([chave, nome]) => ({ nome, temas: chave.split("+") }));

// Personalidades. "auto": o app aplica sozinho; as outras o grupo aplica de viva voz.
export const PERSONALIDADES = {
  metodico:     { nome: "Metódico", efeito: "Uma vez por fase, se errar, responde outra pergunta do mesmo tema." },
  curioso:      { nome: "Curioso", efeito: "Vê o tema da próxima casa antes de decidir usar uma carta." },
  aventureiro:  { nome: "Aventureiro", efeito: "Nas encruzilhadas, pega um caminho sem o custo dele." },
  criativo:     { nome: "Criativo", efeito: "Na Casa em Branco, compra 2 cartas e fica com 1.", auto: true },
  competitivo:  { nome: "Competitivo", efeito: "Acerto numa casa \"Vá trabalhar\" anda 1 casa a mais.", auto: true },
  observador:   { nome: "Observador", efeito: "Pergunta com figura certa anda 2 casas.", auto: true },
  colecionador: { nome: "Colecionador", efeito: "Guarda uma carta a mais na mão (4).", auto: true },
  persistente:  { nome: "Persistente", efeito: "Uma vez por fase, se errar, anda 1 casa mesmo assim." },
};

// Baralho de casas de Ação: cada uma com 2 ou 3 subtemas, cobrindo os 73; mais "Tire férias", sem pergunta.
export const ACOES = [
  ["🎬", "Vá ao cinema", ["Cinema", "Séries e TV"]],
  ["🎤", "Vá a um show", ["Música Brasileira", "Música Internacional"]],
  ["🎭", "Vá ao teatro", ["Teatro e Ópera", "Música Clássica"]],
  ["🖼️", "Visite um museu de arte", ["Pintura", "Escultura e Arquitetura"]],
  ["📚", "Leia um livro", ["Literatura Brasileira", "Literatura Mundial", "Língua Portuguesa e Expressões"]],
  ["🎮", "Noite de jogos", ["Jogos Eletrônicos", "Jogos de Tabuleiro e Cartas"]],
  ["📰", "Passe na banca de gibis", ["Anime e Mangá", "Quadrinhos"]],
  ["🏟️", "Vá ao estádio", ["Futebol", "Vôlei", "Basquete"]],
  ["📺", "Domingo de esportes na TV", ["Tênis", "Automobilismo", "Outras Modalidades"]],
  ["🏅", "Assista às Olimpíadas", ["Olimpíadas", "Lutas e Artes Marciais"]],
  ["🩺", "Vá ao médico", ["Corpo Humano e Medicina", "Biologia e Genética"]],
  ["🔭", "Olhe as estrelas", ["Astronomia e Espaço", "Física"]],
  ["📐", "Ajude na lição de casa", ["Matemática", "Química"]],
  ["💻", "Visite uma feira de tecnologia", ["Tecnologia e Computação", "Invenções e História da Ciência"]],
  ["🌳", "Plante uma árvore", ["Plantas e Fungos", "Meio Ambiente e Energia"]],
  ["🦁", "Vá ao zoológico", ["Mamíferos", "Aves, Répteis e Anfíbios"]],
  ["🐠", "Visite o aquário", ["Vida Marinha", "Oceanos, Mares e Ilhas"]],
  ["⛺", "Acampe na mata", ["Insetos e Invertebrados", "Ecossistemas e Ambientes Extremos"]],
  ["🦕", "Visite o museu de história natural", ["Dinossauros e Fósseis", "Evolução Humana", "Geologia e História da Terra"]],
  ["✈️", "Viaje para o exterior", ["Países e Capitais", "Cidades e Monumentos", "Bandeiras e Símbolos"]],
  ["🧭", "Faça uma expedição", ["Relevo e Maravilhas Naturais", "Rios e Lagos", "Clima e Biomas"]],
  ["🚗", "Pegue a estrada pelo Brasil", ["Geografia do Brasil", "Transportes"]],
  ["🌍", "Faça intercâmbio", ["Povos e Idiomas", "Costumes pelo Mundo"]],
  ["🛍️", "Vá ao shopping", ["Marcas e Produtos", "Moda e Vestuário", "Objetos do Dia a Dia"]],
  ["🎉", "Vá à festa junina", ["Folclore e Tradições Brasileiras", "Culinária e Bebidas"]],
  ["🗿", "Visite ruínas antigas", ["Pré-História e Idade do Bronze", "Egito Antigo", "Américas Pré-Colombianas"]],
  ["🏺", "Viaje à Grécia e a Roma", ["Grécia Antiga", "Roma Antiga", "Mitologia"]],
  ["🏰", "Visite um castelo", ["Idade Média", "Idade Moderna"]],
  ["🎞️", "Assista a um documentário histórico", ["Primeira Guerra Mundial", "Segunda Guerra Mundial", "Idade Contemporânea"]],
  ["📜", "Visite um museu de história", ["História do Brasil", "História da África", "Antigas Civilizações do Oriente"]],
  ["💭", "Participe de um debate", ["Filosofia", "Religiões"]],
].map(([icone, nome, subtemas]) => ({ icone, nome, subtemas }));
export const FERIAS = { icone: "⛱️", nome: "Tire férias", ferias: true };

// Cartas. Uma carta na mão é um objeto pequeno, gravado no Firestore: {t} ou {t: "tema", tema}.
export const CARTAS = {
  tema_livre: { icone: "🎯", nome: "Escolha o tema", efeito: "A sua próxima pergunta é do tema que você escolher.", cor: "#7c9cf5" },
  tema:       { icone: "🏷️", nome: "Tema", efeito: "A sua próxima pergunta é deste tema.", cor: "#87CEEB" },
  desafio:    { icone: "🤝", nome: "Desafio", efeito: "Mande uma pergunta a um oponente (menos o líder). Se ele acertar, os dois ganham um avanço.", cor: "#4cc485" },
  multipla:   { icone: "🔤", nome: "Múltipla escolha", efeito: "A sua próxima pergunta é de múltipla escolha.", cor: "#f0b429" },
  figura:     { icone: "🖼️", nome: "Figura", efeito: "A sua próxima pergunta é com figura.", cor: "#c9a7ff" },
};
export const nomeCarta = c => c.t === "tema" ? `Tema: ${c.tema}` : CARTAS[c.t].nome;
export const efeitoCarta = c => c.t === "tema" ? `A sua próxima pergunta é de ${c.tema}.` : CARTAS[c.t].efeito;

export function sortearCarta(rnd = Math.random) {
  const x = rnd();
  if (x < .40) return { t: "tema", tema: TEMAS[Math.floor(rnd() * TEMAS.length)] };
  if (x < .55) return { t: "tema_livre" };
  if (x < .70) return { t: "desafio" };
  if (x < .85) return { t: "multipla" };
  return { t: "figura" };
}

// Destino: eventos aplicados pelo app quando o peão chega numa casa 🔮.
export const DESTINOS = [
  { texto: "Herança de um tio distante: compre 2 cartas.", cartas: 2 },
  { texto: "Promoção: você ganha 1 avanço livre.", extra: 1 },
  { texto: "Imprevisto: descarte uma carta ao acaso.", perde: 1 },
  { texto: "Um mentor aparece: ganhe a carta Escolha o tema.", carta: { t: "tema_livre" } },
  { texto: "Viagem de estudos: ganhe a carta Figura.", carta: { t: "figura" } },
  { texto: "Ano sabático: na próxima vez que acertar, anda 2 casas a mais.", ferias: true },
];

export const limiteMao = j => j.trilha?.personalidade === "colecionador" ? 4 : 3;

// ---------------------------------------------------------------- mapa

const LINHAS = 21;          // linha 0 = início, linha 20 = chegada
const COLUNAS = 7;
const CAMINHOS = 6;
export const FASES = [[0, "JUVENTUDE"], [5, "VIDA ADULTA"], [11, "MATURIDADE"], [16, "APOSENTADORIA"]];

function gerador(semente) {
  let s = (Math.abs(Math.floor(semente)) % 2147483646) + 1;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

// O mapa sai inteiro da semente da partida: todos os aparelhos geram o mesmo. Como no Slay the Spire, é feito de
// caminhos aleatórios de baixo para cima, sem ligações cruzadas, dentro de um contorno de losango. Toda ligação
// sobe exatamente uma linha, então qualquer rota tem o mesmo comprimento; a cada 4 linhas, todos os nós são
// "Vá trabalhar", para qualquer rota ter a mesma proporção de perguntas da profissão.
export function gerarMapa(semente) {
  const rnd = gerador(semente);
  const escolha = a => a[Math.floor(rnd() * a.length)];
  const centro = (COLUNAS - 1) / 2;
  const meia = r => Math.round(centro * Math.sin(Math.PI * r / (LINHAS - 1)) ** .7);
  const ligacoes = [];
  const ids = new Set([`0:${centro}`]);
  const cruza = (r, a, b) => ligacoes.some(([u, v]) => {
    const [ru, x] = u.split(":").map(Number), y = +v.split(":")[1];
    return ru === r && ((x < a && y > b) || (x > a && y < b));
  });
  for (let k = 0; k < CAMINHOS; k++) {
    let c = centro;
    for (let r = 0; r < LINHAS - 1; r++) {
      const opcoes = [c - 1, c, c + 1].filter(n => n >= 0 && n < COLUNAS && Math.abs(n - centro) <= meia(r + 1) && !cruza(r, c, n));
      const lado = k % 2 ? 1 : -1;
      const preferidas = r < 5 ? opcoes.filter(n => Math.sign(n - c) === lado) : opcoes;
      const n = opcoes.length ? escolha(preferidas.length ? preferidas : opcoes) : centro;
      const u = `${r}:${c}`, v = `${r + 1}:${n}`;
      if (!ligacoes.some(([a, b]) => a === u && b === v)) ligacoes.push([u, v]);
      ids.add(v);
      c = n;
    }
  }

  // Tipos: W "Vá trabalhar", A Ação, M tema amplo, B em Branco, D Destino. Nada de Destino logo depois de Destino.
  const baralho = [...ACOES, FERIAS].map(a => [rnd(), a]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
  let proxima = 0;
  const nos = new Map();
  const ordenados = [...ids].sort((a, b) => a.split(":")[0] - b.split(":")[0] || a.split(":")[1] - b.split(":")[1]);
  for (const id of ordenados) {
    const [r, c] = id.split(":").map(Number);
    const no = { id, r, c };
    if (r === 0) no.tipo = "inicio";
    else if (r === LINHAS - 1) no.tipo = "chegada";
    else if (r % 4 === 0) no.tipo = "W";
    else {
      const pais = ligacoes.filter(([, b]) => b === id).map(([a]) => nos.get(a));
      let x = rnd();
      if (x >= .88 && pais.some(p => p?.tipo === "D")) x = rnd() * .88;
      if (x < .42) { no.tipo = "A"; no.acao = baralho[proxima++ % baralho.length]; }
      else if (x < .70) { no.tipo = "M"; no.tema = escolha(TEMAS); }
      else if (x < .88) no.tipo = "B";
      else no.tipo = "D";
    }
    nos.set(id, no);
  }
  const acima = id => ligacoes.filter(([a]) => a === id).map(([, b]) => nos.get(b));
  return { nos, ligacoes, acima, linhas: LINHAS, colunas: COLUNAS, inicio: `0:${centro}`, chegada: [...nos.values()].find(n => n.tipo === "chegada").id };
}

export const linhaDe = id => +String(id).split(":")[0];

// Descrição de uma casa, para a lista de opções do turno.
export function descreverCasa(no, jogador) {
  const prof = PROFISSOES[jogador?.trilha?.profissao];
  switch (no.tipo) {
    case "W": return { icone: "💼", nome: "Vá trabalhar", detalhe: prof ? prof.temas.join(" ou ") : "temas da profissão" };
    case "A": return no.acao.ferias ? { icone: no.acao.icone, nome: no.acao.nome, detalhe: "sem pergunta; no próximo acerto, anda 2 casas a mais" }
                                    : { icone: no.acao.icone, nome: no.acao.nome, detalhe: no.acao.subtemas.join(", ") };
    case "M": return { icone: "●", nome: `Tema: ${no.tema}`, detalhe: no.tema, tema: no.tema };
    case "B": return { icone: "🂠", nome: "Casa em Branco", detalhe: "qualquer tema; ao chegar, compra uma carta" };
    case "D": return { icone: "🔮", nome: "Destino", detalhe: "qualquer tema; ao chegar, um evento" };
    case "chegada": return { icone: "🏡", nome: "Chegada", detalhe: "qualquer tema" };
    default: return { icone: "👶", nome: "Início", detalhe: "" };
  }
}

// Que perguntas valem numa casa, com o efeito da carta em uso: {temas, subtemas, multipla, figura, temasReserva}.
// `subtemaParaTema` vem do temas.json; `temasReserva` é o plano B quando os subtemas ainda não têm perguntas.
export function filtroDaCasa(no, jogador, carta, temaLivre, subtemaParaTema) {
  let temas = null, subtemas = null;
  if (no.tipo === "W") temas = PROFISSOES[jogador.trilha.profissao]?.temas || null;
  else if (no.tipo === "A" && !no.acao.ferias) subtemas = no.acao.subtemas;
  else if (no.tipo === "M") temas = [no.tema];
  if (carta?.t === "tema") { temas = [carta.tema]; subtemas = null; }
  if (carta?.t === "tema_livre") { temas = temaLivre && temaLivre !== "*" ? [temaLivre] : null; subtemas = null; }
  const temasReserva = subtemas ? [...new Set(subtemas.map(s => subtemaParaTema[s]).filter(Boolean))] : null;
  return { temas, subtemas, multipla: carta?.t === "multipla", figura: carta?.t === "figura", temasReserva };
}

// ---------------------------------------------------------------- desenho

const ESP_Y = 74, ESP_X = 88, MARGEM_X = 110, TOPO = 80;
export const tamanhoMapa = () => ({ L: MARGEM_X * 2 + ESP_X * (COLUNAS - 1), A: TOPO * 2 + ESP_Y * (LINHAS - 1) });
export function posicao(id) {
  const { A } = tamanhoMapa();
  const [r, c] = id.split(":").map(Number);
  const j = ((Math.sin(r * 12.9898 + c * 78.233) * 43758.5453) % 1 + 1) % 1 - .5;  // leve desalinhamento
  return [MARGEM_X + c * ESP_X + (r && r < LINHAS - 1 ? j * 22 : 0), A - TOPO - r * ESP_Y];
}

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

// Recorte do mapa em volta de uma linha (da linha de baixo até `depois` linhas acima), para a aba Turno.
export function viewBoxRecorte(r, antes = 1, depois = 5) {
  const { L, A } = tamanhoMapa();
  const topo = Math.max(0, A - TOPO - (r + depois + .7) * ESP_Y), base = Math.min(A, A - TOPO - (r - antes - .7) * ESP_Y);
  return `0 ${topo.toFixed(0)} ${L} ${(base - topo).toFixed(0)}`;
}

// SVG do mapa com os peões. `cores`: {tema: [fundo, texto]}; `destaque`: ids das casas possíveis da vez;
// opcoes.escolhido: a casa escolhida; opcoes.viewBox: um recorte (viewBoxRecorte).
export function svgMapa(mapa, jogadores, cores, destaque = [], opcoes = {}) {
  const { L, A } = tamanhoMapa();
  const p = [`<rect width="${L}" height="${A}" rx="22" fill="#161615"/>`];
  FASES.forEach(([r0, nome], i) => {
    const r1 = i + 1 < FASES.length ? FASES[i + 1][0] : LINHAS;
    const y1 = Math.min(A, A - TOPO - (r0 - .5) * ESP_Y), y2 = Math.max(0, A - TOPO - (r1 - .5) * ESP_Y);
    if (i % 2) p.push(`<rect x="0" y="${y2}" width="${L}" height="${y1 - y2}" fill="#1c1c1a"/>`);
    p.push(`<text transform="translate(28 ${(y1 + y2) / 2}) rotate(-90)" font-size="15" font-weight="800" letter-spacing="3" fill="#6f6e69" text-anchor="middle">${nome}</text>`);
  });
  for (const [a, b] of mapa.ligacoes) {
    const [x1, y1] = posicao(a), [x2, y2] = posicao(b);
    p.push(`<line x1="${x1.toFixed(1)}" y1="${y1}" x2="${x2.toFixed(1)}" y2="${y2}" stroke="#6a6963" stroke-width="3.5" stroke-dasharray="2 7" stroke-linecap="round"/>`);
  }
  for (const no of mapa.nos.values()) {
    const [x, y] = posicao(no.id);
    const titulo = `<title>${esc(descreverCasa(no).nome)}</title>`;
    if (no.id === opcoes.escolhido)
      p.push(`<circle cx="${x}" cy="${y}" r="33" fill="none" stroke="#f0b429" stroke-width="7"/>`);
    else if (destaque.includes(no.id))
      p.push(`<circle cx="${x}" cy="${y}" r="31" fill="none" stroke="#7c9cf5" stroke-width="5" opacity=".9"/>`);
    if (no.tipo === "inicio") p.push(`<g>${titulo}<circle cx="${x}" cy="${y}" r="32" fill="#fff"/><text x="${x}" y="${y - 4}" font-size="26" text-anchor="middle" dominant-baseline="central">👶</text><text x="${x}" y="${y + 21}" font-size="9.5" font-weight="800" fill="#161615" text-anchor="middle">INÍCIO</text></g>`);
    else if (no.tipo === "chegada") p.push(`<g>${titulo}<circle cx="${x}" cy="${y}" r="42" fill="#000" stroke="#f0b429" stroke-width="5"/><text x="${x}" y="${y - 7}" font-size="30" text-anchor="middle" dominant-baseline="central">🏡</text><text x="${x}" y="${y + 24}" font-size="10" font-weight="800" fill="#f0b429" text-anchor="middle">CHEGADA</text></g>`);
    else if (no.tipo === "W") p.push(`<g>${titulo}<circle cx="${x}" cy="${y}" r="22" fill="#2b2b28" stroke="#ecebe6" stroke-width="3"/><text x="${x}" y="${y + 1}" font-size="20" text-anchor="middle" dominant-baseline="central">💼</text></g>`);
    else if (no.tipo === "A") p.push(`<g>${titulo}<circle cx="${x}" cy="${y}" r="23" fill="#f4f1e8" stroke="#e0c96b" stroke-width="3"/><text x="${x}" y="${y + 1}" font-size="22" text-anchor="middle" dominant-baseline="central">${no.acao.icone}</text></g>`);
    else if (no.tipo === "M") p.push(`<g>${titulo}<circle cx="${x}" cy="${y}" r="19" fill="${(cores[no.tema] || ["#6b6b66"])[0]}" stroke="#fff" stroke-width="2.5"/></g>`);
    else if (no.tipo === "B") p.push(`<g>${titulo}<circle cx="${x}" cy="${y}" r="19" fill="#fff"/><text x="${x}" y="${y + 1}" font-size="16" fill="#888" text-anchor="middle" dominant-baseline="central">🂠</text></g>`);
    else p.push(`<g>${titulo}<circle cx="${x}" cy="${y}" r="22" fill="#3b2a52" stroke="#c9a7ff" stroke-width="3"/><text x="${x}" y="${y + 1}" font-size="20" text-anchor="middle" dominant-baseline="central">🔮</text></g>`);
  }
  // Peões: vários na mesma casa ficam em volta dela.
  const porCasa = new Map();
  for (const j of jogadores) if (j.trilha?.pos && mapa.nos.has(j.trilha.pos)) porCasa.set(j.trilha.pos, [...(porCasa.get(j.trilha.pos) || []), j]);
  for (const [id, js] of porCasa) {
    const [x, y] = posicao(id);
    js.forEach((j, k) => {
      const a = -Math.PI / 2 + (k - (js.length - 1) / 2) * .9;
      const [px, py] = [x + Math.cos(a) * 30, y + Math.sin(a) * 30];
      const prof = PROFISSOES[j.trilha.profissao];
      const [c, ct] = cores[prof?.temas[0]] || ["#6b6b66", "#fff"];
      const ini = j.nome.split(/\s+/).filter(Boolean).slice(0, 2).map(s => s[0]).join("").toUpperCase();
      p.push(`<g class="peao" data-id="${esc(j.id)}"><title>${esc(j.nome)}${prof ? " · " + esc(prof.nome) : ""}</title>
        <circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="26" fill="transparent"/>
        <circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="16" fill="#000"/>
        <circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="13.5" fill="${c}" stroke="#fff" stroke-width="2.5"/>
        <text x="${px.toFixed(1)}" y="${py.toFixed(1)}" font-size="10.5" font-weight="800" fill="${ct}" text-anchor="middle" dominant-baseline="central">${esc(ini)}</text></g>`);
    });
  }
  return `<svg viewBox="${opcoes.viewBox || `0 0 ${L} ${A}`}" role="img" aria-label="Mapa da Trilha da Vida">${p.join("")}</svg>`;
}

// Casa mais próxima de um ponto do SVG (para soltar um peão arrastado).
export function casaMaisProxima(mapa, x, y) {
  let melhor = null, dist = Infinity;
  for (const id of mapa.nos.keys()) {
    const [cx, cy] = posicao(id);
    const d = Math.hypot(x - cx, y - cy);
    if (d < dist) [melhor, dist] = [id, d];
  }
  return dist < 60 ? melhor : null;
}

// ---------------------------------------------------------------- começo

// Opções do jogador: 3 profissões sem temas já escolhidos por outros (quando possível) e 2 personalidades.
export function sortearOpcoes(outros, rnd = Math.random) {
  const usados = new Set(outros.flatMap(j => PROFISSOES[j.trilha?.profissao]?.temas || []));
  const indices = PROFISSOES.map((_, i) => i);
  const livres = indices.filter(i => PROFISSOES[i].temas.every(t => !usados.has(t)));
  const fonte = livres.length ? livres : indices;   // com 4 jogadores, para o último pode sobrar uma só
  const embaralhar = a => a.map(x => [rnd(), x]).sort((u, v) => u[0] - v[0]).map(x => x[1]);
  return { profissoes: embaralhar(fonte).slice(0, 3), personalidades: embaralhar(Object.keys(PERSONALIDADES)).slice(0, 2) };
}
