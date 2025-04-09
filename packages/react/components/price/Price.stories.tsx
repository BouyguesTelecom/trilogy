import type { Meta, StoryObj } from '@storybook/react'
import Price from './Price'
import { Alignable, Column, Columns, Section, SpacerSize, TrilogyColor } from '@trilogy-ds/react'
import { Spacer, Text } from '../../lib'

const meta: Meta<typeof Price> = {
  component: Price,
  argTypes: {
    align: {
      options: ['ALIGNED_START', 'ALIGNED_CENTER', 'ALIGNED_END'],
      control: { type: 'inline-radio' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Price>

// @ts-ignore
export const Example: Story = {
  render: () => (
    <Section>
      <Columns multiline align={Alignable.ALIGNED_CENTER}>
        <Column size={4} align={Alignable.ALIGNED_CENTER}>
          <Price align="ALIGNED_CENTER" amount={24.99} period="mois" />
        </Column>
        <Column size={4} align={Alignable.ALIGNED_CENTER}>
          <Price align="ALIGNED_CENTER" amount={24.99}  oldAmount={19.99} period="mois" />
        </Column>
        <Column size={4} align={Alignable.ALIGNED_CENTER}>
          <Price align="ALIGNED_CENTER" amount={24.99} mention="(1)" period="mois" />
        </Column>
        <Column size={4} align={Alignable.ALIGNED_CENTER}>
          <Text className={"has-text-centered"}>Price classic</Text>
        </Column>
        <Column size={4} align={Alignable.ALIGNED_CENTER}>
          <Text className={"has-text-centered"} >Price with oldAmount</Text>
        </Column>
        <Column size={4} align={Alignable.ALIGNED_CENTER}>
          <Text className={"has-text-centered"}>Price with mention</Text>
        </Column>
      </Columns>
    </Section>
  ),
}

export const Sandbox: Story = {
  render: (args) => (
    <Section backgroundColor={TrilogyColor.MAIN_FADE}>
      <Columns multiline align={Alignable.ALIGNED_CENTER}>
        <Column size={12} align={Alignable.ALIGNED_CENTER}>
          <Price {...args} oldAmount={undefined}/>
        </Column>
        <Column size={12} align={Alignable.ALIGNED_CENTER}>
          <Text className={"has-text-centered"}>Sandbox price</Text>
        </Column>
        <Spacer size={SpacerSize.TEN}/>
        <Column size={12} align={Alignable.ALIGNED_CENTER}>
          <Price {...args}/>
        </Column>
        <Column size={12} align={Alignable.ALIGNED_CENTER}>
          <Text className={"has-text-centered"}>Sandbox price with oldAmount</Text>
        </Column>
      </Columns>
    </Section>
  ),
  args:{
    amount: 24.99,
    mention: "(1)",
    period: "mois",
    align: Alignable.ALIGNED_CENTER,
    hideCents: false,
    level: 1,
    oldAmount: 19.99,
  }
}
