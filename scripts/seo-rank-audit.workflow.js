export const meta = {
  name: 'seo-rank-audit',
  description: 'Firecrawl-powered SEO audit of avi-mashkanta.com to fix avg position 51.9 and rank #1',
  phases: [
    { title: 'Recon', detail: 'Firecrawl crawl own site + competitor SERP + local code audit' },
    { title: 'Dimensions', detail: 'Parallel audits: technical, on-page, local/E-E-A-T, schema, content gap, CWV' },
    { title: 'Synthesize', detail: 'Rank every action into a #1-ranking roadmap' },
  ],
}

const SITE = 'https://avi-mashkanta.com'
const REPO = 'c:/Users/vadim/Downloads/lawer website'

// Realistic target queries — local/city queries are the winnable ones; generic ones are national-competitive.
const KEYWORDS = [
  'יועץ משכנתאות חולון',
  'יועץ משכנתאות תל אביב',
  'יועץ משכנתאות בת ים',
  'יועץ משכנתאות ראשון לציון',
  'יועץ משכנתאות',
  'מחזור משכנתא',
  'מסורבי משכנתא',
  'דירה בהנחה משכנתא',
]

const FIRECRAWL_NOTE = `You have access to Firecrawl MCP tools but their schemas are NOT loaded yet.
Before calling them you MUST run ToolSearch with query "select:mcp__firecrawl__firecrawl_map,mcp__firecrawl__firecrawl_scrape,mcp__firecrawl__firecrawl_search" to load their schemas.
Use firecrawl_scrape with formats including "markdown" and (where useful) "rawHtml"/"links" to see meta tags, headings, JSON-LD, and internal links.
If the live site is NOT reachable / returns errors, say so clearly and fall back to reading the local source at ${REPO}. Do not invent data.`

const OWN_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['reachable', 'pages', 'globalFindings'],
  properties: {
    reachable: { type: 'boolean' },
    totalUrlsDiscovered: { type: 'integer' },
    robotsAndSitemap: { type: 'string', description: 'Status of /robots.txt and /sitemap.xml live' },
    pages: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['url', 'title', 'h1', 'wordCount', 'issues'],
        properties: {
          url: { type: 'string' },
          title: { type: 'string' },
          titleLength: { type: 'integer' },
          metaDescription: { type: 'string' },
          h1: { type: 'string' },
          h1Count: { type: 'integer' },
          wordCount: { type: 'integer' },
          schemaTypes: { type: 'array', items: { type: 'string' } },
          hasCanonical: { type: 'boolean' },
          issues: { type: 'array', items: { type: 'string' } },
        },
      },
    },
    globalFindings: { type: 'array', items: { type: 'string' } },
  },
}

const COMP_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['perKeyword', 'whatWinnersDo', 'ourGaps'],
  properties: {
    perKeyword: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['keyword', 'topResults', 'aviPresent'],
        properties: {
          keyword: { type: 'string' },
          aviPresent: { type: 'boolean', description: 'Did avi-mashkanta.com appear in top results?' },
          aviRank: { type: 'integer', description: '-1 if not in top results returned' },
          topResults: {
            type: 'array',
            items: {
              type: 'object',
              additionalProperties: false,
              required: ['rank', 'domain', 'title'],
              properties: {
                rank: { type: 'integer' },
                domain: { type: 'string' },
                url: { type: 'string' },
                title: { type: 'string' },
                strengths: { type: 'array', items: { type: 'string' } },
              },
            },
          },
        },
      },
    },
    whatWinnersDo: { type: 'array', items: { type: 'string' }, description: 'Patterns top-rankers share that avi lacks' },
    ourGaps: { type: 'array', items: { type: 'string' } },
  },
}

const CODE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['findings', 'strengths'],
  properties: {
    strengths: { type: 'array', items: { type: 'string' }, description: 'What is already done well' },
    findings: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['area', 'severity', 'issue', 'fix'],
        properties: {
          area: { type: 'string', enum: ['metadata', 'canonical', 'structured-data', 'internal-linking', 'core-web-vitals', 'indexability', 'i18n', 'images', 'other'] },
          severity: { type: 'string', enum: ['critical', 'high', 'medium', 'low'] },
          issue: { type: 'string' },
          fix: { type: 'string' },
          file: { type: 'string' },
        },
      },
    },
  },
}

const DIM_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['dimension', 'score', 'findings'],
  properties: {
    dimension: { type: 'string' },
    score: { type: 'integer', description: '0-100 health for this dimension' },
    summary: { type: 'string' },
    findings: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['title', 'severity', 'recommendation', 'effort', 'impact', 'owner'],
        properties: {
          title: { type: 'string' },
          severity: { type: 'string', enum: ['critical', 'high', 'medium', 'low'] },
          evidence: { type: 'string' },
          recommendation: { type: 'string' },
          codeChange: { type: 'string', description: 'Concrete code/file change if owner=code, else empty' },
          effort: { type: 'string', enum: ['quick', 'medium', 'large'] },
          impact: { type: 'string', enum: ['high', 'medium', 'low'] },
          owner: { type: 'string', enum: ['code', 'content', 'offsite', 'gbp', 'analytics'] },
        },
      },
    },
  },
}

const ROADMAP_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['executiveSummary', 'rootCause', 'top10Priorities', 'sections', 'timeline'],
  properties: {
    executiveSummary: { type: 'string' },
    rootCause: { type: 'string', description: 'Why avg position is 51.9 — the honest core diagnosis' },
    top10Priorities: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['rank', 'action', 'why', 'how', 'owner', 'effort', 'impact'],
        properties: {
          rank: { type: 'integer' },
          action: { type: 'string' },
          why: { type: 'string' },
          how: { type: 'string' },
          owner: { type: 'string', enum: ['code', 'content', 'offsite', 'gbp', 'analytics'] },
          effort: { type: 'string', enum: ['quick', 'medium', 'large'] },
          impact: { type: 'string', enum: ['high', 'medium', 'low'] },
        },
      },
    },
    sections: {
      type: 'array',
      description: 'Grouped action lists: Quick Wins, On-Page, Technical, Local/GBP, Content, Off-Page, Structured Data',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'actions'],
        properties: {
          name: { type: 'string' },
          actions: { type: 'array', items: { type: 'string' } },
        },
      },
    },
    timeline: { type: 'string', description: 'Realistic expectation: when ranking improvements should appear' },
  },
}

// ---------- Phase 1: Recon (barrier — dimension audits need all of it) ----------
phase('Recon')

const ownPages = [
  `${SITE}/`,
  `${SITE}/service-areas/mortgage-advisor-holon`,
  `${SITE}/service-areas/mortgage-advisor-tel-aviv`,
  `${SITE}/services`,
  `${SITE}/services/mortgage-refused`,
  `${SITE}/blog`,
  `${SITE}/about`,
]

const recon = await parallel([
  () => agent(
    `${FIRECRAWL_NOTE}

TASK: Crawl avi-mashkanta.com and capture its real, rendered SEO state.
1. Run firecrawl_map on ${SITE} to discover how many URLs exist / are linked.
2. firecrawl_scrape these priority pages and extract for EACH: <title> + its char length, meta description + char length, the H1 text + count of H1s, approximate main-content word count (Hebrew), every JSON-LD @type present, whether a canonical tag exists, and any on-page SEO issues you observe (thin content, missing H1, duplicate titles, missing meta, render problems, etc.):
${ownPages.map((u) => '   - ' + u).join('\n')}
3. Try fetching ${SITE}/robots.txt and ${SITE}/sitemap.xml and report whether they load.
Be precise with Hebrew titles/H1s — copy them verbatim. Report only what you actually observe.`,
    { label: 'recon:own-site', phase: 'Recon', schema: OWN_SCHEMA },
  ),
  () => agent(
    `${FIRECRAWL_NOTE}

TASK: Competitor SERP analysis for an Israeli mortgage-advisor business (avi-mashkanta.com).
For EACH of these Hebrew queries, run firecrawl_search (limit ~6, this is the Israeli/Hebrew market):
${KEYWORDS.map((k) => '   - ' + k).join('\n')}
For each query capture the top organic results (rank, domain, url, title). Note whether avi-mashkanta.com appears at all and at what rank (use -1 if absent).
Then for the 2-3 strongest recurring competitor domains, briefly note WHY they rank: content depth, reviews/ratings shown, schema, brand authority, dedicated city pages, etc. (scrape 1-2 of them if helpful).
Synthesize: what do the winners consistently do that avi-mashkanta.com appears to lack? Where are avi's biggest gaps?
This is a YMYL (money) + local-intent niche — weigh E-E-A-T, Google Business Profile / map-pack presence, reviews, and local relevance heavily.`,
    { label: 'recon:competitors', phase: 'Recon', schema: COMP_SCHEMA },
  ),
  () => agent(
    `TASK: Audit the LOCAL source code of this Next.js 16 (App Router, Hebrew RTL) mortgage site for SEO implementation quality.
Repo root: ${REPO}
Read the SEO-relevant files: src/app/layout.tsx, src/app/sitemap.ts, src/app/robots.ts, next.config.mjs, src/app/page.tsx, a couple of src/app/service-areas/*/page.tsx and src/app/services/*/page.tsx, src/app/blog/[slug]/page.tsx, src/components/SEO/*, and any structured-data/JSON-LD components.
Evaluate and report concrete findings on: per-page metadata (titles unique? descriptions present & sized? keyword targeting?), CANONICAL tags (are alternates.canonical set per page? — note layout.tsx has none), hreflang/i18n, JSON-LD structured data (LocalBusiness/FinancialService with NAP+geo? FAQPage? Article? BreadcrumbList? Review/AggregateRating? Organization? WebSite+SearchAction?), internal linking between service/city/blog pages, image optimization & alt text, Core Web Vitals factors (fonts, scripts, image formats, render-blocking), Search Console verification (note: layout.tsx has google verification commented out), and indexability.
List what is ALREADY done well (strengths) and every gap as a finding with a concrete fix and the file path.`,
    { label: 'recon:code', phase: 'Recon', schema: CODE_SCHEMA },
  ),
])

const [ownSite, competitors, codeAudit] = recon
const reconContext = `
=== LIVE SITE CRAWL (Firecrawl) ===
${JSON.stringify(ownSite, null, 2)}

=== COMPETITOR SERP ANALYSIS (Firecrawl) ===
${JSON.stringify(competitors, null, 2)}

=== LOCAL CODE / IMPLEMENTATION AUDIT ===
${JSON.stringify(codeAudit, null, 2)}
`.slice(0, 60000)

// ---------- Phase 2: Dimension audits (parallel, each grounded in recon) ----------
phase('Dimensions')

const DIMENSIONS = [
  {
    key: 'technical',
    prompt: `Audit TECHNICAL SEO & indexability. Focus: canonical tags, sitemap/robots correctness, crawlability, redirects/www-vs-non-www/trailing-slash consistency, HTTPS, hreflang (he-IL), pagination, render (CSR vs SSR — is content in initial HTML?), Search Console verification, and whether all sitemap URLs are actually indexable. Average position 51.9 with only 631 impressions in 3mo — assess whether an indexation/crawl-depth/authority problem is suppressing pages.`,
  },
  {
    key: 'onpage',
    prompt: `Audit ON-PAGE SEO. For each key page assess: title tag (unique, keyword-front-loaded, <60 chars, city+service intent), meta description (CTR-optimized, 150-160 chars), single keyword-rich H1, heading hierarchy, keyword targeting vs search intent, content depth vs competitors, and internal anchor text. Identify cannibalization and thin pages. Note the CTR is ~6% at avg position 52 — what title/meta changes would lift CTR.`,
  },
  {
    key: 'local',
    prompt: `Audit LOCAL SEO & E-E-A-T for this YMYL (money) niche — THIS IS LIKELY THE #1 LEVER. Assess: Google Business Profile presence/optimization (map pack), NAP consistency (name/address/phone on site + in schema), local citations/directories (e.g. dapei zahav / B144 / zap), reviews & AggregateRating, author/advisor bio with credentials & license number, trust signals (about page depth, real photos, certifications), city-page localization depth, and embedded Google Map. Mortgage advice is "Your Money Your Life" — Google demands strong expertise/authority/trust signals. Be specific about what's missing.`,
  },
  {
    key: 'schema',
    prompt: `Audit STRUCTURED DATA / JSON-LD. Determine which schema types exist vs which a local financial-services site should have: FinancialService/LocalBusiness (with name, address, geo, telephone, openingHours, areaServed, priceRange, sameAs), Organization, WebSite+SearchAction, BreadcrumbList on every page, FAQPage on service/city pages, Article+author on blog posts, Person for the advisor, Review/AggregateRating. Give ready-to-paste JSON-LD snippets (Hebrew where relevant) for the highest-value missing types.`,
  },
  {
    key: 'content',
    prompt: `Audit CONTENT & KEYWORD GAP vs the competitors found in recon. Identify: high-intent Hebrew keywords/clusters with no dedicated page, city pages that need more unique localized content, blog topics that capture top-of-funnel mortgage searches, FAQ opportunities (People-Also-Ask style), and how to build topical authority around "ייעוץ משכנתאות". Recommend a concrete content/publishing plan and which existing pages to expand.`,
  },
  {
    key: 'offpage',
    prompt: `Audit OFF-PAGE / AUTHORITY. The site is new with low impressions (631/3mo) and avg position 52 — this strongly implies weak domain authority & backlinks. Recommend a realistic Israeli-market link-building & citation strategy: local business directories, professional associations (mortgage advisor / financial), guest posts on Israeli finance sites, digital PR, social signals, and how to earn reviews. Be concrete and ethical (no link schemes).`,
  },
]

const dimResults = (await parallel(
  DIMENSIONS.map((d) => () =>
    agent(
      `You are a senior SEO auditor. Using the recon data below, produce a focused audit for ONE dimension.

${d.prompt}

Ground every finding in the recon evidence; do not contradict it. For owner=code findings, give the concrete change and file. Prioritize by real impact on moving from avg position 52 toward page 1.

RECON DATA:
${reconContext}`,
      { label: `dim:${d.key}`, phase: 'Dimensions', schema: DIM_SCHEMA },
    ),
  ),
)).filter(Boolean)

// ---------- Phase 3: Synthesis ----------
phase('Synthesize')

const roadmap = await agent(
  `You are the lead SEO strategist. Synthesize ALL audit findings into ONE prioritized, honest roadmap to move avi-mashkanta.com from average Google position ~51.9 toward page-1 / #1 for its target local mortgage-advisor queries.

Be realistic and ruthless about prioritization: this is a new-ish site in a YMYL + local niche. State the true root cause plainly (don't bury it). Distinguish what's fixable in CODE (this repo) vs CONTENT vs OFF-SITE/GBP. Quick wins first. Merge duplicate findings across dimensions. Every Top-10 item must be specific and actionable.

ALL DIMENSION AUDITS:
${JSON.stringify(dimResults, null, 2).slice(0, 90000)}

RECON SUMMARY (for grounding):
${reconContext.slice(0, 30000)}`,
  { label: 'synthesis', phase: 'Synthesize', schema: ROADMAP_SCHEMA },
)

return {
  reconReachable: ownSite?.reachable,
  competitorSummary: { whatWinnersDo: competitors?.whatWinnersDo, ourGaps: competitors?.ourGaps, perKeyword: competitors?.perKeyword },
  codeStrengths: codeAudit?.strengths,
  dimensionScores: dimResults.map((d) => ({ dimension: d.dimension, score: d.score, summary: d.summary })),
  dimensionFindings: dimResults.map((d) => ({ dimension: d.dimension, findings: d.findings })),
  roadmap,
}
