import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './index'
import { ImageProps } from './ImageProps'

const meta = {
  title: 'Components/Image',
  component: Image,
} satisfies Meta<ImageProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    alt: 'image test',
    src: 'https://assets.bouyguestelecom.fr/TRILOGY/guide@2.0.7-3/assets/images/card-image.png',
  },
}
