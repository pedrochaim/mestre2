// Arena: a contagem da próxima pergunta automática ("Próxima pergunta em X"), na tela grande (arena.html) e nos celulares
// (jogar.html). Desde 2026-11-24, a animação é a do TEMA DA PRÓXIMA PERGUNTA (sorteada pela tela grande quando a contagem
// começa e gravada em "proxima.tema"): Geografia, uma de onze cenas (o globo e, desde 2026-11-26, dez com som
// próprio: aeroporto, bússola, monumentos, bandeiras, idiomas, vulcão, Everest, Rio São Francisco, farol e biomas); História, uma de cinco cenas (abaixo); Natureza, o
// broto; Artes e Pensamento, a pincelada; Cotidiano, o despertador; Ciências, o átomo; Entretenimento, uma de onze cenas
// (o começo do filme e, desde 2026-11-26, claquete, pipoca, TV de tubo, toca-discos, violão, quadrinhos, mangá, cartas,
// fliperama e nave, estas com som próprio); Esportes, uma de cinco cenas (futebol, vôlei, basquete, tênis e automobilismo), sorteada como a de História e sem
// olhar o subtema da pergunta. Sem tema conhecido, o número gigante. Primeira versão de cada uma (os protótipos de
// 2026-11-24), para ser melhorada depois, tema a tema. História já tem cinco cenas (pirâmide, Coliseu, relógio de sol,
// Muralha da China e religiões do mundo), sempre em algarismos romanos; a cena é sorteada a cada contagem pela "chave"
// (semente da partida e rodada), a mesma em todos os aparelhos.
// Medidas em --u (1,8vmin): na TV deitada, perto de 1% da largura; no celular em pé, a cena ocupa boa parte da tela.
// Usa as variáveis de cor da página (--acento, --linha) e as fontes (--fonte, --mono).

export const SEGUNDOS = 7;  // duração da contagem entre uma pergunta e outra (2026-11-24: de 10 para 7)

// Cores dos temas na identidade Metrô (as mesmas de CORES em arena-comum.js): [fundo, texto].
export const CORES = {
  "Geografia": ["#00A84F", "#000"], "Natureza": ["#8CC63F", "#000"], "Artes e Pensamento": ["#F7941D", "#000"],
  "Cotidiano": ["#E8412C", "#000"], "Ciências": ["#E4007C", "#fff"], "Entretenimento": ["#8E4FC9", "#fff"],
  "Esportes": ["#00A3E0", "#000"], "História": ["#2F5BEA", "#fff"],
};

const CSS = `
.contagem { --u: 1.8vmin; position: fixed; inset: 0; z-index: 5; pointer-events: none; display: grid; place-items: center;
            align-content: center; font-family: var(--fonte, system-ui, sans-serif);
            background: radial-gradient(ellipse at center, #000d 0%, #0008 50%, #0003 80%); }
.contagem .cena { display: grid; justify-items: center; gap: calc(1.2 * var(--u)); position: relative; max-width: 96vw; }
.contagem .badge { border-radius: calc(.7 * var(--u)); padding: .25em .8em; font-size: calc(1.5 * var(--u)); font-weight: 800; }
.contagem .rot { font-size: calc(2.2 * var(--u)); font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: #fff;
                 text-shadow: 0 0 calc(2 * var(--u)) #000; text-align: center; }
.contagem .num { font-weight: 900; color: #fff; line-height: .9; font-variant-numeric: tabular-nums; }
@keyframes ct-pulso { 0% { transform: scale(1.22); } 60% { transform: scale(1); } 100% { transform: scale(.97); } }
@keyframes ct-piscar { 0%, 100% { opacity: 1; } 50% { opacity: .25; } }
@keyframes ct-bater { 0% { transform: scale(1.25); opacity: 1; } 70% { transform: scale(1); opacity: .85; } 100% { transform: scale(.96); opacity: .35; } }
@keyframes ct-brotar { from { transform: scale(0); } to { transform: scale(1); } }

/* Sem tema: o número gigante. */
.contagem .gigante .rot { font-size: clamp(1.2rem, 4.5vmin, 3.2rem); animation: ct-piscar 1s ease-in-out infinite; }
.contagem .gigante .num { font-size: clamp(6rem, 42vmin, 30rem); text-shadow: 0 0 6vmin #000, 0 0 3vmin var(--acento);
                          animation: ct-bater 1s ease-out both; }

/* Geografia: o globo girando, com o número por cima. */
.contagem .geo .globo { position: relative; width: calc(26 * var(--u)); aspect-ratio: 1; }
.contagem .geo svg { width: 100%; height: 100%; display: block; overflow: visible; }
.contagem .geo .mar { fill: #04170c; stroke: #00A84F; stroke-width: 2; }
.contagem .geo .lat { stroke: #00A84F; stroke-width: .8; opacity: .55; }
.contagem .geo .mer { fill: none; stroke: #00A84F; stroke-width: 1.1; transform-box: fill-box; transform-origin: center;
                      animation: ct-meridiano 4s ease-in-out infinite; }
@keyframes ct-meridiano { 0% { transform: scaleX(1); opacity: .15; } 50% { transform: scaleX(.04); opacity: 1; } 100% { transform: scaleX(1); opacity: .15; } }
.contagem .geo .pino { fill: var(--acento); transform-box: fill-box; transform-origin: 50% 100%; animation: ct-pino 1s ease-out infinite; }
@keyframes ct-pino { 0% { transform: translateY(-6px); } 30% { transform: translateY(0); } 45% { transform: translateY(-2px); } 60%, 100% { transform: none; } }
.contagem .geo .num { position: absolute; inset: 0; display: grid; place-items: center; font-size: calc(13 * var(--u));
                      text-shadow: 0 0 calc(2 * var(--u)) #000, 0 0 var(--u) #000; animation: ct-pulso 1s ease-out both; }

/* História: sempre em algarismos romanos (o zero é N, de nulla); cinco cenas, uma sorteada a cada contagem. */
.contagem .hist .num { letter-spacing: .06em; animation: ct-pulso 1s ease-out both; }
.contagem .hist svg { display: block; overflow: visible; height: auto; }
/* — Pirâmide em construção: uma fiada de blocos por segundo e o topo dourado no zero; o sol atravessa o céu. */
.contagem .hp .linha { display: flex; align-items: flex-end; gap: calc(3 * var(--u)); }
.contagem .hp svg { width: calc(30 * var(--u)); }
.contagem .hp .chao { fill: #2a2316; }
.contagem .hp .camada { stroke: #8a6a2a; stroke-width: .6; transform-box: fill-box; transform-origin: 50% 100%;
                        animation: ct-assentar .5s cubic-bezier(.2, 1.4, .4, 1) both; }
.contagem .hp .camada.a { fill: #E2BC6E; } .contagem .hp .camada.b { fill: #D4AC5B; }
@keyframes ct-assentar { from { transform: translateY(-140%); opacity: 0; } to { transform: none; opacity: 1; } }
.contagem .hp .topo { fill: #FFD100; filter: drop-shadow(0 0 3px #FFD100); transform-box: fill-box; transform-origin: 50% 100%;
                      animation: ct-assentar .5s cubic-bezier(.2, 1.4, .4, 1) calc(var(--atraso, 0s) + 6.6s) both; }
.contagem .hp .numbox { display: grid; justify-items: start; gap: calc(.6 * var(--u)); padding-bottom: var(--u); }
.contagem .hp .num { font-size: calc(12 * var(--u)); transform-origin: left bottom; text-shadow: 0 0 calc(2 * var(--u)) #2F5BEA; }
/* — Coliseu à noite: os sete arcos do térreo, acesos por tochas, apagam um por segundo. */
.contagem .hc svg { width: calc(40 * var(--u)); max-width: 94vw; }
.contagem .hc .pedra { fill: #CDB88E; } .contagem .hc .friso { fill: #9c8a64; }
.contagem .hc .vao, .contagem .hc .arco { fill: #14161c; }
.contagem .hc .arco { transition: fill .4s; }
.contagem .hc .arco.acesa { fill: #FFB347; filter: drop-shadow(0 0 2px #FFB347) drop-shadow(0 0 5px #ff8a00); }
.contagem .hc .num { font-size: calc(10 * var(--u)); letter-spacing: .08em; text-shadow: 0 0 calc(2 * var(--u)) #FFB347, 0 0 var(--u) #000; }
/* — Relógio de sol: a sombra passa pelas horas de VII a I e a hora da vez acende; o sol atravessa o céu. */
.contagem .hs .linha { display: flex; align-items: center; gap: calc(3 * var(--u)); }
.contagem .hs svg { width: calc(34 * var(--u)); }
.contagem .hs .mostrador { fill: #2b2f38; stroke: #2F5BEA; stroke-width: 1.5; }
.contagem .hs .raio { stroke: #A0A4AB55; stroke-width: .6; }
.contagem .hs .hora { font: 800 6.5px var(--fonte, sans-serif); fill: #A0A4AB; text-anchor: middle; dominant-baseline: central; transition: fill .3s; }
.contagem .hs .hora.agora { fill: #FFD100; }
.contagem .hs .gnomon { fill: #8b93a7; }
.contagem .hs .sombra { fill: #000; opacity: .85; transform-box: fill-box; transform-origin: 0% 50%; transition: transform .9s ease-in-out; }
.contagem .hs .astro { fill: #FFD100; filter: drop-shadow(0 0 4px #FFD100); }
.contagem .hs .romano { display: grid; justify-items: start; gap: calc(.5 * var(--u)); }
.contagem .hs .num { font-size: calc(11 * var(--u)); transform-origin: left center; text-shadow: 0 0 calc(2 * var(--u)) #2F5BEA; }
/* — Muralha da China: as torres acendem os faróis de fogo uma por segundo, como os sinais que corriam pela muralha. */
.contagem .hm svg { width: calc(50 * var(--u)); max-width: 94vw; }
.contagem .hm .serra { fill: #161b29; } .contagem .hm .serra2 { fill: #1e2537; }
.contagem .hm .muro { fill: none; stroke: #b49f72; stroke-width: 7; stroke-linejoin: round; stroke-linecap: round; }
.contagem .hm .ameias { fill: none; stroke: #CDB88E; stroke-width: 3; stroke-dasharray: 2.2 2; }
.contagem .hm .torre { fill: #CDB88E; stroke: #8a7650; stroke-width: .6; }
.contagem .hm .janela { fill: #14161c; }
.contagem .hm .farol { opacity: 0; transition: opacity .3s; }
.contagem .hm .farol.acesa { opacity: 1; }
.contagem .hm .chama { fill: #FFB347; filter: drop-shadow(0 0 2px #ff8a00) drop-shadow(0 0 5px #ff6a00); transform-box: fill-box;
                       transform-origin: 50% 100%; animation: ct-chama .35s ease-in-out infinite alternate; }
@keyframes ct-chama { from { transform: scale(.85, .9); } to { transform: scale(1.1, 1.15); } }
.contagem .hm .fumaca { fill: #8b93a7; transform-box: fill-box; transform-origin: center; animation: ct-fumaca 1.6s ease-out infinite; }
@keyframes ct-fumaca { from { transform: translateY(0) scale(.6); opacity: .7; } to { transform: translateY(-16px) scale(1.6); opacity: 0; } }
.contagem .hm .num { font-size: calc(10 * var(--u)); letter-spacing: .08em; text-shadow: 0 0 calc(2 * var(--u)) #ff8a00, 0 0 var(--u) #000; }
/* — Religiões do mundo: sete símbolos num anel que gira devagar; um acende a cada segundo; o número fica no centro.
     O "view-box" tem a origem no (0, 0) do desenho, que é o centro do anel. */
.contagem .hr .roda { position: relative; width: calc(30 * var(--u)); aspect-ratio: 1; }
.contagem .hr svg { width: 100%; height: 100%; }
.contagem .hr .giro { transform-box: view-box; transform-origin: 0 0; animation: ct-girar 28s linear infinite; }
@keyframes ct-girar { to { transform: rotate(360deg); } }
.contagem .hr .contra { transform-box: fill-box; transform-origin: center; animation: ct-girar 28s linear infinite reverse; }
.contagem .hr .aro { fill: none; stroke: #2F5BEA; stroke-width: .8; opacity: .6; }
.contagem .hr .disco { fill: #0b1230; stroke: #2F5BEA; stroke-width: 1; transition: fill .4s, stroke .4s; }
.contagem .hr .simbolo { fill: #A0A4AB; transition: fill .4s; }
.contagem .hr .simbolo .tra { fill: none; stroke: #A0A4AB; transition: stroke .4s; }
.contagem .hr .simbolo .furo { fill: #0b1230; }
.contagem .hr .acesa .disco { fill: #1c2a6b; stroke: #FFD100; }
.contagem .hr .acesa .simbolo { fill: #FFD100; filter: drop-shadow(0 0 2px #FFD100); }
.contagem .hr .acesa .simbolo .tra { stroke: #FFD100; }
.contagem .hr .acesa .simbolo .furo { fill: #1c2a6b; }
.contagem .hr .om { font: 700 9px "Nirmala UI", "Noto Sans Devanagari", "Mangal", sans-serif; text-anchor: middle; dominant-baseline: central; }
.contagem .hr .num { position: absolute; inset: 0; display: grid; place-items: center; font-size: calc(8 * var(--u));
                     text-shadow: 0 0 calc(2 * var(--u)) #2F5BEA, 0 0 var(--u) #000; }

/* Natureza: o broto cresce, uma folha a cada segundo, e floresce no zero. */
.contagem .nat .linha { display: flex; align-items: flex-end; gap: calc(2 * var(--u)); }
.contagem .nat .numbox { display: grid; justify-items: center; gap: calc(.6 * var(--u)); padding-bottom: calc(2 * var(--u)); }
.contagem .nat .num { font-size: calc(15 * var(--u)); text-shadow: 0 0 calc(2 * var(--u)) #000, 0 0 calc(1.4 * var(--u)) #8CC63F88;
                      animation: ct-pulso 1s ease-out both; }
.contagem .nat .planta { width: calc(17 * var(--u)); height: auto; display: block; overflow: visible; }
.contagem .nat .solo { fill: #3a2a1a; }
.contagem .nat .caule { fill: none; stroke: #8CC63F; stroke-width: 3; stroke-linecap: round; stroke-dasharray: 110; stroke-dashoffset: 110;
                        animation: ct-crescer 6.6s ease-out var(--atraso, 0s) both; }
@keyframes ct-crescer { to { stroke-dashoffset: 0; } }
.contagem .nat .folha { transform-box: fill-box; animation: ct-brotar .5s cubic-bezier(.2, 1.5, .4, 1) both; }
.contagem .nat .folha.esq { transform-origin: 100% 60%; fill: #8CC63F; }
.contagem .nat .folha.dir { transform-origin: 0% 60%; fill: #5E9A28; }
.contagem .nat .flor { transform-box: fill-box; transform-origin: center;
                       animation: ct-brotar .6s cubic-bezier(.2, 1.6, .4, 1) calc(var(--atraso, 0s) + 6.6s) both; }

/* Artes e Pensamento: numa moldura, a pincelada passa e o número é pintado a cada segundo. */
.contagem .arte .moldura { padding: var(--u); background: #F7941D; border-radius: calc(.6 * var(--u));
                           box-shadow: inset 0 0 0 calc(.35 * var(--u)) #a85a07, 0 0 calc(4 * var(--u)) #F7941D44; }
.contagem .arte .tela { position: relative; width: calc(24 * var(--u)); aspect-ratio: 4 / 3; background: #F1E6D0; overflow: hidden;
                        box-shadow: inset 0 0 calc(1.6 * var(--u)) #0004; display: grid; place-items: center; }
.contagem .arte .pincel { position: absolute; left: 8%; right: 8%; top: 38%; height: 26%; border-radius: 40% 60% 55% 45%;
                          background: #F7941D55; transform-origin: left center; animation: ct-pincelar .45s ease-out both; }
@keyframes ct-pincelar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.contagem .arte svg { position: relative; width: 100%; height: 100%; display: block; }
.contagem .arte .num { font-family: var(--fonte, sans-serif); font-size: 62px; font-weight: 900; fill: #1a1208; fill-opacity: 0;
                       stroke: #1a1208; stroke-width: 1.6; stroke-linejoin: round; stroke-dasharray: 260; stroke-dashoffset: 260;
                       animation: ct-pintar .8s ease-out both; }
@keyframes ct-pintar { 60% { stroke-dashoffset: 0; fill-opacity: 0; } to { stroke-dashoffset: 0; fill-opacity: 1; } }

/* Cotidiano: o despertador, com o ponteiro dando a volta; nos 3 últimos segundos, ele treme. */
.contagem .coti .relogio { position: relative; width: calc(24 * var(--u)); }
.contagem .coti svg { width: 100%; height: auto; display: block; overflow: visible; }
.contagem .coti .corpo { fill: #E8412C; }
.contagem .coti .mostrador { fill: #101114; }
.contagem .coti .marca { stroke: #A0A4AB; stroke-width: 1.4; stroke-linecap: round; }
.contagem .coti .ponteiro { stroke: var(--acento); stroke-width: 2.6; stroke-linecap: round; }
.contagem .coti .num { position: absolute; left: 0; right: 0; top: 13%; bottom: 0; display: grid; place-items: center;
                       font-size: calc(9 * var(--u)); text-shadow: 0 0 var(--u) #000; animation: ct-pulso 1s ease-out both; }
.contagem.ultimos .coti .relogio { animation: ct-tremer .14s linear infinite; }
.contagem.ultimos .coti .sino { animation: ct-badalar .14s linear infinite; transform-box: fill-box; transform-origin: center; }
@keyframes ct-tremer { 0%, 100% { transform: rotate(0); } 25% { transform: rotate(-4deg) translateX(-.5vmin); } 75% { transform: rotate(4deg) translateX(.5vmin); } }
@keyframes ct-badalar { 50% { transform: scale(1.12); } }

/* Ciências: o átomo, com os elétrons em órbita e o número no núcleo, pulsando. */
.contagem .cien .atomo { position: relative; width: calc(28 * var(--u)); aspect-ratio: 1; }
.contagem .cien svg { width: 100%; height: 100%; display: block; overflow: visible; }
.contagem .cien .orbita { fill: none; stroke: #E4007C; stroke-width: 1.2; opacity: .8; }
.contagem .cien .eletron { fill: #F4F4F2; }
.contagem .cien .nucleo { fill: #E4007C; animation: ct-brilho 1s ease-out infinite; transform-box: fill-box; transform-origin: center; }
@keyframes ct-brilho { 0% { transform: scale(1.18); filter: drop-shadow(0 0 6px #E4007C); } 100% { transform: scale(1); filter: none; } }
.contagem .cien .num { position: absolute; inset: 0; display: grid; place-items: center; font-size: calc(8 * var(--u));
                       animation: ct-pulso 1s ease-out both; }

/* Entretenimento: a contagem do começo do filme, com a varredura, a cruz e a película. */
@property --ct-ang { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
.contagem .ent .pelicula { display: flex; gap: var(--u); align-items: stretch; background: #0e0a16; padding: var(--u);
                           border-radius: calc(.6 * var(--u)); box-shadow: 0 0 calc(4 * var(--u)) #8E4FC944; }
.contagem .ent .furos { width: calc(1.6 * var(--u));
                        background: repeating-linear-gradient(to bottom, transparent 0 calc(.9 * var(--u)), #2a2236 calc(.9 * var(--u)) calc(2.4 * var(--u)), transparent calc(2.4 * var(--u)) calc(3 * var(--u))); }
.contagem .ent .quadro { position: relative; width: calc(30 * var(--u)); aspect-ratio: 4 / 3; background: #1b1428; overflow: hidden;
                         display: grid; place-items: center; animation: ct-tremular .12s steps(2) infinite; }
@keyframes ct-tremular { 50% { filter: brightness(1.08); } }
.contagem .ent .anel { position: absolute; aspect-ratio: 1; border-radius: 50%; border: calc(.3 * var(--u)) solid #ffffff77; }
.contagem .ent .anel.a1 { width: 70%; } .contagem .ent .anel.a2 { width: 58%; }
.contagem .ent .cruz { position: absolute; inset: 0; }
.contagem .ent .cruz::before, .contagem .ent .cruz::after { content: ""; position: absolute; background: #ffffff55; }
.contagem .ent .cruz::before { left: 0; right: 0; top: 50%; height: calc(.2 * var(--u)); }
.contagem .ent .cruz::after { top: 0; bottom: 0; left: 50%; width: calc(.2 * var(--u)); }
.contagem .ent .varredura { position: absolute; width: 70%; aspect-ratio: 1; border-radius: 50%;
                            background: conic-gradient(#8E4FC9aa 0deg, #8E4FC9aa var(--ct-ang), transparent var(--ct-ang));
                            animation: ct-varrer-filme 1s linear infinite; }
@keyframes ct-varrer-filme { from { --ct-ang: 0deg; } to { --ct-ang: 360deg; } }
.contagem .ent .num { position: relative; font-size: calc(15 * var(--u)); text-shadow: 0 0 calc(1.4 * var(--u)) #000; }
.contagem .ent .riscos { position: absolute; inset: 0; animation: ct-riscos .3s steps(3) infinite;
                         background: linear-gradient(90deg, transparent 31%, #ffffff22 31.3%, transparent 31.6%),
                                     linear-gradient(90deg, transparent 72%, #ffffff18 72.2%, transparent 72.5%); }
@keyframes ct-riscos { 33% { transform: translateX(3%); } 66% { transform: translateX(-4%); } }

/* Esportes: cinco cenas, uma sorteada a cada contagem (não depende do subtema da pergunta). */
.contagem .esp svg { display: block; overflow: visible; height: auto; }
.contagem .esp .num { font-size: calc(10 * var(--u)); text-shadow: 0 0 calc(2 * var(--u)) #00A3E0, 0 0 var(--u) #000;
                      animation: ct-pulso 1s ease-out both; }
.contagem .esp .grito { font: 900 calc(3 * var(--u)) var(--fonte, sans-serif); color: var(--acento); letter-spacing: .06em;
                        text-transform: uppercase; opacity: 0; }
.contagem.fim .esp .grito { animation: ct-grito .6s cubic-bezier(.2, 1.6, .4, 1) both; }
@keyframes ct-grito { from { opacity: 0; transform: scale(.4); } to { opacity: 1; transform: scale(1); } }
/* — Futebol: a bola tradicional passa de jogador em jogador, um passe por segundo; no zero, entra no gol e a rede balança. */
.contagem .ef svg { width: calc(56 * var(--u)); max-width: 94vw; }
.contagem .ef .grama { fill: #1d6b35; } .contagem .ef .listra { fill: #23783d; }
.contagem .ef .cal { fill: none; stroke: #ffffffcc; stroke-width: 1; }
.contagem .ef .rede { fill: url(#ct-fut-rede); stroke: #fff; stroke-width: 1.2; }
.contagem .ef .trajeto { fill: none; stroke: #ffffff40; stroke-width: 1; stroke-dasharray: 2 3; }
.contagem .ef .jog { fill: var(--acento); stroke: #000; stroke-width: 1; }
.contagem .ef .bola { transition: transform .55s cubic-bezier(.4, 0, .2, 1); }
.contagem .ef .couro { fill: #fff; stroke: #000; stroke-width: .7; }
.contagem .ef .gomo { fill: #111; }
.contagem .ef .costura { fill: none; stroke: #000; stroke-width: .45; }
.contagem .ef .giro-bola { animation: ct-rolar .55s linear infinite; transform-box: fill-box; transform-origin: center; }
@keyframes ct-rolar { to { transform: rotate(360deg); } }
.contagem.fim .ef .rede { animation: ct-balanca .35s ease-in-out 3; transform-box: fill-box; transform-origin: 0 50%; }
@keyframes ct-balanca { 50% { transform: scaleX(1.25); } }
/* — Vôlei: na areia, a bola cruza a rede a cada segundo, numa parábola, como num rali. */
.contagem .ev svg { width: calc(48 * var(--u)); max-width: 94vw; }
.contagem .ev .areia { fill: #d8b26a; }
.contagem .ev .poste { stroke: #cfd3da; stroke-width: 2.4; }
.contagem .ev .rede { fill: url(#ct-vol-rede); stroke: #fff; stroke-width: 1; }
.contagem .ev .vaivem { animation: ct-vaivem 2s linear infinite; }
@keyframes ct-vaivem { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(110px); } }
.contagem .ev .alto { animation: ct-alto 1s infinite; }
@keyframes ct-alto { 0% { transform: translateY(0); animation-timing-function: cubic-bezier(.2, .6, .4, 1); }
                     50% { transform: translateY(-52px); animation-timing-function: cubic-bezier(.6, 0, .8, .4); }
                     100% { transform: translateY(0); } }
.contagem .ev .sombra { fill: #0006; animation: ct-vaivem 2s linear infinite; }
/* — Basquete: o número no relógio de posse, em vermelho, em cima da tabela; a bola quica; no zero, a luz da tabela pisca. */
.contagem .eb svg { width: calc(30 * var(--u)); }
.contagem .eb .caixa { fill: #0c0c0e; stroke: #3a3d44; stroke-width: 1.2; }
.contagem .eb .num { font: 600 24px var(--mono, monospace); fill: #ff3b30; text-anchor: middle; dominant-baseline: central;
                     text-shadow: none; filter: drop-shadow(0 0 3px #ff3b30); animation: none; }
.contagem .eb .tabela { fill: #ffffff12; stroke: #F4F4F2; stroke-width: 1.6; }
.contagem .eb .luz { fill: #ff3b30; opacity: .15; }
.contagem.fim .eb .luz { animation: ct-buzina .25s steps(2) 6; opacity: 1; }
@keyframes ct-buzina { 50% { opacity: .2; } }
.contagem .eb .aro { fill: none; stroke: #F7941D; stroke-width: 2.6; }
.contagem .eb .rede { fill: none; stroke: #F4F4F2aa; stroke-width: .8; }
.contagem .eb .bola { animation: ct-quique 1s infinite; }
@keyframes ct-quique { 0%, 100% { transform: translateY(0); animation-timing-function: cubic-bezier(.45, 0, .9, .5); }
                       50% { transform: translateY(20px); animation-timing-function: cubic-bezier(.1, .5, .55, 1); } }
.contagem .eb .bola circle { fill: #E8741D; } .contagem .eb .bola path { fill: none; stroke: #3a1a05; stroke-width: .9; }
/* — Tênis: no saibro, visto de cima, a bola cruza a rede a cada segundo e deixa a marca onde quica. */
.contagem .et svg { width: calc(50 * var(--u)); max-width: 94vw; }
.contagem .et .saibro { fill: #c2603a; } .contagem .et .fora { fill: #a9512f; }
.contagem .et .lin { fill: none; stroke: #fff; stroke-width: 1.1; }
.contagem .et .rede { stroke: #F4F4F2; stroke-width: 2.4; stroke-dasharray: 1.2 1; }
.contagem .et .marca { fill: #8a3b1e; opacity: 0; transition: opacity .3s; }
.contagem .et .marca.feita { opacity: .9; }
.contagem .et .bola { transition: transform .8s cubic-bezier(.3, .1, .3, 1); }
.contagem .et .bola circle { fill: #d7f03c; stroke: #8aa01a; stroke-width: .6; animation: ct-voo 1s ease-in-out both;
                             transform-box: fill-box; transform-origin: center; }
@keyframes ct-voo { 0% { transform: scale(1); } 45% { transform: scale(1.7); } 85%, 100% { transform: scale(1); } }
/* — Automobilismo: as luzes vermelhas da largada acendem uma por segundo; no zero, ficam verdes e o carro arranca. */
.contagem .ea svg { width: calc(46 * var(--u)); max-width: 94vw; }
.contagem .ea .portico { fill: #111316; stroke: #2a2d33; stroke-width: 1; }
.contagem .ea .luz { fill: #2a0d0c; stroke: #000; stroke-width: 1; transition: fill .1s; }
.contagem .ea .luz.acesa { fill: #ff3b30; filter: drop-shadow(0 0 4px #ff3b30); }
.contagem .ea .luz.verde { fill: #3DDC84; filter: drop-shadow(0 0 5px #3DDC84); }
.contagem .ea .pista { fill: #1b1d22; } .contagem .ea .faixa-pista { stroke: #F4F4F2; stroke-width: 1.4; stroke-dasharray: 8 6; }
.contagem .ea .carro { transition: transform 1.1s cubic-bezier(.6, 0, .9, .4); animation: ct-tremor .08s linear infinite; }
.contagem.fim .ea .carro { transform: translateX(260px); animation: none; }
@keyframes ct-tremor { 50% { transform: translateY(.4px); } }


/* Entretenimento (2026-11-26): onze cenas, uma sorteada a cada contagem, sem olhar o subtema: o começo do filme (acima) e
   dez com som próprio (arena-suspense.js): claquete, pipoca, TV de tubo, toca-discos, violão, quadrinhos, mangá, cartas,
   fliperama e nave. Fontes próprias (Bangers, Permanent Marker, Press Start 2P e Dela Gothic One), carregadas por
   instalarCss(). */
@keyframes ct-en-sacudir { 0%, 100% { translate: 0 0; } 20% { translate: -1.2% .8%; } 40% { translate: 1.1% -.7%; }
                           60% { translate: -.8% -1%; } 80% { translate: .9% 1%; } }
@keyframes ct-en-piscar { 50% { opacity: 0; } }
@keyframes ct-en-girar { to { transform: rotate(360deg); } }
.contagem .en svg { display: block; overflow: visible; height: auto; max-width: 100%; }
.contagem .en .grito { font: 900 calc(3.2 * var(--u))/1 var(--fonte, sans-serif); color: #FFD100; letter-spacing: .06em; text-transform: uppercase;
                       opacity: 0; text-shadow: 0 0 calc(1.5 * var(--u)) #000; }
.contagem.fim .en .grito { animation: ct-grito .6s cubic-bezier(.2, 1.6, .4, 1) both; }

/* 1 · Claquete: a haste bate a cada segundo; o número é a tomada, escrito a giz. */
.contagem .en-claq .claq { width: calc(40 * var(--u)); max-width: 100%; display: grid; margin-top: calc(6 * var(--u)); filter: drop-shadow(0 calc(.8 * var(--u)) calc(2 * var(--u)) #000a); }
.contagem .en-claq .bracos { position: relative; height: calc(6.8 * var(--u)); }
.contagem .en-claq .braco { position: absolute; left: 0; right: 0; height: calc(3 * var(--u)); border-radius: calc(.35 * var(--u));
  box-shadow: inset 0 0 0 calc(.25 * var(--u)) #141218; }
.contagem .en-claq .fixo { bottom: 0; background: repeating-linear-gradient(115deg, #F4F4F2 0 calc(2 * var(--u)), #141218 calc(2 * var(--u)) calc(4 * var(--u))); }
.contagem .en-claq .movel { bottom: calc(3.3 * var(--u)); transform-origin: calc(1 * var(--u)) 100%;
  background: repeating-linear-gradient(65deg, #F4F4F2 0 calc(2 * var(--u)), #141218 calc(2 * var(--u)) calc(4 * var(--u)));
  animation: ct-en-claque 1s both; }
@keyframes ct-en-claque { 0% { transform: rotate(-13deg); animation-timing-function: cubic-bezier(.7, 0, 1, .6); }
  9% { transform: rotate(0); } 13% { transform: rotate(-1.5deg); } 17%, 50% { transform: rotate(0); animation-timing-function: ease-in-out; }
  100% { transform: rotate(-13deg); } }
.contagem.fim .en-claq .movel { animation: ct-en-claque-fim .12s ease-in both; }
@keyframes ct-en-claque-fim { from { transform: rotate(-13deg); } to { transform: rotate(0); } }
.contagem .en-claq .bracos::after { content: ""; position: absolute; z-index: 2; left: calc(.3 * var(--u)); bottom: calc(2.5 * var(--u));
  width: calc(1.6 * var(--u)); aspect-ratio: 1; border-radius: 50%; background: #A0A4AB; box-shadow: 0 0 0 calc(.25 * var(--u)) #141218; }
.contagem .en-claq .lousa { background: #17151c; border-radius: 0 0 calc(.8 * var(--u)) calc(.8 * var(--u)); padding: var(--u);
  display: grid; gap: calc(.6 * var(--u)); color: #F4F4F2; }
.contagem .en-claq .trio { display: grid; grid-template-columns: 1fr 1fr 1.8fr; gap: calc(.6 * var(--u)); }
.contagem .en-claq .duo { display: grid; grid-template-columns: 1.3fr 1fr; gap: calc(.6 * var(--u)); }
.contagem .en-claq .campo { border: calc(.2 * var(--u)) solid #F4F4F2aa; border-radius: calc(.3 * var(--u)); min-width: 0;
  padding: calc(.35 * var(--u)) calc(.6 * var(--u)); display: grid; align-content: start; }
.contagem .en-claq .campo span { font: 800 calc(1 * var(--u))/1.1 var(--fonte, sans-serif); letter-spacing: .14em; text-transform: uppercase; color: #A0A4AB; }
.contagem .en-claq .campo b { font: 400 calc(2.1 * var(--u))/1.25 "Permanent Marker", var(--fonte, sans-serif); white-space: nowrap; overflow: hidden; }
.contagem .en-claq .tomada { justify-items: center; }
.contagem .en-claq .tomada span { justify-self: start; }
.contagem .en-claq .tomada b.num { font: 400 calc(8 * var(--u))/1 "Permanent Marker", var(--fonte, sans-serif); overflow: visible; animation: ct-pulso 1s ease-out both; }
.contagem .en-claq .grito { font-family: "Permanent Marker", var(--fonte, sans-serif); font-weight: 400; font-size: calc(3.6 * var(--u)); text-transform: none; }

/* 2 · Pipoca: a cada segundo estoura mais pipoca (1, 2, 3… 7); no zero, transborda. */
.contagem .en-pip svg { width: calc(32 * var(--u)); }
.contagem .en-pip .sombra { fill: #0007; }
.contagem .en-pip .verm { fill: #E8412C; } .contagem .en-pip .branca { fill: #F4F4F2; }
.contagem .en-pip .aro { fill: #F4F4F2; stroke: #c9c4bd; stroke-width: .5; }
.contagem .en-pip .marca { font: 900 4.4px var(--fonte, sans-serif); fill: #E8412C; text-anchor: middle; letter-spacing: .3em; }
.contagem .en-pip .faixa { fill: #8E4FC9; }
.contagem .en-pip .num { font: 900 34px var(--fonte, sans-serif); fill: #fff; text-anchor: middle; dominant-baseline: central;
  transform-box: fill-box; transform-origin: center; animation: ct-pulso 1s ease-out both; }
.contagem .en-pip .grao { opacity: 0; fill: #FFF3D9; stroke: #D9B56C; stroke-width: .5; transform: translate(var(--x), var(--y)) rotate(var(--g)); }
.contagem .en-pip .grao .miolo { fill: #F2C14E; stroke: none; }
.contagem .en-pip .grao.visto { opacity: 1; }
.contagem .en-pip .grao.pula { animation: ct-en-pular .55s cubic-bezier(.3, 1.3, .5, 1) var(--d, 0s) both; }
@keyframes ct-en-pular { 0% { opacity: 0; transform: translate(var(--x), 76px) scale(.4); } 20% { opacity: 1; }
  55% { transform: translate(var(--x), calc(var(--y) - 16px)) rotate(var(--g)); } 100% { opacity: 1; transform: translate(var(--x), var(--y)) rotate(var(--g)); } }
.contagem .en-pip .sobra { opacity: 0; }
.contagem.fim .en-pip .sobra { animation: ct-en-transbordar 1s var(--d) both; }
@keyframes ct-en-transbordar { 0% { opacity: 0; transform: translate(60px, 58px) scale(.5); animation-timing-function: cubic-bezier(.2, .6, .4, 1); }
  12% { opacity: 1; } 45% { transform: translate(var(--mx), var(--my)) rotate(40deg); animation-timing-function: cubic-bezier(.5, 0, .9, .5); }
  100% { opacity: 1; transform: translate(var(--x), var(--y)) rotate(var(--g)); } }

/* 3 · TV de tubo: troca de canal a cada segundo (barras de cor, chuvisco, padrão de teste…); no zero, no ar. */
.contagem .en-tv .tv { width: calc(44 * var(--u)); max-width: 100%; display: grid; justify-items: center; }
.contagem .en-tv .antena { position: relative; width: 40%; height: calc(7 * var(--u)); transform-origin: 50% 100%; animation: ct-en-ajeitar .6s ease-out both; }
@keyframes ct-en-ajeitar { 30% { transform: rotate(-5deg); } 65% { transform: rotate(3deg); } 100% { transform: none; } }
.contagem .en-tv .vara { position: absolute; left: 50%; bottom: calc(.6 * var(--u)); width: calc(.35 * var(--u)); height: calc(8.5 * var(--u));
  margin-left: calc(-.175 * var(--u)); border-radius: 99px; background: #cfd3da; transform-origin: 50% 100%; }
.contagem .en-tv .vara.e { rotate: -34deg; } .contagem .en-tv .vara.d { rotate: 26deg; }
.contagem .en-tv .vara::before { content: ""; position: absolute; top: calc(-.4 * var(--u)); left: 50%; width: calc(.9 * var(--u)); aspect-ratio: 1;
  margin-left: calc(-.45 * var(--u)); border-radius: 50%; background: #cfd3da; }
.contagem .en-tv .cupula { position: absolute; left: 50%; bottom: 0; width: calc(6 * var(--u)); height: calc(2.4 * var(--u)); margin-left: calc(-3 * var(--u));
  border-radius: 50% 50% 0 0 / 100% 100% 0 0; background: #2a2730; }
.contagem .en-tv .movel { width: 100%; display: grid; grid-template-columns: 1fr calc(7 * var(--u)); gap: calc(1.2 * var(--u)); padding: calc(1.4 * var(--u));
  border-radius: calc(1.8 * var(--u)); background: repeating-linear-gradient(90deg, #0000 0 calc(.9 * var(--u)), #00000016 calc(.9 * var(--u)) calc(1.3 * var(--u))),
  linear-gradient(180deg, #8a5a34, #5d3a20); box-shadow: inset 0 0 0 calc(.3 * var(--u)) #3d2614, 0 var(--u) calc(3 * var(--u)) #000a; }
.contagem .en-tv .moldura { background: #1b1a1f; border-radius: calc(1.6 * var(--u)); padding: var(--u); box-shadow: inset 0 0 0 calc(.35 * var(--u)) #34313b; }
.contagem .en-tv .tela-tv { position: relative; aspect-ratio: 4 / 3; border-radius: 10% / 13%; overflow: hidden; background: #0c0c0e;
  display: grid; place-items: center; isolation: isolate; }
.contagem .en-tv .canal, .contagem .en-tv .chuvisco, .contagem .en-tv .estalo, .contagem .en-tv .vidro { position: absolute; inset: 0; display: none; }
.contagem .en-tv [data-canal="barras"] .c-barras, .contagem .en-tv [data-canal="teste"] .c-teste, .contagem .en-tv [data-canal="rolando"] .c-rolando,
.contagem .en-tv [data-canal="noticias"] .c-noticias, .contagem .en-tv [data-canal="noar"] .c-noar, .contagem .en-tv [data-canal="chuvisco"] .chuvisco,
.contagem .en-tv .estalo, .contagem .en-tv .vidro { display: block; }
.contagem .en-tv .c-barras { background:
  linear-gradient(90deg, #c0c0c0 0 14.28%, #c0c000 0 28.57%, #00c0c0 0 42.86%, #00c000 0 57.14%, #c000c0 0 71.43%, #c00000 0 85.71%, #0000c0 0) 0 0 / 100% 67% no-repeat,
  linear-gradient(90deg, #0000c0 0 14.28%, #131313 0 28.57%, #c000c0 0 42.86%, #131313 0 57.14%, #00c0c0 0 71.43%, #131313 0 85.71%, #c0c0c0 0) 0 72.8% / 100% 8% no-repeat,
  linear-gradient(90deg, #00214c 0 17.8%, #fff 0 35.7%, #32006a 0 53.5%, #131313 0) 0 100% / 100% 25% no-repeat; }
.contagem .en-tv .c-teste { background:
  radial-gradient(circle at 50% 50%, #0000 0 26%, #F4F4F2 26.5% 28%, #0000 28.5%),
  linear-gradient(90deg, #0000 49.6%, #F4F4F2aa 49.6% 50.4%, #0000 50.4%), linear-gradient(0deg, #0000 49.4%, #F4F4F2aa 49.4% 50.6%, #0000 50.6%),
  repeating-linear-gradient(90deg, #ffffff38 0 1px, #0000 1px 12.5%), repeating-linear-gradient(0deg, #ffffff38 0 1px, #0000 1px 16.66%),
  linear-gradient(90deg, #26262b, #4a4a52 50%, #26262b); }
.contagem .en-tv .c-rolando { overflow: hidden; }
.contagem .en-tv .c-rolando::before { content: ""; position: absolute; left: 0; right: 0; top: -100%; height: 200%;
  background: repeating-linear-gradient(180deg, #000 0 4.5%, #2F5BEA 4.5% 20%, #8E4FC9 20% 35%, #F7941D 35% 50%); animation: ct-en-rolar .7s linear infinite; }
@keyframes ct-en-rolar { to { transform: translateY(50%); } }
.contagem .en-tv .c-noticias { background: radial-gradient(ellipse at 50% 30%, #2F5BEA, #0b1a4d 70%); }
.contagem .en-tv .aovivo { position: absolute; left: 9%; top: 10%; background: #E8412C; color: #fff; font: 800 calc(1.2 * var(--u))/1 var(--fonte, sans-serif);
  padding: .35em .5em .2em; border-radius: .2em; letter-spacing: .06em; }
.contagem .en-tv .letreiro { position: absolute; left: 0; right: 0; bottom: 10%; height: 15%; background: #F4F4F2; overflow: hidden; display: flex; align-items: center; }
.contagem .en-tv .letreiro span { white-space: nowrap; padding-left: 100%; font: 800 calc(1.25 * var(--u))/1 var(--fonte, sans-serif); color: #111; animation: ct-en-letreiro 5s linear infinite; }
@keyframes ct-en-letreiro { to { transform: translateX(-100%); } }
.contagem .en-tv .c-noar { background: radial-gradient(circle at 50% 18%, #ffffff40, #0000 55%), linear-gradient(160deg, #8E4FC9, #3a1466); }
.contagem .en-tv .chuvisco, .contagem .en-tv .estalo {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='r'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='linear' slope='2.4' intercept='-.7'/%3E%3CfeFuncG type='linear' slope='2.4' intercept='-.7'/%3E%3CfeFuncB type='linear' slope='2.4' intercept='-.7'/%3E%3CfeFuncA type='linear' slope='0' intercept='1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23r)'/%3E%3C/svg%3E") 0 0 / calc(14 * var(--u)) calc(14 * var(--u));
  animation: ct-en-chiar .24s steps(1) infinite; }
@keyframes ct-en-chiar { 0% { background-position: 0 0; } 25% { background-position: calc(-5 * var(--u)) calc(3 * var(--u)); }
  50% { background-position: calc(4 * var(--u)) calc(-6 * var(--u)); } 75% { background-position: calc(-2 * var(--u)) calc(7 * var(--u)); } }
.contagem .en-tv .estalo { z-index: 1; opacity: 0; animation: ct-en-chiar .24s steps(1) infinite, ct-en-estalo .32s ease-out both; }
@keyframes ct-en-estalo { 0%, 45% { opacity: 1; } 100% { opacity: 0; } }
.contagem .en-tv .osd { position: absolute; z-index: 3; top: 10%; right: 10%; font: 600 calc(1.5 * var(--u))/1 var(--mono, monospace); color: #3DDC84;
  text-shadow: 0 0 calc(.6 * var(--u)) #3DDC84; }
.contagem .en-tv .num { position: relative; z-index: 2; font-size: calc(12 * var(--u));
  text-shadow: 0 0 calc(.8 * var(--u)) #000, 0 0 calc(2 * var(--u)) #000c; animation: ct-pulso 1s ease-out both; }
.contagem .en-tv .vidro { z-index: 4; background: repeating-linear-gradient(180deg, #0000 0 2px, #00000038 2px 3px),
  radial-gradient(ellipse at 28% 18%, #ffffff26, #0000 45%), radial-gradient(ellipse at center, #0000 58%, #000a 100%); }
.contagem .en-tv .painel { display: grid; align-content: start; justify-items: center; gap: calc(1.2 * var(--u)); padding-top: calc(.6 * var(--u)); }
.contagem .en-tv .botao { position: relative; width: calc(4.6 * var(--u)); aspect-ratio: 1; border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, #e9e6ee, #8b8794 70%); box-shadow: 0 0 0 calc(.3 * var(--u)) #2a2730, 0 calc(.3 * var(--u)) calc(.6 * var(--u)) #0008;
  transform: rotate(var(--giro, 0deg)); transition: transform .25s cubic-bezier(.3, 1.6, .5, 1); }
.contagem .en-tv .botao::after { content: ""; position: absolute; left: 50%; top: 8%; width: calc(.5 * var(--u)); height: 38%; margin-left: calc(-.25 * var(--u));
  background: #2a2730; border-radius: 99px; }
.contagem .en-tv .botao.b2 { width: calc(3.4 * var(--u)); }
.contagem .en-tv .grade-som { width: 100%; height: calc(7 * var(--u)); border-radius: calc(.6 * var(--u));
  background: repeating-linear-gradient(0deg, #2a1a10 0 calc(.45 * var(--u)), #b98a5a40 calc(.45 * var(--u)) calc(.9 * var(--u))); }
.contagem .en-tv .pes { display: flex; justify-content: space-between; width: 78%; }
.contagem .en-tv .pes i { width: var(--u); height: calc(2.2 * var(--u)); background: #3d2614; border-radius: 0 0 calc(.4 * var(--u)) calc(.4 * var(--u)); }
.contagem .en-tv .pes i:first-child { rotate: 12deg; } .contagem .en-tv .pes i:last-child { rotate: -12deg; }
.contagem .en-tv .grito { color: #fff; background: #E8412C; padding: .25em .6em .1em; border-radius: .25em; text-shadow: none; box-shadow: 0 0 calc(2 * var(--u)) #E8412C; }

/* 4 · Toca-discos: batida de 120 por minuto, o braço chega ao disco; nos três últimos, o DJ arranha o vinil. */
.contagem .en-vin .linha { display: flex; align-items: center; gap: calc(2.4 * var(--u)); }
.contagem .en-vin svg { width: calc(38 * var(--u)); }
.contagem .en-vin .num { font-size: calc(13 * var(--u)); text-shadow: 0 0 calc(2 * var(--u)) #8E4FC9, 0 0 var(--u) #000; animation: ct-en-batida 1s ease-out both; }
@keyframes ct-en-batida { 0% { transform: scale(1.25); } 15% { transform: scale(1); } 50% { transform: scale(1.1); } 65%, 100% { transform: scale(1); } }
.contagem .en-vin .base { fill: #141218; stroke: #2A2D33; stroke-width: 1; }
.contagem .en-vin .prato { fill: #2a2730; }
.contagem .en-vin .estrobo { fill: none; stroke: #c9c4d3; stroke-width: 1.4; stroke-dasharray: 1 2.1; }
.contagem .en-vin .disco { fill: #0b0a0d; }
.contagem .en-vin .sulco { fill: none; stroke: #ffffff14; stroke-width: .5; }
.contagem .en-vin .selo { fill: #8E4FC9; }
.contagem .en-vin .selo-txt { font: 800 3.4px var(--fonte, sans-serif); fill: #fff; text-anchor: middle; dominant-baseline: central; letter-spacing: .08em; }
.contagem .en-vin .eixo { fill: #d9d6df; }
.contagem .en-vin .brilho { fill: #ffffff10; }
.contagem .en-vin .gira { animation: ct-en-girar 1.8s linear infinite; }
.contagem.ultimos .en-vin .arranha { animation: ct-en-arranhar 1s ease-in-out both; }
@keyframes ct-en-arranhar { 0% { transform: rotate(0); } 12% { transform: rotate(-38deg); } 25% { transform: rotate(8deg); } 40% { transform: rotate(-30deg); }
  55% { transform: rotate(0); } 62% { transform: rotate(-38deg); } 75% { transform: rotate(8deg); } 88% { transform: rotate(-30deg); } 100% { transform: rotate(0); } }
.contagem .en-vin .braco { transition: transform .5s cubic-bezier(.4, 0, .2, 1); }
.contagem .en-vin .haste { fill: none; stroke: #d9d6df; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
.contagem .en-vin .pivo { fill: #2a2730; stroke: #d9d6df; stroke-width: 1.2; }
.contagem .en-vin .contrapeso { fill: #3a3640; }
.contagem .en-vin .capsula { fill: #F4F4F2; }
.contagem .en-vin .trilho { fill: #0b0a0d; } .contagem .en-vin .pitch { fill: #A0A4AB; }
.contagem .en-vin .start { fill: #2a2730; stroke: #3a3640; }
.contagem .en-vin .led { fill: #5a1a14; }
.contagem.fim .en-vin .led { fill: #3DDC84; filter: drop-shadow(0 0 2px #3DDC84); }

/* 5 · Violão: afinando, uma corda solta por segundo (Mi, Lá, Ré, Sol, Si, Mi), harmônicos no 1 e o acorde de bossa no zero. */
.contagem .en-vio svg { width: calc(46 * var(--u)); filter: drop-shadow(0 var(--u) calc(2 * var(--u)) #000a); }
.contagem .en-vio .tampo { fill: #E3BF83; }
.contagem .en-vio .filete { fill: none; stroke: #3a2414; stroke-width: 1.8; }
.contagem .en-vio .filete2 { fill: none; stroke: #f1e2c4; stroke-width: .6; }
.contagem .en-vio .veio { fill: none; stroke: #b8894d; stroke-width: .35; opacity: .5; }
.contagem .en-vio .boca { fill: #120c08; }
.contagem .en-vio .anel { fill: none; stroke: #3a2414; }
.contagem .en-vio .mosaico-a { fill: none; stroke: #2f6e46; stroke-width: 2.6; stroke-dasharray: 1.1 1.1; }
.contagem .en-vio .mosaico-b { fill: none; stroke: #a8442c; stroke-width: 2.6; stroke-dasharray: 1.1 1.1; stroke-dashoffset: 1.1; }
.contagem .en-vio .escala { fill: #1f1714; }
.contagem .en-vio .traste { stroke: #c9c4bd; stroke-width: 1.1; }
.contagem .en-vio .cavalete { fill: #4a2a1a; } .contagem .en-vio .rastilho { fill: #EFE6CF; }
.contagem .en-vio .num { font: 900 32px var(--fonte, sans-serif); fill: #F4F4F2; text-anchor: middle; dominant-baseline: central; filter: drop-shadow(0 0 3px #8E4FC9);
  transform-box: fill-box; transform-origin: center; animation: ct-pulso 1s ease-out both; }
.contagem .en-vio .fio { stroke: #EDE6DA; }
.contagem .en-vio .bordao .fio { stroke: #C9B07A; }
.contagem .en-vio .vib { fill: #FFD10066; opacity: 0; transform-box: fill-box; transform-origin: center; }
.contagem .en-vio .corda.toca .vib { animation: ct-en-vibra 1.4s ease-out var(--d, 0s) both; }
@keyframes ct-en-vibra { 0% { opacity: 1; transform: scaleY(1); } 100% { opacity: 0; transform: scaleY(.15); } }
.contagem .en-vio .corda.toca .fio { animation: ct-en-acende 1.4s ease-out var(--d, 0s) both; }
@keyframes ct-en-acende { 0% { stroke: #FFD100; } }
.contagem .en-vio .corda.harm .vib { fill: #00E5FF66; }
.contagem .en-vio .corda.harm .fio { animation-name: ct-en-acende-h; }
@keyframes ct-en-acende-h { 0% { stroke: #00E5FF; } }
.contagem .en-vio .afinador { display: flex; align-items: center; gap: var(--u); background: #101114; border: calc(.2 * var(--u)) solid #2A2D33;
  border-radius: var(--u); padding: calc(.5 * var(--u)) calc(1.2 * var(--u)); color: #F4F4F2; }
.contagem .en-vio .mostrador { position: relative; width: calc(5 * var(--u)); height: calc(2.6 * var(--u)); overflow: hidden; }
.contagem .en-vio .mostrador::before { content: ""; position: absolute; inset: 0 0 -100% 0; border-radius: 50%; border: calc(.2 * var(--u)) solid #A0A4AB; }
.contagem .en-vio .agulha { position: absolute; left: 50%; bottom: 0; width: calc(.25 * var(--u)); height: 92%; margin-left: calc(-.125 * var(--u));
  background: #3DDC84; transform-origin: 50% 100%; animation: ct-en-afinar .8s cubic-bezier(.3, 1.4, .5, 1) both; }
@keyframes ct-en-afinar { 0% { transform: rotate(-50deg); background: #E8412C; } 60% { background: #E8412C; } 100% { transform: rotate(0); background: #3DDC84; } }
.contagem .en-vio .nota { font: 900 calc(2.6 * var(--u))/1 var(--fonte, sans-serif); min-width: calc(4 * var(--u)); }
.contagem .en-vio .qual { font: 700 calc(1.3 * var(--u))/1 var(--fonte, sans-serif); color: #A0A4AB; text-transform: uppercase; letter-spacing: .08em; }
.contagem.fim .en-vio .nota { color: #FFD100; }

/* 6 · Quadrinhos: um balão de explosão e uma onomatopeia por segundo; no zero, KABUM! */
.contagem .en-hq .painel-hq { position: relative; width: calc(42 * var(--u)); max-width: 100%; aspect-ratio: 16 / 10; overflow: hidden;
  border: calc(.6 * var(--u)) solid #111; background: #FFD100; display: grid; place-items: center; box-shadow: calc(.8 * var(--u)) calc(.8 * var(--u)) 0 #111; }
.contagem .en-hq .painel-hq.treme { animation: ct-en-sacudir .3s linear both; }
.contagem.fim .en-hq .painel-hq { animation: ct-en-sacudir .25s linear 3; }
.contagem .en-hq .retic { position: absolute; inset: 0; background: radial-gradient(circle, #F7941D 0 34%, transparent 37%) 0 0 / calc(1.2 * var(--u)) calc(1.2 * var(--u));
  -webkit-mask: radial-gradient(ellipse at center, transparent 22%, #000 80%); mask: radial-gradient(ellipse at center, transparent 22%, #000 80%); }
.contagem .en-hq .raios { position: absolute; inset: -40%; background: repeating-conic-gradient(#fff9 0 4deg, transparent 4deg 13deg);
  -webkit-mask: radial-gradient(circle, transparent 16%, #000 40%); mask: radial-gradient(circle, transparent 16%, #000 40%); transition: transform .3s ease-out; }
.contagem .en-hq .legenda { position: absolute; z-index: 3; left: var(--u); top: var(--u); background: #FFF6D5; border: calc(.3 * var(--u)) solid #111; color: #111;
  font: 400 calc(1.9 * var(--u))/1 "Bangers", var(--fonte, sans-serif); letter-spacing: .06em; padding: .35em .6em .25em; }
.contagem .en-hq .estouro { position: absolute; width: 60%; aspect-ratio: 1; }
.contagem .en-hq .estouro.pop { animation: ct-en-estourar .45s cubic-bezier(.2, 1.6, .4, 1) both; }
@keyframes ct-en-estourar { from { transform: scale(.15) rotate(-30deg); } to { transform: none; } }
.contagem .en-hq .estouro .som { fill: #111; transform: translate(3px, 3px); }
.contagem .en-hq .estouro .est { fill: var(--cor, #fff); stroke: #111; stroke-width: 2.4; stroke-linejoin: round; }
.contagem .en-hq .num { position: relative; z-index: 2; font: 400 calc(14 * var(--u))/1 "Bangers", var(--fonte, sans-serif); color: #fff; letter-spacing: .02em; padding-top: .08em;
  --o: calc(.5 * var(--u)); --e: calc(.36 * var(--u));
  text-shadow: var(--o) 0 #111, calc(-1 * var(--o)) 0 #111, 0 var(--o) #111, 0 calc(-1 * var(--o)) #111, var(--e) var(--e) #111,
    calc(-1 * var(--e)) var(--e) #111, var(--e) calc(-1 * var(--e)) #111, calc(-1 * var(--e)) calc(-1 * var(--e)) #111, var(--u) var(--u) 0 #E8412C;
  animation: ct-pulso 1s ease-out both; }
.contagem .en-hq .onoma { position: absolute; z-index: 3; font: 400 calc(5.2 * var(--u))/1 "Bangers", var(--fonte, sans-serif); color: #E8412C; letter-spacing: .04em;
  --o: calc(.32 * var(--u)); transform: rotate(var(--rot, 0deg));
  text-shadow: var(--o) 0 #111, calc(-1 * var(--o)) 0 #111, 0 var(--o) #111, 0 calc(-1 * var(--o)) #111, var(--o) var(--o) #111,
    calc(-1 * var(--o)) var(--o) #111, var(--o) calc(-1 * var(--o)) #111, calc(-1 * var(--o)) calc(-1 * var(--o)) #111, calc(.7 * var(--u)) calc(.7 * var(--u)) 0 #111; }
.contagem .en-hq .onoma.pop { animation: ct-en-onoma .4s cubic-bezier(.2, 1.7, .4, 1) both; }
@keyframes ct-en-onoma { from { transform: scale(0) rotate(calc(var(--rot, 0deg) - 25deg)); } to { transform: rotate(var(--rot, 0deg)); } }

/* 7 · Mangá: linhas de ação vibrando, o número em close e o numeral japonês no carimbo; no 3, 2, 1 os olhos se estreitam. */
.contagem .en-manga .pagina { width: calc(38 * var(--u)); max-width: 100%; display: grid; gap: calc(.9 * var(--u)); padding: calc(.9 * var(--u));
  background: #F7F5F0; box-shadow: 0 0 calc(3 * var(--u)) #0008; }
.contagem .en-manga .quadro { position: relative; overflow: hidden; border: calc(.45 * var(--u)) solid #111; }
.contagem .en-manga .tira { aspect-ratio: 4 / 1; background: radial-gradient(circle, #0002 30%, transparent 34%) 0 0 / calc(.7 * var(--u)) calc(.7 * var(--u)), #F7F5F0; }
.contagem .en-manga .tira svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.contagem .en-manga .principal { aspect-ratio: 16 / 10; display: grid; place-items: center; background: #F7F5F0; }
.contagem .en-manga .tom { position: absolute; inset: 0; background: radial-gradient(circle, #0005 32%, transparent 36%) 0 0 / calc(.8 * var(--u)) calc(.8 * var(--u));
  -webkit-mask: radial-gradient(ellipse at center, transparent 45%, #000 95%); mask: radial-gradient(ellipse at center, transparent 45%, #000 95%); }
.contagem .en-manga .focos { position: absolute; inset: 0; width: 100%; height: 100%; }
.contagem .en-manga .foco { fill: #111; }
.contagem .en-manga .foco.a { animation: ct-en-vaivem .14s steps(1) infinite; }
.contagem .en-manga .foco.b { animation: ct-en-vaivem .14s steps(1) -.07s infinite; }
@keyframes ct-en-vaivem { 50% { opacity: 0; } }
.contagem .en-manga .num { position: relative; font: 400 calc(14 * var(--u))/1 "Dela Gothic One", var(--fonte, sans-serif); color: #111;
  --o: calc(.8 * var(--u)); --e: calc(.57 * var(--u)); --c: #F7F5F0;
  text-shadow: var(--o) 0 var(--c), calc(-1 * var(--o)) 0 var(--c), 0 var(--o) var(--c), 0 calc(-1 * var(--o)) var(--c), var(--e) var(--e) var(--c),
    calc(-1 * var(--e)) var(--e) var(--c), var(--e) calc(-1 * var(--e)) var(--c), calc(-1 * var(--e)) calc(-1 * var(--e)) var(--c);
  animation: ct-en-zoom .45s cubic-bezier(.15, 1.1, .3, 1) both; }
@keyframes ct-en-zoom { from { transform: scale(2.4); opacity: 0; } 40% { opacity: 1; } to { transform: scale(1); } }
.contagem .en-manga .hanko { position: absolute; right: 5%; bottom: 8%; width: calc(5.4 * var(--u)); aspect-ratio: 1; display: grid; place-items: center;
  background: #C8102E; color: #F7F5F0; border-radius: calc(.6 * var(--u)); font: 400 calc(3.4 * var(--u))/1 "Dela Gothic One", serif; rotate: -6deg; }
.contagem .en-manga .hanko.carimba { animation: ct-en-carimbo .35s cubic-bezier(.3, 1.6, .5, 1) both; }
@keyframes ct-en-carimbo { from { transform: scale(1.8); opacity: 0; } to { transform: none; opacity: 1; } }
.contagem .en-manga .sfx { position: absolute; left: 6%; top: 8%; font: 400 calc(5 * var(--u))/1 "Dela Gothic One", var(--fonte, sans-serif); color: #F7F5F0; rotate: -10deg; opacity: 0;
  --o: calc(.4 * var(--u)); text-shadow: var(--o) 0 #8E4FC9, calc(-1 * var(--o)) 0 #8E4FC9, 0 var(--o) #8E4FC9, 0 calc(-1 * var(--o)) #8E4FC9; }
.contagem.fim .en-manga .sfx { animation: ct-grito .5s cubic-bezier(.2, 1.6, .4, 1) both; }
.contagem.ultimos .en-manga .principal { animation: ct-en-sacudir .16s linear infinite; }
.contagem.fim .en-manga .principal { background: #111; animation: none; }
.contagem.fim .en-manga .foco { fill: #F7F5F0; }
.contagem.fim .en-manga .tom { opacity: 0; }
.contagem.fim .en-manga .num { color: #F7F5F0; --c: #111; }
.contagem .en-manga .olho-in, .contagem .en-manga .sobrancelha { transition: transform .25s ease-out; }
.contagem.ultimos .en-manga .olho-in { transform: scaleY(.62); }
.contagem.ultimos .en-manga .sobrancelha { transform: translateY(3px) rotate(4deg); }
.contagem.fim .en-manga .olho-in { transform: scaleY(1.06); }
.contagem.fim .en-manga .sobrancelha { transform: translateY(-2px); }

/* 8 · Cartas: uma carta dada por segundo, do 7 ao Ás; no zero, o curinga. */
.contagem .en-cartas svg { width: calc(50 * var(--u)); }
.contagem .en-cartas .num { font-size: calc(10 * var(--u)); text-shadow: 0 0 calc(2 * var(--u)) #8E4FC9, 0 0 var(--u) #000; animation: ct-pulso 1s ease-out both; }
.contagem .en-cartas .borda-mesa { fill: #3a2416; } .contagem .en-cartas .feltro { fill: #0f5e3c; }
.contagem .en-cartas .risco { fill: none; stroke: #ffffff1c; stroke-width: .8; }
.contagem .en-cartas .face { fill: #FBFAF7; stroke: #0003; stroke-width: .4; }
.contagem .en-cartas .rank { font: 800 6.6px var(--fonte, sans-serif); text-anchor: middle; dominant-baseline: central; }
.contagem .en-cartas .monte { filter: drop-shadow(0 1px 1px #0008); }
.contagem .en-cartas .carta { display: none; transform: translate(var(--x), var(--y)) rotate(var(--g)); filter: drop-shadow(0 1px 1.2px #0008); }
.contagem .en-cartas .carta.dada { display: inline; }
.contagem .en-cartas .carta.nova { animation: ct-en-dar .42s cubic-bezier(.2, .8, .3, 1) both; }
@keyframes ct-en-dar { from { transform: translate(34px, 58px) rotate(-30deg); } }
.contagem .en-cartas .curinga { display: none; transform: translate(138px, 52px) scale(1.14); filter: drop-shadow(0 0 4px #FFD100); }
.contagem.fim .en-cartas .curinga { display: inline; animation: ct-en-curinga .6s cubic-bezier(.2, 1.3, .4, 1) both; }
@keyframes ct-en-curinga { from { transform: translate(34px, 58px) rotate(-40deg) scale(.9); } }
.contagem .en-cartas .cur { font: 800 3.4px var(--fonte, sans-serif); fill: #8E4FC9; text-anchor: middle; letter-spacing: .14em; }

/* 9 · Fliperama: a tela de “Continuar?” do fliperama; no zero, entra a ficha e é START. */
.contagem .en-arc .crt { position: relative; width: calc(40 * var(--u)); max-width: 100%; aspect-ratio: 4 / 3; border-radius: calc(2.4 * var(--u)); overflow: hidden;
  background: radial-gradient(ellipse at center, #1a1328 0%, #07060b 75%);
  box-shadow: 0 0 0 calc(.9 * var(--u)) #1b1922, 0 0 0 calc(1.3 * var(--u)) #8E4FC9, 0 0 calc(5 * var(--u)) #8E4FC955;
  display: grid; grid-template-rows: auto auto 1fr auto auto; justify-items: center; align-items: center;
  padding: calc(1.6 * var(--u)) calc(1.8 * var(--u)); font-family: "Press Start 2P", var(--mono, monospace); color: #F4F4F2; text-align: center; }
.contagem .en-arc .placar { justify-self: stretch; display: flex; justify-content: space-between; gap: var(--u); font-size: calc(1.1 * var(--u)); color: #00E5FF; }
.contagem .en-arc .placar .hi { color: #E8412C; }
.contagem .en-arc .placar b { color: #F4F4F2; font-weight: 400; }
.contagem .en-arc .pergunta, .contagem .en-arc .start { grid-row: 2; grid-column: 1; font-size: calc(2.3 * var(--u)); color: #FFD100; margin-top: calc(1.2 * var(--u)); }
.contagem .en-arc .start { display: none; color: #3DDC84; animation: ct-en-piscar .25s steps(1) infinite; }
.contagem .en-arc .num { grid-row: 3; font: 400 calc(10 * var(--u))/1 "Press Start 2P", var(--mono, monospace); text-shadow: calc(.6 * var(--u)) calc(.6 * var(--u)) 0 #8E4FC9;
  animation: ct-pulso 1s steps(4, end) both; }
.contagem .en-arc .robo { grid-row: 4; width: calc(6 * var(--u)); shape-rendering: crispEdges; }
.contagem .en-arc .ficha { grid-row: 5; display: grid; gap: calc(.7 * var(--u)); font-size: calc(1.15 * var(--u)); }
.contagem .en-arc .insira { animation: ct-en-piscar 1s steps(1) infinite; }
.contagem .en-arc .cred1, .contagem .en-arc .feliz { display: none; }
.contagem.fim .en-arc .cred0, .contagem.fim .en-arc .pergunta, .contagem.fim .en-arc .insira, .contagem.fim .en-arc .ko { display: none; }
.contagem.fim .en-arc .start, .contagem.fim .en-arc .cred1 { display: block; }
.contagem.fim .en-arc .feliz { display: inline; }
.contagem.fim .en-arc .robo { animation: ct-en-pulinho .3s steps(2) infinite alternate; }
@keyframes ct-en-pulinho { to { transform: translateY(calc(-1.2 * var(--u))); } }
.contagem .en-arc .scan { position: absolute; inset: 0; pointer-events: none; background: repeating-linear-gradient(180deg, transparent 0 2px, #0000004d 2px 4px);
  animation: ct-en-tremeluz .1s steps(2) infinite; }
@keyframes ct-en-tremeluz { 50% { opacity: .82; } }

/* 10 · Nave: a nave derruba um disco voador por segundo; no zero, salta para a próxima fase. */
.contagem .en-nave svg { width: calc(42 * var(--u)); shape-rendering: crispEdges; }
.contagem .en-nave .num { font-size: calc(10 * var(--u)); text-shadow: 0 0 calc(2 * var(--u)) #00A3E0, 0 0 var(--u) #000; animation: ct-pulso 1s ease-out both; }
.contagem .en-nave .espaco { fill: #05040a; stroke: #2A2D33; stroke-width: 1; }
.contagem .en-nave .estrelas.lentas { animation: ct-en-estrelas 7s linear infinite; }
.contagem .en-nave .estrelas.rapidas { animation: ct-en-estrelas 2.4s linear infinite; }
@keyframes ct-en-estrelas { to { transform: translateY(112px); } }
.contagem .en-nave .estrelas rect { transform-box: fill-box; transform-origin: center; transition: transform .3s; }
.contagem.fim .en-nave .estrelas rect { transform: scaleY(6); }
.contagem .en-nave .hud { font: 400 4.2px "Press Start 2P", var(--mono, monospace); fill: #F4F4F2; }
.contagem .en-nave .flutua { animation: ct-en-flutuar 1.4s ease-in-out infinite alternate; }
@keyframes ct-en-flutuar { from { transform: translateY(-1.2px); } to { transform: translateY(1.2px); } }
.contagem .en-nave .luz { animation: ct-en-piscar .5s steps(1) infinite; }
.contagem .en-nave .disco.abatido { display: none; }
.contagem .en-nave .disco.alvo { animation: ct-en-sumir .01s linear .46s both; }
@keyframes ct-en-sumir { to { opacity: 0; } }
.contagem .en-nave .nave { transition: transform .28s cubic-bezier(.3, .7, .4, 1); }
.contagem .en-nave .chama { animation: ct-en-piscar .12s steps(1) infinite; }
.contagem .en-nave .laser { fill: #FFD100; transform-box: fill-box; transform-origin: 50% 100%; animation: ct-en-laser .2s linear .3s both; }
@keyframes ct-en-laser { 0% { transform: scaleY(0); opacity: 1; } 50% { transform: scaleY(1); opacity: 1; } 100% { transform: scaleY(1); opacity: 0; } }
.contagem .en-nave .faisca { animation: ct-en-explodir .55s ease-out .45s both; }
@keyframes ct-en-explodir { 0% { opacity: 0; transform: none; } 1% { opacity: 1; } 100% { opacity: 0; transform: translate(var(--dx), var(--dy)); } }
.contagem .en-nave .clarao { fill: #fff; transform-box: fill-box; transform-origin: center; animation: ct-en-clarao .25s ease-out .45s both; }
@keyframes ct-en-clarao { 0% { opacity: 0; transform: scale(.2); } 10% { opacity: 1; } 100% { opacity: 0; transform: scale(1.8); } }
.contagem.fim .en-nave .sobe { animation: ct-en-warp .7s cubic-bezier(.6, 0, .9, .4) .1s both; }
@keyframes ct-en-warp { 30% { transform: translateY(6px); } 100% { transform: translateY(-140px) scaleY(1.8); } }
.contagem .en-nave .grito { font: 400 calc(2 * var(--u))/1.2 "Press Start 2P", var(--mono, monospace); text-transform: none; }


/* Geografia (2026-11-26): onze cenas, uma sorteada a cada contagem, sem olhar o subtema: o globo (acima) e dez com som
   próprio (arena-suspense.js): painel do aeroporto, bússola, monumentos à noite, bandeiras, idiomas, vulcão, Everest,
   Rio São Francisco, farol e biomas do Brasil. As fontes Noto (idiomas) são carregadas por instalarCss(). */
.contagem .ge svg { display: block; overflow: visible; height: auto; max-width: 100%; }
.contagem .ge .grito { font: 900 calc(3.2 * var(--u))/1 var(--fonte, sans-serif); color: #FFD100; letter-spacing: .06em; text-transform: uppercase;
                       opacity: 0; text-shadow: 0 0 calc(1.5 * var(--u)) #000; }
.contagem.fim .ge .grito { animation: ct-grito .6s cubic-bezier(.2, 1.6, .4, 1) both; }

/* Geografia: o número padrão das cenas, com o brilho verde do tema. */
.contagem .ge .num { font-size: calc(10 * var(--u)); text-shadow: 0 0 calc(2 * var(--u)) #00A84F, 0 0 var(--u) #000; animation: ct-pulso 1s ease-out both; }

/* 1 · Painel do aeroporto: as letras viram (split-flap) a cada segundo e o voo de cima embarca. */
.contagem .ge-aero .painel { width: max-content; max-width: 100%; background: #0c0d10; border-radius: var(--u); padding: var(--u);
  display: grid; gap: calc(.45 * var(--u)); box-shadow: 0 0 0 calc(.25 * var(--u)) #2A2D33, 0 var(--u) calc(3 * var(--u)) #000a; }
.contagem .ge-aero .topo-painel { display: flex; align-items: center; gap: var(--u); padding-bottom: calc(.4 * var(--u)); }
.contagem .ge-aero .topo-painel svg { width: calc(3 * var(--u)); fill: #FFD100; }
.contagem .ge-aero .topo-painel b { font: 800 calc(2.2 * var(--u))/1 var(--fonte, sans-serif); letter-spacing: .14em; color: #FFD100; flex: 1; }
.contagem .ge-aero .topo-painel small { font: 700 calc(1.1 * var(--u))/1.2 var(--fonte, sans-serif); color: #A0A4AB; letter-spacing: .1em; text-transform: uppercase; text-align: right; }
.contagem .ge-aero .placa { display: flex; gap: calc(.3 * var(--u)); }
.contagem .ge-aero .placa .num { position: relative; display: grid; place-items: center; width: calc(6 * var(--u)); height: calc(8 * var(--u));
  background: #1b1d22; border-radius: calc(.5 * var(--u)); font: 600 calc(6.4 * var(--u))/1 var(--mono, monospace); color: #F4F4F2; text-shadow: none;
  animation: ct-ge-placa .3s cubic-bezier(.3, 1.4, .5, 1) both; }
.contagem .ge-aero .placa .num::after { content: ""; position: absolute; left: 0; right: 0; top: 50%; height: calc(.2 * var(--u)); background: #000; }
@keyframes ct-ge-placa { from { transform: scaleY(.1); filter: brightness(1.8); } to { transform: none; } }
.contagem .ge-aero .linha-voo { display: flex; gap: calc(.9 * var(--u)); }
.contagem .ge-aero .campo { display: flex; gap: calc(.15 * var(--u)); }
.contagem .ge-aero .cab { display: flex; gap: calc(.9 * var(--u)); font: 700 calc(1 * var(--u))/1 var(--fonte, sans-serif); letter-spacing: .12em; color: #A0A4AB; }
.contagem .ge-aero .cab span:nth-child(1) { width: calc(10 * 1.85 * var(--u) - .15 * var(--u)); }
.contagem .ge-aero .cab span:nth-child(2) { width: calc(3 * 1.85 * var(--u) - .15 * var(--u)); }
.contagem .ge-aero .cel { position: relative; display: grid; place-items: center; width: calc(1.7 * var(--u)); height: calc(2.5 * var(--u));
  background: #1b1d22; border-radius: calc(.2 * var(--u)); font: 600 calc(1.7 * var(--u))/1 var(--mono, monospace); color: #F4F4F2; }
.contagem .ge-aero .cel::after { content: ""; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: #000c; }
.contagem .ge-aero .cel.va { animation: ct-ge-flap-a .09s ease-out; } .contagem .ge-aero .cel.vb { animation: ct-ge-flap-b .09s ease-out; }
@keyframes ct-ge-flap-a { from { transform: scaleY(.15); filter: brightness(1.7); } }
@keyframes ct-ge-flap-b { from { transform: scaleY(.15); filter: brightness(1.7); } }
.contagem .ge-aero .embarque .situacao .cel { color: #3DDC84; }
.contagem .ge-aero .embarque .situacao { animation: ct-en-piscar 1s steps(1) infinite; }
.contagem.fim .ge-aero .embarque .situacao { animation-duration: .3s; }

/* 2 · Bússola: a agulha procura um rumo a cada segundo (em português: L de leste, O de oeste) e acha o Norte no zero. */
.contagem .ge-bus .linha { display: flex; align-items: center; gap: calc(2.4 * var(--u)); }
.contagem .ge-bus svg { width: calc(32 * var(--u)); filter: drop-shadow(0 var(--u) calc(2 * var(--u)) #000a); }
.contagem .ge-bus .numbox { display: grid; justify-items: start; gap: calc(.4 * var(--u)); }
.contagem .ge-bus .num { font-size: calc(13 * var(--u)); }
.contagem .ge-bus .rumo { font: 800 calc(2.6 * var(--u))/1 var(--fonte, sans-serif); color: #00A84F; text-shadow: 0 0 var(--u) #000; }
.contagem .ge-bus .rumo small { font: 600 calc(1.8 * var(--u))/1 var(--mono, monospace); color: #A0A4AB; }
.contagem.fim .ge-bus .rumo { color: #FFD100; }
.contagem .ge-bus .aro1 { fill: #9c7425; } .contagem .ge-bus .aro2 { fill: #d9b25a; } .contagem .ge-bus .face { fill: #F1E6D0; }
.contagem .ge-bus .marca { stroke: #2a2730; stroke-width: .6; } .contagem .ge-bus .marca.forte { stroke-width: 1.1; }
.contagem .ge-bus .letra { font: 800 9px var(--fonte, sans-serif); fill: #2a2730; text-anchor: middle; dominant-baseline: central; }
.contagem .ge-bus .letra.n { fill: #E8412C; }
.contagem .ge-bus .letra.p { font-size: 5px; font-weight: 700; fill: #6b6f78; }
.contagem .ge-bus .rosa-a { fill: #0b6b39; } .contagem .ge-bus .rosa-b { fill: #00A84F; }
.contagem .ge-bus .agulha { transition: transform .9s cubic-bezier(.3, 1.7, .4, 1); }
.contagem .ge-bus .norte { fill: #E8412C; } .contagem .ge-bus .sul { fill: #F4F4F2; stroke: #2a2730; stroke-width: .5; }
.contagem .ge-bus .pino { fill: #d9b25a; stroke: #9c7425; stroke-width: .8; }
.contagem .ge-bus .vidro { fill: #ffffff14; }
.contagem.fim .ge-bus .letra.n { filter: drop-shadow(0 0 2px #E8412C); }

/* 3 · Monumentos à noite: um monumento se acende por segundo; no zero, fogos. */
.contagem .ge-mon svg { width: calc(50 * var(--u)); }
.contagem .ge-mon .estrela { fill: #F4F4F2; animation: ct-en-piscar 2.4s ease-in-out infinite; }
.contagem .ge-mon .chao { fill: #0a0f1f; } .contagem .ge-mon .morro { fill: #13241c; }
.contagem .ge-mon .facho { fill: url(#ct-ge-holofote); opacity: 0; transition: opacity .6s; }
.contagem .ge-mon .sil { fill: #2c3a61; transition: fill .5s, filter .5s; }
.contagem .ge-mon .det { fill: #1a2442; }
.contagem .ge-mon .acesa .facho { opacity: 1; }
.contagem .ge-mon .acesa .sil { fill: #F2C46B; filter: drop-shadow(0 0 1.5px #F2C46B); }
.contagem .ge-mon .acesa .det { fill: #a8742a; }
.contagem .ge-mon .acesa .relogio { fill: #FFF6D5; }
.contagem .ge-mon .acesa.branca .sil { fill: #FFF1D6; filter: drop-shadow(0 0 1.5px #FFF1D6); }
.contagem .ge-mon .onde { font: 700 calc(1.7 * var(--u))/1.2 var(--fonte, sans-serif); color: #F4F4F2; text-shadow: 0 0 var(--u) #000; }
.contagem .ge-mon .onde b { color: #F2C46B; }
.contagem .ge-mon .faisca { opacity: 0; }
.contagem.fim .ge-mon .faisca { animation: ct-ge-fogos 1.2s cubic-bezier(.2, .7, .3, 1) var(--d) both; }
@keyframes ct-ge-fogos { 0% { opacity: 1; transform: none; } 70% { opacity: 1; } 100% { opacity: 0; transform: translate(var(--dx), calc(var(--dy) + 6px)); } }

/* 4 · Bandeiras: uma bandeira hasteada por segundo, de fora para dentro; a do Brasil, no mastro do meio, no 1. */
.contagem .ge-band svg { width: calc(50 * var(--u)); }
.contagem .ge-band .chao { fill: #1b1d22; }
.contagem .ge-band .haste { stroke: #cfd3da; stroke-width: 1.3; stroke-linecap: round; }
.contagem .ge-band .ponta { fill: #FFD100; }
.contagem .ge-band .sobe { transform: translateY(46px); opacity: 0; transition: transform .8s cubic-bezier(.3, .8, .4, 1), opacity .15s; }
.contagem .ge-band .hasteada .sobe { transform: none; opacity: 1; }
.contagem .ge-band .tremula { animation: ct-ge-tremular 1.1s ease-in-out infinite alternate; }
@keyframes ct-ge-tremular { from { transform: skewY(-4deg) scaleX(.95); } to { transform: skewY(3deg) scaleX(1); } }
.contagem .ge-band .pais { font: 700 5.6px var(--fonte, sans-serif); fill: #A0A4AB; text-anchor: middle; opacity: 0; transition: opacity .4s .5s; }
.contagem .ge-band .hasteada .pais { opacity: 1; }
.contagem .ge-band .brasil .pais { fill: #FFD100; font-size: 6.4px; }
.contagem.fim .ge-band .tremula { animation-duration: .35s; }
.contagem .ge-band .confete { opacity: 0; }
.contagem.fim .ge-band .confete { animation: ct-ge-confete 1.4s ease-in var(--d) both; }
@keyframes ct-ge-confete { 0% { opacity: 1; transform: translate(0, 0) rotate(0); } 100% { opacity: 0; transform: translate(var(--dx), 110px) rotate(540deg); } }

/* 5 · Idiomas: um "olá" por segundo, em sete línguas e escritas; no zero, em português. */
.contagem .ge-idi .roda { position: relative; width: calc(48 * var(--u)); max-width: 100%; aspect-ratio: 48 / 32; }
.contagem .ge-idi .globinho { position: absolute; left: 50%; top: 50%; width: calc(12 * var(--u)); aspect-ratio: 1; translate: -50% -50%; }
.contagem .ge-idi .globinho svg { width: 100%; height: 100%; }
.contagem .ge-idi .mar { fill: #04170c; stroke: #00A84F; stroke-width: 2; }
.contagem .ge-idi .mer { fill: none; stroke: #00A84F; stroke-width: 1; opacity: .5; }
.contagem .ge-idi .num { position: absolute; inset: 0; display: grid; place-items: center; font-size: calc(9 * var(--u)); }
.contagem .ge-idi .balao { position: absolute; translate: -50% -50%; scale: 0; background: #F4F4F2; color: #111; border-radius: var(--u);
  padding: calc(.5 * var(--u)) calc(1 * var(--u)) calc(.6 * var(--u)); text-align: center; white-space: nowrap;
  box-shadow: 0 calc(.4 * var(--u)) var(--u) #0008; transition: scale .35s cubic-bezier(.3, 1.7, .5, 1); }
.contagem .ge-idi .balao b { display: block; font: 700 calc(2.9 * var(--u))/1.3 "Noto Sans", var(--fonte, sans-serif); }
.contagem .ge-idi .balao[lang="ja"] b { font-family: "Noto Sans JP", sans-serif; }
.contagem .ge-idi .balao[lang="zh"] b { font-family: "Noto Sans SC", sans-serif; }
.contagem .ge-idi .balao[lang="ar"] b { font-family: "Noto Sans Arabic", sans-serif; }
.contagem .ge-idi .balao[lang="hi"] b { font-family: "Noto Sans Devanagari", sans-serif; }
.contagem .ge-idi .balao small { display: block; font: 800 calc(1.1 * var(--u))/1 var(--fonte, sans-serif); color: #00843d; letter-spacing: .12em; text-transform: uppercase; }
.contagem .ge-idi .balao.dito { scale: 1; }
.contagem .ge-idi .balao.agora { background: #FFD100; }
.contagem.fim .ge-idi .balao.dito { animation: ct-ge-saltinho .5s ease-in-out var(--d) 2 alternate; }
@keyframes ct-ge-saltinho { to { translate: -50% -70%; } }
.contagem .ge-idi .grito { font-size: calc(4 * var(--u)); text-transform: none; color: #00A84F; }

/* 6 · Vulcão: a lava desce as encostas, a fumaça engrossa e o chão treme nos três últimos; no zero, a erupção. */
.contagem .ge-vul svg { width: calc(46 * var(--u)); }
.contagem.ultimos .ge-vul svg { animation: ct-en-sacudir .18s linear infinite; }
.contagem .ge-vul .serra { fill: #24161a; }
.contagem .ge-vul .cone { fill: #4a2e22; } .contagem .ge-vul .estrato { fill: none; stroke: #3a2219; stroke-width: 1.2; }
.contagem .ge-vul .brasa { opacity: var(--brasa, .2); transition: opacity .8s; }
.contagem .ge-vul .cratera { fill: #FF6A00; filter: drop-shadow(0 0 3px #FF6A00); }
.contagem .ge-vul .corrida { fill: none; stroke: #FF6A00; stroke-width: 2.4; stroke-linecap: round; stroke-dasharray: 1 2; transition: stroke-dashoffset 1s linear;
  filter: drop-shadow(0 0 1.5px #FF3B00); }
.contagem .ge-vul .fumo { fill: #6b6570; opacity: 0; transform-box: fill-box; transform-origin: center; animation: ct-ge-fumo 2.6s ease-out var(--d) infinite; }
@keyframes ct-ge-fumo { 0% { opacity: 0; transform: translate(0, 0) scale(.4); } 15% { opacity: .8; } 100% { opacity: 0; transform: translate(var(--dx), -38px) scale(2.2); } }
.contagem.ultimos .ge-vul .fumo { fill: #3a3540; animation-duration: 1.8s; }
.contagem .ge-vul .bomba { opacity: 0; }
.contagem.fim .ge-vul .bomba { animation: ct-ge-bomba 1.3s var(--d) both; }
@keyframes ct-ge-bomba { 0% { opacity: 1; transform: none; animation-timing-function: cubic-bezier(.2, .7, .4, 1); }
  45% { transform: translate(calc(var(--dx) * .5), calc(var(--up) * -1)); animation-timing-function: cubic-bezier(.6, 0, .9, .5); }
  85% { opacity: 1; } 100% { opacity: 0; transform: translate(var(--dx), 60px); } }
.contagem .ge-vul .jorro { fill: #FFB347; opacity: 0; transform-box: fill-box; transform-origin: 50% 100%; }
.contagem.fim .ge-vul .jorro { animation: ct-ge-jorro 1.2s ease-out both; }
@keyframes ct-ge-jorro { 0% { opacity: 0; transform: scaleY(0); } 15% { opacity: 1; transform: scaleY(1.1); } 100% { opacity: 0; transform: scaleY(.6); } }
.contagem .ge-vul .grito { color: #FF6A00; }

/* 7 · Everest: o alpinista sobe de acampamento em acampamento; no zero, o cume, a 8.849 m. */
.contagem .ge-eve svg { width: calc(46 * var(--u)); }
.contagem .ge-eve .longe { fill: #6b7d99; } .contagem .ge-eve .neve { fill: #F4F4F2; } .contagem .ge-eve .rocha { fill: #4a5568; }
.contagem .ge-eve .sombra-neve { fill: #c9d3e3; }
.contagem .ge-eve .rota { fill: none; stroke: #FFD100; stroke-width: .9; stroke-dasharray: 2 2; opacity: .7; }
.contagem .ge-eve .tenda { fill: #F7941D; } .contagem .ge-eve .marco { fill: #FFD100; }
.contagem .ge-eve .alpinista { transition: transform .8s ease-in-out; }
.contagem .ge-eve .passo { animation: ct-ge-passo .25s ease-in-out infinite alternate; }
@keyframes ct-ge-passo { to { transform: translateY(-.7px); } }
.contagem .ge-eve .bandeira { opacity: 0; transform-box: fill-box; transform-origin: 0 100%; }
.contagem.fim .ge-eve .bandeira { opacity: 1; animation: ct-grito .5s cubic-bezier(.2, 1.6, .4, 1) both; }
.contagem .ge-eve .floco { fill: #fff; opacity: .5; animation: ct-ge-vento 1.1s linear var(--d) infinite; }
@keyframes ct-ge-vento { from { transform: translateX(30px); } to { transform: translateX(-80px); } }
.contagem.ultimos .ge-eve .floco { opacity: .9; animation-duration: .6s; }
.contagem .ge-eve .altitude { display: flex; gap: var(--u); align-items: baseline; font: 700 calc(1.7 * var(--u))/1.2 var(--fonte, sans-serif); color: #F4F4F2;
  background: #101114; border: calc(.2 * var(--u)) solid #2A2D33; border-radius: 99px; padding: calc(.4 * var(--u)) calc(1.4 * var(--u)); }
.contagem .ge-eve .altitude b { font: 700 calc(2 * var(--u))/1 var(--mono, monospace); color: #00A84F; }
.contagem.fim .ge-eve .altitude b { color: #FFD100; }

/* 8 · Rio São Francisco: a água corre da nascente, na Serra da Canastra, até a foz, entre Alagoas e Sergipe. */
.contagem .ge-rio svg { width: calc(46 * var(--u)); }
.contagem .ge-rio .terra { fill: #2d5a3a; } .contagem .ge-rio .seco { fill: #8a7a45; opacity: .5; }
.contagem .ge-rio .sertao { font: italic 700 5px var(--fonte, sans-serif); fill: #F1E6D0; opacity: .7; text-anchor: middle; letter-spacing: .2em; }
.contagem .ge-rio .mar { fill: #0d3b66; } .contagem .ge-rio .onda { fill: none; stroke: #2d6a9f; stroke-width: .8; }
.contagem .ge-rio .serra { fill: #6b5a3a; } .contagem .ge-rio .leito { fill: none; stroke: #1b3a26; stroke-width: 3.2; stroke-linecap: round; stroke-linejoin: round; }
.contagem .ge-rio .seg { fill: none; stroke: #3fa9f5; stroke-width: 2.6; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 1 2; stroke-dashoffset: 1; }
.contagem .ge-rio .seg.cheio { stroke-dashoffset: 0; }
.contagem .ge-rio .seg.corre { animation: ct-ge-correr 1s linear both; }
@keyframes ct-ge-correr { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
.contagem .ge-rio .cidade { fill: #1b1d22; stroke: #F4F4F2; stroke-width: .8; transition: fill .3s; }
.contagem .ge-rio .cidade.vista { fill: #FFD100; }
.contagem .ge-rio .rotulo { font: 700 4.4px var(--fonte, sans-serif); fill: #F4F4F2; opacity: 0; transition: opacity .4s; paint-order: stroke; stroke: #0008; stroke-width: 1.4px; }
.contagem .ge-rio .rotulo.visto { opacity: 1; }
.contagem .ge-rio .anel { fill: none; stroke: #3fa9f5; stroke-width: 1; opacity: 0; transform-box: fill-box; transform-origin: center; }
.contagem.fim .ge-rio .anel { animation: ct-ge-anel 1.4s ease-out var(--d) infinite; }
@keyframes ct-ge-anel { from { opacity: 1; transform: scale(.3); } to { opacity: 0; transform: scale(2.4); } }
.contagem .ge-rio .ondinha { animation: ct-ge-mar 3s linear infinite; }
@keyframes ct-ge-mar { to { transform: translateY(6px); } }
.contagem .ge-rio .ponto { display: flex; gap: var(--u); align-items: baseline; font: 700 calc(1.7 * var(--u))/1.2 var(--fonte, sans-serif); color: #F4F4F2;
  background: #101114; border: calc(.2 * var(--u)) solid #2A2D33; border-radius: 99px; padding: calc(.4 * var(--u)) calc(1.4 * var(--u)); }
.contagem .ge-rio .ponto small { color: #3fa9f5; font-size: calc(1.3 * var(--u)); text-transform: uppercase; letter-spacing: .1em; }

/* 9 · Farol: o facho gira e lampeja a cada segundo; o navio se aproxima; no zero, a buzina de nevoeiro. */
.contagem .ge-far svg { width: calc(46 * var(--u)); }
.contagem .ge-far .astro { fill: #F4F4F2; animation: ct-en-piscar 3s ease-in-out infinite; }
.contagem .ge-far .agua { fill: #0b2340; }
.contagem .ge-far .vaga { fill: none; stroke-width: 1.1; animation: ct-ge-vaga 2.4s linear infinite; }
.contagem .ge-far .vaga.v1 { stroke: #1f4d7a; } .contagem .ge-far .vaga.v2 { stroke: #2d6a9f; animation-duration: 3.4s; animation-direction: reverse; }
@keyframes ct-ge-vaga { to { transform: translateX(-20px); } }
.contagem .ge-far .rocha { fill: #121a26; }
.contagem .ge-far .faixa-v { fill: #E8412C; } .contagem .ge-far .faixa-b { fill: #F4F4F2; }
.contagem .ge-far .galeria { fill: #2a2730; } .contagem .ge-far .teto { fill: #a3261b; }
.contagem .ge-far .lanterna { fill: #FFE9A8; filter: drop-shadow(0 0 3px #FFE9A8); }
.contagem .ge-far .facho { animation: ct-ge-facho 1s linear both; }
@keyframes ct-ge-facho { 0% { transform: scaleX(1); } 25% { transform: scaleX(0); } 50% { transform: scaleX(-1); } 75% { transform: scaleX(0); } 100% { transform: scaleX(1); } }
.contagem .ge-far .clarao { fill: #FFF6D5; opacity: 0; transform-box: fill-box; transform-origin: center; animation: ct-ge-clarao 1s linear both; }
@keyframes ct-ge-clarao { 0%, 15%, 38%, 100% { opacity: 0; transform: scale(.4); } 25% { opacity: .95; transform: scale(1.6); } }
.contagem .ge-far .navio { transition: transform 1s ease-in-out; }
.contagem .ge-far .balanco { animation: ct-ge-balanco 1.6s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: 50% 100%; }
@keyframes ct-ge-balanco { from { transform: rotate(-3deg); } to { transform: rotate(3deg); } }
.contagem .ge-far .casco { fill: #1b1d22; } .contagem .ge-far .ponte { fill: #2a2730; } .contagem .ge-far .janela { fill: #FFD100; }
.contagem .ge-far .vapor { fill: #A0A4AB; opacity: 0; transform-box: fill-box; transform-origin: center; }
.contagem.fim .ge-far .vapor { animation: ct-ge-fumo 1.4s ease-out var(--d) both; }

/* 10 · Biomas do Brasil: os seis biomas e o Sistema Costeiro-Marinho (IBGE, 2019), um por segundo; no zero, todos juntos. */
.contagem .ge-bio .janela { position: relative; width: calc(46 * var(--u)); max-width: 100%; aspect-ratio: 2 / 1; overflow: hidden; border-radius: var(--u);
  box-shadow: 0 0 0 calc(.3 * var(--u)) #00A84F, 0 var(--u) calc(3 * var(--u)) #000a; background: #000; }
.contagem .ge-bio .vista { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; transition: opacity .45s, clip-path .6s ease-in-out; }
.contagem .ge-bio .vista.atual { opacity: 1; }
.contagem.fim .ge-bio .vista { opacity: 1; clip-path: inset(0 calc(100% - (var(--k) + 1) * 100% / 7) 0 calc(var(--k) * 100% / 7)); }
.contagem .ge-bio .nome { position: absolute; left: calc(1.4 * var(--u)); bottom: calc(1.1 * var(--u)); font: 900 calc(3.4 * var(--u))/1 var(--fonte, sans-serif); color: #fff;
  text-shadow: 0 0 calc(1.2 * var(--u)) #000, 0 0 calc(.4 * var(--u)) #000; }
.contagem .ge-bio .nome small { display: block; font: 700 calc(1.2 * var(--u))/1.4 var(--fonte, sans-serif); letter-spacing: .1em; text-transform: uppercase; color: #FFD100; }
.contagem .ge-bio .nome.troca { animation: ct-ge-nome .45s ease-out both; }
@keyframes ct-ge-nome { from { opacity: 0; transform: translateY(40%); } }
.contagem .ge-bio .num { font-size: calc(9 * var(--u)); }
.contagem .ge-bio .agua-anim { animation: ct-ge-vaga 3s linear infinite; }
.contagem .ge-bio .ave { animation: ct-ge-ave 3s linear infinite; }
@keyframes ct-ge-ave { from { transform: translateX(-30px); } to { transform: translateX(230px); } }
.contagem .ge-bio .bico { animation: ct-ge-bico .3s steps(2) infinite; }
@keyframes ct-ge-bico { 50% { transform: translateY(-.6px); } }

@media (prefers-reduced-motion: reduce) {
  .contagem *, .contagem *::before, .contagem *::after { animation: none !important; }
  .contagem .nat .caule, .contagem .arte .num { stroke-dashoffset: 0; }
  .contagem .arte .num { fill-opacity: 1; }
}`;

// As fontes das cenas de Entretenimento (quadrinhos, claquete, fliperama e nave, mangá) e de Geografia (idiomas), além
// da Overpass das páginas; as japonesas e a chinesa vêm só com os caracteres usados.
const FONTES = [
  "https://fonts.googleapis.com/css2?family=Bangers&family=Permanent+Marker&family=Press+Start+2P&display=swap",
  "https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap&text=0123456789%E4%B8%83%E5%85%AD%E4%BA%94%E5%9B%9B%E4%B8%89%E4%BA%8C%E4%B8%80%E9%9B%B6%E3%83%89%E3%83%B3%21",
  // Geografia, cena dos idiomas: o russo, o árabe e o hindi; o japonês e o chinês só com os caracteres usados.
  "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Noto+Sans+Arabic:wght@700&family=Noto+Sans+Devanagari:wght@700&display=swap",
  "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&family=Noto+Sans+SC:wght@700&display=swap&text=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF%E4%BD%A0%E5%A5%BD",
];
function instalarCss() {
  if (document.getElementById("css-contagem")) return;
  const s = document.createElement("style");
  s.id = "css-contagem";
  s.textContent = CSS;
  document.head.append(s);
  for (const href of FONTES) {
    const l = document.createElement("link");
    l.rel = "stylesheet"; l.href = href;
    document.head.append(l);
  }
}

const ROMANOS = ["N", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];  // o zero é N, de nulla (monges medievais)
const romano = s => ROMANOS[s] ?? String(s);
const f = n => n.toFixed(1);

// Gerador pseudoaleatório (mulberry32), como em linear.js: sorteia a cena de História a partir da chave.
function aleatorio(semente) {
  let a = semente >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---- História: cinco cenas. "decorrido" acerta as animações longas para quem vê a contagem começar no meio.
function piramide(decorrido) {
  const meia = y => 64 * (y - 18) / 82, cx = 70;  // inclinação da Grande Pirâmide (cerca de 52°)
  const camadas = Array.from({ length: 7 }, (_, k) => {
    const yb = 100 - 10 * k, yt = yb - 10;
    return `<polygon class="camada ${k % 2 ? "b" : "a"}" style="animation-delay:calc(var(--atraso, 0s) + ${k}s)"
      points="${f(cx - meia(yb))},${yb} ${f(cx + meia(yb))},${yb} ${f(cx + meia(yt))},${yt} ${f(cx - meia(yt))},${yt}"/>`;
  }).join("");
  return `<svg viewBox="0 0 140 112" aria-hidden="true"><rect class="chao" x="0" y="100" width="140" height="12" rx="2"/>
    <circle r="6" fill="#FFD100" opacity=".9"><animateMotion dur="7s" begin="${f(-decorrido)}s" fill="freeze" path="M8 70 Q70 -30 132 70"/></circle>
    ${camadas}<polygon class="topo" points="${f(cx - meia(30))},30 ${f(cx + meia(30))},30 ${cx},18"/></svg>`;
}
function coliseu(s) {
  const arcos = (y, h, w, cls, acesos) => Array.from({ length: 7 }, (_, k) => {
    const x = 26 + k * (148 / 7) + (148 / 7 - w) / 2;
    return `<path class="${cls}${k < acesos ? " acesa" : ""}" data-k="${k}" d="M${f(x)} ${y} v${-h + w / 2} a${w / 2} ${w / 2} 0 0 1 ${w} 0 v${h - w / 2} z"/>`;
  }).join("");
  return `<svg viewBox="0 0 200 118" aria-hidden="true"><defs><clipPath id="ct-ruina">
      <path d="M18 14 H120 L126 22 H140 L146 30 H156 L160 44 H170 L174 58 H182 L182 116 H18 Z"/></clipPath></defs>
    <rect x="0" y="112" width="200" height="6" rx="2" fill="#1c1e23"/>
    <g clip-path="url(#ct-ruina)">
      <rect class="pedra" x="20" y="14" width="160" height="98"/>
      <rect class="friso" x="20" y="28" width="160" height="2"/><rect class="friso" x="20" y="52" width="160" height="2"/>
      <rect class="friso" x="20" y="80" width="160" height="2"/>
      ${Array.from({ length: 10 }, (_, k) => `<rect class="vao" x="${f(30 + k * 15.4)}" y="18" width="5" height="6" rx="1"/>`).join("")}
      ${arcos(50, 18, 11, "vao", 0)}${arcos(78, 22, 12, "vao", 0)}${arcos(110, 26, 13, "arco", s)}
    </g></svg>`;
}
const HORAS = [7, 6, 5, 4, 3, 2, 1];
const anguloSol = h => 165 - (7 - h) * 25;  // graus: VII à esquerda, I à direita, longe da base
function relogioDeSol(s, decorrido) {
  const rad = a => a * Math.PI / 180;
  const horas = HORAS.map(h => {
    const a = rad(anguloSol(h));
    return `<line class="raio" x1="0" y1="0" x2="${f(44 * Math.cos(a))}" y2="${f(-44 * Math.sin(a))}"/>
      <text class="hora${h === s ? " agora" : ""}" data-h="${h}" x="${f(36 * Math.cos(a))}" y="${f(-36 * Math.sin(a))}">${ROMANOS[h]}</text>`;
  }).join("");
  // O sol vai da direita (leste) para a esquerda e a sombra aponta sempre para o lado oposto, da esquerda para a direita.
  return `<svg viewBox="-52 -62 104 70" aria-hidden="true">
    <circle class="astro" r="5"><animateMotion dur="7s" begin="${f(-decorrido)}s" fill="freeze" path="M44 -50 Q0 -78 -44 -50"/></circle>
    <path class="mostrador" d="M-46 0 A46 46 0 0 1 46 0 Z"/>${horas}
    <path class="sombra" d="M0 -2 L42 0 L0 2 Z" style="transform: rotate(${-anguloSol(Math.max(1, Math.min(7, s)))}deg)"/>
    <path class="gnomon" d="M-3 0 L0 -12 L3 0 Z"/><rect x="-50" y="0" width="100" height="5" rx="1.5" fill="#3a3f4b"/></svg>`;
}
const TORRES = [[22, 74], [52, 56], [82, 68], [112, 48], [142, 62], [172, 44], [200, 58]];
function muralha(s) {
  const pts = TORRES.map(([x, y]) => `${x},${y}`).join(" "), topo = TORRES.map(([x, y]) => `${x},${y - 4.5}`).join(" ");
  const torres = TORRES.map(([x, y], k) => `<g transform="translate(${x} ${y})">
    <rect class="torre" x="-7" y="-15" width="14" height="17"/>
    ${[-7, -3.2, .8, 4.6].map(dx => `<rect class="torre" x="${dx}" y="-18" width="2.4" height="3.2"/>`).join("")}
    <rect class="janela" x="-1.6" y="-10" width="3.2" height="5" rx="1.6"/>
    <g class="farol${k < 8 - s ? " acesa" : ""}" data-k="${k}">
      <circle class="fumaca" cx="0" cy="-26" r="2.4" style="animation-delay:${f(-k * .3)}s"/>
      <circle class="fumaca" cx="1.2" cy="-26" r="2" style="animation-delay:${f(-k * .3 - .8)}s"/>
      <path class="chama" d="M0 -18 c-3 -3 -2.4 -6.5 0 -9.5 c2.4 3 3 6.5 0 9.5z"/></g></g>`).join("");
  return `<svg viewBox="0 0 222 112" aria-hidden="true">
    <path class="serra" d="M0 112 L0 70 L18 58 L40 66 L62 40 L84 58 L104 34 L128 52 L150 36 L170 30 L190 46 L222 34 L222 112 Z"/>
    <polyline class="muro" points="${pts}"/><polyline class="ameias" points="${topo}"/>${torres}
    <path class="serra2" d="M0 112 L0 96 L30 88 L56 94 L86 86 L118 94 L146 84 L176 90 L204 82 L222 88 L222 112 Z"/></svg>`;
}
const SIMBOLOS = [
  ["Cristianismo", `<path d="M-1.3 -6.5 h2.6 v3.6 h3.2 v2.6 h-3.2 v6.8 h-2.6 v-6.8 h-3.2 v-2.6 h3.2 z"/>`],
  ["Islamismo", `<path d="M1.2 -5.3 A5.5 5.5 0 1 0 1.2 5.3 A4.3 4.3 0 1 1 1.2 -5.3 Z"/><path d="M3.6 -2 L4.2 -.6 L5.7 -.6 L4.5 .3 L5 1.8 L3.6 .9 L2.2 1.8 L2.7 .3 L1.5 -.6 L3 -.6 Z"/>`],
  ["Judaísmo", `<path class="tra" stroke-width="1.1" stroke-linejoin="round" d="M0 -6 L5.2 3 L-5.2 3 Z M0 6 L5.2 -3 L-5.2 -3 Z"/>`],
  ["Budismo", `<circle class="tra" r="5" stroke-width="1.1"/><circle r="1.4"/>` + Array.from({ length: 8 }, (_, k) => {
    const a = k * Math.PI / 4;
    return `<line class="tra" stroke-width=".8" x1="${f(1.4 * Math.cos(a))}" y1="${f(1.4 * Math.sin(a))}" x2="${f(6.4 * Math.cos(a))}" y2="${f(6.4 * Math.sin(a))}"/>`;
  }).join("")],
  ["Hinduísmo", `<text class="om" x="0" y=".5">ॐ</text>`],
  // Yin-yang: o ponto claro fica na metade escura (embaixo) e o escuro na clara (em cima).
  ["Taoísmo", `<circle class="tra" r="5.5" stroke-width=".8"/><path d="M0 -5.5 A5.5 5.5 0 0 1 0 5.5 A2.75 2.75 0 0 1 0 0 A2.75 2.75 0 0 0 0 -5.5 Z"/><circle cx="0" cy="-2.75" r=".9"/><circle class="furo" cx="0" cy="2.75" r=".9"/>`],
  ["Xintoísmo", `<path d="M-6.8 -5.2 Q0 -6.8 6.8 -5.2 L6.4 -3.8 Q0 -5.3 -6.4 -3.8 Z"/><rect x="-5.2" y="-2.6" width="10.4" height="1.2"/><rect x="-4.4" y="-4" width="1.4" height="10"/><rect x="3" y="-4" width="1.4" height="10"/>`],
];
function religioes(s) {
  const discos = SIMBOLOS.map(([nome, d], k) => {
    const a = -Math.PI / 2 + k * 2 * Math.PI / 7;
    return `<g transform="translate(${f(38 * Math.cos(a))} ${f(38 * Math.sin(a))})"><g class="item${k < 8 - s ? " acesa" : ""}" data-k="${k}">
      <g class="contra"><circle class="disco" r="9.5"/><g class="simbolo" transform="scale(1.05)">${d}</g><title>${nome}</title></g></g></g>`;
  }).join("");
  return `<svg viewBox="-50 -50 100 100" aria-hidden="true"><circle class="aro" r="38"/><g class="giro">${discos}</g></svg>`;
}
const acender = (caixa, sel, n) => caixa.querySelectorAll(sel).forEach(g => g.classList.toggle("acesa", +g.dataset.k < n));
const badgeH = `<span class="badge" style="background:#2F5BEA;color:#fff">História</span>`;
const rotH = `<div class="rot">Próxima pergunta em</div>`;
const HISTORIA = [
  { html: (s, d) => `<div class="cena hist hp">${badgeH}<div class="linha">${piramide(d)}<div class="numbox">${rotH}<div class="num">${romano(s)}</div></div></div></div>`,
    texto: romano },
  { html: s => `<div class="cena hist hc">${badgeH}${rotH}<div class="num">${romano(s)}</div>${coliseu(s)}</div>`,
    texto: romano, depois: (caixa, s) => acender(caixa, ".arco", s) },
  { html: (s, d) => `<div class="cena hist hs">${badgeH}<div class="linha">${relogioDeSol(s, d)}<div class="romano">${rotH}<div class="num">${romano(s)}</div></div></div></div>`,
    texto: romano,
    depois: (caixa, s) => {
      caixa.querySelector(".sombra").style.transform = `rotate(${-anguloSol(Math.max(1, Math.min(7, s)))}deg)`;
      caixa.querySelectorAll(".hora").forEach(t => t.classList.toggle("agora", +t.dataset.h === s));
    } },
  { html: s => `<div class="cena hist hm">${badgeH}${rotH}<div class="num">${romano(s)}</div>${muralha(s)}</div>`,
    texto: romano, depois: (caixa, s) => acender(caixa, ".farol", 8 - s) },
  { html: s => `<div class="cena hist hr">${badgeH}${rotH}<div class="roda">${religioes(s)}<div class="num">${romano(s)}</div></div></div>`,
    texto: romano, depois: (caixa, s) => acender(caixa, ".item", 8 - s) },
];
const badge = t => `<span class="badge" style="background:${CORES[t][0]};color:${CORES[t][1]}">${t}</span>`;
const rot = `<div class="rot">Próxima pergunta em</div>`;
const folhas = [98, 88, 77, 66, 54, 43].map((y, k) => k % 2
  ? `<path class="folha dir" style="animation-delay:calc(var(--atraso, 0s) + ${k + .5}s)" d="M51 ${y} c6 -10 20 -11 25 -3 c-8 7 -19 9 -25 3z"/>`
  : `<path class="folha esq" style="animation-delay:calc(var(--atraso, 0s) + ${k + .5}s)" d="M49 ${y} c-6 -10 -20 -11 -25 -3 c8 7 19 9 25 3z"/>`).join("");
const petalas = Array.from({ length: 6 }, (_, k) => {
  const a = k * Math.PI / 3;
  return `<circle cx="${(50 + 7 * Math.cos(a)).toFixed(1)}" cy="${(13 + 7 * Math.sin(a)).toFixed(1)}" r="5" fill="#F4F4F2"/>`;
}).join("");
const marcasRelogio = Array.from({ length: 12 }, (_, k) => {
  const a = k * Math.PI / 6, r1 = k % 3 ? 33 : 30;
  return `<line class="marca" x1="${(r1 * Math.sin(a)).toFixed(1)}" y1="${(-r1 * Math.cos(a)).toFixed(1)}" x2="${(35 * Math.sin(a)).toFixed(1)}" y2="${(-35 * Math.cos(a)).toFixed(1)}"/>`;
}).join("");
const orbita = (graus, dur) => `<g transform="rotate(${graus})"><ellipse class="orbita" rx="52" ry="17"/>
  <circle class="eletron" r="3.6"><animateMotion dur="${dur}s" repeatCount="indefinite" path="M52 0 A52 17 0 1 1 -52 0 A52 17 0 1 1 52 0"/></circle></g>`;

// ---- Esportes: cinco cenas (futebol, vôlei, basquete, tênis e automobilismo), sorteadas sem olhar o subtema.
const badgeE = `<span class="badge" style="background:#00A3E0;color:#000">Esportes</span>`;
const rotE = `<div class="rot">Próxima pergunta em</div>`;
// A bola de futebol tradicional (de 32 gomos): o pentágono preto no meio, as costuras e os pentágonos da borda, cortados
// pelo contorno.
const pent = (cx, cy, r, giro) => Array.from({ length: 5 }, (_, k) => {
  const a = (giro + k * 72 - 90) * Math.PI / 180;
  return `${f(cx + r * Math.cos(a))},${f(cy + r * Math.sin(a))}`;
}).join(" ");
const bolaFutebol = `<defs><clipPath id="ct-fut-bola"><circle r="5.4"/></clipPath></defs><g class="giro-bola">
  <circle class="couro" r="5.4"/><g clip-path="url(#ct-fut-bola)"><polygon class="gomo" points="${pent(0, 0, 1.9, 0)}"/>
  ${Array.from({ length: 5 }, (_, k) => {
    const a = (k * 72 - 90) * Math.PI / 180, b = (k * 72 + 90) * Math.PI / 180;
    return `<line class="costura" x1="${f(1.9 * Math.cos(a))}" y1="${f(1.9 * Math.sin(a))}" x2="${f(4.2 * Math.cos(a))}" y2="${f(4.2 * Math.sin(a))}"/>
      <polygon class="gomo" points="${pent(5.6 * Math.cos(b), 5.6 * Math.sin(b), 2.1, k * 72 + 180)}"/>`;
  }).join("")}</g><circle r="5.4" fill="none" stroke="#000" stroke-width=".7"/></g>`;
const JOG = [[34, 60], [64, 30], [92, 86], [122, 44], [150, 80], [178, 38], [204, 66]];
const GOL = [236, 60];
const posBola = s => s > 0 ? JOG[Math.max(0, 7 - s)] ?? JOG[0] : GOL;
function futebol(s) {
  const listras = Array.from({ length: 6 }, (_, k) => `<rect class="listra" x="${k * 40}" y="6" width="20" height="108"/>`).join("");
  const [x, y] = posBola(s);
  return `<svg viewBox="0 0 248 120" aria-hidden="true"><defs><pattern id="ct-fut-rede" width="4" height="4" patternUnits="userSpaceOnUse">
      <path d="M0 0 L4 4 M4 0 L0 4" stroke="#ffffff88" stroke-width=".5"/></pattern></defs>
    <rect class="grama" x="0" y="6" width="240" height="108" rx="3"/>${listras}
    <rect class="cal" x="6" y="10" width="228" height="100"/><line class="cal" x1="120" y1="10" x2="120" y2="110"/>
    <circle class="cal" cx="120" cy="60" r="16"/><rect class="cal" x="196" y="32" width="38" height="56"/><rect class="cal" x="220" y="46" width="14" height="28"/>
    <rect class="rede" x="234" y="48" width="10" height="24"/>
    <polyline class="trajeto" points="${[...JOG, GOL].map(p => p.join(",")).join(" ")}"/>
    ${JOG.map(([a, b]) => `<circle class="jog" cx="${a}" cy="${b}" r="4.2"/>`).join("")}
    <g class="bola" style="transform: translate(${x}px, ${y}px)">${bolaFutebol}</g></svg>`;
}
const volei = () => `<svg viewBox="0 0 200 112" aria-hidden="true"><defs><pattern id="ct-vol-rede" width="4" height="4" patternUnits="userSpaceOnUse">
    <path d="M0 0 H4 M0 0 V4" stroke="#ffffff99" stroke-width=".5" fill="none"/></pattern></defs>
  <rect class="areia" x="0" y="94" width="200" height="18" rx="2"/>
  <line class="poste" x1="100" y1="44" x2="100" y2="96"/><rect class="rede" x="98" y="44" width="4" height="22"/>
  <ellipse class="sombra" cx="45" cy="97" rx="7" ry="2"/>
  <g class="vaivem"><g class="alto"><g transform="translate(45 84)"><circle r="7" fill="#F4F4F2"/>
    <path d="M-7 0 Q0 -3 7 0 M-3 -6 Q2 0 -3 6 M3 -6 Q-1 0 4 6" stroke="#00A3E0" stroke-width="1.6" fill="none"/>
    <path d="M-6 -3 Q0 -1 6 -3" stroke="#FFD100" stroke-width="1.4" fill="none"/></g></g></g></svg>`;
const doisDigitos = s => String(s).padStart(2, "0");
const basquete = s => `<svg viewBox="0 0 160 150" aria-hidden="true">
  <rect class="caixa" x="52" y="2" width="56" height="30" rx="3"/><text class="num" x="80" y="17.5">${doisDigitos(s)}</text>
  <rect class="tabela" x="34" y="36" width="92" height="56" rx="2"/><rect class="luz" x="34" y="36" width="92" height="4" rx="2"/>
  <rect class="tabela" x="64" y="58" width="32" height="24"/>
  <path class="rede" d="M66 90 L71 108 M72 90 L75 108 M80 90 L80 108 M88 90 L85 108 M94 90 L89 108 M71 108 L89 108 M68 98 L92 98"/>
  <ellipse class="aro" cx="80" cy="90" rx="15" ry="3.2"/>
  <line x1="0" y1="148" x2="160" y2="148" stroke="#F7941D" stroke-width="2"/>
  <g class="bola"><g transform="translate(118 118)"><circle r="9"/><path d="M-9 0 H9 M0 -9 V9 M-6.5 -6.2 Q-2 0 -6.5 6.2 M6.5 -6.2 Q2 0 6.5 6.2"/></g></g></svg>`;
const QUIQUES = [[168, 32], [54, 88], [182, 84], [40, 36], [174, 60], [58, 62], [166, 42], [50, 74]];
const quique = s => QUIQUES[Math.max(0, Math.min(7, 7 - s))];
function tenis(s) {
  const [x, y] = quique(s);
  return `<svg viewBox="0 0 220 120" aria-hidden="true"><rect class="fora" x="0" y="0" width="220" height="120" rx="3"/>
    <rect class="saibro" x="14" y="12" width="192" height="96"/>
    <rect class="lin" x="18" y="16" width="184" height="88"/><line class="lin" x1="18" y1="27" x2="202" y2="27"/><line class="lin" x1="18" y1="93" x2="202" y2="93"/>
    <line class="lin" x1="62" y1="27" x2="62" y2="93"/><line class="lin" x1="158" y1="27" x2="158" y2="93"/><line class="lin" x1="62" y1="60" x2="158" y2="60"/>
    ${QUIQUES.map(([a, b], k) => `<ellipse class="marca${k <= 7 - s ? " feita" : ""}" data-k="${k}" cx="${a}" cy="${b}" rx="2.6" ry="1.6"/>`).join("")}
    <line class="rede" x1="110" y1="8" x2="110" y2="112"/>
    <g class="bola" style="transform: translate(${x}px, ${y}px)"><circle r="3"/></g></svg>`;
}
// Automobilismo: uma luz vermelha a mais por segundo (cinco no máximo); no zero, todas verdes e o carro arranca.
const classeLuz = (s, k) => s === 0 ? " verde" : k < Math.min(5, 8 - s) ? " acesa" : "";
function automobilismo(s) {
  const luzes = Array.from({ length: 5 }, (_, k) => {
    const x = 30 + k * 26;
    return `<rect class="portico" x="${x - 9}" y="10" width="18" height="40" rx="3"/>
      <circle class="luz${classeLuz(s, k)}" data-k="${k}" cx="${x}" cy="21" r="6"/>
      <circle class="luz${classeLuz(s, k)}" data-k="${k}" cx="${x}" cy="39" r="6"/>`;
  }).join("");
  return `<svg viewBox="0 0 164 104" aria-hidden="true"><rect class="portico" x="12" y="4" width="140" height="8" rx="2"/>${luzes}
    <rect class="pista" x="0" y="66" width="164" height="36" rx="2"/><line class="faixa-pista" x1="0" y1="84" x2="164" y2="84"/>
    <g class="carro"><g transform="translate(14 76)">
      <path d="M0 6 L6 2 H18 L24 -2 H34 L38 2 H52 L58 6 Z" fill="#00A3E0"/><path d="M24 -2 L28 -6 H32 L34 -2 Z" fill="#111"/>
      <rect x="52" y="0" width="7" height="2" fill="#00A3E0"/><rect x="-2" y="-2" width="5" height="6" fill="#00A3E0"/>
      <circle cx="10" cy="7" r="4" fill="#111" stroke="#555"/><circle cx="46" cy="7" r="4" fill="#111" stroke="#555"/></g></g></svg>`;
}
const ESPORTES = [
  { html: s => `<div class="cena esp ef">${badgeE}${rotE}<div class="num">${s}</div>${futebol(s)}<div class="grito">Gol!</div></div>`,
    depois: (caixa, s) => { const [x, y] = posBola(s); caixa.querySelector(".bola").style.transform = `translate(${x}px, ${y}px)`; } },
  { html: s => `<div class="cena esp ev">${badgeE}${rotE}<div class="num">${s}</div>${volei()}</div>` },
  { html: s => `<div class="cena esp eb">${badgeE}${rotE}${basquete(s)}</div>`, texto: doisDigitos },
  { html: s => `<div class="cena esp et">${badgeE}${rotE}<div class="num">${s}</div>${tenis(s)}</div>`,
    depois: (caixa, s) => {
      const [x, y] = quique(s), b = caixa.querySelector(".bola");
      b.style.transform = `translate(${x}px, ${y}px)`;
      const c = b.firstElementChild; c.replaceWith(c.cloneNode());  // recomeça o voo (a bola sobe e desce)
      caixa.querySelectorAll(".marca").forEach(m => m.classList.toggle("feita", +m.dataset.k <= 7 - s));
    } },
  { html: s => `<div class="cena esp ea">${badgeE}${rotE}${automobilismo(s)}<div class="num">${s}</div></div>`,
    depois: (caixa, s) => caixa.querySelectorAll(".luz").forEach(l => l.setAttribute("class", "luz" + classeLuz(s, +l.dataset.k))) },
];

// ---- Entretenimento (2026-11-26): o começo do filme e dez cenas com som próprio (arena-suspense.js, "Entretenimento|1" a
// "|10"), sorteadas como as de História. depois(caixa, s) não depende do segundo anterior: um celular que pula segundos
// fica certo. Os sons que acompanham cada cena estão em SONS_CENAS, com a mesma ordem.
const f1 = n => (Math.round(n * 10) / 10).toString();
const reinicia = el => { if (el) el.replaceWith(el.cloneNode(true)); };  // recomeça as animações de um elemento
const repetir = (el, cls) => { if (!el) return; el.classList.remove(cls); void el.getBoundingClientRect(); el.classList.add(cls); };
// Pixel art: cada letra é uma cor (ou [cor, classe]); "." é vazio; os pixels iguais em fileira viram um retângulo só.
function pixels(linhas, cores) {
  let r = "";
  linhas.forEach((l, y) => {
    for (let x = 0; x < l.length;) {
      const ch = l[x];
      if (ch === ".") { x++; continue; }
      let w = 1; while (l[x + w] === ch) w++;
      const [cor, cls] = [].concat(cores[ch]);
      r += `<rect x="${x}" y="${y}" width="${w}" height="1" fill="${cor}"${cls ? ` class="${cls}"` : ""}/>`;
      x += w;
    }
  });
  return r;
}
const badgeEn = `<span class="badge" style="background:#8E4FC9;color:#fff">Entretenimento</span>`;
const filme = {
  html: s => `<div class="cena ent">${badgeEn}<div class="pelicula"><div class="furos"></div><div class="quadro">
    <div class="varredura"></div><div class="anel a1"></div><div class="anel a2"></div><div class="cruz"></div><div class="riscos"></div>
    <div class="num">${s}</div></div><div class="furos"></div></div>${rot}</div>` };

// 1. Claquete: a haste bate a cada segundo; o número é a tomada, escrito a giz.
const hoje = new Date(), DATA = `${doisDigitos(hoje.getDate())}/${doisDigitos(hoje.getMonth() + 1)}/${String(hoje.getFullYear()).slice(2)}`;
const claquete = {
  html: s => `<div class="cena en en-claq">${badgeEn}${rot}<div class="claq">
      <div class="bracos"><div class="braco fixo"></div><div class="braco movel"></div></div>
      <div class="lousa">
        <div class="campo"><span>Produção</span><b>Mestre2 · Arena</b></div>
        <div class="trio"><div class="campo"><span>Rolo</span><b>E-1</b></div><div class="campo"><span>Cena</span><b>12</b></div>
          <div class="campo tomada"><span>Tomada</span><b class="num">${s}</b></div></div>
        <div class="duo"><div class="campo"><span>Direção</span><b>Você</b></div><div class="campo"><span>Data</span><b>${DATA}</b></div></div>
      </div></div><div class="grito">Ação!</div></div>`,
  depois: c => reinicia(c.querySelector(".movel")) };

// 2. Pipoca: 1 grão estoura no 7, 2 no 6… 7 no 1 (28 no monte); no zero, transborda.
const GRAO = `<circle r="4.2"/><circle cx="3.1" cy="-2.2" r="3.3"/><circle cx="-3.2" cy="-1.6" r="3.2"/><circle cx=".4" cy="2.9" r="3"/><circle class="miolo" cx="-.5" cy="-.3" r="1.2"/>`;
const PIP = (() => {
  const r = aleatorio(11), graos = [];
  for (const [n, y, m] of [[9, 61, 29], [7, 53, 24], [6, 45, 18], [4, 37, 12], [2, 30, 5]])
    for (let i = 0; i < n; i++) graos.push({ x: 60 - m + 2 * m * i / (n - 1) + r() * 3 - 1.5, y: y + r() * 3 - 1.5, g: Math.round(r() * 360) });
  const sobra = Array.from({ length: 12 }, (_, k) => {
    const lado = k % 2 ? 1 : -1;
    return { x: 60 + lado * (36 + r() * 20), y: 121 + r() * 4, mx: 60 + lado * (12 + r() * 22), my: -6 - r() * 18, g: Math.round(r() * 360) };
  });
  return { graos, sobra };
})();
const ACUM = s => (8 - s) * (9 - s) / 2;  // grãos estourados até o fim do segundo s: 1, 3, 6… 28
// Os grãos que estouram no segundo s; cada um pula no instante do seu estouro no som (j × 0,8 s / n).
const lotePipoca = s => s > 0 ? [ACUM(s + 1), ACUM(s)] : [28, 28];
const graosPipoca = s => {
  const [de, ate] = lotePipoca(s);
  return PIP.graos.map((p, k) => {
    const pula = k >= de && k < ate, d = pula ? (k - de) * .8 / (ate - de) : 0;
    return `<g class="grao${k < ate ? " visto" : ""}${pula ? " pula" : ""}" data-k="${k}" style="--x:${f1(p.x)}px;--y:${f1(p.y)}px;--g:${p.g}deg;--d:${d.toFixed(2)}s">${GRAO}</g>`;
  }).join("");
};
const bordaBalde = y => [30 + 7 * (y - 67) / 59, 90 - 7 * (y - 67) / 59];
const balde = (() => {
  const listras = Array.from({ length: 6 }, (_, i) => `<polygon class="${i % 2 ? "branca" : "verm"}" points="${30 + 10 * i},67 ${40 + 10 * i},67 ${f1(37 + 46 / 6 * (i + 1))},126 ${f1(37 + 46 / 6 * i)},126"/>`).join("");
  const [a1, b1] = bordaBalde(80), [a2, b2] = bordaBalde(112);
  return `${listras}<path class="aro" d="M27 59 H93 L92 67 H28 Z"/><text class="marca" x="60" y="64.6">PIPOCA</text>
    <polygon class="faixa" points="${f1(a1)},80 ${f1(b1)},80 ${f1(b2)},112 ${f1(a2)},112"/>`;
})();
const pipoca = {
  html: s => `<div class="cena en en-pip">${badgeEn}${rot}<svg viewBox="0 0 120 132" aria-hidden="true">
      <ellipse class="sombra" cx="60" cy="127" rx="40" ry="3"/><g class="monte">${graosPipoca(s)}</g>${balde}
      <text class="num" x="60" y="96.5">${s}</text>
      ${PIP.sobra.map((p, k) => `<g class="grao sobra" style="--x:${f1(p.x)}px;--y:${f1(p.y)}px;--mx:${f1(p.mx)}px;--my:${f1(p.my)}px;--g:${p.g}deg;--d:${(k * .05).toFixed(2)}s">${GRAO}</g>`).join("")}
    </svg></div>`,
  depois: (c, s) => {
    if (s === 0) return;
    const [de, ate] = lotePipoca(s);
    c.querySelectorAll(".monte .grao").forEach(g => {
      const k = +g.dataset.k;
      if (k >= de && k < ate) { g.style.setProperty("--d", `${((k - de) * .8 / (ate - de)).toFixed(2)}s`); g.classList.add("visto"); repetir(g, "pula"); }
      else g.classList.toggle("visto", k < ate);
    });
  } };

// 3. TV de tubo: o botão gira e a TV troca de canal a cada segundo; no zero, no ar. (Os canais também estão em
// arena-suspense.js, que toca o som de cada um.)
const CANAL_TV = { 7: "barras", 6: "chuvisco", 5: "teste", 4: "noticias", 3: "rolando", 2: "chuvisco", 1: "barras", 0: "noar" };
const tv = {
  html: s => `<div class="cena en en-tv">${badgeEn}${rot}<div class="tv">
      <div class="antena"><i class="vara e"></i><i class="vara d"></i><i class="cupula"></i></div>
      <div class="movel"><div class="moldura"><div class="tela-tv" data-canal="${CANAL_TV[s]}">
          <div class="canal c-barras"></div><div class="canal c-teste"></div><div class="canal c-rolando"></div>
          <div class="canal c-noticias"><span class="aovivo">AO VIVO</span><div class="letreiro"><span>ÚLTIMAS · A PRÓXIMA PERGUNTA JÁ VAI COMEÇAR · FIQUE LIGADO ·</span></div></div>
          <div class="canal c-noar"></div><div class="chuvisco"></div><div class="estalo"></div>
          <div class="osd">${s ? `CANAL ${doisDigitos(s)}` : "NO AR"}</div><div class="num">${s}</div><div class="vidro"></div>
        </div></div>
        <div class="painel"><i class="botao" style="--giro:${(7 - s) * 40}deg"></i><i class="botao b2"></i><i class="grade-som"></i></div></div>
      <div class="pes"><i></i><i></i></div></div><div class="grito">No ar!</div></div>`,
  depois: (c, s) => {
    c.querySelector(".tela-tv").dataset.canal = CANAL_TV[s];
    c.querySelector(".osd").textContent = s ? `CANAL ${doisDigitos(s)}` : "NO AR";
    c.querySelector(".botao").style.setProperty("--giro", `${(7 - s) * 40}deg`);
    reinicia(c.querySelector(".estalo")); reinicia(c.querySelector(".antena"));
  } };

// 4. Toca-discos: o braço chega à borda do disco no 1 e desce no zero; nos três últimos, o disco é arranhado.
const anguloBraco = s => s ? (7 - s) * 4 : 30;
const vinil = {
  html: s => `<div class="cena en en-vin">${badgeEn}${rot}<div class="linha"><svg viewBox="0 0 150 112" aria-hidden="true">
      <rect class="base" x="2" y="2" width="146" height="108" rx="7"/><circle class="prato" cx="58" cy="56" r="48"/>
      <g transform="translate(58 56)"><g class="gira"><circle class="estrobo" r="46.5"/><g class="arranha">
        <circle class="disco" r="44"/>${[40, 37, 34, 31, 28, 25, 22, 19].map(r => `<circle class="sulco" r="${r}"/>`).join("")}
        <circle class="selo" r="15"/><text class="selo-txt" y="-7.5">LADO A</text><text class="selo-txt" y="8">33⅓ RPM</text>
        <circle class="eixo" r="1.6"/></g></g>
        <path class="brilho" d="M0 0 L-30 -32 A44 44 0 0 1 -8 -43 Z"/><path class="brilho" d="M0 0 L30 32 A44 44 0 0 1 8 43 Z"/></g>
      <rect class="trilho" x="136" y="52" width="4" height="40" rx="2"/><rect class="pitch" x="133" y="68" width="10" height="5" rx="1"/>
      <rect class="start" x="16" y="95" width="18" height="8" rx="1.5"/><circle class="led" cx="10" cy="99" r="2.2"/>
      <g transform="translate(128 20)"><g class="braco" style="transform: rotate(${anguloBraco(s)}deg)">
        <rect class="contrapeso" x="-4" y="-17" width="8" height="9" rx="1.5"/><path class="haste" d="M0 0 L-1 50 L-6 70"/>
        <rect class="capsula" x="-10" y="68" width="8" height="6" rx="1" transform="rotate(18 -6 71)"/>
        <circle class="pivo" r="7"/><circle r="2.5" fill="#d9d6df"/></g></g>
    </svg><div class="num">${s}</div></div></div>`,
  depois: (c, s) => { c.querySelector(".braco").style.transform = `rotate(${anguloBraco(s)}deg)`; if (s <= 3) reinicia(c.querySelector(".arranha")); } };

// 5. Violão: afinando, uma corda solta por segundo; harmônicos no 1; o acorde de bossa no zero.
const CORDAS_Y = [38, 44, 50, 56, 62, 68];  // da 6ª corda (Mi grave), no alto, à 1ª (Mi agudo)
const NOTA_VIO = { 7: ["Mi", "6ª corda"], 6: ["Lá", "5ª corda"], 5: ["Ré", "4ª corda"], 4: ["Sol", "3ª corda"], 3: ["Si", "2ª corda"],
                   2: ["Mi", "1ª corda"], 1: ["Mi", "harmônicos"], 0: ["C7M(9)", "bossa nova"] };
const violaoSvg = s => {
  const veios = [14, 22, 29, 83, 90, 96].map((y, k) => `<path class="veio" d="M0 ${y} C50 ${y + (k % 2 ? 1.5 : -1.5)} 100 ${y + (k % 2 ? -1 : 1)} 160 ${y}"/>`).join("");
  const cordas = CORDAS_Y.map((y, i) => `<g class="corda${i < 3 ? " bordao" : ""}" data-k="${i}">
      <path class="vib" d="M0 ${y} Q40 ${y - 5} 138 ${y} Q40 ${y + 5} 0 ${y} Z"/>
      <line class="fio" x1="0" y1="${y}" x2="138.6" y2="${y}" style="stroke-width:${[1.5, 1.3, 1.1, .9, .8, .7][i]}"/></g>`).join("");
  return `<svg viewBox="0 0 160 104" aria-hidden="true">
    <path class="tampo" d="M0 4 H124 C148 4 160 26 160 52 C160 78 148 100 124 100 H0 Z"/>${veios}
    <path class="filete" d="M0 4 H124 C148 4 160 26 160 52 C160 78 148 100 124 100 H0"/><path class="filete2" d="M0 6.6 H124 C145 6.6 157.4 27 157.4 52 C157.4 77 145 97.4 124 97.4 H0"/>
    <circle class="anel" cx="74" cy="52" r="30.4" stroke-width=".6"/><circle class="mosaico-a" cx="74" cy="52" r="27.6"/><circle class="mosaico-b" cx="74" cy="52" r="27.6"/>
    <circle class="anel" cx="74" cy="52" r="25.4" stroke-width="1"/><circle class="boca" cx="74" cy="52" r="23.4"/>
    <text class="num" x="74" y="53">${s}</text>
    <rect class="escala" x="0" y="30" width="50" height="46" rx="1"/><line class="traste" x1="10" y1="30" x2="10" y2="76"/><line class="traste" x1="32" y1="30" x2="32" y2="76"/>
    <rect class="cavalete" x="134" y="28" width="16" height="50" rx="3"/><rect class="rastilho" x="137.6" y="31" width="1.8" height="44" rx=".9"/>
    ${cordas}</svg>`;
};
const tocarCordas = (c, s) => {
  const quais = s >= 2 ? [7 - s] : s === 1 ? [0, 5] : [0, 1, 2, 3, 4, 5];
  for (const i of quais) {
    const g = c.querySelector(`.corda[data-k="${i}"]`), novo = g.cloneNode(true);
    novo.classList.add("toca"); novo.classList.toggle("harm", s === 1);
    novo.style.setProperty("--d", s === 0 ? `${i * .025}s` : "0s");
    g.replaceWith(novo);
  }
};
const violao = {
  html: s => `<div class="cena en en-vio">${badgeEn}${rot}${violaoSvg(s)}
      <div class="afinador"><div class="mostrador"><i class="agulha"></i></div><b class="nota">${NOTA_VIO[s][0]}</b><span class="qual">${NOTA_VIO[s][1]}</span></div></div>`,
  depois: (c, s) => { tocarCordas(c, s); c.querySelector(".nota").textContent = NOTA_VIO[s][0]; c.querySelector(".qual").textContent = NOTA_VIO[s][1];
                      reinicia(c.querySelector(".agulha")); } };

// 6. Quadrinhos: um balão de explosão e uma onomatopeia por segundo; no zero, KABUM!
const ONOMA = { 7: "POW!", 6: "BAM!", 5: "ZÁS!", 4: "TUM!", 3: "PLAFT!", 2: "CRÁS!", 1: "VUPT!", 0: "KABUM!" };
const COR_HQ = { 7: "#FFFFFF", 6: "#00A3E0", 5: "#FFFFFF", 4: "#E4007C", 3: "#FFFFFF", 2: "#00A3E0", 1: "#FFFFFF", 0: "#E8412C" };
const POS_HQ = { 7: "right:5%;top:8%;--rot:-10deg", 6: "left:5%;bottom:8%;--rot:8deg", 5: "right:5%;bottom:8%;--rot:-7deg",
                 4: "right:6%;top:9%;--rot:9deg", 3: "left:5%;bottom:8%;--rot:-9deg", 2: "right:5%;bottom:8%;--rot:7deg",
                 1: "right:6%;top:9%;--rot:-8deg", 0: "left:0;right:0;bottom:5%;text-align:center;--rot:-4deg;font-size:calc(7 * var(--u))" };
function estrela(semente, pontas = 16) {  // o balão de explosão, com as pontas irregulares
  const r = aleatorio(semente * 7919 + 3), pts = [];
  for (let k = 0; k < pontas * 2; k++) {
    const a = k / (pontas * 2) * Math.PI * 2 + r() * .12, raio = k % 2 ? 26 + r() * 8 : 40 + r() * 9;
    pts.push(`${f1(raio * Math.cos(a))},${f1(raio * Math.sin(a))}`);
  }
  return pts.join(" ");
}
const quadrinhos = {
  html: s => `<div class="cena en en-hq">${badgeEn}${rot}<div class="painel-hq">
      <div class="retic"></div><div class="raios" style="transform: rotate(${(7 - s) * 9}deg)"></div>
      <div class="legenda">Enquanto isso…</div>
      <svg class="estouro pop" viewBox="-50 -50 100 100" style="--cor:${COR_HQ[s]}" aria-hidden="true"><polygon class="som" points="${estrela(s + 1)}"/><polygon class="est" points="${estrela(s + 1)}"/></svg>
      <div class="num">${s}</div><div class="onoma pop" style="${POS_HQ[s]}">${ONOMA[s]}</div></div></div>`,
  depois: (c, s) => {
    const est = c.querySelector(".estouro");
    est.style.setProperty("--cor", COR_HQ[s]); est.querySelectorAll("polygon").forEach(p => p.setAttribute("points", estrela(s + 1)));
    repetir(est, "pop");
    const o = c.querySelector(".onoma"); o.textContent = ONOMA[s]; o.setAttribute("style", POS_HQ[s]); repetir(o, "pop");
    c.querySelector(".raios").style.transform = `rotate(${(7 - s) * 9}deg)`;
    if (s > 0) repetir(c.querySelector(".painel-hq"), "treme");
  } };

// 7. Mangá: linhas de ação vibrando, o número em close e o numeral japonês no carimbo; no 3, 2, 1 os olhos se estreitam.
const KANJI = ["零", "一", "二", "三", "四", "五", "六", "七"];
function linhasFoco(semente, n = 84) {  // linhas de concentração: triângulos finos da borda do quadro até perto do centro
  const r = aleatorio(semente); let d = "";
  for (let k = 0; k < n; k++) {
    const a = (k + r() * .8) / n * Math.PI * 2, larg = .006 + r() * .014, ri = .9 + r() * .45;
    d += `M${f1(Math.cos(a) * 36 * ri)} ${f1(Math.sin(a) * 23 * ri)}L${f1(Math.cos(a - larg) * 120)} ${f1(Math.sin(a - larg) * 120)}L${f1(Math.cos(a + larg) * 120)} ${f1(Math.sin(a + larg) * 120)}Z`;
  }
  return d;
}
const OLHO = `<g class="olho-in"><path d="M-17 -1 Q-4 -13 16 -6 Q9 10 -12 8 Q-16 5 -17 -1 Z" fill="#fff"/>
    <g clip-path="url(#ct-en-olho)"><ellipse cx="1" cy="0" rx="7.5" ry="9.5" fill="#3d1f66"/><ellipse cx="1" cy="1.5" rx="5.5" ry="7" fill="#8E4FC9"/>
      <ellipse cx="1" cy="0" rx="2.8" ry="4.2" fill="#111"/><path d="M-18 -14 H18 V-5 Q0 -9 -18 1 Z" fill="#0003"/>
      <circle cx="-2.5" cy="-3.5" r="2.4" fill="#fff"/><circle cx="3.5" cy="3.5" r="1.1" fill="#fff"/></g>
    <path d="M-18 0 Q-4 -14 17 -6.5" fill="none" stroke="#111" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M-17 -1 L-22 -4.5" stroke="#111" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M-12 8 Q2 10.5 13 3" fill="none" stroke="#111" stroke-width="1" stroke-linecap="round"/></g>
  <path class="sobrancelha" d="M-20 -15 Q-3 -20 16 -12" fill="none" stroke="#111" stroke-width="2.6" stroke-linecap="round"/>`;
const OLHOS = `<defs><clipPath id="ct-en-olho"><path d="M-17 -1 Q-4 -13 16 -6 Q9 10 -12 8 Q-16 5 -17 -1 Z"/></clipPath></defs>
  <g transform="translate(50 23)">${OLHO}</g><g transform="translate(110 23) scale(-1 1)">${OLHO}</g>`;
const manga = {
  html: s => `<div class="cena en en-manga">${badgeEn}${rot}<div class="pagina">
      <div class="quadro tira"><svg viewBox="0 0 160 40" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${OLHOS}</svg></div>
      <div class="quadro principal"><div class="tom"></div>
        <svg class="focos" viewBox="-80 -50 160 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path class="foco a" d="${linhasFoco(s * 7 + 1)}"/><path class="foco b" d="${linhasFoco(s * 7 + 4)}"/></svg>
        <div class="num">${s}</div><div class="sfx">ドン!</div><div class="hanko carimba">${KANJI[s]}</div></div></div></div>`,
  depois: (c, s) => {
    c.querySelector(".foco.a").setAttribute("d", linhasFoco(s * 7 + 1)); c.querySelector(".foco.b").setAttribute("d", linhasFoco(s * 7 + 4));
    const h = c.querySelector(".hanko"); h.textContent = KANJI[s]; repetir(h, "carimba");
  } };

// 8. Cartas: uma carta dada por segundo, do 7 de copas ao Ás de espadas; no zero, o curinga.
const NAIPES = {
  copas: { cor: "#D7263D", d: `<path d="M0 4.6 C-2.2 2.6 -5 .6 -5 -1.9 C-5 -3.7 -3.7 -4.9 -2.4 -4.9 C-1.3 -4.9 -.4 -4.2 0 -3.2 C.4 -4.2 1.3 -4.9 2.4 -4.9 C3.7 -4.9 5 -3.7 5 -1.9 C5 .6 2.2 2.6 0 4.6 Z"/>` },
  ouros: { cor: "#D7263D", d: `<path d="M0 -5 L3.7 0 L0 5 L-3.7 0 Z"/>` },
  espadas: { cor: "#141218", d: `<path d="M0 -5 C-2.2 -2.9 -5 -1 -5 1.4 C-5 3.1 -3.7 4.1 -2.4 4.1 C-1.5 4.1 -.8 3.7 -.4 3 C-.5 3.9 -1 4.6 -1.8 5.1 L1.8 5.1 C1 4.6 .5 3.9 .4 3 C.8 3.7 1.5 4.1 2.4 4.1 C3.7 4.1 5 3.1 5 1.4 C5 -1 2.2 -2.9 0 -5 Z"/>` },
  paus: { cor: "#141218", d: `<circle cx="0" cy="-2.4" r="2.4"/><circle cx="-2.6" cy="1.2" r="2.4"/><circle cx="2.6" cy="1.2" r="2.4"/><circle cx="0" cy=".6" r="1.3"/><path d="M-.5 1 L-1.7 5.1 H1.7 L.5 1 Z"/>` },
};
const PIPS = {  // a posição dos naipes no meio de cada carta, como nos baralhos de verdade ([x, y, de cabeça para baixo])
  1: [[0, 0]], 2: [[0, -12], [0, 12, 1]], 3: [[0, -12], [0, 0], [0, 12, 1]],
  4: [[-6.5, -12], [6.5, -12], [-6.5, 12, 1], [6.5, 12, 1]], 5: [[-6.5, -12], [6.5, -12], [0, 0], [-6.5, 12, 1], [6.5, 12, 1]],
  6: [[-6.5, -12], [6.5, -12], [-6.5, 0], [6.5, 0], [-6.5, 12, 1], [6.5, 12, 1]],
  7: [[-6.5, -12], [6.5, -12], [0, -6], [-6.5, 0], [6.5, 0], [-6.5, 12, 1], [6.5, 12, 1]],
};
const MAO = [[7, "copas"], [6, "paus"], [5, "ouros"], [4, "espadas"], [3, "copas"], [2, "paus"], [1, "espadas"]];
function carta(v, naipe) {
  const N = NAIPES[naipe], r = v === 1 ? "A" : String(v);
  const pips = PIPS[v].map(([x, y, inv]) => `<g transform="translate(${x} ${y}) scale(${v === 1 ? 1.5 : .52})${inv ? " rotate(180)" : ""}">${N.d}</g>`).join("");
  const canto = `<text class="rank" x="-11.6" y="-14.4">${r}</text><g transform="translate(-11.6 -8.8) scale(.3)">${N.d}</g>`;
  return `<rect class="face" x="-15" y="-21" width="30" height="42" rx="2.6"/><g fill="${N.cor}">${pips}${canto}<g transform="rotate(180)">${canto}</g></g>`;
}
const estrela5 = (r1, r2) => Array.from({ length: 10 }, (_, k) => { const a = -Math.PI / 2 + k * Math.PI / 5, r = k % 2 ? r2 : r1;
  return `${k ? "L" : "M"}${f1(r * Math.cos(a))} ${f1(r * Math.sin(a) - 2)}`; }).join("") + "Z";
const CURINGA = `<rect class="face" x="-15" y="-21" width="30" height="42" rx="2.6"/><rect x="-12" y="-18" width="24" height="36" rx="1.6" fill="none" stroke="#8E4FC9" stroke-width=".8"/>
  <path d="${estrela5(8.5, 3.5)}" fill="#8E4FC9"/><text class="cur" x="0" y="13">CURINGA</text>`;
const VERSO = `<rect class="face" x="-15" y="-21" width="30" height="42" rx="2.6"/><rect x="-12.5" y="-18.5" width="25" height="37" rx="1.4" fill="#8E4FC9"/>
  <path d="M-12.5 -18.5 L12.5 18.5 M12.5 -18.5 L-12.5 18.5 M0 -18.5 L12.5 0 L0 18.5 L-12.5 0 Z" stroke="#ffffff55" stroke-width=".6" fill="none"/>`;
const POS_CARTA = k => [78 + k * 20, 62 + Math.pow(k - 3, 2) * .8, (k - 3) * 5];
const cartasDadas = s => s > 0 ? 8 - s : 7;
const cartas = {
  html: s => { const n = cartasDadas(s);
    return `<div class="cena en en-cartas">${badgeEn}${rot}<div class="num">${s}</div><svg viewBox="0 0 220 112" aria-hidden="true">
      <rect class="borda-mesa" x="2" y="4" width="216" height="104" rx="14"/><rect class="feltro" x="7" y="9" width="206" height="94" rx="10"/>
      <rect class="risco" x="16" y="18" width="188" height="76" rx="8"/>
      <g class="monte">${[[1.4, -1.4], [.7, -.7], [0, 0]].map(([dx, dy]) => `<g transform="translate(${f1(32 + dx)} ${f1(58 + dy)})">${VERSO}</g>`).join("")}</g>
      ${MAO.map(([v, np], k) => { const [x, y, g] = POS_CARTA(k);
        return `<g class="carta${k < n ? " dada" : ""}${k === n - 1 && s > 0 ? " nova" : ""}" data-k="${k}" style="--x:${x}px;--y:${f1(y)}px;--g:${g}deg">${carta(v, np)}</g>`; }).join("")}
      <g class="curinga">${CURINGA}</g></svg></div>`; },
  depois: (c, s) => { const n = cartasDadas(s);
    c.querySelectorAll(".carta").forEach(g => { const k = +g.dataset.k; g.classList.toggle("dada", k < n); g.classList.remove("nova");
                                                if (k === n - 1 && s > 0) repetir(g, "nova"); }); } };

// 9. Fliperama: a tela de "Continuar?", com o robozinho tonto; no zero, entra a ficha e é START.
const COR_ROBO = { Y: "#FFD100", G: "#A0A4AB", C: "#00E5FF", M: "#2a2730", P: "#8E4FC9", W: "#F4F4F2", L: "#6b6f78" };
const ROBO_FELIZ = [".....YY.....", "......G.....", "..GGGGGGGG..", "..GCCGGCCG..", "G.GCCGGCCG.G", "G.GGGGGGGG.G", "G.GGMMMMGG.G",
                    "GG.GGGGGG.GG", "..PPPPPPPP..", "..PPWPPWPP..", "..PPPPPPPP..", "...LL..LL...", "...LL..LL...", "..LLL..LLL.."];
const ROBO_KO = [".....YY.....", "......G.....", "..GGGGGGGG..", "..GMMGGMMG..", "..GGGGGGGG..", "..GGGGGGGG..", "..GGGMMGGG..",
                 "...GGGGGG...", "G.PPPPPPPP.G", "G.PPWPPWPP.G", "G.PPPPPPPP.G", "...LL..LL...", "...LL..LL...", "..LLL..LLL.."];
const TONTO = [0, 1, 2].map(k => `<g><animateMotion dur="1.1s" begin="${f1(-k * .37)}s" repeatCount="indefinite" path="M-4.5 0 A4.5 1.4 0 1 1 4.5 0 A4.5 1.4 0 1 1 -4.5 0"/>
  <rect x="-.5" y="-1.5" width="1" height="3" fill="#FFD100"/><rect x="-1.5" y="-.5" width="3" height="1" fill="#FFD100"/></g>`).join("");
const fliperama = {
  html: s => `<div class="cena en en-arc">${badgeEn}${rot}<div class="crt">
      <div class="placar"><span>1P <b>007300</b></span><span class="hi">RECORDE <b>078500</b></span></div>
      <div class="pergunta">CONTINUAR?</div><div class="start">START!</div>
      <div class="num">${s}</div>
      <svg class="robo" viewBox="-2 -5 16 19" aria-hidden="true"><g class="ko">${pixels(ROBO_KO, COR_ROBO)}<g transform="translate(6 -2.5)">${TONTO}</g></g>
        <g class="feliz">${pixels(ROBO_FELIZ, COR_ROBO)}</g></svg>
      <div class="ficha"><span class="insira">INSIRA FICHA</span><span class="cred0">CRÉDITOS 00</span><span class="cred1">CRÉDITOS 01</span></div>
      <div class="scan"></div></div></div>` };

// 10. Nave: a nave derruba um disco voador por segundo, do meio para as pontas; no zero, salta para a próxima fase.
const COR_DISCO = { C: "#00E5FF", L: "#B8A9D9", Y: ["#FFD100", "luz"] };
const DISCO = ["....CCC....", "..LLLLLLL..", ".LYLLYLLYL.", "LLLLLLLLLLL", "..LL...LL.."];
const COR_NAVE = { W: "#F4F4F2", C: "#00A3E0", P: "#8E4FC9", F: ["#F7941D", "chama"] };
const NAVE = [".....W.....", ".....W.....", "....WWW....", "....WCW....", "...WWCWW...", "...WWWWW...", "..WWPWPWW..", ".WWWWWWWWW.",
              "WWPWWWWWPWW", "W..WW.WW..W", "...FF.FF..."];
const ORDEM = [3, 2, 4, 1, 5, 0, 6];
const posDisco = k => [20 + k * 20, 26 + Math.abs(k - 3) * 6];
const alvoNave = s => s > 0 ? posDisco(ORDEM[7 - s]) : [80, 0];
const ESTRELAS = (() => { const r = aleatorio(5), lentas = [], rapidas = [];
  for (let k = 0; k < 22; k++) lentas.push([f1(4 + r() * 152), f1(r() * 112)]);
  for (let k = 0; k < 10; k++) rapidas.push([f1(4 + r() * 152), f1(r() * 112)]);
  const camada = (lista, w, h, cor) => [0, -112].map(dy => lista.map(([x, y]) => `<rect x="${x}" y="${f1(+y + dy)}" width="${w}" height="${h}" fill="${cor}"/>`).join("")).join("");
  return `<g class="estrelas lentas">${camada(lentas, .8, .8, "#6b6f78")}</g><g class="estrelas rapidas">${camada(rapidas, 1, 2, "#F4F4F2")}</g>`; })();
const tiro = s => {  // o laser sai aos 0,3 s e o disco explode aos 0,45 s, como no som
  if (s === 0) return "";
  const [tx, ty] = alvoNave(s), cores = ["#FFD100", "#F7941D", "#fff", "#E8412C"];
  const faiscas = Array.from({ length: 8 }, (_, k) => { const a = k * Math.PI / 4 + .3, r = 7 + (k % 3) * 2;
    return `<rect class="faisca" x="${f1(tx - .8)}" y="${f1(ty - .8)}" width="1.6" height="1.6" fill="${cores[k % 4]}" style="--dx:${f1(Math.cos(a) * r)}px;--dy:${f1(Math.sin(a) * r)}px"/>`; }).join("");
  return `<rect class="laser" x="${f1(tx - .7)}" y="${ty + 3}" width="1.4" height="${86 - ty}"/><circle class="clarao" cx="${tx}" cy="${ty}" r="4"/>${faiscas}`;
};
const pontos = s => `PONTOS ${String((7 - s) * 100).padStart(6, "0")}`;
const nave = {
  html: s => { const [nx] = alvoNave(s);
    return `<div class="cena en en-nave">${badgeEn}${rot}<div class="num">${s}</div><svg viewBox="0 0 160 112" aria-hidden="true">
      <defs><clipPath id="ct-en-espaco"><rect width="160" height="112" rx="4"/></clipPath></defs>
      <rect class="espaco" width="160" height="112" rx="4"/><g clip-path="url(#ct-en-espaco)">${ESTRELAS}
      <text class="hud" x="6" y="9">${pontos(s)}</text>
      ${Array.from({ length: 7 }, (_, k) => { const [x, y] = posDisco(k), o = ORDEM.indexOf(k);
        return `<g class="disco${o < 7 - s ? " abatido" : ""}${s > 0 && o === 7 - s ? " alvo" : ""}" data-k="${k}" transform="translate(${x} ${y})">
          <g class="flutua" style="animation-delay:${f1(-k * .2)}s"><g transform="translate(-5.5 -2.5)">${pixels(DISCO, COR_DISCO)}</g></g></g>`; }).join("")}
      <g class="tiros">${tiro(s)}</g>
      <g class="sobe"><g class="nave" style="transform: translateX(${nx}px)"><g transform="translate(-5.5 89)">${pixels(NAVE, COR_NAVE)}</g></g></g></g>
    </svg><div class="grito">Próxima fase!</div></div>`; },
  depois: (c, s) => {
    c.querySelectorAll(".disco").forEach(d => { const o = ORDEM.indexOf(+d.dataset.k);
      d.classList.toggle("abatido", o < 7 - s); d.classList.toggle("alvo", s > 0 && o === 7 - s); });
    c.querySelector(".nave").style.transform = `translateX(${alvoNave(s)[0]}px)`;
    c.querySelector(".tiros").innerHTML = tiro(s);
    c.querySelector(".hud").textContent = pontos(s);
  } };
const ENTRETENIMENTO = [filme, claquete, pipoca, tv, vinil, violao, quadrinhos, manga, cartas, fliperama, nave];

// ---- Geografia (2026-11-26): o globo e dez cenas com som próprio (arena-suspense.js, "Geografia|1" a "|10"),
// sorteadas como as de História. depois(caixa, s) não depende do segundo anterior.
const badgeGeo = `<span class="badge" style="background:#00A84F;color:#000">Geografia</span>`;

// ---- 1. Painel do aeroporto
const VOOS = [["LISBOA", "A12"], ["TÓQUIO", "B03"], ["CAIRO", "C21"], ["OTTAWA", "A08"], ["CANBERRA", "D15"], ["NAIRÓBI", "B06"],
              ["BOGOTÁ", "C19"], ["OSLO", "A02"], ["HANÓI", "D11"], ["LIMA", "B17"]];
const LARG = [10, 3, 10];  // destino, portão, situação (letras de cada coluna)
// As quatro linhas do painel no segundo s: o voo de cima embarca; no zero, embarca a pergunta.
function linhasPainel(s) {
  const i = 7 - s;
  return [0, 1, 2, 3].map(r => {
    const [dest, portao] = s === 0 && r === 0 ? ["PERGUNTA", "M02"] : VOOS[Math.min(VOOS.length - 1, s === 0 ? i + r - 1 : i + r)];
    return [dest, portao, r === 0 ? "EMBARQUE" : r === 1 ? "CONFIRMADO" : "NO HORÁRIO"];
  });
}
const celulas = (txt, n) => [...txt.padEnd(n, " ").slice(0, n)].map(c => `<i class="cel">${c === " " ? "&nbsp;" : c}</i>`).join("");
const AVIAO = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg>`;
const LETRAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function virar(cel, final, atraso) {
  const alvo = final === " " ? " " : final, passos = 2 + Math.floor(Math.random() * 4);
  const bater = ch => { cel.textContent = ch; cel.classList.toggle("va"); cel.classList.toggle("vb", !cel.classList.contains("va")); };
  for (let k = 0; k < passos; k++) setTimeout(() => bater(LETRAS[Math.floor(Math.random() * LETRAS.length)]), atraso + k * 45);
  setTimeout(() => bater(alvo === " " ? " " : alvo), atraso + passos * 45);
}
const aeroporto = {
  html: s => `<div class="cena ge ge-aero">${badgeGeo}${rot}<div class="painel">
      <div class="topo-painel">${AVIAO}<b>PARTIDAS</b><small>Embarque<br>em</small><div class="placa"><div class="num">${s}</div></div></div>
      <div class="cab"><span>DESTINO</span><span>PORTÃO</span><span>SITUAÇÃO</span></div>
      ${linhasPainel(s).map((l, r) => `<div class="linha-voo${r === 0 ? " embarque" : ""}">${l.map((t, c) => `<span class="campo${c === 2 ? " situacao" : ""}">${celulas(t, LARG[c])}</span>`).join("")}</div>`).join("")}
    </div></div>`,
  depois: (c, s) => {
    linhasPainel(s).forEach((l, r) => {
      const campos = c.querySelectorAll(".linha-voo")[r].querySelectorAll(".campo");
      l.forEach((t, col) => [...t.padEnd(LARG[col], " ")].forEach((ch, j) => {
        const cel = campos[col].children[j], atual = cel.textContent === " " ? " " : cel.textContent;
        if (atual !== ch) virar(cel, ch, (col * 6 + j) * 9);
      }));
    });
  },
};

// ---- 2. Bússola
const ANG_BUS = { 7: 90, 6: 225, 5: 405, 4: 270, 3: 135, 2: 315, 1: 180, 0: 360 };  // sempre pelo caminho mais curto
const RUMO = { 7: "Leste", 6: "Sudoeste", 5: "Nordeste", 4: "Oeste", 3: "Sudeste", 2: "Noroeste", 1: "Sul", 0: "Norte!" };
const rumo = s => `${RUMO[s]} <small>${ANG_BUS[s] % 360}°</small>`;
const bussolaSvg = s => {
  const marcas = Array.from({ length: 36 }, (_, k) => { const a = k * Math.PI / 18, r1 = k % 9 === 0 ? 41 : k % 3 === 0 ? 43 : 45;
    return `<line class="marca${k % 3 === 0 ? " forte" : ""}" x1="${f1(r1 * Math.sin(a))}" y1="${f1(-r1 * Math.cos(a))}" x2="${f1(47 * Math.sin(a))}" y2="${f1(-47 * Math.cos(a))}"/>`; }).join("");
  const letras = [["N", 0, " n"], ["L", 90, ""], ["S", 180, ""], ["O", 270, ""], ["NE", 45, " p"], ["SE", 135, " p"], ["SO", 225, " p"], ["NO", 315, " p"]]
    .map(([t, a, c]) => { const r = c ? 30 : 35, rad = a * Math.PI / 180;
      return `<text class="letra${c}" x="${f1(r * Math.sin(rad))}" y="${f1(-r * Math.cos(rad))}">${t}</text>`; }).join("");
  const ponta = (a, r, cls) => { const rad = a * Math.PI / 180, w = r > 20 ? 5 : 3.4, e = (a - 90) * Math.PI / 180, d = (a + 90) * Math.PI / 180;
    const p = [r * Math.sin(rad), -r * Math.cos(rad)], l = [w * Math.sin(e), -w * Math.cos(e)], q = [w * Math.sin(d), -w * Math.cos(d)];
    return `<path class="rosa-a" d="M0 0 L${f1(p[0])} ${f1(p[1])} L${f1(l[0])} ${f1(l[1])} Z"/><path class="rosa-b" d="M0 0 L${f1(p[0])} ${f1(p[1])} L${f1(q[0])} ${f1(q[1])} Z"/>`; };
  const rosa = [45, 135, 225, 315].map(a => ponta(a, 18)).join("") + [0, 90, 180, 270].map(a => ponta(a, 26)).join("");
  return `<svg viewBox="-60 -60 120 120" aria-hidden="true"><circle class="aro1" r="57"/><circle class="aro2" r="53"/><circle class="face" r="48"/>
    ${marcas}${rosa}${letras}
    <g class="agulha" style="transform: rotate(${ANG_BUS[s]}deg)"><path class="norte" d="M0 -40 L4.6 0 L-4.6 0 Z"/><path class="sul" d="M0 40 L4.6 0 L-4.6 0 Z"/></g>
    <circle class="pino" r="3.4"/><ellipse class="vidro" cx="-14" cy="-22" rx="22" ry="11" transform="rotate(-30 -14 -22)"/></svg>`;
};
const bussola = {
  html: s => `<div class="cena ge ge-bus">${badgeGeo}${rot}<div class="linha">${bussolaSvg(s)}<div class="numbox"><div class="num">${s}</div><div class="rumo">${rumo(s)}</div></div></div></div>`,
  depois: (c, s) => { c.querySelector(".agulha").style.transform = `rotate(${ANG_BUS[s]}deg)`; c.querySelector(".rumo").innerHTML = rumo(s); },
};

// ---- 3. Monumentos à noite
const MON = [["Torre Eiffel", "Paris"], ["Big Ben", "Londres"], ["Torre de Pisa", "Pisa"], ["Taj Mahal", "Agra"], ["Cristo Redentor", "Rio de Janeiro"],
             ["Ópera de Sydney", "Sydney"], ["Pirâmides de Gizé", "Gizé"]];
const facho = x => `<polygon class="facho" points="${x - 3},104 ${x + 3},104 ${x + 15},26 ${x - 15},26"/>`;
const MONUMENTOS = [
  `${facho(18)}<path class="sil" fill-rule="evenodd" d="M8 102 L14.5 72 L16.5 52 L17.5 30 L18 21 L18.5 30 L19.5 52 L21.5 72 L28 102 Z M12 102 Q18 89 24 102 Z"/><rect class="sil" x="12.6" y="71" width="10.8" height="1.6"/><rect class="sil" x="15.4" y="51" width="5.2" height="1.4"/>`,
  `${facho(44)}<rect class="sil" x="39.5" y="50" width="9" height="52"/><rect class="sil" x="38.5" y="44" width="11" height="12"/><polygon class="sil" points="38.5,44 44,26 49.5,44"/><circle class="det relogio" cx="44" cy="50" r="3.2"/>`,
  `${facho(68)}<g transform="rotate(5 68 102)"><rect class="sil" x="62" y="52" width="12" height="50" rx="1.5"/><rect class="sil" x="64" y="45" width="8" height="8" rx="1"/>${[60, 68, 76, 84, 92].map(y => `<rect class="det" x="62" y="${y}" width="12" height=".9"/>`).join("")}</g>`,
  `${facho(100)}<rect class="sil" x="84" y="92" width="32" height="10"/><rect class="sil" x="89" y="71" width="22" height="22"/><path class="det" d="M96 92 V82 Q100 76 104 82 V92 Z"/>
     <path class="sil" d="M91 72 C91 60 97 54 100 48 C103 54 109 60 109 72 Z"/><rect class="sil" x="99.5" y="42" width="1" height="7"/>
     <path class="sil" d="M86 72 C86 67 88.5 65 89.5 63 C90.5 65 93 67 93 72 Z"/><path class="sil" d="M107 72 C107 67 109.5 65 110.5 63 C111.5 65 114 67 114 72 Z"/>
     <rect class="sil" x="80" y="62" width="2.6" height="40"/><rect class="sil" x="117.4" y="62" width="2.6" height="40"/><circle class="sil" cx="81.3" cy="61" r="1.8"/><circle class="sil" cx="118.7" cy="61" r="1.8"/>`,
  `${facho(140)}<path class="morro" d="M120 102 Q130 82 140 77 Q150 82 160 102 Z"/><rect class="sil" x="137.8" y="73.6" width="4.4" height="3.6"/>
     <path class="sil" d="M137.3 74 L138.4 56.5 L141.6 56.5 L142.7 74 Z"/><path class="sil" d="M129.5 56.4 Q140 54 150.5 56.4 L150.5 58.3 Q140 56.4 129.5 58.3 Z"/><circle class="sil" cx="140" cy="53" r="1.9"/>`,
  `${facho(177)}<rect class="sil" x="161" y="96" width="34" height="6"/><path class="sil" d="M164 96 Q166 80 176 73 Q172 84 172 96 Z"/><path class="sil" d="M171 96 Q174 78 187 71 Q181 84 180 96 Z"/><path class="sil" d="M179 96 Q183 82 194 79 Q189 88 188 96 Z"/>`,
  `${facho(211)}<path class="sil" d="M188 102 L196 90 L204 102 Z"/><path class="sil" d="M198 102 L211 82 L224 102 Z"/><path class="det" d="M211 82 L224 102 L216 102 Z"/>`,
];
const FOGOS = [[46, 30, "#FFD100"], [112, 22, "#E8412C"], [178, 32, "#00A84F"], [84, 42, "#3fa9f5"]].map(([x, y, cor], b) =>
  Array.from({ length: 14 }, (_, k) => { const a = k * Math.PI / 7, r = 13 + (k % 2) * 4;
    return `<circle class="faisca" cx="${x}" cy="${y}" r="1.1" fill="${cor}" style="--dx:${f1(Math.cos(a) * r)}px;--dy:${f1(Math.sin(a) * r)}px;--d:${(.15 + b * .28).toFixed(2)}s"/>`; }).join("")).join("");
const ESTRELAS_NOITE = Array.from({ length: 26 }, (_, k) => { const r = aleatorio(k + 40);
  return `<circle class="estrela" cx="${f1(r() * 226)}" cy="${f1(r() * 60)}" r="${f1(.3 + r() * .5)}" style="animation-delay:${f1(-r() * 2.4)}s"/>`; }).join("");
const ondeMon = s => s > 0 ? `<b>${MON[7 - s][1]}</b> · ${MON[7 - s][0]}` : "<b>Fogos!</b> · sete cidades, sete monumentos";
const monumentos = {
  html: s => `<div class="cena ge ge-mon">${badgeGeo}${rot}<div class="num">${s}</div><svg viewBox="0 0 228 112" aria-hidden="true">
      <defs><linearGradient id="ct-ge-noite" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#070d22"/><stop offset="1" stop-color="#1d2b55"/></linearGradient>
        <linearGradient id="ct-ge-holofote" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#F2C46B" stop-opacity=".42"/><stop offset="1" stop-color="#F2C46B" stop-opacity="0"/></linearGradient></defs>
      <rect width="228" height="112" rx="4" fill="url(#ct-ge-noite)"/>${ESTRELAS_NOITE}
      <circle cx="206" cy="16" r="6" fill="#F1E6D0"/><circle cx="209" cy="14" r="5.4" fill="#0b1430"/>
      ${MONUMENTOS.map((m, k) => `<g class="mon${k < 8 - s - (s ? 0 : 1) ? " acesa" : ""}${k === 5 ? " branca" : ""}" data-k="${k}">${m}</g>`).join("")}
      <rect class="chao" x="0" y="102" width="228" height="10" rx="2"/>${FOGOS}</svg><div class="onde">${ondeMon(s)}</div></div>`,
  depois: (c, s) => { c.querySelectorAll(".mon").forEach(g => g.classList.toggle("acesa", +g.dataset.k < (s ? 8 - s : 7))); c.querySelector(".onde").innerHTML = ondeMon(s); },
};

// ---- 4. Bandeiras
const BANDEIRAS = {
  japao: (w, h) => `<rect width="${w}" height="${h}" fill="#fff"/><circle cx="${w / 2}" cy="${h / 2}" r="${f1(h * .3)}" fill="#BC002D"/>`,
  nigeria: (w, h) => `<rect width="${w}" height="${h}" fill="#fff"/><rect width="${f1(w / 3)}" height="${h}" fill="#008751"/><rect x="${f1(w * 2 / 3)}" width="${f1(w / 3)}" height="${h}" fill="#008751"/>`,
  italia: (w, h) => `<rect width="${w}" height="${h}" fill="#fff"/><rect width="${f1(w / 3)}" height="${h}" fill="#009246"/><rect x="${f1(w * 2 / 3)}" width="${f1(w / 3)}" height="${h}" fill="#CE2B37"/>`,
  colombia: (w, h) => `<rect width="${w}" height="${h / 2}" fill="#FCD116"/><rect y="${h / 2}" width="${w}" height="${h / 4}" fill="#003893"/><rect y="${h * .75}" width="${w}" height="${h / 4}" fill="#CE1126"/>`,
  alemanha: (w, h) => `<rect width="${w}" height="${f1(h / 3)}" fill="#000"/><rect y="${f1(h / 3)}" width="${w}" height="${f1(h / 3)}" fill="#DD0000"/><rect y="${f1(h * 2 / 3)}" width="${w}" height="${f1(h / 3)}" fill="#FFCE00"/>`,
  franca: (w, h) => `<rect width="${w}" height="${h}" fill="#fff"/><rect width="${f1(w / 3)}" height="${h}" fill="#002395"/><rect x="${f1(w * 2 / 3)}" width="${f1(w / 3)}" height="${h}" fill="#ED2939"/>`,
  // O Brasil, simplificado: losango a 1,7 módulo das bordas, círculo de raio 3,5 módulos, faixa branca em arco e algumas estrelas.
  brasil: (w, h) => { const m = w / 20;
    return `<defs><clipPath id="ct-ge-esfera"><circle cx="${f1(10 * m)}" cy="${f1(7 * m)}" r="${f1(3.5 * m)}"/></clipPath></defs>
      <rect width="${w}" height="${h}" fill="#009C3B"/><polygon points="${f1(1.7 * m)},${f1(7 * m)} ${f1(10 * m)},${f1(1.7 * m)} ${f1(18.3 * m)},${f1(7 * m)} ${f1(10 * m)},${f1(12.3 * m)}" fill="#FFDF00"/>
      <circle cx="${f1(10 * m)}" cy="${f1(7 * m)}" r="${f1(3.5 * m)}" fill="#002776"/>
      <g clip-path="url(#ct-ge-esfera)"><circle cx="${f1(11.9 * m)}" cy="${f1(16.35 * m)}" r="${f1(10.05 * m)}" fill="none" stroke="#fff" stroke-width="${f1(.55 * m)}"/>
      ${[[9, 8.6], [10.4, 9.2], [11.6, 8.4], [8.2, 9.6], [10, 10.1], [12.2, 9.5], [9.6, 9.6]].map(([x, y]) => `<circle cx="${f1(x * m)}" cy="${f1(y * m)}" r="${f1(.16 * m)}" fill="#fff"/>`).join("")}</g>`; },
};
const MASTROS = [["japao", "Japão"], ["nigeria", "Nigéria"], ["italia", "Itália"], ["brasil", "Brasil"], ["colombia", "Colômbia"], ["alemanha", "Alemanha"], ["franca", "França"]];
const ORDEM_BAND = [0, 6, 1, 5, 2, 4, 3];  // de fora para dentro; o Brasil, no meio, no 1
const hasteadas = s => s > 0 ? ORDEM_BAND.slice(0, 8 - s) : ORDEM_BAND;
const CONFETE = Array.from({ length: 26 }, (_, k) => { const r = aleatorio(k + 7);
  return `<rect class="confete" x="${f1(20 + r() * 184)}" y="${f1(-4 - r() * 10)}" width="2" height="1.2" fill="${["#009C3B", "#FFDF00", "#002776", "#fff"][k % 4]}" style="--dx:${f1(r() * 30 - 15)}px;--d:${f1(r() * .5)}s"/>`; }).join("");
const bandeiras = {
  html: s => { const h = hasteadas(s);
    return `<div class="cena ge ge-band">${badgeGeo}${rot}<div class="num">${s}</div><svg viewBox="0 0 224 102" aria-hidden="true">
      <rect class="chao" x="0" y="88" width="224" height="3" rx="1.5"/>
      ${MASTROS.map(([id, nome], k) => { const x = 16 + k * 32, br = id === "brasil", topo = br ? 8 : 30, [w, hh] = br ? [30, 21] : [26, 17.3];
        return `<g class="mastro${br ? " brasil" : ""}${h.includes(k) ? " hasteada" : ""}" data-k="${k}"><line class="haste" x1="${x}" y1="${topo}" x2="${x}" y2="89"/>
          <circle class="ponta" cx="${x}" cy="${topo - 1.5}" r="1.6"/><g class="sobe"><g transform="translate(${x + .6} ${topo + 1})"><g class="tremula">${BANDEIRAS[id](w, hh)}</g></g></g>
          <text class="pais" x="${x}" y="98.5">${nome}</text></g>`; }).join("")}${CONFETE}</svg></div>`; },
  depois: (c, s) => { const h = hasteadas(s); c.querySelectorAll(".mastro").forEach(g => g.classList.toggle("hasteada", h.includes(+g.dataset.k))); },
};

// ---- 5. Idiomas
const OLAS = { 7: ["こんにちは", "japonês", "oiia", 250, -.15], 6: ["Jambo", "suaíli", "ao", 140, .1], 5: ["مرحبا", "árabe", "aaa", 175, .05],
               4: ["Привет", "russo", "ie", 130, -.1], 3: ["नमस्ते", "hindi", "aae", 215, .12], 2: ["你好", "mandarim", "ia", 255, -.25],
               1: ["Bonjour", "francês", "ou", 165, .2], 0: ["Olá!", "português", "oa", 205, .35] };
const LINGUA = { 7: "ja", 6: "sw", 5: "ar", 4: "ru", 3: "hi", 2: "zh", 1: "fr", 0: "pt" };  // para a fonte certa de cada escrita
const POS_IDI = Array.from({ length: 7 }, (_, k) => { const a = -Math.PI / 2 + k * 2 * Math.PI / 7; return [50 + 39 * Math.cos(a), 50 + 38 * Math.sin(a)]; });
const idiomas = {
  html: s => `<div class="cena ge ge-idi">${badgeGeo}${rot}<div class="roda">
      <div class="globinho"><svg viewBox="-50 -50 100 100" aria-hidden="true"><circle class="mar" r="46"/><ellipse class="mer" rx="20" ry="46"/><ellipse class="mer" rx="38" ry="46"/>
        <line class="mer" x1="-46" x2="46" y1="0" y2="0"/><line class="mer" x1="-40" x2="40" y1="-22" y2="-22"/><line class="mer" x1="-40" x2="40" y1="22" y2="22"/></svg>
        <div class="num">${s}</div></div>
      ${POS_IDI.map(([x, y], k) => { const [txt, lingua] = OLAS[7 - k];
        return `<div class="balao${k < 8 - s && s > 0 || s === 0 ? " dito" : ""}${s > 0 && k === 7 - s ? " agora" : ""}" data-k="${k}" lang="${LINGUA[7 - k]}"${LINGUA[7 - k] === "ar" ? ' dir="rtl"' : ""} style="left:${f1(x)}%;top:${f1(y)}%;--d:${(k * .07).toFixed(2)}s"><b>${txt}</b><small lang="pt" dir="ltr">${lingua}</small></div>`; }).join("")}
    </div><div class="grito">Olá!</div></div>`,
  depois: (c, s) => c.querySelectorAll(".balao").forEach(b => { const k = +b.dataset.k;
    b.classList.toggle("dito", s === 0 || k < 8 - s); b.classList.toggle("agora", s > 0 && k === 7 - s); }),
};

// ---- 6. Vulcão
const FUMOS = Array.from({ length: 6 }, (_, k) => `<circle class="fumo" cx="${96 + (k % 3) * 4}" cy="33" r="5" style="--d:${f1(-k * .43)}s;--dx:${f1((k % 2 ? 1 : -1) * (4 + k * 2))}px"/>`).join("");
const BOMBAS = Array.from({ length: 16 }, (_, k) => { const r = aleatorio(k + 3), lado = k % 2 ? 1 : -1;
  return `<circle class="bomba" cx="100" cy="36" r="${f1(1.2 + r() * 1.4)}" fill="${["#FFB347", "#FF6A00", "#FFD100"][k % 3]}" style="--dx:${f1(lado * (10 + r() * 60))}px;--up:${f1(26 + r() * 30)}px;--d:${f1(r() * .35)}s"/>`; }).join("");
const vulcao = {
  html: s => `<div class="cena ge ge-vul">${badgeGeo}${rot}<div class="num">${s}</div><svg viewBox="0 0 200 116" aria-hidden="true" style="--brasa:${f1(.15 + (7 - s) * .12)}">
      <defs><linearGradient id="ct-ge-crepusculo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a1020"/><stop offset="1" stop-color="#4a1f18"/></linearGradient>
        <radialGradient id="ct-ge-brasa"><stop offset="0" stop-color="#FF6A00" stop-opacity=".9"/><stop offset="1" stop-color="#FF6A00" stop-opacity="0"/></radialGradient></defs>
      <rect width="200" height="116" rx="4" fill="url(#ct-ge-crepusculo)"/><circle class="brasa" cx="100" cy="36" r="44" fill="url(#ct-ge-brasa)"/>
      <path class="serra" d="M0 116 L0 84 L26 70 L48 82 L70 66 L130 66 L150 76 L174 64 L200 78 L200 116 Z"/>
      <path class="cone" d="M18 116 L80 42 Q86 35 92 37 L108 37 Q114 35 120 42 L182 116 Z"/>
      <path class="estrato" d="M58 76 Q100 70 142 76 M44 94 Q100 86 156 94"/>
      ${["M92 38 Q84 56 78 70 Q72 86 62 104", "M104 38 Q108 58 116 74 Q124 90 134 108", "M99 38 Q98 60 102 80 Q104 92 100 106"].map(d =>
        `<path class="corrida" pathLength="1" d="${d}" style="stroke-dashoffset:${f1(s / 7)}"/>`).join("")}
      <path class="jorro" d="M92 37 Q96 6 100 2 Q104 6 108 37 Z"/>
      <ellipse class="cratera" cx="100" cy="37.5" rx="9" ry="2.4"/>${FUMOS}${BOMBAS}</svg><div class="grito">Erupção!</div></div>`,
  depois: (c, s) => { c.querySelectorAll(".corrida").forEach(p => p.style.strokeDashoffset = f1(s / 7));
                      c.querySelector("svg").style.setProperty("--brasa", f1(.15 + (7 - s) * .12)); },
};

// ---- 7. Everest
const ROTA = [[52, 104], [70, 92], [88, 80], [104, 66], [118, 51], [126, 37], [133, 23], [138, 14]];
const ALT = [["Acampamento-base", "5.364 m"], ["Acampamento 1", "6.065 m"], ["Acampamento 2", "6.400 m"], ["Acampamento 3", "7.162 m"],
             ["Acampamento 4", "7.906 m"], ["A Varanda", "8.400 m"], ["Cume Sul", "8.749 m"], ["Cume do Everest", "8.849 m"]];
const FLOCOS = Array.from({ length: 14 }, (_, k) => { const r = aleatorio(k + 70);
  return `<circle class="floco" cx="${f1(60 + r() * 140)}" cy="${f1(6 + r() * 70)}" r="${f1(.5 + r() * .6)}" style="--d:${f1(-r() * 1.1)}s"/>`; }).join("");
const ALPINISTA = `<g class="passo"><path d="M-.6 0 L0 -3 L.8 0" fill="none" stroke="#1b1d22" stroke-width=".7" stroke-linecap="round"/>
  <rect x="-1.2" y="-6.2" width="2.4" height="3.4" rx=".8" fill="#E8412C"/><rect x="-2.3" y="-6" width="1.3" height="2.6" rx=".4" fill="#FFD100"/>
  <circle cx=".1" cy="-7.2" r="1.1" fill="#F1E6D0"/><path d="M1 -5.4 L2.6 -3.4" stroke="#A0A4AB" stroke-width=".5"/></g>`;
const everest = {
  html: s => { const [x, y] = ROTA[7 - s];
    return `<div class="cena ge ge-eve">${badgeGeo}${rot}<div class="num">${s}</div><svg viewBox="0 0 200 116" aria-hidden="true">
      <defs><linearGradient id="ct-ge-altitude" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d3b66"/><stop offset="1" stop-color="#8ec5e8"/></linearGradient>
        <clipPath id="ct-ge-quadro-eve"><rect width="200" height="116" rx="4"/></clipPath></defs>
      <rect width="200" height="116" rx="4" fill="url(#ct-ge-altitude)"/>
      <path class="longe" d="M0 116 L0 64 L24 48 L40 58 L62 36 L84 54 L100 44 L112 56 L130 62 L160 40 L180 50 L200 42 L200 116 Z"/>
      <path class="neve" d="M56 42 L62 36 L68 42 L64 41 L62 44 L59 41 Z M154 45 L160 40 L166 45 L162 44 L160 47 Z"/>
      <path class="rocha" d="M28 116 L92 58 L106 66 L138 14 L168 54 L200 70 L200 116 Z"/>
      <path class="neve" d="M116 48 L138 14 L158 40 L150 38 L144 46 L137 37 L130 46 L123 41 Z"/><path class="sombra-neve" d="M138 14 L158 40 L150 38 L144 46 L140 30 Z"/>
      <polyline class="rota" points="${ROTA.map(p => p.join(",")).join(" ")}"/>
      ${ROTA.slice(0, 5).map(([a, b]) => `<path class="tenda" d="M${a - 3} ${b} L${a} ${b - 3.5} L${a + 3} ${b} Z"/>`).join("")}
      ${ROTA.slice(5, 7).map(([a, b]) => `<circle class="marco" cx="${a}" cy="${b}" r="1"/>`).join("")}
      <g transform="translate(138 14)"><g class="bandeira"><line x1="0" y1="0" x2="0" y2="-9" stroke="#F4F4F2" stroke-width=".6"/><path d="M0 -9 L7 -7 L0 -5 Z" fill="#00A84F"/></g></g>
      <g class="alpinista" style="transform: translate(${x}px, ${y}px)">${ALPINISTA}</g><g clip-path="url(#ct-ge-quadro-eve)">${FLOCOS}</g></svg>
      <div class="altitude"><span>${ALT[7 - s][0]}</span><b>${ALT[7 - s][1]}</b></div></div>`; },
  depois: (c, s) => { const [x, y] = ROTA[7 - s]; c.querySelector(".alpinista").style.transform = `translate(${x}px, ${y}px)`;
                      c.querySelector(".altitude").innerHTML = `<span>${ALT[7 - s][0]}</span><b>${ALT[7 - s][1]}</b>`; },
};

// ---- 8. Rio São Francisco
const PARADAS = [[36, 104, "Serra da Canastra (MG)", "nascente"], [44, 82, "Pirapora (MG)", ""], [62, 62, "Bom Jesus da Lapa (BA)", ""],
                 [88, 36, "Juazeiro (BA) e Petrolina (PE)", ""], [122, 40, "Paulo Afonso (BA)", ""], [140, 52, "Piranhas (AL)", ""],
                 [156, 64, "Penedo (AL)", ""], [170, 74, "Foz, no Atlântico", "entre Alagoas e Sergipe"]];
const CURVAS = [[30, 96, 40, 92], [48, 72, 54, 70], [70, 50, 78, 40], [100, 28, 110, 36], [130, 44, 134, 46], [148, 54, 150, 60], [162, 68, 166, 70]];
const trecho = k => { const [x0, y0] = PARADAS[k], [x1, y1] = PARADAS[k + 1], [a, b, c, d] = CURVAS[k]; return `M${x0} ${y0} C${a} ${b} ${c} ${d} ${x1} ${y1}`; };
const pontoRio = s => { const [, , nome, extra] = PARADAS[7 - s]; return `<span>${nome}</span>${extra ? `<small>${extra}</small>` : ""}`; };
const rio = {
  html: s => `<div class="cena ge ge-rio">${badgeGeo}${rot}<div class="num">${s}</div><svg viewBox="0 0 200 116" aria-hidden="true">
      <rect class="terra" width="200" height="116" rx="4"/><path class="seco" d="M34 20 C58 4 118 4 150 14 C164 28 158 44 140 48 C116 54 88 60 66 72 C50 60 36 42 34 20 Z"/><text class="sertao" x="104" y="18">Sertão</text>
      <path class="mar" d="M168 0 L200 0 L200 116 L150 116 Q160 96 170 76 Q178 60 176 44 Q180 20 168 0 Z"/>
      <g class="ondinha">${[20, 40, 60, 80, 100].map(y => `<path class="onda" d="M182 ${y} q3 -2 6 0 t6 0"/>`).join("")}</g>
      <path class="serra" d="M22 112 L30 100 L36 106 L42 98 L50 112 Z"/>
      ${PARADAS.slice(0, 7).map((_, k) => `<path class="leito" d="${trecho(k)}"/>`).join("")}
      ${PARADAS.slice(0, 7).map((_, k) => `<path class="seg${classeTrecho(k, s)}" data-k="${k}" pathLength="1" d="${trecho(k)}"/>`).join("")}
      ${PARADAS.map(([x, y, nome], k) => `<circle class="cidade${k <= 7 - s ? " vista" : ""}" data-k="${k}" cx="${x}" cy="${y}" r="${k === 7 ? 2.4 : 1.8}"/>
        <text class="rotulo${k <= 7 - s ? " visto" : ""}" data-k="${k}" x="${x + (k === 7 ? -6 : 3)}" y="${y - 3}" ${k === 7 ? 'text-anchor="end"' : ""}>${nome.replace(/ \(.*/, "")}</text>`).join("")}
      ${[0, 1, 2].map(k => `<circle class="anel" cx="170" cy="74" r="5" style="--d:${k * .4}s"/>`).join("")}
    </svg><div class="ponto">${pontoRio(s)}</div><div class="grito">Foz!</div></div>`,
  depois: (c, s) => {
    c.querySelectorAll(".seg").forEach(p => { const k = +p.dataset.k; p.classList.remove("corre"); p.classList.toggle("cheio", s === 0 || k < 7 - s);
      if (s > 0 && k === 7 - s) { void p.getBoundingClientRect(); p.classList.add("corre"); } });
    c.querySelectorAll(".cidade, .rotulo").forEach(e => e.classList.toggle(e.tagName === "text" ? "visto" : "vista", +e.dataset.k <= 7 - s));
    c.querySelector(".ponto").innerHTML = pontoRio(s);
  },
};
// No segundo s corre o trecho 7 - s (da parada de agora até a seguinte); os anteriores ficam cheios.
function classeTrecho(k, s) { return s === 0 || k < 7 - s ? " cheio" : k === 7 - s ? " corre" : ""; }

// ---- 9. Farol
const ONDAS = (y, cls) => `<path class="vaga ${cls}" d="M-40 ${y} ${Array.from({ length: 15 }, () => "q5 -2.2 10 0 t10 0").join(" ")}"/>`;
const navioX = s => 186 - (7 - s) * 7;
const farol = {
  html: s => `<div class="cena ge ge-far">${badgeGeo}${rot}<div class="num">${s}</div><svg viewBox="0 0 200 116" aria-hidden="true">
      <defs><linearGradient id="ct-ge-mar-noite" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#06122a"/><stop offset="1" stop-color="#173f66"/></linearGradient>
        <linearGradient id="ct-ge-luz" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFF6D5" stop-opacity=".75"/><stop offset="1" stop-color="#FFF6D5" stop-opacity="0"/></linearGradient>
        <clipPath id="ct-ge-torre"><path d="M42 86 L45 36 L55 36 L58 86 Z"/></clipPath>
        <clipPath id="ct-ge-quadro-far"><rect width="200" height="116" rx="4"/></clipPath></defs>
      <rect width="200" height="116" rx="4" fill="url(#ct-ge-mar-noite)"/><g clip-path="url(#ct-ge-quadro-far)">
      ${Array.from({ length: 16 }, (_, k) => { const r = aleatorio(k + 90); return `<circle class="astro" cx="${f1(r() * 200)}" cy="${f1(r() * 50)}" r="${f1(.3 + r() * .4)}" style="animation-delay:${f1(-r() * 3)}s"/>`; }).join("")}
      <g transform="translate(50 30)"><g class="facho"><path d="M0 -2.5 L170 -18 L170 18 L0 2.5 Z" fill="url(#ct-ge-luz)"/></g><circle class="clarao" r="7"/></g>
      <rect class="agua" y="80" width="200" height="36"/>
      <g class="navio" style="transform: translateX(${navioX(s)}px)"><g class="balanco"><path class="casco" d="M-10 84 L10 84 L7 89 L-7 89 Z"/><rect class="ponte" x="-4" y="79" width="7" height="5"/>
        <rect class="janela" x="-2.6" y="80.4" width="1.4" height="1.2"/><rect class="janela" x="0" y="80.4" width="1.4" height="1.2"/><rect class="ponte" x="3.6" y="77" width="1.6" height="7"/>
        ${[0, 1, 2].map(k => `<circle class="vapor" cx="4.4" cy="75" r="1.6" style="--d:${k * .15}s;--dx:${-3 - k * 2}px"/>`).join("")}</g></g>
      <path class="rocha" d="M20 116 L26 92 L38 84 L62 84 L74 94 L82 116 Z"/>
      <g clip-path="url(#ct-ge-torre)">${[36, 46, 56, 66, 76].map((y, k) => `<rect class="${k % 2 ? "faixa-b" : "faixa-v"}" x="40" y="${y}" width="20" height="10"/>`).join("")}</g>
      <rect class="galeria" x="42" y="34" width="16" height="2.4" rx=".6"/><rect class="lanterna" x="45.5" y="26.5" width="9" height="7.5" rx="1"/>
      <path class="teto" d="M44 27 L50 20 L56 27 Z"/><rect class="galeria" x="48.4" y="78" width="3.2" height="8" rx="1.4"/>
      ${ONDAS(90, "v1")}${ONDAS(100, "v2")}${ONDAS(110, "v1")}</g></svg></div>`,
  depois: (c, s) => { reinicia(c.querySelector(".facho")); reinicia(c.querySelector(".clarao")); c.querySelector(".navio").style.transform = `translateX(${navioX(s)}px)`; },
};

// ---- 10. Biomas do Brasil
const VISTAS = [
  ["Amazônia", "bioma 1 de 6", `<rect width="200" height="100" fill="#a9d8c8"/><path d="M0 70 L200 70 L200 100 L0 100 Z" fill="#a87b44"/><path d="M0 84 Q60 78 100 84 T200 82 L200 100 L0 100 Z" fill="#2a1f14"/>
     ${Array.from({ length: 16 }, (_, k) => `<circle cx="${k * 13 + 4}" cy="${56 + (k % 3) * 3}" r="${12 + (k % 4) * 2}" fill="#1f6b3a"/>`).join("")}
     ${Array.from({ length: 13 }, (_, k) => `<circle cx="${k * 16 + 8}" cy="${64 + (k % 2) * 3}" r="${9 + (k % 3) * 2}" fill="#2f8f4e"/>`).join("")}
     <path d="M126.5 62 L128.2 25 L130.8 25 L133.5 62 Z" fill="#5b4632"/><ellipse cx="117" cy="26" rx="12" ry="5" fill="#246f3e"/><ellipse cx="141" cy="25" rx="13" ry="5.4" fill="#2a7a44"/><ellipse cx="129" cy="21" rx="14" ry="5" fill="#1f6b3a"/>
     <g class="ave"><path d="M20 30 l6 -3 l-2 3 l6 1 l-8 1 z" fill="#E8412C"/></g>`],
  ["Cerrado", "bioma 2 de 6", `<rect width="200" height="100" fill="#8cc8f0"/><path d="M0 64 Q100 58 200 64 L200 100 L0 100 Z" fill="#c9b25a"/>
     ${[[30, 70], [90, 66], [150, 72]].map(([x, y]) => `<path d="M${x} ${y} l2 -10 l-3 -6 l4 -6" fill="none" stroke="#5b3a22" stroke-width="2"/><ellipse cx="${x + 3}" cy="${y - 23}" rx="13" ry="6" fill="#6f8f3a"/>`).join("")}
     <path d="M112 80 Q116 58 122 80 Z" fill="#b5653a"/><path d="M62 82 Q64 68 68 82 Z" fill="#b5653a"/>
     ${Array.from({ length: 12 }, (_, k) => `<path d="M${k * 17 + 6} 90 l2 -6 l2 6" fill="none" stroke="#7a8f2a" stroke-width="1"/>`).join("")}`],
  ["Caatinga", "bioma 3 de 6", `<rect width="200" height="100" fill="#f3dca6"/><circle cx="160" cy="22" r="11" fill="#FFB347"/><path d="M0 70 Q100 64 200 70 L200 100 L0 100 Z" fill="#c79a5a"/>
     <path d="M20 86 l14 -3 l8 4 M120 92 l10 -4 l12 2" fill="none" stroke="#a87b44" stroke-width=".8"/>
     ${[[50, 76, 30], [140, 78, 22]].map(([x, y, h]) => `<rect x="${x - 2.5}" y="${y - h}" width="5" height="${h}" rx="2.5" fill="#3f7d4a"/><path d="M${x - 2.5} ${y - h * .45} h-5 v-${h * .3}" fill="none" stroke="#3f7d4a" stroke-width="4" stroke-linecap="round"/><path d="M${x + 2.5} ${y - h * .6} h5 v-${h * .25}" fill="none" stroke="#3f7d4a" stroke-width="4" stroke-linecap="round"/>`).join("")}
     ${[[96, 74], [176, 72], [18, 72]].map(([x, y]) => `<path d="M${x} ${y} l-4 -10 m4 10 l3 -12 m-3 12 l7 -8 m-9 -1 l-3 -4 m8 -6 l2 -4" fill="none" stroke="#7a6a5a" stroke-width="1"/>`).join("")}`],
  ["Pantanal", "bioma 4 de 6", `<rect width="200" height="100" fill="#f6c48a"/><circle cx="40" cy="40" r="9" fill="#FFD100" opacity=".85"/><rect y="62" width="200" height="38" fill="#4f8fb0"/>
     <g class="agua-anim">${[70, 80, 90].map(y => `<path d="M-20 ${y} q10 -2 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="#7fb4cf" stroke-width=".8"/>`).join("")}</g>
     <path d="M0 62 Q30 56 60 62 Z M120 62 Q160 54 200 62 Z" fill="#6a9a3a"/>${[150, 170, 186].map(x => `<rect x="${x}" y="42" width="1.4" height="16" fill="#5b4632"/><circle cx="${x + .7}" cy="42" r="4" fill="#4a7a2a"/>`).join("")}
     <g transform="translate(96 46)"><path d="M0 28 L-2 12 M4 28 L3 12" stroke="#1b1d22" stroke-width="1"/><ellipse cx="1" cy="10" rx="7" ry="4.6" fill="#fff"/><path d="M5 8 Q8 0 6 -6" fill="none" stroke="#1b1d22" stroke-width="2.4"/>
       <rect x="4.6" y="2" width="3" height="2.4" fill="#E8412C"/><circle cx="6" cy="-7" r="2" fill="#1b1d22"/><g class="bico"><path d="M7 -7 L17 -4 L7 -6 Z" fill="#1b1d22"/></g></g>`],
  ["Mata Atlântica", "bioma 5 de 6", `<rect width="200" height="100" fill="#bfe0d4"/><path d="M0 100 L0 40 Q30 18 60 36 Q90 10 120 34 Q150 20 200 38 L200 100 Z" fill="#2f7d4a"/>
     <path d="M0 100 L0 62 Q40 46 80 60 Q120 44 160 58 Q184 50 200 56 L200 100 Z" fill="#1f5e36"/><path d="M98 34 Q99 60 100 86" fill="none" stroke="#e8f4f8" stroke-width="2.2"/>
     <rect x="0" y="48" width="200" height="6" fill="#fff" opacity=".25"/>
     <g transform="translate(150 60)"><rect x="-1" y="0" width="2" height="30" fill="#5b4632"/>${[[-14, 6], [14, 6], [-10, 0], [10, 0], [-6, -5], [6, -5]].map(([dx, dy]) => `<path d="M0 ${dy + 10} Q${dx * .6} ${dy + 6} ${dx} ${dy}" fill="none" stroke="#1d4a2a" stroke-width="1.6"/><ellipse cx="${dx}" cy="${dy - 1}" rx="4" ry="1.8" fill="#1d4a2a"/>`).join("")}</g>`],
  ["Pampa", "bioma 6 de 6", `<rect width="200" height="100" fill="#a9d6f5"/><path d="M0 70 Q50 60 100 68 T200 66 L200 100 L0 100 Z" fill="#7fb34a"/><path d="M0 84 Q60 76 120 84 T200 82 L200 100 L0 100 Z" fill="#6aa33a"/>
     ${Array.from({ length: 9 }, (_, k) => `<rect x="${10 + k * 22}" y="78" width="1.4" height="10" fill="#6b4a2a"/>`).join("")}<path d="M10 81 H186 M10 85 H186" stroke="#6b4a2a" stroke-width=".4"/>
     <rect x="138" y="52" width="2.4" height="18" fill="#5b4632"/><ellipse cx="139" cy="50" rx="14" ry="8" fill="#4f7d2a"/>
     <g transform="translate(70 66)"><ellipse cx="0" cy="0" rx="7" ry="3.6" fill="#3a2a1a"/><rect x="5" y="-4" width="4" height="3" rx="1" fill="#3a2a1a"/>${[-5, -2, 2, 5].map(x => `<rect x="${x}" y="2" width="1" height="4" fill="#3a2a1a"/>`).join("")}</g>`],
  ["Costeiro-Marinho", "sistema costeiro-marinho", `<rect width="200" height="100" fill="#8fd0f5"/><circle cx="170" cy="20" r="10" fill="#FFD100"/><rect y="50" width="200" height="50" fill="#1d78b5"/>
     <g class="agua-anim">${[56, 64, 72].map(y => `<path d="M-20 ${y} q10 -2 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="#5fb0e0" stroke-width=".9"/>`).join("")}</g>
     <path d="M0 100 L0 76 Q60 70 120 82 Q160 88 200 84 L200 100 Z" fill="#f2d8a0"/>
     <path d="M40 92 Q44 60 52 44" fill="none" stroke="#6b4a2a" stroke-width="2.4"/>${[[-14, 4], [12, 6], [-10, -4], [10, -6], [0, -8]].map(([dx, dy]) => `<path d="M52 44 q${dx / 2} ${dy - 4} ${dx} ${dy}" fill="none" stroke="#2f8f4e" stroke-width="2.4" stroke-linecap="round"/>`).join("")}`],
];
const nomeBioma = s => s > 0 ? `${VISTAS[7 - s][0]}<small>${VISTAS[7 - s][1]}</small>` : `Brasil<small>6 biomas e o sistema costeiro-marinho</small>`;
const biomas = {
  html: s => `<div class="cena ge ge-bio">${badgeGeo}${rot}<div class="num">${s}</div><div class="janela">
      ${VISTAS.map(([, , d], k) => `<svg class="vista${s > 0 && k === 7 - s ? " atual" : ""}" data-k="${k}" style="--k:${k}" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${d}</svg>`).join("")}
      <div class="nome troca">${nomeBioma(s)}</div></div></div>`,
  depois: (c, s) => { c.querySelectorAll(".vista").forEach(v => v.classList.toggle("atual", s > 0 && +v.dataset.k === 7 - s));
                      const n = c.querySelector(".nome"); n.innerHTML = nomeBioma(s); repetir(n, "troca"); },
};

const GEOGRAFIA = [aeroporto, bussola, monumentos, bandeiras, idiomas, vulcao, everest, rio, farol, biomas];

// Cada estilo: html(s, decorrido) monta a cena; texto(s) é o que vai no número (os romanos, na História); depois(caixa, s)
// faz o que mais muda a cada segundo. "decorrido" (em segundos) acerta as animações que duram a contagem toda, para quem
// a vê começar no meio (um celular que acabou de entrar).
const ESTILOS = {
  "": { html: s => `<div class="cena gigante">${rot}<div class="num">${s}</div></div>` },
  "Geografia": [{
    html: s => `<div class="cena geo">${badge("Geografia")}${rot}<div class="globo"><svg viewBox="-50 -50 100 100" aria-hidden="true">
      <circle class="mar" r="46"/>
      <line class="lat" x1="-35" x2="35" y1="-30" y2="-30"/><line class="lat" x1="-43.5" x2="43.5" y1="-15" y2="-15"/>
      <line class="lat" x1="-46" x2="46" y1="0" y2="0"/><line class="lat" x1="-43.5" x2="43.5" y1="15" y2="15"/>
      <line class="lat" x1="-35" x2="35" y1="30" y2="30"/>
      ${[0, -1, -2, -3].map(d => `<ellipse class="mer" rx="46" ry="46" style="animation-delay:${d}s"/>`).join("")}
      <path class="pino" d="M24 -40 c-5 0 -8 4 -8 8 c0 6 8 13 8 13 s8 -7 8 -13 c0 -4 -3 -8 -8 -8z"/>
    </svg><div class="num">${s}</div></div></div>` }, ...GEOGRAFIA],
  "História": HISTORIA,
  "Natureza": {
    html: s => `<div class="cena nat">${badge("Natureza")}<div class="linha"><div class="numbox">${rot}<div class="num">${s}</div></div>
      <svg class="planta" viewBox="0 0 100 120" aria-hidden="true"><path class="solo" d="M4 112 Q50 103 96 112 L96 120 L4 120Z"/>
      <path class="caule" d="M50 112 C46 92 55 72 50 52 C46 38 52 26 50 14"/>${folhas}
      <g class="flor">${petalas}<circle cx="50" cy="13" r="4.5" fill="#FFD100"/></g></svg></div></div>` },
  "Artes e Pensamento": {
    html: s => `<div class="cena arte">${badge("Artes e Pensamento")}${rot}<div class="moldura"><div class="tela"><div class="pincel"></div>
      <svg viewBox="0 0 100 75" aria-hidden="true"><text class="num" x="50" y="40" text-anchor="middle" dominant-baseline="central">${s}</text></svg>
      </div></div></div>`,
    depois: caixa => { const p = caixa.querySelector(".pincel"); p.replaceWith(p.cloneNode()); } },
  "Cotidiano": {
    html: (s, decorrido) => `<div class="cena coti">${badge("Cotidiano")}${rot}<div class="relogio"><svg viewBox="-60 -66 120 128" aria-hidden="true">
      <circle class="corpo sino" cx="-31" cy="-44" r="12"/><circle class="corpo sino" cx="31" cy="-44" r="12"/>
      <line x1="-29" y1="40" x2="-38" y2="56" stroke="#E8412C" stroke-width="5" stroke-linecap="round"/>
      <line x1="29" y1="40" x2="38" y2="56" stroke="#E8412C" stroke-width="5" stroke-linecap="round"/>
      <circle class="corpo" r="46"/><circle class="mostrador" r="38"/>${marcasRelogio}
      <line class="ponteiro" x1="0" y1="0" x2="0" y2="-31"><animateTransform attributeName="transform" type="rotate" from="0 0 0"
        to="360 0 0" dur="${SEGUNDOS}s" begin="${(-decorrido).toFixed(2)}s" fill="freeze"/></line><circle r="2.6" fill="#FFD100"/></svg>
      <div class="num">${s}</div></div></div>` },
  "Ciências": {
    html: s => `<div class="cena cien">${badge("Ciências")}${rot}<div class="atomo"><svg viewBox="-60 -60 120 120" aria-hidden="true">
      ${orbita(0, 1.6)}${orbita(60, 2)}${orbita(120, 2.5)}<circle class="nucleo" r="19"/></svg>
      <div class="num">${s}</div></div></div>` },
  "Entretenimento": ENTRETENIMENTO,
  "Esportes": ESPORTES,
};
// Para a galeria (contagens.html): cada tema ("" é o sem tema) e quantas cenas ele tem.
export const CENAS = Object.fromEntries(Object.entries(ESTILOS).map(([t, e]) => [t, [].concat(e).length]));

// Liga a contagem a um elemento da página (vazio, com hidden). mostrar(tema, ms, total, chave) desenha "faltam ms" com a
// animação do tema (com várias, a sorteada pela chave: um número igual em todos os aparelhos) e devolve o número de segundos quando ele acaba de mudar (para tocar o som do segundo), ou null;
// esconder() some.
export function criarContagem(caixa) {
  instalarCss();
  let atual = null, segundos = null;
  return {
    mostrar(tema, ms, total, chave = 0, cena = null) {
      const lista = [].concat(ESTILOS[tema] || ESTILOS[""]);
      const i = cena != null ? Math.min(cena, lista.length - 1)  // a galeria (contagens.html) escolhe a cena
        : lista.length > 1 ? Math.floor(aleatorio(chave)() * lista.length) : 0;
      const e = lista[i], id = `${tema}|${i}`;
      const s = Math.max(0, Math.ceil(ms / 1000));
      if (id !== atual || caixa.hidden) {
        atual = id;
        segundos = s;
        const decorrido = Math.max(0, total - ms / 1000);
        caixa.className = "contagem";
        caixa.style.setProperty("--atraso", `${(-decorrido).toFixed(2)}s`);
        caixa.innerHTML = e.html(s, decorrido);
        caixa.hidden = false;
        caixa.classList.toggle("ultimos", s <= 3);
        caixa.classList.toggle("fim", s === 0);
        caixa.setAttribute("aria-label", `Próxima pergunta em ${s} segundos`);
        return s;
      }
      if (s === segundos) return null;
      segundos = s;
      // O número é trocado por um novo a cada segundo, o que recomeça o pulso dele (e, na pincelada, a pintura).
      const num = caixa.querySelector(".num"), novo = num.cloneNode(true);
      novo.textContent = e.texto ? e.texto(s) : s;
      num.replaceWith(novo);
      e.depois?.(caixa, s);
      caixa.classList.toggle("ultimos", s <= 3);
      caixa.classList.toggle("fim", s === 0);  // o zero: gol, buzina, luzes verdes, carro arrancando
      caixa.setAttribute("aria-label", `Próxima pergunta em ${s} segundos`);
      return s;
    },
    // A cena à mostra ("tema|n", como "Esportes|0"), ou null: escolhe o som próprio dela (arena-suspense.js).
    get cena() { return caixa.hidden ? null : atual; },
    esconder() {
      if (caixa.hidden) return;
      caixa.hidden = true;
      caixa.innerHTML = "";
      atual = null;
      segundos = null;
    },
  };
}
