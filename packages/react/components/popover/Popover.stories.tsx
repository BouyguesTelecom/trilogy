import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Popover, PopoverDirection } from './index'
import { PopoverProps } from './PopoverProps'
import { Button } from '../button'

const meta = {
  title: 'Components/Popover',
  component: Popover,
} satisfies Meta<PopoverProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    children: 'Voici une simple popover',
    trigger: <Button variant='PRIMARY'>Simple Popover</Button>,
  },
}

export const PopoverActive: Story = {
  args: {
    active: true,
    children: 'Voici une simple popover active',
    trigger: <Button variant='PRIMARY'>Simple Popover</Button>,
  },
}

export const PopoverDirections: Story = {
  args: {
    active: true,
    direction: PopoverDirection.BOTTOM,
    children: 'Voici popover',
    trigger: <Button variant='PRIMARY'>Simple Popover</Button>,
  },
}
