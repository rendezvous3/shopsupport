<script lang="ts">
  interface Props {
    /** Lockup height (symbol + wordmark scale together) */
    height?: string;
    /** Extra left nudge (negative margin) beyond PNG padding compensation */
    offset?: string;
    /** Gradient wordmark on dark backgrounds, or solid white */
    variant?: 'gradient' | 'solid';
    class?: string;
  }

  let {
    height = '2.25rem',
    offset = '0.5rem',
    variant = 'gradient',
    class: className = ''
  }: Props = $props();
</script>

<div
  class="brand-lockup {className}"
  style:--lockup-height={height}
  style:--lockup-offset={offset}
>
  <img
    src="/logo-prism/png/shopsupport-symbol-128.png"
    srcset="/logo-prism/png/shopsupport-symbol-64.png 64w, /logo-prism/png/shopsupport-symbol-128.png 128w, /logo-prism/png/shopsupport-symbol-256.png 256w, /logo-prism/png/shopsupport-symbol-512.png 512w"
    sizes="80px"
    alt=""
    class="brand-lockup__symbol"
    width="128"
    height="128"
    aria-hidden="true"
    decoding="async"
  />
  <span class="brand-lockup__wordmark" aria-hidden="true">
    <span class="brand-lockup__name" class:brand-lockup__name--solid={variant === 'solid'}>
      shopsupport
    </span><span class="brand-lockup__ai">.ai</span>
  </span>
</div>

<style>
  .brand-lockup {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--lockup-height) * 0.06);
    height: var(--lockup-height);
    line-height: 1;
    /* PNG symbol has ~15% transparent left padding + extra optical left nudge */
    margin-left: calc(var(--lockup-height) * -0.16 - var(--lockup-offset, 0.5rem));
  }

  .brand-lockup__symbol {
    height: var(--lockup-height);
    width: auto;
    display: block;
    flex-shrink: 0;
  }

  .brand-lockup__wordmark {
    font-family: 'Sora', system-ui, sans-serif;
    font-weight: 600;
    font-size: calc(var(--lockup-height) * 0.58);
    letter-spacing: -0.035em;
    white-space: nowrap;
  }

  .brand-lockup__name {
    background: linear-gradient(90deg, #ffffff 0%, #7fffe8 55%, #45c8ff 92%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .brand-lockup__name--solid {
    background: none;
    color: #ffffff;
    -webkit-text-fill-color: #ffffff;
  }

  .brand-lockup__ai {
    color: var(--accent, #00d4aa);
  }
</style>
