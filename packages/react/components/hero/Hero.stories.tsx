import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { TrilogyColor } from '../../objects'
import HeroComponent from './Hero'
import { BackgroundHeight } from './heroEnum'

HeroComponent.displayName = 'Hero'

interface HeroStoryArgs {
  children: string
  backgroundColor?: TrilogyColor
  backgroundSrc?: string
  inverted: boolean
  overlap: boolean
  backgroundHeight?: BackgroundHeight
}

const Hero = ({
  children,
  backgroundColor,
  backgroundSrc,
  inverted,
  overlap,
  backgroundHeight,
}: HeroStoryArgs): JSX.Element => (
  <HeroComponent
    backgroundColor={backgroundColor}
    backgroundSrc={backgroundSrc}
    inverted={inverted}
    backgroundHeight={backgroundHeight}
    overlap={
      overlap
        ? [
            <div
              key='hero-overlap'
              style={{
                maxWidth: 420,
                margin: '0 auto',
                padding: 24,
                borderRadius: 16,
                background: '#ffffff',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
              }}
            >
              <strong>Overlapped content</strong>
              <p style={{ margin: '8px 0 0' }}>This block sits on top of the hero.</p>
            </div>,
          ]
        : false
    }
  >
    <div
      style={{
        minHeight: 260,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 12,
        padding: 32,
        color: inverted ? '#fff' : '#1f2937',
      }}
    >
      <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.1 }}>{children}</h2>
      <p style={{ margin: 0, maxWidth: 560, fontSize: 18, lineHeight: 1.5 }}>
        A hero section used to highlight a key message with optional background, image and overlap content.
      </p>
    </div>
  </HeroComponent>
)

Hero.displayName = 'Hero'

const meta: Meta<HeroStoryArgs> = {
  title: 'Components/Hero',
  component: Hero,
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
    children: {
      control: 'text',
      name: 'children',
      description: 'Main hero title',
      table: { category: 'Hero' },
    },
    backgroundColor: {
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      name: 'backgroundColor',
      description: 'Hero background color',
      table: { category: 'Hero' },
    },
    backgroundSrc: {
      control: 'select',
      options: [
        undefined,
        'https://picsum.photos/id/1/1500/600',
        'https://picsum.photos/id/24/1500/600',
        'https://picsum.photos/id/42/1500/600',
      ],
      name: 'backgroundSrc',
      description: 'Background image source',
      table: { category: 'Hero' },
    },
    inverted: {
      control: 'boolean',
      name: 'inverted',
      description: 'Use inverted hero styling',
      table: { category: 'Hero' },
    },
    overlap: {
      control: 'boolean',
      name: 'overlap',
      description: 'Display an overlapped content card',
      table: { category: 'Hero' },
    },
    backgroundHeight: {
      control: 'select',
      options: [undefined, ...Object.values(BackgroundHeight)],
      name: 'backgroundHeight',
      description: 'Custom background height',
      table: { category: 'Hero' },
    },
  },
  args: {
    children: 'Hero title',
    backgroundColor: TrilogyColor.MAIN,
    backgroundSrc: undefined,
    inverted: true,
    overlap: false,
    backgroundHeight: BackgroundHeight.MEDIUM,
  },
}

export default meta

type Story = StoryObj<HeroStoryArgs>

export const Default: Story = {}

export const BackgroundImage: Story = {
  args: {
    backgroundColor: undefined,
    backgroundSrc: 'https://picsum.photos/id/1/1500/600',
  },
}

export const Overlapped: Story = {
  args: {
    overlap: true,
  },
}

export const BackgroundColor: Story = {
  args: {
    backgroundSrc: undefined,
    backgroundColor: TrilogyColor.ACCENT,
  },
}
