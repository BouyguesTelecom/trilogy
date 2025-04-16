import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionBody, AccordionHeader } from './index'
import AccordionItem from './item'
import DefaultItem from './item/AccordionItem.stories'
import DefaultBody from './item/body/AccordionBody.stories'
import DefaultHeader from './item/header/AccordionHeader.stories'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  subcomponents: { AccordionItem, AccordionHeader, AccordionBody },
}
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: ({ ...args }) => {
    return (
      <Accordion {...args}>
        <AccordionItem {...DefaultItem}>
          <AccordionHeader {...DefaultHeader}/>
          <AccordionBody {...DefaultBody}/>
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
    );
  },
  args: {
    children: "Accordion",
    className: undefined,
    DefaultItem: DefaultItem.args,
    DefaultBody: DefaultBody.args,
    DefaultHeader: DefaultHeader.args
  },
};
