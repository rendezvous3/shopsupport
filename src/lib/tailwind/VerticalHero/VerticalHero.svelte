<script lang="ts">
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';
  import AgentWidget from '$lib/tailwind/AgentWidget/AgentWidget.svelte';
  import BrandName from '$lib/custom/BrandName/BrandName.svelte';
  import { verticals } from '$lib/data/verticals';

  let activeId = $state(verticals[0].id);
  const current = $derived(verticals.find((v) => v.id === activeId) ?? verticals[0]);
</script>

<section class="hero" id="chat-preview">
  <div class="orb orb--teal"></div>
  <div class="orb orb--blue"></div>
  <div class="dot-grid"></div>

  <div class="hero__inner">
    <div class="hero__text">
      <div class="hero__badge">
        <span class="badge-dot"></span>
        Guided selling · Live catalog · Compliance in the answer
      </div>

      <h1 class="hero__h1">Expert shopping AI agents for retail</h1>
      <p class="hero__sub">
        <BrandName variant="onDark" /> builds branded AI agents that reason over your live catalog, sell the way your
        best person sells, and stay inside the rules of your industry. Pick a vertical to see the agent at work.
      </p>

      <div class="hero__tabs" role="tablist" aria-label="Industries">
        {#each verticals as v}
          <button
            type="button"
            role="tab"
            aria-selected={activeId === v.id}
            class="hero__tab"
            class:hero__tab--active={activeId === v.id}
            onclick={() => (activeId = v.id)}
          >
            {v.label}
          </button>
        {/each}
      </div>

      <div class="hero__feature-tag">{current.agent}</div>
      <h2 class="hero__feature-title">{current.hero.title}</h2>
      <p class="hero__feature-desc">{current.hero.desc}</p>

      <ul class="hero__bullets">
        {#each current.hero.bullets as bullet}
          <li>{bullet}</li>
        {/each}
      </ul>

      <div class="hero__ctas">
        <ButtonMinimal label="Schedule a demo" variant="primary" size="md" href="/contact" arrow={true} />
        <ButtonMinimal label="See this industry" variant="outline" size="md" href={`/industries#${current.id}`} arrow={true} />
      </div>
    </div>

    <div class="hero__widget">
      {#key current.id}
        <AgentWidget scene={current.scene} />
      {/key}
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
