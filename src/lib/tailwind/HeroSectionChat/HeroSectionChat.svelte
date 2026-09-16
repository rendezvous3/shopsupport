<script lang="ts">
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';
  import BudtenderWidget, { type BudtenderView } from '$lib/tailwind/BudtenderWidget/BudtenderWidget.svelte';

  type FeatureId =
    | 'shortcuts'
    | 'conversation'
    | 'entity'
    | 'guided'
    | 'product-detail'
    | 'compliance';

  interface Feature {
    id: FeatureId;
    label: string;
    tag: string;
    title: string;
    desc: string;
    bullets: string[];
    view: BudtenderView;
  }

  const features: Feature[] = [
    {
      id: 'conversation',
      label: 'Natural conversation',
      tag: 'Feature 1',
      title: 'A real budtender tone',
      desc: 'Shoppers ask about your menu, refine what they want, and get product cards in the same thread. No blank box, no dead ends.',
      bullets: [
        'Multi-turn menu Q&A with AI Budtender tone',
        'Follow-up intent like “uplifting pre-rolls”',
        'POS-backed recommendations in chat'
      ],
      view: 'conversation'
    },
    {
      id: 'entity',
      label: 'Entity extraction',
      tag: 'Feature 2',
      title: 'Understands strain, format, flavor, and effect',
      desc: '“Berry flavored indica edibles” becomes structured intent, then POS-backed recommendations with potency and price.',
      bullets: [
        'Extracts category, effect, flavor, and potency',
        'Surfaces matching products from live inventory',
        'Shows THC, weight, and deep links to PDPs'
      ],
      view: 'entity'
    },
    {
      id: 'shortcuts',
      label: 'Quick shortcuts',
      tag: 'Feature 3',
      title: 'Popular requests, zero blank-page anxiety',
      desc: 'Shoppers tap curated chips like energetic flower, mellow pre-rolls, or berry gummies, and jump straight into your catalog.',
      bullets: [
        'Configurable quick-start grid per store',
        'Compliance disclaimer always visible',
        'One tap into Guided or free-form chat'
      ],
      view: 'shortcuts'
    },
    {
      id: 'guided',
      label: 'Guided flow',
      tag: 'Feature 3A',
      title: 'Step-by-step product finder',
      desc: 'Category, effects, THC range, then price. Guided selling built from your live catalog availability, not a generic decision tree.',
      bullets: [
        'Categories: Flower, Prerolls, Vape, Edible, Concentrates',
        'Effects: up to 2 (Energized, Euphoric, Calm, etc.)',
        'Adaptive THC tiers with live “N available” counts'
      ],
      view: 'guided-category'
    },
    {
      id: 'product-detail',
      label: 'Product deep-dive',
      tag: 'Feature 4',
      title: 'Individual product Q&A',
      desc: 'Shoppers ask about a specific SKU, from potency to brand story to format, and get grounded answers pulled from your catalog data.',
      bullets: [
        'Lookup by product name or brand',
        'Brand narrative, format, and potency in one reply',
        'Links back to the product page when ready to buy'
      ],
      view: 'product-detail'
    },
    {
      id: 'compliance',
      label: 'Compliance built-in',
      tag: 'Trust',
      title: 'Policy before purchase',
      desc: 'State-specific warnings, medical disclaimers, and AI disclosure, rendered alongside recommendations, not buried in footer legalese.',
      bullets: [
        'NY Part 129 warnings + impairment bullets',
        'Medical guidance disclaimer on health questions',
        '“AI assistant, not medical advice” on every session'
      ],
      view: 'compliance'
    }
  ];

  const guidedSteps: { id: BudtenderView; label: string }[] = [
    { id: 'guided-category', label: 'Category' },
    { id: 'guided-effects', label: 'Effects' },
    { id: 'guided-thc', label: 'Potency' }
  ];

  let activeFeature = $state<FeatureId>('conversation');
  let guidedStep = $state<BudtenderView>('guided-category');

  const current = $derived(features.find((f) => f.id === activeFeature) ?? features[0]);
  const widgetView = $derived(
    activeFeature === 'guided' ? guidedStep : current.view
  );
  const displayTag = $derived(
    activeFeature === 'guided'
      ? guidedStep === 'guided-thc'
        ? 'Feature 3B'
        : 'Feature 3A'
      : current.tag
  );
</script>

<section class="hero" id="chat-preview">
  <div class="orb orb--teal"></div>
  <div class="orb orb--blue"></div>
  <div class="dot-grid"></div>

  <div class="hero__inner">
    <div class="hero__text">
      <div class="hero__badge">
        <span class="badge-dot"></span>
        Guided Selling · Smart recommendations · Live Catalog
      </div>

      <h1 class="hero__h1">The AI Budtender your storefront deserves</h1>
      <p class="hero__sub">
        Embed on your site a branded AI shopping assistant with natural conversation capabilities, intelligent reasoning,
        and guided selections while staying compliant. Connected to your live POS catalog.
      </p>

      <div class="hero__feature-tag">{displayTag}</div>
      <h2 class="hero__feature-title">{current.title}</h2>
      <p class="hero__feature-desc">{current.desc}</p>

      <div class="hero__tabs" role="tablist">
        {#each features as feature}
          <button
            type="button"
            role="tab"
            aria-selected={activeFeature === feature.id}
            class="hero__tab"
            class:hero__tab--active={activeFeature === feature.id}
            onclick={() => {
              activeFeature = feature.id;
              if (feature.id === 'guided') guidedStep = 'guided-category';
            }}
          >
            {feature.label}
          </button>
        {/each}
      </div>

      {#if activeFeature === 'guided'}
        <div class="hero__guided-steps">
          {#each guidedSteps as step}
            <button
              type="button"
              class="hero__guided-step"
              class:hero__guided-step--active={guidedStep === step.id}
              onclick={() => (guidedStep = step.id)}
            >
              {step.label}
            </button>
          {/each}
        </div>
      {/if}

      <ul class="hero__bullets">
        {#each current.bullets as bullet}
          <li>{bullet}</li>
        {/each}
      </ul>

      <div class="hero__ctas">
        <ButtonMinimal label="Schedule a demo" variant="primary" size="md" href="/contact" arrow={true} />
        <ButtonMinimal label="View integrations" variant="outline" size="md" href="/services#integrations" arrow={true} />
      </div>
    </div>

    <div class="hero__widget">
      <BudtenderWidget view={widgetView} />
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    background: #09090f;
    padding: 7rem 1.5rem 5rem;
    overflow: hidden;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  .orb--teal {
    width: 420px;
    height: 420px;
    background: rgba(0, 212, 170, 0.08);
    top: -120px;
    left: -80px;
  }

  .orb--blue {
    width: 360px;
    height: 360px;
    background: rgba(59, 130, 246, 0.06);
    bottom: -100px;
    right: -60px;
  }

  .dot-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
  }

  .hero__inner {
    position: relative;
    max-width: 72rem;
    margin: 0 auto;
    display: grid;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .hero__inner {
      grid-template-columns: 1fr 380px;
      gap: 4rem;
    }
  }

  .hero__badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #64748b;
    margin-bottom: 1.25rem;
  }

  .badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00d4aa;
    box-shadow: 0 0 8px rgba(0, 212, 170, 0.5);
  }

  .hero__h1 {
    font-size: clamp(2.25rem, 5vw, 3.25rem);
    font-weight: 600;
    color: #fff;
    letter-spacing: -0.03em;
    line-height: 1.08;
    margin-bottom: 1rem;
  }

  .hero__sub {
    font-size: 1.05rem;
    color: #94a3b8;
    line-height: 1.65;
    margin-bottom: 2rem;
    max-width: 36rem;
  }

  .hero__feature-tag {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #d4af7a;
    margin-bottom: 0.5rem;
  }

  .hero__feature-title {
    font-size: 1.35rem;
    font-weight: 600;
    color: #f1f5f9;
    margin-bottom: 0.5rem;
    line-height: 1.25;
  }

  .hero__feature-desc {
    font-size: 0.92rem;
    color: #94a3b8;
    line-height: 1.6;
    margin-bottom: 1.25rem;
    max-width: 32rem;
  }

  .hero__tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1rem;
  }

  .hero__tab {
    font-size: 0.72rem;
    padding: 0.4rem 0.75rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: transparent;
    color: #64748b;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }

  .hero__tab--active {
    border-color: rgba(0, 212, 170, 0.35);
    color: #e2e8f0;
    background: rgba(0, 212, 170, 0.06);
  }

  .hero__guided-steps {
    display: flex;
    gap: 0.4rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  .hero__guided-step {
    font-size: 0.68rem;
    padding: 0.3rem 0.65rem;
    border-radius: 0.35rem;
    border: 1px solid rgba(212, 175, 120, 0.2);
    background: transparent;
    color: #94a3b8;
    cursor: pointer;
  }

  .hero__guided-step--active {
    border-color: rgba(212, 175, 120, 0.45);
    background: rgba(212, 175, 120, 0.1);
    color: #e2e8f0;
  }

  .hero__bullets {
    list-style: none;
    padding: 0;
    margin: 0 0 1.75rem;
    display: grid;
    gap: 0.45rem;
  }

  .hero__bullets li {
    font-size: 0.82rem;
    color: #94a3b8;
    padding-left: 1rem;
    position: relative;
    line-height: 1.5;
  }

  .hero__bullets li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00d4aa;
  }

  .hero__ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .hero__widget {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    .hero__widget {
      justify-content: flex-end;
    }
  }
</style>
