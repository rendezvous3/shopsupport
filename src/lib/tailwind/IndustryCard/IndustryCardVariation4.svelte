<script lang="ts">
  import type { Snippet } from 'svelte';

  interface IndustryCardProps {
    icon?: Snippet | string;
    title: string;
    description: string;
    expandedContent?: string;
    href?: string;
    onclick?: () => void;
  }

  let {
    icon,
    title,
    description,
    expandedContent,
    href,
    onclick
  }: IndustryCardProps = $props();

  let isExpanded = $state(false);

  function handleClick() {
    isExpanded = !isExpanded;
  }

  function handleLinkClick() {
    if (onclick) {
      onclick();
    } else if (href) {
      window.location.href = href;
    }
  }
</script>

<div class="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-purple-300 transition-all duration-500 {isExpanded ? 'shadow-2xl' : 'hover:shadow-lg'}">
  <button
    onclick={handleClick}
    class="w-full text-left p-6 transition-all duration-500"
  >
    <div class="flex items-start gap-4">
      {#if icon}
        <div class="flex-shrink-0 text-purple-600 group-hover:scale-110 transition-transform">
          {#if typeof icon === 'string'}
            {@html icon}
          {:else}
            {@render icon()}
          {/if}
        </div>
      {/if}
      
      <div class="flex-1">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
          <svg 
            class="w-5 h-5 text-gray-400 transform transition-transform duration-500 {isExpanded ? 'rotate-180' : ''}"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        <p class="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </button>

  <!-- Expanded Content -->
  <div 
    class="overflow-hidden transition-all duration-500"
    style="max-height: {isExpanded ? '500px' : '0px'}"
  >
    <div class="px-6 pb-6 pt-0 border-t border-gray-100">
      {#if expandedContent}
        <p class="text-gray-600 leading-relaxed mt-4">
          {expandedContent}
        </p>
      {:else}
        <p class="text-gray-600 leading-relaxed mt-4">
          {description}
        </p>
      {/if}
      
      {#if href}
        <a
          href={href}
          onclick={(e) => {
            e.preventDefault();
            handleLinkClick();
          }}
          class="inline-flex items-center gap-2 mt-4 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
        >
          Learn more
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      {/if}
    </div>
  </div>
</div>

