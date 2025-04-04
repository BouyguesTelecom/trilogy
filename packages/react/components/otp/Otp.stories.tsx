import type { Meta, StoryObj } from '@storybook/react'
import Otp from './Otp'
import { Column, Columns } from '@trilogy-ds/react'

const meta: Meta<typeof Otp> = {
  component: Otp,
}

export default meta

type Story = StoryObj<typeof Otp>


// @ts-ignore
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
