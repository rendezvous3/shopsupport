<script lang="ts">
  interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost' | 'outline' | 'hero-primary' | 'hero-secondary' | 'gradient-primary' | 'gradient-secondary' | 'gradient-purple-blue' | 'gradient-emerald-teal' | 'gradient-orange-pink';
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

  // Compute Tailwind classes
  let buttonClasses = $derived(
    [
      // Base classes - More rounded shape
      'relative inline-flex items-center justify-center gap-2',
      'rounded-3xl font-snas',
      'transition-all duration-200 ease-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'shadow-md',
      'cursor-pointer',
      'disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none',
      
      // Variant classes - Different color palette
      variant === 'primary' && [
        'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800',
        'text-white',
        'hover:scale-[1.02] active:scale-[0.98]',
        'hover:shadow-xl hover:shadow-indigo-500/40',
        'focus:ring-indigo-500'
      ].join(' '),
      
      variant === 'secondary' && [
        'bg-slate-600 hover:bg-slate-700 active:bg-slate-800',
        'text-white',
        'hover:scale-[1.02] active:scale-[0.98]',
        'hover:shadow-xl hover:shadow-slate-500/40',
        'focus:ring-slate-500'
      ].join(' '),
      
      variant === 'danger' && [
        'bg-rose-600 hover:bg-rose-700 active:bg-rose-800',
        'text-white',
        'hover:scale-[1.02] active:scale-[0.98]',
        'hover:shadow-xl hover:shadow-rose-500/40',
        'focus:ring-rose-500'
      ].join(' '),
      
      variant === 'success' && [
        'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800',
        'text-white',
        'hover:scale-[1.02] active:scale-[0.98]',
        'hover:shadow-xl hover:shadow-emerald-500/40',
        'focus:ring-emerald-500'
      ].join(' '),
      
      variant === 'ghost' && [
        'bg-transparent border-2 border-slate-300',
        'text-slate-700',
        'hover:bg-slate-50 active:bg-slate-100',
        'hover:border-slate-400',
        'hover:scale-[1.02] active:scale-[0.98]',
        'hover:shadow-lg',
        'focus:ring-slate-500'
      ].join(' '),
      
      variant === 'outline' && [
        'bg-transparent border-2 border-indigo-600',
        'text-indigo-600',
        'hover:bg-indigo-50 active:bg-indigo-100',
        'hover:border-indigo-700',
        'hover:scale-[1.02] active:scale-[0.98]',
        'hover:shadow-lg hover:shadow-indigo-500/30',
        'focus:ring-indigo-500'
      ].join(' '),
      
      variant === 'hero-primary' && [
        'bg-white text-purple-600',
        'rounded-xl font-semibold',
        'hover:bg-gray-50',
        'hover:scale-[1.02] active:scale-[0.98]',
        'shadow-xl hover:shadow-2xl',
        'transform hover:-translate-y-0.5',
        'focus:ring-purple-500'
      ].join(' '),
      
      variant === 'hero-secondary' && [
        'bg-white/10 backdrop-blur-md border-2 border-white/30 text-white',
        'rounded-xl font-semibold',
        'hover:bg-white/20',
        'hover:scale-[1.02] active:scale-[0.98]',
        'focus:ring-white/50'
      ].join(' '),
      
      // Gradient variants
      variant === 'gradient-primary' && [
        'bg-gradient-to-r from-indigo-600 to-purple-600',
        'text-white',
        'hover:from-indigo-700 hover:to-purple-700',
        'hover:scale-[1.02] active:scale-[0.98]',
        'hover:shadow-xl hover:shadow-indigo-500/40',
        'focus:ring-indigo-500'
      ].join(' '),
      
      variant === 'gradient-secondary' && [
        'bg-gradient-to-r from-slate-600 to-gray-600',
        'text-white',
        'hover:from-slate-700 hover:to-gray-700',
        'hover:scale-[1.02] active:scale-[0.98]',
        'hover:shadow-xl hover:shadow-slate-500/40',
        'focus:ring-slate-500'
      ].join(' '),
      
      variant === 'gradient-purple-blue' && [
        'bg-gradient-to-r from-purple-600 to-blue-600',
        'text-white',
        'hover:from-purple-700 hover:to-blue-700',
        'hover:scale-[1.02] active:scale-[0.98]',
        'hover:shadow-xl hover:shadow-purple-500/40',
        'focus:ring-purple-500'
      ].join(' '),
      
      variant === 'gradient-emerald-teal' && [
        'bg-gradient-to-r from-emerald-600 to-teal-600',
        'text-white',
        'hover:from-emerald-700 hover:to-teal-700',
        'hover:scale-[1.02] active:scale-[0.98]',
        'hover:shadow-xl hover:shadow-emerald-500/40',
        'focus:ring-emerald-500'
      ].join(' '),
      
      variant === 'gradient-orange-pink' && [
        'bg-gradient-to-r from-orange-600 to-pink-600',
        'text-white',
        'hover:from-orange-700 hover:to-pink-700',
        'hover:scale-[1.02] active:scale-[0.98]',
        'hover:shadow-xl hover:shadow-orange-500/40',
        'focus:ring-orange-500'
      ].join(' '),
      
      // Border classes (applied conditionally)
      hasBorder && variant !== 'ghost' && variant !== 'outline' && variant !== 'hero-secondary' && [
        'border-2',
        variant === 'primary' && 'border-indigo-700',
        variant === 'secondary' && 'border-slate-700',
        variant === 'danger' && 'border-rose-700',
        variant === 'success' && 'border-emerald-700',
        variant === 'hero-primary' && 'border-purple-300',
        variant === 'gradient-primary' && 'border-indigo-700',
        variant === 'gradient-secondary' && 'border-slate-700',
        variant === 'gradient-purple-blue' && 'border-purple-700',
        variant === 'gradient-emerald-teal' && 'border-emerald-700',
        variant === 'gradient-orange-pink' && 'border-orange-700'
      ].filter(Boolean).join(' '),
      
      // Size classes
      size === 'sm' && 'px-4 py-2 text-sm',
      size === 'md' && 'px-5 py-2.5 text-base',
      size === 'lg' && 'px-6 py-3 text-lg',
      
      // State classes
      loading && 'cursor-wait',
      fullWidth && 'w-full',
      
      // Disabled hover reset
      disabled && 'hover:scale-100 hover:shadow-sm'
    ]
      .filter(Boolean)
      .join(' ')
  );

  // Spinner size classes
  let spinnerClasses = $derived(
    [
      'absolute inset-0 m-auto',
      'animate-spin rounded-full border-2 border-current border-t-transparent',
      size === 'sm' && 'w-3 h-3 border-[1.5px]',
      size === 'md' && 'w-4 h-4',
      size === 'lg' && 'w-5 h-5 border-[2.5px]'
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
    <span class={spinnerClasses} aria-hidden="true"></span>
  {/if}
  <span class={loading ? 'opacity-0' : ''}>{label}</span>
</button>

