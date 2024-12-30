import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Tag from './Tag'
import TagList from './list'
import { TagProps } from './TagProps'
import { TabsProps } from '../tabs/TabsProps'
import Tabs from '../tabs/Tabs'
import { Tab, TabList } from '../tabs'
import { TagVariant } from './TagEnum'
import { IconName } from '../icon'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  subcomponents: { TagList },
} satisfies Meta<TagProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: TagProps) => (
  <TagList>
    <Tag {...args} />
    <Tag {...args} />
    <Tag {...args} />
  </TagList>
)

export const Base: Story = {
  render: Template,
  args: {
    variant: TagVariant.INFO,
    label: 'Play With me !',
  },
}

export const Inversé: Story = {
  render: Template,
  args: {
    variant: TagVariant.INFO,
    inverted: true,
    label: 'Play With me !',
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
}

export const TagAvecIcônes: Story = {
  render: Template,
  args: {
    iconName: IconName.EXCLAMATION_CIRCLE,
    variant: TagVariant.ERROR,
    label: 'Play With me !',
  },
}

export const Small: Story = {
  render: Template,
  args: {
    small: true,
    label: 'Play With me !',
  },
}
