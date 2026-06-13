// Fetches license-safe photos (Pexels — free for commercial use, no attribution)
// for each blog article, and crops them into hero + OG sizes with sharp.
//
// Usage:  FIRECRAWL_API_KEY=fc-xxx node scripts/fetch-blog-photos.mjs
import sharp from "sharp";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const KEY = process.env.FIRECRAWL_API_KEY;
if (!KEY) {
  console.error("Missing FIRECRAWL_API_KEY env var");
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images", "blog");
mkdirSync(OUT, { recursive: true });

// slug -> ordered list of Pexels search queries (first that yields a fresh photo wins)
const PLAN = [
  ["mortgage-interest-rates-2026", ["interest rate finance chart graph", "stock market graph finance"]],
  ["prime-rate-mortgage-impact", ["bank building finance", "percentage finance calculator"]],
  ["first-apartment-mortgage-guide", ["happy couple new home keys", "young couple moving home"]],
  ["mortgage-tracks-explained", ["financial planning documents desk", "charts financial report desk"]],
  ["mortgage-pre-approval-guide", ["signing contract document pen", "business handshake agreement"]],
  ["down-payment-how-much-equity", ["coins savings stack money", "piggy bank savings"]],
  ["mortgage-refinance-when-worth-it", ["house model money coins", "calculator money house keys"]],
  ["monthly-payment-income-ratio", ["budget calculator money planning", "person calculating finances"]],
  ["common-mortgage-mistakes", ["worried man paperwork stress", "confused person documents"]],
  ["mortgage-for-self-employed", ["freelancer working laptop home office", "small business owner laptop"]],
  ["early-mortgage-repayment-fees", ["cash money payment hands", "money envelope cash"]],
  ["mortgage-insurance-guide", ["family home protection", "house model umbrella insurance"]],
  ["mortgage-transfer-moving-home", ["moving boxes new house", "couple carrying moving boxes"]],
  ["investment-property-mortgage", ["modern apartment building city", "real estate buildings skyline"]],
  ["mortgage-eligibility-certificate", ["document approval stamp paperwork", "official documents signing desk"]],
];

const usedIds = new Set();

async function scrapePexelsIds(query) {
  const url = `https://www.pexels.com/search/${encodeURIComponent(query)}/`;
  const res = await fetch("https://api.firecrawl.dev/v2/scrape", {
    method: "POST",
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ url, formats: ["html"], onlyMainContent: false }),
  });
  if (!res.ok) {
    console.warn(`  scrape failed (${res.status}) for "${query}"`);
    return [];
  }
  const json = await res.json();
  const html = (json.data && json.data.html) || "";
  const matches = [...html.matchAll(/images\.pexels\.com\/photos\/(\d+)\//g)];
  // Preserve order, dedup
  const seen = new Set();
  const ids = [];
  for (const m of matches) {
    if (!seen.has(m[1])) {
      seen.add(m[1]);
      ids.push(m[1]);
    }
  }
  return ids;
}

async function downloadOriginal(id) {
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`download ${id} -> ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function run() {
  const report = [];
  for (const [slug, queries] of PLAN) {
    let chosen = null;
    for (const q of queries) {
      const ids = await scrapePexelsIds(q);
      const fresh = ids.find((id) => !usedIds.has(id));
      if (fresh) {
        chosen = { id: fresh, query: q };
        break;
      }
    }
    if (!chosen) {
      console.warn(`✗ ${slug}: no fresh photo found`);
      report.push({ slug, id: null });
      continue;
    }
    usedIds.add(chosen.id);

    try {
      const buf = await downloadOriginal(chosen.id);
      const base = sharp(buf);
      // Hero 16:9 with smart crop toward salient region
      await base
        .clone()
        .resize(1200, 675, { fit: "cover", position: sharp.strategy.attention })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(join(OUT, `${slug}.jpg`));
      // OG 1200x630
      await base
        .clone()
        .resize(1200, 630, { fit: "cover", position: sharp.strategy.attention })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(join(OUT, `${slug}-og.jpg`));
      console.log(`✓ ${slug}  <- pexels#${chosen.id}  (${chosen.query})`);
      report.push({ slug, id: chosen.id, query: chosen.query });
    } catch (e) {
      console.warn(`✗ ${slug}: ${e.message}`);
      report.push({ slug, id: null });
    }
  }

  writeFileSync(join(OUT, "_photo-credits.json"), JSON.stringify(report, null, 2));
  const ok = report.filter((r) => r.id).length;
  console.log(`\nDone: ${ok}/${PLAN.length} photos. Source: Pexels (free, commercial use, no attribution required).`);
}

run();
