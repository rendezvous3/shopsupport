import type { Meta, StoryObj } from '@storybook/svelte';
import CTASection from './CTASection.svelte';
import CTASectionVariation2 from './CTASectionVariation2.svelte';
import CTASectionVariation3 from './CTASectionVariation3.svelte';
import CTASectionVariation4 from './CTASectionVariation4.svelte';
import CTASectionVariation5 from './CTASectionVariation5.svelte';
import CTASectionVariation6 from './CTASectionVariation6.svelte';
import LegalAISection from './LegalAISection.svelte';

const meta = {
  title: 'Tailwind/CTASection',
  component: CTASection as any,
  tags: ['autodocs'],
  argTypes: {
    headline: { control: 'text' },
    description: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'decorative', 'minimal']
    },
    onPrimaryCtaClick: { action: 'primaryCtaClicked' },
    onSecondaryCtaClick: { action: 'secondaryCtaClicked' }
  },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    headline: 'Ready to transform your business?',
    description: 'Let\'s discuss how our AI solutions can drive real results for your organization.',
    primaryCta: {
      label: 'Get Started',
      href: '/contact'
    },
    secondaryCta: {
      label: 'Schedule a Call',
      href: '/contact'
    }
  },
};

export const SingleCTA: Story = {
  args: {
    headline: 'Start your AI journey today',
    description: 'Join forward-thinking companies leveraging intelligent automation.',
    primaryCta: {
      label: 'Contact Us',
      href: '/contact'
    }
  },
};

export const Minimal: Story = {
  args: {
    headline: 'Let\'s build something amazing together',
    primaryCta: {
      label: 'Get in Touch',
      href: '/contact'
    }
  },
};

export const Decorative: Story = {
  args: {
    headline: 'Ready to transform your business?',
    description: 'Let\'s discuss how our AI solutions can drive real results for your organization.',
    variant: 'decorative',
    primaryCta: {
      label: 'Get Started',
      href: '/contact'
    },
    secondaryCta: {
      label: 'Schedule a Call',
      href: '/contact'
    }
  },
};

// Variation 2 - Full Decorative CTA
export const Variation2_FullDecorative: Story = {
  render: () => ({
    Component: CTASectionVariation2 as any,
    props: {
      headline: 'Ready to transform your business?',
      description: 'Let\'s discuss how our AI solutions can drive real results for your organization.',
      primaryCta: {
        label: 'Get Started',
        href: '/contact'
      },
      secondaryCta: {
        label: 'Schedule a Call',
        href: '/contact'
      }
    }
  })
};

// Variation 3 - Minimal Dark with Features
export const Variation3_MinimalDark: Story = {
  render: () => ({
    Component: CTASectionVariation3 as any,
    props: {
      headline: 'Ready to transform your business?',
      description: 'Let\'s discuss how our AI solutions can drive real results for your organization.',
      primaryCta: {
        label: 'Get Started',
        href: '/contact'
      },
      secondaryCta: {
        label: 'Learn More',
        href: '/about'
      }
    }
  })
};

// Variation 4 - Split with Stats
export const Variation4_SplitStats: Story = {
  render: () => ({
    Component: CTASectionVariation4 as any,
    props: {
      headline: 'Ready to transform your business?',
      description: 'Let\'s discuss how our AI solutions can drive real results for your organization.',
      primaryCta: {
        label: 'Get Started',
        href: '/contact'
      },
      secondaryCta: {
        label: 'Schedule a Call',
        href: '/contact'
      }
    }
  })
};

// Variation 5 - Urgency Banner
export const Variation5_UrgencyBanner: Story = {
  render: () => ({
    Component: CTASectionVariation5 as any,
    props: {
      headline: 'Ready to transform your business?',
      description: 'Let\'s discuss how our AI solutions can drive real results for your organization.',
      primaryCta: {
        label: 'Start Free Trial',
        href: '/contact'
      },
      secondaryCta: {
        label: 'Learn More',
        href: '/about'
      }
    }
  })
};

// Variation 6 - Glass Card Style
export const Variation6_GlassCard: Story = {
  render: () => ({
    Component: CTASectionVariation6 as any,
    props: {
      headline: 'Ready to transform your business?',
      description: 'Let\'s discuss how our AI solutions can drive real results for your organization.',
      primaryCta: {
        label: 'Get Started',
        href: '/contact'
      },
      secondaryCta: {
        label: 'Schedule a Call',
        href: '/contact'
      }
    }
  })
};

// Legal AI Section - Interactive Chatbot Demo
export const LegalAISection_Interactive: Story = {
  render: () => ({
    Component: LegalAISection as any,
    props: {
      headline: 'Large Internal Dataset Case Lookup',
      description: 'Internal AI Engine for legal professionals. Search through thousands of cases, analyze documents, and find precedents instantly.',
      primaryCta: {
        label: 'Request Demo',
        href: '/contact'
      },
      secondaryCta: {
        label: 'Learn More',
        href: '/services/legal'
      }
    }
  })
};

