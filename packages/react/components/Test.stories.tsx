import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Test/Hello',
  component: (props) => <div {...props}>Hello</div>,
  tags: ['autodocs'],
};
export default meta;

export const Default = {};
