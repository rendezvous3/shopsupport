<script lang="ts">
  import type { Snippet } from 'svelte';

  interface CardLayoutProps {
    children?: Snippet;
    radius?: number;
    centerContent?: Snippet;
  }

  let {
    children,
    radius = 200,
    centerContent
  }: CardLayoutProps = $props();

</script>

<div class="relative w-full h-[600px] flex items-center justify-center">
  {#if children}
    <div class="relative w-full h-full">
      {#if centerContent}
        <div class="absolute inset-0 flex items-center justify-center z-10">
          {@render centerContent()}
        </div>
      {/if}
      <div class="relative w-full h-full">
        {@render children()}
      </div>
    </div>
  {/if}
</div>

<style>
  :global(.circular-card) {
    transition: all 0.3s ease;
  }

  :global(.circular-card:hover) {
    z-index: 10;
    transform: scale(1.1) !important;
  }
</style>

