<script lang="ts">
  import BudtenderWidget, { type BudtenderView } from '$lib/tailwind/BudtenderWidget/BudtenderWidget.svelte';

  interface Showcase {
    id: string;
    tag: string;
    title: string;
    desc: string;
    view: BudtenderView;
    guidedViews?: BudtenderView[];
  }

  const showcases: Showcase[] = [
    {
      id: 'conversation',
      tag: 'Feature 1',
      title: 'Natural AI Budtender conversation',
      desc: 'Menu questions, follow ups, and product picks in one thread. Shoppers ask about your catalog, refine intent, and land on POS synced recommendations without leaving chat.',
      view: 'conversation'
    },
    {
      id: 'entity',
      tag: 'Feature 2',
      title: 'Entity extraction & recommendations',
      desc: 'Parses “berry flavored indica edibles” into structured intent, then returns POS synced product cards with potency, format, and price.',
      view: 'entity'
    },
    {
      id: 'shortcuts',
      tag: 'Feature 3',
      title: 'Quick shortcuts',
      desc: 'Curated chips for your top intents. No typing required. Compliance panel and Guided entry built into the welcome state.',
      view: 'shortcuts'
    },
    {
      id: 'guided-a',
      tag: 'Feature 3A',
      title: 'Guided flow: category & effects',
      desc: 'Shoppers pick a product type, then choose up to two effects. Each step is tappable and built from your live catalog counts.',
      view: 'guided-category',
      guidedViews: ['guided-category', 'guided-effects']
    },
    {
      id: 'guided-b',
      tag: 'Feature 3B',
      title: 'Guided flow: potency tiers',
      desc: 'Adaptive THC ranges pulled from what is actually in stock. Shoppers see how many products match before they commit.',
      view: 'guided-thc',
      guidedViews: ['guided-thc']
    },
    {
      id: 'product-detail',
      tag: 'Feature 4',
      title: 'Individual product deep dive',
      desc: 'Shoppers ask about a specific SKU: brand story, format, potency, all grounded in your catalog data.',
      view: 'product-detail'
    },
    {
      id: 'compliance',
      tag: 'Trust',
      title: 'Policy alongside every recommendation',
      desc: 'State warnings, medical disclaimers, and AI disclosure rendered in context, not hidden in a legal footer.',
      view: 'compliance'
    }
  ];

  let guidedStepByCard = $state<Record<string, number>>({
    'guided-a': 0,
    'guided-b': 0
  });

  function activeView(item: Showcase): BudtenderView {
    if (!item.guidedViews) return item.view;
    const index = guidedStepByCard[item.id] ?? 0;
    return item.guidedViews[index] ?? item.view;
  }
</script>

<section class="showcase">
  <div class="showcase__header">
    <div class="showcase__label">PRODUCT WALKTHROUGH</div>
    <h2 class="showcase__title">Every path from browse to product pick</h2>
    <p class="showcase__desc">
      Talk naturally, search by intent, tap a shortcut, or follow a guided flow. Each mode is a real shopper journey on your live menu.
    </p>
  </div>

  <div class="showcase__grid">
    {#each showcases as item, i}
      <article class="showcase__card" class:showcase__card--reverse={i % 2 === 1}>
        <div class="showcase__copy">
          <div class="showcase__tag">{item.tag}</div>
          <h3 class="showcase__card-title">{item.title}</h3>
          <p class="showcase__card-desc">{item.desc}</p>

          {#if item.guidedViews && item.guidedViews.length > 1}
            <div class="showcase__guided-nav">
              {#each item.guidedViews as step, j}
                <button
                  type="button"
                  class="showcase__guided-btn"
                  class:showcase__guided-btn--active={(guidedStepByCard[item.id] ?? 0) === j}
                  onclick={() => (guidedStepByCard[item.id] = j)}
                >
                  {step === 'guided-category' ? 'Category' : step === 'guided-effects' ? 'Effects' : 'Potency'}
                </button>
              {/each}
            </div>
          {/if}
        </div>

        <div class="showcase__widget">
          <BudtenderWidget view={activeView(item)} />
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  .showcase {
    background: #0d0d14;
    padding: 5rem 0 6rem;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
  }

  .showcase__header {
    max-width: 42rem;
    margin: 0 auto 3.5rem;
    padding: 0 1.5rem;
    text-align: center;
  }

  .showcase__label {
    font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase;
    color: #00d4aa; margin-bottom: 0.75rem;
  }

  .showcase__title {
    font-size: clamp(1.75rem, 4vw, 2.25rem); font-weight: 600; color: #fff;
    letter-spacing: -0.02em; margin-bottom: 0.75rem;
  }

  .showcase__desc { color: #94a3b8; font-size: 1rem; line-height: 1.65; }

  .showcase__grid {
    max-width: 72rem; margin: 0 auto; padding: 0 1.5rem;
    display: grid; gap: 4rem;
  }

  .showcase__card {
    display: grid; gap: 2rem; align-items: center;
  }

  @media (min-width: 900px) {
    .showcase__card { grid-template-columns: 1fr 360px; }
    .showcase__card--reverse .showcase__copy { order: 2; }
    .showcase__card--reverse .showcase__widget { order: 1; }
  }

  .showcase__tag {
    font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
    color: #d4af7a; margin-bottom: 0.5rem;
  }

  .showcase__card-title {
    font-size: 1.35rem; font-weight: 600; color: #f1f5f9; margin-bottom: 0.6rem; line-height: 1.25;
  }

  .showcase__card-desc { color: #94a3b8; font-size: 0.92rem; line-height: 1.6; max-width: 28rem; }

  .showcase__guided-nav { display: flex; gap: 0.4rem; margin-top: 1rem; flex-wrap: wrap; }
  .showcase__guided-btn {
    font-size: 0.72rem; padding: 0.35rem 0.7rem; border-radius: 0.35rem;
    border: 1px solid rgba(212, 175, 120, 0.2); background: transparent; color: #94a3b8; cursor: pointer;
  }
  .showcase__guided-btn--active {
    border-color: rgba(212, 175, 120, 0.45); background: rgba(212, 175, 120, 0.1); color: #e2e8f0;
  }

  .showcase__widget {
    display: flex; justify-content: center;
  }
</style>
