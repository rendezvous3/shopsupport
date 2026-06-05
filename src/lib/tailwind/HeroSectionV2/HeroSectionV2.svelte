<script lang="ts">
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';

  interface Cta {
    label: string;
    href: string;
  }

  interface HeroSectionV2Props {
    headline?: string;
    subheadline?: string;
    primaryCta?: Cta;
    secondaryCta?: Cta;
  }

  let {
    headline = 'Agentic AI business support',
    subheadline = 'Custom multi-agent RAG systems trained on your data',
    primaryCta = { label: 'Get started', href: '/contact' },
    secondaryCta = { label: 'See how it works', href: '/about' }
  }: HeroSectionV2Props = $props();
</script>

<section class="hero">
  <!-- Background orbs -->
  <div class="orb orb--teal"></div>
  <div class="orb orb--violet"></div>

  <!-- Dot grid overlay -->
  <div class="dot-grid"></div>

  <div class="hero__inner">
    <!-- Left column -->
    <div class="hero__left">
      <span class="hero__label">AI · E-COMMERCE</span>

      <h1 class="hero__headline shimmer">{headline}</h1>

      <p class="hero__sub">{subheadline}</p>

      <div class="hero__ctas">
        <ButtonMinimal label={primaryCta.label} variant="primary" size="md" href={primaryCta.href} arrow={true} />
        <ButtonMinimal label={secondaryCta.label} variant="outline" size="md" href={secondaryCta.href} arrow={true} />
      </div>
    </div>

    <!-- Right column: 3D dashboard -->
    <div class="hero__right">
      <div class="perspective-wrap">
        <div class="dashboard-group">

          <!-- Panel 1: Main AI Recommendations -->
          <div class="panel panel--main">
            <!-- Tab bar (NO mac dots) -->
            <div class="panel__tabbar">
              <span class="panel__title">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="display:inline;vertical-align:middle;margin-right:6px;"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                AI Recommendations
              </span>
              <div class="panel__icons">
                <button class="icon-btn" aria-label="Search">
                  <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35"/></svg>
                </button>
                <button class="icon-btn" aria-label="Settings">
                  <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </button>
                <button class="icon-btn" aria-label="Close">
                  <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
            </div>

            <!-- Chat thread + input -->
            <div class="panel__chat-row">
              <div class="chat-thread">
                <div class="chat-bubble chat-bubble--user">Best wireless headphones under $100?</div>
                <div class="chat-bubble chat-bubble--ai">Found 4 matches. Top pick: Wireless Headphones (94% match)</div>
              </div>
              <div class="chat-input-bar">
                <span class="chat-input-placeholder">Ask AI assistant…</span>
                <button class="chat-send-btn" aria-label="Send">
                  <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                </button>
              </div>
            </div>

            <!-- Product grid 2×2 -->
            <div class="product-grid">
              <div class="product-card">
                <div class="product-img">
                  <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="color:rgba(255,255,255,0.2)"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div class="product-info">
                  <div class="product-name">Wireless Headphones</div>
                  <div class="product-price">$89.99</div>
                  <div class="product-badge"><span class="badge-dot"></span>AI Match: 94%</div>
                </div>
              </div>
              <div class="product-card">
                <div class="product-img">
                  <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="color:rgba(255,255,255,0.2)"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                </div>
                <div class="product-info">
                  <div class="product-name">Smart Watch Pro</div>
                  <div class="product-price">$249.00</div>
                  <div class="product-badge"><span class="badge-dot"></span>AI Match: 91%</div>
                </div>
              </div>
              <div class="product-card">
                <div class="product-img">
                  <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="color:rgba(255,255,255,0.2)"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div class="product-info">
                  <div class="product-name">4K Action Camera</div>
                  <div class="product-price">$199.99</div>
                  <div class="product-badge"><span class="badge-dot"></span>AI Match: 88%</div>
                </div>
              </div>
              <div class="product-card">
                <div class="product-img">
                  <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="color:rgba(255,255,255,0.2)"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
                </div>
                <div class="product-info">
                  <div class="product-name">BT Speaker Mini</div>
                  <div class="product-price">$59.00</div>
                  <div class="product-badge"><span class="badge-dot"></span>AI Match: 86%</div>
                </div>
              </div>
            </div>

            <!-- Status bar -->
            <div class="panel__status">
              <span class="status-dot-anim"></span>
              Analyzing 1,247 products · <span style="color:#00d4aa;">4 matched your profile</span>
            </div>
          </div>

          <!-- Panel 2: Revenue Impact -->
          <div class="panel panel--revenue">
            <div class="revenue__header">Revenue Impact</div>
            <div class="bar-chart">
              <div class="bar" style="height:40%"></div>
              <div class="bar" style="height:65%"></div>
              <div class="bar" style="height:50%"></div>
              <div class="bar" style="height:80%"></div>
              <div class="bar" style="height:60%"></div>
              <div class="bar" style="height:90%"></div>
              <div class="bar" style="height:75%"></div>
            </div>
            <div class="revenue__metric">+23%</div>
            <div class="revenue__sub">This month</div>
          </div>

          <!-- Panel 3: Floating badge -->
          <div class="panel panel--badge">
            <div class="badge__row">
              <span class="ping-wrap">
                <span class="ping-dot ping-dot--outer"></span>
                <span class="ping-dot ping-dot--inner"></span>
              </span>
              <span class="badge__text">4 products matched</span>
            </div>
            <div class="badge__sub">AI Confidence: 97%</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* ─── Section ─────────────────────────────────────── */
  .hero {
    position: relative;
    background-color: #09090f;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  /* ─── Orbs ────────────────────────────────────────── */
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
  }

  .orb--teal {
    width: 600px;
    height: 600px;
    background: rgba(0, 212, 170, 0.07);
    top: -100px;
    right: 5%;
  }

  .orb--violet {
    width: 500px;
    height: 500px;
    background: rgba(0, 212, 170, 0.04);
    bottom: -80px;
    right: 30%;
  }

  /* ─── Dot grid ────────────────────────────────────── */
  .dot-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
  }

  /* ─── Layout ──────────────────────────────────────── */
  .hero__inner {
    position: relative;
    max-width: 1280px;
    margin: 0 auto;
    padding: 6rem 2rem 4rem;
    width: 100%;
    display: grid;
    grid-template-columns: 45% 55%;
    align-items: center;
    gap: 4rem;
  }

  /* ─── Left col ────────────────────────────────────── */
  .hero__left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .hero__label {
    display: inline-block;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #00d4aa;
  }

  .hero__headline {
    font-size: clamp(2rem, 3.5vw, 3.25rem);
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1.12;
    margin: 0;
  }

  .shimmer {
    background: linear-gradient(90deg, #ffffff 20%, #00d4aa 40%, #ffffff 60%, #00d4aa 80%, #ffffff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: text-shimmer 6s linear infinite;
  }

  @keyframes text-shimmer {
    from { background-position: 0% 50%; }
    to   { background-position: 200% 50%; }
  }

  .hero__sub {
    font-size: 1rem;
    font-weight: 400;
    color: #94a3b8;
    line-height: 1.65;
    max-width: 440px;
    margin: 0;
  }

  .hero__ctas {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  /* ─── Right col ───────────────────────────────────── */
  .hero__right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .perspective-wrap {
    perspective: 1100px;
    width: 100%;
  }

  .dashboard-group {
    transform: rotateX(8deg) rotateY(-14deg) rotateZ(2deg);
    position: relative;
    width: 640px;
    max-width: 100%;
  }

  /* ─── Panel base ──────────────────────────────────── */
  .panel {
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    box-shadow:
      0 40px 100px rgba(0, 0, 0, 0.6),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
  }

  /* ─── Panel 1: Main ───────────────────────────────── */
  .panel--main {
    padding: 0;
    overflow: hidden;
  }

  .panel__tabbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .panel__title {
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 0;
  }

  .panel__icons {
    display: flex;
    gap: 6px;
  }

  .icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.35);
    cursor: pointer;
    border-radius: 4px;
    padding: 0;
    transition: color 0.15s;
  }

  .icon-btn:hover {
    color: rgba(255, 255, 255, 0.7);
  }

  .panel__chat-row {
    padding: 10px 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .chat-thread {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .chat-bubble {
    font-size: 11px;
    line-height: 1.4;
    padding: 6px 10px;
    border-radius: 10px;
    max-width: 88%;
  }

  .chat-bubble--user {
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.7);
    border-radius: 10px 10px 2px 10px;
    align-self: flex-end;
  }

  .chat-bubble--ai {
    background: rgba(0, 212, 170, 0.08);
    color: #00d4aa;
    border-radius: 10px 10px 10px 2px;
    align-self: flex-start;
  }

  .chat-input-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 8px;
    padding: 7px 8px 7px 12px;
  }

  .chat-input-placeholder {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.25);
  }

  .chat-send-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: rgba(0, 212, 170, 0.15);
    border: none;
    border-radius: 5px;
    color: #00d4aa;
    cursor: pointer;
    flex-shrink: 0;
  }

  /* ─── Product grid ────────────────────────────────── */
  .product-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 14px 16px;
  }

  .product-card {
    background: #0d0d14;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .product-img {
    height: 62px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .product-info {
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .product-name {
    font-size: 11px;
    font-weight: 400;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-price {
    font-size: 12px;
    font-weight: 500;
    color: #00d4aa;
  }

  .product-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.06);
    border-radius: 4px;
    padding: 2px 5px;
    width: fit-content;
    margin-top: 2px;
  }

  .badge-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00d4aa;
    flex-shrink: 0;
  }

  /* ─── Status bar ──────────────────────────────────── */
  .panel__status {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    font-size: 11px;
    color: rgba(255, 255, 255, 0.35);
  }

  .status-dot-anim {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00d4aa;
    flex-shrink: 0;
    animation: pulse-dot 2s ease-in-out infinite;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  /* ─── Panel 2: Revenue ────────────────────────────── */
  .panel--revenue {
    position: absolute;
    bottom: -40px;
    right: -60px;
    width: 200px;
    padding: 16px;
    background: #0e0e16;
    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
  }

  .revenue__header {
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 12px;
  }

  .bar-chart {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    height: 60px;
    margin-bottom: 12px;
  }

  .bar {
    flex: 1;
    background: linear-gradient(to top, rgba(0, 212, 170, 0.25), #00d4aa);
    border-radius: 3px 3px 0 0;
    min-height: 8px;
  }

  .revenue__metric {
    font-size: 28px;
    font-weight: 600;
    color: #00d4aa;
    line-height: 1;
  }

  .revenue__sub {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.35);
    margin-top: 3px;
  }

  /* ─── Panel 3: Badge ──────────────────────────────── */
  .panel--badge {
    position: absolute;
    top: -28px;
    right: -30px;
    width: 168px;
    padding: 12px 14px;
    background: #111117;
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }

  .badge__row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 5px;
  }

  .badge__text {
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
  }

  .ping-wrap {
    position: relative;
    width: 10px;
    height: 10px;
    flex-shrink: 0;
  }

  .ping-dot {
    position: absolute;
    border-radius: 50%;
    background: #00d4aa;
  }

  .ping-dot--inner {
    width: 8px;
    height: 8px;
    top: 1px;
    left: 1px;
  }

  .ping-dot--outer {
    width: 10px;
    height: 10px;
    top: 0;
    left: 0;
    animation: ping 1.5s ease-out infinite;
    opacity: 0;
  }

  @keyframes ping {
    0% { transform: scale(1); opacity: 0.6; }
    100% { transform: scale(2.2); opacity: 0; }
  }

  .badge__sub {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.35);
    padding-left: 18px;
  }

  /* ─── Responsive ──────────────────────────────────── */
  @media (max-width: 768px) {
    .hero__inner {
      grid-template-columns: 1fr;
      gap: 3rem;
      padding: 5rem 1.5rem 3rem;
    }

    .hero__right {
      justify-content: center;
    }

    .dashboard-group {
      width: 100%;
      max-width: 480px;
    }
  }

  @media (max-width: 480px) {
    .hero__right {
      display: none;
    }
  }
</style>
