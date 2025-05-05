import type { Meta, StoryObj } from '@storybook/react'
import AccordionItem from '../item'
import { Accordion, AccordionBody, AccordionHeader } from '../index'
import DefaultBody from './body/AccordionBody.stories'
import DefaultHeader from './header/AccordionHeader.stories'

const meta: Meta<typeof AccordionItem> = {
  component: AccordionItem,
  title: 'Accordion',
  subcomponents: { AccordionBody, AccordionHeader },
}
export default meta

type Story = StoryObj<typeof AccordionItem>

export const DefaultItem: Story = {
  render: ({ ...args }) => {
    return (
      <Accordion>
        <AccordionItem {...args}>
          <AccordionHeader {...DefaultHeader}></AccordionHeader>
          <AccordionBody {...DefaultBody}></AccordionBody>
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
  },
}
