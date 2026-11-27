// Cotidiano: nove cenas novas para a contagem da Arena (protótipo de 2026-11-26), no formato de arena-contagem.js:
// html(s, decorrido) monta a cena; depois(caixa, s) faz o que muda a cada segundo; texto(s), quando há, é o que vai no
// número. O estado sai sempre do segundo (s), para um celular que entra no meio ver a cena certa. As classes "ultimos"
// (3, 2, 1) e "fim" (0) ficam na caixa da contagem, como no app.
// Medidas em --u. No protótipo, --u vale 1.8cqmin (o palco é um contêiner); no app, 1.8vmin e "cqw" vira "vw".
// Os sons de cada cena estão em sons.js, na mesma ordem (no app, "Cotidiano|1" a "|9"; a 0 continua o despertador).
(() => {
const f1 = n => (Math.round(n * 10) / 10).toString();
const reinicia = el => { if (el) el.replaceWith(el.cloneNode(true)); };  // recomeça as animações de um elemento
function aleatorio(semente) {  // mulberry32, como em arena-contagem.js
  let a = semente >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const badge = `<span class="badge" style="background:#E8412C;color:#000">Cotidiano</span>`;
const rot = `<div class="rot">Próxima pergunta em</div>`;

// ---------------------------------------------------------------- 1. Micro-ondas
// A caneca gira no prato com a luz acesa e o visor conta 0:07; nos três últimos, o leite sobe e espuma. No zero, o visor
// pisca 0:00 e a porta abre.
const microondas = {
  html: s => `<div class="cena co co-mic">${badge}${rot}<svg viewBox="0 0 220 132" aria-hidden="true">
    <defs>
      <linearGradient id="co-mic-inox" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6e8ec"/><stop offset=".5" stop-color="#c2c6cd"/><stop offset="1" stop-color="#8b9099"/></linearGradient>
      <radialGradient id="co-mic-luz" cx="45%" cy="28%" r="85%"><stop offset="0" stop-color="#fff2c8"/><stop offset=".45" stop-color="#f0b24a"/><stop offset="1" stop-color="#5a3010"/></radialGradient>
      <pattern id="co-mic-furos" width="2.6" height="2.6" patternUnits="userSpaceOnUse"><path fill-rule="evenodd" fill="#000" fill-opacity=".5" d="M0 0H2.6V2.6H0Z M1.3 .4A.9 .9 0 1 0 1.301 .4Z"/></pattern>
      <linearGradient id="co-mic-some" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".2" stop-color="#fff"/></linearGradient>
      <mask id="co-mic-mascara" maskUnits="userSpaceOnUse" x="-40" y="-10" width="280" height="160"><rect x="-40" y="-10" width="270" height="160" fill="url(#co-mic-some)"/></mask>
      <clipPath id="co-mic-boca"><rect x="-22" y="14" width="118" height="98"/></clipPath>
    </defs>
    <g mask="url(#co-mic-mascara)">
      <rect x="-40" y="4" width="256" height="118" rx="8" fill="url(#co-mic-inox)"/>
      <g clip-path="url(#co-mic-boca)">
        <rect class="cavidade" x="-22" y="14" width="118" height="98"/>
        <rect class="luz" x="-22" y="14" width="118" height="98" fill="url(#co-mic-luz)"/>
        <ellipse class="prato" cx="36" cy="101" rx="46" ry="6.5"/>
        <g transform="translate(36 99)"><g class="caneca">
          <animateMotion dur="6s" repeatCount="indefinite" path="M21 0 A21 3.2 0 1 1 -21 0 A21 3.2 0 1 1 21 0"/>
          <path class="fumo" d="M-4 -27 q-3 -5 0 -10 q3 -5 0 -10"/><path class="fumo f2" d="M3 -27 q3 -5 0 -10 q-3 -5 0 -10"/>
          <path class="alca" d="M9.5 -18 q8 0 8 7 q0 7 -8 7"/>
          <path class="xicara" d="M-10.5 -23 H10.5 V-3.5 Q10.5 1 6 1 H-6 Q-10.5 1 -10.5 -3.5 Z"/>
          <ellipse class="leite" cx="0" cy="-23" rx="10.5" ry="2.4"/>
          <ellipse class="espuma" cx="0" cy="-23" rx="11" ry="3"/>
        </g></g>
      </g>
      <g class="porta">
        <path class="moldura" fill-rule="evenodd" d="M-40 10 H100 V116 H-40 Z M-18 22 H88 V104 H-18 Z"/>
        <rect x="-18" y="22" width="106" height="82" fill="url(#co-mic-furos)"/>
        <path class="reflexo" d="M22 22 H40 L2 104 H-16 Z"/>
        <rect class="puxador" x="91" y="36" width="4.5" height="54" rx="2.2"/>
      </g>
    </g>
    <rect class="painel" x="104" y="10" width="108" height="106" rx="3"/>
    <rect class="visor" x="110" y="16" width="96" height="42" rx="2"/>
    <text class="rotulo" x="114" y="23.5">COZINHAR · ALTA</text>
    <text class="visor-txt" x="179" y="50" text-anchor="end">0:0</text>
    <text class="num" x="189" y="50" text-anchor="middle">${s}</text>
    ${[["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["PARAR", "0", "INICIAR"]].map((linha, r) => linha.map((t, c) =>
      `<rect class="tecla" x="${112 + c * 32}" y="${66 + r * 12}" width="28" height="9" rx="1.6"/><text class="tecla-txt${t === "INICIAR" ? " verde" : t === "PARAR" ? " verm" : ""}" x="${126 + c * 32}" y="${72.4 + r * 12}">${t}</text>`).join("")).join("")}
  </svg></div>`,
  depois: (c, s) => { if (s === 0) c.querySelector("svg")?.pauseAnimations?.(); },
};

// ---------------------------------------------------------------- 2. Elevador
// O indicador de andar desce de 7 a 1, em matriz de pontos, com a seta rolando; nos três últimos, a lanterna do andar
// pisca. No zero, T de térreo, as portas abrem e a luz da cabine cai no chão.
const MATRIZ = {
  0: [".###.", "#...#", "#..##", "#.#.#", "##..#", "#...#", ".###."], 1: ["..#..", ".##..", "..#..", "..#..", "..#..", "..#..", ".###."],
  2: [".###.", "#...#", "....#", "...#.", "..#..", ".#...", "#####"], 3: ["#####", "...#.", "..#..", "...#.", "....#", "#...#", ".###."],
  4: ["...#.", "..##.", ".#.#.", "#..#.", "#####", "...#.", "...#."], 5: ["#####", "#....", "####.", "....#", "....#", "#...#", ".###."],
  6: ["..##.", ".#...", "#....", "####.", "#...#", "#...#", ".###."], 7: ["#####", "....#", "...#.", "..#..", ".#...", ".#...", ".#..."],
  T: ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "..#.."],
};
const SETA = ["..#..", "..#..", "#.#.#", ".###.", "..#.."];
const pontos = (linhas, x0, y0, p, r, todos = false) => linhas.flatMap((l, y) => [...l].map((ch, x) =>
  ch === "#" || todos ? `<circle cx="${f1(x0 + x * p)}" cy="${f1(y0 + y * p)}" r="${r}"/>` : "")).join("");
const andar = s => pontos(MATRIZ[s || "T"], 104, 17, 5.6, 2.1);
const elevador = {
  texto: s => s || "T",
  html: s => `<div class="cena co co-ele">${badge}${rot}<svg viewBox="0 0 200 158" aria-hidden="true">
    <defs>
      <linearGradient id="co-ele-aco" x1="0" x2="1"><stop offset="0" stop-color="#8d939c"/><stop offset=".35" stop-color="#c9ced6"/><stop offset=".6" stop-color="#a3a9b2"/><stop offset="1" stop-color="#7c828b"/></linearGradient>
      <linearGradient id="co-ele-cab" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff3d6"/><stop offset=".7" stop-color="#d9b37a"/><stop offset="1" stop-color="#8a6a44"/></linearGradient>
      <linearGradient id="co-ele-parede" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#26282e"/><stop offset="1" stop-color="#16171b"/></linearGradient>
      <clipPath id="co-ele-vao"><rect x="52" y="70" width="96" height="76"/></clipPath>
      <clipPath id="co-ele-janela"><rect x="62" y="20" width="22" height="26"/></clipPath>
    </defs>
    <rect x="0" y="0" width="200" height="146" rx="5" fill="url(#co-ele-parede)"/>
    <rect class="chao" x="0" y="146" width="200" height="12"/>
    <polygon class="luz-chao" points="52,146 148,146 176,158 24,158"/>
    <rect class="moldura" x="48" y="6" width="104" height="54" rx="5"/><rect class="ind" x="53" y="11" width="94" height="44" rx="3"/>
    <g class="apagado">${pontos(MATRIZ.T, 104, 17, 5.6, 2.1, true)}${pontos(SETA, 64, 24, 4.4, 1.6, true)}</g>
    <g clip-path="url(#co-ele-janela)"><g class="seta">${pontos(SETA, 64, 24, 4.4, 1.6)}</g></g>
    <g class="num">${andar(s)}</g>
    <rect class="portal" x="46" y="66" width="108" height="80" rx="2"/>
    <g clip-path="url(#co-ele-vao)">
      <rect x="52" y="70" width="96" height="76" fill="url(#co-ele-cab)"/>
      <rect class="espelho" x="66" y="80" width="68" height="42" rx="1.5"/><line class="corrimao" x1="54" x2="146" y1="114" y2="114"/>
      <rect class="teto" x="52" y="70" width="96" height="3.5"/><rect class="piso" x="52" y="136" width="96" height="10"/>
      <g class="planta"><rect x="132" y="126" width="9" height="10" rx="1"/><path d="M136.5 126 q-6 -8 -2 -14 M136.5 126 q2 -10 6 -12 M136.5 126 q-1 -6 -6 -8"/></g>
      <g class="porta e"><rect x="52" y="70" width="48" height="76" fill="url(#co-ele-aco)"/>${[60, 70, 80, 90].map(x => `<line class="risca" x1="${x}" x2="${x}" y1="70" y2="146"/>`).join("")}</g>
      <g class="porta d"><rect x="100" y="70" width="48" height="76" fill="url(#co-ele-aco)"/>${[110, 120, 130, 140].map(x => `<line class="risca" x1="${x}" x2="${x}" y1="70" y2="146"/>`).join("")}</g>
    </g>
    <path class="lanterna" d="M158 70 H170 L164 79 Z"/>
    <rect class="botoeira" x="159" y="94" width="10" height="26" rx="2"/><circle class="botao" cx="164" cy="107" r="3.1"/>
  </svg></div>`,
  depois: (c, s) => { c.querySelector(".num").innerHTML = andar(s); },
};

// ---------------------------------------------------------------- 3. Semáforo de pedestres
// A rua vista da calçada, de trás de quem espera para atravessar. A faixa tem as listras no sentido dos carros, em
// perspectiva, e uma linha de retenção antes de cada lado; do outro lado da rua ficam o semáforo dos carros e o de
// pedestres (virado para quem espera), com o bonequinho vermelho e o relógio de sete segmentos. Passa um carro por
// segundo, alternando as faixas (a de cá vai para a direita, a de lá vem para a esquerda, mão dupla como aqui). No 3 o
// sinal dos carros fica amarelo e quem espera chega à beira da calçada; no 1 fica vermelho e o carro da vez freia antes da
// faixa. No zero, o bonequinho verde, o relógio verde e a pessoa atravessa, diminuindo com a distância.
const SEG = { 0: "abcdef", 1: "bc", 2: "abged", 3: "abgcd", 4: "fgbc", 5: "afgcd", 6: "afgedc", 7: "abc" };
const segmentos = (() => {
  const x0 = 186, y0 = 10, w = 18, h = 40, t = 4.4, g = 1.2;
  const hor = (cx, cy, L) => [[cx - L / 2, cy], [cx - L / 2 + t / 2, cy - t / 2], [cx + L / 2 - t / 2, cy - t / 2], [cx + L / 2, cy], [cx + L / 2 - t / 2, cy + t / 2], [cx - L / 2 + t / 2, cy + t / 2]];
  const ver = (cx, cy, L) => hor(cy, cx, L).map(([a, b]) => [b, a]);
  const P = { a: hor(x0 + w / 2, y0, w - 2 * g), g: hor(x0 + w / 2, y0 + h / 2, w - 2 * g), d: hor(x0 + w / 2, y0 + h, w - 2 * g),
              f: ver(x0, y0 + h / 4, h / 2 - 2 * g), b: ver(x0 + w, y0 + h / 4, h / 2 - 2 * g), e: ver(x0, y0 + 3 * h / 4, h / 2 - 2 * g), c: ver(x0 + w, y0 + 3 * h / 4, h / 2 - 2 * g) };
  return Object.fromEntries(Object.entries(P).map(([k, p]) => [k, `<polygon points="${p.map(([x, y]) => `${f1(x)},${f1(y)}`).join(" ")}"/>`]));
})();
const digito7 = s => [...SEG[s]].map(k => segmentos[k]).join("");
// O carro, virado para a direita: porta-malas curto atrás (x = 0), capô comprido na frente (x = 48), rodas em 11 e 38.
const CORES_CARRO = ["#E8412C", "#2F5BEA", "#FFD100", "#e9e9e6", "#00A84F", "#8E4FC9", "#00A3E0"];
const carro = cor => `<polygon class="facho" points="47.5,6.6 88,-1 88,16"/>
  <path fill="${cor}" d="M1.2 11.4 Q0 11.4 0 10 L.4 6.6 Q.9 4 3.8 3.6 L10.2 3 L15.6 -3.6 Q16.8 -5 18.8 -5 L28 -5 Q30 -5 31.4 -3.7 L36.8 2 L44.6 3.3 Q48 4 48 7.4 L48 10 Q48 11.4 46.6 11.4 Z"/>
  <path class="vidro" d="M12.6 2 L16.9 -3.5 L22.3 -3.5 L22.3 2 Z M23.7 2 L23.7 -3.5 L29.6 -3.5 L34.4 2 Z"/>
  <line class="friso" x1="10.6" x2="44" y1="5.6" y2="5.6"/><rect class="macaneta" x="25" y="4" width="2.6" height=".9" rx=".4"/>
  <circle class="roda" cx="11" cy="11.4" r="3.8"/><circle class="calota" cx="11" cy="11.4" r="1.5"/>
  <circle class="roda" cx="38" cy="11.4" r="3.8"/><circle class="calota" cx="38" cy="11.4" r="1.5"/>
  <rect class="lanterna" x=".2" y="5" width="1.6" height="2.4" rx=".4"/><rect class="farol" x="46.6" y="5.2" width="1.6" height="2.4" rx=".4"/>`;
// Quem passa no segundo s: vai (faixa de cá, para a direita), vem (faixa de lá, para a esquerda), para (freia antes da
// faixa, no 1) ou parado (no zero, o mesmo carro do 1).
const classeCarro = s => s === 0 ? "parado" : s === 1 ? "para" : s % 2 ? "vai" : "vem";
const corCarro = s => CORES_CARRO[Math.max(1, s) % 7];
const luzCarros = s => s >= 4 ? "verde" : s >= 2 ? "amarelo" : "vermelho";
// A faixa em perspectiva: as bordas se abrem para perto (de 58–122 no lado de lá a 44–136 no de cá).
const xe = y => 58 - (y - 70) * .35, xd = y => 122 + (y - 70) * .35;
const FAIXA = [[71.5, 74.5], [77.5, 81], [84.5, 88.8], [92.5, 97.6], [101.8, 108]].map(([a, b]) =>
  `<polygon class="zebra" points="${f1(xe(a))},${a} ${f1(xd(a))},${a} ${f1(xd(b))},${b} ${f1(xe(b))},${b}"/>`).join("");
const PREDIOS = (() => {
  const r = aleatorio(7); let x = -2, h = "";
  while (x < 222) {
    const w = 14 + Math.floor(r() * 12), alt = 22 + Math.floor(r() * 34), topo = 62 - alt;
    h += `<rect class="predio" x="${x}" y="${topo}" width="${w}" height="${alt}"/>`;
    for (let yy = topo + 4; yy < 58; yy += 6) for (let xx = x + 3; xx < x + w - 3; xx += 5)
      if (r() < .32) h += `<rect class="janela" x="${xx}" y="${yy}" width="2.4" height="3"/>`;
    x += w + 1;
  }
  return h;
})();
const BONECO_PARADO = `<circle cx="161" cy="15.5" r="3.1"/><path d="M156 19.5 H166 V29.5 H164.2 V37 H161.8 V30 H160.2 V37 H157.8 V29.5 H156 Z"/>`;
const BONECO_ANDA = [
  `<circle cx="162" cy="47" r="3.1"/><path d="M160 51 L164 51 L166 58 L170 61 L169 62.5 L164.6 60 L164 57 L163 62 L166 68 L164 69 L160.4 63 L158 69 L155.6 68.4 L158.6 61 L159.4 55 L156.6 58.5 L155 57.6 Z"/>`,
  `<circle cx="161" cy="47" r="3.1"/><path d="M159 51 L163 51 L164.6 57 L166.6 60 L165.2 61 L162.8 58.4 L163.4 62.5 L163.6 69 L161 69 L160.8 63 L159.6 69 L157 69 L158.4 61.4 L158.6 55 L156.2 58.6 L154.8 57.8 Z"/>`,
];
// Quem atravessa, de costas, de mochila (os pés em 0, 0; uns 29 de altura).
const PEDESTRE = `<g class="corpo">
    <g class="perna e"><rect x="-3.4" y="-12.5" width="2.9" height="11.6" rx="1.2"/><ellipse class="sapato" cx="-2" cy="-.8" rx="2" ry="1.1"/></g>
    <g class="perna d"><rect x=".5" y="-12.5" width="2.9" height="11.6" rx="1.2"/><ellipse class="sapato" cx="2" cy="-.8" rx="2" ry="1.1"/></g>
    <g class="braco e"><rect x="-6.4" y="-21.4" width="2.3" height="9.4" rx="1.1"/><circle class="mao" cx="-5.25" cy="-11.8" r="1.25"/></g>
    <g class="braco d"><rect x="4.1" y="-21.4" width="2.3" height="9.4" rx="1.1"/><circle class="mao" cx="5.25" cy="-11.8" r="1.25"/></g>
    <path class="camisa" d="M-4.7 -20.2 Q-4.7 -22.4 -2.6 -22.4 H2.6 Q4.7 -22.4 4.7 -20.2 V-11.6 H-4.7 Z"/>
    <path class="alca" d="M-2.5 -20.6 V-22.4 M2.5 -20.6 V-22.4"/><rect class="mochila" x="-3.3" y="-20.8" width="6.6" height="8" rx="1.7"/>
    <rect class="pescoco" x="-1" y="-24.4" width="2" height="2.4"/><circle class="cabelo" cx="0" cy="-26.6" r="3.2"/>
  </g>`;
const semaforo = {
  html: s => `<div class="cena co co-sem">${badge}${rot}<svg viewBox="0 0 220 140" aria-hidden="true">
    <defs><linearGradient id="co-sem-ceu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a0e1c"/><stop offset="1" stop-color="#1b2236"/></linearGradient>
      <clipPath id="co-sem-rua"><rect x="0" y="0" width="220" height="140" rx="5"/></clipPath></defs>
    <g clip-path="url(#co-sem-rua)">
      <rect width="220" height="64" fill="url(#co-sem-ceu)"/>${PREDIOS}
      <rect class="calcada" x="0" y="62" width="220" height="8"/><rect class="meio-fio" x="0" y="69" width="220" height="1.2"/>
      <rect class="asfalto" x="0" y="70" width="220" height="40"/>
      ${FAIXA}
      <path class="retencao" d="M${f1(xe(90.6) - 7)} 90.6 L${f1(xe(109.4) - 7)} 109.4 M${f1(xd(70.6) + 7)} 70.6 L${f1(xd(89.4) + 7)} 89.4"/>
      ${[-2, 18].map(x => `<rect class="faixa" x="${x}" y="89.4" width="12" height="1.4"/>`).join("")}${[150, 170, 190, 210].map(x => `<rect class="faixa" x="${x}" y="89.4" width="12" height="1.4"/>`).join("")}
      <g class="sinal-carros" data-luz="${luzCarros(s)}"><rect class="poste" x="23" y="44" width="2.6" height="24"/>
        <rect class="gabinete" x="17.6" y="25" width="13.4" height="22" rx="2.4"/>
        <circle class="lampada vermelho" cx="24.3" cy="30.4" r="2.7"/><circle class="lampada amarelo" cx="24.3" cy="36" r="2.7"/><circle class="lampada verde" cx="24.3" cy="41.6" r="2.7"/></g>
      <rect class="poste" x="176.5" y="57" width="3.6" height="11"/><rect class="base-poste" x="174.5" y="66.4" width="7.6" height="2.2" rx=".8"/>
      <g class="carro ${classeCarro(s)}">${carro(corCarro(s))}</g>
      <rect class="calcada perto" x="0" y="110" width="220" height="30"/><rect class="meio-fio" x="0" y="110" width="220" height="2.4"/>
      <path class="junta" d="M0 124 H220 M30 112 L22 140 M78 112 L74 140 M142 112 L146 140 M190 112 L198 140"/>
      <g class="pessoa">${PEDESTRE}</g>
    </g>
    <rect class="gabinete" x="146" y="4" width="66" height="54" rx="4"/>
    <rect class="celula" x="150" y="8" width="28" height="23" rx="2"/><rect class="celula" x="150" y="33" width="28" height="23" rx="2"/>
    <rect class="celula" x="182" y="8" width="26" height="46" rx="2"/>
    <g class="vermelho" transform="translate(164 19.6) scale(.78) translate(-161 -26.2)">${BONECO_PARADO}</g>
    <g class="verde" transform="translate(164 44.4) scale(.78) translate(-162 -57.5)"><g class="passo a">${BONECO_ANDA[0]}</g><g class="passo b">${BONECO_ANDA[1]}</g></g>
    <g class="seg-apagado">${digito7(0)}${segmentos.g}</g>
    <g class="num seg">${digito7(s)}</g>
  </svg></div>`,
  depois: (c, s) => {
    c.querySelector(".num").innerHTML = digito7(s);
    c.querySelector(".sinal-carros").dataset.luz = luzCarros(s);
    if (s > 0) { const g = c.querySelector(".carro"); g.setAttribute("class", `carro ${classeCarro(s)}`); g.innerHTML = carro(corCarro(s)); reinicia(g); }
  },
};

// ---------------------------------------------------------------- 4. Panela de pressão
// O pino balança e solta vapor, cada vez mais rápido; a válvula vermelha de segurança, como nas panelas daqui. Nos três
// últimos, a panela treme e o pino gira. No zero, o fogo apaga e sai a nuvem de vapor: feijão pronto.
const CHAMAS = Array.from({ length: 11 }, (_, i) => {
  const a = Math.PI - i * Math.PI / 10;
  return `<g transform="translate(${f1(100 + 40 * Math.cos(a))} ${f1(132 + 4.5 * Math.sin(a))})"><path class="chama-g" style="--k:${i}" d="M0 0 C-2.6 -2.2 -1.8 -7 0 -11 C1.8 -7 2.6 -2.2 0 0Z"/></g>`;
}).join("");
const panela = {
  html: s => `<div class="cena co co-pan">${badge}${rot}<svg viewBox="0 0 200 150" aria-hidden="true">
    <defs>
      <linearGradient id="co-pan-corpo" x1="0" x2="1"><stop offset="0" stop-color="#727881"/><stop offset=".3" stop-color="#e4e7eb"/><stop offset=".55" stop-color="#b6bbc3"/><stop offset="1" stop-color="#626870"/></linearGradient>
      <linearGradient id="co-pan-tampa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef0f3"/><stop offset="1" stop-color="#9aa0a8"/></linearGradient>
      <linearGradient id="co-pan-fogo" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#1f6fff"/><stop offset=".7" stop-color="#5cc8ff"/><stop offset="1" stop-color="#d6f3ff" stop-opacity=".6"/></linearGradient>
    </defs>
    <rect class="fogao" x="0" y="134" width="200" height="16" rx="2"/>
    <ellipse class="queimador" cx="100" cy="133" rx="44" ry="5"/>
    <g class="fogo">${CHAMAS}</g>
    <path class="trempe" d="M44 119 H156 M52 119 V134 M148 119 V134"/>
    <g class="panela">
      <rect class="cabo" x="22" y="68" width="22" height="7" rx="3"/>
      <rect class="cabo" x="154" y="63" width="40" height="7" rx="3"/>
      <path d="M42 60 H158 V110 Q158 118 150 118 H50 Q42 118 42 110 Z" fill="url(#co-pan-corpo)"/>
      <path d="M40 57 Q100 36 160 57 Z" fill="url(#co-pan-tampa)"/><rect class="aro" x="37" y="55.5" width="126" height="6" rx="2"/>
      <rect class="cabo" x="154" y="54" width="42" height="7" rx="3"/>
      <circle class="seguranca" cx="125" cy="48.5" r="2.6"/>
      <rect class="haste" x="97" y="40" width="6" height="8" rx="1"/>
      <g class="pino"><rect x="-3.6" y="-9" width="7.2" height="9" rx="1.6"/><circle cx="0" cy="-9.5" r="4.2"/></g>
      <text class="num" x="100" y="109" text-anchor="middle">${s}</text>
    </g>
    <g class="vapor">${Array.from({ length: 6 }, (_, k) => `<circle class="baforada" style="--k:${k}" cx="100" cy="28" r="3"/>`).join("")}</g>
    <g class="nuvem">${[[100, 30, 14], [80, 36, 11], [122, 35, 12], [90, 18, 11], [112, 16, 10], [68, 26, 8], [134, 24, 9]].map(([x, y, r], k) =>
      `<circle style="--k:${k}" cx="${x}" cy="${y}" r="${r}"/>`).join("")}</g>
    <text class="grito" x="6" y="14">Feijão pronto!</text>
  </svg></div>`,
};

// ---------------------------------------------------------------- 5. Caixa do supermercado
// Sete compras na esteira; uma passa pelo leitor a cada segundo (o bipe) e cai na sacola. O visor mostra quantas faltam e o
// total, em reais. No zero, o total final, o cupom saindo e a gaveta abrindo.
const PRODUTOS = [
  { preco: 4.99, svg: `<path d="M-7 -20 L0 -27 L7 -20 Z" fill="#d7dee9"/><rect x="-7" y="-20" width="14" height="20" fill="#f4f7fb"/><rect x="-7" y="-12" width="14" height="6" fill="#2F5BEA"/><rect x="-1" y="-26" width="2" height="2.6" fill="#2F5BEA"/>` },
  { preco: 7.49, svg: `<rect x="-11" y="-13" width="22" height="13" rx="5" fill="#e0ae6c"/><rect x="-11" y="-13" width="22" height="6" rx="3" fill="#fff" fill-opacity=".22"/><rect x="-5" y="-10" width="10" height="4.4" rx="1" fill="#E8412C"/><path d="M11 -7.5 l4 -3 v6 z" fill="#f4f4f2" fill-opacity=".7"/>` },
  { preco: 5.90, svg: `<g fill="#FFD100" stroke="#b38f00" stroke-width=".5"><path d="M-11 -9 Q0 2 11 -12 Q1 -4 -11 -12 Z"/><path d="M-11 -5 Q0 4 11 -8 Q1 0 -11 -8 Z"/><path d="M-11 -1 Q0 6 11 -4 Q1 3 -11 -4 Z"/></g><path d="M11 -12 l2 -2 M11 -8 l2 -2 M11 -4 l2 -2" stroke="#5a3b16" stroke-width="1.4"/>` },
  { preco: 22.90, svg: `<rect x="-8" y="-23" width="16" height="23" rx="1.6" fill="#f3f0e8"/><rect x="-8" y="-16" width="16" height="7" fill="#E8412C"/><text x="0" y="-3.4" font-size="4.2" text-anchor="middle" fill="#3a3a3a" font-weight="800">5 kg</text>` },
  { preco: 13.50, svg: `<rect x="-12" y="-7" width="24" height="7" rx="1" fill="#b9b2a5"/>${[-8, -2.7, 2.7, 8].map(x => `<circle cx="${x}" cy="-7" r="2.7" fill="#cfc8bb"/>`).join("")}` },
  { preco: 18.90, svg: `<rect x="-6.5" y="-19" width="13" height="19" rx="1" fill="#4a2a17"/><rect x="-6.5" y="-13" width="13" height="5" fill="#c9a14a"/><circle cx="0" cy="-4" r="1.6" fill="#c9a14a"/>` },
  { preco: 8.99, svg: `<path d="M-5 0 V-17 Q-5 -20 -2.5 -22 V-26 H2.5 V-22 Q5 -20 5 -17 V0 Z" fill="#00A84F" fill-opacity=".9"/><rect x="-3" y="-28" width="6" height="2.6" rx=".6" fill="#E8412C"/><rect x="-5" y="-14" width="10" height="5" fill="#FFD100"/>` },
];
const reais = v => "R$ " + v.toFixed(2).replace(".", ",");
const totalAte = n => PRODUTOS.slice(0, n).reduce((a, p) => a + p.preco, 0);
const SLOT = j => 126 - 18 * j;  // posição na esteira; o primeiro da fila fica em 126, junto do leitor
// Na contagem s, o item 7 − s passa pelo leitor; os de depois ficam na fila; os de antes já estão na sacola.
function estadoItem(k, s) {
  if (s === 0 || k < 7 - s) return { cls: "item ensacado", x: 202 };
  if (k === 7 - s) return { cls: "item passa", x: SLOT(0) };
  return { cls: "item", x: SLOT(k - (7 - s) - 1) };
}
const itens = s => PRODUTOS.map((p, k) => { const e = estadoItem(k, s);
  return `<g class="${e.cls}" data-k="${k}" style="transform: translate(${e.x}px, 90px)">${p.svg}</g>`; }).join("");
const supermercado = {
  html: s => `<div class="cena co co-sup">${badge}${rot}<svg viewBox="0 0 220 140" aria-hidden="true">
    <defs><clipPath id="co-sup-esteira"><rect x="0" y="90" width="142" height="9"/></clipPath>
      <clipPath id="co-sup-cupom"><rect x="186" y="40" width="26" height="61"/></clipPath></defs>
    <rect class="visor" x="128" y="2" width="88" height="58" rx="3"/>
    <text class="num" x="149" y="48" text-anchor="middle">${s}</text>
    <text class="mini" x="172" y="15">FALTAM</text><text class="mini" x="172" y="23">ITENS</text>
    <line class="divisa" x1="170" x2="212" y1="30" y2="30"/>
    <text class="mini" x="172" y="40">TOTAL</text><text class="preco" x="212" y="53" text-anchor="end">${reais(totalAte(7 - s))}</text>
    <rect class="haste" x="176" y="60" width="3" height="30"/>
    <path class="sacola" d="M188 100 L186 70 Q186 66 190 66 H212 Q216 66 216 70 L214 100 Z M192 66 Q192 56 201 56 Q210 56 210 66"/>
    <g class="itens">${itens(s)}</g>
    <rect class="esteira" x="0" y="90" width="142" height="9" rx="2"/>
    <g clip-path="url(#co-sup-esteira)"><g class="frisos">${Array.from({ length: 20 }, (_, k) => `<rect x="${k * 8 - 8}" y="90" width="1.2" height="9"/>`).join("")}</g></g>
    <rect class="vidro" x="146" y="90" width="36" height="8" rx="1.5"/>
    <path class="laser" d="M149 94 L179 91.5 M149 91.5 L179 96.5 M150 96 L178 93"/>
    <rect class="flash" x="146" y="82" width="36" height="16" rx="2"/>
    <rect class="balcao" x="0" y="99" width="220" height="41" rx="2"/><rect class="listra" x="0" y="104" width="220" height="3"/>
    <rect class="fenda" x="187" y="100" width="24" height="2.4"/>
    <g clip-path="url(#co-sup-cupom)"><g class="cupom"><rect x="190" y="101" width="18" height="40" fill="#f6f4ee"/>
      ${[0, 1, 2, 3, 4, 5].map(k => `<rect x="192" y="${106 + k * 5}" width="${[12, 9, 13, 8, 11, 14][k]}" height="1.2" fill="#8a8a8a"/>`).join("")}</g></g>
    <g class="gaveta"><rect x="150" y="122" width="62" height="14" rx="1.5"/><rect class="puxador" x="174" y="128" width="14" height="2.4" rx="1"/>
      ${[[158, 121], [164, 120.5], [170, 121], [196, 120.6], [202, 121]].map(([x, y]) => `<circle class="moeda" cx="${x}" cy="${y}" r="2.4"/>`).join("")}</g>
  </svg></div>`,
  depois: (c, s) => {
    c.querySelectorAll(".item").forEach(g => {
      const e = estadoItem(+g.dataset.k, s);
      g.setAttribute("class", e.cls); g.style.transform = `translate(${e.x}px, 90px)`;
      if (e.cls === "item passa") reinicia(g);
    });
    c.querySelector(".preco").textContent = reais(totalAte(7 - s));
    reinicia(c.querySelector(".flash"));
  },
};

// ---------------------------------------------------------------- 6. Máquina de escrever
// Uma expressão popular por segundo, com o número em vermelho (a fita de duas cores): pintar o sete, seis por meia dúzia…
// O carro anda a cada letra, a campainha toca e o carro volta; o papel sobe uma linha. No zero, "zero à esquerda".
const EXPR = { 7: ["pintar o ", "sete", ""], 6: ["", "seis", " por meia dúzia"], 5: ["o ", "quinto", " dos infernos"],
               4: ["ficar de ", "quatro", ""], 3: ["", "três", " é demais"], 2: ["", "dois", " dedos de prosa"],
               1: ["", "uma", " mão lava a outra"], 0: ["", "zero", " à esquerda"] };
const CW = 4.2, PT = 90, LH = 11, BASE = 83, T0 = .08, TIPO = .6;  // largura da letra, ponto de batida, entrelinha, linha da batida
const letras = s => { const [a, b, c] = EXPR[s]; return [...a].map(ch => [ch, 0]).concat([...b].map(ch => [ch, 1]), [...c].map(ch => [ch, 0])); };
// O carro: vai para a primeira letra, anda uma letra a cada batida, espera a campainha e volta (gerado para cada linha).
const CSS_CARRO = [7, 6, 5, 4, 3, 2, 1, 0].map(s => {
  const n = letras(s).length, dt = TIPO / n, pct = t => f1(t * 100) + "%", off = k => f1(n * CW / 2 - (k + .5) * CW);
  let k = `@keyframes co-esc-carro-${s} { 0% { transform: translateX(0); animation-timing-function: ease-out; } ${pct(T0 - .02)} { transform: translateX(${off(0)}px); animation-timing-function: steps(1, end); }`;
  for (let i = 1; i <= n; i++) k += ` ${pct(T0 + i * dt - .001)} { transform: translateX(${off(i)}px); animation-timing-function: steps(1, end); }`;
  return k + ` 76% { transform: translateX(${off(n)}px); animation-timing-function: ease-in-out; } 93%, 100% { transform: translateX(0); } }`;
}).join("\n");
const linha = (s, anima) => {
  const L = letras(s), n = L.length, x0 = PT - n * CW / 2, r = aleatorio(100 + s), dt = TIPO / n;
  return `<g class="linha-txt">${L.map(([ch, verm], k) => ch === " " ? "" :
    `<text x="${f1(x0 + k * CW)}" y="${BASE + (7 - s) * LH}" class="${verm ? "verm" : ""}" style="opacity:${(.8 + r() * .2).toFixed(2)}${anima ? `;animation-delay:${(T0 + k * dt).toFixed(3)}s` : ""}">${ch}</text>`).join("")}</g>`;
};
const TECLAS = ["QWERTYUIOP´", "ASDFGHJKLÇ", "ZXCVBNM,."];
const teclado = TECLAS.map((row, r) => [...row].map((ch, k) => {
  const x = 90 + (k - (row.length - 1) / 2) * 10.4, y = 116 + r * 11;
  return `<circle class="tecla" cx="${f1(x)}" cy="${y}" r="4"/><text class="letra" x="${f1(x)}" y="${y + 1.3}">${ch}</text>`;
}).join("")).join("");
const escrever = {
  html: s => {
    const n = letras(s).length;
    return `<div class="cena co co-esc">${badge}${rot}<div class="linha"><svg viewBox="0 0 180 150" aria-hidden="true">
    <defs><linearGradient id="co-esc-some" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".22" stop-color="#fff"/></linearGradient>
      <mask id="co-esc-janela" maskUnits="userSpaceOnUse" x="-80" y="0" width="340" height="96"><rect x="-80" y="0" width="340" height="96" fill="url(#co-esc-some)"/></mask>
      <linearGradient id="co-esc-corpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3c5248"/><stop offset="1" stop-color="#1e2a25"/></linearGradient></defs>
    <rect class="deck" x="30" y="95" width="120" height="10" rx="2"/>
    <g class="carro" style="animation-name: co-esc-carro-${s}">
      <g mask="url(#co-esc-janela)"><g class="papel" style="transform: translateY(${-(7 - s) * LH}px)">
        <rect class="folha" x="34" y="-40" width="112" height="240"/>
        ${[7, 6, 5, 4, 3, 2, 1, 0].filter(k => k > s).map(k => linha(k, false)).join("")}
        <g class="atual">${linha(s, true)}</g>
      </g></g>
      <rect class="rolo" x="24" y="86" width="132" height="12" rx="6"/><line class="brilho" x1="28" x2="152" y1="88.6" y2="88.6"/>
      <line class="prendedor" x1="30" x2="150" y1="87.2" y2="87.2"/><circle class="roldana" cx="68" cy="87.2" r="2.2"/><circle class="roldana" cx="112" cy="87.2" r="2.2"/>
      <circle class="botao-rolo" cx="17" cy="92" r="7"/><circle class="botao-rolo" cx="163" cy="92" r="7"/>
      <path class="alavanca" d="M26 84 L10 70 L3 70"/><circle class="ponta" cx="3" cy="70" r="2.3"/>
    </g>
    <rect class="fita" x="85" y="96" width="10" height="2.2" fill="#151515"/><rect class="fita" x="85" y="98.2" width="10" height="2.2" fill="#c8261b"/>
    <line class="haste" x1="${PT}" y1="111" x2="${PT}" y2="97" style="animation-duration:${(TIPO / n).toFixed(3)}s;animation-iteration-count:${n}"/>
    <path d="M10 150 L27 106 Q30 100 38 100 H142 Q150 100 153 106 L170 150 Z" fill="url(#co-esc-corpo)"/>
    <path class="cesta" d="M62 104 A28 7 0 0 0 118 104 Z"/>
    <circle class="carretel" cx="44" cy="101" r="5"/><circle class="carretel" cx="136" cy="101" r="5"/>
    ${teclado}<rect class="espaco" x="62" y="144.5" width="56" height="3.6" rx="1.8"/>
  </svg><div class="numbox"><div class="num">${s}</div></div></div></div>`;
  },
  depois: (c, s) => {
    c.querySelector(".papel").style.transform = `translateY(${-(7 - s) * LH}px)`;
    const atual = c.querySelector(".atual");
    atual.insertAdjacentHTML("beforebegin", atual.innerHTML.replace(/;animation-delay:[\d.]+s/g, ""));  // a linha de antes fica, já escrita
    atual.innerHTML = linha(s, true);
    const carro = c.querySelector(".carro"); carro.style.animationName = `co-esc-carro-${s}`; reinicia(carro);
    const n = letras(s).length, h = c.querySelector(".haste");
    h.style.animationDuration = `${(TIPO / n).toFixed(3)}s`; h.style.animationIterationCount = n; reinicia(h);
  },
};

// ---------------------------------------------------------------- 7. Festa junina
// Um cordão de bandeirinhas por segundo, saindo do mastro; a fogueira cresce e solta fagulhas. No zero, os rojões e o
// "Viva São João!", com as bandeirinhas balançando.
const CORES_FJ = ["#E8412C", "#FFD100", "#2F5BEA", "#00A84F", "#F7941D", "#E4007C", "#f4f4f2"];
const CORDOES = [[[-8, 4], [228, 4], 15], [[110, 12], [-8, 30], 9], [[110, 12], [228, 30], 9], [[110, 12], [-8, 50], 10], [[110, 12], [228, 50], 10],
                 [[110, 12], [-8, 70], 11], [[110, 12], [228, 70], 11]];
const cordoes = CORDOES.map(([[x0, y0], [x1, y1], sag], i) => {
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2 + sag, len = Math.hypot(x1 - x0, y1 - y0), n = Math.floor(len / 10);
  const B = t => [(1 - t) ** 2 * x0 + 2 * (1 - t) * t * cx + t * t * x1, (1 - t) ** 2 * y0 + 2 * (1 - t) * t * cy + t * t * y1];
  let h = `<path class="fio" d="M${x0} ${y0} Q${f1(cx)} ${f1(cy)} ${x1} ${y1}"/>`;
  for (let k = 1; k < n; k++) {
    const [x, y] = B(k / n);
    if (x < 1 || x > 219) continue;
    h += `<g transform="translate(${f1(x)} ${f1(y)})"><path class="bandeira" style="--d:${(k * .04).toFixed(2)}s;--b:${((k * 7 + i * 3) % 10 / 10).toFixed(1)}" fill="${CORES_FJ[(k + i * 2) % 7]}" d="M-3.2 0 H3.2 V7.4 L0 5.2 L-3.2 7.4 Z"/></g>`;
  }
  return `<g class="cordao" data-k="${i}">${h}</g>`;
});
const ESTRELAS_FJ = (() => { const r = aleatorio(31); return Array.from({ length: 26 }, () =>
  `<circle cx="${f1(r() * 220)}" cy="${f1(r() * 80)}" r="${f1(.35 + r() * .55)}"/>`).join(""); })();
const FOGO_FJ = { 7: .55, 6: .62, 5: .7, 4: .78, 3: .88, 2: .96, 1: 1.05, 0: 1.28 };
const rojao = (x, y, cor, d) => `<g transform="translate(${x} ${y})"><g class="rojao" style="--d:${d}s">${Array.from({ length: 14 }, (_, k) => {
  const a = k * Math.PI / 7, c = Math.cos(a), sn = Math.sin(a);
  return `<line x1="${f1(c * 3)}" y1="${f1(sn * 3)}" x2="${f1(c * 15)}" y2="${f1(sn * 15)}" stroke="${cor}"/><circle cx="${f1(c * 17)}" cy="${f1(sn * 17)}" r="1.2" fill="${cor}"/>`;
}).join("")}</g></g>`;
const marcarCordoes = (c, s) => c.querySelectorAll(".cordao").forEach(g => g.classList.toggle("vista", +g.dataset.k < 8 - s));
const junina = {
  html: s => `<div class="cena co co-fj">${badge}${rot}<svg viewBox="0 0 220 140" aria-hidden="true">
    <defs><linearGradient id="co-fj-ceu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#090d2a"/><stop offset="1" stop-color="#2c1446"/></linearGradient>
      <radialGradient id="co-fj-brasa"><stop offset="0" stop-color="#ff9a2e" stop-opacity=".55"/><stop offset="1" stop-color="#ff9a2e" stop-opacity="0"/></radialGradient>
      <clipPath id="co-fj-quadro"><rect width="220" height="140" rx="5"/></clipPath></defs>
    <g clip-path="url(#co-fj-quadro)">
      <rect width="220" height="140" fill="url(#co-fj-ceu)"/><g class="estrelas">${ESTRELAS_FJ}</g>
      <rect class="chao" x="0" y="126" width="220" height="14"/>
      <rect class="mastro" x="108" y="10" width="4" height="120"/>
      ${cordoes.map((h, i) => i < 8 - s ? h.replace('class="cordao"', 'class="cordao vista"') : h).join("")}
      <g class="fogos">${rojao(46, 30, "#FFD100", .8)}${rojao(176, 22, "#ff6b5a", .95)}${rojao(140, 50, "#7fd3ff", 1.1)}${rojao(70, 56, "#f4f4f2", 1.25)}</g>
      <ellipse cx="60" cy="122" rx="40" ry="26" fill="url(#co-fj-brasa)"/>
      <g class="fagulhas">${Array.from({ length: 10 }, (_, k) => `<circle style="--k:${k};--x:${(k % 5 - 2) * 4}px" cx="60" cy="108" r=".9"/>`).join("")}</g>
      <g class="fogueira" style="transform: scale(${FOGO_FJ[s]})">
        <path class="chama c1" d="M60 132 C40 128 44 108 52 100 C52 108 56 110 58 104 C58 94 64 86 70 82 C68 92 76 98 76 108 C80 104 80 100 80 98 C88 110 82 130 60 132Z"/>
        <path class="chama c2" d="M60 132 C48 129 50 116 55 110 C56 115 59 116 60 110 C61 104 64 98 67 96 C66 104 72 108 71 116 C74 114 74 112 75 110 C78 120 72 131 60 132Z"/>
        <path class="chama c3" d="M60 132 C54 130 54 122 57 118 C58 121 60 122 61 118 C62 114 64 112 65 110 C65 116 68 119 67 123 C69 126 66 131 60 132Z"/>
      </g>
      <path class="lenha" d="M36 134 L76 120 M84 134 L44 120 M42 135 H80"/>
      <rect class="poste-placa" x="176" y="124" width="4" height="16"/>
      <rect class="placa" x="144" y="74" width="68" height="58" rx="2.5"/>
      <path class="veio" d="M148 84 q20 -3 30 0 t30 -1 M148 102 q18 2 32 -1 t28 1 M148 122 q22 -2 30 1 t30 -1"/>
      <circle class="prego" cx="149" cy="78.5" r="1.1"/><circle class="prego" cx="207" cy="78.5" r="1.1"/>
      <text class="titulo" x="178" y="87">ARRAIÁ</text>
      <text class="num" x="178" y="126" text-anchor="middle">${s}</text>
      <text class="grito" x="110" y="64" text-anchor="middle">VIVA SÃO JOÃO!</text>
    </g>
  </svg></div>`,
  depois: (c, s) => { marcarCordoes(c, s); c.querySelector(".fogueira").style.transform = `scale(${FOGO_FJ[s]})`; },
};

// ---------------------------------------------------------------- 8. Bolo de aniversário
// Uma vela acende por segundo enquanto toca o "Parabéns" (um compasso por segundo). No zero, o sopro: as velas apagam,
// sobe a fumaça e caem os confetes.
const VELAS = [[100, 89], [88, 78], [112, 78], [76, 89], [124, 89], [64, 80], [136, 80]];  // na ordem em que acendem
const CONFETE = (() => { const r = aleatorio(9), cores = ["#E8412C", "#FFD100", "#2F5BEA", "#00A84F", "#E4007C", "#00A3E0", "#f4f4f2"];
  return Array.from({ length: 34 }, (_, k) => { const a = -Math.PI / 2 + (r() - .5) * 2.6, v = 30 + r() * 55;
    return `<rect class="confete" style="--dx:${f1(Math.cos(a) * v)}px;--dy:${f1(Math.sin(a) * v)}px;--r:${Math.round(r() * 720 - 360)}deg;--d:${(r() * .12).toFixed(2)}s" x="-1.4" y="-.8" width="2.8" height="1.6" fill="${cores[k % 7]}"/>`; }).join(""); })();
const vela = ([x, y], k, acesa) => `<g class="vela${acesa ? " acesa" : ""}" data-k="${k}" transform="translate(${x} ${y})">
  <rect x="-2.2" y="-16" width="4.4" height="16" rx=".8" fill="url(#co-bolo-listra)"/><line class="pavio" x1="0" x2="0" y1="-16" y2="-18.6"/>
  <g class="chama"><circle class="halo" cy="-23" r="6.5"/><path class="fora" d="M0 -18.5 C-3 -21 -2.4 -26 0 -29.5 C2.4 -26 3 -21 0 -18.5Z"/><path class="dentro" d="M0 -18.8 C-1.5 -20.4 -1.2 -23 0 -25 C1.2 -23 1.5 -20.4 0 -18.8Z"/></g>
  <path class="fumaca" d="M0 -19 q-3 -5 0 -10 q3 -5 0 -10"/></g>`;
const bolo = {
  html: s => `<div class="cena co co-bolo">${badge}${rot}<svg viewBox="0 0 200 150" aria-hidden="true">
    <defs><pattern id="co-bolo-listra" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="4" height="4" fill="#fff8f0"/><rect width="1.7" height="4" fill="#E8412C"/></pattern>
      <linearGradient id="co-bolo-lado" x1="0" x2="1"><stop offset="0" stop-color="#3f2013"/><stop offset=".35" stop-color="#6e3b22"/><stop offset="1" stop-color="#3a1c10"/></linearGradient></defs>
    <g class="balao" style="--d:0s"><path class="cordinha" d="M24 52 q-3 14 2 28"/><ellipse cx="24" cy="38" rx="11" ry="13" fill="#E8412C"/><ellipse cx="20" cy="33" rx="3" ry="4" fill="#fff" opacity=".35"/></g>
    <g class="balao" style="--d:-1.1s"><path class="cordinha" d="M178 46 q4 14 -1 30"/><ellipse cx="178" cy="33" rx="10" ry="12" fill="#FFD100"/><ellipse cx="174.5" cy="28.5" rx="2.6" ry="3.6" fill="#fff" opacity=".35"/></g>
    <g class="balao" style="--d:-2s"><path class="cordinha" d="M192 70 q3 12 -2 22"/><ellipse cx="192" cy="60" rx="7.5" ry="9" fill="#2F5BEA"/></g>
    <ellipse class="prato" cx="100" cy="131" rx="80" ry="8.5"/>
    <path d="M36 80 V122 Q100 138 164 122 V80 Z" fill="url(#co-bolo-lado)"/>
    <ellipse class="cobertura" cx="100" cy="80" rx="64" ry="12"/>
    <path class="cobertura" d="M36 80 Q36 94 42 92 Q46 90 47 84 Q50 96 56 95 Q61 94 60 86 Q66 100 73 97 Q78 95 77 87 Q83 100 90 98 Q95 96 94 88 Q100 101 107 98 Q112 96 111 88 Q117 100 124 97 Q129 95 128 87 Q134 98 140 95 Q145 93 144 85 Q149 95 155 93 Q160 91 158 84 Q162 90 164 88 V80 Z"/>
    ${Array.from({ length: 22 }, (_, k) => `<circle class="perola" cx="${f1(40 + k * 5.7)}" cy="${f1(122 + 6.5 * Math.sin(Math.PI * k / 21))}" r="2.1"/>`).join("")}
    ${(() => { const r = aleatorio(4), c = ["#FFD100", "#00A3E0", "#f4f4f2", "#00A84F"]; return Array.from({ length: 26 }, (_, k) => {
      const a = r() * Math.PI * 2, d = Math.sqrt(r()); return `<rect x="${f1(100 + Math.cos(a) * 56 * d)}" y="${f1(80 + Math.sin(a) * 9 * d)}" width="2.4" height=".9" rx=".4" fill="${c[k % 4]}" transform="rotate(${Math.round(r() * 180)} ${f1(100 + Math.cos(a) * 56 * d)} ${f1(80 + Math.sin(a) * 9 * d)})"/>`; }).join(""); })()}
    ${VELAS.map((p, k) => [p, k]).sort((a, b) => a[0][1] - b[0][1]).map(([p, k]) => vela(p, k, s > 0 && k < 8 - s)).join("")}
    <text class="num" x="100" y="121" text-anchor="middle">${s}</text>
    <g transform="translate(100 74)">${CONFETE}</g>
    <text class="grito" x="100" y="20" text-anchor="middle">PARABÉNS!</text>
  </svg></div>`,
  depois: (c, s) => c.querySelectorAll(".vela").forEach(v => {
    const acesa = s > 0 && +v.dataset.k < 8 - s;
    if (acesa && !v.classList.contains("acesa")) { v.classList.add("acesa", "nova"); setTimeout(() => v.classList.remove("nova"), 600); }
    else if (!acesa) v.classList.remove("acesa");
  }),
};

// ---------------------------------------------------------------- 9. Máquina de costura
// A agulha costura um pano de chita; o volante gira e a costura sai da agulha para a esquerda. Nos três últimos, o pé
// afunda no pedal: tudo mais rápido. No zero, a máquina para e a tesoura corta a linha.
const FLORES_CHITA = (() => { const r = aleatorio(21), cores = ["#FFD100", "#f4f4f2", "#00A3E0", "#F7941D"]; let h = "";
  for (let x = 4; x < 260; x += 12) { const y = 104 + (x / 12 % 2 ? 4 : 0), c = cores[Math.floor(x / 12) % 4];
    h += `<g transform="translate(${x} ${y})"><path d="M-3 2 q-2 -1 -3 1 M3 -2 q2 1 3 -1" stroke="#00A84F" stroke-width="1.1" fill="none"/>${[0, 72, 144, 216, 288].map(a =>
      `<circle cx="${f1(1.7 * Math.cos(a * Math.PI / 180))}" cy="${f1(1.7 * Math.sin(a * Math.PI / 180))}" r="1.3" fill="${c}"/>`).join("")}<circle r=".9" fill="#5a1a10"/></g>`;
    if (r() < .8) h += `<circle cx="${x + 6}" cy="${y + (y > 106 ? -5 : 5)}" r=".7" fill="#FFD100"/>`; }
  return h; })();
const costura = {
  html: s => `<div class="cena co co-cos">${badge}${rot}<svg viewBox="0 0 220 140" aria-hidden="true">
    <defs><linearGradient id="co-cos-corpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#34343a"/><stop offset=".25" stop-color="#1b1b1f"/><stop offset="1" stop-color="#0e0e10"/></linearGradient>
      <clipPath id="co-cos-pano"><rect x="10" y="98" width="200" height="20"/></clipPath>
      <clipPath id="co-cos-feito"><rect x="10" y="98" width="46" height="20"/></clipPath></defs>
    <rect class="mesa" x="0" y="118" width="220" height="7" rx="1.5"/>
    <path class="linha-cos" d="M120 17 C108 16 64 14 46 30 L44 36 L56 46 L56 100"/>
    <path d="M40 30 Q40 26 46 26 H184 Q198 26 198 40 V104 H160 V58 H76 V96 Q76 100 72 100 H44 Q40 100 40 96 Z" fill="url(#co-cos-corpo)"/>
    <rect class="frente" x="40" y="34" width="12" height="50" rx="3"/>
    <path class="decalque" d="M86 46 q6 -12 15 -4 q6 6 13 -2 q7 -8 14 0 q6 6 13 -2 M100 34 q4 -4 9 0 M128 50 q4 4 9 0 M188 50 q-8 10 0 22 q8 12 0 26 M178 46 q-4 4 0 9"/>
    <circle class="decalque-p" cx="96" cy="50" r="1.4"/><circle class="decalque-p" cx="150" cy="40" r="1.4"/>
    <g class="carretel"><rect x="114" y="10" width="12" height="15" rx="1" fill="#E8412C"/><rect x="112" y="9" width="16" height="2.4" rx="1" fill="#c9a14a"/><rect x="112" y="24" width="16" height="2.4" rx="1" fill="#c9a14a"/></g>
    <g class="volante-base" transform="translate(200 52)"><circle r="17"/><g class="volante">${[0, 60, 120, 180, 240, 300].map(a => `<line x1="0" y1="0" x2="${f1(13 * Math.cos(a * Math.PI / 180))}" y2="${f1(13 * Math.sin(a * Math.PI / 180))}"/>`).join("")}<circle r="3"/></g></g>
    <rect class="base" x="14" y="104" width="192" height="14" rx="3"/><line class="filete" x1="18" x2="202" y1="108" y2="108"/>
    <rect class="chapa" x="40" y="102.4" width="30" height="2.6" rx=".8"/>
    <g clip-path="url(#co-cos-pano)"><g class="pano"><rect x="0" y="99" width="270" height="17" fill="#c8151e"/>${FLORES_CHITA}</g></g>
    <g clip-path="url(#co-cos-feito)"><g class="pano"><line class="pesponto" x1="0" x2="270" y1="102" y2="102"/></g></g>
    <path class="calcador" d="M50 99.6 H62 L63 101 H49 Z"/><rect class="barra" x="58.6" y="84" width="3" height="16"/>
    <g class="agulha"><rect x="53.6" y="78" width="4.8" height="16" rx="1"/><line x1="56" x2="56" y1="94" y2="103"/></g>
    <text class="num" x="118" y="96" text-anchor="middle">${s}</text>
    <g class="tesoura" transform="translate(26 96)"><g class="lamina a"><path d="M0 0 L22 -2.2 L22 -.6 Z"/><circle cx="-4.6" cy="2.4" r="3.4"/></g>
      <g class="lamina b"><path d="M0 0 L22 2.2 L22 .6 Z"/><circle cx="-4.6" cy="-2.4" r="3.4"/></g><circle class="eixo" r="1.1"/></g>
  </svg></div>`,
};

// As fontes das cenas (no app, entram em FONTES de arena-contagem.js).
const FONTES = "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&family=Pacifico&family=VT323&display=swap";

const CSS = `
/* ---- Cotidiano: as dez cenas (prefixo co-). */
.contagem .co svg { display: block; overflow: visible; width: calc(50 * var(--u)); max-width: 92cqw; height: auto; }
.contagem .co .num { font-weight: 900; fill: #fff; transform-box: fill-box; transform-origin: center; animation: ct-pulso 1s ease-out both; }
.contagem .co .grito { font: 900 14px var(--fonte, sans-serif); fill: #FFD100; letter-spacing: .03em; paint-order: stroke; stroke: #000; stroke-width: 3px;
                       stroke-linejoin: round; opacity: 0; }
.contagem.fim .co .grito { animation: co-grito .5s cubic-bezier(.2, 1.6, .4, 1) .15s both; transform-box: fill-box; transform-origin: center; }
@keyframes co-grito { from { opacity: 0; transform: scale(.3); } to { opacity: 1; transform: none; } }
@keyframes co-treme { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(-.7px, .3px); } 75% { transform: translate(.7px, -.3px); } }
@keyframes co-pisca { 0%, 49% { opacity: 1; } 50%, 100% { opacity: .15; } }

/* 1. Micro-ondas */
.contagem .co-mic .cavidade { fill: #1d1309; }
.contagem .co-mic .luz { transition: opacity .4s; }
.contagem .co-mic .prato { fill: #f3efe6; fill-opacity: .55; }
.contagem .co-mic .xicara { fill: #E8412C; } .contagem .co-mic .alca { fill: none; stroke: #E8412C; stroke-width: 3; }
.contagem .co-mic .leite { fill: #f4ead8; }
.contagem .co-mic .espuma { fill: #fffaf0; transform-box: fill-box; transform-origin: 50% 100%; transform: scale(.5, 0); transition: transform .6s; }
.contagem.ultimos .co-mic .espuma { animation: co-mic-ferve .3s ease-in-out infinite alternate; }
.contagem.fim .co-mic .espuma { animation: none; transform: scale(1.12, 2.4); }
@keyframes co-mic-ferve { from { transform: scale(.95, 1.2); } to { transform: scale(1.08, 2.1); } }
.contagem .co-mic .fumo { fill: none; stroke: #fff; stroke-width: 1.6; stroke-linecap: round; opacity: 0; animation: co-mic-fumo 1.6s ease-out infinite; }
.contagem .co-mic .fumo.f2 { animation-delay: -.8s; }
@keyframes co-mic-fumo { from { transform: translateY(4px); opacity: .45; } to { transform: translateY(-6px); opacity: 0; } }
.contagem.ultimos .co-mic .fumo, .contagem.fim .co-mic .fumo { animation-duration: .9s; stroke-width: 2.2; }
.contagem .co-mic .porta { transform-box: view-box; transform-origin: -40px 63px; transition: transform .55s cubic-bezier(.3, .8, .3, 1) .95s; }
.contagem.fim .co-mic .porta { transform: scaleX(.06); }
.contagem .co-mic .moldura { fill: #202227; } .contagem .co-mic .reflexo { fill: #fff; opacity: .07; }
.contagem .co-mic .puxador { fill: #d9dce1; }
.contagem .co-mic .painel { fill: #16181c; }
.contagem .co-mic .visor { fill: #06150d; stroke: #23302a; }
.contagem .co-mic .rotulo { font: 700 5px var(--mono, monospace); fill: #3DDC84; opacity: .75; letter-spacing: .06em; }
.contagem .co-mic .visor-txt, .contagem .co-mic .num { font-family: "VT323", ui-monospace, monospace; font-weight: 400; font-size: 42px; fill: #8dffb2;
                                                      filter: drop-shadow(0 0 2px #3DDC84); }
.contagem.fim .co-mic .visor-txt, .contagem.fim .co-mic .num { animation: co-pisca .5s steps(1) infinite; }
.contagem .co-mic .tecla { fill: #2a2d33; }
.contagem .co-mic .tecla-txt { font: 800 5.2px var(--fonte, sans-serif); fill: #A0A4AB; text-anchor: middle; }
.contagem .co-mic .tecla-txt.verde { fill: #3DDC84; font-size: 4.2px; } .contagem .co-mic .tecla-txt.verm { fill: #ff6b5a; font-size: 4.2px; }

/* 2. Elevador */
.contagem .co-ele .chao { fill: #2a2c31; }
.contagem .co-ele .luz-chao { fill: #ffe2a8; opacity: 0; transition: opacity .6s .3s; }
.contagem.fim .co-ele .luz-chao { opacity: .35; }
.contagem .co-ele .moldura, .contagem .co-ele .portal, .contagem .co-ele .botoeira { fill: #9aa0aa; }
.contagem .co-ele .ind { fill: #080707; }
.contagem .co-ele .apagado { fill: #2a0e0c; }
.contagem .co-ele .num, .contagem .co-ele .seta { fill: #ff4436; filter: drop-shadow(0 0 1.6px #ff2a1a); }
.contagem .co-ele .seta { animation: co-ele-seta .5s linear infinite; }
@keyframes co-ele-seta { from { transform: translateY(-13px); } to { transform: translateY(13px); } }
.contagem.fim .co-ele .seta { visibility: hidden; }
.contagem .co-ele .espelho { fill: #fff4dc; opacity: .45; } .contagem .co-ele .corrimao { stroke: #c9ced6; stroke-width: 2; }
.contagem .co-ele .teto { fill: #fffbea; } .contagem .co-ele .piso { fill: #7a6248; }
.contagem .co-ele .planta rect { fill: #5a3b22; } .contagem .co-ele .planta path { fill: none; stroke: #2f8a3e; stroke-width: 2.4; stroke-linecap: round; }
.contagem .co-ele .risca { stroke: #fff; stroke-opacity: .08; stroke-width: .6; }
.contagem .co-ele .porta { transition: transform .9s cubic-bezier(.45, 0, .25, 1) .25s; }
.contagem.fim .co-ele .porta.e { transform: translateX(-46px); } .contagem.fim .co-ele .porta.d { transform: translateX(46px); }
.contagem .co-ele .lanterna { fill: #3a2a10; }
.contagem.ultimos .co-ele .lanterna { fill: #FFB347; animation: co-pisca .5s steps(1) infinite; filter: drop-shadow(0 0 2px #FFB347); }
.contagem.fim .co-ele .lanterna { animation: none; }
.contagem .co-ele .botao { fill: #222; stroke: #FFB347; stroke-width: 1.4; filter: drop-shadow(0 0 1.5px #FFB347); }
.contagem.fim .co-ele .botao { stroke: #555; filter: none; }

/* 3. Semáforo de pedestres */
.contagem .co-sem .predio { fill: #0f131d; } .contagem .co-sem .janela { fill: #ffd77a; opacity: .55; }
.contagem .co-sem .calcada { fill: #2b2e35; } .contagem .co-sem .calcada.perto { fill: #32353c; } .contagem .co-sem .meio-fio { fill: #4a4e57; }
.contagem .co-sem .junta { fill: none; stroke: #282b31; stroke-width: .8; }
.contagem .co-sem .asfalto { fill: #141518; } .contagem .co-sem .zebra { fill: #dcdcd8; opacity: .82; }
.contagem .co-sem .retencao { fill: none; stroke: #dcdcd8; stroke-width: 1.8; opacity: .82; } .contagem .co-sem .faixa { fill: #FFD100; opacity: .6; }
.contagem .co-sem .vidro { fill: #9fb8d6; opacity: .55; } .contagem .co-sem .friso { stroke: #000; stroke-opacity: .25; stroke-width: .6; }
.contagem .co-sem .macaneta { fill: #000; opacity: .35; }
.contagem .co-sem .roda { fill: #0a0a0a; stroke: #3a3a3a; stroke-width: .8; } .contagem .co-sem .calota { fill: #8a8f99; }
.contagem .co-sem .farol { fill: #fff6c8; } .contagem .co-sem .lanterna { fill: #a3241a; } .contagem .co-sem .facho { fill: #fff2b0; opacity: .14; }
.contagem .co-sem .carro.vai { animation: co-sem-vai .95s linear both; }
.contagem .co-sem .carro.vem { animation: co-sem-vem .95s linear both; }
.contagem .co-sem .carro.para { animation: co-sem-para .95s cubic-bezier(.15, .7, .3, 1) both; }
.contagem .co-sem .carro.parado { transform: translate(-12px, 91px); }
.contagem .co-sem .carro.para .lanterna, .contagem .co-sem .carro.parado .lanterna { fill: #ff2a1a; filter: drop-shadow(0 0 1.6px #ff2a1a); }
@keyframes co-sem-vai { from { transform: translate(-90px, 91px); } to { transform: translate(240px, 91px); } }
@keyframes co-sem-vem { from { transform: translate(300px, 74.6px) scale(-.82, .82); } to { transform: translate(-20px, 74.6px) scale(-.82, .82); } }
@keyframes co-sem-para { from { transform: translate(-90px, 91px); } to { transform: translate(-12px, 91px); } }
.contagem .co-sem .poste { fill: #3a3d44; } .contagem .co-sem .base-poste { fill: #4a4e57; }
.contagem .co-sem .gabinete { fill: #0b0c0e; stroke: #3a3d44; stroke-width: 1.6; }
.contagem .co-sem .lampada { fill: #1c1c1e; }
.contagem .co-sem [data-luz="verde"] .lampada.verde { fill: #3DDC84; filter: drop-shadow(0 0 1.6px #3DDC84); }
.contagem .co-sem [data-luz="amarelo"] .lampada.amarelo { fill: #FFB000; filter: drop-shadow(0 0 1.6px #FFB000); }
.contagem .co-sem [data-luz="vermelho"] .lampada.vermelho { fill: #ff3b2f; filter: drop-shadow(0 0 1.6px #ff2a1a); }
.contagem .co-sem .celula { fill: #050505; }
.contagem .co-sem .vermelho { fill: #ff3b2f; filter: drop-shadow(0 0 2px #ff2a1a); }
.contagem.fim .co-sem .vermelho { fill: #3a1210; filter: none; }
.contagem .co-sem .verde { fill: #10291a; }
.contagem .co-sem .passo.b { display: none; }
.contagem.fim .co-sem .verde { fill: #3DDC84; filter: drop-shadow(0 0 2px #3DDC84); }
.contagem.fim .co-sem .passo.a { animation: co-sem-passo .5s steps(1) infinite; }
.contagem.fim .co-sem .passo.b { display: inline; animation: co-sem-passo .5s steps(1) infinite reverse; }
@keyframes co-sem-passo { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
.contagem .co-sem .seg-apagado { fill: #2a1008; }
.contagem .co-sem .seg { fill: #ff5a1f; filter: drop-shadow(0 0 2px #ff3a00); }
.contagem.fim .co-sem .seg { fill: #3DDC84; filter: drop-shadow(0 0 2px #3DDC84); }
/* Quem atravessa: espera na calçada balançando de leve; nos três últimos, dá dois passos até a beira; no zero, atravessa
   a faixa até a calçada de lá em 2,8 s (seis passadas), diminuindo com a distância. Vista de costas, a perna que sobe
   parece mais curta, e o braço do outro lado também. */
.contagem .co-sem .pessoa .perna rect { fill: #2b3a55; } .contagem .co-sem .pessoa .sapato { fill: #151515; }
.contagem .co-sem .pessoa .braco rect, .contagem .co-sem .pessoa .camisa { fill: #00A3E0; }
.contagem .co-sem .pessoa .mao, .contagem .co-sem .pessoa .pescoco { fill: #b97a4e; } .contagem .co-sem .pessoa .cabelo { fill: #2a1a10; }
.contagem .co-sem .pessoa .mochila { fill: #E8412C; } .contagem .co-sem .pessoa .alca { fill: none; stroke: #9e2a1a; stroke-width: .9; }
.contagem .co-sem .pessoa { transform: translate(90px, 133px) scale(1.2); transition: transform .9s ease-in-out; }
.contagem.ultimos .co-sem .pessoa { transform: translate(90px, 127px) scale(1.16); }
.contagem.fim .co-sem .pessoa { animation: co-sem-atravessa 2.8s cubic-bezier(.3, .45, .6, 1) .35s both; }
@keyframes co-sem-atravessa { from { transform: translate(90px, 127px) scale(1.16); } to { transform: translate(87px, 66.5px) scale(.66); } }
.contagem .co-sem .pessoa .corpo { transform-box: view-box; transform-origin: 0 0; animation: co-sem-espera 2.6s ease-in-out infinite alternate; }
@keyframes co-sem-espera { from { transform: rotate(-1.4deg); } to { transform: rotate(1.4deg); } }
.contagem.ultimos .co-sem .pessoa .corpo { animation: co-sem-sobe .225s ease-in-out 4 alternate; }
.contagem.fim .co-sem .pessoa .corpo { animation: co-sem-sobe-2 .25s ease-in-out .35s 12 alternate; }
@keyframes co-sem-sobe { from { transform: translateY(0); } to { transform: translateY(-.9px); } }
@keyframes co-sem-sobe-2 { from { transform: translateY(0); } to { transform: translateY(-.9px); } }
.contagem .co-sem .pessoa .perna { --k: .74; transform-box: view-box; transform-origin: 0 -12.5px; }
.contagem .co-sem .pessoa .braco { --k: .84; transform-box: view-box; }
.contagem .co-sem .pessoa .braco.e { transform-origin: -5.2px -21px; } .contagem .co-sem .pessoa .braco.d { transform-origin: 5.2px -21px; }
.contagem.ultimos .co-sem .pessoa .perna.e, .contagem.ultimos .co-sem .pessoa .braco.d { animation: co-sem-pe-1 .45s ease-in-out 2; }
.contagem.ultimos .co-sem .pessoa .perna.d, .contagem.ultimos .co-sem .pessoa .braco.e { animation: co-sem-pe-2 .45s ease-in-out 2; }
.contagem.fim .co-sem .pessoa .perna.e, .contagem.fim .co-sem .pessoa .braco.d { animation: co-sem-anda-1 .5s linear .35s 6 both; }
.contagem.fim .co-sem .pessoa .perna.d, .contagem.fim .co-sem .pessoa .braco.e { animation: co-sem-anda-2 .5s linear .35s 6 both; }
@keyframes co-sem-pe-1 { 0%, 50%, 100% { transform: scaleY(1); } 25% { transform: scaleY(var(--k)); } }
@keyframes co-sem-pe-2 { 0%, 50%, 100% { transform: scaleY(1); } 75% { transform: scaleY(var(--k)); } }
@keyframes co-sem-anda-1 { 0%, 50%, 100% { transform: scaleY(1); } 25% { transform: scaleY(var(--k)); } }
@keyframes co-sem-anda-2 { 0%, 50%, 100% { transform: scaleY(1); } 75% { transform: scaleY(var(--k)); } }

/* 4. Panela de pressão */
.contagem .co-pan .fogao { fill: #17181c; } .contagem .co-pan .queimador { fill: #34363c; }
.contagem .co-pan .trempe { fill: none; stroke: #2e3036; stroke-width: 3; stroke-linecap: round; }
.contagem .co-pan .chama-g { fill: url(#co-pan-fogo); transform-box: fill-box; transform-origin: 50% 100%;
                             animation: co-pan-chama .22s ease-in-out infinite alternate; animation-delay: calc(var(--k) * -.07s); }
@keyframes co-pan-chama { from { transform: scale(.85, .78); } to { transform: scale(1.05, 1.12); } }
.contagem .co-pan .fogo { transition: opacity .25s; }
.contagem.fim .co-pan .fogo { opacity: 0; }
.contagem .co-pan .cabo { fill: #1b1b1d; } .contagem .co-pan .aro { fill: #a7acb4; } .contagem .co-pan .haste { fill: #8e939c; }
.contagem .co-pan .seguranca { fill: #E8412C; }
.contagem .co-pan .pino { fill: #6f747d; transform-box: view-box; transform-origin: 0 0; transform: translate(100px, 40px);
                          animation: co-pan-pino .9s ease-in-out infinite alternate; }
@keyframes co-pan-pino { from { transform: translate(100px, 40px) rotate(-13deg); } to { transform: translate(100px, 40px) rotate(13deg); } }
.contagem.ultimos .co-pan .pino { animation-duration: .16s; }
.contagem.fim .co-pan .pino { animation: none; }
.contagem.ultimos .co-pan .panela { animation: co-treme .12s linear infinite; }
.contagem .co-pan .num { font-size: 52px; fill: #2b2f36; stroke: #f2f4f7; stroke-width: 1.1px; paint-order: stroke; }
.contagem .co-pan .baforada { --vel: 1.3s; fill: #e9ecf0; opacity: 0; animation: co-pan-vapor var(--vel) ease-out infinite; animation-delay: calc(var(--vel) * var(--k) / -6); }
.contagem.ultimos .co-pan .baforada { --vel: .55s; }
.contagem.fim .co-pan .baforada { animation: none; }
@keyframes co-pan-vapor { from { transform: translate(0, 0) scale(.6); opacity: .8; } to { transform: translate(-6px, -24px) scale(3.2); opacity: 0; } }
.contagem .co-pan .baforada { transform-box: fill-box; transform-origin: center; }
.contagem .co-pan .nuvem circle { fill: #eef0f3; opacity: 0; transform-box: fill-box; transform-origin: center; }
.contagem.fim .co-pan .nuvem circle { animation: co-pan-nuvem 1.4s ease-out both; animation-delay: calc(var(--k) * .05s); }
@keyframes co-pan-nuvem { 0% { transform: scale(.1) translateY(20px); opacity: .95; } 60% { opacity: .9; } 100% { transform: scale(1.12) translateY(-2px); opacity: .55; } }

/* 5. Caixa do supermercado */
.contagem .co-sup .visor { fill: #041217; stroke: #2a3d44; stroke-width: 1.5; }
.contagem .co-sup .num { font-family: "VT323", ui-monospace, monospace; font-weight: 400; font-size: 58px; fill: #7ff0ff; filter: drop-shadow(0 0 2px #00c8ff); }
.contagem .co-sup .mini { font: 700 6px var(--mono, monospace); fill: #7ff0ff; opacity: .7; letter-spacing: .08em; }
.contagem .co-sup .preco { font-family: "VT323", ui-monospace, monospace; font-size: 11px; fill: #7ff0ff; }
.contagem .co-sup .divisa { stroke: #7ff0ff; stroke-opacity: .25; }
.contagem .co-sup .haste { fill: #3a3d44; }
.contagem .co-sup .sacola { fill: #f4f4f2; fill-opacity: .16; stroke: #f4f4f2; stroke-opacity: .5; stroke-width: 1; }
.contagem .co-sup .esteira { fill: #141518; } .contagem .co-sup .frisos rect { fill: #2c2e33; }
.contagem .co-sup .frisos { animation: co-sup-esteira .45s linear infinite; }
@keyframes co-sup-esteira { to { transform: translateX(8px); } }
.contagem.fim .co-sup .frisos { animation: none; }
.contagem .co-sup .vidro { fill: #1b2a30; stroke: #3a4c54; }
.contagem .co-sup .laser { stroke: #ff2d3d; stroke-width: .7; opacity: .75; fill: none; }
.contagem .co-sup .flash { fill: #ff2d3d; opacity: 0; animation: co-sup-flash .3s ease-out .42s both; }
@keyframes co-sup-flash { from { opacity: .5; } to { opacity: 0; } }
.contagem.fim .co-sup .flash { animation: none; }
.contagem .co-sup .item { transition: transform .5s cubic-bezier(.3, .7, .3, 1); }
.contagem .co-sup .item.ensacado { opacity: 0; transition: none; }
.contagem .co-sup .item.passa { animation: co-sup-passa .95s ease-in-out both; transition: none; }
@keyframes co-sup-passa { 0% { transform: translate(126px, 90px); } 42%, 58% { transform: translate(164px, 90px); }
                          100% { transform: translate(202px, 82px) scale(.6); opacity: 0; } }
.contagem .co-sup .balcao { fill: #23262c; } .contagem .co-sup .listra { fill: #E8412C; } .contagem .co-sup .fenda { fill: #0b0b0c; }
.contagem .co-sup .cupom { transform: translateY(0); }
.contagem.fim .co-sup .cupom { animation: co-sup-cupom 1.1s steps(9) .25s both; }
@keyframes co-sup-cupom { from { transform: translateY(0); } to { transform: translateY(-38px); } }
.contagem .co-sup .gaveta rect { fill: #2f3238; } .contagem .co-sup .gaveta .puxador { fill: #6b6f78; }
.contagem .co-sup .moeda { fill: #FFD100; stroke: #b38f00; stroke-width: .5; opacity: 0; }
.contagem.fim .co-sup .gaveta { transform: translateY(4px); transition: transform .3s cubic-bezier(.2, 1.4, .4, 1) .7s; }
.contagem.fim .co-sup .moeda { opacity: 1; transition: opacity .1s .7s; }

/* 6. Máquina de escrever */
.contagem .co-esc .linha { display: flex; align-items: center; gap: calc(2.4 * var(--u)); }
.contagem .co-esc svg { width: calc(38 * var(--u)); max-width: 70cqw; }
.contagem .co-esc .numbox .num { font-family: "Courier Prime", "Courier New", monospace; font-weight: 700; font-size: calc(15 * var(--u)); color: #E8412C;
                                 line-height: .8; text-shadow: 0 0 calc(1.5 * var(--u)) #000; animation: ct-pulso 1s ease-out both; }
.contagem .co-esc .deck { fill: #26332d; }
.contagem .co-esc .carro { animation: .98s linear both; }
.contagem .co-esc .papel { transition: transform .16s ease-out; }
.contagem .co-esc .folha { fill: #f3ecd8; }
.contagem .co-esc text { font-family: "Courier Prime", "Courier New", monospace; font-weight: 700; font-size: 7px; fill: #1d1b18; }
.contagem .co-esc text.verm { fill: #c8261b; }
.contagem .co-esc .atual text { animation: co-esc-letra .04s ease-out both; }
@keyframes co-esc-letra { from { opacity: 0; } }
.contagem .co-esc .rolo { fill: #141414; } .contagem .co-esc .brilho { stroke: #4a4a4a; stroke-width: .8; }
.contagem .co-esc .prendedor { stroke: #c9ccd3; stroke-width: 1.2; } .contagem .co-esc .roldana { fill: #2b2b2b; stroke: #c9ccd3; stroke-width: .5; }
.contagem .co-esc .botao-rolo { fill: #222; stroke: #555; stroke-width: 1.2; }
.contagem .co-esc .alavanca { fill: none; stroke: #c9ccd3; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; } .contagem .co-esc .ponta { fill: #c9ccd3; }
.contagem .co-esc .haste { stroke: #9aa0aa; stroke-width: 1.4; stroke-linecap: round; opacity: 0; transform-box: view-box; transform-origin: 90px 111px;
                           animation: co-esc-haste .06s ease-out .08s both; }
@keyframes co-esc-haste { 0% { opacity: 0; transform: scaleY(.3); } 40% { opacity: 1; transform: scaleY(1); } 100% { opacity: 0; transform: scaleY(.3); } }
.contagem .co-esc .cesta { fill: #0d0f0e; } .contagem .co-esc .carretel { fill: #151515; stroke: #6b6f78; stroke-width: .8; }
.contagem .co-esc .tecla { fill: #efe9db; stroke: #151515; stroke-width: 1.1; }
.contagem .co-esc .letra { font: 800 3.4px var(--fonte, sans-serif); fill: #222; text-anchor: middle; }
.contagem .co-esc .espaco { fill: #d9d3c3; }
${CSS_CARRO}

/* 7. Festa junina */
.contagem .co-fj .estrelas { fill: #fff; opacity: .7; }
.contagem .co-fj .chao { fill: #1a120c; } .contagem .co-fj .mastro { fill: #6b4423; }
.contagem .co-fj .fio { fill: none; stroke: #e8dcc0; stroke-width: .5; opacity: .7; }
.contagem .co-fj .cordao { visibility: hidden; }
.contagem .co-fj .cordao.vista { visibility: visible; }
.contagem .co-fj .cordao.vista .bandeira { animation: co-fj-cai .45s cubic-bezier(.2, 1.5, .4, 1) var(--d) both, co-fj-balanca 1.4s ease-in-out calc(var(--b) * -1.4s) infinite alternate; }
.contagem .co-fj .bandeira { transform-box: fill-box; transform-origin: 50% 0; }
@keyframes co-fj-cai { from { opacity: 0; translate: 0 -6px; } to { opacity: 1; translate: 0 0; } }
@keyframes co-fj-balanca { from { rotate: -6deg; } to { rotate: 6deg; } }
.contagem.fim .co-fj .cordao.vista .bandeira { animation-duration: .45s, .35s; }
.contagem .co-fj .fogueira { transform-box: view-box; transform-origin: 60px 132px; transition: transform .6s cubic-bezier(.3, 1.4, .5, 1); }
.contagem .co-fj .chama { transform-box: fill-box; transform-origin: 50% 100%; animation: co-fj-chama .3s ease-in-out infinite alternate; }
.contagem .co-fj .c1 { fill: #E8412C; } .contagem .co-fj .c2 { fill: #F7941D; animation-delay: -.12s; } .contagem .co-fj .c3 { fill: #FFE28a; animation-delay: -.2s; }
@keyframes co-fj-chama { from { transform: scale(.94, .9) skewX(-2deg); } to { transform: scale(1.04, 1.08) skewX(2deg); } }
.contagem .co-fj .lenha { fill: none; stroke: #5a3018; stroke-width: 5; stroke-linecap: round; }
.contagem .co-fj .fagulhas circle { fill: #FFD100; opacity: 0; animation: co-fj-fagulha 1.3s ease-out infinite; animation-delay: calc(var(--k) * -.13s); }
.contagem.ultimos .co-fj .fagulhas circle, .contagem.fim .co-fj .fagulhas circle { animation-duration: .8s; }
@keyframes co-fj-fagulha { from { transform: translate(0, 0); opacity: 1; } to { transform: translate(var(--x), -46px); opacity: 0; } }
.contagem .co-fj .placa { fill: #c98a4b; stroke: #8a5526; stroke-width: 1.2; } .contagem .co-fj .poste-placa { fill: #6b4423; }
.contagem .co-fj .veio { fill: none; stroke: #a86c35; stroke-width: .7; opacity: .7; } .contagem .co-fj .prego { fill: #4a3320; }
.contagem .co-fj .titulo { font: 900 9px var(--fonte, sans-serif); fill: #3a1f0a; text-anchor: middle; letter-spacing: .14em; }
.contagem .co-fj .num { font-size: 46px; fill: #3a1f0a; }
.contagem .co-fj .grito { font-size: 15px; }
.contagem .co-fj .fogos { display: none; }
.contagem.fim .co-fj .fogos { display: inline; }
.contagem .co .rojao { stroke-width: 1.1; stroke-linecap: round; opacity: 0; transform-box: fill-box; transform-origin: center; }
.contagem.fim .co .rojao { animation: co-rojao 1.2s ease-out var(--d) both; }
@keyframes co-rojao { 0% { opacity: 1; scale: .1; } 60% { opacity: 1; } 100% { opacity: 0; scale: 1.15; } }

/* 8. Bolo de aniversário */
.contagem .co-bolo .cordinha { fill: none; stroke: #8b93a7; stroke-width: .7; }
.contagem .co-bolo .balao { transform-box: fill-box; transform-origin: 50% 100%; animation: co-bolo-balao 2.6s ease-in-out var(--d) infinite alternate; }
@keyframes co-bolo-balao { from { translate: 0 -2px; rotate: -2deg; } to { translate: 0 2px; rotate: 2deg; } }
.contagem .co-bolo .prato { fill: #e7e3da; }
.contagem .co-bolo .cobertura { fill: #f7a8c4; } .contagem .co-bolo .perola { fill: #fff3f8; }
.contagem .co-bolo .pavio { stroke: #333; stroke-width: .8; }
.contagem .co-bolo .chama { transform-box: fill-box; transform-origin: 50% 100%; transform: scale(0); opacity: 0; transition: transform .2s, opacity .2s; }
.contagem .co-bolo .acesa .chama { transform: none; opacity: 1; animation: co-bolo-chama .18s ease-in-out infinite alternate; }
.contagem .co-bolo .acesa.nova .chama { animation: co-bolo-acende .45s cubic-bezier(.2, 1.8, .4, 1) both; }
@keyframes co-bolo-chama { from { transform: scale(.92, .88) skewX(-3deg); } to { transform: scale(1.04, 1.1) skewX(3deg); } }
@keyframes co-bolo-acende { from { transform: scale(0); } 50% { transform: scale(1.5); } to { transform: none; } }
.contagem .co-bolo .fora { fill: #F7941D; } .contagem .co-bolo .dentro { fill: #FFE9A8; } .contagem .co-bolo .halo { fill: #FFD100; opacity: .22; }
.contagem .co-bolo .fumaca { fill: none; stroke: #c9ccd3; stroke-width: 1.3; stroke-linecap: round; opacity: 0; }
.contagem.fim .co-bolo .fumaca { animation: co-bolo-fumaca 1.6s ease-out .62s both; }
@keyframes co-bolo-fumaca { from { opacity: .8; transform: translateY(2px); } to { opacity: 0; transform: translateY(-12px); } }
.contagem.fim .co-bolo .chama { transition: transform .18s ease-in .55s, opacity .25s .55s; transform: scale(.2, .1) skewX(30deg); }
.contagem .co-bolo .num { font-family: "Pacifico", cursive; font-weight: 400; font-size: 44px; fill: #fff; stroke: #e1709a; stroke-width: 2px; paint-order: stroke; }
.contagem .co-bolo .confete { display: none; }
.contagem.fim .co-bolo .confete { display: inline; animation: co-bolo-confete 1.8s cubic-bezier(.2, .7, .4, 1) calc(.8s + var(--d)) both; }
@keyframes co-bolo-confete { 0% { transform: translate(0, 0) rotate(0); opacity: 1; } 45% { transform: translate(calc(var(--dx) * .8), var(--dy)) rotate(calc(var(--r) * .5)); }
                             100% { transform: translate(var(--dx), calc(var(--dy) + 70px)) rotate(var(--r)); opacity: 0; } }
.contagem .co-bolo .grito { font-size: 17px; } .contagem.fim .co-bolo .grito { animation-delay: .8s; }

/* 9. Máquina de costura */
.contagem .co-cos .mesa { fill: #6b4a2b; }
.contagem .co-cos .linha-cos { fill: none; stroke: #E8412C; stroke-width: .8; }
.contagem .co-cos .frente { fill: #8a8f99; opacity: .55; }
.contagem .co-cos .decalque { fill: none; stroke: #c9a14a; stroke-width: 1.2; stroke-linecap: round; } .contagem .co-cos .decalque-p { fill: #c9a14a; }
.contagem .co-cos .volante-base circle:first-child { fill: #1c1c20; stroke: #8a8f99; stroke-width: 2; }
.contagem .co-cos .volante { --giro: 1.1s; animation: co-cos-gira var(--giro) linear infinite; }
.contagem .co-cos .volante line { stroke: #8a8f99; stroke-width: 1.6; } .contagem .co-cos .volante circle { fill: #8a8f99; }
@keyframes co-cos-gira { to { transform: rotate(360deg); } }
.contagem .co-cos .base { fill: #141416; } .contagem .co-cos .filete { stroke: #c9a14a; stroke-width: .7; } .contagem .co-cos .chapa { fill: #c9ccd3; }
.contagem .co-cos .pano { --pano: 2s; animation: co-cos-pano var(--pano) linear infinite; }
@keyframes co-cos-pano { to { transform: translateX(-24px); } }
.contagem .co-cos .pesponto { stroke: #FFD100; stroke-width: 1; stroke-dasharray: 3 2; }
.contagem .co-cos .calcador, .contagem .co-cos .barra { fill: #c9ccd3; }
.contagem .co-cos .agulha { --agulha: .17s; fill: #d9dce1; stroke: #d9dce1; stroke-width: 1; animation: co-cos-agulha var(--agulha) ease-in-out infinite alternate; }
.contagem .co-cos .agulha rect { stroke: none; }
@keyframes co-cos-agulha { from { transform: translateY(-3px); } to { transform: translateY(3.5px); } }
.contagem.ultimos .co-cos .volante { --giro: .45s; } .contagem.ultimos .co-cos .pano { --pano: .8s; } .contagem.ultimos .co-cos .agulha { --agulha: .07s; }
.contagem.fim .co-cos .volante, .contagem.fim .co-cos .pano, .contagem.fim .co-cos .agulha { animation-play-state: paused; }
.contagem .co-cos .num { font-size: 46px; fill: #e9c46a; filter: drop-shadow(0 0 3px #000); }
.contagem .co-cos .tesoura { display: none; }
.contagem.fim .co-cos .tesoura { display: inline; fill: #d9dce1; }
.contagem .co-cos .tesoura circle:not(.eixo) { fill: none; stroke: #E8412C; stroke-width: 1.6; }
.contagem .co-cos .tesoura .eixo { fill: #555; }
.contagem .co-cos .lamina { transform-box: view-box; transform-origin: 0 0; }
.contagem.fim .co-cos .lamina.a { animation: co-cos-corta-a .6s cubic-bezier(.5, 0, .2, 1) .3s both; }
.contagem.fim .co-cos .lamina.b { animation: co-cos-corta-b .6s cubic-bezier(.5, 0, .2, 1) .3s both; }
@keyframes co-cos-corta-a { 0% { transform: rotate(-22deg); } 70%, 100% { transform: rotate(0); } }
@keyframes co-cos-corta-b { 0% { transform: rotate(22deg); } 70%, 100% { transform: rotate(0); } }

@media (prefers-reduced-motion: reduce) {
  .contagem .co *, .contagem .co *::before { animation-duration: .01s !important; animation-iteration-count: 1 !important; transition: none !important; }
}`;

window.CO = {
  FONTES, CSS,
  CENAS: [
    { nome: "Micro-ondas", sub: "Objetos do Dia a Dia", ...microondas },
    { nome: "Elevador", sub: "Transportes", ...elevador },
    { nome: "Semáforo de pedestres", sub: "Transportes", ...semaforo },
    { nome: "Panela de pressão", sub: "Culinária e Bebidas", ...panela },
    { nome: "Caixa do supermercado", sub: "Marcas e Produtos", ...supermercado },
    { nome: "Máquina de escrever", sub: "Língua Portuguesa e Expressões", ...escrever },
    { nome: "Festa junina", sub: "Folclore e Tradições Brasileiras", ...junina },
    { nome: "Bolo de aniversário", sub: "Costumes pelo Mundo", ...bolo },
    { nome: "Máquina de costura", sub: "Moda e Vestuário", ...costura },
  ],
};
})();
