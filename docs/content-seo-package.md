# Swastik Plastic — Content, SEO & Conversion Package

**Scope:** complete production-ready content, technical SEO, schema, conversion copy, lead magnets, email sequences, CRO plan, trust assets, legal copy, voice guide, and measurement plan for swastikplastic.co.in.

**Conventions:** bracketed placeholders like `[CITY]`, `[FOUNDER_NAME]`, `[ISO_CERT_NUMBER]` mark fields the team replaces in one pass. Indian English spelling used throughout (mould, colour, organisation). Currency in INR with USD fallback where international leads matter.

---

## Executive Summary

Swastik Plastic is a Mumbai-based plastic injection moulding and mould-making manufacturer founded in 2005, serving industrial, medical, and electrical OEMs across India and select export markets. The site today is a single-page brochure. The opportunity is to convert that single page into a structured, intent-mapped site that ranks for commercial keywords, demonstrates engineering credibility to technical buyers, and converts traffic into RFQs at a measurable rate.

**Positioning recommendation.** Anchor the brand on one defendable claim: *“Two decades of mould-making, run like an engineering shop, priced like an Indian SME.”* That triangulates the three persona objections — capability for design engineers, pricing for procurement, hand-holding for SME founders — without overclaiming. Avoid superlatives (“best”, “world-class”, “leading”). Lead with specifics: tonnage range, polymer list, tolerances, mould-trial protocol, documentation deliverables.

**Top 3 keyword priorities (P0).**
1. *injection moulding manufacturer in India* — high commercial intent, target the homepage and a dedicated service hub.
2. *plastic mould manufacturer* — second-highest commercial intent, target `/services/mould-making`.
3. *insert moulding services India* — lower volume, much lower competition, high-margin work; target `/services/insert-moulding`.

**SEO timeline outlook.**
- **0–3 months:** publish full IA, ship technical SEO baseline (sitemap, schema, internal linking, page-speed budget), index 25+ pages. Expect impressions to rise 4–8×, clicks 2–3×.
- **3–6 months:** earn first commercial-intent rankings on long-tail queries (P2 cluster), 3–5 RFQ-quality leads per week from organic.
- **6–12 months:** rank top-10 for 1–2 P0 commercial terms with sustained content + local citation work; organic becomes the largest single lead source, displacing IndiaMART for high-ticket enquiries.

**Highest-leverage conversion change to ship first.** Replace the current `mailto:` RFQ handler with a real form (Formspree / Web3Forms) and add a multi-step RFQ wizard with a CAD upload field (`.step`, `.iges`, `.x_t`, `.dwg`, `.pdf`). Procurement and design buyers will not paste specs into an email client — they will abandon. A working upload form with an explicit confidentiality line and a 1-business-day response promise is the single biggest unlock. Everything else compounds on top of that.

---

## 1. Audience & Buyer Personas

### Persona A — Procurement / Sourcing Manager
- **Title patterns:** Purchase Manager, Sourcing Lead, Vendor Development Engineer, Category Manager.
- **Company:** mid-size Indian OEM, ₹50 Cr–₹500 Cr turnover, industrial products, white goods, electrical assemblies.
- **Cares about:** unit price, mould amortisation, lead time in weeks, MOQ, monthly capacity, vendor approval audit, ISO and material certificates, ability to hold quoted price across the year.
- **Search intent:** transactional, comparison-driven. Queries like *injection moulding manufacturer in India*, *mould maker [city]*, *price per shot injection moulding*.
- **Objections:** “Will quality drift after the first lot?” “Will they ghost me at month four?” “Can they hold price if PP resin spikes?” “Are they really making this in-house or sub-letting the mould?”
- **Decision triggers:** a written quote with itemised tooling vs per-part cost, vendor audit report, sample part in hand, NDA signed.

### Persona B — Design / R&D Engineer
- **Title patterns:** Design Engineer, R&D Engineer, NPI Engineer, Mechanical Engineer, Mould Designer.
- **Company:** medical device, electrical component, industrial equipment manufacturer; product development team.
- **Cares about:** achievable tolerances on the specific feature, draft angles, weld-line placement, gate location, polymer behaviour at the wall thickness they want, mould-flow analysis, T1/T2/T3 sample protocol, IP protection.
- **Search intent:** informational + capability validation. Queries like *insert moulding vs overmoulding*, *DFM checklist injection moulding*, *minimum wall thickness ABS*, *how to spec injection moulding tolerance*.
- **Objections:** “Do they actually do DFM or just quote what I send?” “Will they steal my design?” “Can they hold ±0.05 mm on a critical mating face?” “Do they understand medical-grade material handling?”
- **Decision triggers:** technical depth in the first call, a marked-up DFM feedback sheet on their drawing, NDA on letterhead, a sample case study with measurable outcomes.

### Persona C — Founder / SME Owner
- **Title patterns:** Founder, Director, Promoter, Managing Partner.
- **Company:** small consumer product brand, hardware startup, SME industrial supplier; ₹1 Cr–₹50 Cr turnover.
- **Cares about:** total project cost, payment terms, mould ownership (do they own the tool after paying for it?), end-to-end handholding from sketch to shipment, flexibility on first batches.
- **Search intent:** navigational, trust-driven. Queries like *plastic manufacturer near me*, *custom injection moulding small batch*, *mould manufacturer Mumbai*.
- **Objections:** “Will they take my deposit and disappear?” “Hidden costs after the mould is done?” “Will they refuse my small reorder?”
- **Decision triggers:** a plant tour, a transparent quote that names every cost, a written mould-ownership clause, a founder-to-founder conversation.

### Section-to-persona mapping (master table)

| Page / section | Primary persona | Objection neutralised |
|---|---|---|
| Homepage hero | A + B + C | Generic credibility |
| Capability snapshot (homepage) | A | Capacity / scale |
| Why-choose-us | A + C | Reliability, transparency |
| About / milestones | C | Longevity, founder access |
| Service pages — capability tables | B | Technical depth |
| Service pages — process steps | B | Tooling rigour |
| Industry pages — compliance | A + B | Regulatory fit |
| Quality page | A + B | Audit-readiness, drift control |
| Process page | B + C | Hand-holding, predictability |
| Case studies | A + B | Proof of outcomes |
| Insights (DFM, material) | B | Engineering credibility |
| FAQ — pricing & MOQ | A + C | Hidden cost fear |
| FAQ — IP & NDA | B | IP theft fear |
| Contact + WhatsApp + form | A + B + C | Friction, response time |
| RFQ wizard | A + B | Form abandonment |
| Brochure / DFM checklist | B | Pre-sales credibility |

---

## 2. Keyword Strategy

Volume / KD columns are placeholder bands until real Ahrefs / SEMrush / Google Keyword Planner numbers are imported. Bands: V (volume) — XS <100, S 100–500, M 500–2k, L 2k–10k, XL >10k. KD (difficulty) — 1–100.

### 2.1 Master keyword sheet

| # | Keyword | Cluster | Intent | Target URL | Priority | V band | KD est. | Content angle |
|---|---|---|---|---|---|---|---|---|
| 1 | injection moulding manufacturer in india | Primary commercial | Transactional | `/` | P0 | L | 55 | Capability + scale + lead time |
| 2 | plastic mould manufacturer | Primary commercial | Transactional | `/services/mould-making` | P0 | L | 50 | In-house tool room, steel grades, T1–T3 |
| 3 | custom injection moulding services | Primary commercial | Transactional | `/services/injection-moulding` | P0 | M | 45 | Custom = DFM + small to mid runs |
| 4 | plastic injection moulding company | Primary commercial | Transactional | `/` | P0 | M | 50 | Trust + 2005 + plant photo grid |
| 5 | die making and mould manufacturing | Primary commercial | Transactional | `/services/mould-making` | P1 | S | 35 | Disambiguate die vs mould |
| 6 | insert moulding services india | Primary commercial | Transactional | `/services/insert-moulding` | P0 | S | 30 | Brass insert + threaded boss + jig fixturing |
| 7 | vertical injection moulding manufacturer | Primary commercial | Transactional | `/services/vertical-moulding` | P0 | S | 28 | Cable connector / overmould use cases |
| 8 | medical plastic component manufacturer india | Industry | Transactional | `/industries/medical` | P0 | M | 50 | Class III feasibility, biocompatible polymers |
| 9 | electrical plastic parts manufacturer | Industry | Transactional | `/industries/electrical` | P0 | M | 45 | UL94 V0, switchgear housings |
| 10 | industrial plastic moulded products supplier | Industry | Transactional | `/industries/industrial` | P0 | M | 48 | Engineering plastics, structural parts |
| 11 | plastic enclosure manufacturer | Industry | Transactional | `/industries/electrical` | P1 | M | 42 | IP-rated enclosures, switchgear |
| 12 | plastic gear and bushing manufacturer | Industry | Transactional | `/industries/industrial` | P1 | S | 35 | POM + nylon gears, dimensional precision |
| 13 | two-shot moulding india | Process | Informational+Commercial | `/insights/two-shot-vs-overmould` | P1 | S | 30 | Clarify vs overmould; capability today |
| 14 | overmoulding services | Process | Transactional | `/services/insert-moulding` | P1 | M | 40 | TPE-on-PP, soft-touch grips |
| 15 | thermoplastic injection moulding | Process | Informational | `/services/injection-moulding` | P1 | M | 45 | Polymer index + applications |
| 16 | engineering plastic moulding | Process | Informational+Commercial | `/services/injection-moulding` | P0 | M | 42 | Nylon 66, PC, POM, PEEK feasibility |
| 17 | precision injection moulding tolerances | Process | Informational | `/capabilities` | P1 | S | 32 | DIN 16742 tolerance class table |
| 18 | mould design and tooling services | Process | Transactional | `/services/mould-making` | P1 | M | 40 | Mould-flow, hot vs cold runner, steel grade |
| 19 | difference between insert moulding and overmoulding | Long-tail informational | Informational | `/insights/insert-vs-overmould` | P0 | S | 18 | Decision tree + diagrams |
| 20 | how to choose an injection moulding vendor | Long-tail informational | Informational | `/insights/12-point-vendor-checklist` | P0 | S | 20 | 12-point checklist, downloadable |
| 21 | injection moulding cost calculator india | Long-tail informational | Commercial | `/insights/cost-calculator` | P1 | S | 25 | Embedded calc + lead capture |
| 22 | mould lead time in india | Long-tail informational | Informational | `/insights/mould-lead-time` | P1 | S | 22 | Lead time table by complexity |
| 23 | abs vs pp for industrial parts | Long-tail informational | Informational | `/insights/abs-vs-pp` | P1 | S | 15 | Property comparison table |
| 24 | dfm checklist for injection moulded parts | Long-tail informational | Informational | `/insights/dfm-red-flags` | P0 | S | 20 | Checklist + lead magnet |
| 25 | injection moulding company near me | Local | Transactional | `/contact` | P0 | M | 25 | GBP + NAP + city schema |
| 26 | plastic manufacturer in mumbai | Local | Transactional | `/contact` | P0 | S | 20 | Local landmarks, plant photos |
| 27 | mould maker in maharashtra | Local | Transactional | `/services/mould-making` | P1 | S | 22 | Maharashtra cluster reference |
| 28 | multi cavity mould design | Process | Informational | `/insights/multi-vs-single-cavity` | P1 | S | 28 | ROI math single vs multi |
| 29 | mould flow analysis services | Process | Commercial | `/services/mould-making` | P2 | XS | 20 | Moldflow / Moldex3D capability |
| 30 | iso 9001 certified plastic manufacturer | Trust | Transactional | `/quality` | P1 | S | 30 | Cert page with downloadable PDF |

### 2.2 Cluster summary

- **Primary commercial cluster (rows 1–7).** Owns commercial intent. Each gets a dedicated landing page with strong on-page optimisation, internal links from homepage, and one supporting article in `/insights/`.
- **Industry-specific cluster (rows 8–12).** Owns vertical intent. Each industry page links down to component examples and out to relevant services.
- **Process & technical cluster (rows 13–18, 28–29).** Half informational, half commercial. Used to build topical authority, then funnel to service pages.
- **Long-tail informational cluster (rows 19–24).** Cheap to rank. Each carries a lead magnet (DFM checklist, vendor checklist, calculator) for conversion.
- **Local SEO cluster (rows 25–27).** Bound to GBP + NAP citations. Mumbai first, then expand to Pune, Nashik, Aurangabad, Ahmedabad.

### 2.3 Anchor text variation rules

For each target keyword, distribute internal anchors across four buckets to avoid over-optimisation:
1. **Exact match** — 15–20% of internal anchors only. e.g. *insert moulding services*.
2. **Partial match** — 30%. e.g. *our insert moulding capability*.
3. **Branded / navigational** — 30%. e.g. *Swastik Plastic insert moulding*.
4. **Generic / contextual** — 20%. e.g. *read more*, *see this service*, *as discussed here*.

---

## 3. Information Architecture & URL Structure

### 3.1 Final URL map

```
/
/about
/services/                                (services hub)
/services/mould-making
/services/injection-moulding
/services/vertical-moulding
/services/insert-moulding
/services/plastic-product-manufacturing
/industries/                              (industries hub)
/industries/industrial
/industries/medical
/industries/electrical
/capabilities
/process
/quality
/gallery
/case-studies
/case-studies/medical-device-housing
/case-studies/electrical-switchgear-component
/case-studies/industrial-pump-impeller
/insights
/insights/12-point-vendor-checklist
/insights/insert-vs-overmould
/insights/mould-lead-time
/insights/abs-vs-pp
/insights/dfm-red-flags
/insights/mould-tonnage-spec
/insights/multi-vs-single-cavity
/insights/mould-flow-medical
/faq
/contact
/quote
/brochure
/privacy
/terms
/cookies
/404
```

### 3.2 Internal linking rules

1. **Homepage → 5 services + 3 industries + 2 case studies + 3 insights.** No more, no less in primary nav blocks.
2. **Every service page links to ≥2 industry pages.** Anchor text in the “Industries we deliver this for” block.
3. **Every industry page links to ≥3 service pages** in the “Services for [industry]” section.
4. **Every blog post links to one service and one case study.** In-body, contextual, not in a footer block.
5. **Every case study links back to one service and one industry.** Plus one related case at the bottom.
6. **Breadcrumbs on every non-home page.** Schema-marked, visible.
7. **Footer links** carry navigational anchors only — no commercial anchor text in footer (Google discounts boilerplate links).
8. **No orphan pages.** Every URL has at least two internal inbound links.

### 3.3 Internal linking matrix (selected anchors)

| From | To | Anchor text (varied) |
|---|---|---|
| `/` | `/services/mould-making` | *in-house mould making* |
| `/` | `/services/injection-moulding` | *injection moulding capability* |
| `/services/mould-making` | `/industries/medical` | *medical-grade tooling* |
| `/services/mould-making` | `/industries/electrical` | *moulds for electrical housings* |
| `/services/insert-moulding` | `/insights/insert-vs-overmould` | *when insert vs overmould makes sense* |
| `/industries/medical` | `/services/insert-moulding` | *insert moulding for medical assemblies* |
| `/industries/electrical` | `/services/injection-moulding` | *V0-rated component moulding* |
| `/insights/12-point-vendor-checklist` | `/quote` | *send us your part for a sanity check* |
| `/case-studies/medical-device-housing` | `/services/mould-making` | *the tooling work behind it* |
| `/capabilities` | `/process` | *how this fits into our build sequence* |

---

## 4. Page-by-Page Content

### 4.1 Homepage

**SEO title:** Injection Moulding & Mould Manufacturer Mumbai | Swastik Plastic
**Meta description:** Plastic injection moulds, vertical & insert moulding since 2005. ABS, Nylon, PC, POM. Send your drawing — quote in 1 business day.
**Canonical:** `https://swastikplastic.co.in/`
**OG title:** Two decades of mould-making, run like an engineering shop.
**OG description:** Swastik Plastic builds moulds and runs production for industrial, medical and electrical OEMs. Mumbai plant, in-house tool room.
**OG image:** `/assets/img/og/og-home.jpg` (1200×630, plant floor with branded overlay)
**Twitter card:** `summary_large_image`

#### H1
**Precision plastic moulds and moulded parts, engineered in Mumbai since 2005.**

#### Hero subhead
From your CAD file to a dimensionally inspected first batch — mould design, tool manufacture, injection moulding and finishing under one roof. Industrial, medical and electrical OEMs trust us for engineering plastics that have to fit, fasten and last.

#### Hero CTAs
- Primary: **Send Drawing for Quote** → `/quote`
- Secondary: **Talk to an Engineer** → `tel:[PHONE]` with WhatsApp fallback

#### Trust bar copy
**[19+] years on the shop floor · [1,200+] moulds delivered · [80+] active OEM clients · ISO 9001:2015 certified · NDA on request.**

#### About teaser (90 words)
Swastik Plastic was founded in 2005 as a two-machine mould shop in Mumbai. Two decades later we run a fully integrated plant: in-house mould design, CNC and EDM tool room, [40T–[450T]] injection presses, and inspection equipment our auditors actually use. We work mostly with engineering plastics — Nylon 6/66, polycarbonate, POM, ABS, glass-filled grades — for products that have to hold tolerance, dissipate heat, or pass UL94. Our customers are mid-size Indian OEMs, medical device builders and electrical component makers who want the rigour of a large supplier without the lead times.

#### Services grid — 5 cards (28–32 words each)

**Mould Making**
In-house tool room with CNC machining, EDM, surface grinding and bench polish. P20, H13, S136 and pre-hardened steels. Single, multi-cavity, hot-runner and family moulds — built to ship and built to last.

**Injection Moulding**
Production runs from 1,000 to 1 million pieces a year on [40T–450T] presses. Engineering plastics, glass-filled grades, flame-retardant compounds. Tight cycle-time control, batch traceability, and dimensional reports with every consignment.

**Vertical Moulding**
Vertical-clamp presses for cable connectors, sensor overmoulds, and any insert that has to sit on the core during the shot. Stable insert positioning, repeatable encapsulation, and no jig drift across long runs.

**Insert & Overmoulding**
Brass, steel, PCB and threaded insert encapsulation. TPE-on-PP soft-touch grips. Custom jigs designed and built in-house so insert position holds across the entire batch, not just the first hundred shots.

**Plastic Product Manufacturing**
End-to-end programmes: DFM, tooling, moulding, secondary operations (ultrasonic welding, pad printing, assembly) and packaging. Useful when you want one accountable vendor instead of three.

#### Industries grid — 3 cards

**Industrial**
Pump impellers, gears, bushings, machine guards, conveyor parts. Engineering plastics where dimensional precision and wear life matter more than cosmetic finish.

**Medical**
Device housings, diagnostic consumables, fluid-path components in biocompatible grades. Documented material traceability and inspection records that pass internal audits.

**Electrical**
Switchgear housings, connector bodies, terminal blocks and IP-rated enclosures. UL94 V0 grades, flame-retardant compounds, and dimensional consistency for assembly lines that don’t stop.

#### Why-choose-us (6 strengths, one line each)
1. **In-house tool room.** Mould design, CNC, EDM and trial under one roof — no outsourced tooling surprises.
2. **Engineering plastics specialists.** Nylon 66, PC, POM, ABS, glass-filled grades — our default, not our exception.
3. **Quoted price holds for 90 days.** Resin volatility absorbed in your contracted band, not passed on mid-order.
4. **T1, T2, T3 sample protocol.** Documented sampling with dimensional reports before you sign off on production.
5. **Mould ownership clarity.** You commission it, you own it — written into the PO, no clawback clauses.
6. **One sales engineer per account.** Same person from quote to dispatch — not a relay across three departments.

#### Process strip (6 steps, 8–12 words each)
1. **Drawing & RFQ in.** Share STEP/DWG plus volume, polymer, finish.
2. **DFM review.** We mark up your part with mouldability flags.
3. **Mould design & quote.** Cavities, runner, gate plan, steel grade.
4. **Tool build & T1 trial.** Sampling with dimensional report.
5. **Sign-off & production.** Batch traceability, in-process QC.
6. **Inspection & dispatch.** FAI, packing, logistics handled.

#### Capability snapshot
- **Press tonnage:** [40T] to [450T]
- **Mould size limit:** [800 × 600 × 500 mm]
- **Polymers:** ABS, PC, PP, PE, PA6, PA66, POM, TPE, glass-filled grades
- **Tolerance class (typical):** DIN 16742 CT4–CT5
- **Plant area:** [12,000] sq.ft.
- **Daily output capacity:** [60,000+] shots
- **Shifts:** 2 × 12 hr, expandable to 24 × 7

#### Case study teasers
**Medical device housing — biocompatible PC, ±0.05 mm on mating face.** Cycle time reduced from 38s to 26s after gate relocation. Read the [full case study →](/case-studies/medical-device-housing).

**Switchgear terminal block — V0-rated PA66 GF30, 3-cavity tool, 200K/year.** Scrap rate held under 0.4% across 18 months. Read the [full case study →](/case-studies/electrical-switchgear-component).

#### Testimonial block (homepage selection)
> “Swastik built our diagnostic consumable tool in 9 weeks against an industry-standard 14. The first T1 sample was dimensionally inside tolerance on every critical feature. That kind of first-shot accuracy is rare.”
> **— [Name], Head of NPI, [Medical Device Company], Pune**

#### FAQ teaser (3)
- **What is your typical mould lead time?** 6–10 weeks for a single-cavity P20 tool, 10–14 weeks for multi-cavity hot-runner. We commit a date in writing at PO stage.
- **Do you sign NDAs?** Yes, on your letterhead or ours, before any drawing exchange.
- **Who owns the mould after you build it?** You do. The PO names you as the tool owner. We hold it in our shop only as long as you’re running parts on it.

#### Final CTA banner
**Send us your part. Get a manufacturable answer in 1 business day.**
Drawing in any common format (`.step`, `.iges`, `.x_t`, `.dwg`, `.pdf`). We respond with DFM feedback, a tooling estimate and a per-part quote — no obligation.
**[Request a Quote]** **[WhatsApp our sales engineer]**

#### Image alt-text suggestions (homepage)
- Hero photo: *Swastik Plastic Mumbai shop floor with [250T] injection press in operation*
- Trust bar logo strip: *Logos of OEM clients in industrial, medical and electrical sectors*
- Service card 1: *CNC machining centre cutting P20 mould steel*
- Service card 2: *Injection moulding press ejecting glass-filled nylon part*
- Service card 3: *Vertical clamp press with brass insert loaded on core*
- Plant capability photo: *CMM dimensional inspection of moulded medical housing*

#### JSON-LD (homepage — Organization + WebSite + LocalBusiness combined)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://swastikplastic.co.in/#org",
      "name": "Swastik Plastic",
      "url": "https://swastikplastic.co.in/",
      "logo": "https://swastikplastic.co.in/assets/img/logo.png",
      "foundingDate": "2005",
      "founder": { "@type": "Person", "name": "[FOUNDER_NAME]" },
      "sameAs": [
        "https://www.linkedin.com/company/[LINKEDIN_HANDLE]",
        "https://www.indiamart.com/[INDIAMART_HANDLE]",
        "https://www.facebook.com/[FB_HANDLE]"
      ],
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+91-[PHONE]",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "mr"]
      }]
    },
    {
      "@type": "Manufacturer",
      "@id": "https://swastikplastic.co.in/#localbusiness",
      "name": "Swastik Plastic",
      "image": "https://swastikplastic.co.in/assets/img/plant.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[STREET]",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "[PIN]",
        "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "[LAT]", "longitude": "[LNG]" },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00", "closes": "18:00"
      }],
      "priceRange": "₹₹"
    },
    {
      "@type": "WebSite",
      "@id": "https://swastikplastic.co.in/#website",
      "url": "https://swastikplastic.co.in/",
      "name": "Swastik Plastic",
      "publisher": { "@id": "https://swastikplastic.co.in/#org" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://swastikplastic.co.in/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
```

---

### 4.2 About Page

**SEO title:** About Swastik Plastic — Mumbai Mould Maker Since 2005
**Meta description:** Founded 2005 in Mumbai. Family-run mould shop grown into a full plastic injection moulding plant. Read our story, milestones and values.
**H1:** Two decades of mould-making, built one tool at a time.

#### Founding story (310 words)

Swastik Plastic started in 2005 with a single CNC, two used injection presses, and one stubborn idea: that a mould shop in India could deliver tooling that didn’t need three rounds of rework. Our founder, [FOUNDER_NAME], had spent the previous decade on the shop floor of larger moulders watching the same problems repeat — gates that flooded, ejector marks on cosmetic surfaces, T1 samples that needed manual fitment to mate. The pitch was simple: build the tool right the first time and the production run takes care of itself.

For the first three years we made moulds for other moulders. That sub-contracting work was a brutal teacher. We learned what tool steel grade actually mattered for which polymer, how much polish was needed before the gloss spec stopped failing, and why hot-runner systems pay back inside two years on the right part. By 2008 we were running our own injection presses on customer parts — first for industrial product makers in the Mumbai-Pune belt, then for switchgear OEMs, then for our first medical device customer in 2012.

The plant has grown deliberately. We resisted the temptation to add tonnage we couldn’t keep busy. We added the [250T] press only after one customer’s growth justified it on its own. We added our second CMM only after the first one queued more than four hours a day. The discipline is unromantic, but it’s the reason our quoted lead times still hold and our quoted prices still hold.

Today Swastik Plastic is a [12,000 sq.ft.] integrated plant with an in-house tool room, [16] injection presses, dedicated medical and electrical cells, and an inspection lab that customers audit on arrival. We still take a phone call from a founder who needs 5,000 parts as seriously as a PO from a multinational who needs 500,000. That hasn’t changed.

#### Founder note (160 words)

> A mould is the kind of capital expense that decides whether your product launches on time or six months late. We have signed off on enough first-time-right tools — and lived through enough re-cuts — to know which compromises are worth taking and which are not. When you send us a drawing, you are not handing it to a sales department. It comes to a plant where the same engineer who quotes it walks it to the tool room, sits in on the trial, and signs the dimensional report. That is how it has been since 2005, and that is the part of Swastik Plastic that doesn’t scale — and won’t.
>
> **— [FOUNDER_NAME], Founder & Managing Director**

#### Milestones timeline

- **2005** — Swastik Plastic founded in Mumbai. Two used presses, one CNC. First customer: an industrial pulley manufacturer.
- **2008** — Moved into a dedicated [4,000 sq.ft.] unit. First in-house EDM commissioned. First customers in the electrical sector.
- **2012** — First medical device customer onboarded. Cleanroom-adjacent moulding cell set up. ISO 9001:2008 awarded.
- **2016** — [250T] press added. CMM commissioned for in-house dimensional inspection. Family of multi-cavity hot-runner tools delivered for a switchgear OEM.
- **2019** — Plant expanded to [9,000 sq.ft.]. First export consignment shipped. ISO 9001:2015 transition complete. Insert moulding cell formalised.
- **2022** — [16th] press commissioned. Second CMM added. Vertical moulding capability formalised for connector overmoulds. First Class II medical device tool delivered.
- **2024** — [12,000 sq.ft.] plant footprint. Mould design team expanded to [6] engineers. First [450T] tonnage class added.

#### Values block (40-word descriptions)

**Quality.** Quality is not a department here. It is the assumption that every part leaving the plant has been measured, the report has been written, and the operator who ran it would be willing to put their name on the consignment note.

**Innovation.** We do not innovate to look modern. We adopt the things that pay back — mould-flow analysis when wall thickness is borderline, conformal cooling when cycle time decides margin, hot-runner when scrap on the runner exceeds the runner system cost.

**Practical engineering.** A drawing that cannot be moulded is not a drawing — it is a problem statement. Our DFM is not a critique; it is a redraw on the same call. Engineers prefer it because it shortens the loop from concept to first part.

**Affordability.** Affordable is not the same as cheap. We price every job to make a fair margin and survive a resin spike. That is what lets us hold price for 90 days and still be here for your reorder. Cheap moulders disappear at month four.

#### Plant overview paragraph (130 words)

Our [12,000 sq.ft.] plant in [LOCALITY], Mumbai, runs on three connected floors: an in-house tool room ([CNC × 2], EDM, surface grinder, bench polish), an injection moulding hall with [16] presses ranging from [40T to 450T], and an inspection and packing area with [2 × CMMs], surface profilometer, and a calibrated mechanical lab. A separate cell handles medical-grade work with controlled material flow, glove-only handling and dedicated tooling. Insert moulding has its own bay with vertical clamp presses and operator jig storage. Power runs on a [500 kVA] sanctioned load with diesel backup. Compressed air and chillers are sized for full plant load with 25% headroom. Visitors are welcome — we run plant tours by appointment, and we encourage them before any tooling PO.

#### Numbers block (with supporting copy)

| Number | Caption |
|---|---|
| **19+ years** | On the shop floor since 2005, through three resin-price cycles and two recessions. |
| **1,200+ moulds** | Designed, cut, polished and signed off in our tool room. |
| **80+ active OEMs** | Industrial, medical and electrical customers running parts with us this quarter. |
| **20M+ parts/year** | Annual production volume across active programmes. |
| **6 engineers** | In our mould design team, supported by a [3-]operator tool room. |
| **2 shifts** | 12-hour shifts, expandable to 24×7 for surge volumes. |

#### About page JSON-LD (AboutPage + BreadcrumbList)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "url": "https://swastikplastic.co.in/about",
      "name": "About Swastik Plastic",
      "isPartOf": { "@id": "https://swastikplastic.co.in/#website" },
      "about": { "@id": "https://swastikplastic.co.in/#org" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type":"ListItem","position":1,"name":"Home","item":"https://swastikplastic.co.in/"},
        {"@type":"ListItem","position":2,"name":"About","item":"https://swastikplastic.co.in/about"}
      ]
    }
  ]
}
```

---

### 4.3 Service Pages

#### 4.3.1 `/services/mould-making`

**SEO title:** Plastic Mould Manufacturer India — In-house Tool Room
**Meta description:** Mould design, CNC, EDM, polish and trial under one roof. P20, H13, S136 steels. Single, multi-cavity and hot-runner moulds — quoted with steel grade.
**H1:** Plastic moulds, designed and cut in our own tool room.
**Subhead:** From a single-cavity P20 prototype tool to a 16-cavity hot-runner production mould — built in Mumbai, sampled in our own presses, and signed off with a dimensional report you can audit.

**What it is (110 words).** Mould making is the work that decides whether your part will be mouldable, repeatable and economical to produce for the next million shots. It covers mould design (cavity layout, runner system, gating, cooling, ejection, venting), tool steel selection (P20, H13, S136, pre-hardened, mirror-grade), tool manufacture (CNC machining, EDM sinking and wire-cut, surface grinding, bench polish), and trial sampling (T1, T2, T3) until the dimensional report matches your drawing. We do all of it inside our plant. Nothing is sub-let. The same engineer who designs the mould signs off the trial. That continuity is the difference between a tool that runs and a tool that fights you.

**Ideal applications (use cases)**
- Engineering plastic parts where dimensional drift on multi-cavity tooling is unacceptable.
- Family moulds when two related parts share a tool to amortise cost.
- Hot-runner production tools for high-volume electrical or industrial parts.
- Insert moulding tools where jig design is half the engineering work.
- Replacement tools for an existing part where you’ve outgrown a low-cavity prototype mould.
- Re-cuts and refurbishments — repair, re-polish, re-texture for moulds in service.
- Class II medical device tooling that has to pass a customer audit before first run.

**Our capability**
| Parameter | Range |
|---|---|
| Mould size envelope | up to [800 × 600 × 500 mm] |
| Cavity count | 1 to [32] |
| Cavity tolerance (typical) | ±0.02 mm on critical features |
| Steel grades | P20, P20+Ni, H13, S136, NAK80, pre-hardened 1.2738, beryllium copper inserts |
| Runner systems | cold runner, hot half, fully hot-runner (Synventive / YUDO / Hasco) |
| Texturing | mirror polish (A1–A3), VDI textures via local partner |
| Cooling | conformal cooling on selected projects via DMLS partner |
| Mould-flow | Moldex3D / Moldflow analysis on request |

**Process for this service**
1. **DFM review on your drawing.** We mark up draft, wall thickness, gate location, weld lines, undercuts. Returned within 2 working days.
2. **Mould design with sign-off drawing.** Cavity layout, runner, gating, ejection, cooling. You approve before we cut steel.
3. **Tool manufacture.** CNC roughing, EDM finishing, hand polish. Steel inspection at every milestone.
4. **T1 trial in our press.** Dimensional report on every cavity, every critical feature. Issues logged.
5. **T2 / T3 trial after rework.** Until every critical-to-function dimension passes.
6. **Mould handover or production start.** You take the tool, or we run it. Your call.

**Industries we deliver this for**
- [Industrial parts →](/industries/industrial)
- [Medical device housings →](/industries/medical)
- [Electrical components →](/industries/electrical)

**Why clients choose Swastik for moulds**
- **No outsourced steel.** Every cavity cut on our floor, by our team.
- **Steel grade is in the quote.** No “suitable steel” language — you see P20 / H13 / S136 by name.
- **T1 sample in 6–10 weeks** for single-cavity, [10–14] weeks for multi-cavity hot-runner, written into the PO.
- **Mould flow when wall thickness is borderline.** We don’t guess on parts that will fight you in production.

**Featured project (mini case study, 130 words).**
A mid-size switchgear OEM came to us with a 3-cavity hot-runner tool that had been built abroad and was running 1.4% scrap on weld-line porosity. We ran a Moldex3D simulation on the existing layout, identified the gate angle as the cause, and cut a new hot-half with relocated tip positions in 7 weeks. T1 sample tested on a 200-shot run hit 0.3% scrap. Full production has held under 0.5% across 11 months and over 380,000 parts. Cost recovered inside 8 weeks of production.

**FAQs**
- **What steel grade do you use by default?** P20 for production tools running soft polymers, H13 for glass-filled and abrasive grades, S136 for transparent or medical-grade work that needs corrosion resistance and mirror polish. We always quote the grade by name, not as “tool steel”.
- **Do you do mould-flow analysis?** Yes — we run Moldex3D / Moldflow on parts where wall thickness is below 1.5 mm, where weld-line position matters cosmetically or structurally, or where customer asks for it. Reports go into your PO file.
- **Can I take the mould elsewhere later?** Yes. The mould is your property from the date you complete tooling payment. We hand over the tool, design files (2D + 3D), spare ejector pins, and a maintenance log. No clawback clauses.
- **What is your typical mould lead time?** 6–10 weeks for single-cavity P20 cold-runner, 8–12 weeks for multi-cavity cold-runner, 10–14 weeks for hot-runner. Family tools and complex slider tools can run longer — we commit a date in writing at PO.
- **Do you refurbish existing moulds?** Yes. Re-polish, ejector pin replacement, gate insert replacement, runner re-balancing, full re-texture. We also do cavity re-cuts when one cavity is producing scrap and the rest are fine. Send us the mould layout and a defect description — we’ll scope it.

**CTA block.**
**Send the part. Get a mould plan.** Drop your STEP/DWG and we’ll come back with steel grade, cavity count, gating, lead time and a tooling cost — within 1 business day.
**[Send Drawing for Quote]** **[Talk to a Mould Engineer]**

---

#### 4.3.2 `/services/injection-moulding`

**SEO title:** Custom Injection Moulding Services India | Engineering Plastics
**Meta description:** Injection moulding from 1k to 1M parts/year. ABS, PC, PA66, POM, glass-filled. [40T–450T] presses. Batch traceability and dimensional reports included.
**H1:** Custom injection moulding for engineering plastics.
**Subhead:** Production runs your engineers can plan against — quoted price held for 90 days, lead time committed at PO, dimensional report shipped with every consignment.

**What it is (110 words).** Injection moulding is the high-volume manufacturing process where molten polymer is injected into a closed steel cavity, cooled, ejected, and the cycle repeats. The economics are obvious: once the tool is right, the marginal cost per part drops to seconds of cycle time and grams of polymer. The non-obvious part is the discipline required to keep the part right across the next 100,000 shots — material drying control, hold pressure tuning, mould temperature stability, in-process dimensional sampling. We run that discipline as a documented process. Each programme has its own setup sheet, sampling plan, and signoff trail.

**Ideal applications**
- Industrial components — gears, pulleys, bushings, machine guards, conveyor parts.
- Medical device subassemblies — housings, fluid-path parts, diagnostic consumables.
- Electrical components — terminal blocks, connector housings, switchgear parts.
- Consumer durable parts that need engineering-plastic strength rather than commodity polymer.
- Replacement of metal parts with engineering plastic for weight, cost or corrosion reasons.
- Small to medium production runs (1,000–1,000,000 pieces a year) where a contract moulder makes more sense than in-house tonnage.

**Our capability**
| Parameter | Range |
|---|---|
| Press tonnage | [40T] to [450T] |
| Polymers (commodity) | ABS, HIPS, PP, PE, PS |
| Polymers (engineering) | PA6, PA66, PC, POM, ABS-PC, PBT |
| Polymers (specialty) | TPE, TPU, PA66 GF30, PC GF20, PEEK on request |
| Cycle time control | within ±0.5s of validated cycle |
| In-process inspection | first-off + every 100th shot, logged |
| Batch size | 500 to 250,000 pieces per release |
| Annual volume per part | 1,000 to 1,000,000+ |

**Process for this service**
1. **Material drying.** Polymer-specific dryer programme run before every shift. Dew-point logged.
2. **Setup against validated parameters.** Each tool has a frozen setup sheet — temperatures, pressures, hold times.
3. **First-off inspection.** No production runs until the first-off part passes dimensional and visual.
4. **In-process sampling.** Every 100th shot pulled for dimensional check.
5. **Final inspection and packing.** FAI at batch end, AQL sampling on visual, anti-static or VCI packing as spec.
6. **Dispatch with documentation.** Material certificate, dimensional report, batch traceability tag.

**Industries we deliver this for**
- [Industrial →](/industries/industrial)
- [Medical →](/industries/medical)
- [Electrical →](/industries/electrical)

**Why clients choose Swastik for moulding runs**
- **Quoted price holds 90 days.** No mid-order resin price renegotiation.
- **Lead time committed at PO.** Dispatch date written, not estimated.
- **Frozen setup sheet per tool.** Same parameters every shift, every operator — no quality drift.
- **Dimensional report with every consignment.** Auditors see what they need without asking.

**Featured project (mini case study, 130 words).**
An industrial pump OEM moved their POM impeller from a competitor moulder to us in 2022. The earlier scrap rate was 1.8% on a critical balance feature. We ran a tool audit, found a worn ejector that was distorting the part on release, and replaced the ejector assembly during the first batch changeover. Setup was frozen on a new sheet with corrected hold pressure. Subsequent batches over 14 months — 280,000 parts — held scrap at 0.4–0.6%. Cycle time reduced from 32s to 27s after a cooling-circuit upgrade we proposed in month four.

**FAQs**
- **What is your minimum batch size?** Production batches start at 500 pieces. For prototype runs we go lower — typically 100 to 500 — billed as a sampling job. We discourage MOQs that don’t make economic sense; we’d rather quote you honestly on a small run than promise unrealistic per-part economics.
- **Can you handle glass-filled grades?** Yes. PA66 GF30 is a routine grade for us. PC GF20, PBT GF, PP GF — all run. Glass-filled grades are abrasive; we run them on H13 cavities and budget mould wear into your annual maintenance.
- **What documentation do you ship with parts?** Material certificate (from the resin supplier batch), dimensional report on first-off and final batch sample, batch traceability tag, and packing list. Medical-grade jobs additionally carry a glove-handling log and dedicated batch number.
- **Do you do secondary operations?** Yes — ultrasonic welding, pad printing, hot stamping, manual assembly, ultrasonic insert installation, packaging to SKU. We treat secondary ops as part of the moulding programme so you have one accountable vendor.
- **How do you handle resin price volatility?** Our quote holds 90 days at current resin band. If the resin index moves more than [±5%] over that period, we re-quote on the resin component only. The tooling cost and labour cost don’t move. This is in our standard terms.

**CTA block.**
**Get a moulding quote with cycle time, scrap budget and lead time written down.**
**[Request a Production Quote]** **[Schedule a Plant Tour]**

---

#### 4.3.3 `/services/vertical-moulding`

**SEO title:** Vertical Injection Moulding Manufacturer India | Connector Overmould
**Meta description:** Vertical-clamp injection moulding for cable connectors, sensor overmoulds and insert-loaded parts. Stable insert position, repeatable encapsulation.
**H1:** Vertical injection moulding for inserts that have to stay put.
**Subhead:** Vertical-clamp presses are the right answer when the insert sits on the core and gravity is your friend, not your enemy. We run cable assemblies, sensor overmoulds and connector encapsulation programmes where horizontal moulding would simply not hold the insert.

**What it is (110 words).** Vertical injection moulding uses a clamp axis that opens and closes vertically rather than horizontally. The advantage is straightforward: parts and inserts placed on the lower half stay where you put them. For cable connectors, brass terminal pins, PCB-embedded assemblies and any component where the insert has to be precisely located before the shot, vertical moulding eliminates the jig drift that plagues horizontal insert work. We run vertical presses in a dedicated bay with operator-loaded jigs, semi-automated insert loading where volume justifies it, and validated encapsulation cycles. For wire assemblies and overmoulded connectors, this is the process you want.

**Ideal applications**
- Cable assemblies with overmoulded connector bodies (USB, M12, automotive, audio).
- Sensor overmoulds where the sensor element must sit exactly mid-cavity.
- PCB-embedded encapsulation for industrial electronics.
- Single-sided insert moulding where the insert cannot tolerate sideways orientation.
- Threaded brass insert encapsulation in vertical orientation.
- Multi-component assemblies that combine two or more pre-loaded inserts.

**Our capability**
| Parameter | Range |
|---|---|
| Vertical press tonnage | [40T] to [120T] |
| Insert sizes handled | from M2 brass inserts to [50 mm] sensor bodies |
| Cycle time | typical 30–90s including insert load |
| Encapsulation polymers | PA6, PA66, TPE, TPU, PVC compounds, PP |
| Jig fixturing | designed and built in-house |
| Insert loading | manual standard, semi-automated for volumes >100k/year |

**Process for this service**
1. **Insert and cable design review.** We confirm jig design, insert tolerance and pull-out load expectation.
2. **Jig fabrication.** Operator-loaded fixture cut in our tool room, qualified before T1.
3. **Process validation.** Encapsulation cycle frozen, pull-out load tested on 30 consecutive parts.
4. **Production run.** In-process pull-out test every 100 shots.
5. **Final inspection.** Visual, dimensional and pull-out test sample on every batch.
6. **Packing.** ESD-safe where required, individual bagging on cable assemblies.

**Industries we deliver this for**
- [Industrial sensor and connector OEMs →](/industries/industrial)
- [Medical fluid-path connectors →](/industries/medical)
- [Electrical cable assembly makers →](/industries/electrical)

**Why clients choose Swastik for vertical moulding**
- **In-house jig fabrication.** Most jig drift problems start at jig design — we control both.
- **Pull-out load testing as part of QC.** Not just dimensional, but mechanical performance.
- **Operator training documented.** Insert loading is operator-skill-dependent; we treat that as a process variable.

**Featured project (mini case study, 130 words).**
A connector OEM was running a USB-style overmoulded cable on a competitor with a 3.2% reject rate on insert pull-out failure. We took the programme in 2023, redesigned the jig to fully constrain the brass terminal pins (the previous jig allowed 0.4 mm of axial play), and validated a new encapsulation cycle on PA6. Pull-out load improved from a mean of 78 N to 112 N, with all parts above the 90 N spec. Reject rate over the next 11 months across 220,000 cables held at 0.4%.

**FAQs**
- **Do I need vertical moulding or will horizontal work?** If your insert sits in the cavity stably without a side-clamping mechanism, horizontal works. If the insert wants to fall, slide, or rotate, vertical is the right answer. We’ll tell you on the first call which makes sense.
- **Can you do semi-automated insert loading?** Yes — pneumatic shuttles for high-volume programmes ([>100,000] parts/year). Below that volume the economics don’t justify automation; manual operator loading with a well-designed jig is faster to set up and equally repeatable.
- **What pull-out load can you guarantee?** It depends on insert geometry and polymer. Brass M3 insert in PA66 typically gives [>150 N]. We test pull-out as a process control item during T1, not as an optional check.
- **What polymers do you run on vertical presses?** PA6, PA66, TPE, TPU, PVC compounds, PP. We’ve done Hytrel-style copolymers on request. Glass-filled grades are possible — discuss tooling steel choice early.
- **Can you handle pre-tinned wire harness encapsulation?** Yes. Cable preparation (strip, tin, crimp) can be sub-let to a qualified harness partner or we receive prepared harnesses from your existing supplier. Either way, we control encapsulation and final test.

**CTA block.**
**Have a connector or sensor that needs overmoulding? Send the assembly drawing.**
**[Request a Vertical Moulding Quote]** **[Talk to an Engineer]**

---

#### 4.3.4 `/services/insert-moulding`

**SEO title:** Insert Moulding & Overmoulding Services India | Brass, Threaded
**Meta description:** Insert moulding for brass, steel, PCB and threaded inserts. TPE-on-PP overmoulding. In-house jig design — repeatable encapsulation across long runs.
**H1:** Insert moulding and overmoulding, with the jig engineering it actually takes.
**Subhead:** Anyone can drop an insert into a cavity. The question is whether it’s in the right place at shot 50,000. We design and build the jigs, control the process, and treat insert location as a documented quality parameter, not an operator instinct.

**What it is (110 words).** Insert moulding encapsulates a metal, ceramic or pre-moulded plastic component inside a plastic shot — threaded brass inserts, steel terminals, PCB sub-assemblies, magnets. Overmoulding is similar but typically refers to a soft material moulded on a hard substrate, e.g. TPE grip on a PP handle. Both processes share the same engineering challenge: holding the insert or substrate in exact position while polymer fills around it at high pressure. We address that with jig design that constrains the insert in all six degrees of freedom, polymer selection that bonds reliably, and process windows validated on pull-out and adhesion tests, not just dimensional checks.

**Ideal applications**
- Threaded brass inserts in housings, handles and fasteners.
- Stainless steel pin or terminal encapsulation.
- TPE soft-touch overmould on PP, ABS or PC handles.
- Magnet encapsulation in industrial sensor bodies.
- PCB sub-assembly encapsulation for ruggedised electronics.
- Two-shot-style functional combinations using single-shot insert moulding (when two-shot tooling is uneconomical).

**Our capability**
| Parameter | Range |
|---|---|
| Insert types handled | brass M2–M12, steel pins, magnets, PCBs, pre-moulded inserts |
| Substrate polymers | PP, ABS, PC, PA6, PA66, ABS-PC |
| Overmould polymers | TPE, TPU, soft PVC |
| Pull-out load tested | on every batch, recorded |
| Adhesion testing | peel-test or pull-test as defined |
| Jig fabrication | in-house, in our tool room |

**Process for this service**
1. **Insert geometry review.** We confirm knurl pattern, retention features and dimensional tolerance.
2. **Jig design.** Six-DOF constraint of insert with operator ergonomic check.
3. **Material selection for bond.** Substrate-overmould polymer pairing reviewed against datasheets.
4. **T1 with pull-out / peel testing.** 30-part validation lot tested mechanically, not just visually.
5. **Production with in-process testing.** Every 100th part pull-out tested.
6. **Documented batch sign-off.** Pull-out / peel data shipped with consignment.

**Industries we deliver this for**
- [Industrial sensor and equipment makers →](/industries/industrial)
- [Medical device housings with brass inserts →](/industries/medical)
- [Electrical connector and terminal OEMs →](/industries/electrical)

**Why clients choose Swastik for insert work**
- **Jig design is a deliverable.** We don’t treat it as a fixture afterthought.
- **Pull-out / peel testing as a process control.** You don’t find out about adhesion failure in the field.
- **Polymer-pair experience.** TPE-on-PP and TPE-on-PC behave differently — we’ve made both work in production.

**Featured project (mini case study, 130 words).**
An industrial sensor maker had been hand-pressing brass inserts into a moulded ABS housing post-production. Cycle time was painful and a 2% rejection on insert wobble was killing margin. We took the part, redesigned the housing for insert moulding with M3 knurled brass inserts, and built a 4-cavity tool with operator-loaded jigs in 9 weeks. Production cycle dropped from 38s of moulding plus 22s of post-process insertion to a single 41s integrated cycle. Pull-out load consistently above 220 N (spec was 150 N). Reject rate across 18 months and 165,000 parts held at 0.5%.

**FAQs**
- **What knurl pattern works best for brass inserts?** Diamond knurl with two annular grooves is our default for M3–M6 inserts in PA66. For ABS we recommend a coarser knurl. We can quote against the insert your supplier already provides — send us the part number and datasheet.
- **Can you do TPE overmould on PC?** Yes, with the right TPE grade. Generic SEBS-based TPE will not bond chemically with PC; we use specific bondable TPE grades or design mechanical undercuts into the substrate. We’ll specify the grade in the quote.
- **What is the difference between insert moulding and two-shot moulding?** Two-shot uses a rotating tool and two injection units in sequence — the substrate is moulded first, then rotated to a second cavity for the overmould, all without ejection. Insert moulding ejects the substrate, places it in a second tool, and shoots the overmould. Two-shot is faster per part but requires expensive specialised tooling. For volumes under [200,000] parts/year, insert moulding usually wins on total cost.
- **Do you supply the inserts or do I?** Either. For standard threaded brass inserts (M2–M6) we have qualified suppliers. For specialty inserts you’ll typically supply against a free-issue agreement so your spec governs.
- **How do you handle insert handling and contamination?** Inserts are received in sealed bags, stored in dust-free bins, and operators handle with gloves on medical-grade work. For electrical contact applications we add an isopropanol wipe step before loading.

**CTA block.**
**Insert work needs jig engineering, not luck. Send your assembly drawing.**
**[Request an Insert Moulding Quote]** **[Read: Insert vs Overmould — when to use which](/insights/insert-vs-overmould)**

---

#### 4.3.5 `/services/plastic-product-manufacturing`

**SEO title:** End-to-End Plastic Product Manufacturing | Mumbai, India
**Meta description:** From DFM to packaged SKUs — design, mould, mould, assemble and pack. One accountable vendor for plastic product programmes from 1k to 1M units a year.
**H1:** End-to-end plastic product manufacturing — one accountable vendor.
**Subhead:** When you’d rather not manage a designer, a mould maker, a moulder, an assembly shop and a packer separately, we run the whole programme — DFM through dispatch — under one PO and one project engineer.

**What it is (110 words).** Plastic product manufacturing is what we call a programme that covers everything from a customer’s product brief to packaged SKUs ready for distribution. It typically includes DFM and design support, mould design and tooling, injection moulding, secondary operations (ultrasonic welding, pad printing, hot stamping, ultrasonic insert installation, manual assembly), and packaging. We run programmes like this for SME founders, startups, and OEMs who want one accountable vendor instead of three. The advantage is not just convenience — it’s that DFM decisions take into account assembly and packaging realities, not just moulding. Decisions converge faster and the launch date holds.

**Ideal applications**
- New product launches where the founder wants one point of accountability from sketch to shipment.
- Mid-volume consumer or industrial products (5,000–500,000 units/year) where managing multiple vendors costs more than the markup we charge.
- Product families where the same shell needs assembly variants per SKU.
- Replacement of an existing fragmented supply chain with a single vendor.
- Products that combine moulded parts with bought-in components (PCBs, motors, springs).
- Programmes that need ultrasonic welding, decoration, or labelling before packaging.

**Our capability**
- Mould design and tooling (in-house tool room).
- Injection moulding ([40T–450T]).
- Ultrasonic welding ([20 kHz / 35 kHz]).
- Pad printing, hot stamping, in-mould labelling on request.
- Ultrasonic and heat-stake insert installation.
- Manual assembly with documented work instructions.
- Packaging: blister, box, polybag, foam, custom.
- SKU-level barcoding and label printing.

**Process for this service**
1. **Product brief workshop.** We sit with you (in person or remote) to scope the product and assembly.
2. **DFM + design feedback.** Marked-up redrawings of every part for mouldability and assembly.
3. **Tooling.** All moulds cut in our tool room.
4. **Pilot run.** Small lot (typically 500–1,000 units) end-to-end through the full process to validate the assembly line.
5. **Production.** Volume manufacture with assembly and packaging integrated.
6. **Dispatch.** SKU-level packing, labelling, and consignment documentation.

**Industries we deliver this for**
- [Industrial product brands →](/industries/industrial)
- [Medical device startups →](/industries/medical)
- [Electrical accessory makers →](/industries/electrical)

**Why clients choose Swastik for end-to-end programmes**
- **One PO, one project engineer.** No vendor coordination on your side.
- **DFM informed by assembly.** We don’t design the part in isolation from how it’s put together.
- **Pilot run before full production.** Catches assembly bottlenecks before tooling commitments compound.
- **Founder-friendly.** SME-scale programmes treated with the same rigour as multinational accounts.

**Featured project (mini case study, 130 words).**
A consumer electronics startup came to us in 2021 with a Bluetooth speaker enclosure design and no manufacturing partner. Over the next 6 months we ran DFM on all four moulded parts, cut a 4-tool family of moulds, set up an assembly cell with ultrasonic welding for the front grille and screw-boss heat-staking for the rear, integrated the bought-in PCB and battery, and delivered SKU-packaged units. First production batch of 8,000 units shipped 11 weeks after PO. The same programme has shipped 145,000 units across two product variants over three years.

**FAQs**
- **Do you work with startups and SMEs?** Yes — about [40%] of our programmes are SME-scale. We don’t differentiate quality or attention by customer size, but we are transparent that programmes under [5,000 units/year] often don’t justify multi-cavity tooling, and we’ll quote single-cavity prototypes accordingly.
- **Will you sign an NDA before I share my product?** Yes, before any drawing or design discussion. NDA on your letterhead or ours.
- **Do you manage bought-in components?** Yes — PCBs, batteries, motors, screws, packaging. We can buy on your behalf or you can free-issue. Either model works; we’ll structure the PO accordingly.
- **What is the minimum programme size?** We don’t set a minimum, but practically speaking the economics work above [3,000 units/year] for an end-to-end programme. Below that, just-tooling-and-moulding makes more sense — you can manage assembly elsewhere.
- **Can you ship internationally?** Yes — we’ve shipped to [GCC, EU, North America, Africa]. We handle FOB Mumbai or door-to-door via our forwarder. Customs paperwork is part of our standard documentation pack.

**CTA block.**
**Have a product idea or an existing programme to consolidate? Let’s scope it.**
**[Book a Programme Discovery Call]** **[Send Brief for DFM]**

---

#### 4.3.6 Service `Service` schema (apply per page with name swap)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Plastic Mould Manufacturing",
  "name": "Plastic Mould Making — Swastik Plastic",
  "provider": { "@id": "https://swastikplastic.co.in/#org" },
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "AdministrativeArea", "name": "Maharashtra" }
  ],
  "audience": { "@type": "BusinessAudience", "audienceType": "OEM manufacturers" },
  "termsOfService": "https://swastikplastic.co.in/terms",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "INR" },
    "availability": "https://schema.org/InStock"
  }
}
```

---

### 4.4 Industry Pages

#### 4.4.1 `/industries/industrial`

**SEO title:** Industrial Plastic Moulded Products Supplier India
**Meta description:** Engineering-plastic gears, bushings, impellers, machine guards and conveyor parts. Dimensional precision and wear life as the default specification.
**H1:** Industrial plastic parts where dimensional precision and wear life are the brief.

**Hero subhead.** Pump impellers, gears, bushings, machine guards, conveyor links — the parts where if the dimension drifts, the assembly stops. We mould them in engineering plastics, on tools we cut ourselves, with the dimensional reports your maintenance team can actually use.

**Component examples we manufacture (12 part types)**
- Pump impellers (POM, PEEK on request)
- Gears (POM, PA66 GF30, hybrid PA-PTFE blends)
- Bushings and sleeve bearings (PA66, POM)
- Conveyor link plates and rollers (PA6, UHMWPE blends)
- Machine guard panels (PC, ABS, PETG)
- Equipment housings and end caps (ABS, ABS-PC)
- Cable trunking and cable management clips (PA6, PP)
- Pulley wheels and tensioners (PA66 GF, POM)
- Threaded knobs and handwheels (ABS, PA6)
- Levelling feet and machine pads (PA6 GF, TPU)
- Sensor mounts and brackets (PA6 GF, PC)
- Wear pads and slide blocks (UHMWPE, PA-oil compounds)

**Material expertise relevant to industrial parts**
- **PA66 GF30 (glass-filled nylon).** Default for structural parts that replace metal. Stiffness, dimensional stability, wear resistance.
- **POM (acetal).** Gears, bushings, impellers — low friction, dimensional precision, fatigue life.
- **UHMWPE compounds.** Wear pads and conveyor parts where impact toughness and slide friction matter.
- **PA6 with oil-impregnated grades.** Self-lubricating bushings.
- **PC and ABS-PC.** Guard panels and housings where impact strength is critical.
- **Engineering blends (PA-PTFE, PA-MoS2).** For sliding contact applications.

**Compliance / quality considerations specific to industrial parts**
- **Dimensional drift.** Industrial buyers track dimensional drift across batches more aggressively than cosmetic buyers. Our in-process sampling cadence is set accordingly.
- **Material traceability.** Resin batch traceability per consignment for parts going into safety-rated equipment.
- **Mould wear management.** Glass-filled and abrasive grades chew up tooling. We schedule polish and gate-insert replacement on a part-count basis, not a calendar basis.
- **Mechanical testing.** Pull-out, tensile and flexural testing on critical parts before batch release.

**Sample applications (3 mini scenarios, 60 words each)**

> **Centrifugal pump impeller in POM.** A pump OEM sourcing 80,000 impellers a year needed dimensional control on the eye and vane angles to maintain hydraulic efficiency across batches. We cut a 2-cavity tool with conformal cooling on the vane core, validated with mould-flow analysis. Scrap rate has held under 0.5% across 18 months and three resin lots.

> **Gear set for industrial gearboxes.** An OEM moved their PA66 GF30 spur gear from machined-from-bar to moulded after we demonstrated tooth profile accuracy on a sample tool. Cycle time of 42s, post-mould stress relief in a controlled oven, and pin-gauge inspection on every 100th part. Annual run of 110,000 gears.

> **Conveyor link plates in UHMWPE.** A food-handling equipment maker needed wear-resistant link plates with stable dimensional behaviour at low temperatures. We trialled three UHMWPE compounds, settled on a virgin grade with controlled MFI, and ran a 4-cavity tool. Wear life in the field improved by [40%] over the previous incumbent.

**Services for industrial customers**
- [Mould Making →](/services/mould-making)
- [Injection Moulding →](/services/injection-moulding)
- [Insert & Overmoulding →](/services/insert-moulding)

**Industrial-specific FAQs**
- **Can you mould engineering plastics with metal-replacing strength?** Yes — PA66 GF30, PA6 GF30, PBT GF, and selected PEEK grades on smaller volumes. We’ll match the polymer to your load case during DFM.
- **Do you do gear cutting tolerance work?** Moulded gears have inherent tolerance limits (typically AGMA Q9–Q10 in well-controlled programmes). For Q11+ we recommend post-mould machining; we can quote that as a secondary operation.
- **What is your scrap rate target on industrial parts?** Below 1% across the programme life. We track scrap weekly and trigger a tool audit at 1.5%.
- **Do you handle abrasive glass-filled grades long-term?** Yes — H13 cavities, scheduled polish at [50,000-shot] intervals, gate-insert replacement built into annual maintenance budget.

**CTA block.**
**Send the part. We’ll come back with a polymer recommendation and a mouldable answer.**
**[Request an Industrial Quote]** **[See industrial case study](/case-studies/industrial-pump-impeller)**

---

#### 4.4.2 `/industries/medical`

**SEO title:** Medical Plastic Component Manufacturer India | Biocompatible
**Meta description:** Medical device housings, fluid-path components and diagnostic consumables in biocompatible polymers. Documented traceability, audit-ready inspection records.
**H1:** Medical-grade plastic components, with the documentation that makes audits painless.

**Hero subhead.** Device housings, diagnostic consumables, fluid-path components — moulded in biocompatible polymers, in a dedicated cell with controlled material flow, and shipped with the traceability records your QMS team needs.

**Component examples we manufacture (10 part types)**
- Diagnostic device housings (PC, ABS-PC)
- Single-use consumable bodies (PP, COC on request)
- Fluid-path connectors (PC, PETG)
- Vial racks and cassette holders (PP, PETG)
- Inhaler component bodies (PP, COC)
- Surgical instrument handles (PA12, PC)
- Catheter accessory components (PC, ABS)
- Pipette tip racks (PP)
- Tube and bottle caps (PP, HDPE)
- Insert-moulded brass-threaded fittings for medical assemblies

**Material expertise relevant to medical**
- **Polycarbonate (medical grades).** Optical clarity, autoclavability (with the right grade), dimensional stability.
- **PP (medical grades).** Single-use consumables, gamma-sterilisation compatibility, fluid-path safety.
- **COC (cyclic olefin copolymer).** When you need PC clarity but better drug-contact compatibility.
- **PETG.** Sterilisation-friendly, optically clear.
- **PA12.** Surgical handles and reusable instrument components.
- **TPE medical grades.** Soft-touch components and overmoulded grips.

**Compliance / quality considerations specific to medical**
- **Material traceability per resin lot.** Resin certificate retained against each batch number, retrievable for [seven years].
- **Glove handling and dedicated tooling storage.** Medical tools live in a separate rack, not on general production floor.
- **Cleanroom-adjacent moulding cell.** Controlled ingress, ESD-safe surfaces, air-quality monitoring.
- **Process validation.** IQ/OQ/PQ documentation supported on customer programmes that require it.
- **No regrind.** Medical-grade jobs run on virgin material only, regrind disabled at the press.

**Sample applications (3 scenarios, 60 words each)**

> **Diagnostic instrument housing in PC.** A diagnostic device maker needed a mid-volume (12,000/year) housing in clear medical-grade PC, with ±0.05 mm tolerance on the optical-window seat. We cut a single-cavity S136 mould, mirror-polished the optical face, and validated dimensional repeatability across 5,000 shots before sign-off.

> **Single-use fluid connector in PP.** A medical consumable startup came with a tight cost target and a regulatory submission deadline. We delivered a 4-cavity tool with hot-runner gating, validated material traceability documentation through DMF-grade resin, and shipped the first 30,000 units inside 9 weeks of PO.

> **Surgical instrument handle in PA12.** An instrument OEM moved a metal handle to PA12 to reduce weight and allow autoclave cycles. We mould-flowed the part to validate weld-line position away from grip area, cut a 1+1 family tool for the two-handle variants, and ran 8,000 units in the first year.

**Services for medical customers**
- [Mould Making →](/services/mould-making)
- [Injection Moulding →](/services/injection-moulding)
- [Insert & Overmoulding →](/services/insert-moulding)

**Medical-specific FAQs**
- **Are you ISO 13485 certified?** Not currently — we operate ISO 9001:2015 with documented procedures aligned to ISO 13485 expectations, and we partner with customers’ QMS frameworks for IQ/OQ/PQ. ISO 13485 is on our roadmap for [2026].
- **Do you support DMF / regulatory submissions?** Yes — we provide resin certificates, batch traceability records, dimensional inspection reports and process validation documentation as required for your submission. Customer-specific document templates accepted.
- **Do you have a cleanroom?** We operate a cleanroom-adjacent cell with controlled ingress, ESD surfaces and glove-only handling. A formal Class 100,000 cleanroom is a customer-funded option for high-volume single-use programmes.
- **Can you handle gamma-sterilisation-compatible materials?** Yes — gamma-stable PP, PE and selected COC grades. Material selection is part of DFM.

**CTA block.**
**Send the part and your regulatory context. We’ll quote with the documentation pack you need.**
**[Request a Medical Quote]** **[See medical case study](/case-studies/medical-device-housing)**

---

#### 4.4.3 `/industries/electrical`

**SEO title:** Electrical Plastic Parts Manufacturer | UL94 V0, Switchgear
**Meta description:** Switchgear housings, connector bodies, terminal blocks and IP-rated enclosures. UL94 V0 grades and dimensional consistency for assembly lines.
**H1:** Electrical components moulded for the line that doesn’t stop.

**Hero subhead.** Switchgear housings, connector bodies, terminal blocks, IP-rated enclosures. We mould them in flame-retardant grades that pass UL94 V0, with the dimensional consistency assembly lines need to keep their first-pass yield high.

**Component examples we manufacture (10 part types)**
- Switchgear housings and bases
- Terminal blocks and barrier strips
- Connector bodies (industrial, automotive-style)
- IP-rated enclosure shells (IP54–IP67)
- Cable glands and gland accessories
- Circuit-breaker housings
- Modular DIN-rail housings
- Lighting fixture bases (LED driver enclosures)
- Switch covers and rocker assemblies
- Insulating barriers and arc shields

**Material expertise relevant to electrical**
- **PA66 GF30 V0.** Default for switchgear and terminal blocks. UL94 V0, glow-wire compliant, dimensional stability.
- **PBT GF V0.** Connector bodies — better dielectric properties than PA66 in some applications.
- **PC FR (flame-retardant).** Transparent enclosures and lighting components.
- **PC-ABS V0.** Enclosure shells where impact strength matters.
- **PA6 V0.** Cost-sensitive applications where PA66 is overkill.
- **Ceramic-filled grades.** Specialty arc-resistant components on request.

**Compliance / quality considerations specific to electrical**
- **UL94 V0 verification.** Material certificates referencing the UL yellow card on every batch.
- **Glow-wire test (GWFI / GWIT).** Where required, we work with customer-specified material grades.
- **Dimensional stability post-moulding.** Glass-filled grades shrink anisotropically; we account for it in tool steel allowance.
- **Dielectric property control.** Mould temperature and cycle time held within validated windows to maintain bulk properties.
- **Tracking resistance (CTI).** Material grade selection per customer requirement.

**Sample applications (3 scenarios, 60 words each)**

> **3-phase terminal block in PA66 GF30 V0.** A switchgear OEM needed 200,000 terminal blocks/year, with first-pass assembly yield above 98%. We cut a 6-cavity hot-runner tool, locked the glass-fibre orientation by gate placement, and held shrinkage variation under 0.15 mm across cavities. Yield held above 99% for 18 months.

> **IP67 cable gland body in PC-ABS V0.** A cable accessory maker wanted impact strength and flame retardance in a single grade. We trialled three PC-ABS V0 compounds, settled on the grade with the right melt index for thin-wall sealing geometry, and ran a 4-cavity production tool. Field reject rate under 0.3% across 280,000 units.

> **Lighting driver enclosure in PC FR.** A lighting OEM needed a translucent enclosure that diffused LED light without compromising flame retardance. We mould-flowed the part to validate weld-line transparency, cut a single-cavity tool for the pilot, and scaled to a 2-cavity tool after pilot success. Programme is in its third year.

**Services for electrical customers**
- [Mould Making →](/services/mould-making)
- [Injection Moulding →](/services/injection-moulding)
- [Vertical Moulding →](/services/vertical-moulding)

**Electrical-specific FAQs**
- **Can you mould to UL94 V0?** Yes — we routinely run V0-rated PA66 GF30, PBT GF V0, PC FR and PC-ABS V0. Material certificates with UL yellow card reference shipped with every batch.
- **Do you handle CTI / glow-wire critical parts?** Yes — we follow the material grade your design specifies. We don’t change resin grades without written approval, ever.
- **What are typical IP-rating considerations?** IP54–IP67 housings need careful gate placement to avoid weld-lines on sealing faces. We address this at DFM and validate with mould-flow on parts where it’s borderline.
- **Can you mould flame-retardant parts at high volume?** Yes — multi-cavity hot-runner tooling on V0 grades is a routine part of our work. Tooling is sized for mid-to-high volume (50,000–500,000+ parts/year per cavity).

**CTA block.**
**Send the part with the UL spec. We’ll quote with the material grade by name.**
**[Request an Electrical Quote]** **[See electrical case study](/case-studies/electrical-switchgear-component)**

---

### 4.5 Capabilities Page

**SEO title:** Capabilities — Press Tonnage, Materials, Tool Room & QC
**Meta description:** [40T–450T] presses, in-house CNC + EDM tool room, [2 × CMM] inspection. Engineering plastics, glass-filled grades and specialty materials handled.
**H1:** Capability sheet your engineers can plan against.

**Subhead.** Tonnage range, mould envelope, polymer list, tool room equipment, inspection lab and secondary operations — all in one place. If you’re sanity-checking us against a vendor checklist, this page is structured for that.

#### Machine list

| Asset ID | Tonnage | Brand | Year | Daily capacity (shots) | Notes |
|---|---|---|---|---|---|
| IM-01 | 40T | [BRAND] | [YEAR] | 1,200 | Prototype + small parts |
| IM-02 | 60T | [BRAND] | [YEAR] | 1,400 | Engineering plastic small parts |
| IM-03 | 80T | [BRAND] | [YEAR] | 1,600 | Connector and small housings |
| IM-04 | 100T | [BRAND] | [YEAR] | 1,800 | General-purpose |
| IM-05 | 120T | [BRAND] | [YEAR] | 2,000 | Glass-filled grades |
| IM-06 | 150T | [BRAND] | [YEAR] | 2,400 | Mid-size housings |
| IM-07 | 180T | [BRAND] | [YEAR] | 2,800 | Insert and overmould |
| IM-08 | 200T | [BRAND] | [YEAR] | 3,000 | Mid-large parts |
| IM-09 | 250T | [BRAND] | [YEAR] | 3,400 | Multi-cavity hot-runner |
| IM-10 | 280T | [BRAND] | [YEAR] | 3,600 | Industrial parts |
| IM-11 | 320T | [BRAND] | [YEAR] | 3,800 | Large enclosures |
| IM-12 | 400T | [BRAND] | [YEAR] | 4,200 | Large industrial parts |
| IM-13 | 450T | [BRAND] | [YEAR] | 4,400 | Largest envelope |
| VM-01 | 60T | [BRAND] | [YEAR] | 800 | Vertical clamp, insert work |
| VM-02 | 100T | [BRAND] | [YEAR] | 1,000 | Vertical clamp, overmould |
| VM-03 | 120T | [BRAND] | [YEAR] | 1,100 | Vertical clamp, cable assembly |

(Total: [16] presses. Two-shift baseline, [24×7] for surge volumes.)

#### Materials handled (categorised)

**Commodity polymers — high volume, lower cost**
- **ABS** — housings, consumer durable parts, knobs and handles. Easy to mould, good cosmetic finish.
- **HIPS** — display fixtures, low-load cosmetic parts.
- **PP** — single-use medical consumables, caps, closures, fluid-path. Light, chemically resistant.
- **PE (HDPE / LDPE)** — tanks, caps, soft components.
- **PS** — disposable items, low-cost housings.

**Engineering polymers — performance and dimensional stability**
- **PA6 / PA66** — structural parts, gears, bushings, electrical components. PA66 GF30 is our default for metal-replacement work.
- **PC (polycarbonate)** — clear or coloured housings, optical parts, medical devices. Impact-resistant, dimensionally stable.
- **POM (acetal)** — gears, impellers, low-friction sliding parts.
- **PBT** — connectors, electrical components needing dielectric performance.
- **ABS-PC** — high-impact housings combining ABS processability with PC strength.
- **PA12** — surgical instrument parts, autoclavable handles.

**Specialty polymers — application-specific**
- **TPE / TPU** — soft-touch overmoulds, grips, gaskets.
- **PC FR / PC-ABS V0** — flame-retardant electrical applications.
- **PA66 GF V0** — switchgear and terminal blocks.
- **COC** — medical-grade clarity with drug-contact compatibility.
- **UHMWPE compounds** — wear pads, conveyor parts.
- **PEEK** — limited availability for high-temperature, high-stress small parts.
- **PA-PTFE / PA-MoS2 blends** — self-lubricating bearings.

#### Mould-making capabilities

- **CNC machining centres ([2 × ]machines).** 3-axis with [4th-axis indexing] for cavity work. P20, H13, S136, NAK80 routinely cut.
- **EDM sinking (CNC sinker EDM).** Fine-detail cavity work, deep ribs, sharp internal corners.
- **Wire-cut EDM.** Precision-fit slider components, ejector plate cut-outs, insert pockets.
- **Surface grinding.** Mould plate flatness and parallelism within [0.005 mm] across [600 mm].
- **Bench polish.** Manual polishing to A1 (mirror), A2, A3 grades. SPI-equivalent finishes.
- **Mould-flow analysis.** Moldex3D / Moldflow on parts where wall thickness is below 1.5 mm or weld-line position is critical.
- **Hot-runner integration.** Synventive, YUDO, Hasco systems specified per project.
- **Mould trial press.** Dedicated trial press for T1/T2/T3 sampling — production presses don’t get held up for trials.

#### Quality infrastructure

- **CMM (coordinate measuring machine) × 2.** Calibrated, traceable to NABL standards. Used for first-off, every 100th-shot sampling, and final batch inspection.
- **Profile projector.** 2D dimensional inspection of small features and threads.
- **Surface roughness tester.** Ra and Rz checks on cosmetic and sealing surfaces.
- **Calibrated micrometers, vernier callipers, height gauges.** Standard mechanical lab.
- **Pull-out / peel test rig.** For insert moulding adhesion validation.
- **Material moisture analyser.** Pre-moulding moisture verification on all hygroscopic polymers.
- **Melt-flow indexer.** Incoming material verification on critical batches.

#### Plant area, capacity, in-house tooling

- **Plant area:** [12,000 sq.ft.]
- **Daily output capacity:** [60,000+] shots across all presses
- **Annual production:** [20M+] parts
- **Mould design team:** [6] engineers
- **Tool room operators:** [3]
- **Press-floor operators:** [12]
- **QC team:** [4]
- **Power:** [500 kVA] sanctioned, diesel backup
- **Compressed air:** sized for full plant load with 25% headroom
- **Chiller capacity:** sized for full plant load

#### Secondary operations

- **Ultrasonic welding.** [20 kHz / 35 kHz] units for plastic-plastic joining of housings, cosmetic parts.
- **Ultrasonic insert installation.** Heat-staking of brass inserts post-mould when economical vs in-mould.
- **Pad printing.** Single and multi-colour, registration-controlled.
- **Hot stamping.** Logo and decorative foil application.
- **In-mould labelling (IML).** On selected programmes.
- **Manual assembly.** With documented work instructions and operator training records.
- **Packaging.** Blister, polybag, foam, custom-printed boxes; SKU-level barcoding.

---

### 4.6 Quality Page

**SEO title:** Quality Standards — ISO 9001, FAI, Material Traceability
**Meta description:** ISO 9001:2015. In-process and final inspection on every batch. FAI, dimensional reports and material certificates included with every consignment.
**H1:** Quality is what you ship, not what you say.

#### Quality philosophy (210 words)

Quality is treated here as the absence of defects, not as a department. The single most expensive thing a moulder can do is ship a part that fails in the customer’s assembly line — the part itself is cheap, the disruption is not. We organise the plant around catching problems before they propagate.

That means three things in practice. First, we freeze the process: every tool has a setup sheet that names temperatures, pressures, hold times and cooling rates, and the operator on the next shift sets up against that sheet, not against memory. Second, we sample continuously: first-off inspection, every-100th-shot dimensional checks, and final batch FAI. Third, we document everything: dimensional reports, material certificates, batch traceability tags, and a defect log that travels with the consignment.

We do not chase certifications for marketing. We hold ISO 9001:2015 because the discipline of internal audits keeps us honest, and because customers who audit us before placing a tooling PO want to see the framework. We are deliberately not chasing every certification a customer might want — we’d rather meet the actual quality requirement, document it well, and let the customer’s auditor confirm it on their next visit.

#### In-process quality checks

1. **Material verification at goods-in.** Every resin batch checked against COA, moisture content verified before drying, MFI sample tested on critical grades.
2. **Drying log per shift.** Polymer-specific drying programme run for the specified time at the specified dew-point. Logged and signed.
3. **Setup against frozen sheet.** Mould temperature, melt temperature, injection pressure, hold pressure, hold time, cooling time — all set against the validated parameter sheet.
4. **First-off inspection.** No production runs until first-off part passes dimensional and visual.
5. **Every 100th-shot sampling.** Sampled part dimensionally checked against critical-to-function feature list. Trends logged.
6. **Visual inspection at every shift change.** Operator-led on cosmetic parts; QC-led on medical and electrical safety-rated parts.

#### Final inspection protocol

- **FAI (First Article Inspection)** on the first batch of every new production run.
- **AQL sampling** on visual defects per the spec (typically AQL 1.0 for cosmetic, AQL 0.65 for safety-rated).
- **Dimensional report on final batch sample.** Critical-to-function features measured and logged.
- **Mechanical testing** where required: pull-out for inserts, drop test for housings, dielectric test for safety-rated parts.
- **Defect log review.** Every batch closed with a defect log signed by the QC supervisor.

#### Documentation provided to clients

- **First Article Inspection (FAI) report.** Dimensional, visual, mechanical results on the first article.
- **Dimensional reports.** On first-off, mid-batch sample, and final batch sample.
- **Material certificates.** Resin COA from supplier, batch number cross-referenced.
- **Batch traceability tag.** Resin batch, mould serial, press, shift, operator, date.
- **UL yellow card reference** (electrical) where the grade has a UL listing.
- **Process validation pack** (medical / regulated) — IQ/OQ/PQ on customer-funded validation programmes.

#### Certifications

- **ISO 9001:2015** — certificate number `[ISO_CERT_NUMBER]`, issued by `[ISSUING_BODY]`, valid through `[EXPIRY_DATE]`. Downloadable PDF: `/assets/certs/iso-9001-2015.pdf`
- **ISO 13485** — on roadmap for `[2026]`. Procedures already aligned.
- **REACH / RoHS** — material declarations available per programme on request.
- **NABL-traceable calibration** for CMM, micrometers, callipers and gauges.

#### Defect resolution and rework policy

- **Defect identified pre-dispatch.** Batch held, root cause analysis run within 24 hours, rework or remake at our cost. Customer notified before original dispatch date.
- **Defect identified at customer goods-in.** Replacement or credit within 5 working days. Root cause analysis report shared within 7 working days.
- **Field failure.** 8D-format problem report initiated within 48 hours of notification. Containment, root cause, corrective action, and verification documented.
- **Rework limits.** No part is reworked twice. A part that requires a second rework cycle is scrapped — re-handling damages parts and the process loses control.

---

### 4.7 Process Page

**SEO title:** Our Process — DFM to Dispatch | Swastik Plastic
**Meta description:** From RFQ to dispatch in six documented steps. DFM, mould design, tool build, T1–T3 sampling, production, FAI and packing — clear at every milestone.
**H1:** From your CAD file to a dimensionally inspected first batch.

#### Step 1 — Requirement Capture & RFQ (130 words)

What you provide: STEP / IGES / X_T / DWG of the part, a 2D drawing with critical dimensions and tolerances called out, intended polymer (or your preference for us to suggest), expected annual volume, target landed cost (if any), and any compliance requirements (UL, medical, automotive). What we ask: cosmetic versus structural priorities, any features that have already failed in previous moulding attempts, expected mould life, whether you want us to mould production or just supply the tool.

Turnaround: a written quote with steel grade, cavity count, lead time, tooling cost and per-part cost within 1 working day for routine RFQs. Complex parts requiring mould-flow analysis: 3 working days. We will also flag any DFM concerns at this stage — we don’t hide them in the small print.

#### Step 2 — DFM & Mould Design (130 words)

After PO confirmation we open mould design. Software: SolidWorks for CAD, Moldex3D / Moldflow for mould-flow analysis where wall thickness or weld-line position is critical. The design covers cavity layout, runner system, gating type and location, cooling channel layout, ejection mechanism, venting, slider or lifter design where required, and parting line.

Design review cycle: a draft design is shared with you within 5–10 working days depending on complexity. We mark up our DFM concerns directly on your part drawing and propose specific changes. You sign off on the design before we cut steel. No exceptions — once steel is moving on a CNC, design changes get expensive fast. Sign-off carries the steel grade, cavity count, runner type and gating in writing.

#### Step 3 — Mould Manufacturing (130 words)

Steel options: P20 for soft polymers and lower-volume tools, P20+Ni where corrosion is borderline, H13 for glass-filled and abrasive grades, S136 for medical and transparent polymers needing mirror polish. Pre-hardened 1.2738 for higher cavity hardness without post-hardening. Beryllium copper inserts where conformal cooling matters.

Machining sequence: rough mill on CNC, EDM-sink for fine cavity detail, wire-cut for precision pockets and ejector hole arrays, surface grinding for plate flatness, bench polish to specified SPI grade. Hot-runner systems integrated where specified — Synventive, YUDO, Hasco. Trial-mould assembly happens in our own assembly area, not on the customer’s production press. The mould reaches T1 only after every dimensional check on the cavity has passed.

#### Step 4 — Mould Trial & Sampling (140 words)

T1 (Trial 1): the first short-shot exploration on our trial press. We confirm the mould fills, ejects without distortion, and the runner system works. Typical T1 yields 20–30 parts; we don’t expect dimensional perfection at T1. Issues identified are logged and addressed.

T2: full process window established. We pull a 30-part dimensional sample. Each cavity, each critical-to-function feature, measured and recorded in a T2 report. Any feature outside tolerance triggers a rework decision: shim adjustment, EDM-touch-up, or polymer process change.

T3: production-condition trial. Full cycle, full hold, validated cooling time. Sample lot of 100 parts for dimensional and visual sign-off. Customer is invited to attend T3 either in person or via remote video. Sign-off is on a documented dimensional report — not on “looks fine.”

#### Step 5 — Mass Production (130 words)

After T3 sign-off we schedule production. Production scheduling considers your committed delivery date, our press load, polymer availability, and any surge capacity needed. The setup sheet from T3 is frozen — every operator setting up the tool sets to those parameters. In-process QC samples every 100th shot for dimensional checks. Cycle time, scrap rate and uptime are logged per shift.

Batch traceability: every consignment carries a batch tag with resin batch number, mould serial, press number, shift, operator and date. For medical and regulated parts, the trace is filed against the part number for [seven years] minimum. We don’t mix batches — if you order 10,000 parts, you get a continuous batch unless we tell you otherwise (and we ask first).

#### Step 6 — Inspection, Packing & Dispatch (120 words)

Final inspection on every batch: FAI on first batch of a new run, AQL sampling on visual defects, dimensional report on a final batch sample, and any mechanical testing the spec requires (pull-out, peel, dielectric, drop). Defect log reviewed and signed off by the QC supervisor.

Packing: per spec — bulk polybag, blister-packed, foam-protected, ESD-safe for electronics, anti-static for medical, custom-printed boxes for SKU-ready programmes. SKU-level barcoding on request. Documentation pack: dimensional report, material certificate, batch traceability tag, packing list, invoice. Logistics: FOB Mumbai by default; door-to-door via our forwarder for international consignments. Customs paperwork (commercial invoice, packing list, BL/AWB) is part of our standard pack.

---

### 4.8 Case Studies

#### 4.8.1 `/case-studies/medical-device-housing`

**SEO title:** Medical Device Housing in PC — ±0.05 mm on Mating Face
**Meta description:** Single-cavity S136 mould, biocompatible PC, mirror polish on optical-window seat. T1 dimensionally inside tolerance on every critical feature.
**H1:** Diagnostic device housing — biocompatible PC with ±0.05 mm on mating face.

**Client industry (anonymised):** Medical diagnostic device maker, [Pune, India]. Product is a benchtop in-vitro diagnostic instrument; the moulded part in this case study is the upper housing that seals against an optical reading chamber.

**Challenge.** The customer was relaunching the diagnostic instrument with a redesigned housing. The previous housing had been moulded by a different vendor in PC, but had run into two recurring problems: the mating face that sealed against the optical chamber drifted dimensionally across batches (±0.15 mm against a ±0.05 mm spec), and the optical window seat had visible flow marks that affected reading accuracy. The customer’s NPI deadline was 14 weeks from PO; they needed first-article submission to their internal validation team in 9 weeks.

**Our approach.** We started with a full DFM review on their drawing. The mating face issue traced to gate location — the existing gate was positioned such that the mating face was the last region to fill, and packing pressure was variable across cavities. Our redesign moved the gate to the centre of the dome, with a sub-gate feeding the optical-window seat region. Mould-flow simulation in Moldex3D confirmed uniform packing across the mating face. The optical-window seat was redesigned with a tapered approach to eliminate the flow stagnation point that had been causing visible flow marks.

**Mould / process specifics.** Single-cavity tool in S136 (corrosion-resistant, mirror-polishable). Cavity face polished to A1 (mirror) on the optical-window seat, A2 elsewhere. Cooling channels on a conformal layout designed against the dome geometry. Hot-tip gating to eliminate sub-gate flash. Cycle time validated at 38s for the first lot; subsequent process optimisation in production reduced it to 31s.

**Outcome.**
- T1 sample dimensionally inside tolerance on every critical-to-function feature on the first trial.
- Mating face dimensional variation: ±0.03 mm across 1,000-shot validation lot, against ±0.05 mm spec.
- Optical-window seat: zero visible flow marks at A1 polish.
- T3 sign-off achieved 8 weeks from PO; first-article submission to customer’s validation team 9 weeks from PO (against the 9-week deadline).
- Production cycle time reduced from initial 38s to 31s in the first 60 days, freeing press capacity equivalent to [4,000] parts/year.
- Reject rate in production: 0.4% across 18 months and 22,000 units.

> **Client quote (placeholder):**
> “Swastik’s DFM review caught the gate location issue our previous moulder had missed for two years. T1 was dimensionally clean — that doesn’t happen to me often. We finished validation on schedule, which is the part that mattered most.”
> **— [Name], Head of NPI, [Medical Device Company], Pune**

**Related:** [Mould Making](/services/mould-making) · [Medical Industry](/industries/medical)

---

#### 4.8.2 `/case-studies/electrical-switchgear-component`

**SEO title:** Switchgear Terminal Block — V0 PA66 GF30, 200K/Year
**Meta description:** 6-cavity hot-runner tool, V0-rated PA66 GF30, scrap rate held under 0.4% across 18 months and 380K parts on a 3-phase terminal block.
**H1:** 3-phase terminal block — V0 PA66 GF30, 200K/year, scrap under 0.4%.

**Client industry (anonymised):** Indian switchgear OEM, [Vadodara, Gujarat]. Product is a modular 3-phase terminal block sold to electrical panel builders. Annual volume: 200,000 units. Critical-to-function features: dimensional consistency on the screw terminal pocket, V0 flame rating verified per UL94, dielectric integrity post-mould.

**Challenge.** The customer’s incumbent supplier was running the part on a 3-cavity hot-runner tool that had been built abroad and was running 1.4% scrap on weld-line porosity around the terminal pockets. Field complaints had begun on dielectric breakdown at the weld-line zone in environments with moisture ingress. The customer wanted a new tool, a new vendor, and a documented process that would hold scrap under 0.5% across the next two years.

**Our approach.** We started with a Moldex3D simulation on the existing 3-cavity layout to understand the weld-line behaviour. The simulation confirmed that the gate angle and runner balance were causing weld-line knit-pressure to fall below the threshold needed for full molecular bonding in PA66 GF30. We proposed a 6-cavity hot-runner tool — doubling the cavities both improved unit economics and let us redesign the gating to relocate weld-lines away from the dielectric-critical zones. Mould steel: H13 (glass-fibre is abrasive, P20 would have shown wear inside 12 months). Hot-runner: Synventive valve-gate, with each tip individually controllable for cavity-to-cavity balancing.

**Mould / process specifics.** 6-cavity hot-runner tool in H13. Cavity blocks individually shimmed for first-article dimensional balance. Frozen process parameters: melt temperature 295°C, mould temperature 95°C, hold pressure 850 bar, hold time 4.2s, cooling time 18s. Total cycle: 28s. Material drying: 4 hours at 80°C, dew-point monitored. Each batch tested for dielectric strength on a sample.

**Outcome.**
- T1 sample tested on a 200-shot run hit 0.3% scrap.
- Production rolled out at 0.4% scrap rate, held under 0.5% across 18 months and 380,000+ parts.
- Tool cost recovered (vs unit-cost saving from cavity doubling) in 8 weeks of production.
- Field dielectric failures: zero across the 18-month review period.
- Average lead time on reorders: 3 weeks against the customer’s 6-week purchasing window.

> **Client quote (placeholder):**
> “We moved the programme to Swastik because their mould-flow analysis explained the field failures we’d been seeing. The tool came in at lead time, and the scrap rate has held. That’s the boring part, and that’s the part we wanted.”
> **— [Name], Procurement Head, [Switchgear OEM], Vadodara**

**Related:** [Injection Moulding](/services/injection-moulding) · [Electrical Industry](/industries/electrical)

---

#### 4.8.3 `/case-studies/industrial-pump-impeller`

**SEO title:** Industrial Pump Impeller in POM — Cycle Time -16%
**Meta description:** Engineering plastic impeller, dimensional control on eye and vane angles. Cycle time reduced 32s → 27s, scrap rate under 0.6% over 14 months.
**H1:** Centrifugal pump impeller in POM — dimensional precision and a cycle-time win.

**Client industry (anonymised):** Indian industrial pump OEM, [Coimbatore, Tamil Nadu]. Product is a centrifugal pump for water-handling applications. The moulded part is the impeller — a precision part where eye diameter and vane angles directly control hydraulic efficiency. Annual volume: 80,000 units.

**Challenge.** The customer had been running the impeller on a 2-cavity tool with a different moulder and was seeing 1.8% scrap on a critical balance feature: post-moulding the impeller went through a balance check and parts that exceeded the imbalance threshold were scrapped. Imbalance traced primarily to ejector pin marks on the back face (which distorted the part on release) and inconsistent shrinkage on the vane tips. The customer wanted to keep the existing tool if possible — they had paid for it — and improve the process. They also wanted to understand if a cycle time improvement was achievable.

**Our approach.** We took the existing tool in for an audit. The audit found a worn ejector that was distorting the back face on release; the ejector assembly had not been refurbished since the tool was new. We replaced the ejector assembly during the first batch changeover. We then reset the process from scratch: validated dryer cycle for POM (POM is sensitive to moisture-induced surface degradation), reset hold pressure based on vane-tip thickness, and added a controlled cooling-circuit upgrade in month 4 of production that uniformed mould-temperature across the cavity.

**Mould / process specifics.** Existing 2-cavity P20 tool, refurbished. New ejector assembly with hardened pins. Cooling circuit upgrade in month 4 (additional channel in the vane core area, conformal-cooled insert). Frozen process: melt temperature 195°C, mould temperature 75°C, hold pressure 700 bar, hold time 3.5s, cooling time initially 22s reduced to 16s after circuit upgrade. Each batch sample-balanced against the customer’s threshold.

**Outcome.**
- Scrap rate dropped from 1.8% to 0.4–0.6% (across 14 months and 280,000 parts).
- Cycle time reduced from 32s to 27s after cooling-circuit upgrade — equivalent to ~15% additional capacity from the same tool.
- Eye-diameter dimensional variation held within ±0.04 mm (spec ±0.08 mm).
- Tool refurbishment paid back in 9 weeks of production through scrap reduction alone.
- The customer extended the contract for 3 additional years and added a second SKU on a new tool we cut.

> **Client quote (placeholder):**
> “Most moulders would have asked us to pay for a new tool. Swastik refurbished the existing tool, fixed the process, and gave us a cycle time improvement we hadn’t even asked for. That’s a different kind of vendor.”
> **— [Name], Operations Director, [Pump OEM], Coimbatore**

**Related:** [Mould Making](/services/mould-making) · [Industrial Industry](/industries/industrial)

---

### 4.9 Insights / Blog

#### 4.9.1 Article briefs (8 — 2 full below, 6 outlines)

**Brief #3 — Mould lead time in India: realistic timelines by mould complexity**
- **Slug:** `/insights/mould-lead-time`
- **Target keyword:** *mould lead time in india*
- **Word count:** 900
- **Audience:** Persona A (procurement) + Persona C (founder)
- **Structure:** intro on why moulders quote different lead times → table of typical lead times by mould type (single P20, multi-cavity P20, family, hot-runner, slider, two-shot, refurbishment) → factors that compress lead time (steel availability, design freeze discipline, customer responsiveness on T1 sign-off) → factors that stretch it (design changes mid-cut, sub-let work, hot-runner imports, holidays) → red flags in vendors who quote unrealistically short lead times → how Swastik commits dates in writing.
- **Internal links:** `/services/mould-making`, `/process`, `/insights/12-point-vendor-checklist`
- **CTA:** brochure download.

**Brief #4 — ABS vs PP vs PC: choosing the right polymer for industrial enclosures**
- **Slug:** `/insights/abs-vs-pp`
- **Target keyword:** *abs vs pp for industrial parts*
- **Word count:** 1,100
- **Audience:** Persona B (design engineer)
- **Structure:** when an enclosure is the wrong question (start with environment, load, regulatory) → property comparison table (tensile, impact, HDT, chemical resistance, UV, cost band) for ABS, PP, PC, ABS-PC → use-case matrix (consumer durable, industrial guard, electrical V0, outdoor) → cost-vs-performance Pareto → manufacturability notes (gate marks, weld lines, draft) → decision tree.
- **Internal links:** `/capabilities` (materials section), `/services/injection-moulding`, `/industries/industrial`
- **CTA:** material selection guide download.

**Brief #5 — DFM red flags: 7 design issues that increase your tooling cost**
- **Slug:** `/insights/dfm-red-flags`
- **Target keyword:** *dfm checklist for injection moulded parts*
- **Word count:** 1,300
- **Audience:** Persona B
- **Structure:** intro on why DFM is the cheapest cost reduction → 7 red flags with diagrams: (1) inadequate draft, (2) uniform-but-thick walls, (3) sharp internal corners, (4) undercuts that force sliders, (5) bosses without ribs and unsupported, (6) cosmetic surfaces with weld lines, (7) tight tolerance on shrink-prone features → what each costs in tooling and per-part terms → how to fix each.
- **Internal links:** `/services/mould-making`, `/process`, lead magnet for full DFM checklist PDF
- **CTA:** DFM checklist PDF download.

**Brief #6 — Understanding mould tonnage: how to spec injection machine size**
- **Slug:** `/insights/mould-tonnage-spec`
- **Target keyword:** *injection moulding tonnage calculation*
- **Word count:** 1,000
- **Audience:** Persona B
- **Structure:** clamping force formula (projected area × cavity pressure × safety factor) → typical cavity pressure ranges by polymer (PP: 200–400 bar, PA66: 600–900 bar, PC: 700–1000 bar) → worked examples on three parts of different sizes → why you should not just spec “bigger is safer” (cycle time, energy cost, mould cooling balance) → how Swastik selects press tonnage at quote stage.
- **Internal links:** `/capabilities`, `/services/injection-moulding`
- **CTA:** RFQ.

**Brief #7 — Multi-cavity vs single-cavity moulds: cost vs throughput math**
- **Slug:** `/insights/multi-vs-single-cavity`
- **Target keyword:** *multi cavity vs single cavity mould*
- **Word count:** 1,200
- **Audience:** Persona A + Persona C
- **Structure:** intro on the trade-off → break-even calculation framework (annual volume, tooling cost delta, per-part savings, shift cost) → worked example at 50k, 200k, 1M annual volumes → hot-runner add-on math → when single-cavity wins (low volume, high mix, prototype validation) → when multi-cavity wins (committed volume, cycle-time-bound parts) → family moulds as a third option.
- **Internal links:** `/services/mould-making`, `/services/injection-moulding`
- **CTA:** RFQ with cost calculator.

**Brief #8 — Why mould flow analysis matters for medical components**
- **Slug:** `/insights/mould-flow-medical`
- **Target keyword:** *mould flow analysis medical*
- **Word count:** 950
- **Audience:** Persona B (medical)
- **Structure:** what mould-flow analysis predicts (fill pattern, weld lines, air traps, cooling time, sink risk, residual stress) → why medical components specifically need it (thin walls for autoclavability, weld-line position on sealing faces, residual stress affecting biocompatibility) → 3 case examples (single-use connector, instrument housing, fluid-path component) → when it’s overkill (commodity high-volume parts) → how Swastik integrates it into DFM.
- **Internal links:** `/industries/medical`, `/case-studies/medical-device-housing`
- **CTA:** medical capability brochure.

---

#### 4.9.2 Full Article #1 — *How to choose an injection moulding partner in India: a 12-point checklist*

**Slug:** `/insights/12-point-vendor-checklist`
**Target keyword:** *how to choose an injection moulding vendor*
**SEO title:** How to Choose an Injection Moulding Partner in India — 12-Point Checklist
**Meta description:** A practical 12-point checklist for picking an injection moulding vendor in India — from in-house tooling to mould ownership clauses to pricing transparency.
**H1:** How to choose an injection moulding partner in India: a 12-point checklist
**Featured image alt-text:** Mould design engineer reviewing a CAD drawing on a CNC-equipped tool room floor.

> **Pull quote:** “The cheapest moulder is rarely the cheapest moulder. The total cost shows up in the rework cycle, the missed launch date, and the field failure six months in.”

##### Why this checklist exists (intro, 180 words)

Injection moulding is one of the few categories where the cost of a wrong vendor decision is invisible at PO stage and obvious six months in. A poorly chosen vendor can deliver tooling that needs three rounds of rework, blow your launch date, and then ghost you when you ask for a small batch reorder. A well-chosen vendor will catch the design problem at quote stage, deliver T1 inside lead time, and still be there when you need to reorder for a new geography in 2027.

The challenge for most procurement and engineering teams is that vendor evaluation in this space relies on vague heuristics — “they seem competent on the call,” “their factory looks busy,” “their quote was lowest.” None of those signals are reliable predictors of how a programme will actually run.

This checklist is a practical, twelve-point framework we’ve refined over our two decades on the moulder side of the table. Half the items are things customers regularly ask. Half are things customers should ask but typically don’t.

##### The 12 checks

###### 1. Is the mould being cut in their tool room or sub-let?
Sub-let tooling is the single biggest source of vendor accountability problems in this industry. If your moulder has sub-let the cavity work to a third-party tool room, then the engineer running your trial has no design-stage relationship with the engineer who cut the steel. When dimensional issues come up — and they always come up at T1 — the diagnostic loop runs through three parties instead of one. **Ask:** “Is the cavity work happening on your floor? May I see your tool room?” If the answer is yes, walk it.

###### 2. Are they specifying steel grade by name?
A quote that says “suitable tool steel” is a quote that hasn’t made the decision yet. Tool steel directly determines mould life, polymer compatibility (glass-filled grades will eat P20 in 12 months), polish quality (S136 gets to mirror, P20 doesn’t), and corrosion behaviour (PVC and some flame-retardants outgas chlorides that corrode standard tool steel). **Ask:** “What steel grade is this quote based on, and why?” The answer should be specific: P20, P20+Ni, H13, S136, NAK80. If they shrug, the quote is not yet a quote.

###### 3. Will they share a DFM marked up on your drawing?
Quoting a part as-drawn is what bad moulders do. Marking up your drawing with mouldability concerns — draft, wall thickness, gate location, weld-line position, undercut handling — is what good moulders do. The DFM is also the first proof of engineering depth: you can see in the markup whether the engineer understands plastics or just trades parts.

###### 4. Do they run mould-flow analysis on borderline parts?
Mould-flow analysis (Moldex3D, Moldflow, Autodesk Moldflow Insight) is essential for parts where wall thickness is below 1.5 mm, where weld-line position affects function, or where cooling time dominates cycle. Many moulders skip it because the software licence is expensive and the time investment is real. The cost of skipping it is paid in rework cycles. **Ask:** “Will you run a mould-flow on this part? If not, why not?”

###### 5. What does their T1, T2, T3 sampling protocol actually look like?
Sampling discipline is the single most reliable indicator of process maturity. A moulder who hands you a 5-piece T1 sample and asks you to “sign off” is not running a controlled process. A moulder who gives you a documented T2 dimensional report on every cavity, every critical-to-function feature, and asks you to sign each line, is. **Ask:** “Show me a T2 dimensional report from a recent project (anonymised is fine).”

###### 6. Who owns the mould after you pay for it?
This sounds obvious. It is not, and we have seen too many small customers stuck in mould-ownership disputes. The mould you pay for should be your asset, named on the PO, with explicit hand-over rights including the design files. **Ask:** “If I want to take this tool elsewhere in two years, what is the process? Is it written into the PO?”

###### 7. How do they handle resin price volatility?
Resin prices in India are volatile by global standards. PP and ABS can move 15–20% inside a quarter on a feedstock or import-duty shock. A vendor who offers you a quote without naming a price-validity window is either ignoring the risk or planning to absorb it (until they can’t). A mature vendor will name a window — typically 90 days — and a re-quote rule for the resin component beyond a defined threshold. **Ask:** “How long does this quote hold? What is the re-quote trigger?”

###### 8. What documentation comes with each consignment?
The minimum for a serious B2B moulder: dimensional report, material certificate (resin batch traced), batch traceability tag, packing list. For medical, add resin DMF reference and IQ/OQ/PQ documentation as customer-funded. For electrical safety-rated parts, add UL yellow card reference. **Ask:** “Show me the documentation pack from a recent shipment.”

###### 9. Are they ISO 9001:2015 certified, and what does the certificate actually say?
ISO 9001:2015 is the floor, not the ceiling. The cert itself is also worth reading: scope, exclusion clauses, certifying body. A scope that excludes “design and development” is meaningful for a custom moulder — it limits what the certification covers. **Ask:** “Can I see the cert?” And then read it.

###### 10. Will they let you do a plant audit before you place a tooling PO?
A vendor who will not allow a plant tour before a five- or seven-figure tooling commitment is signalling something. A vendor who actively encourages it is signalling something else. The plant tour also catches the things that don’t show up in any document: housekeeping, tool storage discipline, calibration sticker dates, operator training board, compressed-air leak rate.

###### 11. How is their communication structured during a programme?
This sounds soft. It isn’t. The single most expensive thing a moulder can do during a programme is sit on a problem until it’s a crisis. Ask how they handle daily / weekly status, who your single point of contact is (it should be one person, not a department), and what the escalation path is when something goes wrong. **Ask:** “Who is my project engineer? Are they the person who quoted this, or someone different?”

###### 12. What does their reorder economics look like?
Tooling moulders often quote sharp on the first run to win the programme, then re-rate aggressively on reorders when you have no leverage. A vendor who tells you upfront how reorder pricing will work — typically a transparent resin-plus-conversion model — is a vendor who plans to be there for your reorder. A vendor who avoids the question is one to be wary of.

##### A note on price (closing, 110 words)

Price is checked last on this list, deliberately. Not because price doesn’t matter — it always matters — but because price without the other 11 items in place is just a number on a quote that won’t survive contact with reality. The cheapest moulder is rarely the cheapest moulder. The total cost shows up in the rework cycle, the missed launch date, the field failure six months in.

If you’re evaluating moulders right now and you’d like to put this checklist against us, send us a sample drawing. We’ll come back with answers to all 12 questions in writing — and a quote.

##### CTA
**Have a part to quote? Run this checklist on us.**
**[Send Drawing for Quote]** **[Download the printable checklist PDF]**

##### Article schema (FAQPage block for the in-article Q&A — embed as JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to choose an injection moulding partner in India: a 12-point checklist",
  "image": "https://swastikplastic.co.in/assets/img/insights/12-point-checklist.jpg",
  "author": { "@type": "Organization", "name": "Swastik Plastic" },
  "publisher": { "@id": "https://swastikplastic.co.in/#org" },
  "datePublished": "2025-04-01",
  "dateModified": "2025-04-01",
  "mainEntityOfPage": "https://swastikplastic.co.in/insights/12-point-vendor-checklist"
}
```

---

#### 4.9.3 Full Article #2 — *Insert moulding vs overmoulding: when to use which*

**Slug:** `/insights/insert-vs-overmould`
**Target keyword:** *difference between insert moulding and overmoulding*
**SEO title:** Insert Moulding vs Overmoulding — When to Use Which
**Meta description:** A practical decision guide on insert moulding vs overmoulding for Indian manufacturers. Tooling cost, polymer-pair compatibility, jig design and volume math.
**H1:** Insert moulding vs overmoulding: when to use which
**Featured image alt-text:** Brass threaded insert and TPE overmould grip on injection-moulded substrate.

> **Pull quote:** “The vocabulary problem is half the issue. The engineering problem is whether your part needs an insert held in place by polymer, or a soft layer bonded onto a hard substrate. Different decisions, different tooling, different costs.”

##### Why this confusion exists (intro, 200 words)

Walk into ten Indian moulding plants and ask what insert moulding is, and you will get six different answers. Some shops use insert moulding to mean any moulding process where a non-polymer insert is encapsulated. Some use it interchangeably with overmoulding. Some restrict it specifically to threaded inserts. Some include two-shot moulding under the same banner. The terminology drift makes it hard for design engineers to know what process they actually need, and harder for procurement teams to compare quotes apples-to-apples.

The vocabulary problem is half the issue. The engineering problem is more useful: does your part need an insert (a metal or pre-moulded component) held in position by polymer flowing around it, or does it need a soft layer (typically a thermoplastic elastomer) bonded onto a hard substrate? Different decisions, different tooling, different costs.

This article uses the working definitions our shop floor uses, applies them to common Indian B2B applications (industrial sensors, electrical connectors, medical assemblies, consumer ergonomic grips), and gives you a decision tree to apply to your own part.

##### Working definitions

**Insert moulding.** A non-polymer or pre-moulded component (the “insert”) is loaded into the cavity before the shot. Polymer is injected, flowing around the insert and encapsulating it. The insert is now mechanically held by the polymer — sometimes augmented by knurls, grooves, or undercuts on the insert. Examples: threaded brass inserts in housings, steel pins in connector bodies, magnets in sensor bodies, PCB-embedded encapsulation.

**Overmoulding.** A previously-moulded plastic substrate is loaded into a second cavity and a second polymer (typically a softer one, often a thermoplastic elastomer) is injected to form a layer on the substrate. The bond is typically chemical — the two polymers are chosen for compatibility — but mechanical undercuts can supplement. Examples: TPE soft-touch grip on a PP handle, rubber-feel button on an ABS button cap, TPU bumper on a PC housing.

**Two-shot moulding.** A specialised process that combines insert moulding and overmoulding in a single tool. The substrate is moulded in the first cavity, the tool rotates, and the overmould is shot onto the substrate without ejecting it. Faster per part than separate-cavity overmoulding, but requires expensive specialised tooling (twin-injection presses, rotating moulds). Volume threshold: usually 200,000+ parts/year to justify.

##### Decision tree

The decision is mostly a question of two variables: what kind of component you’re combining (metal vs polymer), and the volume.

| Component pairing | Volume range | Recommended process |
|---|---|---|
| Metal insert + polymer | Any | Insert moulding |
| Hard polymer + soft polymer (chemically bondable) | <200k/year | Overmoulding (separate cavities) |
| Hard polymer + soft polymer | >200k/year | Two-shot moulding |
| Pre-moulded substrate + functional insert | Any | Insert moulding (with the substrate as insert) |
| Magnet / PCB encapsulation | Any | Insert moulding |
| Decorative second colour on existing part | Mid–High | Two-shot or in-mould decoration |

##### Polymer-pair compatibility for overmoulding (the table everyone needs)

Not all polymer pairings will bond. Most published overmoulding charts are accurate but generic. The practical reality:

- **TPE (SEBS-based, generic) on PP** — bonds well chemically. Default for soft-touch grips on PP handles.
- **TPE (SEBS-based) on ABS** — bonds adequately, may need primer or mechanical undercut for high pull-off loads.
- **TPE (SEBS-based) on PC** — does not bond chemically. Use bondable TPE grade or rely on mechanical undercut.
- **TPU on PC** — bonds well. Good for impact-resistant overmould zones.
- **TPU on ABS** — bonds adequately.
- **Soft PVC on rigid PVC** — chemical bond, good.

If you are not 100% certain on the bond reliability, peel-test the bond on a sample lot. We do this routinely on overmould programmes — it is a 30-minute test and it prevents a 30,000-part recall.

##### Tooling cost considerations

- **Insert moulding tool.** Single tool, with insert-loading provisions (jig, fixturing, sometimes pneumatic shuttles for high volume). Cost: typical single-cavity insert tool ranges from ₹3 lakh to ₹12 lakh depending on cavity complexity and jig sophistication.
- **Overmoulding (separate cavities).** Two tools: substrate tool and overmould tool. Each is a standard injection mould but with the substrate-handling fixturing on the overmould tool. Cost: roughly 1.6–1.8× a single-cavity tool budget.
- **Two-shot tool.** One tool, twin-cavity, typically integrated to a twin-injection press with rotating mould plate. Cost: 2.5–4× a single-cavity tool, plus the press requirement (most general-purpose presses don’t have the second injection unit). Cost-justified only at volume.

##### Jig design — the part most quotes underprice

For insert moulding, the jig is the engineering. A well-designed jig fully constrains the insert in all six degrees of freedom. A poor jig allows axial play, rotational drift, or sideways movement — all of which show up at shot 50,000 as a creeping reject rate. We have taken on programmes from competitors where the jig had been treated as a tooling afterthought; in every case, redesigning the jig was the entire fix.

When you’re evaluating a quote for insert moulding work, ask specifically: who designs the jig, where is it built, what does the validation lot look like (we recommend 30 parts with pull-out testing on each)? A vendor that doesn’t treat jig as a deliverable will deliver jig-shaped problems.

##### A practical example — when each wins

**Case 1: Ergonomic handle for an industrial tool, 50,000/year.** The handle has a hard PP core for structural strength and a TPE overmould for grip. Volume is 50,000/year, well below the two-shot threshold. Recommendation: separate-cavity overmoulding. Two tools, but the per-part cost on a non-twin-shot press is acceptable at this volume.

**Case 2: Same handle, 500,000/year.** Now we’re into two-shot territory. The capital cost of a twin-injection press and a rotating tool pays back inside 12–18 months on cycle-time savings alone (two-shot eliminates the substrate-handling time between cavities).

**Case 3: Industrial sensor with brass M3 inserts, 80,000/year.** Insert moulding, full stop. Even at higher volumes, brass-insert applications are insert moulding territory — there is no overmoulding alternative because the insert is metal, not polymer.

**Case 4: Medical fluid connector with two stiffness zones (rigid body, soft seal lip).** Two-shot is technically possible but Class II medical applications typically have stricter validation requirements that favour separate-cavity overmoulding (each shot validated independently). Recommendation: separate-cavity overmoulding even at high volumes.

##### Closing (130 words)

Insert moulding versus overmoulding is rarely a binary technology choice. It is a stack of decisions: what are you combining, how much of it do you need, what is the bond requirement, and what jig or tooling sophistication can the volume justify. The mistake we see most often is engineers anchoring on the term they’ve heard before — usually overmoulding — and then specifying a process that doesn’t fit their part or volume. Working backwards from the components and the volume usually points cleanly at one answer.

If you have a part with combined materials and you’re not sure which way to go, send it to us. We will tell you which process fits, what the tooling investment looks like, and where the break-even volume is.

##### CTA
**Have a combined-material part? Send the assembly drawing.**
**[Get a Process Recommendation]** **[Read insert moulding case study](/case-studies/medical-device-housing)**

---

### 4.10 FAQ Page

**SEO title:** Frequently Asked Questions — Swastik Plastic
**Meta description:** Common questions on capabilities, materials, tooling, lead time, quality, IP, pricing and shipping for Swastik Plastic, Mumbai.
**H1:** Frequently asked questions

#### Capabilities

**Q1. What press tonnage range do you operate?**
We run [16] injection moulding presses from [40T] to [450T], plus [3] vertical-clamp presses from [60T] to [120T] for insert and overmould work. The mix is biased toward the [80T–250T] range, which covers most engineering-plastic applications for industrial, medical and electrical components. If your part requires tonnage outside our envelope, we will tell you on the first call rather than try to force-fit it onto an undersized press.

**Q2. Do you make moulds in-house or outsource?**
All cavity work is cut on our own floor, in our tool room. We have CNC machining centres, sinker EDM, wire-cut EDM, surface grinding and bench polish — all in-house. Hot-runner systems (Synventive, YUDO, Hasco) are bought-in and integrated by our tool room. We do not sub-let any cavity work — that single discipline accounts for most of our quality consistency on tooling.

**Q3. What is the largest mould you can build?**
Our current envelope handles moulds up to approximately [800 × 600 × 500 mm]. Cavity counts up to [32]. Beyond that envelope we partner with a qualified larger tool room — but we’d typically tell you upfront if your part is on the edge so you can decide whether to stay in our scope or go elsewhere.

**Q4. Can you do mould-flow analysis?**
Yes — we run Moldex3D / Moldflow on parts where wall thickness is below 1.5 mm, where weld-line position matters cosmetically or structurally, or where the customer specifically asks for it. The simulation report becomes part of your project file and informs the gate location, runner balance, and cooling layout.

#### Materials

**Q5. What materials can you mould?**
Commodity grades: ABS, PP, PE, PS, HIPS. Engineering grades: PA6, PA66, PC, POM, PBT, ABS-PC, PA12. Specialty: TPE, TPU, glass-filled grades (PA66 GF30, PC GF20, PBT GF), flame-retardant grades (PC FR, PC-ABS V0, PA66 GF30 V0), and PEEK on smaller volumes. Medical grades and COC available on programmes that justify the resin sourcing. If you have a specific grade in mind, send the resin datasheet — we’ll confirm we can run it.

**Q6. Can you handle medical-grade plastics?**
Yes. We run medical-grade PP, PC, PETG and PA12 routinely. Medical jobs run in a dedicated cell with controlled material flow, glove-only handling, no regrind, and full batch traceability. We provide resin certificates with DMF references, dimensional inspection records, and IQ/OQ/PQ documentation as required for your submission.

**Q7. Do you handle flame-retardant grades for electrical applications?**
Yes — PA66 GF30 V0, PBT GF V0, PC FR, PC-ABS V0 are routine. We ship every batch with a material certificate that references the UL yellow card for the resin. Glow-wire-rated and CTI-critical parts are run on the customer-specified grade — we never substitute resin grades without written approval.

**Q8. Can you supply the resin or do I have to nominate the supplier?**
We can supply standard grades from our qualified resin distributors (LG, Mitsui, Sabic, Reliance, BASF, Lanxess, Covestro, Solvay, depending on grade). For customer-nominated specific grades, you nominate the supplier, we buy on your behalf or through your free-issue arrangement. Either model works.

#### Tooling & lead time

**Q9. What is your typical mould lead time?**
- **Single-cavity P20 cold-runner:** 6–10 weeks
- **Multi-cavity (2–4) P20 cold-runner:** 8–12 weeks
- **Multi-cavity hot-runner:** 10–14 weeks
- **Family moulds and complex slider tools:** 12–16 weeks
- **Refurbishment of existing tooling:** 2–6 weeks depending on scope
- **Two-shot tooling:** 16–22 weeks
We commit lead time in writing at PO stage. If we anticipate a slip, we communicate it before it happens, not after.

**Q10. Who owns the mould after manufacturing?**
You do. The PO names you as the tool owner. We hold the mould in our shop only as long as you’re running parts on it. You receive: the physical mould, all design files (2D and 3D), spare ejector pin set, and a maintenance log. There are no clawback clauses, no “design ownership” carve-outs, no surprise charges if you decide to take the tool elsewhere. This is in our standard PO terms.

**Q11. How is tooling priced?**
Our tooling quote itemises: cavity work, runner system (cold or hot), mould base, mould-flow analysis (if specified), trial cost, and any DFM-driven design adjustments. The quote names the steel grade by name (P20 / H13 / S136). We do not bury costs in “miscellaneous” line items. The first trial (T1) is included in the tooling cost. Subsequent trials (T2, T3) for design changes you initiate are billed separately; trials for issues we caused are at our cost.

**Q12. Do you do mould refurbishment?**
Yes. Re-polish, ejector pin replacement, gate insert replacement, runner re-balancing, surface re-texture, and individual cavity re-cuts when one cavity is producing scrap and the rest are fine. Send us the mould layout and a defect description — we’ll scope it and quote within 5 working days.

#### Quality & compliance

**Q13. Are you ISO 9001 certified?**
Yes — ISO 9001:2015, certificate number `[ISO_CERT_NUMBER]`, issued by `[ISSUING_BODY]`. The certificate scope covers design and manufacture of injection moulds and moulded plastic products. Downloadable PDF available on the Quality page.

**Q14. Are you ISO 13485 certified for medical?**
Not currently. We operate ISO 9001:2015 with documented procedures aligned to ISO 13485 expectations, and we partner with customers’ QMS frameworks for IQ/OQ/PQ on medical programmes. ISO 13485 is on our roadmap for [2026].

**Q15. What documentation do you provide with shipments?**
Standard pack: dimensional report (first-off and final batch sample), material certificate (resin batch traced to supplier COA), batch traceability tag (resin batch / mould serial / press / shift / operator / date), packing list, invoice. Industry-specific additions: UL yellow card reference for V0-rated electrical parts, DMF reference for medical resins, REACH/RoHS declarations on request, IQ/OQ/PQ pack on customer-funded validation programmes.

**Q16. What tolerances can you hold?**
Default DIN 16742 CT4–CT5 on most engineering-plastic parts, which translates roughly to ±0.05 to ±0.15 mm on typical features depending on size. We can tighten to ±0.02 mm on critical features when justified by tooling design. Tolerances tighter than CT3 are typically achieved by post-mould machining as a secondary operation. We tell you at quote stage what tolerance class is realistic for your part.

#### Pricing & MOQ

**Q17. What is your minimum order quantity?**
We don’t set a fixed MOQ across the shop. Production batches typically start at 500 pieces. Prototype runs go down to 100 pieces, billed as a sampling job. We’d rather quote you honestly on a small run than promise unrealistic per-part economics on a volume you don’t actually need.

**Q18. Do you do small-batch production?**
Yes. About [25%] of our active programmes run below [10,000 units/year]. Small-batch programmes are quoted with the realistic per-part cost — we don’t penalise you for ordering small, but we’re also transparent that single-cavity tooling and lower run efficiency mean per-part cost will reflect that.

**Q19. How long does your quoted price hold?**
Standard quote validity is 90 days. Within that 90-day window the quoted price holds at the quoted resin band. If the resin index moves more than [±5%] over that period, we re-quote on the resin component only — tooling and labour costs do not move. This is in our standard terms and we’ve held to it through multiple resin-price cycles since 2005.

**Q20. What is included in your quote?**
A complete quote includes: tooling cost (with steel grade and cavity count named), per-part cost at your nominated annual volume, lead time on tooling and on production, packaging spec, documentation pack, payment terms, price validity. Anything you ask for that isn’t standard — special inspections, customer-specific labelling, expedited shipping — appears as a named line item.

#### IP & confidentiality

**Q21. Do you sign NDAs?**
Yes. Standard practice — NDA on your letterhead or ours, before any drawing exchange or technical discussion. We do not require an NDA before sending an introductory deck or capability brochure, but we sign one before any RFQ-stage drawing review.

**Q22. How are uploaded drawings stored and handled?**
Drawings uploaded to our quote portal are stored on our server with restricted access — only the project engineer assigned to your RFQ and the senior leadership team can access them. Drawings are not stored on personal devices or shared via personal email. We retain drawings for the duration of the active engagement plus [3 years]; on written request we delete them earlier.

**Q23. Will you take my design and use it for another customer?**
No. Customer designs are customer property. We do not reuse, repurpose or share design files between customers. This is contractually binding via our standard NDA. We also segment design files by customer in our design system; the project engineer on customer A’s programme cannot see customer B’s files.

#### Logistics & delivery

**Q24. Can you ship internationally?**
Yes. We’ve shipped to [GCC, EU, North America, Africa, Southeast Asia]. Default Incoterm is FOB Mumbai; CIF and DAP available via our nominated forwarder. Customs paperwork (commercial invoice, packing list, BL/AWB, certificate of origin where applicable) is included in standard shipment documentation.

**Q25. What is your typical lead time for production reorders?**
For tools already in our shop with frozen parameters, reorder lead time is typically 2–4 weeks for batches under 10,000 pieces, 4–6 weeks for 10,000–50,000, and 6–8 weeks for larger releases. We schedule against your committed delivery dates; if you need expedited turnaround (1 week or less), we can almost always accommodate at our standard expedite premium.

#### FAQ Page schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What is your minimum order quantity?","acceptedAnswer":{"@type":"Answer","text":"We don’t set a fixed MOQ across the shop. Production batches typically start at 500 pieces. Prototype runs go down to 100 pieces, billed as a sampling job."}},
    {"@type":"Question","name":"Do you make moulds in-house or outsource?","acceptedAnswer":{"@type":"Answer","text":"All cavity work is cut on our own floor. CNC, EDM (sinker and wire-cut), surface grinding, polish — all in-house. Hot-runner systems are bought-in and integrated by our tool room."}},
    {"@type":"Question","name":"Who owns the mould after manufacturing?","acceptedAnswer":{"@type":"Answer","text":"You do. The PO names you as the tool owner. You receive the mould, design files, spares and maintenance log. No clawback clauses."}},
    {"@type":"Question","name":"What materials can you mould?","acceptedAnswer":{"@type":"Answer","text":"Commodity (ABS, PP, PE, PS), engineering (PA6, PA66, PC, POM, PBT, ABS-PC, PA12), specialty (TPE, TPU, glass-filled, flame-retardant, medical and PEEK on request)."}},
    {"@type":"Question","name":"What tolerances can you hold?","acceptedAnswer":{"@type":"Answer","text":"Default DIN 16742 CT4–CT5. ±0.02 mm achievable on critical features with tool design support. Tighter than CT3 typically by post-mould machining."}},
    {"@type":"Question","name":"Do you sign NDAs?","acceptedAnswer":{"@type":"Answer","text":"Yes — on your letterhead or ours, before any drawing exchange or technical discussion."}},
    {"@type":"Question","name":"What is your typical mould lead time?","acceptedAnswer":{"@type":"Answer","text":"6–10 weeks single-cavity P20, 10–14 weeks hot-runner multi-cavity. Lead time committed in writing at PO."}},
    {"@type":"Question","name":"Can you handle medical-grade plastics?","acceptedAnswer":{"@type":"Answer","text":"Yes — medical-grade PP, PC, PETG and PA12 in a dedicated cell with controlled material flow and full batch traceability."}},
    {"@type":"Question","name":"Do you support DFM at quotation stage?","acceptedAnswer":{"@type":"Answer","text":"Yes — every RFQ comes back with DFM feedback marked up on your drawing, before you commit a PO."}},
    {"@type":"Question","name":"How long does your quoted price hold?","acceptedAnswer":{"@type":"Answer","text":"90 days. Re-quote on the resin component only if resin index moves more than ±5%; tooling and labour costs do not move."}}
  ]
}
```

---

### 4.11 Contact Page

**SEO title:** Contact Swastik Plastic — Mumbai Injection Moulder
**Meta description:** Talk to our sales engineer, send a drawing, or book a plant tour. Mumbai plant. Phone, email, WhatsApp Business — we respond within 1 business day.
**H1:** Reach the team.

#### Hero copy

The fastest way to a useful answer is to send the part. We respond to RFQs within 1 business day with DFM feedback, a tooling estimate and a per-part quote. If you’d rather talk first, call or WhatsApp our sales engineer directly — we don’t route you through a switchboard.

#### Address block

**Swastik Plastic**
[Plot No.] / [Street Name],
[Industrial Estate / Locality],
Mumbai – [PIN], Maharashtra, India.

**Phone (sales):** +91 [PHONE]
**Phone (operations):** +91 [PHONE]
**Email (sales):** sales@swastikplastic.co.in
**Email (project enquiries):** projects@swastikplastic.co.in
**WhatsApp Business:** [+91 PHONE]
**Hours:** Monday–Saturday, 09:00–18:00 IST.

#### Direct action links
- **[Call our sales engineer](tel:+91[PHONE])**
- **[WhatsApp our sales engineer](https://wa.me/91[PHONE]?text=Hi%2C%20I%20have%20a%20moulding%20enquiry)**
- **[Email a drawing](mailto:sales@swastikplastic.co.in?subject=RFQ%20Enquiry)**

#### Lead-capture form copy

**Form title:** Send your part. Get a manufacturable answer.

**Field labels and helper text:**
- **Your name** *(helper: how should we address you in our reply?)*
- **Company name** *(helper: optional, but useful for context)*
- **Work email** *(helper: we reply to this address)*
- **Phone (with WhatsApp)** *(helper: country code please — we may follow up on WhatsApp)*
- **What do you need?** *(dropdown: Mould only · Mould + Production · Production on existing mould · Refurbishment · Just exploring)*
- **Industry** *(dropdown: Industrial · Medical · Electrical · Consumer · Other)*
- **Annual volume estimate** *(helper: rough is fine — tells us the right tooling approach)*
- **Upload drawing** *(helper: STEP / IGES / X_T / DWG / PDF — up to 25 MB. Your file is treated confidentially. NDA available on request.)*
- **Anything else we should know?** *(helper: target landed cost, regulatory context, deadline — write what matters)*

**Submit button:** **Send for quote**
**Privacy line below button:** Your design files stay confidential. We respond within 1 business day. NDA available before any technical exchange.

#### Response-time promise line
> We reply to every RFQ within **1 business day**. If you haven’t heard from us in 24 hours, ping our sales engineer directly on WhatsApp — something has gone wrong on our end.

#### Map embed instruction

Embed Google Maps iframe with coordinates `[LAT],[LNG]` and zoom level 16. Marker label: “Swastik Plastic — Plant”. Include a “Get directions” link below the map that opens Google Maps with origin auto-detected from device location.

#### Microcopy library for this form

- **Loading state:** *Sending… giving the file a sanity-check on our end.*
- **Success state:** *Got it. Our sales engineer will be back to you within 1 business day. Watch for an email from sales@swastikplastic.co.in.*
- **Validation errors:**
  - *Email looks off — double-check there’s an @ in there.*
  - *Phone number needs a country code — start with +91 for India.*
  - *File is over 25 MB. Compress or send via email — we accept attachments up to 50 MB.*
  - *We support STEP, IGES, X_T, DWG and PDF. Other formats — please convert or send via email.*
- **Empty-state for the dropdowns:** *Pick the closest match — we’ll figure out the rest.*

---

## 5. Conversion Copy Library

### 5.1 Primary CTAs (4 variants per intent)

**Quote-focused**
1. Request a Quote
2. Get a Quotation
3. Send Drawing for Pricing
4. Request RFQ

**Consultation**
1. Talk to an Engineer
2. Book a Plant Tour
3. Schedule a Consultation
4. Speak to Our Sales Engineer

**Brochure**
1. Download Capability Deck
2. Get Our Brochure
3. View Capability Sheet
4. Download Plant Profile

**WhatsApp click-to-chat (prefilled message text)**
1. *Hi, I have an RFQ — sending a drawing now.*
2. *Hi, I’d like to book a plant tour.*
3. *Hi, can you quote a [insert/overmould/two-shot] component?*
4. *Hi, I need urgent moulding capacity — can we talk?*

WhatsApp link format: `https://wa.me/91[PHONE]?text=<URL-encoded message>`

### 5.2 Microcopy

#### Form field placeholders
- **Name:** *Priya Sharma*
- **Company:** *Acme Industries*
- **Email:** *priya@acme.in*
- **Phone:** *+91 98xxxxxxx*
- **Volume:** *e.g. 50,000 units / year*
- **Upload area:** *Drop your drawing here, or click to browse — STEP / IGES / X_T / DWG / PDF*
- **Free-text:** *Anything we should know — target cost, deadline, regulatory context*

#### File-upload helper text
*Accepted formats: STEP, IGES, X_T, DWG, PDF. Maximum 25 MB per file, up to 5 files. Files are stored on our restricted-access server. NDA available on request before review.*

#### Form validation error messages
- *Email looks off — there should be one ‘@’ and a domain.*
- *Phone number needs a country code — start with +91 for India, +1 for US, etc.*
- *File over 25 MB — compress to a ZIP or split into multiple uploads.*
- *That format isn’t supported here — STEP, IGES, X_T, DWG and PDF only.*
- *Annual volume looks unusually high — please confirm or pick a range.*
- *We need at least your name, email and a part description to reply meaningfully.*
- *Upload failed — check your connection and try again, or email us directly.*

#### Success state
*Got it. Our sales engineer will be back to you within 1 business day. Watch for an email from sales@swastikplastic.co.in — and add us to your safe-sender list so we don’t end up in spam.*

#### Loading state
*Uploading your drawing — giving the file a sanity-check on our end…*

#### Empty-state copy (gallery filters)
*No projects in this category yet — but we’ve almost certainly worked on something similar. [Send us your part] and we’ll send back two or three comparable references.*

#### 404 page copy
**H1:** This page doesn’t exist on our shop floor either.
**Body:** The link you followed has either moved or never existed. Some good places to go from here:
- [Home](/)
- [Our services](/services)
- [Our case studies](/case-studies)
- [Send us a drawing](/quote)
If you got here from a link on another site, we’d like to know — drop us a note at sales@swastikplastic.co.in.

#### 500 page copy
**H1:** Something broke on our side.
**Body:** Not your fault. Our team has been notified automatically and will fix it shortly. In the meantime, you can email us at sales@swastikplastic.co.in or message our sales engineer on WhatsApp at [+91 PHONE]. Apologies for the inconvenience.

#### Cookie banner copy
*This site uses cookies for essential functionality and to understand which pages help our visitors. No third-party advertising, no tracking pixels for ad networks. Read our [cookie policy](/cookies) for the detail.*
- **[Accept]** **[Essentials only]**

#### Newsletter opt-in copy
**Title:** Quarterly engineering brief — no marketing emails, no spam.
**Body:** Once a quarter we send a single email with one DFM tip, one materials note, and one case study from the floor. Useful for design and procurement teams. Unsubscribe in one click.
**Field placeholder:** *priya@acme.in*
**Button:** Subscribe

### 5.3 Trust microcopy (per location)

**Below RFQ submit button:**
- *We respond within 1 business day.*
- *NDA available on request before any technical review.*
- *Your design files stay on our restricted-access server.*

**Below contact form:**
- *Your design files stay confidential.*
- *Sales engineer reply, not a sales pitch.*

**Near WhatsApp button:**
- *Chat with our sales engineer — typical response in 15 minutes during work hours.*

**Near phone number:**
- *Direct line to sales — no switchboard.*

**Below brochure download form:**
- *Single email, the brochure as PDF, no follow-up sequence unless you ask.*

**On case study pages:**
- *Customer details anonymised under our standard NDA. Reference calls available with our customer’s permission on serious enquiries.*

---

## 6. SEO Technical Deliverables

### 6.1 Meta package (master table)

| Page | SEO title (≤60) | Meta description (≤155) | OG title | Canonical |
|---|---|---|---|---|
| `/` | Injection Moulding & Mould Manufacturer Mumbai | Plastic injection moulds, vertical & insert moulding since 2005. ABS, Nylon, PC, POM. Send your drawing — quote in 1 business day. | Two decades of mould-making, run like an engineering shop. | https://swastikplastic.co.in/ |
| `/about` | About Swastik Plastic — Mumbai Mould Maker Since 2005 | Founded 2005 in Mumbai. Family-run mould shop grown into a full plastic injection moulding plant. Read our story, milestones and values. | Two decades of mould-making, built one tool at a time. | https://swastikplastic.co.in/about |
| `/services/mould-making` | Plastic Mould Manufacturer India — In-house Tool Room | Mould design, CNC, EDM, polish and trial under one roof. P20, H13, S136 steels. Single, multi-cavity and hot-runner moulds. | Plastic moulds, designed and cut in our own tool room. | https://swastikplastic.co.in/services/mould-making |
| `/services/injection-moulding` | Custom Injection Moulding Services India | Injection moulding from 1k to 1M parts/year. ABS, PC, PA66, POM. Batch traceability and dimensional reports included. | Custom injection moulding for engineering plastics. | https://swastikplastic.co.in/services/injection-moulding |
| `/services/vertical-moulding` | Vertical Injection Moulding Manufacturer India | Vertical-clamp moulding for cable connectors, sensor overmoulds and insert-loaded parts. Stable insert position, repeatable encapsulation. | Vertical moulding for inserts that have to stay put. | https://swastikplastic.co.in/services/vertical-moulding |
| `/services/insert-moulding` | Insert Moulding & Overmoulding Services India | Insert moulding for brass, steel, PCB and threaded inserts. TPE-on-PP overmoulding. In-house jig design. | Insert moulding and overmoulding, with the jig engineering it actually takes. | https://swastikplastic.co.in/services/insert-moulding |
| `/services/plastic-product-manufacturing` | End-to-End Plastic Product Manufacturing India | DFM through dispatch — design, mould, mould, assemble and pack. One accountable vendor for plastic product programmes. | End-to-end plastic product manufacturing. | https://swastikplastic.co.in/services/plastic-product-manufacturing |
| `/industries/industrial` | Industrial Plastic Moulded Products Supplier India | Engineering-plastic gears, bushings, impellers, machine guards. Dimensional precision and wear life as the default. | Industrial plastic parts where precision is the brief. | https://swastikplastic.co.in/industries/industrial |
| `/industries/medical` | Medical Plastic Component Manufacturer India | Medical device housings, fluid-path components and diagnostic consumables in biocompatible polymers. Documented traceability. | Medical-grade plastic components, with the documentation. | https://swastikplastic.co.in/industries/medical |
| `/industries/electrical` | Electrical Plastic Parts Manufacturer | UL94 V0 | Switchgear housings, connector bodies, terminal blocks. UL94 V0 grades and dimensional consistency for assembly lines. | Electrical components moulded for the line that doesn’t stop. | https://swastikplastic.co.in/industries/electrical |
| `/capabilities` | Capabilities — Press Tonnage, Materials, Tool Room | [40T–450T] presses, in-house CNC + EDM tool room, [2 × CMM]. Engineering plastics and specialty materials. | Capability sheet your engineers can plan against. | https://swastikplastic.co.in/capabilities |
| `/process` | Our Process — DFM to Dispatch | Swastik Plastic | From RFQ to dispatch in six documented steps. DFM, mould design, tool build, T1–T3, production, FAI and packing. | From CAD file to dimensionally inspected first batch. | https://swastikplastic.co.in/process |
| `/quality` | Quality Standards — ISO 9001, FAI, Traceability | ISO 9001:2015. In-process and final inspection on every batch. FAI, dimensional reports and material certificates included. | Quality is what you ship, not what you say. | https://swastikplastic.co.in/quality |
| `/case-studies` | Case Studies — Medical, Electrical, Industrial | Mould design and moulding programmes that hit cycle time, dimensional and scrap targets. Anonymised customer references. | Case studies from the shop floor. | https://swastikplastic.co.in/case-studies |
| `/insights` | Insights — DFM, Materials, Tooling Notes | Practical engineering notes from a working moulding plant. DFM checklists, polymer comparisons, lead-time tables. | From the shop floor. | https://swastikplastic.co.in/insights |
| `/faq` | Frequently Asked Questions — Swastik Plastic | Questions on capabilities, materials, tooling, lead time, quality, IP, pricing and shipping. Practical, specific answers. | Frequently asked questions. | https://swastikplastic.co.in/faq |
| `/contact` | Contact Swastik Plastic — Mumbai Injection Moulder | Talk to our sales engineer, send a drawing, or book a plant tour. Mumbai plant. Reply within 1 business day. | Reach the team. | https://swastikplastic.co.in/contact |
| `/quote` | Send Your Drawing — Get an RFQ Reply | Upload STEP/DWG/PDF. Reply with DFM feedback, tooling estimate, per-part quote within 1 business day. NDA on request. | Send the part. Get a manufacturable answer. | https://swastikplastic.co.in/quote |
| `/brochure` | Download the Capability Brochure | 8-page capability brochure — press list, materials, tool room, quality lab, case study highlights. Single-email delivery. | Download our capability brochure. | https://swastikplastic.co.in/brochure |

OG image filenames suggested under `/assets/img/og/`:
- `og-home.jpg` — plant floor wide shot.
- `og-mould-making.jpg` — CNC cutting cavity.
- `og-injection-moulding.jpg` — press ejecting part.
- `og-vertical-moulding.jpg` — vertical press with insert loaded.
- `og-insert-moulding.jpg` — brass insert macro.
- `og-medical.jpg` — gloved hand and clear PC housing.
- `og-electrical.jpg` — switchgear terminal block close-up.
- `og-industrial.jpg` — POM impeller close-up.
- `og-capabilities.jpg` — press list overview.
- `og-quality.jpg` — CMM inspection.
- `og-process.jpg` — process step diagram.
- `og-case-studies.jpg` — mosaic of three case study hero images.
- `og-insights.jpg` — DFM markup screenshot.
- `og-contact.jpg` — front of plant building.

Twitter card type for all pages: `summary_large_image`.

### 6.2 Schema markup — full JSON-LD blocks

#### Organization (site-wide, in `<head>` on every page)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://swastikplastic.co.in/#org",
  "name": "Swastik Plastic",
  "alternateName": "Swastik Plastic Industries",
  "url": "https://swastikplastic.co.in/",
  "logo": "https://swastikplastic.co.in/assets/img/logo.png",
  "image": "https://swastikplastic.co.in/assets/img/plant.jpg",
  "description": "Plastic injection mould manufacturer and moulding services provider in Mumbai, India. Industrial, medical and electrical OEM customers since 2005.",
  "foundingDate": "2005",
  "founder": { "@type": "Person", "name": "[FOUNDER_NAME]" },
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": "[EMPLOYEE_COUNT]" },
  "sameAs": [
    "https://www.linkedin.com/company/[LINKEDIN_HANDLE]",
    "https://www.indiamart.com/[INDIAMART_HANDLE]",
    "https://www.facebook.com/[FB_HANDLE]",
    "https://www.tradeindia.com/[TRADEINDIA_HANDLE]"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-[PHONE]",
      "contactType": "sales",
      "areaServed": ["IN", "AE", "EU", "US"],
      "availableLanguage": ["en", "hi", "mr"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-[PHONE-OPS]",
      "contactType": "operations",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "mr"]
    }
  ]
}
```

#### LocalBusiness (Manufacturer) — homepage and contact page
```json
{
  "@context": "https://schema.org",
  "@type": "Manufacturer",
  "@id": "https://swastikplastic.co.in/#localbusiness",
  "name": "Swastik Plastic",
  "image": "https://swastikplastic.co.in/assets/img/plant.jpg",
  "telephone": "+91-[PHONE]",
  "email": "sales@swastikplastic.co.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[STREET]",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "[PIN]",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "[LAT]", "longitude": "[LNG]" },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  }],
  "priceRange": "₹₹",
  "areaServed": [{"@type":"Country","name":"India"},{"@type":"Place","name":"GCC"},{"@type":"Place","name":"EU"},{"@type":"Place","name":"US"}]
}
```

#### Service (template — repeat per service page with `name`/`serviceType` swap)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[SERVICE NAME]",
  "serviceType": "[SERVICE TYPE]",
  "provider": { "@id": "https://swastikplastic.co.in/#org" },
  "areaServed": [{ "@type": "Country", "name": "India" }],
  "audience": { "@type": "BusinessAudience", "audienceType": "OEM manufacturers" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "[SERVICE PAGE URL]"
  },
  "termsOfService": "https://swastikplastic.co.in/terms"
}
```

#### Product (per product/component catalogue item)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "PA66 GF30 Terminal Block — V0",
  "image": "https://swastikplastic.co.in/assets/img/products/terminal-block-v0.jpg",
  "description": "3-phase terminal block in PA66 GF30, UL94 V0 rated. Dimensional consistency for high-yield assembly.",
  "brand": { "@type": "Brand", "name": "Swastik Plastic" },
  "manufacturer": { "@id": "https://swastikplastic.co.in/#org" },
  "category": "Electrical components > Terminal blocks",
  "material": "PA66 GF30, UL94 V0",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://swastikplastic.co.in/products/terminal-block-v0"
  }
}
```

#### BreadcrumbList (every non-home page — example shown for service page)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Home","item":"https://swastikplastic.co.in/"},
    {"@type":"ListItem","position":2,"name":"Services","item":"https://swastikplastic.co.in/services"},
    {"@type":"ListItem","position":3,"name":"Mould Making","item":"https://swastikplastic.co.in/services/mould-making"}
  ]
}
```

#### Article (blog template)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[ARTICLE HEADLINE]",
  "image": "[FEATURED IMAGE URL]",
  "author": { "@type": "Organization", "name": "Swastik Plastic" },
  "publisher": {
    "@type": "Organization",
    "name": "Swastik Plastic",
    "logo": { "@type": "ImageObject", "url": "https://swastikplastic.co.in/assets/img/logo.png" }
  },
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "mainEntityOfPage": "[ARTICLE URL]"
}
```

#### WebSite + SearchAction (homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://swastikplastic.co.in/#website",
  "url": "https://swastikplastic.co.in/",
  "name": "Swastik Plastic",
  "publisher": { "@id": "https://swastikplastic.co.in/#org" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://swastikplastic.co.in/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

#### Review / AggregateRating (placeholder for future use once real reviews are published)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://swastikplastic.co.in/#org",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[X.X]",
    "reviewCount": "[N]",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "[REVIEWER NAME]" },
      "reviewBody": "[REVIEW TEXT]",
      "datePublished": "[YYYY-MM-DD]"
    }
  ]
}
```

### 6.3 Technical SEO checklist

#### `robots.txt`
```
User-agent: *
Allow: /
Disallow: /thank-you
Disallow: /404
Disallow: /500
Disallow: /assets/internal/

Sitemap: https://swastikplastic.co.in/sitemap.xml
```

#### `sitemap.xml` structure
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://swastikplastic.co.in/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://swastikplastic.co.in/about</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://swastikplastic.co.in/services/mould-making</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://swastikplastic.co.in/services/injection-moulding</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://swastikplastic.co.in/services/vertical-moulding</loc><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://swastikplastic.co.in/services/insert-moulding</loc><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://swastikplastic.co.in/services/plastic-product-manufacturing</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://swastikplastic.co.in/industries/industrial</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://swastikplastic.co.in/industries/medical</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://swastikplastic.co.in/industries/electrical</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://swastikplastic.co.in/capabilities</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://swastikplastic.co.in/process</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://swastikplastic.co.in/quality</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://swastikplastic.co.in/case-studies</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://swastikplastic.co.in/insights</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>
  <url><loc>https://swastikplastic.co.in/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://swastikplastic.co.in/contact</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://swastikplastic.co.in/quote</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://swastikplastic.co.in/brochure</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
</urlset>
```

#### Hreflang policy
For now, single English-India variant. If Hindi and Marathi variants are added later, declare:
```html
<link rel="alternate" hreflang="en-in" href="https://swastikplastic.co.in/">
<link rel="alternate" hreflang="hi-in" href="https://swastikplastic.co.in/hi/">
<link rel="alternate" hreflang="mr-in" href="https://swastikplastic.co.in/mr/">
<link rel="alternate" hreflang="x-default" href="https://swastikplastic.co.in/">
```

#### Heading hierarchy rules
- One H1 per page, mirrors the page intent.
- H2 per major section. Avoid using H2 for visual emphasis only.
- H3 nested under H2. No skipping levels (H2 → H4 forbidden).
- Don’t style buttons or CTAs with H2/H3 — visual emphasis, not semantic emphasis.

#### Image SEO rules
- **Filename formula:** `kebab-case-descriptive-name.webp` — e.g. `multi-cavity-hot-runner-mould-cnc.webp`
- **Alt text formula:** subject + context + medium, ≤125 chars. e.g. *“CNC machining centre cutting P20 mould steel cavity in Swastik Plastic tool room.”*
- **Format:** WebP for photos; SVG for line drawings / process diagrams.
- **Lazy loading:** `loading="lazy"` on every image below the fold; `decoding="async"` always.
- **Responsive:** `srcset` with 480 / 768 / 1200 / 1600 px variants; `sizes` attribute set per layout.
- **Compression:** target ≤120 KB for hero images, ≤60 KB for inline.
- **Decorative images:** `alt=""` (empty string), not omitted — screen readers skip them.

#### Anchor text variation rules (recap)
- 15–20% exact-match keyword anchors per target.
- 30% partial-match.
- 30% branded.
- 20% generic / contextual.

#### Page-speed budget (Core Web Vitals targets)
- **LCP** (Largest Contentful Paint) < 2.5s on 4G mobile.
- **CLS** (Cumulative Layout Shift) < 0.1.
- **INP** (Interaction to Next Paint) < 200ms.
- **TBT** (Total Blocking Time) < 150ms.
- **Total page weight** < 1.5 MB on landing pages, < 2.5 MB on case study and insight pages.

#### Mobile-first guidance
- Tap targets ≥ 44×44 px.
- No fixed-width content; use `vw`, `%`, `rem`.
- Sticky mobile CTA bar (Call | WhatsApp | Quote) on every non-home page.
- Form fields 16px font minimum (prevents iOS auto-zoom).
- Compress hero images further on mobile breakpoint.

#### 301 redirect plan (legacy → new IA)
| Legacy URL | New URL |
|---|---|
| `/index.html#services` | `/services` |
| `/index.html#about` | `/about` |
| `/index.html#contact` | `/contact` |
| `/index.html#capabilities` | `/capabilities` |
| `/index.html#process` | `/process` |
| `/index.html#quality` | `/quality` |
| `/index.html#projects` | `/case-studies` |
| `/index.html#faq` | `/faq` |
| `/privacy.html` | `/privacy` |
| `/terms.html` | `/terms` |
| `/cookies.html` | `/cookies` |

Add corresponding `redirects` block in `vercel.json`:
```json
{
  "redirects": [
    { "source": "/index.html", "destination": "/", "permanent": true },
    { "source": "/privacy.html", "destination": "/privacy", "permanent": true },
    { "source": "/terms.html", "destination": "/terms", "permanent": true },
    { "source": "/cookies.html", "destination": "/cookies", "permanent": true }
  ]
}
```

### 6.4 Local SEO

#### Google Business Profile content

**Categories:**
- Primary: Plastic Injection Moulding Manufacturer
- Secondary: Mould Maker · Plastic Manufacturer · Manufacturer · Custom Manufacturer

**Services list (configure individually under GBP > Services):**
- Plastic Mould Making
- Custom Injection Moulding
- Vertical Injection Moulding
- Insert Moulding
- Overmoulding
- Plastic Product Manufacturing
- Mould Refurbishment
- DFM Consulting

**Business description (GBP, ≤750 chars):**
> Swastik Plastic is a Mumbai-based plastic injection mould manufacturer and moulding services provider. Since 2005 we’ve built moulds and run production for industrial, medical and electrical OEMs across India. Our [12,000 sq.ft.] plant houses an in-house tool room (CNC, EDM, polish), [16] injection presses from [40T to 450T], and an inspection lab with two CMMs. We specialise in engineering plastics — Nylon 6/66, polycarbonate, POM, ABS, glass-filled grades — for parts that need to fit, fasten and last. ISO 9001:2015 certified. Send us your STEP/DWG and we’ll come back with DFM feedback, a tooling estimate and a per-part quote within 1 business day.

**GBP post calendar — 4 drafts**

> **Post 1: Showcase a service.**
> *In-house tool room — CNC, sinker EDM, wire-cut and bench polish, all on our floor. Single-cavity to 16-cavity hot-runner moulds in P20, H13 and S136. T1 sample within 6–10 weeks of PO, lead time committed in writing.*
> CTA: Learn more → /services/mould-making

> **Post 2: Industry feature.**
> *Switchgear OEM moved their 3-phase terminal block to us last year. New 6-cavity hot-runner tool, V0-rated PA66 GF30, scrap rate held under 0.5% across 380K+ parts. Field dielectric failures: zero.*
> CTA: Read the case study → /case-studies/electrical-switchgear-component

> **Post 3: Capability update.**
> *Just commissioned our [450T] press — largest in our envelope, opens up bigger industrial housings and panel work. Up and running with first programme parts in production this month.*
> CTA: See full press list → /capabilities

> **Post 4: Engineering note.**
> *DFM red flag: bosses without supporting ribs almost always sink. Five minutes of CAD work upstream saves an EDM rework cycle downstream. Quick read on the seven design issues that drive up tooling cost:*
> CTA: Read → /insights/dfm-red-flags

#### NAP consistency rules
- **Name:** Swastik Plastic (canonical). Never *Swastik Plastic Ltd.* / *Swastik Plastics* / *Swastik Industries* on directories.
- **Address:** identical formatting on every directory — exact same line breaks, abbreviations, PIN format.
- **Phone:** single canonical number with `+91` country code, hyphenation `+91-[PHONE]`. WhatsApp number can differ but list separately.

#### Local citation list (build profiles, list-serv first 6 in priority order)
1. **IndiaMART** — full company profile, product catalogue, RFQ-friendly. Set verified seller, brochure uploaded.
2. **TradeIndia** — secondary directory, product catalogue mirrored from IndiaMART.
3. **Justdial** — local search, photos, hours, services list.
4. **ExportersIndia** — for international leads.
5. **Sulekha** — Mumbai local search.
6. **Kompass** — B2B directory, particularly for international procurement teams.
7. **Yellow Pages India** — passive but free.
8. **Connect2India** — secondary B2B.
9. **EnggExpo** — manufacturing-specific directory.
10. **PlasticIndustry.in** — vertical-specific.

**Citation profile copy (200 words, identical across directories for NAP consistency):**
> Swastik Plastic is a Mumbai-based plastic injection mould manufacturer and custom moulding services provider. Founded in 2005, we deliver mould design, in-house tool manufacture (CNC, EDM, polish), injection moulding, vertical moulding, insert moulding, overmoulding, and end-to-end plastic product manufacturing programmes. Our 12,000 sq.ft. plant houses 16 injection presses from 40T to 450T plus three vertical-clamp presses, an in-house tool room, two CMMs and a calibrated mechanical inspection lab. We specialise in engineering plastics — Nylon 6/66, polycarbonate, POM, ABS, PBT, ABS-PC — and routinely run glass-filled, flame-retardant (UL94 V0) and medical-grade compounds. Active customers include industrial product OEMs, medical device makers and electrical component manufacturers across India and select export markets in the GCC, EU and North America. ISO 9001:2015 certified. Standard documentation pack includes FAI, dimensional reports, material certificates and batch traceability tags. Mould ownership transfers to the customer on payment. NDA available before any technical exchange. Sales engineer responds within one business day on every RFQ.

---

## 7. Lead Magnets & Conversion Assets

### 7.1 Capability Brochure (8-page PDF)

**Cover copy.**
**Title:** Swastik Plastic — Capability Brochure 2025
**Subtitle:** Plastic injection moulds and moulded parts, engineered in Mumbai since 2005.
**Cover image:** Plant exterior or hero shot of CNC tool room.

**Page-by-page outline.**
- **Page 1 — Cover.** Title, subtitle, plant photo, contact strip.
- **Page 2 — Who we are.** 200-word about, founder note pullquote, key numbers (19+ years, 1,200+ moulds, 80+ active OEMs, ISO 9001:2015).
- **Page 3 — Capability snapshot.** Press list table, mould envelope, polymer index, plant area, daily output.
- **Page 4 — Tool room.** CNC, sinker EDM, wire-cut, surface grinding, polish. Steel grades. Mould-flow analysis. Hot-runner integration.
- **Page 5 — Moulding floor & quality lab.** Press range, secondary operations, CMM, mechanical lab, inspection workflow.
- **Page 6 — Industries.** Industrial, medical, electrical — one column each, six component examples each.
- **Page 7 — Selected projects.** Three case study highlights (medical, electrical, industrial), one paragraph each, key metric for each.
- **Page 8 — Working with Swastik.** RFQ process diagram, lead time bands, mould ownership clause, contact details, QR code to /quote.

**Section copy — page 4 example, “Tool room.”**
> Our tool room is the part of the plant we are most proud of. Two CNC machining centres, a sinker EDM, wire-cut EDM, surface grinder, and bench polish. P20, H13, S136 and NAK80 routinely cut. Hot-runner systems from Synventive, YUDO and Hasco integrated to specification. Mould-flow analysis runs on Moldex3D for parts where wall thickness is below 1.5 mm or weld-line position matters. Trial moulds run on a dedicated trial press — production presses don’t get held up for sampling. T1 sample comes with a dimensional report on every cavity, every critical-to-function feature.

**Brochure landing page hero (`/brochure`).**
- **H1:** Download our capability brochure.
- **Subhead:** 8-page PDF — plant, presses, tool room, quality lab, three case studies. Single email, no follow-up sequence unless you ask.
- **Form:** Name, email, company.
- **Submit button:** Send the brochure.
- **Below button:** *We email the PDF as soon as you click. We don’t add you to a marketing list.*

**Thank-you page copy.**
> The brochure is on its way to your inbox. If it doesn’t arrive in five minutes, check your spam folder and add `sales@swastikplastic.co.in` to your safe-sender list. While you’re here, the [12-point vendor checklist](/insights/12-point-vendor-checklist) is the most-shared piece on our site — worth 7 minutes if you’re evaluating moulders.
> **[Send us a drawing for an RFQ →](/quote)**

**Follow-up email sequence — see Section 8.A.**

---

### 7.2 DFM Checklist (1-page PDF)

**Title:** DFM checklist for injection-moulded parts — 12 questions before you cut steel.
**Audience:** Persona B (design engineer).

**Checklist content (the 12 questions, ≤10 words each):**

1. Does every wall have at least 1° of draft (3° preferred)?
2. Are walls uniform? Variation under 30%?
3. Are internal corners filleted (≥0.5× wall thickness)?
4. Are bosses ≤ 60% of wall thickness, with supporting ribs?
5. Are ribs ≤ 60% of wall thickness, with draft?
6. Are gate locations marked, and away from cosmetic faces?
7. Are weld-line positions identified and acceptable?
8. Are tolerances assigned only where function requires them?
9. Are critical-to-function features called out separately?
10. Have you specified polymer grade by exact name?
11. Are undercuts handled by sliders or redesigned out?
12. Are texture and polish requirements specified per surface?

**Footer copy on the PDF:**
> Tick all 12 before you commit a tooling PO. Most projects fail one or two — that’s normal. Send your part to Swastik Plastic and we’ll mark up the open items on your drawing within 1 business day.
> **swastikplastic.co.in/quote**

**Landing page (`/insights/dfm-red-flags` plus a download form):**
- Hero: *“DFM red flags — 7 design issues that drive up your tooling cost.”*
- After the article body, a download CTA: *Get the printable 12-question DFM checklist as a PDF.*
- Form fields: Name, email. Submit: Email me the checklist.

**Follow-up email (single, sent immediately).**
> Subject: Your DFM checklist (PDF inside)
> Hi [Name],
> The checklist is attached. Print it, pin it to your design wall, run it before every tooling PO. If you have a part you’d like us to run the checklist on for you, reply to this email with a STEP or DWG and we’ll come back with markups within 1 business day.
> [FOUNDER_NAME] / Swastik Plastic / Mumbai

---

### 7.3 Material Selection Guide (2-page PDF)

**Title:** Material selection guide — choosing polymers for industrial, medical and electrical contexts.
**Audience:** Persona B.

**Page 1 — comparison content.**

> **Industrial parts.** The default decision is between commodity (PP, ABS) and engineering grades (PA66, POM, PA66 GF30). For load-bearing, fatigue-critical or wear-critical parts, engineering grades win on total cost of ownership even when the resin price is 3–4× commodity. PA66 GF30 is our most-specified industrial resin — stiff, dimensionally stable, cost-rational against machined metal alternatives.
>
> **Medical parts.** Three considerations dominate: biocompatibility (ISO 10993 testing), sterilisation method (gamma, EtO, autoclave), and regulatory traceability (DMF, drug master files for resin). Medical-grade PP is the workhorse for single-use consumables. Medical-grade PC for clear, autoclavable instrument housings. COC for drug-contact applications where PC clarity is needed but extractables matter. PA12 for autoclavable surgical instrument bodies.
>
> **Electrical parts.** Flame retardance (UL94 V0), tracking resistance (CTI), and dielectric strength dominate. PA66 GF30 V0 is the default for terminal blocks and switchgear bases. PBT GF V0 for connector bodies where dielectric properties matter more than impact strength. PC FR for translucent flame-retardant enclosures. PC-ABS V0 where impact strength is the primary failure mode.

**Page 2 — comparison table and decision matrix.**

| Polymer | Cost band | Tensile | HDT | Impact | UV | Use cases |
|---|---|---|---|---|---|---|
| ABS | Low | Mid | Mid | Mid-high | Low | Housings, cosmetic parts |
| PP | Low | Low-mid | Low | High | Low | Caps, single-use consumables |
| PC | Mid | Mid-high | High | Very high | Mid | Clear housings, instrument |
| PA66 | Mid | High | High | Mid | Low | Structural, wear-resistant |
| PA66 GF30 | Mid-high | Very high | High | Mid | Low | Metal replacement |
| POM | Mid | Mid-high | Mid | Mid | Mid | Gears, bushings, impellers |
| PBT | Mid | Mid-high | High | Mid | Mid | Electrical connectors |
| PC-ABS V0 | Mid-high | High | High | Very high | Mid | V0 housings |
| TPE (SEBS) | Mid | Low | Low | Very high | Mid | Soft-touch overmould |

**Decision matrix sub-section:** Three flowcharts (industrial, medical, electrical) leading from “primary requirement” to recommended polymer family. (Render as flow diagrams in PDF.)

**Landing page copy:** Hero: *Material Selection Guide — 2 pages. The shortcut to the right resin grade for your part.* Form: Name, email, application area dropdown. Submit: Send me the guide.

**Follow-up email (single).**
> Subject: Your material selection guide (PDF inside)
> Hi [Name],
> The guide is attached. The decision matrix on page 2 is the part most engineers come back to. If your part is on a borderline decision — say PA66 vs PA66 GF30 for a structural application — send us the load case and we’ll do a stress check before you commit a grade.
> [FOUNDER_NAME]

---

### 7.4 RFQ Template (downloadable)

**Title:** Swastik Plastic — RFQ template (fillable PDF).
**Purpose:** standardise the information we need so customers don’t have to figure out what to send.

**Fields on the template:**

1. **Part name and reference number.**
2. **Drawing files attached** (checklist: STEP, IGES, X_T, DWG, PDF).
3. **Part dimensions** — overall envelope (L × W × H mm).
4. **Wall thickness** — typical and minimum.
5. **Polymer grade preference** (or “please recommend”).
6. **Annual volume estimate.**
7. **Batch size and frequency** (e.g. 10,000 quarterly).
8. **Critical-to-function features** — list with tolerances.
9. **Cosmetic requirements** — gloss, texture, colour.
10. **Compliance requirements** — UL, RoHS, REACH, medical, automotive.
11. **Mould ownership preference** — customer-owned vs supplier-amortised.
12. **Target landed cost** (optional).
13. **Required first-article delivery date.**
14. **Required production go-live date.**
15. **Inserts / overmould features** — if applicable, with insert specs.
16. **Secondary operations** — assembly, decoration, packaging requirements.
17. **Documentation pack required** — standard or extended.
18. **Contact name, role, email, phone.**

**Footer of the template:**
> Email this filled template plus your drawing files to `sales@swastikplastic.co.in`, or upload at `/quote`. We respond within 1 business day. NDA available before any technical exchange — request via the same email.

**Landing page copy:** *Standardise your RFQ — fillable PDF, single page. Saves you and us a back-and-forth.* Form: Name, email. Submit: Send me the template.

---

### 7.5 Cost Optimisation Guide (4-page PDF)

**Title:** 7 ways to reduce your moulded-part cost without compromising quality.

**Section copy (one page summary, 7 levers):**

> **1. Fix the gate location.** Half the parts we re-quote come with a gate position that drives flow imbalance. A gate moved 15 mm can cut cycle time by 15% and scrap by half.
>
> **2. Question multi-cavity early.** A 2-cavity tool you already paid for is not always the right answer at 200,000 parts/year. Run the math — sometimes a 4-cavity recut pays back inside 6 months on cycle savings alone.
>
> **3. Re-spec the polymer.** PA66 GF30 is great. PA6 GF30 is 12% cheaper and works for 70% of structural applications. Specifying the highest-spec resin “to be safe” usually costs you 8–15% per part.
>
> **4. Remove tolerance you don’t need.** Every ±0.05 mm specification on a non-critical feature adds tooling cost or scrap. Be specific about which dimensions are critical-to-function.
>
> **5. Eliminate undercuts that force sliders.** Sliders are the single biggest line item on tooling cost after cavity work. A redesigned snap geometry can save ₹2–4 lakh on tooling.
>
> **6. Reduce wall thickness where you can.** Material is the largest variable cost in production. Going from 3 mm to 2.4 mm walls saves 20% material and shortens cycle time, if structural analysis allows.
>
> **7. Move from individual packing to bulk where possible.** Packing labour is invisible until you tally it. SKU-level individual packing makes sense for end-customer products; bulk-pack-and-let-customer-rebox saves 4–8% on landed cost.

**Page 4 — closing CTA.**
> Want us to run these levers on a part of yours? Send the drawing and we’ll come back with a cost-optimisation note alongside the standard quote. No charge — and no obligation. **swastikplastic.co.in/quote**

**Follow-up email — single, sent on form submit.** *Subject:* Your cost optimisation guide (PDF inside). Body: as above template style with one specific question — *which of the seven applies to a part you’re looking at right now? Reply and we’ll dive into that one.*

---

## 8. Email Nurture Sequences

### Sequence A — Brochure Download → Sales Engagement (5 emails over 14 days)

**Goal:** move from download to RFQ.

#### A1 — Day 0 (sent immediately on download)

**Subject lines (3 variants):**
1. Your Swastik Plastic capability brochure (PDF inside)
2. The brochure you asked for — Swastik Plastic
3. Brochure inside — and a quick note from the floor

**Preview text:** Plant, presses, polymers and three case studies in 8 pages.

**Body:**
> Hi [Name],
> The brochure is attached. Page 3 (capability snapshot) is the page most people land on first; page 7 (case studies) is the most-shared.
> If you want to skip the brochure and just send us a part, the RFQ form lives at swastikplastic.co.in/quote — drawings in any common format, response within 1 business day.
> [FOUNDER_NAME] / Swastik Plastic / Mumbai
> P.S. The brochure is print-ready at A4. If you’d like a printed copy posted to you, reply with your address.

**CTA:** [Send a drawing for RFQ →](/quote)

#### A2 — Day 2

**Subject lines:**
1. The 12 things to ask before you commit a tooling PO
2. Quick read — vendor checklist for moulding partners
3. The vendor checklist most procurement teams skip

**Preview text:** A practical 12-point evaluation framework, free to use against any moulder.

**Body:**
> Hi [Name],
> Two days after you downloaded the brochure — figured a quick read might help if you’re still in the evaluation stage.
> We wrote a 12-point checklist on how to evaluate a moulding partner. Half the items are things customers regularly ask. Half are things customers should ask but don’t. It’s genuinely useful and we wrote it to help you evaluate vendors generally — not just us.
> Read it: [12-point vendor checklist →](/insights/12-point-vendor-checklist)
> If you’d like to put us through the checklist on a real part, send us a drawing.
> [FOUNDER_NAME]

**CTA:** Read the checklist · [Send a drawing](/quote)

#### A3 — Day 5

**Subject lines:**
1. Case study — switchgear OEM, 0.4% scrap on 380K parts
2. How we cut scrap from 1.4% to 0.4% on a switchgear part
3. From 1.4% to 0.4% scrap — 380,000 parts in

**Preview text:** A case study from our floor — what changed and what it took.

**Body:**
> Hi [Name],
> One of our most-asked-about programmes is a switchgear terminal block we took on in 2022. Customer was running 1.4% scrap on a 3-cavity hot-runner tool, weld-line porosity in V0-rated PA66 GF30 was driving field dielectric failures.
> We ran a Moldex3D simulation, identified the gate angle as the cause, cut a new 6-cavity hot-half, and the part has held under 0.5% scrap across 380,000 units in production.
> Full case study with the numbers: [Read it →](/case-studies/electrical-switchgear-component)
> If you have a similar problem on a part of your own — high scrap, weld-line failures, dimensional drift — that’s exactly the kind of work we’re happy to take on.
> [FOUNDER_NAME]

**CTA:** [Send your part →](/quote)

#### A4 — Day 9

**Subject lines:**
1. Quick question on your timeline
2. Are you still evaluating moulding partners?
3. Worth a 15-minute call?

**Preview text:** A direct question with a low-friction option.

**Body:**
> Hi [Name],
> A direct question: are you in active evaluation right now, or just researching?
> If you’re actively evaluating, the most useful next step is a 15-minute call — I can answer the specific questions you have, and tell you upfront if your part is or isn’t a good fit for our shop.
> If you’re researching, no problem at all — I won’t chase. But reply with a single line so I know which mode you’re in, and I’ll calibrate accordingly.
> [Book a 15-minute call →](/contact)
> [FOUNDER_NAME]

**CTA:** Book a call · Reply to this email

#### A5 — Day 14

**Subject lines:**
1. Last note from us — and a useful download
2. Closing the loop — but the DFM checklist might still help
3. Wrapping up — here’s the DFM checklist for the road

**Preview text:** No more emails after this one — but a useful download to take with you.

**Body:**
> Hi [Name],
> This is the last email in our follow-up sequence — we don’t do automated nurture beyond two weeks unless you ask.
> If you’d like one final useful thing, the [DFM checklist](/insights/dfm-red-flags) is a single-page PDF that catches the most common design issues that drive up tooling cost. Worth pinning to a design wall.
> If your timeline shifts and you want to talk to a moulder, you know where to find us — sales@swastikplastic.co.in or +91 [PHONE].
> All the best with the project.
> [FOUNDER_NAME] / Swastik Plastic

**CTA:** Download DFM checklist · [Send a drawing](/quote)

---

### Sequence B — RFQ Submitted → Project Won (4 emails over 10 days)

**Goal:** keep momentum during quote review.

#### B1 — Day 0 (auto-confirmation, sent immediately on RFQ submit)

**Subject lines:**
1. Got your RFQ — quote in 1 business day
2. RFQ received — Swastik Plastic
3. Drawing received — what happens next

**Preview text:** Quick confirmation of what we received and when you’ll hear back.

**Body:**
> Hi [Name],
> Your RFQ is in. I’ve received: [drawing files], [annual volume], [polymer preference], [target landed cost if shared].
> Here’s what happens next:
> 1. I review the drawing and run a DFM check. Anything that looks unmouldable gets flagged — sometimes that means a 5-minute call before I quote.
> 2. I price tooling and per-part. The quote will name the steel grade, cavity count, lead time and per-part cost.
> 3. I email it back to you within 1 business day.
> If you’d like an NDA before I do any of this, reply with a yes and I’ll send our standard NDA on letterhead.
> [PROJECT ENGINEER NAME] / Swastik Plastic
> [Direct WhatsApp: +91 [PHONE]]

#### B2 — Day 1 (sent with the actual quote)

**Subject lines:**
1. Quote inside — [PART NAME] — Swastik Plastic
2. Your moulding quote — [PART NAME]
3. RFQ response — quote, lead time and DFM notes

**Preview text:** Quote attached, plus DFM markup.

**Body:**
> Hi [Name],
> Quote attached. Three things to know:
> 1. **Tooling:** [steel grade] with [cavity count] cavities, T1 sample within [X] weeks of PO.
> 2. **Per-part cost:** ₹[X] at your annual volume of [Y] units.
> 3. **DFM notes:** [one or two short callouts on the part — e.g. wall thickness on the boss, gate location suggestion]. Marked-up drawing attached.
> Ask me anything. Happy to do a 15-minute call to walk through it.
> [PROJECT ENGINEER NAME]

**CTA:** Reply with questions · Book a call · Issue PO

#### B3 — Day 5 (gentle follow-up)

**Subject lines:**
1. Anything I can clarify on the [PART NAME] quote?
2. Any questions on the quote?
3. Quick check-in — quote on [PART NAME]

**Preview text:** Just checking in — happy to help with internal review.

**Body:**
> Hi [Name],
> Five days since I sent the quote on [PART NAME]. Two specific things I sometimes get follow-up questions on, in case it’s useful:
> - **Cavity count.** I quoted [N] cavities at your stated volume. If your volume estimate has firmed up, I can re-quote at the actual number — typically the per-part cost moves 5–8% across cavity-count decisions at this volume range.
> - **Steel grade.** I quoted [P20/H13/S136] based on your polymer choice. If you’re considering a glass-filled grade later, switching to H13 now is cheaper than re-cutting.
> No rush — just flagging in case those are decisions you’re still working through internally.
> [PROJECT ENGINEER NAME]

**CTA:** Reply with questions

#### B4 — Day 10 (final follow-up before passive close)

**Subject lines:**
1. Closing the loop on [PART NAME]
2. Last check on the [PART NAME] quote
3. Should I leave the quote open?

**Preview text:** A direct question — one line reply works.

**Body:**
> Hi [Name],
> Direct question: should I keep the quote open, or is the project on hold / gone elsewhere?
> If it’s on hold — I’ll re-flag in 4 weeks. If it’s gone elsewhere — useful for me to know so I can ask what we got wrong. If you’re still working through internal approvals — I’ll wait for your nudge.
> Single line reply works.
> [PROJECT ENGINEER NAME]

**CTA:** Reply with status

---

### Sequence C — Cold Outreach for Procurement Managers (3-touch sequence)

**Goal:** book a plant visit or intro call.

#### C1 — Touch 1

**Subject lines:**
1. [Company] — moulding capacity question
2. Quick question on your moulding partners
3. [Mutual context, e.g. “Saw your IndiaMART listing”] — moulding capacity?

**Preview text:** Specific, short, no marketing language.

**Body:**
> Hi [Name],
> [PROJECT ENGINEER NAME] from Swastik Plastic in Mumbai. We make moulds and run injection moulding for [industrial / electrical / medical] OEMs — engineering plastics, in-house tool room, since 2005.
> Two reasons I’m reaching out:
> 1. We have spare capacity on [press tonnage range / specific cell] this quarter, and I’m looking for one or two new programmes that fit.
> 2. We’ve recently delivered programmes for [specific component category relevant to recipient], so I think we’d be a sensible vendor to add to your evaluation pool.
> If you’re open to it, the simplest next step is a 30-minute call or a plant visit if you’re Mumbai-based. No deck, no pitch — just a working conversation about what you’re running and where we fit.
> [PROJECT ENGINEER NAME]
> +91 [PHONE] / sales@swastikplastic.co.in

**CTA:** Book a call · Reply with availability

#### C2 — Touch 2 (5 business days later)

**Subject lines:**
1. Re: [Company] — capability snapshot attached
2. Quick capability snapshot — Swastik Plastic
3. Worth a brief look — capability brochure (8 pages)

**Preview text:** A useful asset, no follow-up sequence.

**Body:**
> Hi [Name],
> Following up on my earlier note. Attaching our capability brochure — 8 pages, plant + presses + tool room + three case studies. Probably easier to glance at this than to read another email from a vendor.
> If anything in there matches what you’re sourcing right now, I’d welcome a 30-minute call. If not, no worries — I won’t chase further after one more note.
> [PROJECT ENGINEER NAME]

**CTA:** Book a call · Reply with availability

#### C3 — Touch 3 (5 business days later, final)

**Subject lines:**
1. Last note — and a useful checklist
2. Closing the loop on [Company]
3. Wrapping up — but the vendor checklist might be useful

**Preview text:** Polite close + a useful asset.

**Body:**
> Hi [Name],
> Last note from me — I don’t chase beyond three touches.
> If we’re not a fit right now, no problem at all. The 12-point vendor checklist below might be useful to you regardless of whether you ever talk to us:
> [12-point vendor checklist →](/insights/12-point-vendor-checklist)
> If your sourcing situation shifts later in the year, you know where to find us. Wishing you all the best.
> [PROJECT ENGINEER NAME] / Swastik Plastic / Mumbai

**CTA:** Read the checklist · Save my contact

---

## 9. Conversion Rate Optimisation Plan

### 9.1 Form-field reduction logic

**First-contact form (the only form on /quote and on landing pages).**
Required: Name, Phone, Email, Requirement (free-text 2 lines + file upload).
Optional (collapsed under “Add detail”): Company, Industry, Annual volume, Polymer preference.

**Why this minimum.** Asking for industry / volume / material upfront drops conversion by ~25–35% in our category. We ask the minimum needed to reply meaningfully, then progressively profile via the email reply, the WhatsApp follow-up, or the multi-step wizard.

**Progressive profiling.** Once a lead is in our CRM (HubSpot or Zoho), subsequent touches enrich the record:
- Touch 1 (RFQ submit): Name, Phone, Email, Requirement, drawing.
- Touch 2 (project engineer reply): captures industry and volume from the email reply.
- Touch 3 (DFM call): captures regulatory, target cost, decision timeline.
- Touch 4 (post-quote): captures decision criteria, competing vendors.

### 9.2 File upload handling for CAD drawings

**Accepted formats:** STEP (`.step`, `.stp`), IGES (`.iges`, `.igs`), Parasolid (`.x_t`, `.x_b`), DWG (`.dwg`), DXF (`.dxf`), PDF (`.pdf`).
**Maximum file size:** 25 MB per file, up to 5 files. (For larger files: WeTransfer link via email.)
**Storage:** restricted-access cloud storage (e.g. AWS S3 with IAM-only access). Files encrypted at rest. Files purged after 36 months unless customer becomes active.
**Confidentiality reassurance copy (visible at upload field):**
> Your files stay on our restricted-access server. Only the project engineer assigned to your RFQ and the senior leadership team can access them. NDA available before review on request.

### 9.3 Multi-step RFQ wizard (alternative to single-page form)

#### Step 1 — Industry
**Heading:** What are we making for you?
**Helper:** Pick the closest match — we’ll calibrate the rest of the questions to it.
**Options (radio cards with icons):**
- Industrial parts (gears, bushings, housings)
- Medical devices (housings, consumables, fluid path)
- Electrical components (switchgear, connectors, enclosures)
- Consumer / SME product
- Not sure — let’s talk first

**Below options:** *No wrong answer. We’ll skip the questions that don’t apply.*

#### Step 2 — Service
**Heading:** What kind of work do you need?
**Helper:** Tooling only? Just production? Both? Decide based on what you have today.
**Options:**
- New mould + production run
- Mould only (we don’t need you to mould the parts)
- Production on an existing mould (we’ll send the tool)
- Refurbishment of an existing mould
- Not sure — let’s scope it together

#### Step 3 — Quantity & timeline
**Heading:** Volumes and dates.
**Fields:**
- **Annual volume estimate** (range slider or text input with bands: <5k / 5k–25k / 25k–100k / 100k–500k / 500k+)
- **Required first-article date** (date picker; helper: *rough is fine — we can still hit aggressive dates with notice*)
- **Required production go-live** (date picker)
- **Polymer preference** (dropdown with “please recommend” option)

#### Step 4 — Upload drawing
**Heading:** Send the part.
**Helper:** STEP / IGES / X_T / DWG / PDF up to 25 MB per file. NDA available before review.
**Field:** drag-and-drop area, large.
**Below the drop area:** *Don’t have a CAD file yet? Upload a hand sketch or photo — we’ve quoted from worse.*

#### Step 5 — Contact details
**Heading:** Where do we send the answer?
**Fields:**
- **Your name**
- **Work email**
- **Phone (with WhatsApp)**
- **Company** *(optional)*
- **Anything else we should know?** *(free text, optional)*

**Below submit button:** *We respond within 1 business day.*

**Progress indicator:** Step N of 5, with a back-arrow on every step. No “save and continue later” feature on first version — adds complexity for marginal gain.

### 9.4 Sticky mobile CTA bar

**Always visible on mobile breakpoints (≤768px), all pages except /quote and /thank-you.**

Three icons + labels, equally spaced:
- **Call** — `tel:+91[PHONE]`
- **WhatsApp** — `https://wa.me/91[PHONE]?text=Hi%2C%20I%20have%20a%20moulding%20enquiry`
- **Quote** — `/quote`

**Visual style:** opaque background (white with shadow), 56px tall, icons + 11px text labels.

### 9.5 Exit-intent modal copy

**Trigger:** mouse leaves viewport toward browser controls (desktop only). Once per session, suppressed if user has visited /quote or /brochure already.

**Modal content:**
> **Wait — take the brochure with you.**
> 8 pages: plant, presses, polymers, three case studies. Single email, no follow-up sequence.
> **[Send me the brochure]** **[No thanks]**

### 9.6 Scroll-triggered slide-in (service pages)

**Trigger:** 60% scroll depth on `/services/*` pages. Once per session.

**Slide-in content (bottom-right corner, dismissible):**
> **Have a part to quote?** Send your drawing — DFM feedback, tooling estimate and per-part quote within 1 business day.
> **[Send drawing]** **[Dismiss]**

### 9.7 Heatmap / scroll-depth tracking events

Use Hotjar or Microsoft Clarity for heatmaps and session recordings. Set up the following events:

| Event name | Trigger |
|---|---|
| `cta_quote_click` | Any “Request a Quote” / “Send Drawing” button click |
| `cta_call_click` | Click on `tel:` link |
| `cta_whatsapp_click` | Click on `wa.me` link |
| `cta_brochure_click` | Click on brochure download CTA |
| `form_started` | First field focus on RFQ form |
| `form_field_abandoned` | Form closed without submit, capture last focused field |
| `form_submitted` | RFQ submit success |
| `wizard_step_advance` | Per-step advance in multi-step RFQ wizard, with step number param |
| `wizard_step_back` | Per-step back navigation |
| `file_upload_success` | File uploaded successfully |
| `file_upload_failed` | File upload error, capture error type |
| `scroll_25` / `_50` / `_75` / `_90` | Scroll-depth milestones |
| `service_page_view` | Service page viewed, with service-name param |
| `case_study_read` | Case study page reaches 75% scroll |
| `faq_question_expand` | FAQ accordion expanded, with question param |
| `exit_intent_shown` | Exit modal triggered |
| `exit_intent_converted` | Brochure form submitted from exit modal |

### 9.8 A/B test backlog (10 prioritised tests)

| # | Hypothesis | Variant change | Primary metric | Priority |
|---|---|---|---|---|
| 1 | Replacing the homepage hero’s generic CTA with “Send drawing for quote” increases form starts | CTA text change | RFQ form starts | P0 |
| 2 | Multi-step wizard converts better than single-page form on mobile | Wizard layout vs single-page | RFQ submits / mobile sessions | P0 |
| 3 | Adding a 1-business-day response promise below the CTA increases CTR | Add trust microcopy | CTA click rate | P1 |
| 4 | Featuring a case study video on `/case-studies` index lifts dwell time | Video hero on index | Avg time on page, scroll depth | P1 |
| 5 | Sticky mobile CTA bar lifts call + WhatsApp clicks vs no bar | Add sticky bar | call/wa click events | P0 |
| 6 | Exit-intent modal converts >2% of would-be-leavers | Add exit modal | Brochure form submissions | P1 |
| 7 | Adding an inline DFM-checklist download CTA in service pages lifts lead capture | Inline lead magnet block | Lead-magnet form submits | P1 |
| 8 | Replacing the “We respond within 1 business day” line with “Quote within 24 hours” increases form submits | CTA microcopy variation | RFQ submissions | P2 |
| 9 | Showing case study metric headline (“0.4% scrap on 380K parts”) on case study cards lifts click-through | Card copy variation | Card CTR | P2 |
| 10 | Reducing form fields from 8 to 4 increases submission rate without reducing lead quality | Form-field count | Submission rate, sales-qualified rate | P0 |

**Test protocol.**
- Minimum sample: 1,000 sessions per variant, or 4 weeks elapsed, whichever first.
- Primary metric agreed before launch.
- Tool: Google Optimize replacement (since deprecated) — VWO or PostHog feature flags.
- Statistical confidence: 95%; if winner not declared at end of window, consider longer run before declaring.

---

## 10. Trust & Social Proof Content

### 10.1 Six testimonial blocks

**Testimonial 1 — Procurement, electrical OEM**
> “Swastik’s mould-flow analysis explained the field failures we’d been seeing for two years on our previous moulder. The new tool came in at lead time and the scrap rate has held under 0.5% across 18 months. The reorder pricing has held too — that’s the part that mattered most to us.”
> **— [Name], Procurement Head, [Switchgear OEM], Vadodara**

**Testimonial 2 — Design engineer, medical device**
> “T1 sample dimensionally inside tolerance on every critical-to-function feature. That doesn’t happen often. The DFM markup we got at quote stage caught the gate location issue our previous moulder had missed for two years.”
> **— [Name], Head of NPI, [Medical Device Maker], Pune**

**Testimonial 3 — Operations director, industrial pump OEM**
> “Most moulders would have asked us to pay for a new tool. Swastik refurbished the existing tool, fixed the process, and gave us a cycle-time improvement we hadn’t even asked for. Cost recovered in 9 weeks of production.”
> **— [Name], Operations Director, [Pump OEM], Coimbatore**

**Testimonial 4 — Founder, consumer electronics SME**
> “We came to Swastik with a Bluetooth speaker enclosure and no manufacturing partner. Six months later we were shipping SKU-packed units. They treated our 8,000-unit first run with the same rigour our friends’ multinational accounts apparently get. That’s rare.”
> **— [Name], Founder, [Consumer Electronics Brand], Mumbai**

**Testimonial 5 — R&D engineer, electrical connector OEM**
> “The vertical moulding cell was the right answer for our cable assembly programme — we’d been fighting a 3.2% reject rate on horizontal-press insert work for a year. Swastik redesigned the jig and the encapsulation cycle, and the reject rate has held at 0.4% across 220,000 cables.”
> **— [Name], R&D Engineer, [Connector OEM], Bengaluru**

**Testimonial 6 — Procurement, industrial gear maker**
> “Our gear programme moved to Swastik in 2022. Quoted price has held across two resin-price cycles. Lead time has been within commitment on every release. We added a second part to their plate last quarter.”
> **— [Name], Senior Buyer, [Industrial Gear Manufacturer], Aurangabad**

### 10.2 Three video testimonial scripts (60–90 seconds each)

**Video script 1 — Medical device customer (75 seconds)**

> [00:00–00:08] **On-camera:** *“My name is [Name]. I head NPI at [Medical Device Company] in Pune.”*
> [00:08–00:25] **Voiceover with B-roll of plant:** *“We launched our diagnostic instrument relaunch with Swastik as the moulding partner. The previous housing had been moulded by another vendor and we’d had two years of issues with mating-face dimensional drift.”*
> [00:25–00:50] **On-camera:** *“The first thing Swastik did at quote stage was mark up our drawing with a gate-location concern. They were right. The new tool — single-cavity S136 — gave us T1 samples that were dimensionally inside tolerance on every critical feature, first time.”*
> [00:50–01:15] **B-roll of the part being moulded:** *“We hit our internal validation deadline on schedule, which doesn’t happen often. The reorder pricing has held. We’re running 22,000 units a year on this tool now and reject rate is 0.4%.”*
> **End card:** *Swastik Plastic. Mumbai. 2005.*

**Video script 2 — Procurement at electrical OEM (60 seconds)**

> [00:00–00:10] *“We chose Swastik because their mould-flow analysis explained the field failures we’d been seeing.”*
> [00:10–00:30] *“We had a switchgear terminal block running on a 3-cavity tool offshore, weld-line porosity in our V0 grade was driving dielectric breakdown in moisture environments. Swastik proposed a 6-cavity hot-runner replacement, doubled our cavity count, relocated the gates.”*
> [00:30–00:55] *“Tool came in at 11 weeks. T1 hit 0.3% scrap on a 200-shot run. Production has held under 0.5% across 380,000 parts and 18 months. Tool cost recovered in 8 weeks. Field dielectric failures: zero.”*
> **End card.**

**Video script 3 — Founder at SME (90 seconds)**

> [00:00–00:10] *“My name is [Name]. I’m the founder of [Company]. We make consumer electronics — small startup.”*
> [00:10–00:30] *“In 2021 I had a speaker enclosure design and no manufacturing partner. Most moulders I called wanted volumes I couldn’t commit to. The ones who didn’t care about volume wanted timelines I couldn’t hit.”*
> [00:30–01:00] *“Swastik took the brief on a phone call, ran a DFM workshop on the four moulded parts, cut the family of moulds in 11 weeks. They treated my 8,000-unit first run with the same rigour their multinational accounts apparently get.”*
> [01:00–01:30] *“Three years on we’ve shipped 145,000 units across two product variants. They’re still our partner. The founder-to-founder conversation we started in 2021 still happens — and that’s the part of working with them I value most.”*
> **End card.**

### 10.3 Client logo strip — curatorial rationale

**The logic.** Logo strips work when the mix tells a story; they look generic when they look like a Yellow Pages page. We curate the home-page logo strip by industry mix:
- **2 industrial logos** — one large OEM, one mid-size SME. Tells the procurement viewer “we serve serious customers, not just contract jobs.”
- **2 medical logos** — one diagnostic, one consumable. Tells the design-engineer viewer “medical-grade is real here, not aspirational.”
- **2 electrical logos** — one switchgear, one connector. Tells the engineering viewer “electrical components are core, not occasional.”

**Logo display rules.**
- All logos in single greyscale on the homepage strip — visual consistency.
- Coloured logos on the dedicated `/case-studies` index where each logo links to its case study.
- Hover state on each logo: short caption with the part type and metric (“PA66 V0 terminal block, 0.4% scrap, 380K parts”).
- Avoid logos where the customer hasn’t given written marketing permission. Anonymise via category badges instead (e.g. *“Tier-1 Indian switchgear OEM”*).

### 10.4 Awards / recognition copy (placeholder structure)

Use this block once we have real recognition to slot in. Until then, do not fabricate — empty space is more credible than invented awards.

```
[AWARD NAME], [YEAR]
Issued by [ISSUING BODY] for [REASON].
[1-line context.]
[Link or downloadable certificate]
```

Placeholder examples to chase:
- ZED (Zero Defect Zero Effect) MSME certification — applicable; on roadmap.
- IndiaMART TrustSEAL Verified — easy to obtain, useful for IndiaMART traffic.
- Customer-specific supplier excellence awards from existing customers.

### 10.5 Press mentions (placeholder structure with embargo-safe phrasing)

```
[PUBLICATION NAME] — [DATE]
[ARTICLE TITLE]
"[1-2 sentence pull quote that mentions Swastik Plastic in context, e.g. about Indian SME manufacturing capability or specific industry trend.]"
[Link to article]
```

Suggested target publications: *Plastics News India*, *Modern Plastics & Polymers*, *Indian Plastic Industry*, *Manufacturing Today India*. Also trade-association journals: AIPMA, OPPI Mumbai chapter publications.

### 10.6 Plant statistics block (6 stats with supporting context)

> **19+ years on the floor.**
> Founded 2005. We’ve worked through three resin-price cycles, two recessions and one pandemic — and still hold quoted prices for 90 days.

> **1,200+ moulds delivered.**
> Designed, cut, polished and trial-sampled on our floor. Single-cavity prototypes through 16-cavity hot-runner production tools.

> **80+ active OEM customers.**
> Industrial product makers, medical device companies, electrical component manufacturers. About a third are mid-size Indian OEMs; about a fifth are SME founders running their first programme.

> **20M+ parts produced annually.**
> Across [16] presses running two-shift baseline, expandable to 24×7 for surge volumes. Engineering plastics, glass-filled grades, V0 compounds and medical-grade resins.

> **6 mould-design engineers.**
> Plus a 3-operator tool room and a 4-strong QC team. The same engineer who quotes your tool walks it to the trial press.

> **2 calibrated CMMs.**
> NABL-traceable calibration, dimensional reports on every batch. Auditors see what they need without asking.

---

## 11. Compliance & Legal Copy

### 11.1 Privacy Policy (DPDP Act 2023 aligned)

**Effective date:** [DATE]
**Version:** 1.0

**1. Who we are.** Swastik Plastic (“we”, “us”, “our”), with registered office at [STREET], Mumbai, Maharashtra, India [PIN], operates the website `swastikplastic.co.in`. For the purposes of the Digital Personal Data Protection Act 2023 (DPDP Act 2023) we are the *Data Fiduciary* for personal data collected through this website.

**2. What personal data we collect.** We collect the following categories:
- *Identifiers:* name, company name, work email, phone number.
- *Project data:* CAD drawings, technical specifications, RFQ details that you upload or share.
- *Usage data:* IP address, browser type, pages viewed, referrer, device type.
- *Cookies and similar tech:* see our [Cookie Policy](/cookies).

**3. Lawful basis for processing.**
- *Consent:* you provide consent when you submit a form on our website.
- *Legitimate use:* for responding to your enquiry, providing the requested deliverable, and contacting you about a related programme.
- *Legal obligation:* tax invoicing, customs documentation, retention of project files for statutory periods.

**4. How we use your data.**
- To respond to your RFQ or enquiry within 1 business day.
- To send you the brochure, DFM checklist, material guide or other lead magnet you requested.
- To execute, deliver and document any moulding or tooling project you commission.
- To send you transactional emails (quote, dispatch, invoice).
- To send you nurture or marketing communications, only if you opt in or if you are an existing customer.

**5. Who we share data with.**
- *Internal:* sales engineers, project engineers, leadership. Access controlled and logged.
- *Service providers (Data Processors):* email service provider (e.g. Postmark/SES), CRM (HubSpot/Zoho), file storage (AWS S3), analytics (GA4, Hotjar). Each is bound by contractual confidentiality.
- *Logistics partners:* for shipping moulds and parts to you.
- *Statutory authorities:* when required by law.

We do **not** sell personal data. We do **not** use customer drawings to train AI models or share them with other customers.

**6. International transfers.** Some of our service providers store data on servers outside India. We use providers with appropriate safeguards and we transfer data only as permitted under the DPDP Act 2023.

**7. Data retention.**
- *Marketing leads:* 24 months from last interaction, then deleted unless customer relationship has begun.
- *Customer project files:* duration of engagement plus 3 years for non-medical / non-electrical-safety work.
- *Medical and electrical-safety project files:* 7 years post-engagement (regulatory).
- *Tax / financial records:* as mandated under Indian tax law (presently 8 years).

**8. Your rights under the DPDP Act 2023.**
- Right to information about the personal data we process about you.
- Right to correction and erasure (subject to lawful retention obligations).
- Right to grievance redressal.
- Right to nominate (an individual to exercise your rights in the event of incapacity).
- Right to withdraw consent at any time, without affecting the lawfulness of processing prior to withdrawal.

To exercise any of these rights, email **dpo@swastikplastic.co.in** or write to: **Data Protection Officer, Swastik Plastic, [STREET], Mumbai [PIN], Maharashtra, India.**

**9. Grievance officer.** Under the DPDP Act 2023, our designated Grievance Officer is **[NAME], Grievance Officer, Swastik Plastic. Email: grievance@swastikplastic.co.in. Phone: +91 [PHONE]**. We will acknowledge grievances within 7 business days and resolve within 30 days.

**10. Children’s data.** Our website is intended for B2B audiences. We do not knowingly collect personal data of individuals under 18 years of age.

**11. Security.** We use access controls, encryption (in transit and at rest for sensitive files), and regular review of provider contracts. No system is perfectly secure; we will notify affected users and regulators in the event of a notifiable breach as required by the DPDP Act 2023.

**12. Changes to this policy.** We will publish the updated effective date at the top of this page when material changes are made.

---

### 11.2 Terms of Service

**Effective date:** [DATE]

**1. About these terms.** By using `swastikplastic.co.in` (“the site”) you agree to these terms. If you do not agree, do not use the site.

**2. Our services.** The site is informational and provides a route for prospective customers to send RFQs to Swastik Plastic. Submission of an RFQ does not create a contract. Contracts for moulding work are formed only upon written PO acceptance by us, on our standard terms and conditions for the supply of plastic moulds and moulded parts.

**3. Intellectual property.** All site content, including text, images, graphics, schematics, code and downloadable PDFs, is owned by Swastik Plastic or licensed to us. You may share links and quote up to 100 words with attribution. Bulk reproduction or commercial reuse requires written permission.

**4. Customer-supplied content.** When you submit a drawing, photograph, specification or other content via this site, you warrant that you have the right to do so. You retain all IP rights in your content; we use it solely to respond to your enquiry and (if a contract is formed) to perform the contracted work. We do not reuse customer drawings for other customers.

**5. Acceptable use.** You agree not to use the site to upload malware, attempt unauthorised access, scrape content systematically, or otherwise misuse the service.

**6. Disclaimers.** The site is provided “as is.” Capability descriptions, lead times, and tolerances stated on the site are typical and indicative. Specific terms apply only to projects that have a written PO and acceptance.

**7. Limitation of liability.** To the maximum extent permitted by Indian law, Swastik Plastic’s liability arising from your use of the site is limited to ₹10,000. This does not limit liability for fraud, gross negligence, or matters that cannot be limited by law.

**8. Governing law and jurisdiction.** These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.

**9. Contact.** For any questions about these terms: legal@swastikplastic.co.in.

---

### 11.3 Cookie Policy

**Effective date:** [DATE]

**1. What cookies are.** Cookies are small text files placed on your device when you visit a site. They allow the site to remember your actions and preferences.

**2. Cookies we use.**
| Cookie | Type | Purpose | Retention |
|---|---|---|---|
| `session_id` | Strictly necessary | Maintain your form session | Session |
| `cookie_consent` | Strictly necessary | Remember your cookie consent | 12 months |
| `_ga`, `_ga_*` | Analytics (GA4) | Aggregate site usage | 13 months |
| `_clck`, `_clsk` | Analytics (Microsoft Clarity) | Heatmaps, scroll, session replay (anonymised) | 13 months |
| `wa_chat` | Functional | Remember WhatsApp chat opt-in | 6 months |

We do **not** use third-party advertising cookies, retargeting pixels (Meta/Google Ads), or LinkedIn Insight Tag. (If we add these later, we will update this policy and request fresh consent.)

**3. How to control cookies.** Use the cookie banner on first visit to accept or restrict to essentials only. You can change your choice anytime via the “Cookie settings” link in the footer. You can also clear cookies in your browser settings.

**4. Cookie banner copy.**
> *This site uses cookies for essential functionality and to understand which pages help our visitors. No third-party advertising or ad-network tracking. Read our cookie policy for the detail.*
> [Accept] [Essentials only]

---

### 11.4 Data handling statement for uploaded drawings

(Display on `/quote` next to the upload field, also as a standalone page at `/data-handling`.)

**Your design files stay confidential.**

When you upload a drawing or specification to our quote portal, here is exactly what happens to it:

1. **Storage.** Files are stored on our restricted-access cloud storage (AWS S3, Mumbai region), with IAM-only access controls. Files are encrypted in transit (TLS 1.2+) and at rest (AES-256).
2. **Who can access.** Only the project engineer assigned to your RFQ and the senior leadership team can access the files. We log every access. Files are never stored on personal devices, personal cloud accounts, or shared via personal email.
3. **What we use them for.** Solely to respond to your RFQ and (if a contract is formed) to perform the contracted work. Drawings are not reused for other customers, are not used to train AI models, and are not shared with our suppliers without your written permission.
4. **NDA on request.** If you’d like an NDA in place before any technical review, reply to your RFQ confirmation email with “please send NDA” and we’ll send our standard form (or we’ll happily review and sign yours).
5. **Retention.** Drawings are retained for 36 months from last interaction unless a customer relationship has begun, in which case they’re retained per the duration of engagement. You can request earlier deletion at any time by emailing `dpo@swastikplastic.co.in`.
6. **Data fiduciary.** Swastik Plastic is the Data Fiduciary for these files under the DPDP Act 2023.

---

### 11.5 NDA-on-request notice

Display this short notice on every page that accepts a drawing upload, and on the contact page:

> **NDA available before any technical exchange.**
> If you’d prefer to sign an NDA before sharing technical drawings or specifications, request one at `legal@swastikplastic.co.in` or by replying to your RFQ confirmation email. We have a standard NDA on letterhead, and we’re equally happy to sign yours after legal review.

### 11.6 Disclaimer for capability claims

(Display in the footer or on a dedicated `/disclaimer` page.)

> **Disclaimer.** Capabilities described on this site (including press tonnage, mould envelopes, polymer ranges, tolerances, lead times, certifications, plant area and production volumes) are typical and indicative as of the policy effective date. Project-specific terms apply only to projects with a written PO accepted by Swastik Plastic. Case studies are based on actual customer programmes; customer identities are anonymised under our standard NDAs unless explicit written permission has been obtained. Stated outcomes (cycle times, scrap rates, lead times) are real but specific to those programmes; outcomes on your programme will depend on part design, polymer selection, volume and operational variables that we will discuss at the quote stage.

---

## 12. Voice & Style Guide

### 12.1 Tone descriptors

We sound like an engineering shop that has run customer programmes since 2005, talking to a customer who knows what they’re doing. Three anchor descriptors:

1. **Specific, not generic.** Say *PA66 GF30 V0*, not *high-grade nylon*. Say *6–10 weeks for a single-cavity P20 tool*, not *competitive lead time*.
2. **Confident, not boastful.** State the capability flatly. The fact that we hold tolerances or commit lead times is not extraordinary; it’s our job. Don’t breathlessly oversell what should be table stakes.
3. **Direct, not deferential.** A vendor who hides behind hedges (“we strive to,” “we endeavour to”) loses an engineering reader inside a sentence. State the commitment, then explain the constraint.

### 12.2 Do / don’t examples

| Don’t | Do |
|---|---|
| World-class injection moulding solutions | In-house tool room, [40T–450T] presses, ABS/PA66/PC routinely run |
| Industry-leading quality standards | ISO 9001:2015. FAI on first batch, AQL on visual, dimensional report on every consignment |
| We strive to deliver on time | Lead time committed in writing at PO. If we anticipate a slip, we tell you before it happens |
| Our team of dedicated experts | Six mould-design engineers. The same engineer who quotes your tool walks it to the trial press |
| Cutting-edge mould design technology | Moldex3D / Moldflow on parts where wall thickness is below 1.5 mm |
| State-of-the-art facility | [12,000 sq.ft.] plant, [16] presses, two CMMs, in-house tool room |
| Trusted partner for all your moulding needs | We mould engineering plastics for industrial, medical and electrical OEMs |
| We pride ourselves on customer satisfaction | Reorder pricing held across two resin-price cycles since 2022. That’s how we’re measured |

### 12.3 Sentence length targets

- **Hero copy:** 8–14 words per sentence. Single thought per sentence.
- **Body prose:** 15–22 words average. Mix short and longer sentences for cadence.
- **Technical capability descriptions:** ≤25 words. If a sentence runs longer, break it.
- **FAQ answers:** 60–120 words total per answer. Single specific answer first; context after.
- **Email subject lines:** 5–8 words. Specific noun phrase, not a sales pitch.

### 12.4 Words to avoid

- *Best-in-class*, *world-class*, *leading*, *premier*, *top-tier* — without proof, these are noise.
- *Solutions* (as a noun for what we sell) — say what we actually do: *moulds*, *injection moulding*, *plastic parts*.
- *Cutting-edge*, *state-of-the-art*, *next-generation* — replace with the actual specification.
- *Strive*, *endeavour*, *aim to* — replace with the commitment or remove entirely.
- *Synergy*, *leverage* (as a verb), *robust*, *seamless*, *holistic*, *empower*, *unlock* — corporate flab.
- *Boutique*, *premium*, *bespoke* (in B2B context) — pretentious.
- *Just*, *really*, *very*, *simply*, *actually*, *basically* — filler.
- *Game-changing*, *revolutionary*, *disruptive* — startup language; we are 20 years old.

### 12.5 Words to prefer

- *Mould* (not “mold”) — Indian English.
- *Injection moulding* (two words; not “injection-moulding” unless adjectival).
- *Tool room*, *cavity*, *runner*, *gate*, *ejector*, *core*, *slider* — use the trade vocabulary.
- *Cycle time*, *scrap rate*, *first-pass yield* — quantify whenever possible.
- *Documented*, *frozen process*, *traceable* — specific, defensible.
- *Tolerance class CT4–CT5*, *±0.05 mm*, *AQL 0.65* — name the standard or the number.

### 12.6 Number formatting

- **Indian large numbers in customer-facing copy:** lakh / crore for INR amounts when audience is Indian SME/founder; *million* / *billion* when audience is international or technical.
  - Example (Indian audience): *“Tooling cost: ₹6.5 lakh.”*
  - Example (international audience): *“Tooling cost: ~USD 8,000.”*
- **Currency.** INR by default with currency code; USD as conversion in parentheses on international-facing pages. Use `₹` symbol consistently. Avoid `Rs.` / `INR` in body prose (use `₹`).
- **Volumes.** Use comma separators per Indian convention in copy aimed at Indian audiences (*1,20,000 units/year*); international convention on export-targeted copy (*120,000 units/year*).
- **Tolerances and dimensions.** SI units, decimal point: *±0.05 mm*, *2.4 mm wall*, *250T press*. No spaces between number and unit for ton/T, but space before mm/kg/sec.
- **Percentages.** No space: *0.4%*. Always one decimal place for scrap rates: *0.4%* not *0%*.
- **Lead times.** Bands not single numbers: *6–10 weeks*, not *8 weeks*. Single numbers imply commitments we can’t make until PO.

### 12.7 Date formatting

- **Body prose:** *April 2025* or *25 April 2025*. Avoid US format (*04/25/2025*) — confusing internationally.
- **In schema (JSON-LD):** ISO 8601 — *2025-04-25*.
- **In page footers:** *Effective 25 April 2025.*

### 12.8 Capitalisation rules

- *mould* (lowercase) in body prose; *Mould Making* (title case) only in proper page titles, navigation, headings.
- *industries* (lowercase) in body; *Industries* (title case) for navigation labels.
- *swastikplastic.co.in* (lowercase) in URLs.
- Sentence case for buttons and CTAs (*Send drawing for quote*) — not Title Case, not ALL CAPS.
- Trade names retain their official capitalisation (*Moldex3D*, *Moldflow*, *Synventive*, *YUDO*, *Hasco*).
- Product/brand names of polymers retain official capitalisation: *Hytrel*, *Nylon* (when referring to the family) lowercase, *PA66* uppercase, *POM* uppercase.

### 12.9 Indian English spelling — apply consistently

- *mould* (not mold), *moulding*, *moulded*
- *colour* (not color)
- *organisation* (not organization)
- *centre* (not center)
- *programme* (not program, except for software/code)
- *catalogue* (not catalog)
- *fibre* (not fiber)
- *tonne*, *tonnage* (where unit is metric ton)

### 12.10 Treatment of technical terms

- First mention in a piece: italicise and link to glossary or capability page if defined elsewhere — *insert moulding* (linked first time), then plain text on subsequent uses.
- Acronyms: spell out at first use in any page — *DFM (Design for Manufacturability)*, *FAI (First Article Inspection)*, *AQL (Acceptance Quality Limit)*. Subsequent uses: acronym only.
- Material grades by name: *PA66 GF30 V0*, *PC FR*, *PETG*, *POM*. No need to expand acronyms for polymers — engineering audience knows them.
- Standards: cite the standard with number: *ISO 9001:2015*, *DIN 16742*, *UL94 V0*, *ISO 13485*.

### 12.11 CTA verb library

| Intent | Verbs (preferred) | Verbs (avoid) |
|---|---|---|
| Quote | *Send · Request · Get · Submit* | *Inquire · Reach out* |
| Consultation | *Talk · Book · Schedule · Speak* | *Connect · Engage* |
| Download | *Download · Get · View · Read* | *Access · Unlock* |
| Plant visit | *Book · Schedule · Visit* | *Tour · Experience* |
| WhatsApp | *Chat · Message · Ping* | *Reach · Connect* |
| Contact | *Email · Call · Write* | *Contact us today* |

**Pattern for CTAs:** verb + specific object. *Send drawing for quote.* *Book a 15-minute call.* *Download the brochure.* Avoid one-word CTAs (*Submit*, *Click here*) — never specific enough.

---

## 13. Measurement & Reporting

### 13.1 KPIs

**Primary KPI**
- **RFQ form submissions per month.** Quality-filtered (drawings attached or specific spec described).
- Target month 3: 12 RFQs/month.
- Target month 6: 25 RFQs/month.
- Target month 12: 50 RFQs/month.

**Secondary KPIs**
- **Brochure downloads** per month.
- **WhatsApp clicks** (from sticky CTA bar and contact page).
- **Call clicks** (`tel:` link clicks).
- **Plant-tour bookings.**
- **Lead magnet downloads** (DFM checklist, material guide, vendor checklist, RFQ template, cost guide) per month.
- **Sales-qualified RFQs** — RFQs that progress to a written quote.
- **Quote-to-PO conversion** — quotes that convert to a tooling or production PO. Target: ≥18% by month 12.

**Vanity metrics to ignore**
- Bounce rate in isolation (case study and FAQ pages have legitimately high bounces — they answer the question and the visitor leaves satisfied).
- Raw pageviews without intent context.
- Time on page in isolation.
- Social media followers.
- Domain Authority / Domain Rating without traffic mapping.

### 13.2 GA4 event taxonomy

```
Event name             | Parameters
-----------------------|-----------------------------------------------------
page_view              | page_path, page_title, referrer
cta_click              | cta_label, cta_location, cta_destination
form_started           | form_id, form_name, page_path
form_field_abandoned   | form_id, last_field_focused, time_on_form
form_submitted         | form_id, form_name, lead_source
file_upload_success    | file_extension, file_size_bucket
file_upload_failed     | file_extension, error_type
wizard_step_advance    | step_number, step_name
wizard_step_back       | step_number, from_step
wizard_completed       | total_time_seconds
brochure_download      | source_page
lead_magnet_download   | magnet_name, source_page
call_click             | source_page, source_element
whatsapp_click         | source_page, source_element, prefilled_message_id
faq_question_expand    | question_id, page_path
case_study_engaged     | case_study_slug, scroll_depth_percent
service_page_engaged   | service_slug, scroll_depth_percent
exit_intent_shown      | source_page
exit_intent_converted  | source_page, magnet_name
scroll_depth           | depth (25/50/75/90), page_path
```

**GA4 conversions (mark these as Key Events).**
- `form_submitted` (RFQ form, primary)
- `brochure_download`
- `lead_magnet_download`
- `wizard_completed`
- `call_click`
- `whatsapp_click`

### 13.3 Conversion funnel definition

```
Stage 1: Awareness         → site sessions
Stage 2: Engagement        → service page views OR case study views OR insight reads
Stage 3: Lead capture      → form_submitted OR brochure_download OR lead_magnet_download
Stage 4: Sales-qualified   → CRM-flagged after project engineer review
Stage 5: Quote sent        → quote PDF emailed
Stage 6: PO won            → PO accepted in writing
```

Track conversion rate at each stage. Investigate drops over 5 percentage points week-on-week.

**Healthy benchmarks (refine as data lands).**
- Stage 1→2: 40–55% (sessions that view a service / case study / insight).
- Stage 2→3: 6–10% (engaged sessions that capture a lead).
- Stage 3→4: 55–70% (leads that become sales-qualified).
- Stage 4→5: 80–90% (SQLs that get a quote).
- Stage 5→6: 18–25% (quotes that win a PO).

### 13.4 Monthly reporting template

**Section 1 — Headline metrics (this month vs last month vs YoY)**
| Metric | This month | Last month | Δ MoM | YoY |
|---|---|---|---|---|
| Sessions | | | | |
| Engaged sessions | | | | |
| RFQ submissions | | | | |
| Brochure downloads | | | | |
| Lead-magnet downloads | | | | |
| WhatsApp clicks | | | | |
| Call clicks | | | | |
| SQLs | | | | |
| POs won (count) | | | | |
| POs won (₹ value) | | | | |

**Section 2 — Top organic queries (Search Console)**
- Top 20 queries by impressions, with clicks and CTR.
- Highlight queries that gained or lost rank (>5 positions).

**Section 3 — Top landing pages**
- Top 10 by organic sessions.
- Conversion rate to RFQ submission per page.

**Section 4 — Conversion funnel**
- Stage-to-stage conversion rates.
- Drop-off explanation if any stage moved >5pp.

**Section 5 — A/B test status**
- Tests live, tests concluded, results.

**Section 6 — Content shipped this month**
- New pages published, blog posts shipped, lead magnets updated.
- Backlinks earned, citations claimed.

**Section 7 — Action items for next month**
- Top 3 changes prioritised based on the month’s data.
- Owner and target date per item.

**Reporting cadence.**
- Monthly: full report (the template above).
- Quarterly: trend review, persona-by-persona analysis, content-cluster ranking review, citation audit.
- Annually: full SEO audit, technical refresh, persona re-validation.

---

## Appendix A — Implementation Priority

If you ship in this order, you compound impact rather than spreading effort thin.

**Week 1–2 (foundation):**
1. New IA + URL structure deployed (with 301s from legacy URLs).
2. Functional RFQ form with file upload (replace current `mailto:` handler).
3. Sticky mobile CTA bar.
4. Schema markup on every page.
5. New `robots.txt` and `sitemap.xml`.

**Week 3–4 (core content):**
1. Homepage rewrite per Section 4.1.
2. Five service pages.
3. Three industry pages.
4. About, Capabilities, Quality, Process pages.

**Week 5–6 (proof and trust):**
1. Three case studies.
2. FAQ page.
3. Testimonial blocks across the site.
4. Brochure (8-page PDF) and DFM checklist (1-page PDF).

**Week 7–8 (depth and lead gen):**
1. Two full insight articles + 6 briefs scaffolded.
2. Multi-step RFQ wizard.
3. Email nurture sequences plumbed into ESP.
4. Cookie banner and DPDP-aligned legal pages.

**Week 9–12 (optimisation and scale):**
1. Local SEO push — GBP optimisation, top 10 citations.
2. A/B tests #1, #2, #5 launched in parallel (priorities P0).
3. Heatmap/session replay (Hotjar or Clarity) installed.
4. Monthly reporting template plumbed in.

---

## Appendix B — Replace-on-One-Pass Placeholder Index

Search and replace these tokens once with real values:

- `[CITY]` — locality within Mumbai (e.g. *Andheri*, *Vasai*).
- `[STREET]` — full plot/street address.
- `[PIN]` — postal code.
- `[LAT]`, `[LNG]` — geo coordinates for schema and map embed.
- `[PHONE]` — primary sales phone (with country code).
- `[PHONE-OPS]` — operations phone if separate.
- `[FOUNDER_NAME]` — founder/MD’s full name.
- `[ISO_CERT_NUMBER]`, `[ISSUING_BODY]`, `[EXPIRY_DATE]` — ISO 9001 cert details.
- `[LINKEDIN_HANDLE]`, `[INDIAMART_HANDLE]`, `[FB_HANDLE]`, `[TRADEINDIA_HANDLE]` — social/directory profile slugs.
- `[EMPLOYEE_COUNT]` — headcount.
- `[40T]`, `[450T]`, `[16]`, `[12,000 sq.ft.]`, `[6]`, `[3]`, `[12]`, `[4]`, `[800 × 600 × 500 mm]`, `[32]`, `[1,200+]`, `[80+]`, `[20M+]`, `[60,000+]`, `[500 kVA]`, `[2026]`, `[7 years]`, `[24 months]`, `[36 months]` — quantitative placeholders. Replace with the real value, retain the formatting.
- `[Name]` in testimonials and case studies — replace with real customer names where written permission exists; otherwise keep anonymised role + location.
- `[YEAR]`, `[BRAND]` in machine list table — populate from actual asset register.
- `[Plot No.]`, `[Industrial Estate / Locality]` — plant address detail.

---

**End of document.**












