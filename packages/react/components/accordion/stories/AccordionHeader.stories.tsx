import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AccordionHeader from '../item/header/AccordionHeader';
import {AccordionHeaderProps} from '../item/header/AccordionHeaderProps'

const meta: Meta<typeof AccordionHeader> = {
  title: 'Accordion/AccordionHeader',
  component: AccordionHeader,
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof AccordionHeader>;

export const Base: Story = {
  args: {
    children: 'Header',
  },
};
