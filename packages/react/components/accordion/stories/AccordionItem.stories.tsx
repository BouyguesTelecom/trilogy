import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AccordionItem from '../item/AccordionItem';
import { AccordionItemProps } from '../item/AccordionItemProps';
import AccordionHeader from '../item/header/AccordionHeader';
import AccordionBody from '../item/body/AccordionBody';

const meta: Meta<typeof AccordionItem> = {
  title: 'Accordion/AccordionItem',
  component: AccordionItem,
  subcomponents: {
    AccordionHeader,
    AccordionBody,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'AccordionItem is a collapsible item within an Accordion. It includes a header and a body.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Content inside the AccordionItem',
      control: 'text',
    },
    open: {
      description: 'Whether the AccordionItem is open',
      control: 'boolean',
    },
    onClick: {
      description: 'Callback when the AccordionItem is clicked',
      action: 'clicked',
    },
    disabled: {
      description: 'Whether the AccordionItem is disabled',
      control: 'boolean',
    },
  }
};

export default meta;

type Story = StoryObj<typeof AccordionItem>;

export const Base: Story = {
  args: {
    open: false,
    disabled: false,
    children: (
      <>
        <AccordionHeader>Header</AccordionHeader>
        <AccordionBody>Body</AccordionBody>
      </>
    ),
  },
};
