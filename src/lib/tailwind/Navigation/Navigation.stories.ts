import type { Meta, StoryObj } from '@storybook/svelte';
import Navigation from './Navigation.svelte';
import NavigationVariation2 from './NavigationVariation2.svelte';

const meta = {
  title: 'Tailwind/Navigation',
  component: Navigation as any,
  tags: ['autodocs'],
  argTypes: {
    logo: { control: 'text' },
    ctaText: { control: 'text' },
    dropdownTrigger: {
      control: 'select',
      options: ['click', 'hover', 'both']
    },
    onCtaClick: { action: 'ctaClicked' }
  },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    logo: 'XT SCALE',
    ctaText: 'Get Started',
  },
};

export const CustomLinks: Story = {
  args: {
    logo: 'XT SCALE',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' }
    ],
    ctaText: 'Contact Us',
  },
};

export const Minimal: Story = {
  args: {
    logo: 'XT',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    ctaText: 'Start',
  },
};

export const WithDropdowns: Story = {
  args: {
    logo: 'XT SCALE',
    links: [
      { 
        label: 'Services', 
        href: '/services',
        children: [
          { label: 'Agentic AI', href: '/services/agentic-ai' },
          { label: 'Multi-Agent RAG', href: '/services/rag' },
          { label: 'Custom Solutions', href: '/services/custom' }
        ]
      },
      { 
        label: 'Industries', 
        href: '/industries',
        children: [
          { label: 'E-Commerce', href: '/industries/e-commerce' },
          { label: 'Legal', href: '/industries/law' },
          { label: 'Finance', href: '/industries/finance' }
        ]
      },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    ctaText: 'Get Started',
    dropdownTrigger: 'hover'
  },
};

export const DropdownClick: Story = {
  args: {
    logo: 'XT SCALE',
    links: [
      { 
        label: 'Services', 
        href: '/services',
        children: [
          { label: 'Agentic AI', href: '/services/agentic-ai' },
          { label: 'Multi-Agent RAG', href: '/services/rag' }
        ]
      },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    ctaText: 'Get Started',
    dropdownTrigger: 'click'
  },
};

// Variation 2 - Mega Menu
export const Variation2_MegaMenu: Story = {
  render: () => ({
    Component: NavigationVariation2 as any,
    props: {
      logo: 'XT SCALE',
      links: [
        { 
          label: 'Services', 
          href: '/services',
          children: [
            { 
              label: 'Agentic AI', 
              href: '/services/agentic-ai',
              description: 'Intelligent autonomous agents',
              icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>'
            },
            { 
              label: 'Multi-Agent RAG', 
              href: '/services/rag',
              description: 'Advanced retrieval systems',
              icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>'
            },
            { 
              label: 'Custom Development', 
              href: '/services/custom',
              description: 'Tailored solutions',
              icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>'
            },
            { 
              label: 'Consulting', 
              href: '/services/consulting',
              description: 'Expert guidance',
              icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>'
            }
          ]
        },
        { 
          label: 'Industries', 
          href: '/industries',
          children: [
            { 
              label: 'E-Commerce', 
              href: '/industries/e-commerce',
              description: 'Online retail solutions',
              icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>'
            },
            { 
              label: 'Legal', 
              href: '/industries/law',
              description: 'Legal tech solutions',
              icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>'
            }
          ]
        },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
      ],
      ctaText: 'Get Started',
      dropdownTrigger: 'hover'
    }
  })
};

