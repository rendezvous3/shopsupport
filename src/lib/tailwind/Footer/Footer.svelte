<script lang="ts">
  interface FooterLink {
    label: string;
    href: string;
  }

  interface FooterColumn {
    title: string;
    links: FooterLink[];
  }

  interface SocialLink {
    name: string;
    href: string;
    icon?: string;
  }

  interface FooterProps {
    columns?: FooterColumn[];
    contactInfo?: {
      email?: string;
      phone?: string;
    };
    socialLinks?: SocialLink[];
    copyright?: string;
  }

  let {
    columns = [
      {
        title: 'Platform',
        links: [
          { label: 'Guided Selling', href: '/guided-selling' },
          { label: 'Analytics', href: '/analytics' },
          { label: 'POS Integration', href: '/services#pos-integration' },
          { label: 'Shopping Assistant', href: '/services#shopping-assistant' }
        ]
      },
      {
        title: 'Industries',
        links: [
          { label: 'Dispensaries', href: '/industries#dispensaries' },
          { label: 'Customer Service (Soon)', href: '/industries#customer-service' }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' }
        ]
      }
    ],
    contactInfo = {
      email: 'info@shopsupport.ai',
      phone: '(630) 863-2240'
    },
    socialLinks = [
      { name: 'LinkedIn', href: 'https://linkedin.com/company/shopsupport' },
      { name: 'Twitter', href: 'https://twitter.com/shopsupport' }
    ],
    copyright = `© ${new Date().getFullYear()} ShopSupport.ai. All rights reserved.`
  }: FooterProps = $props();
</script>

<footer class="bg-[#09090f] text-gray-300 border-t border-white/[0.06] px-6">
  <div class="max-w-7xl mx-auto py-12 lg:py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
      <!-- Brand Column -->
      <div class="lg:col-span-1 flex flex-col -mt-6 lg:-mt-8">
        <div class="mb-2">
          <img src="/logo/Transparent Logo.svg" alt="Shopsupport.ai" class="h-9 w-auto" />
        </div>
        <p class="text-gray-400 mb-2">
          Agentic AI for regulated retail commerce
        </p>
        <p class="text-sm text-gray-500 mb-4 max-w-xs">
          POS-connected shopping assistants for dispensaries.
        </p>
        {#if contactInfo.email}
          <p class="text-sm text-gray-400 mb-1">
            <a href="mailto:{contactInfo.email}" class="hover:text-white transition-colors">
              {contactInfo.email}
            </a>
          </p>
        {/if}
        {#if contactInfo.phone}
          <p class="text-sm text-gray-400">
            <a href="tel:{contactInfo.phone}" class="hover:text-white transition-colors">
              {contactInfo.phone}
            </a>
          </p>
        {/if}
      </div>

      <!-- Link Columns -->
      {#each columns as column}
        <div>
          <h4 class="text-white font-semibold mb-4 mt-0">{column.title}</h4>
          <ul class="space-y-2">
            {#each column.links as link}
              <li>
                <a
                  href={link.href}
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- Bottom Bar -->
    <div class="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center">
      <p class="text-sm text-gray-400">
        {copyright}
      </p>
      
      {#if socialLinks.length > 0}
        <div class="mt-4 sm:mt-0 flex space-x-6">
          {#each socialLinks as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors"
              aria-label={social.name}
            >
              {social.name}
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</footer>

