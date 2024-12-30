import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Stepper } from './index'
import { StepperProps } from './StepperProps'
import Step from './step'

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  subcomponents: { Step },
} satisfies Meta<StepperProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: StepperProps) => (
  <Stepper {...args}>
    <Step done label='Récapitulatif' />
    <Step done label='Compléments' />
    <Step done label='Coordonnées' />
    <Step current label='Livraison' />
    <Step label='Confirmation' />
  </Stepper>
)

export const Base: Story = {
  render: Template,
}
