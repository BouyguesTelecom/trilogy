import React from 'react';
import { Meta, StoryObj, StoryContext } from '@storybook/react';

import { Accordion } from '../index';
import AccordionItem from '../item/AccordionItem';
import AccordionHeader from '../item/header/AccordionHeader';
import AccordionBody from '../item/body/AccordionBody';

import { renderBefore } from '../../../../storybook/preview';

import {AccordionScreen} from '../../../../../examples/react-template/screens/Accordion'


const meta = {
  title: 'Accordion',
  component: Accordion,
  subcomponents: {
    AccordionItem,
    AccordionHeader,
    AccordionBody
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Accordion is a container component that supports a list of AccordionItem. Each AccordionItem has an AccordionHeader and AccordionBody.'
      },
    },
  },
  argTypes: {
    AccordionItem: {
      description: 'Props for AccordionItem',
      table: {
        type: {
          summary: 'React.ComponentType<AccordionItemProps>',
        },
      },
    },
  },
} as Meta<typeof Accordion>;

renderBefore(meta)


export const Screen: StoryObj = {
  render: ({ ...args }) => {
    return (
      <AccordionScreen/>
    )
  }
}

/*

export const AccordionStroy: StoryObj = {

render: (args) => {
    return (
      <Accordion {...args}>
        <AccordionItem>
          <AccordionHeader >AccordionHeader</AccordionHeader>
          <AccordionBody >Accordion Body</AccordionBody>
        </AccordionItem>
      </Accordion>
    )
  }
}


export const Template: StoryObj = {
  render: ({ ...args }) => {
    return (
      <Accordion>
        <AccordionItem {...args}>
          <AccordionHeader {...DefaultHeader}>AccordionHeader</AccordionHeader>
          <AccordionBody {...args.body?.args}>{args.body?.children}</AccordionBody>
        </AccordionItem>
         <AccordionItem open>
          <AccordionHeader {...DefaultHeader}>Sample Open by default</AccordionHeader>
          <AccordionBody>Sample Open by default</AccordionBody>
        </AccordionItem>
        <AccordionItem disabled>
          <AccordionHeader {...DefaultHeader}>Sample Disabled by default</AccordionHeader>
          <AccordionBody {...args.body?.args}>{args.body?.children}</AccordionBody>
        </AccordionItem>
      </Accordion>
    )
  },
  args: {
    disabled: false,
    open: false,
    header: { args: {}, children:defaultBodyChildren},
    body: { args: {}, children:defaultBodyChildren},
    DefaultHeader: DefaultHeader.args,
  },
}



export const Open = {
  ...Template,
  args: {
    ...Template.args,
    open: true,
  },
};
*/

// Ajout d'une story pour afficher les sous-composants
export const SubcomponentsExample = {
  render: () => (
    <Accordion>
      <AccordionItem open>
        <AccordionHeader>Header Example 1</AccordionHeader>
        <AccordionBody>Body Example 1, openned by default</AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>Header Example 2</AccordionHeader>
        <AccordionBody>Body Example 2</AccordionBody>
      </AccordionItem>
      <AccordionItem disabled>
        <AccordionHeader>Header Example Disabled</AccordionHeader>
        <AccordionBody>Body Example Disabled</AccordionBody>
      </AccordionItem>
    </Accordion>
  ),
};

export default meta;