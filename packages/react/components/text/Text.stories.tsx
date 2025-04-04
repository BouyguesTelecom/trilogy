import type { Meta, StoryObj } from '@storybook/react'
import { Column, Columns, Section, Text } from '../../lib'

const meta: Meta<typeof Text> = {
  component: Text,
}

export default meta

type Story = StoryObj<typeof Text>


// @ts-ignore
export const Example: Story = {
  render: () => (
    <Section>
      <Columns>
        <Column>
          <Text accessibilityLabel="Ceci est un paragraphe" level={1} markup="p" typo="has-text-weight-semibold"> Ceci est mon paragraphe </Text>
        </Column>
      </Columns>
    </Section>
  ),
}
