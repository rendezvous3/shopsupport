import type { Meta, StoryObj } from '@storybook/svelte';
import FeatureCard from './FeatureCard.svelte';
import FeatureCardVariation2 from './FeatureCardVariation2.svelte';
import FeatureCardVariation3 from './FeatureCardVariation3.svelte';
import FeatureCardVariation4 from './FeatureCardVariation4.svelte';
import FeatureCardVariation5 from './FeatureCardVariation5.svelte';

const meta = {
  title: 'Tailwind/FeatureCard',
  component: FeatureCard as any,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined']
    }
  },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

const IconSVG = `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>`;

export const Default: Story = {
  args: {
    title: 'Agentic AI Solutions',
    description: 'Build intelligent agents that understand context, make decisions, and work autonomously to solve complex business challenges.',
    variant: 'default',
    icon: IconSVG
  },
};

export const Elevated: Story = {
  args: {
    title: 'Multi-Agent RAG Systems',
    description: 'Advanced retrieval-augmented generation systems that leverage multiple specialized agents for superior accuracy and performance.',
    variant: 'elevated',
    icon: IconSVG
  },
};

export const Outlined: Story = {
  args: {
    title: 'Custom Development',
    description: 'Tailored solutions designed specifically for your industry, workflows, and business objectives.',
    variant: 'outlined',
    icon: IconSVG
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'Industry Expertise',
    description: 'Deep knowledge across E-Commerce, Law, Customer Service, Finance, and AI Automation.',
    variant: 'default'
  },
};

// Variation 2 - Expandable
export const Variation2_Expandable: Story = {
  render: () => ({
    Component: FeatureCardVariation2 as any,
    props: {
      title: 'Agentic AI Solutions',
      description: 'Build intelligent agents that understand context, make decisions, and work autonomously.',
      expandedContent: 'Our agentic AI solutions leverage advanced machine learning models to create autonomous agents that can understand complex business contexts, make intelligent decisions, and work independently to solve challenges. Click to learn more.',
      icon: IconSVG
    }
  })
};

// Variation 3 - Minimal Icon
export const Variation3_MinimalIcon: Story = {
  render: () => ({
    Component: FeatureCardVariation3 as any,
    props: {
      title: 'Multi-Agent RAG',
      description: 'Advanced retrieval-augmented generation systems.',
      icon: IconSVG
    }
  })
};

// Variation 4 - Stats Card
export const Variation4_Stats: Story = {
  render: () => ({
    Component: FeatureCardVariation4 as any,
    props: {
      title: 'Performance',
      description: 'Our systems deliver exceptional results.',
      stat: 99.9,
      statLabel: 'Uptime',
      progress: 99,
      icon: IconSVG
    }
  })
};

// Variation 5 - Gradient Highlight
export const Variation5_GradientHighlight: Story = {
  render: () => ({
    Component: FeatureCardVariation5 as any,
    props: {
      title: 'Custom Development',
      description: 'Tailored solutions designed specifically for your industry, workflows, and business objectives.',
      highlight: 'Featured',
      icon: IconSVG
    }
  })
};

