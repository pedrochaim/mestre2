// Arena: as roletas do tema qualquer (2026-11-26). Quando a próxima posição da sequência dos temas é ★ Qualquer, a
// contagem da próxima pergunta (arena-contagem.js) dá lugar a uma de quatro roletas, sorteada pela chave como as cenas
// dos temas: roda da fortuna, roleta de cassino, linha de metrô e caça-níquel. A roleta não sorteia nada: o tema já veio
// com a pergunta ("proxima.tema"), e ela só encena o sorteio e para nele, entre 5 e 5,3 s; o tema fica à mostra e o
// número segue contando até a pergunta entrar. Os tempos foram feitos para a contagem de 7 s (SEGUNDOS).
// Cada roleta é desenhada num canvas do tamanho da tela, a partir do tempo decorrido e de um plano sorteado pela chave
// (planejar), então a tela grande e os celulares veem a mesma roleta, mesmo quem entra no meio. O plano também guarda os
// instantes dos cliques, quiques e paradas, que o som de cada roleta (arena-suspense.js, "Qualquer|0" a "|3") segue.
// Escolhidas entre cinco protótipos; a quinta (painel de luzes) ficou de fora.

const TEMAS = ["Geografia", "Natureza", "Artes e Pensamento", "Cotidiano", "Ciências", "Entretenimento", "Esportes", "História"];
const CORES = [["#00A84F", "#000"], ["#8CC63F", "#000"], ["#F7941D", "#000"], ["#E8412C", "#000"],
               ["#E4007C", "#fff"], ["#8E4FC9", "#fff"], ["#00A3E0", "#000"], ["#2F5BEA", "#fff"]];  // as de CORES em arena-comum.js
const ABREV = ["G", "N", "AP", "CO", "CI", "EN", "E", "H"];  // as do tabuleiro (abrev em arena-comum.js)
const TAU = Math.PI * 2;
const FONTE = 'Overpass, system-ui, -apple-system, "Segoe UI", sans-serif';
const F = (peso, px) => `${peso} ${Math.max(1, px).toFixed(1)}px ${FONTE}`;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const mod = (a, n) => ((a % n) + n) % n;
const easeIn = x => x * x, easeOut = x => 1 - (1 - x) * (1 - x);
const hexRgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const rgba = (h, a) => `rgba(${hexRgb(h).join(",")},${clamp(a)})`;
const ESCURO = CORES.map(([h]) => `rgb(${hexRgb(h).map(v => Math.round(v * .58)).join(",")})`);
const TEM_ESP = typeof CanvasRenderingContext2D !== "undefined" && "letterSpacing" in CanvasRenderingContext2D.prototype;

// Gerador pseudoaleatório (mulberry32), como em linear.js e arena-contagem.js.
function aleatorio(semente) {
  let a = semente >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
// fn crescente em [a, b]: o instante em que ela vale "alvo"; e todos os instantes em que passa por desvio + k·passo
// (os pinos da roda, as juntas dos trilhos, as casas dos tambores).
function resolver(fn, alvo, a, b) {
  let lo = a, hi = b;
  for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (fn(m) < alvo) lo = m; else hi = m; }
  return (lo + hi) / 2;
}
function cruzamentos(fn, passo, desvio, a, b) {
  const v0 = fn(a), v1 = fn(b), out = [];
  for (let k = Math.ceil((v0 - desvio) / passo); desvio + k * passo <= v1 + 1e-9; k++) out.push(resolver(fn, desvio + k * passo, a, b));
  return out;
}

// ---------------------------------------------------------------- desenho comum
function rr(c, x, y, w, h, r) {
  r = Math.max(0, Math.min(r, w / 2, h / 2));
  c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
}
function estrela(c, x, y, r, cor) {
  c.beginPath();
  for (let k = 0; k < 10; k++) { const rk = k % 2 ? r * .42 : r, an = -Math.PI / 2 + k * Math.PI / 5;
    const px = x + Math.cos(an) * rk, py = y + Math.sin(an) * rk; k ? c.lineTo(px, py) : c.moveTo(px, py); }
  c.closePath(); c.fillStyle = cor; c.fill();
}
function lampada(c, x, y, r, acesa) {
  c.beginPath(); c.arc(x, y, r, 0, TAU);
  if (acesa) { c.save(); c.shadowColor = "#FFD100"; c.shadowBlur = r * 3; c.fillStyle = "#FFE66B"; c.fill(); c.restore(); }
  else { c.fillStyle = "#3b3522"; c.fill(); }
}
function texto(c, s, x, y, { px, peso = 800, cor = "#F4F4F2", alinhar = "left", base = "alphabetic", esp = 0, maxW } = {}) {
  c.font = F(peso, px);
  if (TEM_ESP) c.letterSpacing = `${esp * px}px`;
  if (maxW) { const w = c.measureText(s).width; if (w > maxW) { px *= maxW / w; c.font = F(peso, px); if (TEM_ESP) c.letterSpacing = `${esp * px}px`; } }
  c.fillStyle = cor; c.textAlign = alinhar; c.textBaseline = base; c.fillText(s, x, y);
  if (TEM_ESP) c.letterSpacing = "0px";
  return px;
}
// O nome do tema, centrado, em uma ou duas linhas ("Artes e / Pensamento"), encolhido para caber.
function nomeTema(c, i, x, y, maxW, px, cor, peso = 800) {
  const ls = i === 2 ? ["Artes e", "Pensamento"] : [TEMAS[i]];
  c.font = F(peso, px);
  const larg = Math.max(...ls.map(l => c.measureText(l).width));
  if (larg > maxW) { px *= maxW / larg; c.font = F(peso, px); }
  c.fillStyle = cor; c.textAlign = "center"; c.textBaseline = "middle";
  ls.forEach((l, k) => c.fillText(l, x, y + (k - (ls.length - 1) / 2) * px * 1.02 + px * .08));
}
// Os ícones dos temas, em traço: globo, folha, paleta, xícara, átomo, claquete, bola e templo.
function icone(c, i, x, y, r, cor) {
  c.save(); c.translate(x, y);
  c.strokeStyle = cor; c.fillStyle = cor; c.lineWidth = Math.max(1.2, r * .15); c.lineCap = "round"; c.lineJoin = "round";
  c.beginPath();
  switch (i) {
    case 0:
      c.arc(0, 0, r, 0, TAU); c.moveTo(r * .42, 0); c.ellipse(0, 0, r * .42, r, 0, 0, TAU);
      c.moveTo(-r, 0); c.lineTo(r, 0); c.moveTo(-r * .86, -r * .5); c.lineTo(r * .86, -r * .5); c.moveTo(-r * .86, r * .5); c.lineTo(r * .86, r * .5);
      c.stroke(); break;
    case 1:
      c.moveTo(-r * .72, r * .72); c.quadraticCurveTo(-r * .95, -r * .8, r * .82, -r * .82); c.quadraticCurveTo(r * .8, r * .95, -r * .72, r * .72);
      c.moveTo(-r * .98, r * .98); c.lineTo(r * .3, -r * .3); c.stroke(); break;
    case 2:
      c.moveTo(r * .05, -r * .88);
      c.bezierCurveTo(r * 1.0, -r * .9, r * 1.05, r * .3, r * .5, r * .42);
      c.bezierCurveTo(r * .15, r * .5, r * .3, r * .92, -r * .12, r * .9);
      c.bezierCurveTo(-r * .95, r * .85, -r * 1.02, -r * .86, r * .05, -r * .88);
      c.closePath(); c.stroke();
      [[-.45, -.2], [-.12, -.52], [.32, -.45], [-.5, .3]].forEach(([a, b]) => { c.beginPath(); c.arc(r * a, r * b, r * .13, 0, TAU); c.fill(); });
      break;
    case 3: {
      c.moveTo(-r * .78, -r * .22); c.lineTo(r * .42, -r * .22); c.lineTo(r * .3, r * .52); c.quadraticCurveTo(r * .26, r * .66, r * .1, r * .66);
      c.lineTo(-r * .46, r * .66); c.quadraticCurveTo(-r * .62, r * .66, -r * .66, r * .52); c.closePath();
      const hx = r * .52, hy = r * .14, hr = r * .22, a0 = -Math.PI * .6;
      c.moveTo(hx + hr * Math.cos(a0), hy + hr * Math.sin(a0)); c.arc(hx, hy, hr, a0, Math.PI * .55);
      c.moveTo(-r * .98, r * .9); c.lineTo(r * .7, r * .9);
      c.moveTo(-r * .4, -r * .42); c.quadraticCurveTo(-r * .58, -r * .62, -r * .38, -r * .9);
      c.moveTo(r * .02, -r * .42); c.quadraticCurveTo(-r * .16, -r * .62, r * .04, -r * .9);
      c.stroke(); break;
    }
    case 4:
      for (let k = 0; k < 3; k++) { c.beginPath(); c.ellipse(0, 0, r, r * .36, k * Math.PI / 3, 0, TAU); c.stroke(); }
      c.beginPath(); c.arc(0, 0, r * .17, 0, TAU); c.fill(); break;
    case 5:
      c.rect(-r * .85, -r * .18, r * 1.7, r * 1.0); c.moveTo(-r * .85, r * .12); c.lineTo(r * .85, r * .12); c.stroke();
      c.translate(-r * .85, -r * .24); c.rotate(-.35); c.beginPath(); c.rect(0, -r * .3, r * 1.72, r * .3); c.stroke();
      for (let k = 0; k < 4; k++) { c.beginPath(); c.moveTo(r * (.2 + k * .42), 0); c.lineTo(r * (.42 + k * .42), -r * .3); c.stroke(); }
      break;
    case 6: {
      c.arc(0, 0, r, 0, TAU); c.stroke();
      const v = k => { const a = -Math.PI / 2 + k * TAU / 5; return [Math.cos(a), Math.sin(a)]; };
      c.beginPath(); for (let k = 0; k < 5; k++) { const [a, b] = v(k); k ? c.lineTo(a * r * .38, b * r * .38) : c.moveTo(a * r * .38, b * r * .38); } c.closePath(); c.fill();
      c.beginPath(); for (let k = 0; k < 5; k++) { const [a, b] = v(k); c.moveTo(a * r * .38, b * r * .38); c.lineTo(a * r, b * r); } c.stroke();
      break;
    }
    case 7:
      c.moveTo(-r * .95, -r * .38); c.lineTo(0, -r * .92); c.lineTo(r * .95, -r * .38); c.closePath();
      c.moveTo(-r * .8, -r * .22); c.lineTo(r * .8, -r * .22);
      [-.58, 0, .58].forEach(a => { c.moveTo(r * a, -r * .1); c.lineTo(r * a, r * .6); });
      c.moveTo(-r * .85, r * .75); c.lineTo(r * .85, r * .75);
      c.stroke(); break;
  }
  c.restore();
}
// Tela deitada (TV): a roleta num quadrado à esquerda e o texto à direita. Celular em pé: texto em cima e embaixo.
function layout(w, h) {
  const u = Math.min(w, h) / 100;
  if (w / h >= 1.15) {
    const infoW = Math.min(44 * u, w * .36);
    const s = Math.min(h * .9, w - infoW - 12 * u);
    const total = s + 6 * u + infoW, x0 = (w - total) / 2;
    return { deitado: true, u, obj: { x: x0, y: (h - s) / 2, s }, info: { x: x0 + s + 6 * u, w: infoW, h } };
  }
  const topo = 27 * u, base = 17 * u;
  const s = Math.min(w * .94, h - topo - base - 4 * u);
  const y0 = (h - (topo + s + base)) / 2;
  return { deitado: false, u, topo: { y: y0, w }, obj: { x: (w - s) / 2, y: y0 + topo, s }, base: { y: y0 + topo + s, w } };
}
// O selo ★ QUALQUER, como a posição da tira de temas: cinza com o arco das oito cores em cima.
function selo(c, x, y, u, centro) {
  const px = 2.5 * u, h = 5.8 * u;
  c.font = F(800, px); if (TEM_ESP) c.letterSpacing = `${.1 * px}px`;
  const tw = c.measureText("QUALQUER").width; if (TEM_ESP) c.letterSpacing = "0px";
  const w = tw + 6.6 * u, x0 = centro ? x - w / 2 : x;
  c.save(); rr(c, x0, y, w, h, .9 * u); c.fillStyle = "#23262c"; c.fill(); c.clip();
  const g = c.createLinearGradient(x0, 0, x0 + w, 0); CORES.forEach((co, k) => g.addColorStop(k / 7, co[0]));
  c.fillStyle = g; c.fillRect(x0, y, w, .85 * u); c.restore();
  estrela(c, x0 + 2.4 * u, y + h / 2 + .35 * u, 1.25 * u, "#FFD100");
  texto(c, "QUALQUER", x0 + 4.3 * u, y + h / 2 + .45 * u, { px, esp: .1, base: "middle" });
}
function numero(c, s, x, yBase, px, k, centro) {
  c.save(); const ay = yBase - px * .36;
  c.translate(x, ay); c.scale(k, k); c.translate(-x, -ay);
  c.font = F(900, px); c.fillStyle = "#fff"; c.textAlign = centro ? "center" : "left"; c.textBaseline = "alphabetic";
  c.shadowColor = "#000"; c.shadowBlur = px * .12;
  c.fillText(String(s), x, yBase); c.restore();
}
// O selo do tema: tracejado com "?" enquanto sorteia; na cor do tema, com um pulo, quando a roleta para.
function selotema(c, x, y, maxW, h, u, i, k, centro) {
  const px = h * .44;
  if (i == null) {
    const w = Math.min(maxW, 22 * u), x0 = centro ? x - w / 2 : x;
    c.save(); c.setLineDash([1.2 * u, .9 * u]); rr(c, x0, y, w, h, 1.1 * u); c.strokeStyle = "#4a4e56"; c.lineWidth = Math.max(1, .3 * u); c.stroke(); c.restore();
    texto(c, "?", x0 + w / 2, y + h / 2 + px * .1, { px, peso: 900, cor: "#7b7f86", alinhar: "center", base: "middle" });
    return;
  }
  c.font = F(900, px); let tw = c.measureText(TEMAS[i]).width, fpx = px;
  if (tw > maxW - 3.2 * u) { fpx = px * (maxW - 3.2 * u) / tw; tw = maxW - 3.2 * u; }
  const w = tw + 3.2 * u, x0 = centro ? x - w / 2 : x, esc = 1 + .3 * Math.pow(1 - k, 3);
  c.save(); const ax = centro ? x : x0, ay = y + h / 2;
  c.translate(ax, ay); c.scale(esc, esc); c.translate(-ax, -ay);
  c.shadowColor = CORES[i][0]; c.shadowBlur = (1 - k) * 4 * u + 1.5 * u;
  rr(c, x0, y, w, h, 1.1 * u); c.fillStyle = CORES[i][0]; c.fill(); c.shadowBlur = 0;
  texto(c, TEMAS[i], x0 + w / 2, y + h / 2 + fpx * .08, { px: fpx, peso: 900, cor: CORES[i][1], alinhar: "center", base: "middle" });
  c.restore();
}
function desenharInfo(c, L, t, p, rotulo, total) {
  const u = L.u, s = t >= total ? 0 : Math.ceil(total - t - 1e-6);
  const desde = t >= total ? t - total : t - Math.floor(t);
  const pulso = 1 + .22 * Math.pow(Math.max(0, 1 - desde / .6), 2);
  const caiu = t >= p.ts, kp = clamp((t - p.ts) / .45);
  if (L.deitado) {
    const { x, w, h } = L.info, y = (h - 47 * u) / 2;
    selo(c, x, y, u, false);
    texto(c, "PRÓXIMA PERGUNTA EM", x, y + 12.6 * u, { px: 2.1 * u, esp: .12, maxW: w });
    numero(c, s, x, y + 28.5 * u, 17 * u, pulso, false);
    texto(c, rotulo, x, y + 35.1 * u, { px: 2.1 * u, esp: .12, cor: "#A0A4AB", maxW: w });
    selotema(c, x, y + 37.5 * u, w, 9 * u, u, caiu ? p.alvo : null, kp, false);
  } else {
    const cx = L.topo.w / 2, y0 = L.topo.y;
    selo(c, cx, y0 + u, u, true);
    texto(c, "PRÓXIMA PERGUNTA EM", cx, y0 + 11.5 * u, { px: 2.6 * u, esp: .12, alinhar: "center", maxW: L.topo.w * .9 });
    numero(c, s, cx, y0 + 24.5 * u, 12 * u, pulso, true);
    const yb = L.base.y + 2 * u;
    texto(c, rotulo, cx, yb + 2.4 * u, { px: 2.4 * u, esp: .12, cor: "#A0A4AB", alinhar: "center" });
    selotema(c, cx, yb + 4.5 * u, L.base.w * .86, 9.5 * u, u, caiu ? p.alvo : null, kp, true);
  }
}

// ---------------------------------------------------------------- 0. Roda da fortuna
// A roda com os oito temas ganha um empurrão, dá umas cinco voltas e desacelera até o ponteiro parar no tema; o ponteiro
// bate em cada pino ("ticks", para a catraca do som) e as lâmpadas da borda correm enquanto ela gira.
function disco(c, cx, cy, R, th, p, kf, fantasma) {
  const a = p.a;
  for (let i = 0; i < 8; i++) {
    const m = -Math.PI / 2 + i * a + th;
    c.beginPath(); c.moveTo(cx, cy); c.arc(cx, cy, R, m - a / 2, m + a / 2); c.closePath(); c.fillStyle = CORES[i][0]; c.fill();
    c.save(); c.translate(cx, cy); c.rotate(m + Math.PI / 2);
    icone(c, i, 0, -R * .56, R * .085, CORES[i][1]);
    nomeTema(c, i, 0, -R * .8, R * .46, R * .082, CORES[i][1]);
    c.restore();
    if (!fantasma && kf > 0 && i !== p.alvo) {
      c.beginPath(); c.moveTo(cx, cy); c.arc(cx, cy, R, m - a / 2, m + a / 2); c.closePath(); c.fillStyle = `rgba(0,0,0,${.62 * kf})`; c.fill();
    }
  }
  c.beginPath();
  for (let i = 0; i < 8; i++) { const m = -Math.PI / 2 + (i + .5) * a + th;
    c.moveTo(cx + Math.cos(m) * R * .17, cy + Math.sin(m) * R * .17); c.lineTo(cx + Math.cos(m) * R, cy + Math.sin(m) * R); }
  c.lineWidth = Math.max(1, R * .008); c.strokeStyle = "rgba(0,0,0,.45)"; c.stroke();
  for (let i = 0; i < 8; i++) { const m = -Math.PI / 2 + (i + .5) * a + th;
    c.beginPath(); c.arc(cx + Math.cos(m) * R * .965, cy + Math.sin(m) * R * .965, R * .02, 0, TAU); c.fillStyle = "#F4F4F2"; c.fill(); }
}
const RODA = {
  rotulo: "TEMA",
  planejar(r, alvo) {
    const a = TAU / 8, ti = .3, ts = 5.1 + r() * .2;
    const th0 = r() * TAU, delta = (r() - .5) * .6 * a;
    const D = TAU * 5 + mod(-alvo * a - delta - th0, TAU);
    const solta = t => th0 + D * (1 - Math.pow(1 - clamp((t - ti) / (ts - ti)), 3));
    const giro = t => t <= 0 ? th0 : t < ti ? th0 - .09 * Math.sin(Math.PI * t / ti) : solta(t);
    const vel = t => t > ti && t < ts ? 3 * D / (ts - ti) * Math.pow(1 - (t - ti) / (ts - ti), 2) : 0;
    return { alvo, a, ti, ts, giro, vel, ticks: cruzamentos(solta, a, -a / 2, ti, ts) };
  },
  desenhar(c, L, t, p) {
    const { x, y, s } = L.obj, R = s * .42, cx = x + s / 2, cy = y + s * .54;
    const th = p.giro(t), w = p.vel(t), kf = clamp((t - p.ts) / .4);
    c.beginPath(); c.arc(cx, cy, R * 1.085, 0, TAU); c.fillStyle = "#15171b"; c.fill();
    c.lineWidth = Math.max(1, R * .012); c.strokeStyle = "#2A2D33"; c.stroke();
    for (let k = 0; k < 24; k++) {
      const an = (k + .5) / 24 * TAU;
      const acesa = t > 0 && t < p.ts ? (k + Math.floor(t * 7)) % 3 === 0 : t >= p.ts && (k + Math.floor(t * 3)) % 2 === 0;
      lampada(c, cx + Math.cos(an) * R * 1.045, cy + Math.sin(an) * R * 1.045, R * .017, acesa);
    }
    disco(c, cx, cy, R, th, p, kf, false);
    const n = Math.min(3, Math.floor(w / 6));  // o rastro quando gira rápido
    if (n) { c.save(); c.globalAlpha = .22; for (let j = 1; j <= n; j++) disco(c, cx, cy, R, th - j * w / 110, p, 0, true); c.restore(); }
    if (kf > 0) {
      const m = -Math.PI / 2 + p.alvo * p.a + th;
      c.save(); c.beginPath(); c.moveTo(cx, cy); c.arc(cx, cy, R, m - p.a / 2, m + p.a / 2); c.closePath();
      c.lineWidth = R * .03; c.strokeStyle = rgba("#FFD100", kf); c.shadowColor = "#FFD100"; c.shadowBlur = R * .08 * kf; c.stroke(); c.restore();
    }
    c.beginPath(); c.arc(cx, cy, R * .17, 0, TAU); c.fillStyle = "#000"; c.fill(); c.lineWidth = R * .022; c.strokeStyle = "#FFD100"; c.stroke();
    estrela(c, cx, cy + R * .008, R * .1, "#FFD100");
    // O ponteiro: o pino que chega o empurra para o lado do giro; depois de passar, ele volta balançando.
    const d = mod(th + p.a / 2, p.a), wv = .35 * p.a;
    const beta = d > p.a - wv ? .5 * (1 - (p.a - d) / wv) : -.22 * Math.exp(-d / (.12 * p.a)) * Math.cos(d / (.035 * p.a));
    c.save(); c.translate(cx, cy - R * 1.12); c.rotate(-beta);
    c.beginPath(); c.moveTo(-R * .06, 0); c.quadraticCurveTo(-R * .06, R * .1, 0, R * .21); c.quadraticCurveTo(R * .06, R * .1, R * .06, 0);
    c.arc(0, 0, R * .06, 0, Math.PI, true); c.closePath();
    c.fillStyle = "#FFD100"; c.fill(); c.lineWidth = Math.max(1, R * .012); c.strokeStyle = "#000"; c.stroke();
    c.beginPath(); c.arc(0, 0, R * .022, 0, TAU); c.fillStyle = "#000"; c.fill(); c.restore();
  },
};

// ---------------------------------------------------------------- 1. Roleta de cassino
// Vista de cima: a roda gira devagar para um lado e a bolinha corre para o outro, perde força, cai ("tdef", os
// defletores), quica por cima das casas ("quiques") e assenta numa das duas casas do tema, no instante ts.
const ORDEM_CASSINO = [0, 1, 2, 3, 4, 5, 6, 7, 4, 7, 2, 5, 0, 3, 6, 1];  // 16 casas, duas por tema, nunca iguais lado a lado
const CASSINO = {
  rotulo: "TEMA",
  planejar(r, alvo) {
    const a = TAU / 16, casas = [];
    ORDEM_CASSINO.forEach((tm, j) => { if (tm === alvo) casas.push(j); });
    const casa = casas[Math.floor(r() * casas.length)];
    const ts = 5.0 + r() * .15, tq = 2.4 + r() * .2, tb0 = 3.15 + r() * .1;
    const rho0 = r() * TAU, w0 = 1.3;
    const rotor = t => rho0 - (w0 * t - .04 * t * t);
    const P = 2.3, D = TAU * 5 + r() * TAU, psiF = casa * a + (r() - .5) * .2 * a;
    const psi = t => t >= ts ? psiF : psiF - D * Math.pow(1 - clamp(t / ts), P);  // a bolinha em relação à roda
    const H = [.85, .5, .3, .16, .08, .03], sq = H.map(Math.sqrt), soma = sq.reduce((m, n) => m + n, 0);
    const quiques = [tb0]; sq.forEach(q => quiques.push(quiques[quiques.length - 1] + (ts - tb0) * q / soma));
    const Rt = .885, Rp = .5, Rd = .645;
    const raio = t => {
      if (t < tq) return Rt + .006 * Math.sin(t * 9);
      if (t < tb0) { const k = (t - tq) / (tb0 - tq); return Rt - (Rt - Rp) * k * k; }
      if (t < ts) { let i = 0; while (i < 5 && t >= quiques[i + 1]) i++;
        const k = (t - quiques[i]) / (quiques[i + 1] - quiques[i]); return Rp + H[i] * (Rd - Rp) * Math.sin(Math.PI * clamp(k)); }
      return Rp;
    };
    const altura = t => t >= tb0 && t < ts ? (raio(t) - Rp) / (Rd - Rp) : 0;
    const vel = t => -(w0 - .08 * t) + (t < ts ? D * P / ts * Math.pow(1 - clamp(t / ts), P - 1) : 0);
    const tdef = tq + Math.sqrt((Rt - .76) / (Rt - Rp)) * (tb0 - tq);
    return { alvo, casa, a, ts, tq, tb0, rotor, psi, raio, altura, vel, quiques, tdef, v0: vel(0) };
  },
  desenhar(c, L, t, p) {
    const { x, y, s } = L.obj, R = s * .47, cx = x + s / 2, cy = y + s / 2;
    const rho = p.rotor(t), kf = clamp((t - p.ts) / .4), a = p.a;
    const scr = al => al + rho - Math.PI / 2;
    let g = c.createRadialGradient(cx, cy, R * .55, cx, cy, R);
    g.addColorStop(0, "#08090b"); g.addColorStop(.8, "#1b1d22"); g.addColorStop(1, "#0c0d0f");
    c.beginPath(); c.arc(cx, cy, R, 0, TAU); c.fillStyle = g; c.fill(); c.lineWidth = R * .02; c.strokeStyle = "#2A2D33"; c.stroke();
    c.beginPath(); c.arc(cx, cy, R * .885, 0, TAU); c.lineWidth = R * .085; c.strokeStyle = "#202328"; c.stroke();
    c.beginPath(); c.arc(cx, cy, R * .93, 0, TAU); c.lineWidth = Math.max(1, R * .006); c.strokeStyle = "#3a3d44"; c.stroke();
    for (let k = 0; k < 8; k++) {
      const an = (k + .5) / 8 * TAU;
      c.save(); c.translate(cx + Math.cos(an) * R * .775, cy + Math.sin(an) * R * .775); c.rotate(an + Math.PI / 2);
      c.beginPath(); c.moveTo(-R * .04, 0); c.lineTo(0, -R * .014); c.lineTo(R * .04, 0); c.lineTo(0, R * .014); c.closePath();
      c.fillStyle = "#A0A4AB"; c.fill(); c.restore();
    }
    const R1 = R * .7, R2 = R * .58, R3 = R * .42;
    const anel = (j, r1, r2) => { const a0 = scr(j * a - a / 2), a1 = a0 + a; c.beginPath(); c.arc(cx, cy, r1, a0, a1); c.arc(cx, cy, r2, a1, a0, true); c.closePath(); };
    for (let j = 0; j < 16; j++) {
      const tm = ORDEM_CASSINO[j];
      anel(j, R1, R2); c.fillStyle = CORES[tm][0]; c.fill();
      anel(j, R2, R3); c.fillStyle = ESCURO[tm]; c.fill();
      c.save(); c.translate(cx, cy); c.rotate(scr(j * a) + Math.PI / 2);
      texto(c, ABREV[tm], 0, -(R1 + R2) / 2, { px: R * .058, peso: 900, cor: CORES[tm][1], alinhar: "center", base: "middle" });
      c.restore();
      if (kf > 0 && j !== p.casa) { anel(j, R1, R3); c.fillStyle = `rgba(0,0,0,${.6 * kf})`; c.fill(); }
    }
    c.beginPath();
    for (let j = 0; j < 16; j++) { const an = scr(j * a - a / 2);
      c.moveTo(cx + Math.cos(an) * R3, cy + Math.sin(an) * R3); c.lineTo(cx + Math.cos(an) * R1, cy + Math.sin(an) * R1); }
    for (const rk of [R1, R2, R3]) { c.moveTo(cx + rk, cy); c.arc(cx, cy, rk, 0, TAU); }
    c.lineWidth = Math.max(1, R * .007); c.strokeStyle = "#C9CDD3"; c.stroke();
    if (kf > 0) { anel(p.casa, R1, R3); c.save(); c.lineWidth = R * .022; c.strokeStyle = rgba("#FFD100", kf);
      c.shadowColor = "#FFD100"; c.shadowBlur = R * .06 * kf; c.stroke(); c.restore(); }
    g = c.createRadialGradient(cx - R * .1, cy - R * .1, 0, cx, cy, R3); g.addColorStop(0, "#30333a"); g.addColorStop(1, "#0b0c0e");
    c.beginPath(); c.arc(cx, cy, R3 * .97, 0, TAU); c.fillStyle = g; c.fill();
    c.save(); c.translate(cx, cy); c.rotate(rho);
    for (let k = 0; k < 4; k++) {
      c.rotate(TAU / 4); rr(c, -R * .017, -R * .27, R * .034, R * .27, R * .017); c.fillStyle = "#C9CDD3"; c.fill();
      c.beginPath(); c.arc(0, -R * .27, R * .032, 0, TAU); c.fillStyle = "#FFD100"; c.fill();
    }
    c.beginPath(); c.arc(0, 0, R * .075, 0, TAU); c.fillStyle = "#C9CDD3"; c.fill();
    c.beginPath(); c.arc(0, 0, R * .035, 0, TAU); c.fillStyle = "#FFD100"; c.fill();
    c.restore();
    const ponto = tt => { const an = p.psi(tt) + p.rotor(tt) - Math.PI / 2, rk = p.raio(tt) * R; return [cx + Math.cos(an) * rk, cy + Math.sin(an) * rk]; };
    if (t > 0 && t < p.tb0) for (let k = 6; k >= 1; k--) {
      const tt = t - k * .014; if (tt < 0) continue;
      const [bx, by] = ponto(tt);
      c.beginPath(); c.arc(bx, by, R * .03 * (1 - k * .06), 0, TAU); c.fillStyle = `rgba(244,244,242,${.12 * (1 - k / 7)})`; c.fill();
    }
    const h = p.altura(t), [bx, by] = ponto(t), br = R * .032 * (1 + .35 * h);
    c.beginPath(); c.arc(bx + R * (.01 + .03 * h), by + R * (.014 + .04 * h), br, 0, TAU); c.fillStyle = "rgba(0,0,0,.55)"; c.fill();
    g = c.createRadialGradient(bx - br * .35, by - br * .35, br * .1, bx, by, br);
    g.addColorStop(0, "#fff"); g.addColorStop(.6, "#dfe2e6"); g.addColorStop(1, "#8b9099");
    c.beginPath(); c.arc(bx, by, br, 0, TAU); c.fillStyle = g; c.fill();
  },
};

// ---------------------------------------------------------------- 2. Linha Qualquer (metrô)
// A linha circular ★ tem uma estação por tema, cada uma ligada à linha da cor dele. O trem acelera, dá três voltas e
// freia com desaceleração constante até parar na estação do tema; "juntas" são as juntas dos trilhos e "passagens", os
// instantes em que ele passa por cada estação.
const MW = .86, MH = .78, MRC = .14;  // a linha, em frações do quadrado
const GEO = (() => {
  const x0 = -MW / 2, y0 = -MH / 2, lx = MW - 2 * MRC, ly = MH - 2 * MRC, q = Math.PI * MRC / 2;
  const segs = [
    { reta: true, x: x0 + MRC, y: y0, dx: 1, dy: 0, len: lx },
    { cx: x0 + MW - MRC, cy: y0 + MRC, a0: -Math.PI / 2, len: q },
    { reta: true, x: x0 + MW, y: y0 + MRC, dx: 0, dy: 1, len: ly },
    { cx: x0 + MW - MRC, cy: y0 + MH - MRC, a0: 0, len: q },
    { reta: true, x: x0 + MW - MRC, y: y0 + MH, dx: -1, dy: 0, len: lx },
    { cx: x0 + MRC, cy: y0 + MH - MRC, a0: Math.PI / 2, len: q },
    { reta: true, x: x0, y: y0 + MH - MRC, dx: 0, dy: -1, len: ly },
    { cx: x0 + MRC, cy: y0 + MRC, a0: Math.PI, len: q },
  ];
  let acc = 0; for (const g of segs) { g.ini = acc; acc += g.len; }
  const L = acc;
  const ponto = sig => {
    sig = mod(sig, L);
    for (const g of segs) if (sig <= g.ini + g.len) {
      const d = sig - g.ini;
      if (g.reta) return { x: g.x + g.dx * d, y: g.y + g.dy * d, ang: Math.atan2(g.dy, g.dx) };
      const an = g.a0 + d / MRC; return { x: g.cx + Math.cos(an) * MRC, y: g.cy + Math.sin(an) * MRC, ang: an + Math.PI / 2 };
    }
    return { x: x0 + MRC, y: y0, ang: 0 };
  };
  const est = [], fora = [];
  [[0, [0, -1]], [2, [1, 0]], [4, [0, 1]], [6, [-1, 0]]].forEach(([k, n]) => [.25, .75].forEach(f => { est.push(segs[k].ini + segs[k].len * f); fora.push(n); }));
  return { L, ponto, est, fora };
})();
const LINHA = {
  rotulo: "PRÓXIMA ESTAÇÃO",
  planejar(r, alvo) {
    const u0 = r(), ts = 5.2 + r() * .15, ta = .7, tb = ts - 2.4 - r() * .3, B = ts - tb;
    const D = 3 + mod(GEO.est[alvo] / GEO.L - u0, 1);
    const vmax = D / (ta / 2 + (tb - ta) + B / 2);
    const pos = t => {
      if (t <= 0) return u0;
      if (t < ta) return u0 + vmax * t * t / (2 * ta);
      if (t < tb) return u0 + vmax * ta / 2 + vmax * (t - ta);
      if (t < ts) { const k = t - tb; return u0 + vmax * ta / 2 + vmax * (tb - ta) + vmax * (k - k * k / (2 * B)); }
      const k = t - ts; return u0 + D + .0035 * Math.exp(-k * 6) * Math.sin(k * 14);  // o tranco da parada
    };
    const vel = t => t <= 0 ? 0 : t < ta ? vmax * t / ta : t < tb ? vmax : t < ts ? vmax * (1 - (t - tb) / B) : 0;
    return { alvo, ts, pos, vel, vmax,
             passagens: GEO.est.map(e => cruzamentos(pos, 1, e / GEO.L, 0, ts)),
             juntas: cruzamentos(pos, 1 / 14, .02, 0, ts) };
  },
  desenhar(c, L, t, p) {
    const { x, y, s } = L.obj, cx = x + s / 2, cy = y + s / 2, G = GEO, kf = clamp((t - p.ts) / .4);
    const P = sig => { const q = G.ponto(sig); return { x: cx + q.x * s, y: cy + q.y * s, ang: q.ang }; };
    c.lineCap = "round";
    G.est.forEach((e, i) => {
      const q = P(e), [fx, fy] = G.fora[i];
      c.globalAlpha = kf > 0 && i !== p.alvo ? 1 - .7 * kf : 1;
      c.beginPath(); c.moveTo(q.x, q.y); c.lineTo(q.x + fx * s * .085, q.y + fy * s * .085);
      c.lineWidth = s * .026; c.strokeStyle = CORES[i][0]; c.stroke();
    });
    c.globalAlpha = 1; c.lineCap = "butt";
    rr(c, cx - MW / 2 * s, cy - MH / 2 * s, MW * s, MH * s, MRC * s); c.lineWidth = s * .03; c.strokeStyle = "#34373e"; c.stroke();
    const pt = p.pos(t), rast = .05 + .32 * p.vel(t) / p.vmax, luz = 1 - .8 * kf, N = 30;
    for (let k = 0; k < N; k++) {
      const f0 = pt - rast * k / N, f1 = pt - rast * (k + 1) / N;
      const q0 = P(f0 * G.L), qm = P((f0 + f1) / 2 * G.L), q1 = P(f1 * G.L);
      c.beginPath(); c.moveTo(q0.x, q0.y); c.lineTo(qm.x, qm.y); c.lineTo(q1.x, q1.y);
      c.lineWidth = s * .03; c.strokeStyle = rgba("#FFD100", .9 * luz * Math.pow(1 - k / N, 1.6)); c.stroke();
    }
    G.est.forEach((e, i) => {
      const q = P(e), lado = i >> 1;
      let ult = null; for (const tp of p.passagens[i]) if (tp <= t) ult = tp;
      const brilho = ult == null ? 0 : Math.max(0, 1 - (t - ult) / .45), ka = i === p.alvo ? kf : 0;
      if (brilho > 0 || ka > 0) {
        const pul = ka > 0 ? .5 + .5 * Math.sin((t - p.ts) * 7) : 0;
        c.beginPath(); c.arc(q.x, q.y, s * (.034 + .014 * ka + .006 * pul), 0, TAU); c.fillStyle = rgba(CORES[i][0], Math.max(brilho, ka) * .9); c.fill();
      }
      c.beginPath(); c.arc(q.x, q.y, s * .019, 0, TAU); c.fillStyle = "#F4F4F2"; c.fill(); c.lineWidth = s * .007; c.strokeStyle = "#000"; c.stroke();
      const off = s * .05; let lx = q.x, ly = q.y, al = "center", bl = "middle";
      if (lado === 0) { ly += off; bl = "top"; } else if (lado === 1) { lx -= off; al = "right"; }
      else if (lado === 2) { ly -= off; bl = "bottom"; } else { lx += off; al = "left"; }
      c.globalAlpha = kf > 0 && i !== p.alvo ? 1 - .65 * kf : 1;
      texto(c, TEMAS[i], lx, ly, { px: s * .036 * (1 + .12 * ka), peso: 800, cor: ka > .5 ? "#FFD100" : "#F4F4F2", alinhar: al, base: bl,
                                  maxW: lado % 2 ? s * .33 : s * .27 });
      c.globalAlpha = 1;
    });
    const q = P(pt * G.L);
    c.save(); c.translate(q.x, q.y); c.rotate(q.ang);
    rr(c, -s * .05, -s * .021, s * .1, s * .042, s * .021); c.fillStyle = "#F4F4F2"; c.fill(); c.lineWidth = s * .006; c.strokeStyle = "#000"; c.stroke();
    rr(c, -s * .032, -s * .009, s * .052, s * .018, s * .006); c.fillStyle = "#1b1d22"; c.fill();
    c.beginPath(); c.arc(s * .038, 0, s * .008, 0, TAU); c.fillStyle = "#FFD100"; c.fill();
    c.restore();
    c.beginPath(); c.arc(cx, cy, s * .07, 0, TAU); c.fillStyle = "#FFD100"; c.fill();
    estrela(c, cx, cy + s * .004, s * .043, "#000");
  },
};

// ---------------------------------------------------------------- 3. Caça-níquel
// A alavanca desce e três tambores giram; param um de cada vez (o terceiro bem devagar) e os três mostram o tema na
// linha do prêmio. Cada tambor guarda a hora em que para (tj) e os cliques de cada casa que passa.
const FITAS = [[0, 1, 2, 3, 4, 5, 6, 7], [3, 6, 1, 4, 7, 2, 5, 0], [5, 2, 7, 4, 1, 6, 3, 0]];
function celula(c, cx, cy, w, h, i, s) {
  rr(c, cx - w / 2, cy - h / 2, w, h, s * .014); c.fillStyle = CORES[i][0]; c.fill();
  icone(c, i, cx, cy - h * .14, h * .22, CORES[i][1]);
  nomeTema(c, i, cx, cy + h * .29, w * .88, h * .15, CORES[i][1]);
}
function tambor(c, rx, ry, rw, rh, chh, R, fita, t, s) {
  c.save(); c.beginPath(); c.rect(rx, ry, rw, rh); c.clip();
  c.fillStyle = "#15171b"; c.fillRect(rx, ry, rw, rh);
  const yv = R.pos(t), vel = (R.pos(t + .005) - R.pos(Math.max(0, t - .005))) / .01;
  const am = Math.abs(vel) > 5 ? 3 : 1, cyc = ry + rh / 2;
  if (am > 1) c.globalAlpha = .42;
  for (let m = 0; m < am; m++) {
    const yy = yv - m * vel * .011, k0 = Math.floor(yy) - 2;
    for (let k = k0; k <= k0 + 4; k++) celula(c, rx + rw / 2, cyc + (yy - k) * chh, rw * .9, chh * .88, fita[mod(k, 8)], s);
  }
  c.globalAlpha = 1;
  const g = c.createLinearGradient(0, ry, 0, ry + rh);
  g.addColorStop(0, "rgba(0,0,0,.85)"); g.addColorStop(.26, "rgba(0,0,0,0)"); g.addColorStop(.74, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,.85)");
  c.fillStyle = g; c.fillRect(rx, ry, rw, rh);
  c.restore();
}
const NIQUEL = {
  rotulo: "TEMA",
  planejar(r, alvo) {
    const v = 15, ta = .25, P = [2, 2, 3], dd = [.42, .42, 1.35];
    const paradas = [2.8 + r() * .1, 3.7 + r() * .1, 5.15 + r() * .1];
    const rolos = FITAS.map((fita, j) => {
      const t0 = .34 + j * .06, tj = paradas[j], d = dd[j], Pj = P[j];
      const yf = fita.indexOf(alvo) + 800, Y = v * ((tj - d - t0 - ta) + ta / 2 + d / Pj), y0 = yf - Y;
      const pos = t => {
        if (t <= t0) return y0 - .1 * Math.sin(Math.PI * clamp(t / t0));
        if (t < t0 + ta) { const e = t - t0; return y0 + v * e * e / (2 * ta); }
        if (t < tj - d) return y0 + v * ta / 2 + v * (t - t0 - ta);
        if (t < tj) return yf - v * d / Pj * Math.pow((tj - t) / d, Pj);
        const k = t - tj; return yf + .16 * Math.sin(Math.PI * Math.min(k / .14, 1)) * Math.exp(-k / .09);  // o tranco
      };
      return { t0, tj, pos, cliques: cruzamentos(pos, 1, .5, t0, tj) };
    });
    return { alvo, rolos, ts: paradas[2] };
  },
  desenhar(c, L, t, p) {
    const { x, y, s } = L.obj;
    const cw = s * .76, gx = x + s * .01, cy = y + s * .5, cabT = cy - s * .37, cabH = s * .74;
    const chh = s * .16, rw = s * .21, gap = s * .018, winW = 3 * rw + 2 * gap, winH = 3 * chh;
    const cxc = gx + cw / 2, winX = cxc - winW / 2, winY = cy - winH / 2 + s * .035, ly = winY + winH / 2;
    const kf = clamp((t - p.ts) / .3);
    rr(c, gx, cabT, cw, cabH, s * .045); c.fillStyle = "#101114"; c.fill(); c.lineWidth = s * .006; c.strokeStyle = "#2A2D33"; c.stroke();
    const ins = s * .024, bx0 = gx + ins, by0 = cabT + ins, bw = cw - 2 * ins, bh = cabH - 2 * ins, per = 2 * (bw + bh), NB = 30;
    for (let k = 0; k < NB; k++) {
      let d = k / NB * per, px, py;
      if (d < bw) { px = bx0 + d; py = by0; }
      else if ((d -= bw) < bh) { px = bx0 + bw; py = by0 + d; }
      else if ((d -= bh) < bw) { px = bx0 + bw - d; py = by0 + bh; }
      else { d -= bw; px = bx0; py = by0 + bh - d; }
      const acesa = t > .3 && t < p.ts ? (k + Math.floor(t * 8)) % 4 < 2 : t >= p.ts && (k + Math.floor(t * 3)) % 2 === 0;
      lampada(c, px, py, s * .0085, acesa);
    }
    texto(c, "TEMA QUALQUER", cxc, cabT + s * .097, { px: s * .045, peso: 900, cor: "#FFD100", alinhar: "center", base: "middle", esp: .12, maxW: cw * .62 });
    estrela(c, gx + cw * .1, cabT + s * .095, s * .022, "#FFD100"); estrela(c, gx + cw * .9, cabT + s * .095, s * .022, "#FFD100");
    rr(c, winX - s * .016, winY - s * .016, winW + s * .032, winH + s * .032, s * .02); c.fillStyle = "#000"; c.fill();
    p.rolos.forEach((R, j) => tambor(c, winX + j * (rw + gap), winY, rw, winH, chh, R, FITAS[j], t, s));
    // A linha do prêmio: setas dos dois lados; cada tambor parado ganha moldura, amarela quando os três batem.
    c.fillStyle = rgba("#FFD100", .55 + .45 * kf);
    c.beginPath(); c.moveTo(winX - s * .04, ly - s * .022); c.lineTo(winX - s * .04, ly + s * .022); c.lineTo(winX - s * .019, ly); c.closePath(); c.fill();
    c.beginPath(); c.moveTo(winX + winW + s * .04, ly - s * .022); c.lineTo(winX + winW + s * .04, ly + s * .022); c.lineTo(winX + winW + s * .019, ly); c.closePath(); c.fill();
    p.rolos.forEach((R, j) => {
      if (t < R.tj) return;
      const rx = winX + j * (rw + gap);
      rr(c, rx + rw * .05, ly - chh * .44, rw * .9, chh * .88, s * .014);
      c.save(); c.lineWidth = s * .008;
      if (kf > 0) { c.strokeStyle = rgba("#FFD100", .5 + .5 * kf); c.shadowColor = "#FFD100"; c.shadowBlur = s * .03 * kf; }
      else c.strokeStyle = "rgba(244,244,242,.55)";
      c.stroke(); c.restore();
    });
    const fi = t <= 0 ? 0 : t < .28 ? 1.95 * easeIn(t / .28) : t < .8 ? 1.95 * (1 - easeOut((t - .28) / .52)) : 0;
    const pvx = gx + cw + s * .032, pvy = cy + s * .05;
    rr(c, gx + cw - s * .004, pvy - s * .045, s * .05, s * .09, s * .012); c.fillStyle = "#2A2D33"; c.fill();
    c.save(); c.translate(pvx, pvy); c.rotate(.15 + fi);
    c.beginPath(); c.moveTo(0, 0); c.lineTo(0, -s * .2); c.lineWidth = s * .016; c.lineCap = "round"; c.strokeStyle = "#A0A4AB"; c.stroke();
    c.beginPath(); c.arc(0, -s * .2, s * .034, 0, TAU); c.fillStyle = "#FFD100"; c.fill();
    c.beginPath(); c.arc(-s * .01, -s * .21, s * .01, 0, TAU); c.fillStyle = "rgba(255,255,255,.6)"; c.fill();
    c.restore();
  },
};

// ---------------------------------------------------------------- o que arena-contagem.js usa
const ROLETAS = [RODA, CASSINO, LINHA, NIQUEL];
export const NOMES_ROLETAS = ["Roda da fortuna", "Roleta de cassino", "Linha Qualquer", "Caça-níquel"];
export const QUANTAS_ROLETAS = ROLETAS.length;
// O plano da roleta k para a contagem de chave "chave", parando no tema (nome); null se o tema não for um dos oito.
export function planejarRoleta(k, chave, tema) {
  const alvo = TEMAS.indexOf(tema);
  if (alvo < 0 || !ROLETAS[k]) return null;
  return ROLETAS[k].planejar(aleatorio((chave ^ 0x2545F491) >>> 0), alvo);
}
// Desenha a roleta k no canvas (do tamanho da tela), t segundos depois do começo da contagem de "total" segundos. A cena
// usa uma região um pouco menor que a tela, centrada; o fundo é o escurecimento da própria contagem.
export function desenharRoleta(cv, k, plano, t, total) {
  const w = cv.clientWidth, h = cv.clientHeight;
  if (w < 10 || h < 10 || !plano) return;
  const dpr = Math.min(1.5, window.devicePixelRatio || 1), W = Math.round(w * dpr), H = Math.round(h * dpr);
  if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
  const c = cv.getContext("2d");
  c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, w, h);
  const rw = w * .94, rh = h * (w > h ? .84 : .9);
  c.translate((w - rw) / 2, (h - rh) / 2);
  const L = layout(rw, rh), tt = clamp(t, 0, total);
  ROLETAS[k].desenhar(c, L, tt, plano);
  desenharInfo(c, L, tt, plano, ROLETAS[k].rotulo, total);
}
