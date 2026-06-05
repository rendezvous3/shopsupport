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
      id: 'shortcuts',
      label: 'Quick shortcuts',
      tag: 'Feature 1',
      title: 'Popular requests, zero blank-page anxiety',
      desc: 'Shoppers tap curated chips — energetic flower, mellow pre-rolls, berry gummies — and jump straight into your catalog.',
      bullets: [
        'Configurable quick-start grid per store',
        'Compliance disclaimer always visible',
        'One tap into Guided or free-form chat'
      ],
      view: 'shortcuts'
    },
    {
      id: 'conversation',
      label: 'Natural conversation',
      tag: 'Feature 2',
      title: 'A real budtender tone, not a FAQ bot',
      desc: 'Open-ended questions get warm, knowledgeable answers about your full menu — categories, formats, and what to explore next.',
      bullets: [
        'Trained on your catalog and brand voice',
        'Handles “what do you carry?” without scripts',
        'Seamless handoff to Guided or product cards'
      ],
      view: 'conversation'
    },
    {
      id: 'entity',
      label: 'Entity extraction',
      tag: 'Feature 2',
      title: 'Understands strain, format, flavor, and effect',
      desc: '“Berry flavored indica edibles” becomes structured intent — then POS-backed recommendations with potency and price.',
      bullets: [
        'Extracts category, effect, flavor, and potency',
        'Surfaces matching products from live inventory',
        'Shows THC, weight, and deep links to PDPs'
      ],
      view: 'entity'
    },
    {
      id: 'guided',
      label: 'Guided flow',
      tag: 'Feature 2',
      title: 'Step-by-step product finder',
      desc: 'Category → effects → THC range → price — the same guided flow your AiChatBot deploys, built from your live catalog availability.',
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
      tag: 'Feature 3',
      title: 'Individual product Q&A',
      desc: 'Shoppers ask about a specific SKU — potency, brand story, format — and get grounded answers pulled from your catalog data.',
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
      desc: 'State-specific warnings, medical disclaimers, and AI disclosure — rendered alongside recommendations, not buried in footer legalese.',
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

  let activeFeature = $state<FeatureId>('shortcuts');
  let guidedStep = $state<BudtenderView>('guided-category');

  const current = $derived(features.find((f) => f.id === activeFeature) ?? features[0]);
  const widgetView = $derived(
    activeFeature === 'guided' ? guidedStep : current.view
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
        Dispensaries · Wineries · POS-Connected AI
      </div>

      <h1 class="hero__h1">The AI budtender your storefront deserves</h1>
      <p class="hero__sub">
        ShopSupport embeds on your site as a branded shopping assistant — shortcuts, natural conversation,
        guided flows, and compliance built in. Connected to your live POS catalog.
      </p>

      <div class="hero__feature-tag">{current.tag}</div>
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
        <ButtonMinimal label="Start free trial" variant="primary" size="md" href="/contact" arrow={true} />
        <ButtonMinimal label="View integrations" variant="outline" size="md" href="/services#integrations" arrow={true} />
      </div>
    </div>

    <div class="hero__widget-col">
      <BudtenderWidget view={widgetView} />
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    background-color: #09090f;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 6rem 0 5rem;
    min-height: 100vh;
  }

  .orb { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; }
  .orb--teal {
    width: 700px; height: 700px;
    background: radial-gradient(circle, rgba(0, 212, 170, 0.07) 0%, transparent 70%);
    top: 40%; right: 0; transform: translateY(-50%);
  }
  .orb--blue {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 70%);
    top: -80px; left: 5%;
  }
  .dot-grid {
    position: absolute; inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 32px 32px; pointer-events: none;
  }

  .hero__inner {
    position: relative; width: 100%; max-width: 80rem; margin: 0 auto;
    display: flex; flex-direction: column; gap: 2.5rem; align-items: flex-start;
    padding: 0 1.5rem;
  }

  @media (min-width: 1100px) {
    .hero__inner {
      flex-direction: row; align-items: center; gap: 2rem;
      padding: 0 2.5rem;
    }
  }

  .hero__text { flex: 1; min-width: 0; z-index: 1; }

  .hero__badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase;
    color: #00d4aa; margin-bottom: 1.25rem;
    padding: 0.35rem 0.75rem; border-radius: 999px;
    border: 1px solid rgba(0, 212, 170, 0.2); background: rgba(0, 212, 170, 0.06);
  }
  .badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #00d4aa; }

  .hero__h1 {
    font-size: clamp(2rem, 5vw, 3.25rem); font-weight: 600; color: #fff;
    letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 1rem;
  }
  .hero__sub {
    font-size: 1.05rem; color: #94a3b8; line-height: 1.65; max-width: 34rem; margin-bottom: 1.75rem;
  }

  .hero__feature-tag {
    font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
    color: #d4af7a; margin-bottom: 0.4rem;
  }
  .hero__feature-title {
    font-size: 1.15rem; font-weight: 600; color: #f1f5f9; margin-bottom: 0.45rem; line-height: 1.3;
  }
  .hero__feature-desc {
    font-size: 0.88rem; color: #94a3b8; line-height: 1.55; max-width: 32rem; margin-bottom: 1rem;
  }

  .hero__tabs {
    display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.75rem;
  }
  .hero__tab {
    font-size: 0.72rem; padding: 0.4rem 0.75rem; border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08); background: transparent; color: #64748b;
    cursor: pointer; transition: border-color 0.2s, color 0.2s, background 0.2s;
  }
  .hero__tab--active {
    border-color: rgba(0, 212, 170, 0.35); background: rgba(0, 212, 170, 0.08); color: #e2e8f0;
  }

  .hero__guided-steps {
    display: flex; gap: 0.35rem; margin-bottom: 0.85rem;
  }
  .hero__guided-step {
    font-size: 0.68rem; padding: 0.3rem 0.6rem; border-radius: 0.35rem;
    border: 1px solid rgba(212, 175, 120, 0.2); background: transparent; color: #94a3b8; cursor: pointer;
  }
  .hero__guided-step--active {
    border-color: rgba(212, 175, 120, 0.45); background: rgba(212, 175, 120, 0.1); color: #e2e8f0;
  }

  .hero__bullets {
    list-style: none; padding: 0; margin: 0 0 1.5rem; display: grid; gap: 0.5rem;
  }
  .hero__bullets li {
    position: relative; padding-left: 1rem; color: #cbd5e1; font-size: 0.85rem; line-height: 1.45;
  }
  .hero__bullets li::before {
    content: ''; position: absolute; left: 0; top: 0.5rem;
    width: 5px; height: 5px; border-radius: 50%; background: #00d4aa;
  }

  .hero__ctas { display: flex; flex-wrap: wrap; gap: 0.75rem; }

  .hero__widget-col {
    flex-shrink: 0; width: 100%; display: flex; justify-content: center; z-index: 1;
  }
  @media (min-width: 1100px) {
    .hero__widget-col { width: 400px; justify-content: flex-end; }
  }
</style>
