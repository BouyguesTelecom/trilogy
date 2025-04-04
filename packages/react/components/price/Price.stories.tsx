import type { Meta, StoryObj } from '@storybook/react'
import Price from './Price'
import { Column, Columns, Section } from '@trilogy-ds/react'
import { Text } from '../../lib'

const meta: Meta<typeof Price> = {
  component: Price,
}

export default meta

type Story = StoryObj<typeof Price>

// @ts-ignore
export const Example: Story = {
  render: () => (
    <Section>
      <Columns>
        <Column size={4}>
          <Price align="ALIGNED_START" amount={24.99} period="mois" />
        </Column>
        <Column size={4}>
          <Price amount={24.99}  oldAmount={19.99} period="mois" />
        </Column>
        <Column size={4}>
          <Price amount={24.99} mention="(1)" period="mois" />
        </Column>
        <Column size={4}>
          <Text>Price classic</Text>
        </Column>
        <Column size={4}>
          <Text>Price with oldAmount</Text>
        </Column>
        <Column size={4}>
          <Text>Price with mention</Text>
        </Column>
      </Columns>
    </Section>
  ),
}
