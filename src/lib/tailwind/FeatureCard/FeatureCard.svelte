<script lang="ts">
  import type { Snippet } from 'svelte';

  interface FeatureCardProps {
    icon?: Snippet | string;
    title: string;
    description: string;
    variant?: 'default' | 'elevated' | 'outlined';
  }

  let {
    icon,
    title,
    description,
    variant = 'default'
  }: FeatureCardProps = $props();

  let cardClasses = $derived(
    [
      'p-6',
      'rounded-xl',
      'transition-all',
      'duration-300',
      'h-full',
      'cursor-pointer',
      variant === 'default' && 'bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg',
      variant === 'elevated' && 'bg-white shadow-lg hover:shadow-xl border border-gray-100',
      variant === 'outlined' && 'bg-transparent border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50/50',
      'hover:-translate-y-1'
    ]
      .filter(Boolean)
      .join(' ')
  );
</script>

<div class={cardClasses}>
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
  
  <p class="text-gray-600 leading-relaxed">
    {description}
  </p>
</div>

