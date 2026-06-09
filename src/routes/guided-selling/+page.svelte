<script lang="ts">
  import Navigation from '$lib/tailwind/Navigation/Navigation.svelte';
  import Footer from '$lib/tailwind/Footer/Footer.svelte';
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';
  import FeatureCardDark from '$lib/tailwind/FeatureCard/FeatureCardDark.svelte';
  import CardLayoutTimeline from '$lib/tailwind/CardLayouts/CardLayoutTimeline.svelte';
  import CTASectionVariation2 from '$lib/tailwind/CTASection/CTASectionVariation2.svelte';
</script>

<svelte:head>
  <title>ShopSupport.ai | Guided Selling AI for Dispensaries</title>
  <meta name="description" content="ShopSupport guides every shopper from browsing to checkout with a few taps. Catalog-aware guided selling that recommends only what is in stock and compliant." />
</svelte:head>

<Navigation dropdownTrigger="hover" />

<!-- Hero -->
<div class="bg-[#09090f] py-20 lg:py-28">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#00d4aa] mb-5">GUIDED SELLING</div>
    <h1 class="text-4xl sm:text-5xl text-white font-semibold tracking-tight leading-[1.1] mb-6">
      AI built to sell, not just answer
    </h1>
    <p class="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
      Most chatbots wait for a question. ShopSupport guides every shopper from "just browsing" to checkout in a few taps. No blank text box, no dead ends, no waiting for a budtender.
    </p>
    <div class="flex items-center justify-center gap-3 flex-wrap">
      <ButtonMinimal label="Schedule a demo" variant="primary" href="/contact" />
      <ButtonMinimal label="See it on your catalog" variant="outline" href="/contact" />
    </div>
  </div>
</div>

<!-- Why guided beats an open text box -->
<div class="bg-[#0a0a12] py-20 lg:py-28 border-t border-white/[0.04]">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-14">
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        Why guided beats an open text box
      </h2>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        An empty chat box asks the shopper to do the work. A guided flow does the work for them.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <!-- Open-ended -->
      <div class="bg-[#111117] border border-white/[0.06] rounded-2xl p-8">
        <div class="text-[11px] font-medium tracking-[0.12em] uppercase text-slate-500 mb-6">OPEN-ENDED CHAT</div>
        <ul class="space-y-4">
          {#each ['Shoppers have to know what to ask.', 'Vague queries return vague results.', 'Most people type one message, then leave.', 'No structure means no path to a product.'] as point}
            <li class="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
              <svg class="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              <span>{point}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Guided -->
      <div class="bg-[#111117] border border-[rgba(0,212,170,0.2)] rounded-2xl p-8">
        <div class="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00d4aa] mb-6">GUIDED SELLING</div>
        <ul class="space-y-4">
          {#each ['A few taps: category, effect, potency, budget.', 'Every option reflects what is in stock right now.', 'A ranked shortlist in 10 to 30 seconds.', 'Every shopper reaches a product, not a dead end.'] as point}
            <li class="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
              <svg class="w-4 h-4 text-[#00d4aa] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{point}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- How the guided flow works -->
<div class="bg-[#0d0d14] py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        How the guided flow works
      </h2>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Four steps from a tap to a shortlist your shopper can buy from
      </p>
    </div>

    <CardLayoutTimeline orientation="vertical">
      <snippet>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa] rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="1. Pick a category"
            description="Flower, pre-rolls, vapes, edibles, concentrates. One tap narrows the whole catalog."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 10h16M4 14h10M4 18h10" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa]/60 rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="2. Choose the effects you want"
            description="Calm, energized, focused, sleepy, uplifted. The shopper says how they want to feel, not what chemical to look for."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa] rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="3. Set potency and budget"
            description="Potency ranges scale to the category, and the flow only offers what your live inventory can actually fill."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>'
          />
        </div>
        <div class="timeline-card relative pl-20">
          <div class="absolute left-6 top-6 w-4 h-4 bg-[#00d4aa]/60 rounded-full border-4 border-[#0d0d14] shadow-lg"></div>
          <FeatureCardDark
            title="4. Get a ranked shortlist"
            description="A short, scored list of products. Every item is in stock and within purchase limits before it is ever shown."
            variant="default"
            icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>'
          />
        </div>
      </snippet>
    </CardLayoutTimeline>
  </div>
</div>

<!-- Smart enough to adapt -->
<div class="bg-[#09090f] py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        Smart enough to adapt
      </h2>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        The flow bends around your catalog and your rules, not the other way around
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
      <FeatureCardDark
        title="Catalog-aware options"
        description="The flow never offers a choice you cannot fulfill. If sleepy gummies under $30 are sold out, that path does not appear."
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2v1a2 2 0 002 2h.945M3.055 11A9.001 9.001 0 0021 12.001M3.055 11C3.02 11.328 3 11.662 3 12c0 .339.02.673.055 1.001" /></svg>'
      />
      <FeatureCardDark
        title="Category-specific steps"
        description="Edibles add a dosage step. Chocolates skip it, because they dose flexibly. The flow fits the product, not a rigid template."
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>'
      />
      <FeatureCardDark
        title="Compliance before checkout"
        description="Age verification, daily purchase limits, and state rules are enforced before any recommendation appears."
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
      />
    </div>
  </div>
</div>

<!-- Fast lane and conversation, one agent -->
<div class="bg-[#0a0a12] py-20 lg:py-28 border-t border-white/[0.04]">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl text-white mb-6 font-semibold tracking-tight leading-tight">
      Some shoppers tap. Some shoppers talk. Both convert.
    </h2>
    <p class="text-lg text-slate-400 leading-relaxed">
      Guided flow is the fast lane for shoppers who know roughly what they want. Natural conversation handles the ones with questions: "will this help me sleep?", "is this too strong for a first-timer?". Same catalog-aware agent behind both, so every answer is grounded in live inventory.
    </p>
  </div>
</div>

<!-- It sells, it does not just inform -->
<div class="bg-[#09090f] py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl text-white mb-4 font-semibold tracking-tight">
        It sells, it does not just inform
      </h2>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Every interaction is pointed at a purchase
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
      <FeatureCardDark
        title="Match scores"
        description="Every recommendation is ranked by fit, so the best option leads."
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>'
      />
      <FeatureCardDark
        title="Cross-sell in context"
        description="Complementary products and add-ons surface at the right moment, not as a popup."
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>'
      />
      <FeatureCardDark
        title="Deep-dive Q&A"
        description="Shoppers can ask about any single product without losing their place."
        icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
      />
    </div>

    <!-- Stat row -->
    <div class="flex items-center justify-center gap-8 sm:gap-16 flex-wrap max-w-3xl mx-auto">
      <div class="text-center">
        <div class="text-3xl sm:text-4xl font-semibold text-[#00d4aa] tracking-tight">+23%</div>
        <div class="text-sm text-slate-500 mt-1">AOV lift</div>
      </div>
      <div class="text-center">
        <div class="text-3xl sm:text-4xl font-semibold text-[#00d4aa] tracking-tight">94.7%</div>
        <div class="text-sm text-slate-500 mt-1">Match accuracy</div>
      </div>
      <div class="text-center">
        <div class="text-3xl sm:text-4xl font-semibold text-[#00d4aa] tracking-tight">&lt;200ms</div>
        <div class="text-sm text-slate-500 mt-1">Response time</div>
      </div>
    </div>
  </div>
</div>

<!-- CTA -->
<CTASectionVariation2
  headline="Turn browsers into buyers"
  description="Connect your POS and we will have a guided shopping assistant live on your catalog in weeks."
  colorScheme="dark"
  primaryCta={{ label: 'Schedule a demo', href: '/contact' }}
  secondaryCta={{ label: 'Contact us', href: '/contact' }}
/>

<Footer />
