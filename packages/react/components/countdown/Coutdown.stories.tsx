import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Countdown, CountdownFormat } from './index'
import { CountdownProps } from './CountdownProps'
import { ContainerProps } from 'postcss'
import { Container } from '../container'
import { Box } from '../box'
import { Text } from '../text'

const meta = {
  title: 'Components/Countdown',
  component: Countdown,
} satisfies Meta<CountdownProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: CountdownProps) => (
  // L'utilisation du countdown nécessite l'injection de Trilogy-Vanilla pour fonctioner :
  // <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
  <Countdown {...args} />
)

export const Base: Story = {
  render: Template,
  args: {
    deadline: new Date('2025-03-10 18:00:00'),
  },
}

export const Small: Story = {
  render: Template,
  args: {
    deadline: new Date('2025-03-10 18:00:00'),
    small: true,
  },
}

export const Format: Story = {
  render: Template,
  args: {
    deadline: new Date('2025-03-10 18:00:00'),
    format: CountdownFormat.DAY,
  },
}
