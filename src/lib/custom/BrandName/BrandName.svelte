<script lang="ts">
  interface Props {
    /** White shopsupport + green .ai on dark backgrounds */
    variant?: 'default' | 'onDark';
  }

  let { variant = 'default' }: Props = $props();
</script>

<span class="brand" class:brand--on-dark={variant === 'onDark'}>
  shopsupport<span class="brand__ai">.ai</span>
</span>

<style>
  .brand {
    font-weight: inherit;
    color: inherit;
  }

  .brand__ai {
    color: var(--accent, #00d4aa);
  }

  .brand--on-dark {
    color: #ffffff;
  }

  .brand--on-dark .brand__ai {
    color: var(--accent, #00d4aa);
  }
</style>
