import React from 'react'

import { Meta, Story } from '@storybook/react'
import Icon from './Icon'
import { IconProps } from './IconProps'
import { IconColor, IconSize, IconStatus } from './IconEnum'
import { IconName } from './IconNameEnum'
import { Alignable } from '../../objects/facets/Alignable'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    // ...autres propriétés...
    color: {
      control: {
        type: 'select',
        options: IconColor,
      },
    },
  },
} as Meta

export const Base: Story<IconProps> = (args) => <Icon {...args} />
Base.args = {
  size: IconSize.SMALL,
  name: IconName.EXCLAMATION_CIRCLE,
}

export const AvecStatus: Story<IconProps> = (args) => (
  <>
    <Icon {...args} />
    <Icon {...args} statusPosition={'top'} />
    <Icon {...args} statusPosition={'bottom'} />
  </>
)
AvecStatus.args = {
  size: IconSize.SMALL,
  name: IconName.EXCLAMATION_CIRCLE,
  status: IconStatus.SUCCESS,
}

export const Circled: Story<IconProps> = (args) => <Icon {...args} />
Circled.args = {
  size: IconSize.SMALL,
  name: IconName.EXCLAMATION_CIRCLE,
  circled: true,
}
export const Stretched: Story<IconProps> = (args) => <Icon {...args} />
Stretched.args = {
  size: IconSize.SMALL,
  name: IconName.EXCLAMATION_CIRCLE,
  stretched: true,
}

export const AvecTexte: Story<IconProps> = (args) => <Icon {...args} />
AvecTexte.args = {
  size: IconSize.SMALL,
  name: IconName.EXCLAMATION_CIRCLE,
  stretched: true,
  content: 'Lorem Ipsum has been',
}

export const Position: Story<IconProps> = (args) => <Icon {...args} />
Position.args = {
  size: IconSize.SMALL,
  name: IconName.EXCLAMATION_CIRCLE,
  align: Alignable.ALIGNED_START,
}
