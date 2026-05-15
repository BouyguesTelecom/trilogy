import type { Meta, StoryObj } from '@storybook/react'
import { TrilogyColor } from '../../objects'
import HeroComponent from './Hero'
import { BackgroundHeight } from './heroEnum'
import React from 'react'

HeroComponent.displayName = 'Hero'

interface HeroStoryArgs {
  hero_children: string
  hero_backgroundColor?: TrilogyColor
  hero_backgroundSrc?: string
  hero_inverted: boolean
  hero_overlap: boolean
  hero_backgroundHeight?: BackgroundHeight
}

const Hero = ({
  hero_children,
  hero_backgroundColor,
  hero_backgroundSrc,
  hero_inverted,
  hero_overlap,
  hero_backgroundHeight,
}: HeroStoryArgs): JSX.Element => (
  <HeroComponent
    backgroundColor={hero_backgroundColor}
    backgroundSrc={hero_backgroundSrc}
    inverted={hero_inverted}
    backgroundHeight={hero_backgroundHeight}
    overlap={
      hero_overlap
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
        color: hero_inverted ? '#fff' : '#1f2937',
      }}
    >
      <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.1 }}>{hero_children}</h2>
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
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    hero_children: {
      control: 'text',
      name: 'children',
      description: 'Main hero title',
      table: { category: 'Hero' },
    },
    hero_backgroundColor: {
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      name: 'backgroundColor',
      description: 'Hero background color',
      table: { category: 'Hero' },
    },
    hero_backgroundSrc: {
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
    hero_inverted: {
      control: 'boolean',
      name: 'inverted',
      description: 'Use inverted hero styling',
      table: { category: 'Hero' },
    },
    hero_overlap: {
      control: 'boolean',
      name: 'overlap',
      description: 'Display an overlapped content card',
      table: { category: 'Hero' },
    },
    hero_backgroundHeight: {
      control: 'select',
      options: [undefined, ...Object.values(BackgroundHeight)],
      name: 'backgroundHeight',
      description: 'Custom background height',
      table: { category: 'Hero' },
    },
  },
  args: {
    hero_children: 'Hero title',
    hero_backgroundColor: TrilogyColor.MAIN,
    hero_backgroundSrc: undefined,
    hero_inverted: true,
    hero_overlap: false,
    hero_backgroundHeight: BackgroundHeight.MEDIUM,
  },
}

export default meta

type Story = StoryObj<HeroStoryArgs>

export const Default: Story = {}

export const BackgroundImage: Story = {
  args: {
    hero_backgroundColor: undefined,
    hero_backgroundSrc: 'https://picsum.photos/id/1/1500/600',
  },
}

export const Overlapped: Story = {
  args: {
    hero_overlap: true,
  },
}

export const BackgroundColor: Story = {
  args: {
    hero_backgroundSrc: undefined,
    hero_backgroundColor: TrilogyColor.ACCENT,
  },
}
