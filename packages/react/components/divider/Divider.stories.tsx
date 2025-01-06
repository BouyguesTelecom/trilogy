import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Divider } from './index'
import { DividerProps } from './DividerProps'
import { IconName } from '../icon'

const meta = {
  title: 'Components/Divider',
  component: Divider,
  argTypes:{
    iconName: {
      control: 'select',
      options: Object.values(IconName),
      table: {
        type: { summary: 'IconName' },
      },
    },
  }
} satisfies Meta<DividerProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: DividerProps) => <Divider {...args} />

export const Base: Story = {
  render: Template,
}

export const AvecText: Story = {
  render: Template,
  args:{
    content: "Nouveau Message",
  }
}

export const AvecUneIcône: Story = {
  render: Template,
  args:{
    iconName: IconName.EYE,
  }
}
