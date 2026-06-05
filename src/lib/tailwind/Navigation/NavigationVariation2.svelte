<script lang="ts">
  interface NavLink {
    label: string;
    href: string;
    description?: string;
    icon?: string;
    children?: NavLink[];
  }

  interface NavigationProps {
    logo?: string;
    links?: NavLink[];
    ctaText?: string;
    onCtaClick?: () => void;
    dropdownTrigger?: 'click' | 'hover' | 'both';
  }

  let {
    logo = 'XT SCALE',
    links = [
      { label: 'Services', href: '/services' },
      { label: 'Industries', href: '/industries' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    ctaText = 'Get Started',
    onCtaClick,
    dropdownTrigger = 'hover'
  }: NavigationProps = $props();

  let mobileMenuOpen = $state(false);
  let openDropdown = $state<string | null>(null);
  let dropdownTimeout: ReturnType<typeof setTimeout> | null = null;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function handleCtaClick() {
    if (onCtaClick) {
      onCtaClick();
    } else {
      window.location.href = '/contact';
    }
  }

  function handleDropdownOpen(linkLabel: string) {
    if (dropdownTrigger === 'hover' || dropdownTrigger === 'both') {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
      openDropdown = linkLabel;
    }
  }

  function handleDropdownClose(linkLabel: string) {
    if (dropdownTrigger === 'hover' || dropdownTrigger === 'both') {
      dropdownTimeout = setTimeout(() => {
        if (openDropdown === linkLabel) {
          openDropdown = null;
        }
      }, 200);
    }
  }

  function handleDropdownClick(linkLabel: string) {
    if (dropdownTrigger === 'click' || dropdownTrigger === 'both') {
      openDropdown = openDropdown === linkLabel ? null : linkLabel;
    }
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.mega-menu-container')) {
      openDropdown = null;
    }
  }

  $effect(() => {
    if (openDropdown !== null) {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  });
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="text-xl font-semibold text-gray-900">
          {logo}
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex md:items-center md:space-x-8">
        {#each links as link}
          <div class="relative mega-menu-container">
            {#if link.children && link.children.length > 0}
              <button
                class="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium flex items-center gap-1"
                onmouseenter={() => handleDropdownOpen(link.label)}
                onmouseleave={() => handleDropdownClose(link.label)}
                onclick={() => handleDropdownClick(link.label)}
              >
                {link.label}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {#if openDropdown === link.label}
                <div
                  class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50 animate-fade-in mega-menu-panel"
                  onmouseenter={() => handleDropdownOpen(link.label)}
                  onmouseleave={() => handleDropdownClose(link.label)}
                >
                  <div class="grid grid-cols-2 gap-6 px-6">
                    {#each link.children as child}
                      <a
                        href={child.href}
                        class="group p-4 rounded-lg hover:bg-purple-50 transition-all duration-200"
                      >
                        {#if child.icon}
                          <div class="mb-3 text-purple-600 group-hover:scale-110 transition-transform">
                            {@html child.icon}
                          </div>
                        {/if}
                        <h4 class="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                          {child.label}
                        </h4>
                        {#if child.description}
                          <p class="text-sm text-gray-600">
                            {child.description}
                          </p>
                        {/if}
                      </a>
                    {/each}
                  </div>
                </div>
              {/if}
            {:else}
              <a
                href={link.href}
                class="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            {/if}
          </div>
        {/each}
        <button
          onclick={handleCtaClick}
          class="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
        >
          {ctaText}
        </button>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          onclick={toggleMobileMenu}
          class="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {#if mobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation -->
  {#if mobileMenuOpen}
    <div class="md:hidden border-t border-gray-200 bg-white backdrop-blur-md">
      <div class="px-4 pt-2 pb-4 space-y-2">
        {#each links as link}
          {#if link.children && link.children.length > 0}
            <div>
              <button
                class="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                onclick={() => {
                  const isOpen = openDropdown === link.label;
                  openDropdown = isOpen ? null : link.label;
                }}
              >
                {link.label}
                <svg class="w-4 h-4 transform {openDropdown === link.label ? 'rotate-180' : ''} transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {#if openDropdown === link.label}
                <div class="pl-4 mt-1 space-y-1">
                  {#each link.children as child}
                    <a
                      href={child.href}
                      class="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors duration-200 text-sm"
                      onclick={() => mobileMenuOpen = false}
                    >
                      {child.label}
                    </a>
                  {/each}
                </div>
              {/if}
            </div>
          {:else}
            <a
              href={link.href}
              class="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
              onclick={() => mobileMenuOpen = false}
            >
              {link.label}
            </a>
          {/if}
        {/each}
        <button
          onclick={() => {
            handleCtaClick();
            mobileMenuOpen = false;
          }}
          class="w-full mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg cursor-pointer"
        >
          {ctaText}
        </button>
      </div>
    </div>
  {/if}
</nav>

<!-- Spacer to prevent content from going under fixed nav -->
<div class="h-16"></div>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.2s ease-out;
  }
</style>

