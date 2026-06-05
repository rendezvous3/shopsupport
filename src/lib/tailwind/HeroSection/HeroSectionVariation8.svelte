<script lang="ts">
  import Button from '$lib/tailwind/Button/Button.svelte';

  interface CTA {
    label: string;
    href?: string;
    onclick?: () => void;
    variant?: 'primary' | 'secondary';
  }

  interface HeroSectionProps {
    headline: string;
    subheadline?: string;
    primaryCta?: CTA;
    secondaryCta?: CTA;
  }

  let {
    headline,
    subheadline,
    primaryCta,
    secondaryCta
  }: HeroSectionProps = $props();

  let chartData = $state([0, 0, 0, 0, 0, 0]);
  let barHeights = $state([0, 0, 0, 0, 0]);
  let isAnimating = $state(true);

  function handleCtaClick(cta: CTA | undefined) {
    if (!cta) return;
    
    if (cta.onclick) {
      cta.onclick();
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  }

  // Animate chart data
  $effect(() => {
    const targetData = [20, 45, 30, 60, 40, 55];
    const targetBars = [60, 80, 45, 90, 70];
    let progress = 0;

    const animateInterval = setInterval(() => {
      progress += 0.02;
      if (progress >= 1) {
        progress = 1;
        clearInterval(animateInterval);
        setTimeout(() => {
          isAnimating = false;
          setTimeout(() => {
            chartData = [0, 0, 0, 0, 0, 0];
            barHeights = [0, 0, 0, 0, 0];
            isAnimating = true;
            progress = 0;
          }, 2000);
        }, 3000);
      } else {
        chartData = targetData.map(val => val * progress);
        barHeights = targetBars.map(val => val * progress);
      }
    }, 16);

    return () => clearInterval(animateInterval);
  });

  function getBarHeight(value: number) {
    return `${value}%`;
  }

  function getLineY(index: number, value: number, max: number) {
    const chartHeight = 200;
    return chartHeight - (value / max) * chartHeight;
  }
</script>

<div class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 min-h-screen flex items-center">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-3xl"></div>
  </div>

  <!-- Grid pattern overlay -->
  <div class="absolute inset-0 bg-grid-white/[0.03] bg-[length:40px_40px]"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Content -->
      <div class="relative z-10">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
          {headline}
        </h1>

        {#if subheadline}
          <p class="text-xl sm:text-2xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
            {subheadline}
          </p>
        {/if}

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
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

      <!-- Right: Data Visualization Dashboard -->
      <div class="relative lg:-mr-20 xl:-mr-32">
        <!-- Dashboard Panel -->
        <div class="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          <!-- Dashboard Header -->
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-white font-semibold">Analytics Dashboard</span>
            </div>
            <div class="flex gap-2">
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>

          <!-- Dashboard Content -->
          <div class="p-6 bg-gray-50 min-h-[400px]">
            <!-- Line Chart -->
            <div class="mb-6">
              <h3 class="text-sm font-semibold text-gray-700 mb-3">Performance Metrics</h3>
              <div class="relative h-[200px] bg-white rounded-lg p-4 border border-gray-200">
                <svg class="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                  <!-- Grid lines -->
                  <line x1="0" y1="50" x2="300" y2="50" stroke="#e5e7eb" stroke-width="1" />
                  <line x1="0" y1="100" x2="300" y2="100" stroke="#e5e7eb" stroke-width="1" />
                  <line x1="0" y1="150" x2="300" y2="150" stroke="#e5e7eb" stroke-width="1" />
                  
                  <!-- Line chart path -->
                  <polyline
                    points="50,{getLineY(0, chartData[0], 60)} 100,{getLineY(1, chartData[1], 60)} 150,{getLineY(2, chartData[2], 60)} 200,{getLineY(3, chartData[3], 60)} 250,{getLineY(4, chartData[4], 60)}"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="3"
                    class="animate-draw-line"
                  />
                  
                  <!-- Data points -->
                  {#each chartData as value, index}
                    <circle
                      cx={50 + index * 50}
                      cy={getLineY(index, value, 60)}
                      r="4"
                      fill="#3b82f6"
                      class="animate-fade-in"
                      style="animation-delay: {index * 0.1}s"
                    />
                  {/each}
                </svg>
              </div>
            </div>

            <!-- Bar Chart -->
            <div>
              <h3 class="text-sm font-semibold text-gray-700 mb-3">Usage Statistics</h3>
              <div class="flex items-end justify-between gap-2 h-[120px] bg-white rounded-lg p-4 border border-gray-200">
                {#each barHeights as height, index}
                  <div class="flex-1 flex flex-col items-center">
                    <div
                      class="w-full bg-gradient-to-t from-purple-600 to-blue-500 rounded-t transition-all duration-300 ease-out"
                      style="height: {getBarHeight(height)}"
                    ></div>
                    <div class="text-xs text-gray-500 mt-2">Q{index + 1}</div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>

        <!-- Decorative chart elements -->
        <div class="absolute -top-6 -right-6 w-24 h-24 bg-blue-400/30 rounded-2xl blur-xl -z-10"></div>
        <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-400/30 rounded-3xl blur-xl -z-10"></div>
        
        <!-- Floating particles -->
        <div class="absolute top-10 right-10 w-2 h-2 bg-blue-400/60 rounded-full animate-ping"></div>
        <div class="absolute bottom-20 left-10 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-ping" style="animation-delay: 1s;"></div>
      </div>
    </div>
  </div>

  <!-- Bottom transition -->
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-white">
    <svg class="absolute -top-20 left-0 right-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,120 Q300,60 600,80 T1200,100 L1200,120 L0,120 Z" fill="white" />
    </svg>
    
    <div class="absolute -top-10 left-[10%] w-16 h-16 bg-blue-200/40 rounded-2xl blur-md transform rotate-12"></div>
    <div class="absolute -top-6 right-[20%] w-12 h-12 bg-purple-200/40 rounded-xl blur-md transform -rotate-12"></div>
  </div>
</div>

<style>
  @keyframes fade-in {
    from { opacity: 0; transform: scale(0); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes draw-line {
    from { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
    to { stroke-dasharray: 1000; stroke-dashoffset: 0; }
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }

  .animate-draw-line {
    animation: draw-line 2s ease-out forwards;
  }
</style>

