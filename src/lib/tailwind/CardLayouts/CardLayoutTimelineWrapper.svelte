<script lang="ts">
  import FeatureCard from '../FeatureCard/FeatureCard.svelte';
</script>

<div class="relative">
  <!-- Timeline line -->
  <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500"></div>
  
  <div class="space-y-12">
    <div class="timeline-card relative pl-20">
      <div class="absolute left-6 top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
      <FeatureCard
        title="Step 1"
        description="First step in the timeline with connecting lines."
        icon='<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
        variant="default"
      />
    </div>
    <div class="timeline-card relative pl-20">
      <div class="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
      <FeatureCard
        title="Step 2"
        description="Second step with staggered animation."
        icon='<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
        variant="elevated"
      />
    </div>
    <div class="timeline-card relative pl-20">
      <div class="absolute left-6 top-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
      <FeatureCard
        title="Step 3"
        description="Third step in the vertical timeline."
        icon='<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
        variant="outlined"
      />
    </div>
    <div class="timeline-card relative pl-20">
      <div class="absolute left-6 top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
      <FeatureCard
        title="Step 4"
        description="Final step with smooth transitions."
        icon='<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
        variant="default"
      />
    </div>
  </div>
</div>

<style>
  :global(.timeline-card) {
    opacity: 0;
    transform: translateY(20px);
    animation: fade-in-up 0.6s ease-out forwards;
  }

  :global(.timeline-card:nth-child(1)) { animation-delay: 0.1s; }
  :global(.timeline-card:nth-child(2)) { animation-delay: 0.2s; }
  :global(.timeline-card:nth-child(3)) { animation-delay: 0.3s; }
  :global(.timeline-card:nth-child(4)) { animation-delay: 0.4s; }

  @keyframes fade-in-up {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

