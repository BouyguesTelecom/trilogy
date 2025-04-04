import type { Meta, StoryObj } from '@storybook/react'
import { Section, Title } from '@trilogy-ds/react'

const meta: Meta<typeof Section> = {
  component: Section,
}

export default meta

type Story = StoryObj<typeof Section>


// @ts-ignore
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
