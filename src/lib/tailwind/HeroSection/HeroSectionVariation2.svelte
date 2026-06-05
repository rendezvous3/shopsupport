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
    colorScheme?: 'emerald-teal' | 'dark';
  }

  let {
    headline,
    subheadline,
    primaryCta,
    secondaryCta,
    colorScheme = 'emerald-teal'
  }: HeroSectionProps = $props();

  let messages1 = $state([
    { text: "Welcome! How can I assist you?", sender: 'ai', time: '10:24' },
    { text: "I'm looking for AI solutions", sender: 'user', time: '10:25' },
    { text: "Great! What industry are you in?", sender: 'ai', time: '10:25' }
  ]);

  let messages2 = $state([
    { text: "Let's explore your options", sender: 'ai', time: '10:26' },
    { text: "E-commerce and customer service", sender: 'user', time: '10:27' },
    { text: "Perfect! I can help with that.", sender: 'ai', time: '10:27' }
  ]);

  function handleCtaClick(cta: CTA | undefined) {
    if (!cta) return;
    
    if (cta.onclick) {
      cta.onclick();
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  }
</script>

<div class="relative overflow-hidden {colorScheme === 'dark' ? 'bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900' : 'bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700'} min-h-screen flex items-center">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    {#if colorScheme === 'dark'}
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div class="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s;"></div>
    {:else}
      <div class="absolute top-10 left-10 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s;"></div>
      <div class="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-3xl"></div>
    {/if}
  </div>

  <!-- Grid pattern overlay -->
  <div class="absolute inset-0 {colorScheme === 'dark' ? 'bg-grid-white/[0.01]' : 'bg-grid-white/[0.04]'} bg-[length:50px_50px]"></div>
  
  <!-- Animated lines for dark theme -->
  {#if colorScheme === 'dark'}
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
      <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse" style="animation-delay: 1s;"></div>
    </div>
  {/if}
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
    <div class="text-center mb-16">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
        {headline}
      </h1>

      {#if subheadline}
        <p class="text-xl sm:text-2xl {colorScheme === 'dark' ? 'text-gray-300' : 'text-emerald-50'} mb-10 max-w-3xl mx-auto leading-relaxed">
          {subheadline}
        </p>
      {/if}

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        {#if primaryCta}
          <Button
            label={primaryCta.label}
            variant={colorScheme === 'dark' ? 'gradient-purple-blue' : 'hero-primary'}
            size="lg"
            onclick={() => handleCtaClick(primaryCta)}
          />
        {/if}
        
        {#if secondaryCta}
          <Button
            label={secondaryCta.label}
            variant={colorScheme === 'dark' ? 'outline' : 'hero-secondary'}
            size="lg"
            onclick={() => handleCtaClick(secondaryCta)}
          />
        {/if}
      </div>
    </div>

    <!-- Stacked Chatbot Panels -->
    <div class="relative flex items-center justify-center mt-20">
      <!-- Bottom Chatbot (larger, behind) -->
      <div class="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 overflow-hidden transform rotate-[-2deg] z-0 w-full max-w-md">
        <!-- Panel Header -->
        <div class="bg-gradient-to-r {colorScheme === 'dark' ? 'from-purple-600 to-blue-600' : 'from-emerald-600 to-teal-600'} px-6 py-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-white font-semibold">Support Agent</span>
          </div>
          <div class="flex gap-2">
            <div class="w-2 h-2 bg-white/30 rounded-full"></div>
            <div class="w-2 h-2 bg-white/30 rounded-full"></div>
            <div class="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
        </div>

        <!-- Chat Messages -->
        <div class="p-6 space-y-4 min-h-[400px] max-h-[550px] overflow-y-auto">
          {#each messages1 as message}
            <div class="flex {message.sender === 'user' ? 'justify-end' : 'justify-start'}">
              <div class="max-w-[80%] {message.sender === 'user' ? (colorScheme === 'dark' ? 'bg-purple-600 text-white' : 'bg-emerald-600 text-white') : 'bg-gray-100 text-gray-900'} rounded-2xl px-4 py-3 shadow-sm">
                <p class="text-sm leading-relaxed">{message.text}</p>
                <p class="text-xs mt-1 opacity-70">{message.time}</p>
              </div>
            </div>
          {/each}

          <!-- Typing indicator -->
          <div class="flex justify-start">
            <div class="bg-gray-100 rounded-2xl px-4 py-3 shadow-sm">
              <div class="flex gap-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="border-t border-gray-200 p-4 bg-gray-50">
          <div class="flex items-center gap-3">
            <div class="flex-1 bg-white rounded-xl px-4 py-3 border border-gray-200 text-sm text-gray-500">
              Type your message...
            </div>
            <button 
              aria-label="Send message"
              class="w-10 h-10 bg-gradient-to-r {colorScheme === 'dark' ? 'from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'} rounded-xl flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Top Chatbot (smaller, in front) -->
      <div class="absolute -top-8 right-1/4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 overflow-hidden transform rotate-[3deg] z-10 w-full max-w-sm hover:scale-105 transition-transform duration-300">
        <!-- Panel Header -->
        <div class="bg-gradient-to-r {colorScheme === 'dark' ? 'from-blue-600 to-indigo-600' : 'from-cyan-600 to-blue-600'} px-5 py-3 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-white font-semibold text-sm">Shopping assistant</span>
          </div>
          <div class="flex gap-1.5">
            <div class="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
          </div>
        </div>

        <!-- Chat Messages -->
        <div class="p-4 space-y-3 min-h-[400px] max-h-[480px] overflow-y-auto">
          {#each messages2 as message}
            <div class="flex {message.sender === 'user' ? 'justify-end' : 'justify-start'}">
              <div class="max-w-[85%] {message.sender === 'user' ? (colorScheme === 'dark' ? 'bg-blue-600 text-white' : 'bg-cyan-600 text-white') : 'bg-gray-100 text-gray-900'} rounded-xl px-3 py-2 shadow-sm">
                <p class="text-xs leading-relaxed">{message.text}</p>
                <p class="text-[10px] mt-1 opacity-70">{message.time}</p>
              </div>
            </div>
          {/each}

          <!-- Typing indicator -->
          <div class="flex justify-start">
            <div class="bg-gray-100 rounded-xl px-3 py-2 shadow-sm">
              <div class="flex gap-1">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="border-t border-gray-200 p-3 bg-gray-50">
          <div class="flex items-center gap-2">
            <div class="flex-1 bg-white rounded-lg px-3 py-2 border border-gray-200 text-xs text-gray-500">
              Ask anything...
            </div>
            <button 
              aria-label="Send message"
              class="w-8 h-8 bg-gradient-to-r {colorScheme === 'dark' ? 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' : 'from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700'} rounded-lg flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating particles -->
    <div class="absolute top-20 left-20 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
    <div class="absolute bottom-40 right-32 w-1.5 h-1.5 bg-emerald-300/60 rounded-full animate-ping" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/4 w-1 h-1 bg-cyan-300/60 rounded-full animate-ping" style="animation-delay: 2s;"></div>
  </div>

  <!-- Bottom transition -->
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-white">
    <svg class="absolute -top-20 left-0 right-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,120 Q300,60 600,80 T1200,100 L1200,120 L0,120 Z" fill="white" />
    </svg>
    
    <div class="absolute -top-10 left-[15%] w-16 h-16 {colorScheme === 'dark' ? 'bg-purple-200/40' : 'bg-emerald-200/40'} rounded-2xl blur-md transform rotate-12"></div>
    <div class="absolute -top-6 right-[25%] w-12 h-12 {colorScheme === 'dark' ? 'bg-blue-200/40' : 'bg-cyan-200/40'} rounded-xl blur-md transform -rotate-12"></div>
  </div>
</div>

