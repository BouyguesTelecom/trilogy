import type { Meta, StoryObj } from '@storybook/react'
import Range from './Range'
import { Section } from '@trilogy-ds/react'

const meta: Meta<typeof Range> = {
  component: Range,
  argTypes:{
    gap: {
      options: [0, 1, 2],
      control: { type: 'inline-radio' },
    },
    max: {
      control: { type: 'number' },
    },
    min: {
      control: { type: 'number' },
    },
    valueMax: {
      control: { type: 'number' },
    },
    valueMin: {
      control: { type: 'number' },
    },
  }
}

export default meta

type Story = StoryObj<typeof Range>


// @ts-ignore
export const Example: Story = {
  render: () => (
    <Section>
      <Range gap={0} id="range-id" label="Ceci est un label" max={100} min={0} name="range-name" unit="€" valueMax={50} valueMin={0} />
    </Section>
  ),
}


// @ts-ignore
export const Sandbox: Story = {
  render: (args) => (
    <Section>
      <Range {...args} />
    </Section>
  ),
  args:{
    id: "range-id",
    label: "Ceci est un label",
    max: 100,
    min: 0,
    name: "range-name",
    unit: "€",
    valueMax: 50,
    valueMin: 0,
    gap: 0
  }
}
