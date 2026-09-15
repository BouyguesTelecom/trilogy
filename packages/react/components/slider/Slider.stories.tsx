// Slider.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import SliderComponent from './Slider'
import SliderItem from './slider-item/SliderItem'
import type { SliderProps } from './SliderProps'
import { GapSize } from '@/components/columns/ColumnsTypes'
import { SlidesNum } from '@/components/slider/SliderEnum'

const Slider = (props: SliderProps): JSX.Element => <SliderComponent {...props} />
Slider.displayName = 'Slider'

interface SliderStoryArgs {
  slider_autoplay: boolean
  slider_autoplayDelay: number
  slider_loop: boolean
  slider_gap: '' | GapSize
  slider_accessibilityLabel: string
  slider_className: string
  slider_slidesPerView_mode: 'single' | 'responsive'
  slider_slidesPerView_value: 1 | 2 | 3
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
    slider_autoplay: {
      control: 'boolean',
      name: 'autoplay',
      description: 'Auto-advance slides',
      table: { category: 'Slider' },
    },
    slider_autoplayDelay: {
      control: { type: 'number', min: 500, step: 250 },
      name: 'autoplayDelay',
      description: 'Delay between transitions (ms)',
      table: { category: 'Slider' },
    },
    slider_loop: {
      control: 'boolean',
      name: 'loop',
      description: 'Infinite loop',
      table: { category: 'Slider' },
    },
    slider_gap: {
      control: {
        type: 'select',
        options: ['', GapSize.ONE, GapSize.TWO, GapSize.THREE, GapSize.FOUR, GapSize.FIVE, GapSize.SIX],
      },
      name: 'gap',
      description: 'Gap between slides',
      table: { category: 'Slider' },
    },
    slider_accessibilityLabel: {
      control: 'text',
      name: 'accessibilityLabel',
      table: { category: 'Slider' },
    },
    slider_className: {
      control: 'text',
      name: 'className',
      table: { category: 'Slider' },
    },
    slider_slidesPerView_mode: {
      control: {
        type: 'radio',
      },
      options: ['single', 'responsive'],
      name: 'slidesPerView mode',
      description: 'Use a single value or responsive config',
      table: { category: 'Slider' },
    },
    slider_slidesPerView_value: {
      control: {
        type: 'radio',
      },
      options: [1, 2, 3],
      name: 'slidesPerView',
      description: 'Desktop slides per view (1–3)',
      table: { category: 'Slider' },
    },
  },
  args: {
    slider_autoplay: false,
    slider_autoplayDelay: 3000,
    slider_loop: true,
    slider_gap: GapSize.THREE,
    slider_accessibilityLabel: 'Content slider',
    slider_className: '',
    slider_slidesPerView_mode: 'responsive',
    slider_slidesPerView_value: 3,
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
  render: (args) => {
    const gap: SliderProps['gap'] =
      (args.slider_gap as GapSize) || undefined

    let slidesPerView: SliderProps['slidesPerView'] | undefined

    if (args.slider_slidesPerView_mode === 'single') {
      // simple desktop value: 1,2,3 with automatic tablet/mobile downgrade
      if (args.slider_slidesPerView_value === 3) {
        slidesPerView = SlidesNum.THREE
      } else if (args.slider_slidesPerView_value === 2) {
        slidesPerView = SlidesNum.TWO
      } else {
        slidesPerView = SlidesNum.ONE
      }
    } else {
      // responsive example:
      // 3 -> desktop:3, tablet:2, mobile:1
      // 2 -> desktop:2, tablet:2, mobile:1
      // 1 -> 1 partout
      switch (args.slider_slidesPerView_value) {
        case 3:
          slidesPerView = {
            desktop: SlidesNum.THREE,
            tablet: SlidesNum.TWO,
            mobile: SlidesNum.ONE,
          }
          break
        case 2:
          slidesPerView = {
            desktop: SlidesNum.TWO,
            tablet: SlidesNum.TWO,
            mobile: SlidesNum.ONE,
          }
          break
        case 1:
        default:
          slidesPerView = {
            desktop: SlidesNum.ONE,
            tablet: SlidesNum.ONE,
            mobile: SlidesNum.ONE,
          }
          break
      }
    }

    return (
      <Slider
        autoplay={args.slider_autoplay}
        autoplayDelay={args.slider_autoplayDelay}
        loop={args.slider_loop}
        gap={gap}
        accessibilityLabel={args.slider_accessibilityLabel}
        className={args.slider_className}
        slidesPerView={slidesPerView}
      >
        <SliderItem>
          <Panel label="Slide 1" bg="#3d5d7e" />
        </SliderItem>
        <SliderItem>
          <Panel label="Slide 2" bg="#e6685e" />
        </SliderItem>
        <SliderItem>
          <Panel label="Slide 3" bg="#3fa06b" />
        </SliderItem>
        <SliderItem>
          <Panel label="Slide 4" bg="#8e44ad" />
        </SliderItem>
        <SliderItem>
          <Panel label="Slide 5" bg="#f39c12" />
        </SliderItem>
      </Slider>
    )
  },
}
