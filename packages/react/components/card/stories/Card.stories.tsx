import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Card, CardContent, CardImage } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { CardImageRatio } from '../image/CardImageEnum';

import { CardScreen } from '../../../../../examples/react-template/screens/Card';

const meta = {
  title: 'Card',
  component: Card,
  subcomponents: {
    CardContent,
    CardImage,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Card component is a versatile container that displays content in a clear, concise manner, often used for displaying information with images and actions.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content of the card (CardImage, CardContent)',
      control: { type: 'object' },
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
    onClick: {
      description: 'Function called when the card is clicked',
      action: 'clicked',
    },
  },
} as Meta<typeof Card>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <CardScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Card> = {
  args: {
    children: (
      <CardContent>
        <h3>Card Title</h3>
        <p>This is a basic card with some content.</p>
      </CardContent>
    ),
  },
};

export const WithImage: StoryObj<typeof Card> = {
  args: {
    children: (
      <>
        <CardImage 
          src="https://via.placeholder.com/600x400" 
          alt="Card example image" 
        />
        <CardContent>
          <h3>Card with Image</h3>
          <p>Cards can include images at the top.</p>
        </CardContent>
      </>
    ),
  },
};

export const Clickable: StoryObj<typeof Card> = {
  args: {
    onClick: () => alert('Card clicked'),
    children: (
      <CardContent>
        <h3>Clickable Card</h3>
        <p>Click this card to trigger an action.</p>
      </CardContent>
    ),
  },
};

export const WithFooter: StoryObj<typeof Card> = {
  args: {
    children: (
      <>
        <CardContent>
          <h3>Card with Footer</h3>
          <p>This card has content and footer actions.</p>
        </CardContent>
        <div style={{ padding: '1rem', borderTop: '1px solid #eee' }}>
          <button>Action 1</button>
          <button style={{ marginLeft: '0.5rem' }}>Action 2</button>
        </div>
      </>
    ),
  },
};

export default meta;
