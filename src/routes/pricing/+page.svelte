<script lang="ts">
  import Navigation from '$lib/tailwind/Navigation/Navigation.svelte';
  import Footer from '$lib/tailwind/Footer/Footer.svelte';
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';
  import CTASectionVariation2 from '$lib/tailwind/CTASection/CTASectionVariation2.svelte';
  import BrandName from '$lib/custom/BrandName/BrandName.svelte';

  const plans = [
    {
      tag: 'ONE-TIME',
      name: 'Setup',
      price: '$299',
      period: 'per store',
      description: 'Connect the agent to your Dutchie catalog, configure compliance rules, and embed the widget on your site.',
      features: [
        'Dutchie POS and catalog integration',
        'Compliance and policy configuration',
        'Branded widget embed on your site',
        'Onboarding and launch support'
      ],
      cta: { label: 'Get started', href: '/contact' },
      highlight: false
    },
    {
      tag: 'MONTHLY',
      name: 'AI Budtender Platform (dispensaries)',
      price: '$499',
      period: '/ month',
      description: 'Full access to the AI Budtender: natural conversation, guided selling, analytics, and live inventory sync. Other verticals are scoped as a pilot on one catalog and one market, then priced as a platform fee plus usage.',
      features: [
        'Natural conversation and guided flows',
        'Live POS catalog and inventory sync',
        'Shopper demand analytics dashboard',
        'Compliance built into every session',
        'Token usage billed at your cost'
      ],
      cta: { label: 'Schedule a demo', href: '/contact' },
      highlight: true
    },
    {
      tag: 'CUSTOM',
      name: 'Additions & Custom Work',
      price: 'Hourly',
      period: 'as scoped',
      description: 'Custom integrations, workflow changes, and feature additions beyond the standard platform.',
      features: [
        'Custom POS or API integrations',
        'Bespoke guided flow logic',
        'Additional agent capabilities',
        'Scoped and quoted before work begins'
      ],
      cta: { label: 'Talk to us', href: '/contact' },
      highlight: false
    }
  ];
</script>

<svelte:head>
  <title>Pricing | shopsupport.ai</title>
  <meta
    name="description"
    content="Dispensary pricing: $299 setup fee, $499/month platform access plus token usage, hourly rates for custom additions. Other verticals: scoped pilot, then platform fee plus usage."
  />
</svelte:head>

<Navigation dropdownTrigger="hover" />

<!-- Hero -->
<div class="bg-[#09090f] py-20 lg:py-28">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#00d4aa] mb-5">PRICING</div>
    <h1 class="text-4xl sm:text-5xl text-white font-semibold tracking-tight leading-[1.1] mb-6">
      One setup fee. One monthly subscription.
    </h1>
    <p class="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
      Transparent token usage on top. No surprises.
    </p>
  </div>
</div>

<!-- Plans -->
<div class="bg-[#0a0a12] py-20 lg:py-28 border-t border-white/[0.04]">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="pricing-grid">
      {#each plans as plan}
        <div class="pricing-card" class:pricing-card--highlight={plan.highlight}>
          <div class="pricing-tag">{plan.tag}</div>
          <h2 class="pricing-name">{plan.name}</h2>
          <div class="pricing-price-row">
            <span class="pricing-price">{plan.price}</span>
            <span class="pricing-period">{plan.period}</span>
          </div>
          <p class="pricing-desc">{plan.description}</p>
          <ul class="pricing-features">
            {#each plan.features as feature}
              <li>{feature}</li>
            {/each}
          </ul>
          <ButtonMinimal
            label={plan.cta.label}
            variant={plan.highlight ? 'primary' : 'outline'}
            href={plan.cta.href}
          />
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- What's included -->
<div class="bg-[#09090f] py-20 lg:py-28 border-t border-white/[0.04]">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl sm:text-3xl text-white font-semibold tracking-tight mb-8 text-center">
      What you get with every subscription
    </h2>
    <div class="pricing-includes">
      <div class="pricing-include">
        <h3>Live catalog sync</h3>
        <p>The agent syncs with your POS in real time. Stock, pricing, and availability update automatically. Out-of-stock items are never suggested.</p>
      </div>
      <div class="pricing-include">
        <h3>Token usage</h3>
        <p>Your $499/month covers platform access. LLM token usage is passed through at your cost, so you only pay for the conversations your shoppers actually have.</p>
      </div>
      <div class="pricing-include">
        <h3>Custom work</h3>
        <p>Need a bespoke integration or workflow? Custom additions are scoped and billed hourly. No surprise scope creep.</p>
      </div>
    </div>
  </div>
</div>

<CTASectionVariation2
  headline="Ready to launch your shopping agent?"
  description="Book a demo and we will walk through setup, monthly costs, and what token usage looks like for your store volume."
  colorScheme="dark"
  primaryCta={{ label: 'Schedule a demo', href: '/contact' }}
  secondaryCta={{ label: 'Contact us', href: '/contact' }}
/>

<Footer />

<style>
  .pricing-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    .pricing-grid {
      grid-template-columns: repeat(3, 1fr);
      align-items: stretch;
    }
  }

  .pricing-card {
    background: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }

  .pricing-card--highlight {
    border-color: rgba(0, 212, 170, 0.25);
    box-shadow: 0 0 0 1px rgba(0, 212, 170, 0.08);
  }

  .pricing-tag {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    color: #00d4aa;
    margin-bottom: 1rem;
  }

  .pricing-name {
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 1rem;
  }

  .pricing-price-row {
    display: flex;
    align-items: baseline;
    gap: 0.35rem;
    margin-bottom: 1rem;
  }

  .pricing-price {
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .pricing-period {
    color: #64748b;
    font-size: 0.875rem;
  }

  .pricing-desc {
    color: #94a3b8;
    font-size: 0.9375rem;
    line-height: 1.6;
    margin: 0 0 1.5rem;
  }

  .pricing-features {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
    flex: 1;
  }

  .pricing-features li {
    color: #cbd5e1;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 0.4rem 0 0.4rem 1.25rem;
    position: relative;
  }

  .pricing-features li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.75rem;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00d4aa;
  }

  .pricing-includes {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .pricing-include h3 {
    color: #ffffff;
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
  }

  .pricing-include p {
    color: #94a3b8;
    font-size: 0.9375rem;
    line-height: 1.7;
    margin: 0;
  }
</style>
