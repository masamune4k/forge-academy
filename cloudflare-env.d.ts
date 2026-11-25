declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    FORGE_ADMIN_USER_ID?: string;
    FORGE_OWNER_PASSWORD_RESET?: string;
    BUCKET?: R2Bucket;
  }
}
