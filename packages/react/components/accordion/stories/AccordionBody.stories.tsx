import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AccordionBody  from '../item/body/AccordionBody';
import { AccordionItemProps } from '../item/AccordionItemProps'

const meta: Meta<typeof AccordionBody> = {
  title: 'Accordion/AccordionBody',
  component: AccordionBody,
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof AccordionBody>;

export const Base: Story = {
  args: {
    children: 'Body',
  },
};
