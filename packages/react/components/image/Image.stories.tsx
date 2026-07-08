import { Alignable } from '@/objects'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import ImageComponent from './Image'
import type { ImageProps } from './ImageProps'
import { RadiusValues } from './ImageProps'

ImageComponent.displayName = 'Image'

interface ImageStoryArgs {
  src: string
  alt: string
  width?: number
  height?: number
  circled: boolean
  radius?: RadiusValues
  align?: ImageProps['align']
}

const Image = ({ src, alt, width, height, circled, radius, align }: ImageStoryArgs): JSX.Element => (
  <div style={{ minHeight: 260, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
    <ImageComponent src={src} alt={alt} width={width} height={height} circled={circled} radius={radius} align={align} />
  </div>
)

Image.displayName = 'Image'

const meta: Meta<ImageStoryArgs> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    src: {
      control: 'text',
      name: 'src',
      description: 'Image source',
      table: { category: 'Image' },
    },
    alt: {
      control: 'text',
      name: 'alt',
      description: 'Alternative text',
      table: { category: 'Image' },
    },
    width: {
      control: 'number',
      name: 'width',
      description: 'Image width',
      table: { category: 'Image' },
    },
    height: {
      control: 'number',
      name: 'height',
      description: 'Image height',
      table: { category: 'Image' },
    },
    circled: {
      control: 'boolean',
      name: 'circled',
      description: 'Display image with circular crop',
      table: { category: 'Image' },
    },
    radius: {
      control: 'select',
      options: [undefined, ...Object.values(RadiusValues)],
      name: 'radius',
      description: 'Border radius size',
      table: { category: 'Image' },
    },
    align: {
      control: 'select',
      options: [undefined, ...Object.values(Alignable)],
      name: 'align',
      description: 'Image alignment',
      table: { category: 'Image' },
    },
  },
  args: {
    src: 'https://picsum.photos/id/1/1500/600',
    alt: 'Sample landscape',
    width: 320,
    height: 160,
    circled: false,
    radius: RadiusValues.MEDIUM,
    align: Alignable.ALIGNED_CENTER,
  },
}

export default meta

type Story = StoryObj<ImageStoryArgs>

export const Default: Story = {}

export const Circled: Story = {
  args: {
    circled: true,
    width: 180,
    height: 180,
    radius: undefined,
  },
}

export const Rounded: Story = {
  args: {
    radius: RadiusValues.LARGE,
  },
}

export const Small: Story = {
  args: {
    width: 180,
    height: 100,
  },
}
