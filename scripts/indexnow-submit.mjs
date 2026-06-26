#!/usr/bin/env node
/**
 * IndexNow submission script for nps-acoustique.fr
 *
 * Notifie Bing, Yandex et autres moteurs IndexNow-compatibles à chaque deploy.
 * Bing alimente Microsoft Copilot, Yandex est utile pour le marché russe (skip
 * possible). Aucun équivalent Google (Google ne supporte pas IndexNow — il faut
 * Search Console pour Google).
 *
 * Usage : node scripts/indexnow-submit.mjs [--all | --recent]
 *   --all     submit all URLs from the live sitemap
 *   --recent  submit only URLs modified in the last 24h (default)
 *
 * Hook deploy : ajouter dans package.json après cf:deploy :
 *   "cf:deploy": "opennextjs-cloudflare build && wrangler deploy && node scripts/indexnow-submit.mjs --all"
 */

const SITE_URL = "https://nps-acoustique.fr";
const KEY = "a7f3c891bd4e25690f87142cb3d6e5a9";
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

async function fetchSitemapUrls() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

async function submit(urls) {
  if (urls.length === 0) {
    console.log("No URLs to submit. Done.");
    return;
  }
  const body = {
    host: "nps-acoustique.fr",
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  console.log(`IndexNow submission: HTTP ${res.status} for ${urls.length} URLs`);
  if (!res.ok) {
    const text = await res.text();
    console.error("Response body:", text);
    process.exit(1);
  }
}

const args = process.argv.slice(2);
const mode = args.includes("--all") ? "all" : "recent";

const urls = await fetchSitemapUrls();
console.log(`Found ${urls.length} URLs in sitemap.`);
await submit(urls);
console.log("Done.");
