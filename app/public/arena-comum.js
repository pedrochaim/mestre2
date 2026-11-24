// Modo Arena (MANIFESTO §16, Modo Arena): o que a tela grande (arena.html) e o celular de cada jogador (jogar.html)
// têm em comum: a ligação com o Firebase (Firestore e login anônimo), as cores dos temas, o peão e o relógio da rodada.
// A Arena só usa perguntas de múltipla escolha do jogo original. A pergunta aparece na tela grande, todos respondem
// ao mesmo tempo, cada um no seu celular, e quem acerta anda uma casa na trilha do Linear (linear.js).

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, connectFirestoreEmulator } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getAuth, signInAnonymously, onAuthStateChanged, connectAuthEmulator } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { avatarDoJogador, avatarValido } from "./arena-avatares.js";

const app = initializeApp({
  apiKey: "AIzaSyDOxFK6-2MaySIpb5oDeLQJha3V1_6Aw7I",
  authDomain: "mestre2-626dd.firebaseapp.com",
  projectId: "mestre2-626dd",
  storageBucket: "mestre2-626dd.firebasestorage.app",
  messagingSenderId: "450189916006",
  appId: "1:450189916006:web:92357b7ab1998d0dc0faa7",
});
export const db = getFirestore(app);
const auth = getAuth(app);
// Para testar sem tocar no projeto: com "?emulador" no endereço, a página usa os emuladores locais do Firebase
// (npx firebase-tools emulators:start --only firestore,auth, na pasta app/).
if (new URLSearchParams(location.search).has("emulador")) {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
}

// Login anônimo: cada aparelho ganha um id (uid) que sobrevive a recarregar a página. É ele que distingue os jogadores
// (o documento do jogador tem o uid como id) e a tela grande que comanda a partida (campo "anfitriao").
export function entrarAnonimo() {
  return new Promise((resolve, reject) => {
    const parar = onAuthStateChanged(auth, usuario => {
      if (!usuario) return signInAnonymously(auth).catch(e => { parar(); reject(e); });
      parar();
      resolve(usuario.uid);
    }, reject);
  });
}

export const LETRAS = "ABCDEFGHJKLMNPQRSTUVWXYZ"; // sem I e O, que se confundem com 1 e 0
export const PRAZOS = [10, 15, 20, 30];           // segundos para responder, escolhidos na tela grande
export const PRAZO_PADRAO = 20;
export const OPCOES = ["A", "B", "C", "D"];

// Cores dos temas, as mesmas do index.html: [fundo, texto]. Também são as cores possíveis do peão.
export const CORES = {
  "Geografia":          ["#00A84F", "#000"],
  "Natureza":           ["#8CC63F", "#000"],
  "Artes e Pensamento": ["#F7941D", "#000"],
  "Cotidiano":          ["#E8412C", "#000"],
  "Ciências":           ["#E4007C", "#fff"],
  "Entretenimento":     ["#8E4FC9", "#fff"],
  "Esportes":           ["#00A3E0", "#000"],
  "História":           ["#2F5BEA", "#fff"],
};
const ABREV = { "Geografia": "G", "Natureza": "N", "Artes e Pensamento": "AP", "Cotidiano": "CO",
                "Ciências": "CI", "Entretenimento": "EN", "Esportes": "E", "História": "H" };
export const abrev = t => ABREV[t] || String(t).slice(0, 2).toUpperCase();
export const corDe = t => CORES[t] || ["#6b6b66", "#fff"];

export const $ = id => document.getElementById(id);
export const el = (tag, props = {}) => Object.assign(document.createElement(tag), props);
export const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
export const iniciais = nome => nome.split(/\s+/).filter(Boolean).slice(0, 2).map(p => p[0]).join("").toUpperCase();
export const umDe = lista => lista[Math.floor(Math.random() * lista.length)];

// Peão no tabuleiro do Linear: o avatar do jogador (arena-avatares.js), com o anel na cor dele e as iniciais; sem avatar
// (quem entrou antes dos avatares), um disco na cor escolhida, com as iniciais.
export function peao(x, y, raio, j) {
  if (avatarValido(j.avatar)) {
    const r = raio * 1.3;
    return `<g><title>${esc(j.nome)}</title>${avatarDoJogador(j.avatar, corDe(j.tema), j.nome,
      `x="${(x - r).toFixed(1)}" y="${(y - r).toFixed(1)}" width="${(2 * r).toFixed(1)}" height="${(2 * r).toFixed(1)}"`)}</g>`;
  }
  const [c, ct] = corDe(j.tema);
  const [cx, cy] = [x.toFixed(1), y.toFixed(1)];
  return `<g><title>${esc(j.nome)}</title>
    <circle cx="${cx}" cy="${cy}" r="${raio + 3}" fill="#000"/>
    <circle cx="${cx}" cy="${cy}" r="${raio}" fill="${c}" stroke="#FFD100" stroke-width="5"/>
    <text x="${cx}" y="${cy}" font-size="${(raio * .95).toFixed(1)}" fill="${ct}" font-weight="800" text-anchor="middle" dominant-baseline="central">${esc(iniciais(j.nome))}</text></g>`;
}

// Ficha de um jogador (avatar, ou a cor com as iniciais, e o nome), para listas. A bolinha (.bola) também serve sozinha,
// como nos votos que caem nas alternativas.
export function ficha(j, extra = "") {
  const [c, ct] = corDe(j.tema);
  const f = el("span", { className: "ficha" });
  const bola = avatarValido(j.avatar)
    ? `<span class="bola av">${avatarDoJogador(j.avatar, corDe(j.tema), j.nome)}</span>`
    : `<span class="bola" style="background:${c};color:${ct}">${esc(iniciais(j.nome))}</span>`;
  f.innerHTML = `${bola}<span class="nome">${esc(j.nome)}</span>${extra}`;
  return f;
}

// Relógio da rodada. O prazo conta do "inicio" gravado pelo servidor; quem decide se a resposta chegou a tempo é a
// regra do Firestore, com a hora do servidor e uma folga. Cada aparelho usa o próprio relógio, corrigido quando vê uma
// rodada começar ao vivo: se o "inicio" do servidor parecer longe da hora local, a diferença vira a correção.
let correcao = 0;
export const agora = () => Date.now() + correcao;
export function acertarRelogio(inicioMs) {
  const diferenca = inicioMs - Date.now();
  if (Math.abs(diferenca - correcao) > 1500) correcao = diferenca + 150;
}
export const restante = rodada => {
  const inicio = rodada?.inicio?.toMillis?.();
  return inicio ? Math.max(0, inicio + rodada.prazo * 1000 - agora()) : rodada?.prazo * 1000 || 0;
};

// Tela acesa enquanto a página estiver aberta (volta a pedir quando a página volta a ficar visível).
let trava = null;
export async function manterAcesa() {
  const pedir = async () => { try { trava = await navigator.wakeLock?.request("screen"); } catch {} };
  await pedir();
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") pedir(); });
}
