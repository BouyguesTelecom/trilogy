import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './index'
import { HeroProps } from './HeroProps'
import { ContainerProps } from 'postcss'
import { Container } from '../container'
import { Box } from '../box'
import { Text, TextMarkup } from '../text'
import { Title, TitleLevels, TitleMarkup } from '../title'
import { IconName } from '../icon'
import { TrilogyColor } from '../../objects'
import { Section } from '../section'

const meta = {
  title: 'Components/Hero',
  component: Hero,
} satisfies Meta<HeroProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: HeroProps) => (
  <>
    <Hero {...args}>
      <Container>
        <Title markup={TitleMarkup.H1} inverted level={TitleLevels.TWO}>
          Bonjour Michel
        </Title>
        <Text markup={TextMarkup.P} inverted>
          Fugiat velit dolor ad adipisicing id quis enim cupidatat Lorem dolore aute excepteur tempor.
        </Text>
      </Container>
    </Hero>
    <Section>
      <Container>
        <Box>
          <Title level={TitleLevels.TWO}>Internet garanti</Title>
        </Box>
      </Container>
    </Section>
  </>
)

export const Base: Story = {
  render: Template,
  args: {
    backgroundColor: TrilogyColor.MAIN,
  },
}

export const AvecImageDeFond: Story = {
  render: Template,
  args: {
    backgroundSrc: 'https://picsum.photos/id/1/1500/600',
  },
}

export const ContenuSuperposer: Story = {
  render: Template,
  args: {
    overlap: true,
    backgroundColor: TrilogyColor.MAIN,
  },
}
