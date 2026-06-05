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
        title: 'Services',
        links: [
          { label: 'Agentic AI', href: '/services/agentic-ai' },
          { label: 'Multi-Agent RAG', href: '/services/rag' },
          { label: 'Custom Solutions', href: '/services/custom' }
        ]
      },
      {
        title: 'Industries',
        links: [
          { label: 'E-Commerce', href: '/industries/e-commerce' },
          { label: 'Legal', href: '/industries/law' },
          { label: 'Finance', href: '/industries/finance' }
        ]
      }
    ],
    contactInfo = {
      email: 'info@xtscale.com',
      // phone: '+1 (555) 123-4567'
    },
    socialLinks = [
      { name: 'LinkedIn', href: 'https://linkedin.com/company/xtscale' },
      { name: 'Twitter', href: 'https://twitter.com/xtscale' }
    ],
    copyright = `© ${new Date().getFullYear()} XT SCALE LLC. All rights reserved.`
  }: FooterProps = $props();
</script>

<footer class="relative overflow-hidden">
  <!-- Split background -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 w-1/2 bg-gray-900"></div>
    <div class="absolute inset-0 right-0 w-1/2 bg-gradient-to-r from-purple-900 to-blue-900"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Left: Brand and Contact -->
      <div class="text-white">
        <h3 class="text-xl font-semibold mb-4">
          XT SCALE
        </h3>
        <p class="text-gray-300 mb-6">
          Agentic AI business support
        </p>
        {#if contactInfo.email}
          <p class="text-sm text-gray-400 mb-2">
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

      <!-- Right: Links and Social -->
      <div class="grid grid-cols-2 gap-8">
        {#each columns as column}
          <div>
            <h4 class="text-white font-semibold mb-4">{column.title}</h4>
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
    </div>

    <!-- Bottom Bar -->
    <div class="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
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

