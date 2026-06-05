<script lang="ts">
  import SectionContainer from './SectionContainer.svelte';
  
  interface Props {
    variant?: 'default' | 'wide' | 'narrow';
    background?: 'white' | 'gray' | 'gradient';
    content?: string;
  }
  
  let {
    variant = 'default',
    background = 'white',
    content = '<div class="py-16"><h2 class="text-2xl font-semibold text-gray-900">Section Container</h2><p class="mt-4 text-gray-600">This is a section container.</p></div>'
  }: Props = $props();
</script>

<section class={background === 'white' ? 'bg-white' : background === 'gray' ? 'bg-gray-50' : 'bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50'}>
  <div class={variant === 'wide' ? 'max-w-7xl' : variant === 'default' ? 'max-w-6xl' : 'max-w-4xl'}>
    {@html content}
  </div>
</section>

