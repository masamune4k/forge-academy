declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    FORGE_ADMIN_USER_ID?: string;
    BUCKET?: R2Bucket;
  }
}
