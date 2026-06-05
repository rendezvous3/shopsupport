<script lang="ts">
  import type { Snippet } from 'svelte';

  interface SectionContainerProps {
    variant?: 'default' | 'wide' | 'narrow';
    background?: 'white' | 'gray' | 'gradient';
    children?: Snippet;
  }

  let {
    variant = 'default',
    background = 'white',
    children
  }: SectionContainerProps = $props();

  let containerClasses = $derived(
    [
      'w-full',
      variant === 'wide' && 'max-w-7xl',
      variant === 'default' && 'max-w-6xl',
      variant === 'narrow' && 'max-w-4xl',
      'mx-auto',
      'px-4',
      'sm:px-6',
      'lg:px-8'
    ]
      .filter(Boolean)
      .join(' ')
  );

  let backgroundClasses = $derived(
    [
      background === 'white' && 'bg-white',
      background === 'gray' && 'bg-gray-50',
      background === 'gradient' && 'bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50'
    ]
      .filter(Boolean)
      .join(' ')
  );
</script>

<section class={backgroundClasses}>
  <div class={containerClasses}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</section>

