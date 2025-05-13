import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionBody, AccordionHeader } from '../index';
import { DefaultHeader } from '../item/header/AccordionHeader.stories';

import { Body } from '../item/body/AccordionBody.stories';

import { AccordionScreen } from '../../../../../examples/react-template/screens/Accordion'
import { Text } from '../../text'
import { Title } from '../../title'


type Story = StoryObj<typeof Accordion>;


export default {
  title: 'Accordion/Subcomponents',
  component: Accordion,
  decorators: [],
  parameters: {}
} as Meta<typeof Accordion>;

export const Header: Story = {
  render: ({ ...args }) => {
    return (
          <AccordionHeader >{args.children}</AccordionHeader>
    )
  },
  args: {
    children: <Title level={3} markup='h3'>The Header of the accordion</Title>,
  }
}

export const Template: Story = {
  render: ({ ...args }) => {
    return (
      <Accordion>
        <AccordionItem {...args}>
          <AccordionHeader {...DefaultHeader}>TOTO</AccordionHeader>
          <AccordionBody {...Body}>AccordionBody</AccordionBody>
        </AccordionItem>
      </Accordion>
    )
  },
  args: {
    children: 'Accordion Item',
    className: undefined,
    disabled: false,
    open: false,
    onClick: undefined,
    DefaultBody: Body.args,
    DefaultHeader: DefaultHeader.args,
    Body: {
      backgroundColor: 'white',
      children: (
          <Text>Accordion Body 1</Text>
        )
    }
  },
}

//export const Default = Template;
export const Open = {
  ...Template,
  args: {
    ...Template.args,
    open: true,
  },
};


export const Screen: Story = {
  render: ({ ...args }) => {
    return (
      <AccordionScreen/>
    )
  }
}
