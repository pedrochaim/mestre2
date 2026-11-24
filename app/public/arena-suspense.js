// Modo Arena · suspense antes da resposta (experimental, 2026-11-23). Liga-se na tela grande ("Suspense"), que grava
// "experimental" na partida. Quando a resposta é revelada ao vivo, a tela grande segura a revelação por uns 7 s com a
// animação Cartas viradas: contagem 3, 2, 1, as alternativas erradas viram em vermelho (da menos para a mais votada) e a
// certa vira por último, em verde. Os celulares acompanham, sem som, com a mesma contagem (TEMPOS).
// Sons: só na tela grande. A cada revelação sai um de 11 pacotes, sorteado, nunca o mesmo da vez anterior. O pacote 1 usa
// o tique, o erro e o acerto da biblioteca do app (Kenney, CC0); o 11 usa os peidos da biblioteca (Zache / Yle, Wikimedia
// Commons, CC BY 3.0) e um jingle de sax (Kenney, CC0); o resto é sintetizado aqui, sem arquivo.

const ARQUIVOS = {
  tique: "sons/tempo_acabando/tick_004.mp3",
  erro: "sons/erro/error_005.mp3",
  acerto: "sons/acerto/confirmation_002.mp3",
  peido1: "sons/volta_casa/yle_pieruja_034s.mp3",
  peido2: "sons/volta_casa/yle_pieruja_085s.mp3",
  peido3: "sons/volta_casa/yle_pieruja_161s.mp3",
  sax: "sons/fanfarra/jingles_SAX03.mp3",
};

let audio = null, ligado = true, mestre = null, eco = null;
const buffers = {};
try { ligado = localStorage.getItem("mestre2.arena.som") !== "desligado"; } catch {}

// Os navegadores só tocam som depois de um toque na página: a tela grande chama isto a cada toque.
export async function prepararSom() {
  if (!audio) {
    try { audio = new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
    mestre = audio.createGain(); mestre.gain.value = .9; mestre.connect(audio.destination);
    // Eco: uma reverberação curta, feita de ruído que se apaga.
    eco = audio.createConvolver();
    const n = Math.floor(audio.sampleRate * 1.8), imp = audio.createBuffer(2, n, audio.sampleRate);
    for (let c = 0; c < 2; c++) { const d = imp.getChannelData(c); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 3); }
    eco.buffer = imp; eco.connect(mestre);
    for (const [nome, url] of Object.entries(ARQUIVOS))
      buffers[nome] = fetch(url).then(r => r.arrayBuffer()).then(b => audio.decodeAudioData(b)).catch(() => null);
  }
  try { await audio.resume(); } catch {}
}
export const somLigado = () => ligado;
export function ligarSom(v) {
  ligado = v;
  try { localStorage.setItem("mestre2.arena.som", v ? "ligado" : "desligado"); } catch {}
  if (!v) batimento(0);
}

const pronto = () => ligado && audio;
const nota = m => 440 * Math.pow(2, (m - 69) / 12);   // número MIDI → Hz (60 = dó central)
async function arquivo(nome, volume = 1, velocidade = 1) {
  if (!pronto()) return;
  const b = await buffers[nome];
  if (!b) return;
  const fonte = audio.createBufferSource(), g = audio.createGain();
  fonte.buffer = b; fonte.playbackRate.value = velocidade; g.gain.value = volume;
  fonte.connect(g).connect(mestre); fonte.start();
}
// Um tom: oscilador com envelope, deslize de altura (f2), filtro, vibrato e saída com eco.
function tom({ f, f2, tipo = "sine", dur = .3, vol = .3, ataque = .005, em = 0, filtro, vibrato, comEco = false }) {
  if (!pronto()) return;
  const t = audio.currentTime + .01 + em;
  const o = audio.createOscillator(), g = audio.createGain();
  o.type = tipo; o.frequency.setValueAtTime(f, t);
  if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
  if (vibrato) { const l = audio.createOscillator(), lg = audio.createGain(); l.frequency.value = vibrato.f; lg.gain.value = vibrato.prof;
                 l.connect(lg).connect(o.frequency); l.start(t); l.stop(t + dur + .05); }
  g.gain.setValueAtTime(.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + ataque);
  g.gain.exponentialRampToValueAtTime(.0001, t + dur);
  let no = o;
  if (filtro) { const b = audio.createBiquadFilter(); b.type = filtro.tipo || "lowpass"; b.frequency.setValueAtTime(filtro.f, t);
                if (filtro.f2) b.frequency.exponentialRampToValueAtTime(filtro.f2, t + dur); b.Q.value = filtro.q || 1; o.connect(b); no = b; }
  no.connect(g); g.connect(mestre); if (comEco) g.connect(eco);
  o.start(t); o.stop(t + dur + .05);
}
// Ruído filtrado: sopros, chocalhos, pratos, estalos.
let ruidoBase = null;
function ruido({ dur = .2, vol = .3, tipo = "bandpass", f = 1000, f2, q = 1, ataque = .005, em = 0, comEco = false }) {
  if (!pronto()) return;
  if (!ruidoBase) { ruidoBase = audio.createBuffer(1, audio.sampleRate * 2, audio.sampleRate);
                    const d = ruidoBase.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
  const t = audio.currentTime + .01 + em;
  const fonte = audio.createBufferSource(), b = audio.createBiquadFilter(), g = audio.createGain();
  fonte.buffer = ruidoBase; b.type = tipo; b.Q.value = q;
  b.frequency.setValueAtTime(f, t); if (f2) b.frequency.exponentialRampToValueAtTime(f2, t + dur);
  g.gain.setValueAtTime(.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + ataque);
  g.gain.exponentialRampToValueAtTime(.0001, t + dur);
  fonte.connect(b).connect(g); g.connect(mestre); if (comEco) g.connect(eco);
  fonte.start(t, Math.random()); fonte.stop(t + dur + .05);
}
// Sino: parciais inarmônicas que se apagam em tempos diferentes.
function sino(f, { dur = 1.2, vol = .25, em = 0, comEco = true } = {}) {
  [[1, 1], [2.76, .45], [5.4, .25], [8.9, .12]].forEach(([m, v], k) =>
    tom({ f: f * m, dur: dur / (1 + k * .7), vol: vol * v, ataque: .003, em, comEco }));
}
// Marimba: fundamental e um harmônico agudo que some logo.
function marimba(f, { vol = .35, em = 0, dur = .7 } = {}) {
  tom({ f, dur, vol, ataque: .004, em, comEco: true });
  tom({ f: f * 4, dur: .12, vol: vol * .35, ataque: .002, em });
}
function batimentoSeco() { tom({ f: 70, f2: 38, dur: .2, vol: .9, ataque: .012 }); tom({ f: 70, f2: 38, dur: .2, vol: .5, ataque: .012, em: .17 }); }
function sopro(vol = .5) { ruido({ dur: .3, vol, f: 700, f2: 4200, q: 1.4, ataque: .05 }); }
const sobe = n => 3 - n;   // 3 → 0, 2 → 1, 1 → 2: cada número da contagem um pouco mais agudo

const PACOTES = [
  { nome: "Batimento", desc: "O original: coração grave, tique e sons de erro e acerto da biblioteca do app.",
    batida: batimentoSeco,
    tique: n => arquivo("tique", 1, 1 + sobe(n) * .12),
    virada: () => sopro(),
    erro: () => arquivo("erro", .7),
    acerto: () => arquivo("acerto", 1) },

  { nome: "Rufar de tambor", desc: "Caixa rufando no suspense, bloco de madeira na contagem, trombone triste no erro e prato no acerto.",
    batida: () => { for (let i = 0; i < 6; i++) { ruido({ dur: .06, vol: .14 + i * .03, tipo: "highpass", f: 1800, em: i * .045 });
                                                 tom({ f: 190, f2: 150, dur: .05, vol: .12, em: i * .045 }); } },
    tique: n => { const f = 820 + sobe(n) * 140; tom({ f, dur: .09, vol: .6 }); tom({ f: f * 2.6, dur: .04, vol: .15 }); },
    virada: () => ruido({ dur: .13, vol: .4, tipo: "highpass", f: 2600, ataque: .02 }),
    erro: () => { tom({ f: 233, f2: 220, tipo: "sawtooth", dur: .32, vol: .22, filtro: { f: 900 } });
                  tom({ f: 220, f2: 160, tipo: "sawtooth", dur: .75, vol: .22, em: .36, filtro: { f: 900 }, vibrato: { f: 6, prof: 5 } }); },
    acerto: () => { ruido({ dur: 1.4, vol: .25, tipo: "highpass", f: 5200, comEco: true });
                    [72, 76, 79].forEach(m => tom({ f: nota(m), tipo: "sawtooth", dur: 1, vol: .09, filtro: { f: 2600 }, comEco: true })); } },

  { nome: "Sintetizador", desc: "Pulso eletrônico, bipes na contagem, zíper subindo na carta, campainha grave no erro e arpejo no acerto.",
    batida: () => tom({ f: 55, tipo: "square", dur: .2, vol: .35, filtro: { f: 320 } }),
    tique: n => tom({ f: [660, 880, 1100][sobe(n)], tipo: "square", dur: .1, vol: .14 }),
    virada: () => tom({ f: 300, f2: 2400, tipo: "sawtooth", dur: .18, vol: .1, filtro: { f: 3200 } }),
    erro: () => { tom({ f: 110, tipo: "square", dur: .5, vol: .16 }); tom({ f: 116.5, tipo: "square", dur: .5, vol: .16 }); },
    acerto: () => [72, 76, 79, 84].forEach((m, k) => tom({ f: nota(m), tipo: "square", dur: k === 3 ? .6 : .12, vol: .12, em: k * .08, comEco: true })) },

  { nome: "Auditório", desc: "Tambor grave no suspense, sininho na contagem, uá-uá descendo no erro e fanfarra de metais no acerto.",
    batida: () => tom({ f: 120, f2: 70, dur: .28, vol: .75, ataque: .006 }),
    tique: n => sino(1320 + sobe(n) * 180, { dur: .7, vol: .22 }),
    virada: () => ruido({ dur: .22, vol: .4, f: 500, f2: 2600, q: 1.2, ataque: .04 }),
    erro: () => [58, 57, 56].forEach((m, k) => tom({ f: nota(m), tipo: "triangle", dur: k === 2 ? .9 : .32, vol: .35, em: k * .34,
                                                     vibrato: k === 2 ? { f: 7, prof: 4 } : undefined })),
    acerto: () => { [67, 72].forEach((m, k) => tom({ f: nota(m), tipo: "sawtooth", dur: .14, vol: .12, em: k * .12, filtro: { f: 2400 } }));
                    [72, 76, 79, 84].forEach(m => tom({ f: nota(m), tipo: "sawtooth", dur: 1.1, vol: .07, em: .26, filtro: { f: 2600 }, comEco: true })); } },

  { nome: "Relógio", desc: "Tique-taque no suspense, badalada na contagem, estalo na carta, baque surdo no erro e carrilhão no acerto.",
    batida: (() => { let alt = false; return () => { alt = !alt; ruido({ dur: .03, vol: .5, tipo: "bandpass", f: alt ? 3400 : 2300, q: 6 }); }; })(),
    tique: n => sino([392, 440, 494][sobe(n)], { dur: 1.3, vol: .3 }),
    virada: () => { ruido({ dur: .05, vol: .45, f: 2500, q: 2 }); tom({ f: 1600, dur: .03, vol: .15 }); },
    erro: () => { tom({ f: 95, f2: 50, dur: .35, vol: .85 }); ruido({ dur: .25, vol: .3, tipo: "lowpass", f: 300 }); },
    acerto: () => [84, 88, 91].forEach((m, k) => sino(nota(m), { dur: 1.6, vol: .2, em: k * .12 })) },

  { nome: "8-bit", desc: "Videogame antigo: graves quadrados, bipes, pulinho na carta, escadinha descendo no erro e power-up no acerto.",
    batida: () => tom({ f: 82, tipo: "square", dur: .09, vol: .2 }),
    tique: n => tom({ f: [523, 659, 784][sobe(n)], tipo: "square", dur: .11, vol: .13 }),
    virada: () => tom({ f: 220, f2: 880, tipo: "square", dur: .12, vol: .1 }),
    erro: () => [392, 330, 262, 196].forEach((f, k) => tom({ f, tipo: "square", dur: k === 3 ? .35 : .1, vol: .13, em: k * .11 })),
    acerto: () => [523, 659, 784, 1047, 1319].forEach((f, k) => tom({ f, tipo: "square", dur: k === 4 ? .4 : .07, vol: .12, em: k * .065 })) },

  { nome: "Cinema", desc: "Trilha de suspense: estrondos graves, golpes de metais na contagem, sopro ao contrário, acorde tenso no erro e golpe de orquestra no acerto.",
    batida: () => { tom({ f: 52, f2: 34, dur: .6, vol: .9, ataque: .02 }); ruido({ dur: .4, vol: .2, tipo: "lowpass", f: 180 }); },
    tique: n => [55, 82.4, 110].forEach(f => tom({ f: f * (1 + sobe(n) * .06), tipo: "sawtooth", dur: .8, vol: .12, ataque: .02,
                                                    filtro: { f: 200, f2: 1400 }, comEco: true })),
    virada: () => ruido({ dur: .3, vol: .5, f: 400, f2: 3000, q: 1, ataque: .26 }),
    erro: () => { [61.7, 65.4, 92.5].forEach(f => tom({ f, tipo: "sawtooth", dur: 1.1, vol: .12, filtro: { f: 700 }, comEco: true }));
                  tom({ f: 60, f2: 35, dur: .7, vol: .8 }); },
    acerto: () => { [60, 67, 72, 76, 79].forEach(m => tom({ f: nota(m), tipo: "sawtooth", dur: 1.4, vol: .07, filtro: { f: 3200 }, comEco: true }));
                    tom({ f: 65, f2: 45, dur: .9, vol: .8 }); } },

  { nome: "Marimba", desc: "Suave e alegre: notas graves de marimba no suspense, escala subindo na contagem e arpejo no acerto.",
    batida: () => marimba(nota(43), { vol: .45, dur: .5 }),
    tique: n => marimba(nota([67, 69, 71][sobe(n)])),
    virada: () => ruido({ dur: .25, vol: .22, f: 600, f2: 2500, q: 1, ataque: .06 }),
    erro: () => { marimba(nota(63), { vol: .35 }); marimba(nota(60), { vol: .35, em: .22, dur: 1 }); },
    acerto: () => [72, 76, 79, 84].forEach((m, k) => marimba(nota(m), { em: k * .1, dur: k === 3 ? 1.2 : .6 })) },

  { nome: "Cristal", desc: "Taças de vidro: toques leves no suspense e na contagem, brilho na carta, vidro desafinado no erro e chuva de brilhos no acerto.",
    batida: () => tom({ f: 220, dur: .45, vol: .3, ataque: .01, comEco: true }),
    tique: n => sino(1760 * Math.pow(1.12, sobe(n)), { dur: 1, vol: .16 }),
    virada: () => { for (let i = 0; i < 6; i++) tom({ f: 3000 + Math.random() * 3000, dur: .08, vol: .05, em: i * .03 }); },
    erro: () => { tom({ f: 600, dur: .5, vol: .2 }); tom({ f: 637, dur: .5, vol: .2 }); },
    acerto: () => { const pent = [84, 86, 88, 91, 93, 96, 98, 100];
                    for (let i = 0; i < 12; i++) tom({ f: nota(pent[Math.floor(Math.random() * pent.length)]), dur: .6, vol: .08, em: i * .045, comEco: true }); } },

  { nome: "Batucada", desc: "Percussão brasileira: surdo no suspense, agogô na contagem, ganzá na carta, cuíca no erro e apito no acerto.",
    batida: () => { tom({ f: 82, f2: 55, dur: .45, vol: .9, ataque: .01 }); tom({ f: 82, f2: 60, dur: .2, vol: .35, em: .2 }); },
    tique: n => { const f = n % 2 ? 1100 : 830; tom({ f: f * (1 + sobe(n) * .04), dur: .25, vol: .3 }); tom({ f: f * 2.4, dur: .1, vol: .08 }); },
    virada: () => { ruido({ dur: .08, vol: .3, tipo: "highpass", f: 5200, ataque: .03 }); ruido({ dur: .08, vol: .3, tipo: "highpass", f: 5200, ataque: .03, em: .09 }); },
    erro: () => tom({ f: 720, f2: 240, tipo: "sawtooth", dur: .55, vol: .2, filtro: { tipo: "bandpass", f: 900, q: 3 }, ataque: .03 }),
    acerto: () => { tom({ f: 2800, dur: .55, vol: .16, vibrato: { f: 28, prof: 140 } });
                    tom({ f: 82, f2: 55, dur: .45, vol: .9, em: .05 }); tom({ f: 1100, dur: .2, vol: .25, em: .3 }); } },

  { nome: "Pum", desc: "Desenho animado: fagote saltitante no suspense, apito de êmbolo na contagem, sopro na carta, peido no erro e sax no acerto.",
    batida: () => { tom({ f: 98, tipo: "sawtooth", dur: .12, vol: .2, filtro: { f: 600 } });
                    tom({ f: 147, tipo: "sawtooth", dur: .12, vol: .16, em: .16, filtro: { f: 700 } }); },
    tique: n => { const f = 500 * Math.pow(1.25, sobe(n)); tom({ f, f2: f * 1.9, dur: .32, vol: .2, ataque: .02, vibrato: { f: 9, prof: 12 } }); },
    virada: () => sopro(.45),
    // Cada erro sorteia um dos três peidos, sem repetir o último.
    erro: (() => { let ultimo = 0; return () => { let k; do { k = 1 + Math.floor(Math.random() * 3); } while (k === ultimo); ultimo = k; arquivo("peido" + k, 1); }; })(),
    acerto: () => arquivo("sax", .9) },
];

let daVez = -1;
// Um pacote por revelação, sorteado, nunca o mesmo da vez anterior.
function sortearPacote() {
  let k;
  do { k = Math.floor(Math.random() * PACOTES.length); } while (k === daVez && PACOTES.length > 1);
  daVez = k;
  return PACOTES[k];
}

// O batimento do pacote, no ritmo do pulso da tela, enquanto durar o suspense.
let coracao = null;
function batimento(ms, P) {
  clearTimeout(coracao);
  if (!ms) return;
  const bater = () => { if (pronto()) P.batida(); coracao = setTimeout(bater, ms); };
  bater();
}

// Tempos da animação, que os celulares seguem sem ouvir a tela: a contagem (3 números) e o instante em que a certa
// aparece, contado do começo do suspense (as 3 erradas viram antes dela).
const CONTAGEM = 900, VIRA = 300, DEPOIS_ERRADA = 450, DEPOIS_ULTIMA = 900, SILENCIO = 350, SEGURA = 1300;
export const TEMPOS = {
  contagem: CONTAGEM,
  revelaEm: 3 * CONTAGEM + 2 * (2 * VIRA + DEPOIS_ERRADA) + (2 * VIRA + DEPOIS_ULTIMA) + SILENCIO + 2 * VIRA,
};
const espera = ms => new Promise(r => setTimeout(r, ms));

function faiscas(el) {
  const cores = ["#4cc485", "#ffd23f", "#ffffff", "#7c9cf5"];
  for (let k = 0; k < 18; k++) {
    const f = document.createElement("span"); f.className = "faisca";
    const a = Math.random() * Math.PI * 2, d = 4 + Math.random() * 7;
    f.style.background = cores[k % cores.length];
    f.style.setProperty("--dx", `${(Math.cos(a) * d).toFixed(2)}vmin`); f.style.setProperty("--dy", `${(Math.sin(a) * d).toFixed(2)}vmin`);
    el.append(f); setTimeout(() => f.remove(), 1000);
  }
}

// A animação na tela grande. opcoes: a lista das 4 alternativas (li), ainda sem a resposta; cartao: o cartão da pergunta
// (recebe a classe "tensa" e a contagem); certa: o índice da certa; votos: índice → bolinhas dos jogadores que a
// escolheram; valendo(): falso se a tela mudou de rodada no meio (a animação para).
export async function animar({ cartao, opcoes, contagem, certa, votos, valendo }) {
  const P = sortearPacote();
  const li = i => opcoes.children[i];
  const soltar = i => {
    const item = li(i); if (!item) return;
    let quem = item.querySelector(".quem");
    if (!quem) { quem = document.createElement("span"); quem.className = "quem"; item.append(quem); }
    for (const b of votos(i)) { b.classList.add("cai"); quem.append(b); }
  };
  const nVotos = i => votos(i).length;
  try {
    cartao.classList.add("tensa"); cartao.style.setProperty("--bpm", "1000ms");
    batimento(1000, P);
    for (const n of [3, 2, 1]) {
      if (!valendo()) return;
      contagem.innerHTML = `<span>${n}</span>`;
      cartao.style.setProperty("--bpm", `${600 + n * 150}ms`);
      batimento(600 + n * 150, P);
      if (pronto()) P.tique(n);
      await espera(CONTAGEM);
    }
    contagem.innerHTML = "";
    batimento(560, P);
    const erradas = [...opcoes.children].map((_, i) => i).filter(i => i !== certa).sort((a, b) => nVotos(a) - nVotos(b));
    for (const [k, i] of erradas.entries()) {
      if (!valendo()) return;
      li(i).classList.add("virando"); if (pronto()) P.virada();
      await espera(VIRA);
      li(i).classList.add("errada"); if (pronto()) P.erro(); soltar(i);
      await espera(VIRA); li(i).classList.remove("virando");
      await espera(k === erradas.length - 1 ? DEPOIS_ULTIMA : DEPOIS_ERRADA);
    }
    if (!valendo() || !li(certa)) return;
    batimento(0); await espera(SILENCIO);
    li(certa).classList.add("virando"); if (pronto()) P.virada();
    await espera(VIRA);
    li(certa).classList.add("certa"); if (pronto()) P.acerto(); soltar(certa); faiscas(li(certa));
    await espera(VIRA); li(certa).classList.remove("virando");
    cartao.classList.remove("tensa");
    await espera(SEGURA);
  } finally {
    batimento(0);
    cartao.classList.remove("tensa");
    contagem.innerHTML = "";
  }
}
