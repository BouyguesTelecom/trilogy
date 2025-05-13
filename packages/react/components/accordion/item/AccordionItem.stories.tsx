import type { Meta, StoryObj } from '@storybook/react'
import AccordionItem from '../item'
import { Accordion, AccordionBody, AccordionHeader } from '../index'
import { Body, defaultArgs } from './body/AccordionBody.stories'
import DefaultHeader from './header/AccordionHeader.stories'

const meta: Meta<typeof AccordionItem> = {
  component: AccordionItem,
  title: 'Accordion/Subcomponents',
  subcomponents: { AccordionBody, AccordionHeader },
  argTypes: {
    children: {
      options: ['Normal', 'BigBody'],
      mapping: {
        Normal: <><AccordionHeader>Normal Header</AccordionHeader><AccordionBody>Body test 12</AccordionBody></>,
        BigBody: <><AccordionHeader>Normal Header</AccordionHeader><AccordionBody>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aspernatur iure officiis, ducimus exercitationem odio tenetur vel officia reprehenderit voluptate corrupti cumque, repellat quod earum repellendus laborum numquam accusamus veniam?</AccordionBody></>,
      },
    },
  }
}
export default meta

type Story = StoryObj<typeof AccordionItem>

const defaultBodyArgs = Body.args

const DefaultAccordionBody = <AccordionBody {...defaultArgs}></AccordionBody>

export const Item: Story = {
  render: ({ ...args }) => {
    return (
        <AccordionItem {...args}></AccordionItem>
    )
  },
  args: {
    children: DefaultAccordionBody,
    className: undefined,
    disabled: false,
    open: false,
    onClick: undefined,
    DefaultBody: defaultBodyArgs,
    DefaultHeader: DefaultHeader.args,
  },
}
