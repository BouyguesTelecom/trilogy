import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './index'
import { PaginationProps } from './PaginationProps'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
} satisfies Meta<PaginationProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    onClick: (e) => console.log('event', e),
    length: 50,
    defaultPage: 2,
    href: (page) => `?page=${page}`,
  },
}
