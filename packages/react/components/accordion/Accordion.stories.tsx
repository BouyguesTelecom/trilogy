import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionBody, AccordionHeader } from './index'
import AccordionItem from './item'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  subcomponents: { AccordionItem, AccordionHeader, AccordionBody },
}

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Accordions: Story = {
  render: () => (
    <Accordion>
      <AccordionItem>
        <AccordionHeader>Header 1</AccordionHeader>
        <AccordionBody>Body 1</AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>Header 2</AccordionHeader>
        <AccordionBody>Body 2</AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>Header 3</AccordionHeader>
        <AccordionBody>Body 3</AccordionBody>
      </AccordionItem>
    </Accordion>
  ),
};
