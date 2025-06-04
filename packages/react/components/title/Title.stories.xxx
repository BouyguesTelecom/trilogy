import type { Meta, StoryObj } from '@storybook/react'
import { Column, Columns, Section, Title, TitleLevels, TrilogyColor } from '../../lib'

const meta: Meta<typeof Title> = {
  component: Title,
  argTypes:{
    className: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
    level: {
      options: [TitleLevels.ONE, TitleLevels.TWO, TitleLevels.THREE, TitleLevels.FOUR, TitleLevels.FIVE, TitleLevels.SIX],
      control: { type: 'inline-radio' },
    },
    subtitle: {
      control: { type: 'boolean' },
    },
    markup: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'inline-radio' },
    },
    inverted:{
      control: { type: 'boolean' },
    },
    skeleton:{
      control: { type: 'boolean' },
    }
  }
}

export default meta

type Story = StoryObj<typeof Title>


export const Example: Story = {
  render: () => (
    <Section>
      <Columns multiline>
        <Column size={12}>
          <Title level={1}> Titre de niveau 1 </Title>
          <Title subtitle> Ceci est un sous-titre </Title>
          <Title level={2}> Titre de niveau 2 </Title>
          <Title level={3}> Titre de niveau 3 </Title>
          <Title level={4}> Titre de niveau 4 </Title>
          <Title level={5}> Titre de niveau 5 </Title>
          <Title level={6}> Titre de niveau 6 </Title>
        </Column>
      </Columns>
    </Section>
  ),
}


export const Sandbox: Story = {
  render: (args) => (
    <Section backgroundColor={TrilogyColor.MAIN_FADE}>
      <Columns multiline>
        <Column size={12}>
          <Title {...args}/>
        </Column>
      </Columns>
    </Section>
  ),
  args:{
    level: 1,
    subtitle: false,
    children: 'Titre de niveau 1',
    className: 'has-text-weight-semibold',
    marginless: false,
    markup: 'h1',
    inverted: false,
    typo: 'has-text-weight-semibold',
    skeleton: false,
    overline: false
  }
}
