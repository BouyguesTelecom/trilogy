import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import CardContent from '../content';
import { Card } from '../index';
import { renderBefore } from '../../../../storybook/preview';

const meta = {
  title: 'Card/CardContent',
  component: CardContent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The CardContent component contains the content of a Card component.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content to display inside the card',
      control: 'text',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof CardContent>;

renderBefore(meta);

export const Basic: StoryObj<typeof CardContent> = {
  args: {
    children: (
      <>
        <h3>Card Title</h3>
        <p>This is the content area of the card. You can place any content here.</p>
      </>
    ),
  },
  render: (args) => (
    <Card>
      <CardContent {...args} />
    </Card>
  ),
};

export const WithRichContent: StoryObj<typeof CardContent> = {
  render: () => (
    <Card>
      <CardContent>
        <h3>Rich Content Example</h3>
        <p>You can include complex content in a CardContent component:</p>
        <ul>
          <li>Lists</li>
          <li>Images</li>
          <li>Text with <strong>formatting</strong></li>
        </ul>
        <div style={{ marginTop: '1rem' }}>
          <button>Action</button>
        </div>
      </CardContent>
    </Card>
  ),
};

export default meta;
