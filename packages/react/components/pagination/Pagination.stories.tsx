import type { Meta, StoryObj } from '@storybook/react'
import Pagination from './Pagination'
import { Column, Columns } from '@trilogy-ds/react'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  argTypes:{
    length: {
      control: {
        type: 'number',
      },
    },
    defaultPage: {
      control: {
        type: 'number',
      },
    },
    onPageChange: {
      action: 'page changed',
    },
  }
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Example: Story = {
  render: () => (
    <Columns align="ALIGNED_CENTER">
      <Column narrow>
        <Pagination defaultPage={2} length={5} />
      </Column>
    </Columns>
  ),
}

export const Sandbox: Story = {
  render: (args) => (
    <Columns align="ALIGNED_CENTER">
      <Column narrow>
        <Pagination {...args} />
      </Column>
    </Columns>
  ),
  args:{
    length: 16,
    defaultPage: 3,
    onPageChange: () => {},
    pageSize: 100,
  }
}
