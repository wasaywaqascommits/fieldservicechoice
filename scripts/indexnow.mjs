/**
 * IndexNow submitter for FieldServiceChoice.
 *
 * Reads the live sitemap, then submits every URL to IndexNow in one batch so
 * Bing, Yandex and other participating engines re-crawl quickly. Google does
 * not use IndexNow, so this complements (does not replace) Search Console.
 *
 * Run after deploying new or changed content:
 *   npm run indexnow
 *
 * The key is public by design (it is served at KEY_LOCATION); IndexNow uses it
 * only to confirm you own the domain.
 */

const KEY = 'db1801a431f027261d22c55142c7bda9';
const HOST = 'fieldservicechoice.com';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

async function main() {
  const res = await fetch(SITEMAP_URL, { headers: { 'User-Agent': 'FieldServiceChoice-IndexNow' } });
  if (!res.ok) {
    console.error(`Could not fetch sitemap (${res.status}). Is the site deployed?`);
    process.exit(1);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (urls.length === 0) {
    console.error('No <loc> URLs found in the sitemap.');
    process.exit(1);
  }

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);
  const submit = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls }),
  });

  const bodyText = await submit.text().catch(() => '');
  if (submit.ok) {
    console.log(`IndexNow accepted the submission (${submit.status}).`);
  } else {
    console.error(`IndexNow returned ${submit.status} ${submit.statusText}. ${bodyText}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
