<script lang="ts">
  import type { Snippet } from 'svelte';

  interface IndustryCardProps {
    icon?: Snippet | string;
    title: string;
    description: string;
    href?: string;
    onclick?: () => void;
  }

  let {
    icon,
    title,
    description,
    href,
    onclick
  }: IndustryCardProps = $props();

  function handleClick() {
    if (onclick) {
      onclick();
    } else if (href) {
      window.location.href = href;
    }
  }
</script>

<a
  href={href || '#'}
  onclick={(e) => {
    if (onclick) {
      e.preventDefault();
      onclick();
    }
  }}
  class="block p-6 rounded-xl bg-white border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
>
  {#if icon}
    <div class="mb-4 text-purple-600 group-hover:text-purple-700 transition-colors">
      {#if typeof icon === 'string'}
        {@html icon}
      {:else}
        {@render icon()}
      {/if}
    </div>
  {/if}
  
  <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
    {title}
  </h3>
  
  <p class="text-gray-600 leading-relaxed">
    {description}
  </p>
  
  <div class="mt-4 text-purple-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
    Learn more
    <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </div>
</a>

