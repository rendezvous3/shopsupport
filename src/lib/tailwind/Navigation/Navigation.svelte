<script lang="ts">
  interface NavLink {
    label: string;
    href: string;
    description?: string;
    icon?: string;
    children?: NavLink[];
    megaMenu?: {
      columns?: Array<{
        title?: string;
        links: NavLink[];
      }>;
      description?: string;
      image?: string;
    };
  }

  interface NavigationProps {
    logo?: string;
    links?: NavLink[];
    ctaText?: string;
    onCtaClick?: () => void;
    dropdownTrigger?: 'click' | 'hover' | 'both';
  }

  let {
    logo = 'ShopSupport.ai',
    links = [
      {
        label: 'Platform',
        href: '/guided-selling',
        children: [
          {
            label: 'Guided Selling',
            href: '/guided-selling',
            icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>'
          },
          {
            label: 'Analytics',
            href: '/analytics',
            icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
          },
          {
            label: 'Shopping Assistant',
            href: '/services#shopping-assistant',
            icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>'
          },
          {
            label: 'Customer Service Agent (Soon)',
            href: '/services#customer-service-ai',
            icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>'
          }
        ]
      },
      {
        label: 'Dispensaries',
        href: '/industries'
      },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    ctaText = 'Schedule a demo',
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
      }, 150);
    }
  }

  function handleDropdownClick(linkLabel: string) {
    if (dropdownTrigger === 'click' || dropdownTrigger === 'both') {
      openDropdown = openDropdown === linkLabel ? null : linkLabel;
    }
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
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

<nav class="fixed top-0 left-0 right-0 z-50 bg-[#09090f]/96 backdrop-blur-md border-b border-white/[0.06] px-6">
  <div class="max-w-7xl mx-auto">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/">
          <img src="/logo/Transparent Logo.svg" alt="Shopsupport.ai" class="h-9 w-auto" />
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex md:items-center md:space-x-8">
        {#each links as link}
          <div class="relative dropdown-container" role="menuitem">
            {#if link.megaMenu || (link.children && link.children.length > 0)}
              <button
                class="text-slate-400 hover:text-white transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer"
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
                {#if link.megaMenu}
                  <!-- Mega Menu -->
                  <div
                    class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-6xl bg-[#111117] rounded-xl shadow-2xl border border-white/10 z-50 animate-fade-in overflow-hidden"
                    role="menu"
                    tabindex="-1"
                    onmouseenter={() => handleDropdownOpen(link.label)}
                    onmouseleave={() => handleDropdownClose(link.label)}
                  >
                    <div class="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                      {#each link.megaMenu.columns || [] as column}
                        <div>
                          {#if column.title}
                            <h3 class="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                              {column.title}
                            </h3>
                          {/if}
                          <ul class="space-y-1">
                            {#each column.links as child}
                              <li>
                                <a
                                  href={child.href}
                                  class="flex items-center gap-3 px-3 py-2 text-slate-400 hover:bg-white/5 hover:text-white rounded-md transition-colors duration-200 cursor-pointer"
                                >
                                  {#if child.icon}
                                    <span class="text-[#00d4aa] flex-shrink-0">
                                      {@html child.icon}
                                    </span>
                                  {/if}
                                  <span>{child.label}</span>
                                </a>
                              </li>
                            {/each}
                          </ul>
                        </div>
                      {/each}
                    </div>
                    {#if link.megaMenu.description}
                      <div class="border-t border-white/5 bg-[#0d0d14] px-8 py-4">
                        <p class="text-sm text-slate-500">{link.megaMenu.description}</p>
                      </div>
                    {/if}
                  </div>
                {:else if link.children && link.children.length > 0}
                  <!-- Regular Dropdown -->
                  <div
                    class="absolute top-full left-0 mt-2 w-56 bg-[#111117] rounded-lg shadow-xl border border-white/10 py-2 z-50 animate-fade-in"
                    role="menu"
                    tabindex="-1"
                    onmouseenter={() => handleDropdownOpen(link.label)}
                    onmouseleave={() => handleDropdownClose(link.label)}
                  >
                    {#each link.children as child}
                      <a
                        href={child.href}
                        class="flex items-center gap-3 px-4 py-2 text-slate-400 hover:bg-white/5 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        {#if child.icon}
                          <span class="text-[#00d4aa] flex-shrink-0">
                            {@html child.icon}
                          </span>
                        {/if}
                        <span>{child.label}</span>
                      </a>
                    {/each}
                  </div>
                {/if}
              {/if}
            {:else}
              <a
                href={link.href}
                class="text-slate-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            {/if}
          </div>
        {/each}
        <button
          onclick={handleCtaClick}
          class="border border-[#00d4aa] text-[#00d4aa] hover:bg-[#00d4aa] hover:text-[#09090f] rounded-full px-5 py-1.5 text-sm font-normal transition-all duration-200 cursor-pointer"
        >
          {ctaText}
        </button>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          onclick={toggleMobileMenu}
          class="text-slate-400 hover:text-white focus:outline-none transition-colors cursor-pointer"
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
    <div class="md:hidden border-t border-white/[0.06] bg-[#09090f]">
      <div class="px-4 pt-2 pb-4 space-y-2">
        {#each links as link}
          {#if link.megaMenu || (link.children && link.children.length > 0)}
            <div class="dropdown-container">
              <button
                class="w-full flex items-center justify-between px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors duration-200 font-medium cursor-pointer"
                onclick={(e) => {
                  e.stopPropagation();
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
                {#if link.megaMenu}
                  <!-- Mega Menu Mobile -->
                  <div class="pl-4 mt-1 space-y-3">
                    {#each link.megaMenu.columns || [] as column}
                      <div>
                        {#if column.title}
                          <h4 class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 px-3">
                            {column.title}
                          </h4>
                        {/if}
                        <div class="space-y-1">
                          {#each column.links as child}
                            <a
                              href={child.href}
                              class="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors duration-200 text-sm cursor-pointer"
                              onclick={(e) => {
                                e.stopPropagation();
                                mobileMenuOpen = false;
                              }}
                            >
                              {#if child.icon}
                                <span class="text-[#00d4aa] flex-shrink-0">
                                  {@html child.icon}
                                </span>
                              {/if}
                              <span>{child.label}</span>
                            </a>
                          {/each}
                        </div>
                      </div>
                    {/each}
                  </div>
                {:else if link.children && link.children.length > 0}
                  <!-- Regular Dropdown Mobile -->
                  <div class="pl-4 mt-1 space-y-1">
                    {#each link.children as child}
                      <a
                        href={child.href}
                        class="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors duration-200 text-sm cursor-pointer"
                        onclick={(e) => {
                          e.stopPropagation();
                          mobileMenuOpen = false;
                        }}
                      >
                        {#if child.icon}
                          <span class="text-[#00d4aa] flex-shrink-0">
                            {@html child.icon}
                          </span>
                        {/if}
                        <span>{child.label}</span>
                      </a>
                    {/each}
                  </div>
                {/if}
              {/if}
            </div>
          {:else}
            <a
              href={link.href}
              class="block px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors duration-200 font-medium"
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
          class="w-full mt-4 border border-[#00d4aa] text-[#00d4aa] hover:bg-[#00d4aa] hover:text-[#09090f] rounded-full px-5 py-2 text-sm font-normal transition-all duration-200 cursor-pointer"
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
