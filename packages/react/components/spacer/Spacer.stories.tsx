import React from 'react'

import { Meta, Story } from '@storybook/react'
import { SpacerProps } from './SpacerProps'
import Spacer from './Spacer'
import { SpacerSize } from './SpacerEnum'
import { Tag, TagVariant } from '../tag'

const spacerSizeOptions = [
  SpacerSize.NONE,
  SpacerSize.SMALLER,
  SpacerSize.SMALL,
  SpacerSize.MEDIUM,
  SpacerSize.LARGE,
  SpacerSize.HUGE,
]

export default {
  title: 'Components/Spacer',
  component: Spacer,
  argTypes: {
    // ...autres propriétés...
    size: {
      control: {
        type: 'select',
        options: spacerSizeOptions, // Remplacez MyEnum par votre propre enum
      },
    },
  },
} as Meta

export const Base: Story<SpacerProps> = (args) => {
  const { size, ...otherProps } = args

  return (
    <>
      <Tag variant={TagVariant.SUCCESS}>
        Play with the props <code>size</code>
      </Tag>
      <Spacer {...otherProps} size={size} />
      <Tag >
        Dans le pannel de contrôle ⬇
      </Tag>
    </>
  )
}
