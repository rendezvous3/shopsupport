<script lang="ts">
  import FeatureCard from '../FeatureCard/FeatureCard.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <FeatureCard
    title="Feature 1"
    description="Enhanced grid with stagger animations."
    icon='<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    variant="default"
  />
  <FeatureCard
    title="Feature 2"
    description="Cards animate in sequence."
    icon='<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    variant="elevated"
  />
  <FeatureCard
    title="Feature 3"
    description="Smooth entrance effects."
    icon='<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    variant="outlined"
  />
  <FeatureCard
    title="Feature 4"
    description="Responsive grid layout."
    icon='<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    variant="default"
  />
  <FeatureCard
    title="Feature 5"
    description="Hover effects included."
    icon='<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    variant="elevated"
  />
  <FeatureCard
    title="Feature 6"
    description="Final card in grid."
    icon='<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    variant="outlined"
  />
</div>

<style>
  :global(.grid > *:nth-child(1)) { animation-delay: 0s; }
  :global(.grid > *:nth-child(2)) { animation-delay: 0.1s; }
  :global(.grid > *:nth-child(3)) { animation-delay: 0.2s; }
  :global(.grid > *:nth-child(4)) { animation-delay: 0.3s; }
  :global(.grid > *:nth-child(5)) { animation-delay: 0.4s; }
  :global(.grid > *:nth-child(6)) { animation-delay: 0.5s; }

  :global(.grid > *) {
    opacity: 0;
    transform: translateY(20px);
    animation: stagger-fade-in 0.6s ease-out forwards;
  }

  @keyframes stagger-fade-in {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

