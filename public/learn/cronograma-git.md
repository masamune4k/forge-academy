# Plano de ensino — Git e GitHub

Aprenda Git e GitHub construindo, investigando e verificando soluções, com fundamentos, aplicações e fronteiras avançadas.

**Carga estimada:** 72 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Terminal básico e uma pasta de laboratório sem arquivos importantes.
- Conta GitHub apenas para práticas remotas; nunca compartilhe tokens ou senhas nas respostas.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Repositório e status | 6.0 | 1–1.0 | Incremento 1: Repositório e status |
| 02 | Staging e commit | 6.0 | 1.0–2.0 | Incremento 2: Staging e commit |
| 03 | Diff e investigação | 6.0 | 2.0–3.0 | Incremento 3: Diff e investigação |
| 04 | Branches e trabalho isolado | 6.0 | 3.0–3.0 | Incremento 4: Branches e trabalho isolado |
| 05 | Integração e conflitos | 6.0 | 4.0–4.0 | Incremento 5: Integração e conflitos |
| 06 | Remotos e rastreamento | 6.0 | 4.0–5.0 | Incremento 6: Remotos e rastreamento |
| 07 | Push e revisão | 6.0 | 5.0–6.0 | Incremento 7: Push e revisão |
| 08 | Ignore e segredos | 6.0 | 6.0–6.0 | Incremento 8: Ignore e segredos |
| 09 | Revert e recuperação | 6.0 | 7.0–7.0 | Incremento 9: Revert e recuperação |
| 10 | Rebase e histórico | 6.0 | 7.0–8.0 | Incremento 10: Rebase e histórico |
| 11 | Tags e releases | 6.0 | 8.0–9.0 | Incremento 11: Tags e releases |
| 12 | Colaboração e automação | 6.0 | 9.0–9.0 | Incremento 12: Colaboração e automação |

## Nível 01 — Repositório e status

Git versiona snapshots do conteúdo rastreado; status distingue arquivos novos, alterados e preparados.

**Aulas e objetivos**

- Aula 01: **Repositório e status · construir** — Executar o exemplo e explicar o contrato: Crie notas.txt e compare status antes e depois de salvar o arquivo. (2.0 h)
  - Exercício 1: Crie notas.txt e compare status antes e depois de salvar o arquivo. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Supor que criar um arquivo já o colocou no histórico. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Repositório e status. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 02: **Repositório e status · investigar** — Alterar uma condição e diagnosticar o comportamento: Crie notas.txt e compare status antes e depois de salvar o arquivo. (2.0 h)
  - Exercício 1: Crie notas.txt e compare status antes e depois de salvar o arquivo. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Supor que criar um arquivo já o colocou no histórico. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Repositório e status. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 03: **Repositório e status · verificar** — Comprovar o contrato e seus limites com evidências: Crie notas.txt e compare status antes e depois de salvar o arquivo. (2.0 h)
  - Exercício 1: Crie notas.txt e compare status antes e depois de salvar o arquivo. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Supor que criar um arquivo já o colocou no histórico. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Repositório e status. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 1: Repositório e status

- Crie notas.txt e compare status antes e depois de salvar o arquivo.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Git versiona snapshots do conteúdo rastreado; status distingue arquivos novos, alterados e preparados.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 02 — Staging e commit

O index representa o próximo snapshot; adicionar e fazer commit são etapas distintas.

**Aulas e objetivos**

- Aula 04: **Staging e commit · construir** — Executar o exemplo e explicar o contrato: Altere novamente notas.txt após o add e compare as duas diferenças. (2.0 h)
  - Exercício 1: Altere novamente notas.txt após o add e compare as duas diferenças. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar git add indiscriminadamente sem conferir os arquivos preparados. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Staging e commit. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 05: **Staging e commit · investigar** — Alterar uma condição e diagnosticar o comportamento: Altere novamente notas.txt após o add e compare as duas diferenças. (2.0 h)
  - Exercício 1: Altere novamente notas.txt após o add e compare as duas diferenças. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar git add indiscriminadamente sem conferir os arquivos preparados. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Staging e commit. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 06: **Staging e commit · verificar** — Comprovar o contrato e seus limites com evidências: Altere novamente notas.txt após o add e compare as duas diferenças. (2.0 h)
  - Exercício 1: Altere novamente notas.txt após o add e compare as duas diferenças. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar git add indiscriminadamente sem conferir os arquivos preparados. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Staging e commit. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 2: Staging e commit

- Altere novamente notas.txt após o add e compare as duas diferenças.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- O index representa o próximo snapshot; adicionar e fazer commit são etapas distintas.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 03 — Diff e investigação

Diff mostra mudanças; log mostra o histórico. A leitura deve preceder decisões de recuperação ou integração.

**Aulas e objetivos**

- Aula 07: **Diff e investigação · construir** — Executar o exemplo e explicar o contrato: Relacione cada alteração ao estado correspondente usando um pequeno exemplo reproduzível. (2.0 h)
  - Exercício 1: Relacione cada alteração ao estado correspondente usando um pequeno exemplo reproduzível. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Confundir ausência de diff no diretório com ausência de mudanças no index. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Diff e investigação. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 08: **Diff e investigação · investigar** — Alterar uma condição e diagnosticar o comportamento: Relacione cada alteração ao estado correspondente usando um pequeno exemplo reproduzível. (2.0 h)
  - Exercício 1: Relacione cada alteração ao estado correspondente usando um pequeno exemplo reproduzível. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Confundir ausência de diff no diretório com ausência de mudanças no index. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Diff e investigação. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 09: **Diff e investigação · verificar** — Comprovar o contrato e seus limites com evidências: Relacione cada alteração ao estado correspondente usando um pequeno exemplo reproduzível. (2.0 h)
  - Exercício 1: Relacione cada alteração ao estado correspondente usando um pequeno exemplo reproduzível. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Confundir ausência de diff no diretório com ausência de mudanças no index. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Diff e investigação. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 3: Diff e investigação

- Relacione cada alteração ao estado correspondente usando um pequeno exemplo reproduzível.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Diff mostra mudanças; log mostra o histórico. A leitura deve preceder decisões de recuperação ou integração.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 04 — Branches e trabalho isolado

Uma branch é uma referência móvel para um commit, não uma cópia independente de todos os arquivos.

**Aulas e objetivos**

- Aula 10: **Branches e trabalho isolado · construir** — Executar o exemplo e explicar o contrato: Crie um commit em estudo e compare as referências antes e depois. (2.0 h)
  - Exercício 1: Crie um commit em estudo e compare as referências antes e depois. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Esperar que mudanças não commitadas pertençam automaticamente a uma branch. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Branches e trabalho isolado. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 11: **Branches e trabalho isolado · investigar** — Alterar uma condição e diagnosticar o comportamento: Crie um commit em estudo e compare as referências antes e depois. (2.0 h)
  - Exercício 1: Crie um commit em estudo e compare as referências antes e depois. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Esperar que mudanças não commitadas pertençam automaticamente a uma branch. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Branches e trabalho isolado. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 12: **Branches e trabalho isolado · verificar** — Comprovar o contrato e seus limites com evidências: Crie um commit em estudo e compare as referências antes e depois. (2.0 h)
  - Exercício 1: Crie um commit em estudo e compare as referências antes e depois. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Esperar que mudanças não commitadas pertençam automaticamente a uma branch. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Branches e trabalho isolado. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 4: Branches e trabalho isolado

- Crie um commit em estudo e compare as referências antes e depois.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Uma branch é uma referência móvel para um commit, não uma cópia independente de todos os arquivos.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 05 — Integração e conflitos

Merge integra históricos. Um conflito exige compreender as duas intenções e validar o resultado combinado.

**Aulas e objetivos**

- Aula 13: **Integração e conflitos · construir** — Executar o exemplo e explicar o contrato: Crie um conflito de texto controlado e documente a decisão para cada parte. (2.0 h)
  - Exercício 1: Crie um conflito de texto controlado e documente a decisão para cada parte. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Apagar marcadores de conflito sem testar o comportamento resultante. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Integração e conflitos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 14: **Integração e conflitos · investigar** — Alterar uma condição e diagnosticar o comportamento: Crie um conflito de texto controlado e documente a decisão para cada parte. (2.0 h)
  - Exercício 1: Crie um conflito de texto controlado e documente a decisão para cada parte. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Apagar marcadores de conflito sem testar o comportamento resultante. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Integração e conflitos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 15: **Integração e conflitos · verificar** — Comprovar o contrato e seus limites com evidências: Crie um conflito de texto controlado e documente a decisão para cada parte. (2.0 h)
  - Exercício 1: Crie um conflito de texto controlado e documente a decisão para cada parte. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Apagar marcadores de conflito sem testar o comportamento resultante. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Integração e conflitos. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 5: Integração e conflitos

- Crie um conflito de texto controlado e documente a decisão para cada parte.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Merge integra históricos. Um conflito exige compreender as duas intenções e validar o resultado combinado.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 06 — Remotos e rastreamento

Fetch atualiza referências remotas sem integrar automaticamente o conteúdo na branch atual.

**Aulas e objetivos**

- Aula 16: **Remotos e rastreamento · construir** — Executar o exemplo e explicar o contrato: Compare sua branch com origin/main antes de propor uma integração. (2.0 h)
  - Exercício 1: Compare sua branch com origin/main antes de propor uma integração. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Tratar fetch e merge como a mesma operação. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Remotos e rastreamento. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 17: **Remotos e rastreamento · investigar** — Alterar uma condição e diagnosticar o comportamento: Compare sua branch com origin/main antes de propor uma integração. (2.0 h)
  - Exercício 1: Compare sua branch com origin/main antes de propor uma integração. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Tratar fetch e merge como a mesma operação. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Remotos e rastreamento. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 18: **Remotos e rastreamento · verificar** — Comprovar o contrato e seus limites com evidências: Compare sua branch com origin/main antes de propor uma integração. (2.0 h)
  - Exercício 1: Compare sua branch com origin/main antes de propor uma integração. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Tratar fetch e merge como a mesma operação. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Remotos e rastreamento. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 6: Remotos e rastreamento

- Compare sua branch com origin/main antes de propor uma integração.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Fetch atualiza referências remotas sem integrar automaticamente o conteúdo na branch atual.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 07 — Push e revisão

Push publica commits para um destino explícito. Revise branch, conteúdo e autorização antes de enviar.

**Aulas e objetivos**

- Aula 19: **Push e revisão · construir** — Executar o exemplo e explicar o contrato: Abra uma revisão no GitHub com problema, comportamento esperado e evidências de verificação. (2.0 h)
  - Exercício 1: Abra uma revisão no GitHub com problema, comportamento esperado e evidências de verificação. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar force para contornar qualquer rejeição sem investigar mudanças remotas. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Push e revisão. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 20: **Push e revisão · investigar** — Alterar uma condição e diagnosticar o comportamento: Abra uma revisão no GitHub com problema, comportamento esperado e evidências de verificação. (2.0 h)
  - Exercício 1: Abra uma revisão no GitHub com problema, comportamento esperado e evidências de verificação. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar force para contornar qualquer rejeição sem investigar mudanças remotas. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Push e revisão. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 21: **Push e revisão · verificar** — Comprovar o contrato e seus limites com evidências: Abra uma revisão no GitHub com problema, comportamento esperado e evidências de verificação. (2.0 h)
  - Exercício 1: Abra uma revisão no GitHub com problema, comportamento esperado e evidências de verificação. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar force para contornar qualquer rejeição sem investigar mudanças remotas. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Push e revisão. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 7: Push e revisão

- Abra uma revisão no GitHub com problema, comportamento esperado e evidências de verificação.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Push publica commits para um destino explícito. Revise branch, conteúdo e autorização antes de enviar.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 08 — Ignore e segredos

Gitignore afeta arquivos não rastreados. Uma credencial já publicada precisa ser revogada, mesmo se o arquivo for removido depois.

**Aulas e objetivos**

- Aula 22: **Ignore e segredos · construir** — Executar o exemplo e explicar o contrato: Use apenas um marcador fictício para comprovar que ignorar não altera o histórico existente. (2.0 h)
  - Exercício 1: Use apenas um marcador fictício para comprovar que ignorar não altera o histórico existente. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Achar que adicionar .env ao ignore remove esse arquivo de commits anteriores. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Ignore e segredos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 23: **Ignore e segredos · investigar** — Alterar uma condição e diagnosticar o comportamento: Use apenas um marcador fictício para comprovar que ignorar não altera o histórico existente. (2.0 h)
  - Exercício 1: Use apenas um marcador fictício para comprovar que ignorar não altera o histórico existente. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Achar que adicionar .env ao ignore remove esse arquivo de commits anteriores. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Ignore e segredos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 24: **Ignore e segredos · verificar** — Comprovar o contrato e seus limites com evidências: Use apenas um marcador fictício para comprovar que ignorar não altera o histórico existente. (2.0 h)
  - Exercício 1: Use apenas um marcador fictício para comprovar que ignorar não altera o histórico existente. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Achar que adicionar .env ao ignore remove esse arquivo de commits anteriores. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Ignore e segredos. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 8: Ignore e segredos

- Use apenas um marcador fictício para comprovar que ignorar não altera o histórico existente.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Gitignore afeta arquivos não rastreados. Uma credencial já publicada precisa ser revogada, mesmo se o arquivo for removido depois.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 09 — Revert e recuperação

Revert cria um novo commit inverso e preserva o histórico compartilhado; a recuperação deve partir de referências conferidas.

**Aulas e objetivos**

- Aula 25: **Revert e recuperação · construir** — Executar o exemplo e explicar o contrato: Crie e reverta uma alteração pequena; confira que os dois eventos continuam no log. (2.0 h)
  - Exercício 1: Crie e reverta uma alteração pequena; confira que os dois eventos continuam no log. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Reescrever a branch compartilhada quando um commit inverso resolveria a necessidade. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Revert e recuperação. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 26: **Revert e recuperação · investigar** — Alterar uma condição e diagnosticar o comportamento: Crie e reverta uma alteração pequena; confira que os dois eventos continuam no log. (2.0 h)
  - Exercício 1: Crie e reverta uma alteração pequena; confira que os dois eventos continuam no log. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Reescrever a branch compartilhada quando um commit inverso resolveria a necessidade. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Revert e recuperação. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 27: **Revert e recuperação · verificar** — Comprovar o contrato e seus limites com evidências: Crie e reverta uma alteração pequena; confira que os dois eventos continuam no log. (2.0 h)
  - Exercício 1: Crie e reverta uma alteração pequena; confira que os dois eventos continuam no log. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Reescrever a branch compartilhada quando um commit inverso resolveria a necessidade. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Revert e recuperação. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 9: Revert e recuperação

- Crie e reverta uma alteração pequena; confira que os dois eventos continuam no log.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Revert cria um novo commit inverso e preserva o histórico compartilhado; a recuperação deve partir de referências conferidas.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 10 — Rebase e histórico

Rebase reaplica commits e altera seus identificadores; combine seu uso com a política de colaboração.

**Aulas e objetivos**

- Aula 28: **Rebase e histórico · construir** — Executar o exemplo e explicar o contrato: Compare merge e rebase em branches descartáveis e explique o efeito nos identificadores. (2.0 h)
  - Exercício 1: Compare merge e rebase em branches descartáveis e explique o efeito nos identificadores. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Reescrever commits já consumidos por outras pessoas sem coordenação. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Rebase e histórico. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 29: **Rebase e histórico · investigar** — Alterar uma condição e diagnosticar o comportamento: Compare merge e rebase em branches descartáveis e explique o efeito nos identificadores. (2.0 h)
  - Exercício 1: Compare merge e rebase em branches descartáveis e explique o efeito nos identificadores. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Reescrever commits já consumidos por outras pessoas sem coordenação. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Rebase e histórico. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 30: **Rebase e histórico · verificar** — Comprovar o contrato e seus limites com evidências: Compare merge e rebase em branches descartáveis e explique o efeito nos identificadores. (2.0 h)
  - Exercício 1: Compare merge e rebase em branches descartáveis e explique o efeito nos identificadores. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Reescrever commits já consumidos por outras pessoas sem coordenação. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Rebase e histórico. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 10: Rebase e histórico

- Compare merge e rebase em branches descartáveis e explique o efeito nos identificadores.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Rebase reaplica commits e altera seus identificadores; combine seu uso com a política de colaboração.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 11 — Tags e releases

Uma tag identifica um ponto do histórico. Release deve apontar para um commit verificado e ter instruções reproduzíveis.

**Aulas e objetivos**

- Aula 31: **Tags e releases · construir** — Executar o exemplo e explicar o contrato: Descreva o envio explícito da tag e escreva notas com mudanças, compatibilidade e limitações. (2.0 h)
  - Exercício 1: Descreva o envio explícito da tag e escreva notas com mudanças, compatibilidade e limitações. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Afirmar que criar uma tag local a publica automaticamente no GitHub. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Tags e releases. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 32: **Tags e releases · investigar** — Alterar uma condição e diagnosticar o comportamento: Descreva o envio explícito da tag e escreva notas com mudanças, compatibilidade e limitações. (2.0 h)
  - Exercício 1: Descreva o envio explícito da tag e escreva notas com mudanças, compatibilidade e limitações. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Afirmar que criar uma tag local a publica automaticamente no GitHub. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Tags e releases. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 33: **Tags e releases · verificar** — Comprovar o contrato e seus limites com evidências: Descreva o envio explícito da tag e escreva notas com mudanças, compatibilidade e limitações. (2.0 h)
  - Exercício 1: Descreva o envio explícito da tag e escreva notas com mudanças, compatibilidade e limitações. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Afirmar que criar uma tag local a publica automaticamente no GitHub. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Tags e releases. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 11: Tags e releases

- Descreva o envio explícito da tag e escreva notas com mudanças, compatibilidade e limitações.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Uma tag identifica um ponto do histórico. Release deve apontar para um commit verificado e ter instruções reproduzíveis.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 12 — Colaboração e automação

Revisões, verificações e commits pequenos reduzem o custo de diagnóstico; uma execução verde precisa corresponder ao commit entregue.

**Aulas e objetivos**

- Aula 34: **Colaboração e automação · construir** — Executar o exemplo e explicar o contrato: Prepare um roteiro de clone limpo, instalação, testes e build e peça a outra pessoa para reproduzi-lo. (2.0 h)
  - Exercício 1: Prepare um roteiro de clone limpo, instalação, testes e build e peça a outra pessoa para reproduzi-lo. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar resultados de testes de outro commit como prova da versão publicada. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Colaboração e automação. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 35: **Colaboração e automação · investigar** — Alterar uma condição e diagnosticar o comportamento: Prepare um roteiro de clone limpo, instalação, testes e build e peça a outra pessoa para reproduzi-lo. (2.0 h)
  - Exercício 1: Prepare um roteiro de clone limpo, instalação, testes e build e peça a outra pessoa para reproduzi-lo. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar resultados de testes de outro commit como prova da versão publicada. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Colaboração e automação. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 36: **Colaboração e automação · verificar** — Comprovar o contrato e seus limites com evidências: Prepare um roteiro de clone limpo, instalação, testes e build e peça a outra pessoa para reproduzi-lo. (2.0 h)
  - Exercício 1: Prepare um roteiro de clone limpo, instalação, testes e build e peça a outra pessoa para reproduzi-lo. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar resultados de testes de outro commit como prova da versão publicada. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Colaboração e automação. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 12: Colaboração e automação

- Prepare um roteiro de clone limpo, instalação, testes e build e peça a outra pessoa para reproduzi-lo.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Revisões, verificações e commits pequenos reduzem o custo de diagnóstico; uma execução verde precisa corresponder ao commit entregue.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Documentação oficial de Git e GitHub](https://git-scm.com/book/en/v2) — Referência dos conceitos e ferramentas usados na trilha.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Git e GitHub: integração 1

Una a estrutura, as entradas e a interação inicial em uma entrega pequena.

**Aulas necessárias**

- Aula 02 — Repositório e status · investigar
- Aula 03 — Repositório e status · verificar
- Aula 05 — Staging e commit · investigar
- Aula 06 — Staging e commit · verificar
- Aula 08 — Diff e investigação · investigar
- Aula 09 — Diff e investigação · verificar

**Conceitos combinados:** Repositório e status; Staging e commit; Diff e investigação.

### Combo 2 — Git e GitHub: integração 2

Evolua a entrega para tratar mudanças e casos de fronteira sem perder os contratos anteriores.

**Aulas necessárias**

- Aula 11 — Branches e trabalho isolado · investigar
- Aula 12 — Branches e trabalho isolado · verificar
- Aula 14 — Integração e conflitos · investigar
- Aula 15 — Integração e conflitos · verificar
- Aula 17 — Remotos e rastreamento · investigar
- Aula 18 — Remotos e rastreamento · verificar

**Conceitos combinados:** Branches e trabalho isolado; Integração e conflitos; Remotos e rastreamento.

### Combo 3 — Git e GitHub: integração 3

Integre estados de falha, comunicação e recuperação; comprove o comportamento em uma reprodução controlada.

**Aulas necessárias**

- Aula 20 — Push e revisão · investigar
- Aula 21 — Push e revisão · verificar
- Aula 23 — Ignore e segredos · investigar
- Aula 24 — Ignore e segredos · verificar
- Aula 26 — Revert e recuperação · investigar
- Aula 27 — Revert e recuperação · verificar

**Conceitos combinados:** Push e revisão; Ignore e segredos; Revert e recuperação.

### Combo 4 — Git e GitHub: integração 4

Prepare uma entrega reproduzível, com diagnóstico, revisão e limites de operação documentados.

**Aulas necessárias**

- Aula 29 — Rebase e histórico · investigar
- Aula 30 — Rebase e histórico · verificar
- Aula 32 — Tags e releases · investigar
- Aula 33 — Tags e releases · verificar
- Aula 35 — Colaboração e automação · investigar
- Aula 36 — Colaboração e automação · verificar

**Conceitos combinados:** Rebase e histórico; Tags e releases; Colaboração e automação.

### Projeto final — Entrega colaborativa com histórico, revisão e release

Consolide os incrementos dos 12 módulos em uma única entrega verificável, usando dados fictícios e explicando os contratos e limites.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Repositório de laboratório com commits pequenos e mensagens que descrevem mudanças.
- Branch de funcionalidade integrada por uma revisão documentada.
- Conflito controlado resolvido e verificado com evidências.
- Ignore configurado e conferência do conteúdo rastreado, usando apenas dados fictícios.
- Correção reversível com revert e tag anotada para a entrega conferida.
- Instruções de clone, reprodução das verificações e vínculo da evidência ao commit exato.

**Entregáveis**

- Código ou repositório do laboratório completo.
- README com ambiente, instalação, execução e decisões.
- Evidências dos casos normais, de fronteira e de falha.
- Relatório de revisão com limitações e próximos passos.

**Critérios práticos**

- **Critério 1:** Repositório de laboratório com commits pequenos e mensagens que descrevem mudanças.
- **Critério 2:** Branch de funcionalidade integrada por uma revisão documentada.
- **Critério 3:** Conflito controlado resolvido e verificado com evidências.
- **Critério 4:** Ignore configurado e conferência do conteúdo rastreado, usando apenas dados fictícios.
- **Critério 5:** Correção reversível com revert e tag anotada para a entrega conferida.
- **Critério 6:** Instruções de clone, reprodução das verificações e vínculo da evidência ao commit exato.

**Testes de aceitação para executar localmente**

#### Fluxo principal

- Preparação: Prepare a entrega em ambiente limpo conforme o README.
- Entrada/ação: Execute a operação principal e percorra os seis requisitos.
- Resultado esperado: O comportamento observado corresponde aos requisitos e pode ser reproduzido por outra pessoa.

#### Fronteira e falha

- Preparação: Use uma cópia do laboratório e uma entrada inválida ou condição de erro documentada.
- Entrada/ação: Provoque a condição de erro, registre o resultado e aplique a recuperação prevista.
- Resultado esperado: A falha é compreensível, não corrompe o estado válido e o relatório explica a responsabilidade de cada camada.

#### Entrega reproduzível

- Preparação: Comece em nova pasta ou clone limpo, sem caches e sem arquivos privados.
- Entrada/ação: Siga os comandos e inspeções do README até a versão final.
- Resultado esperado: Os artefatos e evidências correspondem à versão entregue; nenhuma senha ou dado real foi incluído.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
