import type { Meta, StoryObj } from '@storybook/react'
import { Section, Title } from '@trilogy-ds/react'
import { TrilogyColor } from '../../objects'

const meta: Meta<typeof Section> = {
  component: Section,
  argTypes:{
    backgroundColor: {
      options: [
        TrilogyColor.NEUTRAL,
        TrilogyColor.NEUTRAL_FADE,
        TrilogyColor.MAIN,
        TrilogyColor.MAIN_FADE,
        TrilogyColor.DISABLED,
        TrilogyColor.DISABLED_FADE,
        TrilogyColor.FONT,
        TrilogyColor.INFO,
        TrilogyColor.INFO_FADE,
        TrilogyColor.SUCCESS,
        TrilogyColor.SUCCESS_FADE,
        TrilogyColor.WARNING,
        TrilogyColor.WARNING_FADE,
        TrilogyColor.ERROR,
        TrilogyColor.ACCENT,
        TrilogyColor.BACKGROUND,
      ],
      control: { type: 'select' },
    },
    className: {
      control: { type: 'text' },
    },
  }
}

export default meta

type Story = StoryObj<typeof Section>


export const Example: Story = {
  render: () => (
    <main>
      <Section backgroundColor="WHITE">
        <Title level={1}> Première section </Title>
      </Section>
      <Section backgroundColor="NEUTRAL_FADE">
        <Title level={1}> Seconde section </Title>
      </Section>
      <Section backgroundColor="WHITE">
        <Title level={1}> Troisième section </Title>
      </Section>
    </main>
  ),
}

export const Sandbox: Story = {
  render: (args) => (
    <main>
      <Section backgroundColor="WHITE">
        <Title level={1}> Première section </Title>
      </Section>
      <Section {...args}>
        <Title level={1}> Seconde section </Title>
      </Section>
      <Section backgroundColor="WHITE" >
        <Title level={1}> Troisième section </Title>
      </Section>
    </main>
  ),
  args:{
    backgroundColor: "WHITE",
    className: "has-text-centered",

  }
}
