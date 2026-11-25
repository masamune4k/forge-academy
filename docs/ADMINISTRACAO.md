# Administração da Forge Academy

Entre com a conta administrativa e abra **Administração** no menu lateral ou `/#admin`. O administrador é definido pelo ID imutável da conta na variável de runtime `FORGE_ADMIN_USER_ID` da API Sites. O valor não vem do navegador, de um nome de usuário escolhido no cadastro ou da primeira pessoa a se registrar. Sem configuração, nenhuma conta recebe privilégios administrativos. Não há promoção de alunos pelo painel.

## Contas

A lista permite buscar por usuário ou nome, com 20 contas por página. Mostra a situação, data de cadastro e eventual troca de senha pendente. Não retorna hashes de senha, códigos de recuperação, sessões ou rascunhos privados.

Em **Gerenciar**, escolha redefinir a senha, bloquear ou desbloquear. Informe sua senha de administrador e confirme a conta de destino. Sua própria conta é protegida contra bloqueio e redefinição administrativa; use **Minha conta** para alterar sua senha pessoal.

Uma redefinição exige senha temporária de 8 a 128 caracteres, encerra as sessões do aluno e invalida o código de recuperação anterior. Comunique a senha temporária por um canal privado. No próximo acesso, o aluno precisa substituí-la por uma senha diferente antes de acessar os cursos e recebe um novo código de recuperação. As senhas são protegidas com scrypt; não são exibidas novamente nem registradas no histórico.

Bloquear encerra as sessões e impede login e recuperação de acesso. Desbloquear preserva a senha e exige um novo login. Nenhuma dessas ações apaga aulas, anotações ou entregas. Para remover um aluno, escolha **Excluir conta definitivamente** em **Gerenciar**. Digite exatamente o nome de usuário indicado, informe sua senha de administrador e marque a confirmação. O botão final descreve a exclusão definitiva. A API exige as mesmas confirmações, inclusive quando o formulário é ignorado.

A exclusão remove a conta e, em cascata, suas sessões, progresso, respostas, anotações, rascunhos, resultados, tentativas e entregas. A ação não pode ser desfeita. As outras contas não são afetadas. O histórico administrativo conserva um registro da ação com o ID da conta removida, sem senha ou conteúdo de estudo.

A conta administrativa é protegida contra exclusão. Contas que tenham autoria de registros administrativos anteriores também são preservadas para manter o histórico; nesse caso, use o bloqueio de acesso.

## Convites

Todo novo cadastro precisa do campo **Código de convite**. As contas criadas antes desta atualização continuam válidas.

1. Dê um nome ao convite para identificá-lo.
2. Escolha de 1 a 100 cadastros e validade de 1 a 30 dias. O padrão é um cadastro e sete dias.
3. Gere o código e copie-o imediatamente. A lista guarda apenas os metadados e o hash; o código completo não pode ser recuperado depois.
4. Compartilhe-o com as pessoas autorizadas. Convites com vários usos podem ser compartilhados até atingir o limite.
5. Revogue um convite para impedir novos cadastros. Isso não remove as contas já cadastradas.

A validação é feita pela API, inclusive quando alguém ignora o formulário. O consumo e a criação da conta acontecem no mesmo lote transacional: duplicidade de usuário não gasta um uso, e convites esgotados, expirados ou revogados não criam contas. O convite não substitui a senha e não concede acesso administrativo.

## Histórico e publicação

### Recuperação do administrador sem a senha atual

O proprietário da hospedagem pode solicitar uma operação única por `FORGE_OWNER_PASSWORD_RESET`, configurada como segredo de runtime da API. Ela identifica o mesmo ID de `FORGE_ADMIN_USER_ID`, o login exato, um identificador único, hashes scrypt/recuperação e uma validade máxima de 15 minutos. Não há endpoint público de recuperação administrativa. Não coloque essa configuração no GitHub ou no navegador.

Na próxima execução da API, o lote transacional troca a senha, invalida a recuperação anterior, encerra sessões, remove os bloqueios de tentativas específicos da conta e registra a operação. O identificador consumido impede que a senha temporária seja reaplicada após o aluno escolher sua senha pessoal. O segredo deve ser removido e a mesma versão publicada novamente depois da conferência. A configuração não altera privilégios nem desbloqueia contas bloqueadas.

### Histórico

As últimas 100 ações administrativas ficam disponíveis no painel: geração/revogação de convite, redefinição de senha, bloqueio/desbloqueio e exclusão de conta. O histórico não contém senhas ou códigos completos. A lista de convites também mostra os 100 registros mais recentes; convites anteriores mantêm sua validade original.

A atualização acrescenta duas colunas com valores padrão em `users`, além de `registration_invites` e `admin_audit`. As migrações são aplicadas no D1 durante a publicação Sites. O gateway Render precisa da mesma versão da interface e da lista de rotas permitidas. O banco continua no Sites, conforme [o MVP](MVP_RENDER.md).

Testes usam SQLite em memória e dados sintéticos. A prévia usa outro banco. Não se criam contas de teste nem se alteram senhas de alunos na publicação para validar a funcionalidade.

Referências: [lotes transacionais D1](https://developers.cloudflare.com/d1/worker-api/d1-database/#batch) e [recuperação de senhas OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html).
