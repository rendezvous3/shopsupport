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

  let messages = $state([
    { text: "How can I help you?", sender: 'ai', time: '10:24' },
    { text: "I need AI integration", sender: 'user', time: '10:25' }
  ]);

  let codeSnippet = $state('const agent = new AIAgent();');
  let terminalCommand = $state('$ npm install @xtscale/ai');

  function handleCtaClick(cta: CTA | undefined) {
    if (!cta) return;
    
    if (cta.onclick) {
      cta.onclick();
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  }
</script>

<div class="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 min-h-screen flex items-center">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-20 left-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl"></div>
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
          <p class="text-xl sm:text-2xl text-indigo-100 mb-10 max-w-2xl leading-relaxed">
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

      <!-- Right: Multi-Panel Showcase -->
      <div class="relative lg:-mr-20 xl:-mr-32">
        <!-- Panel 1: Chat (Top Left) -->
        <div class="relative bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/30 overflow-hidden transform rotate-[-2deg] z-20 mb-4 w-full max-w-xs">
          <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 flex items-center gap-2">
            <div class="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-white font-semibold text-sm">Chat</span>
          </div>
          <div class="p-4 space-y-2 min-h-[150px] bg-gray-50">
            {#each messages as message}
              <div class="flex {message.sender === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="max-w-[80%] {message.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-900'} rounded-lg px-3 py-2 text-xs">
                  {message.text}
                </div>
              </div>
            {/each}
            <div class="flex justify-start">
              <div class="bg-gray-200 rounded-lg px-3 py-2">
                <div class="flex gap-1">
                  <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
                  <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
                  <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel 2: Code (Top Right) -->
        <div class="absolute top-0 right-0 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-xl border border-green-500/30 overflow-hidden transform rotate-[2deg] z-10 w-full max-w-xs">
          <div class="bg-gray-800 px-4 py-3 flex items-center gap-2">
            <div class="flex gap-1.5">
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
              <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span class="text-gray-400 text-xs font-mono ml-2">code.js</span>
          </div>
          <div class="p-4 bg-gray-950 min-h-[150px]">
            <pre class="text-xs font-mono text-green-400"><code>{codeSnippet}<span class="cursor-blink">|</span></code></pre>
          </div>
        </div>

        <!-- Panel 3: Terminal (Bottom Center) -->
        <div class="relative bg-black/95 backdrop-blur-xl rounded-xl shadow-xl border border-amber-500/30 overflow-hidden transform rotate-[-1deg] z-0 mt-8 w-full max-w-sm mx-auto">
          <div class="bg-gray-900 px-4 py-3 flex items-center gap-2">
            <div class="flex gap-1.5">
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
              <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span class="text-gray-400 text-xs font-mono ml-2">terminal</span>
          </div>
          <div class="p-4 bg-black min-h-[120px] font-mono text-xs">
            <div class="flex items-center gap-2 text-amber-400 mb-2">
              <span>$</span>
              <span class="text-gray-300">{terminalCommand}</span>
              <span class="cursor-blink text-amber-400">█</span>
            </div>
            <div class="text-green-400">✓ Installation complete</div>
          </div>
        </div>

        <!-- Connecting lines -->
        <div class="absolute top-1/2 left-1/4 w-px h-16 bg-gradient-to-b from-indigo-500/50 to-transparent -z-10"></div>
        <div class="absolute top-1/2 right-1/4 w-px h-16 bg-gradient-to-b from-purple-500/50 to-transparent -z-10"></div>
        <div class="absolute top-3/4 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent -z-10"></div>

        <!-- Decorative elements -->
        <div class="absolute -top-6 -right-6 w-24 h-24 bg-indigo-400/30 rounded-2xl blur-xl -z-10"></div>
        <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400/30 rounded-3xl blur-xl -z-10"></div>
        
        <!-- Floating particles -->
        <div class="absolute top-10 right-10 w-2 h-2 bg-indigo-400/60 rounded-full animate-ping"></div>
        <div class="absolute bottom-20 left-10 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-ping" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 left-1/2 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style="animation-delay: 2s;"></div>
      </div>
    </div>
  </div>

  <!-- Bottom transition -->
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-white">
    <svg class="absolute -top-20 left-0 right-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,120 Q300,60 600,80 T1200,100 L1200,120 L0,120 Z" fill="white" />
    </svg>
    
    <div class="absolute -top-10 left-[10%] w-16 h-16 bg-indigo-200/40 rounded-2xl blur-md transform rotate-12"></div>
    <div class="absolute -top-6 left-[30%] w-12 h-12 bg-purple-200/40 rounded-xl blur-md transform -rotate-12"></div>
    <div class="absolute -top-8 right-[20%] w-14 h-14 bg-pink-200/40 rounded-2xl blur-md transform rotate-6"></div>
  </div>
</div>

<style>
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .cursor-blink {
    animation: blink 1s infinite;
  }
</style>

