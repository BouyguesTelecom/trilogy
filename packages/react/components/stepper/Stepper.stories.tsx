import type { Meta, StoryObj } from '@storybook/react'
import { Stepper, Step, Section } from '../../lib'

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  subcomponents: { Step },
}

export default meta

type Story = StoryObj<typeof Stepper>


// @ts-ignore
export const Example: Story = {
  render: () => (
    <Section>
      <Stepper>
        <Step done label="Récapitulatif" />
        <Step done label="Compléments" />
        <Step current label="Coordonnées" />
        <Step label="Livraison" />
        <Step label="Confirmation" />
      </Stepper>
    </Section>
  ),
}
