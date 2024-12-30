import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from './index'
import { BadgeProps } from './BadgeProps'
import { BadgePositionEnum } from './BadgeEnum'
import { VariantState } from '../../objects'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    position: {
      options: Object.values(BadgePositionEnum),
    },
    variant: {
      table:{
        type: { summary: 'VariantState' },
      },
      options: Object.values(VariantState),
    }
  },
} satisfies Meta<BadgeProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    label: 5,
  },
}

export const WithContent: Story = {
  args: {
    label: 2,
    children: 'Actions à réaliser',
    position: BadgePositionEnum.TOP_RIGHT,
    variant: VariantState.ACCENT
  },
}
