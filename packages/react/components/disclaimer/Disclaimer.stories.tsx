import React from 'react'

import { Meta, Story } from '@storybook/react'
import Disclaimer from './Disclaimer'
import DisclaimerItem from './item'
import { DisclaimerProps } from './DisclaimerProps'

export default {
  title: 'Components/Disclaimer',
  component: Disclaimer,
  subcomponents: { DisclaimerItem },
} as Meta

export const Base: Story<DisclaimerProps> = (args) => (
  <Disclaimer {...args}>
    <DisclaimerItem>Disclaimer Item 1</DisclaimerItem>
    <DisclaimerItem>Disclaimer Item 2</DisclaimerItem>
    <DisclaimerItem>Disclaimer Item 3</DisclaimerItem>
  </Disclaimer>
)
Base.args = {
  title: 'Informations sur la Messagerie',
}
