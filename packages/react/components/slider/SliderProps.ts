// SliderProps.ts
import { Accessibility, Dev } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'
import type { View } from 'react-native'
import type { GapSize } from '@/components/columns/ColumnsTypes'
import type {
  SliderRadiusValues,
  SlidesNum,
  SlidesNumConfig,
} from '@/components/slider/SliderEnum'

/**
 * Slider Interface
 */
export interface SliderProps extends Accessibility, Dev, CommonProps {
  children: React.ReactNode
  autoplay?: boolean
  autoplayDelay?: number
  gap?: GapSize
  loop?: boolean
  radius?: SliderRadiusValues
  fullBleed?: boolean
  onSlideChange?: (index: number) => void
  slidesPerView?: SlidesNum | SlidesNumConfig
  snap?: boolean
}

export interface SliderItemProps extends CommonProps {
  children: React.ReactNode
}

export type SliderRef = HTMLElement
export type SliderNativeRef = View

export type SliderItemRef = HTMLDivElement
export type SliderItemNativeRef = View
