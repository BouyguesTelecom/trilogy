import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Link } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { IconName } from '../../icon';

import { LinkScreen } from '../../../../../examples/react-template/screens/Link';

const meta = {
  title: 'Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Link component is used to navigate between pages or to external websites.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content of the link',
      control: 'text',
    },
    href: {
      description: 'The URL the link points to',
      control: 'text',
    },
    to: {
      description: 'The route path for router links (used with routerLink)',
      control: 'text',
    },
    iconName: {
      description: 'Icon to display with the link',
      control: 'select',
      options: Object.values(IconName),
    },
    inline: {
      description: 'Whether the link should be displayed inline',
      control: 'boolean',
    },
    inverted: {
      description: 'Whether to use inverted colors for the link',
      control: 'boolean',
    },
    blank: {
      description: 'Whether the link should open in a new tab/window',
      control: 'boolean',
    },
    title: {
      description: 'The title attribute for the link (shown on hover)',
      control: 'text',
    },
    onClick: {
      description: 'Function called when the link is clicked',
      action: 'clicked',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof Link>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <LinkScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Link> = {
  args: {
    children: 'Basic Link',
    href: '#',
  },
};

export const WithIcon: StoryObj<typeof Link> = {
  args: {
    children: 'Link with Icon',
    href: '#',
    iconName: IconName.ARROW_RIGHT,
  },
};

export const External: StoryObj<typeof Link> = {
  args: {
    children: 'External Link',
    href: 'https://example.com',
    blank: true,
  },
};

export const InlineWithinText: StoryObj<typeof Link> = {
  render: () => (
    <p>
      This is a paragraph with an {' '}
      <Link href="#" inline>inline link</Link>
      {' '} embedded within the text.
    </p>
  ),
};

export const Inverted: StoryObj<typeof Link> = {
  args: {
    children: 'Inverted Link',
    href: '#',
    inverted: true,
  },
  render: (args) => (
    <div style={{ backgroundColor: '#333', padding: '20px', color: 'white' }}>
      <Link {...args} />
    </div>
  ),
};

export const WithIconAndBlank: StoryObj<typeof Link> = {
  args: {
    children: 'Documentation',
    href: 'https://example.com/docs',
    iconName: IconName.BELL,
    blank: true,
    title: 'Open documentation in a new tab',
  },
};

export const WithOnClick: StoryObj<typeof Link> = {
  args: {
    children: 'Click Me',
    onClick: () => alert('Link clicked!'),
  },
};

export default meta;