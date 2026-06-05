<script lang="ts">
  interface CTA {
    label: string;
    href?: string;
    onclick?: () => void;
    variant?: 'primary' | 'secondary';
  }

  interface CTASectionProps {
    headline: string;
    description?: string;
    primaryCta?: CTA;
    secondaryCta?: CTA;
    variant?: 'default' | 'decorative' | 'minimal';
  }

  let {
    headline,
    description,
    primaryCta,
    secondaryCta,
    variant = 'default'
  }: CTASectionProps = $props();

  function handleCtaClick(cta: CTA | undefined) {
    if (!cta) return;
    
    if (cta.onclick) {
      cta.onclick();
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  }
</script>

<div class="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 overflow-hidden">
  <!-- Background decoration -->
  <div class="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
  
  <!-- Decorative elements for decorative variant -->
  {#if variant === 'decorative'}
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-3xl"></div>
    </div>
    
    <!-- Floating particles -->
    <div class="absolute top-20 right-32 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
    <div class="absolute bottom-32 left-20 w-1.5 h-1.5 bg-purple-300/60 rounded-full animate-ping" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-300/60 rounded-full animate-ping" style="animation-delay: 2s;"></div>
  {/if}
  
  <div class="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
    <div class="text-center">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4">
        {headline}
      </h2>
      
      {#if description}
        <p class="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
      {/if}
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        {#if primaryCta}
          <button
            onclick={() => handleCtaClick(primaryCta)}
            class="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 cursor-pointer"
          >
            {primaryCta.label}
          </button>
        {/if}
        
        {#if secondaryCta}
          <button
            onclick={() => handleCtaClick(secondaryCta)}
            class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200 cursor-pointer"
          >
            {secondaryCta.label}
          </button>
        {/if}
      </div>
      
      <!-- Optional chatbot preview for decorative variant -->
      {#if variant === 'decorative'}
        <div class="mt-12 flex justify-center">
          <div class="relative bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 max-w-xs">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-white text-sm font-semibold">AI Assistant</span>
            </div>
            <div class="text-white/80 text-xs">Ready to help you get started...</div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

