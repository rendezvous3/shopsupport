<script lang="ts">
  import type { Snippet } from 'svelte';

  interface FeatureCardProps {
    icon?: Snippet | string;
    title: string;
    description: string;
    stat?: string | number;
    statLabel?: string;
    progress?: number; // 0-100
  }

  let {
    icon,
    title,
    description,
    stat,
    statLabel,
    progress
  }: FeatureCardProps = $props();

  let isVisible = $state(false);
  let displayedStat = $state(0);
  let cardElement: HTMLElement;

  $effect(() => {
    if (cardElement && !isVisible) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          isVisible = true;
          if (stat && typeof stat === 'number') {
            const target = stat;
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                displayedStat = target;
                clearInterval(timer);
              } else {
                displayedStat = Math.floor(current);
              }
            }, duration / steps);
          }
        }
      }, { threshold: 0.1 });
      
      observer.observe(cardElement);
      
      return () => {
        observer.disconnect();
      };
    }
  });
</script>

<div bind:this={cardElement} class="p-6 rounded-xl bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  {#if stat !== undefined}
    <div class="mb-4">
      <div class="text-3xl font-semibold text-purple-600 mb-1">
        {typeof stat === 'number' ? displayedStat : stat}
      </div>
      {#if statLabel}
        <div class="text-sm text-gray-500">{statLabel}</div>
      {/if}
      {#if progress !== undefined}
        <div class="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            class="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-1000"
            style="width: {isVisible ? progress : 0}%"
          ></div>
        </div>
      {/if}
    </div>
  {/if}

  {#if icon}
    <div class="mb-4 text-purple-600">
      {#if typeof icon === 'string'}
        {@html icon}
      {:else}
        {@render icon()}
      {/if}
    </div>
  {/if}
  
  <h3 class="text-xl font-semibold text-gray-900 mb-3">
    {title}
  </h3>
  
  <p class="text-gray-600 leading-relaxed text-sm">
    {description}
  </p>
</div>

