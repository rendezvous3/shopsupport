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

<div class="relative overflow-hidden bg-white">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>
  <div class="absolute inset-0 bg-grid-purple-500/[0.02] bg-[length:40px_40px]"></div>
  
  <div class="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Content -->
        <div class="relative z-10">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6">
            {headline}
          </h2>
          
          {#if description}
            <p class="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              {description}
            </p>
          {/if}
          
          <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
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
        </div>

        <!-- Right: Stats Cards -->
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
            <div class="text-3xl font-semibold text-purple-600 mb-2">99.9%</div>
            <div class="text-sm text-gray-600">Uptime</div>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
            <div class="text-3xl font-semibold text-blue-600 mb-2">10K+</div>
            <div class="text-sm text-gray-600">Users</div>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
            <div class="text-3xl font-semibold text-indigo-600 mb-2">50+</div>
            <div class="text-sm text-gray-600">Integrations</div>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
            <div class="text-3xl font-semibold text-pink-600 mb-2">24/7</div>
            <div class="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

