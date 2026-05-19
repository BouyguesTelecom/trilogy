import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import PaginationComponent from './Pagination'

PaginationComponent.displayName = 'Pagination'

interface PaginationStoryArgs {
  length: number
  defaultPage: number
  id: string
  className: string
  testId: string
}

const Pagination = ({ length, defaultPage, id, className, testId }: PaginationStoryArgs): JSX.Element => (
  <PaginationComponent
    length={length}
    defaultPage={defaultPage}
    id={id || undefined}
    className={className || undefined}
    testId={testId || undefined}
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
      source: {
        type: 'dynamic',
      },
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    length: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      name: 'length',
      description: 'Number of pages',
    },
    defaultPage: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      name: 'defaultPage',
      description: 'Default active page',
    },
    id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
    },
    className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes',
    },
    testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
    },
  },
  args: {
    length: 10,
    defaultPage: 1,
    id: '',
    className: '',
    testId: '',
  },
  render: ({ length, defaultPage, id, className, testId }) => (
    <PaginationComponent
      length={length}
      defaultPage={defaultPage}
      id={id || undefined}
      className={className || undefined}
      testId={testId || undefined}
      onClick={() => undefined}
    />
  ),
}

export default meta
type Story = StoryObj<PaginationStoryArgs>

export const Default: Story = {}

export const DefaultPageThree: Story = {
  args: {
    defaultPage: 3,
  },
}

export const FivePages: Story = {
  args: {
    length: 5,
  },
}

export const WithSeoHref: Story = {
  render: ({ length, defaultPage, id, className, testId }) => (
    <PaginationComponent
      length={length}
      defaultPage={defaultPage}
      id={id || undefined}
      className={className || undefined}
      testId={testId || undefined}
      href={(page) => `?page=${page}`}
      onClick={() => undefined}
    />
  ),
}

export const Playground: Story = {}
