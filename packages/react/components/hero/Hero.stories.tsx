import * as React from 'react'

import { Meta, Story } from '@storybook/react'
import { Hero } from '../hero'
import { HeroProps } from './HeroProps'
import { TrilogyColor } from '../../objects'
import { Title, TitleLevels, TitleMarkup } from '../title'
import { Text, TextMarkup } from '../text'
import { Container } from '../container'
import { Button } from '../button'
import { Box } from '../box'
import { Section } from '../section'

export default {
  title: 'Components/Hero',
  component: Hero,
} as Meta

export const Base: Story<HeroProps> = (args) => (
  <Hero {...args}>
    <Title markup={TitleMarkup.H1} inverted level={TitleLevels.TWO}>
      Bonjour Michel
    </Title>
    <Text markup={TextMarkup.P} inverted>
      Fugiat velit dolor ad adipisicing id quis enim cupidatat Lorem dolore aute excepteur tempor.
    </Text>
  </Hero>
)

Base.args = {
  backgroundColor: TrilogyColor.MAIN,
}

export const AvecImageDeFond: Story<HeroProps> = (args) => (
  <Hero {...args}>
    <Container>
      <Title markup={TitleMarkup.H1} inverted level={TitleLevels.TWO}>
        Bonjour Michel
      </Title>
      <Title markup={TextMarkup.SPAN} subtitle inverted>
        Fugiat velit dolor ad adipisicing id quis enim cupidatat Lorem dolore aute excepteur tempor.
      </Title>
      <Button>Click me ! </Button>
    </Container>
  </Hero>
)

AvecImageDeFond.args = {
  backgroundSrc: 'https://picsum.photos/id/1/1500/600',
}

export const ContenuSuperposer: Story<HeroProps> = (args) => (
  <>
    {' '}
    <Hero {...args}>
      <Container>
        <Title markup={TitleMarkup.H1} inverted level={TitleLevels.TWO}>
          Internet garanti
        </Title>
        <Title overline inverted className={'is-inverted'}>
          Profitez dInternet dès labonnement et même en cas de coupure grâce à une clé 4G dans les nouvelles offres
          Bbox.
        </Title>
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

ContenuSuperposer.args = {
  overlap: true,
  backgroundColor: TrilogyColor.MAIN,
}
