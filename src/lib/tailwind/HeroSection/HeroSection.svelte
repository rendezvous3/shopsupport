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
    { text: "How can I help you today?", sender: 'ai', time: '10:24' },
    { text: "I need help with customer support automation", sender: 'user', time: '10:25' },
    { text: "I can help you set up an intelligent support system. What's your current volume?", sender: 'ai', time: '10:25' }
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

<div class="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 min-h-screen flex items-center">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-20 -left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 -right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
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

      <!-- Right: AI Chatbot Demo Panel - Breaking out of container -->
      <div class="relative lg:-mr-20 xl:-mr-32">
        <!-- Floating AI Chat Panel -->
        <div class="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          <!-- Panel Header -->
          <div class="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-white font-semibold">AI Assistant</span>
            </div>
            <div class="flex gap-2">
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>

          <!-- Chat Messages -->
          <div class="p-6 space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto">
            {#each messages as message}
              <div class="flex {message.sender === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="max-w-[80%] {message.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-900'} rounded-2xl px-4 py-3 shadow-sm">
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
                class="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center hover:from-purple-700 hover:to-blue-700 transition-colors cursor-pointer"
              >
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Decorative elements breaking out -->
        <div class="absolute -top-6 -right-6 w-24 h-24 bg-purple-400/30 rounded-2xl blur-xl -z-10"></div>
        <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/30 rounded-3xl blur-xl -z-10"></div>
        
        <!-- Floating particles -->
        <div class="absolute top-10 right-10 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
        <div class="absolute bottom-20 left-10 w-1.5 h-1.5 bg-purple-300/60 rounded-full animate-ping" style="animation-delay: 1s;"></div>
      </div>
    </div>
  </div>

  <!-- Bottom transition - elements breaking out -->
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-white">
    <!-- Wavy break-out effect -->
    <svg class="absolute -top-20 left-0 right-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,120 Q300,60 600,80 T1200,100 L1200,120 L0,120 Z" fill="white" />
    </svg>
    
    <!-- Floating elements -->
    <div class="absolute -top-10 left-[10%] w-16 h-16 bg-purple-200/40 rounded-2xl blur-md transform rotate-12"></div>
    <div class="absolute -top-6 left-[30%] w-12 h-12 bg-blue-200/40 rounded-xl blur-md transform -rotate-12"></div>
    <div class="absolute -top-8 right-[20%] w-14 h-14 bg-indigo-200/40 rounded-2xl blur-md transform rotate-6"></div>
  </div>
</div>
