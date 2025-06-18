import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb, BreadcrumbItem } from '../index';
import { renderBefore } from '../../../../storybook/preview';

import { BreadcrumScreen } from '../../../../../examples/react-template/screens/Breadcrumb';

const meta = {
  title: 'Breadcrumb',
  component: Breadcrumb,
  subcomponents: {
    BreadcrumbItem,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Breadcrumb component is a navigation aid that helps users understand their location within a website or application by showing a hierarchy of pages.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'BreadcrumbItem components to display',
      control: { type: 'object' },
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof Breadcrumb>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <BreadcrumScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Breadcrumb> = {
  args: {
    children: (
      <>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Products</BreadcrumbItem>
        <BreadcrumbItem>Categories</BreadcrumbItem>
        <BreadcrumbItem>Current Page</BreadcrumbItem>
      </>
    ),
  },
};

export const WithLinks: StoryObj<typeof Breadcrumb> = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Products</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Categories</a>
      </BreadcrumbItem>
      <BreadcrumbItem>Current Page</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const WithActiveItem: StoryObj<typeof Breadcrumb> = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Products</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Categories</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export default meta;
