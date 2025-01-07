import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Sticky } from './index'
import { StickyProps } from './StickyProps'
import { Title, TitleLevels } from '../title'
import { Text } from '../text'

const meta = {
  title: 'Components/Sticky',
  component: Sticky,
} satisfies Meta<StickyProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: StickyProps) => (
  <Sticky {...args}>
      <Title level={TitleLevels.ONE}>Title</Title>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</Text>
  </Sticky>
)

export const Base: Story = {
  render: Template,
}
