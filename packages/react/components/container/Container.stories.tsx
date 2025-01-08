import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './index'
import { ContainerProps } from 'postcss'
import { Box } from '../box'
import { Text } from '../text'

const meta = {
  title: 'Components/Container',
  component: Container,
} satisfies Meta<ContainerProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: ContainerProps) => (
  <Container {...args}>
    <Box>
      <Text>Je suis une box dans un container</Text>
    </Box>
  </Container>
)

export const Base: Story = {
  render: Template,
  args: {},
}

export const ConteneurMedium: Story = {
  render: Template,
  args: {
    medium: true,
  },
}
