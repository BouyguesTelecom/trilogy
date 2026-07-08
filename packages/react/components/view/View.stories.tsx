import { Align, Justify, TrilogyColor } from '@/objects'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import ViewComponent from './View'
import { ViewMarkup } from './ViewProps'

ViewComponent.displayName = 'View'

interface ViewStoryArgs {
  children: string
  markup?: ViewMarkup
  loading: boolean
  backgroundColor?: TrilogyColor
  backgroundSrc?: string
  inverted: boolean
  fullwidth: boolean
  flexable: boolean
  justify?: Justify
  align?: Align
  id: string
  className: string
  testId: string
}

const meta: Meta<ViewStoryArgs> = {
  title: 'Components/View',
  component: ViewComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { type: 'dynamic' },
      description: { component: ' ' },
    },
  },
  argTypes: {
    children: { control: 'text', description: 'View content' },
    markup: {
      control: 'select',
      options: [undefined, ...Object.values(ViewMarkup)],
      description: 'HTML markup element',
    },
    loading: { control: 'boolean', description: 'Loading state' },
    backgroundColor: {
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      description: 'Background color',
    },
    backgroundSrc: { control: 'text', description: 'Background image source' },
    inverted: { control: 'boolean', description: 'Inverted color mode' },
    fullwidth: { control: 'boolean', description: 'Take full width' },
    flexable: { control: 'boolean', description: 'Enable flex layout' },
    justify: {
      control: 'select',
      options: [undefined, ...Object.values(Justify)],
      description: 'Justify content',
    },
    align: {
      control: 'select',
      options: [undefined, ...Object.values(Align)],
      description: 'Align items',
    },
    id: { control: 'text', description: 'Custom html id' },
    className: { control: 'text', description: 'Additional CSS classes' },
    testId: { control: 'text', description: 'Testing identifier' },
  },
  args: {
    children: 'View content',
    markup: ViewMarkup.DIV,
    loading: undefined,
    backgroundColor: undefined,
    backgroundSrc: '',
    inverted: false,
    fullwidth: true,
    flexable: false,
    justify: undefined,
    align: undefined,
    id: '',
    className: '',
    testId: '',
  },
  render: ({
    children,
    markup,
    loading,
    backgroundColor,
    backgroundSrc,
    inverted,
    fullwidth,
    flexable,
    justify,
    align,
    id,
    className,
    testId,
  }) => (
    <ViewComponent
      markup={markup}
      loading={loading}
      backgroundColor={backgroundColor}
      backgroundSrc={backgroundSrc || undefined}
      inverted={inverted}
      fullwidth={fullwidth}
      flexable={flexable}
      justify={justify}
      align={align}
      id={id || undefined}
      className={className || undefined}
      testId={testId || undefined}
      style={flexable ? { minHeight: 80, padding: 16, gap: 12 } : { padding: 16 }}
    >
      {children}
    </ViewComponent>
  ),
}

export default meta

type Story = StoryObj<ViewStoryArgs>

export const Default: Story = {}

export const FlexLayout: Story = {
  args: {
    flexable: true,
    justify: Justify.SPACE_BETWEEN,
    align: Align.CENTER,
    children: 'Flexible View',
  },
}

export const Colored: Story = {
  args: {
    backgroundColor: TrilogyColor.MAIN_FADE,
  },
}

export const Playground: Story = {}
