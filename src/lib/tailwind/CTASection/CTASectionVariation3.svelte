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

<div class="relative overflow-hidden bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
    <div class="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s;"></div>
  </div>

  <!-- Grid pattern overlay -->
  <div class="absolute inset-0 bg-grid-white/[0.01] bg-[length:60px_60px]"></div>
  
  <!-- Animated lines -->
  <div class="absolute inset-0">
    <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
    <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse" style="animation-delay: 1s;"></div>
  </div>
  
  <div class="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6">
        {headline}
      </h2>
      
      {#if description}
        <p class="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      {/if}
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        {#if primaryCta}
          <Button
            label={primaryCta.label}
            variant="gradient-purple-blue"
            size="lg"
            onclick={() => handleCtaClick(primaryCta)}
          />
        {/if}
        
        {#if secondaryCta}
          <Button
            label={secondaryCta.label}
            variant="outline"
            size="lg"
            onclick={() => handleCtaClick(secondaryCta)}
          />
        {/if}
      </div>

      <!-- Decorative elements around CTA -->
      <div class="mt-16 flex items-center justify-center gap-8 text-gray-600">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span class="text-sm">24/7 Support</span>
        </div>
        <div class="w-px h-6 bg-gray-700"></div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span class="text-sm">Fast Setup</span>
        </div>
        <div class="w-px h-6 bg-gray-700"></div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span class="text-sm">Secure</span>
        </div>
      </div>
    </div>
  </div>
</div>

