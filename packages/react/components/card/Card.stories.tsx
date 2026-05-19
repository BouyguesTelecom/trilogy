import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import CardComponent from './Card'
import type { CardProps } from './CardProps'
import CardContent from './content/CardContent'
import type { CardContentProps } from './content/CardContentProps'
import CardImage from './image/CardImage'
import { CardImageSize } from './image/CardImageEnum'
import type { CardImageProps } from './image/CardImageProps'

CardComponent.displayName = 'Card'
CardContent.displayName = 'CardContent'
CardImage.displayName = 'CardImage'
Object.defineProperty(CardComponent, 'name', { value: 'Card' })

const Card = (props: CardProps & { children: React.ReactNode }) => <CardComponent {...props} />
const CardContentWrapper = (props: CardContentProps & { children: React.ReactNode }) => <CardContent {...props} />
const CardImageWrapper = (props: CardImageProps) => <CardImage {...props} />

interface CardStoryArgs extends CardProps, CardContentProps {
  content: string
  src: string
  alt: string
  size?: CardImageProps['size']
}

const meta: Meta<CardStoryArgs> = {
  title: 'Components/Card',
  component: Card,
  subcomponents: { CardContent: CardContentWrapper, CardImage: CardImageWrapper },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    flat: { control: 'boolean', name: 'flat', description: 'Add border to card', table: { category: 'Card' } },
    horizontal: {
      control: 'boolean',
      name: 'horizontal',
      description: 'Horizontal card orientation',
      table: { category: 'Card' },
    },
    floating: { control: 'boolean', name: 'floating', description: 'Floating card', table: { category: 'Card' } },
    skeleton: {
      control: 'boolean',
      name: 'skeleton',
      description: 'Show loading skeleton',
      table: { category: 'Card' },
    },
    reversed: { control: 'boolean', name: 'reversed', description: 'Reversed card', table: { category: 'Card' } },
    href: { control: 'text', name: 'href', description: 'Card link (anchor)', table: { category: 'Card' } },
    active: { control: 'boolean', name: 'active', description: 'Active card', table: { category: 'Card' } },
    src: { control: 'text', name: 'src', description: 'Image source', table: { category: 'CardImage' } },
    alt: {
      control: 'text',
      name: 'alt',
      description: 'Image alt text',
      table: { category: 'CardImage' },
    },
    content: {
      control: 'text',
      name: 'children',
      description: 'CardContent children',
      table: { category: 'CardContent' },
    },
    size: {
      control: { type: 'select' },
      options: Object.values(CardImageSize),
      name: 'size',
      description: 'Image size',
      table: { category: 'CardImage' },
    },
  },
  args: {
    flat: false,
    horizontal: false,
    floating: false,
    skeleton: false,
    reversed: false,
    href: '',
    active: false,
    src: 'https://placehold.co/600x400',
    alt: 'Card image',
    content: 'This is the card content.',
  },
  render: ({ flat, horizontal, floating, skeleton, reversed, href, active, src, alt, size, content }) => (
    <CardComponent
      flat={flat}
      horizontal={horizontal}
      floating={floating}
      skeleton={skeleton}
      reversed={reversed}
      href={href}
      active={active}
    >
      <CardContent>{content}</CardContent>
    </CardComponent>
  ),
}

export default meta

type Story = StoryObj<CardStoryArgs>

export const Default: Story = {}
export const WithImage: Story = {
  args: { size: CardImageSize.SIZE_1 },
  render: (args) => (
    <CardComponent
      flat={args.flat}
      horizontal={args.horizontal}
      floating={args.floating}
      skeleton={args.skeleton}
      reversed={args.reversed}
      href={args.href}
      active={args.active}
    >
      <CardImage src={args.src} alt={args.alt} size={args.size} />
      <CardContent>{args.content}</CardContent>
    </CardComponent>
  ),
}
