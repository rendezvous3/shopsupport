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
    { text: "Hello! I'm your AI assistant", sender: 'ai', time: '10:24' },
    { text: "Tell me about your services", sender: 'user', time: '10:25' }
  ]);

  let messages2 = $state([
    { text: "I can help with automation", sender: 'ai', time: '10:26' },
    { text: "What industries do you serve?", sender: 'user', time: '10:27' }
  ]);

  let messages3 = $state([
    { text: "Let's get started!", sender: 'ai', time: '10:28' },
    { text: "Schedule a consultation", sender: 'user', time: '10:29' }
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

<div class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 min-h-screen flex items-center">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl"></div>
  </div>

  <!-- Grid pattern overlay -->
  <div class="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Content -->
      <div class="relative z-10">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
          {headline}
        </h1>

        {#if subheadline}
          <p class="text-xl sm:text-2xl text-purple-100 mb-10 max-w-2xl leading-relaxed">
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

      <!-- Right: Cascading Chatbot Panels -->
      <div class="relative lg:-mr-20 xl:-mr-32">
        <!-- Chatbot 1 - Back -->
        <div class="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden transform rotate-[-4deg] z-0 mb-4 opacity-80">
          <!-- Panel Header -->
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-white font-semibold text-sm">Agent 1</span>
            </div>
          </div>

          <!-- Chat Messages -->
          <div class="p-4 space-y-3 min-h-[200px] max-h-[250px] overflow-y-auto">
            {#each messages1 as message}
              <div class="flex {message.sender === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="max-w-[85%] {message.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-900'} rounded-xl px-3 py-2 shadow-sm">
                  <p class="text-xs leading-relaxed">{message.text}</p>
                  <p class="text-[10px] mt-1 opacity-70">{message.time}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Chatbot 2 - Middle -->
        <div class="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 overflow-hidden transform rotate-[2deg] z-10 mb-4 ml-8 hover:scale-105 transition-transform duration-300">
          <!-- Panel Header -->
          <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-white font-semibold">Agent 2</span>
            </div>
            <div class="flex gap-2">
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>

          <!-- Chat Messages -->
          <div class="p-5 space-y-4 min-h-[250px] max-h-[320px] overflow-y-auto">
            {#each messages2 as message}
              <div class="flex {message.sender === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="max-w-[80%] {message.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-900'} rounded-2xl px-4 py-3 shadow-sm">
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
                class="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center hover:from-indigo-700 hover:to-purple-700 transition-colors cursor-pointer"
              >
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Chatbot 3 - Front -->
        <div class="relative bg-white backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 overflow-hidden transform rotate-[-1deg] z-20 ml-16 hover:scale-105 transition-transform duration-300">
          <!-- Panel Header -->
          <div class="bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-white font-semibold">Agent 3</span>
            </div>
            <div class="flex gap-2">
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>

          <!-- Chat Messages -->
          <div class="p-6 space-y-4 min-h-[300px] max-h-[400px] overflow-y-auto">
            {#each messages3 as message}
              <div class="flex {message.sender === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="max-w-[80%] {message.sender === 'user' ? 'bg-pink-600 text-white' : 'bg-gray-100 text-gray-900'} rounded-2xl px-4 py-3 shadow-sm">
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
                class="w-10 h-10 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl flex items-center justify-center hover:from-pink-700 hover:to-rose-700 transition-colors cursor-pointer"
              >
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Decorative blur elements -->
        <div class="absolute -top-8 -right-8 w-32 h-32 bg-purple-400/30 rounded-2xl blur-xl -z-10"></div>
        <div class="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-400/30 rounded-3xl blur-xl -z-10"></div>
        
        <!-- Floating particles -->
        <div class="absolute top-10 right-10 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
        <div class="absolute bottom-20 left-10 w-1.5 h-1.5 bg-purple-300/60 rounded-full animate-ping" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 right-20 w-1 h-1 bg-pink-300/60 rounded-full animate-ping" style="animation-delay: 2s;"></div>
      </div>
    </div>
  </div>

  <!-- Bottom transition -->
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-white">
    <svg class="absolute -top-20 left-0 right-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,120 Q300,60 600,80 T1200,100 L1200,120 L0,120 Z" fill="white" />
    </svg>
    
    <div class="absolute -top-10 left-[10%] w-16 h-16 bg-purple-200/40 rounded-2xl blur-md transform rotate-12"></div>
    <div class="absolute -top-6 left-[30%] w-12 h-12 bg-indigo-200/40 rounded-xl blur-md transform -rotate-12"></div>
    <div class="absolute -top-8 right-[20%] w-14 h-14 bg-pink-200/40 rounded-2xl blur-md transform rotate-6"></div>
  </div>
</div>

