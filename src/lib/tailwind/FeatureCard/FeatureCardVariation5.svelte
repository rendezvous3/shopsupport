<script lang="ts">
  import type { Snippet } from 'svelte';

  interface FeatureCardProps {
    icon?: Snippet | string;
    title: string;
    description: string;
    highlight?: string;
  }

  let {
    icon,
    title,
    description,
    highlight
  }: FeatureCardProps = $props();
</script>

<div class="group relative p-6 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
  <!-- Decorative corner accent -->
  <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-16 -mt-16"></div>
  
  {#if icon}
    <div class="relative mb-4 text-white group-hover:rotate-12 transition-transform duration-300">
      {#if typeof icon === 'string'}
        {@html icon}
      {:else}
        {@render icon()}
      {/if}
    </div>
  {/if}
  
  {#if highlight}
    <div class="mb-2 text-sm font-semibold text-purple-200 uppercase tracking-wide">
      {highlight}
    </div>
  {/if}
  
  <h3 class="text-xl font-semibold mb-3">
    {title}
  </h3>
  
  <p class="text-purple-100 leading-relaxed">
    {description}
  </p>

  <!-- Arrow indicator -->
  <div class="mt-4 flex items-center gap-2 text-white/80 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
    <span class="text-sm font-semibold">Learn more</span>
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </div>
</div>

