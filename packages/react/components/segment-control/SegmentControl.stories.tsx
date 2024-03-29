import React from 'react'

import { Meta, Story } from '@storybook/react'
import { SegmentControl, SegmentControlItem } from './index'
import { SegmentControlProps } from './SegmentControlProps'

export default {
  title: 'Components/SegmentControl',
  component: SegmentControl,
  subcomponents: { SegmentControlItem },
} as Meta

export const Base: Story<SegmentControlProps> = (args) => (
  /* L'utilisation du segment control nécessite l'injection de Trilogy-Vanilla pour fonctioner :
 <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
*/
  <SegmentControl {...args}>
    <SegmentControlItem active onClick={() => alert('Appels')}>
      Appels
    </SegmentControlItem>
    <SegmentControlItem onClick={() => alert('SMS')}>SMS</SegmentControlItem>
    <SegmentControlItem onClick={() => alert('Équipements')}>Équipements</SegmentControlItem>
    <SegmentControlItem disabled>Offres</SegmentControlItem>
  </SegmentControl>
)
