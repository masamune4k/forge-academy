# Plano de ensino — React

Aprenda React construindo, investigando e verificando soluções, com fundamentos, aplicações e fronteiras avançadas.

**Carga estimada:** 216 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- JavaScript: funções, arrays, objetos, módulos, eventos e promessas.
- HTML semântico, CSS, TypeScript básico e ambiente Vite.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Componentes e JSX | 18.0 | 1–3.0 | Incremento 1: Componentes e JSX |
| 02 | Props e composição | 18.0 | 3.0–5.0 | Incremento 2: Props e composição |
| 03 | Estado e eventos | 18.0 | 5.0–7.0 | Incremento 3: Estado e eventos |
| 04 | Listas, identidade e imutabilidade | 18.0 | 7.0–9.0 | Incremento 4: Listas, identidade e imutabilidade |
| 05 | Formulários acessíveis | 18.0 | 10.0–12.0 | Incremento 5: Formulários acessíveis |
| 06 | Estado derivado e reducer | 18.0 | 12.0–14.0 | Incremento 6: Estado derivado e reducer |
| 07 | Effects e sincronização | 18.0 | 14.0–16.0 | Incremento 7: Effects e sincronização |
| 08 | Assincronismo e corrida | 18.0 | 16.0–18.0 | Incremento 8: Assincronismo e corrida |
| 09 | Context e hooks de domínio | 18.0 | 19.0–21.0 | Incremento 9: Context e hooks de domínio |
| 10 | Refs, foco e navegação | 18.0 | 21.0–23.0 | Incremento 10: Refs, foco e navegação |
| 11 | Testes e limites de erro | 18.0 | 23.0–25.0 | Incremento 11: Testes e limites de erro |
| 12 | Arquitetura, desempenho e entrega | 18.0 | 25.0–27.0 | Incremento 12: Arquitetura, desempenho e entrega |

## Nível 01 — Componentes e JSX

Componentes são funções puras que descrevem a interface. JSX exige expressões entre chaves e nomes de componentes com inicial maiúscula.

**Aulas e objetivos**

- Aula 01: **Componentes e JSX · construir** — Executar o exemplo e explicar o contrato: Extraia um componente Cabecalho com título recebido por propriedade. (6.0 h)
  - Exercício 1: Extraia um componente Cabecalho com título recebido por propriedade. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Chamar uma função com efeitos colaterais enquanto o componente renderiza. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Componentes e JSX. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 02: **Componentes e JSX · investigar** — Alterar uma condição e diagnosticar o comportamento: Extraia um componente Cabecalho com título recebido por propriedade. (6.0 h)
  - Exercício 1: Extraia um componente Cabecalho com título recebido por propriedade. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Chamar uma função com efeitos colaterais enquanto o componente renderiza. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Componentes e JSX. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 03: **Componentes e JSX · verificar** — Comprovar o contrato e seus limites com evidências: Extraia um componente Cabecalho com título recebido por propriedade. (6.0 h)
  - Exercício 1: Extraia um componente Cabecalho com título recebido por propriedade. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Chamar uma função com efeitos colaterais enquanto o componente renderiza. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Componentes e JSX. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 1: Componentes e JSX

- Extraia um componente Cabecalho com título recebido por propriedade.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Componentes são funções puras que descrevem a interface. JSX exige expressões entre chaves e nomes de componentes com inicial maiúscula.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 02 — Props e composição

Props são entradas somente de leitura; children permite compor conteúdo sem duplicar a estrutura.

**Aulas e objetivos**

- Aula 04: **Props e composição · construir** — Executar o exemplo e explicar o contrato: Faça dois cartões com conteúdos diferentes e a mesma estrutura sem usar uma prop para cada elemento. (6.0 h)
  - Exercício 1: Faça dois cartões com conteúdos diferentes e a mesma estrutura sem usar uma prop para cada elemento. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Alterar diretamente um objeto recebido por props. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Props e composição. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 05: **Props e composição · investigar** — Alterar uma condição e diagnosticar o comportamento: Faça dois cartões com conteúdos diferentes e a mesma estrutura sem usar uma prop para cada elemento. (6.0 h)
  - Exercício 1: Faça dois cartões com conteúdos diferentes e a mesma estrutura sem usar uma prop para cada elemento. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Alterar diretamente um objeto recebido por props. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Props e composição. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 06: **Props e composição · verificar** — Comprovar o contrato e seus limites com evidências: Faça dois cartões com conteúdos diferentes e a mesma estrutura sem usar uma prop para cada elemento. (6.0 h)
  - Exercício 1: Faça dois cartões com conteúdos diferentes e a mesma estrutura sem usar uma prop para cada elemento. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Alterar diretamente um objeto recebido por props. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Props e composição. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 2: Props e composição

- Faça dois cartões com conteúdos diferentes e a mesma estrutura sem usar uma prop para cada elemento.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Props são entradas somente de leitura; children permite compor conteúdo sem duplicar a estrutura.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 03 — Estado e eventos

Uma atualização de estado agenda uma nova renderização. Use a forma funcional quando o próximo valor depende do anterior.

**Aulas e objetivos**

- Aula 07: **Estado e eventos · construir** — Executar o exemplo e explicar o contrato: Adicione uma operação de reinício e limite o contador a um valor definido pelo contrato. (6.0 h)
  - Exercício 1: Adicione uma operação de reinício e limite o contador a um valor definido pelo contrato. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Esperar que duas chamadas setN(n+1) acumulem sobre o mesmo snapshot. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Estado e eventos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 08: **Estado e eventos · investigar** — Alterar uma condição e diagnosticar o comportamento: Adicione uma operação de reinício e limite o contador a um valor definido pelo contrato. (6.0 h)
  - Exercício 1: Adicione uma operação de reinício e limite o contador a um valor definido pelo contrato. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Esperar que duas chamadas setN(n+1) acumulem sobre o mesmo snapshot. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Estado e eventos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 09: **Estado e eventos · verificar** — Comprovar o contrato e seus limites com evidências: Adicione uma operação de reinício e limite o contador a um valor definido pelo contrato. (6.0 h)
  - Exercício 1: Adicione uma operação de reinício e limite o contador a um valor definido pelo contrato. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Esperar que duas chamadas setN(n+1) acumulem sobre o mesmo snapshot. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Estado e eventos. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 3: Estado e eventos

- Adicione uma operação de reinício e limite o contador a um valor definido pelo contrato.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Uma atualização de estado agenda uma nova renderização. Use a forma funcional quando o próximo valor depende do anterior.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 04 — Listas, identidade e imutabilidade

Keys estáveis identificam itens entre renderizações. Atualize arrays criando uma coleção nova e preserve os IDs do domínio.

**Aulas e objetivos**

- Aula 10: **Listas, identidade e imutabilidade · construir** — Executar o exemplo e explicar o contrato: Adicione ordenação por nome sem mutar o array guardado no estado. (6.0 h)
  - Exercício 1: Adicione ordenação por nome sem mutar o array guardado no estado. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar o índice como key em uma lista que permite exclusão e reordenação. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Listas, identidade e imutabilidade. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 11: **Listas, identidade e imutabilidade · investigar** — Alterar uma condição e diagnosticar o comportamento: Adicione ordenação por nome sem mutar o array guardado no estado. (6.0 h)
  - Exercício 1: Adicione ordenação por nome sem mutar o array guardado no estado. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar o índice como key em uma lista que permite exclusão e reordenação. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Listas, identidade e imutabilidade. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 12: **Listas, identidade e imutabilidade · verificar** — Comprovar o contrato e seus limites com evidências: Adicione ordenação por nome sem mutar o array guardado no estado. (6.0 h)
  - Exercício 1: Adicione ordenação por nome sem mutar o array guardado no estado. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar o índice como key em uma lista que permite exclusão e reordenação. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Listas, identidade e imutabilidade. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 4: Listas, identidade e imutabilidade

- Adicione ordenação por nome sem mutar o array guardado no estado.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Keys estáveis identificam itens entre renderizações. Atualize arrays criando uma coleção nova e preserve os IDs do domínio.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 05 — Formulários acessíveis

Um campo controlado recebe value e onChange. Label, mensagens e envio por teclado fazem parte do comportamento do formulário.

**Aulas e objetivos**

- Aula 13: **Formulários acessíveis · construir** — Executar o exemplo e explicar o contrato: Valide espaços em branco e anuncie o erro com uma mensagem associada ao campo. (6.0 h)
  - Exercício 1: Valide espaços em branco e anuncie o erro com uma mensagem associada ao campo. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Tratar placeholder como substituto de um label. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Formulários acessíveis. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 14: **Formulários acessíveis · investigar** — Alterar uma condição e diagnosticar o comportamento: Valide espaços em branco e anuncie o erro com uma mensagem associada ao campo. (6.0 h)
  - Exercício 1: Valide espaços em branco e anuncie o erro com uma mensagem associada ao campo. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Tratar placeholder como substituto de um label. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Formulários acessíveis. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 15: **Formulários acessíveis · verificar** — Comprovar o contrato e seus limites com evidências: Valide espaços em branco e anuncie o erro com uma mensagem associada ao campo. (6.0 h)
  - Exercício 1: Valide espaços em branco e anuncie o erro com uma mensagem associada ao campo. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Tratar placeholder como substituto de um label. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Formulários acessíveis. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 5: Formulários acessíveis

- Valide espaços em branco e anuncie o erro com uma mensagem associada ao campo.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Um campo controlado recebe value e onChange. Label, mensagens e envio por teclado fazem parte do comportamento do formulário.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 06 — Estado derivado e reducer

Calcule dados derivados durante a renderização; reducers concentram transições e precisam ser puros.

**Aulas e objetivos**

- Aula 16: **Estado derivado e reducer · construir** — Executar o exemplo e explicar o contrato: Modele adicionar, concluir e remover tarefas em um reducer e rejeite IDs ausentes. (6.0 h)
  - Exercício 1: Modele adicionar, concluir e remover tarefas em um reducer e rejeite IDs ausentes. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Guardar o total derivado em outro estado que pode ficar desatualizado. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Estado derivado e reducer. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 17: **Estado derivado e reducer · investigar** — Alterar uma condição e diagnosticar o comportamento: Modele adicionar, concluir e remover tarefas em um reducer e rejeite IDs ausentes. (6.0 h)
  - Exercício 1: Modele adicionar, concluir e remover tarefas em um reducer e rejeite IDs ausentes. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Guardar o total derivado em outro estado que pode ficar desatualizado. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Estado derivado e reducer. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 18: **Estado derivado e reducer · verificar** — Comprovar o contrato e seus limites com evidências: Modele adicionar, concluir e remover tarefas em um reducer e rejeite IDs ausentes. (6.0 h)
  - Exercício 1: Modele adicionar, concluir e remover tarefas em um reducer e rejeite IDs ausentes. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Guardar o total derivado em outro estado que pode ficar desatualizado. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Estado derivado e reducer. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 6: Estado derivado e reducer

- Modele adicionar, concluir e remover tarefas em um reducer e rejeite IDs ausentes.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Calcule dados derivados durante a renderização; reducers concentram transições e precisam ser puros.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 07 — Effects e sincronização

Effects sincronizam com sistemas externos. A limpeza deve desfazer a inscrição; não use effect para copiar valores derivados para outro estado.

**Aulas e objetivos**

- Aula 19: **Effects e sincronização · construir** — Executar o exemplo e explicar o contrato: Teste montar, desmontar e montar novamente sem acumular listeners. (6.0 h)
  - Exercício 1: Teste montar, desmontar e montar novamente sem acumular listeners. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Omitir dependências ou a limpeza para silenciar um problema. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Effects e sincronização. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 20: **Effects e sincronização · investigar** — Alterar uma condição e diagnosticar o comportamento: Teste montar, desmontar e montar novamente sem acumular listeners. (6.0 h)
  - Exercício 1: Teste montar, desmontar e montar novamente sem acumular listeners. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Omitir dependências ou a limpeza para silenciar um problema. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Effects e sincronização. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 21: **Effects e sincronização · verificar** — Comprovar o contrato e seus limites com evidências: Teste montar, desmontar e montar novamente sem acumular listeners. (6.0 h)
  - Exercício 1: Teste montar, desmontar e montar novamente sem acumular listeners. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Omitir dependências ou a limpeza para silenciar um problema. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Effects e sincronização. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 7: Effects e sincronização

- Teste montar, desmontar e montar novamente sem acumular listeners.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Effects sincronizam com sistemas externos. A limpeza deve desfazer a inscrição; não use effect para copiar valores derivados para outro estado.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 08 — Assincronismo e corrida

Uma resposta antiga não pode substituir a consulta mais recente. Cancele a requisição e represente carregamento, erro, vazio e sucesso explicitamente.

**Aulas e objetivos**

- Aula 22: **Assincronismo e corrida · construir** — Executar o exemplo e explicar o contrato: Crie uma API simulada local e provoque uma resposta lenta e outra com erro 500. (6.0 h)
  - Exercício 1: Crie uma API simulada local e provoque uma resposta lenta e outra com erro 500. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Tratar qualquer resposta HTTP como sucesso antes de consultar ok. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Assincronismo e corrida. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 23: **Assincronismo e corrida · investigar** — Alterar uma condição e diagnosticar o comportamento: Crie uma API simulada local e provoque uma resposta lenta e outra com erro 500. (6.0 h)
  - Exercício 1: Crie uma API simulada local e provoque uma resposta lenta e outra com erro 500. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Tratar qualquer resposta HTTP como sucesso antes de consultar ok. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Assincronismo e corrida. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 24: **Assincronismo e corrida · verificar** — Comprovar o contrato e seus limites com evidências: Crie uma API simulada local e provoque uma resposta lenta e outra com erro 500. (6.0 h)
  - Exercício 1: Crie uma API simulada local e provoque uma resposta lenta e outra com erro 500. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Tratar qualquer resposta HTTP como sucesso antes de consultar ok. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Assincronismo e corrida. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 8: Assincronismo e corrida

- Crie uma API simulada local e provoque uma resposta lenta e outra com erro 500.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Uma resposta antiga não pode substituir a consulta mais recente. Cancele a requisição e represente carregamento, erro, vazio e sucesso explicitamente.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 09 — Context e hooks de domínio

Context distribui uma dependência compartilhada; um hook pode encapsular o contrato. Estado de formulário local não precisa virar estado global.

**Aulas e objetivos**

- Aula 25: **Context e hooks de domínio · construir** — Executar o exemplo e explicar o contrato: Crie useTema e compare o comportamento dentro e fora de seu provider. (6.0 h)
  - Exercício 1: Crie useTema e compare o comportamento dentro e fora de seu provider. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar um único contexto para todas as mudanças da aplicação sem medir suas consequências. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Context e hooks de domínio. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 26: **Context e hooks de domínio · investigar** — Alterar uma condição e diagnosticar o comportamento: Crie useTema e compare o comportamento dentro e fora de seu provider. (6.0 h)
  - Exercício 1: Crie useTema e compare o comportamento dentro e fora de seu provider. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar um único contexto para todas as mudanças da aplicação sem medir suas consequências. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Context e hooks de domínio. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 27: **Context e hooks de domínio · verificar** — Comprovar o contrato e seus limites com evidências: Crie useTema e compare o comportamento dentro e fora de seu provider. (6.0 h)
  - Exercício 1: Crie useTema e compare o comportamento dentro e fora de seu provider. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar um único contexto para todas as mudanças da aplicação sem medir suas consequências. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Context e hooks de domínio. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 9: Context e hooks de domínio

- Crie useTema e compare o comportamento dentro e fora de seu provider.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Context distribui uma dependência compartilhada; um hook pode encapsular o contrato. Estado de formulário local não precisa virar estado global.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 10 — Refs, foco e navegação

Refs preservam acesso ao elemento sem solicitar renderização. Após ações que mudam o contexto, planeje foco e preserve links reais para navegação.

**Aulas e objetivos**

- Aula 28: **Refs, foco e navegação · construir** — Executar o exemplo e explicar o contrato: Adicione um diálogo acessível com retorno de foco e descreva quando um roteador seria necessário. (6.0 h)
  - Exercício 1: Adicione um diálogo acessível com retorno de foco e descreva quando um roteador seria necessário. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Guardar o valor visível apenas em ref e esperar que a interface se atualize. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Refs, foco e navegação. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 29: **Refs, foco e navegação · investigar** — Alterar uma condição e diagnosticar o comportamento: Adicione um diálogo acessível com retorno de foco e descreva quando um roteador seria necessário. (6.0 h)
  - Exercício 1: Adicione um diálogo acessível com retorno de foco e descreva quando um roteador seria necessário. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Guardar o valor visível apenas em ref e esperar que a interface se atualize. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Refs, foco e navegação. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 30: **Refs, foco e navegação · verificar** — Comprovar o contrato e seus limites com evidências: Adicione um diálogo acessível com retorno de foco e descreva quando um roteador seria necessário. (6.0 h)
  - Exercício 1: Adicione um diálogo acessível com retorno de foco e descreva quando um roteador seria necessário. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Guardar o valor visível apenas em ref e esperar que a interface se atualize. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Refs, foco e navegação. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 10: Refs, foco e navegação

- Adicione um diálogo acessível com retorno de foco e descreva quando um roteador seria necessário.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Refs preservam acesso ao elemento sem solicitar renderização. Após ações que mudam o contexto, planeje foco e preserve links reais para navegação.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 11 — Testes e limites de erro

Verifique interações pelo comportamento que o usuário observa. Error boundaries tratam falhas de renderização de descendentes; erros de eventos e requisições exigem tratamento próprio.

**Aulas e objetivos**

- Aula 31: **Testes e limites de erro · construir** — Executar o exemplo e explicar o contrato: Use Testing Library e um runner configurado para testar nome acessível, envio válido e erro de rede. (6.0 h)
  - Exercício 1: Use Testing Library e um runner configurado para testar nome acessível, envio válido e erro de rede. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Supor que um error boundary captura toda rejeição de fetch ou erro em onClick. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Testes e limites de erro. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 32: **Testes e limites de erro · investigar** — Alterar uma condição e diagnosticar o comportamento: Use Testing Library e um runner configurado para testar nome acessível, envio válido e erro de rede. (6.0 h)
  - Exercício 1: Use Testing Library e um runner configurado para testar nome acessível, envio válido e erro de rede. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Supor que um error boundary captura toda rejeição de fetch ou erro em onClick. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Testes e limites de erro. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 33: **Testes e limites de erro · verificar** — Comprovar o contrato e seus limites com evidências: Use Testing Library e um runner configurado para testar nome acessível, envio válido e erro de rede. (6.0 h)
  - Exercício 1: Use Testing Library e um runner configurado para testar nome acessível, envio válido e erro de rede. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Supor que um error boundary captura toda rejeição de fetch ou erro em onClick. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Testes e limites de erro. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 11: Testes e limites de erro

- Use Testing Library e um runner configurado para testar nome acessível, envio válido e erro de rede.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Verifique interações pelo comportamento que o usuário observa. Error boundaries tratam falhas de renderização de descendentes; erros de eventos e requisições exigem tratamento próprio.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 12 — Arquitetura, desempenho e entrega

Separe estado por responsabilidade e meça antes de memorizar. Acessibilidade, testes, observação de falhas e build reproduzível fazem parte da entrega.

**Aulas e objetivos**

- Aula 34: **Arquitetura, desempenho e entrega · construir** — Executar o exemplo e explicar o contrato: Mova Ajuda para outro arquivo com import dinâmico e compare o bundle e o carregamento no navegador. (6.0 h)
  - Exercício 1: Mova Ajuda para outro arquivo com import dinâmico e compare o bundle e o carregamento no navegador. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Afirmar melhoria de bundle sem usar import dinâmico de um módulo separado e sem medir. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Arquitetura, desempenho e entrega. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 35: **Arquitetura, desempenho e entrega · investigar** — Alterar uma condição e diagnosticar o comportamento: Mova Ajuda para outro arquivo com import dinâmico e compare o bundle e o carregamento no navegador. (6.0 h)
  - Exercício 1: Mova Ajuda para outro arquivo com import dinâmico e compare o bundle e o carregamento no navegador. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Afirmar melhoria de bundle sem usar import dinâmico de um módulo separado e sem medir. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Arquitetura, desempenho e entrega. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 36: **Arquitetura, desempenho e entrega · verificar** — Comprovar o contrato e seus limites com evidências: Mova Ajuda para outro arquivo com import dinâmico e compare o bundle e o carregamento no navegador. (6.0 h)
  - Exercício 1: Mova Ajuda para outro arquivo com import dinâmico e compare o bundle e o carregamento no navegador. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Afirmar melhoria de bundle sem usar import dinâmico de um módulo separado e sem medir. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Arquitetura, desempenho e entrega. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 12: Arquitetura, desempenho e entrega

- Mova Ajuda para outro arquivo com import dinâmico e compare o bundle e o carregamento no navegador.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Separe estado por responsabilidade e meça antes de memorizar. Acessibilidade, testes, observação de falhas e build reproduzível fazem parte da entrega.
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

- [Documentação oficial de React](https://react.dev/learn) — Referência dos conceitos e ferramentas usados na trilha.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — React: integração 1

Una a estrutura, as entradas e a interação inicial em uma entrega pequena.

**Aulas necessárias**

- Aula 02 — Componentes e JSX · investigar
- Aula 03 — Componentes e JSX · verificar
- Aula 05 — Props e composição · investigar
- Aula 06 — Props e composição · verificar
- Aula 08 — Estado e eventos · investigar
- Aula 09 — Estado e eventos · verificar

**Conceitos combinados:** Componentes e JSX; Props e composição; Estado e eventos.

### Combo 2 — React: integração 2

Evolua a entrega para tratar mudanças e casos de fronteira sem perder os contratos anteriores.

**Aulas necessárias**

- Aula 11 — Listas, identidade e imutabilidade · investigar
- Aula 12 — Listas, identidade e imutabilidade · verificar
- Aula 14 — Formulários acessíveis · investigar
- Aula 15 — Formulários acessíveis · verificar
- Aula 17 — Estado derivado e reducer · investigar
- Aula 18 — Estado derivado e reducer · verificar

**Conceitos combinados:** Listas, identidade e imutabilidade; Formulários acessíveis; Estado derivado e reducer.

### Combo 3 — React: integração 3

Integre estados de falha, comunicação e recuperação; comprove o comportamento em uma reprodução controlada.

**Aulas necessárias**

- Aula 20 — Effects e sincronização · investigar
- Aula 21 — Effects e sincronização · verificar
- Aula 23 — Assincronismo e corrida · investigar
- Aula 24 — Assincronismo e corrida · verificar
- Aula 26 — Context e hooks de domínio · investigar
- Aula 27 — Context e hooks de domínio · verificar

**Conceitos combinados:** Effects e sincronização; Assincronismo e corrida; Context e hooks de domínio.

### Combo 4 — React: integração 4

Prepare uma entrega reproduzível, com diagnóstico, revisão e limites de operação documentados.

**Aulas necessárias**

- Aula 29 — Refs, foco e navegação · investigar
- Aula 30 — Refs, foco e navegação · verificar
- Aula 32 — Testes e limites de erro · investigar
- Aula 33 — Testes e limites de erro · verificar
- Aula 35 — Arquitetura, desempenho e entrega · investigar
- Aula 36 — Arquitetura, desempenho e entrega · verificar

**Conceitos combinados:** Refs, foco e navegação; Testes e limites de erro; Arquitetura, desempenho e entrega.

### Projeto final — Painel de estudos acessível em React

Consolide os incrementos dos 12 módulos em uma única entrega verificável, usando dados fictícios e explicando os contratos e limites.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Catálogo de estudos com componentes, props e identidade estável dos itens.
- Adicionar, editar e concluir atividades com transições previsíveis e atualização imutável.
- Formulário acessível com validação, mensagens e navegação por teclado.
- Consulta a uma API simulada, exibindo carregamento, vazio, erro e sucesso sem corrida entre respostas.
- Organização por responsabilidade, limpeza de efeitos e foco previsível.
- Testes das interações, build com Vite e explicação das decisões em TypeScript.

**Entregáveis**

- Código ou repositório do laboratório completo.
- README com ambiente, instalação, execução e decisões.
- Evidências dos casos normais, de fronteira e de falha.
- Relatório de revisão com limitações e próximos passos.

**Critérios práticos**

- **Critério 1:** Catálogo de estudos com componentes, props e identidade estável dos itens.
- **Critério 2:** Adicionar, editar e concluir atividades com transições previsíveis e atualização imutável.
- **Critério 3:** Formulário acessível com validação, mensagens e navegação por teclado.
- **Critério 4:** Consulta a uma API simulada, exibindo carregamento, vazio, erro e sucesso sem corrida entre respostas.
- **Critério 5:** Organização por responsabilidade, limpeza de efeitos e foco previsível.
- **Critério 6:** Testes das interações, build com Vite e explicação das decisões em TypeScript.

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
