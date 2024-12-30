import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Stepper, Step } from '../index'
import { StepProps } from './StepProps'
import { IconName } from '../../icon'

const meta = {
  title: 'Components/Stepper/Step',
  component: Step,
  subcomponents: { Stepper },
} satisfies Meta<StepProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: StepProps) => (
  <Stepper>
    <Step {...args} />
    <Step done label='Compléments' />
    <Step done label='Coordonnées' />
    <Step current label='Livraison' />
    <Step label='Confirmation' />
  </Stepper>
)

export const Etape: Story = {
  render: Template,
  args: {
    label: 'step',
  },
}

export const EtapeEnCours: Story = {
  render: Template,
  args: {
    label: 'is-current',
    current: true,
  },
}

export const EtapeTerminee: Story = {
  render: Template,
  args: {
    label: 'is-done',
    done: true,
  },
}

export const EtapeEnErreur: Story = {
  render: Template,
  args: {
    label: 'is-error',
    error: true,
  },
}

export const EtapeAvecIcone: Story = {
  render: Template,
  args: {
    label: 'Paiement',
    current: true,
    iconName: IconName.BELL,
  },
}
