import * as React from 'react'

import { Meta, Story } from '@storybook/react'
import { View } from './index'
import { Text } from '../text'
import { Icon, IconSize } from '../icon'
import { IconName } from '@trilogy-ds/assets/lib/iconNameEnum'
import { ViewProps } from './ViewProps'

export default {
  title: 'Components/View',
  component: View,
} as Meta

export const Base: Story<ViewProps> = (args) => (
  <View {...args}>
    <Text>Icon DOWN</Text>
    <Icon size={IconSize.LARGE} name={IconName.TIMES} />
  </View>
)
