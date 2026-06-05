<script lang="ts">
  import type { Snippet } from 'svelte';

  interface CardLayoutProps {
    children?: Snippet;
    orientation?: 'vertical' | 'horizontal';
  }

  let {
    children,
    orientation = 'vertical'
  }: CardLayoutProps = $props();
</script>

{#if orientation === 'vertical'}
  <div class="relative">
    <!-- Timeline line -->
    <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[rgba(0,212,170,0.25)] to-transparent"></div>
    
    <div class="space-y-12">
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
{:else}
  <div class="relative">
    <!-- Timeline line -->
    <div class="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[rgba(0,212,170,0.25)] to-transparent"></div>
    
    <div class="flex flex-wrap gap-8">
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
{/if}

<style>
  :global(.timeline-card) {
    position: relative;
    opacity: 0;
    transform: translateY(20px);
    animation: fade-in-up 0.6s ease-out forwards;
    margin-bottom: 3rem;
  }

  :global(.timeline-card:last-child) {
    margin-bottom: 0;
  }

  :global(.timeline-card:nth-child(1)) { animation-delay: 0.1s; }
  :global(.timeline-card:nth-child(2)) { animation-delay: 0.2s; }
  :global(.timeline-card:nth-child(3)) { animation-delay: 0.3s; }
  :global(.timeline-card:nth-child(4)) { animation-delay: 0.4s; }
  :global(.timeline-card:nth-child(5)) { animation-delay: 0.5s; }
  :global(.timeline-card:nth-child(6)) { animation-delay: 0.6s; }

  @keyframes fade-in-up {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

