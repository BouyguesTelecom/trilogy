import { Alignable } from '@/objects'
import type { Meta, StoryObj } from '@storybook/react'
import ImageComponent from './Image'
import type { ImageProps } from './ImageProps'
import React from 'react'
import { RadiusValues } from './ImageProps'

ImageComponent.displayName = 'Image'

interface ImageStoryArgs {
  image_src: string
  image_alt: string
  image_width?: number
  image_height?: number
  image_circled: boolean
  image_radius?: RadiusValues
  image_align?: ImageProps['align']
}

const Image = ({
  image_src,
  image_alt,
  image_width,
  image_height,
  image_circled,
  image_radius,
  image_align,
}: ImageStoryArgs): JSX.Element => (
  <div style={{ minHeight: 260, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
    <ImageComponent
      src={image_src}
      alt={image_alt}
      width={image_width}
      height={image_height}
      circled={image_circled}
      radius={image_radius}
      align={image_align}
    />
  </div>
)

Image.displayName = 'Image'

const meta: Meta<ImageStoryArgs> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    image_src: {
      control: 'text',
      name: 'src',
      description: 'Image source',
      table: { category: 'Image' },
    },
    image_alt: {
      control: 'text',
      name: 'alt',
      description: 'Alternative text',
      table: { category: 'Image' },
    },
    image_width: {
      control: 'number',
      name: 'width',
      description: 'Image width',
      table: { category: 'Image' },
    },
    image_height: {
      control: 'number',
      name: 'height',
      description: 'Image height',
      table: { category: 'Image' },
    },
    image_circled: {
      control: 'boolean',
      name: 'circled',
      description: 'Display image with circular crop',
      table: { category: 'Image' },
    },
    image_radius: {
      control: 'select',
      options: [undefined, ...Object.values(RadiusValues)],
      name: 'radius',
      description: 'Border radius size',
      table: { category: 'Image' },
    },
    image_align: {
      control: 'select',
      options: [undefined, ...Object.values(Alignable)],
      name: 'align',
      description: 'Image alignment',
      table: { category: 'Image' },
    },
    id: { table: { disable: true } },
    className: { table: { disable: true } },
    testId: { table: { disable: true } },
    onClick: { table: { disable: true } },
    cache: { table: { disable: true } },
  },
  args: {
    image_src: 'https://picsum.photos/id/1/1500/600',
    image_alt: 'Sample landscape',
    image_width: 320,
    image_height: 160,
    image_circled: false,
    image_radius: RadiusValues.MEDIUM,
    image_align: Alignable.ALIGNED_CENTER,
  },
}

export default meta

type Story = StoryObj<ImageStoryArgs>

export const Default: Story = {}

export const Circled: Story = {
  args: {
    image_circled: true,
    image_width: 180,
    image_height: 180,
    image_radius: undefined,
  },
}

export const Rounded: Story = {
  args: {
    image_radius: RadiusValues.LARGE,
  },
}

export const Small: Story = {
  args: {
    image_width: 180,
    image_height: 100,
  },
}
