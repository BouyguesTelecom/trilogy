import React from 'react';
import type { Meta, StoryObj, StoryContext } from '@storybook/react';

import {Accordion, AccordionItem, AccordionBody, AccordionHeader, } from './index';
import { DefaultHeader } from './item/header/AccordionHeader.stories';
import { DefaultBody } from './item/body/AccordionBody.stories';
import {AccordionScreen} from '../../../../examples/react-template/screens/Accordion'
import {Text} from '../text'
import { renderBefore } from '../../../storybook/preview';

const meta = {
  title: 'Accordion/React',
  component: Accordion,
  canvas: 'toto',
} as Meta<typeof Accordion>;

renderBefore(meta)

export const Template: StoryObj = {
  render: ({ ...args }) => {
    return (
      <Accordion>
        <AccordionItem {...args}>
          <AccordionHeader {...DefaultHeader}>AccordionHeader</AccordionHeader>
          <AccordionBody {...DefaultBody}>AccordionBody</AccordionBody>
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
    DefaultBody: DefaultBody,
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

export default meta;