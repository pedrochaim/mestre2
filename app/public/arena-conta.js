// Conta e estatísticas da Arena (2026-11-27). O login continua anônimo, um por aparelho (arena-comum.js); a conta Google
// é opcional e serve para o mesmo jogador ter as estatísticas em qualquer aparelho. Quem entra com o Google pela primeira
// vez não troca de id: a conta anônima do aparelho vira a conta Google (linkWithPopup), com tudo o que já jogou. Se a
// conta Google já tinha sido usada em outro aparelho, o aparelho passa para ela, e o que jogou sem conta fica para trás.
//
// Estatísticas: cada resposta do jogador numa rodada revelada vira um registro dele, perfis/{uid}/respostas/{codigo}_{n},
// com a pergunta, o tema, a alternativa, se acertou e o tempo de resposta. A tela grande grava o histórico da rodada
// (partidas/{codigo}/rodadas/{n}) logo depois de revelar, e a regra do Firestore só aceita o registro se ele bater com
// esse histórico e com a resposta gravada na partida. Só contam as perguntas respondidas.

import { GoogleAuthProvider, linkWithPopup, signInWithPopup, signInWithCredential, signOut, signInAnonymously,
         onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { collection, doc, getDoc, getDocs, setDoc, onSnapshot, query, where, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { auth, db, el, esc } from "./arena-comum.js";

// A conta deste aparelho: {uid, google, nome, email}, ou null enquanto o login não terminou.
export function conta(u = auth.currentUser) {
  if (!u) return null;
  const g = u.providerData.find(p => p.providerId === "google.com");
  return { uid: u.uid, google: Boolean(g), nome: g?.displayName || u.displayName || "", email: g?.email || u.email || "" };
}

const ouvintes = new Set();
const avisar = () => { const c = conta(); if (c) ouvintes.forEach(f => f(c)); };
onAuthStateChanged(auth, avisar);
// Chamado a cada mudança de conta (entrar ou sair do Google; a ligação da conta anônima não muda o uid, mas avisa também).
export function aoMudarConta(f) { ouvintes.add(f); return () => ouvintes.delete(f); }

// Navegadores embutidos de apps (WhatsApp, Instagram, Facebook…): o Google recusa o login dentro deles.
export const navegadorEmbutido = () => /FBAN|FBAV|FB_IAB|Instagram|WhatsApp|Line\/|Snapchat|musical_ly|TikTok|; wv\)/i
  .test(navigator.userAgent);

export async function entrarComGoogle() {
  const provedor = new GoogleAuthProvider();
  provedor.setCustomParameters({ prompt: "select_account" });
  const antes = auth.currentUser;
  try {
    if (antes?.isAnonymous) await linkWithPopup(antes, provedor);
    else await signInWithPopup(auth, provedor);
  } catch (e) {
    if (e.code !== "auth/credential-already-in-use") throw e;
    const credencial = GoogleAuthProvider.credentialFromError(e);
    if (!credencial) throw e;
    await signInWithCredential(auth, credencial);
  }
  avisar();
}

// Sai da conta Google e volta ao login anônimo, com um id novo (o antigo é o da conta Google).
export async function sairDaConta() {
  await signOut(auth);
  await signInAnonymously(auth);
}

export function mensagemDeErro(e) {
  const c = e?.code || "";
  if (["auth/popup-closed-by-user", "auth/cancelled-popup-request", "auth/user-cancelled"].includes(c)) {
    return navegadorEmbutido() ? "O Google não deixa entrar dentro deste app: abra a página no Chrome ou no Safari." : "";
  }
  if (c === "auth/popup-blocked") return "O navegador bloqueou a janela do Google. Libere as janelas deste site e tente de novo.";
  if (c === "auth/operation-not-allowed") return "O login com Google ainda não está ligado no projeto.";
  if (c === "auth/network-request-failed") return "Sem conexão. Tente de novo.";
  if (navegadorEmbutido() || c === "auth/operation-not-supported-in-this-environment" || c === "auth/web-storage-unsupported")
    return "O Google não deixa entrar por aqui: abra a página no Chrome ou no Safari.";
  return "Não deu para entrar com o Google: " + (e?.message || c);
}

// A caixa da conta, na entrada do celular e na página de estatísticas: sem conta, o botão "Entrar com Google"; com
// ela, o nome, o e-mail e "Sair da conta". "aoTrocar(conta)" é chamado quando o uid muda.
export function montarConta(caixa, { aoTrocar = () => {}, linkEstatisticas = true } = {}) {
  let uid = auth.currentUser?.uid ?? null, ocupado = false, erro = "";
  const desenhar = () => {
    const c = conta();
    if (!c) return caixa.replaceChildren();
    const texto = c.google
      ? `Conta Google: <strong>${esc(c.nome || c.email)}</strong>${c.nome && c.email ? ` <span class="suave">· ${esc(c.email)}</span>` : ""}`
      : "Sem conta, suas estatísticas ficam só neste aparelho. Com a conta Google, você as vê em qualquer aparelho.";
    const botao = el("button", { type: "button", textContent: c.google ? "Sair da conta" : "Entrar com Google", disabled: ocupado });
    if (!c.google) botao.className = "google";
    botao.onclick = async () => {
      if (c.google && !confirm("Sair da conta Google neste aparelho? Suas estatísticas continuam na conta.")) return;
      ocupado = true; erro = ""; desenhar();
      try { await (c.google ? sairDaConta() : entrarComGoogle()); }
      catch (e) { erro = mensagemDeErro(e); }
      ocupado = false; desenhar();
    };
    const partes = [el("p", { className: "conta-texto", innerHTML: texto }), botao];
    if (linkEstatisticas) partes.push(el("a", { href: "estatisticas.html", className: "conta-link", textContent: "Minhas estatísticas" }));
    if (erro) partes.push(el("p", { className: "erro", textContent: erro }));
    else if (!c.google && navegadorEmbutido())
      partes.push(el("p", { className: "suave", textContent: "Para entrar com o Google, abra esta página no Chrome ou no Safari." }));
    caixa.replaceChildren(...partes);
  };
  aoMudarConta(c => {
    if (c.uid !== uid) { uid = c.uid; aoTrocar(c); }
    desenhar();
  });
  desenhar();
}

// O perfil (perfis/{uid}): o nome, o avatar e a cor com que o jogador entrou na última partida, para a conta Google
// levá-los a outro aparelho.
export async function lerPerfil(uid) {
  try {
    const s = await getDoc(doc(db, "perfis", uid));
    return s.exists() ? s.data() : null;
  } catch { return null; }
}
export function gravarPerfil(uid, { nome, avatar, tema }) {
  return setDoc(doc(db, "perfis", uid), { nome, avatar, tema, atualizado_em: serverTimestamp() }).catch(() => {});
}

// Milissegundos de um Timestamp, como a regra do Firestore os conta (sem a fração).
const ms = t => t.seconds * 1000 + Math.floor(t.nanoseconds / 1e6);

// Enquanto o celular está na partida: junta as minhas respostas e o histórico das rodadas reveladas e grava o registro
// de cada uma que ainda falta, também das rodadas que o celular perdeu (com a tela apagada, por exemplo). Devolve a
// função que para de ouvir.
export function registrarRespostas(codigo, uid) {
  const minhas = new Map(), rodadas = new Map(), feitas = new Set();
  let carregadas = false, ativo = true;
  const tentar = () => {
    if (!carregadas || !ativo) return;
    for (const [n, x] of minhas) {
      const r = rodadas.get(n);
      if (feitas.has(n) || !r) continue;
      feitas.add(n);
      setDoc(doc(db, "perfis", uid, "respostas", `${codigo}_${n}`), {
        partida: codigo, n, pergunta: r.pergunta, tema: r.tema, subtema: r.subtema ?? null, opcao: x.opcao,
        acertou: x.opcao === r.certa, ms: ms(x.em) - ms(r.inicio), em: serverTimestamp(),
      }).catch(e => console.warn("Estatísticas: o registro da rodada", n, "não foi gravado:", e.code || e));
    }
  };
  getDocs(query(collection(db, "perfis", uid, "respostas"), where("partida", "==", codigo)))
    .then(s => { s.forEach(d => feitas.add(d.data().n)); carregadas = true; tentar(); })
    .catch(e => console.warn("Estatísticas:", e.code || e));
  // A hora da resposta ("em") só vem depois que o servidor confirma; até lá, a resposta espera.
  const pararRespostas = onSnapshot(query(collection(db, "partidas", codigo, "respostas"), where("jogador", "==", uid)), s => {
    for (const d of s.docs) { const x = d.data(); if (x.em) minhas.set(x.n, x); }
    tentar();
  }, () => {});
  const pararRodadas = onSnapshot(collection(db, "partidas", codigo, "rodadas"), s => {
    for (const d of s.docs) rodadas.set(d.data().n, d.data());
    tentar();
  }, () => {});
  return () => { ativo = false; pararRespostas(); pararRodadas(); };
}

// Todos os registros do jogador, para a página de estatísticas.
export async function lerRegistros(uid) {
  return (await getDocs(collection(db, "perfis", uid, "respostas"))).docs.map(d => d.data());
}
