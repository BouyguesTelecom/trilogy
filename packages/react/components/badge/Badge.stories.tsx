import * as React from 'react'

import { Meta, Story } from '@storybook/react'
import Badge from './Badge'
import { BadgeProps } from './BadgeProps'
import { BadgePositionEnum } from './BadgeEnum'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta

export const Base: Story<BadgeProps> = (args) => <Badge {...args} />

Base.args = {
  label: 5,
}

export const WithContent: Story<BadgeProps> = (args) => <Badge {...args} />

WithContent.args = {
  label: 2,
  children: 'Actions à réaliser',
  position: BadgePositionEnum.TOP_RIGHT,
}
