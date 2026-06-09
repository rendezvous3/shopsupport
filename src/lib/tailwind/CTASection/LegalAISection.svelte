<script lang="ts">
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';

  interface CTA {
    label: string;
    href?: string;
    onclick?: () => void;
    variant?: 'primary' | 'secondary';
  }

  interface Stat {
    value: string;
    label: string;
  }

  interface PanelResult {
    name: string;
    meta: string;
  }

  interface LegalAISectionProps {
    label?: string;
    headline: string;
    description?: string;
    stats?: Stat[];
    panelTitle?: string;
    panelQuery?: string;
    panelResults?: PanelResult[];
    panelPlaceholder?: string;
    panelStatus?: string;
    primaryCta?: CTA;
    secondaryCta?: CTA;
  }

  let {
    label = 'POS INTEGRATION · LIVE SYNC',
    headline,
    description,
    stats = [
      { value: 'Real-time', label: 'Dutchie sync' },
      { value: '99.2%', label: 'Match accuracy' },
      { value: '<200ms', label: 'Sync' }
    ],
    panelTitle = 'Catalog Sync',
    panelQuery = 'Sync live inventory from Dutchie POS',
    panelResults = [
      { name: 'Blue Dream 3.5g', meta: 'In stock · 24 units · $32.00' },
      { name: 'Gelato 3.5g', meta: 'In stock · 18 units · $38.00' },
      { name: 'Calm Gummies 10pk', meta: 'In stock · 42 units · $24.00' }
    ],
    panelPlaceholder = 'Check SKU or category sync status…',
    panelStatus = 'Last sync 12s ago · 1,247 SKUs indexed',
    primaryCta,
    secondaryCta
  }: LegalAISectionProps = $props();
</script>

<div class="legal-section">
  <div class="legal-inner">
    <div class="legal-grid">

      <!-- Left column: text + stats + CTAs -->
      <div class="legal-left">
        <div class="legal-label">{label}</div>

        <h2 class="legal-headline">{headline}</h2>

        {#if description}
          <p class="legal-desc">{description}</p>
        {/if}

        <!-- Stats row -->
        <div class="legal-stats">
          {#each stats as stat, i}
            {#if i > 0}<div class="legal-stat-divider"></div>{/if}
            <div class="legal-stat">
              <span class="legal-stat-num">{stat.value}</span>
              <span class="legal-stat-label">{stat.label}</span>
            </div>
          {/each}
        </div>

        <!-- CTAs -->
        <div class="legal-ctas">
          {#if primaryCta}
            <ButtonMinimal label={primaryCta.label} variant="primary" href={primaryCta.href} />
          {/if}
          {#if secondaryCta}
            <ButtonMinimal label={secondaryCta.label} variant="outline" href={secondaryCta.href} />
          {/if}
        </div>
      </div>

      <!-- Right column: dark AI case panel -->
      <div class="legal-right">
        <div class="ai-panel">
          <!-- Tab bar -->
          <div class="ai-panel-header">
            <span class="ai-panel-title">{panelTitle}</span>
            <div class="ai-panel-icons">
              <button class="ai-icon-btn" aria-label="Search">
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button class="ai-icon-btn" aria-label="Filter">
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4h18M7 8h10M11 12h2" />
                </svg>
              </button>
              <button class="ai-icon-btn" aria-label="Settings">
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Chat query bubble -->
          <div class="ai-chat-query">
            <div class="ai-chat-user-msg">{panelQuery}</div>
          </div>

          <!-- Results list -->
          <div class="ai-results">
            {#each panelResults as result}
              <div class="ai-result-item">
                <div class="ai-result-border"></div>
                <div class="ai-result-content">
                  <div class="ai-result-name">{result.name}</div>
                  <div class="ai-result-meta">{result.meta}</div>
                </div>
              </div>
            {/each}
          </div>

          <!-- Chat input bar -->
          <div class="ai-chat-input-row">
            <span class="ai-chat-input-placeholder">{panelPlaceholder}</span>
            <button class="ai-chat-send" aria-label="Send">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>

          <!-- Status bar -->
          <div class="ai-status">
            <span class="ai-status-dot"></span>
            <span class="ai-status-text">{panelStatus}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<style>
  .legal-section {
    background-color: #09090f;
    padding: 5rem 1.5rem;
  }

  .legal-inner {
    max-width: 80rem;
    margin: 0 auto;
  }

  .legal-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .legal-grid {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }

  /* Left column */
  .legal-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .legal-label {
    display: inline-block;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #00d4aa;
  }

  .legal-headline {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 600;
    color: #ffffff;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin: 0;
  }

  .legal-desc {
    font-size: 16px;
    color: #94a3b8;
    line-height: 1.7;
    margin: 0;
    max-width: 38rem;
  }

  .legal-stats {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .legal-stat {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .legal-stat-num {
    font-size: 1.5rem;
    font-weight: 600;
    color: #00d4aa;
    letter-spacing: -0.02em;
  }

  .legal-stat-label {
    font-size: 12px;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .legal-stat-divider {
    width: 1px;
    height: 2.5rem;
    background-color: rgba(255, 255, 255, 0.08);
  }

  .legal-ctas {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  /* Right column: AI panel */
  .ai-panel {
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1rem;
    overflow: hidden;
  }

  .ai-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .ai-panel-title {
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: -0.01em;
  }

  .ai-panel-icons {
    display: flex;
    gap: 0.25rem;
  }

  .ai-icon-btn {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    border-radius: 6px;
    color: #475569;
    cursor: pointer;
    transition: color 0.15s ease, background-color 0.15s ease;
  }

  .ai-icon-btn:hover {
    color: #94a3b8;
    background-color: rgba(255, 255, 255, 0.04);
  }

  .ai-chat-query {
    padding: 0.625rem 1.25rem;
  }

  .ai-chat-user-msg {
    display: inline-block;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px 10px 2px 10px;
    padding: 6px 12px;
    max-width: 85%;
    float: right;
  }

  .ai-chat-input-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin: 0 1.25rem 0.625rem;
    padding: 0.5rem 0.625rem 0.5rem 0.875rem;
    background-color: #0d0d14;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
  }

  .ai-chat-input-placeholder {
    font-size: 12px;
    color: #334155;
  }

  .ai-chat-send {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: rgba(0, 212, 170, 0.12);
    border: none;
    border-radius: 5px;
    color: #00d4aa;
    cursor: pointer;
    flex-shrink: 0;
  }

  .ai-results {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0 1.25rem 0.75rem;
  }

  .ai-result-item {
    display: flex;
    gap: 0.75rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .ai-result-item:last-child {
    border-bottom: none;
  }

  .ai-result-border {
    width: 2px;
    border-radius: 1px;
    background-color: #00d4aa;
    flex-shrink: 0;
    align-self: stretch;
  }

  .ai-result-content {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .ai-result-name {
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
  }

  .ai-result-meta {
    font-size: 12px;
    color: #475569;
  }

  .ai-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .ai-status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #00d4aa;
    animation: pulse 1.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .ai-status-text {
    font-size: 12px;
    color: #475569;
  }
</style>
