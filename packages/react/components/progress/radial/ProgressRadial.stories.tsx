import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { ProgressRadial, ProgressRadialItem } from '../index'
import { TrilogyColor } from '../../../objects'
import { ProgressRadialItemProps } from './item/ProgressRadialItemProps'
import { ProgressRadialProps } from './ProgressRadialProps'

const meta = {
  title: 'Components/ProgressBar/ProgressRadial',
  component: ProgressRadial,
  subcomponents: { ProgressRadial, ProgressRadialItem },
} satisfies Meta<ProgressRadialItemProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: ProgressRadialProps) => (
  // L'utilisation de la progress bar Circulaire nécessite l'injection de Trilogy-Vanilla pour fonctioner :
  // <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
  <ProgressRadial {...args}>
    <ProgressRadialItem percent={10} color={TrilogyColor.MAIN} />
    <ProgressRadialItem percent={30} color={TrilogyColor.ACCENT} />
  </ProgressRadial>
)

export const Radial: Story = {
  render: Template,
}
