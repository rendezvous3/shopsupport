import type { Meta, StoryObj } from '@storybook/svelte';
import HeroSectionV3 from './HeroSectionV3.svelte';

const meta = {
  title: 'Tailwind/HeroSectionV3',
  component: HeroSectionV3 as any,
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
    subheadline: 'Multi-agent systems trained with your data into subject matter experts.',
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
