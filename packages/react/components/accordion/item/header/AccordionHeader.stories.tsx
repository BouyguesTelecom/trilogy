import type { Meta, StoryObj } from '@storybook/react'
import { AccordionHeader } from '../../index'

const meta: Meta<typeof AccordionHeader> = {
  component: AccordionHeader,
}
export default meta

type Story = StoryObj<typeof AccordionHeader>;

export const DefaultHeader: Story = {
  render: ({...args}) => {
    return(
      <AccordionHeader {...args}/>
    )
  },
  args: {
    children: 'Header 1',
    className: 'header-class',
  },
}
