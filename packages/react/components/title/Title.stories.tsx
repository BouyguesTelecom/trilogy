import React from 'react'

import { Meta, Story } from '@storybook/react'

import Title from './Title'
import { TitleProps } from './TitleProps'
import { TitleLevels } from './TitleEnum'

export default {
  title: 'Components/Title',
  component: Title,
} as Meta

export const Base: Story<TitleProps> = (args) => (
  <>
    <Title {...args}>Ceci titre</Title>
    <Title subtitle>Ceci est un sous-titre</Title>
    <Title overline>Ceci est text surligner</Title>
  </>
)
Base.args = {
  level: TitleLevels.ONE,
}

export const Inverted: Story<TitleProps> = (args) => (
  <div style={{ backgroundColor: 'black', padding: 10 }}>
    {' '}
    <Title {...args}>Ceci titre</Title>
  </div>
)
Inverted.args = {
  level: TitleLevels.ONE,
  inverted: true,
}
