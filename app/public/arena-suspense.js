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
// (2026-11-24: as cinco de Esportes). A chave é a da cena ("tema|n", a de contagem.cena). segundo(s) toca a cada número,
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
  if (proprio) { proprio.segundo(s); if (s === 1) proprio.zero?.(1); return; }
  if (contagemDaVez < 0) novaContagem();
  CONTAGENS[contagemDaVez].segundo(s);
}
// O nome do som próprio da cena, ou null (a galeria, contagens.html, mostra qual som está tocando).
export const somDaCena = cena => SONS_CENAS[cena]?.nome || null;
export const NOMES_CONTAGENS = CONTAGENS.map(c => c.nome);
