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

## Navigation Anchors
- Services page sections: `#business-ai`, `#tech`, `#ai-engineering`
- Industries page sections: `#e-commerce`, `#legal`, `#finance`, `#customer-service`
- All anchored sections must have `scroll-margin-top: 100px` to account for the fixed nav

## Components
- `ButtonMinimal` from `$lib/custom/ButtonMinimal/ButtonMinimal.svelte` — use for all CTAs
  - Variants: `primary` | `outline` | `ghost`
  - Sizes: `sm` | `md` | `lg`
