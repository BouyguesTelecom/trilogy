import React from 'react'

import { Meta, Story } from '@storybook/react'
import Divider from './Divider'
import { DividerProps } from './DividerProps'
import { IconName } from '../icon'
import { TrilogyColor } from '../../objects'
import { Box, BoxContent } from '../box'

export default {
  title: 'Components/Divider',
  component: Divider,
} as Meta

export const Base: Story<DividerProps> = (args) => <Divider {...args} />

export const AvecText: Story<DividerProps> = (args) => <Divider {...args} />
AvecText.args = {
  content: 'Nouveau Message',
}

export const AvecUneIcône: Story<DividerProps> = (args) => <Divider {...args} />
AvecUneIcône.args = {
  iconName: IconName.PLUS,
}

export const AvecBackground: Story<DividerProps> = (args) => <Divider {...args} />
AvecBackground.args = {
  backgroundColor: TrilogyColor.TERTIARY,
  textColor: TrilogyColor.WHITE,
  iconName: IconName.PLUS,
}

export const Unboxed: Story<DividerProps> = (args) => (
  <Box>
    <BoxContent background={TrilogyColor.GREY_LIGHT}>
      <Divider {...args} />
    </BoxContent>
  </Box>
)
Unboxed.args = {
  unboxed: true,
}
