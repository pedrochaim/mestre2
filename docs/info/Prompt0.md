Tarefa: Gere 50 perguntas no nível do microsubtema abaixo. 

Saída: retorne somente o arquivo .JSON válido (como código, sem formatação) conforme o `pergunta.schema.json`, respeitando proporções de tipos e diversidade.

* Não use " " no texto do campo <pergunta>. Exemplo: "pergunta": "Quem foi Pelé?" (CORRETO) vs "pergunta": "Quem foi "Pelé"?" (INCORRETO)
* Pode utilizar acentuação (ex: não, está, próximo, vêm, etc) no campo <pergunta>.
* No campo "fonte", forneça apenas array com as urls, sem formatação de link clicavel markdown. 
* Não há diferenciação de dificuldade. Cheque o json.schema
* nao inclua tag
* Lembre-se que são para um público informado, mas leigo. Evite termos técnicos desnecessários.
* Revise os enunciados para **evitar** enunciados que contém a resposta. 
  - Exemplo 1: pergunta: "Qual meia brasileiro é conhecido como Ronaldinho Gaúcho e brilhou principalmente pelo Barcelona e pela seleção brasileira?" resposta: "Ronaldinho Gaúcho"
  - Exemplo 2: Associe o personagem à peça:  Dom Juan — ( ) “Dom Juan” / “Dom Giovanni”  ( ) “As Fenícias” 
* Ao elaborar questões do tipo Verdadeiro-Falso, equilibre as respostas.
* Respostas para perguntas abertas devem ser diretas: uma palavra (ou termo), ou no máximo uma frase curta.


---

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Música Popular"
subtema_clean: "musica_popular"

microsubtema: "Latina e Caribenha: ritmos, instrumentos e fusões"
microsubtema_clean: "latina_e_caribenha_ritmos_instrumentos_e_fusoes"

natureza: "transversal"
localizacao: "irrestrita"

status: "ativo"
data_criacao: "2025-12-15"
---
```

## Latina e Caribenha: ritmos, instrumentos e fusões — `latina_e_caribenha_ritmos_instrumentos_e_fusoes`

**Natureza.** Transversal
**Descrição.** Gêneros latinos e caribenhos por **ritmos** (reggaeton, salsa, bachata, merengue, cumbia, dembow), instrumentação típica (alto nível) e fusões documentadas com pop/hip-hop, sem depender de charts.
**Localização.** Irrestrita

**Escopo**

* **Inclusões (não exaustivo)**:

  * Ritmos/subgêneros: salsa, bachata, merengue, cumbia, reggaeton, dembow.
  * Instrumentação (alto nível): percussões afro-caribenhas, metais em salsa, padrões de groove; termos amplos como “clave” quando aplicável e bem referenciado.
  * Origem geográfica e linhagens (em alto nível e canônicas).
  * Fusões: latin pop e crossovers (como fenômeno), remixes oficiais e feats entre cenas.
* **Exclusões**:

  * Rankings por país/semana; “música do carnaval do ano”; números de streaming.
  * Polêmicas e disputas de autoria não consolidadas.
* **Referências (exemplos)**:

  * Wikipedia (EN/ES/PT): gêneros e cenas; páginas de artistas/álbuns
  * Enciclopédias musicais (AllMusic)
  * Discogs para edições/créditos + fonte enciclopédica/oficial para confirmação

**Matriz de variação (eixos)**

* **Ritmo/subgênero → identidade** (salsa/bachata/merengue/cumbia/reggaeton/dembow)
* **País/região → cena** (Caribe hispânico; Colômbia; etc., em alto nível)
* **Instrumentação → timbre** (metais/percussão/cordas; arranjos)
* **Dança/contexto → performance** (club/baile/festa; alta-level)
* **Fusão → direção** (tradicional→pop vs pop→tradicional; remixes/feats)

**Exemplos de enunciados**

* **Aberta**

  1. Qual gênero latino urbano é fortemente associado ao padrão rítmico conhecido como “dembow” (conceito geral)?
  2. Qual ritmo é tradicionalmente associado à República Dominicana e é comum em bailes dançantes?
  3. Em termos gerais, o que diferencia “salsa” de “reggaeton” (instrumentação/arranjo vs batida urbana)?
  4. Em uma faixa com “remix” e participações extras, como costuma aparecer o crédito do artista convidado?

* **Múltipla escolha**

  1. Qual gênero é mais associado à República Dominicana?
     A) Bachata
     B) Grunge
     C) Drum & bass
     D) Bluegrass
  2. “Cumbia” é mais frequentemente associada (em origem histórica) a:
     A) Colômbia
     B) Suécia
     C) Canadá
     D) Austrália
  3. Salsa costuma enfatizar (em arranjos clássicos):
     A) Metais e percussão afro-caribenha (alto nível)
     B) Apenas sintetizadores e drops
     C) Apenas violão solo e banjo
     D) Somente canto a capella
  4. Qual opção é um exemplo de “fusão” (crossover) em música popular?
     A) Uma faixa que mistura elementos de reggaeton com pop mainstream
     B) Um ranking semanal de rádio
     C) A troca de capa de um álbum sem mudar o áudio
     D) Um boato sobre turnê

* **Verdadeiro/Falso**

  1. Reggaeton é frequentemente entendido como um gênero latino urbano com forte presença de batidas repetitivas e produção eletrônica.
  2. Cumbia é um ritmo latino com história documentada e múltiplas variações regionais.
  3. Rankings semanais são a melhor forma de definir o que é “latino e caribenho” num recorte longevo.
  4. Uma colaboração (“feat.”) pode conectar cenas distintas (pop, urbano, tradicional) no mesmo lançamento.

**Checklist**

* [ ] Separa “latin pop mainstream” (mercado) de “ritmos” (identidade rítmica), para reduzir sobreposição com o microsubtema de Pop. 
* [ ] Evita charts/streams e prioriza história, instrumentação e créditos. 
* [ ] Matriz garante diversidade por ritmo + país/cena + instrumento + fusão. 
* [ ] **≤ 5 perguntas por artista/faixa/álbum específico** no conjunto final. 
