import type { Meta, StoryObj } from '@storybook/react'
import Pagination from './Pagination'
import { Column, Columns } from '@trilogy-ds/react'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
}

export default meta

type Story = StoryObj<typeof Pagination>

// @ts-ignore
export const Example: Story = {
  render: () => (
    <Columns align="ALIGNED_CENTER">
      <Column narrow>
        <Pagination defaultPage={2} length={5} />
      </Column>
    </Columns>
  ),
}
