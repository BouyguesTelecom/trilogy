import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import BreadcrumbItem from '../item/';
import { Breadcrumb } from '../index';
import { renderBefore } from '../../../../storybook/preview';

const meta = {
  title: 'Breadcrumb/BreadcrumbItem',
  component: BreadcrumbItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The BreadcrumbItem component represents a single item within a Breadcrumb navigation.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content of the breadcrumb item',
      control: 'text',
    },
    active: {
      description: 'Whether the item is the active/current page',
      control: 'boolean',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof BreadcrumbItem>;

renderBefore(meta);

export const Basic: StoryObj<typeof BreadcrumbItem> = {
  args: {
    children: 'Breadcrumb Item',
  },
  render: (args) => (
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem {...args} />
    </Breadcrumb>
  ),
};

export const Active: StoryObj<typeof BreadcrumbItem> = {
  args: {
    children: 'Active Item',
    active: true,
  },
  render: (args) => (
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Products</BreadcrumbItem>
      <BreadcrumbItem {...args} />
    </Breadcrumb>
  ),
};

export const WithLink: StoryObj<typeof BreadcrumbItem> = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Products</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Current Page</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export default meta;
