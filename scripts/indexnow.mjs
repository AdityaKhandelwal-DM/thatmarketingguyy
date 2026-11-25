// Tell IndexNow search engines (Bing — which powers ChatGPT search and
// Copilot — Yandex, Seznam, Naver) about new or updated pages.
// Usage: node scripts/indexnow.mjs            -> every URL in the live sitemap
//        node scripts/indexnow.mjs <url> ...  -> just these URLs
const HOST = "www.thatmarketingguyy.com";
const KEY = "4151ef942ca911562d0393a0bb279b41";

let urls = process.argv.slice(2);
if (urls.length === 0) {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urls.length} URL(s)`);
