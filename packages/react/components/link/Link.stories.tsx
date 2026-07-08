import type { Meta, StoryObj } from '@storybook/react'
import { IconName } from '../icon'
import LinkComponent from './Link'
import type { LinkProps } from './LinkProps'
import React from 'react'

LinkComponent.displayName = 'Link'

interface LinkStoryArgs extends Omit<LinkProps, 'children' | 'iconName' | 'routerLink'> {
  children: string
  iconName?: IconName
  routerLink?: 'a'
}

const meta: Meta<LinkStoryArgs> = {
  title: 'Components/Link',
  component: LinkComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Link text content',
    },
    href: {
      control: 'text',
      description: 'Anchor URL when using native anchor mode',
    },
    to: {
      control: 'text',
      description: 'Destination used with routerLink mode',
    },
    title: {
      control: 'text',
      description: 'Native title attribute',
    },
    accessibilityLabel: {
      control: 'text',
      description: 'Accessibility label for assistive technologies',
    },
    iconName: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      description: 'Optional trailing icon',
    },
    routerLink: {
      control: 'select',
      options: [undefined, 'a'],
      description: 'Router link component (use with to)',
    },
    rel: {
      control: 'text',
      description: 'Native rel attribute',
    },
    id: {
      control: 'text',
      description: 'Custom html id',
    },
    className: {
      control: 'text',
      description: 'Custom CSS class names',
    },
    testId: {
      control: 'text',
      description: 'Testing identifier',
    },
    onClick: {
      action: 'clicked',
      control: false,
      description: 'Click handler',
    },
    role: {
      control: 'text',
      description: 'ARIA role',
    },
    inline: {
      control: 'boolean',
      description: 'Inline mode',
    },
    inverted: {
      control: 'boolean',
      description: 'Use inverted color style',
    },
    blank: {
      control: 'boolean',
      description: 'Open in a new tab (target _blank)',
    },
    small: {
      control: 'boolean',
      description: 'Use compact text size',
    },
  },
  args: {
    children: 'Read more',
    href: 'https://example.com',
    to: '/docs',
    title: 'Read more',
    accessibilityLabel: 'Read more',
    iconName: undefined,
    routerLink: undefined,
    rel: '',
    id: '',
    className: '',
    testId: '',
    role: '',
    inline: false,
    inverted: false,
    blank: false,
    small: false,
  },
  render: ({ children, ...args }) => <LinkComponent {...args}>{children}</LinkComponent>,
}

export default meta
type Story = StoryObj<LinkStoryArgs>

export const Default: Story = {}

export const WithIcon: Story = {
  args: {
    iconName: IconName.SEARCH,
  },
}

export const Inverted: Story = {
  args: {
    inverted: true,
  },
}

export const Small: Story = {
  args: {
    small: true,
  },
}

export const BlankTarget: Story = {
  args: {
    blank: true,
  },
}

export const RouterLinkMode: Story = {
  args: {
    routerLink: 'a',
    to: '/account',
    href: undefined,
  },
}

export const Playground: Story = {}
