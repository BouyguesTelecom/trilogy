import React from 'react'

import { Meta, Story } from '@storybook/react'
import Badge from './Badge'
import { BadgeProps } from './BadgeProps'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta

export const Base: Story<BadgeProps> = (args) => <Badge {...args} />

Base.args = {
  content: 5,
}

export const WithContent: Story<BadgeProps> = (args) => <Badge {...args} />

WithContent.args = {
  content: 2,
  textContent: 'Actions à réaliser',
  direction: 'right'
}

