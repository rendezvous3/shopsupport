<script lang="ts">
  import Navigation from '$lib/tailwind/Navigation/Navigation.svelte';
  import Footer from '$lib/tailwind/Footer/Footer.svelte';
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';
  import FeatureCardDark from '$lib/tailwind/FeatureCard/FeatureCardDark.svelte';
  import CTASectionVariation2 from '$lib/tailwind/CTASection/CTASectionVariation2.svelte';

  const signals = [
    {
      title: 'Demand that never hits a sales report',
      description: 'Twenty shoppers asked for sleepy edibles under $30 last week. You stocked none. That is revenue that walked out the door, and now it is a line item you can act on.'
    },
    {
      title: 'Your most-wanted products',
      description: 'See which products get shown and asked about most, even the ones that rarely sell. Curiosity is a buying signal before the sale ever happens.'
    },
    {
      title: 'Exactly where shoppers drop off',
      description: 'The guided flow tracks every step. See which question loses people, from category all the way to checkout.'
    },
    {
      title: 'Questions you left unanswered',
      description: 'High-intent searches that ended without a pick. The clearest map of the gap between what shoppers want and what you offer.'
    },
    {
      title: 'Who keeps coming back',
      description: 'Anonymous return-visitor tracking shows repeat shoppers and what they keep looking at, with no login and no personal data required.'
    },
    {
      title: 'Guided flow vs. free chat',
      description: 'Compare how each path converts so you can double down on what moves product.'
    }
  ];
</script>

<svelte:head>
  <title>ShopSupport.ai | Shopper Demand Analytics for Dispensaries</title>
  <meta name="description" content="Every conversation is a demand signal. ShopSupport shows what shoppers search, what they pick, and what you did not have in stock, so you can buy and merchandise smarter." />
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
      Every conversation is a survey you never had to send. ShopSupport turns shopper questions into demand signals: what they search for, what they choose, and what you did not have on the shelf.
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
      A sales report tells you what sold. It cannot tell you what a shopper wanted, could not find, and walked away from. ShopSupport captures the full path: the first question, every refinement, the moment of hesitation, and whether it ended in a pick.
    </p>
  </div>
</div>

<!-- Six signals -->
<div class="bg-[#09090f] py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        Six signals you cannot get anywhere else
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
<div class="bg-[#0d0d14] py-20 lg:py-28">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-14">
      <div class="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#00d4aa] mb-4">DASHBOARD</div>
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        The signal, on one screen
      </h2>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Built on anonymous browser sessions. No accounts, no PII.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
      <!-- Top unmet demand -->
      <div class="analytics-panel">
        <div class="panel-header">
          <span class="panel-title">Top unmet demand</span>
          <span class="panel-badge">This week</span>
        </div>
        <div class="panel-body">
          <div class="demand-row">
            <div class="demand-query">Sleepy · Edibles · under $30</div>
            <div class="demand-stat"><span class="demand-count">23</span> searches · <span class="demand-zero">0 in stock</span></div>
          </div>
          <div class="demand-row">
            <div class="demand-query">High potency · Vapes · under $40</div>
            <div class="demand-stat"><span class="demand-count">17</span> searches · <span class="demand-zero">0 in stock</span></div>
          </div>
          <div class="demand-row">
            <div class="demand-query">Focused · Pre-rolls</div>
            <div class="demand-stat"><span class="demand-count">11</span> searches · <span class="demand-zero">2 in stock</span></div>
          </div>
        </div>
        <div class="panel-footer">
          <span class="footer-dot"></span>
          <span class="footer-text">51 searches with no good match</span>
        </div>
      </div>

      <!-- Most asked products -->
      <div class="analytics-panel">
        <div class="panel-header">
          <span class="panel-title">Most asked products</span>
          <span class="panel-badge">Last 30 days</span>
        </div>
        <div class="panel-body">
          <div class="product-row">
            <div class="product-name">Blue Dream 3.5g</div>
            <div class="product-bar-wrap"><div class="product-bar" style="width: 100%"></div></div>
            <div class="product-count">412</div>
          </div>
          <div class="product-row">
            <div class="product-name">Calm Gummies 10pk</div>
            <div class="product-bar-wrap"><div class="product-bar" style="width: 74%"></div></div>
            <div class="product-count">305</div>
          </div>
          <div class="product-row">
            <div class="product-name">Wedding Cake 3.5g</div>
            <div class="product-bar-wrap"><div class="product-bar" style="width: 58%"></div></div>
            <div class="product-count">241</div>
          </div>
          <div class="product-row">
            <div class="product-name">Live Rosin Cart</div>
            <div class="product-bar-wrap"><div class="product-bar" style="width: 39%"></div></div>
            <div class="product-count">162</div>
          </div>
        </div>
        <div class="panel-footer">
          <span class="footer-dot"></span>
          <span class="footer-text">Ranked by views and questions, not sales</span>
        </div>
      </div>

      <!-- Guided flow funnel -->
      <div class="analytics-panel lg:col-span-2">
        <div class="panel-header">
          <span class="panel-title">Guided flow funnel</span>
          <span class="panel-badge">This week</span>
        </div>
        <div class="panel-body funnel-body">
          <div class="funnel-step">
            <div class="funnel-label">Started</div>
            <div class="funnel-bar-wrap"><div class="funnel-bar" style="width: 100%"></div></div>
            <div class="funnel-value">100</div>
          </div>
          <div class="funnel-step">
            <div class="funnel-label">Picked effects</div>
            <div class="funnel-bar-wrap"><div class="funnel-bar" style="width: 84%"></div></div>
            <div class="funnel-value">84</div>
          </div>
          <div class="funnel-step">
            <div class="funnel-label">Set budget</div>
            <div class="funnel-bar-wrap"><div class="funnel-bar" style="width: 71%"></div></div>
            <div class="funnel-value">71</div>
          </div>
          <div class="funnel-step">
            <div class="funnel-label">Saw shortlist</div>
            <div class="funnel-bar-wrap"><div class="funnel-bar funnel-bar--end" style="width: 67%"></div></div>
            <div class="funnel-value">67</div>
          </div>
        </div>
        <div class="panel-footer">
          <span class="footer-dot"></span>
          <span class="footer-text">Biggest drop-off at budget step. 13 shoppers left here.</span>
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
  .analytics-panel {
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
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
