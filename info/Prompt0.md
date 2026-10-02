Tarefa: Gere 50 perguntas no nível do microsubtema abaixo. 

Saída: retorne somente o arquivo .JSON válido (como código, sem formatação) conforme o `pergunta.schema.json`, respeitando proporções de tipos e diversidade.

Instruções adicionais (aos critérios `intrucoes_geracao_perguntas.md`)

* Não use " " no texto do campo <pergunta>. Exemplo: "pergunta": "Quem foi Pelé?" (CORRETO) vs "pergunta": "Quem foi "Pelé"?" (INCORRETO)
* Pode utilizar acentuação (ex: não, está, próximo, vêm, etc) no campo <pergunta>.
* No campo "fonte", forneça apenas array com as urls, sem formatação de link clicavel markdown. 
* Não há diferenciação de dificuldade. Cheque o json.schema
* nao inclua tag
* Lembre-se que são para um público informado, mas leigo. Evite termos técnicos desnecessários.
* Revise os enunciados para **evitar** enunciados que contém a resposta. 
  - Exemplo 1: pergunta: "Qual meia brasileiro é conhecido como Ronaldinho Gaúcho e brilhou principalmente pelo Barcelona e pela seleção brasileira?" resposta: "Ronaldinho Gaúcho"
  - Exemplo 2: Associe o personagem à peça:  Dom Juan — ( ) “Dom Juan” / “Dom Giovanni”  ( ) “As Fenícias” 
* Respostas para perguntas abertas devem ser diretas: uma palavra (ou termo), ou no máximo uma frase curta.
* Distratores em perguntas de múltipla escolha (em microsubtemas de obra fictícia específica) devem incluir (pelo menos 1) termos/personagens/coisas da mesma franquia.
* Em geral, em perguntas de múltipla escolha, crie distratores críveis, de modo a gerar alguma dúvida sobre a respsota correta.
* Não inclua perguntas de Verdadeiro-Falso.
* Em perguntas de multipla escolha, equilibre a alternativa certa entre A, B, C, e D.


```yaml
---
tema: "História"
tema_clean: "historia"
subtema: "Idade Média"
subtema_clean: "idade_media"

microsubtema: "Monarquias e instituições políticas no Ocidente medieval"
microsubtema_clean: "monarquias_ocidente"

natureza: "tematico"
localizacao: "irrestrita"

status: "rascunho"
data_criacao: "2025-12-09"
---
```

## Monarquias e instituições políticas no Ocidente medieval (`monarquias_ocidente`)

**Natureza.** Temático
**Descrição.** Formação, transformação e fortalecimento de reinos e monarquias na Europa Ocidental medieval (França, Inglaterra, Portugal, Castela, Aragão e Sacro Império), incluindo dinastias, disputas sucessórias, mecanismos de governo e assembleias políticas (cortes, parlamentos, estados gerais) em perspectiva histórica.
**Localização.** Irrestrita

### Escopo

**Inclusões (não exaustivo)**

* Reinos francos, Império Carolíngio e suas transformações.
* Dinastias e trajetórias gerais: capetíngios, plantagenetas, casas ibéricas (em linhas gerais).
* Península Ibérica: reinos cristãos e **Reconquista** como contexto político.
* Sacro Império Romano-Germânico: peculiaridades (eleição, fragmentação, autonomia de príncipes).
* Instituições: conselhos, chancelarias, cortes/parlamentos/estados gerais (funções históricas gerais).
* Disputas dinásticas e centralização (processos, sem “listas de batalhas”).

**Exclusões**

* Campanhas militares em detalhe.
* Igreja como instituição autônoma (vai em `igreja_saber`).
* Bizâncio e Islã como eixo (vai em `med_oriente`).

**Referências (exemplos)**

* Wikipedia (PT): *Carlos Magno*, *Capetíngios*, *Plantagenetas*, *Sacro Império Romano-Germânico*, *Reconquista*.

### Matriz de variação (eixos)

* **Reino**: França, Inglaterra, Castela, Aragão, Portugal, Sacro Império.
* **Instituição**: cortes, parlamento, estados gerais, conselhos.
* **Conflito**: sucessão, guerra civil, rivalidades nobiliárquicas (visão geral).
* **Centralização**: poder fragmentado vs. fortalecimento régio.

### Exemplos de enunciados

**Aberta**

* Qual foi a importância da coroação de Carlos Magno (800)?
* O que eram “cortes” ou “parlamentos” medievais?
* O que se entende por “Reconquista” na Península Ibérica?

**Múltipla escolha**

* A instituição conhecida como **Parlamento**, com papel relevante a partir do século XIII, está mais associada ao caso de:
  (a) França
  (b) Inglaterra
  (c) Castela
  (d) Portugal

* A dinastia **capetíngia** está ligada principalmente ao reino da:
  (a) França
  (b) Inglaterra
  (c) Aragão
  (d) Sacro Império Romano-Germânico

* A expressão **“Reconquista”** refere-se, em linhas gerais, ao processo de:
  (a) expansão de reinos cristãos sobre territórios sob domínio islâmico na Península Ibérica
  (b) unificação política do Sacro Império sob monarquia hereditária estável
  (c) retomada permanente de Jerusalém por reinos latinos no século XIII
  (d) reunificação das cidades italianas sob um rei único no final da Idade Média

**Verdadeiro/Falso**

* O Sacro Império tendeu a manter maior fragmentação política do que reinos como França e Inglaterra.
* Disputas sucessórias podiam gerar longos períodos de conflito e barganha política.
* Assembleias medievais funcionavam como parlamentos democráticos modernos, com sufrágio amplo.
* Monarquias ibéricas se fortaleceram em parte em contextos de expansão territorial e reorganização institucional.

### Checklist

* Foco em **processos e instituições**, não em anedotas.
* Evitar comparações diretas com instituições democráticas atuais.
* Variar reinos e períodos.

---