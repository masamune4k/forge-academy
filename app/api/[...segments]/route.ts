import { env } from 'cloudflare:workers';
import { createApi } from '../../../server/api.mjs';
import { applyOwnerPasswordReset } from '../../../server/owner-maintenance.mjs';
import courses from '../../../server/course-index.json';
import assessments from '../../../server/assessments.json';

export const dynamic = 'force-dynamic';
async function handle(request: Request) {
  if(env.DB && env.FORGE_OWNER_PASSWORD_RESET) await applyOwnerPasswordReset({db:env.DB,ownerId:env.FORGE_ADMIN_USER_ID,configuration:env.FORGE_OWNER_PASSWORD_RESET});
  return createApi({db:env.DB,courses,assessments,ownerId:env.FORGE_ADMIN_USER_ID,dev:import.meta.env.DEV})(request);
}
export const GET=handle;
export const POST=handle;
export const PUT=handle;
