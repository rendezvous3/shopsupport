import type { Meta, StoryObj } from '@storybook/svelte';
import HeroSection from './HeroSection.svelte';
import HeroSectionVariation2 from './HeroSectionVariation2.svelte';
import HeroSectionVariation3 from './HeroSectionVariation3.svelte';
import HeroSectionVariation4 from './HeroSectionVariation4.svelte';
import HeroSectionVariation5 from './HeroSectionVariation5.svelte';
import HeroSectionVariation6 from './HeroSectionVariation6.svelte';
import HeroSectionVariation7 from './HeroSectionVariation7.svelte';
import HeroSectionVariation8 from './HeroSectionVariation8.svelte';
import HeroSectionVariation9 from './HeroSectionVariation9.svelte';

const meta = {
  title: 'Tailwind/HeroSection',
  component: HeroSection as any,
  tags: ['autodocs'],
  argTypes: {
    headline: { control: 'text' },
    subheadline: { control: 'text' },
    onPrimaryCtaClick: { action: 'primaryCtaClicked' },
    onSecondaryCtaClick: { action: 'secondaryCtaClicked' }
  },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

const defaultProps = {
  headline: 'Transform your business with intelligent AI agents',
  subheadline: 'We build custom multi-agent RAG systems that understand your industry and deliver real results',
  primaryCta: {
    label: 'Get Started',
    href: '/contact'
  },
  secondaryCta: {
    label: 'Learn More',
    href: '/about'
  }
};

// Original Hero Section
export const Variation1_Original: Story = {
  args: defaultProps,
};

export const SingleCTA: Story = {
  args: {
    headline: 'Build the future with AI',
    subheadline: 'Custom solutions for forward-thinking businesses',
    primaryCta: {
      label: 'Start Your Project',
      href: '/contact'
    }
  },
};

export const Minimal: Story = {
  args: {
    headline: 'AI Consulting That Works',
  },
};

// Variation 2 - Centered with 2 Stacked Chatbots
export const Variation2_CenteredStacked: Story = {
  render: () => ({
    Component: HeroSectionVariation2 as any,
    props: defaultProps
  })
};

// Variation 3 - Left-aligned with 3 Cascading Chatbots
export const Variation3_Cascading: Story = {
  render: () => ({
    Component: HeroSectionVariation3 as any,
    props: defaultProps
  })
};

// Variation 4 - Dark Theme with Floating Chatbots
export const Variation4_DarkFloating: Story = {
  render: () => ({
    Component: HeroSectionVariation4 as any,
    props: defaultProps
  })
};

// Variation 5 - Split Screen with Animated Chatbots
export const Variation5_SplitScreen: Story = {
  render: () => ({
    Component: HeroSectionVariation5 as any,
    props: defaultProps
  })
};

// Variation 6 - Cursor Coding Animation
export const Variation6_CursorCoding: Story = {
  render: () => ({
    Component: HeroSectionVariation6 as any,
    props: defaultProps
  })
};

// Variation 7 - Terminal/CLI Interface
export const Variation7_Terminal: Story = {
  render: () => ({
    Component: HeroSectionVariation7 as any,
    props: defaultProps
  })
};

// Variation 8 - Data Visualization
export const Variation8_DataVisualization: Story = {
  render: () => ({
    Component: HeroSectionVariation8 as any,
    props: defaultProps
  })
};

// Variation 9 - Multi-Panel Showcase
export const Variation9_MultiPanel: Story = {
  render: () => ({
    Component: HeroSectionVariation9 as any,
    props: defaultProps
  })
};

