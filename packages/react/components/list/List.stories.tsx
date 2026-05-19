import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { IconName } from '../icon'
import ListComponent from './List'
import ListItem from './item/ListItem'
import { ListIconStatus } from './item/ListItemProps'
import { ListItemDescription } from './item/description'

ListComponent.displayName = 'List'
Object.defineProperty(ListComponent, 'name', { value: 'List' })

interface ListStoryArgs {
  ordered: boolean
  divider: boolean
  id?: string
  className?: string
  testId?: string
  iconName?: IconName
  status?: ListIconStatus
  itemTestId?: string
  itemClassName?: string
  descriptionChildren: string
  descriptionClassName?: string
  itemPrimary: string
  itemSecondary: string
  itemTertiary: string
}

const List = ({
  ordered,
  divider,
  id,
  className,
  testId,
  iconName,
  status,
  itemTestId,
  itemClassName,
  descriptionChildren,
  descriptionClassName,
  itemPrimary,
  itemSecondary,
  itemTertiary,
}: ListStoryArgs): JSX.Element => (
  <ListComponent ordered={ordered} divider={divider} id={id} className={className} testId={testId}>
    {[itemPrimary, itemSecondary, itemTertiary].map((label) => (
      <ListItem key={label} iconName={iconName} status={status} testId={itemTestId} className={itemClassName}>
        {label}
        <ListItemDescription className={descriptionClassName}>{descriptionChildren}</ListItemDescription>
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
      source: {
        type: 'dynamic',
      },
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    ordered: {
      control: 'boolean',
      name: 'ordered',
      description: 'Display as ordered list',
      table: { category: 'List' },
    },
    divider: {
      control: 'boolean',
      name: 'divider',
      description: 'Add a divider between items',
      table: { category: 'List' },
    },
    id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
      table: { category: 'List' },
    },
    className: {
      control: 'text',
      name: 'className',
      description: 'Custom list classes',
      table: { category: 'List' },
    },
    testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier for list',
      table: { category: 'List' },
    },
    iconName: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      name: 'iconName',
      description: 'Optional icon displayed before each item',
      table: { category: 'ListItem' },
    },
    status: {
      control: 'select',
      options: [undefined, ...Object.values(ListIconStatus)],
      name: 'status',
      description: 'Optional item status color',
      table: { category: 'ListItem' },
    },
    itemTestId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier for each item',
      table: { category: 'ListItem' },
    },
    itemClassName: {
      control: 'text',
      name: 'className',
      description: 'Custom item classes',
      table: { category: 'ListItem' },
    },
    descriptionChildren: {
      control: 'text',
      name: 'children',
      description: 'Description text for each ListItemDescription',
      table: { category: 'ListItemDescription' },
    },
    descriptionClassName: {
      control: 'text',
      name: 'className',
      description: 'Custom description classes',
      table: { category: 'ListItemDescription' },
    },
    itemPrimary: {
      control: 'text',
      name: 'children',
      description: 'First item label',
      table: { category: 'ListItem' },
    },
    itemSecondary: {
      control: 'text',
      name: 'children',
      description: 'Second item label',
      table: { category: 'ListItem' },
    },
    itemTertiary: {
      control: 'text',
      name: 'children',
      description: 'Third item label',
      table: { category: 'ListItem' },
    },
  },
  args: {
    ordered: false,
    divider: false,
    id: '',
    className: '',
    testId: '',
    iconName: undefined,
    status: undefined,
    itemTestId: '',
    itemClassName: '',
    descriptionChildren: 'Additional details for this list entry.',
    descriptionClassName: '',
    itemPrimary: 'First item',
    itemSecondary: 'Second item',
    itemTertiary: 'Third item',
  },
  render: ({
    ordered,
    divider,
    id,
    className,
    testId,
    iconName,
    status,
    itemTestId,
    itemClassName,
    descriptionChildren,
    descriptionClassName,
    itemPrimary,
    itemSecondary,
    itemTertiary,
  }) => (
    <ListComponent ordered={ordered} divider={divider} id={id} className={className} testId={testId}>
      {[itemPrimary, itemSecondary, itemTertiary].map((label) => (
        <ListItem key={label} iconName={iconName} status={status} testId={itemTestId} className={itemClassName}>
          {label}
          <ListItemDescription className={descriptionClassName}>{descriptionChildren}</ListItemDescription>
        </ListItem>
      ))}
    </ListComponent>
  ),
}

export default meta
type Story = StoryObj<ListStoryArgs>

export const Default: Story = {}

export const Ordered: Story = {
  args: {
    ordered: true,
  },
}

export const WithDivider: Story = {
  args: {
    divider: true,
  },
}

export const WithIconAndStatus: Story = {
  args: {
    iconName: IconName.CHECK,
    status: ListIconStatus.SUCCESS,
  },
}

export const WithoutDescription: Story = {
  render: ({
    ordered,
    divider,
    id,
    className,
    testId,
    iconName,
    status,
    itemTestId,
    itemClassName,
    itemPrimary,
    itemSecondary,
    itemTertiary,
  }) => (
    <ListComponent ordered={ordered} divider={divider} id={id} className={className} testId={testId}>
      {[itemPrimary, itemSecondary, itemTertiary].map((label) => (
        <ListItem key={label} iconName={iconName} status={status} testId={itemTestId} className={itemClassName}>
          {label}
        </ListItem>
      ))}
    </ListComponent>
  ),
}

export const Playground: Story = {}
