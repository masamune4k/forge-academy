import { sqliteTable, text, integer, primaryKey, index } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(), login: text('login').notNull().unique(),
  displayName: text('display_name').notNull(), password: text('password').notNull(),
  recoveryHash: text('recovery_hash').notNull(), classId: text('class_id').notNull().default('artifice'),
  status: text('status').notNull().default('active'),
  mustChangePassword: integer('must_change_password').notNull().default(0),
  createdAt: integer('created_at').notNull(), updatedAt: integer('updated_at').notNull(),
});
export const sessions = sqliteTable('sessions', {
  tokenHash: text('token_hash').primaryKey(), userId: text('user_id').notNull().references(() => users.id, {onDelete:'cascade'}),
  expiresAt: integer('expires_at').notNull(), createdAt: integer('created_at').notNull(),
}, t => [index('sessions_user').on(t.userId), index('sessions_expiry').on(t.expiresAt)]);
export const progress = sqliteTable('course_progress', {
  userId: text('user_id').notNull().references(() => users.id, {onDelete:'cascade'}), courseId: text('course_id').notNull(),
  state: text('state').notNull(), revision: integer('revision').notNull().default(0),
  writeToken: text('write_token').notNull(), updatedAt: integer('updated_at').notNull(),
}, t => [primaryKey({columns:[t.userId,t.courseId]})]);
export const documents = sqliteTable('course_documents', {
  userId: text('user_id').notNull().references(() => users.id, {onDelete:'cascade'}), courseId: text('course_id').notNull(),
  kind: text('kind').notNull(), documentId: text('document_id').notNull(), content: text('content').notNull(), updatedAt: integer('updated_at').notNull(),
}, t => [primaryKey({columns:[t.userId,t.courseId,t.kind,t.documentId]})]);
export const results = sqliteTable('assessment_results', {
  userId: text('user_id').notNull().references(() => users.id, {onDelete:'cascade'}), courseId: text('course_id').notNull(),
  assessmentId: text('assessment_id').notNull(), result: text('result').notNull(), updatedAt: integer('updated_at').notNull(),
}, t => [primaryKey({columns:[t.userId,t.courseId,t.assessmentId]})]);
export const attempts = sqliteTable('assessment_attempts', {
  id: text('id').primaryKey(), userId: text('user_id').notNull().references(() => users.id, {onDelete:'cascade'}),
  courseId: text('course_id').notNull(), assessmentId: text('assessment_id').notNull(), result: text('result').notNull(), createdAt: integer('created_at').notNull(),
}, t => [index('attempts_owner').on(t.userId,t.courseId)]);
export const submissions = sqliteTable('project_submissions', {
  userId: text('user_id').notNull().references(() => users.id, {onDelete:'cascade'}), courseId: text('course_id').notNull(),
  submission: text('submission').notNull(), updatedAt: integer('updated_at').notNull(),
}, t => [primaryKey({columns:[t.userId,t.courseId]})]);
export const limits = sqliteTable('rate_limits', {
  key: text('key').primaryKey(), window: integer('window').notNull(), count: integer('count').notNull(),
});
export const invites = sqliteTable('registration_invites', {
  id: text('id').primaryKey(), codeHash: text('code_hash').notNull().unique(),
  label: text('label').notNull(), maxUses: integer('max_uses').notNull(), uses: integer('uses').notNull().default(0),
  expiresAt: integer('expires_at').notNull(), revoked: integer('revoked').notNull().default(0),
  lastClaim: text('last_claim'), createdBy: text('created_by').notNull().references(() => users.id),
  createdAt: integer('created_at').notNull(),
});
export const adminAudit = sqliteTable('admin_audit', {
  id: text('id').primaryKey(), actorId: text('actor_id').notNull().references(() => users.id),
  action: text('action').notNull(), targetId: text('target_id').notNull(),
  detail: text('detail').notNull(), createdAt: integer('created_at').notNull(),
}, t => [index('admin_audit_date').on(t.createdAt)]);
