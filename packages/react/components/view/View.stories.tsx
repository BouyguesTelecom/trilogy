import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { View } from './index'
import { ViewProps } from './ViewProps'
import { Text } from '../text'
import { Icon, IconName, IconSize } from '../icon'
import { Alignable, Justifiable } from '../../objects'

const meta = {
  title: 'Components/View',
  component: View,
  argTypes: {
    align: {
      control: 'select',
      options: Object.values(Alignable),
      mapping: Object.assign({}, Alignable),
      table: {
        type: { summary: 'Alignable' },
      },
    },
    verticalAlign: {
      control: 'select',
      options: Object.values(Alignable),
      mapping: Object.assign({}, Alignable),
      table: {
        type: { summary: 'Alignable' },
      },
    },
    justify: {
      options: Object.values(Justifiable),
      mapping: Object.assign({}, Justifiable),
      table: {
        type: { summary: 'Justifiable' },
      },
    },
  },
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
