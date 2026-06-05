<script lang="ts">
  import type { Snippet } from 'svelte';

  interface FeatureCardDarkProps {
    icon?: Snippet | string;
    title: string;
    description: string;
    variant?: 'default' | 'elevated' | 'outlined';
    horizontal?: boolean;
  }

  let {
    icon,
    title,
    description,
    variant = 'default',
    horizontal = false
  }: FeatureCardDarkProps = $props();
</script>

<div class="card" class:card--horizontal={horizontal}>
  {#if horizontal}
    <div class="card-header-row">
      {#if icon}
        <div class="icon-wrapper">
          {#if typeof icon === 'string'}
            {@html icon}
          {:else}
            {@render icon()}
          {/if}
        </div>
      {/if}
      <h3 class="card-title">{title}</h3>
    </div>
    <p class="card-desc">{description}</p>
  {:else}
    {#if icon}
      <div class="icon-wrapper">
        {#if typeof icon === 'string'}
          {@html icon}
        {:else}
          {@render icon()}
        {/if}
      </div>
    {/if}
    <h3 class="card-title">{title}</h3>
    <p class="card-desc">{description}</p>
  {/if}
</div>

<style>
  .card {
    padding: 1.5rem;
    border-radius: 0.75rem;
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.04);
    transition: border-color 0.2s ease, background-color 0.2s ease;
    height: 100%;
    cursor: pointer;
  }

  .card:hover {
    border-color: rgba(0, 212, 170, 0.15);
    background-color: #141420;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: rgba(255, 255, 255, 0.04);
    border-radius: 4px;
    margin-bottom: 1rem;
    color: #00d4aa;
    flex-shrink: 0;
  }

  .icon-wrapper :global(svg) {
    width: 1.5rem;
    height: 1.5rem;
  }

  /* Horizontal layout: icon + title side-by-side */
  .card--horizontal .card-header-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
  }

  .card--horizontal .icon-wrapper {
    margin-bottom: 0;
  }

  .card-title {
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
  }

  .card--horizontal .card-title {
    margin-bottom: 0;
  }

  .card-desc {
    font-size: 14px;
    font-weight: 400;
    color: #64748b;
    line-height: 1.6;
  }
</style>
