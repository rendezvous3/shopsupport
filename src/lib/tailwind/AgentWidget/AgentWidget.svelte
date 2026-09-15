<script lang="ts">
  /**
   * Data-driven simulation of the embedded shopping agent. One `scene` per
   * vertical: the same shell the AI Budtender widget uses, with the
   * conversation, the recommendation cards and the compliance note supplied by
   * the caller, so every industry page shows the agent in its own catalog.
   */
  export interface SceneProduct {
    brand: string;
    name: string;
    tags: string[];
    price: string;
    spec: string;
    tint?: 'a' | 'b' | 'c' | 'd';
  }
  export interface SceneTurn {
    role: 'user' | 'ai';
    text: string;
    entity?: string;
  }
  export interface Scene {
    agentName: string;
    turns: SceneTurn[];
    recLabel: string;
    products: SceneProduct[];
    compliance?: string;
    placeholder?: string;
    disclaimer?: string;
  }

  interface Props {
    scene: Scene;
    storeName?: string;
  }

  let { scene, storeName = 'Your Store' }: Props = $props();
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
        <span class="widget__title">{storeName} {scene.agentName}</span>
      </div>
      <span class="widget__close">×</span>
    </div>

    <div class="widget__body widget__body--conversation budtender-widget-scroll">
      {#each scene.turns as turn}
        {#if turn.role === 'user'}
          <div class="widget__user-msg">{turn.text}</div>
        {:else}
          <p class="widget__ai-msg widget__ai-msg--block">
            {turn.text}
            {#if turn.entity}
              <strong class="widget__entity">{turn.entity}</strong>.
            {/if}
          </p>
        {/if}
      {/each}

      <div class="widget__rec-label">{scene.recLabel}</div>
      {#each scene.products as product}
        <div class="widget__product">
          <div class="widget__product-img widget__product-img--{product.tint ?? 'a'}"></div>
          <div class="widget__product-body">
            <div class="widget__product-brand">{product.brand}</div>
            <div class="widget__product-name">{product.name}</div>
            <div class="widget__product-tags">
              {#each product.tags as tag}<span>{tag}</span>{/each}
            </div>
            <div class="widget__product-row">
              <span class="widget__product-price">{product.price}</span>
              <span class="widget__product-spec">{product.spec}</span>
            </div>
          </div>
          <button type="button" class="widget__product-link" aria-label="View product">↗</button>
        </div>
      {/each}

      {#if scene.compliance}
        <div class="widget__compliance widget__compliance--compact">
          <p>{scene.compliance}</p>
        </div>
      {/if}
    </div>

    <div class="widget__footer">
      <div class="widget__input">
        <span>{scene.placeholder ?? 'Ask about a product or describe what you need'}</span>
        <span class="widget__send">➤</span>
      </div>
      <p class="widget__disclaimer">{scene.disclaimer ?? 'AI assistant. Answers come from the live catalog and store policy.'}</p>
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
    color-scheme: dark;
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
    -webkit-overflow-scrolling: touch;
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.14) transparent;
    color-scheme: dark;
  }

  /* Safari ignores scoped pseudo-elements; keep scrollbar rules global */
  :global(.budtender-widget-scroll::-webkit-scrollbar) {
    width: 4px;
    -webkit-appearance: none;
    appearance: none;
  }

  :global(.budtender-widget-scroll::-webkit-scrollbar-track) {
    background: transparent;
    margin: 6px 0;
  }

  :global(.budtender-widget-scroll::-webkit-scrollbar-thumb) {
    background-color: rgba(255, 255, 255, 0.14);
    border-radius: 999px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  :global(.budtender-widget-scroll::-webkit-scrollbar-thumb:hover) {
    background-color: rgba(255, 255, 255, 0.24);
  }

  :global(.budtender-widget-scroll::-webkit-scrollbar-corner) {
    background: transparent;
  }

  .widget__body--guided { padding-bottom: 0.5rem; }
  .widget__body--conversation { max-height: 480px; }

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
  .widget__product-img {
    width: 52px;
    height: 52px;
    border-radius: 0.4rem;
    background: linear-gradient(145deg, #0c0c10, #14141a);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
  .widget__product-img--a { background: linear-gradient(145deg, #0b0b0f, #131318); }
  .widget__product-img--b { background: linear-gradient(145deg, #0a0a0e, #121217); }
  .widget__product-img--c { background: linear-gradient(145deg, #0c0c10, #15151b); }
  .widget__product-img--d { background: linear-gradient(145deg, #0b0b0f, #141419); }
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
