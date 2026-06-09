<script lang="ts">
  export type BudtenderView =
    | 'shortcuts'
    | 'conversation'
    | 'entity'
    | 'guided-category'
    | 'guided-effects'
    | 'guided-thc'
    | 'product-detail'
    | 'compliance';

  interface Props {
    view?: BudtenderView;
    storeName?: string;
  }

  let {
    view = 'shortcuts',
    storeName = 'Your Store'
  }: Props = $props();

  const quickStart = [
    'Energetic Flower',
    'Mellow Pre-Rolls',
    'Uplifting Vape',
    'Nighttime Edibles',
    'CBD Oil',
    'Berry Gummies'
  ];

  const categories = ['Flower', 'Prerolls', 'Vape Cart', 'Edible', 'Concentrates'];

  const effects = [
    { label: 'Calm', selected: false },
    { label: 'Creative', selected: false },
    { label: 'Energized', selected: true },
    { label: 'Focused', selected: false },
    { label: 'Relaxed', selected: false },
    { label: 'Euphoric', selected: true },
    { label: 'Sedated', selected: false },
    { label: 'Mellow', selected: false },
    { label: 'Stimulated', selected: false },
    { label: 'Uplifted', selected: false }
  ];

  const thcRanges = [
    { label: 'Lowest THC', range: '13.44–24.4%', count: 41 },
    { label: 'Lower THC', range: '24.5–26.61%', count: 28 },
    { label: 'Middle THC', range: '26.65–29.2%', count: 35 },
    { label: 'Higher THC', range: '29.4–35.42%', count: 19 },
    { label: 'Highest THC', range: '36–48.1%', count: 12 }
  ];

  const entityProducts = [
    {
      brand: 'SMOKIEZ EDIBLES',
      name: 'Sour Blue Raspberry Indica 100mg THC Fruit Chews',
      tags: ['EDIBLES', 'INDICA'],
      price: '$22.00',
      spec: '100mg thc',
      specLabel: 'TOTAL'
    }
  ];
</script>

<div class="widget" aria-hidden="true">
  <div class="widget__chrome">
    <div class="widget__header">
      <div class="widget__brand">
        <span class="widget__logo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8 2 5 5 5 9c0 4 3 7 7 11 4-4 7-7 7-11 0-4-3-7-7-7z" fill="#00d4aa" opacity="0.2"/>
            <path d="M12 6c-2.2 0-4 1.8-4 4s1.8 4 4 5c2.2-1 4-2.8 4-5s-1.8-4-4-4z" fill="#00d4aa"/>
          </svg>
        </span>
        <span class="widget__title">{storeName} AI Budtender</span>
      </div>
      <span class="widget__close">×</span>
    </div>

    <div class="widget__body" class:widget__body--guided={view.startsWith('guided-')}>
      {#if view === 'shortcuts'}
        <p class="widget__greeting">
          Hi! Ask me anything about our menu, or tap Guided below for a quick product finder.
        </p>
        <div class="widget__section-label">QUICK START</div>
        <div class="widget__section-sub">
          Popular requests <span class="widget__badge">New</span>
        </div>
        <div class="widget__chips">
          {#each quickStart as chip}
            <div class="widget__chip">
              <span class="widget__chip-icon"></span>
              {chip}
            </div>
          {/each}
        </div>
        <div class="widget__compliance">
          <p>
            For use only by adults 21 years of age and older. Keep out of reach of children.
            In case of accidental ingestion, contact the Poison Center hotline
            <strong>1-800-222-1222</strong> or call 911.
          </p>
          <ul>
            <li>Cannabis can be addictive.</li>
            <li>Do not operate a vehicle or machinery under the influence of cannabis.</li>
            <li>Not recommended for use by persons who are pregnant or nursing.</li>
          </ul>
          <button type="button" class="widget__guided-btn">Guided</button>
        </div>

      {:else if view === 'conversation'}
        <div class="widget__user-msg">Hi there! Tell me about your menu please?</div>
        <p class="widget__ai-msg widget__ai-msg--block">
          We carry flower, pre-rolls, edibles, vaporizers, concentrates, tinctures, and topicals.
          Popular picks include gummies, chocolates, live-resin carts, and sativa-dominant flower.
          Let me know if you'd like details on any specific category or product type.
        </p>
        <button type="button" class="widget__guided-btn widget__guided-btn--inline">Guided</button>

      {:else if view === 'entity'}
        <div class="widget__user-msg">I am interested in berry flavored indica edibles.</div>
        <p class="widget__ai-msg">
          I completely understand what you're looking for:
          <strong class="widget__entity">indica edibles, berry flavor</strong>.
          Let me check what we have that matches your preferences.
        </p>
        <div class="widget__rec-label">Budtender recommendations</div>
        {#each entityProducts as product}
          <div class="widget__product">
            <div class="widget__product-img widget__product-img--berry"></div>
            <div class="widget__product-body">
              <div class="widget__product-brand">{product.brand}</div>
              <div class="widget__product-name">{product.name}</div>
              <div class="widget__product-tags">
                {#each product.tags as tag}<span>{tag}</span>{/each}
              </div>
              <div class="widget__product-row">
                <span class="widget__product-price">{product.price}</span>
                <span class="widget__product-spec">{product.specLabel} {product.spec}</span>
              </div>
            </div>
            <button type="button" class="widget__product-link" aria-label="View product">↗</button>
          </div>
        {/each}

      {:else if view === 'guided-category'}
        <div class="widget__guided-progress">
          <span class="widget__guided-dot widget__guided-dot--active"></span>
          <span class="widget__guided-dot"></span>
          <span class="widget__guided-dot"></span>
          <span class="widget__guided-dot"></span>
        </div>
        <h3 class="widget__guided-title">What product type are you interested in?</h3>
        <p class="widget__guided-sub">(Select one)</p>
        <div class="widget__guided-list">
          {#each categories as cat}
            <div class="widget__guided-option">
              <span class="widget__guided-icon"></span>
              <span>{cat}</span>
            </div>
          {/each}
        </div>
        <div class="widget__guided-nav">
          <button type="button" class="widget__guided-chat">Chat</button>
          <button type="button" class="widget__guided-next">Next</button>
        </div>

      {:else if view === 'guided-effects'}
        <div class="widget__guided-progress">
          <span class="widget__guided-dot widget__guided-dot--done"></span>
          <span class="widget__guided-dot widget__guided-dot--active"></span>
          <span class="widget__guided-dot"></span>
          <span class="widget__guided-dot"></span>
        </div>
        <h3 class="widget__guided-title">How would you like to feel?</h3>
        <p class="widget__guided-sub">(Up to 2)</p>
        <div class="widget__effects-grid">
          {#each effects as effect}
            <div class="widget__effect" class:widget__effect--selected={effect.selected}>
              {#if effect.selected}<span class="widget__effect-check">✓</span>{/if}
              <span class="widget__effect-icon"></span>
              <span>{effect.label}</span>
            </div>
          {/each}
        </div>
        <div class="widget__guided-nav">
          <button type="button" class="widget__guided-chat">Chat</button>
          <button type="button" class="widget__guided-next">Next</button>
        </div>

      {:else if view === 'guided-thc'}
        <div class="widget__guided-progress">
          <span class="widget__guided-dot widget__guided-dot--done"></span>
          <span class="widget__guided-dot widget__guided-dot--done"></span>
          <span class="widget__guided-dot widget__guided-dot--active"></span>
          <span class="widget__guided-dot"></span>
        </div>
        <h3 class="widget__guided-title">Choose a THC range</h3>
        <p class="widget__guided-sub">(Select one)</p>
        <div class="widget__thc-list">
          {#each thcRanges as tier, i}
            <div class="widget__thc-option" class:widget__thc-option--first={i === 0}>
              <span class="widget__thc-icon" style="--tier: {i}"></span>
              <div>
                <div class="widget__thc-label">{tier.label}</div>
                <div class="widget__thc-range">{tier.range}</div>
                <div class="widget__thc-count">{tier.count} available</div>
              </div>
            </div>
          {/each}
        </div>
        <div class="widget__guided-nav">
          <button type="button" class="widget__guided-chat">Chat</button>
          <button type="button" class="widget__guided-next">Next</button>
        </div>

      {:else if view === 'product-detail'}
        <div class="widget__user-msg">I would like to know more about Edie Parker | Maui Mango product?</div>
        <p class="widget__ai-msg">
          Let me look up <strong>Edie Parker | Maui Mango</strong> for you.
        </p>
        <p class="widget__ai-msg widget__ai-msg--block">
          A 1-gram sativa vape cartridge formulated for an uplifting morning experience. $42, 87% THC.
        </p>
        <p class="widget__ai-msg widget__ai-msg--block">
          <strong>Brand &amp; style:</strong> Founded in NYC (2010), Edie Parker draws on mid-century acrylic bag design.
          Maui Mango delivers vibrant, juicy mango with sweet tropical notes.
        </p>
        <button type="button" class="widget__guided-btn widget__guided-btn--inline">Guided</button>

      {:else if view === 'compliance'}
        <p class="widget__ai-msg widget__ai-msg--small">
          I can't make health claims. Please consult a healthcare provider for medical guidance.
        </p>
        <div class="widget__product">
          <div class="widget__product-img widget__product-img--vape"></div>
          <div class="widget__product-body">
            <div class="widget__product-brand">EDIE PARKER</div>
            <div class="widget__product-name">Maui Mango | For A Good Morning | Sativa | Cart</div>
            <div class="widget__product-tags">
              <span>VAPORIZERS</span><span>SATIVA</span>
            </div>
            <div class="widget__product-row">
              <span class="widget__product-price">$42.00</span>
              <span class="widget__product-spec">THC 87%</span>
            </div>
          </div>
          <button type="button" class="widget__product-link" aria-label="View product">↗</button>
        </div>
        <div class="widget__compliance widget__compliance--compact">
          <p>For use only by adults 21+. Poison Center: <strong>1-800-222-1222</strong>. NY HOPEline: text or call <strong>1-877-8-HOPENY</strong>.</p>
          <ul>
            <li>Cannabis can impair concentration and coordination.</li>
            <li>There may be health risks associated with consumption.</li>
          </ul>
        </div>
      {/if}
    </div>

    <div class="widget__footer">
      <div class="widget__input">
        <span>Type a message...</span>
        <span class="widget__send">➤</span>
      </div>
      <p class="widget__disclaimer">
        AI assistant, not a human. May be inaccurate. Not medical advice.
        <span class="widget__learn">Learn more</span>
      </p>
    </div>
  </div>
</div>

<style>
  .widget {
    position: relative;
    width: 100%;
    max-width: 380px;
  }

  .widget__chrome {
    background: #0f0f15;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
  }

  .widget__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.85rem 1rem;
    border-bottom: 1px solid rgba(212, 175, 120, 0.25);
  }

  .widget__brand { display: flex; align-items: center; gap: 0.5rem; }
  .widget__title { font-size: 0.82rem; font-weight: 600; color: #f1f5f9; }
  .widget__close { color: #64748b; font-size: 1.1rem; line-height: 1; }

  .widget__body {
    padding: 1rem;
    min-height: 360px;
    max-height: 440px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .widget__body--guided { padding-bottom: 0.5rem; }

  .widget__greeting { font-size: 0.78rem; color: #cbd5e1; line-height: 1.55; margin: 0 0 1rem; }
  .widget__section-label { font-size: 0.62rem; letter-spacing: 0.12em; color: #64748b; margin-bottom: 0.25rem; }
  .widget__section-sub { font-size: 0.78rem; color: #e2e8f0; margin-bottom: 0.65rem; display: flex; align-items: center; gap: 0.4rem; }
  .widget__badge { font-size: 0.58rem; padding: 0.1rem 0.35rem; border-radius: 4px; background: rgba(0, 212, 170, 0.15); color: #00d4aa; }

  .widget__chips { display: grid; grid-template-columns: 1fr 1fr; gap: 0.45rem; margin-bottom: 0.85rem; }
  .widget__chip {
    display: flex; align-items: center; gap: 0.35rem; font-size: 0.68rem; color: #e2e8f0;
    background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 0.5rem; padding: 0.45rem 0.5rem;
  }
  .widget__chip-icon { width: 10px; height: 10px; border-radius: 2px; background: rgba(0, 212, 170, 0.35); flex-shrink: 0; }

  .widget__compliance {
    border: 1px solid rgba(212, 175, 120, 0.35); border-radius: 0.65rem; padding: 0.65rem 0.7rem;
    font-size: 0.58rem; line-height: 1.45; color: #94a3b8; position: relative; padding-bottom: 2rem;
  }
  .widget__compliance--compact { padding-bottom: 0.65rem; margin-top: 0.5rem; }
  .widget__compliance p { margin: 0 0 0.4rem; }
  .widget__compliance ul { margin: 0; padding-left: 1rem; }
  .widget__compliance li { margin-bottom: 0.15rem; }

  .widget__guided-btn {
    font-size: 0.62rem; padding: 0.25rem 0.55rem; border-radius: 0.35rem;
    border: 1px solid rgba(255, 255, 255, 0.1); background: #111117; color: #e2e8f0;
  }
  .widget__compliance .widget__guided-btn { position: absolute; left: 0.7rem; bottom: 0.55rem; }
  .widget__guided-btn--inline { margin-top: 0.5rem; }

  .widget__user-msg {
    margin-left: auto; width: fit-content; max-width: 90%; font-size: 0.72rem; color: #e2e8f0;
    background: rgba(255, 255, 255, 0.06); border-radius: 0.65rem; border-top-right-radius: 0.15rem;
    padding: 0.45rem 0.6rem; margin-bottom: 0.65rem;
  }

  .widget__ai-msg { font-size: 0.72rem; color: #cbd5e1; line-height: 1.5; margin: 0 0 0.65rem; }
  .widget__ai-msg--block { margin-bottom: 0.5rem; }
  .widget__ai-msg--small { font-size: 0.65rem; color: #94a3b8; }
  .widget__entity { color: #f1f5f9; }

  .widget__rec-label { font-size: 0.68rem; color: #94a3b8; margin-bottom: 0.5rem; }

  .widget__product {
    display: grid; grid-template-columns: 52px 1fr 28px; gap: 0.5rem; align-items: start;
    background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 0.65rem; padding: 0.55rem; margin-bottom: 0.5rem;
  }
  .widget__product-img { width: 52px; height: 52px; border-radius: 0.4rem; background: linear-gradient(135deg, #3d2810, #6b4423); }
  .widget__product-img--berry { background: linear-gradient(135deg, #4a2040, #8b3a6b); }
  .widget__product-img--vape { background: linear-gradient(135deg, #2a3540, #4a6070); }
  .widget__product-brand { font-size: 0.52rem; letter-spacing: 0.06em; color: #64748b; margin-bottom: 0.1rem; }
  .widget__product-name { font-size: 0.68rem; font-weight: 600; color: #f1f5f9; line-height: 1.3; margin-bottom: 0.25rem; }
  .widget__product-tags { display: flex; gap: 0.25rem; margin-bottom: 0.35rem; flex-wrap: wrap; }
  .widget__product-tags span {
    font-size: 0.5rem; letter-spacing: 0.05em; padding: 0.1rem 0.3rem; border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.1); color: #94a3b8;
  }
  .widget__product-row { display: flex; flex-wrap: wrap; gap: 0.35rem; align-items: center; }
  .widget__product-price { font-size: 0.72rem; font-weight: 600; color: #d4af7a; }
  .widget__product-spec { font-size: 0.55rem; padding: 0.15rem 0.35rem; border-radius: 0.25rem; background: rgba(255, 255, 255, 0.06); color: #94a3b8; }
  .widget__product-link {
    width: 28px; height: 28px; border: none; border-radius: 0.35rem;
    background: rgba(212, 175, 120, 0.2); color: #d4af7a; font-size: 0.75rem;
  }

  .widget__guided-progress {
    display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.85rem;
    padding-bottom: 0.65rem; border-bottom: 1px solid rgba(212, 175, 120, 0.2);
  }
  .widget__guided-dot {
    width: 6px; height: 6px; border-radius: 50%; background: rgba(255, 255, 255, 0.15);
  }
  .widget__guided-dot--active { background: #d4af7a; box-shadow: 0 0 0 2px rgba(212, 175, 120, 0.25); }
  .widget__guided-dot--done { background: rgba(212, 175, 120, 0.5); }

  .widget__guided-title { font-size: 0.82rem; font-weight: 600; color: #f1f5f9; margin: 0 0 0.2rem; text-align: center; }
  .widget__guided-sub { font-size: 0.65rem; color: #64748b; margin: 0 0 0.75rem; text-align: center; }

  .widget__guided-list { display: grid; gap: 0.4rem; margin-bottom: 0.75rem; }
  .widget__guided-option {
    display: flex; align-items: center; gap: 0.55rem; padding: 0.5rem 0.65rem;
    border-radius: 0.55rem; border: 1px solid rgba(255, 255, 255, 0.06);
    background: rgba(255, 255, 255, 0.03); font-size: 0.72rem; color: #e2e8f0;
  }
  .widget__guided-icon {
    width: 22px; height: 22px; border-radius: 0.35rem;
    background: rgba(0, 212, 170, 0.15); flex-shrink: 0;
  }

  .widget__effects-grid {
    display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.35rem; margin-bottom: 0.75rem;
  }
  .widget__effect {
    position: relative; display: flex; flex-direction: column; align-items: center; gap: 0.25rem;
    padding: 0.4rem 0.2rem; border-radius: 0.45rem; border: 1px solid rgba(255, 255, 255, 0.06);
    background: rgba(255, 255, 255, 0.02); font-size: 0.52rem; color: #94a3b8; text-align: center;
  }
  .widget__effect--selected { border-color: rgba(212, 175, 120, 0.5); color: #e2e8f0; }
  .widget__effect-icon { width: 16px; height: 16px; border-radius: 50%; background: rgba(0, 212, 170, 0.2); }
  .widget__effect-check {
    position: absolute; top: 2px; right: 2px; width: 12px; height: 12px; border-radius: 50%;
    background: #d4af7a; color: #111; font-size: 0.5rem; display: flex; align-items: center; justify-content: center;
  }

  .widget__thc-list { display: grid; gap: 0.35rem; margin-bottom: 0.75rem; }
  .widget__thc-option {
    display: flex; align-items: center; gap: 0.55rem; padding: 0.45rem 0.55rem;
    border-radius: 0.5rem; border: 1px solid rgba(255, 255, 255, 0.06);
    background: rgba(255, 255, 255, 0.02);
  }
  .widget__thc-option--first { border-color: rgba(212, 175, 120, 0.35); background: rgba(212, 175, 120, 0.06); }
  .widget__thc-icon {
    width: 18px; height: calc(10px + var(--tier) * 3px); min-height: 10px;
    border-radius: 2px; background: rgba(212, 175, 120, 0.45); flex-shrink: 0; align-self: center;
  }
  .widget__thc-label { font-size: 0.68rem; font-weight: 600; color: #e2e8f0; }
  .widget__thc-range { font-size: 0.58rem; color: #94a3b8; }
  .widget__thc-count { font-size: 0.55rem; color: #64748b; }

  .widget__guided-nav {
    display: flex; justify-content: space-between; align-items: center;
    padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.06);
  }
  .widget__guided-chat {
    font-size: 0.65rem; padding: 0.35rem 0.65rem; border-radius: 0.4rem;
    border: 1px solid rgba(255, 255, 255, 0.1); background: transparent; color: #94a3b8;
  }
  .widget__guided-next {
    font-size: 0.68rem; padding: 0.4rem 1rem; border-radius: 0.4rem; border: none;
    background: #c9a06c; color: #111; font-weight: 600;
  }

  .widget__footer { padding: 0.75rem 1rem 0.85rem; border-top: 1px solid rgba(255, 255, 255, 0.06); }
  .widget__input {
    display: flex; align-items: center; justify-content: space-between; padding: 0.55rem 0.75rem;
    border-radius: 999px; border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03); font-size: 0.72rem; color: #64748b; margin-bottom: 0.45rem;
  }
  .widget__send { color: #d4af7a; font-size: 0.85rem; }
  .widget__disclaimer { margin: 0; font-size: 0.58rem; color: #64748b; text-align: center; line-height: 1.4; }
  .widget__learn { color: #d4af7a; text-decoration: underline; }
</style>
