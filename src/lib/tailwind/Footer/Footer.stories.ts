import type { Meta, StoryObj } from '@storybook/svelte';
import Footer from './Footer.svelte';
import FooterVariation2 from './FooterVariation2.svelte';
import FooterVariation3 from './FooterVariation3.svelte';
import FooterVariation4 from './FooterVariation4.svelte';

const meta = {
  title: 'Tailwind/Footer',
  component: Footer as any,
  tags: ['autodocs'],
  argTypes: {
    copyright: { control: 'text' }
  },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  args: {},
};

export const Custom: Story = {
  args: {
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '/features' },
          { label: 'Pricing', href: '/pricing' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { label: 'Documentation', href: '/docs' },
          { label: 'Support', href: '/support' }
        ]
      }
    ],
    contactInfo: {
      email: 'support@example.com',
      phone: '+1 (555) 999-8888'
    },
    socialLinks: [
      { name: 'GitHub', href: 'https://github.com' },
      { name: 'LinkedIn', href: 'https://linkedin.com' }
    ],
    copyright: '© 2024 Example Inc. All rights reserved.'
  },
};

export const Minimal: Story = {
  args: {
    columns: [
      {
        title: 'Links',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' }
        ]
      }
    ],
    contactInfo: {
      email: 'info@xtscale.com'
    },
    socialLinks: []
  },
};

// Variation 2 - Minimal Footer
export const Variation2_Minimal: Story = {
  render: () => ({
    Component: FooterVariation2 as any,
    props: {}
  })
};

// Variation 3 - Split Footer
export const Variation3_Split: Story = {
  render: () => ({
    Component: FooterVariation3 as any,
    props: {}
  })
};

// Variation 4 - Newsletter Footer
export const Variation4_Newsletter: Story = {
  render: () => ({
    Component: FooterVariation4 as any,
    props: {}
  })
};

