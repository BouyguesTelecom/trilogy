import { TrilogyColor } from '@/objects/facets/Color'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import SectionComponent from './Section'

SectionComponent.displayName = 'Section'

interface SectionStoryArgs {
  children: string
  backgroundColor?: TrilogyColor
  backgroundSrc?: string
  inverted: boolean
  skeleton: boolean
  id: string
  className: string
  testId: string
}

const meta: Meta<SectionStoryArgs> = {
  title: 'Components/Section',
  component: SectionComponent,
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
    children: { control: 'text', description: 'Section content' },
    backgroundColor: {
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      description: 'Background color',
    },
    backgroundSrc: {
      control: 'text',
      description: 'Background image source',
    },
    inverted: { control: 'boolean', description: 'Inverted text color mode' },
    skeleton: { control: 'boolean', description: 'Loading skeleton state' },
    id: { control: 'text', description: 'Custom html id' },
    className: { control: 'text', description: 'Additional CSS classes' },
    testId: { control: 'text', description: 'Testing identifier' },
  },
  args: {
    children: 'Section content',
    backgroundColor: undefined,
    backgroundSrc: '',
    inverted: false,
    skeleton: false,
    id: '',
    className: '',
    testId: '',
  },
  render: ({ children, backgroundColor, backgroundSrc, inverted, skeleton, id, className, testId }) => (
    <SectionComponent
      backgroundColor={backgroundColor}
      backgroundSrc={backgroundSrc || undefined}
      inverted={inverted}
      skeleton={skeleton}
      id={id || undefined}
      className={className || undefined}
      testId={testId || undefined}
    >
      <div style={{ padding: 24 }}>{children}</div>
    </SectionComponent>
  ),
}

export default meta

type Story = StoryObj<SectionStoryArgs>

export const Default: Story = {}

export const Colored: Story = {
  args: {
    backgroundColor: TrilogyColor.MAIN_FADE,
  },
}

export const WithBackgroundImage: Story = {
  args: {
    backgroundSrc: 'https://picsum.photos/id/24/1400/500',
    inverted: true,
  },
}

export const Playground: Story = {}
