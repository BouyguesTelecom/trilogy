import React from 'react'

import { Meta, Story } from '@storybook/react'
import Image from './Image'
import { ImageProps } from './ImageProps'

export default {
  title: 'Components/Image',
  component: Image,
} as Meta

export const Base: Story<ImageProps> = (args) => <Image {...args} />
Base.args = {
  alt: 'image test',
  src: 'https://assets.bouyguestelecom.fr/TRILOGY/guide@2.0.7-3/assets/images/card-image.png',
}
