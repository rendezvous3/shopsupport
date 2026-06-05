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

  let currentCodeIndex = $state(0);
  let displayedCode = $state('');
  let isTyping = $state(true);

  const codeSnippets = [
    `function createAIAgent() {
  const agent = new Agent({
    name: "Customer Support",
    model: "gpt-4",
    tools: ["search", "email"]
  });
  return agent;
}`,
    `async function processRequest(query) {
  const context = await retrieveContext(query);
  const response = await generateResponse(
    query, 
    context
  );
  return response;
}`,
    `const multiAgentSystem = {
  coordinator: new Coordinator(),
  agents: [
    new ResearchAgent(),
    new AnalysisAgent(),
    new ResponseAgent()
  ]
};`
  ];

  function handleCtaClick(cta: CTA | undefined) {
    if (!cta) return;
    
    if (cta.onclick) {
      cta.onclick();
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  }

  // Typing animation
  $effect(() => {
    const snippet = codeSnippets[currentCodeIndex];
    let charIndex = 0;
    displayedCode = '';

    const typeInterval = setInterval(() => {
      if (charIndex < snippet.length) {
        displayedCode += snippet[charIndex];
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          isTyping = false;
          setTimeout(() => {
            displayedCode = '';
            currentCodeIndex = (currentCodeIndex + 1) % codeSnippets.length;
            isTyping = true;
          }, 2000);
        }, 3000);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  });
</script>

<div class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex items-center">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl"></div>
  </div>

  <!-- Grid pattern overlay -->
  <div class="absolute inset-0 bg-grid-green-500/[0.02] bg-[length:40px_40px]"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Content -->
      <div class="relative z-10">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
          {headline}
        </h1>

        {#if subheadline}
          <p class="text-xl sm:text-2xl text-green-100 mb-10 max-w-2xl leading-relaxed">
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

      <!-- Right: Code Editor -->
      <div class="relative lg:-mr-20 xl:-mr-32">
        <!-- Code Editor Panel -->
        <div class="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-500/20 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          <!-- Editor Header -->
          <div class="bg-gray-800/90 px-6 py-4 flex items-center justify-between border-b border-green-500/20">
            <div class="flex items-center gap-3">
              <div class="flex gap-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span class="text-gray-400 text-sm font-mono">code.js</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-green-400 text-xs font-mono">AI</span>
            </div>
          </div>

          <!-- Code Content -->
          <div class="p-6 bg-gray-950/50 min-h-[400px] max-h-[500px] overflow-y-auto">
            <pre class="text-sm font-mono leading-relaxed"><code class="text-gray-300">{displayedCode}<span class="cursor-blink text-green-400">|</span></code></pre>
          </div>

          <!-- Terminal Footer -->
          <div class="bg-gray-800/90 px-6 py-3 border-t border-green-500/20 flex items-center gap-2">
            <div class="text-green-400 text-xs font-mono">$</div>
            <div class="text-gray-400 text-xs font-mono">Ready to deploy...</div>
          </div>
        </div>

        <!-- Decorative code brackets -->
        <div class="absolute -top-6 -right-6 w-24 h-24 text-green-500/20 text-6xl font-mono -z-10">{`{`}</div>
        <div class="absolute -bottom-6 -left-6 w-24 h-24 text-cyan-500/20 text-6xl font-mono -z-10">{`}`}</div>
        
        <!-- Floating particles -->
        <div class="absolute top-10 right-10 w-2 h-2 bg-green-400/60 rounded-full animate-ping"></div>
        <div class="absolute bottom-20 left-10 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-ping" style="animation-delay: 1s;"></div>
      </div>
    </div>
  </div>

  <!-- Bottom transition -->
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-white">
    <svg class="absolute -top-20 left-0 right-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,120 Q300,60 600,80 T1200,100 L1200,120 L0,120 Z" fill="white" />
    </svg>
    
    <div class="absolute -top-10 left-[10%] w-16 h-16 bg-green-200/40 rounded-2xl blur-md transform rotate-12"></div>
    <div class="absolute -top-6 right-[20%] w-12 h-12 bg-cyan-200/40 rounded-xl blur-md transform -rotate-12"></div>
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

