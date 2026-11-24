// Arena: a contagem da próxima pergunta automática ("Próxima pergunta em X"), na tela grande (arena.html) e nos celulares
// (jogar.html). Cinco estilos (2026-11-24, os protótipos de 2026-11-23 na identidade Metrô): faixa central, número
// gigante, anel, letreiro de auditório e faixa de alerta. O estilo de cada contagem é sorteado a partir da semente da
// partida e do número da rodada: o mesmo em todos os aparelhos, sem gravar nada, e nunca o mesmo duas vezes seguidas.
// Usa as variáveis de cor da página (--acento, --errado, --linha).

export const ESTILOS = ["faixa", "gigante", "anel", "letreiro", "alerta"];
export const SEGUNDOS = 7;  // duração da contagem entre uma pergunta e outra (2026-11-24: de 10 para 7)

// Gerador pseudoaleatório (mulberry32), como em linear.js.
function aleatorio(semente) {
  let a = semente >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Índice do estilo da contagem que vem depois da rodada n.
export function estiloDaContagem(semente, n) {
  let e = -1;
  for (let k = 1; k <= n; k++) {
    const r = aleatorio(((semente || 0) * 31 + k * 7919) >>> 0)();
    e = e < 0 ? Math.floor(r * ESTILOS.length) : (e + 1 + Math.floor(r * (ESTILOS.length - 1))) % ESTILOS.length;
  }
  return Math.max(0, e);
}

const CSS = `
.contagem { position: fixed; inset: 0; z-index: 5; pointer-events: none; display: grid; place-items: center; align-content: center;
            font-family: var(--fonte, system-ui, sans-serif); }
.contagem .mono { font-family: var(--mono, ui-monospace, monospace); font-variant-numeric: tabular-nums; }
@keyframes ct-piscar { 0%, 100% { opacity: 1; } 50% { opacity: .25; } }
@keyframes ct-bater { 0% { transform: scale(1.25); opacity: 1; } 70% { transform: scale(1); opacity: .85; } 100% { transform: scale(.96); opacity: .35; } }
@keyframes ct-lampada { 0%, 49% { opacity: 1; } 50%, 100% { opacity: .2; } }
@keyframes ct-listras { to { background-position: 8.485vmin 0; } }

/* 1 · Faixa central: uma placa preta com borda amarela, com o texto inteiro, piscando devagar. */
.contagem.faixa span { max-width: 92vw; text-align: center; font-size: clamp(1.6rem, 7vmin, 4.6rem); font-weight: 800; line-height: 1.2;
                       color: #fff; background: #000e; border: .6vmin solid var(--acento); border-radius: 2vmin; padding: .25em .8em;
                       box-shadow: 0 0 6vmin #FFD10044; animation: ct-piscar 1s ease-in-out infinite; }
.contagem.faixa strong { color: var(--acento); white-space: nowrap; }

/* 2 · Número gigante: no meio da tela, que escurece em volta, o número enorme pulsando a cada segundo. */
.contagem.gigante { background: radial-gradient(ellipse at center, #000b 0%, #0006 45%, transparent 75%); }
.contagem.gigante .rot { font-size: clamp(1.2rem, 4.5vmin, 3.2rem); font-weight: 800; letter-spacing: .12em; text-transform: uppercase;
                         color: #fff; text-shadow: 0 0 3vmin #000; text-align: center; animation: ct-piscar 1s ease-in-out infinite; }
.contagem.gigante .num { font-size: clamp(6rem, 42vmin, 30rem); font-weight: 900; line-height: .9; color: #fff;
                         font-variant-numeric: tabular-nums; text-shadow: 0 0 6vmin #000, 0 0 3vmin var(--acento);
                         animation: ct-bater 1s ease-out both; }

/* 3 · Anel: um anel amarelo que se esvazia a cada segundo, com o número no meio; nos 3 últimos, vermelho e piscando. */
.contagem.anel .caixa { display: grid; justify-items: center; gap: 1.5vmin; background: #000e; border: 1px solid var(--linha);
                        border-radius: 3vmin; padding: 3vmin 5vmin; }
.contagem.anel .roda { width: clamp(9rem, 34vmin, 22rem); aspect-ratio: 1; position: relative; }
.contagem.anel svg { width: 100%; height: 100%; transform: rotate(-90deg); display: block; }
.contagem.anel .trilho { stroke: var(--linha); }
.contagem.anel .barra { stroke: var(--acento); transition: stroke-dashoffset .9s linear, stroke .3s; }
.contagem.anel .num { position: absolute; inset: 0; display: grid; place-items: center; font-size: clamp(3.4rem, 15vmin, 10rem);
                      font-weight: 600; color: #fff; }
.contagem.anel .rot { font-size: clamp(1.1rem, 4vmin, 2.6rem); font-weight: 800; color: #fff; animation: ct-piscar 1s ease-in-out infinite; }
.contagem.anel.ultimos .caixa { animation: ct-piscar .5s ease-in-out infinite; }
.contagem.anel.ultimos .barra { stroke: var(--errado); }

/* 4 · Letreiro de auditório: uma placa com contorno amarelo e lâmpadas piscando em volta. */
.contagem.letreiro .placa { position: relative; padding: 4vmin 8vmin; border-radius: 3vmin; background: #141005; text-align: center;
                            box-shadow: 0 0 0 .8vmin var(--acento), 0 0 8vmin #FFD10066; }
.contagem.letreiro .rot { font-size: clamp(1rem, 4.2vmin, 2.8rem); font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
                          color: var(--acento); }
.contagem.letreiro .num { font-size: clamp(4.5rem, 20vmin, 13rem); font-weight: 900; line-height: 1; color: #fff;
                          text-shadow: 0 0 3vmin var(--acento); animation: ct-piscar 1s steps(2, jump-none) infinite; }
.contagem.letreiro .lampadas { position: absolute; inset: -2.4vmin; }
.contagem.letreiro .lampadas i { position: absolute; width: clamp(8px, 2vmin, 18px); aspect-ratio: 1; border-radius: 50%; background: #FFE680;
                                 box-shadow: 0 0 1.6vmin var(--acento); transform: translate(-50%, -50%);
                                 animation: ct-lampada .6s linear infinite; }

/* 5 · Faixa de alerta: uma faixa de lado a lado com listras amarelas e pretas andando e o texto em maiúsculas piscando. */
.contagem.alerta { align-content: center; place-items: stretch; }
.contagem.alerta .listras { height: clamp(5rem, 22vmin, 14rem); display: grid; place-items: center; box-shadow: 0 0 6vmin #000;
                            background: repeating-linear-gradient(-45deg, var(--acento) 0 3vmin, #000 3vmin 6vmin);
                            background-size: 8.485vmin 8.485vmin; animation: ct-listras 1s linear infinite; }
.contagem.alerta span { max-width: 92vw; text-align: center; background: #000; color: var(--acento); border: .5vmin solid var(--acento);
                        font-weight: 800; text-transform: uppercase; font-size: clamp(1.2rem, 6vmin, 4.2rem); letter-spacing: .03em;
                        line-height: 1.15; padding: .1em .6em; border-radius: .8vmin; animation: ct-piscar 1s ease-in-out infinite; }
.contagem.alerta strong { white-space: nowrap; }

@media (prefers-reduced-motion: reduce) {
  .contagem *, .contagem .listras { animation: none !important; transition: none !important; }
}`;

function instalarCss() {
  if (document.getElementById("css-contagem")) return;
  const s = document.createElement("style");
  s.id = "css-contagem";
  s.textContent = CSS;
  document.head.append(s);
}

const RAIO = 42, VOLTA = 2 * Math.PI * RAIO;

function lampadas() {
  const pts = [];
  for (let k = 0; k < 10; k++) pts.push([k * 10 + 5, 0], [k * 10 + 5, 100]);
  for (let k = 1; k < 4; k++) pts.push([0, k * 25], [100, k * 25]);
  return pts.map(([x, y], k) => `<i style="left:${x}%;top:${y}%;animation-delay:${(k % 2) * -.3}s"></i>`).join("");
}

const MOLDES = {
  faixa: `<span>Próxima pergunta em <strong class="mono"><b class="num"></b> s</strong></span>`,
  gigante: `<div class="rot">Próxima pergunta em</div><div class="num"></div>`,
  anel: `<div class="caixa"><div class="roda"><svg viewBox="0 0 100 100" aria-hidden="true">
           <circle class="trilho" cx="50" cy="50" r="${RAIO}" fill="none" stroke-width="8"/>
           <circle class="barra" cx="50" cy="50" r="${RAIO}" fill="none" stroke-width="8" stroke-linecap="round"
                   stroke-dasharray="${VOLTA.toFixed(1)}" stroke-dashoffset="0"/></svg>
           <div class="num mono"></div></div><div class="rot">Próxima pergunta</div></div>`,
  letreiro: () => `<div class="placa"><div class="lampadas" aria-hidden="true">${lampadas()}</div>
           <div class="rot">Próxima pergunta em</div><div class="num"></div></div>`,
  alerta: `<div class="listras"><span>Próxima pergunta em <strong class="mono"><b class="num"></b> s</strong></span></div>`,
};

// Liga a contagem a um elemento da página (vazio, com hidden). mostrar(estilo, ms, total) desenha "faltam ms" no estilo
// dado e devolve o número de segundos quando ele acaba de mudar (para tocar o som do segundo), ou null; esconder() some.
export function criarContagem(caixa) {
  instalarCss();
  let estilo = null, segundos = null;
  return {
    mostrar(indice, ms, total) {
      const nome = ESTILOS[indice] || ESTILOS[1];
      const s = Math.max(0, Math.ceil(ms / 1000));
      if (nome !== estilo || caixa.hidden) {
        estilo = nome;
        segundos = null;
        caixa.className = "contagem " + nome;
        const m = MOLDES[nome];
        caixa.innerHTML = typeof m === "function" ? m() : m;
        caixa.hidden = false;
      }
      if (s === segundos) return null;
      segundos = s;
      // O número é trocado por um novo a cada segundo, o que recomeça o pulso dele (no número gigante).
      const num = caixa.querySelector(".num");
      if (nome === "gigante") { const novo = num.cloneNode(); novo.textContent = s; num.replaceWith(novo); }
      else num.textContent = s;
      if (nome === "anel") {
        const barra = caixa.querySelector(".barra");
        barra.setAttribute("stroke-dashoffset", (VOLTA * (1 - Math.min(1, s / total))).toFixed(1));
      }
      caixa.classList.toggle("ultimos", s <= 3);
      caixa.setAttribute("aria-label", `Próxima pergunta em ${s} segundos`);
      return s;
    },
    esconder() {
      if (caixa.hidden) return;
      caixa.hidden = true;
      estilo = null;
      segundos = null;
    },
  };
}
