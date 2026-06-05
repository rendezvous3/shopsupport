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

  let messages1 = $state([
    { text: "Hi there! 👋", sender: 'ai', time: '10:24' },
    { text: "I need help with AI integration", sender: 'user', time: '10:25' },
    { text: "I'd be happy to help! What's your use case?", sender: 'ai', time: '10:25' }
  ]);

  let messages2 = $state([
    { text: "Welcome! How can I assist?", sender: 'ai', time: '10:26' },
    { text: "Tell me about your solutions", sender: 'user', time: '10:27' },
    { text: "We offer custom AI agents for various industries.", sender: 'ai', time: '10:27' }
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

<div class="relative overflow-hidden bg-black min-h-screen flex items-center">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-900/20 via-red-900/20 to-pink-900/20"></div>
    <div class="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s;"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/5 rounded-full blur-3xl"></div>
  </div>

  <!-- Grid pattern overlay -->
  <div class="absolute inset-0 bg-grid-white/[0.01] bg-[length:60px_60px]"></div>
  
  <!-- Animated lines -->
  <div class="absolute inset-0">
    <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent animate-pulse"></div>
    <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent animate-pulse" style="animation-delay: 1s;"></div>
  </div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left: Content -->
      <div class="relative z-10">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
          {headline}
        </h1>

        {#if subheadline}
          <p class="text-xl sm:text-2xl text-orange-100 mb-10 max-w-2xl leading-relaxed">
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

      <!-- Right: Floating Chatbot Panels -->
      <div class="relative lg:-mr-20 xl:-mr-32">
        <!-- Floating Chatbot 1 - Top Right -->
        <div class="absolute top-0 right-0 bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform hover:scale-105 transition-all duration-500 z-20 w-full max-w-sm" style="animation: float 6s ease-in-out infinite;">
          <!-- Panel Header -->
          <div class="bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-white/10">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <span class="text-white font-semibold">AI Assistant</span>
            </div>
            <div class="flex gap-2">
              <div class="w-2 h-2 bg-white/40 rounded-full"></div>
              <div class="w-2 h-2 bg-white/40 rounded-full"></div>
              <div class="w-2 h-2 bg-white/40 rounded-full"></div>
            </div>
          </div>

          <!-- Chat Messages -->
          <div class="p-6 space-y-4 min-h-[280px] max-h-[360px] overflow-y-auto bg-black/20">
            {#each messages1 as message}
              <div class="flex {message.sender === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="max-w-[80%] {message.sender === 'user' ? 'bg-orange-600/80 text-white' : 'bg-white/10 text-white backdrop-blur-sm'} rounded-2xl px-4 py-3 shadow-lg border border-white/10">
                  <p class="text-sm leading-relaxed text-white">{message.text}</p>
                  <p class="text-xs mt-1 opacity-60 text-white/70">{message.time}</p>
                </div>
              </div>
            {/each}

            <!-- Typing indicator -->
            <div class="flex justify-start">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-white/10">
                <div class="flex gap-1">
                  <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
                  <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
                  <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Input Area -->
          <div class="border-t border-white/10 p-4 bg-black/30 backdrop-blur-md">
            <div class="flex items-center gap-3">
              <div class="flex-1 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 text-sm text-white/60">
                Type your message...
              </div>
              <button 
                aria-label="Send message"
                class="w-10 h-10 bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-md rounded-xl flex items-center justify-center hover:from-orange-500 hover:to-red-500 transition-all cursor-pointer border border-white/10 shadow-lg"
              >
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Floating Chatbot 2 - Bottom Left -->
        <div class="absolute bottom-0 left-0 bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform hover:scale-105 transition-all duration-500 z-10 w-full max-w-sm mt-8" style="animation: float 8s ease-in-out infinite; animation-delay: 2s;">
          <!-- Panel Header -->
          <div class="bg-gradient-to-r from-pink-600/80 to-rose-600/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-white/10">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <span class="text-white font-semibold">Support Bot</span>
            </div>
            <div class="flex gap-2">
              <div class="w-2 h-2 bg-white/40 rounded-full"></div>
              <div class="w-2 h-2 bg-white/40 rounded-full"></div>
            </div>
          </div>

          <!-- Chat Messages -->
          <div class="p-6 space-y-4 min-h-[250px] max-h-[320px] overflow-y-auto bg-black/20">
            {#each messages2 as message}
              <div class="flex {message.sender === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="max-w-[80%] {message.sender === 'user' ? 'bg-pink-600/80 text-white' : 'bg-white/10 text-white backdrop-blur-sm'} rounded-2xl px-4 py-3 shadow-lg border border-white/10">
                  <p class="text-sm leading-relaxed text-white">{message.text}</p>
                  <p class="text-xs mt-1 opacity-60 text-white/70">{message.time}</p>
                </div>
              </div>
            {/each}

            <!-- Typing indicator -->
            <div class="flex justify-start">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-white/10">
                <div class="flex gap-1">
                  <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
                  <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
                  <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Input Area -->
          <div class="border-t border-white/10 p-4 bg-black/30 backdrop-blur-md">
            <div class="flex items-center gap-3">
              <div class="flex-1 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 text-sm text-white/60">
                Ask anything...
              </div>
              <button 
                aria-label="Send message"
                class="w-10 h-10 bg-gradient-to-r from-pink-600/80 to-rose-600/80 backdrop-blur-md rounded-xl flex items-center justify-center hover:from-pink-500 hover:to-rose-500 transition-all cursor-pointer border border-white/10 shadow-lg"
              >
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Glowing orbs -->
        <div class="absolute top-1/2 right-1/4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse -z-10"></div>
        <div class="absolute bottom-1/4 left-1/4 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl animate-pulse -z-10" style="animation-delay: 1s;"></div>
        
        <!-- Floating particles -->
        <div class="absolute top-20 right-32 w-2 h-2 bg-orange-400/60 rounded-full animate-ping"></div>
        <div class="absolute bottom-32 left-20 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-ping" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 right-1/2 w-1 h-1 bg-red-400/60 rounded-full animate-ping" style="animation-delay: 2s;"></div>
      </div>
    </div>
  </div>

  <!-- Bottom transition -->
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-white">
    <svg class="absolute -top-20 left-0 right-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,120 Q300,60 600,80 T1200,100 L1200,120 L0,120 Z" fill="white" />
    </svg>
    
    <div class="absolute -top-10 left-[15%] w-16 h-16 bg-orange-200/40 rounded-2xl blur-md transform rotate-12"></div>
    <div class="absolute -top-6 right-[25%] w-12 h-12 bg-pink-200/40 rounded-xl blur-md transform -rotate-12"></div>
  </div>
</div>

<style>
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(2deg);
    }
  }
</style>

