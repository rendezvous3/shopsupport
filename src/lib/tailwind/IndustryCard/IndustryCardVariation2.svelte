<script lang="ts">
  import type { Snippet } from 'svelte';

  interface IndustryCardProps {
    icon?: Snippet | string;
    title: string;
    description: string;
    href?: string;
    onclick?: () => void;
    backgroundImage?: string;
    backgroundGradient?: string;
  }

  let {
    icon,
    title,
    description,
    href,
    onclick,
    backgroundImage,
    backgroundGradient = 'from-purple-600 via-blue-600 to-indigo-700'
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
  class="group relative block min-h-[280px] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl hover:bg-white/8 hover:border-white/15 transition-all duration-500 hover:scale-105 overflow-hidden"
>
  <!-- Content -->
  <div class="relative h-full flex flex-col justify-between p-6">
    {#if icon}
      <div class="mt-2 mb-auto group-hover:scale-105 transition-transform duration-300" style="transform-origin: center;">
        {#if typeof icon === 'string'}
          {@html icon.replace('stroke="currentColor"', 'stroke="#00d4aa"').replace('fill="currentColor"', 'fill="#00d4aa"')}
        {:else}
          <div class="text-[#00d4aa]">
            {@render icon()}
          </div>
        {/if}
      </div>
    {/if}
    
    <div class="mt-auto">
      <h3 class="text-xl font-medium mb-2 text-white group-hover:translate-x-2 transition-transform duration-300">
        {title}
      </h3>
      
      <p class="text-gray-300 leading-relaxed mb-4 text-sm">
        {description}
      </p>
      
      <div class="flex items-center gap-2 text-gray-200 group-hover:translate-x-2 transition-transform duration-300">
        Learn more
        <svg class="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
</a>

