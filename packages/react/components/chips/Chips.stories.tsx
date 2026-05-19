import type { Meta, StoryObj } from '@storybook/react'
import ChipsComponent from './Chips'
import type { ChipsProps } from './ChipsProps'
import ChipsList from './list/ChipsList'
import type { ChipsListProps } from './list/ChipsListProps'
import React from 'react'

ChipsComponent.displayName = 'Chips'
ChipsList.displayName = 'ChipsList'
Object.defineProperty(ChipsComponent, 'name', { value: 'Chips' })

const Chips = (props: ChipsProps): JSX.Element => <ChipsComponent {...props} />
Chips.displayName = 'Chips'

interface ChipsStoryArgs extends ChipsProps, Omit<ChipsListProps, 'children'> {
  chips_label: string
  chips_active: boolean
  chips_disabled: boolean
  multiple: boolean
  scrollable: boolean
}

const meta: Meta<ChipsStoryArgs> = {
  title: 'Components/Chips',
  component: Chips,
  subcomponents: { ChipsList },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    chips_label: {
      control: 'text',
      name: 'children',
      description: 'Chips label text',
      table: { category: 'Chips' },
    },
    chips_active: {
      control: 'boolean',
      name: 'active',
      description: 'Active state',
      table: { category: 'Chips' },
    },
    chips_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disabled state',
      table: { category: 'Chips' },
    },
    multiple: {
      control: 'boolean',
      name: 'multiple',
      description: 'Allow multiple selection with checked icon',
      table: { category: 'ChipsList' },
    },
    scrollable: {
      control: 'boolean',
      name: 'scrollable',
      description: 'Make list scrollable if needed',
      table: { category: 'ChipsList' },
    },
  },
  args: {
    chips_label: 'Chip option',
    chips_active: false,
    chips_disabled: false,
    multiple: false,
    scrollable: false,
  },
  render: ({ chips_label, chips_active, chips_disabled, multiple, scrollable }) => (
    <ChipsList multiple={multiple} scrollable={scrollable}>
      <ChipsComponent active={chips_active} disabled={chips_disabled} onClick={() => {}}>
        {chips_label}
      </ChipsComponent>
    </ChipsList>
  ),
}

export default meta

type Story = StoryObj<ChipsStoryArgs>

export const Default: Story = {}

export const Active: Story = {
  args: {
    chips_active: true,
  },
}

export const Disabled: Story = {
  args: {
    chips_disabled: true,
  },
}

export const WithChipsListMultiple: Story = {
  args: {
    multiple: true,
  },
  render: (args) => (
    <ChipsList multiple>
      <ChipsComponent active={args.chips_active} disabled={args.chips_disabled} onClick={() => {}}>
        Tag 1
      </ChipsComponent>
      <ChipsComponent active={args.chips_active} disabled={args.chips_disabled} onClick={() => {}}>
        Tag 2
      </ChipsComponent>
      <ChipsComponent active={args.chips_active} disabled={args.chips_disabled} onClick={() => {}}>
        Tag 3
      </ChipsComponent>
    </ChipsList>
  ),
}

export const Scrollable: Story = {
  args: {
    scrollable: true,
  },
  render: (args) => (
    <ChipsList scrollable>
      <ChipsComponent active={args.chips_active} disabled={args.chips_disabled} onClick={() => {}}>
        Item 1
      </ChipsComponent>
      <ChipsComponent active={args.chips_active} disabled={args.chips_disabled} onClick={() => {}}>
        Item 2
      </ChipsComponent>
      <ChipsComponent active={args.chips_active} disabled={args.chips_disabled} onClick={() => {}}>
        Item 3
      </ChipsComponent>
      <ChipsComponent active={args.chips_active} disabled={args.chips_disabled} onClick={() => {}}>
        Item 4
      </ChipsComponent>
      <ChipsComponent active={args.chips_active} disabled={args.chips_disabled} onClick={() => {}}>
        Item 5
      </ChipsComponent>
    </ChipsList>
  ),
}
