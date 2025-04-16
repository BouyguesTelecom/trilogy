import type { Meta, StoryObj } from '@storybook/react'
import { AccordionBody } from '../../index'

const meta: Meta<typeof AccordionBody> = {
  component: AccordionBody,
}
export default meta

type Story = StoryObj<typeof AccordionBody>;

export const DefaultBody: Story = {
  render: ({ ...args }) => {
    return(
      <AccordionBody {...args}/>
    )
  },
  args: {
    children: 'Body 1',
    className: 'body-class',
  },
}
