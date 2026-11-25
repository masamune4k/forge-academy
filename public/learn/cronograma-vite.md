# Plano de ensino — Vite

Aprenda Vite construindo, investigando e verificando soluções, com fundamentos, aplicações e fronteiras avançadas.

**Carga estimada:** 72 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- HTML, CSS, JavaScript e módulos ESM.
- Terminal, npm e noções de Git. TypeScript básico para o template react-ts.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Projeto e ciclo de desenvolvimento | 6.0 | 1–1.0 | Incremento 1: Projeto e ciclo de desenvolvimento |
| 02 | ESM e grafo de dependências | 6.0 | 1.0–2.0 | Incremento 2: ESM e grafo de dependências |
| 03 | CSS e isolamento | 6.0 | 2.0–3.0 | Incremento 3: CSS e isolamento |
| 04 | Assets e caminhos públicos | 6.0 | 3.0–3.0 | Incremento 4: Assets e caminhos públicos |
| 05 | Variáveis e fronteira de segredos | 6.0 | 4.0–4.0 | Incremento 5: Variáveis e fronteira de segredos |
| 06 | Configuração e plugins | 6.0 | 4.0–5.0 | Incremento 6: Configuração e plugins |
| 07 | Proxy e contrato HTTP | 6.0 | 5.0–6.0 | Incremento 7: Proxy e contrato HTTP |
| 08 | Import dinâmico e carregamento | 6.0 | 6.0–6.0 | Incremento 8: Import dinâmico e carregamento |
| 09 | TypeScript e checagem separada | 6.0 | 7.0–7.0 | Incremento 9: TypeScript e checagem separada |
| 10 | Testes e modos | 6.0 | 7.0–8.0 | Incremento 10: Testes e modos |
| 11 | Build, preview e hospedagem | 6.0 | 8.0–9.0 | Incremento 11: Build, preview e hospedagem |
| 12 | SSR, fronteiras e diagnóstico | 6.0 | 9.0–9.0 | Incremento 12: SSR, fronteiras e diagnóstico |

## Nível 01 — Projeto e ciclo de desenvolvimento

Vite fornece servidor de desenvolvimento e build. O entry HTML faz parte do projeto e o lockfile registra dependências resolvidas.

**Aulas e objetivos**

- Aula 01: **Projeto e ciclo de desenvolvimento · construir** — Executar o exemplo e explicar o contrato: Identifique entry HTML, código fonte, manifesto e lockfile no projeto criado. (2.0 h)
  - Exercício 1: Identifique entry HTML, código fonte, manifesto e lockfile no projeto criado. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Abrir index.html por file:// e esperar todas as funções do servidor Vite. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Projeto e ciclo de desenvolvimento. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 02: **Projeto e ciclo de desenvolvimento · investigar** — Alterar uma condição e diagnosticar o comportamento: Identifique entry HTML, código fonte, manifesto e lockfile no projeto criado. (2.0 h)
  - Exercício 1: Identifique entry HTML, código fonte, manifesto e lockfile no projeto criado. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Abrir index.html por file:// e esperar todas as funções do servidor Vite. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Projeto e ciclo de desenvolvimento. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 03: **Projeto e ciclo de desenvolvimento · verificar** — Comprovar o contrato e seus limites com evidências: Identifique entry HTML, código fonte, manifesto e lockfile no projeto criado. (2.0 h)
  - Exercício 1: Identifique entry HTML, código fonte, manifesto e lockfile no projeto criado. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Abrir index.html por file:// e esperar todas as funções do servidor Vite. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Projeto e ciclo de desenvolvimento. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 1: Projeto e ciclo de desenvolvimento

- Identifique entry HTML, código fonte, manifesto e lockfile no projeto criado.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Vite fornece servidor de desenvolvimento e build. O entry HTML faz parte do projeto e o lockfile registra dependências resolvidas.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 02 — ESM e grafo de dependências

Imports estáticos formam o grafo de módulos; caminhos são resolvidos pelo ambiente de build.

**Aulas e objetivos**

- Aula 04: **ESM e grafo de dependências · construir** — Executar o exemplo e explicar o contrato: Extraia uma função para outro módulo e use import/export explícitos. (2.0 h)
  - Exercício 1: Extraia uma função para outro módulo e use import/export explícitos. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Supor que um alias definido no editor também configura o bundler. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para ESM e grafo de dependências. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 05: **ESM e grafo de dependências · investigar** — Alterar uma condição e diagnosticar o comportamento: Extraia uma função para outro módulo e use import/export explícitos. (2.0 h)
  - Exercício 1: Extraia uma função para outro módulo e use import/export explícitos. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Supor que um alias definido no editor também configura o bundler. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para ESM e grafo de dependências. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 06: **ESM e grafo de dependências · verificar** — Comprovar o contrato e seus limites com evidências: Extraia uma função para outro módulo e use import/export explícitos. (2.0 h)
  - Exercício 1: Extraia uma função para outro módulo e use import/export explícitos. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Supor que um alias definido no editor também configura o bundler. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para ESM e grafo de dependências. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 2: ESM e grafo de dependências

- Extraia uma função para outro módulo e use import/export explícitos.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Imports estáticos formam o grafo de módulos; caminhos são resolvidos pelo ambiente de build.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 03 — CSS e isolamento

CSS importado entra no grafo do build. CSS Modules permite nomes locais, mas não substitui semântica nem acessibilidade.

**Aulas e objetivos**

- Aula 07: **CSS e isolamento · construir** — Executar o exemplo e explicar o contrato: Crie dois cartões em módulos diferentes e prove que seus nomes locais não colidem. (2.0 h)
  - Exercício 1: Crie dois cartões em módulos diferentes e prove que seus nomes locais não colidem. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar uma classe global esperando que o arquivo .module.css a trate como global automaticamente. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para CSS e isolamento. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 08: **CSS e isolamento · investigar** — Alterar uma condição e diagnosticar o comportamento: Crie dois cartões em módulos diferentes e prove que seus nomes locais não colidem. (2.0 h)
  - Exercício 1: Crie dois cartões em módulos diferentes e prove que seus nomes locais não colidem. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar uma classe global esperando que o arquivo .module.css a trate como global automaticamente. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para CSS e isolamento. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 09: **CSS e isolamento · verificar** — Comprovar o contrato e seus limites com evidências: Crie dois cartões em módulos diferentes e prove que seus nomes locais não colidem. (2.0 h)
  - Exercício 1: Crie dois cartões em módulos diferentes e prove que seus nomes locais não colidem. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar uma classe global esperando que o arquivo .module.css a trate como global automaticamente. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para CSS e isolamento. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 3: CSS e isolamento

- Crie dois cartões em módulos diferentes e prove que seus nomes locais não colidem.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- CSS importado entra no grafo do build. CSS Modules permite nomes locais, mas não substitui semântica nem acessibilidade.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 04 — Assets e caminhos públicos

Assets importados são processados; public mantém nomes estáveis. Configure base para o caminho em que a aplicação realmente será servida.

**Aulas e objetivos**

- Aula 10: **Assets e caminhos públicos · construir** — Executar o exemplo e explicar o contrato: Configure base /academia/ e confira os links no build servido nesse prefixo. (2.0 h)
  - Exercício 1: Configure base /academia/ e confira os links no build servido nesse prefixo. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar caminhos absolutos de raiz em uma aplicação publicada dentro de subdiretório. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Assets e caminhos públicos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 11: **Assets e caminhos públicos · investigar** — Alterar uma condição e diagnosticar o comportamento: Configure base /academia/ e confira os links no build servido nesse prefixo. (2.0 h)
  - Exercício 1: Configure base /academia/ e confira os links no build servido nesse prefixo. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar caminhos absolutos de raiz em uma aplicação publicada dentro de subdiretório. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Assets e caminhos públicos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 12: **Assets e caminhos públicos · verificar** — Comprovar o contrato e seus limites com evidências: Configure base /academia/ e confira os links no build servido nesse prefixo. (2.0 h)
  - Exercício 1: Configure base /academia/ e confira os links no build servido nesse prefixo. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar caminhos absolutos de raiz em uma aplicação publicada dentro de subdiretório. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Assets e caminhos públicos. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 4: Assets e caminhos públicos

- Configure base /academia/ e confira os links no build servido nesse prefixo.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Assets importados são processados; public mantém nomes estáveis. Configure base para o caminho em que a aplicação realmente será servida.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 05 — Variáveis e fronteira de segredos

Valores VITE_ são expostos ao cliente e são strings; não coloque credenciais neles. Valide números e booleanos explicitamente.

**Aulas e objetivos**

- Aula 13: **Variáveis e fronteira de segredos · construir** — Executar o exemplo e explicar o contrato: Defina uma variável pública em .env.local e mostre que ela pode ser encontrada no código enviado ao navegador. (2.0 h)
  - Exercício 1: Defina uma variável pública em .env.local e mostre que ela pode ser encontrada no código enviado ao navegador. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Guardar uma senha de banco em VITE_DATABASE_PASSWORD. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Variáveis e fronteira de segredos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 14: **Variáveis e fronteira de segredos · investigar** — Alterar uma condição e diagnosticar o comportamento: Defina uma variável pública em .env.local e mostre que ela pode ser encontrada no código enviado ao navegador. (2.0 h)
  - Exercício 1: Defina uma variável pública em .env.local e mostre que ela pode ser encontrada no código enviado ao navegador. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Guardar uma senha de banco em VITE_DATABASE_PASSWORD. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Variáveis e fronteira de segredos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 15: **Variáveis e fronteira de segredos · verificar** — Comprovar o contrato e seus limites com evidências: Defina uma variável pública em .env.local e mostre que ela pode ser encontrada no código enviado ao navegador. (2.0 h)
  - Exercício 1: Defina uma variável pública em .env.local e mostre que ela pode ser encontrada no código enviado ao navegador. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Guardar uma senha de banco em VITE_DATABASE_PASSWORD. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Variáveis e fronteira de segredos. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 5: Variáveis e fronteira de segredos

- Defina uma variável pública em .env.local e mostre que ela pode ser encontrada no código enviado ao navegador.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Valores VITE_ são expostos ao cliente e são strings; não coloque credenciais neles. Valide números e booleanos explicitamente.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 06 — Configuração e plugins

A configuração descreve plugins e transformações; cada plugin deve ter uma responsabilidade verificável.

**Aulas e objetivos**

- Aula 16: **Configuração e plugins · construir** — Executar o exemplo e explicar o contrato: Documente uma configuração necessária ao seu projeto e compare com o comportamento padrão. (2.0 h)
  - Exercício 1: Documente uma configuração necessária ao seu projeto e compare com o comportamento padrão. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Adicionar plugins sem medir a necessidade ou conferir compatibilidade com a versão do Vite. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Configuração e plugins. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 17: **Configuração e plugins · investigar** — Alterar uma condição e diagnosticar o comportamento: Documente uma configuração necessária ao seu projeto e compare com o comportamento padrão. (2.0 h)
  - Exercício 1: Documente uma configuração necessária ao seu projeto e compare com o comportamento padrão. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Adicionar plugins sem medir a necessidade ou conferir compatibilidade com a versão do Vite. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Configuração e plugins. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 18: **Configuração e plugins · verificar** — Comprovar o contrato e seus limites com evidências: Documente uma configuração necessária ao seu projeto e compare com o comportamento padrão. (2.0 h)
  - Exercício 1: Documente uma configuração necessária ao seu projeto e compare com o comportamento padrão. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Adicionar plugins sem medir a necessidade ou conferir compatibilidade com a versão do Vite. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Configuração e plugins. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 6: Configuração e plugins

- Documente uma configuração necessária ao seu projeto e compare com o comportamento padrão.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- A configuração descreve plugins e transformações; cada plugin deve ter uma responsabilidade verificável.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 07 — Proxy e contrato HTTP

O proxy do servidor de desenvolvimento não é o backend da produção nem resolve autenticação ou CORS em todos os ambientes.

**Aulas e objetivos**

- Aula 19: **Proxy e contrato HTTP · construir** — Executar o exemplo e explicar o contrato: Simule um erro 500 no backend e documente o encaminhamento e a mensagem mostrada ao usuário. (2.0 h)
  - Exercício 1: Simule um erro 500 no backend e documente o encaminhamento e a mensagem mostrada ao usuário. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Concluir que server.proxy será incluído automaticamente no JavaScript de produção. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Proxy e contrato HTTP. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 20: **Proxy e contrato HTTP · investigar** — Alterar uma condição e diagnosticar o comportamento: Simule um erro 500 no backend e documente o encaminhamento e a mensagem mostrada ao usuário. (2.0 h)
  - Exercício 1: Simule um erro 500 no backend e documente o encaminhamento e a mensagem mostrada ao usuário. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Concluir que server.proxy será incluído automaticamente no JavaScript de produção. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Proxy e contrato HTTP. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 21: **Proxy e contrato HTTP · verificar** — Comprovar o contrato e seus limites com evidências: Simule um erro 500 no backend e documente o encaminhamento e a mensagem mostrada ao usuário. (2.0 h)
  - Exercício 1: Simule um erro 500 no backend e documente o encaminhamento e a mensagem mostrada ao usuário. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Concluir que server.proxy será incluído automaticamente no JavaScript de produção. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Proxy e contrato HTTP. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 7: Proxy e contrato HTTP

- Simule um erro 500 no backend e documente o encaminhamento e a mensagem mostrada ao usuário.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- O proxy do servidor de desenvolvimento não é o backend da produção nem resolve autenticação ou CORS em todos os ambientes.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 08 — Import dinâmico e carregamento

Um import dinâmico de arquivo separado permite criar uma fronteira de carregamento. Verifique o resultado no bundle em vez de presumir divisão.

**Aulas e objetivos**

- Aula 22: **Import dinâmico e carregamento · construir** — Executar o exemplo e explicar o contrato: Compare os arquivos gerados e a rede antes e depois do clique. (2.0 h)
  - Exercício 1: Compare os arquivos gerados e a rede antes e depois do clique. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Medir apenas tamanho do fonte, ignorando os arquivos produzidos e a rede. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Import dinâmico e carregamento. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 23: **Import dinâmico e carregamento · investigar** — Alterar uma condição e diagnosticar o comportamento: Compare os arquivos gerados e a rede antes e depois do clique. (2.0 h)
  - Exercício 1: Compare os arquivos gerados e a rede antes e depois do clique. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Medir apenas tamanho do fonte, ignorando os arquivos produzidos e a rede. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Import dinâmico e carregamento. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 24: **Import dinâmico e carregamento · verificar** — Comprovar o contrato e seus limites com evidências: Compare os arquivos gerados e a rede antes e depois do clique. (2.0 h)
  - Exercício 1: Compare os arquivos gerados e a rede antes e depois do clique. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Medir apenas tamanho do fonte, ignorando os arquivos produzidos e a rede. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Import dinâmico e carregamento. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 8: Import dinâmico e carregamento

- Compare os arquivos gerados e a rede antes e depois do clique.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Um import dinâmico de arquivo separado permite criar uma fronteira de carregamento. Verifique o resultado no bundle em vez de presumir divisão.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 09 — TypeScript e checagem separada

Transpilar sintaxe TypeScript não equivale a verificar os tipos. Execute tsc com noEmit como etapa própria.

**Aulas e objetivos**

- Aula 25: **TypeScript e checagem separada · construir** — Executar o exemplo e explicar o contrato: Introduza uma incompatibilidade de tipos e compare o resultado de tsc e do build. (2.0 h)
  - Exercício 1: Introduza uma incompatibilidade de tipos e compare o resultado de tsc e do build. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Considerar um build concluído como prova de ausência de erros de tipos. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para TypeScript e checagem separada. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 26: **TypeScript e checagem separada · investigar** — Alterar uma condição e diagnosticar o comportamento: Introduza uma incompatibilidade de tipos e compare o resultado de tsc e do build. (2.0 h)
  - Exercício 1: Introduza uma incompatibilidade de tipos e compare o resultado de tsc e do build. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Considerar um build concluído como prova de ausência de erros de tipos. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para TypeScript e checagem separada. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 27: **TypeScript e checagem separada · verificar** — Comprovar o contrato e seus limites com evidências: Introduza uma incompatibilidade de tipos e compare o resultado de tsc e do build. (2.0 h)
  - Exercício 1: Introduza uma incompatibilidade de tipos e compare o resultado de tsc e do build. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Considerar um build concluído como prova de ausência de erros de tipos. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para TypeScript e checagem separada. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 9: TypeScript e checagem separada

- Introduza uma incompatibilidade de tipos e compare o resultado de tsc e do build.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Transpilar sintaxe TypeScript não equivale a verificar os tipos. Execute tsc com noEmit como etapa própria.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 10 — Testes e modos

Um runner de testes precisa de configuração e ambientes coerentes. O modo de build influencia arquivos de ambiente, mas não cria proteção para segredos.

**Aulas e objetivos**

- Aula 28: **Testes e modos · construir** — Executar o exemplo e explicar o contrato: Configure Vitest segundo sua documentação e faça um teste falhar antes de comprovar a correção. (2.0 h)
  - Exercício 1: Configure Vitest segundo sua documentação e faça um teste falhar antes de comprovar a correção. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Assumir que NODE_ENV e mode são a mesma variável em todos os comandos. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Testes e modos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 29: **Testes e modos · investigar** — Alterar uma condição e diagnosticar o comportamento: Configure Vitest segundo sua documentação e faça um teste falhar antes de comprovar a correção. (2.0 h)
  - Exercício 1: Configure Vitest segundo sua documentação e faça um teste falhar antes de comprovar a correção. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Assumir que NODE_ENV e mode são a mesma variável em todos os comandos. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Testes e modos. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 30: **Testes e modos · verificar** — Comprovar o contrato e seus limites com evidências: Configure Vitest segundo sua documentação e faça um teste falhar antes de comprovar a correção. (2.0 h)
  - Exercício 1: Configure Vitest segundo sua documentação e faça um teste falhar antes de comprovar a correção. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Assumir que NODE_ENV e mode são a mesma variável em todos os comandos. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Testes e modos. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 10: Testes e modos

- Configure Vitest segundo sua documentação e faça um teste falhar antes de comprovar a correção.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- Um runner de testes precisa de configuração e ambientes coerentes. O modo de build influencia arquivos de ambiente, mas não cria proteção para segredos.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 11 — Build, preview e hospedagem

vite preview verifica localmente a saída do build; a publicação exige um servidor ou serviço apropriado para os artefatos.

**Aulas e objetivos**

- Aula 31: **Build, preview e hospedagem · construir** — Executar o exemplo e explicar o contrato: Teste a saída em um servidor estático e configure fallback apenas se sua navegação realmente precisar. (2.0 h)
  - Exercício 1: Teste a saída em um servidor estático e configure fallback apenas se sua navegação realmente precisar. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar preview como se fosse um servidor de produção com políticas operacionais prontas. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Build, preview e hospedagem. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 32: **Build, preview e hospedagem · investigar** — Alterar uma condição e diagnosticar o comportamento: Teste a saída em um servidor estático e configure fallback apenas se sua navegação realmente precisar. (2.0 h)
  - Exercício 1: Teste a saída em um servidor estático e configure fallback apenas se sua navegação realmente precisar. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar preview como se fosse um servidor de produção com políticas operacionais prontas. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Build, preview e hospedagem. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 33: **Build, preview e hospedagem · verificar** — Comprovar o contrato e seus limites com evidências: Teste a saída em um servidor estático e configure fallback apenas se sua navegação realmente precisar. (2.0 h)
  - Exercício 1: Teste a saída em um servidor estático e configure fallback apenas se sua navegação realmente precisar. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Usar preview como se fosse um servidor de produção com políticas operacionais prontas. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para Build, preview e hospedagem. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 11: Build, preview e hospedagem

- Teste a saída em um servidor estático e configure fallback apenas se sua navegação realmente precisar.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- vite preview verifica localmente a saída do build; a publicação exige um servidor ou serviço apropriado para os artefatos.
- Comprova o comportamento antes e depois da alteração.
- Apresenta evidências e limites da verificação.

## Nível 12 — SSR, fronteiras e diagnóstico

SSR envolve execução no servidor e no cliente. APIs DOM não existem durante a renderização no servidor e dados privados não devem vazar pela hidratação.

**Aulas e objetivos**

- Aula 34: **SSR, fronteiras e diagnóstico · construir** — Executar o exemplo e explicar o contrato: Compare uma arquitetura SPA com SSR e documente o que mudaria no entry, nos dados e no processo de hospedagem. (2.0 h)
  - Exercício 1: Compare uma arquitetura SPA com SSR e documente o que mudaria no entry, nos dados e no processo de hospedagem. Explique primeiro sua previsão.
  - Exercício 2: Crie uma reprodução controlada deste erro: Ler document em código executado também no servidor. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para SSR, fronteiras e diagnóstico. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 35: **SSR, fronteiras e diagnóstico · investigar** — Alterar uma condição e diagnosticar o comportamento: Compare uma arquitetura SPA com SSR e documente o que mudaria no entry, nos dados e no processo de hospedagem. (2.0 h)
  - Exercício 1: Compare uma arquitetura SPA com SSR e documente o que mudaria no entry, nos dados e no processo de hospedagem. Compare duas entradas e registre os resultados.
  - Exercício 2: Crie uma reprodução controlada deste erro: Ler document em código executado também no servidor. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para SSR, fronteiras e diagnóstico. Execute ou inspecione cada um e documente o resultado esperado e observado.
- Aula 36: **SSR, fronteiras e diagnóstico · verificar** — Comprovar o contrato e seus limites com evidências: Compare uma arquitetura SPA com SSR e documente o que mudaria no entry, nos dados e no processo de hospedagem. (2.0 h)
  - Exercício 1: Compare uma arquitetura SPA com SSR e documente o que mudaria no entry, nos dados e no processo de hospedagem. Entregue um roteiro para outra pessoa reproduzir.
  - Exercício 2: Crie uma reprodução controlada deste erro: Ler document em código executado também no servidor. Registre o resultado, corrija e compare.
  - Exercício 3: Defina um caso normal, um caso de fronteira e um caso inválido para SSR, fronteiras e diagnóstico. Execute ou inspecione cada um e documente o resultado esperado e observado.

**Projeto:** Incremento 12: SSR, fronteiras e diagnóstico

- Compare uma arquitetura SPA com SSR e documente o que mudaria no entry, nos dados e no processo de hospedagem.
- Registro do resultado e de um contraexemplo.
- Instruções de reprodução em ambiente limpo.

**Critérios de conclusão**

- SSR envolve execução no servidor e no cliente. APIs DOM não existem durante a renderização no servidor e dados privados não devem vazar pela hidratação.
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

- [Documentação oficial de Vite](https://vite.dev/guide/) — Referência dos conceitos e ferramentas usados na trilha.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Vite: integração 1

Una a estrutura, as entradas e a interação inicial em uma entrega pequena.

**Aulas necessárias**

- Aula 02 — Projeto e ciclo de desenvolvimento · investigar
- Aula 03 — Projeto e ciclo de desenvolvimento · verificar
- Aula 05 — ESM e grafo de dependências · investigar
- Aula 06 — ESM e grafo de dependências · verificar
- Aula 08 — CSS e isolamento · investigar
- Aula 09 — CSS e isolamento · verificar

**Conceitos combinados:** Projeto e ciclo de desenvolvimento; ESM e grafo de dependências; CSS e isolamento.

### Combo 2 — Vite: integração 2

Evolua a entrega para tratar mudanças e casos de fronteira sem perder os contratos anteriores.

**Aulas necessárias**

- Aula 11 — Assets e caminhos públicos · investigar
- Aula 12 — Assets e caminhos públicos · verificar
- Aula 14 — Variáveis e fronteira de segredos · investigar
- Aula 15 — Variáveis e fronteira de segredos · verificar
- Aula 17 — Configuração e plugins · investigar
- Aula 18 — Configuração e plugins · verificar

**Conceitos combinados:** Assets e caminhos públicos; Variáveis e fronteira de segredos; Configuração e plugins.

### Combo 3 — Vite: integração 3

Integre estados de falha, comunicação e recuperação; comprove o comportamento em uma reprodução controlada.

**Aulas necessárias**

- Aula 20 — Proxy e contrato HTTP · investigar
- Aula 21 — Proxy e contrato HTTP · verificar
- Aula 23 — Import dinâmico e carregamento · investigar
- Aula 24 — Import dinâmico e carregamento · verificar
- Aula 26 — TypeScript e checagem separada · investigar
- Aula 27 — TypeScript e checagem separada · verificar

**Conceitos combinados:** Proxy e contrato HTTP; Import dinâmico e carregamento; TypeScript e checagem separada.

### Combo 4 — Vite: integração 4

Prepare uma entrega reproduzível, com diagnóstico, revisão e limites de operação documentados.

**Aulas necessárias**

- Aula 29 — Testes e modos · investigar
- Aula 30 — Testes e modos · verificar
- Aula 32 — Build, preview e hospedagem · investigar
- Aula 33 — Build, preview e hospedagem · verificar
- Aula 35 — SSR, fronteiras e diagnóstico · investigar
- Aula 36 — SSR, fronteiras e diagnóstico · verificar

**Conceitos combinados:** Testes e modos; Build, preview e hospedagem; SSR, fronteiras e diagnóstico.

### Projeto final — Catálogo web reproduzível com build e publicação

Consolide os incrementos dos 12 módulos em uma única entrega verificável, usando dados fictícios e explicando os contratos e limites.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Organizar catálogo em módulos ESM e CSS com recursos locais.
- Configurar caminhos de assets para publicação em subdiretório.
- Usar apenas configurações públicas no cliente, sem segredos em VITE_.
- Documentar a comunicação com API em desenvolvimento e em produção.
- Executar a checagem de tipos e testes separadamente do build.
- Comprovar instalação pelo lockfile, build reproduzível e teste do artefato em servidor estático.

**Entregáveis**

- Código ou repositório do laboratório completo.
- README com ambiente, instalação, execução e decisões.
- Evidências dos casos normais, de fronteira e de falha.
- Relatório de revisão com limitações e próximos passos.

**Critérios práticos**

- **Critério 1:** Organizar catálogo em módulos ESM e CSS com recursos locais.
- **Critério 2:** Configurar caminhos de assets para publicação em subdiretório.
- **Critério 3:** Usar apenas configurações públicas no cliente, sem segredos em VITE_.
- **Critério 4:** Documentar a comunicação com API em desenvolvimento e em produção.
- **Critério 5:** Executar a checagem de tipos e testes separadamente do build.
- **Critério 6:** Comprovar instalação pelo lockfile, build reproduzível e teste do artefato em servidor estático.

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
