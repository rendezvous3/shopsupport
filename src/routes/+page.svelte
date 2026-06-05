<script lang="ts">
  import Navigation from '$lib/tailwind/Navigation/Navigation.svelte';
  // import HeroSectionV2 from '$lib/tailwind/HeroSectionV2/HeroSectionV2.svelte';
  // import HeroSectionV3 from '$lib/tailwind/HeroSectionV3/HeroSectionV3.svelte';
  // import HeroSectionV4 from '$lib/tailwind/HeroSectionV4/HeroSectionV4.svelte';
  // import HeroSectionV5 from '$lib/tailwind/HeroSectionV5/HeroSectionV5.svelte';
  import HeroSectionV7 from '$lib/tailwind/HeroSectionV7/HeroSectionV7.svelte';
  import FeatureCardDark from '$lib/tailwind/FeatureCard/FeatureCardDark.svelte';
  import CTASectionVariation2 from '$lib/tailwind/CTASection/CTASectionVariation2.svelte';
  import LegalAISection from '$lib/tailwind/CTASection/LegalAISection.svelte';
  import Footer from '$lib/tailwind/Footer/Footer.svelte';
  import CardLayoutTimeline from '$lib/tailwind/CardLayouts/CardLayoutTimeline.svelte';
  import FAQSection from '$lib/tailwind/FAQ/FAQSection.svelte';
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';
</script>

<svelte:head>
  <title>XT SCALE | Agentic AI Business Support</title>
  <meta name="description" content="Multi-agent systems trained with your data into subject matter experts. AI solutions for e-commerce, legal, finance, and customer service." />
</svelte:head>

<Navigation dropdownTrigger="hover" />

<HeroSectionV7
  headline="Agentic AI business support"
  subheadline="Multi-agent systems trained with your data into subject matter experts."
  primaryCta={{ label: 'Get started', href: '/contact' }}
  secondaryCta={{ label: 'See how it works', href: '/about' }}
/>


<!-- Business AI Section -->
<div class="bg-[#09090f] py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <div class="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#00d4aa] mb-4">BUSINESS AI</div>
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        AI that works for your customers
      </h2>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
        Practical AI applications built for e-commerce, customer service, and intelligent routing
      </p>
    </div>

    <div class="bento-grid">

      <!-- Card 1: E-commerce Recommendations -->
      <div class="bento-card bento-card--ecom">
        <div class="bento-card-text">
          <div class="bento-label">E-COMMERCE</div>
          <h3 class="bento-heading">Intelligent product recommendations</h3>
          <p class="bento-desc">
            AI that understands purchase intent, browsing patterns, and personal preference to surface the right products at the right moment. Trained on your catalog, tuned to your customers.
          </p>
          <div class="bento-cta">
            <ButtonMinimal label="Learn more" variant="outline" href="/services/ecommerce" arrow={true} />
          </div>
        </div>
        <div class="bento-visual">
          <div class="rec-panel">
            <div class="rec-panel-header">
              <span class="rec-panel-title">Recommendations</span>
              <span class="rec-badge">Live</span>
            </div>
            <div class="rec-query-row">
              <div class="rec-query-bubble">Find me wireless headphones under $100</div>
            </div>
            <div class="rec-items">
              <div class="rec-item">
                <div class="rec-item-img"></div>
                <div class="rec-item-info">
                  <div class="rec-item-name">Sony WH-CH520</div>
                  <div class="rec-item-meta">$79.99</div>
                </div>
                <div class="rec-item-score">97%</div>
              </div>
              <div class="rec-item">
                <div class="rec-item-img"></div>
                <div class="rec-item-info">
                  <div class="rec-item-name">JBL Tune 510BT</div>
                  <div class="rec-item-meta">$49.99</div>
                </div>
                <div class="rec-item-score rec-item-score--dim">91%</div>
              </div>
              <div class="rec-item">
                <div class="rec-item-img"></div>
                <div class="rec-item-info">
                  <div class="rec-item-name">Anker Q20i</div>
                  <div class="rec-item-meta">$55.99</div>
                </div>
                <div class="rec-item-score rec-item-score--dim">84%</div>
              </div>
            </div>
            <div class="rec-status">
              <span class="rec-status-dot"></span>
              <span class="rec-status-text">Analyzed 1,247 products</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2: Customer Service Automation -->
      <div class="bento-card bento-card--cs">
        <div class="bento-card-text">
          <div class="bento-label">CUSTOMER SERVICE</div>
          <h3 class="bento-heading">Resolution without escalation</h3>
          <p class="bento-desc">
            Agents that resolve multi-step support requests by querying account history, internal systems, and policies. The goal is resolution, not just response.
          </p>
          <div class="bento-cta">
            <ButtonMinimal label="Learn more" variant="outline" href="/services/customer-service" arrow={true} />
          </div>
        </div>
        <div class="bento-visual">
          <div class="cs-panel">
            <div class="cs-panel-header">
              <span class="cs-panel-title">Support Chat</span>
              <span class="cs-badge cs-badge--resolved">Resolved</span>
            </div>
            <div class="cs-thread">
              <div class="cs-msg cs-msg--user">My order #4821 hasn't arrived yet</div>
              <div class="cs-msg cs-msg--ai">Checking your order status now...</div>
              <div class="cs-msg cs-msg--ai cs-msg--action">
                <span class="cs-action-icon">
                  <svg width="12" height="12" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </span>
                Shipment located. Arriving tomorrow by 8 PM. Sent tracking link to your email.
              </div>
            </div>
            <div class="cs-resolution">
              <span class="cs-res-dot"></span>
              <span class="cs-res-text">Resolved without human handoff</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3: Intent Routing (full width) -->
      <div class="bento-card bento-card--intent bento-card--wide">
        <div class="bento-card-text bento-card-text--side">
          <div class="bento-label">INTENT ROUTING</div>
          <h3 class="bento-heading">Every message to the right place</h3>
          <p class="bento-desc">
            Intent classification that understands what customers want and routes them to the right handler instantly. No rigid keyword matching. No wrong queues.
          </p>
          <div class="bento-cta">
            <ButtonMinimal label="Learn more" variant="outline" href="/services/intent-agents" arrow={true} />
          </div>
        </div>
        <div class="bento-visual bento-visual--intent">
          <div class="intent-panel">
            <div class="intent-input-row">
              <div class="intent-input-label">Incoming message</div>
              <div class="intent-input-bubble">I need to return my shoes and get a refund for the shipping fee too</div>
            </div>
            <div class="intent-arrow">
              <svg width="16" height="16" fill="none" stroke="#334155" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
              <span class="intent-arrow-label">Intent classification</span>
            </div>
            <div class="intent-scores">
              <div class="intent-score-row">
                <span class="intent-score-label">Return request</span>
                <div class="intent-score-bar-wrap">
                  <div class="intent-score-bar" style="width: 93%"></div>
                </div>
                <span class="intent-score-pct">93%</span>
              </div>
              <div class="intent-score-row">
                <span class="intent-score-label">Refund inquiry</span>
                <div class="intent-score-bar-wrap">
                  <div class="intent-score-bar intent-score-bar--dim" style="width: 71%"></div>
                </div>
                <span class="intent-score-pct intent-score-pct--dim">71%</span>
              </div>
              <div class="intent-score-row">
                <span class="intent-score-label">Shipping issue</span>
                <div class="intent-score-bar-wrap">
                  <div class="intent-score-bar intent-score-bar--dimmer" style="width: 38%"></div>
                </div>
                <span class="intent-score-pct intent-score-pct--dimmer">38%</span>
              </div>
            </div>
            <div class="intent-route">
              <svg width="14" height="14" fill="none" stroke="#334155" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
              <div class="intent-route-chip">
                <svg width="12" height="12" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                Routed to Returns Agent
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
      <div class="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#00d4aa] mb-4">TECH</div>
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        The infrastructure underneath
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
        The technical services that make production AI systems reliable, accurate, and scalable
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <FeatureCardDark
        title="Agentic AI Solutions"
        description="Build intelligent agents that understand context, make decisions, and work autonomously to solve complex business challenges."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>'
      />

      <FeatureCardDark
        title="Multi-Agent RAG Systems"
        description="Advanced retrieval-augmented generation systems that leverage multiple specialized agents for superior accuracy and performance."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>'
      />

      <FeatureCardDark
        title="Custom Development"
        description="Tailored solutions designed specifically for your industry, workflows, and business objectives."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>'
      />

      <FeatureCardDark
        title="Training Data Pipelines"
        description="End-to-end data collection, labeling, and curation pipelines that produce high-quality training datasets for domain-specific models."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>'
      />

      <FeatureCardDark
        title="AI Evaluation and Testing"
        description="Rigorous evaluation frameworks, benchmarks, and red-teaming protocols to ensure your AI systems perform reliably in production."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
      />

      <FeatureCardDark
        title="Vector Database Setup"
        description="Architecture, configuration, and optimization of vector stores — Pinecone, Weaviate, Qdrant, or pgvector — for fast semantic retrieval at scale."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M11 20v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6" /></svg>'
      />

      <FeatureCardDark
        title="Agent Orchestration"
        description="Design and implement multi-agent workflows with task delegation, tool use, memory management, and inter-agent communication."
        horizontal={true}
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>'
      />

      <FeatureCardDark
        title="Production Monitoring"
        description="Real-time dashboards, drift detection, latency tracking, and automated alerts to keep your deployed models performing at their best."
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
        Industries We Serve
      </h2>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Deep expertise across the sectors where AI creates the most impact
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <!-- E-Commerce -->
      <div class="group flex flex-col bg-[#111117] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[rgba(0,212,170,0.15)] transition-all duration-300 min-h-[420px]">
        <div class="flex-1 p-8">
          <div class="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00d4aa] mb-6">E-COMMERCE</div>
          <h3 class="text-2xl font-medium text-white mb-3 leading-tight">AI Product Discovery</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-8">
            Enhance customer experiences with intelligent AI chat that understands purchase intent and surfaces the right products instantly.
          </p>
          <div class="bg-[#0d0d14] rounded-xl border border-white/[0.05] p-4 space-y-3">
            <div class="flex justify-end">
              <div class="text-xs text-slate-300 bg-white/5 rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]">Best wireless headphones under $100?</div>
            </div>
            <div class="flex justify-start">
              <div class="text-xs text-[#00d4aa] bg-[#00d4aa]/8 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">Found 4 matches. Top pick: 94% confidence</div>
            </div>
            <div class="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div class="h-full bg-[#00d4aa]/50 rounded-full" style="width:94%"></div>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse"></div>
              <span class="text-[11px] text-slate-500">Analyzing 1,247 products</span>
            </div>
          </div>
        </div>
        <div class="px-8 pb-8">
          <ButtonMinimal label="Learn more" variant="outline" href="/industries/e-commerce" arrow={true} />
        </div>
      </div>

      <!-- Legal -->
      <div class="group flex flex-col bg-[#111117] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[rgba(0,212,170,0.15)] transition-all duration-300 min-h-[420px]">
        <div class="flex-1 p-8">
          <div class="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00d4aa] mb-6">LEGAL</div>
          <h3 class="text-2xl font-medium text-white mb-3 leading-tight">AI Case Research</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-8">
            Streamline document analysis and legal research with AI that understands legal context and surfaces relevant precedents in seconds.
          </p>
          <div class="bg-[#0d0d14] rounded-xl border border-white/[0.05] p-4 space-y-3">
            <div class="flex justify-end">
              <div class="text-xs text-slate-300 bg-white/5 rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]">Find contract breach precedents 2022 to 2023</div>
            </div>
            <div class="space-y-2">
              <div class="flex gap-2 items-center">
                <div class="w-0.5 min-h-[28px] bg-[#00d4aa] rounded-sm flex-shrink-0 self-stretch"></div>
                <div>
                  <div class="text-xs text-white">Smith v. Jones (2023)</div>
                  <div class="text-[11px] text-slate-500">94% relevance</div>
                </div>
              </div>
              <div class="flex gap-2 items-center">
                <div class="w-0.5 min-h-[28px] bg-[#00d4aa]/40 rounded-sm flex-shrink-0 self-stretch"></div>
                <div>
                  <div class="text-xs text-white">ABC Corp v. XYZ (2022)</div>
                  <div class="text-[11px] text-slate-500">89% relevance</div>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse"></div>
              <span class="text-[11px] text-slate-500">Analyzed 10,247 documents</span>
            </div>
          </div>
        </div>
        <div class="px-8 pb-8">
          <ButtonMinimal label="Learn more" variant="outline" href="/industries/law" arrow={true} />
        </div>
      </div>

      <!-- Finance -->
      <div class="group flex flex-col bg-[#111117] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[rgba(0,212,170,0.15)] transition-all duration-300 min-h-[420px]">
        <div class="flex-1 p-8">
          <div class="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00d4aa] mb-6">FINANCE</div>
          <h3 class="text-2xl font-medium text-white mb-3 leading-tight">AI Financial Analysis</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-8">
            Automate financial analysis and risk assessment with compliant AI that processes complex portfolios in real time.
          </p>
          <div class="bg-[#0d0d14] rounded-xl border border-white/[0.05] p-4 space-y-3">
            <div class="flex justify-end">
              <div class="text-xs text-slate-300 bg-white/5 rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]">Analyze Q4 portfolio risk exposure</div>
            </div>
            <div class="flex justify-start">
              <div class="text-xs text-[#00d4aa] bg-[#00d4aa]/8 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">Risk score: Low at 94.7% confidence</div>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <div class="bg-white/5 rounded-lg p-2 text-center">
                <div class="text-xs font-medium text-[#00d4aa]">+12%</div>
                <div class="text-[10px] text-slate-500">YoY</div>
              </div>
              <div class="bg-white/5 rounded-lg p-2 text-center">
                <div class="text-xs font-medium text-white">0.3%</div>
                <div class="text-[10px] text-slate-500">Risk</div>
              </div>
              <div class="bg-white/5 rounded-lg p-2 text-center">
                <div class="text-xs font-medium text-[#00d4aa]">A+</div>
                <div class="text-[10px] text-slate-500">Rating</div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-8 pb-8">
          <ButtonMinimal label="Learn more" variant="outline" href="/industries/finance" arrow={true} />
        </div>
      </div>

    </div>
  </div>
</div>

<!-- RAG Process Section -->
<div class="bg-[#0d0d14] py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        Our RAG Process
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
        Advanced retrieval-augmented generation pipeline with cutting-edge techniques
      </p>
    </div>

    <CardLayoutTimeline orientation="vertical">
      <snippet>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa] rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="Data Preparation"
            description="Structured data ingestion, cleaning, and normalization. We prepare your data for optimal embedding generation and retrieval performance."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa]/60 rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="Embedding Generation"
            description="State-of-the-art transformer models generate dense vector embeddings. We use advanced models like OpenAI embeddings, Cohere, or custom fine-tuned encoders for domain-specific accuracy."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa] rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="Chunking Strategy"
            description="Intelligent text segmentation using semantic boundaries, sentence transformers, and sliding window techniques. Optimized chunk sizes for maximum retrieval precision."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa]/60 rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="Hybrid Retrieval"
            description="Combines dense vector search (semantic similarity) with sparse retrieval (BM25). Best of both worlds: semantic understanding and keyword precision for superior recall."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa] rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="Semantic Search and BM25"
            description="Dual retrieval approach: semantic search captures meaning and context, while BM25 handles exact keyword matches. Weighted combination ensures comprehensive coverage."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa]/60 rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="HyDE (Hypothetical Document Embeddings)"
            description="Generate hypothetical answers first, then retrieve based on those embeddings. This advanced technique improves retrieval quality by focusing on answer-relevant content."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa] rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="Re-ranking"
            description="Cross-encoder models re-rank initial retrieval results. Fine-tuned BERT, RoBERTa, or specialized re-rankers improve precision by understanding query-document relationships."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa]/60 rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="Metadata and Graph Databases"
            description="Structured metadata filtering with Neo4j, ArangoDB, or custom graph structures. Enables complex relationship queries, multi-hop reasoning, and contextual retrieval."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M11 20v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6" /></svg>'
          />
        </div>
      </snippet>
    </CardLayoutTimeline>
  </div>
</div>

<!-- Legal AI Section -->
<LegalAISection
  headline="Large Internal Dataset Case Lookup"
  description="Internal AI Engine for legal professionals. Search through thousands of cases, analyze documents, and find precedents instantly."
  primaryCta={{
    label: 'Request Demo',
    href: '/contact'
  }}
  secondaryCta={{
    label: 'Learn More',
    href: '/services/legal'
  }}
/>

<!-- FAQ Section -->
<FAQSection />

<!-- CTA Section -->
<CTASectionVariation2
  headline="Ship Artificial Intelligence to production"
  description="Let's discuss how our AI solutions can drive real results for your organization."
  colorScheme="dark"
  primaryCta={{
    label: 'Get Started',
    href: '/contact'
  }}
  secondaryCta={{
    label: 'Schedule a Call',
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
