import { IconName } from '@/components/icon'
import { VariantState } from '@/objects'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import StickerComponent from './Sticker'

StickerComponent.displayName = 'Sticker'

interface StickerStoryArgs {
  label: string
  variant?: VariantState
  iconName?: IconName
  small: boolean
  outlined: boolean
  id: string
  className: string
  testId: string
  accessibilityLabel: string
}

const meta: Meta<StickerStoryArgs> = {
  title: 'Components/Sticker',
  component: StickerComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { type: 'dynamic' },
      description: { component: ' ' },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Sticker label' },
    variant: {
      control: 'select',
      options: [undefined, ...Object.values(VariantState)],
      description: 'Sticker variant',
    },
    iconName: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      description: 'Icon displayed in sticker',
    },
    small: { control: 'boolean', description: 'Small size' },
    outlined: { control: 'boolean', description: 'Outlined style' },
    id: { control: 'text', description: 'Custom html id' },
    className: { control: 'text', description: 'Additional CSS classes' },
    testId: { control: 'text', description: 'Testing identifier' },
    accessibilityLabel: { control: 'text', description: 'Accessibility label' },
  },
  args: {
    label: 'New',
    variant: VariantState.ACCENT,
    iconName: undefined,
    small: false,
    outlined: false,
    id: '',
    className: '',
    testId: '',
    accessibilityLabel: '',
  },
  render: ({ label, variant, iconName, small, outlined, id, className, testId, accessibilityLabel }) => (
    <StickerComponent
      label={label}
      variant={variant}
      iconName={iconName}
      small={small}
      outlined={outlined}
      id={id || undefined}
      className={className || undefined}
      testId={testId || undefined}
      accessibilityLabel={accessibilityLabel || undefined}
    />
  ),
}

export default meta

type Story = StoryObj<StickerStoryArgs>

export const Default: Story = {}

export const Small: Story = {
  args: {
    small: true,
  },
}

export const Outlined: Story = {
  args: {
    outlined: true,
  },
}

export const WithIcon: Story = {
  args: {
    iconName: IconName.INFOS_CIRCLE,
  },
}

export const Playground: Story = {}
