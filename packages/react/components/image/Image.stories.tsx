import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './index'
import { ImageProps } from './ImageProps'
import { Alignable } from '../../objects'

const meta = {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    align: {
      options: Object.values(Alignable),
      mapping: Object.assign({}, Alignable),
      table: {
        type: { summary: 'Alignable' },
      },
    },
    verticalAlign: {
      options: Object.values(Alignable),
      mapping: Object.assign({}, Alignable),
      table: {
        type: { summary: 'Alignable' },
      },
    },
  }
} satisfies Meta<ImageProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    alt: 'image test',
    src: 'https://assets.bouyguestelecom.fr/TRILOGY/guide@2.0.7-3/assets/images/card-image.png',
  },
}
