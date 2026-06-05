<script lang="ts">
  interface ButtonMinimalProps {
    label: string;
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    arrow?: boolean;
  }

  let {
    label,
    variant = 'primary',
    size = 'md',
    href,
    arrow = false
  }: ButtonMinimalProps = $props();
</script>

{#if href}
  <a
    {href}
    class="btn-minimal btn-minimal--{variant} btn-minimal--{size}"
  >
    <span class="btn-minimal__label">{label}</span>
    {#if arrow}
      <span class="btn-minimal__arrow">→</span>
    {/if}
  </a>
{:else}
  <button class="btn-minimal btn-minimal--{variant} btn-minimal--{size}">
    <span class="btn-minimal__label">{label}</span>
    {#if arrow}
      <span class="btn-minimal__arrow">→</span>
    {/if}
  </button>
{/if}

<style>
  .btn-minimal {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-radius: 9999px;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    border: none;
    font-family: inherit;
  }

  .btn-minimal--sm {
    padding: 8px 18px;
  }

  .btn-minimal--md {
    padding: 10px 22px;
  }

  .btn-minimal--lg {
    padding: 15px 34px;
    font-size: 14px;
  }

  /* Primary: teal fill, dark text */
  .btn-minimal--primary {
    background-color: #00d4aa;
    color: #09090f;
  }

  .btn-minimal--primary:hover {
    background-color: #00bfa0;
  }

  /* Outline: transparent, 1px border, white text */
  .btn-minimal--outline {
    background-color: transparent;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.19);
  }

  .btn-minimal--outline:hover {
    border-color: rgba(255, 255, 255, 0.35);
    background-color: rgba(255, 255, 255, 0.04);
  }

  /* Ghost: no border, dim white, hover teal tint */
  .btn-minimal--ghost {
    background-color: transparent;
    color: rgba(255, 255, 255, 0.6);
    border: none;
  }

  .btn-minimal--ghost:hover {
    color: #00d4aa;
    background-color: rgba(0, 212, 170, 0.06);
  }

  .btn-minimal__arrow {
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .btn-minimal:hover .btn-minimal__arrow {
    transform: translateX(4px);
  }
</style>
