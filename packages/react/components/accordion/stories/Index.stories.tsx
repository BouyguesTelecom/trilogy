import React from 'react';
import type { Meta, StoryObj, StoryContext } from '@storybook/react';

import {Accordion, AccordionItem, AccordionBody, AccordionHeader, } from '../index';
import { DefaultHeader } from '../item/header/AccordionHeader.stories';
import { defaultBodyChildren } from './StoriesObjects';
import {Text} from '../../text'
import { renderBefore } from '../../../../storybook/preview';

import {AccordionScreen} from '../../../../../examples/react-template/screens/Accordion'


const meta = {
  title: 'Accordion',
  component: Accordion,
  subcomponents: {
    AccordionItem
  },
} as Meta<typeof Accordion>;

renderBefore(meta)

export const AA: StoryObj = {

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


export const Documentation: StoryObj = {
  render: ({ ...args }) => {
    return (
      <AccordionScreen/>
    )
  }
}


export const Open = {
  ...Template,
  args: {
    ...Template.args,
    open: true,
  },
};

export default meta;