import type { Meta, StoryObj } from '@storybook/react'
import { Column, Columns, Title } from '../../lib'
import Countdown from './Countdown'

const meta: Meta<typeof Countdown> = {
  component: Countdown,
}

export default meta

type Story = StoryObj<typeof Countdown>


export const Example: Story = {
  render: () => (
    <Columns align="ALIGNED_CENTER">
      <Column narrow>
        <Title level={6}> Countdown </Title>
        <Countdown deadline={new Date("2025-12-24T17:00:00.000Z")} />
      </Column>
      <Column narrow>
        <Title level={6}> Countdown small </Title>
        <Countdown deadline={new Date("2025-12-24T17:00:00.000Z")} small />
      </Column>
    </Columns>
  ),
}
