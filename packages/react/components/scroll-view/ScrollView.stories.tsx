import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { ScrollView } from './index'
import { ScrollViewProps } from './ScrollViewProps'
import { Section } from '../section'
import { Title } from '../title'

const meta = {
  title: 'Components/ScrollView',
  component: ScrollView,
} satisfies Meta<ScrollViewProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: ScrollViewProps) => (
  <ScrollView {...args}>
    <Section>
      <Title>Title</Title>
    </Section>
  </ScrollView>
)

export const Base: Story = {
  render: Template,
}
