# Mede o volume dos sons (medir.html) no Edge sem janela e grava resultado.json. Uso: powershell -File medir.ps1
$pasta = $PSScriptRoot
$perfil = Join-Path $env:TEMP "mestre2-medir-edge"
Remove-Item "$pasta\resultado.json" -ErrorAction SilentlyContinue
$srv = Start-Process python -ArgumentList "`"$pasta\servidor.py`"", "8765" -PassThru -WindowStyle Hidden
Start-Sleep -Milliseconds 800
$edge = Start-Process "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" -ArgumentList "--headless=new", "--disable-gpu", "--no-first-run", "--user-data-dir=$perfil", "http://127.0.0.1:8765/medir.html" -PassThru
$fim = (Get-Date).AddSeconds(240)
while (-not (Test-Path "$pasta\resultado.json") -and (Get-Date) -lt $fim) { Start-Sleep -Seconds 2 }
try { Stop-Process -Id $edge.Id -Force -ErrorAction Stop } catch {}
try { Stop-Process -Id $srv.Id -Force -ErrorAction Stop } catch {}
if (-not (Test-Path "$pasta\resultado.json")) { Write-Output "sem resultado"; exit 1 }
