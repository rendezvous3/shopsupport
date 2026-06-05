import type { Meta, StoryObj } from '@storybook/svelte';
import SectionContainerWrapper from './SectionContainerWrapper.svelte';

const meta = {
  title: 'Tailwind/SectionContainer',
  component: SectionContainerWrapper as any,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'wide', 'narrow']
    },
    background: {
      control: 'select',
      options: ['white', 'gray', 'gradient']
    }
  },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    variant: 'default',
    background: 'white',
    content: '<div class="py-16"><h2 class="text-2xl font-semibold text-gray-900">Default Container</h2><p class="mt-4 text-gray-600">This is a default width container with white background.</p></div>'
  },
};

export const Wide: Story = {
  args: {
    variant: 'wide',
    background: 'gray',
    content: '<div class="py-16"><h2 class="text-2xl font-semibold text-gray-900">Wide Container</h2><p class="mt-4 text-gray-600">This is a wide container with gray background.</p></div>'
  },
};

export const Narrow: Story = {
  args: {
    variant: 'narrow',
    background: 'gradient',
    content: '<div class="py-16"><h2 class="text-2xl font-semibold text-gray-900">Narrow Container</h2><p class="mt-4 text-gray-600">This is a narrow container with gradient background.</p></div>'
  },
};

