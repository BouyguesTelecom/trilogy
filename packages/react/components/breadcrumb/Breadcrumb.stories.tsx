import type { Meta, StoryObj } from '@storybook/react'
import BreadcrumbComponent from './Breadcrumb'
import type { BreadcrumbWebProps } from './BreadcrumbProps'
import BreadcrumbItem from './item/BreadcrumbItem'
import React from 'react'

BreadcrumbComponent.displayName = 'Breadcrumb'
Object.defineProperty(BreadcrumbComponent, 'name', { value: 'Breadcrumb' })

const Breadcrumb = ({ children, ...props }: BreadcrumbWebProps): JSX.Element => (
  <BreadcrumbComponent {...props}>
    {children ?? (
      <>
        <BreadcrumbItem href='/'>Home</BreadcrumbItem>
        <BreadcrumbItem active>Current page</BreadcrumbItem>
      </>
    )}
  </BreadcrumbComponent>
)
Breadcrumb.displayName = 'Breadcrumb'
Object.defineProperty(Breadcrumb, 'name', { value: 'Breadcrumb' })

interface BreadcrumbStoryArgs {
  item_label_1: string
  item_href_1: string
  item_label_2: string
  item_href_2: string
  item_label_3: string
  item_active_3: boolean
  item_clickable_3: boolean
}

const meta: Meta<BreadcrumbStoryArgs> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    item_label_1: {
      control: 'text',
      name: 'children',
      description: 'First breadcrumb item label',
      table: { category: 'BreadcrumbItem #1' },
    },
    item_href_1: {
      control: 'text',
      name: 'href',
      description: 'First breadcrumb item link',
      table: { category: 'BreadcrumbItem #1' },
    },
    item_label_2: {
      control: 'text',
      name: 'children',
      description: 'Second breadcrumb item label',
      table: { category: 'BreadcrumbItem #2' },
    },
    item_href_2: {
      control: 'text',
      name: 'href',
      description: 'Second breadcrumb item link',
      table: { category: 'BreadcrumbItem #2' },
    },
    item_label_3: {
      control: 'text',
      name: 'children',
      description: 'Last breadcrumb item label',
      table: { category: 'BreadcrumbItem #3' },
    },
    item_active_3: {
      control: 'boolean',
      name: 'active',
      description: 'Mark last item as current page',
      table: { category: 'BreadcrumbItem #3' },
    },
    item_clickable_3: {
      control: 'boolean',
      name: 'clickable',
      description: 'Render last item as a link instead of active text',
      table: { category: 'BreadcrumbItem #3' },
    },
  },
  args: {
    item_label_1: 'Home',
    item_href_1: '/',
    item_label_2: 'Products',
    item_href_2: '/products',
    item_label_3: 'Details',
    item_active_3: true,
    item_clickable_3: false,
  },
  render: ({ item_label_1, item_href_1, item_label_2, item_href_2, item_label_3, item_active_3, item_clickable_3 }) => (
    <Breadcrumb>
      <BreadcrumbItem href={item_href_1}>{item_label_1}</BreadcrumbItem>
      <BreadcrumbItem href={item_href_2}>{item_label_2}</BreadcrumbItem>
      {item_clickable_3 ? (
        <BreadcrumbItem href='#'>{item_label_3}</BreadcrumbItem>
      ) : (
        <BreadcrumbItem active={item_active_3}>{item_label_3}</BreadcrumbItem>
      )}
    </Breadcrumb>
  ),
}

export default meta
type Story = StoryObj<BreadcrumbStoryArgs>

export const Default: Story = {}

export const WithClickableLastItem: Story = {
  args: {
    item_clickable_3: true,
    item_active_3: false,
  },
}

export const ShortPath: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href='/'>Home</BreadcrumbItem>
      <BreadcrumbItem active>Account</BreadcrumbItem>
    </Breadcrumb>
  ),
}

export const Playground: Story = {}
