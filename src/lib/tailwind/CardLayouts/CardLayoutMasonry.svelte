<script lang="ts">
  import type { Snippet } from 'svelte';

  interface CardLayoutProps {
    children?: Snippet;
    columns?: 2 | 3 | 4;
    gap?: 'sm' | 'md' | 'lg';
  }

  let {
    children,
    columns = 3,
    gap = 'md'
  }: CardLayoutProps = $props();

  let gapClasses = $derived(
    gap === 'sm' ? 'gap-4' :
    gap === 'md' ? 'gap-6' :
    'gap-8'
  );

  let columnClasses = $derived(
    columns === 2 ? 'md:columns-2' :
    columns === 3 ? 'md:columns-3' :
    'md:columns-4'
  );
</script>

<div class="columns-1 {columnClasses} {gapClasses}">
  {#if children}
    {@render children()}
  {/if}
</div>

<style>
  :global(.columns-1 > *),
  :global(.md\:columns-2 > *),
  :global(.md\:columns-3 > *),
  :global(.md\:columns-4 > *) {
    break-inside: avoid;
    margin-bottom: 1.5rem;
    display: inline-block;
    width: 100%;
  }
</style>

