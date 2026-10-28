// Gancho "predeploy" do hosting (firebase.json): a cada deploy, grava em public/versao.json o instante da publicação,
// que a aba Informações mostra. Roda em qualquer deploy (autopiloto, revisao.py ou à mão), na pasta app/.
const fs = require("fs");
const path = require("path");
fs.writeFileSync(path.join(__dirname, "public", "versao.json"), JSON.stringify({ publicada: new Date().toISOString() }) + "\n");
