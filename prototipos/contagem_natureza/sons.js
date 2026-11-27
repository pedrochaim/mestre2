// Natureza: os sons das dez cenas novas da contagem (protótipo de 2026-11-27), no formato de SONS_CENAS de
// arena-suspense.js: segundo(s) toca a cada número, de 7 a 1, no ritmo da animação; zero(em) toca o fim da cena, marcado
// no 1 para daqui a "em" segundos. ganho: [segundos, zero], medido (medir.html) para todas soarem no mesmo volume das
// outras cenas: perto de -25 LUFS de 7 a 4, -22 de 3 a 1 e -16 no zero, com pico até 0,85.
// Tudo sintetizado, sem arquivo. tom, ruido e sino são cópias dos de arena-suspense.js. Nada abaixo de ~150 Hz sozinho:
// o alto-falante da TV quase não toca grave, então os sons graves levam corpo nos médios.
(() => {
let audio = null, ligado = true, mestre = null, eco = null, ganho = 1;
try { ligado = localStorage.getItem("mestre2.natureza.som") !== "desligado"; } catch {}

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
const sorte = (a, b) => a + Math.random() * (b - a);
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
function sino(f, { dur = 1.2, vol = .25, em = 0, comEco = true, pan = 0 } = {}) {
  [[1, 1], [2.76, .45], [5.4, .25], [8.9, .12]].forEach(([m, v], k) =>
    tom({ f: f * m, dur: dur / (1 + k * .7), vol: vol * v, ataque: .003, em, comEco, pan }));
}

// ---- Instrumentos
// Marimba (o golpe e o harmônico de 4x que some logo) e celesta (o brilho de caixinha).
const marimba = (m, em, vol = .16, pan = 0) => { const f = nota(m); tom({ f, dur: .5, vol, ataque: .003, em, pan, comEco: true });
  tom({ f: f * 4, dur: .07, vol: vol * .35, ataque: .002, em, pan }); };
const celesta = (m, em, vol = .12, dur = 1) => { const f = nota(m); tom({ f, dur, vol, ataque: .003, em, comEco: true }); tom({ f: f * 2, dur: dur * .4, vol: vol * .3, ataque: .003, em });
  tom({ f: f * 3.01, dur: .15, vol: vol * .2, ataque: .002, em }); };
// Harmônica de vidro: o som do cristal, que entra devagar.
const vidro = (m, em, dur = .9, vol = .05) => { const f = nota(m); tom({ f, dur, vol, ataque: .18, em, sustenta: true, vibrato: { f: 4.5, prof: f * .003 }, comEco: true });
  tom({ f: f * 2, dur, vol: vol * .25, ataque: .2, em, sustenta: true }); };
// Grilos: três pulsos agudos, de leve. Pererecas: o "toc" duplo.
const grilo = (em, vol = .018, pan = 0) => { for (let k = 0; k < 3; k++) tom({ f: 4300, dur: .028, vol, ataque: .004, em: em + k * .045, pan }); };
const perereca = (em, vol = .06, pan = 0) => [0, .07].forEach(d => { tom({ f: 920, f2: 760, dur: .045, vol, ataque: .003, em: em + d, pan, filtro: { f: 2000 } });
  tom({ f: 1840, dur: .03, vol: vol * .3, ataque: .003, em: em + d, pan }); });
// Água: gota (o "plim" que cai de tom) e bolhas.
const gota = (em, vol = .1, f = 1700) => tom({ f, f2: f * .55, dur: .08, vol, ataque: .002, em, comEco: true });
const bolhas = (n, janela, em = 0, vol = .05) => { for (let k = 0; k < n; k++) { const f = 380 + Math.random() * 600; tom({ f, f2: f * 1.7, dur: .045, vol, ataque: .004, em: em + Math.random() * janela }); } };
// O estalo de um galho ou de uma pedra: ruído curtíssimo com um tom agudo que ressoa.
const estalo = (em, vol = .3, f = 3000, pan = 0) => { ruido({ dur: .03, vol, f, q: .8, ataque: .001, em, pan }); tom({ f: f * .8, dur: .05, vol: vol * .15, ataque: .001, em, pan }); };
// Batidas de asa: pulsos de ruído grave.
const asas = (em, n, intervalo, vol = .06, f = 900) => { for (let k = 0; k < n; k++) ruido({ dur: intervalo * .8, vol, tipo: "lowpass", f, ataque: .01, em: em + k * intervalo }); };

// O canto de baleia de cada segundo: [nota de começo, de fim, duração] de duas unidades da frase.
const CANTO = { 7: [[52, 57, .7], [62, 55, .3]], 6: [[50, 55, .6], [64, 59, .35]], 5: [[55, 52, .7], [66, 62, .3]], 4: [[53, 60, .65], [60, 64, .3]],
                3: [[57, 62, .6], [69, 64, .3]], 2: [[55, 64, .55], [71, 67, .35]], 1: [[60, 67, .5], [74, 69, .4]] };
const unidadeBaleia = (m1, m2, dur, em, vol = .08) => { const f = nota(m1), f2 = nota(m2);
  tom({ f, f2, tipo: "sawtooth", dur, vol, ataque: .12, em, sustenta: true, filtro: { tipo: "bandpass", f: f * 2.2, q: 2.5 }, vibrato: { f: 5, prof: f * .012 }, comEco: true });
  tom({ f, f2, dur, vol: vol * .9, ataque: .12, em, sustenta: true, vibrato: { f: 5, prof: f * .012 } }); };
// Notas que sobem de segundo em segundo (pentatônicas), usadas em várias cenas.
const SOBE = { 7: 62, 6: 64, 5: 66, 4: 69, 3: 71, 2: 74, 1: 76 };

const SONS = [
  // 1. Morcego: as chamadas de ecolocalização, como num detector de morcegos (que as traz para o som que ouvimos): 4 por
  // segundo, depois 6, 10, 18 e o zumbido de 36 no 1; cada uma com o eco da mariposa, mais perto a cada segundo. Grilos.
  // No zero, a mordida.
  { nome: "Ecolocalização e nhac", ganho: [4.72, 3.87],
    segundo: s => {
      if (s <= 3) ganho *= 1.35;
      const n = { 7: 4, 6: 4, 5: 5, 4: 6, 3: 10, 2: 18, 1: 36 }[s], pan = -.6 + (7 - s) * .13, demora = .012 + .07 * s / 7, d = Math.min(.02, .5 / n);
      const v = .16 * Math.sqrt(4 / n);  // a mesma energia em todos os segundos
      for (let k = 0; k < n; k++) { const em = k / n;
        tom({ f: 3600, f2: 1500, dur: d, vol: v, ataque: .002, em, pan });
        tom({ f: 3600, f2: 1500, dur: d, vol: v * .32, ataque: .002, em: em + demora, pan: .45 }); }
      grilo(.15, .016, .7); grilo(.62, .014, -.5);
    },
    zero: em => { [.3, .42, .54, .66].forEach((t, k) => { ruido({ dur: .11, vol: .2 - k * .02, f: 1600, q: .7, ataque: .015, em: em + t });
                    tom({ f: 240, f2: 150, tipo: "sawtooth", dur: .08, vol: .1, ataque: .005, em: em + t, filtro: { f: 900 } }); });
                  ruido({ dur: .6, vol: .2, tipo: "lowpass", f: 900, ataque: .05, em: em + .28, sustenta: true });
                  tom({ f: 330, f2: 200, dur: .14, vol: .14, ataque: .01, em: em + .78, filtro: { f: 1200 } });
                  asas(em + .9, 6, .09, .08, 700); } },
  // 2. João-de-barro: o bater de asas indo e voltando, o "tup" da bolota de barro e o "tchip" de contato; vento de
  // leve. No zero, o dueto do casal: ele rápido, ela mais lenta, os dois descendo de tom.
  { nome: "Barro, asas e dueto", ganho: [2.64, 6.15],
    segundo: s => {
      if (s <= 3) ganho *= 1.35;
      ruido({ dur: 1.05, vol: .012, tipo: "lowpass", f: 500, ataque: .2, sustenta: true });
      asas(.08, 5, .05, .05, 1100); asas(.55, 5, .05, .045, 1100);
      tom({ f: 230, f2: 120, tipo: "triangle", dur: .08, vol: .28, ataque: .003, em: .4 }); ruido({ dur: .05, vol: .14, tipo: "lowpass", f: 700, ataque: .002, em: .4 });
      tom({ f: 3300, f2: 2700, dur: .05, vol: .07, ataque: .003, em: .62, pan: .3 });
      if (s <= 3) tom({ f: 3500, f2: 2900, dur: .05, vol: .07, ataque: .003, em: .76, pan: .3 });
    },
    zero: em => { for (let k = 0, t = .2; k < 15; k++, t += .095 - k * .003) tom({ f: 3700 - k * 55, f2: (3700 - k * 55) * .88, tipo: "triangle", dur: .045, vol: .13, ataque: .003, em: em + t, pan: .35 });
                  for (let k = 0; k < 8; k++) tom({ f: 3050 - k * 60, f2: (3050 - k * 60) * .86, tipo: "triangle", dur: .06, vol: .11, ataque: .004, em: em + .32 + k * .16, pan: -.35 });
                  asas(em + .25, 14, .1, .03, 1200); } },
  // 3. Tartarugas: as ondas na praia, a areia sendo cavada e o "pop" de cada filhote que sai, com uma nota de marimba que
  // sobe a cada segundo; no 2 e no 1, o filhote que chega à água. No zero, a onda grande e um arpejo.
  { nome: "Ondas, areia e marimba", ganho: [1.74, 2.19],
    segundo: s => {
      if (s <= 3) ganho *= 1.35;
      ruido({ dur: 1.5, vol: .05, tipo: "lowpass", f: 900, f2: 450, ataque: .5 });
      for (let k = 0; k < 4; k++) ruido({ dur: .025, vol: .05, f: 3500, q: 1.5, ataque: .002, em: .05 + k * .07, pan: -.5 });
      tom({ f: 480, f2: 820, dur: .06, vol: .07, ataque: .004, em: .32, pan: -.5 });
      marimba(SOBE[s], .02, .12);
      if (s <= 2) ruido({ dur: .18, vol: .1, tipo: "highpass", f: 2200, ataque: .004, em: 0, pan: .45 });
    },
    zero: em => { ruido({ dur: 1.6, vol: .3, tipo: "lowpass", f: 300, f2: 2400, ataque: .45, em });
                  ruido({ dur: 1.1, vol: .07, tipo: "highpass", f: 3000, ataque: .2, em: em + .4 });
                  [72, 76, 79, 84].forEach((m, k) => marimba(m, em + .55 + k * .11, .13)); } },
  // 4. Baleia-jubarte: um trecho do canto por segundo (gemidos que sobem e descem e um "uup"), mais agudo perto da
  // superfície, sobre o fundo do mar; nos três últimos, os assobios. No zero, a subida, o salto e o tombo na água.
  { nome: "Canto da jubarte e salto", ganho: [0.94, 1.42],
    segundo: s => {
      if (s <= 3) ganho *= 1.35;
      ruido({ dur: 1.05, vol: .03, tipo: "lowpass", f: 420, ataque: .15, sustenta: true });
      const [[a1, a2, d1], [b1, b2, d2]] = CANTO[s];
      unidadeBaleia(a1, a2, d1, .02); unidadeBaleia(b1, b2, d2, .02 + d1 + .05, .06);
      if (s <= 3) tom({ f: nota(81 + (3 - s) * 2), f2: nota(86 + (3 - s) * 2), dur: .3, vol: .03, ataque: .06, em: .55, vibrato: { f: 7, prof: 20 }, comEco: true });
      bolhas(3, .9, .05, .03);
    },
    zero: em => { ruido({ dur: .5, vol: .14, f: 300, f2: 1800, q: .8, ataque: .3, em });
                  ruido({ dur: .6, vol: .3, tipo: "highpass", f: 1400, ataque: .01, em: em + .45 }); tom({ f: 190, f2: 90, dur: .3, vol: .3, em: em + .45 });
                  ruido({ dur: 1, vol: .45, tipo: "lowpass", f: 2600, f2: 400, ataque: .01, em: em + 1.55 }); tom({ f: 170, f2: 80, dur: .35, vol: .35, em: em + 1.55 });
                  ruido({ dur: .5, vol: .1, tipo: "highpass", f: 2500, ataque: .02, em: em + 1.7 }); } },
  // 5. Metamorfose: a lagarta mastigando a folha (7, 6, 5); no 4, o fio de seda; nos três últimos, a crisálida que estala
  // e um brilho que sobe. No zero, a celesta e o bater das asas.
  { nome: "Mastigar, crisálida e celesta", ganho: [2.28, 1.54],
    segundo: s => {
      if (s <= 3) ganho *= 1.35;
      if (s >= 5) { for (let k = 0; k < 5; k++) { ruido({ dur: .05, vol: .36, f: 2300 + Math.random() * 900, q: 1.6, ataque: .004, em: .04 + k * .18 }); tom({ f: 210, dur: .04, vol: .14, em: .04 + k * .18 }); }
                    ruido({ dur: .3, vol: .05, f: 4200, q: 1, ataque: .05, em: .5 }); }
      else if (s === 4) { ruido({ dur: .4, vol: .07, tipo: "highpass", f: 3000, f2: 6000, ataque: .1 }); tom({ f: 420, f2: 300, dur: .3, vol: .08, ataque: .01, em: .45, vibrato: { f: 12, prof: 15 } }); }
      else { [0, .5].forEach(t => { tom({ f: 210, f2: 270, tipo: "triangle", dur: .12, vol: .06, ataque: .01, em: t, filtro: { f: 900 } }); ruido({ dur: .06, vol: .035, f: 1500, q: 3, em: t + .02 }); });
             const m = { 3: 72, 2: 74, 1: 76 }[s]; [0, 7].forEach(c => tom({ f: nota(m + c), dur: 1, vol: .02, ataque: .25, sustenta: true, vibrato: { f: 6, prof: 3 } })); }
    },
    zero: em => { [84, 88, 91, 96, 100].forEach((m, k) => celesta(m, em + .1 + k * .09, .1));
                  asas(em + .9, 8, .17, .06, 1400); tom({ f: nota(72), dur: 1.4, vol: .05, ataque: .1, em: em + .1, comEco: true }); } },
  // 6. Flor-de-coco: a mata à noite (grilos e pererecas) e um "plim" de vidro para cada cogumelo que acende, subindo a
  // escala; nos três últimos, um brilho tremendo. No zero, o acorde de sinos e o pó dos esporos.
  { nome: "Mata à noite e plins", ganho: [1.19, 1.01],
    segundo: s => {
      if (s <= 3) ganho *= 1.35;
      grilo(.05, .016, .6); grilo(.55, .016, .6); grilo(.3, .012, -.6); perereca(sorte(.1, .8), .05, -.4);
      tom({ f: 600, f2: 1200, dur: .05, vol: .06, ataque: .004, em: .1 });
      sino(nota(SOBE[s] + 12), { dur: 1, vol: .1, em: .12 });
      if (s <= 3) [0, 1].forEach(k => tom({ f: nota(SOBE[s] + 24) * (1 + k * .006), dur: 1, vol: .02, ataque: .3, sustenta: true }));
    },
    zero: em => { [74, 78, 81, 86].forEach((m, k) => sino(nota(m + 12), { dur: 1.6, vol: .12, em: em + k * .03 }));
                  for (let k = 0; k < 14; k++) tom({ f: sorte(2500, 5500), dur: .06, vol: .025, ataque: .003, em: em + .2 + Math.random() * 1.2, pan: sorte(-.7, .7) });
                  ruido({ dur: 1.2, vol: .05, tipo: "highpass", f: 3000, f2: 6000, ataque: .3, em: em + .2 }); } },
  // 7. Escavação: o pincel na pedra (três passadas por segundo; quatro nos três últimos), os grãos caindo e o "tim" da
  // ponta da espátula no osso que aparece; nos três últimos, um bordão que sobe. No zero, o ronco grave de boca fechada e
  // o acorde de metais.
  { nome: "Pincel, espátula e ronco", ganho: [3.54, 2.07],
    segundo: s => {
      if (s <= 3) ganho *= 1.25;
      const n = s <= 3 ? 4 : 3;
      for (let k = 0; k < n; k++) ruido({ dur: .2, vol: .09, f: 2800, f2: 3600, q: 1.2, ataque: .06, em: k / n });
      [.2, .27, .6].forEach(t => tom({ f: sorte(1500, 2200), dur: .012, vol: .05, ataque: .001, em: t }));
      tom({ f: 1760, dur: .14, vol: .07, ataque: .002, em: .35, comEco: true }); tom({ f: 4560, dur: .06, vol: .02, ataque: .002, em: .35 });
      if (s <= 3) tom({ f: nota({ 3: 55, 2: 57, 1: 59 }[s]), tipo: "sawtooth", dur: 1, vol: .012, ataque: .1, sustenta: true, filtro: { f: 700 } });
    },
    zero: em => { tom({ f: 140, f2: 95, tipo: "sawtooth", dur: 1.1, vol: .22, ataque: .08, em, filtro: { f: 520 }, vibrato: { f: 7, prof: 5 } });
                  tom({ f: 280, f2: 190, dur: 1, vol: .12, ataque: .08, em, vibrato: { f: 7, prof: 8 } });
                  [48, 55, 60, 64, 67].forEach(m => tom({ f: nota(m), tipo: "sawtooth", dur: 1.3, vol: .03, ataque: .06, em: em + .25, sustenta: true, filtro: { f: 700, f2: 2600 }, comEco: true })); } },
  // 8. Fogo: a pirita batendo no sílex (no instante da batida) e as faíscas chiando; uma gota na caverna de vez em
  // quando; do 4 em diante, o sopro na palha. No zero, o fogo pega: o "fuuum", o tambor e a lenha estalando.
  { nome: "Pedra, sopro e fogueira", ganho: [3.42, 1.92],
    segundo: s => {
      if (s <= 3) ganho *= 1.35;
      estalo(.09, .22, 3200); ruido({ dur: .07, vol: .2, f: 1300, q: .8, ataque: .004, em: .09 });
      tom({ f: 2300, dur: .12, vol: .05, ataque: .002, em: .09 }); tom({ f: 3700, dur: .08, vol: .035, ataque: .002, em: .09 });
      for (let k = 0; k < 6; k++) ruido({ dur: .007, vol: .1, tipo: "highpass", f: 5000, ataque: .001, em: .1 + Math.random() * .32 });
      if (s % 2 === 0) gota(.7, .05, 1400);
      if (s <= 4) ruido({ dur: .55, vol: .05 + (4 - s) * .02, f: 900, q: .7, ataque: .2, em: .38 });
    },
    zero: em => { ruido({ dur: .7, vol: .3, tipo: "lowpass", f: 200, f2: 2600, ataque: .25, em });
                  tom({ f: 170, f2: 75, dur: .35, vol: .45, ataque: .004, em: em + .15 }); ruido({ dur: .06, vol: .2, tipo: "lowpass", f: 900, em: em + .15 });
                  ruido({ dur: 1.6, vol: .12, tipo: "lowpass", f: 700, ataque: .15, em: em + .4, sustenta: true });
                  for (let k = 0; k < 18; k++) estalo(em + .4 + Math.random() * 1.6, sorte(.1, .25), sorte(1500, 4000), sorte(-.4, .4)); } },
  // 9. Desova dos corais: o fundo do mar, o crepitar dos camarões-de-estalo do recife e um "blup" com nota de vibrafone
  // para cada colônia que fica pronta; nos três últimos, um pulso. No zero, o "uuush" que sobe e o brilho de mil
  // bolinhas.
  { nome: "Recife, estalos e vibrafone", ganho: [1.52, 2.81],
    segundo: s => {
      if (s <= 3) ganho *= 1.35;
      ruido({ dur: 1.05, vol: .04, tipo: "lowpass", f: 380, ataque: .15, sustenta: true });
      for (let k = 0; k < 16; k++) ruido({ dur: .004, vol: sorte(.05, .12), tipo: "highpass", f: 4000, ataque: .001, em: Math.random(), pan: sorte(-.8, .8) });
      tom({ f: 480, f2: 760, dur: .18, vol: .08, ataque: .01, em: .03 });
      const f = nota(SOBE[s] + 5); tom({ f, dur: .9, vol: .1, ataque: .004, em: .06, vibrato: { f: 5.5, prof: f * .006 }, comEco: true });
      if (s <= 3) [0, .5].forEach(t => tom({ f: 330, tipo: "triangle", dur: .22, vol: .07, ataque: .02, em: t, filtro: { f: 900 } }));
    },
    zero: em => { ruido({ dur: 1.3, vol: .16, f: 350, f2: 3200, q: .8, ataque: .4, em });
                  for (let k = 0; k < 36; k++) { const t = Math.random() * 1.8; tom({ f: 2000 + t * 2000 + Math.random() * 1500, dur: .05, vol: .022, ataque: .003, em: em + .15 + t, pan: sorte(-.7, .7) }); }
                  [64, 68, 71, 76].forEach(m => { const f = nota(m); tom({ f, dur: 1.5, vol: .06, ataque: .01, em: em + .1, vibrato: { f: 5.5, prof: f * .006 }, comEco: true }); }); } },
  // 10. Geodo: no 7, a lava que ronca e a bolha que estoura; no 6, 5 e 4, gotas pingando na pedra; no 3, 2 e 1, notas de
  // vidro que vão formando um acorde e os tique-tiques dos cristais crescendo. No zero, o brilho: sinos e um acorde.
  { nome: "Lava, gotas e cristal", ganho: [1.78, 1.27],
    segundo: s => {
      if (s <= 3) ganho *= 1.35;
      if (s === 7) { tom({ f: 150, tipo: "sawtooth", dur: 1, vol: .05, ataque: .1, sustenta: true, filtro: { f: 450 } }); ruido({ dur: 1, vol: .05, tipo: "lowpass", f: 320, ataque: .1, sustenta: true });
                     tom({ f: 200, f2: 480, dur: .16, vol: .1, ataque: .01, em: .4 }); }
      else if (s >= 4) { gota(.08, .25, 1800 - (6 - s) * 120); gota(.58, .19, 1500 - (6 - s) * 100); ruido({ dur: 1, vol: .03, tipo: "lowpass", f: 300, ataque: .2, sustenta: true }); }
      else { const vozes = [69, 73, 76].slice(0, 4 - s); vozes.forEach((m, k) => vidro(m, k * .06, .95, .036 / Math.sqrt(vozes.length)));
             for (let k = 0; k < 6; k++) tom({ f: sorte(4500, 7000), dur: .012, vol: .03, ataque: .001, em: Math.random() * .9, pan: sorte(-.6, .6) }); }
    },
    zero: em => { [81, 88, 93].forEach((m, k) => sino(nota(m), { dur: 1.5, vol: .1, em: em + .1 + k * .08 }));
                  [57, 61, 64, 69].forEach(m => vidro(m, em, 1.8, .045));
                  for (let k = 0; k < 8; k++) tom({ f: nota(88 + k * 2), dur: .08, vol: .03, ataque: .002, em: em + .4 + k * .06 }); } },
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
function ligarSom(v) { ligado = v; try { localStorage.setItem("mestre2.natureza.som", v ? "ligado" : "desligado"); } catch {} if (!v) pararContagem(); }

window.NASOM = {
  prepararSom, somContagem, pararContagem, ligarSom, somLigado: () => ligado, NOMES: SONS.map(c => c.nome),
  // Para a medição de volume (medir.html): toca um segundo ou o zero da cena num contexto qualquer (offline), com ganho 1.
  medir: { usar: ctx => { ligado = true; montar(ctx); }, segundo: (i, s) => { ganho = 1; SONS[i].segundo(s); ganho = 1; },
           zero: i => { ganho = 1; SONS[i].zero(0); }, ganhos: SONS.map(c => c.ganho),
           definir: (i, g) => { SONS[i].ganho = g; } },
};
})();
