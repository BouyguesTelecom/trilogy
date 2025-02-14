import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Range } from './index'
import { RangeProps } from './RangeProps'

const meta = {
  title: 'Components/Range',
  component: Range,
} satisfies Meta<RangeProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: RangeProps) => (
  // L'utilisation du Range nécessite l'injection de Trilogy-Vanilla pour fonctioner :
  // <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
  <Range {...args} />
)

export const Base: Story = {
  render: Template,
  args: {
    min: 0,
    max: 100,
    unit: '€',
    valueMin: 0,
    valueMax: 50,
    label: 'Ceci est un label',
    onChangeMin: (e) => console.log(e),
    gap: 0,
  },
}
