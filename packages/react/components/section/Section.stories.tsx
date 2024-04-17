import React from 'react'

import {Meta, Story} from '@storybook/react'
import Section from './Section'
import {SectionProps} from './SectionProps'
import {TrilogyColor} from '../../objects'
import {Title, TitleLevels} from '../title'

export default {
  title: 'Components/Section',
  component: Section,
} as Meta

export const Base: Story<SectionProps> = (args) => (
  <>
    <Section {...args}>
      <Title level={TitleLevels.ONE}>Premiére section</Title>
    </Section>
    <Section {...args}>
      <Title level={TitleLevels.ONE}>Deuxiéme section</Title>
    </Section>
    <Section {...args}>
      <Title level={TitleLevels.ONE}>Troisiéme section</Title>
    </Section>
  </>
)

export const Skeleton: Story<SectionProps> = (args) => (
  <Section {...args}>
    <Title level={TitleLevels.THREE} skeleton>
      Section skeleton
    </Title>
  </Section>
)

Skeleton.args = {
  skeleton: true,
}

export const CouleurDeFond: Story<SectionProps> = (args) => (
  <Section {...args}>
    <Title level={TitleLevels.THREE} inverted>
      Section avec background
    </Title>
  </Section>
)
CouleurDeFond.args = {
  background: TrilogyColor.MAIN,
}

export const ImageDeFond: Story<SectionProps> = (args) => (
  <Section {...args}>
    <Section>
      <Title level={TitleLevels.THREE} skeleton>
        Section avec image de fond
      </Title>
    </Section>
  </Section>
)
ImageDeFond.args = {
  backgroundSrc: 'https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png',
}
