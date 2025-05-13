import React from 'react';
import type { Meta, StoryObj, StoryContext } from '@storybook/react';

import {Accordion, AccordionItem, AccordionBody, AccordionHeader, } from '../index';
import { DefaultHeader } from '../item/header/AccordionHeader.stories';
import { DefaultBody, defaultBodyChildren } from '../stories/StoriesObjects';
import {Text} from '../../text'
import { renderBefore } from '../../../../storybook/preview';

const meta = {
  title: 'Accordion',
  component: Accordion,
  subcomponents: {
    AccordionItem,
    AccordionBody,
    AccordionHeader,
  },
} as Meta<typeof Accordion>;

renderBefore(meta)

export const Template: StoryObj = {
  render: ({ ...args }) => {
    return (
      <Accordion>
        <AccordionItem {...args}>
          <AccordionHeader {...DefaultHeader}>AccordionHeader</AccordionHeader>
          <AccordionBody {...args.body?.args}>{args.body?.children}</AccordionBody>
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
    body: { args: {}, children:defaultBodyChildren},
    DefaultHeader: DefaultHeader.args,
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

export default meta;