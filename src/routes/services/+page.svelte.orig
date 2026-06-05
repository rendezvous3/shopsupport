<script lang="ts">
  import Navigation from '$lib/tailwind/Navigation/Navigation.svelte';
  import Footer from '$lib/tailwind/Footer/Footer.svelte';
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';
</script>

<svelte:head>
  <title>Services — xtscale</title>
  <meta name="description" content="AI systems built for production. Business AI agents, technical infrastructure, and custom AI engineering for companies that need systems that work." />
</svelte:head>

<Navigation dropdownTrigger="hover" />

<!-- ============================================================
     1. HERO
     ============================================================ -->
<section class="hero-section px-6">
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="dot-grid" aria-hidden="true"></div>
  <div class="max-w-7xl mx-auto hero-inner">
    <div class="hero-badge">OUR SERVICES</div>
    <h1 class="hero-h1">
      AI Systems Built<br />
      for Production
    </h1>
    <p class="hero-sub">
      We architect, build, and operate AI agents trained on your data, calibrated to your domain, and integrated into your existing workflows.
    </p>
    <div class="hero-ctas">
      <ButtonMinimal label="Start a Project" variant="primary" size="lg" href="/contact" arrow={true} />
      <ButtonMinimal label="See Our Work" variant="outline" size="lg" href="/about" />
    </div>
  </div>
</section>

<!-- ============================================================
     2. BUSINESS AI — 6 dedicated sections
     ============================================================ -->
<section id="business-ai" class="section-business-ai px-6">
  <div class="max-w-7xl mx-auto">

    <div class="bai-intro">
      <div class="section-label">BUSINESS AI</div>
      <h2 class="section-h2">AI Trained on Your Business</h2>
      <p class="section-sub">
        Purpose-built agents for the workflows that define how your business operates. Each system is trained on your proprietary data and calibrated to your domain.
      </p>
    </div>

    <!-- ── 1: E-commerce Intelligence ── -->
    <div id="ecommerce-ai" class="bai-service">
      <div class="bai-text">
        <div class="bai-tag">E-COMMERCE</div>
        <h3 class="bai-title">E-commerce Intelligence</h3>
        <p class="bai-desc">
          Recommendation agents built on your product catalog, session data, and purchase history. The system models what a shopper is trying to accomplish rather than what they have recently clicked. Products surface at the right moment, across any channel, with latency under 200 milliseconds.
        </p>
        <ul class="bai-bullets">
          <li>Real-time intent modeling from session context</li>
          <li>Catalog-native training on your full SKU library</li>
          <li>Cross-sell and upsell routing per interaction</li>
          <li>Under 200ms end-to-end recommendation latency</li>
        </ul>
        <div class="bai-stats">
          <div class="bai-stat"><span class="bai-stat-num">+23%</span><span class="bai-stat-label">Avg. conversion lift</span></div>
          <div class="bai-stat"><span class="bai-stat-num">&lt;200ms</span><span class="bai-stat-label">Recommendation latency</span></div>
          <div class="bai-stat"><span class="bai-stat-num">94.7%</span><span class="bai-stat-label">Accuracy</span></div>
        </div>
      </div>
      <div class="bai-visual">
        <div class="bai-panel">
          <div class="bai-panel-header">
            <span class="bai-panel-title">Recommendation Engine</span>
            <span class="bai-panel-badge live-badge"><span class="live-dot"></span>Live</span>
          </div>
          <div class="bai-panel-body">
            <div class="bai-panel-label">Session intent detected</div>
            <div class="intent-chip">Trail Running · Gear · High-intensity</div>
            <div class="bai-panel-label" style="margin-top: 1rem;">Top recommendations</div>
            <div class="rec-item">
              <div class="rec-item-info">
                <div class="rec-item-name">Trail Running Shoe Pro X7</div>
                <div class="rec-item-meta">Footwear · In stock</div>
              </div>
              <div class="rec-score">97%</div>
            </div>
            <div class="rec-item">
              <div class="rec-item-info">
                <div class="rec-item-name">Hydration Vest 10L</div>
                <div class="rec-item-meta">Accessories · In stock</div>
              </div>
              <div class="rec-score">91%</div>
            </div>
            <div class="rec-item">
              <div class="rec-item-info">
                <div class="rec-item-name">Performance Insole Set</div>
                <div class="rec-item-meta">Accessories · In stock</div>
              </div>
              <div class="rec-score">84%</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── 2: Customer Service Automation ── -->
    <div id="customer-service-ai" class="bai-service bai-service--reversed">
      <div class="bai-text">
        <div class="bai-tag">CUSTOMER SERVICE</div>
        <h3 class="bai-title">Customer Service Automation</h3>
        <p class="bai-desc">
          Agents that handle the complete resolution cycle from intake through close. Trained on your knowledge base and escalation policies, they resolve standard cases autonomously. Complex issues arrive at your team with full context already assembled.
        </p>
        <ul class="bai-bullets">
          <li>Multi-channel support across email, chat, and tickets</li>
          <li>Autonomous resolution for tier-1 and tier-2 cases</li>
          <li>Intelligent escalation with full context transfer</li>
          <li>Continuous improvement from resolved interactions</li>
        </ul>
        <div class="bai-stats">
          <div class="bai-stat"><span class="bai-stat-num">87%</span><span class="bai-stat-label">First-contact resolution</span></div>
          <div class="bai-stat"><span class="bai-stat-num">60%</span><span class="bai-stat-label">Cost reduction</span></div>
        </div>
      </div>
      <div class="bai-visual">
        <div class="bai-panel">
          <div class="bai-panel-header">
            <span class="bai-panel-title">Support Agent</span>
            <span class="bai-panel-badge">Autonomous</span>
          </div>
          <div class="bai-panel-body">
            <div class="ticket-item">
              <div class="ticket-dot ticket-dot--teal"></div>
              <div class="ticket-body">
                <div class="ticket-title">Order refund #48291</div>
                <div class="ticket-meta">Resolved in 8s · No escalation</div>
              </div>
            </div>
            <div class="ticket-item">
              <div class="ticket-dot ticket-dot--teal"></div>
              <div class="ticket-body">
                <div class="ticket-title">Password reset request</div>
                <div class="ticket-meta">Resolved in 3s · Self-service flow</div>
              </div>
            </div>
            <div class="ticket-item">
              <div class="ticket-dot ticket-dot--amber"></div>
              <div class="ticket-body">
                <div class="ticket-title">Billing dispute #50103</div>
                <div class="ticket-meta">Escalated with full context</div>
              </div>
            </div>
            <div class="ticket-item">
              <div class="ticket-dot ticket-dot--teal"></div>
              <div class="ticket-body">
                <div class="ticket-title">Delivery status inquiry</div>
                <div class="ticket-meta">Resolved in 2s · API lookup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── 3: Intent Routing Agents ── -->
    <div id="intent-routing" class="bai-service">
      <div class="bai-text">
        <div class="bai-tag">OPERATIONS</div>
        <h3 class="bai-title">Intent Routing Agents</h3>
        <p class="bai-desc">
          Natural language classification that replaces manual triage. Incoming requests are analyzed, prioritized, and sent to the correct team or automated workflow without any human in the loop. Operates across email, tickets, chat, and internal tooling.
        </p>
        <ul class="bai-bullets">
          <li>Multi-class intent classification at scale</li>
          <li>Priority scoring based on urgency and context</li>
          <li>Cross-channel routing to teams or automations</li>
          <li>Fallback and escalation logic built in</li>
        </ul>
      </div>
      <div class="bai-visual">
        <div class="bai-panel">
          <div class="bai-panel-header">
            <span class="bai-panel-title">Intent Router</span>
            <span class="bai-panel-badge">Real-time</span>
          </div>
          <div class="bai-panel-body">
            <div class="route-item">
              <div class="route-label">BILLING</div>
              <div class="route-bar-wrap"><div class="route-bar" style="width: 78%"></div></div>
              <div class="route-pct">78%</div>
            </div>
            <div class="route-item">
              <div class="route-label">SUPPORT</div>
              <div class="route-bar-wrap"><div class="route-bar" style="width: 62%"></div></div>
              <div class="route-pct">62%</div>
            </div>
            <div class="route-item">
              <div class="route-label">SALES</div>
              <div class="route-bar-wrap"><div class="route-bar" style="width: 45%"></div></div>
              <div class="route-pct">45%</div>
            </div>
            <div class="route-item">
              <div class="route-label">LEGAL</div>
              <div class="route-bar-wrap"><div class="route-bar" style="width: 28%"></div></div>
              <div class="route-pct">28%</div>
            </div>
            <div class="route-divider"></div>
            <div class="route-summary">
              <span class="route-summary-num">1,847</span>
              <span class="route-summary-label">requests routed today · 99.2% accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── 4: Legal AI ── -->
    <div id="legal-ai" class="bai-service bai-service--reversed">
      <div class="bai-text">
        <div class="bai-tag">LEGAL</div>
        <h3 class="bai-title">Legal AI and Contract Intelligence</h3>
        <p class="bai-desc">
          Agents that process legal documents at the scale human review cannot match. Contracts are analyzed clause by clause: risk flags identified, obligations extracted, missing provisions noted, and precedent surfaced. Every finding references the exact source language.
        </p>
        <ul class="bai-bullets">
          <li>Contract review and risk clause flagging</li>
          <li>Obligation and deadline extraction</li>
          <li>Precedent matching across your document history</li>
          <li>Due diligence at scale with full traceability</li>
        </ul>
        <div class="bai-stats">
          <div class="bai-stat"><span class="bai-stat-num">80%</span><span class="bai-stat-label">Review time reduction</span></div>
          <div class="bai-stat"><span class="bai-stat-num">99.2%</span><span class="bai-stat-label">Accuracy</span></div>
        </div>
      </div>
      <div class="bai-visual">
        <div class="bai-panel">
          <div class="bai-panel-header">
            <span class="bai-panel-title">Contract Analysis</span>
            <span class="bai-panel-badge">Complete</span>
          </div>
          <div class="bai-panel-body">
            <div class="clause-item clause-high">
              <div class="clause-risk">HIGH</div>
              <div class="clause-body">
                <div class="clause-title">§4.3 Liability Cap</div>
                <div class="clause-desc">Non-standard: unlimited liability exposure</div>
              </div>
            </div>
            <div class="clause-item clause-med">
              <div class="clause-risk">MED</div>
              <div class="clause-body">
                <div class="clause-title">§7.1 Termination</div>
                <div class="clause-desc">Missing jurisdiction-specific carve-outs</div>
              </div>
            </div>
            <div class="clause-item clause-ok">
              <div class="clause-risk">OK</div>
              <div class="clause-body">
                <div class="clause-title">§2.4 IP Assignment</div>
                <div class="clause-desc">Standard work-for-hire language confirmed</div>
              </div>
            </div>
            <div class="clause-item clause-med">
              <div class="clause-risk">MED</div>
              <div class="clause-body">
                <div class="clause-title">§9.2 Dispute Resolution</div>
                <div class="clause-desc">Arbitration clause not in standard form</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── 5: Wealth Management AI ── -->
    <div id="wealth-management" class="bai-service">
      <div class="bai-text">
        <div class="bai-tag">FINANCE</div>
        <h3 class="bai-title">Wealth and Portfolio Management</h3>
        <p class="bai-desc">
          Intelligence agents that run continuously across client portfolios. Market conditions, rebalancing triggers, and client-specific risk parameters are monitored in real time. Advisors receive structured recommendations with reasoning attached rather than raw data requiring interpretation.
        </p>
        <ul class="bai-bullets">
          <li>Continuous portfolio monitoring across all positions</li>
          <li>Rebalancing recommendations with full rationale</li>
          <li>Client-specific risk profile calibration</li>
          <li>Full audit trail on every recommendation generated</li>
        </ul>
      </div>
      <div class="bai-visual">
        <div class="bai-panel">
          <div class="bai-panel-header">
            <span class="bai-panel-title">Portfolio Intelligence</span>
            <span class="bai-panel-badge live-badge"><span class="live-dot"></span>Monitoring</span>
          </div>
          <div class="bai-panel-body">
            <div class="port-stat-row">
              <div class="port-stat">
                <div class="port-stat-label">Total AUM</div>
                <div class="port-stat-val">$2.4B</div>
              </div>
              <div class="port-stat">
                <div class="port-stat-label">Portfolios</div>
                <div class="port-stat-val">1,847</div>
              </div>
              <div class="port-stat">
                <div class="port-stat-label">Alerts</div>
                <div class="port-stat-val port-stat-teal">12</div>
              </div>
            </div>
            <div class="port-alert">
              <div class="port-alert-dot"></div>
              <div class="port-alert-body">
                <div class="port-alert-title">Rebalancing needed: 23 portfolios</div>
                <div class="port-alert-desc">Equity allocation drifted &gt;5% from target</div>
              </div>
            </div>
            <div class="port-alert">
              <div class="port-alert-dot"></div>
              <div class="port-alert-body">
                <div class="port-alert-title">Risk threshold triggered: 4 clients</div>
                <div class="port-alert-desc">Volatility exceeds agreed risk tolerance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── 6: Market Sentiment ── -->
    <div id="market-intelligence" class="bai-service bai-service--reversed">
      <div class="bai-text">
        <div class="bai-tag">TRADING</div>
        <h3 class="bai-title">Market Sentiment and Trading Intelligence</h3>
        <p class="bai-desc">
          Agents that synthesize news, regulatory filings, social commentary, and market data into structured intelligence signals. Output is clean, attributed, and confidence-scored. Trading desks and risk teams receive actionable information without the noise.
        </p>
        <ul class="bai-bullets">
          <li>Real-time ingestion of news, filings, and social signals</li>
          <li>Cross-source sentiment aggregation and scoring</li>
          <li>Confidence-weighted signal generation</li>
          <li>Integration with existing trading infrastructure</li>
        </ul>
        <div class="bai-stats">
          <div class="bai-stat"><span class="bai-stat-num">50+</span><span class="bai-stat-label">Data sources</span></div>
          <div class="bai-stat"><span class="bai-stat-num">70%</span><span class="bai-stat-label">Less analyst time</span></div>
        </div>
      </div>
      <div class="bai-visual">
        <div class="bai-panel">
          <div class="bai-panel-header">
            <span class="bai-panel-title">Market Intelligence</span>
            <span class="bai-panel-badge live-badge"><span class="live-dot"></span>Live</span>
          </div>
          <div class="bai-panel-body">
            <div class="sent-item">
              <div class="sent-ticker">NVDA</div>
              <div class="sent-bar-wrap"><div class="sent-bar sent-pos" style="width: 82%"></div></div>
              <div class="sent-score sent-pos-text">+82</div>
            </div>
            <div class="sent-item">
              <div class="sent-ticker">AAPL</div>
              <div class="sent-bar-wrap"><div class="sent-bar sent-pos" style="width: 61%"></div></div>
              <div class="sent-score sent-pos-text">+61</div>
            </div>
            <div class="sent-item">
              <div class="sent-ticker">TSLA</div>
              <div class="sent-bar-wrap"><div class="sent-bar sent-neg" style="width: 38%"></div></div>
              <div class="sent-score sent-neg-text">-38</div>
            </div>
            <div class="sent-item">
              <div class="sent-ticker">MSFT</div>
              <div class="sent-bar-wrap"><div class="sent-bar sent-pos" style="width: 71%"></div></div>
              <div class="sent-score sent-pos-text">+71</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ============================================================
     3. TECHNICAL INFRASTRUCTURE
     ============================================================ -->
<section id="tech" class="section-infra px-6">
  <div class="max-w-7xl mx-auto">
    <div class="section-header">
      <div class="section-label">TECHNICAL INFRASTRUCTURE</div>
      <h2 class="section-h2">The Stack That Makes It Reliable</h2>
      <p class="section-sub">
        Production-grade AI infrastructure built for the latency, accuracy, and uptime requirements of real businesses. We design the architecture so your agents perform consistently.
      </p>
    </div>

    <div class="infra-split">
      <div class="infra-left">
        <p class="infra-desc">
          Every system we build ships with a proper architecture: vector stores, orchestration layers, observability, and retry logic. Built to run in production, not in demo conditions.
        </p>
        <div class="infra-stats">
          <div class="stat-item">
            <div class="stat-number">94.7%</div>
            <div class="stat-label">Avg. retrieval accuracy</div>
          </div>
          <div class="stat-divider" aria-hidden="true"></div>
          <div class="stat-item">
            <div class="stat-number">&lt;200ms</div>
            <div class="stat-label">Agent response time</div>
          </div>
          <div class="stat-divider" aria-hidden="true"></div>
          <div class="stat-item">
            <div class="stat-number">99.9%</div>
            <div class="stat-label">Uptime SLA</div>
          </div>
        </div>
      </div>

      <div class="infra-diagram-card">
        <div class="diagram-header">
          <span class="diagram-title">Agent Architecture</span>
          <span class="diagram-badge">Production</span>
        </div>
        <svg
          class="arch-svg"
          viewBox="0 0 480 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Agent architecture diagram"
        >
          <defs>
            <pattern id="arch-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/>
            </pattern>
            <marker id="arrow-teal" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M 0 1 L 6 4 L 0 7 Z" fill="#00d4aa" opacity="0.7"/>
            </marker>
          </defs>
          <rect width="480" height="300" fill="url(#arch-grid)" rx="8"/>
          <rect x="20" y="120" width="80" height="36" rx="8" fill="#0d0d14" stroke="rgba(0,212,170,0.35)" stroke-width="1"/>
          <text x="60" y="133" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">USER</text>
          <text x="60" y="147" text-anchor="middle" fill="#64748b" font-size="8" font-family="monospace">Request</text>
          <line x1="101" y1="138" x2="151" y2="138" stroke="#00d4aa" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6" marker-end="url(#arrow-teal)"/>
          <rect x="152" y="108" width="120" height="56" rx="8" fill="#111117" stroke="#00d4aa" stroke-width="1.5"/>
          <text x="212" y="130" text-anchor="middle" fill="#00d4aa" font-size="10" font-family="monospace">ORCHESTRATOR</text>
          <text x="212" y="146" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="monospace">Agent Coordination</text>
          <text x="212" y="158" text-anchor="middle" fill="#64748b" font-size="8" font-family="monospace">LangGraph / AutoGen</text>
          <line x1="272" y1="125" x2="330" y2="75" stroke="#00d4aa" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.5" marker-end="url(#arrow-teal)"/>
          <line x1="272" y1="136" x2="330" y2="136" stroke="#00d4aa" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.5" marker-end="url(#arrow-teal)"/>
          <line x1="272" y1="149" x2="330" y2="195" stroke="#00d4aa" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.5" marker-end="url(#arrow-teal)"/>
          <rect x="331" y="52" width="90" height="36" rx="8" fill="#0d0d14" stroke="rgba(0,212,170,0.25)" stroke-width="1"/>
          <text x="376" y="68" text-anchor="middle" fill="#e2e8f0" font-size="10" font-family="monospace">RAG Agent</text>
          <text x="376" y="81" text-anchor="middle" fill="#64748b" font-size="8" font-family="monospace">Retrieval</text>
          <rect x="331" y="118" width="90" height="36" rx="8" fill="#0d0d14" stroke="rgba(0,212,170,0.25)" stroke-width="1"/>
          <text x="376" y="134" text-anchor="middle" fill="#e2e8f0" font-size="10" font-family="monospace">Tool Agent</text>
          <text x="376" y="147" text-anchor="middle" fill="#64748b" font-size="8" font-family="monospace">API / Actions</text>
          <rect x="331" y="178" width="90" height="36" rx="8" fill="#0d0d14" stroke="rgba(0,212,170,0.25)" stroke-width="1"/>
          <text x="376" y="194" text-anchor="middle" fill="#e2e8f0" font-size="10" font-family="monospace">Memory Agent</text>
          <text x="376" y="207" text-anchor="middle" fill="#64748b" font-size="8" font-family="monospace">Context</text>
          <line x1="421" y1="70" x2="440" y2="55" stroke="#00d4aa" stroke-width="1" stroke-dasharray="3 3" opacity="0.4" marker-end="url(#arrow-teal)"/>
          <line x1="421" y1="136" x2="440" y2="136" stroke="#00d4aa" stroke-width="1" stroke-dasharray="3 3" opacity="0.4" marker-end="url(#arrow-teal)"/>
          <line x1="421" y1="196" x2="440" y2="215" stroke="#00d4aa" stroke-width="1" stroke-dasharray="3 3" opacity="0.4" marker-end="url(#arrow-teal)"/>
          <rect x="441" y="38" width="30" height="30" rx="6" fill="#0d0d14" stroke="rgba(0,212,170,0.18)" stroke-width="1"/>
          <text x="456" y="56" text-anchor="middle" fill="#00d4aa" font-size="8" font-family="monospace">VDB</text>
          <rect x="441" y="120" width="30" height="30" rx="6" fill="#0d0d14" stroke="rgba(0,212,170,0.18)" stroke-width="1"/>
          <text x="456" y="138" text-anchor="middle" fill="#00d4aa" font-size="8" font-family="monospace">API</text>
          <rect x="441" y="200" width="30" height="30" rx="6" fill="#0d0d14" stroke="rgba(0,212,170,0.18)" stroke-width="1"/>
          <text x="456" y="218" text-anchor="middle" fill="#00d4aa" font-size="8" font-family="monospace">LLM</text>
          <line x1="20" y1="272" x2="48" y2="272" stroke="#00d4aa" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.6"/>
          <text x="54" y="276" fill="#475569" font-size="8" font-family="monospace">Data flow</text>
          <rect x="120" y="265" width="12" height="12" rx="3" fill="#0d0d14" stroke="rgba(0,212,170,0.25)" stroke-width="1"/>
          <text x="138" y="276" fill="#475569" font-size="8" font-family="monospace">Agent node</text>
          <rect x="210" y="265" width="12" height="12" rx="3" fill="#111117" stroke="#00d4aa" stroke-width="1.5"/>
          <text x="228" y="276" fill="#475569" font-size="8" font-family="monospace">Orchestration layer</text>
        </svg>
      </div>
    </div>

    <div class="tech-grid">
      <div class="tech-card">
        <div class="tech-card-icon">
          <svg width="24" height="24" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-title">Agentic AI Systems</div>
          <div class="tech-card-desc">Autonomous agents with tool use, memory, and multi-step reasoning</div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-icon">
          <svg width="24" height="24" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-title">Multi-Agent RAG</div>
          <div class="tech-card-desc">Retrieval pipelines where specialized agents retrieve, validate, and synthesize</div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-icon">
          <svg width="24" height="24" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
          </svg>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-title">Training Data Pipelines</div>
          <div class="tech-card-desc">End-to-end data collection, labeling, and curation for domain-specific models</div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-icon">
          <svg width="24" height="24" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M11 20v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-title">Vector Database Setup</div>
          <div class="tech-card-desc">Pinecone, Weaviate, Qdrant, or pgvector — configured and optimized for your data</div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-icon">
          <svg width="24" height="24" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/>
          </svg>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-title">Agent Orchestration</div>
          <div class="tech-card-desc">LangGraph, AutoGen, or custom frameworks — we build the coordination layer</div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-icon">
          <svg width="24" height="24" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-title">Production Monitoring</div>
          <div class="tech-card-desc">Drift detection, latency tracking, accuracy dashboards, automated alerts</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     4. AI ENGINEERING
     ============================================================ -->
<section id="ai-engineering" class="section-eng px-6">
  <div class="max-w-7xl mx-auto">
    <div class="section-header">
      <div class="section-label">AI ENGINEERING</div>
      <h2 class="section-h2">Built to Your Exact Specifications</h2>
      <p class="section-sub">
        Every engagement starts with your data, your workflows, and your requirements. The result is a system that is genuinely yours.
      </p>
    </div>

    <div class="eng-grid">
      <div class="eng-card">
        <div class="eng-card-num">01</div>
        <div class="eng-card-icon">
          <svg width="24" height="24" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
        </div>
        <h3 class="eng-card-title">Custom Development</h3>
        <p class="eng-card-desc">AI systems built from scratch around your unique workflows, data, and objectives. No templates, no off-the-shelf wrappers.</p>
      </div>
      <div class="eng-card">
        <div class="eng-card-num">02</div>
        <div class="eng-card-icon">
          <svg width="24" height="24" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
          </svg>
        </div>
        <h3 class="eng-card-title">Model Fine-tuning</h3>
        <p class="eng-card-desc">Domain-adapted models trained on your proprietary data for superior performance on the specific tasks that matter to your business.</p>
      </div>
      <div class="eng-card">
        <div class="eng-card-num">03</div>
        <div class="eng-card-icon">
          <svg width="24" height="24" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </div>
        <h3 class="eng-card-title">Enterprise Integration</h3>
        <p class="eng-card-desc">Agents connected to your existing stack: CRMs, ERPs, databases, APIs, and communication tools. No system runs in isolation.</p>
      </div>
      <div class="eng-card">
        <div class="eng-card-num">04</div>
        <div class="eng-card-icon">
          <svg width="24" height="24" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </div>
        <h3 class="eng-card-title">AI Evaluation and Red-teaming</h3>
        <p class="eng-card-desc">Rigorous benchmarking, adversarial testing, and evaluation frameworks to verify your system behaves reliably before it goes live.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     5. PROCESS
     ============================================================ -->
<section class="section-process px-6">
  <div class="max-w-7xl mx-auto">
    <div class="section-header">
      <div class="section-label">PROCESS</div>
      <h2 class="section-h2">From Discovery to Deployment</h2>
      <p class="section-sub">
        A structured engagement model built for clarity and momentum. Every project follows four phases, with full visibility at each step.
      </p>
    </div>

    <div class="process-timeline">
      <div class="process-line" aria-hidden="true"></div>

      <div class="process-step">
        <div class="process-step-top">
          <div class="process-badge">1</div>
          <div class="process-week">Week 1</div>
        </div>
        <div class="process-step-body">
          <h3 class="process-step-title">Discovery</h3>
          <p class="process-step-desc">We map your data sources, existing workflows, team structure, and success metrics. No assumptions. We learn how your business actually works.</p>
        </div>
      </div>

      <div class="process-step">
        <div class="process-step-top">
          <div class="process-badge">2</div>
          <div class="process-week">Week 2</div>
        </div>
        <div class="process-step-body">
          <h3 class="process-step-title">Architecture</h3>
          <p class="process-step-desc">We design the agent system, data pipelines, and integration plan. You receive a detailed technical spec and sign off before a single line of code is written.</p>
        </div>
      </div>

      <div class="process-step">
        <div class="process-step-top">
          <div class="process-badge">3</div>
          <div class="process-week">Weeks 3-6</div>
        </div>
        <div class="process-step-body">
          <h3 class="process-step-title">Build and Iterate</h3>
          <p class="process-step-desc">Rapid development with weekly demos and feedback loops. Working increments ship continuously so there are no surprises at launch.</p>
        </div>
      </div>

      <div class="process-step">
        <div class="process-step-top">
          <div class="process-badge">4</div>
          <div class="process-week">Ongoing</div>
        </div>
        <div class="process-step-body">
          <h3 class="process-step-title">Deploy and Monitor</h3>
          <p class="process-step-desc">Launch with full observability, drift detection, and SLA-backed support. We stay on to keep the system performing as your data and usage evolves.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     6. CTA
     ============================================================ -->
<section class="section-cta px-6">
  <div class="max-w-7xl mx-auto">
    <div class="cta-inner">
      <div class="cta-glow" aria-hidden="true"></div>
      <div class="section-label">GET STARTED</div>
      <h2 class="cta-h2">Ready to build?</h2>
      <p class="cta-sub">
        Share what you're working on. We'll scope it, architect it, and ship it.
      </p>
      <div class="cta-buttons">
        <ButtonMinimal label="Start a Project" variant="primary" size="lg" href="/contact" arrow={true} />
        <ButtonMinimal label="Schedule a Call" variant="outline" size="lg" href="/contact" />
      </div>
    </div>
  </div>
</section>

<Footer />

<style>
  section {
    position: relative;
  }

  .section-label {
    display: inline-block;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #00d4aa;
    margin-bottom: 1rem;
  }

  .section-h2 {
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.025em;
    line-height: 1.15;
    margin: 0 0 1rem;
  }

  .section-sub {
    font-size: 1.0625rem;
    color: #64748b;
    line-height: 1.75;
    max-width: 640px;
    margin: 0;
  }

  .section-header {
    margin-bottom: 4rem;
  }

  /* ─── HERO ─── */
  .hero-section {
    background-color: #09090f;
    min-height: 60vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .hero-glow {
    position: absolute;
    top: -120px;
    right: -80px;
    width: 560px;
    height: 560px;
    background: radial-gradient(circle at center, rgba(0, 212, 170, 0.11) 0%, transparent 65%);
    pointer-events: none;
    z-index: 0;
  }

  .dot-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
    z-index: 0;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    padding: 6rem 0;
    max-width: 760px;
  }

  .hero-badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.08);
    border: 1px solid rgba(0, 212, 170, 0.2);
    border-radius: 9999px;
    padding: 4px 14px;
    margin-bottom: 1.75rem;
  }

  .hero-h1 {
    font-size: clamp(2rem, 5.5vw, 3.75rem);
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin: 0 0 1.5rem;
  }

  .hero-sub {
    font-size: clamp(1rem, 1.8vw, 1.1875rem);
    color: #64748b;
    line-height: 1.75;
    max-width: 580px;
    margin: 0 0 2.5rem;
  }

  .hero-ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 0.875rem;
    align-items: center;
  }

  /* ─── BUSINESS AI ─── */
  .section-business-ai {
    background-color: #09090f;
    padding: 5rem 0 0;
    scroll-margin-top: 88px;
  }

  @media (min-width: 1024px) {
    .section-business-ai {
      padding: 7rem 0 0;
    }
  }

  .bai-intro {
    margin-bottom: 3rem;
  }

  .bai-service {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 4rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  @media (min-width: 1024px) {
    .bai-service {
      flex-direction: row;
      align-items: center;
      gap: 5rem;
      padding: 6rem 0;
    }

    .bai-service--reversed {
      flex-direction: row-reverse;
    }

    .bai-text {
      flex: 0 0 50%;
    }

    .bai-visual {
      flex: 1;
    }
  }

  .bai-tag {
    display: inline-block;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #00d4aa;
    margin-bottom: 0.875rem;
  }

  .bai-title {
    font-size: clamp(1.5rem, 3vw, 2.125rem);
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin: 0 0 1.25rem;
  }

  .bai-desc {
    font-size: 1.0625rem;
    color: #64748b;
    line-height: 1.75;
    margin: 0 0 1.5rem;
  }

  .bai-bullets {
    list-style: none;
    padding: 0;
    margin: 0 0 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .bai-bullets li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.9375rem;
    color: #94a3b8;
    line-height: 1.5;
  }

  .bai-bullets li::before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00d4aa;
    flex-shrink: 0;
    margin-top: 8px;
  }

  .bai-stats {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  .bai-stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .bai-stat-num {
    font-size: 1.875rem;
    font-weight: 700;
    color: #00d4aa;
    letter-spacing: -0.03em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .bai-stat-label {
    font-size: 0.8125rem;
    color: #475569;
  }

  /* ─── PANEL BASE ─── */
  .bai-panel {
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    overflow: hidden;
  }

  .bai-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .bai-panel-title {
    font-size: 13px;
    font-weight: 500;
    color: #e2e8f0;
    font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace;
  }

  .bai-panel-badge {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #475569;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 9999px;
    padding: 2px 8px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

  .live-badge {
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.08);
    border-color: rgba(0, 212, 170, 0.18);
  }

  .live-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00d4aa;
    flex-shrink: 0;
    animation: pulse-dot 2s ease-in-out infinite;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.35; }
  }

  .bai-panel-body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .bai-panel-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #475569;
    margin-bottom: 0.25rem;
  }

  /* ─── E-COMMERCE PANEL ─── */
  .intent-chip {
    display: inline-flex;
    align-items: center;
    padding: 5px 12px;
    background: rgba(0, 212, 170, 0.08);
    border: 1px solid rgba(0, 212, 170, 0.15);
    border-radius: 9999px;
    font-size: 12px;
    color: #00d4aa;
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  .rec-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 8px;
  }

  .rec-item-name {
    font-size: 13px;
    color: #e2e8f0;
    font-weight: 500;
  }

  .rec-item-meta {
    font-size: 11px;
    color: #475569;
    margin-top: 2px;
  }

  .rec-score {
    font-size: 13px;
    font-weight: 700;
    color: #00d4aa;
    font-variant-numeric: tabular-nums;
    flex-shrink: 0;
  }

  /* ─── CUSTOMER SERVICE PANEL ─── */
  .ticket-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 8px;
  }

  .ticket-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 5px;
  }

  .ticket-dot--teal { background: #00d4aa; }
  .ticket-dot--amber { background: #f59e0b; }

  .ticket-title {
    font-size: 13px;
    color: #e2e8f0;
    font-weight: 500;
  }

  .ticket-meta {
    font-size: 11px;
    color: #475569;
    margin-top: 2px;
  }

  /* ─── INTENT ROUTING PANEL ─── */
  .route-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.375rem 0;
  }

  .route-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: #64748b;
    width: 52px;
    flex-shrink: 0;
    font-family: ui-monospace, monospace;
  }

  .route-bar-wrap {
    flex: 1;
    height: 4px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 9999px;
    overflow: hidden;
  }

  .route-bar {
    height: 100%;
    background: #00d4aa;
    border-radius: 9999px;
    opacity: 0.7;
  }

  .route-pct {
    font-size: 12px;
    color: #64748b;
    width: 36px;
    text-align: right;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }

  .route-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.04);
    margin: 0.375rem 0;
  }

  .route-summary {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }

  .route-summary-num {
    font-size: 1.375rem;
    font-weight: 700;
    color: #00d4aa;
    letter-spacing: -0.02em;
  }

  .route-summary-label {
    font-size: 11px;
    color: #475569;
  }

  /* ─── LEGAL AI PANEL ─── */
  .clause-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 8px;
    border-left: 3px solid transparent;
  }

  .clause-high { border-left-color: #ef4444; background: rgba(239, 68, 68, 0.04); }
  .clause-med  { border-left-color: #f59e0b; background: rgba(245, 158, 11, 0.04); }
  .clause-ok   { border-left-color: #00d4aa; background: rgba(0, 212, 170, 0.04); }

  .clause-risk {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.1em;
    padding: 2px 6px;
    border-radius: 4px;
    flex-shrink: 0;
    margin-top: 1px;
    font-family: ui-monospace, monospace;
  }

  .clause-high .clause-risk { color: #ef4444; background: rgba(239, 68, 68, 0.12); }
  .clause-med  .clause-risk { color: #f59e0b; background: rgba(245, 158, 11, 0.12); }
  .clause-ok   .clause-risk { color: #00d4aa; background: rgba(0, 212, 170, 0.10); }

  .clause-title {
    font-size: 13px;
    color: #e2e8f0;
    font-weight: 500;
  }

  .clause-desc {
    font-size: 11px;
    color: #64748b;
    margin-top: 2px;
    line-height: 1.4;
  }

  /* ─── PORTFOLIO PANEL ─── */
  .port-stat-row {
    display: flex;
    gap: 0.625rem;
  }

  .port-stat {
    flex: 1;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 8px;
    padding: 0.75rem;
  }

  .port-stat-label {
    font-size: 10px;
    color: #475569;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }

  .port-stat-val {
    font-size: 1.125rem;
    font-weight: 700;
    color: #e2e8f0;
    letter-spacing: -0.02em;
  }

  .port-stat-teal { color: #00d4aa; }

  .port-alert {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 8px;
  }

  .port-alert-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #00d4aa;
    flex-shrink: 0;
    margin-top: 5px;
  }

  .port-alert-title {
    font-size: 13px;
    color: #e2e8f0;
    font-weight: 500;
  }

  .port-alert-desc {
    font-size: 11px;
    color: #64748b;
    margin-top: 2px;
  }

  /* ─── MARKET INTELLIGENCE PANEL ─── */
  .sent-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0;
  }

  .sent-ticker {
    font-size: 12px;
    font-weight: 600;
    color: #94a3b8;
    width: 44px;
    flex-shrink: 0;
    font-family: ui-monospace, monospace;
    letter-spacing: 0.04em;
  }

  .sent-bar-wrap {
    flex: 1;
    height: 5px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 9999px;
    overflow: hidden;
  }

  .sent-bar {
    height: 100%;
    border-radius: 9999px;
  }

  .sent-pos { background: #00d4aa; }
  .sent-neg { background: #ef4444; opacity: 0.7; }

  .sent-score {
    font-size: 12px;
    font-weight: 600;
    width: 36px;
    text-align: right;
    font-variant-numeric: tabular-nums;
    flex-shrink: 0;
  }

  .sent-pos-text { color: #00d4aa; }
  .sent-neg-text { color: #ef4444; }

  /* ─── TECHNICAL INFRASTRUCTURE ─── */
  .section-infra {
    background-color: #0d0d14;
    padding: 5rem 0;
    scroll-margin-top: 88px;
  }

  @media (min-width: 1024px) {
    .section-infra { padding: 7rem 0; }
  }

  .infra-split {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    .infra-split {
      flex-direction: row;
      align-items: flex-start;
      gap: 3.5rem;
    }

    .infra-left { flex: 0 0 340px; }
    .infra-diagram-card { flex: 1; }
  }

  .infra-desc {
    font-size: 1rem;
    color: #64748b;
    line-height: 1.75;
    margin: 0 0 2rem;
  }

  .infra-stats {
    display: flex;
    flex-direction: column;
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    overflow: hidden;
  }

  .stat-item { padding: 1.25rem 1.5rem; }

  .stat-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.05);
  }

  .stat-number {
    font-size: clamp(1.625rem, 3vw, 2.25rem);
    font-weight: 700;
    color: #00d4aa;
    letter-spacing: -0.03em;
    line-height: 1;
    margin-bottom: 0.25rem;
    font-variant-numeric: tabular-nums;
  }

  .stat-label {
    font-size: 0.8125rem;
    color: #475569;
    letter-spacing: 0.02em;
  }

  .infra-diagram-card {
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    overflow: hidden;
  }

  .diagram-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .diagram-title {
    font-size: 13px;
    font-weight: 500;
    color: #e2e8f0;
    font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace;
  }

  .diagram-badge {
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

  .arch-svg {
    width: 100%;
    height: auto;
    display: block;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 640px) {
    .tech-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (min-width: 1024px) {
    .tech-grid { grid-template-columns: repeat(3, 1fr); }
  }

  .tech-card {
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    transition: border-color 0.2s ease;
  }

  .tech-card:hover { border-color: rgba(0, 212, 170, 0.18); }

  .tech-card-icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 212, 170, 0.07);
    border: 1px solid rgba(0, 212, 170, 0.12);
    border-radius: 8px;
    flex-shrink: 0;
  }

  .tech-card-body { flex: 1; min-width: 0; }

  .tech-card-title {
    font-size: 0.9375rem;
    font-weight: 600;
    color: #e2e8f0;
    margin-bottom: 0.25rem;
    letter-spacing: -0.01em;
  }

  .tech-card-desc {
    font-size: 0.8125rem;
    color: #64748b;
    line-height: 1.6;
  }

  /* ─── AI ENGINEERING ─── */
  .section-eng {
    background-color: #09090f;
    padding: 5rem 0;
    scroll-margin-top: 88px;
  }

  @media (min-width: 1024px) {
    .section-eng { padding: 7rem 0; }
  }

  .eng-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 640px) {
    .eng-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (min-width: 1024px) {
    .eng-grid { grid-template-columns: repeat(4, 1fr); }
  }

  .eng-card {
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    transition: border-color 0.25s ease, transform 0.25s ease;
  }

  .eng-card:hover {
    border-color: rgba(0, 212, 170, 0.2);
    transform: translateY(-2px);
  }

  .eng-card-num {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #00d4aa;
    opacity: 0.5;
    font-variant-numeric: tabular-nums;
    font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace;
  }

  .eng-card-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 212, 170, 0.08);
    border: 1px solid rgba(0, 212, 170, 0.15);
    border-radius: 10px;
  }

  .eng-card-title {
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.01em;
    line-height: 1.3;
    margin: 0;
  }

  .eng-card-desc {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.7;
    margin: 0;
    flex: 1;
  }

  /* ─── PROCESS ─── */
  .section-process {
    background-color: #0d0d14;
    padding: 5rem 0;
  }

  @media (min-width: 1024px) {
    .section-process { padding: 7rem 0; }
  }

  .process-timeline {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    position: relative;
  }

  @media (min-width: 768px) {
    .process-timeline { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
  }

  @media (min-width: 1024px) {
    .process-timeline { grid-template-columns: repeat(4, 1fr); gap: 0; }
  }

  .process-line { display: none; }

  @media (min-width: 1024px) {
    .process-line {
      display: block;
      position: absolute;
      top: 28px;
      left: calc(12.5% + 20px);
      right: calc(12.5% + 20px);
      height: 1px;
      background: linear-gradient(to right, #00d4aa 0%, rgba(0, 212, 170, 0.2) 100%);
      z-index: 0;
    }
  }

  .process-step {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    position: relative;
    z-index: 1;
  }

  @media (min-width: 1024px) {
    .process-step { padding: 0 1rem; }
  }

  .process-step-top {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  @media (min-width: 1024px) {
    .process-step-top {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }

  .process-badge {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00d4aa;
    color: #09090f;
    font-size: 16px;
    font-weight: 800;
    border-radius: 50%;
    flex-shrink: 0;
    box-shadow: 0 0 0 4px rgba(0, 212, 170, 0.12), 0 0 0 8px rgba(0, 212, 170, 0.05);
  }

  .process-week {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #475569;
  }

  .process-step-body {
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 1.5rem;
    flex: 1;
    transition: border-color 0.2s ease;
  }

  .process-step:hover .process-step-body {
    border-color: rgba(0, 212, 170, 0.15);
  }

  .process-step-title {
    font-size: 1.0625rem;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.01em;
    margin: 0 0 0.625rem;
  }

  .process-step-desc {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.7;
    margin: 0;
  }

  /* ─── CTA ─── */
  .section-cta {
    background-color: #09090f;
    padding: 5rem 0 7rem;
  }

  .cta-inner {
    position: relative;
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 20px;
    padding: clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem);
    text-align: center;
    overflow: hidden;
  }

  .cta-glow {
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(ellipse at center, rgba(0, 212, 170, 0.1) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .cta-inner .section-label {
    position: relative;
    z-index: 1;
  }

  .cta-h2 {
    position: relative;
    z-index: 1;
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.025em;
    line-height: 1.15;
    margin: 0 0 1rem;
  }

  .cta-sub {
    position: relative;
    z-index: 1;
    font-size: 1.0625rem;
    color: #64748b;
    line-height: 1.7;
    max-width: 480px;
    margin: 0 auto 2.5rem;
  }

  .cta-buttons {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 0.875rem;
    justify-content: center;
    align-items: center;
  }
</style>
