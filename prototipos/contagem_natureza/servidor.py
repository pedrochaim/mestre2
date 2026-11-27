"""Servidor local para medir.html: serve esta pasta e grava o POST /resultado em resultado.json, depois sai."""
import http.server, json, os, sys, threading
PASTA = os.path.dirname(os.path.abspath(__file__))
class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k): super().__init__(*a, directory=PASTA, **k)
    def log_message(self, *a): pass
    def do_POST(self):
        dados = self.rfile.read(int(self.headers["Content-Length"]))
        with open(os.path.join(PASTA, "resultado.json"), "w", encoding="utf-8") as f:
            json.dump(json.loads(dados), f, ensure_ascii=False, indent=1)
        self.send_response(204); self.end_headers()
        threading.Thread(target=self.server.shutdown).start()
http.server.ThreadingHTTPServer(("127.0.0.1", int(sys.argv[1])), H).serve_forever()
