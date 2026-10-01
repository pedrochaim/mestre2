# Inicia o autopiloto (MANIFESTO §17) como processo independente, que continua rodando depois que a conversa
# ou o terminal forem fechados. A saída vai para pipeline/log/autopiloto_saida.txt.
# Uso, na raiz do projeto:  powershell -ExecutionPolicy Bypass -File pipeline\iniciar_autopiloto.ps1 [argumentos]
# Exemplo:                  powershell -ExecutionPolicy Bypass -File pipeline\iniciar_autopiloto.ps1 --publicar 10
# Para parar:               crie o arquivo pipeline\PARAR (o autopiloto termina o trabalho atual e sai).
param([Parameter(ValueFromRemainingArguments = $true)] [string[]] $Resto)

$raiz = Split-Path -Parent $PSScriptRoot
$log = Join-Path $raiz "pipeline\log"
New-Item -ItemType Directory -Force $log | Out-Null
$python = (Get-Command python).Source
$argumentos = @("-u", "pipeline\autopiloto.py")
if ($Resto) { $argumentos += $Resto }
$p = Start-Process -FilePath $python -ArgumentList $argumentos -WorkingDirectory $raiz -WindowStyle Hidden `
    -RedirectStandardOutput (Join-Path $log "autopiloto_saida.txt") `
    -RedirectStandardError (Join-Path $log "autopiloto_erros.txt") -PassThru
Write-Output "Autopiloto iniciado (pid $($p.Id)). Progresso: python pipeline\autopiloto.py --status"
