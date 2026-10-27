// Trilha da Vida: a parte do app/public/index.html que ligava o modo às telas e ao Firestore, retirada do app em
// 2026-10-27 e guardada aqui como protótipo (MANIFESTO §15). Os dados, o mapa e o desenho ficam em trilha.js, nesta
// mesma pasta. A versão integrada e jogável é a do commit ec2c7c6a (app/public/index.html e app/public/trilha.js).
// Não roda sozinha: depende de funções e variáveis do index.html daquela versão.

// --- CSS
const CSS = String.raw`
    /* Trilha da Vida: turno, casas, mão e modo mesa com o mapa vertical. */
    .vez { border-left: 8px solid var(--c, var(--linha)); }
    .chip { display: inline-block; border-radius: 999px; padding: .05rem .6rem; font-size: .8rem; font-weight: 700;
            background: var(--c); color: var(--ct); margin: .15rem .3rem .15rem 0; }
    .evento { border: 1px solid #c9a7ff; border-radius: 10px; padding: .5rem .7rem; margin-top: .6rem; font-size: .92rem; }
    .casas { display: flex; flex-direction: column; gap: .45rem; }
    .casas button { display: flex; align-items: center; gap: .7rem; text-align: left; }
    .casas button[aria-pressed="true"] { border-color: var(--acento); box-shadow: 0 0 0 2px var(--acento); }
    .casas .ic { font-size: 1.6rem; width: 2.2rem; text-align: center; flex: none; }
    .casas .det { display: block; color: var(--suave); font-size: .84rem; }
    .cartas { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: .5rem; }
    .carta { border: 2px solid var(--c); border-radius: 12px; padding: .6rem; display: flex; flex-direction: column; gap: .35rem;
             background: linear-gradient(160deg, #23232a, #141418); }
    .carta .t { font-weight: 800; color: var(--c); }
    .carta .e { font-size: .82rem; color: #c9c8c1; flex: 1; }
    .carta button { padding: .35rem .6rem; }
    .carta button[aria-pressed="true"] { background: var(--c); border-color: var(--c); color: #000; font-weight: 700; }
    .carta select { padding: .3rem .4rem; font-size: .85rem; }
    .escolha-inicial { display: flex; flex-direction: column; gap: .4rem; flex-basis: 100%; margin-top: .4rem; }
    ul.placar li.escolhendo { flex-wrap: wrap; }
    .mapa-turno { margin: .6rem 0 .2rem; cursor: pointer; }
    .mapa-turno svg { border-radius: 12px; }
    .mapa-linha { display: flex; justify-content: space-between; align-items: center; gap: .5rem; }
    .mapa-linha button { padding: .25rem .7rem; font-size: .85rem; }
    #mesa.trilha { overflow: auto; align-items: flex-start; }
    #mesa.trilha .tabuleiro, #mesa.com-pergunta.trilha .tabuleiro { width: auto; }
    #mesa.trilha .tabuleiro svg { height: calc(100vh - 4vmin); width: auto; }
    #mesa.trilha #mesa-lado { max-height: calc(100vh - 4vmin); position: sticky; top: 0; }
    @media (orientation: portrait) {
      #mesa.com-pergunta.trilha { align-items: center; }
      #mesa.com-pergunta.trilha .tabuleiro svg { height: 52vh; }
    }
`;

// --- Regras exibidas na aba Tabuleiro
const REGRAS = String.raw`
        <details id="regras-trilha" class="regras" hidden>
          <summary>Como se joga</summary>
          <p class="suave">Vence quem chega primeiro ao topo do mapa. Na sua vez, escolha a próxima casa entre as ligadas
            à sua; a pergunta depende da casa: 💼 dos temas da sua profissão, as de Ação dos subtemas delas, as coloridas
            do tema, as em Branco e de Destino de qualquer tema. Acertou, sobe para a casa; errou, fica. A cada 4 linhas
            todas as casas são 💼. Casa em Branco: compra uma carta. Destino: um evento. ⛱️ Férias: sem pergunta, e o
            próximo acerto anda 2 casas a mais. As cartas da mão mudam a próxima pergunta; o Desafio manda uma pergunta
            a um oponente (menos o líder), e, se ele acertar, os dois ganham um avanço livre.</p>
        </details>
`;

  // ---------------------------------------------------------------- trilha da vida

  // Segundo modo de jogo (manifesto/modo_trilha_da_vida.md). Dados, mapa e desenho ficam em trilha.js; aqui, a
  // ligação com as telas e o Firestore. O Master não muda: as funções dele desviam para cá só quando ehTrilha().
  // O estado de cada jogador fica no campo "trilha" do documento dele: pos (casa "linha:coluna"), opcoes (profissões e
  // personalidades sorteadas), profissao, personalidade, mao (cartas), extra (avanços livres), ferias, descartar
  // (cartas a descartar), passarApos (a vez passa quando os avanços acabarem) e evento (o último acontecimento).
  let partida = {};   // documento da partida: modo, semente, vez
  let mapa = null;    // gerado da semente: o mesmo em todos os aparelhos
  let turno = {};     // escolhas da vez, neste aparelho: destino, carta (índice na mão), temaLivre, desafio
  const limparTurno = () => { turno = { destino: null, carta: null, temaLivre: "*", desafio: null, mapaInteiro: turno?.mapaInteiro || false }; };
  limparTurno();
  const ehTrilha = () => partida.modo === "trilha";
  // O modo Pokémon usa a trilha e as regras do Linear; muda só o conjunto de perguntas.
  const ehPokemon = () => partida.modo === "pokemon";
  const ehLinear = () => partida.modo === "linear" || ehPokemon();
  // Partida de múltipla escolha: o sorteio, em qualquer modo, só usa perguntas de múltipla escolha.
  const soMultipla = () => partida.perguntas === "multipla";
  const refJ = id => doc(db, "partidas", codigo, "jogadores", id);
  const subtemaParaTema = {};
  carregandoTemas.then(ts => { for (const t of ts) for (const s of t.subtemas) subtemaParaTema[s.subtema] = t.tema; });

  // Jogadores que já escolheram a profissão, na ordem de entrada; a vez gira entre eles, pulando quem já chegou.
  const ordem = () => jogadores.filter(j => j.trilha && j.trilha.profissao !== null && j.trilha.profissao !== undefined);
  const chegou = j => mapa && j.trilha?.pos === mapa.chegada;
  function vezAtual() {
    const o = ordem();
    return o.find(j => j.id === partida.vez) || o.find(j => !chegou(j)) || o[0] || null;
  }
  function proximo(j) {
    const o = ordem(), i = o.findIndex(x => x.id === j.id);
    for (let k = 1; k <= o.length; k++) { const x = o[(i + k) % o.length]; if (!chegou(x)) return x; }
    return j;
  }
  const opcoesDaVez = () => {
    const jv = ehTrilha() && mapa ? vezAtual() : null;
    return jv && !chegou(jv) && !jv.trilha.descartar ? mapa.acima(jv.trilha.pos) : [];
  };

  function aplicarModo() {
    const tr = ehTrilha();
    $("turno").hidden = !tr;
    $("cartao-temas").hidden = tr;
    $("regras-trilha").hidden = !tr;
    $("regras-master").hidden = tr || ehLinear();
    $("regras-linear").hidden = !ehLinear();
    $("regras-pokemon").hidden = $("legenda-pokemon").hidden = !ehPokemon();
    $("tipo-partida").hidden = !soMultipla();
    if (perguntasPokemon !== undefined && (perguntasPokemon !== ehPokemon() || perguntasMultipla !== soMultipla())) {
      perguntasDoModo();
      desenharTemas();
    }
    $("mesa").classList.toggle("trilha", tr);
    $("mesa").classList.toggle("linear", ehLinear());
    $("mesa").style.setProperty("--alt-linear", ehPokemon() ? L.ALTURA_POKEMON : 880);
    document.querySelector('[data-aba="sorteio"]').textContent = tr ? "Turno" : "Sorteio";
    if (!tr) { $("sortear").textContent = "Sortear"; $("sortear").disabled = false; }
  }

  // --- efeitos

  function comprar(t, n) { for (let k = 0; k < n; k++) t.mao.push(T.sortearCarta()); }
  const excesso = t => Math.max(0, t.mao.length - T.limiteMao({ trilha: t }));

  // Chegar numa casa, com ou sem pergunta: muda a posição e aplica o efeito da casa.
  function chegarEm(t, no) {
    t.pos = no.id;
    t.evento = "";
    if (no.tipo === "B") {
      const criativo = t.personalidade === "criativo";
      comprar(t, criativo ? 2 : 1);
      t.descartar = Math.max(criativo ? 1 : 0, excesso(t));
      t.evento = criativo ? "🂠 Casa em Branco: comprou 2 cartas; fique com uma." : "🂠 Casa em Branco: comprou 1 carta.";
    } else if (no.tipo === "D") {
      const d = T.DESTINOS[Math.floor(Math.random() * T.DESTINOS.length)];
      if (d.cartas) comprar(t, d.cartas);
      if (d.carta) t.mao.push(d.carta);
      if (d.extra) t.extra = (t.extra || 0) + d.extra;
      if (d.perde && t.mao.length) t.mao.splice(Math.floor(Math.random() * t.mao.length), 1);
      if (d.ferias) t.ferias = true;
      t.descartar = excesso(t);
      t.evento = "🔮 " + d.texto;
    } else if (no.tipo === "A" && no.acao.ferias) {
      t.ferias = true;
      t.evento = "⛱️ Férias: no próximo acerto, anda 2 casas a mais.";
    } else if (no.tipo === "chegada") t.evento = "🏡 Chegou!";
  }

  // --- turno

  async function sortearTrilha() {
    const jv = vezAtual();
    if (!jv) return;
    const carta = turno.carta !== null ? jv.trilha.mao[turno.carta] : null;
    let pool, quem = jv.id, info, aviso = "";
    const filtrar = f => perguntas.filter(p => (!f.temas || f.temas.includes(p.tema)) && (!f.subtemas || f.subtemas.includes(p.subtema))
      && (!f.multipla || p.tipo === "multipla") && (!f.figura || p.imagem));
    if (turno.desafio) {
      const tema = turno.desafio.tema;
      pool = filtrar({ temas: tema === "*" ? null : [tema] });
      quem = turno.desafio.alvo;
      info = { tipo: "desafio", jogador: jv.id, alvo: quem, carta: turno.carta };
    } else {
      const no = mapa.nos.get(turno.destino);
      if (!no) return;
      if (no.tipo === "A" && no.acao.ferias) return tirarFerias(jv, no);
      const f = T.filtroDaCasa(no, jv, carta, turno.temaLivre, subtemaParaTema);
      pool = filtrar(f);
      if (!pool.length && f.subtemas) pool = filtrar({ ...f, subtemas: null, temas: f.temasReserva?.length ? f.temasReserva : null });
      let gasta = turno.carta;
      if (!pool.length && (f.multipla || f.figura)) {
        pool = filtrar({ ...f, multipla: false, figura: false });
        aviso = "Não há pergunta com o efeito da carta nesta casa; a carta não foi gasta.";
        gasta = null;
      }
      if (!pool.length) pool = perguntas;
      info = { tipo: "casa", jogador: jv.id, destino: no.id, carta: gasta };
    }
    const menos = Math.min(...pool.map(p => vezes.get(p.id) || 0));
    const candidatas = pool.filter(p => (vezes.get(p.id) || 0) === menos);
    const p = candidatas[Math.floor(Math.random() * candidatas.length)];
    $("sortear").disabled = true;
    try {
      const ref = await addDoc(collection(db, "partidas", codigo, "sorteios"), { pergunta: p.id, em: serverTimestamp() });
      mostrar(p, ref.id, menos);
      atual.trilha = info;
      atual.leitor = proximo(jv).id;
      respondente = quem;
      desenharRespondentes();
      publicarAtual("nova_pergunta");
      if (aviso) $("msg-sorteio").textContent = aviso;
    } catch (e) {
      $("msg-sorteio").textContent = "Erro: " + e.message;
    } finally {
      $("sortear").disabled = false;
    }
  }

  async function registrarTrilha(acertou) {
    const info = atual.trilha;
    const batch = writeBatch(db);
    batch.update(doc(db, "partidas", codigo, "sorteios", atual.sorteio), { respondente, acertou });
    const jv = jogadores.find(j => j.id === info.jogador);
    const t = structuredClone(jv.trilha);
    if (info.carta !== null && info.carta !== undefined) t.mao.splice(info.carta, 1);
    let passa = true;
    if (info.tipo === "desafio") {
      const alvo = jogadores.find(j => j.id === info.alvo);
      if (acertou && alvo) {
        const ta = structuredClone(alvo.trilha);
        ta.extra = (ta.extra || 0) + 1;
        ta.evento = `🤝 Acertou o desafio de ${jv.nome}: 1 avanço livre.`;
        batch.update(refJ(alvo.id), { trilha: ta });
        t.extra = (t.extra || 0) + 1;
        t.evento = `🤝 ${alvo.nome} acertou o seu desafio: 1 avanço livre.`;
      } else t.evento = `🤝 ${alvo?.nome || "O oponente"} errou o desafio.`;
    } else if (acertou) {
      const no = mapa.nos.get(info.destino);
      let bonus = 0;
      if (t.ferias) { bonus += 2; t.ferias = false; }                                    // depois das férias
      chegarEm(t, no);
      if (t.personalidade === "competitivo" && no.tipo === "W") bonus += 1;
      if (t.personalidade === "observador" && atual.imagem) bonus += 1;
      if (bonus) {
        t.extra = (t.extra || 0) + bonus;
        t.passarApos = true;
        passa = false;
        t.evento = `${t.evento ? t.evento + " " : ""}+${bonus} ${bonus > 1 ? "avanços livres" : "avanço livre"}.`;
      }
    } else t.evento = "";
    t.descartar = Math.max(t.descartar || 0, excesso(t));
    batch.update(refJ(jv.id), { trilha: t });
    batch.update(doc(db, "partidas", codigo), { atual: atualEncerrada([...atual.tentativas, { respondente, acertou }]),
                                                som: evento(acertou ? "acerto" : "erro"),
                                                ...(passa ? { vez: proximo({ ...jv, trilha: t }).id } : {}) });
    try {
      await batch.commit();
      limparTurno();
      fecharPergunta();
    } catch (e) {
      $("msg-sorteio").textContent = "Erro ao registrar: " + e.message;
    }
  }

  async function tirarFerias(jv, no) {
    const t = structuredClone(jv.trilha);
    if (turno.carta !== null) turno.carta = null;   // carta nenhuma é gasta nas férias
    chegarEm(t, no);
    const batch = writeBatch(db);
    batch.update(refJ(jv.id), { trilha: t });
    batch.update(doc(db, "partidas", codigo), { vez: proximo(jv).id });
    await batch.commit();
    limparTurno();
  }

  async function avancoLivre(jv, no) {
    const t = structuredClone(jv.trilha);
    chegarEm(t, no);
    t.extra = Math.max(0, (t.extra || 0) - 1);
    const batch = writeBatch(db);
    if (!t.extra && t.passarApos) {
      t.passarApos = false;
      batch.update(doc(db, "partidas", codigo), { vez: proximo({ ...jv, trilha: t }).id });
    }
    batch.update(refJ(jv.id), { trilha: t });
    await batch.commit();
    limparTurno();
  }

  async function descartar(jv, indice) {
    const t = structuredClone(jv.trilha);
    t.mao.splice(indice, 1);
    t.descartar = Math.max(0, (t.descartar || 0) - 1, excesso(t));
    await updateDoc(refJ(jv.id), { trilha: t });
  }

  async function passarVez(jv) {
    limparTurno();
    await updateDoc(doc(db, "partidas", codigo), { vez: proximo(jv).id });
  }

  // --- telas

  const chipTema = tema => { const c = el("span", { className: "chip", textContent: tema }); pintar(c, tema); return c; };

  function cartaVisual(c, acoes = []) {
    const d = el("div", { className: "carta" });
    d.style.setProperty("--c", c.t === "tema" ? (CORES[c.tema] || ["#87CEEB"])[0] : T.CARTAS[c.t].cor);
    d.append(el("div", { className: "t", textContent: `${T.CARTAS[c.t].icone} ${T.nomeCarta(c)}` }),
             el("div", { className: "e", textContent: T.efeitoCarta(c) }), ...acoes);
    return d;
  }

  function botaoCasa(no, jv, aoTocar) {
    const info = T.descreverCasa(no, jv);
    const b = el("button");
    const ic = el("span", { className: "ic", textContent: info.icone });
    if (no.tipo === "M") { ic.textContent = "⬤"; ic.style.color = (CORES[no.tema] || ["#888"])[0]; }
    const texto = el("span");
    texto.append(el("strong", { textContent: info.nome }), el("span", { className: "det", textContent: info.detalhe }));
    b.append(ic, texto);
    b.setAttribute("aria-pressed", turno.destino === no.id);
    b.onclick = aoTocar;
    return b;
  }

  function desenharTurno() {
    if (!ehTrilha() || !mapa) return;
    const caixa = $("turno");
    const o = ordem();
    const bloco = [];
    if (!o.length) {
      caixa.replaceChildren(el("div", { className: "cartao suave", textContent: jogadores.length
        ? "Cada jogador escolhe a profissão e a personalidade na aba Tabuleiro; depois, o jogo começa aqui."
        : "Adicione os jogadores na aba Tabuleiro." }));
      $("sortear").disabled = true;
      $("sortear").textContent = "Sortear pergunta";
      return;
    }
    const jv = vezAtual(), t = jv.trilha;
    // A escolha local (destino, carta) vale só para esta vez e esta casa: outro jogador ou outra casa, recomeça.
    // (Uma escolha vazia, recém-limpa depois de registrar, não conta como "outro": não apaga o primeiro toque.)
    if ((turno.jogador && turno.jogador !== jv.id) || (turno.pos && turno.pos !== t.pos)) limparTurno();
    turno.jogador = jv.id;
    turno.pos = t.pos;
    const prof = T.PROFISSOES[t.profissao], pers = T.PERSONALIDADES[t.personalidade] || {};
    const chegaram = o.filter(chegou);
    if (chegaram.length)
      bloco.push(el("p", { className: "vencedor", textContent: `🏆 ${chegaram.map(j => j.nome).join(", ")} ${chegaram.length > 1 ? "chegaram" : "chegou"}! A rodada termina quando a vez voltar a ${o[0].nome}.` }));

    // Quem joga, quem lê, profissão, personalidade, posição
    const cab = el("div", { className: "cartao vez" });
    pintar(cab, prof.temas[0]);
    const linha1 = el("div", { className: "papeis" });
    linha1.append(linhaDaVez(o.length > 1 ? proximo(jv) : jv, jv));
    const linha2 = el("div");
    linha2.append(`${prof.nome} `, ...prof.temas.map(chipTema));
    const linha3 = el("div", { className: "suave", textContent:
      `${pers.nome}: ${pers.efeito}${pers.auto ? "" : " (aplique de viva voz)"} · casa ${T.linhaDe(t.pos)} de ${mapa.linhas - 1}` });
    cab.append(linha1, linha2, linha3);
    if (t.evento) cab.append(el("div", { className: "evento", textContent: t.evento }));
    bloco.push(cab);

    // O mapa também aqui, para escolher a casa olhando o caminho (e para jogar sozinho, sem trocar de aba).
    // Por padrão, um recorte em volta do peão; tocar numa casa possível a escolhe.
    const possiveis = !chegou(jv) && !t.descartar ? mapa.acima(t.pos).map(n => n.id) : [];
    const blocoMapa = el("div", { className: "cartao" });
    const linhaMapa = el("div", { className: "mapa-linha" });
    const alternar = el("button", { textContent: turno.mapaInteiro ? "Ver só o trecho" : "Mapa inteiro" });
    alternar.onclick = () => { turno.mapaInteiro = !turno.mapaInteiro; desenharTurno(); };
    linhaMapa.append(el("span", { className: "suave", textContent: possiveis.length ? "Toque numa casa azul" : "" }), alternar);
    const caixaMapa = el("div", { className: "tabuleiro mapa-turno" });
    caixaMapa.innerHTML = T.svgMapa(mapa, jogadores, CORES, possiveis,
      { escolhido: turno.destino, vez: jv.id, peao: turno.mapaInteiro ? 1.3 : 1.7,
        viewBox: turno.mapaInteiro ? null : T.viewBoxRecorte(T.linhaDe(t.pos)) });
    caixaMapa.onclick = e => {
      const svg = caixaMapa.querySelector("svg");
      const pt = pontoSvg(svg, e);
      const id = T.casaMaisProxima(mapa, pt.x, pt.y);
      if (!id || !possiveis.includes(id) || turno.desafio) return;
      if (t.extra > 0) return avancoLivre(jv, mapa.nos.get(id));
      turno.destino = turno.destino === id ? null : id;
      desenharTurno(); desenharTabuleiros();
    };
    blocoMapa.append(linhaMapa, caixaMapa);
    bloco.push(blocoMapa);

    const mao = t.mao || [];
    let pode = false, rotulo = "Sortear pergunta";

    if (chegou(jv)) {
      rotulo = "Passe a vez";
      const c = el("div", { className: "cartao" });
      const b = el("button", { textContent: "Passar a vez" });
      b.onclick = () => passarVez(jv);
      c.append(el("p", { textContent: `${jv.nome} já chegou. ` }), b);
      bloco.push(c);
    } else if (t.descartar > 0) {
      rotulo = "Descarte uma carta para continuar";
      const c = el("div", { className: "cartao" });
      c.append(el("strong", { textContent: `Descarte ${t.descartar} ${t.descartar > 1 ? "cartas" : "carta"} (limite de ${T.limiteMao(jv)} na mão)` }));
      const grade = el("div", { className: "cartas" });
      mao.forEach((carta, i) => {
        const b = el("button", { textContent: "Descartar" });
        b.onclick = () => descartar(jv, i);
        grade.append(cartaVisual(carta, [b]));
      });
      c.append(grade);
      bloco.push(c);
    } else if (t.extra > 0) {
      rotulo = "Escolha a casa do avanço livre";
      const c = el("div", { className: "cartao" });
      c.append(el("strong", { textContent: `Avanço livre (${t.extra}): escolha a próxima casa, sem pergunta` }));
      const lista = el("div", { className: "casas" });
      lista.append(...mapa.acima(t.pos).map(no => botaoCasa(no, jv, () => avancoLivre(jv, no))));
      c.append(lista);
      bloco.push(c);
    } else {
      // Para onde ir
      const c = el("div", { className: "cartao" });
      c.append(el("strong", { textContent: turno.desafio ? "Desafio no lugar da sua pergunta" : "Para onde?" }));
      if (!turno.desafio) {
        const lista = el("div", { className: "casas" });
        lista.append(...mapa.acima(t.pos).map(no => botaoCasa(no, jv, () => {
          turno.destino = turno.destino === no.id ? null : no.id;
          desenharTurno(); desenharTabuleiros();
        })));
        c.append(lista);
      }
      bloco.push(c);

      // Mão
      const m = el("div", { className: "cartao" });
      m.append(el("strong", { textContent: `Mão · ${mao.length} de ${T.limiteMao(jv)} cartas` }));
      const grade = el("div", { className: "cartas" });
      mao.forEach((carta, i) => {
        const usando = turno.carta === i;
        const b = el("button", { textContent: usando ? "Usando" : "Usar" });
        b.setAttribute("aria-pressed", usando);
        b.onclick = () => {
          turno.carta = usando ? null : i;
          turno.desafio = !usando && carta.t === "desafio" ? { alvo: null, tema: "*" } : null;
          desenharTurno();
        };
        const extras = [b];
        if (usando && carta.t === "tema_livre") {
          const sel = el("select");
          sel.replaceChildren(new Option("Qualquer tema", "*"), ...T.TEMAS_LISTA.map(x => new Option(x, x, false, x === turno.temaLivre)));
          sel.value = turno.temaLivre;
          sel.onchange = () => { turno.temaLivre = sel.value; };
          extras.push(sel);
        }
        if (usando && carta.t === "desafio") {
          const linhas = o.map(j => T.linhaDe(j.trilha.pos)), max = Math.max(...linhas);
          const souLider = T.linhaDe(t.pos) === max;
          const alvos = o.filter(j => j.id !== jv.id && !chegou(j) && (souLider || T.linhaDe(j.trilha.pos) < max));
          const selA = el("select");
          selA.replaceChildren(new Option(alvos.length ? "Quem responde?" : "Ninguém pode ser desafiado", ""),
                               ...alvos.map(j => new Option(j.nome, j.id, false, j.id === turno.desafio.alvo)));
          selA.onchange = () => { turno.desafio.alvo = selA.value || null; desenharTurno(); };
          const selT = el("select");
          selT.replaceChildren(new Option("Qualquer tema", "*"), ...T.TEMAS_LISTA.map(x => new Option(x, x, false, x === turno.desafio.tema)));
          selT.onchange = () => { turno.desafio.tema = selT.value; };
          extras.push(selA, selT);
        }
        grade.append(cartaVisual(carta, extras));
      });
      if (!mao.length) grade.append(el("span", { className: "suave", textContent: "Nenhuma carta. Compre nas Casas em Branco." }));
      m.append(grade);
      bloco.push(m);

      const destino = turno.destino && mapa.nos.get(turno.destino);
      if (turno.desafio) { pode = Boolean(turno.desafio.alvo); rotulo = "Sortear a pergunta do desafio"; }
      else if (destino?.tipo === "A" && destino.acao.ferias) { pode = true; rotulo = "Tirar férias"; }
      else pode = Boolean(destino);
    }
    caixa.replaceChildren(...bloco);
    $("sortear").disabled = !pode;
    $("sortear").textContent = rotulo;
  }

  // Tabuleiro: mapa, lista de jogadores e a escolha de profissão e personalidade de quem acabou de entrar.
  function desenharPlacarTrilha() {
    $("mini").hidden = true;
    const o = ordem();
    const chegaram = o.filter(chegou).map(j => j.nome);
    $("vencedor-tab").hidden = !chegaram.length;
    $("vencedor-tab").textContent = `🏆 ${chegaram.join(", ")} ${chegaram.length > 1 ? "chegaram" : "chegou"} ao fim!`;
    desenharTabuleiros();
    $("placar-vazio").hidden = jogadores.length > 0;
    $("placar").replaceChildren(...jogadores.map(j => {
      const t = j.trilha || {};
      const li = el("li");
      const info = el("div", { className: "info" });
      const nome = el("span", { className: "nome", textContent: j.nome });
      nome.append(marcas(j.id));
      info.append(nome);
      const tirar = el("button", { className: "ajuste", textContent: "×", title: "Remover jogador" });
      tirar.onclick = () => confirm(`Remover ${j.nome} da partida?`) && deleteDoc(refJ(j.id));
      if (t.profissao === null || t.profissao === undefined) {
        li.classList.add("escolhendo");
        const escolha = el("div", { className: "escolha-inicial" });
        // Sem repetir temas de quem já escolheu: as opções sorteadas na entrada são filtradas agora, e, se nenhuma
        // sobrar, o app sorteia outras.
        const usados = new Set(o.flatMap(x => T.PROFISSOES[x.trilha.profissao].temas));
        const conflita = i => T.PROFISSOES[i].temas.some(tema => usados.has(tema));
        let validas = (t.opcoes?.profissoes || []).filter(i => !conflita(i));
        if (!validas.length && t.opcoes) {
          const novas = T.sortearOpcoes(o);
          if (novas.profissoes.some(i => !conflita(i))) updateDoc(refJ(j.id), { trilha: { ...t, opcoes: { ...t.opcoes, profissoes: novas.profissoes } } });
          validas = novas.profissoes.filter(i => !conflita(i));
          if (!validas.length) validas = t.opcoes.profissoes;  // com 4 jogadores e 8 temas pode não haver saída: aceita repetir
        }
        const selP = el("select");
        selP.replaceChildren(new Option("Escolha a profissão", ""), ...validas.map(i =>
          new Option(`${T.PROFISSOES[i].nome} (${T.PROFISSOES[i].temas.join(" + ")})`, i)));
        const selQ = el("select");
        selQ.replaceChildren(new Option("Escolha a personalidade", ""), ...(t.opcoes?.personalidades || []).map(k =>
          new Option(`${T.PERSONALIDADES[k].nome}: ${T.PERSONALIDADES[k].efeito}`, k)));
        const guardado = escolhasIniciais[j.id] ||= { p: "", q: "" };
        selP.value = guardado.p;
        selQ.value = guardado.q;
        selP.onchange = () => { guardado.p = selP.value; };
        selQ.onchange = () => { guardado.q = selQ.value; };
        const ok = el("button", { className: "principal", textContent: "Confirmar" });
        ok.onclick = () => {
          if (selP.value === "" || selQ.value === "") return alert("Escolha a profissão e a personalidade.");
          updateDoc(refJ(j.id), { trilha: { ...t, profissao: Number(selP.value), personalidade: selQ.value,
            mao: [T.sortearCarta()], pos: mapa.inicio, extra: 0, ferias: false, descartar: 0, passarApos: false, evento: "" } });
        };
        escolha.append(selP, selQ, ok);
        info.append(escolha);
        li.append(info, tirar);
        return li;
      }
      const prof = T.PROFISSOES[t.profissao];
      pintar(li, prof.temas[0]);
      const det = el("span", { className: "suave" });
      det.append(`${prof.nome} `, ...prof.temas.map(chipTema),
                 ` · ${T.PERSONALIDADES[t.personalidade]?.nome || ""} · casa ${T.linhaDe(t.pos)}/${mapa.linhas - 1} · 🂠 ${(t.mao || []).length}`);
      info.append(det);
      li.append(info, tirar);
      return li;
    }));
  }

  const escolhasIniciais = {};   // {id do jogador: {p, q}}: seleções em andamento, que um redesenho não apaga

  async function novoJogadorTrilha(nome) {
    await addDoc(collection(db, "partidas", codigo, "jogadores"), {
      nome, pontos: 0, criado_em: serverTimestamp(),
      trilha: { opcoes: T.sortearOpcoes(ordem()), profissao: null, personalidade: null, pos: mapa.inicio, mao: [],
                extra: 0, ferias: false, descartar: 0, passarApos: false, evento: "" },
    });
  }

