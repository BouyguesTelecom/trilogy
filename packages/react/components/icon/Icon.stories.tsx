import { Alignable, TrilogyColor } from '@/objects'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import IconComponent from './Icon'
import type { IconProps } from './IconProps'
import { IconColor, IconName, IconSize } from './index'

IconComponent.displayName = 'Icon'

interface IconStoryArgs {
  name: IconProps['name']
  size?: IconProps['size']
  circled: boolean
  stretched: boolean
  color?: IconProps['color']
  backgroundColor?: IconProps['backgroundColor']
  skeleton: boolean
  align?: IconProps['align']
}

const Icon = ({
  name,
  size,
  circled,
  stretched,
  color,
  backgroundColor,
  skeleton,
  align,
}: IconStoryArgs): JSX.Element => (
  <div style={{ minHeight: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <IconComponent
      name={name}
      size={size}
      circled={circled}
      stretched={stretched}
      color={color}
      backgroundColor={backgroundColor}
      skeleton={skeleton}
      align={align}
    />
  </div>
)

Icon.displayName = 'Icon'

const meta: Meta<IconStoryArgs> = {
  title: 'Components/Icon',
  component: Icon,
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
    name: {
      control: 'select',
      options: Object.values(IconName),
      name: 'name',
      description: 'Icon name',
      table: { category: 'Icon' },
    },
    size: {
      control: 'select',
      options: [undefined, ...Object.values(IconSize)],
      name: 'size',
      description: 'Icon size',
      table: { category: 'Icon' },
    },
    circled: {
      control: 'boolean',
      name: 'circled',
      description: 'Display icon with circular background',
      table: { category: 'Icon' },
    },
    stretched: {
      control: 'boolean',
      name: 'stretched',
      description: 'Stretched icon',
      table: { category: 'Icon' },
    },
    color: {
      control: 'select',
      options: [undefined, ...Object.values(IconColor), ...Object.values(TrilogyColor)],
      name: 'color',
      description: 'Icon color',
      table: { category: 'Icon' },
    },
    backgroundColor: {
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      name: 'backgroundColor',
      description: 'Background color used when the icon is circled',
      table: { category: 'Icon' },
    },
    skeleton: {
      control: 'boolean',
      name: 'skeleton',
      description: 'Display skeleton state',
      table: { category: 'Icon' },
    },
    align: {
      control: 'select',
      options: [undefined, ...Object.values(Alignable)],
      name: 'align',
      description: 'Align icon in its container',
      table: { category: 'Icon' },
    },
  },
  args: {
    name: IconName.CHECK,
    size: IconSize.HUGE,
    circled: false,
    stretched: false,
    color: undefined,
    backgroundColor: undefined,
    skeleton: false,
    align: undefined,
  },
}

export default meta

type Story = StoryObj<IconStoryArgs>

export const Default: Story = {}

export const Circled: Story = {
  args: {
    circled: true,
    backgroundColor: TrilogyColor.ACCENT,
    color: TrilogyColor.BACKGROUND,
  },
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    name: IconName.ARROW_UP,
  },
}

export const Small: Story = {
  args: {
    size: IconSize.SMALL,
    name: IconName.ARROW_RIGHT,
  },
}
