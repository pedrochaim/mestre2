// Modo Linear (MANIFESTO §15): uma trilha única de 60 casas, numa faixa ondulada de 4 fileiras que vai e volta.
// Só dados e desenho: a ligação com a tela e o Firestore fica no index.html. A posição do peão é o campo "pontos",
// como no Master: 0 é o Início e CHEGADA é a última casa.

const TEMAS = ["Geografia", "Natureza", "Artes e Pensamento", "Cotidiano", "Ciências", "Entretenimento", "Esportes", "História"];
export const CASAS = 60;
export const CHEGADA = CASAS - 1;
// Casas especiais (★): as ações delas ainda não foram definidas; por enquanto a pergunta é de qualquer tema e o
// grupo aplica o efeito à mão.
const ESPECIAIS = new Set([6, 13, 20, 27, 34, 41, 48, 54]);

// Tipo de cada casa: "inicio", "chegada", "especial" ou o nome do tema. Os temas seguem a ordem das cores, em ciclo.
export const TIPOS = (() => {
  const tipos = [];
  for (let c = 0, t = 0; c < CASAS; c++)
    tipos.push(c === 0 ? "inicio" : c === CHEGADA ? "chegada" : ESPECIAIS.has(c) ? "especial" : TEMAS[t++ % TEMAS.length]);
  return tipos;
})();

// Tema da pergunta na casa c: o tema da casa; "*" (qualquer tema) no Início e nas especiais; null na chegada.
export const temaDaCasa = c => c >= CHEGADA ? null : TEMAS.includes(TIPOS[c]) ? TIPOS[c] : "*";

// ---------------------------------------------------------------- geometria

// Linha do meio da faixa: 4 fileiras onduladas, ligadas por meias-voltas que alternam à direita e à esquerda.
// A onda some perto das pontas, para a fileira encontrar a curva sem degrau. As casas são cortadas a cada
// 1/CASAS do comprimento total, de modo que todas têm o mesmo comprimento, inclusive nas curvas.
const LARGURA = 1600, ALTURA = 880, X0 = 170, X1 = 1430, FAIXA = 116, AMPL = 26;
const LINHAS = [140, 340, 540, 740];
const onda = x => {
  const t = Math.max(0, Math.min(1, (x - X0) / 140, (X1 - x) / 140));
  return AMPL * Math.sin(2 * Math.PI * (x - X0) / ((X1 - X0) / 4)) * t;
};
const PTS = [];
LINHAS.forEach((y, k) => {
  const xs = Array.from({ length: 401 }, (_, i) => X0 + (X1 - X0) * i / 400);
  if (k % 2) xs.reverse();
  for (const x of xs) PTS.push([x, y + onda(x)]);
  if (k < LINHAS.length - 1) {
    const r = (LINHAS[k + 1] - y) / 2, cy = y + r, lado = k % 2 ? -1 : 1, cx = lado === 1 ? X1 : X0;
    for (let i = 1; i < 80; i++) {
      const a = -Math.PI / 2 + Math.PI * i / 80;
      PTS.push([cx + lado * r * Math.cos(a), cy + r * Math.sin(a)]);
    }
  }
});
const ACUM = [0];
for (let i = 1; i < PTS.length; i++) ACUM.push(ACUM[i - 1] + Math.hypot(PTS[i][0] - PTS[i - 1][0], PTS[i][1] - PTS[i - 1][1]));
const TOTAL = ACUM.at(-1);
const normal = i => {
  const [a, b] = [PTS[Math.max(0, i - 1)], PTS[Math.min(PTS.length - 1, i + 1)]];
  const n = Math.hypot(b[0] - a[0], b[1] - a[1]);
  return [-(b[1] - a[1]) / n, (b[0] - a[0]) / n];
};
// Ponto na faixa: i é o índice na linha do meio; lado vai de -1 a 1 (as bordas).
const ponto = (i, lado) => { const [nx, ny] = normal(i); return [PTS[i][0] + lado * nx * FAIXA / 2, PTS[i][1] + lado * ny * FAIXA / 2]; };
const indices = c => {
  const [a, b] = [TOTAL * c / CASAS - 1e-6, TOTAL * (c + 1) / CASAS + 1e-6];
  return PTS.map((_, i) => i).filter(i => ACUM[i] >= a && ACUM[i] <= b);
};
const IDX = Array.from({ length: CASAS }, (_, c) => indices(c));
// Centro de cada casa, usado para soltar um peão arrastado na casa mais próxima.
export const CENTROS = IDX.map(idx => PTS[idx[Math.floor(idx.length / 2)]]);

export function casaMaisProxima(x, y) {
  let casa = null, dist = Infinity;
  CENTROS.forEach(([cx, cy], c) => { const d = Math.hypot(x - cx, y - cy); if (d < dist) [casa, dist] = [c, d]; });
  return dist < 110 ? casa : null;
}

// ---------------------------------------------------------------- desenho

const f = n => n.toFixed(1);

// cores: {tema: [fundo, texto]}; abrev: nome do tema → sigla; peao(x, y, raio, j): o SVG do peão, o mesmo do Master.
export function svgLinear(jogadores, casaDe, cores, abrev, esc, peao) {
  const partes = [
    `<defs><pattern id="xadrez" width="20" height="20" patternUnits="userSpaceOnUse"><rect width="20" height="20" fill="#fff"/>
       <rect width="10" height="10" fill="#111"/><rect x="10" y="10" width="10" height="10" fill="#111"/></pattern></defs>`,
    `<rect width="${LARGURA}" height="${ALTURA}" rx="26" fill="#161615"/>`,
    `<path d="M${PTS.map(([x, y]) => `${f(x)} ${f(y)}`).join("L")}" fill="none" stroke="#333" stroke-width="${FAIXA + 16}" stroke-linejoin="round"/>`,
  ];
  const texto = ([x, y], conteudo, tam, cor) =>
    `<text x="${f(x)}" y="${f(y)}" font-size="${tam}" fill="${cor}" font-weight="800" text-anchor="middle" dominant-baseline="central">${conteudo}</text>`;
  IDX.forEach((idx, c) => {
    const borda = [...idx.map(i => ponto(i, 1)), ...[...idx].reverse().map(i => ponto(i, -1))];
    const d = "M" + borda.map(([x, y]) => `${f(x)} ${f(y)}`).join("L") + "Z";
    const tipo = TIPOS[c];
    const [fundo, cor, rotulo, tam, dica] =
      tipo === "inicio" ? ["#f2f2f2", "#111", "INÍCIO", 19, "Início · qualquer tema"] :
      tipo === "chegada" ? ["url(#xadrez)", "#111", "", 20, "Chegada"] :
      tipo === "especial" ? ["#2a2a2a", "#ffd23f", "★", 34, "Casa especial · qualquer tema (ação ainda a definir)"] :
      [...(cores[tipo] || ["#6b6b66", "#fff"]), esc(abrev(tipo)), 26, esc(tipo)];
    partes.push(`<path d="${d}" fill="${fundo}" stroke="#000" stroke-width="3"><title>Casa ${c} · ${dica}</title></path>`);
    if (rotulo) partes.push(texto(CENTROS[c], rotulo, tam, cor));
  });
  const [ex, ey] = PTS.at(-1);
  partes.push(texto([X0 + 50, LINHAS[0] - 92], "▼ PARTIDA", 22, "#fff"), texto([ex + 50, ey + 92], "CHEGADA ▲", 22, "#fff"));

  // Peões: sozinho, no meio da casa; dois ou mais, em duas linhas ao longo dela.
  const grupos = new Map();
  for (const j of jogadores) { const c = casaDe(j); grupos.set(c, [...(grupos.get(c) || []), j]); }
  for (const [c, js] of grupos) {
    const idx = IDX[c];
    const duas = js.length > 1, raio = js.length > 4 ? 15 : duas ? 19 : 24;
    js.forEach((j, h) => {
      const porLinha = Math.ceil(js.length / (duas ? 2 : 1));
      const linha = Math.floor(h / porLinha), k = h % porLinha;
      const u = (k + 1) / (porLinha + 1);
      const lado = duas ? (linha ? .45 : -.45) : 0;
      const [x, y] = ponto(idx[Math.round(u * (idx.length - 1))], lado);
      partes.push(peao(x, y, raio, j));
    });
  }
  return `<svg viewBox="0 0 ${LARGURA} ${ALTURA}" role="img" aria-label="Tabuleiro linear">${partes.join("")}</svg>`;
}
