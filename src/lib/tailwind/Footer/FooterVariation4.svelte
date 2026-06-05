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
    newsletterPlaceholder?: string;
    newsletterButtonText?: string;
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
    copyright = `© ${new Date().getFullYear()} XT SCALE LLC. All rights reserved.`,
    newsletterPlaceholder = 'Enter your email',
    newsletterButtonText = 'Subscribe'
  }: FooterProps = $props();

  let email = $state('');

  function handleNewsletterSubmit() {
    // Handle newsletter submission
    console.log('Newsletter signup:', email);
    email = '';
  }
</script>

<footer class="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
  <!-- Background decoration -->
  <div class="absolute inset-0 bg-grid-white/[0.05] bg-[length:40px_40px]"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Brand Column -->
      <div>
        <h3 class="text-xl font-semibold text-white mb-4">
          XT SCALE
        </h3>
        <p class="text-purple-100 mb-6">
          Agentic AI business support
        </p>
        
        <!-- Social Links -->
        {#if socialLinks.length > 0}
          <div class="flex gap-4">
            {#each socialLinks as social}
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white text-sm font-medium transition-colors whitespace-nowrap"
                aria-label={social.name}
              >
                {social.name}
              </a>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Links Column -->
      <div>
        <h4 class="text-white font-semibold mb-4">Quick Links</h4>
        <ul class="space-y-2">
          {#each links as link}
            <li>
              <a
                href={link.href}
                class="text-purple-100 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Newsletter Column -->
      <div>
        <h4 class="text-white font-semibold mb-4">Stay Updated</h4>
        <p class="text-purple-100 text-sm mb-4">
          Get the latest updates and insights delivered to your inbox.
        </p>
        <form
          onsubmit={(e) => {
            e.preventDefault();
            handleNewsletterSubmit();
          }}
          class="flex flex-col sm:flex-row gap-2"
        >
          <input
            type="email"
            bind:value={email}
            placeholder={newsletterPlaceholder}
            class="flex-1 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
            required
          />
          <button
            type="submit"
            class="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
          >
            {newsletterButtonText}
          </button>
        </form>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mt-12 pt-8 border-t border-white/20">
      <p class="text-center text-sm text-purple-100">
        {copyright}
      </p>
    </div>
  </div>
</footer>

