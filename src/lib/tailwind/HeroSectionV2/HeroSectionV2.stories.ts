import type { Meta, StoryObj } from '@storybook/svelte';
import HeroSectionV2 from './HeroSectionV2.svelte';

const meta = {
  title: 'Tailwind/HeroSectionV2',
  component: HeroSectionV2 as any,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    headline: { control: 'text' },
    subheadline: { control: 'text' },
  },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    headline: 'Agentic AI business support',
    subheadline: 'Custom multi-agent RAG systems trained on your data',
    primaryCta: { label: 'Get started', href: '/contact' },
    secondaryCta: { label: 'See how it works', href: '/about' },
  },
};

export const Minimal: Story = {
  args: {
    headline: 'Build smarter with AI',
    subheadline: 'Deploy production-ready AI agents in days.',
    primaryCta: { label: 'Start free', href: '/signup' },
    secondaryCta: { label: 'View demo', href: '/demo' },
  },
};
