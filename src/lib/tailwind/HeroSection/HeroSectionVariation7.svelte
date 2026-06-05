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

  let commandIndex = $state(0);
  let displayedCommand = $state('');
  let isTyping = $state(true);

  const commands = [
    { prompt: '$', text: 'npm install @xtscale/ai-agent', output: '✓ Installed 42 packages in 3.2s' },
    { prompt: '$', text: 'git commit -m "Add AI integration"', output: '✓ Committed changes to main branch' },
    { prompt: '$', text: 'xtscale deploy --env production', output: '✓ Deployed to production successfully' },
    { prompt: '$', text: 'xtscale agents:create', output: '✓ Created new AI agent: customer-support-bot' }
  ];

  function handleCtaClick(cta: CTA | undefined) {
    if (!cta) return;
    
    if (cta.onclick) {
      cta.onclick();
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  }

  // Command typing animation
  $effect(() => {
    const cmd = commands[commandIndex];
    let charIndex = 0;
    displayedCommand = '';

    const typeInterval = setInterval(() => {
      if (charIndex < cmd.text.length) {
        displayedCommand += cmd.text[charIndex];
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          isTyping = false;
          setTimeout(() => {
            displayedCommand = '';
            commandIndex = (commandIndex + 1) % commands.length;
            isTyping = true;
          }, 2000);
        }, 3000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  });
</script>

<div class="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen flex items-center">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s;"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl"></div>
  </div>

  <!-- Grid pattern overlay -->
  <div class="absolute inset-0 bg-grid-amber-500/[0.02] bg-[length:40px_40px]"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Content -->
      <div class="relative z-10">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
          {headline}
        </h1>

        {#if subheadline}
          <p class="text-xl sm:text-2xl text-amber-100 mb-10 max-w-2xl leading-relaxed">
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

      <!-- Right: Terminal Window -->
      <div class="relative lg:-mr-20 xl:-mr-32">
        <!-- Terminal Panel -->
        <div class="relative bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-500/30 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          <!-- Terminal Header -->
          <div class="bg-gray-900/90 px-6 py-4 flex items-center justify-between border-b border-amber-500/20">
            <div class="flex items-center gap-3">
              <div class="flex gap-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span class="text-gray-400 text-sm font-mono">terminal</span>
            </div>
            <div class="text-amber-400 text-xs font-mono">~/xtscale</div>
          </div>

          <!-- Terminal Content -->
          <div class="p-6 bg-black/50 min-h-[400px] max-h-[500px] overflow-y-auto font-mono text-sm">
            <!-- Command History -->
            <div class="space-y-3 text-gray-400 mb-4">
              <div class="flex items-start gap-2">
                <span class="text-amber-400">$</span>
                <span>npm install @xtscale/ai-agent</span>
              </div>
              <div class="text-green-400 ml-4">✓ Installed 42 packages in 3.2s</div>
            </div>

            <div class="space-y-3 text-gray-400 mb-4">
              <div class="flex items-start gap-2">
                <span class="text-amber-400">$</span>
                <span>git commit -m "Add AI integration"</span>
              </div>
              <div class="text-green-400 ml-4">✓ Committed changes to main branch</div>
            </div>

            <!-- Current Command -->
            <div class="flex items-start gap-2 text-gray-300">
              <span class="text-amber-400">{commands[commandIndex].prompt}</span>
              <span>{displayedCommand}<span class="cursor-blink text-amber-400">█</span></span>
            </div>

            <!-- Output (appears after typing) -->
            {#if !isTyping && displayedCommand === commands[commandIndex].text}
              <div class="text-green-400 ml-4 mt-2 animate-fade-in">{commands[commandIndex].output}</div>
            {/if}
          </div>
        </div>

        <!-- Decorative terminal elements -->
        <div class="absolute -top-6 -right-6 w-24 h-24 text-amber-500/20 text-6xl font-mono -z-10">$</div>
        <div class="absolute -bottom-6 -left-6 w-32 h-32 text-green-500/20 text-6xl font-mono -z-10">></div>
        
        <!-- Floating particles -->
        <div class="absolute top-10 right-10 w-2 h-2 bg-amber-400/60 rounded-full animate-ping"></div>
        <div class="absolute bottom-20 left-10 w-1.5 h-1.5 bg-green-400/60 rounded-full animate-ping" style="animation-delay: 1s;"></div>
      </div>
    </div>
  </div>

  <!-- Bottom transition -->
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-white">
    <svg class="absolute -top-20 left-0 right-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,120 Q300,60 600,80 T1200,100 L1200,120 L0,120 Z" fill="white" />
    </svg>
    
    <div class="absolute -top-10 left-[10%] w-16 h-16 bg-amber-200/40 rounded-2xl blur-md transform rotate-12"></div>
    <div class="absolute -top-6 right-[20%] w-12 h-12 bg-green-200/40 rounded-xl blur-md transform -rotate-12"></div>
  </div>
</div>

<style>
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .cursor-blink {
    animation: blink 1s infinite;
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
</style>

