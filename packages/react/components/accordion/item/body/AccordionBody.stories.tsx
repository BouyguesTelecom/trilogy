import type { Meta, StoryObj } from '@storybook/react'
import { AccordionBody } from '../../index'

const meta: Meta<typeof AccordionBody> = {
  component: AccordionBody,
  title: 'Accordion/Subcomponents/Item',
}
export default meta

type Story = StoryObj<typeof AccordionBody>;


export const defaultArgs = {
  children: 'Body 1',
  className: 'body-class',
}

export const Body: Story = {
  render: ({ ...args }) => {
    return(
      <AccordionBody {...args}/>
    )
  },
  args: defaultArgs,
}
