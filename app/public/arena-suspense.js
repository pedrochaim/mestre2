// Modo Arena · sons do relógio e suspense antes da resposta (experimental, 2026-11-23). Sons do relógio, na tela grande:
// um som quando a pergunta aparece e o prazo começa (o de "pergunta sorteada" da biblioteca), um tique-taque a cada
// segundo da contagem (sintetizado), o tique da biblioteca nos últimos 5 s e o "tempo esgotado" quando o prazo acaba.
// Suspense: liga-se na tela grande ("Sons e suspense"), que grava "experimental" na partida. Quando a resposta é
// revelada ao vivo, a tela grande segura a revelação por uns 6 s com a animação Votos e eliminação (2026-11-23; antes,
// Cartas viradas): os votos caem nas alternativas, as erradas saem uma a uma, da menos para a mais votada, e sobra a
// certa. Os celulares acompanham, sem som, no mesmo ritmo (TEMPOS).
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
  inicio1: "sons/nova_pergunta/question_001.mp3",
  inicio2: "sons/nova_pergunta/question_002.mp3",
  esgotado: "sons/tempo_esgotado/lowThreeTone.mp3",
  // A torcida do futebol (2026-11-24; ação torcida_futebol da biblioteca): a hinchada do Independiente ao fundo da
  // contagem e a explosão do gol de Cali no zero (Wikimedia Commons, CC BY 3.0 e CC BY-SA 3.0).
  torcidaFundo: `sons/${"torcida_futebol"}/hinchada_independiente_20s.mp3`,
  torcidaGol: `sons/${"torcida_futebol"}/gol_cali_10s.mp3`,
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
  if (!v) { batimento(0); pararContagem(); }
}

const pronto = () => ligado && audio;
// O ganho da cena que está tocando (ganho: [segundos, zero] em SONS_CENAS, medido para todas soarem no mesmo volume, sem
// passar de 1 no pico); fora das cenas, 1.
let ganho = 1;
const nota = m => 440 * Math.pow(2, (m - 69) / 12);   // número MIDI → Hz (60 = dó central)
async function arquivo(nome, volume = 1, velocidade = 1) {
  if (!pronto()) return;
  const b = await buffers[nome];
  if (!b) return;
  const fonte = audio.createBufferSource(), g = audio.createGain();
  fonte.buffer = b; fonte.playbackRate.value = velocidade; g.gain.value = volume;
  fonte.connect(g).connect(mestre); fonte.start();
}
// Saída de um som: no centro ou, com pan (de -1, esquerda, a 1, direita), de um lado; e o eco, se pedido.
function saida(g, pan, comEco) {
  let no = g;
  if (pan && audio.createStereoPanner) { const p = audio.createStereoPanner(); p.pan.value = pan; g.connect(p); no = p; }
  no.connect(mestre); if (comEco) no.connect(eco);
}
// Um trecho de um arquivo, marcado para daqui a "em" segundos, a partir de "de" segundos do arquivo, por "dur" segundos,
// com o volume seguindo "envelope" ([segundos desde o começo, volume], em rampas). Fica em "tocandoTrechos" até acabar,
// para pararContagem() poder calar a torcida quando a contagem é interrompida.
const tocandoTrechos = new Set();
async function trecho(nome, { em = 0, de = 0, dur, envelope = [[0, 1]] }) {
  if (!pronto()) return;
  let t0 = audio.currentTime + .01 + em;
  const b = await buffers[nome];
  if (!b || !pronto()) return;
  const atraso = audio.currentTime + .01 - t0;  // o arquivo demorou a carregar: entra já, do ponto em que estaria
  if (atraso > 0) { t0 += atraso; de += atraso; dur -= atraso; }
  if (dur <= .05 || de >= b.duration) return;
  const fonte = audio.createBufferSource(), g = audio.createGain();
  fonte.buffer = b;
  g.gain.setValueAtTime(.0001, t0);
  const ja = Math.max(0, atraso);
  for (const [t, v] of envelope) if (t >= ja) g.gain.linearRampToValueAtTime(v, t0 - ja + t);
  g.gain.linearRampToValueAtTime(0, t0 + dur);
  fonte.connect(g).connect(mestre);
  const item = { fonte, g };
  tocandoTrechos.add(item);
  fonte.onended = () => tocandoTrechos.delete(item);
  fonte.start(t0, de);
  fonte.stop(t0 + dur + .02);
}
// A contagem foi interrompida (pausa, som desligado, outra cena na galeria): cala a torcida em 0,25 s.
export function pararContagem() {
  if (!audio) return;
  const t = audio.currentTime;
  torcidaAte = 0;
  for (const { fonte, g } of tocandoTrechos) {
    g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(g.gain.value, t); g.gain.linearRampToValueAtTime(0, t + .25);
    try { fonte.stop(t + .3); } catch {}
  }
  tocandoTrechos.clear();
}
// Um tom: oscilador com envelope, deslize de altura (f2), filtro, vibrato e saída com eco. Com sustenta, o volume fica
// parado até o fim (buzina, motor) em vez de se apagar aos poucos.
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
// Ruído filtrado: sopros, chocalhos, pratos, estalos.
let ruidoBase = null;
function ruido({ dur = .2, vol = .3, tipo = "bandpass", f = 1000, f2, q = 1, ataque = .005, em = 0, comEco = false, sustenta = false, pan = 0 }) {
  if (!pronto()) return;
  vol *= ganho;
  if (!ruidoBase) { ruidoBase = audio.createBuffer(1, audio.sampleRate * 2, audio.sampleRate);
                    const d = ruidoBase.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
  const t = audio.currentTime + .01 + em;
  const fonte = audio.createBufferSource(), b = audio.createBiquadFilter(), g = audio.createGain();
  fonte.buffer = ruidoBase; fonte.loop = true; b.type = tipo; b.Q.value = q;  // em laço: dá para mais de 1 s (a torcida)
  b.frequency.setValueAtTime(f, t); if (f2) b.frequency.exponentialRampToValueAtTime(f2, t + dur);
  g.gain.setValueAtTime(.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + ataque);
  if (sustenta) g.gain.setValueAtTime(vol, t + Math.max(ataque, dur - .2));
  g.gain.exponentialRampToValueAtTime(.0001, t + dur);
  fonte.connect(b).connect(g); saida(g, pan, comEco);
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
// Ao mudar de ritmo, a próxima batida segue o compasso da anterior (sem bater dobrado).
let coracao = null, ultimaBatida = 0;
function batimento(ms, P) {
  clearTimeout(coracao);
  if (!ms) { ultimaBatida = 0; return; }
  const bater = () => { ultimaBatida = Date.now(); if (pronto()) P.batida(); coracao = setTimeout(bater, ms); };
  if (!ultimaBatida) return bater();
  coracao = setTimeout(bater, Math.max(0, ultimaBatida + ms - Date.now()));
}

// Tempos da animação, iguais em todos os aparelhos (os celulares seguem sem ouvir a tela): a fase dos votos tem duração
// fixa, dividida entre quantos votos houver, para o instante em que a certa aparece não depender do número de votos.
const INICIO = 500, VOTOS = 1600, PAUSA = 700, TREME = 380, DEPOIS_ERRADA = 650, DEPOIS_ULTIMA = 1100, SEGURA = 1300;
const RITMOS = [700, 520, 380];          // o batimento acelera a cada alternativa eliminada
const ELIMINA = INICIO + VOTOS + PAUSA;  // começo das eliminações
export const TEMPOS = {
  revelaEm: ELIMINA + 3 * TREME + 2 * DEPOIS_ERRADA + DEPOIS_ULTIMA,
  // O ritmo do batimento (ms por batida) num instante do suspense, para o celular pulsar junto.
  ritmoEm: ms => ms < ELIMINA ? 900 : RITMOS[Math.min(2, Math.floor((ms - ELIMINA) / (TREME + DEPOIS_ERRADA)))],
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

// A animação Votos e eliminação, na tela grande. As alternativas pulsam como batimento; os votos caem um a um, cada um
// com o tique do pacote, mais agudo a cada voto; depois as erradas saem, da menos votada para a mais votada: cada uma
// treme (sopro do pacote) e sai (erro do pacote), e o batimento acelera; por fim, um instante de silêncio e a certa se
// acende em verde (acerto do pacote). opcoes: a lista das 4 alternativas (li), ainda sem a resposta; cartao: o cartão
// da pergunta (recebe a classe "tensa"); certa: o índice da certa; votos: índice → bolinhas de quem a escolheu;
// valendo(): falso se a tela mudou de rodada no meio (a animação para).
export async function animar({ cartao, opcoes, certa, votos, valendo }) {
  const P = sortearPacote();
  const li = i => opcoes.children[i];
  const lugar = i => {
    const item = li(i);
    let quem = item.querySelector(".quem");
    if (!quem) { quem = document.createElement("span"); quem.className = "quem"; item.append(quem); }
    return quem;
  };
  // Todos os votos, em ordem sorteada; o número de votos de cada alternativa decide a ordem das eliminações.
  const todos = [], nVotos = [];
  [...opcoes.children].forEach((_, i) => { const b = votos(i); nVotos[i] = b.length; for (const x of b) todos.push([i, x]); });
  for (let k = todos.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [todos[k], todos[j]] = [todos[j], todos[k]]; }
  try {
    cartao.classList.add("tensa"); cartao.style.setProperty("--bpm", "900ms");
    batimento(900, P);
    await espera(INICIO);
    const passo = todos.length ? Math.min(260, VOTOS / todos.length) : VOTOS;
    for (const [k, [i, b]] of todos.entries()) {
      if (!valendo()) return;
      b.classList.add("cai"); lugar(i).append(b);
      if (pronto()) P.tique(Math.max(1, 3 - Math.floor(k * 3 / todos.length)));
      await espera(passo);
    }
    await espera(VOTOS - passo * todos.length + PAUSA);
    const erradas = [...opcoes.children].map((_, i) => i).filter(i => i !== certa).sort((a, b) => nVotos[a] - nVotos[b]);
    for (const [k, i] of erradas.entries()) {
      if (!valendo()) return;
      const ritmo = RITMOS[Math.min(k, RITMOS.length - 1)];
      cartao.style.setProperty("--bpm", `${ritmo}ms`); batimento(ritmo, P);
      li(i).classList.add("treme"); if (pronto()) P.virada();
      await espera(TREME);
      li(i).classList.remove("treme"); li(i).classList.add("fora"); if (pronto()) P.erro();
      if (k === erradas.length - 1) batimento(0);  // silêncio antes da certa
      await espera(k === erradas.length - 1 ? DEPOIS_ULTIMA : DEPOIS_ERRADA);
    }
    if (!valendo() || !li(certa)) return;
    cartao.classList.remove("tensa");
    li(certa).classList.add("certa", "acende"); if (pronto()) P.acerto(); faiscas(li(certa));
    await espera(SEGURA);
  } finally {
    batimento(0);
    cartao.classList.remove("tensa");
  }
}

// ---------------------------------------------------------------- relógio da rodada (antes do suspense)

// A pergunta apareceu e o prazo começou.
export function somInicio() {
  if (pronto()) arquivo(Math.random() < .5 ? "inicio1" : "inicio2", .9);
}
// Um segundo a menos no prazo: tique-taque (um agudo e um grave, alternados); nos últimos 5 s, o tique da biblioteca,
// mais forte e um pouco mais agudo a cada segundo.
export function somSegundo(faltam) {
  if (!pronto()) return;
  if (faltam <= 5) return arquivo("tique", 1, 1 + (5 - faltam) * .06);
  ruido({ dur: .035, vol: .32, tipo: "bandpass", f: faltam % 2 ? 3400 : 2300, q: 6 });
  tom({ f: faltam % 2 ? 1250 : 880, dur: .03, vol: .06 });
}
// O prazo acabou (ainda dá para responder; o som só avisa).
export function somEsgotado() {
  if (pronto()) arquivo("esgotado", .9);
}

// ---------------------------------------------------------------- contagem da próxima pergunta

// Dez sons para a contagem "Próxima pergunta em X s" (2026-11-23). A cada contagem sai um, sorteado, nunca o mesmo da
// vez anterior; toca um som por segundo, de 10 a 1, mais forte nos 3 últimos. No 0, nada: o som de início da pergunta
// seguinte (somInicio) fecha a contagem.
const CONTAGENS = [
  { nome: "Bipes de rádio",
    segundo: s => tom({ f: s <= 3 ? 1320 : 880, dur: s <= 3 ? .16 : .08, vol: s <= 3 ? .3 : .18 }) },
  { nome: "Sonar",
    segundo: s => { sino(s <= 3 ? 1500 : 1150, { dur: .9, vol: s <= 3 ? .3 : .18 });
                    if (s <= 3) sino(1500, { dur: .6, vol: .2, em: .16 }); } },
  { nome: "Tambor militar",
    segundo: s => { ruido({ dur: .09, vol: s <= 3 ? .5 : .32, tipo: "highpass", f: 1800 }); tom({ f: 180, f2: 140, dur: .08, vol: .2 });
                    if (s <= 3) for (let k = 1; k < 4; k++) ruido({ dur: .05, vol: .25, tipo: "highpass", f: 1800, em: k * .07 }); } },
  { nome: "Pêndulo",
    segundo: s => s <= 3 ? sino([523, 587, 659][3 - s], { dur: 1.1, vol: .3 })
                         : ruido({ dur: .035, vol: .4, tipo: "bandpass", f: s % 2 ? 3400 : 2300, q: 6 }) },
  { nome: "Escada que sobe",
    segundo: s => tom({ f: nota(60 + [0, 2, 4, 5, 7, 9, 11, 12, 14, 16][10 - Math.min(10, s)]), tipo: "square", dur: s <= 3 ? .25 : .12,
                        vol: s <= 3 ? .16 : .1, filtro: { f: 2800 } }) },
  { nome: "Largada de corrida",
    segundo: s => s <= 3 ? tom({ f: s === 1 ? 880 : 440, tipo: "square", dur: s === 1 ? .45 : .22, vol: .16 })
                         : tom({ f: 330, tipo: "square", dur: .05, vol: .08 }) },
  { nome: "Marimba que desce",
    segundo: s => marimba(nota([84, 81, 79, 76, 74, 72, 69, 67, 64, 60][10 - Math.min(10, s)]), { vol: s <= 3 ? .45 : .3 }) },
  { nome: "Coração",
    segundo: s => { const f = s <= 3 ? 1 : .6;
                    tom({ f: 70, f2: 38, dur: .2, vol: .9 * f, ataque: .012 }); tom({ f: 70, f2: 38, dur: .2, vol: .5 * f, ataque: .012, em: .17 }); } },
  { nome: "Gotas",
    segundo: s => { const f = (s <= 3 ? 900 : 1300) + Math.random() * 200;
                    tom({ f, f2: f * 2.2, dur: .12, vol: s <= 3 ? .35 : .22, ataque: .004, comEco: true }); } },
  { nome: "Dim-dom",
    segundo: s => { const [a, b] = s % 2 ? [988, 784] : [784, 988];
                    sino(a, { dur: .7, vol: s <= 3 ? .28 : .16 }); if (s <= 3) sino(b, { dur: .9, vol: .24, em: .18 }); } },
];

// Sons próprios de algumas cenas da contagem (arena-contagem.js), no lugar do sorteado entre os dez de cima
// (2026-11-24: as cinco de Esportes; 2026-11-26: as dez novas de Entretenimento e as dez de Geografia). A chave é a da cena ("tema|n", a de contagem.cena). segundo(s) toca a cada número,
// de 7 a 1, no ritmo da animação; zero(em) toca o fim da cena (gol, apito, buzina, aplauso, largada), marcado no 1 para
// daqui a "em" segundos, porque no jogo o 0 mal aparece antes da pergunta seguinte.
const chute = (vol, pan, em = 0) => { tom({ f: 150, f2: 55, dur: .12, vol, ataque: .003, em, pan });
                                      ruido({ dur: .03, vol: vol * .5, tipo: "lowpass", f: 1400, em, pan }); };
// Até quando vai a torcida gravada do futebol (no relógio do áudio): ela começa no primeiro segundo da contagem e dura
// até logo depois do zero; pararContagem() zera.
let torcidaAte = 0;
function aplauso(em, dur = 1.8, n = 130) {
  for (let k = 0; k < n; k++) {
    const x = Math.random(), forca = Math.sin(Math.PI * Math.min(1, x * 1.3));  // cresce rápido e vai sumindo
    ruido({ dur: .035, vol: .2 + .8 * forca * Math.random(), f: 1200 + Math.random() * 2200, q: .9, em: em + x * dur,
            pan: Math.random() * 1.4 - .7 });
  }
}
const apito = (em, dur, vol = .3) => tom({ f: 2900, tipo: "sine", dur, vol, ataque: .01, em, sustenta: true, vibrato: { f: 32, prof: 260 } });
// ---- Entretenimento (2026-11-26): os sons das dez cenas novas ("Entretenimento|1" a "|10"; a 0, o começo do filme, segue
// com o som sorteado). Instrumentos usados por elas:
// Corda dedilhada (Karplus-Strong): um ruído curto e suavizado, repetido no período da nota, perdendo os agudos.
const cordasProntas = new Map();
function corda(f, { em = 0, vol = .4, dur = 2.4, pan = 0, comEco = true } = {}) {
  if (!pronto()) return;
  vol *= ganho;
  const chave = Math.round(f * 100);
  let b = cordasProntas.get(chave);
  if (!b) {
    const sr = audio.sampleRate, n = Math.floor(sr * 2.6), N = Math.max(2, Math.round(sr / f));
    b = audio.createBuffer(1, n, sr);
    const d = b.getChannelData(0);
    for (let i = 0; i < N; i++) d[i] = Math.random() * 2 - 1;
    for (let p = 0; p < 2; p++) for (let i = 1; i < N; i++) d[i] = .5 * (d[i] + d[i - 1]);
    let m = 0; for (let i = 0; i < N; i++) m += d[i] / N;
    let pico = 0; for (let i = 0; i < N; i++) { d[i] -= m; pico = Math.max(pico, Math.abs(d[i])); }
    for (let i = 0; i < N; i++) d[i] /= pico || 1;
    for (let i = N; i < n; i++) d[i] = .998 * .5 * (d[i - N] + (i - N - 1 >= 0 ? d[i - N - 1] : 0));
    cordasProntas.set(chave, b);
  }
  const t = audio.currentTime + .01 + em, fonte = audio.createBufferSource(), lp = audio.createBiquadFilter(), g = audio.createGain();
  fonte.buffer = b; lp.type = "lowpass"; lp.frequency.value = Math.min(6000, f * 14);
  g.gain.setValueAtTime(vol, t); g.gain.setValueAtTime(vol, t + Math.max(.01, dur - .12)); g.gain.linearRampToValueAtTime(0, t + dur);
  fonte.connect(lp).connect(g); saida(g, pan, comEco);
  fonte.start(t); fonte.stop(t + dur + .02);
}
// O DJ arranhando o disco: um som "vocal" (serra num filtro de formante) com a altura indo e voltando duas vezes.
function arranhao(em, vol = .22) {
  if (!pronto()) return;
  vol *= ganho;
  const t = audio.currentTime + .01 + em;
  const o = audio.createOscillator(), bp = audio.createBiquadFilter(), g = audio.createGain();
  o.type = "sawtooth"; bp.type = "bandpass"; bp.Q.value = 3;
  o.frequency.setValueAtTime(140, t); bp.frequency.setValueAtTime(700, t);
  for (const [dt, fo, fb] of [[.06, 420, 1900], [.11, 120, 600], [.16, 380, 1700], [.24, 90, 500]]) {
    o.frequency.linearRampToValueAtTime(fo, t + dt); bp.frequency.linearRampToValueAtTime(fb, t + dt);
  }
  g.gain.setValueAtTime(.0001, t); g.gain.linearRampToValueAtTime(vol, t + .01); g.gain.linearRampToValueAtTime(vol * .15, t + .11);
  g.gain.linearRampToValueAtTime(vol, t + .13); g.gain.linearRampToValueAtTime(0, t + .25);
  o.connect(bp).connect(g); saida(g, 0, false);
  o.start(t); o.stop(t + .27);
  ruido({ dur: .24, vol: vol * .5, f: 1200, f2: 2600, q: 2, em });
}
// Buzina de DJ: três toques (curto, curto, longo), cada um subindo de leve no começo.
function buzinaDj(em) {
  if (!pronto()) return;
  for (const [ini, len] of [[0, .12], [.18, .12], [.36, .7]]) {
    const t = audio.currentTime + .01 + em + ini;
    for (const f of [466, 471, 934]) {
      const o = audio.createOscillator(), lp = audio.createBiquadFilter(), g = audio.createGain(), v = (f > 900 ? .03 : .07) * ganho;
      o.type = "sawtooth"; o.frequency.setValueAtTime(f * .82, t); o.frequency.exponentialRampToValueAtTime(f, t + .06);
      lp.type = "lowpass"; lp.frequency.value = 2600;
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(v, t + .01);
      g.gain.setValueAtTime(v, t + len - .05); g.gain.exponentialRampToValueAtTime(.0001, t + len);
      o.connect(lp).connect(g); saida(g, 0, true);
      o.start(t); o.stop(t + len + .02);
    }
  }
}
const bumbo = (em, vol = .9) => { tom({ f: 130, f2: 42, dur: .3, vol, ataque: .003, em }); ruido({ dur: .015, vol: vol * .3, tipo: "highpass", f: 3000, em }); };
const tarol = (em, vol = .4) => { ruido({ dur: .16, vol, f: 1900, q: .6, em }); tom({ f: 210, f2: 150, dur: .08, vol: vol * .6, em }); };
const chimbal = (em, vol = .12) => ruido({ dur: .035, vol, tipo: "highpass", f: 7500, em });
const prato = (em, vol = .3) => ruido({ dur: 1.6, vol, tipo: "highpass", f: 5200, em, comEco: true });
const estalo = (em, k = 1) => { ruido({ dur: .045, vol: .75 * k, f: 2100, q: 1.1, ataque: .001, em, comEco: true });
                                ruido({ dur: .018, vol: .45 * k, tipo: "highpass", f: 4500, ataque: .001, em });
                                tom({ f: 340, f2: 150, dur: .06, vol: .4 * k, ataque: .001, em }); };
// A câmera de cinema rodando: 24 quadros por segundo passando na janela e o motor ao fundo.
const rolar = (dur, vol, em = 0) => { for (let k = 0; k < dur * 24; k++) ruido({ dur: .012, vol: vol * (k % 2 ? .8 : 1.2), f: 2600, q: 3, ataque: .001, em: em + k / 24 });
                                      tom({ f: 72, tipo: "sawtooth", dur, vol: vol * .5, ataque: .05, sustenta: true, filtro: { f: 320 }, em }); };
const estouro = (em, vol = .45) => { const f = 700 + Math.random() * 1500, pan = Math.random() * 1.2 - .6;
  ruido({ dur: .028, vol, f, q: 5, ataque: .001, em, pan }); tom({ f: f * .6, f2: f * .3, dur: .03, vol: vol * .4, ataque: .001, em, pan }); };
// Os canais da TV de tubo, segundo a segundo (os mesmos de CANAL_TV em arena-contagem.js), e o som de cada um.
const CANAL_TV = { 7: "barras", 6: "chuvisco", 5: "teste", 4: "noticias", 3: "rolando", 2: "chuvisco", 1: "barras" };
const tvClique = em => { ruido({ dur: .015, vol: .45, tipo: "highpass", f: 3200, ataque: .001, em }); tom({ f: 160, f2: 90, dur: .05, vol: .3, ataque: .002, em }); };
const estatica = (em, dur, vol) => ruido({ dur, vol, f: 3200, q: .35, ataque: .005, em, sustenta: dur > .3 });
const SOM_CANAL = {
  barras: () => tom({ f: 1000, dur: .7, vol: .07, ataque: .01, em: .2, sustenta: true }),  // barras de cor e o tom de 1 kHz
  chuvisco: () => estatica(.15, .85, .12),
  teste: () => { tom({ f: 440, dur: .25, vol: .07, em: .22, sustenta: true }); tom({ f: 440, dur: .25, vol: .07, em: .6, sustenta: true }); },
  rolando: () => { tom({ f: 60, tipo: "sawtooth", dur: .75, vol: .12, em: .18, sustenta: true, filtro: { f: 260 } });
                   tom({ f: 120, tipo: "square", dur: .75, vol: .03, em: .18, sustenta: true, filtro: { f: 500 } }); },
  noticias: () => [72, 79, 84].forEach((m, k) => tom({ f: nota(m), tipo: "sawtooth", dur: k === 2 ? .45 : .12, vol: .07, em: .2 + k * .13, filtro: { f: 2400 }, comEco: true })),
};
const chiadoVinil = () => { ruido({ dur: 1.02, vol: .018, tipo: "highpass", f: 6000, sustenta: true });
                            for (let k = 0; k < 7; k++) ruido({ dur: .004, vol: .12 + Math.random() * .15, tipo: "highpass", f: 1800, ataque: .001, em: Math.random() }); };
const CORDAS_HZ = [82.41, 110, 146.83, 196, 246.94, 329.63];  // as seis cordas soltas, da 6ª (Mi grave) à 1ª (Mi agudo)
const vuuu = (em, dur, de, ate, vol = .3) => ruido({ dur, vol, f: de, f2: ate, q: 1.6, ataque: dur * .6, em });
const soco = (k = 1) => { vuuu(0, .09, 500, 1800, .25 * k); tom({ f: 140, f2: 55, dur: .2, vol: .85 * k, ataque: .002, em: .06 });
                          ruido({ dur: .08, vol: .35 * k, tipo: "lowpass", f: 900, em: .06 }); };
const SOM_HQ = {  // uma onomatopeia por segundo, cada uma com o seu som
  7: () => soco(.9),                                                                                                           // POW!
  6: () => { soco(1.1); tom({ f: 90, f2: 45, dur: .3, vol: .6, em: .06 }); },                                                  // BAM!
  5: () => vuuu(0, .22, 400, 3500),                                                                                             // ZÁS!
  4: () => { tom({ f: 75, f2: 48, dur: .45, vol: .9, ataque: .004 }); ruido({ dur: .12, vol: .3, tipo: "lowpass", f: 400 }); }, // TUM!
  3: () => { ruido({ dur: .06, vol: .8, tipo: "highpass", f: 1600, ataque: .001 }); ruido({ dur: .03, vol: .4, f: 900, em: .01 }); }, // PLAFT!
  2: () => { soco(); ruido({ dur: .9, vol: .35, tipo: "highpass", f: 2500, f2: 6000, em: .04, comEco: true });                // CRÁS!
             for (let k = 0; k < 6; k++) ruido({ dur: .05, vol: .25, f: 2000 + Math.random() * 3000, q: 4, em: .06 + k * .05 }); },
  1: () => vuuu(0, .3, 300, 4800),                                                                                              // VUPT!
};
const taiko = (em, vol = .9) => { tom({ f: 118, f2: 72, dur: .45, vol, ataque: .004, em }); tom({ f: 236, f2: 150, dur: .12, vol: vol * .25, ataque: .002, em });
                                  ruido({ dur: .06, vol: vol * .35, tipo: "lowpass", f: 600, em }); };
const darCarta = (em = 0) => { ruido({ dur: .09, vol: .3, f: 3400, f2: 1600, q: .8, ataque: .015, em });
                               ruido({ dur: .035, vol: .45, tipo: "lowpass", f: 1600, ataque: .002, em: em + .32 }); tom({ f: 170, f2: 110, dur: .04, vol: .18, em: em + .32 }); };
const fichaCassino = em => { tom({ f: 3300, dur: .07, vol: .07, ataque: .001, em }); tom({ f: 4450, dur: .05, vol: .05, ataque: .001, em: em + .004 }); };
const NOTA_FLIPERAMA = { 7: 69, 6: 67, 5: 65, 4: 64, 3: 62, 2: 60, 1: 59 };  // o bipe do "Continuar?" desce a cada segundo
// ---- Geografia (2026-11-26): os sons das dez cenas novas ("Geografia|1" a "|10"; a 0, o globo, segue com o som
// sorteado). Instrumentos a mais:
// Fala inventada: cada vogal é uma sílaba, uma serra passando por dois filtros nas formantes da vogal (sem palavras de
// verdade, só a melodia e o timbre de quem fala).
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
    ruido({ dur: .03, vol: .07, tipo: "highpass", f: 3200, ataque: .002, em: t - audio.currentTime - .01, pan });  // a consoante
    t += dur + .02;
  });
}
const chiadoDeCliques = (n, janela, em = 0, vol = 1) => { for (let k = 0; k < n; k++) {
  ruido({ dur: .006, vol: vol * (.12 + Math.random() * .25), tipo: "highpass", f: 2400 + Math.random() * 2200, ataque: .001, em: em + Math.random() * janela });
  if (k % 4 === 0) tom({ f: 420 + Math.random() * 200, dur: .015, vol: vol * .05, ataque: .001, em: em + Math.random() * janela }); } };
// As vozes dos "olás" da cena dos idiomas (vogais, altura e entonação), de 7 a 0.
const VOZES_OLA = {7: ["oiia", 250, -.15], 6: ["ao", 140, .1], 5: ["aaa", 175, .05], 4: ["ie", 130, -.1], 3: ["aae", 215, .12], 2: ["ia", 255, -.25], 1: ["ou", 165, .2], 0: ["oa", 205, .35]};
// Os sons de cada bioma: aves, sapos, grilos, vento, água.
const piado = (em, f, f2, dur = .08, vol = .05, pan = 0) => tom({ f, f2, dur, vol, ataque: .004, em, pan });
const SOM_BIOMA = {
  7: () => { for (let k = 0; k < 6; k++) piado(Math.random() * .9, 2600 + Math.random() * 1400, 3800 + Math.random() * 800, .06, .04, Math.random() - .5);  // Amazônia: aves e sapos
             for (let k = 0; k < 3; k++) tom({ f: 160, f2: 120, tipo: "square", dur: .06, vol: .03, filtro: { f: 600 }, em: .2 + k * .12 }); },
  6: () => { [0, .14, .26, .36, .45, .53].forEach((t, k) => piado(t, 1500 - k * 60, 900, .1, .06, .3));  // Cerrado: a seriema
             for (let k = 0; k < 10; k++) tom({ f: 4600, dur: .02, vol: .015, em: .05 + k * .09 }); },  // grilos
  5: () => { ruido({ dur: 1, vol: .08, tipo: "highpass", f: 1800, ataque: .4 });  // Caatinga: vento seco e o chocalho de uma cabra
             [.3, .5].forEach(t => sino(1250, { dur: .5, vol: .05, em: t, comEco: false })); },
  4: () => { for (let k = 0; k < 8; k++) ruido({ dur: .012, vol: .2, f: 1700, q: 3, em: .15 + k * .045 });  // Pantanal: o tuiuiú batendo o bico
             tom({ f: 300, f2: 900, dur: .1, vol: .05, em: .7 }); ruido({ dur: .25, vol: .08, tipo: "lowpass", f: 700, em: .7 }); },  // e água
  3: () => { for (let k = 0; k < 24; k++) ruido({ dur: .01, vol: .1, tipo: "highpass", f: 3500, em: Math.random() });  // Mata Atlântica: chuva nas folhas e o sabiá
             [[2093, 0], [1760, .14], [1976, .28], [1568, .44]].forEach(([f, t]) => tom({ f, dur: .13, vol: .1, ataque: .01, em: t, vibrato: { f: 7, prof: 12 } })); },
  2: () => { ruido({ dur: 1, vol: .16, tipo: "lowpass", f: 500, f2: 900, ataque: .3 });  // Pampa: vento no campo e o quero-quero
             [0, .16, .32].forEach(t => piado(.3 + t, 2900, 2400, .1, .12, -.3)); },
  1: () => { ruido({ dur: 1, vol: .22, tipo: "lowpass", f: 380, f2: 1100, ataque: .45 }); [.45, .75].forEach(t => piado(t, 1500, 1050, .25, .1)); },  // Costa: onda e gaivota
};
const SONS_CENAS = {
  // Futebol (2026-11-24, a sugestão 2 de cinco com torcida gravada): a hinchada do Independiente ao fundo, crescendo nos três
  // últimos segundos, e um chute a cada passe, a bola indo da esquerda para a direita. No zero, o chute a gol, a rede e a
  // explosão do gol de Cali. A torcida começa no primeiro segundo que toca (do ponto certo, se a contagem já ia no meio)
  // e acaba logo depois do zero.
  "Esportes|0": {
    nome: "Hinchada e gol",
    segundo: s => {
      if (audio.currentTime >= torcidaAte) {
        const fim = s + .8, sobe = Math.max(.25, s - 3);
        torcidaAte = audio.currentTime + fim;
        trecho("torcidaFundo", { de: Math.max(0, 7 - s), dur: fim,
          envelope: [[.25, .25], [sobe, .25], [Math.max(sobe, s), .5], [s + .5, .15]] });
      }
      chute(.65, -.6 + (7 - s) * .17);
    },
    zero: em => { chute(.8, .7, em); ruido({ dur: .4, vol: .3, tipo: "highpass", f: 3200, em: em + .45, pan: .8 });
                  trecho("torcidaGol", { em: em + .15, dur: 4.2, envelope: [[.05, 1], [1.8, 1], [4, .15]] }); } },
  // Vôlei: a manchete a cada segundo, de um lado e do outro da rede; nos três últimos, cortadas. No zero, o apito do juiz.
  "Esportes|1": {
    nome: "Manchetes e apito",
    segundo: s => { const pan = s % 2 ? -.5 : .5, forte = s <= 3;
                    tom({ f: forte ? 190 : 160, f2: 100, dur: .1, vol: forte ? .6 : .45, ataque: .003, pan });
                    ruido({ dur: forte ? .08 : .06, vol: forte ? .45 : .3, f: forte ? 1300 : 900, q: 1.4, pan }); },
    zero: em => { apito(em, .14); apito(em + .22, .6); } },
  // Basquete: o drible no meio de cada segundo (quando a bola bate no chão) e o tique do relógio de posse, que vira bipe
  // nos três últimos. No zero, a buzina, enquanto a luz da tabela pisca.
  "Esportes|2": {
    nome: "Drible e buzina",
    segundo: s => { tom({ f: s <= 3 ? 1000 : 1500, tipo: s <= 3 ? "sine" : "square", dur: s <= 3 ? .12 : .025, vol: s <= 3 ? .18 : .04 });
                    tom({ f: 120, f2: 65, dur: .13, vol: .7, ataque: .003, em: .5 });
                    ruido({ dur: .05, vol: .3, tipo: "lowpass", f: 500, em: .5 });
                    ruido({ dur: .08, vol: .06, f: 2400, q: 3, em: .53, comEco: true }); },  // o eco do ginásio
    zero: em => [[233, "sawtooth"], [277, "sawtooth"], [466, "square"]].forEach(([f, tipo]) =>
      tom({ f, tipo, dur: 1.4, vol: .17, ataque: .02, em, sustenta: true, filtro: { f: 2200 }, comEco: true })) },
  // Tênis: a raquetada de um lado e o quique da bola no saibro do outro, a cada segundo. No zero, o aplauso.
  "Esportes|3": {
    nome: "Raquetadas e aplauso",
    segundo: s => { const lado = s % 2 ? .55 : -.55;  // onde a bola quica; a raquetada sai do outro lado
                    tom({ f: 950, f2: 520, dur: .06, vol: .6, ataque: .002, pan: -lado });
                    ruido({ dur: .05, vol: .7, f: 1900, q: 2, pan: -lado });
                    tom({ f: 210, f2: 120, dur: .07, vol: .4, em: .75, pan: lado });
                    ruido({ dur: .08, vol: .45, tipo: "lowpass", f: 600, em: .75, pan: lado }); },
    zero: em => aplauso(em + .1) },
  // Automobilismo: o motor em marcha lenta; um bipe a cada luz vermelha que acende (de 7 a 3); nos dois últimos, o motor
  // acelera parado. No zero, o bipe agudo das luzes verdes e o carro arrancando, com o pneu cantando.
  "Esportes|4": {
    nome: "Luzes e motor",
    segundo: s => { const acelera = s <= 2;
                    tom({ f: acelera ? 70 : 52, f2: acelera ? 105 : 50, tipo: "sawtooth", dur: 1.05, vol: acelera ? .16 : .11, ataque: .05,
                          sustenta: true, filtro: { f: acelera ? 700 : 380 }, vibrato: { f: acelera ? 26 : 16, prof: 3 } });
                    if (s >= 3) tom({ f: 440, tipo: "square", dur: .2, vol: .16, filtro: { f: 2500 } }); },
    zero: em => { tom({ f: 880, tipo: "square", dur: .45, vol: .18, em, filtro: { f: 3000 } });
                  tom({ f: 90, f2: 520, tipo: "sawtooth", dur: 1.3, vol: .22, ataque: .02, em, filtro: { f: 600, f2: 3200 }, comEco: true });
                  tom({ f: 180, f2: 1040, tipo: "sawtooth", dur: 1.1, vol: .07, ataque: .02, em, filtro: { f: 1200, f2: 4000 } });
                  ruido({ dur: .5, vol: .16, f: 2600, q: 8, em: em + .03 }); } },
  // Entretenimento (2026-11-26). Claquete: o estalo a cada segundo, junto da haste batendo; nos três últimos, a câmera
  // rodando. No zero, o estalo, a câmera e um golpe de orquestra ("Ação!").
  "Entretenimento|1": {
    nome: "Claquete e câmera rodando", ganho: [1.15, 0.62],
    segundo: s => { estalo(.08, s <= 3 ? 1 : .8); if (s <= 3) rolar(1, .05 + .025 * (3 - s)); },
    zero: em => { estalo(em + .02, 1.25); rolar(1.4, .1, em);
                  [60, 64, 67, 72, 76].forEach(m => tom({ f: nota(m), tipo: "sawtooth", dur: 1.5, vol: .05, ataque: .04, em: em + .1, filtro: { f: 900, f2: 3400 }, comEco: true }));
                  tom({ f: 98, f2: 82, dur: 1.1, vol: .7, ataque: .005, em: em + .1 }); } },
  // Pipoca: 1 estouro no 7, 2 no 6… 7 no 1, nos mesmos instantes em que os grãos pulam, com o chiado da panela crescendo.
  // No zero, uma rajada que vai rareando.
  "Entretenimento|2": {
    nome: "Pipoca estourando", ganho: [1.32, 3.16],
    segundo: s => { const n = 8 - s; for (let j = 0; j < n; j++) estouro(j * .8 / n + .04, .35 + .02 * (7 - s));
                    ruido({ dur: 1.02, vol: .02 + .006 * (7 - s), tipo: "highpass", f: 5500, sustenta: true }); },
    zero: em => { for (let j = 0; j < 26; j++) { const x = j / 26; estouro(em + .02 + Math.pow(x, 1.4) * 1.4, .5 * (1 - x * .5)); } } },
  // TV de tubo: o clique do botão, um estalo de estática e o som do canal (o tom de 1 kHz nas barras, o chuvisco, os bipes
  // do padrão de teste, a vinheta do noticiário, o zumbido da imagem rolando). No zero, o tubo acende e toca a vinheta.
  "Entretenimento|3": {
    nome: "Troca de canal", ganho: [0.77, 1.04],
    segundo: s => { tvClique(0); estatica(.01, .17, .25); SOM_CANAL[CANAL_TV[s]]?.(); },
    zero: em => { tvClique(em); tom({ f: 55, f2: 38, dur: .45, vol: .6, em: em + .02 }); tom({ f: 140, dur: .7, vol: .12, em: em + .02, vibrato: { f: 9, prof: 18 } });
                  [67, 72, 76, 79].forEach((m, k) => tom({ f: nota(m), tipo: "square", dur: k === 3 ? .6 : .14, vol: .07, em: em + .25 + k * .12, filtro: { f: 2800 }, comEco: true })); } },
  // Toca-discos: batida a 120 por minuto (bumbo, chimbal, caixa) com o chiado do vinil; nos três últimos, o arranhão do DJ,
  // e no 1 a virada da caixa. No zero, o bumbo, o prato, um grave longo e a buzina de DJ.
  "Entretenimento|4": {
    nome: "Batida, arranhão e buzina de DJ", ganho: [0.46, 0.19],
    segundo: s => {
      chiadoVinil(); bumbo(0, .8); chimbal(.25); chimbal(.75);
      if (s === 1) { arranhao(.02); for (let k = 0; k < 4; k++) tarol(.5 + k * .125, .22 + k * .06); }
      else { tarol(.5); if (s <= 3) { arranhao(.02); arranhao(.52); } }
    },
    zero: em => { bumbo(em, 1); prato(em, .3); tom({ f: 55, f2: 41, dur: 1.4, vol: .8, ataque: .01, em, sustenta: true }); buzinaDj(em + .05); } },
  // Violão: afinando, as cordas soltas de 7 a 2 (Mi, Lá, Ré, Sol, Si, Mi), os harmônicos no 1 e, no zero, o acorde C7M(9)
  // na batida da bossa nova (o acorde, a batida sincopada abafada e o polegar no baixo).
  "Entretenimento|5": {
    nome: "Afinação e acorde de bossa", ganho: [0.4, 0.68],
    segundo: s => {
      if (s >= 2) return corda(CORDAS_HZ[7 - s], { vol: .5, pan: -.3 + (7 - s) * .12 });
      tom({ f: 164.81, dur: 2, vol: .16, comEco: true }); tom({ f: 659.26, dur: 1.8, vol: .14, comEco: true }); tom({ f: 1318.5, dur: .5, vol: .03 });
    },
    zero: em => {
      const acorde = [130.81, 164.81, 246.94, 293.66, 392.0];  // C7M(9): dó, mi, si, ré, sol
      acorde.forEach((f, k) => corda(f, { em: em + k * .025, vol: .32 }));
      acorde.slice(1).forEach((f, k) => corda(f, { em: em + .375 + k * .012, vol: .16, dur: .35 }));
      corda(98, { em: em + .5, vol: .38, dur: 1.2 });
      acorde.slice(1).forEach((f, k) => corda(f, { em: em + .75 + k * .012, vol: .13, dur: .3 }));
    } },
  // Quadrinhos: o som de cada onomatopeia (POW, BAM, ZÁS, TUM, PLAFT, CRÁS, VUPT). No zero, a explosão do KABUM.
  "Entretenimento|6": {
    nome: "Onomatopeias", ganho: [0.34, 0.38],
    segundo: s => SOM_HQ[s]?.(),
    zero: em => { tom({ f: 70, f2: 28, dur: 1.4, vol: 1, ataque: .005, em }); ruido({ dur: 1.6, vol: .55, tipo: "lowpass", f: 1400, f2: 90, ataque: .005, em, comEco: true });
                  for (let k = 0; k < 14; k++) ruido({ dur: .03, vol: .2, tipo: "highpass", f: 2500, em: em + .1 + Math.random() * .9 }); } },
  // Mangá: um taikô por segundo, com o zum que entra no número seguinte; nos três últimos, o poder carregando, mais agudo a
  // cada segundo. No zero, dois taikôs ("ドン") e o brilho da espada.
  "Entretenimento|7": {
    nome: "Taikô e brilho de espada", ganho: [0.35, 0.47],
    segundo: s => {
      taiko(0, s <= 3 ? 1 : .75);
      ruido({ dur: .2, vol: .18, f: 500, f2: 3200, q: 1.2, ataque: .18, em: .78 });
      if (s <= 3) { const f = 196 * Math.pow(1.26, 3 - s); tom({ f, f2: f * 1.25, tipo: "sawtooth", dur: 1, vol: .045, ataque: .1, filtro: { f: 900, f2: 2600 }, vibrato: { f: 11, prof: 5 } }); }
    },
    zero: em => { taiko(em, 1); taiko(em + .14, 1.1);
                  [2637, 3520, 4699].forEach((f, k) => tom({ f, dur: 1.3 - k * .3, vol: .07, ataque: .002, em: em + .02, comEco: true }));
                  ruido({ dur: .35, vol: .2, tipo: "highpass", f: 6000, em: em + .02 }); } },
  // Cartas: a carta deslizando e o tapa na mesa quando ela pousa; fichas nos três últimos. No zero, o curinga com um brilho
  // e uma pilha de fichas.
  "Entretenimento|8": {
    nome: "Cartas dadas e fichas", ganho: [2.92, 2.21],
    segundo: s => { darCarta(0); if (s <= 3) { fichaCassino(.6); fichaCassino(.68); } },
    zero: em => { darCarta(em); [84, 88, 91, 96].forEach((m, k) => tom({ f: nota(m), dur: .7, vol: .09, ataque: .003, em: em + .36 + k * .07, comEco: true }));
                  for (let k = 0; k < 5; k++) fichaCassino(em + .55 + k * .06); } },
  // Fliperama: o bipe do "Continuar?", mais grave a cada segundo, e dobrado nos três últimos. No zero, a ficha e a música do START.
  "Entretenimento|9": {
    nome: "Bipes de “Continuar?” e ficha", ganho: [3.98, 3.04],
    segundo: s => { const f = nota(NOTA_FLIPERAMA[s] + 12);
      tom({ f, tipo: "square", dur: .16, vol: .1 }); tom({ f: f / 2, tipo: "square", dur: .16, vol: .05 }); tom({ f, tipo: "square", dur: .12, vol: .03, em: .19 });
      if (s <= 3) { tom({ f: f * 2, tipo: "square", dur: .08, vol: .06, em: .4 }); tom({ f: f * 2, tipo: "square", dur: .08, vol: .06, em: .52 }); } },
    zero: em => { [84, 91, 96].forEach((m, k) => tom({ f: nota(m), tipo: "square", dur: .06, vol: .09, em: em + k * .05 }));
      [[72, 0, .08], [76, .09, .08], [79, .18, .08], [84, .27, .08], [79, .36, .08], [84, .45, .4]].forEach(([m, t, d]) =>
        tom({ f: nota(m), tipo: "square", dur: d, vol: .08, em: em + .22 + t }));
      tom({ f: nota(48), tipo: "triangle", dur: .25, vol: .25, em: em + .22 }); tom({ f: nota(43), tipo: "triangle", dur: .45, vol: .25, em: em + .67 }); } },
  // Nave: a nave se move, o laser aos 0,3 s e a explosão aos 0,45 s, como na animação; nos três últimos, o alarme. No zero,
  // o salto de fase e a musiquinha da fase nova.
  "Entretenimento|10": {
    nome: "Laser, explosão e salto de fase", ganho: [2.11, 3.16],
    segundo: s => {
      tom({ f: 260, f2: 420, tipo: "square", dur: .07, vol: .04 });
      tom({ f: 1900, f2: 240, tipo: "square", dur: .17, vol: .09, em: .3 }); tom({ f: 950, f2: 120, tipo: "sawtooth", dur: .17, vol: .04, em: .3 });
      ruido({ dur: .38, vol: .4, tipo: "lowpass", f: 2200, f2: 160, ataque: .003, em: .45 }); tom({ f: 130, f2: 40, tipo: "square", dur: .3, vol: .08, em: .45 });
      if (s <= 3) { tom({ f: 660, tipo: "triangle", dur: .12, vol: .06, em: .72 }); tom({ f: 520, tipo: "triangle", dur: .12, vol: .06, em: .86 }); }
    },
    zero: em => { tom({ f: 140, f2: 2600, tipo: "sawtooth", dur: .75, vol: .07, ataque: .02, em: em + .1, filtro: { f: 600, f2: 6000 } });
      ruido({ dur: .7, vol: .15, tipo: "highpass", f: 800, f2: 7000, ataque: .3, em: em + .1 });
      [[76, 0], [79, .1], [84, .2], [88, .3]].forEach(([m, t]) => tom({ f: nota(m), tipo: "square", dur: .09, vol: .08, em: em + .55 + t }));
      tom({ f: nota(91), tipo: "square", dur: .45, vol: .08, em: em + .95 }); } },
  // Geografia, o painel do aeroporto.
  "Geografia|1": {
    nome: "Letras virando e aviso de embarque", ganho: [1.59, 1.8],
    segundo: () => chiadoDeCliques(46, .55),
    zero: em => { chiadoDeCliques(30, .5, em); [67, 72, 76].forEach((m, k) => sino(nota(m), { dur: 1.4, vol: .14, em: em + .55 + k * .3 })); },
  },
  // Geografia, a bússola.
  "Geografia|2": {
    nome: "Agulha e sino de navio", ganho: [1.65, 0.79],
    segundo: s => { ruido({ dur: .4, vol: .22, f: 700, f2: 2600, q: 1, ataque: .15 });  // a agulha girando
                    [.4, .55, .66, .74].forEach((t, k) => tom({ f: 2900 - k * 150, dur: .05, vol: .16 / (k + 1), ataque: .001, em: t }));  // batendo no pino até parar
                    tom({ f: nota(84 + [0, 2, 4, 7, 9, 12, 14][7 - s]), dur: .9, vol: .07, ataque: .005, em: .42, comEco: true });  // a nota do rumo
                    if (s <= 3) tom({ f: 110, f2: 92, tipo: "sawtooth", dur: .5, vol: .09, ataque: .08, filtro: { f: 420 }, vibrato: { f: 5, prof: 3 } }); },  // o casco rangendo
    zero: em => { sino(660, { dur: 2, vol: .3, em }); sino(660, { dur: 2, vol: .3, em: em + .32 }); },
  },
  // Geografia, os monumentos à noite.
  "Geografia|3": {
    nome: "Holofotes e fogos", ganho: [0.78, 2.85],
    segundo: s => { tom({ f: 120, f2: 55, dur: .1, vol: .5, ataque: .002 }); ruido({ dur: .05, vol: .3, tipo: "lowpass", f: 600 });
                    tom({ f: 100, tipo: "sawtooth", dur: .6, vol: .035, ataque: .05, filtro: { f: 400 }, em: .05 });
                    sino(nota([60, 62, 64, 67, 69, 72, 74][7 - s]), { dur: 1.4, vol: .14, em: .12 }); },
    zero: em => [0, 1, 2, 3].forEach(b => { const t = em + b * .28;
      tom({ f: 700, f2: 2300, dur: .42, vol: .05, ataque: .05, em: t - .3 < 0 ? t : t - .3 });
      ruido({ dur: .7, vol: .45, tipo: "lowpass", f: 1400, f2: 180, ataque: .003, em: t + .15, comEco: true });
      for (let k = 0; k < 8; k++) ruido({ dur: .02, vol: .15, tipo: "highpass", f: 3000, ataque: .001, em: t + .3 + Math.random() * .6 }); }),
  },
  // Geografia, as bandeiras.
  "Geografia|4": {
    nome: "Tambor, corda e fanfarra", ganho: [0.84, 0.58],
    segundo: s => { const br = s === 1;
      for (let k = 0; k < (br ? 14 : 9); k++) tarol(k * .055, .08 + k * (br ? .022 : .02));  // o rufar enquanto a bandeira sobe
      for (let k = 0; k < 3; k++) tom({ f: 2100 + k * 120, f2: 2500, dur: .06, vol: .025, em: .1 + k * .2 });  // a roldana
      ruido({ dur: .35, vol: .12, tipo: "lowpass", f: 700, ataque: .02, em: .7 });  // o pano estalando no alto
      if (br) prato(.75, .25); },
    zero: em => { [[67, 0, .1], [67, .12, .1], [67, .24, .1], [72, .36, .7]].forEach(([m, t, d]) => {
        tom({ f: nota(m), tipo: "sawtooth", dur: d + .1, vol: .1, ataque: .02, em: em + t, filtro: { f: 2400 }, comEco: true });
        tom({ f: nota(m - 5), tipo: "sawtooth", dur: d + .1, vol: .06, ataque: .02, em: em + t, filtro: { f: 1800 } }); });
      [64, 67].forEach(m => tom({ f: nota(m), tipo: "sawtooth", dur: .8, vol: .05, ataque: .03, em: em + .36, filtro: { f: 2200 }, comEco: true }));
      tom({ f: 98, f2: 80, dur: .9, vol: .7, em: em + .36 }); prato(em + .36, .28); },
  },
  // Geografia, os idiomas.
  "Geografia|5": {
    nome: "Vozes em sete línguas", ganho: [1.33, 2.02],
    segundo: s => { const [v, f0, c] = VOZES_OLA[s]; tom({ f: 900, f2: 1500, dur: .05, vol: .08, ataque: .002 });
                    falar(v, { em: .08, f0, contorno: c, pan: Math.cos(-Math.PI / 2 + (7 - s) * 2 * Math.PI / 7) * .6 }); },
    zero: em => { falar(VOZES_OLA[0][0], { em, f0: VOZES_OLA[0][1], contorno: VOZES_OLA[0][2], vol: .6 }); [79, 84, 88].forEach((m, k) => sino(nota(m), { dur: 1, vol: .08, em: em + .4 + k * .08 })); },
  },
  // Geografia, o vulcão.
  "Geografia|6": {
    nome: "Ronco da terra e erupção", ganho: [0.28, 0.33],
    segundo: s => { const k = 7 - s;
      ruido({ dur: 1.05, vol: .16 + .05 * k, tipo: "lowpass", f: 240, q: .8, sustenta: true, ataque: .08 });  // o ronco, com corpo nos médios
      tom({ f: 48, dur: 1.05, vol: .1 + .03 * k, ataque: .1, sustenta: true });
      for (let j = 0; j < 3 + k; j++) { const f = 140 + Math.random() * 220; tom({ f, f2: f * 1.6, dur: .07, vol: .12, ataque: .006, em: Math.random() * .9 }); }  // a lava borbulhando
      ruido({ dur: .3, vol: .05 + .01 * k, tipo: "highpass", f: 2500, ataque: .05, em: .2 });  // o gás saindo
      if (s <= 3) { tom({ f: 90, f2: 45, dur: .3, vol: .6, ataque: .004 }); for (let j = 0; j < 8; j++) ruido({ dur: .025, vol: .2, f: 900, q: 1.5, em: Math.random() * .9 }); } },  // pedras rolando
    zero: em => { tom({ f: 60, f2: 24, dur: 1.8, vol: 1, ataque: .004, em }); ruido({ dur: 2.2, vol: .7, tipo: "lowpass", f: 900, f2: 70, ataque: .004, em, comEco: true });
                  for (let j = 0; j < 18; j++) ruido({ dur: .03, vol: .2, tipo: "lowpass", f: 1800, em: em + .3 + Math.random() * 1.4 }); },
  },
  // Geografia, o Everest.
  "Geografia|7": {
    nome: "Passos na neve e vento", ganho: [1.88, 3.16],
    segundo: s => { const k = 7 - s;
      ruido({ dur: 1.05, vol: .05 + .025 * k, f: 500, f2: 900, q: .8, ataque: .3, sustenta: true });  // o vento, mais forte lá em cima
      [.08, .5].forEach(t => ruido({ dur: .09, vol: .3, f: 1400 + Math.random() * 900, q: .9, ataque: .004, em: t }));  // passos na neve
      tom({ f: 2600, dur: .16, vol: .05, ataque: .001, em: .32 }); tom({ f: 5200, dur: .06, vol: .02, ataque: .001, em: .32 });  // a piqueta no gelo
      if (s <= 3) { ruido({ dur: .35, vol: .09, f: 1200, q: .6, ataque: .25, em: .05 }); ruido({ dur: .3, vol: .08, tipo: "lowpass", f: 900, ataque: .02, em: .5 }); } },  // fôlego
    zero: em => { ruido({ dur: 1.6, vol: .2, f: 700, f2: 1300, q: .7, ataque: .4, em });
                  for (let k = 0; k < 6; k++) ruido({ dur: .05, vol: .12, tipo: "lowpass", f: 900, em: em + .2 + k * .09 });  // a bandeira batendo no vento
                  [48, 55, 60, 64, 67, 74].forEach(m => tom({ f: nota(m), tipo: "sawtooth", dur: 1.8, vol: .04, ataque: .35, em: em + .1, filtro: { f: 1800 }, comEco: true })); },
  },
  // Geografia, o Rio São Francisco.
  "Geografia|8": {
    nome: "Água correndo e mar", ganho: [1.7, 3.16],
    segundo: s => { const k = 7 - s;
      ruido({ dur: 1.05, vol: .04 + .018 * k, f: 900, q: .45, ataque: .15, sustenta: true });
      for (let j = 0; j < 3 + k; j++) { const f = 500 + Math.random() * 700, t = Math.random() * .9; tom({ f, f2: f * 1.9, dur: .06, vol: .05, ataque: .004, em: t }); }  // bolhas
      tom({ f: 880, dur: .5, vol: .05, ataque: .004, comEco: true }); },  // a cidade que a água alcança
    zero: em => { ruido({ dur: 2.2, vol: .35, tipo: "lowpass", f: 500, f2: 1500, ataque: .7, em, comEco: true });
                  [0, .35].forEach(t => { tom({ f: 1500, f2: 1050, tipo: "triangle", dur: .28, vol: .06, ataque: .02, em: em + .5 + t, vibrato: { f: 18, prof: 40 } }); }); },  // gaivota,
  },
  // Geografia, o farol.
  "Geografia|9": {
    nome: "Ondas, lampejo e buzina de nevoeiro", ganho: [1.19, 1.32],
    segundo: s => { ruido({ dur: 1, vol: .14, tipo: "lowpass", f: 380, f2: 1100, ataque: .45 });  // a onda
      tom({ f: 1760, dur: .6, vol: .035, ataque: .01, em: .25, comEco: true });  // o lampejo
      if (s % 2 === 0) sino(520, { dur: 1.2, vol: .08, em: .6 });  // a boia
      if (s <= 3) [73.4, 110].forEach(f => tom({ f, tipo: "sawtooth", dur: .42, vol: .1, ataque: .05, em: .55, sustenta: true, filtro: { f: 650 } })); },
    zero: em => { [73.4, 110, 146.8].forEach((f, k) => tom({ f, tipo: "sawtooth", dur: 1.7, vol: k === 2 ? .04 : .12, ataque: .12, em, sustenta: true, filtro: { f: 700 }, comEco: true }));
                  ruido({ dur: 1.4, vol: .14, tipo: "lowpass", f: 400, f2: 1000, ataque: .5, em: em + .3 }); },
  },
  // Geografia, os biomas do Brasil.
  "Geografia|10": {
    nome: "Sons de cada bioma", ganho: [1.76, 1.66],
    segundo: s => SOM_BIOMA[s]?.(),
    zero: em => [60, 64, 67, 72, 76].forEach((m, k) => sino(nota(m), { dur: 1.3, vol: .1, em: em + k * .09 })),
  },
};
let contagemDaVez = -1;
// Uma contagem nova começou: sorteia o som dela (o das cenas sem som próprio) e devolve o nome dele.
export function novaContagem() {
  let k;
  do { k = Math.floor(Math.random() * CONTAGENS.length); } while (k === contagemDaVez && CONTAGENS.length > 1);
  contagemDaVez = k;
  return CONTAGENS[k].nome;
}
// Um segundo da contagem (de ESPERA_PROXIMA, hoje 7, até 1; os sons servem para até 10). Com a cena (contagem.cena) e um
// som próprio para ela, toca o dele; senão, o sorteado.
export function somContagem(s, cena) {
  if (!pronto() || s < 1) return;
  const proprio = SONS_CENAS[cena];
  if (proprio) {
    const [gs, gz] = proprio.ganho || [1, 1];
    try { ganho = gs; proprio.segundo(s); if (s === 1 && proprio.zero) { ganho = gz; proprio.zero(1); } }
    finally { ganho = 1; }
    return;
  }
  if (contagemDaVez < 0) novaContagem();
  CONTAGENS[contagemDaVez].segundo(s);
}
// O nome do som próprio da cena, ou null (a galeria, contagens.html, mostra qual som está tocando).
export const somDaCena = cena => SONS_CENAS[cena]?.nome || null;
export const NOMES_CONTAGENS = CONTAGENS.map(c => c.nome);
