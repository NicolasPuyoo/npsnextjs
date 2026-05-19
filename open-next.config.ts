// OpenNext for Cloudflare config.
// NPS is 100% SSG (60 prerendered pages) — no ISR, no on-demand revalidation.
// We don't need R2 incremental cache, self-reference service, or queues.
// Default config is minimal: just enable Cloudflare overrides for the runtime
// pieces (request/response handling, asset serving).

import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({});
