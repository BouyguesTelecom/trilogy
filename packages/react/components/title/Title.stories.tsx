import type { Meta, StoryObj } from '@storybook/react'
import { Column, Columns, Section, Title } from '../../lib'

const meta: Meta<typeof Title> = {
  component: Title,
}

export default meta

type Story = StoryObj<typeof Title>


// @ts-ignore
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
