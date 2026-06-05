<script lang="ts">
  import type { Snippet } from 'svelte';

  interface FeatureCardProps {
    icon?: Snippet | string;
    title: string;
    description: string;
  }

  let {
    icon,
    title,
    description
  }: FeatureCardProps = $props();
</script>

<div class="group relative p-8 rounded-xl bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 hover:from-purple-100 hover:via-blue-100 hover:to-indigo-100 transition-all duration-300 hover:scale-105 cursor-pointer">
  {#if icon}
    <div class="mb-6 text-purple-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
      {#if typeof icon === 'string'}
        {@html icon}
      {:else}
        {@render icon()}
      {/if}
    </div>
  {/if}
  
  <h3 class="text-xl font-semibold text-gray-900 mb-2">
    {title}
  </h3>
  
  <p class="text-gray-600 leading-relaxed text-sm">
    {description}
  </p>
</div>

