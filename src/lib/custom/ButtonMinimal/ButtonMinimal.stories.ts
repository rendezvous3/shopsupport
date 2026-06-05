import type { Meta, StoryObj } from '@storybook/svelte';
import ButtonMinimal from './ButtonMinimal.svelte';

const meta = {
  title: 'Custom/ButtonMinimal',
  component: ButtonMinimal as any,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#09090f' }],
    },
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    href: { control: 'text' },
    arrow: { control: 'boolean' },
  },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const Primary: Story = {
  args: {
    label: 'Get started',
    variant: 'primary',
    size: 'md',
    arrow: true,
  },
};

export const Outline: Story = {
  args: {
    label: 'See how it works',
    variant: 'outline',
    size: 'md',
    arrow: true,
  },
};

export const Ghost: Story = {
  args: {
    label: 'Learn more',
    variant: 'ghost',
    size: 'md',
    arrow: false,
  },
};

export const Small: Story = {
  args: {
    label: 'Small button',
    variant: 'primary',
    size: 'sm',
    arrow: false,
  },
};

export const AsLink: Story = {
  args: {
    label: 'Go to docs',
    variant: 'primary',
    size: 'md',
    href: '/docs',
    arrow: true,
  },
};

export const NoArrow: Story = {
  args: {
    label: 'No arrow',
    variant: 'outline',
    size: 'md',
    arrow: false,
  },
};
