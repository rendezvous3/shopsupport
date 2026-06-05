<script lang="ts">
  import Navigation from '$lib/tailwind/Navigation/Navigation.svelte';
  // import HeroSectionV2 from '$lib/tailwind/HeroSectionV2/HeroSectionV2.svelte';
  // import HeroSectionV3 from '$lib/tailwind/HeroSectionV3/HeroSectionV3.svelte';
  // import HeroSectionV4 from '$lib/tailwind/HeroSectionV4/HeroSectionV4.svelte';
  // import HeroSectionV5 from '$lib/tailwind/HeroSectionV5/HeroSectionV5.svelte';
  import HeroSectionChat from '$lib/tailwind/HeroSectionChat/HeroSectionChat.svelte';
  import HeroSectionV7 from '$lib/tailwind/HeroSectionV7/HeroSectionV7.svelte';
  import FeatureCardDark from '$lib/tailwind/FeatureCard/FeatureCardDark.svelte';
  import CTASectionVariation2 from '$lib/tailwind/CTASection/CTASectionVariation2.svelte';
  import LegalAISection from '$lib/tailwind/CTASection/LegalAISection.svelte';
  import Footer from '$lib/tailwind/Footer/Footer.svelte';
  import CardLayoutTimeline from '$lib/tailwind/CardLayouts/CardLayoutTimeline.svelte';
  import FAQSection from '$lib/tailwind/FAQ/FAQSection.svelte';
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';
  import BudtenderChatPreview from '$lib/tailwind/BudtenderChatPreview/BudtenderChatPreview.svelte';
</script>

<svelte:head>
  <title>ShopSupport.ai | AI Agent for Dispensary & Winery Commerce</title>
  <meta name="description" content="POS-connected AI shopping assistants for dispensaries and wineries. ShopSupport integrates with your e-commerce APIs and deploys trained agentic systems on your live catalog." />
</svelte:head>

<Navigation dropdownTrigger="hover" />

<HeroSectionChat />

<BudtenderChatPreview />

<!-- Platform dashboard (admin view) -->
<div class="bg-[#09090f] py-16 lg:py-20 border-t border-white/[0.04]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
    <div class="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#00d4aa] mb-4">BEHIND THE WIDGET</div>
    <h2 class="text-2xl sm:text-3xl text-white font-semibold tracking-tight mb-3">
      POS-connected platform underneath
    </h2>
    <p class="text-slate-400 max-w-2xl mx-auto">
      The same agent stack powers your storefront widget — live catalog sync, analytics, and multi-store management.
    </p>
  </div>
  <HeroSectionV7
    compact={true}
    badge="Admin · Analytics · Multi-store"
    headline="One platform for every channel"
    subheadline="Deploy the budtender on your site, kiosk, or SMS — then monitor conversions, sync latency, and catalog accuracy from a single dashboard."
    primaryCta={{ label: 'Start free trial', href: '/contact' }}
    secondaryCta={{ label: 'See features above', href: '/#chat-preview' }}
  />
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
        POS-connected assistants for dispensaries and wineries — trained on your inventory, policies, and customers
      </p>
    </div>

    <div class="bento-grid">

      <!-- Card 1: POS-Connected Recommendations -->
      <div class="bento-card bento-card--ecom">
        <div class="bento-card-text">
          <div class="bento-label">POS-CONNECTED</div>
          <h3 class="bento-heading">Intelligent product recommendations</h3>
          <p class="bento-desc">
            AI that reads live inventory from your POS, understands purchase intent and compliance rules, and surfaces the right products at the right moment.
          </p>
          <div class="bento-cta">
            <ButtonMinimal label="Learn more" variant="outline" href="/services#shopping-assistant" arrow={true} />
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
              <span class="rec-status-text">Synced with Dutchie POS</span>
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
                Yes — 450 points available. Applied $15 credit to order #4821.
              </div>
            </div>
            <div class="cs-resolution">
              <span class="cs-res-dot"></span>
              <span class="cs-res-text">POS-integrated resolution — launching soon</span>
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
            Intent classification routes shoppers to the right handler — catalog lookup, compliance check, or POS query — in milliseconds. No rigid keyword matching.
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
        description="Specialized agents for catalog retrieval, policy lookup, and inventory validation — working together for accurate, grounded answers."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>'
      />

      <FeatureCardDark
        title="POS API Integration"
        description="Connectors for Dutchie, Treez, Shopify, WooCommerce, and custom e-commerce stacks with real-time catalog synchronization."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>'
      />

      <FeatureCardDark
        title="Catalog Data Pipelines"
        description="Automated ingestion of product data, potency profiles, tasting notes, and compliance metadata from your POS and CMS."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>'
      />

      <FeatureCardDark
        title="Compliance Validation"
        description="Automated checks for age verification, purchase limits, shipping restrictions, and state-specific regulations before every recommendation."
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
        description="Dashboards for conversion lift, AOV tracking, sync latency, and conversation quality across every deployed channel."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
      />
    </div>
  </div>
</div>

<!-- Industries Section -->
<div class="bg-[#09090f] py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        Built for regulated retail
      </h2>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Deep vertical expertise for dispensaries and wineries — where compliance and catalog complexity demand specialized AI
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">

      <!-- Dispensaries -->
      <div class="group flex flex-col bg-[#111117] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[rgba(0,212,170,0.15)] transition-all duration-300 min-h-[420px]">
        <div class="flex-1 p-8">
          <div class="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00d4aa] mb-6">DISPENSARIES</div>
          <h3 class="text-2xl font-medium text-white mb-3 leading-tight">Compliance-aware product discovery</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-8">
            Strain recommendations with potency filters, purchase limit awareness, and live Dutchie or Treez inventory sync.
          </p>
          <div class="bg-[#0d0d14] rounded-xl border border-white/[0.05] p-4 space-y-3">
            <div class="flex justify-end">
              <div class="text-xs text-slate-300 bg-white/5 rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]">Something relaxing, under $40, in stock?</div>
            </div>
            <div class="flex justify-start">
              <div class="text-xs text-[#00d4aa] bg-[#00d4aa]/8 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">3 matches. Blue Dream 97% · within daily limit</div>
            </div>
            <div class="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div class="h-full bg-[#00d4aa]/50 rounded-full" style="width:97%"></div>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse"></div>
              <span class="text-[11px] text-slate-500">Synced with Dutchie POS</span>
            </div>
          </div>
        </div>
        <div class="px-8 pb-8">
          <ButtonMinimal label="Learn more" variant="outline" href="/industries#dispensaries" arrow={true} />
        </div>
      </div>

      <!-- Wineries -->
      <div class="group flex flex-col bg-[#111117] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[rgba(0,212,170,0.15)] transition-all duration-300 min-h-[420px]">
        <div class="flex-1 p-8">
          <div class="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00d4aa] mb-6">WINERIES</div>
          <h3 class="text-2xl font-medium text-white mb-3 leading-tight">Expert guidance to checkout</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-8">
            Tasting notes, food pairings, club membership tiers, and DTC fulfillment — all connected to your live catalog.
          </p>
          <div class="bg-[#0d0d14] rounded-xl border border-white/[0.05] p-4 space-y-3">
            <div class="flex justify-end">
              <div class="text-xs text-slate-300 bg-white/5 rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]">Red wine for grilled lamb, under $50?</div>
            </div>
            <div class="flex justify-start">
              <div class="text-xs text-[#00d4aa] bg-[#00d4aa]/8 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">2019 Cabernet · 94% pairing match · ships to UT</div>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <div class="bg-white/5 rounded-lg p-2 text-center">
                <div class="text-xs font-medium text-[#00d4aa]">94%</div>
                <div class="text-[10px] text-slate-500">Match</div>
              </div>
              <div class="bg-white/5 rounded-lg p-2 text-center">
                <div class="text-xs font-medium text-white">$42</div>
                <div class="text-[10px] text-slate-500">Price</div>
              </div>
              <div class="bg-white/5 rounded-lg p-2 text-center">
                <div class="text-xs font-medium text-[#00d4aa]">In stock</div>
                <div class="text-[10px] text-slate-500">36 btl</div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-8 pb-8">
          <ButtonMinimal label="Learn more" variant="outline" href="/industries#wineries" arrow={true} />
        </div>
      </div>

    </div>
  </div>
</div>

<!-- How ShopSupport Works -->
<div class="bg-[#0d0d14] py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        How ShopSupport works
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
        From POS connection to live deployment — a continuous improvement loop for your store
      </p>
    </div>

    <CardLayoutTimeline orientation="vertical">
      <snippet>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa] rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="1. Connect"
            description="We integrate with your POS and e-commerce APIs — Dutchie, Treez, Shopify, WooCommerce, or custom stacks — and begin ingesting your live catalog."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa]/60 rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="2. Train"
            description="Your catalog, compliance policies, and customer data are embedded and fine-tuned into domain-specific agents that understand your products and regulations."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa] rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="3. Deploy"
            description="Launch your shopping assistant across web, kiosk, SMS, and embeddable widgets — wherever your customers reach you."
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

<!-- POS Integration Spotlight -->
<LegalAISection
  headline="Your catalog, inventory, and policies — connected in real time"
  description="ShopSupport syncs with your POS and e-commerce APIs so every recommendation reflects live stock, current pricing, and your store's compliance rules."
  primaryCta={{
    label: 'Start free trial',
    href: '/contact'
  }}
  secondaryCta={{
    label: 'View integrations',
    href: '/services#integrations'
  }}
/>

<!-- FAQ Section -->
<FAQSection />

<!-- CTA Section -->
<CTASectionVariation2
  headline="Deploy your POS-connected AI assistant"
  description="Tell us about your store and POS stack. We'll have you live with a trained shopping assistant in weeks, not months."
  colorScheme="dark"
  primaryCta={{
    label: 'Start free trial',
    href: '/contact'
  }}
  secondaryCta={{
    label: 'Schedule a call',
    href: '/contact'
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
</style>
