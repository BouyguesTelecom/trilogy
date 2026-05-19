import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { IconName } from '../icon'
import DropdownComponent from './Dropdown'
import type { DropdownProps } from './DropdownProps'
import DropdownItem from './item/DropdownItem'
import type { DropdownItemProps } from './item/DropdownItemProps'
import DropdownTrigger from './trigger/DropdownTrigger'
import React from 'react'

DropdownComponent.displayName = 'Dropdown'
DropdownTrigger.displayName = 'DropdownTrigger'
DropdownItem.displayName = 'DropdownItem'
Object.defineProperty(DropdownComponent, 'name', { value: 'Dropdown' })

const Dropdown = (props: DropdownProps): JSX.Element => <DropdownComponent {...props} />
Dropdown.displayName = 'Dropdown'

interface DropdownStoryArgs {
  dropdown_defaultOpen: boolean
  dropdown_isActive: boolean
  dropdown_onToggle?: (isOpen: boolean) => void
  trigger_children: string
  item_children: string
  item_iconName?: DropdownItemProps['iconName']
  item_active: boolean
  item_disabled: boolean
  item_onSelect?: () => void
}

const meta: Meta<DropdownStoryArgs> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  subcomponents: { DropdownTrigger, DropdownItem },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    dropdown_defaultOpen: {
      control: 'boolean',
      name: 'defaultOpen',
      description: ' ',
      table: { category: 'Dropdown' },
    },
    dropdown_isActive: {
      control: 'boolean',
      name: 'isActive',
      description: 'Manual open state when no trigger is used',
      table: { category: 'Dropdown' },
    },
    dropdown_onToggle: {
      action: 'toggled',
      name: 'onToggle',
      description: 'Called when dropdown open state changes',
      table: { category: 'Dropdown' },
    },
    trigger_children: {
      control: 'text',
      name: 'children',
      description: 'Trigger label/content',
      table: { category: 'DropdownTrigger' },
    },
    item_children: {
      control: 'text',
      name: 'children',
      description: 'Dropdown item label/content',
      table: { category: 'DropdownItem' },
    },
    item_iconName: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      name: 'iconName',
      description: 'Icon displayed on the left of the item',
      table: { category: 'DropdownItem' },
    },
    item_active: {
      control: 'boolean',
      name: 'active',
      description: 'Active/selected item state',
      table: { category: 'DropdownItem' },
    },
    item_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disabled item state',
      table: { category: 'DropdownItem' },
    },
    item_onSelect: {
      action: 'selected',
      name: 'onSelect',
      description: 'Called when an item is selected',
      table: { category: 'DropdownItem' },
    },
  },
  args: {
    dropdown_defaultOpen: false,
    dropdown_isActive: false,
    trigger_children: 'Choose an option',
    item_children: 'Option 1',
    item_iconName: IconName.CHECK,
    item_active: false,
    item_disabled: false,
  },
  render: ({
    dropdown_defaultOpen,
    dropdown_isActive,
    dropdown_onToggle,
    trigger_children,
    item_children,
    item_iconName,
    item_active,
    item_disabled,
    item_onSelect,
  }) => (
    <DropdownComponent defaultOpen={dropdown_defaultOpen} isActive={dropdown_isActive} onToggle={dropdown_onToggle}>
      <DropdownTrigger>
        <Button variant="PRIMARY">{trigger_children}</Button>
      </DropdownTrigger>
      <DropdownItem iconName={item_iconName} active={item_active} disabled={item_disabled} onSelect={item_onSelect}>
        {item_children}
      </DropdownItem>
      <DropdownItem iconName={IconName.CALENDAR}>Option 2</DropdownItem>
      <DropdownItem iconName={IconName.SEARCH}>Option 3</DropdownItem>
    </DropdownComponent>
  ),
}

export default meta

type Story = StoryObj<DropdownStoryArgs>

export const Default: Story = {}

export const DefaultOpen: Story = {
  args: {
    dropdown_defaultOpen: true,
  },
}

export const ItemActive: Story = {
  args: {
    item_active: true,
  },
}

export const ItemDisabled: Story = {
  args: {
    item_disabled: true,
  },
}
