<script lang="ts">
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';

  interface Cta {
    label: string;
    href: string;
  }

  interface Props {
    headline?: string;
    subheadline?: string;
    primaryCta?: Cta;
    secondaryCta?: Cta;
  }

  let {
    headline = "Your Agentic AI business support",
    subheadline = 'Multi-agent systems trained with your data into subject matter experts.',
    primaryCta = { label: 'Get started', href: '/contact' },
    secondaryCta = { label: 'See how it works', href: '/about' }
  }: Props = $props();
</script>

<section class="hero">
  <!-- Background atmosphere -->
  <div class="orb orb--teal"></div>
  <div class="orb orb--blue"></div>
  <div class="dot-grid"></div>

  <div class="hero__inner">

    <!-- LEFT: Text content -->
    <div class="hero__text">
      <div class="hero__badge">
        <span class="badge-dot"></span>
        E-commerce, Law and Finance AI
      </div>

      <h1 class="hero__h1">{headline}</h1>
      <p class="hero__sub">{subheadline}</p>

      <div class="hero__ctas">
        <ButtonMinimal label={primaryCta.label} variant="primary" size="md" href={primaryCta.href} arrow={true} />
        <ButtonMinimal label={secondaryCta.label} variant="outline" size="md" href={secondaryCta.href} arrow={true} />
      </div>

      <div class="hero__trust">
        <div class="trust-item">
          <span class="trust-num">99.2%</span>
          <span class="trust-label">Recommendation accuracy</span>
        </div>
        <div class="trust-div"></div>
        <div class="trust-item">
          <span class="trust-num">&lt;200ms</span>
          <span class="trust-label">Response time</span>
        </div>
        <div class="trust-div"></div>
        <div class="trust-item">
          <span class="trust-num">+23%</span>
          <span class="trust-label">Conversion lift</span>
        </div>
      </div>
    </div>

    <!-- RIGHT: Large app mock -->
    <div class="hero__mockup-col">
      <div class="hero__mockup-perspective">
        <div class="hero__mockup">

          <!-- ═══ LEFT SIDEBAR ═══ -->
          <div class="app-sidebar">
            <!-- Brand -->
            <div class="app-brand">
              <div class="brand-icon">
                <svg width="14" height="14" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <span class="brand-name">AI Store</span>
              <svg class="brand-chevron" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>

            <!-- Search -->
            <div class="sidebar-search">
              <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <span class="sidebar-search-text">Search...</span>
              <kbd class="sidebar-kbd">⌘K</kbd>
            </div>

            <!-- Nav -->
            <nav class="sidebar-nav">
              <div class="nav-section">
                <div class="nav-section-label">Main</div>
                <span class="nav-item">
                  <svg class="nav-icon" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                  <span>Dashboard</span>
                </span>
                <span class="nav-item nav-item--active">
                  <svg class="nav-icon" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                  </svg>
                  <span>AI Advisor</span>
                  <span class="nav-badge">3</span>
                </span>
                <span class="nav-item">
                  <svg class="nav-icon" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                  <span>Analytics</span>
                </span>
              </div>
              <div class="nav-section">
                <div class="nav-section-label">Catalog</div>
                <span class="nav-item">
                  <svg class="nav-icon" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                  </svg>
                  <span>Products</span>
                  <span class="nav-count">1,247</span>
                </span>
                <span class="nav-item">
                  <svg class="nav-icon" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>Customers</span>
                </span>
                <span class="nav-item">
                  <svg class="nav-icon" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>Settings</span>
                </span>
              </div>
            </nav>

            <!-- Sidebar footer -->
            <div class="sidebar-footer">
              <div class="sidebar-live">
                <span class="sidebar-live-dot"></span>
                <span class="sidebar-live-text">System live</span>
              </div>
              <div class="sidebar-user">
                <div class="sidebar-avatar">A</div>
                <div class="sidebar-user-info">
                  <div class="sidebar-user-name">Admin</div>
                  <div class="sidebar-user-role">Store #1</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ═══ CENTER: Chat + Products ═══ -->
          <div class="app-center">
            <!-- Top bar -->
            <div class="app-topbar">
              <div class="topbar-left">
                <div class="topbar-breadcrumb">
                  <span class="breadcrumb-dim">Store</span>
                  <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                  <span class="breadcrumb-active">AI Advisor</span>
                </div>
                <div class="topbar-title">Product Recommendations</div>
              </div>
              <div class="topbar-right">
                <div class="topbar-indexed">
                  <span class="indexed-dot"></span>
                  <span>1,247 products indexed</span>
                </div>
                <button class="topbar-btn" aria-label="Filter">
                  <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
                <button class="topbar-btn" aria-label="Search">
                  <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </button>
              </div>
            </div>

            <!-- Chat + results area -->
            <div class="app-content">
              <!-- User message -->
              <div class="chat-row chat-row--user">
                <div class="chat-bubble chat-bubble--user">
                  Show me wireless headphones under $100
                </div>
              </div>

              <!-- AI response -->
              <div class="chat-row chat-row--ai">
                <div class="chat-ai-avatar">
                  <svg width="12" height="12" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>
                </div>
                <div class="chat-ai-body">
                  <p class="chat-ai-text">Found 4 products matching your query. Sorted by relevance and in-stock status:</p>

                  <!-- Product cards 2x2 grid -->
                  <div class="product-grid">

                    <!-- Product 1 -->
                    <div class="prod-card">
                      <div class="prod-img-strip prod-img--teal">
                        <svg width="18" height="18" fill="none" stroke="rgba(0,212,170,0.5)" stroke-width="1" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                        </svg>
                      </div>
                      <div class="prod-details">
                        <div class="prod-brand">SONY</div>
                        <div class="prod-name">WH-CH520 Wireless</div>
                        <div class="prod-tags">
                          <span class="ptag">WIRELESS</span>
                          <span class="ptag">30HR</span>
                          <span class="ptag">FOLDABLE</span>
                        </div>
                        <div class="prod-footer">
                          <span class="prod-price">$79.99</span>
                          <span class="prod-match">97%</span>
                          <button class="prod-link-btn" aria-label="View product">
                            <svg width="9" height="9" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Product 2 -->
                    <div class="prod-card">
                      <div class="prod-img-strip prod-img--slate">
                        <svg width="18" height="18" fill="none" stroke="rgba(100,116,139,0.5)" stroke-width="1" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072M12 9.75v4.5m-5.536-5.786a5 5 0 000 7.072M6 20.25h12M12 3.75v.75"/>
                        </svg>
                      </div>
                      <div class="prod-details">
                        <div class="prod-brand">JBL</div>
                        <div class="prod-name">Tune 710BT</div>
                        <div class="prod-tags">
                          <span class="ptag">WIRELESS</span>
                          <span class="ptag">BT 5.0</span>
                          <span class="ptag">40HR</span>
                        </div>
                        <div class="prod-footer">
                          <span class="prod-price">$99.95</span>
                          <span class="prod-match prod-match--dim">91%</span>
                          <button class="prod-link-btn" aria-label="View product">
                            <svg width="9" height="9" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Product 3 -->
                    <div class="prod-card">
                      <div class="prod-img-strip prod-img--amber">
                        <svg width="18" height="18" fill="none" stroke="rgba(251,146,60,0.5)" stroke-width="1" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </div>
                      <div class="prod-details">
                        <div class="prod-brand">JABRA</div>
                        <div class="prod-name">Elite 4 Active</div>
                        <div class="prod-tags">
                          <span class="ptag">SPORT</span>
                          <span class="ptag">IPX5</span>
                          <span class="ptag">ANC</span>
                        </div>
                        <div class="prod-footer">
                          <span class="prod-price">$89.99</span>
                          <span class="prod-match prod-match--dim">85%</span>
                          <button class="prod-link-btn" aria-label="View product">
                            <svg width="9" height="9" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Product 4 -->
                    <div class="prod-card">
                      <div class="prod-img-strip prod-img--indigo">
                        <svg width="18" height="18" fill="none" stroke="rgba(129,140,248,0.5)" stroke-width="1" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"/>
                        </svg>
                      </div>
                      <div class="prod-details">
                        <div class="prod-brand">ANKER</div>
                        <div class="prod-name">Soundcore Q20i</div>
                        <div class="prod-tags">
                          <span class="ptag">WIRELESS</span>
                          <span class="ptag">BUDGET</span>
                          <span class="ptag">60HR</span>
                        </div>
                        <div class="prod-footer">
                          <span class="prod-price">$55.99</span>
                          <span class="prod-match prod-match--dimmer">78%</span>
                          <button class="prod-link-btn" aria-label="View product">
                            <svg width="9" height="9" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div class="chat-ai-footer">
                    <span class="footer-dot"></span>
                    <span class="footer-text">Analyzed 1,247 products in 142ms</span>
                    <span class="footer-accuracy">94.7% accuracy</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Chat input -->
            <div class="chat-input-row">
              <div class="chat-input-inner">
                <svg width="12" height="12" fill="none" stroke="#475569" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                </svg>
                <span class="chat-input-placeholder">Ask about any product in your catalog...</span>
              </div>
              <button class="chat-send-btn" aria-label="Send">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- ═══ RIGHT PANEL: Analytics ═══ -->
          <div class="app-analytics">
            <div class="analytics-header">
              <span class="analytics-title">AI Performance</span>
              <span class="analytics-live">
                <span class="analytics-live-dot"></span>
                Live
              </span>
            </div>

            <!-- Metrics -->
            <div class="analytics-metrics">
              <div class="metric-block">
                <div class="metric-row">
                  <span class="metric-label">Accuracy</span>
                  <span class="metric-val metric-val--teal">94.7%</span>
                </div>
                <div class="metric-bar-bg">
                  <div class="metric-bar metric-bar--teal" style="width: 94.7%"></div>
                </div>
              </div>

              <div class="metric-block">
                <div class="metric-row">
                  <span class="metric-label">Response</span>
                  <span class="metric-val">142ms</span>
                </div>
                <div class="metric-bar-bg">
                  <div class="metric-bar" style="width: 65%"></div>
                </div>
              </div>

              <div class="metric-block">
                <div class="metric-row">
                  <span class="metric-label">Sessions</span>
                  <span class="metric-val">1,247</span>
                </div>
                <div class="metric-bar-bg">
                  <div class="metric-bar" style="width: 80%"></div>
                </div>
              </div>

              <div class="metric-block">
                <div class="metric-row">
                  <span class="metric-label">Conv. lift</span>
                  <span class="metric-val metric-val--teal">+23%</span>
                </div>
                <div class="metric-bar-bg">
                  <div class="metric-bar metric-bar--teal" style="width: 58%"></div>
                </div>
              </div>
            </div>

            <!-- Sparkline -->
            <div class="sparkline-section">
              <div class="sparkline-label">Sessions today</div>
              <div class="sparkline">
                <div class="spark" style="height: 35%"></div>
                <div class="spark" style="height: 52%"></div>
                <div class="spark" style="height: 44%"></div>
                <div class="spark" style="height: 68%"></div>
                <div class="spark" style="height: 58%"></div>
                <div class="spark" style="height: 76%"></div>
                <div class="spark spark--peak" style="height: 100%"></div>
              </div>
            </div>

            <!-- Category breakdown -->
            <div class="category-section">
              <div class="category-label">Top categories</div>
              <div class="category-list">
                <div class="category-row">
                  <div class="category-dot category-dot--1"></div>
                  <span class="category-name">Headphones</span>
                  <span class="category-pct">38%</span>
                </div>
                <div class="category-row">
                  <div class="category-dot category-dot--2"></div>
                  <span class="category-name">Speakers</span>
                  <span class="category-pct">27%</span>
                </div>
                <div class="category-row">
                  <div class="category-dot category-dot--3"></div>
                  <span class="category-name">Earbuds</span>
                  <span class="category-pct">21%</span>
                </div>
                <div class="category-row">
                  <div class="category-dot category-dot--4"></div>
                  <span class="category-name">Accessories</span>
                  <span class="category-pct">14%</span>
                </div>
              </div>
            </div>

            <!-- Recent queries -->
            <div class="recent-section">
              <div class="recent-label">Recent queries</div>
              <div class="recent-list">
                <div class="recent-row">
                  <span class="recent-query">wireless under $100</span>
                  <span class="recent-count">247</span>
                </div>
                <div class="recent-row">
                  <span class="recent-query">noise cancelling</span>
                  <span class="recent-count">183</span>
                </div>
                <div class="recent-row">
                  <span class="recent-query">gaming headset</span>
                  <span class="recent-count">91</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>

<style>
  /* ─── Section ────────────────────────────────────────────── */
  .hero {
    position: relative;
    min-height: 100vh;
    background-color: #09090f;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 5rem 0 4rem;
  }

  /* ─── Atmosphere ─────────────────────────────────────────── */
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
  }

  .orb--teal {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(0, 212, 170, 0.08) 0%, transparent 70%);
    top: -100px;
    right: 10%;
  }

  .orb--blue {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%);
    bottom: -100px;
    left: 5%;
  }

  .dot-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
  }

  /* ─── Layout ─────────────────────────────────────────────── */
  .hero__inner {
    position: relative;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: flex-start;
  }

  @media (min-width: 1100px) {
    .hero__inner {
      flex-direction: row;
      align-items: center;
      gap: 0;
    }
  }

  /* ─── Left: Text ─────────────────────────────────────────── */
  .hero__text {
    flex: 0 0 auto;
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    z-index: 2;
  }

  @media (min-width: 1100px) {
    .hero__text {
      width: 42%;
      padding-right: 3rem;
    }
  }

  .hero__badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #00d4aa;
  }

  .badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00d4aa;
    animation: pulse 1.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  .hero__h1 {
    font-size: clamp(2.25rem, 4vw, 3.625rem);
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.035em;
    line-height: 1.08;
    margin: 0;
  }

  .hero__sub {
    font-size: 17px;
    color: #64748b;
    line-height: 1.7;
    margin: 0;
    max-width: 420px;
  }

  .hero__ctas {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  /* Trust metrics */
  .hero__trust {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding-top: 0.5rem;
    flex-wrap: wrap;
  }

  .trust-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .trust-num {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.02em;
  }

  .trust-label {
    font-size: 11px;
    color: #475569;
  }

  .trust-div {
    width: 1px;
    height: 2rem;
    background: rgba(255, 255, 255, 0.07);
    flex-shrink: 0;
  }

  /* ─── Right: App mock column ─────────────────────────────── */
  .hero__mockup-col {
    flex: 1;
    overflow: visible;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
  }

  .hero__mockup-perspective {
    transform: perspective(2000px) rotateY(-10deg) rotateX(4deg);
    transform-origin: right center;
    filter: drop-shadow(0 40px 100px rgba(0, 0, 0, 0.7));
    will-change: transform;
  }

  @media (max-width: 1099px) {
    .hero__mockup-col {
      width: 100%;
      justify-content: center;
    }
    .hero__mockup-perspective {
      transform: none;
      filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.5));
    }
  }

  /* ─── App mock outer ─────────────────────────────────────── */
  .hero__mockup {
    display: flex;
    width: 820px;
    height: 540px;
    background-color: #0d0d14;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    overflow: hidden;
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.04),
      0 20px 60px rgba(0, 0, 0, 0.5);
    flex-shrink: 0;
  }

  @media (max-width: 1099px) {
    .hero__mockup {
      width: min(820px, 100%);
      height: auto;
      min-height: 480px;
      flex-direction: column;
    }

    .app-sidebar {
      display: none !important;
    }

    .app-analytics {
      display: none !important;
    }
  }

  /* ─── Left Sidebar ───────────────────────────────────────── */
  .app-sidebar {
    width: 152px;
    flex-shrink: 0;
    background-color: #111117;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .app-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 12px 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    flex-shrink: 0;
  }

  .brand-icon {
    width: 22px;
    height: 22px;
    background: rgba(0, 212, 170, 0.12);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .brand-name {
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    flex: 1;
  }

  .brand-chevron {
    color: #334155;
    flex-shrink: 0;
  }

  .sidebar-search {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 8px 10px;
    padding: 5px 8px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    flex-shrink: 0;
  }

  .sidebar-search svg {
    color: #334155;
    flex-shrink: 0;
  }

  .sidebar-search-text {
    font-size: 11px;
    color: #334155;
    flex: 1;
  }

  .sidebar-kbd {
    font-size: 9px;
    color: #334155;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 3px;
    padding: 1px 4px;
    flex-shrink: 0;
  }

  .sidebar-nav {
    flex: 1;
    padding: 4px 0 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .nav-section {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .nav-section-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #334155;
    padding: 6px 12px 3px;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 5px 12px;
    font-size: 11px;
    color: #475569;
    cursor: pointer;
    transition: color 0.15s ease, background-color 0.15s ease;
    border-radius: 0;
    text-decoration: none;
    position: relative;
  }

  .nav-item:hover {
    color: #94a3b8;
    background: rgba(255, 255, 255, 0.03);
  }

  .nav-item--active {
    color: #ffffff;
    background: rgba(0, 212, 170, 0.08);
  }

  .nav-item--active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 4px;
    bottom: 4px;
    width: 2px;
    background: #00d4aa;
    border-radius: 0 2px 2px 0;
  }

  .nav-icon {
    flex-shrink: 0;
    color: currentColor;
  }

  .nav-badge {
    margin-left: auto;
    font-size: 9px;
    font-weight: 600;
    color: #09090f;
    background: #00d4aa;
    border-radius: 9999px;
    padding: 1px 5px;
    flex-shrink: 0;
  }

  .nav-count {
    margin-left: auto;
    font-size: 9px;
    color: #334155;
    flex-shrink: 0;
  }

  .sidebar-footer {
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-shrink: 0;
  }

  .sidebar-live {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .sidebar-live-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00d4aa;
    animation: pulse 1.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  .sidebar-live-text {
    font-size: 10px;
    color: #475569;
  }

  .sidebar-user {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .sidebar-avatar {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: rgba(0, 212, 170, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
    color: #00d4aa;
    flex-shrink: 0;
  }

  .sidebar-user-info {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .sidebar-user-name {
    font-size: 11px;
    font-weight: 500;
    color: #94a3b8;
  }

  .sidebar-user-role {
    font-size: 9px;
    color: #334155;
  }

  /* ─── Center: Chat + Products ────────────────────────────── */
  .app-center {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* Top bar */
  .app-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.01);
  }

  .topbar-left {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .topbar-breadcrumb {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    color: #334155;
  }

  .breadcrumb-active {
    color: #64748b;
  }

  .topbar-title {
    font-size: 13px;
    font-weight: 500;
    color: #e2e8f0;
  }

  .topbar-right {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .topbar-indexed {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    color: #475569;
  }

  .indexed-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00d4aa;
    animation: pulse 1.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  .topbar-btn {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    border-radius: 5px;
    color: #334155;
    cursor: pointer;
  }

  .topbar-btn:hover {
    background: rgba(255, 255, 255, 0.04);
    color: #64748b;
  }

  /* Content area */
  .app-content {
    flex: 1;
    padding: 12px 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
  }

  .chat-row {
    display: flex;
  }

  .chat-row--user {
    justify-content: flex-end;
  }

  .chat-row--ai {
    gap: 8px;
    align-items: flex-start;
  }

  .chat-bubble--user {
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.65);
    font-size: 12px;
    border-radius: 10px 10px 2px 10px;
    padding: 7px 12px;
    max-width: 80%;
  }

  .chat-ai-avatar {
    width: 22px;
    height: 22px;
    border-radius: 6px;
    background: rgba(0, 212, 170, 0.1);
    border: 1px solid rgba(0, 212, 170, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .chat-ai-body {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  .chat-ai-text {
    font-size: 12px;
    color: #94a3b8;
    margin: 0;
    line-height: 1.5;
  }

  /* Product grid */
  .product-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }

  .prod-card {
    display: flex;
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    overflow: hidden;
    transition: border-color 0.15s ease;
  }

  .prod-card:hover {
    border-color: rgba(0, 212, 170, 0.15);
  }

  .prod-img-strip {
    width: 42px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .prod-img--teal {
    background: linear-gradient(160deg, rgba(0, 212, 170, 0.15) 0%, rgba(0, 212, 170, 0.05) 100%);
  }

  .prod-img--slate {
    background: linear-gradient(160deg, rgba(100, 116, 139, 0.15) 0%, rgba(100, 116, 139, 0.05) 100%);
  }

  .prod-img--amber {
    background: linear-gradient(160deg, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.05) 100%);
  }

  .prod-img--indigo {
    background: linear-gradient(160deg, rgba(129, 140, 248, 0.15) 0%, rgba(129, 140, 248, 0.05) 100%);
  }

  .prod-details {
    flex: 1;
    padding: 7px 8px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
  }

  .prod-brand {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #475569;
  }

  .prod-name {
    font-size: 11px;
    font-weight: 500;
    color: #e2e8f0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .prod-tags {
    display: flex;
    gap: 3px;
    flex-wrap: wrap;
  }

  .ptag {
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: #475569;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 3px;
    padding: 1px 4px;
  }

  .prod-footer {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 1px;
  }

  .prod-price {
    font-size: 12px;
    font-weight: 600;
    color: #00d4aa;
  }

  .prod-match {
    font-size: 9px;
    font-weight: 600;
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.1);
    border-radius: 9999px;
    padding: 1px 5px;
    margin-left: auto;
  }

  .prod-match--dim {
    color: #64748b;
    background: rgba(255, 255, 255, 0.05);
  }

  .prod-match--dimmer {
    color: #475569;
    background: rgba(255, 255, 255, 0.03);
  }

  .prod-link-btn {
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 4px;
    color: #334155;
    cursor: pointer;
    flex-shrink: 0;
  }

  /* AI footer */
  .chat-ai-footer {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .footer-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00d4aa;
    animation: pulse 1.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  .footer-text {
    font-size: 10px;
    color: #334155;
  }

  .footer-accuracy {
    font-size: 10px;
    color: #00d4aa;
    margin-left: 4px;
  }

  /* Chat input */
  .chat-input-row {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    flex-shrink: 0;
  }

  .chat-input-inner {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 7px;
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 7px;
    padding: 6px 10px;
  }

  .chat-input-placeholder {
    font-size: 11px;
    color: #2d3748;
  }

  .chat-send-btn {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 212, 170, 0.12);
    border: 1px solid rgba(0, 212, 170, 0.2);
    border-radius: 6px;
    color: #00d4aa;
    cursor: pointer;
    flex-shrink: 0;
  }

  /* ─── Right: Analytics ───────────────────────────────────── */
  .app-analytics {
    width: 160px;
    flex-shrink: 0;
    background-color: #111117;
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    gap: 0;
    overflow: hidden;
  }

  .analytics-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    flex-shrink: 0;
  }

  .analytics-title {
    font-size: 11px;
    font-weight: 500;
    color: #ffffff;
  }

  .analytics-live {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 9px;
    font-weight: 500;
    color: #00d4aa;
  }

  .analytics-live-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00d4aa;
    animation: pulse 1.5s ease-in-out infinite;
  }

  /* Metrics */
  .analytics-metrics {
    padding: 8px 12px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    flex-shrink: 0;
  }

  .metric-block {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .metric-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .metric-label {
    font-size: 10px;
    color: #475569;
  }

  .metric-val {
    font-size: 11px;
    font-weight: 600;
    color: #e2e8f0;
  }

  .metric-val--teal {
    color: #00d4aa;
  }

  .metric-bar-bg {
    height: 3px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 2px;
    overflow: hidden;
  }

  .metric-bar {
    height: 100%;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 2px;
  }

  .metric-bar--teal {
    background: #00d4aa;
  }

  /* Sparkline */
  .sparkline-section {
    padding: 8px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    flex-shrink: 0;
  }

  .sparkline-label {
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #334155;
    margin-bottom: 6px;
  }

  .sparkline {
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 32px;
  }

  .spark {
    flex: 1;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 2px 2px 0 0;
    min-height: 4px;
  }

  .spark--peak {
    background: #00d4aa;
  }

  /* Categories */
  .category-section {
    padding: 8px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    flex-shrink: 0;
  }

  .category-label {
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #334155;
    margin-bottom: 6px;
  }

  .category-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .category-row {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .category-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .category-dot--1 { background: #00d4aa; }
  .category-dot--2 { background: rgba(0, 212, 170, 0.5); }
  .category-dot--3 { background: rgba(0, 212, 170, 0.3); }
  .category-dot--4 { background: rgba(0, 212, 170, 0.15); }

  .category-name {
    font-size: 10px;
    color: #64748b;
    flex: 1;
  }

  .category-pct {
    font-size: 10px;
    font-weight: 500;
    color: #475569;
  }

  /* Recent queries */
  .recent-section {
    padding: 8px 12px;
    flex: 1;
  }

  .recent-label {
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #334155;
    margin-bottom: 6px;
  }

  .recent-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .recent-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
  }

  .recent-query {
    font-size: 10px;
    color: #475569;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .recent-count {
    font-size: 10px;
    font-weight: 500;
    color: #334155;
    flex-shrink: 0;
  }

  /* ─── Animation ──────────────────────────────────────────── */
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
</style>
