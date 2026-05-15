import type { Meta, StoryObj } from '@storybook/react'
import { IconName } from '../icon'
import ListComponent from './List'
import ListItem from './item/ListItem'
import { ListIconStatus } from './item/ListItemProps'
import { ListItemDescription } from './item/description'
import React from 'react'

ListComponent.displayName = 'List'

interface ListStoryArgs {
  list_ordered: boolean
  list_divider: boolean
  list_id?: string
  list_className?: string
  list_testId?: string
  item_iconName?: IconName
  item_status?: ListIconStatus
  item_testId?: string
  item_className?: string
  description_text: string
  description_className?: string
  item_primary: string
  item_secondary: string
  item_tertiary: string
}

const List = ({
  list_ordered,
  list_divider,
  list_id,
  list_className,
  list_testId,
  item_iconName,
  item_status,
  item_testId,
  item_className,
  description_text,
  description_className,
  item_primary,
  item_secondary,
  item_tertiary,
}: ListStoryArgs): JSX.Element => (
  <ListComponent
    ordered={list_ordered}
    divider={list_divider}
    id={list_id}
    className={list_className}
    testId={list_testId}
  >
    {[item_primary, item_secondary, item_tertiary].map((label) => (
      <ListItem
        key={label}
        iconName={item_iconName}
        status={item_status}
        testId={item_testId}
        className={item_className}
      >
        {label}
        <ListItemDescription className={description_className}>{description_text}</ListItemDescription>
      </ListItem>
    ))}
  </ListComponent>
)

List.displayName = 'List'

const meta: Meta<ListStoryArgs> = {
  title: 'Components/List',
  component: List,
  subcomponents: { ListItem, ListItemDescription },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    list_ordered: {
      control: 'boolean',
      name: 'ordered',
      description: 'Display as ordered list',
      table: { category: 'List' },
    },
    list_divider: {
      control: 'boolean',
      name: 'divider',
      description: 'Add a divider between items',
      table: { category: 'List' },
    },
    list_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
      table: { category: 'List' },
    },
    list_className: {
      control: 'text',
      name: 'className',
      description: 'Custom list classes',
      table: { category: 'List' },
    },
    list_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier for list',
      table: { category: 'List' },
    },
    item_iconName: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      name: 'iconName',
      description: 'Optional icon displayed before each item',
      table: { category: 'ListItem' },
    },
    item_status: {
      control: 'select',
      options: [undefined, ...Object.values(ListIconStatus)],
      name: 'status',
      description: 'Optional item status color',
      table: { category: 'ListItem' },
    },
    item_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier for each item',
      table: { category: 'ListItem' },
    },
    item_className: {
      control: 'text',
      name: 'className',
      description: 'Custom item classes',
      table: { category: 'ListItem' },
    },
    description_text: {
      control: 'text',
      name: 'children',
      description: 'Description text for each ListItemDescription',
      table: { category: 'ListItemDescription' },
    },
    description_className: {
      control: 'text',
      name: 'className',
      description: 'Custom description classes',
      table: { category: 'ListItemDescription' },
    },
    item_primary: {
      control: 'text',
      name: 'children',
      description: 'First item label',
      table: { category: 'ListItem' },
    },
    item_secondary: {
      control: 'text',
      name: 'children',
      description: 'Second item label',
      table: { category: 'ListItem' },
    },
    item_tertiary: {
      control: 'text',
      name: 'children',
      description: 'Third item label',
      table: { category: 'ListItem' },
    },
  },
  args: {
    list_ordered: false,
    list_divider: false,
    list_id: '',
    list_className: '',
    list_testId: '',
    item_iconName: undefined,
    item_status: undefined,
    item_testId: '',
    item_className: '',
    description_text: 'Additional details for this list entry.',
    description_className: '',
    item_primary: 'First item',
    item_secondary: 'Second item',
    item_tertiary: 'Third item',
  },
  render: (args) => <List {...args} />,
}

export default meta
type Story = StoryObj<ListStoryArgs>

export const Default: Story = {}

export const Ordered: Story = {
  args: {
    list_ordered: true,
  },
}

export const WithDivider: Story = {
  args: {
    list_divider: true,
  },
}

export const WithIconAndStatus: Story = {
  args: {
    item_iconName: IconName.CHECK,
    item_status: ListIconStatus.SUCCESS,
  },
}

export const WithoutDescription: Story = {
  render: ({
    list_ordered,
    list_divider,
    list_id,
    list_className,
    list_testId,
    item_iconName,
    item_status,
    item_testId,
    item_className,
    item_primary,
    item_secondary,
    item_tertiary,
  }) => (
    <ListComponent
      ordered={list_ordered}
      divider={list_divider}
      id={list_id}
      className={list_className}
      testId={list_testId}
    >
      {[item_primary, item_secondary, item_tertiary].map((label) => (
        <ListItem
          key={label}
          iconName={item_iconName}
          status={item_status}
          testId={item_testId}
          className={item_className}
        >
          {label}
        </ListItem>
      ))}
    </ListComponent>
  ),
}

export const Playground: Story = {}
