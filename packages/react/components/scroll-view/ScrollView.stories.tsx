import * as React from 'react'

import { Meta, Story } from '@storybook/react'
import { ScrollView } from './index'
import { ScrollViewProps } from './ScrollViewProps'
import { Section } from '../section'
import { Title } from '../title'

export default {
  title: 'Components/ScrollView',
  component: ScrollView,
} as Meta

export const Base: Story<ScrollViewProps> = (args) => (
  <ScrollView {...args}>
    <Section>
      <Title>Title</Title>
    </Section>
  </ScrollView>
)
