// Natureza: dez cenas novas para a contagem da Arena (protótipo de 2026-11-27), no formato de arena-contagem.js:
// html(s, decorrido) monta a cena; depois(caixa, s) faz o que muda a cada segundo; texto(s), quando há, é o que vai no
// número. O estado sai sempre do segundo (s), para um celular que entra no meio ver a cena certa: o svg de cada cena leva
// data-s, e o CSS desenha cada segundo a partir dele. As classes "ultimos" (3, 2, 1) e "fim" (0) ficam na caixa da
// contagem, como no app.
// Medidas em --u. No protótipo, --u vale 1.8cqmin (o palco é um contêiner); no app, 1.8vmin e "cqw" vira "vw".
// Os sons de cada cena estão em sons.js, na mesma ordem (no app, "Natureza|1" a "|10"; a 0 continua o broto).
(() => {
const f1 = n => (Math.round(n * 10) / 10).toString();
function aleatorio(semente) {  // mulberry32, como em arena-contagem.js
  let a = semente >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const badge = `<span class="badge" style="background:#8CC63F;color:#000">Natureza</span>`;
const rot = `<div class="rot">Próxima pergunta em</div>`;
// O fundo das cenas some nas bordas (uma máscara de gradiente radial), para a cena não parecer uma caixa no preto.
const vinheta = (id, x, y, w, h) => { const borda = (eixo, b) => `<linearGradient id="${id}-${eixo}" x1="0" y1="0" x2="${eixo === "h" ? 1 : 0}" y2="${eixo === "h" ? 0 : 1}">
    <stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="${b}" stop-color="#fff"/><stop offset="${1 - b}" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>`;
  const area = `maskUnits="userSpaceOnUse" x="${x}" y="${y}" width="${w}" height="${h}"`, ret = `x="${x}" y="${y}" width="${w}" height="${h}"`;
  return `${borda("h", .16)}${borda("v", .17)}<mask id="${id}-m" ${area}><rect ${ret} fill="url(#${id}-v)"/></mask>
    <mask id="${id}" ${area}><rect ${ret} fill="url(#${id}-h)" mask="url(#${id}-m)"/></mask>`; };
// Grava o segundo no svg da cena (o CSS desenha o estado a partir dele) e devolve o svg.
const marcar = (c, s) => { const svg = c.querySelector(".na svg"); if (svg) svg.dataset.s = s; return svg; };
// Atraso que acerta as animações de 1 s com o relógio da contagem, para quem entra no meio de um segundo.
const fracao = d => `--f:${(-(d % 1)).toFixed(2)}s`;
const estrelas = (semente, n, h, x0 = 0, w = 220) => { const r = aleatorio(semente); return Array.from({ length: n }, () =>
  `<circle cx="${f1(x0 + r() * w)}" cy="${f1(r() * h)}" r="${(.25 + r() * .5).toFixed(2)}" opacity="${(.35 + r() * .6).toFixed(2)}"/>`).join(""); };

// ---------------------------------------------------------------- 1. Morcego
// À noite, o morcego caça uma mariposa no escuro, pelo eco: a cada chamada sai uma onda dele, e a mariposa devolve o eco.
// Ele chega mais perto a cada segundo; nos três últimos, as chamadas ficam cada vez mais rápidas (o "zumbido de captura").
// No zero, pegou. O número está na lua.
const POS_MOR = { 7: [22, 60], 6: [38, 62], 5: [54, 64], 4: [70, 66], 3: [88, 70], 2: [106, 74], 1: [124, 78], 0: [154, 86] };
const LEG_MOR = { 7: "procurando · 10 chamadas por segundo", 6: "procurando · 10 chamadas por segundo", 5: "procurando · 12 chamadas por segundo",
  4: "achou! · 20 chamadas por segundo", 3: "chegando perto · 50 por segundo", 2: "ataque · 100 por segundo",
  1: "zumbido de captura · 200 por segundo", 0: "pegou a mariposa" };
const tMor = s => `translate(${POS_MOR[s][0]}px,${POS_MOR[s][1]}px)`;
const copa = (semente, y, amp, passo) => { const r = aleatorio(semente); let d = `M-12 140 L-12 ${y}`;
  for (let x = -12; x < 232; x += passo) d += ` Q${f1(x + passo / 2)} ${f1(y - amp * (.6 + r() * .8))} ${f1(x + passo)} ${f1(y - r() * amp * .25)}`;
  return d + " L232 140 Z"; };
const ASA_MOR = "M1 -1 L-2 -12 L-11 -17 Q-10 -12 -14 -9 Q-10 -8 -10 -4.5 Q-7 -5 -5 -1 Z";
const ondas = (cls, d) => [0, 1, 2].map(k => `<path class="${cls}" style="--k:${k}" d="${d}"/>`).join("");
const morcego = {
  html: s => `<div class="cena na na-mor">${badge}${rot}<svg viewBox="0 0 220 132" data-s="${s}" aria-hidden="true">
    <defs>${vinheta("na-mor-v", -12, -6, 244, 146)}
      <linearGradient id="na-mor-ceu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#040a1c"/><stop offset=".72" stop-color="#16264a"/><stop offset="1" stop-color="#24375f"/></linearGradient>
      <radialGradient id="na-mor-lua" cx=".42" cy=".38" r=".65"><stop offset="0" stop-color="#fffdf2"/><stop offset=".7" stop-color="#efe5c2"/><stop offset="1" stop-color="#d6c99a"/></radialGradient>
      <radialGradient id="na-mor-halo"><stop offset=".55" stop-color="#fff3c8" stop-opacity=".3"/><stop offset="1" stop-color="#fff3c8" stop-opacity="0"/></radialGradient></defs>
    <g mask="url(#na-mor-v)">
      <rect x="-12" y="-6" width="244" height="146" fill="url(#na-mor-ceu)"/>
      <g fill="#fff">${estrelas(3, 34, 92)}</g>
      <path d="${copa(5, 106, 12, 14)}" fill="#0f1b36"/>
      <path d="${copa(8, 117, 10, 11)}" fill="#04060c"/>
    </g>
    <circle cx="184" cy="32" r="34" fill="url(#na-mor-halo)"/>
    <circle cx="184" cy="32" r="22" fill="url(#na-mor-lua)"/>
    <g fill="#000" opacity=".07"><circle cx="175" cy="24" r="4"/><circle cx="192" cy="41" r="5"/><circle cx="194" cy="23" r="2.5"/></g>
    <text class="num" x="184" y="33" text-anchor="middle" dominant-baseline="central">${s}</text>
    <g transform="translate(172 86)"><g class="mariposa">
      <animateMotion dur="2.6s" repeatCount="indefinite" path="M0 0 C7 -9 15 3 6 8 C-3 13 -12 -5 0 0"/>
      <g class="ecos">${ondas("eco", "M-3.2 -3.8 A5 5 0 0 0 -3.2 3.8")}</g>
      <g transform="scale(2)"><g class="asas-m"><path d="M0 -.5 L-5.5 -6 L-7 -1.5 Z"/><path d="M0 -.5 L5.5 -6 L7 -1.5 Z"/></g>
        <ellipse rx=".9" ry="2.6" fill="#b9a77c"/></g>
    </g></g>
    <g class="morcego" style="transform:${tMor(s)}">
      <g class="ondas" transform="translate(17.4 -2)">${ondas("onda", "M3.2 -3.8 A5 5 0 0 1 3.2 3.8")}</g>
      <g transform="scale(2)"><g class="voo">
        <g transform="translate(-2.2 -1)"><path class="asa longe" d="${ASA_MOR}"/></g>
        <ellipse class="corpo" cx="-1" cy="0" rx="6.2" ry="2.9"/>
        <circle class="corpo" cx="4.8" cy="-1.4" r="2.7"/>
        <path class="corpo" d="M3.3 -3.2 L3.5 -7.4 L5.3 -3.8 Z M5.2 -3.6 L6.7 -7.1 L7.1 -2.8 Z M6.8 -1.7 L8.6 -.7 L6.9 .3 Z M-6 1 L-9.5 3.4 L-7 1.6 Z"/>
        <circle cx="5.7" cy="-2" r=".55" fill="#c9d4f5"/>
        <path class="asa" d="${ASA_MOR}"/>
      </g></g>
    </g>
    <text class="leg" x="110" y="128" text-anchor="middle">${LEG_MOR[s]}</text>
    <text class="grito" x="112" y="40" text-anchor="middle">NHAC!</text>
  </svg></div>`,
  depois: (c, s) => { marcar(c, s); c.querySelector(".na-mor .morcego").style.transform = tMor(s); c.querySelector(".na-mor .leg").textContent = LEG_MOR[s]; },
};

// ---------------------------------------------------------------- 2. João-de-barro
// No alto do mourão da cerca, o joão-de-barro levanta o forno: a cada segundo ele vai do arame ao ninho com uma bolota de
// barro no bico e assenta uma camada (escura de molhada, que seca devagar). No zero, a casa fica pronta, com a porta de
// lado, e o casal canta em dueto em cima dela. O número está na plaquinha do mourão.
const DOMO = { cx: 77, cy: 62, rx: 30, ry: 42 }, CAMADA = 6, POLEIRO = [150, 86], ESC_AVE = 1.35;
const bordaDomo = y => DOMO.cx + DOMO.rx * Math.sqrt(Math.max(0, 1 - ((DOMO.cy - y) / DOMO.ry) ** 2));
// Onde a ave pousa para pôr a camada k (na beira direita do que já está feito), relativo ao poleiro e na escala da ave.
const alvoJoao = k => { const y = DOMO.cy - CAMADA * (k + 1);
  return `--hx:${f1((bordaDomo(y) + 1.5 - POLEIRO[0]) / ESC_AVE)}px;--hy:${f1((y + .5 - POLEIRO[1]) / ESC_AVE)}px`; };
const CAMADAS = (() => { const r = aleatorio(17); return Array.from({ length: 7 }, (_, k) => {
  const y = DOMO.cy - CAMADA * (k + 1); let pintas = "", palha = "";
  for (let j = 0; j < 10; j++) pintas += `<ellipse cx="${f1(47 + r() * 60)}" cy="${f1(y + 1 + r() * 4.5)}" rx="${f1(1 + r() * 1.8)}" ry="${f1(.6 + r() * .6)}"/>`;
  for (let j = 0; j < 4; j++) { const x = 50 + r() * 54, yy = y + 1.5 + r() * 3.5; palha += `<path d="M${f1(x)} ${f1(yy)} l${f1(2.5 + r() * 3)} ${f1(r() * 1.6 - .8)}"/>`; }
  return `<g class="camada" data-k="${k}"><rect x="44" y="${y}" width="66" height="${CAMADA + .8}"/><path class="junta" d="M44 ${y + .3} H110"/><g class="pintas">${pintas}</g><g class="palha">${palha}</g></g>`; }).join(""); })();
const AVE = `<g class="pose">
  <path class="cauda" d="M6 -6.5 L14.5 -3.2 L13.6 -1.2 L5.5 -4 Z"/>
  <ellipse class="dorso" cx="1" cy="-7" rx="7" ry="4.6"/>
  <path class="peito" d="M-5.6 -7.2 Q-3 -2.4 3.2 -3.1 Q-.6 -4.6 -5.6 -7.2 Z"/>
  <path class="asa-a" d="M-2.5 -9.4 Q4 -11.6 9.5 -6.2 Q3 -5.2 -2.5 -7.4 Z"/>
  <circle class="cabeca" cx="-5" cy="-11.2" r="3.7"/>
  <path class="garganta" d="M-8.4 -10.2 Q-7 -7.4 -3.6 -8.2 Q-6 -8.8 -8.4 -10.2 Z"/>
  <path class="bico" d="M-8.3 -11.7 L-13.2 -10.7 L-8.3 -10.1 Z"/>
  <path class="sobrancelha" d="M-8 -13 Q-6 -14 -3.6 -13.2"/>
  <circle cx="-6.1" cy="-11.9" r=".75" fill="#140c06"/>
  <path d="M-1 -3 L-1.6 0 M2 -3 L2.4 0" stroke="#5d4a3a" stroke-width=".8" fill="none"/>
  <circle class="lama" cx="-13.8" cy="-10.5" r="1.9"/>
</g>`;
const NOTAS_JOAO = [[-6, .1], [7, .45], [-2, .8], [9, 1.15], [-9, 1.5], [3, 1.85]].map(([dx, d]) =>
  `<g class="nota" style="--dx:${dx}px;--d:${d}s"><ellipse cx="0" cy="0" rx="2" ry="1.5" transform="rotate(-20)"/><path d="M1.8 -.4 V-8 Q4.4 -6.4 5 -3.6" fill="none"/></g>`).join("");
const KF_ASA_JOAO = (() => { const p = []; let cima = true;
  for (const [a, b] of [[10, 33], [55, 82]]) for (let t = a; t <= b; t += 3, cima = !cima) p.push(`${t}% { transform: rotate(${cima ? -62 : 6}deg); }`);
  return `@keyframes na-joao-asa { 0%, 8%, 35%, 52%, 85%, 100% { transform: none; } ${p.join(" ")} }`; })();
const joao = {
  html: (s, d) => `<div class="cena na na-joao">${badge}${rot}<svg viewBox="0 0 220 132" data-s="${s}" style="${fracao(d)}" aria-hidden="true">
    <defs>${vinheta("na-joao-v", -12, -6, 244, 146)}
      <linearGradient id="na-joao-ceu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f5f97"/><stop offset=".55" stop-color="#8db4d3"/><stop offset="1" stop-color="#f1c98a"/></linearGradient>
      <radialGradient id="na-joao-sol"><stop offset=".35" stop-color="#fff6d6"/><stop offset=".5" stop-color="#ffe9a6" stop-opacity=".55"/><stop offset="1" stop-color="#ffe9a6" stop-opacity="0"/></radialGradient>
      <clipPath id="na-joao-domo"><path d="M47 62 A30 42 0 0 1 107 62 Z"/></clipPath></defs>
    <g mask="url(#na-joao-v)">
      <rect x="-12" y="-6" width="244" height="146" fill="url(#na-joao-ceu)"/>
      <circle cx="192" cy="24" r="22" fill="url(#na-joao-sol)"/>
      <path d="M-12 112 Q20 104 52 108 T120 106 T186 104 T232 108 L232 140 L-12 140 Z" fill="#6f8f4e" opacity=".55"/>
      <path d="M-12 120 Q40 115 110 119 T232 117 L232 140 L-12 140 Z" fill="#46672a"/>
      <g class="arame"><path d="M-12 86 H232 M-12 106 H232"/>${[86, 106].map(y => Array.from({ length: 15 }, (_, k) => { const x = 4 + k * 16; return `<path d="M${x - 1.3} ${y - 1.3} l2.6 2.6 m0 -2.6 l-2.6 2.6"/>`; }).join("")).join("")}</g>
      <rect x="203" y="74" width="8" height="70" fill="#6b4e33"/>
    </g>
    <rect x="69" y="60" width="16" height="80" fill="#7a5a3a"/>
    <path d="M73 66 V132 M80 70 V128" stroke="#5e432a" stroke-width=".6"/>
    <rect x="61" y="72" width="34" height="31" rx="2" fill="#f3ecd8" stroke="#2b1d10" stroke-width="1.3"/>
    <text class="nro" x="64.5" y="80.5">Nº</text>
    <text class="num" x="79" y="99.5" text-anchor="middle">${s}</text>
    <g clip-path="url(#na-joao-domo)">${CAMADAS}</g>
    <path class="porta" d="M90 62 V49.5 Q90 43.5 95.5 43.5 Q101 43.5 101 49.5 V62 Z"/>
    <g transform="translate(${POLEIRO[0]} ${POLEIRO[1]}) scale(${ESC_AVE})"><g class="ave a" style="${alvoJoao(Math.min(6, 7 - s))}">${AVE}</g></g>
    <g transform="translate(65 23.5) scale(${-ESC_AVE} ${ESC_AVE})"><g class="ave b">${AVE}</g></g>
    <g transform="translate(77 12)">${NOTAS_JOAO}</g>
    <text class="grito" x="164" y="62" text-anchor="middle">CASA PRONTA!</text>
  </svg></div>`,
  depois: (c, s) => {
    const svg = marcar(c, s);
    svg.querySelectorAll(".camada").forEach(g => { const k = +g.dataset.k; g.classList.toggle("feita", s === 0 || k < 7 - s); g.classList.toggle("nova", s > 0 && (k === 7 - s || k === 8 - s)); });
    if (s > 0) svg.querySelector(".ave.a").setAttribute("style", alvoJoao(7 - s));
  },
};
// As camadas já feitas e a da vez, no html (depois() faz o mesmo a cada segundo).
const htmlJoao = joao.html;
joao.html = (s, d) => htmlJoao(s, d).replace(/class="camada" data-k="(\d)"/g, (m, k) =>
  `class="camada${s === 0 || +k < 7 - s ? " feita" : ""}${s > 0 && +k === 7 - s ? " nova" : ""}" data-k="${k}"`);

// ---------------------------------------------------------------- 3. Tartarugas-marinhas
// Noite de lua na praia. A cada segundo, um filhote sai do ninho na areia e corre para o mar, o lado mais claro do
// horizonte; os primeiros chegam à água no 2 e no 1. No zero, uma onda sobe a praia e leva os outros, e lá no mar
// aparecem as cabecinhas nadando.
const NINHO = [36, 110];
const praia = t => { const u = 1 - t; return [u * u * u * -10 + 3 * u * u * t * 70 + 3 * u * t * t * 140 + t * t * t * 230,
                                              u * u * u * 78 + 3 * u * u * t * 80 + 3 * u * t * t * 88 + t * t * t * 100]; };
const beira = x => { let lo = 0, hi = 1; for (let i = 0; i < 30; i++) { const m = (lo + hi) / 2; if (praia(m)[0] < x) lo = m; else hi = m; } return praia(lo)[1]; };
const CORRIDA = 5;  // segundos do ninho até a água
const FILHOTES = [148, 138, 158, 128, 166, 120, 152].map(x => { const y = beira(x) + 2.2;
  return { x, y, a: Math.atan2(y - NINHO[1], x - NINHO[0]) * 180 / Math.PI }; });
const FILHOTE = `<g class="corpo">
  <path class="nad f" d="M1.6 -2.4 L4.6 -6.6 L6.2 -5.8 L3.6 -1.6 Z"/><path class="nad f b" d="M1.6 2.4 L4.6 6.6 L6.2 5.8 L3.6 1.6 Z"/>
  <path class="nad t" d="M-3 -2 L-5.6 -4 L-4 -1.2 Z"/><path class="nad t b" d="M-3 2 L-5.6 4 L-4 1.2 Z"/>
  <ellipse class="casco" cx="0" cy="0" rx="4.3" ry="3.3"/><path class="placas" d="M-2.6 0 H2.6 M0 -3 V3 M-2 -2 L2 2 M-2 2 L2 -2"/>
  <circle class="cabeca" cx="5.6" cy="0" r="1.7"/></g>`;
const BRILHO_MAR = (() => { const r = aleatorio(23); let h = "";
  for (let y = 54; y < 86; y += 2.4) { const w = 2 + (y - 54) * .28, x = 186 + (r() - .5) * (4 + (y - 54) * .5);
    h += `<path d="M${f1(x - w / 2)} ${f1(y)} h${f1(w)}" style="--d:${(-r() * 1.6).toFixed(2)}s"/>`; } return h; })();
// A onda do zero: a frente ondulada que a espuma desenha na areia (de x = 232 a -12) e a água atrás dela.
const FRENTE = (() => { const base = [[232, 112], [180, 119], [120, 123], [80, 119], [56, 112], [40, 100], [20, 90], [-12, 82]], pts = [];
  for (let x = 232; x >= -12; x -= 4) { let k = 0; while (base[k + 1][0] > x) k++; const [x0, y0] = base[k], [x1, y1] = base[k + 1];
    pts.push([x, y0 + (y1 - y0) * (x0 - x) / (x0 - x1) + .8 * Math.sin(x * .37) + .5 * Math.sin(x * 1.3)]); }
  return pts.map(([x, y]) => `${x} ${f1(y)}`).join(" L"); })();
const NADADORES = (() => { const r = aleatorio(29); return Array.from({ length: 7 }, (_, k) => {
  const x = 126 + r() * 86, y = 57 + r() * 18; return `<g transform="translate(${f1(x)} ${f1(y)})"><g class="nadador" style="--d:${(1 + k * .12).toFixed(2)}s">
    <ellipse rx="2.2" ry="1.2" fill="#0a1220"/><circle cx="2.4" cy="-.3" r=".9" fill="#0a1220"/><path d="M-3.6 .8 H4" stroke="#bcd3f0" stroke-width=".4" opacity=".7"/></g></g>`; }).join(""); })();
const tartarugas = {
  html: (s, d) => `<div class="cena na na-tar">${badge}${rot}<svg viewBox="0 0 220 132" data-s="${s}" aria-hidden="true">
    <defs>${vinheta("na-tar-v", -12, -6, 244, 146)}
      <linearGradient id="na-tar-ceu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#03061a"/><stop offset="1" stop-color="#17244f"/></linearGradient>
      <linearGradient id="na-tar-mar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14305e"/><stop offset="1" stop-color="#0b1d3d"/></linearGradient>
      <linearGradient id="na-tar-areia" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6f6450"/><stop offset="1" stop-color="#4a4234"/></linearGradient>
      <clipPath id="na-tar-praia"><path d="M-12 77 C70 80 140 88 232 100 L232 140 L-12 140 Z"/></clipPath>
      <radialGradient id="na-tar-halo"><stop offset=".3" stop-color="#fff8dc" stop-opacity=".45"/><stop offset="1" stop-color="#fff8dc" stop-opacity="0"/></radialGradient></defs>
    <g mask="url(#na-tar-v)">
      <rect x="-12" y="-6" width="244" height="58" fill="url(#na-tar-ceu)"/>
      <g fill="#fff">${estrelas(13, 30, 46)}</g>
      <circle cx="186" cy="22" r="20" fill="url(#na-tar-halo)"/><circle cx="186" cy="22" r="8.5" fill="#f8f1d6"/>
      <rect x="-12" y="50" width="244" height="60" fill="url(#na-tar-mar)"/>
      <g class="brilho">${BRILHO_MAR}</g>
      <path class="marola" d="M90 66 q6 -1.6 12 0 M130 72 q7 -1.8 14 0 M40 62 q5 -1.2 10 0 M160 80 q6 -1.6 12 0"/>
      <path d="M-12 77 C70 80 140 88 232 100 L232 140 L-12 140 Z" fill="url(#na-tar-areia)"/>
      <path class="molhada" d="M-12 77 C70 80 140 88 232 100"/>
      <path class="espuma" d="M-12 77 C70 80 140 88 232 100"/>
    </g>
    <text class="num" x="44" y="34" text-anchor="middle" dominant-baseline="central">${s}</text>
    <g class="ninho"><ellipse cx="${NINHO[0]}" cy="${NINHO[1] + 1}" rx="12" ry="4.5" fill="#857860"/><ellipse cx="${NINHO[0]}" cy="${NINHO[1] + 1.4}" rx="7.5" ry="2.8" fill="#2d271d"/>
      <path d="M29 109 q1.5 -2 3 0 M41 109.6 q1.4 -1.8 2.8 0 M35 113.4 q1.2 -1.6 2.4 0" stroke="#e9e2cf" stroke-width=".8" fill="none"/></g>
    ${FILHOTES.map((p, k) => `<ellipse class="respingo" cx="${f1(p.x + 2)}" cy="${f1(p.y)}" rx="4" ry="1.4" style="--d:${(k - d).toFixed(2)}s"/>
      <g class="filhote" style="--d:${(k - d).toFixed(2)}s;--x1:${f1(p.x)}px;--y1:${f1(p.y)}px"><g class="mergulho" style="--d:${(k - d).toFixed(2)}s">
        <g transform="rotate(${f1(p.a)}) scale(1.6)"><g class="sai">${FILHOTE}</g></g></g></g>`).join("")}
    <g clip-path="url(#na-tar-praia)"><g class="onda-z"><path class="agua-z" d="M-12 40 L232 40 L${FRENTE} Z"/><path class="espuma-z" d="M${FRENTE}"/></g></g>
    <g class="nadadores">${NADADORES}</g>
    <text class="grito" x="112" y="34" text-anchor="middle">PARA O MAR!</text>
  </svg></div>`,
  depois: (c, s) => marcar(c, s),
};

// ---------------------------------------------------------------- 4. Baleia-jubarte
// Metade embaixo d'água, metade no céu da manhã. A jubarte sobe do fundo cantando, dez metros por segundo, e o
// profundímetro da esquerda acompanha: 70 m no 7, 10 m no 1. No zero, ela salta para fora d'água e cai de volta.
const POS_JUB = { 7: [98, 124, -16], 6: [108, 115, -18], 5: [118, 106, -19], 4: [128, 97, -20], 3: [138, 88, -21], 2: [148, 80, -22], 1: [156, 73, -24], 0: [156, 73, -24] };
const tJub = s => { const [x, y, a] = POS_JUB[s]; return `translate(${x}px,${y}px) rotate(${a}deg) scale(.8)`; };
const SUP = 52, yProf = m => SUP + 4 + m * 70 / 70;  // a régua: 0 m logo abaixo da superfície, 70 m embaixo
const tProf = s => `translateY(${f1(yProf(s * 10))}px)`;
const legJub = s => s ? `${s * 10} metros` : "superfície!";
const GOTAS = (cx, n, semente) => { const r = aleatorio(semente); return Array.from({ length: n }, () => { const a = -Math.PI / 2 + (r() - .5) * 2.2, v = 10 + r() * 22;
  return `<circle class="gota" r="${(.7 + r() * 1.1).toFixed(2)}" style="--dx:${f1(Math.cos(a) * v)}px;--dy:${f1(Math.sin(a) * v)}px;--t:${(.7 + r() * .5).toFixed(2)}s" cx="${f1(cx + (r() - .5) * 14)}" cy="${SUP}"/>`; }).join(""); };
const BALEIA = `<g class="corpo-jub">
  <g class="cauda-jub"><path d="M-36 0 C-40 -2 -44 -8 -51 -11 C-48 -6 -47 -3 -44 0 C-47 3 -48 6 -51 11 C-44 8 -40 2 -36 0 Z" fill="#26323f"/></g>
  <path d="M40 0 C38 -3 30 -5 22 -6.5 C14 -8 6 -9.5 -2 -9 L-9 -9 L-12 -12 L-14 -8.5 C-22 -7 -30 -4 -37 -1.5 L-37 1.5 C-28 4 -18 7 -6 9 C6 10.5 20 10 30 7 C35 5.5 39 3 40 0 Z" fill="#2e3c4c"/>
  <path d="M39 2.2 C31 6.6 19 9.4 4 9.9 C-6 9.7 -14 8.3 -20 6.8 C-10 7.4 6 7.4 18 6.2 C28 5.2 34 3.6 39 2.2 Z" fill="#c9d4dc"/>
  <path d="M36 3.6 L10 8.4 M34 4.6 L12 9.2 M31 5.8 L14 9.6" stroke="#8b9eac" stroke-width=".4"/>
  <g fill="#435468"><circle cx="34" cy="-3.4" r=".9"/><circle cx="30" cy="-4.4" r=".9"/><circle cx="26" cy="-5.2" r=".9"/><circle cx="31.5" cy="-1.6" r=".7"/></g>
  <circle cx="24" cy="1.2" r=".9" fill="#0b1118"/>
  <path d="M20 5 C14 10 4 17 -7 21.5 C-5 20 -3.2 18.6 -1.5 17 C-.5 16.6 .4 15.6 1.6 14.6 C3 14.2 4 13 5.6 11.8 C8 10.4 13 8 17 6 Z" fill="#e7eef2" stroke="#4d5d6c" stroke-width=".4"/>
</g>`;
const ANEIS_JUB = [0, 1, 2].map(k => `<circle class="anel" r="5" style="--k:${k}"/>`).join("");
const BOLHAS_JUB = [[0, 1.2], [1.6, .9], [-1.2, 1.4], [.6, .8]].map(([dx, r], k) => `<circle class="bolha" cx="${dx}" r="${r}" style="--k:${k}"/>`).join("");
const RAIOS = [[58, 14], [96, 10], [142, 16], [186, 12]].map(([x, w], k) => `<path class="raio" style="--k:${k}" d="M${x} ${SUP} L${x + w} ${SUP} L${x + w - 26} 140 L${x - 34} 140 Z"/>`).join("");
const jubarte = {
  html: s => `<div class="cena na na-jub">${badge}${rot}<svg viewBox="0 0 220 132" data-s="${s}" aria-hidden="true">
    <defs>${vinheta("na-jub-v", -12, -6, 244, 146)}
      <linearGradient id="na-jub-ceu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#23416f"/><stop offset=".6" stop-color="#9a8fa8"/><stop offset="1" stop-color="#f5b46a"/></linearGradient>
      <linearGradient id="na-jub-mar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a86ae"/><stop offset=".45" stop-color="#0d3c60"/><stop offset="1" stop-color="#041628"/></linearGradient></defs>
    <g mask="url(#na-jub-v)">
      <rect x="-12" y="-6" width="244" height="${SUP + 6}" fill="url(#na-jub-ceu)"/>
      <circle cx="32" cy="${SUP}" r="10" fill="#ffd89a"/><circle cx="32" cy="${SUP}" r="20" fill="#ffd89a" opacity=".18"/>
      <rect x="-12" y="${SUP}" width="244" height="${140 - SUP}" fill="url(#na-jub-mar)"/>
      <g class="raios">${RAIOS}</g>
      <g class="superficie"><path d="M-24 ${SUP} ${Array.from({ length: 22 }, () => "q3 -1.8 6 0 t6 0").join(" ")}"/></g>
    </g>
    <g class="regua"><path d="M14 ${yProf(0)} V${yProf(70)}"/>${[0, 10, 20, 30, 40, 50, 60, 70].map(m => `<path d="M14 ${yProf(m)} h4"/><text x="20" y="${yProf(m) + 1.8}">${m}</text>`).join("")}<text x="7" y="${yProf(0) - 3}" class="un">m</text></g>
    <path class="indicador" d="M6.5 -2.6 L12.5 0 L6.5 2.6 Z" style="transform:${tProf(s)}"/>
    <text class="num" x="54" y="${SUP + 42}" text-anchor="middle">${s}</text>
    <text class="leg" x="54" y="${SUP + 55}" text-anchor="middle">${legJub(s)}</text>
    <g class="baleia" style="transform:${tJub(s)}">
      <g transform="translate(37 0)">${ANEIS_JUB}</g>
      <g transform="translate(18 -8)">${BOLHAS_JUB}</g>
      ${BALEIA}
    </g>
    <g class="respingo-a">${GOTAS(182, 16, 41)}</g><g class="respingo-b">${GOTAS(206, 18, 43)}</g>
  </svg></div>`,
  depois: (c, s) => { marcar(c, s); if (s > 0) c.querySelector(".na-jub .baleia").style.transform = tJub(s);
    c.querySelector(".na-jub .indicador").style.transform = tProf(s); c.querySelector(".na-jub .leg").textContent = legJub(s); },
};

// ---------------------------------------------------------------- 5. Metamorfose
// A lagarta da borboleta-azul come a folha, uma mordida por segundo (7, 6, 5); no 4, pendura-se no galho em J; no 3 vira
// crisálida, que se mexe nos três últimos e no 1 já deixa ver o azul das asas. No zero, a borboleta sai e abre as asas.
const MORDIDAS = [[82, 45, 4.5], [85.5, 57, 6], [84.2, 70.5, 6.4], [78.6, 85, 6]];  // a primeira já estava lá
const CABECA_LAG = { 7: [78.6, 57.6], 6: [77.4, 70.8], 5: [72.4, 85.2] };
const tLag = s => { const [x, y] = CABECA_LAG[Math.max(5, Math.min(7, s))]; return `translate(${x}px,${y}px)`; };
const LAGARTA = (() => { let h = "";
  for (let i = 7; i >= 1; i--) { const r = 3.1 - Math.max(0, i - 4) * .25, x = -3.2 * i, y = -1.9 * i;
    h += `<circle class="seg" cx="${f1(x)}" cy="${f1(y)}" r="${f1(r)}"/>`;
    if (i === 2 || i === 5) h += `<ellipse class="mancha" cx="${f1(x + .3)}" cy="${f1(y - 1.1)}" rx="2.3" ry="1.4" transform="rotate(30 ${f1(x)} ${f1(y)})"/>`;
    if (i === 1 || i === 4 || i === 7) h += `<path class="pelos" d="M${f1(x - 1)} ${f1(y - 2.6)} l-1.6 -3 M${f1(x)} ${f1(y - 3)} l0 -3.4 M${f1(x + 1)} ${f1(y - 2.6)} l1.6 -3"/>`; }
  return h + `<g class="mastiga"><circle class="cab" cx="0" cy="0" r="2.8"/><circle cx="1.1" cy="-.7" r=".55" fill="#000"/></g>`; })();
const ASA_SUP = "M1 -2 C8 -18 26 -24 31 -17 C33 -11 26 -2 2 1 Z", ASA_INF = "M2 1 C14 0 26 6 24 16 C20 24 8 20 2 5 Z";
const PINTAS_BOR = [[27, -16], [29.6, -12], [24, -6], [20.8, 14.6], [16, 18]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".9"/>`).join("");
const ladoBor = `<path class="sup" fill="url(#na-bor-azul)" d="${ASA_SUP}"/><path class="inf" fill="url(#na-bor-azul)" d="${ASA_INF}"/><g class="pintas-b">${PINTAS_BOR}</g>`;
const legBor = s => s >= 5 ? "lagarta" : s === 4 ? "pré-pupa" : s ? "crisálida" : "borboleta!";
const borboleta = {
  html: s => `<div class="cena na na-bor">${badge}${rot}<svg viewBox="0 0 220 132" data-s="${s}" aria-hidden="true">
    <defs>${vinheta("na-bor-v", -12, -6, 244, 146)}
      <radialGradient id="na-bor-fundo" cx=".45" cy=".45"><stop offset="0" stop-color="#1d4a22"/><stop offset="1" stop-color="#07160a"/></radialGradient>
      <linearGradient id="na-bor-azul" x1="0" y1="0" x2="1" y2=".4"><stop offset="0" stop-color="#1640d8"/><stop offset=".55" stop-color="#2f8cff"/><stop offset="1" stop-color="#7fe0ff"/></linearGradient>
      <linearGradient id="na-bor-folha" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7fbf45"/><stop offset="1" stop-color="#3f7d27"/></linearGradient>
      <mask id="na-bor-mordidas" maskUnits="userSpaceOnUse" x="0" y="0" width="220" height="132"><rect width="220" height="132" fill="#fff"/>
        ${MORDIDAS.map(([x, y, r], k) => `<circle class="mordida${k === 0 || 8 - k >= s ? " comida" : ""}" data-k="${k}" cx="${x}" cy="${y}" r="${r}" fill="#000"/>`).join("")}</mask></defs>
    <g mask="url(#na-bor-v)"><rect x="-12" y="-6" width="244" height="146" fill="url(#na-bor-fundo)"/>
      <g fill="#123a18" opacity=".8"><path d="M170 132 C160 104 176 88 196 80 C200 100 192 120 170 132 Z"/><path d="M8 20 C20 30 22 50 14 62 C2 50 0 34 8 20 Z"/><path d="M120 140 C118 120 128 108 144 104 C146 120 138 134 120 140 Z"/></g></g>
    <path class="galho" d="M-12 24 C40 18 90 27 140 20 C170 16 200 22 232 18"/>
    <path class="galho fino" d="M60 23 Q63 26 66 31"/>
    <g mask="url(#na-bor-mordidas)"><path class="folha" fill="url(#na-bor-folha)" d="M66 30 C92 44 90 84 50 112 C38 84 44 46 66 30 Z"/>
      <path class="nervura" d="M66 30 C64 60 58 86 50 112 M64 48 L76 44 M62 62 L80 58 M60 76 L78 74 M56 90 L70 90 M63 50 L52 46 M61 66 L46 64 M58 82 L45 82"/></g>
    <g class="lagarta" style="transform:${tLag(s)}">${LAGARTA}</g>
    <path class="fio" d="M150 21 V24"/>
    <g class="jota"><path d="M150 23 L150 40 Q150 47.5 143 46"/><circle cx="143" cy="46" r="2.8" fill="#3b1a0e"/><ellipse cx="150" cy="30" rx="2.2" ry="1.3" fill="#c8d64a"/><ellipse cx="150" cy="39" rx="2.2" ry="1.3" fill="#c8d64a"/></g>
    <g class="crisalida"><path class="casca" d="M150 22 C156 27 159 37 157 47 C155 55 151 59 150 61 C149 59 145 55 143 47 C141 37 144 27 150 22 Z"/>
      <path class="dentro" d="M150 30 C154.5 35 155.5 43 153.6 50 C152 54 150.6 56 150 57 C149.4 56 148 54 146.4 50 C144.5 43 145.5 35 150 30 Z"/>
      <g fill="#ecc84a"><circle cx="147" cy="31" r=".8"/><circle cx="153" cy="31" r=".8"/><circle cx="150" cy="27.5" r=".7"/></g><path d="M150 20 V23" stroke="#222" stroke-width="1.2"/></g>
    <g transform="translate(148 68) scale(1.25)"><g class="borb">
      <g class="lado d">${ladoBor}</g><g transform="scale(-1 1)"><g class="lado e">${ladoBor}</g></g>
      <ellipse rx="1.6" ry="9" fill="#262021"/><circle cy="-9.5" r="1.8" fill="#262021"/>
      <path d="M-.6 -11 Q-4 -18 -6 -20 M.6 -11 Q4 -18 6 -20" stroke="#262021" stroke-width=".6" fill="none"/></g></g>
    <text class="num" x="198" y="92" text-anchor="middle">${s}</text>
    <text class="leg" x="198" y="106" text-anchor="middle">${legBor(s)}</text>
  </svg></div>`,
  depois: (c, s) => { const svg = marcar(c, s); svg.querySelector(".lagarta").style.transform = tLag(s); svg.querySelector(".leg").textContent = legBor(s);
    svg.querySelectorAll(".mordida").forEach(m => m.classList.toggle("comida", +m.dataset.k === 0 || 8 - +m.dataset.k >= s)); },
};

// ---------------------------------------------------------------- 6. Flor-de-coco
// No pé de uma palmeira de babaçu, à noite, brota um cogumelo por segundo, e cada um acende verde: é a flor-de-coco, um
// fungo que brilha no escuro. Nos três últimos, eles pulsam. No zero, brilham todos de uma vez e soltam esporos.
const COGUMELOS = [[58, 117, 1.1], [104, 114, 1], [82, 95, .75], [38, 122, .8], [128, 120, 1.15], [92, 73, .62], [114, 125, .85]];
const COGU = `<path class="pe" d="M-1.6 0 L-2.3 8.5 L2.3 8.5 L1.6 0 Z"/>
  <path class="chapeu" fill="url(#na-fun-chapeu)" d="M-10.5 -8.6 Q0 -4.6 10.5 -8.6 Q8.6 -1.6 1.6 0 L-1.6 0 Q-8.6 -1.6 -10.5 -8.6 Z"/>
  <path class="lamelas" d="M0 -.4 L-8.6 -6.4 M0 -.4 L-4.4 -4.6 M0 -.4 L4.4 -4.6 M0 -.4 L8.6 -6.4"/>
  <ellipse class="boca" cx="0" cy="-8" rx="10.4" ry="2.1"/>`;
const ESPOROS = (() => { const r = aleatorio(61); let h = "";
  COGUMELOS.forEach(([x, y, e]) => { for (let j = 0; j < 6; j++) h += `<circle class="esporo" cx="${f1(x + (r() - .5) * 16 * e)}" cy="${f1(y - 16 * e)}" r="${(.5 + r() * .6).toFixed(2)}" style="--dx:${f1((r() - .5) * 26)}px;--dy:${f1(-22 - r() * 34)}px;--d:${(.15 + r() * .9).toFixed(2)}s;--t:${(1.6 + r()).toFixed(2)}s"/>`; });
  return h; })();
const CICATRIZES = (() => { let h = ""; for (let y = -6; y < 112; y += 7) for (let x = 66; x < 102; x += 8) { const o = ((y + 6) / 7) % 2 ? 4 : 0;
  h += `<path d="M${x + o - 3} ${y + 3} L${x + o} ${y} L${x + o + 3} ${y + 3}"/>`; } return h; })();
const fungos = {
  html: s => `<div class="cena na na-fun">${badge}${rot}<svg viewBox="0 0 220 132" data-s="${s}" aria-hidden="true">
    <defs>${vinheta("na-fun-v", -12, -6, 244, 146)}
      <radialGradient id="na-fun-luz"><stop offset="0" stop-color="#8cff6a" stop-opacity=".55"/><stop offset="1" stop-color="#8cff6a" stop-opacity="0"/></radialGradient>
      <linearGradient id="na-fun-chapeu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6ffd2"/><stop offset="1" stop-color="#76e85a"/></linearGradient>
      <linearGradient id="na-fun-tronco" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#140d08"/><stop offset=".45" stop-color="#2a1d12"/><stop offset="1" stop-color="#0f0a06"/></linearGradient></defs>
    <g mask="url(#na-fun-v)">
      <rect x="-12" y="-6" width="244" height="146" fill="#030a06"/>
      <g fill="#fff" opacity=".7">${estrelas(67, 14, 40, 120, 100)}</g>
      <path d="M150 -6 C160 20 150 60 170 90 L232 70 L232 -6 Z M-12 30 C10 40 20 70 6 100 L-12 100 Z" fill="#06150c"/>
      <path d="M62 -8 L62 100 C60 108 52 114 44 118 L118 118 C108 114 100 108 100 100 L100 -8 Z" fill="url(#na-fun-tronco)"/>
      <g class="cicatriz">${CICATRIZES}</g>
      <path d="M-12 116 Q40 110 110 114 T232 112 L232 140 L-12 140 Z" fill="#0a0704"/>
      <path class="palha" d="M10 118 Q30 108 52 116 M126 118 Q150 106 178 114 M150 112 l8 -6 M160 114 l7 -7 M170 114 l6 -6 M20 116 l-6 -5 M30 114 l-5 -6"/>
    </g>
    ${COGUMELOS.map(([x, y, e], k) => `<ellipse class="luz-chao" data-k="${k}" cx="${x}" cy="${f1(y - 4 * e)}" rx="${f1(24 * e)}" ry="${f1(14 * e)}" fill="url(#na-fun-luz)"/>`).join("")}
    ${COGUMELOS.map(([x, y, e], k) => `<g transform="translate(${x} ${f1(y - 8.5 * e)}) scale(${e})"><g class="cogumelo${k < 8 - s || s === 0 ? " aceso" : ""}${s > 0 && k === 7 - s ? " novo" : ""}" data-k="${k}">${COGU}</g></g>`).join("")}
    <g class="esporos">${ESPOROS}</g>
    <text class="num" x="172" y="66" text-anchor="middle">${s}</text>
    <text class="leg" x="172" y="82" text-anchor="middle">flor-de-coco</text>
    <text class="leg sci" x="172" y="91" text-anchor="middle">Neonothopanus gardneri</text>
  </svg></div>`,
  depois: (c, s) => { const svg = marcar(c, s); svg.querySelectorAll(".cogumelo").forEach(g => { const k = +g.dataset.k, aceso = s === 0 || k < 8 - s;
    g.classList.toggle("aceso", aceso); g.classList.toggle("novo", s > 0 && k === 7 - s); }); },
};

// ---------------------------------------------------------------- 7. Escavação
// Na rocha, com a quadrícula de barbante dos paleontólogos, o pincel descobre um pedaço do esqueleto por segundo: cauda,
// patas de trás, bacia, costelas, patas da frente, pescoço e, no 1, o crânio. No zero, aparece o bicho inteiro em volta
// dos ossos: um titanossauro, como os achados no Brasil. O número está na plaquinha da quadra.
const bez2 = (p0, p1, p2, t) => [(1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t * t * p2[0], (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t * t * p2[1]];
const vertebras = (p0, p1, p2, n, w0, w1, h0, h1, espinho = 0) => Array.from({ length: n }, (_, i) => {
  const t = (i + .5) / n, [x, y] = bez2(p0, p1, p2, t), [xa, ya] = bez2(p0, p1, p2, t + .01), ang = Math.atan2(ya - y, xa - x) * 180 / Math.PI,
        w = w0 + (w1 - w0) * t, h = h0 + (h1 - h0) * t;
  return `<g transform="rotate(${f1(ang)} ${f1(x)} ${f1(y)})"><rect x="${f1(x - w / 2)}" y="${f1(y - h / 2)}" width="${f1(w)}" height="${f1(h)}" rx="${f1(h / 2.4)}"/>${espinho ? `<path class="tira" d="M${f1(x)} ${f1(y - h / 2)} v${-espinho}"/>` : ""}</g>`; }).join("");
const COSTELAS = Array.from({ length: 8 }, (_, i) => { const t = (i + .5) / 9, [x, y] = bez2([84, 50], [104, 46], [126, 58], t), L = 22 - Math.abs(i - 3) * 1.6;
  return `<path class="tira" d="M${f1(x)} ${f1(y + 2)} Q${f1(x + 4)} ${f1(y + L * .55)} ${f1(x - 1)} ${f1(y + L)}"/>`; }).join("");
const OSSOS = [
  `<g class="massa">${vertebras([130, 62], [176, 60], [210, 96], 20, 4.4, 2.4, 4.6, 1.5, 2)}</g>`,
  `<g class="longe"><path class="tira g" d="M133 66 L131 92 M131 92 L135 112"/></g><path class="tira g" d="M126 66 L122 92 M122 92 L127 112"/><path class="tira" d="M127 112 L134 114 M127 112 L131 115.5 M127 112 L136 112.4"/>`,
  `<path class="massa" d="M110 57 Q126 45 142 57 Q132 63 126 63 Q118 63 110 57 Z"/><path class="tira m" d="M122 62 L112 78 M130 62 L140 75"/><circle cx="126" cy="64" r="2.4" class="furo"/>`,
  `<g class="massa">${vertebras([84, 50], [104, 46], [126, 58], 9, 3.8, 3.8, 4.6, 4.2, 4.5)}</g>${COSTELAS}`,
  `<g class="longe"><path class="tira g" d="M96 63 L93 88 M93 88 L95 110"/></g><path class="massa" d="M84 49 Q96 52 93 66 Q84 62 84 49 Z"/><path class="tira g" d="M89 64 L85 88 M85 88 L87 110"/><path class="tira" d="M87 110 L92 112 M87 110 L91 113.6"/>`,
  `<g class="massa">${vertebras([84, 50], [56, 46], [32, 24], 12, 4.2, 3.6, 4.2, 3, 1.5)}</g>`,
  `<path class="massa" d="M34 22 Q31 15.6 22.6 15.6 Q14 15.6 12 21 Q12 25.2 18 26 Q26 27 34 25 Z"/><circle class="furo" cx="23.4" cy="19.4" r="2.1"/><circle class="furo" cx="15.6" cy="18.6" r="1"/><path class="tira" d="M13.4 23.4 Q22 25.8 31 24.6" style="stroke-width:.6"/><path class="dentes" d="M15 23.6 v1.6 M17.4 24 v1.6 M19.8 24.3 v1.6 M22.2 24.5 v1.6"/>`,
];
const PINCEL = { 7: [172, 70], 6: [124, 98], 5: [128, 58], 4: [104, 68], 3: [88, 92], 2: [54, 40], 1: [24, 22], 0: [200, 124] };
const tPin = s => `translate(${PINCEL[s][0]}px,${PINCEL[s][1]}px)`;
const ESTRATOS = [["#7c5232", -6], ["#946541", 22], ["#6d4628", 46], ["#a0754a", 70], ["#7a5030", 96], ["#8a5e3a", 118]];
const fossil = {
  html: s => `<div class="cena na na-fos">${badge}${rot}<svg viewBox="0 0 220 132" data-s="${s}" aria-hidden="true">
    <defs>${vinheta("na-fos-v", -12, -6, 244, 146)}</defs>
    <g mask="url(#na-fos-v)">
      ${ESTRATOS.map(([cor, y], k) => `<path d="M-12 ${y} Q40 ${y - 3 + (k % 2) * 5} 110 ${y + 2} T232 ${y - 1} L232 140 L-12 140 Z" fill="${cor}"/>`).join("")}
      <g class="pedrinhas">${(() => { const r = aleatorio(83); return Array.from({ length: 40 }, () => `<circle cx="${f1(r() * 220)}" cy="${f1(r() * 132)}" r="${(.4 + r() * 1.1).toFixed(2)}"/>`).join(""); })()}</g>
      <g class="grade">${[20, 60, 100, 140, 180].map(x => `<path d="M${x} -6 V140"/>`).join("")}${[30, 70, 110].map(y => `<path d="M-12 ${y} H232"/>`).join("")}</g>
    </g>
    <g class="bicho"><ellipse cx="108" cy="62" rx="32" ry="15"/><path d="M98 56 Q62 46 27 20"/><ellipse cx="22" cy="21" rx="11" ry="6"/><path d="M130 62 Q176 60 211 97" style="stroke-width:7"/>
      <path d="M89 64 L87 113 M96 64 L95 113 M126 64 L126 114 M133 64 L134 114"/></g>
    ${OSSOS.map((o, k) => `<g class="osso${k < 7 - s || s === 0 ? " visto" : ""}${s > 0 && k === 7 - s ? " agora" : ""}" data-k="${k}">${o}</g>`).join("")}
    <g class="pincel" style="transform:${tPin(s)}"><g transform="rotate(-25)"><g class="varre">
      <rect x="-1.4" y="-27" width="2.8" height="19" rx="1.2" fill="#b5651d"/><rect x="-2.3" y="-9" width="4.6" height="3.6" fill="#c9ccd3"/><path d="M-2.5 -5.6 L2.5 -5.6 L3.4 0 L-3.4 0 Z" fill="#2a1d12"/></g></g>
      <g class="po">${[[-4, -2], [3, -3], [-2, 2], [5, 1], [0, -5]].map(([x, y], k) => `<circle cx="${x}" cy="${y}" r="1.1" style="--k:${k}"/>`).join("")}</g></g>
    <g transform="rotate(-4 196 26)"><path d="M196 42 V62" stroke="#8a6a45" stroke-width="1.8"/><rect x="179" y="8" width="34" height="34" rx="2" fill="#f4f1e6" stroke="#2a1d12" stroke-width="1"/>
      <text class="quadra" x="196" y="15.2" text-anchor="middle">QUADRA</text><text class="num" x="196" y="38" text-anchor="middle">${s}</text></g>
    <text class="grito" x="70" y="128" text-anchor="middle">TITANOSSAURO!</text>
  </svg></div>`,
  depois: (c, s) => { const svg = marcar(c, s); svg.querySelector(".pincel").style.transform = tPin(s);
    svg.querySelectorAll(".osso").forEach(g => { const k = +g.dataset.k; g.classList.toggle("visto", s === 0 || k < 7 - s); g.classList.toggle("agora", s > 0 && k === 7 - s); }); },
};

// ---------------------------------------------------------------- 8. Fogo
// Numa caverna escura, duas mãos batem pirita no sílex, uma vez por segundo, e as faíscas caem na palha seca. No 4 a palha
// começa a fumegar; nos três últimos a brasa cresce e clareia a caverna. No zero, o fogo pega e ilumina as pinturas na
// parede. O número está pintado na rocha, com ocre.
const FAISCAS = (() => { const r = aleatorio(97); return Array.from({ length: 14 }, () => { const dx = -18 + r() * 30, dy = -4 + r() * 22;
  return `<path class="faisca" d="M0 0 l${f1(-dx * .08)} ${f1(-dy * .08)}" style="--dx:${f1(dx)}px;--dy:${f1(dy)}px;--q:${f1(4 + r() * 6)}px"/>`; }).join(""); })();
const PALHA = (() => { const r = aleatorio(101); let h = ""; for (let k = 0; k < 26; k++) { const a = Math.PI * (.05 + r() * .9), L = 6 + r() * 9, x = 110 + (r() - .5) * 18;
  h += `<path d="M${f1(x)} ${f1(110 + r() * 2)} q${f1(Math.cos(a) * L * .5)} ${f1(-Math.sin(a) * L * .4 - 2)} ${f1(Math.cos(a) * L)} ${f1(-Math.sin(a) * L * .5)}" stroke="${["#a88a4e", "#8a6d3c", "#c2a464"][k % 3]}"/>`; } return h; })();
const PINTURAS = `<g class="pinturas">
  <path d="M152 44 Q160 38.5 172 42 Q177 46 172 50 Q160 52 152 50 Z M153 45 L146 35.5 L141.5 34.5 L142.6 37.4 L147 38.6 Z"/>
  <path class="traco" d="M145 35 L142 29 M145 35 L148 29 M142 29 L139 27 M142 31 L139.6 30.4 M148 29 L150.6 26.6 M155 50 L153 62 M160 51 L161 62 M168 50 L166 62 M172 49 L175 61 M172 44 L178 40"/>
  <g transform="translate(184 64)"><circle cx="0" cy="-15" r="2"/><path class="traco" d="M0 -13 L0 -4 M0 -11 L-4 -15 M0 -11 L4 -16 M0 -4 L-3 3 M0 -4 L3 3"/></g>
  <g transform="translate(196 66)"><circle cx="0" cy="-15" r="2"/><path class="traco" d="M0 -13 L0 -4 M0 -11 L-5 -13 M0 -11 L4 -15 M0 -4 L-4 3 M0 -4 L2 3"/><path class="traco" d="M4 -15 L12 -22"/></g>
  <path d="M30 86 q4 -2 8 0 q-1 4 -4 4 q-3 0 -4 -4 Z M30 86 L28 82 M33 85.5 L33 81 M36 85.6 L37 81.4 M38 86 L40 83"/>
</g>`;
const CHAMAS = `<path class="ch fora" d="M0 0 C-10 -2 -11 -14 -4 -22 C-5 -14 0 -16 0 -28 C6 -20 12 -12 8 -4 C7 -1 4 0 0 0 Z"/>
  <path class="ch meio" d="M0 0 C-6 -1 -7 -9 -2 -15 C-2 -10 2 -12 2 -19 C6 -12 8 -6 5 -2 C4 0 2 0 0 0 Z"/>
  <path class="ch miolo" d="M0 0 C-3 -1 -3.5 -5 -1 -9 C0 -6 2 -7 2 -10 C4 -6 4 -2 2 -.6 Z"/>`;
const fogo = {
  html: (s, d) => `<div class="cena na na-fogo">${badge}${rot}<svg viewBox="0 0 220 132" data-s="${s}" style="${fracao(d)}" aria-hidden="true">
    <defs>${vinheta("na-fogo-v", -12, -6, 244, 146)}
      <radialGradient id="na-fogo-parede" cx=".5" cy=".7" r=".7"><stop offset="0" stop-color="#3a2416"/><stop offset="1" stop-color="#120a06"/></radialGradient>
      <radialGradient id="na-fogo-luz" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(110 104) scale(130)"><stop offset="0" stop-color="#ffb347" stop-opacity=".85"/><stop offset=".35" stop-color="#ff7a1a" stop-opacity=".35"/><stop offset="1" stop-color="#ff7a1a" stop-opacity="0"/></radialGradient>
      <radialGradient id="na-fogo-brasa"><stop offset="0" stop-color="#fff2a8"/><stop offset=".4" stop-color="#ff8a1a"/><stop offset="1" stop-color="#ff5a00" stop-opacity="0"/></radialGradient>
      <filter id="na-fogo-tinta" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="3" result="r"/><feDisplacementMap in="SourceGraphic" in2="r" scale="2"/></filter></defs>
    <g mask="url(#na-fogo-v)">
      <rect x="-12" y="-6" width="244" height="146" fill="url(#na-fogo-parede)"/>
      <g fill="#4a3020" opacity=".5"><path d="M10 10 Q30 0 50 14 Q40 26 18 24 Z"/><path d="M120 6 Q150 -2 170 12 Q150 20 126 16 Z"/><path d="M190 90 Q214 80 228 96 Q210 104 194 100 Z"/><path d="M60 70 Q80 64 96 74 Q80 82 64 78 Z"/></g>
      <g filter="url(#na-fogo-tinta)">${PINTURAS}</g>
      <path d="M-12 112 Q50 104 110 110 T232 106 L232 140 L-12 140 Z" fill="#160d07"/>
      <rect class="luz" x="-12" y="-6" width="244" height="146" fill="url(#na-fogo-luz)"/>
      <g class="braco esq"><path d="M20 150 Q56 122 88 104" stroke="#4a2c1c" stroke-width="13" stroke-linecap="round" fill="none"/><circle cx="92" cy="100" r="7.5" fill="#4a2c1c"/>
        <path d="M92 93 L100 88 L107 90 L104 96 L95 97 Z" fill="#c8ccd0"/><path d="M100 88 L107 90 L104 96 Z" fill="#8c9298"/></g>
      <g class="braco dir"><g class="bate"><path d="M204 150 Q170 118 138 90" stroke="#4a2c1c" stroke-width="13" stroke-linecap="round" fill="none"/><circle cx="134" cy="86" r="7.5" fill="#4a2c1c"/>
        <path d="M121 79 L128 75.5 L133 80 L128 85.5 L121 83.5 Z" fill="#c9a24a"/><path d="M128 75.5 L133 80 L128 85.5 Z" fill="#8f7230"/></g></g>
    </g>
    <text class="num" x="54" y="58" text-anchor="middle" filter="url(#na-fogo-tinta)">${s}</text>
    <g class="palha-ninho" fill="none" stroke-width="1" stroke-linecap="round">${PALHA}</g>
    <circle class="brasa" cx="110" cy="107" r="6" fill="url(#na-fogo-brasa)"/>
    <g class="fumaca" transform="translate(110 102)">${[[-3, 0], [2, .7], [0, 1.4]].map(([x, dd]) => `<path d="M${x} 0 q-3 -6 0 -12 q3 -6 0 -12" style="--d:${dd}s"/>`).join("")}</g>
    <g class="faiscas" transform="translate(105 90)">${FAISCAS}</g>
    <g transform="translate(110 108)"><g class="fogueira">${CHAMAS}</g></g>
    <text class="grito" x="110" y="24" text-anchor="middle">FOGO!</text>
  </svg></div>`,
  depois: (c, s) => marcar(c, s),
};

// ---------------------------------------------------------------- 9. Desova dos corais
// Recife à noite, poucos dias depois da lua cheia. A cada segundo, uma colônia de coral fica pronta: aparecem nas bocas dos
// pólipos as bolinhas cor-de-rosa (os pacotes de óvulos e espermatozoides). Nos três últimos, elas pulsam. No zero, todas
// soltam ao mesmo tempo, e a água se enche de bolinhas subindo, como neve ao contrário.
const COLONIAS = (() => {
  const domo = (cx, cy, rx, ry, n) => Array.from({ length: n }, (_, i) => { const a = Math.PI * (.12 + .76 * i / (n - 1)); return [cx - rx * .92 * Math.cos(a), cy - ry * .92 * Math.sin(a)]; });
  return [
    { k: 0, forma: `<path class="cerebro" d="M16 114 A20 17 0 0 1 56 114 Z"/><path class="sulco" d="M22 110 q4 -6 8 -2 t8 -2 t8 0 t6 4 M26 104 q4 -5 8 -1 t8 -2 t6 2 M32 99 q4 -3 8 0"/>`, p: domo(36, 114, 20, 17, 10) },
    { k: 3, forma: `<path class="galhos" d="M74 116 V100 M74 104 L64 90 L60 80 M74 102 L84 88 L90 78 M64 90 L70 82 M84 88 L80 78 M74 100 L75 84"/>`, p: [[60, 80], [90, 78], [70, 82], [80, 78], [75, 84], [64, 90], [84, 88]] },
    { k: 1, forma: `<rect class="mesa-pe" x="115" y="96" width="6" height="22"/><ellipse class="mesa" cx="118" cy="94" rx="25" ry="4.6"/>`, p: Array.from({ length: 11 }, (_, i) => [97 + i * 4.2, 91.2 + Math.abs(i - 5) * .25]) },
    { k: 5, forma: `<path class="cerebro b" d="M144 116 A13 12 0 0 1 170 116 Z"/><path class="sulco" d="M148 112 q4 -4 8 0 t8 0 M152 106 q4 -3 8 0"/>`, p: domo(157, 116, 13, 12, 7) },
    { k: 2, forma: `<path class="galhos b" d="M192 118 V104 M192 108 L184 96 M192 106 L201 94 M184 96 L181 88 M184 96 L189 89 M201 94 L198 86 M201 94 L206 87 M192 104 L192 92"/>`, p: [[181, 88], [189, 89], [198, 86], [206, 87], [192, 92], [184, 96], [201, 94]] },
    { k: 6, forma: `<path class="pilar" d="M94 120 V104 a3 3 0 0 1 6 0 V120 M101 120 V98 a3 3 0 0 1 6 0 V120 M108 120 V108 a3 3 0 0 1 6 0 V120"/>`, p: [[97, 102], [104, 96], [111, 106], [97, 110], [104, 104], [111, 113]] },
    { k: 4, forma: `<path class="cerebro c" d="M196 122 A16 13 0 0 1 228 122 Z"/>`, p: domo(212, 122, 16, 13, 7) },
  ];
})();
const OVULOS = (() => { const r = aleatorio(113); let h = "";
  COLONIAS.forEach(c => c.p.forEach(([x, y]) => { for (let j = 0; j < 2; j++) h += `<circle class="ovulo" cx="${f1(x)}" cy="${f1(y)}" r="${(.8 + r() * .7).toFixed(2)}" style="--dx:${f1((r() - .5) * 34)}px;--dy:${f1(-50 - r() * 70)}px;--d:${(r() * .5).toFixed(2)}s;--t:${(2.2 + r() * 1.2).toFixed(2)}s"/>`; }));
  return h; })();
const PEIXES = [[-30, 40, 14, 0], [-30, 64, 18, -7]].map(([x, y, t, d]) => `<g transform="translate(${x} ${y})"><g class="peixe" style="--t:${t}s;--d:${d}s"><path d="M0 0 C4 -3 10 -3 13 0 C10 3 4 3 0 0 Z M0 0 L-4 -3 L-4 3 Z"/></g></g>`).join("");
const corais = {
  html: s => `<div class="cena na na-cor">${badge}${rot}<svg viewBox="0 0 220 132" data-s="${s}" aria-hidden="true">
    <defs>${vinheta("na-cor-v", -12, -6, 244, 146)}
      <linearGradient id="na-cor-agua" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b2a4a"/><stop offset="1" stop-color="#020b18"/></linearGradient>
      <radialGradient id="na-cor-lua" cx=".7" cy="0" r=".6"><stop offset="0" stop-color="#cfe6ff" stop-opacity=".45"/><stop offset="1" stop-color="#cfe6ff" stop-opacity="0"/></radialGradient></defs>
    <g mask="url(#na-cor-v)">
      <rect x="-12" y="-6" width="244" height="146" fill="url(#na-cor-agua)"/>
      <rect x="-12" y="-6" width="244" height="146" fill="url(#na-cor-lua)"/>
      <g class="raios-l">${[[140, 0], [166, 1], [190, 2]].map(([x, k]) => `<path style="--k:${k}" d="M${x} -6 L${x + 10} -6 L${x - 20} 120 L${x - 38} 120 Z"/>`).join("")}</g>
      <g class="plancton">${(() => { const r = aleatorio(127); return Array.from({ length: 24 }, () => `<circle cx="${f1(r() * 220)}" cy="${f1(r() * 100)}" r="${(.3 + r() * .4).toFixed(2)}" style="--d:${(-r() * 6).toFixed(1)}s"/>`).join(""); })()}</g>
      ${PEIXES}
      <path d="M-12 116 Q30 110 70 118 T150 116 T232 120 L232 140 L-12 140 Z" fill="#0d1820"/>
    </g>
    ${COLONIAS.map(c => `<g class="colonia${c.k < 8 - s || s === 0 ? " pronta" : ""}${s > 0 && c.k === 7 - s ? " nova" : ""}" data-k="${c.k}">${c.forma}<g class="pacotes">${c.p.map(([x, y]) => `<circle cx="${f1(x)}" cy="${f1(y)}" r="1.5"/>`).join("")}</g></g>`).join("")}
    <g class="ovulos">${OVULOS}</g>
    <text class="num" x="40" y="52" text-anchor="middle">${s}</text>
  </svg></div>`,
  depois: (c, s) => { const svg = marcar(c, s); svg.querySelectorAll(".colonia").forEach(g => { const k = +g.dataset.k, pronta = s === 0 || k < 8 - s;
    g.classList.toggle("pronta", pronta); g.classList.toggle("nova", s > 0 && k === 7 - s); }); },
};

// ---------------------------------------------------------------- 10. Geodo de ametista
// O geodo cortado ao meio: no 7, só a bolha de gás que ficou na lava; no 6, 5 e 4, a água com sílica deixa as camadas de
// ágata na parede; no 3, 2 e 1, os cristais de quartzo crescem para dentro e ficam roxos (é o ferro). No zero, a luz
// passa pela pedra e os cristais brilham. O número fica no oco do meio.
const GEO = { cx: 110, cy: 61, R: 54, sx: 1.25 };
const raioGeo = a => GEO.R * (1 + .07 * Math.sin(3 * a + .6) + .05 * Math.sin(5 * a + 2.1) + .025 * Math.sin(9 * a));
const pontoGeo = (a, f) => [GEO.cx + Math.cos(a) * raioGeo(a) * f * GEO.sx, GEO.cy + Math.sin(a) * raioGeo(a) * f];
const contorno = (f, n = 90, rugoso = 0, semente = 1) => { const r = aleatorio(semente);
  return "M" + Array.from({ length: n }, (_, i) => { const a = i / n * Math.PI * 2, j = 1 + (r() - .5) * rugoso; const [x, y] = pontoGeo(a, f * j); return `${f1(x)} ${f1(y)}`; }).join(" L") + " Z"; };
const CAMADAS_GEO = [[.9, "agata1"], [.85, "agata2"], [.8, "agata3"]];  // de fora para dentro: aparecem no 6, 5 e 4
const BORDA_CRISTAIS = .75, N_CRISTAIS = 44;
const CRISTAIS = (() => { const r = aleatorio(131); let h = "";
  for (let i = 0; i < N_CRISTAIS * 2; i++) {
    const atras = i < N_CRISTAIS, j = atras ? i + .5 : i - N_CRISTAIS;  // primeiro a fileira de trás, curta, entre os da frente
    const a = (j + r() * .45) / N_CRISTAIS * Math.PI * 2, [bx, by] = pontoGeo(a, BORDA_CRISTAIS + .02), ux = GEO.cx - bx, uy = GEO.cy - by, dist = Math.hypot(ux, uy);
    const ang = Math.atan2(ux / dist, -uy / dist) * 180 / Math.PI, L = Math.max(6, (dist - 19) * (atras ? .3 + r() * .3 : .5 + r() * .5)), w = atras ? 4 + r() * 3 : 5 + r() * 4;
    const forma = (l, cor) => `<path class="${cor} e" fill="url(#na-geo-${cor === "quartzo" ? "qtz" : "ame"})" d="M${f1(-w / 2)} 0 L${f1(-w / 2)} ${f1(-l * .58)} L0 ${f1(-l)} L0 0 Z"/><path class="${cor} d" d="M0 0 L0 ${f1(-l)} L${f1(w / 2)} ${f1(-l * .58)} L${f1(w / 2)} 0 Z"/>`;
    h += `<g transform="translate(${f1(bx)} ${f1(by)}) rotate(${f1(ang + (r() - .5) * 14)})"${atras ? ' opacity=".75"' : ""}><g class="cristal">${forma(L, "quartzo")}<g class="roxo">${forma(L, "ametista")}</g></g></g>`;
  } return h; })();
const BRILHOS = [[92, 38], [136, 48], [84, 80], [130, 88], [112, 30], [150, 68]].map(([x, y], k) =>
  `<g transform="translate(${x} ${y})"><path class="brilho-c" style="--d:${(.35 + k * .17).toFixed(2)}s" d="M0 -4 L.9 -.9 L4 0 L.9 .9 L0 4 L-.9 .9 L-4 0 L-.9 -.9 Z"/></g>`).join("");
const LEG_GEO = { 7: "a lava esfria e prende uma bolha de gás", 6: "a água com sílica entra pela rocha", 5: "camada sobre camada: é a ágata",
  4: "mais ágata, por milhões de anos", 3: "cristais de quartzo crescem para dentro", 2: "um pouco de ferro deixa o quartzo roxo", 1: "quase pronto…", 0: "ametista!" };
const geodo = {
  html: s => `<div class="cena na na-geo">${badge}${rot}<svg viewBox="0 0 220 132" data-s="${s}" aria-hidden="true">
    <defs><radialGradient id="na-geo-basalto" cx=".4" cy=".35"><stop offset="0" stop-color="#5b554e"/><stop offset="1" stop-color="#2f2b27"/></radialGradient>
      <linearGradient id="na-geo-ame" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#3d1a66"/><stop offset=".6" stop-color="#7d3fc4"/><stop offset="1" stop-color="#d9b8ff"/></linearGradient>
      <linearGradient id="na-geo-qtz" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#8f8a9c"/><stop offset="1" stop-color="#f1eff6"/></linearGradient>
      <linearGradient id="na-geo-luz" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <clipPath id="na-geo-corte"><path d="${contorno(.9)}"/></clipPath></defs>
    <path d="${contorno(1, 120, .05, 7)}" fill="#1b1815" transform="translate(0 5)"/>
    <path d="${contorno(1, 120, .05, 7)}" fill="url(#na-geo-basalto)" stroke="#1d1a17" stroke-width="1.2"/>
    <g fill="#77706a" opacity=".5">${(() => { const r = aleatorio(137); return Array.from({ length: 40 }, () => { const a = r() * Math.PI * 2, [x, y] = pontoGeo(a, .92 + r() * .07);
      return `<circle cx="${f1(x)}" cy="${f1(y)}" r="${(.4 + r() * .8).toFixed(2)}"/>`; }).join(""); })()}</g>
    ${CAMADAS_GEO.map(([f, cls], k) => `<path class="camada-g ${cls}" data-k="${k}" d="${contorno(f)}"/><path class="faixa" data-k="${k}" d="${contorno(f - .02)}"/>`).join("")}
    <path class="oco" d="${contorno(BORDA_CRISTAIS)}"/>
    <g class="cristais">${CRISTAIS}</g>
    <g clip-path="url(#na-geo-corte)"><rect class="reflexo" x="0" y="0" width="40" height="140" fill="url(#na-geo-luz)" transform="skewX(-20)"/></g>
    <g class="brilhos">${BRILHOS}</g>
    <text class="num" x="${GEO.cx}" y="${GEO.cy + 1}" text-anchor="middle" dominant-baseline="central">${s}</text>
    <text class="leg" x="${GEO.cx}" y="131" text-anchor="middle">${LEG_GEO[s]}</text>
  </svg></div>`,
  depois: (c, s) => { marcar(c, s); c.querySelector(".na-geo .leg").textContent = LEG_GEO[s]; },
};

// As fontes das cenas (no app, entram em FONTES de arena-contagem.js): nenhuma além das do app.
const FONTES = "";

const CSS = `
/* ---- Natureza: as dez cenas (prefixo na-). O estado de cada segundo sai do data-s do svg. */
.contagem .na svg { display: block; overflow: visible; width: calc(50 * var(--u)); max-width: 92cqw; height: auto; }
.contagem .na .num { font-weight: 900; fill: #fff; transform-box: fill-box; transform-origin: center; animation: ct-pulso 1s ease-out both; }
.contagem .na .leg { font: 700 6.4px var(--fonte, sans-serif); letter-spacing: .03em; fill: #e8f3dc; }
.contagem .na .grito { font: 900 13px var(--fonte, sans-serif); fill: #FFD100; letter-spacing: .03em; paint-order: stroke; stroke: #000; stroke-width: 3px;
                       stroke-linejoin: round; opacity: 0; }
.contagem.fim .na .grito { animation: na-grito .5s cubic-bezier(.2, 1.6, .4, 1) .25s both; transform-box: fill-box; transform-origin: center; }
@keyframes na-grito { from { opacity: 0; transform: scale(.3); } to { opacity: 1; transform: none; } }
@keyframes na-some { to { opacity: 0; } }

/* 1. Morcego */
.contagem .na-mor { --per: 1s; }
.contagem.ultimos .na-mor { --per: .42s; }
.contagem .na-mor svg[data-s="1"] { --per: .26s; }
.contagem .na-mor .num { font-size: 30px; fill: #1c2442; }
.contagem .na-mor .morcego { transition: transform .95s cubic-bezier(.45, .05, .55, .95); }
.contagem.fim .na-mor .morcego { transition-duration: .35s; transition-timing-function: cubic-bezier(.5, 0, .8, .6); }
.contagem .na-mor .voo { animation: na-mor-boia 1.1s ease-in-out infinite alternate; filter: drop-shadow(0 0 1px #a9bdf5); }
@keyframes na-mor-boia { from { transform: translateY(-1.5px); } to { transform: translateY(1.5px); } }
.contagem.fim .na-mor .voo { animation: na-mor-nhac .45s cubic-bezier(.3, 1.6, .5, 1) .3s both; }
@keyframes na-mor-nhac { 0% { transform: none; } 40% { transform: scale(1.18) rotate(-6deg); } 100% { transform: none; } }
.contagem .na-mor .corpo, .contagem .na-mor .asa { fill: #120d16; }
.contagem .na-mor .asa { transform-origin: 0 -1px; animation: na-mor-bate .2s ease-in-out infinite alternate; }
.contagem .na-mor .asa.longe { fill: #08060b; animation-delay: -.06s; }
@keyframes na-mor-bate { from { transform: scaleY(1); } to { transform: scaleY(-.6); } }
.contagem .na-mor .onda, .contagem .na-mor .eco { fill: none; stroke-width: 1.3; stroke-linecap: round; vector-effect: non-scaling-stroke;
  animation: na-mor-onda var(--per) linear infinite; animation-delay: calc(var(--k) * var(--per) / -3); }
.contagem .na-mor .onda { stroke: #bcd2ff; }
.contagem .na-mor .eco { stroke: #8CC63F; animation-name: na-mor-eco; animation-delay: calc(var(--k) * var(--per) / -3 - var(--per) * .45); }
@keyframes na-mor-onda { from { transform: scale(1); opacity: .95; } to { transform: scale(10); opacity: 0; } }
@keyframes na-mor-eco { from { transform: scale(1); opacity: .9; } to { transform: scale(5); opacity: 0; } }
.contagem.fim .na-mor .ondas, .contagem.fim .na-mor .ecos { display: none; }
.contagem .na-mor .asas-m { fill: #e8dcbc; animation: na-mor-mariposa .07s linear infinite alternate; }
@keyframes na-mor-mariposa { from { transform: scaleY(1); } to { transform: scaleY(.25); } }
.contagem.fim .na-mor .mariposa { animation: na-some .08s .3s both; }
.contagem .na-mor .leg { fill: #cfd8f2; }
.contagem.fim .na-mor .leg { fill: #FFD100; }

/* 2. João-de-barro */
.contagem .na-joao .arame { stroke: #3b3b3b; stroke-width: .7; fill: none; }
.contagem .na-joao .nro { font: 800 5.4px var(--fonte, sans-serif); fill: #2a1a0e; }
.contagem .na-joao .num { font-size: 25px; fill: #2a1a0e; }
.contagem .na-joao .camada { opacity: 0; transform-box: fill-box; transform-origin: 50% 100%; }
.contagem .na-joao .camada.feita { opacity: 1; }
.contagem .na-joao .camada rect { fill: #a46c3f; }
.contagem .na-joao .camada.nova { animation: na-joao-poe .45s cubic-bezier(.2, 1.5, .4, 1) calc(.4s + var(--f, 0s)) both; }
.contagem .na-joao .camada.nova rect { animation: na-joao-seca 1.5s ease-out calc(.4s + var(--f, 0s)) both; }
@keyframes na-joao-poe { from { opacity: 1; transform: scaleY(0); } to { opacity: 1; transform: none; } }
@keyframes na-joao-seca { from { fill: #5a361b; } to { fill: #a46c3f; } }
.contagem .na-joao .junta { stroke: #6d4426; stroke-width: .7; opacity: .7; }
.contagem .na-joao .pintas { fill: #7d4d2b; opacity: .7; }
.contagem .na-joao .palha { stroke: #e3c77a; stroke-width: .5; opacity: .8; fill: none; }
.contagem .na-joao .porta { fill: #2a170b; opacity: 0; transform-box: fill-box; transform-origin: 50% 100%; }
.contagem.fim .na-joao .porta { animation: na-joao-porta .4s ease-out .15s both; }
@keyframes na-joao-porta { from { opacity: 0; transform: scaleY(0); } to { opacity: 1; transform: none; } }
.contagem .na-joao .cauda { fill: #8f4f22; } .contagem .na-joao .dorso { fill: #b8692e; } .contagem .na-joao .peito { fill: #ecd7b4; }
.contagem .na-joao .asa-a { fill: #8f4f22; transform-origin: -2.5px -9.4px; }
.contagem .na-joao .cabeca { fill: #a35f2c; } .contagem .na-joao .garganta { fill: #f1e3c9; } .contagem .na-joao .bico { fill: #3a2f28; }
.contagem .na-joao .sobrancelha { fill: none; stroke: #e9d2ad; stroke-width: .6; }
.contagem .na-joao .lama { fill: #6d4222; }
.contagem .na-joao .ave.a { animation: na-joao-voa 1s ease-in-out var(--f, 0s) infinite; }
.contagem .na-joao .ave.a .pose { animation: na-joao-pose 1s linear var(--f, 0s) infinite; }
.contagem .na-joao .ave.a .asa-a { animation: na-joao-asa 1s linear var(--f, 0s) infinite; }
.contagem .na-joao .ave.a .lama { animation: na-joao-lama 1s linear var(--f, 0s) infinite; }
@keyframes na-joao-voa { 0%, 8% { transform: translate(0, 0); } 22% { transform: translate(calc(var(--hx) * .5), calc(var(--hy) * .5 - 16px)); }
  34%, 52% { transform: translate(var(--hx), var(--hy)); } 68% { transform: translate(calc(var(--hx) * .5), calc(var(--hy) * .5 - 14px)); } 84%, 100% { transform: translate(0, 0); } }
@keyframes na-joao-pose { 0%, 34% { transform: none; } 39% { transform: rotate(-22deg); } 43% { transform: none; } 47% { transform: rotate(-18deg); } 51%, 53% { transform: none; }
  54%, 83% { transform: scaleX(-1); } 84%, 100% { transform: none; } }
${KF_ASA_JOAO}
@keyframes na-joao-lama { 0%, 40% { opacity: 1; } 41%, 100% { opacity: 0; } }
.contagem .na-joao svg[data-s="0"] .ave.a { animation: none; transform: translate(-45.2px, -46.3px); }
.contagem .na-joao svg[data-s="0"] .lama { display: none; }
.contagem .na-joao .ave.b { opacity: 0; }
.contagem.fim .na-joao .ave.b { animation: na-joao-chega .55s ease-out .1s both; }
@keyframes na-joao-chega { from { opacity: 0; transform: translate(60px, -26px); } 25% { opacity: 1; } to { opacity: 1; transform: none; } }
.contagem.fim .na-joao .ave .pose { animation: na-joao-canta .26s ease-in-out .5s infinite alternate; }
.contagem.fim .na-joao .ave.b .pose { animation-delay: .63s; }
@keyframes na-joao-canta { from { transform: rotate(0); } to { transform: rotate(14deg); } }
.contagem.fim .na-joao .ave .asa-a { animation: na-joao-bate .1s linear .5s infinite alternate; }
@keyframes na-joao-bate { from { transform: rotate(0); } to { transform: rotate(-40deg); } }
.contagem .na-joao .nota { fill: #fff; stroke: #fff; stroke-width: .8; opacity: 0; }
.contagem.fim .na-joao .nota { animation: na-joao-nota 1.3s ease-out calc(.5s + var(--d)) both; }
@keyframes na-joao-nota { from { opacity: 0; transform: translate(0, 0); } 20% { opacity: 1; } to { opacity: 0; transform: translate(var(--dx), -20px); } }
.contagem .na-joao .grito { font-size: 11px; }

/* 3. Tartarugas-marinhas */
.contagem .na-tar .num { font-size: 34px; filter: drop-shadow(0 0 3px #9fc4ff); }
.contagem .na-tar .brilho path { stroke: #fff6d0; stroke-width: .8; stroke-linecap: round; animation: na-tar-cintila 1.6s ease-in-out var(--d) infinite alternate; }
@keyframes na-tar-cintila { from { opacity: .9; } to { opacity: .15; } }
.contagem .na-tar .marola { fill: none; stroke: #9ab8e6; stroke-width: .5; opacity: .5; }
.contagem .na-tar .molhada { fill: none; stroke: #3e3a31; stroke-width: 7; opacity: .55; }
.contagem .na-tar .espuma { fill: none; stroke: #e9f1ff; stroke-width: 1.4; opacity: .7; animation: na-tar-vaivem 3.4s ease-in-out infinite alternate; }
@keyframes na-tar-vaivem { from { transform: translate(0, 0); opacity: .75; } to { transform: translate(-3px, 2.4px); opacity: .35; } }
.contagem .na-tar .filhote { animation: na-tar-anda ${CORRIDA}s linear var(--d) both; transition: opacity .3s .45s; }
@keyframes na-tar-anda { from { transform: translate(${NINHO[0]}px, ${NINHO[1] - 1}px); } to { transform: translate(var(--x1), var(--y1)); } }
.contagem .na-tar .sai { animation: na-tar-sai .45s cubic-bezier(.2, 1.4, .4, 1) var(--d) both; }
@keyframes na-tar-sai { from { opacity: 0; transform: translateY(3px) scale(.3); } to { opacity: 1; transform: none; } }
.contagem .na-tar .mergulho { animation: na-tar-mergulho .35s ease-in calc(var(--d) + ${CORRIDA - .05}s) both; }
@keyframes na-tar-mergulho { from { opacity: 1; } to { opacity: 0; transform: scale(.5); } }
.contagem .na-tar .casco { fill: #2e2921; stroke: #7d6d50; stroke-width: .5; }
.contagem .na-tar .placas { stroke: #5c513e; stroke-width: .35; fill: none; }
.contagem .na-tar .cabeca, .contagem .na-tar .nad { fill: #3a342a; }
.contagem .na-tar .nad { transform-origin: 2px 0; animation: na-tar-rema .32s ease-in-out infinite alternate; }
.contagem .na-tar .nad.t { transform-origin: -3px 0; }
.contagem .na-tar .nad.b { animation-delay: -.32s; }
@keyframes na-tar-rema { from { transform: rotate(-16deg); } to { transform: rotate(16deg); } }
.contagem .na-tar .respingo { fill: none; stroke: #e9f1ff; stroke-width: .7; transform-box: fill-box; transform-origin: center;
  animation: na-tar-resp .6s ease-out calc(var(--d) + ${CORRIDA - .1}s) both; }
@keyframes na-tar-resp { from { opacity: 0; } 15% { opacity: .9; transform: scale(.4); } to { opacity: 0; transform: scale(2.4); } }
.contagem.fim .na-tar .filhote { opacity: 0; }
.contagem .na-tar .onda-z { opacity: 0; transform: translate(70px, -24px); }
.contagem .na-tar .agua-z { fill: #9cc6ee; opacity: .26; }
.contagem .na-tar .espuma-z { fill: none; stroke: #f4f8ff; stroke-width: 2.6; stroke-linejoin: round; stroke-linecap: round; opacity: .85; filter: drop-shadow(0 0 1.2px #fff); }
.contagem.fim .na-tar .onda-z { animation: na-tar-onda 1.9s cubic-bezier(.3, .7, .4, 1) .05s both; }
@keyframes na-tar-onda { 0% { opacity: 1; transform: translate(70px, -24px); } 32% { opacity: 1; transform: translate(0, 0); }
  50% { opacity: .9; transform: translate(2px, -1px); } 100% { opacity: 0; transform: translate(56px, -19px); } }
.contagem .na-tar .nadador { opacity: 0; }
.contagem.fim .na-tar .nadador { animation: na-tar-nada 2.2s ease-out var(--d) both; }
@keyframes na-tar-nada { from { opacity: 0; transform: translate(-4px, 3px); } 25% { opacity: 1; } to { opacity: .9; transform: translate(8px, -3px); } }

/* 4. Baleia-jubarte */
.contagem .na-jub .raio { fill: #d9f3ff; opacity: .07; transform-origin: 100px ${SUP}px; animation: na-jub-raio 5s ease-in-out calc(var(--k) * -1.3s) infinite alternate; }
@keyframes na-jub-raio { from { transform: skewX(-4deg); opacity: .04; } to { transform: skewX(5deg); opacity: .1; } }
.contagem .na-jub .superficie path { fill: none; stroke: #d6f1ff; stroke-width: .9; opacity: .8; animation: na-jub-mar 2.4s linear infinite; }
@keyframes na-jub-mar { to { transform: translateX(12px); } }
.contagem .na-jub .regua { stroke: #a9d8f0; stroke-width: .6; fill: none; }
.contagem .na-jub .regua text { font: 700 5px var(--mono, monospace); fill: #a9d8f0; stroke: none; }
.contagem .na-jub .regua .un { font-size: 5.5px; }
.contagem .na-jub .indicador { fill: #FFD100; transition: transform .9s ease-in-out; }
.contagem .na-jub .num { font-size: 42px; filter: drop-shadow(0 0 3px #0b3a5e); }
.contagem .na-jub .leg { fill: #cdeeff; font-size: 7px; }
.contagem.fim .na-jub .leg { fill: #FFD100; }
.contagem .na-jub .baleia { transition: transform .95s ease-in-out; }
.contagem.fim .na-jub .baleia { animation: na-jub-salto 2.6s cubic-bezier(.35, .05, .5, 1) both; }
@keyframes na-jub-salto {
  0% { transform: translate(156px, 73px) rotate(-24deg) scale(.8); }
  25% { transform: translate(176px, 34px) rotate(-60deg) scale(.8); }
  45% { transform: translate(184px, 24px) rotate(-45deg) scale(.8); }
  70% { transform: translate(198px, 36px) rotate(-5deg) scale(.8); }
  100% { transform: translate(210px, 84px) rotate(35deg) scale(.8); } }
.contagem .na-jub .cauda-jub { transform-origin: -36px 0; animation: na-jub-cauda 1.3s ease-in-out infinite alternate; }
@keyframes na-jub-cauda { from { transform: rotate(-12deg); } to { transform: rotate(12deg); } }
.contagem .na-jub .anel { fill: none; stroke: #9fe0ff; stroke-width: 1; vector-effect: non-scaling-stroke;
  animation: na-jub-anel 1.8s ease-out calc(var(--k) * -.6s) infinite; }
.contagem.ultimos .na-jub .anel { animation-duration: 1.1s; animation-delay: calc(var(--k) * -.37s); stroke-width: 1.4; }
@keyframes na-jub-anel { from { transform: scale(1); opacity: .7; } to { transform: scale(7); opacity: 0; } }
.contagem.fim .na-jub .anel, .contagem.fim .na-jub .bolha { display: none; }
.contagem .na-jub .bolha { fill: none; stroke: #d6f1ff; stroke-width: .5; animation: na-jub-bolha 1.6s ease-in calc(var(--k) * -.4s) infinite; }
@keyframes na-jub-bolha { from { transform: translate(0, 0); opacity: .9; } to { transform: translate(2px, -16px); opacity: 0; } }
.contagem .na-jub .gota { fill: #e8f7ff; opacity: 0; }
.contagem.fim .na-jub .respingo-a .gota { animation: na-jub-gota var(--t) cubic-bezier(.2, .6, .5, 1) .45s both; }
.contagem.fim .na-jub .respingo-b .gota { animation: na-jub-gota var(--t) cubic-bezier(.2, .6, .5, 1) 2.15s both; }
@keyframes na-jub-gota { from { opacity: 1; transform: translate(0, 0); } 55% { opacity: 1; transform: translate(var(--dx), var(--dy)); }
  to { opacity: 0; transform: translate(calc(var(--dx) * 1.3), calc(var(--dy) * .2 + 6px)); } }

/* 5. Metamorfose */
.contagem .na-bor .galho { fill: none; stroke: #5b3a22; stroke-width: 5.5; stroke-linecap: round; }
.contagem .na-bor .galho.fino { stroke-width: 1.6; }
.contagem .na-bor .nervura { fill: none; stroke: #a9db74; stroke-width: .6; opacity: .7; }
.contagem .na-bor .mordida { opacity: 0; }
.contagem .na-bor .mordida.comida { animation: na-bor-morde .25s ease-out .45s both; }
@keyframes na-bor-morde { from { opacity: 0; } to { opacity: 1; } }
.contagem .na-bor .lagarta { transition: transform .5s ease-in-out, opacity .4s; }
.contagem .na-bor .seg { fill: #8b3a1f; stroke: #5a2210; stroke-width: .4; }
.contagem .na-bor .mancha { fill: #c8d64a; }
.contagem .na-bor .pelos { stroke: #e9c99a; stroke-width: .5; fill: none; }
.contagem .na-bor .cab { fill: #3b1a0e; }
.contagem .na-bor .mastiga { animation: na-bor-mastiga .18s ease-in-out infinite alternate; }
@keyframes na-bor-mastiga { from { transform: translate(0, 0); } to { transform: translate(1.2px, .6px) rotate(8deg); } }
.contagem .na-bor .jota, .contagem .na-bor .crisalida, .contagem .na-bor .borb { opacity: 0; transition: opacity .45s; }
.contagem .na-bor .jota path { fill: none; stroke: #8b3a1f; stroke-width: 6; stroke-linecap: round; }
.contagem .na-bor .fio { stroke: #ddd; stroke-width: .5; opacity: 0; }
.contagem .na-bor svg[data-s="4"] .lagarta, .contagem .na-bor svg[data-s="3"] .lagarta, .contagem .na-bor svg[data-s="2"] .lagarta,
.contagem .na-bor svg[data-s="1"] .lagarta, .contagem .na-bor svg[data-s="0"] .lagarta { opacity: 0; }
.contagem .na-bor svg[data-s="4"] .jota, .contagem .na-bor svg[data-s="4"] .fio { opacity: 1; }
.contagem .na-bor svg[data-s="3"] .crisalida, .contagem .na-bor svg[data-s="2"] .crisalida, .contagem .na-bor svg[data-s="1"] .crisalida { opacity: 1; }
.contagem .na-bor svg[data-s="0"] .crisalida { opacity: .45; }
.contagem .na-bor .casca { fill: #8fd06a; stroke: #4f8a35; stroke-width: .6; }
.contagem .na-bor svg[data-s="0"] .casca { fill: #d9e8c8; }
.contagem .na-bor .dentro { fill: #1d2f7a; opacity: 0; transition: opacity .6s; }
.contagem .na-bor svg[data-s="2"] .dentro { opacity: .35; }
.contagem .na-bor svg[data-s="1"] .dentro { opacity: .8; }
.contagem .na-bor svg[data-s="0"] .dentro { opacity: 0; }
.contagem .na-bor .crisalida { transform-origin: 150px 21px; }
.contagem.ultimos .na-bor .crisalida { animation: na-bor-mexe .5s ease-in-out infinite alternate; }
@keyframes na-bor-mexe { from { transform: rotate(-7deg); } to { transform: rotate(7deg); } }
.contagem .na-bor .sup, .contagem .na-bor .inf { stroke: #0b0b14; stroke-width: 2.2; stroke-linejoin: round; }
.contagem .na-bor .pintas-b { fill: #f4f4f2; }
.contagem.fim .na-bor .borb { opacity: 1; animation: na-bor-sobe 2.4s ease-out .6s both; }
.contagem.fim .na-bor .lado { animation: na-bor-abre .7s cubic-bezier(.3, 1.3, .5, 1) .1s both, na-bor-bate .34s ease-in-out .9s infinite alternate; }
@keyframes na-bor-abre { from { transform: scaleX(.08); } to { transform: scaleX(1); } }
@keyframes na-bor-bate { from { transform: scaleX(1); } to { transform: scaleX(.3); } }
@keyframes na-bor-sobe { from { transform: translate(0, 0); } to { transform: translate(-6px, -10px); } }
.contagem .na-bor .num { font-size: 40px; }
.contagem .na-bor .leg { font-size: 8px; fill: #c5ec8f; }
.contagem.fim .na-bor .leg { fill: #7fe0ff; }

/* 6. Flor-de-coco */
.contagem .na-fun .cicatriz { stroke: #3a2a1a; stroke-width: .7; fill: none; opacity: .8; }
.contagem .na-fun .palha { stroke: #1a1209; stroke-width: 1.2; fill: none; }
.contagem .na-fun .cogumelo { transform-origin: 0 8.5px; transform: scale(0); opacity: 0; }
.contagem .na-fun .cogumelo.aceso { transform: none; opacity: 1; filter: drop-shadow(0 0 2px #8cff6a) drop-shadow(0 0 6px #3fd94a); }
.contagem .na-fun .cogumelo.novo { animation: na-fun-brota .55s cubic-bezier(.2, 1.6, .4, 1) .1s both; }
@keyframes na-fun-brota { from { transform: scale(0); opacity: 1; } to { transform: none; opacity: 1; } }
.contagem .na-fun .pe { fill: #b6f59a; }
.contagem .na-fun .boca { fill: #f2ffe6; opacity: .65; }
.contagem .na-fun .lamelas { stroke: #4fbf3e; stroke-width: .5; fill: none; }
.contagem .na-fun .luz-chao { opacity: 0; transition: opacity .6s .2s; }
.contagem .na-fun svg[data-s="7"] .luz-chao[data-k="0"], .contagem .na-fun svg[data-s="6"] .luz-chao:is([data-k="0"], [data-k="1"]),
.contagem .na-fun svg[data-s="5"] .luz-chao:is([data-k="0"], [data-k="1"], [data-k="2"]),
.contagem .na-fun svg[data-s="4"] .luz-chao:not([data-k="4"], [data-k="5"], [data-k="6"]),
.contagem .na-fun svg[data-s="3"] .luz-chao:not([data-k="5"], [data-k="6"]), .contagem .na-fun svg[data-s="2"] .luz-chao:not([data-k="6"]),
.contagem .na-fun svg[data-s="1"] .luz-chao, .contagem .na-fun svg[data-s="0"] .luz-chao { opacity: 1; }
.contagem.ultimos .na-fun .cogumelo.aceso:not(.novo) { animation: na-fun-pulsa .5s ease-in-out infinite alternate; }
@keyframes na-fun-pulsa { from { filter: drop-shadow(0 0 2px #8cff6a) drop-shadow(0 0 5px #3fd94a); } to { filter: drop-shadow(0 0 3px #c8ff9a) drop-shadow(0 0 10px #5bff5a); } }
.contagem.fim .na-fun .cogumelo.aceso { animation: na-fun-explode 1.2s ease-out both; }
@keyframes na-fun-explode { 0% { filter: drop-shadow(0 0 3px #c8ff9a) drop-shadow(0 0 8px #5bff5a); } 25% { filter: drop-shadow(0 0 5px #f0ffd8) drop-shadow(0 0 18px #7dff6a); transform: scale(1.08); }
  100% { filter: drop-shadow(0 0 3px #c8ff9a) drop-shadow(0 0 10px #5bff5a); transform: none; } }
.contagem.fim .na-fun .luz-chao { animation: na-fun-clarao 1.2s ease-out both; }
@keyframes na-fun-clarao { 25% { opacity: 1; transform: scale(1.35); } to { opacity: 1; transform: none; } }
.contagem .na-fun .luz-chao { transform-box: fill-box; transform-origin: center; }
.contagem .na-fun .esporo { fill: #c8ff9a; opacity: 0; filter: drop-shadow(0 0 1px #8cff6a); }
.contagem.fim .na-fun .esporo { animation: na-fun-esporo var(--t) ease-out var(--d) both; }
@keyframes na-fun-esporo { from { opacity: 0; transform: translate(0, 0); } 15% { opacity: 1; } to { opacity: 0; transform: translate(var(--dx), var(--dy)); } }
.contagem .na-fun .num { font-size: 44px; fill: #dcffc8; filter: drop-shadow(0 0 2px #8cff6a) drop-shadow(0 0 6px #3fd94a); }
.contagem .na-fun .leg { font-size: 7px; fill: #a8f08a; }
.contagem .na-fun .leg.sci { font-style: italic; font-weight: 600; font-size: 5.6px; fill: #7fbf6a; }

/* 7. Escavação */
.contagem .na-fos .pedrinhas { fill: #3d2614; opacity: .45; }
.contagem .na-fos .grade { stroke: #f1e6c8; stroke-width: .5; opacity: .45; fill: none; }
.contagem .na-fos .osso { opacity: 0; filter: drop-shadow(0 .7px 0 #3b2614); }
.contagem .na-fos .osso.visto { opacity: 1; }
.contagem .na-fos .osso.agora { animation: na-fos-revela .8s ease-out .3s both; }
@keyframes na-fos-revela { from { opacity: 0; } 30% { opacity: .35; } to { opacity: 1; } }
.contagem .na-fos .massa, .contagem .na-fos .massa rect { fill: #efe4c6; }
.contagem .na-fos .tira { fill: none; stroke: #efe4c6; stroke-width: 1.4; stroke-linecap: round; }
.contagem .na-fos .tira.g { stroke-width: 4.6; } .contagem .na-fos .tira.m { stroke-width: 3; }
.contagem .na-fos .longe { opacity: .7; }
.contagem .na-fos .longe .tira { stroke: #cdbf9c; }
.contagem .na-fos .furo { fill: #6b4a2a; }
.contagem .na-fos .dentes { stroke: #fff8e6; stroke-width: .5; }
.contagem .na-fos .pincel { transition: transform .45s ease-in-out; }
.contagem .na-fos .varre { transform-origin: 0 -26px; animation: na-fos-varre .26s ease-in-out infinite alternate; }
@keyframes na-fos-varre { from { transform: rotate(-16deg); } to { transform: rotate(16deg); } }
.contagem.ultimos .na-fos .varre { animation-duration: .17s; }
.contagem.fim .na-fos .varre { animation: none; transform: rotate(60deg); }
.contagem .na-fos .po circle { fill: #d9b98a; animation: na-fos-po .6s ease-out calc(var(--k) * -.12s) infinite; }
@keyframes na-fos-po { from { opacity: .9; transform: translate(0, 0); } to { opacity: 0; transform: translate(calc(var(--k) * 2px - 4px), -7px); } }
.contagem.fim .na-fos .po { display: none; }
.contagem .na-fos .quadra { font: 800 4.6px var(--fonte, sans-serif); fill: #2a1d12; letter-spacing: .1em; }
.contagem .na-fos .num { font-size: 26px; fill: #2a1d12; }
.contagem .na-fos .bicho { fill: #8CC63F; stroke: #8CC63F; stroke-width: 8; stroke-linecap: round; opacity: 0; }
.contagem .na-fos .bicho ellipse { stroke: none; }
.contagem .na-fos .bicho path { fill: none; }
.contagem.fim .na-fos .bicho { animation: na-fos-bicho 1.4s ease-out .3s both; }
@keyframes na-fos-bicho { from { opacity: 0; filter: drop-shadow(0 0 0 #8CC63F); } 40% { opacity: .55; filter: drop-shadow(0 0 6px #b8ff6a); } to { opacity: .32; filter: drop-shadow(0 0 3px #8CC63F); } }
.contagem .na-fos .grito { font-size: 11px; }

/* 8. Fogo */
.contagem .na-fogo .pinturas { fill: #b5442a; opacity: .22; transition: opacity 1s .35s; }
.contagem .na-fogo .pinturas .traco { fill: none; stroke: #b5442a; stroke-width: 1.4; stroke-linecap: round; }
.contagem.fim .na-fogo .pinturas { opacity: .95; }
.contagem .na-fogo .num { font-size: 40px; fill: #d4683c; opacity: .9; }
.contagem.fim .na-fogo .num { fill: #ff9a5a; }
.contagem .na-fogo .luz { opacity: 0; transition: opacity .8s; }
.contagem .na-fogo svg[data-s="4"] .luz { opacity: .06; } .contagem .na-fogo svg[data-s="3"] .luz { opacity: .14; }
.contagem .na-fogo svg[data-s="2"] .luz { opacity: .22; } .contagem .na-fogo svg[data-s="1"] .luz { opacity: .3; }
.contagem.fim .na-fogo .luz { opacity: 1; animation: na-fogo-tremula .13s ease-in-out .5s infinite alternate; }
@keyframes na-fogo-tremula { from { opacity: .85; } to { opacity: 1; } }
.contagem .na-fogo .bate { transform-origin: 204px 150px; animation: na-fogo-bate 1s ease-out var(--f, 0s) infinite; }
@keyframes na-fogo-bate { 0% { transform: none; } 9% { transform: translate(-15px, 7px) rotate(-3deg); } 16% { transform: translate(-11px, 5px) rotate(-2deg); } 45%, 100% { transform: none; } }
.contagem .na-fogo .braco { transition: transform .6s ease-out; }
.contagem.fim .na-fogo .bate { animation: none; }
.contagem.fim .na-fogo .braco.esq { transform: translate(-14px, 10px); }
.contagem.fim .na-fogo .braco.dir { transform: translate(16px, 10px); }
.contagem .na-fogo .faisca { stroke: #ffd27a; stroke-width: 1; stroke-linecap: round; filter: drop-shadow(0 0 1px #ffb347);
  animation: na-fogo-faisca 1s ease-out var(--f, 0s) infinite; opacity: 0; }
@keyframes na-fogo-faisca { 0%, 8% { opacity: 0; transform: translate(0, 0); } 9% { opacity: 1; transform: translate(0, 0); }
  40% { opacity: .9; transform: translate(var(--dx), var(--dy)); } 60%, 100% { opacity: 0; transform: translate(var(--dx), calc(var(--dy) + var(--q))); } }
.contagem.fim .na-fogo .faiscas { display: none; }
.contagem .na-fogo .brasa { opacity: 0; transition: opacity .6s; transform-box: fill-box; transform-origin: center; }
.contagem .na-fogo svg[data-s="3"] .brasa { opacity: .45; } .contagem .na-fogo svg[data-s="2"] .brasa { opacity: .75; } .contagem .na-fogo svg[data-s="1"] .brasa { opacity: 1; }
.contagem.ultimos .na-fogo .brasa { animation: na-fogo-brasa .45s ease-in-out infinite alternate; }
@keyframes na-fogo-brasa { from { transform: scale(.8); } to { transform: scale(1.25); } }
.contagem.fim .na-fogo .brasa { opacity: 0; }
.contagem .na-fogo .fumaca { opacity: 0; transition: opacity .8s; }
.contagem .na-fogo svg[data-s="4"] .fumaca { opacity: .3; } .contagem .na-fogo svg[data-s="3"] .fumaca { opacity: .5; }
.contagem .na-fogo svg[data-s="2"] .fumaca { opacity: .65; } .contagem .na-fogo svg[data-s="1"] .fumaca { opacity: .8; }
.contagem .na-fogo .fumaca path { fill: none; stroke: #b9b2a8; stroke-width: 1.6; stroke-linecap: round; animation: na-fogo-fumo 2.1s ease-out var(--d) infinite; }
@keyframes na-fogo-fumo { from { opacity: .9; transform: translateY(0) scaleX(1); } to { opacity: 0; transform: translateY(-16px) scaleX(1.8); } }
.contagem .na-fogo .fogueira { transform: scale(0); transform-origin: 0 0; }
.contagem.fim .na-fogo .fogueira { animation: na-fogo-pega .5s cubic-bezier(.2, 1.5, .4, 1) .15s both; filter: drop-shadow(0 0 4px #ff9a2a); }
@keyframes na-fogo-pega { from { transform: scale(0); } to { transform: scale(1.25); } }
.contagem .na-fogo .ch { transform-origin: 0 0; animation: na-fogo-chama .16s ease-in-out infinite alternate; }
.contagem .na-fogo .ch.meio { animation-duration: .13s; animation-delay: -.05s; } .contagem .na-fogo .ch.miolo { animation-duration: .11s; }
@keyframes na-fogo-chama { from { transform: scale(.94, .9) skewX(-4deg); } to { transform: scale(1.04, 1.08) skewX(4deg); } }
.contagem .na-fogo .fora { fill: #f7941d; } .contagem .na-fogo .meio { fill: #ffc23d; } .contagem .na-fogo .miolo { fill: #fff3b0; }

/* 9. Desova dos corais */
.contagem .na-cor .raios-l path { fill: #bfe0ff; opacity: .05; animation: na-cor-raio 6s ease-in-out calc(var(--k) * -2s) infinite alternate; }
@keyframes na-cor-raio { from { opacity: .02; } to { opacity: .08; } }
.contagem .na-cor .plancton circle { fill: #cfe6ff; opacity: .5; animation: na-cor-plancton 6s ease-in-out var(--d) infinite alternate; }
@keyframes na-cor-plancton { from { transform: translate(0, 0); } to { transform: translate(5px, -4px); } }
.contagem .na-cor .peixe { fill: #5d7a92; opacity: .55; animation: na-cor-peixe var(--t) linear var(--d) infinite; }
@keyframes na-cor-peixe { to { transform: translateX(280px); } }
.contagem .na-cor .cerebro { fill: #6b5a72; } .contagem .na-cor .cerebro.b { fill: #7a6a52; } .contagem .na-cor .cerebro.c { fill: #5f6f62; }
.contagem .na-cor .sulco { fill: none; stroke: #3e3248; stroke-width: .7; opacity: .7; }
.contagem .na-cor .galhos { fill: none; stroke: #8a7a62; stroke-width: 3.4; stroke-linecap: round; stroke-linejoin: round; }
.contagem .na-cor .galhos.b { stroke: #7d6680; stroke-width: 2.8; }
.contagem .na-cor .mesa { fill: #6e7d5e; } .contagem .na-cor .mesa-pe { fill: #55624a; }
.contagem .na-cor .pilar { fill: #7c6d5c; }
.contagem .na-cor .pacotes circle { fill: #ff9ec0; transform-box: fill-box; transform-origin: center; transform: scale(0); }
.contagem .na-cor .colonia.pronta .pacotes circle { transform: none; filter: drop-shadow(0 0 1.2px #ff7aa8); }
.contagem .na-cor .colonia.nova .pacotes circle { animation: na-cor-aparece .5s cubic-bezier(.2, 1.6, .4, 1) both; }
.contagem .na-cor .colonia.nova .pacotes circle:nth-child(odd) { animation-delay: .1s; }
.contagem .na-cor .colonia.nova .pacotes circle:nth-child(3n) { animation-delay: .2s; }
@keyframes na-cor-aparece { from { transform: scale(0); } to { transform: none; } }
.contagem.ultimos .na-cor .colonia.pronta:not(.nova) .pacotes circle { animation: na-cor-pulsa .4s ease-in-out infinite alternate; }
@keyframes na-cor-pulsa { from { transform: scale(.85); } to { transform: scale(1.3); } }
.contagem.fim .na-cor .pacotes circle { animation: na-some .3s .1s both; }
.contagem .na-cor .ovulo { fill: #ffb0c8; opacity: 0; }
.contagem.fim .na-cor .ovulo { animation: na-cor-sobe var(--t) cubic-bezier(.25, .6, .45, 1) var(--d) both; }
@keyframes na-cor-sobe { from { opacity: 0; transform: translate(0, 0); } 8% { opacity: 1; } 70% { opacity: .9; }
  to { opacity: 0; transform: translate(var(--dx), var(--dy)); } }
.contagem .na-cor .num { font-size: 40px; filter: drop-shadow(0 0 4px #5b8fd0); }

/* 10. Geodo de ametista */
.contagem .na-geo .camada-g { fill: #0d0b12; transition: fill .9s ease-out .15s; }
.contagem .na-geo .faixa { fill: none; stroke: transparent; stroke-width: .6; transition: stroke .9s .3s; }
.contagem .na-geo .oco { fill: #0d0b12; }
.contagem .na-geo svg:is([data-s="6"], [data-s="5"], [data-s="4"], [data-s="3"], [data-s="2"], [data-s="1"], [data-s="0"]) .agata1 { fill: #6f7f99; }
.contagem .na-geo svg:is([data-s="5"], [data-s="4"], [data-s="3"], [data-s="2"], [data-s="1"], [data-s="0"]) .agata2 { fill: #d6dde8; }
.contagem .na-geo svg:is([data-s="4"], [data-s="3"], [data-s="2"], [data-s="1"], [data-s="0"]) .agata3 { fill: #93a6c2; }
.contagem .na-geo svg:is([data-s="6"], [data-s="5"], [data-s="4"], [data-s="3"], [data-s="2"], [data-s="1"], [data-s="0"]) .faixa[data-k="0"],
.contagem .na-geo svg:is([data-s="5"], [data-s="4"], [data-s="3"], [data-s="2"], [data-s="1"], [data-s="0"]) .faixa[data-k="1"],
.contagem .na-geo svg:is([data-s="4"], [data-s="3"], [data-s="2"], [data-s="1"], [data-s="0"]) .faixa[data-k="2"] { stroke: #ffffff66; }
.contagem .na-geo .cristal { transform-origin: 0 0; transform: scaleY(0); transition: transform .8s cubic-bezier(.3, 1.2, .5, 1) .1s; }
.contagem .na-geo svg[data-s="3"] .cristal { transform: scaleY(.38); } .contagem .na-geo svg[data-s="2"] .cristal { transform: scaleY(.68); }
.contagem .na-geo svg[data-s="1"] .cristal { transform: scaleY(.9); } .contagem .na-geo svg[data-s="0"] .cristal { transform: none; }
.contagem .na-geo .quartzo.d { fill: #a9a3b8; }
.contagem .na-geo .ametista.d { fill: #4a2178; }
.contagem .na-geo .roxo { opacity: 0; transition: opacity .9s .2s; }
.contagem .na-geo svg[data-s="3"] .roxo { opacity: .12; } .contagem .na-geo svg[data-s="2"] .roxo { opacity: .6; }
.contagem .na-geo svg[data-s="1"] .roxo { opacity: .88; } .contagem .na-geo svg[data-s="0"] .roxo { opacity: 1; }
.contagem .na-geo .reflexo { opacity: 0; }
.contagem.fim .na-geo .reflexo { animation: na-geo-luz 1.3s ease-in-out .2s both; }
@keyframes na-geo-luz { from { opacity: 1; transform: translateX(20px) skewX(-20deg); } to { opacity: 1; transform: translateX(240px) skewX(-20deg); } }
.contagem .na-geo .brilho-c { fill: #fff; opacity: 0; transform-box: fill-box; transform-origin: center; }
.contagem.fim .na-geo .brilho-c { animation: na-geo-brilho .7s ease-out var(--d) both; filter: drop-shadow(0 0 2px #e6ccff); }
@keyframes na-geo-brilho { from { opacity: 0; transform: scale(0) rotate(0); } 40% { opacity: 1; transform: scale(1.3) rotate(30deg); } to { opacity: 0; transform: scale(.4) rotate(60deg); } }
.contagem .na-geo .num { font-size: 32px; filter: drop-shadow(0 0 2px #000) drop-shadow(0 0 4px #000); }
.contagem .na-geo .leg { font-size: 7px; fill: #d9c6f5; }
.contagem.fim .na-geo .leg { fill: #FFD100; font-size: 9px; }

@media (prefers-reduced-motion: reduce) {
  .contagem .na *, .contagem .na *::before { animation-duration: .01s !important; animation-iteration-count: 1 !important; transition: none !important; }
}`;

window.NA = {
  FONTES, CSS,
  CENAS: [
    { nome: "Morcego", sub: "Mamíferos", ...morcego },
    { nome: "João-de-barro", sub: "Aves, Répteis e Anfíbios", ...joao },
    { nome: "Tartarugas-marinhas", sub: "Aves, Répteis e Anfíbios", ...tartarugas },
    { nome: "Baleia-jubarte", sub: "Vida Marinha", ...jubarte },
    { nome: "Metamorfose", sub: "Insetos e Invertebrados", ...borboleta },
    { nome: "Flor-de-coco", sub: "Plantas e Fungos", ...fungos },
    { nome: "Escavação", sub: "Dinossauros e Fósseis", ...fossil },
    { nome: "Fogo na caverna", sub: "Evolução Humana", ...fogo },
    { nome: "Desova dos corais", sub: "Ecossistemas e Ambientes Extremos", ...corais },
    { nome: "Geodo de ametista", sub: "Geologia e História da Terra", ...geodo },
  ],
};
})();
