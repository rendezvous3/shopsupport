# INTERNAL — POS Integration Roadmap

> Internal only. Not served by SvelteKit (lives outside `src/routes` and `static`). Do not link publicly.

## Public positioning (today)
The website positions ShopSupport as **Dutchie-only**: "Built for Dutchie." All public copy should
reference Dutchie exclusively. Do **not** advertise Treez, Shopify, WooCommerce, Square, or any other
platform as supported until a connector is actually live.

## Internal reality / roadmap
We are architecting the catalog + sync layer to be POS-agnostic so additional connectors can be added
without a rewrite. Planned / under consideration, roughly in priority order:

- **Dutchie** — live today (dispensary POS + catalog).
- **Blaze** — high priority next (dispensary POS).
- **Treez** — planned (dispensary POS).
- **Shopify / WooCommerce** — DTC storefronts, especially for wineries.
- **Square** — general retail / DTC.
- **Custom REST API + webhook connectors** — fallback for anything with an API.

## Rule of thumb
When we add a connector and it is in production for a real store, we update the public copy to name it.
Until then, it stays in this doc only. Keep marketing claims behind shipped reality.

---

## Wineries — removed from public site (June 2026)

**Decision:** All winery references were removed from the public site. The site is now positioned
purely as dispensary SaaS on Dutchie.

**Why:**
- We have no winery client yet. Commerce7 (the main winery commerce platform) has said we should land
  a client before they vouch for / partner with us, so we cannot point to a reference or a live integration.
- Advertising a "winery SaaS" we cannot deliver is the same honesty problem as the multi-POS claims:
  selling something that does not exist.
- Wineries are realistically a **custom-development engagement, not SaaS**, at this stage: heterogeneous
  stacks (some Commerce7, some not, some homegrown), low initial client count, high-touch onboarding.
- Focus: leading cleanly with the proven Dutchie dispensary product is the stronger near-term story.

**Important distinction for qualifying winery leads (internal):**
- A **winery that produces wine** (DTC producer) is a different customer from a **wine store / retailer**.
  Producers may not even use Commerce7. Their needs are bespoke.
- First few winery deals should be **paid custom builds ($15k+ minimum)**, treated as funded R&D, not free
  SaaS pilots. We do not build SaaS for free. A paying first client may later seed a productized offering.
- The custom-dev / bespoke business may eventually be spun out as a **separate entity / site** from the
  ShopSupport dispensary SaaS, so the two models do not blur.

**Future re-integration path:**
- Re-add wineries to the public site only once we have a paying winery client to reference and (ideally)
  a working Commerce7 or DTC connector in production.
- When that happens, restore: industries winery section, hero/vertical messaging, winery vision card,
  pairing/DTC mocks, and nav/footer winery links. Git history (this change) is the reference for what was removed.

