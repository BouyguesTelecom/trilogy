import { IconName } from '@/components/icon'
import { VariantState } from '@/objects'
import { Alignable } from '@/objects/facets/Alignable'
import type { Meta, StoryObj } from '@storybook/react'
import CheckboxTiles from './CheckboxTiles'
import type { CheckboxTilesProps } from './CheckboxTilesProps'
import CheckboxTileComponent from './tile/CheckboxTile'
import type { CheckboxTileProps } from './tile/CheckboxTileProps'
import React from 'react'

CheckboxTileComponent.displayName = 'CheckboxTile'
CheckboxTiles.displayName = 'CheckboxTiles'

const CheckboxTile = (props: CheckboxTileProps): JSX.Element => <CheckboxTileComponent {...props} />
CheckboxTile.displayName = 'CheckboxTile'

interface CheckboxTileStoryArgs extends CheckboxTileProps, Omit<CheckboxTilesProps, 'children'> {
  tile_label: string
  tile_description: string
  tile_checked: boolean
  tile_disabled: boolean
  tile_readonly: boolean
  tile_horizontal: boolean
  tile_icon: IconName | undefined
  tile_sticker: string
  tile_sticker_variant: VariantState
}

const meta: Meta<CheckboxTileStoryArgs> = {
  title: 'Components/CheckboxTile',
  component: CheckboxTile,
  subcomponents: { CheckboxTiles },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    tile_label: {
      control: 'text',
      name: 'label',
      description: 'Tile label text',
      table: { category: 'CheckboxTile' },
    },
    tile_description: {
      control: 'text',
      name: 'description',
      description: 'Tile description text',
      table: { category: 'CheckboxTile' },
    },
    tile_checked: {
      control: 'boolean',
      name: 'checked',
      description: 'Checked state',
      table: { category: 'CheckboxTile' },
    },
    tile_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disabled state',
      table: { category: 'CheckboxTile' },
    },
    tile_readonly: {
      control: 'boolean',
      name: 'readonly',
      description: 'Read-only state',
      table: { category: 'CheckboxTile' },
    },
    tile_horizontal: {
      control: 'boolean',
      name: 'horizontal',
      description: 'Horizontal layout',
      table: { category: 'CheckboxTile' },
    },
    tile_icon: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      name: 'icon',
      description: 'Icon displayed in tile',
      table: { category: 'CheckboxTile' },
    },
    tile_sticker: {
      control: 'text',
      name: 'sticker',
      description: 'Sticker label',
      table: { category: 'CheckboxTile' },
    },
    tile_sticker_variant: {
      control: 'select',
      options: Object.values(VariantState),
      name: 'stickerVariant',
      description: 'Sticker variant',
      table: { category: 'CheckboxTile' },
    },
    align: {
      control: 'select',
      options: [Alignable.ALIGNED_START, Alignable.ALIGNED_CENTER, Alignable.ALIGNED_END],
      name: 'align',
      description: 'Horizontal alignment',
      table: { category: 'CheckboxTiles' },
    },
    verticalAlign: {
      control: 'select',
      options: [Alignable.ALIGNED_START, Alignable.ALIGNED_CENTER, Alignable.ALIGNED_END],
      name: 'verticalAlign',
      description: 'Vertical alignment',
      table: { category: 'CheckboxTiles' },
    },
  },
  args: {
    tile_label: 'Select option',
    tile_description: 'This is a checkbox tile option',
    tile_checked: false,
    tile_disabled: false,
    tile_readonly: false,
    tile_horizontal: false,
    tile_icon: undefined,
    tile_sticker: '',
    tile_sticker_variant: VariantState.ACCENT,
    align: Alignable.ALIGNED_START,
    verticalAlign: Alignable.ALIGNED_CENTER,
  },
  render: ({
    tile_label,
    tile_description,
    tile_checked,
    tile_disabled,
    tile_readonly,
    tile_horizontal,
    tile_icon,
    tile_sticker,
    tile_sticker_variant,
  }) => (
    <CheckboxTileComponent
      label={tile_label}
      description={tile_description}
      checked={tile_checked}
      disabled={tile_disabled}
      readonly={tile_readonly}
      horizontal={tile_horizontal}
      icon={tile_icon}
      sticker={tile_sticker || undefined}
      stickerVariant={tile_sticker_variant}
      onChange={() => {}}
    />
  ),
}

export default meta

type Story = StoryObj<CheckboxTileStoryArgs>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    tile_checked: true,
  },
}

export const Disabled: Story = {
  args: {
    tile_disabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    tile_icon: IconName.INFOS_CIRCLE,
  },
}

export const WithSticker: Story = {
  args: {
    tile_sticker: 'New',
  },
}

export const Horizontal: Story = {
  args: {
    tile_horizontal: true,
  },
}

export const InCheckboxTiles: Story = {
  render: () => (
    <CheckboxTiles align={Alignable.ALIGNED_START}>
      <CheckboxTileComponent label='Option 1' description='First checkbox tile' onChange={() => {}} />
      <CheckboxTileComponent label='Option 2' description='Second checkbox tile' onChange={() => {}} />
      <CheckboxTileComponent label='Option 3' description='Third checkbox tile' onChange={() => {}} />
    </CheckboxTiles>
  ),
}
