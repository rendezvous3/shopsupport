<script lang="ts">
  import type { Snippet } from 'svelte';

  interface CardLayoutProps {
    children?: Snippet;
    overlap?: 'sm' | 'md' | 'lg';
    rotation?: boolean;
  }

  let {
    children,
    overlap = 'md',
    rotation = true
  }: CardLayoutProps = $props();

  let overlapClasses = $derived(
    overlap === 'sm' ? '-ml-4' :
    overlap === 'md' ? '-ml-8' :
    '-ml-12'
  );
</script>

<div class="flex flex-wrap items-center justify-center py-8">
  {#if children}
    <div class="flex flex-wrap items-center justify-center">
      {@render children()}
    </div>
  {/if}
</div>

<style>
  :global(.overlapping-card) {
    position: relative;
    transition: all 0.3s ease;
  }

  :global(.overlapping-card:hover) {
    z-index: 10;
    transform: scale(1.05);
  }
</style>

