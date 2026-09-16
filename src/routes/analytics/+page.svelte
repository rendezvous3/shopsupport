<script lang="ts">
  import Navigation from '$lib/tailwind/Navigation/Navigation.svelte';
  import Footer from '$lib/tailwind/Footer/Footer.svelte';
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';
  import FeatureCardDark from '$lib/tailwind/FeatureCard/FeatureCardDark.svelte';
  import CTASectionVariation2 from '$lib/tailwind/CTASection/CTASectionVariation2.svelte';
  import BrandName from '$lib/custom/BrandName/BrandName.svelte';

  const dashTabs = [
    'Overview',
    'Product Demand',
    'Product Lookups',
    'General Questions',
    'Unresolved',
    'Guided Flow',
    'Compliance'
  ];

  const demandKpis = [
    { label: 'Demand', value: '477', sub: 'Product-seeking searches' },
    { label: 'Top category', value: 'edibles', sub: '145 searches' },
    { label: 'No results', value: '6.3%', sub: '30 no-result searches', alert: true },
    { label: 'Entry mode', value: 'Free-form', sub: '451 searches' }
  ];

  const demandKpisRow2 = [
    { label: 'Top subcategory', value: 'edibles · gummies', sub: '37 searches' },
    { label: 'Top potency', value: 'flower · THC ≥ 28%', sub: '31 searches' },
    { label: 'Top effect', value: 'uplifted', sub: '89 mentions' },
    { label: 'Price / budget', value: '0', sub: '0% of demand' }
  ];

  const categoryRows = [
    { category: 'edibles', sub: 'gummies', potency: 'THC/unit 5-9mg', effect: 'uplifted', demand: 145, noResults: '9 (6.2%)' },
    { category: 'flower', sub: 'whole-flower', potency: 'THC ≥ 28%', effect: 'energetic', demand: 120, noResults: '7 (5.8%)' },
    { category: 'prerolls', sub: 'singles', potency: 'THC ≥ 28%', effect: 'relaxed', demand: 93, noResults: '6 (6.5%)' },
    { category: 'vaporizers', sub: 'cartridges', potency: 'THC 85-90%', effect: 'uplifted', demand: 61, noResults: '1 (1.6%)' }
  ];

  const subcategoryRows = [
    { label: 'edibles · gummies', demand: 37, noResults: '4 (10.8%)' },
    { label: 'edibles · drinks', demand: 27, noResults: '1 (3.7%)' },
    { label: 'prerolls · singles', demand: 18, noResults: '0 (0%)' },
    { label: 'flower · whole-flower', demand: 16, noResults: '2 (12.5%)' }
  ];

  const potencyRows = [
    { category: 'flower', potency: 'THC ≥ 28%', demand: 31, noResults: '2 (6.5%)' },
    { category: 'prerolls', potency: 'THC ≥ 28%', demand: 17, noResults: '1 (5.9%)' },
    { category: 'edibles', potency: 'THC/unit 5-9mg', demand: 14, noResults: '0 (0%)' }
  ];

  const effectRows = [
    { effect: 'uplifted', top: 'vaporizers, edibles, flower', demand: 89, noResults: '5 (5.6%)' },
    { effect: 'energetic', top: 'flower, vaporizers', demand: 88, noResults: '3 (3.4%)' },
    { effect: 'relaxed', top: 'prerolls, flower', demand: 48, noResults: '2 (4.2%)' }
  ];

  const unresolvedRows = [
    { query: 'flower less than 18% thc please', reasons: 'no_results', satisfaction: 'resolved' },
    { query: 'chew edibles, berry flavored, 3-5 thc per piece less than $25', reasons: 'no_results', satisfaction: 'open' },
    { query: 'vape for focus', reasons: 'sequence_timeout, no_results', satisfaction: 'unresolved' }
  ];

  const signals = [
    {
      title: 'Category, subcategory, and potency demand',
      description: 'See what shoppers ask for at every level of your menu. Edibles · gummies at 37 searches, flower · THC ≥ 28% at 31. Buy and merchandise against real intent, not last month\'s receipts.'
    },
    {
      title: 'Effect and attribute tracking',
      description: 'Uplifted, energetic, relaxed: track which effects drive searches and which categories they pull from. Know when shoppers specify category (89.8%), effect (53.5%), or potency (22.6%).'
    },
    {
      title: 'No-result and unresolved queries',
      description: '30 searches returned no catalog match (6.3%). Unresolved threads capture flower under 18% THC, berry edibles under $25, and vape for focus. Every session ID is stored for compliance review.'
    },
    {
      title: 'Product lookups and follow-ups',
      description: 'Hawaiian Thunderfuck, Green Revolution Nano Shot, and Kiva Camino Sours: see which SKUs shoppers ask about by name, with example queries and click-through.'
    },
    {
      title: 'Guided flow funnel and drop-offs',
      description: 'Track every step from category to checkout. See where shoppers leave: effects, budget, shortlist, or pick.'
    },
    {
      title: 'Free-form vs. guided entry mode',
      description: 'Compare how free conversation and guided flows convert. 451 of 477 demand searches started as a free-form question. Guided flow: 100% completion across 24 sessions. Double down on what moves product.'
    }
  ];
</script>

<svelte:head>
  <title>shopsupport.ai | Shopper Demand Analytics for Retail</title>
  <meta name="description" content="Every conversation is a demand signal. shopsupport.ai shows what shoppers search, what they pick, and what you did not have in stock, so you can buy and merchandise smarter." />
</svelte:head>

<Navigation dropdownTrigger="hover" />

<!-- Hero -->
<div class="bg-[#09090f] py-20 lg:py-28">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#00d4aa] mb-5">ANALYTICS</div>
    <h1 class="text-4xl sm:text-5xl text-white font-semibold tracking-tight leading-[1.1] mb-6">
      See what your shoppers actually want
    </h1>
    <p class="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
      Every conversation is a survey you never had to send. In one live dispensary deployment, <BrandName variant="onDark" /> logged 477 product-seeking searches: edibles (145), uplifted (89 mentions), and 30 no-result gaps. The same dashboard reads skin types in a drugstore, grapes and occasions in a wine shop, sizes in fashion. Every session is monitored and stored for compliance.
    </p>
    <div class="flex items-center justify-center gap-3 flex-wrap">
      <ButtonMinimal label="Schedule a demo" variant="primary" href="/contact" />
      <ButtonMinimal label="Talk to us" variant="outline" href="/contact" />
    </div>
  </div>
</div>

<!-- Read the shopper's thought process -->
<div class="bg-[#0a0a12] py-20 lg:py-28 border-t border-white/[0.04]">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl text-white mb-6 font-semibold tracking-tight leading-tight">
      Read the room, not just the receipts
    </h2>
    <p class="text-lg text-slate-400 leading-relaxed">
      A sales report tells you what sold. It cannot tell you what a shopper wanted, could not find, and walked away from. <BrandName variant="onDark" /> captures the full path: category demand, effect mentions, no-result rates, unresolved threads, and whether it ended in a pick.
    </p>
  </div>
</div>

<!-- Six signals -->
<div class="bg-[#09090f] py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        What the dashboard actually tracks
      </h2>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Each shopper conversation leaves a trail. Here is what it tells you.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {#each signals as signal, i}
        <div class="bg-[#111117] border border-white/[0.06] rounded-2xl p-7 hover:border-[rgba(0,212,170,0.15)] transition-colors duration-300">
          <div class="text-[#00d4aa] text-sm font-semibold mb-4">{(i + 1).toString().padStart(2, '0')}</div>
          <h3 class="text-lg font-medium text-white mb-3 leading-snug">{signal.title}</h3>
          <p class="text-sm text-slate-400 leading-relaxed">{signal.description}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- Dashboard preview -->
<div class="bg-[var(--bg-inner)] py-20 lg:py-28">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-14">
      <div class="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--accent)] mb-4">CHAT ANALYTICS</div>
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        The same dashboard your team uses in production
      </h2>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Product Demand, Lookups, Unresolved queries, and Guided Flow. Built on anonymous sessions. No accounts, no PII.
      </p>
    </div>

    <div class="dash-shell">
      <div class="dash-topbar">
        <span class="dash-topbar-title">Chat Analytics</span>
        <span class="dash-env">PROD</span>
      </div>

      <div class="dash-tabs">
        {#each dashTabs as tab}
          <span class="dash-tab" class:dash-tab--active={tab === 'Product Demand'}>{tab}</span>
        {/each}
      </div>

      <div class="dash-filters">
        <span class="dash-filter dash-filter--active">All</span>
        <span class="dash-filter">Chat</span>
        <span class="dash-filter">Guided</span>
        <span class="dash-filter dash-filter--muted">Category ▾</span>
      </div>

      <div class="dash-kpi-grid">
        {#each demandKpis as kpi}
          <div class="dash-kpi">
            <div class="dash-kpi-label">{kpi.label}</div>
            <div class="dash-kpi-value" class:dash-kpi-value--alert={kpi.alert}>{kpi.value}</div>
            <div class="dash-kpi-sub">{kpi.sub}</div>
          </div>
        {/each}
      </div>

      <div class="dash-kpi-grid dash-kpi-grid--secondary">
        {#each demandKpisRow2 as kpi}
          <div class="dash-kpi dash-kpi--compact">
            <div class="dash-kpi-label">{kpi.label}</div>
            <div class="dash-kpi-value dash-kpi-value--sm">{kpi.value}</div>
            <div class="dash-kpi-sub">{kpi.sub}</div>
          </div>
        {/each}
      </div>

      <div class="analytics-panel dash-panel">
        <div class="panel-header">
          <span class="panel-title">Category demand</span>
          <span class="panel-badge">Compact</span>
        </div>
        <div class="dash-table-wrap">
          <table class="dash-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Top subcategory</th>
                <th>Top potency</th>
                <th>Top effect</th>
                <th>Demand</th>
                <th>No results</th>
              </tr>
            </thead>
            <tbody>
              {#each categoryRows as row}
                <tr>
                  <td>{row.category}</td>
                  <td class="dash-muted">{row.sub}</td>
                  <td class="dash-muted">{row.potency}</td>
                  <td class="dash-muted">{row.effect}</td>
                  <td class="dash-num">{row.demand}</td>
                  <td class="dash-alert">{row.noResults}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>

      <div class="dash-split">
        <div class="analytics-panel dash-panel">
          <div class="panel-header">
            <span class="panel-title">Subcategory demand</span>
          </div>
          <div class="dash-table-wrap">
            <table class="dash-table dash-table--compact">
              <thead>
                <tr><th>Category / subcategory</th><th>Demand</th><th>No results</th></tr>
              </thead>
              <tbody>
                {#each subcategoryRows as row}
                  <tr>
                    <td>{row.label}</td>
                    <td class="dash-num">{row.demand}</td>
                    <td class="dash-alert">{row.noResults}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>

        <div class="analytics-panel dash-panel">
          <div class="panel-header">
            <span class="panel-title">Category + potency</span>
          </div>
          <div class="dash-table-wrap">
            <table class="dash-table dash-table--compact">
              <thead>
                <tr><th>Category</th><th>Potency</th><th>Demand</th><th>No results</th></tr>
              </thead>
              <tbody>
                {#each potencyRows as row}
                  <tr>
                    <td>{row.category}</td>
                    <td class="dash-muted">{row.potency}</td>
                    <td class="dash-num">{row.demand}</td>
                    <td class="dash-alert">{row.noResults}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="analytics-panel dash-panel">
        <div class="panel-header">
          <span class="panel-title">Effect demand</span>
          <span class="panel-badge">Top mentions</span>
        </div>
        <div class="dash-table-wrap">
          <table class="dash-table dash-table--compact">
            <thead>
              <tr><th>Effect</th><th>Top category</th><th>Demand</th><th>No results</th></tr>
            </thead>
            <tbody>
              {#each effectRows as row}
                <tr>
                  <td>{row.effect}</td>
                  <td class="dash-muted">{row.top}</td>
                  <td class="dash-num">{row.demand}</td>
                  <td class="dash-alert">{row.noResults}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>

      <div class="analytics-panel dash-panel">
        <div class="panel-header">
          <span class="panel-title">Unresolved · no results</span>
          <span class="panel-badge">This week</span>
        </div>
        <div class="dash-table-wrap">
          <table class="dash-table dash-table--compact">
            <thead>
              <tr><th>Query</th><th>Reasons</th><th>Satisfaction</th></tr>
            </thead>
            <tbody>
              {#each unresolvedRows as row}
                <tr>
                  <td class="dash-query">{row.query}</td>
                  <td><span class="dash-chip">{row.reasons}</span></td>
                  <td class="dash-muted">{row.satisfaction}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
        <div class="panel-footer">
          <span class="footer-dot"></span>
          <span class="footer-text">30 no-result searches · 6.3% of product demand · sessions stored for compliance</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- From insight to action -->
<div class="bg-[#09090f] py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        From insight to action
      </h2>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Signals are only useful if you can do something with them
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
      <FeatureCardDark
        title="Buy what people are asking for"
        description="Restock and purchasing decisions backed by real shopper demand, not last month's averages."
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>'
      />
      <FeatureCardDark
        title="Merchandise the gaps"
        description="Surface the categories and effects people search for most and put them front and center."
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" /></svg>'
      />
      <FeatureCardDark
        title="Target your campaigns"
        description="Push demand signals into the loyalty platform's email campaigns: feature the products shoppers are already curious about."
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
      />
    </div>
  </div>
</div>

<!-- CTA -->
<CTASectionVariation2
  headline="Stop guessing what your shoppers want"
  description="Connect your POS and start seeing demand signals from day one."
  colorScheme="dark"
  primaryCta={{ label: 'Schedule a demo', href: '/contact' }}
  secondaryCta={{ label: 'Contact us', href: '/contact' }}
/>

<Footer />

<style>
  .dash-shell {
    background: var(--bg-card);
    border: 1px solid var(--border-standard);
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  }

  .dash-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--border-faint);
  }

  .dash-topbar-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-heading);
  }

  .dash-env {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
    background: var(--accent-tint-10);
    border: 1px solid var(--accent-border);
    border-radius: 9999px;
    padding: 3px 8px;
  }

  .dash-tabs {
    display: flex;
    gap: 0;
    overflow-x: auto;
    border-bottom: 1px solid var(--border-faint);
    padding: 0 0.5rem;
  }

  .dash-tab {
    flex-shrink: 0;
    font-size: 11px;
    color: var(--text-secondary);
    padding: 0.75rem 0.85rem;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
  }

  .dash-tab--active {
    color: var(--text-heading);
    border-bottom-color: var(--text-heading);
  }

  .dash-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.85rem 1.25rem;
    border-bottom: 1px solid var(--border-faint);
  }

  .dash-filter {
    font-size: 11px;
    padding: 0.3rem 0.65rem;
    border-radius: 0.35rem;
    border: 1px solid var(--border-standard);
    color: var(--text-body);
  }

  .dash-filter--active {
    background: var(--accent-tint-10);
    border-color: var(--accent-border);
    color: var(--accent);
  }

  .dash-filter--muted {
    color: var(--text-muted);
  }

  .dash-kpi-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--border-faint);
  }

  @media (min-width: 768px) {
    .dash-kpi-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .dash-kpi-grid--secondary {
    border-bottom: 1px solid var(--border-faint);
  }

  .dash-kpi {
    background: var(--bg-inner);
    border: 1px solid var(--border-faint);
    border-radius: 0.65rem;
    padding: 0.75rem 0.85rem;
  }

  .dash-kpi-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.35rem;
  }

  .dash-kpi-value {
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--text-heading);
    line-height: 1.1;
    margin-bottom: 0.2rem;
  }

  .dash-kpi-value--sm {
    font-size: 0.95rem;
    font-weight: 500;
  }

  .dash-kpi-value--alert {
    color: var(--danger);
  }

  .dash-kpi-sub {
    font-size: 11px;
    color: var(--text-secondary);
  }

  .dash-panel {
    margin: 0;
    border: none;
    border-radius: 0;
    border-top: 1px solid var(--border-faint);
  }

  .dash-split {
    display: grid;
    gap: 0;
  }

  @media (min-width: 900px) {
    .dash-split {
      grid-template-columns: 1fr 1fr;
    }

    .dash-split .dash-panel:first-child {
      border-right: 1px solid var(--border-faint);
    }
  }

  .dash-table-wrap {
    overflow-x: auto;
    padding: 0 1rem 0.75rem;
  }

  .dash-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
  }

  .dash-table th {
    text-align: left;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    padding: 0.65rem 0.5rem;
    border-bottom: 1px solid var(--border-faint);
    white-space: nowrap;
  }

  .dash-table td {
    padding: 0.55rem 0.5rem;
    color: var(--text-body);
    border-bottom: 1px solid var(--border-faint);
    vertical-align: top;
  }

  .dash-table tbody tr:last-child td {
    border-bottom: none;
  }

  .dash-muted {
    color: var(--text-secondary) !important;
  }

  .dash-num {
    color: var(--text-heading) !important;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  .dash-alert {
    color: var(--danger) !important;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .dash-query {
    max-width: 220px;
    line-height: 1.4;
  }

  .dash-chip {
    display: inline-block;
    font-size: 10px;
    padding: 0.15rem 0.45rem;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-secondary);
  }

  .analytics-panel {
    background-color: var(--bg-card);
    border: 1px solid var(--border-standard);
    border-radius: 1rem;
    overflow: hidden;
  }

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .panel-title {
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: -0.01em;
  }

  .panel-badge {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.1);
    border: 1px solid rgba(0, 212, 170, 0.2);
    border-radius: 9999px;
    padding: 2px 8px;
  }

  .panel-body {
    padding: 0.875rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* Unmet demand rows */
  .demand-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .demand-row:last-child {
    border-bottom: none;
  }

  .demand-query {
    font-size: 13px;
    color: #e2e8f0;
    font-weight: 500;
  }

  .demand-stat {
    font-size: 12px;
    color: #475569;
    white-space: nowrap;
  }

  .demand-count {
    color: #94a3b8;
    font-weight: 600;
  }

  .demand-zero {
    color: #f87171;
  }

  /* Most asked products */
  .product-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.625rem 0;
  }

  .product-name {
    font-size: 12px;
    color: #e2e8f0;
    flex: 0 0 140px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-bar-wrap {
    flex: 1;
    height: 6px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
    overflow: hidden;
  }

  .product-bar {
    height: 100%;
    background-color: #00d4aa;
    opacity: 0.7;
    border-radius: 3px;
  }

  .product-count {
    font-size: 12px;
    font-weight: 600;
    color: #00d4aa;
    flex: 0 0 36px;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  /* Funnel */
  .funnel-body {
    gap: 0.875rem;
  }

  .funnel-step {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .funnel-label {
    font-size: 12px;
    color: #64748b;
    flex: 0 0 110px;
    white-space: nowrap;
  }

  .funnel-bar-wrap {
    flex: 1;
    height: 8px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    overflow: hidden;
  }

  .funnel-bar {
    height: 100%;
    background-color: rgba(0, 212, 170, 0.5);
    border-radius: 4px;
  }

  .funnel-bar--end {
    background-color: #00d4aa;
  }

  .funnel-value {
    font-size: 12px;
    font-weight: 600;
    color: #94a3b8;
    flex: 0 0 32px;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  .panel-footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .footer-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #00d4aa;
    flex-shrink: 0;
  }

  .footer-text {
    font-size: 11px;
    color: #64748b;
  }
</style>
