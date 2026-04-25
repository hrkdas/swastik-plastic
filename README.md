# Swastik Plastic — Static Website

Single-page marketing site + legal pages. Plain HTML/CSS/JS. Zero build step.

## Files

```
.
├── index.html          # main landing page
├── privacy.html        # privacy policy
├── terms.html          # terms of service
├── cookies.html        # cookie policy
├── 404.html            # not-found page
├── robots.txt
├── sitemap.xml
├── vercel.json         # Vercel deploy config (cleanUrls + security headers)
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

- RFQ form opens user's mailto client. To capture submissions server-side, replace the handler in `assets/js/main.js` with a Formspree / Web3Forms / custom endpoint POST.
- Hero / gallery images currently use Unsplash CDN — swap with real factory photos under `assets/img/` when available.
- Update `og:image`, JSON-LD logo, and Google Maps embed coordinates as needed.
