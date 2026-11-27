import json, os, sys
r = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "resultado.json"), encoding="utf-8"))
for x in r:
    d = x["depois"]
    print(f'{x["nome"][:30]:32} ganho {x["ganho"]}  7..4 {[d["seg"][k] for k in "7654"]}  3..1 {[d["seg"][k] for k in "321"]}  zero {d["zero"]}  pico {d["picoSeg"]}/{d["picoZero"]}')
