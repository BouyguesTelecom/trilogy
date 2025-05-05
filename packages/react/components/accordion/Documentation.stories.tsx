import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {Accordion, AccordionItem, AccordionBody, AccordionHeader, } from './index';
import { DefaultHeader } from './item/header/AccordionHeader.stories';
import { DefaultBody } from './item/body/AccordionBody.stories';
import {AccordionScreen} from '../../../../examples/react-template/screens/Accordion'
import {Text} from '../text'
import AccordionDocs from './AccordionDocs.mdx';

export default {
  title: 'Accordion',
  component: Accordion,
} as Meta<typeof Accordion>;

export const Documentation: StoryObj = {
  render: ({ ...args }) => {
    return (
      <AccordionScreen/>
    )
  }
}
