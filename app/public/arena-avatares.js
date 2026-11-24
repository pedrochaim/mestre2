// Modo Arena · avatares dos jogadores (2026-11-23): 20 personagens originais, desenhados aqui em SVG, e as bandeiras de 24
// times de futebol (as listras e cores de cada um, com a sigla; sem os escudos). O jogador escolhe um ao entrar; o campo
// "avatar" do jogador guarda o identificador ("astronauta", "t-fla"…). No tabuleiro e nas listas, o avatar aparece com um
// anel na cor do jogador e as iniciais dele numa etiqueta embaixo.

const PELES = ["#f6d2b8", "#e8b48f", "#c98e62", "#9a6440", "#6b4128"];
const AV = [
  { nome: "Astronauta", pele: 1, cabelo: ["curto", "#3a2a1a"], chapeu: ["capacete", "#dfe6ee"], olhos: "grandes", boca: "sorriso" },
  { nome: "Pirata", pele: 2, cabelo: ["longo", "#2b1d12"], chapeu: ["tricornio", "#1d1d1d"], olhos: "tapa", boca: "dentes", extra: "barba" },
  { nome: "Chef", pele: 0, cabelo: ["careca"], chapeu: ["chef", "#ffffff"], olhos: "pontos", boca: "bigode" },
  { nome: "Detetive", pele: 3, cabelo: ["curto", "#1d1d1d"], chapeu: ["fedora", "#6b5a44"], olhos: "lupa", boca: "reta" },
  { nome: "Bruxa", pele: 0, cabelo: ["longo", "#7a3db8"], chapeu: ["bruxa", "#2b2140"], olhos: "grandes", boca: "sorriso", extra: "sardas" },
  { nome: "Rei", pele: 1, cabelo: ["curto", "#c9c9c9"], chapeu: ["coroa", "#ffd23f"], olhos: "pontos", boca: "sorriso", extra: "barba-branca" },
  { nome: "Roqueira", pele: 2, cabelo: ["moicano", "#ff3c7d"], olhos: "escuros", boca: "aberta" },
  { nome: "Cientista", pele: 0, cabelo: ["espetado", "#e8e8e8"], olhos: "oculos", boca: "aberta" },
  { nome: "Caubói", pele: 2, cabelo: ["curto", "#7a4a20"], chapeu: ["caubói", "#8a5a2b"], olhos: "pontos", boca: "sorriso", extra: "bigode" },
  { nome: "Ninja", pele: 1, chapeu: ["ninja", "#1d1d1d"], olhos: "bravos", boca: "nenhuma" },
  { nome: "Bombeira", pele: 3, cabelo: ["longo", "#1d1d1d"], chapeu: ["bombeiro", "#d8342c"], olhos: "grandes", boca: "sorriso" },
  { nome: "Palhaço", pele: 0, cabelo: ["cacheado", "#ff7a00"], olhos: "grandes", boca: "dentes", extra: "nariz" },
  { nome: "Vovó", pele: 1, cabelo: ["coque", "#d6d6d6"], olhos: "oculos", boca: "sorriso", extra: "bochechas" },
  { nome: "Surfista", pele: 2, cabelo: ["longo", "#f2c94c"], olhos: "escuros", boca: "dentes" },
  { nome: "Robô", robo: true, olhos: "robo", boca: "robo" },
  { nome: "Vampiro", pele: 0, palido: true, cabelo: ["vampiro", "#1d1d1d"], olhos: "bravos", boca: "presas" },
  { nome: "Mergulhadora", pele: 4, cabelo: ["coque", "#1d1d1d"], olhos: "mascara", boca: "sorriso" },
  { nome: "Professor", pele: 4, cabelo: ["careca-lados", "#b0b0b0"], olhos: "oculos", boca: "bigode" },
  { nome: "Fada", pele: 1, cabelo: ["longo", "#ff9ad5"], chapeu: ["tiara", "#ffd23f"], olhos: "grandes", boca: "sorriso", extra: "bochechas" },
  { nome: "Viking", pele: 0, cabelo: ["longo", "#c8742c"], chapeu: ["viking", "#8d8d8d"], olhos: "bravos", boca: "reta", extra: "barba-ruiva" },
];

function avatarSvg(a, fundo = "#24241f") {
  const p = a.robo ? "#9aa7b4" : a.palido ? "#e9e3f2" : PELES[a.pele];
  const [tc, cc] = a.cabelo || [];
  const [tch, ch] = a.chapeu || [];
  const atras = [], frente = [], topo = [];
  // Cabelo atrás da cabeça
  if (tc === "longo") atras.push(`<path d="M20 52 Q20 22 50 20 Q80 22 80 52 L82 86 Q66 92 50 90 Q34 92 18 86 Z" fill="${cc}"/>`);
  // Cabeça
  const cabeca = a.robo
    ? `<rect x="22" y="28" width="56" height="54" rx="10" fill="${p}" stroke="#5e6b78" stroke-width="3"/>
       <line x1="50" y1="28" x2="50" y2="16" stroke="#5e6b78" stroke-width="3"/><circle cx="50" cy="14" r="4" fill="#f07a64"/>`
    : `<circle cx="50" cy="56" r="28" fill="${p}"/><circle cx="22" cy="58" r="5" fill="${p}"/><circle cx="78" cy="58" r="5" fill="${p}"/>`;
  // Cabelo por cima
  const cab = {
    curto: `<path d="M23 50 Q24 26 50 25 Q76 26 77 50 Q70 36 50 36 Q30 36 23 50 Z" fill="${cc}"/>`,
    longo: `<path d="M23 52 Q24 26 50 25 Q76 26 77 52 Q68 34 50 34 Q32 34 23 52 Z" fill="${cc}"/>`,
    coque: `<circle cx="50" cy="22" r="10" fill="${cc}"/><path d="M23 50 Q25 28 50 27 Q75 28 77 50 Q68 36 50 36 Q32 36 23 50 Z" fill="${cc}"/>`,
    moicano: `<path d="M44 40 L40 12 L48 26 L50 8 L53 26 L60 12 L56 40 Z" fill="${cc}"/>`,
    espetado: `<path d="M22 46 L18 30 L30 36 L30 20 L40 32 L46 16 L52 32 L60 18 L64 34 L76 24 L74 40 L84 40 L76 48 Q66 34 50 34 Q32 34 22 46 Z" fill="${cc}"/>`,
    cacheado: [20, 30, 42, 58, 70, 80].map((x, k) => `<circle cx="${x}" cy="${k % 2 ? 30 : 36}" r="11" fill="${cc}"/>`).join(""),
    vampiro: `<path d="M23 48 Q24 26 50 25 Q76 26 77 48 Q64 34 50 46 Q36 34 23 48 Z" fill="${cc}"/>`,
    "careca-lados": `<path d="M22 60 Q20 44 28 40 L30 56 Z M78 60 Q80 44 72 40 L70 56 Z" fill="${cc}"/>`,
  }[tc] || "";
  frente.push(cab);
  // Olhos
  const olhos = {
    pontos: `<circle cx="40" cy="55" r="3.2" fill="#1d1d1d"/><circle cx="60" cy="55" r="3.2" fill="#1d1d1d"/>`,
    grandes: `<ellipse cx="40" cy="54" rx="7" ry="8" fill="#fff"/><ellipse cx="60" cy="54" rx="7" ry="8" fill="#fff"/>
              <circle cx="41" cy="56" r="3.5" fill="#1d1d1d"/><circle cx="59" cy="56" r="3.5" fill="#1d1d1d"/>`,
    oculos: `<circle cx="39" cy="55" r="8" fill="#ffffff55" stroke="#1d1d1d" stroke-width="2.5"/><circle cx="61" cy="55" r="8" fill="#ffffff55" stroke="#1d1d1d" stroke-width="2.5"/>
             <line x1="47" y1="55" x2="53" y2="55" stroke="#1d1d1d" stroke-width="2.5"/><circle cx="39" cy="56" r="2.6" fill="#1d1d1d"/><circle cx="61" cy="56" r="2.6" fill="#1d1d1d"/>`,
    escuros: `<rect x="28" y="49" width="20" height="11" rx="4" fill="#1d1d1d"/><rect x="52" y="49" width="20" height="11" rx="4" fill="#1d1d1d"/>
              <line x1="48" y1="53" x2="52" y2="53" stroke="#1d1d1d" stroke-width="3"/><rect x="31" y="51" width="6" height="3" rx="1.5" fill="#ffffff66"/>`,
    tapa: `<circle cx="40" cy="55" r="3.2" fill="#1d1d1d"/><ellipse cx="60" cy="55" rx="8" ry="7" fill="#1d1d1d"/>
           <line x1="24" y1="40" x2="76" y2="62" stroke="#1d1d1d" stroke-width="2"/>`,
    bravos: `<circle cx="40" cy="56" r="3.2" fill="#1d1d1d"/><circle cx="60" cy="56" r="3.2" fill="#1d1d1d"/>
             <line x1="33" y1="47" x2="45" y2="51" stroke="#1d1d1d" stroke-width="3" stroke-linecap="round"/>
             <line x1="67" y1="47" x2="55" y2="51" stroke="#1d1d1d" stroke-width="3" stroke-linecap="round"/>`,
    lupa: `<circle cx="40" cy="55" r="3.2" fill="#1d1d1d"/><circle cx="61" cy="55" r="10" fill="#bfe3ff66" stroke="#4a3a28" stroke-width="3"/>
           <circle cx="61" cy="55" r="5" fill="#1d1d1d"/><line x1="68" y1="63" x2="80" y2="76" stroke="#4a3a28" stroke-width="4" stroke-linecap="round"/>`,
    mascara: `<rect x="26" y="44" width="48" height="22" rx="10" fill="#7fd3ff88" stroke="#1d6fa8" stroke-width="3"/>
              <circle cx="40" cy="55" r="3.2" fill="#1d1d1d"/><circle cx="60" cy="55" r="3.2" fill="#1d1d1d"/>
              <path d="M74 52 L84 40 L88 42" fill="none" stroke="#f2c94c" stroke-width="4" stroke-linecap="round"/>`,
    robo: `<rect x="32" y="46" width="14" height="10" rx="3" fill="#7cf5d9"/><rect x="54" y="46" width="14" height="10" rx="3" fill="#7cf5d9"/>`,
  }[a.olhos] || "";
  // Boca
  const boca = {
    sorriso: `<path d="M41 68 Q50 76 59 68" fill="none" stroke="#1d1d1d" stroke-width="3" stroke-linecap="round"/>`,
    aberta: `<ellipse cx="50" cy="70" rx="7" ry="5" fill="#5a1e1e"/>`,
    reta: `<line x1="43" y1="70" x2="57" y2="70" stroke="#1d1d1d" stroke-width="3" stroke-linecap="round"/>`,
    dentes: `<path d="M39 66 Q50 80 61 66 Z" fill="#5a1e1e"/><path d="M41 66 L59 66 L58 69 L42 69 Z" fill="#fff"/>`,
    bigode: `<path d="M50 64 Q42 60 34 66 Q42 70 50 66 Q58 70 66 66 Q58 60 50 64 Z" fill="#3a2a1a"/>
             <path d="M44 72 Q50 75 56 72" fill="none" stroke="#1d1d1d" stroke-width="2.5" stroke-linecap="round"/>`,
    presas: `<path d="M41 68 Q50 74 59 68" fill="none" stroke="#1d1d1d" stroke-width="3" stroke-linecap="round"/>
             <path d="M44 69 L45.5 75 L47 70 Z M53 70 L54.5 75 L56 69 Z" fill="#fff"/>`,
    robo: `<rect x="36" y="66" width="28" height="8" rx="2" fill="#5e6b78"/><path d="M41 66 V74 M47 66 V74 M53 66 V74 M59 66 V74" stroke="#9aa7b4" stroke-width="2"/>`,
    nenhuma: "",
  }[a.boca] || "";
  // Extras
  const extras = {
    barba: `<path d="M26 62 Q30 86 50 88 Q70 86 74 62 Q66 76 50 76 Q34 76 26 62 Z" fill="#2b1d12"/>`,
    "barba-branca": `<path d="M26 62 Q30 90 50 92 Q70 90 74 62 Q66 76 50 76 Q34 76 26 62 Z" fill="#eaeaea"/>`,
    "barba-ruiva": `<path d="M26 62 Q28 92 50 94 Q72 92 74 62 Q66 76 50 76 Q34 76 26 62 Z" fill="#c8742c"/>`,
    bigode: `<path d="M50 64 Q42 60 34 66 Q42 70 50 66 Q58 70 66 66 Q58 60 50 64 Z" fill="#3a2a1a"/>`,
    sardas: [[34, 63], [38, 66], [62, 63], [66, 66], [36, 69], [64, 69]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.3" fill="#a4623a"/>`).join(""),
    bochechas: `<circle cx="33" cy="65" r="5" fill="#ff8fa3" opacity=".6"/><circle cx="67" cy="65" r="5" fill="#ff8fa3" opacity=".6"/>`,
    nariz: `<circle cx="50" cy="62" r="6" fill="#e8342c"/><circle cx="48" cy="60" r="1.8" fill="#ffffff99"/>`,
  }[a.extra] || "";
  // Chapéus
  const chapeu = {
    capacete: `<circle cx="50" cy="56" r="38" fill="#bfe3ff22" stroke="${ch}" stroke-width="5"/><rect x="40" y="90" width="20" height="8" rx="3" fill="${ch}"/>`,
    tricornio: `<path d="M14 36 Q50 4 86 36 Q70 30 50 32 Q30 30 14 36 Z" fill="${ch}"/><circle cx="50" cy="22" r="5" fill="#fff"/>
                <path d="M47 21 L53 25 M53 21 L47 25" stroke="${ch}" stroke-width="1.5"/>`,
    chef: `<rect x="30" y="20" width="40" height="16" fill="${ch}" stroke="#d8d8d8"/><circle cx="34" cy="16" r="10" fill="${ch}"/>
           <circle cx="50" cy="10" r="12" fill="${ch}"/><circle cx="66" cy="16" r="10" fill="${ch}"/>`,
    fedora: `<ellipse cx="50" cy="34" rx="34" ry="6" fill="${ch}"/><path d="M30 34 Q30 12 50 14 Q70 12 70 34 Z" fill="${ch}"/>
             <rect x="30" y="28" width="40" height="5" fill="#2b2118"/>`,
    bruxa: `<ellipse cx="50" cy="34" rx="38" ry="7" fill="${ch}"/><path d="M30 34 L54 -2 L70 34 Z" fill="${ch}"/>
            <rect x="33" y="27" width="35" height="5" fill="#ffd23f"/>`,
    coroa: `<path d="M28 34 L28 14 L39 26 L50 8 L61 26 L72 14 L72 34 Z" fill="${ch}" stroke="#c9a227" stroke-width="2"/>
            <circle cx="50" cy="26" r="3.5" fill="#e8342c"/><circle cx="36" cy="30" r="2.5" fill="#4cc485"/><circle cx="64" cy="30" r="2.5" fill="#7c9cf5"/>`,
    "caubói": `<ellipse cx="50" cy="34" rx="42" ry="8" fill="${ch}"/><path d="M28 34 Q28 10 40 12 Q50 18 60 12 Q72 10 72 34 Z" fill="${ch}"/>
               <rect x="29" y="28" width="42" height="5" fill="#4a2e14"/>`,
    ninja: `<path d="M20 56 Q20 24 50 24 Q80 24 80 56 L80 50 L20 50 Z" fill="${ch}"/><rect x="20" y="62" width="60" height="26" rx="12" fill="${ch}"/>
            <path d="M78 40 L92 34 L88 46 Z" fill="#d8342c"/><rect x="20" y="38" width="60" height="5" fill="#d8342c"/>`,
    bombeiro: `<ellipse cx="50" cy="36" rx="38" ry="8" fill="${ch}"/><path d="M26 36 Q26 10 50 10 Q74 10 74 36 Z" fill="${ch}"/>
               <path d="M44 16 L56 16 L54 30 L46 30 Z" fill="#ffd23f"/>`,
    tiara: `<path d="M30 30 Q50 18 70 30" fill="none" stroke="${ch}" stroke-width="3"/><path d="M50 12 L53 20 L61 20 L55 25 L57 33 L50 28 L43 33 L45 25 L39 20 L47 20 Z" fill="${ch}"/>`,
    viking: `<path d="M24 40 Q24 18 50 18 Q76 18 76 40 Z" fill="${ch}"/><rect x="24" y="36" width="52" height="6" fill="#6b6b6b"/>
             <path d="M24 32 Q8 28 10 8 Q16 22 28 24 Z M76 32 Q92 28 90 8 Q84 22 72 24 Z" fill="#f4ecd8"/>`,
  }[tch] || "";
  if (a.olhos === "mascara") topo.push(`<rect x="24" y="40" width="52" height="4" fill="#1d6fa8"/>`);
  return `<svg viewBox="0 0 100 100" role="img" aria-label="${a.nome}"><circle cx="50" cy="50" r="50" fill="${fundo}"/>
    <clipPath id="c${a.nome.replace(/\W/g, "")}"><circle cx="50" cy="50" r="50"/></clipPath>
    <g clip-path="url(#c${a.nome.replace(/\W/g, "")})">${atras.join("")}${cabeca}${extras.startsWith("<path d=\"M26") ? extras : ""}${frente.join("")}${olhos}${boca}${extras.startsWith("<path d=\"M26") ? "" : extras}${topo.join("")}${chapeu}</g></svg>`;
}
// ---------------------------------------------------------------- bandeiras de times (sem escudos)
// padrao: "v" listras verticais, "h" listras horizontais, "diag" faixa diagonal, "faixa" faixa horizontal no meio,
// "tri" três faixas verticais, "metade" duas metades. cores: as da bandeira; sigla: o texto no meio.
const TIMES = [
  { nome: "Flamengo", sigla: "FLA", padrao: "h", cores: ["#c8102e", "#111"] },
  { nome: "Corinthians", sigla: "COR", padrao: "faixa", cores: ["#fff", "#111"] },
  { nome: "Palmeiras", sigla: "PAL", padrao: "faixa", cores: ["#006437", "#fff"] },
  { nome: "São Paulo", sigla: "SAO", padrao: "faixa3", cores: ["#fff", "#c8102e", "#111"] },
  { nome: "Santos", sigla: "SAN", padrao: "v", cores: ["#fff", "#111"] },
  { nome: "Vasco", sigla: "VAS", padrao: "diag", cores: ["#111", "#fff"] },
  { nome: "Fluminense", sigla: "FLU", padrao: "v", cores: ["#7a1631", "#fff", "#00613c"] },
  { nome: "Botafogo", sigla: "BOT", padrao: "v", cores: ["#111", "#fff"] },
  { nome: "Grêmio", sigla: "GRE", padrao: "v", cores: ["#0d80bf", "#111", "#fff"] },
  { nome: "Internacional", sigla: "INT", padrao: "faixa", cores: ["#c8102e", "#fff"] },
  { nome: "Atlético-MG", sigla: "CAM", padrao: "v", cores: ["#111", "#fff"], larga: true },
  { nome: "Cruzeiro", sigla: "CRU", padrao: "faixa", cores: ["#0a3a8c", "#fff"] },
  { nome: "Bahia", sigla: "BAH", padrao: "tri", cores: ["#0a3a8c", "#fff", "#c8102e"] },
  { nome: "Vitória", sigla: "VIT", padrao: "h", cores: ["#c8102e", "#111"], larga: true },
  { nome: "Sport", sigla: "SPO", padrao: "h", cores: ["#111", "#c8102e"] },
  { nome: "Fortaleza", sigla: "FOR", padrao: "faixa3", cores: ["#0a3a8c", "#c8102e", "#fff"] },
  { nome: "Ceará", sigla: "CEA", padrao: "v", cores: ["#fff", "#111"], larga: true },
  { nome: "Athletico-PR", sigla: "CAP", padrao: "h", cores: ["#c8102e", "#111"], estreita: true },
  { nome: "Coritiba", sigla: "CFC", padrao: "h", cores: ["#00613c", "#fff"] },
  { nome: "Avaí", sigla: "AVA", padrao: "v", cores: ["#0a3a8c", "#fff"] },
  { nome: "Figueirense", sigla: "FIG", padrao: "v", cores: ["#111", "#fff"], estreita: true },
  { nome: "Chapecoense", sigla: "CHA", padrao: "metade", cores: ["#00843d", "#fff"] },
  { nome: "Criciúma", sigla: "CRI", padrao: "v", cores: ["#ffd200", "#111", "#fff"] },
  { nome: "Joinville", sigla: "JEC", padrao: "tri", cores: ["#c8102e", "#111", "#fff"] },
];
function bandeiraSvg(t, fundo, siglaNoMeio = false) {
  const c = t.cores, n = t.larga ? 4 : t.estreita ? 9 : 6, partes = [];
  if (t.padrao === "v") for (let i = 0; i < n; i++) partes.push(`<rect x="${i * 100 / n}" y="0" width="${100 / n + .5}" height="100" fill="${c[i % c.length]}"/>`);
  if (t.padrao === "h") for (let i = 0; i < n; i++) partes.push(`<rect x="0" y="${i * 100 / n}" width="100" height="${100 / n + .5}" fill="${c[i % c.length]}"/>`);
  if (t.padrao === "diag") partes.push(`<rect width="100" height="100" fill="${c[0]}"/><path d="M-10 18 L18 -10 L110 82 L82 110 Z" fill="${c[1]}"/>`);
  if (t.padrao === "faixa") partes.push(`<rect width="100" height="100" fill="${c[0]}"/><rect x="0" y="38" width="100" height="24" fill="${c[1]}"/>`);
  if (t.padrao === "faixa3") partes.push(`<rect width="100" height="100" fill="${c[0]}"/><rect x="0" y="34" width="100" height="14" fill="${c[1]}"/><rect x="0" y="48" width="100" height="14" fill="${c[2]}"/>`);
  if (t.padrao === "tri") c.forEach((cor, i) => partes.push(`<rect x="${i * 100 / 3}" y="0" width="${100 / 3 + .5}" height="100" fill="${cor}"/>`));
  if (t.padrao === "metade") partes.push(`<rect width="50" height="100" fill="${c[0]}"/><rect x="50" width="50" height="100" fill="${c[1]}"/>`);
  const id = "t" + t.sigla;
  return `<svg viewBox="0 0 100 100" role="img" aria-label="${t.nome}"><circle cx="50" cy="50" r="50" fill="${fundo || "#24241f"}"/>
    <clipPath id="${id}"><circle cx="50" cy="50" r="50"/></clipPath><g clip-path="url(#${id})">${partes.join("")}
    <rect x="16" y="${siglaNoMeio ? 34 : 62}" width="68" height="24" rx="8" fill="#000000cc"/>
    <text x="50" y="${siglaNoMeio ? 51 : 79}" font-size="18" font-weight="900" text-anchor="middle" fill="#fff" font-family="system-ui, sans-serif" letter-spacing="1">${t.sigla}</text></g></svg>`;
}

// Avatar com o anel da cor do jogador (para fichas, tabuleiro e o "eu" no celular).

const semAcento = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
export const PERSONAGENS = AV.map((a, k) => ({ id: semAcento(a.nome), nome: a.nome, k }));
export const TIMES_DE_FUTEBOL = TIMES.map((t, k) => ({ id: "t-" + t.sigla.toLowerCase(), nome: t.nome, k }));
const porId = new Map([...PERSONAGENS.map(p => [p.id, { tipo: "p", k: p.k }]), ...TIMES_DE_FUTEBOL.map(t => [t.id, { tipo: "t", k: t.k }])]);
export const avatarValido = id => porId.has(id);
export const nomeDoAvatar = id => { const a = porId.get(id); return !a ? "" : a.tipo === "t" ? TIMES[a.k].nome : AV[a.k].nome; };

// O desenho sozinho (na grade de escolha). Com siglaNoMeio, a sigla do time sobe, para dar lugar às iniciais.
export function desenhoAvatar(id, siglaNoMeio = false) {
  const a = porId.get(id);
  if (!a) return "";
  return a.tipo === "t" ? bandeiraSvg(TIMES[a.k], undefined, siglaNoMeio) : avatarSvg(AV[a.k]);
}

const iniciais = nome => String(nome).split(/\s+/).filter(Boolean).slice(0, 2).map(p => p[0]).join("").toUpperCase();
const escTexto = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

// O avatar do jogador: anel na cor dele (cor: [fundo, texto]) e as iniciais numa etiqueta embaixo. Devolve um <svg> com
// viewBox 0 0 100 100; o atributo extra (por exemplo x, y, width e height) vai na tag de abertura.
export function avatarDoJogador(id, [cor, corTexto], nome, extra = "") {
  const base = desenhoAvatar(id, true);
  if (!base) return "";
  return base
    .replace("<svg ", `<svg ${extra} `)
    .replace('<circle cx="50" cy="50" r="50" fill="#24241f"/>', `<circle cx="50" cy="50" r="50" fill="${cor}"/><circle cx="50" cy="50" r="44" fill="#24241f"/>`)
    .replace(/clip-path="url\(#(\w+)\)"/, (m, i) => `clip-path="url(#${i})" transform="translate(6 6) scale(.88)"`)
    .replace(/<\/svg>$/, `<rect x="24" y="73" width="52" height="25" rx="10" fill="${cor}" stroke="#000" stroke-width="2.5"/>
      <text x="50" y="91" font-size="19" font-weight="900" text-anchor="middle" fill="${corTexto}" font-family="system-ui, sans-serif">${escTexto(iniciais(nome))}</text></svg>`);
}
