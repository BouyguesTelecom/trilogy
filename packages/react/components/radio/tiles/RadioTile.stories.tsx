import { IconName } from '@/components/icon'
import { VariantState } from '@/objects'
import { Alignable } from '@/objects/facets/Alignable'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import RadioTiles from './RadioTiles'
import type { RadioTilesProps } from './RadioTilesProps'
import RadioTileComponent from './tile/RadioTile'
import type { RadioTileProps } from './tile/RadioTileProps'

RadioTileComponent.displayName = 'RadioTile'
RadioTiles.displayName = 'RadioTiles'
Object.defineProperty(RadioTileComponent, 'name', { value: 'RadioTile' })

const RadioTile = (props: RadioTileProps): JSX.Element => <RadioTileComponent {...props} />
RadioTile.displayName = 'RadioTile'

interface RadioTileStoryArgs extends RadioTileProps, Omit<RadioTilesProps, 'children'> {
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

const meta: Meta<RadioTileStoryArgs> = {
  title: 'Components/RadioTile',
  component: RadioTile,
  subcomponents: { RadioTiles },
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
      table: { category: 'RadioTile' },
    },
    tile_description: {
      control: 'text',
      name: 'description',
      description: 'Tile description text',
      table: { category: 'RadioTile' },
    },
    tile_checked: {
      control: 'boolean',
      name: 'checked',
      description: 'Checked state',
      table: { category: 'RadioTile' },
    },
    tile_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disabled state',
      table: { category: 'RadioTile' },
    },
    tile_readonly: {
      control: 'boolean',
      name: 'readonly',
      description: 'Read-only state',
      table: { category: 'RadioTile' },
    },
    tile_horizontal: {
      control: 'boolean',
      name: 'horizontal',
      description: 'Horizontal layout',
      table: { category: 'RadioTile' },
    },
    tile_icon: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      name: 'icon',
      description: 'Icon displayed in tile',
      table: { category: 'RadioTile' },
    },
    tile_sticker: {
      control: 'text',
      name: 'sticker',
      description: 'Sticker label',
      table: { category: 'RadioTile' },
    },
    tile_sticker_variant: {
      control: 'select',
      options: Object.values(VariantState),
      name: 'stickerVariant',
      description: 'Sticker variant',
      table: { category: 'RadioTile' },
    },
    align: {
      control: 'select',
      options: [Alignable.ALIGNED_START, Alignable.ALIGNED_CENTER, Alignable.ALIGNED_END],
      name: 'align',
      description: 'Horizontal alignment',
      table: { category: 'RadioTiles' },
    },
    verticalAlign: {
      control: 'select',
      options: [Alignable.ALIGNED_START, Alignable.ALIGNED_CENTER, Alignable.ALIGNED_END],
      name: 'verticalAlign',
      description: 'Vertical alignment',
      table: { category: 'RadioTiles' },
    },
  },
  args: {
    tile_label: 'Select option',
    tile_description: 'This is a radio tile option',
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
    <RadioTileComponent
      label={tile_label}
      description={tile_description}
      checked={tile_checked}
      disabled={tile_disabled}
      readonly={tile_readonly}
      horizontal={tile_horizontal}
      icon={tile_icon}
      sticker={tile_sticker || undefined}
      stickerVariant={tile_sticker_variant}
      name='radio-tile-group'
      value='option-1'
      onChange={() => {}}
    />
  ),
}

export default meta

type Story = StoryObj<RadioTileStoryArgs>

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

export const InRadioTiles: Story = {
  render: () => (
    <RadioTiles align={Alignable.ALIGNED_START}>
      <RadioTileComponent
        name='radio-tiles-group'
        label='Option 1'
        value='one'
        description='First radio tile'
        checked
        onChange={() => {}}
      />
      <RadioTileComponent
        name='radio-tiles-group'
        label='Option 2'
        value='two'
        description='Second radio tile'
        onChange={() => {}}
      />
      <RadioTileComponent
        name='radio-tiles-group'
        label='Option 3'
        value='three'
        description='Third radio tile'
        onChange={() => {}}
      />
    </RadioTiles>
  ),
}
