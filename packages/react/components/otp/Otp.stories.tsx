import type { Meta, StoryObj } from '@storybook/react'
import Otp from './Otp'
import { Column, Columns } from '@trilogy-ds/react'

const meta: Meta<typeof Otp> = {
  component: Otp,
  argTypes:{
    length:{
      options: [4, 6, 8],
      control: { type: 'inline-radio' },
    },
    error: {
      control: { type: 'boolean' },
    },
    help: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    testId: {
      control: { type: 'text' },
    },
    id: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    accessibilityLabel: {
      control: { type: 'text' },
    },
  }
}

export default meta

type Story = StoryObj<typeof Otp>


export const Example: Story = {
  render: () => (
    <Columns>
      <Column size={4}>
        <Otp error help="Ceci est un message  derreur" label="Saisir votre otp" />
      </Column>
      <Column size={4}>
        <Otp label="Saisir votre otp" />
      </Column>
    </Columns>
  ),
}


export const Sandbox: Story = {
  render: (args) => (
    <Columns>
      <Column size={4}>
        <Otp {...args}/>
      </Column>
    </Columns>
  ),
  args:{
    error: false,
    help: 'Ceci est un message d\'aide',
    label: 'Saisir votre otp',
    value: '',
    testId: 'testId',
    id: 'id',
    className: undefined,
    accessibilityLabel: "accessibilityLabel",
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    disabled: false,
    activated: true,
    autoFocus: true,
    length: 4,
  }
}
