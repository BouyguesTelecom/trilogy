import { Alignable, TrilogyColor } from '@/objects'
import type { Meta, StoryObj } from '@storybook/react'
import IconComponent from './Icon'
import type { IconProps } from './IconProps'
import { IconColor, IconName, IconSize } from './index'
import React from 'react'

IconComponent.displayName = 'Icon'

interface IconStoryArgs {
  icon_name: IconProps['name']
  icon_size?: IconProps['size']
  icon_circled: boolean
  icon_stretched: boolean
  icon_color?: IconProps['color']
  icon_backgroundColor?: IconProps['backgroundColor']
  icon_skeleton: boolean
  icon_align?: IconProps['align']
}

const Icon = ({
  icon_name,
  icon_size,
  icon_circled,
  icon_stretched,
  icon_color,
  icon_backgroundColor,
  icon_skeleton,
  icon_align,
}: IconStoryArgs): JSX.Element => (
  <div style={{ minHeight: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <IconComponent
      name={icon_name}
      size={icon_size}
      circled={icon_circled}
      stretched={icon_stretched}
      color={icon_color}
      backgroundColor={icon_backgroundColor}
      skeleton={icon_skeleton}
      align={icon_align}
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
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    icon_name: {
      control: 'select',
      options: Object.values(IconName),
      name: 'name',
      description: 'Icon name',
      table: { category: 'Icon' },
    },
    icon_size: {
      control: 'select',
      options: [undefined, ...Object.values(IconSize)],
      name: 'size',
      description: 'Icon size',
      table: { category: 'Icon' },
    },
    icon_circled: {
      control: 'boolean',
      name: 'circled',
      description: 'Display icon with circular background',
      table: { category: 'Icon' },
    },
    icon_stretched: {
      control: 'boolean',
      name: 'stretched',
      description: 'Stretched icon',
      table: { category: 'Icon' },
    },
    icon_color: {
      control: 'select',
      options: [undefined, ...Object.values(IconColor), ...Object.values(TrilogyColor)],
      name: 'color',
      description: 'Icon color',
      table: { category: 'Icon' },
    },
    icon_backgroundColor: {
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      name: 'backgroundColor',
      description: 'Background color used when the icon is circled',
      table: { category: 'Icon' },
    },
    icon_skeleton: {
      control: 'boolean',
      name: 'skeleton',
      description: 'Display skeleton state',
      table: { category: 'Icon' },
    },
    icon_align: {
      control: 'select',
      options: [undefined, ...Object.values(Alignable)],
      name: 'align',
      description: 'Align icon in its container',
      table: { category: 'Icon' },
    },
    id: { table: { disable: true } },
    className: { table: { disable: true } },
    testId: { table: { disable: true } },
    accessibilityLabel: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
  args: {
    icon_name: IconName.CHECK,
    icon_size: IconSize.HUGE,
    icon_circled: false,
    icon_stretched: false,
    icon_color: undefined,
    icon_backgroundColor: undefined,
    icon_skeleton: false,
    icon_align: undefined,
  },
}

export default meta

type Story = StoryObj<IconStoryArgs>

export const Default: Story = {}

export const Circled: Story = {
  args: {
    icon_circled: true,
    icon_backgroundColor: TrilogyColor.ACCENT,
    icon_color: TrilogyColor.WHITE,
  },
}

export const Skeleton: Story = {
  args: {
    icon_skeleton: true,
    icon_name: IconName.ARROW_UP,
  },
}

export const Small: Story = {
  args: {
    icon_size: IconSize.SMALL,
    icon_name: IconName.ARROW_RIGHT,
  },
}
