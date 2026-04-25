# Swastik Plastic — Static Website

Single-page marketing site + legal pages. Plain HTML/CSS/JS. Zero build step.

## Files

```
.
├── index.html          # main landing page
├── privacy.html        # privacy policy
├── terms.html          # terms of service
├── cookies.html        # cookie policy
├── thank-you.html      # form-submit landing
├── 404.html            # not-found page
├── robots.txt
├── sitemap.xml
├── vercel.json         # Vercel deploy config (cleanUrls + 301s + security headers)
├── docs/
│   └── content-seo-package.md   # full content / SEO / conversion package (master doc)
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/            # add factory photos here when available
```

## Deploy to Vercel

### Option A — CLI (fastest)

```bash
npm i -g vercel
vercel login
vercel --prod
```

Run from this folder. Accept defaults; framework = "Other"; output dir = `.`.

### Option B — Drag & drop

1. Open https://vercel.com/new
2. Drag this folder onto the page
3. Click **Deploy**

### Option C — GitHub

1. Push folder to a GitHub repo
2. https://vercel.com/new → import the repo → Deploy

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Notes

- RFQ + quick-quote forms POST to **FormSubmit.co** (`assets/js/main.js`). Sender email is `swastikplastic494@gmail.com`. Swap to Formspree / Web3Forms / custom endpoint if needed.
- Hero / gallery images currently use Unsplash CDN — swap with real factory photos under `assets/img/` when available.
- Update `og:image`, JSON-LD logo and `sameAs` URLs (LinkedIn / IndiaMART placeholders are in schema), and Google Maps embed coordinates as needed.
- Sticky mobile CTA bar (Call · WhatsApp · Quote) is in `index.html` near `</body>`. Styles at the end of `assets/css/styles.css` under "Sticky mobile CTA bar".
- Legacy `.html` URLs (`/privacy.html`, `/terms.html`, `/cookies.html`, `/index.html`, `/thank-you.html`) 301 to clean URLs via `vercel.json`.

## Content & SEO master doc

`docs/content-seo-package.md` contains the full production-ready content, technical SEO, schema, conversion copy, lead magnets, email sequences, CRO plan, trust assets, legal copy, voice guide, and measurement plan for the planned multi-page expansion.

Bracketed placeholders like `[FOUNDER_NAME]`, `[ISO_CERT_NUMBER]` in that doc and in schema are intentional — replace in one pass before publish.
