<script lang="ts">
  interface FooterLink {
    label: string;
    href: string;
  }

  interface SocialLink {
    name: string;
    href: string;
    icon?: string;
  }

  interface FooterProps {
    links?: FooterLink[];
    socialLinks?: SocialLink[];
    copyright?: string;
  }

  let {
    links = [
      { label: 'Services', href: '/services' },
      { label: 'Industries', href: '/industries' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    socialLinks = [
      { name: 'LinkedIn', href: 'https://linkedin.com/company/xtscale' },
      { name: 'Twitter', href: 'https://twitter.com/xtscale' }
    ],
    copyright = `© ${new Date().getFullYear()} XT SCALE LLC. All rights reserved.`
  }: FooterProps = $props();
</script>

<footer class="bg-white border-t border-gray-200">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center">
      <!-- Logo -->
      <h3 class="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
        XT SCALE
      </h3>

      <!-- Links -->
      <nav class="flex flex-wrap items-center justify-center gap-6 mb-8">
        {#each links as link}
          <a
            href={link.href}
            class="text-gray-600 hover:text-purple-600 transition-colors text-sm font-medium"
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <!-- Social Links -->
      {#if socialLinks.length > 0}
        <div class="flex items-center justify-center gap-4 mb-8">
          {#each socialLinks as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-purple-600 transition-colors"
              aria-label={social.name}
            >
              {social.name}
            </a>
          {/each}
        </div>
      {/if}

      <!-- Copyright -->
      <p class="text-sm text-gray-400">
        {copyright}
      </p>
    </div>
  </div>
</footer>

