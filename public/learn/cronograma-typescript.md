# Plano de ensino — TypeScript

Aprenda TypeScript construindo, investigando e verificando soluções, com fundamentos, aplicações e fronteiras avançadas.

**Carga estimada:** 144 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- JavaScript: funções, objetos, arrays, módulos e promessas.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Inferência e compilação | 12.0 | 1–2.0 | Incremento 1: Inferência e compilação |
| 02 | Objetos e propriedades opcionais | 12.0 | 2.0–3.0 | Incremento 2: Objetos e propriedades opcionais |
| 03 | Unions e narrowing | 12.0 | 4.0–5.0 | Incremento 3: Unions e narrowing |
| 04 | Funções e contratos | 12.0 | 5.0–6.0 | Incremento 4: Funções e contratos |
| 05 | Uniões discriminadas | 12.0 | 7.0–8.0 | Incremento 5: Uniões discriminadas |
| 06 | Generics e relações | 12.0 | 8.0–9.0 | Incremento 6: Generics e relações |
| 07 | Keyof e acesso seguro | 12.0 | 10.0–11.0 | Incremento 7: Keyof e acesso seguro |
| 08 | Mapped types e utilitários | 12.0 | 11.0–12.0 | Incremento 8: Mapped types e utilitários |
| 09 | Unknown e validação real | 12.0 | 13.0–14.0 | Incremento 9: Unknown e validação real |
| 10 | Promessas e falhas | 12.0 | 14.0–15.0 | Incremento 10: Promessas e falhas |
| 11 | Módulos e configuração estrita | 12.0 | 16.0–17.0 | Incremento 11: Módulos e configuração estrita |
| 12 | Tipos condicionais e testes de contrato | 12.0 | 17.0–18.0 | Incremento 12: Tipos condicionais e testes de contrato |

## Nível 01 — Inferência e compilação

TypeScript verifica contratos durante o desenvolvimento; os tipos não validam dados automaticamente em execução.

**Aulas e objetivos**

- Aula 01: **Inferência e compilação · construir** — Executar o exemplo e explicar o contrato: Introduza uma atribuição incompatível e registre o diagnóstico de tsc. (4.0 h)
  - Exercício 1: Introduza uma atribuição incompatível e registre o diagnóstico de tsc. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Esperar que uma anotação de tipo transforme texto recebido da rede em número. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Inferência e compilação. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 02: **Inferência e compilação · investigar** — Alterar uma condição e diagnosticar o comportamento: Introduza uma atribuição incompatível e registre o diagnóstico de tsc. (4.0 h)
  - Exercício 1: Introduza uma atribuição incompatível e registre o diagnóstico de tsc. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Esperar que uma anotação de tipo transforme texto recebido da rede em número. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Inferência e compilação. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 03: **Inferência e compilação · verificar** — Comprovar o contrato e seus limites com evidências: Introduza uma atribuição incompatível e registre o diagnóstico de tsc. (4.0 h)
  - Exercício 1: Introduza uma atribuição incompatível e registre o diagnóstico de tsc. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Esperar que uma anotação de tipo transforme texto recebido da rede em número. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Inferência e compilação. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 1: Inferência e compilação

- Introduza uma atribuição incompatível e registre o diagnóstico de tsc.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- TypeScript verifica contratos durante o desenvolvimento; os tipos não validam dados automaticamente em execução.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 02 — Objetos e propriedades opcionais

Modele ausência com propriedade opcional e trate undefined antes de usar o valor.

**Aulas e objetivos**

- Aula 04: **Objetos e propriedades opcionais · construir** — Executar o exemplo e explicar o contrato: Adicione um apelido vazio e defina uma política diferente para vazio e ausente. (4.0 h)
  - Exercício 1: Adicione um apelido vazio e defina uma política diferente para vazio e ausente. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Aplicar non-null assertion para esconder uma ausência possível. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Objetos e propriedades opcionais. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 05: **Objetos e propriedades opcionais · investigar** — Alterar uma condição e diagnosticar o comportamento: Adicione um apelido vazio e defina uma política diferente para vazio e ausente. (4.0 h)
  - Exercício 1: Adicione um apelido vazio e defina uma política diferente para vazio e ausente. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Aplicar non-null assertion para esconder uma ausência possível. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Objetos e propriedades opcionais. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 06: **Objetos e propriedades opcionais · verificar** — Comprovar o contrato e seus limites com evidências: Adicione um apelido vazio e defina uma política diferente para vazio e ausente. (4.0 h)
  - Exercício 1: Adicione um apelido vazio e defina uma política diferente para vazio e ausente. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Aplicar non-null assertion para esconder uma ausência possível. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Objetos e propriedades opcionais. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 2: Objetos e propriedades opcionais

- Adicione um apelido vazio e defina uma política diferente para vazio e ausente.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Modele ausência com propriedade opcional e trate undefined antes de usar o valor.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 03 — Unions e narrowing

Uma verificação de typeof restringe a união no ramo em que a condição foi comprovada.

**Aulas e objetivos**

- Aula 07: **Unions e narrowing · construir** — Executar o exemplo e explicar o contrato: Altere o retorno para normalizar texto e arrays de forma diferente. (4.0 h)
  - Exercício 1: Altere o retorno para normalizar texto e arrays de forma diferente. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Converter com as para remover um erro sem comprovar a forma do dado. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Unions e narrowing. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 08: **Unions e narrowing · investigar** — Alterar uma condição e diagnosticar o comportamento: Altere o retorno para normalizar texto e arrays de forma diferente. (4.0 h)
  - Exercício 1: Altere o retorno para normalizar texto e arrays de forma diferente. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Converter com as para remover um erro sem comprovar a forma do dado. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Unions e narrowing. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 09: **Unions e narrowing · verificar** — Comprovar o contrato e seus limites com evidências: Altere o retorno para normalizar texto e arrays de forma diferente. (4.0 h)
  - Exercício 1: Altere o retorno para normalizar texto e arrays de forma diferente. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Converter com as para remover um erro sem comprovar a forma do dado. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Unions e narrowing. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 3: Unions e narrowing

- Altere o retorno para normalizar texto e arrays de forma diferente.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Uma verificação de typeof restringe a união no ramo em que a condição foi comprovada.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 04 — Funções e contratos

Parâmetros, retornos e callbacks expressam a transformação permitida. O corpo deve respeitar todas as possibilidades da assinatura.

**Aulas e objetivos**

- Aula 10: **Funções e contratos · construir** — Executar o exemplo e explicar o contrato: Crie um callback que retorna string e documente o diagnóstico esperado. (4.0 h)
  - Exercício 1: Crie um callback que retorna string e documente o diagnóstico esperado. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar any no callback para aceitar uma transformação incompatível com o retorno. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Funções e contratos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 11: **Funções e contratos · investigar** — Alterar uma condição e diagnosticar o comportamento: Crie um callback que retorna string e documente o diagnóstico esperado. (4.0 h)
  - Exercício 1: Crie um callback que retorna string e documente o diagnóstico esperado. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar any no callback para aceitar uma transformação incompatível com o retorno. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Funções e contratos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 12: **Funções e contratos · verificar** — Comprovar o contrato e seus limites com evidências: Crie um callback que retorna string e documente o diagnóstico esperado. (4.0 h)
  - Exercício 1: Crie um callback que retorna string e documente o diagnóstico esperado. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar any no callback para aceitar uma transformação incompatível com o retorno. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Funções e contratos. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 4: Funções e contratos

- Crie um callback que retorna string e documente o diagnóstico esperado.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Parâmetros, retornos e callbacks expressam a transformação permitida. O corpo deve respeitar todas as possibilidades da assinatura.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 05 — Uniões discriminadas

Uma propriedade discriminante identifica estados válidos e evita combinações impossíveis de flags.

**Aulas e objetivos**

- Aula 13: **Uniões discriminadas · construir** — Executar o exemplo e explicar o contrato: Adicione estado pendente e faça uma conferência exaustiva com never. (4.0 h)
  - Exercício 1: Adicione estado pendente e faça uma conferência exaustiva com never. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Permitir simultaneamente sucesso true e dados de erro obrigatórios sem discriminar os estados. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Uniões discriminadas. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 14: **Uniões discriminadas · investigar** — Alterar uma condição e diagnosticar o comportamento: Adicione estado pendente e faça uma conferência exaustiva com never. (4.0 h)
  - Exercício 1: Adicione estado pendente e faça uma conferência exaustiva com never. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Permitir simultaneamente sucesso true e dados de erro obrigatórios sem discriminar os estados. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Uniões discriminadas. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 15: **Uniões discriminadas · verificar** — Comprovar o contrato e seus limites com evidências: Adicione estado pendente e faça uma conferência exaustiva com never. (4.0 h)
  - Exercício 1: Adicione estado pendente e faça uma conferência exaustiva com never. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Permitir simultaneamente sucesso true e dados de erro obrigatórios sem discriminar os estados. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Uniões discriminadas. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 5: Uniões discriminadas

- Adicione estado pendente e faça uma conferência exaustiva com never.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Uma propriedade discriminante identifica estados válidos e evita combinações impossíveis de flags.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 06 — Generics e relações

Um parâmetro genérico preserva a relação entre entrada e saída sem perder informação para any.

**Aulas e objetivos**

- Aula 16: **Generics e relações · construir** — Executar o exemplo e explicar o contrato: Teste uma lista vazia e exija tratamento do undefined no consumidor. (4.0 h)
  - Exercício 1: Teste uma lista vazia e exija tratamento do undefined no consumidor. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Declarar que primeiro sempre retorna T, mesmo para um array vazio. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Generics e relações. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 17: **Generics e relações · investigar** — Alterar uma condição e diagnosticar o comportamento: Teste uma lista vazia e exija tratamento do undefined no consumidor. (4.0 h)
  - Exercício 1: Teste uma lista vazia e exija tratamento do undefined no consumidor. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Declarar que primeiro sempre retorna T, mesmo para um array vazio. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Generics e relações. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 18: **Generics e relações · verificar** — Comprovar o contrato e seus limites com evidências: Teste uma lista vazia e exija tratamento do undefined no consumidor. (4.0 h)
  - Exercício 1: Teste uma lista vazia e exija tratamento do undefined no consumidor. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Declarar que primeiro sempre retorna T, mesmo para um array vazio. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Generics e relações. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 6: Generics e relações

- Teste uma lista vazia e exija tratamento do undefined no consumidor.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Um parâmetro genérico preserva a relação entre entrada e saída sem perder informação para any.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 07 — Keyof e acesso seguro

Keyof restringe chaves ao contrato do objeto; o tipo indexado preserva o tipo da propriedade retornada.

**Aulas e objetivos**

- Aula 19: **Keyof e acesso seguro · construir** — Executar o exemplo e explicar o contrato: Tente uma chave inexistente e compare com uma entrada dinâmica validada em execução. (4.0 h)
  - Exercício 1: Tente uma chave inexistente e compare com uma entrada dinâmica validada em execução. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Aceitar qualquer string como chave e afirmar que o valor sempre existe. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Keyof e acesso seguro. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 20: **Keyof e acesso seguro · investigar** — Alterar uma condição e diagnosticar o comportamento: Tente uma chave inexistente e compare com uma entrada dinâmica validada em execução. (4.0 h)
  - Exercício 1: Tente uma chave inexistente e compare com uma entrada dinâmica validada em execução. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Aceitar qualquer string como chave e afirmar que o valor sempre existe. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Keyof e acesso seguro. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 21: **Keyof e acesso seguro · verificar** — Comprovar o contrato e seus limites com evidências: Tente uma chave inexistente e compare com uma entrada dinâmica validada em execução. (4.0 h)
  - Exercício 1: Tente uma chave inexistente e compare com uma entrada dinâmica validada em execução. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Aceitar qualquer string como chave e afirmar que o valor sempre existe. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Keyof e acesso seguro. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 7: Keyof e acesso seguro

- Tente uma chave inexistente e compare com uma entrada dinâmica validada em execução.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Keyof restringe chaves ao contrato do objeto; o tipo indexado preserva o tipo da propriedade retornada.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 08 — Mapped types e utilitários

Readonly, Pick e Partial transformam contratos estáticos; readonly não congela o objeto em execução.

**Aulas e objetivos**

- Aula 22: **Mapped types e utilitários · construir** — Executar o exemplo e explicar o contrato: Desenhe um patch com campos permitidos sem liberar a alteração do ID. (4.0 h)
  - Exercício 1: Desenhe um patch com campos permitidos sem liberar a alteração do ID. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Confundir Readonly com Object.freeze e com congelamento profundo. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Mapped types e utilitários. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 23: **Mapped types e utilitários · investigar** — Alterar uma condição e diagnosticar o comportamento: Desenhe um patch com campos permitidos sem liberar a alteração do ID. (4.0 h)
  - Exercício 1: Desenhe um patch com campos permitidos sem liberar a alteração do ID. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Confundir Readonly com Object.freeze e com congelamento profundo. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Mapped types e utilitários. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 24: **Mapped types e utilitários · verificar** — Comprovar o contrato e seus limites com evidências: Desenhe um patch com campos permitidos sem liberar a alteração do ID. (4.0 h)
  - Exercício 1: Desenhe um patch com campos permitidos sem liberar a alteração do ID. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Confundir Readonly com Object.freeze e com congelamento profundo. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Mapped types e utilitários. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 8: Mapped types e utilitários

- Desenhe um patch com campos permitidos sem liberar a alteração do ID.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Readonly, Pick e Partial transformam contratos estáticos; readonly não congela o objeto em execução.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 09 — Unknown e validação real

Unknown exige prova antes do uso. Valide estrutura, tipo e regra de domínio de cada dado externo.

**Aulas e objetivos**

- Aula 25: **Unknown e validação real · construir** — Executar o exemplo e explicar o contrato: Teste zero, NaN, string, null e um valor positivo com resultados esperados. (4.0 h)
  - Exercício 1: Teste zero, NaN, string, null e um valor positivo com resultados esperados. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar JSON.parse seguido de as Pedido como se isso validasse o conteúdo. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Unknown e validação real. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 26: **Unknown e validação real · investigar** — Alterar uma condição e diagnosticar o comportamento: Teste zero, NaN, string, null e um valor positivo com resultados esperados. (4.0 h)
  - Exercício 1: Teste zero, NaN, string, null e um valor positivo com resultados esperados. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar JSON.parse seguido de as Pedido como se isso validasse o conteúdo. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Unknown e validação real. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 27: **Unknown e validação real · verificar** — Comprovar o contrato e seus limites com evidências: Teste zero, NaN, string, null e um valor positivo com resultados esperados. (4.0 h)
  - Exercício 1: Teste zero, NaN, string, null e um valor positivo com resultados esperados. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar JSON.parse seguido de as Pedido como se isso validasse o conteúdo. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Unknown e validação real. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 9: Unknown e validação real

- Teste zero, NaN, string, null e um valor positivo com resultados esperados.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Unknown exige prova antes do uso. Valide estrutura, tipo e regra de domínio de cada dado externo.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 10 — Promessas e falhas

Promise descreve o valor resolvido; erros continuam precisando de tratamento em execução.

**Aulas e objetivos**

- Aula 28: **Promessas e falhas · construir** — Executar o exemplo e explicar o contrato: Receba unknown de uma função assíncrona e valide antes de retornar um valor de domínio. (4.0 h)
  - Exercício 1: Receba unknown de uma função assíncrona e valide antes de retornar um valor de domínio. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Supor que Promise<number> impede falhas de rede ou garante o formato do JSON. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Promessas e falhas. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 29: **Promessas e falhas · investigar** — Alterar uma condição e diagnosticar o comportamento: Receba unknown de uma função assíncrona e valide antes de retornar um valor de domínio. (4.0 h)
  - Exercício 1: Receba unknown de uma função assíncrona e valide antes de retornar um valor de domínio. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Supor que Promise<number> impede falhas de rede ou garante o formato do JSON. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Promessas e falhas. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 30: **Promessas e falhas · verificar** — Comprovar o contrato e seus limites com evidências: Receba unknown de uma função assíncrona e valide antes de retornar um valor de domínio. (4.0 h)
  - Exercício 1: Receba unknown de uma função assíncrona e valide antes de retornar um valor de domínio. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Supor que Promise<number> impede falhas de rede ou garante o formato do JSON. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Promessas e falhas. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 10: Promessas e falhas

- Receba unknown de uma função assíncrona e valide antes de retornar um valor de domínio.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Promise descreve o valor resolvido; erros continuam precisando de tratamento em execução.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 11 — Módulos e configuração estrita

O compilador e o runtime precisam concordar sobre resolução de módulos. Um arquivo com export tem escopo de módulo.

**Aulas e objetivos**

- Aula 31: **Módulos e configuração estrita · construir** — Executar o exemplo e explicar o contrato: Separe o tipo em outro módulo e compile com configuração compatível com a execução escolhida. (4.0 h)
  - Exercício 1: Separe o tipo em outro módulo e compile com configuração compatível com a execução escolhida. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Escolher resolução de módulos de bundler e esperar a mesma resolução em todo runtime Node. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Módulos e configuração estrita. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 32: **Módulos e configuração estrita · investigar** — Alterar uma condição e diagnosticar o comportamento: Separe o tipo em outro módulo e compile com configuração compatível com a execução escolhida. (4.0 h)
  - Exercício 1: Separe o tipo em outro módulo e compile com configuração compatível com a execução escolhida. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Escolher resolução de módulos de bundler e esperar a mesma resolução em todo runtime Node. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Módulos e configuração estrita. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 33: **Módulos e configuração estrita · verificar** — Comprovar o contrato e seus limites com evidências: Separe o tipo em outro módulo e compile com configuração compatível com a execução escolhida. (4.0 h)
  - Exercício 1: Separe o tipo em outro módulo e compile com configuração compatível com a execução escolhida. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Escolher resolução de módulos de bundler e esperar a mesma resolução em todo runtime Node. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Módulos e configuração estrita. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 11: Módulos e configuração estrita

- Separe o tipo em outro módulo e compile com configuração compatível com a execução escolhida.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- O compilador e o runtime precisam concordar sobre resolução de módulos. Um arquivo com export tem escopo de módulo.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 12 — Tipos condicionais e testes de contrato

Tipos condicionais expressam relações, mas não substituem funções de validação nem testes de execução.

**Aulas e objetivos**

- Aula 34: **Tipos condicionais e testes de contrato · construir** — Executar o exemplo e explicar o contrato: Crie exemplos que devem compilar e falhar com @ts-expect-error; mantenha o contrato simples. (4.0 h)
  - Exercício 1: Crie exemplos que devem compilar e falhar com @ts-expect-error; mantenha o contrato simples. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Tornar o tipo público tão complexo que o consumidor precisa de assertions para utilizá-lo. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Tipos condicionais e testes de contrato. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 35: **Tipos condicionais e testes de contrato · investigar** — Alterar uma condição e diagnosticar o comportamento: Crie exemplos que devem compilar e falhar com @ts-expect-error; mantenha o contrato simples. (4.0 h)
  - Exercício 1: Crie exemplos que devem compilar e falhar com @ts-expect-error; mantenha o contrato simples. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Tornar o tipo público tão complexo que o consumidor precisa de assertions para utilizá-lo. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Tipos condicionais e testes de contrato. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 36: **Tipos condicionais e testes de contrato · verificar** — Comprovar o contrato e seus limites com evidências: Crie exemplos que devem compilar e falhar com @ts-expect-error; mantenha o contrato simples. (4.0 h)
  - Exercício 1: Crie exemplos que devem compilar e falhar com @ts-expect-error; mantenha o contrato simples. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Tornar o tipo público tão complexo que o consumidor precisa de assertions para utilizá-lo. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Tipos condicionais e testes de contrato. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 12: Tipos condicionais e testes de contrato

- Crie exemplos que devem compilar e falhar com @ts-expect-error; mantenha o contrato simples.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Tipos condicionais expressam relações, mas não substituem funções de validação nem testes de execução.
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

- [Documentação oficial de TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html) — Referência dos conceitos e ferramentas usados na trilha.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — TypeScript: integração 1

Una a estrutura, as entradas e a interação inicial em uma entrega pequena.

**Aulas necessárias**

- Aula 02 — Inferência e compilação · investigar
- Aula 03 — Inferência e compilação · verificar
- Aula 05 — Objetos e propriedades opcionais · investigar
- Aula 06 — Objetos e propriedades opcionais · verificar
- Aula 08 — Unions e narrowing · investigar
- Aula 09 — Unions e narrowing · verificar

**Conceitos combinados:** Inferência e compilação; Objetos e propriedades opcionais; Unions e narrowing.

### Combo 2 — TypeScript: integração 2

Evolua a entrega para tratar mudanças e casos de fronteira sem perder os contratos anteriores.

**Aulas necessárias**

- Aula 11 — Funções e contratos · investigar
- Aula 12 — Funções e contratos · verificar
- Aula 14 — Uniões discriminadas · investigar
- Aula 15 — Uniões discriminadas · verificar
- Aula 17 — Generics e relações · investigar
- Aula 18 — Generics e relações · verificar

**Conceitos combinados:** Funções e contratos; Uniões discriminadas; Generics e relações.

### Combo 3 — TypeScript: integração 3

Integre estados de falha, comunicação e recuperação; comprove o comportamento em uma reprodução controlada.

**Aulas necessárias**

- Aula 20 — Keyof e acesso seguro · investigar
- Aula 21 — Keyof e acesso seguro · verificar
- Aula 23 — Mapped types e utilitários · investigar
- Aula 24 — Mapped types e utilitários · verificar
- Aula 26 — Unknown e validação real · investigar
- Aula 27 — Unknown e validação real · verificar

**Conceitos combinados:** Keyof e acesso seguro; Mapped types e utilitários; Unknown e validação real.

### Combo 4 — TypeScript: integração 4

Prepare uma entrega reproduzível, com diagnóstico, revisão e limites de operação documentados.

**Aulas necessárias**

- Aula 29 — Promessas e falhas · investigar
- Aula 30 — Promessas e falhas · verificar
- Aula 32 — Módulos e configuração estrita · investigar
- Aula 33 — Módulos e configuração estrita · verificar
- Aula 35 — Tipos condicionais e testes de contrato · investigar
- Aula 36 — Tipos condicionais e testes de contrato · verificar

**Conceitos combinados:** Promessas e falhas; Módulos e configuração estrita; Tipos condicionais e testes de contrato.

### Projeto final — Motor tipado de pedidos e validação de entrada

Consolide os incrementos dos 12 módulos em uma única entrega verificável, usando dados fictícios e explicando os contratos e limites.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Modelar pedidos e estados com uniões discriminadas.
- Validar entradas unknown antes de convertê-las em dados do domínio.
- Implementar funções e coleções genéricas preservando a relação entre entrada e saída.
- Tratar ausência e erros sem any ou assertions para esconder incompatibilidades.
- Separar módulos e documentar a configuração estrita compatível com o runtime.
- Entregar testes de execução e exemplos positivos e negativos da checagem de tipos.

**Entregáveis**

- Código ou repositório do laboratório completo.
- README com ambiente, instalação, execução e decisões.
- Evidências dos casos normais, de fronteira e de falha.
- Relatório de revisão com limitações e próximos passos.

**Critérios práticos**

- **Critério 1:** Modelar pedidos e estados com uniões discriminadas.
- **Critério 2:** Validar entradas unknown antes de convertê-las em dados do domínio.
- **Critério 3:** Implementar funções e coleções genéricas preservando a relação entre entrada e saída.
- **Critério 4:** Tratar ausência e erros sem any ou assertions para esconder incompatibilidades.
- **Critério 5:** Separar módulos e documentar a configuração estrita compatível com o runtime.
- **Critério 6:** Entregar testes de execução e exemplos positivos e negativos da checagem de tipos.

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
