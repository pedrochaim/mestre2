// Arena: quem acertou e quem errou (2026-11-26). Depois da revelação da resposta (no fim do suspense, se ele estiver ligado),
// uma animação de 3,6 s mostra o resultado da rodada, antes da contagem da próxima pergunta: na tela grande, todos os
// jogadores (arena.html); no celular, só o próprio (jogar.html). São quatro, sorteadas pela chave da rodada, a mesma em
// todos os aparelhos: dois lados (acertaram em verde, erraram em vermelho), carimbo (CERTO ou ERRADO em cada ficha),
// catraca (quem acertou passa para a plataforma do metrô) e holofotes (um foco sobre cada um que acertou). Escolhidas
// entre cinco protótipos; a quinta (fogos e chuva) ficou de fora.
// Cada animação é desenhada num canvas do tamanho da tela, a cada quadro, pelo tempo desde o começo. Os instantes de cada
// jogador ficam na "cena" (j.t), que o som (arena-suspense.js, somResultado) também segue.

import { avatarValido, avatarDoJogador } from "./arena-avatares.js";

export const DURACAO = 3.6;  // segundos de animação; depois, meio segundo para sumir
const SAIDA = .35;
const CERTO = "#3DDC84", ERRADO = "#FF6B57", AMARELO = "#FFD100", BRANCO = "#F4F4F2";  // --certo e --errado da tela grande
const PALETA = ["#00A84F", "#8CC63F", "#F7941D", "#E8412C", "#E4007C", "#8E4FC9", "#00A3E0", "#2F5BEA"];
const TAU = Math.PI * 2;
const FONTE = 'Overpass, system-ui, -apple-system, "Segoe UI", sans-serif';
const F = (peso, px) => `${peso} ${Math.max(1, px).toFixed(1)}px ${FONTE}`;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const easeOut = x => 1 - (1 - x) * (1 - x), easeIn = x => x * x;
const easeOutBack = x => { const c1 = 1.9, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };
const quique = x => { const n = 7.5625, d = 2.75;
  if (x < 1 / d) return n * x * x; if (x < 2 / d) return n * (x -= 1.5 / d) * x + .75;
  if (x < 2.5 / d) return n * (x -= 2.25 / d) * x + .9375; return n * (x -= 2.625 / d) * x + .984375; };
const hexRgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const rgba = (h, a) => `rgba(${hexRgb(h).join(",")},${clamp(a)})`;
const TEM_ESP = typeof CanvasRenderingContext2D !== "undefined" && "letterSpacing" in CanvasRenderingContext2D.prototype;
const iniciais = nome => String(nome).split(/\s+/).filter(Boolean).slice(0, 2).map(p => p[0]).join("").toUpperCase();
function aleatorio(semente) {  // mulberry32, como em linear.js
  let a = semente >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// ---------------------------------------------------------------- os avatares
// O avatar do app (arena-avatares.js: anel na cor do jogador e as iniciais) vira uma imagem para o canvas. Os personalizados
// apontam para um arquivo, que um SVG dentro de <img> não carrega: esses são montados aqui, com a foto recortada no círculo.
const imagens = new Map();
function imagemDe(j) {
  const chave = `${j.avatar}|${j.cor[0]}|${j.nome}`;
  if (imagens.has(chave)) return imagens.get(chave);
  let r = null;
  const svg = avatarValido(j.avatar) ? avatarDoJogador(j.avatar, j.cor, j.nome, 'xmlns="http://www.w3.org/2000/svg" width="200" height="200"') : "";
  const href = svg.match(/<image href="([^"]+)"/)?.[1];
  if (href) { const im = new Image(); im.src = href.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"); r = { foto: im }; }
  else if (svg) { const im = new Image(); im.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg); r = { svg: im }; }
  imagens.set(chave, r);
  return r;
}
const pronta = im => im && im.complete && im.naturalWidth > 0;
function desenhoDoAvatar(c, j, s) {
  const im = imagemDe(j);
  if (pronta(im?.svg)) return c.drawImage(im.svg, -s / 2, -s / 2, s, s);
  c.beginPath(); c.arc(0, 0, s / 2, 0, TAU); c.fillStyle = j.cor[0]; c.fill();
  if (pronta(im?.foto)) {
    c.beginPath(); c.arc(0, 0, s * .44, 0, TAU); c.fillStyle = "#24241f"; c.fill();
    c.save(); c.clip();
    const f = im.foto, k = Math.max(s * .88 / f.naturalWidth, s * .88 / f.naturalHeight);
    c.drawImage(f, -f.naturalWidth * k / 2, -f.naturalHeight * k / 2, f.naturalWidth * k, f.naturalHeight * k);
    c.restore();
    rr(c, -s * .26, s * .23, s * .52, s * .25, s * .1); c.fillStyle = j.cor[0]; c.fill(); c.lineWidth = s * .025; c.strokeStyle = "#000"; c.stroke();
    texto(c, iniciais(j.nome), 0, s * .36, { px: s * .19, peso: 900, cor: j.cor[1] });
  } else texto(c, iniciais(j.nome), 0, s * .03, { px: s * .36, peso: 900, cor: j.cor[1] });
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
function texto(c, s, x, y, { px, peso = 800, cor = BRANCO, alinhar = "center", base = "middle", esp = 0, maxW } = {}) {
  c.font = F(peso, px);
  if (TEM_ESP) c.letterSpacing = `${esp * px}px`;
  if (maxW) { const w = c.measureText(s).width; if (w > maxW) { px *= maxW / w; c.font = F(peso, px); if (TEM_ESP) c.letterSpacing = `${esp * px}px`; } }
  c.fillStyle = cor; c.textAlign = alinhar; c.textBaseline = base; c.fillText(s, x, y);
  if (TEM_ESP) c.letterSpacing = "0px";
  return px;
}
function avatar(c, j, x, y, s, { alpha = 1, rot = 0, sx = 1, sy = 1, escuro = 0 } = {}) {
  if (alpha <= 0 || s <= 0) return;
  c.save(); c.globalAlpha = alpha; c.translate(x, y); c.rotate(rot); c.scale(sx, sy);
  desenhoDoAvatar(c, j, s);
  if (escuro > 0) { c.beginPath(); c.arc(0, 0, s / 2, 0, TAU); c.fillStyle = `rgba(0,0,0,${escuro})`; c.fill(); }
  c.restore();
}
function nomeEmbaixo(c, j, x, y, s, alpha = 1, cor = BRANCO) {
  c.save(); c.globalAlpha = alpha; texto(c, j.nome, x, y + s * .62, { px: s * .19, peso: 800, cor, maxW: s * 1.4 }); c.restore();
}
// Uma pílula (+1, +2, ✗) que aparece com um pulo: k de 0 (escondida) a 1.
function pilula(c, txt, x, y, px, fundoCor, cor, k) {
  if (!txt || k <= 0) return;
  c.save(); c.translate(x, y); c.scale(k, k);
  c.font = F(900, px); const w = Math.max(c.measureText(txt).width + px * .9, px * 1.5), h = px * 1.45;
  rr(c, -w / 2, -h / 2, w, h, h / 2); c.fillStyle = fundoCor; c.fill(); c.lineWidth = px * .12; c.strokeStyle = "#000"; c.stroke();
  texto(c, txt, 0, px * .08, { px, peso: 900, cor });
  c.restore();
}
// O que a pílula diz: quantas casas o jogador andou (nada, se não andou) ou o ✗ de quem errou, com o −1 da casa ★.
const mais = j => j.casas > 0 ? `+${j.casas}` : j.casas < 0 ? "−1" : null;
const xis = j => j.casas < 0 ? "✗ −1" : "✗";
const pulo = (t, t0, d = .38) => { const x = (t - t0) / d; return x <= 0 ? 0 : x >= 1 ? 1 : easeOutBack(x); };
// Quando todos acertam, quem não anda: o primeiro colocado, os primeiros (empatados na frente) ou ninguém anda (todos
// empatados).
function quemNaoAnda(cena) {
  const p = cena.js.filter(j => j.parado).length;
  return p >= cena.n ? "ninguém anda" : p === 1 ? "o líder não anda" : "os líderes não andam";
}
// O resumo no alto: "4 ACERTARAM · 2 ERRARAM", "TODOS ACERTARAM · O LÍDER NÃO ANDA", "NINGUÉM ACERTOU"; no celular,
// "VOCÊ ACERTOU!" ("TODOS ACERTARAM · VOCÊ NÃO ANDA" para o líder).
function resumo(cena, v = {}) {
  const V = { c1: "ACERTOU", cN: "ACERTARAM", e1: "ERROU", eN: "ERRARAM", tc: "TODOS ACERTARAM", ne: "NINGUÉM ACERTOU",
              vc: "VOCÊ ACERTOU!", ve: "VOCÊ ERROU", ...v };
  const a = cena.certos.length, e = cena.errados.length;
  if (cena.todos && (!cena.celular || cena.js[0].parado))
    return [["TODOS ACERTARAM", CERTO], ["  ·  ", "#5b5f66"], [cena.celular ? "VOCÊ NÃO ANDA" : quemNaoAnda(cena).toUpperCase(), BRANCO]];
  if (cena.celular) return a ? [[V.vc, CERTO]] : cena.js[0].semResposta ? [["SEM RESPOSTA", ERRADO]] : [[V.ve, ERRADO]];
  if (!a) return [[V.ne, ERRADO]];
  if (!e) return [[cena.n === 1 ? `1 ${V.c1}` : V.tc, CERTO]];
  return [[`${a} ${a === 1 ? V.c1 : V.cN}`, CERTO], ["  ·  ", "#5b5f66"], [`${e} ${e === 1 ? V.e1 : V.eN}`, ERRADO]];
}
function cabecalho(c, W, H, partes, k, y = H * .13, cx = W / 2, maxW = W * .92) {
  if (k <= 0) return;
  const u = Math.min(W, H) / 100, px = W > H ? 5.6 * u : 6.6 * u;
  c.save(); c.globalAlpha = clamp(k); c.font = F(900, px); if (TEM_ESP) c.letterSpacing = `${.05 * px}px`;
  const larg = partes.map(([s]) => c.measureText(s).width), total = larg.reduce((m, v) => m + v, 0);
  const esc = Math.min(1, maxW / total);
  c.translate(cx, y + (1 - easeOut(clamp(k))) * px * .6); c.scale(esc, esc);
  let x = -total / 2;
  partes.forEach(([s, cor], i) => { c.fillStyle = cor; c.textAlign = "left"; c.textBaseline = "middle"; c.fillText(s, x, 0); x += larg[i]; });
  if (TEM_ESP) c.letterSpacing = "0px";
  c.restore();
}
function fileira(n, W, H, y, cel) {
  const slot = cel ? Math.min(W * .7, H * .4) : Math.min(W * .88 / n, H * .34);
  return { s: slot * .74, slot, x: i => W / 2 + (i - (n - 1) / 2) * slot, y };
}

// ---------------------------------------------------------------- 0. Dois lados
function confete(c, x0, x1, H, t, t0, semente, n = 70) {
  if (t < t0) return;
  const r = aleatorio(semente), u = H / 100;
  for (let k = 0; k < n; k++) {
    const x = x0 + r() * (x1 - x0), atraso = r() * .5, v = 22 + r() * 30, giro = (r() - .5) * 14, cor = r() < .15 ? BRANCO : PALETA[Math.floor(r() * 8)];
    const tt = t - t0 - atraso; if (tt < 0) { r(); continue; }
    const y = -3 * u + v * u * tt, xx = x + Math.sin(tt * 5 + k) * 2.4 * u, w = (1 + r()) * u;
    if (y > H + 4 * u) continue;
    c.save(); c.translate(xx, y); c.rotate(giro * tt); c.scale(1, Math.cos(tt * 9 + k));
    c.fillStyle = cor; c.fillRect(-w / 2, -w * .35, w, w * .7); c.restore();
  }
}
function grade(m, x0, x1, y0, y1) {
  const cols = m <= 3 ? Math.max(1, m) : m <= 6 ? 3 : m <= 12 ? 4 : 5, linhas = Math.max(1, Math.ceil(m / cols));
  const cw = (x1 - x0) / cols, lh = (y1 - y0) / linhas, s = Math.min(cw * .72, lh * .62);
  return k => { const l = Math.floor(k / cols), naLinha = Math.min(cols, m - l * cols), col = k % cols;
    return { x: (x0 + x1) / 2 + (col - (naLinha - 1) / 2) * cw, y: y0 + (l + .5) * lh - s * .08, s }; };
}
const LADOS = {
  desenhar(c, W, H, t, cena) {
    const u = Math.min(W, H) / 100, kIn = easeOut(clamp(t / .35));
    const lado = (j, p) => {
      if (t < j.t) return;
      if (j.acertou) {
        const k = clamp((t - j.t) / .5), y = p.y - (1 - quique(k)) * (p.y + p.s);
        avatar(c, j, p.x, y, p.s);
        nomeEmbaixo(c, j, p.x, y, p.s);
        pilula(c, mais(j), p.x + p.s * .42, y - p.s * .42, p.s * .17, CERTO, "#000", pulo(t, j.t + .3));
      } else {
        const k = clamp((t - j.t) / .4), y = p.y - (1 - easeIn(k)) * (p.y + p.s), d = clamp((t - j.t - .4) / .45);
        const amassa = k >= 1 ? Math.max(0, .18 * Math.sin(Math.PI * clamp((t - j.t - .4) / .18))) : 0;
        avatar(c, j, p.x, y + p.s * .05 * easeOut(d), p.s, { rot: -.2 * easeOut(d), sx: 1 + amassa, sy: 1 - amassa, escuro: .5 * d });
        nomeEmbaixo(c, j, p.x, y + p.s * .05 * easeOut(d), p.s, 1 - .45 * d);
        pilula(c, xis(j), p.x + p.s * .42, y - p.s * .42, p.s * .16, ERRADO, "#000", pulo(t, j.t + .45));
      }
    };
    if (cena.celular) {
      const j = cena.js[0];
      c.fillStyle = rgba(j.acertou ? CERTO : ERRADO, .14 * kIn); c.fillRect(0, 0, W, H);
      cabecalho(c, W, H, resumo(cena), clamp((t - .15) / .3), H * .16);
      if (j.acertou) confete(c, 0, W, H, t, j.t + .18, 7, 60);
      lado(j, { x: W / 2, y: H * .5, s: Math.min(W * .56, H * .32) });
      return;
    }
    const meio = W / 2;
    c.fillStyle = rgba(CERTO, .12 * kIn); c.fillRect(meio * (kIn - 1), 0, meio, H);
    c.fillStyle = rgba(ERRADO, .11 * kIn); c.fillRect(meio + meio * (1 - kIn), 0, meio, H);
    c.fillStyle = "#2A2D33"; c.fillRect(meio - 1, H * .06, 2, H * .88 * kIn);
    const a = cena.certos.length, e = cena.errados.length, kt = clamp((t - .15) / .3);
    c.save(); c.globalAlpha = kt;
    texto(c, a === 1 ? "ACERTOU" : "ACERTARAM", W * .25, H * .1, { px: 3.2 * u, peso: 900, cor: CERTO, esp: .12 });
    texto(c, e === 1 ? "ERROU" : "ERRARAM", W * .75, H * .1, { px: 3.2 * u, peso: 900, cor: ERRADO, esp: .12 });
    texto(c, a ? String(a) : "ninguém", W * .25, H * .19, { px: (a ? 8 : 4) * u, peso: 900, cor: a ? BRANCO : "#5b5f66" });
    texto(c, e ? String(e) : "ninguém", W * .75, H * .19, { px: (e ? 8 : 4) * u, peso: 900, cor: e ? BRANCO : "#5b5f66" });
    if (cena.todos) texto(c, quemNaoAnda(cena), W * .25, H * .26, { px: 2.6 * u, peso: 800, cor: "#A0A4AB" });
    c.restore();
    const tc = a ? Math.min(...cena.certos.map(j => j.t)) + .18 : 99;
    confete(c, 0, meio, H, t, tc, 11);
    const gc = grade(a, W * .04, meio - W * .04, H * .3, H * .95), ge = grade(e, meio + W * .04, W - W * .04, H * .3, H * .95);
    cena.certos.forEach((j, k) => lado(j, gc(k)));
    cena.errados.forEach((j, k) => lado(j, ge(k)));
  },
};

// ---------------------------------------------------------------- 1. Carimbo
const tintas = new Map();
// A marca do carimbo num canvas à parte: moldura e texto na cor da tinta, com falhas (pontos e riscos apagados).
function marca(txt, cor, w, h, semente) {
  const chave = [txt, cor, Math.round(w), Math.round(h), semente].join("|");
  if (tintas.has(chave)) return tintas.get(chave);
  if (tintas.size > 60) tintas.clear();
  const k = 2, cv = document.createElement("canvas"); cv.width = Math.ceil(w * k); cv.height = Math.ceil(h * k);
  const c = cv.getContext("2d"); c.scale(k, k);
  const lw = h * .08; rr(c, lw, lw, w - 2 * lw, h - 2 * lw, h * .16); c.lineWidth = lw; c.strokeStyle = cor; c.stroke();
  texto(c, txt, w / 2, h / 2 + h * .05, { px: h * .58, peso: 900, cor, esp: .04, maxW: w * .82 });
  c.globalCompositeOperation = "destination-out";
  const r = aleatorio(semente);
  for (let i = 0; i < 90; i++) { c.globalAlpha = .3 + r() * .5; c.beginPath(); c.arc(r() * w, r() * h, r() * h * .03, 0, TAU); c.fill(); }
  for (let i = 0; i < 3; i++) { c.globalAlpha = .25; c.lineWidth = r() * h * .035; c.beginPath(); const y = r() * h; c.moveTo(0, y); c.lineTo(w, y + (r() - .5) * h * .3); c.stroke(); }
  tintas.set(chave, cv);
  return cv;
}
const TINTA_C = "#16A34A", TINTA_E = "#DC2626";
const CARIMBO = {
  desenhar(c, W, H, t, cena) {
    const n = cena.n, cel = cena.celular;
    cabecalho(c, W, H, resumo(cena), clamp((t - .2) / .3), cel ? H * .14 : H * .12);
    const porLinha = cel ? 1 : n > 6 ? Math.ceil(n / 2) : n, linhas = Math.ceil(n / porLinha);
    const slot = cel ? 0 : W * .94 / porLinha;
    const cw = cel ? W * .62 : Math.min(slot * .9, (H * .72 / linhas) / 1.32), ch = cw * 1.3;
    cena.js.forEach((j, i) => {
      const l = Math.floor(i / porLinha), naLinha = Math.min(porLinha, n - l * porLinha), col = i % porLinha;
      const cx = cel ? W / 2 : W / 2 + (col - (naLinha - 1) / 2) * slot;
      const cy = cel ? H * .54 : H * .58 + (l - (linhas - 1) / 2) * ch * 1.08;
      const ti = j.t + .15, entra = easeOut(clamp((t - i * .03) / .3));
      const tremor = t > ti ? Math.sin((t - ti) * 60) * Math.exp(-(t - ti) * 14) * ch * .025 : 0;
      c.save(); c.globalAlpha = entra; c.translate(cx, cy + tremor + (1 - entra) * ch * .2);
      c.rotate(((i * 37) % 7 - 3) * .006);
      c.shadowColor = "rgba(0,0,0,.6)"; c.shadowBlur = cw * .08; c.shadowOffsetY = cw * .03;
      rr(c, -cw / 2, -ch / 2, cw, ch, cw * .06); c.fillStyle = "#E6E7EA"; c.fill(); c.shadowColor = "transparent";
      rr(c, -cw / 2, -ch / 2, cw, ch * .09, cw * .06); c.fillStyle = j.cor[0]; c.fill();
      c.fillRect(-cw / 2, -ch / 2 + ch * .05, cw, ch * .04);
      const s = cw * .58, ya = -ch * .12;
      avatar(c, j, 0, ya, s, { escuro: !j.acertou && t > ti ? .35 * clamp((t - ti) / .3) : 0 });
      texto(c, j.nome, 0, ch * .34, { px: cw * .12, peso: 900, cor: "#15171b", maxW: cw * .86 });
      if (t >= ti) {
        const mw = cw * .96, mh = cw * .34, cm = marca(j.acertou ? "CERTO" : "ERRADO", j.acertou ? TINTA_C : TINTA_E, mw, mh, 30 + i);
        const ang = (((i * 53) % 11) - 5) * .03;
        c.save(); c.translate(0, ya + s * .3); c.rotate(ang); c.globalAlpha = .95 * entra; c.drawImage(cm, -mw / 2, -mh / 2, mw, mh); c.restore();
        pilula(c, j.acertou ? mais(j) : j.casas < 0 ? "−1" : null, cw * .36, -ch * .4, cw * .11, j.acertou ? CERTO : ERRADO, "#000", pulo(t, ti + .12));
      }
      // O carimbo: desce até a ficha, bate e sobe.
      if (t > ti - .16 && t < ti + .2) {
        const desce = t < ti ? (ti - t) / .16 : 0, sobe = t >= ti ? (t - ti) / .2 : 0;
        const dy = -(easeIn(desce) * ch * .7 + easeOut(sobe) * ch * .55), aperta = t >= ti && t < ti + .06 ? .12 : 0;
        c.save(); c.globalAlpha = 1 - sobe * .9; c.translate(0, ya + s * .3 + dy); c.scale(1 + aperta, 1 - aperta);
        const bw = cw * .9, bh = cw * .14;
        rr(c, -bw / 2, -bh, bw, bh, bw * .05); c.fillStyle = "#2A2D33"; c.fill();
        c.fillStyle = j.acertou ? TINTA_C : TINTA_E; c.fillRect(-bw / 2 + bw * .03, -bh * .22, bw * .94, bh * .22);
        rr(c, -cw * .09, -bh - cw * .32, cw * .18, cw * .32, cw * .05); c.fillStyle = "#3a3d44"; c.fill();
        c.beginPath(); c.arc(0, -bh - cw * .36, cw * .13, 0, TAU); c.fillStyle = "#4a4e56"; c.fill();
        c.restore();
      }
      c.restore();
    });
  },
};

// ---------------------------------------------------------------- 2. Catraca
const CATRACA = {
  desenhar(c, W, H, t, cena) {
    const n = cena.n, cel = cena.celular, u = Math.min(W, H) / 100;
    const yg = cel ? H * .52 : H * .56, slot = cel ? Math.min(W * .8, H * .36) : Math.min(W * .9 / n, H * .34), s = slot * .48;
    const partes = resumo(cena, { c1: "PASSOU", cN: "PASSARAM", e1: "FICOU", eN: "FICARAM", tc: "TODOS PASSARAM", ne: "NINGUÉM PASSOU",
                                  vc: "PODE PASSAR!", ve: "CATRACA TRAVADA" });
    const kp = clamp((t - .1) / .3);
    if (kp > 0) {  // a placa do metrô, com o resumo
      c.save(); c.globalAlpha = kp; const ph = (cel ? 9 : 8.5) * u, pw = cel ? W * .92 : Math.min(W * .8, 110 * u), py = cel ? H * .1 : H * .06;
      rr(c, (W - pw) / 2, py, pw, ph, ph * .18); c.fillStyle = "#101114"; c.fill(); c.lineWidth = Math.max(1, .3 * u); c.strokeStyle = "#3a3d44"; c.stroke();
      c.beginPath(); c.arc((W - pw) / 2 + ph * .55, py + ph / 2, ph * .3, 0, TAU); c.fillStyle = AMARELO; c.fill();
      estrela(c, (W - pw) / 2 + ph * .55, py + ph / 2 + ph * .02, ph * .18, "#000");
      c.restore();
      const x0 = (W - pw) / 2 + ph * 1.05, x1 = (W + pw) / 2 - ph * .35;  // o texto, à direita do símbolo da linha
      cabecalho(c, W, H, partes, kp, py + ph / 2 + ph * .03, (x0 + x1) / 2, x1 - x0);
    }
    // A plataforma (depois das catracas) e a faixa amarela da borda.
    c.fillStyle = "#0d0e10"; c.fillRect(0, H * (cel ? .22 : .2), W, yg - H * (cel ? .22 : .2) - slot * .2);
    c.fillStyle = rgba(AMARELO, .7); c.fillRect(0, H * (cel ? .22 : .2), W, Math.max(2, .6 * u));
    cena.js.forEach((j, i) => {
      const x = cel ? W / 2 : W / 2 + (i - (n - 1) / 2) * slot, ti = j.t + .3, passa = j.casas > 0;
      const abre = passa ? easeOut(clamp((t - ti) / .15)) * (1 - easeIn(clamp((t - ti - .7) / .2))) : 0;
      const pw = slot * .09, ph = slot * .62, gap = slot * .82, fl = (gap / 2 - pw / 2) * (1 - abre);
      [-1, 1].forEach(sd => {
        rr(c, x + sd * gap / 2 - pw / 2, yg - ph * .55, pw, ph, pw * .3); c.fillStyle = "#3a3d44"; c.fill();
        if (fl > 1) { rr(c, sd < 0 ? x - gap / 2 + pw / 2 : x + gap / 2 - pw / 2 - fl, yg - slot * .05, fl, slot * .1, slot * .03);
                      c.fillStyle = j.acertou || t < ti ? "#C9CDD3" : rgba(ERRADO, .9); c.fill(); }
      });
      const vw = slot * .3, vh = slot * .17, vx = x - vw / 2, vy = yg - ph * .55 - vh - slot * .04;
      rr(c, vx, vy, vw, vh, vh * .2); c.fillStyle = "#000"; c.fill(); c.lineWidth = Math.max(1, slot * .01); c.strokeStyle = "#3a3d44"; c.stroke();
      const pisca = !j.acertou && t >= ti && t < ti + 1 ? (Math.floor((t - ti) / .17) % 2 === 0) : true;
      if (t >= ti && pisca) {
        c.save(); c.translate(x, vy + vh / 2); c.strokeStyle = passa ? CERTO : j.acertou ? AMARELO : ERRADO; c.lineWidth = vh * .16; c.lineCap = "round";
        c.shadowColor = c.strokeStyle; c.shadowBlur = vh * .5; c.beginPath();
        if (j.acertou && !passa) { c.moveTo(-vh * .25, -vh * .1); c.lineTo(vh * .25, -vh * .1); c.moveTo(-vh * .25, vh * .1); c.lineTo(vh * .25, vh * .1); }
        else if (passa) { c.moveTo(0, vh * .3); c.lineTo(0, -vh * .28); c.moveTo(-vh * .25, -vh * .05); c.lineTo(0, -vh * .3); c.lineTo(vh * .25, -vh * .05); }
        else { c.moveTo(-vh * .25, -vh * .25); c.lineTo(vh * .25, vh * .25); c.moveTo(vh * .25, -vh * .25); c.lineTo(-vh * .25, vh * .25); }
        c.stroke(); c.restore();
      } else if (t < ti) { c.beginPath(); c.arc(x, vy + vh / 2, vh * .2, 0, TAU); c.strokeStyle = "#5b5f66"; c.lineWidth = vh * .1; c.stroke(); }
      // O passageiro: chega à catraca; quem acertou atravessa até a plataforma, quem errou bate e volta.
      const yIni = cel ? H * .82 : H * .86, yPorta = yg + s * .55, yPlat = cel ? H * .33 : H * .31;
      let y = yIni + (yPorta - yIni) * easeOut(clamp((t - (ti - .35)) / .35)), escuro = 0;
      if (t > ti) {
        if (passa) y = yPorta + (yPlat - yPorta) * easeOut(clamp((t - ti - .1) / .45));
        else if (!j.acertou) { const k = clamp((t - ti) / .5); y = yPorta - s * .12 * Math.sin(Math.PI * clamp(k * 3)) * (k < 1 / 3 ? 1 : 0) + (yIni - yPorta) * .55 * easeOut(clamp((t - ti - .2) / .4)); escuro = .5 * clamp((t - ti - .2) / .4); }
      }
      avatar(c, j, x, y, s, { escuro });
      nomeEmbaixo(c, j, x, y, s, 1 - escuro);
      pilula(c, j.acertou ? mais(j) : j.casas < 0 ? "−1" : null, x + s * .45, y - s * .42, s * .2, j.acertou ? CERTO : ERRADO, "#000", pulo(t, ti + .45));
    });
  },
};

// ---------------------------------------------------------------- 3. Holofotes
export const T_REVELA_HOLOFOTES = 1.7;  // quando os focos acendem (o som segue)
const T_REV = T_REVELA_HOLOFOTES;
function cone(c, x0, y0, x1, y1, larg, intens, cor = "255,236,180") {
  if (intens <= 0) return;
  const ang = Math.atan2(y1 - y0, x1 - x0), px = -Math.sin(ang) * larg, py = Math.cos(ang) * larg;
  const g = c.createLinearGradient(x0, y0, x1, y1);
  g.addColorStop(0, `rgba(${cor},${.5 * intens})`); g.addColorStop(1, `rgba(${cor},${.12 * intens})`);
  c.save(); c.globalCompositeOperation = "lighter";
  c.beginPath(); c.moveTo(x0 - px * .08, y0 - py * .08); c.lineTo(x0 + px * .08, y0 + py * .08); c.lineTo(x1 + px, y1 + py); c.lineTo(x1 - px, y1 - py); c.closePath();
  c.fillStyle = g; c.fill();
  const e = c.createRadialGradient(x1, y1, 0, x1, y1, larg * 1.2); e.addColorStop(0, `rgba(${cor},${.45 * intens})`); e.addColorStop(1, `rgba(${cor},0)`);
  c.translate(x1, y1); c.scale(1, .32); c.beginPath(); c.arc(0, 0, larg * 1.2, 0, TAU); c.fillStyle = e; c.fill();
  c.restore();
}
const HOLOFOTES = {
  desenhar(c, W, H, t, cena) {
    const cel = cena.celular, f = fileira(cena.n, W, H, cel ? H * .55 : H * .6, cel), piso = f.y + f.s * .5;
    const g = c.createLinearGradient(0, piso, 0, H); g.addColorStop(0, "#1b1d22"); g.addColorStop(1, "#050506");
    c.fillStyle = g; c.fillRect(0, piso, W, H - piso);
    const rev = t >= T_REV, a = cena.certos.length;
    cabecalho(c, W, H, rev ? resumo(cena) : [["QUEM ACERTOU?", BRANCO]], rev ? clamp((t - T_REV) / .25) : clamp((t - .1) / .3), cel ? H * .14 : H * .12);
    if (!rev || !a) {  // os dois holofotes procurando, até a revelação
      const fim = rev ? 1 - clamp((t - T_REV) / .5) : 1, ini = clamp(t / .3);
      [[W * .08, .9, 0], [W * .92, 1.3, 2]].forEach(([sx, w, fase]) => {
        cone(c, sx, -H * .05, W / 2 + Math.sin(t * w * 2.2 + fase) * W * .36, piso, f.s * .55, .9 * ini * fim);
      });
      if (rev && !a) cone(c, W / 2, -H * .05, W / 2, piso, f.s * .5, .35 * clamp((t - T_REV - .3) / .4), "190,200,220");
    }
    const ka = rev ? easeOut(clamp((t - T_REV) / .15)) : 0;
    cena.js.forEach((j, i) => { if (j.acertou && ka > 0) cone(c, f.x(i), -H * .05, f.x(i), piso, f.s * .62, ka * (1 + .25 * Math.max(0, 1 - (t - T_REV) / .25))); });
    cena.js.forEach((j, i) => {
      const x = f.x(i);
      if (j.acertou && rev) {
        const sobe = Math.sin(Math.PI * clamp((t - T_REV) / .45)) * f.s * .18;
        avatar(c, j, x, f.y - sobe, f.s, { escuro: .7 * (1 - ka) });
        nomeEmbaixo(c, j, x, f.y - sobe, f.s, 1);
        const r = aleatorio(90 + i);
        for (let k = 0; k < 10; k++) {
          const an = r() * TAU, dist = f.s * (.55 + r() * .4), tt = t - T_REV - r() * .5; if (tt < 0 || tt > .8) continue;
          estrela(c, x + Math.cos(an) * dist, f.y - sobe + Math.sin(an) * dist - tt * f.s * .3, f.s * .05 * (1 - tt / .8), AMARELO);
        }
        pilula(c, mais(j), x + f.s * .42, f.y - sobe - f.s * .42, f.s * .17, AMARELO, "#000", pulo(t, T_REV + .25));
      } else {
        const baixa = rev ? easeOut(clamp((t - T_REV) / .4)) * f.s * .06 : 0;
        avatar(c, j, x, f.y + baixa, f.s, { escuro: .72 });
        nomeEmbaixo(c, j, x, f.y + baixa, f.s, .35);
        if (rev) pilula(c, xis(j), x + f.s * .42, f.y + baixa - f.s * .42, f.s * .15, rgba(ERRADO, .75), "#000", pulo(t, T_REV + .35));
      }
    });
  },
};

// ---------------------------------------------------------------- o que as páginas usam
const OPCOES = [LADOS, CARIMBO, CATRACA, HOLOFOTES];
export const NOMES_RESULTADOS = ["Dois lados", "Carimbo", "Catraca", "Holofotes"];
// A animação da rodada, sorteada pela chave (a mesma em todos os aparelhos; um sorteio à parte do da cena da contagem).
export const escolherResultado = chave => Math.floor(aleatorio((chave ^ 0x51ED27) >>> 0)() * OPCOES.length);
// A cena: os jogadores ({nome, avatar, cor: [fundo, texto], acertou, casas: quanto andou, de -1 a 2; parado: acertou,
// mas não andou por estar em primeiro quando todos acertaram; semResposta}), cada um com o instante em que entra (t), um
// depois do outro, e os grupos de quem acertou e de quem errou; todos: todos acertaram.
export function montarResultado(jogadores, celular = false, todos = false) {
  const js = jogadores.map((j, i) => ({ ...j, i }));
  const n = js.length, dt = Math.min(.3, 2.2 / Math.max(1, n));
  js.forEach((j, i) => { j.t = .4 + i * dt; });
  return { js, n, celular, todos, certos: js.filter(j => j.acertou), errados: js.filter(j => !j.acertou) };
}
const CSS = `
.acertos { position: fixed; inset: 0; z-index: 6; pointer-events: none; opacity: 0; transition: opacity .25s;
           background: radial-gradient(ellipse at center, #000e 0%, #000d 60%, #000b 100%); }
.acertos.visivel { opacity: 1; }
.acertos canvas { width: 100%; height: 100%; display: block; }
@media (prefers-reduced-motion: reduce) { .acertos { transition: none; } }`;
function instalarCss() {
  if (document.getElementById("css-acertos")) return;
  const s = document.createElement("style"); s.id = "css-acertos"; s.textContent = CSS; document.head.append(s);
}
// Liga a animação a um elemento da página (vazio, com hidden). mostrar(id, k, jogadores, celular, todos) começa a animação k
// (uma vez por id, a rodada) e devolve a cena (para o som); ela some sozinha no fim. visivel diz se ainda está na tela.
export function criarResultado(caixa) {
  instalarCss();
  let atual = null;  // {id, k, cena, inicio, raf, canvas, saindo}
  function laco() {
    if (!atual) return;
    const t = (performance.now() - atual.inicio) / 1000, cv = atual.canvas;
    if (t > DURACAO + SAIDA) return esconder();
    if (t > DURACAO && !atual.saindo) { atual.saindo = true; caixa.classList.remove("visivel"); }
    const w = cv.clientWidth, h = cv.clientHeight;
    if (w > 10 && h > 10) {
      const dpr = Math.min(1.5, window.devicePixelRatio || 1), W = Math.round(w * dpr), Hd = Math.round(h * dpr);
      if (cv.width !== W || cv.height !== Hd) { cv.width = W; cv.height = Hd; }
      const c = cv.getContext("2d"); c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, w, h);
      OPCOES[atual.k].desenhar(c, w, h, clamp(t, 0, DURACAO), atual.cena);
    }
    atual.raf = requestAnimationFrame(laco);
  }
  function esconder() {
    if (atual) cancelAnimationFrame(atual.raf);
    atual = null;
    caixa.classList.remove("visivel");
    caixa.hidden = true;
    caixa.innerHTML = "";
  }
  return {
    mostrar(id, k, jogadores, celular = false, todos = false) {
      if (atual?.id === id) return atual.cena;
      esconder();
      const cena = montarResultado(jogadores, celular, todos);
      cena.js.forEach(imagemDe);  // as imagens começam a carregar já
      caixa.className = "acertos";
      caixa.innerHTML = `<canvas aria-hidden="true"></canvas>`;
      const a = cena.certos.length;
      caixa.setAttribute("aria-label", celular ? (a ? "Você acertou" : "Você não acertou") : `${a} acertaram, ${cena.errados.length} erraram`);
      caixa.hidden = false;
      atual = { id, k: Math.max(0, Math.min(OPCOES.length - 1, k)), cena, inicio: performance.now(), raf: 0, canvas: caixa.querySelector("canvas"), saindo: false };
      requestAnimationFrame(() => caixa.classList.add("visivel"));
      laco();
      return cena;
    },
    esconder,
    get visivel() { return atual !== null; },
    get id() { return atual?.id ?? null; },
  };
}
