import type { Meta, StoryObj } from '@storybook/svelte';
import IndustryCard from './IndustryCard.svelte';
import IndustryCardVariation2 from './IndustryCardVariation2.svelte';
import IndustryCardVariation4 from './IndustryCardVariation4.svelte';

const meta = {
  title: 'Tailwind/IndustryCard',
  component: IndustryCard as any,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    href: { control: 'text' },
    onclick: { action: 'clicked' }
  },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

const IconSVG = `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
</svg>`;

export const Default: Story = {
  args: {
    title: 'E-Commerce',
    description: 'Enhance customer experiences with intelligent product recommendations, automated support, and personalized shopping journeys.',
    href: '/industries/e-commerce',
    icon: IconSVG
  },
};

export const Law: Story = {
  args: {
    title: 'Legal',
    description: 'Streamline document analysis, contract review, and legal research with AI-powered tools that understand legal context.',
    href: '/industries/law',
    icon: IconSVG
  },
};

export const Finance: Story = {
  args: {
    title: 'Finance',
    description: 'Automate financial analysis, risk assessment, and customer service with secure, compliant AI solutions.',
    href: '/industries/finance',
    icon: IconSVG
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'Customer Service',
    description: 'Deliver 24/7 intelligent support that understands context and resolves issues faster than traditional systems.',
    href: '/industries/customer-service'
  },
};

// Variation 2 - Hero Card
export const Variation2_Hero: Story = {
  render: () => ({
    Component: IndustryCardVariation2 as any,
    props: {
      title: 'E-Commerce',
      description: 'Enhance customer experiences with intelligent product recommendations and automated support.',
      href: '/industries/e-commerce',
      icon: IconSVG,
      backgroundGradient: 'from-purple-600 via-blue-600 to-indigo-700'
    }
  })
};

// Variation 4 - Expandable
export const Variation4_Expandable: Story = {
  render: () => ({
    Component: IndustryCardVariation4 as any,
    props: {
      title: 'Finance',
      description: 'Automate financial analysis and risk assessment.',
      expandedContent: 'Our AI solutions help financial institutions streamline operations, reduce risk, and improve customer service through intelligent automation and analysis.',
      href: '/industries/finance',
      icon: IconSVG
    }
  })
};

