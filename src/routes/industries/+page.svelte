<script lang="ts">
  import Navigation from '$lib/tailwind/Navigation/Navigation.svelte';
  import Footer from '$lib/tailwind/Footer/Footer.svelte';
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';
</script>

<svelte:head>
  <title>Industries | XT Scale</title>
  <meta name="description" content="AI agents built for the complexity of your industry: e-commerce, legal, finance, and customer service. Domain-trained systems that understand your terminology, regulations, and workflows." />
</svelte:head>

<Navigation dropdownTrigger="hover" />

<main class="industries-page">

  <!-- ─── Hero ──────────────────────────────────────────────── -->
  <section class="ind-hero">
    <div class="ind-hero-glow"></div>
    <div class="ind-hero-dots"></div>
    <div class="ind-hero-split">
      <div class="ind-hero-text">
        <div class="ind-label">INDUSTRIES</div>
        <h1 class="ind-hero-heading">
          AI Built for the Complexity<br />
          of Your Industry
        </h1>
        <p class="ind-hero-sub">
          Generic AI fails in specialized domains. We build agents trained on your industry's
          terminology, regulations, and workflows. They understand the difference
          between a prospectus and a press release, a clause and a covenant.
        </p>
        <div class="ind-hero-pills">
          <a href="#e-commerce" class="ind-hero-pill">E-Commerce</a>
          <a href="#legal" class="ind-hero-pill">Legal</a>
          <a href="#finance" class="ind-hero-pill">Finance</a>
          <a href="#customer-service" class="ind-hero-pill">Customer Service</a>
        </div>
      </div>
      <div class="ind-hero-visual" aria-hidden="true">
        <div class="ind-hero-diagram">
          <div class="ind-hero-diagram-header">
            <span class="ind-hero-diagram-title">Domain Intelligence</span>
            <span class="ind-hero-diagram-badge"><span class="ind-hero-dot"></span>Active</span>
          </div>
          <svg class="ind-hero-svg" viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ind-dotgrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.04)" />
              </pattern>
              <marker id="ind-arrow" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto">
                <polygon points="0 0, 5 2, 0 4" fill="rgba(0,212,170,0.55)" />
              </marker>
            </defs>
            <rect width="400" height="340" fill="#0d0d14" />
            <rect width="400" height="340" fill="url(#ind-dotgrid)" />
            <!-- AI CORE center -->
            <rect x="155" y="142" width="90" height="56" rx="8" fill="#111117" stroke="#00d4aa" stroke-width="1.5" />
            <text x="200" y="163" text-anchor="middle" fill="#00d4aa" font-family="ui-monospace,monospace" font-size="9" font-weight="700">AI CORE</text>
            <text x="200" y="176" text-anchor="middle" fill="#64748b" font-family="ui-monospace,monospace" font-size="7">domain router</text>
            <text x="200" y="188" text-anchor="middle" fill="#334155" font-family="ui-monospace,monospace" font-size="6.5">4 models loaded</text>
            <!-- E-COMMERCE (top-left) -->
            <rect x="20" y="22" width="100" height="36" rx="6" fill="#0d0d14" stroke="rgba(0,212,170,0.22)" stroke-width="1" />
            <text x="70" y="36" text-anchor="middle" fill="#e2e8f0" font-family="ui-monospace,monospace" font-size="8" font-weight="600">E-COMMERCE</text>
            <text x="70" y="48" text-anchor="middle" fill="#64748b" font-family="ui-monospace,monospace" font-size="7">catalog + sessions</text>
            <line x1="120" y1="50" x2="165" y2="152" stroke="#00d4aa" stroke-width="1" stroke-dasharray="4 3" opacity="0.5" marker-end="url(#ind-arrow)" />
            <rect x="130" y="85" width="44" height="16" rx="8" fill="rgba(0,212,170,0.08)" stroke="rgba(0,212,170,0.2)" stroke-width="0.75" />
            <text x="152" y="96" text-anchor="middle" fill="#00d4aa" font-family="ui-monospace,monospace" font-size="6.5" font-weight="600">+23% Conv</text>
            <!-- LEGAL (top-right) -->
            <rect x="270" y="55" width="100" height="36" rx="6" fill="#0d0d14" stroke="rgba(0,212,170,0.22)" stroke-width="1" />
            <text x="320" y="69" text-anchor="middle" fill="#e2e8f0" font-family="ui-monospace,monospace" font-size="8" font-weight="600">LEGAL</text>
            <text x="320" y="81" text-anchor="middle" fill="#64748b" font-family="ui-monospace,monospace" font-size="7">contracts + clauses</text>
            <line x1="270" y1="73" x2="245" y2="155" stroke="#00d4aa" stroke-width="1" stroke-dasharray="4 3" opacity="0.5" marker-end="url(#ind-arrow)" />
            <rect x="246" y="108" width="50" height="16" rx="8" fill="rgba(0,212,170,0.08)" stroke="rgba(0,212,170,0.2)" stroke-width="0.75" />
            <text x="271" y="119" text-anchor="middle" fill="#00d4aa" font-family="ui-monospace,monospace" font-size="6.5" font-weight="600">80% faster</text>
            <!-- FINANCE (bottom-right) -->
            <rect x="265" y="240" width="100" height="36" rx="6" fill="#0d0d14" stroke="rgba(0,212,170,0.22)" stroke-width="1" />
            <text x="315" y="254" text-anchor="middle" fill="#e2e8f0" font-family="ui-monospace,monospace" font-size="8" font-weight="600">FINANCE</text>
            <text x="315" y="266" text-anchor="middle" fill="#64748b" font-family="ui-monospace,monospace" font-size="7">prospectus + data</text>
            <line x1="265" y1="253" x2="245" y2="198" stroke="#00d4aa" stroke-width="1" stroke-dasharray="4 3" opacity="0.5" marker-end="url(#ind-arrow)" />
            <rect x="238" y="218" width="52" height="16" rx="8" fill="rgba(0,212,170,0.08)" stroke="rgba(0,212,170,0.2)" stroke-width="0.75" />
            <text x="264" y="229" text-anchor="middle" fill="#00d4aa" font-family="ui-monospace,monospace" font-size="6.5" font-weight="600">70% less time</text>
            <!-- CUSTOMER SERVICE (bottom-left) -->
            <rect x="15" y="240" width="110" height="36" rx="6" fill="#0d0d14" stroke="rgba(0,212,170,0.22)" stroke-width="1" />
            <text x="70" y="254" text-anchor="middle" fill="#e2e8f0" font-family="ui-monospace,monospace" font-size="8" font-weight="600">CUST. SERVICE</text>
            <text x="70" y="266" text-anchor="middle" fill="#64748b" font-family="ui-monospace,monospace" font-size="7">tickets + resolution</text>
            <line x1="125" y1="252" x2="163" y2="198" stroke="#00d4aa" stroke-width="1" stroke-dasharray="4 3" opacity="0.5" marker-end="url(#ind-arrow)" />
            <rect x="120" y="220" width="38" height="16" rx="8" fill="rgba(0,212,170,0.08)" stroke="rgba(0,212,170,0.2)" stroke-width="0.75" />
            <text x="139" y="231" text-anchor="middle" fill="#00d4aa" font-family="ui-monospace,monospace" font-size="6.5" font-weight="600">87% FCR</text>
          </svg>
          <div class="ind-hero-diagram-footer">
            <span class="ind-hero-footer-dot"></span>
            <span class="ind-hero-footer-text">4 domains · Domain-trained agents</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── E-Commerce Section ───────────────────────────────── -->
  <section id="e-commerce" class="ind-section ind-section--default">
    <div class="px-6">
      <div class="max-w-7xl mx-auto">
        <div class="ind-split ind-split--visual-right">

          <!-- Text -->
          <div class="ind-split-text">
            <div class="ind-label">E-COMMERCE</div>
            <h2 class="ind-section-heading">Turn Every Shopper Into a Known Customer</h2>
            <p class="ind-body">
              Most recommendation engines surface products based on category similarity and purchase history. That's table stakes. Our multi-agent systems analyze browsing velocity, session context, cart abandonment signals, and cross-category intent simultaneously, in real time, to understand not just what a customer has bought, but what they're actually trying to accomplish.
            </p>
            <p class="ind-body">
              A shopper looking at trail running shoes at 10 PM isn't browsing. They're preparing for something. Our agents build a behavioral model on the fly and surface the gear, nutrition, and accessories that match the intent, not just the category.
            </p>
            <p class="ind-body">
              Customer service agents handle returns end-to-end: querying order management systems, initiating refunds, sending confirmation emails, and offering exchange alternatives before the customer has to ask. Tier-1 and tier-2 are fully automated. Tier-3 escalations arrive with complete context so your human agents spend their time solving problems, not reading transcripts.
            </p>
            <p class="ind-body">
              Recommendation latency below 200 milliseconds means the suggestion appears before the customer has finished scrolling. The compounding effect across sessions drives measurable conversion lift, averaging 23% across deployments.
            </p>

            <div class="ind-metrics-row">
              <div class="ind-metric-pill ind-metric-pill--teal">+23% Conversion</div>
              <div class="ind-metric-pill">&lt;200ms Latency</div>
              <div class="ind-metric-pill">94.7% Accuracy</div>
            </div>

            <div class="ind-cta-row">
              <ButtonMinimal label="See E-Commerce Solutions" variant="outline" href="/services" arrow={true} />
            </div>
          </div>

          <!-- Visual -->
          <div class="ind-split-visual">
            <div class="mock-panel">
              <div class="mock-panel-header">
                <div class="mock-panel-title-row">
                  <span class="mock-panel-title">Product Intelligence</span>
                  <span class="mock-live-badge">
                    <span class="mock-live-dot"></span>
                    Live
                  </span>
                </div>
                <div class="mock-panel-sub">Real-time recommendation engine</div>
              </div>

              <!-- Query -->
              <div class="mock-query-row">
                <div class="mock-query-label">Session intent detected</div>
                <div class="mock-query-bubble">Trail running · Race prep · High mileage</div>
              </div>

              <!-- Product grid -->
              <div class="mock-product-grid">
                <div class="mock-product mock-product--featured">
                  <div class="mock-product-img"></div>
                  <div class="mock-product-info">
                    <div class="mock-product-name">Hoka Speedgoat 5</div>
                    <div class="mock-product-price">$144.95</div>
                  </div>
                  <div class="mock-product-badge">97%</div>
                </div>
                <div class="mock-product">
                  <div class="mock-product-img mock-product-img--sm"></div>
                  <div class="mock-product-info">
                    <div class="mock-product-name">Salomon XT-6</div>
                    <div class="mock-product-price">$139.99</div>
                  </div>
                  <div class="mock-product-score">89%</div>
                </div>
                <div class="mock-product">
                  <div class="mock-product-img mock-product-img--sm"></div>
                  <div class="mock-product-info">
                    <div class="mock-product-name">Brooks Cascadia 17</div>
                    <div class="mock-product-price">$129.95</div>
                  </div>
                  <div class="mock-product-score mock-product-score--dim">81%</div>
                </div>
              </div>

              <!-- Also recommended -->
              <div class="mock-cross-sell">
                <div class="mock-cross-sell-label">Also surfacing: Nutrition &amp; Recovery</div>
                <div class="mock-cross-sell-chips">
                  <span class="mock-chip">Gels &amp; Hydration</span>
                  <span class="mock-chip">Compression Socks</span>
                  <span class="mock-chip">Recovery Foam</span>
                </div>
              </div>

              <div class="mock-footer">
                <span class="mock-footer-dot"></span>
                <span class="mock-footer-text">Analyzed 8,431 products · 143ms</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- ─── Legal Section ─────────────────────────────────────── -->
  <section id="legal" class="ind-section ind-section--alt">
    <div class="px-6">
      <div class="max-w-7xl mx-auto">
        <div class="ind-split ind-split--visual-left">

          <!-- Visual -->
          <div class="ind-split-visual">
            <div class="mock-panel">
              <div class="mock-panel-header">
                <div class="mock-panel-title-row">
                  <span class="mock-panel-title">Contract Analysis</span>
                  <span class="mock-status-badge mock-status-badge--warn">3 Risks Flagged</span>
                </div>
                <div class="mock-panel-sub">NDA: Software Services Agreement v4.2</div>
              </div>

              <!-- Document list -->
              <div class="mock-doc-list">
                <div class="mock-doc-item mock-doc-item--risk-high">
                  <div class="mock-doc-risk-bar mock-doc-risk-bar--high"></div>
                  <div class="mock-doc-content">
                    <div class="mock-doc-clause">§ 8.3: Indemnification scope</div>
                    <div class="mock-doc-flag">Non-standard: unlimited liability exposure</div>
                  </div>
                  <span class="mock-risk-chip mock-risk-chip--high">HIGH</span>
                </div>
                <div class="mock-doc-item mock-doc-item--risk-med">
                  <div class="mock-doc-risk-bar mock-doc-risk-bar--med"></div>
                  <div class="mock-doc-content">
                    <div class="mock-doc-clause">§ 12.1: Governing law</div>
                    <div class="mock-doc-flag">Missing: jurisdiction-specific carve-outs</div>
                  </div>
                  <span class="mock-risk-chip mock-risk-chip--med">MED</span>
                </div>
                <div class="mock-doc-item mock-doc-item--risk-med">
                  <div class="mock-doc-risk-bar mock-doc-risk-bar--med"></div>
                  <div class="mock-doc-content">
                    <div class="mock-doc-clause">§ 15.4: IP assignment</div>
                    <div class="mock-doc-flag">Overly broad: includes pre-existing IP</div>
                  </div>
                  <span class="mock-risk-chip mock-risk-chip--med">MED</span>
                </div>
                <div class="mock-doc-item">
                  <div class="mock-doc-risk-bar mock-doc-risk-bar--ok"></div>
                  <div class="mock-doc-content">
                    <div class="mock-doc-clause">§ 4.1: Confidentiality obligations</div>
                    <div class="mock-doc-flag mock-doc-flag--ok">Standard, no issues found</div>
                  </div>
                  <span class="mock-risk-chip mock-risk-chip--ok">OK</span>
                </div>
                <div class="mock-doc-item">
                  <div class="mock-doc-risk-bar mock-doc-risk-bar--ok"></div>
                  <div class="mock-doc-content">
                    <div class="mock-doc-clause">§ 6.2: Term and termination</div>
                    <div class="mock-doc-flag mock-doc-flag--ok">Standard, no issues found</div>
                  </div>
                  <span class="mock-risk-chip mock-risk-chip--ok">OK</span>
                </div>
              </div>

              <div class="mock-footer">
                <span class="mock-footer-dot"></span>
                <span class="mock-footer-text">127 clauses extracted · 94 cross-referenced · 2.1s</span>
              </div>
            </div>
          </div>

          <!-- Text -->
          <div class="ind-split-text">
            <div class="ind-label">LEGAL</div>
            <h2 class="ind-section-heading">AI That Reads Every Line You Can't</h2>
            <p class="ind-body">
              Contract review agents process thousands of pages to surface what matters: non-standard indemnification clauses, obligations buried in schedules, jurisdiction-specific risks your template doesn't account for, and missing provisions that create exposure. The agent doesn't summarize. It extracts, classifies, and flags with clause-level precision.
            </p>
            <p class="ind-body">
              Litigation support agents work differently. They don't browse a database. They reason over it. Given a set of facts and a legal theory, they surface relevant precedent, distinguish unfavorable cases with counterarguments, and produce structured research memos in a fraction of the time a paralegal would spend. 10,000+ documents per engagement, cross-referenced automatically.
            </p>
            <p class="ind-body">
              Due diligence systems cross-reference entities, corporate filings, public records, litigation history, and beneficial ownership structures across hundreds of documents in minutes. What previously required a team working for days is compressed into a structured report with a full evidence trail.
            </p>

            <div class="ind-stats-stack">
              <div class="ind-stat-row">
                <div class="ind-stat-num">80%</div>
                <div class="ind-stat-desc">reduction in contract review time</div>
              </div>
              <div class="ind-stat-row">
                <div class="ind-stat-num">10,000+</div>
                <div class="ind-stat-desc">documents processed per engagement</div>
              </div>
              <div class="ind-stat-row">
                <div class="ind-stat-num">99.2%</div>
                <div class="ind-stat-desc">clause extraction accuracy</div>
              </div>
            </div>

            <div class="ind-cta-row">
              <ButtonMinimal label="See Legal AI Solutions" variant="outline" href="/services" arrow={true} />
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- ─── Finance Section ───────────────────────────────────── -->
  <section id="finance" class="ind-section ind-section--default">
    <div class="px-6">
      <div class="max-w-7xl mx-auto">
        <div class="ind-split ind-split--visual-right">

          <!-- Text -->
          <div class="ind-split-text">
            <div class="ind-label">FINANCE</div>
            <h2 class="ind-section-heading">Intelligence at the Speed of Markets</h2>

            <div class="ind-subsection">
              <h3 class="ind-subsection-heading">Portfolio & Wealth Management</h3>
              <p class="ind-body">
                Personalized portfolio agents monitor every position against client risk profiles in real time. Automated rebalancing recommendations, tax-loss harvesting signals, and client-facing narrative generation, with plain-language explanations of complex moves that advisors can send directly, without spending an hour writing them.
              </p>
            </div>

            <div class="ind-subsection">
              <h3 class="ind-subsection-heading">Market Sentiment & Trading Intelligence</h3>
              <p class="ind-body">
                Agents that parse SEC filings, earnings call transcripts, news feeds, and social signals simultaneously, producing structured sentiment scores and event-driven alerts before the market prices them in. Analyst time on data aggregation drops by 70%. What's left is the interpretation that actually requires human judgment.
              </p>
            </div>

            <div class="ind-subsection">
              <h3 class="ind-subsection-heading">Risk & Compliance</h3>
              <p class="ind-body">
                Automated monitoring agents flag unusual transaction patterns, check trades against regulatory requirements in real time, and generate compliance reports with full audit trails. Built for the documentation and traceability standards financial regulators require.
              </p>
            </div>

            <div class="ind-metrics-row">
              <div class="ind-metric-pill ind-metric-pill--teal">70% less analyst time</div>
              <div class="ind-metric-pill">50+ data sources</div>
              <div class="ind-metric-pill">Full audit trail</div>
            </div>

            <div class="ind-cta-row">
              <ButtonMinimal label="See Finance AI Solutions" variant="outline" href="/services" arrow={true} />
            </div>
          </div>

          <!-- Visual -->
          <div class="ind-split-visual">
            <div class="mock-panel">
              <div class="mock-panel-header">
                <div class="mock-panel-title-row">
                  <span class="mock-panel-title">Market Intelligence</span>
                  <span class="mock-live-badge">
                    <span class="mock-live-dot"></span>
                    Real-time
                  </span>
                </div>
                <div class="mock-panel-sub">Sentiment & portfolio monitoring</div>
              </div>

              <!-- Sentiment scores -->
              <div class="fin-sentiment-block">
                <div class="fin-block-label">Sentiment: AAPL earnings call</div>
                <div class="fin-sentiment-rows">
                  <div class="fin-sent-row">
                    <span class="fin-sent-label">Revenue guidance</span>
                    <div class="fin-sent-bar-wrap">
                      <div class="fin-sent-bar fin-sent-bar--positive" style="width: 78%"></div>
                    </div>
                    <span class="fin-sent-score fin-sent-score--pos">+0.78</span>
                  </div>
                  <div class="fin-sent-row">
                    <span class="fin-sent-label">Supply chain</span>
                    <div class="fin-sent-bar-wrap">
                      <div class="fin-sent-bar fin-sent-bar--negative" style="width: 42%"></div>
                    </div>
                    <span class="fin-sent-score fin-sent-score--neg">−0.42</span>
                  </div>
                  <div class="fin-sent-row">
                    <span class="fin-sent-label">AI product outlook</span>
                    <div class="fin-sent-bar-wrap">
                      <div class="fin-sent-bar fin-sent-bar--positive" style="width: 91%"></div>
                    </div>
                    <span class="fin-sent-score fin-sent-score--pos">+0.91</span>
                  </div>
                </div>
              </div>

              <!-- Tickers -->
              <div class="fin-tickers">
                <div class="fin-ticker">
                  <span class="fin-ticker-sym">AAPL</span>
                  <span class="fin-ticker-price">$194.32</span>
                  <span class="fin-ticker-chg fin-ticker-chg--up">+2.1%</span>
                </div>
                <div class="fin-ticker">
                  <span class="fin-ticker-sym">MSFT</span>
                  <span class="fin-ticker-price">$418.76</span>
                  <span class="fin-ticker-chg fin-ticker-chg--up">+0.8%</span>
                </div>
                <div class="fin-ticker">
                  <span class="fin-ticker-sym">NVDA</span>
                  <span class="fin-ticker-price">$873.11</span>
                  <span class="fin-ticker-chg fin-ticker-chg--down">−1.3%</span>
                </div>
              </div>

              <!-- Alert -->
              <div class="fin-alert">
                <svg width="12" height="12" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="fin-alert-text">Event-driven alert: AAPL AI guidance may impact MSFT, GOOGL. Cross-referencing now</span>
              </div>

              <!-- Portfolio stats -->
              <div class="fin-port-grid">
                <div class="fin-port-stat">
                  <div class="fin-port-val">$4.2M</div>
                  <div class="fin-port-key">AUM monitored</div>
                </div>
                <div class="fin-port-stat">
                  <div class="fin-port-val fin-port-val--teal">Low</div>
                  <div class="fin-port-key">Risk profile</div>
                </div>
                <div class="fin-port-stat">
                  <div class="fin-port-val">+12.4%</div>
                  <div class="fin-port-key">YTD return</div>
                </div>
              </div>

              <div class="mock-footer">
                <span class="mock-footer-dot"></span>
                <span class="mock-footer-text">Monitoring 50+ sources · Updated 34s ago</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- ─── Customer Service Section ─────────────────────────── -->
  <section id="customer-service" class="ind-section ind-section--alt">
    <div class="px-6">
      <div class="max-w-7xl mx-auto">

        <div class="text-center mb-14">
          <div class="ind-label" style="margin-bottom: 1rem;">CUSTOMER SERVICE</div>
          <h2 class="ind-section-heading ind-section-heading--centered">Support That Scales Without Headcount</h2>
          <p class="ind-body ind-body--centered">
            Autonomous agents deployed across chat, email, and voice, trained on your product documentation,
            policies, and historical ticket resolutions. They handle tier-1 through tier-3, escalate with
            full context, and improve with every interaction.
          </p>

          <!-- Feature pills row -->
          <div class="cs-feature-pills">
            <div class="cs-feature-pill">
              <svg width="14" height="14" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
              </svg>
              Omnichannel
            </div>
            <div class="cs-feature-pill">
              <svg width="14" height="14" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Self-learning
            </div>
            <div class="cs-feature-pill">
              <svg width="14" height="14" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Human handoff
            </div>
            <div class="cs-feature-pill">
              <svg width="14" height="14" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Full audit log
            </div>
          </div>
        </div>

        <!-- Stats grid -->
        <div class="cs-stats-grid">
          <div class="cs-stat-card">
            <div class="cs-stat-num">87%</div>
            <div class="cs-stat-label">First-contact resolution</div>
            <div class="cs-stat-desc">Tickets resolved without escalation or follow-up</div>
          </div>
          <div class="cs-stat-card">
            <div class="cs-stat-num">24/7</div>
            <div class="cs-stat-label">Always available</div>
            <div class="cs-stat-desc">No queues, no coverage gaps, no shift changes</div>
          </div>
          <div class="cs-stat-card">
            <div class="cs-stat-num">5×</div>
            <div class="cs-stat-label">Faster response time</div>
            <div class="cs-stat-desc">Median response in under 4 seconds across channels</div>
          </div>
          <div class="cs-stat-card">
            <div class="cs-stat-num">60%</div>
            <div class="cs-stat-label">Cost reduction</div>
            <div class="cs-stat-desc">Average operational savings within 90 days of deployment</div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ─── Comparison Section ────────────────────────────────── -->
  <section class="ind-section ind-section--default">
    <div class="px-6">
      <div class="max-w-7xl mx-auto">

        <div class="text-center mb-14">
          <div class="ind-label" style="margin-bottom: 1rem;">THE DIFFERENCE</div>
          <h2 class="ind-section-heading ind-section-heading--centered">Generic AI vs. Domain-Trained Agents</h2>
        </div>

        <div class="cmp-table">

          <!-- Header row -->
          <div class="cmp-header-row">
            <div class="cmp-header-spacer"></div>
            <div class="cmp-header cmp-header--bad">
              <svg width="16" height="16" fill="none" stroke="#ef4444" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Off-the-shelf AI
            </div>
            <div class="cmp-header cmp-header--good">
              <svg width="16" height="16" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              XT Scale Agents
            </div>
          </div>

          <!-- Comparison rows -->
          <div class="cmp-row">
            <div class="cmp-category">Training Data</div>
            <div class="cmp-cell cmp-cell--bad">
              <span class="cmp-x">✕</span>
              Trained on general internet data
            </div>
            <div class="cmp-cell cmp-cell--good">
              <span class="cmp-check">✓</span>
              Trained on your domain's corpus
            </div>
          </div>

          <div class="cmp-row">
            <div class="cmp-category">Terminology</div>
            <div class="cmp-cell cmp-cell--bad">
              <span class="cmp-x">✕</span>
              Fails on specialized terminology
            </div>
            <div class="cmp-cell cmp-cell--good">
              <span class="cmp-check">✓</span>
              Understands field-specific language
            </div>
          </div>

          <div class="cmp-row">
            <div class="cmp-category">Compliance</div>
            <div class="cmp-cell cmp-cell--bad">
              <span class="cmp-x">✕</span>
              No regulatory awareness
            </div>
            <div class="cmp-cell cmp-cell--good">
              <span class="cmp-check">✓</span>
              Built with compliance requirements
            </div>
          </div>

          <div class="cmp-row">
            <div class="cmp-category">Output quality</div>
            <div class="cmp-cell cmp-cell--bad">
              <span class="cmp-x">✕</span>
              Generic, unstructured outputs
            </div>
            <div class="cmp-cell cmp-cell--good">
              <span class="cmp-check">✓</span>
              Structured, actionable outputs
            </div>
          </div>

          <div class="cmp-row cmp-row--last">
            <div class="cmp-category">Fit</div>
            <div class="cmp-cell cmp-cell--bad">
              <span class="cmp-x">✕</span>
              One-size-fits-all approach
            </div>
            <div class="cmp-cell cmp-cell--good">
              <span class="cmp-check">✓</span>
              Fine-tuned per use case
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- ─── CTA Section ───────────────────────────────────────── -->
  <section class="ind-section ind-section--alt ind-cta-section">
    <div class="px-6">
      <div class="max-w-7xl mx-auto">
        <div class="ind-cta-card">
          <div class="ind-label" style="margin-bottom: 1rem;">GET STARTED</div>
          <h2 class="ind-cta-heading">Your Industry Has Unique Problems.<br />We Build Unique Solutions.</h2>
          <p class="ind-cta-body">
            Every engagement starts with understanding your workflows, your data, and your edge cases.
            We don't drop a generic AI into your stack. We build agents that know your domain
            from the ground up, and we measure them against outcomes that actually matter to your business.
          </p>
          <div class="ind-cta-buttons">
            <ButtonMinimal label="Start a Conversation" variant="primary" href="/contact" arrow={true} />
            <ButtonMinimal label="View Services" variant="outline" href="/services" />
          </div>
        </div>
      </div>
    </div>
  </section>

</main>

<Footer />

<style>
  /* ─── Page base ─────────────────────────────────────────────── */
  .industries-page {
    background-color: #09090f;
    min-height: 100vh;
  }

  /* ─── Section wrappers ──────────────────────────────────────── */
  .ind-section {
    padding: 5.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    scroll-margin-top: 88px;
  }

  .ind-section--default {
    background-color: #09090f;
  }

  .ind-section--alt {
    background-color: #0a0a12;
  }

  .ind-cta-section {
    border-bottom: none;
  }

  /* ─── Hero ──────────────────────────────────────────────────── */
  .ind-hero {
    position: relative;
    overflow: hidden;
    background-color: #09090f;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 0 1.5rem;
  }

  .ind-hero-glow {
    position: absolute;
    top: -80px;
    right: -80px;
    width: 600px;
    height: 500px;
    background: radial-gradient(ellipse at center, rgba(0, 212, 170, 0.1) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .ind-hero-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
    z-index: 0;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
  }

  .ind-hero-split {
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 5rem 0 4rem;
    position: relative;
    z-index: 1;
  }

  @media (min-width: 1024px) {
    .ind-hero-split {
      flex-direction: row;
      align-items: center;
      gap: 4rem;
      padding: 7rem 0 6rem;
    }
    .ind-hero-text { flex: 0 0 52%; }
    .ind-hero-visual { flex: 1; }
  }

  .ind-hero-text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .ind-hero-heading {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin: 0;
  }

  .ind-hero-sub {
    font-size: 18px;
    color: #94a3b8;
    line-height: 1.7;
    max-width: 46rem;
    margin: 0;
  }

  .ind-hero-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .ind-hero-pill {
    font-size: 12px;
    font-weight: 500;
    color: #64748b;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 9999px;
    padding: 5px 14px;
    text-decoration: none;
    transition: color 0.2s, border-color 0.2s;
  }

  .ind-hero-pill:hover {
    color: #00d4aa;
    border-color: rgba(0, 212, 170, 0.25);
  }

  .ind-hero-diagram {
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 14px;
    overflow: hidden;
  }

  .ind-hero-diagram-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .ind-hero-diagram-title {
    font-size: 13px;
    font-weight: 500;
    color: #e2e8f0;
    font-family: ui-monospace, monospace;
  }

  .ind-hero-diagram-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.08);
    border: 1px solid rgba(0, 212, 170, 0.18);
    border-radius: 9999px;
    padding: 2px 9px;
  }

  .ind-hero-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00d4aa;
    animation: ind-pulse 2s ease-in-out infinite;
  }

  .ind-hero-svg {
    width: 100%;
    height: auto;
    display: block;
  }

  .ind-hero-diagram-footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
  }

  .ind-hero-footer-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00d4aa;
    animation: ind-pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }

  .ind-hero-footer-text {
    font-size: 11px;
    color: #334155;
  }

  /* ─── Shared label ──────────────────────────────────────────── */
  .ind-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #00d4aa;
  }

  /* ─── Section heading ───────────────────────────────────────── */
  .ind-section-heading {
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.025em;
    line-height: 1.15;
    margin: 0.75rem 0 1.25rem;
  }

  .ind-section-heading--centered {
    text-align: center;
    max-width: 44rem;
    margin-left: auto;
    margin-right: auto;
  }

  /* ─── Body text ─────────────────────────────────────────────── */
  .ind-body {
    font-size: 16px;
    color: #94a3b8;
    line-height: 1.8;
    margin: 0 0 1rem;
  }

  .ind-body--centered {
    text-align: center;
    max-width: 44rem;
    margin-left: auto;
    margin-right: auto;
  }

  /* ─── Subsection ─────────────────────────────────────────────── */
  .ind-subsection {
    margin-bottom: 1.25rem;
  }

  .ind-subsection-heading {
    font-size: 15px;
    font-weight: 600;
    color: #e2e8f0;
    margin: 0 0 0.5rem;
    letter-spacing: -0.01em;
  }

  /* ─── Metric pills ──────────────────────────────────────────── */
  .ind-metrics-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
    margin: 1.75rem 0 1.5rem;
  }

  .ind-metric-pill {
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    color: #94a3b8;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 9999px;
    padding: 5px 14px;
    letter-spacing: 0.02em;
  }

  .ind-metric-pill--teal {
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.08);
    border-color: rgba(0, 212, 170, 0.2);
  }

  /* ─── CTA row ───────────────────────────────────────────────── */
  .ind-cta-row {
    margin-top: 0.5rem;
  }

  /* ─── Stats stack (Legal) ────────────────────────────────────── */
  .ind-stats-stack {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    margin: 1.75rem 0 1.5rem;
    padding: 1.5rem;
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
  }

  .ind-stat-row {
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }

  .ind-stat-num {
    font-size: 22px;
    font-weight: 700;
    color: #00d4aa;
    letter-spacing: -0.02em;
    flex-shrink: 0;
    min-width: 90px;
  }

  .ind-stat-desc {
    font-size: 14px;
    color: #64748b;
    line-height: 1.5;
  }

  /* ─── Alternating split layout ──────────────────────────────── */
  .ind-split {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3.5rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .ind-split--visual-right {
      grid-template-columns: 1fr 460px;
    }

    .ind-split--visual-left {
      grid-template-columns: 460px 1fr;
    }

    .ind-split--visual-left .ind-split-text {
      order: 2;
    }

    .ind-split--visual-left .ind-split-visual {
      order: 1;
    }
  }

  /* ─── Mock panels ───────────────────────────────────────────── */
  .mock-panel {
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 14px;
    overflow: hidden;
  }

  .mock-panel-header {
    padding: 0.875rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .mock-panel-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3px;
  }

  .mock-panel-title {
    font-size: 13px;
    font-weight: 600;
    color: #ffffff;
  }

  .mock-panel-sub {
    font-size: 11px;
    color: #475569;
  }

  /* Live badge */
  .mock-live-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.08);
    border: 1px solid rgba(0, 212, 170, 0.18);
    border-radius: 9999px;
    padding: 2px 9px;
  }

  .mock-live-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #00d4aa;
    animation: ind-pulse 1.6s ease-in-out infinite;
  }

  /* Status badge */
  .mock-status-badge {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border-radius: 9999px;
    padding: 2px 9px;
  }

  .mock-status-badge--warn {
    color: #f59e0b;
    background: rgba(245, 158, 11, 0.1);
    border: 1px solid rgba(245, 158, 11, 0.25);
  }

  /* Panel footer */
  .mock-footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
  }

  .mock-footer-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #00d4aa;
    animation: ind-pulse 1.6s ease-in-out infinite;
    flex-shrink: 0;
  }

  .mock-footer-text {
    font-size: 11px;
    color: #334155;
  }

  /* ─── E-Commerce mock ───────────────────────────────────────── */
  .mock-query-row {
    padding: 0.75rem 1.25rem 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .mock-query-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #334155;
  }

  .mock-query-bubble {
    display: inline-block;
    font-size: 12px;
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.08);
    border: 1px solid rgba(0, 212, 170, 0.15);
    border-radius: 0.625rem;
    padding: 6px 12px;
    width: fit-content;
  }

  .mock-product-grid {
    padding: 0.875rem 1.25rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .mock-product {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.625rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .mock-product:last-child {
    border-bottom: none;
  }

  .mock-product--featured {
    background: rgba(0, 212, 170, 0.04);
    border-radius: 8px;
    padding: 0.75rem;
    border: 1px solid rgba(0, 212, 170, 0.1);
    margin-bottom: 0.25rem;
  }

  .mock-product-img {
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 7px;
    flex-shrink: 0;
  }

  .mock-product-img--sm {
    width: 28px;
    height: 28px;
    border-radius: 5px;
  }

  .mock-product-info {
    flex: 1;
  }

  .mock-product-name {
    font-size: 12px;
    font-weight: 500;
    color: #e2e8f0;
  }

  .mock-product-price {
    font-size: 11px;
    color: #475569;
  }

  .mock-product-badge {
    font-size: 12px;
    font-weight: 700;
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.1);
    border-radius: 6px;
    padding: 2px 8px;
    flex-shrink: 0;
  }

  .mock-product-score {
    font-size: 12px;
    font-weight: 600;
    color: #475569;
    flex-shrink: 0;
  }

  .mock-product-score--dim {
    color: #334155;
  }

  .mock-cross-sell {
    padding: 0.625rem 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .mock-cross-sell-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #334155;
  }

  .mock-cross-sell-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .mock-chip {
    font-size: 11px;
    color: #64748b;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 9999px;
    padding: 3px 9px;
  }

  /* ─── Legal mock ─────────────────────────────────────────────── */
  .mock-doc-list {
    padding: 0.625rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .mock-doc-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.625rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .mock-doc-item:last-child {
    border-bottom: none;
  }

  .mock-doc-risk-bar {
    width: 3px;
    border-radius: 2px;
    align-self: stretch;
    min-height: 32px;
    flex-shrink: 0;
  }

  .mock-doc-risk-bar--high { background: rgba(239, 68, 68, 0.7); }
  .mock-doc-risk-bar--med  { background: rgba(245, 158, 11, 0.6); }
  .mock-doc-risk-bar--ok   { background: rgba(0, 212, 170, 0.3); }

  .mock-doc-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .mock-doc-clause {
    font-size: 12px;
    font-weight: 500;
    color: #e2e8f0;
    font-family: monospace;
  }

  .mock-doc-flag {
    font-size: 11px;
    color: #64748b;
    line-height: 1.4;
  }

  .mock-doc-flag--ok {
    color: #475569;
  }

  .mock-risk-chip {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.08em;
    border-radius: 4px;
    padding: 2px 6px;
    flex-shrink: 0;
  }

  .mock-risk-chip--high {
    color: #ef4444;
    background: rgba(239, 68, 68, 0.12);
    border: 1px solid rgba(239, 68, 68, 0.25);
  }

  .mock-risk-chip--med {
    color: #f59e0b;
    background: rgba(245, 158, 11, 0.1);
    border: 1px solid rgba(245, 158, 11, 0.2);
  }

  .mock-risk-chip--ok {
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.08);
    border: 1px solid rgba(0, 212, 170, 0.18);
  }

  /* ─── Finance mock ───────────────────────────────────────────── */
  .fin-sentiment-block {
    padding: 0.875rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .fin-block-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #334155;
    margin-bottom: 0.625rem;
  }

  .fin-sentiment-rows {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .fin-sent-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .fin-sent-label {
    font-size: 11px;
    color: #64748b;
    flex: 0 0 120px;
    white-space: nowrap;
  }

  .fin-sent-bar-wrap {
    flex: 1;
    height: 4px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 2px;
    overflow: hidden;
  }

  .fin-sent-bar {
    height: 100%;
    border-radius: 2px;
  }

  .fin-sent-bar--positive { background: #00d4aa; }
  .fin-sent-bar--negative { background: #ef4444; }

  .fin-sent-score {
    font-size: 12px;
    font-weight: 600;
    flex: 0 0 40px;
    text-align: right;
  }

  .fin-sent-score--pos { color: #00d4aa; }
  .fin-sent-score--neg { color: #ef4444; }

  .fin-tickers {
    padding: 0.75rem 1.25rem;
    display: flex;
    gap: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .fin-ticker {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 0 0.5rem;
    border-right: 1px solid rgba(255, 255, 255, 0.04);
  }

  .fin-ticker:first-child { padding-left: 0; }
  .fin-ticker:last-child  { border-right: none; }

  .fin-ticker-sym {
    font-size: 11px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.04em;
    font-family: monospace;
  }

  .fin-ticker-price {
    font-size: 12px;
    color: #94a3b8;
  }

  .fin-ticker-chg {
    font-size: 11px;
    font-weight: 600;
  }

  .fin-ticker-chg--up   { color: #00d4aa; }
  .fin-ticker-chg--down { color: #ef4444; }

  .fin-alert {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    background: rgba(0, 212, 170, 0.04);
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .fin-alert svg {
    flex-shrink: 0;
    margin-top: 1px;
  }

  .fin-alert-text {
    font-size: 11px;
    color: #64748b;
    line-height: 1.5;
  }

  .fin-port-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0.875rem 1.25rem;
    gap: 0;
  }

  .fin-port-stat {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 0 0.625rem;
    border-right: 1px solid rgba(255, 255, 255, 0.04);
  }

  .fin-port-stat:first-child { padding-left: 0; }
  .fin-port-stat:last-child  { border-right: none; }

  .fin-port-val {
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.01em;
  }

  .fin-port-val--teal { color: #00d4aa; }

  .fin-port-key {
    font-size: 10px;
    color: #475569;
    letter-spacing: 0.03em;
  }

  /* ─── Customer service stats ─────────────────────────────────── */
  .cs-feature-pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.625rem;
    margin-top: 1.75rem;
  }

  .cs-feature-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 500;
    color: #e2e8f0;
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 9999px;
    padding: 7px 16px;
  }

  .cs-stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .cs-stats-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .cs-stat-card {
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 1.75rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    transition: border-color 0.2s ease;
  }

  .cs-stat-card:hover {
    border-color: rgba(0, 212, 170, 0.15);
  }

  .cs-stat-num {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #00d4aa;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .cs-stat-label {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    margin-top: 0.25rem;
  }

  .cs-stat-desc {
    font-size: 13px;
    color: #475569;
    line-height: 1.5;
  }

  /* ─── Comparison table ───────────────────────────────────────── */
  .cmp-table {
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    overflow: hidden;
    background: #111117;
  }

  .cmp-header-row {
    display: grid;
    grid-template-columns: 160px 1fr 1fr;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }

  @media (max-width: 640px) {
    .cmp-header-row {
      grid-template-columns: 100px 1fr 1fr;
    }
  }

  .cmp-header-spacer {
    background: #0d0d14;
    border-right: 1px solid rgba(255, 255, 255, 0.06);
  }

  .cmp-header {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 1rem 1.25rem;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .cmp-header--bad {
    color: #ef4444;
    background: rgba(239, 68, 68, 0.04);
    border-right: 1px solid rgba(255, 255, 255, 0.05);
  }

  .cmp-header--good {
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.05);
  }

  .cmp-row {
    display: grid;
    grid-template-columns: 160px 1fr 1fr;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 640px) {
    .cmp-row {
      grid-template-columns: 100px 1fr 1fr;
    }
  }

  .cmp-row--last {
    border-bottom: none;
  }

  .cmp-category {
    padding: 1rem 1.25rem;
    font-size: 12px;
    font-weight: 600;
    color: #475569;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    background: #0d0d14;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
  }

  .cmp-cell {
    padding: 1rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: 1.5;
  }

  .cmp-cell--bad {
    color: #64748b;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
  }

  .cmp-cell--good {
    color: #e2e8f0;
  }

  .cmp-x {
    color: #ef4444;
    font-size: 14px;
    font-weight: 700;
    flex-shrink: 0;
    opacity: 0.7;
  }

  .cmp-check {
    color: #00d4aa;
    font-size: 14px;
    font-weight: 700;
    flex-shrink: 0;
  }

  /* ─── CTA section ────────────────────────────────────────────── */
  .ind-cta-card {
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1.5rem;
    padding: 4rem 3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    max-width: 52rem;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    .ind-cta-card {
      padding: 2.5rem 1.5rem;
    }
  }

  .ind-cta-heading {
    font-size: clamp(1.6rem, 3.5vw, 2.5rem);
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.025em;
    line-height: 1.15;
    margin: 0;
  }

  .ind-cta-body {
    font-size: 16px;
    color: #64748b;
    line-height: 1.75;
    max-width: 40rem;
    margin: 0;
  }

  .ind-cta-buttons {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0.5rem;
  }

  /* ─── Animation ──────────────────────────────────────────────── */
  @keyframes ind-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.25; }
  }
</style>
