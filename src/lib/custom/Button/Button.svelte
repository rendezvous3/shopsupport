<script lang="ts">
  interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost' | 'outline' | 'gradient-primary' | 'gradient-secondary' | 'gradient-purple-blue' | 'gradient-emerald-teal' | 'gradient-orange-pink';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    hasBorder?: boolean;
    onclick?: () => void;
    onhover?: () => void;
  }

  let {
    label,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    fullWidth = false,
    hasBorder = false,
    onclick,
    onhover
  }: ButtonProps = $props();

  // Compute button classes
  let buttonClasses = $derived(
    [
      'btn',
      `btn--${variant}`,
      `btn--${size}`,
      disabled && 'btn--disabled',
      loading && 'btn--loading',
      fullWidth && 'btn--full-width',
      hasBorder && 'btn--has-border'
    ]
      .filter(Boolean)
      .join(' ')
  );

  function handleClick() {
    if (!disabled && !loading && onclick) {
      onclick();
    }
  }

  function handleMouseEnter() {
    if (!disabled && !loading && onhover) {
      onhover();
    }
  }
</script>

<button
  class={buttonClasses}
  disabled={disabled || loading}
  onclick={handleClick}
  onmouseenter={handleMouseEnter}
  aria-busy={loading}
  aria-disabled={disabled || loading}
>
  {#if loading}
    <span class="btn__spinner" aria-hidden="true"></span>
  {/if}
  <span class="btn__content">{label}</span>
</button>

<style>
  /* CSS Variables for theming */
  :global(:root) {
    /* Primary variant */
    --btn-primary-bg: #3b82f6;
    --btn-primary-hover: #2563eb;
    --btn-primary-active: #1d4ed8;
    --btn-primary-text: #ffffff;
    --btn-primary-shadow: rgba(59, 130, 246, 0.3);

    /* Secondary variant */
    --btn-secondary-bg: #6b7280;
    --btn-secondary-hover: #4b5563;
    --btn-secondary-active: #374151;
    --btn-secondary-text: #ffffff;
    --btn-secondary-shadow: rgba(107, 114, 128, 0.3);

    /* Danger variant */
    --btn-danger-bg: #ef4444;
    --btn-danger-hover: #dc2626;
    --btn-danger-active: #b91c1c;
    --btn-danger-text: #ffffff;
    --btn-danger-shadow: rgba(239, 68, 68, 0.3);

    /* Success variant */
    --btn-success-bg: #10b981;
    --btn-success-hover: #059669;
    --btn-success-active: #047857;
    --btn-success-text: #ffffff;
    --btn-success-shadow: rgba(16, 185, 129, 0.3);

    /* Ghost variant */
    --btn-ghost-bg: transparent;
    --btn-ghost-hover: rgba(0, 0, 0, 0.05);
    --btn-ghost-active: rgba(0, 0, 0, 0.1);
    --btn-ghost-text: #374151;
    --btn-ghost-border: #d1d5db;
    --btn-ghost-shadow: rgba(0, 0, 0, 0.1);

    /* Outline variant */
    --btn-outline-bg: transparent;
    --btn-outline-hover: rgba(59, 130, 246, 0.1);
    --btn-outline-active: rgba(59, 130, 246, 0.2);
    --btn-outline-text: #3b82f6;
    --btn-outline-border: #3b82f6;
    --btn-outline-shadow: rgba(59, 130, 246, 0.2);

    /* Gradient variants */
    --btn-gradient-primary-from: #4f46e5;
    --btn-gradient-primary-to: #7c3aed;
    --btn-gradient-secondary-from: #475569;
    --btn-gradient-secondary-to: #4b5563;
    --btn-gradient-purple-blue-from: #9333ea;
    --btn-gradient-purple-blue-to: #2563eb;
    --btn-gradient-emerald-teal-from: #10b981;
    --btn-gradient-emerald-teal-to: #14b8a6;
    --btn-gradient-orange-pink-from: #ea580c;
    --btn-gradient-orange-pink-to: #db2777;
  }

  /* Base button styles */
  button.btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 8px;
    border: none;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-out;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    line-height: 1.5;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  /* Border modifier */
  button.btn--has-border {
    border: 2px solid;
  }

  button.btn--has-border.btn--primary {
    border-color: var(--btn-primary-active);
  }

  button.btn--has-border.btn--secondary {
    border-color: var(--btn-secondary-active);
  }

  button.btn--has-border.btn--danger {
    border-color: var(--btn-danger-active);
  }

  button.btn--has-border.btn--success {
    border-color: var(--btn-success-active);
  }

  /* Size variants */
  button.btn--sm {
    padding: 8px 16px;
    font-size: 14px;
  }

  button.btn--md {
    padding: 10px 20px;
    font-size: 16px;
  }

  button.btn--lg {
    padding: 12px 24px;
    font-size: 18px;
  }

  /* Primary variant */
  button.btn--primary {
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-text);
  }

  button.btn--primary:hover:not(:disabled) {
    background-color: var(--btn-primary-hover);
    transform: scale(1.02);
    box-shadow: 0 4px 12px var(--btn-primary-shadow);
  }

  button.btn--primary:active:not(:disabled) {
    background-color: var(--btn-primary-active);
    transform: scale(0.98);
    box-shadow: 0 2px 6px var(--btn-primary-shadow);
  }

  /* Secondary variant */
  button.btn--secondary {
    background-color: var(--btn-secondary-bg);
    color: var(--btn-secondary-text);
  }

  button.btn--secondary:hover:not(:disabled) {
    background-color: var(--btn-secondary-hover);
    transform: scale(1.02);
    box-shadow: 0 4px 12px var(--btn-secondary-shadow);
  }

  button.btn--secondary:active:not(:disabled) {
    background-color: var(--btn-secondary-active);
    transform: scale(0.98);
    box-shadow: 0 2px 6px var(--btn-secondary-shadow);
  }

  /* Danger variant */
  button.btn--danger {
    background-color: var(--btn-danger-bg);
    color: var(--btn-danger-text);
  }

  button.btn--danger:hover:not(:disabled) {
    background-color: var(--btn-danger-hover);
    transform: scale(1.02);
    box-shadow: 0 4px 12px var(--btn-danger-shadow);
  }

  button.btn--danger:active:not(:disabled) {
    background-color: var(--btn-danger-active);
    transform: scale(0.98);
    box-shadow: 0 2px 6px var(--btn-danger-shadow);
  }

  /* Success variant */
  button.btn--success {
    background-color: var(--btn-success-bg);
    color: var(--btn-success-text);
  }

  button.btn--success:hover:not(:disabled) {
    background-color: var(--btn-success-hover);
    transform: scale(1.02);
    box-shadow: 0 4px 12px var(--btn-success-shadow);
  }

  button.btn--success:active:not(:disabled) {
    background-color: var(--btn-success-active);
    transform: scale(0.98);
    box-shadow: 0 2px 6px var(--btn-success-shadow);
  }

  /* Ghost variant */
  button.btn--ghost {
    background-color: var(--btn-ghost-bg);
    color: var(--btn-ghost-text);
    border: 1px solid var(--btn-ghost-border);
  }

  button.btn--ghost:hover:not(:disabled) {
    background-color: var(--btn-ghost-hover);
    transform: scale(1.02);
    box-shadow: 0 4px 12px var(--btn-ghost-shadow);
  }

  button.btn--ghost:active:not(:disabled) {
    background-color: var(--btn-ghost-active);
    transform: scale(0.98);
    box-shadow: 0 2px 6px var(--btn-ghost-shadow);
  }

  /* Outline variant */
  button.btn--outline {
    background-color: var(--btn-outline-bg);
    color: var(--btn-outline-text);
    border: 2px solid var(--btn-outline-border);
  }

  button.btn--outline:hover:not(:disabled) {
    background-color: var(--btn-outline-hover);
    transform: scale(1.02);
    box-shadow: 0 4px 12px var(--btn-outline-shadow);
  }

  button.btn--outline:active:not(:disabled) {
    background-color: var(--btn-outline-active);
    transform: scale(0.98);
    box-shadow: 0 2px 6px var(--btn-outline-shadow);
  }

  /* Disabled state */
  button.btn--disabled,
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  button.btn--disabled:hover,
  button:disabled:hover {
    transform: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  /* Loading state */
  button.btn--loading {
    cursor: wait;
  }

  button.btn--loading .btn__content {
    opacity: 0;
  }

  /* Loading spinner */
  .btn__spinner {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 16px;
    height: 16px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: btn-spin 0.6s linear infinite;
  }

  button.btn--sm .btn__spinner {
    width: 12px;
    height: 12px;
    border-width: 1.5px;
  }

  button.btn--lg .btn__spinner {
    width: 20px;
    height: 20px;
    border-width: 2.5px;
  }

  @keyframes btn-spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Full width */
  button.btn--full-width {
    width: 100%;
  }

  /* Focus state for accessibility */
  button.btn:focus-visible {
    outline: 2px solid var(--btn-primary-bg);
    outline-offset: 2px;
  }

  button.btn--secondary:focus-visible {
    outline-color: var(--btn-secondary-bg);
  }

  button.btn--danger:focus-visible {
    outline-color: var(--btn-danger-bg);
  }

  button.btn--success:focus-visible {
    outline-color: var(--btn-success-bg);
  }

  button.btn--ghost:focus-visible {
    outline-color: var(--btn-ghost-text);
  }

  button.btn--outline:focus-visible {
    outline-color: var(--btn-outline-border);
  }

  /* Gradient variants */
  button.btn--gradient-primary {
    background: linear-gradient(to right, var(--btn-gradient-primary-from), var(--btn-gradient-primary-to));
    color: white;
    border: none;
  }

  button.btn--gradient-primary:hover:not(:disabled) {
    background: linear-gradient(to right, #4338ca, #6d28d9);
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  }

  button.btn--gradient-primary:active:not(:disabled) {
    background: linear-gradient(to right, #3730a3, #5b21b6);
    transform: scale(0.98);
  }

  button.btn--gradient-secondary {
    background: linear-gradient(to right, var(--btn-gradient-secondary-from), var(--btn-gradient-secondary-to));
    color: white;
    border: none;
  }

  button.btn--gradient-secondary:hover:not(:disabled) {
    background: linear-gradient(to right, #334155, #374151);
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(71, 85, 105, 0.4);
  }

  button.btn--gradient-secondary:active:not(:disabled) {
    background: linear-gradient(to right, #1e293b, #1f2937);
    transform: scale(0.98);
  }

  button.btn--gradient-purple-blue {
    background: linear-gradient(to right, var(--btn-gradient-purple-blue-from), var(--btn-gradient-purple-blue-to));
    color: white;
    border: none;
  }

  button.btn--gradient-purple-blue:hover:not(:disabled) {
    background: linear-gradient(to right, #7e22ce, #1d4ed8);
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(147, 51, 234, 0.4);
  }

  button.btn--gradient-purple-blue:active:not(:disabled) {
    background: linear-gradient(to right, #6b21a8, #1e40af);
    transform: scale(0.98);
  }

  button.btn--gradient-emerald-teal {
    background: linear-gradient(to right, var(--btn-gradient-emerald-teal-from), var(--btn-gradient-emerald-teal-to));
    color: white;
    border: none;
  }

  button.btn--gradient-emerald-teal:hover:not(:disabled) {
    background: linear-gradient(to right, #059669, #0d9488);
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
  }

  button.btn--gradient-emerald-teal:active:not(:disabled) {
    background: linear-gradient(to right, #047857, #0f766e);
    transform: scale(0.98);
  }

  button.btn--gradient-orange-pink {
    background: linear-gradient(to right, var(--btn-gradient-orange-pink-from), var(--btn-gradient-orange-pink-to));
    color: white;
    border: none;
  }

  button.btn--gradient-orange-pink:hover:not(:disabled) {
    background: linear-gradient(to right, #c2410c, #be185d);
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(234, 88, 12, 0.4);
  }

  button.btn--gradient-orange-pink:active:not(:disabled) {
    background: linear-gradient(to right, #9a3412, #9f1239);
    transform: scale(0.98);
  }

  /* Border for gradient variants */
  button.btn--has-border.btn--gradient-primary {
    border-color: #4338ca;
  }

  button.btn--has-border.btn--gradient-secondary {
    border-color: #334155;
  }

  button.btn--has-border.btn--gradient-purple-blue {
    border-color: #7e22ce;
  }

  button.btn--has-border.btn--gradient-emerald-teal {
    border-color: #059669;
  }

  button.btn--has-border.btn--gradient-orange-pink {
    border-color: #c2410c;
  }
</style>
