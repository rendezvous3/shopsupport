# DESIGN.md — Design system & handoff reference

> **Read me first if you are doing design/UI work on this site.** `CLAUDE.md` (auto-loaded) has the
> hard rules and token shortlist; this file is the full visual reference: tokens, typography, the
> signature patterns, the component inventory (what's actually used vs dead), a page-by-page map,
> and the current visual debt worth improving. Build on top of what's here, don't reinvent it.

---

## 0. How to see the current site

- **Run locally:** `npm run dev` → routes below. `npm run storybook` shows components in isolation.
- **Routes:** `/` (home), `/guided-selling`, `/analytics`, `/industries`, `/services`, `/about`, `/contact`.
- **Live:** deployed on Cloudflare Pages (latest preview printed by `npm run deploy`).
- Take screenshots of each route before redesigning — the look is the spec as much as the code.

## 1. Hard constraints (do not violate)

- **No em dashes anywhere.** See `CLAUDE.md`. Use periods, commas, colons, or `·` (middot).
- **Dispensary-only, Dutchie-only positioning.** No wineries, no Treez/Shopify/WooCommerce/Square in
  public copy. Rationale + roadmap: `docs/INTERNAL-pos-roadmap.md`.
- **Primary CTA is always "Schedule a demo"** (no free trial). Secondary often "Contact us".
- **All CTAs use `ButtonMinimal`** (`$lib/custom/ButtonMinimal/ButtonMinimal.svelte`), variants
  `primary | outline | ghost`, sizes `sm | md | lg`.
- **Anchored sections need `scroll-margin-top: 100px`** (global `scroll-padding-top: 88px` is set in
  `src/routes/layout.css`).

## 2. Tech & styling model

- **SvelteKit + Svelte 5 runes** (`$props()`, `$state()`, `$derived()`). TypeScript.
- **Tailwind v4** (`@import "tailwindcss"` in `src/app.css` and `src/routes/layout.css`), plus
  `@tailwindcss/forms` and `@tailwindcss/typography` plugins.
- **Hybrid styling:** Tailwind utilities for layout/spacing in page markup; **scoped `<style>` blocks**
  in components for the bespoke "panel/mock" visuals. Both are idiomatic here. Match the file you're in.
- **No central token file.** Colors are currently **hardcoded hex** across components and `<style>`
  blocks. (See §8 — introducing CSS variables is the #1 structural improvement.)

## 3. Color tokens

| Role | Value | Usage |
|---|---|---|
| Outer background | `#09090f` | Page background, most sections |
| Alt section background | `#0a0a12` | Alternating sections for rhythm |
| Inner / input / mock background | `#0d0d14` | Mock panels, inputs, inner surfaces |
| Card background | `#111117` | Cards, panels, dropdowns |
| Card hover background | `#141420` | `FeatureCardDark` hover |
| **Teal accent** | `#00d4aa` | Primary accent, CTAs, eyebrows, active states, data viz |
| Teal tints | `rgba(0,212,170,0.07/0.08/0.1/0.12)` | Glows, chip fills, bar fills |
| Teal border | `rgba(0,212,170,0.2)` | Accent borders, chips |
| Standard border | `rgba(255,255,255,0.06)` | Default card/section borders |
| Faint border | `rgba(255,255,255,0.04/0.05)` | Inner dividers |
| Text: heading | `#ffffff` | Headings |
| Text: body | `#94a3b8` (slate-400) | Body copy |
| Text: secondary | `#64748b` (slate-500) | Sub-labels, captions |
| Text: muted | `#475569` / `#334155` | Faint meta, diagram labels |
| Danger | `#ef4444` / `#f87171` | "0 in stock" / negative signals only |

## 4. Typography

- **Display/UI font: `Space Grotesk`** (300–700), loaded in `src/app.html`, applied via
  `src/routes/layout.css` to `:root`, `h1–h4`, `p`, `body`, `nav a`.
  - `h1`: weight 600, `letter-spacing: -0.03em`. `h2–h4`: weight 500, `-0.02em`.
  - (Note: `src/app.css` still defines an unused `--font-inter` var; Space Grotesk wins. Cleanup candidate.)
- **Monospace (`ui-monospace, monospace`)** for technical labels, SVG diagram text, code-like chips.
- **Heading sizes in use:** page H1 `text-4xl sm:text-5xl`; section H2 `text-3xl sm:text-4xl`;
  card titles `text-lg`–`text-2xl`. Section intros `text-xl text-slate-400`.
- **Eyebrow label pattern** (very common): `text-[11px] font-medium tracking-[0.14em] uppercase
  text-[#00d4aa]` above section headings.

## 5. Spacing, layout & shape

- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (narrower content uses `max-w-2xl/4xl/6xl`).
- **Section padding:** `py-20 lg:py-28` (hero/large); `py-16 lg:py-20` (compact bands).
- **Section rhythm:** alternate `#09090f` and `#0a0a12`/`#0d0d14`, separated by
  `border-t border-white/[0.04]`.
- **Radii:** cards `rounded-2xl` (1.25rem); mock panels `~0.875–1rem`; chips/pills `9999px`.
- **Centered section header block:** eyebrow → `h2` → `text-xl` slate intro, `text-center mb-16`.

## 6. Signature visual patterns (the "house style")

Reuse these rather than inventing new ones:

1. **Dark "mock panel"** — the product-demo cards (header row with title + live badge, body rows,
   footer with pulsing dot + status). Canonical CSS: `routes/+page.svelte` (`.rec-panel`, `.intent-panel`),
   `CTASection/LegalAISection.svelte` (`.ai-panel`), `routes/analytics/+page.svelte` (`.analytics-panel`).
2. **Bento grid** — asymmetric capability cards, one full-width. `routes/+page.svelte` (`.bento-*`).
3. **Vertical timeline** — teal node dots on a gradient line. `CardLayouts/CardLayoutTimeline.svelte`
   + `FeatureCardDark` (see home "How it works", guided-selling "How the flow works").
4. **Hero ambiance** — blurred radial **orbs** (`.orb--teal`, `.orb--blue`) + a **dot-grid**
   (`radial-gradient ... 32px`). See `HeroSectionChat.svelte`.
5. **`pulse` keyframe** — live/active status dots (opacity 1→0.3). Defined in several components.
6. **Eyebrow + heading + intro** section header (see §5).
7. **Stat row** — large teal number + small slate label, separated by spacing or thin dividers.
8. **Pills / chips** — rounded-full teal-tinted tags for categories/integrations.
9. **Two-column compare** — "bad vs good" cards (slate X-marks vs teal checks). See
   `guided-selling/+page.svelte` "Why guided beats an open text box".
10. **SVG node diagrams** — monospace-labelled boxes wired to a center "AI CORE". See
    `industries/+page.svelte` hero and `services/+page.svelte` architecture.

## 7. Component inventory

**Active, in production (`src/lib/tailwind/` unless noted):**

| Component | Used by | Purpose |
|---|---|---|
| `Navigation/Navigation.svelte` | all pages | Top nav: Platform ▾, Dispensaries, About, Contact + demo CTA |
| `Footer/Footer.svelte` | all pages | Footer columns + brand |
| `custom/ButtonMinimal/…` | all CTAs | The only button to use for CTAs |
| `HeroSectionChat/…` | home | Main hero: 6 feature tabs + interactive `BudtenderWidget` |
| `BudtenderWidget/…` | home hero | The simulated chat widget (multiple `view` states) |
| `BudtenderChatPreview/…` | home | "Product walkthrough" 6-card showcase |
| `HeroSectionV7/…` | home | "Behind the widget" platform band (compact mode) |
| `FeatureCard/FeatureCardDark.svelte` | home, services, new pages | Standard dark feature card (`horizontal` option) |
| `CardLayouts/CardLayoutTimeline.svelte` | home, guided-selling | Vertical timeline wrapper |
| `CTASection/CTASectionVariation2.svelte` | home, guided-selling, analytics | Final CTA + metrics panel |
| `CTASection/LegalAISection.svelte` | home | POS spotlight (split text + AI panel) |
| `FAQ/FAQSection.svelte` | home | FAQ accordion |

**Dead / unused variations (safe to ignore or delete; do not pattern-match off them):**
`HeroSection`, `HeroSectionV2–V5`, `HeroSectionVariation2–9`, `CTASection`, `CTASectionVariation3–6`
(V4/V5 still contain stale "14-Day Free Trial"/"50+" copy — they don't render), `FeatureCardVariation2–5`,
`IndustryCard*`, `Footer Variation2–4`, `NavigationVariation2`, most `CardLayout*` except Timeline.
Also stray root files `test_copy.svelte`, `test_final.svelte`, `edit.mjs`, and
`routes/services/+page.svelte.bak` / `.orig` are not served.

## 8. Page map (section order)

- **`/` home:** Hero (tabs + widget) → Product walkthrough → "Behind the widget" band → Capabilities
  bento (3 cards) → "Under the hood" (8 `FeatureCardDark`) → "Built for regulated retail" (now a single
  dispensary card) → "How ShopSupport works" timeline → POS spotlight (`LegalAISection`) → FAQ → final CTA → Footer.
- **`/guided-selling`:** Hero → "Why guided beats an open text box" (compare) → flow timeline →
  "Smart enough to adapt" → dual-mode band → "It sells" cards + stat row → CTA.
- **`/analytics`:** Hero → "Read the room" → six demand-signal cards → dashboard mock panels →
  "From insight to action" → CTA.
- **`/industries`:** Hero (SVG node diagram) → Dispensaries deep-dive → Customer Service (Soon) →
  comparison table → CTA. (Winery section removed; nav links here as "Dispensaries".)
- **`/services`:** Hero (architecture diagram) → Business AI sections (POS/Catalog, Shopping Assistant,
  Customer Service Soon, Compliance, "Built for Dutchie" integrations) → Tech infra → AI Engineering →
  Process → Custom Development → CTA.
- **`/about`:** Hero → Philosophy → Vision (3 cards: Dispensary Commerce, Demand Intelligence,
  POS-Native Intelligence) → How it works (paths) → Fine-tuning → CTA.
- **`/contact`:** Form (`+page.server.ts` handles submit) + sidebar.

## 9. Known visual debt / opportunities (good first targets)

- **"Built for regulated retail" (home)** now has a single dispensary card after winery removal — looks
  lonely. Rebalance: make it full-width/centered, or convert to a richer single feature block.
- **Orphaned CSS** from removed winery markup (esp. `industries/+page.svelte` mock-panel styles) — dead
  selectors. Safe cleanup. (svelte-check reports them as unused-selector warnings.)
- **Hardcoded hex everywhere** — introduce CSS custom properties (e.g. `--bg`, `--card`, `--accent`,
  text scale) in `src/routes/layout.css` `:root` and refactor components to them. This is the single
  highest-leverage change for any restyle/theming.
- **Stale `--font-inter`** in `src/app.css` (unused; Space Grotesk is active) — remove to avoid confusion.
- **Many dead variation components** (§7) — pruning reduces noise for future design work.
- **Section density** — several bands are text-only and could use a visual element to match the
  panel-rich sections.

## 10. How to build on top

- **New section:** copy the eyebrow→heading→intro header (§5), wrap in `max-w-7xl` container with
  `py-20 lg:py-28`, alternate the background color from the section above, add `border-t border-white/[0.04]`.
- **New card/visual:** reuse `FeatureCardDark` or clone a mock-panel `<style>` block (§6). Keep the dark
  tokens (§3) and pulsing-dot status idiom.
- **New CTA:** `ButtonMinimal` only; primary = "Schedule a demo".
- **Theming/restyle:** do it via CSS variables (see §9) so a palette change is one place, not 200 hex literals.
- **Always:** dash-free copy, dispensary/Dutchie-only, `scroll-margin-top: 100px` on anchors.
