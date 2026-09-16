<script lang="ts">
  import Navigation from '$lib/tailwind/Navigation/Navigation.svelte';
  // import HeroSectionV2 from '$lib/tailwind/HeroSectionV2/HeroSectionV2.svelte';
  // import HeroSectionV3 from '$lib/tailwind/HeroSectionV3/HeroSectionV3.svelte';
  // import HeroSectionV4 from '$lib/tailwind/HeroSectionV4/HeroSectionV4.svelte';
  // import HeroSectionV5 from '$lib/tailwind/HeroSectionV5/HeroSectionV5.svelte';
  import VerticalHero from '$lib/tailwind/VerticalHero/VerticalHero.svelte';
  import { verticals } from '$lib/data/verticals';
  import HeroSectionV7 from '$lib/tailwind/HeroSectionV7/HeroSectionV7.svelte';
  import FeatureCardDark from '$lib/tailwind/FeatureCard/FeatureCardDark.svelte';
  import CTASectionVariation2 from '$lib/tailwind/CTASection/CTASectionVariation2.svelte';
  import Footer from '$lib/tailwind/Footer/Footer.svelte';
  import CardLayoutTimeline from '$lib/tailwind/CardLayouts/CardLayoutTimeline.svelte';
  import FAQSection from '$lib/tailwind/FAQ/FAQSection.svelte';
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';
  import BrandName from '$lib/custom/BrandName/BrandName.svelte';
</script>

<svelte:head>
  <title>shopsupport.ai | Expert shopping AI agents for retail</title>
  <meta name="description" content="shopsupport.ai builds expert shopping AI agents for retail: guided selling on your live catalog with compliance in the answer. Retail, wine and beverage, fashion, jewelry, cannabis." />
</svelte:head>

<Navigation dropdownTrigger="hover" />

<VerticalHero />

<!-- Industries grid -->
<div class="bg-[var(--bg-alt)] py-16 lg:py-24 border-t border-white/[0.04]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <div class="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#00d4aa] mb-4">ONE ENGINE, MANY CATALOGS</div>
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        Trained on the decision logic of each industry
      </h2>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
        One guided-selling engine, connected to the catalog, tuned to how people actually buy in each industry, with that industry's rules in every answer.
      </p>
    </div>
    <div class="vert-grid">
      {#each verticals as v}
        <a class="vert-card" href={`/industries#${v.id}`}>
          <div class="vert-card-top">
            <span class="vert-card-agent">{v.agent}</span>
            <span class="vert-card-status vert-card-status--{v.status}">{v.status === 'live' ? 'In production' : v.status === 'pilot' ? 'Pilot' : 'Working demo'}</span>
          </div>
          <h3 class="vert-card-title">{v.label}</h3>
          <p class="vert-card-desc">{v.card}</p>
          <div class="vert-card-int">
            {#each v.integrations.slice(0, 3) as i}<span>{i}</span>{/each}
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>

<!-- Platform dashboard (admin view) -->
<div class="bg-[#09090f] py-16 lg:py-20 border-t border-white/[0.04]">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
    <div class="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#00d4aa] mb-4">BEHIND THE WIDGET</div>
    <h2 class="text-2xl sm:text-3xl text-white font-semibold tracking-tight mb-4">
      Insights your sales report cannot show
    </h2>
    <p class="text-slate-400 leading-relaxed mb-3">
      From one live dispensary deployment: 477 product-seeking searches logged with session IDs, timestamps, and full query history.
      451 started as a free-form question. Top category: edibles (145). Top effect: uplifted (89 mentions). The same dashboard reads skin types, grape varieties or body styles in the other verticals.
    </p>
    <p class="text-slate-400 leading-relaxed">
      30 searches returned no catalog match (6.3%). Every session is monitored and stored for compliance review.
      Product lookups, guided flow events, and unresolved threads included.
    </p>
  </div>
  <HeroSectionV7
    compact={true}
    badge="Product Demand · Sessions · Compliance"
    headline="Demand signals from real shopper sessions"
    subheadline="Category, subcategory, potency, and effect demand on one screen. Guided flow: 100% completion across 24 sessions. Drill down from uplifted (89) to edibles · gummies (37) to flower · THC ≥ 28% (31)."
    primaryCta={{ label: 'Schedule a demo', href: '/contact' }}
    secondaryCta={{ label: 'Explore analytics', href: '/analytics' }}
    trustMetrics={[
      { value: '477', label: 'Product-seeking searches' },
      { value: '6.3%', label: 'No-result rate (30 gaps)' },
      { value: '100%', label: 'Guided flow completion' }
    ]}
  />
</div>

<!-- Analytics spotlight -->
<div class="bg-[var(--bg-alt)] py-16 lg:py-20 border-t border-white/[0.04]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      <div>
        <div class="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--accent)] mb-4">ANALYTICS</div>
        <h2 class="text-2xl sm:text-3xl text-white font-semibold tracking-tight mb-4">
          Every conversation leaves a demand trail
        </h2>
        <p class="text-slate-400 leading-relaxed mb-6 max-w-lg">
          The agent tracks every product-seeking search with category, subcategory, attribute and need breakdowns.
          In a dispensary that is potency and effect: edibles · gummies at 37, flower · THC ≥ 28% at 31, and the 30 no-result gaps the POS never reports.
          In a drugstore it is skin type and concern; in a wine shop, grape and occasion. Every session is stored for compliance review.
        </p>
        <ButtonMinimal label="Explore analytics" variant="outline" href="/analytics" arrow={true} />
      </div>

      <div class="home-analytics-grid">
        <div class="home-analytics-stat">
          <div class="home-analytics-label">Demand</div>
          <div class="home-analytics-value">477</div>
          <div class="home-analytics-sub">Product-seeking searches</div>
        </div>
        <div class="home-analytics-stat">
          <div class="home-analytics-label">Top effect</div>
          <div class="home-analytics-value home-analytics-value--sm">uplifted</div>
          <div class="home-analytics-sub">89 mentions</div>
        </div>
        <div class="home-analytics-stat">
          <div class="home-analytics-label">No results</div>
          <div class="home-analytics-value home-analytics-value--alert">6.3%</div>
          <div class="home-analytics-sub">30 unmet searches</div>
        </div>
        <div class="home-analytics-stat">
          <div class="home-analytics-label">Entry mode</div>
          <div class="home-analytics-value home-analytics-value--sm">Free-form</div>
          <div class="home-analytics-sub">451 of 477 searches</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Business AI Section -->
<div class="bg-[#09090f] py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <div class="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#00d4aa] mb-4">CAPABILITIES</div>
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        AI that knows your catalog in real time
      </h2>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
        Branded agents trained on your inventory, your policies and your customers, in every vertical
      </p>
    </div>

    <div class="bento-grid">

      <!-- Card 1: POS-Connected Recommendations -->
      <div class="bento-card bento-card--ecom">
        <div class="bento-card-text">
          <div class="bento-label">CATALOG-CONNECTED</div>
          <h3 class="bento-heading">Intelligent product recommendations</h3>
          <p class="bento-desc">
            AI that reads live inventory from your POS or commerce platform, understands purchase intent and the rules of your category, and surfaces the right products at the right moment.
          </p>
          <div class="bento-cta">
            <ButtonMinimal label="Learn more" variant="outline" href="/guided-selling" arrow={true} />
          </div>
        </div>
        <div class="bento-visual">
          <div class="rec-panel">
            <div class="rec-panel-header">
              <span class="rec-panel-title">Recommendations</span>
              <span class="rec-badge">Live</span>
            </div>
            <div class="rec-query-row">
              <div class="rec-query-bubble">Something relaxing for evening, under $40, in stock</div>
            </div>
            <div class="rec-items">
              <div class="rec-item">
                <div class="rec-item-img"></div>
                <div class="rec-item-info">
                  <div class="rec-item-name">Blue Dream 3.5g</div>
                  <div class="rec-item-meta">$32.00 · 18% THC</div>
                </div>
                <div class="rec-item-score">97%</div>
              </div>
              <div class="rec-item">
                <div class="rec-item-img"></div>
                <div class="rec-item-info">
                  <div class="rec-item-name">Granddaddy Purp</div>
                  <div class="rec-item-meta">$28.00 · 20% THC</div>
                </div>
                <div class="rec-item-score rec-item-score--dim">91%</div>
              </div>
              <div class="rec-item">
                <div class="rec-item-img"></div>
                <div class="rec-item-info">
                  <div class="rec-item-name">Calm Gummies 10pk</div>
                  <div class="rec-item-meta">$24.00 · 5mg CBD</div>
                </div>
                <div class="rec-item-score rec-item-score--dim">84%</div>
              </div>
            </div>
            <div class="rec-status">
              <span class="rec-status-dot"></span>
              <span class="rec-status-text">Synced with the live catalog</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2: Customer Service (Coming Soon) -->
      <div class="bento-card bento-card--cs">
        <div class="bento-card-text">
          <div class="bento-label">CUSTOMER SERVICE · SOON</div>
          <h3 class="bento-heading">Resolution without escalation</h3>
          <p class="bento-desc">
            Full-resolution support agents that query order history, loyalty points, and store policies via your POS APIs. Launching soon.
          </p>
          <div class="bento-cta">
            <ButtonMinimal label="Join waitlist" variant="outline" href="/contact" arrow={true} />
          </div>
        </div>
        <div class="bento-visual">
          <div class="cs-panel">
            <div class="cs-panel-header">
              <span class="cs-panel-title">Support Chat</span>
              <span class="cs-badge cs-badge--resolved">Coming Soon</span>
            </div>
            <div class="cs-thread">
              <div class="cs-msg cs-msg--user">Can I use loyalty points on my pickup order?</div>
              <div class="cs-msg cs-msg--ai">Checking your account and store policy...</div>
              <div class="cs-msg cs-msg--ai cs-msg--action">
                <span class="cs-action-icon">
                  <svg width="12" height="12" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </span>
                Yes. 450 points available. Applied $15 credit to order #4821.
              </div>
            </div>
            <div class="cs-resolution">
              <span class="cs-res-dot"></span>
              <span class="cs-res-text">POS-integrated resolution, launching soon</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3: Intent & API Routing (full width) -->
      <div class="bento-card bento-card--intent bento-card--wide">
        <div class="bento-card-text bento-card-text--side">
          <div class="bento-label">INTENT & API ROUTING</div>
          <h3 class="bento-heading">Every message to the right agent</h3>
          <p class="bento-desc">
            Intent classification routes shoppers to the right handler: catalog lookup, compliance check, or POS query, all in milliseconds. No rigid keyword matching.
          </p>
          <div class="bento-cta">
            <ButtonMinimal label="Learn more" variant="outline" href="/services#pos-integration" arrow={true} />
          </div>
        </div>
        <div class="bento-visual bento-visual--intent">
          <div class="intent-panel">
            <div class="intent-input-row">
              <div class="intent-input-label">Incoming message</div>
              <div class="intent-input-bubble">Do you deliver to zip 84111 and can I use my loyalty points?</div>
            </div>
            <div class="intent-arrow">
              <svg width="16" height="16" fill="none" stroke="#334155" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
              <span class="intent-arrow-label">Intent classification</span>
            </div>
            <div class="intent-scores">
              <div class="intent-score-row">
                <span class="intent-score-label">Delivery zone lookup</span>
                <div class="intent-score-bar-wrap">
                  <div class="intent-score-bar" style="width: 93%"></div>
                </div>
                <span class="intent-score-pct">93%</span>
              </div>
              <div class="intent-score-row">
                <span class="intent-score-label">Loyalty points query</span>
                <div class="intent-score-bar-wrap">
                  <div class="intent-score-bar intent-score-bar--dim" style="width: 88%"></div>
                </div>
                <span class="intent-score-pct intent-score-pct--dim">88%</span>
              </div>
              <div class="intent-score-row">
                <span class="intent-score-label">Product search</span>
                <div class="intent-score-bar-wrap">
                  <div class="intent-score-bar intent-score-bar--dimmer" style="width: 24%"></div>
                </div>
                <span class="intent-score-pct intent-score-pct--dimmer">24%</span>
              </div>
            </div>
            <div class="intent-route">
              <svg width="14" height="14" fill="none" stroke="#334155" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
              <div class="intent-route-chip">
                <svg width="12" height="12" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                Routed to POS + Policy Agent
              </div>
              <span class="intent-route-time">12ms</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- TECH Services Section -->
<div class="bg-[#0d0d14] py-20 lg:py-28 px-6">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <div class="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#00d4aa] mb-4">UNDER THE HOOD</div>
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        The infrastructure underneath
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
        Production-grade systems for catalog sync, compliance filtering, and real-time POS retrieval
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <FeatureCardDark
        title="Agentic AI Solutions"
        description="Intelligent agents that query your POS, enforce compliance rules, and guide shoppers through complex purchase decisions autonomously."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>'
      />

      <FeatureCardDark
        title="Multi-Agent RAG Systems"
        description="Specialized agents for catalog retrieval, policy lookup, and inventory validation, working together for accurate, grounded answers."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>'
      />

      <FeatureCardDark
        title="POS and Commerce Connectors"
        description="Direct connectors to Dutchie, Shopify, WooCommerce, Magento, Salesforce Commerce and product feeds, with real-time catalog, pricing and inventory sync."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>'
      />

      <FeatureCardDark
        title="Catalog Data Pipelines"
        description="Automated ingestion of product data, attributes, specifications, usage and claims metadata from your POS, commerce platform and CMS, in any language."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>'
      />

      <FeatureCardDark
        title="Compliance Validation"
        description="Automated checks for age verification, purchase limits, shipping restrictions, product-claim rules and regional regulations before every recommendation."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
      />

      <FeatureCardDark
        title="Real-Time Inventory Retrieval"
        description="Live POS sync ensures every product recommendation reflects current stock levels, pricing, and availability."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M11 20v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6" /></svg>'
      />

      <FeatureCardDark
        title="Agent Orchestration"
        description="Multi-agent workflows that delegate catalog search, compliance checks, and POS lookups across specialized commerce agents."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>'
      />

      <FeatureCardDark
        title="Production Monitoring"
        description="Dashboards for conversion lift, AOV tracking, sync latency, and conversation quality across every deployed channel, with a judged test suite on every release."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
      />
    </div>
  </div>
</div>

<!-- How we integrate the agent -->
<div class="bg-[var(--bg-inner)] py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        How we integrate the agent into your site
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
        From POS connection to embedded widget. A continuous improvement loop for your store
      </p>
    </div>

    <CardLayoutTimeline orientation="vertical">
      <snippet>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa] rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="1. Connect"
            description="We connect to your POS or commerce platform, Dutchie, Shopify, WooCommerce, Magento or a product feed, and begin ingesting your live catalog."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa]/60 rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="2. Train"
            description="Your catalog and compliance policies are embedded and fine-tuned into domain-specific agents that understand your products and regulations."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa] rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="3. Deploy"
            description="Launch the agent on your website as an embeddable widget, one script tag, wherever your customers browse your catalog."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa]/60 rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="4. Optimize"
            description="Conversation analytics, AOV tracking, and continuous retraining improve accuracy and conversion with every shopper interaction."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
          />
        </div>
      </snippet>
    </CardLayoutTimeline>
  </div>
</div>

<!-- FAQ Section -->
<FAQSection />

<!-- CTA Section -->
<CTASectionVariation2
  headline="Deploy an expert shopping agent on your storefront"
  description="Connect your catalog, pick the departments and rules that matter, and launch on your storefront. Scoped per store, from a pilot on one catalog to a platform fee plus usage."
  colorScheme="dark"
  primaryCta={{
    label: 'Schedule a demo',
    href: '/contact'
  }}
  secondaryCta={{
    label: 'See the industries',
    href: '/industries'
  }}
/>

<Footer />

<style>
  /* Bento grid */
  .bento-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 1024px) {
    .bento-grid {
      grid-template-columns: 1fr 1fr;
    }

    .bento-card--wide {
      grid-column: 1 / -1;
    }
  }

  .bento-card {
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1.25rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    transition: border-color 0.25s ease;
  }

  .bento-card:hover {
    border-color: rgba(0, 212, 170, 0.12);
  }

  @media (min-width: 1024px) {
    .bento-card--wide {
      flex-direction: row;
      gap: 3rem;
      align-items: center;
    }

    .bento-card-text--side {
      flex: 0 0 340px;
    }

    .bento-visual--intent {
      flex: 1;
    }
  }

  .bento-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #00d4aa;
    margin-bottom: 0.625rem;
  }

  .bento-heading {
    font-size: clamp(1.25rem, 2.5vw, 1.625rem);
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin: 0 0 0.875rem;
  }

  .bento-desc {
    font-size: 15px;
    color: #64748b;
    line-height: 1.7;
    margin: 0;
  }

  .bento-cta {
    margin-top: 1.5rem;
  }

  /* E-commerce Recommendations panel */
  .rec-panel {
    background-color: #0d0d14;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 0.875rem;
    overflow: hidden;
  }

  .rec-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .rec-panel-title {
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
  }

  .rec-badge {
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

  .rec-query-row {
    padding: 0.625rem 1rem;
    display: flex;
    justify-content: flex-end;
  }

  .rec-query-bubble {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px 10px 2px 10px;
    padding: 6px 12px;
    max-width: 85%;
  }

  .rec-items {
    padding: 0 1rem 0.625rem;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .rec-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.625rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .rec-item:last-child {
    border-bottom: none;
  }

  .rec-item-img {
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    flex-shrink: 0;
  }

  .rec-item-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .rec-item-name {
    font-size: 12px;
    font-weight: 500;
    color: #e2e8f0;
  }

  .rec-item-meta {
    font-size: 11px;
    color: #475569;
  }

  .rec-item-score {
    font-size: 12px;
    font-weight: 600;
    color: #00d4aa;
    flex-shrink: 0;
  }

  .rec-item-score--dim {
    color: #475569;
  }

  .rec-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
  }

  .rec-status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #00d4aa;
    animation: pulse 1.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  .rec-status-text {
    font-size: 11px;
    color: #475569;
  }

  /* Customer Service panel */
  .cs-panel {
    background-color: #0d0d14;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 0.875rem;
    overflow: hidden;
  }

  .cs-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .cs-panel-title {
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
  }

  .cs-badge {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border-radius: 9999px;
    padding: 2px 8px;
  }

  .cs-badge--resolved {
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.1);
    border: 1px solid rgba(0, 212, 170, 0.2);
  }

  .cs-thread {
    padding: 0.875rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .cs-msg {
    font-size: 12px;
    line-height: 1.5;
    border-radius: 10px;
    padding: 8px 12px;
    max-width: 88%;
  }

  .cs-msg--user {
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.6);
    align-self: flex-end;
    border-radius: 10px 10px 2px 10px;
  }

  .cs-msg--ai {
    background: rgba(0, 212, 170, 0.07);
    color: #94a3b8;
    align-self: flex-start;
    border-radius: 10px 10px 10px 2px;
  }

  .cs-msg--action {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    color: #e2e8f0;
  }

  .cs-action-icon {
    flex-shrink: 0;
    margin-top: 1px;
  }

  .cs-resolution {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
  }

  .cs-res-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #00d4aa;
    flex-shrink: 0;
  }

  .cs-res-text {
    font-size: 11px;
    color: #475569;
  }

  /* Intent Routing panel */
  .intent-panel {
    background-color: #0d0d14;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 0.875rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .intent-input-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #334155;
    margin-bottom: 0.375rem;
  }

  .intent-input-bubble {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 0.625rem;
    padding: 0.625rem 0.875rem;
    line-height: 1.5;
  }

  .intent-arrow {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .intent-arrow-label {
    font-size: 11px;
    color: #334155;
  }

  .intent-scores {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .intent-score-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .intent-score-label {
    font-size: 12px;
    color: #64748b;
    flex: 0 0 130px;
    white-space: nowrap;
  }

  .intent-score-bar-wrap {
    flex: 1;
    height: 4px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 2px;
    overflow: hidden;
  }

  .intent-score-bar {
    height: 100%;
    background-color: #00d4aa;
    border-radius: 2px;
  }

  .intent-score-bar--dim {
    background-color: rgba(0, 212, 170, 0.4);
  }

  .intent-score-bar--dimmer {
    background-color: rgba(0, 212, 170, 0.15);
  }

  .intent-score-pct {
    font-size: 12px;
    font-weight: 600;
    color: #00d4aa;
    flex: 0 0 32px;
    text-align: right;
  }

  .intent-score-pct--dim {
    color: #475569;
  }

  .intent-score-pct--dimmer {
    color: #334155;
  }

  .intent-route {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding-top: 0.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
  }

  .intent-route-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.1);
    border: 1px solid rgba(0, 212, 170, 0.2);
    border-radius: 9999px;
    padding: 4px 10px;
  }

  .intent-route-time {
    font-size: 11px;
    color: #334155;
    margin-left: auto;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .home-analytics-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .home-analytics-stat {
    background: var(--bg-card);
    border: 1px solid var(--border-standard);
    border-radius: 1rem;
    padding: 1rem 1.1rem;
  }

  .home-analytics-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.35rem;
  }

  .home-analytics-value {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-heading);
    line-height: 1.1;
    margin-bottom: 0.2rem;
  }

  .home-analytics-value--sm {
    font-size: 1.05rem;
    font-weight: 500;
  }

  .home-analytics-value--alert {
    color: var(--danger);
  }

  .home-analytics-sub {
    font-size: 11px;
    color: var(--text-secondary);
  }

  /* Industries grid (home) */
  .vert-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
  }
  @media (min-width: 640px) { .vert-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (min-width: 1024px) { .vert-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
  @media (min-width: 1280px) { .vert-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); } }
  .vert-card {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 1.35rem 1.4rem 1.25rem;
    border-radius: 1.25rem;
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    text-decoration: none;
    transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  }
  .vert-card:hover { border-color: rgba(0, 212, 170, 0.35); background: #141420; transform: translateY(-2px); }
  .vert-card:focus-visible { outline: 2px solid #00d4aa; outline-offset: 2px; }
  .vert-card-top { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; }
  .vert-card-agent { font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #00d4aa; }
  .vert-card-status { font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.2rem 0.5rem; border-radius: 999px; border: 1px solid rgba(255,255,255,0.08); color: #64748b; white-space: nowrap; }
  .vert-card-status--live { color: #00d4aa; border-color: rgba(0, 212, 170, 0.3); background: rgba(0, 212, 170, 0.08); }
  .vert-card-status--pilot { color: #94a3b8; border-color: rgba(148, 163, 184, 0.3); }
  .vert-card-title { margin: 0; color: #ffffff; font-size: 1.15rem; font-weight: 500; letter-spacing: -0.01em; }
  .vert-card-desc { margin: 0; color: #94a3b8; font-size: 0.9rem; line-height: 1.55; flex: 1; }
  .vert-card-int { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem; }
  .vert-card-int span { font-family: ui-monospace, monospace; font-size: 10.5px; color: #64748b; border: 1px solid rgba(255,255,255,0.06); border-radius: 999px; padding: 0.15rem 0.5rem; }
</style>
