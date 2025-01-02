import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Section } from './index'
import { SectionProps } from './SectionProps'
import { Title, TitleLevels } from '../title'
import { TrilogyColor } from '../../objects'

const meta = {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    backgroundColor: {
      options: Object.values(TrilogyColor),
      table: {
        type: { summary: 'TrilogyColor' },
      },
    },
  },
} satisfies Meta<SectionProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: SectionProps) => {
  let title: string
  switch (true) {
    case args.skeleton:
      title = 'Section skeleton'
      break
    case args.backgroundColor !== undefined:
      title = 'Section avec background'
      break
    case args.backgroundSrc !== undefined:
      title = 'Section avec image de fond'
      break
    default:
      title = 'Section Template'
      break
  }
  return (
    <Section {...args}>
      <Title level={TitleLevels.THREE}>{title}</Title>
    </Section>
  )
}

const TemplateMultiple = (args: SectionProps) => (
  <>
    <Section {...args}>
      <Title level={TitleLevels.ONE}>Premiére section</Title>
    </Section>
    <Section {...args} backgroundColor={TrilogyColor.NEUTRAL_FADE}>
      <Title level={TitleLevels.ONE}>Deuxiéme section</Title>
    </Section>
    <Section {...args}>
      <Title level={TitleLevels.ONE}>Troisiéme section</Title>
    </Section>
  </>
)

export const Base: Story = {
  render: TemplateMultiple,
}

export const Skeleton: Story = {
  render: Template,
  args: {
    skeleton: true,
  },
}

export const CouleurDeFond: Story = {
  render: Template,
  args: {
    backgroundColor: TrilogyColor.MAIN_FADE,
  },
}

export const ImageDeFond: Story = {
  render: Template,
  args: {
    backgroundSrc: 'https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png',
  },
}
