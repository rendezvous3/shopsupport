<script lang="ts">
  import Button from '$lib/tailwind/Button/Button.svelte';

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
  }

  let {
    headline,
    description,
    primaryCta,
    secondaryCta
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

<div class="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-600">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-20 left-20 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-400/20 rounded-full blur-3xl"></div>
  </div>

  <!-- Grid pattern overlay -->
  <div class="absolute inset-0 bg-grid-white/[0.03] bg-[length:40px_40px]"></div>
  
  <div class="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/30">
        <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span class="text-white text-sm font-semibold">Limited Time Offer</span>
      </div>

      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6">
        {headline}
      </h2>
      
      {#if description}
        <p class="text-xl sm:text-2xl text-orange-50 mb-12 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      {/if}
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        {#if primaryCta}
          <Button
            label={primaryCta.label}
            variant="hero-primary"
            size="lg"
            onclick={() => handleCtaClick(primaryCta)}
          />
        {/if}
        
        {#if secondaryCta}
          <Button
            label={secondaryCta.label}
            variant="hero-secondary"
            size="lg"
            onclick={() => handleCtaClick(secondaryCta)}
          />
        {/if}
      </div>

      <!-- Trust indicators -->
      <div class="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/90">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium">No Credit Card Required</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium">14-Day Free Trial</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium">Cancel Anytime</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Floating particles -->
  <div class="absolute top-20 right-32 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
  <div class="absolute bottom-32 left-20 w-1.5 h-1.5 bg-orange-300/60 rounded-full animate-ping" style="animation-delay: 1s;"></div>
  <div class="absolute top-1/2 right-1/4 w-1 h-1 bg-pink-300/60 rounded-full animate-ping" style="animation-delay: 2s;"></div>
</div>

