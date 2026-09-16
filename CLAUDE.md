# Claude Code Rules for xtscale

## ABSOLUTE RULES — NO EXCEPTIONS

### NO EM DASHES IN COPYWRITING — EVER

**NEVER** use em dashes (`—`) in any copy, content, headings, descriptions, labels, UI text, mock data, meta descriptions, or any other written content — **anywhere in this project, under any circumstances.**

This includes:
- Page copy and body text
- Headings and subheadings
- Button labels and CTAs
- Mock panel / UI demo content
- Meta descriptions and `<title>` tags
- Alt text, aria labels
- Any string that will be rendered to users

**Alternatives to use instead:**
- Replace `X — Y` (appositive) with `X. Y` (new sentence) or restructure
- Replace `X — Y` (list separator) with `X: Y` (colon) or `X · Y` (middot)
- Replace `X — Y — Z` (parenthetical) with `X, Y, Z` (commas)
- Rewrite the sentence so it doesn't need a dash

This rule was established explicitly by the project owner. Violations are unacceptable.

---

## Tech Stack
- SvelteKit with Svelte 5 runes (`$props()`, `$state()`)
- Tailwind CSS for utility classes; scoped `<style>` blocks for component-specific CSS
- TypeScript

## Design System
- Background: `#09090f` (outer), `#0a0a12` (alt section), `#111117` (cards), `#0d0d14` (inner/input)
- Teal accent: `#00d4aa`
- Borders: `rgba(255, 255, 255, 0.06)` standard, `rgba(0, 212, 170, 0.2)` teal
- Text: `#ffffff` headings, `#94a3b8` body, `#64748b` secondary, `#475569` muted

> For full design work, read **`DESIGN.md`** (repo root): complete token list, typography, the signature
> visual patterns, the component inventory (active vs dead), a page-by-page map, and current visual debt.

## Positioning (since 2026-09-15)
- shopsupport.ai builds **expert shopping AI agents for retail**. The AI Budtender is ONE vertical of five, and it is listed LAST (order: Retail, Wine & beverage, Fashion, Jewelry, Cannabis).
- The word "chat" never appears in rendered copy: these are AI agents / shopping AI assistants, and the analytics are "Insights". No automotive, no sporting goods verticals (removed on request 2026-09-15).
- Verticals are data: `src/lib/data/verticals.ts` drives the hero tabs, home grid, nav dropdown and the
  `/industries` deep dives. Add or reword a vertical there, nowhere else.
- Brand is always spelled `shopsupport.ai` (lowercase, with .ai). Use `BrandName`.
- Never mention cartender.ai, Riffinity or Alpine in public copy.
- No public pricing anywhere: /pricing was removed on 2026-09-16 and 301s to /contact. Every vertical is "scoped pilot, then platform fee plus usage", no figures.

## Navigation Anchors
- Services page sections: `#business-ai`, `#tech`, `#ai-engineering`
- Industries page sections: `#retail`, `#beverage`, `#fashion`, `#jewelry`, `#cannabis`, `#customer-service`
- All anchored sections must have `scroll-margin-top: 100px` to account for the fixed nav

## Components
- `ButtonMinimal` from `$lib/custom/ButtonMinimal/ButtonMinimal.svelte` — use for all CTAs
  - Variants: `primary` | `outline` | `ghost`
  - Sizes: `sm` | `md` | `lg`
