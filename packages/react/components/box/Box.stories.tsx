import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import BoxComponent from './Box'
import BoxContent from './content'
import BoxFooter from './footer'
import BoxHeader from './header'
import BoxItem from './item'
import type { BoxProps } from './BoxProps'
import { TrilogyColor } from '@/objects/facets/Color'

BoxComponent.displayName = 'Box'
Object.defineProperty(BoxComponent, 'name', { value: 'Box' })

const Box = (props: BoxProps): JSX.Element => (
  <BoxComponent {...props}>
    <BoxContent>Box content</BoxContent>
  </BoxComponent>
)
Box.displayName = 'Box'
Object.defineProperty(Box, 'name', { value: 'Box' })

interface BoxStoryArgs {
  box_active: boolean
  box_inverted: boolean
  box_flat: boolean
  box_shadowless: boolean
  box_fullheight: boolean
  box_headerOffset: boolean
  box_backgroundColor?: TrilogyColor
  box_highlighted?: TrilogyColor
  header_enabled: boolean
  header_children: string
  header_variant?: TrilogyColor
  content_children: string
  item_enabled: boolean
  item_children: string
  footer_enabled: boolean
  footer_children: string
  footer_backgroundColor?: TrilogyColor
}

const meta: Meta<BoxStoryArgs> = {
  title: 'Components/Box',
  component: Box,
  subcomponents: { BoxContent, BoxHeader, BoxFooter, BoxItem },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    box_active: {
      control: 'boolean',
      name: 'active',
      description: 'Set active state on Box',
      table: { category: 'Box' },
    },
    box_inverted: {
      control: 'boolean',
      name: 'inverted',
      description: 'Invert text/colors',
      table: { category: 'Box' },
    },
    box_flat: {
      control: 'boolean',
      name: 'flat',
      description: 'Flat style without standard shadow',
      table: { category: 'Box' },
    },
    box_shadowless: {
      control: 'boolean',
      name: 'shadowless',
      description: 'Remove shadow on Box',
      table: { category: 'Box' },
    },
    box_fullheight: {
      control: 'boolean',
      name: 'fullheight',
      description: 'Make Box full height',
      table: { category: 'Box' },
    },
    box_headerOffset: {
      control: 'boolean',
      name: 'headerOffset',
      description: 'Offset content when header is used',
      table: { category: 'Box' },
    },
    box_backgroundColor: {
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      name: 'backgroundColor',
      description: 'Background color for Box',
      table: { category: 'Box' },
    },
    box_highlighted: {
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      name: 'highlighted',
      description: 'Left highlighted border color',
      table: { category: 'Box' },
    },
    header_enabled: {
      control: 'boolean',
      name: 'enabled',
      description: 'Render BoxHeader (optional)',
      table: { category: 'BoxHeader' },
    },
    header_children: {
      control: 'text',
      name: 'children',
      description: 'Header content',
      table: { category: 'BoxHeader' },
    },
    header_variant: {
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      name: 'variant',
      description: 'Header background color variant',
      table: { category: 'BoxHeader' },
    },
    content_children: {
      control: 'text',
      name: 'children',
      description: 'Content displayed in BoxContent (required)',
      table: { category: 'BoxContent' },
    },
    item_enabled: {
      control: 'boolean',
      name: 'enabled',
      description: 'Render BoxItem inside BoxContent',
      table: { category: 'BoxItem' },
    },
    item_children: {
      control: 'text',
      name: 'children',
      description: 'Content displayed in BoxItem',
      table: { category: 'BoxItem' },
    },
    footer_enabled: {
      control: 'boolean',
      name: 'enabled',
      description: 'Render BoxFooter (optional)',
      table: { category: 'BoxFooter' },
    },
    footer_children: {
      control: 'text',
      name: 'children',
      description: 'Footer content',
      table: { category: 'BoxFooter' },
    },
    footer_backgroundColor: {
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      name: 'backgroundColor',
      description: 'Footer background color',
      table: { category: 'BoxFooter' },
    },
  },
  args: {
    box_active: false,
    box_inverted: false,
    box_flat: false,
    box_shadowless: false,
    box_fullheight: false,
    box_headerOffset: false,
    box_backgroundColor: undefined,
    box_highlighted: undefined,
    header_enabled: true,
    header_children: 'Box header',
    header_variant: undefined,
    content_children: 'Box content is required and always rendered.',
    item_enabled: false,
    item_children: 'Item content',
    footer_enabled: false,
    footer_children: 'Box footer',
    footer_backgroundColor: undefined,
  },
  render: ({
    box_active,
    box_inverted,
    box_flat,
    box_shadowless,
    box_fullheight,
    box_headerOffset,
    box_backgroundColor,
    box_highlighted,
    header_enabled,
    header_children,
    header_variant,
    content_children,
    item_enabled,
    item_children,
    footer_enabled,
    footer_children,
    footer_backgroundColor,
  }) => (
    <BoxComponent
      active={box_active}
      inverted={box_inverted}
      flat={box_flat}
      shadowless={box_shadowless}
      fullheight={box_fullheight}
      headerOffset={box_headerOffset}
      backgroundColor={box_backgroundColor}
      highlighted={box_highlighted}
    >
      {header_enabled && <BoxHeader variant={header_variant}>{header_children}</BoxHeader>}
      <BoxContent>
        {item_enabled ? <BoxItem>{item_children}</BoxItem> : content_children}
      </BoxContent>
      {footer_enabled && <BoxFooter backgroundColor={footer_backgroundColor}>{footer_children}</BoxFooter>}
    </BoxComponent>
  ),
}

export default meta
type Story = StoryObj<BoxStoryArgs>

export const Default: Story = {}

export const ContentOnly: Story = {
  args: {
    header_enabled: false,
    footer_enabled: false,
  },
}

export const WithHeaderAndFooter: Story = {
  args: {
    header_enabled: true,
    footer_enabled: true,
  },
}

export const WithItem: Story = {
  args: {
    item_enabled: true,
  },
}

export const Highlighted: Story = {
  args: {
    box_highlighted: TrilogyColor.INFO,
  },
}

export const Playground: Story = {}
