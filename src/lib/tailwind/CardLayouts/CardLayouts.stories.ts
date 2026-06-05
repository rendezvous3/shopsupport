import type { Meta, StoryObj } from '@storybook/svelte';
import CardLayoutTimelineWrapper from './CardLayoutTimelineWrapper.svelte';
import CardLayoutGridWrapper from './CardLayoutGridWrapper.svelte';

const meta = {
  title: 'Tailwind/CardLayouts',
  tags: ['autodocs'],
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

// Timeline Layout
export const Timeline: Story = {
  render: () => ({
    Component: CardLayoutTimelineWrapper as any
  })
};

// Enhanced Grid Layout
export const EnhancedGrid: Story = {
  render: () => ({
    Component: CardLayoutGridWrapper as any
  })
};

