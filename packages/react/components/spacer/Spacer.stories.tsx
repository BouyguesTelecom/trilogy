import type { Meta, StoryObj } from '@storybook/react'
import Spacer from './Spacer'
import { Section, Title, TitleLevels, TrilogyColor } from '@trilogy-ds/react'
import { SpacerSize } from './SpacerEnum'

const meta: Meta<typeof Spacer> = {
  component: Spacer,
}

export default meta

type Story = StoryObj<typeof Spacer>

// @ts-ignore
export const Example: Story = {
  render: () => (
    <Section>
      <Section backgroundColor={TrilogyColor.MAIN}><Title level={TitleLevels.THREE} inverted>Spacer ONE</Title></Section>
      <Spacer size={SpacerSize.ONE}/>
      <Section backgroundColor={TrilogyColor.MAIN}><Title level={TitleLevels.THREE} inverted>Spacer TWO</Title></Section>
      <Spacer size={SpacerSize.TWO}/>
      <Section backgroundColor={TrilogyColor.MAIN}><Title level={TitleLevels.THREE} inverted>Spacer THREE</Title></Section>
      <Spacer size={SpacerSize.THREE}/>
      <Section backgroundColor={TrilogyColor.MAIN}><Title level={TitleLevels.THREE} inverted>Spacer FOUR</Title></Section>
      <Spacer size={SpacerSize.FOUR}/>
      <Section backgroundColor={TrilogyColor.MAIN}><Title level={TitleLevels.THREE} inverted>Spacer FIVE</Title></Section>
      <Spacer size={SpacerSize.FIVE}/>
      <Section backgroundColor={TrilogyColor.MAIN}><Title level={TitleLevels.THREE} inverted>Spacer SIX</Title></Section>
      <Spacer size={SpacerSize.SIX}/>
      <Section backgroundColor={TrilogyColor.MAIN}><Title level={TitleLevels.THREE} inverted>Spacer SEVEN</Title></Section>
      <Spacer size={SpacerSize.SEVEN}/>
      <Section backgroundColor={TrilogyColor.MAIN}><Title level={TitleLevels.THREE} inverted>Spacer EIGHT</Title></Section>
      <Spacer size={SpacerSize.EIGHT}/>
      <Section backgroundColor={TrilogyColor.MAIN}><Title level={TitleLevels.THREE} inverted>Spacer NINE</Title></Section>
      <Spacer size={SpacerSize.NINE}/>
      <Section backgroundColor={TrilogyColor.MAIN}><Title level={TitleLevels.THREE} inverted>Spacer TEN</Title></Section>
      <Spacer size={SpacerSize.TEN}/>
    </Section>
  ),
}
