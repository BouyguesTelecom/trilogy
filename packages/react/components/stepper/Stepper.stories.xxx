import type { Meta, StoryObj } from '@storybook/react'
import { Stepper, Step, Section } from '../../lib'

const meta: Meta<typeof Step> = {
  component: Step,
  argTypes:{
    className: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
    done: {
      control: { type: 'boolean' },
    },
    current: {
      control: { type: 'boolean' },
    },
  }
}

export default meta

type Story = StoryObj<typeof Step>


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


export const Sandbox: Story = {
  render: (args) => (
    <Section>
      <Stepper>
        <Step done label="Récapitulatif" />
        <Step done label="Compléments" />
        <Step done label="Coordonnées" />
        <Step {...args}/>
        <Step label="Confirmation" />
      </Stepper>
    </Section>
  ),
  args:{
    done: false,
    current: false,
    label: "Sandbox",
    className: "sandbox",
  }
}
