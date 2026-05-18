import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import PaginationComponent from './Pagination'

PaginationComponent.displayName = 'Pagination'

interface PaginationStoryArgs {
  pagination_length: number
  pagination_defaultPage: number
  pagination_id: string
  pagination_className: string
  pagination_testId: string
}

const Pagination = ({
  pagination_length,
  pagination_defaultPage,
  pagination_id,
  pagination_className,
  pagination_testId,
}: PaginationStoryArgs): JSX.Element => (
  <PaginationComponent
    length={pagination_length}
    defaultPage={pagination_defaultPage}
    id={pagination_id || undefined}
    className={pagination_className || undefined}
    testId={pagination_testId || undefined}
    onClick={() => undefined}
  />
)

Pagination.displayName = 'Pagination'

const meta: Meta<PaginationStoryArgs> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    pagination_length: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      name: 'length',
      description: 'Number of pages',
    },
    pagination_defaultPage: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      name: 'defaultPage',
      description: 'Default active page',
    },
    pagination_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
    },
    pagination_className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes',
    },
    pagination_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
    },
  },
  args: {
    pagination_length: 10,
    pagination_defaultPage: 1,
    pagination_id: '',
    pagination_className: '',
    pagination_testId: '',
  },
  render: (args) => <Pagination {...args} />,
}

export default meta
type Story = StoryObj<PaginationStoryArgs>

export const Default: Story = {}

export const DefaultPageThree: Story = {
  args: {
    pagination_defaultPage: 3,
  },
}

export const FivePages: Story = {
  args: {
    pagination_length: 5,
  },
}

export const WithSeoHref: Story = {
  render: ({ pagination_length, pagination_defaultPage, pagination_id, pagination_className, pagination_testId }) => (
    <PaginationComponent
      length={pagination_length}
      defaultPage={pagination_defaultPage}
      id={pagination_id || undefined}
      className={pagination_className || undefined}
      testId={pagination_testId || undefined}
      href={(page) => `?page=${page}`}
      onClick={() => undefined}
    />
  ),
}

export const Playground: Story = {}
