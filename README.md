# Swastik Plastic — Static Website

Single-page marketing site + legal pages. Plain HTML/CSS/JS. Zero build step. Premium industrial-techno design language with WebGL hero, custom cursor, scroll-driven choreography and an interactive capability visualizer.

## Files

```
.
├── index.html                  # main landing page (motion-rich)
├── privacy.html                # privacy policy
├── terms.html                  # terms of service
├── cookies.html                # cookie policy
├── thank-you.html              # form-submit landing
├── 404.html                    # not-found page
├── robots.txt
├── sitemap.xml
├── vercel.json                 # Vercel deploy config
├── docs/
│   └── content-seo-package.md  # SEO master doc
└── assets/
    ├── css/styles.css          # full design system + motion primitives
    ├── js/motion.config.js     # easings, durations, stagger tokens (tune globally)
    ├── js/main.js              # interactions, cursor, hero 3D, visualizer, etc.
    └── img/                    # factory photos
```

## Motion stack (CDN)

Loaded `defer` from `index.html`:

| Lib            | Why                                                              |
|----------------|------------------------------------------------------------------|
| GSAP + ScrollTrigger | Pinned horizontal scroll (services), scroll-driven timelines |
| Lenis          | Buttery momentum-smooth scroll                                   |
| Three.js       | WebGL hero — wireframe mould geometry, scroll-tied rotation      |

All libs are **optional** — if blocked, the page falls back to CSS-only motion (transitions + IO reveals + animations) without breaking.

## Tuning motion globally

`assets/js/motion.config.js` exposes a single `window.MOTION` token map. Change a value, every subsystem follows.

```js
window.MOTION = {
  ease:    { out, inOut, inExpo, outQ, spring },  // CSS bezier strings
  dur:     { micro, short, base, reveal, hero, page }, // seconds
  stagger: { word, char, list, grid },
  scroll:  { lerp, scrub },                       // Lenis + ScrollTrigger
  cursor:  { lerp, magnetRadius, magnetStrength } // custom cursor + magnetic CTA
};
```

## Disabling motion

Three layers:

1. **Per-user**: `prefers-reduced-motion: reduce` is honoured — preloader skipped, custom cursor hidden, marquees stopped, reveals collapsed to fade. No information lost.
2. **Per-feature**: comment a single line in `main.js` `boot()` (e.g. `initHero3D()`, `initServicesPin()`).
3. **Per-device**: the WebGL hero auto-degrades on low-end devices (≤4 GB RAM or ≤4 cores) to the static `assets/img/swastik-banner1.jpg` fallback baked behind the canvas.

## Signature interactions

- **Preloader** — counter 000→100, glyph spin, panel split-open. Runs once per session.
- **Custom cursor** — 8px dot + 32px ring, lerp follow, magnetic CTAs, hover labels (`VIEW`, `DRAG`).
- **Hero WebGL** — torus-knot mould + wireframe icosahedron, scroll-tied rotation, mouse parallax.
- **Pinned services** — five panels scroll horizontally, GSAP `scrub: 1` smoothing.
- **Capability visualizer** — three sliders (volume / complexity / material) recompute tonnage, cycle, cavities, lead time live; cavity grid morphs.
- **Scroll path process** — amber pellet rides an SVG bezier, fills the trail behind, lights up stations as it passes.
- **Drag carousel testimonials** — pointer-driven with momentum + auto-advance.
- **Footer wordmark** — outlined SWASTIK PLASTIC paint-fills bottom-up on intersection.
- **Easter eggs** — Konami code → blueprint mode (10s); 5×-click logo → year cycle 2005→present.

## Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

Or drag the folder onto https://vercel.com/new — framework = Other, output dir = `.`.

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
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
