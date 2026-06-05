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
        label: 'Services',
        href: '/services',
        megaMenu: {
          columns: [
            {
              title: 'Business AI',
              links: [
                {
                  label: 'POS & Catalog Integration',
                  href: '/services#pos-integration',
                  icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
                },
                {
                  label: 'Shopping Assistant',
                  href: '/services#shopping-assistant',
                  icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>'
                },
                {
                  label: 'Customer Service Agent (Soon)',
                  href: '/services#customer-service-ai',
                  icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>'
                },
                {
                  label: 'Compliance-Aware Recommendations',
                  href: '/services#compliance-ai',
                  icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
                }
              ]
            },
            {
              title: 'Integrations',
              links: [
                {
                  label: 'Dutchie',
                  href: '/services#integrations',
                  icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>'
                },
                {
                  label: 'Treez',
                  href: '/services#integrations',
                  icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>'
                },
                {
                  label: 'Shopify',
                  href: '/services#integrations',
                  icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>'
                },
                {
                  label: 'WooCommerce',
                  href: '/services#integrations',
                  icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>'
                }
              ]
            },
            {
              title: 'Tech',
              links: [
                {
                  label: 'Agentic AI Systems',
                  href: '/services#tech',
                  icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>'
                },
                {
                  label: 'Multi-Agent RAG',
                  href: '/services#tech',
                  icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>'
                },
                {
                  label: 'Agent Orchestration',
                  href: '/services#tech',
                  icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
                },
                {
                  label: 'Production Monitoring',
                  href: '/services#tech',
                  icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
                }
              ]
            }
          ],
          description: 'POS-connected AI for dispensaries and wineries'
        }
      },
      {
        label: 'Industries',
        href: '/industries',
        children: [
          {
            label: 'Dispensaries',
            href: '/industries#dispensaries',
            icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>'
          },
          {
            label: 'Wineries',
            href: '/industries#wineries',
            icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
          }
        ]
      },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    ctaText = 'Start free trial',
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
