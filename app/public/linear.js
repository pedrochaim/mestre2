// Modo Linear (MANIFESTO §15): uma trilha única de 60 casas, numa faixa ondulada de 4 fileiras que vai e volta.
// O modo Pokémon usa a mesma trilha, com outro desenho (svgPokemon): um caminho de terra na grama, com as casas
// temáticas do modo no lugar dos temas.
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

// Modo Pokémon (manifesto/modo_pokemon.md, "Casas temáticas"): a casa dita o teor da pergunta. Os nomes são os do
// campo "casa" das perguntas, gravado pelo export (casa_pokemon, em pipeline/banco.py). As casas comuns alternam
// figura e texto, refletindo a regra editorial do modo (pelo menos metade das perguntas com figura): as de figura revezam entre si,
// e as de texto também. [fundo, texto, sigla da casa no tabuleiro]
export const CORES_POKEMON = {
  "Quem é esse pokémon?": ["#2a3a8c", "#ffcb05", "?"],
  "Cartão de atributos":  ["#1f9e89", "#fff", "ATR"],
  "Jogos e Regiões":      ["#3d7dca", "#fff", "JOGO"],
  "Anime e Filmes":       ["#e05fa0", "#fff", "TV"],
  "Pokédex":              ["#c62828", "#fff", "DEX"],
};
const CASAS_FIGURA = ["Quem é esse pokémon?", "Cartão de atributos"];
const CASAS_TEXTO = ["Jogos e Regiões", "Anime e Filmes", "Pokédex"];
export const CASAS_POKEMON = Object.keys(CORES_POKEMON);
const TIPOS_POKEMON = (() => {
  let k = 0;
  return TIPOS.map(tipo => {
    if (!TEMAS.includes(tipo)) return tipo;
    const casa = k % 2 ? CASAS_TEXTO[(k >> 1) % CASAS_TEXTO.length] : CASAS_FIGURA[(k >> 1) % CASAS_FIGURA.length];
    k++;
    return casa;
  });
})();
export const casaPokemon = c => c >= CHEGADA ? null : CASAS_POKEMON.includes(TIPOS_POKEMON[c]) ? TIPOS_POKEMON[c] : "*";

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
const XADREZ = `<pattern id="xadrez" width="20" height="20" patternUnits="userSpaceOnUse"><rect width="20" height="20" fill="#fff"/>
       <rect width="10" height="10" fill="#111"/><rect x="10" y="10" width="10" height="10" fill="#111"/></pattern>`;
const caminho = cor =>
  `<path d="M${PTS.map(([x, y]) => `${f(x)} ${f(y)}`).join("L")}" fill="none" stroke="${cor}" stroke-width="${FAIXA + 16}" stroke-linejoin="round"/>`;
const contornoDaCasa = c => {
  const idx = IDX[c], borda = [...idx.map(i => ponto(i, 1)), ...[...idx].reverse().map(i => ponto(i, -1))];
  return "M" + borda.map(([x, y]) => `${f(x)} ${f(y)}`).join("L") + "Z";
};
const texto = ([x, y], conteudo, tam, cor, contorno) =>
  `<text x="${f(x)}" y="${f(y)}" font-size="${tam}" fill="${cor}" font-weight="800" text-anchor="middle" dominant-baseline="central"${
    contorno ? ` stroke="${contorno}" stroke-width="5" paint-order="stroke"` : ""}>${conteudo}</text>`;

// Peões: sozinho, no meio da casa; dois ou mais, em duas linhas ao longo dela.
function peoes(jogadores, casaDe, peao) {
  const partes = [], grupos = new Map();
  for (const j of jogadores) { const c = casaDe(j); grupos.set(c, [...(grupos.get(c) || []), j]); }
  for (const [c, js] of grupos) {
    const idx = IDX[c];
    const duas = js.length > 1, raio = js.length > 4 ? 19 : duas ? 25 : 32;
    js.forEach((j, h) => {
      const porLinha = Math.ceil(js.length / (duas ? 2 : 1));
      const linha = Math.floor(h / porLinha), k = h % porLinha;
      const u = (k + 1) / (porLinha + 1);
      const lado = duas ? (linha ? .45 : -.45) : 0;
      const [x, y] = ponto(idx[Math.round(u * (idx.length - 1))], lado);
      partes.push(peao(x, y, raio, j));
    });
  }
  return partes;
}

// cores: {tema: [fundo, texto]}; abrev: nome do tema → sigla; peao(x, y, raio, j): o SVG do peão, o mesmo do Master.
export function svgLinear(jogadores, casaDe, cores, abrev, esc, peao) {
  const partes = [
    `<defs>${XADREZ}</defs>`,
    `<rect width="${LARGURA}" height="${ALTURA}" rx="26" fill="#161615"/>`,
    caminho("#333"),
  ];
  IDX.forEach((_, c) => {
    const d = contornoDaCasa(c);
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
  partes.push(...peoes(jogadores, casaDe, peao));
  return `<svg viewBox="0 0 ${LARGURA} ${ALTURA}" role="img" aria-label="Tabuleiro linear">${partes.join("")}</svg>`;
}

// Ícones das casas temáticas do modo Pokémon, desenhados aqui (formas genéricas, sem logotipos oficiais), centrados
// em (x, y) e cabendo num quadrado de lado 2r. Na falta de ícone, a casa mostra a sigla.
function estrela(x, y, r, n, interno) {
  const pts = Array.from({ length: n * 2 }, (_, i) => {
    const a = Math.PI * i / n - Math.PI / 2, rr = i % 2 ? r * interno : r;
    return `${f(x + rr * Math.cos(a))} ${f(y + rr * Math.sin(a))}`;
  });
  return `M${pts.join("L")}Z`;
}
const ICONES_POKEMON = {
  // A vinheta do desenho: um "?" sobre a explosão amarela.
  "Quem é esse pokémon?": (x, y, r) =>
    `<path d="${estrela(x, y, r, 12, .72)}" fill="#ffcb05" stroke="#1d2a6b" stroke-width="2.5" stroke-linejoin="round"/>
     <text x="${f(x)}" y="${f(y + r * .05)}" font-size="${f(r * 1.25)}" font-weight="900" fill="#2a3a8c" text-anchor="middle" dominant-baseline="central">?</text>`,
  // O cartão: seis barras de atributos sobre uma linha de base.
  "Cartão de atributos": (x, y, r) => {
    const alt = [.62, .9, .5, 1, .7, .82], w = r * .22, passo = r * .32, x0 = x - passo * 2.5, base = y + r * .78;
    return `<rect x="${f(x - r * .98)}" y="${f(y - r * .98)}" width="${f(r * 1.96)}" height="${f(r * 1.96)}" rx="${f(r * .22)}" fill="none" stroke="#fff" stroke-width="3"/>` +
      alt.map((h, i) => `<rect x="${f(x0 + i * passo - w / 2)}" y="${f(base - h * r * 1.42)}" width="${f(w)}" height="${f(h * r * 1.42)}" rx="2" fill="#fff"/>`).join("");
  },
  // Um console portátil genérico: tela, direcional e dois botões.
  "Jogos e Regiões": (x, y, r) => {
    const w = r * 1.25, h = r * 1.9, x0 = x - w / 2, y0 = y - h / 2;
    const cx = x0 + w * .3, cy = y0 + h * .74, b = r * .14;
    return `<rect x="${f(x0)}" y="${f(y0)}" width="${f(w)}" height="${f(h)}" rx="${f(r * .18)}" fill="#fff"/>
      <rect x="${f(x0 + w * .14)}" y="${f(y0 + h * .1)}" width="${f(w * .72)}" height="${f(h * .38)}" rx="3" fill="#1d3f73"/>
      <path d="M${f(cx - b * 1.5)} ${f(cy - b / 2)}h${f(b)}v${f(-b)}h${f(b)}v${f(b)}h${f(b)}v${f(b)}h${f(-b)}v${f(b)}h${f(-b)}v${f(-b)}h${f(-b)}Z" fill="#3d7dca"/>
      <circle cx="${f(x0 + w * .66)}" cy="${f(cy + b * .6)}" r="${f(b * .75)}" fill="#e3350d"/>
      <circle cx="${f(x0 + w * .82)}" cy="${f(cy - b * .5)}" r="${f(b * .75)}" fill="#e3350d"/>`;
  },
  // Uma TV antiga com antena.
  "Anime e Filmes": (x, y, r) => {
    const w = r * 1.9, h = r * 1.3, x0 = x - w / 2, y0 = y - h / 2 + r * .3;
    return `<path d="M${f(x - r * .5)} ${f(y0 - r * .62)}L${f(x)} ${f(y0 - 2)}L${f(x + r * .5)} ${f(y0 - r * .62)}" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="${f(x0)}" y="${f(y0)}" width="${f(w)}" height="${f(h)}" rx="${f(r * .2)}" fill="#fff"/>
      <rect x="${f(x0 + w * .09)}" y="${f(y0 + h * .14)}" width="${f(w * .64)}" height="${f(h * .72)}" rx="4" fill="#8a2c5c"/>
      <circle cx="${f(x0 + w * .86)}" cy="${f(y0 + h * .34)}" r="${f(r * .1)}" fill="#e05fa0"/>
      <circle cx="${f(x0 + w * .86)}" cy="${f(y0 + h * .66)}" r="${f(r * .1)}" fill="#e05fa0"/>`;
  },
  // Uma enciclopédia eletrônica genérica: a lente azul, três luzes e a tela.
  "Pokédex": (x, y, r) => {
    const w = r * 1.5, h = r * 1.9, x0 = x - w / 2, y0 = y - h / 2;
    return `<rect x="${f(x0)}" y="${f(y0)}" width="${f(w)}" height="${f(h)}" rx="${f(r * .18)}" fill="#fff"/>
      <circle cx="${f(x0 + w * .3)}" cy="${f(y0 + h * .24)}" r="${f(r * .3)}" fill="#3d9be9" stroke="#1d2a6b" stroke-width="2"/>
      <circle cx="${f(x0 + w * .24)}" cy="${f(y0 + h * .2)}" r="${f(r * .09)}" fill="#fff"/>
      ${["#e3350d", "#f7d02c", "#4caf50"].map((c, i) => `<circle cx="${f(x0 + w * (.62 + i * .13))}" cy="${f(y0 + h * .17)}" r="${f(r * .07)}" fill="${c}"/>`).join("")}
      <rect x="${f(x0 + w * .14)}" y="${f(y0 + h * .48)}" width="${f(w * .72)}" height="${f(h * .38)}" rx="3" fill="#2d2d2d"/>
      <path d="M${f(x0 + w * .24)} ${f(y0 + h * .6)}h${f(w * .5)}M${f(x0 + w * .24)} ${f(y0 + h * .72)}h${f(w * .34)}" stroke="#7fd36b" stroke-width="2.5" stroke-linecap="round"/>`;
  },
};

// O tabuleiro do modo Pokémon é mais alto que o do Linear: embaixo da trilha fica a legenda das casas, no canto
// inferior esquerdo. O app usa esta altura para dimensionar o tabuleiro no modo mesa.
export const ALTURA_POKEMON = ALTURA + 120;

// Legenda das casas, numa caixa no canto inferior esquerdo, a x0 da borda esquerda: na primeira linha, as casas de
// figura e a casa especial; na segunda, as de texto.
function legendaPokemon(x0) {
  const itens = [...CASAS_FIGURA, "especial", ...CASAS_TEXTO];
  const COL = 335, LIN = 46, r = 16, pad = 12, y0 = ALTURA_POKEMON - (LIN * 2 + pad * 2) - 16;
  const partes = [`<rect x="${x0}" y="${y0}" width="${COL * 3 + pad}" height="${LIN * 2 + pad * 2}" rx="16" fill="#1f4d1c" fill-opacity=".9" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>`];
  itens.forEach((casa, i) => {
    const cx = x0 + pad + (i % 3) * COL + r + 4, cy = y0 + pad + Math.floor(i / 3) * LIN + LIN / 2;
    if (casa === "especial") partes.push(pokebola([cx, cy], r));
    else partes.push(`<rect x="${f(cx - r - 4)}" y="${f(cy - r - 4)}" width="${2 * r + 8}" height="${2 * r + 8}" rx="7" fill="${CORES_POKEMON[casa][0]}" stroke="#000" stroke-width="1.5"/>`,
                     ICONES_POKEMON[casa](cx, cy, r));
    const rotulo = casa === "especial" ? "Especial: qualquer casa" : casa;
    partes.push(`<text x="${f(cx + r + 14)}" y="${f(cy)}" font-size="21" font-weight="800" fill="#fff" dominant-baseline="central">${rotulo}</text>`);
  });
  return `<g pointer-events="none">${partes.join("")}</g>`;
}

// O ícone de uma casa como SVG avulso, para legendas e botões do app.
export const iconePokemon = (casa, px = 28) => ICONES_POKEMON[casa] ?
  `<svg viewBox="-34 -34 68 68" width="${px}" height="${px}" aria-hidden="true"><rect x="-34" y="-34" width="68" height="68" rx="12" fill="${CORES_POKEMON[casa][0]}"/>${ICONES_POKEMON[casa](0, 0, 26)}</svg>` : "";

// Pokébola de raio r centrada em (x, y): marca as casas especiais do modo Pokémon.
function pokebola([x, y], r) {
  const [a, b, w] = [f(x - r), f(x + r), f(r * .14)];
  return `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="#fff"/>
    <path d="M${a} ${f(y)}A${f(r)} ${f(r)} 0 0 1 ${b} ${f(y)}Z" fill="#e3350d"/>
    <circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="none" stroke="#111" stroke-width="${w}"/>
    <path d="M${a} ${f(y)}H${b}" stroke="#111" stroke-width="${f(r * .16)}"/>
    <circle cx="${f(x)}" cy="${f(y)}" r="${f(r * .34)}" fill="#fff" stroke="#111" stroke-width="${w}"/>`;
}

// Modo Pokémon: a mesma trilha, como um caminho de terra na grama. Cada casa comum tem a cor e o ícone da sua casa
// temática (CORES_POKEMON, ICONES_POKEMON), e as especiais levam uma pokébola.
export function svgPokemon(jogadores, casaDe, peao) {
  const TERRA = "#7a5a2e";
  const partes = [
    `<defs>${XADREZ}<pattern id="grama" width="60" height="52" patternUnits="userSpaceOnUse"><rect width="60" height="52" fill="#4f9d47"/>
       <path d="M10 20l3-9 3 9M13 20v-4M40 46l3-9 3 9M43 46v-4" stroke="#3d8237" stroke-width="2.5" fill="none" stroke-linecap="round"/>
       <circle cx="32" cy="14" r="2.2" fill="#3d8237"/><circle cx="52" cy="30" r="2.2" fill="#3d8237"/></pattern></defs>`,
    `<rect width="${LARGURA}" height="${ALTURA_POKEMON}" rx="26" fill="url(#grama)"/>`,
    caminho(TERRA),
  ];
  IDX.forEach((_, c) => {
    const tipo = TIPOS_POKEMON[c];
    const [fundo, cor, sigla] = CORES_POKEMON[tipo] || [];
    const [preenchimento, dica] =
      tipo === "inicio" ? ["#f2f2f2", "Início · qualquer casa"] :
      tipo === "chegada" ? ["url(#xadrez)", "Chegada"] :
      tipo === "especial" ? ["#2a2a2a", "Casa especial · qualquer casa (ação ainda a definir)"] :
      [fundo, tipo];
    partes.push(`<path d="${contornoDaCasa(c)}" fill="${preenchimento}" stroke="#000" stroke-width="3"><title>Casa ${c} · ${dica}</title></path>`);
    if (tipo === "inicio") partes.push(texto(CENTROS[c], "INÍCIO", 19, "#111"));
    else if (tipo === "especial") partes.push(`<g pointer-events="none">${pokebola(CENTROS[c], 30)}</g>`);
    else if (ICONES_POKEMON[tipo]) partes.push(`<g pointer-events="none">${ICONES_POKEMON[tipo](...CENTROS[c], 30)}</g>`);
    else if (sigla) partes.push(texto(CENTROS[c], sigla, sigla.length > 1 ? 24 : 40, cor));
  });
  const [ex, ey] = PTS.at(-1);
  partes.push(texto([X0 + 50, LINHAS[0] - 92], "▼ PARTIDA", 22, "#fff", "#2f6b2a"),
              texto([ex + 50, ey + 92], "CHEGADA ▲", 22, "#fff", "#2f6b2a"));
  partes.push(legendaPokemon(24));
  partes.push(...peoes(jogadores, casaDe, peao));
  return `<svg viewBox="0 0 ${LARGURA} ${ALTURA_POKEMON}" role="img" aria-label="Tabuleiro do modo Pokémon">${partes.join("")}</svg>`;
}
