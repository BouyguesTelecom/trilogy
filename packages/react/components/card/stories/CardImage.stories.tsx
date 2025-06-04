import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import CardImage from '../image';
import { Card, CardContent } from '../index';
import { CardImageSize } from '../image/CardImageEnum';
import { renderBefore } from '../../../../storybook/preview';

const meta = {
  title: 'Card/CardImage',
  component: CardImage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The CardImage component displays an image within a Card component.',
      },
    },
  },
  argTypes: {
    src: {
      description: 'The source URL of the image',
      control: 'text',
    },
    alt: {
      description: 'Alternative text for the image',
      control: 'text',
    },
    size: {
      description: 'The size of the image',
      control: { type: 'inline-radio' },
      options: Object.values(CardImageSize),
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof CardImage>;

renderBefore(meta);

export const Basic: StoryObj<typeof CardImage> = {
  args: {
    src: 'https://via.placeholder.com/600x400',
    alt: 'Example image',
  },
  render: (args) => (
    <Card>
      <CardImage {...args} />
      <CardContent>
        <h3>Card with Image</h3>
        <p>This card has an image at the top.</p>
      </CardContent>
    </Card>
  ),
};

export const Square: StoryObj<typeof CardImage> = {
  args: {
    src: 'https://via.placeholder.com/400x400',
    alt: 'Square image',
    size: CardImageSize.SIZE_1,
  },
  render: (args) => (
    <Card>
      <CardImage {...args} />
      <CardContent>
        <h3>Card with Square Image</h3>
        <p>This card has a square image at the top.</p>
      </CardContent>
    </Card>
  ),
};

export const Landscape: StoryObj<typeof CardImage> = {
  args: {
    src: 'https://via.placeholder.com/600x400',
    alt: 'Landscape image',
    size: CardImageSize.SIZE_2,
  },
  render: (args) => (
    <Card>
      <CardImage {...args} />
      <CardContent>
        <h3>Card with Landscape Image</h3>
        <p>This card has a landscape image at the top.</p>
      </CardContent>
    </Card>
  ),
};

export const Portrait: StoryObj<typeof CardImage> = {
  args: {
    src: 'https://via.placeholder.com/400x600',
    alt: 'Portrait image',
    size: CardImageSize.SIZE_3,
  },
  render: (args) => (
    <Card>
      <CardImage {...args} />
      <CardContent>
        <h3>Card with Portrait Image</h3>
        <p>This card has a portrait image at the top.</p>
      </CardContent>
    </Card>
  ),
};

export default meta;
