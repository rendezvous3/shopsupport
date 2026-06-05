<script lang="ts">
  import type { Snippet } from 'svelte';

  interface CardLayoutProps {
    children?: Snippet;
    columns?: 1 | 2 | 3 | 4;
    gap?: 'sm' | 'md' | 'lg';
    stagger?: boolean;
  }

  let {
    children,
    columns = 3,
    gap = 'md',
    stagger = true
  }: CardLayoutProps = $props();

  let gapClasses = $derived(
    gap === 'sm' ? 'gap-4' :
    gap === 'md' ? 'gap-6' :
    'gap-8'
  );

  let columnClasses = $derived(
    columns === 1 ? 'grid-cols-1' :
    columns === 2 ? 'grid-cols-1 md:grid-cols-2' :
    columns === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
    'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  );
</script>

<div class="grid {columnClasses} {gapClasses}">
  {#if children}
    {@render children()}
  {/if}
</div>

{#if stagger}
  <style>
    :global(.grid > *:nth-child(1)) { animation-delay: 0s; }
    :global(.grid > *:nth-child(2)) { animation-delay: 0.1s; }
    :global(.grid > *:nth-child(3)) { animation-delay: 0.2s; }
    :global(.grid > *:nth-child(4)) { animation-delay: 0.3s; }
    :global(.grid > *:nth-child(5)) { animation-delay: 0.4s; }
    :global(.grid > *:nth-child(6)) { animation-delay: 0.5s; }
    :global(.grid > *:nth-child(7)) { animation-delay: 0.6s; }
    :global(.grid > *:nth-child(8)) { animation-delay: 0.7s; }
    :global(.grid > *:nth-child(9)) { animation-delay: 0.8s; }

    :global(.grid > *) {
      opacity: 0;
      transform: translateY(20px);
      animation: stagger-fade-in 0.6s ease-out forwards;
    }

    @keyframes stagger-fade-in {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
{/if}

