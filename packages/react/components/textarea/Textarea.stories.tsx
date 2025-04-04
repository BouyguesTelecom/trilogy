import type { Meta, StoryObj } from '@storybook/react'
import { Column, Columns, Section, Textarea } from '../../lib'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
}

export default meta

type Story = StoryObj<typeof Textarea>


// @ts-ignore
export const Example: Story = {
  render: () => (
    <Section>
      <Columns>
        <Column>
          <Textarea label="Label dynamique" maxLength={150} placeholder="placeholder" />
        </Column>
        <Column>
          <Textarea disabled label="Label dynamique" placeholder="placeholder" />
        </Column>
        <Column>
          <Textarea iconNameLeft="tri-alert" label="Label dynamique" placeholder="placeholder" />
        </Column>
      </Columns>
    </Section>
  ),
}
