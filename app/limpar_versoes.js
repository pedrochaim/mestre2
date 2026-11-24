// Gancho "predeploy" e "postdeploy" do hosting (firebase.json): apaga as versões guardadas do site, menos a que está no
// ar. Cada versão guarda o site inteiro (cerca de 1,9 GB, com as figuras), e a cota do plano gratuito é de 10 GB; o limite
// de versões do site (maxVersions) não apaga as antigas a tempo (2026-11-23). Antes do deploy, abre espaço; depois, apaga
// a versão que acabou de sair do ar. Usa o login do Firebase CLI (o mesmo do deploy). Nunca faz o deploy falhar: se algo
// der errado, só avisa. Roda em qualquer deploy (autopiloto, revisao.py ou à mão), na pasta app/.
const fs = require("fs");
const os = require("os");
const path = require("path");

const SITE = "mestre2-626dd";
const API = "https://firebasehosting.googleapis.com/v1beta1/";

function token() {
  const arquivo = path.join(os.homedir(), ".config", "configstore", "firebase-tools.json");
  const t = JSON.parse(fs.readFileSync(arquivo, "utf8")).tokens || {};
  if (!t.access_token) throw new Error("sem login do Firebase CLI");
  if (t.expires_at && t.expires_at < Date.now() + 60000) throw new Error("o login do Firebase CLI expirou (rode o deploy de novo)");
  return t.access_token;
}

async function main() {
  const tok = token();
  const pedir = async (metodo, url) => {
    const r = await fetch(url, { method: metodo, headers: { Authorization: `Bearer ${tok}` } });
    if (!r.ok) throw new Error(`${metodo} ${url.replace(API, "")}: HTTP ${r.status}`);
    return r.status === 204 ? {} : r.json();
  };
  const noAr = (await pedir("GET", `${API}sites/${SITE}/releases?pageSize=1`)).releases?.[0]?.version?.name;
  if (!noAr) return console.log("limpar_versoes: não achei a versão no ar; nada apagado");
  const versoes = [];
  let pagina = "";
  do {
    const r = await pedir("GET", `${API}sites/${SITE}/versions?pageSize=100${pagina ? `&pageToken=${pagina}` : ""}`);
    versoes.push(...(r.versions || []));
    pagina = r.nextPageToken;
  } while (pagina);
  // Só as finalizadas: uma versão em "CREATED" pode ser um deploy em andamento.
  const velhas = versoes.filter(v => v.status === "FINALIZED" && v.name !== noAr);
  let apagadas = 0;
  for (const v of velhas) {
    try { await pedir("DELETE", API + v.name); apagadas++; } catch (e) { console.log("limpar_versoes: " + e.message); }
  }
  console.log(`limpar_versoes: ${apagadas} versão(ões) antiga(s) apagada(s); fica só a que está no ar.`);
}

main().catch(e => console.log("limpar_versoes: " + e.message + " (deploy segue)"));
