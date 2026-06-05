<script lang="ts">
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';

  interface CTA {
    label: string;
    href?: string;
    onclick?: () => void;
    variant?: 'primary' | 'secondary';
  }

  interface CTASectionProps {
    headline: string;
    description?: string;
    primaryCta?: CTA;
    secondaryCta?: CTA;
    colorScheme?: 'emerald-teal' | 'dark';
  }

  let {
    headline,
    description,
    primaryCta,
    secondaryCta,
    colorScheme = 'dark'
  }: CTASectionProps = $props();

  const metrics = [
    { label: 'Response time', value: '<200ms', bar: 0.92 },
    { label: 'Uptime', value: '99.9%', bar: 0.999 },
    { label: 'Accuracy', value: '94.7%', bar: 0.947 },
    { label: 'Cost reduction', value: '60%', bar: 0.60 }
  ];
</script>

<div class="cta-section">
  <div class="cta-inner">
    <div class="cta-grid">

      <!-- Left: text + CTAs -->
      <div class="cta-left">
        <h2 class="cta-headline">{headline}</h2>

        {#if description}
          <p class="cta-desc">{description}</p>
        {/if}

        <div class="cta-buttons">
          {#if primaryCta}
            <ButtonMinimal label={primaryCta.label} variant="primary" href={primaryCta.href} />
          {/if}
          {#if secondaryCta}
            <ButtonMinimal label={secondaryCta.label} variant="outline" href={secondaryCta.href} />
          {/if}
        </div>
      </div>

      <!-- Right: dark metrics panel -->
      <div class="cta-right">
        <div class="metrics-panel">
          <!-- Header -->
          <div class="metrics-header">
            <span class="metrics-title">Deployment Metrics</span>
            <span class="metrics-live-badge">
              <span class="metrics-live-dot"></span>
              Live
            </span>
          </div>

          <!-- Metric rows -->
          <div class="metrics-list">
            {#each metrics as metric}
              <div class="metric-row">
                <div class="metric-top">
                  <span class="metric-label">{metric.label}</span>
                  <span class="metric-value">{metric.value}</span>
                </div>
                <div class="metric-bar-track">
                  <div class="metric-bar-fill" style="width: {metric.bar * 100}%"></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<style>
  .cta-section {
    background-color: #09090f;
    padding: 5rem 1.5rem;
  }

  .cta-inner {
    max-width: 80rem;
    margin: 0 auto;
  }

  .cta-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .cta-grid {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }

  /* Left */
  .cta-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .cta-headline {
    font-size: clamp(1.75rem, 3.5vw, 2.75rem);
    font-weight: 600;
    color: #ffffff;
    line-height: 1.15;
    letter-spacing: -0.025em;
    margin: 0;
  }

  .cta-desc {
    font-size: 16px;
    color: #94a3b8;
    line-height: 1.7;
    margin: 0;
    max-width: 36rem;
  }

  .cta-buttons {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  /* Right: metrics panel */
  .metrics-panel {
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1rem;
    overflow: hidden;
  }

  .metrics-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .metrics-title {
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: -0.01em;
  }

  .metrics-live-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #00d4aa;
  }

  .metrics-live-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #00d4aa;
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .metrics-list {
    padding: 0.75rem 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .metric-row {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .metric-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .metric-label {
    font-size: 13px;
    color: #64748b;
  }

  .metric-value {
    font-size: 14px;
    font-weight: 600;
    color: #00d4aa;
    font-variant-numeric: tabular-nums;
  }

  .metric-bar-track {
    height: 3px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 2px;
    overflow: hidden;
  }

  .metric-bar-fill {
    height: 100%;
    background-color: #00d4aa;
    border-radius: 2px;
    opacity: 0.6;
  }
</style>
