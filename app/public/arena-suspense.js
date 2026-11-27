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
  if (!v) { batimento(0); pararContagem(); pararResultado(); }
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
// Saída de um som: no centro ou, com pan (de -1, esquerda, a 1, direita), de um lado; e o eco, se pedido. Enquanto os sons
// de uma roleta ou de uma animação de resultado são marcados, vão para o barramento dela (saidaCena), que pode ser apagado.
let saidaCena = null;
function saida(g, pan, comEco) {
  let no = g;
  if (pan && audio.createStereoPanner) { const p = audio.createStereoPanner(); p.pan.value = pan; g.connect(p); no = p; }
  no.connect(saidaCena?.seco || mestre); if (comEco) no.connect(saidaCena?.molhado || eco);
}
// Um trecho de um arquivo, marcado para daqui a "em" segundos, a partir de "de" segundos do arquivo, por "dur" segundos,
// com o volume seguindo "envelope" ([segundos desde o começo, volume], em rampas). Fica em "tocandoTrechos" até acabar,
// para pararContagem() poder calar a torcida quando a contagem é interrompida.
const tocandoTrechos = new Set();
async function trecho(nome, { em = 0, de = 0, dur, envelope = [[0, 1]] }) {
  if (!pronto()) return;
  const g0 = ganho;  // o ganho da cena: quando o arquivo chega, ele já voltou a 1
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
  for (const [t, v] of envelope) if (t >= ja) g.gain.linearRampToValueAtTime(v * g0, t0 - ja + t);
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
  apagarRoleta();
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
// seguinte (somInicio) fecha a contagem. O ganho de cada um (2026-11-26) foi medido como o das cenas: os três últimos
// segundos perto de -22 LUFS, com pico até 0,85 (o tambor militar fica um pouco abaixo, pelo pico).
const CONTAGENS = [
  { nome: "Bipes de rádio", ganho: 2.4,
    segundo: s => tom({ f: s <= 3 ? 1320 : 880, dur: s <= 3 ? .16 : .08, vol: s <= 3 ? .3 : .18 }) },
  { nome: "Sonar", ganho: 0.55,
    segundo: s => { sino(s <= 3 ? 1500 : 1150, { dur: .9, vol: s <= 3 ? .3 : .18 });
                    if (s <= 3) sino(1500, { dur: .6, vol: .2, em: .16 }); } },
  { nome: "Tambor militar", ganho: 1.09,
    segundo: s => { ruido({ dur: .09, vol: s <= 3 ? .5 : .32, tipo: "highpass", f: 1800 }); tom({ f: 180, f2: 140, dur: .08, vol: .2 });
                    if (s <= 3) for (let k = 1; k < 4; k++) ruido({ dur: .05, vol: .25, tipo: "highpass", f: 1800, em: k * .07 }); } },
  { nome: "Pêndulo", ganho: 0.57,
    segundo: s => s <= 3 ? sino([523, 587, 659][3 - s], { dur: 1.1, vol: .3 })
                         : ruido({ dur: .035, vol: .4, tipo: "bandpass", f: s % 2 ? 3400 : 2300, q: 6 }) },
  { nome: "Escada que sobe", ganho: 3.05,
    segundo: s => tom({ f: nota(60 + [0, 2, 4, 5, 7, 9, 11, 12, 14, 16][10 - Math.min(10, s)]), tipo: "square", dur: s <= 3 ? .25 : .12,
                        vol: s <= 3 ? .16 : .1, filtro: { f: 2800 } }) },
  { nome: "Largada de corrida", ganho: 2.24,
    segundo: s => s <= 3 ? tom({ f: s === 1 ? 880 : 440, tipo: "square", dur: s === 1 ? .45 : .22, vol: .16 })
                         : tom({ f: 330, tipo: "square", dur: .05, vol: .08 }) },
  { nome: "Marimba que desce", ganho: 0.61,
    segundo: s => marimba(nota([84, 81, 79, 76, 74, 72, 69, 67, 64, 60][10 - Math.min(10, s)]), { vol: s <= 3 ? .45 : .3 }) },
  { nome: "Coração", ganho: 0.68,
    segundo: s => { const f = s <= 3 ? 1 : .6;
                    tom({ f: 70, f2: 38, dur: .2, vol: .9 * f, ataque: .012 }); tom({ f: 70, f2: 38, dur: .2, vol: .5 * f, ataque: .012, em: .17 }); } },
  { nome: "Gotas", ganho: 1.66,
    segundo: s => { const f = (s <= 3 ? 900 : 1300) + Math.random() * 200;
                    tom({ f, f2: f * 2.2, dur: .12, vol: s <= 3 ? .35 : .22, ataque: .004, comEco: true }); } },
  { nome: "Dim-dom", ganho: 0.59,
    segundo: s => { const [a, b] = s % 2 ? [988, 784] : [784, 988];
                    sino(a, { dur: .7, vol: s <= 3 ? .28 : .16 }); if (s <= 3) sino(b, { dur: .9, vol: .24, em: .18 }); } },
];

// Sons próprios de algumas cenas da contagem (arena-contagem.js), no lugar do sorteado entre os dez de cima
// (2026-11-24: as cinco de Esportes; 2026-11-26: as dez novas de Entretenimento, as dez de Geografia e as sete de Ciências;
// 2026-11-27: as nove de Cotidiano, em SONS_COTIDIANO). A chave é a da cena ("tema|n", a de contagem.cena). segundo(s) toca a cada número,
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
// ---- Ciências (2026-11-26): os sons das sete cenas novas ("Ciências|1" a "|7"; a 0, o átomo, segue com o som sorteado).
// Instrumentos a mais:
const clique = (em, vol = .4) => { ruido({ dur: .012, vol, f: 2500, q: 1, ataque: .001, em }); tom({ f: 190, f2: 110, dur: .035, vol: vol * .5, ataque: .002, em }); };  // um relé
const gotaPlink = (em, f = 700, vol = .3) => { tom({ f, f2: f * 2.4, dur: .07, vol, ataque: .002, em }); tom({ f: f * 2, f2: f * 3.4, dur: .04, vol: vol * .25, ataque: .002, em }); };
const bolhas = (n, janela, em = 0, vol = .06) => { for (let k = 0; k < n; k++) { const f = 380 + Math.random() * 600; tom({ f, f2: f * 1.7, dur: .045, vol, ataque: .004, em: em + Math.random() * janela }); } };
const giz = (em, dur = .09, vol = .22) => { ruido({ dur, vol, f: 2800 + Math.random() * 1800, q: 2.2, ataque: .012, em });  // o risco e, às vezes, o rangido
  if (Math.random() < .25) tom({ f: 2300 + Math.random() * 500, dur: .06, vol: .025, ataque: .01, em, vibrato: { f: 45, prof: 70 } }); };
const bipeMonitor = (em, f = 1046.5, vol = .12, dur = .1) => tom({ f, dur, vol, ataque: .004, em, sustenta: true });  // o bipe reto do monitor
// O coração: duas batidas (tum-tum), com corpo nos médios para a TV não engolir o grave.
const tumTum = (em, vol = .8, vao = .17) => [[0, 1], [vao, .6]].forEach(([t, k]) => { tom({ f: 120, f2: 62, dur: .16, vol: vol * k, ataque: .008, em: em + t });
  ruido({ dur: .07, vol: vol * k * .25, tipo: "lowpass", f: 320, em: em + t }); });
const RISCOS_CONTA = { 7: 5, 6: 2, 5: 3, 4: 5, 3: 3, 2: 7, 1: 8 };  // riscos de giz da conta de cada segundo, mais ou menos o tamanho dela
const bitsMudados = s => s === 7 ? 3 : ((s + 1) ^ s).toString(2).replace(/0/g, "").length;  // 111 liga os três; depois 1, 2, 1, 3, 1, 2
// ---- Cotidiano (2026-11-27): os sons das nove cenas novas ("Cotidiano|1" a "|9"; a 0, o despertador, segue com o som
// sorteado). Vieram do protótipo em prototipos/contagem_cotidiano/ (sons.js, onde está também a medição do ganho), num
// bloco à parte, com nomes só dele; usam tom, ruido, sino, falar, clique, bolhas e estouro daqui.
const SONS_COTIDIANO = (() => {
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
  n.buffer = baseDeRuido(); n.loop = true; bp.type = "bandpass"; bp.frequency.value = 900; bp.Q.value = .6; ng.gain.value = 1.6;
  o.connect(lp).connect(g); n.connect(bp).connect(ng).connect(g);
  const destino = saidaCena?.seco || mestre;
  if (p) { g.connect(p); p.connect(destino); } else g.connect(destino);
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
  n.buffer = baseDeRuido(); n.loop = true; bp.type = "bandpass"; bp.frequency.value = 900; bp.Q.value = .6; ng.gain.value = 1.6;
  o.connect(lp).connect(g); n.connect(bp).connect(ng).connect(g);
  const destino = saidaCena?.seco || mestre;
  if (p) { g.connect(p); p.connect(destino); } else g.connect(destino);
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
return Object.fromEntries(SONS.map((c, i) => [`Cotidiano|${i + 1}`, c]));
})();

// ---- Natureza (2026-11-27): os sons das dez cenas novas ("Natureza|1" a "|10"; a 0, o broto, segue com o som sorteado).
// Vieram do protótipo em prototipos/contagem_natureza/ (sons.js, onde está também a medição do ganho), num bloco à parte,
// com nomes só dele (marimba e bolhas daqui são as de Natureza); usam tom, ruido, sino e nota daqui.
const SONS_NATUREZA = (() => {
const sorte = (a, b) => a + Math.random() * (b - a);
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

return Object.fromEntries(SONS.map((c, i) => [`Natureza|${i + 1}`, c]));
})();

const SONS_CENAS = {
  ...SONS_COTIDIANO,
  ...SONS_NATUREZA,
  // Futebol (2026-11-24, a sugestão 2 de cinco com torcida gravada): a hinchada do Independiente ao fundo, crescendo nos três
  // últimos segundos, e um chute a cada passe, a bola indo da esquerda para a direita. No zero, o chute a gol, a rede e a
  // explosão do gol de Cali. A torcida começa no primeiro segundo que toca (do ponto certo, se a contagem já ia no meio)
  // e acaba logo depois do zero.
  "Esportes|0": {
    nome: "Hinchada e gol", ganho: [0.43, 0.35],
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
    nome: "Manchetes e apito", ganho: [1.74, 0.58],
    segundo: s => { const pan = s % 2 ? -.5 : .5, forte = s <= 3;
                    tom({ f: forte ? 190 : 160, f2: 100, dur: .1, vol: forte ? .6 : .45, ataque: .003, pan });
                    ruido({ dur: forte ? .08 : .06, vol: forte ? .45 : .3, f: forte ? 1300 : 900, q: 1.4, pan }); },
    zero: em => { apito(em, .14); apito(em + .22, .6); } },
  // Basquete: o drible no meio de cada segundo (quando a bola bate no chão) e o tique do relógio de posse, que vira bipe
  // nos três últimos. No zero, a buzina, enquanto a luz da tabela pisca.
  "Esportes|2": {
    nome: "Drible e buzina", ganho: [0.78, 0.63],
    segundo: s => { tom({ f: s <= 3 ? 1000 : 1500, tipo: s <= 3 ? "sine" : "square", dur: s <= 3 ? .12 : .025, vol: s <= 3 ? .18 : .04 });
                    tom({ f: 120, f2: 65, dur: .13, vol: .7, ataque: .003, em: .5 });
                    ruido({ dur: .05, vol: .3, tipo: "lowpass", f: 500, em: .5 });
                    ruido({ dur: .08, vol: .06, f: 2400, q: 3, em: .53, comEco: true }); },  // o eco do ginásio
    zero: em => [[233, "sawtooth"], [277, "sawtooth"], [466, "square"]].forEach(([f, tipo]) =>
      tom({ f, tipo, dur: 1.4, vol: .17, ataque: .02, em, sustenta: true, filtro: { f: 2200 }, comEco: true })) },
  // Tênis: a raquetada de um lado e o quique da bola no saibro do outro, a cada segundo. No zero, o aplauso.
  "Esportes|3": {
    nome: "Raquetadas e aplauso", ganho: [1.48, 1.95],
    segundo: s => { const lado = s % 2 ? .55 : -.55;  // onde a bola quica; a raquetada sai do outro lado
                    tom({ f: 950, f2: 520, dur: .06, vol: .6, ataque: .002, pan: -lado });
                    ruido({ dur: .05, vol: .7, f: 1900, q: 2, pan: -lado });
                    tom({ f: 210, f2: 120, dur: .07, vol: .4, em: .75, pan: lado });
                    ruido({ dur: .08, vol: .45, tipo: "lowpass", f: 600, em: .75, pan: lado }); },
    zero: em => aplauso(em + .1) },
  // Automobilismo: o motor em marcha lenta; um bipe a cada luz vermelha que acende (de 7 a 3); nos dois últimos, o motor
  // acelera parado. No zero, o bipe agudo das luzes verdes e o carro arrancando, com o pneu cantando.
  "Esportes|4": {
    nome: "Luzes e motor", ganho: [0.77, 1.84],
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
    nome: "Claquete e câmera rodando", ganho: [0.9, 0.62],
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
    nome: "Laser, explosão e salto de fase", ganho: [2.11, 4.2],
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
    nome: "Água correndo e mar", ganho: [1.7, 4.6],
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
  // Ciências, o foguete: o bipe da contagem; desde a ignição (6), o ronco crescendo; estalos de fogo nos três últimos. No
  // zero, o bipe longo, o estrondo e o rugido que vai abrindo.
  "Ciências|1": {
    nome: "Contagem da torre e decolagem", ganho: [1.71, 0.39],
    segundo: s => { const k = 7 - s;
      tom({ f: 880, dur: .09, vol: .12, ataque: .003 }); tom({ f: 1760, dur: .05, vol: .03, ataque: .003 });
      if (s === 6) ruido({ dur: .8, vol: .45, tipo: "lowpass", f: 900, f2: 220, ataque: .02 });
      if (s <= 6) { ruido({ dur: 1.05, vol: .1 + .04 * k, tipo: "lowpass", f: 320, q: .7, ataque: .1, sustenta: true });
                    ruido({ dur: 1.05, vol: .03 + .012 * k, f: 650, q: .8, ataque: .1, sustenta: true }); }
      if (s <= 3) for (let j = 0; j < 10 + 4 * (3 - s); j++) ruido({ dur: .02, vol: .12, tipo: "highpass", f: 1800, ataque: .002, em: Math.random() * .95 });
    },
    zero: em => { tom({ f: 880, dur: .45, vol: .14, em }); tom({ f: 90, f2: 34, dur: 1.8, vol: .9, ataque: .006, em });
                  ruido({ dur: 2.6, vol: .55, tipo: "lowpass", f: 300, f2: 1800, q: .7, ataque: .05, em, comEco: true });
                  ruido({ dur: 2.2, vol: .18, f: 900, q: .6, ataque: .3, em: em + .1, sustenta: true });
                  for (let j = 0; j < 30; j++) ruido({ dur: .025, vol: .14, tipo: "highpass", f: 2000, ataque: .002, em: em + .1 + Math.random() * 2 }); },
  },
  // Ciências, o eclipse: um acorde que vai fechando o filtro, escurecendo com o céu; grilos a partir do 3. No zero, um coro
  // (senos com vibrato e serras numa formante de "a") e o brilho do anel de diamante, sem batida.
  "Ciências|2": {
    nome: "Acorde que escurece e coro", ganho: [1.81, 1.04],
    segundo: s => { const k = 7 - s, corte = 2600 * Math.pow(.72, k);
      [57, 60, 64, 71].forEach(m => tom({ f: nota(m), tipo: "sawtooth", dur: 1.15, vol: .03, ataque: .15, sustenta: true, filtro: { f: corte } }));
      sino(nota(93 - k), { dur: .9, vol: .03 });
      if (s <= 3) [.1, .55].forEach(t => { for (let j = 0; j < 4; j++) tom({ f: 4400, dur: .018, vol: .035, ataque: .002, em: t + j * .035 }); });
    },
    zero: em => {
      [57, 64, 69, 73, 76].forEach((m, j) => {
        tom({ f: nota(m), dur: 2.8, vol: .07, ataque: .5, em, sustenta: true, vibrato: { f: 5 + j * .3, prof: 3 }, comEco: true });
        tom({ f: nota(m), tipo: "sawtooth", dur: 2.8, vol: .018, ataque: .5, em, sustenta: true, filtro: { tipo: "bandpass", f: 800, q: 1.5 }, comEco: true }); });
      [88, 95, 100].forEach((m, j) => sino(nota(m), { dur: 1.6, vol: .05, em: em + .02 + j * .12 }));
    },
  },
  // Ciências, o colisor: um zumbido que sobe um semitom por segundo e um sopro, de um lado para o outro, cada vez que os
  // feixes se cruzam (mais vezes no fim). No zero, o impacto, a crepitação do detector e o zumbido descendo.
  "Ciências|3": {
    nome: "Zumbido que sobe e colisão", ganho: [1.24, 0.51],
    segundo: s => { const k = 7 - s, f = 98 * Math.pow(2, k / 12), n = [1, 5, 4, 3, 2, 2, 1, 1][s];
      tom({ f, f2: f * Math.pow(2, 1 / 12), tipo: "sawtooth", dur: 1.04, vol: .05, ataque: .05, sustenta: true, filtro: { f: 700 + 160 * k } });
      tom({ f: f * 2, f2: f * 2 * Math.pow(2, 1 / 12), dur: 1.04, vol: .04, ataque: .05, sustenta: true });
      for (let j = 0; j < n; j++) ruido({ dur: .2, vol: .2, f: 700, f2: 3200, q: 1.4, ataque: .12, em: j / n + .05, pan: j % 2 ? .6 : -.6 });
    },
    zero: em => { const f = 98 * Math.pow(2, 7 / 12);
      tom({ f: 140, f2: 40, dur: 1, vol: .9, ataque: .004, em }); ruido({ dur: 1.4, vol: .55, tipo: "lowpass", f: 2400, f2: 200, ataque: .004, em, comEco: true });
      for (let j = 0; j < 46; j++) ruido({ dur: .006, vol: .25 + Math.random() * .3, tipo: "highpass", f: 2600, ataque: .001, em: em + .05 + Math.pow(Math.random(), 1.6) * 1.6,
                                           pan: Math.random() * 1.4 - .7 });
      tom({ f, f2: 55, tipo: "sawtooth", dur: 1.6, vol: .06, ataque: .01, em, filtro: { f: 1600, f2: 260 } }); },
  },
  // Ciências, a lousa: o giz escrevendo a conta (riscos rápidos, um rangido de vez em quando), as batidinhas do sinal de
  // igual e o número. No zero, a identidade de Euler, o sublinhado duplo, o C.Q.D., a batida do giz e um sino.
  "Ciências|4": {
    nome: "Giz na lousa e sino", ganho: [3.6, 1.36],
    segundo: s => { const n = RISCOS_CONTA[s];
      for (let j = 0; j < n; j++) giz(.02 + j * .5 / n, .05 + Math.random() * .06);
      [.56, .62].forEach(t => ruido({ dur: .02, vol: .3, f: 1900, q: 3, ataque: .002, em: t }));
      giz(.66, .12, .26); giz(.8, .1, .24); },
    zero: em => { for (let j = 0; j < 4; j++) giz(em + .02 + j * .11, .07);
      ruido({ dur: .2, vol: .26, f: 3000, f2: 3800, q: 2, ataque: .03, em: em + .2 }); ruido({ dur: .2, vol: .24, f: 2900, f2: 3600, q: 2, ataque: .03, em: em + .4 });
      [.66, .8, .94].forEach(t => giz(em + t, .08, .2));
      ruido({ dur: .03, vol: .45, f: 1500, q: 2.5, ataque: .002, em: em + 1.1 }); tom({ f: 700, dur: .04, vol: .15, em: em + 1.1 });
      sino(nota(84), { dur: 1.6, vol: .16, em: em + 1.14 }); sino(nota(91), { dur: 1.8, vol: .12, em: em + 1.28 }); },
  },
  // Ciências, o registrador binário: o tique do relógio, um clique de relé para cada bit que muda e o ventilador; nos três
  // últimos, a máquina calculando (bipes rápidos). No zero, o último relé, o bipe de inicialização, o disco procurando e um
  // arpejo de bipes quadrados que termina num acorde.
  "Ciências|5": {
    nome: "Relés e bipe de inicialização", ganho: [2.85, 1.93],
    segundo: s => { tom({ f: 2000, tipo: "square", dur: .015, vol: .03 });
      for (let j = 0; j < bitsMudados(s); j++) clique(.03 + j * .07, .45);
      tom({ f: 120, tipo: "sawtooth", dur: 1.04, vol: .02, ataque: .1, sustenta: true, filtro: { f: 600 } });
      if (s <= 3) for (let j = 0; j < 8; j++) tom({ f: 1200 + Math.random() * 1800, tipo: "square", dur: .03, vol: .035, em: .3 + j * .08, filtro: { f: 4000 } }); },
    zero: em => { clique(em + .03, .6); tom({ f: 1000, tipo: "square", dur: .45, vol: .3, em: em + .2, filtro: { f: 3000 } });
      for (let j = 0; j < 12; j++) { ruido({ dur: .012, vol: .35, f: 900, q: 2, ataque: .001, em: em + .7 + j * .035 });
                                     tom({ f: 180, tipo: "square", dur: .014, vol: .12, em: em + .7 + j * .035 }); }
      [72, 76, 79, 84].forEach((m, j) => tom({ f: nota(m), tipo: "square", dur: j === 3 ? .8 : .08, vol: .22, em: em + 1.15 + j * .08, filtro: { f: 3000 } }));
      [67, 76].forEach(m => tom({ f: nota(m), tipo: "square", dur: .8, vol: .1, em: em + 1.39, filtro: { f: 2400 } })); },
  },
  // Ciências, o pH: a gota caindo no líquido (um pouco mais aguda a cada segundo, como o nível que sobe) e o líquido mexendo;
  // bolhas a partir do 3. No zero, a efervescência e o vapor.
  "Ciências|6": {
    nome: "Gotas e efervescência", ganho: [2.2, 0.94],
    segundo: s => { gotaPlink(.43, 620 + (7 - s) * 45, .3); ruido({ dur: .05, vol: .08, tipo: "highpass", f: 3000, ataque: .002, em: .43 });
      ruido({ dur: .6, vol: .035, tipo: "lowpass", f: 700, ataque: .2, em: .45 });
      if (s <= 3) bolhas((4 - s) * 5, .95, 0, .05); },
    zero: em => { ruido({ dur: 2.2, vol: .22, tipo: "highpass", f: 3800, ataque: .06, em, sustenta: true });
      bolhas(60, 2, em, .07); ruido({ dur: 1.2, vol: .12, f: 800, f2: 2600, q: .8, ataque: .5, em: em + .3 }); },
  },
  // Ciências, o monitor cardíaco: o bipe e o tum-tum de cada batida, 0,25 s depois da troca do número, quando o traço
  // passa; dois por segundo nos três últimos. No zero, a batida forte e três bipes subindo (nunca um tom contínuo).
  "Ciências|7": {
    nome: "Bipe do monitor e coração disparado", ganho: [0.82, 1.3],
    segundo: s => (s <= 3 ? [.25, .75] : [.25]).forEach(t => { bipeMonitor(t); tumTum(t, s <= 3 ? .8 : .65, s <= 3 ? .12 : .17); }),
    zero: em => { tumTum(em + .25, .45, .14); [1046.5, 1318.5, 1568].forEach((f, j) => bipeMonitor(em + .25 + j * .14, f, .2, j === 2 ? .35 : .13)); },
  },
};
// ---- Tema qualquer: as roletas (arena-roleta.js; a cena "Qualquer|0" a "|3"). O som delas não é marcado segundo a
// segundo: no primeiro segundo que toca, todos os sons que a roleta ainda vai fazer são marcados de uma vez, nos instantes
// do plano dela (os cliques seguem o giro desenhado; se a contagem já ia no meio, o que passou fica de fora), num
// barramento próprio que pararContagem() apaga. ganho: [giro, parada], medido como o das cenas (renderizado fora de tempo
// real): perto de -22 LUFS no giro e -16 na parada, sem passar de 0,85 no pico.
let roletaTocando = null;  // {plano, seco, molhado}
// Um barramento (seco e com eco) para os sons de uma cena marcados de uma vez; apagar() o cala em 0,25 s.
function barramento() {
  const seco = audio.createGain(), molhado = audio.createGain();
  seco.connect(mestre); molhado.connect(eco);
  return { seco, molhado };
}
function apagarBarramento(b) {
  if (!b || !audio) return;
  const t = audio.currentTime;
  for (const n of [b.seco, b.molhado]) { n.gain.cancelScheduledValues(t); n.gain.setValueAtTime(n.gain.value, t); n.gain.linearRampToValueAtTime(0, t + .25); }
  setTimeout(() => { b.seco.disconnect(); b.molhado.disconnect(); }, 400);
}
function apagarRoleta() { const r = roletaTocando; roletaTocando = null; apagarBarramento(r); }
// Marca de uma vez os sons de uma cena (sons(S, dados), com "t" em segundos desde o começo dela), a partir do instante
// "agora" da cena (o que já passou fica de fora), no barramento b; ganhoEm(t) dá o ganho de cada som.
function marcar(sons, dados, agora, ganhoEm, b) {
  const vale = t => t >= agora - .02, em = t => Math.max(0, t - agora);
  const S = {
    tom: ({ t, ...o }) => { if (vale(t)) { ganho = ganhoEm(t); tom({ ...o, em: em(t) }); } },
    ruido: ({ t, ...o }) => { if (vale(t)) { ganho = ganhoEm(t); ruido({ ...o, em: em(t) }); } },
    sino: (f, { t, ...o }) => { if (vale(t)) { ganho = ganhoEm(t); sino(f, { ...o, em: em(t) }); } },
    marimba: (f, { t, ...o }) => { if (vale(t)) { ganho = ganhoEm(t); marimba(f, { ...o, em: em(t) }); } },
    continuo: ({ t0, t1, ...o }) => { const a = Math.max(t0, agora); if (a < t1 - .02) { ganho = ganhoEm(t0); continuo({ ...o, t0: a, t1, base: agora }); } },
  };
  saidaCena = b;
  try { sons(S, dados); } finally { saidaCena = null; ganho = 1; }
}
const baseDeRuido = () => {
  if (!ruidoBase) { ruidoBase = audio.createBuffer(1, audio.sampleRate * 2, audio.sampleRate);
                    const d = ruidoBase.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
  return ruidoBase;
};
// Um som contínuo (motor, bolinha rolando, chiado), de t0 a t1 no tempo da roleta, com altura (freq, nos osciladores),
// filtro (filtro.f) e volume seguindo funções desse tempo; "base" é o instante da roleta que corresponde a agora.
function continuo({ fonte = "osc", forma = "sine", t0, t1, base = 0, passo = .03, freq, filtro, ganho: volume, pan = 0, comEco = false }) {
  if (!pronto()) return;
  const g0 = ganho, zero = audio.currentTime + .01, quando = t => zero + (t - base);
  let src;
  if (fonte === "osc") { src = audio.createOscillator(); src.type = forma; }
  else { src = audio.createBufferSource(); src.buffer = baseDeRuido(); src.loop = true; }
  const g = audio.createGain(); g.gain.setValueAtTime(0, quando(t0));
  let no = src, bq = null;
  if (filtro) { bq = audio.createBiquadFilter(); bq.type = filtro.tipo || "lowpass"; bq.Q.value = filtro.q ?? 1; src.connect(bq); no = bq; }
  const pontos = []; for (let t = t0; t < t1; t += passo) pontos.push(t); pontos.push(t1);
  pontos.forEach((t, k) => {
    const w = quando(t);
    if (fonte === "osc") { const v = typeof freq === "function" ? freq(t) : (freq ?? 440); k ? src.frequency.linearRampToValueAtTime(v, w) : src.frequency.setValueAtTime(v, w); }
    if (bq) { const v = typeof filtro.f === "function" ? filtro.f(t) : filtro.f; k ? bq.frequency.linearRampToValueAtTime(v, w) : bq.frequency.setValueAtTime(v, w); }
    g.gain.linearRampToValueAtTime(Math.max(0, volume(t) || 0) * g0, w);
  });
  g.gain.linearRampToValueAtTime(0, quando(t1) + .04);
  no.connect(g); saida(g, pan, comEco);
  if (fonte === "osc") src.start(quando(t0)); else src.start(quando(t0), Math.random());
  src.stop(quando(t1) + .08);
}
// Os sons de cada roleta, com "t" no tempo dela (segundos desde o começo da contagem) e o plano "p" (arena-roleta.js).
const SONS_ROLETA = {
  // Roda da fortuna: o empurrão, um clique por pino (rápido no começo, cada vez mais espaçado, com mais corpo quando
  // lenta); quando para, a pancada do ponteiro, um sino de dois toques e um brilho agudo.
  "Qualquer|0": {
    nome: "Catraca e sino", ganho: [2.68, 0.9],
    sons(S, p) {
      S.ruido({ t: .02, dur: .45, vol: .1, f: 420, f2: 2400, q: 1.1, ataque: .3 });
      p.ticks.forEach(tk => {
        const k = Math.min(1, Math.max(0, (tk - p.ti) / (p.ts - p.ti)));
        S.ruido({ t: tk, dur: .018, vol: .3, tipo: "bandpass", f: 3200, q: 2.5, ataque: .001 });
        S.tom({ t: tk, f: 1600, f2: 1000, dur: .03, vol: .08, ataque: .001 });
        S.tom({ t: tk, f: 320, f2: 190, dur: .045, vol: .06 + .14 * k, ataque: .001 });
      });
      const t = p.ts;
      S.tom({ t: t + .02, f: 200, f2: 110, dur: .14, vol: .25 });
      S.sino(1318.5, { t: t + .12, vol: .2, dur: 1.5 });
      S.sino(1760, { t: t + .3, vol: .22, dur: 1.6 });
      [2093, 2637, 3136, 4186].forEach((f, k) => S.tom({ t: t + .5 + k * .055, f, dur: .3, vol: .035, comEco: true }));
    } },
  // Roleta de cassino: o lançamento, a bolinha rolando na pista (mais grave e mais baixa conforme perde velocidade, com o
  // ronco da madeira), o tranco nos defletores, os quiques (cada vez mais fracos e próximos), o chocalho na casa; depois,
  // um sino e fichas batendo.
  "Qualquer|1": {
    nome: "Bolinha e fichas", ganho: [1.75, 2.15],
    sons(S, p) {
      S.ruido({ t: 0, dur: .06, vol: .25, f: 2600, q: 2, ataque: .002 });
      const fim = p.tb0 + .05;
      const nivel = t => Math.min(1, t / .2) * Math.min(1, Math.max(0, (fim - t) / .35)) * Math.min(1, Math.abs(p.vel(t)) / p.v0);
      S.continuo({ fonte: "ruido", t0: 0, t1: fim, filtro: { tipo: "bandpass", f: t => 420 + 55 * Math.abs(p.vel(t)), q: 1.6 },
                   ganho: t => .26 * nivel(t) * (.8 + .2 * Math.sin((p.rotor(t) + p.psi(t)) * 4)) });
      S.continuo({ fonte: "ruido", t0: 0, t1: fim, filtro: { tipo: "lowpass", f: 240, q: .7 }, ganho: t => .3 * nivel(t) });
      const quique = (t, v, leve) => {
        S.tom({ t, f: leve ? 2600 : 1900, f2: leve ? 2100 : 1300, dur: .03, vol: v * .5, ataque: .001 });
        S.ruido({ t, dur: .025, vol: v * .6, tipo: "bandpass", f: 2200, q: 1.5, ataque: .001 });
        if (!leve) S.tom({ t, f: 420, f2: 300, dur: .05, vol: v * .35, ataque: .001 });
      };
      quique(p.tdef, .55);
      p.quiques.forEach((tq, i) => quique(tq, [.6, .48, .38, .3, .22, .16, .12][i] ?? .1));
      [.05, .085, .115, .14, .16].forEach((d, k) => quique(p.ts + d, .1 - k * .016, true));
      S.sino(1568, { t: p.ts + .3, vol: .12, dur: 1.3 });
      for (let k = 0; k < 6; k++) {
        const f = 3000 + Math.random() * 1600, tt = p.ts + .5 + k * .07 + Math.random() * .02;
        S.tom({ t: tt, f, f2: f * 1.02, dur: .09, vol: .06 }); S.tom({ t: tt, f: f * 2.7, dur: .04, vol: .025 });
      }
    } },
  // Linha Qualquer: o motor elétrico, que sobe e desce com a velocidade do trem, o ronco dos trilhos, as juntas (ta-dum,
  // as duas rodas do truque), um bipe ao passar pelas estações quando já está devagar e o chiado do freio; na parada, o
  // tranco, o ar das portas e o aviso de três notas.
  "Qualquer|2": {
    nome: "Chegada do trem", ganho: [1.21, 1.15],
    sons(S, p) {
      const vr = t => p.vel(t) / p.vmax, fim = p.ts + .05;
      S.continuo({ fonte: "osc", forma: "sawtooth", t0: 0, t1: fim, freq: t => 70 + 520 * vr(t), filtro: { tipo: "lowpass", f: 1300, q: .8 }, ganho: t => .03 + .06 * vr(t) });
      S.continuo({ fonte: "osc", forma: "sine", t0: 0, t1: fim, freq: t => 140 + 1040 * vr(t), ganho: t => .03 * vr(t) });
      S.continuo({ fonte: "ruido", t0: 0, t1: p.ts + .2, filtro: { tipo: "lowpass", f: 320, q: .7 }, ganho: t => .06 + .25 * vr(t) });
      p.juntas.forEach(tj => {
        const dt = .016 / Math.max(.08, p.vel(tj));
        [0, dt].forEach(d => { S.tom({ t: tj + d, f: 700, f2: 380, dur: .03, vol: .1, ataque: .001 });
                               S.ruido({ t: tj + d, dur: .035, vol: .16, tipo: "lowpass", f: 1400, ataque: .001 }); });
      });
      p.passagens.forEach(lst => lst.forEach(tp => { if (vr(tp) < .55 && tp < p.ts - .05) S.tom({ t: tp, f: 1975.5, dur: .07, vol: .04 }); }));
      const ini = p.ts - .85;
      S.continuo({ fonte: "osc", forma: "sine", t0: ini, t1: p.ts + .02, passo: .01, freq: t => 2850 + 35 * Math.sin(t * 45),
                   ganho: t => .028 * Math.sin(Math.PI * Math.min(1, Math.max(0, (t - ini) / .87))) });
      S.tom({ t: p.ts, f: 95, f2: 55, dur: .28, vol: .3 });
      S.ruido({ t: p.ts + .16, dur: .8, vol: .2, tipo: "highpass", f: 2600, ataque: .02 });
      [[659.25, 0], [830.6, .17], [987.8, .34]].forEach(([f, d]) => S.sino(f, { t: p.ts + .55 + d, vol: .2, dur: 1.0 }));
    } },
  // Caça-níquel: a catraca e a pancada da alavanca, o chiado e o motor dos tambores (mais fracos a cada um que para), um
  // clique por casa que passa, e, a cada tambor que para, uma pancada e uma nota mais aguda (mi, sol, dó: os temas batem);
  // no fim, a campainha e as moedas.
  "Qualquer|3": {
    nome: "Alavanca e moedas", ganho: [0.59, 1.26],
    sons(S, p) {
      for (let k = 0; k < 6; k++) { const t = .02 + k * .045;
        S.ruido({ t, dur: .014, vol: .22, tipo: "highpass", f: 2600, ataque: .001 }); S.tom({ t, f: 340 + k * 25, f2: 200, dur: .025, vol: .08, ataque: .001 }); }
      S.tom({ t: .3, f: 150, f2: 75, dur: .12, vol: .35 }); S.ruido({ t: .3, dur: .07, vol: .2, tipo: "lowpass", f: 500 });
      const rodando = t => p.rolos.filter(R => t > R.t0 && t < R.tj).length;
      S.continuo({ fonte: "ruido", t0: .3, t1: p.ts, filtro: { tipo: "bandpass", f: 700, q: 1.2 }, ganho: t => .05 * rodando(t) });
      S.continuo({ fonte: "osc", forma: "square", t0: .3, t1: p.ts, freq: 55, filtro: { tipo: "lowpass", f: 260 }, ganho: t => .025 * rodando(t) });
      p.rolos.forEach((R, j) => {
        R.cliques.forEach(tk => { S.ruido({ t: tk, dur: .01, vol: .07, tipo: "bandpass", f: 1900 + j * 300, q: 4, ataque: .001 });
                                  S.tom({ t: tk, f: 650 + j * 60, dur: .015, vol: .03, ataque: .001 }); });
        S.tom({ t: R.tj, f: 150, f2: 65, dur: .15, vol: .5 }); S.ruido({ t: R.tj, dur: .06, vol: .25, tipo: "lowpass", f: 600, ataque: .002 });
        S.marimba([659.25, 783.99, 1046.5][j], { t: R.tj + .03, vol: .3 });
      });
      const t = p.ts + .15;
      for (let k = 0; k < 10; k++) S.sino(k % 2 ? 1318.5 : 1568, { t: t + k * .075, vol: .09, dur: .3, comEco: false });
      for (let k = 0; k < 24; k++) {
        const tt = t + .1 + Math.random() * 1.3, f = 2600 + Math.random() * 2600;
        S.tom({ t: tt, f, f2: f * 1.015, dur: .08, vol: .05 }); S.tom({ t: tt, f: f * 2.76, dur: .035, vol: .02 });
        S.ruido({ t: tt, dur: .012, vol: .03, tipo: "highpass", f: 6000 });
      }
    } },
};
// Marca os sons da roleta que está à mostra (contagem.roleta: {cena, plano, t}), uma vez por contagem.
function somRoleta({ cena, plano: p, t: agora }) {
  const def = SONS_ROLETA[cena];
  if (!def || !p || roletaTocando?.plano === p) return;
  apagarRoleta();
  roletaTocando = { plano: p, ...barramento() };
  const [gg, gp] = def.ganho || [1, 1];
  marcar(def.sons, p, agora, t => t >= p.ts - .02 ? gp : gg, roletaTocando);  // o que soa da parada em diante leva o ganho dela
}

// ---- Quem acertou e quem errou (arena-resultado.js): o som de cada uma das quatro animações, marcado de uma vez quando
// ela começa, na tela grande, seguindo os instantes de cada jogador na cena (j.t), num barramento próprio que
// pararResultado() apaga. ganho medido como o das cenas da contagem (renderizado fora de tempo real, com 3, 6 e 10
// jogadores, todos acertando e ninguém acertando): perto de -18 LUFS no momento mais forte, sem passar de 0,85 no pico.
let resultadoTocando = null;
const PENTA = [1046.5, 1174.66, 1318.51, 1567.98, 1760, 2093, 2349.3, 2637];  // uma nota a mais a cada acerto
const REVELA_HOLOFOTES = 1.7;  // quando os focos acendem (T_REVELA_HOLOFOTES em arena-resultado.js)
const SONS_RESULTADO = [
  // Dois lados: uma nota que sobe a cada acerto (quando o avatar quica) e um baque grave a cada erro; o confete estoura no
  // primeiro acerto; no fim, um acorde de sinos se a maioria acertou, ou um trombone triste.
  { nome: "Plim e bonk", ganho: 0.94,
    sons(S, cena) {
      S.ruido({ t: .02, dur: .35, vol: .06, f: 300, f2: 1500, q: .8, ataque: .2 });
      let kc = 0, ke = 0;
      cena.js.forEach(j => {
        if (j.acertou) { const f = PENTA[Math.min(7, kc++)]; S.marimba(f, { t: j.t + .18, vol: .3 }); S.tom({ t: j.t + .3, f: f * 2, dur: .06, vol: .05 }); }
        else { const f = 196 * Math.pow(.94, ke++); S.tom({ t: j.t + .4, f, f2: f * .75, tipo: "triangle", dur: .22, vol: .32 }); S.ruido({ t: j.t + .4, dur: .06, vol: .12, tipo: "lowpass", f: 500 }); }
      });
      if (cena.certos.length) {
        const tc = Math.min(...cena.certos.map(j => j.t)) + .18;
        S.ruido({ t: tc, dur: .12, vol: .2, tipo: "highpass", f: 3000, ataque: .002 });
        for (let k = 0; k < 6; k++) S.tom({ t: tc + .05 + k * .07, f: 3000 + Math.random() * 1500, dur: .05, vol: .025 });
      }
      const fim = Math.max(...cena.js.map(j => j.t)) + .75;
      if (cena.certos.length >= cena.errados.length) [1046.5, 1318.5, 1568, 2093].forEach((f, k) => S.sino(f, { t: fim + k * .07, vol: .12, dur: 1.2 }));
      else [[311, 294], [294, 277], [277, 233]].forEach(([f, f2], k) => S.tom({ t: fim + k * .3, f, f2, tipo: "sawtooth", dur: k === 2 ? .6 : .28, vol: .17, filtro: { f: 1100 }, sustenta: true }));
    } },
  // Carimbo: a descida e a pancada do carimbo no papel; nos acertos, um tique agudo e uma nota que sobe a cada um; nos
  // erros, um toque surdo; no fim, um sino se alguém acertou.
  { nome: "Carimbadas", ganho: 0.97,
    sons(S, cena) {
      let kc = 0;
      cena.js.forEach(j => {
        const ti = j.t + .15;
        S.ruido({ t: ti - .13, dur: .12, vol: .05, f: 600, f2: 1800, q: 1, ataque: .09 });
        S.tom({ t: ti, f: 150, f2: 55, dur: .14, vol: .5 }); S.ruido({ t: ti, dur: .05, vol: .3, tipo: "lowpass", f: 900, ataque: .001 });
        S.ruido({ t: ti, dur: .03, vol: .18, f: 2200, q: 1.2, ataque: .001 });
        if (j.acertou) { S.tom({ t: ti + .02, f: 2637, dur: .05, vol: .06 }); S.marimba(PENTA[Math.min(7, kc++)], { t: ti + .06, vol: .22 }); }
        else S.tom({ t: ti + .02, f: 392, f2: 330, tipo: "triangle", dur: .14, vol: .2 });
      });
      if (cena.certos.length) S.sino(1568, { t: Math.max(...cena.js.map(j => j.t)) + .55, vol: .12, dur: 1.2 });
    } },
  // Catraca: dois passos até a catraca; quem andou, o bipe de duas notas do validador e as portinholas abrindo; quem
  // acertou sem andar (o primeiro, quando todos acertaram), um bipe só; quem errou, a campainha de catraca travada e a trombada.
  { nome: "Validador e campainha", ganho: 1.74,
    sons(S, cena) {
      cena.js.forEach(j => {
        const ti = j.t + .3;
        [-.3, -.13].forEach(d => S.tom({ t: ti + d, f: 120, f2: 85, dur: .06, vol: .1 }));
        if (j.casas > 0) {
          S.tom({ t: ti, f: 1568, dur: .07, vol: .14 }); S.tom({ t: ti + .08, f: 2093, dur: .1, vol: .14 });
          S.ruido({ t: ti + .05, dur: .22, vol: .1, f: 700, f2: 2400, q: 1.2, ataque: .05 });
          S.tom({ t: ti + .05, f: 520, f2: 300, dur: .04, vol: .12 });
        } else if (j.acertou) [0, .12].forEach(d => S.tom({ t: ti + d, f: 1175, dur: .1, vol: .28 }));  // acertou, mas não anda
        else {
          S.tom({ t: ti, f: 155, tipo: "square", dur: .34, vol: .06, sustenta: true, filtro: { f: 1500 } });
          S.tom({ t: ti, f: 163, tipo: "square", dur: .34, vol: .06, sustenta: true, filtro: { f: 1500 } });
          S.tom({ t: ti + .03, f: 300, f2: 200, dur: .06, vol: .15 });
        }
      });
    } },
  // Holofotes: o rufar da caixa enquanto os holofotes procuram; o estalo dos refletores acendendo; metais e aplausos, mais
  // fortes quanto mais gente acertou; se ninguém acertou, só os grilos.
  { nome: "Rufar e aplausos", ganho: 0.96,
    sons(S, cena) {
      const T = REVELA_HOLOFOTES, a = cena.certos.length;
      for (let t = .1; t < T - .02; t += .045) { const k = t / T;
        S.ruido({ t, dur: .05, vol: .03 + .12 * k, tipo: "highpass", f: 1700, ataque: .002 }); S.ruido({ t, dur: .04, vol: .02 + .04 * k, tipo: "bandpass", f: 220 }); }
      S.tom({ t: T, f: 95, f2: 50, dur: .3, vol: .5 }); S.ruido({ t: T, dur: .06, vol: .3, tipo: "lowpass", f: 1200, ataque: .001 });
      S.ruido({ t: T, dur: .02, vol: .2, tipo: "highpass", f: 4000, ataque: .001 });
      if (a) {
        [196, 246.9, 293.7, 392].forEach(f => S.tom({ t: T + .05, f, tipo: "sawtooth", dur: .9, vol: .045, ataque: .03, sustenta: true, filtro: { f: 700, f2: 2600 }, comEco: true }));
        const palmas = 14 + 8 * Math.min(a, 6);
        for (let k = 0; k < palmas; k++) S.ruido({ t: T + .1 + Math.random() * 1.6, dur: .03, vol: .05 + Math.random() * .06, f: 1000 + Math.random() * 1400, q: 1.5, ataque: .001, pan: Math.random() * 1.6 - .8 });
      } else [.35, .95, 1.55].forEach(d => { for (let k = 0; k < 3; k++) S.tom({ t: T + d + k * .055, f: 4400, dur: .035, vol: .05, ataque: .004 }); });
    } },
];
// Toca o som da animação k (0 a 3) da cena (a que criarResultado().mostrar devolve), do começo. Só a tela grande.
export function somResultado(k, cena) {
  const def = SONS_RESULTADO[k];
  if (!pronto() || !def || !cena) return;
  pararResultado();
  resultadoTocando = barramento();
  marcar(def.sons, cena, 0, () => def.ganho ?? 1, resultadoTocando);
}
// A animação foi interrompida (outra pergunta, saída da partida, som desligado): cala o som dela em 0,25 s.
export function pararResultado() { const b = resultadoTocando; resultadoTocando = null; apagarBarramento(b); }
let contagemDaVez = -1;
// Uma contagem nova começou: sorteia o som dela (o das cenas sem som próprio) e devolve o nome dele.
export function novaContagem() {
  let k;
  do { k = Math.floor(Math.random() * CONTAGENS.length); } while (k === contagemDaVez && CONTAGENS.length > 1);
  contagemDaVez = k;
  return CONTAGENS[k].nome;
}
// Um segundo da contagem (de ESPERA_PROXIMA, hoje 7, até 1; os sons servem para até 10). Com a cena (contagem.cena) e um
// som próprio para ela, toca o dele; senão, o sorteado. Nas roletas ("Qualquer|n"), o primeiro segundo marca todos os sons
// dela, pelo plano (contagem.roleta).
export function somContagem(s, cena, roleta = null) {
  if (!pronto() || s < 1) return;
  if (cena?.startsWith("Qualquer|")) { if (roleta) somRoleta(roleta); return; }
  const proprio = SONS_CENAS[cena];
  if (proprio) {
    const [gs, gz] = proprio.ganho || [1, 1];
    try { ganho = gs; proprio.segundo(s); if (s === 1 && proprio.zero) { ganho = gz; proprio.zero(1); } }
    finally { ganho = 1; }
    return;
  }
  if (contagemDaVez < 0) novaContagem();
  const c = CONTAGENS[contagemDaVez];
  try { ganho = c.ganho || 1; c.segundo(s); }
  finally { ganho = 1; }
}
// O nome do som próprio da cena, ou null (a galeria, contagens.html, mostra qual som está tocando).
export const somDaCena = cena => SONS_CENAS[cena]?.nome || SONS_ROLETA[cena]?.nome || null;
export const NOMES_CONTAGENS = CONTAGENS.map(c => c.nome);
