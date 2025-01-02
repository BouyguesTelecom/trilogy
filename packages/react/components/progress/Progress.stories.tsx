import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './index'
import { ProgressProps } from './ProgressProps'
import { StatusState } from '../../objects'

const meta = {
  title: 'Components/ProgressBar',
  component: Progress,
  argTypes:{
    status: {
      options: Object.values(StatusState),
      table: {
        type: { summary: 'StatusState' },
      },
    },
  }
} satisfies Meta<ProgressProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: ProgressProps) => (
  // L'utilisation de la progress bar nécessite l'injection de Trilogy-Vanilla pour fonctioner :
  // <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
  <Progress {...args} />
)

export const Base: Story = {
  render: Template,
  args: {
    value: 10,
  },
}

export const AvecLégende: Story = {
  render: Template,
  args: {
    value: 30,
    status: StatusState.INFO,
    legendCenter: 'My unique legend',
  },
}

export const Petite: Story = {
  render: Template,
  args: {
    value: 30,
    status: StatusState.INFO,
    small: true,
  },
}
