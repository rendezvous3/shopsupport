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

<div class="relative overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-violet-700/50 to-transparent"></div>
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-pink-700/50 to-transparent"></div>
    <div class="absolute top-20 left-1/4 w-96 h-96 bg-violet-400/30 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
  </div>

  <!-- Grid pattern overlay -->
  <div class="absolute inset-0 bg-grid-white/[0.03] bg-[length:40px_40px]"></div>
  
  <div class="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
        <div class="text-center">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6">
            {headline}
          </h2>
          
          {#if description}
            <p class="text-xl sm:text-2xl text-violet-50 mb-10 max-w-2xl mx-auto leading-relaxed">
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
        </div>
      </div>

      <!-- Decorative cards around main CTA -->
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
          <div class="text-xl font-semibold text-white mb-1">⚡</div>
          <div class="text-sm text-violet-100">Fast Setup</div>
        </div>
        <div class="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
          <div class="text-xl font-semibold text-white mb-1">🔒</div>
          <div class="text-sm text-violet-100">Secure</div>
        </div>
        <div class="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
          <div class="text-xl font-semibold text-white mb-1">🚀</div>
          <div class="text-sm text-violet-100">Scalable</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Floating particles -->
  <div class="absolute top-10 right-32 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
  <div class="absolute bottom-32 left-20 w-1.5 h-1.5 bg-violet-300/60 rounded-full animate-ping" style="animation-delay: 1s;"></div>
  <div class="absolute top-1/2 right-1/4 w-1 h-1 bg-pink-300/60 rounded-full animate-ping" style="animation-delay: 2s;"></div>
</div>

