import type { Meta, StoryObj } from '@storybook/react'
import Fab from './Fab'
import { FabProps } from './FabProps'
import { IconName } from '../icon'

const meta = {
  title: 'Components/Fab',
  component: Fab,
} satisfies Meta<FabProps>

export default meta
type Story = StoryObj<typeof meta>


export const Base: Story = {
  args: {
    iconName: IconName.BELL,
    children: 'Alert',
  },
}

export const Position: Story = {
  args: {
    iconName: IconName.BELL,
    bottom: 24,
    right: 23,
    children: 'Je suis en position absolute',
  },
}

export const Extended: Story = {
  args: {
    iconName: IconName.BELL,
    extended: true,
    children: 'Extended fab',
  },
}
