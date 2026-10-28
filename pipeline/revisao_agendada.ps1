# Revisão diária (MANIFESTO §16, "Revisão"): monta a fila do dia e publica no Firebase. A saída vai para
# pipeline/log/revisao_saida.txt.
# Rodar agora, na raiz do projeto:  powershell -ExecutionPolicy Bypass -File pipeline\revisao_agendada.ps1
# Agendar todo dia às 7h:           powershell -ExecutionPolicy Bypass -File pipeline\revisao_agendada.ps1 -Agendar
# Outro horário:                    ... -Agendar -Hora 06:30
# Cancelar o agendamento:           Unregister-ScheduledTask -TaskName "Mestre2 - revisao" -Confirm:$false
param([switch] $Agendar, [string] $Hora = "07:00")

$raiz = Split-Path -Parent $PSScriptRoot
$nome = "Mestre2 - revisao"

if ($Agendar) {
    $acao = New-ScheduledTaskAction -Execute "powershell.exe" -WorkingDirectory $raiz `
        -Argument "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$PSCommandPath`""
    $gatilho = New-ScheduledTaskTrigger -Daily -At $Hora
    # Se o computador estiver desligado na hora marcada, roda assim que ligar; precisa de rede (fontes, Claude, Firebase).
    $config = New-ScheduledTaskSettingsSet -StartWhenAvailable -RunOnlyIfNetworkAvailable -ExecutionTimeLimit (New-TimeSpan -Hours 2)
    Register-ScheduledTask -TaskName $nome -Action $acao -Trigger $gatilho -Settings $config -Force | Out-Null
    Write-Output "Agendada: `"$nome`", todo dia às $Hora."
    exit
}

New-Item -ItemType Directory -Force (Join-Path $raiz "pipeline\log") | Out-Null
$env:PYTHONIOENCODING = "utf-8"
Set-Location $raiz
# Pelo cmd, que grava a saída do Python em UTF-8 como ela vem (o >> do PowerShell 5.1 gravaria em UTF-16).
cmd /c "python -u pipeline\revisao.py --publicar >> pipeline\log\revisao_saida.txt 2>&1"
