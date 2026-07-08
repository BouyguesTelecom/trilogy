import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import SliderComponent from './Slider'
import SliderItem from './slider-item/SliderItem'
import type { SliderProps } from './SliderProps'

const Slider = (props: SliderProps): JSX.Element => <SliderComponent {...props} />
Slider.displayName = 'Slider'

interface SliderStoryArgs {
  slider_autoplay: boolean
  slider_autoplayDelay: number
  slider_loop: boolean
  slider_slidesPerView: number
  slider_spaceBetween: number
  slider_ariaLabel: string
  slider_className: string
}

const meta: Meta<SliderStoryArgs> = {
  title: 'Components/Slider',
  component: Slider,
  subcomponents: { SliderItem },
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: ' ' } },
  },
  argTypes: {
    slider_autoplay: { control: 'boolean', name: 'autoplay', description: 'Auto-advance slides', table: { category: 'Slider' } },
    slider_autoplayDelay: {
      control: { type: 'number', min: 500, step: 250 },
      name: 'autoplayDelay',
      description: 'Delay between transitions (ms)',
      table: { category: 'Slider' },
    },
    slider_loop: { control: 'boolean', name: 'loop', description: 'Infinite loop', table: { category: 'Slider' } },
    slider_slidesPerView: {
      control: { type: 'number', min: 1, max: 4, step: 1 },
      name: 'slidesPerView',
      description: 'Slides visible at once',
      table: { category: 'Slider' },
    },
    slider_spaceBetween: {
      control: { type: 'number', min: 0, step: 4 },
      name: 'spaceBetween',
      description: 'Gap between slides (px)',
      table: { category: 'Slider' },
    },
    slider_ariaLabel: { control: 'text', name: 'ariaLabel', table: { category: 'Slider' } },
    slider_className: { control: 'text', name: 'className', table: { category: 'Slider' } },
  },
  args: {
    slider_autoplay: false,
    slider_autoplayDelay: 3000,
    slider_loop: true,
    slider_slidesPerView: 1,
    slider_spaceBetween: 0,
    slider_ariaLabel: 'Content slider',
    slider_className: '',
  },
}

export default meta

type Story = StoryObj<SliderStoryArgs>

const Panel = ({ label, bg }: { label: string; bg: string }): JSX.Element => (
  <div
    style={{
      height: 220,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: bg,
      color: '#fff',
      fontSize: 28,
      fontWeight: 700,
    }}
  >
    {label}
  </div>
)

export const Default: Story = {
  render: (args) => (
    <Slider
      autoplay={args.slider_autoplay}
      autoplayDelay={args.slider_autoplayDelay}
      loop={args.slider_loop}
      slidesPerView={args.slider_slidesPerView}
      spaceBetween={args.slider_spaceBetween}
      ariaLabel={args.slider_ariaLabel}
      className={args.slider_className}
    >
      <SliderItem>
        <Panel label='Slide 1' bg='#3d5d7e' />
      </SliderItem>
      <SliderItem>
        <Panel label='Slide 2' bg='#e6685e' />
      </SliderItem>
      <SliderItem>
        <Panel label='Slide 3' bg='#3fa06b' />
      </SliderItem>
    </Slider>
  ),
}
