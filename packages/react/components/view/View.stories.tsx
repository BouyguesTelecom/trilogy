import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { View } from './index'
import { ViewProps } from './ViewProps'
import { Text } from '../text'
import { Icon, IconName, IconSize } from '../icon'

const meta = {
  title: 'Components/View',
  component: View,
} satisfies Meta<ViewProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: ViewProps) => (
  <View {...args}>
    <Text>Icon DOWN</Text>
    <Icon size={IconSize.LARGE} name={IconName.TIMES} />
  </View>
)

export const Base: Story = {
  render: Template,
}
