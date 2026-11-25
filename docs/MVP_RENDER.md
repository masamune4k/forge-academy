# MVP de baixo custo no Render

Os 25 cursos, nove classes, exercícios, combos e projetos finais são mantidos. Um único serviço Node serve os arquivos de `public/learn/` e encaminha as rotas permitidas de `/api/*` para a API existente. O processo não exige dependências npm para iniciar ou para executar seus testes.

## Arquitetura e persistência

| Parte | Onde funciona |
| --- | --- |
| Interface e materiais | Serviço Node no Render, fonte neste GitHub |
| Login, sessões, correção e autorização | API da instalação Sites existente |
| Contas, progresso, notas e entregas | Mesmo banco D1 da instalação Sites |
| Arquivos locais no Render | Somente código e materiais; nenhum banco de alunos |

Esta publicação depende da instalação `https://forge-academy.masamune4k.chatgpt.site`. Não exclua esse Site ou seu D1. O gateway não permite escolher o destino por parâmetro de requisição e não encaminha rotas administrativas nem `/api/dev/session`.

Alunos já cadastrados usam o mesmo usuário e senha no novo endereço, mas precisam entrar novamente porque o cookie pertence a cada domínio. O banco e os IDs não são copiados. O código de recuperação continua necessário para redefinir a senha; o MVP não envia e-mails.

## Configuração do serviço

Crie um Web Service no workspace pessoal de `masamune4k@gmail.com`, usando `https://github.com/masamune4k/forge-academy.git`, branch `main`.

| Opção | Valor |
| --- | --- |
| Runtime | Node |
| Plano | Free |
| Região | Virginia |
| Build Command | `node --test tests/*.test.cjs tests/*.test.mjs` |
| Start Command | `node server/mvp-server.mjs` |
| Auto Deploy | Sim |
| `NODE_VERSION` | `24.22.1` |
| `UPSTREAM_ORIGIN` | `https://forge-academy.masamune4k.chatgpt.site` |

O Render injeta `PORT` e `RENDER_EXTERNAL_URL`. O servidor escuta em `0.0.0.0`. A origem autorizada para alterações vem de `PUBLIC_ORIGIN`, quando definida, ou de `RENDER_EXTERNAL_URL`. Ao adicionar domínio próprio, defina `PUBLIC_ORIGIN` com a origem HTTPS exata e publique novamente; o outro endereço não aceitará gravações.

Não é necessário informar chave do Sites, senha de banco ou token GitHub ao processo. O endpoint público `/healthz` indica que o processo está ativo; `/api/health` verifica a API e seu banco. A criação pela integração usa o health check TCP padrão do Render; uma checagem HTTP opcional pode usar `/healthz`.

Para executar localmente, com Node 24:

```sh
UPSTREAM_ORIGIN=https://forge-academy.masamune4k.chatgpt.site PUBLIC_ORIGIN=http://localhost:10000 npm run start:mvp
npm run test:mvp
```

Os testes integram o gateway à API real com SQLite em memória. Não criam contas no banco publicado. Cookies Secure exigem HTTPS no endereço público; o fluxo local acima serve principalmente à inspeção e testes automatizados.

## Proteções e verificação

- Apenas as rotas e métodos usados pela interface chegam à API.
- Gravações exigem a origem pública configurada antes de o gateway ajustar a origem enviada à API. Cabeçalhos `Host` e `X-Forwarded-Host` não definem essa permissão.
- Só o cookie de sessão da aplicação e a indicação de conta esperada atravessam o gateway. A API confere a identidade pela sessão e rejeita trocas de conta.
- Cookies continuam HttpOnly, Secure e SameSite=Lax; respostas privadas não são armazenadas em cache.
- Corpos têm limite de 700 KB e chamadas à API expiram em 15 segundos. Redirecionamentos e HTML inesperados resultam em erro JSON, sem abrir páginas de login de outra hospedagem.
- Arquivos privados, fontes do servidor, credenciais e diretórios do repositório não são servidos.

Antes de divulgar, confira página de login, os 25 arquivos de cursos, `/healthz`, `/api/health`, `/api/auth/me` sem sessão e rejeição de gravação com origem diferente. A suíte cobre duas contas, progresso, conflito de revisão, alteração de senha, pré-requisitos e logout.

## Limites e evolução

O Free evita mensalidade de computação enquanto o uso estiver nos limites incluídos. O Render suspende o serviço após 15 minutos sem tráfego e sua reativação pode levar cerca de um minuto. Há limites mensais de horas, tráfego e builds; excedentes podem suspender o serviço ou gerar cobrança conforme a conta. Consulte o painel de uso. Não foi contratado plano pago ou banco adicional.

Chamadas externas intensivas também têm limite no plano gratuito. Além disso, o limitador de autenticação da API enxerga o endereço de saída do gateway: muitos logins simultâneos podem receber 429 e devem aguardar. Esta arquitetura é adequada para um piloto pequeno; não define uma garantia de capacidade.

A implantação automática atualiza o gateway e os materiais do Render. Alterações em `server/api.mjs`, regras de domínio ou migrações D1 precisam ser publicadas também pelo fluxo Sites. Mantenha os contratos de API compatíveis. Reiniciar o Render não apaga o progresso, pois o serviço não armazena dados de alunos em disco.

Para autonomia completa, siga [a migração para Node e PostgreSQL](MIGRACAO_RENDER.md), com validação de transações, cópia privada dos dados e procedimento de retorno. Essa migração não foi realizada no MVP.

Referências oficiais consultadas em 25/11/2026: [Web Services](https://render.com/docs/web-services), [limites Free](https://render.com/docs/free), [variáveis padrão](https://render.com/docs/environment-variables), [Node](https://render.com/docs/node-version) e [health checks](https://render.com/docs/health-checks).
