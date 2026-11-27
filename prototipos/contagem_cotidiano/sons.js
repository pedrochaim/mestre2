// Cotidiano: os sons das nove cenas novas da contagem (protótipo de 2026-11-26), no formato de SONS_CENAS de
// arena-suspense.js: segundo(s) toca a cada número, de 7 a 1, no ritmo da animação; zero(em) toca o fim da cena, marcado
// no 1 para daqui a "em" segundos. ganho: [segundos, zero], medido (medir.html) para todas soarem no mesmo volume das
// outras cenas: perto de -25 LUFS de 7 a 4, -22 de 3 a 1 e -16 no zero, com pico até 0,85.
// Tudo sintetizado, sem arquivo. tom, ruido, sino, marimba e falar são cópias dos de arena-suspense.js.
(() => {
let audio = null, ligado = true, mestre = null, eco = null, ganho = 1;
try { ligado = localStorage.getItem("mestre2.cotidiano.som") !== "desligado"; } catch {}

function montar(ctx) { audio = ctx; ruidoBase = null; criarSaida(); }
function criarSaida() {  // o volume geral e o eco, como em prepararSom() de arena-suspense.js
  mestre = audio.createGain(); mestre.gain.value = .9; mestre.connect(audio.destination);
  eco = audio.createConvolver();
  const n = Math.floor(audio.sampleRate * 1.8), imp = audio.createBuffer(2, n, audio.sampleRate);
  for (let c = 0; c < 2; c++) { const d = imp.getChannelData(c); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 3); }
  eco.buffer = imp; eco.connect(mestre);
}
async function prepararSom() {
  if (!audio) { try { montar(new (window.AudioContext || window.webkitAudioContext)()); } catch { return; } }
  try { await audio.resume(); } catch {}
}
const pronto = () => ligado && audio;
const nota = m => 440 * Math.pow(2, (m - 69) / 12);
function saida(g, pan, comEco) {
  let no = g;
  if (pan && audio.createStereoPanner) { const p = audio.createStereoPanner(); p.pan.value = pan; g.connect(p); no = p; }
  no.connect(mestre); if (comEco) no.connect(eco);
}
function tom({ f, f2, tipo = "sine", dur = .3, vol = .3, ataque = .005, em = 0, filtro, vibrato, comEco = false, sustenta = false, pan = 0 }) {
  if (!pronto()) return;
  vol *= ganho;
  const t = audio.currentTime + .01 + em;
  const o = audio.createOscillator(), g = audio.createGain();
  o.type = tipo; o.frequency.setValueAtTime(f, t);
  if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
  if (vibrato) { const l = audio.createOscillator(), lg = audio.createGain(); l.frequency.value = vibrato.f; lg.gain.value = vibrato.prof;
                 l.connect(lg).connect(o.frequency); l.start(t); l.stop(t + dur + .05); }
  g.gain.setValueAtTime(.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + ataque);
  if (sustenta) g.gain.setValueAtTime(vol, t + Math.max(ataque, dur - .12));
  g.gain.exponentialRampToValueAtTime(.0001, t + dur);
  let no = o;
  if (filtro) { const b = audio.createBiquadFilter(); b.type = filtro.tipo || "lowpass"; b.frequency.setValueAtTime(filtro.f, t);
                if (filtro.f2) b.frequency.exponentialRampToValueAtTime(filtro.f2, t + dur); b.Q.value = filtro.q || 1; o.connect(b); no = b; }
  no.connect(g); saida(g, pan, comEco);
  o.start(t); o.stop(t + dur + .05);
}
let ruidoBase = null;
const baseRuido = () => {
  if (!ruidoBase) { ruidoBase = audio.createBuffer(1, audio.sampleRate * 2, audio.sampleRate);
                    const d = ruidoBase.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
  return ruidoBase;
};
function ruido({ dur = .2, vol = .3, tipo = "bandpass", f = 1000, f2, q = 1, ataque = .005, em = 0, comEco = false, sustenta = false, pan = 0 }) {
  if (!pronto()) return;
  vol *= ganho;
  const t = audio.currentTime + .01 + em;
  const fonte = audio.createBufferSource(), b = audio.createBiquadFilter(), g = audio.createGain();
  fonte.buffer = baseRuido(); fonte.loop = true; b.type = tipo; b.Q.value = q;
  b.frequency.setValueAtTime(f, t); if (f2) b.frequency.exponentialRampToValueAtTime(f2, t + dur);
  g.gain.setValueAtTime(.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + ataque);
  if (sustenta) g.gain.setValueAtTime(vol, t + Math.max(ataque, dur - .2));
  g.gain.exponentialRampToValueAtTime(.0001, t + dur);
  fonte.connect(b).connect(g); saida(g, pan, comEco);
  fonte.start(t, Math.random()); fonte.stop(t + dur + .05);
}
function sino(f, { dur = 1.2, vol = .25, em = 0, comEco = true } = {}) {
  [[1, 1], [2.76, .45], [5.4, .25], [8.9, .12]].forEach(([m, v], k) =>
    tom({ f: f * m, dur: dur / (1 + k * .7), vol: vol * v, ataque: .003, em, comEco }));
}
const FORMANTES = { a: [800, 1250], e: [500, 1900], i: [320, 2400], o: [500, 900], u: [350, 800] };
function falar(vogais, { em = 0, f0 = 180, pan = 0, contorno = 0, vol = .5 } = {}) {
  if (!pronto()) return;
  vol *= ganho;
  let t = audio.currentTime + .01 + em;
  [...vogais].forEach((v, k) => {
    const [fa, fb] = FORMANTES[v], dur = .12 + Math.random() * .05;
    const alt = f0 * (1 + contorno * k / Math.max(1, vogais.length - 1)) * (1 + (Math.random() - .5) * .08);
    const o = audio.createOscillator(), g = audio.createGain();
    o.type = "sawtooth"; o.frequency.setValueAtTime(alt, t); o.frequency.linearRampToValueAtTime(alt * .93, t + dur);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .018);
    g.gain.setValueAtTime(vol, t + dur - .035); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    for (const [ff, q, gv] of [[fa, 5, 1], [fb, 7, .55]]) {
      const b = audio.createBiquadFilter(), bg = audio.createGain();
      b.type = "bandpass"; b.frequency.value = ff; b.Q.value = q; bg.gain.value = gv;
      o.connect(b).connect(bg).connect(g);
    }
    saida(g, pan, false);
    o.start(t); o.stop(t + dur + .02);
    ruido({ dur: .03, vol: .07, tipo: "highpass", f: 3200, ataque: .002, em: t - audio.currentTime - .01, pan });
    t += dur + .02;
  });
}
const clique = (em, vol = .4) => { ruido({ dur: .012, vol, f: 2500, q: 1, ataque: .001, em }); tom({ f: 190, f2: 110, dur: .035, vol: vol * .5, ataque: .002, em }); };
const bolhas = (n, janela, em = 0, vol = .06) => { for (let k = 0; k < n; k++) { const f = 380 + Math.random() * 600; tom({ f, f2: f * 1.7, dur: .045, vol, ataque: .004, em: em + Math.random() * janela }); } };
const estouro = (em, vol = .45) => { const f = 700 + Math.random() * 1500, pan = Math.random() * 1.2 - .6;
  ruido({ dur: .028, vol, f, q: 5, ataque: .001, em, pan }); tom({ f: f * .6, f2: f * .3, dur: .03, vol: vol * .4, ataque: .001, em, pan }); };

// ---- Instrumentos novos
// Um carro passando: motor (serra com efeito Doppler) e pneu no asfalto, indo de um lado para o outro.
function passaCarro(em, dir, vol = .3, dur = .95) {
  if (!pronto()) return;
  vol *= ganho;
  const t = audio.currentTime + .01 + em, meio = t + dur * .45;
  const p = audio.createStereoPanner ? audio.createStereoPanner() : null;
  if (p) { p.pan.setValueAtTime(-.9 * dir, t); p.pan.linearRampToValueAtTime(.9 * dir, t + dur); }
  const g = audio.createGain();
  g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, meio); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
  const o = audio.createOscillator(), lp = audio.createBiquadFilter();
  o.type = "sawtooth"; o.frequency.setValueAtTime(118, t); o.frequency.linearRampToValueAtTime(124, meio); o.frequency.linearRampToValueAtTime(92, t + dur);
  lp.type = "lowpass"; lp.frequency.value = 700;
  const n = audio.createBufferSource(), bp = audio.createBiquadFilter(), ng = audio.createGain();
  n.buffer = baseRuido(); n.loop = true; bp.type = "bandpass"; bp.frequency.value = 900; bp.Q.value = .6; ng.gain.value = 1.6;
  o.connect(lp).connect(g); n.connect(bp).connect(ng).connect(g);
  if (p) { g.connect(p); p.connect(mestre); } else g.connect(mestre);
  o.start(t); o.stop(t + dur + .05); n.start(t, Math.random()); n.stop(t + dur + .05);
}
// Um carro freando: chega da esquerda, o motor perde rotação, o pneu chia de leve e ele para à esquerda da faixa.
function freiaCarro(em, vol = .3) {
  if (!pronto()) return;
  vol *= ganho;
  const t = audio.currentTime + .01 + em, dur = 1;
  const p = audio.createStereoPanner ? audio.createStereoPanner() : null;
  if (p) { p.pan.setValueAtTime(-.9, t); p.pan.linearRampToValueAtTime(-.35, t + .75); }
  const g = audio.createGain();
  g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .3); g.gain.exponentialRampToValueAtTime(vol * .35, t + .8);
  g.gain.exponentialRampToValueAtTime(.0001, t + dur);
  const o = audio.createOscillator(), lp = audio.createBiquadFilter();
  o.type = "sawtooth"; o.frequency.setValueAtTime(122, t); o.frequency.exponentialRampToValueAtTime(64, t + .8);
  lp.type = "lowpass"; lp.frequency.value = 700;
  const n = audio.createBufferSource(), bp = audio.createBiquadFilter(), ng = audio.createGain();
  n.buffer = baseRuido(); n.loop = true; bp.type = "bandpass"; bp.frequency.value = 900; bp.Q.value = .6; ng.gain.value = 1.6;
  o.connect(lp).connect(g); n.connect(bp).connect(ng).connect(g);
  if (p) { g.connect(p); p.connect(mestre); } else g.connect(mestre);
  o.start(t); o.stop(t + dur + .05); n.start(t, Math.random()); n.stop(t + dur + .05);
  tom({ f: 2350, f2: 2150, dur: .3, vol: .025, ataque: .04, sustenta: true, em: em + .5, pan: -.4 });  // o chiado do freio
}
// Teclas de piano elétrico, vibrafone e baixo (a bossa do elevador).
const epiano = (m, em, dur = .5, vol = .06) => { const f = nota(m); tom({ f, dur, vol, ataque: .008, em, vibrato: { f: 5.5, prof: f * .004 }, comEco: true });
                                                  tom({ f: f * 2, dur: dur * .45, vol: vol * .3, ataque: .004, em }); };
const vibrafone = (m, em, dur = .8, vol = .12) => { const f = nota(m); tom({ f, dur, vol, ataque: .004, em, vibrato: { f: 6, prof: f * .006 }, comEco: true });
                                                     tom({ f: f * 4, dur: .14, vol: vol * .2, ataque: .002, em }); };
const baixo = (m, em, dur = .5, vol = .3) => { const f = nota(m); tom({ f, tipo: "triangle", dur, vol, ataque: .01, em }); tom({ f: f * 2, dur: dur * .6, vol: vol * .35, ataque: .01, em }); };
// O baião: zabumba (o grave e a vareta no aro de baixo, o "bacalhau"), triângulo e sanfona (duas palhetas desafinadas de leve).
const zabumba = (em, vol = .8) => { tom({ f: 112, f2: 64, dur: .28, vol, ataque: .004, em }); tom({ f: 224, f2: 130, dur: .08, vol: vol * .35, ataque: .002, em });
                                    ruido({ dur: .04, vol: vol * .22, tipo: "lowpass", f: 900, em }); };
const bacalhau = (em, vol = .22) => { ruido({ dur: .03, vol, f: 3200, q: 2, ataque: .001, em }); tom({ f: 900, dur: .02, vol: vol * .3, em }); };
const triangulo = (em, aberto, vol = .06) => [[1, 1], [2.71, .5], [5.2, .3]].forEach(([m, v]) =>
  tom({ f: 2350 * m, dur: aberto ? .32 : .04, vol: vol * v, ataque: .001, em }));
const sanfona = (m, em, dur, vol = .055) => { const f = nota(m); [0, 9].forEach(c => tom({ f: f * Math.pow(2, c / 1200), tipo: "sawtooth", dur, vol, ataque: .02, em, sustenta: true, filtro: { f: 2600 } })); };
// Música de caixinha: o som limpo e o brilho agudo que some logo.
const caixinha = (m, em, dur = .9, vol = .16) => { const f = nota(m); tom({ f, dur, vol, ataque: .003, em, comEco: true }); tom({ f: f * 3.01, dur: .18, vol: vol * .25, ataque: .002, em }); };
// Fogos: o assobio subindo, o estouro e o chiado das fagulhas.
function fogos(em, k = 1) {
  tom({ f: 900, f2: 2700, dur: .45, vol: .045 * k, ataque: .05, em, vibrato: { f: 14, prof: 50 } });
  ruido({ dur: .55, vol: .4 * k, tipo: "lowpass", f: 1500, ataque: .01, em: em + .5, comEco: true });
  tom({ f: 110, f2: 42, dur: .5, vol: .5 * k, ataque: .01, em: em + .5 });
  for (let i = 0; i < 16; i++) ruido({ dur: .012, vol: (.1 + Math.random() * .15) * k, tipo: "highpass", f: 3500 + Math.random() * 3000, ataque: .001, em: em + .6 + Math.random() * .8, pan: Math.random() * 1.2 - .6 });
}
const tecla = (em, forte = 1) => { ruido({ dur: .028, vol: .34 * forte, f: 2100 + Math.random() * 900, q: 1.4, ataque: .001, em });
                                   tom({ f: 170 + Math.random() * 50, f2: 90, dur: .035, vol: .24 * forte, ataque: .002, em }); };
const espaco = em => { ruido({ dur: .04, vol: .22, tipo: "lowpass", f: 900, ataque: .002, em }); tom({ f: 120, f2: 80, dur: .04, vol: .18, em }); };

// As expressões da máquina de escrever (as mesmas de cenas.js): o som de cada letra cai quando ela aparece.
const EXPR = { 7: "pintar o sete", 6: "seis por meia dúzia", 5: "o quinto dos infernos", 4: "ficar de quatro", 3: "três é demais",
               2: "dois dedos de prosa", 1: "uma mão lava a outra", 0: "zero à esquerda" };
function datilografar(s, em = 0, forte = 1) {
  const txt = EXPR[s], dt = .6 / txt.length;
  [...txt].forEach((ch, k) => ch === " " ? espaco(em + .08 + k * dt) : tecla(em + .08 + k * dt, forte));
  sino(2350, { dur: .55, vol: s ? .1 : .22, em: em + .72, comEco: true });                              // a campainha do fim da linha
  ruido({ dur: .17, vol: .14, f: 1300, f2: 3200, q: 1.5, ataque: .05, em: em + .77 });                   // o carro voltando
  [0, .035, .07].forEach(t => ruido({ dur: .01, vol: .2, f: 2600, q: 2, ataque: .001, em: em + .82 + t })); // a catraca da entrelinha
  tom({ f: 120, f2: 70, dur: .06, vol: .3, ataque: .002, em: em + .93 }); ruido({ dur: .03, vol: .2, tipo: "lowpass", f: 800, em: em + .93 });
}

const ACORDES_ELE = { 7: [48, [64, 67, 71, 74]], 6: [45, [64, 67, 72]], 5: [50, [65, 69, 72, 76]], 4: [43, [65, 71, 76]],
                      3: [52, [62, 67, 71]], 2: [45, [61, 67, 70]], 1: [50, [65, 69, 72]], 0: [48, [64, 67, 71, 74]] };
const MELODIA_ELE = { 7: [[76, .25, .5], [74, .75, .25]], 6: [[72, .25, .7]], 5: [[77, .25, .5], [76, .75, .25]], 4: [[74, .25, .7]],
                      3: [[79, .25, .4], [77, .625, .3]], 2: [[76, .25, .4], [73, .625, .3]], 1: [[74, .25, .3], [71, .625, .35]] };
const ACORDES_FJ = { 7: [43, [59, 62, 67]], 6: [41, [57, 60, 65]], 5: [48, [60, 64, 67]], 4: [43, [59, 62, 67]], 3: [50, [54, 57, 60, 62]],
                     2: [48, [60, 64, 67]], 1: [50, [54, 57, 60, 62]], 0: [43, [59, 62, 67, 71]] };
const MELODIA_FJ = { 7: [[74, 0, .2], [71, .25, .1], [74, .375, .1], [79, .5, .35]], 6: [[77, 0, .2], [76, .25, .1], [74, .375, .1], [76, .5, .35]],
                     5: [[72, 0, .2], [71, .25, .1], [72, .375, .1], [74, .5, .35]], 4: [[77, 0, .2], [76, .25, .1], [77, .375, .1], [79, .5, .35]],
                     3: [81, 79, 77, 76, 74, 72].map((m, k) => [m, k * .125, .11]).concat([[71, .75, .2]]),
                     2: [74, 76, 77, 79, 81, 83].map((m, k) => [m, k * .125, .11]).concat([[84, .75, .2]]),
                     1: [[86, 0, .2], [83, .25, .1], [86, .375, .1], [79, .5, .35]] };
// O "Parabéns" (melodia de 1893, de domínio público), um compasso por segundo, uma oitava acima, como numa caixinha de música.
const PARABENS = { 7: [[79, 0], [79, .167], [81, .333], [79, .667]], 6: [[84, 0], [83, .333]], 5: [[79, 0], [79, .167], [81, .333], [79, .667]],
                   4: [[86, 0], [84, .333]], 3: [[79, 0], [79, .167], [91, .333], [88, .667]], 2: [[84, 0], [83, .333], [81, .667]],
                   1: [[89, 0], [89, .167], [88, .333], [84, .667]] };
const BAIXO_PARABENS = { 7: 48, 6: 43, 5: 43, 4: 48, 3: 48, 2: 53, 1: 48 };

const SONS = [
  // 1. Micro-ondas: o zumbido do magnetron e do prato; o bipe de começar no 7; o leite fervendo nos três últimos. No zero,
  // o bipe triplo e a trava da porta.
  { nome: "Zumbido e bipe triplo", ganho: [1.31, 2.58],
    segundo: s => {
      if (s <= 3) ganho *= 1.35;  // os três últimos uns 3 dB acima, como nas outras cenas
      tom({ f: 120, tipo: "sawtooth", dur: 1.05, vol: .07, ataque: .05, sustenta: true, filtro: { f: 650 } });
      tom({ f: 240, dur: 1.05, vol: .025, ataque: .05, sustenta: true });
      ruido({ dur: 1.05, vol: .02, f: 1900, q: 3, ataque: .06, sustenta: true });
      if (s === 7) { clique(0, .4); tom({ f: 2050, tipo: "square", dur: .12, vol: .04, sustenta: true, filtro: { f: 4200 } }); }
      if (s <= 3) bolhas(5 + (3 - s) * 5, .95, .02, .05 + (3 - s) * .015);
    },
    zero: em => { [0, .32, .64].forEach(t => tom({ f: 2050, tipo: "square", dur: .24, vol: .06, sustenta: true, filtro: { f: 4200 }, em: em + t }));
                  clique(em + 1, .3); ruido({ dur: .25, vol: .1, tipo: "lowpass", f: 700, em: em + 1.02 }); } },
  // 2. Elevador: uma bossa de elevador, um acorde por andar (C7M(9), Am7, Dm9, G13, Em7, A7, Dm7–G7), e o relé a cada andar.
  // Nos três últimos, o motor freando. No zero, o "plim", o acorde de volta ao começo e a porta correndo.
  { nome: "Bossa de elevador e plim", ganho: [0.73, 0.73],
    segundo: s => {
      if (s <= 3) ganho *= 1.45;
      const [b, ac] = ACORDES_ELE[s];
      if (s === 1) { baixo(50, 0, .45); ac.forEach(m => epiano(m, .02, .45)); baixo(43, .5, .45); [65, 71, 74].forEach(m => epiano(m, .52, .45)); }
      else { baixo(b, 0, .6); baixo(b + 7, .75, .25, .2); ac.forEach(m => { epiano(m, .02, .5, .05); epiano(m, .625, .3, .045); }); }
      MELODIA_ELE[s].forEach(([m, t, d]) => vibrafone(m, t, d + .3));
      clique(0, .12);
      if (s <= 3) tom({ f: 360 - (3 - s) * 30, f2: 300 - (3 - s) * 30, tipo: "triangle", dur: 1, vol: .02, ataque: .2 });
    },
    zero: em => { sino(1318.5, { dur: 1.8, vol: .3, em }); baixo(48, em + .05, 1.2); ACORDES_ELE[0][1].forEach(m => epiano(m, em + .05, 1.3, .05));
                  vibrafone(72, em + .1, 1.4, .08);
                  ruido({ dur: 1, vol: .06, tipo: "lowpass", f: 900, f2: 400, ataque: .3, em: em + .25 }); tom({ f: 95, f2: 60, dur: .12, vol: .25, em: em + 1.2 }); } },
  // 3. Semáforo: o bipe de localização para quem não enxerga (dois por segundo nos três últimos) e um carro passando a
  // cada segundo, do lado em que ele vai (o da faixa de lá mais baixo); no 2, uma buzinada; no 1, o carro freando antes
  // da faixa. No zero, o piu-piu e o tique rápido de atravessar.
  { nome: "Bipe do semáforo e carros", ganho: [1.1, 4.35],
    segundo: s => {
      if (s <= 3) ganho *= 1.31;
      const toc = em => { tom({ f: 880, tipo: "triangle", dur: .06, vol: .3, ataque: .002, em }); ruido({ dur: .012, vol: .2, f: 2400, q: 1.5, ataque: .001, em }); };
      toc(0); if (s <= 3) toc(.5);
      if (s === 1) freiaCarro(0, .16); else passaCarro(0, s % 2 ? 1 : -1, s % 2 ? .28 : .25);
      if (s === 2) [.42, .6].forEach(t => [415, 494].forEach(f => tom({ f, tipo: "square", dur: .12, vol: .035, sustenta: true, filtro: { f: 1800 }, em: t, pan: .5 })));
    },
    zero: em => { [0, .18].forEach(t => tom({ f: 2700, f2: 1700, dur: .12, vol: .14, ataque: .004, em: em + t }));
                  for (let k = 0; k < 14; k++) tom({ f: 1150, tipo: "square", dur: .025, vol: .07, filtro: { f: 3000 }, em: em + .36 + k * .1 }); } },
  // 4. Panela de pressão: a fervura e o "tchi" do pino, cada vez mais vezes por segundo (2, 2, 3, 3, 5, 6, 8); nos três
  // últimos, o assobio. No zero, o clique do botão do fogão e o vapor saindo de uma vez.
  { nome: "Chiado da panela", ganho: [2.58, 0.65],
    segundo: s => {
      const n = { 7: 2, 6: 2, 5: 3, 4: 3, 3: 5, 2: 6, 1: 8 }[s];
      ruido({ dur: 1.05, vol: .05, tipo: "lowpass", f: 380, ataque: .05, sustenta: true });
      const v = .26 * Math.sqrt(1 / Math.max(1, .4 * n));  // quantos "tchis" cabem em 0,4 s
      for (let k = 0; k < n; k++) { const t = .03 + k / n; ruido({ dur: .13, vol: v, f: 4200, q: 1.1, ataque: .025, em: t }); tom({ f: 2300 + Math.random() * 300, dur: .02, vol: .03, em: t }); }
      if (s <= 3) tom({ f: 2500 + (3 - s) * 120, dur: 1.03, vol: .022, ataque: .2, sustenta: true, vibrato: { f: 9, prof: 30 } });
    },
    zero: em => { clique(em, .5);
                  ruido({ dur: 1.7, vol: .45, tipo: "highpass", f: 2200, ataque: .04, em: em + .1 });
                  ruido({ dur: 1.4, vol: .25, f: 900, q: .7, ataque: .05, em: em + .1 }); } },
  // 5. Caixa do supermercado: a esteira e o bipe do leitor quando a compra passa pelo vidro; nos três últimos, a moça do
  // caixa digitando. No zero, a impressora do cupom, a campainha da registradora e a gaveta com as moedas.
  { nome: "Bipe do leitor e caixa registradora", ganho: [1.96, 0.79],
    segundo: s => {
      if (s <= 3) ganho *= 1.36;
      tom({ f: 100, tipo: "sawtooth", dur: 1.03, vol: .03, ataque: .05, sustenta: true, filtro: { f: 400 } });
      tom({ f: 2900, dur: .1, vol: .14, ataque: .003, sustenta: true, em: .42 }); tom({ f: 5800, dur: .08, vol: .02, ataque: .003, em: .42 });
      if (s <= 3) { clique(.7, .25); clique(.8, .25); }
    },
    zero: em => {
      for (let k = 0; k < 14; k++) ruido({ dur: .03, vol: .15, f: 2400, q: 2, ataque: .002, em: em + .25 + k * .06 });
      tom({ f: 320, tipo: "square", dur: .85, vol: .02, sustenta: true, filtro: { f: 1200 }, em: em + .25 });
      sino(2637, { dur: 1.2, vol: .25, em: em + .7 }); sino(3520, { dur: 1, vol: .18, em: em + .78 });
      ruido({ dur: .2, vol: .3, tipo: "lowpass", f: 800, em: em + .7 }); tom({ f: 120, f2: 70, dur: .1, vol: .4, em: em + .86 });
      for (let k = 0; k < 5; k++) tom({ f: 3800 + Math.random() * 1500, dur: .08, vol: .05, ataque: .001, em: em + .82 + k * .05 });
    } },
  // 6. Máquina de escrever: uma batida por letra (a barra de espaço mais surda), a campainha, o carro voltando e a catraca.
  { nome: "Datilografia e campainha", ganho: [0.98, 1.55],
    segundo: s => { if (s <= 3) ganho *= 1.3; datilografar(s, 0, s <= 3 ? 1.2 : 1); },
    zero: em => datilografar(0, em, 1.3) },
  // 7. Festa junina: baião a 120 por minuto, um compasso por segundo: zabumba, bacalhau, triângulo e sanfona (G, F, C, G,
  // D7, C, D7). No zero, o acorde final, o "Viva!" e um rojão.
  { nome: "Baião de zabumba, triângulo e sanfona", ganho: [0.42, 1.18],
    segundo: s => {
      if (s <= 3) ganho *= 1.21;
      const forte = s <= 3 ? 1.2 : 1, [b, ac] = ACORDES_FJ[s];
      zabumba(0, .8 * forte); zabumba(.375, .45 * forte); zabumba(.5, .75 * forte); bacalhau(.25); bacalhau(.75);
      for (let k = 0; k < 8; k++) triangulo(k * .125, k % 4 === 2, .055 * forte);
      sanfona(b, 0, .2, .07); ac.forEach(m => { sanfona(m, .25, .1, .03); sanfona(m, .75, .1, .03); });
      MELODIA_FJ[s].forEach(([m, t, d]) => sanfona(m, t, d, .06));
    },
    zero: em => { zabumba(em, .7); triangulo(em, true, .08); ACORDES_FJ[0][1].concat([79]).forEach(m => sanfona(m, em, .9, .04));
                  [[200, -.4], [240, .3], [170, .6], [280, -.6]].forEach(([f0, pan]) => falar("ia", { em: em + .12 + Math.random() * .05, f0, pan, vol: .22, contorno: .3 }));
                  fogos(em + .3); } },
  // 8. Bolo de aniversário: o "Parabéns" numa caixinha de música, um compasso por segundo, e o fósforo acendendo uma vela;
  // palmas nos três últimos. No zero, a última nota, o sopro, a língua de sogra e os confetes.
  { nome: "Parabéns na caixinha de música", ganho: [0.61, 1.84],
    segundo: s => {
      if (s <= 3) ganho *= 1.36;
      PARABENS[s].forEach(([m, t]) => caixinha(m, t));
      caixinha(BAIXO_PARABENS[s], 0, .9, .1);
      ruido({ dur: .18, vol: .09, tipo: "highpass", f: 2800, ataque: .01, em: .02 }); tom({ f: 300, f2: 600, dur: .1, vol: .03, em: .06 });
      if (s <= 3) [0, .333, .667].forEach(t => { ruido({ dur: .05, vol: .22, f: 1300, q: .9, ataque: .002, em: t }); ruido({ dur: .05, vol: .16, f: 1700, q: .9, ataque: .002, em: t + .012 }); });
    },
    zero: em => {
      caixinha(86, em); caixinha(84, em + .333, 1.3); caixinha(48, em, 1.3, .1);
      ruido({ dur: .5, vol: .3, tipo: "lowpass", f: 900, f2: 300, ataque: .05, em: em + .55 });
      tom({ f: 370, f2: 430, tipo: "sawtooth", dur: .55, vol: .08, ataque: .03, sustenta: true, filtro: { tipo: "bandpass", f: 1100, q: 2 }, vibrato: { f: 18, prof: 8 }, em: em + .8 });
      for (let k = 0; k < 4; k++) estouro(em + .8 + k * .07, .4);
      [[230, -.3], [270, .3], [200, .6]].forEach(([f0, pan]) => falar("ee", { em: em + 1.05, f0, pan, vol: .18, contorno: .25 }));
    } },
  // 9. Máquina de costura: o motor e a agulha batendo (8 por segundo; 12, 14 e 16 nos três últimos, com o pé afundando
  // no pedal). No zero, o motor parando e o corte da tesoura.
  { nome: "Agulha, motor e tesoura", ganho: [1.78, 2.63],
    segundo: s => {
      if (s <= 3) ganho *= 1.38;
      const f = s <= 3 ? 180 : 130, n = { 7: 8, 6: 8, 5: 8, 4: 8, 3: 12, 2: 14, 1: 16 }[s];
      tom({ f, tipo: "sawtooth", dur: 1.04, vol: .05, ataque: .04, sustenta: true, filtro: { f: 900 } }); tom({ f: f * 2, dur: 1.04, vol: .015, ataque: .04, sustenta: true });
      for (let k = 0; k < n; k++) { ruido({ dur: .014, vol: .2, f: 3000, q: 3, ataque: .001, em: k / n }); tom({ f: 420, dur: .02, vol: .06, ataque: .001, em: k / n + .01 }); }
      if (s === 7) tom({ f: 140, f2: 70, dur: .12, vol: .15 });
    },
    zero: em => { tom({ f: 180, f2: 60, tipo: "sawtooth", dur: .45, vol: .06, filtro: { f: 900, f2: 300 }, em });
                  [.05, .15, .3, .5].forEach(t => ruido({ dur: .014, vol: .18, f: 3000, q: 3, ataque: .001, em: em + t }));
                  ruido({ dur: .07, vol: .4, f: 5200, f2: 3000, q: 2, ataque: .005, em: em + .68 }); tom({ f: 3300, dur: .25, vol: .04, em: em + .68 });
                  sino(2637, { dur: .6, vol: .12, em: em + .8 }); } },
];

// Toca o som do segundo s da cena i (e, no 1, o do zero), com o ganho medido da cena.
function somContagem(s, i) {
  if (!pronto() || s < 1) return;
  const c = SONS[i]; if (!c) return;
  const [gs, gz] = c.ganho;
  try { ganho = gs; c.segundo(s); if (s === 1) { ganho = gz; c.zero(1); } }
  finally { ganho = 1; }
}
// A contagem foi interrompida: desliga a saída em que os sons já marcados estão ligados e cria outra.
function pararContagem() {
  if (!audio || !mestre) return;
  const velho = mestre; velho.gain.setTargetAtTime(0, audio.currentTime, .05);
  setTimeout(() => velho.disconnect(), 300);
  criarSaida();
}
function ligarSom(v) { ligado = v; try { localStorage.setItem("mestre2.cotidiano.som", v ? "ligado" : "desligado"); } catch {} if (!v) pararContagem(); }

window.COSOM = {
  prepararSom, somContagem, pararContagem, ligarSom, somLigado: () => ligado, NOMES: SONS.map(c => c.nome),
  // Para a medição de volume (medir.html): toca um segundo ou o zero da cena num contexto qualquer (offline), com ganho 1.
  medir: { usar: ctx => { ligado = true; montar(ctx); }, segundo: (i, s) => { ganho = 1; SONS[i].segundo(s); ganho = 1; },
           zero: i => { ganho = 1; SONS[i].zero(0); }, ganhos: SONS.map(c => c.ganho),
           definir: (i, g) => { SONS[i].ganho = g; } },
};
})();
