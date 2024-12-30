import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { SegmentControl } from './index'
import { SegmentControlProps } from './SegmentControlProps'
import SegmentControlItem from './item'

const meta = {
  title: 'Components/SegmentControl',
  component: SegmentControl,
  subcomponents: { SegmentControlItem },
} satisfies Meta<SegmentControlProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: SegmentControlProps) => (
  // L'utilisation du segment control nécessite l'injection de Trilogy-Vanilla pour fonctioner :
  // <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
  <SegmentControl {...args}>
    <SegmentControlItem active onClick={() => alert('Appels')}>
      Appels
    </SegmentControlItem>
    <SegmentControlItem onClick={() => alert('SMS')}>SMS</SegmentControlItem>
    <SegmentControlItem onClick={() => alert('Équipements')}>Équipements</SegmentControlItem>
    <SegmentControlItem disabled>Offres</SegmentControlItem>
  </SegmentControl>
)

export const Base: Story = {
  render: Template,
}
